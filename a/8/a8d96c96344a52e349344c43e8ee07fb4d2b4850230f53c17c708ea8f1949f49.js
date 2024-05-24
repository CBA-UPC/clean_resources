/*! For license information please see 9033.4c3ac2601a536be12e7e.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkgnavHeader=globalThis.webpackChunkgnavHeader||[]).push([[9033],{49033:(e,t,n)=>{n.r(t),n.d(t,{Modal:()=>Wt,ModalBody:()=>Ft,ModalCloseButton:()=>Dt,ModalFooter:()=>Mt,ModalHeader:()=>Lt,ModalOnExitType:()=>Ie,ModalSize:()=>_e,addFocusTrapElement:()=>Ue,modalDefaults:()=>Ge,resetModalId:);var r=n(66273),o=n.n(r),i=n(94821),a=n.n(i),c=n(50806),u=n(38353),l=n(94773),s=n(65474);ar p=f((),d=f((),b=f((),y=f((),v=f((),m=f((),h=f((function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports})),O=f((),g=f((),w=f((),x=f((),E=f((),j=f((),S=f((),P="function"==typeof Symbol&&Symbol.for,T=P?Symbol.for("react.element"):60103,C=P?Symbol.for("react.portal"):60106,k=P?Symbol.for("react.fragment"):60107,F=P?Symbol.for("react.strict_mode"):60108,D=P?Symbol.for("react.profiler"):60114,A=P?Symbol.for("react.provider"):60109,_=P?Symbol.for("react.context"):60110,I=P?Symbol.for("react.async_mode"):60111,M=P?Symbol.for("react.concurrent_mode"):60111,N=P?Symbol.for("react.forward_ref"):60112,R=P?Symbol.for("react.suspense"):60113,B=P?Symbol.for("react.suspense_list"):60120,L=P?Symbol.for("react.memo"):60115,z=P?Symbol.for("react.lazy"):60116,$=P?Symbol.for("react.block"):60121,G=P?Symbol.for("react.fundamental"):60117,q=P?Symbol.for("react.responder"):60118,H=P?Symbol.for("react.scope"):60119;r Y={AsyncMode:I,ConcurrentMode:M,ContextConsumer:_,ContextProvider:A,Element:T,ForwardRef:N,Fragment:k,Lazy:z,Memo:L,Portal:C,Profiler:D,StrictMode:F,Suspense:R,isAsyncMode:isConcurrentMode:W,isContextConsumer:function(e){return U(e)===_},isContextProvider:function(e){return U(e)===A},isElement:isForwardRef:function(e){return U(e)===N},isFragment:function(e){return U(e)===k},isLazy:function(e){return U(e)===z},isMemo:function(e){return U(e)===L},isPortal:function(e){return U(e)===C},isProfiler:function(e){return U(e)===D},isStrictMode:function(e){return U(e)===F},isSuspense:isValidElementType:typeOf:U},K=(f((),f((function(e){e.exports=Y})),Object.getOwnPropertySymbols),V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;(()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);var J="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";.resetWarningCache=function(){};function Z(){}e.resetWarningCache=Z;var te=f((),ne=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],re=ne.join(","),oe="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ie=ae=ce=function(e){return"INPUT"===e.tagName},ue=le=function(e,t){return!(!ue(e,t)||function(e){return e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return!1}var o=t,e.form);return!o||o===e}(e)}(t)||ie(t)<0)},se=ne.concat("iframe").join(","),fe=function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}ar be,ye=(be=[],{activateTrap:deactivateTrap:),ve=me=he=Oe=ge=te;e=Object.freeze({__proto__:null,createFocusTrap:function(e,t){var n,r=(null==t?void 0:t.document)||document,o={returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),i={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a=c=u=l=s=function(){if(i.tabbableGroups=i.containers.map((function(e){var t=e);if(t.length>0)return{container:e,firstTabbableNode:t[0],lastTabbableNode:t[t.length-1]}})).filter((function(e){return!!e})),i.tabbableGroups.length<=0&&!u("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},f=p=d=b=y=v=m=h=return(n={activate:deactivate:pause:unpause:updateContainerElements:).updateContainerElements(e),n}}).createFocusTrap,Te=function(e){!i,o().Component);var t,n,r=je(i);eturn t=i,(n=[{key:"getNodeForOption",value:function(e){var t=this.tailoredFocusTrapOptions[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=document.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n}},{key:"getReturnFocusNode",value:,{key:"updatePreviousElement",value:function(){var e=this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0);e&&(this.previouslyFocusedElement=e.activeElement)}},{key:"deactivateTrap",value:,{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var e=this.focusTrapElements.map(a().findDOMNode);e.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(e,this.tailoredFocusTrapOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.setupFocusTrap()}},{key:"componentDidUpdate",value:,{key:"componentWillUnmount",value:,{key:"render",value:function(){var e=this,t=this.props.children?o().Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===o().Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return o().cloneElement(t,{ref:)}return null}}])&&xe(t.prototype,n),i}(),Ce="undefined"==typeof Element?Function:Element;Te.propTypes={active:ge.bool,paused:ge.bool,focusTrapOptions:ge.shape({document:ge.object,onActivate:ge.func,onPostActivate:ge.func,checkCanFocusTrap:ge.func,onDeactivate:ge.func,onPostDeactivate:ge.func,checkCanReturnFocus:ge.func,initialFocus:ge.oneOfType([ge.instanceOf(Ce),ge.string,ge.func,ge.bool]),fallbackFocus:ge.oneOfType([ge.instanceOf(Ce),ge.string,ge.func]),escapeDeactivates:ge.oneOfType([ge.bool,ge.func]),clickOutsideDeactivates:ge.oneOfType([ge.bool,ge.func]),returnFocusOnDeactivate:ge.bool,setReturnFocus:ge.oneOfType([ge.instanceOf(Ce),ge.string,ge.func]),allowOutsideClick:ge.oneOfType([ge.bool,ge.func]),preventScroll:ge.bool}),containerElements:ge.arrayOf(ge.instanceOf(Ce)),children:ge.oneOfType([ge.element,ge.instanceOf(Ce)])},Te.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:Pe};var ke=Te;function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ae,_e,Ie,Me,Ne=function(e,t,n,r,i){return r?function(e,t,n){return o().Children.toArray(e).reverse().find((function(e){return o().isValidElement(e)&&e.type===t?o().cloneElement(e,De(De({},n),e.props)):null}))}(e,t,n):i},Re=function(e,t){return o().Children.toArray(e).some((function(e){return o().isValidElement(e)&&t.some((function(t){return t===e.type}))}))},Be=function(e,t,n,r){var o=!1;return Re(e,t)&&(Re(e,[n])||r&&!r))&&(o=!0),o},Le=f((),ze=["IFL-PORTAL","REACH-PORTAL"],$e=(0,u.keyframes)(Ae||(Ae=Le(["\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n"])));(Me=_e||(_e={})).sm="25rem",Me.md="37.5rem",Me.lg="50rem",Me.xl="62.5rem",Me.fullScreen="fullScreen",Me.bottomSheet="bottomSheet",Ie||(Ie={}));var Ge={size:"md",zIndexBase:1e4},qe="undefined"==typeof window,He={},Ue=function(e,t){t&&(t in He||(He[t]=[]),He[t].includes(e)||He[t].push(e))},We=function(e){return e in He&&He[e].length?He[e]:[]},Ye=Ke=function(e){var t=[],n=qe?[]:document.querySelectorAll(ze.join(",")),r=qe?0:-1*document.body.getBoundingClientRect().top;return Array.prototype.forEach.call(n,(function(n){n.childNodes.forEach((function(t){var o,i,a,c,u,l,s=t,f=null==s||null===(o=s.querySelector("[aria-labelledby]"))||void 0===o?void 0:o.getAttribute("id"),p=null==f?void 0:f.split("-");switch(null!=(u=p)&&u.includes("downshift")?l="dropdown":null!=u&&u.includes("listbox")?l="listbox":null!=u&&u.includes("menu")&&(l="menu"),l){case"dropdown":null==p||p.splice(-1),null==p||p.push.apply(p,["toggle","button"]),c=null==p?void 0:p.join("-");break;case"listbox":c=null==s||null===(i=s.querySelector("[aria-labelledby]"))||void 0===i?void 0:i.getAttribute("aria-labelledby");break;case"menu":null==p||p.unshift.apply(p,["menu","button",""]),c=null==p?void 0:p.join("-")}return c&&null!=e&&null!==(a=e.current)&&void 0!==a&&a.contains(document.getElementById(c))&&("REACH-PORTAL"===n.nodeName&&(s.style.marginTop="".concat(r,"px")),s.style.zIndex=String(Ge.zIndexBase+100)),s})),t.push(n)})),t},Ve=[],Xe=Je=function(e){return e?"".concat(e,"-").concat(Ve.length+1):"modal-".concat(Ve.length+1)};function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var et=tt=function(e){return e===_e.fullScreen},nt=function(e){return e===_e.bottomSheet},rt={body:container:function(e,t){var n=[];return nt(e)&&(n.push({borderTopLeftRadius:"md"}),n.push({borderTopRightRadius:"md"})),Ze({backgroundColor:"neutral.0",border:et(e)?"none":"1px solid",borderColor:"neutral.300",borderRadius:et(e)?0:"md",display:"flex",flexDirection:"column",height:tt(e)?"100%":"auto",maxWidth:et(e)?"none":e&&_e[e],maxHeight:"100%",overflow:"hidden",p:0,position:"relative",width:"100%",zIndex:t&&t+2},Object.assign.apply(Object,[{}].concat(n)))},footer:header:overlay:function(e,t){return{backgroundColor:"overlay.default",height:"100%",left:"0",position:"fixed",top:"0",width:"100%",zIndex:t&&t+1}},wrapper:function(e,t){var n=[];return nt(e)&&n.push({pt:7}),Ze({animation:"".concat($e," ").concat(l.durations.normal," ").concat(l.easings.linear," forwards"),alignItems:nt(e)?"flex-end":"center",display:"flex",height:"100%",justifyContent:"center",left:0,opacity:0,p:et(e)?0:4,position:"fixed",top:0,width:"100%",zIndex:t,"@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}},Object.assign.apply(Object,[{}].concat(n)))}},ot=it=function(){return qe?0:document.querySelectorAll("[data-ipl-modal-id]").length},at=function(e){return 3*Ve.length+e},ct=!1;if("undefined"!=typeof window){var ut={get passive;window.addEventListener("testPassive",null,ut),window.removeEventListener("testPassive",null,ut)}var lt="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),st=[],ft=!1,pt=-1,dt=void 0,bt=void 0,yt=vt=mt=function(){Ve.length||(lt?(st.forEach((),ft&&(document.removeEventListener("touchmove",vt,ct?{passive:!1}:void 0),ft=!1),pt=-1):(void 0!==bt&&(document.body.style.paddingRight=bt,bt=void 0),void 0!==dt&&(document.body.style.overflow=dt,dt=void 0)),st=[])},ht={body:{bottom:"",left:"",overflow:"",position:"",right:"",top:"",width:""},documentElement:{height:"","scroll-behavior":""}},Ot=!1,gt={x:0,y:0},wt=function(e,t){var n=t?(e.hasAttribute("aria-hidden")&&n("aria-hidden","data-aria-hidden"),e.setAttribute("aria-hidden","true")):(e.hasAttribute("aria-hidden")&&e.removeAttribute("aria-hidden"),e.hasAttribute("data-aria-hidden")&&n("data-aria-hidden","aria-hidden"))},xt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"body";ht[n][e]=document[n].style.getPropertyValue(e),document[n].style.setProperty(e,t)},Et=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body",n=ht[t][e];n&&n.length?(document[t].style.setProperty(e,n),ht[t][e]=""):document[t].style.removeProperty(e)},jt=function(e,t){if(!qe){var n=Ve.length<2&&t||!Ve.length&&!t;Array.prototype.forEach.call(document.body.children,(function(r){if(o=r,![].concat(["NOSCRIPT","SCRIPT"],O(ze)).includes(o.tagName)&&!function(e){var t,n=!1;return Array.prototype.forEach.call((t=[],Object.keys(He).forEach((),t),(),n}(o)){var o,i=Ve.find((function(e){return e===r.firstElementChild}));if(i){if(i!==(null==e?void 0:e.current)){var a=t?2:1;Ve.indexOf(i)===Ve.length-a&&wt(r,t)}}else n&&wt(r,t)}})),n&&function(e){var t=document.body.style.overflow;if(e)Ot=!0,"hidden"!==t&&xt("overflow","hidden"),gt.x=void 0!==window?window.pageXOffset:0,gt.y=void 0!==window?window.pageYOffset:0,xt("bottom","0"),xt("left","-".concat(gt.x,"px")),xt("right","0"),xt("top","-".concat(gt.y,"px")),xt("position","fixed"),xt("width","100%"),xt("height","100vh","documentElement"),xt("scroll-behavior","auto","documentElement");else{if(!Ot)return;"hidden"===t&&Et("overflow"),Et("position"),Et("bottom"),Et("left"),Et("right"),Et("top"),void 0!==window&&window.scrollTo({behavior:"auto",left:gt.x,top:gt.y}),Et("width"),Et("height","documentElement"),Et("scroll-behavior","documentElement"),Ot=!1}}(t)}},St=o().createContext({}),Pt=St.Provider,Tt=["children"];function Ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function kt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ct(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ft=o().forwardRef((function(e,t){var n=e.children,i=S(e,Tt),a=(0,r.useContext)(St),u=a.size,l=a.zIndexOffset;return o().createElement(c.Box,p({},i,{ref:t,sx:kt(kt({},ot("body",u,l)),i.sx)}),n)}));Ft.displayName="ModalBody";var Dt=function(e){var t=e.labelClose,n=void 0===t?"Close":t,r=e.onExit;return o().createElement(c.IconButton,{"aria-label":n,onClick:sx:{ml:"2"},variant:"tertiary",type:"button"},o().createElement(s.x,{size:"md",title:n}))};Dt.displayName="ModalCloseButton";var At=["buttons","children","mobileFooter"];function _t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function It(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_t(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Mt=o().forwardRef((function(e,t){var n,r=e.buttons,i=e.children,a=e.mobileFooter,u=S(e,At),l=o().useContext(St),s=l.size,f=l.zIndexOffset,d=a||s===_e.bottomSheet,b=null===(n=d?null==r?void 0:r.slice().reverse():r)||void 0===n?void 0:n.map((function(e,t){return o().createElement(c.Button,p({type:"button",key:t},e.props),e.label)}));return r||i?o().createElement(c.Box,p({},u,{ref:t,sx:It(It({},ot("footer",s,f)),{},{flexDirection:d?"column":"row","& button":{mb:d?2:0,ml:d?0:2,width:d?"100%":"auto"}},u.sx)}),r?b:i):null}));Mt.displayName="ModalFooter";var Nt=["children","icon","labelClose","onExit","subtitle","title"];function Rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Rt(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Lt=o().forwardRef((function(e,t){var n=e.children,r=e.icon,i=e.labelClose,a=e.onExit,u=e.subtitle,l=e.title,s=S(e,Nt),f=o().useContext(St),d=f.size,b=f.titleId,y=f.zIndexOffset,v=function(e,t){if("string"==typeof t){var n=(new DOMParser).parseFromString("<!doctype html><body>".concat(t),"text/html").body.textContent;return"title"===e?o().createElement(c.Heading,{level:4,sx:{mb:u?0:void 0,pt:"sc2"},id:b},n):o().createElement(c.Text,{level:3},n)}return t},m=o().createElement(o().Fragment,null,r&&o().createElement(c.Box,{sx:{alignSelf:"flex-start",flexShrink:0,mr:3,mt:"sc3"}},r),o().createElement(c.Box,{sx:{width:"100%",pb:u?"2":"0"}},l&&v("title",l),u&&v("subtitle",u)),o().createElement(Dt,{labelClose:i,onExit:a}));return o().createElement(c.Box,p({},s,{ref:t,sx:Bt(Bt({},ot("header",d,y)),s.sx)}),n||m)}));Lt.displayName="ModalHeader";var zt=function(e){var t=e.children;return qe?null:(0,i.createPortal)(t,document.body)};zt.displayName="ModalPortal";var $t={childList:!0},Gt=f((),qt=["ariaLabel","children","dataModalId","focusTrapObserver","focusTrapOptions","footerButtons","icon","isOpen","labelClose","mobileFooter","onExit","onOpen","size","subtitle","title","zIndexBase","UNSAFE_SSR_MODAL"];r Wt=o().forwardRef((function(e,t){var n=e.ariaLabel,i=e.children,a=e.dataModalId,u=e.focusTrapObserver,s=void 0!==u&&u,f=e.focusTrapOptions,d=void 0===f?{}:f,b=e.footerButtons,y=e.icon,v=e.isOpen,m=void 0!==v&&v,h=e.labelClose,g=e.mobileFooter,w=void 0!==g&&g,x=e.onExit,j=e.onOpen,P=e.size,T=void 0===P?Ge.size:P,C=e.subtitle,k=e.title,F=e.zIndexBase,D=void 0===F?Ge.zIndexBase:F,A=e.UNSAFE_SSR_MODAL,_=void 0!==A&&A,I=S(e,qt),M=(0,r.useRef)(null),N=(0,r.useState)([]),R=E(N,2),B=R[0],L=R[1],z=(0,r.useState)(m),$=E(z,2),G=$[0],q=$[1],H=o().useState(at(D)),U=E(H,2),W=U[0],Y=U[1],K=o().useState(Je(a)),V=E(K,2),X=V[0],J=V[1],Q=function(e){var t="object"===("undefined"==typeof window?"undefined":Gt(window)),n=(0,r.useCallback)((function(){if(!t)return e&&e instanceof Array?e[0]:e;if(e&&e instanceof Array){var n=Object.entries(l.breakpoints).find((function(e){var t=E(e,2)[1];return window.matchMedia("screen and (max-width: ".concat(t,")")).matches})),r=n?Object.keys(l.breakpoints).indexOf(n[0]):Object.keys(l.breakpoints).length;return void 0!==e[r]?e[r]:e[e.length-1]}}),[t,e]),o=(0,r.useState)(n()),i=E(o,2),a=i[0],c=i[1];return(0,r.useEffect)((,[t,n]),a}(T),Z=(0,r.useCallback)((function(){return![].concat(O(Ke(M)),O(We(X))).reduce((,!0)}),[B,X]),ee=(0,r.useCallback)((function(){var e=[].concat(O(Ke(M)),O(We(X)));e!==B&&L(e)}),[B,X]);!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:$t,i=(0,r.useState)(),a=E(i,2),c=a[0],u=a[1];(0,r.useEffect)((function(){if(e&&!c&&n&&"function"==typeof n){var t=new MutationObserver(n);u(t)}}),[n,e,c,o,u]),(0,r.useEffect)((function(){if(c){if(t)try{c.observe(t,o)}catch(e){}return }),[c,t,o])}(s&&G,qe?void 0:document.body,(function(e){e.some((function(e){return Array.prototype.some.call(e.addedNodes,()}))&&ee()}));var te=(0,r.useCallback)((function(){var e=Je(a);X!==e&&J(e)}),[a,X]),ne=(0,r.useCallback)((,[D,W]),re=(0,r.useCallback)((function(){ee(),te(),ne(),Ve.push(M.current),function(e){e.current&&e.current,{allowTouchMove:reserveScrollBarGap:!0})}(M),jt(M,!0)}),[ee,te,ne]),oe=(0,r.useCallback)((function(){Ve.includes(M.current)?Z()&&ee():(j&&j({modalId:X,zIndex:"".concat(W+2)}),re())}),[Z,ee,re,X,j,W]),ie=(0,r.useCallback)((function(){Ve.splice(Ve.indexOf(M.current),1),mt(),jt(M,!1),X)}),[X]),ae=(0,r.useCallback)((,[x]);(0,r.useEffect)((,[G,m]),(0,r.useEffect)((function(){M.current&&G?oe():G&&!m&&ie()}),[ie,oe,G,m]),(0,r.useEffect)((function(){!it()&&Ve.length&&(Xe(),jt(null,!1),Ye()),mt();var e=M;return function(){var t=Ve.indexOf(e.current);-1!==t?(Ve.splice(t,1),Ve.length||1!==it()?jt(e,!1):jt(null,!1)):0===it()&&Ve.length&&(Xe(),jt(null,!1),Ye()),mt()}}),[]);var ce=Ne(i,Ft,{},Be(i,[Lt,Ft,Mt],Ft),o().createElement(Ft,null,i)),ue={buttons:b,mobileFooter:w},le=Ne(i,Mt,ue,Be(i,[Lt,Ft,Mt],Mt,{footerButtons:b}),o().createElement(Mt,ue)),se={icon:y,labelClose:h,onExit:ae,subtitle:C,title:k},fe=Ne(i,Lt,se,Be(i,[Lt,Ft,Mt],Lt,{icon:y,labelClose:h,subtitle:C,title:k}),o().createElement(Lt,se)),pe=!n&&k?"".concat(X,"-title"):void 0;T instanceof Array&&(T=Q||Ge.size);var de,be,ye={modalId:X,size:T,titleId:pe,zIndexOffset:W},ve=(0,r.useMemo)((function(){var e=O(B);return G&&M.current&&e.push(M.current),e}),[B,G]),me=o().createElement(Pt,{value:ye},o().createElement(ke,p({active:G},ve.length&&{containerElements:ve},{focusTrapOptions:Ut(Ut({allowOutsideClick:!0},d),{},{escapeDeactivates:!1})}),o().createElement(c.Box,{onKeyDown:function(e){if("Escape"===e.key||27===e.keyCode){var t=null;if(document&&document.activeElement&&(t=document.activeElement),t&&M.current&&!M.current.contains(t))return;e.stopPropagation(),ae(Ie.EscapeKey)}},sx:ot("wrapper",T,W)},o().createElement(c.Box,p({},(be={"aria-label":n,"aria-labelledby":pe,"aria-modal":!0,role:"dialog"},We(X).length&&(delete be["aria-modal"],delete be.role),be),I,{"data-ipl-modal-id":X,ref:(de=[t,M],,sx:Ut(Ut({},ot("container",T,W)),I.sx)}),fe,ce,le),o().createElement(c.Box,{onClick:sx:ot("overlay",T,W)}))));return m?_?me:o().createElement(zt,null,me):null}));Wt.displayName="Modal"}}]);
//# sourceMappingURL=9033.4c3ac2601a536be12e7e.js.map