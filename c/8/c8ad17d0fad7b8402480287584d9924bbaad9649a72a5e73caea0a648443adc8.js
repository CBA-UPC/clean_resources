!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[9308],{92463:(e,t,r)=>{r.d(t,{n:()=>i});var n=r(99810);function i(e={}){return(0,n.X)(e)}},24688:(e,t,r)=>{r.d(t,{I:()=>o,l:()=>l});var n=r(15034),i=r(20080),u=r(92463);unction o(e={}){let[t,r]=(0,i.oR)(u.n,e);return l(t,r,e)}},39720:(e,t,r)=>{r.d(t,{u:()=>i});var n=r(49422);(0,n.Bi)(;var i=(0,n.LM)(;Object.assign(i,["a","button","details","dialog","div","form","h1","h2","h3","h4","h5","h6","header","img","input","label","li","nav","ol","p","section","select","span","textarea","ul","svg"].reduce((e,t)=>(e[t]=(0,n.LM)(,e),{}))},6873:(e,t,r)=>{function n(e,...t){if(!e)return!1;let r=e.getAttribute("data-backdrop");return null!=r&&(""===r||"true"===r||!t.length||t.some()}r.d(t,{Vq:()=>et,L5:()=>ee,Rh:()=>U});var i=new WeakMap;function u(e,t,r){i.has(e)||i.set(e,new Map);let n=i.get(e),u=n.get(t);if(!u)return n.set(t,r()),()=>{var e;null==(e=n.get(t))||e(),n.delete(t)};let l=r(),o=return n.set(t,o),()=>{n.get(t)!==o||(l(),n.set(t,u))}}function l(e,t,r){return u(e,t,()=>{let n=e.getAttribute(t);return e.setAttribute(t,r),()=>{null==n?e.removeAttribute(t):e.setAttribute(t,n)}})}function o(e,t,r){return u(e,t,()=>{let n=t in e,i=e[t];return e[t]=r,()=>{n?e[t]=i:delete e[t]}})}function a(e,t){return e?u(e,"style",()=>{let r=e.style.cssText;return Object.assign(e.style,t),):()=>{}}var s=r(63745),d=r(59541),f=["SCRIPT","STYLE"];unction p(e,t,r,n){for(let i of t){if(!(null==i?void 0:i.isConnected))continue;let u=t.some(e=>!!e&&e!==i&&e.contains(i)),l=(0,s.Me)(i),o=i;for(;i.parentElement&&i!==l.body;){if(null==n||n(i.parentElement,o),!u)for(let n of i.parentElement.children)(function(e,t,r){return!f.includes(t.tagName)&&!!function(e,t){let r=(0,s.Me)(t),n=c(e);if(!r.body[n])return!0;for(;;){if(t===r.body)return!1;if(t[n])return!0;if(!t.parentElement)return!1;t=t.parentElement}}(e,t)&&!r.some(e=>e&&(0,s.r3)(t,e))})(e,n,t)&&r(n,o);i=i.parentElement}}}function v(e="",t=!1){return`__ariakit-dialog-${t?"ancestor":"outside"}${e?`-${e}`:""}`}function h(e,t=""){return(0,d.tS)(o(e,v("",!0),!0),o(e,v(t,!0),!0))}function m(e,t){if(e[v(t,!0)])return!0;let r=v(t);for(;;){if(e[r])return!0;if(!e.parentElement)return!1;e=e.parentElement}}function b(e,t){let r=[],i=t.map(e=>null==e?void 0:e.id);return p(e,t,t=>{n(t,...i)||r.unshift(function(e,t=""){return(0,d.tS)(o(e,v(),!0),o(e,v(t),!0))}(t,e))},(t,n)=>{n.hasAttribute("data-dialog")&&n.id!==e||r.unshift(h(t,e))}),()=>{r.forEach(e=>e())}}var E=r(39720),g=r(61749),y=r(15034),x=r(9132),w=r(97699),S=r(95004),M=r(2629);function L({store:e,backdrop:t,backdropProps:r,alwaysVisible:n,hidden:i}){let u=(0,S.useRef)(null),l=(0,y.M)({disclosure:e}),o=e.useState("contentElement");(0,x.Gw)(()=>{let e=u.current;e&&o&&(e.style.zIndex=getComputedStyle(o).zIndex)},[o]),(0,x.Gw)(()=>{let e=null==o?void 0:o.id;if(!e)return;let t=u.current;if(t)return h(t,e)},[o]),null!=i&&(r=(0,w.EZ)((0,w.ih)({},r),{hidden:i}));let a=(0,g.fM)((0,w.EZ)((0,w.ih)({store:l,role:"presentation","data-backdrop":(null==o?void 0:o.id)||"",alwaysVisible:n},r),{ref:(0,x.qq)(null==r?void 0:r.ref,u),style:(0,w.ih)({position:"fixed",top:0,right:0,bottom:0,left:0},null==r?void 0:r.style)}));if(!t)return null;if((0,S.isValidElement)(t))return(0,M.jsx)(E.u,(0,w.EZ)((0,w.ih)({},a),{render:t}));let s="boolean"!=typeof t?t:"div";return(0,M.jsx)(E.u,(0,w.EZ)((0,w.ih)({},a),{render:(0,M.jsx)(s,{})}))}var k=r(53642);function j(e,t){if(!("style"in e))return d.ZT;if("inert"in HTMLElement.prototype)return o(e,"inert",!0);let r=(0,k.SI)(e,!0).map(e=>(null==t?void 0:t.some()?d.ZT:l(e,"tabindex","-1"));return(0,d.tS)(...r,l(e,"aria-hidden","true"),a(e,{pointerEvents:"none",userSelect:"none",cursor:"default"}))}var O=r(79153),_=r(12690),C=r(31999),R=(0,S.createContext)({}),q=r(41318);function F({store:e,type:t,listener:r,capture:n,domReady:i}){let u=(0,x.zX)(r),l=e.useState("open"),o=(0,S.useRef)(!1);(0,x.Gw)(()=>{if(!l||!i)return;let{contentElement:t}=e.getState();if(!t)return;let r=return t.addEventListener("focusin",r,!0),,[e,l,i]),(0,S.useEffect)(()=>{if(l)return(0,q.iN)(t,t=>{let{contentElement:r,disclosureElement:n}=e.getState(),i=t.target;r&&i&&!(!("HTML"===i.tagName||(0,s.r3)((0,s.Me)(i).body,i))||(0,s.r3)(r,i)||function(e,t){if(!e)return!1;if((0,s.r3)(e,t))return!0;let r=t.getAttribute("aria-activedescendant");if(r){let t=(0,s.Me)(e).getElementById(r);if(t)return(0,s.r3)(e,t)}return!1}(n,i)||i.hasAttribute("data-focus-trap")||function(e,t){if(!("clientY"in e))return!1;let r=t.getBoundingClientRect();return 0!==r.width&&0!==r.height&&r.top<=e.clientY&&e.clientY<=r.top+r.height&&r.left<=e.clientX&&e.clientX<=r.left+r.width}(t,r))&&(!o.current||m(i,r.id))&&u(t)},n)},[l,n])}function A(e,t){return"function"==typeof e?e(t):!!e}var N=r(51660),B=r(49422),I=(0,B.Bi)(e=>{var{autoFocusOnShow:t=!0}=e,r=(0,w.S0)(e,["autoFocusOnShow"]);return(0,x.OJ)(r,[t])});(0,B.LM)(e=>{let t=I(e);return(0,B.az)("div",t)});var P=(0,S.createContext)(0);function Z({level:e,children:t}){let r=(0,S.useContext)(P);return(0,M.jsx)(P.Provider,{value:Math.max(Math.min(e||r+1,6),1),children:t})}var $=(0,B.Bi)(e=>e=(0,w.EZ)((0,w.ih)({},e),{style:(0,w.ih)({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},e.style)}));(0,B.LM)(e=>{let t=$(e);return(0,B.az)("span",t)});var T=(0,B.Bi)(e=>e=$(e=(0,w.EZ)((0,w.ih)({"data-focus-trap":"",tabIndex:0,"aria-hidden":!0},e),{style:(0,w.ih)({position:"fixed",top:0,left:0},e.style)}))),z=(0,B.LM)(e=>{let t=T(e);return(0,B.az)("span",t)}),G=(0,S.createContext)(null),Y=r(86745);function D(e){queueMicrotask(}var V=(0,B.Bi)(e=>{var{preserveTabOrder:t,preserveTabOrderAnchor:r,portalElement:n,portalRef:i,portal:u=!0}=e,l=(0,w.S0)(e,["preserveTabOrder","preserveTabOrderAnchor","portalElement","portalRef","portal"]);let o=(0,S.useRef)(null),a=(0,x.qq)(o,l.ref),d=(0,S.useContext)(G),[f,c]=(0,S.useState)(null),[p,v]=(0,S.useState)(null),h=(0,S.useRef)(null),m=(0,S.useRef)(null),b=(0,S.useRef)(null),E=(0,S.useRef)(null);return(0,x.Gw)(()=>{let e=o.current;if(!e||!u){c(null);return}let t=function(e,t){return t?"function"==typeof t?t(e):t:(0,s.Me)(e).createElement("div")}(e,n);if(!t){c(null);return}let r=t.isConnected;if(!r&&(d||(0,s.Me)(e).body).appendChild(t),t.id||(t.id=e.id?`portal/${e.id}`:function(e="id"){return`${e?`${e}-`:""}${Math.random().toString(36).substr(2,6)}`}()),c(t),(0,Y.k$)(i,t),!r)return()=>{t.remove(),(0,Y.k$)(i,null)}},[u,n,d,i]),(0,x.Gw)(()=>{if(!t||!r)return;let e=(0,s.Me)(r).createElement("span");return e.style.position="fixed",r.insertAdjacentElement("afterend",e),v(e),,[t,r]),(0,S.useEffect)(()=>{if(!f||!t)return;let e=0,r=t=>{if(!(0,q.N)(t))return;let r="focusin"===t.type;if(cancelAnimationFrame(e),r)return(0,k.ss)(f);e=requestAnimationFrame(};return f.addEventListener("focusin",r,!0),f.addEventListener("focusout",r,!0),()=>{cancelAnimationFrame(e),f.removeEventListener("focusin",r,!0),f.removeEventListener("focusout",r,!0)}},[f,t]),l=(0,x.OJ)(l,e=>{if(e=(0,M.jsx)(G.Provider,{value:f||d,children:e}),!u)return e;if(!f)return(0,M.jsx)("span",{ref:a,id:l.id,style:{position:"fixed"},hidden:!0});e=(0,M.jsxs)(M.Fragment,{children:[t&&f&&(0,M.jsx)(z,{ref:m,className:"__focus-trap-inner-before",onFocus:e=>{(0,q.N)(e,f)?D((0,k.k0)()):D(h.current)}}),e,t&&f&&(0,M.jsx)(z,{ref:b,className:"__focus-trap-inner-after",onFocus:e=>{(0,q.N)(e,f)?D((0,k.e8)()):D(E.current)}})]}),f&&(e=(0,O.createPortal)(e,f));let r=(0,M.jsxs)(M.Fragment,{children:[t&&f&&(0,M.jsx)(z,{ref:h,className:"__focus-trap-outer-before",onFocus:e=>{e.relatedTarget!==E.current&&(0,q.N)(e,f)?D(m.current):D((0,k.e8)())}}),t&&(0,M.jsx)("span",{"aria-owns":null==f?void 0:f.id,style:{position:"fixed"}}),t&&f&&(0,M.jsx)(z,{ref:E,className:"__focus-trap-outer-after",onFocus:e=>{if((0,q.N)(e,f))D(b.current);else{let e=(0,k.k0)();if(e===m.current){requestAnimationFrame(()=>{var e;return null==(e=(0,k.k0)())?void 0:e.focus()});return}D(e)}}})]});return p&&t&&(r=(0,O.createPortal)(r,p)),(0,M.jsxs)(M.Fragment,{children:[r,e]})},[f,d,u,l.id,t,p]),l=(0,w.EZ)((0,w.ih)({},l),{ref:a})});(0,B.LM)(e=>{let t=V(e);return(0,B.az)("div",t)});var J=r(22689),H=r(49846),Q=r(24688),X=r(20080),K=(0,_.G6)();function W(e,t=!1){if(!e)return null;let r="current"in e?e.current:e;return r?t?(0,k.EB)(r)?r:null:r:null}var U=(0,B.Bi)(e=>{var{store:t,open:r,onClose:i,focusable:l=!0,modal:f=!0,portal:v=!!f,backdrop:h=!!f,backdropProps:E,hideOnEscape:y=!0,hideOnInteractOutside:N=!0,getPersistentElements:B,preventBodyScroll:P=!!f,autoFocusOnShow:$=!0,autoFocusOnHide:T=!0,initialFocus:z,finalFocus:G,unmountOnHide:Y}=e,D=(0,w.S0)(e,["store","open","onClose","focusable","modal","portal","backdrop","backdropProps","hideOnEscape","hideOnInteractOutside","getPersistentElements","preventBodyScroll","autoFocusOnShow","autoFocusOnHide","initialFocus","finalFocus","unmountOnHide"]);let X=(0,J.pQ)(),U=(0,S.useRef)(null),ee=(0,Q.I)({store:t||X,open:r,setOpen(e){if(e)return;let t=U.current;if(!t)return;let r=new Event("close",{bubbles:!1,cancelable:!0});i&&t.addEventListener("close",i,{once:!0}),t.dispatchEvent(r),r.defaultPrevented&&ee.setOpen(!0)}}),{portalRef:et,domReady:er}=(0,x.Hw)(v,D.portalRef),en=D.preserveTabOrder,ei=ee.useState(e=>en&&!f&&e.mounted),eu=(0,x.Me)(D.id),el=ee.useState("open"),eo=ee.useState("mounted"),ea=ee.useState("contentElement"),es=(0,g.xj)(eo,D.hidden,D.alwaysVisible);!function(e,t,r){let n=function({attribute:e,contentId:t,contentElement:r,enabled:n}){let[i,u]=(0,x.NW)(),l=(0,S.useCallback)(()=>{if(!n||!r)return!1;let{body:i}=(0,s.Me)(r),u=i.getAttribute(e);return!u||u===t},[i,n,r,e,t]);return(0,S.useEffect)(()=>{if(!n||!t||!r)return;let{body:i}=(0,s.Me)(r);if(l())return i.setAttribute(e,t),let o=new MutationObserver(;return o.observe(i,{attributeFilter:[e]}),,[i,n,t,r,l,e]),l}({attribute:"data-dialog-prevent-body-scroll",contentElement:e,contentId:t,enabled:r});(0,S.useEffect)(()=>{var t,r;if(!n()||!e)return;let i=(0,s.Me)(e),l=(0,s.Jj)(e),{documentElement:o,body:f}=i,c=o.style.getPropertyValue("--scrollbar-width"),p=c?parseInt(c):l.innerWidth-o.clientWidth,v=Math.round(o.getBoundingClientRect().left)+o.scrollLeft?"paddingLeft":"paddingRight",h=(0,_.mL)()&&!(0,_.V5)();return(0,d.tS)((t="--scrollbar-width",r=`${p}px`,o?u(o,t,()=>{let e=o.style.getPropertyValue(t);return o.style.setProperty(t,r),):,h?(()=>{var e,t;let{scrollX:r,scrollY:n,visualViewport:i}=l,u=null!=(e=null==i?void 0:i.offsetLeft)?e:0,o=null!=(t=null==i?void 0:i.offsetTop)?t:0,s=a(f,{position:"fixed",overflow:"hidden",top:`${-(n-Math.floor(o))}px`,left:`${-(r-Math.floor(u))}px`,right:"0",[v]:`${p}px`});return)():a(f,{overflow:"hidden",[v]:`${p}px`}))},[n,e])}(ea,eu,P&&!es),function(e,t,r){let n=function(e){let t=(0,S.useRef)();return(0,S.useEffect)(()=>{if(!e){t.current=null;return}return(0,q.iN)("mousedown",!0)},[e]),t}(e.useState("open")),i={store:e,domReady:r,capture:!0};F((0,w.EZ)((0,w.ih)({},i),{type:"click",listener:r=>{let{contentElement:i}=e.getState(),u=n.current;u&&(0,s.pn)(u)&&m(u,null==i?void 0:i.id)&&A(t,r)&&e.hide()}})),F((0,w.EZ)((0,w.ih)({},i),{type:"focusin",listener:r=>{let{contentElement:n}=e.getState();n&&r.target!==(0,s.Me)(n)&&A(t,r)&&e.hide()}})),F((0,w.EZ)((0,w.ih)({},i),{type:"contextmenu",listener:))}(ee,N,er);let{wrapElement:ed,nestedDialogs:ef}=function(e){let t=(0,S.useContext)(R),[r,n]=(0,S.useState)([]),i=(0,S.useCallback)(e=>{var r;return n(,(0,d.tS)(null==(r=t.add)?void 0:r.call(t,e),},[t]);(0,x.Gw)(()=>(0,C.Z_)(e,["open","contentElement"],r=>{var n;if(r.open&&r.contentElement)return null==(n=t.add)?void 0:n.call(t,e)}),[e,t]);let u=(0,S.useMemo)([e,i]);return{wrapElement:(0,S.useCallback)([u]),nestedDialogs:r}}(ee);D=(0,x.OJ)(D,ed,[ed]),(0,x.Gw)(()=>{if(!el)return;let e=U.current,t=(0,s.vY)(e,!0);t&&"BODY"!==t.tagName&&(e&&(0,s.r3)(e,t)||ee.setDisclosureElement(t))},[ee,el]),K&&(0,S.useEffect)(()=>{if(!eo)return;let{disclosureElement:e}=ee.getState();if(!e||!(0,s.iK)(e))return;let t=()=>{let t=!1,r=e.addEventListener("focusin",r,{capture:!0,once:!0}),(0,q.qx)(e,"mouseup",()=>{e.removeEventListener("focusin",r,!0),t||(0,k.Qw)(e)})};return e.addEventListener("mousedown",t),,[ee,eo]),(0,S.useEffect)(()=>{if(!f||!eo||!er)return;let e=U.current;if(e&&!e.querySelector("[data-dialog-dismiss]"))return function(e,t){let r=(0,s.Me)(e).createElement("button");return r.type="button",r.tabIndex=-1,r.textContent="Dismiss popup",Object.assign(r.style,{border:"0px",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"}),r.addEventListener("click",t),e.prepend(r),(e,ee.hide)},[ee,f,eo,er]),(0,x.Gw)(()=>{if(el||!eo||!er)return;let e=U.current;if(e)return j(e)},[el,eo,er]);let ec=el&&er;(0,x.Gw)(()=>{if(eu&&ec)return function(e,t){let{body:r}=(0,s.Me)(t[0]),n=[];return p(e,t,t=>{n.push(o(t,c(e),!0))}),(0,d.tS)(o(r,c(e),!0),}(eu,[U.current])},[eu,ec]);let ep=(0,x.zX)(B);(0,x.Gw)(()=>{if(!eu||!ec)return;let{disclosureElement:e}=ee.getState(),t=[U.current,...ep()||[],...ef.map(];return f?(0,d.tS)(b(eu,t),function(e,t){let r=[],i=t.map(;return p(e,t,e=>{n(e,...i)||r.unshift(j(e,t))}),(eu,t)):b(eu,[e,...t])},[eu,ee,ec,ep,ef,f]);let ev=!!$,eh=(0,x.yl)($),[em,eb]=(0,S.useState)(!1);(0,S.useEffect)(()=>{if(!el||!ev||!er||!(null==ea?void 0:ea.isConnected))return;let e=W(z,!0)||ea.querySelector("[data-autofocus=true],[autofocus]")||(0,k.YC)(ea,!0,v&&ei)||ea;eh((0,k.EB)(e)?e:null)&&(eb(!0),queueMicrotask(()=>{e.focus(),K&&e.scrollIntoView({block:"nearest",inline:"nearest"})}))},[el,ev,er,ea,z,v,ei,eh]);let eE=!!T,eg=(0,x.yl)(T),[ey,ex]=(0,S.useState)(!1);(0,S.useEffect)([el]);let ew=(0,S.useCallback)((e,t=!0)=>{let{disclosureElement:r}=ee.getState();if(function(e){let t=(0,s.vY)();return!(!t||e&&(0,s.r3)(e,t))&&!!(0,k.EB)(t)}(e))return;let n=W(G)||r;if(null==n?void 0:n.id){let e=(0,s.Me)(n),t=`[aria-activedescendant="${n.id}"]`,r=e.querySelector(t);r&&(n=r)}if(n&&!(0,k.EB)(n)){let e=(0,s.oq)(n,"[data-dialog]");if(e&&e.id){let t=(0,s.Me)(e),r=`[aria-controls~="${e.id}"]`,i=t.querySelector(r);i&&(n=i)}}let i=n&&(0,k.EB)(n);if(!i&&t){requestAnimationFrame(;return}eg(i?n:null)&&i&&(null==n||n.focus())},[ee,G,eg]);(0,x.Gw)(()=>{!el&&ey&&eE&&ew(U.current)},[el,ey,er,eE,ew]),(0,S.useEffect)(()=>{if(!ey||!eE)return;let e=U.current;return,[ey,eE,ew]);let eS=(0,x.yl)(y);(0,S.useEffect)(()=>{if(er&&eo)return(0,q.iN)("keydown",e=>{if("Escape"!==e.key||e.defaultPrevented)return;let t=U.current;if(!t||m(t))return;let r=e.target;if(!r)return;let{disclosureElement:n}=ee.getState();("BODY"===r.tagName||(0,s.r3)(t,r)||!n||(0,s.r3)(n,r))&&eS(e)&&ee.hide()},!0)},[ee,er,eo,eS]);let eM=(D=(0,x.OJ)(D,e=>(0,M.jsx)(Z,{level:f?1:void 0,children:e}),[f])).hidden,eL=D.alwaysVisible;D=(0,x.OJ)(D,e=>h?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(L,{store:ee,backdrop:h,backdropProps:E,hidden:eM,alwaysVisible:eL}),e]}):e,[ee,h,E,eM,eL]);let[ek,ej]=(0,S.useState)(),[eO,e_]=(0,S.useState)();return D=(0,x.OJ)(D,e=>(0,M.jsx)(J.Q9,{value:ee,children:(0,M.jsx)(J.oE.Provider,{value:ej,children:(0,M.jsx)(J.iw.Provider,{value:e_,children:e})})}),[ee]),D=(0,w.EZ)((0,w.ih)({id:eu,"data-dialog":"",role:"dialog",tabIndex:l?-1:void 0,"aria-labelledby":ek,"aria-describedby":eO},D),{ref:(0,x.qq)(U,D.ref)}),D=I((0,w.EZ)((0,w.ih)({},D),{autoFocusOnShow:em})),D=(0,g.fM)((0,w.ih)({store:ee},D)),D=(0,H.k)((0,w.EZ)((0,w.ih)({},D),{focusable:l})),D=V((0,w.EZ)((0,w.ih)({portal:v},D),{portalRef:et,preserveTabOrder:ei}))});function ee(e,t=J.pQ){return(0,B.LM)(r=>{let n=t(),i=r.store||n;return(0,X.Kw)(i,e=>!r.unmountOnHide||(null==e?void 0:e.mounted)||!!r.open)?(0,M.jsx)(e,(0,w.ih)({},r)):null})}var et=ee((0,B.LM)(e=>{let t=U(e);return(0,B.az)("div",t)}),J.pQ)},67005:(e,t,r)=>{r.d(t,{U:);var n=r(33734),i=r(49422),u=r(9132),l=r(97699),o=r(95004),a=r(63745),s=(0,i.Bi)(e=>{let t=(0,o.useRef)(null),r=(0,u.O)(t,e.as||"button"),[i,s]=(0,o.useState)(()=>!!r&&(0,a.iK)({tagName:r,type:e.type}));return(0,o.useEffect)(()=>{t.current&&s((0,a.iK)(t.current))},[]),e=(0,l.EZ)((0,l.ih)({role:i||"a"===r?void 0:"button"},e),{ref:(0,u.qq)(t,e.ref)}),e=(0,n.Y)(e)});(0,i.LM)(}}]);