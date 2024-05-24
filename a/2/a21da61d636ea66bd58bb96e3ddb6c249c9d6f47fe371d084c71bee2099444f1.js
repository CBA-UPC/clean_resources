/*! This file is auto-generated */
!function(){var e={3159:function(e,t,n){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){"use strict";var e,t,o,r,i="undefined"!=typeof window?window:null!=typeof n.g?n.g:this||{},u=i.cancelRequestAnimationFrame&&i.requestAnimationFrame||setTimeout,a=i.cancelRequestAnimationFrame||clearTimeout,c=[],l=0,s=!1,d=7,f=35,m=125,b=0,p=0,v=0,w={get didTimeout(){return!1},timeRemaining:function(){var e=d-(Date.now()-p);return e<0?0:e}},y=g((function(){d=22,m=66,f=0}));function g(e){var t,n,o=99,r=function(){var i=Date.now()-n;i<o?t=setTimeout(r,o-i):(t=null,e())};return function(){n=Date.now(),t||(t=setTimeout(r,o))}}function h(){s&&(r&&a(r),o&&clearTimeout(o),s=!1)}function k(){125!=m&&(d=7,m=125,f=35,s&&(h(),C())),y()}function T(){r=null,o=setTimeout(D,0)}function q(){o=null,u(T)}function C(){s||(t=m-(Date.now()-p),e=Date.now(),s=!0,f&&t<f&&(t=f),t>9?o=setTimeout(q,t):(t=0,q()))}function D(){var n,r,i,u=d>9?9:1;if(p=Date.now(),s=!1,o=null,l>2||p-t-50<e)for(r=0,i=c.length;r<i&&w.timeRemaining()>u;r++)n=c.shift(),v++,n&&n(w);c.length?C():l=0}function I(e){return b++,c.push(e),C(),b}function O(e){var t=e-1-v;c[t]&&(c[t]=null)}if(i.requestIdleCallback&&i.cancelIdleCallback)try{i.requestIdleCallback((function(){}),{timeout:0})}catch(e){!function(e){var t,n;if(i.requestIdleCallback=function(t,n){return n&&"number"==typeof n.timeout?e(t,n.timeout):e(t)},i.IdleCallbackDeadline&&(t=IdleCallbackDeadline.prototype)){if(!(n=Object.getOwnPropertyDescriptor(t,"timeRemaining"))||!n.configurable||!n.get)return;Object.defineProperty(t,"timeRemaining",{value:function(){return n.get.call(this)},enumerable:!0,configurable:!0})}}(i.requestIdleCallback)}else i.requestIdleCallback=I,i.cancelIdleCallback=O,i.document&&document.addEventListener&&(i.addEventListener("scroll",k,!0),i.addEventListener("resize",k),document.addEventListener("focus",k,!0),document.addEventListener("mouseover",k,!0),["click","keypress","touchstart","mousedown"].forEach((function(e){document.addEventListener(e,k,{capture:!0,passive:!0})})),i.MutationObserver&&new MutationObserver(k).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}));return{request:I,cancel:O}})?o.apply(t,r):o)||(e.exports=i)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o),n.d(o,{createQueue:function(){return t}});n(3159);var e="undefined"==typeof window?e=>{setTimeout((()=>e(Date.now())),0)}:window.requestIdleCallback;const t=()=>{const t=new Map;let n=!1;const o=r=>{for(const[e,n]of t)if(t.delete(e),n(),"number"==typeof r||r.timeRemaining()<=0)break;0!==t.size?e(o):n=!1};return{add:(r,i)=>{t.set(r,i),n||(n=!0,e(o))},flush:e=>{const n=t.get(e);return void 0!==n&&(t.delete(e),n(),!0)},cancel:e=>t.delete(e),reset:()=>{t.clear(),n=!1}}}}(),(window.wp=window.wp||{}).priorityQueue=o}();d 0===globalThis?void 0:globalThis.document)?a.useLayoutEffect:()=>{},f=a["useId".toString()]||(()=>{});let m=0;function p(e){const[t,n]=a.useState(f());return d((()=>{e||n((e=>null!=e?e:String(m++)))}),[e]),e||(t?`radix-${t}`:"")}function v(e){const t=(0,a.useRef)(e);return(0,a.useEffect)((()=>{t.current=e})),(0,a.useMemo)((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}var h=window.ReactDOM,g=n.n(h);const E=(0,a.forwardRef)(((e,t)=>{const{children:n,...r}=e,o=a.Children.toArray(n),u=o.find(w);if(u){const e=u.props.children,n=o.map((t=>t===u?a.Children.count(e)>1?a.Children.only(null):(0,a.isValidElement)(e)?e.props.children:null:t));return(0,a.createElement)(y,c({},r,{ref:t}),(0,a.isValidElement)(e)?(0,a.cloneElement)(e,void 0,n):null)}return(0,a.createElement)(y,c({},r,{ref:t}),n)}));E.displayName="Slot";const y=(0,a.forwardRef)(((e,t)=>{const{children:n,...r}=e;return(0,a.isValidElement)(n)?(0,a.cloneElement)(n,{...C(r,n.props),ref:i(t,n.ref)}):a.Children.count(n)>1?a.Children.only(null):null}));y.displayName="SlotClone";const b=({children:e})=>(0,a.createElement)(a.Fragment,null,e);function w(e){return(0,a.isValidElement)(e)&&e.type===b}function C(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?n[r]=(...e)=>{null==a||a(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...a}:"className"===r&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}const S=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const n=(0,a.forwardRef)(((e,n)=>{const{asChild:r,...o}=e,u=r?E:t;return(0,a.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,a.createElement)(u,c({},o,{ref:n}))}));return n.displayName=`Primitive.${t}`,{...e,[t]:n}}),{}),x="dismissableLayer.update";let O;const k=(0,a.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),R=(0,a.forwardRef)(((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:i,onInteractOutside:s,onDismiss:d,...f}=e,m=(0,a.useContext)(k),[p,h]=(0,a.useState)(null),[,g]=(0,a.useState)({}),E=l(t,(e=>h(e))),y=Array.from(m.layers),[b]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),w=y.indexOf(b),C=p?y.indexOf(p):-1,R=m.layersWithOutsidePointerEventsDisabled.size>0,D=C>=w,N=function(e){const t=v(e),n=(0,a.useRef)(!1),r=(0,a.useRef)((()=>{}));return(0,a.useEffect)((()=>{const e=e=>{if(e.target&&!n.current){const o={originalEvent:e};function a(){A("dismissableLayer.pointerDownOutside",t,o,{discrete:!0})}"touch"===e.pointerType?(document.removeEventListener("click",r.current),r.current=a,document.addEventListener("click",r.current,{once:!0})):a()}n.current=!1},o=window.setTimeout((()=>{document.addEventListener("pointerdown",e)}),0);return()=>{window.clearTimeout(o),document.removeEventListener("pointerdown",e),document.removeEventListener("click",r.current)}}),[t]),{onPointerDownCapture:()=>n.current=!0}}((e=>{const t=e.target,n=[...m.branches].some((e=>e.contains(t)));D&&!n&&(null==o||o(e),null==s||s(e),e.defaultPrevented||null==d||d())})),M=function(e){const t=v(e),n=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{const e=e=>{e.target&&!n.current&&A("dismissableLayer.focusOutside",t,{originalEvent:e},{discrete:!1})};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)}),[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}((e=>{const t=e.target;[...m.branches].some((e=>e.contains(t)))||(null==i||i(e),null==s||s(e),e.defaultPrevented||null==d||d())}));return function(e){const t=v(e);(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t])}((e=>{C===m.layers.size-1&&(null==r||r(e),!e.defaultPrevented&&d&&(e.preventDefault(),d()))})),(0,a.useEffect)((()=>{if(p)return n&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(O=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(p)),m.layers.add(p),L(),()=>{n&&1===m.layersWithOutsidePointerEventsDisabled.size&&(document.body.style.pointerEvents=O)}}),[p,n,m]),(0,a.useEffect)((()=>()=>{p&&(m.layers.delete(p),m.layersWithOutsidePointerEventsDisabled.delete(p),L())}),[p,m]),(0,a.useEffect)((()=>{const e=()=>g({});return document.addEventListener(x,e),()=>document.removeEventListener(x,e)}),[]),(0,a.createElement)(S.div,c({},f,{ref:E,style:{pointerEvents:R?D?"auto":"none":void 0,...e.style},onFocusCapture:u(e.onFocusCapture,M.onFocusCapture),onBlurCapture:u(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:u(e.onPointerDownCapture,N.onPointerDownCapture)}))}));function L(){const e=new CustomEvent(x);document.dispatchEvent(e)}function A(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?function(e,t){e&&(0,h.flushSync)((()=>e.dispatchEvent(t)))}(o,a):o.dispatchEvent(a)}const D="focusScope.autoFocusOnMount",N="focusScope.autoFocusOnUnmount",M={bubbles:!1,cancelable:!0},_=(0,a.forwardRef)(((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:u,...i}=e,[s,d]=(0,a.useState)(null),f=v(o),m=v(u),p=(0,a.useRef)(null),h=l(t,(e=>d(e))),g=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)((()=>{if(r){function e(e){if(g.paused||!s)return;const t=e.target;s.contains(t)?p.current=t:F(p.current,{select:!0})}function t(e){!g.paused&&s&&(s.contains(e.relatedTarget)||F(p.current,{select:!0}))}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}}),[r,s,g.paused]),(0,a.useEffect)((()=>{if(s){j.add(g);const e=document.activeElement;if(!s.contains(e)){const t=new CustomEvent(D,M);s.addEventListener(D,f),s.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(F(r,{select:t}),document.activeElement!==n)return}(P(s).filter((e=>"A"!==e.tagName)),{select:!0}),document.activeElement===e&&F(s))}return()=>{s.removeEventListener(D,f),setTimeout((()=>{const t=new CustomEvent(N,M);s.addEventListener(N,m),s.dispatchEvent(t),t.defaultPrevented||F(null!=e?e:document.body,{select:!0}),s.removeEventListener(N,m),j.remove(g)}),0)}}}),[s,f,m,g]);const E=(0,a.useCallback)((e=>{if(!n&&!r)return;if(g.paused)return;const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){const t=e.currentTarget,[r,a]=function(e){const t=P(e);return[I(t,e),I(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&F(a,{select:!0})):(e.preventDefault(),n&&F(r,{select:!0})):o===t&&e.preventDefault()}}),[n,r,g.paused]);return(0,a.createElement)(S.div,c({tabIndex:-1},i,{ref:h,onKeyDown:E}))}));function P(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function I(e,t){for(const n of e)if(!T(n,{upTo:t}))return n}function T(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function F(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&function(e){return e instanceof HTMLInputElement&&"select"in e}(e)&&t&&e.select()}}const j=function(){let e=[];return{add(t){const n=e[0];t!==n&&(null==n||n.pause()),e=W(e,t),e.unshift(t)},remove(t){var n;e=W(e,t),null===(n=e[0])||void 0===n||n.resume()}}}();function W(e,t){const n=[...e],r=n.indexOf(t);return-1!==r&&n.splice(r,1),n}const U=(0,a.forwardRef)(((e,t)=>{var n;const{container:r=(null===globalThis||void 0===globalThis||null===(n=globalThis.document)||void 0===n?void 0:n.body),...o}=e;return r?g().createPortal((0,a.createElement)(S.div,c({},o,{ref:t})),r):null})),B=e=>{const{present:t,children:n}=e,r=function(e){const[t,n]=(0,a.useState)(),r=(0,a.useRef)({}),o=(0,a.useRef)(e),c=(0,a.useRef)("none"),u=e?"mounted":"unmounted",[i,l]=function(e,t){return(0,a.useReducer)(((e,n)=>{const r=t[e][n];return null!=r?r:e}),e)}(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,a.useEffect)((()=>{const e=K(r.current);c.current="mounted"===i?e:"none"}),[i]),d((()=>{const t=r.current,n=o.current;if(n!==e){const r=c.current,a=K(t);e?l("MOUNT"):"none"===a||"none"===(null==t?void 0:t.display)?l("UNMOUNT"):l(n&&r!==a?"ANIMATION_OUT":"UNMOUNT"),o.current=e}}),[e,l]),d((()=>{if(t){const e=e=>{const n=K(r.current).includes(e.animationName);e.target===t&&n&&(0,h.flushSync)((()=>l("ANIMATION_END")))},n=e=>{e.target===t&&(c.current=K(r.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}l("ANIMATION_END")}),[t,l]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:(0,a.useCallback)((e=>{e&&(r.current=getComputedStyle(e)),n(e)}),[])}}(t),o="function"==typeof n?n({present:r.isPresent}):a.Children.only(n),c=l(r.ref,o.ref);return"function"==typeof n||r.isPresent?(0,a.cloneElement)(o,{ref:c}):null};function K(e){return(null==e?void 0:e.animationName)||"none"}B.displayName="Presence";let $=0;function q(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var z=function(){return z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},z.apply(this,arguments)};function G(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var H="right-scroll-bar-position",V="width-before-scroll-bar";function X(e){return e}var Y=function(e){void 0===e&&(e={});var t=function(e,t){void 0===t&&(t=X);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},c=function(){return Promise.resolve().then(a)};c(),n={push:function(e){t.push(e),c()},filter:function(e){return t=t.filter(e),n}}}};return o}(null);return t.options=z({async:!0,ssr:!1},e),t}(),Z=function(){},J=a.forwardRef((function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:Z,onWheelCapture:Z,onTouchMoveCapture:Z}),o=r[0],c=r[1],u=e.forwardProps,i=e.children,l=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,m=e.sideCar,p=e.noIsolation,v=e.inert,h=e.allowPinchZoom,g=e.as,E=void 0===g?"div":g,y=G(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),b=m,w=function(e,t){return n=t||null,r=function(t){return e.forEach((function(e){return function(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}(e,t)}))},(o=(0,a.useState)((function(){return{value:n,callback:r,facade:{get current(){return o.value},set current(e){var t=o.value;t!==e&&(o.value=e,o.callback(e,t))}}}}))[0]).callback=r,o.facade;var n,r,o}([n,t]),C=z(z({},y),o);return a.createElement(a.Fragment,null,d&&a.createElement(b,{sideCar:Y,removeScrollBar:s,shards:f,noIsolation:p,inert:v,setCallbacks:c,allowPinchZoom:!!h,lockRef:n}),u?a.cloneElement(a.Children.only(i),z(z({},C),{ref:w})):a.createElement(E,z({},C,{className:l,ref:w}),i))}));J.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},J.classNames={fullWidth:V,zeroRight:H};var Q=function(e){var t=e.sideCar,n=G(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return a.createElement(r,z({},n))};Q.isSideCarExport=!0;var ee=function(){var e=0,t=null;return{add:function(r){var o,a;0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=n.nc;return t&&e.setAttribute("nonce",t),e}())&&(a=r,(o=t).styleSheet?o.styleSheet.cssText=a:o.appendChild(document.createTextNode(a)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t)),e++},remove:function(){! --e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},te=function(){var e,t=(e=ee(),function(t,n){a.useEffect((function(){return e.add(t),function(){e.remove()}}),[t&&n])});return function(e){var n=e.styles,r=e.dynamic;return t(n,r),null}},ne={left:0,top:0,right:0,gap:0},re=function(e){return parseInt(e||"",10)||0},oe=te(),ae=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(H," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(V," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(H," .").concat(H," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(V," .").concat(V," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},ce=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,c=a.useMemo((function(){return function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ne;var t=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[re(n),re(r),re(o)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}}(o)}),[o]);return a.createElement(oe,{styles:ae(c,!t,o,n?"":"!important")})},ue=!1;if("undefined"!=typeof window)try{var ie=Object.defineProperty({},"passive",{get:function(){return ue=!0,!0}});window.addEventListener("test",ie,ie),window.removeEventListener("test",ie,ie)}catch(e){ue=!1}var le,se=!!ue&&{passive:!1},de=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),fe(e,n)){var r=me(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},fe=function(e,t){return"v"===e?function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowY&&!(t.overflowY===t.overflowX&&"visible"===t.overflowY)}(t):function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowX&&!(t.overflowY===t.overflowX&&"visible"===t.overflowX)}(t)},me=function(e,t){return"v"===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t);var n},pe=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ve=function(e){return[e.deltaX,e.deltaY]},he=function(e){return e&&"current"in e?e.current:e},ge=function(e){return"\n  .block-interactivity-".concat(e," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")},Ee=0,ye=[],be=(le=function(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(Ee++)[0],c=a.useState((function(){return te()}))[0],u=a.useRef(e);a.useEffect((function(){u.current=e}),[e]),a.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([e.lockRef.current],(e.shards||[]).map(he),!0).filter(Boolean);return t.forEach((function(e){return e.classList.add("allow-interactivity-".concat(o))})),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach((function(e){return e.classList.remove("allow-interactivity-".concat(o))}))}}}),[e.inert,e.lockRef.current,e.shards]);var i=a.useCallback((function(e,t){if("touches"in e&&2===e.touches.length)return!u.current.allowPinchZoom;var o,a=pe(e),c=n.current,i="deltaX"in e?e.deltaX:c[0]-a[0],l="deltaY"in e?e.deltaY:c[1]-a[1],s=e.target,d=Math.abs(i)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=de(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=de(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||l)&&(r.current=o),!o)return!0;var m=r.current||o;return function(e,t,n,r,o){var a=function(e,t){return"h"===e&&"rtl"===t?-1:1}(e,window.getComputedStyle(t).direction),c=a*r,u=n.target,i=t.contains(u),l=!1,s=c>0,d=0,f=0;do{var m=me(e,u),p=m[0],v=m[1]-m[2]-a*p;(p||v)&&fe(e,u)&&(d+=v,f+=p),u=u.parentNode}while(!i&&u!==document.body||i&&(t.contains(u)||t===u));return(s&&(0===d||!1)||!s&&(0===f||!1))&&(l=!0),l}(m,t,e,"h"===m?i:l)}),[]),l=a.useCallback((function(e){var n=e;if(ye.length&&ye[ye.length-1]===c){var r="deltaY"in n?ve(n):pe(n),o=t.current.filter((function(e){return e.name===n.type&&e.target===n.target&&function(e,t){return e[0]===t[0]&&e[1]===t[1]}(e.delta,r)}))[0];if(o&&o.should)n.preventDefault();else if(!o){var a=(u.current.shards||[]).map(he).filter(Boolean).filter((function(e){return e.contains(n.target)}));(a.length>0?i(n,a[0]):!u.current.noIsolation)&&n.preventDefault()}}}),[]),s=a.useCallback((function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout((function(){t.current=t.current.filter((function(e){return e!==a}))}),1)}),[]),d=a.useCallback((function(e){n.current=pe(e),r.current=void 0}),[]),f=a.useCallback((function(t){s(t.type,ve(t),t.target,i(t,e.lockRef.current))}),[]),m=a.useCallback((function(t){s(t.type,pe(t),t.target,i(t,e.lockRef.current))}),[]);a.useEffect((function(){return ye.push(c),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",l,se),document.addEventListener("touchmove",l,se),document.addEventListener("touchstart",d,se),function(){ye=ye.filter((function(e){return e!==c})),document.removeEventListener("wheel",l,se),document.removeEventListener("touchmove",l,se),document.removeEventListener("touchstart",d,se)}}),[]);var p=e.removeScrollBar,v=e.inert;return a.createElement(a.Fragment,null,v?a.createElement(c,{styles:ge(o)}):null,p?a.createElement(ce,{gapMode:"margin"}):null)},Y.useMedium(le),Q),we=a.forwardRef((function(e,t){return a.createElement(J,z({},e,{ref:t,sideCar:be}))}));we.classNames=J.classNames;var Ce=we,Se=new WeakMap,xe=new WeakMap,Oe={},ke=0,Re=function(e){return e&&(e.host||Re(e.parentNode))},Le=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body}(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),function(e,t,n,r){var o=function(e,t){return t.map((function(t){if(e.contains(t))return t;var n=Re(t);return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)})).filter((function(e){return Boolean(e)}))}(t,Array.isArray(e)?e:[e]);Oe[n]||(Oe[n]=new WeakMap);var a=Oe[n],c=[],u=new Set,i=new Set(o),l=function(e){e&&!u.has(e)&&(u.add(e),l(e.parentNode))};o.forEach(l);var s=function(e){e&&!i.has(e)&&Array.prototype.forEach.call(e.children,(function(e){if(u.has(e))s(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,i=(Se.get(e)||0)+1,l=(a.get(e)||0)+1;Se.set(e,i),a.set(e,l),c.push(e),1===i&&o&&xe.set(e,!0),1===l&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}}))};return s(t),u.clear(),ke++,function(){c.forEach((function(e){var t=Se.get(e)-1,o=a.get(e)-1;Se.set(e,t),a.set(e,o),t||(xe.has(e)||e.removeAttribute(r),xe.delete(e)),o||e.removeAttribute(n)})),--ke||(Se=new WeakMap,Se=new WeakMap,xe=new WeakMap,Oe={})}}(r,o,n,"aria-hidden")):function(){return null}};const Ae="Dialog",[De,Ne]=function(e,t=[]){let n=[];const r=()=>{const t=n.map((e=>(0,a.createContext)(e)));return function(n){const r=(null==n?void 0:n[e])||t;return(0,a.useMemo)((()=>({[`__scope${e}`]:{...n,[e]:r}})),[n,r])}};return r.scopeName=e,[function(t,r){const o=(0,a.createContext)(r),c=n.length;function u(t){const{scope:n,children:r,...u}=t,i=(null==n?void 0:n[e][c])||o,l=(0,a.useMemo)((()=>u),Object.values(u));return(0,a.createElement)(i.Provider,{value:l},r)}return n=[...n,r],u.displayName=t+"Provider",[u,function(n,u){const i=(null==u?void 0:u[e][c])||o,l=(0,a.useContext)(i);if(l)return l;if(void 0!==r)return r;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},s(r,...t)]}(Ae),[Me,_e]=De(Ae),Pe="DialogPortal",[Ie,Te]=De(Pe,{forceMount:void 0}),Fe="DialogOverlay",je=(0,a.forwardRef)(((e,t)=>{const n=Te(Fe,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=_e(Fe,e.__scopeDialog);return u.modal?(0,a.createElement)(B,{present:r||u.open},(0,a.createElement)(We,c({},o,{ref:t}))):null})),We=(0,a.forwardRef)(((e,t)=>{const{__scopeDialog:n,...r}=e,o=_e(Fe,n);return(0,a.createElement)(Ce,{as:E,allowPinchZoom:!0,shards:[o.contentRef]},(0,a.createElement)(S.div,c({"data-state":ze(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))})),Ue="DialogContent",Be=(0,a.forwardRef)(((e,t)=>{const n=Te(Ue,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,u=_e(Ue,e.__scopeDialog);return(0,a.createElement)(B,{present:r||u.open},u.modal?(0,a.createElement)(Ke,c({},o,{ref:t})):(0,a.createElement)($e,c({},o,{ref:t})))})),Ke=(0,a.forwardRef)(((e,t)=>{const n=_e(Ue,e.__scopeDialog),r=(0,a.useRef)(null),o=l(t,n.contentRef,r);return(0,a.useEffect)((()=>{const e=r.current;if(e)return Le(e)}),[]),(0,a.createElement)(qe,c({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,(e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()})),onPointerDownOutside:u(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()})),onFocusOutside:u(e.onFocusOutside,(e=>e.preventDefault()))}))})),$e=(0,a.forwardRef)(((e,t)=>{const n=_e(Ue,e.__scopeDialog),r=(0,a.useRef)(!1);return(0,a.createElement)(qe,c({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,a;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1},onInteractOutside:t=>{var o,a;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0);const c=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(c))&&t.preventDefault()}}))})),qe=(0,a.forwardRef)(((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:u,...i}=e,s=_e(Ue,n),d=l(t,(0,a.useRef)(null));return(0,a.useEffect)((()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:q()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:q()),$++,()=>{1===$&&document.querySelectorAll("[data-radix-focus-guard]").forEach((e=>e.remove())),$--}}),[]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(_,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:u},(0,a.createElement)(R,c({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":ze(s.open)},i,{ref:d,onDismiss:()=>s.onOpenChange(!1)}))),!1)}));function ze(e){return e?"open":"closed"}const[Ge,He]=function(e,t){const n=(0,a.createContext)(t);function r(e){const{children:t,...r}=e,o=(0,a.useMemo)((()=>r),Object.values(r));return(0,a.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){const o=(0,a.useContext)(n);if(o)return o;if(void 0!==t)return t;throw new Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:Ue,titleName:"DialogTitle",docsSlug:"dialog"}),Ve=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:c,modal:u=!0}=e,i=(0,a.useRef)(null),l=(0,a.useRef)(null),[s=!1,d]=function({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[r,o]=function({defaultProp:e,onChange:t}){const n=(0,a.useState)(e),[r]=n,o=(0,a.useRef)(r),c=v(t);return(0,a.useEffect)((()=>{o.current!==r&&(c(r),o.current=r)}),[r,o,c]),n}({defaultProp:t,onChange:n}),c=void 0!==e,u=c?e:r,i=v(n);return[u,(0,a.useCallback)((t=>{if(c){const n="function"==typeof t?t(e):t;n!==e&&i(n)}else o(t)}),[c,e,o,i])]}({prop:r,defaultProp:o,onChange:c});return(0,a.createElement)(Me,{scope:t,triggerRef:i,contentRef:l,contentId:p(),titleId:p(),descriptionId:p(),open:s,onOpenChange:d,onOpenToggle:(0,a.useCallback)((()=>d((e=>!e))),[d]),modal:u},n)},Xe=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,c=_e(Pe,t);return(0,a.createElement)(Ie,{scope:t,forceMount:n},a.Children.map(r,(e=>(0,a.createElement)(B,{present:n||c.open},(0,a.createElement)(U,{asChild:!0,container:o},e)))))},Ye=je,Ze=Be;var Je=n(8670),Qe='[cmdk-group=""]',et='[cmdk-group-items=""]',tt='[cmdk-item=""]',nt=`${tt}:not([aria-disabled="true"])`,rt="cmdk-item-select",ot="data-value",at=(e,t)=>Je(e,t),ct=a.createContext(void 0),ut=()=>a.useContext(ct),it=a.createContext(void 0),lt=()=>a.useContext(it),st=a.createContext(void 0),dt=a.forwardRef(((e,t)=>{let n=a.useRef(null),r=Ot((()=>({search:"",value:"",filtered:{count:0,items:new Map,groups:new Set}}))),o=Ot((()=>new Set)),c=Ot((()=>new Map)),u=Ot((()=>new Map)),i=Ot((()=>new Set)),l=St(e),{label:s,children:d,value:f,onValueChange:m,filter:p,shouldFilter:v,...h}=e,g=a.useId(),E=a.useId(),y=a.useId(),b=At();xt((()=>{if(void 0!==f){let e=f.trim().toLowerCase();r.current.value=e,b(6,R),w.emit()}}),[f]);let w=a.useMemo((()=>({subscribe:e=>(i.current.add(e),()=>i.current.delete(e)),snapshot:()=>r.current,setState:(e,t,n)=>{var o,a,c;if(!Object.is(r.current[e],t)){if(r.current[e]=t,"search"===e)k(),x(),b(1,O);else if("value"===e){if(void 0!==(null==(o=l.current)?void 0:o.value))return void(null==(c=(a=l.current).onValueChange)||c.call(a,t));n||b(5,R)}w.emit()}},emit:()=>{i.current.forEach((e=>e()))}})),[]),C=a.useMemo((()=>({value:(e,t)=>{t!==u.current.get(e)&&(u.current.set(e,t),r.current.filtered.items.set(e,S(t)),b(2,(()=>{x(),w.emit()})))},item:(e,t)=>(o.current.add(e),t&&(c.current.has(t)?c.current.get(t).add(e):c.current.set(t,new Set([e]))),b(3,(()=>{k(),x(),r.current.value||O(),w.emit()})),()=>{u.current.delete(e),o.current.delete(e),r.current.filtered.items.delete(e),b(4,(()=>{k(),O(),w.emit()}))}),group:e=>(c.current.has(e)||c.current.set(e,new Set),()=>{u.current.delete(e),c.current.delete(e)}),filter:()=>l.current.shouldFilter,label:s||e["aria-label"],listId:g,inputId:y,labelId:E})),[]);function S(e){var t;let n=(null==(t=l.current)?void 0:t.filter)??at;return e?n(e,r.current.search):0}function x(){if(!n.current||!r.current.search||!1===l.current.shouldFilter)return;let e=r.current.filtered.items,t=[];r.current.filtered.groups.forEach((n=>{let r=c.current.get(n),o=0;r.forEach((t=>{let n=e.get(t);o=Math.max(n,o)})),t.push([n,o])}));let o=n.current.querySelector('[cmdk-list-sizer=""]');A().sort(((t,n)=>{let r=t.getAttribute(ot),o=n.getAttribute(ot);return(e.get(o)??0)-(e.get(r)??0)})).forEach((e=>{let t=e.closest(et);t?t.appendChild(e.parentElement===t?e:e.closest(`${et} > *`)):o.appendChild(e.parentElement===o?e:e.closest(`${et} > *`))})),t.sort(((e,t)=>t[1]-e[1])).forEach((e=>{let t=n.current.querySelector(`${Qe}[${ot}="${e[0]}"]`);null==t||t.parentElement.appendChild(t)}))}function O(){let e=A().find((e=>!e.ariaDisabled)),t=null==e?void 0:e.getAttribute(ot);w.setState("value",t||void 0)}function k(){if(!r.current.search||!1===l.current.shouldFilter)return void(r.current.filtered.count=o.current.size);r.current.filtered.groups=new Set;let e=0;for(let t of o.current){let n=S(u.current.get(t));r.current.filtered.items.set(t,n),n>0&&e++}for(let[e,t]of c.current)for(let n of t)if(r.current.filtered.items.get(n)>0){r.current.filtered.groups.add(e);break}r.current.filtered.count=e}function R(){var e,t,n;let r=L();r&&((null==(e=r.parentElement)?void 0:e.firstChild)===r&&(null==(n=null==(t=r.closest(Qe))?void 0:t.querySelector('[cmdk-group-heading=""]'))||n.scrollIntoView({block:"nearest"})),r.scrollIntoView({block:"nearest"}))}function L(){return n.current.querySelector(`${tt}[aria-selected="true"]`)}function A(){return Array.from(n.current.querySelectorAll(nt))}function D(e){let t=A()[e];t&&w.setState("value",t.getAttribute(ot))}function N(e){var t;let n=L(),r=A(),o=r.findIndex((e=>e===n)),a=r[o+e];null!=(t=l.current)&&t.loop&&(a=o+e<0?r[r.length-1]:o+e===r.length?r[0]:r[o+e]),a&&w.setState("value",a.getAttribute(ot))}function M(e){let t,n=L(),r=null==n?void 0:n.closest(Qe);for(;r&&!t;)r=e>0?wt(r,Qe):Ct(r,Qe),t=null==r?void 0:r.querySelector(nt);t?w.setState("value",t.getAttribute(ot)):N(e)}let _=()=>D(A().length-1),P=e=>{e.preventDefault(),e.metaKey?_():e.altKey?M(1):N(1)},I=e=>{e.preventDefault(),e.metaKey?D(0):e.altKey?M(-1):N(-1)};return a.createElement("div",{ref:kt([n,t]),...h,"cmdk-root":"",onKeyDown:e=>{var t;if(null==(t=h.onKeyDown)||t.call(h,e),!e.defaultPrevented)switch(e.key){case"n":case"j":e.ctrlKey&&P(e);break;case"ArrowDown":P(e);break;case"p":case"k":e.ctrlKey&&I(e);break;case"ArrowUp":I(e);break;case"Home":e.preventDefault(),D(0);break;case"End":e.preventDefault(),_();break;case"Enter":{e.preventDefault();let t=L();if(t){let e=new Event(rt);t.dispatchEvent(e)}}}}},a.createElement("label",{"cmdk-label":"",htmlFor:C.inputId,id:C.labelId,style:Dt},s),a.createElement(it.Provider,{value:w},a.createElement(ct.Provider,{value:C},d)))})),ft=a.forwardRef(((e,t)=>{let n=a.useId(),r=a.useRef(null),o=a.useContext(st),c=ut(),u=St(e);xt((()=>c.item(n,o)),[]);let i=Lt(n,r,[e.value,e.children,r]),l=lt(),s=Rt((e=>e.value&&e.value===i.current)),d=Rt((e=>!1===c.filter()||!e.search||e.filtered.items.get(n)>0));function f(){var e,t;null==(t=(e=u.current).onSelect)||t.call(e,i.current)}if(a.useEffect((()=>{let t=r.current;if(t&&!e.disabled)return t.addEventListener(rt,f),()=>t.removeEventListener(rt,f)}),[d,e.onSelect,e.disabled]),!d)return null;let{disabled:m,value:p,onSelect:v,...h}=e;return a.createElement("div",{ref:kt([r,t]),...h,"cmdk-item":"",role:"option","aria-disabled":m||void 0,"aria-selected":s||void 0,"data-selected":s||void 0,onPointerMove:m?void 0:function(){l.setState("value",i.current,!0)},onClick:m?void 0:f},e.children)})),mt=a.forwardRef(((e,t)=>{let{heading:n,children:r,...o}=e,c=a.useId(),u=a.useRef(null),i=a.useRef(null),l=a.useId(),s=ut(),d=Rt((e=>!1===s.filter()||!e.search||e.filtered.groups.has(c)));xt((()=>s.group(c)),[]),Lt(c,u,[e.value,e.heading,i]);let f=a.createElement(st.Provider,{value:c},r);return a.createElement("div",{ref:kt([u,t]),...o,"cmdk-group":"",role:"presentation",hidden:!d||void 0},n&&a.createElement("div",{ref:i,"cmdk-group-heading":"","aria-hidden":!0,id:l},n),a.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?l:void 0},f))})),pt=a.forwardRef(((e,t)=>{let{alwaysRender:n,...r}=e,o=a.useRef(null),c=Rt((e=>!e.search));return n||c?a.createElement("div",{ref:kt([o,t]),...r,"cmdk-separator":"",role:"separator"}):null})),vt=a.forwardRef(((e,t)=>{let{onValueChange:n,...r}=e,o=null!=e.value,c=lt(),u=Rt((e=>e.search)),i=ut();return a.useEffect((()=>{null!=e.value&&c.setState("search",e.value)}),[e.value]),a.createElement("input",{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":i.listId,"aria-labelledby":i.labelId,id:i.inputId,type:"text",value:o?e.value:u,onChange:e=>{o||c.setState("search",e.target.value),null==n||n(e.target.value)}})})),ht=a.forwardRef(((e,t)=>{let{children:n,...r}=e,o=a.useRef(null),c=a.useRef(null),u=ut();return a.useEffect((()=>{if(c.current&&o.current){let e,t=c.current,n=o.current,r=new ResizeObserver((()=>{e=requestAnimationFrame((()=>{let e=t.getBoundingClientRect().height;n.style.setProperty("--cmdk-list-height",e.toFixed(1)+"px")}))}));return r.observe(t),()=>{cancelAnimationFrame(e),r.unobserve(t)}}}),[]),a.createElement("div",{ref:kt([o,t]),...r,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:u.listId,"aria-labelledby":u.inputId},a.createElement("div",{ref:c,"cmdk-list-sizer":""},n))})),gt=a.forwardRef(((e,t)=>{let{open:n,onOpenChange:r,container:o,...c}=e;return a.createElement(Ve,{open:n,onOpenChange:r},a.createElement(Xe,{container:o},a.createElement(Ye,{"cmdk-overlay":""}),a.createElement(Ze,{"aria-label":e.label,"cmdk-dialog":""},a.createElement(dt,{ref:t,...c}))))})),Et=a.forwardRef(((e,t)=>{let n=a.useRef(!0),r=Rt((e=>0===e.filtered.count));return a.useEffect((()=>{n.current=!1}),[]),n.current||!r?null:a.createElement("div",{ref:t,...e,"cmdk-empty":"",role:"presentation"})})),yt=a.forwardRef(((e,t)=>{let{progress:n,children:r,...o}=e;return a.createElement("div",{ref:t,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},a.createElement("div",{"aria-hidden":!0},r))})),bt=Object.assign(dt,{List:ht,Item:ft,Input:vt,Group:mt,Separator:pt,Dialog:gt,Empty:Et,Loading:yt});function wt(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}function Ct(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}function St(e){let t=a.useRef(e);return xt((()=>{t.current=e})),t}var xt=typeof window>"u"?a.useEffect:a.useLayoutEffect;function Ot(e){let t=a.useRef();return void 0===t.current&&(t.current=e()),t}function kt(e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}function Rt(e){let t=lt(),n=()=>e(t.snapshot());return a.useSyncExternalStore(t.subscribe,n,n)}function Lt(e,t,n){let r=a.useRef(),o=ut();return xt((()=>{var a;let c=(()=>{var e;for(let t of n){if("string"==typeof t)return t.trim().toLowerCase();if("object"==typeof t&&"current"in t&&t.current)return null==(e=t.current.textContent)?void 0:e.trim().toLowerCase()}})();o.value(e,c),null==(a=t.current)||a.setAttribute(ot,c),r.current=c})),r}var At=()=>{let[e,t]=a.useState(),n=Ot((()=>new Map));return xt((()=>{n.current.forEach((e=>e())),n.current=new Map}),[e]),(e,r)=>{n.current.set(e,r),t({})}},Dt={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},Nt=n(4403),Mt=n.n(Nt),_t=window.wp.data,Pt=window.wp.element,It=window.wp.i18n,Tt=window.wp.components,Ft=window.wp.keyboardShortcuts,jt=(0,Pt.forwardRef)((function({icon:e,size:t=24,...n},r){return(0,Pt.cloneElement)(e,{width:t,height:t,...n,ref:r})})),Wt=window.wp.primitives,Ut=(0,a.createElement)(Wt.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(Wt.Path,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})),Bt=(0,_t.combineReducers)({commands:function(e={},t){switch(t.type){case"REGISTER_COMMAND":return{...e,[t.name]:{name:t.name,label:t.label,searchLabel:t.searchLabel,context:t.context,callback:t.callback,icon:t.icon}};case"UNREGISTER_COMMAND":{const{[t.name]:n,...r}=e;return r}}return e},commandLoaders:function(e={},t){switch(t.type){case"REGISTER_COMMAND_LOADER":return{...e,[t.name]:{name:t.name,context:t.context,hook:t.hook}};case"UNREGISTER_COMMAND_LOADER":{const{[t.name]:n,...r}=e;return r}}return e},isOpen:function(e=!1,t){switch(t.type){case"OPEN":return!0;case"CLOSE":return!1}return e},context:function(e="root",t){return"SET_CONTEXT"===t.type?t.context:e}});function Kt(e){return{type:"REGISTER_COMMAND",...e}}function $t(e){return{type:"UNREGISTER_COMMAND",name:e}}function qt(e){return{type:"REGISTER_COMMAND_LOADER",...e}}function zt(e){return{type:"UNREGISTER_COMMAND_LOADER",name:e}}function Gt(){return{type:"OPEN"}}function Ht(){return{type:"CLOSE"}}var Vt={};function Xt(e){return[e]}function Yt(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Zt(e,t){var n,r=t||Xt;function o(){n=new WeakMap}function a(){var t,o,a,c,u,i=arguments.length;for(c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];for(t=function(e){var t,r,o,a,c,u=n,i=!0;for(t=0;t<e.length;t++){if(!(c=r=e[t])||"object"!=typeof c){i=!1;break}u.has(r)?u=u.get(r):(o=new WeakMap,u.set(r,o),u=o)}return u.has(Vt)||((a=function(){var e={clear:function(){e.head=null}};return e}()).isUniqueByDependants=i,u.set(Vt,a)),u.get(Vt)}(u=r.apply(null,c)),t.isUniqueByDependants||(t.lastDependants&&!Yt(u,t.lastDependants,0)&&t.clear(),t.lastDependants=u),o=t.head;o;){if(Yt(o.args,c,1))return o!==t.head&&(o.prev.next=o.next,o.next&&(o.next.prev=o.prev),o.next=t.head,o.prev=null,t.head.prev=o,t.head=o),o.val;o=o.next}return o={val:e.apply(null,c)},c[0]=null,o.args=c,t.head&&(t.head.prev=o,o.next=t.head),t.head=o,o.val}return a.getDependants=r,a.clear=o,o(),a}const Jt=Zt(((e,t=!1)=>Object.values(e.commands).filter((n=>{const r=n.context&&n.context===e.context;return t?r:!r}))),(e=>[e.commands,e.context])),Qt=Zt(((e,t=!1)=>Object.values(e.commandLoaders).filter((n=>{const r=n.context&&n.context===e.context;return t?r:!r}))),(e=>[e.commandLoaders,e.context]));function en(e){return e.isOpen}function tn(e){return e.context}function nn(e){return{type:"SET_CONTEXT",context:e}}var rn=window.wp.privateApis;const{lock:on,unlock:an}=(0,rn.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.","@wordpress/commands"),cn=(0,_t.createReduxStore)("core/commands",{reducer:Bt,actions:e,selectors:t});function un({name:e,search:t,hook:n,setLoader:r,close:o}){var c;const{isLoading:u,commands:i=[]}=null!==(c=n({search:t}))&&void 0!==c?c:{};return(0,Pt.useEffect)((()=>{r(e,u)}),[r,e,u]),i.length?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(bt.List,null,i.map((e=>{var n;return(0,a.createElement)(bt.Item,{key:e.name,value:null!==(n=e.searchLabel)&&void 0!==n?n:e.label,onSelect:()=>e.callback({close:o}),id:e.name},(0,a.createElement)(Tt.__experimentalHStack,{alignment:"left",className:Mt()("commands-command-menu__item",{"has-icon":e.icon})},e.icon&&(0,a.createElement)(jt,{icon:e.icon}),(0,a.createElement)("span",null,(0,a.createElement)(Tt.TextHighlight,{text:e.label,highlight:t}))))})))):null}function ln({hook:e,search:t,setLoader:n,close:r}){const o=(0,Pt.useRef)(e),[c,u]=(0,Pt.useState)(0);return(0,Pt.useEffect)((()=>{o.current!==e&&(o.current=e,u((e=>e+1)))}),[e]),(0,a.createElement)(un,{key:c,hook:o.current,search:t,setLoader:n,close:r})}function sn({isContextual:e,search:t,setLoader:n,close:r}){const{commands:o,loaders:c}=(0,_t.useSelect)((t=>{const{getCommands:n,getCommandLoaders:r}=t(cn);return{commands:n(e),loaders:r(e)}}),[e]);return o.length||c.length?(0,a.createElement)(bt.Group,null,o.map((e=>{var n;return(0,a.createElement)(bt.Item,{key:e.name,value:null!==(n=e.searchLabel)&&void 0!==n?n:e.label,onSelect:()=>e.callback({close:r}),id:e.name},(0,a.createElement)(Tt.__experimentalHStack,{alignment:"left",className:Mt()("commands-command-menu__item",{"has-icon":e.icon})},e.icon&&(0,a.createElement)(jt,{icon:e.icon}),(0,a.createElement)("span",null,(0,a.createElement)(Tt.TextHighlight,{text:e.label,highlight:t}))))})),c.map((e=>(0,a.createElement)(ln,{key:e.name,hook:e.hook,search:t,setLoader:n,close:r})))):null}function dn({isOpen:e,search:t,setSearch:n}){const r=(0,Pt.useRef)(),o=Rt((e=>e.value)),c=(0,Pt.useMemo)((()=>{const e=document.querySelector(`[cmdk-item=""][data-value="${o}"]`);return e?.getAttribute("id")}),[o]);return(0,Pt.useEffect)((()=>{e&&r.current.focus()}),[e]),(0,a.createElement)(bt.Input,{ref:r,value:t,onValueChange:n,placeholder:(0,It.__)("Search for commands"),"aria-activedescendant":c,icon:t})}function fn(){const{registerShortcut:e}=(0,_t.useDispatch)(Ft.store),[t,n]=(0,Pt.useState)(""),r=(0,_t.useSelect)((e=>e(cn).isOpen()),[]),{open:o,close:c}=(0,_t.useDispatch)(cn),[u,i]=(0,Pt.useState)({});(0,Pt.useEffect)((()=>{e({name:"core/commands",category:"global",description:(0,It.__)("Open the command palette."),keyCombination:{modifier:"primary",character:"k"}})}),[e]),(0,Ft.useShortcut)("core/commands",(e=>{e.defaultPrevented||(e.preventDefault(),r?c():o())}),{bindGlobal:!0});const l=(0,Pt.useCallback)(((e,t)=>i((n=>({...n,[e]:t})))),[]),s=()=>{n(""),c()};if(!r)return!1;const d=Object.values(u).some(Boolean);return(0,a.createElement)(Tt.Modal,{className:"commands-command-menu",overlayClassName:"commands-command-menu__overlay",onRequestClose:s,__experimentalHideHeader:!0},(0,a.createElement)("div",{className:"commands-command-menu__container"},(0,a.createElement)(bt,{label:(0,It.__)("Command palette"),onKeyDown:e=>{(e.nativeEvent.isComposing||229===e.keyCode)&&e.preventDefault()}},(0,a.createElement)("div",{className:"commands-command-menu__header"},(0,a.createElement)(jt,{icon:Ut}),(0,a.createElement)(dn,{search:t,setSearch:n,isOpen:r})),(0,a.createElement)(bt.List,null,t&&!d&&(0,a.createElement)(bt.Empty,null,(0,It.__)("No results found.")),(0,a.createElement)(sn,{search:t,setLoader:l,close:s,isContextual:!0}),t&&(0,a.createElement)(sn,{search:t,setLoader:l,close:s})))))}(0,_t.register)(cn),an(cn).registerPrivateActions(o);const mn={};function pn(e){const{registerCommand:t,unregisterCommand:n}=(0,_t.useDispatch)(cn),r=(0,Pt.useRef)(e.callback);(0,Pt.useEffect)((()=>{r.current=e.callback}),[e.callback]),(0,Pt.useEffect)((()=>(t({name:e.name,context:e.context,label:e.label,searchLabel:e.searchLabel,icon:e.icon,callback:(...e)=>r.current(...e)}),()=>{n(e.name)})),[e.name,e.label,e.searchLabel,e.icon,e.context,t,n])}function vn(e){const{registerCommandLoader:t,unregisterCommandLoader:n}=(0,_t.useDispatch)(cn);(0,Pt.useEffect)((()=>(t({name:e.name,hook:e.hook,context:e.context}),()=>{n(e.name)})),[e.name,e.hook,e.context,t,n])}on(mn,{useCommandContext:function(e){const{getContext:t}=(0,_t.useSelect)(cn),n=(0,Pt.useRef)(t()),{setContext:r}=an((0,_t.useDispatch)(cn));(0,Pt.useEffect)((()=>{r(e)}),[e,r]),(0,Pt.useEffect)((()=>{const e=n.current;return()=>r(e)}),[r])}})}(),(window.wp=window.wp||{}).commands=r}();
//# sourceMappingURL=index.min.js.map1.32-1.84a5.3 5.3 0 0 0-2.61.98V24h-2.48v-9.94h2.34v1.03a6.63 6.63 0 0 1 3.38-1.27c1.15 0 2.2.39 2.71 1.5l.3-.19c1.1-.74 2.32-1.32 3.38-1.32Zm-68.4.15c.22 0 .45.02.67.04v2.14h-.25c-1.57 0-2.51.48-3.28 1.94V24h-2.46v-9.94h2.31v1.63h.08l.1-.18a3 3 0 0 1 2.61-1.55ZM34.7 10l2.68 11.08 2.45-8.78-.65-2.3h2.81l2.79 10.72L47.57 10h2.55l-4 14h-2.95l-2.13-7.49L38.76 24H35.8L32 10h2.7Zm32.44 3.96c.22 0 .45.02.67.04v2.14h-.25c-1.57 0-2.51.48-3.28 1.94V24h-2.47v-9.94h2.3v1.64h.09v.01a3.06 3.06 0 0 1 2.94-1.75ZM86.04 10c2.99 0 5.16 1.51 5.16 4.51 0 3.01-2.17 4.62-5.16 4.62h-1.93V24h-2.64V10ZM13 4.31c-4.08 0-7.68 2.1-9.77 5.27l.76.01c1.22 0 3.11-.14 3.11-.14.63-.04.7.88.08.96h-.09c-.19.03-.7.08-1.25.1l4.25 12.67 2.56-7.67-1.82-5c-.63-.03-1.22-.1-1.22-.1-.63-.04-.56-1 .07-.96 0 0 .82.06 1.71.1l.36.02 1 .02h.17c1.22 0 2.95-.14 2.95-.14.63-.04.7.88.08.96h-.08c-.2.03-.7.08-1.26.1l4.22 12.57 1.17-3.9c.6-1.51.89-2.77.89-3.77 0-1.45-.52-2.45-.96-3.22-.6-.97-1.15-1.78-1.15-2.74 0-1.08.81-2.08 1.96-2.08l.15.01A11.64 11.64 0 0 0 13 4.31ZM74.35 15.8c-1.88 0-2.96 1.19-2.96 3.47 0 2.11.87 3.01 2.23 3.01.79 0 1.54-.4 2.34-1.13h-.01V16.1c-.5-.2-1.05-.31-1.6-.31Zm-19.52.03c-1.61 0-2.47 1.04-2.47 3.22 0 2.17.86 3.21 2.46 3.21h.16c1.44-.07 2.23-1.04 2.29-2.98v-.23c0-2.18-.84-3.22-2.44-3.22Zm92.51 0c-1.61 0-2.46 1.04-2.46 3.22 0 2.17.86 3.21 2.46 3.21h.16c1.44-.07 2.22-1.04 2.28-2.98v-.23c0-2.18-.84-3.22-2.44-3.22Zm-42.78-.14c-1.23 0-1.98.88-2.13 2.26h3.85c0-1.21-.4-2.26-1.72-2.26Zm-18.5-3.61h-1.95v5.01h1.95c1.65 0 2.38-1 2.38-2.57 0-1.56-.78-2.44-2.38-2.44Z" /></svg>											</a>
				</li>

									<li class="x-nav-item x-nav-item--wide">
						<button role="menuitem" class="x-nav-link x-link" data-dropdown-trigger="products" aria-haspopup="true" aria-expanded="false">
							Productos <span class="x-nav-link-chevron" aria-hidden="true"></span>
						</button>
					</li>
										<li class="x-nav-item x-nav-item--wide">
						<button role="menuitem" class="x-nav-link x-link" data-dropdown-trigger="features" aria-haspopup="true" aria-expanded="false">
							Funcionalidades <span class="x-nav-link-chevron" aria-hidden="true"></span>
						</button>
					</li>
										<li class="x-nav-item x-nav-item--wide">
						<button role="menuitem" class="x-nav-link x-link" data-dropdown-trigger="resources" aria-haspopup="true" aria-expanded="false">
							Recursos <span class="x-nav-link-chevron" aria-hidden="true"></span>
						</button>
					</li>
					
				<li class="x-nav-item x-nav-item--wide">
					<a role="menuitem" class="x-nav-link x-link" href="https://wordpress.com/es/pricing/">
						Planes y Precios					</a>
				</li>
			</ul>

			<ul class="x-nav-list">
									<li class="x-nav-item x-nav-item--wide">
						<a role="menuitem" class="x-nav-link x-link" href="https://wordpress.com/log-in/es">
							Iniciar sesión						</a>
					</li>
								<li class="x-nav-item x-nav-item--wide">
					<a role="menuitem" class="x-nav-link x-nav-link--primary x-link" href="https://wordpress.com/start/es">
						Comenzar					</a>
				</li>
				<li class="x-nav-item x-nav-item--narrow">
					<button role="menuitem" class="x-nav-link x-nav-link--menu x-link" aria-haspopup="true" aria-expanded="false">
						<span class="x-hidden">Menú</span>
								<span class="x-icon x-icon--menu">
			<span></span>
			<span></span>
			<span></span>
		</span>
							</button>
				</li>
			</ul>
		</nav>

				<div class="x-dropdown">
			<div class="x-dropdown-top">
				<div class="x-dropdown-top-fill"></div>
			</div>
			<div class="x-dropdown-middle"></div>
			<div class="x-dropdown-bottom">
				<div class="x-dropdown-bottom-fill"></div>
			</div>

							<div class="x-dropdown-content" data-dropdown-name="products" role="menu" aria-label="Productos" aria-hidden="true">
					<ul>
													<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/hosting/" tabindex="-1">
									Alojamiento de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/domains/" tabindex="-1">
									Dominios								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/website-builder/" tabindex="-1">
									Creador de webs								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/create-blog/" tabindex="-1">
									Crea un blog								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/newsletter/" tabindex="-1">
									Newsletter								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/professional-email/" tabindex="-1">
									Correo electrónico profesional								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/website-design-service/" tabindex="-1">
									Servicio de diseño web								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/ecommerce/" tabindex="-1">
									Commerce								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/create-a-course/" tabindex="-1">
									Creador de cursos								</a>
							</li>
														<li class="x-nav-show_separator_above">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=top_nav" tabindex="-1">
									Soluciones para empresas<span class="x-nav__external-link-icon">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="x-icon x-icon--external" role="presentation" aria-hidden="true">
			<path d="M5.5 0v1h1.795L2.38 5.915l.705.705L8 1.705V3.5h1V0H5.5zM8 8H1V1h3V0H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V5H8v3z" />
		</svg></span>
										</a>
							</li>
												</ul>
				</div>
								<div class="x-dropdown-content" data-dropdown-name="features" role="menu" aria-label="Funcionalidades" aria-hidden="true">
					<ul>
													<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/features/" tabindex="-1">
									Resumen								</a>
							</li>
														<li class="x-nav-show_separator_above">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/themes" tabindex="-1">
									Temas de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/plugins" tabindex="-1">
									Plugins de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/google/" tabindex="-1">
									Google Apps								</a>
							</li>
												</ul>
				</div>
								<div class="x-dropdown-content" data-dropdown-name="resources" role="menu" aria-label="Recursos" aria-hidden="true">
					<ul>
													<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/support/" tabindex="-1">
									Ayuda de WordPress.com								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/blog/" tabindex="-1">
									Noticias de WordPress								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/go/" tabindex="-1">
									Consejos para crear tu web								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/business-name-generator/" tabindex="-1">
									Generador de nombres de empresa								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/logo-maker/" tabindex="-1">
									Creador de logos								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/discover" tabindex="-1">
									Descubrir nuevas publicaciones								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/tags" tabindex="-1">
									Etiquetas populares								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/read/search" tabindex="-1">
									Buscar blog								</a>
							</li>
														<li class="">
								<a role="menuitem" class="x-dropdown-link x-link" href="https://wordpress.com/es/webinars/" tabindex="-1">
									Webinars diarios								</a>
							</li>
												</ul>
				</div>
						</div>
				<div class="x-menu" role="menu" aria-label="Menú de navegación de WordPress.com" aria-hidden="true">
			<div class="x-menu-overlay"></div>
			<div class="x-menu-content">
				<button class="x-menu-button x-link" tabindex="-1">
					<span class="x-hidden">Cerrar el menú de navegación</span>
					<span class="x-icon x-icon--close">
					<span></span>
					<span></span>
				</span>
				</button>
				<div class="x-menu-list">
					<div class="x-menu-list-title">
						Comenzar					</div>
					<ul class="x-menu-grid">
													<li class="x-menu-grid-item">
								<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/start/es" tabindex="-1">
									Registro <span class="x-menu-link-chevron" aria-hidden="true"></span>
								</a>
							</li>
							<li class="x-menu-grid-item">
								<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/log-in/es" tabindex="-1">
									Iniciar sesión <span class="x-menu-link-chevron" aria-hidden="true"></span>
								</a>
							</li>
											</ul>
				</div>
				<div class="x-menu-list">
					<div class="x-hidden">
						Acerca de					</div>
					<ul class="x-menu-grid">
						<li class="x-menu-grid-item">
							<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/pricing/" tabindex="-1">
								Planes y Precios							</a>
						</li>
					</ul>
				</div>

									<div class="x-menu-list">
						<div class="x-menu-list-title">
							Productos						</div>
						<ul class="x-menu-grid">
															<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/hosting/" tabindex="-1">
										Alojamiento de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/domains/" tabindex="-1">
										Dominios																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/website-builder/" tabindex="-1">
										Creador de webs																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/create-blog/" tabindex="-1">
										Crea un blog																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/newsletter/" tabindex="-1">
										Newsletter																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/professional-email/" tabindex="-1">
										Correo electrónico profesional																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/website-design-service/" tabindex="-1">
										Servicio de diseño web																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/ecommerce/" tabindex="-1">
										Commerce																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/create-a-course/" tabindex="-1">
										Creador de cursos																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=top_nav" tabindex="-1">
										Soluciones para empresas										<span class="x-nav__external-link-icon">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="x-icon x-icon--external" role="presentation" aria-hidden="true">
			<path d="M5.5 0v1h1.795L2.38 5.915l.705.705L8 1.705V3.5h1V0H5.5zM8 8H1V1h3V0H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V5H8v3z" />
		</svg></span>
											</a>
								</li>
														</ul>
					</div>
										<div class="x-menu-list">
						<div class="x-menu-list-title">
							Funcionalidades						</div>
						<ul class="x-menu-grid">
															<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/features/" tabindex="-1">
										Resumen																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/themes" tabindex="-1">
										Temas de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/plugins" tabindex="-1">
										Plugins de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/google/" tabindex="-1">
										Google Apps																			</a>
								</li>
														</ul>
					</div>
										<div class="x-menu-list">
						<div class="x-menu-list-title">
							Recursos						</div>
						<ul class="x-menu-grid">
															<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/support/" tabindex="-1">
										Ayuda de WordPress.com																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/blog/" tabindex="-1">
										Noticias de WordPress																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/go/" tabindex="-1">
										Consejos para crear tu web																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/business-name-generator/" tabindex="-1">
										Generador de nombres de empresa																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/logo-maker/" tabindex="-1">
										Creador de logos																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/discover" tabindex="-1">
										Descubrir nuevas publicaciones																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/tags" tabindex="-1">
										Etiquetas populares																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/read/search" tabindex="-1">
										Buscar blog																			</a>
								</li>
																<li class="x-menu-grid-item">
									<a role="menuitem" class="x-menu-link x-link" href="https://wordpress.com/es/webinars/" tabindex="-1">
										Webinars diarios																			</a>
								</li>
														</ul>
					</div>
									<div class="x-menu-list is-mobile-app-supported">
					<div class="x-menu-list-title">
						Aplicación de Jetpack					</div>
					<ul class="x-menu-grid">
						<li class="x-menu-grid-item is-ios">
							<a role="menuitem" class="x-menu-link x-link" href="https://apps.wordpress.com/es/get/?campaign=wpcom-log-out-home-global-nav" tabindex="-1">
								<img src="https://wpcom.files.wordpress.com/2023/06/group-1000004724.png" loading="lazy" alt="" role="presentation" width="120" height="34">
							</a>
						</li>
						<li class="x-menu-grid-item is-android">
							<a role="menuitem" class="x-menu-link x-link" href="https://apps.wordpress.com/es/get/?campaign=wpcom-log-out-home-global-nav" tabindex="-1">
								<img src="https://wpcom.files.wordpress.com/2023/06/play-store-logo.png" loading="lazy" alt="" role="presentation" width="120" height="34">
							</a>
						</li>
						<li class="x-menu-grid-item">
							<a role="menuitem" class="x-menu-link x-link" href="https://apps.wordpress.com/es/mobile" tabindex="-1">
								Más información <span class="x-menu-link-chevron" aria-hidden="true"></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
																			
<div class="lp-block lp-section lp-section-hero lp-padding-bottom-0 lp-padding-top-10 lp-padding-top-9@M is-style-gray-100-mono"><div class="lp-section__content">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-wide lp-pt-24 lp-pt-12@M">
<h1 class="wp-block-heading is-style-default is-page-header has-huge-pp-font-size">WordPress, a tu&nbsp;manera</h1>
</div>



<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-left-ppppp is-page-subheader"><div class="lp-block lp-container"><p>La mejor forma de usar WordPress: un hosting ultrarrápido, una edición flexible e intuitiva y todo lo que necesitas para hacer crecer tu web y tu audiencia.</p></div>


<div class="lp-block lp-button lpc lpc-cta-hero">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/es?ref=logged-out-homepage-lp">Empieza ahora</a></div>
</div>
</div>
</div></div>



<div class="lp-block lp-section lp-section--is-breakpoint lp-section--is-breakpoint-S lp-section--is-breakpoint-M lp-section--is-breakpoint-L lp-section-themes-collage lp-pt-72 lp-pb-0 is-style-gray-100-mono" style="margin-bottom:-1px"><div class="lp-section__content">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-full lp-themes" style="overflow:hidden">
<div class="lp-block lp-content lp-content-area--scrolling lp-margin-bottom-0" style="animation-direction:reverse">
<div class="lp-block lp-content lp-image-top-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-1-2x-2-optimized.webp" loading="eager" alt="Theme Issue" width="609" height="375" /></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-issue">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=issue&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-issue no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/issue?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-top-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-2-2x-2-optimized.webp" loading="eager" alt="Theme Covr" width="609" height="375" /></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-covr">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=covr&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-covr no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/covr?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-top-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-3-2x-3-optimized.webp" loading="eager" alt="Tema Beleco" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-beleco">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=beleco&amp;theme_type=marketplace&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-beleco no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/beleco?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-top-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-11-2x-optimized.webp" loading="eager" alt="Tema Negai" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-negai">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=negai&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-negai no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/negai?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-top-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-12-2x-optimized.webp" loading="eager" alt="Tema Organizer" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-organizer">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=organizer&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-organizer no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/organizer?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-top-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-3-2-2x-optimized.webp" loading="eager" alt="Tema Line" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-lineup">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=lineup&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-lineup no-outline ">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/lineup?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-content-area--scrolling lp-margin-bottom-0 lp-margin-top-2" style="animation-duration:80s;margin-inline-start:-304px">
<div class="lp-block lp-content lp-image-middle-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-19-2-2x-optimized.webp" loading="lazy" alt="Tema ueno" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-ueno">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=ueno&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-ueno no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/ueno?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-middle-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-4-2x-2-optimized.webp" loading="lazy" alt="Tema Freddie" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-freddie ">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=freddie&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-freddie no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/freddie?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-middle-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-5-2x-2-optimized.webp" loading="lazy" alt="Tema Ctlg" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-ctlg">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=ctlg&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-ctlg no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/ctlg?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-middle-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-6-2x-2-optimized.webp" loading="lazy" alt="Tema Luminance" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-luminance">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=luminance&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-luminance no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/luminance?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-middle-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-14-2x-optimized.webp" loading="lazy" alt="Tema Erma" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-erma">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=erma&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-erma no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/erma?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-middle-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:608px"><span class="lp-lazy-image__content" style="padding-top:calc(375/608*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-15-2x-optimized.webp" loading="lazy" alt="Tema Overlaid" width="608" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-overlaid">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=overlaid&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-overlaid no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/overlaid?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-content-area--scrolling lp-margin-top-2" style="animation-direction:reverse;animation-duration:100s">
<div class="lp-block lp-content lp-image-bottom-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-7-2x-2-optimized.webp" loading="lazy" alt="Tema Lenis" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-lenis ">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=lenis&amp;theme_type=marketplace&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-lenis no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/lenis?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-bottom-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-8-2x-2-optimized.webp" loading="lazy" alt="Tema Reverie" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-reverie">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=reverie&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-reverie no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/reverie?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-bottom-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-9-2x-2-optimized.webp" loading="lazy" alt="Tema Didone" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-didone">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=didone&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-didone no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/didone?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-bottom-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(375/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-16-2x-optimized.webp" loading="lazy" alt="Tema Jaida" width="609" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-jaida ">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=jaida&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-jaida no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/jaida?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-bottom-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:609px"><span class="lp-lazy-image__content" style="padding-top:calc(374/609*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-17-2x-optimized.webp" loading="lazy" alt="Tema Dos" width="609" height="374"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-dos">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=dos&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button lpc lpc-theme-dos no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/dos?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-image-bottom-row lp-content-area--hover-cta">
<div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:608px"><span class="lp-lazy-image__content" style="padding-top:calc(375/608*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-18-2x-optimized.webp" loading="lazy" alt="Tema Fotograma" width="608" height="375"></span></span></div></div>



<div class="lp-block lp-content lp-flex lp-flex--direction-column">
<div class="lp-block lp-button lpc lpc-theme-fotograma">
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/with-theme/es?theme=fotograma&amp;theme_type=free&amp;ref=logged-out-homepage-lp">Empieza con este tema</a></div>
</div>



<div class="lp-block lp-button  lpc lpc-theme-fotograma no-outline">
<div class="wp-block-button is-style-outline-only"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/theme/fotograma?ref=logged-out-homepage-lp">Detalles del tema</a></div>
</div>
</div>
</div>
</div>
</div>



<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-center">
<div class="lp-block lp-button lpc lpc-theme-all">
<div class="wp-block-button is-style-outline-only is-hover-white"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/themes?ref=logged-out-homepage-lp">Ver todos los temas</a></div>
</div>
</div>
</div></div>



<div class="lp-block lp-section lp-section--is-breakpoint lp-section--is-breakpoint-XS lp-section-themes-collage lp-pt-72 lp-pb-30 is-style-gray-100-mono" style="margin-bottom:-1px"><div class="lp-section__content">
<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-full lp-themes-mobile" style="overflow:hidden">
<div class="lp-block lp-content lp-content-area--scrolling lp-margin-bottom-0 lp-padding-top-3" style="animation-direction:reverse;animation-duration:30s">
<div class="lp-block lp-image lp-image-top-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(469/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-1-2x-optimized.webp" loading="eager" alt="Tema 1 para m&oacute;viles" width="228" height="469"></span></span></div></div>



<div class="lp-block lp-image lp-image-top-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:229px"><span class="lp-lazy-image__content" style="padding-top:calc(469/229*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-2-2x-optimized.webp" loading="eager" alt="Theme 4 Mobile" width="229" height="469" /></span></span></div></div>



<div class="lp-block lp-image lp-image-top-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(469/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-3-2x-optimized.webp" loading="eager" alt="Tema 2 para m&oacute;viles" width="228" height="469"></span></span></div></div>



<div class="lp-block lp-image lp-image-top-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:229px"><span class="lp-lazy-image__content" style="padding-top:calc(469/229*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-4-2x-optimized.webp" loading="eager" alt="Tema 5 para m&oacute;viles" width="229" height="469"></span></span></div></div>
</div>



<div class="lp-block lp-content lp-content-area--scrolling lp-margin-bottom-0 lp-margin-top-2" style="animation-duration:40s;margin-inline-start:-114px">
<div class="lp-block lp-image lp-image-middle-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:229px"><span class="lp-lazy-image__content" style="padding-top:calc(470/229*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-5-2x-optimized.webp" loading="lazy" alt="Tema 6 para m&oacute;viles" width="229" height="470"></span></span></div></div>



<div class="lp-block lp-image lp-image-middle-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(470/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-6-2x-optimized.webp" loading="lazy" alt="Tema 9 para m&oacute;viles" width="228" height="470"></span></span></div></div>



<div class="lp-block lp-image lp-image-middle-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(470/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-7-2x-optimized.webp" loading="lazy" alt="Tema 8 para m&oacute;viles" width="228" height="470"></span></span></div></div>



<div class="lp-block lp-image lp-image-middle-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(470/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-8-2x-optimized.webp" loading="lazy" alt="Tema 8 para m&oacute;viles" width="228" height="470"></span></span></div></div>



<div class="lp-block lp-image lp-image-middle-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(468/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-9-2x-optimized.webp" loading="lazy" alt="Tema 9 para m&oacute;viles" width="228" height="468"></span></span></div></div>
</div>



<div class="lp-block lp-content lp-content-area--scrolling lp-margin-top-2" style="animation-direction:reverse;animation-duration:50s">
<div class="lp-block lp-image lp-image-bottom-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(469/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-10-2x-optimized.webp" loading="lazy" alt="Tema 10 para m&oacute;viles" width="228" height="469"></span></span></div></div>



<div class="lp-block lp-image lp-image-bottom-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:231px"><span class="lp-lazy-image__content" style="padding-top:calc(473/231*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-11-2x-optimized.webp" loading="lazy" alt="Tema 11 para m&oacute;viles" width="231" height="473"></span></span></div></div>



<div class="lp-block lp-image lp-image-bottom-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(469/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-12-2x-optimized.webp" loading="lazy" alt="Tema 12 para m&oacute;viles" width="228" height="469"></span></span></div></div>



<div class="lp-block lp-image lp-image-bottom-row"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(469/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/theme-mobile-13-2x-optimized.webp" loading="lazy" alt="Tema 13 para m&oacute;viles" width="228" height="469"></span></span></div></div>
</div>



<div class="lp-block lp-content">
<div class="lp-block lp-button lpc lpc-theme-all">
<div class="wp-block-button is-style-outline-only is-hover-white"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/themes?ref=logged-out-homepage-lp">Ver todos los temas</a></div>
</div>
</div>
</div>
</div></div>



<div class="lp-block lp-section lp-section-tailored-flows is-style-gray-100-mono lp-pb-48 lp-pb-120@M lp-pt-30 lp-pt-144@M"><div class="lp-section__content">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-left lp-pb-72 lp-pb-48@M">
<h2 class="wp-block-heading has-huge-font-size">Da vida a cualquier proyecto con<br>WordPress.com</h2>



<p>Escribe, comparte y conecta con tu público. Enlaza, vende y muestra tu trabajo. Todo en un mismo lugar.</p>
</div>



<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-full-minus lpc lpc-flows"><div class="lp-block lp-tabbed-content lp-wrapper lp-wrapper--layout-wide">





































































<div class="lp-tabbed-content-buttons"><div class="lp-block lp-button lp-tabbed-content-button lp-margin-top-2 lp-margin-bottom-2">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/blog/es?ref=logged-out-homepage-lp">Blog</a></div>
</div><div class="lp-block lp-button lp-tabbed-content-button lp-margin-top-2 lp-margin-bottom-2">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/newsletter/?ref=logged-out-homepage-lp">Newsletter</a></div>
</div><div class="lp-block lp-button lp-tabbed-content-button lp-margin-top-2 lp-margin-bottom-2">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://w.link/?ref=logged-out-homepage-lp">Link in bio</a></div>
</div><div class="lp-block lp-button lp-tabbed-content-button lp-margin-top-2 lp-margin-bottom-2">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/videopress/es?ref=logged-out-homepage-lp">V&iacute;deo</a></div>
</div><div class="lp-block lp-button lp-tabbed-content-button lp-margin-top-2 lp-margin-bottom-2">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/ecommerce/es?recur=monthly&amp;ref=logged-out-homepage-lp">Tienda</a></div>
</div><div class="lp-block lp-button lp-tabbed-content-button lp-margin-top-2 lp-margin-bottom-2">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/sensei/es?ref=logged-out-homepage-lp">Cursos</a></div>
</div></div><div class="lp-tabbed-content-images"><div class="lp-tabbed-content-image"><div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1612px"><span class="lp-lazy-image__content" style="padding-top:calc(1000/1612*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/blog-4-2x-optimized.webp" loading="lazy" alt="Blog Theme" width="1612" height="1000"></span></span></div></div></div>

<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-XS lp-block--has-breakpoint-S lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:886px"><span class="lp-lazy-image__content" style="padding-top:calc(558/886*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/blog-4-m-2x-optimized.webp" loading="lazy" alt="Blog Theme Mobile" width="886" height="558"></span></span></div></div></div>


<div class="lp-block lp-button lp-tabbed-content-image-button lp-margin-top-2 lp-margin-bottom-2 lpc lpc-flow-blog">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/blog/es?ref=logged-out-homepage-lp">Crea tu blog</a></div>
</div>
</div><div class="lp-tabbed-content-image"><div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1612px"><span class="lp-lazy-image__content" style="padding-top:calc(1000/1612*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/newsletter-4-2x-optimized.webp" loading="lazy" alt="Tema Newsletter" width="1612" height="1000"></span></span></div></div></div>

<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-XS lp-block--has-breakpoint-S lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:886px"><span class="lp-lazy-image__content" style="padding-top:calc(558/886*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/newsletter-4-m-2x-optimized.webp" loading="lazy" alt="Tema Newsletter para m&oacute;vil" width="886" height="558"></span></span></div></div></div>


<div class="lp-block lp-button lp-tabbed-content-image-button lp-margin-top-2 lp-margin-bottom-2 lpc lpc-flow-newsletter">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/newsletter/?ref=logged-out-homepage-lp">Crea tu newsletter</a></div>
</div>
</div><div class="lp-tabbed-content-image"><div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1612px"><span class="lp-lazy-image__content" style="padding-top:calc(1000/1612*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/link-in-bio-4-2x-optimized.webp" loading="lazy" alt="Tema Link in bio" width="1612" height="1000"></span></span></div></div></div>

<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-XS lp-block--has-breakpoint-S lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:886px"><span class="lp-lazy-image__content" style="padding-top:calc(558/886*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/link-in-bio-4-m-2x-optimized.webp" loading="lazy" alt="Tema Link in bio para m&oacute;vil" width="886" height="558"></span></span></div></div></div>


<div class="lp-block lp-button lp-tabbed-content-image-button lp-margin-top-2 lp-margin-bottom-2 lpc lpc-flow-link-in-bio">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://w.link/?ref=logged-out-homepage-lp">Crea tu link in bio</a></div>
</div>
</div><div class="lp-tabbed-content-image"><div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1612px"><span class="lp-lazy-image__content" style="padding-top:calc(1000/1612*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/video-4-2x-optimized.webp" loading="lazy" alt="Tema Video" width="1612" height="1000"></span></span></div></div></div>

<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-XS lp-block--has-breakpoint-S lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:886px"><span class="lp-lazy-image__content" style="padding-top:calc(558/886*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/video-4-m-2x-optimized.webp" loading="lazy" alt="Tema Video para m&oacute;vil" width="886" height="558"></span></span></div></div></div>


<div class="lp-block lp-button lp-tabbed-content-image-button lp-margin-top-2 lp-margin-bottom-2 lpc lpc-flow-video">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/videopress/es?ref=logged-out-homepage-lp">Crea tu web de v&iacute;deos</a></div>
</div>
</div><div class="lp-tabbed-content-image"><div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1612px"><span class="lp-lazy-image__content" style="padding-top:calc(1000/1612*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/store-4-2x-optimized.webp" loading="lazy" alt="Tema Tienda" width="1612" height="1000"></span></span></div></div></div>

<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-XS lp-block--has-breakpoint-S lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:886px"><span class="lp-lazy-image__content" style="padding-top:calc(558/886*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/store-4-m-2x-optimized.webp" loading="lazy" alt="Tema Store para m&oacute;vil" width="886" height="558"></span></span></div></div></div>


<div class="lp-block lp-button lp-tabbed-content-image-button lp-margin-top-2 lp-margin-bottom-2 lpc lpc-flow-commerce">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/ecommerce/es?recur=monthly&amp;ref=logged-out-homepage-lp">Crea tu tienda</a></div>
</div>
</div><div class="lp-tabbed-content-image"><div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1612px"><span class="lp-lazy-image__content" style="padding-top:calc(1000/1612*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/course-4-2x-1-optimized.webp" loading="lazy" alt="Tema Curso" width="1612" height="1000"></span></span></div></div></div>

<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-XS lp-block--has-breakpoint-S lp-container"><div class="lp-block lp-image lp-image--align-left"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:886px"><span class="lp-lazy-image__content" style="padding-top:calc(558/886*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/course-4-m-2x-1-optimized.webp" loading="lazy" alt="Tema Course para m&oacute;vil" width="886" height="558"></span></span></div></div></div>


<div class="lp-block lp-button lp-tabbed-content-image-button lp-margin-top-2 lp-margin-bottom-2 lpc lpc-flow-course">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/setup/sensei/es?ref=logged-out-homepage-lp">Crea tu web de cursos</a></div>
</div>
</div></div></div>
</div>
</div></div>



<div class="lp-block lp-section lp-section-domains lp-pb-48 lp-pb-120@M lp-pt-48 lp-pt-96@M is-style-gray-0-mono" style="background:#F6F7F7"><div class="lp-section__content">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-left-ppppp">
<h2 class="wp-block-heading has-huge-font-size">Hazte con tu pedacito de Internet</h2>
</div>



<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-left-p lp-pb-24">
<p>Consigue el dominio perfecto, tengas o no una web, a un precio inmejorable. Encontrarás las extensiones más habituales (.com, .org y .net) desde solo <span class="lp-product-price lp-product-price--domain_reg lp-product-price-options--hide-period-string lp-product-price-options--hide-null-decimals"></span> al año. Fácil de recordar. Fácil de compartir. Espectacular.</p>
</div>



<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-wide">
<div class="lp-block lp-form-typed">
<form class="lp-block lp-form" action="https://wordpress.com/start/domain/domain-only/es" method="GET" target="_blank"><div class="lp-form__content">
<div class="lp-block lp-form-typed-field"><div class="lp-block lp-form-field"><input class="lp-form-field__content" type="search" name="new" required="" autocomplete="off" maxlength="60" autocapitalize="none"></div>



<div class="lp-block lp-typed" role="presentation" aria-hidden="true"><div class="lp-typed__content"><pre class="lp-typed__content__data">gluten-free-gutenberg.com
pool-request.com
ssh-pls.com
hash-salts-bbq-malts.com
splash-cache.com
blue-sky-api.com
java-script-coffee-sip.com
upload-down-code.com
browser-powder.com
install-de-stijl.com
full-stack-lipstick.com
artificial-eloquence.com
electric-utopia.com
machine-kerning.com
open-sauce.com
web-three-one-four.com
four-oh-four.com
place-hodler.com</pre><span class="lp-typed__content__indicator"></span></div></div>
</div>



<div class="lp-block lp-button lp-form-button lpc lpc-cta-domains"><button type="submit">Encuentra tu dominio</button></div>
<input type="hidden" name="search" value="yes" /></div></form>
</div>
</div>
</div></div>



<div class="lp-block lp-section lp-section--has-background lp-section-hosting lp-pt-48 lp-pt-144@M lp-pb-48 lp-pb-120@M is-style-gray-90-mono" style="--lp-position-x:100%;--lp-position-y:-3%;background:#181c1f;--lp-size:fit"><div class="lp-section__background lp-section__background--has-image lp-section__background--name-image-full"><div class="lp-section__background-layer" style="background-image:url(https://s1.wp.com/wp-content/themes/h4/assets/hosting/globe.svg)"></div></div><div class="lp-section__content">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-wide">
<h2 class="wp-block-heading has-huge-font-size">Confía en el mejor hosting</h2>
</div>



<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-wrapper lp-wrapper--layout-left lp-pb-30 lp-pb-12@M">
<p>Cuando creas una web con WordPress.com, tienes en tus manos toda la potencia, velocidad y seguridad de un hosting gestionado especialmente diseñado para WordPress.</p>



<div class="lp-block lp-button lpc lpc-cta-hosting">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/hosting/?ref=logged-out-homepage-lp">Descubre nuestro hosting</a></div>
</div>
</div>



<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-wide lp-hosting-content lp-grid lp-grid--columns-1@XS lp-grid--columns-2@S lp-grid--columns-4@L lp-grid--gutter-3 lp-pt-30@S" style="gap:var(--lp-pad-3);--lp-icon-background:#000"><section class="lp-block lp-card lp-pb-18" style="background: var(--studio-blue-80); border: none; --lp-icon-background: var(--studio-blue-90)"><div class="lp-block lp-icons lp-icons--align-left lp-icons--size-36 lp-margin-bottom-3 is-style-icons-bullets" aria-hidden="true"><div class="lp-icons__content"><div class="lp-block lp-icon-svg" data-name="@wordpress/icons/trendingUp"><div class="lp-icon-svg__content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3.445 16.505a.75.75 0 001.06.05l5.005-4.55 4.024 3.521 4.716-4.715V14h1.5V8.25H14v1.5h3.19l-3.724 3.723L9.49 9.995l-5.995 5.45a.75.75 0 00-.05 1.06z"></path></svg></div></div></div></div>


<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left">
<h2 class="wp-block-heading lp-text-32 is-style-heading-body has-normal-font-size">Capacidad de crecimiento</h2>



<p>Tu web escalará contigo gracias al ancho de banda ilimitado incluido en todos los planes. Sin tiempo de inactividad. Sin límites.</p>
</div></section>

<section class="lp-block lp-card lp-pb-18" style="background: var(--studio-blue-80); border: none; --lp-icon-background: var(--studio-blue-90)"><div class="lp-block lp-icons lp-icons--align-left lp-icons--size-36 lp-margin-bottom-3 is-style-icons-bullets" aria-hidden="true"><div class="lp-icons__content"><div class="lp-block lp-icon-svg" data-name="@wordpress/icons/shield"><div class="lp-icon-svg__content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></div></div></div>


<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left">
<h2 class="wp-block-heading is-style-heading-body has-normal-font-size">Realmente seguro</h2>



<p>Con cortafuegos, cifrado y protección DDoS y contra ataques de fuerza bruta. La seguridad está garantizada.</p>
</div></section>

<section class="lp-block lp-card lp-pb-18" style="background: var(--studio-blue-80); border: none; padding-right: 20px; --lp-icon-background: var(--studio-blue-90)"><div class="lp-block lp-icons lp-icons--align-left lp-icons--size-36 lp-margin-bottom-3 is-style-icons-bullets" aria-hidden="true"><div class="lp-icons__content"><div class="lp-block lp-icon-svg" data-name="@wordpress/icons/globe"><div class="lp-icon-svg__content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"></path></svg></div></div></div></div>


<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left">
<h2 class="wp-block-heading is-style-heading-body has-normal-font-size">Sin fronteras</h2>



<p>Nuestra CDN global garantiza una transferencia de datos y un rendimiento ultrarrápidos, estén donde estén tus visitantes.</p>
</div></section>

<section class="lp-block lp-card lp-pb-18" style="background: var(--studio-blue-80); border: none; --lp-icon-background: var(--studio-blue-90)"><div class="lp-block lp-icons lp-icons--align-left lp-icons--size-36 lp-margin-bottom-3 is-style-icons-bullets" aria-hidden="true"><div class="lp-icons__content"><div class="lp-block lp-icon-svg" data-name="@wordpress/icons/cloud"><div class="lp-icon-svg__content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"></path></svg></div></div></div></div>


<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left">
<h2 class="wp-block-heading is-style-heading-body has-normal-font-size">Almacenamiento flexible</h2>



<p>Con los planes de WordPress.com, nunca te quedarás sin almacenamiento. Fotos, audio y vídeos en 4K. Todo en un mismo lugar.</p>
</div></section></div>
</div></div>



<div class="lp-block lp-section lp-section-pricing is-style-white-gray-mono lp-pt-120 lp-pb-96@M"><div class="lp-section__content">
<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-wide">
<h2 class="wp-block-heading lp-margin-bottom-0 has-grand-font-size">Tenemos el plan ideal para ti</h2>
</div>


		<div class="lp-section-2023-pricing-grid lp-text-center">
			<h2 class="lp-hidden">Planes de WordPress.com</h2>
						<div class="lpc-toggle-wrapper show-annual" data-discount-tooltip-template="Ahorra hasta un %s % pagando anualmente y consigue un dominio gratis durante un año">
				<button option="show-monthly" class="lpc-toggle-option">
					Pago mensual				</button>
				<button option="show-annual" class="lpc-toggle-option" selected>
					Pago anual				</button>
			</div>
			<section class="lp-block lp-section is-style-white-gray-mono lp-pt-48 lp-pt-72@L">
				<section class="lp-section__wrapper">
					<div class="lp-plan__grids" style="max-width:1482px">
						<div class="lp-plan__grid lp-text-left">
									<div
			class="lp-plan-tile lp-plan-tile--name-free  lp-text-14 ">
			<header class="lp-plan-tile__header lp-plan--row-1 lp-pt-36 lp-pl-18">
								<div class="lp-plan-tile__header-icon lp-plan-tile__tooltip-trigger">
									</div>
				<h2 class="lp-plan-tile__title lp-text-brand lp-text-32">
					Gratis				</h2>
			</header>
											<div
					data-lp-editable="cta-plan-description-free"
					class="lp-plan-tile__subtitle lp-plan--row-2 lp-text-16 lp-text-14@M lp-text-12@L lp-pt-8 lp-pr-18 lp-pb-18 lp-pb-9@L lp-pl-18"
				>
					Descubre el CMS y las herramientas de blogging más populares del mundo.				</div>
			
			<div class="lp-plan--align-top lp-plan-tile__price-wrapper lp-plan--row-3 lp-pl-18 lp-pb-6 lp-pb-0@M">
							<div
					class="lp-plan-tile__price price-free-plan lp-plan-tile__price--free lp-text-brand">
					<span data-cta-price="lp-cta-price-free-annual" class="lp-plan-tile__price-html is-annual">
						<span><sup>$</sup></span>
					</span>
					<span data-cta-price="lp-cta-price-free-monthly" class="lp-plan-tile__price-html is-monthly">
						<span><sup>$</sup>0</span>
					</span>
				</div>
														<span
					data-plan-timeframe=""
					data-plan-timeframe-intro=""
					data-plan-timeframe-intro-label=""
					data-plan-timeframe-slug="free"
										class="lp-plan-tile__price-details lp-display-block lp-text-13 is-annual lp-pr-6">
					Sin fecha de caducidad				</span>

				<span
					data-plan-timeframe=""
					data-plan-timeframe-slug="free"
										class="lp-plan-tile__price-details lp-plan-tile__price-details--monthly lp-display-block lp-text-13 is-monthly lp-pr-6">
					Sin fecha de caducidad				</span>
									</div>
			<div class="lp-plan--row-4 lp-plan-tile__button is-pinnable lp-pt-18 lp-pb-18 lp-pr-18 lp-pl-18 has-small-font-size">
				<div class="lp-button is-annual">
										<a
						data-lp-editable="cta-plan-annual-free"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-free-annual"
						href="https://wordpress.com/setup/free/es?ref=logged-out-homepage-lp">
						Empezar con Gratis					</a>
				</div>
								<div class="lp-button is-monthly">
										<a
						data-lp-editable="cta-plan-monthly-free"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-free-monthly"
						href="https://wordpress.com/setup/free/es?ref=logged-out-homepage-lp">
						Empezar con Gratis					</a>
				</div>
							</div>

										<div class="lp-plan--row-5 lp-plan-tile__features-header lp-bold lp-text-12 lp-pb-12 lp-pl-18 lp-pt-18 lp-plan--show-tablet">
									</div>
				<div class="lp-plan-tile__feature-toggle lp-bold lp-text-14 lp-pb-24 lp-pl-18 lp-pr-18 lp-pt-12 lp-plan--show-mobile">
					<button>
						<span class="lp-plan-tile__feature-toggle-active">
							Oculta las funciones						</span>
						<span class="lp-plan-tile__feature-toggle-inactive">
							Ver todas las características						</span>
						<svg class="gridicon gridicons-chevron-down" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path></g></svg>
					</button>
				</div>
									<ul
				data-lp-editable="cta-plan-features-free"
				class="lp-plan--row-6 lp-plan-tile__feature-collapsible lp-plan-tile__features lp-pb-18 lp-pl-18 lp-pr-18 lp-text-14 lp-text-12@M lp-flex-item--grow  ">
							<li class="lp-plan-tile__features-header lp-bold lp-plan--show-mobile">
							</li>
															<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Atractivos temas y patrones</span>
					<span class="is-monthly  ">Atractivos temas y patrones</span>
					
		<span class="lp-plan-tile__tooltip">
			Transforma el aspecto de tu sitio con temas y diseños fáciles de configurar.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Páginas ilimitadas</span>
					<span class="is-monthly  ">Páginas ilimitadas</span>
					
		<span class="lp-plan-tile__tooltip">
			Añade tantas páginas como quieras a tu sitio.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Usuarios ilimitados</span>
					<span class="is-monthly  ">Usuarios ilimitados</span>
					
		<span class="lp-plan-tile__tooltip">
			Invita a otros usuarios a que colaboren en tu sitio y asigna permisos de acceso.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Historial de cambios en las entradas</span>
					<span class="is-monthly  ">Historial de cambios en las entradas</span>
					
		<span class="lp-plan-tile__tooltip">
			Revierte tus entradas a una versión anterior gracias al historial de revisiones integrado.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Newsletter y RSS integrados</span>
					<span class="is-monthly  ">Newsletter y RSS integrados</span>
					
		<span class="lp-plan-tile__tooltip">
			Permite que tus seguidores se suscriban a tu contenido por newsletter o RSS.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Protección contra ataques de fuerza bruta</span>
					<span class="is-monthly  ">Protección contra ataques de fuerza bruta</span>
					
		<span class="lp-plan-tile__tooltip">
			Protege la contraseña de tu cuenta frente a ataques de fuerza bruta.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Redirecciones inteligentes</span>
					<span class="is-monthly  ">Redirecciones inteligentes</span>
					
		<span class="lp-plan-tile__tooltip">
			Redirecciones automáticas al modificar la URL de una entrada o página.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">Siempre online</span>
					<span class="is-monthly  ">Siempre online</span>
					
		<span class="lp-plan-tile__tooltip">
			Crea tu sitio y ten la confianza de que está diseñado para perdurar.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  ">
					<span class="is-annual">10 % de comisión (más la tasa estándar de procesamiento) para pagos</span>
					<span class="is-monthly  ">10 % de comisión (más la tasa estándar de procesamiento) para pagos</span>
									</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Suscriptores de pago</span>
					<span class="is-monthly  ">Suscriptores de pago</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue que tus visitantes se suscriban a tu sitio con las herramientas de suscripción integradas.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Contenido exclusivo de pago</span>
					<span class="is-monthly  ">Contenido exclusivo de pago</span>
					
		<span class="lp-plan-tile__tooltip">
			Vende acceso a contenido premium desde tu sitio.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Donaciones y propinas</span>
					<span class="is-monthly  ">Donaciones y propinas</span>
					
		<span class="lp-plan-tile__tooltip">
			Deja que público apoye tu trabajo fácilmente con donaciones y propinas.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Botones de pago</span>
					<span class="is-monthly  ">Botones de pago</span>
					
		<span class="lp-plan-tile__tooltip">
			Recibe pagos con tarjeta de crédito o débito de forma segura desde cualquier lugar con Stripe.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Estadísticas de visitantes</span>
					<span class="is-monthly  ">Estadísticas de visitantes</span>
					
		<span class="lp-plan-tile__tooltip">
			Consulta tus datos de un vistazo y desglósalos detalladamente para estar al tanto del éxito de tu sitio.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Protección contra spam de Akismet</span>
					<span class="is-monthly  ">Protección contra spam de Akismet</span>
					
		<span class="lp-plan-tile__tooltip">
			Deshazte de los comentarios de spam sin mover un dedo.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Publicaciones compartidas automáticamente en redes sociales limitadas</span>
					<span class="is-monthly  ">Publicaciones compartidas automáticamente en redes sociales limitadas</span>
					
		<span class="lp-plan-tile__tooltip">
			30 publicaciones compartidas al mes para promocionar tus entradas en Facebook, Tumblr, etc.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--free  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Formularios de contacto</span>
					<span class="is-monthly  ">Formularios de contacto</span>
					
		<span class="lp-plan-tile__tooltip">
			Ayuda a tus visitantes a ponerse en contacto contigo directamente desde tu sitio.		</span>
						</li>
										<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__icon--jetpack">
			
		<span class="lp-plan-tile__tooltip">
			Herramientas de seguridad, rendimiento y crecimiento. Con la tecnología de Jetpack.		</span>
				</li>
					</ul>

			<div class="lp-plan--row-7 lp-plan-tile__feature-collapsible lp-plan-tile__storages lp-pb-18 lp-pl-18">
							<p class="lp-plan-tile__storages-title">Almacenamiento</p>
									<span class="lp-plan-tile__storage">
						1 GB					</span>
										</div>
		</div>
				<div
			class="lp-plan-tile lp-plan-tile--name-personal  lp-text-14 ">
			<header class="lp-plan-tile__header lp-plan--row-1 lp-pt-36 lp-pl-18">
								<div class="lp-plan-tile__header-icon lp-plan-tile__tooltip-trigger">
									</div>
				<h2 class="lp-plan-tile__title lp-text-brand lp-text-32">
					Starter				</h2>
			</header>
											<div
					data-lp-editable="cta-plan-description-personal"
					class="lp-plan-tile__subtitle lp-plan--row-2 lp-text-16 lp-text-14@M lp-text-12@L lp-pt-8 lp-pr-18 lp-pb-18 lp-pb-9@L lp-pl-18"
				>
					Dale forma a tu hogar en la red con un dominio personalizado.				</div>
			
			<div class="lp-plan--align-top lp-plan-tile__price-wrapper lp-plan--row-3 lp-pl-18 lp-pb-6 lp-pb-0@M">
							<div
					class="lp-plan-tile__price price-personal-plan lp-plan-tile__price--personal lp-text-brand">
					<span data-cta-price="lp-cta-price-personal-annual" class="lp-plan-tile__price-html is-annual">
						<span><sup>$</sup></span>
					</span>
					<span data-cta-price="lp-cta-price-personal-monthly" class="lp-plan-tile__price-html is-monthly">
						<span><sup>$</sup>9</span>
					</span>
				</div>
														<span
					data-plan-timeframe="al mes, se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro="al mes, el primer año, luego se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro-label="Oferta por tiempo limitado"
					data-plan-timeframe-slug="personal"
										class="lp-plan-tile__price-details lp-display-block lp-text-13 is-annual lp-pr-6">
					al mes, con facturación anual				</span>

				<span
					data-plan-timeframe="Ahorra un %s % con la facturación anual"
					data-plan-timeframe-slug="personal"
										class="lp-plan-tile__price-details lp-plan-tile__price-details--monthly lp-display-block lp-text-13 is-monthly lp-pr-6">
					al mes, con facturación anual				</span>
										<p class="lp-plan--show-mobile lp-bold lp-pt-24 is-annual">
					Dominio gratuito durante el primer año				</p>
										</div>
			<div class="lp-plan--row-4 lp-plan-tile__button is-pinnable lp-pt-18 lp-pb-18 lp-pr-18 lp-pl-18 has-small-font-size">
				<div class="lp-button is-annual">
										<a
						data-lp-editable="cta-plan-annual-personal"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-personal-annual"
						href="https://wordpress.com/start/personal/es?ref=logged-out-homepage-lp">
						Elegir Starter					</a>
				</div>
								<div class="lp-button is-monthly">
										<a
						data-lp-editable="cta-plan-monthly-personal"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-personal-monthly"
						href="https://wordpress.com/start/personal-monthly/es?ref=logged-out-homepage-lp">
						Elegir Starter					</a>
				</div>
							</div>

										<div class="lp-plan--row-5 lp-plan-tile__features-header lp-bold lp-text-12 lp-pb-12 lp-pl-18 lp-pt-18 lp-plan--show-tablet">
					Todo lo del plan Gratis, y además:				</div>
				<div class="lp-plan-tile__feature-toggle lp-bold lp-text-14 lp-pb-24 lp-pl-18 lp-pr-18 lp-pt-12 lp-plan--show-mobile">
					<button>
						<span class="lp-plan-tile__feature-toggle-active">
							Oculta las funciones						</span>
						<span class="lp-plan-tile__feature-toggle-inactive">
							Ver todas las características						</span>
						<svg class="gridicon gridicons-chevron-down" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path></g></svg>
					</button>
				</div>
									<ul
				data-lp-editable="cta-plan-features-personal"
				class="lp-plan--row-6 lp-plan-tile__feature-collapsible lp-plan-tile__features lp-pb-18 lp-pl-18 lp-pr-18 lp-text-14 lp-text-12@M lp-flex-item--grow  ">
							<li class="lp-plan-tile__features-header lp-bold lp-plan--show-mobile">
				Todo lo del plan Gratis, y además:			</li>
															<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--personal lp-bold ">
					<span class="is-annual">Dominio gratuito durante el primer año</span>
					<span class="is-monthly lp-strikethrough ">Dominio gratuito durante el primer año</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue un dominio personalizado gratis durante el primer año (p. ej., <i>tudominioguay.com</i>).		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--personal  ">
					<span class="is-annual">Sin anuncios</span>
					<span class="is-monthly  ">Sin anuncios</span>
					
		<span class="lp-plan-tile__tooltip">
			Ofrece a los usuarios que visitan tu sitio una experiencia de navegación clara y sin anuncios.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--personal  ">
					<span class="is-annual">DNS superrápido con SSL</span>
					<span class="is-monthly  ">DNS superrápido con SSL</span>
					
		<span class="lp-plan-tile__tooltip">
			Disfruta de una gestión de dominio fiable y rápida gracias al protocolo de seguridad SSL.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--personal  ">
					<span class="is-annual">Servicio de soporte por correo electrónico</span>
					<span class="is-monthly  ">Servicio de soporte por correo electrónico</span>
					
		<span class="lp-plan-tile__tooltip">
			Servicio de atención al cliente rápido y de confianza por expertos en WordPress. Siempre que lo necesites.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--personal  ">
					<span class="is-annual">8 % de comisión (más la tasa estándar de procesamiento) para pagos</span>
					<span class="is-monthly  ">8 % de comisión (más la tasa estándar de procesamiento) para pagos</span>
									</li>
										<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__icon--jetpack">
			
		<span class="lp-plan-tile__tooltip">
			Herramientas de seguridad, rendimiento y crecimiento. Con la tecnología de Jetpack.		</span>
				</li>
					</ul>

			<div class="lp-plan--row-7 lp-plan-tile__feature-collapsible lp-plan-tile__storages lp-pb-18 lp-pl-18">
							<p class="lp-plan-tile__storages-title">Almacenamiento</p>
									<span class="lp-plan-tile__storage">
						6 GB					</span>
										</div>
		</div>
				<div
			class="lp-plan-tile lp-plan-tile--name-premium lp-plan-tile--is-featured lp-text-14 ">
			<header class="lp-plan-tile__header lp-plan--row-1 lp-pt-36 lp-pl-18">
									<div class="lp-plan-tile__badge" title="Popular">
						Popular					</div>
								<div class="lp-plan-tile__header-icon lp-plan-tile__tooltip-trigger">
									</div>
				<h2 class="lp-plan-tile__title lp-text-brand lp-text-32">
					Explorer				</h2>
			</header>
											<div
					data-lp-editable="cta-plan-description-premium"
					class="lp-plan-tile__subtitle lp-plan--row-2 lp-text-16 lp-text-14@M lp-text-12@L lp-pt-8 lp-pr-18 lp-pb-18 lp-pb-9@L lp-pl-18"
				>
					Crea una página web única con nuestras potentes herramientas de diseño.				</div>
			
			<div class="lp-plan--align-top lp-plan-tile__price-wrapper lp-plan--row-3 lp-pl-18 lp-pb-6 lp-pb-0@M">
							<div
					class="lp-plan-tile__price price-premium-plan lp-plan-tile__price--premium lp-text-brand">
					<span data-cta-price="lp-cta-price-premium-annual" class="lp-plan-tile__price-html is-annual">
						<span><sup>$</sup></span>
					</span>
					<span data-cta-price="lp-cta-price-premium-monthly" class="lp-plan-tile__price-html is-monthly">
						<span><sup>$</sup>18</span>
					</span>
				</div>
														<span
					data-plan-timeframe="al mes, se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro="al mes, el primer año, luego se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro-label="Oferta por tiempo limitado"
					data-plan-timeframe-slug="premium"
										class="lp-plan-tile__price-details lp-display-block lp-text-13 is-annual lp-pr-6">
					al mes, con facturación anual				</span>

				<span
					data-plan-timeframe="Ahorra un %s % con la facturación anual"
					data-plan-timeframe-slug="premium"
										class="lp-plan-tile__price-details lp-plan-tile__price-details--monthly lp-display-block lp-text-13 is-monthly lp-pr-6">
					al mes, con facturación anual				</span>
										<p class="lp-plan--show-mobile lp-bold lp-pt-24 is-annual">
					Dominio gratuito durante el primer año				</p>
										</div>
			<div class="lp-plan--row-4 lp-plan-tile__button is-pinnable lp-pt-18 lp-pb-18 lp-pr-18 lp-pl-18 has-small-font-size">
				<div class="lp-button is-annual">
										<a
						data-lp-editable="cta-plan-annual-premium"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-premium-annual"
						href="https://wordpress.com/start/premium/es?ref=logged-out-homepage-lp">
						Elegir Explorer					</a>
				</div>
								<div class="lp-button is-monthly">
										<a
						data-lp-editable="cta-plan-monthly-premium"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-premium-monthly"
						href="https://wordpress.com/start/premium-monthly/es?ref=logged-out-homepage-lp">
						Elegir Explorer					</a>
				</div>
							</div>

										<div class="lp-plan--row-5 lp-plan-tile__features-header lp-bold lp-text-12 lp-pb-12 lp-pl-18 lp-pt-18 lp-plan--show-tablet">
					Todo lo del plan Starter, y además:				</div>
				<div class="lp-plan-tile__feature-toggle lp-bold lp-text-14 lp-pb-24 lp-pl-18 lp-pr-18 lp-pt-12 lp-plan--show-mobile">
					<button>
						<span class="lp-plan-tile__feature-toggle-active">
							Oculta las funciones						</span>
						<span class="lp-plan-tile__feature-toggle-inactive">
							Ver todas las características						</span>
						<svg class="gridicon gridicons-chevron-down" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path></g></svg>
					</button>
				</div>
									<ul
				data-lp-editable="cta-plan-features-premium"
				class="lp-plan--row-6 lp-plan-tile__feature-collapsible lp-plan-tile__features lp-pb-18 lp-pl-18 lp-pr-18 lp-text-14 lp-text-12@M lp-flex-item--grow  ">
							<li class="lp-plan-tile__features-header lp-bold lp-plan--show-mobile">
				Todo lo del plan Starter, y además:			</li>
															<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium lp-bold ">
					<span class="is-annual">Dominio gratuito durante el primer año</span>
					<span class="is-monthly lp-strikethrough ">Dominio gratuito durante el primer año</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue un dominio personalizado gratis durante el primer año (p. ej., <i>tudominioguay.com</i>).		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  ">
					<span class="is-annual">Servicio de atención al cliente por chat</span>
					<span class="is-monthly lp-strikethrough ">Servicio de atención al cliente por chat</span>
					
		<span class="lp-plan-tile__tooltip">
			Nuestros profesionales expertos en WordPress ofrecen asistencia y consejos en tiempo real.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  ">
					<span class="is-annual">Temas premium</span>
					<span class="is-monthly  ">Temas premium</span>
					
		<span class="lp-plan-tile__tooltip">
			Escoge entre una amplia gama de temas de diseño premium.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  ">
					<span class="is-annual">Ingresos con WordAds</span>
					<span class="is-monthly  ">Ingresos con WordAds</span>
					
		<span class="lp-plan-tile__tooltip">
			Muestra anuncios y consigue ingresos a través de redes premium con el programa WordAds.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  ">
					<span class="is-annual">Personalización de estilos</span>
					<span class="is-monthly  ">Personalización de estilos</span>
					
		<span class="lp-plan-tile__tooltip">
			Controla las tipografías, los colores y todos los detalles del diseño de tu sitio.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  ">
					<span class="is-annual">4 % de comisión (más la tasa estándar de procesamiento) para pagos</span>
					<span class="is-monthly  ">4 % de comisión (más la tasa estándar de procesamiento) para pagos</span>
									</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Vídeos 4k con VideoPress</span>
					<span class="is-monthly  ">Vídeos 4k con VideoPress</span>
					
		<span class="lp-plan-tile__tooltip">
			Presenta vídeos espectaculares con el reproductor 4K de VideoPress.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Publicaciones compartidas automáticamente en redes sociales ilimitadas</span>
					<span class="is-monthly  ">Publicaciones compartidas automáticamente en redes sociales ilimitadas</span>
					
		<span class="lp-plan-tile__tooltip">
			Comparte tus últimas entradas en tus redes sociales, sin límites.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--premium  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Registro de actividad del sitio</span>
					<span class="is-monthly  ">Registro de actividad del sitio</span>
					
		<span class="lp-plan-tile__tooltip">
			No pierdas de vista la actividad de tu sitio.		</span>
						</li>
										<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__icon--jetpack">
			
		<span class="lp-plan-tile__tooltip">
			Herramientas de seguridad, rendimiento y crecimiento. Con la tecnología de Jetpack.		</span>
				</li>
					</ul>

			<div class="lp-plan--row-7 lp-plan-tile__feature-collapsible lp-plan-tile__storages lp-pb-18 lp-pl-18">
							<p class="lp-plan-tile__storages-title">Almacenamiento</p>
									<span class="lp-plan-tile__storage">
						13 GB					</span>
										</div>
		</div>
											</div>
									<div class="lp-plan__grid lp-text-left">
											<div
			class="lp-plan-tile lp-plan-tile--name-business lp-plan-tile--is-featured lp-text-14 ">
			<header class="lp-plan-tile__header lp-plan--row-1 lp-pt-36 lp-pl-18">
									<div class="lp-plan-tile__badge" title="Ideal para desarrolladores">
						Ideal para desarrolladores					</div>
								<div class="lp-plan-tile__header-icon lp-plan-tile__tooltip-trigger">
											<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-business/media/cloud-logo.svg" alt="WordPress.com Creator"/>
						
		<span class="lp-plan-tile__tooltip">
			WP Cloud proporciona las herramientas necesarias para un hosting de WordPress superrápido, escalable y con gran disponibilidad.		</span>
											</div>
				<h2 class="lp-plan-tile__title lp-text-brand lp-text-32">
					Creator				</h2>
			</header>
											<div
					data-lp-editable="cta-plan-description-business"
					class="lp-plan-tile__subtitle lp-plan--row-2 lp-text-16 lp-text-14@M lp-text-12@L lp-pt-8 lp-pr-18 lp-pb-18 lp-pb-9@L lp-pl-18"
				>
					Desata todo el potencial de WordPress con plugins y herramientas en la nube.				</div>
			
			<div class="lp-plan--align-top lp-plan-tile__price-wrapper lp-plan--row-3 lp-pl-18 lp-pb-6 lp-pb-0@M">
							<div
					class="lp-plan-tile__price price-business-plan lp-plan-tile__price--business lp-text-brand">
					<span data-cta-price="lp-cta-price-business-annual" class="lp-plan-tile__price-html is-annual">
						<span><sup>$</sup></span>
					</span>
					<span data-cta-price="lp-cta-price-business-monthly" class="lp-plan-tile__price-html is-monthly">
						<span><sup>$</sup>40</span>
					</span>
				</div>
														<span
					data-plan-timeframe="al mes, se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro="al mes, el primer año, luego se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro-label="Oferta por tiempo limitado"
					data-plan-timeframe-slug="business"
										class="lp-plan-tile__price-details lp-display-block lp-text-13 is-annual lp-pr-6">
					al mes, con facturación anual				</span>

				<span
					data-plan-timeframe="Ahorra un %s % con la facturación anual"
					data-plan-timeframe-slug="business"
										class="lp-plan-tile__price-details lp-plan-tile__price-details--monthly lp-display-block lp-text-13 is-monthly lp-pr-6">
					al mes, con facturación anual				</span>
										<p class="lp-plan--show-mobile lp-bold lp-pt-24 is-annual">
					Dominio gratuito durante el primer año				</p>
										</div>
			<div class="lp-plan--row-4 lp-plan-tile__button is-pinnable lp-pt-18 lp-pb-18 lp-pr-18 lp-pl-18 has-small-font-size">
				<div class="lp-button is-annual">
										<a
						data-lp-editable="cta-plan-annual-business"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-business-annual"
						href="https://wordpress.com/start/business/es?ref=logged-out-homepage-lp">
						Elegir Creator					</a>
				</div>
								<div class="lp-button is-monthly">
										<a
						data-lp-editable="cta-plan-monthly-business"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-business-monthly"
						href="https://wordpress.com/start/business-monthly/es?ref=logged-out-homepage-lp">
						Elegir Creator					</a>
				</div>
							</div>

										<div class="lp-plan--row-5 lp-plan-tile__features-header lp-bold lp-text-12 lp-pb-12 lp-pl-18 lp-pt-18 lp-plan--show-tablet">
					Todo lo del plan Explorer, y además:				</div>
				<div class="lp-plan-tile__feature-toggle lp-bold lp-text-14 lp-pb-24 lp-pl-18 lp-pr-18 lp-pt-12 lp-plan--show-mobile">
					<button>
						<span class="lp-plan-tile__feature-toggle-active">
							Oculta las funciones						</span>
						<span class="lp-plan-tile__feature-toggle-inactive">
							Ver todas las características						</span>
						<svg class="gridicon gridicons-chevron-down" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path></g></svg>
					</button>
				</div>
									<ul
				data-lp-editable="cta-plan-features-business"
				class="lp-plan--row-6 lp-plan-tile__feature-collapsible lp-plan-tile__features lp-pb-18 lp-pl-18 lp-pr-18 lp-text-14 lp-text-12@M lp-flex-item--grow  ">
							<li class="lp-plan-tile__features-header lp-bold lp-plan--show-mobile">
				Todo lo del plan Explorer, y además:			</li>
															<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business lp-bold ">
					<span class="is-annual">Dominio gratuito durante el primer año</span>
					<span class="is-monthly lp-strikethrough ">Dominio gratuito durante el primer año</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue un dominio personalizado gratis durante el primer año (p. ej., <i>tudominioguay.com</i>).		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Instalación de plugins y temas</span>
					<span class="is-monthly  ">Instalación de plugins y temas</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue acceso a más de 50000 plugins, plantillas de diseño e integraciones.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Ancho de banda sin límites</span>
					<span class="is-monthly  ">Ancho de banda sin límites</span>
					
		<span class="lp-plan-tile__tooltip">
			Deja de preocuparte por el exceso de tráfico o por tener que pagar tarifas extra.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Caché puntera a nivel mundial</span>
					<span class="is-monthly  ">Caché puntera a nivel mundial</span>
					
		<span class="lp-plan-tile__tooltip">
			Asegúrate de que el contenido almacenado en la caché se sirva siempre desde el centro de datos más cercano al lugar donde se encuentra el visitante.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Gran resistencia a los picos de tráfico</span>
					<span class="is-monthly  ">Gran resistencia a los picos de tráfico</span>
					
		<span class="lp-plan-tile__tooltip">
			Disfruta de la gestión de recursos integrada y el escalado instantáneo.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Web Application Firewall (WAF)</span>
					<span class="is-monthly  ">Web Application Firewall (WAF)</span>
					
		<span class="lp-plan-tile__tooltip">
			Bloquea la actividad maliciosa, como las inyecciones SQL y los ataques XSS.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Red de distribución de contenido global con más de 28 localizaciones</span>
					<span class="is-monthly  ">Red de distribución de contenido global con más de 28 localizaciones</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue una velocidad de carga ultrarrápida para tu sitio desde cualquier lugar del mundo.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">CPU de alta frecuencia</span>
					<span class="is-monthly  ">CPU de alta frecuencia</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue el rendimiento extra que ofrecen los CPU de alta frecuencia, de serie.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Centro de datos de respaldo automático</span>
					<span class="is-monthly  ">Centro de datos de respaldo automático</span>
					
		<span class="lp-plan-tile__tooltip">
			Ten la seguridad de que tu sitio está replicado en tiempo real en un segundo centro de datos.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Infraestructura de sitios aislados</span>
					<span class="is-monthly  ">Infraestructura de sitios aislados</span>
					
		<span class="lp-plan-tile__tooltip">
			Disfruta de la tranquilidad de saber que tu sitio está aislado del resto, lo que ofrece más seguridad y un mayor rendimiento. 		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Protección contra malware gestionado</span>
					<span class="is-monthly  ">Protección contra malware gestionado</span>
					
		<span class="lp-plan-tile__tooltip">
			Protege tu sitio con los análisis automatizados de malware y las correcciones con un solo clic.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Mitigación de DDOS</span>
					<span class="is-monthly  ">Mitigación de DDOS</span>
					
		<span class="lp-plan-tile__tooltip">
			Líbrate de los ataques de DDoS gracias a las funciones de monitorización y mitigación en tiempo real.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">SFTP/SSH, WP-CLI y Git</span>
					<span class="is-monthly  ">SFTP/SSH, WP-CLI y Git</span>
					
		<span class="lp-plan-tile__tooltip">
			Utiliza las herramientas para desarrolladores que ya conoces para gestionar y hacer despliegues en tu sitio.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Sitio de pruebas gratuito</span>
					<span class="is-monthly  ">Sitio de pruebas gratuito</span>
					
		<span class="lp-plan-tile__tooltip">
			Prueba cambios en los productos o en el diseño en un sitio de pruebas.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Actualizaciones de WordPress automáticas</span>
					<span class="is-monthly  ">Actualizaciones de WordPress automáticas</span>
					
		<span class="lp-plan-tile__tooltip">
			No te pierdas ninguna actualización ni ningún parche de WordPress. Y sin mover un dedo.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">Gestión de sitios centralizada</span>
					<span class="is-monthly  ">Gestión de sitios centralizada</span>
					
		<span class="lp-plan-tile__tooltip">
			Alterna sin problemas entre 2, 20 o 200 sitios. Todo desde un mismo lugar.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">2 % de comisión (más la tasa estándar de procesamiento) para las funciones de pago estándar</span>
					<span class="is-monthly  ">2 % de comisión (más la tasa estándar de procesamiento) para las funciones de pago estándar</span>
									</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  ">
					<span class="is-annual">0 % de comisión (más la tasa estándar de procesamiento) para las funciones de pago estándar de WooCommerce</span>
					<span class="is-monthly  ">0 % de comisión (más la tasa estándar de procesamiento) para las funciones de pago estándar de WooCommerce</span>
									</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Copias de seguridad en tiempo real</span>
					<span class="is-monthly  ">Copias de seguridad en tiempo real</span>
					
		<span class="lp-plan-tile__tooltip">
			Dispón de copias de seguridad multirredundantes de todos tus datos en tiempo real.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Restauraciones con un solo clic</span>
					<span class="is-monthly  ">Restauraciones con un solo clic</span>
					
		<span class="lp-plan-tile__tooltip">
			Revierte tu sitio a una versión previa con solo un clic.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Supervisor del tiempo de actividad</span>
					<span class="is-monthly  ">Supervisor del tiempo de actividad</span>
					
		<span class="lp-plan-tile__tooltip">
			No te pierdas nada gracias a la supervisión continua del tiempo de actividad, que te avisa en el momento en que se detecta un periodo de inactividad.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Elastic Search integrada</span>
					<span class="is-monthly  ">Elastic Search integrada</span>
					
		<span class="lp-plan-tile__tooltip">
			Haz que navegar por tu contenido sea sencillo gracias a la función de búsqueda premium integrada.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Actualizaciones de plugins automáticas</span>
					<span class="is-monthly  ">Actualizaciones de plugins automáticas</span>
					
		<span class="lp-plan-tile__tooltip">
			Olvídate de tediosas actualizaciones y actualizaciones de plugins.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--business  lp-plan-tile__feature--is-jetpack">
					<span class="is-annual">Herramientas para SEO</span>
					<span class="is-monthly  ">Herramientas para SEO</span>
					
		<span class="lp-plan-tile__tooltip">
			Encabeza las posiciones de búsqueda con las herramientas de optimización para motores de búsqueda integradas.		</span>
						</li>
										<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__icon--jetpack">
			
		<span class="lp-plan-tile__tooltip">
			Herramientas de seguridad, rendimiento y crecimiento. Con la tecnología de Jetpack.		</span>
				</li>
					</ul>

			<div class="lp-plan--row-7 lp-plan-tile__feature-collapsible lp-plan-tile__storages lp-pb-18 lp-pl-18">
							<p class="lp-plan-tile__storages-title">Almacenamiento</p>
									<span class="lp-plan-tile__storage">
						50 GB					</span>
										</div>
		</div>
				<div
			class="lp-plan-tile lp-plan-tile--name-ecommerce  lp-text-14 ">
			<header class="lp-plan-tile__header lp-plan--row-1 lp-pt-36 lp-pl-18">
								<div class="lp-plan-tile__header-icon lp-plan-tile__tooltip-trigger">
											<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-ecommerce/media/woo-logo.svg" alt="WordPress.com Entrepreneur"/>
						
		<span class="lp-plan-tile__tooltip">
			Haz realidad tu tienda online gracias a la potencia de WooCommerce.		</span>
											</div>
				<h2 class="lp-plan-tile__title lp-text-brand lp-text-32">
					Entrepreneur				</h2>
			</header>
											<div
					data-lp-editable="cta-plan-description-ecommerce"
					class="lp-plan-tile__subtitle lp-plan--row-2 lp-text-16 lp-text-14@M lp-text-12@L lp-pt-8 lp-pr-18 lp-pb-18 lp-pb-9@L lp-pl-18"
				>
					Crea una potente tienda online con extensiones premium integradas.				</div>
			
			<div class="lp-plan--align-top lp-plan-tile__price-wrapper lp-plan--row-3 lp-pl-18 lp-pb-6 lp-pb-0@M">
							<div
					class="lp-plan-tile__price price-ecommerce-plan lp-plan-tile__price--ecommerce lp-text-brand">
					<span data-cta-price="lp-cta-price-ecommerce-annual" class="lp-plan-tile__price-html is-annual">
						<span><sup>$</sup></span>
					</span>
					<span data-cta-price="lp-cta-price-ecommerce-monthly" class="lp-plan-tile__price-html is-monthly">
						<span><sup>$</sup>70</span>
					</span>
				</div>
														<span
					data-plan-timeframe="al mes, se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro="al mes, el primer año, luego se factura como %s al año, impuestos no incluidos"
					data-plan-timeframe-intro-label="Oferta por tiempo limitado"
					data-plan-timeframe-slug="ecommerce"
										class="lp-plan-tile__price-details lp-display-block lp-text-13 is-annual lp-pr-6">
					al mes, con facturación anual				</span>

				<span
					data-plan-timeframe="Ahorra un %s % con la facturación anual"
					data-plan-timeframe-slug="ecommerce"
										class="lp-plan-tile__price-details lp-plan-tile__price-details--monthly lp-display-block lp-text-13 is-monthly lp-pr-6">
					al mes, con facturación anual				</span>
										<p class="lp-plan--show-mobile lp-bold lp-pt-24 is-annual">
					Dominio gratuito durante el primer año				</p>
										</div>
			<div class="lp-plan--row-4 lp-plan-tile__button is-pinnable lp-pt-18 lp-pb-18 lp-pr-18 lp-pl-18 has-small-font-size">
				<div class="lp-button is-annual">
										<a
						data-lp-editable="cta-plan-annual-ecommerce"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-ecommerce-annual"
						href="https://wordpress.com/setup/ecommerce/es?ref=logged-out-homepage-lp">
						Elegir Entrepreneur					</a>
				</div>
								<div class="lp-button is-monthly">
										<a
						data-lp-editable="cta-plan-monthly-ecommerce"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-ecommerce-monthly"
						href="https://wordpress.com/setup/ecommerce/es?recur=monthly&#038;ref=logged-out-homepage-lp">
						Elegir Entrepreneur					</a>
				</div>
							</div>

										<div class="lp-plan--row-5 lp-plan-tile__features-header lp-bold lp-text-12 lp-pb-12 lp-pl-18 lp-pt-18 lp-plan--show-tablet">
					Todo lo del plan Creator, y además:				</div>
				<div class="lp-plan-tile__feature-toggle lp-bold lp-text-14 lp-pb-24 lp-pl-18 lp-pr-18 lp-pt-12 lp-plan--show-mobile">
					<button>
						<span class="lp-plan-tile__feature-toggle-active">
							Oculta las funciones						</span>
						<span class="lp-plan-tile__feature-toggle-inactive">
							Ver todas las características						</span>
						<svg class="gridicon gridicons-chevron-down" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"></path></g></svg>
					</button>
				</div>
									<ul
				data-lp-editable="cta-plan-features-ecommerce"
				class="lp-plan--row-6 lp-plan-tile__feature-collapsible lp-plan-tile__features lp-pb-18 lp-pl-18 lp-pr-18 lp-text-14 lp-text-12@M lp-flex-item--grow  ">
							<li class="lp-plan-tile__features-header lp-bold lp-plan--show-mobile">
				Todo lo del plan Creator, y además:			</li>
															<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce lp-bold ">
					<span class="is-annual">Dominio gratuito durante el primer año</span>
					<span class="is-monthly lp-strikethrough ">Dominio gratuito durante el primer año</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue un dominio personalizado gratis durante el primer año (p. ej., <i>tudominioguay.com</i>).		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Temas premium para tiendas</span>
					<span class="is-monthly  ">Temas premium para tiendas</span>
					
		<span class="lp-plan-tile__tooltip">
			Dale un impulso al diseño de tu tienda con un tema diseñado por profesionales.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Potentes herramientas de diseño de tiendas</span>
					<span class="is-monthly  ">Potentes herramientas de diseño de tiendas</span>
					
		<span class="lp-plan-tile__tooltip">
			Ajusta el diseño de tu tienda con estilos de tu marca y edita el diseño con la herramienta de arrastrar y soltar.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Productos ilimitados</span>
					<span class="is-monthly  ">Productos ilimitados</span>
					
		<span class="lp-plan-tile__tooltip">
			Amplía tu tienda tanto como quieras con la posibilidad de añadir productos y servicios ilimitados.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Muestra los productos por marca</span>
					<span class="is-monthly  ">Muestra los productos por marca</span>
					
		<span class="lp-plan-tile__tooltip">
			Crea, asigna y cataloga las marcas de los productos y permite que los clientes filtren por marca.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Complementos de producto</span>
					<span class="is-monthly  ">Complementos de producto</span>
					
		<span class="lp-plan-tile__tooltip">
			Aumenta tus ingresos con complementos como envoltorios de regalo o personalizaciones.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Conjuntos de productos y kits</span>
					<span class="is-monthly  ">Conjuntos de productos y kits</span>
					
		<span class="lp-plan-tile__tooltip">
			Dales a tus clientes la libertad de crear sus propios productos partiendo de los artículos existentes.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Cantidad mínima/máxima para los pedidos</span>
					<span class="is-monthly  ">Cantidad mínima/máxima para los pedidos</span>
					
		<span class="lp-plan-tile__tooltip">
			Concreta las cantidades de producto mínimas y máximas permitidas para los pedidos.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Avisos de reposición de stock</span>
					<span class="is-monthly  ">Avisos de reposición de stock</span>
					
		<span class="lp-plan-tile__tooltip">
			Envía una notificación automática a los clientes cuando tus productos vuelvan a estar disponibles.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Recomendaciones de productos dinámicas</span>
					<span class="is-monthly  ">Recomendaciones de productos dinámicas</span>
					
		<span class="lp-plan-tile__tooltip">
			Aumenta tus ingresos con recomendaciones de productos automáticas.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Programas de recomendación y de fidelidad</span>
					<span class="is-monthly  ">Programas de recomendación y de fidelidad</span>
					
		<span class="lp-plan-tile__tooltip">
			Impulsa las ventas de forma orgánica con un programa de recomendación de clientes y ofrece regalos o cupones como recompensa.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Automatización del marketing personalizada</span>
					<span class="is-monthly  ">Automatización del marketing personalizada</span>
					
		<span class="lp-plan-tile__tooltip">
			Función avanzada de marketing por correo electrónico, que incluye segmentación de suscriptores, análisis avanzados y automatizaciones.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Descuentos por compras al por mayor</span>
					<span class="is-monthly  ">Descuentos por compras al por mayor</span>
					
		<span class="lp-plan-tile__tooltip">
			Ofrece paquetes personalizados y descuentos por lotes.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Gestión de inventario</span>
					<span class="is-monthly  ">Gestión de inventario</span>
					
		<span class="lp-plan-tile__tooltip">
			Mantén tu inventario actualizado con integraciones de POS y seguimiento en tiempo real.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Pago simplificado</span>
					<span class="is-monthly  ">Pago simplificado</span>
					
		<span class="lp-plan-tile__tooltip">
			Ofrece varias formas de pago a tus clientes para evitar problemas en el proceso de pago. 		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Vende en más de 60 países</span>
					<span class="is-monthly  ">Vende en más de 60 países</span>
					
		<span class="lp-plan-tile__tooltip">
			Crece globalmente al aceptar más de 135 monedas.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">Integraciones con los principales operadores de transporte</span>
					<span class="is-monthly  ">Integraciones con los principales operadores de transporte</span>
					
		<span class="lp-plan-tile__tooltip">
			Consigue tarifas de envío en tiempo real, imprime etiquetas y ofrece códigos de seguimiento a los clientes.		</span>
						</li>
																			<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__feature--ecommerce  ">
					<span class="is-annual">0 % de comisión (más la tasa estándar de procesamiento) para todas las funciones de pago</span>
					<span class="is-monthly  ">0 % de comisión (más la tasa estándar de procesamiento) para todas las funciones de pago</span>
									</li>
										<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__icon--jetpack">
			
		<span class="lp-plan-tile__tooltip">
			Herramientas de seguridad, rendimiento y crecimiento. Con la tecnología de Jetpack.		</span>
				</li>
					</ul>

			<div class="lp-plan--row-7 lp-plan-tile__feature-collapsible lp-plan-tile__storages lp-pb-18 lp-pl-18">
							<p class="lp-plan-tile__storages-title">Almacenamiento</p>
									<span class="lp-plan-tile__storage">
						50 GB					</span>
										</div>
		</div>
				<div
			class="lp-plan-tile lp-plan-tile--name-vip  lp-text-14 ">
			<header class="lp-plan-tile__header lp-plan--row-1 lp-pt-36 lp-pl-18">
								<div class="lp-plan-tile__header-icon lp-plan-tile__tooltip-trigger">
											<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/vip-logo.svg" alt="Enterprise"/>
						
		<span class="lp-plan-tile__tooltip">
			La opción más fiable para el hosting de WordPress para empresas.		</span>
											</div>
				<h2 class="lp-plan-tile__title lp-text-brand lp-text-32">
					Enterprise				</h2>
			</header>
											<div
					data-lp-editable="cta-plan-description-vip"
					class="lp-plan-tile__subtitle lp-plan--row-2 lp-text-16 lp-text-14@M lp-text-12@L lp-pt-8 lp-pr-18 lp-pb-18 lp-pb-9@L lp-pl-18"
				>
					Consigue un rendimiento sin igual con los más altos estándares de seguridad en nuestra plataforma para empresas.				</div>
			
			<div class="lp-plan--align-bottom lp-plan-tile__price-wrapper lp-plan--row-3 lp-pl-18 lp-pb-6 lp-pb-0@M">
														<span
					data-plan-timeframe=""
					data-plan-timeframe-intro=""
					data-plan-timeframe-intro-label=""
					data-plan-timeframe-slug="vip"
					data-nosnippet					class="lp-plan-tile__price-details lp-display-block lp-text-13 is-annual lp-pr-6">
					A partir de <b>25.000 US$</b> al año.				</span>

				<span
					data-plan-timeframe=""
					data-plan-timeframe-slug="vip"
					data-nosnippet					class="lp-plan-tile__price-details lp-plan-tile__price-details--monthly lp-display-block lp-text-13 is-monthly lp-pr-6">
					A partir de <b>25.000 US$</b> al año.				</span>
									</div>
			<div class="lp-plan--row-4 lp-plan-tile__button is-pinnable lp-pt-18 lp-pb-18 lp-pr-18 lp-pl-18 has-small-font-size">
				<div class="lp-button is-annual">
										<a
						data-lp-editable="cta-plan-annual-vip"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-vip-annual"
						href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=pricing_table">
						Más información					</a>
				</div>
								<div class="lp-button is-monthly">
										<a
						data-lp-editable="cta-plan-monthly-vip"
						data-lp-editable-attr="href"
						data-lp-editable-default=""
						data-cta-price="lp-cta-price-vip-monthly"
						href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=pricing_table">
						Más información					</a>
				</div>
							</div>

												<ul
				data-lp-editable="cta-plan-features-vip"
				class="lp-plan--row-6 lp-plan-tile__feature-collapsible lp-plan-tile__features lp-pb-18 lp-pl-18 lp-pr-18 lp-text-14 lp-text-12@M lp-flex-item--grow  lp-plan-tile__features--is-vip">
																<li class="lp-plan-tile__feature-icons">
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/time-logo.svg" alt="WordPress VIP client logo for Time"/>
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/slack-logo.svg" alt="WordPress VIP client logo for Slack"/>
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/disney-logo.svg" alt="WordPress VIP client logo for Disney"/>
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/cnn-logo.svg" alt="WordPress VIP client logo for CNN"/>
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/salesforce-logo.svg" alt="WordPress VIP client logo for Salesforce"/>
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/facebook-logo.svg" alt="WordPress VIP client logo for Facebook"/>
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/condenast-logo.svg" alt="WordPress VIP client logo for Conde Nast"/>
									<img loading="lazy" src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/plan-vip/media/bloomberg-logo.svg" alt="WordPress VIP client logo for Bloomberg"/>
								</li>
							<li class="lp-plan-tile__feature-title lp-plan-tile__tooltip-trigger lp-plan-tile__icon--jetpack">
			
		<span class="lp-plan-tile__tooltip">
			Herramientas de seguridad, rendimiento y crecimiento. Con la tecnología de Jetpack.		</span>
				</li>
					</ul>

			<div class="lp-plan--row-7 lp-plan-tile__feature-collapsible lp-plan-tile__storages lp-pb-18 lp-pl-18">
						</div>
		</div>
								</div>
					</div>

				</section>
			</section>
										<div class="lp-block lp-button lp-pricing-comparison-button lp-margin-top-4">
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/pricing?compare=1#lpc-pricing">Comparar planes</a></div>
</div>		</div>

		</div></div>



<div class="lp-block lp-section lp-section-testimonial lp-pb-72 lp-pt-96 is-style-gray-0-mono"><div class="lp-section__content">
<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-medium-plus lp-pb-6">
<p class="lp-margin-bottom-5 has-small-font-size">WordPress hasta el <strong class="is-core-span">&lt;Core&gt;</strong></p>



<h2 class="wp-block-heading">En WordPress.com estamos comprometidos con la web abierta. Con la ayuda de nuestros clientes, dedicamos el&nbsp;<a href="https://href.li/?https://wordpress.org/five-for-the-future/">5&nbsp;% de nuestro tiempo</a>&nbsp;a colaborar con el código libre y abierto de WordPress y su comunidad.</h2>
</div>



<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-center">
<div class="lp-block lp-button is-mobile-full-width lpc lpc-cta-core">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/start/es?ref=logged-out-homepage-lp">Empieza a crear</a></div>
</div>
</div>
</div></div>



<div class="lp-block lp-section lp-pb-72 lp-pt-72 lp-section-support is-style-blue-0-mono" style="overflow:hidden"><div class="lp-section__content">
<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-wide lp-flex@M" style="gap:8%;align-items:center;justify-content:space-between">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-pb-24 is-vip-content" style="max-width:500px;flex:1">
<h2 class="wp-block-heading has-large-font-size">Un servicio de soporte de verdad</h2>



<p>Nuestros Happiness Engineers están siempre ahí para ayudar. Si te has bloqueado o necesitas una guía para empezar, te echamos una mano por chat, correo electrónico o en los foros de la comunidad.</p>



<div class="lp-block lp-button lpc lpc-cta-support">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/support/?ref=logged-out-homepage-lp">Contacta con nosotros</a></div>
</div>
</div>


<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container" style="flex: 0.7; max-width: 416px"><div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:832px"><span class="lp-lazy-image__content" style="padding-top:calc(550/832*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/support-2-2x-optimized.webp" loading="lazy" alt="" role="presentation" width="832" height="550" /></span></span></div></div></div>

<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-XS lp-block--has-breakpoint-S lp-container" style="flex: 1"><div class="lp-block lp-image lp-image--align-right"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:228px"><span class="lp-lazy-image__content" style="padding-top:calc(103/228*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/support-2-m-2x-optimized.webp" loading="lazy" alt="" role="presentation" width="228" height="103" /></span></span></div></div></div></div>
</div></div>



<div class="lp-block lp-section lp-section-built-by lp-pb-0 lp-pt-72 is-style-yellow-0-mono" style="overflow:hidden;--lp-background:239,234,225"><div class="lp-section__content">
<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-wide lp-flex@M" style="gap:8%;align-items:flex-end">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-pb-24 lp-pb-96@M is-vip-content" style="max-width:100%;flex:1">
<h2 class="wp-block-heading has-large-font-size">Built By WordPress.com</h2>



<p>Crear o migrar una web requiere tiempo. Despreocúpate mientras nuestro equipo de expertos crea una web de la que te enamorarás. Desde porfolios de una sola página a tiendas completas; te ayudamos a hacerlo realidad.</p>



<div class="lp-block lp-button lpc lpc-cta-built-by">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wordpress.com/es/website-design-service/?ref=logged-out-homepage-lp">Empieza ahora</a></div>
</div>
</div>


<div class="lp-block lp-container" style="flex: 1.3; margin-right: -80px; margin-left: -20px"><div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1308px"><span class="lp-lazy-image__content" style="padding-top:calc(712/1308*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/built-by-2-2x-1-optimized.webp" loading="lazy" alt="" role="presentation" width="1308" height="712" /></span></span></div></div></div></div>
</div></div>



<div class="lp-block lp-section lp-section-vip lp-pb-48 lp-pb-72@M lp-pt-72 lp-pt-96@M is-style-gray-100-mono" style="overflow:hidden;--lp-background:19, 25, 30"><div class="lp-section__content">
<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-wide lp-flex" style="gap:8%">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left is-vip-content" style="max-width:100%;flex:1">
<div class="lp-block lp-image lp-image--align-left  lp-margin-bottom-3"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:110px"><span class="lp-lazy-image__content" style="padding-top:calc(46/110*100%)"><img src="https://wpcom.files.wordpress.com/2023/08/vip-logo.webp" loading="lazy" alt="" role="presentation" width="110" height="46" /></span></span></div></div>



<h2 class="wp-block-heading has-large-font-size">WordPress también está hecho para grandes empresas. <br>De verdad.</h2>



<p>¿Qué tienen en común Telefónica, Salesforce, Al Jazeera, Capgemini y Facebook?</p>



<p>Confían en WordPress VIP, la plataforma de WordPress para empresas, y disfrutan de un rendimiento a gran escala sin dejar de cumplir los estándares de seguridad más altos. A partir de 25000 $ al año.</p>



<div class="lp-block lp-button lpc lpc-cta-vip">
<div class="wp-block-button is-style-wide"><a class="wp-block-button__link wp-element-button" href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&amp;utm_medium=automattic_referral&amp;utm_campaign=lohp">Obtén una versión de demostración</a></div>
</div>
</div>


<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container" style="flex: 1.1; margin-right: -20px"><div class="lp-block lp-image"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:1201px"><span class="lp-lazy-image__content" style="padding-top:calc(690/1201*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/logos-2x-optimized.webp" loading="lazy" alt="" role="presentation" width="1201" height="690" /></span></span></div></div></div></div>


<div class="lp-block lp-wrapper lp-wrapper--layout-full lp-logo-bar lp-desktop-hidden lp-margin-top-6"><div class="lp-logo-bar__content" aria-hidden="true"><div class="lp-logo-item lp-logo-item--name-facebook"><svg xmlns="http://www.w3.org/2000/svg" width="164" height="60" viewBox="0 0 164 60"><path d="M163.43 37.85h-3.2a.47.47 0 0 1-.43-.2 67.61 67.61 0 0 0-7.15-7.2h-1.43v7.15a.24.24 0 0 1-.25.25h-2.46a.23.23 0 0 1-.24-.25V20.75a.23.23 0 0 1 .24-.25h2.46a.24.24 0 0 1 .25.25v6.84h1.45a53.22 53.22 0 0 0 6.47-6.9.4.4 0 0 1 .37-.18h3.03c.14 0 .22.07.22.17a.3.3 0 0 1-.09.19 61.84 61.84 0 0 1-7.74 8.05 74.72 74.72 0 0 1 8.63 8.62c.14.16.08.31-.13.31Zm-39.58-8.67c0-5.23 3.47-9 8.92-9h.37c5.45 0 8.92 3.76 8.92 9s-3.47 9-8.92 9h-.37c-5.45 0-8.92-3.77-8.92-9Zm9.3 6.17c3.55 0 5.79-2.44 5.79-6.17s-2.24-6.17-5.8-6.17h-.37c-3.56 0-5.8 2.44-5.8 6.17s2.24 6.17 5.8 6.17h.37Zm-32.54-6.17c0-5.23 3.47-9 8.92-9h.37c5.45 0 8.92 3.76 8.92 9s-3.47 9-8.92 9h-.37c-5.45 0-8.92-3.77-8.92-9Zm9.29 6.17c3.56 0 5.8-2.44 5.8-6.17s-2.24-6.17-5.8-6.17h-.37c-3.56 0-5.8 2.44-5.8 6.17s2.24 6.17 5.8 6.17h.37Zm-14.48-2.26c0 3.04-2.33 4.76-6.44 4.76h-8.53a.23.23 0 0 1-.24-.25V20.75a.23.23 0 0 1 .24-.25h7.77c4 0 6.18 1.59 6.18 4.48 0 1.91-.96 3.16-2.92 3.75 2.75.59 3.94 2.23 3.94 4.37Zm-7.26-9.88h-5v4.66h5c2.24 0 3.27-.73 3.27-2.33s-1.03-2.33-3.27-2.33Zm4.24 9.62c0-1.6-1.07-2.34-3.4-2.34h-5.85v4.66H89c2.38 0 3.4-.7 3.4-2.32Zm-19.38 2.5v2.27a.24.24 0 0 1-.25.25h-13a.23.23 0 0 1-.25-.25V20.75a.23.23 0 0 1 .24-.25h12.79a.24.24 0 0 1 .25.25v2.28a.23.23 0 0 1-.25.24H62.47v4.51h8.2a.24.24 0 0 1 .24.25v2.26a.24.24 0 0 1-.24.24h-8.2v4.54h10.3a.23.23 0 0 1 .25.25Zm-35.63-6c0-5.39 3.54-9.15 8.6-9.15h.36a7.72 7.72 0 0 1 6.93 3.94.22.22 0 0 1-.09.35l-2.18 1.07a.3.3 0 0 1-.43-.1A4.6 4.6 0 0 0 46.26 23h-.38c-3.18 0-5.37 2.53-5.37 6.2s2.15 6.14 5.37 6.14h.38c2.08 0 3.3-.7 4.22-1.78a.32.32 0 0 1 .41-.09l2.24 1.1a.21.21 0 0 1 .13.17.33.33 0 0 1-.08.18c-1.37 2.01-3.85 3.25-6.87 3.25h-.37c-5.14.01-8.55-3.53-8.55-8.84Zm-4.44 8.52h-2.7a.27.27 0 0 1-.28-.22 66.2 66.2 0 0 0-1.29-4.44H20.4a62.09 62.09 0 0 0-1.27 4.44.27.27 0 0 1-.29.22h-2.6c-.17 0-.27-.1-.22-.27a115.38 115.38 0 0 1 6.34-16.75.47.47 0 0 1 .5-.33h3.5a.47.47 0 0 1 .49.33 113.37 113.37 0 0 1 6.34 16.75c.05.17-.05.27-.22.27Zm-5.19-7.33a99.5 99.5 0 0 0-2.94-7.29h-.58a100.97 100.97 0 0 0-2.95 7.29h6.47Zm-14.78-7.49a.23.23 0 0 1-.24.25H2.95v4.66h8.08a.23.23 0 0 1 .25.25v2.28a.23.23 0 0 1-.25.24H2.95v6.9a.23.23 0 0 1-.25.24H.25A.24.24 0 0 1 0 37.6V20.75a.24.24 0 0 1 .25-.25h12.49a.24.24 0 0 1 .25.25v2.28Z"/></svg></div><div class="lp-logo-item lp-logo-item--name-disney"><svg xmlns="http://www.w3.org/2000/svg" width="117" height="60" viewBox="0 0 117 60"><path d="M100.02 27.09c-1.9.45-6.93.7-6.93.7l-.62 2.05s2.5-.22 4.31-.04c0 0 .59-.05.65.67.04.74-.04 1.51-.04 1.51s-.05.45-.65.57c-.7.12-5.42.34-5.42.34l-.76 2.65s-.28.6.35.43c.59-.17 5.53-1.14 6.18-1 .69.16 1.47 1.14 1.24 2-.26 1.06-5.2 4.31-8.2 4.1 0 0-1.57.1-2.9-2.1-1.26-2.1.45-6.03.45-6.03s-.77-1.85-.2-2.52c0 0 .33-.28 1.3-.37L90 27.47s-1.38.09-2.2-.95c-.74-1-.8-1.44-.22-1.71.62-.34 6.34-1.4 10.28-1.26 0 0 1.38-.17 2.6 2.3 0 0 .55 1-.42 1.24M85.08 37.27c-.5 1.2-1.86 2.48-3.5 1.7-1.68-.79-4.32-6.2-4.32-6.2s-.99-2.02-1.18-1.96c0 0-.22-.4-.33 1.82-.17 2.2.03 6.48-.87 7.15-.82.66-1.81.38-2.37-.4-.46-.77-.66-2.64-.4-5.9.3-3.25 1.04-6.71 1.98-7.79.98-1.09 1.77-.3 2.07 0 0 0 1.26 1.16 3.4 4.58l.36.63s1.94 3.25 2.13 3.23c0 0 .17.17.3.04.2-.05.13-1.11.13-1.11s-.36-3.52-2.17-9.47c0 0-.26-.76-.08-1.48.17-.66.87-.33.87-.33s2.73 1.32 4.06 5.78c1.31 4.46.43 8.5-.07 9.71M70.98 25.42c-.27.47-.38 1.13-1.52 1.32 0 0-11.1.8-11.65 1.59 0 0-.37.47.23.6.63.13 3.15.46 4.34.53 1.3 0 5.63.04 7.22 2.03 0 0 .92.95.88 3.1-.03 2.2-.41 2.97-1.26 3.77-.87.74-8.4 4.2-13.25-1.09 0 0-2.22-2.53.77-4.46 0 0 2.16-1.35 7.68.22 0 0 1.65.61 1.59 1.24-.1.67-1.38 1.35-3.23 1.31-1.8-.05-3.12-.93-2.85-.77.24.08-1.94-1.09-2.62-.3-.67.75-.5 1.2.16 1.65 1.66.98 8.17.63 10.11-1.6 0 0 .78-.89-.4-1.61-1.16-.68-4.54-1.1-5.85-1.15-1.24-.07-5.9 0-6.6-1.24 0 0-.65-.88.08-3.28.76-2.54 6.18-3.52 8.53-3.72 0 0 6.46-.27 7.67 1.08 0 0 .17.3-.03.76m-17.9 15.35c-.72.59-2.26.33-2.7-.34-.44-.59-.6-2.91-.52-6.57.11-3.73.16-8.31.93-9.05.77-.73 1.23-.09 1.54.4.3.5.71 1.06.77 2.22.1 1.18.36 7.24.36 7.24s.33 5.52-.36 6.1m1.54-20.4c-2.34.75-3.94.51-5.3-.06-.6 1.03-.95 1.33-1.4 1.4-.67.06-1.27-.98-1.35-1.3-.14-.24-.46-.68-.07-1.67a3.68 3.68 0 0 1-1.19-3.69c.3-1.2 2.55-5.72 9.35-6.25 0 0 3.33-.23 3.9 1.46h.1s3.23 0 3.16 2.76c0 2.76-3.56 6.2-7.2 7.4m2.8-7.89c-2.04.32-5.17 3.06-6.67 5.33 2.3.42 6.35.26 8.15-3.42 0 0 .86-2.32-1.48-1.91m-9.76 2.31c-.7 1.13-.73 1.8-.4 2.26a17.18 17.18 0 0 1 4.41-4.62 5.1 5.1 0 0 0-4.01 2.36m57.77 24.9a50.14 50.14 0 0 0-3.65 13.45s-.17 1.13-1.1.75c-.93-.33-2.46-1.85-2.8-3.99-.34-2.8.92-7.5 3.48-12.93-.75-1.18-1.27-2.93-.85-5.4 0 0 .68-4.54 5.26-8.65 0 0 .55-.46.85-.3.37.16.22 1.61-.08 2.35-.28.71-2.31 4.21-2.31 4.21s-1.27 2.4-.92 4.27c2.41-3.68 7.9-11.12 11.29-8.76 2.15 1.51 2.15 6.4.54 9.23-1.27 2.24-4.87 6.87-9.67 5.8m6.5-10.83c-1.17 1.38-3.27 4-4.91 7.54a7.8 7.8 0 0 0 3.96-1.79c.84-.8 2.77-3 2.47-5.88 0 0-.2-1.52-1.52.13M37.44 42a27.53 27.53 0 0 1-14.67.17c-.09 1.24-.22 1.76-.42 1.97-.24.27-2.2 1.38-3.28-.2-.47-.76-.7-2.13-.84-3.38-6.92-3.13-10.12-7.76-10.22-7.92a2.79 2.79 0 0 1-.17-3.83c1.47-1.82 6.33-3.66 10.68-4.39.17-3.7.57-6.57 1.1-7.84.62-1.52 1.41-.17 2.12.84.57.76.93 4.02.96 6.61 2.83-.13 4.55.07 7.7.68 4.16.7 6.92 2.83 6.7 5.23a3.85 3.85 0 0 1-3.2 3.4c-.85.07-2.2-.55-2.2-.55-.94-.44-.08-.85 1.02-1.32 1.21-.59.94-1.18.94-1.18-.44-1.35-5.82-2.24-11.16-2.24 0 2.95.11 7.84.2 10.7 3.74.7 6.54.55 6.54.55s13.66-.39 14.05-9.1c.42-8.74-13.66-17.11-24.03-19.74C8.9 7.74 3.03 9.66 2.53 9.92c-.56.27-.05.37-.05.37s.55.09 1.57.42c1 .34.2.85.2.85-1.77.6-3.75.25-4.13-.56-.4-.8.25-1.52 1-2.58.72-1.1 1.53-1.06 1.53-1.06 12.81-4.47 28.47 3.54 28.47 3.54 14.64 7.38 17.13 16.07 16.86 19.44-.24 3.32-1.52 8.94-10.54 11.67M9.1 29.88c-1.48.66-.44 1.72-.44 1.72a23.93 23.93 0 0 0 9.46 5.78c.37-4.96.34-6.73.34-9.23-5.06.33-7.98 1.13-9.36 1.72"/></svg></div><div class="lp-logo-item lp-logo-item--name-bloomberg"><svg xmlns="http://www.w3.org/2000/svg" width="169" height="60" viewBox="0 0 169 60"><path d="M0 15h12.33c2.35 0 4.11.59 5.42 1.57a6.16 6.16 0 0 1 2.22 4.96c0 2.41-.98 3.91-2.94 4.83v.13c2.61.84 4.11 3.2 4.11 6 0 2.67-1.04 4.76-2.74 6.07-1.43 1.04-3.26 1.5-5.74 1.5H0V15Zm11.1 9.79c1.3 0 2.28-.72 2.28-2.22 0-1.44-.98-2.15-2.35-2.15H6.79v4.3h4.3v.07Zm.58 9.72c1.5 0 2.61-.91 2.61-2.54 0-1.76-1.17-2.55-2.6-2.55H6.84v5.16h4.83v-.07ZM22.25 15h6.46v25.13h-6.46V15Zm7.77 16.18c0-5.67 3.65-9.46 9.33-9.46s9.27 3.85 9.27 9.46c0 5.68-3.6 9.47-9.27 9.47-5.68 0-9.33-3.79-9.33-9.47Zm12.14 0c0-3.13-.98-5.09-2.94-5.09s-2.87 1.96-2.87 5.1c0 3.13.91 5.15 2.87 5.15 1.96-.07 2.94-2.02 2.94-5.16Zm7.18 0c0-5.67 3.65-9.46 9.33-9.46s9.2 3.79 9.2 9.46c0 5.68-3.59 9.47-9.27 9.47-5.6 0-9.26-3.79-9.26-9.47Zm12.13 0c0-3.13-.98-5.09-2.93-5.09-1.96 0-2.87 1.96-2.87 5.1 0 3.13.91 5.15 2.87 5.15 1.96-.07 2.93-2.02 2.93-5.16Zm7.7-9h6v2.67h.14a5.7 5.7 0 0 1 5.42-3.2 4.98 4.98 0 0 1 4.83 3.07h.13a5.94 5.94 0 0 1 5.54-3.06c4.18 0 5.94 3.06 5.94 7.18v11.22h-6.26V29.94c0-1.82-.59-3-2.16-3-1.56 0-2.35 1.44-2.35 3.4v9.72h-6.26V29.94c0-1.82-.59-3-2.15-3-1.57 0-2.35 1.44-2.35 3.4v9.72h-6.46V22.18Zm35.9 15.53H105v2.35h-6V15h6.26v9h.13a5.94 5.94 0 0 1 5.1-2.4c4.5 0 7.1 4.04 7.1 9.45 0 6.07-2.8 9.6-7.5 9.6a5.53 5.53 0 0 1-5.02-2.94Zm6.07-6.72c0-2.87-1.05-4.76-2.94-4.76-1.96 0-3.13 1.89-3.13 4.76s1.24 4.76 3.13 4.76c1.9 0 2.94-1.82 2.94-4.76Zm7.18.13c0-5.61 3.72-9.46 9.07-9.46 2.67 0 4.7.84 6.26 2.35 2.09 2.02 3 5.15 2.94 8.8h-12.01c.26 2.23 1.3 3.4 3.2 3.4 1.1 0 2.09-.52 2.48-1.7h6.07c-1.05 4.11-4.25 6.14-8.75 6.14-5.55-.07-9.27-3.85-9.27-9.53Zm6.26-1.9h5.74c-.13-2.15-1.3-3.26-2.8-3.26-1.76-.06-2.74 1.18-2.94 3.27Zm19.12-3.97h.13c1.3-2.48 3-3.46 5.16-3.46.52 0 .85.06 1.04.2v5.48h-.13c-3.72-.66-5.87 1.1-5.87 5.15v7.5h-6.33V22.19h6v3.07Zm6.99 14.88h6.07c.26.78 1.04 1.5 2.54 1.5 2.02 0 2.74-1.24 2.74-3.14v-1.3h-.13a5.36 5.36 0 0 1-4.3 2.02c-3.86 0-7.25-2.87-7.25-8.48 0-5.16 2.74-9.14 6.92-9.14 2.41 0 3.85.98 4.83 2.48h.13v-1.96h6v15.54c0 2.87-.98 5.09-2.48 6.4-1.57 1.36-3.78 1.95-6.33 1.95-4.83.06-8.16-1.9-8.74-5.87Zm11.61-9.66c0-2.22-1.04-4.05-2.87-4.05-1.76 0-2.87 1.57-2.87 4.05 0 2.41 1.1 4.1 2.87 4.1 1.76 0 2.87-1.75 2.87-4.1Z"/></svg></div><div class="lp-logo-item lp-logo-item--name-merck"><svg xmlns="http://www.w3.org/2000/svg" width="155" height="60" viewBox="0 0 155 60"><path d="M73.14 18h6.97v22.5h-5.17V25.37l-6.6 15.13-6.96-15.15V40.5h-4.82V18h6.89l4.97 11.64L73.14 18Zm9.54 0v22.5h12.98v-3.82H87.7v-5.72h7.62v-3.85H87.7v-5.16h7.95V18H82.68Zm32.34 11.25c0-9.72 11.3-14.07 17.95-10.12v5.01a6.92 6.92 0 0 0-5.79-2.2 7.43 7.43 0 0 0-7.36 7.5c-.1 5.57 6.06 10.55 13.15 5.59v4.82c-9.21 4.48-17.95-2.22-17.95-10.6ZM106.76 18c5.21 0 7.36 4.2 7.36 6.76 0 2.56-.99 5.13-4.05 6.3l6.6 9.44h-5.38l-8.34-12.09V40.5H97.9V18Zm-1.61 3.74h-2.2v6.57h2.75a3.3 3.3 0 0 0 3.38-3.22c0-.91-.2-3.35-3.93-3.35Zm29.94 18.76h4.79V18.22h-4.79V40.5Zm10.8-12.07 7.22-10.16h-5.59l-7.16 10.15 8.32 12.08h5.49l-8.29-12.07ZM11.24 18a11.25 11.25 0 0 1 22.5 0h-22.5Zm0 22.5c0-6.21 5.04-11.25 11.25-11.25A11.25 11.25 0 0 1 11.25 18a11.25 11.25 0 0 0 0 22.5m0 0a11.25 11.25 0 1 0 22.5 0h-22.5ZM22.5 29.25c6.21 0 11.25 5.04 11.25 11.25a11.25 11.25 0 1 0 0-22.5c0 6.21-5.04 11.25-11.25 11.25"/></svg></div><div class="lp-logo-item lp-logo-item--name-salesforce"><svg xmlns="http://www.w3.org/2000/svg" width="83" height="60" viewBox="0 0 83 60"><path d="M21.69 1c5.2 0 9.86 2.48 12.79 6.33v-.01a14.52 14.52 0 0 1 23.28 3.07 17.66 17.66 0 0 1 7.22-1.54c9.86 0 17.87 8.07 17.87 18.02a17.95 17.95 0 0 1-21.4 17.68 13.08 13.08 0 0 1-11.4 6.7 13 13 0 0 1-5.71-1.32 14.9 14.9 0 0 1-27.68-.67A13.9 13.9 0 0 1 0 35.58c0-5.17 2.78-9.68 6.91-12.11A16.08 16.08 0 0 1 21.69 1Zm26.63 20.23c-.87 0-1.55.25-2.03.73-.48.48-.8 1.21-.97 2.18l-.06.32h-1.1a.16.16 0 0 0-.15.14l-.18 1c0 .1.03.16.16.16h1.06l-1.07 6c-.09.5-.19.89-.3 1.2-.1.29-.2.51-.33.67a.88.88 0 0 1-.44.34 1.78 1.78 0 0 1-.56.09c-.12 0-.27-.02-.39-.05a.99.99 0 0 1-.26-.08s-.12-.05-.17.08l-.36.97c-.03.1.02.17.08.2.14.04.24.08.44.12.26.07.49.07.7.07a3.51 3.51 0 0 0 1.18-.18c.34-.12.63-.34.89-.62.28-.31.45-.64.62-1.08.17-.43.31-.98.42-1.61l1.09-6.12h1.59a.16.16 0 0 0 .15-.14l.18-1c0-.1-.03-.16-.16-.15h-1.53v-.06c.03-.16.1-.6.25-1.03.07-.21.22-.39.34-.51a1 1 0 0 1 .4-.25 1.97 1.97 0 0 1 1.16.03c.15.04.17 0 .2-.08l.37-1c.04-.12-.06-.16-.09-.17a3.72 3.72 0 0 0-1.13-.17ZM15.08 24.3h-.17c-1.56 0-2.64.94-2.64 2.3v.02c0 1.42 1.2 1.88 2.32 2.2l.18.06c.81.25 1.52.47 1.52 1.04v.03c0 .52-.46.92-1.2.92-.28 0-1.2 0-2.19-.63l-.28-.18c-.04-.03-.17-.08-.22.08l-.33.93c-.05.14.02.17.03.19l.47.29c.85.44 1.65.57 2.48.57 1.7 0 2.76-.9 2.76-2.36v-.02c0-1.35-1.2-1.84-2.31-2.2l-.15-.04c-.84-.27-1.57-.5-1.57-1.06v-.03c0-.48.43-.83 1.09-.83.73 0 1.6.25 2.16.55 0 0 .16.11.22-.05l.35-.93c.03-.09-.03-.16-.08-.19a4.81 4.81 0 0 0-2.44-.65Zm24.87 0h-.17c-1.56 0-2.65.94-2.65 2.29v.03c0 1.42 1.2 1.88 2.32 2.2l.18.05c.82.25 1.53.47 1.53 1.04v.03c0 .53-.46.92-1.2.92a4 4 0 0 1-2.19-.63l-.28-.17c-.03-.02-.17-.08-.22.07l-.33.94c-.04.09-.02.13 0 .16l.03.03.47.28c.85.45 1.65.58 2.48.58 1.7 0 2.76-.9 2.76-2.36v-.03c0-1.28-1.1-1.79-2.16-2.14l-.3-.09c-.84-.27-1.57-.51-1.57-1.07v-.02c0-.48.43-.83 1.09-.83.73 0 1.6.24 2.15.55 0 0 .17.1.23-.05l.34-.93c.04-.1-.02-.16-.08-.2a4.8 4.8 0 0 0-2.43-.65Zm12.13.03c-.58 0-1.09.1-1.52.3a3.13 3.13 0 0 0-1.1.83 3.44 3.44 0 0 0-.64 1.23 5.36 5.36 0 0 0 0 3.05 3.2 3.2 0 0 0 3.26 2.36c.58 0 1.09-.1 1.52-.3a3.06 3.06 0 0 0 1.74-2.05 5.4 5.4 0 0 0 0-3.06 3.43 3.43 0 0 0-.65-1.23 3.09 3.09 0 0 0-1.09-.83c-.43-.2-.94-.3-1.52-.3Zm19.27 0c-.6 0-1.14.1-1.58.3a3.16 3.16 0 0 0-1.76 2.1 5.39 5.39 0 0 0 0 3.06 3.14 3.14 0 0 0 1.91 2.02 4.8 4.8 0 0 0 1.75.28c1.38 0 2.12-.31 2.41-.48.06-.03.1-.08.04-.23l-.3-.88c-.06-.13-.19-.08-.19-.08-.34.13-.83.36-1.97.35a2.3 2.3 0 0 1-1.65-.56c-.35-.36-.53-.87-.55-1.6h4.8s.13 0 .15-.12c0-.05.16-.99-.15-2.07a3 3 0 0 0-.62-1.12 2.8 2.8 0 0 0-.91-.7 3.5 3.5 0 0 0-1.38-.28Zm-38.45 0c-.6 0-1.14.1-1.58.3a3.16 3.16 0 0 0-1.76 2.1 5.39 5.39 0 0 0 0 3.06 3.16 3.16 0 0 0 1.9 2.02c.5.19 1.08.28 1.76.28a4.9 4.9 0 0 0 2.41-.48c.06-.03.1-.08.04-.23l-.31-.88c-.03-.1-.11-.1-.15-.09h-.03c-.35.14-.83.37-1.97.36a2.3 2.3 0 0 1-1.65-.56c-.35-.36-.53-.87-.55-1.6h4.8s.13 0 .14-.12c.01-.05.17-.99-.14-2.07a3 3 0 0 0-.62-1.12 2.8 2.8 0 0 0-.91-.7 3.5 3.5 0 0 0-1.38-.28Zm32.28-.02c-.6 0-1.13.1-1.58.3a3.27 3.27 0 0 0-1.14.83 3.52 3.52 0 0 0-.7 1.23 4.9 4.9 0 0 0-.23 1.53c0 1.18.32 2.13.95 2.83.63.7 1.57 1.05 2.8 1.05.73 0 1.47-.15 2-.36 0 0 .11-.05.07-.17l-.36-.96c-.03-.1-.1-.1-.15-.1l-.03.01a3.25 3.25 0 0 1-.66.2c-.23.03-.5.05-.77.05-.69 0-1.24-.2-1.63-.61-.39-.4-.6-1.06-.6-1.94 0-.8.2-1.4.54-1.87.34-.45.87-.7 1.57-.7a4.76 4.76 0 0 1 1.5.22s.12.05.17-.1l.35-.96c.04-.11-.06-.16-.09-.17a5.52 5.52 0 0 0-.95-.24 7.14 7.14 0 0 0-1.06-.07Zm-43.27 0c-.36 0-.94.05-1.28.12 0 0-1.05.2-1.48.54 0 0-.1.06-.05.2l.34.9c.05.13.16.09.16.09l.08-.04a4.82 4.82 0 0 1 2.06-.5h.03c.52 0 .92.11 1.19.32.26.2.4.5.4 1.14v.2l-.8-.09a10.68 10.68 0 0 0-.75-.03c-.41 0-.8.05-1.18.15a3.08 3.08 0 0 0-1 .47c-.3.2-.53.47-.7.79a2.3 2.3 0 0 0-.26 1.1c0 .43.08.8.22 1.1a2 2 0 0 0 .63.75c.27.2.6.34.98.43.38.08.8.13 1.27.13.5 0 .98-.04 1.46-.12l1.2-.24.35-.08c.11-.03.1-.16.1-.16v-4.39c0-.96-.25-1.67-.76-2.11a3.27 3.27 0 0 0-2.2-.67Zm5.95-2.91h-1.28c-.08 0-.13.06-.13.14v10.25c0 .08.05.15.13.15h1.28c.08 0 .14-.07.14-.15V21.53a.14.14 0 0 0-.14-.14Zm32.3 2.99h-.18a2.32 2.32 0 0 0-1.68.8v-.58a.14.14 0 0 0-.14-.14h-1.23a.14.14 0 0 0-.14.14v7.15c0 .08.07.15.15.15h1.26c.08 0 .14-.07.14-.15v-3.59c0-.48.05-.96.16-1.26.1-.3.25-.53.42-.7.17-.17.37-.3.6-.36.2-.06.42-.1.64-.1.25 0 .53.07.53.07.09.01.14-.04.17-.13l.12-.33.1-.27.14-.4v.02a.13.13 0 0 0-.07-.18 4.23 4.23 0 0 0-.8-.13l-.2-.01Zm-38.11 3.99c.44 0 .87.04 1.3.1v2.19s-.6.13-1.3.17c-.97.06-1.4-.28-1.4-.28a.93.93 0 0 1-.28-.28c-.1-.15-.14-.36-.14-.63 0-.42.14-.72.43-.93 0 0 .41-.36 1.39-.34Zm30.03-2.75c.64 0 1.09.22 1.39.67.26.4.41.96.44 1.65l.01.27c0 .82-.15 1.47-.45 1.93-.3.45-.76.67-1.39.67-.63 0-1.08-.22-1.37-.67-.3-.46-.45-1.1-.45-1.93 0-.82.15-1.47.45-1.92.3-.45.74-.67 1.37-.67Zm19.16-.04c.63 0 1.05.25 1.35.7l.07.13c.15.28.21.63.24 1h-3.42l.04-.22c.07-.36.18-.66.35-.9.3-.46.74-.7 1.37-.7Zm-38.45 0c.63 0 1.05.25 1.35.7l.07.13c.15.28.22.63.24 1h-3.42l.04-.22c.07-.36.19-.66.35-.9.3-.46.74-.7 1.37-.7Z"/></svg></div><div class="lp-logo-item lp-logo-item--name-time"><svg xmlns="http://www.w3.org/2000/svg" width="79" height="60" viewBox="0 0 79 60"><path d="M37.53 17.5s-.89.02-1.4.01l-.48 3.73A971.45 971.45 0 0 1 32.8 36.7c-.17.97-.7 3.72-.76 4-.61.07-1.34.14-1.82.16l-.22.02v.56c.06 0 .37.02.59 0 .52 0 2-.08 2.29-.08 1.06 0 1.78.07 2.77.1 0 0 .28 0 .4-.03v-.56h-.26c-.28 0-1.3-.07-1.82-.14.06-.37.97-5.95 1.4-8.18l1.4-7.05.16.36 6.55 15.61h1.2s.68-1.68 1.49-3.58l.16-.37c.85-1.97 5.06-11.96 5.06-11.96l.11.5c.4 1.96 1.76 9.01 2.05 10.72l.34 2.28c.1.74.18 1.46.18 1.67-.14 0-1.47.12-1.97.15a2.74 2.74 0 0 0-.22 0v.57h.53c1.03-.02 2.02-.1 3.05-.1 1.16 0 3.04.1 4.25.11h.37v-.58l-.48-.03-1.68-.14s-.15-.82-.35-1.77c-.78-3.81-3.02-15.4-3.37-18.24-.11-.98-.44-3.18-.44-3.18h-1.35l-1.32 3.77c-.42 1.23-1 2.75-1.45 3.92C47.45 30.96 45 36.32 45 36.32s-5.22-12.45-5.5-13.17c-.28-.72-1.98-5.64-1.98-5.64ZM0 17.5l.01 1.32-.02 3.2h.35l.03-2.85 2.15-.02h3.55l2.3.01V40.7h-.05a75.25 75.25 0 0 1-2.14.12v.58l.35.01c1.13-.01 2.65-.11 3.74-.1 1.1 0 2.64.1 3.6.11l.3-.01v-.54h-.12a53.2 53.2 0 0 1-2.17-.13l-.04-1.58.01-20h6.3l1.52.02.08 1.6c0 .1.06 1.17.06 1.44h.36l-.03-3.24.02-1.46c-1.34.04-4.75.08-10.04.08-4.54 0-8.9-.04-10.12-.1Zm21.19.01v.57c.19 0 1.24.1 1.5.11l.7.07v1.94c.03 4.69 0 15.06-.01 18.73v1.74c-.14.04-.43.06-.74.08-.27.02-1.24.1-1.45.1v.57l.34.02c1.1 0 2.61-.14 3.73-.14 1.13 0 2.64.14 3.53.14l.34-.02v-.56h-.08c-.03-.01-1.18-.06-1.46-.09a7.98 7.98 0 0 1-.79-.08 10.04 10.04 0 0 1 0-.47v-1.2l.02-18.9V18.3l1.62-.15.69-.04v-.6c-1.24 0-2.87.1-4.08.1-1.26 0-2.81-.1-3.86-.1Zm57.18.02H78l-5.41.03-4.28.02c-1.1.01-2.63.06-3.58.05-1.51 0-2.75-.1-3.42-.1l-.59.01.01.56.28.02a30.19 30.19 0 0 1 2 .2V39.2l-.04 1.53c-.6.1-1.76.17-2.15.17h-.12v.56h.46c.64 0 2.28-.1 3.95-.1 1.17 0 2.46.05 3.76.07l4.7.04c2.4.04 4.36.04 5 .04l.07-4.83h-.35c0 .38-.14 1.8-.14 1.86a37.32 37.32 0 0 1-.13 1.37s-.17.01-.25.01l-1.7.04h-5.63l-3.96-.07-.03-1.1v-8.53c.7-.02 1.78-.06 2.44-.06l2.6-.03c1.8 0 3.38.02 3.51.02l1.05.04a31.32 31.32 0 0 1 .27 1.97l.03.17h.4V32c0-.5-.03-1.5-.03-2.62 0-.77.04-1.95.05-2.52l-.02-.3h-.37c0 .13-.03.3-.03.3-.04.43-.15.97-.25 1.54l-.05.17c-.04.02-1.2.08-1.3.08l-1.78.04-6.52-.02v-9.41l1.07-.03h4.03c2.28 0 4.5.01 4.5.02l.7.02c.02.02.87.04 1.07.05l.03.16c.1.99.17 2.17.2 2.58v.17h.36c0-.61-.04-2.48-.04-3.67v-1.02Z"/></svg></div><div class="lp-logo-item lp-logo-item--name-cnn"><svg xmlns="http://www.w3.org/2000/svg" width="74" height="60" viewBox="0 0 74 60"><path d="M30.71 12c-3.27-.05-6.17 2.58-6.17 6.4v17.15c0 .62-.46 1.17-1.14 1.17h-5.39a7.46 7.46 0 0 1-.69-14.85h5.95V17.7h-6.16c-3.86 0-6.79 1.47-8.75 3.65a11.95 11.95 0 0 0-2.98 7.98c0 2.78.96 5.67 2.95 7.86 1.99 2.19 5.02 3.68 9.2 3.68H27.7c.58 0 1.08-.5 1.08-1.07V18.85c0-1.1.57-1.98 1.49-2.27a2.2 2.2 0 0 1 2.45.92c1.44 2.34 5 8.06 8.23 13.21l4.27 6.82 1.36 2.16.52.84c.24.34.54.46.8.39a.56.56 0 0 0 .33-.31 1.48 1.48 0 0 0 .13-.66v-21.1c0-1.1.56-1.98 1.49-2.27a2.2 2.2 0 0 1 2.44.93h.01c1.43 2.33 5 8.05 8.23 13.2l6.15 9.83c.23.33.55.46.82.38a.59.59 0 0 0 .34-.31c.09-.17.14-.4.14-.66V12.13h-4.22v16.25L56.7 16.36c-4.35-7.46-12.57-4.37-12.58 2.04v9.97s-2.54-4.4-7-12.02c-1.76-3.02-4.17-4.31-6.41-4.35Zm-12.67 0c-24.22 0-24 34.57.32 34.58h9.5c4.1 0 6.72-2.42 6.71-6.9v-8.76L42 43.24c3.56 5.89 12.17 4.73 12.15-2.63v-9.68l7.42 12.32c3.55 5.89 12.16 4.73 12.14-2.63V12h-4.2v27.98c0 1.32-.74 2.06-1.45 2.29-.86.27-1.8-.1-2.37-.93-.13-.2-11.53-18.5-14.38-23.17-.24-.34-.59-.48-.9-.38-.31.1-.52.44-.52.97v21.22c0 1.32-.72 2.06-1.42 2.29-.85.26-1.77-.1-2.35-.94l-.54-.86-1.36-2.18a2573.48 2573.48 0 0 1-12.48-20.12c-.23-.34-.58-.48-.89-.38-.32.1-.53.44-.52.96v21.1a2.46 2.46 0 0 1-2.46 2.45H17.69c-4.62 0-8-1.68-10.23-4.15a13.26 13.26 0 0 1-3.28-8.84c0-3.24 1.12-6.5 3.32-8.96 2.2-2.46 5.48-4.11 9.77-4.12h6.17V12h-5.4Z"/></svg></div><div class="lp-logo-item lp-logo-item--name-slack"><svg xmlns="http://www.w3.org/2000/svg" width="123" height="60" viewBox="0 0 123 60"><path d="M19.6 36.85a3.25 3.25 0 0 1-3.26-3.25 3.25 3.25 0 0 1 3.26-3.26h8.17a3.25 3.25 0 0 1 3.26 3.26 3.25 3.25 0 0 1-3.26 3.25H19.6Zm19.6 1.56 1.52-3.55a10.2 10.2 0 0 0 6.03 1.87c1.6 0 2.61-.62 2.61-1.55-.02-2.62-9.6-.57-9.67-7.14-.03-3.33 2.94-5.9 7.13-5.9 2.5 0 4.99.62 6.76 2.03l-1.43 3.63a10.8 10.8 0 0 0-5.58-1.78c-1.3 0-2.17.62-2.17 1.4.03 2.57 9.68 1.17 9.78 7.44 0 3.4-2.9 5.8-7.04 5.8-3.03 0-5.82-.72-7.95-2.25m58.72-4.84a4.44 4.44 0 0 1-3.85 2.25 4.41 4.41 0 0 1-4.42-4.42 4.41 4.41 0 0 1 4.42-4.42c1.66 0 3.09.92 3.85 2.25l4.22-2.35a9.26 9.26 0 1 0-8.07 13.77 9.2 9.2 0 0 0 8.07-4.73l-4.22-2.35ZM56.3 14.47h5.28v25.84H56.3V14.47Zm47.9 0v25.84h5.29v-7.75l6.27 7.75h6.76l-7.97-9.2 7.38-8.6h-6.47l-5.97 7.14V14.47h-5.29ZM77.28 33.62a4.87 4.87 0 0 1-4.12 2.2 4.41 4.41 0 0 1-4.42-4.42 4.41 4.41 0 0 1 4.42-4.42 4.9 4.9 0 0 1 4.12 2.27v4.37Zm0-11.1v2.1c-.87-1.46-3.01-2.48-5.26-2.48-4.64 0-8.3 4.1-8.3 9.23 0 5.14 3.66 9.29 8.3 9.29 2.25 0 4.4-1.02 5.26-2.47v2.1h5.28V22.52h-5.28ZM6.54 33.6a3.25 3.25 0 0 1-3.26 3.25A3.25 3.25 0 0 1 .02 33.6a3.25 3.25 0 0 1 3.26-3.26h3.26v3.26Zm1.63 0a3.25 3.25 0 0 1 3.26-3.26 3.25 3.25 0 0 1 3.26 3.26v8.14A3.25 3.25 0 0 1 11.43 45a3.25 3.25 0 0 1-3.26-3.26V33.6Zm3.26-13.08a3.25 3.25 0 0 1-3.26-3.26A3.25 3.25 0 0 1 11.43 14a3.25 3.25 0 0 1 3.26 3.26v3.26h-3.26Zm0 1.65a3.25 3.25 0 0 1 3.26 3.26 3.25 3.25 0 0 1-3.26 3.26H3.26A3.25 3.25 0 0 1 0 25.43a3.25 3.25 0 0 1 3.26-3.26h8.17Zm13.05 3.26a3.25 3.25 0 0 1 3.26-3.26A3.25 3.25 0 0 1 31 25.43a3.25 3.25 0 0 1-3.26 3.26h-3.26v-3.26Zm-1.63 0a3.25 3.25 0 0 1-3.25 3.26 3.25 3.25 0 0 1-3.26-3.26v-8.17A3.25 3.25 0 0 1 19.6 14a3.25 3.25 0 0 1 3.25 3.26v8.17ZM19.6 38.48a3.25 3.25 0 0 1 3.25 3.26A3.25 3.25 0 0 1 19.6 45a3.25 3.25 0 0 1-3.26-3.26v-3.26h3.26Z"/></svg></div><div class="lp-logo-item lp-logo-item--name-capgemini"><svg xmlns="http://www.w3.org/2000/svg" width="162" height="60" viewBox="0 0 162 60"><path d="M127.95 28.12c0-1.88-.11-3.14-1.35-3.14-.56 0-.83.12-1.32.28.43 6.36-1 11.96-2.76 11.96-2.3 0-1.15-13.63-6.02-13.63-4.5 0-5.14 10.88-5.65 10.88-.35 0-.4-2.86-.38-5.04.19-1.04.29-1.98.29-2.7 0-1-.42-2.76-2.71-1.88.08 7.78-1.48 12.48-3.24 12.48-2.57 0-2.6-7.05-2.6-9 0-1.9.14-4.43-2.68-3.53-.42 6.79-2.2 11.9-3.32 11.9-1.68 0-1.34-11.72-4.95-11.72C88 24.98 87 36.1 86.32 36.1c-1.2 0 .38-12.5-4.31-12.5-2.46 0-3.44 4.17-4.4 8.84-.2.9-.39.94-.42-.09-.03-.87-.03-1.74-.02-2.61 1.18-4.7-.27-6.43-2.44-5.18.7 8.66-3.28 12.9-6.33 12.9-1.1 0-1.97-.47-2.62-1.21 3.66-2.24 5.29-4.82 5.29-7.34 0-2.72-1.57-4.3-4.17-4.3-3.63 0-5.66 3.74-5.66 6.92 0 1.71.32 3.17.84 4.36-1.24.6-2.42 1.11-3.51 1.61-.1-3.27-.47-6.7-.75-9.87-1.93-.53-2.5.4-2.64 2.12-.35 3.92-1.8 6.36-3.09 6.36-.96 0-1.56-1.18-1.62-2.43-.36-6.29 4.74-8.04 7.42-7.13.55-1.39-.06-2.38-2.47-2.38-2.92 0-5.1 1.77-6.71 4.05a18.43 18.43 0 0 1-3.94 3.9 9.4 9.4 0 0 0 .06-1.12c0-4.43-2.4-6.38-4.7-6.38-1.9 0-3.1 1.13-3.78 2.88-.17-1.75-.52-2.5-1.54-2.5a4 4 0 0 0-1.7.43c.3.98.42 3.15.42 4.58 0 5.33-1.53 7.72-3 7.72-1.68 0-1.94-6.33-2.09-8.79a2.3 2.3 0 0 0-.82-.15c-1.52 0-1.72 2.04-2.1 3.92-.41 2.08-1.6 4.7-3.38 4.7-1.07 0-1.75-1.04-1.83-2.9-.17-3.77 2.97-8.24 7.88-6.85.64-1.5-.37-2.64-2.4-2.64-3.6 0-6.56 2.68-7.86 5.86-1.31 2.92-3.61 7.2-8.29 7.2-3.3 0-5.83-2.88-5.83-8.93 0-5.21 3.28-10.16 6.79-10.16 2.45 0 3.02 2.41 2.8 4.68 1.27 1.02 3.35.07 3.35-2.48 0-1.75-1.42-4.73-6.02-4.73C5.03 16.45 0 22.13 0 29.59c0 7.23 3.67 11.5 8.86 11.5 3.28 0 6.37-1.87 8.5-5.32.54 3.02 2.6 4.3 4.13 4.3 2.5 0 4.13-1.63 5.02-3.81.56 2.19 1.73 3.81 3.68 3.81 1.37 0 2.44-.7 3.24-1.8-.32 7.6-.72 12.46 3.78 11.5-.7-2.16-.92-6.1-.92-9.64 0-9.68 1.6-12.87 3.6-12.87 1.46 0 1.92 1.84 1.92 3.82 0 1.06-.1 2.27-.37 3.37-2.46 1.55-4.42 2.77-4.42 4.33 0 1.23.91 1.34 1.7 1.34 1.9 0 4.17-1.85 5.42-5.34 1.1-.67 2.2-1.43 3.26-2.47a9.5 9.5 0 0 0-.06 1.08c0 3.47 1.52 5.57 3.95 5.57 1.9 0 3.32-1.35 4.33-3.37.07 1.16.1 2.24.12 3.22-3.86 1.79-8.12 3.6-8.12 8.63 0 2.6 1.88 4.56 4.32 4.56 5.38 0 6.6-5.67 6.65-12.26a89.03 89.03 0 0 0 4.56-2.09 6.05 6.05 0 0 0 4.63 2.42c3.03 0 5.31-1.6 7.14-4.86.32 2.47.97 4.86 2.29 4.86 2.4 0 2.89-12.57 4.67-12.57 1.37 0 .25 13.6 3.86 13.6 3.1 0 3.68-11.96 5.19-11.96 1.06 0 1.14 10.93 4.51 10.93 1.66 0 3.46-2 4.36-6.16.42 2.77 1.82 6.16 4.56 6.16 1.6 0 2.97-1.62 4.04-3.76.29 2.2.91 3.76 2.12 3.76 3.15 0 3.05-12.54 5.54-12.54 1.94 0 1.35 12.54 5.97 12.54 2.2 0 3.24-1.87 3.87-4.23.85 3.46 2.23 4.23 3.35 4.23.72 0 1.26-.25 1.98-1.1-3.58-1.55-3.28-7.2-3.28-10.85M52.17 49.66c-1.11 0-1.7-1.06-1.7-2.25 0-3.22 2.36-4.93 5.27-6.4-.13 7.04-1.77 8.65-3.57 8.65m14.46-22.8c1.08 0 1.7 1 1.59 2.43-.13 1.67-1.35 3.6-3.47 5.1-1.11-3.15-.28-7.52 1.88-7.52m34.29-4.76c1.03-.03 1.75-.92 1.75-1.97.01-1.05-.7-1.89-1.74-1.85a1.98 1.98 0 0 0-1.88 1.98 1.8 1.8 0 0 0 1.87 1.84m25.64.53c.94-.03 1.71-.87 1.71-1.87s-.75-1.8-1.69-1.76c-.94.03-1.7.88-1.71 1.88-.01 1 .76 1.79 1.7 1.75m21.7-6.64.68.27a26.33 26.33 0 0 1 7.6 4.72c2.92 2.67 4.8 6.02 4.88 10v.25a6.33 6.33 0 0 1-6.2 6.3h-.1a5.3 5.3 0 0 1-4.35-2.12c.16 2.3 1.82 3.96 4.41 3.93-1.94 1.91-5.64 2.83-8.7 2.83-1.66 0-3.06-.35-3.69-1.01 2.54-.33 4.58-2.23 4.89-4.38l.01-.06a9.44 9.44 0 0 1-3.9 2.68l-.1.03c-1.8.6-3.58.57-5.38-.1a8.42 8.42 0 0 1-5.2-7.7c0-8.54 11.76-11.57 15.16-15.64Z"/></svg></div></div></div></div></div>



<div class="lp-block lp-section lp-section--has-background lp-section-vip lp-pb-24 lp-pb-0@M lp-pt-72 lp-pt-96@M is-style-gray-100-mono" style="overflow:hidden;--lp-position-x:0"><div class="lp-section__background lp-section__background--has-image lp-section__background--name-image-full"><div class="lp-section__background-layer" style="background-image:url(https://wpcom.files.wordpress.com/2023/08/simplified-perspective-2x-5.webp)"></div></div><div class="lp-section__content">
<div class="lp-block lp-content lp-wrapper lp-wrapper--layout-wide lp-flex" style="gap:8%;align-items:flex-end">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-pb-24 lp-pb-120@M is-vip-content" style="max-width:100%;flex:1">
<div class="lp-block lp-image lp-image--align-left lp-margin-bottom-3 lp-margin-bottom-4@M"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:118px"><span class="lp-lazy-image__content" style="padding-top:calc(33/118*100%)"><img src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/jetpack-logo.svg" loading="lazy" alt="" role="presentation" width="118" height="33" /></span></span></div></div>



<h2 class="wp-block-heading has-huge-font-size">Tu web siempre contigo</h2>



<p>La <strong>aplicación de Jetpack</strong> te ofrece todo lo que necesitas para crear, gestionar y hacer crecer tu sitio estés donde estés.</p>



<div class="lp-block lp-flex-utility lp-flex-utility--has-justify-content lp-pt-12 app-buttons" style="justify-content:flex-start">
<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-flex-item lp-flex-item--shrink">
<div class="lp-block lp-image lp-image--has-fixed-size lp-image--has-link lp-image--align-left"><div class="lp-image__content"><a class="lp-lazy-image lp-lazy-image--is-link" href="https://apps.apple.com/app/apple-store/id1565481562?ct=wordpress.com--lohp&amp;mt=8&amp;pt=299112" style="width:176px"><span class="lp-lazy-image__content" style="padding-top:calc(50/176*100%)"><img src="https://wpcom.files.wordpress.com/2023/06/group-1000004724.png" loading="lazy" alt="" role="presentation" width="176" height="50"></span></a></div></div>
</div>



<div class="lp-block lp-content lp-content--text-alignment lp-content--text-alignment-left lp-flex-item lp-flex-item--shrink google-button">
<div class="lp-block lp-image lp-image--has-fixed-size lp-image--has-link lp-image--align-left"><div class="lp-image__content"><a class="lp-lazy-image lp-lazy-image--is-link" href="https://play.google.com/store/apps/details?id=com.jetpack.android&amp;referrer=utm_source%253Dwordpress.com%2526utm_campaign%253Dlohp%2526utm_medium%253Dwebsite" style="width:176px"><span class="lp-lazy-image__content" style="padding-top:calc(50/176*100%)"><img src="https://wpcom.files.wordpress.com/2023/06/play-store-logo.png" loading="lazy" alt="" role="presentation" width="176" height="50"></span></a></div></div>
</div>
</div>
</div>


<div class="lp-block lp-block--has-breakpoints lp-block--has-breakpoint-M lp-block--has-breakpoint-L lp-container" style="flex: 1; margin-right: -80px"><div class="lp-block lp-image lp-image--align-right"><div class="lp-image__content"><span class="lp-lazy-image" style="max-width:523px"><span class="lp-lazy-image__content" style="padding-top:calc(420/523*100%)"><img src="https://wpcom.files.wordpress.com/2023/10/jetpack-2x-1-optimized.webp" loading="lazy" alt="" role="presentation" width="523" height="420" /></span></span></div></div></div></div>
</div></div>


<section class="wpcom-global-nav-footer lp-block lp-footer-section lp-section is-style-black lp-padding-top-7 lp-padding-bottom-0"><div class="lp-section__content lp-text-16 has-text-align-left"><div class="lp-wrapper lp-wrapper--layout-center-minus lp-wrapper--layout-wide@L"><div class="lp-padding-bottom-5 lp-padding-bottom-6@L"><h2 class="lp-hidden">WordPress.com</h2><svg class="lp-footer-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 36" role="presentation" aria-label="Flujos de WordPress.com"><path d="M13 3c7.17 0 13 5.83 13 13s-5.83 13-13 13S0 23.17 0 16 5.83 3 13 3Zm.2 14.02-3.5 10.2a11.7 11.7 0 0 0 7.18-.2l-.08-.16-3.6-9.84ZM2.33 11.24A11.69 11.69 0 0 0 7.9 26.52Zm20.94-.85a11.03 11.03 0 0 1-.81 5.39L18.88 26.1a11.68 11.68 0 0 0 4.38-15.7Zm100.33 3.43c1-.02 2 .1 2.95.38v2.04a9.87 9.87 0 0 0-2.75-.43c-.88 0-1.7.29-1.7 1.04h.01c0 1.67 4.93.78 4.9 4.23 0 2.48-2.21 3.17-4.53 3.17-1-.02-1.98-.22-2.9-.59v-2.03c.92.33 2.19.63 2.99.63 1.13 0 1.9-.23 1.9-1.08 0-1.74-4.92-.82-4.92-4.39 0-1.84 1.67-2.97 4.05-2.97Zm-19 0h.24c2.97.12 4.02 2.25 4.02 4.29.01.48-.02.97-.08 1.46h-6.36c.06 2.17 1.29 2.67 3.13 2.67 1 0 1.94-.23 2.97-.61v2.05c-1.18.38-2.41.57-3.65.57-3.16 0-5.1-1.57-5.1-5.27 0-2.69 1.65-5.16 4.83-5.16Zm33.25 0c.95 0 1.9.16 2.8.48v2.1a8.2 8.2 0 0 0-2.76-.57c-1.51 0-2.78.79-2.78 3.12v.23c.08 2.36 1.32 3.06 2.9 3.06.77 0 1.64-.17 2.77-.6v2.04c-1 .34-1.91.57-3.08.57-3.7 0-5.16-2.11-5.16-5.18 0-3.25 2.03-5.25 5.31-5.25Zm-23.21 0c1-.02 1.98.11 2.94.38v2.04a9.87 9.87 0 0 0-2.75-.43c-.88 0-1.69.29-1.69 1.04 0 1.67 4.93.78 4.91 4.23 0 2.48-2.22 3.17-4.54 3.17-1-.02-1.98-.22-2.9-.59v-2.03c.93.33 2.2.63 3 .63 1.12 0 1.9-.23 1.9-1.08 0-1.74-4.93-.82-4.93-4.39 0-1.84 1.68-2.97 4.06-2.97ZM78.42 10v14h-2.33v-.92a5.45 5.45 0 0 1-3.2 1.17c-2.19 0-4.05-1.51-4.05-4.82 0-3.33 1.86-5.6 5.26-5.6a9 9 0 0 1 1.86.23V10h2.46Zm68.92 3.8.25.01c3.21.11 4.76 2.28 4.76 5.23 0 3.02-1.6 5.2-5.01 5.2-3.41 0-5.01-2.18-5.01-5.2 0-3.03 1.61-5.23 5.01-5.23Zm-92.53 0 .26.01c3.21.11 4.77 2.28 4.77 5.23 0 3.02-1.62 5.2-5.02 5.2-3.4 0-5-2.18-5-5.2 0-3.03 1.6-5.23 5-5.23Zm76.32 7.65V24h-2.47v-2.55h2.47Zm35.33-7.64-.01.01c2.01 0 3.15 1.4 3.15 3.32V24h-2.46v-6.26c0-1.41-.5-1.84-1.32-1.84-.7 0-1.68.4-2.6 1V24h-2.46v-6.27c0-1.4-.51-1.84-1.32-1.84a5.3 5.3 0 0 0-2.61.98V24h-2.48v-9.94h2.34v1.03a6.63 6.63 0 0 1 3.38-1.27c1.15 0 2.2.39 2.71 1.5l.3-.19c1.1-.74 2.32-1.32 3.38-1.32Zm-68.4.15c.22 0 .45.02.67.04v2.14h-.25c-1.57 0-2.51.48-3.28 1.94V24h-2.46v-9.94h2.31v1.63h.08l.1-.18a3 3 0 0 1 2.61-1.55ZM34.7 10l2.68 11.08 2.45-8.78-.65-2.3h2.81l2.79 10.72L47.57 10h2.55l-4 14h-2.95l-2.13-7.49L38.76 24H35.8L32 10h2.7Zm32.44 3.96c.22 0 .45.02.67.04v2.14h-.25c-1.57 0-2.51.48-3.28 1.94V24h-2.47v-9.94h2.3v1.64h.09v.01a3.06 3.06 0 0 1 2.94-1.75ZM86.04 10c2.99 0 5.16 1.51 5.16 4.51 0 3.01-2.17 4.62-5.16 4.62h-1.93V24h-2.64V10ZM13 4.31c-4.08 0-7.68 2.1-9.77 5.27l.76.01c1.22 0 3.11-.14 3.11-.14.63-.04.7.88.08.96h-.09c-.19.03-.7.08-1.25.1l4.25 12.67 2.56-7.67-1.82-5c-.63-.03-1.22-.1-1.22-.1-.63-.04-.56-1 .07-.96 0 0 .82.06 1.71.1l.36.02 1 .02h.17c1.22 0 2.95-.14 2.95-.14.63-.04.7.88.08.96h-.08c-.2.03-.7.08-1.26.1l4.22 12.57 1.17-3.9c.6-1.51.89-2.77.89-3.77 0-1.45-.52-2.45-.96-3.22-.6-.97-1.15-1.78-1.15-2.74 0-1.08.81-2.08 1.96-2.08l.15.01A11.64 11.64 0 0 0 13 4.31ZM74.35 15.8c-1.88 0-2.96 1.19-2.96 3.47 0 2.11.87 3.01 2.23 3.01.79 0 1.54-.4 2.34-1.13h-.01V16.1c-.5-.2-1.05-.31-1.6-.31Zm-19.52.03c-1.61 0-2.47 1.04-2.47 3.22 0 2.17.86 3.21 2.46 3.21h.16c1.44-.07 2.23-1.04 2.29-2.98v-.23c0-2.18-.84-3.22-2.44-3.22Zm92.51 0c-1.61 0-2.46 1.04-2.46 3.22 0 2.17.86 3.21 2.46 3.21h.16c1.44-.07 2.22-1.04 2.28-2.98v-.23c0-2.18-.84-3.22-2.44-3.22Zm-42.78-.14c-1.23 0-1.98.88-2.13 2.26h3.85c0-1.21-.4-2.26-1.72-2.26Zm-18.5-3.61h-1.95v5.01h1.95c1.65 0 2.38-1 2.38-2.57 0-1.56-.78-2.44-2.38-2.44Z" /></svg></div><div class="lp-grid lp-grid--type-footer lp-grid--gutter-y-4"><div class="lp-grid__column-span-4 lp-grid__column-span-1@L"><details class="lp-footer-stack"><summary><div class="lp-footer-stack__summary lp-color-primary"><div class="lp-footer-stack__summary__content lp-bold">Productos</div><svg class="lp-footer-stack__summary__marker lp-display-none@L" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path d="m14 5.98-6 6-6-6 1.06-1.06L8 9.86l4.94-4.93z" /></svg></div></summary><ul class="lp-footer-stack__content"><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/hosting/">Alojamiento de&nbsp;WordPress</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/domains/">Dominios</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/website-builder/">Creador de&nbsp;webs</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/create-blog/">Crea un&nbsp;blog</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/professional-email/">Correo electrónico&nbsp;profesional</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/p2/">P2: WordPress para&nbsp;equipos</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/website-design-service/">Servicio de diseño&nbsp;web</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wpvip.com/wordpress-vip-agile-content-platform?utm_source=WordPresscom&#038;utm_medium=automattic_referral&#038;utm_campaign=footer">Soluciones para <span class="lp-link-chevron-external">empresas</span></a></li></ul></details></div><div class="lp-grid__column-span-4 lp-grid__column-span-1@L"><details class="lp-footer-stack"><summary><div class="lp-footer-stack__summary lp-color-primary"><div class="lp-footer-stack__summary__content lp-bold">Funcionalidades</div><svg class="lp-footer-stack__summary__marker lp-display-none@L" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path d="m14 5.98-6 6-6-6 1.06-1.06L8 9.86l4.94-4.93z" /></svg></div></summary><ul class="lp-footer-stack__content"><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/features/">Resumen</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/themes">Temas de&nbsp;WordPress</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/plugins">Plugins de&nbsp;WordPress</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/google/">Google&nbsp;Apps</a></li></ul></details></div><div class="lp-grid__column-span-4 lp-grid__column-span-1@L"><details class="lp-footer-stack"><summary><div class="lp-footer-stack__summary lp-color-primary"><div class="lp-footer-stack__summary__content lp-bold">Recursos</div><svg class="lp-footer-stack__summary__marker lp-display-none@L" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path d="m14 5.98-6 6-6-6 1.06-1.06L8 9.86l4.94-4.93z" /></svg></div></summary><ul class="lp-footer-stack__content"><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/support/">Ayuda de&nbsp;WordPress.com</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/forums/">Foros&nbsp;WordPress</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/blog/">Noticias de&nbsp;WordPress</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/go/">Consejos para crear tu&nbsp;web</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/business-name-generator/">Generador de nombres de&nbsp;empresa</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/logo-maker/">Creador de&nbsp;logos</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/discover">Descubrir nuevas&nbsp;publicaciones</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/tags">Etiquetas&nbsp;populares</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/read/search">Buscar&nbsp;blog</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/webinars/">Webinars&nbsp;diarios</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://developer.wordpress.com/">Recursos para <span class="lp-link-chevron-external">programadores</span></a></li></ul></details></div><div class="lp-grid__column-span-4 lp-grid__column-span-1@L"><details class="lp-footer-stack"><summary><div class="lp-footer-stack__summary lp-color-primary"><div class="lp-footer-stack__summary__content lp-bold">Empresa</div><svg class="lp-footer-stack__summary__marker lp-display-none@L" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path d="m14 5.98-6 6-6-6 1.06-1.06L8 9.86l4.94-4.93z" /></svg></div></summary><ul class="lp-footer-stack__content"><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/about/">Acerca&nbsp;de</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/partners/">Socios</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://automattic.com/press/"> <span class="lp-link-chevron-external">Prensa</span></a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://wordpress.com/es/tos/">Condiciones del&nbsp;servicio</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://automattic.com/es/privacy/">Política de <span class="lp-link-chevron-external">privacidad</span></a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="#" data-is-ccpa-dnsd="1" data-is-ccpa-dnsd-trigger="1">No vendas ni compartas mi información&nbsp;personal</a></li><li><a class="lp-footer-stack__content__item lp-link-invisible" href="https://automattic.com/es/privacy/#ley-de-privacidad-del-consumidor-de-california-ccpa" data-is-ccpa-dnsd="1">Aviso de privacidad para usuarios de&nbsp;California</a></li></ul></details></div></div><div class="lp-grid lp-grid--type-footer lp-padding-top-7"><div class="lp-grid__column-span-4 lp-grid__column-span-1@L lp-grid__order-1@L lp-pb-36 lp-pb-0@L"><div class="lp-language-picker" aria-label="Language picker"><select class="lp-language-picker__content" title="Cambia de idioma"><option lang="es" value="es" selected="">Español</option><option lang="pt-br" value="pt-br">Português do Brasil</option><option lang="de" value="de">Deutsch</option><option lang="fr" value="fr">Français</option><option lang="he" value="he">עִבְרִית</option><option lang="ja" value="ja">日本語</option><option lang="it" value="it">Italiano</option><option lang="nl" value="nl">Nederlands</option><option lang="ru" value="ru">Русский</option><option lang="tr" value="tr">Türkçe</option><option lang="id" value="id">Bahasa Indonesia</option><option lang="zh-cn" value="zh-cn">简体中文</option><option lang="zh-tw" value="zh-tw">繁體中文</option><option lang="ko" value="ko">한국어</option><option lang="ar" value="ar">العربية</option><option lang="en" value="en">English</option><option lang="sv" value="sv">Svenska</option></select><svg class="lp-language-picker__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.636 0 0 3.545 0 8c0 4.364 3.545 8 8 8 4.364 0 8-3.545 8-8s-3.636-8-8-8Zm5.91 5h-2.365c-.454-1.364-1-2.545-1.727-3.455A6.74 6.74 0 0 1 13.91 5Zm.635 2.91c0 .545-.09 1.09-.181 1.635h-2.637c.091-.545.091-1.09.091-1.636 0-.545-.09-1.09-.09-1.636h2.636c.181.545.181 1.09.181 1.636ZM8 14c-.91-.636-1.636-1.727-2.09-3.182h4.18C9.637 12.273 8.91 13.455 8 14ZM5.636 9.545c-.09-.545-.09-1-.09-1.636 0-.545.09-1.09.09-1.636h4.728c.09.545.09 1 .09 1.636 0 .636-.09 1.091-.09 1.636H5.636ZM1.455 7.91c0-.545.09-1.09.181-1.636h2.637c-.091.545-.091 1.09-.091 1.636 0 .546.09 1.091.09 1.636H1.637C1.455 9 1.455 8.455 1.455 7.91ZM8 1.82c.91.636 1.636 1.726 2.09 3.181H5.91C6.363 3.545 7.09 2.364 8 1.818Zm-1.818-.274C5.455 2.455 4.909 3.636 4.545 5H2.091a6.74 6.74 0 0 1 4.09-3.455ZM2.09 10.91h2.364c.363 1.364.909 2.546 1.636 3.364-1.636-.546-3.182-1.818-4-3.364Zm7.727 3.364c.727-.91 1.273-2 1.637-3.364h2.363c-.727 1.546-2.182 2.818-4 3.364Z" /></svg><svg class="lp-language-picker__chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path d="m14 5.98-6 6-6-6 1.06-1.06L8 9.86l4.94-4.93z" /></svg><a class="lp-language-picker__link lp-hidden" lang="es" href="https://wordpress.com/es/" data-href="https://wordpress.com/es/" tabindex="-1">Español</a><a class="lp-language-picker__link lp-hidden" lang="pt-br" href="https://wordpress.com/pt-br/" data-href="https://wordpress.com/pt-br/" tabindex="-1">Português do Brasil</a><a class="lp-language-picker__link lp-hidden" lang="de" href="https://wordpress.com/de/" data-href="https://wordpress.com/de/" tabindex="-1">Deutsch</a><a class="lp-language-picker__link lp-hidden" lang="fr" href="https://wordpress.com/fr/" data-href="https://wordpress.com/fr/" tabindex="-1">Français</a><a class="lp-language-picker__link lp-hidden" lang="he" href="https://wordpress.com/he/" data-href="https://wordpress.com/he/" tabindex="-1">עִבְרִית</a><a class="lp-language-picker__link lp-hidden" lang="ja" href="https://wordpress.com/ja/" data-href="https://wordpress.com/ja/" tabindex="-1">日本語</a><a class="lp-language-picker__link lp-hidden" lang="it" href="https://wordpress.com/it/" data-href="https://wordpress.com/it/" tabindex="-1">Italiano</a><a class="lp-language-picker__link lp-hidden" lang="nl" href="https://wordpress.com/nl/" data-href="https://wordpress.com/nl/" tabindex="-1">Nederlands</a><a class="lp-language-picker__link lp-hidden" lang="ru" href="https://wordpress.com/ru/" data-href="https://wordpress.com/ru/" tabindex="-1">Русский</a><a class="lp-language-picker__link lp-hidden" lang="tr" href="https://wordpress.com/tr/" data-href="https://wordpress.com/tr/" tabindex="-1">Türkçe</a><a class="lp-language-picker__link lp-hidden" lang="id" href="https://wordpress.com/id/" data-href="https://wordpress.com/id/" tabindex="-1">Bahasa Indonesia</a><a class="lp-language-picker__link lp-hidden" lang="zh-cn" href="https://wordpress.com/zh-cn/" data-href="https://wordpress.com/zh-cn/" tabindex="-1">简体中文</a><a class="lp-language-picker__link lp-hidden" lang="zh-tw" href="https://wordpress.com/zh-tw/" data-href="https://wordpress.com/zh-tw/" tabindex="-1">繁體中文</a><a class="lp-language-picker__link lp-hidden" lang="ko" href="https://wordpress.com/ko/" data-href="https://wordpress.com/ko/" tabindex="-1">한국어</a><a class="lp-language-picker__link lp-hidden" lang="ar" href="https://wordpress.com/ar/" data-href="https://wordpress.com/ar/" tabindex="-1">العربية</a><a class="lp-language-picker__link lp-hidden" lang="en" href="https://wordpress.com/" data-href="https://wordpress.com/" tabindex="-1">English</a><a class="lp-language-picker__link lp-hidden" lang="sv" href="https://wordpress.com/sv/" data-href="https://wordpress.com/sv/" tabindex="-1">Svenska</a></div></div><div class="lp-grid__column-span-4 lp-grid__column-span-3@L"><div class="lp-flex@L lp-flex--align-center@L has-text-align-center"><h3 class="lp-hidden">Aplicaciones móviles</h3><ul class="lp-flex lp-flex--justify-center lp-flex--wrap lp-flex--gap-1 has-normal-font-size"><li><div class="lp-block lp-mobile-badge lp-mobile-badge--type-apple-app-store"><a class="lp-mobile-badge__link" href="https://apps.apple.com/app/apple-store/id1565481562?ct=wp.com--footer&#038;mt=8&#038;pt=299112"><span class="lp-mobile-badge__content"><svg class="lp-mobile-badge__content__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23" aria-hidden="true"><path d="m12.88 5.97.28.02c1.6.05 3.08.85 4 2.16a4.95 4.95 0 0 0-2.36 4.15 4.78 4.78 0 0 0 2.92 4.4 10.96 10.96 0 0 1-1.52 3.1c-.9 1.33-1.83 2.64-3.32 2.66-1.45.04-1.94-.85-3.6-.85-1.67 0-2.19.83-3.57.89-1.42.05-2.5-1.43-3.43-2.76-1.85-2.7-3.3-7.63-1.36-10.97a5.32 5.32 0 0 1 4.47-2.73C6.81 6 8.13 7 9 7c.86 0 2.48-1.18 4.16-1zm.3-5.25a4.87 4.87 0 0 1-1.11 3.49 4.1 4.1 0 0 1-3.24 1.53 4.64 4.64 0 0 1 1.14-3.36A4.96 4.96 0 0 1 13.18.72z" /></svg><span class="lp-mobile-badge__content__label"><span class="lp-mobile-badge__line lp-mobile-badge__line--is-top">Descargar en el</span> <span class="lp-mobile-badge__line lp-mobile-badge__line--is-bottom">App Store</span></span></span></a></div></li><li><div class="lp-block lp-mobile-badge lp-mobile-badge--type-google-play"><a class="lp-mobile-badge__link" href="https://play.google.com/store/apps/details?id=com.jetpack.android&#038;referrer=utm_source%3Dwordpress.com%26utm_campaign%3Dfooter%26utm_medium%3Dwebsite"><span class="lp-mobile-badge__content"><svg class="lp-mobile-badge__content__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 38" aria-hidden="true"><defs><path id="lp-mobile-badge-path-1" d="M31.28 24.77 6.05 39.07A4.05 4.05 0 0 1 0 35.55V6.95a4.05 4.05 0 0 1 6.05-3.52l25.23 14.3a4.05 4.05 0 0 1 0 7.04Z" /></defs><g transform="translate(0 -2.25)"><mask id="lp-mobile-badge-path-2" fill="#fff"><use xlink:href="#lp-mobile-badge-path-1" /></mask><use fill="#34a853" xlink:href="#lp-mobile-badge-path-1" /><path fill="#ea4335" mask="url(#lp-mobile-badge-path-2)" d="M-4 21.25h40v20H-4z" /><path fill="#fbbc04" mask="url(#lp-mobile-badge-path-2)" d="M35 2v38.5L15.62 21.25z" /><path fill="#4285f4" mask="url(#lp-mobile-badge-path-2)" d="m-4 1.75 19.62 19.5L-4 40.75z" /></g></svg><span class="lp-mobile-badge__content__label"><span class="lp-mobile-badge__line lp-mobile-badge__line--is-top">Obtener en</span> <span class="lp-mobile-badge__line lp-mobile-badge__line--is-bottom">Google Play</span></span></span></a></div></li></ul><h3 class="lp-hidden">Redes sociales</h3><ul class="lp-flex lp-flex--justify-center lp-pt-18 lp-pt-0@L lp-pl-24@L"><li class="lp-pl-8@L"><a class="lp-display-block lp-pt-12 lp-pr-8 lp-pb-12 lp-pl-8 lp-color" href="https://www.facebook.com/WordPresscom/" title="WordPress.com en Facebook"><span class="lp-hidden">WordPress.com en Facebook</span><svg class="lp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 1.2C6.03 1.2 1.2 6.06 1.2 12.06c0 5.43 3.95 9.92 9.11 10.74v-7.6H7.57v-3.14h2.74V9.67c0-2.72 1.61-4.23 4.08-4.23 1.18 0 2.42.22 2.42.22v2.67h-1.36c-1.35 0-1.76.84-1.76 1.7v2.03h3l-.49 3.15h-2.5v7.59a10.85 10.85 0 0 0 9.1-10.74c0-6-4.83-10.86-10.8-10.86Z" /></svg></a></li><li><a class="lp-display-block lp-pt-12 lp-pr-8 lp-pb-12 lp-pl-8 lp-color" href="https://twitter.com/wordpressdotcom" title="WordPress.com en X (Twitter)"><span class="lp-hidden">WordPress.com en X (Twitter)</span><svg class="lp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 1.2a10.8 10.8 0 1 0 0 21.6 10.8 10.8 0 0 0 0-21.6ZM10.03 6l2.9 4.23L16.58 6h1l-4.2 4.87 4.56 6.63h-3.35l-3.07-4.47-3.84 4.47h-.99l4.4-5.1L6.67 6h3.35Zm-.47.75H8.03l3.54 5.06.45.64 3.03 4.34h1.52l-3.71-5.32-.45-.63-2.85-4.1Z" /></svg></a></li><li><a class="lp-display-block lp-pt-12 lp-pr-8 lp-pb-12 lp-pl-8 lp-color" href="https://www.instagram.com/wordpressdotcom/" title="WordPress.com en Instagram"><span class="lp-hidden">WordPress.com en Instagram</span><svg class="lp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 1.2a10.8 10.8 0 1 0 0 21.6 10.8 10.8 0 0 0 0-21.6Zm.5 3.6c1.5 0 1.77.01 2.47.04a5.3 5.3 0 0 1 1.75.34c.47.18.87.43 1.27.83.4.4.65.8.83 1.27.18.46.3.99.34 1.75l.02.47v.18c.01.36.02.78.02 1.61v1.42c0 1.32-.01 1.6-.04 2.26a5.34 5.34 0 0 1-.34 1.75c-.18.47-.43.87-.83 1.27-.4.4-.8.65-1.27.83-.46.18-.98.3-1.75.34l-.47.02h-.18c-.36.01-.77.02-1.6.02h-1.43c-.83 0-1.25 0-1.61-.02H9.5l-.47-.02a5.29 5.29 0 0 1-1.75-.34A3.53 3.53 0 0 1 6.01 18c-.4-.4-.65-.8-.83-1.27-.18-.46-.3-.98-.34-1.75l-.02-.47v-.18a51 51 0 0 1-.02-1.4v-1.85c0-.77.01-1.15.02-1.5V9.4l.02-.38c.04-.76.16-1.29.34-1.75.18-.47.43-.87.83-1.27.4-.4.8-.65 1.28-.83a5.28 5.28 0 0 1 2.12-.35h.18c.41-.02.86-.03 1.92-.03Zm-1.14 1.3c-1.35 0-1.6 0-2.27.04-.7.03-1.08.15-1.33.25a2.38 2.38 0 0 0-1.37 1.36c-.1.26-.22.64-.25 1.34-.03.62-.04.88-.04 2.01v1.8c0 1.13.01 1.4.04 2.02.03.7.15 1.08.25 1.33a2.34 2.34 0 0 0 1.37 1.37 4 4 0 0 0 1.33.25c.62.03.89.04 2.02.04h1.79c1.12 0 1.39-.01 2.01-.04.7-.03 1.08-.15 1.34-.25a2.38 2.38 0 0 0 1.36-1.37c.1-.25.22-.63.25-1.33l.02-.38v-.17c.02-.35.02-.71.02-1.47v-1.78c0-1.13-.01-1.4-.04-2.02a3.98 3.98 0 0 0-.25-1.34 2.23 2.23 0 0 0-.53-.82c-.26-.26-.5-.41-.83-.54-.26-.1-.64-.22-1.34-.25-.65-.03-.91-.04-2.21-.04h-1.34ZM12 8.3a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4Zm0 1.3a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm3.84-2.3a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.73Z" /></svg></a></li><li><a class="lp-display-block lp-pt-12 lp-pr-8 lp-pb-12 lp-pl-8 lp-color" href="https://www.youtube.com/WordPressdotcom" title="WordPress.com en YouTube"><span class="lp-hidden">WordPress.com en YouTube</span><svg class="lp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 1.2a10.8 10.8 0 1 0 0 21.6 10.8 10.8 0 0 0 0-21.6Zm5.61 5.73c.62.18 1.11.7 1.28 1.36.27 1.07.3 3.15.31 3.62v.19c0 .46-.03 2.55-.3 3.61a1.88 1.88 0 0 1-1.28 1.37c-1.02.3-4.83.32-5.51.32h-.21c-.69 0-4.5-.03-5.52-.32-.62-.18-1.1-.7-1.27-1.37-.27-1.07-.3-3.15-.3-3.61v-.19c0-.47.03-2.55.29-3.6.16-.67.65-1.2 1.27-1.37 1.05-.3 5.09-.34 5.57-.34h.16c.68 0 4.5.03 5.51.33Zm-7.05 2.76v4.63L14.29 12l-3.73-2.3Z" /></svg></a></li></ul></div></div></div></div><div class="lp-wrapper lp-wrapper--layout-full lp-padding-top-5"><footer class="lp-section is-style-white-gray-mono lp-padding-top-4 lp-padding-bottom-4"><div class="lp-section__content lp-text-14 has-text-align-center"><h2 class="lp-hidden">Automattic</h2><div class="lp-wrapper lp-wrapper--layout-wide"><div class="lp-grid lp-grid--type-footer lp-grid--gutter-y-3"><div class="lp-grid__column-span-4 lp-grid__column-span-2@M color-blue-50"><a class="lp-flex lp-flex--justify-center lp-flex--justify-start@M lp-link-invisible lp-no-wrap" href="https://automattic.com/">Una producción de<span class="lp-hidden">Automattic</span><svg class="lp-icon lp-icon--custom-automattic-footer lp-color-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143 12" aria-hidden="true"><path d="M53.01 4.19a.749.749 0 0 0-1.033.226L50.225 7.13a.748.748 0 0 0 .219 1.035.748.748 0 0 0 1.033-.226l1.752-2.713a.748.748 0 0 0-.219-1.035Zm88.303-.303c-.922-.845-2.274-1.644-4.102-1.644-2.735 0-4.272 1.874-4.272 3.826v.2c0 1.935 1.552 3.748 4.41 3.748 1.705 0 3.118-.814 4.01-1.644l1.152 1.214c-1.122 1.106-3.027 2.043-5.285 2.043-3.872 0-6.222-2.52-6.222-5.285v-.338c0-2.765 2.565-5.377 6.314-5.377 2.166 0 4.133.906 5.193 2.043l-1.198 1.214Zm-16.931 7.343V1.967c.768 0 1.076-.415 1.076-.968h.814V11.23h-1.89Zm-9.202-8.633v8.633h-1.92V2.597h-4.471V.999h10.862v1.598h-4.471Zm-14.088 0v8.633h-1.92V2.597H94.7V.999h10.862v1.598h-4.471Zm-14.21.399-2.228 4.302h4.532L86.88 2.996Zm4.408 8.234-1.352-2.534h-6.007l-1.306 2.534h-2.028L86.128 1h1.598l5.623 10.231H91.29Zm-16.438 0V3.134l-.507.891-4.287 7.205h-.937l-4.24-7.205-.507-.89v8.095H62.5V1h2.657l4.04 7.02.477.86.477-.86L74.145 1h2.627V11.23h-1.92ZM37.765 2.597v8.633h-1.92V2.597h-4.471V.999h10.862v1.598h-4.471ZM21.587 11.63c-3.671 0-5.377-1.997-5.377-4.655V.999h1.905v6.007c0 1.89 1.245 3.01 3.61 3.01 2.428 0 3.427-1.12 3.427-3.01V.999h1.92v5.976c0 2.535-1.628 4.655-5.485 4.655ZM6.394 2.996 4.166 7.298h4.532L6.394 2.996Zm4.409 8.234L9.45 8.696H3.444L2.138 11.23H.11L5.64 1H7.24L12.86 11.23h-2.058ZM55.8 5.992c0-1.982-1.444-3.75-4.056-3.75-2.611 0-4.04 1.768-4.04 3.75v.245c0 1.982 1.429 3.78 4.04 3.78 2.612 0 4.056-1.798 4.056-3.78v-.245Zm-4.056 5.638c-3.626 0-5.976-2.612-5.976-5.331V5.96c0-2.766 2.35-5.331 5.976-5.331 3.642 0 5.992 2.565 5.992 5.331V6.3c0 2.72-2.35 5.331-5.992 5.331Z" /></svg></a></div><div class="lp-grid__column-span-4 lp-grid__column-span-2@M lp-text-right@M lp-color-primary"><a class="lp-link-invisible lp-link-chevron-external" href="https://automattic.com/work-with-us/" title="Trabajos a distancia">Trabaja con nosotros</a></div></div></div></div></footer></div></div></section>									</main>
		<!-- wpcom_wp_footer -->




	
 
<noscript><img src="https://pixel.wp.com/b.gif?v=noscript" style="height:1px;width:1px;overflow:hidden;position:absolute;bottom:1px;" alt="" /></noscript>
	
		<script>defQueue = { items: [], isLOHP: 2020 };</script>
		<style type="text/css">
		/**
		 * Don't show plans pages when WordPress.com is being viewed from inside one of the mobile apps,
		 * otherwise we'll end up with another https://platform9p2.wordpress.com/2020/08/09/wordpress-ios-15-4-rejected/ situation.
		 */
		body.is-mobile-app .hide-on-mobile-apps {
			display: none !important; /* It really is important */
		}
		</style>
		<script src="https://s1.wp.com/home.logged-out/page-2023-aug/js/bundle.js?v=1698845922" defer></script>
		<script type="text/javascript">
	// Try to remain compatible with older browsers
	( function() {
		try {
			var cookies = document.cookie.split( ';' );
			// Don't set if already set
			for ( var i = 0; i < cookies.length; i++ ) {
				if ( cookies[ i ].trim().indexOf( 'tk_ai=' ) == 0 ) {
					return;
				}
			}

			var randomBytes = [];
			if ( window.crypto && window.crypto.getRandomValues ) {
				randomBytes = new Uint8Array( 18 );
				window.crypto.getRandomValues( randomBytes );
			} else {
				for ( var i = 0; i < 18; i++ ) {
					randomBytes[ i ] = Math.floor( Math.random() * 256 );
				}
			}

			var anonId = btoa( String.fromCharCode.apply( String, randomBytes ) );
			var date = new Date();
			date.setFullYear( date.getFullYear() + 5 );
			document.cookie =
				'tk_ai=' + encodeURIComponent( anonId )
				+ '; domain=.wordpress.com; path=/; expires=' + date.toUTCString();
		} catch ( e ) {
			return;
		}
	} )();
	</script>
<script type="text/javascript">
if ( window.top !== window.self ) {
	if ( 'blob:' !== window.self.location.protocol ) {
		if ( window.top.location.hostname !== window.self.location.hostname || window.top.location.protocol !== window.top.location.protocol ) {
			window.top.location.href = window.self.location.href;
		}
	}
}
</script>
<script crossorigin='anonymous' type='text/javascript' src='https://s1.wp.com/_static/??-eJyVztEKwjAMBdAfsusKyvRB/Ja5ZiOlTWaaTvb362Cvoj4FknPJte/ZDEwKpDZkm/iJEUzJIP1UdwZp5Cbkk60OaYjFQ95heBWQ9RhNQvqKTMJJeoVP2GNWuwB5lv00c1xHjLEaEP0lJFAb197KYqSQYvr318Ef6e669ny7ts5dwgYRr2uO' defer></script>
<script type="text/javascript" src="https://s1.wp.com/wp-content/plugins/gutenberg-core/v17.4.1/build/hooks/index.min.js?m=1704980109i&amp;ver=700a21be8955e3eb9568" id="wp-hooks-js" defer></script>
<script type="text/javascript" src="https://s1.wp.com/wp-content/plugins/gutenberg-core/v17.4.1/build/i18n/index.min.js?m=1704980109i&amp;ver=f5a63315d8d2f363ce59" id="wp-i18n-js" defer></script>
<script type="text/javascript" id="wp-i18n-js-after">
/* <![CDATA[ */
document.addEventListener('DOMContentLoaded', function() {
					
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
				});
/* ]]> */
</script>
<script type="text/javascript" id="media-video-jwt-bridge-js-extra">
/* <![CDATA[ */
var videopressAjax = {"ajaxUrl":"https:\/\/eswplandpack.wordpress.com\/wp-admin\/admin-ajax.php","bridgeUrl":"\/wp-content\/mu-plugins\/jetpack-plugin\/sun\/jetpack_vendor\/automattic\/jetpack-videopress\/build\/lib\/token-bridge.js","post_id":"9599"};
/* ]]> */
</script>
<script type="text/javascript" id="landpack-client-script-js-before">
/* <![CDATA[ */
var landpack_locale='es';
/* ]]> */
</script>
<script crossorigin='anonymous' type='text/javascript' src='https://s1.wp.com/_static/??-eJyNjkkOwjAMRS9EcFigskEcBWVS5dS1owwFbk+BlkU3sLLs//Sf4ZaUE66BKyRqPXIBMuyTcQPYhuTBEc7pPpYd/IbZTH+SlsQN6lOuisuY3kOIkPttRyyQqaqU5f7YZmNTqyKG+jIsO5TG6+k6BfaSwbQqo6kV3Ree0AdJOZSyfEZoocoQWNmMvg+z8DKeD50+6u6g9Sk+AQAGc9A=' defer></script>
<script type="text/javascript" id="rlt-proxy-js-after">
/* <![CDATA[ */
	window.addEventListener( 'DOMContentLoaded', function() {
		rltInitialize( {"token":null,"iframeOrigins":["https:\/\/widgets.wp.com"]} );
	} );
/* ]]> */
</script>
<script type="text/javascript" id="comment-like-js-extra">
/* <![CDATA[ */
var comment_like_text = {"loading":"Cargando...","swipeUrl":"https:\/\/s1.wp.com\/wp-content\/mu-plugins\/comment-likes\/js\/lib\/swipe.js?ver=20131008"};
/* ]]> */
</script>
<script crossorigin='anonymous' type='text/javascript' src='https://s1.wp.com/_static/??-eJyljUsOwjAMBS9EcCqBygZxlnxM69ROoiYR4vaki0qo226fZubBJyuXYsVYQZrK3CaKBVwS6ZNiWrBAOAzXUC7wJ9YZpWPzbSOLGObiVsR45PY6m+izcQvYRuzBcnKLckzbQTcpV1WNteh380zom3vnTcj+RIXTlJQ1a0+85DmM+q7HQetH+AGuUnbm' defer></script>
<script type="text/javascript">
		(function () {
			var wpcom_reblog = {
				source: 'toolbar',

				toggle_reblog_box_flair: function (obj_id, post_id) {

					// Go to site selector. This will redirect to their blog if they only have one.
					const postEndpoint = `https://wordpress.com/post`;

					// Ideally we would use the permalink here, but fortunately this will be replaced with the 
					// post permalink in the editor.
					const originalURL = `${ document.location.href }?page_id=${ post_id }`; 
					
					const url =
						postEndpoint +
						'?url=' +
						encodeURIComponent( originalURL ) +
						'&is_post_share=true' +
						'&v=5';

					const redirect = function () {
						if (
							! window.open( url, '_blank' )
						) {
							location.href = url;
						}
					};

					if ( /Firefox/.test( navigator.userAgent ) ) {
						setTimeout( redirect, 0 );
					} else {
						redirect();
					}
				},
			};

			window.wpcom_reblog = wpcom_reblog;
		})();
	</script>
<script type="text/javascript">
// <![CDATA[
(function() {
try{
  if ( window.external &&'msIsSiteMode' in window.external) {
    if (window.external.msIsSiteMode()) {
      var jl = document.createElement('script');
      jl.type='text/javascript';
      jl.async=true;
      jl.src='/wp-content/plugins/ie-sitemode/custom-jumplist.php';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(jl, s);
    }
  }
}catch(e){}
})();
// ]]>
</script>
<script src="//stats.wp.com/w.js?66" defer defer></script>
<script type="text/javascript">
_tkq = window._tkq || [];
_stq = window._stq || [];
_tkq.push(['storeContext', {'blog_id':'1','blog_tz':'0','user_lang':'es','blog_lang':'en','user_id':'0'}]);
_stq.push(['view', {'blog':'1','v':'wpcom','tz':'0','user_id':'0','post':'9599','subd':'wordpress.com'}]);
_stq.push(['extra', {'crypt':'UE5VRnhUZ2VGQSYvTVglSnBOaVR1Jk9bYn5tNmJ+TXolcGJkQ1ouL3Zddko0NmdGQnYsc1JpYix+bUIyLGtOS3duTG1QP1p2ek9xMS0lUExbclFCW25WP2pOLldfeCxWaFdSNGlhS1hiOSs5d2U/fEJsbH5rLm1SM1ZEYTdsekRhaz9MNmNkP11TNnhdWUJpNlVYUWpOdl9MVk8vSmNhX216fnw5alpPZjBWU3NzUUMwWmJFOFtFfEFKNDBHdEpRZHFPYnA9M0pfWkx1TmxhZzJ0fE1HREdPc19dP1kuLjMwVjNud2ppcmQtK0o0TkwxMVs9JlIucU1IZ2JrRnIzLiZfYjMlZG5uR1YwNzNzVmdnWVlMRHNkdkhJfHpGQ1tfTnUzVG9RczJoazVSa1IueE5fTjJddU43SS10Z1lSd3FrQU1tNjZlVWkvOSUvK3dWdXFtSHFafCxtazVFL09MVndycVVYd2xx'}]);
_stq.push([ 'clickTrackerInit', '1', '9599' ]);
</script>
<script defer id="bilmur" data-customproperties="{&quot;subservice&quot;:&quot;landpack&quot;,&quot;enq_jquery&quot;:&quot;1&quot;,&quot;logged_in&quot;:&quot;0&quot;,&quot;wptheme&quot;:&quot;h4&quot;,&quot;wptheme_is_block&quot;:&quot;0&quot;}" data-provider="wordpress.com" data-service="simple"  src="/wp-content/js/bilmur.min.js?i=11&m=202402" defer></script>
<script>
if ( 'object' === typeof wpcom_mobile_user_agent_info ) {

	wpcom_mobile_user_agent_info.init();
	var mobileStatsQueryString = "";
	
	if( false !== wpcom_mobile_user_agent_info.matchedPlatformName )
		mobileStatsQueryString += "&x_" + 'mobile_platforms' + '=' + wpcom_mobile_user_agent_info.matchedPlatformName;
	
	if( false !== wpcom_mobile_user_agent_info.matchedUserAgentName )
		mobileStatsQueryString += "&x_" + 'mobile_devices' + '=' + wpcom_mobile_user_agent_info.matchedUserAgentName;
	
	if( wpcom_mobile_user_agent_info.isIPad() )
		mobileStatsQueryString += "&x_" + 'ipad_views' + '=' + 'views';

	if( "" != mobileStatsQueryString ) {
		new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv' + mobileStatsQueryString + '&baba=' + Math.random();
	}
	
}
</script>		<script src="https://s1.wp.com/wp-content/js/def-queue.js?v=1566842360" defer></script>

					<!-- A8C Analytics [start] -->
			<script type="text/javascript">
				( function() {
					'use strict';

					var setupAnalytics = function() {
						window.a8cAnalyticsConfig = {"cookieBanner":{"version":"2","cssZIndex":50001,"skipBanner":false,"cookieDomain":"wordpress.com","v1CookieName":"sensitive_pixel_option","v2CookieName":"sensitive_pixel_options","v1Text":"Nuestra p\u00e1gina web usa cookies. Al continuar aceptas su uso. <a target=\"_blank\" href=\"https:\/\/automattic.com\/es\/cookies\/\">Obt\u00e9n m\u00e1s informaci\u00f3n<\/a>, incluyendo c\u00f3mo administrar las cookies.","v2Text":"Como empresa de c\u00f3digo abierto, nos tomamos tu privacidad muy en serio y queremos actuar con la m\u00e1xima transparencia. En resumen: utilizamos cookies para recopilar ciertos datos personales (como los datos de navegaci\u00f3n, las direcciones IP y otros identificadores \u00fanicos). Algunas de estas cookies son absolutamente necesarias para que todo funcione correctamente, mientras que otras las puedes elegir para optimizar tu experiencia al usar nuestro sitio y nuestros servicios. ","v2OptionsText":"Tu privacidad es extremamente importante para nosotros. Nosotros y nuestros socios utilizamos, almacenamos y procesamos tus datos personales para optimizar: nuestro <strong>sitio web<\/strong>, por ejemplo, al mejorar la seguridad o realizar an\u00e1lisis; las <strong>actividades de marketing<\/strong> para ofrecer servicios de marketing o contenidos relevantes y tu <strong>experiencia de usuario<\/strong>, por ejemplo, al recordar el nombre de tu cuenta, la configuraci\u00f3n del idioma o la informaci\u00f3n del carrito, cuando corresponda. Puedes personalizar la configuraci\u00f3n de las cookies a continuaci\u00f3n. Obt\u00e9n m\u00e1s informaci\u00f3n en nuestra <a href=\"https:\/\/automattic.com\/es\/privacy\/\" target=\"_blank\">pol\u00edtica de privacidad<\/a> y nuestra <a href=\"https:\/\/automattic.com\/es\/cookies\/\" target=\"_blank\">pol\u00edtica de cookies<\/a>.","v2EssentialOptionHeading":"Obligatorio","v2EssentialOptionText":"Estas cookies son fundamentales para que nuestros sitios web y servicios realicen funciones b\u00e1sicas y, asimismo, nos sirven para gestionar determinadas prestaciones, como las que permiten a los usuarios registrados autentificarse y realizar funciones relacionadas con la cuenta, las que almacenan las preferencias establecidas por los usuarios (como el nombre de la cuenta, el idioma y la ubicaci\u00f3n) y las que garantizan que nuestros servicios funcionen correctamente.","v2AnalyticsOptionHeading":"Estad\u00edsticas","v2AnalyticsOptionText":"Adem\u00e1s, nos permiten optimizar el rendimiento mediante la recopilaci\u00f3n de informaci\u00f3n sobre la forma en que los usuarios interact\u00faan con nuestros sitios web.","v2AdvertisingOptionHeading":"Publicidad","v2AdvertisingOptionText":"Estas cookies las configuramos, junto con nuestros socios publicitarios, para ofrecerte contenido relevante y entender la efectividad de ese contenido.","v1ButtonText":"Entendido","v2CustomizeButtonText":"Personalizar","v2AcceptAllButtonText":"Aceptar todas","v2AcceptSelectionButtonText":"Aceptar selecci\u00f3n","hiddenConsents":[],"isLoggedIn":false},"doNotSellDialog":{"contactEmailAddress":"privacypolicyupdates@automattic.com"},"fireAnalyticsOptions":{"lpName":"logged-out-homepage","lpVariation":"","lpPersonalVariation":null}};
					};

					if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
						defQueue.items.push( setupAnalytics );
					} else {
						setupAnalytics();
					}
				} )();
			</script>

			<div style="display: none;" id="a8c-analytics">
	<script type="text/javascript">
	( function() {
		'use strict';

		/**
		 * Establish the farthest away parent from an element matching
		 * a given list of selectors. Selectors can be css classes, IDs,
		 * element types, etc. (e.g. '.my-class', '#my-id', 'div', etc.)
		 */
		const getLastMatchingAncestor = ( event, selectors ) => {
			let { target: element } = event;

			let foundElement = null;

			while ( element && !foundElement ) {
				for ( const selector of selectors ) {
					if ( element.matches( selector ) ) {
						foundElement = element;
						break;
					}
				}

				element = element.parentElement;
			}

			return foundElement;
		}

		/**
		 * Establish the closest parent from an element matching
		 * a given list of selectors. Selectors can be css classes, IDs,
		 * element types, etc. (e.g. '.my-class', '#my-id', 'div', etc.)
		 */
		const getClosestMatchingAncestor = ( event, selectors ) => {
			let { target: element } = event;
			let foundElement;

			for ( const selector of selectors ) {
				foundElement = element.closest( selector );
				if ( foundElement ) {
					break;
				}
			}

			return foundElement;
		}

		/**
		 * Main function to setup analytics.
		 */
		const setupAnalytics = () => {
			/**
			 * Returns the current page path.
			 */
			function getCurrentPagePath() {
				return window.location.pathname.replace( /^\/|\/$/g, '' );
			}

			/**
			 * Returns the current page name.
			 */
			function getCurrentPageName() {
				return getCurrentPagePath().replace( getLocaleInPagePathRegExp(), '' );
			}

			/**
			 * Returns the current page locale.
			 */
			function getCurrentPageLocale() {
				const currentPagePath = getLocaleInPagePathRegExp().exec( getCurrentPagePath() );
				return getCurrentPagePath !== null && getCurrentPagePath.length === 2 ? getCurrentPagePath[1] : '';
			}
			/**
			 * Helper function to extract locale from page path.
			 */
			function getLocaleInPagePathRegExp() {
				return /^(af|als|am|an|ar|arc|as|ast|av|ay|az|ba|bel|bg|bm|bn|bo|br|bs|ca|ce|ckb|cs|csb|cv|cy|da|de|dv|dz|el|el\-po|en|en\-gb|eo|es|es\-mx|et|eu|fa|fi|fo|fr|fr\-be|fr\-ca|fr\-ch|fur|fy|ga|gd|gl|gn|gu|he|hi|hr|hu|hy|ia|id|ii|ilo|is|it|ja|ka|kir|km|kn|ko|kk|ks|kv|la|li|lo|lv|lt|mk|ml|mwl|mn|mr|ms|mya|nah|nap|ne|nds|nl|nn|nb|non|nv|oci|or|os|pa|pl|ps|pt|pt\-br|qu|ro|ru|rup|sc|si|sk|skr|sl|snd|so|sq|sr|su|sv|ta|te|th|tl|tir|tr|tt|ty|udm|ug|uk|ur|uz|vec|vi|wa|xal|yi|yo|za|zh\-cn|zh\-tw)(?:\/|$)/;
			}

			/**
			 * Returns the config for WPcom analytics. Sets various event props
			 * used in tracking, e.g. locale, page path, etc. Mainly used for Tracks
			 * event props.
			 */
			function getWPCOMAnalyticsDefaultConfig() {
				return {
					// Current page props.
					currentPagePath: getCurrentPagePath(),
					currentPageName: getCurrentPageName(),
					currentPageLocale: getCurrentPageLocale(),

					// Page variation props.
					pageVariation: '',
					pagePersonalVariation: '',

					// Current user props.
					currentUserIdHash: "",
					currentUserIdHashShort: "",
					currentUserEmailHash: "",

					// Other misc. props.
					isHomepage: true,
					affiliateJSVersion: "1557961113",
				}
			}


			// When a8c-analytics:loaded is fired, start main event handling.
			document.addEventListener( 'a8c-analytics:loaded', () => {
				const cb            = window.a8cAnalytics.cb;
				const kit           = window.a8cAnalytics.kit;
				const config        = getWPCOMAnalyticsDefaultConfig();
				const configOptions = window.a8cAnalyticsConfig.fireAnalyticsOptions;

				// Extend config with any custom props.
				Object.assign( window.a8cAnalyticsConfig, config );

				// Backcompat. for `lpName` and `lpVariation` config properties.
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-homepage' === configOptions.lpName ? configOptions.lpName : config.currentPageName;
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-app-promo' === configOptions.lpName ? configOptions.lpName : config.currentPageName;

				// Backcompat. for `lpPersonalVariation` config property.
				config.pageVariation        = ! configOptions.pageVariation && configOptions.lpVariation ? configOptions.lpVariation : config.pageVariation;
				config.pagePersonalVariation = ! configOptions.pagePersonalVariation && configOptions.lpPersonalVariation ? configOptions.lpPersonalVariation : config.pagePersonalVariation;

				/**
				 * Applies linkers, e.g. for "forwarding" certain URL parameters between WordPress.com
				 * and other properties (e.g. Jetpack.com). Used for affiliate tracking, coupons, etc.
				 */
				const applyLinkers = () => {
					kit.linkQueryVars( [
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack|woocommerce|crowdsignal|wpjobmanager)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'aff',
								'affiliate',
								'cid', // Aff campaign ID.
								'sid', // Aff sub ID.
								'irclickid' // Impact Affiliate Click ID
							],
						},
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'coupon',
							],
						},
					] );
				}

				/**
				 * Handles currencies. Gets the currency value from cookies, and sets the currency
				 * if the cookie is not present. Can also be overridden by setting the `currency` URL
				 * paramter.
				 */
				const fireCurrencyHandlers = () => {
					let currency = kit.getQueryVar( 'currency' ) || '';

					if ( ! currency && 'amex-business-in' === config.currentPageName ) {
						currency = 'USD'; // Special case for this LP.
					}
					if ( currency ) {
						kit.docCookies.setItem( 'landingpage_currency', currency, 31536000, '/', '.rootDomain' );
					}
				};

				/**
				 * Fires the `wpcom_page_view` Tracks event.
				*/
				const fireTracks = () => {
					const props = Object.assign( {}, kit.getQueryVars( '', kit.QUERY_PARAMS ), {
						// Page props.
						path: config.currentPagePath,
						name: config.currentPageName,
						locale: config.currentPageLocale,
						variation: config.pageVariation,
						personal_variation: config.pagePersonalVariation,

						// Back compat. LP props.
						lp_name: config.currentPageName,
						lp_variation: config.pageVariation,
						lp_personal_variation: config.pagePersonalVariation,
					} );
					window._tkq.push( [ 'recordEvent', 'wpcom_page_view', props ] );
				};

				/**
				 * Handles the referral tracking.
				*/
				const fireAffiliateReferrals = () => {
					kit.attachScriptElement( 'https://s1.wp.com/wp-content/themes/h4/landing/marketing/js/affiliate-referrals.js?v=' + config.affiliateJSVersion );
				};

				/**
				 * Loads the Google Ads gtag.
				 */
				const loadGoogleAdsGtag = () => {
						kit.loadGtag( 'AW-946162814' );
				}

				/**
				 * Loads and fires the Google Analytics 4.
				*/
				const fireGoogleAnalyticsFour = () => {
					const gtagOptions = {
						'anonymize_ip': true,
						'use_amp_client_id': true
					};

					kit.loadGtag( 'G-1H4VG5F5JF', gtagOptions );
				}

				const fireParsely = ( trackingId ) => {
					kit.loadParselyTracker( trackingId );
				}

				/**
				 * Loads and fires the Facebook Pixel.
				 */
				const fireFacebook = () => {
					kit.loadFacebook();
					fbq( 'init', '823166884443641' );
					fbq( 'track', 'PageView' );
				}

				/**
				 * Loads and fires Microsoft Clarity
				 */
				const fireMicrosoftClarity = () => {
					if ( window.clarity ) {
						return;
					}

					// Needs to be set prior to loading the external script.
					window.clarity =
						window.clarity ||
						function () {
							( window.clarity.q = window.clarity.q || [] ).push( arguments );
						};

					const clarityScript = kit.attachScriptElement( 'https://www.clarity.ms/tag/j0cc1i1dba' );

					document.body.appendChild( clarityScript );
				};

				const fireImpactAffiliate = () => {
					kit.loadImpactAffiliate( config.currentUserIdHash, config.currentUserEmailHash );
				}

				/**
				 * Handles scroll percentage tracking.
				 */
				const trackScrollPercentage = () => {
					const scrollPosition = window.pageYOffset;
					const pageHeight = document.body.scrollHeight - window.innerHeight;
					const scrollProgress = ( scrollPosition / pageHeight ) * 100;

					// Check if the user has scrolled to 25%, 50%, 75%, or 100% of the page
					if ( scrollProgress >= 25 && scrollProgress < 50 ) {
						dispatchScrollCustomEvent( 25 )
					} else if ( scrollProgress >= 50 && scrollProgress < 75 ) {
						dispatchScrollCustomEvent( 50 )
					} else if ( scrollProgress >= 75 && scrollProgress < 100 ) {
						dispatchScrollCustomEvent( 75 )
					} else if ( scrollProgress >= 100 ) {
						dispatchScrollCustomEvent( 100 )
					}
				}

				/**
				 * Dispatches a custom event with the scroll percentage.
				 */
				const dispatchScrollCustomEvent = ( scrollPercentage ) => {
					const event = new CustomEvent( `PageScrollPercentage${scrollPercentage}`, { detail: scrollPercentage } );
					window.dispatchEvent(event);
				}

				/**
				 * Handles the scroll tracking callback. E.g. firing Tracks and GA events.
				 */
				const scrollTrackingCallback = ( event ) => {
					const { detail: scrollPercentage } = event;
					const trackingProps = {};

					// Event props.
					trackingProps.percent = event.detail ?? 0;
					trackingProps.path = config.currentPagePath || '';
					trackingProps.name = config.currentPageName || '';
					trackingProps.locale = config.currentPageLocale || '';
					trackingProps.variation = config.pageVariation || '';
					trackingProps.personal_variation = config.pagePersonalVariation || '';
					trackingProps.lp_name = config.currentPageName || '';
					trackingProps.lp_variation = config.pageVariation || '';
					trackingProps.lp_personal_variation = config.pagePersonalVariation || '';

					tracksAnalyticsScrollEvent( trackingProps );
				}

				/**
				 * Dispatches a Tracks event for page scroll.
				 */
				const tracksAnalyticsScrollEvent = ( trackingProps ) => {
					window._tkq.push( [ 'recordEvent', 'wpcom_page_scroll', trackingProps ] );
				}

				// Call the trackScrollProgress function every time the user scrolls
				window.addEventListener( 'scroll', trackScrollPercentage );

				// Listen to events for specific scroll percentages, each event is only acted upon once.
				window.addEventListener( 'PageScrollPercentage25', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage50', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage75', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage100', scrollTrackingCallback, { once: true } )

				/**
				 * Handles click tracking for certain elements in Tracks and GA.
				 */
				const setupTracksGAClickTracking = () => {
					document.querySelector( 'body' ).addEventListener( 'click', ( event ) => {
						// We only care about clicks on certain elements.
						if ( event.target.matches( 'a, button, .click-tracking-enable' ) ) {
							const { target: clickEventTarget } = event;

							// Initialize eventProps object with some defaults.
							const eventProps = {};
							eventProps.path = config.currentPagePath || '';
							eventProps.name = config.currentPageName || '';
							eventProps.locale = config.currentPageLocale || '';
							eventProps.variation = config.pageVariation || '';
							eventProps.personal_variation = config.pagePersonalVariation || '';

							// Identify farthest and closest parent element.
							const selectors = [ '.wpcom-masterbar.wpcom-header', '.lpc', '.lp-module', 'section', 'post', 'article' ];
							const section = getLastMatchingAncestor( event, selectors );
							const container = getClosestMatchingAncestor( event, selectors );

							// Get class name and ID for container and add to props.
							eventProps.container_id = container ? container.getAttribute( 'id' ) : '';
							eventProps.container_class = container ? container.getAttribute( 'class' ) : '';
							eventProps.container = eventProps.container_id || eventProps.container_class;

							// What type of element have we clicked?
							eventProps.is_cta = clickEventTarget.matches( 'is-cta' ) ?? false;
							eventProps.is_in_header_nav = clickEventTarget.classList.contains('x-nav-link') || clickEventTarget.classList.contains('x-dropdown-link') || clickEventTarget.classList.contains('x-menu-link') || section === 'lpc-header-nav' || section === 'wpcom-masterbar.wpcom-header';
							const isClickedElementButton = clickEventTarget.classList.contains('lpc-button') || clickEventTarget.classList.contains('button') || clickEventTarget.classList.contains('wp-block-button__link');
							const isParentElementButton = clickEventTarget.parentElement && (clickEventTarget.parentElement.classList.contains('lpc-button') || clickEventTarget.parentElement.classList.contains('button') || clickEventTarget.parentElement.classList.contains('wp-block-button__link'));
							eventProps.is_button = isClickedElementButton || isParentElementButton;

							// Link data.
							eventProps.href = clickEventTarget.getAttribute( 'href' ) || '';
							eventProps.target = clickEventTarget.getAttribute( 'target' ) || '';
							eventProps.text = clickEventTarget.innerText || '';

							// Emit tracking event in Tracks and GA.
							window._tkq.push( [ 'recordEvent', 'wpcom_link_click', eventProps ] );
							// Temporary duplicate event using beacon api to verify functionality.
							window._tkq.push( [ 'recordEvent', 'wpcom_link_click_beacon', Object.assign( {}, eventProps, { use_beacon: true } ) ] );

							// TODO: Implement a click delay on navigation links and CTA buttons to improve data integrity.
							// if ( props.is_in_header_nav || props.is_cta || props.is_button ) {
							// 	if ( props.href && 0 !== props.href.indexOf( '#' ) && -1 !== [ '', '_top', '_self' ].indexOf( props.target ) ) {
							// 		event.preventDefault(); // Allow time for trackers to record the click.

							// 		setTimeout( function() {
							// 			document.location = props.href;
							// 		}, 300 );
							// 	}
							// }

						}
					});
				}


				/**
				 * Add cookie and stats tracking for the Landpack language picker.
				 */
				const setupLocaleChangeTracking = () => {

					function createLocaleCookie( locale ) {
						const cookieDomain = '.wordpress.com';
						const cookieName   = 'wpcom_locale';

						const date = new Date();
						date.setTime( date.getTime() + ( 5 * 365 * 24 * 60 * 60 * 1000 ) );

						const expires = " expires=" + date.toGMTString();
						document.cookie = cookieName + '=' + locale + ';' + expires +'; path=/; domain=' + cookieDomain;
					}

					function createStatsRequest( locale, href ) {
						const languageChangeStat = new Image();
						languageChangeStat.onload = () => window.location.href = href;

						languageChangeStat.onerror = languageChangeStat.onload;
						languageChangeStat.src     = 'https://pixel.wp.com/g.gif?v=wpcom-no-pv&x_language-switcher=manual-switch-' + locale + '&rm=' + Math.random();
					}

					document.body.addEventListener( 'click', ( event ) => {
						const { target } = event;

						if ( target.matches( '.lp-language-picker a[lang]' ) ) {
							event.preventDefault();

							const code = target.getAttribute( 'lang' );
							const href = target.getAttribute( 'href' );

							createLocaleCookie( code );
							createStatsRequest( code, href );
						}
					});
				}

				/**
				 * Loads and fires the Bing tracking pixel.
				 */
				const fireBing = () => {
					( function( w, d, t, r, u ) {
						var f, n, i;
						w[ u ] = w[ u ] || [], f = function() {
							var o = { ti: "4074038" };
							o.q = w[ u ], w[ u ] = new UET( o ), w[ u ].push( "pageLoad" )
						}, n = d.createElement( t ), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
							var s = this.readyState;
							s && s !== "loaded" && s !== "complete" || ( f(), n.onload = n.onreadystatechange = null )
						}, i = d.getElementsByTagName( t )[ 0 ], i.parentNode.insertBefore( n, i )
					} )( window, document, "script", "//bat.bing.com/bat.js", "uetq" );
				}

				/**
				 * Adds a click event for Facebook pixel tracking on the /webinar sub pages.
				 */
				const trackFacebookWebinarClicks = () => {
					const facebookPixelURL = 'https://www.facebook.com/tr?id=759053181468957&ev=SubscribedButtonClick&noscript=1';

					const elementsToTrack = document.getElementsByClassName( 'webinar-facebook-click-track' );

					const handleFacebookClickEvent = ( event ) => {
						const facebookImgPixel = document.createElement( 'img' );
						facebookImgPixel.width = 1;
						facebookImgPixel.height = 1;
						facebookImgPixel.src = facebookPixelURL;

						document.body.appendChild( facebookImgPixel );
					}

					Array.from( elementsToTrack ).forEach( ( element ) => element.addEventListener( 'click', handleFacebookClickEvent ));
				}

				// Apply the URL parameter linkers.
				applyLinkers();

				// Add "essential" trackers to queue.
				cb.addTracker( 'essential', false, fireCurrencyHandlers );

				// Add "analytics" trackers to queue.
				cb.addTracker( 'analytics', false, fireTracks );
				cb.addTracker( 'analytics', false, fireAffiliateReferrals );
				cb.addTracker( 'analytics', false, setupTracksGAClickTracking );
				cb.addTracker( 'analytics', false, trackScrollPercentage );
				cb.addTracker( 'analytics', false, setupLocaleChangeTracking );
				cb.addTracker( 'analytics', true, fireGoogleAnalyticsFour );
				cb.addTracker( 'analytics', true, () => fireParsely( 'wordpress.com' ) );

				// Add "advertising" trackers to queue.
				cb.addTracker( 'advertising', true, loadGoogleAdsGtag );
				cb.addTracker( 'advertising', true, fireFacebook );
				cb.addTracker( 'advertising', true, trackFacebookWebinarClicks );
				cb.addTracker( 'advertising', true, fireBing );
				cb.addTracker( 'advertising', true, window.addEventListener( 'load', () => kit.fireHotjar( 227769 ) ) );
				// cb.addTracker( 'advertising', true, fireMicrosoftClarity ); - Disabling for now.
				cb.addTracker( 'advertising', true, fireImpactAffiliate );

				// Maybe fire trackers now, via cookie banner, based on bucketed consent.
				cb.maybeFireTrackers();
			});
		};
		// CCPA - Do Not Sell My Data.
		document.addEventListener( 'a8c-analytics:loaded-is-ccpa', ( event ) => {
			const { detail } = event;
			const isCCPAEligible = JSON.parse( detail ).isCCPA;

			if ( ! isCCPAEligible ) {
				document.querySelectorAll( '[data-is-ccpa-dnsd]' ).forEach( ( element ) => {
					const parent = element.parentNode;
					const parentTagName = parent.tagName.toLowerCase();

					// If the link in a part of a list, remove the entire parent item.
					// Otherwise, remove only the link element.
					( parentTagName === 'li' ? parent : element ).remove();
				} );
				return;
			}

			document.querySelector( '[data-is-ccpa-dnsd-trigger]' ).onclick = ( event ) => {
				event.preventDefault();
				window.a8cAnalytics.dnsd.show();
			};
		} );

		if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
			defQueue.items.push( setupAnalytics );
		} else {
			setupAnalytics();
		}
	} )();
	</script>
</div>

			<script type="text/javascript">
				( function() {
					'use strict';
					var currentScript = document.currentScript;

					var setupAnalytics = function() {
						function getScript() {
							var script = document.createElement( 'script' );
							var prev = currentScript || document.getElementsByTagName( 'script' )[ 0 ];
							script.setAttribute( 'src', "https:\/\/s0.wp.com\/wp-content\/mu-plugins\/a8c-analytics\/a8c-analytics.js?v=1702465711" );
							script.setAttribute( 'async', true );
							prev.parentNode.insertBefore( script, prev );
						}

													getScript();
											};

					if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
						defQueue.items.push( setupAnalytics );
					} else {
						setupAnalytics();
					}
				} )();
			</script>
			<!-- A8C Analytics [end] -->
		
		<script type="text/javascript">
			var setupDoNotSellCallback = function() {
				window.doNotSellCallback = function() {
					var li = document.getElementById( 'california-privacy-opt-out' );
					if ( li ) li.style.display = 'block';
					li = document.getElementById( 'california-privacy-notice' );
					if ( li ) li.style.display = 'block';
					return true;
				}
			};

			if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
				defQueue.items.push( setupDoNotSellCallback );
			} else {
				setupDoNotSellCallback();
			}
		</script>

				<!-- CCPA [start] -->
		<script type="text/javascript">
			( function () {

				var setupPrivacy = function() {

					// Minimal Mozilla Cookie library
					// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework
					var cookieLib = window.cookieLib = {getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,o,n,t,r,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var c="";if(n)switch(n.constructor){case Number:c=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:c="; expires="+n;break;case Date:c="; expires="+n.toUTCString()}return"rootDomain"!==r&&".rootDomain"!==r||(r=(".rootDomain"===r?".":"")+document.location.hostname.split(".").slice(-2).join(".")),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+c+(r?"; domain="+r:"")+(t?"; path="+t:"")+(i?"; secure":""),!0}};

					// Implement IAB USP API.
					window.__uspapi = function( command, version, callback ) {

						// Validate callback.
						if ( typeof callback !== 'function' ) {
							return;
						}

						// Validate the given command.
						if ( command !== 'getUSPData' || version !== 1 ) {
							callback( null, false );
							return;
						}

						// Check for GPC. If set, override any stored cookie.
						if ( navigator.globalPrivacyControl ) {
							callback( { version: 1, uspString: '1YYN' }, true );
							return;
						}

						// Check for cookie.
						var consent = cookieLib.getItem( 'usprivacy' );

						// Invalid cookie.
						if ( null === consent ) {
							callback( null, false );
							return;
						}

						// Everything checks out. Fire the provided callback with the consent data.
						callback( { version: 1, uspString: consent }, true );
					};

					// Initialization.
					document.addEventListener( 'DOMContentLoaded', function() {

						// Internal functions.
						var setDefaultOptInCookie = function() {
							var value = '1YNN';
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'usprivacy', value, 365 * 24 * 60 * 60, '/', domain );
						};

						var setDefaultOptOutCookie = function() {
							var value = '1YYN';
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'usprivacy', value, 24 * 60 * 60, '/', domain );
						};

						var setDefaultNotApplicableCookie = function() {
							var value = '1---';
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'usprivacy', value, 24 * 60 * 60, '/', domain );
						};

						var setCcpaAppliesCookie = function( applies ) {
							var domain = '.wordpress.com' === location.hostname.slice( -14 ) ? '.rootDomain' : location.hostname;
							cookieLib.setItem( 'ccpa_applies', applies, 24 * 60 * 60, '/', domain );
						}

						var maybeCallDoNotSellCallback = function() {
							if ( 'function' === typeof window.doNotSellCallback ) {
								return window.doNotSellCallback();
							}

							return false;
						}

						// Look for usprivacy cookie first.
						var usprivacyCookie = cookieLib.getItem( 'usprivacy' );

						// Found a usprivacy cookie.
						if ( null !== usprivacyCookie ) {

							// If the cookie indicates that CCPA does not apply, then bail.
							if ( '1---' === usprivacyCookie ) {
								return;
							}

							// CCPA applies, so call our callback to add Do Not Sell link to the page.
							maybeCallDoNotSellCallback();

							// We're all done, no more processing needed.
							return;
						}

						// We don't have a usprivacy cookie, so check to see if we have a CCPA applies cookie.
						var ccpaCookie = cookieLib.getItem( 'ccpa_applies' );

						// No CCPA applies cookie found, so we'll need to geolocate if this visitor is from California.
						// This needs to happen client side because we do not have region geo data in our $SERVER headers,
						// only country data -- therefore we can't vary cache on the region.
						if ( null === ccpaCookie ) {

							var request = new XMLHttpRequest();
							request.open( 'GET', 'https://public-api.wordpress.com/geo/', true );

							request.onreadystatechange = function () {
								if ( 4 === this.readyState ) {
									if ( 200 === this.status ) {

										// Got a geo response. Parse out the region data.
										var data = JSON.parse( this.response );
										var region      = data.region ? data.region.toLowerCase() : '';
										var ccpa_applies = ['california', 'colorado', 'connecticut', 'utah', 'virginia'].indexOf( region ) > -1;
										// Set CCPA applies cookie. This keeps us from having to make a geo request too frequently.
										setCcpaAppliesCookie( ccpa_applies );

										// Check if CCPA applies to set the proper usprivacy cookie.
										if ( ccpa_applies ) {
											if ( maybeCallDoNotSellCallback() ) {
												// Do Not Sell link added, so set default opt-in.
												setDefaultOptInCookie();
											} else {
												// Failed showing Do Not Sell link as required, so default to opt-OUT just to be safe.
												setDefaultOptOutCookie();
											}
										} else {
											// CCPA does not apply.
											setDefaultNotApplicableCookie();
										}
									} else {
										// Could not geo, so let's assume for now that CCPA applies to be safe.
										setCcpaAppliesCookie( true );
										if ( maybeCallDoNotSellCallback() ) {
											// Do Not Sell link added, so set default opt-in.
											setDefaultOptInCookie();
										} else {
											// Failed showing Do Not Sell link as required, so default to opt-OUT just to be safe.
											setDefaultOptOutCookie();
										}
									}
								}
							};

							// Send the geo request.
							request.send();
						} else {
							// We found a CCPA applies cookie.
							if ( ccpaCookie === 'true' ) {
								if ( maybeCallDoNotSellCallback() ) {
									// Do Not Sell link added, so set default opt-in.
									setDefaultOptInCookie();
								} else {
									// Failed showing Do Not Sell link as required, so default to opt-OUT just to be safe.
									setDefaultOptOutCookie();
								}
							} else {
								// CCPA does not apply.
								setDefaultNotApplicableCookie();
							}
						}
					} );
				};

				// Kickoff initialization.
				if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
					defQueue.items.push( setupPrivacy );
				} else {
					setupPrivacy();
				}

			} )();
		</script>

		<!-- CCPA [end] -->
		
	</body>
</html>
