"use strict";(self.webpackChunkextract_css=self.webpackChunkextract_css||[]).push([[52730],{203626:function(O,w){Object.defineProperty(w,"__esModule",{value:!0}),w.default=void 0;var y;(function(f){f.MAIN_CONTENT=1,f.CONTENT_COLLECTION=1,f.PAGE=2,f.SPLASH_PAGE=3,f.CONTENT_ITEM=50,f.NOT_FOUND=100,f.ERROR=101,f.SEARCH=102,f.LOCK_SCREEN=103,f.POPUP_OVERLAY=104,f.PROTECTED_CONTENT=105,f.MEMBER_AREA_ACCESS_DENIED=106,f.PAYWALL=107,f.SHOW_CART=200,f.CHECKOUT=201,f.ORDER_CONFIRMED=202,f.DONATE=203,f.CONTRIBUTION_CONFIRMED=204,f.COMMERCE_CART_V2=205,f.SUBSCRIPTION_CONFIRMED=206,f.ORDER_RECEIVED=207,f.MEMBERSHIP_CONFIRMED=208,f.REVIEWS_REQUEST=209,f.DIGITAL_PRODUCT_COMPOSER_PREVIEW=210,f.ORDER_STATUS=211,f.NEWSLETTER_UNSUBSCRIBE=300,f.COMMERCE_EMAIL_PREVIEW=301,f.SSO_PAGE=400})(y||(y={}));var T=y;w.default=T,O.exports=w.default},588286:function(O,w){Object.defineProperty(w,"__esModule",{value:!0}),w.default=void 0;var y;(function(f){f.EXPIRED=1,f.PASTDUE=2,f.TRIAL=3,f.BETA=4,f.REMOVED=5,f.INTERNAL=6,f.COMPED=7,f.PAID=8,f.V5_LINKED=11,f.ACTIVE_PARKING_PAGE=12,f.RESOLD=13,f.RESOLD_GRACE_PERIOD=14,f.ENTERPRISE=15})(y||(y={}));var T=y;w.default=T,O.exports=w.default},933441:function(O,w,y){var T;T={value:!0};var f=y(317500),E=D(y(588286)),Y=D(y(203626)),R=y(5814);function W(d,v,b){return v in d?Object.defineProperty(d,v,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[v]=b,d}function D(d){return d&&d.__esModule?d:{default:d}}function j(d){for(var v=1;v<arguments.length;v++){var b=arguments[v]!=null?arguments[v]:{},I=Object.keys(b);typeof Object.getOwnPropertySymbols=="function"&&(I=I.concat(Object.getOwnPropertySymbols(b).filter(function(x){return Object.getOwnPropertyDescriptor(b,x).enumerable}))),I.forEach(function(x){W(d,x,b[x])})}return d}var _=window.Static&&window.Static.SQUARESPACE_CONTEXT,C=window.top!==window,F=Object.freeze(W({},Y.default.COMMERCE_CART_V2,"commerce-cart"));function H(){var d=window.location&&window.location.pathname||"";return!C&&/^\/config(\/.*)?$/.test(d)}function A(){return{inFrame:C,templateId:_.templateId||"",impersonatedSession:!!_.impersonatedSession,pageType:typeof _.pageType=="number"?_.pageType:-1}}function P(){var d=_.website,v=d===void 0?{}:d;return{authenticUrl:v.authenticUrl||"",cloneable:!!v.cloneable,developerMode:!!v.developerMode,isHstsEnabled:!!v.isHstsEnabled,language:v.language||"",timeZone:v.timeZone||"",websiteId:v.id||"",websiteType:v.websiteType||-1}}function z(){var d=_.websiteSettings,v=d===void 0?{}:d;return{ampEnabled:!!v.ampEnabled}}function S(){var d=_.collection,v=d===void 0?{}:d;return{collectionType:v.type||-1}}function U(){return window.Squarespace&&"SECTION_CONTEXT"in window.Squarespace}function l(){return _.hasOwnProperty("templateVersion")?_.templateVersion.replace(".","_"):U()?"8":null}function h(d){var v=H(),b=F[_.pageType],I={appName:b||"v".concat(d,"-").concat(v?"config":"user-sites"),context:j({},A(),P(),z(),S()),captureException:function($,ee){(0,R.withScope)(function(te){te.setTag("product_area","rum-collector"),ee!==void 0&&te.setExtra("extras",ee),(0,R.captureException)($)})}};if(v){var x=_.website.siteStatus.value===E.default.INTERNAL,ie=_.authenticatedAccount,ae=ie.createdOn,Z=ie.id;I.context.isInternal=x,I.context.createdOn=ae,I.context.memberId=Z}return I}function m(){if(_){var d=l();if(d===null)return;var v=h(d);(0,f.init)(v)}}m()},5814:function(O,w){Object.defineProperty(w,"__esModule",{value:!0});function y(l,h){for(var m in h)Object.defineProperty(l,m,{enumerable:!0,get:h[m]})}y(w,{addBreadcrumb:function(){return j},captureMessage:function(){return _},captureException:function(){return C},captureEvent:function(){return F},configureScope:function(){return H},withScope:function(){return A},isSentryConnected:function(){return U}});function T(l,h){(h==null||h>l.length)&&(h=l.length);for(var m=0,d=new Array(h);m<h;m++)d[m]=l[m];return d}function f(l){if(Array.isArray(l))return T(l)}function E(l){if(typeof Symbol!="undefined"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function Y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(l){return f(l)||E(l)||W(l)||Y()}function W(l,h){if(l){if(typeof l=="string")return T(l,h);var m=Object.prototype.toString.call(l).slice(8,-1);if(m==="Object"&&l.constructor&&(m=l.constructor.name),m==="Map"||m==="Set")return Array.from(m);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return T(l,h)}}var D=function(){},j,_,C,F,H,A,P=function(l){return function(h){for(var m=arguments.length,d=new Array(m>1?m-1:0),v=1;v<m;v++)d[v-1]=arguments[v];var b;return(b=console).log.apply(b,["[Sentry][".concat(l,"] ").concat(h)].concat(R(d))),"some-error-identifier"}},z=!1,S=function(l){var h=l.category,m=l.message;console.log("[Sentry][addBreadcrumb] (".concat(h,") ").concat(m))},U=!1;window.SQUARESPACE_SENTRY?(U=!0,j=window.SQUARESPACE_SENTRY.addBreadcrumb,_=window.SQUARESPACE_SENTRY.captureMessage,C=window.SQUARESPACE_SENTRY.captureException,F=window.SQUARESPACE_SENTRY.captureEvent,H=window.SQUARESPACE_SENTRY.configureScope,A=window.SQUARESPACE_SENTRY.withScope):(console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."),j=z?S:D,_=P("captureMessage"),C=P("captureException"),F=P("captureEvent"),H=D,A=function(l){var h=new Proxy({},{get:function(){return D}});P("withScope")("",h),l(h)})},317500:function(O){function w(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t){if(Array.isArray(t))return t}function T(t){if(Array.isArray(t))return w(t)}function f(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(c){n(c);return}u.done?e(s):Promise.resolve(s).then(r,i)}function E(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(s){f(a,r,i,o,u,"next",s)}function u(s){f(a,r,i,o,u,"throw",s)}o(void 0)})}}function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R(t,e){return e!=null&&typeof Symbol!="undefined"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):t instanceof e}function W(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function D(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,u;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(s){a=!0,u=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw u}}return r}}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){Y(t,i,n[i])})}return t}function F(t,e){if(t==null)return{};var n=H(t,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function H(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function A(t,e){return y(t)||D(t,e)||z(t,e)||j()}function P(t){return T(t)||W(t)||z(t)||_()}function z(t,e){if(t){if(typeof t=="string")return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}}function S(t,e){var n,r,i,a,o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(c){return function(p){return s([c,p])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(i=o.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){o=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(c[0]===6&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=e.call(t,o)}catch(p){c=[6,p],r=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var U=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,d=function(t,e){return function(){return t&&(e=(0,t[h(t)[0]])(t=0)),e}},v=function(t,e){for(var n in e)U(t,n,{get:e[n],enumerable:!0})},b=function(t,e,n,r){if(e&&typeof e=="object"||typeof e=="function"){var i=!0,a=!1,o=void 0;try{for(var u=function(){var p=c.value;!m.call(t,p)&&p!==n&&U(t,p,{get:function(){return e[p]},enumerable:!(r=l(e,p))||r.enumerable})},s=h(e)[Symbol.iterator](),c;!(i=(c=s.next()).done);i=!0)u()}catch(p){a=!0,o=p}finally{try{!i&&s.return!=null&&s.return()}finally{if(a)throw o}}}return t},I=function(t){return b(U({},"__esModule",{value:!0}),t)},x,ie=d({"../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/url-alphabet/index.js":function(){"use strict";x="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"}}),ae={};v(ae,{customAlphabet:function(){return ee},customRandom:function(){return $},nanoid:function(){return te},random:function(){return Z},urlAlphabet:function(){return x}});var Z,$,ee,te,Lt=d({"../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/index.browser.js":function(){"use strict";ie(),Z=function(t){return crypto.getRandomValues(new Uint8Array(t))},$=function(t,e,n){var r=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*r*e/t.length);return function(){for(var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e,o="";;)for(var u=n(i),s=i;s--;)if(o+=t[u[s]&r]||"",o.length===a)return o}},ee=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:21;return $(t,e,Z)},te=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce(function(e,n){return n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e},"")}}}),xe={};v(xe,{RUM_PREFIX:function(){return J},default:function(){return kn},getA11yData:function(){return mt},getCumulativeLayoutShift:function(){return st},getDomainLookup:function(){return je},getFirstContentfulPaint:function(){return ft},getFirstInputDelay:function(){return dt},getInteractionToNextPaint:function(){return lt},getLargestContentfulPaint:function(){return vt},getNavigationTimingType:function(){return Fe},getPerformanceMetrics:function(){return Re},getServerTiming:function(){return He},getTcpConnection:function(){return Ve},getTlsNegotiation:function(){return qe},init:function(){return Ct},mark:function(){return wn},measure:function(){return _n},trackEventsV2Factory:function(){return Dn},trackLoadPerformance:function(){return Un},trackSqspImages:function(){return _t}}),O.exports=I(xe);var De={};v(De,{getCumulativeLayoutShift:function(){return st},getDomainLookup:function(){return je},getFirstContentfulPaint:function(){return ft},getFirstInputDelay:function(){return dt},getInteractionToNextPaint:function(){return lt},getLargestContentfulPaint:function(){return vt},getNavigationTimingType:function(){return Fe},getServerTiming:function(){return He},getTcpConnection:function(){return Ve},getTlsNegotiation:function(){return qe}});var Mt="/api/1/performance/records",xt="load",ge="visibilitychange",Dt=["Tab","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Home","PageDown","PageUp"," ","Enter"],Ut="SS_MID",kt="SS_ANALYTICS_ID",Bt=3e4,jt=/(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i,Ft="4.12.1",he=function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return new Promise(function(i,a){try{t.apply(void 0,[function(o){i(o)}].concat(P(n)))}catch(o){a(o)}})}},Ue=function(t){return he(setTimeout)(t)},ke=function(){return he(function(t){var e=function(n){(n.type==="pagehide"||document.visibilityState==="hidden")&&(t(n),removeEventListener("visibilitychange",e,!0),removeEventListener("pagehide",e,!0))};window.addEventListener("visibilitychange",e,!0),window.addEventListener("pagehide",e,!0)})()},Ht=function(t){document.readyState==="complete"?window.setTimeout(t,0):window.addEventListener("pageshow",t,{once:!0})},Vt=function(){return he(Ht)},qt=function(){var t={entryType:"navigation",startTime:0},e=performance.timing;for(var n in e)if(n!=="navigationStart"&&n!=="toJSON"){var r=Math.max(e[n]-e.navigationStart,0);t[n]=r}return t},we=function(){var t=E(function(){var e,n;return S(this,function(r){switch(r.label){case 0:return[4,Vt()];case 1:return r.sent(),e=A(window.performance.getEntriesByType("navigation"),1),n=e[0],[2,n!=null?n:qt()]}})});return function(){return t.apply(this,arguments)}}(),V=function(){var t=E(function(e){var n,r;return S(this,function(i){switch(i.label){case 0:return[4,we()];case 1:return n=i.sent(),r=n[e],typeof r!="number"||r<0||r>2147483647?[2]:[2,Math.round(r)]}})});return function(n){return t.apply(this,arguments)}}(),Qt=function(){var t=E(function(){var e;return S(this,function(n){switch(n.label){case 0:return[4,we()];case 1:return e=n.sent(),[2,e.serverTiming]}})});return function(){return t.apply(this,arguments)}}(),Be=function(){var t=E(function(e){var n,r;return S(this,function(i){switch(i.label){case 0:return[4,we()];case 1:return n=i.sent(),r=n[e],typeof r!="string"?[2]:[2,r]}})});return function(n){return t.apply(this,arguments)}}(),_e=function(t,e){if(typeof t=="number"&&typeof e=="number"&&t>=e)return t-e},je=function(t){return Promise.all([V("domainLookupEnd"),V("domainLookupStart")]).then(function(e){var n=A(e,2),r=n[0],i=n[1];t({domainLookup:_e(r,i)})})},Fe=function(t){return Be("type").then(function(e){t({navigationTimingType:e})})},He=function(t){return Qt().then(function(e){t({serverTiming:JSON.stringify(e)})})},Ve=function(t){return Promise.all([V("connectEnd"),V("connectStart")]).then(function(e){var n=A(e,2),r=n[0],i=n[1];t({tcpConnection:_e(r,i)})})},qe=function(t){return Promise.all([V("connectEnd"),V("secureConnectionStart")]).then(function(e){var n=A(e,2),r=n[0],i=n[1];t({tlsNegotiation:_e(r,i)})})},k,ne,Qe,oe,ye,Ye=-1,G=function(e){addEventListener("pageshow",function(n){n.persisted&&(Ye=n.timeStamp,e(n))},!0)},We=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},Ee=function(){var e=We();return e&&e.activationStart||0},N=function(e,n){var r=We(),i="navigate";return Ye>=0?i="back-forward-cache":r&&(i=document.prerendering||Ee()>0?"prerender":document.wasDiscarded?"restore":r.type.replace(/_/g,"-")),{name:e,value:n===void 0?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},X=function(e,n,r){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver(function(a){Promise.resolve().then(function(){n(a.getEntries())})});return i.observe(Object.assign({type:e,buffered:!0},r||{})),i}}catch(a){}},L=function(e,n,r,i){var a,o;return function(u){n.value>=0&&(u||i)&&((o=n.value-(a||0))||a===void 0)&&(a=n.value,n.delta=o,n.rating=function(s,c){return s>c[1]?"poor":s>c[0]?"needs-improvement":"good"}(n.value,r),e(n))}},Se=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},ue=function(e){var n=function(i){i.type!=="pagehide"&&document.visibilityState!=="hidden"||e(i)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},be=function(e){var n=!1;return function(r){n||(e(r),n=!0)}},K=-1,ze=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},ce=function(e){document.visibilityState==="hidden"&&K>-1&&(K=e.type==="visibilitychange"?e.timeStamp:0,Yt())},Ge=function(){addEventListener("visibilitychange",ce,!0),addEventListener("prerenderingchange",ce,!0)},Yt=function(){removeEventListener("visibilitychange",ce,!0),removeEventListener("prerenderingchange",ce,!0)},Te=function(){return K<0&&(K=ze(),Ge(),G(function(){setTimeout(function(){K=ze(),Ge()},0)})),{get firstHiddenTime(){return K}}},se=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},Xe=[1800,3e3],Ke=function(e,n){n=n||{},se(function(){var r,i=Te(),a=N("FCP"),o=X("paint",function(u){u.forEach(function(s){s.name==="first-contentful-paint"&&(o.disconnect(),s.startTime<i.firstHiddenTime&&(a.value=Math.max(s.startTime-Ee(),0),a.entries.push(s),r(!0)))})});o&&(r=L(e,a,Xe,n.reportAllChanges),G(function(u){a=N("FCP"),r=L(e,a,Xe,n.reportAllChanges),Se(function(){a.value=performance.now()-u.timeStamp,r(!0)})}))})},Je=[.1,.25],Wt=function(e,n){n=n||{},Ke(be(function(){var r,i=N("CLS",0),a=0,o=[],u=function(p){p.forEach(function(g){if(!g.hadRecentInput){var Q=o[0],B=o[o.length-1];a&&g.startTime-B.startTime<1e3&&g.startTime-Q.startTime<5e3?(a+=g.value,o.push(g)):(a=g.value,o=[g])}}),a>i.value&&(i.value=a,i.entries=o,r())},s=X("layout-shift",u);s&&(r=L(e,i,Je,n.reportAllChanges),ue(function(){u(s.takeRecords()),r(!0)}),G(function(){a=0,i=N("CLS",0),r=L(e,i,Je,n.reportAllChanges),Se(function(){return r()})}),setTimeout(r,0))}))},re={passive:!0,capture:!0},zt=new Date,Ze=function(e,n){k||(k=n,ne=e,Qe=new Date,et(removeEventListener),$e())},$e=function(){if(ne>=0&&ne<Qe-zt){var e={entryType:"first-input",name:k.type,target:k.target,cancelable:k.cancelable,startTime:k.timeStamp,processingStart:k.timeStamp+ne};oe.forEach(function(n){n(e)}),oe=[]}},Gt=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;e.type=="pointerdown"?function(r,i){var a=function(){Ze(r,i),u()},o=function(){u()},u=function(){removeEventListener("pointerup",a,re),removeEventListener("pointercancel",o,re)};addEventListener("pointerup",a,re),addEventListener("pointercancel",o,re)}(n,e):Ze(n,e)}},et=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(n){return e(n,Gt,re)})},tt=[100,300],Xt=function(e,n){n=n||{},se(function(){var r,i=Te(),a=N("FID"),o=function(p){p.startTime<i.firstHiddenTime&&(a.value=p.processingStart-p.startTime,a.entries.push(p),r(!0))},u=function(p){p.forEach(o)},s=X("first-input",u);r=L(e,a,tt,n.reportAllChanges),s&&ue(be(function(){u(s.takeRecords()),s.disconnect()})),s&&G(function(){var c;a=N("FID"),r=L(e,a,tt,n.reportAllChanges),oe=[],ne=-1,k=null,et(addEventListener),c=o,oe.push(c),$e()})})},nt=0,Ae=1/0,fe=0,Kt=function(e){e.forEach(function(n){n.interactionId&&(Ae=Math.min(Ae,n.interactionId),fe=Math.max(fe,n.interactionId),nt=fe?(fe-Ae)/7+1:0)})},rt=function(){return ye?nt:performance.interactionCount||0},Jt=function(){"interactionCount"in performance||ye||(ye=X("event",Kt,{type:"event",buffered:!0,durationThreshold:0}))},it=[200,500],at=0,ot=function(){return rt()-at},M=[],Ce={},ut=function(e){var n=M[M.length-1],r=Ce[e.interactionId];if(r||M.length<10||e.duration>n.latency){if(r)r.entries.push(e),r.latency=Math.max(r.latency,e.duration);else{var i={id:e.interactionId,latency:e.duration,entries:[e]};Ce[i.id]=i,M.push(i)}M.sort(function(a,o){return o.latency-a.latency}),M.splice(10).forEach(function(a){delete Ce[a.id]})}},Zt=function(e,n){n=n||{},se(function(){Jt();var r,i=N("INP"),a=function(s){s.forEach(function(g){g.interactionId&&ut(g),g.entryType==="first-input"&&!M.some(function(Q){return Q.entries.some(function(B){return g.duration===B.duration&&g.startTime===B.startTime})})&&ut(g)});var c,p=(c=Math.min(M.length-1,Math.floor(ot()/50)),M[c]);p&&p.latency!==i.value&&(i.value=p.latency,i.entries=p.entries,r())},o=X("event",a,{durationThreshold:n.durationThreshold||40});r=L(e,i,it,n.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),ue(function(){a(o.takeRecords()),i.value<0&&ot()>0&&(i.value=0,i.entries=[]),r(!0)}),G(function(){M=[],at=rt(),i=N("INP"),r=L(e,i,it,n.reportAllChanges)}))})},ct=[2500,4e3],Oe={},$t=function(e,n){n=n||{},se(function(){var r,i=Te(),a=N("LCP"),o=function(p){var g=p[p.length-1];g&&g.startTime<i.firstHiddenTime&&(a.value=Math.max(g.startTime-Ee(),0),a.entries=[g],r())},u=X("largest-contentful-paint",o);if(u){r=L(e,a,ct,n.reportAllChanges);var s=be(function(){Oe[a.id]||(o(u.takeRecords()),u.disconnect(),Oe[a.id]=!0,r(!0))});["keydown","click"].forEach(function(c){addEventListener(c,s,!0)}),ue(s),G(function(c){a=N("LCP"),r=L(e,a,ct,n.reportAllChanges),Se(function(){a.value=performance.now()-c.timeStamp,Oe[a.id]=!0,r(!0)})})}})},de=function(t){return t?Math.round(t.value):void 0},st=function(t){Wt(function(e){var n;t({cumulativeLayoutShift:(n=e==null?void 0:e.value)!==null&&n!==void 0?n:void 0})},{reportAllChanges:!0})},ft=function(t){Ke(function(e){return t({firstContentfulPaint:de(e)})})},dt=function(t){Xt(function(e){return t({firstInputDelay:de(e)})})},lt=function(t){Zt(function(e){return t({interactionToNextPaint:de(e)})})},vt=function(t){$t(function(e){return t({largestContentfulPaint:de(e)})})},en=["connectEnd","connectStart","decodedBodySize","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","encodedBodySize","fetchStart","loadEventEnd","loadEventStart","redirectCount","redirectEnd","redirectStart","responseStart","responseEnd","responseStatus","secureConnectionStart","transferSize","unloadEventEnd","unloadEventStart","workerStart"],tn=["initiatorType","nextHopProtocol"],pt=function(t,e){return function(){var n=E(function(r){var i,a,o,u,s;return S(this,function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),i=[{},r],[4,t(r)];case 1:return e.apply(void 0,[Y.apply(void 0,i.concat([c.sent()]))]),[3,3];case 2:return a=c.sent(),(s=window)===null||s===void 0||(u=s.SQUARESPACE_SENTRY)===null||u===void 0||(o=u.captureException)===null||o===void 0||o.call(u,a),[3,3];case 3:return[2]}})});return function(r){return n.apply(this,arguments)}}()};function Re(t){Object.values(De).forEach(function(){var e=E(function(n){var r,i,a,o;return S(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,n(t)];case 1:return u.sent(),[3,3];case 2:return r=u.sent(),(o=window)===null||o===void 0||(a=o.SQUARESPACE_SENTRY)===null||a===void 0||(i=a.captureException)===null||i===void 0||i.call(a,r),[3,3];case 3:return[2]}})});return function(n){return e.apply(this,arguments)}}()),en.forEach(pt(V,t)),tn.forEach(pt(Be,t))}var nn=["more","less","custom"],rn=function(){var t;return(t=nn.find(function(e){return window.matchMedia("prefers-contrast: ".concat(e)).matches}))!==null&&t!==void 0?t:"no-preference"},mt=function(){var t;return{forceColors:window.matchMedia("(forced-colors: active)").matches,networkInformationType:(t=navigator.connection)===null||t===void 0?void 0:t.type,prefersContrast:rn(),prefersReducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches,primaryInputHasHover:window.matchMedia("(hover: hover)").matches,keyboardUsage:!1}},an=function(t){var e=mt(),n=function(){t(e,"a11y")},r=function(i){var a;["INPUT","TEXTAREA"].includes((a=i.target)===null||a===void 0?void 0:a.tagName)||!Dt.includes(i.key)||(e.keyboardUsage=!0,n(),document.removeEventListener("keydown",r))};document.addEventListener("keydown",r),document.addEventListener(ge,function(){document.visibilityState==="hidden"&&n()})};function gt(t){var e=new RegExp("(^| )".concat(t,"=([^;]+)")),n=document.cookie.match(e);return n?n[2]:""}function on(){return!!(window.PerformanceMeasure&&window.PerformanceMark)}function ht(){if(!Object.prototype.hasOwnProperty.call(window,"PerformanceObserver"))return!1;try{var t=new window.PerformanceObserver(function(){return null});t.observe({entryTypes:["mark"]}),t.disconnect()}catch(e){return!1}return!0}function wt(){var t;return typeof((t=window.navigator)===null||t===void 0?void 0:t.sendBeacon)=="function"&&!jt.test(window.navigator.userAgent)}function un(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e,n,r,i,a,o,u;return{context:t,analyticsId:gt(kt),marketingId:gt(Ut),memberId:(r=window.Static)===null||r===void 0||(n=r.SQUARESPACE_CONTEXT)===null||n===void 0||(e=n.authenticatedAccount)===null||e===void 0?void 0:e.id,version:Ft,downlink:(i=navigator.connection)===null||i===void 0?void 0:i.downlink,effectiveType:(a=navigator.connection)===null||a===void 0?void 0:a.effectiveType,rtt:(o=navigator.connection)===null||o===void 0?void 0:o.rtt,saveData:(u=navigator.connection)===null||u===void 0?void 0:u.saveData,deliveryType:wt()?"beacon":"xhr",devicePixelRatio:window.devicePixelRatio,screenHeight:window.screen.height,screenWidth:window.screen.width,viewportHeight:window.innerHeight,viewportWidth:window.innerWidth,deviceMemory:navigator.deviceMemory,hardwareConcurrency:navigator.hardwareConcurrency,hash:window.location.hash||"",hostname:window.location.hostname||"",pathname:window.location.pathname||"/"}}var cn=function(){var t=E(function(e){var n,r;return S(this,function(i){switch(i.label){case 0:return n=un(e),r={},Re(function(a){Object.assign(r,a)}),[4,Promise.race([Ue(6e4),ke()])];case 1:return i.sent(),[2,C({},n,r)]}})});return function(n){return t.apply(this,arguments)}}(),sn=function(){var t=E(function(e,n){var r;return S(this,function(i){switch(i.label){case 0:return[4,cn(n)];case 1:return r=i.sent(),e(r,"page_speed"),[2]}})});return function(n,r){return t.apply(this,arguments)}}(),fn=["media-www.sqspcdn.com","images.squarespace-cdn.com","static1.squarespace.com"],dn=function(t){return fn.some(function(e){return t.includes(e)})},ln=function(t){return t.hasAttribute("data-loader")?2:t.hasAttribute("data-src")?1:0},vn=function(t,e){if(t.hasAttribute("data-image-resolution")){var n;return Number((n=t.getAttribute("data-image-resolution"))===null||n===void 0?void 0:n.replace("w",""))}var r=e.indexOf("format=");return r!==-1?Number(e.slice(r+7).replace(/w.*/,"")):NaN},pn=function(t,e,n){if(n===1&&R(t,HTMLImageElement)&&t.naturalHeight===0){var r=document.querySelector('div[style*="'.concat(e,'"]'));if(r)return r}return t},mn=function(t){if(R(t,HTMLImageElement)){var e=t.naturalHeight,n=t.naturalWidth,r=t.width,i=t.height;return{naturalHeight:e,naturalWidth:n,width:r,height:i}}var a=t.getBoundingClientRect(),o=Math.floor(a.width),u=Math.floor(a.height);return{naturalHeight:u,naturalWidth:o}},gn=function(){var t=E(function(e,n){var r,i,a,o,u,s,c,p,g,Q,B,ve,Rt,Ne,Pt,Le,pe,It;return S(this,function(jn){r=vn(n,e.name),i=ln(n),a=n.getAttribute("data-loader"),o=n.getAttribute("elementtiming"),u=e.toJSON(),s=u.serverTiming,c=u.workerTiming,p=F(u,["serverTiming","workerTiming"]),g=!0,Q=!1,B=void 0;try{for(ve=Object.entries(p)[Symbol.iterator]();!(g=(Rt=ve.next()).done);g=!0)Ne=A(Rt.value,2),Pt=Ne[0],Le=Ne[1],typeof Le=="number"&&(p[Pt]=Math.floor(Le))}catch(Me){Q=!0,B=Me}finally{try{!g&&ve.return!=null&&ve.return()}finally{if(Q)throw B}}return pe=pn(n,e.name,i),It=mn(pe),[2,new Promise(function(Me){var Nt=new IntersectionObserver(function(Bn){Bn.forEach(function(me){if(me.target===pe)return Nt.disconnect(),Me(C({visibleOnLoad:me.isIntersecting,observationTime:Math.floor(me.time),intersectionRatio:me.intersectionRatio,squarespaceSize:r,imageType:i,imageLoaderType:a,elementTiming:o},It,p))})});Nt.observe(pe)})]})});return function(n,r){return t.apply(this,arguments)}}(),hn=function(){var t=E(function(e){var n,r,i,a,o;return S(this,function(u){switch(u.label){case 0:return n=e.resource,r=e.deliverMetrics,!(R(n,PerformanceResourceTiming)&&n.initiatorType==="img")||!dn(n.name)?[2]:(i=n.name.replace(/\?.*/,""),a=Array.from(document.querySelectorAll('img[src="'.concat(n.name,'"], img[data-src*="').concat(i,'"], img[srcset*="').concat(n.name,'"]'))),document.querySelectorAll('picture > source[srcset*="'.concat(n.name,'"]')).forEach(function(s){var c=s.parentElement;c!==null&&a.push(c.lastElementChild)}),a.length!==1?[2]:[4,gn(n,a[0])]);case 1:return o=u.sent(),r(o,"image"),[2]}})});return function(n){return t.apply(this,arguments)}}(),_t=function(){var t=E(function(e){var n,r;return S(this,function(i){return ht()?(n=function(a){return hn({resource:a,deliverMetrics:e})},performance.getEntriesByType("resource").forEach(n),r=new PerformanceObserver(function(a){a.getEntries().forEach(n)}),r.observe({entryTypes:["resource"]}),[2]):[2]})});return function(n){return t.apply(this,arguments)}}(),q,Pe=function(t){var e=t.spanName,n=t.tracer,r=t.startTime,i=t.spanAttributes,a=i===void 0?{}:i;q===void 0&&(q=new Map);var o=n.startSpan(e,{startTime:r});o.setAttributes(a),q.set(e,o)},yt=function(t){var e=t.spanName,n=t.spanAttributes,r=n===void 0?{}:n,i=t.updateName;if(!(q===void 0||!q.has(e))){var a=q.get(e);a.setAttributes(r),i!==void 0&&a.updateName(i),a.end(),q.delete(e)}},J="rum-",Et=function(t){var e,n;typeof((n=window)===null||n===void 0||(e=n.SQUARESPACE_SENTRY)===null||e===void 0?void 0:e.captureException)=="function"?window.SQUARESPACE_SENTRY.captureException(t):console.warn("@sqs/rum-collector: user timing exception: ".concat(t))};function wn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{if(!St())return;var n=J+t;window.performance.clearMarks(n);var r=window.performance.mark(n,{detail:e.detail,startTime:e.startTime});if(e.tracer!==void 0){var i=A(window.performance.getEntriesByName(n,"mark").slice(-1),1),a=i[0];Pe({spanName:n,tracer:e.tracer,startTime:a.startTime,spanAttributes:e.spanAttributes})}return r}catch(o){Et(o)}}function _n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{requireStart:!1};try{if(!(St()&&yn()))return;var n=J+t,r={detail:e.detail,duration:e.duration};if(e.start===void 0?window.performance.getEntriesByName(n,"mark").length>0&&(r.start=n):typeof e.start=="string"?r.start=J+e.start:r.start=e.start,r.end=typeof e.end=="string"?J+e.end:e.end,e.requireStart&&typeof r.start!="string")return;if(e.tracer!==void 0){var i=C({measureName:n},e.spanAttributes);if(typeof r.start=="number")Pe({spanName:n,tracer:e.tracer,startTime:r.start}),yt({spanName:n,spanAttributes:i});else{var a;if(window.performance.getEntriesByName((a=r.start)!==null&&a!==void 0?a:n,"mark").length===0){var o;Pe({spanName:(o=r.start)!==null&&o!==void 0?o:n,tracer:e.tracer,startTime:0})}var u;yt({spanName:(u=r.start)!==null&&u!==void 0?u:n,spanAttributes:i,updateName:r.start!==n?n:void 0})}}Sn(n,r);var s=En(n);return s}catch(c){Et(c)}}function yn(){return"performance"in window&&"getEntries"in window.performance&&"getEntriesByType"in window.performance&&"getEntriesByName"in window.performance}function St(){return"mark"in window.performance&&"measure"in window.performance}function En(t){var e=window.performance.getEntriesByName(t,"measure");return e[e.length-1]}function Sn(t,e){try{window.performance.measure(t,e)}catch(i){var n=typeof e.start=="string"?e.start:t,r=typeof e.end=="string"?e.end:void 0;try{window.performance.measure(t,n,r)}catch(a){if(!R(a,DOMException))throw a;try{window.performance.measure(t,"navigationStart")}catch(o){if(!R(o,DOMException))throw o;window.performance.measure(t)}}}}function bn(t){return typeof t=="string"&&t.substring(0,4)===J}function Tn(t){var e={};for(var n in t)typeof t[n]!="function"&&(e[n]=t[n]);return e}var bt=new Set,An=function(t){if(on()){var e=function(r){var i=r.map(Tn);i.forEach(function(a){if(bn(a.name)){var o="".concat(a.name,"|").concat(a.duration);bt.has(o)||(t(a,"user"),bt.add(o))}})};if(e(window.performance.getEntriesByType("measure")),ht()){var n=new window.PerformanceObserver(function(r){return e(r.getEntries())});n.observe({entryTypes:["measure"]})}else document.addEventListener(ge,function(){document.visibilityState==="hidden"&&e(window.performance.getEntriesByType("measure"))})}},Tt,le=[],Cn=function(t){le.push(t)};function On(t,e){if(!(wt()&&navigator.sendBeacon(t,e))){var n=new XMLHttpRequest;n.open("POST",t,!0),n.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),n.send(e)}}function At(t){if(le.length){var e=JSON.stringify(le);On(t,e),le=[]}}function Rn(t){window.addEventListener(xt,function(){Tt=window.setTimeout(function(){return At(t)},Bt)}),document.addEventListener(ge,function(){document.visibilityState==="hidden"&&(window.clearTimeout(Tt),At(t))})}function Pn(t){Cn(C({raw:!0},t))}var In=function(t,e){return function(n,r){var i={app:t,data:n,event:r,pageLoadId:e,ts:Date.now()};Pn(i)}},Nn=function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t&&t.apply(void 0,P(n))}},Ln=function(t){var e={appName:t.appName||"",context:t.context||{},enabled:typeof t.enabled=="boolean"?t.enabled:!0,serviceURL:t.serviceURL||Mt,captureException:Nn(t.captureException)};return e};function Ct(t){return Ie.apply(this,arguments)}function Ie(){return Ie=E(function(t){var e,n,r;return S(this,function(i){switch(i.label){case 0:return e=Ln(t),e.enabled?[4,Promise.resolve().then(function(){return Lt(),ae})]:[2];case 1:n=i.sent().nanoid();try{r=In(e.appName,n),sn(r,e.context),An(r),_t(r),an(r),Rn(e.serviceURL)}catch(a){e.captureException(a,{pageLoadId:n,parsedOptions:e})}return[2]}})}),Ie.apply(this,arguments)}var Mn={action:"load",actor:"user",event_owner_team:"web_performance",event_source:"web",object_type:"website"},xn=function(){var t=/^qa\d+.sqsp.net/g,e=/^stage.sqsp.net/g,n=/(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g,r=window.location.hostname.substr(window.location.hostname.indexOf(".")+1);return e.test(r)||t.test(r)?"staging":n.test(r)?"dev":"prod"},Dn=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return new t({customSchemaName:"Performance",sourceEnvironment:e},Mn)},Ot=Object.freeze({cumulativeLayoutShift:"cumulative_layout_shift",decodedBodySize:"decoded_body_size_bytes",domContentLoadedEventEnd:"dom_content_loaded_event_end_ms",domContentLoadedEventStart:"dom_content_loaded_event_start_ms",domainLookup:"domain_lookup_ms",encodedBodySize:"encoded_body_size_bytes",firstContentfulPaint:"first_contentful_paint_ms",firstInputDelay:"first_input_delay_ms",interactionToNextPaint:"interaction_to_next_paint_ms",largestContentfulPaint:"largest_contentful_paint_ms",loadEventEnd:"load_event_end_ms",loadEventStart:"load_event_start_ms",responseStart:"response_start_ms",tcpConnection:"tcp_connection_ms",tlsNegotiation:"tls_negotiation_ms"}),Un=function(){var t=E(function(e){var n;return S(this,function(r){switch(r.label){case 0:return n={},Re(function(i){Object.entries(i).forEach(function(a){var o=A(a,2),u=o[0],s=o[1];Object.prototype.hasOwnProperty.call(Ot,u)&&(n[Ot[u]]=s)})}),[4,Promise.race([Ue(6e4),ke()])];case 1:return r.sent(),e(n),[2]}})});return function(n){return t.apply(this,arguments)}}();function kn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."),Ct.apply(void 0,P(e))}}},function(O){var w=function(T){return O(O.s=T)},y=w(933441)}]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/18ade6b8da0475563e3d4c96a104f0fb/performance-5c471d9ec4c3660675d5-min.en-US.js.map</ul></div></div></div></div></div></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/companies" id="o-header-link-3" data-trackable="Companies">Companies</a><div class="o-header__mega" id="o-header-mega-3" role="group" aria-labelledby="o-header-link-3" data-o-header-mega="true" data-trackable="meganav | Companies"><div class="o-header__container"><div class="o-header__mega-wrapper"><div class="o-header__mega-column o-header__mega-column--subsections" data-trackable="sections"><div class="o-header__mega-heading">Sections</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/companies" data-trackable="link">Companies Home</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/energy" data-trackable="link">Energy</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/financials" data-trackable="link">Financials</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/health" data-trackable="link">Health</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/industrials" data-trackable="link">Industrials</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/media" data-trackable="link">Media</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/professional-services" data-trackable="link">Professional Services</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/retail-consumer" data-trackable="link">Retail &amp; Consumer</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/technology-sector" data-trackable="link">Tech Sector</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/telecoms" data-trackable="link">Telecoms</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/transport" data-trackable="link">Transport</a></li></ul></div></div><div class="o-header__mega-column o-header__mega-column--articles" data-trackable="popular"><div class="o-header__mega-heading">Most Read</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/56a44080-7c7b-416a-849f-00695c4d6f55" data-trackable="link">Goldman Sachs and Morgan Stanley report lowest profits in 4 years</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/d3ce6d67-6275-492e-bb74-de6fafc895cb" data-trackable="link">Ben &amp; Jerry’s calls for permanent ceasefire in Gaza</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/7da62178-e773-48df-824e-7eb18cd7d813" data-trackable="link">Has BYD already peaked? </a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/f22825e4-54b9-4e9b-babd-00bf5585e3b8" data-trackable="link">Bill Ackman escalates Business Insider plagiarism feud with legal threat</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/200759c7-74bc-4c48-a0d9-aa43f07a2c53" data-trackable="link">Ryanair doubles number of engineers overseeing Boeing’s production lines</a></li></ul></div></div></div></div></div></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/technology" id="o-header-link-4" data-trackable="Tech">Tech</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/markets" id="o-header-link-5" data-trackable="Markets">Markets</a><div class="o-header__mega" id="o-header-mega-5" role="group" aria-labelledby="o-header-link-5" data-o-header-mega="true" data-trackable="meganav | Markets"><div class="o-header__container"><div class="o-header__mega-wrapper"><div class="o-header__mega-column o-header__mega-column--subsections" data-trackable="sections"><div class="o-header__mega-heading">Sections</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/markets" data-trackable="link">Markets Home</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/alphaville" data-trackable="link">Alphaville</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="https://markets.ft.com/data" data-trackable="link">Markets Data</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/cryptofinance" data-trackable="link">Cryptofinance</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/capital-markets" data-trackable="link">Capital Markets</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/commodities" data-trackable="link">Commodities</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/currencies" data-trackable="link">Currencies</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/equities" data-trackable="link">Equities</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/ft-wealth-management" data-trackable="link">Wealth Management</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/moral-money" data-trackable="link">Moral Money</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="https://etf.ft.com" data-trackable="link">ETF Hub</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/fund-management" data-trackable="link">Fund Management</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/ft-trading-room" data-trackable="link">Trading</a></li></ul></div></div><div class="o-header__mega-column o-header__mega-column--articles" data-trackable="popular"><div class="o-header__mega-heading">Most Read</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/b872d865-8f66-47a5-a5e5-1c7cb62a59b4" data-trackable="link">News updates from January 16: Fed’s Waller says 2% inflation in sight, Senior Tories resign over Rwanda bill</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/e508268c-57b0-4680-83d2-b9a105a31a66" data-trackable="link">US launches fresh strikes on Houthis as Red Sea trade disruption spreads</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/ae6a3490-b399-4c8f-8e7a-de3318d14f8e" data-trackable="link">Beijing tells some investors not to sell as Chinese stock rout resumes </a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/8e530a5c-6f67-424a-a9d9-a14d395ee4c1" data-trackable="link">Shell under fire from Europe’s largest asset manager over climate policy</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/a12f8dee-fae3-48ea-87b8-c91529d9f1b7" data-trackable="link">Shell agrees to dispose of Nigerian business for $1.3bn after 68 years</a></li></ul></div></div></div></div></div></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/climate-capital" id="o-header-link-6" data-trackable="Climate">Climate</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/opinion" id="o-header-link-7" data-trackable="Opinion">Opinion</a><div class="o-header__mega" id="o-header-mega-7" role="group" aria-labelledby="o-header-link-7" data-o-header-mega="true" data-trackable="meganav | Opinion"><div class="o-header__container"><div class="o-header__mega-wrapper"><div class="o-header__mega-column o-header__mega-column--subsections" data-trackable="sections"><div class="o-header__mega-heading">Sections</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/opinion" data-trackable="link">Opinion Home</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/columnists" data-trackable="link">Columnists</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/ft-view" data-trackable="link">The FT View</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/lex" data-trackable="link">Lex</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/obituaries" data-trackable="link">Obituaries</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/letters" data-trackable="link">Letters</a></li></ul></div></div><div class="o-header__mega-column o-header__mega-column--articles" data-trackable="popular"><div class="o-header__mega-heading">Most Read</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/c097f911-efdb-41cb-a977-01ff495dd0e2" data-trackable="link">Iowa rarely predicts a winner but Donald Trump may be the exception</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/0e9aaacc-e7b9-49e0-b869-4888ffa970cb" data-trackable="link">A huge amount is at stake in the ICJ’s genocide judgment</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/eb22db45-91f1-4d7f-8091-ca78124e57f1" data-trackable="link">The UK’s political class needs to learn to love the economy it actually has</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/41bc7747-63b9-41e5-a341-6c953be511ac" data-trackable="link">What we really know about the global economy</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/8de665cc-f391-43cb-be0d-40646ed158c0" data-trackable="link">America will not retreat from the world</a></li></ul></div></div></div></div></div></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/work-careers" id="o-header-link-8" data-trackable="Work &amp; Careers">Work &amp; Careers</a><div class="o-header__mega" id="o-header-mega-8" role="group" aria-labelledby="o-header-link-8" data-o-header-mega="true" data-trackable="meganav | Work &amp; Careers"><div class="o-header__container"><div class="o-header__mega-wrapper"><div class="o-header__mega-column o-header__mega-column--subsections" data-trackable="sections"><div class="o-header__mega-heading">Sections</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/work-careers" data-trackable="link">Work &amp; Careers Home</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="https://rankings.ft.com/" data-trackable="link">Business School Rankings</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/business-education" data-trackable="link">Business Education</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/entrepreneurship" data-trackable="link">Entrepreneurship</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/recruitment" data-trackable="link">Recruitment</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/business-books" data-trackable="link">Business Books</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/business-travel" data-trackable="link">Business Travel</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/working-it" data-trackable="link">Working It</a></li></ul></div></div><div class="o-header__mega-column o-header__mega-column--articles" data-trackable="popular"><div class="o-header__mega-heading">Most Read</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/812878c5-1fc0-4510-adb7-1d837bdc2e97" data-trackable="link">Competent jerks have a shelf life in the office</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/eab666aa-2a85-493e-bf3c-ada56583d73e" data-trackable="link">Joseph Nye: ‘You can coerce by economic means’</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/15062ea1-4139-4b7e-9a14-0449b299bf13" data-trackable="link">The ‘smile files’ cheering up gloomy workers</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/979af923-99f0-4e66-82e2-fea1f0433c43" data-trackable="link">The scramble to find CFOs as departures hit decade high</a></li></ul></div></div></div></div></div></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/life-arts" id="o-header-link-9" data-trackable="Life &amp; Arts">Life &amp; Arts</a><div class="o-header__mega" id="o-header-mega-9" role="group" aria-labelledby="o-header-link-9" data-o-header-mega="true" data-trackable="meganav | Life &amp; Arts"><div class="o-header__container"><div class="o-header__mega-wrapper"><div class="o-header__mega-column o-header__mega-column--subsections" data-trackable="sections"><div class="o-header__mega-heading">Sections</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/life-arts" data-trackable="link">Life &amp; Arts Home</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/arts" data-trackable="link">Arts</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/books" data-trackable="link">Books</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/food-drink" data-trackable="link">Food &amp; Drink</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/magazine" data-trackable="link">FT Magazine</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/house-home" data-trackable="link">House &amp; Home</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/style" data-trackable="link">Style</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/travel" data-trackable="link">Travel</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/globetrotter" data-trackable="link">FT Globetrotter</a></li></ul></div></div><div class="o-header__mega-column o-header__mega-column--articles" data-trackable="popular"><div class="o-header__mega-heading">Most Read</div><div class="o-header__mega-content"><ul class="o-header__mega-list"><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/23478c63-1ce3-4beb-a627-6b304e635e3e" data-trackable="link">Sublime scuba diving in Palau</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/b139d2d0-1562-4706-9e26-bab1f1d98cfc" data-trackable="link">Our enduring fascination with Kafka</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/9d0843b5-9f62-4b2c-bc91-8adf2617a764" data-trackable="link">Next-gen sports recovery tools</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/01a8700d-a4da-4395-b436-7f84f5789a53" data-trackable="link">Ten exhibitions for 2024</a></li><li class="o-header__mega-item"><a class="o-header__mega-link" href="/content/c11c5d1a-9329-4f49-b5fe-aa1ff1bdb8e4" data-trackable="link">What a post-war future holds for Ukraine and Russia </a></li></ul></div></div></div></div></div></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/htsi" id="o-header-link-10" data-trackable="HTSI">HTSI</a></li></ul></div></nav><div class="o-header__subnav" role="navigation" aria-label="Sub navigation" data-o-header-subnav="true" data-trackable="header-subnav"><div class="o-header__container"><div class="o-header__subnav-wrap-outside"><div class="o-header__subnav-wrap-inside" data-o-header-subnav-wrapper="true"><div class="o-header__subnav-content"><ol class="o-header__subnav-list o-header__subnav-list--breadcrumb" aria-label="Breadcrumb" data-trackable="breadcrumb"><li class="o-header__subnav-item"><a class="o-header__subnav-link " href="/personal-finance" data-trackable="Personal Finance">Personal Finance</a></li><li class="o-header__subnav-item"><a class="o-header__subnav-link o-header__subnav-link--highlight" href="/pensions" aria-label="Pensions, current page" aria-current="page" data-trackable="Pensions">Pensions</a></li></ol></div></div><button class="o-header__subnav-button o-header__subnav-button--left" title="scroll left" aria-label="scroll left" aria-hidden="true" disabled=""></button><button class="o-header__subnav-button o-header__subnav-button--right" title="scroll right" aria-label="scroll right" aria-hidden="true" disabled=""></button></div></div></div></header><header class="o-header o-header--simple o-header--sticky o--if-js" data-o-component="o-header" data-o-header--sticky="true" aria-hidden="true"><div class="o-header__row o-header__top" data-trackable="header-sticky"><div class="o-header__container"><div class="o-header__top-wrapper"><div class="o-header__top-column o-header__top-column--left"><a href="#" class="o-header__top-icon-link o-header__top-icon-link--menu" aria-controls="o-header-drawer" data-trackable="drawer-toggle" tabindex="-1"><span class="o-header__top-link-label">Menu</span></a><a href="#" class="o-header__top-icon-link o-header__top-icon-link--search" aria-controls="o-header-search-sticky" data-trackable="search-toggle" tabindex="-1"><span class="o-header__top-link-label">Search</span></a></div><div class="o-header__top-column o-header__top-column--center"><div class="o-header__top-takeover"><div class="o-header__nav"><ul class="o-header__nav-list o-header__nav-list--left" data-trackable="primary-nav"><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/" data-trackable="Home" tabindex="-1">Home</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/world" data-trackable="World" tabindex="-1">World</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/us" data-trackable="US" tabindex="-1">US</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/companies" data-trackable="Companies" tabindex="-1">Companies</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/technology" data-trackable="Tech" tabindex="-1">Tech</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/markets" data-trackable="Markets" tabindex="-1">Markets</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/climate-capital" data-trackable="Climate" tabindex="-1">Climate</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/opinion" data-trackable="Opinion" tabindex="-1">Opinion</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/work-careers" data-trackable="Work &amp; Careers" tabindex="-1">Work &amp; Careers</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/life-arts" data-trackable="Life &amp; Arts" tabindex="-1">Life &amp; Arts</a></li><li class="o-header__nav-item"><a class="o-header__nav-link o-header__nav-link--primary" href="/htsi" data-trackable="HTSI" tabindex="-1">HTSI</a></li></ul></div></div><a class="o-header__top-logo o-header__hide--L" data-trackable="logo" href="/" title="Go to Financial Times homepage" tabindex="-1"><span class="o-header__visually-hidden">Financial Times</span></a></div><div class="o-header__top-column o-header__top-column--right"><div class="o-header__nav"><div class="o-header__top-column o-header__top-column--right"><a class="o-header__top-button o-header__top-button--hide-m" role="button" href="/products?segmentId=f860e6c2-18af-ab30-cd5e-6e3a456f9265" data-trackable="Subscribe" tabindex="-1">Subscribe</a><a class="o-header__top-link " href="/login?location=/pensions" data-trackable="Sign In" tabindex="-1">Sign In</a></div></div></div></div></div></div><div id="o-header-search-sticky" class="o-header__row o-header__search o-header__search--sticky" data-trackable="header-search" data-o-header-search="true"><div class="o-header__container"><form class="o-header__search-form" action="/search" role="search" aria-label="Site search" data-n-topic-search="true" data-n-topic-search-categories="concepts,equities" data-n-topic-search-view-all="true"><label class="o-header__visually-hidden" for="o-header-search-term-sticky">Search the <abbr title="Financial Times">FT</abbr></label><input type="text" class="o-header__search-term" id="o-header-search-term-sticky" name="q" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellcheck="false" data-trackable="search-term" placeholder="Search the FT" data-n-topic-search-input="true"/><button class="o-header__search-submit" type="submit" data-trackable="search-submit">Search</button><button class="o-header__search-close o--if-js" type="button" aria-controls="o-header-search-sticky" title="Close search bar" data-trackable="close"><span class="o-header__visually-hidden">Close search bar</span></button></form></div></div></header></div><div class="n-layout__row n-layout__row--content"><div><script type="application/json" id="stream-page-meta">
		{"pageAttributes":{"isPage":1}}
	</script>

	 
			<div id="n-exponea-top-slot"></div>


<div
	role="navigation"
	aria-label="category navigation"
	class="sub-header"
	data-trackable="sub-header"
>



		<div class="o-grid-container">

			<div class="o-grid-row">

				<div
					class="sub-header__section sub-header__section--title
					
						"
					data-o-grid-colspan="12 M8 XL9"
				>


						<h1 class="sub-header__page-title">
							Pensions
						</h1>

										<form
											class="n-myft-ui n-myft-ui--follow "
											method="GET"
											data-myft-ui="follow"
											data-concept-id="9b610e96-53d2-44fe-af4f-a76716afb496"
											
													action="/myft/add/9b610e96-53d2-44fe-af4f-a76716afb496"
													data-js-action="/__myft/api/core/followed/concept/9b610e96-53d2-44fe-af4f-a76716afb496?method=put"
											>
											<input
												data-myft-csrf-token
												value=""
												type="hidden"
												name="token">
											<div
												class="n-myft-ui__announcement o-normalise-visually-hidden"
												aria-live="assertive"
												data-pressed-text="Now following Pensions."
												data-unpressed-text="No longer following Pensions."
											></div>
											<button
													aria-pressed="false"
													aria-label="Add to myFT: Pensions"
													title="Add Pensions to myFT"
													data-alternate-label="Added Pensions to myFT: click to remove"
															data-alternate-text="Added"
												class="
													n-myft-follow-button"
												data-concept-id="9b610e96-53d2-44fe-af4f-a76716afb496" 
												data-trackable="follow"
												type="submit">Add to myFT</button>
										</form>





				</div>
			</div>
		</div>
		</div>


				<div class="n-myft-digest-promo">
					<div class="o-grid-container o-grid-container--snappy">
						<div class="o-grid-row">
							<div data-o-grid-colspan="12 M8" class="n-myft-digest-promo__container">
								<div class="o-grid-container o-grid-container--snappy o-grid-container--bleed">
									<div class="o-grid-row">
				
										<div data-o-grid-colspan="12 M8" class="n-myft-digest-promo__content">
											<h2 class="n-myft-digest-promo__heading">
												Add to <span class="n-myft-digest-promo__branding">myFT Digest</span>
											</h2>
											<p class ="n-myft-digest-promo__para">Add this topic to your myFT Digest for news straight to your inbox</p>
										</div>
				
										<div data-o-grid-colspan="12 M4" class="n-myft-digest-promo__cta-wrapper">
											<button aria-label="Add Pensions"
															aria-pressed="false"
															class="n-myft-digest-promo__cta-btn"
															data-alternate-label="Remove Pensions"
															data-alternate-text="Added"
															data-concept-id="9b610e96-53d2-44fe-af4f-a76716afb496"
															data-trackable="digest-promo"
															title="Add Pensions"
															data-title="Pensions"
															data-direct-type="http://www.ft.com/ontology/Topic"
															type="submit">
															Add to myFT Digest
											</button>
										</div>
				
										<button class="n-myft-digest-promo__dismiss-btn" title="dismiss" data-trackable="digest-promo-dismiss"></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

<div role="main" id="site-content" data-concept-id="9b610e96-53d2-44fe-af4f-a76716afb496">

	<div class="o-grid-container">
			
			
			
			<div class="o-grid-row">
				<div
					class="js-track-scroll-event"
					id="stream"
					data-o-grid-colspan="12 L8"
					
				>
			
						<div data-trackable="stream" class="o-teaser-collection o-teaser-collection--stream">
							<ul class="o-teaser-collection__list js-stream-list" data-stream-list aria-busy="false">
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2024-01-16T11:21:13.838Z">Tuesday, 16 January, 2024</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="833f377f-0757-40d5-ac1b-b60180d0462d" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="833f377f-0757-40d5-ac1b-b60180d0462d"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/annuities" aria-label="Category: Annuities">Annuities</a></div><div class="o-teaser__heading"><a href="/content/833f377f-0757-40d5-ac1b-b60180d0462d" data-trackable="heading-link" class="js-teaser-heading-link">Annuities — we want your views</a></div><p class="o-teaser__standfirst"><a href="/content/833f377f-0757-40d5-ac1b-b60180d0462d" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Do you enjoy peace of mind, or do you regret this retirement decision? </a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="833f377f-0757-40d5-ac1b-b60180d0462d"
																data-myft-ui="saved"
																action="/myft/save/833f377f-0757-40d5-ac1b-b60180d0462d"
																data-js-action="/__myft/api/core/saved/content/833f377f-0757-40d5-ac1b-b60180d0462d?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Annuities — we want your views to myFT for later"
																		aria-label="Save Annuities — we want your views to myFT for later"
																		data-alternate-label="Annuities — we want your views is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="833f377f-0757-40d5-ac1b-b60180d0462d" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/833f377f-0757-40d5-ac1b-b60180d0462d" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2445%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ffc2dd9db-f7ad-4648-942a-396dcba23b64.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="A serious-looking woman reads a letter"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2024-01-11T21:19:26.930Z">Thursday, 11 January, 2024</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="7a000d1b-5c95-4105-a0a9-31e046ea0cb7" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="7a000d1b-5c95-4105-a0a9-31e046ea0cb7"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/stream/14c07256-ede5-4943-9f72-0a7df37758b2" aria-label="Category: California State Teachers&#39; Retirement System">California State Teachers&#39; Retirement System</a></div><div class="o-teaser__heading"><a href="/content/7a000d1b-5c95-4105-a0a9-31e046ea0cb7" data-trackable="heading-link" class="js-teaser-heading-link">Calstrs investment chief Christopher Ailman to retire after 20 years</a></div><p class="o-teaser__standfirst"><a href="/content/7a000d1b-5c95-4105-a0a9-31e046ea0cb7" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Two of the biggest US pension funds are now seeking CIOs following departure of Calpers’ Musicco</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="7a000d1b-5c95-4105-a0a9-31e046ea0cb7"
																data-myft-ui="saved"
																action="/myft/save/7a000d1b-5c95-4105-a0a9-31e046ea0cb7"
																data-js-action="/__myft/api/core/saved/content/7a000d1b-5c95-4105-a0a9-31e046ea0cb7?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Calstrs investment chief Christopher Ailman to retire after 20 years to myFT for later"
																		aria-label="Save Calstrs investment chief Christopher Ailman to retire after 20 years to myFT for later"
																		data-alternate-label="Calstrs investment chief Christopher Ailman to retire after 20 years is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="7a000d1b-5c95-4105-a0a9-31e046ea0cb7" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/7a000d1b-5c95-4105-a0a9-31e046ea0cb7" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2500%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8da6ee57-d605-4a6e-86a0-8e397ddd16db.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Christopher Ailman speaks at the Milken Institute Global Conference in Beverly Hills, California, in 2022"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2024-01-10T18:29:43.138Z">Wednesday, 10 January, 2024</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="1e29fae1-e01d-4442-a889-01f3498405a4" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="1e29fae1-e01d-4442-a889-01f3498405a4"><div class="o-teaser__content"><div class="o-teaser__meta"></div><div class="o-teaser__heading"><a href="/content/1e29fae1-e01d-4442-a889-01f3498405a4" data-trackable="heading-link" class="js-teaser-heading-link">Government defends access to UK pension surpluses </a></div><p class="o-teaser__standfirst"><a href="/content/1e29fae1-e01d-4442-a889-01f3498405a4" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Trustees will be prevented from making risky decisions if proposals go ahead</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="1e29fae1-e01d-4442-a889-01f3498405a4"
																data-myft-ui="saved"
																action="/myft/save/1e29fae1-e01d-4442-a889-01f3498405a4"
																data-js-action="/__myft/api/core/saved/content/1e29fae1-e01d-4442-a889-01f3498405a4?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Government defends access to UK pension surpluses  to myFT for later"
																		aria-label="Save Government defends access to UK pension surpluses  to myFT for later"
																		data-alternate-label="Government defends access to UK pension surpluses  is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="1e29fae1-e01d-4442-a889-01f3498405a4" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/1e29fae1-e01d-4442-a889-01f3498405a4" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2176%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fcf9e4532-b22f-42f5-abba-0b73d56af03b.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Commuters heading across London Bridge towards the City of London"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2024-01-05T05:00:58.773Z">Friday, 5 January, 2024</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="e28a4220-e2a4-4c94-8459-8587c34dd332" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="e28a4220-e2a4-4c94-8459-8587c34dd332"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/content/d42d15d0-cbc2-4513-999c-51dee7729302" aria-label="Category: FT Money personal finance guides">FT Money personal finance guides</a></div><div class="o-teaser__heading"><a href="/content/e28a4220-e2a4-4c94-8459-8587c34dd332" data-trackable="heading-link" class="js-teaser-heading-link">Need to Know: Navigating changes to UK tax in 2024</a></div><p class="o-teaser__standfirst"><a href="/content/e28a4220-e2a4-4c94-8459-8587c34dd332" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">National insurance changes and more to come over the next few months</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="e28a4220-e2a4-4c94-8459-8587c34dd332"
																data-myft-ui="saved"
																action="/myft/save/e28a4220-e2a4-4c94-8459-8587c34dd332"
																data-js-action="/__myft/api/core/saved/content/e28a4220-e2a4-4c94-8459-8587c34dd332?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Need to Know: Navigating changes to UK tax in 2024 to myFT for later"
																		aria-label="Save Need to Know: Navigating changes to UK tax in 2024 to myFT for later"
																		data-alternate-label="Need to Know: Navigating changes to UK tax in 2024 is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="e28a4220-e2a4-4c94-8459-8587c34dd332" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/e28a4220-e2a4-4c94-8459-8587c34dd332" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2500%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F210fd3f5-6a08-4bd6-9991-9d9153e65169.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2024-01-05T05:00:58.562Z">Friday, 5 January, 2024</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="455f121f-311f-43d3-95cf-68c1446bdb4d" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="455f121f-311f-43d3-95cf-68c1446bdb4d"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/stream/0b2f67f9-f24c-432c-8a0b-a22e282b33e7" aria-label="Category: HM Revenue &amp; Customs">HM Revenue &amp; Customs</a></div><div class="o-teaser__heading"><a href="/content/455f121f-311f-43d3-95cf-68c1446bdb4d" data-trackable="heading-link" class="js-teaser-heading-link">‘Something that never leaves you’: Pension scam victims fear a new tax hit</a></div><p class="o-teaser__standfirst"><a href="/content/455f121f-311f-43d3-95cf-68c1446bdb4d" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Schemes encouraged pension transfers and used money in risky investments</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="455f121f-311f-43d3-95cf-68c1446bdb4d"
																data-myft-ui="saved"
																action="/myft/save/455f121f-311f-43d3-95cf-68c1446bdb4d"
																data-js-action="/__myft/api/core/saved/content/455f121f-311f-43d3-95cf-68c1446bdb4d?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save ‘Something that never leaves you’: Pension scam victims fear a new tax hit to myFT for later"
																		aria-label="Save ‘Something that never leaves you’: Pension scam victims fear a new tax hit to myFT for later"
																		data-alternate-label="‘Something that never leaves you’: Pension scam victims fear a new tax hit is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="455f121f-311f-43d3-95cf-68c1446bdb4d" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/455f121f-311f-43d3-95cf-68c1446bdb4d" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2691%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3f1a3e75-8f88-4955-a6c7-e4c1e2d09413.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Portrait of Jeremy Cornford"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-stream-item>
													<div
														class="o-ads o-ads advert advert--instream"
														data-o-ads-targeting="pos=top;"
														data-o-ads-center="true"
														data-o-ads-label="false"
														data-o-ads-formats-small="MediumRectangle,Responsive,OneByOne"
														data-o-ads-formats-medium="MediumRectangle,Responsive,OneByOne"
														data-o-ads-formats-large="false"
														data-o-ads-formats-extra="false"
														aria-hidden="true">
													</div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2024-01-04T14:07:33.390Z">Thursday, 4 January, 2024</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="1437a2df-d41e-4a99-aa2a-9619961bfb10" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="1437a2df-d41e-4a99-aa2a-9619961bfb10"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/sarah-gordon" aria-label="Category: Sarah Gordon">Sarah Gordon</a></div><div class="o-teaser__heading"><a href="/content/1437a2df-d41e-4a99-aa2a-9619961bfb10" data-trackable="heading-link" class="js-teaser-heading-link">How to design a UK wealth fund is baffling both Labour and the Tories</a></div><p class="o-teaser__standfirst"><a href="/content/1437a2df-d41e-4a99-aa2a-9619961bfb10" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Attracting enough capital to boost Britain’s growth rate depends on overcoming the public-private language barrier</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="1437a2df-d41e-4a99-aa2a-9619961bfb10"
																data-myft-ui="saved"
																action="/myft/save/1437a2df-d41e-4a99-aa2a-9619961bfb10"
																data-js-action="/__myft/api/core/saved/content/1437a2df-d41e-4a99-aa2a-9619961bfb10?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save How to design a UK wealth fund is baffling both Labour and the Tories to myFT for later"
																		aria-label="Save How to design a UK wealth fund is baffling both Labour and the Tories to myFT for later"
																		data-alternate-label="How to design a UK wealth fund is baffling both Labour and the Tories is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="1437a2df-d41e-4a99-aa2a-9619961bfb10" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/1437a2df-d41e-4a99-aa2a-9619961bfb10" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2810%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ff2b48fc4-acb2-472f-af61-c54088ef9804.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="The Houses of Parliament in London"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2024-01-02T22:36:00.918Z">Tuesday, 2 January, 2024</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="966b77d6-7ea8-4d3b-a0a2-e83d07be42ed" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="966b77d6-7ea8-4d3b-a0a2-e83d07be42ed"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/stream/fbc41f4b-1fac-4eb7-9ba3-88d1df72014b" aria-label="Category: Thames Water PLC">Thames Water PLC</a></div><div class="o-teaser__heading"><a href="/content/966b77d6-7ea8-4d3b-a0a2-e83d07be42ed" data-trackable="heading-link" class="js-teaser-heading-link">Pension fund slashes value of its Thames Water stake by almost two-thirds</a></div><p class="o-teaser__standfirst"><a href="/content/966b77d6-7ea8-4d3b-a0a2-e83d07be42ed" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">USS writedown comes as the utility is seeking to raise £2.5bn of new equity</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="966b77d6-7ea8-4d3b-a0a2-e83d07be42ed"
																data-myft-ui="saved"
																action="/myft/save/966b77d6-7ea8-4d3b-a0a2-e83d07be42ed"
																data-js-action="/__myft/api/core/saved/content/966b77d6-7ea8-4d3b-a0a2-e83d07be42ed?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Pension fund slashes value of its Thames Water stake by almost two-thirds to myFT for later"
																		aria-label="Save Pension fund slashes value of its Thames Water stake by almost two-thirds to myFT for later"
																		data-alternate-label="Pension fund slashes value of its Thames Water stake by almost two-thirds is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="966b77d6-7ea8-4d3b-a0a2-e83d07be42ed" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/966b77d6-7ea8-4d3b-a0a2-e83d07be42ed" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2471%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fc8fec89d-0d71-458b-a88c-469425acd553.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Thames Water worker in a flooded street"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-28T05:00:11.079Z">Thursday, 28 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6"><div class="o-teaser__content"><div class="o-teaser__meta"><span class="o-teaser__tag-prefix">Markets Insight</span><a class="o-teaser__tag" data-trackable="teaser-tag" href="/stream/5c96a713-f4c8-4da3-9754-1c7fcae905b9" aria-label="Category: Arturo Cifuentes">Arturo Cifuentes</a></div><div class="o-teaser__heading"><a href="/content/7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6" data-trackable="heading-link" class="js-teaser-heading-link">Chile’s pioneering pension system now needs reform </a></div><p class="o-teaser__standfirst"><a href="/content/7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Once a blueprint for other countries, the scheme is now despised by many Chileans and its survival is in doubt</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6"
																data-myft-ui="saved"
																action="/myft/save/7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6"
																data-js-action="/__myft/api/core/saved/content/7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Chile’s pioneering pension system now needs reform  to myFT for later"
																		aria-label="Save Chile’s pioneering pension system now needs reform  to myFT for later"
																		data-alternate-label="Chile’s pioneering pension system now needs reform  is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/7f2c2d17-8b47-4ad3-bf9a-6e342e6d66c6" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2394%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fd4bcd5d6-54fe-475a-8436-251ac7ddb6e8.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Escalators at the Universidad de Chile metro station in Santiago"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-20T12:00:56.725Z">Wednesday, 20 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="59f979e0-1067-421e-bff6-e5f84fdf57f9" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="59f979e0-1067-421e-bff6-e5f84fdf57f9"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/moral-money" aria-label="Category: Moral Money">Moral Money</a></div><div class="o-teaser__heading"><a href="/content/59f979e0-1067-421e-bff6-e5f84fdf57f9" data-trackable="heading-link" class="js-teaser-heading-link">ClientEarth issues stark warning to UK pension funds over climate risk</a><span> <span class="o-labels o-labels--premium o-labels--content-premium">Premium</span><span class="o-normalise-visually-hidden"> content</span></span></div><p class="o-teaser__standfirst"><a href="/content/59f979e0-1067-421e-bff6-e5f84fdf57f9" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Non-profit group raises questions over fiduciary duty</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="59f979e0-1067-421e-bff6-e5f84fdf57f9"
																data-myft-ui="saved"
																action="/myft/save/59f979e0-1067-421e-bff6-e5f84fdf57f9"
																data-js-action="/__myft/api/core/saved/content/59f979e0-1067-421e-bff6-e5f84fdf57f9?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save ClientEarth issues stark warning to UK pension funds over climate risk to myFT for later"
																		aria-label="Save ClientEarth issues stark warning to UK pension funds over climate risk to myFT for later"
																		data-alternate-label="ClientEarth issues stark warning to UK pension funds over climate risk is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="59f979e0-1067-421e-bff6-e5f84fdf57f9" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/59f979e0-1067-421e-bff6-e5f84fdf57f9" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2391%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F2276ecf1-387c-47ec-a5b0-59db7f758767.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="An offshore gas platform"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
										</div>
										<div data-o-grid-colspan="12 L9">
													<div class="stream-item" data-stream-item>
																<div
																	class="o-teaser o-teaser--native-ad o-teaser--small o-teaser--stream-card"
																	data-o-ads-name="PartnerContent--horizontal"
																	data-o-ads-targeting="pos=native;format=horizontal"
																	data-o-ads-formats="PartnerContent"
																	data-o-ads-component="slot"
																></div>
													</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-15T12:46:07.067Z">Friday, 15 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="c26c9562-0c11-4565-b700-ca06c52f8f33" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="c26c9562-0c11-4565-b700-ca06c52f8f33"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/cyber-security" aria-label="Category: Cyber Security">Cyber Security</a></div><div class="o-teaser__heading"><a href="/content/c26c9562-0c11-4565-b700-ca06c52f8f33" data-trackable="heading-link" class="js-teaser-heading-link">MPs warn over new powers to inspect pensioners’ bank accounts</a></div><p class="o-teaser__standfirst"><a href="/content/c26c9562-0c11-4565-b700-ca06c52f8f33" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Government says measures would be used to target fraud</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="c26c9562-0c11-4565-b700-ca06c52f8f33"
																data-myft-ui="saved"
																action="/myft/save/c26c9562-0c11-4565-b700-ca06c52f8f33"
																data-js-action="/__myft/api/core/saved/content/c26c9562-0c11-4565-b700-ca06c52f8f33?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save MPs warn over new powers to inspect pensioners’ bank accounts to myFT for later"
																		aria-label="Save MPs warn over new powers to inspect pensioners’ bank accounts to myFT for later"
																		data-alternate-label="MPs warn over new powers to inspect pensioners’ bank accounts is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="c26c9562-0c11-4565-b700-ca06c52f8f33" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/c26c9562-0c11-4565-b700-ca06c52f8f33" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2445%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa99ca9f9-3e54-4036-8a3d-59016910562e.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Work and pensions secretary Mel Stride"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-15T05:00:25.097Z">Friday, 15 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="acf815cb-cb6a-4c04-b291-e92ac2718811" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="acf815cb-cb6a-4c04-b291-e92ac2718811"><div class="o-teaser__content"><div class="o-teaser__meta"><span class="o-teaser__tag-prefix">Skin in the Game</span><a class="o-teaser__tag" data-trackable="teaser-tag" href="/stuart-kirk" aria-label="Category: Stuart Kirk">Stuart Kirk</a></div><div class="o-teaser__heading"><a href="/content/acf815cb-cb6a-4c04-b291-e92ac2718811" data-trackable="heading-link" class="js-teaser-heading-link">What’s a good portfolio for an 80-year-old?</a></div><p class="o-teaser__standfirst"><a href="/content/acf815cb-cb6a-4c04-b291-e92ac2718811" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">The benefits of long-term investing are not for everyone</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="acf815cb-cb6a-4c04-b291-e92ac2718811"
																data-myft-ui="saved"
																action="/myft/save/acf815cb-cb6a-4c04-b291-e92ac2718811"
																data-js-action="/__myft/api/core/saved/content/acf815cb-cb6a-4c04-b291-e92ac2718811?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save What’s a good portfolio for an 80-year-old? to myFT for later"
																		aria-label="Save What’s a good portfolio for an 80-year-old? to myFT for later"
																		data-alternate-label="What’s a good portfolio for an 80-year-old? is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="acf815cb-cb6a-4c04-b291-e92ac2718811" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/acf815cb-cb6a-4c04-b291-e92ac2718811" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2375%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fa98a55d2-3a38-4c95-affe-39a37a7d139b.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-stream-item>
													<div
														class="o-ads o-ads advert advert--instream"
														data-o-ads-targeting="pos=mid;"
														data-o-ads-center="true"
														data-o-ads-label="false"
														data-o-ads-formats-small="MediumRectangle,Responsive,OneByOne"
														data-o-ads-formats-medium="MediumRectangle,Responsive,OneByOne"
														data-o-ads-formats-large="false"
														data-o-ads-formats-extra="false"
														aria-hidden="true">
													</div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-15T05:00:24.934Z">Friday, 15 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1"><div class="o-teaser__content"><div class="o-teaser__meta"><span class="o-teaser__tag-prefix">Serious Money</span><a class="o-teaser__tag" data-trackable="teaser-tag" href="/claer-barrett" aria-label="Category: Claer Barrett">Claer Barrett</a></div><div class="o-teaser__heading"><a href="/content/c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1" data-trackable="heading-link" class="js-teaser-heading-link">The money question 30-somethings are most likely to ask</a></div><p class="o-teaser__standfirst"><a href="/content/c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Regulatory shift means more meaningful answers will soon be possible</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1"
																data-myft-ui="saved"
																action="/myft/save/c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1"
																data-js-action="/__myft/api/core/saved/content/c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save The money question 30-somethings are most likely to ask to myFT for later"
																		aria-label="Save The money question 30-somethings are most likely to ask to myFT for later"
																		data-alternate-label="The money question 30-somethings are most likely to ask is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/c27ce8f3-6a8e-46ad-b5e7-eec97a99e7c1" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2500%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Faad84b44-f1f5-4ec7-b37d-30f294db93a3.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-14T16:09:48.398Z">Thursday, 14 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="086a59de-ca7e-48fe-b374-cd419a864bac" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="086a59de-ca7e-48fe-b374-cd419a864bac"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/workplace-pensions" aria-label="Category: Workplace pensions">Workplace pensions</a></div><div class="o-teaser__heading"><a href="/content/086a59de-ca7e-48fe-b374-cd419a864bac" data-trackable="heading-link" class="js-teaser-heading-link">Thousands of UK pension schemes to benefit from levy cut</a></div><p class="o-teaser__standfirst"><a href="/content/086a59de-ca7e-48fe-b374-cd419a864bac" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">The PPF reported £32.5bn in assets in March this year</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="086a59de-ca7e-48fe-b374-cd419a864bac"
																data-myft-ui="saved"
																action="/myft/save/086a59de-ca7e-48fe-b374-cd419a864bac"
																data-js-action="/__myft/api/core/saved/content/086a59de-ca7e-48fe-b374-cd419a864bac?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Thousands of UK pension schemes to benefit from levy cut to myFT for later"
																		aria-label="Save Thousands of UK pension schemes to benefit from levy cut to myFT for later"
																		data-alternate-label="Thousands of UK pension schemes to benefit from levy cut is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="086a59de-ca7e-48fe-b374-cd419a864bac" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/086a59de-ca7e-48fe-b374-cd419a864bac" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2882%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3d3c2a2e-9e5e-4234-b2b7-f08f76e46211.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Crowd of motion blurred business people rushing in sunset light"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-08T06:00:23.393Z">Friday, 8 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="00d72847-56c9-4655-a1e0-ecb0fab553a3" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="00d72847-56c9-4655-a1e0-ecb0fab553a3"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/final-salary-schemes" aria-label="Category: Final salary schemes">Final salary schemes</a></div><div class="o-teaser__heading"><a href="/content/00d72847-56c9-4655-a1e0-ecb0fab553a3" data-trackable="heading-link" class="js-teaser-heading-link">Game over for DB pensions?</a></div><p class="o-teaser__standfirst"><a href="/content/00d72847-56c9-4655-a1e0-ecb0fab553a3" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Insert coin to discontinue</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="00d72847-56c9-4655-a1e0-ecb0fab553a3"
																data-myft-ui="saved"
																action="/myft/save/00d72847-56c9-4655-a1e0-ecb0fab553a3"
																data-js-action="/__myft/api/core/saved/content/00d72847-56c9-4655-a1e0-ecb0fab553a3?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Game over for DB pensions? to myFT for later"
																		aria-label="Save Game over for DB pensions? to myFT for later"
																		data-alternate-label="Game over for DB pensions? is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="00d72847-56c9-4655-a1e0-ecb0fab553a3" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/00d72847-56c9-4655-a1e0-ecb0fab553a3" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2500%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F4cba8617-07ee-449b-8b59-b0d41c57cc0a.png?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-03T05:00:33.934Z">Sunday, 3 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="9f707cac-0042-47b1-a4d6-c15504e08c68" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="9f707cac-0042-47b1-a4d6-c15504e08c68"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/stream/bbe24c37-bd88-430d-a878-f93e3ac5310b" aria-label="Category: Canada Pension Plan Investment Board">Canada Pension Plan Investment Board</a></div><div class="o-teaser__heading"><a href="/content/9f707cac-0042-47b1-a4d6-c15504e08c68" data-trackable="heading-link" class="js-teaser-heading-link">Canadian pension giant warns against UK plan to push schemes into private equity</a></div><p class="o-teaser__standfirst"><a href="/content/9f707cac-0042-47b1-a4d6-c15504e08c68" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Head of CPPIB says key to success of fund’s model is ‘freedom to invest wherever we see the best chance of returns’</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="9f707cac-0042-47b1-a4d6-c15504e08c68"
																data-myft-ui="saved"
																action="/myft/save/9f707cac-0042-47b1-a4d6-c15504e08c68"
																data-js-action="/__myft/api/core/saved/content/9f707cac-0042-47b1-a4d6-c15504e08c68?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Canadian pension giant warns against UK plan to push schemes into private equity to myFT for later"
																		aria-label="Save Canadian pension giant warns against UK plan to push schemes into private equity to myFT for later"
																		data-alternate-label="Canadian pension giant warns against UK plan to push schemes into private equity is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="9f707cac-0042-47b1-a4d6-c15504e08c68" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/9f707cac-0042-47b1-a4d6-c15504e08c68" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2651%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8c835eca-5e89-48ec-b1eb-30d3457ff4c0.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="John Graham, president and chief executive of the"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-12-01T05:00:17.268Z">Friday, 1 December, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="45cae205-0f70-42db-8935-9cbc58010da8" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="45cae205-0f70-42db-8935-9cbc58010da8"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/house-home/uk-property" aria-label="Category: UK property">UK property</a></div><div class="o-teaser__heading"><a href="/content/45cae205-0f70-42db-8935-9cbc58010da8" data-trackable="heading-link" class="js-teaser-heading-link">Divorce: do the numbers still add up? </a></div><p class="o-teaser__standfirst"><a href="/content/45cae205-0f70-42db-8935-9cbc58010da8" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">High interest rates, battered asset valuations and job uncertainty add to trauma for splitting couples</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="45cae205-0f70-42db-8935-9cbc58010da8"
																data-myft-ui="saved"
																action="/myft/save/45cae205-0f70-42db-8935-9cbc58010da8"
																data-js-action="/__myft/api/core/saved/content/45cae205-0f70-42db-8935-9cbc58010da8?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Divorce: do the numbers still add up?  to myFT for later"
																		aria-label="Save Divorce: do the numbers still add up?  to myFT for later"
																		data-alternate-label="Divorce: do the numbers still add up?  is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="45cae205-0f70-42db-8935-9cbc58010da8" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/45cae205-0f70-42db-8935-9cbc58010da8" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2500%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fdb6a6e86-758b-47bf-9fc1-bc5b2cbf4cdd.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-stream-item>
													<div
														class="o-ads o-ads advert advert--instream"
														data-o-ads-targeting="pos=mid1;"
														data-o-ads-center="true"
														data-o-ads-label="false"
														data-o-ads-formats-small="MediumRectangle,Responsive,OneByOne"
														data-o-ads-formats-medium="MediumRectangle,Responsive,OneByOne"
														data-o-ads-formats-large="false"
														data-o-ads-formats-extra="false"
														aria-hidden="true">
													</div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-28T05:00:19.527Z">Tuesday, 28 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="bc46155a-bea9-4ec8-ad56-31df2d1a1584" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="bc46155a-bea9-4ec8-ad56-31df2d1a1584"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/toby-nangle" aria-label="Category: Toby Nangle">Toby Nangle</a></div><div class="o-teaser__heading"><a href="/content/bc46155a-bea9-4ec8-ad56-31df2d1a1584" data-trackable="heading-link" class="js-teaser-heading-link">Britain must look abroad to reform its pensions</a></div><p class="o-teaser__standfirst"><a href="/content/bc46155a-bea9-4ec8-ad56-31df2d1a1584" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Canada, Australia and Denmark are success stories to learn from </a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="bc46155a-bea9-4ec8-ad56-31df2d1a1584"
																data-myft-ui="saved"
																action="/myft/save/bc46155a-bea9-4ec8-ad56-31df2d1a1584"
																data-js-action="/__myft/api/core/saved/content/bc46155a-bea9-4ec8-ad56-31df2d1a1584?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Britain must look abroad to reform its pensions to myFT for later"
																		aria-label="Save Britain must look abroad to reform its pensions to myFT for later"
																		data-alternate-label="Britain must look abroad to reform its pensions is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="bc46155a-bea9-4ec8-ad56-31df2d1a1584" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/bc46155a-bea9-4ec8-ad56-31df2d1a1584" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2254%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F014aa069-a59b-449f-896e-ed837ca073cc.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-24T14:02:29.784Z">Friday, 24 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="90823bdb-d409-40d9-abc8-efb3f50e3098" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="90823bdb-d409-40d9-abc8-efb3f50e3098"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/personal-finance" aria-label="Category: Personal Finance">Personal Finance</a></div><div class="o-teaser__heading"><a href="/content/90823bdb-d409-40d9-abc8-efb3f50e3098" data-trackable="heading-link" class="js-teaser-heading-link">The Autumn Statement and your money </a></div><p class="o-teaser__standfirst"><a href="/content/90823bdb-d409-40d9-abc8-efb3f50e3098" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Analysis of the chancellor’s cuts to national insurance and changes to Isas and pensions</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="90823bdb-d409-40d9-abc8-efb3f50e3098"
																data-myft-ui="saved"
																action="/myft/save/90823bdb-d409-40d9-abc8-efb3f50e3098"
																data-js-action="/__myft/api/core/saved/content/90823bdb-d409-40d9-abc8-efb3f50e3098?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save The Autumn Statement and your money  to myFT for later"
																		aria-label="Save The Autumn Statement and your money  to myFT for later"
																		data-alternate-label="The Autumn Statement and your money  is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="90823bdb-d409-40d9-abc8-efb3f50e3098" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/90823bdb-d409-40d9-abc8-efb3f50e3098" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2500%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F53d0e14d-257c-4266-9f2a-35f3308c0a03.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-24T08:25:19.538Z">Friday, 24 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="b348fe64-c9de-4a88-9c03-a6b1af48e382" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="b348fe64-c9de-4a88-9c03-a6b1af48e382"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/stream/e5210578-da7c-4654-a1ec-57f7c8082697" aria-label="Category: Boots UK Ltd">Boots UK Ltd</a></div><div class="o-teaser__heading"><a href="/content/b348fe64-c9de-4a88-9c03-a6b1af48e382" data-trackable="heading-link" class="js-teaser-heading-link">Boots offloads £4.8bn pension scheme to Legal &amp; General</a></div><p class="o-teaser__standfirst"><a href="/content/b348fe64-c9de-4a88-9c03-a6b1af48e382" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Deal could pave way for sale of pharmacy chain and comes on same day as £4bn Co-op agreement</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="b348fe64-c9de-4a88-9c03-a6b1af48e382"
																data-myft-ui="saved"
																action="/myft/save/b348fe64-c9de-4a88-9c03-a6b1af48e382"
																data-js-action="/__myft/api/core/saved/content/b348fe64-c9de-4a88-9c03-a6b1af48e382?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Boots offloads £4.8bn pension scheme to Legal &amp; General to myFT for later"
																		aria-label="Save Boots offloads £4.8bn pension scheme to Legal &amp; General to myFT for later"
																		data-alternate-label="Boots offloads £4.8bn pension scheme to Legal &amp; General is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="b348fe64-c9de-4a88-9c03-a6b1af48e382" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/b348fe64-c9de-4a88-9c03-a6b1af48e382" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2254%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F42f92a91-9827-4df1-b63c-42fc0c2c2ca6.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="A Boots store in London"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-24T05:00:06.296Z">Friday, 24 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="e5f8823e-549c-4dbd-82e3-1d00e753f492" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="e5f8823e-549c-4dbd-82e3-1d00e753f492"><div class="o-teaser__content"><div class="o-teaser__meta"><span class="o-teaser__tag-prefix">Serious Money</span><a class="o-teaser__tag" data-trackable="teaser-tag" href="/claer-barrett" aria-label="Category: Claer Barrett">Claer Barrett</a></div><div class="o-teaser__heading"><a href="/content/e5f8823e-549c-4dbd-82e3-1d00e753f492" data-trackable="heading-link" class="js-teaser-heading-link">Tell Sid all you like — but he might not buy NatWest</a></div><p class="o-teaser__standfirst"><a href="/content/e5f8823e-549c-4dbd-82e3-1d00e753f492" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Next generation of investors can buy into the sentiment even if they don’t want to own shares in UK banks</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="e5f8823e-549c-4dbd-82e3-1d00e753f492"
																data-myft-ui="saved"
																action="/myft/save/e5f8823e-549c-4dbd-82e3-1d00e753f492"
																data-js-action="/__myft/api/core/saved/content/e5f8823e-549c-4dbd-82e3-1d00e753f492?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Tell Sid all you like — but he might not buy NatWest to myFT for later"
																		aria-label="Save Tell Sid all you like — but he might not buy NatWest to myFT for later"
																		data-alternate-label="Tell Sid all you like — but he might not buy NatWest is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="e5f8823e-549c-4dbd-82e3-1d00e753f492" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/e5f8823e-549c-4dbd-82e3-1d00e753f492" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2375%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ff64ec3de-7706-46d5-aa88-6b5b88f961f2.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="A “Tell Sid” magazine ad from the 1980s"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-22T17:59:22.203Z">Wednesday, 22 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="9f2a9260-eb57-41af-8fc3-f128f5c61692" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="9f2a9260-eb57-41af-8fc3-f128f5c61692"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/claer-barrett" aria-label="Category: Claer Barrett">Claer Barrett</a></div><div class="o-teaser__heading"><a href="/content/9f2a9260-eb57-41af-8fc3-f128f5c61692" data-trackable="heading-link" class="js-teaser-heading-link">Would Aussie rules boost UK pensions?</a></div><p class="o-teaser__standfirst"><a href="/content/9f2a9260-eb57-41af-8fc3-f128f5c61692" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">A ‘pot for life’ and other Autumn Statement windfalls will benefit wealthier investors </a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="9f2a9260-eb57-41af-8fc3-f128f5c61692"
																data-myft-ui="saved"
																action="/myft/save/9f2a9260-eb57-41af-8fc3-f128f5c61692"
																data-js-action="/__myft/api/core/saved/content/9f2a9260-eb57-41af-8fc3-f128f5c61692?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Would Aussie rules boost UK pensions? to myFT for later"
																		aria-label="Save Would Aussie rules boost UK pensions? to myFT for later"
																		data-alternate-label="Would Aussie rules boost UK pensions? is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="9f2a9260-eb57-41af-8fc3-f128f5c61692" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/9f2a9260-eb57-41af-8fc3-f128f5c61692" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2445%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F57a22dd2-5438-40f4-8137-75c2f6ae8202.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="View from behind of two pensioners sitting on a bench in the sunshine in Australia, looking out sea"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-22T17:48:02.546Z">Wednesday, 22 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="1931de4e-d8d5-4eb4-ad1c-7d204b26d649" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="1931de4e-d8d5-4eb4-ad1c-7d204b26d649"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/autumn-statement" aria-label="Category: Autumn Statement">Autumn Statement</a></div><div class="o-teaser__heading"><a href="/content/1931de4e-d8d5-4eb4-ad1c-7d204b26d649" data-trackable="heading-link" class="js-teaser-heading-link">Autumn Statement 2023: What it means for your money</a></div><p class="o-teaser__standfirst"><a href="/content/1931de4e-d8d5-4eb4-ad1c-7d204b26d649" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Announcements made on national insurance, pensions and Isa reform</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="1931de4e-d8d5-4eb4-ad1c-7d204b26d649"
																data-myft-ui="saved"
																action="/myft/save/1931de4e-d8d5-4eb4-ad1c-7d204b26d649"
																data-js-action="/__myft/api/core/saved/content/1931de4e-d8d5-4eb4-ad1c-7d204b26d649?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Autumn Statement 2023: What it means for your money to myFT for later"
																		aria-label="Save Autumn Statement 2023: What it means for your money to myFT for later"
																		data-alternate-label="Autumn Statement 2023: What it means for your money is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="1931de4e-d8d5-4eb4-ad1c-7d204b26d649" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/1931de4e-d8d5-4eb4-ad1c-7d204b26d649" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2445%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F23c77db5-464f-459a-aa8d-72163a6efaf3.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Chancellor Jeremy Hunt leaves Downing Street to make his autumn statement"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-22T17:33:45.536Z">Wednesday, 22 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="6ecb99d4-0503-4352-a385-72e9fe8335d4" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image js-teaser" data-id="6ecb99d4-0503-4352-a385-72e9fe8335d4"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/autumn-statement" aria-label="Category: Autumn Statement">Autumn Statement</a></div><div class="o-teaser__heading"><a href="/content/6ecb99d4-0503-4352-a385-72e9fe8335d4" data-trackable="heading-link" class="js-teaser-heading-link">Town hall pension schemes to be asked to double riskier asset allocations</a></div><p class="o-teaser__standfirst"><a href="/content/6ecb99d4-0503-4352-a385-72e9fe8335d4" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Proposal is one of several measures aimed at unlocking billions of pounds to stimulate UK economic growth</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="6ecb99d4-0503-4352-a385-72e9fe8335d4"
																data-myft-ui="saved"
																action="/myft/save/6ecb99d4-0503-4352-a385-72e9fe8335d4"
																data-js-action="/__myft/api/core/saved/content/6ecb99d4-0503-4352-a385-72e9fe8335d4?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Town hall pension schemes to be asked to double riskier asset allocations to myFT for later"
																		aria-label="Save Town hall pension schemes to be asked to double riskier asset allocations to myFT for later"
																		data-alternate-label="Town hall pension schemes to be asked to double riskier asset allocations is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="6ecb99d4-0503-4352-a385-72e9fe8335d4" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/6ecb99d4-0503-4352-a385-72e9fe8335d4" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2691%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F0e76963a-4c85-46e6-b0f0-a7222f257743.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Commuters walking on London Bridge"/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-22T05:00:00.000Z">Wednesday, 22 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="a660e6c1-9150-4eef-907f-e6c6935bb93d" data-stream-item>
													<div class="o-teaser o-teaser--audio o-teaser--small o-teaser--has-image js-teaser" data-id="a660e6c1-9150-4eef-907f-e6c6935bb93d"><div class="o-teaser__content"><div class="o-teaser__meta"><a class="o-teaser__tag" data-trackable="teaser-tag" href="/behind-the-money" aria-label="Category: Behind the Money podcast">Behind the Money podcast</a><span class="o-teaser__tag-suffix">20 min listen</span></div><div class="o-teaser__heading"><a href="/content/a660e6c1-9150-4eef-907f-e6c6935bb93d" data-trackable="heading-link" class="js-teaser-heading-link" aria-label="Listen to podcast Best Of: Why companies don&#39;t want to list in the UK anymore">Best Of: Why companies don&#39;t want to list in the UK anymore</a></div><p class="o-teaser__standfirst"><a href="/content/a660e6c1-9150-4eef-907f-e6c6935bb93d" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">How pension funds’ investments have impacted the London Stock Exchange</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="a660e6c1-9150-4eef-907f-e6c6935bb93d"
																data-myft-ui="saved"
																action="/myft/save/a660e6c1-9150-4eef-907f-e6c6935bb93d"
																data-js-action="/__myft/api/core/saved/content/a660e6c1-9150-4eef-907f-e6c6935bb93d?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save Best Of: Why companies don&#x27;t want to list in the UK anymore to myFT for later"
																		aria-label="Save Best Of: Why companies don&#x27;t want to list in the UK anymore to myFT for later"
																		data-alternate-label="Best Of: Why companies don&#x27;t want to list in the UK anymore is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="a660e6c1-9150-4eef-907f-e6c6935bb93d" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/a660e6c1-9150-4eef-907f-e6c6935bb93d" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2500%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fuploaded-files%2FBehindtheMoneyMaster-8e343067-c3e7-4f71-a492-383041b51764.jpeg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt=""/></div></a></div></div>
												</div>
										</div>
									</li>
									<li class="o-teaser-collection__item o-grid-row">
										<div data-o-grid-colspan="12 L3">
												<div class="stream-card__date">
													<time data-o-component="o-date" class="o-date" data-o-date-format="date-only" datetime="2023-11-21T15:02:27.587Z">Tuesday, 21 November, 2023</time>
												</div>
										</div>
										<div data-o-grid-colspan="12 L9">
												<div class="stream-item" data-id="d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9" data-stream-item>
													<div class="o-teaser o-teaser--article o-teaser--small o-teaser--has-image o-teaser--opinion js-teaser" data-id="d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9"><div class="o-teaser__content"><div class="o-teaser__meta"><span class="o-teaser__tag-prefix">Lex</span><a class="o-teaser__tag" data-trackable="teaser-tag" href="/workplace-pensions" aria-label="Category: Workplace pensions">Workplace pensions</a></div><div class="o-teaser__heading"><a href="/content/d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9" data-trackable="heading-link" class="js-teaser-heading-link">UK pensions: right to choose could be a lose-lose for the City</a><span> <span class="o-labels o-labels--premium o-labels--content-premium">Premium</span><span class="o-normalise-visually-hidden"> content</span></span></div><p class="o-teaser__standfirst"><a href="/content/d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9" data-trackable="standfirst-link" tabindex="-1" class="js-teaser-standfirst-link">Chancellor’s ‘pot for life’ plan has consumer appeal but providers are wary</a></p><div class="o-teaser__action"><span>						<form class="n-myft-ui n-myft-ui--save" method="GET"
																data-content-id="d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9"
																data-myft-ui="saved"
																action="/myft/save/d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9"
																data-js-action="/__myft/api/core/saved/content/d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9?method=put"
																data-myft-ui-save-config="">
																<input
																	data-myft-csrf-token
																	value=""
																	type="hidden"
																	name="token">
																<div
																	class="n-myft-ui__announcement o-normalise-visually-hidden"
																	aria-live="assertive"
																	data-pressed-text="Article saved in My FT."
																	data-unpressed-text="Removed article from My FT."
																></div>
																<button
																	type="submit"
																	class="n-myft-ui__save-button-with-icon"
																	data-trackable="save-for-later"
																		title="Save UK pensions: right to choose could be a lose-lose for the City to myFT for later"
																		aria-label="Save UK pensions: right to choose could be a lose-lose for the City to myFT for later"
																		data-alternate-label="UK pensions: right to choose could be a lose-lose for the City is Saved to myFT"
																		aria-pressed="false"
																			data-text-variant="save-button-with-icon-copy"
																			data-alternate-text="Saved&nbsp;"
																	data-content-id="d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9" 
																	>
																			<span class="save-button-with-icon-copy" data-variant-label>Save</span>
																	</button>
																</form>
									</span></div></div><div class="o-teaser__image-container js-teaser-image-container"><a href="/content/d5f0d37e-0b58-43ad-b3d8-1846f5c94ad9" data-trackable="image-link" tabindex="-1" aria-hidden="true"><div class="o-teaser__image-placeholder" style="padding-bottom:56.2691%;"><img class="o-teaser__image o-lazy-load" data-src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F68b96b2f-1c08-4976-9895-f2ad0a297666.jpg?source=next&amp;fit=scale-down&amp;dpr=2&amp;width=240" alt="Jeremy Hunt"/></div></a></div></div>
												</div>
										</div>
									</li>
							</ul>
						</div>
					<div
						data-stream-additions
						aria-live="polite"
						aria-relevant="additions"
						class="stream__a11y o-normalise-visually-hidden">
					</div>
						<div data-pagination role="navigation" aria-label="Pagination" class="stream__pagination o-buttons-pagination">
							<a
								data-pagination-previous
								data-trackable="previous-page"
								disabled
								class="o-buttons o-buttons--secondary o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only">
								<span class="o-buttons-icon__label">Previous page</span>
							</a>
							<span class="stream__pagination-label">
								You are on page <strong data-pagination-page>1</strong>
							</span>
							<a
								data-pagination-next
								data-trackable="next-page"
										href="?page&#x3D;2"
								class="o-buttons o-buttons--secondary o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only">
								<span class="o-buttons-icon__label">Next page</span>
							</a>
						</div>
				</div>
			
				<div
					class="stream__right-hand "
					data-o-grid-colspan="12 L4 XL3 XLoffset1"
					
				>
					<div class="o-grid-row">
			
			
							<div
								class="o-ads advert--sidebar advert--sidebar-mid "
								data-o-ads-name="mid-non-responsive-large"
								data-o-ads-targeting="pos=mid;"
								data-o-ads-center="true"
								data-o-ads-label="false"
								data-o-ads-formats-small="false"
								data-o-ads-formats-medium="false"
								data-o-ads-formats-large="MediumRectangle,HalfPage,OneByOne,Responsive"
								data-o-ads-formats-extra="MediumRectangle,HalfPage,OneByOne,Responsive"
								aria-hidden="true">
							</div>
			
								<aside data-o-grid-colspan="12" class="aside--community" data-trackable="aside-section">
									<div class="o-teaser-community__header">
										<div>
											<h2 class="o-teaser-community__heading">
												<a data-trackable="aside-section-title" href="https://events.ft.com/events-list">Join us at an FT Live event</a>
											</h2>
										</div>
										<div class="aside--community__subsection-header">
											<p class="aside--community__subsection-strapline">Discover unmissable flagship events and
												members only communities to expand your thinking and elevate your career</p>
										</div>
									</div>
									<div class="o-teaser-community__content">
											<div class="event-teaser" data-trackable="event-teaser" data-trackable-context-content-id="911de7cf-6e96-4810-aa69-5e0f4e011e87" data-o-tracking-view="true"><div class="event-teaser__content-container"><div class="event-teaser__details"><a class="event-teaser__brand" href="https://moralmoneyeurope.live.ft.com/?segmentId=670a71df-8084-ecde-e790-63bb7341b637" data-trackable="event-teaser-brand-link">FT Live</a><div class="event-teaser__title-heading" role="heading" aria-level="4"><a class="event-teaser__title" data-trackable="event-teaser-title" href="https://moralmoneyeurope.live.ft.com/?segmentId=670a71df-8084-ecde-e790-63bb7341b637" title="Moral Money Summit Europe">Moral Money Summit Europe</a></div><span class="event-teaser__standfirst">Unlocking opportunities for a greener and fairer world</span></div><div class="event-teaser__footer"><span class="event-teaser__timestamp event-teaser__timestamp--start-date"><time datetime="2024-05-22T08:30:00.000Z">Wednesday, 22 May</time></span><span class="event-teaser__location">The Biltmore Mayfair, LXR Hotels &amp; Resorts, Grosvenor Square, London, UK</span></div></div></div>
											<div class="event-teaser" data-trackable="event-teaser" data-trackable-context-content-id="56fb56a3-521d-4112-9ae6-fa73ad051b93" data-o-tracking-view="true"><div class="event-teaser__content-container"><div class="event-teaser__details"><a class="event-teaser__brand" href="https://moralmoneyamericas.live.ft.com/?segmentId=670a71df-8084-ecde-e790-63bb7341b637" data-trackable="event-teaser-brand-link">FT Live</a><div class="event-teaser__title-heading" role="heading" aria-level="4"><a class="event-teaser__title" data-trackable="event-teaser-title" href="https://moralmoneyamericas.live.ft.com/?segmentId=670a71df-8084-ecde-e790-63bb7341b637" title="Moral Money Summit Americas">Moral Money Summit Americas</a></div><span class="event-teaser__standfirst">Unlocking opportunities for a greener and fairer world</span></div><div class="event-teaser__footer"><span class="event-teaser__timestamp event-teaser__timestamp--start-date"><time datetime="2024-10-15T12:30:00.000Z">Tuesday, 15 October</time></span><span class="event-teaser__location">New York, NY, USA</span></div></div></div>
									</div>
									<div class="o-teaser-community__button-wrapper">
										<a class="aside--community__community-button" data-trackable="aside-section--button" href="https://events.ft.com/events-list">
											Explore all events
										</a>
									</div>
								</aside>
			
							<div
								class="o-ads advert--sidebar advert--sidebar-mid1 "
								data-o-ads-name="mid1-non-responsive-large"
								data-o-ads-targeting="pos=mid1"
								data-o-ads-center="true"
								data-o-ads-label="false"
								data-o-ads-formats-small="false"
								data-o-ads-formats-medium="false"
								data-o-ads-formats-large="MediumRectangle,OneByOne,HalfPage,Responsive"
								data-o-ads-formats-extra="MediumRectangle,OneByOne,HalfPage,Responsive"
								aria-hidden="true">
							</div>
					</div>
				</div>
			</div>

	</div>
</div></div></div><div class="n-layout__row n-layout__row--footer"><div class="n-layout__footer-before"><div class="n-feedback__container n-feedback--hidden"></div></div><footer id="site-footer" class="o-footer o-footer--theme-dark" data-o-component="o-footer"><div class="o-footer__container"><div class="o-footer__row"><h2 class="o-normalise-visually-hidden">Useful links</h2><nav class="o-footer__matrix" role="navigation" aria-label="Useful links"><div class="o-footer__matrix-group o-footer__matrix-group--1"><h3 class="o-footer__matrix-title" aria-controls="o-footer-section-0">Support</h3><div class="o-footer__matrix-content" id="o-footer-section-0"><div class="o-footer__matrix-column"><a class="o-footer__matrix-link" href="/tour" data-trackable="View Site Tips"><span class="o-footer__matrix-link__copy">View Site Tips</span></a><a class="o-footer__matrix-link" href="https://help.ft.com" data-trackable="Help Centre"><span class="o-footer__matrix-link__copy">Help Centre</span></a><a class="o-footer__matrix-link" href="https://aboutus.ft.com/contact-us" data-trackable="Contact Us"><span class="o-footer__matrix-link__copy">Contact Us</span></a><a class="o-footer__matrix-link" href="https://www.ft.com/aboutus" data-trackable="About Us"><span class="o-footer__matrix-link__copy">About Us</span></a><a class="o-footer__matrix-link" href="/accessibility" data-trackable="Accessibility"><span class="o-footer__matrix-link__copy">Accessibility</span></a><a class="o-footer__matrix-link" href="/tour/myft" data-trackable="myFT Tour"><span class="o-footer__matrix-link__copy">myFT Tour</span></a><a class="o-footer__matrix-link" href="https://aboutus.ft.com/en-gb/careers/" data-trackable="Careers"><span class="o-footer__matrix-link__copy">Careers</span></a></div></div></div><div class="o-footer__matrix-group o-footer__matrix-group--1"><h3 class="o-footer__matrix-title" aria-controls="o-footer-section-1">Legal &amp; Privacy</h3><div class="o-footer__matrix-content" id="o-footer-section-1"><div class="o-footer__matrix-column"><a class="o-footer__matrix-link" href="https://help.ft.com/help/legal-privacy/terms-conditions/" data-trackable="Terms &amp; Conditions"><span class="o-footer__matrix-link__copy">Terms &amp; Conditions</span></a><a class="o-footer__matrix-link" href="https://help.ft.com/help/legal-privacy/privacy/" data-trackable="Privacy Policy"><span class="o-footer__matrix-link__copy">Privacy Policy</span></a><a class="o-footer__matrix-link" href="https://help.ft.com/help/legal-privacy/cookies/" data-trackable="Cookie Policy"><span class="o-footer__matrix-link__copy">Cookie Policy</span></a><a class="o-footer__matrix-link" href="https://www.ft.com/preferences/manage-cookies" data-trackable="Manage Cookies"><span class="o-footer__matrix-link__copy">Manage Cookies</span></a><a class="o-footer__matrix-link" href="https://help.ft.com/help/legal-privacy/copyright/copyright-policy/" data-trackable="Copyright"><span class="o-footer__matrix-link__copy">Copyright</span></a><a class="o-footer__matrix-link" href="https://help.ft.com/help/legal/slavery-statement/" data-trackable="Slavery Statement &amp; Policies"><span class="o-footer__matrix-link__copy">Slavery Statement &amp; Policies</span></a></div></div></div><div class="o-footer__matrix-group o-footer__matrix-group--1"><h3 class="o-footer__matrix-title" aria-controls="o-footer-section-2">Services</h3><div class="o-footer__matrix-content" id="o-footer-section-2"><div class="o-footer__matrix-column"><a class="o-footer__matrix-link" href="/securedrop" data-trackable="Share News Tips Securely" data-o-tracking-do-not-track="true"><span class="o-footer__matrix-link__copy">Share News Tips Securely</span></a><a class="o-footer__matrix-link" href="https://www.ft.com/products" data-trackable="Individual Subscriptions"><span class="o-footer__matrix-link__copy">Individual Subscriptions</span></a><a class="o-footer__matrix-link" href="https://professional.ft.com/en-gb/services/professional-subscriptions?segmentId=383c7f[…]4-b62d-cb33-4c278e6fdf61&amp;cpccampaign=B2B_link_ft.com_footer" data-trackable="Professional Subscriptions"><span class="o-footer__matrix-link__copy">Professional Subscriptions</span></a><a class="o-footer__matrix-link" href="https://professional.ft.com/en-gb/services/republishing/" data-trackable="Republishing"><span class="o-footer__matrix-link__copy">Republishing</span></a><a class="o-footer__matrix-link" href="https://www.exec-appointments.com/" data-trackable="Executive Job Search"><span class="o-footer__matrix-link__copy">Executive Job Search</span></a><a class="o-footer__matrix-link" href="https://commercial.ft.com/" data-trackable="Advertise with the FT"><span class="o-footer__matrix-link__copy">Advertise with the FT</span></a><a class="o-footer__matrix-link" href="https://twitter.com/ft" data-trackable="Follow the FT on X"><span class="o-footer__matrix-link__copy">Follow the FT on X</span></a><a class="o-footer__matrix-link" href="https://channels.ft.com/" data-trackable="FT Channels"><span class="o-footer__matrix-link__copy">FT Channels</span></a><a class="o-footer__matrix-link" href="https://enterprise.ft.com/en-gb/services/group-subscriptions/secondary-education/" data-trackable="FT Schools"><span class="o-footer__matrix-link__copy">FT Schools</span></a></div></div></div><div class="o-footer__matrix-group o-footer__matrix-group--1"><h3 class="o-footer__matrix-title" aria-controls="o-footer-section-3">Tools</h3><div class="o-footer__matrix-content" id="o-footer-section-3"><div class="o-footer__matrix-column"><a class="o-footer__matrix-link" href="https://markets.ft.com/data/portfolio/dashboard" data-trackable="Portfolio"><span class="o-footer__matrix-link__copy">Portfolio</span></a><a class="o-footer__matrix-link" href="https://www.ft.com/todaysnewspaper" data-trackable="Today’s Newspaper (FT Digital Edition)"><span class="o-footer__matrix-link__copy">Today’s Newspaper (FT Digital Edition)</span></a><a class="o-footer__matrix-link" href="https://markets.ft.com/data/alerts/" data-trackable="Alerts Hub"><span class="o-footer__matrix-link__copy">Alerts Hub</span></a><a class="o-footer__matrix-link" href="https://rankings.ft.com/" data-trackable="Business School Rankings"><span class="o-footer__matrix-link__copy">Business School Rankings</span></a><a class="o-footer__matrix-link" href="https://kat.ft.com/" data-trackable="Enterprise Tools"><span class="o-footer__matrix-link__copy">Enterprise Tools</span></a><a class="o-footer__matrix-link" href="/news-feed" data-trackable="News feed"><span class="o-footer__matrix-link__copy">News feed</span></a><a class="o-footer__matrix-link" href="/newsletters" data-trackable="Newsletters"><span class="o-footer__matrix-link__copy">Newsletters</span></a><a class="o-footer__matrix-link" href="https://markets.ft.com/data/currencies" data-trackable="Currency Converter"><span class="o-footer__matrix-link__copy">Currency Converter</span></a></div></div></div><div class="o-footer__matrix-group o-footer__matrix-group--1"><h3 class="o-footer__matrix-title" aria-controls="o-footer-section-4">Community &amp; Events</h3><div class="o-footer__matrix-content" id="o-footer-section-4"><div class="o-footer__matrix-column"><a class="o-footer__matrix-link" href="https://www.ft.com/tour/community" data-trackable="FT Community"><span class="o-footer__matrix-link__copy">FT Community</span></a><a class="o-footer__matrix-link" href="https://events.ft.com/events-list" data-trackable="FT Live Events"><span class="o-footer__matrix-link__copy">FT Live Events</span></a><a class="o-footer__matrix-link" href="https://forums.ft.com/" data-trackable="FT Forums"><span class="o-footer__matrix-link__copy">FT Forums</span></a><a class="o-footer__matrix-link" href="https://forums.ft.com/ft-board-network" data-trackable="FT Board Network"><span class="o-footer__matrix-link__copy">FT Board Network</span></a><a class="o-footer__matrix-link" href="https://bdp.ft.com/" data-trackable="Board Director Programme"><span class="o-footer__matrix-link__copy">Board Director Programme</span></a></div></div></div><div class="o-footer__matrix-group o-footer__matrix-group--1"><h3 class="o-footer__matrix-title o-footer__matrix-title--link"><a class="o-footer__matrix-link o-footer__matrix-link--more" id="o-footer-5" href="https://ft.com/more-from-ft-group"><span class="o-footer__matrix-link__copy">More from the FT Group</span></a></h3></div></nav></div><div class="o-footer__copyright"><small>Markets data delayed by at least 15 minutes. © THE FINANCIAL TIMES LTD 2024. <abbr title="Financial Times" aria-label="F T">FT</abbr> and ‘Financial Times’ are trademarks of The Financial Times Ltd.<br/>The Financial Times and its journalism are subject to a self-regulation regime under the <a href="https://aboutus.ft.com/en-gb/ft-editorial-code/" aria-label="F T Editorial Code of Practice">FT Editorial Code of Practice</a>.</small></div></div><div class="o-footer__brand"><div class="o-footer__container"><div class="o-footer__brand-logo"></div></div></div></footer><div class="n-layout__footer-after"><script data-pixel-src="https://spoor-api.ft.com/px.gif?data=%7B%22category%22%3A%22page%22%2C%22action%22%3A%22view%22%2C%22system%22%3A%7B%22source%22%3A%22non-ctm%22%7D%2C%22context%22%3A%7B%22name%22%3A%22stream-page%22%2C%22product%22%3A%22next%22%2C%22data%22%3A%7B%22source%22%3A%22%5BSOURCE%5D%22%7D%7D%7D">(function coreExperience() {
    if (/\bcore\b/.test(document.documentElement.className)) {
      var currentScript = document.scripts[document.scripts.length - 1];
      var img = new Image();
      img.alt = "";
      img.src = currentScript.getAttribute('data-pixel-src');
    }
  })();</script><noscript><img src="https://spoor-api.ft.com/px.gif?data=%7B%22category%22%3A%22page%22%2C%22action%22%3A%22view%22%2C%22system%22%3A%7B%22source%22%3A%22non-ctm%22%7D%2C%22context%22%3A%7B%22name%22%3A%22stream-page%22%2C%22product%22%3A%22next%22%2C%22data%22%3A%7B%22source%22%3A%22%5BSOURCE%5D%22%7D%7D%7D" alt=""/></noscript></div></div><div class="o-header__drawer" id="o-header-drawer" role="modal" aria-label="Drawer menu" aria-modal="true" data-o-header-drawer="true" data-o-header-drawer--no-js="true" data-trackable="drawer" data-trackable-terminate="true"><div class="o-header__drawer-inner"><div class="o-header__drawer-tools"><button type="button" class="o-header__drawer-tools-close" title="Close side navigation menu" aria-controls="o-header-drawer" data-trackable="close"><span class="o-header__visually-hidden">Close side navigation menu</span></button><a class="o-header__drawer-tools-logo" href="/" data-trackable="logo"><span class="o-header__visually-hidden">Financial Times</span></a><p class="o-header__drawer-current-edition">International Edition</p></div><div class="o-header__drawer-actions"><a class="o-header__drawer-button" role="button" href="/products?segmentId=4526c036-7527-ab37-9a29-0b0403fa0b5f" data-trackable="subscribe-button">Subscribe for full access</a></div><div class="o-header__drawer-search"><form class="o-header__drawer-search-form" action="/search" role="search" aria-label="Site search" data-n-topic-search="true" data-n-topic-search-categories="concepts,equities" data-n-topic-search-view-all="true"><label class="o-header__visually-hidden" for="o-header-drawer-search-term">Search the <abbr title="Financial Times">FT</abbr></label><input type="text" class="o-header__drawer-search-term" id="o-header-drawer-search-term" name="q" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellcheck="false" placeholder="Search the FT" data-trackable="search-term" data-n-topic-search-input="true"/><button class="o-header__drawer-search-submit" type="submit" data-trackable="search-submit"><span class="o-header__visually-hidden">Search</span></button></form></div><nav class="o-header__drawer-menu" aria-label="Edition switcher"><ul class="o-header__drawer-menu-list"><li class="o-header__drawer-menu-item" data-trackable="edition-switcher"><a class="o-header__drawer-menu-link" href="/?edition=uk" data-trackable="uk">Switch to UK Edition</a></li></ul></nav><nav class="o-header__drawer-menu o-header__drawer-menu--primary"><h2 id="top-sections" class="o-header__drawer-menu-item o-header__drawer-menu-item--heading">Top sections</h2><ul aria-labelledby="top-sections" class="o-header__drawer-menu-list"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/" data-trackable="Home">Home</a></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/world" data-trackable="World">World</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-1" data-trackable="sub-level-toggle | World">Show more World</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-1" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/israel-hamas-war" data-trackable="Israel-Hamas war">Israel-Hamas war</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/global-economy" data-trackable="Global Economy">Global Economy</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/world-uk" data-trackable="UK">UK</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/us" data-trackable="US">US</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/china" data-trackable="China">China</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/africa" data-trackable="Africa">Africa</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/asia-pacific" data-trackable="Asia Pacific">Asia Pacific</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/emerging-markets" data-trackable="Emerging Markets">Emerging Markets</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/europe" data-trackable="Europe">Europe</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/war-in-ukraine" data-trackable="War in Ukraine">War in Ukraine</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/americas" data-trackable="Americas">Americas</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/middle-east-north-africa" data-trackable="Middle East &amp; North Africa">Middle East &amp; North Africa</a></li></ul></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/us" data-trackable="US">US</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-2" data-trackable="sub-level-toggle | US">Show more US</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-2" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/us-economy" data-trackable="US Economy">US Economy</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/investing-in-america" data-trackable="Investing in America">Investing in America</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/us-companies" data-trackable="US Companies">US Companies</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/us-politics-policy" data-trackable="US Politics &amp; Policy">US Politics &amp; Policy</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/us-presidential-election-2024" data-trackable="US Presidential Election 2024">US Presidential Election 2024</a></li></ul></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/companies" data-trackable="Companies">Companies</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-3" data-trackable="sub-level-toggle | Companies">Show more Companies</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-3" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/energy" data-trackable="Energy">Energy</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/financials" data-trackable="Financials">Financials</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/health" data-trackable="Health">Health</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/industrials" data-trackable="Industrials">Industrials</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/media" data-trackable="Media">Media</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/professional-services" data-trackable="Professional Services">Professional Services</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/retail-consumer" data-trackable="Retail &amp; Consumer">Retail &amp; Consumer</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/technology-sector" data-trackable="Tech Sector">Tech Sector</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/telecoms" data-trackable="Telecoms">Telecoms</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/transport" data-trackable="Transport">Transport</a></li></ul></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/technology" data-trackable="Tech">Tech</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-4" data-trackable="sub-level-toggle | Tech">Show more Tech</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-4" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/artificial-intelligence" data-trackable="Artificial intelligence">Artificial intelligence</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/semiconductors" data-trackable="Semiconductors">Semiconductors</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/cyber-security" data-trackable="Cyber Security">Cyber Security</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/social-media" data-trackable="Social Media">Social Media</a></li></ul></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/markets" data-trackable="Markets">Markets</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-5" data-trackable="sub-level-toggle | Markets">Show more Markets</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-5" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/alphaville" data-trackable="Alphaville">Alphaville</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://markets.ft.com/data" data-trackable="Markets Data">Markets Data</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/cryptofinance" data-trackable="Cryptofinance">Cryptofinance</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/capital-markets" data-trackable="Capital Markets">Capital Markets</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/commodities" data-trackable="Commodities">Commodities</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/currencies" data-trackable="Currencies">Currencies</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/equities" data-trackable="Equities">Equities</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/ft-wealth-management" data-trackable="Wealth Management">Wealth Management</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/moral-money" data-trackable="Moral Money">Moral Money</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://etf.ft.com" data-trackable="ETF Hub">ETF Hub</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/fund-management" data-trackable="Fund Management">Fund Management</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/ft-trading-room" data-trackable="Trading">Trading</a></li></ul></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/climate-capital" data-trackable="Climate">Climate</a></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/opinion" data-trackable="Opinion">Opinion</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-7" data-trackable="sub-level-toggle | Opinion">Show more Opinion</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-7" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/columnists" data-trackable="Columnists">Columnists</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/ft-view" data-trackable="The FT View">The FT View</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/lex" data-trackable="Lex">Lex</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/obituaries" data-trackable="Obituaries">Obituaries</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/letters" data-trackable="Letters">Letters</a></li></ul></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/work-careers" data-trackable="Work &amp; Careers">Work &amp; Careers</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-8" data-trackable="sub-level-toggle | Work &amp; Careers">Show more Work &amp; Careers</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-8" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="https://rankings.ft.com/" data-trackable="Business School Rankings">Business School Rankings</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/business-education" data-trackable="Business Education">Business Education</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/entrepreneurship" data-trackable="Entrepreneurship">Entrepreneurship</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/recruitment" data-trackable="Recruitment">Recruitment</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/business-books" data-trackable="Business Books">Business Books</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/business-travel" data-trackable="Business Travel">Business Travel</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/working-it" data-trackable="Working It">Working It</a></li></ul></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/life-arts" data-trackable="Life &amp; Arts">Life &amp; Arts</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-9" data-trackable="sub-level-toggle | Life &amp; Arts">Show more Life &amp; Arts</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-9" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/arts" data-trackable="Arts">Arts</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/books" data-trackable="Books">Books</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/food-drink" data-trackable="Food &amp; Drink">Food &amp; Drink</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/magazine" data-trackable="FT Magazine">FT Magazine</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/house-home" data-trackable="House &amp; Home">House &amp; Home</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/style" data-trackable="Style">Style</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/travel" data-trackable="Travel">Travel</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/globetrotter" data-trackable="FT Globetrotter">FT Globetrotter</a></li></ul></li><li class="o-header__drawer-menu-item"><div class="o-header__drawer-menu-toggle-wrapper"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--parent" href="/personal-finance" data-trackable="Personal Finance">Personal Finance</a><button class="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-10" data-trackable="sub-level-toggle | Personal Finance">Show more Personal Finance</button></div><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-10" data-trackable="sub-level"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/mortgages" data-trackable="Property &amp; Mortgages">Property &amp; Mortgages</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/investments" data-trackable="Investments">Investments</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--selected o-header__drawer-menu-link--child" href="/pensions" data-trackable="Pensions" aria-label="Pensions, current page" aria-current="page">Pensions</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/tax" data-trackable="Tax">Tax</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/banking-savings" data-trackable="Banking &amp; Savings">Banking &amp; Savings</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/advice-comment" data-trackable="Advice &amp; Comment">Advice &amp; Comment</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--child" href="/next-act" data-trackable="Next Act">Next Act</a></li></ul></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/htsi" data-trackable="HTSI">HTSI</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/special-reports" data-trackable="Special Reports">Special Reports</a></li></ul><h2 id="ft-recommends" class="o-header__drawer-menu-item o-header__drawer-menu-item--heading">FT recommends</h2><ul aria-labelledby="ft-recommends" class="o-header__drawer-menu-list"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/lex" data-trackable="Lex">Lex</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/alphaville" data-trackable="Alphaville">Alphaville</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/lunch-with-the-ft" data-trackable="Lunch with the FT">Lunch with the FT</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/globetrotter" data-trackable="FT Globetrotter">FT Globetrotter</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="https://www.ft.com/tech-asia" data-trackable="#techAsia">#techAsia</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/moral-money" data-trackable="Moral Money">Moral Money</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/visual-and-data-journalism" data-trackable="Visual and data journalism">Visual and data journalism</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/newsletters" data-trackable="Newsletters">Newsletters</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/video" data-trackable="Video">Video</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="https://www.ft.com/podcasts" data-trackable="Podcasts">Podcasts</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="/news-feed" data-trackable="News feed">News feed</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="https://events.ft.com/events-list" data-trackable="FT Live Events">FT Live Events</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="https://forums.ft.com/" data-trackable="FT Forums">FT Forums</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected" href="https://bdp.ft.com/" data-trackable="Board Director Programme">Board Director Programme</a></li></ul><ul class="o-header__drawer-menu-list o-header__drawer-menu-list--divide"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="/myft" data-trackable="myFT">myFT</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://markets.ft.com/data/portfolio/dashboard" data-trackable="Portfolio">Portfolio</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://www.ft.com/todaysnewspaper" data-trackable="Today’s Newspaper (FT Digital Edition)">Today’s Newspaper (FT Digital Edition)</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://www.ft.com/crossword" data-trackable="Crossword">Crossword</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link o-header__drawer-menu-link--unselected o-header__drawer-menu-link--secondary" href="https://www.ft.com/tour/apps" data-trackable="Our Apps">Our Apps</a></li></ul></nav><nav class="o-header__drawer-menu o-header__drawer-menu--user" data-trackable="user-nav"><ul class="o-header__drawer-menu-list"><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link" href="https://help.ft.com" data-trackable="Help Centre">Help Centre</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link" href="/products?segmentId=d290332b-e8e8-d29b-2ff4-2019b13f008a" data-trackable="Subscribe">Subscribe</a></li><li class="o-header__drawer-menu-item"><a class="o-header__drawer-menu-link" href="/login?location=/pensions" data-trackable="Sign In">Sign In</a></li></ul></nav></div></div></div><script type="application/json" id="page-kit-app-context">{"appName":"stream-page","product":"next","edition":"international","appVersion":"2a6953ab28e5fa1929c25ebe379be26c24e4928d","abTestState":"messageSlotBottom:cookieConsentC,articlecommunitypromoevent:variant2,adsDisableInternalCMP:variant,adsAppDisableInternalCMP:variant","isProduction":true,"isUserLoggedIn":false,"pageKitVersion":"8.2.3","conceptId":"9b610e96-53d2-44fe-af4f-a76716afb496","conceptType":"http://www.ft.com/ontology/Topic"}</script><script type="application/json" id="page-kit-flags-embed">{"articleRelatedContent":true,"ads":true,"javascript":true,"oTracking":true,"articleComments":true,"myFtApi":true,"articleShareButtons":true,"myFtApiWrite":true,"adTargetingUserApi":true,"videoPlayerAdvertising":true,"streamMostRead":true,"serviceWorker":true,"openGraph":true,"nativeAds":true,"myFtDigestPromo":true,"regionalNews":true,"syndication":true,"myFTEmailDisableABAlloc":true,"streamRecommendedStoriesList":true,"swAssetCaching":true,"refererCohort":true,"newsletterSignupOnArticle":true,"myFTInstantNotifications":true,"myftPrioritiseTopics":true,"myftIndustryRecs":true,"qualtrics":true,"showEventPromo":true,"myftConsentSwitch":true,"moatAdsTraffic":true,"manageCookiesWhiteLabel":true,"myftIndustryRecsFeed":true,"AdsPermutive":true,"syndication_promo":true,"messageSlotBottom":"cookieConsentC","enableGTM":true,"myftNewNewLabel":true,"myftBoldNewArticles":true,"myftPageAppNotificationsToggle":true,"realUserMonitoringForPerformance":true,"textCopyTracking":true,"enableIHSindexBasedTargetingScript":true,"enableBrandmetricsSurveyScript":true,"managePremiumCancellationJourney":true,"articleInstantAlertsPromo":true,"manageStepUpCancellationJourney":true,"manageStandardCancellationJourney":true,"manageStepUpTransitionJourney":true,"manageDirectCancellationJourney":true,"privShowCCPALinkOnFooter":true,"optimizely":true,"accountSettingsBillingDetailsPaypal":true,"graphicSyndication":true,"adsNativeLazyload":true,"adsMoatTimeout":true,"enableRavelinOnProd":true,"enableMarketingAnalyticsTags":true,"streamPageGraphicsList":true,"useFlourish":true,"adsHighImpact":true,"monthlyTermForPremiumCovidCohort":true,"enableNonUKDeliveryAddress":true,"homePageHeaderMarketsData":true,"enableGoogleExtendedMeter":true,"communityLandingPage":true,"inArticleContentSignUp":true,"frontPageCommunitySection":true,"newBuyFlow":true,"bizzaboRegistrationEnabled":true,"enableSingleTermSubscriptions":true,"newsletterAutoEnrolment":true,"eventsInMyFtPage":true,"eventsInDigestEmails":true,"eventsInStreamPage":true,"newslettersRedesign":true,"ftGlobetrotterBanner":true,"scrollytellingImages":true,"newImageQualityTransform":true,"AdsExtraMobileSlot":true,"showTheEditAppButton":true,"dotcomPages":true,"fomoPage":true,"exponeaOnsiteMessaging":true,"contentPipelineNextArticle":true,"homepageInteractivesEmbeds":true,"contentPipelineNextArticlePerformanceTest":true,"articleTrialTemplate":true,"bankTransferFeature":true,"articlecommunitypromoevent":"variant2","purgeableLongTailArticleCaching":true,"myAccountLanding":true,"chatterboxChat":true,"liveChat":true,"billingDetailsConfirmationPage":true,"graphQLMigrationUseGQLData":true,"AdsCompaniesTypeaheadDemo":true,"enterpriseUserAnnotations":true,"reverseCancellation":true,"useZephrDecision":true,"adsPGHomePage":true,"saveMeDisplayEdit":true,"adsPGSearchPage":true,"stripeForIndia":true,"useGoogleExtendedAccessNewAPI":true,"useZephrLogging":true,"showNoOffersPageInRetention":true,"adsDisableInternalCMP":"variant","makeSubsGraphQlQuery":true,"retentionGetTrabsitionData":true,"myFTInstantAlertsOnboarding":true,"proCentralBanking":true,"magnetOnArticle":true,"myftFollowButton":true,"extensibleFrontends":true,"proStocksWidgetArticlePage":true,"adsAppDisableInternalCMP":"variant"}</script></body></html>