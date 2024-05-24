var WL=Object.defineProperty;var VL=(e,t,n)=>t in e?WL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Zf=(e,t,n)=>(VL(e,typeof t!="symbol"?t+"":t,n),n);function GL(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var HJ=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function QJ(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var ik={exports:{}},Cd={},ok={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $l=Symbol.for("react.element"),HL=Symbol.for("react.portal"),QL=Symbol.for("react.fragment"),qL=Symbol.for("react.strict_mode"),YL=Symbol.for("react.profiler"),KL=Symbol.for("react.provider"),XL=Symbol.for("react.context"),ZL=Symbol.for("react.forward_ref"),JL=Symbol.for("react.suspense"),eI=Symbol.for("react.memo"),tI=Symbol.for("react.lazy"),Rv=Symbol.iterator;function nI(e){return e===null||typeof e!="object"?null:(e=Rv&&e[Rv]||e["@@iterator"],typeof e=="function"?e:null)}var ak={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sk=Object.assign,lk={};function Fa(e,t,n){this.props=e,this.context=t,this.refs=lk,this.updater=n||ak}Fa.prototype.isReactComponent={};Fa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ck(){}ck.prototype=Fa.prototype;function sg(e,t,n){this.props=e,this.context=t,this.refs=lk,this.updater=n||ak}var lg=sg.prototype=new ck;lg.constructor=sg;sk(lg,Fa.prototype);lg.isPureReactComponent=!0;var Dv=Array.isArray,uk=Object.prototype.hasOwnProperty,cg={current:null},dk={key:!0,ref:!0,__self:!0,__source:!0};function fk(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uk.call(t,r)&&!dk.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$l,type:e,key:o,ref:a,props:i,_owner:cg.current}}function rI(e,t){return{$$typeof:$l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ug(e){return typeof e=="object"&&e!==null&&e.$$typeof===$l}function iI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nv=/\/+/g;function Jf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?iI(""+e.key):t.toString(36)}function Bc(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case $l:case HL:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Jf(a,0):r,Dv(i)?(n="",e!=null&&(n=e.replace(Nv,"$&/")+"/"),Bc(i,t,n,"",function(u){return u})):i!=null&&(ug(i)&&(i=rI(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Nv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Dv(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Jf(o,l);a+=Bc(o,t,n,c,i)}else if(c=nI(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Jf(o,l++),a+=Bc(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function cc(e,t,n){if(e==null)return e;var r=[],i=0;return Bc(e,r,"","",function(o){return t.call(n,o,i++)}),r}function oI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Nt={current:null},Uc={transition:null},aI={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Uc,ReactCurrentOwner:cg};de.Children={map:cc,forEach:function(e,t,n){cc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cc(e,function(){t++}),t},toArray:function(e){return cc(e,function(t){return t})||[]},only:function(e){if(!ug(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=Fa;de.Fragment=QL;de.Profiler=YL;de.PureComponent=sg;de.StrictMode=qL;de.Suspense=JL;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aI;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sk({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=cg.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)uk.call(t,c)&&!dk.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$l,type:e.type,key:i,ref:o,props:r,_owner:a}};de.createContext=function(e){return e={$$typeof:XL,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:KL,_context:e},e.Consumer=e};de.createElement=fk;de.createFactory=function(e){var t=fk.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:ZL,render:e}};de.isValidElement=ug;de.lazy=function(e){return{$$typeof:tI,_payload:{_status:-1,_result:e},_init:oI}};de.memo=function(e,t){return{$$typeof:eI,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=Uc.transition;Uc.transition={};try{e()}finally{Uc.transition=t}};de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};de.useCallback=function(e,t){return Nt.current.useCallback(e,t)};de.useContext=function(e){return Nt.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return Nt.current.useDeferredValue(e)};de.useEffect=function(e,t){return Nt.current.useEffect(e,t)};de.useId=function(){return Nt.current.useId()};de.useImperativeHandle=function(e,t,n){return Nt.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return Nt.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return Nt.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return Nt.current.useMemo(e,t)};de.useReducer=function(e,t,n){return Nt.current.useReducer(e,t,n)};de.useRef=function(e){return Nt.current.useRef(e)};de.useState=function(e){return Nt.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return Nt.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return Nt.current.useTransition()};de.version="18.2.0";ok.exports=de;var x=ok.exports;const rt=fo(x),dg=GL({__proto__:null,default:rt},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI=x,lI=Symbol.for("react.element"),cI=Symbol.for("react.fragment"),uI=Object.prototype.hasOwnProperty,dI=sI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fI={key:!0,ref:!0,__self:!0,__source:!0};function pk(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)uI.call(t,r)&&!fI.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lI,type:e,key:o,ref:a,props:i,_owner:dI.current}}Cd.Fragment=cI;Cd.jsx=pk;Cd.jsxs=pk;ik.exports=Cd;var s=ik.exports,mk={exports:{}},ln={},hk={exports:{}},gk={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,W){var ee=F.length;F.push(W);e:for(;0<ee;){var ve=ee-1>>>1,ge=F[ve];if(0<i(ge,W))F[ve]=W,F[ee]=ge,ee=ve;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],ee=F.pop();if(ee!==W){F[0]=ee;e:for(var ve=0,ge=F.length,Lt=ge>>>1;ve<Lt;){var lt=2*(ve+1)-1,tr=F[lt],It=lt+1,Bt=F[It];if(0>i(tr,ee))It<ge&&0>i(Bt,tr)?(F[ve]=Bt,F[It]=ee,ve=It):(F[ve]=tr,F[lt]=ee,ve=lt);else if(It<ge&&0>i(Bt,ee))F[ve]=Bt,F[It]=ee,ve=It;else break e}}return W}function i(F,W){var ee=F.sortIndex-W.sortIndex;return ee!==0?ee:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,m=!1,S=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=F)r(u),W.sortIndex=W.expirationTime,t(c,W);else break;W=n(u)}}function k(F){if(w=!1,v(F),!S)if(n(c)!==null)S=!0,Xe(T);else{var W=n(u);W!==null&&Ie(k,W.startTime-F)}}function T(F,W){S=!1,w&&(w=!1,g(j),j=-1),m=!0;var ee=p;try{for(v(W),f=n(c);f!==null&&(!(f.expirationTime>W)||F&&!K());){var ve=f.callback;if(typeof ve=="function"){f.callback=null,p=f.priorityLevel;var ge=ve(f.expirationTime<=W);W=e.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(c)&&r(c),v(W)}else r(c);f=n(c)}if(f!==null)var Lt=!0;else{var lt=n(u);lt!==null&&Ie(k,lt.startTime-W),Lt=!1}return Lt}finally{f=null,p=ee,m=!1}}var $=!1,I=null,j=-1,N=5,R=-1;function K(){return!(e.unstable_now()-R<N)}function ce(){if(I!==null){var F=e.unstable_now();R=F;var W=!0;try{W=I(!0,F)}finally{W?le():($=!1,I=null)}}else $=!1}var le;if(typeof y=="function")le=function(){y(ce)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,Ke=Ye.port2;Ye.port1.onmessage=ce,le=function(){Ke.postMessage(null)}}else le=function(){E(ce,0)};function Xe(F){I=F,$||($=!0,le())}function Ie(F,W){j=E(function(){F(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){S||m||(S=!0,Xe(T))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(F){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var ee=p;p=W;try{return F()}finally{p=ee}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=p;p=F;try{return W()}finally{p=ee}},e.unstable_scheduleCallback=function(F,W,ee){var ve=e.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ve+ee:ve):ee=ve,F){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ee+ge,F={id:d++,callback:W,priorityLevel:F,startTime:ee,expirationTime:ge,sortIndex:-1},ee>ve?(F.sortIndex=ee,t(u,F),n(c)===null&&F===n(u)&&(w?(g(j),j=-1):w=!0,Ie(k,ee-ve))):(F.sortIndex=ge,t(c,F),S||m||(S=!0,Xe(T))),F},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(F){var W=p;return function(){var ee=p;p=W;try{return F.apply(this,arguments)}finally{p=ee}}}})(gk);hk.exports=gk;var pI=hk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yk=x,sn=pI;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vk=new Set,qs={};function po(e,t){ga(e,t),ga(e+"Capture",t)}function ga(e,t){for(qs[e]=t,e=0;e<t.length;e++)vk.add(t[e])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),im=Object.prototype.hasOwnProperty,mI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pv={},Fv={};function hI(e){return im.call(Fv,e)?!0:im.call(Pv,e)?!1:mI.test(e)?Fv[e]=!0:(Pv[e]=!0,!1)}function gI(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yI(e,t,n,r){if(t===null||typeof t>"u"||gI(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){wt[e]=new Pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];wt[t]=new Pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){wt[e]=new Pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){wt[e]=new Pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){wt[e]=new Pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){wt[e]=new Pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){wt[e]=new Pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){wt[e]=new Pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){wt[e]=new Pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fg=/[\-:]([a-z])/g;function pg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fg,pg);wt[t]=new Pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fg,pg);wt[t]=new Pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fg,pg);wt[t]=new Pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){wt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){wt[e]=new Pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function mg(e,t,n,r){var i=wt.hasOwnProperty(t)?wt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yI(t,n,i,r)&&(n=null),r||i===null?hI(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gr=yk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uc=Symbol.for("react.element"),Po=Symbol.for("react.portal"),Fo=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),xk=Symbol.for("react.provider"),Sk=Symbol.for("react.context"),gg=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),sm=Symbol.for("react.suspense_list"),yg=Symbol.for("react.memo"),Xr=Symbol.for("react.lazy"),wk=Symbol.for("react.offscreen"),Mv=Symbol.iterator;function as(e){return e===null||typeof e!="object"?null:(e=Mv&&e[Mv]||e["@@iterator"],typeof e=="function"?e:null)}var Be=Object.assign,ep;function ks(e){if(ep===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ep=t&&t[1]||""}return`
`+ep+e}var tp=!1;function np(e,t){if(!e||tp)return"";tp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{tp=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ks(e):""}function vI(e){switch(e.tag){case 5:return ks(e.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return e=np(e.type,!1),e;case 11:return e=np(e.type.render,!1),e;case 1:return e=np(e.type,!0),e;default:return""}}function lm(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fo:return"Fragment";case Po:return"Portal";case om:return"Profiler";case hg:return"StrictMode";case am:return"Suspense";case sm:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sk:return(e.displayName||"Context")+".Consumer";case xk:return(e._context.displayName||"Context")+".Provider";case gg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yg:return t=e.displayName||null,t!==null?t:lm(e.type)||"Memo";case Xr:t=e._payload,e=e._init;try{return lm(e(t))}catch{}}return null}function xI(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lm(t);case 8:return t===hg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bk(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function SI(e){var t=bk(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dc(e){e._valueTracker||(e._valueTracker=SI(e))}function kk(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bk(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cm(e,t){var n=t.checked;return Be({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ek(e,t){t=t.checked,t!=null&&mg(e,"checked",t,!1)}function um(e,t){Ek(e,t);var n=vi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dm(e,t.type,n):t.hasOwnProperty("defaultValue")&&dm(e,t.type,vi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dm(e,t,n){(t!=="number"||pu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Es=Array.isArray;function ta(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fm(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Be({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Es(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vi(n)}}function $k(e,t){var n=vi(t.value),r=vi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tk(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pm(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tk(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fc,_k=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fc=fc||document.createElement("div"),fc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ys(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wI=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(e){wI.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),As[t]=As[e]})});function Ck(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||As.hasOwnProperty(e)&&As[e]?(""+t).trim():t+"px"}function Ak(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ck(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bI=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mm(e,t){if(t){if(bI[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function hm(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gm=null;function vg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ym=null,na=null,ra=null;function Vv(e){if(e=Cl(e)){if(typeof ym!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Od(t),ym(e.stateNode,e.type,t))}}function Lk(e){na?ra?ra.push(e):ra=[e]:na=e}function Ik(){if(na){var e=na,t=ra;if(ra=na=null,Vv(e),t)for(e=0;e<t.length;e++)Vv(t[e])}}function jk(e,t){return e(t)}function Ok(){}var rp=!1;function Rk(e,t,n){if(rp)return e(t,n);rp=!0;try{return jk(e,t,n)}finally{rp=!1,(na!==null||ra!==null)&&(Ok(),Ik())}}function Ks(e,t){var n=e.stateNode;if(n===null)return null;var r=Od(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var vm=!1;if(Pr)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){vm=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{vm=!1}function kI(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ls=!1,mu=null,hu=!1,xm=null,EI={onError:function(e){Ls=!0,mu=e}};function $I(e,t,n,r,i,o,a,l,c){Ls=!1,mu=null,kI.apply(EI,arguments)}function TI(e,t,n,r,i,o,a,l,c){if($I.apply(this,arguments),Ls){if(Ls){var u=mu;Ls=!1,mu=null}else throw Error(P(198));hu||(hu=!0,xm=u)}}function mo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dk(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gv(e){if(mo(e)!==e)throw Error(P(188))}function _I(e){var t=e.alternate;if(!t){if(t=mo(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Gv(i),e;if(o===r)return Gv(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Nk(e){return e=_I(e),e!==null?Pk(e):null}function Pk(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pk(e);if(t!==null)return t;e=e.sibling}return null}var Fk=sn.unstable_scheduleCallback,Hv=sn.unstable_cancelCallback,CI=sn.unstable_shouldYield,AI=sn.unstable_requestPaint,qe=sn.unstable_now,LI=sn.unstable_getCurrentPriorityLevel,xg=sn.unstable_ImmediatePriority,Mk=sn.unstable_UserBlockingPriority,gu=sn.unstable_NormalPriority,II=sn.unstable_LowPriority,Bk=sn.unstable_IdlePriority,Ad=null,ar=null;function jI(e){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(Ad,e,void 0,(e.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:DI,OI=Math.log,RI=Math.LN2;function DI(e){return e>>>=0,e===0?32:31-(OI(e)/RI|0)|0}var pc=64,mc=4194304;function $s(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=$s(l):(o&=a,o!==0&&(r=$s(o)))}else a=n&~i,a!==0?r=$s(a):o!==0&&(r=$s(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bn(t),i=1<<n,r|=e[n],t&=~i;return r}function NI(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PI(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Bn(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=NI(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Sm(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uk(){var e=pc;return pc<<=1,!(pc&4194240)&&(pc=64),e}function ip(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bn(t),e[t]=n}function FI(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function zk(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wk,wg,Vk,Gk,Hk,wm=!1,hc=[],ci=null,ui=null,di=null,Xs=new Map,Zs=new Map,ni=[],MI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qv(e,t){switch(e){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Xs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(t.pointerId)}}function ls(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Cl(t),t!==null&&wg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function BI(e,t,n,r,i){switch(t){case"focusin":return ci=ls(ci,e,t,n,r,i),!0;case"dragenter":return ui=ls(ui,e,t,n,r,i),!0;case"mouseover":return di=ls(di,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Xs.set(o,ls(Xs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zs.set(o,ls(Zs.get(o)||null,e,t,n,r,i)),!0}return!1}function Qk(e){var t=Wi(e.target);if(t!==null){var n=mo(t);if(n!==null){if(t=n.tag,t===13){if(t=Dk(n),t!==null){e.blockedOn=t,Hk(e.priority,function(){Vk(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bm(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gm=r,n.target.dispatchEvent(r),gm=null}else return t=Cl(n),t!==null&&wg(t),e.blockedOn=n,!1;t.shift()}return!0}function qv(e,t,n){zc(e)&&n.delete(t)}function UI(){wm=!1,ci!==null&&zc(ci)&&(ci=null),ui!==null&&zc(ui)&&(ui=null),di!==null&&zc(di)&&(di=null),Xs.forEach(qv),Zs.forEach(qv)}function cs(e,t){e.blockedOn===t&&(e.blockedOn=null,wm||(wm=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,UI)))}function Js(e){function t(i){return cs(i,e)}if(0<hc.length){cs(hc[0],e);for(var n=1;n<hc.length;n++){var r=hc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ci!==null&&cs(ci,e),ui!==null&&cs(ui,e),di!==null&&cs(di,e),Xs.forEach(t),Zs.forEach(t),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)Qk(n),n.blockedOn===null&&ni.shift()}var ia=Gr.ReactCurrentBatchConfig,vu=!0;function zI(e,t,n,r){var i=xe,o=ia.transition;ia.transition=null;try{xe=1,bg(e,t,n,r)}finally{xe=i,ia.transition=o}}function WI(e,t,n,r){var i=xe,o=ia.transition;ia.transition=null;try{xe=4,bg(e,t,n,r)}finally{xe=i,ia.transition=o}}function bg(e,t,n,r){if(vu){var i=bm(e,t,n,r);if(i===null)mp(e,t,r,xu,n),Qv(e,r);else if(BI(i,e,t,n,r))r.stopPropagation();else if(Qv(e,r),t&4&&-1<MI.indexOf(e)){for(;i!==null;){var o=Cl(i);if(o!==null&&Wk(o),o=bm(e,t,n,r),o===null&&mp(e,t,r,xu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else mp(e,t,r,null,n)}}var xu=null;function bm(e,t,n,r){if(xu=null,e=vg(r),e=Wi(e),e!==null)if(t=mo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dk(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xu=e,null}function qk(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LI()){case xg:return 1;case Mk:return 4;case gu:case II:return 16;case Bk:return 536870912;default:return 16}default:return 16}}var oi=null,kg=null,Wc=null;function Yk(){if(Wc)return Wc;var e,t=kg,n=t.length,r,i="value"in oi?oi.value:oi.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Wc=i.slice(e,1<r?1-r:void 0)}function Vc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gc(){return!0}function Yv(){return!1}function cn(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gc:Yv,this.isPropagationStopped=Yv,this}return Be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gc)},persist:function(){},isPersistent:gc}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eg=cn(Ma),_l=Be({},Ma,{view:0,detail:0}),VI=cn(_l),op,ap,us,Ld=Be({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$g,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(op=e.screenX-us.screenX,ap=e.screenY-us.screenY):ap=op=0,us=e),op)},movementY:function(e){return"movementY"in e?e.movementY:ap}}),Kv=cn(Ld),GI=Be({},Ld,{dataTransfer:0}),HI=cn(GI),QI=Be({},_l,{relatedTarget:0}),sp=cn(QI),qI=Be({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),YI=cn(qI),KI=Be({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),XI=cn(KI),ZI=Be({},Ma,{data:0}),Xv=cn(ZI),JI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ej={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nj(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tj[e])?!!t[e]:!1}function $g(){return nj}var rj=Be({},_l,{key:function(e){if(e.key){var t=JI[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ej[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$g,charCode:function(e){return e.type==="keypress"?Vc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ij=cn(rj),oj=Be({},Ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zv=cn(oj),aj=Be({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$g}),sj=cn(aj),lj=Be({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),cj=cn(lj),uj=Be({},Ld,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dj=cn(uj),fj=[9,13,27,32],Tg=Pr&&"CompositionEvent"in window,Is=null;Pr&&"documentMode"in document&&(Is=document.documentMode);var pj=Pr&&"TextEvent"in window&&!Is,Kk=Pr&&(!Tg||Is&&8<Is&&11>=Is),Jv=String.fromCharCode(32),ex=!1;function Xk(e,t){switch(e){case"keyup":return fj.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zk(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mo=!1;function mj(e,t){switch(e){case"compositionend":return Zk(t);case"keypress":return t.which!==32?null:(ex=!0,Jv);case"textInput":return e=t.data,e===Jv&&ex?null:e;default:return null}}function hj(e,t){if(Mo)return e==="compositionend"||!Tg&&Xk(e,t)?(e=Yk(),Wc=kg=oi=null,Mo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kk&&t.locale!=="ko"?null:t.data;default:return null}}var gj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gj[e.type]:t==="textarea"}function Jk(e,t,n,r){Lk(r),t=Su(t,"onChange"),0<t.length&&(n=new Eg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var js=null,el=null;function yj(e){uE(e,0)}function Id(e){var t=zo(e);if(kk(t))return e}function vj(e,t){if(e==="change")return t}var eE=!1;if(Pr){var lp;if(Pr){var cp="oninput"in document;if(!cp){var nx=document.createElement("div");nx.setAttribute("oninput","return;"),cp=typeof nx.oninput=="function"}lp=cp}else lp=!1;eE=lp&&(!document.documentMode||9<document.documentMode)}function rx(){js&&(js.detachEvent("onpropertychange",tE),el=js=null)}function tE(e){if(e.propertyName==="value"&&Id(el)){var t=[];Jk(t,el,e,vg(e)),Rk(yj,t)}}function xj(e,t,n){e==="focusin"?(rx(),js=t,el=n,js.attachEvent("onpropertychange",tE)):e==="focusout"&&rx()}function Sj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Id(el)}function wj(e,t){if(e==="click")return Id(t)}function bj(e,t){if(e==="input"||e==="change")return Id(t)}function kj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vn=typeof Object.is=="function"?Object.is:kj;function tl(e,t){if(Vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!im.call(t,i)||!Vn(e[i],t[i]))return!1}return!0}function ix(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ox(e,t){var n=ix(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ix(n)}}function nE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rE(){for(var e=window,t=pu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pu(e.document)}return t}function _g(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ej(e){var t=rE(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nE(n.ownerDocument.documentElement,n)){if(r!==null&&_g(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ox(n,o);var a=ox(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $j=Pr&&"documentMode"in document&&11>=document.documentMode,Bo=null,km=null,Os=null,Em=!1;function ax(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Em||Bo==null||Bo!==pu(r)||(r=Bo,"selectionStart"in r&&_g(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&tl(Os,r)||(Os=r,r=Su(km,"onSelect"),0<r.length&&(t=new Eg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bo)))}function yc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Uo={animationend:yc("Animation","AnimationEnd"),animationiteration:yc("Animation","AnimationIteration"),animationstart:yc("Animation","AnimationStart"),transitionend:yc("Transition","TransitionEnd")},up={},iE={};Pr&&(iE=document.createElement("div").style,"AnimationEvent"in window||(delete Uo.animationend.animation,delete Uo.animationiteration.animation,delete Uo.animationstart.animation),"TransitionEvent"in window||delete Uo.transitionend.transition);function jd(e){if(up[e])return up[e];if(!Uo[e])return e;var t=Uo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in iE)return up[e]=t[n];return e}var oE=jd("animationend"),aE=jd("animationiteration"),sE=jd("animationstart"),lE=jd("transitionend"),cE=new Map,sx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ci(e,t){cE.set(e,t),po(t,[e])}for(var dp=0;dp<sx.length;dp++){var fp=sx[dp],Tj=fp.toLowerCase(),_j=fp[0].toUpperCase()+fp.slice(1);Ci(Tj,"on"+_j)}Ci(oE,"onAnimationEnd");Ci(aE,"onAnimationIteration");Ci(sE,"onAnimationStart");Ci("dblclick","onDoubleClick");Ci("focusin","onFocus");Ci("focusout","onBlur");Ci(lE,"onTransitionEnd");ga("onMouseEnter",["mouseout","mouseover"]);ga("onMouseLeave",["mouseout","mouseover"]);ga("onPointerEnter",["pointerout","pointerover"]);ga("onPointerLeave",["pointerout","pointerover"]);po("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));po("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));po("onBeforeInput",["compositionend","keypress","textInput","paste"]);po("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));po("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));po("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));function lx(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,TI(r,t,void 0,e),e.currentTarget=null}function uE(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;lx(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;lx(i,l,u),o=c}}}if(hu)throw e=xm,hu=!1,xm=null,e}function _e(e,t){var n=t[Am];n===void 0&&(n=t[Am]=new Set);var r=e+"__bubble";n.has(r)||(dE(t,e,2,!1),n.add(r))}function pp(e,t,n){var r=0;t&&(r|=4),dE(n,e,r,t)}var vc="_reactListening"+Math.random().toString(36).slice(2);function nl(e){if(!e[vc]){e[vc]=!0,vk.forEach(function(n){n!=="selectionchange"&&(Cj.has(n)||pp(n,!1,e),pp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vc]||(t[vc]=!0,pp("selectionchange",!1,t))}}function dE(e,t,n,r){switch(qk(t)){case 1:var i=zI;break;case 4:i=WI;break;default:i=bg}n=i.bind(null,t,n,e),i=void 0,!vm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function mp(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Wi(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Rk(function(){var u=o,d=vg(n),f=[];e:{var p=cE.get(e);if(p!==void 0){var m=Eg,S=e;switch(e){case"keypress":if(Vc(n)===0)break e;case"keydown":case"keyup":m=ij;break;case"focusin":S="focus",m=sp;break;case"focusout":S="blur",m=sp;break;case"beforeblur":case"afterblur":m=sp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Kv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=HI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=sj;break;case oE:case aE:case sE:m=YI;break;case lE:m=cj;break;case"scroll":m=VI;break;case"wheel":m=dj;break;case"copy":case"cut":case"paste":m=XI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Zv}var w=(t&4)!==0,E=!w&&e==="scroll",g=w?p!==null?p+"Capture":null:p;w=[];for(var y=u,v;y!==null;){v=y;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Ks(y,g),k!=null&&w.push(rl(y,k,v)))),E)break;y=y.return}0<w.length&&(p=new m(p,S,null,n,d),f.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==gm&&(S=n.relatedTarget||n.fromElement)&&(Wi(S)||S[Fr]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(S=n.relatedTarget||n.toElement,m=u,S=S?Wi(S):null,S!==null&&(E=mo(S),S!==E||S.tag!==5&&S.tag!==6)&&(S=null)):(m=null,S=u),m!==S)){if(w=Kv,k="onMouseLeave",g="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=Zv,k="onPointerLeave",g="onPointerEnter",y="pointer"),E=m==null?p:zo(m),v=S==null?p:zo(S),p=new w(k,y+"leave",m,n,d),p.target=E,p.relatedTarget=v,k=null,Wi(d)===u&&(w=new w(g,y+"enter",S,n,d),w.target=v,w.relatedTarget=E,k=w),E=k,m&&S)t:{for(w=m,g=S,y=0,v=w;v;v=Lo(v))y++;for(v=0,k=g;k;k=Lo(k))v++;for(;0<y-v;)w=Lo(w),y--;for(;0<v-y;)g=Lo(g),v--;for(;y--;){if(w===g||g!==null&&w===g.alternate)break t;w=Lo(w),g=Lo(g)}w=null}else w=null;m!==null&&cx(f,p,m,w,!1),S!==null&&E!==null&&cx(f,E,S,w,!0)}}e:{if(p=u?zo(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var T=vj;else if(tx(p))if(eE)T=bj;else{T=Sj;var $=xj}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=wj);if(T&&(T=T(e,u))){Jk(f,T,n,d);break e}$&&$(e,p,u),e==="focusout"&&($=p._wrapperState)&&$.controlled&&p.type==="number"&&dm(p,"number",p.value)}switch($=u?zo(u):window,e){case"focusin":(tx($)||$.contentEditable==="true")&&(Bo=$,km=u,Os=null);break;case"focusout":Os=km=Bo=null;break;case"mousedown":Em=!0;break;case"contextmenu":case"mouseup":case"dragend":Em=!1,ax(f,n,d);break;case"selectionchange":if($j)break;case"keydown":case"keyup":ax(f,n,d)}var I;if(Tg)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Mo?Xk(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Kk&&n.locale!=="ko"&&(Mo||j!=="onCompositionStart"?j==="onCompositionEnd"&&Mo&&(I=Yk()):(oi=d,kg="value"in oi?oi.value:oi.textContent,Mo=!0)),$=Su(u,j),0<$.length&&(j=new Xv(j,e,null,n,d),f.push({event:j,listeners:$}),I?j.data=I:(I=Zk(n),I!==null&&(j.data=I)))),(I=pj?mj(e,n):hj(e,n))&&(u=Su(u,"onBeforeInput"),0<u.length&&(d=new Xv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=I))}uE(f,t)})}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Su(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ks(e,n),o!=null&&r.unshift(rl(e,o,i)),o=Ks(e,t),o!=null&&r.push(rl(e,o,i))),e=e.return}return r}function Lo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cx(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ks(n,o),c!=null&&a.unshift(rl(n,c,l))):i||(c=Ks(n,o),c!=null&&a.push(rl(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Aj=/\r\n?/g,Lj=/\u0000|\uFFFD/g;function ux(e){return(typeof e=="string"?e:""+e).replace(Aj,`
`).replace(Lj,"")}function xc(e,t,n){if(t=ux(t),ux(e)!==t&&n)throw Error(P(425))}function wu(){}var $m=null,Tm=null;function _m(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cm=typeof setTimeout=="function"?setTimeout:void 0,Ij=typeof clearTimeout=="function"?clearTimeout:void 0,dx=typeof Promise=="function"?Promise:void 0,jj=typeof queueMicrotask=="function"?queueMicrotask:typeof dx<"u"?function(e){return dx.resolve(null).then(e).catch(Oj)}:Cm;function Oj(e){setTimeout(function(){throw e})}function hp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Js(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Js(t)}function fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ba=Math.random().toString(36).slice(2),or="__reactFiber$"+Ba,il="__reactProps$"+Ba,Fr="__reactContainer$"+Ba,Am="__reactEvents$"+Ba,Rj="__reactListeners$"+Ba,Dj="__reactHandles$"+Ba;function Wi(e){var t=e[or];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fr]||n[or]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fx(e);e!==null;){if(n=e[or])return n;e=fx(e)}return t}e=n,n=e.parentNode}return null}function Cl(e){return e=e[or]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Od(e){return e[il]||null}var Lm=[],Wo=-1;function Ai(e){return{current:e}}function Le(e){0>Wo||(e.current=Lm[Wo],Lm[Wo]=null,Wo--)}function Ee(e,t){Wo++,Lm[Wo]=e.current,e.current=t}var xi={},Ct=Ai(xi),Ht=Ai(!1),Xi=xi;function ya(e,t){var n=e.type.contextTypes;if(!n)return xi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(e){return e=e.childContextTypes,e!=null}function bu(){Le(Ht),Le(Ct)}function px(e,t,n){if(Ct.current!==xi)throw Error(P(168));Ee(Ct,t),Ee(Ht,n)}function fE(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,xI(e)||"Unknown",i));return Be({},n,r)}function ku(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xi,Xi=Ct.current,Ee(Ct,e),Ee(Ht,Ht.current),!0}function mx(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=fE(e,t,Xi),r.__reactInternalMemoizedMergedChildContext=e,Le(Ht),Le(Ct),Ee(Ct,e)):Le(Ht),Ee(Ht,n)}var Ir=null,Rd=!1,gp=!1;function pE(e){Ir===null?Ir=[e]:Ir.push(e)}function Nj(e){Rd=!0,pE(e)}function Li(){if(!gp&&Ir!==null){gp=!0;var e=0,t=xe;try{var n=Ir;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ir=null,Rd=!1}catch(i){throw Ir!==null&&(Ir=Ir.slice(e+1)),Fk(xg,Li),i}finally{xe=t,gp=!1}}return null}var Vo=[],Go=0,Eu=null,$u=0,hn=[],gn=0,Zi=null,jr=1,Or="";function Bi(e,t){Vo[Go++]=$u,Vo[Go++]=Eu,Eu=e,$u=t}function mE(e,t,n){hn[gn++]=jr,hn[gn++]=Or,hn[gn++]=Zi,Zi=e;var r=jr;e=Or;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var o=32-Bn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,jr=1<<32-Bn(t)+i|n<<i|r,Or=o+e}else jr=1<<o|n<<i|r,Or=e}function Cg(e){e.return!==null&&(Bi(e,1),mE(e,1,0))}function Ag(e){for(;e===Eu;)Eu=Vo[--Go],Vo[Go]=null,$u=Vo[--Go],Vo[Go]=null;for(;e===Zi;)Zi=hn[--gn],hn[gn]=null,Or=hn[--gn],hn[gn]=null,jr=hn[--gn],hn[gn]=null}var on=null,nn=null,je=!1,Pn=null;function hE(e,t){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hx(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,on=e,nn=fi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,on=e,nn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zi!==null?{id:jr,overflow:Or}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,on=e,nn=null,!0):!1;default:return!1}}function Im(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jm(e){if(je){var t=nn;if(t){var n=t;if(!hx(e,t)){if(Im(e))throw Error(P(418));t=fi(n.nextSibling);var r=on;t&&hx(e,t)?hE(r,n):(e.flags=e.flags&-4097|2,je=!1,on=e)}}else{if(Im(e))throw Error(P(418));e.flags=e.flags&-4097|2,je=!1,on=e}}}function gx(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function Sc(e){if(e!==on)return!1;if(!je)return gx(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_m(e.type,e.memoizedProps)),t&&(t=nn)){if(Im(e))throw gE(),Error(P(418));for(;t;)hE(e,t),t=fi(t.nextSibling)}if(gx(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nn=fi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nn=null}}else nn=on?fi(e.stateNode.nextSibling):null;return!0}function gE(){for(var e=nn;e;)e=fi(e.nextSibling)}function va(){nn=on=null,je=!1}function Lg(e){Pn===null?Pn=[e]:Pn.push(e)}var Pj=Gr.ReactCurrentBatchConfig;function Dn(e,t){if(e&&e.defaultProps){t=Be({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Tu=Ai(null),_u=null,Ho=null,Ig=null;function jg(){Ig=Ho=_u=null}function Og(e){var t=Tu.current;Le(Tu),e._currentValue=t}function Om(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oa(e,t){_u=e,Ig=Ho=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function wn(e){var t=e._currentValue;if(Ig!==e)if(e={context:e,memoizedValue:t,next:null},Ho===null){if(_u===null)throw Error(P(308));Ho=e,_u.dependencies={lanes:0,firstContext:e}}else Ho=Ho.next=e;return t}var Vi=null;function Rg(e){Vi===null?Vi=[e]:Vi.push(e)}function yE(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Rg(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mr(e,r)}function Mr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zr=!1;function Dg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vE(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mr(e,n)}return i=r.interleaved,i===null?(t.next=t,Rg(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mr(e,n)}function Gc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sg(e,n)}}function yx(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cu(e,t,n,r){var i=e.updateQueue;Zr=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,d=u=c=null,l=o;do{var p=l.lane,m=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,w=l;switch(p=t,m=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){f=S.call(m,f,p);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,p=typeof S=="function"?S.call(m,f,p):S,p==null)break e;f=Be({},f,p);break e;case 2:Zr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=f):d=d.next=m,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);eo|=a,e.lanes=a,e.memoizedState=f}}function vx(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var xE=new yk.Component().refs;function Rm(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dd={isMounted:function(e){return(e=e._reactInternals)?mo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ot(),i=hi(e),o=Dr(r,i);o.payload=t,n!=null&&(o.callback=n),t=pi(e,o,i),t!==null&&(Un(t,e,i,r),Gc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ot(),i=hi(e),o=Dr(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pi(e,o,i),t!==null&&(Un(t,e,i,r),Gc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),r=hi(e),i=Dr(n,r);i.tag=2,t!=null&&(i.callback=t),t=pi(e,i,r),t!==null&&(Un(t,e,r,n),Gc(t,e,r))}};function xx(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!tl(n,r)||!tl(i,o):!0}function SE(e,t,n){var r=!1,i=xi,o=t.contextType;return typeof o=="object"&&o!==null?o=wn(o):(i=Qt(t)?Xi:Ct.current,r=t.contextTypes,o=(r=r!=null)?ya(e,i):xi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sx(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dd.enqueueReplaceState(t,t.state,null)}function Dm(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=xE,Dg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=wn(o):(o=Qt(t)?Xi:Ct.current,i.context=ya(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rm(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Dd.enqueueReplaceState(i,i.state,null),Cu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ds(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===xE&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function wc(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wx(e){var t=e._init;return t(e._payload)}function wE(e){function t(g,y){if(e){var v=g.deletions;v===null?(g.deletions=[y],g.flags|=16):v.push(y)}}function n(g,y){if(!e)return null;for(;y!==null;)t(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=gi(g,y),g.index=0,g.sibling=null,g}function o(g,y,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<y?(g.flags|=2,y):v):(g.flags|=2,y)):(g.flags|=1048576,y)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,y,v,k){return y===null||y.tag!==6?(y=kp(v,g.mode,k),y.return=g,y):(y=i(y,v),y.return=g,y)}function c(g,y,v,k){var T=v.type;return T===Fo?d(g,y,v.props.children,k,v.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xr&&wx(T)===y.type)?(k=i(y,v.props),k.ref=ds(g,y,v),k.return=g,k):(k=Xc(v.type,v.key,v.props,null,g.mode,k),k.ref=ds(g,y,v),k.return=g,k)}function u(g,y,v,k){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Ep(v,g.mode,k),y.return=g,y):(y=i(y,v.children||[]),y.return=g,y)}function d(g,y,v,k,T){return y===null||y.tag!==7?(y=qi(v,g.mode,k,T),y.return=g,y):(y=i(y,v),y.return=g,y)}function f(g,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=kp(""+y,g.mode,v),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case uc:return v=Xc(y.type,y.key,y.props,null,g.mode,v),v.ref=ds(g,null,y),v.return=g,v;case Po:return y=Ep(y,g.mode,v),y.return=g,y;case Xr:var k=y._init;return f(g,k(y._payload),v)}if(Es(y)||as(y))return y=qi(y,g.mode,v,null),y.return=g,y;wc(g,y)}return null}function p(g,y,v,k){var T=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:l(g,y,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uc:return v.key===T?c(g,y,v,k):null;case Po:return v.key===T?u(g,y,v,k):null;case Xr:return T=v._init,p(g,y,T(v._payload),k)}if(Es(v)||as(v))return T!==null?null:d(g,y,v,k,null);wc(g,v)}return null}function m(g,y,v,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,l(y,g,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case uc:return g=g.get(k.key===null?v:k.key)||null,c(y,g,k,T);case Po:return g=g.get(k.key===null?v:k.key)||null,u(y,g,k,T);case Xr:var $=k._init;return m(g,y,v,$(k._payload),T)}if(Es(k)||as(k))return g=g.get(v)||null,d(y,g,k,T,null);wc(y,k)}return null}function S(g,y,v,k){for(var T=null,$=null,I=y,j=y=0,N=null;I!==null&&j<v.length;j++){I.index>j?(N=I,I=null):N=I.sibling;var R=p(g,I,v[j],k);if(R===null){I===null&&(I=N);break}e&&I&&R.alternate===null&&t(g,I),y=o(R,y,j),$===null?T=R:$.sibling=R,$=R,I=N}if(j===v.length)return n(g,I),je&&Bi(g,j),T;if(I===null){for(;j<v.length;j++)I=f(g,v[j],k),I!==null&&(y=o(I,y,j),$===null?T=I:$.sibling=I,$=I);return je&&Bi(g,j),T}for(I=r(g,I);j<v.length;j++)N=m(I,g,j,v[j],k),N!==null&&(e&&N.alternate!==null&&I.delete(N.key===null?j:N.key),y=o(N,y,j),$===null?T=N:$.sibling=N,$=N);return e&&I.forEach(function(K){return t(g,K)}),je&&Bi(g,j),T}function w(g,y,v,k){var T=as(v);if(typeof T!="function")throw Error(P(150));if(v=T.call(v),v==null)throw Error(P(151));for(var $=T=null,I=y,j=y=0,N=null,R=v.next();I!==null&&!R.done;j++,R=v.next()){I.index>j?(N=I,I=null):N=I.sibling;var K=p(g,I,R.value,k);if(K===null){I===null&&(I=N);break}e&&I&&K.alternate===null&&t(g,I),y=o(K,y,j),$===null?T=K:$.sibling=K,$=K,I=N}if(R.done)return n(g,I),je&&Bi(g,j),T;if(I===null){for(;!R.done;j++,R=v.next())R=f(g,R.value,k),R!==null&&(y=o(R,y,j),$===null?T=R:$.sibling=R,$=R);return je&&Bi(g,j),T}for(I=r(g,I);!R.done;j++,R=v.next())R=m(I,g,j,R.value,k),R!==null&&(e&&R.alternate!==null&&I.delete(R.key===null?j:R.key),y=o(R,y,j),$===null?T=R:$.sibling=R,$=R);return e&&I.forEach(function(ce){return t(g,ce)}),je&&Bi(g,j),T}function E(g,y,v,k){if(typeof v=="object"&&v!==null&&v.type===Fo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case uc:e:{for(var T=v.key,$=y;$!==null;){if($.key===T){if(T=v.type,T===Fo){if($.tag===7){n(g,$.sibling),y=i($,v.props.children),y.return=g,g=y;break e}}else if($.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xr&&wx(T)===$.type){n(g,$.sibling),y=i($,v.props),y.ref=ds(g,$,v),y.return=g,g=y;break e}n(g,$);break}else t(g,$);$=$.sibling}v.type===Fo?(y=qi(v.props.children,g.mode,k,v.key),y.return=g,g=y):(k=Xc(v.type,v.key,v.props,null,g.mode,k),k.ref=ds(g,y,v),k.return=g,g=k)}return a(g);case Po:e:{for($=v.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(g,y.sibling),y=i(y,v.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else t(g,y);y=y.sibling}y=Ep(v,g.mode,k),y.return=g,g=y}return a(g);case Xr:return $=v._init,E(g,y,$(v._payload),k)}if(Es(v))return S(g,y,v,k);if(as(v))return w(g,y,v,k);wc(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,v),y.return=g,g=y):(n(g,y),y=kp(v,g.mode,k),y.return=g,g=y),a(g)):n(g,y)}return E}var xa=wE(!0),bE=wE(!1),Al={},sr=Ai(Al),ol=Ai(Al),al=Ai(Al);function Gi(e){if(e===Al)throw Error(P(174));return e}function Ng(e,t){switch(Ee(al,t),Ee(ol,e),Ee(sr,Al),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pm(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pm(t,e)}Le(sr),Ee(sr,t)}function Sa(){Le(sr),Le(ol),Le(al)}function kE(e){Gi(al.current);var t=Gi(sr.current),n=pm(t,e.type);t!==n&&(Ee(ol,e),Ee(sr,n))}function Pg(e){ol.current===e&&(Le(sr),Le(ol))}var Pe=Ai(0);function Au(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yp=[];function Fg(){for(var e=0;e<yp.length;e++)yp[e]._workInProgressVersionPrimary=null;yp.length=0}var Hc=Gr.ReactCurrentDispatcher,vp=Gr.ReactCurrentBatchConfig,Ji=0,Fe=null,at=null,ut=null,Lu=!1,Rs=!1,sl=0,Fj=0;function bt(){throw Error(P(321))}function Mg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vn(e[n],t[n]))return!1;return!0}function Bg(e,t,n,r,i,o){if(Ji=o,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hc.current=e===null||e.memoizedState===null?zj:Wj,e=n(r,i),Rs){o=0;do{if(Rs=!1,sl=0,25<=o)throw Error(P(301));o+=1,ut=at=null,t.updateQueue=null,Hc.current=Vj,e=n(r,i)}while(Rs)}if(Hc.current=Iu,t=at!==null&&at.next!==null,Ji=0,ut=at=Fe=null,Lu=!1,t)throw Error(P(300));return e}function Ug(){var e=sl!==0;return sl=0,e}function ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Fe.memoizedState=ut=e:ut=ut.next=e,ut}function bn(){if(at===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=at.next;var t=ut===null?Fe.memoizedState:ut.next;if(t!==null)ut=t,at=e;else{if(e===null)throw Error(P(310));at=e,e={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ut===null?Fe.memoizedState=ut=e:ut=ut.next=e}return ut}function ll(e,t){return typeof t=="function"?t(e):t}function xp(e){var t=bn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=at,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((Ji&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Fe.lanes|=d,eo|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Vn(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Fe.lanes|=o,eo|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sp(e){var t=bn(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vn(o,t.memoizedState)||(Gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function EE(){}function $E(e,t){var n=Fe,r=bn(),i=t(),o=!Vn(r.memoizedState,i);if(o&&(r.memoizedState=i,Gt=!0),r=r.queue,zg(CE.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,cl(9,_E.bind(null,n,r,i,t),void 0,null),pt===null)throw Error(P(349));Ji&30||TE(n,t,i)}return i}function TE(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _E(e,t,n,r){t.value=n,t.getSnapshot=r,AE(t)&&LE(e)}function CE(e,t,n){return n(function(){AE(t)&&LE(e)})}function AE(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vn(e,n)}catch{return!0}}function LE(e){var t=Mr(e,1);t!==null&&Un(t,e,1,-1)}function bx(e){var t=ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:e},t.queue=e,e=e.dispatch=Uj.bind(null,Fe,e),[t.memoizedState,e]}function cl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function IE(){return bn().memoizedState}function Qc(e,t,n,r){var i=ir();Fe.flags|=e,i.memoizedState=cl(1|t,n,void 0,r===void 0?null:r)}function Nd(e,t,n,r){var i=bn();r=r===void 0?null:r;var o=void 0;if(at!==null){var a=at.memoizedState;if(o=a.destroy,r!==null&&Mg(r,a.deps)){i.memoizedState=cl(t,n,o,r);return}}Fe.flags|=e,i.memoizedState=cl(1|t,n,o,r)}function kx(e,t){return Qc(8390656,8,e,t)}function zg(e,t){return Nd(2048,8,e,t)}function jE(e,t){return Nd(4,2,e,t)}function OE(e,t){return Nd(4,4,e,t)}function RE(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function DE(e,t,n){return n=n!=null?n.concat([e]):null,Nd(4,4,RE.bind(null,t,e),n)}function Wg(){}function NE(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function PE(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function FE(e,t,n){return Ji&21?(Vn(n,t)||(n=Uk(),Fe.lanes|=n,eo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function Mj(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=vp.transition;vp.transition={};try{e(!1),t()}finally{xe=n,vp.transition=r}}function ME(){return bn().memoizedState}function Bj(e,t,n){var r=hi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},BE(e))UE(t,n);else if(n=yE(e,t,n,r),n!==null){var i=Ot();Un(n,e,r,i),zE(n,t,r)}}function Uj(e,t,n){var r=hi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(BE(e))UE(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Vn(l,a)){var c=t.interleaved;c===null?(i.next=i,Rg(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=yE(e,t,i,r),n!==null&&(i=Ot(),Un(n,e,r,i),zE(n,t,r))}}function BE(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function UE(e,t){Rs=Lu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zE(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sg(e,n)}}var Iu={readContext:wn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},zj={readContext:wn,useCallback:function(e,t){return ir().memoizedState=[e,t===void 0?null:t],e},useContext:wn,useEffect:kx,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qc(4194308,4,RE.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qc(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qc(4,2,e,t)},useMemo:function(e,t){var n=ir();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ir();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bj.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=ir();return e={current:e},t.memoizedState=e},useState:bx,useDebugValue:Wg,useDeferredValue:function(e){return ir().memoizedState=e},useTransition:function(){var e=bx(!1),t=e[0];return e=Mj.bind(null,e[1]),ir().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,i=ir();if(je){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),pt===null)throw Error(P(349));Ji&30||TE(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,kx(CE.bind(null,r,o,e),[e]),r.flags|=2048,cl(9,_E.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ir(),t=pt.identifierPrefix;if(je){var n=Or,r=jr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wj={readContext:wn,useCallback:NE,useContext:wn,useEffect:zg,useImperativeHandle:DE,useInsertionEffect:jE,useLayoutEffect:OE,useMemo:PE,useReducer:xp,useRef:IE,useState:function(){return xp(ll)},useDebugValue:Wg,useDeferredValue:function(e){var t=bn();return FE(t,at.memoizedState,e)},useTransition:function(){var e=xp(ll)[0],t=bn().memoizedState;return[e,t]},useMutableSource:EE,useSyncExternalStore:$E,useId:ME,unstable_isNewReconciler:!1},Vj={readContext:wn,useCallback:NE,useContext:wn,useEffect:zg,useImperativeHandle:DE,useInsertionEffect:jE,useLayoutEffect:OE,useMemo:PE,useReducer:Sp,useRef:IE,useState:function(){return Sp(ll)},useDebugValue:Wg,useDeferredValue:function(e){var t=bn();return at===null?t.memoizedState=e:FE(t,at.memoizedState,e)},useTransition:function(){var e=Sp(ll)[0],t=bn().memoizedState;return[e,t]},useMutableSource:EE,useSyncExternalStore:$E,useId:ME,unstable_isNewReconciler:!1};function wa(e,t){try{var n="",r=t;do n+=vI(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wp(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nm(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gj=typeof WeakMap=="function"?WeakMap:Map;function WE(e,t,n){n=Dr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ou||(Ou=!0,Hm=r),Nm(e,t)},n}function VE(e,t,n){n=Dr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Nm(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Nm(e,t),typeof r!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ex(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gj;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=o3.bind(null,e,t,n),t.then(e,e))}function $x(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tx(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dr(-1,1),t.tag=2,pi(n,t,1))),n.lanes|=1),e)}var Hj=Gr.ReactCurrentOwner,Gt=!1;function jt(e,t,n,r){t.child=e===null?bE(t,null,n,r):xa(t,e.child,n,r)}function _x(e,t,n,r,i){n=n.render;var o=t.ref;return oa(t,i),r=Bg(e,t,n,r,o,i),n=Ug(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Br(e,t,i)):(je&&n&&Cg(t),t.flags|=1,jt(e,t,r,i),t.child)}function Cx(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Xg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,GE(e,t,o,r,i)):(e=Xc(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(a,r)&&e.ref===t.ref)return Br(e,t,i)}return t.flags|=1,e=gi(o,r),e.ref=t.ref,e.return=t,t.child=e}function GE(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(tl(o,r)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Br(e,t,i)}return Pm(e,t,n,r,i)}function HE(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(qo,tn),tn|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(qo,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ee(qo,tn),tn|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ee(qo,tn),tn|=r;return jt(e,t,i,n),t.child}function QE(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pm(e,t,n,r,i){var o=Qt(n)?Xi:Ct.current;return o=ya(t,o),oa(t,i),n=Bg(e,t,n,r,o,i),r=Ug(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Br(e,t,i)):(je&&r&&Cg(t),t.flags|=1,jt(e,t,n,i),t.child)}function Ax(e,t,n,r,i){if(Qt(n)){var o=!0;ku(t)}else o=!1;if(oa(t,i),t.stateNode===null)qc(e,t),SE(t,n,r),Dm(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=Qt(n)?Xi:Ct.current,u=ya(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Sx(t,a,r,u),Zr=!1;var p=t.memoizedState;a.state=p,Cu(t,r,a,i),c=t.memoizedState,l!==r||p!==c||Ht.current||Zr?(typeof d=="function"&&(Rm(t,n,d,r),c=t.memoizedState),(l=Zr||xx(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vE(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Dn(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=wn(c):(c=Qt(n)?Xi:Ct.current,c=ya(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Sx(t,a,r,c),Zr=!1,p=t.memoizedState,a.state=p,Cu(t,r,a,i);var S=t.memoizedState;l!==f||p!==S||Ht.current||Zr?(typeof m=="function"&&(Rm(t,n,m,r),S=t.memoizedState),(u=Zr||xx(t,n,u,r,p,S,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Fm(e,t,n,r,o,i)}function Fm(e,t,n,r,i,o){QE(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&mx(t,n,!1),Br(e,t,o);r=t.stateNode,Hj.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xa(t,e.child,null,o),t.child=xa(t,null,l,o)):jt(e,t,l,o),t.memoizedState=r.state,i&&mx(t,n,!0),t.child}function qE(e){var t=e.stateNode;t.pendingContext?px(e,t.pendingContext,t.pendingContext!==t.context):t.context&&px(e,t.context,!1),Ng(e,t.containerInfo)}function Lx(e,t,n,r,i){return va(),Lg(i),t.flags|=256,jt(e,t,n,r),t.child}var Mm={dehydrated:null,treeContext:null,retryLane:0};function Bm(e){return{baseLanes:e,cachePool:null,transitions:null}}function YE(e,t,n){var r=t.pendingProps,i=Pe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Pe,i&1),e===null)return jm(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Md(a,r,0,null),e=qi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bm(n),t.memoizedState=Mm,e):Vg(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Qj(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=gi(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=gi(l,o):(o=qi(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Bm(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Mm,r}return o=e.child,e=o.sibling,r=gi(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vg(e,t){return t=Md({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bc(e,t,n,r){return r!==null&&Lg(r),xa(t,e.child,null,n),e=Vg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qj(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=wp(Error(P(422))),bc(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Md({mode:"visible",children:r.children},i,0,null),o=qi(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&xa(t,e.child,null,a),t.child.memoizedState=Bm(a),t.memoizedState=Mm,o);if(!(t.mode&1))return bc(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(P(419)),r=wp(o,r,void 0),bc(e,t,a,r)}if(l=(a&e.childLanes)!==0,Gt||l){if(r=pt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mr(e,i),Un(r,e,i,-1))}return Kg(),r=wp(Error(P(421))),bc(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=a3.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,nn=fi(i.nextSibling),on=t,je=!0,Pn=null,e!==null&&(hn[gn++]=jr,hn[gn++]=Or,hn[gn++]=Zi,jr=e.id,Or=e.overflow,Zi=t),t=Vg(t,r.children),t.flags|=4096,t)}function Ix(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Om(e.return,t,n)}function bp(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function KE(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(jt(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ix(e,n,t);else if(e.tag===19)Ix(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Au(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bp(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Au(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bp(t,!0,n,null,o);break;case"together":bp(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Br(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),eo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qj(e,t,n){switch(t.tag){case 3:qE(t),va();break;case 5:kE(t);break;case 1:Qt(t.type)&&ku(t);break;case 4:Ng(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Tu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?YE(e,t,n):(Ee(Pe,Pe.current&1),e=Br(e,t,n),e!==null?e.sibling:null);Ee(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return KE(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,HE(e,t,n)}return Br(e,t,n)}var XE,Um,ZE,JE;XE=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Um=function(){};ZE=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gi(sr.current);var o=null;switch(n){case"input":i=cm(e,i),r=cm(e,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=fm(e,i),r=fm(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wu)}mm(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&_e("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};JE=function(e,t,n,r){n!==r&&(t.flags|=4)};function fs(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yj(e,t,n){var r=t.pendingProps;switch(Ag(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(t),null;case 1:return Qt(t.type)&&bu(),kt(t),null;case 3:return r=t.stateNode,Sa(),Le(Ht),Le(Ct),Fg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pn!==null&&(Ym(Pn),Pn=null))),Um(e,t),kt(t),null;case 5:Pg(t);var i=Gi(al.current);if(n=t.type,e!==null&&t.stateNode!=null)ZE(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return kt(t),null}if(e=Gi(sr.current),Sc(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[or]=t,r[il]=o,e=(t.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Ts.length;i++)_e(Ts[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Bv(r,o),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_e("invalid",r);break;case"textarea":zv(r,o),_e("invalid",r)}mm(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&xc(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&xc(r.textContent,l,e),i=["children",""+l]):qs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&_e("scroll",r)}switch(n){case"input":dc(r),Uv(r,o,!0);break;case"textarea":dc(r),Wv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tk(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[or]=t,e[il]=r,XE(e,t,!1,!1),t.stateNode=e;e:{switch(a=hm(n,r),n){case"dialog":_e("cancel",e),_e("close",e),i=r;break;case"iframe":case"object":case"embed":_e("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ts.length;i++)_e(Ts[i],e);i=r;break;case"source":_e("error",e),i=r;break;case"img":case"image":case"link":_e("error",e),_e("load",e),i=r;break;case"details":_e("toggle",e),i=r;break;case"input":Bv(e,r),i=cm(e,r),_e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),_e("invalid",e);break;case"textarea":zv(e,r),i=fm(e,r),_e("invalid",e);break;default:i=r}mm(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ak(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_k(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ys(e,c):typeof c=="number"&&Ys(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&_e("scroll",e):c!=null&&mg(e,o,c,a))}switch(n){case"input":dc(e),Uv(e,r,!1);break;case"textarea":dc(e),Wv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ta(e,!!r.multiple,o,!1):r.defaultValue!=null&&ta(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return kt(t),null;case 6:if(e&&t.stateNode!=null)JE(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Gi(al.current),Gi(sr.current),Sc(t)){if(r=t.stateNode,n=t.memoizedProps,r[or]=t,(o=r.nodeValue!==n)&&(e=on,e!==null))switch(e.tag){case 3:xc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xc(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[or]=t,t.stateNode=r}return kt(t),null;case 13:if(Le(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&nn!==null&&t.mode&1&&!(t.flags&128))gE(),va(),t.flags|=98560,o=!1;else if(o=Sc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[or]=t}else va(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kt(t),o=!1}else Pn!==null&&(Ym(Pn),Pn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?st===0&&(st=3):Kg())),t.updateQueue!==null&&(t.flags|=4),kt(t),null);case 4:return Sa(),Um(e,t),e===null&&nl(t.stateNode.containerInfo),kt(t),null;case 10:return Og(t.type._context),kt(t),null;case 17:return Qt(t.type)&&bu(),kt(t),null;case 19:if(Le(Pe),o=t.memoizedState,o===null)return kt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)fs(o,!1);else{if(st!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Au(e),a!==null){for(t.flags|=128,fs(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Pe,Pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&qe()>ba&&(t.flags|=128,r=!0,fs(o,!1),t.lanes=4194304)}else{if(!r)if(e=Au(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!je)return kt(t),null}else 2*qe()-o.renderingStartTime>ba&&n!==1073741824&&(t.flags|=128,r=!0,fs(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=qe(),t.sibling=null,n=Pe.current,Ee(Pe,r?n&1|2:n&1),t):(kt(t),null);case 22:case 23:return Yg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tn&1073741824&&(kt(t),t.subtreeFlags&6&&(t.flags|=8192)):kt(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Kj(e,t){switch(Ag(t),t.tag){case 1:return Qt(t.type)&&bu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(),Le(Ht),Le(Ct),Fg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pg(t),null;case 13:if(Le(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));va()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le(Pe),null;case 4:return Sa(),null;case 10:return Og(t.type._context),null;case 22:case 23:return Yg(),null;case 24:return null;default:return null}}var kc=!1,$t=!1,Xj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Qo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function zm(e,t,n){try{n()}catch(r){We(e,t,r)}}var jx=!1;function Zj(e,t){if($m=vu,e=rE(),_g(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++d===r&&(c=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tm={focusedElem:e,selectionRange:n},vu=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,E=S.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Dn(t.type,w),E);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){We(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return S=jx,jx=!1,S}function Ds(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&zm(t,n,o)}i=i.next}while(i!==r)}}function Pd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wm(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function e$(e){var t=e.alternate;t!==null&&(e.alternate=null,e$(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[or],delete t[il],delete t[Am],delete t[Rj],delete t[Dj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function t$(e){return e.tag===5||e.tag===3||e.tag===4}function Ox(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||t$(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wu));else if(r!==4&&(e=e.child,e!==null))for(Vm(e,t,n),e=e.sibling;e!==null;)Vm(e,t,n),e=e.sibling}function Gm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gm(e,t,n),e=e.sibling;e!==null;)Gm(e,t,n),e=e.sibling}var xt=null,Nn=!1;function qr(e,t,n){for(n=n.child;n!==null;)n$(e,t,n),n=n.sibling}function n$(e,t,n){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(Ad,n)}catch{}switch(n.tag){case 5:$t||Qo(n,t);case 6:var r=xt,i=Nn;xt=null,qr(e,t,n),xt=r,Nn=i,xt!==null&&(Nn?(e=xt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Nn?(e=xt,n=n.stateNode,e.nodeType===8?hp(e.parentNode,n):e.nodeType===1&&hp(e,n),Js(e)):hp(xt,n.stateNode));break;case 4:r=xt,i=Nn,xt=n.stateNode.containerInfo,Nn=!0,qr(e,t,n),xt=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&zm(n,t,a),i=i.next}while(i!==r)}qr(e,t,n);break;case 1:if(!$t&&(Qo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,t,l)}qr(e,t,n);break;case 21:qr(e,t,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,qr(e,t,n),$t=r):qr(e,t,n);break;default:qr(e,t,n)}}function Rx(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xj),t.forEach(function(r){var i=s3.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:xt=l.stateNode,Nn=!1;break e;case 3:xt=l.stateNode.containerInfo,Nn=!0;break e;case 4:xt=l.stateNode.containerInfo,Nn=!0;break e}l=l.return}if(xt===null)throw Error(P(160));n$(o,a,i),xt=null,Nn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){We(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)r$(t,e),t=t.sibling}function r$(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jn(t,e),rr(e),r&4){try{Ds(3,e,e.return),Pd(3,e)}catch(w){We(e,e.return,w)}try{Ds(5,e,e.return)}catch(w){We(e,e.return,w)}}break;case 1:jn(t,e),rr(e),r&512&&n!==null&&Qo(n,n.return);break;case 5:if(jn(t,e),rr(e),r&512&&n!==null&&Qo(n,n.return),e.flags&32){var i=e.stateNode;try{Ys(i,"")}catch(w){We(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ek(i,o),hm(l,a);var u=hm(l,o);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?Ak(i,f):d==="dangerouslySetInnerHTML"?_k(i,f):d==="children"?Ys(i,f):mg(i,d,f,u)}switch(l){case"input":um(i,o);break;case"textarea":$k(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?ta(i,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?ta(i,!!o.multiple,o.defaultValue,!0):ta(i,!!o.multiple,o.multiple?[]:"",!1))}i[il]=o}catch(w){We(e,e.return,w)}}break;case 6:if(jn(t,e),rr(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){We(e,e.return,w)}}break;case 3:if(jn(t,e),rr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(t.containerInfo)}catch(w){We(e,e.return,w)}break;case 4:jn(t,e),rr(e);break;case 13:jn(t,e),rr(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qg=qe())),r&4&&Rx(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?($t=(u=$t)||d,jn(t,e),$t=u):jn(t,e),rr(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(V=e,d=e.child;d!==null;){for(f=V=d;V!==null;){switch(p=V,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ds(4,p,p.return);break;case 1:Qo(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){We(r,n,w)}}break;case 5:Qo(p,p.return);break;case 22:if(p.memoizedState!==null){Nx(f);continue}}m!==null?(m.return=p,V=m):Nx(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ck("display",a))}catch(w){We(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){We(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(t,e),rr(e),r&4&&Rx(e);break;case 21:break;default:jn(t,e),rr(e)}}function rr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(t$(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ys(i,""),r.flags&=-33);var o=Ox(e);Gm(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ox(e);Vm(e,l,a);break;default:throw Error(P(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jj(e,t,n){V=e,i$(e)}function i$(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||kc;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||$t;l=kc;var u=$t;if(kc=a,($t=c)&&!u)for(V=i;V!==null;)a=V,c=a.child,a.tag===22&&a.memoizedState!==null?Px(i):c!==null?(c.return=a,V=c):Px(i);for(;o!==null;)V=o,i$(o),o=o.sibling;V=i,kc=l,$t=u}Dx(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,V=o):Dx(e)}}function Dx(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$t||Pd(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Dn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vx(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vx(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Js(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}$t||t.flags&512&&Wm(t)}catch(p){We(t,t.return,p)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Nx(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Px(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pd(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){We(t,i,c)}}var o=t.return;try{Wm(t)}catch(c){We(t,o,c)}break;case 5:var a=t.return;try{Wm(t)}catch(c){We(t,a,c)}}}catch(c){We(t,t.return,c)}if(t===e){V=null;break}var l=t.sibling;if(l!==null){l.return=t.return,V=l;break}V=t.return}}var e3=Math.ceil,ju=Gr.ReactCurrentDispatcher,Gg=Gr.ReactCurrentOwner,xn=Gr.ReactCurrentBatchConfig,he=0,pt=null,tt=null,St=0,tn=0,qo=Ai(0),st=0,ul=null,eo=0,Fd=0,Hg=0,Ns=null,Wt=null,Qg=0,ba=1/0,Ar=null,Ou=!1,Hm=null,mi=null,Ec=!1,ai=null,Ru=0,Ps=0,Qm=null,Yc=-1,Kc=0;function Ot(){return he&6?qe():Yc!==-1?Yc:Yc=qe()}function hi(e){return e.mode&1?he&2&&St!==0?St&-St:Pj.transition!==null?(Kc===0&&(Kc=Uk()),Kc):(e=xe,e!==0||(e=window.event,e=e===void 0?16:qk(e.type)),e):1}function Un(e,t,n,r){if(50<Ps)throw Ps=0,Qm=null,Error(P(185));Tl(e,n,r),(!(he&2)||e!==pt)&&(e===pt&&(!(he&2)&&(Fd|=n),st===4&&ri(e,St)),qt(e,r),n===1&&he===0&&!(t.mode&1)&&(ba=qe()+500,Rd&&Li()))}function qt(e,t){var n=e.callbackNode;PI(e,t);var r=yu(e,e===pt?St:0);if(r===0)n!==null&&Hv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hv(n),t===1)e.tag===0?Nj(Fx.bind(null,e)):pE(Fx.bind(null,e)),jj(function(){!(he&6)&&Li()}),n=null;else{switch(zk(r)){case 1:n=xg;break;case 4:n=Mk;break;case 16:n=gu;break;case 536870912:n=Bk;break;default:n=gu}n=f$(n,o$.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function o$(e,t){if(Yc=-1,Kc=0,he&6)throw Error(P(327));var n=e.callbackNode;if(aa()&&e.callbackNode!==n)return null;var r=yu(e,e===pt?St:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Du(e,r);else{t=r;var i=he;he|=2;var o=s$();(pt!==e||St!==t)&&(Ar=null,ba=qe()+500,Qi(e,t));do try{r3();break}catch(l){a$(e,l)}while(1);jg(),ju.current=o,he=i,tt!==null?t=0:(pt=null,St=0,t=st)}if(t!==0){if(t===2&&(i=Sm(e),i!==0&&(r=i,t=qm(e,i))),t===1)throw n=ul,Qi(e,0),ri(e,r),qt(e,qe()),n;if(t===6)ri(e,r);else{if(i=e.current.alternate,!(r&30)&&!t3(i)&&(t=Du(e,r),t===2&&(o=Sm(e),o!==0&&(r=o,t=qm(e,o))),t===1))throw n=ul,Qi(e,0),ri(e,r),qt(e,qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Ui(e,Wt,Ar);break;case 3:if(ri(e,r),(r&130023424)===r&&(t=Qg+500-qe(),10<t)){if(yu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ot(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cm(Ui.bind(null,e,Wt,Ar),t);break}Ui(e,Wt,Ar);break;case 4:if(ri(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Bn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*e3(r/1960))-r,10<r){e.timeoutHandle=Cm(Ui.bind(null,e,Wt,Ar),r);break}Ui(e,Wt,Ar);break;case 5:Ui(e,Wt,Ar);break;default:throw Error(P(329))}}}return qt(e,qe()),e.callbackNode===n?o$.bind(null,e):null}function qm(e,t){var n=Ns;return e.current.memoizedState.isDehydrated&&(Qi(e,t).flags|=256),e=Du(e,t),e!==2&&(t=Wt,Wt=n,t!==null&&Ym(t)),e}function Ym(e){Wt===null?Wt=e:Wt.push.apply(Wt,e)}function t3(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ri(e,t){for(t&=~Hg,t&=~Fd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bn(t),r=1<<n;e[n]=-1,t&=~r}}function Fx(e){if(he&6)throw Error(P(327));aa();var t=yu(e,0);if(!(t&1))return qt(e,qe()),null;var n=Du(e,t);if(e.tag!==0&&n===2){var r=Sm(e);r!==0&&(t=r,n=qm(e,r))}if(n===1)throw n=ul,Qi(e,0),ri(e,t),qt(e,qe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ui(e,Wt,Ar),qt(e,qe()),null}function qg(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(ba=qe()+500,Rd&&Li())}}function to(e){ai!==null&&ai.tag===0&&!(he&6)&&aa();var t=he;he|=1;var n=xn.transition,r=xe;try{if(xn.transition=null,xe=1,e)return e()}finally{xe=r,xn.transition=n,he=t,!(he&6)&&Li()}}function Yg(){tn=qo.current,Le(qo)}function Qi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ij(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(Ag(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bu();break;case 3:Sa(),Le(Ht),Le(Ct),Fg();break;case 5:Pg(r);break;case 4:Sa();break;case 13:Le(Pe);break;case 19:Le(Pe);break;case 10:Og(r.type._context);break;case 22:case 23:Yg()}n=n.return}if(pt=e,tt=e=gi(e.current,null),St=tn=t,st=0,ul=null,Hg=Fd=eo=0,Wt=Ns=null,Vi!==null){for(t=0;t<Vi.length;t++)if(n=Vi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Vi=null}return e}function a$(e,t){do{var n=tt;try{if(jg(),Hc.current=Iu,Lu){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lu=!1}if(Ji=0,ut=at=Fe=null,Rs=!1,sl=0,Gg.current=null,n===null||n.return===null){st=1,ul=t,tt=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=St,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=$x(a);if(m!==null){m.flags&=-257,Tx(m,a,l,o,t),m.mode&1&&Ex(o,u,t),t=m,c=u;var S=t.updateQueue;if(S===null){var w=new Set;w.add(c),t.updateQueue=w}else S.add(c);break e}else{if(!(t&1)){Ex(o,u,t),Kg();break e}c=Error(P(426))}}else if(je&&l.mode&1){var E=$x(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Tx(E,a,l,o,t),Lg(wa(c,l));break e}}o=c=wa(c,l),st!==4&&(st=2),Ns===null?Ns=[o]:Ns.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=WE(o,c,t);yx(o,g);break e;case 1:l=c;var y=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(mi===null||!mi.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=VE(o,l,t);yx(o,k);break e}}o=o.return}while(o!==null)}c$(n)}catch(T){t=T,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(1)}function s$(){var e=ju.current;return ju.current=Iu,e===null?Iu:e}function Kg(){(st===0||st===3||st===2)&&(st=4),pt===null||!(eo&268435455)&&!(Fd&268435455)||ri(pt,St)}function Du(e,t){var n=he;he|=2;var r=s$();(pt!==e||St!==t)&&(Ar=null,Qi(e,t));do try{n3();break}catch(i){a$(e,i)}while(1);if(jg(),he=n,ju.current=r,tt!==null)throw Error(P(261));return pt=null,St=0,st}function n3(){for(;tt!==null;)l$(tt)}function r3(){for(;tt!==null&&!CI();)l$(tt)}function l$(e){var t=d$(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?c$(e):tt=t,Gg.current=null}function c$(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Kj(n,t),n!==null){n.flags&=32767,tt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{st=6,tt=null;return}}else if(n=Yj(n,t,tn),n!==null){tt=n;return}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);st===0&&(st=5)}function Ui(e,t,n){var r=xe,i=xn.transition;try{xn.transition=null,xe=1,i3(e,t,n,r)}finally{xn.transition=i,xe=r}return null}function i3(e,t,n,r){do aa();while(ai!==null);if(he&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(FI(e,o),e===pt&&(tt=pt=null,St=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ec||(Ec=!0,f$(gu,function(){return aa(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xn.transition,xn.transition=null;var a=xe;xe=1;var l=he;he|=4,Gg.current=null,Zj(e,n),r$(n,e),Ej(Tm),vu=!!$m,Tm=$m=null,e.current=n,Jj(n),AI(),he=l,xe=a,xn.transition=o}else e.current=n;if(Ec&&(Ec=!1,ai=e,Ru=i),o=e.pendingLanes,o===0&&(mi=null),jI(n.stateNode),qt(e,qe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ou)throw Ou=!1,e=Hm,Hm=null,e;return Ru&1&&e.tag!==0&&aa(),o=e.pendingLanes,o&1?e===Qm?Ps++:(Ps=0,Qm=e):Ps=0,Li(),null}function aa(){if(ai!==null){var e=zk(Ru),t=xn.transition,n=xe;try{if(xn.transition=null,xe=16>e?16:e,ai===null)var r=!1;else{if(e=ai,ai=null,Ru=0,he&6)throw Error(P(331));var i=he;for(he|=4,V=e.current;V!==null;){var o=V,a=o.child;if(V.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(V=u;V!==null;){var d=V;switch(d.tag){case 0:case 11:case 15:Ds(8,d,o)}var f=d.child;if(f!==null)f.return=d,V=f;else for(;V!==null;){d=V;var p=d.sibling,m=d.return;if(e$(d),d===u){V=null;break}if(p!==null){p.return=m,V=p;break}V=m}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}V=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,V=a;else e:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ds(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,V=g;break e}V=o.return}}var y=e.current;for(V=y;V!==null;){a=V;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,V=v;else e:for(a=y;V!==null;){if(l=V,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Pd(9,l)}}catch(T){We(l,l.return,T)}if(l===a){V=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,V=k;break e}V=l.return}}if(he=i,Li(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(Ad,e)}catch{}r=!0}return r}finally{xe=n,xn.transition=t}}return!1}function Mx(e,t,n){t=wa(n,t),t=WE(e,t,1),e=pi(e,t,1),t=Ot(),e!==null&&(Tl(e,1,t),qt(e,t))}function We(e,t,n){if(e.tag===3)Mx(e,e,n);else for(;t!==null;){if(t.tag===3){Mx(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mi===null||!mi.has(r))){e=wa(n,e),e=VE(t,e,1),t=pi(t,e,1),e=Ot(),t!==null&&(Tl(t,1,e),qt(t,e));break}}t=t.return}}function o3(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(St&n)===n&&(st===4||st===3&&(St&130023424)===St&&500>qe()-Qg?Qi(e,0):Hg|=n),qt(e,t)}function u$(e,t){t===0&&(e.mode&1?(t=mc,mc<<=1,!(mc&130023424)&&(mc=4194304)):t=1);var n=Ot();e=Mr(e,t),e!==null&&(Tl(e,t,n),qt(e,n))}function a3(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),u$(e,n)}function s3(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),u$(e,n)}var d$;d$=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ht.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,qj(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,je&&t.flags&1048576&&mE(t,$u,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qc(e,t),e=t.pendingProps;var i=ya(t,Ct.current);oa(t,n),i=Bg(null,t,r,e,i,n);var o=Ug();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qt(r)?(o=!0,ku(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dg(t),i.updater=Dd,t.stateNode=i,i._reactInternals=t,Dm(t,r,e,n),t=Fm(null,t,r,!0,o,n)):(t.tag=0,je&&o&&Cg(t),jt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qc(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=c3(r),e=Dn(r,e),i){case 0:t=Pm(null,t,r,e,n);break e;case 1:t=Ax(null,t,r,e,n);break e;case 11:t=_x(null,t,r,e,n);break e;case 14:t=Cx(null,t,r,Dn(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dn(r,i),Pm(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dn(r,i),Ax(e,t,r,i,n);case 3:e:{if(qE(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,vE(e,t),Cu(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wa(Error(P(423)),t),t=Lx(e,t,r,n,i);break e}else if(r!==i){i=wa(Error(P(424)),t),t=Lx(e,t,r,n,i);break e}else for(nn=fi(t.stateNode.containerInfo.firstChild),on=t,je=!0,Pn=null,n=bE(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(va(),r===i){t=Br(e,t,n);break e}jt(e,t,r,n)}t=t.child}return t;case 5:return kE(t),e===null&&jm(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_m(r,i)?a=null:o!==null&&_m(r,o)&&(t.flags|=32),QE(e,t),jt(e,t,a,n),t.child;case 6:return e===null&&jm(t),null;case 13:return YE(e,t,n);case 4:return Ng(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xa(t,null,r,n):jt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dn(r,i),_x(e,t,r,i,n);case 7:return jt(e,t,t.pendingProps,n),t.child;case 8:return jt(e,t,t.pendingProps.children,n),t.child;case 12:return jt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ee(Tu,r._currentValue),r._currentValue=a,o!==null)if(Vn(o.value,a)){if(o.children===i.children&&!Ht.current){t=Br(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Dr(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Om(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(P(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Om(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}jt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,oa(t,n),i=wn(i),r=r(i),t.flags|=1,jt(e,t,r,n),t.child;case 14:return r=t.type,i=Dn(r,t.pendingProps),i=Dn(r.type,i),Cx(e,t,r,i,n);case 15:return GE(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Dn(r,i),qc(e,t),t.tag=1,Qt(r)?(e=!0,ku(t)):e=!1,oa(t,n),SE(t,r,i),Dm(t,r,i,n),Fm(null,t,r,!0,e,n);case 19:return KE(e,t,n);case 22:return HE(e,t,n)}throw Error(P(156,t.tag))};function f$(e,t){return Fk(e,t)}function l3(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,t,n,r){return new l3(e,t,n,r)}function Xg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function c3(e){if(typeof e=="function")return Xg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gg)return 11;if(e===yg)return 14}return 2}function gi(e,t){var n=e.alternate;return n===null?(n=yn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xc(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Xg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Fo:return qi(n.children,i,o,t);case hg:a=8,i|=8;break;case om:return e=yn(12,n,t,i|2),e.elementType=om,e.lanes=o,e;case am:return e=yn(13,n,t,i),e.elementType=am,e.lanes=o,e;case sm:return e=yn(19,n,t,i),e.elementType=sm,e.lanes=o,e;case wk:return Md(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xk:a=10;break e;case Sk:a=9;break e;case gg:a=11;break e;case yg:a=14;break e;case Xr:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=yn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qi(e,t,n,r){return e=yn(7,e,r,t),e.lanes=n,e}function Md(e,t,n,r){return e=yn(22,e,r,t),e.elementType=wk,e.lanes=n,e.stateNode={isHidden:!1},e}function kp(e,t,n){return e=yn(6,e,null,t),e.lanes=n,e}function Ep(e,t,n){return t=yn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u3(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ip(0),this.expirationTimes=ip(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ip(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zg(e,t,n,r,i,o,a,l,c){return e=new u3(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=yn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dg(o),e}function d3(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function p$(e){if(!e)return xi;e=e._reactInternals;e:{if(mo(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Qt(n))return fE(e,n,t)}return t}function m$(e,t,n,r,i,o,a,l,c){return e=Zg(n,r,!0,e,i,o,a,l,c),e.context=p$(null),n=e.current,r=Ot(),i=hi(n),o=Dr(r,i),o.callback=t??null,pi(n,o,i),e.current.lanes=i,Tl(e,i,r),qt(e,r),e}function Bd(e,t,n,r){var i=t.current,o=Ot(),a=hi(i);return n=p$(n),t.context===null?t.context=n:t.pendingContext=n,t=Dr(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pi(i,t,a),e!==null&&(Un(e,i,a,o),Gc(e,i,a)),a}function Nu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jg(e,t){Bx(e,t),(e=e.alternate)&&Bx(e,t)}function f3(){return null}var h$=typeof reportError=="function"?reportError:function(e){console.error(e)};function ey(e){this._internalRoot=e}Ud.prototype.render=ey.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Bd(e,t,null,null)};Ud.prototype.unmount=ey.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;to(function(){Bd(null,e,null,null)}),t[Fr]=null}};function Ud(e){this._internalRoot=e}Ud.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gk();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ni.length&&t!==0&&t<ni[n].priority;n++);ni.splice(n,0,e),n===0&&Qk(e)}};function ty(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ux(){}function p3(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Nu(a);o.call(u)}}var a=m$(t,r,e,0,null,!1,!1,"",Ux);return e._reactRootContainer=a,e[Fr]=a.current,nl(e.nodeType===8?e.parentNode:e),to(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Nu(c);l.call(u)}}var c=Zg(e,0,!1,null,null,!1,!1,"",Ux);return e._reactRootContainer=c,e[Fr]=c.current,nl(e.nodeType===8?e.parentNode:e),to(function(){Bd(t,c,n,r)}),c}function Wd(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Nu(a);l.call(c)}}Bd(t,a,e,i)}else a=p3(n,t,e,i,r);return Nu(a)}Wk=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$s(t.pendingLanes);n!==0&&(Sg(t,n|1),qt(t,qe()),!(he&6)&&(ba=qe()+500,Li()))}break;case 13:to(function(){var r=Mr(e,1);if(r!==null){var i=Ot();Un(r,e,1,i)}}),Jg(e,1)}};wg=function(e){if(e.tag===13){var t=Mr(e,134217728);if(t!==null){var n=Ot();Un(t,e,134217728,n)}Jg(e,134217728)}};Vk=function(e){if(e.tag===13){var t=hi(e),n=Mr(e,t);if(n!==null){var r=Ot();Un(n,e,t,r)}Jg(e,t)}};Gk=function(){return xe};Hk=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};ym=function(e,t,n){switch(t){case"input":if(um(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Od(r);if(!i)throw Error(P(90));kk(r),um(r,i)}}}break;case"textarea":$k(e,n);break;case"select":t=n.value,t!=null&&ta(e,!!n.multiple,t,!1)}};jk=qg;Ok=to;var m3={usingClientEntryPoint:!1,Events:[Cl,zo,Od,Lk,Ik,qg]},ps={findFiberByHostInstance:Wi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},h3={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nk(e),e===null?null:e.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||f3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$c.isDisabled&&$c.supportsFiber)try{Ad=$c.inject(h3),ar=$c}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m3;ln.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ty(t))throw Error(P(200));return d3(e,t,null,n)};ln.createRoot=function(e,t){if(!ty(e))throw Error(P(299));var n=!1,r="",i=h$;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zg(e,1,!1,null,null,n,!1,r,i),e[Fr]=t.current,nl(e.nodeType===8?e.parentNode:e),new ey(t)};ln.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Nk(t),e=e===null?null:e.stateNode,e};ln.flushSync=function(e){return to(e)};ln.hydrate=function(e,t,n){if(!zd(t))throw Error(P(200));return Wd(null,e,t,!0,n)};ln.hydrateRoot=function(e,t,n){if(!ty(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=h$;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=m$(t,null,e,1,n??null,i,!1,o,a),e[Fr]=t.current,nl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ud(t)};ln.render=function(e,t,n){if(!zd(t))throw Error(P(200));return Wd(null,e,t,!1,n)};ln.unmountComponentAtNode=function(e){if(!zd(e))throw Error(P(40));return e._reactRootContainer?(to(function(){Wd(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1};ln.unstable_batchedUpdates=qg;ln.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zd(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Wd(e,t,n,!1,r)};ln.version="18.2.0-next-9e3b772b8-20220608";function g$(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g$)}catch(e){console.error(e)}}g$(),mk.exports=ln;var y$=mk.exports,v$,x$,zx=y$;x$=zx.createRoot,v$=zx.hydrateRoot;var S$={exports:{}},g3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y3=g3,v3=y3;function w$(){}function b$(){}b$.resetWarningCache=w$;var x3=function(){function e(r,i,o,a,l,c){if(c!==v3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b$,resetWarningCache:w$};return n.PropTypes=n,n};S$.exports=x3();var S3=S$.exports;const fe=fo(S3);var w3=typeof Element<"u",b3=typeof Map=="function",k3=typeof Set=="function",E3=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Zc(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Zc(e[r],t[r]))return!1;return!0}var o;if(b3&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Zc(r.value[1],t.get(r.value[0])))return!1;return!0}if(k3&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(E3&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(w3&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Zc(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var $3=function(t,n){try{return Zc(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const T3=fo($3);var _3=function(e,t,n,r,i,o,a,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,a,l],d=0;c=new Error(t.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},C3=_3;const Wx=fo(C3);var A3=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<a.length;u++){var d=a[u];if(!c(d))return!1;var f=t[d],p=n[d];if(o=r?r.call(i,f,p,d):void 0,o===!1||o===void 0&&f!==p)return!1}return!0};const k$=fo(A3);function Qe(){return Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qe.apply(this,arguments)}function ny(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Km(e,t)}function Km(e,t){return Km=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},Km(e,t)}function Vx(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var te={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},L3={rel:["amphtml","canonical","alternate"]},I3={type:["application/ld+json"]},j3={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},Gx=Object.keys(te).map(function(e){return te[e]}),Pu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O3=Object.keys(Pu).reduce(function(e,t){return e[Pu[t]]=t,e},{}),sa=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},R3=function(e){var t=sa(e,te.TITLE),n=sa(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,function(){return t});var r=sa(e,"defaultTitle");return t||r||void 0},D3=function(e){return sa(e,"onChangeClientState")||function(){}},$p=function(e,t){return t.filter(function(n){return n[e]!==void 0}).map(function(n){return n[e]}).reduce(function(n,r){return Qe({},n,r)},{})},N3=function(e,t){return t.filter(function(n){return n[te.BASE]!==void 0}).map(function(n){return n[te.BASE]}).reverse().reduce(function(n,r){if(!n.length)for(var i=Object.keys(r),o=0;o<i.length;o+=1){var a=i[o].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}return n},[])},ms=function(e,t,n){var r={};return n.filter(function(i){return!!Array.isArray(i[e])||(i[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof i[e]+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,o){var a={};o.filter(function(f){for(var p,m=Object.keys(f),S=0;S<m.length;S+=1){var w=m[S],E=w.toLowerCase();t.indexOf(E)===-1||p==="rel"&&f[p].toLowerCase()==="canonical"||E==="rel"&&f[E].toLowerCase()==="stylesheet"||(p=E),t.indexOf(w)===-1||w!=="innerHTML"&&w!=="cssText"&&w!=="itemprop"||(p=w)}if(!p||!f[p])return!1;var g=f[p].toLowerCase();return r[p]||(r[p]={}),a[p]||(a[p]={}),!r[p][g]&&(a[p][g]=!0,!0)}).reverse().forEach(function(f){return i.push(f)});for(var l=Object.keys(a),c=0;c<l.length;c+=1){var u=l[c],d=Qe({},r[u],a[u]);r[u]=d}return i},[]).reverse()},P3=function(e,t){if(Array.isArray(e)&&e.length){for(var n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},E$=function(e){return Array.isArray(e)?e.join(""):e},Tp=function(e,t){return Array.isArray(e)?e.reduce(function(n,r){return function(i,o){for(var a=Object.keys(i),l=0;l<a.length;l+=1)if(o[a[l]]&&o[a[l]].includes(i[a[l]]))return!0;return!1}(r,t)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:e}},Hx=function(e,t){var n;return Qe({},e,((n={})[t]=void 0,n))},F3=[te.NOSCRIPT,te.SCRIPT,te.STYLE],_p=function(e,t){return t===void 0&&(t=!0),t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Qx=function(e){return Object.keys(e).reduce(function(t,n){var r=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},qx=function(e,t){return t===void 0&&(t={}),Object.keys(e).reduce(function(n,r){return n[Pu[r]||r]=e[r],n},t)},Jc=function(e,t){return t.map(function(n,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(a){var l=Pu[a]||a;l==="innerHTML"||l==="cssText"?o.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:o[l]=n[a]}),rt.createElement(e,o)})},pn=function(e,t,n){switch(e){case te.TITLE:return{toComponent:function(){return i=t.titleAttributes,(o={key:r=t.title})["data-rh"]=!0,a=qx(i,o),[rt.createElement(te.TITLE,a,r)];var r,i,o,a},toString:function(){return function(r,i,o,a){var l=Qx(o),c=E$(i);return l?"<"+r+' data-rh="true" '+l+">"+_p(c,a)+"</"+r+">":"<"+r+' data-rh="true">'+_p(c,a)+"</"+r+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return qx(t)},toString:function(){return Qx(t)}};default:return{toComponent:function(){return Jc(e,t)},toString:function(){return function(r,i,o){return i.reduce(function(a,l){var c=Object.keys(l).filter(function(f){return!(f==="innerHTML"||f==="cssText")}).reduce(function(f,p){var m=l[p]===void 0?p:p+'="'+_p(l[p],o)+'"';return f?f+" "+m:m},""),u=l.innerHTML||l.cssText||"",d=F3.indexOf(r)===-1;return a+"<"+r+' data-rh="true" '+c+(d?"/>":">"+u+"</"+r+">")},"")}(e,t,n)}}}},Xm=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.noscriptTags,a=e.styleTags,l=e.title,c=l===void 0?"":l,u=e.titleAttributes,d=e.linkTags,f=e.metaTags,p=e.scriptTags,m={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var S=function(w){var E=w.linkTags,g=w.scriptTags,y=w.encode,v=Tp(w.metaTags,j3),k=Tp(E,L3),T=Tp(g,I3);return{priorityMethods:{toComponent:function(){return[].concat(Jc(te.META,v.priority),Jc(te.LINK,k.priority),Jc(te.SCRIPT,T.priority))},toString:function(){return pn(te.META,v.priority,y)+" "+pn(te.LINK,k.priority,y)+" "+pn(te.SCRIPT,T.priority,y)}},metaTags:v.default,linkTags:k.default,scriptTags:T.default}}(e);m=S.priorityMethods,d=S.linkTags,f=S.metaTags,p=S.scriptTags}return{priority:m,base:pn(te.BASE,t,r),bodyAttributes:pn("bodyAttributes",n,r),htmlAttributes:pn("htmlAttributes",i,r),link:pn(te.LINK,d,r),meta:pn(te.META,f,r),noscript:pn(te.NOSCRIPT,o,r),script:pn(te.SCRIPT,p,r),style:pn(te.STYLE,a,r),title:pn(te.TITLE,{title:c,titleAttributes:u},r)}},Tc=[],Zm=function(e,t){var n=this;t===void 0&&(t=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?Tc:n.instances},add:function(r){(n.canUseDOM?Tc:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?Tc:n.instances).indexOf(r);(n.canUseDOM?Tc:n.instances).splice(i,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=Xm({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},$$=rt.createContext({}),M3=fe.shape({setHelmet:fe.func,helmetInstances:fe.shape({get:fe.func,add:fe.func,remove:fe.func})}),B3=typeof document<"u",Yo=function(e){function t(n){var r;return(r=e.call(this,n)||this).helmetData=new Zm(r.props.context,t.canUseDOM),r}return ny(t,e),t.prototype.render=function(){return rt.createElement($$.Provider,{value:this.helmetData.value},this.props.children)},t}(x.Component);Yo.canUseDOM=B3,Yo.propTypes={context:fe.shape({helmet:fe.shape()}),children:fe.node.isRequired},Yo.defaultProps={context:{}},Yo.displayName="HelmetProvider";var Io=function(e,t){var n,r=document.head||document.querySelector(te.HEAD),i=r.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),a=[];return t&&t.length&&t.forEach(function(l){var c=document.createElement(e);for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(u==="innerHTML"?c.innerHTML=l.innerHTML:u==="cssText"?c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText)):c.setAttribute(u,l[u]===void 0?"":l[u]));c.setAttribute("data-rh","true"),o.some(function(d,f){return n=f,c.isEqualNode(d)})?o.splice(n,1):a.push(c)}),o.forEach(function(l){return l.parentNode.removeChild(l)}),a.forEach(function(l){return r.appendChild(l)}),{oldTags:o,newTags:a}},Cp=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-rh"),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),l=0;l<a.length;l+=1){var c=a[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),i.indexOf(c)===-1&&i.push(c);var d=o.indexOf(c);d!==-1&&o.splice(d,1)}for(var f=o.length-1;f>=0;f-=1)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==a.join(",")&&n.setAttribute("data-rh",a.join(","))}},Yx=function(e,t){var n=e.baseTag,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;Cp(te.BODY,e.bodyAttributes),Cp(te.HTML,r),function(w,E){w!==void 0&&document.title!==w&&(document.title=E$(w)),Cp(te.TITLE,E)}(d,f);var p={baseTag:Io(te.BASE,n),linkTags:Io(te.LINK,i),metaTags:Io(te.META,o),noscriptTags:Io(te.NOSCRIPT,a),scriptTags:Io(te.SCRIPT,c),styleTags:Io(te.STYLE,u)},m={},S={};Object.keys(p).forEach(function(w){var E=p[w],g=E.newTags,y=E.oldTags;g.length&&(m[w]=g),y.length&&(S[w]=p[w].oldTags)}),t&&t(),l(e,m,S)},hs=null,Fu=function(e){function t(){for(var r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(r=e.call.apply(e,[this].concat(o))||this).rendered=!1,r}ny(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!k$(r,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var r,i,o=this.props.context,a=o.setHelmet,l=null,c=(r=o.helmetInstances.get().map(function(u){var d=Qe({},u.props);return delete d.context,d}),{baseTag:N3(["href"],r),bodyAttributes:$p("bodyAttributes",r),defer:sa(r,"defer"),encode:sa(r,"encodeSpecialCharacters"),htmlAttributes:$p("htmlAttributes",r),linkTags:ms(te.LINK,["rel","href"],r),metaTags:ms(te.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:ms(te.NOSCRIPT,["innerHTML"],r),onChangeClientState:D3(r),scriptTags:ms(te.SCRIPT,["src","innerHTML"],r),styleTags:ms(te.STYLE,["cssText"],r),title:R3(r),titleAttributes:$p("titleAttributes",r),prioritizeSeoTags:P3(r,"prioritizeSeoTags")});Yo.canUseDOM?(i=c,hs&&cancelAnimationFrame(hs),i.defer?hs=requestAnimationFrame(function(){Yx(i,function(){hs=null})}):(Yx(i),hs=null)):Xm&&(l=Xm(c)),a(l)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},t}(x.Component);Fu.propTypes={context:M3.isRequired},Fu.displayName="HelmetDispatcher";var U3=["children"],z3=["children"],mt=function(e){function t(){return e.apply(this,arguments)||this}ny(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!T3(Hx(this.props,"helmetData"),Hx(r,"helmetData"))},n.mapNestedChildrenToProps=function(r,i){if(!i)return null;switch(r.type){case te.SCRIPT:case te.NOSCRIPT:return{innerHTML:i};case te.STYLE:return{cssText:i};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(r){var i,o=r.child,a=r.arrayTypeChildren;return Qe({},a,((i={})[o.type]=[].concat(a[o.type]||[],[Qe({},r.newChildProps,this.mapNestedChildrenToProps(o,r.nestedChildren))]),i))},n.mapObjectTypeChildren=function(r){var i,o,a=r.child,l=r.newProps,c=r.newChildProps,u=r.nestedChildren;switch(a.type){case te.TITLE:return Qe({},l,((i={})[a.type]=u,i.titleAttributes=Qe({},c),i));case te.BODY:return Qe({},l,{bodyAttributes:Qe({},c)});case te.HTML:return Qe({},l,{htmlAttributes:Qe({},c)});default:return Qe({},l,((o={})[a.type]=Qe({},c),o))}},n.mapArrayTypeChildrenToProps=function(r,i){var o=Qe({},i);return Object.keys(r).forEach(function(a){var l;o=Qe({},o,((l={})[a]=r[a],l))}),o},n.warnOnInvalidChildren=function(r,i){return Wx(Gx.some(function(o){return r.type===o}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+Gx.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),Wx(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(o){return typeof o!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(r,i){var o=this,a={};return rt.Children.forEach(r,function(l){if(l&&l.props){var c=l.props,u=c.children,d=Vx(c,U3),f=Object.keys(d).reduce(function(m,S){return m[O3[S]||S]=d[S],m},{}),p=l.type;switch(typeof p=="symbol"?p=p.toString():o.warnOnInvalidChildren(l,u),p){case te.FRAGMENT:i=o.mapChildrenToProps(u,i);break;case te.LINK:case te.META:case te.NOSCRIPT:case te.SCRIPT:case te.STYLE:a=o.flattenArrayTypeChildren({child:l,arrayTypeChildren:a,newChildProps:f,nestedChildren:u});break;default:i=o.mapObjectTypeChildren({child:l,newProps:i,newChildProps:f,nestedChildren:u})}}}),this.mapArrayTypeChildrenToProps(a,i)},n.render=function(){var r=this.props,i=r.children,o=Vx(r,z3),a=Qe({},o),l=o.helmetData;return i&&(a=this.mapChildrenToProps(i,a)),!l||l instanceof Zm||(l=new Zm(l.context,l.instances)),l?rt.createElement(Fu,Qe({},a,{context:l.value,helmetData:void 0})):rt.createElement($$.Consumer,null,function(c){return rt.createElement(Fu,Qe({},a,{context:c}))})},t}(x.Component);mt.propTypes={base:fe.object,bodyAttributes:fe.object,children:fe.oneOfType([fe.arrayOf(fe.node),fe.node]),defaultTitle:fe.string,defer:fe.bool,encodeSpecialCharacters:fe.bool,htmlAttributes:fe.object,link:fe.arrayOf(fe.object),meta:fe.arrayOf(fe.object),noscript:fe.arrayOf(fe.object),onChangeClientState:fe.func,script:fe.arrayOf(fe.object),style:fe.arrayOf(fe.object),title:fe.string,titleAttributes:fe.object,titleTemplate:fe.string,prioritizeSeoTags:fe.bool,helmetData:fe.object},mt.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},mt.displayName="Helmet";var W3=Object.defineProperty,V3=(e,t,n)=>t in e?W3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_c=(e,t,n)=>(V3(e,typeof t!="symbol"?t+"":t,n),n),Jm=new Map,Cc=new WeakMap,Kx=0,T$=void 0;function G3(e){T$=e}function H3(e){return e?(Cc.has(e)||(Kx+=1,Cc.set(e,Kx.toString())),Cc.get(e)):"0"}function Q3(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?H3(e.root):e[t]}`).toString()}function q3(e){let t=Q3(e),n=Jm.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver(a=>{a.forEach(l=>{var c;const u=l.isIntersecting&&i.some(d=>l.intersectionRatio>=d);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(c=r.get(l.target))==null||c.forEach(d=>{d(u,l)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},Jm.set(t,n)}return n}function _$(e,t,n={},r=T$){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const c=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:i,observer:o,elements:a}=q3(n);let l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(a.delete(e),o.unobserve(e)),a.size===0&&(o.disconnect(),Jm.delete(i))}}function Y3(e){return typeof e.children!="function"}var ry=class extends x.Component{constructor(e){super(e),_c(this,"node",null),_c(this,"_unobserveCb",null),_c(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),_c(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Y3(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:o}=this.props;this._unobserveCb=_$(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:m,entry:S}=this.state;return e({inView:m,entry:S,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:i,rootMargin:o,onChange:a,skip:l,trackVisibility:c,delay:u,initialInView:d,fallbackInView:f,...p}=this.props;return x.createElement(t||"div",{ref:this.handleNode,...p},e)}};function yr({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:l,fallbackInView:c,onChange:u}={}){var d;const[f,p]=x.useState(null),m=x.useRef(),[S,w]=x.useState({inView:!!l,entry:void 0});m.current=u,x.useEffect(()=>{if(a||!f)return;let v;return v=_$(f,(k,T)=>{w({inView:k,entry:T}),m.current&&m.current(k,T),T.isIntersecting&&o&&v&&(v(),v=void 0)},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},c),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,f,i,r,o,a,n,c,t]);const E=(d=S.entry)==null?void 0:d.target,g=x.useRef();!f&&E&&!o&&!a&&g.current!==E&&(g.current=E,w({inView:!!l,entry:void 0}));const y=[p,S.inView,S.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var eh=function(e,t){return eh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},eh(e,t)};function vr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");eh(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var L=function(){return L=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},L.apply(this,arguments)};function ur(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Jr(e,t,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(d){try{u(r.next(d))}catch(f){a(f)}}function c(d){try{u(r.throw(d))}catch(f){a(f)}}function u(d){d.done?o(d.value):i(d.value).then(l,c)}u((r=r.apply(e,t||[])).next())})}function ei(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(d){return c([u,d])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(d){u=[6,d],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Yt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Ap="Invariant Violation",Xx=Object.setPrototypeOf,K3=Xx===void 0?function(e,t){return e.__proto__=t,e}:Xx,C$=function(e){vr(t,e);function t(n){n===void 0&&(n=Ap);var r=e.call(this,typeof n=="number"?Ap+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=Ap,K3(r,t.prototype),r}return t}(Error);function zi(e,t){if(!e)throw new C$(t)}var A$=["debug","log","warn","error","silent"],X3=A$.indexOf("log");function Ac(e){return function(){if(A$.indexOf(e)>=X3){var t=console[e]||console.log;return t.apply(console,arguments)}}}(function(e){e.debug=Ac("debug"),e.log=Ac("log"),e.warn=Ac("warn"),e.error=Ac("error")})(zi||(zi={}));var iy="3.8.0";function Fn(e){try{return e()}catch{}}const Zx=Fn(function(){return globalThis})||Fn(function(){return window})||Fn(function(){return self})||Fn(function(){return global})||Fn(function(){return Fn.constructor("return this")()});var Jx=new Map;function th(e){var t=Jx.get(e)||1;return Jx.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function L$(e,t){t===void 0&&(t=0);var n=th("stringifyForDisplay");return JSON.stringify(e,function(r,i){return i===void 0?n:i},t).split(JSON.stringify(n)).join("<undefined>")}function Lc(e){return function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];e.apply(void 0,Yt([typeof t=="number"?oy(t):t],n,!1))}}var X=Object.assign(function(t,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];t||zi(t,oy(n,r))},{debug:Lc(zi.debug),log:Lc(zi.log),warn:Lc(zi.warn),error:Lc(zi.error)});function Rt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new C$(oy(e,t))}var e1=Symbol.for("ApolloErrorMessageHandler_"+iy);function oy(e,t){if(t===void 0&&(t=[]),!!e){var n=t.map(function(r){return typeof r=="string"?r:L$(r,2).slice(0,1e3)});return Zx[e1]&&Zx[e1](e,n)||"An error occured! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({version:iy,message:e,args:n})))}}function eu(e,t){if(!!!e)throw new Error(t)}function Z3(e){return typeof e=="object"&&e!==null}function J3(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}const e5=/\r\n|[\n\r]/g;function nh(e,t){let n=0,r=1;for(const i of e.body.matchAll(e5)){if(typeof i.index=="number"||J3(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function t5(e){return I$(e.source,nh(e.source,e.start))}function I$(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,l=t.line===1?n:0,c=t.column+l,u=`${e.name}:${a}:${c}
`,d=r.split(/\r\n|[\n\r]/g),f=d[i];if(f.length>120){const p=Math.floor(c/80),m=c%80,S=[];for(let w=0;w<f.length;w+=80)S.push(f.slice(w,w+80));return u+t1([[`${a} |`,S[0]],...S.slice(1,p+1).map(w=>["|",w]),["|","^".padStart(m)],["|",S[p+1]]])}return u+t1([[`${a-1} |`,d[i-1]],[`${a} |`,f],["|","^".padStart(c)],[`${a+1} |`,d[i+1]]])}function t1(e){const t=e.filter(([r,i])=>i!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,i])=>r.padStart(n)+(i?" "+i:"")).join(`
`)}function n5(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class ay extends Error{constructor(t,...n){var r,i,o;const{nodes:a,source:l,positions:c,path:u,originalError:d,extensions:f}=n5(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=d??void 0,this.nodes=n1(Array.isArray(a)?a:a?[a]:void 0);const p=n1((r=this.nodes)===null||r===void 0?void 0:r.map(S=>S.loc).filter(S=>S!=null));this.source=l??(p==null||(i=p[0])===null||i===void 0?void 0:i.source),this.positions=c??(p==null?void 0:p.map(S=>S.start)),this.locations=c&&l?c.map(S=>nh(l,S)):p==null?void 0:p.map(S=>nh(S.source,S.start));const m=Z3(d==null?void 0:d.extensions)?d==null?void 0:d.extensions:void 0;this.extensions=(o=f??m)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),d!=null&&d.stack?Object.defineProperty(this,"stack",{value:d.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,ay):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+t5(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+I$(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function n1(e){return e===void 0||e.length===0?void 0:e}function ft(e,t,n){return new ay(`Syntax Error: ${n}`,{source:e,positions:[t]})}class r5{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class j${constructor(t,n,r,i,o,a){this.kind=t,this.start=n,this.end=r,this.line=i,this.column=o,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const O$={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},i5=new Set(Object.keys(O$));function r1(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&i5.has(t)}var Ko;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Ko||(Ko={}));var rh;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(rh||(rh={}));var Q;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(Q||(Q={}));function ih(e){return e===9||e===32}function dl(e){return e>=48&&e<=57}function R$(e){return e>=97&&e<=122||e>=65&&e<=90}function D$(e){return R$(e)||e===95}function o5(e){return R$(e)||dl(e)||e===95}function a5(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let a=0;a<e.length;++a){var o;const l=e[a],c=s5(l);c!==l.length&&(r=(o=r)!==null&&o!==void 0?o:a,i=a,a!==0&&c<n&&(n=c))}return e.map((a,l)=>l===0?a:a.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,i+1)}function s5(e){let t=0;for(;t<e.length&&ih(e.charCodeAt(t));)++t;return t}function l5(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,o=r.length>1&&r.slice(1).every(m=>m.length===0||ih(m.charCodeAt(0))),a=n.endsWith('\\"""'),l=e.endsWith('"')&&!a,c=e.endsWith("\\"),u=l||c,d=!(t!=null&&t.minimize)&&(!i||e.length>70||u||o||a);let f="";const p=i&&ih(e.charCodeAt(0));return(d&&!p||o)&&(f+=`
`),f+=n,(d||u)&&(f+=`
`),'"""'+f+'"""'}var D;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(D||(D={}));class c5{constructor(t){const n=new j$(D.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==D.EOF)do if(t.next)t=t.next;else{const n=d5(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===D.COMMENT);return t}}function u5(e){return e===D.BANG||e===D.DOLLAR||e===D.AMP||e===D.PAREN_L||e===D.PAREN_R||e===D.SPREAD||e===D.COLON||e===D.EQUALS||e===D.AT||e===D.BRACKET_L||e===D.BRACKET_R||e===D.BRACE_L||e===D.PIPE||e===D.BRACE_R}function Ua(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Vd(e,t){return N$(e.charCodeAt(t))&&P$(e.charCodeAt(t+1))}function N$(e){return e>=55296&&e<=56319}function P$(e){return e>=56320&&e<=57343}function no(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return D.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ze(e,t,n,r,i){const o=e.line,a=1+n-e.lineStart;return new j$(t,n,r,o,a,i)}function d5(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const o=n.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return f5(e,i);case 33:return Ze(e,D.BANG,i,i+1);case 36:return Ze(e,D.DOLLAR,i,i+1);case 38:return Ze(e,D.AMP,i,i+1);case 40:return Ze(e,D.PAREN_L,i,i+1);case 41:return Ze(e,D.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return Ze(e,D.SPREAD,i,i+3);break;case 58:return Ze(e,D.COLON,i,i+1);case 61:return Ze(e,D.EQUALS,i,i+1);case 64:return Ze(e,D.AT,i,i+1);case 91:return Ze(e,D.BRACKET_L,i,i+1);case 93:return Ze(e,D.BRACKET_R,i,i+1);case 123:return Ze(e,D.BRACE_L,i,i+1);case 124:return Ze(e,D.PIPE,i,i+1);case 125:return Ze(e,D.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?v5(e,i):m5(e,i)}if(dl(o)||o===45)return p5(e,i,o);if(D$(o))return x5(e,i);throw ft(e.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Ua(o)||Vd(n,i)?`Unexpected character: ${no(e,i)}.`:`Invalid character: ${no(e,i)}.`)}return Ze(e,D.EOF,r,r)}function f5(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(o===10||o===13)break;if(Ua(o))++i;else if(Vd(n,i))i+=2;else break}return Ze(e,D.COMMENT,t,i,n.slice(t+1,i))}function p5(e,t,n){const r=e.source.body;let i=t,o=n,a=!1;if(o===45&&(o=r.charCodeAt(++i)),o===48){if(o=r.charCodeAt(++i),dl(o))throw ft(e.source,i,`Invalid number, unexpected digit after 0: ${no(e,i)}.`)}else i=Lp(e,i,o),o=r.charCodeAt(i);if(o===46&&(a=!0,o=r.charCodeAt(++i),i=Lp(e,i,o),o=r.charCodeAt(i)),(o===69||o===101)&&(a=!0,o=r.charCodeAt(++i),(o===43||o===45)&&(o=r.charCodeAt(++i)),i=Lp(e,i,o),o=r.charCodeAt(i)),o===46||D$(o))throw ft(e.source,i,`Invalid number, expected digit but got: ${no(e,i)}.`);return Ze(e,a?D.FLOAT:D.INT,t,i,r.slice(t,i))}function Lp(e,t,n){if(!dl(n))throw ft(e.source,t,`Invalid number, expected digit but got: ${no(e,t)}.`);const r=e.source.body;let i=t+1;for(;dl(r.charCodeAt(i));)++i;return i}function m5(e,t){const n=e.source.body,r=n.length;let i=t+1,o=i,a="";for(;i<r;){const l=n.charCodeAt(i);if(l===34)return a+=n.slice(o,i),Ze(e,D.STRING,t,i+1,a);if(l===92){a+=n.slice(o,i);const c=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?h5(e,i):g5(e,i):y5(e,i);a+=c.value,i+=c.size,o=i;continue}if(l===10||l===13)break;if(Ua(l))++i;else if(Vd(n,i))i+=2;else throw ft(e.source,i,`Invalid character within String: ${no(e,i)}.`)}throw ft(e.source,i,"Unterminated string.")}function h5(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const o=n.charCodeAt(t+i++);if(o===125){if(i<5||!Ua(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|_s(o),r<0)break}throw ft(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function g5(e,t){const n=e.source.body,r=i1(n,t+2);if(Ua(r))return{value:String.fromCodePoint(r),size:6};if(N$(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=i1(n,t+8);if(P$(i))return{value:String.fromCodePoint(r,i),size:12}}throw ft(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function i1(e,t){return _s(e.charCodeAt(t))<<12|_s(e.charCodeAt(t+1))<<8|_s(e.charCodeAt(t+2))<<4|_s(e.charCodeAt(t+3))}function _s(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function y5(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw ft(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function v5(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,o=t+3,a=o,l="";const c=[];for(;o<r;){const u=n.charCodeAt(o);if(u===34&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34){l+=n.slice(a,o),c.push(l);const d=Ze(e,D.BLOCK_STRING,t,o+3,a5(c).join(`
`));return e.line+=c.length-1,e.lineStart=i,d}if(u===92&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34&&n.charCodeAt(o+3)===34){l+=n.slice(a,o),a=o+1,o+=4;continue}if(u===10||u===13){l+=n.slice(a,o),c.push(l),u===13&&n.charCodeAt(o+1)===10?o+=2:++o,l="",a=o,i=o;continue}if(Ua(u))++o;else if(Vd(n,o))o+=2;else throw ft(e.source,o,`Invalid character within String: ${no(e,o)}.`)}throw ft(e.source,o,"Unterminated string.")}function x5(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(o5(o))++i;else break}return Ze(e,D.NAME,t,i,n.slice(t,i))}const S5=10,F$=2;function sy(e){return Gd(e,[])}function Gd(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return w5(e,t);default:return String(e)}}function w5(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(b5(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Gd(r,n)}else if(Array.isArray(e))return E5(e,n);return k5(e,n)}function b5(e){return typeof e.toJSON=="function"}function k5(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>F$?"["+$5(e)+"]":"{ "+n.map(([i,o])=>i+": "+Gd(o,t)).join(", ")+" }"}function E5(e,t){if(e.length===0)return"[]";if(t.length>F$)return"[Array]";const n=Math.min(S5,e.length),r=e.length-n,i=[];for(let o=0;o<n;++o)i.push(Gd(e[o],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function $5(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const T5=globalThis.process?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;const i=n.prototype[Symbol.toStringTag],o=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(i===o){const a=sy(t);throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class M${constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||eu(!1,`Body must be a string. Received: ${sy(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||eu(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||eu(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function _5(e){return T5(e,M$)}function C5(e,t){return new A5(e,t).parseDocument()}class A5{constructor(t,n={}){const r=_5(t)?t:new M$(t);this._lexer=new c5(r),this._options=n,this._tokenCounter=0}parseName(){const t=this.expectToken(D.NAME);return this.node(t,{kind:Q.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:Q.DOCUMENT,definitions:this.many(D.SOF,this.parseDefinition,D.EOF)})}parseDefinition(){if(this.peek(D.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===D.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw ft(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(D.BRACE_L))return this.node(t,{kind:Q.OPERATION_DEFINITION,operation:Ko.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(D.NAME)&&(r=this.parseName()),this.node(t,{kind:Q.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(D.NAME);switch(t.value){case"query":return Ko.QUERY;case"mutation":return Ko.MUTATION;case"subscription":return Ko.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(D.PAREN_L,this.parseVariableDefinition,D.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:Q.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(D.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(D.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(D.DOLLAR),this.node(t,{kind:Q.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:Q.SELECTION_SET,selections:this.many(D.BRACE_L,this.parseSelection,D.BRACE_R)})}parseSelection(){return this.peek(D.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let r,i;return this.expectOptionalToken(D.COLON)?(r=n,i=this.parseName()):i=n,this.node(t,{kind:Q.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(D.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(D.PAREN_L,n,D.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(n,{kind:Q.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(D.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(D.NAME)?this.node(t,{kind:Q.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:Q.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:Q.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:Q.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case D.BRACKET_L:return this.parseList(t);case D.BRACE_L:return this.parseObject(t);case D.INT:return this.advanceLexer(),this.node(n,{kind:Q.INT,value:n.value});case D.FLOAT:return this.advanceLexer(),this.node(n,{kind:Q.FLOAT,value:n.value});case D.STRING:case D.BLOCK_STRING:return this.parseStringLiteral();case D.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:Q.BOOLEAN,value:!0});case"false":return this.node(n,{kind:Q.BOOLEAN,value:!1});case"null":return this.node(n,{kind:Q.NULL});default:return this.node(n,{kind:Q.ENUM,value:n.value})}case D.DOLLAR:if(t)if(this.expectToken(D.DOLLAR),this._lexer.token.kind===D.NAME){const r=this._lexer.token.value;throw ft(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:Q.STRING,value:t.value,block:t.kind===D.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:Q.LIST,values:this.any(D.BRACKET_L,n,D.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:Q.OBJECT,fields:this.any(D.BRACE_L,n,D.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,r=this.parseName();return this.expectToken(D.COLON),this.node(n,{kind:Q.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(D.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(D.AT),this.node(n,{kind:Q.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(D.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(D.BRACKET_R),n=this.node(t,{kind:Q.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(D.BANG)?this.node(t,{kind:Q.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:Q.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(D.STRING)||this.peek(D.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);return this.node(t,{kind:Q.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(D.COLON);const r=this.parseNamedType();return this.node(t,{kind:Q.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:Q.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:Q.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(D.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseFieldDefinition,D.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(D.COLON);const o=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(t,{kind:Q.FIELD_DEFINITION,description:n,name:r,arguments:i,type:o,directives:a})}parseArgumentDefs(){return this.optionalMany(D.PAREN_L,this.parseInputValueDef,D.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(D.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(D.EQUALS)&&(o=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(t,{kind:Q.INPUT_VALUE_DEFINITION,description:n,name:r,type:i,defaultValue:o,directives:a})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:Q.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:a})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(t,{kind:Q.UNION_TYPE_DEFINITION,description:n,name:r,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(D.EQUALS)?this.delimitedMany(D.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(t,{kind:Q.ENUM_TYPE_DEFINITION,description:n,name:r,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(D.BRACE_L,this.parseEnumValueDefinition,D.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:Q.ENUM_VALUE_DEFINITION,description:n,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw ft(this._lexer.source,this._lexer.token.start,`${Ic(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(t,{kind:Q.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(D.BRACE_L,this.parseInputValueDef,D.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===D.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(D.BRACE_L,this.parseOperationTypeDefinition,D.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:Q.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:Q.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:Q.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:Q.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:Q.UNION_TYPE_EXTENSION,name:n,directives:r,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:Q.ENUM_TYPE_EXTENSION,name:n,directives:r,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:Q.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(D.AT);const r=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(t,{kind:Q.DIRECTIVE_DEFINITION,description:n,name:r,arguments:i,repeatable:o,locations:a})}parseDirectiveLocations(){return this.delimitedMany(D.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(rh,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new r5(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw ft(this._lexer.source,n.start,`Expected ${B$(t)}, found ${Ic(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===D.NAME&&n.value===t)this.advanceLexer();else throw ft(this._lexer.source,n.start,`Expected "${t}", found ${Ic(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===D.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return ft(this._lexer.source,n.start,`Unexpected ${Ic(n)}.`)}any(t,n,r){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(r);)i.push(n.call(this));return i}optionalMany(t,n,r){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(t,n,r){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(t,n){this.expectOptionalToken(t);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(t!==void 0&&n.kind!==D.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw ft(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function Ic(e){const t=e.value;return B$(e.kind)+(t!=null?` "${t}"`:"")}function B$(e){return u5(e)?`"${e}"`:e}function L5(e){return`"${e.replace(I5,j5)}"`}const I5=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function j5(e){return O5[e.charCodeAt(0)]}const O5=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ly=Object.freeze({});function Ur(e,t,n=O$){const r=new Map;for(const g of Object.values(Q))r.set(g,R5(t,g));let i,o=Array.isArray(e),a=[e],l=-1,c=[],u=e,d,f;const p=[],m=[];do{l++;const g=l===a.length,y=g&&c.length!==0;if(g){if(d=m.length===0?void 0:p[p.length-1],u=f,f=m.pop(),y)if(o){u=u.slice();let k=0;for(const[T,$]of c){const I=T-k;$===null?(u.splice(I,1),k++):u[I]=$}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(const[k,T]of c)u[k]=T}l=i.index,a=i.keys,c=i.edits,o=i.inArray,i=i.prev}else if(f){if(d=o?l:a[l],u=f[d],u==null)continue;p.push(d)}let v;if(!Array.isArray(u)){var S,w;r1(u)||eu(!1,`Invalid AST Node: ${sy(u)}.`);const k=g?(S=r.get(u.kind))===null||S===void 0?void 0:S.leave:(w=r.get(u.kind))===null||w===void 0?void 0:w.enter;if(v=k==null?void 0:k.call(t,u,d,f,p,m),v===ly)break;if(v===!1){if(!g){p.pop();continue}}else if(v!==void 0&&(c.push([d,v]),!g))if(r1(v))u=v;else{p.pop();continue}}if(v===void 0&&y&&c.push([d,u]),g)p.pop();else{var E;i={inArray:o,index:l,keys:a,edits:c,prev:i},o=Array.isArray(u),a=o?u:(E=n[u.kind])!==null&&E!==void 0?E:[],l=-1,c=[],f&&m.push(f),f=u}}while(i!==void 0);return c.length!==0?c[c.length-1][1]:e}function R5(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function D5(e){return Ur(e,P5)}const N5=80,P5={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>Y(e.definitions,`

`)},OperationDefinition:{leave(e){const t=ue("(",Y(e.variableDefinitions,", "),")"),n=Y([e.operation,Y([e.name,t]),Y(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+ue(" = ",n)+ue(" ",Y(r," "))},SelectionSet:{leave:({selections:e})=>On(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const o=ue("",e,": ")+t;let a=o+ue("(",Y(n,", "),")");return a.length>N5&&(a=o+ue(`(
`,tu(Y(n,`
`)),`
)`)),Y([a,Y(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+ue(" ",Y(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>Y(["...",ue("on ",e),Y(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i})=>`fragment ${e}${ue("(",Y(n,", "),")")} on ${t} ${ue("",Y(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?l5(e):L5(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+Y(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+Y(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+ue("(",Y(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>ue("",e,`
`)+Y(["schema",Y(t," "),On(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>ue("",e,`
`)+Y(["scalar",t,Y(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>ue("",e,`
`)+Y(["type",t,ue("implements ",Y(n," & ")),Y(r," "),On(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>ue("",e,`
`)+t+(o1(n)?ue(`(
`,tu(Y(n,`
`)),`
)`):ue("(",Y(n,", "),")"))+": "+r+ue(" ",Y(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>ue("",e,`
`)+Y([t+": "+n,ue("= ",r),Y(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>ue("",e,`
`)+Y(["interface",t,ue("implements ",Y(n," & ")),Y(r," "),On(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>ue("",e,`
`)+Y(["union",t,Y(n," "),ue("= ",Y(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>ue("",e,`
`)+Y(["enum",t,Y(n," "),On(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>ue("",e,`
`)+Y([t,Y(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>ue("",e,`
`)+Y(["input",t,Y(n," "),On(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:i})=>ue("",e,`
`)+"directive @"+t+(o1(n)?ue(`(
`,tu(Y(n,`
`)),`
)`):ue("(",Y(n,", "),")"))+(r?" repeatable":"")+" on "+Y(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>Y(["extend schema",Y(e," "),On(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>Y(["extend scalar",e,Y(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>Y(["extend type",e,ue("implements ",Y(t," & ")),Y(n," "),On(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>Y(["extend interface",e,ue("implements ",Y(t," & ")),Y(n," "),On(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>Y(["extend union",e,Y(t," "),ue("= ",Y(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>Y(["extend enum",e,Y(t," "),On(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>Y(["extend input",e,Y(t," "),On(n)]," ")}};function Y(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function On(e){return ue(`{
`,tu(Y(e,`
`)),`
}`)}function ue(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function tu(e){return ue("  ",e.replace(/\n/g,`
  `))}function o1(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function a1(e){return e.kind===Q.FIELD||e.kind===Q.FRAGMENT_SPREAD||e.kind===Q.INLINE_FRAGMENT}function Ll(e,t){var n=e.directives;return!n||!n.length?!0:B5(n).every(function(r){var i=r.directive,o=r.ifArgument,a=!1;return o.value.kind==="Variable"?(a=t&&t[o.value.name.value],X(a!==void 0,64,i.name.value)):a=o.value.value,i.name.value==="skip"?!a:a})}function fl(e,t,n){var r=new Set(e),i=r.size;return Ur(t,{Directive:function(o){if(r.delete(o.name.value)&&(!n||!r.size))return ly}}),n?!r.size:r.size<i}function F5(e){return e&&fl(["client","export"],e,!0)}function M5(e){var t=e.name.value;return t==="skip"||t==="include"}function B5(e){var t=[];return e&&e.length&&e.forEach(function(n){if(M5(n)){var r=n.arguments,i=n.name.value;X(r&&r.length===1,65,i);var o=r[0];X(o.name&&o.name.value==="if",66,i);var a=o.value;X(a&&(a.kind==="Variable"||a.kind==="BooleanValue"),67,i),t.push({directive:n,ifArgument:o})}}),t}const U5=()=>Object.create(null),{forEach:z5,slice:W5}=Array.prototype,{hasOwnProperty:V5}=Object.prototype;class Ii{constructor(t=!0,n=U5){this.weakness=t,this.makeData=n}lookup(...t){return this.lookupArray(t)}lookupArray(t){let n=this;return z5.call(t,r=>n=n.getChildTrie(r)),V5.call(n,"data")?n.data:n.data=this.makeData(W5.call(t))}peek(...t){return this.peekArray(t)}peekArray(t){let n=this;for(let r=0,i=t.length;n&&r<i;++r){const o=this.weakness&&s1(t[r])?n.weak:n.strong;n=o&&o.get(t[r])}return n&&n.data}getChildTrie(t){const n=this.weakness&&s1(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map);let r=n.get(t);return r||n.set(t,r=new Ii(this.weakness,this.makeData)),r}}function s1(e){switch(typeof e){case"object":if(e===null)break;case"function":return!0}return!1}var xr=typeof WeakMap=="function"&&Fn(function(){return navigator.product})!=="ReactNative",U$=typeof WeakSet=="function",cy=typeof Symbol=="function"&&typeof Symbol.for=="function",Hd=cy&&Symbol.asyncIterator,G5=typeof Fn(function(){return window.document.createElement})=="function",H5=Fn(function(){return navigator.userAgent.indexOf("jsdom")>=0})||!1,Q5=G5&&!H5;function Oe(e){return e!==null&&typeof e=="object"}function q5(e,t){var n=t,r=[];e.definitions.forEach(function(o){if(o.kind==="OperationDefinition")throw Rt(68,o.operation,o.name?" named '".concat(o.name.value,"'"):"");o.kind==="FragmentDefinition"&&r.push(o)}),typeof n>"u"&&(X(r.length===1,69,r.length),n=r[0].name.value);var i=L(L({},e),{definitions:Yt([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:n}}]}}],e.definitions,!0)});return i}function Qd(e){e===void 0&&(e=[]);var t={};return e.forEach(function(n){t[n.name.value]=n}),t}function qd(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":{var n=e.name.value;if(typeof t=="function")return t(n);var r=t&&t[n];return X(r,70,n),r||null}default:return null}}function la(e){return{__ref:String(e)}}function Se(e){return!!(e&&typeof e=="object"&&typeof e.__ref=="string")}function Y5(e){return Oe(e)&&e.kind==="Document"&&Array.isArray(e.definitions)}function K5(e){return e.kind==="StringValue"}function X5(e){return e.kind==="BooleanValue"}function Z5(e){return e.kind==="IntValue"}function J5(e){return e.kind==="FloatValue"}function eO(e){return e.kind==="Variable"}function tO(e){return e.kind==="ObjectValue"}function nO(e){return e.kind==="ListValue"}function rO(e){return e.kind==="EnumValue"}function iO(e){return e.kind==="NullValue"}function ka(e,t,n,r){if(Z5(n)||J5(n))e[t.value]=Number(n.value);else if(X5(n)||K5(n))e[t.value]=n.value;else if(tO(n)){var i={};n.fields.map(function(a){return ka(i,a.name,a.value,r)}),e[t.value]=i}else if(eO(n)){var o=(r||{})[n.name.value];e[t.value]=o}else if(nO(n))e[t.value]=n.values.map(function(a){var l={};return ka(l,t,a,r),l[t.value]});else if(rO(n))e[t.value]=n.value;else if(iO(n))e[t.value]=null;else throw Rt(79,t.value,n.kind)}function oO(e,t){var n=null;e.directives&&(n={},e.directives.forEach(function(i){n[i.name.value]={},i.arguments&&i.arguments.forEach(function(o){var a=o.name,l=o.value;return ka(n[i.name.value],a,l,t)})}));var r=null;return e.arguments&&e.arguments.length&&(r={},e.arguments.forEach(function(i){var o=i.name,a=i.value;return ka(r,o,a,t)})),uy(e.name.value,r,n)}var aO=["connection","include","skip","client","rest","export","nonreactive"],uy=Object.assign(function(e,t,n){if(t&&n&&n.connection&&n.connection.key)if(n.connection.filter&&n.connection.filter.length>0){var r=n.connection.filter?n.connection.filter:[];r.sort();var i={};return r.forEach(function(l){i[l]=t[l]}),"".concat(n.connection.key,"(").concat(gs(i),")")}else return n.connection.key;var o=e;if(t){var a=gs(t);o+="(".concat(a,")")}return n&&Object.keys(n).forEach(function(l){aO.indexOf(l)===-1&&(n[l]&&Object.keys(n[l]).length?o+="@".concat(l,"(").concat(gs(n[l]),")"):o+="@".concat(l))}),o},{setStringify:function(e){var t=gs;return gs=e,t}}),gs=function(t){return JSON.stringify(t,sO)};function sO(e,t){return Oe(t)&&!Array.isArray(t)&&(t=Object.keys(t).sort().reduce(function(n,r){return n[r]=t[r],n},{})),t}function Yd(e,t){if(e.arguments&&e.arguments.length){var n={};return e.arguments.forEach(function(r){var i=r.name,o=r.value;return ka(n,i,o,t)}),n}return null}function Si(e){return e.alias?e.alias.value:e.name.value}function oh(e,t,n){for(var r,i=0,o=t.selections;i<o.length;i++){var a=o[i];if(wi(a)){if(a.name.value==="__typename")return e[Si(a)]}else r?r.push(a):r=[a]}if(typeof e.__typename=="string")return e.__typename;if(r)for(var l=0,c=r;l<c.length;l++){var a=c[l],u=oh(e,qd(a,n).selectionSet,n);if(typeof u=="string")return u}}function wi(e){return e.kind==="Field"}function lO(e){return e.kind==="InlineFragment"}function Il(e){X(e&&e.kind==="Document",71);var t=e.definitions.filter(function(n){return n.kind!=="FragmentDefinition"}).map(function(n){if(n.kind!=="OperationDefinition")throw Rt(72,n.kind);return n});return X(t.length<=1,73,t.length),e}function jl(e){return Il(e),e.definitions.filter(function(t){return t.kind==="OperationDefinition"})[0]}function ah(e){return e.definitions.filter(function(t){return t.kind==="OperationDefinition"&&!!t.name}).map(function(t){return t.name.value})[0]||null}function Kd(e){return e.definitions.filter(function(t){return t.kind==="FragmentDefinition"})}function z$(e){var t=jl(e);return X(t&&t.operation==="query",74),t}function cO(e){X(e.kind==="Document",75),X(e.definitions.length<=1,76);var t=e.definitions[0];return X(t.kind==="FragmentDefinition",77),t}function Ol(e){Il(e);for(var t,n=0,r=e.definitions;n<r.length;n++){var i=r[n];if(i.kind==="OperationDefinition"){var o=i.operation;if(o==="query"||o==="mutation"||o==="subscription")return i}i.kind==="FragmentDefinition"&&!t&&(t=i)}if(t)return t;throw Rt(78)}function dy(e){var t=Object.create(null),n=e&&e.variableDefinitions;return n&&n.length&&n.forEach(function(r){r.defaultValue&&ka(t,r.variable.name,r.defaultValue)}),t}function uO(e){return e}var W$=function(){function e(t,n){n===void 0&&(n=Object.create(null)),this.resultCache=U$?new WeakSet:new Set,this.transform=t,n.getCacheKey&&(this.getCacheKey=n.getCacheKey),n.cache!==!1&&(this.stableCacheKeys=new Ii(xr,function(r){return{key:r}}))}return e.prototype.getCacheKey=function(t){return[t]},e.identity=function(){return new e(uO,{cache:!1})},e.split=function(t,n,r){return r===void 0&&(r=e.identity()),new e(function(i){var o=t(i)?n:r;return o.transformDocument(i)},{cache:!1})},e.prototype.transformDocument=function(t){if(this.resultCache.has(t))return t;var n=this.getStableCacheEntry(t);if(n&&n.value)return n.value;Il(t);var r=this.transform(t);return this.resultCache.add(r),n&&(n.value=r),r},e.prototype.concat=function(t){var n=this;return new e(function(r){return t.transformDocument(n.transformDocument(r))},{cache:!1})},e.prototype.getStableCacheEntry=function(t){if(this.stableCacheKeys){var n=this.getCacheKey(t);if(n)return X(Array.isArray(n),63),this.stableCacheKeys.lookupArray(n)}},e}(),jo=xr?new WeakMap:void 0,fy=function(e){var t;return t=jo==null?void 0:jo.get(e),t||(t=D5(e),jo==null||jo.set(e,t)),t},Ve=Array.isArray;function _t(e){return Array.isArray(e)&&e.length>0}var l1={kind:Q.FIELD,name:{kind:Q.NAME,value:"__typename"}};function V$(e,t){return!e||e.selectionSet.selections.every(function(n){return n.kind===Q.FRAGMENT_SPREAD&&V$(t[n.name.value],t)})}function dO(e){return V$(jl(e)||cO(e),Qd(Kd(e)))?null:e}function fO(e){var t=new Map,n=new Map;return e.forEach(function(r){r&&(r.name?t.set(r.name,r):r.test&&n.set(r.test,r))}),function(r){var i=t.get(r.name.value);return!i&&n.size&&n.forEach(function(o,a){a(r)&&(i=o)}),i}}function c1(e){var t=new Map;return function(r){r===void 0&&(r=e);var i=t.get(r);return i||t.set(r,i={variables:new Set,fragmentSpreads:new Set}),i}}function G$(e,t){Il(t);for(var n=c1(""),r=c1(""),i=function(g){for(var y=0,v=void 0;y<g.length&&(v=g[y]);++y)if(!Ve(v)){if(v.kind===Q.OPERATION_DEFINITION)return n(v.name&&v.name.value);if(v.kind===Q.FRAGMENT_DEFINITION)return r(v.name.value)}return globalThis.__DEV__!==!1&&X.error(80),null},o=0,a=t.definitions.length-1;a>=0;--a)t.definitions[a].kind===Q.OPERATION_DEFINITION&&++o;var l=fO(e),c=function(g){return _t(g)&&g.map(l).some(function(y){return y&&y.remove})},u=new Map,d=!1,f={enter:function(g){if(c(g.directives))return d=!0,null}},p=Ur(t,{Field:f,InlineFragment:f,VariableDefinition:{enter:function(){return!1}},Variable:{enter:function(g,y,v,k,T){var $=i(T);$&&$.variables.add(g.name.value)}},FragmentSpread:{enter:function(g,y,v,k,T){if(c(g.directives))return d=!0,null;var $=i(T);$&&$.fragmentSpreads.add(g.name.value)}},FragmentDefinition:{enter:function(g,y,v,k){u.set(JSON.stringify(k),g)},leave:function(g,y,v,k){var T=u.get(JSON.stringify(k));if(g===T)return g;if(o>0&&g.selectionSet.selections.every(function($){return $.kind===Q.FIELD&&$.name.value==="__typename"}))return r(g.name.value).removed=!0,d=!0,null}},Directive:{leave:function(g){if(l(g))return d=!0,null}}});if(!d)return t;var m=function(g){return g.transitiveVars||(g.transitiveVars=new Set(g.variables),g.removed||g.fragmentSpreads.forEach(function(y){m(r(y)).transitiveVars.forEach(function(v){g.transitiveVars.add(v)})})),g},S=new Set;p.definitions.forEach(function(g){g.kind===Q.OPERATION_DEFINITION?m(n(g.name&&g.name.value)).fragmentSpreads.forEach(function(y){S.add(y)}):g.kind===Q.FRAGMENT_DEFINITION&&o===0&&!r(g.name.value).removed&&S.add(g.name.value)}),S.forEach(function(g){m(r(g)).fragmentSpreads.forEach(function(y){S.add(y)})});var w=function(g){return!!(!S.has(g)||r(g).removed)},E={enter:function(g){if(w(g.name.value))return null}};return dO(Ur(p,{FragmentSpread:E,FragmentDefinition:E,OperationDefinition:{leave:function(g){if(g.variableDefinitions){var y=m(n(g.name&&g.name.value)).transitiveVars;if(y.size<g.variableDefinitions.length)return L(L({},g),{variableDefinitions:g.variableDefinitions.filter(function(v){return y.has(v.variable.name.value)})})}}}}))}var py=Object.assign(function(e){return Ur(e,{SelectionSet:{enter:function(t,n,r){if(!(r&&r.kind===Q.OPERATION_DEFINITION)){var i=t.selections;if(i){var o=i.some(function(l){return wi(l)&&(l.name.value==="__typename"||l.name.value.lastIndexOf("__",0)===0)});if(!o){var a=r;if(!(wi(a)&&a.directives&&a.directives.some(function(l){return l.name.value==="export"})))return L(L({},t),{selections:Yt(Yt([],i,!0),[l1],!1)})}}}}}})},{added:function(e){return e===l1}});function pO(e){var t=Ol(e),n=t.operation;if(n==="query")return e;var r=Ur(e,{OperationDefinition:{enter:function(i){return L(L({},i),{operation:"query"})}}});return r}function H$(e){Il(e);var t=G$([{test:function(n){return n.name.value==="client"},remove:!0}],e);return t}var mO=Object.prototype.hasOwnProperty;function u1(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return my(e)}function my(e){var t=e[0]||{},n=e.length;if(n>1)for(var r=new bi,i=1;i<n;++i)t=r.merge(t,e[i]);return t}var hO=function(e,t,n){return this.merge(e[n],t[n])},bi=function(){function e(t){t===void 0&&(t=hO),this.reconciler=t,this.isObject=Oe,this.pastCopies=new Set}return e.prototype.merge=function(t,n){for(var r=this,i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];return Oe(n)&&Oe(t)?(Object.keys(n).forEach(function(a){if(mO.call(t,a)){var l=t[a];if(n[a]!==l){var c=r.reconciler.apply(r,Yt([t,n,a],i,!1));c!==l&&(t=r.shallowCopyForMerge(t),t[a]=c)}}else t=r.shallowCopyForMerge(t),t[a]=n[a]}),t):n},e.prototype.shallowCopyForMerge=function(t){return Oe(t)&&(this.pastCopies.has(t)||(Array.isArray(t)?t=t.slice(0):t=L({__proto__:Object.getPrototypeOf(t)},t),this.pastCopies.add(t))),t},e}();function gO(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=yO(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yO(e,t){if(e){if(typeof e=="string")return d1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d1(e,t)}}function d1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function hy(e,t,n){return t&&f1(e.prototype,t),n&&f1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var gy=function(){return typeof Symbol=="function"},yy=function(e){return gy()&&!!Symbol[e]},vy=function(e){return yy(e)?Symbol[e]:"@@"+e};gy()&&!yy("observable")&&(Symbol.observable=Symbol("observable"));var vO=vy("iterator"),sh=vy("observable"),Q$=vy("species");function Mu(e,t){var n=e[t];if(n!=null){if(typeof n!="function")throw new TypeError(n+" is not a function");return n}}function ys(e){var t=e.constructor;return t!==void 0&&(t=t[Q$],t===null&&(t=void 0)),t!==void 0?t:ke}function xO(e){return e instanceof ke}function Ea(e){Ea.log?Ea.log(e):setTimeout(function(){throw e})}function nu(e){Promise.resolve().then(function(){try{e()}catch(t){Ea(t)}})}function q$(e){var t=e._cleanup;if(t!==void 0&&(e._cleanup=void 0,!!t))try{if(typeof t=="function")t();else{var n=Mu(t,"unsubscribe");n&&n.call(t)}}catch(r){Ea(r)}}function lh(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function SO(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var n=0;n<t.length&&(Y$(e,t[n].type,t[n].value),e._state!=="closed");++n);}}function Y$(e,t,n){e._state="running";var r=e._observer;try{var i=Mu(r,t);switch(t){case"next":i&&i.call(r,n);break;case"error":if(lh(e),i)i.call(r,n);else throw n;break;case"complete":lh(e),i&&i.call(r);break}}catch(o){Ea(o)}e._state==="closed"?q$(e):e._state==="running"&&(e._state="ready")}function Ip(e,t,n){if(e._state!=="closed"){if(e._state==="buffering"){e._queue.push({type:t,value:n});return}if(e._state!=="ready"){e._state="buffering",e._queue=[{type:t,value:n}],nu(function(){return SO(e)});return}Y$(e,t,n)}}var wO=function(){function e(n,r){this._cleanup=void 0,this._observer=n,this._queue=void 0,this._state="initializing";var i=new bO(this);try{this._cleanup=r.call(void 0,i)}catch(o){i.error(o)}this._state==="initializing"&&(this._state="ready")}var t=e.prototype;return t.unsubscribe=function(){this._state!=="closed"&&(lh(this),q$(this))},hy(e,[{key:"closed",get:function(){return this._state==="closed"}}]),e}(),bO=function(){function e(n){this._subscription=n}var t=e.prototype;return t.next=function(r){Ip(this._subscription,"next",r)},t.error=function(r){Ip(this._subscription,"error",r)},t.complete=function(){Ip(this._subscription,"complete")},hy(e,[{key:"closed",get:function(){return this._subscription._state==="closed"}}]),e}(),ke=function(){function e(n){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if(typeof n!="function")throw new TypeError("Observable initializer must be a function");this._subscriber=n}var t=e.prototype;return t.subscribe=function(r){return(typeof r!="object"||r===null)&&(r={next:r,error:arguments[1],complete:arguments[2]}),new wO(r,this._subscriber)},t.forEach=function(r){var i=this;return new Promise(function(o,a){if(typeof r!="function"){a(new TypeError(r+" is not a function"));return}function l(){c.unsubscribe(),o()}var c=i.subscribe({next:function(u){try{r(u,l)}catch(d){a(d),c.unsubscribe()}},error:a,complete:o})})},t.map=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var o=ys(this);return new o(function(a){return i.subscribe({next:function(l){try{l=r(l)}catch(c){return a.error(c)}a.next(l)},error:function(l){a.error(l)},complete:function(){a.complete()}})})},t.filter=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var o=ys(this);return new o(function(a){return i.subscribe({next:function(l){try{if(!r(l))return}catch(c){return a.error(c)}a.next(l)},error:function(l){a.error(l)},complete:function(){a.complete()}})})},t.reduce=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var o=ys(this),a=arguments.length>1,l=!1,c=arguments[1],u=c;return new o(function(d){return i.subscribe({next:function(f){var p=!l;if(l=!0,!p||a)try{u=r(u,f)}catch(m){return d.error(m)}else u=f},error:function(f){d.error(f)},complete:function(){if(!l&&!a)return d.error(new TypeError("Cannot reduce an empty sequence"));d.next(u),d.complete()}})})},t.concat=function(){for(var r=this,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var l=ys(this);return new l(function(c){var u,d=0;function f(p){u=p.subscribe({next:function(m){c.next(m)},error:function(m){c.error(m)},complete:function(){d===o.length?(u=void 0,c.complete()):f(l.from(o[d++]))}})}return f(r),function(){u&&(u.unsubscribe(),u=void 0)}})},t.flatMap=function(r){var i=this;if(typeof r!="function")throw new TypeError(r+" is not a function");var o=ys(this);return new o(function(a){var l=[],c=i.subscribe({next:function(d){if(r)try{d=r(d)}catch(p){return a.error(p)}var f=o.from(d).subscribe({next:function(p){a.next(p)},error:function(p){a.error(p)},complete:function(){var p=l.indexOf(f);p>=0&&l.splice(p,1),u()}});l.push(f)},error:function(d){a.error(d)},complete:function(){u()}});function u(){c.closed&&l.length===0&&a.complete()}return function(){l.forEach(function(d){return d.unsubscribe()}),c.unsubscribe()}})},t[sh]=function(){return this},e.from=function(r){var i=typeof this=="function"?this:e;if(r==null)throw new TypeError(r+" is not an object");var o=Mu(r,sh);if(o){var a=o.call(r);if(Object(a)!==a)throw new TypeError(a+" is not an object");return xO(a)&&a.constructor===i?a:new i(function(l){return a.subscribe(l)})}if(yy("iterator")&&(o=Mu(r,vO),o))return new i(function(l){nu(function(){if(!l.closed){for(var c=gO(o.call(r)),u;!(u=c()).done;){var d=u.value;if(l.next(d),l.closed)return}l.complete()}})});if(Array.isArray(r))return new i(function(l){nu(function(){if(!l.closed){for(var c=0;c<r.length;++c)if(l.next(r[c]),l.closed)return;l.complete()}})});throw new TypeError(r+" is not observable")},e.of=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=typeof this=="function"?this:e;return new a(function(l){nu(function(){if(!l.closed){for(var c=0;c<i.length;++c)if(l.next(i[c]),l.closed)return;l.complete()}})})},hy(e,null,[{key:Q$,get:function(){return this}}]),e}();gy()&&Object.defineProperty(ke,Symbol("extensions"),{value:{symbol:sh,hostReportError:Ea},configurable:!0});function kO(e){var t,n=e.Symbol;if(typeof n=="function")if(n.observable)t=n.observable;else{typeof n.for=="function"?t=n.for("https://github.com/benlesh/symbol-observable"):t=n("https://github.com/benlesh/symbol-observable");try{n.observable=t}catch{}}else t="@@observable";return t}var Ro;typeof self<"u"?Ro=self:typeof window<"u"?Ro=window:typeof global<"u"?Ro=global:typeof module<"u"?Ro=module:Ro=Function("return this")();kO(Ro);var p1=ke.prototype,m1="@@observable";p1[m1]||(p1[m1]=function(){return this});var EO=Object.prototype.toString;function K$(e){return ch(e)}function ch(e,t){switch(EO.call(e)){case"[object Array]":{if(t=t||new Map,t.has(e))return t.get(e);var n=e.slice(0);return t.set(e,n),n.forEach(function(i,o){n[o]=ch(i,t)}),n}case"[object Object]":{if(t=t||new Map,t.has(e))return t.get(e);var r=Object.create(Object.getPrototypeOf(e));return t.set(e,r),Object.keys(e).forEach(function(i){r[i]=ch(e[i],t)}),r}default:return e}}function $O(e){var t=new Set([e]);return t.forEach(function(n){Oe(n)&&TO(n)===n&&Object.getOwnPropertyNames(n).forEach(function(r){Oe(n[r])&&t.add(n[r])})}),e}function TO(e){if(globalThis.__DEV__!==!1&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}function pl(e){return globalThis.__DEV__!==!1&&$O(e),e}function Fs(e,t,n){var r=[];e.forEach(function(i){return i[t]&&r.push(i)}),r.forEach(function(i){return i[t](n)})}function jp(e,t,n){return new ke(function(r){var i=r.next,o=r.error,a=r.complete,l=0,c=!1,u={then:function(m){return new Promise(function(S){return S(m())})}};function d(m,S){return m?function(w){++l;var E=function(){return m(w)};u=u.then(E,E).then(function(g){--l,i&&i.call(r,g),c&&f.complete()},function(g){throw--l,g}).catch(function(g){o&&o.call(r,g)})}:function(w){return S&&S.call(r,w)}}var f={next:d(t,i),error:d(n,o),complete:function(){c=!0,l||a&&a.call(r)}},p=e.subscribe(f);return function(){return p.unsubscribe()}})}function X$(e){function t(n){Object.defineProperty(e,n,{value:ke})}return cy&&Symbol.species&&t(Symbol.species),t("@@species"),e}function h1(e){return e&&typeof e.then=="function"}var Do=function(e){vr(t,e);function t(n){var r=e.call(this,function(i){return r.addObserver(i),function(){return r.removeObserver(i)}})||this;return r.observers=new Set,r.promise=new Promise(function(i,o){r.resolve=i,r.reject=o}),r.handlers={next:function(i){r.sub!==null&&(r.latest=["next",i],r.notify("next",i),Fs(r.observers,"next",i))},error:function(i){var o=r.sub;o!==null&&(o&&setTimeout(function(){return o.unsubscribe()}),r.sub=null,r.latest=["error",i],r.reject(i),r.notify("error",i),Fs(r.observers,"error",i))},complete:function(){var i=r,o=i.sub,a=i.sources,l=a===void 0?[]:a;if(o!==null){var c=l.shift();c?h1(c)?c.then(function(u){return r.sub=u.subscribe(r.handlers)}):r.sub=c.subscribe(r.handlers):(o&&setTimeout(function(){return o.unsubscribe()}),r.sub=null,r.latest&&r.latest[0]==="next"?r.resolve(r.latest[1]):r.resolve(),r.notify("complete"),Fs(r.observers,"complete"))}}},r.nextResultListeners=new Set,r.cancel=function(i){r.reject(i),r.sources=[],r.handlers.complete()},r.promise.catch(function(i){}),typeof n=="function"&&(n=[new ke(n)]),h1(n)?n.then(function(i){return r.start(i)},r.handlers.error):r.start(n),r}return t.prototype.start=function(n){this.sub===void 0&&(this.sources=Array.from(n),this.handlers.complete())},t.prototype.deliverLastMessage=function(n){if(this.latest){var r=this.latest[0],i=n[r];i&&i.call(n,this.latest[1]),this.sub===null&&r==="next"&&n.complete&&n.complete()}},t.prototype.addObserver=function(n){this.observers.has(n)||(this.deliverLastMessage(n),this.observers.add(n))},t.prototype.removeObserver=function(n){this.observers.delete(n)&&this.observers.size<1&&this.handlers.complete()},t.prototype.notify=function(n,r){var i=this.nextResultListeners;i.size&&(this.nextResultListeners=new Set,i.forEach(function(o){return o(n,r)}))},t.prototype.beforeNext=function(n){var r=!1;this.nextResultListeners.add(function(i,o){r||(r=!0,n(i,o))})},t}(ke);X$(Do);function ca(e){return"incremental"in e}function _O(e){return"hasNext"in e&&"data"in e}function CO(e){return ca(e)||_O(e)}function AO(e){return Oe(e)&&"payload"in e}function Z$(e,t){var n=e,r=new bi;return ca(t)&&_t(t.incremental)&&t.incremental.forEach(function(i){for(var o=i.data,a=i.path,l=a.length-1;l>=0;--l){var c=a[l],u=!isNaN(+c),d=u?[]:{};d[c]=o,o=d}n=r.merge(n,o)}),n}function ru(e){var t=uh(e);return _t(t)}function uh(e){var t=_t(e.errors)?e.errors.slice(0):[];return ca(e)&&_t(e.incremental)&&e.incremental.forEach(function(n){n.errors&&t.push.apply(t,n.errors)}),t}function ki(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object.create(null);return e.forEach(function(r){r&&Object.keys(r).forEach(function(i){var o=r[i];o!==void 0&&(n[i]=o)})}),n}function iu(e,t){return ki(e,t,t.variables&&{variables:ki(L(L({},e&&e.variables),t.variables))})}function LO(e){return!!e.body}function IO(e){return!!e.getReader}function jO(e){return!!(Hd&&e[Symbol.asyncIterator])}function OO(e){return!!e.stream}function RO(e){return!!e.arrayBuffer}function DO(e){return!!e.pipe}function Op(e){return new ke(function(t){t.error(e)})}var dh=function(e,t,n){var r=new Error(n);throw r.name="ServerError",r.response=e,r.statusCode=e.status,r.result=t,r};function NO(e){for(var t=["query","operationName","variables","extensions","context"],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];if(t.indexOf(i)<0)throw Rt(41,i)}return e}function PO(e,t){var n=L({},e),r=function(o){typeof o=="function"?n=L(L({},n),o(n)):n=L(L({},n),o)},i=function(){return L({},n)};return Object.defineProperty(t,"setContext",{enumerable:!1,value:r}),Object.defineProperty(t,"getContext",{enumerable:!1,value:i}),t}function FO(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName=typeof t.query!="string"?ah(t.query)||void 0:""),t}function MO(e,t){var n=L({},e),r=new Set(Object.keys(e));return Ur(t,{Variable:function(i,o,a){a&&a.kind!=="VariableDefinition"&&r.delete(i.name.value)}}),r.forEach(function(i){delete n[i]}),n}function g1(e,t){return t?t(e):ke.of()}function vs(e){return typeof e=="function"?new ji(e):e}function jc(e){return e.request.length<=1}var ji=function(){function e(t){t&&(this.request=t)}return e.empty=function(){return new e(function(){return ke.of()})},e.from=function(t){return t.length===0?e.empty():t.map(vs).reduce(function(n,r){return n.concat(r)})},e.split=function(t,n,r){var i=vs(n),o=vs(r||new e(g1));return jc(i)&&jc(o)?new e(function(a){return t(a)?i.request(a)||ke.of():o.request(a)||ke.of()}):new e(function(a,l){return t(a)?i.request(a,l)||ke.of():o.request(a,l)||ke.of()})},e.execute=function(t,n){return t.request(PO(n.context,FO(NO(n))))||ke.of()},e.concat=function(t,n){var r=vs(t);if(jc(r))return globalThis.__DEV__!==!1&&X.warn(33,r),r;var i=vs(n);return jc(i)?new e(function(o){return r.request(o,function(a){return i.request(a)||ke.of()})||ke.of()}):new e(function(o,a){return r.request(o,function(l){return i.request(l,a)||ke.of()})||ke.of()})},e.prototype.split=function(t,n,r){return this.concat(e.split(t,n,r||new e(g1)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(t,n){throw Rt(34)},e.prototype.onError=function(t,n){if(n&&n.error)return n.error(t),!1;throw t},e.prototype.setOnError=function(t){return this.onError=t,this},e}(),BO=ji.from,fh=ji.execute;function UO(e){var t,n=e[Symbol.asyncIterator]();return t={next:function(){return n.next()}},t[Symbol.asyncIterator]=function(){return this},t}function zO(e){var t=null,n=null,r=!1,i=[],o=[];function a(f){if(!n){if(o.length){var p=o.shift();if(Array.isArray(p)&&p[0])return p[0]({value:f,done:!1})}i.push(f)}}function l(f){n=f;var p=o.slice();p.forEach(function(m){m[1](f)}),!t||t()}function c(){r=!0;var f=o.slice();f.forEach(function(p){p[0]({value:void 0,done:!0})}),!t||t()}t=function(){t=null,e.removeListener("data",a),e.removeListener("error",l),e.removeListener("end",c),e.removeListener("finish",c),e.removeListener("close",c)},e.on("data",a),e.on("error",l),e.on("end",c),e.on("finish",c),e.on("close",c);function u(){return new Promise(function(f,p){if(n)return p(n);if(i.length)return f({value:i.shift(),done:!1});if(r)return f({value:void 0,done:!0});o.push([f,p])})}var d={next:function(){return u()}};return Hd&&(d[Symbol.asyncIterator]=function(){return this}),d}function WO(e){var t=!1,n={next:function(){return t?Promise.resolve({value:void 0,done:!0}):(t=!0,new Promise(function(r,i){e.then(function(o){r({value:o,done:!1})}).catch(i)}))}};return Hd&&(n[Symbol.asyncIterator]=function(){return this}),n}function y1(e){var t={next:function(){return e.read()}};return Hd&&(t[Symbol.asyncIterator]=function(){return this}),t}function VO(e){var t=e;if(LO(e)&&(t=e.body),jO(t))return UO(t);if(IO(t))return y1(t.getReader());if(OO(t))return y1(t.stream().getReader());if(RO(t))return WO(t.arrayBuffer());if(DO(t))return zO(t);throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")}var xy=Symbol();function GO(e){return e.extensions?Array.isArray(e.extensions[xy]):!1}function HO(e){return e.hasOwnProperty("graphQLErrors")}var QO=function(e){var t=Yt(Yt(Yt([],e.graphQLErrors,!0),e.clientErrors,!0),e.protocolErrors,!0);return e.networkError&&t.push(e.networkError),t.map(function(n){return Oe(n)&&n.message||"Error message not found."}).join(`
`)},ti=function(e){vr(t,e);function t(n){var r=n.graphQLErrors,i=n.protocolErrors,o=n.clientErrors,a=n.networkError,l=n.errorMessage,c=n.extraInfo,u=e.call(this,l)||this;return u.name="ApolloError",u.graphQLErrors=r||[],u.protocolErrors=i||[],u.clientErrors=o||[],u.networkError=a||null,u.message=l||QO(u),u.extraInfo=c,u.__proto__=t.prototype,u}return t}(Error),v1=Object.prototype.hasOwnProperty;function qO(e,t){var n;return Jr(this,void 0,void 0,function(){var r,i,o,a,l,c,u,d,f,p,m,S,w,E,g,y,v,k,T,$,I,j,N;return ei(this,function(R){switch(R.label){case 0:if(TextDecoder===void 0)throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");r=new TextDecoder("utf-8"),i=(n=e.headers)===null||n===void 0?void 0:n.get("content-type"),o="boundary=",a=i!=null&&i.includes(o)?i==null?void 0:i.substring((i==null?void 0:i.indexOf(o))+o.length).replace(/['"]/g,"").replace(/\;(.*)/gm,"").trim():"-",l=`\r
--`.concat(a),c="",u=VO(e),d=!0,R.label=1;case 1:return d?[4,u.next()]:[3,3];case 2:for(f=R.sent(),p=f.value,m=f.done,S=typeof p=="string"?p:r.decode(p),w=c.length-l.length+1,d=!m,c+=S,E=c.indexOf(l,w);E>-1;){if(g=void 0,j=[c.slice(0,E),c.slice(E+l.length)],g=j[0],c=j[1],y=g.indexOf(`\r
\r
`),v=YO(g.slice(0,y)),k=v["content-type"],k&&k.toLowerCase().indexOf("application/json")===-1)throw new Error("Unsupported patch content type: application/json is required.");if(T=g.slice(y),T){if($=J$(e,T),Object.keys($).length>1||"data"in $||"incremental"in $||"errors"in $||"payload"in $)AO($)?(I={},"payload"in $&&(I=L({},$.payload)),"errors"in $&&(I=L(L({},I),{extensions:L(L({},"extensions"in I?I.extensions:null),(N={},N[xy]=$.errors,N))})),t(I)):t($);else if(Object.keys($).length===1&&"hasNext"in $&&!$.hasNext)return[2]}E=c.indexOf(l)}return[3,1];case 3:return[2]}})})}function YO(e){var t={};return e.split(`
`).forEach(function(n){var r=n.indexOf(":");if(r>-1){var i=n.slice(0,r).trim().toLowerCase(),o=n.slice(r+1).trim();t[i]=o}}),t}function J$(e,t){if(e.status>=300){var n=function(){try{return JSON.parse(t)}catch{return t}};dh(e,n(),"Response not successful: Received status code ".concat(e.status))}try{return JSON.parse(t)}catch(i){var r=i;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}}function KO(e,t){e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e)}function XO(e){return function(t){return t.text().then(function(n){return J$(t,n)}).then(function(n){return t.status>=300&&dh(t,n,"Response not successful: Received status code ".concat(t.status)),!Array.isArray(n)&&!v1.call(n,"data")&&!v1.call(n,"errors")&&dh(t,n,"Server response was missing for query '".concat(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName,"'.")),n})}}var ph=function(e,t){var n;try{n=JSON.stringify(e)}catch(i){var r=Rt(37,t,i.message);throw r.parseError=i,r}return n},ZO={includeQuery:!0,includeExtensions:!1,preserveHeaderCase:!1},JO={accept:"*/*","content-type":"application/json"},eR={method:"POST"},tR={http:ZO,headers:JO,options:eR},nR=function(e,t){return t(e)};function rR(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={},o={};n.forEach(function(f){i=L(L(L({},i),f.options),{headers:L(L({},i.headers),f.headers)}),f.credentials&&(i.credentials=f.credentials),o=L(L({},o),f.http)}),i.headers&&(i.headers=iR(i.headers,o.preserveHeaderCase));var a=e.operationName,l=e.extensions,c=e.variables,u=e.query,d={operationName:a,variables:c};return o.includeExtensions&&(d.extensions=l),o.includeQuery&&(d.query=t(u,fy)),{options:i,body:d}}function iR(e,t){if(!t){var n=Object.create(null);return Object.keys(Object(e)).forEach(function(o){n[o.toLowerCase()]=e[o]}),n}var r=Object.create(null);Object.keys(Object(e)).forEach(function(o){r[o.toLowerCase()]={originalName:o,value:e[o]}});var i=Object.create(null);return Object.keys(r).forEach(function(o){i[r[o].originalName]=r[o].value}),i}var oR=function(e){if(!e&&typeof fetch>"u")throw Rt(35)},aR=function(e,t){var n=e.getContext(),r=n.uri;return r||(typeof t=="function"?t(e):t||"/graphql")};function sR(e,t){var n=[],r=function(f,p){n.push("".concat(f,"=").concat(encodeURIComponent(p)))};if("query"in t&&r("query",t.query),t.operationName&&r("operationName",t.operationName),t.variables){var i=void 0;try{i=ph(t.variables,"Variables map")}catch(f){return{parseError:f}}r("variables",i)}if(t.extensions){var o=void 0;try{o=ph(t.extensions,"Extensions map")}catch(f){return{parseError:f}}r("extensions",o)}var a="",l=e,c=e.indexOf("#");c!==-1&&(a=e.substr(c),l=e.substr(0,c));var u=l.indexOf("?")===-1?"?":"&",d=l+u+n.join("&")+a;return{newURI:d}}var x1=Fn(function(){return fetch}),eT=function(e){e===void 0&&(e={});var t=e.uri,n=t===void 0?"/graphql":t,r=e.fetch,i=e.print,o=i===void 0?nR:i,a=e.includeExtensions,l=e.preserveHeaderCase,c=e.useGETForQueries,u=e.includeUnusedVariables,d=u===void 0?!1:u,f=ur(e,["uri","fetch","print","includeExtensions","preserveHeaderCase","useGETForQueries","includeUnusedVariables"]);globalThis.__DEV__!==!1&&oR(r||x1);var p={http:{includeExtensions:a,preserveHeaderCase:l},options:f.fetchOptions,credentials:f.credentials,headers:f.headers};return new ji(function(m){var S=aR(m,n),w=m.getContext(),E={};if(w.clientAwareness){var g=w.clientAwareness,y=g.name,v=g.version;y&&(E["apollographql-client-name"]=y),v&&(E["apollographql-client-version"]=v)}var k=L(L({},E),w.headers),T={http:w.http,options:w.fetchOptions,credentials:w.credentials,headers:k};if(fl(["client"],m.query)){var $=H$(m.query);if(!$)return Op(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));m.query=$}var I=rR(m,o,tR,p,T),j=I.options,N=I.body;N.variables&&!d&&(N.variables=MO(N.variables,m.query));var R;!j.signal&&typeof AbortController<"u"&&(R=new AbortController,j.signal=R.signal);var K=function(W){return W.kind==="OperationDefinition"&&W.operation==="mutation"},ce=function(W){return W.kind==="OperationDefinition"&&W.operation==="subscription"},le=ce(Ol(m.query)),Ye=fl(["defer"],m.query);if(c&&!m.query.definitions.some(K)&&(j.method="GET"),Ye||le){j.headers=j.headers||{};var Ke="multipart/mixed;";le&&Ye&&globalThis.__DEV__!==!1&&X.warn(36),le?Ke+="boundary=graphql;subscriptionSpec=1.0,application/json":Ye&&(Ke+="deferSpec=20220824,application/json"),j.headers.accept=Ke}if(j.method==="GET"){var Xe=sR(S,N),Ie=Xe.newURI,F=Xe.parseError;if(F)return Op(F);S=Ie}else try{j.body=ph(N,"Payload")}catch(W){return Op(W)}return new ke(function(W){var ee=r||Fn(function(){return fetch})||x1,ve=W.next.bind(W);return ee(S,j).then(function(ge){var Lt;m.setContext({response:ge});var lt=(Lt=ge.headers)===null||Lt===void 0?void 0:Lt.get("content-type");return lt!==null&&/^multipart\/mixed/i.test(lt)?qO(ge,ve):XO(m)(ge).then(ve)}).then(function(){R=void 0,W.complete()}).catch(function(ge){R=void 0,KO(ge,W)}),function(){R&&R.abort()}})})},lR=function(e){vr(t,e);function t(n){n===void 0&&(n={});var r=e.call(this,eT(n).request)||this;return r.options=n,r}return t}(ji);const{toString:S1,hasOwnProperty:cR}=Object.prototype,w1=Function.prototype.toString,mh=new Map;function Ae(e,t){try{return hh(e,t)}finally{mh.clear()}}function hh(e,t){if(e===t)return!0;const n=S1.call(e),r=S1.call(t);if(n!==r)return!1;switch(n){case"[object Array]":if(e.length!==t.length)return!1;case"[object Object]":{if(k1(e,t))return!0;const i=b1(e),o=b1(t),a=i.length;if(a!==o.length)return!1;for(let l=0;l<a;++l)if(!cR.call(t,i[l]))return!1;for(let l=0;l<a;++l){const c=i[l];if(!hh(e[c],t[c]))return!1}return!0}case"[object Error]":return e.name===t.name&&e.message===t.message;case"[object Number]":if(e!==e)return t!==t;case"[object Boolean]":case"[object Date]":return+e==+t;case"[object RegExp]":case"[object String]":return e==`${t}`;case"[object Map]":case"[object Set]":{if(e.size!==t.size)return!1;if(k1(e,t))return!0;const i=e.entries(),o=n==="[object Map]";for(;;){const a=i.next();if(a.done)break;const[l,c]=a.value;if(!t.has(l)||o&&!hh(c,t.get(l)))return!1}return!0}case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":e=new Uint8Array(e),t=new Uint8Array(t);case"[object DataView]":{let i=e.byteLength;if(i===t.byteLength)for(;i--&&e[i]===t[i];);return i===-1}case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":{const i=w1.call(e);return i!==w1.call(t)?!1:!fR(i,dR)}}return!1}function b1(e){return Object.keys(e).filter(uR,e)}function uR(e){return this[e]!==void 0}const dR="{ [native code] }";function fR(e,t){const n=e.length-t.length;return n>=0&&e.indexOf(t,n)===n}function k1(e,t){let n=mh.get(e);if(n){if(n.has(t))return!0}else mh.set(e,n=new Set);return n.add(t),!1}function pR(){}class mR{constructor(t=1/0,n=pR){this.max=t,this.dispose=n,this.map=new Map,this.newest=null,this.oldest=null}has(t){return this.map.has(t)}get(t){const n=this.getNode(t);return n&&n.value}getNode(t){const n=this.map.get(t);if(n&&n!==this.newest){const{older:r,newer:i}=n;i&&(i.older=r),r&&(r.newer=i),n.older=this.newest,n.older.newer=n,n.newer=null,this.newest=n,n===this.oldest&&(this.oldest=i)}return n}set(t,n){let r=this.getNode(t);return r?r.value=n:(r={key:t,value:n,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(t,r),r.value)}clean(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)}delete(t){const n=this.map.get(t);return n?(n===this.newest&&(this.newest=n.older),n===this.oldest&&(this.oldest=n.newer),n.newer&&(n.newer.older=n.older),n.older&&(n.older.newer=n.newer),this.map.delete(t),this.dispose(n.value,t),!0):!1}}let gt=null;const E1={};let hR=1;const gR=()=>class{constructor(){this.id=["slot",hR++,Date.now(),Math.random().toString(36).slice(2)].join(":")}hasValue(){for(let t=gt;t;t=t.parent)if(this.id in t.slots){const n=t.slots[this.id];if(n===E1)break;return t!==gt&&(gt.slots[this.id]=n),!0}return gt&&(gt.slots[this.id]=E1),!1}getValue(){if(this.hasValue())return gt.slots[this.id]}withValue(t,n,r,i){const o={__proto__:null,[this.id]:t},a=gt;gt={parent:a,slots:o};try{return n.apply(i,r)}finally{gt=a}}static bind(t){const n=gt;return function(){const r=gt;try{return gt=n,t.apply(this,arguments)}finally{gt=r}}}static noContext(t,n,r){if(gt){const i=gt;try{return gt=null,t.apply(r,n)}finally{gt=i}}else return t.apply(r,n)}};function $1(e){try{return e()}catch{}}const Rp="@wry/context:Slot",yR=$1(()=>globalThis)||$1(()=>global)||Object.create(null),T1=yR,tT=T1[Rp]||Array[Rp]||function(e){try{Object.defineProperty(T1,Rp,{value:e,enumerable:!1,writable:!1,configurable:!0})}finally{return e}}(gR()),Xd=new tT,{hasOwnProperty:vR}=Object.prototype,Sy=Array.from||function(e){const t=[];return e.forEach(n=>t.push(n)),t};function Bu(e){const{unsubscribe:t}=e;typeof t=="function"&&(e.unsubscribe=void 0,t())}const ml=[],xR=100;function $a(e,t){if(!e)throw new Error(t||"assertion failure")}function SR(e,t){const n=e.length;return n>0&&n===t.length&&e[n-1]===t[n-1]}function nT(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}function wR(e){return e.slice(0)}class Zd{constructor(t){this.fn=t,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++Zd.count}peek(){if(this.value.length===1&&!Ei(this))return _1(this),this.value[0]}recompute(t){return $a(!this.recomputing,"already recomputing"),_1(this),Ei(this)?bR(this,t):nT(this.value)}setDirty(){this.dirty||(this.dirty=!0,this.value.length=0,rT(this),Bu(this))}dispose(){this.setDirty(),lT(this),wy(this,(t,n)=>{t.setDirty(),cT(t,this)})}forget(){this.dispose()}dependOn(t){t.add(this),this.deps||(this.deps=ml.pop()||new Set),this.deps.add(t)}forgetDeps(){this.deps&&(Sy(this.deps).forEach(t=>t.delete(this)),this.deps.clear(),ml.push(this.deps),this.deps=null)}}Zd.count=0;function _1(e){const t=Xd.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),Ei(e)?oT(t,e):aT(t,e),t}function bR(e,t){return lT(e),Xd.withValue(e,kR,[e,t]),$R(e,t)&&ER(e),nT(e.value)}function kR(e,t){e.recomputing=!0,e.value.length=0;try{e.value[0]=e.fn.apply(null,t)}catch(n){e.value[1]=n}e.recomputing=!1}function Ei(e){return e.dirty||!!(e.dirtyChildren&&e.dirtyChildren.size)}function ER(e){e.dirty=!1,!Ei(e)&&iT(e)}function rT(e){wy(e,oT)}function iT(e){wy(e,aT)}function wy(e,t){const n=e.parents.size;if(n){const r=Sy(e.parents);for(let i=0;i<n;++i)t(r[i],e)}}function oT(e,t){$a(e.childValues.has(t)),$a(Ei(t));const n=!Ei(e);if(!e.dirtyChildren)e.dirtyChildren=ml.pop()||new Set;else if(e.dirtyChildren.has(t))return;e.dirtyChildren.add(t),n&&rT(e)}function aT(e,t){$a(e.childValues.has(t)),$a(!Ei(t));const n=e.childValues.get(t);n.length===0?e.childValues.set(t,wR(t.value)):SR(n,t.value)||e.setDirty(),sT(e,t),!Ei(e)&&iT(e)}function sT(e,t){const n=e.dirtyChildren;n&&(n.delete(t),n.size===0&&(ml.length<xR&&ml.push(n),e.dirtyChildren=null))}function lT(e){e.childValues.size>0&&e.childValues.forEach((t,n)=>{cT(e,n)}),e.forgetDeps(),$a(e.dirtyChildren===null)}function cT(e,t){t.parents.delete(e),e.childValues.delete(t),sT(e,t)}function $R(e,t){if(typeof e.subscribe=="function")try{Bu(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}const TR={setDirty:!0,dispose:!0,forget:!0};function uT(e){const t=new Map,n=e&&e.subscribe;function r(i){const o=Xd.getValue();if(o){let a=t.get(i);a||t.set(i,a=new Set),o.dependOn(a),typeof n=="function"&&(Bu(a),a.unsubscribe=n(i))}}return r.dirty=function(o,a){const l=t.get(o);if(l){const c=a&&vR.call(TR,a)?a:"setDirty";Sy(l).forEach(u=>u[c]()),t.delete(o),Bu(l)}},r}let C1;function _R(...e){return(C1||(C1=new Ii(typeof WeakMap=="function"))).lookupArray(e)}const Dp=new Set;function Uu(e,{max:t=Math.pow(2,16),makeCacheKey:n=_R,keyArgs:r,subscribe:i}=Object.create(null)){const o=new mR(t,d=>d.dispose()),a=function(){const d=n.apply(null,r?r.apply(null,arguments):arguments);if(d===void 0)return e.apply(null,arguments);let f=o.get(d);f||(o.set(d,f=new Zd(e)),f.subscribe=i,f.forget=()=>o.delete(d));const p=f.recompute(Array.prototype.slice.call(arguments));return o.set(d,f),Dp.add(o),Xd.hasValue()||(Dp.forEach(m=>m.clean()),Dp.clear()),p};Object.defineProperty(a,"size",{get(){return o.map.size},configurable:!1,enumerable:!1}),Object.freeze(a.options={max:t,makeCacheKey:n,keyArgs:r,subscribe:i});function l(d){const f=o.get(d);f&&f.setDirty()}a.dirtyKey=l,a.dirty=function(){l(n.apply(null,arguments))};function c(d){const f=o.get(d);if(f)return f.peek()}a.peekKey=c,a.peek=function(){return c(n.apply(null,arguments))};function u(d){return o.delete(d)}return a.forgetKey=u,a.forget=function(){return u(n.apply(null,arguments))},a.makeCacheKey=n,a.getKey=r?function(){return n.apply(null,r.apply(null,arguments))}:n,Object.freeze(a)}var CR=function(){function e(){this.assumeImmutableResults=!1,this.getFragmentDoc=Uu(q5)}return e.prototype.batch=function(t){var n=this,r=typeof t.optimistic=="string"?t.optimistic:t.optimistic===!1?null:void 0,i;return this.performTransaction(function(){return i=t.update(n)},r),i},e.prototype.recordOptimisticTransaction=function(t,n){this.performTransaction(t,n)},e.prototype.transformDocument=function(t){return t},e.prototype.transformForLink=function(t){return t},e.prototype.identify=function(t){},e.prototype.gc=function(){return[]},e.prototype.modify=function(t){return!1},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(L(L({},t),{rootId:t.id||"ROOT_QUERY",optimistic:n}))},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!!t.optimistic),this.read(L(L({},t),{query:this.getFragmentDoc(t.fragment,t.fragmentName),rootId:t.id,optimistic:n}))},e.prototype.writeQuery=function(t){var n=t.id,r=t.data,i=ur(t,["id","data"]);return this.write(Object.assign(i,{dataId:n||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(t){var n=t.id,r=t.data,i=t.fragment,o=t.fragmentName,a=ur(t,["id","data","fragment","fragmentName"]);return this.write(Object.assign(a,{query:this.getFragmentDoc(i,o),dataId:n,result:r}))},e.prototype.updateQuery=function(t,n){return this.batch({update:function(r){var i=r.readQuery(t),o=n(i);return o==null?i:(r.writeQuery(L(L({},t),{data:o})),o)}})},e.prototype.updateFragment=function(t,n){return this.batch({update:function(r){var i=r.readFragment(t),o=n(i);return o==null?i:(r.writeFragment(L(L({},t),{data:o})),o)}})},e}(),dT=function(e){vr(t,e);function t(n,r,i,o){var a,l=e.call(this,n)||this;if(l.message=n,l.path=r,l.query=i,l.variables=o,Array.isArray(l.path)){l.missing=l.message;for(var c=l.path.length-1;c>=0;--c)l.missing=(a={},a[l.path[c]]=l.missing,a)}else l.missing=l.path;return l.__proto__=t.prototype,l}return t}(Error),ct=Object.prototype.hasOwnProperty;function xs(e){return e==null}function fT(e,t){var n=e.__typename,r=e.id,i=e._id;if(typeof n=="string"&&(t&&(t.keyObject=xs(r)?xs(i)?void 0:{_id:i}:{id:r}),xs(r)&&!xs(i)&&(r=i),!xs(r)))return"".concat(n,":").concat(typeof r=="number"||typeof r=="string"?r:JSON.stringify(r))}var pT={dataIdFromObject:fT,addTypename:!0,resultCaching:!0,canonizeResults:!1};function AR(e){return ki(pT,e)}function mT(e){var t=e.canonizeResults;return t===void 0?pT.canonizeResults:t}function LR(e,t){return Se(t)?e.get(t.__ref,"__typename"):t&&t.__typename}var hT=/^[_a-z][_0-9a-z]*/i;function $i(e){var t=e.match(hT);return t?t[0]:e}function gh(e,t,n){return Oe(t)?Ve(t)?t.every(function(r){return gh(e,r,n)}):e.selections.every(function(r){if(wi(r)&&Ll(r,n)){var i=Si(r);return ct.call(t,i)&&(!r.selectionSet||gh(r.selectionSet,t[i],n))}return!0}):!1}function Xo(e){return Oe(e)&&!Se(e)&&!Ve(e)}function IR(){return new bi}function gT(e,t){var n=Qd(Kd(e));return{fragmentMap:n,lookupFragment:function(r){var i=n[r];return!i&&t&&(i=t.lookup(r)),i||null}}}var ou=Object.create(null),Np=function(){return ou},A1=Object.create(null),hl=function(){function e(t,n){var r=this;this.policies=t,this.group=n,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(i,o){return pl(Se(i)?r.get(i.__ref,o):i&&i[o])},this.canRead=function(i){return Se(i)?r.has(i.__ref):typeof i=="object"},this.toReference=function(i,o){if(typeof i=="string")return la(i);if(Se(i))return i;var a=r.policies.identify(i)[0];if(a){var l=la(a);return o&&r.merge(a,i),l}}}return e.prototype.toObject=function(){return L({},this.data)},e.prototype.has=function(t){return this.lookup(t,!0)!==void 0},e.prototype.get=function(t,n){if(this.group.depend(t,n),ct.call(this.data,t)){var r=this.data[t];if(r&&ct.call(r,n))return r[n]}if(n==="__typename"&&ct.call(this.policies.rootTypenamesById,t))return this.policies.rootTypenamesById[t];if(this instanceof Yr)return this.parent.get(t,n)},e.prototype.lookup=function(t,n){if(n&&this.group.depend(t,"__exists"),ct.call(this.data,t))return this.data[t];if(this instanceof Yr)return this.parent.lookup(t,n);if(this.policies.rootTypenamesById[t])return Object.create(null)},e.prototype.merge=function(t,n){var r=this,i;Se(t)&&(t=t.__ref),Se(n)&&(n=n.__ref);var o=typeof t=="string"?this.lookup(i=t):t,a=typeof n=="string"?this.lookup(i=n):n;if(a){X(typeof i=="string",1);var l=new bi(OR).merge(o,a);if(this.data[i]=l,l!==o&&(delete this.refs[i],this.group.caching)){var c=Object.create(null);o||(c.__exists=1),Object.keys(a).forEach(function(u){if(!o||o[u]!==l[u]){c[u]=1;var d=$i(u);d!==u&&!r.policies.hasKeyArgs(l.__typename,d)&&(c[d]=1),l[u]===void 0&&!(r instanceof Yr)&&delete l[u]}}),c.__typename&&!(o&&o.__typename)&&this.policies.rootTypenamesById[i]===l.__typename&&delete c.__typename,Object.keys(c).forEach(function(u){return r.group.dirty(i,u)})}}},e.prototype.modify=function(t,n){var r=this,i=this.lookup(t);if(i){var o=Object.create(null),a=!1,l=!0,c={DELETE:ou,INVALIDATE:A1,isReference:Se,toReference:this.toReference,canRead:this.canRead,readField:function(u,d){return r.policies.readField(typeof u=="string"?{fieldName:u,from:d||la(t)}:u,{store:r})}};if(Object.keys(i).forEach(function(u){var d=$i(u),f=i[u];if(f!==void 0){var p=typeof n=="function"?n:n[u]||n[d];if(p){var m=p===Np?ou:p(pl(f),L(L({},c),{fieldName:d,storeFieldName:u,storage:r.getStorage(t,u)}));m===A1?r.group.dirty(t,u):(m===ou&&(m=void 0),m!==f&&(o[u]=m,a=!0,f=m))}f!==void 0&&(l=!1)}}),a)return this.merge(t,o),l&&(this instanceof Yr?this.data[t]=void 0:delete this.data[t],this.group.dirty(t,"__exists")),!0}return!1},e.prototype.delete=function(t,n,r){var i,o=this.lookup(t);if(o){var a=this.getFieldValue(o,"__typename"),l=n&&r?this.policies.getStoreFieldName({typename:a,fieldName:n,args:r}):n;return this.modify(t,l?(i={},i[l]=Np,i):Np)}return!1},e.prototype.evict=function(t,n){var r=!1;return t.id&&(ct.call(this.data,t.id)&&(r=this.delete(t.id,t.fieldName,t.args)),this instanceof Yr&&this!==n&&(r=this.parent.evict(t,n)||r),(t.fieldName||r)&&this.group.dirty(t.id,t.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var t=this,n=this.toObject(),r=[];return this.getRootIdSet().forEach(function(i){ct.call(t.policies.rootTypenamesById,i)||r.push(i)}),r.length&&(n.__META={extraRootIds:r.sort()}),n},e.prototype.replace=function(t){var n=this;if(Object.keys(this.data).forEach(function(o){t&&ct.call(t,o)||n.delete(o)}),t){var r=t.__META,i=ur(t,["__META"]);Object.keys(i).forEach(function(o){n.merge(o,i[o])}),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(t){return this.rootIds[t]=(this.rootIds[t]||0)+1},e.prototype.release=function(t){if(this.rootIds[t]>0){var n=--this.rootIds[t];return n||delete this.rootIds[t],n}return 0},e.prototype.getRootIdSet=function(t){return t===void 0&&(t=new Set),Object.keys(this.rootIds).forEach(t.add,t),this instanceof Yr?this.parent.getRootIdSet(t):Object.keys(this.policies.rootTypenamesById).forEach(t.add,t),t},e.prototype.gc=function(){var t=this,n=this.getRootIdSet(),r=this.toObject();n.forEach(function(a){ct.call(r,a)&&(Object.keys(t.findChildRefIds(a)).forEach(n.add,n),delete r[a])});var i=Object.keys(r);if(i.length){for(var o=this;o instanceof Yr;)o=o.parent;i.forEach(function(a){return o.delete(a)})}return i},e.prototype.findChildRefIds=function(t){if(!ct.call(this.refs,t)){var n=this.refs[t]=Object.create(null),r=this.data[t];if(!r)return n;var i=new Set([r]);i.forEach(function(o){Se(o)&&(n[o.__ref]=!0),Oe(o)&&Object.keys(o).forEach(function(a){var l=o[a];Oe(l)&&i.add(l)})})}return this.refs[t]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),yT=function(){function e(t,n){n===void 0&&(n=null),this.caching=t,this.parent=n,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?uT():null,this.keyMaker=new Ii(xr)},e.prototype.depend=function(t,n){if(this.d){this.d(Pp(t,n));var r=$i(n);r!==n&&this.d(Pp(t,r)),this.parent&&this.parent.depend(t,n)}},e.prototype.dirty=function(t,n){this.d&&this.d.dirty(Pp(t,n),n==="__exists"?"forget":"setDirty")},e}();function Pp(e,t){return t+"#"+e}function L1(e,t){Ms(e)&&e.group.depend(t,"__exists")}(function(e){var t=function(n){vr(r,n);function r(i){var o=i.policies,a=i.resultCaching,l=a===void 0?!0:a,c=i.seed,u=n.call(this,o,new yT(l))||this;return u.stump=new jR(u),u.storageTrie=new Ii(xr),c&&u.replace(c),u}return r.prototype.addLayer=function(i,o){return this.stump.addLayer(i,o)},r.prototype.removeLayer=function(){return this},r.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},r}(e);e.Root=t})(hl||(hl={}));var Yr=function(e){vr(t,e);function t(n,r,i,o){var a=e.call(this,r.policies,o)||this;return a.id=n,a.parent=r,a.replay=i,a.group=o,i(a),a}return t.prototype.addLayer=function(n,r){return new t(n,this,r,this.group)},t.prototype.removeLayer=function(n){var r=this,i=this.parent.removeLayer(n);return n===this.id?(this.group.caching&&Object.keys(this.data).forEach(function(o){var a=r.data[o],l=i.lookup(o);l?a?a!==l&&Object.keys(a).forEach(function(c){Ae(a[c],l[c])||r.group.dirty(o,c)}):(r.group.dirty(o,"__exists"),Object.keys(l).forEach(function(c){r.group.dirty(o,c)})):r.delete(o)}),i):i===this.parent?this:i.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return L(L({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(n){var r=this.parent.findChildRefIds(n);return ct.call(this.data,n)?L(L({},r),e.prototype.findChildRefIds.call(this,n)):r},t.prototype.getStorage=function(){for(var n=this.parent;n.parent;)n=n.parent;return n.getStorage.apply(n,arguments)},t}(hl),jR=function(e){vr(t,e);function t(n){return e.call(this,"EntityStore.Stump",n,function(){},new yT(n.group.caching,n.group))||this}return t.prototype.removeLayer=function(){return this},t.prototype.merge=function(){return this.parent.merge.apply(this.parent,arguments)},t}(Yr);function OR(e,t,n){var r=e[n],i=t[n];return Ae(r,i)?r:i}function Ms(e){return!!(e instanceof hl&&e.group.caching)}function RR(e){return Oe(e)?Ve(e)?e.slice(0):L({__proto__:Object.getPrototypeOf(e)},e):e}var yh=function(){function e(){this.known=new(U$?WeakSet:Set),this.pool=new Ii(xr),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(t){return Oe(t)&&this.known.has(t)},e.prototype.pass=function(t){if(Oe(t)){var n=RR(t);return this.passes.set(n,t),n}return t},e.prototype.admit=function(t){var n=this;if(Oe(t)){var r=this.passes.get(t);if(r)return r;var i=Object.getPrototypeOf(t);switch(i){case Array.prototype:{if(this.known.has(t))return t;var o=t.map(this.admit,this),a=this.pool.lookupArray(o);return a.array||(this.known.add(a.array=o),globalThis.__DEV__!==!1&&Object.freeze(o)),a.array}case null:case Object.prototype:{if(this.known.has(t))return t;var l=Object.getPrototypeOf(t),c=[l],u=this.sortedKeys(t);c.push(u.json);var d=c.length;u.sorted.forEach(function(m){c.push(n.admit(t[m]))});var a=this.pool.lookupArray(c);if(!a.object){var f=a.object=Object.create(l);this.known.add(f),u.sorted.forEach(function(m,S){f[m]=c[d+S]}),globalThis.__DEV__!==!1&&Object.freeze(f)}return a.object}}}return t},e.prototype.sortedKeys=function(t){var n=Object.keys(t),r=this.pool.lookupArray(n);if(!r.keys){n.sort();var i=JSON.stringify(n);(r.keys=this.keysByJSON.get(i))||this.keysByJSON.set(i,r.keys={sorted:n,json:i})}return r.keys},e}(),Yi=Object.assign(function(e){if(Oe(e)){vh===void 0&&I1();var t=vh.admit(e),n=xh.get(t);return n===void 0&&xh.set(t,n=JSON.stringify(t)),n}return JSON.stringify(e)},{reset:I1}),vh,xh;function I1(){vh=new yh,xh=new(xr?WeakMap:Map)}function j1(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var DR=function(){function e(t){var n=this;this.knownResults=new(xr?WeakMap:Map),this.config=ki(t,{addTypename:t.addTypename!==!1,canonizeResults:mT(t)}),this.canon=t.canon||new yh,this.executeSelectionSet=Uu(function(r){var i,o=r.context.canonizeResults,a=j1(r);a[3]=!o;var l=(i=n.executeSelectionSet).peek.apply(i,a);return l?o?L(L({},l),{result:n.canon.admit(l.result)}):l:(L1(r.context.store,r.enclosingRef.__ref),n.execSelectionSetImpl(r))},{max:this.config.resultCacheMaxSize,keyArgs:j1,makeCacheKey:function(r,i,o,a){if(Ms(o.store))return o.store.makeCacheKey(r,Se(i)?i.__ref:i,o.varString,a)}}),this.executeSubSelectedArray=Uu(function(r){return L1(r.context.store,r.enclosingRef.__ref),n.execSubSelectedArrayImpl(r)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(r){var i=r.field,o=r.array,a=r.context;if(Ms(a.store))return a.store.makeCacheKey(i,o,a.varString)}})}return e.prototype.resetCanon=function(){this.canon=new yh},e.prototype.diffQueryAgainstStore=function(t){var n=t.store,r=t.query,i=t.rootId,o=i===void 0?"ROOT_QUERY":i,a=t.variables,l=t.returnPartialData,c=l===void 0?!0:l,u=t.canonizeResults,d=u===void 0?this.config.canonizeResults:u,f=this.config.cache.policies;a=L(L({},dy(z$(r))),a);var p=la(o),m=this.executeSelectionSet({selectionSet:Ol(r).selectionSet,objectOrReference:p,enclosingRef:p,context:L({store:n,query:r,policies:f,variables:a,varString:Yi(a),canonizeResults:d},gT(r,this.config.fragments))}),S;if(m.missing&&(S=[new dT(NR(m.missing),m.missing,r,a)],!c))throw S[0];return{result:m.result,complete:!S,missing:S}},e.prototype.isFresh=function(t,n,r,i){if(Ms(i.store)&&this.knownResults.get(t)===r){var o=this.executeSelectionSet.peek(r,n,i,this.canon.isKnown(t));if(o&&t===o.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(t){var n=this,r=t.selectionSet,i=t.objectOrReference,o=t.enclosingRef,a=t.context;if(Se(i)&&!a.policies.rootTypenamesById[i.__ref]&&!a.store.has(i.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(i.__ref," object")};var l=a.variables,c=a.policies,u=a.store,d=u.getFieldValue(i,"__typename"),f=[],p,m=new bi;this.config.addTypename&&typeof d=="string"&&!c.rootIdsByTypename[d]&&f.push({__typename:d});function S(v,k){var T;return v.missing&&(p=m.merge(p,(T={},T[k]=v.missing,T))),v.result}var w=new Set(r.selections);w.forEach(function(v){var k,T;if(Ll(v,l))if(wi(v)){var $=c.readField({fieldName:v.name.value,field:v,variables:a.variables,from:i},a),I=Si(v);$===void 0?py.added(v)||(p=m.merge(p,(k={},k[I]="Can't find field '".concat(v.name.value,"' on ").concat(Se(i)?i.__ref+" object":"object "+JSON.stringify(i,null,2)),k))):Ve($)?$=S(n.executeSubSelectedArray({field:v,array:$,enclosingRef:o,context:a}),I):v.selectionSet?$!=null&&($=S(n.executeSelectionSet({selectionSet:v.selectionSet,objectOrReference:$,enclosingRef:Se($)?$:o,context:a}),I)):a.canonizeResults&&($=n.canon.pass($)),$!==void 0&&f.push((T={},T[I]=$,T))}else{var j=qd(v,a.lookupFragment);if(!j&&v.kind===Q.FRAGMENT_SPREAD)throw Rt(7,v.name.value);j&&c.fragmentMatches(j,d)&&j.selectionSet.selections.forEach(w.add,w)}});var E=my(f),g={result:E,missing:p},y=a.canonizeResults?this.canon.admit(g):pl(g);return y.result&&this.knownResults.set(y.result,r),y},e.prototype.execSubSelectedArrayImpl=function(t){var n=this,r=t.field,i=t.array,o=t.enclosingRef,a=t.context,l,c=new bi;function u(d,f){var p;return d.missing&&(l=c.merge(l,(p={},p[f]=d.missing,p))),d.result}return r.selectionSet&&(i=i.filter(a.store.canRead)),i=i.map(function(d,f){return d===null?null:Ve(d)?u(n.executeSubSelectedArray({field:r,array:d,enclosingRef:o,context:a}),f):r.selectionSet?u(n.executeSelectionSet({selectionSet:r.selectionSet,objectOrReference:d,enclosingRef:Se(d)?d:o,context:a}),f):(globalThis.__DEV__!==!1&&PR(a.store,r,d),d)}),{result:a.canonizeResults?this.canon.admit(i):i,missing:l}},e}();function NR(e){try{JSON.stringify(e,function(t,n){if(typeof n=="string")throw n;return n})}catch(t){return t}}function PR(e,t,n){if(!t.selectionSet){var r=new Set([n]);r.forEach(function(i){Oe(i)&&(X(!Se(i),8,LR(e,i),t.name.value),Object.values(i).forEach(r.add,r))})}}var by=new tT,O1=new WeakMap;function Bs(e){var t=O1.get(e);return t||O1.set(e,t={vars:new Set,dep:uT()}),t}function R1(e){Bs(e).vars.forEach(function(t){return t.forgetCache(e)})}function FR(e){Bs(e).vars.forEach(function(t){return t.attachCache(e)})}function MR(e){var t=new Set,n=new Set,r=function(o){if(arguments.length>0){if(e!==o){e=o,t.forEach(function(c){Bs(c).dep.dirty(r),BR(c)});var a=Array.from(n);n.clear(),a.forEach(function(c){return c(e)})}}else{var l=by.getValue();l&&(i(l),Bs(l).dep(r))}return e};r.onNextChange=function(o){return n.add(o),function(){n.delete(o)}};var i=r.attachCache=function(o){return t.add(o),Bs(o).vars.add(r),r};return r.forgetCache=function(o){return t.delete(o)},r}function BR(e){e.broadcastWatches&&e.broadcastWatches()}var D1=Object.create(null);function ky(e){var t=JSON.stringify(e);return D1[t]||(D1[t]=Object.create(null))}function N1(e){var t=ky(e);return t.keyFieldsFn||(t.keyFieldsFn=function(n,r){var i=function(a,l){return r.readField(l,a)},o=r.keyObject=Ey(e,function(a){var l=ua(r.storeObject,a,i);return l===void 0&&n!==r.storeObject&&ct.call(n,a[0])&&(l=ua(n,a,xT)),X(l!==void 0,2,a.join("."),n),l});return"".concat(r.typename,":").concat(JSON.stringify(o))})}function P1(e){var t=ky(e);return t.keyArgsFn||(t.keyArgsFn=function(n,r){var i=r.field,o=r.variables,a=r.fieldName,l=Ey(e,function(u){var d=u[0],f=d.charAt(0);if(f==="@"){if(i&&_t(i.directives)){var p=d.slice(1),m=i.directives.find(function(g){return g.name.value===p}),S=m&&Yd(m,o);return S&&ua(S,u.slice(1))}return}if(f==="$"){var w=d.slice(1);if(o&&ct.call(o,w)){var E=u.slice(0);return E[0]=w,ua(o,E)}return}if(n)return ua(n,u)}),c=JSON.stringify(l);return(n||c!=="{}")&&(a+=":"+c),a})}function Ey(e,t){var n=new bi;return vT(e).reduce(function(r,i){var o,a=t(i);if(a!==void 0){for(var l=i.length-1;l>=0;--l)a=(o={},o[i[l]]=a,o);r=n.merge(r,a)}return r},Object.create(null))}function vT(e){var t=ky(e);if(!t.paths){var n=t.paths=[],r=[];e.forEach(function(i,o){Ve(i)?(vT(i).forEach(function(a){return n.push(r.concat(a))}),r.length=0):(r.push(i),Ve(e[o+1])||(n.push(r.slice(0)),r.length=0))})}return t.paths}function xT(e,t){return e[t]}function ua(e,t,n){return n=n||xT,ST(t.reduce(function r(i,o){return Ve(i)?i.map(function(a){return r(a,o)}):i&&n(i,o)},e))}function ST(e){return Oe(e)?Ve(e)?e.map(ST):Ey(Object.keys(e).sort(),function(t){return ua(e,t)}):e}uy.setStringify(Yi);function Sh(e){return e.args!==void 0?e.args:e.field?Yd(e.field,e.variables):null}var UR=function(){},F1=function(e,t){return t.fieldName},M1=function(e,t,n){var r=n.mergeObjects;return r(e,t)},B1=function(e,t){return t},zR=function(){function e(t){this.config=t,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=L({dataIdFromObject:fT},t),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),t.possibleTypes&&this.addPossibleTypes(t.possibleTypes),t.typePolicies&&this.addTypePolicies(t.typePolicies)}return e.prototype.identify=function(t,n){var r,i=this,o=n&&(n.typename||((r=n.storeObject)===null||r===void 0?void 0:r.__typename))||t.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];for(var a=n&&n.storeObject||t,l=L(L({},n),{typename:o,storeObject:a,readField:n&&n.readField||function(){var p=$y(arguments,a);return i.readField(p,{store:i.cache.data,variables:p.variables})}}),c,u=o&&this.getTypePolicy(o),d=u&&u.keyFn||this.config.dataIdFromObject;d;){var f=d(L(L({},t),a),l);if(Ve(f))d=N1(f);else{c=f;break}}return c=c?String(c):void 0,l.keyObject?[c,l.keyObject]:[c]},e.prototype.addTypePolicies=function(t){var n=this;Object.keys(t).forEach(function(r){var i=t[r],o=i.queryType,a=i.mutationType,l=i.subscriptionType,c=ur(i,["queryType","mutationType","subscriptionType"]);o&&n.setRootTypename("Query",r),a&&n.setRootTypename("Mutation",r),l&&n.setRootTypename("Subscription",r),ct.call(n.toBeAdded,r)?n.toBeAdded[r].push(c):n.toBeAdded[r]=[c]})},e.prototype.updateTypePolicy=function(t,n){var r=this,i=this.getTypePolicy(t),o=n.keyFields,a=n.fields;function l(c,u){c.merge=typeof u=="function"?u:u===!0?M1:u===!1?B1:c.merge}l(i,n.merge),i.keyFn=o===!1?UR:Ve(o)?N1(o):typeof o=="function"?o:i.keyFn,a&&Object.keys(a).forEach(function(c){var u=r.getFieldPolicy(t,c,!0),d=a[c];if(typeof d=="function")u.read=d;else{var f=d.keyArgs,p=d.read,m=d.merge;u.keyFn=f===!1?F1:Ve(f)?P1(f):typeof f=="function"?f:u.keyFn,typeof p=="function"&&(u.read=p),l(u,m)}u.read&&u.merge&&(u.keyFn=u.keyFn||F1)})},e.prototype.setRootTypename=function(t,n){n===void 0&&(n=t);var r="ROOT_"+t.toUpperCase(),i=this.rootTypenamesById[r];n!==i&&(X(!i||i===t,3,t),i&&delete this.rootIdsByTypename[i],this.rootIdsByTypename[n]=r,this.rootTypenamesById[r]=n)},e.prototype.addPossibleTypes=function(t){var n=this;this.usingPossibleTypes=!0,Object.keys(t).forEach(function(r){n.getSupertypeSet(r,!0),t[r].forEach(function(i){n.getSupertypeSet(i,!0).add(r);var o=i.match(hT);(!o||o[0]!==i)&&n.fuzzySubtypes.set(i,new RegExp(i))})})},e.prototype.getTypePolicy=function(t){var n=this;if(!ct.call(this.typePolicies,t)){var r=this.typePolicies[t]=Object.create(null);r.fields=Object.create(null);var i=this.supertypeMap.get(t);!i&&this.fuzzySubtypes.size&&(i=this.getSupertypeSet(t,!0),this.fuzzySubtypes.forEach(function(a,l){if(a.test(t)){var c=n.supertypeMap.get(l);c&&c.forEach(function(u){return i.add(u)})}})),i&&i.size&&i.forEach(function(a){var l=n.getTypePolicy(a),c=l.fields,u=ur(l,["fields"]);Object.assign(r,u),Object.assign(r.fields,c)})}var o=this.toBeAdded[t];return o&&o.length&&o.splice(0).forEach(function(a){n.updateTypePolicy(t,a)}),this.typePolicies[t]},e.prototype.getFieldPolicy=function(t,n,r){if(t){var i=this.getTypePolicy(t).fields;return i[n]||r&&(i[n]=Object.create(null))}},e.prototype.getSupertypeSet=function(t,n){var r=this.supertypeMap.get(t);return!r&&n&&this.supertypeMap.set(t,r=new Set),r},e.prototype.fragmentMatches=function(t,n,r,i){var o=this;if(!t.typeCondition)return!0;if(!n)return!1;var a=t.typeCondition.name.value;if(n===a)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(a))for(var l=this.getSupertypeSet(n,!0),c=[l],u=function(S){var w=o.getSupertypeSet(S,!1);w&&w.size&&c.indexOf(w)<0&&c.push(w)},d=!!(r&&this.fuzzySubtypes.size),f=!1,p=0;p<c.length;++p){var m=c[p];if(m.has(a))return l.has(a)||(f&&globalThis.__DEV__!==!1&&X.warn(4,n,a),l.add(a)),!0;m.forEach(u),d&&p===c.length-1&&gh(t.selectionSet,r,i)&&(d=!1,f=!0,this.fuzzySubtypes.forEach(function(S,w){var E=n.match(S);E&&E[0]===n&&u(w)}))}return!1},e.prototype.hasKeyArgs=function(t,n){var r=this.getFieldPolicy(t,n,!1);return!!(r&&r.keyFn)},e.prototype.getStoreFieldName=function(t){var n=t.typename,r=t.fieldName,i=this.getFieldPolicy(n,r,!1),o,a=i&&i.keyFn;if(a&&n)for(var l={typename:n,fieldName:r,field:t.field||null,variables:t.variables},c=Sh(t);a;){var u=a(c,l);if(Ve(u))a=P1(u);else{o=u||r;break}}return o===void 0&&(o=t.field?oO(t.field,t.variables):uy(r,Sh(t))),o===!1?r:r===$i(o)?o:r+":"+o},e.prototype.readField=function(t,n){var r=t.from;if(r){var i=t.field||t.fieldName;if(i){if(t.typename===void 0){var o=n.store.getFieldValue(r,"__typename");o&&(t.typename=o)}var a=this.getStoreFieldName(t),l=$i(a),c=n.store.getFieldValue(r,a),u=this.getFieldPolicy(t.typename,l,!1),d=u&&u.read;if(d){var f=U1(this,r,t,n,n.store.getStorage(Se(r)?r.__ref:r,a));return by.withValue(this.cache,d,[c,f])}return c}}},e.prototype.getReadFunction=function(t,n){var r=this.getFieldPolicy(t,n,!1);return r&&r.read},e.prototype.getMergeFunction=function(t,n,r){var i=this.getFieldPolicy(t,n,!1),o=i&&i.merge;return!o&&r&&(i=this.getTypePolicy(r),o=i&&i.merge),o},e.prototype.runMergeFunction=function(t,n,r,i,o){var a=r.field,l=r.typename,c=r.merge;return c===M1?wT(i.store)(t,n):c===B1?n:(i.overwrite&&(t=void 0),c(t,n,U1(this,void 0,{typename:l,fieldName:a.name.value,field:a,variables:i.variables},i,o||Object.create(null))))},e}();function U1(e,t,n,r,i){var o=e.getStoreFieldName(n),a=$i(o),l=n.variables||r.variables,c=r.store,u=c.toReference,d=c.canRead;return{args:Sh(n),field:n.field||null,fieldName:a,storeFieldName:o,variables:l,isReference:Se,toReference:u,storage:i,cache:e.cache,canRead:d,readField:function(){return e.readField($y(arguments,t,l),r)},mergeObjects:wT(r.store)}}function $y(e,t,n){var r=e[0],i=e[1],o=e.length,a;return typeof r=="string"?a={fieldName:r,from:o>1?i:t}:(a=L({},r),ct.call(a,"from")||(a.from=t)),globalThis.__DEV__!==!1&&a.from===void 0&&globalThis.__DEV__!==!1&&X.warn(5,L$(Array.from(e))),a.variables===void 0&&(a.variables=n),a}function wT(e){return function(n,r){if(Ve(n)||Ve(r))throw Rt(6);if(Oe(n)&&Oe(r)){var i=e.getFieldValue(n,"__typename"),o=e.getFieldValue(r,"__typename"),a=i&&o&&i!==o;if(a)return r;if(Se(n)&&Xo(r))return e.merge(n.__ref,r),n;if(Xo(n)&&Se(r))return e.merge(n,r.__ref),r;if(Xo(n)&&Xo(r))return L(L({},n),r)}return r}}function Fp(e,t,n){var r="".concat(t).concat(n),i=e.flavors.get(r);return i||e.flavors.set(r,i=e.clientOnly===t&&e.deferred===n?e:L(L({},e),{clientOnly:t,deferred:n})),i}var WR=function(){function e(t,n,r){this.cache=t,this.reader=n,this.fragments=r}return e.prototype.writeToStore=function(t,n){var r=this,i=n.query,o=n.result,a=n.dataId,l=n.variables,c=n.overwrite,u=jl(i),d=IR();l=L(L({},dy(u)),l);var f=L(L({store:t,written:Object.create(null),merge:function(m,S){return d.merge(m,S)},variables:l,varString:Yi(l)},gT(i,this.fragments)),{overwrite:!!c,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map}),p=this.processSelectionSet({result:o||Object.create(null),dataId:a,selectionSet:u.selectionSet,mergeTree:{map:new Map},context:f});if(!Se(p))throw Rt(9,o);return f.incomingById.forEach(function(m,S){var w=m.storeObject,E=m.mergeTree,g=m.fieldNodeSet,y=la(S);if(E&&E.map.size){var v=r.applyMerges(E,y,w,f);if(Se(v))return;w=v}if(globalThis.__DEV__!==!1&&!f.overwrite){var k=Object.create(null);g.forEach(function(I){I.selectionSet&&(k[I.name.value]=!0)});var T=function(I){return k[$i(I)]===!0},$=function(I){var j=E&&E.map.get(I);return!!(j&&j.info&&j.info.merge)};Object.keys(w).forEach(function(I){T(I)&&!$(I)&&VR(y,w,I,f.store)})}t.merge(S,w)}),t.retain(p.__ref),p},e.prototype.processSelectionSet=function(t){var n=this,r=t.dataId,i=t.result,o=t.selectionSet,a=t.context,l=t.mergeTree,c=this.cache.policies,u=Object.create(null),d=r&&c.rootTypenamesById[r]||oh(i,o,a.fragmentMap)||r&&a.store.get(r,"__typename");typeof d=="string"&&(u.__typename=d);var f=function(){var v=$y(arguments,u,a.variables);if(Se(v.from)){var k=a.incomingById.get(v.from.__ref);if(k){var T=c.readField(L(L({},v),{from:k.storeObject}),a);if(T!==void 0)return T}}return c.readField(v,a)},p=new Set;this.flattenFields(o,i,a,d).forEach(function(v,k){var T,$=Si(k),I=i[$];if(p.add(k),I!==void 0){var j=c.getStoreFieldName({typename:d,fieldName:k.name.value,field:k,variables:v.variables}),N=z1(l,j),R=n.processFieldValue(I,k,k.selectionSet?Fp(v,!1,!1):v,N),K=void 0;k.selectionSet&&(Se(R)||Xo(R))&&(K=f("__typename",R));var ce=c.getMergeFunction(d,k.name.value,K);ce?N.info={field:k,typename:d,merge:ce}:W1(l,j),u=v.merge(u,(T={},T[j]=R,T))}else globalThis.__DEV__!==!1&&!v.clientOnly&&!v.deferred&&!py.added(k)&&!c.getReadFunction(d,k.name.value)&&globalThis.__DEV__!==!1&&X.error(10,Si(k),i)});try{var m=c.identify(i,{typename:d,selectionSet:o,fragmentMap:a.fragmentMap,storeObject:u,readField:f}),S=m[0],w=m[1];r=r||S,w&&(u=a.merge(u,w))}catch(v){if(!r)throw v}if(typeof r=="string"){var E=la(r),g=a.written[r]||(a.written[r]=[]);if(g.indexOf(o)>=0||(g.push(o),this.reader&&this.reader.isFresh(i,E,o,a)))return E;var y=a.incomingById.get(r);return y?(y.storeObject=a.merge(y.storeObject,u),y.mergeTree=wh(y.mergeTree,l),p.forEach(function(v){return y.fieldNodeSet.add(v)})):a.incomingById.set(r,{storeObject:u,mergeTree:zu(l)?void 0:l,fieldNodeSet:p}),E}return u},e.prototype.processFieldValue=function(t,n,r,i){var o=this;return!n.selectionSet||t===null?globalThis.__DEV__!==!1?K$(t):t:Ve(t)?t.map(function(a,l){var c=o.processFieldValue(a,n,r,z1(i,l));return W1(i,l),c}):this.processSelectionSet({result:t,selectionSet:n.selectionSet,context:r,mergeTree:i})},e.prototype.flattenFields=function(t,n,r,i){i===void 0&&(i=oh(n,t,r.fragmentMap));var o=new Map,a=this.cache.policies,l=new Ii(!1);return function c(u,d){var f=l.lookup(u,d.clientOnly,d.deferred);f.visited||(f.visited=!0,u.selections.forEach(function(p){if(Ll(p,r.variables)){var m=d.clientOnly,S=d.deferred;if(!(m&&S)&&_t(p.directives)&&p.directives.forEach(function(g){var y=g.name.value;if(y==="client"&&(m=!0),y==="defer"){var v=Yd(g,r.variables);(!v||v.if!==!1)&&(S=!0)}}),wi(p)){var w=o.get(p);w&&(m=m&&w.clientOnly,S=S&&w.deferred),o.set(p,Fp(r,m,S))}else{var E=qd(p,r.lookupFragment);if(!E&&p.kind===Q.FRAGMENT_SPREAD)throw Rt(11,p.name.value);E&&a.fragmentMatches(E,i,n,r.variables)&&c(E.selectionSet,Fp(r,m,S))}}}))}(t,r),o},e.prototype.applyMerges=function(t,n,r,i,o){var a,l=this;if(t.map.size&&!Se(r)){var c=!Ve(r)&&(Se(n)||Xo(n))?n:void 0,u=r;c&&!o&&(o=[Se(c)?c.__ref:c]);var d,f=function(p,m){return Ve(p)?typeof m=="number"?p[m]:void 0:i.store.getFieldValue(p,String(m))};t.map.forEach(function(p,m){var S=f(c,m),w=f(u,m);if(w!==void 0){o&&o.push(m);var E=l.applyMerges(p,S,w,i,o);E!==w&&(d=d||new Map,d.set(m,E)),o&&X(o.pop()===m)}}),d&&(r=Ve(u)?u.slice(0):L({},u),d.forEach(function(p,m){r[m]=p}))}return t.info?this.cache.policies.runMergeFunction(n,r,t.info,i,o&&(a=i.store).getStorage.apply(a,o)):r},e}(),bT=[];function z1(e,t){var n=e.map;return n.has(t)||n.set(t,bT.pop()||{map:new Map}),n.get(t)}function wh(e,t){if(e===t||!t||zu(t))return e;if(!e||zu(e))return t;var n=e.info&&t.info?L(L({},e.info),t.info):e.info||t.info,r=e.map.size&&t.map.size,i=r?new Map:e.map.size?e.map:t.map,o={info:n,map:i};if(r){var a=new Set(t.map.keys());e.map.forEach(function(l,c){o.map.set(c,wh(l,t.map.get(c))),a.delete(c)}),a.forEach(function(l){o.map.set(l,wh(t.map.get(l),e.map.get(l)))})}return o}function zu(e){return!e||!(e.info||e.map.size)}function W1(e,t){var n=e.map,r=n.get(t);r&&zu(r)&&(bT.push(r),n.delete(t))}var V1=new Set;function VR(e,t,n,r){var i=function(f){var p=r.getFieldValue(f,n);return typeof p=="object"&&p},o=i(e);if(o){var a=i(t);if(a&&!Se(o)&&!Ae(o,a)&&!Object.keys(o).every(function(f){return r.getFieldValue(a,f)!==void 0})){var l=r.getFieldValue(e,"__typename")||r.getFieldValue(t,"__typename"),c=$i(n),u="".concat(l,".").concat(c);if(!V1.has(u)){V1.add(u);var d=[];!Ve(o)&&!Ve(a)&&[o,a].forEach(function(f){var p=r.getFieldValue(f,"__typename");typeof p=="string"&&!d.includes(p)&&d.push(p)}),globalThis.__DEV__!==!1&&X.warn(12,c,l,d.length?"either ensure all objects of type "+d.join(" and ")+" have an ID or a custom merge function, or ":"",u,o,a)}}}}var GR=function(e){vr(t,e);function t(n){n===void 0&&(n={});var r=e.call(this)||this;return r.watches=new Set,r.addTypenameTransform=new W$(py),r.assumeImmutableResults=!0,r.makeVar=MR,r.txCount=0,r.config=AR(n),r.addTypename=!!r.config.addTypename,r.policies=new zR({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return t.prototype.init=function(){var n=this.data=new hl.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=n.stump,this.resetResultCache()},t.prototype.resetResultCache=function(n){var r=this,i=this.storeReader,o=this.config.fragments;this.storeWriter=new WR(this,this.storeReader=new DR({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:mT(this.config),canon:n?void 0:i&&i.canon,fragments:o}),o),this.maybeBroadcastWatch=Uu(function(a,l){return r.broadcastWatch(a,l)},{max:this.config.resultCacheMaxSize,makeCacheKey:function(a){var l=a.optimistic?r.optimisticData:r.data;if(Ms(l)){var c=a.optimistic,u=a.id,d=a.variables;return l.makeCacheKey(a.query,a.callback,Yi({optimistic:c,id:u,variables:d}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach(function(a){return a.resetCaching()})},t.prototype.restore=function(n){return this.init(),n&&this.data.replace(n),this},t.prototype.extract=function(n){return n===void 0&&(n=!1),(n?this.optimisticData:this.data).extract()},t.prototype.read=function(n){var r=n.returnPartialData,i=r===void 0?!1:r;try{return this.storeReader.diffQueryAgainstStore(L(L({},n),{store:n.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:i})).result||null}catch(o){if(o instanceof dT)return null;throw o}},t.prototype.write=function(n){try{return++this.txCount,this.storeWriter.writeToStore(this.data,n)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.modify=function(n){if(ct.call(n,"id")&&!n.id)return!1;var r=n.optimistic?this.optimisticData:this.data;try{return++this.txCount,r.modify(n.id||"ROOT_QUERY",n.fields)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.diff=function(n){return this.storeReader.diffQueryAgainstStore(L(L({},n),{store:n.optimistic?this.optimisticData:this.data,rootId:n.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(n){var r=this;return this.watches.size||FR(this),this.watches.add(n),n.immediate&&this.maybeBroadcastWatch(n),function(){r.watches.delete(n)&&!r.watches.size&&R1(r),r.maybeBroadcastWatch.forget(n)}},t.prototype.gc=function(n){Yi.reset();var r=this.optimisticData.gc();return n&&!this.txCount&&(n.resetResultCache?this.resetResultCache(n.resetResultIdentities):n.resetResultIdentities&&this.storeReader.resetCanon()),r},t.prototype.retain=function(n,r){return(r?this.optimisticData:this.data).retain(n)},t.prototype.release=function(n,r){return(r?this.optimisticData:this.data).release(n)},t.prototype.identify=function(n){if(Se(n))return n.__ref;try{return this.policies.identify(n)[0]}catch(r){globalThis.__DEV__!==!1&&X.warn(r)}},t.prototype.evict=function(n){if(!n.id){if(ct.call(n,"id"))return!1;n=L(L({},n),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(n,this.data)}finally{!--this.txCount&&n.broadcast!==!1&&this.broadcastWatches()}},t.prototype.reset=function(n){var r=this;return this.init(),Yi.reset(),n&&n.discardWatches?(this.watches.forEach(function(i){return r.maybeBroadcastWatch.forget(i)}),this.watches.clear(),R1(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(n){var r=this.optimisticData.removeLayer(n);r!==this.optimisticData&&(this.optimisticData=r,this.broadcastWatches())},t.prototype.batch=function(n){var r=this,i=n.update,o=n.optimistic,a=o===void 0?!0:o,l=n.removeOptimistic,c=n.onWatchUpdated,u,d=function(p){var m=r,S=m.data,w=m.optimisticData;++r.txCount,p&&(r.data=r.optimisticData=p);try{return u=i(r)}finally{--r.txCount,r.data=S,r.optimisticData=w}},f=new Set;return c&&!this.txCount&&this.broadcastWatches(L(L({},n),{onWatchUpdated:function(p){return f.add(p),!1}})),typeof a=="string"?this.optimisticData=this.optimisticData.addLayer(a,d):a===!1?d(this.data):d(),typeof l=="string"&&(this.optimisticData=this.optimisticData.removeLayer(l)),c&&f.size?(this.broadcastWatches(L(L({},n),{onWatchUpdated:function(p,m){var S=c.call(this,p,m);return S!==!1&&f.delete(p),S}})),f.size&&f.forEach(function(p){return r.maybeBroadcastWatch.dirty(p)})):this.broadcastWatches(n),u},t.prototype.performTransaction=function(n,r){return this.batch({update:n,optimistic:r||r!==null})},t.prototype.transformDocument=function(n){return this.addTypenameToDocument(this.addFragmentsToDocument(n))},t.prototype.broadcastWatches=function(n){var r=this;this.txCount||this.watches.forEach(function(i){return r.maybeBroadcastWatch(i,n)})},t.prototype.addFragmentsToDocument=function(n){var r=this.config.fragments;return r?r.transform(n):n},t.prototype.addTypenameToDocument=function(n){return this.addTypename?this.addTypenameTransform.transformDocument(n):n},t.prototype.broadcastWatch=function(n,r){var i=n.lastDiff,o=this.diff(n);r&&(n.optimistic&&typeof r.optimistic=="string"&&(o.fromOptimisticTransaction=!0),r.onWatchUpdated&&r.onWatchUpdated.call(this,n,o,i)===!1)||(!i||!Ae(i.result,o.result))&&n.callback(n.lastDiff=o,i)},t}(CR),pe;(function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"})(pe||(pe={}));function gl(e){return e?e<7:!1}function HR(e,t,n,r){var i=t.data,o=ur(t,["data"]),a=n.data,l=ur(n,["data"]);return Ae(o,l)&&au(Ol(e).selectionSet,i,a,{fragmentMap:Qd(Kd(e)),variables:r})}function au(e,t,n,r){if(t===n)return!0;var i=new Set;return e.selections.every(function(o){if(i.has(o)||(i.add(o),!Ll(o,r.variables))||G1(o))return!0;if(wi(o)){var a=Si(o),l=t&&t[a],c=n&&n[a],u=o.selectionSet;if(!u)return Ae(l,c);var d=Array.isArray(l),f=Array.isArray(c);if(d!==f)return!1;if(d&&f){var p=l.length;if(c.length!==p)return!1;for(var m=0;m<p;++m)if(!au(u,l[m],c[m],r))return!1;return!0}return au(u,l,c,r)}else{var S=qd(o,r.fragmentMap);if(S)return G1(S)?!0:au(S.selectionSet,t,n,r)}})}function G1(e){return!!e.directives&&e.directives.some(QR)}function QR(e){return e.name.value==="nonreactive"}var H1=Object.assign,qR=Object.hasOwnProperty,bh=function(e){vr(t,e);function t(n){var r=n.queryManager,i=n.queryInfo,o=n.options,a=e.call(this,function(E){try{var g=E._subscription._observer;g&&!g.error&&(g.error=YR)}catch{}var y=!a.observers.size;a.observers.add(E);var v=a.last;return v&&v.error?E.error&&E.error(v.error):v&&v.result&&E.next&&E.next(v.result),y&&a.reobserve().catch(function(){}),function(){a.observers.delete(E)&&!a.observers.size&&a.tearDownQuery()}})||this;a.observers=new Set,a.subscriptions=new Set,a.queryInfo=i,a.queryManager=r,a.waitForOwnResult=Mp(o.fetchPolicy),a.isTornDown=!1;var l=r.defaultOptions.watchQuery,c=l===void 0?{}:l,u=c.fetchPolicy,d=u===void 0?"cache-first":u,f=o.fetchPolicy,p=f===void 0?d:f,m=o.initialFetchPolicy,S=m===void 0?p==="standby"?d:p:m;a.options=L(L({},o),{initialFetchPolicy:S,fetchPolicy:p}),a.queryId=i.queryId||r.generateQueryId();var w=jl(a.query);return a.queryName=w&&w.name&&w.name.value,a}return Object.defineProperty(t.prototype,"query",{get:function(){return this.lastQuery||this.options.query},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var n=this;return new Promise(function(r,i){var o={next:function(l){r(l),n.observers.delete(o),n.observers.size||n.queryManager.removeQuery(n.queryId),setTimeout(function(){a.unsubscribe()},0)},error:i},a=n.subscribe(o)})},t.prototype.getCurrentResult=function(n){n===void 0&&(n=!0);var r=this.getLastResult(!0),i=this.queryInfo.networkStatus||r&&r.networkStatus||pe.ready,o=L(L({},r),{loading:gl(i),networkStatus:i}),a=this.options.fetchPolicy,l=a===void 0?"cache-first":a;if(!(Mp(l)||this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))if(this.waitForOwnResult)this.queryInfo.updateWatch();else{var c=this.queryInfo.getDiff();(c.complete||this.options.returnPartialData)&&(o.data=c.result),Ae(o.data,{})&&(o.data=void 0),c.complete?(delete o.partial,c.complete&&o.networkStatus===pe.loading&&(l==="cache-first"||l==="cache-only")&&(o.networkStatus=pe.ready,o.loading=!1)):o.partial=!0,globalThis.__DEV__!==!1&&!c.complete&&!this.options.partialRefetch&&!o.loading&&!o.data&&!o.error&&ET(c.missing)}return n&&this.updateLastResult(o),o},t.prototype.isDifferentFromLastResult=function(n,r){if(!this.last)return!0;var i=this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective?!HR(this.query,this.last.result,n,this.variables):!Ae(this.last.result,n);return i||r&&!Ae(this.last.variables,r)},t.prototype.getLast=function(n,r){var i=this.last;if(i&&i[n]&&(!r||Ae(i.variables,this.variables)))return i[n]},t.prototype.getLastResult=function(n){return this.getLast("result",n)},t.prototype.getLastError=function(n){return this.getLast("error",n)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(n){var r,i={pollInterval:0},o=this.options.fetchPolicy;if(o==="cache-and-network"?i.fetchPolicy=o:o==="no-cache"?i.fetchPolicy="no-cache":i.fetchPolicy="network-only",globalThis.__DEV__!==!1&&n&&qR.call(n,"variables")){var a=z$(this.query),l=a.variableDefinitions;(!l||!l.some(function(c){return c.variable.name.value==="variables"}))&&globalThis.__DEV__!==!1&&X.warn(18,n,((r=a.name)===null||r===void 0?void 0:r.value)||a)}return n&&!Ae(this.options.variables,n)&&(i.variables=this.options.variables=L(L({},this.options.variables),n)),this.queryInfo.resetLastWrite(),this.reobserve(i,pe.refetch)},t.prototype.fetchMore=function(n){var r=this,i=L(L({},n.query?n:L(L(L(L({},this.options),{query:this.options.query}),n),{variables:L(L({},this.options.variables),n.variables)})),{fetchPolicy:"no-cache"});i.query=this.transformDocument(i.query);var o=this.queryManager.generateQueryId();this.lastQuery=n.query?this.transformDocument(this.options.query):i.query;var a=this.queryInfo,l=a.networkStatus;a.networkStatus=pe.fetchMore,i.notifyOnNetworkStatusChange&&this.observe();var c=new Set;return this.queryManager.fetchQuery(o,i,pe.fetchMore).then(function(u){return r.queryManager.removeQuery(o),a.networkStatus===pe.fetchMore&&(a.networkStatus=l),r.queryManager.cache.batch({update:function(d){var f=n.updateQuery;f?d.updateQuery({query:r.query,variables:r.variables,returnPartialData:!0,optimistic:!1},function(p){return f(p,{fetchMoreResult:u.data,variables:i.variables})}):d.writeQuery({query:i.query,variables:i.variables,data:u.data})},onWatchUpdated:function(d){c.add(d.query)}}),u}).finally(function(){c.has(r.query)||kT(r)})},t.prototype.subscribeToMore=function(n){var r=this,i=this.queryManager.startGraphQLSubscription({query:n.document,variables:n.variables,context:n.context}).subscribe({next:function(o){var a=n.updateQuery;a&&r.updateQuery(function(l,c){var u=c.variables;return a(l,{subscriptionData:o,variables:u})})},error:function(o){if(n.onError){n.onError(o);return}globalThis.__DEV__!==!1&&X.error(19,o)}});return this.subscriptions.add(i),function(){r.subscriptions.delete(i)&&i.unsubscribe()}},t.prototype.setOptions=function(n){return this.reobserve(n)},t.prototype.silentSetOptions=function(n){var r=ki(this.options,n||{});H1(this.options,r)},t.prototype.setVariables=function(n){return Ae(this.variables,n)?this.observers.size?this.result():Promise.resolve():(this.options.variables=n,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:n},pe.setVariables):Promise.resolve())},t.prototype.updateQuery=function(n){var r=this.queryManager,i=r.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,o=n(i,{variables:this.variables});o&&(r.cache.writeQuery({query:this.options.query,data:o,variables:this.variables}),r.broadcastQueries())},t.prototype.startPolling=function(n){this.options.pollInterval=n,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(n,r){if(r.nextFetchPolicy){var i=r.fetchPolicy,o=i===void 0?"cache-first":i,a=r.initialFetchPolicy,l=a===void 0?o:a;o==="standby"||(typeof r.nextFetchPolicy=="function"?r.fetchPolicy=r.nextFetchPolicy(o,{reason:n,options:r,observable:this,initialFetchPolicy:l}):n==="variables-changed"?r.fetchPolicy=l:r.fetchPolicy=r.nextFetchPolicy)}return r.fetchPolicy},t.prototype.fetch=function(n,r){return this.queryManager.setObservableQuery(this),this.queryManager.fetchConcastWithInfo(this.queryId,n,r)},t.prototype.updatePolling=function(){var n=this;if(!this.queryManager.ssrMode){var r=this,i=r.pollingInfo,o=r.options.pollInterval;if(!o){i&&(clearTimeout(i.timeout),delete this.pollingInfo);return}if(!(i&&i.interval===o)){X(o,20);var a=i||(this.pollingInfo={});a.interval=o;var l=function(){n.pollingInfo&&(gl(n.queryInfo.networkStatus)?c():n.reobserve({fetchPolicy:n.options.initialFetchPolicy==="no-cache"?"no-cache":"network-only"},pe.poll).then(c,c))},c=function(){var u=n.pollingInfo;u&&(clearTimeout(u.timeout),u.timeout=setTimeout(l,u.interval))};c()}}},t.prototype.updateLastResult=function(n,r){r===void 0&&(r=this.variables);var i=this.getLastError();return i&&this.last&&!Ae(r,this.last.variables)&&(i=void 0),this.last=L({result:this.queryManager.assumeImmutableResults?n:K$(n),variables:r},i?{error:i}:null)},t.prototype.reobserveAsConcast=function(n,r){var i=this;this.isTornDown=!1;var o=r===pe.refetch||r===pe.fetchMore||r===pe.poll,a=this.options.variables,l=this.options.fetchPolicy,c=ki(this.options,n||{}),u=o?c:H1(this.options,c),d=this.transformDocument(u.query);this.lastQuery=d,o||(this.updatePolling(),n&&n.variables&&!Ae(n.variables,a)&&u.fetchPolicy!=="standby"&&u.fetchPolicy===l&&(this.applyNextFetchPolicy("variables-changed",u),r===void 0&&(r=pe.setVariables)));var f=d===u.query?u:L(L({},u),{query:d});this.waitForOwnResult&&(this.waitForOwnResult=Mp(f.fetchPolicy));var p=function(){i.concast===w&&(i.waitForOwnResult=!1)},m=f.variables&&L({},f.variables),S=this.fetch(f,r),w=S.concast,E=S.fromLink,g={next:function(y){p(),i.reportResult(y,m)},error:function(y){p(),i.reportError(y,m)}};return!o&&(E||!this.concast)&&(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=w,this.observer=g),w.addObserver(g),w},t.prototype.reobserve=function(n,r){return this.reobserveAsConcast(n,r).promise},t.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},t.prototype.reportResult=function(n,r){var i=this.getLastError(),o=this.isDifferentFromLastResult(n,r);(i||!n.partial||this.options.returnPartialData)&&this.updateLastResult(n,r),(i||o)&&Fs(this.observers,"next",n)},t.prototype.reportError=function(n,r){var i=L(L({},this.getLastResult()),{error:n,errors:n.graphQLErrors,networkStatus:pe.error,loading:!1});this.updateLastResult(i,r),Fs(this.observers,"error",this.last.error=n)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach(function(n){return n.unsubscribe()}),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t.prototype.transformDocument=function(n){return this.queryManager.transform(n)},t}(ke);X$(bh);function kT(e){var t=e.options,n=t.fetchPolicy,r=t.nextFetchPolicy;return n==="cache-and-network"||n==="network-only"?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(){return this.nextFetchPolicy=r,typeof r=="function"?r.apply(this,arguments):n}}):e.reobserve()}function YR(e){globalThis.__DEV__!==!1&&X.error(21,e.message,e.stack)}function ET(e){globalThis.__DEV__!==!1&&e&&globalThis.__DEV__!==!1&&X.debug(22,e)}function Mp(e){return e==="network-only"||e==="no-cache"||e==="standby"}var $T=function(){function e(t){var n=t.cache,r=t.client,i=t.resolvers,o=t.fragmentMatcher;this.selectionsToResolveCache=new WeakMap,this.cache=n,r&&(this.client=r),i&&this.addResolvers(i),o&&this.setFragmentMatcher(o)}return e.prototype.addResolvers=function(t){var n=this;this.resolvers=this.resolvers||{},Array.isArray(t)?t.forEach(function(r){n.resolvers=u1(n.resolvers,r)}):this.resolvers=u1(this.resolvers,t)},e.prototype.setResolvers=function(t){this.resolvers={},this.addResolvers(t)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(t){var n=t.document,r=t.remoteResult,i=t.context,o=t.variables,a=t.onlyRunForcedResolvers,l=a===void 0?!1:a;return Jr(this,void 0,void 0,function(){return ei(this,function(c){return n?[2,this.resolveDocument(n,r.data,i,o,this.fragmentMatcher,l).then(function(u){return L(L({},r),{data:u.result})})]:[2,r]})})},e.prototype.setFragmentMatcher=function(t){this.fragmentMatcher=t},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(t){return fl(["client"],t)&&this.resolvers?t:null},e.prototype.serverQuery=function(t){return H$(t)},e.prototype.prepareContext=function(t){var n=this.cache;return L(L({},t),{cache:n,getCacheKey:function(r){return n.identify(r)}})},e.prototype.addExportedVariables=function(t,n,r){return n===void 0&&(n={}),r===void 0&&(r={}),Jr(this,void 0,void 0,function(){return ei(this,function(i){return t?[2,this.resolveDocument(t,this.buildRootValueFromCache(t,n)||{},this.prepareContext(r),n).then(function(o){return L(L({},n),o.exportedVariables)})]:[2,L({},n)]})})},e.prototype.shouldForceResolvers=function(t){var n=!1;return Ur(t,{Directive:{enter:function(r){if(r.name.value==="client"&&r.arguments&&(n=r.arguments.some(function(i){return i.name.value==="always"&&i.value.kind==="BooleanValue"&&i.value.value===!0}),n))return ly}}}),n},e.prototype.buildRootValueFromCache=function(t,n){return this.cache.diff({query:pO(t),variables:n,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(t,n,r,i,o,a){return r===void 0&&(r={}),i===void 0&&(i={}),o===void 0&&(o=function(){return!0}),a===void 0&&(a=!1),Jr(this,void 0,void 0,function(){var l,c,u,d,f,p,m,S,w,E,g;return ei(this,function(y){return l=Ol(t),c=Kd(t),u=Qd(c),d=this.collectSelectionsToResolve(l,u),f=l.operation,p=f?f.charAt(0).toUpperCase()+f.slice(1):"Query",m=this,S=m.cache,w=m.client,E={fragmentMap:u,context:L(L({},r),{cache:S,client:w}),variables:i,fragmentMatcher:o,defaultOperationType:p,exportedVariables:{},selectionsToResolve:d,onlyRunForcedResolvers:a},g=!1,[2,this.resolveSelectionSet(l.selectionSet,g,n,E).then(function(v){return{result:v,exportedVariables:E.exportedVariables}})]})})},e.prototype.resolveSelectionSet=function(t,n,r,i){return Jr(this,void 0,void 0,function(){var o,a,l,c,u,d=this;return ei(this,function(f){return o=i.fragmentMap,a=i.context,l=i.variables,c=[r],u=function(p){return Jr(d,void 0,void 0,function(){var m,S;return ei(this,function(w){return!n&&!i.selectionsToResolve.has(p)?[2]:Ll(p,l)?wi(p)?[2,this.resolveField(p,n,r,i).then(function(E){var g;typeof E<"u"&&c.push((g={},g[Si(p)]=E,g))})]:(lO(p)?m=p:(m=o[p.name.value],X(m,16,p.name.value)),m&&m.typeCondition&&(S=m.typeCondition.name.value,i.fragmentMatcher(r,S,a))?[2,this.resolveSelectionSet(m.selectionSet,n,r,i).then(function(E){c.push(E)})]:[2]):[2]})})},[2,Promise.all(t.selections.map(u)).then(function(){return my(c)})]})})},e.prototype.resolveField=function(t,n,r,i){return Jr(this,void 0,void 0,function(){var o,a,l,c,u,d,f,p,m,S=this;return ei(this,function(w){return r?(o=i.variables,a=t.name.value,l=Si(t),c=a!==l,u=r[l]||r[a],d=Promise.resolve(u),(!i.onlyRunForcedResolvers||this.shouldForceResolvers(t))&&(f=r.__typename||i.defaultOperationType,p=this.resolvers&&this.resolvers[f],p&&(m=p[c?a:l],m&&(d=Promise.resolve(by.withValue(this.cache,m,[r,Yd(t,o),i.context,{field:t,fragmentMap:i.fragmentMap}]))))),[2,d.then(function(E){var g,y;if(E===void 0&&(E=u),t.directives&&t.directives.forEach(function(k){k.name.value==="export"&&k.arguments&&k.arguments.forEach(function(T){T.name.value==="as"&&T.value.kind==="StringValue"&&(i.exportedVariables[T.value.value]=E)})}),!t.selectionSet||E==null)return E;var v=(y=(g=t.directives)===null||g===void 0?void 0:g.some(function(k){return k.name.value==="client"}))!==null&&y!==void 0?y:!1;if(Array.isArray(E))return S.resolveSubSelectedArray(t,n||v,E,i);if(t.selectionSet)return S.resolveSelectionSet(t.selectionSet,n||v,E,i)})]):[2,null]})})},e.prototype.resolveSubSelectedArray=function(t,n,r,i){var o=this;return Promise.all(r.map(function(a){if(a===null)return null;if(Array.isArray(a))return o.resolveSubSelectedArray(t,n,a,i);if(t.selectionSet)return o.resolveSelectionSet(t.selectionSet,n,a,i)}))},e.prototype.collectSelectionsToResolve=function(t,n){var r=function(a){return!Array.isArray(a)},i=this.selectionsToResolveCache;function o(a){if(!i.has(a)){var l=new Set;i.set(a,l),Ur(a,{Directive:function(c,u,d,f,p){c.name.value==="client"&&p.forEach(function(m){r(m)&&a1(m)&&l.add(m)})},FragmentSpread:function(c,u,d,f,p){var m=n[c.name.value];X(m,17,c.name.value);var S=o(m);S.size>0&&(p.forEach(function(w){r(w)&&a1(w)&&l.add(w)}),l.add(c),S.forEach(function(w){l.add(w)}))}})}return i.get(a)}return o(t)},e}(),Zo=new(xr?WeakMap:Map);function Bp(e,t){var n=e[t];typeof n=="function"&&(e[t]=function(){return Zo.set(e,(Zo.get(e)+1)%1e15),n.apply(this,arguments)})}function Q1(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var Up=function(){function e(t,n){n===void 0&&(n=t.generateQueryId()),this.queryId=n,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.subscriptions=new Set,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=t.cache;Zo.has(r)||(Zo.set(r,0),Bp(r,"evict"),Bp(r,"modify"),Bp(r,"reset"))}return e.prototype.init=function(t){var n=t.networkStatus||pe.loading;return this.variables&&this.networkStatus!==pe.loading&&!Ae(this.variables,t.variables)&&(n=pe.setVariables),Ae(t.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:t.document,variables:t.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:n}),t.observableQuery&&this.setObservableQuery(t.observableQuery),t.lastRequestId&&(this.lastRequestId=t.lastRequestId),this},e.prototype.reset=function(){Q1(this),this.dirty=!1},e.prototype.getDiff=function(t){t===void 0&&(t=this.variables);var n=this.getDiffOptions(t);if(this.lastDiff&&Ae(n,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables=t);var r=this.observableQuery;if(r&&r.options.fetchPolicy==="no-cache")return{complete:!1};var i=this.cache.diff(n);return this.updateLastDiff(i,n),i},e.prototype.updateLastDiff=function(t,n){this.lastDiff=t?{diff:t,options:n||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(t){var n;return t===void 0&&(t=this.variables),{query:this.document,variables:t,returnPartialData:!0,optimistic:!0,canonizeResults:(n=this.observableQuery)===null||n===void 0?void 0:n.options.canonizeResults}},e.prototype.setDiff=function(t){var n=this,r=this.lastDiff&&this.lastDiff.diff;this.updateLastDiff(t),!this.dirty&&!Ae(r&&r.result,t&&t.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout(function(){return n.notify()},0)))},e.prototype.setObservableQuery=function(t){var n=this;t!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=t,t?(t.queryInfo=this,this.listeners.add(this.oqListener=function(){var r=n.getDiff();r.fromOptimisticTransaction?t.observe():kT(t)})):delete this.oqListener)},e.prototype.notify=function(){var t=this;Q1(this),this.shouldNotify()&&this.listeners.forEach(function(n){return n(t)}),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(gl(this.networkStatus)&&this.observableQuery){var t=this.observableQuery.options.fetchPolicy;if(t!=="cache-only"&&t!=="cache-and-network")return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel,this.subscriptions.forEach(function(n){return n.unsubscribe()});var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(t){var n=this;t===void 0&&(t=this.variables);var r=this.observableQuery;if(!(r&&r.options.fetchPolicy==="no-cache")){var i=L(L({},this.getDiffOptions(t)),{watcher:this,callback:function(o){return n.setDiff(o)}});(!this.lastWatch||!Ae(i,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=i))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(t,n){var r=this.lastWrite;return!(r&&r.dmCount===Zo.get(this.cache)&&Ae(n,r.variables)&&Ae(t.data,r.result.data))},e.prototype.markResult=function(t,n,r,i){var o=this,a=new bi,l=_t(t.errors)?t.errors.slice(0):[];if(this.reset(),"incremental"in t&&_t(t.incremental)){var c=Z$(this.getDiff().result,t);t.data=c}else if("hasNext"in t&&t.hasNext){var u=this.getDiff();t.data=a.merge(u.result,t.data)}this.graphQLErrors=l,r.fetchPolicy==="no-cache"?this.updateLastDiff({result:t.data,complete:!0},this.getDiffOptions(r.variables)):i!==0&&(kh(t,r.errorPolicy)?this.cache.performTransaction(function(d){if(o.shouldWrite(t,r.variables))d.writeQuery({query:n,data:t.data,variables:r.variables,overwrite:i===1}),o.lastWrite={result:t,variables:r.variables,dmCount:Zo.get(o.cache)};else if(o.lastDiff&&o.lastDiff.diff.complete){t.data=o.lastDiff.diff.result;return}var f=o.getDiffOptions(r.variables),p=d.diff(f);o.stopped||o.updateWatch(r.variables),o.updateLastDiff(p,f),p.complete&&(t.data=p.result)}):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=pe.ready},e.prototype.markError=function(t){return this.networkStatus=pe.error,this.lastWrite=void 0,this.reset(),t.graphQLErrors&&(this.graphQLErrors=t.graphQLErrors),t.networkError&&(this.networkError=t.networkError),t},e}();function kh(e,t){t===void 0&&(t="none");var n=t==="ignore"||t==="all",r=!ru(e);return!r&&n&&e.data&&(r=!0),r}var KR=Object.prototype.hasOwnProperty,XR=function(){function e(t){var n=t.cache,r=t.link,i=t.defaultOptions,o=t.documentTransform,a=t.queryDeduplication,l=a===void 0?!1:a,c=t.onBroadcast,u=t.ssrMode,d=u===void 0?!1:u,f=t.clientAwareness,p=f===void 0?{}:f,m=t.localState,S=t.assumeImmutableResults,w=S===void 0?!!n.assumeImmutableResults:S,E=this;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new(xr?WeakMap:Map),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Map;var g=new W$(function(y){return E.cache.transformDocument(y)},{cache:!1});this.cache=n,this.link=r,this.defaultOptions=i||Object.create(null),this.queryDeduplication=l,this.clientAwareness=p,this.localState=m||new $T({cache:n}),this.ssrMode=d,this.assumeImmutableResults=w,this.documentTransform=o?g.concat(o).concat(g):g,(this.onBroadcast=c)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var t=this;this.queries.forEach(function(n,r){t.stopQueryNoBroadcast(r)}),this.cancelPendingFetches(Rt(23))},e.prototype.cancelPendingFetches=function(t){this.fetchCancelFns.forEach(function(n){return n(t)}),this.fetchCancelFns.clear()},e.prototype.mutate=function(t){var n,r,i=t.mutation,o=t.variables,a=t.optimisticResponse,l=t.updateQueries,c=t.refetchQueries,u=c===void 0?[]:c,d=t.awaitRefetchQueries,f=d===void 0?!1:d,p=t.update,m=t.onQueryUpdated,S=t.fetchPolicy,w=S===void 0?((n=this.defaultOptions.mutate)===null||n===void 0?void 0:n.fetchPolicy)||"network-only":S,E=t.errorPolicy,g=E===void 0?((r=this.defaultOptions.mutate)===null||r===void 0?void 0:r.errorPolicy)||"none":E,y=t.keepRootFields,v=t.context;return Jr(this,void 0,void 0,function(){var k,T,$,I;return ei(this,function(j){switch(j.label){case 0:return X(i,24),X(w==="network-only"||w==="no-cache",25),k=this.generateMutationId(),i=this.cache.transformForLink(this.transform(i)),T=this.getDocumentInfo(i).hasClientExports,o=this.getVariables(i,o),T?[4,this.localState.addExportedVariables(i,o,v)]:[3,2];case 1:o=j.sent(),j.label=2;case 2:return $=this.mutationStore&&(this.mutationStore[k]={mutation:i,variables:o,loading:!0,error:null}),a&&this.markMutationOptimistic(a,{mutationId:k,document:i,variables:o,fetchPolicy:w,errorPolicy:g,context:v,updateQueries:l,update:p,keepRootFields:y}),this.broadcastQueries(),I=this,[2,new Promise(function(N,R){return jp(I.getObservableFromLink(i,L(L({},v),{optimisticResponse:a}),o,!1),function(K){if(ru(K)&&g==="none")throw new ti({graphQLErrors:uh(K)});$&&($.loading=!1,$.error=null);var ce=L({},K);return typeof u=="function"&&(u=u(ce)),g==="ignore"&&ru(ce)&&delete ce.errors,I.markMutationResult({mutationId:k,result:ce,document:i,variables:o,fetchPolicy:w,errorPolicy:g,context:v,update:p,updateQueries:l,awaitRefetchQueries:f,refetchQueries:u,removeOptimistic:a?k:void 0,onQueryUpdated:m,keepRootFields:y})}).subscribe({next:function(K){I.broadcastQueries(),(!("hasNext"in K)||K.hasNext===!1)&&N(K)},error:function(K){$&&($.loading=!1,$.error=K),a&&I.cache.removeOptimistic(k),I.broadcastQueries(),R(K instanceof ti?K:new ti({networkError:K}))}})})]}})})},e.prototype.markMutationResult=function(t,n){var r=this;n===void 0&&(n=this.cache);var i=t.result,o=[],a=t.fetchPolicy==="no-cache";if(!a&&kh(i,t.errorPolicy)){if(ca(i)||o.push({result:i.data,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}),ca(i)&&_t(i.incremental)){var l=n.diff({id:"ROOT_MUTATION",query:this.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0}),c=void 0;l.result&&(c=Z$(l.result,i)),typeof c<"u"&&(i.data=c,o.push({result:c,dataId:"ROOT_MUTATION",query:t.document,variables:t.variables}))}var u=t.updateQueries;u&&this.queries.forEach(function(f,p){var m=f.observableQuery,S=m&&m.queryName;if(!(!S||!KR.call(u,S))){var w=u[S],E=r.queries.get(p),g=E.document,y=E.variables,v=n.diff({query:g,variables:y,returnPartialData:!0,optimistic:!1}),k=v.result,T=v.complete;if(T&&k){var $=w(k,{mutationResult:i,queryName:g&&ah(g)||void 0,queryVariables:y});$&&o.push({result:$,dataId:"ROOT_QUERY",query:g,variables:y})}}})}if(o.length>0||t.refetchQueries||t.update||t.onQueryUpdated||t.removeOptimistic){var d=[];if(this.refetchQueries({updateCache:function(f){a||o.forEach(function(w){return f.write(w)});var p=t.update,m=!CO(i)||ca(i)&&!i.hasNext;if(p){if(!a){var S=f.diff({id:"ROOT_MUTATION",query:r.getDocumentInfo(t.document).asQuery,variables:t.variables,optimistic:!1,returnPartialData:!0});S.complete&&(i=L(L({},i),{data:S.result}),"incremental"in i&&delete i.incremental,"hasNext"in i&&delete i.hasNext)}m&&p(f,i,{context:t.context,variables:t.variables})}!a&&!t.keepRootFields&&m&&f.modify({id:"ROOT_MUTATION",fields:function(w,E){var g=E.fieldName,y=E.DELETE;return g==="__typename"?w:y}})},include:t.refetchQueries,optimistic:!1,removeOptimistic:t.removeOptimistic,onQueryUpdated:t.onQueryUpdated||null}).forEach(function(f){return d.push(f)}),t.awaitRefetchQueries||t.onQueryUpdated)return Promise.all(d).then(function(){return i})}return Promise.resolve(i)},e.prototype.markMutationOptimistic=function(t,n){var r=this,i=typeof t=="function"?t(n.variables):t;return this.cache.recordOptimisticTransaction(function(o){try{r.markMutationResult(L(L({},n),{result:{data:i}}),o)}catch(a){globalThis.__DEV__!==!1&&X.error(a)}},n.mutationId)},e.prototype.fetchQuery=function(t,n,r){return this.fetchConcastWithInfo(t,n,r).concast.promise},e.prototype.getQueryStore=function(){var t=Object.create(null);return this.queries.forEach(function(n,r){t[r]={variables:n.variables,networkStatus:n.networkStatus,networkError:n.networkError,graphQLErrors:n.graphQLErrors}}),t},e.prototype.resetErrors=function(t){var n=this.queries.get(t);n&&(n.networkError=void 0,n.graphQLErrors=[])},e.prototype.transform=function(t){return this.documentTransform.transformDocument(t)},e.prototype.getDocumentInfo=function(t){var n=this.transformCache;if(!n.has(t)){var r={hasClientExports:F5(t),hasForcedResolvers:this.localState.shouldForceResolvers(t),hasNonreactiveDirective:fl(["nonreactive"],t),clientQuery:this.localState.clientQuery(t),serverQuery:G$([{name:"client",remove:!0},{name:"connection"},{name:"nonreactive"}],t),defaultVars:dy(jl(t)),asQuery:L(L({},t),{definitions:t.definitions.map(function(i){return i.kind==="OperationDefinition"&&i.operation!=="query"?L(L({},i),{operation:"query"}):i})})};n.set(t,r)}return n.get(t)},e.prototype.getVariables=function(t,n){return L(L({},this.getDocumentInfo(t).defaultVars),n)},e.prototype.watchQuery=function(t){var n=this.transform(t.query);t=L(L({},t),{variables:this.getVariables(n,t.variables)}),typeof t.notifyOnNetworkStatusChange>"u"&&(t.notifyOnNetworkStatusChange=!1);var r=new Up(this),i=new bh({queryManager:this,queryInfo:r,options:t});return i.lastQuery=n,this.queries.set(i.queryId,r),r.init({document:n,observableQuery:i,variables:i.variables}),i},e.prototype.query=function(t,n){var r=this;return n===void 0&&(n=this.generateQueryId()),X(t.query,26),X(t.query.kind==="Document",27),X(!t.returnPartialData,28),X(!t.pollInterval,29),this.fetchQuery(n,L(L({},t),{query:this.transform(t.query)})).finally(function(){return r.stopQuery(n)})},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(t){this.stopQueryInStoreNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(t){var n=this.queries.get(t);n&&n.stop()},e.prototype.clearStore=function(t){return t===void 0&&(t={discardWatches:!0}),this.cancelPendingFetches(Rt(30)),this.queries.forEach(function(n){n.observableQuery?n.networkStatus=pe.loading:n.stop()}),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(t)},e.prototype.getObservableQueries=function(t){var n=this;t===void 0&&(t="active");var r=new Map,i=new Map,o=new Set;return Array.isArray(t)&&t.forEach(function(a){typeof a=="string"?i.set(a,!1):Y5(a)?i.set(n.transform(a),!1):Oe(a)&&a.query&&o.add(a)}),this.queries.forEach(function(a,l){var c=a.observableQuery,u=a.document;if(c){if(t==="all"){r.set(l,c);return}var d=c.queryName,f=c.options.fetchPolicy;if(f==="standby"||t==="active"&&!c.hasObservers())return;(t==="active"||d&&i.has(d)||u&&i.has(u))&&(r.set(l,c),d&&i.set(d,!0),u&&i.set(u,!0))}}),o.size&&o.forEach(function(a){var l=th("legacyOneTimeQuery"),c=n.getQuery(l).init({document:a.query,variables:a.variables}),u=new bh({queryManager:n,queryInfo:c,options:L(L({},a),{fetchPolicy:"network-only"})});X(u.queryId===l),c.setObservableQuery(u),r.set(l,u)}),globalThis.__DEV__!==!1&&i.size&&i.forEach(function(a,l){a||globalThis.__DEV__!==!1&&X.warn(typeof l=="string"?31:32,l)}),r},e.prototype.reFetchObservableQueries=function(t){var n=this;t===void 0&&(t=!1);var r=[];return this.getObservableQueries(t?"all":"active").forEach(function(i,o){var a=i.options.fetchPolicy;i.resetLastResults(),(t||a!=="standby"&&a!=="cache-only")&&r.push(i.refetch()),n.getQuery(o).setDiff(null)}),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(t){this.getQuery(t.queryId).setObservableQuery(t)},e.prototype.startGraphQLSubscription=function(t){var n=this,r=t.query,i=t.fetchPolicy,o=t.errorPolicy,a=t.variables,l=t.context,c=l===void 0?{}:l;r=this.transform(r),a=this.getVariables(r,a);var u=function(f){return n.getObservableFromLink(r,c,f).map(function(p){i!=="no-cache"&&(kh(p,o)&&n.cache.write({query:r,result:p.data,dataId:"ROOT_SUBSCRIPTION",variables:f}),n.broadcastQueries());var m=ru(p),S=GO(p);if(m||S){var w={};throw m&&(w.graphQLErrors=p.errors),S&&(w.protocolErrors=p.extensions[xy]),new ti(w)}return p})};if(this.getDocumentInfo(r).hasClientExports){var d=this.localState.addExportedVariables(r,a,c).then(u);return new ke(function(f){var p=null;return d.then(function(m){return p=m.subscribe(f)},f.error),function(){return p&&p.unsubscribe()}})}return u(a)},e.prototype.stopQuery=function(t){this.stopQueryNoBroadcast(t),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(t){this.stopQueryInStoreNoBroadcast(t),this.removeQuery(t)},e.prototype.removeQuery=function(t){this.fetchCancelFns.delete(t),this.queries.has(t)&&(this.getQuery(t).stop(),this.queries.delete(t))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach(function(t){return t.notify()})},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(t,n,r,i){var o=this,a;i===void 0&&(i=(a=n==null?void 0:n.queryDeduplication)!==null&&a!==void 0?a:this.queryDeduplication);var l,c=this.getDocumentInfo(t),u=c.serverQuery,d=c.clientQuery;if(u){var f=this,p=f.inFlightLinkObservables,m=f.link,S={query:u,variables:r,operationName:ah(u)||void 0,context:this.prepareContext(L(L({},n),{forceFetch:!i}))};if(n=S.context,i){var w=fy(u),E=p.get(w)||new Map;p.set(w,E);var g=Yi(r);if(l=E.get(g),!l){var y=new Do([fh(m,S)]);E.set(g,l=y),y.beforeNext(function(){E.delete(g)&&E.size<1&&p.delete(w)})}}else l=new Do([fh(m,S)])}else l=new Do([ke.of({data:{}})]),n=this.prepareContext(n);return d&&(l=jp(l,function(v){return o.localState.runResolvers({document:d,remoteResult:v,context:n,variables:r})})),l},e.prototype.getResultsFromLink=function(t,n,r){var i=t.lastRequestId=this.generateRequestId(),o=this.cache.transformForLink(r.query);return jp(this.getObservableFromLink(o,r.context,r.variables),function(a){var l=uh(a),c=l.length>0;if(i>=t.lastRequestId){if(c&&r.errorPolicy==="none")throw t.markError(new ti({graphQLErrors:l}));t.markResult(a,o,r,n),t.markReady()}var u={data:a.data,loading:!1,networkStatus:pe.ready};return c&&r.errorPolicy!=="ignore"&&(u.errors=l,u.networkStatus=pe.error),u},function(a){var l=HO(a)?a:new ti({networkError:a});throw i>=t.lastRequestId&&t.markError(l),l})},e.prototype.fetchConcastWithInfo=function(t,n,r){var i=this;r===void 0&&(r=pe.loading);var o=n.query,a=this.getVariables(o,n.variables),l=this.getQuery(t),c=this.defaultOptions.watchQuery,u=n.fetchPolicy,d=u===void 0?c&&c.fetchPolicy||"cache-first":u,f=n.errorPolicy,p=f===void 0?c&&c.errorPolicy||"none":f,m=n.returnPartialData,S=m===void 0?!1:m,w=n.notifyOnNetworkStatusChange,E=w===void 0?!1:w,g=n.context,y=g===void 0?{}:g,v=Object.assign({},n,{query:o,variables:a,fetchPolicy:d,errorPolicy:p,returnPartialData:S,notifyOnNetworkStatusChange:E,context:y}),k=function(N){v.variables=N;var R=i.fetchQueryByPolicy(l,v,r);return v.fetchPolicy!=="standby"&&R.sources.length>0&&l.observableQuery&&l.observableQuery.applyNextFetchPolicy("after-fetch",n),R},T=function(){return i.fetchCancelFns.delete(t)};this.fetchCancelFns.set(t,function(N){T(),setTimeout(function(){return $.cancel(N)})});var $,I;if(this.getDocumentInfo(v.query).hasClientExports)$=new Do(this.localState.addExportedVariables(v.query,v.variables,v.context).then(k).then(function(N){return N.sources})),I=!0;else{var j=k(v.variables);I=j.fromLink,$=new Do(j.sources)}return $.promise.then(T,T),{concast:$,fromLink:I}},e.prototype.refetchQueries=function(t){var n=this,r=t.updateCache,i=t.include,o=t.optimistic,a=o===void 0?!1:o,l=t.removeOptimistic,c=l===void 0?a?th("refetchQueries"):void 0:l,u=t.onQueryUpdated,d=new Map;i&&this.getObservableQueries(i).forEach(function(p,m){d.set(m,{oq:p,lastDiff:n.getQuery(m).getDiff()})});var f=new Map;return r&&this.cache.batch({update:r,optimistic:a&&c||!1,removeOptimistic:c,onWatchUpdated:function(p,m,S){var w=p.watcher instanceof Up&&p.watcher.observableQuery;if(w){if(u){d.delete(w.queryId);var E=u(w,m,S);return E===!0&&(E=w.refetch()),E!==!1&&f.set(w,E),E}u!==null&&d.set(w.queryId,{oq:w,lastDiff:S,diff:m})}}}),d.size&&d.forEach(function(p,m){var S=p.oq,w=p.lastDiff,E=p.diff,g;if(u){if(!E){var y=S.queryInfo;y.reset(),E=y.getDiff()}g=u(S,E,w)}(!u||g===!0)&&(g=S.refetch()),g!==!1&&f.set(S,g),m.indexOf("legacyOneTimeQuery")>=0&&n.stopQueryNoBroadcast(m)}),c&&this.cache.removeOptimistic(c),f},e.prototype.fetchQueryByPolicy=function(t,n,r){var i=this,o=n.query,a=n.variables,l=n.fetchPolicy,c=n.refetchWritePolicy,u=n.errorPolicy,d=n.returnPartialData,f=n.context,p=n.notifyOnNetworkStatusChange,m=t.networkStatus;t.init({document:o,variables:a,networkStatus:r});var S=function(){return t.getDiff(a)},w=function(k,T){T===void 0&&(T=t.networkStatus||pe.loading);var $=k.result;globalThis.__DEV__!==!1&&!d&&!Ae($,{})&&ET(k.missing);var I=function(j){return ke.of(L({data:j,loading:gl(T),networkStatus:T},k.complete?null:{partial:!0}))};return $&&i.getDocumentInfo(o).hasForcedResolvers?i.localState.runResolvers({document:o,remoteResult:{data:$},context:f,variables:a,onlyRunForcedResolvers:!0}).then(function(j){return I(j.data||void 0)}):u==="none"&&T===pe.refetch&&Array.isArray(k.missing)?I(void 0):I($)},E=l==="no-cache"?0:r===pe.refetch&&c!=="merge"?1:2,g=function(){return i.getResultsFromLink(t,E,{query:o,variables:a,context:f,fetchPolicy:l,errorPolicy:u})},y=p&&typeof m=="number"&&m!==r&&gl(r);switch(l){default:case"cache-first":{var v=S();return v.complete?{fromLink:!1,sources:[w(v,t.markReady())]}:d||y?{fromLink:!0,sources:[w(v),g()]}:{fromLink:!0,sources:[g()]}}case"cache-and-network":{var v=S();return v.complete||d||y?{fromLink:!0,sources:[w(v),g()]}:{fromLink:!0,sources:[g()]}}case"cache-only":return{fromLink:!1,sources:[w(S(),t.markReady())]};case"network-only":return y?{fromLink:!0,sources:[w(S()),g()]}:{fromLink:!0,sources:[g()]};case"no-cache":return y?{fromLink:!0,sources:[w(t.getDiff()),g()]}:{fromLink:!0,sources:[g()]};case"standby":return{fromLink:!1,sources:[]}}},e.prototype.getQuery=function(t){return t&&!this.queries.has(t)&&this.queries.set(t,new Up(this,t)),this.queries.get(t)},e.prototype.prepareContext=function(t){t===void 0&&(t={});var n=this.localState.prepareContext(t);return L(L({},n),{clientAwareness:this.clientAwareness})},e}(),q1=!1,ZR=function(){function e(t){var n=this;if(this.resetStoreCallbacks=[],this.clearStoreCallbacks=[],!t.cache)throw Rt(13);var r=t.uri,i=t.credentials,o=t.headers,a=t.cache,l=t.documentTransform,c=t.ssrMode,u=c===void 0?!1:c,d=t.ssrForceFetchDelay,f=d===void 0?0:d,p=t.connectToDevTools,m=p===void 0?typeof window=="object"&&!window.__APOLLO_CLIENT__&&globalThis.__DEV__!==!1:p,S=t.queryDeduplication,w=S===void 0?!0:S,E=t.defaultOptions,g=t.assumeImmutableResults,y=g===void 0?a.assumeImmutableResults:g,v=t.resolvers,k=t.typeDefs,T=t.fragmentMatcher,$=t.name,I=t.version,j=t.link;if(j||(j=r?new lR({uri:r,credentials:i,headers:o}):ji.empty()),this.link=j,this.cache=a,this.disableNetworkFetches=u||f>0,this.queryDeduplication=w,this.defaultOptions=E||Object.create(null),this.typeDefs=k,f&&setTimeout(function(){return n.disableNetworkFetches=!1},f),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),m&&typeof window=="object"&&(window.__APOLLO_CLIENT__=this),!q1&&m&&globalThis.__DEV__!==!1&&(q1=!0,typeof window<"u"&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)){var N=window.navigator,R=N&&N.userAgent,K=void 0;typeof R=="string"&&(R.indexOf("Chrome/")>-1?K="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":R.indexOf("Firefox/")>-1&&(K="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),K&&globalThis.__DEV__!==!1&&X.log("Download the Apollo DevTools for a better development experience: %s",K)}this.version=iy,this.localState=new $T({cache:a,client:this,resolvers:v,fragmentMatcher:T}),this.queryManager=new XR({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,documentTransform:l,queryDeduplication:w,ssrMode:u,clientAwareness:{name:$,version:I},localState:this.localState,assumeImmutableResults:y,onBroadcast:m?function(){n.devToolsHookCb&&n.devToolsHookCb({action:{},state:{queries:n.queryManager.getQueryStore(),mutations:n.queryManager.mutationStore||{}},dataWithOptimisticResults:n.cache.extract(!0)})}:void 0})}return Object.defineProperty(e.prototype,"documentTransform",{get:function(){return this.queryManager.documentTransform},enumerable:!1,configurable:!0}),e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(t){return this.defaultOptions.watchQuery&&(t=iu(this.defaultOptions.watchQuery,t)),this.disableNetworkFetches&&(t.fetchPolicy==="network-only"||t.fetchPolicy==="cache-and-network")&&(t=L(L({},t),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(t)},e.prototype.query=function(t){return this.defaultOptions.query&&(t=iu(this.defaultOptions.query,t)),X(t.fetchPolicy!=="cache-and-network",14),this.disableNetworkFetches&&t.fetchPolicy==="network-only"&&(t=L(L({},t),{fetchPolicy:"cache-first"})),this.queryManager.query(t)},e.prototype.mutate=function(t){return this.defaultOptions.mutate&&(t=iu(this.defaultOptions.mutate,t)),this.queryManager.mutate(t)},e.prototype.subscribe=function(t){return this.queryManager.startGraphQLSubscription(t)},e.prototype.readQuery=function(t,n){return n===void 0&&(n=!1),this.cache.readQuery(t,n)},e.prototype.readFragment=function(t,n){return n===void 0&&(n=!1),this.cache.readFragment(t,n)},e.prototype.writeQuery=function(t){var n=this.cache.writeQuery(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.writeFragment=function(t){var n=this.cache.writeFragment(t);return t.broadcast!==!1&&this.queryManager.broadcastQueries(),n},e.prototype.__actionHookForDevTools=function(t){this.devToolsHookCb=t},e.prototype.__requestRaw=function(t){return fh(this.link,t)},e.prototype.resetStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!1})}).then(function(){return Promise.all(t.resetStoreCallbacks.map(function(n){return n()}))}).then(function(){return t.reFetchObservableQueries()})},e.prototype.clearStore=function(){var t=this;return Promise.resolve().then(function(){return t.queryManager.clearStore({discardWatches:!0})}).then(function(){return Promise.all(t.clearStoreCallbacks.map(function(n){return n()}))})},e.prototype.onResetStore=function(t){var n=this;return this.resetStoreCallbacks.push(t),function(){n.resetStoreCallbacks=n.resetStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.onClearStore=function(t){var n=this;return this.clearStoreCallbacks.push(t),function(){n.clearStoreCallbacks=n.clearStoreCallbacks.filter(function(r){return r!==t})}},e.prototype.reFetchObservableQueries=function(t){return this.queryManager.reFetchObservableQueries(t)},e.prototype.refetchQueries=function(t){var n=this.queryManager.refetchQueries(t),r=[],i=[];n.forEach(function(a,l){r.push(l),i.push(a)});var o=Promise.all(i);return o.queries=r,o.results=i,o.catch(function(a){globalThis.__DEV__!==!1&&X.debug(15,a)}),o},e.prototype.getObservableQueries=function(t){return t===void 0&&(t="active"),this.queryManager.getObservableQueries(t)},e.prototype.extract=function(t){return this.cache.extract(t)},e.prototype.restore=function(t){return this.cache.restore(t)},e.prototype.addResolvers=function(t){this.localState.addResolvers(t)},e.prototype.setResolvers=function(t){this.localState.setResolvers(t)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(t){this.localState.setFragmentMatcher(t)},e.prototype.setLink=function(t){this.link=this.queryManager.link=t},e}(),su=new Map,Eh=new Map,TT=!0,Wu=!1;function _T(e){return e.replace(/[\s,]+/g," ").trim()}function JR(e){return _T(e.source.body.substring(e.start,e.end))}function eD(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var i=r.name.value,o=JR(r.loc),a=Eh.get(i);a&&!a.has(o)?TT&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):a||Eh.set(i,a=new Set),a.add(o),t.has(o)||(t.add(o),n.push(r))}else n.push(r)}),L(L({},e),{definitions:n})}function tD(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(i){var o=r[i];o&&typeof o=="object"&&t.add(o)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function nD(e){var t=_T(e);if(!su.has(t)){var n=C5(e,{experimentalFragmentVariables:Wu,allowLegacyFragmentVariables:Wu});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");su.set(t,tD(eD(n)))}return su.get(t)}function Ta(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(i,o){i&&i.kind==="Document"?r+=i.loc.source.body:r+=i,r+=e[o+1]}),nD(r)}function rD(){su.clear(),Eh.clear()}function iD(){TT=!1}function oD(){Wu=!0}function aD(){Wu=!1}var Ss={gql:Ta,resetCaches:rD,disableFragmentWarnings:iD,enableExperimentalFragmentVariables:oD,disableExperimentalFragmentVariables:aD};(function(e){e.gql=Ss.gql,e.resetCaches=Ss.resetCaches,e.disableFragmentWarnings=Ss.disableFragmentWarnings,e.enableExperimentalFragmentVariables=Ss.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Ss.disableExperimentalFragmentVariables})(Ta||(Ta={}));Ta.default=Ta;const _=Ta;var Y1=cy?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function Ty(){X("createContext"in dg,43);var e=x.createContext[Y1];return e||(Object.defineProperty(x.createContext,Y1,{value:e=x.createContext({}),enumerable:!1,writable:!1,configurable:!0}),e.displayName="ApolloContext"),e}var sD=function(e){var t=e.client,n=e.children,r=Ty(),i=x.useContext(r),o=x.useMemo(function(){return L(L({},i),{client:t||i.client})},[i,t]);return X(o.client,44),x.createElement(r.Provider,{value:o},n)};function lD(e){var t=x.useContext(Ty()),n=e||t.client;return X(!!n,47),n}var K1=!1,cD="useSyncExternalStore",uD=dg[cD],dD=uD||function(e,t,n){var r=t();globalThis.__DEV__!==!1&&!K1&&r!==t()&&(K1=!0,globalThis.__DEV__!==!1&&X.error(56));var i=x.useState({inst:{value:r,getSnapshot:t}}),o=i[0].inst,a=i[1];return Q5?x.useLayoutEffect(function(){Object.assign(o,{value:r,getSnapshot:t}),zp(o)&&a({inst:o})},[e,r,t]):Object.assign(o,{value:r,getSnapshot:t}),x.useEffect(function(){return zp(o)&&a({inst:o}),e(function(){zp(o)&&a({inst:o})})},[e]),r};function zp(e){var t=e.value,n=e.getSnapshot;try{return t!==n()}catch{return!0}}var Nr;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(Nr||(Nr={}));var X1=new Map;function Z1(e){var t;switch(e){case Nr.Query:t="Query";break;case Nr.Mutation:t="Mutation";break;case Nr.Subscription:t="Subscription";break}return t}function fD(e){var t=X1.get(e);if(t)return t;var n,r,i;X(!!e&&!!e.kind,57,e);for(var o=[],a=[],l=[],c=[],u=0,d=e.definitions;u<d.length;u++){var f=d[u];if(f.kind==="FragmentDefinition"){o.push(f);continue}if(f.kind==="OperationDefinition")switch(f.operation){case"query":a.push(f);break;case"mutation":l.push(f);break;case"subscription":c.push(f);break}}X(!o.length||a.length||l.length||c.length,58),X(a.length+l.length+c.length<=1,59,e,a.length,c.length,l.length),r=a.length?Nr.Query:Nr.Mutation,!a.length&&!l.length&&(r=Nr.Subscription);var p=a.length?a:l.length?l:c;X(p.length===1,60,e,p.length);var m=p[0];n=m.variableDefinitions||[],m.name&&m.name.kind==="Name"?i=m.name.value:i="data";var S={name:i,type:r,variables:n};return X1.set(e,S),S}function pD(e,t){var n=fD(e),r=Z1(t),i=Z1(n.type);X(n.type===t,61,r,r,i)}var mD=Object.prototype.hasOwnProperty;function Jd(e,t){return t===void 0&&(t=Object.create(null)),hD(lD(t.client),e).useQuery(t)}function hD(e,t){var n=x.useRef();(!n.current||e!==n.current.client||t!==n.current.query)&&(n.current=new gD(e,t,n.current));var r=n.current;return r.forceUpdateState=x.useReducer(function(i){return i+1},0)[1],r}var gD=function(){function e(t,n,r){var i=this;this.client=t,this.query=n,this.forceUpdate=function(){return i.forceUpdateState()},this.ssrDisabledResult=pl({loading:!0,data:void 0,error:void 0,networkStatus:pe.loading}),this.skipStandbyResult=pl({loading:!1,data:void 0,error:void 0,networkStatus:pe.ready}),this.toQueryResultCache=new(xr?WeakMap:Map),pD(n,Nr.Query);var o=r&&r.result,a=o&&o.data;a&&(this.previousData=a)}return e.prototype.forceUpdateState=function(){globalThis.__DEV__!==!1&&X.warn(48)},e.prototype.executeQuery=function(t){var n=this,r;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var i=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(o){var a;i.subscribe({next:function(l){a=l},error:function(){o(n.toQueryResult(n.observable.getCurrentResult()))},complete:function(){o(n.toQueryResult(a))}})})},e.prototype.useQuery=function(t){var n=this;this.renderPromises=x.useContext(Ty()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),i=dD(x.useCallback(function(o){if(n.renderPromises)return function(){};n.forceUpdate=o;var a=function(){var u=n.result,d=r.getCurrentResult();u&&u.loading===d.loading&&u.networkStatus===d.networkStatus&&Ae(u.data,d.data)||n.setResult(d)},l=function(u){var d=r.last;c.unsubscribe();try{r.resetLastResults(),c=r.subscribe(a,l)}finally{r.last=d}if(!mD.call(u,"graphQLErrors"))throw u;var f=n.result;(!f||f&&f.loading||!Ae(u,f.error))&&n.setResult({data:f&&f.data,error:u,loading:!1,networkStatus:pe.error})},c=r.subscribe(a,l);return function(){setTimeout(function(){return c.unsubscribe()}),n.forceUpdate=function(){return n.forceUpdateState()}}},[r,this.renderPromises,this.client.disableNetworkFetches]),function(){return n.getCurrentResult()},function(){return n.getCurrentResult()});return this.unsafeHandlePartialRefetch(i),this.toQueryResult(i)},e.prototype.useOptions=function(t){var n,r=this.createWatchQueryOptions(this.queryHookOptions=t),i=this.watchQueryOptions;Ae(r,i)||(this.watchQueryOptions=r,i&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((n=this.result)===null||n===void 0?void 0:n.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},e.prototype.getObsQueryOptions=function(){var t=[],n=this.client.defaultOptions.watchQuery;return n&&t.push(n),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push(ki(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(iu)},e.prototype.createWatchQueryOptions=function(t){var n;t===void 0&&(t={});var r=t.skip;t.ssr,t.onCompleted,t.onError,t.defaultOptions;var i=ur(t,["skip","ssr","onCompleted","onError","defaultOptions"]),o=Object.assign(i,{query:this.query});if(this.renderPromises&&(o.fetchPolicy==="network-only"||o.fetchPolicy==="cache-and-network")&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),r){var a=o.fetchPolicy,l=a===void 0?this.getDefaultFetchPolicy():a,c=o.initialFetchPolicy,u=c===void 0?l:c;Object.assign(o,{initialFetchPolicy:u,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=((n=this.observable)===null||n===void 0?void 0:n.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},e.prototype.getDefaultFetchPolicy=function(){var t,n;return((t=this.queryHookOptions.defaultOptions)===null||t===void 0?void 0:t.fetchPolicy)||((n=this.client.defaultOptions.watchQuery)===null||n===void 0?void 0:n.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(t){},e.prototype.onError=function(t){},e.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=x.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var n=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&n&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},e.prototype.setResult=function(t){var n=this.result;n&&n.data&&(this.previousData=n.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t,n)},e.prototype.handleErrorOrCompleted=function(t,n){var r=this;if(!t.loading){var i=this.toApolloError(t);Promise.resolve().then(function(){i?r.onError(i):t.data&&(n==null?void 0:n.networkStatus)!==t.networkStatus&&t.networkStatus===pe.ready&&r.onCompleted(t.data)}).catch(function(o){globalThis.__DEV__!==!1&&X.warn(o)})}},e.prototype.toApolloError=function(t){return _t(t.errors)?new ti({graphQLErrors:t.errors}):t.error},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(t){var n=this.toQueryResultCache.get(t);if(n)return n;var r=t.data;t.partial;var i=ur(t,["data","partial"]);return this.toQueryResultCache.set(t,n=L(L(L({data:r},i),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!n.error&&_t(t.errors)&&(n.error=new ti({graphQLErrors:t.errors})),n},e.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||Object.keys(t.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(t,{loading:!0,networkStatus:pe.refetch}),this.observable.refetch())},e}();function Et(){return!(typeof window<"u"&&window.document)}const O={window:Et()?global.window||{}:window,document:Et()?{}:document,navigator:Et()?{}:navigator,history:Et()?{}:history,Date,localStorage:Et()?{}:window.localStorage,sessionStorage:Et()?{}:window.sessionStorage,console,Image:Et()?function(){}:Image,MutationObserver:Et()?{}:MutationObserver},YJ=e=>e.filter(({type:t})=>t==="childList").flatMap(({addedNodes:t})=>[...t]),yD={subtree:!0,childList:!0,attributes:!1},vD=({callback:e,node:t=O.window.document.getElementById("root"),options:n=yD})=>{const r=new O.MutationObserver(e);return r.observe(t,n),r},Te=()=>null,CT=e=>Object.entries(e).reduce((t,n)=>({...t,[n[1]]:n[0]}),{}),_y=e=>!!e&&e.toLowerCase().replace(/[_\s]/g,"-"),KJ=e=>e.replace(/[a-z]_[a-z]/g,([t,,n])=>`${t}${n.toUpperCase()}`),XJ=e=>t=>{const n=Object.entries(t).map(([r,i])=>[e(r),i]);return Object.fromEntries(n)},xD=({callbackFn:e,timeout:t})=>{let n=!1;return r=>{n||(e.call(globalThis,r),n=!0,O.window.setTimeout(()=>{n=!1},t))}},SD=()=>{O.window.scrollY>0&&O.window.scrollTo(0,0)},wD=({element:e,offset:t=0})=>{const n=e.getBoundingClientRect().top-t;O.window.scrollY!==n&&O.window.scrollTo({top:n})};function bD({id:e,rootElement:t=O.window.document.getElementById("root"),timeoutDuration:n=2e4}={}){return new Promise((r,i)=>{const o=O.window.document.getElementById(e);if(o){r(o);return}let a;const c=vD({callback:(u,d)=>{const f=O.window.document.getElementById(e);f&&(r(f),d.disconnect(),clearTimeout(a))},node:t});a=O.window.setTimeout(()=>{c.disconnect(),i()},n)})}const Vu=()=>!Et()&&O.window.navigator.userAgent.toLowerCase().indexOf("safari/")>-1&&O.window.navigator.userAgent.toLowerCase().indexOf("chrome/")===-1,Rl="line-height: 0;",kD={ARTICLE:"a",NAVIGATION:"s",AUTO_TOPIC:"t",IMAGE_GALLERY:"g",LIVEBLOG:"live",CLASSIC_AV:"av"},ED=CT(kD),$D=e=>ED[e]||(e==null?void 0:e.toUpperCase()),TD=({url:e})=>{try{return new URL(e).hostname}catch(t){return console.log(`error parsing url : ${e}
`,t),!1}},_D=({from:e=O.window.location.search,value:t})=>new URLSearchParams(e).get(t),CD=/^\//,AT=e=>!CD.test(e),AD=/^(?<protocol>[a-zA-Z])*:\/\/(?<subdomain>[a-zA-Z])*(?<environment>-[a-zA-Z0-9]*)?\.dw\.com/,LT=e=>AD.test(e),LD=({namedUrl:e="/"}={})=>e,J1=(e,t)=>e!=null?`${e}[${t}]`:t,IT=(e,t)=>Object.keys(e).reduce((n,r)=>e[r]?typeof e[r]=="object"?Object.assign(n,IT(e[r],J1(t,r))):Object.assign(n,{[J1(t,r)]:e[r]}):n,{}),ID=e=>{const t=IT(e);return Object.entries(t).map(n=>n.join("=")).join("&")},ef=e=>e.split("?")[0],jT=e=>{const t=e.split("?")[1];return t?`?${t}`:""},OT=(e,{isMobileMode:t=!1}={})=>{let n=null;if(typeof e=="object"){const{pathname:r,search:i=""}=e;n=`${r}${i}`}else n=e;if(t){const r=new URLSearchParams(jT(n));r.delete("mobileApp"),r.append("mobileApp","true"),n=`${ef(n)}?${r.toString()}`}return n},jD=e=>typeof e=="object"?e:{pathname:ef(e),search:jT(e)};var RT={exports:{}},DT={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=x;function OD(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var RD=typeof Object.is=="function"?Object.is:OD,DD=_a.useState,ND=_a.useEffect,PD=_a.useLayoutEffect,FD=_a.useDebugValue;function MD(e,t){var n=t(),r=DD({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return PD(function(){i.value=n,i.getSnapshot=t,Wp(i)&&o({inst:i})},[e,n,t]),ND(function(){return Wp(i)&&o({inst:i}),e(function(){Wp(i)&&o({inst:i})})},[e]),FD(n),n}function Wp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!RD(e,n)}catch{return!0}}function BD(e,t){return t()}var UD=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?BD:MD;DT.useSyncExternalStore=_a.useSyncExternalStore!==void 0?_a.useSyncExternalStore:UD;RT.exports=DT;var zD=RT.exports;const{useEffect:WD,useLayoutEffect:VD,useRef:GD,useInsertionEffect:HD}=dg,QD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",NT=QD?VD:WD,qD=HD||NT,Cy=e=>{const t=GD([e,(...n)=>t[0](...n)]).current;return qD(()=>{t[0]=e}),t[1]},YD=x.createContext(O),ho=()=>x.useContext(YD),KD="popstate",Ay="pushState",Ly="replaceState",XD="hashchange",eS=[KD,Ay,Ly,XD],ZD=e=>(eS.forEach(t=>{O.window.addEventListener(t,e)}),()=>{eS.forEach(t=>{O.window.removeEventListener(t,e)})}),$h=e=>{try{return decodeURIComponent(e)}catch{return e}},JD=(e,t)=>zD.useSyncExternalStore(ZD,e,e),eN=(e,{replace:t=!1,isMobileMode:n=!1,scrollTop:r=!1}={})=>{const i=OT(e,{isMobileMode:n});O.history[t?Ly:Ay](e.state,"",i),r&&SD()},tS=e=>({pathname:$h(e.pathname),search:$h(e.search),hash:e.hash}),De=()=>{const e=ho().window.location,t={},n=tS(e),r=JSON.stringify(n);return t[r]||(t[r]=n),[JD(()=>t[JSON.stringify(tS(e))]),Cy((i,o)=>eN(i,o))]};typeof O.history<"u"&&[Ay,Ly].forEach(e=>{const t=O.history[e];O.history[e]=function(...r){const i=t.apply(this,r),o=new Event(e);return o.arguments=r,dispatchEvent(o),i}});function tN(){const e={},t=n=>{if(!e[n]){const r=new RegExp(`^${n}$`);e[n]={regexp:r}}return e[n]};return(n="(.*)",r)=>{const i=typeof r=="object"?r.pathname:ef(r),{regexp:o}=t(n),a=o.exec(i);return a?[!0,a.groups||{}]:[!1,{}]}}const Th={matcher:tN(),staticContext:{}},PT=x.createContext(Th),tf=()=>x.useContext(PT),nN=e=>{const t=tf(),[n]=De();return t.matcher(e,n)},FT=x.createContext({params:{}}),ot=()=>x.useContext(FT).params,rN=({matcher:e,staticContext:t,children:n})=>s.jsx(PT.Provider,{value:{matcher:e||Th.matcher,staticContext:t||Th.staticContext},children:n}),nS=({params:e,children:t})=>s.jsx(FT.Provider,{value:{params:e},children:t}),yt=({path:e,match:t=[],component:n,children:r})=>{const i=nN(e),[o]=t,[a,l]=i;return!(o||a)&&e?null:n?s.jsx(nS,{params:l,children:x.createElement(n,{params:l})}):s.jsx(nS,{params:l,children:typeof r=="function"?r(l):r})},iN=x.forwardRef(({replace:e,isMobileMode:t,scrollTop:n,...r},i)=>{const[,o]=De(),{to:a,onClick:l,...c}=r,u=typeof a=="object"?`${a.pathname}${a.search}`:a,d=Cy(f=>{f.ctrlKey||f.metaKey||f.altKey||f.shiftKey||f.button!==0||(l&&l(f),f.defaultPrevented||(f.preventDefault(),o(a,{replace:e,isMobileMode:t,scrollTop:n})))});return s.jsx("a",{href:u,onClick:d,ref:i,...c})}),_h=e=>Array.isArray(e)?[].concat(...e.map(t=>t&&t.type===x.Fragment?_h(t.props.children):_h(t))):[e],oN=({children:e,location:t})=>{const{matcher:n}=tf(),[r]=De();for(const i of _h(e)){let o=0;if(x.isValidElement(i)&&(o=i.props.path?n(i.props.path,t||r):[!0,{}])[0])return x.cloneElement(i,{match:o})}return null},ro=e=>{const{to:t}=e,[,n]=De(),r=Cy(()=>n(t,e)),i=tf();return i.staticContext.httpStatus=301,i.staticContext.url=OT(t,e),NT(()=>{r()},[]),null},aN=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));async function sN(){return"serviceWorker"in navigator?(await navigator.serviceWorker.ready).unregister():null}function lN(){"serviceWorker"in navigator&&window.addEventListener("load",async()=>{const e="/service-worker.js";aN?(uN(e),await navigator.serviceWorker.ready,console.log("This web app is being served cache-first by a service worker.")):MT(e);let t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{t?(console.log("Service worker has changed, to avoid issues we will reload the page for you"),window.location.reload()):t=!0})})}function cN(e){e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"})}async function MT(e){try{const t=await navigator.serviceWorker.register(e);t.onupdatefound=()=>{const n=t.installing;n!=null&&(n.onstatechange=()=>{n.state==="installed"&&(navigator.serviceWorker.controller?(cN(t),console.log("New application version is available")):console.log("Content is cached for offline use."))})}}catch(t){console.error("Error during service worker registration:",t)}}async function uN(e){try{const t=await fetch(e,{headers:{"Service-Worker":"script"}}),n=t.headers.get("content-type");t.status===404||n!=null&&n.indexOf("javascript")===-1?(await sN(),window.location.reload()):MT(e)}catch{console.log("No internet connection found. App is running in offline mode.")}}const dN="modulepreload",fN=function(e){return"/"+e},rS={},J=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=fN(o),o in rS)return;rS[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":dN,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};function ZJ(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ce="-ms-",Us="-moz-",ye="-webkit-",Gu="comm",io="rule",nf="decl",pN="@media",BT="@import",mN="@supports",Iy="@keyframes",hN="@layer",gN=Math.abs,jy=String.fromCharCode,Ch=Object.assign;function yN(e,t){return dt(e,0)^45?(((t<<2^dt(e,0))<<2^dt(e,1))<<2^dt(e,2))<<2^dt(e,3):0}function UT(e){return e.trim()}function Lr(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,n){return e.replace(t,n)}function lu(e,t){return e.indexOf(t)}function dt(e,t){return e.charCodeAt(t)|0}function Ca(e,t,n){return e.slice(t,n)}function Mn(e){return e.length}function zT(e){return e.length}function Cs(e,t){return t.push(e),e}function vN(e,t){return e.map(t).join("")}function iS(e,t){return e.filter(function(n){return!Lr(n,t)})}var rf=1,Aa=1,WT=0,kn=0,et=0,za="";function of(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rf,column:Aa,length:a,return:"",siblings:l}}function Kr(e,t){return Ch(of("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Oo(e){for(;e.root;)e=Kr(e.root,{children:[e]});Cs(e,e.siblings)}function xN(){return et}function SN(){return et=kn>0?dt(za,--kn):0,Aa--,et===10&&(Aa=1,rf--),et}function zn(){return et=kn<WT?dt(za,kn++):0,Aa++,et===10&&(Aa=1,rf++),et}function Ki(){return dt(za,kn)}function cu(){return kn}function af(e,t){return Ca(za,e,t)}function Ah(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wN(e){return rf=Aa=1,WT=Mn(za=e),kn=0,[]}function bN(e){return za="",e}function Vp(e){return UT(af(kn-1,Lh(e===91?e+2:e===40?e+1:e)))}function kN(e){for(;(et=Ki())&&et<33;)zn();return Ah(e)>2||Ah(et)>3?"":" "}function EN(e,t){for(;--t&&zn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return af(e,cu()+(t<6&&Ki()==32&&zn()==32))}function Lh(e){for(;zn();)switch(et){case e:return kn;case 34:case 39:e!==34&&e!==39&&Lh(et);break;case 40:e===41&&Lh(e);break;case 92:zn();break}return kn}function $N(e,t){for(;zn()&&e+et!==47+10;)if(e+et===42+42&&Ki()===47)break;return"/*"+af(t,kn-1)+"*"+jy(e===47?e:zn())}function TN(e){for(;!Ah(Ki());)zn();return af(e,kn)}function VT(e){return bN(uu("",null,null,null,[""],e=wN(e),0,[0],e))}function uu(e,t,n,r,i,o,a,l,c){for(var u=0,d=0,f=a,p=0,m=0,S=0,w=1,E=1,g=1,y=0,v="",k=i,T=o,$=r,I=v;E;)switch(S=y,y=zn()){case 40:if(S!=108&&dt(I,f-1)==58){lu(I+=ie(Vp(y),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:I+=Vp(y);break;case 9:case 10:case 13:case 32:I+=kN(S);break;case 92:I+=EN(cu()-1,7);continue;case 47:switch(Ki()){case 42:case 47:Cs(_N($N(zn(),cu()),t,n,c),c);break;default:I+="/"}break;case 123*w:l[u++]=Mn(I)*g;case 125*w:case 59:case 0:switch(y){case 0:case 125:E=0;case 59+d:g==-1&&(I=ie(I,/\f/g,"")),m>0&&Mn(I)-f&&Cs(m>32?aS(I+";",r,n,f-1,c):aS(ie(I," ","")+";",r,n,f-2,c),c);break;case 59:I+=";";default:if(Cs($=oS(I,t,n,u,d,i,l,v,k=[],T=[],f,o),o),y===123)if(d===0)uu(I,t,$,$,k,o,f,l,T);else switch(p===99&&dt(I,3)===110?100:p){case 100:case 108:case 109:case 115:uu(e,$,$,r&&Cs(oS(e,$,$,0,0,i,l,v,i,k=[],f,T),T),i,T,f,l,r?k:T);break;default:uu(I,$,$,$,[""],T,0,l,T)}}u=d=m=0,w=g=1,v=I="",f=a;break;case 58:f=1+Mn(I),m=S;default:if(w<1){if(y==123)--w;else if(y==125&&w++==0&&SN()==125)continue}switch(I+=jy(y),y*w){case 38:g=d>0?1:(I+="\f",-1);break;case 44:l[u++]=(Mn(I)-1)*g,g=1;break;case 64:Ki()===45&&(I+=Vp(zn())),p=Ki(),d=f=Mn(v=I+=TN(cu())),y++;break;case 45:S===45&&Mn(I)==2&&(w=0)}}return o}function oS(e,t,n,r,i,o,a,l,c,u,d,f){for(var p=i-1,m=i===0?o:[""],S=zT(m),w=0,E=0,g=0;w<r;++w)for(var y=0,v=Ca(e,p+1,p=gN(E=a[w])),k=e;y<S;++y)(k=UT(E>0?m[y]+" "+v:ie(v,/&\f/g,m[y])))&&(c[g++]=k);return of(e,t,n,i===0?io:l,c,u,d,f)}function _N(e,t,n,r){return of(e,t,n,Gu,jy(xN()),Ca(e,2,-2),0,r)}function aS(e,t,n,r,i){return of(e,t,n,nf,Ca(e,0,r),Ca(e,r+1,-1),r,i)}function GT(e,t,n){switch(yN(e,t)){case 5103:return ye+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+e+e;case 4789:return Us+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+e+Us+e+Ce+e+e;case 5936:switch(dt(e,t+11)){case 114:return ye+e+Ce+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ye+e+Ce+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ye+e+Ce+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ye+e+Ce+e+e;case 6165:return ye+e+Ce+"flex-"+e+e;case 5187:return ye+e+ie(e,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Ce+"flex-$1$2")+e;case 5443:return ye+e+Ce+"flex-item-"+ie(e,/flex-|-self/g,"")+(Lr(e,/flex-|baseline/)?"":Ce+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return ye+e+Ce+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return ye+e+Ce+ie(e,"shrink","negative")+e;case 5292:return ye+e+Ce+ie(e,"basis","preferred-size")+e;case 6060:return ye+"box-"+ie(e,"-grow","")+ye+e+Ce+ie(e,"grow","positive")+e;case 4554:return ye+ie(e,/([^-])(transform)/g,"$1"+ye+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+e+e;case 4200:if(!Lr(e,/flex-|baseline/))return Ce+"grid-column-align"+Ca(e,t)+e;break;case 2592:case 3360:return Ce+ie(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Lr(r.props,/grid-\w+-end/)})?~lu(e+(n=n[t].value),"span")?e:Ce+ie(e,"-start","")+e+Ce+"grid-row-span:"+(~lu(n,"span")?Lr(n,/\d+/):+Lr(n,/\d+/)-+Lr(e,/\d+/))+";":Ce+ie(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Lr(r.props,/grid-\w+-start/)})?e:Ce+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,ye+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mn(e)-1-t>6)switch(dt(e,t+1)){case 109:if(dt(e,t+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+Us+(dt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lu(e,"stretch")?GT(ie(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,c,u){return Ce+i+":"+o+u+(a?Ce+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(dt(e,t+6)===121)return ie(e,":",":"+ye)+e;break;case 6444:switch(dt(e,dt(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(dt(e,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Ce+"$2box$3")+e;case 100:return ie(e,":",":"+Ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function yl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function CN(e,t,n,r){switch(e.type){case hN:if(e.children.length)break;case BT:case nf:return e.return=e.return||e.value;case Gu:return"";case Iy:return e.return=e.value+"{"+yl(e.children,r)+"}";case io:if(!Mn(e.value=e.props.join(",")))return""}return Mn(n=yl(e.children,r))?e.return=e.value+"{"+n+"}":""}function AN(e){var t=zT(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function LN(e){return function(t){t.root||(t=t.return)&&e(t)}}function IN(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case nf:e.return=GT(e.value,e.length,n);return;case Iy:return yl([Kr(e,{value:ie(e.value,"@","@"+ye)})],r);case io:if(e.length)return vN(n=e.props,function(i){switch(Lr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Oo(Kr(e,{props:[ie(i,/:(read-\w+)/,":"+Us+"$1")]})),Oo(Kr(e,{props:[i]})),Ch(e,{props:iS(n,r)});break;case"::placeholder":Oo(Kr(e,{props:[ie(i,/:(plac\w+)/,":"+ye+"input-$1")]})),Oo(Kr(e,{props:[ie(i,/:(plac\w+)/,":"+Us+"$1")]})),Oo(Kr(e,{props:[ie(i,/:(plac\w+)/,Ce+"input-$1")]})),Oo(Kr(e,{props:[i]})),Ch(e,{props:iS(n,r)});break}return""})}}var jN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},La=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Oy=typeof window<"u"&&"HTMLElement"in window,ON=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),RN={},sf=Object.freeze([]),Ia=Object.freeze({});function HT(e,t,n){return n===void 0&&(n=Ia),e.theme!==n.theme&&e.theme||t||n.theme}var QT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),DN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,NN=/(^-|-$)/g;function sS(e){return e.replace(DN,"-").replace(NN,"")}var PN=/(a)(d)/gi,lS=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ih(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lS(t%52)+n;return(lS(t%52)+n).replace(PN,"$1-$2")}var Gp,Jo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},qT=function(e){return Jo(5381,e)};function Ry(e){return Ih(qT(e)>>>0)}function FN(e){return e.displayName||e.name||"Component"}function Hp(e){return typeof e=="string"&&!0}var YT=typeof Symbol=="function"&&Symbol.for,KT=YT?Symbol.for("react.memo"):60115,MN=YT?Symbol.for("react.forward_ref"):60112,BN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},UN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},XT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zN=((Gp={})[MN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gp[KT]=XT,Gp);function cS(e){return("type"in(t=e)&&t.type.$$typeof)===KT?XT:"$$typeof"in e?zN[e.$$typeof]:BN;var t}var WN=Object.defineProperty,VN=Object.getOwnPropertyNames,uS=Object.getOwnPropertySymbols,GN=Object.getOwnPropertyDescriptor,HN=Object.getPrototypeOf,dS=Object.prototype;function ZT(e,t,n){if(typeof t!="string"){if(dS){var r=HN(t);r&&r!==dS&&ZT(e,r,n)}var i=VN(t);uS&&(i=i.concat(uS(t)));for(var o=cS(e),a=cS(t),l=0;l<i.length;++l){var c=i[l];if(!(c in UN||n&&n[c]||a&&c in a||o&&c in o)){var u=GN(t,c);try{WN(e,c,u)}catch{}}}}return e}function ja(e){return typeof e=="function"}function Dy(e){return typeof e=="object"&&"styledComponentId"in e}function Hi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function vl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function jh(e,t,n){if(n===void 0&&(n=!1),!n&&!vl(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=jh(e[r],t[r]);else if(vl(t))for(var r in t)e[r]=jh(e[r],t[r]);return e}function Ny(e,t){Object.defineProperty(e,"toString",{value:t})}function Dl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var QN=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Dl(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),c=(a=0,n.length);a<c;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),du=new Map,Qu=new Map,Qp=1,Oc=function(e){if(du.has(e))return du.get(e);for(;Qu.has(Qp);)Qp++;var t=Qp++;return du.set(e,t),Qu.set(t,e),t},qN=function(e,t){du.set(e,t),Qu.set(t,e)},YN="style[".concat(La,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),KN=new RegExp("^".concat(La,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),XN=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},ZN=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var c=l.match(KN);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(qN(d,u),XN(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function JN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var JT=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(La,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(La,"active"),r.setAttribute("data-styled-version","6.0.7");var a=JN();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},e4=function(){function e(t){this.element=JT(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Dl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),t4=function(){function e(t){this.element=JT(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),n4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),fS=Oy,r4={isServer:!Oy,useCSSOMInjection:!ON},qu=function(){function e(t,n,r){t===void 0&&(t=Ia),n===void 0&&(n={});var i=this;this.options=L(L({},r4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Oy&&fS&&(fS=!1,function(o){for(var a=document.querySelectorAll(YN),l=0,c=a.length;l<c;l++){var u=a[l];u&&u.getAttribute(La)!=="active"&&(ZN(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ny(this,function(){return function(o){for(var a=o.getTag(),l=a.length,c="",u=function(f){var p=function(g){return Qu.get(g)}(f);if(p===void 0)return"continue";var m=o.names.get(p),S=a.getGroup(f);if(m===void 0||S.length===0)return"continue";var w="".concat(La,".g").concat(f,'[id="').concat(p,'"]'),E="";m!==void 0&&m.forEach(function(g){g.length>0&&(E+="".concat(g,","))}),c+="".concat(S).concat(w,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return Oc(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(L(L({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new n4(i):r?new e4(i):new t4(i)}(this.options),new QN(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oc(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oc(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),i4=/&/g,o4=/^\s*\/\/.*$/gm;function e_(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=e_(n.children,t)),n})}function t_(e){var t,n,r,i=e===void 0?Ia:e,o=i.options,a=o===void 0?Ia:o,l=i.plugins,c=l===void 0?sf:l,u=function(p,m,S){return S===n||S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):p},d=c.slice();d.push(function(p){p.type===io&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(i4,n).replace(r,u))}),a.prefix&&d.push(IN),d.push(CN);var f=function(p,m,S,w){m===void 0&&(m=""),S===void 0&&(S=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var E=p.replace(o4,""),g=VT(S||m?"".concat(S," ").concat(m," { ").concat(E," }"):E);a.namespace&&(g=e_(g,a.namespace));var y=[];return yl(g,AN(d.concat(LN(function(v){return y.push(v)})))),y};return f.hash=c.length?c.reduce(function(p,m){return m.name||Dl(15),Jo(p,m.name)},5381).toString():"",f}var a4=new qu,Oh=t_(),Py=rt.createContext({shouldForwardProp:void 0,styleSheet:a4,stylis:Oh});Py.Consumer;var s4=rt.createContext(void 0);function Yu(){return x.useContext(Py)}function l4(e){var t=x.useState(e.stylisPlugins),n=t[0],r=t[1],i=Yu().styleSheet,o=x.useMemo(function(){var l=i;return e.sheet?l=e.sheet:e.target&&(l=l.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[e.disableCSSOMInjection,e.sheet,e.target,i]),a=x.useMemo(function(){return t_({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);return x.useEffect(function(){k$(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]),rt.createElement(Py.Provider,{value:{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:a}},rt.createElement(s4.Provider,{value:a},e.children))}var n_=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Oh);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ny(this,function(){throw Dl(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Oh),this.name+t.hash},e}(),c4=function(e){return e>="A"&&e<="Z"};function pS(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;c4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var r_=function(e){return e==null||e===!1||e===""},i_=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!r_(o)&&(Array.isArray(o)&&o.isCss||ja(o)?r.push("".concat(pS(i),":"),o,";"):vl(o)?r.push.apply(r,Yt(Yt(["".concat(i," {")],i_(o),!1),["}"],!1)):r.push("".concat(pS(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jN||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yi(e,t,n,r){if(r_(e))return[];if(Dy(e))return[".".concat(e.styledComponentId)];if(ja(e)){if(!ja(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yi(i,t,n,r)}var o;return e instanceof n_?n?(e.inject(n,r),[e.getName(r)]):[e]:vl(e)?i_(e):Array.isArray(e)?Array.prototype.concat.apply(sf,e.map(function(a){return yi(a,t,n,r)})):[e.toString()]}function o_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ja(n)&&!Dy(n))return!1}return!0}var u4=qT("6.0.7"),d4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&o_(t),this.componentId=n,this.baseHash=Jo(u4,n),this.baseStyle=r,qu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Hi(i,this.staticRulesId);else{var o=Hu(yi(this.rules,t,n,r)),a=Ih(Jo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=Hi(i,a),this.staticRulesId=a}else{for(var c=Jo(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=Hu(yi(f,t,n,r));c=Jo(c,p),u+=p}}if(u){var m=Ih(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(u,".".concat(m),void 0,this.componentId)),i=Hi(i,m)}}return i},e}(),Fy=rt.createContext(void 0);Fy.Consumer;var qp={};function f4(e,t,n){var r=Dy(e),i=e,o=!Hp(e),a=t.attrs,l=a===void 0?sf:a,c=t.componentId,u=c===void 0?function(v,k){var T=typeof v!="string"?"sc":sS(v);qp[T]=(qp[T]||0)+1;var $="".concat(T,"-").concat(Ry("6.0.7"+T+qp[T]));return k?"".concat(k,"-").concat($):$}(t.displayName,t.parentComponentId):c,d=t.displayName;d===void 0&&function(v){return Hp(v)?"styled.".concat(v):"Styled(".concat(FN(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(sS(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var S=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;m=function(v,k){return S(v,k)&&w(v,k)}}else m=S}var E=new d4(n,f,r?i.componentStyle:void 0);function g(v,k){return function(T,$,I){var j=T.attrs,N=T.componentStyle,R=T.defaultProps,K=T.foldedComponentIds,ce=T.styledComponentId,le=T.target,Ye=rt.useContext(Fy),Ke=Yu(),Xe=T.shouldForwardProp||Ke.shouldForwardProp,Ie=function(Lt,lt,tr){for(var It,Bt=L(L({},lt),{className:void 0,theme:tr}),os=0;os<Lt.length;os+=1){var Ao=ja(It=Lt[os])?It(Bt):It;for(var nr in Ao)Bt[nr]=nr==="className"?Hi(Bt[nr],Ao[nr]):nr==="style"?L(L({},Bt[nr]),Ao[nr]):Ao[nr]}return lt.className&&(Bt.className=Hi(Bt.className,lt.className)),Bt}(j,$,HT($,Ye,R)||Ia),F=Ie.as||le,W={};for(var ee in Ie)Ie[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"||(ee==="forwardedAs"?W.as=Ie.forwardedAs:Xe&&!Xe(ee,F)||(W[ee]=Ie[ee]));var ve=function(Lt,lt){var tr=Yu(),It=Lt.generateAndInjectStyles(lt,tr.styleSheet,tr.stylis);return It}(N,Ie),ge=Hi(K,ce);return ve&&(ge+=" "+ve),Ie.className&&(ge+=" "+Ie.className),W[Hp(F)&&!QT.has(F)?"class":"className"]=ge,W.ref=I,x.createElement(F,W)}(y,v,k)}var y=rt.forwardRef(g);return y.attrs=p,y.componentStyle=E,y.shouldForwardProp=m,y.foldedComponentIds=r?Hi(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=f,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(k){for(var T=[],$=1;$<arguments.length;$++)T[$-1]=arguments[$];for(var I=0,j=T;I<j.length;I++)jh(k,j[I],!0);return k}({},i.defaultProps,v):v}}),Ny(y,function(){return".".concat(y.styledComponentId)}),o&&ZT(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function mS(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var hS=function(e){return Object.assign(e,{isCss:!0})};function M(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ja(e)||vl(e)){var r=e;return hS(yi(mS(sf,Yt([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?yi(i):hS(yi(mS(i,t)))}function Rh(e,t,n){if(n===void 0&&(n=Ia),!t)throw Dl(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,M.apply(void 0,Yt([i],o,!1)))};return r.attrs=function(i){return Rh(e,t,L(L({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Rh(e,t,L(L({},n),i))},r}var a_=function(e){return Rh(f4,e)},h=a_;QT.forEach(function(e){h[e]=a_(e)});var p4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=o_(t),qu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Hu(yi(this.rules,n,r,i)),""),a=this.componentId+t;r.insertRules(a,a,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&qu.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Nl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=M.apply(void 0,Yt([e],t,!1)),i="sc-global-".concat(Ry(JSON.stringify(r))),o=new p4(r,i),a=function(c){var u=Yu(),d=rt.useContext(Fy),f=rt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(f,c,u.styleSheet,d,u.stylis),rt.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,f,p){if(o.isStatic)o.renderStyles(c,RN,d,p);else{var m=L(L({},u),{theme:HT(u,f,a.defaultProps)});o.renderStyles(c,m,d,p)}}return rt.memo(a)}function My(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Hu(M.apply(void 0,Yt([e],t,!1))),i=Ry(r);return new n_(i,r)}var s_={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var c in o)t.call(o,c)&&o[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(s_);var m4=s_.exports;const H=fo(m4),B=Object.freeze({min:Object.freeze({xs:0,sm:576,md:768,lg:992,xl:1200,wide_xl:1600}),max:Object.freeze({xs:575,sm:767,md:991,lg:1199,xl:1599,wide_xl:Number.MAX_SAFE_INTEGER})}),l_=(e,t)=>Object.keys(e).reduce((n,r)=>({...n,[r]:(...i)=>M`
        @media (${t}-width:${e[r]}px) {
          ${M(...i)}
        }
      `}),{}),b=l_(B.min,"min"),dr=l_(B.max,"max"),gS=(e,t)=>(...n)=>M`
  @media (hover: ${e}) and (pointer: ${t})  {
    ${M(...n)}
  }
`,h4=Object.freeze({wide:"16/7",ultraWide:"21/9",square:"1/1",squarish:"4/3"}),g4=({resolutionType:e,size:t,aspectRatioType:n,aspectRatio:r})=>(...i)=>M`
  @media (${e}-width:${t}px) and (${n}-aspect-ratio: ${r}) {
    ${M(...i)}
  }

`,Ku={mouse:gS("hover","fine"),touch:gS("none","coarse")},lf={xl:{ultraWide:g4({size:B.min.xl,resolutionType:"min",aspectRatioType:"min",aspectRatio:h4.wide})}},C=Object.freeze({WHITE:"#FFF",BLACK:"#000",DW_BLUE:"#002D5A",DW_LIGHT_BLUE:"#00A5FF",DW_LIGHT_BLUE_TEXT:"#0096FA",DW_MEDIUM_BLUE:"#0064B4",DW_GREY_01:"#F1F3F5",DW_GREY_02:"#E4E8EB",DW_GREY_03:"#D8DDE2",DW_GREY_04:"#CBD2D8",DW_GREY_05:"#BFC7CE",DW_GREY_06:"#B2BCC5",DW_GREY_07:"#A1ABB4",DW_GREY_08:"#9099A3",DW_GREY_09:"#7F8891",DW_GREY_10:"#6D7780",DW_GREY_11:"#5C666E",DW_GREY_12:"#4B545C",DW_GREY_13:"#3B444D",DW_GREY_14:"#323C45",DW_GREY_15:"#262E33",DW_GREY_16:"#171D20",LIGHT_BLUE:"#99DBFF",GREEN:"#96BE00",LIGHT_GREEN:"#C8D205",DARK_GREEN:"#6EA500",ORANGE:"#EB6E14",LIGHT_ORANGE:"#F0AA00",RED:"#BE232D",DW_DARK_BLUE:"#002186",DW_LIGHT_BLUE_NEW:"#05B2FC",DW_YELLOW:"#FAE000",BLUE_GREY_01:"#F0F6FA",BLUE_GREY_02:"#CDE1EE",BLUE_GREY_03:"#99B5C9",BLUE_GREY_04:"#5C718A",BLUE_GREY_05:"#445D7B",DARK_BLUE_GREY_01:"#081336",DARK_BLUE_GREY_02:"#000821",WARM_GREY_01:"#F4F2F2",WARM_GREY_02:"#E0DFDE",WARM_GREY_03:"#CFCCCA",ACCENT_GREEN:"#63DE9D",ACCENT_RED:"#EF6C6C",BREAKING_RED:"#BE232D"}),G=Object.freeze({composition:Object.freeze({even:":first-child:nth-last-child(2n)",odd:":first-child:nth-last-child(2n+1)",_369:":first-child:nth-last-child(3n)",_258:":first-child:nth-last-child(3n+2)",_4710:":first-child:nth-last-child(3n+1)"}),notFirst:":not(:first-child)",notLast:":not(:last-child)",disabled:".disabled",topElements:e=>`:nth-child(-n+${e})`,justNElements:e=>`:first-child:nth-last-child(${e})`}),Wn=(e,t=1)=>{const[n,r,i]=e.match(e.length<=4?/\w/g:/\w\w/g).map(o=>parseInt(o.length<2?`${o}${o}`:o,16));return`rgba(${n},${r},${i},${t})`},Sn=Object.freeze({TAB:"Tab",ENTER:"Enter",SPACEBAR:" ",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ESCAPE:"Escape"}),cf=e=>!e.shiftKey&&e.key===Sn.TAB,c_=e=>e.shiftKey&&e.key===Sn.TAB,y4=e=>e.key===Sn.ENTER,v4=e=>y4(e)||e.key===Sn.SPACEBAR,{window:xl,document:x4}=O,{documentElement:Rc,body:Dc}=x4,Pl=e=>e&&e instanceof HTMLElement;function S4(e){return Pl(e)?xl.getComputedStyle(e).position==="fixed":!1}function u_(e,t=!1){return Pl(e)?u_(e.parentNode,t||S4(e)):t}function w4(e,t=!1){const n=e.getBoundingClientRect(),r=Rc.clientLeft||Dc.clientLeft,i=Rc.clientTop||Dc.clientTop;if(t)return{top:n.top-i,left:n.left-r};const o=xl.pageXOffset||Rc.scrollLeft||Dc.scrollLeft,a=xl.pageYOffset||Rc.scrollTop||Dc.scrollTop;return{top:n.top+a-i,left:n.left+o-r}}function d_(e){if(!Pl(e))return null;if(e.offsetWidth>0)return e;const t=e.children[0];return d_(t)}const yS=e=>Object.entries(e).reduce((t,[n,r])=>({...t,[n]:`${r}px`}),{}),da=2;function b4(e){const t=d_(e);if(!Pl(t))return{...yS({width:0,height:0,borderRadius:0})};const n=u_(e),r=w4(t,n),i=n?"fixed":"absolute",o=+xl.getComputedStyle(t).borderRadius.slice(0,-2);return{position:i,transform:`translate3d(${Math.round(r.left)}px,${Math.round(r.top)}px,0px)`,...yS({width:t.offsetWidth+da*2,height:t.offsetHeight+da*2,borderRadius:o===0?0:o+da})}}function Dh(e,t=0){if(!Pl(e))return t;const n=xl.getComputedStyle(e).getPropertyValue("z-index");return isNaN(n)?Dh(e.parentNode,t):Dh(e.parentNode,t+ +n)}const Me=Object.freeze({feedbackForm:Object.freeze({openBtn:"feedback-button",subject:"subject",message:"message",file:"file",firstName:"firstName",lastName:"lastName",gender:"gender",userEmail:"userEmail",city:"city",country:"country",wantOffers:"wantOffers",captchaToken:"captchaToken"}),quickNav:Object.freeze({mainContent:"main-content",navigationToggle:"navigation",footer:"footer"}),flyingFocus:"flying-focus",languageSelectorToggle:"language",footerSectionSocialMedia:"footer-section-social-media",livestreamScheduleAriaCaption:"schedule-caption"}),oo="flying-focus-target",k4=Me.flyingFocus,E4="fly",$4=250,{TAB:T4,ENTER:vS,SPACEBAR:xS,ARROW_LEFT:_4,ARROW_RIGHT:C4,ARROW_UP:A4,ARROW_DOWN:L4}=Sn,Nh="refreshFlyingFocus",f_=(e={delay:0})=>{const{documentElement:t}=O.document;t.dispatchEvent(new CustomEvent(Nh,{detail:e}))},SS=()=>f_(),I4=({className:e})=>{const t=x.useRef(),[n,r]=x.useState(!1),[i,o]=x.useState(null),[a,l]=x.useState(!1),c=x.useRef(),{documentElement:u}=O.document,d=x.useCallback(()=>{r(!1),c.current&&(c.current.classList.remove(oo),c.current=null)},[]);x.useEffect(()=>{let p=!1,m=null;const S=T=>{d(),T.classList.add(oo),o(T),r(!0),c.current=T},w=T=>{var $;clearTimeout(m),m=setTimeout(()=>{S(T)},(($=T==null?void 0:T.dataset)==null?void 0:$.focusdelay)||450)},E=T=>{(T==null?void 0:T.relatedTarget)===null&&setTimeout(()=>{var $;(($=document.activeElement)==null?void 0:$.tagName)==="IFRAME"&&(document.activeElement.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),w(document.activeElement))},0)},g=T=>{const{key:$}=T;[T4,vS,xS,_4,C4,A4,L4].includes($)&&(p=!0)},y=T=>{var j;const{key:$,target:I}=T;[vS,xS].includes($)&&f_({delay:((j=I==null?void 0:I.dataset)==null?void 0:j.focusdelay)||450})},v=()=>{p=!1,clearTimeout(m),c.current&&c.current.removeEventListener("keydown",y,!0),d()},k=T=>{const{target:$}=T;if(!p)return;clearTimeout(m),S($);const I=(T==null?void 0:T.path)||(T==null?void 0:T.composedPath());I!=null&&I.find(j=>{var N;return(N=j.classList)==null?void 0:N.contains("video-js")})&&w($),$.getAttribute("role")==="button"&&$.addEventListener("keydown",y,!0)};return u.addEventListener("keydown",g,!0),u.addEventListener("mousedown",v,!0),u.addEventListener("touchstart",v,!0),Vu()&&u.addEventListener("blur",E,!0),u.addEventListener("blur",d,!0),u.addEventListener("focus",k,!0),()=>{v(),o(null),u.removeEventListener("keydown",g,!0),u.removeEventListener("mousedown",v,!0),u.removeEventListener("touchstart",v,!0),Vu()&&u.removeEventListener("blur",E,!0),u.removeEventListener("blur",d,!0),u.removeEventListener("focus",k,!0)}},[]),x.useEffect(()=>{const p=m=>{const{delay:S}=m.detail;setTimeout(()=>{l(!a)},S)};return n&&u.addEventListener(Nh,p,!0),()=>{u.removeEventListener(Nh,p,!0)}},[a,n]);const[{pathname:f}]=De();return x.useEffect(()=>{d(),o(null)},[f,d]),s.jsx("div",{id:k4,className:H(e,{fly:n}),ref:t,style:{...b4(i),zIndex:+Dh(i)+1}})},j4=Nl`
  html {
    .${oo} {
      outline: none !important; /* Doesn't work in Firefox :( */
      /* http://stackoverflow.com/questions/71074/how-to-remove-firefoxs-dotted-outline-on-buttons-as-well-as-links/199319 */
      &::-moz-focus-inner {
        border: 0 !important;
      }
    }
  }
`,O4=h(I4)`
  margin: 0;
  background: transparent;
  transition-property: transform, width, height, border-radius;
  transition-duration: ${$4}ms;
  pointer-events: none;
  visibility: hidden;
  left: -${da}px;
  top: -${da}px;
  transform: translate3d(0,0,0);

  &.${E4} {
    visibility: visible;
  }

  @media screen {
    border: ${da}px solid ${C.ACCENT_GREEN};
  }
`;function R4(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}var By=!1;if(typeof window<"u"){var wS={get passive(){By=!0}};window.addEventListener("testPassive",null,wS),window.removeEventListener("testPassive",null,wS)}var p_=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),fa=[],Xu=!1,Uy=-1,zs=void 0,Ws=void 0,m_=function(t){return fa.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(t))})},Zu=function(t){var n=t||window.event;return m_(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},D4=function(t){if(Ws===void 0){var n=!!t&&t.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;n&&r>0&&(Ws=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}zs===void 0&&(zs=document.body.style.overflow,document.body.style.overflow="hidden")},N4=function(){Ws!==void 0&&(document.body.style.paddingRight=Ws,Ws=void 0),zs!==void 0&&(document.body.style.overflow=zs,zs=void 0)},P4=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},F4=function(t,n){var r=t.targetTouches[0].clientY-Uy;return m_(t.target)?!1:n&&n.scrollTop===0&&r>0||P4(n)&&r<0?Zu(t):(t.stopPropagation(),!0)},M4=function(t,n){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!fa.some(function(i){return i.targetElement===t})){var r={targetElement:t,options:n||{}};fa=[].concat(R4(fa),[r]),p_?(t.ontouchstart=function(i){i.targetTouches.length===1&&(Uy=i.targetTouches[0].clientY)},t.ontouchmove=function(i){i.targetTouches.length===1&&F4(i,t)},Xu||(document.addEventListener("touchmove",Zu,By?{passive:!1}:void 0),Xu=!0)):D4(n)}},h_=function(){p_?(fa.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),Xu&&(document.removeEventListener("touchmove",Zu,By?{passive:!1}:void 0),Xu=!1),Uy=-1):N4(),fa=[]};function B4(e){M4(e,{reserveScrollBarGap:!0})}const uf="0px";function U4({isScrollDisabled:e,ref:t,setScrollbarRightWidth:n}){e?(B4(t),O.window.setTimeout(()=>{n(O.document.body.style.paddingRight)}),t==null||t.addEventListener("scroll",SS)):(h_(),n(uf),t==null||t.removeEventListener("scroll",SS))}const g_=x.createContext([{scrollbarRightWidth:uf},{setScrollbarRightWidth:Te,toggleScrollLockAndSetWidth:Te}]),zy=({onReset:e=Te}={})=>{const[t,n]=x.useContext(g_),r=()=>{h_(),n.setScrollbarRightWidth(uf),e()},[{pathname:i}]=De();return x.useEffect(()=>(r(),()=>r()),[i]),[t,n]},z4=({children:e})=>{const[t,n]=x.useState(uf),r=x.useCallback(({isScrollDisabled:i,ref:o})=>{U4({isScrollDisabled:i,ref:o,setScrollbarRightWidth:n})},[]);return s.jsx(g_.Provider,{value:[{scrollbarRightWidth:t},{toggleScrollLockAndSetWidth:r,setScrollbarRightWidth:n}],children:e})},vn=(e,t,n,...r)=>{x.useEffect(()=>{const o=(e?Object.prototype.hasOwnProperty.call(e,"current"):null)?e.current:e;return o&&t.split(" ").forEach(a=>o.addEventListener(a,n,...r)),()=>{o&&t.split(" ").forEach(a=>o.removeEventListener(a,n,...r))}},[e,t,n,r])},Ph=()=>{var e;return((e=O.window.visualViewport)==null?void 0:e.width)||O.window.innerWidth},W4="resize";function y_({isAlwaysReset:e=!1}={}){const t=e?0:Ph()||0,[n,r]=x.useState(t),i=()=>{r(Ph())};return vn(O.window,W4,i),x.useEffect(()=>{i()},[]),n}const v_=x.createContext(Ph()||0),Wa=()=>x.useContext(v_),V4=({children:e})=>{const t=y_();return s.jsx(v_.Provider,{value:t,children:e})},Oa=e=>{const[{search:t}]=De();return _D({from:t,value:e})},x_=()=>{const[e,t]=x.useState(!1);return x.useEffect(()=>{t(!0)},[]),{isBrowser:e}},Sr=({children:e,fallback:t,isHidden:n})=>{const{isBrowser:r}=x_();return!r||n?t||null:e},G4=h(({isA:e="svg",className:t})=>s.jsx(e,{className:t}))`
  width: 100%;
  padding-bottom: 100%;
  height: 0;
`,H4=({isA:e,className:t,isHidden:n,fallback:r=s.jsx(G4,{className:t}),...i})=>{const o=e;return s.jsx(Sr,{fallback:r,isHidden:n,children:s.jsx(x.Suspense,{fallback:r,children:s.jsx(o,{className:t,...i})})})},ne=(e,t={})=>{const{fallback:n}=t,r={get(i,o){const a=x.lazy(()=>e().then(l=>({default:l[o]})));return l=>s.jsx(H4,{isA:a,fallback:n,...l})}};return new Proxy({},r)},Q4=(e,t)=>{if(Et())return null;const n=O.sessionStorage.getItem(e);return n?JSON.parse(n):t},q4=(e,t)=>{Et()||O.sessionStorage.setItem(e,JSON.stringify(t))},Y4=(e,t)=>{const[n,r]=x.useState(Q4(e,t));return x.useEffect(()=>{q4(e,n)},[e,n]),[n,r]},Va=({name:e="next-features",initialValue:t=!1}={})=>{const n=Oa(e),[r,i]=Y4(e,t),[o,a]=x.useState(t);return x.useEffect(()=>{n==="1"?i(!0):n==="0"&&i(!1),a(n==="1"||r)},[n,r]),o},{ProxyProtocolFlip:K4}=ne(()=>J(()=>import("./ProxyProtocolFlip-9ee71aa5.js"),[]),{fallback:null}),X4="protocol-flip",Z4=({children:e})=>Va({name:X4})?s.jsx(Sr,{children:s.jsx(K4,{children:e})}):e,S_={isMobileMode:!1},w_=x.createContext(S_),At=()=>x.useContext(w_),J4="history-push",eP=({children:e})=>{const[,t]=De(),i=Oa("mobileApp")==="true"||S_.isMobileMode;return vn(O.window,J4,o=>t(o.detail.url)),s.jsx(w_.Provider,{value:{isMobileMode:i},children:s.jsx(Z4,{children:e})})},df=async({url:e,scriptId:t,vendorId:n})=>{if(t){const r=O.document.getElementById(t);if(r)return r}return new Promise((r,i)=>{const o=O.document.createElement("script");o.addEventListener("load",()=>r(o)),o.addEventListener("error",i),o.setAttribute("type","text/javascript"),o.setAttribute("id",t);const a=new URLSearchParams(O.window.location.search).get("mobileApp")==="true";n&&!a?(o.setAttribute("data-cmp-vendor",n),o.setAttribute("data-cmp-src",e),o.setAttribute("data-cmp-preview","100%x300"),o.classList.add("cmplazyload")):o.setAttribute("src",e),O.document.head.appendChild(o)})},tP="CONSENT_DATA_EVENT",nP=1,rP=755,iP=()=>{const[e,t]=x.useState();return vn(O.window,tP,n=>{const{VendorsAllowed:r}=n.detail||{};t((r==null?void 0:r.includes(nP))&&(r==null?void 0:r.includes(rP)))}),e},oP=async()=>{const{googletag:e}=O.window;e._loaded||await df({url:"https://securepubads.g.doubleclick.net/tag/js/gpt.js",scriptId:"gpt-script"})},aP=()=>{const{isMobileMode:e}=At(),t=iP(),n=Oa("adTargetName"),r=Oa("adTargetValue");O.window.googletag||(O.window.googletag={cmd:[]}),x.useEffect(()=>{if(n&&r){const{googletag:i}=O.window;i.cmd.unshift(()=>{i.pubads().setTargeting(n,[r])})}},[]),x.useEffect(()=>{const{googletag:i,document:o}=O.window;i.cmd.unshift(()=>{i.pubads().addEventListener("slotOnload",a=>{o.getElementById(a.slot.getSlotElementId()).querySelector("iframe").setAttribute("tabindex",-1)})})},[]),x.useEffect(()=>{const{googletag:i}=O.window;i.cmd.unshift(()=>{i.pubads().disableInitialLoad(),i.enableServices()})},[]),x.useEffect(()=>{t&&!e&&oP()},[t,e])};let b_=!1;const k_=()=>b_,E_=e=>{b_=e},$_=x.createContext({getIsSilent:k_,setIsSilent:E_}),T_=()=>x.useContext($_),sP=({children:e})=>s.jsx($_.Provider,{value:{getIsSilent:k_,setIsSilent:E_},children:e}),lP=e=>["ar","fa-af","ps","fa-ir","ur"].includes(e),cP=Nl`
  #root {
    background-color: ${C.DARK_BLUE_GREY_02};
  }
`,uP=Nl`
  html {
    font-size: ${e=>(e==null?void 0:e.langCode)==="hi"?"12px":"10px"};
    ${e=>(e==null?void 0:e.langCode)==="ar"?'font-feature-settings: "liga" 0;':""}
  }
  * {
    letter-spacing: ${e=>!(e!=null&&e.isAmp)&&lP(e==null?void 0:e.langCode)?"0 !important":"normal"};
  }
`,dP=({isAmp:e=!1})=>{const[{pathname:t}]=De(),n=t.split("/")[1];return s.jsxs(s.Fragment,{children:[s.jsx(cP,{}),s.jsx(uP,{langCode:n,isAmp:e})]})},fP="/static/DWPangeaLatinBasicLettersVAR-8d7f04b2.woff2",pP="/static/DWPangeaLatinBasicSymbolsVAR-24d965b1.woff2",mP="/static/DWPangeaLatinExtendedVAR-597abefa.woff2",hP="/static/DWPangeaGreekVAR-895dbec3.woff2",gP="/static/DWPangeaCyrillicVAR-e8c09dd2.woff2",yP="/static/DWPangeaArabicVAR-e9f915e6.woff2",vP={all:fP},xP={all:pP},SP={all:mP},wP={all:hP},bP={all:gP},kP={all:yP},EP="/static/NotoSansLatinBasicLetters-Regular-56662b9f.woff2",$P="/static/NotoSansLatinBasicLetters-Bold-cb27fa92.woff2",TP="/static/NotoSansLatinBasicLetters-Italic-e0ab3a66.woff2",_P="/static/NotoSansLatinBasicLetters-BoldItalic-b7b14a7d.woff2",CP="/static/NotoSansLatinBasicSymbols-Regular-1f31048c.woff2",AP="/static/NotoSansLatinBasicSymbols-Bold-fcc5e957.woff2",LP="/static/NotoSansLatinBasicSymbols-Italic-eddad255.woff2",IP="/static/NotoSansLatinBasicSymbols-BoldItalic-415ed186.woff2",jP="/static/NotoSansLatinExtended-Regular-f89cb571.woff2",OP="/static/NotoSansLatinExtended-Bold-8273e9be.woff2",RP="/static/NotoSansLatinExtended-Italic-fd1e22dc.woff2",DP="/static/NotoSansLatinExtended-BoldItalic-583c7cfb.woff2",NP="/static/NotoNaskhArabic-Regular-31b365be.woff2",PP="/static/NotoNaskhArabic-Bold-cf0ed7c0.woff2",FP={regular:EP,bold:$P,italic:TP,boldItalic:_P},MP={regular:CP,bold:AP,italic:LP,boldItalic:IP},BP={regular:jP,bold:OP,italic:RP,boldItalic:DP},UP={regular:NP,bold:PP},Fh=({fontWeight:e,family:t,unicodeRange:n})=>`
  font-display : swap;
  font-family  : ${t};
  font-style   : normal;
  font-weight  : ${e};
  unicode-range: ${n};
`,zP=[{font:vP,unicodeRanges:["U+041-05A","U+061-07A"]},{font:xP,unicodeRanges:["U+020-040","U+05B-060","U+07B-07E","U+0A0","U+0A9"]},{font:SP,unicodeRanges:["U+0A1-0A8","U+0AA-24F"]},{font:wP,unicodeRanges:["U+370-3FF"]},{font:bP,unicodeRanges:["U+400-52F"]},{font:kP,unicodeRanges:["U+600-6FF","U+750-77F","U+8A0-8FE","U+FB50-FDFF","U+FE70-FEFF"]}],WP=({font:e,unicodeRanges:t})=>{const n=t.join();return`
    @font-face {
        ${Fh({family:"Pangea",fontWeight:"300 700",unicodeRange:n})}
        font-optical-sizing: none;
        src:  local('DW Pangea VAR Light'),
              url(${e.all}) format('woff2 supports variations'),
              url(${e.all}) format('woff2-variations');
    }`},VP=[{font:FP,unicodeRanges:["U+041-05A","U+061-07A"]},{font:MP,unicodeRanges:["U+020-040","U+05B-060","U+07B-07E","U+0A0","U+0A9"]},{font:BP,unicodeRanges:["U+0A1-0A8","U+0AA-24F"]},{font:UP,unicodeRanges:["U+600-6FF","U+750-77F","U+8A0-8FE","U+FB50-FDFF","U+FE70-FEFF"],src:"Noto Naskh Arabic"}],GP=({font:e,src:t="Noto Sans",unicodeRanges:n})=>{const r=n.join();return`   
    @font-face {
        ${Fh({family:"NotoSans",fontWeight:"400",unicodeRange:r})}
        src:  local('${t}'),
              url(${e.regular}) format('woff2');
    }
    @font-face {
        ${Fh({family:"NotoSans",fontWeight:"700",unicodeRange:r})}
        src:  local('${t}'),
              url(${e.bold}) format('woff2');
    }
  `},HP=e=>e.font.all?WP(e):GP(e),QP=Nl`${e=>{var t;return(t=e==null?void 0:e.fonts)==null?void 0:t.map(HP).join("")}}`,qP=()=>{const[{pathname:e}]=De(),n=e.split("/")[1]==="fa-ir"?VP:zP;return s.jsx(QP,{fonts:n})},YP=async()=>{const{runGreekAccentedReplacer:e}=await J(()=>import("./runGreekAccentedReplacer-24d672dd.js"),[]);e()},KP=e=>/^\/el\//.test(e),XP=()=>{const e=x.useRef(),[{pathname:t}]=De();return x.useEffect(()=>{!e.current&&KP(t)&&(YP(),e.current=!0)},[t]),null},ZP=200;function JP(){const[{hash:e,pathname:t}]=De(),n=x.useCallback(async()=>{if(!e)return;const r=await bD({id:e.replace("#","")});wD({element:r,offset:ZP})},[t]);x.useLayoutEffect(()=>{n()},[n])}const eF=()=>(vn(O.window,"pagehide",()=>{var e;(e=O.window.dataLayer)==null||e.push({event:"onPageHide"})},{once:!0}),JP(),null),tF=()=>s.jsxs(s.Fragment,{children:[s.jsx(dP,{}),s.jsx(j4,{}),s.jsx(qP,{}),s.jsxs(Sr,{children:[s.jsx(eF,{}),s.jsx(XP,{})]})]}),nF=()=>(aP(),null),rF=({className:e,children:t})=>s.jsxs(s.Fragment,{children:[s.jsx(tF,{}),s.jsx("div",{className:e,children:s.jsx(sP,{children:s.jsxs(eP,{children:[s.jsx(z4,{children:s.jsx(V4,{children:t})}),s.jsx(nF,{})]})})}),s.jsx(O4,{})]}),__=M`
  max-width: 1600px;
  margin: 0 auto;
`,iF=h(rF)`
  background: ${C.WHITE};
  display: grid;
  ${__}
`,Fl={langCodeRegex:"[a-z]{2}-?0?0?2?[briafhnt]{0,4}"},Zt=`(?<langCode>${Fl.langCodeRegex})`,Ga="(?<title>.*)",oF="(?<channel>english|german|germanplus|spanish|arabic)",aF="(?<selectedTopicGroupId>.{1}|numbers|hashtag)",C_="(?<contentId>\\d{1,9})",sF="(?<typeId>[a-z_]{1,15})",lF="(?<pageNumber>\\d{1,9})",ff=({namedUrl:e,pathname:t})=>e.startsWith(t)||e.startsWith(`/${t}`),Wy={NEUTRAL:"",GERMAN:"de",ENGLISH:"en",RUSSIAN:"ru",CHINESE:"zh",CHINESE_TRADITIONAL:"zh-hant",PORTUGUESE_BRAZIL:"pt-br",ALBANIAN:"sq",AMHARIC:"am",ARABIC:"ar",BENGALI:"bn",BOSNIAN:"bs",BULGARIAN:"bg",DARI:"fa-af",FRENCH:"fr",GREEK:"el",HAUSA:"ha",HINDI:"hi",INDONESIAN:"id",KISWAHILI:"sw",CROATIAN:"hr",MACEDONIAN:"mk",PASHTO:"ps",PERSIAN:"fa-ir",POLISH:"pl",PORTUGUESE_AFRICA:"pt-002",ROMANIAN:"ro",SERBIAN:"sr",SPANISH:"es",TURKISH:"tr",UKRANIAN:"uk",URDU:"ur"},cF=CT(Wy),Ra=e=>e&&Wy[e.toUpperCase()],Qn=e=>e&&cF[e.toLowerCase()],A_=e=>e==null?void 0:e.split("-")[0],JJ=()=>Object.values(Wy).filter(Boolean),uF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("g",{fillRule:"evenodd"},x.createElement("path",{d:"M4.65110907,13.3333333 L4.87612542,8.14814815 C4.87612542,5.23699601 7.04491522,2.69325427 9.99915593,2.69325427 C12.9548594,2.69325427 15.159275,5.23677396 15.159275,8.14814815 L15.3488909,12.9641856 L17.037037,12.9641856 L17.037037,7.67306855 C17.037037,3.84334009 13.8871968,0.740740741 9.99915593,0.740740741 C6.1125067,0.740740741 2.96296296,3.84363223 2.96296296,7.67306855 L2.96296296,13.3333333 L4.65110907,13.3333333 Z"}),x.createElement("path",{d:"M5.92592593 17.037037L3.65589684 17.037037C2.04586803 17.037037.740740741 15.6125126.740740741 13.8570379L.740740741 11.3263486C.740740741 9.57087399 2.04586803 8.14814815 3.65589684 8.14814815L5.92592593 8.14814815 5.92592593 17.037037zM14.0740741 17.037037L16.3432895 17.037037C17.9527413 17.037037 19.2592593 15.6125126 19.2592593 13.8570379L19.2592593 11.3263486C19.2592593 9.57087399 17.9527413 8.14814815 16.3432895 8.14814815L14.0740741 8.14814815 14.0740741 17.037037z"}))),Vy=h(e=>s.jsx(uF,{...e}))`
  width: 20px;
  height: 20px;
`,dF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("g",{fillRule:"evenodd"},x.createElement("path",{d:"M14.114 7.599H13.5l.002 4.706h.601l4.582 3.25-.005-11.11zM11.084 4.444l-9.007.002-1.336.797.002 9.514 1.334.793 9.007.006 1.509-.799-.004-9.516z"}))),fu=h(e=>s.jsx(dF,{...e}))`
  width: 20px;
  height: 20px;
`,fF=e=>x.createElement("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},x.createElement("g",{id:"atoms/media-meta/mediatag/ondark/gallery",fillRule:"evenodd"},x.createElement("path",{transform:"translate(0,2)",d:"M18.117 10.964H16.367V3.647H5.526V1.763H18.117V10.964ZM14.481 14.611H1.89C1.9173 14.3121 1.8372 13.9687 1.9265 13.6954 2.465 13.1559 3.0035 12.6165 3.542 12.077 4.4619 12.7518 5.3601 13.4588 6.2937 14.1132 6.9448 14.4261 7.3319 13.7355 7.649 13.2954L10.81 8.9851C12.0337 10.1174 13 11 14.481 12.3821V14.6111ZM3.64 5.41H14.481V10.338C13.3459 9.3017 12.2375 8.2337 11.0856 7.2174 10.4791 6.8486 10.0234 7.4703 9.7311 7.9203 8.6404 9.4075 7.5497 10.8948 6.459 12.382 5.5712 11.7294 4.7016 11.0498 3.8022 10.4142 3.1287 10.0989 2.714 10.8399 2.2823 11.2163 2.027 11.5102 1.7951 11.7476 1.89 11.1954V5.41H3.64ZM3.64 0V3.647H.003V16.374H16.367V12.727H20.003V0H3.64Z"}),x.createElement("path",{transform:"translate(3.6,8.7)",d:"M0 1.501c0 0.828 0.672 1.5 1.5 1.5 0.829 0 1.5-0.672 1.5-1.5 0-0.829-0.671-1.501-1.5-1.501-0.828 0-1.5 0.672-1.5 1.501 Z"}))),pF=h(e=>s.jsx(fF,{...e}))`
  width: 20px;
  height: 20px;
`,mF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("g",{fillRule:"evenodd"},x.createElement("path",{d:"M3.694 15.573l.01-11.87H1.48v14.092H18.52v-2.222z"}),x.createElement("path",{d:"M16.976 14.048V7.375L14.057 4.58l-3.392 4.734L7.97 7.548 5.264 11.12v2.928z"}))),hF=h(e=>s.jsx(mF,{...e}))`
  width: 20px;
  height: 20px;
`,gF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("path",{fillRule:"evenodd",d:"M14.8204071,7.75860164 C14.586489,7.20788744 14.0126925,6.817469 13.3431662,6.817469 C13.0944592,6.817469 12.8588979,6.87139475 12.6490978,6.96729566 C12.3835877,6.49040837 11.8514544,6.16384157 11.2392282,6.16384157 C11.0592708,6.16384157 10.8864693,6.19243407 10.7250112,6.24443389 L10.7250112,2.97288387 C10.7250642,2.15056565 10.0118604,1.48148148 9.13513127,1.48148148 C8.25850813,1.48148148 7.54535735,2.15056565 7.54535735,2.97288387 L7.54535735,10.5107899 L6.40030879,9.29034956 C6.3923048,9.28200391 6.38414178,9.27380641 6.37566072,9.26595459 C6.07500729,8.98565923 5.67486048,8.83025235 5.24895245,8.82832643 L5.24084244,8.82832643 C4.81594154,8.82832643 4.41812702,8.98116542 4.1199649,9.25913979 C3.59424545,9.74906407 3.56514482,10.4762715 4.04034898,11.2545899 C4.65549057,12.2615001 5.32416882,13.210929 5.91418527,14.0487039 C6.34534095,14.6609488 6.75264366,15.2392184 7.05038173,15.7173403 C7.30857687,16.1322525 7.9939522,17.4778776 8.00094907,17.4914578 C8.08989414,17.6663214 8.27907469,17.7777778 8.48664854,17.7777778 L15.285805,17.7777778 C15.5194051,17.7777778 15.7261838,17.6373832 15.7977958,17.4303715 C15.9245875,17.0630148 17.037037,13.8057912 17.037037,12.5478695 L17.037037,9.12916492 C17.037037,8.30664917 16.3238332,7.63761439 15.4472101,7.63761439 C15.2246884,7.63761439 15.012821,7.6808735 14.8204071,7.75860164 Z"})),yF=h(e=>s.jsx(gF,{...e}))`
  width: 20px;
  height: 20px;
`,vF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 40 40",...e},x.createElement("defs",null,x.createElement("path",{id:"sm-facebook_padded-a",d:"M21.5109375,29.3153125 L21.5109375,20.504875 L24.468375,20.504875 L24.9110625,17.0711875 L21.5109375,17.0711875 L21.5109375,14.8789375 C21.5109375,13.884625 21.7869375,13.2071875 23.2126875,13.2071875 L25.030875,13.2064375 L25.030875,10.135375 C24.7164375,10.0935625 23.637,10 22.3815,10 C19.759875,10 17.965125,11.600125 17.965125,14.5388125 L17.965125,17.071 L15,17.071 L15,20.5046875 L17.9649375,20.5046875 L17.9649375,29.315125 L21.5109375,29.315125 L21.5109375,29.3153125 Z"})),x.createElement("use",{xlinkHref:"#sm-facebook_padded-a"})),xF=h(vF)``,SF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 40 40",...e},x.createElement("defs",null,x.createElement("path",{id:"sm-instagram_padded-a",d:"M20.5050272,12.0002037 C22.2221091,12.0017413 22.5162118,12.0124537 23.2983898,12.0481422 C24.1498965,12.0869798 24.731445,12.2222288 25.240304,12.4200055 C25.7663747,12.6244192 26.2125155,12.8979658 26.6572907,13.3427093 C27.1020342,13.7874845 27.3755808,14.2336253 27.5800262,14.759696 C27.7777712,15.268555 27.9130202,15.8501035 27.9518578,16.7016102 C27.9859241,17.4482347 27.9972333,17.7501459 27.9995282,19.2694872 L27.9995282,20.7305341 C27.9972333,22.2498541 27.9859241,22.5517653 27.9518578,23.2983898 C27.9130202,24.1498965 27.7777712,24.731445 27.5800262,25.240304 C27.3755808,25.7663747 27.1020342,26.2125155 26.6572907,26.6572907 C26.2125155,27.1020342 25.7663747,27.3755808 25.240304,27.5800262 C24.731445,27.7777712 24.1498965,27.9130202 23.2983898,27.9518578 C22.5517653,27.9859241 22.2498541,27.9972333 20.7305341,27.9995282 L19.2694872,27.9995282 C17.7501459,27.9972333 17.4482347,27.9859241 16.7016102,27.9518578 C15.8501035,27.9130202 15.268555,27.7777712 14.759696,27.5800262 C14.2336253,27.3755808 13.7874845,27.1020342 13.3427093,26.6572907 C12.8979658,26.2125155 12.6244192,25.7663747 12.4200055,25.240304 C12.2222288,24.731445 12.0869798,24.1498965 12.0481422,23.2983898 C12.0124537,22.5162118 12.0017413,22.2221091 12.0002037,20.5050272 L12.0002037,19.4949972 C12.0017413,17.7778909 12.0124537,17.4837882 12.0481422,16.7016102 C12.0869798,15.8501035 12.2222288,15.268555 12.4200055,14.759696 C12.6244192,14.2336253 12.8979658,13.7874845 13.3427093,13.3427093 C13.7874845,12.8979658 14.2336253,12.6244192 14.759696,12.4200055 C15.268555,12.2222288 15.8501035,12.0869798 16.7016102,12.0481422 C17.4837882,12.0124537 17.7778909,12.0017413 19.4949972,12.0002037 Z M20.9225831,13.4422216 L19.0774353,13.4422216 C17.7631656,13.4450017 17.4702866,13.4560149 16.7673135,13.4880885 C15.9873214,13.5236553 15.5637274,13.6539821 15.281829,13.7635405 C14.9084096,13.9086656 14.6419128,14.0820219 14.3619832,14.3619832 C14.0820219,14.6419128 13.9086656,14.9084096 13.7635405,15.281829 C13.6539821,15.5637274 13.5236553,15.9873214 13.4880885,16.7673135 C13.4560149,17.4702866 13.4450017,17.7631656 13.4422216,19.0774353 L13.4422216,20.9225831 C13.4450017,22.2368344 13.4560149,22.5297134 13.4880885,23.2326865 C13.5236553,24.0126786 13.6539821,24.4362726 13.7635405,24.718171 C13.9086656,25.0915904 14.0820537,25.3580872 14.3619832,25.6380168 C14.6419128,25.9179781 14.9084096,26.0913344 15.281829,26.2364595 C15.5637274,26.3460179 15.9873214,26.4763447 16.7673135,26.5119115 C17.6107859,26.5503998 17.8637546,26.5585611 20.0000159,26.5585611 L20.257415,26.558517 C22.1583538,26.5578284 22.4243892,26.5487961 23.2326865,26.5119115 C24.0126786,26.4763447 24.4362726,26.3460179 24.718171,26.2364595 C25.0915904,26.0913344 25.3580872,25.9179781 25.6380168,25.6380168 C25.9179781,25.3580872 26.0913344,25.0915904 26.2364595,24.718171 C26.3460179,24.4362726 26.4763447,24.0126786 26.5119115,23.2326865 C26.5503998,22.3891188 26.5585611,22.1360866 26.5585611,20.0000159 L26.558517,19.7426318 C26.5578284,17.8418022 26.5487961,17.5757326 26.5119115,16.7673135 C26.4763447,15.9873214 26.3460179,15.5637274 26.2364595,15.281829 C26.0913344,14.9084096 25.9179781,14.6419128 25.6380168,14.3619832 C25.3580872,14.0820219 25.0915904,13.9086656 24.718171,13.7635405 C24.4362726,13.6539821 24.0126786,13.5236553 23.2326865,13.4880885 C22.5297134,13.4560149 22.2368344,13.4450017 20.9225831,13.4422216 Z M20.0000155,16 C22.2091532,16 24,17.7908468 24,20.0000155 C24,22.2091532 22.2091532,24 20.0000155,24 C17.7908468,24 16,22.2091532 16,20.0000155 C16,17.7908468 17.7908468,16 20.0000155,16 Z M20.0000155,17.4035071 C18.5659899,17.4035071 17.4035071,18.5659899 17.4035071,20.0000155 C17.4035071,21.4340101 18.5659899,22.5964929 20.0000155,22.5964929 C21.4340101,22.5964929 22.5964929,21.4340101 22.5964929,20.0000155 C22.5964929,18.5659899 21.4340101,17.4035071 20.0000155,17.4035071 Z M23.9999835,14 C24.5522734,14 25,14.4477266 25,15.0000165 C25,15.5523064 24.5522734,16 23.9999835,16 C23.4477266,16 23,15.5523064 23,15.0000165 C23,14.4477266 23.4477266,14 23.9999835,14 Z"})),x.createElement("use",{xlinkHref:"#sm-instagram_padded-a"})),wF=h(SF)``,bF=e=>x.createElement("svg",{viewBox:"-10 -10 40 40",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},x.createElement("g",{id:"sm-twitter_padded-a",stroke:"none",strokeWidth:1},x.createElement("g",{id:"Group",transform:"translate(1.000000, 1.000000)"},x.createElement("path",{d:"M6.00606088,0 L6.25248563,0.369823917 L17.1123603,16.6678677 L18,18 L11.9783365,18 L11.7319488,17.62975 L0.88620143,1.33170626 L0,0 L6.00606088,0 Z M5.13384269,1.70195626 L3.13622784,1.70195626 L12.8499575,16.2976495 L14.8599799,16.2976495 L5.13384269,1.70195626 Z M7.513,9.038 L8.803,10.97 L2.909,18.0001438 L0,18.0001438 L7.513,9.038 Z M18,0 L10.186,9.321 L8.908,7.375 L15.091,0 L18,0 Z",id:"Combined-Shape"})))),kF=h(bF)``,EF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 40 40",...e},x.createElement("defs",null,x.createElement("path",{id:"sm-youtube_padded-a",d:"M18,22.9999324 L18,16.9999324 C19.6663411,18.0030935 21.3224263,18.9989309 23,20.0086645 C21.3271472,21.008821 19.6710621,22.0005271 18,22.9999324 M29.6541008,15.2525912 C29.4092189,14.1834009 28.5394017,13.3959048 27.4919779,13.2788614 C25.0121088,13 22.5020177,12.9992462 20.0028975,13 C17.5039844,12.9992462 14.9928582,13 12.5129892,13.2788614 C11.4668074,13.3959048 10.5965762,14.1834009 10.3527293,15.2525912 C10.00414,16.7731157 10,18.4339676 10,20.0000205 C10,21.5662813 10,23.227549 10.3487963,24.7480735 C10.5926432,25.8164322 11.4626673,26.6047599 12.5100912,26.7222191 C14.9899602,26.9997554 17.4998444,27.0016264 19.9989645,26.9997554 C22.4991197,27.0016264 25.0090038,26.9997554 27.4878379,26.7222191 C28.5352617,26.6047599 29.4050789,25.8164322 29.6501678,24.7480735 C29.998964,23.227549 30,21.5662813 30,20.0000205 C30,18.4339676 30.0031041,16.7731157 29.6541008,15.2525912"})),x.createElement("use",{xlinkHref:"#sm-youtube_padded-a"})),$F=h(EF)``,{StyledSmBalatarin:TF}=ne(()=>J(()=>import("./Balatarin-22b98691.js"),[])),{StyledSmDouban:_F}=ne(()=>J(()=>import("./Douban-412a3639.js"),[])),{StyledSmEmail:CF}=ne(()=>J(()=>import("./Email-27ccecf1.js"),[])),{StyledSmFacebookMessenger:bS}=ne(()=>J(()=>import("./FacebookMessenger-6900fc16.js"),[])),{StyledSmFlipboard:AF}=ne(()=>J(()=>import("./Flipboard-5060386e.js"),[])),{StyledSmLine:LF}=ne(()=>J(()=>import("./Line-6d25a355.js"),[])),{StyledSmLinkedIn:IF}=ne(()=>J(()=>import("./LinkedIn-bc94cce1.js"),[])),{StyledSmMeneame:jF}=ne(()=>J(()=>import("./Meneame-7df20d2e.js"),[])),{StyledSmMoikrug:OF}=ne(()=>J(()=>import("./Moikrug-1d922d4b.js"),[])),{StyledSmOdnoklassniki:RF}=ne(()=>J(()=>import("./Odnoklassniki-9ffb4aba.js"),[]));ne(()=>J(()=>import("./Qzone-28a65735.js"),[]));const{StyledSmReddit:DF}=ne(()=>J(()=>import("./Reddit-5705375a.js"),[]));ne(()=>J(()=>import("./Renren-3a92f978.js"),[]));const{StyledSmSms:NF}=ne(()=>J(()=>import("./Sms-edab25e3.js"),[])),{StyledSmTelegram:PF}=ne(()=>J(()=>import("./Telegram-938cabdc.js"),[]));ne(()=>J(()=>import("./Twoo-a3528db1.js"),[]));const{StyledSmViber:FF}=ne(()=>J(()=>import("./Viber-9b39cd17.js"),[])),{StyledSmVkontakte:kS}=ne(()=>J(()=>import("./Vkontakte-08295a50.js"),[])),{StyledSmWechat:MF}=ne(()=>J(()=>import("./Wechat-55672305.js"),[])),{StyledSmWeibo:BF}=ne(()=>J(()=>import("./Weibo-897548eb.js"),[])),{StyledSmWhatsapp:ES}=ne(()=>J(()=>import("./Whatsapp-1627c78d.js"),[])),{StyledSmSharechat:UF}=ne(()=>J(()=>import("./Sharechat-83abb791.js"),[])),{StyledSmMoj:zF}=ne(()=>J(()=>import("./Moj-f8aa77ad.js"),[])),{StyledSmTiktok:WF}=ne(()=>J(()=>import("./Tiktok-64abfbfb.js"),[]));ne(()=>J(()=>import("./Comments-00e5d5d6.js"),[]));ne(()=>J(()=>import("./Print-8250cd54.js"),[]));ne(()=>J(()=>import("./TextSize-6964469c.js"),[]));const VF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("g",{className:"top-line"},x.createElement("path",{d:"M20 4H0V2h20z"})),x.createElement("g",null,x.createElement("path",{d:"M20 11H0V9h20z"})),x.createElement("g",{className:"bottom-line"},x.createElement("path",{d:"M20 18H0v-2h20z"}))),GF=h(VF)``,HF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",...e},x.createElement("path",{d:"M6.219634 24l17.97-18m0 18l-17.97-18",stroke:"black",strokeWidth:1.5,fill:"none",fillRule:"evenodd"})),QF=h(HF)`
  height: 30px;
  width: 30px;
`,qF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20",...e},x.createElement("defs",null,x.createElement("path",{id:"download-a",d:"M18.6666667,19.3888889 L1.33333333,19.3888889 L1.33333333,13.6111111 L2.05555556,13.6111111 C2.77777778,14.3333333 3.5,16.5 3.5,16.5 L16.5,16.5 C16.5,16.5 17.2222222,14.3333333 17.9444444,13.6111111 L18.6666667,13.6111111 L18.6666667,19.3888889 Z M14.875,8.73611111 L14.3333333,7.65277778 L10.7222222,10.7222222 L10.7222222,0.791666667 L9.27777778,0.791666667 L9.27777778,10.7222222 L5.66666667,7.65277778 L5.125,8.73611111 L10,14.3333333 L14.875,8.73611111 Z"})),x.createElement("use",{xlinkHref:"#download-a"})),YF=h(qF)`
  width: 20px;
`,KF=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 44 25",...e},x.createElement("defs",null,x.createElement("path",{id:"dw-logo-white-a",d:"M31.4285714,0 C27.6723333,0 24.3031905,1.63958333 22,4.23697917 C19.6962857,1.63958333 16.3271429,0 12.5714286,0 C5.62833333,0 0,5.59635417 0,12.5 C0,19.4036458 5.62833333,25 12.5714286,25 C16.3271429,25 19.6962857,23.3604167 22,20.7630208 C24.3031905,23.3604167 27.6723333,25 31.4285714,25 C38.3711429,25 44,19.4036458 44,12.5 C44,5.59635417 38.3711429,0 31.4285714,0 Z M20.3568095,18.4244792 C18.5648571,20.7494792 15.7446667,22.25 12.5714286,22.25 C7.1557619,22.25 2.76571429,17.8848958 2.76571429,12.5 C2.76571429,7.11510417 7.1557619,2.75 12.5714286,2.75 C15.7446667,2.75 18.5648571,4.25052083 20.3568095,6.57552083 C21.6228571,8.21770833 22.3771429,10.2708333 22.3771429,12.5 C22.3771429,14.7291667 21.6228571,16.7822917 20.3568095,18.4244792 Z M36.6357619,17.25 L33.6872381,17.25 L31.765381,12.5770833 L29.8854286,17.25 L26.9437143,17.25 L23.8972381,7.75 L27.2574762,7.75 L28.6859048,12.5197917 L30.4684286,7.75 L33.0979524,7.75 L34.8804762,12.5197917 L36.308381,7.75 L39.6832857,7.75 L36.6357619,17.25 Z M12.938619,7.5 L7.4857619,7.5 L7.4857619,17.5 L12.938619,17.5 C15.752,17.5 18.6360952,15.890625 18.6360952,12.5 C18.6360952,9.2578125 16.0060476,7.5 12.938619,7.5 Z M12.6442381,14.6026042 L12.6442381,14.6026042 L10.502381,14.6026042 L10.502381,10.3526042 L12.6437143,10.3526042 C14.5912381,10.3526042 15.2858095,11.4338542 15.2858095,12.4776042 C15.2863333,13.5072917 14.5964762,14.6026042 12.6442381,14.6026042 Z",fill:"#FFF"})),x.createElement("use",{xlinkHref:"#dw-logo-white-a"})),XF=h(KF)``,ZF=e=>x.createElement("svg",{viewBox:"0 0 105 60",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},x.createElement("title",null,"logos/dw_logo_dark-blue"),x.createElement("g",{id:"logos/dw_logo_dark-blue",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},x.createElement("path",{d:"M75,0 C66.04,0 58,3.94 52.5,10.17 C47,3.94 38.96,0 30,0 C13.43,0 0,13.43 0,30 C0,46.57 13.43,60 30,60 C38.96,60 47,56.06 52.5,49.83 C58,56.06 66.04,60 75,60 C91.57,60 105,46.57 105,30 C105,13.43 91.57,0 75,0 Z M53.4,30 C53.4,42.92 42.92,53.4 30,53.4 C17.08,53.4 6.6,42.92 6.6,30 C6.6,17.08 17.08,6.6 30,6.6 C42.92,6.6 53.4,17.08 53.4,30 Z M87.35,40.72 L81.03,40.72 L76.87,30.14 L76.75,29.84 L72.57,40.72 L66.27,40.72 L59.71,19.3 L59.7,19.28 L66.83,19.28 L69.92,30.07 L70.02,30.43 L74.17,19.27 L79.39,19.27 L83.41,30.07 L83.54,30.43 L83.59,30.25 C84.64,26.59 85.68,22.93 86.73,19.27 L93.89,19.27 C91.72,26.43 89.54,33.57 87.35,40.72 Z M31.09,18 L17.88,18 L17.88,42 L31.09,42 C37.8,42 44.69,38.06 44.69,30 C44.68,21.95 37.8,18 31.09,18 Z M30.58,34.74 L30.23,34.74 L25.48,34.74 L25.48,25.25 L30.58,25.25 C34.9,25.25 36.4400487,27.49 36.4400487,29.99 C36.45,32.46 34.92,34.74 30.58,34.74 Z",id:"Shape",fill:"#002186",fillRule:"nonzero"}))),JF=h(ZF)``,e7=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20",...e},x.createElement("path",{d:"M11.5 3.5 11.5 4.233C14.342 4.233 15.167 4.245 15.167 4.258L8.984 10.467 10.033 11.516C14.826 6.725 16.228 5.333 16.242 5.333L16.267 9 17.733 9 17.733 2.767 11.5 2.767 11.5 3.5M2.267 11 2.267 17.233 16.733 17.233 16.733 12 15.267 12 15.25 15.75 9.5 15.75 3.75 15.75 3.75 6.25 9.5 6.233 9.5 4.767 2.267 4.767 2.267 11 "})),L_=h(e7)`
  width: 20px;
`,t7=e=>x.createElement("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",...e},x.createElement("g",{fillRule:"evenodd"},x.createElement("path",{d:"M4.25 5.25v12.5h14.5V5.25zm1.5 1.5h11.5v9.5H5.75z"}),x.createElement("path",{d:"M1.25 2.25V13.5h1.5V3.75H15.5v-1.5z"}))),n7=h(t7)`
  width: 20px;
`,Gy=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 25 25",...e},x.createElement("path",{d:"m22.5 8.75-10 7.5-10-7.5",stroke:"#002D5A",strokeWidth:1.875,fill:"none",fillRule:"evenodd"})),I_=h(Gy)`
  width: 40px;
`,r7=({className:e,pointsDown:t})=>s.jsx(I_,{className:H(e,{down:t})}),Ml=h(r7)`
  transition: transform 450ms cubic-bezier(0.43, 0, 0.09, 1); 
  transform: rotate(0deg);
  
  &.down {
    transform: rotate(0deg);
  }
  &:not(.down) {
    transform: rotate(180deg);
  }
`,Ju=h(Gy)`
  width: 40px;
  transform: rotate(90deg);
`,ed=h(Gy)`
  width: 40px;
  transform: rotate(-90deg);
`,i7=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("circle",{cx:10,cy:10,r:8.333,fill:"none",stroke:"#A1ABB4",strokeWidth:2}));h(i7)`
  width: 20px;
`;const o7=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",...e},x.createElement("circle",{className:"first-circle",transform:"translate(32 32)",fill:"none",stroke:"white",strokeWidth:10,r:27}),x.createElement("circle",{className:"second-circle",transform:"rotate(-90 32 0)",fill:"none",stroke:"black",strokeWidth:10,strokeDasharray:"170,170",r:27})),a7=h(o7)`
  width: 54px;
  height: 54px;

  ${b.md`
    width: 70px;
    height: 70px;
  `}
`,s7=e=>x.createElement("svg",{viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg",...e},x.createElement("g",{fillRule:"evenodd"},x.createElement("path",{d:"M7.5 4.5c3.728 0 6.75 1.343 6.75 3s-3.022 3-6.75 3S.75 9.157.75 7.5s3.022-3 6.75-3zm0 1.125c-1.665 0-3.211.29-4.316.782-.896.398-1.309.832-1.309 1.093s.413.695 1.309 1.093c1.105.491 2.651.782 4.316.782s3.211-.29 4.316-.782c.896-.398 1.309-.832 1.309-1.093s-.413-.695-1.309-1.093c-1.105-.491-2.651-.782-4.316-.782z"}),x.createElement("path",{d:"M7.5.75a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5zm0 1.125a5.625 5.625 0 1 0 0 11.25 5.625 5.625 0 0 0 0-11.25z"}),x.createElement("path",{d:"M10.5 7.5c0 3.52-1.343 6.375-3 6.375s-3-2.854-3-6.375c0-3.52 1.343-6.375 3-6.375s3 2.854 3 6.375zm-1.125 0c0-1.556-.287-3-.772-4.029C8.21 2.635 7.781 2.25 7.5 2.25s-.71.385-1.103 1.221c-.485 1.03-.772 2.473-.772 4.029s.287 3 .772 4.029c.393.836.822 1.221 1.103 1.221s.71-.385 1.103-1.221c.485-1.03.772-2.473.772-4.029z"}))),l7=h(s7)`
  && path {
    stroke: none;
  }
  width: 15px;
`,c7=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"#002D5A",strokeWidth:2},x.createElement("path",{d:"M4 9L4 16 11 16",transform:"rotate(45 7.5 12.5)"}),x.createElement("path",{strokeLinecap:"square",d:"M3.5 12.5L17.5 12.5M17.5 12.5L17.5 5.5M17.5 5L12 5"}))),u7=h(c7)`
  width: 20px;
`,{StyledCheck:d7}=ne(()=>J(()=>import("./Check-f42fe692.js"),[]));ne(()=>J(()=>import("./LeftArrow-d82fe6ea.js"),[]));ne(()=>J(()=>import("./RightArrow-64149788.js"),[]));const{StyledChainLink:f7}=ne(()=>J(()=>import("./ChainLink-b557da66.js"),[]));function p7(e,t){return e?e.split(".").reduce((n,r)=>n&&n[r]||null,t):t}const Hy=(e,t)=>Object.keys(t).reduce((n,r)=>{const i=new RegExp(/\${/.source+r+/}/.source,"g");return n.replace(i,t[r])},e),Mh=({key:e,count:t,parameters:n={}})=>t===1?{key:`${e}.singular`,parameters:n}:{key:`${e}.plural`,parameters:n},m7=({key:e,translations:t})=>{const n=p7(e,t);return n||e};class Bh{constructor(t){Zf(this,"translations",null);this.translations=t||null}t(t,n={}){const r=m7({key:t,translations:this.translations});return Hy(r,n)}}const j_=x.createContext(new Bh),Qy=()=>x.useContext(j_),h7=e=>typeof e=="string"||!e,g7=e=>h7(e)?{key:e,parameters:{}}:e,z=e=>{const t=Qy(),{key:n,parameters:r}=g7(e);return n?t.t(n,r):null},y7=({key:e,parameter:t,componentFn:n})=>{const r=z(e),[i,o]=r.split(`\${${t}}`);return s.jsxs(s.Fragment,{children:[i,n(),o]})},v7=({to:e,title:t,children:n,...r})=>{const i=z("general.link.external_prefix"),o=LT(e);return s.jsx("a",{href:e,target:"_blank",rel:o?void 0:"noopener noreferrer nofollow",title:t?`${i} — ${t}`:void 0,...r,children:n})},x7=({to:e,...t})=>{const n=jD(e),{isMobileMode:r}=At(),[i]=De(),o=i.pathname===n.pathname;return s.jsx(iN,{to:n,isMobileMode:r,replace:o,scrollTop:!0,...t})};var Uh={exports:{}};/*!
 * CSSJanus. https://github.com/cssjanus/cssjanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e,t){var n;function r(o,a){var l=[],c=0;function u(f){return l.push(f),a}function d(){return l[c++]}return{tokenize:function(f){return f.replace(o,u)},detokenize:function(f){return f.replace(new RegExp("("+a+")","g"),d)}}}function i(){var o="`TMP`",a="`NOFLIP_SINGLE`",l="`NOFLIP_CLASS`",c="`COMMENT`",u="[^\\u0020-\\u007e]",d="(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)",f="(?:[0-9]*\\.[0-9]+|[0-9]+)",p="(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)",m="direction\\s*:\\s*",S="[!#$%&*-~]",w=`['"]?\\s*`,E="(^|[^a-zA-Z])",g="[^\\}]*?",y="\\/\\*\\!?\\s*@noflip\\s*\\*\\/",v="\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/",k="(?:"+d+"|\\\\[^\\r\\n\\f0-9a-f])",T="(?:[_a-z]|"+u+"|"+k+")",$="(?:[_a-z0-9-]|"+u+"|"+k+")",I="-?"+T+$+"*",j=f+"(?:\\s*"+p+"|"+I+")?",N="((?:-?"+j+")|(?:inherit|auto))",R="((?:margin|padding|border-width)\\s*:\\s*)",K="((?:-color|border-style)\\s*:\\s*)",ce="(#?"+$+"+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",le="(?:"+S+"|"+u+"|"+k+")*?",Ye="(?![a-zA-Z])",Ke="(?!("+$+`|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|`+c+")*?{)",Xe="(?!"+le+w+"\\))",Ie="(?="+le+w+"\\))",F="(\\s*(?:!important\\s*)?[;}])",W=/`TMP`/g,ee=new RegExp(v,"gi"),ve=new RegExp("("+y+Ke+"[^;}]+;?)","gi"),ge=new RegExp("("+y+g+"})","gi"),Lt=new RegExp("("+m+")ltr","gi"),lt=new RegExp("("+m+")rtl","gi"),tr=new RegExp(E+"(left)"+Ye+Xe+Ke,"gi"),It=new RegExp(E+"(right)"+Ye+Xe+Ke,"gi"),Bt=new RegExp(E+"(left)"+Ie,"gi"),os=new RegExp(E+"(right)"+Ie,"gi"),Ao=new RegExp(E+"(ltr)"+Ie,"gi"),nr=new RegExp(E+"(rtl)"+Ie,"gi"),CL=new RegExp(E+"([ns]?)e-resize","gi"),AL=new RegExp(E+"([ns]?)w-resize","gi"),LL=new RegExp(R+N+"(\\s+)"+N+"(\\s+)"+N+"(\\s+)"+N+F,"gi"),IL=new RegExp(K+ce+"(\\s+)"+ce+"(\\s+)"+ce+"(\\s+)"+ce+F,"gi"),jL=new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)("+j+")","gi"),OL=new RegExp("(background-position-x\\s*:\\s*)(-?"+f+"%)","gi"),RL=new RegExp("(border-radius\\s*:\\s*)"+N+"(?:(?:\\s+"+N+")(?:\\s+"+N+")?(?:\\s+"+N+")?)?(?:(?:(?:\\s*\\/\\s*)"+N+")(?:\\s+"+N+")?(?:\\s+"+N+")?(?:\\s+"+N+")?)?"+F,"gi"),DL=new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)"+N,"gi"),NL=new RegExp("(text-shadow\\s*:\\s*)"+N+"(\\s*)"+ce,"gi"),PL=new RegExp("(text-shadow\\s*:\\s*)"+ce+"(\\s*)"+N,"gi"),FL=new RegExp("(text-shadow\\s*:\\s*)"+N,"gi"),ML=new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)"+N+"(\\s*\\))","gi"),BL=new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)"+N+"((?:\\s*,\\s*"+N+"){0,2}\\s*\\))","gi");function Av(re,dn,Ne){var Ut,fn;return Ne.slice(-1)==="%"&&(Ut=Ne.indexOf("."),Ut!==-1?(fn=Ne.length-Ut-2,Ne=100-parseFloat(Ne),Ne=Ne.toFixed(fn)+"%"):Ne=100-parseFloat(Ne)+"%"),dn+Ne}function Yf(re){switch(re.length){case 4:re=[re[1],re[0],re[3],re[2]];break;case 3:re=[re[1],re[0],re[1],re[2]];break;case 2:re=[re[1],re[0]];break;case 1:re=[re[0]];break}return re.join(" ")}function UL(re,dn){var Ne,Ut=[].slice.call(arguments),fn=Ut.slice(2,6).filter(function(Xf){return Xf}),Ov=Ut.slice(6,10).filter(function(Xf){return Xf}),zL=Ut[10]||"";return Ov.length?Ne=Yf(fn)+" / "+Yf(Ov):Ne=Yf(fn),dn+Ne+zL}function Kf(re){return parseFloat(re)===0?re:re[0]==="-"?re.slice(1):"-"+re}function Lv(re,dn,Ne){return dn+Kf(Ne)}function Iv(re,dn,Ne,Ut,fn){return dn+Ne+Kf(Ut)+fn}function jv(re,dn,Ne,Ut,fn){return dn+Ne+Ut+Kf(fn)}return{transform:function(re,dn){var Ne=new r(ve,a),Ut=new r(ge,l),fn=new r(ee,c);return re=fn.tokenize(Ut.tokenize(Ne.tokenize(re.replace("`","%60")))),dn.transformDirInUrl&&(re=re.replace(Ao,"$1"+o).replace(nr,"$1ltr").replace(W,"rtl")),dn.transformEdgeInUrl&&(re=re.replace(Bt,"$1"+o).replace(os,"$1left").replace(W,"right")),re=re.replace(Lt,"$1"+o).replace(lt,"$1ltr").replace(W,"rtl").replace(tr,"$1"+o).replace(It,"$1left").replace(W,"right").replace(CL,"$1$2"+o).replace(AL,"$1$2e-resize").replace(W,"w-resize").replace(RL,UL).replace(DL,Lv).replace(NL,jv).replace(PL,jv).replace(FL,Lv).replace(ML,Iv).replace(BL,Iv).replace(LL,"$1$2$3$8$5$6$7$4$9").replace(IL,"$1$2$3$8$5$6$7$4$9").replace(jL,Av).replace(OL,Av),re=Ne.detokenize(Ut.detokenize(fn.detokenize(re))),re}}}n=new i,e.exports?t.transform=function(o,a,l){var c;return typeof a=="object"?c=a:(c={},typeof a=="boolean"&&(c.transformDirInUrl=a),typeof l=="boolean"&&(c.transformEdgeInUrl=l)),n.transform(o,c)}:typeof window<"u"&&(window.cssjanus=n)})(Uh,Uh.exports);var S7=Uh.exports;const w7=fo(S7);function O_(e,t,n){switch(e.type){case BT:case nf:case Gu:return e.return=e.return||e.value;case io:e.value=Array.isArray(e.props)?e.props.join(","):e.props,Array.isArray(e.children)&&e.children.forEach(function(i){i.type===Gu&&(i.children=i.value)})}var r=yl(Array.prototype.concat(e.children),O_);return Mn(r)?e.return=e.value+"{"+r+"}":""}function R_(e,t,n,r){if(e.type===Iy||e.type===mN||e.type===io&&(!e.parent||e.parent.type===pN||e.parent.type===io)){var i=w7.transform(O_(e));e.children=i?VT(i)[0].children:[],e.return=""}}Object.defineProperty(R_,"name",{value:"stylisRTLPlugin"});const b7=({children:e,isRtl:t})=>s.jsx(l4,{stylisPlugins:t?[R_]:[],children:s.jsx(s.Fragment,{children:e})}),D_=Object.freeze({isRtl:!1,isEuropeanLang:!0,isAsianOrAfricanLang:!1,isChineseLang:!1}),N_=x.createContext(D_),_n=()=>x.useContext(N_),k7=e=>{const{isAsianOrAfricanLang:t}=e;return{...e,isAsianOrAfricanLang:t&&!["ARABIC","DARI","PASHTO"].includes(e.language)}},E7=({children:e,content:t=D_})=>{const{isRtl:n,isEuropeanLang:r,isAsianOrAfricanLang:i,isChineseLang:o}=k7(t);return s.jsx(N_.Provider,{value:{isRtl:n,isEuropeanLang:r,isAsianOrAfricanLang:i,isChineseLang:o},children:s.jsx(b7,{isRtl:n,children:e})})},$7=x.forwardRef(({isA:e="span",children:t,className:n,...r},i)=>{const o=e,{isChineseLang:a,isAsianOrAfricanLang:l,isEuropeanLang:c}=_n(),u=H(n,{zh:a,"noto-sans":l,"has-italic":c});return s.jsx(o,{ref:i,className:u,...r,children:t})}),lr={fontFamily:"--font-family",pangeaOpticalSize:"--pangea-opsz",fontWeight:"--font-wght"},T7="Arial, sans-serif",ao=h($7)`
  line-height: 1.4;
  letter-spacing: normal;

  &, & * {
    font-family: var(${lr.fontFamily}, Pangea), ${T7};
    font-variation-settings:
      "wght" var(${lr.fontWeight}, 400),
      "opsz" var(${lr.pangeaOpticalSize}, 20);
  }

  &.zh, &.zh * {
    font-family: 'MS Song','MS Hei', Arial, Helvetica, sans-serif;
  }

  &.noto-sans, &.noto-sans * {
    font-family: NotoSans, Arial, Helvetica;
  }
`,Bl=`
  &.has-italic {
    font-style: italic;
  }
`,qy=`
  ${lr.fontWeight}: 700;
  font-weight: 700;
`,pa=`
  ${lr.fontWeight}: 600;
  font-weight: 600;
`,_7=`
  ${lr.fontWeight}: 500;
  font-weight: 500;
`,Yy=`
  ${lr.fontWeight}: 400;
  font-weight: 400;
`,Ul=`
  ${lr.pangeaOpticalSize}: 10;
`,C7=`
  ${lr.pangeaOpticalSize}: unset;
`,A7=h(ao)(...qy),P_=h(A7)(...Ul),pf=h(ao)(...pa);h(pf)(...Bl);h(pf)(...Ul);const F_=h(ao)(..._7),M_=h(F_)(...Ul),L7=h(ao)(...Yy),mf=h(L7)(...Ul),I7=h(mf)(...Bl),vt={dwDarkBlueAndWhite:"--dw-dark-blue-and-white-text-color",whiteAndWhite:"--white-and-white-text-color",blueGrey04AndDwLightBlueNew:"--blue-grey-04-and-dw-light-blue-new-text-color",blueGrey04AndBlueGrey03:"--blue-grey-04-and-blue-grey-03-text-color",blueGrey05AndBlueGrey02:"--blue-grey-05-and-blue-grey-02-text-color",darkBlueGrey02AndBlueGrey01:"--dark-blue-grey-02-and-blue-grey-01-text-color",darkBlueGrey01AndBlueGrey02:"--dark-blue-grey-01-and-blue-grey-02-text-color",darkBlueGrey01AndDarkBlueGrey01:"--dark-blue-grey-01-and-dark-blue-grey-01-color",breakingRedAndAccentRed:"--breaking-red-and-accent-red-text-color"},be={DW_DARK_BLUE_AND_WHITE:{lightStyles:`color: var(${vt.dwDarkBlueAndWhite}, ${C.DW_DARK_BLUE});`,darkStyles:`${vt.dwDarkBlueAndWhite}: ${C.WHITE};`},WHITE_AND_WHITE:{lightStyles:`color: var(${vt.whiteAndWhite}, ${C.WHITE});`,darkStyles:""},BLUE_GREY_04_AND_DW_LIGHT_BLUE_NEW:{lightStyles:`color: var(${vt.blueGrey04AndDwLightBlueNew}, ${C.BLUE_GREY_04});`,darkStyles:`${vt.blueGrey04AndDwLightBlueNew}: ${C.DW_LIGHT_BLUE_NEW};`},BLUE_GREY_04_AND_BLUE_GREY_03:{lightStyles:`color: var(${vt.blueGrey04AndBlueGrey03}, ${C.BLUE_GREY_04});`,darkStyles:`${vt.blueGrey04AndBlueGrey03}: ${C.BLUE_GREY_03};`},BLUE_GREY_05_AND_BLUE_GREY_02:{lightStyles:`color: var(${vt.blueGrey05AndBlueGrey02}, ${C.BLUE_GREY_05});`,darkStyles:`${vt.blueGrey05AndBlueGrey02}: ${C.BLUE_GREY_02};`},DARK_BLUE_GREY_02_AND_BLUE_GREY_01:{lightStyles:`color: var(${vt.darkBlueGrey02AndBlueGrey01}, ${C.DARK_BLUE_GREY_02});`,darkStyles:`${vt.darkBlueGrey02AndBlueGrey01}: ${C.BLUE_GREY_01};`},DARK_BLUE_GREY_01_AND_BLUE_GREY_02:{lightStyles:`color: var(${vt.darkBlueGrey01AndBlueGrey02}, ${C.DARK_BLUE_GREY_01});`,darkStyles:`${vt.darkBlueGrey01AndBlueGrey02}: ${C.BLUE_GREY_02};`},DARK_BLUE_GREY_01_AND_DARK_BLUE_GREY_01:{lightStyles:`color: var(${vt.darkBlueGrey01AndDarkBlueGrey01}, ${C.DARK_BLUE_GREY_01});`,darkStyles:`${vt.darkBlueGrey01AndDarkBlueGrey01}: ${C.DARK_BLUE_GREY_01};`},BREAKING_RED_AND_ACCENT_RED:{lightStyles:`color: var(${vt.breakingRedAndAccentRed}, ${C.BREAKING_RED});`,darkStyles:`${vt.breakingRedAndAccentRed}: ${C.ACCENT_RED};`}},it=h(mf)(...be.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.lightStyles);it.darkStyles=be.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.darkStyles;const zl=h(M_)(...be.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.lightStyles);zl.darkStyles=be.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.darkStyles;const Ky=h(mf)(...be.DARK_BLUE_GREY_01_AND_BLUE_GREY_02.lightStyles);Ky.darkStyles=be.DARK_BLUE_GREY_01_AND_BLUE_GREY_02.darkStyles;const Hr=h(mf)(...be.BLUE_GREY_04_AND_BLUE_GREY_03.lightStyles);Hr.darkStyles=be.BLUE_GREY_04_AND_BLUE_GREY_03.darkStyles;const wr=({className:e,to:t,title:n,skipTitleForInternal:r,...i})=>AT(t)?s.jsx(ao,{isA:v7,className:e,to:t,title:n,...i}):s.jsx(ao,{isA:x7,className:e,to:t,title:r?void 0:n,...i}),rn={color:"--link-color",visited:"--link-visited-color",hover:"--link-hover-color",active:"--link-active-color"},B_=`
  color: var(${rn.hover}, ${C.DW_DARK_BLUE});
  text-decoration: underline;
`,Xy=`
  color: var(${rn.active}, ${C.DARK_BLUE_GREY_01});
`,j7=`
  text-decoration: none;
  cursor: pointer;
  ${Ul}

  &, & > * {
    line-height: 1.1;
  }
  svg {
    fill: currentColor;
  }

  color: var(${rn.color}, ${C.DW_DARK_BLUE});

  &:visited {
    color: var(${rn.visited}, ${C.BLUE_GREY_04});
  }
  &:hover {
    ${B_}
  }
  &:active {
    ${Xy}
  }
`,U_=`
  ${j7}

  &:focus {
    outline: none;
  }
`,O7=`
  ${rn.color}: ${C.DW_DARK_BLUE};
  ${rn.visited}: ${C.BLUE_GREY_04};
  ${rn.hover}: ${C.DW_DARK_BLUE};
  ${rn.active}: ${C.DARK_BLUE_GREY_01};
`,z_=`
  ${it.darkStyles}
  ${rn.color}: ${C.WHITE};
  ${rn.visited}: ${C.BLUE_GREY_03};
  ${rn.hover}: ${C.WHITE};
  ${rn.active}: ${C.BLUE_GREY_02};
`,go=h(wr)`
  ${U_}
`;go.darkStyles=z_;const R7=({className:e,isBlue:t=!1,href:n="/"})=>{const r=z("component.site_header.logo.label");return s.jsx(wr,{className:e,to:n,title:r,children:s.jsx("div",{className:"logo-icon",children:t?s.jsx(JF,{}):s.jsx(XF,{})})})},D7=h(R7)`
  .logo-icon {
    width:44px;
    height:25px;
  }

  ${b.md`
    .logo-icon {
      width:53px;
      height:30px;
    }
  `}

  ${b.lg`
    .logo-icon {
      width:63px;
      height:36px;
    }
  `}
`,W_=({className:e,isA:t="div",onClick:n=Te,onKeyDown:r=Te,children:i,disabled:o,"aria-hidden":a,tabIndex:l=o||a?-1:0,...c})=>s.jsx(P_,{isA:t,className:H(e,{disabled:o}),role:"button",tabIndex:l,"aria-hidden":a,onClick:n,onKeyDown:u=>{r(u),v4(u)&&(u.key===Sn.SPACEBAR&&u.preventDefault(),n(u))},...c,children:i}),nt={color:"--button-color",background:"--button-background",hoverColor:"--button-hover-color",activeColor:"--button-active-color",activeBg:"--button-active-background-color",disabledBg:"--button-disabled-background-color"},$S=`
    box-shadow: 0 0 0 2px var(${nt.hoverColor}, ${C.DW_DARK_BLUE}) inset;
    text-decoration: none;
`,Zy=({cssSelector:e=""}={})=>M`
  &.${oo}${e} {
    ${$S}
  }
  ${Ku.mouse`
    &:hover${e} {
      ${$S}
      color: var(${nt.color}, ${C.DW_DARK_BLUE});
    }
  `}
  &:active${e}  {
    background: var(${nt.activeBg}, ${C.DW_DARK_BLUE});
    color: var(${nt.activeColor}, ${C.WHITE});
    box-shadow: none;

    svg {
      fill: var(${nt.activeColor}, ${C.WHITE});
      path {
        stroke: var(${nt.activeColor}, ${C.WHITE});
      }
    }
  }
`,Qr=h(W_)`
  text-decoration: none;
  display: block;
  border: none;
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
  outline: none;
  width: fit-content;

  background: var(${nt.background}, transparent);
  color: var(${nt.color}, ${C.DW_DARK_BLUE});
  svg {
    fill: currentColor;
    path {
      stroke: currentColor;
    }
  }
  ${Zy()}

  &${G.disabled} {
    cursor: default;
    pointer-events: none;
  }
`;Qr.darkStyles=`
${nt.hoverColor}: ${C.WHITE};
${nt.color}: ${C.WHITE};
${nt.activeColor}: ${C.DW_DARK_BLUE};
${nt.activeBg}: ${C.WHITE};
${nt.disabledBg}: ${C.BLUE_GREY_04};
`;const N7=({className:e,onClick:t,show:n=!1})=>s.jsx(W_,{className:H(e,{visible:n}),onClick:t,tabIndex:-1,"aria-hidden":"true"}),V_=h(N7)`
  transition: opacity 300ms cubic-bezier(0.09, 0, 0.09, 1);
  opacity: 0;

  &.visible {
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${C.DW_BLUE};
    opacity: .67;
    width: 100%;
    height: 100vh;
    z-index: -1;
    cursor: pointer;
    transition: opacity 500ms cubic-bezier(0.09, 0, 0.09, 1);
  }
`,hf={secondaryBg:"--button-secondary-background-color",tertiaryBoxShadowColor:"--button-tertiary-box-shadow-color"},G_=`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  word-break: break-word; 
  
  overflow: hidden;
`,P7=`
  padding: 0 30px;
  min-height: 48px;
`,F7=`
  padding: 5px 6px;
`,H_=`
  &${G.disabled} {
    background: var(${nt.disabledBg}, ${C.BLUE_GREY_02});
    color: ${C.BLUE_GREY_03};
    box-shadow: none;
  }
`,gf=h(Qr)`
  ${G_}
  ${P7}
  ${H_}
`,Q_=h(Qr)`
  ${G_}
  ${F7}
  ${H_}
`,ht=h(Qr)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
`;ht.darkStyles=Qr.darkStyles;const q_=`
  background: ${C.DW_YELLOW};
  ${nt.color}: ${C.DW_DARK_BLUE};
`,yf=h(gf)`
  ${q_}
`;yf.darkStyles=`
  ${Qr.darkStyles}
  ${nt.color}: ${C.DW_DARK_BLUE};
`;const Y_=h(Q_)`
  ${q_}
`;Y_.darkStyles=yf.darkStyles;const Wl=h(gf)`
  background: var(${hf.secondaryBg}, ${C.BLUE_GREY_02});
`;Wl.darkStyles=`
  ${Qr.darkStyles}
  ${hf.secondaryBg}: ${C.BLUE_GREY_04};
`;const Jy=`
box-shadow: inset 0 0 0 2px var(${hf.tertiaryBoxShadowColor}, ${C.BLUE_GREY_03});
`,br=h(gf)`
  ${Jy}
`;br.darkStyles=`
  ${Qr.darkStyles}
  ${hf.tertiaryBoxShadowColor}: ${C.BLUE_GREY_04};
`;const e0=h(ht)`
  ${Jy}
`;e0.darkStyles=br.darkStyles;const K_=`
  background-color: rgba(0, 8, 33, 0.45);
  ${Qr.darkStyles}
`,t0=h(Q_)`
  ${Jy}
`;t0.darkStyles=br.darkStyles;const X_=h(gf)`
  ${K_}
`;X_.darkStyles="";const zh=h(ht)`
  ${K_}
`;zh.darkStyles=X_.darkStyles;const vf=h(ht)`
  ${nt.color}: ${C.WHITE};
  ${nt.background}: ${C.DW_LIGHT_BLUE};
`;vf.darkStyles=ht.darkStyles;const Z_=h(go)`
  ${qy}
`;Z_.darkStyles=go.darkStyles;const Ha=h(go)`
  ${pa}
`;Ha.darkStyles=go.darkStyles;const Oi=h(Ha)`
  ${C7}
`;Oi.darkStyles=Ha.darkStyles;const n0=h(Oi)`
  ${Bl}
`;n0.darkStyles=Ha.darkStyles;const M7=h(go)`
  ${Yy}
`;M7.darkStyles=go.darkStyles;const He=Z_,B7=`
  && {
    color: var(${rn.color}, ${C.DW_DARK_BLUE});
  }
`,Ri=h(He)`${B7}`;Ri.darkStyles=He.darkStyles;const U7=`
  &:hover, &.${oo} {
    text-decoration: none;
    span:first-of-type {
        text-decoration: underline;
    }
  }
  &:focus-visible {
    text-decoration: none;
  }
`,r0=h(Ri)`${U7}`;r0.darkStyles=Ri.darkStyles;const z7=h(Ha)`
  text-decoration: underline;
  color: inherit;
  &:hover {
    color: inherit;
  }
  &:active {
    ${Xy}
  }
`;z7.darkStyles=Ha.darkStyles;const W7=h(wr)`
  color: inherit;
  &&:is(:link, :visited, :hover, :active)  {
    text-decoration: none;
    color: inherit;
  }
  line-height: inherit;
  font-weight: inherit;
`,V7=({learngermanUrl:e,className:t})=>{const n=z("component.navigation.more_products.learngerman.label"),r=z("component.navigation.more_products.learngerman.itemLink");return s.jsx(Ri,{title:n,to:e,rel:"noopener noreferrer",className:t,children:r})},G7=h(V7)`
  ${Ri.darkStyles}
`,TS={},A=e=>({name:e.name,fragment(){const t=TS[e.name];if(t)return t;const n=e.fragment();return TS[e.name]=n,n}}),H7=({className:e,isA:t="div",...n})=>{const r=t;return s.jsx(r,{className:e,...n})},Sl=h(H7)`
  margin-left: 45px;
  margin-right: 12px;

  ${b.md`
    width: 600px;
    margin-left: 145px;
    margin-right: auto;
  `}
  ${b.lg`
    width: 700px;
    margin-left: auto;
  `}
  ${b.xl`
    width: 810px;
  `}
`,Q7=A({name:"LearnGerman",fragment(){return _`fragment ${this.name} on FooterAspect {
      footer {
        learngermanUrl
      }
    }`}}),q7=({className:e,learngermanUrl:t,...n})=>{const r=y7({key:"component.navigation.more_products.learngerman.item",parameter:"link",componentFn:()=>s.jsx(G7,{learngermanUrl:t})});return s.jsx("section",{className:H(e,"learn-german"),"aria-label":z("component.navigation.more_products.section.label"),...n,children:s.jsx(Sl,{children:s.jsx(it,{className:"text",children:r})})})},_S=h(q7)`
  ${it.darkStyles}
  padding-top: 20px;
  padding-bottom: 100px;
  font-size: 1.6rem;
  background-color: ${C.DW_DARK_BLUE};

  a {
    &:hover, &.${oo}{
      text-decoration: underline;
    }
  }


  ${b.md`
    padding-top: 25px;
    padding-bottom: 25px;
  `}

  ${b.lg`
    padding-top: 30px;
    padding-bottom: 30px;
  `}
`,Y7=()=>O.document.querySelectorAll("nav .learn-german"),K7=e=>{const t=O.window.getComputedStyle(e);return(t==null?void 0:t.display)!=="none"},J_=()=>{const t=[...Y7()].filter(K7)[0];return t==null?void 0:t.querySelector("a")},X7=({event:e,node:t})=>e.target===t,ae={xs:{wide:"90",thin:"50"},md:"60",lg:"70",xl:"70"},Z7=({title:e,date:t})=>[e,"DW",t].filter(n=>!!n).join(" – "),i0=e=>e.genre==="COLUMN",CS=e=>e.genre==="DOSSIER",J7=e=>{var t;return(t=e.opinionSeries)==null?void 0:t.find(i0)},e6=e=>{var t;return(t=e.opinionSeries)==null?void 0:t.find(n=>i0(n)&&n.autoDelivery)},e2=e=>O.document.getElementById(e).focus(),t2=x.createContext({isNavigationVisible:!1,isLanguageToggled:!1,isFocusMenuShown:!1}),Qa=()=>x.useContext(t2),t6=({children:e,value:t})=>s.jsx(t2.Provider,{value:t,children:e}),AS=Q7,n6=(e,t)=>{t&&c_(e)&&(e.preventDefault(),J_().focus())},r6=e=>{cf(e)&&X7({event:e,node:J_()})&&(e.preventDefault(),e2(Me.quickNav.navigationToggle))},i6=({className:e,children:t,setNavigationVisible:n=Te,learngermanUrl:r})=>{const{isNavigationVisible:i,isLanguageToggled:o,isFocusMenuVisible:a}=Qa(),l=x.useRef(null),c=z(`component.navigation.toggle_button.label.${i?"close":"open"}`),[,{toggleScrollLockAndSetWidth:u}]=zy({onReset:()=>d({isNavigationVisible:!1})}),d=({isNavigationVisible:f})=>{u({isScrollDisabled:f,ref:l.current}),n(f)};return x.useEffect(()=>{l.current&&(l.current.scrollTop=0)},[i,o]),s.jsxs("nav",{className:e,children:[s.jsx(ht,{id:Me.quickNav.navigationToggle,className:H("nav-btn",{visible:i}),title:c,"aria-expanded":i,onClick:()=>{d({isNavigationVisible:!i})},onKeyDown:f=>{n6(f,i)},children:s.jsx(GF,{className:"burger-icon"})}),s.jsx("div",{className:"nav-position",style:{transform:`translateY(${i?0:-100}%)`},children:s.jsxs("div",{className:H("nav-height",{"focus-menu-inline":a,"language-open":o}),role:"button",tabIndex:"-1",onKeyDown:r6,children:[s.jsx("div",{className:"nav-background",children:s.jsxs("div",{className:"nav-elements",ref:l,children:[t,i&&s.jsx(_S,{className:"learn-german-link",learngermanUrl:r})]})}),i&&s.jsx(_S,{className:"learn-german-link",learngermanUrl:r})]})}),s.jsx(V_,{className:"backdrop",show:i,onClick:()=>{d({isNavigationVisible:!i})}})]})},o6=M`
  .nav-btn {
    position: absolute;
    right: 0;
    top: 0;
    margin: 5px;
    z-index: 5;
    width: 40px;

    .burger-icon {
      width: 20px;
    }
  }

  .nav-height > .learn-german-link {
    display: none;
  }

  .nav-position {
    background-color: ${C.DW_LIGHT_BLUE_NEW};
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  .nav-height {
    padding-top: ${ae.xs.thin}px;
    outline: none;
    cursor: unset;
  }

  .nav-elements {
    position: relative;
    height: calc(100vh - ${ae.xs.thin}px);
    overflow-y: auto;
    overflow-x: hidden;
    visibility: hidden;
  }

  .language-open {
    .nav-background {
      background-color: ${C.DARK_BLUE_GREY_01};
    }
  }

  ${dr.xs`
    .nav-height {
      &.focus-menu-inline {
        &.language-open {
          padding-top: calc(${ae.xs.wide}px + 95px);
        }
      }

      &.language-open {
        padding-top: calc(${ae.xs.thin}px + 95px);
      }
    }
  `}

  ${dr.sm`
    .nav-height {
      &.focus-menu-inline {
        padding-top: ${ae.xs.wide}px;

        .nav-elements {
          height: calc(100vh - ${ae.xs.wide}px);
        }

        &.language-open {
          padding-top: calc(${ae.xs.wide}px + 99px);

          .nav-elements {
            height: calc(100vh - (${ae.xs.wide}px + 99px));
          }
        }
      }

      &.language-open {
        padding-top: calc(${ae.xs.thin}px + 99px);

        .nav-elements {
          height: calc(100vh - (${ae.xs.thin}px + 99px));
        }
      }
    }
  `}

  ${b.md`
    .nav-btn {
      margin: 10px;
    }

    .nav-height {
      max-height: 80vh;
      padding-top: ${ae.md}px;

      &.language-open {
        padding-top: calc(${ae.md}px + 109px);

        .nav-elements {
          max-height: calc(80vh - (136px + 109px));
        }
      }
    }

    .nav-elements {
      max-height: calc(80vh - 136px);
      height: 100%;
    }

    .nav-height > .learn-german-link {
      display: block;
    }
    .nav-elements > .learn-german-link {
      display: none;
    }
  `}
`,a6=h(i6)`
  ${o6}
  .nav-btn {
    .burger-icon {
      path {
        stroke: none;
      }
      g {
        transform: rotate(0);
        transform-origin: 50%;
        transition: transform 300ms cubic-bezier(0.91, 0, 0.57, 1);
      }

      .top-line path,
      .bottom-line path {
        transform: translateY(0);
        transition: transform 100ms cubic-bezier(0.43, 0, 0.09, 1) 200ms;
      }
    }
  }
  .nav-btn.visible .burger-icon {
    g {
      transform: rotate(-225deg);
      transition: transform 500ms cubic-bezier(0.43, 0, 0.09, 1);
    }

    path {
      transition: transform 167ms cubic-bezier(0.43, 0, 0.09, 1);
    }

    .top-line path {
      transform: translateY(7px);
    }

    .bottom-line {
      transform: rotate(-135deg);

      path {
        transform: translateY(-7px);
      }
    }
  }

  .nav-position {
    transition: transform 300ms cubic-bezier(0.43, 0, 0.09, 1);
  }

  .nav-btn.visible ~ .nav-position {
    transition: transform 500ms cubic-bezier(0.43, 0, 0.09, 1);

    .nav-elements {
      visibility: visible;
    }
  }

  .nav-elements {
    scrollbar-width: thin;
    scrollbar-color: ${C.DW_BLUE} transparent;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${C.DW_BLUE};
      border-radius: 1px;
      background-clip: content-box;
      border: 2px solid transparent;

      ${Ku.mouse`
        :hover {
          border-radius: 4px;
          background-color: ${C.BLACK};
          border-color: ${C.BLACK};
        }
      `}
    }

    &::-webkit-scrollbar-button {
      display: block;
      background-color: transparent;
    }
    &::-webkit-scrollbar-button:vertical:start {
      height: 8px;
    }
    &::-webkit-scrollbar-button:vertical:end {
      height: 8px;
    }
  }

  .language-open {
    .nav-elements {
      scrollbar-color: ${C.WHITE} transparent;

      &::-webkit-scrollbar-thumb {
        background-color: ${C.WHITE};

        ${Ku.mouse`
          :hover {
            background-color: ${C.DW_GREY_02};
            border-color: ${C.DW_GREY_02};
          }
        `}
      }
    }
  }

  ${b.md`
    .nav-elements {
      margin-right: 13px;
    }
  `}

  ${b.lg`
    .nav-btn {
      margin: 15px;
    }

    .nav-height {
      padding-top: ${ae.lg}px;

      &.language-open {
        padding-top: calc(${ae.lg}px + 109px);

        .nav-elements {
          max-height: calc(80vh - (156px + 109px));
        }
      }
    }
    .nav-elements {
      max-height: calc(80vh - 156px);
      margin-right: 28px;
    }
  `}
`,o0=`
  line-height: 1.1;
`,s6=h(F_)(...o0),xf=h(pf)(...o0),Ft=h(xf)(...be.DW_DARK_BLUE_AND_WHITE.lightStyles);Ft.darkStyles=be.DW_DARK_BLUE_AND_WHITE.darkStyles;const a0=h(Ft)(...Bl);a0.darkStyles=Ft.darkStyles;const Vl=h(xf)(...be.BLUE_GREY_04_AND_BLUE_GREY_03.lightStyles);Vl.darkStyles=be.BLUE_GREY_04_AND_BLUE_GREY_03.darkStyles;const kr=h(s6)(...be.BLUE_GREY_04_AND_DW_LIGHT_BLUE_NEW.lightStyles);kr.darkStyles=be.BLUE_GREY_04_AND_DW_LIGHT_BLUE_NEW.darkStyles;const yo=h(xf)(...be.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.lightStyles);yo.darkStyles=be.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.darkStyles;const s0=h(xf)(...be.DARK_BLUE_GREY_01_AND_BLUE_GREY_02.lightStyles);s0.darkStyles=be.DARK_BLUE_GREY_01_AND_BLUE_GREY_02.darkStyles;const Gl=h(it)(...o0);Gl.darkStyles=it.darkStyles;const l6=({children:e,className:t})=>s.jsx("li",{className:t,children:e}),n2=h(l6)`
  ${Rl}
  font-size: 1.6rem;
`,c6=({className:e,...t})=>s.jsx("ul",{className:e,...t}),u6=M`
  list-style: none;
  margin: 0;
  padding: 0;
  > * {
    padding-bottom: 15px;
    break-inside: avoid;
  }
  column-gap: 30px;

  ${b.md`
    column-count: 2;
  `}
  ${b.xl`
    column-count: 3;
  `}
`,Sf=h(c6)`
  ${u6}
`,d6=A({name:"NavigationList",fragment(){return _`fragment ${this.name} on Navigation {
          id
          name
          namedUrl
        }
    `}}),f6=({navigations:e=[],className:t})=>s.jsx(Sf,{className:t,children:e.map(({id:n,name:r,namedUrl:i},o)=>s.jsx(n2,{children:s.jsx(Ri,{to:i,role:"menuitem","aria-setsize":e.length,"aria-posinset":o+1,children:r})},n))}),p6=h(f6)`
`,LS=d6,m6=({navigations:e=[],groupTranslationKey:t="",className:n})=>{const r=z(t);return s.jsxs(Sl,{className:n,role:"group","aria-labelledby":r,children:[t&&s.jsx(Gl,{isA:"h2",className:"group-headline",id:r,children:r}),s.jsx(p6,{navigations:e,className:"group-list"})]})},h6=M`
  margin-bottom: 5px;

  .group-headline {
    font-size: 1.1rem;
    letter-spacing: 0.16rem;
    margin-left: -30px;
    text-transform: uppercase;
    margin-bottom: 0;
  }

  .group-list {
    padding-top: 15px;
    &:only-child {
      margin-top: 30px;
    }
  }

  ${b.md`
    margin-bottom: 10px;

    .group-headline {
      font-size: 1.2rem;
      letter-spacing: 0.174rem;
      margin-left: -45px;
    }

    .group-list {
      &:only-child {
        margin-top: 35px;
      }
    }
  `}
`,g6=h(m6)`
  ${h6}



  ${b.lg`
    margin-bottom: 15px;

    .group-list {

      &:only-child {
        margin-top: 40px;
      }
    }

    .group-headline {
      margin-left: -30px;
      font-size: 1.3rem;
      letter-spacing: 0.189rem;
    }
  `}

  ${b.xl`
  .group-headline {
    margin-left: -75px;
  }
  `}
`,me=Object.freeze({Article:"Article",Liveblog:"Liveblog",LiveblogPost:"LiveblogElement",Person:"Person",ImageGallery:"ImageGallery",Audio:"Audio",Video:"Video",Livestream:"Livestream",Channel:"Channel",Infographics:"Infographics",Interactive:"Interactive",UnifiedProgram:"UnifiedProgram"}),Cn=e=>({__typename:t}={})=>t===e,r2=Cn(me.Article),l0=Cn(me.Liveblog),y6=Cn(me.LiveblogPost),v6=Cn(me.ImageGallery),i2=Cn(me.Audio),wf=Cn(me.Video),x6=Cn(me.Person),bf=Cn(me.Channel),o2=Cn(me.Livestream);Cn(me.Infographics);Cn(me.Interactive);const a2=Cn(me.UnifiedProgram),se=e=>Array.isArray(e)&&e.length>0,kf=e=>{var t;return e.id===((t=e.topStoriesNavigation)==null?void 0:t.id)},c0=e=>{var n,r;const t=(r=(n=e==null?void 0:e.focusNav)==null?void 0:n.contentLinks)==null?void 0:r.map(i=>i==null?void 0:i.target).filter(i=>i&&i.visibleInWebApp!==!1);return se(t)},u0=e=>se(e==null?void 0:e.latestMediaChildren),S6=e=>!bf(e),d0=["regionsChildren","topicsChildren","categoriesChildren","miscellaneousChildren"],IS=A({name:"NavigationGroups",fragment(){return _`fragment ${this.name} on Navigation {
        ${d0.map(e=>`
          ${e} {
            ...${LS.name}
          }
        `)}
        }
        ${LS.fragment()}
    `}}),w6=e=>e.split("Children")[0].toLowerCase(),b6=e=>`component.navigation.groups.${w6(e)}`,k6=d0.filter(e=>e!=="miscellaneousChildren").reduce((e,t)=>({...e,[t]:b6(t)}),{}),E6=({className:e,navsByGroup:t={}})=>s.jsx(s.Fragment,{children:d0.map((n,r)=>se(t[n])&&s.jsx(g6,{className:`${e} nav-group-${n}`,navigations:t[n],groupTranslationKey:k6[n]},r))}),$6=h(E6)``,T6=({className:e,children:t,...n})=>{const{isLanguageToggled:r}=Qa();return s.jsxs(br,{className:H(e,{"is-open":r}),"aria-expanded":r,...n,children:[s.jsx("h3",{children:t}),s.jsx(Ml,{pointsDown:!r})]})},_6=h(T6)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0;
    span {
      text-transform: uppercase;
      &:after {
        content: '\u00A0|\u00A0';
      }
    }
  }
`,C6={de:"German",en:"English",ru:"Russian",zh:"Chinese","zh-hant":"Chinese","pt-br":"Portuguese","pt-002":"Portuguese",sq:"Albanian",ar:"Arabic",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",fr:"French",el:"Greek",ha:"Hausa",hi:"Hindi",hr:"Croatian",mk:"Macedonian",ps:"Pashto","fa-af":"Dari","fa-ir":"Persian",es:"Spanish",pl:"Polish",tr:"Turkish",uk:"Ukrainian",ur:"Urdu",ro:"Romanian",sr:"Serbian",am:"Amharic",id:"Indonesian",sw:"Kiswahili"},A6={sq:"Shqip",bn:"বাংলা",bs:"B/H/S",bg:"Български",hr:"Hrvatski",el:"Ελληνικά",ha:"Hausa",hi:"हिन्दी",mk:"Македонски",de:"Deutsch",en:"English",ar:"العربية",ru:"Русский","fa-ir":"فارسی",ro:"Română","fa-af":"دری",es:"Español","pt-br":"Português do Brasil","pt-002":"Português para África",pl:"Polski",fr:"Français",ps:"پښتو",sr:"Српски/Srpski",uk:"Українська",zh:"(Simplified) 简","zh-hant":"(Traditional) 繁",ur:"اردو",tr:"Türkçe",am:"አማርኛ",id:"Indonesia",sw:"Kiswahili"},td={language:C6,native:A6},Hl="line-height: 1.1;",L6=`
  font-family: Arial, Helvetica, sans-serif;
  &.zh, &.zh-hant {
    font-family: 'MS Song','MS Hei', Arial, Helvetica, sans-serif;
  }
  &.bn {
    font-family: 'BN BIDISHA Opentype', Verdana, Arial, Helvetica, sans-serif;
  }
  &.hi {
    font-family: DVBOTSurekh, Mangal, Verdana, Arial, Helvetica, sans-serif;
  }
  &.ar, &.fa-af, &.fa-ir, &.ps, &.ur{
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  &.am {
    font-family: Nyala, Arial, Helvetica, sans-serif;
  }
`,we=h(Hr)(...Hl);we.darkStyles=Hr.darkStyles;const Ql=h(we)(...Bl);Ql.darkStyles=we.darkStyles;const s2=h(pf)(...Hl),f0=h(s2)(...be.WHITE_AND_WHITE.lightStyles);f0.darkStyles=be.WHITE_AND_WHITE.darkStyles;const l2=h(s2)(...be.DARK_BLUE_GREY_01_AND_DARK_BLUE_GREY_01.lightStyles);l2.darkStyles=be.DARK_BLUE_GREY_01_AND_DARK_BLUE_GREY_01.darkStyles;const p0=h(M_)(...be.DARK_BLUE_GREY_01_AND_BLUE_GREY_02.lightStyles,...Hl);p0.darkStyles=be.DARK_BLUE_GREY_01_AND_BLUE_GREY_02.darkStyles;const I6=h(I7)(...be.BREAKING_RED_AND_ACCENT_RED.lightStyles,...Hl);I6.darkStyles=be.BREAKING_RED_AND_ACCENT_RED.darkStyles;const m0=h(P_)(...be.BLUE_GREY_05_AND_BLUE_GREY_02.lightStyles,...Hl);m0.darkStyles=be.BLUE_GREY_05_AND_BLUE_GREY_02.darkStyles;const h0=h(we)(...L6);h0.darkStyles=Hr.darkStyles;const jS=A({name:"LanguageSelectorItem",fragment(){return _`fragment ${this.name} on Navigation {
        language
        isLive
        classicUrl
        namedUrl
        localeLang
    }`}}),j6=({className:e,pageLanguage:t,topStoryNavigation:n})=>{const{language:r,namedUrl:i,classicUrl:o,isLive:a,localeLang:l}=n,{hostname:c}=ho().window.location,u=c.startsWith("beta"),d=Ra(r),f=t===r,p=td.native[d],{isLanguageToggled:m}=Qa(),S=a&&!u?{to:i}:{to:o,target:"_self"};return s.jsxs("li",{className:H(e,{active:f}),children:[f&&s.jsx(d7,{isHidden:!m,className:"check-icon"}),s.jsxs(r0,{...S,hrefLang:l.replace("_","-"),children:[s.jsx("span",{children:td.language[d]}),s.jsx(h0,{className:H("native-text",d),children:p})]})]})},O6=h(j6)`
  ${r0.darkStyles}
  ${h0.darkStyles}
  font-size: 1.3rem;
  text-align: left;
  position: relative;
  ${Rl}

  .native-text {
    /*! @noflip */
    margin-left: 6px;
  }

  .ar, .fa-af, .fa-ir, .ps, .ur {
    font-size: 1.5rem;
  }

  &.active {
    .check-icon {
      position: absolute;
      left: -25px;
      fill: ${C.WHITE};
    }
  }
`,R6=({className:e,isA:t="div",children:n,align:r="center"})=>{const i=t;return s.jsx(i,{className:H(e,r),children:n})},Di=h(R6)`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    ${b.sm`
      width: fit-content;
    `}
  }
  &:where(.center) {
    justify-content: center;
  }
  &:where(.start) {
    justify-content: start;
  }
  &:where(.end) {
    justify-content: end;
  }
`,D6=({isContent:e=!0}={})=>A({name:`LanguageSelector${e?"":"OnQuery"}`,fragment(){return _`fragment ${this.name} on ${e?"AssociationsAspect":"Query"} {
        topStoriesNavigations(displayChannel: DESKTOP) {
          ...${jS.name}
        }
      }
      ${jS.fragment()}
      `}}),N6=({className:e,content:t,hiddenClassName:n,onClick:r})=>{var S,w;const{isLanguageToggled:i,isFocusMenuVisible:o}=Qa(),{langCode:a}=ot(),l=A_(a),c=Qn(a),u=(S=t==null?void 0:t.topStoriesNavigations)==null?void 0:S.find(({language:E})=>E===c),{language:d}=u||{},f=Ra(d),p=z("component.navigation.language_selector.headline"),m=z(`component.navigation.language_selector.toggle_button.label.${i?"close":"open"}`);return s.jsxs("section",{className:H(e,{"is-open":i,"focus-menu-shown":o}),children:[s.jsxs(Sl,{className:"language-wrapper",children:[s.jsx(Gl,{isA:"h2",children:p}),s.jsx(Di,{align:"start",children:s.jsxs(_6,{title:m,onClick:r,className:"lang-toggle-button",id:Me.languageSelectorToggle,children:[s.jsx("span",{children:l}),td.native[f]]})})]}),s.jsx(Sl,{className:"language-list",children:s.jsx(Sf,{className:H({[n]:!i}),children:(w=t==null?void 0:t.topStoriesNavigations)==null?void 0:w.map(E=>s.jsx(O6,{pageLanguage:d,topStoryNavigation:E},E.language))})})]})},P6=M`
  &.is-open {
    .language-wrapper {
      position: fixed;
      top: calc(${ae.xs.thin}px + 1px);
      left: 0;
      right: 0;
    }

    &.focus-menu-shown {
      .language-wrapper {
        position: fixed;
        top: calc(${ae.xs.wide}px + 1px);
      }
    }
  }

  .language-wrapper {
    padding-top: 20px;
    padding-bottom: 20px;

    h2 {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
  }
  .language-list {
    ul {
      /*! @noflip */
      direction: ltr;
      padding-top: 20px;
      padding-bottom: 5px;
    }
  }

  ${b.md`
    .language-wrapper {
      padding-top: 25px;
      padding-bottom: 25px;
    }

    .language-list ul {
      padding-top: 25px;
      padding-bottom: 10px;
    }
  `}
`,F6=h(N6)`
  ${P6}

  ${b.md`
    &.is-open,
     &.is-open.focus-menu-shown {
      .language-wrapper {
        top: calc(${ae.md}px + 1px);
      }
    }
  `}

  ${b.lg`
    .language-list ul {
      padding-top: 30px;
      padding-bottom: 15px;
    }

    &.is-open,
     &.is-open.focus-menu-shown {
      .language-wrapper {
        top: calc(${ae.lg}px + 1px);
      }
    }

    .language-wrapper {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  `}
`,M6={isNavigationVisible:!1,isLanguageToggled:!1},ma={openNav:"OPEN_NAV",closeNav:"CLOSE_NAV",toggleLang:"TOGGLE_LANG"},B6=(e,t)=>{switch(t.type){case ma.openNav:return{...e,isNavigationVisible:!0};case ma.closeNav:return{...e,isNavigationVisible:!1,isLanguageToggled:!1};case ma.toggleLang:return{...e,isLanguageToggled:!e.isLanguageToggled};default:throw new Error("Unexpected action!")}},U6=(e=M6)=>{const[t,n]=x.useReducer(B6,e);return[t,{openNav:()=>n({type:ma.openNav}),closeNav:()=>n({type:ma.closeNav}),toggleLang:()=>n({type:ma.toggleLang})}]},OS=A({name:"MediaItem",fragment(){return _`fragment ${this.name} on Navigation {
          name
          namedUrl
          templateType
        }
    `}}),z6=Object.freeze({WEBAPP_AUDIO:Vy,WEBAPP_VIDEO:fu}),W6=({className:e,mediaNav:t})=>{const n=z6[t.templateType];return s.jsxs(Ri,{className:e,to:t.namedUrl,"aria-label":t.name,children:[s.jsx(n,{className:"media-icon"}),s.jsx("span",{className:"label",children:t.name})]})},c2=h(W6)`
  font-size: 1.6rem;
  display: inline-flex;
  align-items: center;
  column-gap: 14px;

  .media-icon {
    width: 16px;
    height: 16px;
  }
`,V6=h(c2)`
  .label {
    display: none;
  }

  ${dr.md`
    ${Zy({cssSelector:" .media-icon"})}
    .media-icon {
      width: 30px;
      height: 30px;
      padding: 7px;
    }
  `}

  ${b.lg`
    .label {
      display: inline;
    }
  `}
`,G6=A({name:"MediaNavigationGroup",fragment(){return _`fragment ${this.name} on Navigation {
        latestMediaChildren {
          id
          ...${OS.name}
        }
      }
      ${OS.fragment()}
    `}}),H6=({className:e,navigation:t})=>u0(t)?s.jsx(Sl,{className:e,children:s.jsx(Sf,{className:"media-list",children:t.latestMediaChildren.map(n=>s.jsx(n2,{children:s.jsx(c2,{mediaNav:n})},n.id))})}):null,Q6=h(H6)`
  margin-bottom: 5px;
  .media-list {
    > * {
      margin-left: -30px;
    }
  }
  ${b.md`
    margin-bottom: 10px;
  `}

  ${b.lg`
    margin-bottom: 15px;
  `}
`,nd=G6,q6=({className:e,navigation:t})=>{if(!u0(t))return null;const n=[...t.latestMediaChildren].reverse();return s.jsx("div",{className:e,children:n.map(r=>s.jsx(V6,{mediaNav:r},r.id))})},Y6=M`
  display: none;

  ${b.md`
    display: inline-flex;
    flex-direction: row-reverse;
    
    column-gap: 4px;
  `}
  ${b.lg`
    column-gap: 23px;
  `}
`,K6=h(q6)`
  ${Y6}
`,X6=({className:e,children:t})=>s.jsx("div",{className:e,children:t}),RS=h(X6)`
  padding-top: 20px;

  ${b.md`
    padding-top: 25px;
  `}

  ${b.lg`
    padding-top: 30px;
  `}
`,Z6=({className:e})=>s.jsx("span",{className:e}),J6=h(Z6)`
  height: 10px;
  width: 10px;
  background-color: ${C.DW_GREY_11};
  border-radius: 50%;
  display: inline-block;
`,e8=({className:e})=>s.jsx(J6,{className:e}),t8=My`
  0% {
    transform: scale(0.8, 0.8);
  }
  50% {
    transform: scale(1.0, 1.0);
  }
  100% {
    transform: scale(0.8, 0.8);
  }
`,u2=h(e8)`
  background-color: ${C.WHITE};
  animation: ${t8} 3s cubic-bezier(0.43, 0, 0.09, 1) infinite;
`,DS=A({name:"LiveTvLink",fragment(){return _`fragment ${this.name} on Channel {
        name
        namedUrl
      }
    `}}),n8=({className:e,channel:t})=>{const n=z({key:"component.site_header.tv_livestream.label",parameters:{channel:t==null?void 0:t.name}}),r=z("component.site_header.tv_livestream.button");return t?s.jsxs(Y_,{className:e,isA:wr,to:t.namedUrl,role:"link","data-tracking-name":"go-to-live-tv",title:n,children:[s.jsx(u2,{className:"pulse-dot"}),s.jsx("span",{className:"label",children:r})]}):null},r8=h(n8)`
  .pulse-dot {
    background-color: currentColor;
  }
`,d2=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",...e},x.createElement("g",{fill:"none",fillRule:"evenodd"},x.createElement("g",{stroke:"#A1ABB4",strokeWidth:2},x.createElement("path",{d:"M20 12L11 21.989 20 32M11 22h22.5"})))),NS=h(e=>s.jsx(d2,{...e}))`
    width: 45px;
`,PS=h(e=>s.jsx(d2,{...e}))`
    transform: rotate(180deg);
    width: 45px;
`,i8=({className:e,onPrev:t,onNext:n,disablePrevArrow:r,disableNextArrow:i})=>{const{isRtl:o}=_n(),a=z("component.slideshow.previous_button.label"),l=z("component.slideshow.next_button.label");return s.jsxs("div",{className:e,children:[s.jsx(zh,{className:"prev",onClick:t,disabled:r,title:a,children:o?s.jsx(ed,{}):s.jsx(Ju,{})}),s.jsx(zh,{className:"next",onClick:n,disabled:i,title:l,children:o?s.jsx(Ju,{}):s.jsx(ed,{})})]})},f2="cubic-bezier(0, 0, 0.09, 1)",p2="cubic-bezier(0.91, 0, 1, 1)",m2=`
  left: 0;
  transition-timing-function: ${f2};
`,Vs=e=>`
  left: -${e}px;
  transition-timing-function: ${p2};
`,h2=`
  right: 0;
  transition-timing-function: ${f2};
`,Gs=e=>`
  right: -${e}px;
  transition-timing-function: ${p2};
`,g2=M`
  .prev, .next {
    position: absolute;
    top: calc(50% - 55px);
    z-index: 3;
    filter: drop-shadow(0 0 8px rgba(0,0,0,0.3));
    opacity: 1;

    transition-property: left, right, opacity, visibility;
    transition-duration: 800ms;

    &${G.disabled} {
      visibility: hidden;
      opacity: 0;
    }
  }
`,o8=h(i8)`
  ${g2}

  .prev, .next {
    margin: 0 1rem;
    width: 55px;
    svg {
      width: 25px;
    }
  }

  .prev {
    ${m2}

    &${G.disabled} {
      ${Vs(60)}
    }
  }

  .next {
    ${h2}

    &${G.disabled} {
      ${Gs(60)}
    }
  }

  ${b.sm`
    .prev, .next {
      top: calc(50% - 65px);
      width: 65px;
      svg {
        width: 35px;
      }
    }
    .prev${G.disabled} {
      ${Vs(70)}
    }

    .next${G.disabled} {
      ${Gs(70)}
    }
  `}

  ${b.lg`
    .prev, .next {
      top: calc(50% - 70px);;
      width: 70px;
      svg {
        width: 40px;
      }
    }

    .prev${G.disabled} {
      ${Vs(80)}
    }

    .next${G.disabled} {
      ${Gs(80)}
    }
  `}

  ${b.xl`
    .prev, .next {
      top: calc(50% - 80px);
      width: 80px;
      svg {
        width: 50px;
      }
    }
  `}

`,a8=({className:e,onPrev:t,onNext:n,disablePrevArrow:r,disableNextArrow:i})=>{const o=z("content_block.top_story.more_on_top_story.previous_button.label"),a=z("content_block.top_story.more_on_top_story.next_button.label"),{isRtl:l}=_n();return s.jsxs("div",{className:e,children:[s.jsx(ht,{className:"prev",onClick:t,disabled:r,title:o,children:l?s.jsx(PS,{}):s.jsx(NS,{})}),s.jsx(ht,{className:"next",onClick:n,disabled:i,title:a,children:l?s.jsx(NS,{}):s.jsx(PS,{})})]})},s8=ht.darkStyles,y2=h(a8)`
  width: 100%;

  ${g2}
  .prev, .next {
    transform: translate(0, -50%);
    top: 50%;

    svg {
      width: 40px;
      height: 40px;
    }
  }


  .prev {
    ${m2}
    &${G.disabled} {
      ${Vs(40)}
    }
  }

  .next {
    ${h2}
    &${G.disabled} {
      ${Gs(40)}
    }
  }

  ${b.sm`
    .prev, .next {
      svg {
        width: 50px;
        height: 50px;
      }
    }
    .prev${G.disabled} {
      ${Vs(50)}
    }
    .next${G.disabled} {
      ${Gs(50)}
    }
  `}
`,l8=({className:e,isA:t})=>{const n=z("component.focus_navigation.headline");return s.jsx(it,{isA:t,className:e,children:n})},c8=h(l8)`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
  white-space: nowrap;
  ${b.md`
    font-size: 1.2rem;
  `}
  ${b.lg`
    font-size: 1.3rem;
  `}
`,FS=A({name:"FocusMenuItemFragment",fragment(){return _`fragment ${this.name} on ContentLink {
        name
        target {
          ...on UrlAspect {
            namedUrl
          }
          ... on Navigation {
            visibleInWebApp
          }
        }
    }`}}),u8=({className:e,link:t})=>{if(!t.target)return null;const{target:{namedUrl:n,visibleInWebApp:r},name:i}=t;return!n||r===!1?null:s.jsx(Ri,{title:i,skipTitleForInternal:!0,to:n,className:e,children:i})},d8=h(u8)`
  font-size: 1.3rem;
  white-space: nowrap;

  ${b.lg`
    font-size: 1.4rem;
  `}
`,MS=A({name:"FocusMenuItems",fragment(){return _`fragment ${this.name} on FocusNavigation {
      contentLinks {
        targetId
        ...${FS.name}
      }
    }
    ${FS.fragment()}

    `}}),f8=({className:e,forwardRef:t,focusNav:n})=>{const r=n==null?void 0:n.contentLinks;return se(r)?s.jsxs("div",{className:e,ref:t,children:[s.jsx(c8,{isA:"div"}),r.map(i=>s.jsx(d8,{link:i},i.targetId))]}):null},p8=h(f8)`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 15px;
  }
`,v2=e=>typeof e.changedTouches<"u"?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.pageX,y:e.pageY},Wh=(e,t)=>v2(e).x-t,m8=({target:e,x:t})=>{Object.assign(e,{transform:`translate3d(${t}px, 0, 0)`,transition:"none",willChange:"transform"})},g0="all ease-in-out 400ms",h8=({target:e,originalX:t})=>{Object.assign(e,{transform:t,transition:g0,willChange:null})},x2=({childrenLength:e,currentIndex:t,unit:n="%",isRtl:r=!1})=>{if(e===0)return{};const i=r?1:-1;return{width:`${e*100}${n}`,transform:`translate3d(${t*100*i/e}${n}, 0, 0)`}},g8=({parentNode:e,childNode:t})=>{const[i,o]=x.useState(!1),[a,l]=x.useState(!1),c=Wa(),{isRtl:u}=_n(),d=x.useRef(!1),f=x.useRef(0),p=x.useRef(0),m=u?-1:1,S=R=>{d.current=!0,e.style.cursor="grab",f.current=j(R),p.current=e.scrollLeft},w=R=>{R.preventDefault()},E=R=>{if(!d.current)return;R.cancelable&&R.type==="touchmove"&&R.preventDefault();const K=j(R)-f.current;e.scrollLeft=p.current-K},g=()=>{d.current=!1,e.style.cursor="unset",N()},y=()=>t.getBoundingClientRect(),v=()=>e.getBoundingClientRect(),k=()=>{const{right:R,left:K}=y(),{right:ce,left:le}=v();return u?Math.round(K)-le:Math.round(R)-ce},T=()=>Math.abs(k())<5,$=R=>{e&&(e.scrollLeft+=R*m,g())},I=R=>{e&&(e.scrollLeft-=R*m,g())},j=R=>Wh(R,e.offsetLeft),N=()=>{if(e){const R=e.scrollLeft*m,{width:K}=v(),{width:ce}=y(),le=Math.round(ce)>K,Ye=R>20;l(le&&Ye),o(le&&!T())}};return vn(e,"mousedown touchstart",S,{passive:!0}),vn(e,"dragstart",w),vn(e,"mouseup mouseleave touchend",g,{passive:!0}),vn(e,"mousemove touchmove",xD({callbackFn:E,timeout:50}),{passive:!1}),x.useEffect(()=>{N()},[c,e]),{showNextArrow:i,showPrevArrow:a,movePrev:I,moveNext:$}},BS=()=>{const[e,t]=x.useState(null);return[x.useCallback(r=>{t(r)},[]),e]},US=A({name:"FocusMenu",fragment(){return _`fragment ${this.name} on AssociationsAspect {
      focusNav {
        ...${MS.name}
      }
    }
    ${MS.fragment()}
    `}}),y8=({content:e,className:t,parentClassName:n})=>{const[r,i]=BS(),[o,a]=BS(),{isFocusMenuVisible:l}=Qa(),{isRtl:c}=_n(),{showPrevArrow:u,showNextArrow:d,movePrev:f,moveNext:p}=g8({parentNode:i,childNode:a});return l?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:H("menu-wrapper",t,n),ref:r,children:s.jsx(p8,{focusNav:e.focusNav,forwardRef:o})}),s.jsx(y2,{className:H(t,"arrow-wrapper",{rtl:c}),disablePrevArrow:!u,disableNextArrow:!d,onPrev:()=>f(50),onNext:()=>p(50)})]}):null},v8=h(y8)`
  ${nt.color}: ${C.DW_BLUE};
  &.menu-wrapper {
    display: flex;
    align-items: center;
    overflow-x: auto;
    height: 40px;
    padding: 10px 0 12px 0;
    user-select: none;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
  }

  ${dr.sm`
    &.menu-wrapper {
      width: calc(100% - 30px);
    }
  `}
  &.arrow-wrapper {
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    height: 40px;
    overflow: hidden;

    .next, .prev {
      ${nt.background}: ${C.DW_LIGHT_BLUE_NEW};
      filter: unset;
      pointer-events: initial;
      position: relative;

      svg {
        width: 40px;
        height: 40px;
        padding: 5px;
      }
    }
  }

  ${dr.sm`
    &.arrow-wrapper {
      .next {
        margin-right: 5px;
      }
    }
  `}

  ${b.md`
    &.menu-wrapper {
      padding-top: 0;
      padding-bottom: 0;
      height: auto;
    }
  `}

`,zS=A({name:"HeaderQuickNavigationItems",fragment(){return _`fragment ${this.name} on Navigation {
    ...${nd.name}
    ...${US.name}
    defaultChannel {
      ...${DS.name}
    }
    }
    ${nd.fragment()}
    ${US.fragment()}
    ${DS.fragment()}
    `}}),x8=({topStoriesNavigation:e})=>{const{isNavigationVisible:t}=Qa();return s.jsxs(s.Fragment,{children:[s.jsx(r8,{channel:e==null?void 0:e.defaultChannel,className:"live-tv-btn"}),s.jsx(K6,{className:H("media-group",{invisible:t}),navigation:e}),s.jsx(v8,{parentClassName:"focus-menu",content:e})]})},An=({isContent:e=!0}={})=>A({name:`Header${e?"":"OnQuery"}`,fragment(){const t=D6({isContent:e});return _`fragment ${this.name} on ${e?"AssociationsAspect":"Query"} {
      topStoriesNavigation${e?"":"(lang: $lang)"} {
          namedUrl
          ...${IS.name}
          ...${nd.name}
          ...${AS.name}
          ...${zS.name}
        }
        ...${t.name}
      }
      ${IS.fragment()}
      ${nd.fragment()}
      ${AS.fragment()}
      ${zS.fragment()}
      ${t.fragment()}
    `}}),WS="hidden",S8=({hasWhiteState:e=!1,className:t,content:n={},children:r=Te})=>{var y;const{topStoriesNavigation:i}=n,[{isNavigationVisible:o,isLanguageToggled:a},{openNav:l,closeNav:c,toggleLang:u}]=U6(),[{scrollbarRightWidth:d}]=zy(),{isMobileMode:f}=At(),p=e&&!o,m=c0(i),S=u0(i),w=v=>{const{key:k}=v;k===Sn.ESCAPE&&o&&(v.preventDefault(),v.stopPropagation(),c())},E=v=>v?l():c(),g=(y=i==null?void 0:i.footer)==null?void 0:y.learngermanUrl;return f?null:s.jsx(t6,{value:{isNavigationVisible:o,isLanguageToggled:a,isFocusMenuVisible:m},children:s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{width:`calc(100% - ${d})`},className:H(t,{white:p,"focus-menu-shown":m}),onKeyDownCapture:w,children:[s.jsx(D7,{isBlue:p,className:"logo",href:i==null?void 0:i.namedUrl}),s.jsx("div",{className:"dynamic-part",children:r({isHeaderInWhiteState:p})}),i&&s.jsxs(a6,{setNavigationVisible:E,learngermanUrl:g,children:[s.jsxs("div",{className:H({[WS]:a}),children:[S&&s.jsx(RS,{children:s.jsx(Q6,{navigation:i})}),s.jsx(RS,{children:s.jsx($6,{navsByGroup:i})})]}),o&&s.jsx(s.Fragment,{children:s.jsx(F6,{className:"language-selector",hiddenClassName:WS,onClick:u,content:n})})]}),!p&&s.jsx(x8,{topStoriesNavigation:i})]}),s.jsx("div",{className:"spx"})]})})},w8=M`
  align-items: center;
  display: grid;
  grid-template-areas: "logo dynamic-part media-nav live-tv burger-button"
                        ". dynamic-part . . ."
                        "focus-menu focus-menu focus-menu focus-menu focus-menu";
  grid-template-columns: 70px minmax(0, 1fr) auto auto 50px;
  grid-template-rows: 50px auto;

  background-color: ${C.DW_LIGHT_BLUE_NEW};
  min-height: ${ae.xs.thin}px;

  & + .spx {
    margin-top: ${ae.xs.thin}px;
  }

  &.focus-menu-shown + .spx {
    margin-top: ${ae.xs.wide}px;
  }

  &::after {
    content: "";
    background-color: ${C.DW_LIGHT_BLUE_NEW};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: ${ae.xs.wide}px;
    opacity: 1;
    z-index: 3;
    pointer-events: none;
  }

  .focus-menu {
    grid-area: focus-menu;
    z-index: 4;
  }

  .focus-menu + * {
    grid-area: focus-menu;
    z-index: 5;
  }

  & > .logo {
    grid-area: logo;
    justify-self: center;
    z-index: 4;
  }

  .live-tv-btn {
    grid-area: live-tv;
    margin-right: 10px;
    margin-left: 15px;
    z-index: 4;
  }

  .media-group {
    grid-area: media-nav;
    margin-left: 5px;
    z-index: 4;

    &.invisible {
      visibility: hidden;
    }
  }

  .hidden {
    display: none;
  }
`,Kt=h(S8)`
  position: fixed;
  top: 0;
  z-index: 10;
  ${__}

  ${w8}

  &::after {
    transition: opacity 150ms cubic-bezier(0.43, 0, 0.09, 1);
    transform: translate3d(0,0,0);
  }

  &.white {
    background-color: ${C.WHITE};
    box-shadow: 0 0 10px 0 ${C.DARK_BLUE_GREY_01};

    &::after {
      opacity: 0;
    }
  }

  .focus-menu {
    margin-left: 14px;
    margin-right: 15px;
  }

  .dynamic-part {
    display: flex;
    align-items: center;

    transition: opacity 50ms;
    opacity: 1;
    z-index: 1;

    grid-area: dynamic-part;
  }

  ${b.md`
    max-height: 80vh;
    grid-template-columns: 83px minmax(0, 1fr) auto auto 70px;
    grid-template-rows: ${ae.md}px;

    & + .spx, &.focus-menu-shown + .spx {
      margin-top: ${ae.md}px;
    }

    &::after {
      max-height: ${ae.md}px;
    }

    .focus-menu,
    .focus-menu + * {
      grid-area: dynamic-part;
    }

    .live-tv-btn {
      margin-right: 0;
    }
  `}

  ${b.lg`
    grid-template-columns: 127px minmax(0, 1fr) auto auto 70px;
    grid-template-rows: ${ae.lg}px;

    & + .spx, &.focus-menu-shown + .spx {
      margin-top: ${ae.lg}px;
    }

    &::after {
      max-height: ${ae.lg}px;
    }

    .media-group {
      margin-left: 15px;
    }

    .live-tv-btn + .media-group {
      margin-right: 10px;
    }
  `}

  ${b.xl`
    grid-template-columns: 167px minmax(0, 1fr) auto auto 70px;
  `}
`,rd=A({name:"HomepageLink",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        topStoriesNavigation {
          namedUrl
        }
      }
    `}}),b8=e=>{var t;return((t=e.topStoriesNavigation)==null?void 0:t.namedUrl)||"/"},k8="content_block_detail.homepage_link.to_homepage",S2=({className:e,content:t,translation:n=k8})=>{const r=z(n);return s.jsx(Di,{className:e,children:s.jsx(yf,{isA:wr,to:b8(t),role:"link","data-tracking-name":"go-to-homepage",children:r})})},y0=yf.darkStyles,w2=h(S2)`
  margin: 15px;
`,E8="/static/yogis.cd23-643a1ea5.svg",$8=({isA:e,className:t,translation:n,...r})=>{const i=z(n);return s.jsx(kr,{className:t,isA:e,...r,children:i})},T8=kr.darkStyles,b2=h($8)`
  margin-bottom: 25px;
  font-size: 1.6rem;

  ${b.md`
    font-size: 1.8rem;
  `}

  ${b.lg`
    font-size: 2rem;
  `}
`,_8=({className:e,pageSectionId:t,translation:n,...r})=>{const i=z(n);return s.jsxs("a",{href:`#${t}`,className:e,...r,children:[s.jsx(Ft,{children:i}),s.jsx(u7,{})]})},k2=h(_8)`
  position: absolute;
  left: 2px;
  top: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
  background-color: ${C.ACCENT_GREEN};
  padding-left: 30px;
  padding-right: 15px;
  opacity: 0;
  pointer-events: none;
  z-index: 4;

  > * {
    font-size: 1.7rem;
    letter-spacing: 0.057rem;
  }

  svg {
    margin-left: 15px;
    min-width: 20px;
  }

  &:focus{
    outline: 0;
    opacity: 1;
    pointer-events: auto;
    box-shadow: 0px 0px 0px 2px ${C.ACCENT_GREEN};
  }

  &:hover{
    text-decoration: none;
  }
`,C8=({className:e,id:t})=>s.jsx("div",{className:e,id:t}),E2=h(C8)`
    position: absolute;
    top: 0;
    left: 0;
`,A8=(e="")=>{const t=/-(\d)*$/;return`section-${e.replace(t,"")}`},L8=({className:e,pageSectionId:t,sectionTitle:n,children:r})=>s.jsxs("section",{className:e,id:t,"data-tracking-name":A8(t),children:[s.jsx(k2,{className:"quick-item",pageSectionId:`post-${t}`,translation:{key:"component.a11y.skip_section.link",parameters:{sectionTitle:z(n)}}}),r,s.jsx(E2,{className:"quick-item-target",id:`post-${t}`})]}),Ef=h(L8)`
  position: relative;

  & > .quick-item  {
    top: -42px;
  }

  & > .quick-item-target {
    bottom: 150px;
    top: auto;
  }
`,oe={xs:15,sm:45,md:40,lg:15},En={lg:960,xl:1140},I8=({className:e,headlineTranslation:t,headlineIsA:n,children:r,pageSectionId:i})=>s.jsx(Ef,{className:e,pageSectionId:i,sectionTitle:t,children:s.jsxs("div",{className:"content-block",children:[s.jsx(b2,{isA:n,translation:t}),r]})}),qa=(e="&")=>M`
  ${e} {
    padding-left: ${oe.xs}px;
    padding-right: ${oe.xs}px;
  }

  ${b.sm`
    ${e} {
      padding-left: ${oe.sm}px;
      padding-right: ${oe.sm}px;
    }
  `}

  ${b.md`
    ${e} {
      padding-left: ${oe.md}px;
      padding-right: ${oe.md}px;
    }
  `}

  ${b.lg`
    ${e} {
      max-width: ${En.lg}px;
      margin-left: auto;
      margin-right: auto;
      padding-left: ${oe.lg}px;
      padding-right: ${oe.lg}px;
    }
  `}

  ${b.xl`
    ${e} {
      max-width: ${En.xl}px;
    }
  `}
`,qn=T8,Jt=h(I8)`
  padding-top: 25px;
  padding-bottom: 30px;

  .content-block {
    content-visibility: auto;
    contain-intrinsic-block-size: auto 600px;
    max-width: 100vw;
    ${qa()}
  }
`,j8=({className:e,id:t,children:n})=>s.jsxs("div",{className:e,children:[s.jsx(E2,{id:t}),n]}),Ya=h(j8)`
`,O8=({className:e,topStoriesNavigation:t})=>{const n=z("pages.not_found_404.illustration.alt"),r=z("pages.not_found_404.illustration.label"),i=z("pages.not_found_404.headline"),o=z("pages.not_found_404.message.part_one"),a=z("pages.not_found_404.message.part_two");return s.jsxs("div",{className:e,children:[s.jsx("img",{src:E8,alt:n,title:r,className:"hero-image"}),s.jsxs("div",{className:"text-container",children:[s.jsx(kr,{isA:"h1",children:i}),s.jsx(Ft,{className:"message part-one",children:o}),s.jsx(s0,{className:"message",children:a})]}),s.jsx(Ya,{id:Me.quickNav.mainContent}),s.jsx(S2,{className:"homepage-link",translation:"pages.not_found_404.homepage_link.to_homepage",content:{topStoriesNavigation:t}})]})},R8=`
  ${y0}
  ${kr.darkStyles}
  ${Ft.darkStyles}
  ${s0.darkStyles}
`,D8=h(O8)`
  display: grid;
  padding-top: 16px;
  padding-bottom: 30px;
  ${qa()}
  .hero-image {
    justify-self: center;
    width: 50%;
  }
  .text-container {
    padding-top: 15px;

    h1 {
      padding-bottom: 10px;
      font-size: 1.5rem;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
    }
    .message {
      font-size: 2.5rem;
      &.part-one {
        &:after {
          content: " ";
        }
      }
    }
  }
  .homepage-link {
    margin-top: 20px;
  }
  ${b.sm`
    padding-top: 34px;
    .text-container {
      padding-top: 20px;
      h1 {
        font-size: 1.6rem;
        letter-spacing: 0.171rem;
      }
      .message {
        font-size: 3rem;
      }
    }
  `}
  ${b.md`
    padding-top: 29px;
    padding-bottom: 53px;
    .text-container {
      h1 {
        padding-bottom: 15px;
        font-size: 1.8rem;
        letter-spacing: 0.193rem;
      }
      .message {
        font-size: 4rem;
      }
      .homepage-link {
        margin-top: 30px;
      }
    }
  `}
  ${b.lg`
    grid-template-columns: 30% auto;
    padding-top: 40px;
    padding-bottom: 40px;
    min-height: 75vh;
    align-content: center;

    .hero-image {
      width: 100%;
    }
    .text-container {
      align-self: center;
      padding: 0 0 0 30px;
      h1 {
        font-size: 2rem;
        letter-spacing: 0.214rem;
      }
      .message {
        font-size: 5rem;
      }
    }
    .homepage-link {
      margin-top: 15px;
      grid-column: 1 / 3;
    }
  `}
  ${b.xl`
    .text-container {
      h1 {
        font-size: 2.2rem;
        letter-spacing: 0.236rem;
      }
      .message {
        font-size: 6rem;
      }
    }
  `}
`,VS=A({name:"FooterLink",fragment(){return _`fragment ${this.name} on FooterLinkedContent {
      text
      url
      targetLanguage
    }
  `}}),N8=({className:e,link:t})=>{const{langCode:n=Ra("ENGLISH")}=ot(),r=Ra(t.targetLanguage)||n,i=r!==n,o=i?r:void 0,a=z(`component.footer.language_hint.${r}.label`),l=i?`${t.text} — ${a}`:t.text,c=!i;return s.jsxs("li",{className:e,children:[s.jsx(He,{className:"footer-link",skipTitleForInternal:c,to:t.url,title:l,hrefLang:o,children:t.text}),i&&s.jsx(Ql,{className:"language-hint",children:a})]})},P8=h(N8)`
  ${He.darkStyles}
  ${Ql.darkStyles}
  font-size: 1.1rem;
  margin: 10px 0;
  ${Rl}

  .footer-link {
    &:after {
      content: ' ';
    }
  }

  .language-hint {
    display: inline-block;

    &::before {
      content: '(';
    }
    &::after {
      content: ')';
    }
  }
`,F8=({className:e,...t})=>s.jsx(Gl,{className:e,isA:"h2",...t}),$2=h(F8)`
  ${Gl.darkStyles}
  font-size: 1.1rem;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
  margin-bottom: 15px;

  ${b.md`
    font-size: 1.2rem;
  `}

  ${b.lg`
    font-size: 1.3rem;
  `}
`,GS=A({name:"FooterSection",fragment(){return _`fragment ${this.name} on FooterSection {
      headline
      links {
        ...${VS.name}
      }
    }
    ${VS.fragment()}
  `}}),M8=({className:e,section:t})=>{const n=`footer-section-${_y(t.headline)}`;return s.jsxs("div",{className:e,role:"group","aria-labelledby":n,children:[s.jsx($2,{id:n,children:t.headline}),s.jsx("ul",{className:"section-list",children:t.links.map(r=>s.jsx(P8,{link:r},r.text))})]})},T2=M`
  margin-bottom: 30px;

  .section-list {
    list-style: none;
    padding: 0;
  }
`,B8=h(M8)`
  ${T2}
`,HS=A({name:"FooterSectionMain",fragment(){return _`fragment ${this.name} on Footer {
      sections {
        ...${GS.name}
      }
    }
    ${GS.fragment()}
  `}}),U8=({className:e,footer:t})=>se(t.sections)?s.jsx("section",{className:e,"data-tracking-name":"footer-section-main",children:s.jsx("div",{className:"row",children:t.sections.map((n,r)=>se(n.links)&&s.jsx(B8,{section:n,className:"col-6 col-lg-3"},r))})}):null,z8=h(U8)``,QS=A({name:"FooterVendorSettingsLink",fragment(){return _`fragment ${this.name} on Footer {
        privacySettings {
          title
          namedUrl
        }
    }
  `}}),W8=({footer:e})=>s.jsx("span",{children:s.jsx(He,{to:e.privacySettings.namedUrl,title:e.privacySettings.title,skipTitleForInternal:!0,children:e.privacySettings.title})}),_2=["policy","legal","accessibility"],qS=A({name:"FooterSectionStandard",fragment(){return _`fragment ${this.name} on Footer {
      ...${QS.name}
      ${_2.map(e=>`
        ${e} {
          namedUrl
        }
      `).join(`
`)}
    }
    ${QS.fragment()}
  `}}),V8=({fieldName:e,footer:t})=>{const n=z(`component.footer.${e}`);return s.jsx("span",{children:s.jsx(He,{to:LD(t[e]),title:n,skipTitleForInternal:!0,children:n})},e)},G8=({className:e,footer:t})=>{const n=new Date().getFullYear();return s.jsxs("section",{className:e,"data-tracking-name":"footer-section-standard-links",children:[s.jsxs(it,{children:["© ",n," Deutsche Welle"]}),_2.map(r=>s.jsx(V8,{fieldName:r,footer:t},r)),s.jsx(W8,{footer:t})]})},H8=h(G8)`
  ${He.darkStyles}
  ${it.darkStyles}
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;

  > *, > *:after {
    white-space: nowrap;
    font-size: 1.1rem;
  }
  > ${G.notLast}:after {
    content: '\u00A0|\u00A0';
    color: ${C.BLUE_GREY_01};
    line-height: 1.4;
    margin: 0 5px;
  }
`,Q8={facebook:{Tag:xF,color:"#3B5998"},"fb-messenger-web":{Tag:bS,color:"#0084FF"},"facebook-messenger":{Tag:bS,color:"#0084FF"},"x-twitter":{Tag:kF,color:"#1DA1F2"},balatarin:{Tag:TF,color:"#47A330"},meneame:{Tag:jF,color:"#FF6400"},linkedin:{Tag:IF,color:"#0077B5"},reddit:{Tag:DF,color:"#FF4500"},weibo:{Tag:BF,color:"#EA0017"},douban:{Tag:_F,color:"#007800"},vkontakte:{Tag:kS,color:"#45668E"},vk:{Tag:kS,color:"#45668E"},moikrug:{Tag:OF,color:"#4A4A4A"},email:{Tag:CF,color:C.DW_LIGHT_BLUE_TEXT},sms:{Tag:NF,color:C.DW_LIGHT_BLUE_TEXT},odnoklassniki:{Tag:RF,color:"#ED812B"},whatsapp:{Tag:ES,color:"#25D366"},"whatsapp-web":{Tag:ES,color:"#25D366"},telegram:{Tag:PF,color:"#08C"},wechat:{Tag:MF,color:"#7BB32E"},viber:{Tag:FF,color:"#59267C"},line:{Tag:LF,color:"#00C300"},flipboard:{Tag:AF,color:"#E12828"},youtube:{Tag:$F,color:"#ff0000"},instagram:{Tag:wF,color:"#833ab4"},sharechat:{Tag:UF,color:"#F9DB50"},moj:{Tag:zF,color:"#F5BD41"},tiktok:{Tag:WF,color:"#69C9D0"}},Hs={fill:"--social-media-icon-link-fill",hoverFill:"--social-media-service-hover-color",activeFill:"--social-media-icon-link-active-fill"},q8=({socialMediaId:e,className:t,isHidden:n,title:r,url:i,...o})=>{const a=Q8[e];if(!a)return null;const l=a.color,c=a.Tag,u=n?{isHidden:n}:{};return s.jsx(ht,{className:`${t} ${e}`,style:{[Hs.hoverFill]:l},isA:wr,to:i,title:r,role:"link",...o,children:s.jsx(c,{...u})})},C2=`
  ${ht.darkStyles}
  ${Hs.activeFill}: ${C.DW_DARK_BLUE};
`,A2=h(q8)`
  ${Ku.mouse`
    &:hover svg {
      fill: var(${Hs.hoverFill}, currentColor);
    }
  `}
  &&.${oo} svg {
    fill: var(${Hs.hoverFill}, currentColor);
  }

  &&& svg {
    width: 100%;
    path {
      stroke: none;
    }
  }

  &&&:active {
    svg {
      fill: var(${Hs.activeFill}, ${C.WHITE});
    }
  }
`,Y8=({socialMediaAccount:e,className:t,...n})=>{const{service:r,url:i}=e;return s.jsx(A2,{className:t,socialMediaId:r,url:i,title:r,...n})},K8=h(Y8)`
  ${C2}
  width: 40px;
  margin: 0 8px 0 0;
`,YS=A({name:"FooterSectionSocialMedia",fragment(){return _`fragment ${this.name} on Footer {
      linkedSocialMediaAccounts {
        service
        url
      }
    }
  `}}),X8=({className:e,footer:t})=>{const n=z("component.footer.socialmediachannels.headline");return se(t.linkedSocialMediaAccounts)?s.jsx("section",{className:e,"data-tracking-name":Me.footerSectionSocialMedia,children:s.jsxs("div",{role:"group","aria-labelledby":Me.footerSectionSocialMedia,children:[s.jsx($2,{id:Me.footerSectionSocialMedia,children:n}),s.jsx("ul",{className:"section-list",children:t.linkedSocialMediaAccounts.map(r=>s.jsx(K8,{socialMediaAccount:r},r.service))})]})}):null},Z8=h(X8)`
  ${T2}

  .section-list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`,Ln=({isContent:e=!0}={})=>A({name:`Footer${e?"":"OnQuery"}`,fragment(){return _`fragment ${this.name} on ${e?"FooterAspect":"Query"} {
      footer${e?"":"(lang: $lang)"} {
        ...${HS.name}
        ...${YS.name}
        ...${qS.name}
      }
    }
    ${HS.fragment()}
    ${YS.fragment()}
    ${qS.fragment()}
  `}}),J8=({className:e,content:t})=>{const{isMobileMode:n}=At();return n?null:s.jsxs("footer",{className:e,id:Me.quickNav.footer,children:[s.jsx(z8,{footer:t.footer}),s.jsx(Z8,{footer:t.footer}),s.jsx(H8,{footer:t.footer})]})},In=h(J8)`
  background-color: ${C.DARK_BLUE_GREY_01};
  padding-top: 30px;
  padding-bottom: 60px;

  ${qa("& > section")}
`,e9=Object.freeze({mainContent:Object.freeze({id:Me.quickNav.mainContent,translation:"component.a11y.quick_navigation.content"}),navigation:Object.freeze({id:Me.quickNav.navigationToggle,translation:"component.a11y.quick_navigation.navigation"}),footer:Object.freeze({id:Me.quickNav.footer,translation:"component.a11y.quick_navigation.footer"})}),t9=({className:e,content:t})=>{const n=c0(t.topStoriesNavigation);return s.jsx("ol",{className:H(e,{"focus-menu-shown":n}),children:Object.values(e9).map(r=>s.jsx("li",{children:s.jsx(k2,{pageSectionId:r.id,translation:r.translation})},r.id))})},Yn=h(t9)`
  list-style: none;
  position: fixed;
  top: ${ae.xs.thin}px;
  width: 100%;
  z-index: 4;

  ${dr.sm`
    &.focus-menu-shown {
      top: ${ae.xs.wide}px;
    }
  `}
  &, li {
    margin: 0;
    padding: 0;
  }

  a {
    max-width: 350px;
    width: 100%;
  }

  ${b.md`
      top: ${ae.md}px;
  `}

  ${b.lg`
      top: ${ae.lg}px;
  `}
`,{StyledBreakingBannerNoQuery:n9}=ne(()=>J(()=>import("./BreakingBannerNoQuery.cd23-03d83d70.js"),[]),{fallback:null}),r9=_`
 query breakingNews($lang: Language!) {
  breakingNews(lang:  $lang) {
    ... on NamedAspect {
      title
    }
    ... on DeliveryAspect {
      contentDate
    }
    ... on UrlAspect {
      namedUrl
    }
  }
 }
`,i9=()=>{const{langCode:e}=ot();return Jd(r9,{variables:{lang:Qn(e)||"ENGLISH"},fetchPolicy:"network-only"})},o9=()=>{const{data:e,error:t,loading:n}=i9();return t?(O.console.error("Could not fetch breaking news.",t),null):n||!(e!=null&&e.breakingNews)?null:s.jsx(n9,{content:e.breakingNews})},Er=()=>s.jsx(Sr,{children:s.jsx(o9,{})}),L2=({code:e,children:t,contextExtension:n})=>{const r=tf();return r.staticContext.httpStatus=e,n&&Object.keys(n).forEach(i=>{r.staticContext[i]=n[i]}),t},KS=A({name:"FrontendConfig",fragment(){return _`fragment ${this.name} on FrontendConfig {
        domainName
        staticBaseHost
        gtmId
        gtmLevel1Id(appName: $appName)
        gtmEnvironment(appName: $appName, lang: $lang)
        adsEnabled(lang: $lang)
        consentManagerId(appName: $appName)
        showProgramsOverview
        facebookMetaPageIds
        facebookMetaAdminIds
        reCaptchaSiteKey
        feedbackFormMaxFileSizeMb
        feedbackFormAcceptedFileTypes
        einbliqCustomerId
      }
    `}});class id{constructor(t){this.frontendConfig=t||null}get(){return this.frontendConfig}}const a9=_`
  query i18nByLangWithFrontendConfig($lang: Language!, $appName: String) {
    i18n: i18nByLang(lang: $lang){
      all
    }
    config {
      ...${KS.name}
    }
  }
  ${KS.fragment()}
`,s9=()=>{const{langCode:e}=ot(),{isMobileMode:t}=At(),n=Jd(a9,{variables:{lang:Qn(e)||"ENGLISH",appName:t?"mobileApp":"road"}});return{gqlMeta:n,frontendConfig:n.loading?new id:new id(n.data.config),i18n:!n.loading&&n.data.i18n?new Bh(JSON.parse(n.data.i18n.all)):new Bh}},l9=({className:e,error:{message:t}})=>s.jsx("div",{className:H(e,"container error"),children:s.jsx("p",{children:t})}),c9=h(l9)`
   color: red; 
`,u9=My`
  0% {
    stroke-dashoffset: 340;
  }
  50% {
    stroke-dashoffset: 170;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,v0=h(a7)`
  .first-circle {
    stroke: ${C.BLUE_GREY_03};
  }
  .second-circle {
    stroke: ${C.DW_LIGHT_BLUE_NEW};
    animation: ${u9} 2000ms cubic-bezier(0.43,0,0.09,1) infinite normal forwards;
  }
`,d9=h(v0)`
  width: 100%;
  padding-block: 200px;
  box-sizing: content-box;
`,f9=({className:e})=>s.jsx("div",{className:e,children:s.jsx(v0,{className:"spinner",title:"Loading..."})}),p9=My`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,I2=h(f9)`
  height: 100vh;
  margin-top: 0;

  .spinner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
    animation: ${p9} 500ms cubic-bezier(0.43, 0, 0.09, 1) 1 forwards;
  }
`,XS=({arg:e,type:t})=>Object.prototype.toString.call(e)===`[object ${t}]`,Vh=e=>{if(XS({arg:e,type:"Object"}))return Object.assign({},...Object.entries(e).map(([t,n])=>({[t]:Vh(n)})));if(XS({arg:e,type:"Array"}))return e.map(Vh);if(e!==null)return e},j2=({gqlMeta:e,children:t})=>{const{error:n,loading:r,data:i={},...o}=e,{langCode:a}=ot(),l=A_(a)||"en",{getIsSilent:c}=T_(),u=s.jsx(mt,{children:s.jsx("html",{lang:l})});return c()&&(r||n)?null:r?s.jsxs(s.Fragment,{children:[u,s.jsx(Kt,{}),s.jsx(I2,{})]}):n?s.jsxs(s.Fragment,{children:[u,s.jsx(Kt,{}),s.jsx(c9,{error:n})]}):s.jsxs(s.Fragment,{children:[u,t(Vh(i),o)]})},m9=Nl`
  body {
    direction: ltr;
    text-align: left;
  }
`,x0=x.createContext(new id),Mt=()=>x.useContext(x0).get(),h9=()=>{const[{pathname:e}]=De();x.useEffect(()=>()=>{[...O.document.querySelectorAll("script[data-cmp-haspreview]")].forEach(t=>{["data-cmp-preview-connect","data-cmp-preview-id","data-cmp-haspreview"].forEach(n=>t.removeAttribute(n))})},[e])};let ZS=null,JS=null;const ew=async({consentManagerId:e})=>{const{default:t}=await J(()=>import("./cmp-style-overwrite-42f14dfe.js"),[]),{initCmpScript:n}=await J(()=>import("./consentScript-b00520dc.js"),[]);n({consentManagerId:e,customCmpStyles:t})},g9=async({consentManagerId:e})=>((!ZS||e!==JS)&&(ZS=ew({consentManagerId:e}),JS=e),ew),y9=()=>{const{consentManagerId:e}=Mt(),{isMobileMode:t}=At();return x.useEffect(()=>{e&&!t&&g9({consentManagerId:e})},[e,t]),h9(),null},Xt=A({name:"PageWithData",fragment(){return _`fragment ${this.name} on Content {
      ... on ModelAspect {
        isRtl
        isEuropeanLang
        isAsianOrAfricanLang
        isChineseLang
        language
      }
    }
    `}}),v9=e=>e.content,O2=e=>e.topStoriesNavigation,vo=({queryDef:e,children:t,langBaseContentFn:n})=>{const{gqlMeta:r,frontendConfig:i,i18n:o}=s9(),a=Jd(e.query,{variables:e.variables}),l={...a,loading:a.loading||r.loading,error:a.error||r.error};return s.jsx(j2,{gqlMeta:l,children:(c,u)=>s.jsx(x0.Provider,{value:i,children:s.jsx(j_.Provider,{value:o,children:s.jsxs(E7,{content:n(c),children:[s.jsx(y9,{}),s.jsx(m9,{}),t(c,u)]})})})})},Nc="local-storage",tw=(e,t)=>{if(Et())return null;const n=O.localStorage.getItem(e);return t?n:JSON.parse(n)},so=(e,{isPrimitive:t=!1}={})=>{const[n,r]=x.useState(tw(e,t)),i=x.useCallback(a=>{Et()||(O.localStorage.setItem(e,t?a:JSON.stringify(a)),r(a),O.window.dispatchEvent(new Event(Nc)))},[e,t]),o=x.useCallback(()=>{Et()||(O.localStorage.removeItem(e),r(null),O.window.dispatchEvent(new Event(Nc)))},[e]);return x.useEffect(()=>{const a=()=>{r(tw(e,t))};return O.window.addEventListener("storage",a),O.window.addEventListener(Nc,a),()=>{O.window.removeEventListener("storage",a),O.window.removeEventListener(Nc,a)}},[]),[n,i,o]},R2=()=>so("forced-dark-theme"),$r=e=>(...t)=>{const n=h(e)(...t);return({hasTheme:r,...i})=>{const[o]=R2();return o||r?s.jsx(n,{...i}):s.jsx(e,{...i})}},x9=()=>{const e=An({isContent:!1}),t=Ln({isContent:!1});return _`
  query getNotFoundPageData($lang: Language!) {
    topStoriesNavigation(lang: $lang){
      id
      ...${Xt.name}
    }
    ...${e.name}
    ...${t.name}
  }
  ${Xt.fragment()}
  ${e.fragment()}
  ${t.fragment()}
`},S9=({className:e,topStoriesNavigation:t,topStoriesNavigations:n,footer:r})=>s.jsxs(s.Fragment,{children:[s.jsx(Yn,{content:{topStoriesNavigation:t}}),s.jsxs("div",{className:e,children:[s.jsx(Kt,{content:{topStoriesNavigation:t,topStoriesNavigations:n}}),s.jsx(Er,{}),s.jsx(D8,{topStoriesNavigation:t}),s.jsx(In,{content:{footer:r}})]})]}),w9=$r(S9)`
  ${R8}
`,an=()=>{const{langCode:e}=ot(),t={query:x9(),variables:{lang:Qn(e)||"ENGLISH"}};return s.jsx(L2,{code:404,children:s.jsx(vo,{queryDef:t,langBaseContentFn:O2,children:n=>s.jsxs(s.Fragment,{children:[s.jsx(mt,{children:s.jsx("meta",{property:"og:site_name",content:"dw.com"})}),s.jsx(w9,{...n})]})})})},D2=x.createContext({leadingContent:null}),b9=()=>x.useContext(D2),k9=({children:e,content:t})=>s.jsx(D2.Provider,{value:{leadingContent:t},children:e}),N2=({to:e,subdomainUrl:t})=>{const{pathname:n,search:r}=e,{domainName:i}=Mt(),o=n.replace(i,t),a=r?`${o}${r}`:o;return x.useEffect(()=>{O.window.location.replace(a)},[a]),s.jsx(L2,{code:301,contextExtension:{url:a}})},Gh=A({name:"WithGraphQLContentHandling",fragment(){return _`fragment ${this.name} on Content {
      ... on ModelAspect {
        id
      }
      ... on UrlAspect {
        namedUrl
        classicUrl
      }
      ... on DeliveryAspect {
        subdomain
        subdomainUrl
      }
      ...${Xt.name}
    }
    ${Xt.fragment()}
    `}}),E9=({name:e,fragmentDef:t})=>_`
  query ${e}($id: Int!, $lang: Language) {
    content(id: $id, lang: $lang) {
      ...${Gh.name}
      ...${t.name}
    }
  }
  ${Gh.fragment()}
  ${t.fragment()}
`,$9=e=>{const{contentId:t,langCode:n}=ot();return{query:E9(e),variables:{id:+t,lang:Qn(n)}}},T9=({content:e,queryVariables:t})=>e.id===(t==null?void 0:t.id),_9=["CORPORATE","SERVICE","ACADEMY","LEARN_GERMAN"],C9=({subdomain:e,subdomainUrl:t,isLive:n})=>!t||!_9.includes(e)?!1:e==="LEARN_GERMAN"?n:!0,xo=({children:e,queryOptions:t})=>{const n=$9(t),{pathname:r,search:i}=ho().window.location;return s.jsx(vo,{queryDef:n,langBaseContentFn:v9,children:({content:o,...a})=>{if(!o)return s.jsx(an,{});const{namedUrl:l,subdomainUrl:c,subdomain:u,classicUrl:d,isLive:f}=o;if(C9({subdomain:u,subdomainUrl:c,isLive:f}))return s.jsx(N2,{to:{pathname:d,search:i},subdomainUrl:c});const p=$h(r);return!ff({namedUrl:l,pathname:p})&&T9({content:o,queryVariables:n.variables})?s.jsx(ro,{to:{pathname:ef(l),search:i}}):s.jsx(k9,{content:o,children:e({content:o,...a})})}})},A9=()=>s.jsx(mt,{children:s.jsx("script",{children:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-${Mt().gtmId}');`})}),L9=({dataLayer:e})=>{const t={display:"none",visibility:"hidden"},{gtmId:n}=Mt();return s.jsx("noscript",{children:s.jsx("iframe",{title:`GTM-${n}`,src:`https://www.googletagmanager.com/ns.html?id=GTM-${n}&${ID(e)}`,height:"0",width:"0",style:t})})},S0=()=>{const e=ho().window.location.origin,t=Oa("maca"),{gtmLevel1Id:n,gtmEnvironment:r}=Mt();return{level1Id:n,macaParam:t,pageOrigin:e,gtmEnvironment:r}},I9=e=>bf(e)||x6(e)?e.title:e.name,cr=A({name:"GtmDataLayer",fragment(){return _`fragment ${this.name} on Content {
      ...on GtmAspect {
        trackingId
        trackingLanguageCode
        trackingContentType
        trackingCategories
        trackingDate
        trackingPageSID
        trackingTopicsCommaJoined
        trackingRegionsCommaJoined
      }
      ...on NamedAspect {
        name
        title
      }
      ... on MetadataAspect {
        profileTopicContent
      }
      ...on AssociationsAspect {
        subjects {
          name
        }
        topics:categories {
          originId
        }
        departments {
          name
        }
        regions {
          regionCode
          countryCode
        }
        unifiedPrograms(amount: 1) {
          name
        }
      }
      ... on UrlAspect {
        namedUrl
      }
    }
    `}}),nw=A({name:"MediaInfoForTrackingFragment",fragment(){return _`fragment ${this.name} on Content {
      ... on PlaybackResourceAspect {
        duration
      }
      ... on AssociationsAspect {
        videos {
          duration
          ...${cr.name}
        }
        audios {
          duration
          ...${cr.name}
        }
      }
    }
    ${cr.fragment()}
    `}}),w0=({content:e,level1Id:t,macaParam:n,pageOrigin:r,environment:i})=>{var k,T;const{trackingId:o,trackingLanguageCode:a,trackingContentType:l,trackingPageSID:c,trackingTopicsCommaJoined:u,trackingRegionsCommaJoined:d,trackingDate:f,duration:p,profileTopicContent:m,trackingCategories:S=[],regions:w=[],subjects:E=[],topics:g,departments:y=[],unifiedPrograms:v=[]}=e;return{categoryLevel1:S[0],categoryLevel2:S[1],categoryLevel3:S[2],contentTitle:I9(e),contentLanguage:a,pageOID:o,contentType:l,date:f,regions:w.map($=>`${$.regionCode}::${$.countryCode||""}`),subjects:E.map($=>$.name),topicIds:g==null?void 0:g.map($=>$.originId),pageSID:c,departmentName:(k=y[0])==null?void 0:k.name,categoryType:1,displayForm:5,level1ID:t,environment:i,macaParam:n,pageUrl:`${r}${e.namedUrl}`,avDuration:p,avShowName:(T=v[0])==null?void 0:T.name,profileTopicContent:!!m,metaRegions:d,metaTopics:u}},j9=e=>{O.window.videoJsVersion=e},ha={initDataLayerScript:e=>{const t={...e,event:"initDataLayer",webAppVersion:"3.4.1"};return`
    if(!window.dataLayer) {
      window.dataLayer = [${JSON.stringify(t)}]
    };`.trim()},generateDataLayer:({content:e,level1Id:t,macaParam:n,pageOrigin:r,environment:i})=>({pageData:{...w0({content:e,level1Id:t,macaParam:n,pageOrigin:r,environment:i}),embeddings:{}}}),pushToGoogleTagManager:({datalayerObj:e,withReset:t=!1})=>{setTimeout(()=>{var n;t&&ha.resetDataLayer(),(n=O.window.dataLayer)==null||n.push(e)},0)},resetDataLayer:()=>{O.window.dataLayer.push(function(){this.reset()})}},Re=cr,O9=({content:e,push:t=!1})=>{const{level1Id:n,macaParam:r,pageOrigin:i,gtmEnvironment:o}=S0(),[{pathname:a}]=De(),l=ha.generateDataLayer({content:e,macaParam:r,level1Id:n,pageOrigin:i,environment:o});return x.useEffect(()=>{t&&ha.pushToGoogleTagManager({withReset:!0,datalayerObj:{event:"onPageChange",...l}})},[a]),s.jsxs(s.Fragment,{children:[s.jsx(mt,{children:s.jsx("script",{children:ha.initDataLayerScript(l)})}),s.jsx(L9,{dataLayer:l})]})},R9=({content:e})=>{const t=!Et()&&!!O.window.dataLayer;return s.jsxs(s.Fragment,{children:[s.jsx(O9,{content:e,push:t}),!t&&s.jsx(A9,{})]})},Kn=x.memo(R9),Pc=(e,t)=>t/e*100,Fc={landscape:Pc(16,9),portrait:Pc(3,4),square:Pc(1,1),cinemascope:Pc(16,7)},si=(e,t)=>e&&Hy(e,{formatId:t.id}),zr=Object.freeze({"60X":{aspectRatio:Fc.landscape,formats:[{id:600,width:78},{id:601,width:201},{id:602,width:379},{id:603,width:545},{id:604,width:767},{id:605,width:1199},{id:606,width:1568},{id:607,width:1920}]},"70X":{aspectRatio:Fc.portrait,formats:[{id:700,width:48},{id:701,width:300},{id:702,width:440},{id:703,width:575},{id:704,width:767},{id:705,width:991}]},"80X":{aspectRatio:Fc.square,formats:[{id:800,width:50},{id:801,width:129},{id:802,width:352},{id:803,width:575},{id:804,width:767},{id:805,width:1024},{id:806,width:1400}]},"90X":{aspectRatio:null,formats:[{id:900,width:48},{id:901,width:375},{id:902,width:475},{id:903,width:600},{id:904,width:768},{id:905,width:960},{id:906,width:1110}]},"100X":{aspectRatio:Fc.cinemascope,formats:[{id:1e3,width:80},{id:1001,width:576},{id:1002,width:768},{id:1003,width:992},{id:1004,width:1200},{id:1005,width:1408},{id:1006,width:1600}]},FREE:{aspectRatio:null,formats:[{id:7,width:0}]},LEGACY:{aspectRatio:null,formats:[{id:4,width:0}]}}),D9=({staticUrlTemplate:e,ext:t})=>{const n=".";return e.endsWith(t)?e:[...e.split(n).slice(0,-1),t].join(n)},od=({innerWidth:e,imgWidth:t,formatConfig:n})=>{const r=Math.floor(e),i=n.find(({minWidth:c,maxWidth:u})=>r>=c&&r<=u),o=zr[i.formatGroupName],a=o.formats[o.formats.length-1];return{...o.formats.find(({width:c})=>c>=t)||a,aspectRatio:o.aspectRatio}},N9=e=>{var n;const{staticUrl:t}=((n=e==null?void 0:e.mainContentImageLink)==null?void 0:n.target)||{};return t||(e==null?void 0:e.posterImageUrl)},$f=({imageUrl:e,staticBaseHost:t})=>e==null?void 0:e.startsWith(t),b0=e=>{var t,n,r;return(e==null?void 0:e.mainContentImageLink)&&{id:(t=e.mainContentImageLink.target)==null?void 0:t.id,alt:e.mainContentImageLink.additionalInformation,caption:e.mainContentImageLink.description,licenserSupplement:(n=e.mainContentImageLink.target)==null?void 0:n.licenserSupplement,imageType:(r=e.mainContentImageLink.target)==null?void 0:r.imageType}},P2=e=>e==="CARICATURE",F2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",Tr={triggerOnce:!0,rootMargin:"1000px 1000px"},P9=x.forwardRef(({image:e,alt:t,className:n,lqFormat:r,hqFormat:i,aspectRatio:o,isA:a="figure"},l)=>{const{Image:c}=O,[u,d]=yr(Tr),[f,p]=x.useState(!1),[m,S]=x.useState(!1),[w,E]=x.useState(!1);x.useEffect(()=>{if(d){const k=new c;k.src=si(e==null?void 0:e.staticUrl,i),k.complete&&(E(!0),k.decode().then(g))}},[i,d]);const g=()=>{S(!0)},y=()=>{if(!m){const k=new c;k.src=si(e==null?void 0:e.staticUrl,i),p(!0),k.decode().then(g)}},v=a;return s.jsxs(v,{className:`${n} lazy-load-container`,ref:l,style:o?{paddingBottom:`${o}%`}:{},children:[s.jsx("img",{ref:u,onLoad:y,src:d?si(e==null?void 0:e.staticUrl,r):"",className:H("lq-img",{loaded:f}),"aria-hidden":"true",alt:t}),s.jsx("img",{className:H("hq-img",{loaded:m,"quick-transition":w}),src:m?si(e.staticUrl,i):"",alt:t,title:t})]})}),M2=`
  background-color: ${C.BLUE_GREY_02};
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  margin: 0;
`,B2=`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
`,F9=h(P9)`
  ${M2}

  img {
    ${B2}
    opacity: 0;
    transition: opacity 1s linear;
  }

  img.quick-transition {
    transition: opacity 250ms linear;
  }

  img.loaded {
    opacity: 1;
  }

  .lq-img {
    filter: blur(15px);
  }
`,So=[{minWidth:B.min.xs,maxWidth:B.max.wide_xl,formatGroupName:"60X"}],M9=[{minWidth:B.min.xs,maxWidth:B.max.wide_xl,formatGroupName:"100X"}],U2=[{minWidth:B.min.xs,maxWidth:B.max.xs,formatGroupName:"80X"},{minWidth:B.min.sm,maxWidth:B.max.lg,formatGroupName:"60X"},{minWidth:B.min.xl,maxWidth:B.max.wide_xl,formatGroupName:"100X"}],B9=[{minWidth:B.min.xs,maxWidth:B.max.xs,formatGroupName:"80X"},{minWidth:B.min.sm,maxWidth:B.max.md,formatGroupName:"60X"},{minWidth:B.min.lg,maxWidth:B.max.wide_xl,formatGroupName:"100X"}],U9=[{minWidth:B.min.xs,maxWidth:B.max.wide_xl,formatGroupName:"80X"}],Ka=({squareTill:e="xs",landscapeFrom:t="sm"}={})=>[{minWidth:B.min.xs,maxWidth:B.max[e],formatGroupName:"80X"},{minWidth:B.min[t],maxWidth:B.max.wide_xl,formatGroupName:"60X"}],z9=({imgRef:e,formatConfig:t})=>{const n=Wa(),r=od({innerWidth:n,imgWidth:0,formatConfig:t}),[i,o]=x.useState(r);return x.useEffect(()=>{var l;const a=od({innerWidth:n,imgWidth:((l=e==null?void 0:e.current)==null?void 0:l.clientWidth)||0,formatConfig:t});o(a)},[n,t]),{lqFormat:r,hqFormat:i}},fr=A({name:"ResponsiveDwPicture",fragment(){return _`fragment ${this.name} on Image {
        id
        staticUrl
      }
    `}}),W9=({image:e,alt:t,className:n,formatConfig:r=So,aspectRatio:i,isA:o})=>{const a=x.useRef(),{lqFormat:l,hqFormat:c}=z9({imgRef:a,formatConfig:r});return s.jsx(F9,{ref:a,className:n,image:e,alt:t,lqFormat:l,hqFormat:c,aspectRatio:i,isA:o})},z2=M`
  ${e=>{const{formatConfig:t=So}=e;return t.map(n=>{const{minWidth:r}=n,{aspectRatio:i}=od({innerWidth:r,imgWidth:0,formatConfig:t});return M`
      @media (min-width:${r}px) {
        padding-bottom: ${i}%;
      }
    `})}}
`,ql=h(W9)`
  ${z2}
`,W2=/_605.(webp)$/,k0=(e,t)=>e.replace(W2,`_${t.id}.$1`),V9=({content:e,inView:t,playerWidth:n,innerWidth:r,staticBaseHost:i})=>{if(!t||!e.posterImageUrl)return"";const{posterImageUrl:o}=e;if(!$f({imageUrl:o,staticBaseHost:i}))return o;const a=od({innerWidth:r,imgWidth:n,formatConfig:So});return k0(e.posterImageUrl,a)},G9=({content:e})=>{var l;const t=x.useRef(),n=(l=t==null?void 0:t.current)==null?void 0:l.clientWidth,r=Wa(),[i,o]=yr(Tr),{staticBaseHost:a}=Mt();return{sizeRef:t,inViewRef:i,backgroundImageUrl:V9({content:e,inView:o,playerWidth:n,innerWidth:r,staticBaseHost:a})}},H9=e=>e,rw=[zr["80X"].formats[4],zr["60X"].formats[4]],ad=A({name:"JsonLdScript",fragment(){return _`fragment ${this.name} on Content {
        ... on NamedAspect {
          title
        }
        ... on AssociationsAspect {
          mainContentImageLink {
            targetId
            target {
              ...${fr.name}
            }
          }
        }
        ... on Article {
          canonicalUrl
          persons {
            namedUrl
            fullName
          }
          firstPublicationDate
          lastPublicationDate
          lastModifiedDate
        }
        ... on Liveblog {
          canonicalUrl
          persons {
            namedUrl
            fullName
          }
          firstPublicationDate
          lastPublicationDate
        }
        ... on LiveblogElement {
          canonicalUrl
          persons {
            namedUrl
            fullName
          }
          firstPublicationDate
          lastPublicationDate
          lastModifiedDate
        }
        ... on Video {
          teaser
          hlsVideoSrc
          durationIso8601
          validUntilDate
          neverDelete
          posterImageLink {
            stillUrl
          }
          firstPublicationDate
          lastPublicationDate
          lastModifiedDate
        }
      }
      ${fr.fragment()}
    `}}),Q9=({persons:e})=>se(e)?e.map(t=>({"@type":"Person",name:t.fullName,url:t.autoDelivery?`https://www.dw.com${t.namedUrl}`:void 0})):[{"@type":"Organization",name:"Deutsche Welle",url:"https://www.dw.com"}],V2=(e,t)=>{var i,o;const n=(o=(i=e==null?void 0:e.mainContentImageLink)==null?void 0:i.target)==null?void 0:o.staticUrl;if(n)return rw.map(a=>si(n,a));const r=e==null?void 0:e.posterImageUrl;if(r)return $f({imageUrl:r,staticBaseHost:t})?rw.map(a=>k0(r,a)):[r]},E0=e=>({"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":e.canonicalUrl},publisher:{"@type":"Organization",name:"Deutsche Welle",logo:{"@type":"ImageObject",url:"https://dw.com/images/icons/favicon-180x180.png",width:"180",height:"180"}},author:Q9(e),headline:e.title,image:V2(e),datePublished:e.firstPublicationDate||e.lastPublicationDate,dateModified:e.lastModifiedDate}),q9=e=>({...E0(e),dateModified:e.lastPublicationDate}),Y9=e=>({...E0(e),"@type":"BlogPosting"}),K9=(e,t)=>({"@context":"https://schema.org","@type":"VideoObject",name:e.title,description:e.teaser,thumbnailUrl:V2(e,t),uploadDate:e.firstPublicationDate||e.lastPublicationDate,dateModified:e.lastModifiedDate,expires:e.neverDelete?void 0:e.validUntilDate,duration:e.durationIso8601,contentUrl:e.hlsVideoSrc,embedUrl:void 0}),X9=({content:e,staticBaseHost:t})=>r2(e)?E0(e):l0(e)?q9(e):y6(e)?Y9(e):wf(e)?K9(e,t):null,G2=({content:e})=>{const{staticBaseHost:t}=Mt(),n=X9({content:e,staticBaseHost:t});if(!n)return null;const r=H9(n);return s.jsx(mt,{children:s.jsx("script",{type:"application/ld+json",children:JSON.stringify(r)})})},Z9=({DetailZoneFn:e=Te,AlternatingColorZoneConfig:t={compFn:Te,isBgColorOnEveryEven:!1},className:n})=>{const r=e(),{compFn:i,isBgColorOnEveryEven:o}=t,a=i();return s.jsxs(Ya,{className:H(n,"container-fluid"),id:Me.quickNav.mainContent,children:[r&&s.jsx("section",{className:"row",children:s.jsx("div",{className:"detail-zone col",children:r})}),a&&s.jsx("section",{className:"row",children:s.jsx("div",{className:H(`alternating-zone col ${o?"even-alternating":"odd-alternating"}`),children:a})})]})},li={basicBgColor:"--content-page-layout-basic-color",alternativeBgColor:"--content-page-layout-alternative-color"},Ni=`
  ${li.basicBgColor}: ${C.DARK_BLUE_GREY_01};
  ${li.alternativeBgColor}: ${C.DARK_BLUE_GREY_02};
`,wo=h(Z9)`
  .detail-zone,  .alternating-zone {
    padding: 0;
  }

  .alternating-zone {
    .always-dark {
      ${Ni}
    }
    &.even-alternating > {
      *:nth-child(2n+2) {
        background: var(${li.alternativeBgColor}, ${C.BLUE_GREY_01});
      }
      *:nth-child(2n+1) {
        background: var(${li.basicBgColor}, transparent);
      }
    }

    &.odd-alternating > {
      *:nth-child(2n+1) {
        background: var(${li.alternativeBgColor}, ${C.BLUE_GREY_01});
      }
      *:nth-child(2n+2) {
        background: var(${li.basicBgColor}, transparent);
      }
    }
  }
`,J9=["VIDEO","AUDIO","IMAGE_GALLERY","ARTICLE","EXTERNAL_LINK","DOWNLOAD","LIVEBLOG"],H2=e=>e.targetType==="DOWNLOAD",Q2=e=>e.targetType==="EXTERNAL_LINK",eM=e=>J9.includes(e.targetType),tM=e=>!e.isInText,nM=e=>e.target!==void 0||e.targetType==="EXTERNAL_LINK",rM=e=>!Q2(e)&&!H2(e),iM=(e=[])=>{const t=e.filter(eM).filter(nM).filter(tM),n=t.filter(Q2),r=t.filter(H2);return[...t.filter(rM),...n,...r]},oM=({className:e,translation:t,isOpen:n=!1,...r})=>{const i=z(t);return s.jsxs(Wl,{className:e,"data-tracking-name":"show-more",...r,children:[i,s.jsx(Ml,{pointsDown:!n,className:"more-icon"})]})},aM=M`
  .more-icon {
    width: 22px;
    height: 22px;
  }
`,bo=h(oM)`
  ${aM}
`;bo.darkStyles=Wl.darkStyles;const sM=e=>{var t;return((t=getComputedStyle(e.parentNode))==null?void 0:t.display)!=="none"},q2=({listElement:e,indexToFocus:t,listEntryClass:n})=>{const r=e==null?void 0:e.getElementsByClassName(n);if((r==null?void 0:r.length)>t){const i=r==null?void 0:r[t],o=i&&[...i.querySelectorAll('a:not([tabindex="-1"])')],a=o==null?void 0:o.find(sM);a&&a.focus()}},Tf=e=>{const t=x.useRef();return x.useEffect(()=>{t.current=e},[e]),t.current},lM="teaser";function cM(e,t){const[n,r]=x.useState(e.slice(0,t));x.useEffect(()=>{r(e.slice(0,t))},[e,t]);const i=e.length===n.length;return[{slicedArray:n,isOpen:i},()=>r(i?e.slice(0,t):e.slice(0,e.length))]}const uM=({className:e,dataArray:t=[],visibleTeaserCount:n=3,focusContainerClass:r=lM,children:i})=>{const[{slicedArray:o,isOpen:a},l]=cM(t,n),[c,u]=x.useState(!1),d=x.useRef(null),f=a?"content_block_detail.more_on_topic.show_less":"content_block_detail.more_on_topic.show_more",p=Tf(o.length),m=x.useCallback(S=>{cf(S)&&c&&a&&(S.preventDefault(),q2({listElement:d==null?void 0:d.current,indexToFocus:p,listEntryClass:r})),S.key===Sn.TAB&&u(!1)},[c,p]);return s.jsxs("div",{ref:d,className:e,children:[se(o)&&i(o),t.length>n&&s.jsx(Di,{children:s.jsx(bo,{className:"toggle-more-button",translation:f,onKeyDown:m,onClick:()=>{l(),u(!0)},isOpen:a})})]})},dM=bo.darkStyles,fM=M`
  .toggle-more-button {
    margin-top: 30px;
  }
`,pM=h(uM)`
  ${fM}
`,mM=Object.freeze({[me.Audio]:Vy,[me.Video]:fu,[me.Channel]:fu,[me.Livestream]:fu,[me.ImageGallery]:pF,[me.Infographics]:hF,[me.Interactive]:yF}),hM=({className:e,contentType:t})=>{const n=mM[t];return n?s.jsx(n,{className:e}):null},Y2=M`
  width: 0.9em;
  height: 0.9em;
  margin-bottom: 0.18em;
  margin-right: 7px;

  path {
    fill: currentColor;
  }

  ${b.lg`
    margin-right: 9px;
  `}

  ${b.xl`
    margin-right: 10px;
  `}
`,_f=h(hM)`
  ${Y2}
`,ze=Object.freeze({config:Object.freeze({isHidden:!1,formatConfig:void 0,hide:Object.freeze({kicker:!1,description:!1,opinion:!1,opinionMetadata:!1,timeIndicator:!1}),isCurrent:!1}),content:{},link:{}}),Cf=x.createContext({config:{isHidden:ze.config.isHidden,formatConfig:ze.config.formatConfig,hide:{kicker:ze.config.hide.kicker,description:ze.config.hide.description,opinion:ze.config.hide.opinion,opinionMetadata:ze.config.hide.opinionMetadata,timeIndicator:ze.config.hide.timeIndicator},isCurrent:ze.config.isCurrent},content:ze.content,link:ze.link}),en=()=>x.useContext(Cf),ea=Object.freeze({NONE:"NONE",ON_DETAILS_PAGE:"ON_DETAILS_PAGE",IN_RICH_TEXT:"IN_RICH_TEXT"}),$0=(e=ea.NONE)=>({get isOnDetailPage(){return e===ea.ON_DETAILS_PAGE||e===ea.IN_RICH_TEXT},get isInRichText(){return e===ea.IN_RICH_TEXT}}),T0=x.createContext($0()),Xn=()=>x.useContext(T0),Xa=({children:e})=>s.jsx(T0.Provider,{value:$0(ea.ON_DETAILS_PAGE),children:e}),gM=({children:e})=>s.jsx(T0.Provider,{value:$0(ea.IN_RICH_TEXT),children:e}),iw={[me.Audio]:"audio_player",[me.Video]:"video_player",[me.ImageGallery]:"slideshow",[me.Livestream]:"video_player"},Af=(e,t)=>{const n=Xn(),r=z(`component.${iw[e]}.title_prefix.${n.isInRichText?"embedded":"regular"}`);return Object.keys(iw).includes(e)?`${r} — ${t}`:void 0},yM=A({name:"LinkedTitle",fragment(){return _`fragment ${this.name} on Content {
        ... on OpinionAspect {
          isOpinion
        }
      }
    `}}),vM=({contentType:e,title:t,isItalic:n,...r})=>{const i=n?n0:Oi;return s.jsxs(i,{...r,children:[s.jsx(_f,{contentType:e}),t]})},K2=Oi.darkStyles,X2=h(({className:e,isA:t="h2",forceSkipTabbing:n=!1,"aria-hidden":r=!1,forceItalic:i=!1})=>{const{config:{isHidden:o},content:a,link:l}=en(),c=t,u=l.name||a.title,d=l.url||a.namedUrl,f=Af(a.__typename,u),p=a.isOpinion||i,m=n||o;return u?s.jsx(c,{className:H(e,"title"),"aria-hidden":r,children:s.jsx(vM,{skipTitleForInternal:!0,to:d,tabIndex:m?-1:0,"aria-label":f,contentType:a.__typename,title:u,isItalic:p})}):null})`
  margin-bottom: 0;
  font-size: 2.2rem;
  word-break: break-word;

  & > * {
    display: block;
  }

  ${b.md`
    font-size: 2.4rem;
  `};
`,xM=it.darkStyles,SM=h(({className:e})=>{const{content:t,link:n,config:{hide:{description:r}}}=en(),i=n.name||t.title,o=n.description||t.shortTeaser||t.teaser,a=n.url||t.namedUrl;return r||!o?null:s.jsx(it,{isA:"div",className:`${e} teaser-description`,children:s.jsx(W7,{title:i,skipTitleForInternal:!0,to:a,tabIndex:-1,children:o})})})`
  font-size: 1.6rem;
  word-break: break-word;
  & > * {
    display: block;
    padding-top: 10px;
  }

  ${b.md`
    font-size: 1.4rem;
  `};
`,wM=({className:e,children:t})=>t?s.jsx("span",{className:`sr-only ${e}`,children:t}):null,ko=M`
    position: absolute;
    top: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    margin: -1px;
    white-space: nowrap;
`,_0=h(wM)`
  ${ko}
`,C0=60*1e3,Hh=60*C0,bM=24*Hh;function kM(e){const t=Date.now(),n=new Date(e),r=t-n.getTime();return r<0?null:r<Hh?{minutes:Math.round(r/C0)}:r<bM?{hours:Math.round(r/Hh)}:null}const Z2=({dateStr:e,startDateStr:t,endDateStr:n})=>t<=e&&e<n,EM={PLURAL:"general.time.minutes_ago",SINGULAR:"general.time.one_minute_ago"},$M={PLURAL:"general.time.hours_ago",SINGULAR:"general.time.one_hour_ago"},ow={minutes:EM,hours:$M};function TM(e,t){const n=Qy(),{isBrowser:r}=x_();if(!t)return"";if(!r)return t;const i=kM(e);if(i){const o=Object.keys(i)[0],l=i[o]>1||i[o]===0?ow[o].PLURAL:ow[o].SINGULAR;return n.t(l,i)}return t}const aw=(e,t,n)=>{const r=Qy();return`${e?r.t(e):""} ${TM(t,n)}`.trim()},J2=({date:e,localizedDate:t,localizedDateSr:n,label:r,className:i,isA:o=we})=>{const a=aw(r,e,t),l=aw(r,e,n),c=o;return s.jsxs(c,{className:i,children:[s.jsx("time",{"aria-hidden":"true",children:a}),s.jsx(_0,{children:l})]})},_M=we.darkStyles,eC=h(J2)``,sw=A({name:"TeaserFooterDuration",fragment(){return _`fragment ${this.name} on PlaybackResourceAspect {
        formattedDurationInMinutes
      }`}}),CM=({className:e})=>{const{content:t}=en(),n=z({key:"component.av_player.duration.minutes.abbreviation",parameters:{duration:t.formattedDurationInMinutes}});return s.jsx(we,{className:e,children:n})},AM=h(CM)``,lw=A({name:"TeaserFooterImageCount",fragment(){return _`fragment ${this.name} on ImageGallery {
      extendedGalleryImages {
        name
      }
    }`}}),LM=({className:e})=>{const{content:t}=en(),n=t.extendedGalleryImages.length-1,r=z(Mh({key:"component.slideshow.number_of_images",count:n,parameters:{count:n}}));return s.jsx(we,{className:e,children:r})},IM=h(LM)``,Qh=A({name:"TeaserFooter",fragment(){return _`fragment ${this.name} on Content {
        ... on DeliveryAspect {
          contentDate
          localizedContentDate
          localizedContentDateSr
        }
        ... on TeaserAspect {
          roadTeaserKicker(pageId: $id, lang: $lang)
        }
        ...${sw.name}
        ...${lw.name}
      }
      ${sw.fragment()}
      ${lw.fragment()}
    `}}),jM=({className:e})=>{const{content:t,config:{hide:n}}=en();return s.jsxs("div",{className:e,children:[!n.kicker&&t.roadTeaserKicker&&s.jsx(we,{className:"kicker",children:t.roadTeaserKicker}),!n.timeIndicator&&t.contentDate&&s.jsx(eC,{className:"date-time",date:t.contentDate,localizedDate:t.localizedContentDate,localizedDateSr:t.localizedContentDateSr}),(i2(t)||wf(t))&&s.jsx(AM,{}),v6(t)&&s.jsx(IM,{})]})},A0=we.darkStyles,L0=h(jM)`
  font-size: 1.1rem;

  & > *${G.notLast} {
    &:after {
      content: '\u00A0|\u00A0';
      letter-spacing: 0.08rem;
      margin: 0 2px;
    }
  }

  .kicker {
    text-transform: uppercase;
    letter-spacing: 0.085rem;
    word-break: break-word;
  }

  .date-time {
    display: inline-block;
    time {
      letter-spacing: 0.03rem;
    }
  }

  ${b.md`
    font-size: 1.2rem;

    & > *${G.notLast} {
      &:after {
        font-size: 1.1rem;
      }
    }

    .date-time{
      time {
        letter-spacing: 0.04rem;
      }
    }
  `};
`,sd=A({name:"AuthorLink",fragment(){return _`fragment ${this.name} on Person {
        namedUrl
        fullName
        autoDelivery
      }
    `}}),OM=({className:e,person:{namedUrl:t="",fullName:n,autoDelivery:r=0}={}})=>n?r?s.jsx(He,{className:`${e} author-link`,to:t,title:n,skipTitleForInternal:!0,children:n}):s.jsx(zl,{className:`${e} no-link`,children:n}):null,I0=`
  ${He.darkStyles}
  ${zl.darkStyles};
`,j0=h(OM)`
  &.author-link > *{
    letter-spacing: 0.04rem;
  }
`,cw=Object.freeze({EXTERNAL_AUTHOR:"external",COMMENT:"comment",COLUMN:"column"}),RM=["EXTERNAL_AUTHOR"],DM=e=>{const t=se(e.firstPersonArray)&&e.firstPersonArray[0],n=t&&RM.includes(t.personType)?t.personType:e.genre,r=z(`component.opinion.type.${cw[n]}`);return Object.keys(cw).includes(n)?r:void 0},ld=A({name:"OpinionMetadata",fragment(){return _`fragment ${this.name} on Content {
      ...on MetadataAspect {
        genre
      }
      ... on AssociationsAspect {
        opinionSeries {
          name
        }
      }
    }
    `}}),NM=({className:e})=>{const{content:t}=en(),n=DM(t),[r]=t.opinionSeries,i=r==null?void 0:r.name;return s.jsxs("div",{className:e,children:[s.jsx(we,{className:"opinion-type",children:n}),i&&s.jsx(Ql,{className:"series-name",children:i})]})},tC=we.darkStyles,nC=h(NM)`
  font-size: 1.3rem;

  .opinion-type:after {
    content: ' ';
  }
  .series-name {
    display: inline-block;
  }
`,cd=A({name:"AuthorLinkedImage",fragment(){return _`fragment ${this.name} on Person {
        namedUrl
        fullName
        autoDelivery
        mainContentImageLink {
          targetId
          additionalInformation
          target {
            ...${fr.name}
          }
        }
      }
      ${fr.fragment()}
    `}}),PM=({className:e,person:t={}})=>{const{target:n,additionalInformation:r}=t.mainContentImageLink||{};if(!n)return null;const i=t.autoDelivery?{Tag:wr,props:{to:t.namedUrl,title:t.fullName,tabIndex:-1}}:{Tag:"div",props:{}};return s.jsx(i.Tag,{className:e,...i.props,children:s.jsx(ql,{image:n,alt:r,formatConfig:U9})})},O0=h(PM)`
  width: 40px;
  height: 40px;

  overflow: hidden;
  border-radius: 50%;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  

  ${b.sm`
    width: 50px;
    height: 50px;
  `}
`,Da=A({name:"AuthorData",fragment(){return _`fragment ${this.name} on Content {
        ... on AssociationsAspect {
          firstPersonArray: persons(amount: 1) {
            personType
            ...${cd.name}
            ...${sd.name}
          }
        }
        ...${ld.name}
      }
      ${cd.fragment()}
      ${sd.fragment()}
      ${ld.fragment()}
    `}}),FM=({children:e,className:t,forceHideAuthorLinkedImage:n=!1})=>{const{content:{firstPersonArray:[r]},config:{hide:{opinionMetadata:i}}}=en();return s.jsxs(s.Fragment,{children:[!n&&s.jsx(O0,{className:"author-image",person:r}),s.jsxs("div",{className:`${t} author-data`,children:[e,s.jsx(j0,{person:r}),!i&&s.jsx(nC,{className:"opinion-metadata"})]})]})},rC=`
  ${I0}
  ${tC}
`,R0=h(FM)`
`,D0=({linkCssSelector:e})=>`${e} {
    ${B_}
   }`,N0=({linkCssSelector:e})=>`${e} {
    ${Xy}
   }`,iC=M`
  .author-image{
    flex-shrink: 0;
  }

  .author-data{
    .author-link, .no-link {
      font-size: 1.3rem;
    }
  }

  ${D0({linkCssSelector:".author-image:hover + .author-data .author-link"})}
  ${N0({linkCssSelector:".author-image:active + .author-data .author-link"})}
`,qh=A({name:"Opinion",fragment(){return _`fragment ${this.name} on Content {
        ... on OpinionAspect {
          isOpinion
        }
        ...${Da.name}
      }
      ${Da.fragment()}
    `}}),MM=({className:e})=>{const{content:t,config:{hide:{opinion:n}}}=en();return n||!t.isOpinion?null:s.jsx("div",{className:e,children:s.jsx(R0,{})})},Lf=rC,P0=h(MM)`
  display: flex;
  align-items: center;

  .author-image{
    margin-right: 10px;
  }

  .author-data{
    display: flex;
    flex-direction: column;
  }

  ${iC}
`,BM=({className:e,children:t})=>s.jsx("div",{className:H(e,"teaser-data-wrap col-12"),children:t}),UM=h(BM)`
`,zM=A({name:"TeaserData",fragment(){return _`fragment ${this.name} on Content {
        ...${qh.name}
        ...${Qh.name}
      }
      ${qh.fragment()}
      ${Qh.fragment()}
    `}}),WM=({children:e,className:t})=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"teaser-data",children:e}),s.jsx(P0,{className:`${t} opinion-wrapper`}),s.jsx(L0,{className:`${t} teaser-footer-wrapper`})]}),VM=`
  ${Lf}
  ${A0}
`,GM=h(WM)`
  &.opinion-wrapper,
  &.teaser-footer-wrapper:not(:empty){
    margin-top: 15px;
  }
`,Vt={...oe,lg:95,xl:110},wl={lg:960,xl:1110},ws={xs:Vt.xs+31,sm:Vt.sm+31,md:Vt.md+33,lg:Vt.lg+38,xl:Vt.xl+38},Mc={sm:Vt.sm-15,md:Vt.md-15,lg:Vt.lg-15,xl:Vt.xl-15},HM=({children:e,className:t})=>s.jsx("div",{className:t,children:e}),Tt={contentAreaInlineSpacing:"--content-area-inline-spacing",listInlineStartSpacing:"--list-inline-start-spacing"},oC=M`
  ${Tt.contentAreaInlineSpacing}: ${Vt.xs}px;
  ${b.sm`
    ${Tt.contentAreaInlineSpacing}: ${Vt.sm}px;
  `}
  ${b.md`
    ${Tt.contentAreaInlineSpacing}: ${Vt.md}px;
  `}
  ${b.lg`
    ${Tt.contentAreaInlineSpacing}: ${Vt.lg}px;
  `}
  ${b.xl`
    ${Tt.contentAreaInlineSpacing}: ${Vt.xl}px;
  `}
`,QM=M`
  ${Tt.listInlineStartSpacing}: ${ws.xs}px;
  ${b.sm`
    ${Tt.listInlineStartSpacing}: ${ws.sm}px;
  `}
  ${b.md`
    ${Tt.listInlineStartSpacing}: ${ws.md}px;
  `}
  ${b.lg`
    ${Tt.listInlineStartSpacing}: ${ws.lg}px;
  `}
  ${b.xl`
    ${Tt.listInlineStartSpacing}: ${ws.xl}px;
  `}
`,Za=M`
  ${oC}
  padding-inline: var(${Tt.contentAreaInlineSpacing});
`,F0=M`
    ${oC}
    margin-inline: calc(-1 * var(${Tt.contentAreaInlineSpacing}));
`,qM=h(HM)`
  background-color: ${C.WHITE};
  padding-top: 20px;
  padding-bottom: 20px;
  ${Za}
`,YM=h(qM)`
  ${b.lg`
    padding-top: 30px;
  `}
`,aC=({staticUrlTemplate:e,formatGroupName:t,maxWidth:n=wl.xl,ext:r="jpg"})=>{const i=Math.min(n,wl.xl),o=D9({staticUrlTemplate:e,ext:r});return[...zr[t].formats.filter(({width:l})=>l<i),zr[t].formats.find(({width:l})=>l>=i)].filter(Boolean).map(l=>`${si(o,l)} ${l.width}w`).join(", ")},uw=({staticUrlTemplate:e,formatConfig:t,ext:n})=>t.map(({minWidth:i,maxWidth:o,formatGroupName:a},l)=>{const{aspectRatio:c}=zr[a],u=l!==t.length-1;return{srcSet:aC({staticUrlTemplate:e,formatGroupName:a,maxWidth:o,ext:n}),media:`(min-width: ${i}px) ${u?`and (max-width: ${o}px)`:""}`,height:c}}),KM=["90X","FREE","LEGACY"],XM=({image:e,alt:t,formatConfig:n,className:r})=>{if(!e||!n||n.find(({formatGroupName:a})=>KM.includes(a)))return null;const i="60X",o=zr[i];return s.jsxs("picture",{className:r,children:[uw({formatConfig:n,staticUrlTemplate:e.staticUrl,ext:"webp"}).map((a,l)=>s.jsx("source",{type:"image/webp",...a,width:"100"},l)),uw({formatConfig:n,staticUrlTemplate:e.staticUrl}).map((a,l)=>s.jsx("source",{type:"image/jpeg",...a,width:"100"},l)),s.jsx("img",{fetchpriority:"high",src:"",srcSet:aC({staticUrlTemplate:e.staticUrl,formatGroupName:i}),width:"100",height:o.aspectRatio,title:t,alt:t})]})},Yl=h(XM)`
  img {
    display: block;
    height: auto;
    width: 100%;
    object-fit: cover;
    background-color: ${C.BLUE_GREY_02};
  }
`,ZM=({className:e,url:t,formatConfig:n})=>{const r=x.useRef(),[i,o]=yr(Tr);return t?s.jsx("figure",{ref:r,className:`external-image ${e}`,children:s.jsx("img",{ref:i,src:o?t:"",alt:"external"})}):null},JM=h(ZM)`
  ${M2}
  ${z2}

  img {
    ${B2}
    height: 100%;
    object-fit: cover;
  }
`,eB=A({name:"TeaserLinkedImage",fragment(){return _`fragment ${this.name} on Content {
        ... on UrlAspect {
          namedUrl
        }
        ... on NamedAspect {
          title
        }
        ... on AssociationsAspect {
          mainContentImageLink {
            targetId
            additionalInformation
            target {
              ...${fr.name}
            }
          }
        }
        ... on PlaybackResourceAspect {
          posterImageUrl
        }
      }
      ${fr.fragment()}
    `}}),tB=({posterImageUrl:e,staticBaseHost:t})=>$f({imageUrl:e,staticBaseHost:t})?{staticUrl:e.replace(W2,"_${formatId}.$1")}:null,nB=({className:e,hasHqVideoStill:t=!1,preload:n})=>{const{config:{formatConfig:r},content:i}=en(),{staticBaseHost:o}=Mt(),{mainContentImageLink:a,posterImageUrl:l,title:c}=i,{additionalInformation:u,target:d}=a||{},f=d||tB({posterImageUrl:l,staticBaseHost:o}),p=n?Yl:ql;return s.jsx(wr,{className:e,title:c,to:i.namedUrl,tabIndex:-1,children:f?s.jsx(p,{image:f,alt:u,formatConfig:r}):s.jsx(JM,{formatConfig:r,url:t?l==null?void 0:l.replace(/\.jpg$/,"_partner.jpg"):l})})},sC=h(nB)``,rB=eB,iB=({children:e,className:t})=>{const{content:n}=en();return N9(n)?s.jsxs("div",{className:`${t} teaser-image-wrap col-12`,children:[s.jsx(sC,{className:"teaser-image"}),e]}):null},oB=h(iB)``,aB="addEmbeddings",lC=({dictionary:e})=>{x.useEffect(()=>{ha.pushToGoogleTagManager({datalayerObj:{event:aB,pageData:{embeddings:e}}})},[])},M0=e=>{const{level1Id:t,macaParam:n,pageOrigin:r,gtmEnvironment:i}=S0(),o={[e.id]:w0({content:e,level1Id:t,macaParam:n,pageOrigin:r,environment:i})};lC({dictionary:o})},sB=({maxWidth:e,minWidth:t,formatsForCurrentGroup:n})=>{const r=n.filter(o=>o.width>=t&&o.width<=e).map((o,a,l)=>{var f;const c=(f=l[a-1])==null?void 0:f.width,u=c?c+1:t,d=o.width;return{...o,mediaMin:u,mediaMax:d}});if(r.length===0)return r;const i=r.slice(-1)[0];if(i.width<e&&e!==B.max.wide_xl){const o=n.find(a=>a.width>i.width);if(o)return[...r,{...o,mediaMin:i.mediaMax+1,mediaMax:e}]}return r},lB=({imageUrl:e,formatConfig:t,urlReplacementFunction:n=si})=>{const{staticBaseHost:r}=Mt();if(!e||!t)return null;if(!$f({imageUrl:e,staticBaseHost:r}))return s.jsx(mt,{children:s.jsx("link",{rel:"preload",as:"image",fetchpriority:"high",href:e})});const i=t.map(({formatGroupName:o,minWidth:a,maxWidth:l})=>{const c=zr[o].formats,u=sB({formatsForCurrentGroup:c,minWidth:a,maxWidth:Math.min(l,B.max.lg)});if(l>=B.min.xl){const d={...c.find(p=>p.width>=wl.xl),mediaMin:B.min.xl,mediaMax:B.max.wide_xl};return[...u,d]}return u}).flat().filter(Boolean);return s.jsx(mt,{children:i.map((o,a)=>{const l=a!==i.length-1;return s.jsx("link",{rel:"preload",as:"image",fetchpriority:"high",media:`(min-width: ${o.mediaMin}px) ${l?`and (max-width: ${o.mediaMax}px)`:""}`,href:n(e,o)},a)})})},cB=({children:e,className:t,content:n,isHero:r,...i})=>{const{backgroundImageUrl:o,sizeRef:a,inViewRef:l}=G9({content:n});return s.jsxs(s.Fragment,{children:[r&&s.jsx(lB,{imageUrl:n.posterImageUrl,formatConfig:So,urlReplacementFunction:k0}),s.jsx("div",{className:t,ref:a,...i,children:s.jsx("div",{className:"bg-poster",ref:l,style:{backgroundImage:o&&`url(${o})`},children:e})})]})},cC=h(cB)`
  position: relative;
  cursor: pointer;
  padding-bottom: 56.25%;
  background-color: black;
  .bg-poster {
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  .video-js, .bg-poster {
    position: absolute;
    top: 0;
    left: 0;
  }
  .video-js, .vjs-poster {
    background-color: transparent;
  }
`,uC=e=>e.targetType==="VIDEO",dC=e=>e.targetType==="AUDIO",B0=e=>(e.contentLinks||[]).filter(t=>t.isInText),uB=e=>B0(e).filter(t=>uC(t)||dC(t)),dB=e=>se(B0(e).filter(uC)),fB=e=>se(B0(e).filter(dC)),fC=e=>wf(e)||bf(e)||o2(e)||dB(e),pB=e=>i2(e)||fB(e),pC={bigPlayButton:!1,html5:{vhs:{overrideNative:!Vu()},nativeAudioTracks:!1,nativeVideoTracks:!1}},mC=Object.freeze({...pC}),mB=Object.freeze({...mC,liveui:!0}),hB=Object.freeze({...pC,controlBar:{pictureInPictureToggle:!1,fullscreenToggle:!1},playbackRates:[1,1.3,1.5]}),gB=async e=>{(await Promise.all([fC(e)&&J(()=>import("./videoPlugins-c2e889b3.js"),["static/videoPlugins-c2e889b3.js","static/video.es-67cbb07f.js","static/extends-7277ac90.js","static/videoPlugins-7768a01f.css"]),pB(e)&&J(()=>import("./audioPlugins.cd23-e4a8eba0.js"),["static/audioPlugins.cd23-e4a8eba0.js","static/video.es-67cbb07f.js","static/extends-7277ac90.js","static/audioPlugins.cd23-2bdd7fd2.css"])].filter(Boolean))).forEach(n=>n.register())},yB=async e=>{const{videojs:t}=await J(()=>import("./videojs.cd23-cfa3b93c.js"),["static/videojs.cd23-cfa3b93c.js","static/video.es-67cbb07f.js","static/extends-7277ac90.js","static/videojs.cd23-aff391b2.css"]);return await gB(e),{playerLib:t()}},vB=({className:e})=>s.jsx("div",{className:e,children:s.jsx(Vy,{})}),xB=h(vB)`
  background-color: ${C.DW_GREY_07};
  height: 100%;

  svg {
      display: block;
      margin: auto;
      width: 16%;
      height: 100%;
      fill: ${C.DW_GREY_04};
  }
`,SB=h(v0)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,wB=({className:e,videoDuration:t})=>s.jsx("div",{className:H(e,"info-bar"),children:s.jsx("div",{className:"vjs-duration-text",children:s.jsx(we,{children:t})})}),bB=h(wB)`
  ${we.darkStyles};
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${Wn(C.DARK_BLUE_GREY_01,.9)});

  .vjs-duration-text {
    position: relative;
    left: 65px;
    font-size: 1.6rem;
    height: 50px;
    display: flex;
    align-items: center;

    & > span {
      letter-spacing: 0.05rem;
    }
  }

  ${b.lg`
    .vjs-duration-text {
      height: 60px;
      left: 75px;
    }
  `}
`,kB=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("path",{stroke:"#FFF",d:"M3 .467v18.999l16-9.499z"})),hC=h(e=>s.jsx(kB,{...e}))``,EB=({className:e,buttonTitle:t,...n})=>s.jsx(vf,{className:e,title:t,...n,children:s.jsx(hC,{})}),$B=h(EB)`
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 50px;
  svg {
    width: 20px;
    height: 20px;
  }

  ${b.lg`
    width: 60px;
    svg {
      width: 24px;
      height: 24px;
    }
  `}
`,gC=({content:e,showSpinner:t,showSkeleton:n,playButtonTitle:r,onPlayClick:i})=>s.jsxs(Sr,{children:[t&&s.jsx(SB,{}),n&&s.jsxs(s.Fragment,{children:[s.jsx($B,{buttonTitle:r,onClick:i}),s.jsx(bB,{videoDuration:e.formattedDuration})]})]}),yC=({content:e,allowLoadPlayer:t})=>{const[n,r]=x.useState({playerLib:null});return x.useEffect(()=>{let i=!1;async function o(){const{playerLib:a}=await yB(e);i||(j9(a==null?void 0:a.VERSION),r({playerLib:a}))}return t&&!(n!=null&&n.playerLib)&&o(),()=>{i=!0}},[e,t,n]),n},TB=async({content:e,einbliqCustomerId:t,isMobileMode:n})=>{const{einbliqLib:r,initEinbliqSession:i}=await J(()=>import("./einbliq-a69c7d1a.js"),[]);return i({einbliq:r(),content:e,einbliqCustomerId:t,isMobileMode:n})},_B=({content:e,allowLoadEinbliq:t})=>{const{isMobileMode:n}=At(),r=Va(),{einbliqCustomerId:i}=Mt(),[o,a]=x.useState({einbliq:null});return x.useEffect(()=>{let l=!1;async function c(){const u=await TB({content:e,einbliqCustomerId:i,isMobileMode:n});l||a({einbliq:u})}return t&&r&&fC(e)&&!(o!=null&&o.playerLib)&&c(),()=>{l=!0}},[e,t,r,i,o]),o},CB="VjsDurationInfoBar",AB="vjsBigPlayButton",If=({callback:e,delay:t=100,conditional:n=!0},r=[])=>{const i=x.useRef();x.useEffect(()=>{i.current=e},[e]),x.useEffect(()=>{const o=()=>i.current();if(!n)return;const a=O.window.setTimeout(o,t);return()=>O.window.clearTimeout(a)},[t,n,...r])},vC=({content:e,initCustomPlugins:t,playerOptions:n})=>{const{isMobileMode:r}=At(),[i,o]=x.useState(!1),[a,l]=x.useState(!1),[c,u]=x.useState(!1),d=c||a,[f,p]=x.useState(!1),{playerLib:m}=yC({content:e,allowLoadPlayer:d}),{einbliq:S}=_B({content:e,allowLoadEinbliq:d}),w=x.useRef(null),E=x.useRef(null);return If({callback:()=>l(!0),delay:5e3,conditional:!m&&!c&&!a}),x.useEffect(()=>{Vu()||r?(o(!1),l(!0)):o(!c)},[r,c]),x.useEffect(()=>{const g=E.current;if(!g)return Te;if(m&&!w.current){const y=m(g,n);y.addChild(CB),y.addChild(AB),y.mediaTracking(),y.stopOtherPlayers(),t({player:y,content:e}),S&&S(y),y.ready(()=>{o(!1),p(!0),y.addClass("rendered"),c&&setTimeout(()=>{g.parentElement.querySelector(".play-button").click()},10)}),w.current=y}return()=>{const y=w.current;y&&!y.isDisposed()&&(y.dispose(),w.current=null)}},[E,m,e.id]),{playerElemRef:E,onSkeletonPlayClick:()=>u(!0),showSpinner:!f&&c,showSkeleton:i}},lo=A({name:"Audio",fragment(){return _`fragment ${this.name} on Audio {
      id
      posterImageUrl
      mp3Src
      formattedDuration
      ...${cr.name}
    }
    ${cr.fragment()}
    `}}),LB=({player:e})=>{e.seekButtons({forward:30,back:10})},IB=({content:e,className:t,isHero:n=!1})=>{M0(e);const{playerElemRef:r,onSkeletonPlayClick:i,showSpinner:o,showSkeleton:a}=vC({content:e,initCustomPlugins:LB,playerOptions:hB}),l=z("component.audio_player.play_button.label");return s.jsxs(cC,{className:t,content:e,isHero:n,onClick:i,children:[!e.posterImageUrl&&s.jsx(xB,{}),s.jsxs(s.Fragment,{children:[s.jsxs("audio",{id:`audio-${e.id}`,ref:r,className:"dw-player video-js vjs-fluid",controls:!0,poster:F2,preload:"none","data-duration":e.formattedDuration,"data-play-btn-title":l,children:[s.jsx("source",{src:e.mp3Src,type:"audio/mp3"}),s.jsxs("p",{className:"vjs-no-js",children:["To play this audio please enable JavaScript, and consider upgrading to a web browser that ",s.jsx("a",{href:"https://videojs.com/html5-video-support/",rel:"noopener noreferrer",target:"_blank",children:"supports HTML5 video"})]})]}),s.jsx(gC,{content:e,showSpinner:o,showSkeleton:a,playButtonTitle:l,onPlayClick:i})]})]},e.id)},U0=h(IB)`
  .video-js {
    /*! @noflip */
    direction: ltr;
  }

  audio {
    ${ko}
  }
`,co=A({name:"Video",fragment(){return _`fragment ${this.name} on Video {
      id
      posterImageUrl
      hlsVideoSrc
      formattedDuration
      subtitles {
        language
        srcLanguage
        subtitleUrl
      }
      ...${cr.name}
    }
    ${cr.fragment()}
    `}}),jB=e=>wf(e)?"component.video_player.play_button.label":"component.video_player.play_button.label_live_stream",OB=({player:e,content:t})=>{e.vhsQualitySelector(),e.flyingFocus(),e.setSourceForChromeAndroidPlugin(t)},RB=({content:e,className:t,isHero:n=!1})=>{var c;M0(e);const{playerElemRef:r,onSkeletonPlayClick:i,showSpinner:o,showSkeleton:a}=vC({content:e,initCustomPlugins:OB,playerOptions:bf(e)||o2(e)?mB:mC}),l=z(jB(e));return s.jsx(cC,{className:t,content:e,isHero:n,onClick:i,children:s.jsxs(s.Fragment,{children:[s.jsxs("video",{id:`video-${e.id}`,ref:r,className:"dw-player video-js vjs-fluid",controls:!0,playsInline:!0,preload:"none",poster:F2,"data-duration":e.formattedDuration,"data-play-btn-title":l,children:[s.jsx("source",{src:e.hlsVideoSrc,type:"application/x-mpegURL"}),(c=e.subtitles)==null?void 0:c.map((u,d)=>s.jsx("track",{src:u.subtitleUrl,srcLang:u.srcLanguage,label:u.language},d)),s.jsxs("p",{className:"vjs-no-js",children:["To view this video please enable JavaScript, and consider upgrading to a web browser that ",s.jsx("a",{href:"https://videojs.com/html5-video-support/",rel:"noopener noreferrer",target:"_blank",children:"supports HTML5 video"})]})]}),s.jsx(gC,{content:e,showSpinner:o,showSkeleton:a,playButtonTitle:l,onPlayClick:i})]})},e.id)},bl=h(RB)`
  .video-js {
    /*! @noflip */
    direction: ltr;
  }

  video:not(.vjs-tech) {
    ${ko}
  }
`,DB=A({name:"AVWrap",fragment(){return _`fragment ${this.name} on Content {
        ... on PlaybackResourceAspect {
          # added here for GTM, so AV-Teaser will push tracking, once there are on Navigation pages
          duration
        }
        ...${lo.name}
        ...${co.name}
      }
      ${lo.fragment()}
      ${co.fragment()}
    `}}),NB={[me.Audio]:U0,[me.Video]:bl},PB=({className:e,titleIsA:t})=>{const{content:n}=en(),r=NB[n.__typename];return r?s.jsxs("div",{className:`${e} teaser-av-wrap col-12`,children:[s.jsx(X2,{className:"sr-only",isA:t,forceSkipTabbing:!0}),s.jsx(r,{content:n})]}):null},FB=K2,MB=h(PB)`
  .sr-only {
    ${ko}
  }
`,BB=({textIsA:e=f0,className:t,iconSlotFn:n=Te,translationKey:r,...i})=>{const o=n(),a=z(r),l=e;return s.jsxs("div",{className:t,children:[o,s.jsx(l,{className:"label",...i,children:a})]})},xC=h(BB)`
  display: inline-flex;
  align-items: center;
  padding: 1px 5px;
  column-gap: 5px;

  .label {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  ${b.lg`
    padding-top: 2px;
    padding-bottom: 2px;

    .label {
      font-size: 1.5rem;
      letter-spacing: 0.115rem;
    }
  `}
`,SC={background:"--badge-background-color"},UB=e=>s.jsx(xC,{textIsA:f0,...e}),zB=e=>s.jsx(xC,{textIsA:l2,...e}),WB=h(UB)`
  background-color: var(${SC.background},${C.BREAKING_RED});
`,VB=h(zB)`
  background-color: var(${SC.background},${C.DW_LIGHT_BLUE_NEW});
  padding: 1px 10px;
`,Gn=A({name:"ContentStatusBadge",fragment(){return _`fragment ${this.name} on Content {
        ... on MetadataAspect {
          priority
        }
        ... on Liveblog {
          isLiveblogActive
          isLiveVideo
        }
        ... on Article {
          isLiveVideo
        }
      }
    `}}),wC=e=>l0(e)&&e.isLiveblogActive,bC=e=>e.isLiveVideo,kC=e=>e.priority==="BREAKING_NEWS",GB=e=>kC(e)?"component.content_labels.breaking.label":bC(e)?"component.content_labels.live_video.label":wC(e)?"component.content_labels.live_blog.label":null,HB=e=>wC(e)&&kC(e),QB=({className:e,content:t})=>{const n=GB(t);if(!n)return null;const r=bC(t)||HB(t);return s.jsx(WB,{className:e,translationKey:n,iconSlotFn:r?()=>s.jsx(u2,{className:"pulse-dot"}):Te})},z0=h(QB)``,jf=h(z0)`
  margin-bottom: 10px;

  ${b.md`
    margin-bottom: 15px;
  `}
`,qB=Gn,YB=({className:e})=>{const{content:t}=en();return s.jsx(z0,{className:e,content:t})},EC=h(YB)`
  margin-bottom: 5px;

  ${b.md`
    margin-bottom: 10px;
  `};
`,KB=({className:e,children:t,isHidden:n=ze.config.isHidden,formatConfig:r=ze.config.formatConfig,hideKicker:i=ze.config.hide.kicker,hideDescription:o=ze.config.hide.description,hideOpinion:a=ze.config.hide.opinion,hideOpinionMetadata:l=ze.config.hide.opinionMetadata,hideTimeIndicator:c=ze.config.hide.timeIndicator,isCurrent:u=ze.config.isCurrent,content:d=ze.content,link:f=ze.link,...p})=>s.jsx(Cf.Provider,{value:{config:{isHidden:n,formatConfig:r,hide:{kicker:i,description:o,opinion:a,opinionMetadata:l,timeIndicator:c},isCurrent:u},content:d,link:f},children:s.jsx("div",{className:`${e} teaser`,...p,children:t})}),U={teaserDataFragment:zM,linkedTitleFragment:yM,teaserFooterFragment:Qh,avWrapFragment:DB,imageWrapFragment:rB,opinionFragment:qh,contentStatusTeaserBadgeFragment:qB},$e={darkLinkedDescriptionStyles:xM,darkTeaserDataStyles:VM,darkLinkedTitleStyles:K2,darkTeaserFooterStyles:A0,darkAvWrapStyles:FB,darkOpinionStyles:Lf},q={LinkedTitle:X2,LinkedDescription:SM,TeaserFooter:L0,AVWrap:MB,LinkedImage:oB,MainContentArea:UM,Data:GM,Opinion:P0,ContentStatusTeaserBadge:EC},W0=[".teaser-data",".teaser-data-area",".teaser-data-xs-sm"],$C=[...W0,".teaser-image-wrap"],XB=`&:has(:where(${$C}) a:hover) :where(${W0}) a`,ZB=`&:has(:where(${$C}) a:active) :where(${W0}) a`,un=h(KB)`
  row-gap: 15px;

  ${D0({linkCssSelector:XB})}
  ${N0({linkCssSelector:ZB})}
`,dw=A({name:"InternalContentLinks",fragment(){return _`fragment ${this.name} on AssociationsAspect {
      contentLinks {
        targetId
        name
        description
        target {
          ... on ModelAspect {
            id
          }
          ... on UrlAspect {
            namedUrl
          }
          ... on NamedAspect {
            name
          }
          ... on TextualAspect {
            teaser
          }
          ...${U.teaserDataFragment.name}
          ...${U.contentStatusTeaserBadgeFragment.name}
          ...${U.imageWrapFragment.name}
          ...${U.linkedTitleFragment.name}
        }
      }
    }
    ${U.teaserDataFragment.fragment()}
    ${U.contentStatusTeaserBadgeFragment.fragment()}
    ${U.imageWrapFragment.fragment()}
    ${U.linkedTitleFragment.fragment()}
    `}}),JB=({link:e={},className:t,imageFormatConfig:n})=>s.jsxs(un,{className:H(t,"row"),formatConfig:n,content:e.target,link:e,children:[s.jsx(q.LinkedImage,{children:s.jsxs("div",{className:"teaser-data-xs-sm",children:[s.jsx(q.ContentStatusTeaserBadge,{className:"badge-xs-sm"}),s.jsx(q.LinkedTitle,{isA:"h3",className:"title-xs-sm"})]})}),s.jsx(q.MainContentArea,{children:s.jsxs(q.Data,{children:[s.jsx(q.ContentStatusTeaserBadge,{className:"badge-above-md"}),s.jsx(q.LinkedTitle,{isA:"h3",className:"title-above-md"}),s.jsx(q.LinkedDescription,{className:"d-none d-md-block"})]})})]}),eU=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkLinkedDescriptionStyles}
  ${$e.darkTeaserDataStyles}
`,tU=h(JB)``,fw=A({name:"ExternalLinks",fragment(){return _`fragment ${this.name} on AssociationsAspect {
      externalLinks {
        name
        description
        url
      }
    }`}}),nU=({link:e={},className:t})=>{const{url:n}=e;return s.jsx(un,{className:H(t,"row"),link:e,children:s.jsx(q.MainContentArea,{children:s.jsxs("div",{className:"teaser-data-area",children:[s.jsx(q.LinkedTitle,{isA:"h3"}),s.jsx(q.LinkedDescription,{className:"d-none d-md-block"}),s.jsxs(He,{title:e.name,className:"external-link",to:n,tabIndex:-1,children:[TD({url:n}),s.jsx(L_,{})]})]})})})},rU=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkLinkedDescriptionStyles}
  ${He.darkStyles}
`,iU=h(nU)`
  .external-link {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding-top: 20px;
    column-gap: 5px;

    svg {
      width: 13px;
    }
  }
`,pw=A({name:"DownloadTeaser",fragment(){return _`fragment ${this.name} on AssociationsAspect {
      contentLinks {
        targetId
        name
        description
        target {
          ... on Download {
            downloadType
            staticUrl
          }
        }
      }
    }
    `}}),oU=({link:e={},translationKey:t,className:n})=>s.jsx(un,{className:H(n,"row"),link:{...e,url:e.target.staticUrl},children:s.jsx(q.MainContentArea,{children:s.jsxs("div",{className:"teaser-data-area",children:[s.jsx(q.LinkedTitle,{isA:"h3"}),s.jsx(q.LinkedDescription,{className:"d-none d-md-block"}),s.jsxs(He,{title:e.name,to:e.target.staticUrl,className:"download-link",tabIndex:-1,children:[z({key:t,parameters:{type:e.target.downloadType}}),s.jsx(YF,{})]})]})})}),aU=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkLinkedDescriptionStyles}
  ${He.darkStyles}
`,sU=h(oU)`
  .download-link {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding-top: 20px;
    column-gap: 5px;

    svg {
      width: 13px;
    }
  }
`,lU=({link:e,...t})=>{if(!e)return null;switch(e.targetType){case"DOWNLOAD":return s.jsx(sU,{link:e,translationKey:"component_detail.content_detail.links.download",...t});case"EXTERNAL_LINK":return s.jsx(iU,{link:e,...t});default:return s.jsx(tU,{link:e,...t})}},cU=({children:e,className:t})=>s.jsx("div",{className:H(t,"row"),children:x.Children.map(e,(n,r)=>n&&s.jsx("div",{className:"teaser-wrap col-12 col-md-6 col-lg-4",children:n},r))}),Of="30px",Zn=h(cU)`
  row-gap: ${Of};
`,uU=".teaser-data-wrap:first-child",Kl=()=>M`
  ${b.md`
    .teaser-wrap${G.composition.odd}{
      flex: 0 0 100%;
      max-width: 100%;
    }
  `}

  ${b.lg`
    .teaser-wrap${G.composition.odd}{
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .teaser-wrap${G.composition._4710},
    .teaser-wrap${G.composition._4710} ~ .teaser-wrap${G.topElements(4)},
    .teaser-wrap${G.composition._258},
    .teaser-wrap${G.composition._258} ~ .teaser-wrap${G.topElements(2)}{
      flex: 0 0 50%;
      max-width: 50%;
    }

    .teaser-wrap${G.justNElements(1)}{
      flex: 0 0 100%;
      max-width: 100%;
    }
  `}
`,TC=({noImageSelector:e=uU}={})=>M`
  ${b.md`
    .teaser-wrap${G.composition.odd}{
      .title {
        font-size: 2.8rem;
      }
    }
  `}

  ${b.lg`
    .teaser-wrap${G.composition.odd}{
      .title {
        font-size: 2.4rem;
      }
    }

    .teaser-wrap${G.composition._4710},
    .teaser-wrap${G.composition._4710} ~ .teaser-wrap${G.topElements(4)},
    .teaser-wrap${G.composition._258},
    .teaser-wrap${G.composition._258} ~ .teaser-wrap${G.topElements(2)}{
      .title {
        font-size: 2.8rem;
      }
    }

    .teaser-wrap${G.justNElements(1)}{
      .title {
        font-size: 3.2rem;
      }
      ${e}{
        max-width: 50%;

        .title {
          font-size: 2.8rem;
        }
      }
    }
  `}

  ${b.xl`
    .teaser-wrap${G.composition._4710},
    .teaser-wrap${G.composition._4710} ~ .teaser-wrap${G.topElements(4)},
    .teaser-wrap${G.composition._258},
    .teaser-wrap${G.composition._258} ~ .teaser-wrap${G.topElements(2)}{
      .title {
        font-size: 3.2rem;
      }
    }

    .teaser-wrap${G.justNElements(1)}{
      .title {
        font-size: 3.6rem;
      }
      ${e} .title {
          font-size: 3.2rem;
      }
    }
 `}
`,Rf=()=>M`
  ${TC()}

  ${b.lg`
    .teaser-wrap${G.justNElements(1)}{
      .teaser {
        flex-direction: row;
      }
      .teaser-image-wrap,
      .teaser-av-wrap{
        max-width: 66.666666%;
      }
      .teaser-data-wrap {
        max-width: 33.333333%;
      }
    }
  `}
`,dU=".teaser-data-wrap:first-child",V0=()=>M`
  ${b.md`
    .teaser-wrap:first-child {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .teaser-wrap${G.justNElements(2)},
    .teaser-wrap${G.justNElements(2)} ~ .teaser-wrap {
      flex: 0 0 50%;
      max-width: 50%;
    }
  `}

  ${b.lg`
    .teaser-wrap:first-child {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .teaser-wrap${G.justNElements(1)}{
      flex: 0 0 100%;
      max-width: 100%;
    }
  `}
`,_C=()=>M`
  ${b.md`
    .teaser-wrap:first-child {
      .title {
        font-size: 2.8rem;
      }
    }

    .teaser-wrap${G.justNElements(2)},
    .teaser-wrap${G.justNElements(2)} ~ .teaser-wrap {
      .title {
        font-size: 2.4rem;
      }
    }
  `}

  ${b.lg`
    .teaser-wrap:first-child {
      .title {
        font-size: 2.4rem;
      }
    }

    .teaser-wrap${G.justNElements(1)}{
      .title {
        font-size: 3.2rem;
      }
    }

    .teaser-wrap${G.justNElements(2)},
    .teaser-wrap${G.justNElements(2)} ~ .teaser-wrap {
      .title {
        font-size: 2.8rem;
      }
    }
  `}

    ${b.xl`
     .teaser-wrap${G.justNElements(1)}{
       .title {
        font-size: 3.6rem;
       }
    }

    .teaser-wrap${G.justNElements(2)},
    .teaser-wrap${G.justNElements(2)} ~ .teaser-wrap {
      .title {
        font-size: 3.2rem;
      }
    }
  `}
`,fU=({noImageSelector:e=dU}={})=>M`
  ${b.lg`
    .teaser-wrap${G.justNElements(1)}{
      ${e}{
        max-width: 50%;
        .title {
          font-size: 2.8rem;
        }
      }
    }
  `}

    ${b.xl`
     .teaser-wrap${G.justNElements(1)}{
       ${e} .title {
        font-size: 3.2rem;
      }
    }
  `}
`,CC=()=>M`
  ${_C()}
  ${fU()}

  ${b.lg`
    .teaser-wrap${G.justNElements(1)}{
      .teaser {
        flex-direction: row;
      }
      .teaser-image-wrap {
        max-width: 66.666666%;
      }
      .teaser-data-wrap {
        max-width: 33.333333%;
      }
    }
  `}
`,pU=()=>M`
  flex-direction: column;

  .teaser-wrap {
    max-width: 100%;
  }
`,Jn=(e="md")=>M`
  .col-12, .col-md-6, .col-lg-4{
    flex: initial;
  }

  ${b[e]`
    .teaser-wrap{
      display: flex;
      flex-direction: column;

      .teaser{
        flex-grow: 1;
        flex-direction: column;

        .teaser-data-wrap{
          flex-grow: 1;
          display: flex;
          flex-direction: column;

          .teaser-data {
            flex-grow: 1;
          }
        }
      }
    }
  `}
`,mU=()=>M`
  .teaser-wrap {
    .opinion-metadata {
      margin-top: 15px;
    }
  }
`,hU=()=>M`
  .teaser-data {
    flex-grow: 1;
  }

  ${b.lg`
    .author-image {
      margin-left: 50px;
    }
  `};

  ${b.xl`
    .author-image {
      margin-left: 62px;
    }
  `};
`,Df=(e="")=>M`
  .badge-above-md,
  .title-above-md {
    display: none;
  }
  .title-xs-sm {
    display: block;
    width: 100%;
  }

  .teaser-wrap${e} {
    .teaser-image-wrap{
      display: flex;
    }
    .teaser-image {
      width: 100%;
      max-width: 23%;
      margin-right: 15px;
    }
    .teaser-data-xs-sm {
      margin-top: 0;
    }
    .title-xs-sm {
      font-size: 1.8rem;
    }
  }
  .teaser-data-wrap:first-child .title-above-md {
    display: block;
  }
  .teaser-data-wrap:first-child .badge-above-md {
    display: inline-flex;
  }

  ${dr.sm`
    .teaser-wrap {
      .teaser {
        row-gap: 0;
      }
    }

    .teaser-data-xs-sm {
      margin-top: 15px;
    }
  `}

  ${b.sm`
    .teaser-wrap${e} {
      .teaser-image {
        max-width: 33.333333%;
      }

      .title-xs-sm {
        font-size: 2rem;
      }
    }
  `}

  ${b.md`
    .badge-above-md {
      display: inline-flex;
    }
    .title-above-md {
      display: block;
    }
    .badge-xs-sm,
    .title-xs-sm {
        display: none;
    }

    .teaser-wrap${e} {
      .teaser-image {
        max-width: 100%;
        margin-right: 0;
      }
    }
  `}
`,gU=()=>M`
  .teaser-wrap{
    .teaser {
      .teaser-data-wrap {
        display: flex;
        flex-direction: row;
      }

      .title + .opinion-metadata {
        margin-top: 15px;
      }

      .author-data {
        order: 1;
        flex-grow: 1;

        .author-link, .no-link {
          margin-top: 15px;
          display: inline-block;
        }
      }

      .author-image {
        order: 2;
        display: block;
        max-width: 120px;
        max-height: 120px;
        margin-left: 15px;
        width: 100%;
        height: auto;
      }

      ${iC}
    }
  }
`,Rr={bgColor:"--big-text-teaser-bg-color",sidesPadding:"--big-text-teaser-sides-padding",bottomPadding:"--big-text-teaser-bottom-padding",oneItemTeaserDataTopPadding:"--big-text-teaser-one-item-teaser-data-top-padding"},yU=`
  ${Rr.bgColor}: ${C.BLACK};
  ${Rr.sidesPadding}: 30px;
  ${Rr.bottomPadding}: 15px;
  ${Rr.oneItemTeaserDataTopPadding}: 15px;
`,AC=()=>M`
  .teaser-wrap {
    background-color: var(${Rr.bgColor});
    background-clip: content-box;

    .teaser-data-wrap {
      padding-left: var(${Rr.sidesPadding}, 15px);
      padding-right: var(${Rr.sidesPadding}, 15px);
      padding-bottom: var(${Rr.bottomPadding}, 0);
    }
  }
`,vU=()=>M`
  ${AC()}
  ${b.lg`
    && .teaser-wrap${G.justNElements(1)}{
      .teaser-data-wrap {
        padding-left: 15px;
        padding-top: var(${Rr.oneItemTeaserDataTopPadding}, 0);
      }
    }
  `}
`,LC=()=>M`
  ${b.md`
    .title {
      font-size: 2rem;
    }
  `};

  ${b.lg`
    .title {
      font-size: 2.4rem;
    }
  `};
`,xU=h(Zn)`
  ${Jn()}
  ${Df(G.notFirst)}
  ${V0()}
  ${CC()}
`,ud=A({name:"MoreOnTopic",fragment(){return _`fragment ${this.name} on AssociationsAspect {
      contentLinks {
        targetId
        targetType
        isInText
      }
      externalLinks {
        targetId: id
        modelType
        isInText
      }
      ...${dw.name}
      ...${pw.name}
      ...${fw.name}
    }
    ${dw.fragment()}
    ${pw.fragment()}
    ${fw.fragment()}
    `}}),SU=({className:e,content:t={}})=>{const{contentLinks:n=[],externalLinks:r=[]}=t,i=r.map(l=>({...l,targetType:l.modelType})),o=n.map(l=>({...l,target:l.target&&{...l.target,title:l.target.name}})),a=iM([...o,...i]);return se(a)?s.jsx(Jt,{className:e,headlineTranslation:"content_block_detail.more_on_topic.headline",headlineIsA:"h2",pageSectionId:"more-on-topic",children:s.jsx(pM,{dataArray:a,children:l=>s.jsx(xU,{children:l.map((c,u)=>lU({link:c,imageFormatConfig:u>0?Ka():void 0,key:c.targetId}))})})}):null},IC=`
  ${qn}
  ${aU}
  ${rU}
  ${eU}
  ${dM}
`,jC=h(SU)`
`,mw=6,wU="content_block.general.show_more",bU="teaser",kU=(e,t,n)=>{const[r,i]=x.useState(e.slice(0,n));return x.useEffect(()=>{i(e.slice(0,n))},[e.length,n]),[r,(a=t)=>i(e.slice(0,r.length+a))]},EU=({dataArray:e=[],className:t,children:n,stepMoreAmount:r=mw,initialListCount:i=mw,showMoreBtnTranslation:o=wU,focusContainerClass:a=bU})=>{const[l,c]=kU(e,r,i),[u,d]=x.useState(!1),f=x.useRef(null),p=Tf(l.length),m=x.useCallback(S=>{cf(S)&&u&&(S.preventDefault(),q2({listElement:f==null?void 0:f.current,indexToFocus:p,listEntryClass:a})),S.key===Sn.TAB&&d(!1)},[u,p]);return x.useEffect(()=>(u&&O.document.addEventListener("keydown",m),()=>O.document.removeEventListener("keydown",m)),[u]),s.jsxs("div",{ref:f,className:t,children:[se(l)&&n(l),e.length>l.length&&s.jsx(Di,{children:s.jsx(bo,{className:"show-more-button",translation:o,onClick:()=>{c(),d(!0)}})})]})},Nf=bo.darkStyles,$U=M`
  .show-more-button {
    margin-top: 30px;
  }

  ${b.sm`
    .show-more-button {
      margin-left: auto;
      margin-right: auto;
    }
  `}
`,Ja=h(EU)`
  ${$U}
`,TU=h(Zn)`
  ${Jn()}
  ${mU()}
  ${V0()}
  ${_C()}
`,_U=A({name:"HeadlineOpinionContentTeaser",fragment(){return _`fragment ${this.name} on Content {
      ... on UrlAspect {
        namedUrl
      }
      ... on NamedAspect {
        title
      }
      ...${U.contentStatusTeaserBadgeFragment.name}
      ...${U.linkedTitleFragment.name}
      ...${U.teaserFooterFragment.name}
      ...${ld.name}
    }
    ${U.contentStatusTeaserBadgeFragment.fragment()}
    ${U.linkedTitleFragment.fragment()}
    ${U.teaserFooterFragment.fragment()}
    ${ld.fragment()}
    `}}),CU=({content:e={},className:t,titleIsA:n})=>s.jsx(un,{className:H(t,"row"),content:e,hideOpinion:!0,children:s.jsx(q.MainContentArea,{children:s.jsxs(q.Data,{children:[s.jsx(q.ContentStatusTeaserBadge,{}),s.jsx(q.LinkedTitle,{isA:n}),s.jsx(nC,{className:"opinion-metadata"})]})})}),AU=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkTeaserDataStyles}
  ${tC}
`,LU=h(CU)``,hw=_U,IU=e=>e.map(t=>s.jsx(LU,{content:t,titleIsA:"h3"},t.id)),jU=AU,gw=3,yw=A({name:"MoreFromColumn",fragment(){return _`fragment ${this.name} on AssociationsAspect {
      opinionSeries {
        genre
        moreArticlesFromSeries: moreContentsFromSeries(pageId: $id, amount: 6, types:[ARTICLE]) {
          ... on ModelAspect {
            id
          }
          ...${hw.name}
        }
      }
    }
    ${hw.fragment()}
    `}}),OU=({content:e,className:t})=>{const{moreArticlesFromSeries:n}=J7(e)||[];return se(n)?s.jsx(Jt,{className:t,headlineIsA:"h2",headlineTranslation:"content_block_detail.more_from_this_column.headline",pageSectionId:"more-from-column",children:s.jsx(Ja,{dataArray:n,initialListCount:gw,stepMoreAmount:gw,showMoreBtnTranslation:"content_block_detail.more_from_this_column.show_more",children:(...r)=>s.jsx(TU,{children:IU(...r)})})}):null},RU=`
  ${qn}
  ${Nf}
  ${jU}
`,DU=h(OU)``,G0=A({name:"MainImageWithCaption",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        mainContentImageLink {
            targetId
            additionalInformation
            description
            target {
            ...on Image {
                id
                licenserSupplement
                imageType
            }
            ...${fr.name}
            }
        }
        }
        ${fr.fragment()}
      `}}),NU=({isA:e=we,className:t,licenserSupplement:n})=>{const r=z("general.image.copyright_prefix");if(!n)return null;const i=e;return s.jsxs(i,{isA:"small",className:t,children:[r," ",n]})},H0=we.darkStyles,Q0=h(NU)`
  font-size: 1rem;
`,PU=e=>s.jsx(Q0,{...e,isA:Ql}),FU=({className:e})=>s.jsx(VB,{className:e,translationKey:"content_block.topic_header_atp.topic_label"}),OC=h(FU)`
`,q0=M`background-image: linear-gradient(to bottom,rgba(0,0,0,0), ${Wn(C.DARK_BLUE_GREY_01,.9)} 90%);`,Pf=M`background-color: ${Wn(C.DARK_BLUE_GREY_01,.9)};`,RC=M`
  position: relative;
  &:before {
    content: "";
    width: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    position: absolute;
  }
`,Yh=G0,MU=({content:e,className:t,showBadge:n=!1,titleSlotFn:r=Te,preload:i})=>{const o=b0(e),a=!!o,l=r({hasImage:a}),c=i?Yl:ql;return s.jsxs("div",{className:t,children:[a&&s.jsxs(s.Fragment,{children:[s.jsx(c,{image:e.mainContentImageLink.target,className:"topic-picture",alt:o.alt,formatConfig:M9}),s.jsx("div",{className:"topic-gradient"}),s.jsx("div",{className:"topic-background"}),s.jsx(Q0,{className:"copyright",licenserSupplement:o.licenserSupplement})]}),s.jsx("div",{className:"topic-title",children:l}),n&&s.jsx(OC,{className:"topic-badge"})]})},DC=`
  .copyright {
    ${H0}
  }
`,NC=h(MU)`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-template-columns: 100%;

  & > * {
    grid-column: 1;
  }

  .topic-picture {
    grid-row: 1 / 4;
    z-index: 1;
  }

  .topic-gradient {
    ${q0}
    grid-row: 2;
    z-index: 2;
  }

  .topic-background {
    ${Pf}
    grid-row: 3;
    z-index: 2;
  }

  .copyright {
    grid-row: 3;
    z-index: 3;
    align-self: end;
    justify-self: end;

    margin-right: 15px;
    margin-bottom: 5px;
  }

  .topic-title {
    grid-row: 2;
    z-index: 3;

    padding-left: ${oe.xs}px;
    padding-right: ${oe.xs}px;
  }

  .topic-badge {
    grid-row: 3;
    z-index: 3;
    justify-self: center;
    margin-bottom: 20px;
  }

  ${b.sm`
    .topic-title {
      padding-left: ${oe.sm}px;
      padding-right: ${oe.sm}px;
    }
  `}

  ${b.md`
    .topic-title {
      padding-left: ${oe.md}px;
      padding-right: ${oe.md}px;
    }

    .topic-badge {
      margin-bottom: 30px;
    }
  `}

  ${b.lg`
    .topic-title {
      padding-left: ${oe.lg}px;
      padding-right: ${oe.lg}px;
    }

    .topic-badge {
      margin-bottom: 40px;
    }
  `}
`,BU=e=>s.jsx(yo,{isA:"h3",...e}),PC=yo.darkStyles,FC=h(BU)`
  font-size: 2rem;
  word-wrap: break-word;
  margin-bottom: 0;
  text-align: center;

  ${b.md`
    font-size: 2.6rem;
  `}

  ${b.lg`
    font-size: 3.2rem;
  `}
`,UU=e=>s.jsx(zl,{isA:"p",...e}),Pi=zl.darkStyles,Wr=h(UU)`
  font-size: 1.6rem;
  margin-bottom: 0;

  ${b.md`
    font-size: 1.8rem;
  `}
`,zU=Wr,MC=Pi,BC=h(zU)`
  text-align: center;
  margin-top: 20px;

  ${b.lg`
    margin-top:30px;
    padding-right: 80px;
    padding-left: 80px;
  `}

  ${b.xl`
    padding-right: 95px;
    padding-left: 95px;
  `}
`,WU=({className:e})=>{const t=Xn(),{content:n}=en(),{title:r}=n,i=t.isOnDetailPage?"h2":"h3",o=n.isOpinion?n0:Oi;return s.jsx(i,{className:e,children:s.jsxs(o,{to:n.namedUrl,title:r,skipTitleForInternal:!0,children:[s.jsx(_f,{contentType:n.__typename}),r]})})},Y0=M`
  margin-top: 47px;

  ${b.sm`
    margin-top: 60px;
  `}

  ${b.md`
    margin-top: 70px;
  `}

  ${b.lg`
    margin-top: 85px;
  `}

  ${b.xl`
    margin-top: 94px;
  `}
`,VU=h(WU)`
    ${Oi.darkStyles}

    word-break: break-word;
    margin-bottom: 5px;
    font-size: 2.4rem;
    ${Rl}

    ${b.sm`
      font-size: 3rem;
    `}

    ${b.md`
      font-size: 3.8rem;
    `}

    ${b.lg`
      font-size: 4.6rem;
    `}
`,Na=Yh,GU=({content:e,className:t,topicTitleSelector:n,topicTeaserSelector:r,aboutTopicTitleTranslation:i})=>s.jsxs("div",{className:t,children:[s.jsx(NC,{className:"image-with-title",content:e,titleSlotFn:()=>s.jsx(FC,{className:"custom-topic-title",title:i,children:n(e)})}),s.jsx(BC,{children:r(e)})]}),dd={gradient:"--topic-gradient-color",background:"--topic-background-color"},UC=`
  ${dd.gradient}: linear-gradient(to bottom, ${Wn(C.DARK_BLUE_GREY_01,0)}, ${Wn(C.DARK_BLUE_GREY_01,.85)} 90%);
  ${dd.background}: ${Wn(C.DARK_BLUE_GREY_01,.85)};
  ${DC}
  ${PC}
  ${MC}
`,K0=h(GU)`

  .image-with-title {
    margin-left: -${oe.xs}px;
    margin-right: -${oe.xs}px;

    .topic-gradient {
      background-image: var(${dd.gradient}, linear-gradient(to bottom, ${Wn(C.BLUE_GREY_02,0)}, ${Wn(C.BLUE_GREY_02,.85)} 90%));
    }

    .topic-background {
      background-color: var(${dd.background}, ${Wn(C.BLUE_GREY_02,.85)});
    }

    .custom-topic-title {
      ${Y0}
    }
    .topic-title:first-child .custom-topic-title {
      margin-top: 0;
    }
  }



  ${b.sm`
    .image-with-title {
      margin-left: -${oe.sm}px;
      margin-right: -${oe.sm}px;
    }
  `}

  ${b.md`
    .image-with-title {
      margin-left: -${oe.md}px;
      margin-right: -${oe.md}px;

      .custom-topic-title {
        margin-bottom: 10px;
      }
    }

  `}

  ${b.lg`
    .image-with-title {
      margin-left: 0;
      margin-right: 0;
    }
  `}
`,vw=A({name:"ColumnInfo",fragment(){return _`fragment ${this.name} on Article {
        ... on MetadataAspect {
          genre
        }
        ... on OpinionAspect {
          isOpinion
        }
        ... on AssociationsAspect {
          opinionSeries {
            genre
            name
            teaser
            autoDelivery
            ...${Na.name}
          }
        }
      }
      ${Na.fragment()}
    `}}),HU=({className:e,content:t})=>{const n=e6(t),r=z({key:"content_block_detail.column_info.headline.label",parameters:{seriesTitle:n==null?void 0:n.name}});return!t.isOpinion||!n?null:s.jsx(Jt,{className:e,headlineIsA:"h2",headlineTranslation:"content_block_detail.column_info.headline.content_block",children:s.jsx(K0,{content:n,topicTitleSelector:i=>i.name,topicTeaserSelector:i=>i.teaser,aboutTopicTitleTranslation:r})})},QU=`
  ${qn}
  ${UC}
`,qU=h(HU)``,YU=({className:e,...t})=>s.jsx("div",{className:e,...t}),X0=h(YU)`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
`,KU=({bottomElementFn:e=Te,children:t,...n})=>{const r=e();return s.jsxs(Jt,{...n,children:[t,r&&s.jsx(X0,{"data-tracking-name":"list-bottom-container",children:r})]})},Xl=qn,_r=h(KU)``,Dt=A({name:"LinkWithArrow",fragment(){return _`fragment ${this.name} on Content {
        ... on UrlAspect {
          namedUrl
        }
        ... on NamedAspect {
          title
        }
      }
    `}}),XU=({content:e,className:t,linkTranslation:n,...r})=>{const{isRtl:i}=_n(),o=i?Ju:ed,a=z(n);return s.jsxs(He,{className:t,to:e.namedUrl,skipTitleForInternal:!0,title:e.title,...r,children:[a,s.jsx(o,{className:"arrow-icon"})]})},zC=He.darkStyles,Fi=h(XU)`
    display: flex;
    font-size: 1.4rem;
    align-items: end;
    column-gap: 5px;

    .arrow-icon {
      margin-inline-end: -3px;
      height: 12px;
      width: 12px;
      path {
        stroke-width: 3;
        stroke: currentColor;
     }
    }
`,xw=A({name:"ProgramInfo",fragment(){return _`fragment ${this.name} on Content {
      ... on PlaybackResourceAspect {
        containsMultipleContributions
      }
      ... on AssociationsAspect {
        unifiedPrograms(amount: 1) {
          title
          teaser
          name
          ...${Dt.name}
          ...${Na.name}
        }
      }
    }
    ${Dt.fragment()}
    ${Na.fragment()}
    `}}),ZU=e=>()=>s.jsx(Fi,{content:e,linkTranslation:{key:"content_block_detail.program_info.headline.program_link",parameters:{programName:e.name}}}),JU=({className:e,content:t})=>{const n=t.unifiedPrograms[0],r=z({key:"content_block_detail.program_info.headline.label",parameters:{programTitle:n==null?void 0:n.title}});return!t.containsMultipleContributions||!se(t.unifiedPrograms)?null:s.jsx(_r,{className:e,headlineIsA:"h2",headlineTranslation:"content_block_detail.program_info.headline.content_block",bottomElementFn:ZU(n),children:s.jsx(K0,{content:n,topicTitleSelector:i=>i.title,topicTeaserSelector:i=>i.teaser,aboutTopicTitleTranslation:r})})},ez=`
  ${Xl}
  ${UC}
`,tz=h(JU)``,Zl=h(Zn)`
  ${Jn()}
  ${Kl()}
  ${Rf()}
`,nz=h(Zn)`
  ${Jn()}
`,uo=A({name:"BigImageTextContentTeaser",fragment(){return _`fragment ${this.name} on Content {
      ... on UrlAspect {
        namedUrl
      }
      ... on NamedAspect {
        title
      }
      ...on TextualAspect {
        shortTeaser
        teaser
      }
      ...${U.teaserDataFragment.name}
      ...${U.contentStatusTeaserBadgeFragment.name}
      ...${U.imageWrapFragment.name}
      ...${U.linkedTitleFragment.name}
    }
    ${U.teaserDataFragment.fragment()}
    ${U.contentStatusTeaserBadgeFragment.fragment()}
    ${U.imageWrapFragment.fragment()}
    ${U.linkedTitleFragment.fragment()}
    `}}),rz=({content:e={},className:t,titleIsA:n,hideDescription:r,hideKicker:i,hideTimeIndicator:o,isHidden:a})=>s.jsxs(un,{className:H(t,"row"),content:e,isHidden:a,hideDescription:r,hideKicker:i,hideTimeIndicator:o,children:[s.jsx(q.LinkedImage,{}),s.jsx(q.MainContentArea,{children:s.jsxs(q.Data,{children:[s.jsx(q.ContentStatusTeaserBadge,{}),s.jsx(q.LinkedTitle,{isA:n}),s.jsx(q.LinkedDescription,{})]})})]}),Ff=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkLinkedDescriptionStyles}
  ${$e.darkTeaserDataStyles}
`,Jl=h(rz)``,Sw=uo,iz=e=>e.map(t=>s.jsx(Jl,{content:t,titleIsA:"h3"},t.id)),oz=Ff,az=12,ww=A({name:"DossierContentItems",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        dossierContents {
          ... on ModelAspect {
            id
          }
          ...${Sw.name}
        }
      }
      ${Sw.fragment()}
    `}}),sz=({contents:e=[],children:t})=>s.jsx(Zl,{children:t(e)}),lz=({contents:e=[],children:t,initialListCount:n})=>s.jsx(Ja,{dataArray:e,showMoreBtnTranslation:"content_block_detail.dossier_content_items.show_more",initialListCount:n,children:(...r)=>s.jsx(nz,{children:t(...r)})}),cz=({content:e,className:t,initialListCount:n=az})=>{const{dossierContents:r}=e;if(!se(r))return null;const o=r.length>n?lz:sz;return s.jsx(_r,{headlineTranslation:"content_block_detail.dossier_content_items.headline",headlineIsA:"h2",className:t,pageSectionId:"dossier-content-items",children:s.jsx(o,{contents:r,initialListCount:n,children:iz})})},uz=`
  ${Xl}
  ${Nf}
  ${oz}
`,dz=h(cz)``,bw=A({name:"AutoTopicLink",fragment(){return _`fragment ${this.name} on AutoTopic {
      namedUrl
      name
    }
    `}}),fz=({autoTopic:e,className:t})=>s.jsx(br,{isA:wr,to:e.namedUrl,title:e.name,skipTitleForInternal:!0,className:t,children:e.name}),Z0=h(fz)``;Z0.darkStyles=br.darkStyles;const kw=A({name:"RelatedTopics",fragment(){return _`fragment ${this.name} on RelatedContentAspect {
          relatedAutoTopics {
            id
            ...${bw.name}
          }
        }
        ${bw.fragment()}
    `}}),pz=({content:e,className:t})=>se(e.relatedAutoTopics)?s.jsx(Jt,{className:t,headlineTranslation:"content_block_detail.related_topics.headline",headlineIsA:"h2",pageSectionId:"related-topics",children:s.jsx(Di,{align:"start",isA:"aside","data-tracking-name":"related-topics",children:e.relatedAutoTopics.map(n=>s.jsx(Z0,{autoTopic:n},n.id))})}):null,mz=`
  ${qn}
  ${Z0.darkStyles}
`,hz=h(pz)``,gz=h(Zn)`
  ${Jn()}
  ${V0()}
  ${CC()}
`,Ew=uo,yz=e=>e.map(t=>s.jsx(Jl,{content:t,titleIsA:"h3"},t.id)),vz=Ff,Vr=A({name:"ExpandableFocusTopThreeUnifiedBigImageText",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${Ew.name}
      }
      ${Ew.fragment()}
    `}}),xz=3,Sz=({className:e,contents:t,pageSectionId:n,headlineTranslation:r,showMoreBtnTranslation:i,theme:o,initialTeaserCount:a=xz})=>se(t)?s.jsx(Jt,{className:e,theme:o,headlineIsA:"h2",headlineTranslation:r,pageSectionId:n,children:s.jsx(Ja,{dataArray:t,initialListCount:a,showMoreBtnTranslation:i,children:(...l)=>s.jsx(gz,{children:yz(...l)})})}):null,J0=`
  ${qn}
  ${vz}
  ${Nf}
`,ec=h(Sz)``,$w=A({name:"MoreFromProgram",fragment(){return _`fragment ${this.name} on Content {
      ... on PlaybackResourceAspect {
        containsMultipleContributions
      }
      ... on AssociationsAspect {
        unifiedPrograms(amount: 1) {
          moreContentsFromUnifiedProgram(pageId: $id, amount: 15, types: [VIDEO, AUDIO], fullEpisodes: false) {
            ...${Vr.name}
          }
        }
      }
    }
    ${Vr.fragment()}
    `}}),wz=({content:e,className:t})=>{if(!e.containsMultipleContributions)return null;const{moreContentsFromUnifiedProgram:n}=e.unifiedPrograms[0]||{};return s.jsx(ec,{className:t,contents:n,headlineTranslation:"content_block_detail.more_from_this_program.headline",showMoreBtnTranslation:"content_block_detail.more_from_this_program.show_more",pageSectionId:"more-from-program"})},bz=h(wz)`
  ${li.alternativeBgColor}: ${C.DARK_BLUE_GREY_02};
  ${li.basicBgColor}: ${C.DARK_BLUE_GREY_02};
  ${J0};
`,Tw=A({name:"RelatedVideosKeywordRegion",fragment(){return _`fragment ${this.name} on Video {
      moreAvContentsByKeywordAndRegion {
        ...${Vr.name}
      }
      ... on AssociationsAspect {
        firstRegionArray: regions(amount: 1) {
          alignedName
        }
      }
    }
    ${Vr.fragment()}
  `}}),kz=({content:e,className:t})=>{const{moreAvContentsByKeywordAndRegion:n}=e,[r]=e.firstRegionArray,i={key:"content_block_detail.related_videos_keyword_country.headline",parameters:{firstRegionalReference:r==null?void 0:r.alignedName}};return s.jsx(ec,{className:t,contents:n,headlineTranslation:i,showMoreBtnTranslation:"content_block_detail.related_videos_keyword_country.show_more",pageSectionId:"related-content-by-keyword-region"})},Ez=J0,$z=h(kz)``,_w=A({name:"RelatedVideosThematicFocusRegion",fragment(){return _`fragment ${this.name} on Video {
      moreAvContentsByThematicFocusAndRegion {
        ...${Vr.name}
      }
      ... on AssociationsAspect {
        thematicFocusCategory {
          name
        }
        level1GeoRegion {
          alignedName
        }
      }
    }
    ${Vr.fragment()}
  `}}),Tz=({content:e,className:t})=>{var a,l;const{moreAvContentsByThematicFocusAndRegion:n}=e,r=(a=e.thematicFocusCategory)==null?void 0:a.name;if(!r)return null;const i=(l=e.level1GeoRegion)==null?void 0:l.alignedName,o={key:"content_block_detail.related_videos_thematic_focus_region.headline",parameters:{firstThematicFocus:r,regionOfFirstRegionalReference:i}};return s.jsx(ec,{className:t,contents:n,headlineTranslation:o,showMoreBtnTranslation:"content_block_detail.related_videos_thematic_focus_region.show_more",pageSectionId:"related-content-by-thematic-focus-region"})},_z=h(Tz)``,Cw=A({name:"RelatedVideosThematicFocusGlobal",fragment(){return _`fragment ${this.name} on Video {
      moreAvContentsByThematicFocusAndGlobal {
        ...${Vr.name}
      }
      ... on AssociationsAspect {
        thematicFocusCategory {
          name
        }
      }
    }
    ${Vr.fragment()}
  `}}),Cz=({content:e,className:t})=>{var o;const{moreAvContentsByThematicFocusAndGlobal:n}=e,r=(o=e.thematicFocusCategory)==null?void 0:o.name;if(!r)return null;const i={key:"content_block_detail.related_videos_thematic_focus_global.headline",parameters:{firstThematicFocus:r}};return s.jsx(ec,{className:t,contents:n,headlineTranslation:i,showMoreBtnTranslation:"content_block_detail.related_videos_thematic_focus_global.show_more",pageSectionId:"related-content-by-thematic-focus-global"})},Az=h(Cz)``,Aw=A({name:"RecommendedZone",fragment(){return _`fragment ${this.name} on Content {
      ... on MetadataAspect {
        genre
      }
      ...${ud.name}
      ...${yw.name}
      ...${kw.name}
      ...${xw.name}
      ...${$w.name}
      ...${ww.name}
      ...${vw.name}
      ...${Tw.name}
      ...${_w.name}
      ...${Cw.name}
    }
    ${ud.fragment()}
    ${yw.fragment()}
    ${kw.fragment()}
    ${xw.fragment()}
    ${$w.fragment()}
    ${ww.fragment()}
    ${vw.fragment()}
    ${Tw.fragment()}
    ${_w.fragment()}
    ${Cw.fragment()}
  `}}),Lz=({className:e,content:t})=>s.jsxs(s.Fragment,{children:[CS(t)&&s.jsx(dz,{className:e,content:t}),!CS(t)&&!l0(t)&&s.jsx(jC,{className:e,content:t}),i0(t)&&s.jsxs(s.Fragment,{children:[s.jsx(DU,{className:e,content:t}),s.jsx(qU,{className:e,content:t})]}),s.jsx($z,{content:t,className:e}),s.jsx(_z,{content:t,className:e}),s.jsx(Az,{content:t,className:e}),s.jsx(bz,{className:e,content:t}),s.jsx(tz,{className:e,content:t}),s.jsx(hz,{className:e,content:t})]}),Iz=`
  ${uz}
  ${IC}
  ${RU}
  ${QU}
  ${Ez}
  ${ez}
  ${mz}
`,jz=h(Lz)`
`,{TopStoryZone:ev}=ne(()=>J(()=>import("./TopStoryZone-bad1794c.js"),[]),{fallback:s.jsx(d9,{})}),Oz=({children:e,HeroCmp:t=x.Fragment,heroCmpProps:n,className:r})=>s.jsx("article",{className:r,children:s.jsx(t,{...n,children:s.jsx(YM,{className:"content-area",children:e})})}),tc=M`
  width: 1110px;
  margin-left: auto;
  margin-right: auto;
`,es=h(Oz)`
  overflow-x: hidden;

  ${b.xl`
    .content-area {
      ${tc}
    }
  `}
`,Rz=228556409,zt=Object.freeze({billboardMobile:{width:320,height:100},billboard:{width:970,height:250},premiumBillboard:{width:1540,height:250},leaderBoardSuper:{width:970,height:90},leaderBoard:{width:728,height:90},rectangleMedium:{width:300,height:250},halfPageAd:{width:300,height:600}}),tv=(e,{isCompact:t=!1}={})=>[{minWidth:B.min.xs,maxWidth:B.max.sm,slotSize:t?zt.billboardMobile:zt.rectangleMedium,adUnitCode:`DW_M_${e}`},{minWidth:B.min.md,maxWidth:B.max.md,slotSize:zt.leaderBoard,adUnitCode:`DW_T_${e}`},{minWidth:B.min.lg,maxWidth:B.max.wide_xl,slotSize:zt.leaderBoardSuper,adUnitCode:`DW_D_${e}`}],Eo=e=>[{minWidth:B.min.xs,maxWidth:B.max.sm,slotSize:[zt.rectangleMedium,zt.billboardMobile],adUnitCode:`DW_M_${e}`},{minWidth:B.min.md,maxWidth:B.max.md,slotSize:[zt.leaderBoard,zt.rectangleMedium,zt.billboardMobile],adUnitCode:`DW_T_${e}`},{minWidth:B.min.lg,maxWidth:B.max.wide_xl,slotSize:[zt.leaderBoard,zt.billboard],adUnitCode:`DW_D_${e}`}],WC=e=>[{minWidth:B.min.lg,maxWidth:B.max.xl,slotSize:zt.billboard,adUnitCode:`DW_D_${e}`},{minWidth:B.min.wide_xl,maxWidth:B.max.wide_xl,slotSize:[zt.premiumBillboard,zt.billboard],adUnitCode:`DW_W_${e}`}],Dz=WC("Article_Premium"),VC=tv("Article_Top"),GC=Eo("Article_Content_Bottom"),eee=Eo("Article_Bottom"),nv=WC("Overview_Premium"),Nz=tv("Overview_Top",{isCompact:!0}),Pz=Eo("Overview_Top_Stories"),Fz=Eo("Overview_Opinion"),Mz=Eo("Overview_Panorama"),rv=tv("Media_Top"),tee=Eo("Media_Bottom"),Bz=({className:e,children:t})=>t?s.jsx(Ft,{isA:"h1",className:e,children:t}):null,iv=Ft.darkStyles,ov=h(Bz)`
    font-size: 3rem;
    margin-bottom: 7px;
    word-wrap: break-word;

    ${b.md`
      font-size:3.8rem;
    `}

    ${b.lg`
      font-size: 4.6rem;
    `}
`,Uz=({className:e})=>s.jsx("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20",children:s.jsx("g",{id:"sm-twitter_padded-a",stroke:"none",strokeWidth:"1",children:s.jsx("g",{id:"Group",transform:"translate(1.000000, 1.000000)",children:s.jsx("path",{d:"M6.00606088,0 L6.25248563,0.369823917 L17.1123603,16.6678677 L18,18 L11.9783365,18 L11.7319488,17.62975 L0.88620143,1.33170626 L0,0 L6.00606088,0 Z M5.13384269,1.70195626 L3.13622784,1.70195626 L12.8499575,16.2976495 L14.8599799,16.2976495 L5.13384269,1.70195626 Z M7.513,9.038 L8.803,10.97 L2.909,18.0001438 L0,18.0001438 L7.513,9.038 Z M18,0 L10.186,9.321 L8.908,7.375 L15.091,0 L18,0 Z",id:"Combined-Shape"})})})}),zz=h(Uz)`
`,Wz=({twitterHandle:e,className:t})=>s.jsxs(He,{to:`https://twitter.com/${e}`,title:`twitter — ${e}`,className:t,children:[s.jsx(zz,{className:"twitter-icon"}),e]}),HC=He.darkStyles,QC=h(Wz)`
  display: flex;
  align-items: center;
  letter-spacing: 0.04rem;

  .twitter-icon {
    height: 20px;
    width: 20px;
  }
`,fd=A({name:"AuthorName",fragment(){return _`fragment ${this.name} on Person {
          twitterHandle
          shortProfile
          ...${sd.name}
        }
        ${sd.fragment()}
    `}}),Vz=h(Hr)`
  letter-spacing: 0.04rem;
`,qC=({withExtraInfo:e=!0,withShortProfile:t=!1,withTwitterLink:n=!1,person:r,additionalInformation:i})=>s.jsxs(s.Fragment,{children:[s.jsx(j0,{className:"author",person:r}),e&&i&&s.jsx(Hr,{className:"extra-info",children:` ${i}`}),t&&s.jsx(Vz,{children:` ${r==null?void 0:r.shortProfile}`}),n&&(r==null?void 0:r.twitterHandle)&&s.jsx(QC,{twitterHandle:r==null?void 0:r.twitterHandle})]}),YC=`
  ${I0}
  ${Hr.darkStyles}
  ${HC}
`,Lw=A({name:"AuthorsLine",fragment(){return _`fragment ${this.name} on AssociationsAspect {
      personAssociations: contentAssociations(targetTypes: PERSON) {
        targetId
        additionalInformation
      }
      persons {
          id
          ...${fd.name}
      }
    }
    ${fd.fragment()}
    `}}),Gz=e=>e===0,Hz=({content:e,className:t})=>se(e.persons)?s.jsx("div",{className:t,children:e.persons.map((n,r)=>s.jsxs("span",{children:[!Gz(r)&&s.jsx(Hr,{className:"separator",children:" | "}),s.jsx(qC,{person:n,additionalInformation:e.personAssociations.find(i=>n.id===i.targetId).additionalInformation})]},n.id))}):null,Qz=`
  ${Hr.darkStyles}
  ${YC}
`,qz=h(Hz)``,Iw=A({name:"LegacyAuthor",fragment(){return _`fragment ${this.name} on DeliveryAspect {
          legacyAuthor
        }
    `}}),Yz=({fullName:e,className:t})=>s.jsx(j0,{className:t,person:{fullName:e,autoDelivery:0}}),Kz=I0,Xz=h(Yz)``,Ti=A({name:"AuthorDetails",fragment(){return _`fragment ${this.name} on Content {
            ...${Lw.name}
            ...${Iw.name}
        }
        ${Lw.fragment()}
        ${Iw.fragment()}
    `}}),Zz=({content:e,className:t})=>{const n=se(e.persons);return!e.legacyAuthor&&!n?null:n?s.jsx(qz,{content:e,className:t}):s.jsx(Xz,{fullName:e.legacyAuthor,className:t})},Mf=`
  ${Qz}
  ${Kz}
`,Bf=h(Zz)`
  font-size: 1.3rem;
  letter-spacing: 0.04rem;
`,Jz=({className:e})=>s.jsx("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 144 144",children:s.jsxs("g",{fill:"none",fillRule:"evenodd",children:[s.jsx("mask",{id:"b",fill:"#fff",children:s.jsx("path",{id:"a",d:"M80 82c-.008 4.389-3.614 8-8 8-4.39 0-8.008-3.611-8-8 .005-2.915 2-5.403 4-6.786V50h8v25.22c2.332 1.384 4.005 3.87 4 6.78zm40 0c0 26.467-21.533 48-48 48s-48-21.533-48-48c0-25.119 19.399-45.959 44-48v-8h-4s-12-4-16-8v-4h48v4c-4 4-16 8-16 8h-4v8c24.601 2.041 44 22.881 44 48zm-8 0c0-22.056-17.944-40-40-40S32 59.944 32 82s17.944 40 40 40 40-17.944 40-40z"})}),s.jsx("path",{id:"a",fill:"#262624",fillRule:"nonzero",d:"M80 82c-.008 4.389-3.614 8-8 8-4.39 0-8.008-3.611-8-8 .005-2.915 2-5.403 4-6.786V50h8v25.22c2.332 1.384 4.005 3.87 4 6.78zm40 0c0 26.467-21.533 48-48 48s-48-21.533-48-48c0-25.119 19.399-45.959 44-48v-8h-4s-12-4-16-8v-4h48v4c-4 4-16 8-16 8h-4v8c24.601 2.041 44 22.881 44 48zm-8 0c0-22.056-17.944-40-40-40S32 59.944 32 82s17.944 40 40 40 40-17.944 40-40z"}),s.jsx("g",{fill:"#7f8891",mask:"url(#b)",children:s.jsx("path",{d:"M0 0h144v144.664H0z"})})]})}),eW=h(Jz)`
`,pr=A({name:"TimeArea",fragment(){return _`fragment ${this.name} on DeliveryAspect {
            contentDate
            localizedContentDate
            localizedContentDateSr
            firstPublicationDate
            localizedFirstPublicationDate
            localizedFirstPublicationDateSr
            contentDateMode
        }
    `}}),tW=({content:{contentDate:e,localizedContentDate:t,localizedContentDateSr:n,additionalInformation:r,contentDateMode:i,firstPublicationDate:o,localizedFirstPublicationDate:a,localizedFirstPublicationDateSr:l},isA:c=we,className:u})=>{if(!i||i==="NO_DATE")return null;const{publicationTimeIndicator:d,lastUpdateTimeIndicator:f}=nW({localizedFirstPublicationDate:a,localizedFirstPublicationDateSr:l,contentDate:e,localizedContentDate:t,localizedContentDateSr:n,additionalInformation:r,contentDateMode:i,firstPublicationDate:o,isA:c}),p=c;return s.jsxs(p,{className:u,children:[d,f,r&&s.jsxs("span",{className:"read-time",children:[s.jsx("span",{className:"clock-icon",children:s.jsx(eW,{})}),s.jsx("span",{children:r})]})]})},Yp=({date:e,localizedDate:t,...n})=>!e||!t?null:s.jsx(eC,{date:e,localizedDate:t,...n}),nW=({localizedFirstPublicationDate:e,localizedFirstPublicationDateSr:t,contentDate:n,localizedContentDate:r,localizedContentDateSr:i,contentDateMode:o,firstPublicationDate:a,isA:l})=>{if(o==="FIRST_AND_LAST_PUBLICATION_DATE"&&n>a){const u=Yp({date:a,localizedDate:e,localizedDateSr:t,className:"publication",label:"component_detail.content_detail.publication_date_label",isA:l}),d=Yp({date:n,localizedDate:r,localizedDateSr:i,className:"last-update",label:"component_detail.content_detail.lastUpdate_date_label",isA:l});return{publicationTimeIndicator:u,lastUpdateTimeIndicator:d}}return{publicationTimeIndicator:Yp({date:n,localizedDate:r,localizedDateSr:i,className:"publication",isA:l}),lastUpdateTimeIndicator:null}},Uf=we.darkStyles,nc=h(tW)`
    font-size: 1.3rem;
    letter-spacing: 0.04rem;

    & > *${G.notLast} {
      &:after {
        content: '\u00A0|\u00A0';
      }
    }

    .publication, .last-update, .read-time {
      white-space: nowrap;
      display: inline-block;
    }

    .clock-icon {
      height: 20px;
      width: 20px;
      vertical-align: text-bottom;
      display: inline-block;
      margin-left: -5px;

      svg path {
        fill: currentColor;
      }
    }
`,av=e=>s.jsx(nc,{isA:p0,...e});av.darkStyles=p0.darkStyles;const rW=({className:e,"aria-hidden":t,dataTrackingName:n,children:r})=>s.jsx(we,{isA:"div",className:e,"aria-hidden":t,"data-tracking-name":n,children:r}),KC=we.darkStyles,XC=h(rW)`
  font-size: 1.5rem;
  letter-spacing: 0.12rem;
  text-transform: uppercase;

  ${b.lg`
    font-size: 1.6rem;
    letter-spacing: 0.17rem;
  `}
`,$n=A({name:"ContentDetailKicker",fragment(){return _`fragment ${this.name} on AssociationsAspect {
          thematicFocusCategory {
            name
            correspondingContent {
              ... on UrlAspect {
                namedUrl
              }
            }
          }
          firstRegionArray: regions(amount: 1) {
            alignedName
            correspondingContent {
              ... on UrlAspect {
                namedUrl
              }
            }
          }
        }
    `}}),jw=({url:e,text:t,tabIndex:n=0})=>t?e?s.jsx(He,{to:e,title:t,skipTitleForInternal:!0,tabIndex:n,children:t}):t:null,iW=({content:e,className:t,tabIndex:n,"aria-hidden":r})=>{var l,c,u,d;const i=(l=e.thematicFocusCategory)==null?void 0:l.name,[o]=e.firstRegionArray,a=o==null?void 0:o.alignedName;return!i&&!a?null:s.jsxs(XC,{className:`kicker ${t}`,"aria-hidden":r,dataTrackingName:"content-detail-kicker",children:[i&&s.jsx("span",{children:s.jsx(jw,{tabIndex:n,url:(u=(c=e.thematicFocusCategory)==null?void 0:c.correspondingContent)==null?void 0:u.namedUrl,text:i})}),a&&s.jsx("span",{children:s.jsx(jw,{tabIndex:n,url:(d=o==null?void 0:o.correspondingContent)==null?void 0:d.namedUrl,text:a})})]})},zf=`
  ${He.darkStyles}
  ${KC}
`,kl=h(iW)`
  margin-bottom: 8px;

  & > *${G.notLast} {
    &:after {
      content: '\u00A0|\u00A0';
    }
  }
`,pd=A({name:"ArticleDetailHeader",fragment(){return _`fragment ${this.name} on Content {
          ... on NamedAspect {
            title
          }
          ... on TextualAspect {
            teaser
          }
            ...${Gn.name}
            ...${pr.name}
            ...${Ti.name}
            ...${$n.name}
        }
        ${Gn.fragment()}
        ${pr.fragment()}
        ${Ti.fragment()}
        ${$n.fragment()}
    `}}),oW=({content:e,className:t})=>s.jsxs("header",{className:t,children:[s.jsx(jf,{content:e}),s.jsx(kl,{content:e}),s.jsx(ov,{children:e.title}),s.jsx(Bf,{content:e,className:"author-details"}),s.jsx(nc,{className:"time-area",content:e}),e.teaser&&s.jsx(Wr,{className:"teaser-text",children:e.teaser})]}),ZC=`
  ${zf}
  ${iv}
  ${Mf}
  ${Uf}
  ${Pi}
`,JC=h(oW)`
  .time-area, .author-details {
    margin-top: 5px;
  }

  .teaser-text {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`,aW=ze.config.hide.opinion,Ow=A({name:"OpinionDetailHeader",fragment(){return _`fragment ${this.name} on Article {
          kicker
          title
          ...${Gn.name}
          ...${pr.name}
          ...${$n.name}
          ...${U.opinionFragment.name}
        }
        ${Gn.fragment()}
        ${pr.fragment()}
        ${$n.fragment()}
        ${U.opinionFragment.fragment()}
    `}}),sW=({content:e,className:t})=>s.jsx(Cf.Provider,{value:{config:{hide:{opinion:aW}},content:e},children:s.jsxs("header",{className:t,children:[s.jsxs("div",{className:"background-wrapper",children:[s.jsx(jf,{content:e}),s.jsx(kl,{content:e}),s.jsx(a0,{isA:"h1",className:"title",children:e.title}),s.jsx(q.Opinion,{})]}),s.jsx(nc,{className:"time-area",content:e}),e.teaser&&s.jsx(Wr,{className:"teaser-text",children:e.teaser})]})}),eA={background:"--opinion-detail-header-background"},lW=`
  ${eA.background}: ${C.DARK_BLUE_GREY_02};
  ${zf}
  ${a0.darkStyles}
  ${Uf}
  ${Lf}
  ${Pi}
`,cW=h(sW)`
  .background-wrapper {
    position: relative;
    overflow: visible;
    padding-bottom: 30px;
    margin-bottom: 27px;
    z-index: 1;
    &:before {
      content: "";
      z-index: -1;
      position: absolute;
      bottom: 0;
      left: -15px;
      width: 100vw;
      height: calc(100% + 30px);
      background-color: var(${eA.background}, ${C.BLUE_GREY_01});
    }
  }

  .title {
    font-size: 3rem;
    margin-bottom: 20px;
    word-wrap: break-word;
  }

  .time-area {
    margin-top: 5px;
  }

  .teaser-text {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .author-image {
    height: 80px;
    width: 80px;
  }

  .author-data{
    .author-link, .no-link {
      font-size: 1.6rem;
    }
  }

  ${b.sm`
    .author-data {
      .opinion-metadata {
        font-size: 1.6rem;
      }
    }
    .background-wrapper {
      margin-bottom: 30px;
      &:before {
        left: -45px;
      }
    }
  `}

  ${b.md`
    .kicker {
      margin-bottom: 10px;
    }
    .title {
      font-size:3.8rem;
      margin-bottom: 25px;
    }
    .author-image {
      height: 120px;
      width: 120px;
    }
    .author-data {
      .author-link, .no-link {
        font-size: 1.8rem;
      }
      .opinion-metadata {
        font-size: 1.8rem;
      }
    }
    .background-wrapper {
      padding-bottom: 40px;
      &:before {
        left: -40px;
      }
    }
  `}

  ${b.lg`
    .title {
      font-size: 4.6rem;
    }
    .background-wrapper {
      margin-bottom: 27px;
      &:before {
        left: -95px;
      }
    }
  `}
  ${b.xl`
    .background-wrapper {
      &:before {
        left: calc(-50vw + (1110px / 2) - 110px);
      }
    }
  `}
`,_i=A({name:"MediaDetailsHeader",fragment(){return _`fragment ${this.name} on Content {
          ... on TextualAspect {
            teaser
          }
          ...${Ti.name}
          ...${pr.name}
        }
        ${Ti.fragment()}
        ${pr.fragment()}
    `}}),uW=({content:e,className:t})=>s.jsxs("header",{className:t,children:[s.jsx(Bf,{content:e}),s.jsx(nc,{className:"time-area",content:e}),s.jsx(Wr,{className:"teaser-text",children:e.teaser})]}),sv=`
  ${Mf}
  ${Uf}
  ${Pi}
`,Wf=h(uW)`
  .time-area {
    margin-top: 5px;
  }
  .teaser-text {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`,dW="a.internal-link",fW=({content:e,richTextRef:t})=>{const[,n]=De(),{isMobileMode:r}=At();x.useEffect(()=>{var i;(i=t.current)==null||i.querySelectorAll(dW).forEach(o=>{const a=o.getAttribute("href");o.addEventListener("click",l=>{l.preventDefault(),n(a,{isMobileMode:r,scrollTop:!0})})})},[e.id,n])},pW=e=>{const{level1Id:t,macaParam:n,pageOrigin:r,gtmEnvironment:i}=S0(),o=uB(e).map(l=>l.targetId),a=[...e.videos,...e.audios].filter(l=>o.includes(l.id)).reduce((l,c)=>({...l,[c.id]:w0({content:c,level1Id:t,macaParam:n,pageOrigin:r,environment:i})}),{});lC({dictionary:a})},Rn=({selector:e,componentFn:t,richTextElement:n})=>{const r=[...n.querySelectorAll(e)].map(i=>{const o=t(i);if(!o)return null;const a=O.document.createElement("div"),l=i.className;return a.setAttribute("class",`render-container ${l}`.trim()),i.parentNode.replaceChild(a,i),y$.createPortal(o,a)}).filter(Boolean);return{richTextElement:n,portals:r}},mW=({rawFormat:e})=>e.includes("LEGACY")?"LEGACY":e==="FREE_IMAGE"?"FREE":"90X",hW=e=>{const t=e.style["padding-bottom"],{id:n,format:r,url:i}=e.dataset,o=e.getAttribute("alt"),{className:a}=e,l={image:{id:+n,staticUrl:i},alt:o,className:a,formatConfig:[{minWidth:B.min.xs,maxWidth:B.max.wide_xl,formatGroupName:mW({rawFormat:r})}],aspectRatio:+t.slice(0,-1),isA:"div"};return s.jsx(ql,{...l})},gW=({className:e,isA:t="h2","aria-label":n,contentType:r,title:i})=>s.jsxs(Ft,{isA:t,"aria-label":n,className:e,children:[s.jsx(_f,{contentType:r}),s.jsx("span",{children:i})]}),lv=h(gW)`
  ${Ft.darkStyles}
  font-size: 3rem;
  margin: 0;

  ${b.md`
    font-size: 3.8rem;
  `}
  ${b.lg`
    font-size: 4.6rem;
  `}

`,Rw="ImageGallery",yW=({className:e,title:t,teaser:n,priority:r})=>{const i=Xn(),o=Af(Rw,t);return s.jsxs("section",{className:e,children:[s.jsx("div",{className:"headline-container",children:s.jsxs("div",{className:"headline-wrapper",children:[s.jsx(jf,{content:{priority:r}}),s.jsx(lv,{className:"headline",isA:i.isInRichText?"h2":"h1","aria-label":o,contentType:Rw,title:t})]})}),s.jsx("div",{className:"description-container",children:s.jsx(Wr,{className:"description",isA:i.isInRichText?"h3":"h2",children:n})})]})},tA=M`
  height: 100%;
  ${q0}
`,nA=h(yW)`
  ${Pi}
  .headline-container, .description-container {
    & > * {
      ${Za}
    }
  }

  .headline-container, .description-container {
    ${RC}
  }

  .headline-container:before {
    ${tA}
  }

  .description-container:before {
    height: calc(100% + 20px);
    ${Pf}
  }

  .headline-wrapper {
    margin-top: 10px;
    padding-top: 47px;
  }

  .description {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  ${b.sm`
    .headline-wrapper {
      padding-top: 60px;
    }
  `}

  ${b.md`
    .headline-wrapper {
      padding-top: 70px;
    }
  `}

  ${b.lg`
    .headline-wrapper {
      padding-top: 85px;
    }
  `}

  ${b.xl`
    .headline-container, .description-container {
      & > * {
        ${tc}
      }
    }
  `}
`,Dw=A({name:"SlideResponsiveImage",fragment(){return _`fragment ${this.name} on GalleryImage {
      name
      description
      altText
      assignedImage {
        licenserSupplement
        imageType
        ...${fr.name}
      }
    }
    ${fr.fragment()}
  `}}),rA=[{minWidth:B.min.xs,maxWidth:B.max.xs,formatGroupName:"70X"},{minWidth:B.min.sm,maxWidth:B.max.sm,formatGroupName:"80X"}],vW=[...rA,{minWidth:B.min.md,maxWidth:B.max.lg,formatGroupName:"60X"},{minWidth:B.min.xl,maxWidth:B.max.wide_xl,formatGroupName:"100X"}],xW=[...rA,{minWidth:B.min.md,maxWidth:B.max.wide_xl,formatGroupName:"60X"}],SW=({isInRichText:e,isCaricatureImage:t})=>t?So:e?xW:vW,wW=({className:e,galleryImage:t={},preload:n})=>{const{assignedImage:r,altText:i}=t,o=Xn();if(!r)return null;const a=n&&o.isOnDetailPage&&!o.isInRichText,l=P2(r.imageType),c=a?Yl:ql;return s.jsx(c,{className:H(e,{"is-caricature":l,"is-richtext":o.isInRichText}),image:r,formatConfig:SW({isInRichText:o.isInRichText,isCaricatureImage:l}),alt:i})},iA=h(wW)`
    top: 50%;
    transform: translate3d(0, -50%, 0);
    ${b.xl`
      &.is-caricature {
        padding-bottom: 43.75%;
        margin: 0 auto;
        &:not(.is-richtext) {
          max-width: 77.77%;
        }
      }
    `}
    ${lf.xl.ultraWide`
      &.is-caricature {
        margin: 0;
      }
    `}
`,bW=({className:e,galleryImage:t})=>{var r;const n=(r=t==null?void 0:t.assignedImage)==null?void 0:r.licenserSupplement;return s.jsx(Q0,{className:e,licenserSupplement:n})},cv=h(bW)`
    ${H0};
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    padding-right: 15px;
    padding-top: 10px;
    background-image: linear-gradient(to bottom,rgba(0,0,0,0), ${Wn(C.DARK_BLUE_GREY_01,.9)} 45%);

    ${b.sm`
      padding-top: 0;
      background-image: linear-gradient(to bottom,rgba(0,0,0,0), ${Wn(C.DARK_BLUE_GREY_01,.9)} 70%);
    `}
`,kW=({title:e,teaser:t,galleryImage:n,className:r,priority:i,...o})=>s.jsxs("div",{className:`${r} cover`,...o,children:[s.jsx(nA,{className:"text-overlay",title:e,teaser:t,priority:i}),s.jsx(cv,{galleryImage:n}),s.jsx(iA,{galleryImage:n,preload:!0})]}),EW=h(kW)`
`,$W=({className:e,title:t,teaser:n,onTextOverlayToggle:r,isTextOverlayOpened:i,isCurrentIndex:o})=>{const a=Xn(),l=i?"opened":"closed",c=z(`component.slideshow.text_overlay_button.label.${i?"close":"open"}`);return s.jsxs("section",{className:H(e,l),children:[s.jsx("div",{className:"headline-background-container",children:s.jsxs("div",{className:"headline-container",children:[s.jsx(Ft,{className:"headline",isA:a.isInRichText?"h3":"h2",children:t}),s.jsx(ht,{onClick:r,title:c,tabIndex:o?0:-1,"aria-expanded":i,className:"arrow","data-tracking-name":"slide-show-overlay-text-arrow",children:s.jsx(I_,{})})]})}),s.jsx("div",{className:"description-container",children:s.jsx(it,{isA:"p",className:"description",children:n})})]})},oA=h($W)`
  ${it.darkStyles}
  ${Ft.darkStyles}
  ${ht.darkStyles}
  will-change: transform;
  &.opened {
    .arrow svg {
      transform: rotate(0deg);
      transition: transform 450ms cubic-bezier(0.43, 0, 0.09, 1);
    }
  }

  &.closed {
    .description-container {
      max-height: 0;
    }
    .description {
      margin-top: 12px;
      transition-property: margin-top;
      transition-delay: 450ms;
    }
  }

  .headline-background-container, .description-container {
    & > * {
      margin: 0;
      ${Za}
    }
  }

  .headline-background-container, .description-container {
    ${RC}
  }

  .headline-background-container:before {
    ${tA}
  }

  .description-container:before {
    height: calc(100% + 15px);
    ${Pf}
  }

  .description-container {
    max-height: 32vw;
    transition: max-height 450ms cubic-bezier(0.43, 0, 0.09, 1);
  }

  .headline-background-container {
    .headline-container {
      margin-top: 10px;
      display: flex;
      padding-top: 47px;
      padding-bottom: 10px;
    }
  }

  .headline {
    font-size: 1.6rem;
    flex-grow: 1;
    max-width: calc(100% - 40px);
    margin-bottom: 0;
  }

  .arrow {
    margin-top: -10px;
    margin-bottom: -10px;
    align-self: flex-start;
    svg {
      padding: 7.5px;
      transform: rotate(180deg);
      transition: transform 450ms cubic-bezier(0.43, 0, 0.09, 1);
    }
  }

  .description {
    max-height: 32vw;
    padding-bottom: 5px;
    font-size: 1.2rem;
    overflow-y: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  ${b.sm`
    .headline-background-container {
      .headline-container {
        padding-top: 60px;
      }
    }
  `}

  ${b.md`
    .headline-background-container {
      .headline-container {
        padding-top: 70px;
      }
    }
  `}

  ${b.lg`
    .headline-background-container {
      .headline-container {
        padding-top: 85px;
      }
    }
  `}

  ${b.xl`
    .headline-background-container, .description-container {
      & > * {
        ${tc}
      }
    }
  `}
`,TW=({galleryImage:e,className:t,onTextOverlayToggle:n,isTextOverlayOpened:r,isCurrentIndex:i,...o})=>{const{name:a,description:l}=e;return s.jsxs("div",{className:t,...o,children:[s.jsx(oA,{className:"text-overlay",title:a,teaser:l,onTextOverlayToggle:n,isTextOverlayOpened:r,isCurrentIndex:i}),s.jsx(cv,{galleryImage:e}),s.jsx(iA,{galleryImage:e})]})},_W=h(TW)``,CW=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",...e},x.createElement("path",{fill:"none",stroke:"#FFF",strokeLinejoin:"bevel",d:"M6.5 2.14342857L6.5 18.0005714M13.5 2.14342857L13.5 18.0005714"})),AW=h(CW)``,LW=({className:e,translation:t,restProps:n})=>{const r=z(t);return s.jsx("span",{className:e,"aria-live":"polite",...n,children:r})},aA=h(LW)`
  position: absolute;
  left: -9999px;
`,IW="component.slideshow.number_of_images",ii=Object.freeze({play:"play",pause:"pause",init:"init"}),jW=({className:e,slidesCount:t,slideNumber:n,onPlayPause:r,playingState:i})=>{const o=Xn(),a=n===0?1:n,l=i===ii.play?AW:hC,c=i===ii.init,u=z(`component.slideshow.play_button.${i===ii.play?"pause":"play"}.label`),d={key:"component.slideshow.paging_live_region.label",parameters:{currentImage:n,totalImages:t}},f=Mh({key:"component.slideshow.number_of_images",count:t,parameters:{count:t}}),p=z(Mh({key:IW,count:t,parameters:{count:t}}));return s.jsx("div",{className:e,children:s.jsxs("div",{className:H("control-bar-wrapper",{"is-hero":!o.isInRichText}),children:[s.jsx(vf,{className:H("play-pause-button",{playing:i===ii.play,clicked:i!==ii.init}),onClick:r,title:u,children:s.jsx(l,{})}),s.jsx(aA,{translation:n===0?f:d}),s.jsxs("div",{"aria-hidden":"true",className:"slide-info",children:[s.jsx(we,{className:H("slide-position",{init:c}),children:`${a} | ${t}`}),s.jsx(we,{className:"image-count",children:p})]})]})})},OW=h(jW)`
  background-color: ${C.BLACK};
  ${vf.darkStyles}
  ${we.darkStyles}

  .control-bar-wrapper {
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: flex-start;
    /*! @noflip */
    direction: ltr;
  }

  .play-pause-button {
    width: 50px;

    svg {
      width: 20px;
      stroke-width: .8px;
    }
  }

  .play-pause-button {
    /*! @noflip */
     background: linear-gradient(to right,
              ${C.DW_LIGHT_BLUE} 0%,
              ${C.DW_LIGHT_BLUE} 50%,
              ${C.BLACK} 50%,
              ${C.BLACK} 100%);
     background-size: 200%;
     transition: background-position 800ms cubic-bezier(0.43, 0, 0.09,1);
      svg {
        fill: ${C.WHITE};
      }

    &.playing,
    &.clicked {
      /*! @noflip */
      background-position: right;
      transition: background-position 800ms cubic-bezier(0.91, 0, 0.57, 1);

      svg {
        fill: none;
      }
    }
  }

  .slide-info {
    direction: ltr;
    width: calc(100% - 100px);
    position: relative;
    font-size: 1.6rem;
    height: 50px;
    padding: 15px 0;
  }

  .slide-position,
  .image-count {
    position: absolute;
    transition: all 800ms cubic-bezier(0.43,0,0.09,1);
    /*! @noflip */
    transform: translateX(-50%);
    /*! @noflip */
    left: 50%;

    &.init {
      /*! @noflip */
      left: 15px;
      /*! @noflip */
      transform: translateX(0%);
    }
  }

    .slide-position {
      opacity: 1;

      &.init {
        opacity: 0;
    }
  }

  .image-count {
    opacity: 0;

    &.init {
      opacity: 1;
    }
  }

  ${b.md`
    .slide-info {
      font-size: 1.4rem;
    }
  `}

  ${b.lg`
    .play-pause-button {
      width: 60px;
      svg {
        width: 24px;
      }
    }
    .slide-info {
      width: calc(100% - 120px);
      height: 60px;
      padding: 18px 0;
    }
    .control-bar-wrapper {
      max-width: ${En.lg}px;
      margin: auto;
      &.is-hero {
        padding-left: ${oe.lg}px;
        padding-right: ${oe.lg}px;
      }
    }
  `}
  ${b.xl`
    .control-bar-wrapper {
      max-width: ${En.xl}px;
    }
  `}
`,RW=e=>(t=0)=>t>0?t-1:e,DW=e=>(t=0)=>t<e-1?t+1:e,sA=4e3,lA=(e,t,n={currentIndex:0})=>{const r=RW(e),i=DW(t),o=(c,u)=>{switch(u.type){case"PLAY":return{...c,isPlaying:!0};case"PAUSE":return{...c,isPlaying:!1};case"PREV":return c.currentIndex===e?c:{...c,currentIndex:r(c.currentIndex)};case"PROGRESS":case"NEXT":return c.currentIndex===t?c:{...c,isPlaying:u.type==="PROGRESS",currentIndex:i(c.currentIndex)};case"GOTO":return u.index>t?{...c,currentIndex:i(u.index)}:u.index<e?{...c,currentIndex:r(u.index)}:{...c,currentIndex:u.index};default:throw new Error("Unexpected action!")}},[a,l]=x.useReducer(o,n);return[a,{next:()=>l({type:"NEXT"}),prev:()=>l({type:"PREV"}),goTo:c=>l({type:"GOTO",index:c}),play:()=>l({type:"PLAY"}),pause:()=>l({type:"PAUSE"}),progress:()=>l({type:"PROGRESS"}),isFirstSlide:()=>a.currentIndex===e,isLastSlide:()=>a.currentIndex===t,isActiveSlide:c=>a.currentIndex===c}]},cA=100,uA=sA-cA,NW=({prevSlideNumber:e,slidesCount:t})=>e===t,PW=x.memo(({className:e,slideNumber:t,slidesCount:n,isAutoplay:r})=>{const i=Tf(t),[o,a]=x.useState(t),[l,c]=x.useState(!1);return x.useEffect(()=>{NW({prevSlideNumber:i,slidesCount:n})&&r?c(!0):a(t)},[t]),If({callback:()=>{a(t),c(!1)},delay:cA,conditional:l}),s.jsx("div",{className:e,children:n>50?s.jsx("div",{className:"indicator-fluid",children:s.jsx("div",{className:"bar",style:{transform:`scaleX(${(l?0:o)/n})`,transition:l?"none":`transform linear ${r?uA:1e3}ms`}})}):[...Array(n)].map((u,d)=>s.jsx("div",{className:H("indicator-fragment",{active:!l&&d<=o-1}),children:s.jsx("div",{className:H("bar",{"with-animation":r})})},d))})}),FW=h(PW)`
  position: absolute;
  z-index: 3;
  top: 0;
  padding-top: 15px;
  ${Za}
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  max-width: 1110px;
  display: flex;

  .indicator-fragment,
  .indicator-fluid {
    background-color: rgb(255,255,255,.3);
    height: 2px;
    width: 100%;

    .bar {
      height: 100%;
      background-color: ${C.WHITE};
    }

  }

  .indicator-fluid {

    .bar {
      transform-origin: left center;
    }
    
  }

  .indicator-fragment {

    .bar {
      transition: opacity 1.5s;
      opacity: 0;

      &.with-animation {
        opacity: normal;
        transform-origin: left center;
        transform: scaleX(0);
      }

    }

    &.active {

      .bar {
        opacity: 1;

        &.with-animation {
          transition: transform ease-in-out ${uA}ms;
          transform: scaleX(1);
        }

      }

    }
    & + .indicator-fragment {
      margin-left: 3px;

      ${b.lg`
        margin-left: 5px;
      `}

     }
  }
`,No={SlideArrows:o8,ControlBar:OW,TextOverlay:nA,ExpandableTextOverlay:oA,CopyrightInfo:cv,CoverImage:EW,SlideImage:_W,Indicator:FW},MW=({draggableRef:e,wrapperRef:t})=>{const n={},r=(m,S)=>{switch(S.type){case"DRAG":return{...S};case"RESET":return n;default:throw new Error}},{isRtl:i}=_n(),o=i?"right":"left",a=i?"left":"right",l=m=>{const S=Math.floor(m[o]),w=Math.floor(e.current.children[0].getBoundingClientRect()[o]);return S===w},c=m=>{const S=e.current.children.length-1,w=e.current.children[S].getBoundingClientRect(),E=Math.floor(w[a]),g=Math.floor(m[a]);return E===g},u=m=>{const S=t.current.getBoundingClientRect(),w=e.current.getBoundingClientRect();p({type:"DRAG",dragInProgress:!0,xPositionOfEventStart:v2(m).x,draggableOffsetStart:w[o]-S[o],draggableTransformStart:e.current.style.transform,isFirstIndex:l(S),isLastIndex:c(S)})},d=()=>{p({type:"RESET"})},[f,p]=x.useReducer(r,n);return[f,{drag:u,reset:d}]},BW=({draggableOffsetStart:e,xMouseMovement:t,boundarySlowingFactor:n,movesIntoPrevSlideDirection:r})=>r?(t+e)*n:e+t*n,UW=e=>{e.preventDefault()},zW=({className:e,prev:t,next:n,boundarySlowingFactor:r=.1,minMovementThreshold:i=.05,forwardWrapperRef:o,forwardDraggableRef:a,itemsOnSlideConfig:l=[{res:0,itemsOnSlide:1},{res:768,itemsOnSlide:2}],children:c,onDrag:u,onDragEndWithoutSlideChange:d})=>{const{isRtl:f}=_n(),p=a||x.createRef(),m=o||x.createRef(),S=l.sort((N,R)=>R.res-N.res),[w,{drag:E,reset:g}]=MW({draggableRef:p,wrapperRef:m}),y=N=>{E(N)},v=N=>{const R=N>0;return f?!R:R},k=N=>{const R=Wh(N,w.xPositionOfEventStart),K=v(R);return w.isFirstIndex&&K||w.isLastIndex&&!K?BW({draggableOffsetStart:w.draggableOffsetStart,xMouseMovement:R,boundarySlowingFactor:r,movesIntoPrevSlideDirection:K}):R+w.draggableOffsetStart},T=N=>{const R=k(N),K=Math.ceil(p.current.parentNode.offsetWidth*.1),ce=Math.abs(R)-K,le=p.current.getBoundingClientRect().width-N.currentTarget.getBoundingClientRect().width,{itemsOnSlide:Ye}=S.find(F=>O.window.matchMedia(`screen and (min-width: ${F.res}px)`).matches)||S[S.length-1],Ke=N.currentTarget.getBoundingClientRect().width*Math.floor(p.current.children.length/Ye),Xe=f?R>=-K:R<=K;return{isInBoundary:ce<=le&&Xe&&Math.abs(R)<=Ke+K,draggableOffsetWithBoundaries:R}},$=N=>{if(!w.dragInProgress)return;const{isInBoundary:R,draggableOffsetWithBoundaries:K}=T(N);R&&(m8({target:p.current.style,x:K}),u&&u({width:p.current.getBoundingClientRect().width,pos:K}))},I=N=>Math.abs(N)<m.current.offsetWidth*i,j=N=>{if(!w.dragInProgress)return;h8({target:p.current.style,originalX:w.draggableTransformStart}),g();const R=Wh(N,w.xPositionOfEventStart);if(I(R)){d&&d(N);return}v(R)?t():n()};return s.jsx("div",{className:e,onMouseDown:y,onMouseMove:$,onMouseUp:j,onMouseLeave:j,onTouchStart:y,onTouchMove:$,onTouchEnd:j,onTouchCancel:j,onDragStart:UW,role:"presentation",ref:m,children:c(p)})},dA=h(zW)`
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`,rc=({initialState:e=!1,key:t="Enter"}={})=>{const[n,r]=x.useState(e);return[n,{toggleOnClick:()=>{const a=!n;return r(a),a},toggleOnKey:a=>{a.key===t&&r(!n)}}]},fA=M`
  height: calc(100vh - 70px);
  max-height: 700px;
  overflow: hidden;
`,uv=M`
  figure {
    transform: translate(-50%,-50%);
    top:50%;
    left: 50%;

    img {
      width: auto;
      height: 100%;
    }
  }
`,WW="onSlideChange",VW=({shouldPush:e,eventData:t})=>{const n=x.useRef(!0),{currentIndex:r}=t;x.useEffect(()=>{if(n.current){n.current=!1;return}e&&ha.pushToGoogleTagManager({datalayerObj:{event:WW,eventData:t}})},[r])},md=A({name:"SlideShow",fragment(){return _`fragment ${this.name} on ImageGallery {
      name
      namedUrl
      teaser
      priority
      extendedGalleryImages {
        ...${Dw.name}
      }
    }
    ${Dw.fragment()}
    `}}),GW=({imageGallery:e={},className:t})=>{const{extendedGalleryImages:n,teaser:r}=e,{isInRichText:i}=Xn(),{isRtl:o}=_n(),a=0,l=n.length-1,[c,{prev:u,next:d,goTo:f,play:p,pause:m,progress:S,isFirstSlide:w,isLastSlide:E}]=lA(a,l),g=x2({childrenLength:n.length,currentIndex:c.currentIndex,isRtl:o}),[y,{toggleOnClick:v}]=rc({initialState:!0}),k=Tf(c.isPlaying),[T,$]=x.useState(!1),I=x.useRef(null);M0(e),VW({shouldPush:!(w()&&E()),eventData:{maxIndex:l,currentIndex:c.currentIndex,content:{contentId:e.id}}}),x.useEffect(()=>(O.window.addEventListener("blur",m,!1),()=>O.window.removeEventListener("blur",m,!1)),[]),x.useEffect(()=>{if(c.isPlaying){if(k!==c.isPlaying){S();return}const le=O.window.setTimeout(()=>{S(),E()&&m()},sA);return()=>O.window.clearTimeout(le)}},[c.isPlaying,c.currentIndex]),x.useEffect(()=>{c.isPlaying&&E()&&f(1)},[c.isPlaying]);const j=()=>{d()},N=()=>{u()},R=le=>{switch(le.key){case Sn.SPACEBAR:le.stopPropagation(),le.preventDefault(),c.isPlaying?m():p();break;case Sn.ARROW_LEFT:le.stopPropagation(),c.isPlaying&&m(),N();break;case Sn.ARROW_RIGHT:le.stopPropagation(),c.isPlaying&&m(),j();break}};x.useEffect(()=>(T&&O.window.addEventListener("keydown",R,!0),()=>{O.window.removeEventListener("keydown",R,!0)}),[c.isPlaying,T]),x.useEffect(()=>{const le=Ye=>{const Ke=Ye.composedPath().find(Xe=>Xe===I.current);$(!!Ke)};return O.window.addEventListener("click",le),()=>{O.window.removeEventListener("click",le)}},[]);const K=()=>{$(!0)},ce=()=>{$(!1)};return n.length>0&&s.jsxs("div",{ref:I,onFocusCapture:K,onBlurCapture:ce,className:t,"data-tracking-name":"slide-show",children:[s.jsx(dA,{className:"slider-container",next:d,prev:u,itemsOnSlideConfig:[{res:0,itemsOnSlide:1}],children:le=>s.jsx("section",{ref:le,className:H("slider",{"is-hero":!i}),style:g,children:n.map((Ye,Ke)=>{const Xe="slide-img",Ie=Ke===c.currentIndex,F={width:`${100/n.length}%`};return Ke===0?s.jsx(No.CoverImage,{galleryImage:Ye,title:e.name,teaser:r,priority:e.priority,className:Xe,style:F,"aria-hidden":!Ie},Ke):s.jsx(No.SlideImage,{galleryImage:Ye,onTextOverlayToggle:()=>{v(),m()},isTextOverlayOpened:y,className:Xe,isCurrentIndex:Ie,style:F,"aria-hidden":!Ie},Ke)})})}),s.jsx(No.Indicator,{slideNumber:c.currentIndex,slidesCount:l,className:H("indicator",{show:!w()}),isAutoplay:c.isPlaying}),s.jsx(No.SlideArrows,{disablePrevArrow:w(),disableNextArrow:E(),onPrev:()=>{c.isPlaying&&m(),N()},onNext:()=>{c.isPlaying&&m(),j()}}),s.jsx(No.ControlBar,{slideNumber:c.currentIndex,slidesCount:l,playingState:c.isPlaying?ii.play:`${w()?ii.init:ii.pause}`,onPlayPause:c.isPlaying?m:p})]})},pA=h(GW)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  div[role=button] {
    ${Zy()}
  }

  .slider-container {
    margin: 0 auto;
    overflow: hidden;
    background-color: ${C.BLACK};
  }

  .slider {
    transition: ${g0};
    display: flex;
  }

  .slide-img {
    position: relative;
    overflow: hidden;
  }

  .text-overlay {

    & * {
      overflow-wrap: break-word;
    }

    width: 100%;
    position: absolute;
    bottom: -1px;
    z-index: 1;
    padding: 0 0 10px;
    display: grid;
    max-height: 80%;
    overflow: hidden;

    :nth-last-child(3) {
      padding: 0;
      padding-bottom: 15px;
    }
  }

  .indicator {
    opacity: 0;
    margin-top: -40px;
    transition: all 400ms cubic-bezier(0.91, 0, 1, 1);

    &.show {
      margin-top: 0;
      opacity: 1;
      transition: all 400ms cubic-bezier(0, 0, 0.09, 1) 400ms;
    }
  }

  ${lf.xl.ultraWide`
    .is-hero .slide-img {
      height: calc(100vh - 130px);
      overflow: hidden;
      max-height: 700px;
      ${uv}
    }
  `}
`,HW=A({name:"RichTextImageGalleryPlaceholders",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        imageGalleries {
          id
          ...${md.name}
          ...${Re.name}
        }
      }
      ${md.fragment()}
      ${Re.fragment()}
    `}}),QW=e=>t=>{const n=t.dataset.id,r=e.imageGalleries.find(i=>i.id===+n);return r&&s.jsx(pA,{imageGallery:r})},Kh=A({name:"WidgetIframe",fragment(){return _`fragment ${this.name} on Widget {
        id
        language
        vendorCmpId
      }
    `}}),qW=({widget:e,className:t,...n})=>{const r=`/webapi/iframes/widget/${Ra(e.language)}/${e.id}`,[i,o]=yr(Tr),{isMobileMode:a}=At(),[l,c]=x.useState(300),u=x.useRef();vn(O.window,"message",f=>{var p;f.source===((p=u.current)==null?void 0:p.contentWindow)&&f.data.type==="embed-size"&&c(f.data.height+1)});const d=o?r:"";return s.jsx("div",{ref:i,className:`${t} dw-widget`,children:s.jsx("iframe",{className:H({cmplazyload:o}),ref:u,title:z("content_block.widget.headline"),src:a?d:"about:blank","data-cmp-vendor":e.vendorCmpId,"data-cmp-src":d,"data-cmp-preview":"100%x300",style:{height:l},...n})})},mA=h(qW)`
  iframe {
    border: none;
    width: 100%;
    min-height: 300px;
  }
`,YW=A({name:"RichTextWidgetPlaceholders",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        widgets {
          id
          ...${Kh.name}
        }
    }
    ${Kh.fragment()}
    `}}),KW=e=>t=>{const{id:n}=t.dataset,r=e.widgets.find(i=>i.id===+n);return r&&s.jsx(mA,{widget:r})},XW=A({name:"RichTextVideoPlaceholders",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        videos {
          id
          ...${co.name}
        }
    }
    ${co.fragment()}
    `}}),ZW=e=>t=>{const n=t.dataset.id,r=e.videos.find(i=>i.id===+n);return r&&s.jsx(bl,{content:r})},JW=A({name:"RichTextAudioPlaceholders",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        audios {
          id
          ...${lo.name}
        }
    }
    ${lo.fragment()}
    `}}),eV=e=>t=>{const n=t.dataset.id,r=e.audios.find(i=>i.id===+n);return r&&s.jsx(U0,{content:r})},tV=async()=>(await df({url:"https://platform.twitter.com/widgets.js",scriptId:"twitter-widgets-script",vendorId:"s34"}),new Promise(e=>{const{twttr:t,document:n}=O.window;t.ready(()=>e({twttr:t,document:n}))}));let Kp=null;const nV=async()=>(Kp||(Kp=tV()),Kp),rV=({inView:e})=>{const[t,n]=x.useState({twttr:null});return x.useEffect(()=>{const r=async()=>{const{twttr:i}=await nV();n({twttr:i})};e&&!t.twttr&&r()},[e]),t},iV=({forwardRef:e,...t})=>s.jsx("div",{...t,ref:e}),Vf=h(iV)`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * {
    width: 100%
  }
  
  ${b.sm`
    > *:not(.cmppreviewroot) {
      width: auto;
      min-width: 548px;
    }
`}
`,oV={align:"center"},hA="x-tweet";O.window.cmp_preview_vendor_s34_class=`.${hA}`;const aV=({tweetId:e,className:t})=>{const n=x.useRef(),[r,i]=yr(Tr),{twttr:o}=rV({inView:i});return x.useEffect(()=>{o&&n.current&&i&&o.widgets.createTweet(e,n.current,oV)},[e,o,i]),s.jsx(Vf,{forwardRef:r,className:t,children:s.jsx("blockquote",{ref:n,className:hA,"data-id":e})})},sV=h(aV)`
`,lV=e=>{const t=e.dataset.id;return s.jsx(sV,{tweetId:t})},cV=({videoUrl:e,className:t})=>{const[n,r]=yr(Tr),i=z("content_block.widget.headline"),{isMobileMode:o}=At(),a=r?e:"";return s.jsx("iframe",{title:i,className:H(t,{cmplazyload:r}),ref:n,"data-cmp-vendor":"s30",src:o?a:"about:blank","data-cmp-src":a,allowFullScreen:!0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})},uV=h(cV)`
  border: none;
  width: 100%;
  height: 100%;
`,dV=e=>{const t=e.querySelector("iframe").dataset.src;return s.jsx(uV,{videoUrl:t})},fV=async()=>(await df({url:"https://www.instagram.com/static/bundles/metro/EmbedSDK.js/33cd2c5d5d59.js",scriptId:"instagram-sdk-script",vendorId:"s14"}),new Promise(e=>{const{instgrm:t,document:n}=O.window;t&&n&&e({instgrm:t,document:n})}));let Xp=null;const pV=async()=>(Xp||(Xp=fV()),Xp),mV=({inView:e})=>{const[t,n]=x.useState({instgrm:null});return x.useEffect(()=>{const r=async()=>{const{instgrm:i}=await pV();n({instgrm:i})};e&&!t.instgrm&&r()},[e]),t},hV=e=>{const[t,n]=x.useState();return x.useEffect(()=>{e&&(async()=>{const i=await(await O.window.fetch(e)).json();n(i.html)})()},[e]),t},gV=e=>{x.useEffect(()=>{e==null||e.Embeds.process()},[e])},gA="instagram-oembed";O.window.cmp_preview_vendor_s14_class=`.${gA}`;const yV=({url:e,className:t})=>{const[n,r]=yr(Tr),{instgrm:i}=mV({inView:r}),o=e&&i&&`https://graph.facebook.com/v15.0/instagram_oembed?url=${e}&access_token=462865571602271|144c38399b47bc28dcf3a85f877159e2&omitscript=true`,a=hV(o);return gV(a&&i),s.jsx(Vf,{className:t,forwardRef:n,children:s.jsx("div",{className:gA,dangerouslySetInnerHTML:{__html:a}})})},vV=h(yV)`
`,xV=e=>{const t=e.dataset.href;return s.jsx(vV,{url:t})},SV="v15.0";let Nw=!1,Zp=null;const wV=()=>new Promise(e=>{O.window.fbAsyncInit=()=>{const{FB:t,document:n}=O.window;t.init({xfbml:!0,version:SV}),e({FB:O.window.FB,document:n})}}),bV=async()=>(await df({url:"https://connect.facebook.net/en_US/sdk.js",scriptId:"facebook-sdk-script",vendorId:"s7"}),wV()),kV=async()=>(Zp||(Zp=bV()),Zp),EV=({FB:e})=>{let t=null;Nw||(O.window.addEventListener("resize",()=>{t&&O.window.clearTimeout(t),t=O.window.setTimeout(()=>e.XFBML.parse(),200)}),Nw=!0)},$V=({inView:e})=>{const[t,n]=x.useState({FB:null}),r=async()=>{const{FB:i}=await kV();n({FB:i}),EV({FB:i})};return x.useEffect(()=>{e&&!t.FB&&r()},[e]),t},yA="fb-embed";O.window.cmp_preview_vendor_s7_class=`.${yA}`;const TV=({className:e,url:t,embeddedClassName:n})=>{const r=x.useRef(),[i,o]=yr(Tr),{FB:a}=$V({inView:o});return x.useEffect(()=>{a&&r.current&&o&&a.XFBML.parse(r.current)},[a,o]),s.jsx(Vf,{forwardRef:i,className:e,children:s.jsx("blockquote",{ref:r,className:H(yA,{[n]:o}),"data-href":t})})},_V=h(TV)`
`,CV=e=>{const t=e.dataset.href,n=e.className.split(" ").filter(r=>r.startsWith("fb-")).join(" ");return s.jsx(_V,{url:t,embeddedClassName:n})},AV=async()=>{const{initTelegramWidgets:e}=await J(()=>import("./telegram-widget.cmpLive-2ac27c94.js"),[]);e({window,document})},LV=({className:e,telegramPostId:t,isSinglePicture:n})=>{const[r]=R2(),[i,o]=yr(Tr);return x.useEffect(()=>{o&&AV()},[o]),s.jsx(Vf,{className:e,forwardRef:i,children:s.jsx("blockquote",{className:o?"telegram-post":"","data-telegram":!0,"data-telegram-post":t,"data-single":n,"data-dark":r})})},IV=h(LV)`
`,jV=e=>{const{id:t,single:n}=e.dataset;return s.jsx(IV,{telegramPostId:t,isSinglePicture:n})},Pw=e=>({minWidth:B.min.xs,maxWidth:e.minWidth-1}),Fw=e=>({minWidth:e.maxWidth+1,maxWidth:B.max.wide_xl}),OV=e=>e.minWidth===B.min.xs?[e,Fw(e)]:e.maxWidth===B.max.wide_xl?[Pw(e),e]:[Pw(e),e,Fw(e)],Mw=e=>[e.width,e.height],RV=e=>Array.isArray(e)?e.map(Mw):Mw(e),dv=e=>e.adUnitCode.toLowerCase().replace(/\//g,"-"),DV=({slotConfigEntry:e})=>{const{leadingContent:t}=b9(),[n,r]=x.useState(null);return x.useLayoutEffect(()=>{const{googletag:i}=O.window,o=dv(e);let a;return i.cmd.push(()=>{const l=RV(e.slotSize);a=i.defineSlot(`/${Rz}/${e.adUnitCode}`,l,o),a.addService(i.pubads()),t&&(a.setTargeting("language",t.language),a.setTargeting("type",t.__typename),a.setTargeting("id",t.id)),r(a),i.display(a)}),()=>{a&&(i.destroySlots([a]),r(null),a=null)}},[t==null?void 0:t.id,e]),n},vA=x.createContext([{inView:!1,showAdBox:!1},{}]),xA=()=>x.useContext(vA),NV=({children:e,slotConfig:t})=>{const n=t[0],r=n.adUnitCode.endsWith("_Top"),[i,o]=x.useState(r),[a,l]=x.useState(),[c,u]=yr(Tr),d=Wa(),f=p=>{o(m=>m||p)};return n.minWidth>d&&i&&o(()=>!1),s.jsxs(vA.Provider,{value:[{inView:u,showAdBox:i,currentSlotUnit:a},{contributeShowAdBox:f,setCurrentSlotUnit:l}],children:[s.jsx("span",{ref:c}),e]})},Bw="slotRenderEnded",PV=({slot:e,slotConfigEntry:t})=>{const n=Wa(),[{inView:r,currentSlotUnit:i},{contributeShowAdBox:o,setCurrentSlotUnit:a}]=xA();x.useEffect(()=>{const{googletag:l}=O.window,c=u=>{u.slot===e&&o(!u.isEmpty)};return l.cmd.push(()=>{l.pubads().addEventListener(Bw,c)}),()=>{l.cmd.push(()=>{l.pubads().removeEventListener(Bw,c)})}},[o,e]),x.useEffect(()=>{const{googletag:l}=O.window,c=n>=t.minWidth&&n<=t.maxWidth;!!e&&c&&r&&i!==t.adUnitCode&&(a(t.adUnitCode),l.cmd.push(()=>{l.pubads().refresh([e])}))},[e,n,r,t,i,a])},FV=({slotConfigEntry:e,className:t})=>{const n=DV({slotConfigEntry:e});return PV({slot:n,slotConfigEntry:e}),s.jsx("div",{id:dv(e),className:t,style:{backgroundColor:n?"transparent":C.WARM_GREY_02}})},MV=({slotConfigEntry:e,className:t})=>{const n=s.jsx("div",{id:dv(e),className:t,style:{backgroundColor:C.WARM_GREY_02}});return s.jsx(Sr,{fallback:n,children:s.jsx(FV,{className:t,slotConfigEntry:e})})},BV=h(MV)`
    ${e=>{const{slotConfigEntry:t}=e;return Array.isArray(t.slotSize)?"":M`
          width: ${t.slotSize.width}px;
          height: ${t.slotSize.height}px;
      `}}
    ${e=>{const{slotConfigEntry:t}=e;return OV(t).map(n=>n===t?M`
          @media (min-width:${n.minWidth}px) {
            display: block;
          }
        `:M`
        @media (min-width:${n.minWidth}px) {
          display: none;
        }
    `)}}
`,UV=({children:e,className:t})=>{const[{showAdBox:n}]=xA();return s.jsx("div",{className:H(t,"advertisement",{"no-box":!n}),children:e})},zV=h(UV)`
  &.no-box {
    display: none;
  }
`,WV=({slotConfig:e,className:t})=>{const{adsEnabled:n}=Mt(),{isMobileMode:r}=At(),i=z("general.advertisement.ad_label");return!n||r||!e?null:s.jsx(NV,{slotConfig:e,children:s.jsxs(zV,{className:t,children:[s.jsx(m0,{className:"label-top",children:i}),e.map(o=>s.jsx(BV,{slotConfigEntry:o,className:"gpt-slot"},o.adUnitCode))]})})},SA={labelBgColor:"--gpt-slot-label-bg-color"},Mi=`
  ${m0.darkStyles}
  ${SA.labelBgColor}: ${C.BLUE_GREY_04};
`,Gf=h(WV)`
  display: grid;
  justify-content: center;
  clear: both;
  grid-template-areas:
      ". ad-label-top ."
      "ad ad ad";
  padding-bottom: 30px;

  .label-top {
    grid-area: ad-label-top;
    font-size: 1.14rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: 1;
  }

  .gpt-slot {
    grid-area: ad;
    outline: solid 15px var(${SA.labelBgColor}, ${C.WARM_GREY_02});
  }
`,wA=h(Gf)`
  ${F0}
`,ts=wA,bA=h(wA)`
  padding-top: 7px;
`,Hf=h(Gf)`
  ${Mi}
  padding-top: 7px;
  background-color: ${C.WARM_GREY_02};
`,VV=e=>{const{slotId:t}=e.dataset,n=Eo(t);return s.jsx(ts,{slotConfig:n})},GV=({content:e,richTextElement:t})=>[Rn({selector:".placeholder-image > img",richTextElement:t,componentFn:hW}),Rn({selector:".image-gallery",richTextElement:t,componentFn:QW(e)}),Rn({selector:"video",richTextElement:t,componentFn:ZW(e)}),Rn({selector:"audio",richTextElement:t,componentFn:eV(e)}),Rn({selector:"blockquote.tweet",richTextElement:t,componentFn:lV}),Rn({selector:".yt-wrapper",richTextElement:t,componentFn:dV}),Rn({selector:".dw-widget",richTextElement:t,componentFn:KW(e)}),Rn({selector:"blockquote.instagram",richTextElement:t,componentFn:xV}),Rn({selector:"blockquote[data-facebook]",richTextElement:t,componentFn:CV}),Rn({selector:"blockquote.telegram",richTextElement:t,componentFn:jV}),Rn({selector:".rich-text-ad",richTextElement:t,componentFn:VV})].flatMap(n=>n.portals),Uw=[HW,XW,JW,YW],HV=({content:e,richTextRef:t})=>{const[n,r]=x.useState(null);return x.useLayoutEffect(()=>{if(t.current){const i=GV({content:e,richTextElement:t.current});r(i)}},[e.id]),n},QV=".rich-text button.feedback",qV=({richTextRef:e})=>{x.useEffect(()=>{var t;(t=e.current)==null||t.querySelectorAll(QV).forEach(n=>{n.addEventListener("click",()=>{n.dispatchEvent(new Event("openFeedback",{bubbles:!0}))})})},[])},YV=({caption:e,licenserSupplement:t,className:n})=>s.jsxs(Ky,{isA:"figcaption",className:n,children:[e,s.jsx(PU,{className:"copyright",licenserSupplement:t})]}),kA={background:"--image-basic-caption-background"},EA=`
  ${Ky.darkStyles}
  ${H0}
  ${kA.background}: ${C.DARK_BLUE_GREY_02};
`,$A=M`
  display: flow-root;
  width: 100%;
  padding: 10px 15px;
  font-size: 1.2rem;
  background-color: var(${kA.background}, ${C.BLUE_GREY_01});
  .copyright {
    font-size: 1.1rem;
    float: right;
    margin-left: 15px;
  }

  ${b.md`
    font-size: 1.3rem;
  `}
  ${b.lg`
    font-size: 1.5rem;
  `}
`,TA=h(YV)`
  ${$A}
`,Tn=A({name:"ContentDetailRichText",fragment(){return _`fragment ${this.name} on Content {
        ... on TextualAspect {
          text
        }
        ... on AssociationsAspect {
          contentLinks {
            targetId
            isInText
          }
        }
        ...${nw.name}
        ${Uw.map(e=>`...${e.name}`).join(`
`)}
    }
    ${nw.fragment()}
    ${Uw.reduce((e,t)=>_`
      ${e}
      ${t.fragment()}
    `,"")}
    `}}),KV=({content:e,richTextRef:t,replacePlaceholders:n=!0})=>{const r=HV({content:e,richTextRef:t});return n&&r},XV=({content:e,className:t,isA:n="div",replacePlaceholders:r})=>{const i=x.useRef();yC(e),fW({content:e,richTextRef:i}),qV({richTextRef:i}),pW(e);const{isEuropeanLang:o}=_n();return s.jsxs(gM,{children:[s.jsx(it,{isA:n,ref:i,dangerouslySetInnerHTML:{__html:e.text},className:H(t,"rich-text",{"has-italic":o})}),s.jsx(Sr,{children:s.jsx(KV,{content:e,richTextRef:i,replacePlaceholders:r})})]})},ZV=x.memo(XV),Je={linkUnderlineColor:"--rich-text-link-underline-color",floatingElementOuterSpacing:"--rich-text-floating-element-border-spacing",floatingElementTextSpacing:"--rich-text-floating-element-text-spacing",floatingElementWidth:"--rich-text-floating-element-width"},_A={background:"--detail-rich-text-image-background"},$o=`
  ${it.darkStyles};
  ${Je.linkUnderlineColor}: ${C.DW_GREY_06};
  ${_A.background}: ${C.BLUE_GREY_04};
  ${z_}
  ${EA}
`,CA=M`
  ${pa};
  ${lr.pangeaOpticalSize}: 20;
  font-size: 2rem;
  line-height: 1.1;
  margin-top: 30px;
  margin-bottom: 20px;
  ${b.md`
    font-size: 2.4rem;
  `}
  ${b.lg`
    font-size: 2.8rem;
  `}
`,JV=M`
  ${Je.floatingElementOuterSpacing}: 0px;
  ${Je.floatingElementTextSpacing}: 0px;
  ${Je.floatingElementWidth}: 100%;
  ${b.sm`
    ${Je.floatingElementOuterSpacing}: 30px;
    ${Je.floatingElementTextSpacing}: 15px;
    ${Je.floatingElementWidth}: 45%;
  `}
  ${b.md`
    ${Je.floatingElementOuterSpacing}: 24px;
    ${Je.floatingElementWidth}: 46%;
  `}
  ${b.lg`
    ${Je.floatingElementOuterSpacing}: 0px;
    ${Je.floatingElementWidth}: 41%;
  `}
`,eG=M`
  display: flow-root;
  font-size: 1.6rem;
  ${b.md`
    font-size: 1.8rem;
  `}
  word-break: break-word;
  & > h2 {
    ${CA}
  }
  ${F0}
  ${JV}

  &.has-italic .placeholder-image .img-caption .copyright {
      font-style: italic;
  }

  & > h3 {
    ${pa};
    font-size: 1.8rem;
    line-height: 1.1;
    margin-top: 24px;
    margin-bottom: 10px;
    ${b.md`
      font-size: 2rem;
    `}
    ${b.lg`
        font-size: 2.2rem;
    `}
  }

  p {
    margin-bottom: 20px;
  }

  button.feedback {
    background: none;
    border: none;
    padding: 0;
  }

  a, button.feedback {
    ${qy};
    ${U_}
    text-decoration: underline;
    text-decoration-color: var(${Je.linkUnderlineColor}, ${C.DW_GREY_09});
    &:visited, &:hover, &:active {
      text-decoration-color: currentColor;
    }
    &.external-link svg {
      margin: 0 0.35em 0.25em;
    }
    &.feedback svg {
      margin: 0 0.35em;
    }
  }

  *:is(ul, ol) {
    ${QM}
    padding-block: 0px;
    padding-inline: var(${Tt.listInlineStartSpacing}) var(${Tt.contentAreaInlineSpacing});
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  strong, ol {
    ${pa};
  }

  ol > li > span {
   ${Yy};
  }

  li {
    margin-bottom: 1em;
  }

  & > *:not(.placeholder-image, ul, ol, .embed) {
    padding: 0px var(${Tt.contentAreaInlineSpacing});
  }

  img {
    width: 100%;
    min-width: 100%;
  }

  .placeholder-image {
    width: 100%;
    margin-bottom: 1em;

    img {
      background-color: var(${_A.background}, ${C.BLUE_GREY_02});
    }
    .img-caption {
      word-wrap: break-word;
      hyphens: auto;
      ${$A}
    }
    &.big {
      .img-caption {
        ${b.sm`
          padding: 10px 40px;
        `}
        ${b.lg`
          padding: 10px 15px;
        `}
      }
    }
    &:not(.big) {
      width: var(${Je.floatingElementWidth});
      padding: 0px var(${Je.floatingElementOuterSpacing});
      box-sizing: content-box;
      float: left;
      &.left {
        padding-right: var(${Je.floatingElementTextSpacing});
      }
      &.right {
        float: right;
        padding-left: var(${Je.floatingElementTextSpacing});
      }
      ${b.sm`
        margin-top: 0.5em;
      `}
      &.legacy_daily_image_portrait {
        ${b.sm`
          width: 30%;
        `}
        ${b.md`
          width: 31%;
        `}
        ${b.lg`
          width: 25%;
        `}
      }

      &.legacy_daily_image_landscape {
        ${b.lg`
          width: 33%;
        `}
        ${b.xl`
          width: 25%;
        `}
      }
    }
  }
  .embed {
    width: 100%;
    max-width: 100vw;
    margin-bottom: 1em;
    clear: both;
  }

  .vjs-wrapper {
    display: flex;
    flex-direction: column-reverse;
    background: ${C.BLACK};
    .headline {
      ${pa}
      line-height: 1.1;
      letter-spacing: normal;
      color: ${C.WHITE};
      margin: 0;
      padding: 15px;
      ${dr.sm`
        font-size: 2.2rem;
      `}

      svg {
        ${Y2}
      }
    }
    :is(video, audio):not(.vjs-tech) {
      height: 56.25vw;

    }
    &.big {
      .headline {
        padding: 20px var(${Tt.contentAreaInlineSpacing});
      }
      :is(video, audio):not(.vjs-tech) {
        ${b.lg`
          height: 540px;
        `}
        ${b.xl`
          height: 624.375px;
        `}
      }
    }
    &:not(.big) {
      width: var(${Je.floatingElementWidth});
      margin-inline: var(${Je.floatingElementOuterSpacing});
      float: left;
      &.left {
        margin-right: var(${Je.floatingElementTextSpacing});
      }
      &.right {
        float: right;
        margin-left: var(${Je.floatingElementTextSpacing});
      }
      ${b.sm`
        margin-top: 0.5em;
        :is(video, audio):not(.vjs-tech) {
          height: 24.5vw;
        }
      `}

      :is(video, audio):not(.vjs-tech) {
        ${b.lg`
          height: 221px;
        `}
        ${b.xl`
          height: 256px;
        `}
      }
    }
  }
  .image-gallery {
    .cover {
      .text-overlay {
        .headline {
          font-size: 2.6rem;
          ${b.md`
            font-size: 2.8rem;
          `}
          ${b.lg`
            font-size: 3.2rem;
          `}
          ${b.xl`
          font-size: 3.6rem;
          `}

        }
      }
    }
    .text-overlay {
      .headline {
        margin: 0;
      }
    }

    ${b.xl`
      .control-bar-wrapper {
        max-width: 100%;
      }
      .text-overlay :is(.headline-container, .headline-wrapper, .description) {
        width: 100%;
      }
    `}
  }

`,tG=M`
  .yt-wrapper iframe {
    aspect-ratio: 16 / 9;
  }

  blockquote.fb-post,
  blockquote.fb-video,
  .instagram-oembed {
    display: flex !important;
    justify-content: center;
  }

  .instagram-oembed {
    overflow: auto;
  }

  ${dr.xs`
    blockquote.fb-post,
    blockquote.fb-video {
      & span {
        max-width: 100%;
      }
    }
    blockquote.fb-post,
    blockquote.fb-video,
    .tweet {
      & iframe {
        max-width: 100%;
      }
    }
  `}
`,To=h(ZV)`
  ${eG}
  ${tG}
`,zw=A({name:"SingleAuthor",fragment(){return _`fragment ${this.name} on Person {
        ...${fd.name}
        ...${cd.name}
      }
      ${cd.fragment()}
      ${fd.fragment()}
    `}}),nG=({className:e,person:t={}})=>s.jsxs("div",{className:e,children:[s.jsx(O0,{className:"author-image",person:t}),s.jsx("div",{className:"author-name",children:s.jsx(qC,{withShortProfile:!0,withTwitterLink:!0,person:t})})]}),rG=YC,iG=h(nG)`
  font-size: 1.3rem;
  padding-bottom: 20px;
  display: flex;

  .author-image {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    margin-top: 6px;
    margin-right: 15px;
  }
`,Ww=A({name:"AuthorInfo",fragment(){return _`fragment ${this.name} on AssociationsAspect {
        persons {
          id
          ...${zw.name}
        }
      }
      ${zw.fragment()}
    `}}),oG=({persons:e=[],className:t})=>{const n=e.length===1?"col-xl-6 one-author":"col-sm-6";return se(e)?s.jsx("div",{className:H(t,"row"),children:e.map(r=>s.jsx(iG,{className:H("col col-12",n,"author"),person:r},r.id))}):null},aG=rG,sG=h(oG)`
  margin-top: 15px;

  .author:last-child {
    padding-bottom: 0;
  }

  ${b.sm`
    .one-author {
      max-width: 510px;
    }
  `}

  ${b.md`
    .one-author {
      max-width: 570px;
    }
  `}

  ${b.lg`
    .one-author {
      max-width: 530px;
    }
  `}
`,lG=({className:e,...t})=>{const n=z("content_block_detail.feedback_button.label");return s.jsxs(br,{className:e,...t,children:[n,s.jsx(n7,{})]})},fv=h(lG)`
  ${b.sm`
    gap: 7px;
  `}
`;fv.darkStyles=br.darkStyles;const cG=()=>O.document.querySelector("div.feedback-sidebar .header .close-feedback-btn"),uG=()=>O.document.querySelector("div.feedback-elements button"),dG=()=>O.document.querySelector("div.feedback-elements .close-feedback-btn"),fG=()=>uG()||dG(),Vw=Object.freeze({BUTTON:"BUTTON",RICH_TEXT:"RICH_TEXT"}),AA=({feedbackTypes:e,isLive:t})=>{const n=Va(),r=t||n,i=r&&e.includes(Vw.BUTTON),o=r&&e.includes(Vw.RICH_TEXT);return{showFeedbackButton:i,hasFeedbackInRichText:o,hasFeedback:i||o}},nee=e=>{cf(e)&&(e.preventDefault(),cG().focus())},pG=e=>{c_(e)&&(e.preventDefault(),fG().focus())},mG=({className:e,children:t,isFeedbackOpen:n=!1,onCloseFeedback:r=Te})=>{const i=z("component.feedback_form.layer.headline"),o=z("component.feedback_form.layer.close_button.label"),a=x.useRef(null),[,{toggleScrollLockAndSetWidth:l}]=zy();return x.useEffect(()=>{l({isScrollDisabled:n,ref:a.current})},[l,n]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:H(e,"feedback-sidebar",{opened:n}),ref:a,"aria-hidden":!n,tabIndex:-1,children:[s.jsxs("div",{className:"header",children:[s.jsx(kr,{className:"headline",children:i}),s.jsx(ht,{className:"close-feedback-btn",title:o,onClick:r,onKeyDown:pG,tabIndex:n?0:-1,children:s.jsx(QF,{})})]}),s.jsx("div",{className:"feedback-elements",children:t})]}),s.jsx(V_,{className:`${e} backdrop`,show:n,onClick:r})]})},pv=h(mG)`
  &.feedback-sidebar {
    position: fixed;
    z-index: 11;
    background-color: ${C.DW_GREY_01};
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 300ms cubic-bezier(0.43,0,0.09,1) 0s;
    outline: none;
  }

  &.feedback-sidebar.opened {
    transform: translateX(0);
    transition: transform 500ms cubic-bezier(0.43,0,0.09,1) 0s;
  }

  .header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${C.BLUE_GREY_01};
    padding: 10px 8px 10px 15px;
    z-index: 1;

    &:after {
      content: "";
      height: 1px;
      background-color: ${C.DW_GREY_07};
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 0;
    }
  }

  .headline {
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 0.12rem;
  }

  .close-feedback-btn {
    svg path {
      stroke: ${C.DW_BLUE};
    }
  }

  &.backdrop {
    z-index: 10;
  }

  ${b.sm`
    .header {
      padding-left: 45px;

      &:after {
        left: 45px;
        right: 45px;
      }
    }
  `}

  ${b.md`
    &.feedback-sidebar {
      width: 600px;
    }

    .header {
      padding-right: 14px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  `}

  ${b.lg`
    .header {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  `}
`;pv.darkStyles="";const{DwFeedbackFormWithSubmitAndTheme:hG}=ne(()=>J(()=>import("./index-af3e356a.js"),["static/index-af3e356a.js","static/hoist-non-react-statics.cjs-e0bc5fbc.js"]),{fallback:s.jsx(I2,{})}),hd={openFeedback:"OPEN_FEEDBACK",closeFeedback:"CLOSE_FEEDBACK"},Gw=A({name:"Feedback",fragment(){return _`fragment ${this.name} on Content {
      ... on AssociationsAspect {
        firstNavArray: navigations(amount: 1) {
          feedbackEmail
        }
      }
      ... on FeedbackAspect {
        feedbackTypes
      }
      ... on UrlAspect {
        namedUrl
      }
      ... on ModelAspect{
        isLive
      }
    }
    `}}),LA=Object.freeze({isFeedbackOpen:!1,hasUpload:!1,openingElementId:null,prefilledContent:{}}),gG=(e,t)=>{switch(t.type){case hd.openFeedback:{const{prefilledContent:n,openingElementId:r,hasUpload:i}=t.payload;return{isFeedbackOpen:!0,prefilledContent:n,hasUpload:i,openingElementId:r}}case hd.closeFeedback:return LA;default:return console.error(`Unhandled action type in feedback form: ${t.type}`),e}},yG=()=>{const[{isFeedbackOpen:e,prefilledContent:t,hasUpload:n,openingElementId:r},i]=x.useReducer(gG,LA);return[{isFeedbackOpen:e,prefilledContent:t,hasUpload:n},{openFeedback:({prefilledData:l={},upload:c,elementId:u=Me.feedbackForm.openBtn}={})=>{i({type:hd.openFeedback,payload:{prefilledContent:l,hasUpload:c==="true",openingElementId:u}})},closeFeedback:()=>{i({type:hd.closeFeedback}),e2(r)}}]},vG=e=>{const t=n=>{const{subject:r,message:i,upload:o}=n.target.dataset,a=n.target.getAttribute("id");e({prefilledData:{subject:r,message:i},upload:o,elementId:a})};vn(O.document,"openFeedback",t)},xG=({className:e,content:t})=>{const{showFeedbackButton:n}=AA(t),[{isFeedbackOpen:r,prefilledContent:i,hasUpload:o},{openFeedback:a,closeFeedback:l}]=yG();return vG(a),s.jsxs("div",{className:e,children:[n&&s.jsx(Di,{children:s.jsx(fv,{onClick:a,id:Me.feedbackForm.openBtn,"data-focusdelay":"600"})}),s.jsx(pv,{isFeedbackOpen:r,onCloseFeedback:l,children:r&&s.jsx(hG,{content:t,onCloseFeedback:l,prefilledContent:i,hasUpload:o})})]})},SG=`
  ${fv.darkStyles}
  ${pv.darkStyles}
`,wG=h(xG)``,mr=A({name:"ContentDetailFooter",fragment(){return _`fragment ${this.name} on Content {
            ... on ContactAspect {
              contactType
            }
            ...${Ww.name}
            ...${Gw.name}
        }
        ${Ww.fragment()}
        ${Gw.fragment()}
    `}}),bG=e=>!!e.shortProfile,kG=({content:e,className:t})=>{const{persons:n=[]}=e,r=n.filter(bG),i=se(r),{hasFeedback:o}=AA(e);return!i&&!o?null:s.jsxs("footer",{className:t,children:[i&&s.jsx(sG,{persons:r}),o&&s.jsx(wG,{content:e,className:H("feedback",{"authors-shown":i})})]})},ic=`
  ${aG}
  ${SG}
`,oc=h(kG)`
  border-top: 0.1px solid ${C.DW_GREY_03};
  margin-bottom: 40px;

  .feedback {
    margin-top: 15px;

    &.authors-shown {
      margin-top: 30px;
    }
  }
`,Hw=A({name:"ContentDetailActionsSocialMediaIconLink",fragment(){return _`fragment ${this.name} on SocialMediaEntry {
          id
          name
          url
        }
    `}}),EG=({socialMediaEntry:e,contentUrl:t,className:n,...r})=>{const i=z({key:"component_detail.detail_actions.service.label",parameters:{service:e.name}}),o=Hy(e.url,{contentUrl:t});return s.jsx(A2,{className:n,socialMediaId:e.id,url:o,title:i,...r})},$G=C2,Jp=h(EG)`
`,TG=e=>{O.navigator.clipboard.writeText(e)},_G=e=>{const t=O.document.getSelection(),n=O.document.createRange();t.removeAllRanges(),n.selectNode(e),t.addRange(n),O.document.execCommand("copy"),t.removeAllRanges()},CG=()=>!!(O.navigator.clipboard||O.document.queryCommandSupported&&O.document.queryCommandSupported("copy"));class AG extends x.Component{constructor(n){super(n);Zf(this,"triggerCopy",()=>O.navigator.clipboard?TG(this.props.textToCopy):_G(this.textContainerRef.current));this.textContainerRef=x.createRef()}render(){const{children:n,className:r}=this.props;return s.jsxs(s.Fragment,{children:[s.jsx("span",{ref:this.textContainerRef,className:r,children:this.props.textToCopy}),s.jsx(Sr,{children:n({triggerCopy:this.triggerCopy,isSupportedByBrowser:CG})})]})}}const LG=h(AG)`
  clip: rect(0, 0, 0, 0);
  position: fixed;
  top: 0;
  user-select: text;
  white-space: pre;
`,IG=({textToCopy:e,className:t,...n})=>{const[r,{toggleOnClick:i}]=rc(),o=z(`component_detail.detail_actions.${r?"link_copied":"copy_link"}`);return s.jsx(LG,{textToCopy:e,children:({triggerCopy:a,isSupportedByBrowser:l})=>l()?s.jsxs(br,{className:t,onClick:()=>{a(),i()},...n,children:[s.jsx(f7,{className:"link-icon"}),o]},r):null})},IA=br.darkStyles,jA=h(IG)`
  .link-icon {
    path {
      stroke: none;
    }
  }
`,jG=({className:e,onClick:t,title:n,isOpen:r})=>s.jsx(e0,{className:e,onClick:t,title:n,"aria-expanded":r,children:s.jsx(Ml,{pointsDown:!r})}),OG=`
  ${e0.darkStyles}
`,RG=h(jG)``,DG=A({name:"ContentDetailActions",fragment(){return _`fragment ${this.name} on Content {
          ... on ModelAspect {
            isLive
            id
          }
          ... on UrlAspect {
            permaLinkUrl
            namedUrl
          }
          ... on NamedAspect {
            title
          }
          ... on SocialMediaAspect {
            socialMediaConfig {
              id
              ...${Hw.name}
            }
          }
        }
      ${Hw.fragment()}
    `}}),NG=({content:e={},isInHeader:t=!1,className:n,innerRef:r})=>{const{title:i,isLive:o,socialMediaConfig:a,permaLinkUrl:l,namedUrl:c}=e,{origin:u}=ho().window.location,d=`${u}${c}`,[f,{toggleOnClick:p}]=rc(),m=z(`component_detail.detail_actions.toggle_button.label.${f?"close":"open"}`),S=t?"in-header":"in-line",[w,E,...g]=a||[],y=f?"open":"closed",v=f?0:-1,k=t?"sharing-icons-header":"sharing-icons-inline";return s.jsxs("section",{ref:r,className:H(n,S,y),"data-tracking-name":k,children:[s.jsxs("div",{className:"always-visible",children:[s.jsx(Jp,{socialMediaEntry:w,contentUrl:d}),s.jsx(Jp,{socialMediaEntry:E,contentUrl:d}),s.jsx(RG,{className:"more-icon icon",toggableClassName:y,onClick:p,title:m,isOpen:f}),t&&i?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"separator"}),s.jsx(Ft,{className:"content-title",children:i})]}):null]}),s.jsx("div",{className:`more ${y}`,children:g.map(T=>s.jsx(Jp,{socialMediaEntry:T,isHidden:!f,contentUrl:d,tabIndex:v},T.id))}),s.jsx("div",{className:`copy-button-wrapper ${y}`,children:s.jsx(jA,{textToCopy:o&&S6(e)?l:d,className:`${y}`,tabIndex:v})})]})},PG=`
  ${$G}
  ${OG}
  ${IA}
`,FG=M`
  &.in-line {
    max-width: 300px;
    margin: 20px auto;
    
    &.open {
      row-gap: 8.5px;
    }
    
    :is(.always-visible, .more) {
      column-gap: 6.25px;
    }
    a,.icon {
      width: 55px;
    }
  }
`,MG=M`
  &.in-line {
    max-width: 340px;
    :is(.always-visible, .more) {
      column-gap: 10px;
    }

    a,.icon {
      width: 60px;
    }

    .more-icon svg {
      width: 45px;
    }

  }
`,BG=M`
  &.in-line {
    max-width: 100%;
    align-items: flex-start;

    a,.icon {
     width: 40px;
    }

    .more-icon svg {
      width: 25px;
    }
  }
`,UG=M`
  .always-visible {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: inherit;
    justify-content: center;
    align-items: center;
  }
`,zG=M`
  .always-visible {
    width: 100%;
    justify-content: flex-start;
  }
`,WG=M`
  a, .icon {
    width: 40px;
    flex-shrink: 1;
  }
`,OA=M`
  .sharing-icons {
    width: 100%;
  }
`,mv=h(NG)`
  display: flex;
  flex-direction: column;
  min-height: inherit;

  ${UG}

  ${WG}

  .content-title,
  .separator,
  .print-icon {
    display: none;
  }

  &.in-header {
    width: 100%;
    &.open {
      row-gap: 7.5px;
    }
    transition: margin-bottom 170ms cubic-bezier(0, 0, 0.09, 1) 33ms;

    .always-visible {
      column-gap: 5px;
      min-height: ${ae.xs.thin}px;
    }

    &.open {
      margin-bottom: 15px;
    }

    .more {
      a,.icon {
        text-align: center;
        width: 20%;
        svg {
          max-width: 40px;
        }
      }
    }

    .more-icon svg {
      width: 25px;
    }
  }

  ${FG}

  .more {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    &.open {
      max-height: 500px;
      transition: max-height 170ms cubic-bezier(0, 0, 0.09, 1) 33ms, opacity 170ms cubic-bezier(0.43, 0, 0.09, 1) 33ms;
    }
    &.closed {
      max-height: 0;
      opacity: 0;
      transition: max-height 150ms cubic-bezier(0, 0, 0.09, 1) 50ms, opacity 100ms cubic-bezier(0.43, 0, 0.09, 1) 50ms;
    }
  }

  .copy-button-wrapper {
    overflow: hidden;
    & > div[role="button"] {
      width: 100%;
    }
    &.open {
      margin-top: 4px;
      max-height: 100px;
      transition: margin-top 215ms cubic-bezier(0.43, 0, 0.09, 1) 33ms, max-height 215ms cubic-bezier(0.43, 0, 0.09, 1) 33ms, opacity 200ms cubic-bezier(0.43, 0, 0.09, 1) 75ms;
    }
    &.closed {
      max-height: 0;
      opacity: 0;
      transition: margin-top 170ms cubic-bezier(0.43, 0, 0.09, 1), max-height 170ms cubic-bezier(0.43, 0, 0.09, 1), opacity 170ms cubic-bezier(0.43, 0, 0.09, 1);
    }
  }

  ${b.sm`
    &.in-header {
      .more {
        column-gap: 5px;
        a,.icon {
          width: 40px;
        }
      }
    }

    ${MG}
  `}

  ${b.md`
    &.in-header {
      .copy-button-wrapper {
        align-self: flex-start;
      }

      .always-visible {
         min-height: ${ae.md}px;
      }
    }

    ${BG}

    ${zG}

    .print-icon {
      display: inline-block;
    }

    .content-title {
      display: block;
      font-size: 1.8rem;
      white-space: nowrap;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }

    .separator {
      display: inline-block;
      margin-left: 1.2%;
      margin-right: 3.6%;
      height: 28px;
      border-right: 1px solid ${C.DW_GREY_08};
    }
  `}

  ${b.lg`
    &.in-header {
      .always-visible {
        min-height: ${ae.lg}px;
      }
    }

    .separator {
      margin-left: 1.4%;
      margin-right: 2.6%;
    }
  `}

  ${b.xl`
    .separator {
      margin-left: 8px;
      margin-right: 19px;
    }
  `}
`,VG="0px 0px 0px",em=e=>`-${e}px ${VG}`,hv=(e={})=>{const t=Wa(),n=c0(e.topStoriesNavigation),r=t<=B.max.sm;return t>=B.min.lg?em(ae.lg):em(r?n?ae.xs.wide:ae.xs.thin:ae.md)},Hn=DG,ns=PG,rs=({content:e,className:t,onChangeInViewListenerForHeaderSwitch:n})=>{const r=hv(e),{isMobileMode:i}=At();return i?null:s.jsx(ry,{onChange:n,rootMargin:r,children:({ref:o})=>s.jsx(mv,{innerRef:o,content:e,className:t})})},gd=G0,GG=({content:e={},className:t})=>{var l;const n=b0(e);if(!n)return null;const r=(l=e==null?void 0:e.mainContentImageLink)==null?void 0:l.target,i=P2(n==null?void 0:n.imageType),o=n.caption||n.licenserSupplement,a=i||a2(e)?So:B9;return s.jsxs("figure",{className:t,children:[s.jsx(Yl,{image:r,alt:n.alt,formatConfig:a}),o&&s.jsx(TA,{caption:n.caption,licenserSupplement:n.licenserSupplement})]})},RA=h(GG)`
  ${F0}
  margin-top: 20px;
  margin-bottom: 20px;
`,HG=Object.freeze({[me.Audio]:U0,[me.Video]:bl,[me.Livestream]:bl}),Xh=A({name:"VideoHeroPlayer",fragment(){return _`fragment ${this.name} on Video {
            ...${Gn.name}
            ...${co.name}
            ...${$n.name}
            title
        }
        ${Gn.fragment()}
        ${co.fragment()}
        ${$n.fragment()}
    `}}),Zh=A({name:"AudioHeroPlayer",fragment(){return _`fragment ${this.name} on Audio {
            ...${Gn.name}
            ...${lo.name}
            ...${$n.name}
            title
        }
        ${Gn.fragment()}
        ${lo.fragment()}
        ${$n.fragment()}
    `}}),QG=({children:e,content:t,className:n,titleIsA:r="h1"})=>{const{title:i}=t,o=Af(t.__typename,i),a=HG[t.__typename];return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:n,children:s.jsxs("div",{className:"av-wrapper",children:[s.jsx("div",{className:"badge",children:s.jsx(jf,{content:t})}),s.jsx(kl,{tabIndex:-1,className:"sr-only",content:t}),s.jsx(lv,{isA:r,className:"headline","aria-label":o,contentType:t.__typename,title:i}),s.jsx(a,{className:"av-player",content:t,isHero:!0}),s.jsx(kl,{className:"av-kicker","aria-hidden":"true",content:t})]})}),e]})},Qf=h(QG)`
  ${zf}
  background-color: ${C.DARK_BLUE_GREY_02};

  .av-wrapper {
    display: flex;
    flex-direction: column;
    background-color: ${C.BLACK};
    padding-bottom: 20px;
  }

  .sr-only {
    ${ko}
  }

  .av-player {
    order: 1;
    margin-bottom: 20px;

    audio {
      padding-top: 56.25%;
    }
  }

  .badge {
    order: 2;
  }

  .av-kicker {
    order: 3;
    margin-bottom: 12px;
  }

  .headline {
    order: 4;
  }

  .av-kicker, .headline, .badge {
    ${Za}
  }

  ${b.xl`
    .av-wrapper {
      ${tc}
    }
  `}
`,yd=A({name:"LivestreamContentHero",fragment(){return _`fragment ${this.name} on Content {
          ... on NamedAspect {
            title
          }
          ... on AssociationsAspect {
            mainContentImageLink {
              target {
                ...on Image {
                  staticUrl
                }
              }
            }
            livestreams {
              id
              hlsVideoSrc: url
              name
              trackingId
              trackingCategories
              trackingContentType
              trackingDate
            }
          }
          ...${$n.name}
        }
        ${$n.fragment()}
    `}}),DA=({children:e,content:t,className:n})=>{var a,l;const r=t.livestreams[0],i=t.mainContentImageLink?si((l=(a=t.mainContentImageLink)==null?void 0:a.target)==null?void 0:l.staticUrl,zr["60X"].formats[5]):"",o={...r,title:t.title,trackingLanguageCode:t.trackingLanguageCode,namedUrl:t.namedUrl,thematicFocusCategory:t.thematicFocusCategory,firstRegionArray:t.firstRegionArray,posterImageUrl:i,priority:t.priority,isLiveVideo:t.isLiveVideo};return s.jsxs(s.Fragment,{children:[s.jsx(Qf,{className:n,content:o}),e]})},qG=A({name:"ArticleDetails",fragment(){return _`fragment ${this.name} on Article {
            hasMinTextLength
            isLiveVideo
            ...${gd.name}
            ...${pd.name}
            ...${Ow.name}
            ...${_i.name}
            ...${Tn.name}
            ...${mr.name}
            ...${Hn.name}
            ...${U.opinionFragment.name}
            ...${yd.name}
        }
        ${gd.fragment()}
        ${pd.fragment()}
        ${Ow.fragment()}
        ${_i.fragment()}
        ${Tn.fragment()}
        ${mr.fragment()}
        ${Hn.fragment()}
        ${U.opinionFragment.fragment()}
        ${yd.fragment()}
    `}}),tm={Default:{DetailHeader:JC,hasHeroImg:!0},Opinion:{DetailHeader:cW},LiveVideo:{HeroCmpOverwrite:DA,DetailHeader:Wf}},YG=({content:e})=>{const{isOpinion:t=!1,isLiveVideo:n=!1}=e;return n?tm.LiveVideo:t?tm.Opinion:tm.Default},KG=({content:e={},className:t,onChangeInViewListenerForHeaderSwitch:n})=>{const{DetailHeader:r,HeroCmpOverwrite:i,hasHeroImg:o}=YG({content:e}),{hasMinTextLength:a}=e;return s.jsxs(es,{className:t,HeroCmp:i,heroCmpProps:i&&{content:e},children:[s.jsx(r,{content:e}),s.jsx(rs,{content:e,onChangeInViewListenerForHeaderSwitch:n}),o&&s.jsx(RA,{content:e}),s.jsx(ts,{slotConfig:VC}),s.jsx(To,{content:e}),s.jsx(oc,{content:e}),a&&s.jsx(bA,{slotConfig:GC})]})},XG=`
  ${ZC}
  ${lW}
  ${sv}
  ${ns}
  ${$o}
  ${ic}
  ${Mi}
`,ZG=h(KG)`
`,Qw=A({name:"VideoOpenGraphMetadata",fragment(){return _`fragment ${this.name} on OpenGraphAspect {
      openGraphMetadata {
        url
        width
        height
        duration
      }
    }
    `}}),JG=({content:e})=>{if(!e.openGraphMetadata)return null;const{url:t,width:n,height:r,duration:i}=e.openGraphMetadata;return s.jsxs(mt,{children:[s.jsx("meta",{property:"og:video",content:t}),s.jsx("meta",{property:"og:video:secure_url",content:t}),s.jsx("meta",{property:"og:type",content:"video.episode"}),s.jsx("meta",{property:"og:video:type",content:"video/mp4"}),s.jsx("meta",{property:"og:video:width",content:n}),s.jsx("meta",{property:"og:video:height",content:r}),s.jsx("meta",{property:"og:video:duration",content:i})]})},eH=A({name:"VideoDetails",fragment(){return _`fragment ${this.name} on Video {
            ...${Xh.name}
            ...${_i.name}
            ...${Tn.name}
            ...${Hn.name}
            ...${mr.name}
            ...${Qw.name}
            title
        }
        ${Xh.fragment()}
        ${_i.fragment()}
        ${Tn.fragment()}
        ${Hn.fragment()}
        ${mr.fragment()}
        ${Qw.fragment()}
    `}}),tH=({content:e={},className:t,onChangeInViewListenerForHeaderSwitch:n})=>s.jsxs(es,{className:t,heroCmpProps:{content:e},HeroCmp:Qf,children:[s.jsx(JG,{content:e}),s.jsx(Wf,{content:e}),s.jsx(rs,{content:e,onChangeInViewListenerForHeaderSwitch:n}),s.jsx(ts,{slotConfig:rv}),s.jsx(To,{content:e}),s.jsx(oc,{content:e})]}),nH=`
  ${sv}
  ${ns}
  ${Mi}
  ${$o}
  ${ic}
`,rH=h(tH)`
`,qw=A({name:"AudioOpenGraphMetadata",fragment(){return _`fragment ${this.name} on OpenGraphAspect {
      openGraphMetadata {
        url
      }
    }
    `}}),iH=({content:e})=>{if(!e.openGraphMetadata)return null;const{url:t}=e.openGraphMetadata;return s.jsxs(mt,{children:[s.jsx("meta",{property:"og:audio:type",content:"audio/mpeg"}),s.jsx("meta",{property:"og:audio",content:t}),s.jsx("meta",{property:"og:audio:secure_url",content:t})]})},oH=A({name:"AudioDetails",fragment(){return _`fragment ${this.name} on Audio {
            ...${Zh.name}
            ...${_i.name}
            ...${Tn.name}
            ...${Hn.name}
            ...${mr.name}
            ...${qw.name}
            title
        }
        ${Zh.fragment()}
        ${_i.fragment()}
        ${Tn.fragment()}
        ${Hn.fragment()}
        ${mr.fragment()}
        ${qw.fragment()}
    `}}),aH=({content:e={},className:t,onChangeInViewListenerForHeaderSwitch:n})=>s.jsxs(es,{className:t,heroCmpProps:{content:e},HeroCmp:Qf,children:[s.jsx(iH,{content:e}),s.jsx(Wf,{content:e}),s.jsx(rs,{content:e,onChangeInViewListenerForHeaderSwitch:n}),s.jsx(ts,{slotConfig:rv}),s.jsx(To,{content:e}),s.jsx(oc,{content:e})]}),sH=`
  ${sv}
  ${ns}
  ${$o}
  ${ic}
  ${Mi}
`,lH=h(aH)`
`,Yw=A({name:"ImageGalleryDetailsHeader",fragment(){return _`fragment ${this.name} on ImageGallery {
            ...${Ti.name}
            ...${pr.name}
            ...${$n.name}
        }
        ${Ti.fragment()}
        ${pr.fragment()}
        ${$n.fragment()}
    `}}),cH=({content:e,className:t})=>s.jsxs("header",{className:t,children:[s.jsx(kl,{content:e}),s.jsx(Bf,{content:e}),s.jsx(nc,{className:"time-area",content:e})]}),uH=`
  ${zf}
  ${Mf}
  ${Uf}
`,dH=h(cH)`
  .time-area {
    margin-top: 5px;
  }
`,fH=A({name:"ImageGalleryDetails",fragment(){return _`fragment ${this.name} on ImageGallery {
            ...${md.name}
            ...${Yw.name}
            ...${Tn.name}
            ...${Hn.name}
            ...${mr.name}
        }
        ${md.fragment()}
        ${Yw.fragment()}
        ${Tn.fragment()}
        ${Hn.fragment()}
        ${mr.fragment()}
    `}}),pH=({content:e,children:t})=>s.jsxs(s.Fragment,{children:[s.jsx(pA,{imageGallery:e}),t]}),mH=({content:e={},className:t,onChangeInViewListenerForHeaderSwitch:n})=>s.jsxs(es,{className:t,heroCmpProps:{content:e},HeroCmp:pH,children:[s.jsx(dH,{content:e}),s.jsx(rs,{content:e,onChangeInViewListenerForHeaderSwitch:n}),s.jsx(ts,{slotConfig:rv}),s.jsx(To,{content:e}),s.jsx(oc,{content:e})]}),hH=`
  ${uH}
  ${ns}
  ${Mi}
  ${$o}
  ${ic}
`,gH=h(mH)`
`,Kw=Tn,yH=({content:e,className:t})=>s.jsx(Jt,{className:t,headlineTranslation:"content_block_detail.live_blog_overview.headline",headlineIsA:"h2",pageSectionId:"live-blog-rich-text-overview",children:s.jsx(To,{content:e})}),NA={background:"--liveblog-rich-text-background"},vH=`
${$o}
${NA.background}: ${C.DARK_BLUE_GREY_02};
`,xH=h(yH)`
  background-color: var(${NA.background}, ${C.BLUE_GREY_01});

  .content-block {
    padding-left: 15px;
    padding-right: 15px;
  }

  .rich-text > *:last-child {
    margin-bottom: 0;
  }
`,Xw=A({name:"LiveblogPostHeader",fragment(){return _`fragment ${this.name} on LiveblogElement {
          title
          ...${pr.name}
          ...${Ti.name}
        }
        ${pr.fragment()}
        ${Ti.fragment()}
    `}}),SH=({content:e,className:t})=>s.jsxs("div",{className:t,children:[s.jsx(av,{className:"time-area",content:e}),s.jsx(yo,{isA:"h2",children:e.title}),s.jsx(Bf,{content:e,className:"author-details"})]}),PA=`
  ${yo.darkStyles}
  ${av.darkStyles}
  ${Mf}
`,FA=h(SH)`
  h2 {
    ${CA}
    margin-bottom: 0;
    margin-top: 10px;
  }

  .time-area {
    & > * {
      font-size: 1.6rem;
    }
  }

  .author-details {
    margin-top: 15px;
  }
`;FA.darkStyles=PA;const Zw=A({name:"LiveblogPostActions",fragment(){return _`fragment ${this.name} on LiveblogElement {
        permaLinkUrl  
      }
    `}}),wH=({className:e,content:t})=>{const{permaLinkUrl:n}=t;return s.jsx(Di,{align:"start",children:s.jsx(jA,{className:e,textToCopy:n})})},bH=IA,kH=h(wH)` 
  && {
    margin: 30px 0 20px 0;
  }
`,vd=A({name:"LiveblogPost",fragment(){return _`fragment ${this.name} on LiveblogElement {
        id
        title
        ...${Xw.name}
        ...${Tn.name}
        ...${Zw.name}
      }
      ${Xw.fragment()}
      ${Tn.fragment()}
      ${Zw.fragment()}
    `}}),EH=({content:e,className:t})=>{const{id:n,title:r}=e,i=`liveblog-post-${n}`;return s.jsxs(Ef,{className:t,pageSectionId:i,sectionTitle:r,children:[s.jsx(FA,{content:e}),s.jsx(To,{className:"post-rich-text",content:e}),s.jsx(kH,{content:e})]})},gv={background:"--liveblog-post-background"},yv=`
  ${PA}
  ${$o}
  ${bH}
  ${gv.background}: ${C.DW_GREY_14};
`,$H=M`
  .vjs-wrapper {
    background-color: var(${gv.background}, ${C.WHITE});
    .headline {
      background-color: ${C.BLACK};
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .image-gallery {
    .headline-container, .headline-background-container, .description-container {
      & > * {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    .headline-container h3 {
      padding-left: 0;
      padding-right: 0;
    }
  }

  ${b.sm`
    .placeholder-image, .embed {
      padding: 0px ${Mc.sm}px;
    }
  `}

  ${b.md`
    .placeholder-image, .embed {
      padding: 0px ${Mc.md}px;
    }
  `}

  ${b.lg`
    .placeholder-image, .embed {
      padding: 0px ${Mc.lg}px;
    }
  `}

  ${b.xl`
    .placeholder-image, .embed {
      padding: 0px ${Mc.xl}px;
    }
  `}

`,vv=h(EH)`
  background-color: var(${gv.background}, ${C.WHITE});
  scroll-margin-top: 200px;

  .post-rich-text {
    margin-top: 20px;
    ${$H}
  }

  .rich-text > *:last-child {
    margin-bottom: 0;
  }
`;vv.darkStyles=yv;const Jh=15,Jw=A({name:"ExpandableLiveblogPostList",fragment(){return _`fragment ${this.name} on Liveblog {
        posts {
          id
          ...${vd.name}
        }
      }
      ${vd.fragment()}
    `}}),TH=()=>{const[{hash:e}]=De();return+e.replace("#","").split("-").reverse()[0]},_H=e=>{const[t,n]=x.useState(Jh),r=TH();return x.useEffect(()=>{const i=e.findIndex(o=>o.id===r);i>Jh&&n(i+1)},[]),t},CH=({content:e={},className:t})=>{const n=_H(e.posts);return s.jsx(Ja,{dataArray:e.posts,className:t,initialListCount:n,stepMoreAmount:Jh,showMoreBtnTranslation:"component_detail.liveblog_detail.show_more_posts",focusContainerClass:"liveblog-post",children:r=>r.map(i=>s.jsx(vv,{className:"liveblog-post",content:i},i.id))})},MA={borderColor:"--liveblog-post-bottom-border-color"},AH=`
  ${MA.borderColor}: ${C.DW_GREY_08};
`,LH=h(CH)`
  .liveblog-post {
    &:not(:last-of-type)::after {
      content: "";
      width: 60%;
      height: 1px;
      background-color: var(${MA.borderColor}, ${C.DW_GREY_05});
      display: block;
      margin: 50px auto;
    }
}
`,IH=A({name:"LiveblogDetails",fragment(){return _`fragment ${this.name} on Liveblog {
            hasMinTextLength
            isLiveVideo
            ...${Kw.name}
            ...${mr.name}
            ...${Hn.name}
            ...${U.opinionFragment.name}
            ...${Jw.name}
            ...${yd.name}
            ...${_i.name}
            ...${gd.name}
            ...${pd.name}
        }
        ${Kw.fragment()}
        ${mr.fragment()}
        ${Hn.fragment()}
        ${Jw.fragment()}
        ${U.opinionFragment.fragment()}
        ${yd.fragment()}
        ${_i.fragment()}
        ${gd.fragment()}
        ${pd.fragment()}
    `}}),eb={Default:{DetailHeader:JC,hasHeroImg:!0},LiveVideo:{HeroCmpOverwrite:DA,DetailHeader:Wf}},jH=({content:e={},className:t,onChangeInViewListenerForHeaderSwitch:n})=>{const{hasMinTextLength:r,isLiveVideo:i}=e,{DetailHeader:o,HeroCmpOverwrite:a,hasHeroImg:l}=i?eb.LiveVideo:eb.Default;return s.jsxs(es,{className:t,HeroCmp:a,heroCmpProps:a&&{content:e},children:[s.jsx(o,{content:e}),s.jsx(rs,{content:e,onChangeInViewListenerForHeaderSwitch:n}),l&&s.jsx(RA,{content:e}),s.jsx(ts,{slotConfig:VC}),s.jsx(xH,{className:"liveblog-rich-text",content:e}),s.jsx(LH,{content:e}),s.jsx(oc,{className:"footer",content:e}),r&&s.jsx(bA,{slotConfig:GC})]})},OH=`
  ${ZC}
  ${ns}
  ${Mi}
  ${vH}
  ${yv}
  ${AH}
  ${ic}
`,RH=h(jH)`
  .liveblog-rich-text {
    margin: 20px -15px 50px;
  }

  .footer {
    margin-top: 30px;
  }
`,BA=({isA:e="div",className:t,children:n})=>{const r=e;return s.jsx(r,{className:t,children:n})},DH=h(BA)`
    color: white;
    background-color: #CED4D6;
    height: 100%;
    text-align: center;
    overflow: hidden;
`;h(DH)`
    padding-right: 5px;
    padding-left: 5px;
    margin-right: 15px;
    margin-left: 15px;
`;const NH={name:"",fragment(){return""}},eg={[me.Article]:{component:ZG,fragment:qG},[me.Audio]:{component:lH,fragment:oH},[me.Video]:{component:rH,fragment:eH},[me.ImageGallery]:{component:gH,fragment:fH},[me.Liveblog]:{component:RH,fragment:IH},Unknown:{component:BA,fragment:NH}},PH=({type:e})=>eg[e].fragment,FH=({content:e={},...t})=>{const r=(eg[e.__typename]||eg.Unknown).component;return s.jsx(r,{content:e,...t})},MH=`
  ${XG}
  ${sH}
  ${nH}
  ${hH}
  ${OH}
`,BH=e=>e.boundingClientRect.top-Math.abs(e.rootBounds.top)<0,UH=e=>O.window.scrollY>e.target.offsetTop,zH=({entry:e})=>BH(e)&&UH(e),_o=({initHasLeftViewport:e=!1}={})=>{const t=x.useRef(!1),n=x.useRef(!1),[r,i]=x.useState(e),o=({inViewport:l})=>{t.current=!0,n&&l&&i(!1)},a=({entry:l})=>{t.current=!1,O.window.setTimeout(()=>{n.current=zH({entry:l}),n.current&&i(!0)},0)};return[{hasLeftViewport:r,onChangeInViewListenerForHeaderSwitch:(l,c)=>{!t.current&&l&&o({inViewport:l}),c&&!l&&a({entry:c})}}]},{StyledBetaLayer:WH}=ne(()=>J(()=>import("./index-38a47fba.js"),["static/index-38a47fba.js","static/ModalLayerLayout.cd23-ffaa32fe.js"]),{fallback:null}),{StyledLiveWelcomeLayer:VH}=ne(()=>J(()=>import("./LiveWelcomeLayer.cd23-2ae9af80.js"),["static/LiveWelcomeLayer.cd23-2ae9af80.js","static/ModalLayerLayout.cd23-ffaa32fe.js"]),{fallback:null}),{StyledGdpr:GH}=ne(()=>J(()=>import("./Gdpr.cmpLive-1cf1a23d.js"),[]),{fallback:null}),tb=A({name:"BetaLayer",fragment(){return _`fragment ${this.name} on Content {
      ... on UrlAspect {
        classicUrl
      }
      ... on BetaLayerAspect {
        betaInfo {
          namedUrl
        }
      }
    }
    `}}),nb=A({name:"Gdpr",fragment(){return _`fragment ${this.name} on FooterAspect {
      footer {
        policy {
          namedUrl
        }
      }
    }
    `}}),rb=A({name:"WelcomeLayer",fragment(){return _`fragment ${this.name} on WelcomeLayerAspect {
      welcomeInfo {
        namedUrl
      }
    }
    `}}),hr=A({name:"InfoLayer",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          isLive
          showLiveWelcomeLayer
        }
        ...${nb.name}
        ...${tb.name}
        ...${rb.name}
      }
      ${nb.fragment()}
      ${tb.fragment()}
      ${rb.fragment()}
     `}}),ib=Object.freeze({beta:{LayerTag:WH,layerStorageKey:"showBetaLayer"},liveWelcome:{LayerTag:VH,layerStorageKey:"showLiveWelcomeLayer"}}),HH=({className:e,content:t})=>{const{LayerTag:n,layerStorageKey:r}=t.isLive?ib.liveWelcome:ib.beta,[i,o]=so("gdprAccepted"),[a,l]=so(r),c=x.useRef(a),[u,d]=x.useState(!1),f=()=>{d(!0)};x.useEffect(()=>(i&&!a&&O.window.addEventListener("scroll",f,{passive:!0}),()=>{O.window.removeEventListener("scroll",f)}),[i]),If({callback:()=>{l(!0)},delay:3e3,conditional:u});const{isMobileMode:p}=At();return p?null:s.jsx(Sr,{children:s.jsx("div",{className:e,children:i&&a&&(!t.isLive||t.showLiveWelcomeLayer)?s.jsx(n,{content:t,isCollapsed:c.current}):s.jsx(GH,{content:t,onClickOk:()=>o(!0),gdprAccepted:i})})})},Co=h(HH)`
  display: flex;
  flex-direction: row-reverse;
`,gr=A({name:"ImageSharingMetadata",fragment(){return _`fragment ${this.name} on SocialMediaAspect {
      imageSharingMetadata {
        url
        width
        height
        alt
      }
    }
    `}}),ac=({content:e})=>{const{url:t,width:n,height:r,alt:i}=e.imageSharingMetadata||{};return t?s.jsxs(mt,{children:[s.jsx("meta",{property:"og:image:type",content:"image/jpeg"}),s.jsx("meta",{property:"og:image",content:t}),s.jsx("meta",{name:"twitter:image",content:t}),n&&s.jsx("meta",{property:"og:image:width",content:n}),r&&s.jsx("meta",{property:"og:image:height",content:r}),i&&s.jsx("meta",{property:"og:image:alt",content:i}),i&&s.jsx("meta",{name:"twitter:image:alt",content:i})]}):null},ob=A({name:"TwitterMetadata",fragment(){return _`fragment ${this.name} on Content {
            ... on NamedAspect {
              title
            }
            ... on SocialMediaAspect {
              twitterAccount
              sharingDescription
            }
        }
    `}}),QH=({content:e})=>{const{title:t,twitterAccount:n,sharingDescription:r}=e;return s.jsxs(mt,{children:[s.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),t&&s.jsx("meta",{name:"twitter:title",content:t}),r&&s.jsx("meta",{name:"twitter:description",content:r}),n&&s.jsx("meta",{name:"twitter:site",content:`@${n}`})]})},qH=()=>{const{facebookMetaPageIds:e=[],facebookMetaAdminIds:t=[]}=Mt();return s.jsxs(mt,{children:[t.map(n=>s.jsx("meta",{property:"fb:admins",content:n},n)),e.map(n=>s.jsx("meta",{property:"fb:pages",content:n},n))]})},ab=A({name:"SocialMediaMetadata",fragment(){return _`fragment ${this.name} on Content {
          ...${ob.name}
        }
        ${ob.fragment()}
    `}}),YH=({content:e})=>{const{isOnDetailPage:t}=Xn();return s.jsxs(s.Fragment,{children:[t&&s.jsx(QH,{content:e}),s.jsx(qH,{})]})},sb=A({name:"PodcastMetadata",fragment(){return _`fragment ${this.name} on RssFeedAspect {
      podcast {
        url
        title
      }
    }
    `}}),KH=({content:e})=>{const{podcast:t}=e;if(!t)return null;const{title:n,url:r}=t;return s.jsx(mt,{children:s.jsx("link",{type:"application/rss+xml",rel:"alternate",title:n,href:r})})},Ge=A({name:"PageHeaderMetadata",fragment(){return _`fragment ${this.name} on Content {
            ... on ModelAspect {
              isLive
              language
            }
            ... on UrlAspect {
              canonicalUrl
              ampUrl
            }
            ... on NamedAspect {
              title
            }
            ...${sb.name}
            ...${ab.name}
        }
        ${sb.fragment()}
        ${ab.fragment()}
    `}}),lb=A({name:"DetailPageHeaderMetadata",fragment(){return _`fragment ${this.name} on Content {
          ... on DeliveryAspect {
            localizedContentDate
          }
        }
    `}}),er=({content:e})=>{const{staticBaseHost:t}=Mt(),n=ho().window.location.href,r=Z7({title:e.title,date:e.localizedContentDate}),i=e.sharingDescription,o=encodeURI(e.canonicalUrl?e.canonicalUrl:n);return s.jsxs(s.Fragment,{children:[s.jsxs(mt,{children:[s.jsx("title",{children:r}),s.jsx("meta",{name:"description",content:i}),s.jsx("link",{rel:"canonical",href:o}),s.jsx("link",{rel:"preconnect",href:t}),s.jsx("link",{rel:"dns-prefetch",href:t}),s.jsx("link",{rel:"manifest",href:`/${Ra(e.language)}/manifest.json`}),s.jsx("meta",{name:"robots",content:e.isLive?"max-snippet:-1, max-video-preview:-1, max-image-preview:large":"noindex, nofollow"}),s.jsx("meta",{property:"og:site_name",content:"dw.com"}),s.jsx("meta",{property:"og:title",content:r}),s.jsx("meta",{property:"og:url",content:o}),s.jsx("meta",{property:"og:description",content:i}),e.ampUrl&&s.jsx("link",{rel:"amphtml",href:encodeURI(e.ampUrl)})]}),s.jsx(YH,{content:e}),s.jsx(KH,{content:e})]})},XH=({type:e})=>A({name:`${e}ContentDetails`,fragment(){const t=PH({type:e}),n=An(),r=Ln();return _`fragment ${this.name} on ${e} {
            footer {
              policyId
              legalId
            }
            ...${Ge.name}
            ...${lb.name}
            ...${ad.name}
            ...${n.name}
            ...${t.name}
            ...${Aw.name}
            ...${r.name}
            ...${hr.name}
            ...${gr.name}
            ...${Re.name}
          }
        ${Ge.fragment()}
        ${lb.fragment()}
        ${ad.fragment()}
        ${n.fragment()}
        ${t.fragment()}
        ${Aw.fragment()}
        ${r.fragment()}
        ${hr.fragment()}
        ${gr.fragment()}
        ${Re.fragment()}
    `}}),ZH=x.memo(jz),JH=x.memo(ev),eQ=({content:e,className:t})=>{const[{hasLeftViewport:n,onChangeInViewListenerForHeaderSwitch:r}]=_o(),{isMobileMode:i}=At(),{policyId:o,legalId:a}=e.footer,l=i&&[a,o].includes(e.id);return s.jsxs(Xa,{children:[s.jsx(er,{content:e}),s.jsx(ac,{content:e}),s.jsx(Kn,{content:e}),s.jsx(G2,{content:e}),s.jsx(Co,{content:e}),s.jsx(Yn,{content:e}),s.jsxs("div",{className:t,children:[s.jsx(Kt,{hasWhiteState:n,content:e,children:({isHeaderInWhiteState:c})=>c?s.jsx(mv,{content:e,isInHeader:!0,className:"sharing-icons"}):null}),s.jsx(Er,{}),s.jsx(Hf,{slotConfig:Dz}),s.jsx(wo,{DetailZoneFn:()=>s.jsx(FH,{content:e,onChangeInViewListenerForHeaderSwitch:r}),AlternatingColorZoneConfig:{compFn:()=>s.jsxs(s.Fragment,{children:[s.jsx(ZH,{content:e}),!l&&s.jsx(JH,{content:e})]})}}),s.jsx(In,{content:e})]})]})},tQ=`
  ${Ni}
  ${MH}
  ${Iz}
`,nQ=h(eQ)`
  ${OA}
`,{StyledAdvertorialContentDetailsWithTheme:rQ}=ne(()=>J(()=>import("./AdvertorialContentDetails.cd23-ce8f5417.js"),[]),{fallback:null}),iQ=e=>({name:"getContentDetails",fragmentDef:XH({type:e})}),oQ=$r(nQ)`
  ${tQ}
`,bs=({type:e})=>s.jsx(xo,{queryOptions:iQ(e),children:({content:t})=>r2(t)&&t.subdomain==="ADVERTISING_PARTNERS"?s.jsx(rQ,{content:t}):s.jsx(oQ,{content:t})}),UA=h(Zn)`
  ${Jn()}
  ${Df(G.notFirst)}
  ${Kl()}
  ${Rf()}
`,aQ=h(Zn)`
  ${Jn()}
  ${Df(G.notFirst)}
`,xd=A({name:"SmallImageTextContentTeaser",fragment(){return _`fragment ${this.name} on Content {
        ... on UrlAspect {
          namedUrl
        }
        ... on NamedAspect {
          title
        }
        ... on TextualAspect {
          shortTeaser
          teaser
        }
        ...${U.imageWrapFragment.name}
        ...${U.contentStatusTeaserBadgeFragment.name}
        ...${U.teaserDataFragment.name}
        ...${U.linkedTitleFragment.name}
      }
      ${U.imageWrapFragment.fragment()}
      ${U.contentStatusTeaserBadgeFragment.fragment()}
      ${U.teaserDataFragment.fragment()}
      ${U.linkedTitleFragment.fragment()}
    `}}),sQ=({content:e={},className:t,imageFormatConfig:n,titleIsA:r,hideDescription:i})=>s.jsxs(un,{className:H(t,"row"),formatConfig:n,content:e,hideDescription:i,children:[s.jsx(q.LinkedImage,{children:s.jsxs("div",{className:"teaser-data-xs-sm",children:[s.jsx(q.ContentStatusTeaserBadge,{className:"badge-xs-sm"}),s.jsx(q.LinkedTitle,{isA:r,className:"title-xs-sm"})]})}),s.jsx(q.MainContentArea,{children:s.jsxs(q.Data,{children:[s.jsx(q.ContentStatusTeaserBadge,{className:"badge-above-md"}),s.jsx(q.LinkedTitle,{isA:r,className:"title-above-md"}),s.jsx(q.LinkedDescription,{})]})})]}),lQ=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkLinkedDescriptionStyles}
  ${$e.darkTeaserDataStyles}
`,xv=h(sQ)``,Sv=A({name:"ListDefaultHighlightSmallImageText",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${xd.name}
      }
      ${xd.fragment()}
    `}}),cQ=({contents:e=[],preListSlotFn:t=Te,...n})=>{const r=t();return s.jsxs(_r,{headlineIsA:"h2",...n,children:[r,s.jsx(UA,{children:e.map((i,o)=>s.jsx(xv,{content:i,imageFormatConfig:o>0?Ka():void 0,titleIsA:r?"h4":"h3"},i.id))})]})},zA=h(cQ)``,tg=A({name:"SmallImageContentTeaser",fragment(){return _`fragment ${this.name} on Content {
        ... on UrlAspect {
          namedUrl
        }
        ... on NamedAspect {
          title
        }
        ...${U.imageWrapFragment.name}
        ...${U.contentStatusTeaserBadgeFragment.name}
        ...${U.teaserDataFragment.name}
        ...${U.linkedTitleFragment.name}
      }
      ${U.imageWrapFragment.fragment()}
      ${U.contentStatusTeaserBadgeFragment.fragment()}
      ${U.teaserDataFragment.fragment()}
      ${U.linkedTitleFragment.fragment()}
    `}}),uQ=({content:e={},className:t,imageFormatConfig:n,titleIsA:r,isHidden:i})=>s.jsxs(un,{className:t,isHidden:i,formatConfig:n,content:e,hideOpinion:!0,children:[s.jsx(q.LinkedImage,{}),s.jsx(q.MainContentArea,{children:s.jsxs(q.Data,{children:[s.jsx(q.ContentStatusTeaserBadge,{}),s.jsx(q.LinkedTitle,{isA:r})]})})]}),wv=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkTeaserDataStyles}
`,WA=h(uQ)``,ng=Sv,dQ=6,fQ=({contents:e=[],children:t})=>s.jsx(UA,{children:t(e)}),pQ=({contents:e=[],showMoreBtnTranslation:t,initialListCount:n,children:r})=>s.jsx(Ja,{dataArray:e,showMoreBtnTranslation:t,initialListCount:n,children:i=>s.jsx(aQ,{children:r(i)})}),mQ=({contents:e,className:t,headlineTranslation:n,pageSectionId:r,initialListCount:i=dQ,showMoreBtnTranslation:o})=>{const l=(e||[]).length>i?pQ:fQ;return se(e)?s.jsx(_r,{className:t,headlineIsA:"h2",headlineTranslation:n,pageSectionId:r,children:s.jsx(l,{contents:e,showMoreBtnTranslation:o,initialListCount:i,children:c=>c.map((u,d)=>s.jsx(xv,{content:u,imageFormatConfig:d>0?Ka():void 0,titleIsA:"h3"},u.id))})}):null},hQ=`
  ${qn}
  ${wv}
  ${Nf}
`,VA=h(mQ)``,cb=A({name:"PersonContentItems",fragment(){return _`fragment ${this.name} on Person {
      fullName
      moreContent {
        ...${ng.name}
      }
    }
    ${ng.fragment()}
    `}}),gQ=({person:e,className:t})=>s.jsx(VA,{contents:e.moreContent,className:t,showMoreBtnTranslation:"content_block_detail.person_content_items.show_more",headlineTranslation:{key:"content_block_detail.person_content_items.headline",parameters:{fullName:e.fullName}},pageSectionId:"person-content-items"}),yQ=hQ,vQ=h(gQ)``,Pa=A({name:"ListDefaultUnifiedBigImageText",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${uo.name}
      }
      ${uo.fragment()}
    `}}),xQ=({contents:e=[],hideKicker:t,hideTimeIndicator:n,...r})=>s.jsx(_r,{headlineIsA:"h2",...r,children:s.jsx(Zl,{children:e.map(i=>s.jsx(Jl,{content:i,titleIsA:"h3",hideKicker:t,hideTimeIndicator:n},i.id))})}),GA=`
  ${Xl}
  ${Ff}
`,sc=h(xQ)``,ub=A({name:"PersonProfileTopics",fragment(){return _`fragment ${this.name} on Person {
      fullName
      profileTopics {
        ...${Pa.name}
      }
    }
    ${Pa.fragment()}
    `}}),SQ=({className:e,person:t={}})=>s.jsx(sc,{headlineTranslation:{key:"content_block_detail.person_profile_topic_content_items.headline",parameters:{fullName:t.fullName}},className:e,contents:t.profileTopics,pageSectionId:"person-profile-topics"}),wQ=GA,bQ=h(SQ)``,db=A({name:"PersonRecommend",fragment(){return _`fragment ${this.name} on Person {
      ...${cb.name}
      ...${ub.name}
    }
    ${cb.fragment()}
    ${ub.fragment()}
    `}}),kQ=({person:e})=>s.jsxs(s.Fragment,{children:[se(e.profileTopics)&&s.jsx(bQ,{person:e}),se(e.moreContent)&&s.jsx(vQ,{person:e})]}),EQ=`
  ${wQ}
  ${yQ}
`,$Q=({className:e})=>s.jsxs("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20",children:[s.jsx("defs",{children:s.jsx("path",{id:"facebook-a",d:"M10.9955,20.0443125 L10.9955,11.233875 L13.9529375,11.233875 L14.395625,7.8001875 L10.9955,7.8001875 L10.9955,5.6079375 C10.9955,4.613625 11.2715,3.9361875 12.69725,3.9361875 L14.5154375,3.9354375 L14.5154375,0.864375 C14.201,0.8225625 13.1215625,0.729 11.8660625,0.729 C9.2444375,0.729 7.4496875,2.329125 7.4496875,5.2678125 L7.4496875,7.8 L4.4845625,7.8 L4.4845625,11.2336875 L7.4495,11.2336875 L7.4495,20.044125 L10.9955,20.044125 L10.9955,20.0443125 Z"})}),s.jsx("use",{xlinkHref:"#facebook-a"})]}),TQ=h($Q)`
`,_Q=({facebookName:e,className:t})=>s.jsxs(He,{to:`https://facebook.com/${e}`,title:`facebook — ${e}`,className:t,children:[s.jsx(TQ,{className:"facebook-icon"}),e]}),CQ=He.darkStyles,AQ=h(_Q)`
  display: flex;
  align-items: center;
  letter-spacing: 0.04rem;

  .facebook-icon {
    height: 20px;
    width: 20px;
  }
`,fb=A({name:"PersonDetailHeader",fragment(){return _`fragment ${this.name} on Person {
        fullName
        twitterHandle
        facebookUserName
        facebookPageName
        expertise
        teaser
      }
    `}}),LQ=`
  ${iv}
  ${Pi}
  ${HC}
  ${CQ}
`,IQ=({person:e,className:t})=>{const n=e.facebookPageName||e.facebookUserName;return s.jsxs("div",{className:t,children:[s.jsx(ov,{children:e.fullName}),s.jsx(Wr,{className:"expertise",children:e.expertise}),(e.twitterHandle||n)&&s.jsxs("address",{className:"social-area",children:[e.twitterHandle&&s.jsx(QC,{className:"social-link",twitterHandle:e.twitterHandle}),n&&s.jsx(AQ,{className:"social-link",facebookName:n})]}),e.teaser&&s.jsx(Wr,{className:"biography",children:e.teaser})]})},jQ=h(IQ)`
  address {
    margin: 0;
  }

  .expertise {
    margin-bottom: 20px;
  }

  .biography {
    margin-bottom: 2px;
  }

  .social-area {
    display: flex;
    flex-direction: column;
    padding-top: 0.5px;
    padding-bottom: 15.5px;

    .social-link {
      font-size: 1.6rem;
      letter-spacing: 0.05rem;
      margin: 2.5px;

      svg {
        width: 22px;
        height: 22px;
        margin-right: 5px;
      }
    }
  }


  ${b.sm`
    .social-area {
      flex-direction: row;
      flex-wrap: wrap;

      .social-link {
        margin-right: 10px;
      }
    }
  `}

  ${b.md`
    .social-area {
      padding-top: 2.5px;
      padding-bottom: 17.5px;
    }
  `}
`,OQ=({caption:e="",licenserSupplement:t,className:n})=>{const[r,{toggleOnClick:i}]=rc(),o=z(`general.image.caption.label.${r?"close":"open"}`);return!e&&!t?null:s.jsxs("div",{className:n,children:[s.jsx("div",{className:"details-icon",children:s.jsx(ht,{onClick:i,"aria-expanded":r,title:o,children:s.jsx(Ml,{pointsDown:!r})})}),s.jsx("div",{className:H("details",{opened:r,closed:!r,"short-animation":e.length<500}),children:s.jsx(TA,{caption:e,licenserSupplement:t})})]})},RQ=EA,DQ=M`
  .details {
    overflow: hidden;
    will-change: transform, max-height;
    &.opened {
      max-height: 105rem;
      transition: max-height 2s cubic-bezier(1, 1, 1, 0);
      &.short-animation {
        transition: max-height 2s cubic-bezier(0.3, 0.1, 1, 1);
      }
    }
    &.closed {
      max-height: 0rem;
      transition: max-height 1s cubic-bezier(0, 1, 0, 1);
    }
  }
  ${b.md`
    .details figcaption {
      padding: 10px 40px;
    }
  `}
  ${b.lg`
    .details figcaption {
      padding: 10px 30px;
    }
  `}
`,NQ=M`
  .details-icon {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;

    [role=button] {
      width: 40px;
      height: 40px;
      svg {
        width: 20px;
        height: 20px;
        filter: drop-shadow(0 0 3px ${C.BLACK}) drop-shadow(0 0 6px ${C.BLACK}) drop-shadow(0 0 9px ${C.BLACK});
      }
      &:active {
        svg {
          filter: unset;
        }
      }
    }
  }
`,PQ=h(OQ)`
  ${ht.darkStyles}
  ${NQ}
  ${DQ}
`,Sd=G0,FQ=({content:e,children:t})=>{var a;const n=b0(e),r=!!n,i=(a=e==null?void 0:e.mainContentImageLink)==null?void 0:a.target,o=a2(e)?So:U2;return s.jsxs(s.Fragment,{children:[r&&s.jsx("div",{className:"top-img-wrapper",children:s.jsx(Yl,{image:i,alt:n.alt,formatConfig:o})}),s.jsxs("div",{className:H("page",{"move-up":r,"has-caption":r&&(n.caption||n.licenserSupplement)}),children:[r&&s.jsx(PQ,{caption:n.caption,licenserSupplement:n.licenserSupplement}),t]})]})},MQ=({content:e,children:t,className:n})=>s.jsx(es,{className:n,HeroCmp:FQ,heroCmpProps:{content:e},children:t}),HA=RQ,QA=h(MQ)`
  .top-img-wrapper{
    background-color: ${C.DW_GREY_14};
  }

  .page {
    position: relative;
  }

  .move-up .details-icon {
    margin-top: -45px;
    margin-right: 5px;
  }

  ${b.lg`
    .move-up {
      margin-top: -11.25%;
      &.has-caption {
        margin-top: calc(-11.25% - 45px);
      }
      .details-icon {
        margin-right: 0;
      }
    }
    .page {
      max-width: ${wl.lg}px;
      margin-right: auto;
      margin-left: auto;
    }
  `}

  ${b.xl`
    .page {
      max-width: ${wl.xl}px;
    }
  `}


  ${lf.xl.ultraWide`
    ${fA}
    ${uv}
    .move-up {
      margin-top: -20vh;
      &.has-caption {
        margin-top: calc(-20vh - 45px);
      }
    }
  `}
`,qA=Tn,BQ=({content:e,isOpen:t=!1,className:n,translationKeyPrefix:r})=>{const[i,o]=x.useState(t),a=i?"opened":"closed",l=[r,i?"close":"open"].join(".");return s.jsxs("div",{className:`${n} ${a}`,children:[s.jsx(To,{isA:"section",content:e,className:"details-text",replacePlaceholders:i}),s.jsx(Di,{children:s.jsx(bo,{onClick:()=>o(!i),translation:l,"aria-expanded":i,isOpen:i})})]})},YA=`
  ${$o}
  ${bo.darkStyles}
  `,KA=h(BQ)`
  padding-top: 10px;
  padding-bottom: 20px;

  .details-text {
    padding-bottom: 30px;
    > *:last-child {
      margin-bottom: 0;
    }
  }

  &.closed {
    padding-top: 30px;
    .details-text {
      display: none;
    }
  }
`,pb=qA,UQ=({person:e,isOpen:t=!1,className:n})=>e.text?s.jsx(KA,{className:n,content:e,translationKeyPrefix:"component_detail.person_detail.fullVita",isOpen:t}):null,zQ=YA,WQ=h(UQ)`
`,mb=A({name:"PersonDetails",fragment(){return _`fragment ${this.name} on Person {
      ...${Sd.name}
      ...${fb.name}
      ...${pb.name}
    }
    ${Sd.fragment()}
    ${fb.fragment()}
    ${pb.fragment()}
    `}}),VQ=({person:e,className:t})=>s.jsxs(QA,{content:e,className:t,children:[s.jsx(jQ,{person:e}),s.jsx(WQ,{person:e})]}),XA={bgColor:"--person-details-background-color"},GQ=`
  ${HA}
  ${LQ}
  ${zQ}
  ${XA.bgColor}: ${C.DARK_BLUE_GREY_02};
`,HQ=h(VQ)`
  .content-area {
    background-color: var(${XA.bgColor}, ${C.BLUE_GREY_01});
    padding-bottom: 30px;
  }

  ${b.lg`
    .content-area {
      min-height: 20rem;
    }
  `}
`,QQ=A({name:"PersonDetailsWithFallback",fragment(){const e=An(),t=Ln();return _`fragment ${this.name} on Person {
      autoDelivery
      ...${Ge.name}
      ...${mb.name}
      ...${e.name}
      ...${t.name}
      ...${hr.name}
      ...${db.name}
      ...${gr.name}
      ...${Re.name}
      ...${rd.name}

    }
    ${Ge.fragment()}
    ${mb.fragment()}
    ${e.fragment()}
    ${t.fragment()}
    ${hr.fragment()}
    ${db.fragment()}
    ${gr.fragment()}
    ${Re.fragment()}
    ${rd.fragment()}
    `}}),qQ=({person:e,className:t})=>e.autoDelivery?s.jsxs(Xa,{children:[s.jsx(er,{content:e}),s.jsx(ac,{content:e}),s.jsx(Kn,{content:e}),s.jsx(Co,{content:e}),s.jsx(Yn,{content:e}),s.jsxs("div",{className:t,children:[s.jsx(Kt,{content:e}),s.jsx(Er,{}),s.jsx(wo,{DetailZoneFn:()=>s.jsx(HQ,{person:e}),AlternatingColorZoneConfig:{compFn:()=>s.jsx(kQ,{person:e}),isBgColorOnEveryEven:!0}}),s.jsx(w2,{content:e}),s.jsx(In,{content:e})]})]}):s.jsx(an,{}),YQ=$r(qQ)`
  ${Ni}
  ${GQ}
  ${EQ}
  ${y0}
`,KQ={name:"getPersonDetails",fragmentDef:QQ},XQ=()=>s.jsx(xo,{queryOptions:KQ,children:({content:e})=>s.jsx(YQ,{person:e})}),ZQ=e=>s.jsx(Vl,{...e,isA:"h1"}),is=h(ZQ)`
  margin: 0;
  font-size: 2.2rem;
  padding-top: 10px;
  padding-bottom: 10px;


  ${b.md`
    font-size: 2.6rem;
    padding-top: 12px;
    padding-bottom: 12px;
  `}

  ${b.lg`
    font-size: 3rem;
    padding-top: 15px;
    padding-bottom: 15px;
  `}

  ${qa()}
`,JQ=({translation:e,isA:t,className:n,...r})=>{const i=z(e);return s.jsx(ao,{className:n,isA:t,...r,children:i})},eq=e=>s.jsx(JQ,{...e}),qf=h(eq)`
    ${ko}
`,tq=A({name:"CurrentNewsItem",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ... on UrlAspect {
          namedUrl
        }
        ... on NamedAspect {
          title
        }
        ... on DeliveryAspect {
          contentDate
          localizedContentDate
          localizedContentDateSr
        }
        ...${Gn.name}
      }
      ${Gn.fragment()}
    `}}),nq=({newsItem:e,className:t})=>{const{title:n}=e,r=Af(e.__typename,n);return s.jsx("div",{className:`${t} col-12 col-xl-4`,children:s.jsxs("div",{className:"news-row",children:[s.jsx(J2,{date:e.contentDate,localizedDate:e.localizedContentDate,localizedDateSr:e.localizedContentDateSr,className:"timestamp"}),s.jsxs("div",{className:"news-title",children:[s.jsx(z0,{className:"badge",content:e}),s.jsx("h3",{children:s.jsxs(Oi,{to:e.namedUrl,title:n,skipTitleForInternal:!0,"aria-label":r,children:[s.jsx(_f,{contentType:e.__typename}),n]})})]})]})})};`${Oi.darkStyles}${_M}`;const rq=h(nq)`
   padding-right: 0;
   padding-left: 0;

   .news-row {
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
   }

  .timestamp {
    font-size: 1.1rem;
    letter-spacing: 0.04rem;
    text-align: right;
    padding: 0.4em 0 0;
    max-width: 80px;
    width: 100%;
  }

  .badge {
    margin-bottom: 5px;
  }

  .news-title {
    padding: 0 15px 0 0;
    margin-left: 15px;
    width: 100%;
  }

  h3 {
    ${Rl}
    margin-bottom: 0;
    font-size: 1.8rem;
    word-break: break-word;
  }

  ${b.sm`
    .news-title {
      padding-right: 0;
    }
  `}

  ${b.md`
    .timestamp {
      font-size: 1.2rem;
      letter-spacing: 0.09rem;
      max-width: 90px;
    }
    .badge {
      margin-bottom: 10px;
    }
    h3 {
      font-size: 2rem;
    }
  `}

  ${b.lg`
    .timestamp{
      max-width: 130px;
    }
  `}

  ${b.xl`
    &:nth-child(3n){
      padding-right: 0;
    }
    .timestamp {
      text-align: left;
      padding: 0 0 10px 0;
      max-width: 100%;
    }
    .news-title {
      margin: 0;
    }

    .news-row {
      flex-wrap: wrap;
      padding-right: 30px;
    }
  `}
`,iq=tq,oq=A({name:"CurrentNewsConfig",fragment(){return _`fragment ${this.name} on CompositionComponent {
        configuration {
          numContentItems
        }
      }
    `}}),aq=6,sq=({contents:e=[],className:t,pageSectionId:n,configuration:r={numContentItems:aq}})=>s.jsx(_r,{headlineTranslation:"content_block.news.headline",className:t,headlineIsA:"h2",pageSectionId:n,children:s.jsx(Ja,{dataArray:e,initialListCount:r.numContentItems,focusContainerClass:"news-item",className:"news",children:i=>i.map(o=>o&&s.jsx(rq,{className:"news-item",newsItem:o},o.id))})}),lq=h(sq)`
  .news {
    display: flex;
    flex-wrap: wrap;
    row-gap: ${Of};
  }
`,cq=({className:e,children:t,currentIndex:n,forwardRef:r})=>{const{isRtl:i}=_n();if(!t)return null;const o=x2({childrenLength:t.length,currentIndex:n,isRtl:i});return s.jsx("div",{className:e,style:o,ref:r,children:t})},uq=h(cq)`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 15px;
  position: relative;
  transition: ${g0};

  ${b.md`
    margin-top: 20px;
  `}
`,dq=({className:e,children:t=[],onDragEndWithoutSlideChange:n})=>{const i=t.length-1,[o,{goTo:a,next:l,prev:c}]=lA(0,i),u=t.length>1,d=t.length>2,f=y_({isAlwaysReset:!0}),m=f>B.max.sm?2:1,S=v=>v===o.currentIndex,w=o.currentIndex>=Math.floor(i/m),E=()=>{w||l()};x.useEffect(()=>{w&&a(0)},[f]);const g={key:"content_block.top_story.more_on_top_story.paging_live_region.label",parameters:{currentPage:o.currentIndex+1,totalPages:Math.ceil(t.length/m)}},y=v=>{const k=v<m*(o.currentIndex+1),T=v>=m*o.currentIndex;return k&&T};return s.jsxs("div",{className:`${e}`,tabIndex:-1,children:[s.jsx(dA,{prev:c,next:E,onDragEndWithoutSlideChange:n,children:v=>s.jsx(uq,{className:H("slider",{"has-indicator-xs":u,"has-indicator-md":d}),currentIndex:o.currentIndex,forwardRef:v,children:t.map((k,T)=>{const $=y(T);return x.cloneElement(k,{isHidden:!$})})})}),s.jsx(aA,{translation:g}),u&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:H("carousel-icons",{"d-md-none":!d}),children:s.jsx(No.Indicator,{slideNumber:o.currentIndex*m+m,slidesCount:t.length,className:"indicator"})}),s.jsx(y2,{className:H({"d-md-none":!d}),disablePrevArrow:S(0),disableNextArrow:w,onPrev:c,onNext:l})]})]})},ZA=h(dq)`
  ${s8}
  position: relative;
  background-color: ${C.DARK_BLUE_GREY_02};
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;

  &:focus {
    outline: none;
  }

  .slider {
    padding-bottom: 15px;
    &.has-indicator-xs {
      padding-bottom: 32px;
    }
  }

  .carousel-icons {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    min-width: 50%;

    svg {
      display: block;
    }

    .indicator {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
      position: static;
      transform: translate(0);
      margin: 0;
    }
  }

  ${b.sm`
    .carousel-icons {
      min-width: 33.3333%;
    }
  `}

  ${b.md`
    .indicator-fragment:nth-child(2n) {
        display: none;
    }
    .slider:not(.has-indicator-md) {
      padding-bottom: 20px;
    }
    .slider.has-indicator-md {
      padding-bottom: 42px;
    }
    .carousel-icons {
      bottom: 20px;
    }
  `}
`,fq=({className:e,isHidden:t=!1,children:n,...r})=>s.jsx("div",{className:`${e} teaser-wrap`,"aria-hidden":t,...r,children:n}),JA=h(fq)`
  &.teaser-wrap {
    width: 100vw;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
  }

  ${b.sm`
    &.teaser-wrap {
      padding: 0 65px;
    }
  `};

  ${b.md`
     &.teaser-wrap {
      width: 50vw;
      padding: 0 15px;

      &:nth-child(odd) {
        padding-left: 60px;
      }

      &:nth-child(even) {
        padding-right: 60px;
      }
    }
  `};

  ${b.lg`
    &.teaser-wrap {
      width: ${En.lg/2}px; 
    }
  `};
 
  
  ${b.xl`
    &.teaser-wrap {
      &:nth-child(odd) {
        padding-left: 65px;
      }

      &:nth-child(even) {
        padding-right: 65px;
      }

      width: ${En.xl/2}px;
    }
  `};
`,hb=A({name:"SmallImageOpinionContentTeaser",fragment(){return _`fragment ${this.name} on Content {
        ... on UrlAspect {
          namedUrl
        }
        ... on NamedAspect {
          title
        }
        ...${Da.name}
        ...${U.contentStatusTeaserBadgeFragment.name}
        ...${U.linkedTitleFragment.name}
        ...${U.teaserFooterFragment.name}
      }
      ${Da.fragment()}
      ${U.contentStatusTeaserBadgeFragment.fragment()}
      ${U.linkedTitleFragment.fragment()}
      ${U.teaserFooterFragment.fragment()}
    `}}),pq=({content:e={},className:t,titleIsA:n,isHidden:r})=>{const[i]=e.firstPersonArray;return s.jsxs(un,{className:t,isHidden:r,content:e,hideOpinionMetadata:!0,children:[s.jsx(O0,{className:"author-image",person:i}),s.jsxs(q.MainContentArea,{children:[s.jsxs(R0,{forceHideAuthorLinkedImage:!0,children:[s.jsx(q.ContentStatusTeaserBadge,{}),s.jsx(q.LinkedTitle,{isA:n})]}),s.jsx(q.TeaserFooter,{className:"teaser-footer-wrapper"})]})]})},mq=`
  ${$e.darkLinkedTitleStyles}
  ${$e.darkTeaserFooterStyles}
  ${rC}
`,hq=h(pq)``,gq=()=>M`
  display: flex;

  .teaser-data-wrap {
    flex: initial;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .title {
    font-size: 1.8rem;
  }

  .teaser-footer-wrapper {
    margin-top: 10px;
  }

  ${b.md`
    .title {
      font-size: 2rem;
    }
  `};

  ${b.xl`
    .title {
      font-size: 2.4rem;
    }
  `};
`,yq=()=>M`
  .teaser-image-wrap {
    max-width: 50px;
    padding: 0;
    margin-right: 15px;
  }

  ${b.sm`
    .teaser-image-wrap {
      max-width: 75px;
    }
  `};

  ${b.md`
    .teaser-image-wrap {
      max-width: 90px;
    }
  `};

  ${b.lg`
    .teaser-image-wrap {
      max-width: 130px;
    }
  `};

  ${b.xl`
    .teaser-image-wrap {
      max-width: 160px;
    }
  `};
`,vq=()=>M`
  .author-data {
    .author-link, .no-link {
      font-size: 1.3rem;
      margin-top: 10px;
      display: inline-block;
    }
  }

  ${D0({linkCssSelector:".author-image:hover + * .author-data .author-link"})}
  ${N0({linkCssSelector:".author-image:active + * .author-data .author-link"})}

  .author-image {
    display: block;
    max-width: 50px;
    max-height: 50px;
    padding: 0;
    width: 100%;
    height: auto;
    margin-right: 15px;
  }

  ${b.sm`
    .author-image {
      max-width: 75px;
      max-height: 75px
    }
  `};

  ${b.md`
    .author-image {
      max-width: 90px;
      max-height: 90px;
    }
  `};

  ${b.lg`
    .author-image {
      max-width: 80px;
      max-height: 80px;
    }
  `};

  ${b.xl`
    .author-image {
      max-width: 98px;
      max-height: 98px;
    }
  `};
`,rg=A({name:"SmallImageMixContentTeaser",fragment(){return _`fragment ${this.name} on Content {
        ... on OpinionAspect {
          isOpinion
        }
        ...${hb.name}
        ...${tg.name}
      }
      ${hb.fragment()}
      ${tg.fragment()}
    `}}),xq=Ka({squareTill:"md",landscapeFrom:"lg"}),Sq=({content:e,className:t,titleIsA:n,isHidden:r=!1})=>{const i=e.isOpinion?{Tag:hq,props:{}}:{Tag:WA,props:{imageFormatConfig:xq}};return s.jsx(i.Tag,{className:t,content:e,titleIsA:n,isHidden:r,...i.props})},eL=`
  ${mq}
  ${wv}
`,tL=h(Sq)`
  ${gq()}
  ${yq()}
  ${vq()}
`,gb=rg,wq=({content:e,className:t,titleIsA:n,isHidden:r,...i})=>s.jsx(JA,{className:t,isHidden:r,...i,children:s.jsx(tL,{content:e,titleIsA:n,isHidden:r})}),bq=eL,kq=h(wq)``,Eq=({className:e})=>{const t=Xn();return s.jsx(sC,{className:e,hasHqVideoStill:!0,preload:!t.isOnDetailPage})},$q=h(Eq)`
  ${lf.xl.ultraWide`
    ${fA}
    ${uv}
  `}
`,Tq=({className:e})=>s.jsxs("div",{className:e,children:[s.jsx(P0,{className:"opinion"}),s.jsx(L0,{className:"teaser-footer"})]}),_q=h(Tq)`
  ${Lf}
  ${A0}
  .opinion{
    padding-bottom: 10px;
  }

  .teaser-footer {
    & > *${G.notLast} {
      &:after {
        font-size: 1rem;
      }
    }
    .date-time {
      time {
        letter-spacing: 0.085rem;
      }
    }
  }


  ${b.md`
    .teaser-footer{
      font-size: 1.1rem;
    }
  `}

  ${b.lg`
    .teaser-footer{
      font-size: 1.3rem;
      & > *${G.notLast} {
        &:after {
          font-size: 1.2rem;
          letter-spacing: 0.09rem;
        }
      }
    }
  `}
`,Cq=({content:e,children:t})=>{const n=ze.config.hide.opinion;return s.jsx(Cf.Provider,{value:{config:{hide:{opinion:n},formatConfig:U2},content:e},children:t})},yb=A({name:"TopStory",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${gb.name}
      }
      ${gb.fragment()}
    `}}),Aq=({className:e,content:t={},moreStoryContents:n=[],pageSectionId:r})=>{const i=se(n),o=Xn(),a="content_block_detail.home_top_story.headline",l="content_block.top_story.headline",c=o.isOnDetailPage?s.jsx(b2,{isA:"h1",translation:a,className:"headline"}):s.jsx(qf,{isA:"h2",translation:l});return s.jsxs(Ef,{className:e,pageSectionId:r,sectionTitle:o.isOnDetailPage?a:l,children:[c,s.jsxs(Cq,{content:t,children:[s.jsx($q,{className:"ts-hero"}),s.jsxs("div",{className:"ts-teaser-title",children:[s.jsx(EC,{}),s.jsx(VU,{})]}),s.jsx(_q,{className:"ts-teaser-data"})]}),s.jsx("div",{className:"ts-gradient"}),s.jsx("div",{className:"ts-background"}),i&&s.jsx(ZA,{className:"carousel",children:n.map(u=>s.jsx(kq,{content:u,titleIsA:o.isOnDetailPage?"h3":"h4"},u.id))})]})},Lq=h(Aq)`
  display: grid;
  grid-template-rows: repeat(5, min-content);
  grid-template-columns: [content-block-start] auto [content-block-end];

  .headline {
    padding-top: 25px;
    overflow: hidden;
  }

  .headline, .ts-teaser-title, .ts-teaser-data {
    padding-left: ${oe.xs}px;
    padding-right: ${oe.xs}px;
  }

  .headline {
    grid-row: 1;
    grid-column: content-block;
  }
  .ts-hero {
    grid-row: 2 / -2;
    grid-column: 1 / -1;
  }
  .ts-teaser-title {
    grid-row: 3;
    grid-column: content-block;
    z-index: 3;
    ${Y0}
  }
  .ts-teaser-data {
    grid-row: 4;
    grid-column: content-block;
    z-index: 3;
    padding-bottom: 15px;
  }
  .ts-gradient {
    pointer-events: none;
    ${q0}
    z-index: 2;
    grid-row: 3;
    grid-column: 1 / -1;
  }
  .ts-background {
    ${Pf}
    z-index: 2;
    grid-row: 4;
    grid-column: 1 / -1;
  }
  .carousel {
    ${bq}
    grid-row: 5;
    grid-column: content-block;
  }


  ${b.sm`
  .headline, .ts-teaser-title, .ts-teaser-data {
    padding-left: ${oe.sm}px;
    padding-right: ${oe.sm}px;
  }
  `}

  ${b.md`
  .headline, .ts-teaser-title, .ts-teaser-data {
    padding-left: ${oe.md}px;
    padding-right: ${oe.md}px;
  }
  `}

  ${b.lg`
  grid-template-rows: repeat(6, min-content);
  grid-template-columns: 1fr [content-block-start] ${En.lg}px [content-block-end] 1fr;

  .headline, .ts-teaser-title, .ts-teaser-data {
    padding-left: ${oe.lg}px;
    padding-right: ${oe.lg}px;
  }

  .ts-background {
    grid-row: 4 / -2;
  }
  .carousel {
    grid-row: 5 / -1;
    z-index: 3;
  }

  `}

  ${b.xl`
  grid-template-columns: 1fr [content-block-start] ${En.xl}px [content-block-end] 1fr;
  `}
`,Iq=A({name:"TopStoryInterfaceAdapter",fragment(){return _`fragment ${this.name} on Content {
        ... on MetadataAspect {
          topStory
        }
        ...${yb.name}
      }
      ${yb.fragment()}
    `}}),jq=h(Gf)`
  padding-top: 17px;
  padding-bottom: 40px;
  ${b.lg`
    padding-top: 27px;
    padding-bottom: 0;
  `}
`,Oq=({contents:e=[],...t})=>{const[n,...r]=e,i=Xn();return n!=null&&n.topStory?s.jsxs(s.Fragment,{children:[s.jsx(Lq,{content:n,moreStoryContents:r,...t}),!i.isOnDetailPage&&s.jsx(jq,{slotConfig:Nz})]}):null},ree=Mi,Rq=kr.darkStyles,Dq=h(kr)`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.11rem;
  margin-bottom: 15px;

  ${b.lg`
    font-size: 1.6rem;
    letter-spacing: 0.12rem;
  `}
`,Nq=({className:e,children:t,headlineFn:n=Te,bottomElementFn:r=Te,hubContent:i={},headlineIsA:o="h2"})=>{const a=n(i),l=r(i);return s.jsxs(s.Fragment,{children:[a&&s.jsx(Dq,{isA:o,className:e,children:a}),t,l&&s.jsx(X0,{"data-tracking-name":"hub-bottom-container",className:e,children:l})]})},nL=Rq,rL=h(Nq)`
`,wd=A({name:"HubDefaultUnifiedBigImageText",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${uo.name}
      }
      ${uo.fragment()}
    `}}),Pq=({hubContents:e=[],hubHeadlineFn:t,hubBottomElementFn:n,...r})=>s.jsx(Jt,{headlineIsA:"h2",...r,children:s.jsx(Zl,{children:e.map(i=>s.jsx(rL,{headlineIsA:"h3",headlineFn:t,hubContent:i,bottomElementFn:n,children:s.jsx(Jl,{content:i.content,titleIsA:"h4"})},i.content.id))})}),Fq=h(Pq)``,Mq=h(Zn)`
  ${Jn()}
  ${Df()}
  ${Kl()}
  ${Rf()}
`,vb=A({name:"HubDefaultUnifiedSmallImageText",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${xd.name}
      }
      ${xd.fragment()}
    `}}),Bq=({hubContents:e=[],hubHeadlineFn:t,hubBottomElementFn:n,hideDescription:r,...i})=>s.jsx(Jt,{headlineIsA:"h1",...i,children:s.jsx(Mq,{children:e.map(o=>s.jsx(rL,{headlineIsA:"h2",headlineFn:t,hubContent:o,bottomElementFn:n,children:s.jsx(xv,{content:o.content,imageFormatConfig:Ka(),titleIsA:"h3",hideDescription:r})},o.content.id))})}),Uq=`
  ${qn}
  ${nL}
  ${lQ}
`,zq=h(Bq)``,xb=A({name:"GeographicRegionHeadline",fragment(){return _`fragment ${this.name} on GeographicRegion {
        alignedName
      }
    `}}),Wq=({geographicRegion:e})=>s.jsx(s.Fragment,{children:e.alignedName}),Sb=A({name:"GeographicRegionLink",fragment(){return _`fragment ${this.name} on GeographicRegion {
        alignedName
        correspondingContent {
          ...${Dt.name}
        }
      }
      ${Dt.fragment()}
    `}}),Vq=({geographicRegion:e})=>{if(!(e!=null&&e.correspondingContent))return null;const t={key:"content_block.high_priority_stories.all",parameters:{region:e.alignedName}};return s.jsx(Fi,{content:e.correspondingContent,linkTranslation:t})},bd=A({name:"GeoRegionStoriesConfiguration",fragment(){return _`fragment ${this.name} on CompositionComponentPartConfiguration {
        geographicRegion {
          ...${xb.name}
          ...${Sb.name}
        }
      }
      ${xb.fragment()}
      ${Sb.fragment()}
    `}}),iee=A({name:"HighPriorityStories",fragment(){return _`fragment ${this.name} on CocoContent {
        configuration {
          ...${bd.name}
        }
        content {
          ...${vb.name}
        }
      }
      ${bd.fragment()}
      ${vb.fragment()}
    `}}),ig=e=>{var t;return s.jsx(Wq,{geographicRegion:(t=e==null?void 0:e.configuration)==null?void 0:t.geographicRegion})},og=e=>{var t;return s.jsx(Vq,{geographicRegion:(t=e==null?void 0:e.configuration)==null?void 0:t.geographicRegion})},Gq=({contents:e,hubHeadlineFn:t=ig,hubBottomElementFn:n=og,...r})=>se(e)&&s.jsx(zq,{hubContents:e,hubHeadlineFn:t,hubBottomElementFn:n,hideDescription:!0,...r}),oee=Uq,aee=h(Gq)``,Hq=A({name:"StoriesHub",fragment(){return _`fragment ${this.name} on CocoContent {
        configuration {
          sourceAssociations {
            targetId
            target {
              ... on NamedAspect {
                name
              }
            }
          }
        }
        content {
          ...${wd.name}
        }
      }
      ${wd.fragment()}
    `}}),Qq=A({name:"StoriesHubGeoRegion",fragment(){return _`fragment ${this.name} on CocoContent {
        configuration {
          ...${bd.name}
        }  
        content {
          ...${wd.name}
        }
      }
      ${bd.fragment()}
      ${wd.fragment()}
    `}}),qq=e=>{const t=e.configuration.sourceAssociations[0];return t&&t.target&&t.target.name},Yq=({contents:e=[],hubHeadlineFn:t=qq,...n})=>s.jsx(Fq,{hubContents:e,hubHeadlineFn:t,...n}),wb=h(Yq)``,Kq=ng,Xq=A({name:"StoriesListConfig",fragment(){return _`fragment ${this.name} on CompositionComponent {
        configuration {
          numContentItems
        }
      }
    `}}),Zq=({configuration:e,...t})=>s.jsx(VA,{...t,initialListCount:e.numContentItems}),Jq=h(Zq)``,eY=Pa,tY=e=>s.jsx(sc,{...e}),nY=h(tY)``,rY=Pa,iY=e=>s.jsx(sc,{...e}),oY=h(iY)``,aY=h(Zn)`
  ${Jn()}
  ${Kl()}
  ${TC({noImageSelector:".author-data:first-child"})}
  ${gU()}
`,bb=A({name:"BigImageOpinionContentTeaser",fragment(){return _`fragment ${this.name} on Content {
      ... on UrlAspect {
        namedUrl
      }
      ... on NamedAspect {
        title
      }
      ...${Da.name}
      ...${U.contentStatusTeaserBadgeFragment.name}
      ...${U.linkedTitleFragment.name}
      ...${U.teaserFooterFragment.name}
    }
    ${Da.fragment()}
    ${U.contentStatusTeaserBadgeFragment.fragment()}
    ${U.linkedTitleFragment.fragment()}
    ${U.teaserFooterFragment.fragment()}
    `}}),sY=({content:e={},className:t,titleIsA:n})=>s.jsxs(un,{className:H(t,"row"),content:e,children:[s.jsx(q.MainContentArea,{children:s.jsxs(R0,{children:[s.jsx(q.ContentStatusTeaserBadge,{}),s.jsx(q.LinkedTitle,{isA:n,forceItalic:!0})]})}),s.jsx(q.TeaserFooter,{className:"teaser-footer-wrapper col-12"})]}),lY=h(sY)``,cY=A({name:"ListDefaultUnifiedBigImageOpinion",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${bb.name}
      }
      ${bb.fragment()}
    `}}),uY=({contents:e=[],...t})=>s.jsx(_r,{headlineIsA:"h2",...t,children:s.jsx(aY,{children:e.map(n=>s.jsx(lY,{content:n,titleIsA:"h3"},n.id))})}),dY=h(uY)``,fY=cY,pY=e=>s.jsx(dY,{...e}),mY=h(pY)``,hY=Kh,gY=({contents:e,pageSectionId:t,className:n})=>{const[r]=e;return s.jsx(Jt,{className:n,headlineIsA:"h2",pageSectionId:t,headlineTranslation:"content_block.widget.headline",children:s.jsx(mA,{widget:r})})},yY=h(gY)`
  .content-block h2 {
      ${ko}
  }
`,kb=A({name:"HeadlineContentTeaser",fragment(){return _`fragment ${this.name} on Content {
        ... on UrlAspect {
          namedUrl
        }
        ... on NamedAspect {
          title
        }
        ...${U.teaserDataFragment.name}
        ...${U.contentStatusTeaserBadgeFragment.name}
        ...${U.linkedTitleFragment.name}
      }
      ${U.teaserDataFragment.fragment()}
      ${U.contentStatusTeaserBadgeFragment.fragment()}
      ${U.linkedTitleFragment.fragment()}
    `}}),vY=({content:e={},className:t,titleIsA:n,isCurrent:r})=>s.jsx(un,{className:H(t,"row"),content:e,isCurrent:r,children:s.jsx(q.MainContentArea,{children:s.jsxs(q.Data,{children:[s.jsx(q.ContentStatusTeaserBadge,{}),s.jsx(q.LinkedTitle,{isA:n})]})})}),xY=h(vY)``,Eb=A({name:"ListDefaultUnifiedHeadline",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${kb.name}
      }
      ${kb.fragment()}
    `}}),SY=({contents:e=[],preListSlotFn:t=Te,...n})=>{const r=t();return s.jsxs(_r,{headlineIsA:"h2",...n,children:[r,s.jsx(Zl,{children:e.map(i=>s.jsx(xY,{content:i,titleIsA:r?"h4":"h3",isCurrent:i.isCurrent},i.id))})]})},wY=h(SY)``,iL=3,bY=A({name:"TopicCluster",fragment(){return _`fragment ${this.name} on Content {
      ... on AssociationsAspect {
        allDossierContents: dossierContents {
          ... on ModelAspect {
            id
          }
        }
        dossierContents(amount: ${iL}) {
          ...${Eb.name}
        }
      }
      ...on TextualAspect {
          shortTeaser
          shortTitle
      }
      ...${Dt.name}
      ...${Na.name}
    }
    ${Eb.fragment()}
    ${Dt.fragment()}
    ${Na.fragment()}
    `}}),kY=e=>()=>s.jsx(Fi,{content:e,linkTranslation:{key:"content_block.topic_cluster.all",parameters:{totalNumberOfStories:e.allDossierContents.length}}}),EY=({contents:e=[],className:t,pageSectionId:n="topic-cluster",headlineTranslation:r="content_block.topic_cluster.headline"})=>{var o;const[i]=e;return se(i==null?void 0:i.dossierContents)?s.jsx(wY,{className:t,bottomElementFn:((o=i==null?void 0:i.allDossierContents)==null?void 0:o.length)>iL?kY(i):Te,headlineTranslation:r,pageSectionId:n,contents:i.dossierContents,preListSlotFn:()=>s.jsx(K0,{className:"topic",content:i,topicTitleSelector:a=>a.shortTitle,topicTeaserSelector:a=>a.shortTeaser})}):null},$Y=h(EY)`
  .topic {
    margin-bottom: ${Of};
  }
`,kd=A({name:"AutoTopicHeader",fragment(){return _`fragment ${this.name} on AutoTopic {
        teaser
        name
      }
    `}}),TY=({className:e,autoTopic:t})=>s.jsxs("div",{className:e,children:[s.jsx(FC,{children:t.name}),s.jsx(OC,{className:"topic-badge"}),s.jsx(BC,{children:t.teaser})]}),_Y=`
  ${PC}
  ${MC}
`,oL=h(TY)`
  margin-bottom: ${Of};

  display: grid;
  justify-items: center;

  .topic-badge {
    margin-top: 10px;
  }

  ${b.md`
    .topic-badge {
      margin-top: 15px;
    }
  `}

  ${b.lg`
    .topic-badge {
      margin-top: 20px;
    }
  `}
`,CY=A({name:"TopicClusterAutomaticConfig",fragment(){return _`fragment ${this.name} on CompositionComponent {
        configuration {
          sourceAssociations {
            targetId
            target {
              ... on DeliveryAspect {
                autoDelivery
              }
              ...${Dt.name}
              ...${kd.name}
            }
          }
        }
      }
      ${Dt.fragment()}
      ${kd.fragment()}
    `}}),AY=Sv,LY=e=>()=>s.jsx(Fi,{content:e,linkTranslation:"content_block.topic_cluster_automatic.all"}),IY=({contents:e=[],configuration:t={},className:n,pageSectionId:r="topic-cluster-automatic",headlineTranslation:i="content_block.topic_cluster.headline"})=>{if(!se(e))return null;const o=t.sourceAssociations[0].target;return s.jsx(zA,{className:n,bottomElementFn:o.autoDelivery?LY(o):Te,headlineTranslation:i,pageSectionId:r,contents:e,preListSlotFn:()=>s.jsx(oL,{autoTopic:o})})},jY=h(IY)``,$b=uo,OY=e=>s.jsx(Jl,{...e,hideDescription:!0}),RY=Ff,DY=h(OY)`
  ${LC()}
`,Ed=A({name:"ListCarousel",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
      }
    `}}),NY=({className:e,contents:t=[],preListSlotFn:n=Te,headlineTranslation:r,bottomElementFn:i,pageSectionId:o,teaserIsA:a,onDragEndWithoutSlideChange:l})=>{const c=n();if(!se(t))return null;const u=a;return s.jsxs(_r,{className:e,headlineTranslation:r,headlineIsA:"h2",pageSectionId:o,bottomElementFn:i,children:[c,s.jsx(ZA,{className:"carousel",onDragEndWithoutSlideChange:l,children:t.map(d=>s.jsx(JA,{children:s.jsx(u,{content:d,titleIsA:c?"h4":"h3"})},d.id))})]})},Tb=e=>oe[e]*2,aL=h(NY)`
  ${Xl}
  ${Jn("xs")}

  .slider {
    margin-top: 0;
    &:not(.has-indicator-xs) {
      padding-bottom: 0;
    }
    &.has-indicator-xs {
      padding-bottom: 17px;
    }
  }
  .carousel-icons {
    bottom: 0;
  }

  .content-block {
    display: grid;
    > *:not(.carousel) {
      padding-left: ${oe.xs}px;
      padding-right: ${oe.xs}px;
    }
  }

  ${b.sm`
    .content-block {
      > *:not(.carousel) {
        padding-left: ${oe.sm}px;
        padding-right: ${oe.sm}px;
      }
    }
  `}

  ${b.md`
    .content-block {
      > *:not(.carousel) {
        padding-left: ${oe.md}px;
        padding-right: ${oe.md}px;
      }
    }

    .slider:not(.has-indicator-md) {
      padding-bottom: 0;
    }

    .slider.has-indicator-md {
      padding-bottom:22px;
    }
  `}

  ${dr.md`
    .content-block {
      padding-left: 0;
      padding-right: 0;
    }
  `}

  ${b.lg`
    .content-block {
      > *:not(.carousel) {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .teaser-wrap {
      width: ${(En.lg-Tb("lg"))/2}px;
    }
  `}

  ${b.xl`
    .teaser-wrap {
      width: ${(En.xl-Tb("lg"))/2}px;
    }
  `};
`,PY=A({name:"AvCarousel",fragment(){return _`fragment ${this.name} on Content {
        ...${Ed.name}
        ...${$b.name}
      }
      ${Ed.fragment()}
      ${$b.fragment()}
    `}}),FY=e=>s.jsx(aL,{...e,teaserIsA:DY}),MY=h(FY)`
  ${RY}
`,BY=PY,UY=A({name:"TopicClusterAVConfig",fragment(){return _`fragment ${this.name} on CompositionComponent {
        configuration {
          sourceAssociations {
            targetId
            target {
              ... on DeliveryAspect {
                autoDelivery
              }
              ...${Dt.name}
              ...${kd.name}
            }
          }
        }
      }
      ${Dt.fragment()}
      ${kd.fragment()}
    `}}),zY=e=>()=>s.jsx(Fi,{content:e,linkTranslation:"content_block.topic_cluster_automatic.all"}),WY=({contents:e=[],configuration:t={},className:n,pageSectionId:r="topic-cluster-av",headlineTranslation:i="content_block.topic_cluster.headline"})=>{if(!se(e))return null;const o=t.sourceAssociations[0].target;return s.jsx(MY,{className:n,bottomElementFn:o.autoDelivery?zY(o):Te,headlineTranslation:i,pageSectionId:r,contents:e,preListSlotFn:()=>s.jsx(oL,{autoTopic:o})})},VY=h(WY)`
  ${_Y}
`,GY=({className:e})=>{const{content:t}=en(),{isRtl:n}=_n(),r=n?Ju:ed,i=t.namedUrl,o=AT(i)&&!LT(i),a=z("content_block.crosspromotion.link"),l=o?L_:r;return s.jsxs(He,{className:e,to:i,title:t.title,skipTitleForInternal:!0,tabIndex:-1,children:[a,s.jsx(l,{})]})},HY=h(GY)`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  column-gap: 5px;

  font-size: 1.4rem;

  svg {
    width: 14px;
    height: 21px;
  }
`,QY=A({name:"CrossPromotion",fragment(){return _`fragment ${this.name} on Reference {
        referenceUrl
        title
        shortTeaser
        ...${U.imageWrapFragment.name}
      }
      ${U.imageWrapFragment.fragment()}
    `}}),qY=({mainContentImageLink:e,referenceUrl:t}={})=>t&&(e==null?void 0:e.target),YY=e=>({...e,namedUrl:e.referenceUrl}),KY=({className:e,contents:t=[]})=>{const[n]=t;if(!qY(n))return null;const r=YY(n);return s.jsx(Jt,{className:e,headlineIsA:"h2",pageSectionId:"cross-promotion",headlineTranslation:"content_block.crosspromotion.headline",children:s.jsxs(un,{formatConfig:Ka(),content:r,className:"row",children:[s.jsx(q.LinkedImage,{className:"col-lg-8"}),s.jsx(q.MainContentArea,{className:"col-lg-4",children:s.jsxs(q.Data,{children:[s.jsx(q.LinkedTitle,{isA:"h3"}),s.jsx(q.LinkedDescription,{}),s.jsx(HY,{className:"promo-link"})]})})]})})},XY=h(KY)`
${O7}
.teaser {
  padding-left: 15px;
  padding-right: 15px;
  row-gap: 0;
  background-color: ${C.DW_LIGHT_BLUE_NEW};
  background-clip: content-box;

  .teaser-data-wrap {
    display: flex;
    padding: 15px 15px 12px 15px;

    .teaser-data {
      display: flex;
      flex-direction: column;
      width: 100%;
      .promo-link {
        margin-top: auto;
      }
      a:visited {
        color: ${C.DW_BLUE}
      }
    }

    .title {
      font-size: 2.4rem;
    }
  }

  .teaser-image-wrap {
    padding-right: 0;
    padding-left: 0;
  }
}

${b.md`
  .teaser {
    .teaser-data-wrap {
      .title {
        font-size: 2.8rem;
      }
    }
  }
`}

${b.lg`
  .teaser {
    .teaser-data-wrap {
      padding-left: 30px;
      .title {
        font-size: 3.2rem;
      }
    }
  }
`}

${b.xl`
  .teaser {
    .teaser-data-wrap
      .title {
        font-size: 3.6rem;
      }
    }
  }
`}

`,ag=A({name:"BigAvTextContentTeaser",fragment(){return _`fragment ${this.name} on Content {
      ... on UrlAspect {
        namedUrl
      }
      ... on NamedAspect {
        title
      }
      ...on TextualAspect {
        shortTeaser
        teaser
      }
      ...${U.teaserDataFragment.name}
      ...${U.contentStatusTeaserBadgeFragment.name}
      ...${U.avWrapFragment.name}
      ...${U.linkedTitleFragment.name}
      ...${cr.name}
    }
    ${U.teaserDataFragment.fragment()}
    ${U.contentStatusTeaserBadgeFragment.fragment()}
    ${U.avWrapFragment.fragment()}
    ${U.linkedTitleFragment.fragment()}
    ${cr.fragment()}
    `}}),ZY=({content:e={},className:t,titleIsA:n,hideDescription:r,hideKicker:i})=>s.jsxs(un,{className:H(t,"row"),content:e,hideKicker:i,hideDescription:r,children:[s.jsx(q.AVWrap,{titleIsA:n}),s.jsx(q.MainContentArea,{children:s.jsxs(q.Data,{children:[s.jsx(q.ContentStatusTeaserBadge,{}),s.jsx(q.LinkedTitle,{"aria-hidden":"true",isA:n}),s.jsx(q.LinkedDescription,{})]})})]}),sL=`
  ${$e.darkAvWrapStyles}
  ${$e.darkLinkedTitleStyles}
  ${$e.darkLinkedDescriptionStyles}
  ${$e.darkTeaserDataStyles}
`,lL=h(ZY)``,cL=yU,JY=h(Zn)`
  ${Jn()}
  ${vU()}
  ${Kl()}
  ${Rf()}
`,uL=A({name:"ListDefaultUnifiedBigAvText",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${ag.name}
      }
      ${ag.fragment()}
    `}}),eK=({contents:e=[],hideKicker:t,...n})=>s.jsx(_r,{headlineIsA:"h2",...n,children:s.jsx(JY,{children:e.map(r=>s.jsx(lL,{content:r,titleIsA:"h3",hideKicker:t},r.id))})}),dL=`
  ${Xl}
  ${sL}
  ${cL}
`,fL=h(eK)``,tK=uL,nK=({className:e,contents:t=[],isAVNews:n=!1,...r})=>{var a;const i=(a=t[0])==null?void 0:a.__typename.toLowerCase(),o=`content_block.${n?"av_news":"av_magazine"}.${i}.headline`;return s.jsx(fL,{className:e,headlineTranslation:o,contents:t,hideKicker:!0,...r})},rK=h(nK)`
  ${dL}
`,iK=Pa,oK=({contents:e,className:t})=>e?s.jsx(sc,{headlineTranslation:"content_block.breaking_news.headline",className:t,contents:e.slice(0,1),pageSectionId:"breaking-news"}):null,aK=h(oK)`
`,_b=ag,sK=e=>s.jsx(lL,{...e,hideDescription:!0}),lK=`
  ${sL}
  ${cL}
`,cK=h(sK)`
  ${LC()}

  .info-bar {
    height: 100%;
    cursor: pointer;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.9));
  }
`,bv=A({name:"AvPlayerCarousel",fragment(){return _`fragment ${this.name} on Content {
        ...${Ed.name}
        ...${_b.name}
      }
      ${Ed.fragment()}
      ${_b.fragment()}
    `}}),uK=e=>{var t,n,r,i,o,a,l;(n=(t=e==null?void 0:e.target)==null?void 0:t.className)!=null&&n.includes("info-bar")&&((l=(a=(o=(i=(r=e==null?void 0:e.target)==null?void 0:r.parentNode)==null?void 0:i.parentNode)==null?void 0:o.player)==null?void 0:a.play)==null||l.call(a))},dK=e=>s.jsx(aL,{...e,teaserIsA:cK,onDragEndWithoutSlideChange:uK}),kv=h(dK)`
  ${lK}
  ${AC()}
`,fK=Zh,pK=Xh,mK=({className:e,contents:t,headlineTranslation:n,pageSectionId:r})=>{const[i]=t;return s.jsxs(Ef,{className:e,pageSectionId:r,sectionTitle:n,children:[s.jsx(qf,{isA:"h2",translation:n}),s.jsx(Qf,{titleIsA:"h3",content:i})]})},Cb=h(mK)`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`,hK=Sv,gK=A({name:"ManualContentListConfig",fragment(){return _`fragment ${this.name} on CompositionComponent {
        configuration {
          contentBlockHeadline
        }
      }
    `}}),yK=({configuration:e={},headlineTranslation:t,...n})=>{const{contentBlockHeadline:r}=e;return s.jsx(zA,{...n,headlineTranslation:r||t})},vK=h(yK)``,El=Dt,xK=({className:e,programsOverview:t})=>{const{showProgramsOverview:n}=Mt(),r=z("content_block.all_programs.title"),i=z("content_block.all_programs.teaser_text"),o=z("content_block.all_programs.link");if(!n)return null;const a={...t,title:r,teaser:i};return s.jsx(Jt,{className:e,headlineIsA:"h2",pageSectionId:"all-programs",headlineTranslation:"content_block.all_programs.headline",children:s.jsx(Zl,{children:s.jsx(un,{content:a,hideKicker:!0,hideTimeIndicator:!0,children:s.jsxs(q.Data,{children:[s.jsx(q.LinkedTitle,{isA:"h3"}),s.jsx(q.LinkedDescription,{}),s.jsx(X0,{children:s.jsx(Fi,{content:t,linkTranslation:o,tabIndex:-1})})]})})})})},Ev=h(xK)`
  ${qn}
  ${$e.darkLinkedTitleStyles}
  ${$e.darkLinkedDescriptionStyles}
  ${zC}

  .teaser-data {
    padding: 15px;
    background-color: ${C.DARK_BLUE_GREY_01};
  }
`,SK=El,wK=({className:e,contents:t=[]})=>{const[n]=t;return s.jsx(Ev,{className:e,programsOverview:n})},pL=e=>(e==null?void 0:e.type.startsWith("TOP_STORY"))||(e==null?void 0:e.type.endsWith("TOP_STORY")),bK=e=>pL(e)||(e==null?void 0:e.type.startsWith("FEATURED_")),Ab=A({name:"CoCoAd",fragment(){return _`fragment ${this.name} on InformationSpace {
        name
      }
    `}}),Lb={topStory:{name:"T",slotConfig:Pz},opinion:{name:"M",slotConfig:Fz},Panorama:{name:"Pa",slotConfig:Mz}},kK=({infoSpace:e,compositionComponents:t,className:n})=>{const{slotConfig:r=null}=Object.values(Lb).find(({name:i})=>i===e.name)||{};if(!r||!se(t))return null;if(e.name===Lb.topStory.name){const[i]=t;if(pL(i)&&t.length===1)return null}return s.jsx(Gf,{slotConfig:r,className:n})},EK=h(kK)`
  padding-bottom: 40px;
`,mL=Object.freeze({TOP_STORIES:"T",PROGRAM:"Pr",RECOMMENDED:"E",OPINION:"M",SOCIAL_MEDIA:"S",PANORAMA:"Pa"}),hL=e=>t=>t.name===e,see=hL(mL.TOP_STORIES),$K=hL(mL.PROGRAM),TK=bv,_K=A({name:"AVPlayerCarouselGlobalTopicVideoAdapterConfiguration",fragment(){return _`fragment ${this.name} on CompositionComponent {
        configuration {
          sourceAssociations {
            targetId
            target {
              ... on NamedAspect {
                title
               }
              ... on DeliveryAspect {
                autoDelivery
              }
              ...${Dt.name}
            }
          }
        }
      }
      ${Dt.fragment()}
    `}}),CK=e=>()=>s.jsx(Fi,{content:e,linkTranslation:"content_block.topic_cluster_automatic.all"}),AK=({configuration:e,contents:t,...n})=>{var o;if(!Va())return null;const i=(o=e.sourceAssociations[0])==null?void 0:o.target;return s.jsx(kv,{headlineTranslation:i==null?void 0:i.title,bottomElementFn:i.autoDelivery?CK(i):Te,contents:t,...n})},LK=bv,IK=A({name:"AVPlayerCarouselProfileTopicVideoAdapterConfiguration",fragment(){return _`fragment ${this.name} on CompositionComponent {
        configuration {
          freeTitle
        }
      }
    `}}),jK=({configuration:e,contents:t,...n})=>Va()?s.jsx(kv,{headlineTranslation:e.freeTitle,contents:t,...n}):null,Z={CurrentNews:{cocoCmp:lq,fragment:iq,cocoConfigFragment:oq},TopStory:{cocoCmp:Oq,fragment:Iq},Stories:{cocoCmp:Jq,fragment:Kq,cocoConfigFragment:Xq},GeoLinkHubStories:{cocoCmp:wb,fragment:Qq,includesMultipleConfigs:!0},Hub:{cocoCmp:wb,fragment:Hq,includesMultipleConfigs:!0},DwRecommends:{cocoCmp:nY,fragment:eY,extraProps:{headlineTranslation:"content_block.dw_recommends.headline"}},Panorama:{cocoCmp:oY,fragment:rY,extraProps:{headlineTranslation:"content_block.panorama.headline"}},Opinion:{cocoCmp:mY,fragment:fY,extraProps:{headlineTranslation:"content_block.opinion.headline"}},Av:{cocoCmp:rK,fragment:tK},AvPlayerCarousel:{cocoCmp:kv,fragment:bv}},Ue={NEWS:{type:"NEWS",...Z.CurrentNews},NEWS_THEMATIC_FOCUS:{type:"NEWS_THEMATIC_FOCUS",...Z.CurrentNews},ATS_NEWS:{type:"ATS_NEWS",...Z.CurrentNews},NEWS_REGION:{type:"NEWS_REGION",...Z.CurrentNews},NEWS_COUNTRY:{type:"NEWS_COUNTRY",...Z.CurrentNews},TOP_STORY:{type:"TOP_STORY",...Z.TopStory},TOP_STORY_THEMATIC_FOCUS:{type:"TOP_STORY_THEMATIC_FOCUS",...Z.TopStory},TOP_STORY_COUNTRY:{type:"TOP_STORY_COUNTRY",...Z.TopStory},TOP_STORY_REGION:{type:"TOP_STORY_REGION",...Z.TopStory},ATS_TOP_STORY:{type:"ATS_TOP_STORY",...Z.TopStory},STORIES_THEMATIC_FOCUS:{type:"STORIES_THEMATIC_FOCUS",...Z.Stories,extraProps:{headlineTranslation:"content_block.stories_thematic_focus.headline"}},ATS_STORIES_LIST:{type:"ATS_STORIES_LIST",...Z.Stories,extraProps:{headlineTranslation:"content_block.stories_thematic_focus.headline"}},RELATED_STORIES_THEMATIC_FOCUS:{type:"RELATED_STORIES_THEMATIC_FOCUS",...Z.Stories,extraProps:{headlineTranslation:"content_block.related_stories_thematic_focus.headline"}},STORIES_LIST_REGION:{type:"STORIES_LIST_REGION",...Z.Stories,extraProps:{headlineTranslation:"content_block.stories_region.headline"}},STORIES_LIST_COUNTRY:{type:"STORIES_LIST_COUNTRY",...Z.Stories,extraProps:{headlineTranslation:"content_block.stories_country.headline"}},HIGH_PRIORITY_STORIES:{type:"HIGH_PRIORITY_STORIES",...Z.GeoLinkHubStories,extraProps:{headlineTranslation:"content_block.high_priority_stories.headline",hubHeadlineFn:ig,hubBottomElementFn:og}},HIGH_PRIORITY_STORIES_LIST:{type:"HIGH_PRIORITY_STORIES_LIST",...Z.DwRecommends,extraProps:{headlineTranslation:"content_block.high_priority_stories.headline"}},HUB_THEMATIC_FOCUS:{type:"HUB_THEMATIC_FOCUS",...Z.Hub,extraProps:{headlineTranslation:"content_block.hub_thematic_focus.headline"}},HUB_REGION:{type:"HUB_REGION",...Z.GeoLinkHubStories,extraProps:{headlineTranslation:"content_block.hub_region.headline",hubHeadlineFn:ig,hubBottomElementFn:og}},DW_RECOMMENDS:{type:"DW_RECOMMENDS",...Z.DwRecommends},DW_RECOMMENDS_THEMATIC_FOCUS:{type:"DW_RECOMMENDS_THEMATIC_FOCUS",...Z.DwRecommends},DW_RECOMMENDS_REGION:{type:"DW_RECOMMENDS_REGION",...Z.DwRecommends},DW_RECOMMENDS_COUNTRY:{type:"DW_RECOMMENDS_COUNTRY",...Z.DwRecommends},ATS_DW_RECOMMENDS:{type:"ATS_DW_RECOMMENDS",...Z.DwRecommends},PANORAMA:{type:"PANORAMA",...Z.Panorama},PANORAMA_THEMATIC_FOCUS:{type:"PANORAMA_THEMATIC_FOCUS",...Z.Panorama},PANORAMA_REGION:{type:"PANORAMA_REGION",...Z.Panorama},PANORAMA_COUNTRY:{type:"PANORAMA_COUNTRY",...Z.Panorama},OPINION:{type:"OPINION",...Z.Opinion},OPINION_THEMATIC_FOCUS:{type:"OPINION_THEMATIC_FOCUS",...Z.Opinion},OPINION_COUNTRY:{type:"OPINION_COUNTRY",...Z.Opinion},OPINION_REGION:{type:"OPINION_REGION",...Z.Opinion},ATS_OPINION:{type:"ATS_OPINION",...Z.Opinion},WIDGET_WEBAPP:{type:"WIDGET_WEBAPP",cocoCmp:yY,fragment:hY},DOSSIER:{type:"DOSSIER",cocoCmp:$Y,fragment:bY},CROSS_PROMOTION:{type:"CROSS_PROMOTION",cocoCmp:XY,fragment:QY},ATS_TOPIC_CLUSTER:{type:"ATS_TOPIC_CLUSTER",cocoCmp:jY,fragment:AY,cocoConfigFragment:CY},AV_NEWS:{type:"AV_NEWS",...Z.Av,extraProps:{isAVNews:!0}},AV_MAGAZINE:{type:"AV_MAGAZINE",...Z.Av},NEWS_VIDEO:{type:"NEWS_VIDEO",...Z.AvPlayerCarousel,extraProps:{headlineTranslation:"content_block.news_videos.headline"}},REPORTS_VIDEO:{type:"REPORTS_VIDEO",...Z.AvPlayerCarousel,extraProps:{headlineTranslation:"content_block.reports_videos.headline"}},DW_RECOMMENDS_VIDEO:{type:"DW_RECOMMENDS_VIDEO",...Z.AvPlayerCarousel,extraProps:{headlineTranslation:"content_block.dw_recommends.headline"}},FULL_SHOWS_VIDEO:{type:"FULL_SHOWS_VIDEO",...Z.AvPlayerCarousel,extraProps:{headlineTranslation:"content_block.full_shows_videos.headline"}},PANORAMA_VIDEO:{type:"PANORAMA_VIDEO",...Z.AvPlayerCarousel,extraProps:{headlineTranslation:"content_block.panorama.headline"}},TOPIC_CLUSTER_VIDEO:{type:"TOPIC_CLUSTER_VIDEO",cocoCmp:VY,fragment:BY,cocoConfigFragment:UY},FEATURED_VIDEO:{type:"FEATURED_VIDEO",fragment:pK,cocoCmp:Cb,extraProps:{headlineTranslation:"content_block.featured_video.headline"}},FEATURED_AUDIO:{type:"FEATURED_AUDIO",fragment:fK,cocoCmp:Cb,extraProps:{headlineTranslation:"content_block.featured_audio.headline"}},NEWS_AUDIO:{type:"NEWS_AUDIO",...Z.AvPlayerCarousel,extraProps:{headlineTranslation:"content_block.news_audios.headline"}},REPORTS_AND_SHOWS_AUDIO:{type:"REPORTS_AND_SHOWS_AUDIO",...Z.AvPlayerCarousel,extraProps:{headlineTranslation:"content_block.reports_and_shows_audios.headline"}},MANUAL_CONTENTS:{type:"MANUAL_CONTENTS",fragment:hK,cocoConfigFragment:gK,cocoCmp:vK,extraProps:{headlineTranslation:"content_block.stories_thematic_focus.headline"}},BREAKING_NEWS_WEBAPP:{type:"BREAKING_NEWS_WEBAPP",cocoCmp:aK,fragment:iK},C_All_PROGRAMS_OVERVIEW:{type:"C_All_PROGRAMS_OVERVIEW",cocoCmp:wK,fragment:SK},GLOBAL_TOPIC_VIDEO:{type:"GLOBAL_TOPIC_VIDEO",cocoCmp:AK,fragment:TK,cocoConfigFragment:_K},PROFILE_TOPIC_VIDEO:{type:"PROFILE_TOPIC_VIDEO",cocoCmp:jK,fragment:LK,cocoConfigFragment:IK}},$v=e=>e.includesMultipleConfigs?"cocoContents":"contents",OK=()=>Object.values(Ue).map(e=>{const t=$v(e);return`${e.type.toLowerCase()}: compositionComponents(type: ${e.type}) {
    id
    type
    order
    ${e.cocoConfigFragment?`...${e.cocoConfigFragment.name}`:""}
    ${t} {
      ...${e.fragment.name}
    }
  }`}).join(`
`),$d=A({name:"CoCoComponentSelector",fragment(){return _`fragment ${this.name} on InformationSpace {
        ${OK()}
        ...${Ab.name}
      }
      ${Ab.fragment()}
      ${co.fragment()}
      ${lo.fragment()}

      ${Z.CurrentNews.fragment.fragment()}
      ${Z.CurrentNews.cocoConfigFragment.fragment()}
      ${Z.TopStory.fragment.fragment()}
      ${Z.Stories.fragment.fragment()}
      ${Z.Stories.cocoConfigFragment.fragment()}
      ${Z.GeoLinkHubStories.fragment.fragment()}
      ${Z.Hub.fragment.fragment()}
      ${Z.DwRecommends.fragment.fragment()}
      ${Z.Panorama.fragment.fragment()}
      ${Z.Opinion.fragment.fragment()}
      ${Z.Av.fragment.fragment()}
      ${Z.AvPlayerCarousel.fragment.fragment()}
      ${Ue.REPORTS_AND_SHOWS_AUDIO.fragment.fragment()}
      ${Ue.WIDGET_WEBAPP.fragment.fragment()}
      ${Ue.DOSSIER.fragment.fragment()}
      ${Ue.CROSS_PROMOTION.fragment.fragment()}
      ${Ue.ATS_TOPIC_CLUSTER.fragment.fragment()}
      ${Ue.ATS_TOPIC_CLUSTER.cocoConfigFragment.fragment()}
      ${Ue.FEATURED_AUDIO.fragment.fragment()}
      ${Ue.FEATURED_VIDEO.fragment.fragment()}
      ${Ue.TOPIC_CLUSTER_VIDEO.fragment.fragment()}
      ${Ue.TOPIC_CLUSTER_VIDEO.cocoConfigFragment.fragment()}
      ${Ue.MANUAL_CONTENTS.fragment.fragment()}
      ${Ue.MANUAL_CONTENTS.cocoConfigFragment.fragment()}
      ${Ue.BREAKING_NEWS_WEBAPP.fragment.fragment()}
      ${Ue.C_All_PROGRAMS_OVERVIEW.fragment.fragment()}
      ${Ue.GLOBAL_TOPIC_VIDEO.fragment.fragment()}
      ${Ue.GLOBAL_TOPIC_VIDEO.cocoConfigFragment.fragment()}
      ${Ue.PROFILE_TOPIC_VIDEO.fragment.fragment()}
      ${Ue.PROFILE_TOPIC_VIDEO.cocoConfigFragment.fragment()}
    `}}),RK=e=>[_y(e.type),e.id].filter(t=>!!t).join("-"),DK=({compositionComp:e})=>{const t=Ue[e.type],n=e[$v(t)],{cocoCmp:r,extraProps:i={}}=t;return s.jsx(r,{contents:n,configuration:e.configuration,className:_y(e.type),pageSectionId:RK(e),...i})},NK=e=>{const t=Ue[e.type],n=e[$v(t)];return se(n)},Tv=e=>Object.values(Ue).map(t=>e[t.type.toLowerCase()]).reduce((t,n)=>[...t,...n],[]).filter(NK).sort((t,n)=>t.order-n.order),gL=({infoSpace:e,onChangeInViewListenerForHeaderSwitch:t=Te,isFirst:n=!1})=>{const r=hv(),i=Tv(e);return i.map((o,a)=>{const l=bK(o),c=n&&a===0?{Tag:ry,props:{rootMargin:r,onChange:t,as:l?"span":"div"}}:{Tag:l?"span":"div",props:{}};return s.jsxs(c.Tag,{className:H({"basic-color":l,"auto-bg-color":!l,"always-dark":$K(e)}),...c.props,children:[s.jsx(DK,{compositionComp:o}),a===i.length-1&&s.jsx(EK,{infoSpace:e,compositionComponents:i})]},o.id)})},Qs={basicBgColor:"--coco-page-layout-basic-color",alternativeBgColor:"--coco-page-layout-alternative-color"},yL=`
  ${Qs.basicBgColor}: ${C.DARK_BLUE_GREY_01};
  ${Qs.alternativeBgColor}: ${C.DARK_BLUE_GREY_02};
`,PK=({className:e,...t})=>s.jsx("div",{className:`content-blocks ${e}`,...t}),FK=h(PK)`
  &.content-blocks .basic-color {
    display: flow-root;
    background: var(${Qs.basicBgColor}, transparent);
  }
  &.content-blocks > .always-dark {
    ${yL}
  }
  &.content-blocks > .auto-bg-color:nth-of-type(2n+1),
  &.content-blocks > .auto-bg-color:nth-of-type(2n+1) .carousel {
    background: var(${Qs.basicBgColor}, transparent);
  }
  &.content-blocks > .auto-bg-color:nth-of-type(2n),
  &.content-blocks > .auto-bg-color:nth-of-type(2n) .carousel {
    background: var(${Qs.alternativeBgColor}, ${C.BLUE_GREY_01});
  }

  &.content-blocks > *:first-child .quick-item {
    top: 2px;
  }
`,vL=$r(FK)`
  ${yL}
  ${Object.values($e).join(`
`)}
  ${qn}
  ${nL}
  ${Mi}
`,Ib=A({name:"NavigationCoCo",fragment(){return _`fragment ${this.name} on Navigation {
      id
      pageHeadline
      isMediaTemplate
      contentComposition {
        informationSpaces {
          id
          ...${$d.name}
        }
      }
      ... on AssociationsAspect {
        topStoriesNavigation {
          id
        }
      }
    }
    ${$d.fragment()}
    `}}),MK=({navigation:e,className:t,onChangeInViewListenerForHeaderSwitch:n})=>{const{pageHeadline:r,isMediaTemplate:i,contentComposition:{informationSpaces:o}}=e,a=kf(e);return s.jsxs(Ya,{className:t,id:Me.quickNav.mainContent,children:[a?s.jsx(qf,{isA:"h1",translation:"pages.homepage.page_title"}):r&&s.jsx(is,{children:r}),s.jsx(vL,{hasTheme:i,children:o.filter(l=>se(Tv(l))).map((l,c)=>s.jsx(gL,{infoSpace:l,isFirst:c===0,onChangeInViewListenerForHeaderSwitch:!a&&c===0?n:void 0},l.id))})]})},BK=h(MK)`
`,UK=e=>{const t=kf(e),{isMobileMode:n}=At(),[r,,i]=so("com.dw.userLanguageDetected",{isPrimitive:!0}),o=r==="true";return x.useEffect(()=>()=>{o&&i()},[o,i,t]),vn(O.window,"pagehide",i,{once:!0}),{isLanguageNotificationShown:o&&t&&!n,closeLanguageNotification:i}},jb=A({name:"LanguageNotification",fragment(){return _`fragment ${this.name} on Navigation {
        id
        topStoriesNavigation {
          id
        }
      }
     `}}),zK=({className:e,navigation:t})=>{const{langCode:n}=ot(),r=td.native[n],{isLanguageNotificationShown:i,closeLanguageNotification:o}=UK(t),a=z("component.notification.language.label"),l=z({key:"component.notification.language.message",parameters:{language:r}});if(!i)return null;const c=async()=>{var u,d;await((u=O.document.getElementById(Me.quickNav.navigationToggle))==null?void 0:u.click()),await((d=O.document.getElementById(Me.languageSelectorToggle))==null?void 0:d.click()),o()};return s.jsxs("section",{className:e,"aria-label":a,children:[s.jsx(it,{children:l}),s.jsxs(t0,{className:"open-lang-selector",onClick:c,children:[s.jsx(l7,{className:"globe-icon"}),"Change language"]})]})},WK=h(zK)`
  ${it.darkStyles}
  ${t0.darkStyles}

  background-color: ${C.DW_GREY_14};
  padding: 6px 15px;
  font-size: 1.4rem;
  display: inline-block;
  width: 100%;

  .open-lang-selector {
    display: flex;
    gap: 5px;
    float: right;
    margin-left: 15px;
  }
`,Td=A({name:"CoCoPageHeadlineInHeader",fragment(){return _`fragment ${this.name} on CoCoAspect {
      pageHeadline
    }
    `}}),VK=({navigation:e,className:t})=>s.jsx("div",{className:t,children:s.jsx(Vl,{className:"content-title",children:e.pageHeadline})}),lc=h(VK)`
  width: 100%;
  display: flex;

  & > span {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  margin-right: 18px;
  font-size: 1.8rem;
  ${b.sm`
    font-size: 2rem;
  `}
  ${b.md`
    font-size: 2.4rem;
  `}
  ${b.lg`
    font-size: 2.6rem;
    margin-right: 63px;
  `}
  ${b.xl`
    margin-right: 181px;
  `}

`,GK=e=>{const{langCode:t}=ot(),[,n]=so("com.dw.userLanguage",{isPrimitive:!0});x.useEffect(()=>{kf(e)&&n(t)},[e.id])},HK=A({name:"NavigationWithFallback",fragment(){const e=An(),t=Ln();return _`fragment ${this.name} on Navigation {
        name
        visibleInWebApp
        pageTitle
        metaDescription
        ...${Ge.name}
        ...${Td.name}
        ...${Ib.name}
        ...${e.name}
        ...${t.name}
        ...${hr.name}
        ...${Re.name}
        ...${jb.name}
      }
      ${Ge.fragment()}
      ${Td.fragment()}
      ${Ib.fragment()}
      ${e.fragment()}
      ${t.fragment()}
      ${hr.fragment()}
      ${Re.fragment()}
      ${jb.fragment()}
     `}}),QK=({navigation:e})=>{GK(e);const[{hasLeftViewport:t,onChangeInViewListenerForHeaderSwitch:n}]=_o();return!e.visibleInWebApp||!e.contentComposition?s.jsx(an,{}):s.jsxs(s.Fragment,{children:[s.jsx(er,{content:e}),s.jsx(Kn,{content:e}),s.jsx(Co,{content:e}),s.jsx(Yn,{content:e}),s.jsx(Kt,{hasWhiteState:!kf(e)&&t,content:e,children:({isHeaderInWhiteState:r})=>r?s.jsx(lc,{navigation:e}):null}),s.jsx(Er,{}),s.jsx(WK,{navigation:e}),s.jsx(Hf,{slotConfig:nv}),s.jsx(BK,{navigation:e,onChangeInViewListenerForHeaderSwitch:n}),s.jsx(In,{content:e})]})},qK={name:"getNavigationPage",fragmentDef:HK},YK=()=>s.jsx(xo,{queryOptions:qK,children:({content:e})=>s.jsx(QK,{navigation:e})}),Ob=tg,KK=[{minWidth:B.min.xs,maxWidth:B.max.xs,formatGroupName:"80X"},{minWidth:B.min.sm,maxWidth:B.max.sm,formatGroupName:"60X"},{minWidth:B.min.md,maxWidth:B.max.md,formatGroupName:"80X"},{minWidth:B.min.lg,maxWidth:B.max.wide_xl,formatGroupName:"60X"}],XK=({content:e,className:t})=>e?s.jsx("div",{className:t,children:s.jsx(WA,{content:e,imageFormatConfig:KK})}):null,ZK=wv,JK=h(XK)`
  .teaser{
    display: flex;
  }

  .teaser-image-wrap {
    max-width: 80px;
    max-height: 80px;
    padding: 0;
    margin-right: 15px;
  }

  .teaser-data-wrap {
    flex: initial;
    display: flex;
    flex-direction: column;
    padding: 0;

    .teaser-data {
      flex-grow: 1;
    }
  }

  .title {
    font-size: 1.8rem;
    font-style: normal;
  }

  .teaser-footer-wrapper {
    margin-top: 10px;
  }

  ${b.sm`
    .teaser-image-wrap {
      max-width: 150px;
      max-height: 85px;
    }
    .title {
      font-size: 2rem;
    }
  `};

  ${b.md`
    .teaser-image-wrap {
      max-width: 90px;
      max-height: 90px;
    }
  `};

  ${b.lg`
    .teaser-image-wrap {
      max-width: 130px;
      max-height: 80px;
    }
  `};

  ${b.xl`
    .teaser-image-wrap {
      max-width: 160px;
      max-height: 90px;
    }
  `};
`,eX=({className:e,children:t,aboveImage:n})=>{const r=n?Ft:Vl;return s.jsx(r,{isA:"h1",className:e,children:t})},tX=Vl.darkStyles,nX=h(eX)`
  ${Ft.darkStyles}
  font-size: 2.4rem;
  word-wrap: break-word;
  margin-bottom: 10px;
  text-align: center;
  ${Y0}

  ${b.sm`
    font-size: 3.2rem;
  `}

  ${b.md`
    font-size: 4.1rem;
    margin-bottom: 20px;
  `}

  ${b.lg`
    font-size: 5.0rem;
    margin-bottom: 30px;
    max-width: ${En.lg}px;
    margin-left: auto;
    margin-right: auto;
  `}

  ${b.xl`
    font-size: 6.0rem;
    max-width: ${En.xl}px;
  `}
`,Rb=A({name:"TopicHeader",fragment(){return _`fragment ${this.name} on AutoTopic {
          teaser
          name
          explainer {
            ...${Ob.name}
          }
          ...${Yh.name}
        }
        ${Yh.fragment()}
        ${Ob.fragment()}
    `}}),xL={bgColor:"--topic-header-bg-color"},SL=`
  ${Pi}
  ${ZK}
  ${tX}
  ${xL.bgColor}: ${C.DARK_BLUE_GREY_02};
`,rX=({content:e,className:t})=>s.jsxs("header",{className:t,children:[s.jsx(NC,{className:"image-with-title",content:e,showBadge:!0,preload:!0,titleSlotFn:({hasImage:n})=>s.jsx(nX,{className:"custom-topic-title",aboveImage:n,children:e.name})}),s.jsx("div",{className:"full-background",children:s.jsxs("div",{className:"container-wrapper",children:[s.jsx(Wr,{className:"teaser-text",children:e.teaser}),s.jsx(JK,{className:"explainer-teaser",content:e.explainer})]})})]}),wL=h(rX)`
  ${DC}
  .image-with-title .topic-title:first-child .custom-topic-title {
    margin-top: 20px;
  }

  .full-background {
    background-color:  var(${xL.bgColor}, ${C.BLUE_GREY_01});
  }

  .container-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 30px;
    ${qa()}
  }

  .teaser-text {
    text-align: center;
  }

  .explainer-teaser {
    padding-top: 30px;
  }

  ${b.md`
      .image-with-title .topic-title:first-child .custom-topic-title{
        margin-top: 30px;
      }
      .container-wrapper {
        padding-top: 30px;
      }
      .teaser-text {
        font-size: 1.6rem;
        text-align: left;
        width: 50%;
        padding-right: 15px;
      }
      .teaser-text:last-child {
        width: 100%;
        text-align: center;
        padding-right: 0;
      }
      .explainer-teaser {
        width: 50%;
        padding-top: 0;
        padding-left: 15px;
      }
    `}

  ${b.lg`
      .image-with-title .topic-title:first-child .custom-topic-title{
        margin-top: 40px;
      }
      .teaser-text {
        font-size: 1.8rem;
      }
      .teaser-text:last-child {
        padding-right: 80px;
        padding-left: 80px;
      }
    `}

  ${b.xl`
      .teaser-text:last-child {
        padding-right: 95px;
        padding-left: 95px;
      }
    `}
`;wL.darkStyles=SL;const iX=$r(wL)`
  ${SL}
`,Db=A({name:"AutoTopicCoCo",fragment(){return _`fragment ${this.name} on AutoTopic {
      id
      pageHeadline
      isCurrent
      contentComposition {
        informationSpaces {
          id
          ...${$d.name}
        }
      }
      ...${Rb.name}
    }
    ${$d.fragment()}
    ${Rb.fragment()}
    `}}),oX=({autoTopic:e,className:t,onChangeInViewListenerForHeaderSwitch:n})=>{const{pageHeadline:r,contentComposition:{informationSpaces:i},isCurrent:o}=e;return s.jsxs(Ya,{className:t,id:Me.quickNav.mainContent,children:[o?s.jsx(is,{children:r}):s.jsx(iX,{content:e}),s.jsx(vL,{children:i.filter(a=>se(Tv(a))).map((a,l)=>s.jsx(gL,{infoSpace:a,isFirst:l===0,onChangeInViewListenerForHeaderSwitch:l===0?n:void 0},a.id))})]})},aX=h(oX)`
`,sX=A({name:"AutoTopicWithFallback",fragment(){const e=An(),t=Ln();return _`fragment ${this.name} on AutoTopic {
        name
        description
        ...${Ge.name}
        ...${Td.name}
        ...${Db.name}
        ...${e.name}
        ...${t.name}
        ...${hr.name}
        ...${Re.name}
      }
      ${Ge.fragment()}
      ${Td.fragment()}
      ${Db.fragment()}
      ${e.fragment()}
      ${t.fragment()}
      ${hr.fragment()}
      ${Re.fragment()}
     `}}),lX=({autoTopic:e})=>{const[{hasLeftViewport:t,onChangeInViewListenerForHeaderSwitch:n}]=_o();return e.contentComposition?s.jsxs(s.Fragment,{children:[s.jsx(er,{content:e}),s.jsx(Kn,{content:e}),s.jsx(Co,{content:e}),s.jsx(Yn,{content:e}),s.jsx(Kt,{hasWhiteState:t,content:e,children:({isHeaderInWhiteState:r})=>r?s.jsx(lc,{navigation:e}):null}),s.jsx(Er,{}),s.jsx(Hf,{slotConfig:nv}),s.jsx(aX,{autoTopic:e,onChangeInViewListenerForHeaderSwitch:n}),s.jsx(In,{content:e})]}):s.jsx(an,{})},cX={name:"getAutoTopicPage",fragmentDef:sX},uX=()=>s.jsx(xo,{queryOptions:cX,children:({content:e})=>s.jsx(lX,{autoTopic:e})}),dX=3,fX=({livestreamChannel:e,currentDate:t})=>{const{nextTimeSlots:n}=e,r=n.findIndex(o=>Z2({dateStr:t.toISOString(),startDateStr:o.startDate,endDateStr:o.endDate})),i=Math.min(r+dX,n.length);return n.slice(r,i)},pX=({currentDate:e,today:t})=>{const n=Et()?e.toISOString():e.toLocaleString("sv").replace(" ","T");return t.find(r=>r.iso===n.substring(0,n.indexOf("T")))},bL=x.createContext({currentDate:null,currentDay:null,displayedTimeSlots:[]}),_v=()=>x.useContext(bL),mX=()=>_v().currentDay,kL=()=>_v().displayedTimeSlots,hX=e=>{const{currentDate:t}=_v();return Z2({dateStr:t.toISOString(),startDateStr:e.startDate,endDateStr:e.endDate})},gX=5.1*C0,yX=({refreshState:e})=>{const t=Va(),[n,r]=x.useState(0),i=o=>{const a=new Date,l=n+ +o.detail.minutes;a.setMinutes(a.getMinutes()+l),e(a),r(l)};vn(O.document,"forward-time-for-schedule",t?i:Te)},vX=({state:e,refreshState:t})=>{const n=e.displayedTimeSlots[0],r=n?new Date(n.endDate)-e.currentDate:null;If({callback:t,delay:r,conditional:r},[e.currentDate])},xX=({startPolling:e,stopPolling:t})=>{x.useEffect(()=>(e(gX),()=>{t()}),[e,t])},SX=({children:e,livestreamChannel:t,today:n,fetchHelpers:r})=>{const i=(c=new Date)=>{const u=fX({livestreamChannel:t,currentDate:c}),d=pX({currentDate:c,today:n});return{currentDate:c,displayedTimeSlots:u,currentDay:d}},[o,a]=x.useState(i()),l=c=>a(i(c));return vX({state:o,refreshState:l}),xX(r),yX({refreshState:l}),s.jsx(bL.Provider,{value:o,children:e})},Nb=A({name:"TimeSlotRow",fragment(){return _`fragment ${this.name} on TimeSlot {
      startDate
      endDate
      program {
        name
        posterImageUrl
      }
      programElement {
        name
        teaser
      }
    }`}}),Pb=({dateStr:e,isServer:t})=>new Date(e).toLocaleTimeString(["en-GB"],{hour:"2-digit",minute:"2-digit",timeZone:t?"UTC":void 0,timeZoneName:t?"short":void 0}),wX=e=>{const t=Pb({dateStr:e,isServer:!0}),[n,r]=x.useState(t);return x.useEffect(()=>{r(Pb({dateStr:e}))},[e]),n},bX=({className:e,timeSlot:t})=>{var c,u,d,f;const[n,{toggleOnClick:r}]=rc(),i=z(`content_block_detail.live_video_program_schedule.program_info_button.label.${n?"close":"open"}`),o=n?"opened":"closed",a=wX(t.startDate),l=hX(t);return s.jsxs("div",{role:"row",className:H(e,o,{live:l}),children:[s.jsx(we,{role:"cell",className:"time",children:a}),s.jsxs("div",{role:"cell",className:"program-names",children:[s.jsx(yo,{children:(c=t.program)==null?void 0:c.name}),s.jsx(it,{children:(u=t.programElement)==null?void 0:u.name})]}),(d=t.programElement)!=null&&d.teaser?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"teaser-toggle",children:s.jsx(ht,{className:"arrow",onClick:r,title:i,"aria-expanded":n,children:s.jsx(Ml,{pointsDown:!n})})}),s.jsx(it,{role:"cell",className:"teaser",children:(f=t.programElement)==null?void 0:f.teaser})]}):null]})},kX=h(bX)`
  ${ht.darkStyles}
  ${we.darkStyles}
  ${it.darkStyles}
  ${yo.darkStyles}
  will-change: transform, max-height;

  font-size: 1.4rem;
  background-color: ${C.DARK_BLUE_GREY_02};

  padding: 10px 10px 0px 15px;
  margin-bottom: 2px;
  > *${G.topElements(3)} {
    padding-bottom: 10px;
  }

  &.live {
    border-left: 5px solid ${C.DARK_GREEN};
    padding-left: 10px;
  }

  display: grid;
  grid-template-columns: 50px 1fr auto;
  grid-template-areas:
    "time    programNames  teaserToggle"
    "time    programNames  teaserToggle"
    "teaser  teaser        teaserToggle";

  .time {
    grid-area: time;
  }
  .program-names {
    grid-area: programNames;
    padding-left: 5px;

    & > * {
      display: block;
    }
  }
  .teaser-toggle {
    grid-area: teaserToggle;

    padding-left: 5px;
  }
  .teaser {
    grid-area: teaser;

    max-height: 250px;
    padding-bottom: 10px;
    transition: all 450ms cubic-bezier(0.43, 0, 0.09, 1);
    transition-property: max-height, padding-bottom;

    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  &.closed .teaser {
    max-height: 0;
    padding-bottom: 0;
  }

  .arrow {
    margin-top: -5px;
    width: 29px;

    svg {
      width: 19px;
    }
  }


   ${b.sm`
     .teaser-toggle {
        padding-left: 10px;
      }
  `}

  ${b.md`
    grid-template-columns: 66px 1fr auto;
    font-size: 1.6rem;
  `}
`,EX=A({name:"LivestreamScheduleCaptionToday",fragment(){return _`fragment ${this.name} on DayDate {
      iso
      localized
      localizedSr
      dayName
    }`}}),$X=({className:e,id:t})=>{const n=mX();return s.jsxs("div",{id:t,className:e,children:[s.jsxs("span",{className:"current-date","aria-hidden":"true",children:[s.jsx(we,{className:"weekday",children:n.dayName}),s.jsx(we,{isA:"time",children:n.localized})]}),s.jsx(_0,{children:n.localizedSr})]})},TX=h($X)`
  ${we.darkStyles}
  font-size: 1.1rem;

  .current-date {
    time {
      letter-spacing: 0.085rem;
    }

    & > *${G.notLast} {
      &:after {
        content: '\u00A0|\u00A0';
        letter-spacing: 0.08rem;
        margin: 0 2px;
      }
    }
  }
`,nm=({name:e})=>s.jsx("span",{role:"columnheader",children:z(`content_block_detail.live_video_program_schedule.schedule_table_header.${e}`)}),_X=({className:e})=>s.jsx(_0,{className:e,children:s.jsx("div",{role:"rowgroup",children:s.jsxs("div",{role:"row",children:[s.jsx(nm,{name:"time"}),s.jsx(nm,{name:"program"}),s.jsx(nm,{name:"description"})]})})}),CX=h(_X)`
`,AX=A({name:"LivestreamSchedule",fragment(){return _`fragment ${this.name} on Channel {
      nextTimeSlots {
        id
        ...${Nb.name}
      }
    }
    ${Nb.fragment()}
    `}}),LX=EX,IX=({className:e})=>{const t=kL();return s.jsx(Jt,{className:e,headlineTranslation:"content_block_detail.live_video_program_schedule.headline",headlineIsA:"h2",pageSectionId:"live-video-program-schedule",children:s.jsxs("div",{role:"table",className:"table","aria-labelledby":Me.livestreamScheduleAriaCaption,children:[s.jsx(TX,{className:"caption",id:Me.livestreamScheduleAriaCaption}),s.jsx(CX,{}),s.jsx("div",{role:"rowgroup",children:t.map((n,r)=>{var l;const i=new Date(n.startDate),o=new Date((l=t[r+1])==null?void 0:l.startDate),a=r<t.length-1&&i.getDay()!==o.getDay();return s.jsx(kX,{className:H({"last-slot":a}),timeSlot:n},n.id)})})]})})},jX=h(IX)`
  ${qn}
  background-color: ${C.DARK_BLUE_GREY_01};

  .table {
    .caption {
      padding-top: 0;
      padding-bottom: 5px;
    }

    .last-slot {
      border-bottom: 2px solid ${C.DW_GREY_10};
      margin-bottom: 0;
    }
  }

  .content-block h2 {
    overflow: hidden;
  }
`,Fb=Hn,Mb=AX,Bb=LX,EL=e=>({key:"pages.tv_livestream.page_title",parameters:{channel:e.name}}),OX=({channel:e,className:t,onChangeInViewListenerForHeaderSwitch:n,children:r})=>{var c,u,d;const[i]=kL(),o=`${(c=i==null?void 0:i.program)==null?void 0:c.name} — ${(u=i==null?void 0:i.programElement)==null?void 0:u.name}`,a=`${z("component.video_player.title_prefix.live_stream")} — ${o}`,l=z(EL(e));return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:t,children:s.jsxs("div",{className:"video-wrapper",children:[s.jsx(XC,{className:"kicker",children:l}),s.jsx(lv,{className:"title","aria-label":a,contentType:e.__typename,title:o}),s.jsx(bl,{className:"video-player",content:{...e,posterImageUrl:(d=i==null?void 0:i.program)==null?void 0:d.posterImageUrl}}),s.jsx(rs,{className:"actions",content:e,onChangeInViewListenerForHeaderSwitch:n})]})}),r]})},RX=h(OX)`
  ${KC}
  ${ns}
  background-color: ${C.DARK_BLUE_GREY_02};

  .video-wrapper {
    display: flex;
    flex-direction: column;
    background-color: ${C.BLACK};
  }

  .video-player {
    order: 1;
  }

  .kicker {
    order: 2;
    padding-top: 20px;
    padding-bottom: 12px;
  }

  .title {
    order: 3;
    padding-bottom: 20px;
  }

  .actions {
    order: 4;

    a,.icon {
      width: 40px;
    }
    .more-icon svg {
      width: 25px;
    }
  }

  .kicker, .title, .actions {
    ${Za}
  }

   ${b.md`
    .actions {
      margin: 20px 0;
    }
  `}

  ${b.xl`
    .video-wrapper {
      ${tc}
    }
  `}
`,DX=({channel:e,today:t,className:n,fetchHelpers:r,onChangeInViewListenerForHeaderSwitch:i})=>s.jsxs(SX,{livestreamChannel:e,today:t,fetchHelpers:r,children:[s.jsx(qf,{isA:"h1",translation:EL(e)}),s.jsxs("article",{className:n,children:[s.jsx(RX,{channel:e,onChangeInViewListenerForHeaderSwitch:i}),s.jsx(jX,{})]})]}),NX=h(DX)`
`,PX=()=>{const e=An(),t=Ln();return _`
  query livestreamData($lang: Language!, $livestreamChannel: ChannelNames!) {
    livestreamChannels (channelNames: [$livestreamChannel]) {
      id
      name
      hlsVideoSrc: livestreamUrl
     ...${Mb.name}
     ...${Fb.name}
     ...${Ge.name}
     ...${gr.name}
     ...${Re.name}
    }
    fakeLeadingContent: topStoriesNavigation(lang: $lang) {
      ...${e.name}
      ...${t.name}
      ...${Xt.name}
    }
    today(lang: $lang) {
      ...${Bb.name}
    }
    programsOverview(lang: $lang) {
        ...${El.name}
      }
  }
  ${Xt.fragment()}
  ${e.fragment()}
  ${t.fragment()}
  ${Fb.fragment()}
  ${Mb.fragment()}
  ${Bb.fragment()}
  ${Ge.fragment()}
  ${gr.fragment()}
  ${Re.fragment()}
  ${El.fragment()}
`},FX=x.memo(ev),$L=({fakeLeadingContent:e,livestreamChannels:t,today:n,fetchHelpers:r,className:i,programsOverview:o})=>{const[a]=t,[{hasLeftViewport:l,onChangeInViewListenerForHeaderSwitch:c}]=_o();return s.jsxs(Xa,{children:[s.jsx(Yn,{content:e}),s.jsx(er,{content:a}),s.jsx(ac,{content:a}),s.jsx(Kn,{content:a}),s.jsxs("div",{className:i,children:[s.jsx(Kt,{hasWhiteState:l,content:e,children:({isHeaderInWhiteState:u})=>u?s.jsx(mv,{content:a,isInHeader:!0,className:"sharing-icons"}):null}),s.jsx(Er,{}),s.jsx(wo,{DetailZoneFn:()=>s.jsx(NX,{channel:a,today:n,fetchHelpers:r,onChangeInViewListenerForHeaderSwitch:c}),AlternatingColorZoneConfig:{compFn:()=>s.jsxs(s.Fragment,{children:[s.jsx(Ev,{className:"always-dark",programsOverview:o}),s.jsx(FX,{content:e})]})}}),s.jsx(In,{content:e})]})]})};h($L)`
  ${OA}
`;const MX=$r($L)`
  ${Ni}
`,BX=()=>{const{langCode:e,channel:t}=ot(),n=Qn(e),r={query:PX(),variables:{lang:n,livestreamChannel:t==null?void 0:t.toUpperCase()}};return s.jsx(vo,{queryDef:r,langBaseContentFn:i=>i.fakeLeadingContent,children:(i,o)=>s.jsx(MX,{livestreamChannels:i.livestreamChannels,fakeLeadingContent:i.fakeLeadingContent,today:i.today,programsOverview:i.programsOverview,fetchHelpers:o})})},UX=({className:e,children:t})=>s.jsx("div",{className:e,children:t}),zX=h(UX)`
  ${qa()}
`,Ub=A({name:"AzIndexTopicsOverview",fragment(){return _`fragment ${this.name} on AutoTopic {
        id
        sortTitle
        name
        ...${Dt.name}
      }
      ${Dt.fragment()}
    `}}),WX=({azIndexTopics:e,className:t})=>s.jsx(Sf,{className:t,children:e.map(n=>s.jsx("li",{children:s.jsx(Fi,{content:n,linkTranslation:n.sortTitle||n.name})},n.id))}),VX=zC,GX=h(WX)``,HX=({className:e,isSelected:t,...n})=>s.jsx(Wl,{className:H(e,{selected:t}),...n}),_d={textColorSelected:"--choice-chip-text-color-selected",backgroundColorSelected:"--choice-chip-background-color-selected"},QX=`
  ${Wl.darkStyles}

  ${_d.textColorSelected}: ${C.DW_DARK_BLUE};
  ${_d.backgroundColorSelected}: ${C.WHITE};
`,Cv=h(HX)`
  border-radius: 18px;

  &.selected {
    color: var(${_d.textColorSelected}, ${C.WHITE});
    background-color: var(${_d.backgroundColorSelected}, ${C.DW_DARK_BLUE});
  }
  && {
    padding: 8px 16px;
    min-width: 50px;
    min-height: 30px;
  }
`;Cv.darkStyles=QX;const qX=({group:e,className:t})=>{const{selectedTopicGroupId:n}=ot(),r=e.id===n,i=z({key:r?"content_block.topic_group_selector.current_page.label":"content_block.topic_group_selector.page.label",parameters:{topicGroupLabel:e.label.toUpperCase()}});return s.jsx(Cv,{isA:wr,className:t,isSelected:r,"aria-label":i,to:e.url,"aria-current":r?"page":void 0,children:e.label})},YX=Cv.darkStyles,KX=h(qX)`
  text-transform: uppercase;
`,XX=({azIndexTopicGroups:e=[],className:t,innerRef:n})=>{const{selectedTopicGroupId:r}=ot(),i=z({key:"content_block.topic_group_selector.pagination_nav.label",parameters:{topicGroupLabel:r==null?void 0:r.toUpperCase()}});return s.jsx("nav",{role:"navigation","aria-label":i,className:t,ref:n,children:s.jsx("ul",{children:e.map(o=>s.jsx("li",{children:s.jsx(KX,{group:o})},o.id))})})},ZX=YX,JX=h(XX)`
  ul {
    padding: 30px 0 0;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    justify-content: center;
    li {
      list-style-type: none;
      white-space: nowrap;
    }
  }
  ${b.lg`
    ul {
      max-width: 772px;
    }
  `}
  ${b.xl`
    ul {
      max-width: 920px;
    }
  `}
`,eZ=({className:e,azIndexTopicGroups:t,onChangeInViewListenerForHeaderSwitch:n})=>{const r=hv();return s.jsx(ry,{onChange:n,rootMargin:r,children:({ref:i})=>s.jsx(JX,{innerRef:i,azIndexTopicGroups:t,className:e})})},zb=A({name:"AzIndexDetails",fragment(){return _`fragment ${this.name} on Query {
      azIndexTopicGroups(lang: $lang) {
        id
        url
        label
      }
      azIndexTopics (lang: $lang, selectedTopicGroupId: $selectedTopicGroupId) {
        ...${Ub.name}
      }
    }
    ${Ub.fragment()}
    `}}),tZ=({azIndexTopicGroups:e,azIndexTopics:t,azIndexLabel:n,className:r,onChangeInViewListenerForHeaderSwitch:i})=>{const{selectedTopicGroupId:o}=ot(),a=e.find(l=>l.id===o);return s.jsxs(zX,{className:r,children:[s.jsx(is,{children:n}),s.jsx(eZ,{azIndexTopicGroups:e,onChangeInViewListenerForHeaderSwitch:i}),s.jsx(kr,{isA:"h2",className:"topic-index-headline",children:a.label}),s.jsx(GX,{azIndexTopics:t})]})},nZ=`
  ${ZX}
  ${kr.darkStyles}
  ${VX}
`,rZ=h(tZ)`
  h2 {
    text-transform: uppercase;
  }
`,iZ=()=>{const e=An(),t=Ln();return _`
  query azIndexData($lang: Language!, $selectedTopicGroupId: String) {
    fakeLeadingContent: topStoriesNavigation(lang: $lang) {
      id
      language
      isLive
      ampUrl
      ...${Xt.name}
      ...${e.name}
      ...${t.name}
      ...${Ge.name}
      ...${Re.name}
    }
    ...${zb.name}
  }
  ${Xt.fragment()}
  ${Re.fragment()}
  ${e.fragment()}
  ${t.fragment()}
  ${zb.fragment()}
  ${Ge.fragment()}
`},oZ=x.memo(ev),aZ=e=>({key:"pages.topic_index.meta_description",parameters:{topicGroupLabel:e}}),sZ=({content:e,azIndexTopicGroups:t,azIndexTopics:n,className:r})=>{const{selectedTopicGroupId:i}=ot(),[{hasLeftViewport:o,onChangeInViewListenerForHeaderSwitch:a}]=_o(),l=z("pages.topic_index.title"),[c]=De(),u=c.pathname,d={...e,name:l,trackingContentType:90,trackingId:0,trackingPageSID:void 0,trackingDate:void 0,trackingCategories:["Themenindex",i==null?void 0:i.toUpperCase()],trackingTopicsCommaJoined:"",trackingRegionsCommaJoined:"",regions:[],subjects:[],topics:[],departments:[],namedUrl:u,title:l,canonicalUrl:void 0,sharingDescription:z(aZ(i==null?void 0:i.toUpperCase())),pageHeadline:l};return s.jsxs(Xa,{children:[s.jsx(er,{content:d}),s.jsx(Kn,{content:d}),s.jsx(Yn,{content:e}),s.jsxs("div",{className:r,children:[s.jsx(Kt,{hasWhiteState:o,content:e,children:({isHeaderInWhiteState:f})=>f?s.jsx(lc,{navigation:d}):null}),s.jsx(Er,{}),s.jsx(wo,{DetailZoneFn:()=>s.jsx(rZ,{azIndexTopicGroups:t,azIndexTopics:n,azIndexLabel:l,onChangeInViewListenerForHeaderSwitch:a}),AlternatingColorZoneConfig:{compFn:()=>s.jsx(oZ,{content:e})}}),s.jsx(In,{content:e})]})]})},lZ=$r(sZ)`
  ${Ni}
  ${nZ}
`,cZ=()=>{const{langCode:e,selectedTopicGroupId:t}=ot(),[{pathname:n}]=De(),r=Qn(e),i={query:iZ(),variables:{lang:r,selectedTopicGroupId:t}};return s.jsx(vo,{queryDef:i,langBaseContentFn:o=>o.fakeLeadingContent,children:o=>{if(!se(o.azIndexTopicGroups))return s.jsx(an,{});const a={...o.fakeLeadingContent,id:"az-index"},l=o.azIndexTopicGroups.find(c=>c.id===(t==null?void 0:t.toLowerCase()));return!t||!l?s.jsx(ro,{to:o.azIndexTopicGroups[0].url}):n!==l.url?s.jsx(ro,{to:l.url}):s.jsx(lZ,{content:a,azIndexTopicGroups:o.azIndexTopicGroups,azIndexTopics:o.azIndexTopics})}})},uZ=h(Zn)`
  ${pU()}
  ${hU()}
`,Wb=A({name:"HeadlinesList",fragment(){return _`fragment ${this.name} on Content {
        ... on ModelAspect {
          id
        }
        ...${rg.name}
      }
      ${rg.fragment()}
    `}}),dZ=({className:e,contents:t,headlineTranslation:n,pageSectionId:r})=>s.jsx(Jt,{className:e,headlineIsA:"h2",headlineTranslation:n,pageSectionId:r,children:s.jsx(uZ,{children:t.map(i=>s.jsx(tL,{content:i,titleIsA:"h3"},i.id))})}),fZ=eL,pZ=h(dZ)``,mZ=()=>{const e=An(),t=Ln();return _`
  query headlinesOverviewData($lang: Language!, $id: Int, $amount: Int) {
    headlinesOverview(lang: $lang) {
      id: originId
      pageHeadline
      ...${Xt.name}
      ...${e.name}
      ...${t.name}
      ...${Ge.name}
      ...${Re.name}
      last7DaysContents(amount: $amount) {
        ...${Wb.name}
      }
    }
  }
  ${Xt.fragment()}
  ${Re.fragment()}
  ${e.fragment()}
  ${t.fragment()}
  ${Ge.fragment()}
  ${Wb.fragment()}
`},hZ=({content:e,className:t})=>{const[{hasLeftViewport:n}]=_o();return s.jsxs(s.Fragment,{children:[s.jsx(er,{content:e}),s.jsx(Kn,{content:e}),s.jsx(Co,{content:e}),s.jsx(Yn,{content:e}),s.jsxs("div",{className:t,children:[s.jsx(Kt,{hasWhiteState:n,content:e,children:({isHeaderInWhiteState:r})=>r?s.jsx(lc,{navigation:e}):null}),s.jsx(Er,{}),s.jsxs(Ya,{id:Me.quickNav.mainContent,children:[s.jsx(is,{children:e.pageHeadline}),s.jsx(pZ,{contents:e.last7DaysContents,headlineTranslation:"content_block.headlines_list.headline",pageSectionId:"headlines-list"})]}),s.jsx(In,{content:e})]})]})},gZ=$r(hZ)`
  ${fZ}
`,yZ=()=>{const{langCode:e}=ot(),t=Oa("short"),n=Qn(e),r={query:mZ(),variables:{lang:n,amount:t==="1"?21:void 0,id:void 0}},[{pathname:i,search:o}]=De();return s.jsx(vo,{queryDef:r,langBaseContentFn:a=>a.headlinesOverview,children:({headlinesOverview:a})=>{if(!a)return s.jsx(an,{});const{namedUrl:l}=a;return ff({namedUrl:l,pathname:i})?s.jsx(gZ,{content:a}):s.jsx(ro,{to:{pathname:l,search:o}})}})},rm=Pa,vZ=({contents:e,headlineTranslation:t,pageSectionId:n,className:r})=>se(e)?s.jsx(sc,{headlineTranslation:t,className:r,contents:e,pageSectionId:n,hideKicker:!0,hideTimeIndicator:!0}):null,Vb=h(vZ)`
  ${GA}
`,Gb=A({name:"ProgramsOverviewCoCo",fragment(){return _`fragment ${this.name} on ProgramsOverview {
      videoPrograms {
        ...${rm.name}
      }
      audioPrograms {
        ...${rm.name}
      }
      pageHeadline
    }
    ${rm.fragment()}`}}),xZ=({content:e,className:t})=>{const{pageHeadline:n,videoPrograms:r,audioPrograms:i}=e;return s.jsxs(Ya,{className:t,id:Me.quickNav.mainContent,children:[s.jsx(is,{children:n}),s.jsx(Vb,{pageSectionId:"program-video-list",headlineTranslation:"content_block.program_list_videos.headline",contents:r}),s.jsx(Vb,{pageSectionId:"program-audio-list",headlineTranslation:"content_block.program_list_audios.headline",contents:i})]})},SZ=h(xZ)`
  section {
    background-color: ${C.DARK_BLUE_GREY_01};
  }
  section:nth-of-type(2n) {
    background-color: ${C.DARK_BLUE_GREY_02};
  }
`,wZ=()=>{const e=An(),t=Ln();return _`
  query programsOverviewData($lang: Language!, $id: Int) {
    programsOverview(lang: $lang) {
      id: originId
      ...${Xt.name}
      ...${e.name}
      ...${t.name}
      ...${Ge.name}
      ...${Re.name}
      ...${Gb.name}
    }
  }
  ${Xt.fragment()}
  ${Re.fragment()}
  ${e.fragment()}
  ${t.fragment()}
  ${Ge.fragment()}
  ${Gb.fragment()}
`},bZ=({content:e})=>{const[{hasLeftViewport:t}]=_o(),{showProgramsOverview:n=!1}=Mt();return n?s.jsxs(s.Fragment,{children:[s.jsx(er,{content:e}),s.jsx(Kn,{content:e}),s.jsx(Co,{content:e}),s.jsx(Yn,{content:e}),s.jsx(Kt,{hasWhiteState:t,content:e,children:({isHeaderInWhiteState:r})=>r?s.jsx(lc,{navigation:e}):null}),s.jsx(Er,{}),s.jsx(Hf,{slotConfig:nv}),s.jsx(SZ,{content:e}),s.jsx(In,{content:e})]}):s.jsx(an,{})},kZ=()=>{const{langCode:e}=ot(),t=Qn(e),n={query:wZ(),variables:{lang:t,id:void 0}},[{pathname:r,search:i}]=De();return s.jsx(vo,{queryDef:n,langBaseContentFn:o=>o.programsOverview,children:({programsOverview:o})=>{if(!o)return s.jsx(an,{});const{namedUrl:a}=o;return ff({namedUrl:a,pathname:r})?s.jsx(bZ,{content:o}):s.jsx(ro,{to:{pathname:a,search:i}})}})},Hb=Vr,EZ=({contents:e,className:t})=>s.jsx(ec,{className:t,contents:e,headlineTranslation:"content_block_detail.more_episodes.headline",showMoreBtnTranslation:"content_block_detail.more_episodes.show_more",pageSectionId:"more-episodes"}),$Z=h(EZ)`
  ${J0}
`,Qb=uL,TZ=({className:e,content:t,...n})=>t?s.jsx(fL,{className:e,headlineTranslation:"content_block_detail.latest_episode.headline",contents:[t],hideKicker:!0,...n}):null,_Z=h(TZ)`
  ${dL}
`,qb=A({name:"Episodes",fragment(){return _`fragment ${this.name} on UnifiedProgram {
      moreContentsFromUnifiedProgram(amount: 16, types: [VIDEO, AUDIO], fullEpisodes: true) {
        ...${Qb.name}
        ...${Hb.name}
      }
    }
    ${Qb.fragment()}
    ${Hb.fragment()}
    `}}),CZ=({content:e})=>{const{moreContentsFromUnifiedProgram:t}=e,[n,...r]=t;return s.jsxs(s.Fragment,{children:[s.jsx(_Z,{content:n}),s.jsx($Z,{contents:r})]})},Yb=A({name:"ProgramRecommendedZone",fragment(){return _`fragment ${this.name} on UnifiedProgram {
      ...${qb.name}
      ...${ud.name}
      programsOverview {
        ...${El.name}
      }

    }
    ${qb.fragment()}
    ${ud.fragment()}
    ${El.fragment()}
    `}}),AZ=({className:e,content:t})=>s.jsxs(s.Fragment,{children:[s.jsx(CZ,{className:e,content:t}),s.jsx(jC,{className:e,content:t}),s.jsx(Ev,{className:e,programsOverview:t.programsOverview})]}),LZ=h(AZ)`
  ${IC}
`,Kb=A({name:"ProgramDetailHeader",fragment(){return _`fragment ${this.name} on UnifiedProgram {
        title
        teaser
      }
    `}}),IZ=({program:e,className:t})=>s.jsxs("div",{className:t,children:[s.jsx(ov,{children:e.title}),e.teaser&&s.jsx(Wr,{className:"teaser",children:e.teaser})]}),jZ=h(IZ)`
  ${Pi};
  ${iv};

  .teaser {
    margin-bottom: 2px;
  }
`,Xb=qA,OZ=({program:e,isOpen:t=!1,className:n})=>e.text?s.jsx(KA,{className:n,content:e,translationKeyPrefix:"component_detail.program_detail.read_more",isOpen:t}):null,RZ=h(OZ)`
  ${YA}
`,Zb=A({name:"ProgramDetails",fragment(){return _`fragment ${this.name} on UnifiedProgram {
      ...${Sd.name}
      ...${Kb.name}
      ...${Xb.name}
    }
    ${Sd.fragment()}
    ${Kb.fragment()}
    ${Xb.fragment()}
    `}}),DZ=({program:e,className:t})=>s.jsxs(QA,{content:e,className:t,children:[s.jsx(jZ,{program:e}),s.jsx(RZ,{program:e})]}),NZ=h(DZ)`
  background: ${C.DARK_BLUE_GREY_02};

  .content-area {
    background-color: ${C.DARK_BLUE_GREY_01};
    padding-bottom: 30px;
  }
  ${b.lg`
    .content-area {
      min-height: 20rem;
    }
  `}
  ${HA}
`,PZ=A({name:"ProgramDetailsWithFallback",fragment(){const e=An(),t=Ln();return _`fragment ${this.name} on UnifiedProgram {
        autoDelivery
        visibleInTvApps
        imitateProgram
        ...${Zb.name}
        ...${hr.name}
        ...${rd.name}
        ...${e.name}
        ...${t.name}
        ...${Yb.name}
        ...${Ge.name}
        ...${gr.name}
        ...${Re.name}
      }
      ${Zb.fragment()}
      ${hr.fragment()}
      ${rd.fragment()}
      ${e.fragment()}
      ${t.fragment()}
      ${Yb.fragment()}
      ${Ge.fragment()}
      ${gr.fragment()}
      ${Re.fragment()}
     `}}),FZ=({content:e,className:t})=>e.autoDelivery!==1||!(e.imitateProgram||e.visibleInTvApps)?s.jsx(an,{}):s.jsxs(Xa,{children:[s.jsx(er,{content:e}),s.jsx(ac,{content:e}),s.jsx(Kn,{content:e}),s.jsx(Co,{content:e}),s.jsx(Yn,{content:e}),s.jsxs("div",{className:t,children:[s.jsx(Kt,{content:e}),s.jsx(Er,{}),s.jsx(wo,{DetailZoneFn:()=>s.jsx(NZ,{program:e}),AlternatingColorZoneConfig:{compFn:()=>s.jsx(LZ,{content:e})}}),s.jsx(w2,{className:"homepage-link",content:e}),s.jsx(In,{content:e})]})]}),MZ=h(FZ)`
  ${Ni};
  background-color: ${C.DARK_BLUE_GREY_01};
  .homepage-link{
    ${y0};
  }
`,BZ={name:"getProgramDetailsPage",fragmentDef:PZ},UZ=()=>s.jsx(xo,{queryOptions:BZ,children:({content:e})=>s.jsx(MZ,{content:e})}),Jb=A({name:"VendorSettings",fragment(){return _`fragment ${this.name} on PrivacySettings {
      title
    }
  `}}),zZ=({className:e,privacySettings:t})=>(x.useEffect(()=>{O.window.cmp_cdid&&O.window.location.reload(!0),J(()=>Promise.resolve({}),["static/cmp-style-overwrite-d97bc8dd.css"])},[]),s.jsxs("div",{className:e,children:[s.jsx(is,{children:t.title}),s.jsx("div",{id:"cmpinlinepreferencesbox"}),s.jsx(mt,{children:s.jsx("link",{rel:"stylesheet",href:"https://consent.dw.com/delivery/cmpinline.min.css"})})]})),WZ=h(zZ)`
  #cmpinlinepreferencesbox {
    .cmptxt_btn_back {
      display: none !important;
    }
  }
`,VZ=()=>{const e=An(),t=Ln();return _`
  query getVendorConsentData($lang: Language!) {
    privacySettings(lang: $lang){
      id: originId
      namedUrl
      ...${Xt.name}
      ...${e.name}
      ...${t.name}
      ...${Ge.name}
      ...${Re.name}
      ...${Jb.name}
    }
  }
  ${Xt.fragment()}
  ${Re.fragment()}
  ${e.fragment()}
  ${t.fragment()}
  ${Ge.fragment()}
  ${Jb.fragment()}
`},GZ=({privacySettings:e,className:t})=>s.jsxs(s.Fragment,{children:[s.jsx(er,{content:e}),s.jsx(Kn,{content:e}),s.jsx(Yn,{content:e}),s.jsxs("div",{className:t,children:[s.jsx(Kt,{content:e}),s.jsx(wo,{DetailZoneFn:()=>s.jsx(WZ,{privacySettings:e})}),s.jsx(In,{content:e})]})]}),HZ=$r(GZ)`
  ${Ni}
`,QZ=()=>{const{langCode:e}=ot(),[{pathname:t}]=De(),n=Qn(e),r={query:VZ(),variables:{lang:n}};return s.jsx(vo,{queryDef:r,langBaseContentFn:O2,children:({privacySettings:i})=>ff({namedUrl:i.namedUrl,pathname:t})?s.jsx(HZ,{privacySettings:i}):s.jsx(ro,{to:i.namedUrl})})},qZ=()=>_`query getDefaultNavigationPath($lang: Language!) {
    topStoriesNavigation(lang: $lang, displayChannel: DESKTOP) {
      namedUrl
      isLive
      subdomainUrl
    }
  }`,TL=({forcedLangCode:e})=>{const{langCode:t}=ot(),[{search:n}]=De(),{setIsSilent:r}=T_(),o=Qn(e||t),a=Jd(qZ(),{variables:{lang:o||"ENGLISH"}}),{hostname:l}=ho().window.location,c=l.startsWith("beta");return e&&!c&&r(!0),s.jsx(j2,{gqlMeta:a,children:({topStoriesNavigation:u})=>!u.isLive&&!c&&e?s.jsx(x0.Provider,{value:new id({domainName:u.subdomainUrl}),children:s.jsx(N2,{to:{pathname:u.namedUrl,search:n},subdomainUrl:u.subdomainUrl})}):(r(!1),s.jsx(ro,{to:{pathname:u.namedUrl,search:n}}))})},YZ={name:"getAVRedirectQuery",fragmentDef:Gh},KZ=()=>s.jsx(xo,{queryOptions:YZ}),XZ=["fa-ir","fa-af","pt-br"],ZZ=e=>{if(!e)return"en";const t=e.toLowerCase();return XZ.includes(t)?t:t.startsWith("pt")?"pt-002":t.split("-")[0]},JZ=()=>{const[e,t]=so("com.dw.userLanguage",{isPrimitive:!0}),[,n]=so("com.dw.userLanguageDetected",{isPrimitive:!0}),[r,i]=x.useState();return x.useEffect(()=>{if(e)i(e);else{const o=ZZ(O.navigator.language);n("true"),t(o),i(o)}},[]),s.jsx(Sr,{children:s.jsx("div",{className:"blank-root-page",children:r&&s.jsx(TL,{forcedLangCode:r})})})},ek=A({name:"LiveblogPostSharingDetails",fragment(){return _`fragment ${this.name} on LiveblogElement {
        liveblog {
          namedUrl
        }
        ...${vd.name}
      }
      ${vd.fragment()}
    `}}),eJ=({content:e={},className:t})=>{const[,n]=De(),{liveblog:r,id:i}=e,o=`${r.namedUrl}#liveblog-post-${i}`;return x.useEffect(()=>{n(o,{replace:!0})},[o,n]),s.jsx(vv,{className:t,content:e})},tJ=yv,nJ=h(eJ)`
`,rJ=A({name:"LiveblogPostSharingPage",fragment(){const e=An(),t=Ln();return _`fragment ${this.name} on LiveblogElement {
      ...${Ge.name}
      ...${ek.name}
      ...${ad.name}
      ...${e.name}
      ...${t.name}
      ...${gr.name}
      ...${Re.name}
    }
    ${Ge.fragment()}
    ${ek.fragment()}
    ${ad.fragment()}
    ${e.fragment()}
    ${t.fragment()}
    ${gr.fragment()}
    ${Re.fragment()}
    `}}),iJ=({content:e})=>s.jsxs(Xa,{children:[s.jsx(er,{content:e}),s.jsx(ac,{content:e}),s.jsx(Kn,{content:e}),s.jsx(G2,{content:e}),s.jsx(Kt,{content:e}),s.jsx(wo,{DetailZoneFn:()=>s.jsx(nJ,{content:e})}),s.jsx(In,{content:e})]}),oJ=$r(iJ)`
  ${Ni}
  ${tJ}
`,aJ={name:"getLiveblogPostSharing",fragmentDef:rJ},sJ=()=>s.jsx(xo,{queryOptions:aJ,children:({content:e})=>s.jsx(oJ,{content:e})}),lJ=`/${Zt}/?`,cJ=`/${Zt}/most-recent`,uJ=`/${Zt}/trending`,dJ=`/${Zt}/beta-feedback`,fJ=`/${Zt}/404`,pJ=`/(${Fl.langCodeRegex}/)?(${Ga}/)?privacy-settings-${Zt}`,mJ=`/${Zt}/live-tv/channel-${oF}`,hJ=`/(${Fl.langCodeRegex}/)?(${Ga}/)?index-${Zt}/?${aF}?`,gJ=`/(${Fl.langCodeRegex}/)?(${Ga}/)?headlines-${Zt}`,yJ=`/(${Fl.langCodeRegex}/)?(${Ga}/)?programs-${Zt}`,vJ=`/(${Zt}/)?(${Ga}/)?liveblog-post-${C_}`,_L=`/(${Zt}/)?(${Ga}/)?${sF}-${C_}`,xJ=`${_L}-${lF}`,SJ=`/(${Zt}/)?search`,wJ=`/${Zt}/(.*)`,{SearchPage:bJ}=ne(()=>J(()=>import("./index-a919428e.js"),["static/index-a919428e.js","static/extends-7277ac90.js","static/hoist-non-react-statics.cjs-e0bc5fbc.js","static/index-896301e1.css"])),{BetaSurveyPage:kJ}=ne(()=>J(()=>import("./BetaSurveyPage-4d9aec40.js"),[])),{TrendingPage:EJ}=ne(()=>J(()=>import("./TrendingPage-e912b95e.js"),["static/TrendingPage-e912b95e.js","static/TeaserListSamplePageFactory-82270b3e.js"])),{ArticleMostRecentPage:$J}=ne(()=>J(()=>import("./ArticleMostRecentPage-95166c0e.js"),["static/ArticleMostRecentPage-95166c0e.js","static/TeaserListSamplePageFactory-82270b3e.js"])),TJ={ARTICLE:{type:"Article",component:bs},VIDEO:{type:"Video",component:bs},AUDIO:{type:"Audio",component:bs},IMAGE_GALLERY:{type:"ImageGallery",component:bs},LIVEBLOG:{type:"Liveblog",component:bs},PERSON:{component:XQ},NAVIGATION:{component:YK},AUTO_TOPIC:{component:uX},CLASSIC_AV:{component:KZ},PROGRAM:{component:UZ}},tk=e=>{const t=ot(),n=TJ[$D(t.typeId)]||{component:an},r=n.component;return s.jsx(r,{...e,type:n.type})},_J=()=>s.jsx(iF,{children:s.jsxs(oN,{children:[s.jsx(yt,{path:"/",component:JZ}),s.jsx(yt,{path:lJ,component:TL}),s.jsx(yt,{path:cJ,component:$J}),s.jsx(yt,{path:uJ,component:EJ}),s.jsx(yt,{path:dJ,component:kJ}),s.jsx(yt,{path:fJ,component:an}),s.jsx(yt,{path:pJ,component:QZ}),s.jsx(yt,{path:mJ,component:BX}),s.jsx(yt,{path:hJ,component:cZ}),s.jsx(yt,{path:gJ,component:yZ}),s.jsx(yt,{path:yJ,component:kZ}),s.jsx(yt,{path:vJ,component:sJ}),s.jsx(yt,{path:_L,component:tk}),s.jsx(yt,{path:xJ,component:tk}),s.jsx(yt,{path:SJ,component:bJ}),s.jsx(yt,{path:wJ,component:an}),s.jsx(yt,{component:an})]})}),Cr=["Article","Audio","Video","ImageGallery","Liveblog"],mn=[...Cr,"Person","Navigation","AutoTopic","UnifiedProgram","ProgramsOverview","HeadlinesOverview","PrivacySettings"],CJ={ModelAspect:[...mn,"Category","Subject","GeographicLocation","Image","Widget","Channel","Livestream","Download","Keyword","GalleryImage","GeographicRegion","ExternalLink","PhysicalImage","ContentComposition","InformationSpace","CompositionComponent","CompositionComponentConfiguration","Reference","LiveblogElement"],DeliveryAspect:[...mn,"Category","Image","Widget","GeographicRegion","ContentComposition","Reference","LiveblogElement"],NamedAspect:[...mn,"Category","Subject","GeographicLocation","Image","Widget","Channel","Livestream","Download","Keyword","GalleryImage","GeographicRegion","ExternalLink","ContentComposition","InformationSpace","Reference","LiveblogElement"],AssociationsAspect:[...mn,"Image","Widget","GalleryImage","Reference","Channel","Series","LiveblogElement"],TextualAspect:[...Cr,"Person","AutoTopic","UnifiedProgram","Reference","LiveblogElement"],ContactAspect:[...Cr,"Person","AutoTopic","LiveblogElement"],MetadataAspect:[...Cr,"AutoTopic","LiveblogElement"],DkMetadataAspect:["Article","Reference"],GeographicLocationAspect:["GeographicLocation"],TreeAspect:["Category","Navigation","GeographicRegion"],DeletionAspect:["Image","Audio","Video"],PlaybackResourceAspect:["Audio","Video"],BinaryDataAspect:["Download","PhysicalImage"],SocialMediaAspect:[...mn,"Channel","LiveblogElement"],FooterAspect:[...mn,"LiveblogElement"],BetaLayerAspect:mn,WelcomeLayerAspect:mn,RssFeedAspect:mn,UrlAspect:[...mn,"Channel","LiveblogElement"],OpinionAspect:Cr,TeaserAspect:Cr,RelatedContentAspect:Cr,CoCoAspect:["AutoTopic","Navigation","ProgramsOverview","HeadlinesOverview"],OpenGraphAspect:["Audio","Video"],GtmAspect:[...mn,"Channel","Livestream"],FeedbackAspect:Cr,Content:[...mn,"Category","Subject","GeographicLocation","Image","Widget","Channel","Livestream","Download","Keyword","GalleryImage","GeographicRegion","CocoContent","Reference","LiveblogElement"],InternalLinkableContent:Cr,OverviewPageContent:["Navigation","AutoTopic"]},AJ=()=>new GR({possibleTypes:CJ,addTypename:!0,typePolicies:{SocialMediaEntry:{keyFields:["url"]},ContentLink:{keyFields:["targetId"]},ContentAssociation:{keyFields:["targetId"]},ExternalLink:{keyFields:["targetId"]},Navigation:{fields:{footer:{merge(e,t){return{...e,...t}}}}}}});var LJ=1;function IJ(e){var t=Object.create(null),n=Object.create(null);return _t(e)&&e.forEach(function(r){var i;t[r.message]=r,typeof((i=r.extensions)===null||i===void 0?void 0:i.code)=="string"&&(n[r.extensions.code]=r)}),{persistedQueryNotSupported:!!(t.PersistedQueryNotSupported||n.PERSISTED_QUERY_NOT_SUPPORTED),persistedQueryNotFound:!!(t.PersistedQueryNotFound||n.PERSISTED_QUERY_NOT_FOUND)}}var jJ={disable:function(e){var t=e.meta;return t.persistedQueryNotSupported},retry:function(e){var t=e.meta;return t.persistedQueryNotSupported||t.persistedQueryNotFound},useGETForHashedQueries:!1};function OJ(e){return e.query.definitions.some(function(t){return t.kind==="OperationDefinition"&&t.operation==="mutation"})}var RJ=function(e){var t=new WeakMap;X(e&&(typeof e.sha256=="function"||typeof e.generateHash=="function"),38);var n=ki(jJ,e),r=n.sha256,i=n.generateHash,o=i===void 0?function(p){return Promise.resolve(r(fy(p)))}:i,a=n.disable,l=n.retry,c=n.useGETForHashedQueries,u=!0,d=function(p){return new Promise(function(m){return m(o(p))})};function f(p){if(!p||typeof p!="object")return d(p);var m=t.get(p);return m||t.set(p,m=d(p)),m}return new ji(function(p,m){X(m,39);var S=p.query;return new ke(function(w){var E,g=!1,y,v=!1,k=function($,I){var j=$.response,N=$.networkError;if(!g&&(j&&j.errors||N)){g=!0;var R=[],K=j&&j.errors;_t(K)&&R.push.apply(R,K);var ce=void 0;typeof(N==null?void 0:N.result)!="string"&&(ce=N&&N.result&&N.result.errors),_t(ce)&&R.push.apply(R,ce);var le={response:j,networkError:N,operation:p,graphQLErrors:_t(R)?R:void 0,meta:IJ(R)};if(u=!a(le),l(le)){E&&E.unsubscribe(),p.setContext({http:{includeQuery:!0,includeExtensions:u},fetchOptions:{method:"POST"}}),v&&p.setContext({fetchOptions:y}),E=m(p).subscribe(T);return}}I()},T={next:function($){k({response:$},function(){return w.next($)})},error:function($){k({networkError:$},function(){return w.error($)})},complete:w.complete.bind(w)};return p.setContext({http:{includeQuery:!u,includeExtensions:u}}),c&&u&&!OJ(p)&&(p.setContext(function($){var I=$.fetchOptions,j=I===void 0?{}:I;return y=j,{fetchOptions:L(L({},j),{method:"GET"})}}),v=!0),u?f(S).then(function($){p.extensions.persistedQuery={version:LJ,sha256Hash:$},E=m(p).subscribe(T)}).catch(w.error.bind(w)):E=m(p).subscribe(T),function(){E&&E.unsubscribe()}})})};const DJ=e=>{const t=new DataView(e);let n="";for(let r=0;r<t.byteLength;r+=4)n+=t.getUint32(r).toString(16).padStart(8,"0");return n},NJ=e=>async(t,{outputFormat:n="hex"}={})=>{typeof t=="string"&&(t=new globalThis.TextEncoder().encode(t));const r=await globalThis.crypto.subtle.digest(e,t);return n==="hex"?DJ(r):r},PJ=NJ("SHA-256"),FJ={graphQL:{baseUrl:"/graphql"}},MJ=new ji((e,t)=>(e.variables.appName=e.variables.appName||"road",t(e))),BJ=RJ({useGETForHashedQueries:!0,sha256:PJ}),UJ=()=>eT({uri:FJ.graphQL.baseUrl,includeUnusedVariables:!0}),zJ=()=>({link:BO([MJ,BJ,UJ()])}),WJ=new ZR({link:zJ().link,ssrForceFetchDelay:100,cache:AJ().restore(O.window.__APOLLO_STATE__)});G3(!0);const nk=document.getElementById("root"),rk=s.jsx(sD,{client:WJ,children:s.jsx(rN,{children:s.jsx(Yo,{children:s.jsx(_J,{})})})}),VJ=()=>{JSON.parse(!0)&&O.document.querySelector("title[data-rh=true]")?v$(nk,rk):x$(nk).render(rk),lN()};VJ();export{xv as $,Yn as A,yf as B,Kt as C,Er as D,wo as E,In as F,Kn as G,vo as H,A as I,z as J,es as K,JC as L,Di as M,an as N,Xa as O,fe as P,Wl as Q,rt as R,pZ as S,ev as T,O as U,ho as V,mt as W,Z7 as X,Me as Y,Ya as Z,UA as _,dg as a,eN as a$,Ka as a0,xd as a1,O2 as a2,M as a3,ae as a4,__ as a5,b as a6,zy as a7,At as a8,t6 as a9,WB as aA,M7 as aB,_r as aC,Mq as aD,Xl as aE,lQ as aF,se as aG,me as aH,Mi as aI,b9 as aJ,Gf as aK,r2 as aL,eee as aM,tee as aN,rd as aO,Iq as aP,iee as aQ,ree as aR,oee as aS,y0 as aT,Oq as aU,RK as aV,aee as aW,see as aX,d9 as aY,Jd as aZ,Et as a_,D7 as aa,qS as ab,qa as ac,H8 as ad,iv as ae,Pi as af,ov as ag,Wr as ah,gd as ai,Tn as aj,U as ak,rn as al,$o as am,RA as an,To as ao,Mt as ap,Ra as aq,He as ar,L_ as as,it as at,Vt as au,y7 as av,w2 as aw,lr as ax,$r as ay,Ni as az,y$ as b,eT as b0,FJ as b1,ZR as b2,AJ as b3,sD as b4,vn as b5,vD as b6,YJ as b7,JJ as b8,z7 as b9,dr as bA,Ft as bB,zl as bC,I2 as bD,cG as bE,LD as ba,rc as bb,yo as bc,ht as bd,Ml as be,wr as bf,so as bg,My as bh,Te as bi,x$ as bj,bB as bk,$B as bl,ha as bm,CB as bn,AB as bo,HJ as bp,QJ as bq,T7 as br,be as bs,Ku as bt,p0 as bu,I6 as bv,Dq as bw,Ql as bx,SS as by,nee as bz,H as c,h as d,_n as e,C as f,fo as g,Cv as h,W_ as i,s as j,ot as k,Oa as l,ZJ as m,Qn as n,An as o,Ln as p,_ as q,x as r,KJ as s,XJ as t,jN as u,Xt as v,Ge as w,Re as x,De as y,er as z};
//# sourceMappingURL=index-6f0b08dd.js.map
