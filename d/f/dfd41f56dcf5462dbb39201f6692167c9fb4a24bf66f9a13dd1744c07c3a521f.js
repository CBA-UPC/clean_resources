/*! For license information please see ad.min.js.LICENSE.txt */
(self.webpackChunkPhoenix=self.webpackChunkPhoenix||[]).push([[5418],{77965:e=>{"use strict";e.exports=function(e){var t,n=(t=e,window[t]=window[t]||[],window[t]);return new Promise((function(e,t){n.push(()}))}},63950:e=>{"use strict";e.exports={breakpoints:{A:0,B:675,C:1240,D:1680},breakpointHeights:{D:1050},soccerLeagues:["epl","mls","la liga","serie a"],fullSoccerLeagues:["premier league","major league soccer","laliga","serie a"]}},52784:(e,t,n)=>{"use strict";var i=n(24433);e.exports={getDependencyClass:function(e){if(!e)throw new Error("dependencyName required");var t=i("dependency:"+e);return window.customElements.whenDefined(e).then((function(){return t.end(),window.customElements.get(e)}))},getFirstDependencyElement:function(e,t){if(!e)throw new Error("dependencyName required");return t||(t=document),window.customElements.whenDefined(e).then((function(){var n=t.querySelector(e);if(!n)throw new Error(e+" element cannot be found");return n}))},phoenixCustomElement:},90184:e=>{"use strict";e.exports=function(){var e,t,n,i,r,o,a,s,c,l,u=null===(e=window.phxPageTarget)||void 0===e||null===(t=e.config)||void 0===t||null===(n=t.global)||void 0===n||null===(i=n.config)||void 0===i?void 0:i.lazyLoading;return{disabled:!0===(null==u?void 0:u.disabled),thresholds:{renderMarginPercent:null!==(r=null==u||null===(o=u.thresholds)||void 0===o?void 0:o.renderMarginPercent)&&void 0!==r?r:75,fetchMarginPercent:null!==(a=null==u||null===(s=u.thresholds)||void 0===s?void 0:s.fetchMarginPercent)&&void 0!==a?a:200,mobileScaling:null!==(c=null==u||null===(l=u.thresholds)||void 0===l?void 0:l.mobileScaling)&&void 0!==c?c:3}}}},86483:e=>{"use strict";var t,n=try{t=window}catch(e){t={}}e.exports=t.performance&&t.performance.mark?t.performance:{getEntriesByName:n,mark:n,measure:n}},24433:(e,t,n)=>{"use strict";var i=n(86483),r=0;function o(){var e="phxMark:"+r++;return i.mark(e),e}e.exports=function(e){var t=o();return{end:function(){var n=o();i.measure(e,t,n);var r=i.getEntriesByName(e);if(r&&r.length)return r[r.length-1].duration}}}},20751:(e,t,n)=>{"use strict";function i(e,t){var n,i=this,r=null,o=+t;this.delay=t,this.called=!1,this.callback_once=this.remaining=function(){return Math.max(o+n-+new Date,0)},this.cancel=this.pause=function(){clearTimeout(r),o-=+new Date-n,i.paused=!0},this.resume=function(){n=+new Date,clearTimeout(r),r=setTimeout(i.callback_once,o),i.paused=!1},this.resume()}n.d(t,{Z:)},9736:(e,t,n)=>{function i(){"use strict";ction r(){}function a(){}},g=Object.prototype,m=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",k=b.toStringTag||"@@toStringTag";try{e({},"")}catch(t){e=y.wrap=t;var C={},O={};e(O,w,(function(){return this}));var E=Object.getPrototypeOf,T=E&&E(E(v([])));T&&T!==g&&m.call(T,w)&&(O=T);var L=s.prototype=r.prototype=Object.create(O);return a.prototype=s,e(L,"constructor",s),e(s,"constructor",a),a.displayName=e(s,k,"GeneratorFunction"),y.isGeneratorFunction=y.mark=y.awrap=c(l.prototype),e(l.prototype,x,(function(){return this})),y.AsyncIterator=l,y.async=c(L),e(L,k,"Generator"),e(L,w,(),e(L,"toString",(),y.keys=y.values=v,f.prototype={constructor:f,reset:stop:dispatchException:abrupt:complete:finish:catch:delegateYield:,y}unction o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(();return e}h=n(63950),f=h.breakpoints,v=h.breakpointHeights;function p(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.head,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:document;return new Promise((function(r,o){var a=i.createElement("script");for(var s in t)a.setAttribute(s,t[s]);a.onload=a.onerror=a.type="text/javascript",a.src=e,n.appendChild(a)}))}var y={};function g(){var e,t=window.innerWidth,n=window.innerHeight;for(var i in f)t>=f[i]&&(!v[i]||n>=v[i])&&(e=i);return e}var m,b,w,x=function(){function e(){l(this,e),this.observedBreakpoint=void 0,this.subscribers=[],this._observe()}return d(e,[{key:"_observe",value:function(){var e=this;this.observedBreakpoint=g(),window.addEventListener("resize",(function(){var t=g();t!==e.observedBreakpoint&&(e.observedBreakpoint=t,e.subscribers.forEach(())}))}},{key:"subscribe",value:function(e){if(!e.onBreakpointChange)throw new Error("onBreakpointChange method required");this.unsubscribe(e),this.subscribers.push(e)}},{key:"unsubscribe",value:]),e}();ar C,O,E,T={};function L(e,t){var n;try{n=new IntersectionObserver(e,t)}catch(r){var i=s({},t);delete i.root,n=new IntersectionObserver(e,i)}return n}function _(e,t,n){unction r(){var n=t-(i()-h);if(0>=n||n>t){u&&window.clearTimeout(u);var o=p;u=v=p=void 0,o&&(m=i(),d=e.apply(f,c),!v&&!u&&(c=f=null))}else v=window.setTimeout(r,n)}function a(){v&&window.clearTimeout(v),u=v=p=void 0,(w||b!==t)&&(m=i(),d=e.apply(f,c),!v&&!u&&(c=f=null))}function s(){var n,o,s;return c=arguments,h=i(),f=this,p=w&&(v||!l),!1===b?n=l&&!v:(!u&&!l&&(m=h),(s=0>=(o=b-(h-m))||o>b)?(u&&(u=window.clearTimeout(u)),m=h,d=e.apply(f,c)):!u&&(u=window.setTimeout(a,o))),s&&v?v=window.clearTimeout(v):!v&&t!==b&&(v=window.setTimeout(r,t)),n&&(s=!0,d=e.apply(f,c)),!s||v||u||(c=f=null),d}var c,l,u,d,h,f,v,p,y,g,m=0,b=!1,w=!0;if(s.cancel=function(){v&&window.clearTimeout(v),u&&window.clearTimeout(u),u=v=p=void 0},s.pending="function"!=typeof e)throw new TypeError("this is not a function!");return t=0>t?0:+t||0,!0===n?(l=!0,w=!1):(g=o(y=n),!!y&&("object"===g||"function"===g)&&(l=n.leading,b="maxWait"in n&&Math.max(+n.maxWait||0,t),w="trailing"in n?n.trailing:w)),s}var A=function(){function e(t,n){l(this,e),this.callback=t,this.timerId=null,this.restart(n)}return d(e,[{key:"restart",value:,{key:"resume",value:function(){this.start=new Date,clearTimeout(this.timerId),this.timerId=setTimeout(this.callback,this.remaining)}},{key:"pause",value:,{key:"cancel",value:]),e}();unction S(){return e=i().mark((function e(t,n){var r,o,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=globalThis.crypto.subtle,o=(new TextEncoder).encode(n),e.next=4,r.digest(t,o);case 4:return a=e.sent,s=Array.from(new Uint8Array(a)),c=s.map(().join(""),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})),S=S.apply(this,arguments);var e}e.exports={addScriptResource:p,addScriptResourceOnce:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length?arguments[2]:void 0,i=3<arguments.length?arguments[3]:void 0,r=t.id||e;return y[r]||(y[r]=p(e,t,n,i))},debounce:_,debounceWithTime:function(e,t,n){function i(){for(var e=Date.now(),t=window.performance.now(),n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return r.apply(void 0,i.concat([e,t]))}var r=_(e,t,n);for(var o in r)"function"==typeof r[o]&&(i[o]=r[o]);return i},getCurrentBreakpoint:g,getQueryParamValue:function(e){if(!e)return null;var t=new URLSearchParams(window.location.search);return null==t?void 0:t.get(e)},isExternalLink:function(e,t){if(!e)return!1;t||(t=function(){if(!O){var e=document.querySelector("link[rel='canonical']"),t=document.createElement("a");t.href=e.href,O=t.hostname}return O}());var n=e.match(/^https?:\/\/([^/]+)\/?/);return!!n&&n[1]!==t},makeIntersectionObserver:L,observeBreakpointChanges:function(e){return m||(m=new x),m.subscribe(e),m},observeFirstIntersection:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"190px 0px",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,i=T[t]||(T[t]=L((function(e,t){e.forEach((function(e){e.isIntersecting&&(t.unobserve(e.target),e.target.onFirstIntersection&&e.target.onFirstIntersection())}))}),{root:n,rootMargin:t}));return i.observe(e),i},observeVisibilityChanges:function(e){return C||(C=L((function(e){e.forEach((function(e){e.isIntersecting&&.5<=e.intersectionRatio?e.target.onChangeToVisible&&e.target.onChangeToVisible():e.target.onChangeToNotVisible&&e.target.onChangeToNotVisible()}))}),{threshold:.5})),C.observe(e),C},observeAfterFirstFullView:function(e){var t=L((function(e,t){e.forEach((function(e){e.target.onAfterFirstFullView&&e.isIntersecting&&(e.target.onAfterFirstFullView(e),t.unobserve(e.target))}))}),{root:document,threshold:[.95,1]});return t.observe(e),t},parseHostName:function(e){return e.replace(/^https?:\/\//,"").replace(/[:\/].*/,"").toLowerCase().replace(/^www\./,"").replace(/^m\./,"").replace(/\.blogspot(\.com?)?\.[a-z]{2,3}$/,".blogspot.com").replace(/^.*\.(gamepedia|wikia)(\.com?)?\.[a-z]{2,3}$/,"$1.com").split(".").slice(-3).join(".")},personalizedSlice:function(e,t){var n,i=(0|e/100)%100,r=(t||[]).map(().map((n=0,).findIndex(();return-1===r?void 0:t[r]},styleObjectToCustomCSSVariables:function e(t,n){n=n?"".concat(P(n),"_"):"--";var i={};return"object"===o(t)&&Object.keys(t)&&Object.keys(t).length&&Object.keys(t).forEach((function(r){if("string"==typeof t[r]||"number"==typeof t[r])i["".concat(n).concat(P(r))]=t[r];else if("object"===o(t[r])&&!Array.isArray(t[r])){var a=e(t[r],"".concat(n).concat(P(r)));i=s(s({},i),a)}})),i},supportPassiveEventListeners:function(){if(void 0===E){E=!1;try{var e=Object.defineProperty({},"passive",{get:);window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(e){}}return E},throttle:function(e,t){var n,i,r,o,a=0,s=return function(){var c=new Date,l=t-(c-a);return n=this,i=arguments,0>=l?(r&&clearTimeout(r),a=c,o=e.apply(n,i)):!r&&(r=setTimeout(s,l)),o}},Timer:A,userHasPremium:function(){return new Promise((function(e,t){window.phxConfigQueue||t("config object is necessary to check premium"),window.phxConfigQueue.push(()}))},waitForElement:function(e,t,n){if(!e)throw new Error("rootElement required");var i;return n&&n.untilDomReady&&(i=,function(e,t,n,i){var r=e.querySelector(t);return r?Promise.resolve(r):new Promise((function(r,o){var a=new MutationObserver((function(){var n=e.querySelector(t);return n?(a.disconnect(),void r(n)):void(i&&i((function(){return a.disconnect(),void o(new Error("element not found"))})))}));a.observe(e,n)}))}(e,t,{childList:!0,subtree:!0},i)},whenDomContentLoaded:function(){return b||(b=k()?Promise.resolve():new Promise((function(e,t){document.addEventListener("DOMContentLoaded",e)}))),b},whenPageLoaded:function(){return w||(w="complete"===document.readyState?Promise.resolve():new Promise(()),w},extractSlotInfo:function(e){return null!=e&&e.zone?"[".concat(null==e?void 0:e.zone,"_").concat(null==e?void 0:e.index,"]"):"[Slot Info Unavailable]"},hashStringWithAlg:getCookieValue:function(e){var t=document.cookie.split("; ").find(();if(t)return t.split(/=(.+)$/)[1]}}},22498:(e,t,n)=>{"use strict";var i=n(20751);ction s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(3>arguments.length?e:n):r.value}},s.apply(this,arguments)}nction u(){function e(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}function t(e,t,r,o){var a=t&&t.prototype instanceof i?t:i,s=Object.create(a.prototype),c=new f(o||[]);return s._invoke=function(e,t,i){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(i.method=o,i.arg=a;;){var s=i.delegate;if(s){var c=l(s,i);if(c){if(c===C)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===r)throw r="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r="executing";var u=n(e,t,i);if("normal"===u.type){if(r=i.done?"completed":"suspendedYield",u.arg===C)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(r="completed",i.method="throw",i.arg=u.arg)}}}(e,r,c),s}function n(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function i(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach((function(n){e(t,n,(function(e){return this._invoke(n,e)}))}))}function c(e,t){function i(o,a,s,c){var l=n(e[o],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==r(d)&&m.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,s,c)}),(function(e){i("throw",e,s,c)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return i("throw",e,s,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return o=o?o.then(r,r):r()}}function l(e,t){var i=e.iterator[t.method];if(void 0===i){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,l(e,t),"throw"===t.method))return C;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return C}var r=n(i,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,C;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,C):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,C)}function d(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function h(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function f(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(d,this),this.reset(!0)}function v(e){if(e){var t=e[w];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(m.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:p}}function p(){return{value:void 0,done:!0}}u=function(){return y};var y={},g=Object.prototype,m=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",k=b.toStringTag||"@@toStringTag";try{e({},"")}catch(t){e=function(e,t,n){return e[t]=n}}y.wrap=t;var C={},O={};e(O,w,(function(){return this}));var E=Object.getPrototypeOf,T=E&&E(E(v([])));T&&T!==g&&m.call(T,w)&&(O=T);var L=a.prototype=i.prototype=Object.create(O);return o.prototype=a,e(L,"constructor",a),e(a,"constructor",o),o.displayName=e(a,k,"GeneratorFunction"),y.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},y.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,e(t,k,"GeneratorFunction")),t.prototype=Object.create(L),t},y.awrap=function(e){return{__await:e}},s(c.prototype),e(c.prototype,x,(function(){return this})),y.AsyncIterator=c,y.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new c(t(e,n,i,r),o);return y.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},s(L),e(L,k,"Generator"),e(L,w,(function(){return this})),e(L,"toString",(function(){return"[object Generator]"})),y.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},y.values=v,f.prototype={constructor:f,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(h),!e)for(var t in this)"t"===t.charAt(0)&&m.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){function t(t,i){return o.type="throw",o.arg=e,n.next=t,i&&(n.method="next",n.arg=void 0),!!i}if(this.done)throw e;for(var n=this,i=this.tryEntries.length-1;0<=i;--i){var r=this.tryEntries[i],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var a=m.call(r,"catchLoc"),s=m.call(r,"finallyLoc");if(a&&s){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,t){for(var n,i=this.tryEntries.length-1;0<=i;--i)if((n=this.tryEntries[i]).tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,C):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),C},finish:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if((t=this.tryEntries[n]).finallyLoc===e)return this.complete(t.completion,t.afterLoc),h(t),C},catch:function(e){for(var t,n=this.tryEntries.length-1;0<=n;--n)if((t=this.tryEntries[n]).tryLoc===e){var i=t.completion;if("throw"===i.type){var r=i.arg;h(t)}return r}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:v(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),C}},y}function d(e,t,n,i,r,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,r)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ction y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function m(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var b=n(52784).getDependencyClass,w=n(77965),x=n(24433),k=n(90184),C=n(9736),O=C.debounceWithTime,E=C.makeIntersectionObserver,T=x("webcomponents:ad"),L=["1x1","301x50","321x50","729x90","971x90","300x251","300x601","160x601"],_=["appnexus","ix","rubicon"],A="defer-until-event",P="is-hidden";new Error("No eligible ads in view"),b("phoenix-page").then((function(e){var t=function(){function t(){var n=this;y(this,t),this.auctionIndex=0,this.adsInView=new Set,this.adsAuctioned=new Set,this.queueTrigger=e.util.debounce(this.runAuction.bind(this),300),this.runPromise=Promise.all(["phxAdvertisingQueue","phxAdAuctionQueue","phxConfigQueue"].map(()).then((function(e){var t,i,r=(i=3,t=e)||t,i)||v(t,i)||)),o=r[0],a=r[1],s=r[2];n.advertising=o,n.adAuction=a,n.breakpoint=s.breakpoint.get(),n.useStickyInContentAds=s.features.isEnabled("use-sticky-in-content-ads"),n.unloadAds="A"===n.breakpoint&&s.features.isEnabled("unload-oov-ads"),n.setupObserver(),window.addEventListener("scroll",n.queueTrigger)}))}return m(t,[{key:"setupObserver",value:function(){var e,t,n,i,r=Math.max(568,window.innerHeight);this.stickyAdHeightThreshold=Math.ceil(.33*r);var o,a=k();o=Math.ceil(r*((null!==(e=null==a||null===(t=a.thresholds)||void 0===t?void 0:t.fetchMarginPercent)&&void 0!==e?e:300)/100))*("A"===this.breakpoint?null!==(n=null==a||null===(i=a.thresholds)||void 0===i?void 0:i.mobileScaling)&&void 0!==n?n:3:1),this.observer=E(this.onIntersection.bind(this),{root:document,rootMargin:"".concat(o,"px 0px")}),this.unloadAds&&(this.unloadObserver=E(this.onUnloadIntersection.bind(this),{root:document,rootMargin:"".concat(r/2,"px 0px")}))}},{key:"runAuction",value:function(){var e=this,t=f(this.adsInView.values()).filter((function(t){return!t.isFilled&&!t.isPaused&&!e.adsAuctioned.has(t.config.slotId)}));if(t.length){var n="dynamic-in_content-"+this.auctionIndex++,i=t.map((),r=t.reduce((function(t,n){return t.concat(n.config.units[e.breakpoint])}),[]),o={slots:i,unitVendorConfig:t.reduce((function(e,t){return Object.assign(e,t.config.unitVendorConfig||{})}),{}),units:h({},this.breakpoint,r)};return t.forEach((),new Promise((function(i){e.adAuction.dynamicAuction(o,n).then((function(){e.advertising.dynamicCall({auctionId:n,slots:o.slots}),t.map((function(t){e.advertising.getSlotResult(t.config.slotId).then(()}))})).catch(()}))}}},{key:"applyStickyClass",value:(n=u().mark((function e(t){var n,i,r=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){var e=t.closest(".m-in-content-ad-row"),n=e.getBoundingClientRect();if(!(n.height>r.stickyAdHeightThreshold)){var i=n.top+n.height,o=window.scrollY;e.classList.add("is-sticky");var a=!1,s=function(e){return a=!0},c=l=25e3;e.addEventListener("mouseenter",s,!1),e.addEventListener("mouseleave",c,!1),window.setTimeout((function t(){return 0<l&&a?(l-=500,void window.setTimeout(t,500)):(window.scrollY>o&&window.scrollY-o>=i?(e.classList.add("is-sticky-animate-out"),window.setTimeout((,500)):e.classList.remove("is-sticky"),e.removeEventListener("mouseenter",s),void e.removeEventListener("mouseleave",c))}),5e3)}},i=function e(){t.classList.contains("is-loaded")&&t.inView?n():t.classList.contains("is-empty")||setTimeout(e,100)},setTimeout(i,100);case 3:case"end":return e.stop()}}),e)})),i=function(){var e=this,t=arguments;return new Promise((function(i,r){function o(e){d(s,i,r,o,a,"next",e)}function a(e){d(s,i,r,o,a,"throw",e)}var s=n.apply(e,t);o(void 0)}))},},{key:"onIntersection",value:function(e){var t=this,n=(new Date).getTime();e.forEach((function(e){var i=e.target;e.isIntersecting?(i.isPaused=!1,t.adsInView.add(i)):(i.isFilled&&!i._outOfViewTime&&(i._outOfViewTime=n,i.isPaused=!0),t.adsInView.delete(i))})),this.queueTrigger()}},{key:"onUnloadIntersection",value:function(e){var t=this;e.forEach((function(e){var n=e.target;e.isIntersecting||!n.isFilled||n.unloaded||(t.observer.unobserve(n),t.unloadObserver.unobserve(n),t.adsInView.delete(n),n.style.height=n.getBoundingClientRect().height+"px",n._unload(),n.innerHTML="")}))}},{key:"addAd",value:function(e){var t=this;this.runPromise.then((function(){t.observer&&t.observer.observe(e),t.unloadObserver&&t.unloadObserver.observe(e),t.useStickyInContentAds&&e.observeVisibilityChanges()}))}}]),t;var n,i}(),n=new t,o=function(t){o,t);var u,d,h=(u=o,d=),;return m(o,[{key:"observedBroadcastedEvents",get:function(){var e=this.getAttribute(A)?this.getAttribute(A).split(" "):[];return[].concat(f(e),["phoenix:fixedBottomAd:hide","phoenix:fixedBottomAd:show"])}},{key:"broadcastedEventCallback",value:function(e){e&&this.deferUntilEvent&&-1<this.deferUntilEvent.indexOf(e)?(this._load(),this.deferUntilEvent=!1):"phoenix:fixedBottomAd:hide"===e?this.fixedVisible&&this.firstChild&&(this.firstChild.classList.add("is-offscreen-bottom"),this.inView=!1,this.isPaused=!0,this._debouncedVisibilityChange(!1)):"phoenix:fixedBottomAd:show"===e&&this.fixedVisible&&this.firstChild&&(this.firstChild.classList.remove("is-offscreen-bottom"),this.inView=!0,this.isPaused=!1,this._debouncedVisibilityChange(!0))}},{key:"isHidden",get:,{key:"isPaused",get:set:,{key:"reloadCount",get:,{key:"connectedCallback",value:function(){var t,n,i=this;s(l(o.prototype),"connectedCallback",this).call(this),this.autoReload=this.hasAttribute("auto-reload"),this.closeButton=this.hasAttribute("close-button"),this.deferUntilEvent=!!this.getAttr(A)&&this.getAttr(A).split(" "),this.fixedVisible=this.hasAttribute("fixed-visible"),this.skipDynamicCall=this.hasAttribute("skip-dynamic-call"),this.scrollToRefreshThreshold=this.getAttr("scroll-to-refresh"),this.skipScrollToRefresh=!1,this.initialIndex=this.getAttr("initial-index"),this.isFilled=!1,this.recirculationOpen=!!document.querySelector(".salish-recirculation-open");var r=parseInt(this.getAttr("container-height"));r&&Number.isInteger(r)&&0<r&&(this.containerHeight=r);var a=parseInt(this.getAttr("container-width"));if(a&&Number.isInteger(a)&&0<a&&(this.containerWidth=a),this.containerClass=this.getAttr("container-class"),!this.hasAttribute("config"))throw new Error("No ad configuration was specified.");var c=this;window.phxConfigQueue||(window.phxConfigQueue=[]),window.phxConfigQueue.push((),this._visibleOnce=!1,this._debouncedVisibilityChange=O(this._trackVisibilityChange.bind(this),500),this.inView=!1,this.handleAd=this._handleAd.bind(this),this.adLoadedTime=0,this._reloadCount=0,this.adAuctionPromise=w("phxAdAuctionQueue"),window.phxAdvertisingQueue=window.phxAdvertisingQueue||[],this.deferLoad=null===(t=this.config.slotConfig)||void 0===t||null===(n=t.model)||void 0===n?void 0:n.deferLoad,this._initListeners(),this.config.slotId&&!this.hasChildNodes()&&this._addSlotDiv(this.config.slotId),this.initialIndex&&this.config.slotConfig&&this.config.slotConfig.model&&(this.config.slotConfig.model.index=parseInt(this.initialIndex)),e.util.whenPageLoaded().then((function(){if(!i.config.slotId||!i.config.slotConfig)throw new Error("slot id and/or slot config is missing");void 0===i.maxAdReloads&&(i.maxAdReloads=-1===i.config.adReloaderDelay?1:i.config.maxAdReloads||25),i.deferLoad||i.deferUntilEvent||i._load()}))}},{key:"attributeChangedCallback",value:function(e,t,n){if("auto-reload-paused"===e&&this.reloadTimer)if(this.isPaused)this.reloadTimer.pause(),this.prebidReloadTimer.pause(),clearInterval(this.s2RInterval);else if(this.reloadTimer.resume(),this.prebidReloadTimer.resume(),this.scrollToRefreshThreshold){var i=this._scrollToRefreshTickHandler.bind(this);this.s2RInterval=setInterval(i,500)}}},{key:"reload",value:function(e){var t=this._reloadCount,n=this.config.slotConfig;if(t<this.maxAdReloads&&!this.isPaused){if(this.hasChildNodes()){var i=this.handleAd,r=(new Date).getTime();this.prebidTime&&30<(r-this.prebidTime)/1e3&&(e=!1),window.phxAdvertisingQueue.push((function(){this.reloadAd(n,e).then((function(){(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).map(i)}))}))}else this._addSlotDiv(),this._load();this.autoReload&&this.isFilled&&this._setLoadTimer(),this._trackVisibilityChange(!1),this.config.slotConfig.model&&"number"==typeof this.config.slotConfig.model.index&&this.config.slotConfig.model.index++,this._reloadCount++,this._reloadCount>this.maxAdReloads&&this.cancelReloading()}}},{key:"_handleAd",value:function(e){var t,n=this.config.slotConfig;if(!e.filled)return this.isFilled=!1,void this._setLoadTimer();var i=e.sizeDims,r=!1;if(null!==(t=window.pbjs)&&void 0!==t&&t.getAdserverTargetingForAdUnitCode){var o=window.pbjs.getAdserverTargetingForAdUnitCode(this.config.slotId)||{};-1<_.indexOf(o.hb_bidder)&&(r=o.hb_deal)}this.skipScrollToRefresh=!1,r&&(this.reloadDelay=Math.max(this.reloadDelay,30),this.skipScrollToRefresh=!0);var a,s,c=[];n.config&&n.config.sizes&&n.config.sizes.length&&(s=[],(a=n.config.sizes).some(Array.isArray)?s=a.reduce((function(e,t){return e.push(Array.isArray(t)?t.join("x"):t),e}),[]):2!==a.length||a.some(isNaN)?s=a:s.push(a.join("x")),c=s),-1<c.concat(L).indexOf(i)?this.config.slotId&&this.closeButton&&!this.closeButtonDiv&&this._addCloseButton(this.config.slotId):this.handleNonstandardSize(),this.isFilled=!0,this._debouncedVisibilityChange.cancel(),this._trackVisibilityChange(!0),"none"===this.style.display&&(this.style.display="",this.inView=!0),this.adLoadedTime=(new Date).getTime(),this.autoReload?!this.reloadTimer&&this._setLoadTimer():this.cancelReloading(),"fixed_bottom"===n.model.zone&&this.recirculationOpen&&this._salishRecirculationOpened()}},{key:"cancelReloading",value:,{key:"handleNonstandardSize",value:function(){this.closeButton&&(this.closeButtonDiv&&this.closeButtonDiv.parentElement.removeChild(this.closeButtonDiv),this.closeButton=!1,this.closeButtonDiv=void 0)}},{key:"_addCloseButton",value:function(e){var t=this;this.closeButtonDiv=document.getElementById(e).nextElementSibling,this.closeButtonDiv.classList.remove(P),this.closeButtonHandler=function(){return t.classList.add(P),t._unload(),!1},this.closeButtonDiv.addEventListener("click",this.closeButtonHandler)}},{key:"_addSlotDiv",value:function(e){var t,n=document.createElement("div"),i=document.createElement("div"),r=this.config.visClasses||[];if(i.id=e,this.config.moduleClass&&r.push(this.config.moduleClass),r.push("is-placeholder"),(t=n.classList).add.apply(t,f(r)),this.containerClass){var o,a=this.containerClass.split(" ");(o=n.classList).add.apply(o,f(a))}this.containerHeight&&(n.style.height=this.containerHeight+"px"),this.containerWidth&&(n.style.width=this.containerWidth+"px"),n.appendChild(i),this.appendChild(n)}},{key:"_updateAdIndexForPrebid",value:function(e){var t=this.config.slotConfig;t.model&&"number"==typeof t.model.index&&e.updateZoneIndex(this.config.slotConfig.id,a(a({},t.model),{},{index:t.model.index+1}))}},{key:"_scrollToRefreshTickHandler",value:function(){var e=this;if(!this.isHidden&&this.adLoadedTime&&(new Date).getTime()-this.adLoadedTime>4e3){var t=this.config.slotConfig,n=Math.max(568,window.innerHeight),r=(window.pageYOffset-this.lastPageYOffset)/n;if(Math.abs(r)>=this.scrollToRefreshThreshold){clearInterval(this.s2RInterval);var o=this.reloadTimer;if(o&&!o.cancelled&&o.remaining()<2e3)this.lastPageYOffset=window.pageYOffset;else{var a;this.cancelReloading();var s="s2r-"+t.id+"-"+this._reloadCount;if(null===(a=this.prebidReloadTimer)||void 0===a||!a.called){var c=this;this.adAuctionPromise.then((function(e){c._updateAdIndexForPrebid(e),e.rerunAuction(t.id,2e3,s)})).catch((function(e){console.warn("Scroll to refresh auction failed: "+e)}))}this.reloadTimer=new i.Z((,2010),this.lastPageYOffset=window.pageYOffset}}}}},{key:"_load",value:function(){var e=this.config.slotConfig,t=this.handleAd;window.phxAdvertisingQueue.push((function(){this.getSlotResult(e.id).then(t)})),this.skipDynamicCall||window.phxAdvertisingQueue.push((function(){this.dynamicCall({slots:[e]})})),this.autoReload&&(this.reloadDelay=this.config.adReloaderDelay||30,this.fixedVisible)||this.observeVisibilityChanges()}},{key:"onChangeToVisible",value:function(){this.inView=!0,this._visibleOnce=!0,this._debouncedVisibilityChange(!0),this.autoReload&&(this.isPaused=!1,this.isFilled&&(this.adLoadedTime=(new Date).getTime()))}},{key:"onChangeToNotVisible",value:function(){this.inView=!1,this._debouncedVisibilityChange.pending()?this._debouncedVisibilityChange.cancel():this._debouncedVisibilityChange(!1),this.autoReload&&(this.isPaused=!0)}},{key:"_initListeners",value:function(){this.callbacks=this._bindCallbacks(),window.addEventListener("message",this.callbacks.takeover,!1),document.addEventListener("visibilitychange",this.callbacks.browserTabVisibility),document.addEventListener("phxCollection:enterFullscreen",this.callbacks.galleryOpened),document.addEventListener("phxCollection:exitFullscreen",this.callbacks.galleryClosed),this.fixedVisible&&(document.addEventListener("salishRecirculation:opened",this.callbacks.salishRecirculationOpened),document.addEventListener("salishRecirculation:closed",this.callbacks.salishRecirculationClosed)),this.deferLoad&&["in_content","in_card","below_content_card"].includes(this.config.slotConfig.model.zone)&&n.addAd(this)}},{key:"_setLoadTimer",value:function(){var e=this,t=this.adAuctionPromise,n=this.config.slotConfig;if(n&&n.id){if(this.cancelReloading(),this.autoReload&&!(0>=this.reloadDelay)){var r=n.id+"-"+this._reloadCount,o=Math.max(this.reloadDelay-30,0),a=Math.max(this.reloadDelay-o-3,2);if(this.prebidReloadTimer=new i.Z((function(){if(e._reloadCount<=e.maxAdReloads&&!e.isHidden){var i=e;t.then((function(e){i._updateAdIndexForPrebid(e),e.rerunAuction(n.id,1e3*a,r),i.prebidTime=(new Date).getTime()})).catch(()}}),1e3*o),this.reloadTimer=new i.Z((function(){e._reloadCount<=e.maxAdReloads&&!e.isHidden&&e.reload(r)}),1e3*this.reloadDelay),this.scrollToRefreshThreshold&&!this.skipScrollToRefresh){var s=this._scrollToRefreshTickHandler.bind(this);this.lastPageYOffset=window.pageYOffset,this.s2RInterval=setInterval(s,500)}}}else console.warn("Malformed ad slot config missing id; reload timer cancelled.")}},{key:"_bindCallbacks",value:,{key:"_takeoverCallback",value:function(e){if(e.origin.match(window.location.host))try{var t=JSON.parse(e.data);"takeoveropened"===t.event?this.isPaused=!0:"takeoverclosed"===t.event&&this.inView&&(this.isPaused=!1)}catch(e){}}},{key:"_galleryOpened",value:,{key:"_galleryClosed",value:,{key:"smallScreen",get:function(){var e="A"===this.breakpoint?600:1e3;return window.innerHeight<e}},{key:"_salishRecirculationOpened",value:function(){var e=this,t=(new Date).getTime(),n=Math.max(5e3-(t-this.adLoadedTime),0);this.isPaused=!0,window.setTimeout((,n)}},{key:"_salishRecirculationClosed",value:function(){this.isPaused=!1,this.isFilled&&(this.style.display="",this.inView=!0,this.adLoadedTime=(new Date).getTime())}},{key:"_browserTabVisibilityCallback",value:function(){if(this.inView){var e="visible"===document.visibilityState;this.isPaused=!e,this._trackVisibilityChange(e)}}},{key:"_unload",value:function(){if(!this.unloaded){this.cancelReloading(),this.unobserveVisibilityChanges(),this.closeButtonDiv&&this.closeButtonDiv.removeEventListener("click",this.closeButtonHandler);var e=this.config.slotId;window.phxAdvertisingQueue.push((),this.autoReload&&this.callbacks&&(window.removeEventListener("message",this.callbacks.takeover),document.removeEventListener("visibilitychange",this.callbacks.browserTabVisibility),document.removeEventListener("phxCollection:enterFullscreen",this.callbacks.galleryOpened),document.removeEventListener("phxCollection:exitFullscreen",this.callbacks.galleryClosed),this.fixedVisible&&(document.removeEventListener("salishRecirculation:opened",this.callbacks.salishRecirculationOpened),document.removeEventListener("salishRecirculation:closed",this.callbacks.salishRecirculationClosed))),this.unloaded=!0}}},{key:"_trackVisibilityChange",value:function(e,t,n){if(this._visibleOnce&&this.config.slotConfig){var i=this.config.slotConfig,r=i.id,o=i.model,a=o.index,s=o.zone;this.emitEvent("phoenix:ad:visibility-changed",{bubbles:!0,detail:{isVisible:e,slotElementId:r,adindex:isNaN(+a)?-1:+a,adzone:s,isFilled:this.isFilled,ts:null!=t?t:Date.now(),tspl:0|(null!=n?n:window.performance.now())}})}}},{key:"disconnectedCallback",value:],[{key:"observedAttributes",get:]),o}(e.PhoenixElement);window.customElements.define("phoenix-ad",o),T.end()}))}},);
//# sourceMappingURL=ad.min.js.map