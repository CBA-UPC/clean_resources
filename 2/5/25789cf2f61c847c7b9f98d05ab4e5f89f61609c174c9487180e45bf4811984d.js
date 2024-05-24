(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const qe="modulepreload",Je=function(e){return"/"+e},qt={},f=function(t,o,s){if(!o||o.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(i=>{if(i=Je(i),i in qt)return;qt[i]=!0;const n=i.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(!!s)for(let h=r.length-1;h>=0;h--){const d=r[h];if(d.href===i&&(!n||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":qe,n||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),n)return new Promise((h,d)=>{c.addEventListener("load",h),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,Ot=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),Jt=new WeakMap;let me=class{constructor(t,o,s){if(this._$cssResult$=!0,s!==zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(Ot&&t===void 0){const s=o!==void 0&&o.length===1;s&&(t=Jt.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Jt.set(o,t))}return t}toString(){return this.cssText}};const bt=e=>new me(typeof e=="string"?e:e+"",void 0,zt),$=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new me(o,e,zt)},Ke=(e,t)=>{if(Ot)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const s=document.createElement("style"),r=dt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=o.cssText,e.appendChild(s)}},Kt=Ot?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const s of t.cssRules)o+=s.cssText;return bt(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ye,defineProperty:Qe,getOwnPropertyDescriptor:Ze,getOwnPropertyNames:Xe,getOwnPropertySymbols:to,getPrototypeOf:eo}=Object,vt=globalThis,Yt=vt.trustedTypes,oo=Yt?Yt.emptyScript:"",so=vt.reactiveElementPolyfillSupport,X=(e,t)=>e,ut={toAttribute(e,t){switch(t){case Boolean:e=e?oo:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Ut=(e,t)=>!Ye(e,t),Qt={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:Ut};Symbol.metadata??=Symbol("metadata"),vt.litPropertyMetadata??=new WeakMap;class H extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=Qt){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,o);r!==void 0&&Qe(this.prototype,t,r)}}static getPropertyDescriptor(t,o,s){const{get:r,set:i}=Ze(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return r?.call(this)},set(n){const a=r?.call(this);i.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qt}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;const t=eo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){const o=this.properties,s=[...Xe(o),...to(o)];for(const r of s)this.createProperty(r,o[r])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[s,r]of o)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[o,s]of this.elementProperties){const r=this._$Eu(o,s);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)o.unshift(Kt(r))}else t!==void 0&&o.push(Kt(t));return o}static _$Eu(t,o){const s=o.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,o=this.constructor.elementProperties;for(const s of o.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ke(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,o,s){this._$AK(t,s)}_$EO(t,o){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:ut).toAttribute(o,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,o){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ut;this._$Em=r,this[r]=n.fromAttribute(o,i.type),this._$Em=null}}requestUpdate(t,o,s,r=!1,i){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??Ut)(r?i:this[t],o))return;this.C(t,o,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,o,s){this._$AL.has(t)||this._$AL.set(t,o),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,i]of s)i.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],i)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),this._$E_?.forEach(s=>s.hostUpdate?.()),this.update(o)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(o)}willUpdate(t){}_$AE(t){this._$E_?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(o=>this._$EO(o,this[o])),this._$ET()}updated(t){}firstUpdated(t){}}H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[X("elementProperties")]=new Map,H[X("finalized")]=new Map,so?.({ReactiveElement:H}),(vt.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,pt=Nt.trustedTypes,Zt=pt?pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vt="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+P,ro=`<${Dt}>`,U=document,et=()=>U.createComment(""),ot=e=>e===null||typeof e!="object"&&typeof e!="function",ge=Array.isArray,fe=e=>ge(e)||typeof e?.[Symbol.iterator]=="function",$t=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xt=/-->/g,te=/>/g,I=RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,oe=/"/g,be=/^(?:script|style|textarea|title)$/i,io=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),m=io(1),N=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),se=new WeakMap,O=U.createTreeWalker(U,129);function ve(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zt!==void 0?Zt.createHTML(t):t}const we=(e,t)=>{const o=e.length-1,s=[];let r,i=t===2?"<svg>":"",n=J;for(let a=0;a<o;a++){const l=e[a];let c,h,d=-1,_=0;for(;_<l.length&&(n.lastIndex=_,h=n.exec(l),h!==null);)_=n.lastIndex,n===J?h[1]==="!--"?n=Xt:h[1]!==void 0?n=te:h[2]!==void 0?(be.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=I):h[3]!==void 0&&(n=I):n===I?h[0]===">"?(n=r??J,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?I:h[3]==='"'?oe:ee):n===oe||n===ee?n=I:n===Xt||n===te?n=J:(n=I,r=void 0);const x=n===I&&e[a+1].startsWith("/>")?" ":"";i+=n===J?l+ro:d>=0?(s.push(c),l.slice(0,d)+Vt+l.slice(d)+P+x):l+P+(d===-2?a:x)}return[ve(e,i+(e[o]||"<?>")+(t===2?"</svg>":"")),s]};class st{constructor({strings:t,_$litType$:o},s){let r;this.parts=[];let i=0,n=0;const a=t.length-1,l=this.parts,[c,h]=we(t,o);if(this.el=st.createElement(c,s),O.currentNode=this.el.content,o===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=O.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Vt)){const _=h[n++],x=r.getAttribute(d).split(P),at=/([.?@])?(.*)/.exec(_);l.push({type:1,index:i,name:at[2],strings:x,ctor:at[1]==="."?_e:at[1]==="?"?$e:at[1]==="@"?Ce:rt}),r.removeAttribute(d)}else d.startsWith(P)&&(l.push({type:6,index:i}),r.removeAttribute(d));if(be.test(r.tagName)){const d=r.textContent.split(P),_=d.length-1;if(_>0){r.textContent=pt?pt.emptyScript:"";for(let x=0;x<_;x++)r.append(d[x],et()),O.nextNode(),l.push({type:2,index:++i});r.append(d[_],et())}}}else if(r.nodeType===8)if(r.data===Dt)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(P,d+1))!==-1;)l.push({type:7,index:i}),d+=P.length-1}i++}}static createElement(t,o){const s=U.createElement("template");return s.innerHTML=t,s}}function V(e,t,o=e,s){if(t===N)return t;let r=s!==void 0?o._$Co?.[s]:o._$Cl;const i=ot(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,o,s)),s!==void 0?(o._$Co??=[])[s]=r:o._$Cl=r),r!==void 0&&(t=V(e,r._$AS(e,t.values),r,s)),t}class ye{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:s}=this._$AD,r=(t?.creationScope??U).importNode(o,!0);O.currentNode=r;let i=O.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new q(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new xe(i,this,t)),this._$AV.push(c),l=s[++a]}n!==l?.index&&(i=O.nextNode(),n++)}return O.currentNode=U,r}p(t){let o=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,o),o+=s.strings.length-2):s._$AI(t[o])),o++}}class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,s,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=V(this,t,o),ot(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):fe(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==w&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=st.createElement(ve(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(o);else{const i=new ye(r,this),n=i.u(this.options);i.p(o),this.$(n),this._$AH=i}}_$AC(t){let o=se.get(t.strings);return o===void 0&&se.set(t.strings,o=new st(t)),o}T(t){ge(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let s,r=0;for(const i of t)r===o.length?o.push(s=new q(this.k(et()),this.k(et()),this,this.options)):s=o[r],s._$AI(i),r++;r<o.length&&(this._$AR(s&&s._$AB.nextSibling,r),o.length=r)}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,s,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=o,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}_$AI(t,o=this,s,r){const i=this.strings;let n=!1;if(i===void 0)t=V(this,t,o,0),n=!ot(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=V(this,a[s+l],o,l),c===N&&(c=this._$AH[l]),n||=!ot(c)||c!==this._$AH[l],c===w?t=w:t!==w&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}n&&!r&&this.O(t)}O(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _e extends rt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===w?void 0:t}}class $e extends rt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}}class Ce extends rt{constructor(t,o,s,r,i){super(t,o,s,r,i),this.type=5}_$AI(t,o=this){if((t=V(this,t,o,0)??w)===N)return;const s=this._$AH,r=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xe{constructor(t,o,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const no={j:Vt,P,A:Dt,C:1,M:we,L:ye,R:fe,V,D:q,I:rt,H:$e,N:Ce,U:_e,B:xe},ao=Nt.litHtmlPolyfillSupport;ao?.(st,q),(Nt.litHtmlVersions??=[]).push("3.1.0");const lo=(e,t,o)=>{const s=o?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const i=o?.renderBefore??null;s._$litPart$=r=new q(t.insertBefore(et(),i),i,void 0,o??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=lo(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};S._$litElement$=!0,S.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:S});const co=globalThis.litElementPolyfillSupport;co?.({LitElement:S});(globalThis.litElementVersions??=[]).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=e=>(t,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:Ut},uo=(e=ho,t,o)=>{const{kind:s,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(o.name,e),s==="accessor"){const{name:n}=o;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(a){return a!==void 0&&this.C(n,void 0,e),a}}}if(s==="setter"){const{name:n}=o;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+s)};function p(e){return(t,o)=>typeof o=="object"?uo(e,t,o):((s,r,i)=>{const n=r.hasOwnProperty(i);return r.constructor.createProperty(i,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(r,i):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function po(e){return(t,o)=>{const s=typeof t=="function"?t:t[o];Object.assign(s,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mo(e,t){return(o,s,r)=>{const i=n=>n.renderRoot?.querySelector(e)??null;if(t){const{get:n,set:a}=typeof s=="object"?o:r??(()=>{const l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return re(o,s,{get(){let l=n.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return re(o,s,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:go}=no,or=e=>e===null||typeof e!="object"&&typeof e!="function",fo=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,sr=e=>e?._$litType$?.h!=null,bo=e=>e.strings===void 0,ie=()=>document.createComment(""),rr=(e,t,o)=>{const s=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(o===void 0){const i=s.insertBefore(ie(),r),n=s.insertBefore(ie(),r);o=new go(i,n,e,e.options)}else{const i=o._$AB.nextSibling,n=o._$AM,a=n!==e;if(a){let l;o._$AQ?.(e),o._$AM=e,o._$AP!==void 0&&(l=e._$AU)!==n._$AU&&o._$AP(l)}if(i!==r||a){let l=o._$AA;for(;l!==i;){const c=l.nextSibling;s.insertBefore(l,r),l=c}}}return o},ir=(e,t,o=e)=>(e._$AI(t,o),e),vo={},nr=(e,t=vo)=>e._$AH=t,ar=e=>e._$AH,lr=e=>{e._$AP?.(!1,!0);let t=e._$AA;const o=e._$AB.nextSibling;for(;t!==o;){const s=t.nextSibling;t.remove(),t=s}},cr=e=>{e._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ae=e=>(...t)=>({_$litDirective$:e,values:t});class Pe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const s of o)s._$AO?.(t,!1),tt(s,t);return!0},mt=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},Se=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),_o(t)}};function wo(e){this._$AN!==void 0?(mt(this),this._$AM=e,Se(this)):this._$AM=e}function yo(e,t=!1,o=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let i=o;i<s.length;i++)tt(s[i],!1),mt(s[i]);else s!=null&&(tt(s,!1),mt(s));else tt(this,e)}const _o=e=>{e.type==ke.CHILD&&(e._$AP??=yo,e._$AQ??=wo)};class $o extends Pe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,s){super._$AT(t,o,s),Se(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(tt(this,t),mt(this))}setValue(t){if(bo(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=()=>new xo;class xo{}const Ct=new WeakMap,ko=Ae(class extends $o{render(e){return w}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),w}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let o=Ct.get(t);o===void 0&&(o=new WeakMap,Ct.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ct,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return typeof this.G=="function"?Ct.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var yt=$`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Ao=$`
  ${yt}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Ee=Object.defineProperty,Po=Object.defineProperties,So=Object.getOwnPropertyDescriptor,Eo=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,Lo=Object.prototype.hasOwnProperty,Ro=Object.prototype.propertyIsEnumerable,xt=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},ae=(e,t,o)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,it=(e,t)=>{for(var o in t||(t={}))Lo.call(t,o)&&ae(e,o,t[o]);if(ne)for(var o of ne(t))Ro.call(t,o)&&ae(e,o,t[o]);return e},Le=(e,t)=>Po(e,Eo(t)),u=(e,t,o,s)=>{for(var r=s>1?void 0:s?So(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Ee(t,o,r),r},Io=function(e,t){this[0]=e,this[1]=t},dr=e=>{var t=e[xt("asyncIterator")],o=!1,s,r={};return t==null?(t=e[xt("iterator")](),s=i=>r[i]=n=>t[i](n)):(t=t.call(e),s=i=>r[i]=n=>{if(o){if(o=!1,i==="throw")throw n;return n}return o=!0,{done:!1,value:new Io(new Promise(a=>{var l=t[i](n);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),r[xt("iterator")]=()=>r,s("next"),"throw"in t?s("throw"):r.throw=i=>{throw i},"return"in t&&s("return"),r},R=class extends S{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,it({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const s=customElements.get(e);if(!s){customElements.define(e,class extends t{},o);return}let r=" (unknown version)",i=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in s&&s.version&&(i=" v"+s.version),!(r&&i&&r===i)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${i} has already been registered.`)}};R.version="2.12.0";R.dependencies={};u([p()],R.prototype,"dir",2);u([p()],R.prototype,"lang",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=Ae(class extends Pe{constructor(e){if(super(e),e.type!==ke.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!this.st?.has(s)&&this.it.add(s);return this.render(t)}const o=e.element.classList;for(const s of this.it)s in t||(o.remove(s),this.it.delete(s));for(const s in t){const r=!!t[s];r===this.it.has(s)||this.st?.has(s)||(r?(o.add(s),this.it.add(s)):(o.remove(s),this.it.delete(s)))}return N}});var Ft=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return m`
      <div
        part="base"
        class=${Re({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ft.styles=Ao;u([p()],Ft.prototype,"effect",2);Ft.define("sl-skeleton");function To(e,t){let o;return()=>{clearTimeout(o),o=setTimeout(e,t)}}var Mo=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,nt=(e,t,o,s)=>{for(var r=s>1?void 0:s?Oo(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Mo(t,o,r),r};let D=class extends S{constructor(){super(...arguments),this.when="immediate",this.renderer=null,this.importer=null,this.loadedComponent=null,this.visibleObserver=null,this.renderedPromise=new Promise(e=>this.loadedPromiseResolver=e),this.isRenderedPromiseResolved=!1,this.skeletonRef=Co(),this.skeletonHeight=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(){(this.importer||this.when)&&this.listenForLoad()}createRenderRoot(){return this}render(){return this.loadedComponent?this.renderer?(this.resolveRenderedPromise(),this.renderer()):(this.resolveRenderedPromise(),this.loadedComponent):this.renderLoading()}renderLoading(){return m`
            <sl-skeleton tabindex="0" class="lazy-loading-skeleton" effect="pulse" ${ko(this.skeletonRef)}></sl-skeleton>
        `}listenForLoad(){if(this.when==="immediate")this.loadImmediately();else if(this.when==="visible")this.loadWhenVisible();else if(this.when instanceof Promise)this.when.finally(()=>this.loadImmediately());else{const e=this.when;if(!e||!e.value||!(e.value instanceof D)){console.warn("<lazy-load> had an unknown .when property. Expects 'immediate' | 'visible' | Promise | Ref<LazyLoad>. Because of this, the <lazy-load> element will not be loaded.");return}e.value.renderedPromise.then(()=>this.loadImmediately())}}addLoadedClass(){this.classList.add("loaded")}loadImmediately(){this.importer&&this.renderer&&this.importer().then(()=>{this.skeletonHeight=this.skeletonRef.value?.clientHeight||0,this.renderedPromise.then(()=>this.addLoadedClass()),this.loadedComponent=this.renderer?.()||m``})}loadWhenVisible(){if(this.visibleObserver?.disconnect(),!this.visibleObserver){const t={root:null,threshold:0,rootMargin:"5px 5px 5px 5px"};this.visibleObserver=new IntersectionObserver(o=>this.visibleObserved(o),t)}const e=this.querySelector("sl-skeleton");e&&this.visibleObserver.observe(e)}visibleObserved(e){e.find(o=>o.isIntersecting)&&(this.visibleObserver?.disconnect(),this.visibleObserver=null,this.loadImmediately())}resolveRenderedPromise(){this.isRenderedPromiseResolved||(this.isRenderedPromiseResolved=!0,queueMicrotask(()=>this.loadedPromiseResolver?.()))}warnIfShimmerSizeDoesntMatchRealSize(){this.skeletonHeight&&this.clientHeight&&this.clientHeight!==this.skeletonHeight&&(console.warn(`Warning: Wrong lazy load skeleton height.

Skeleton height: ${this.skeletonHeight}
Actual rendered content height: ${this.clientHeight}.

Accurate skeleton sizes are important for proper scroll position restoration during back/forward navigations.`,this),this.resizeObserver?.disconnect())}};nt([p()],D.prototype,"when",2);nt([p({attribute:"renderer"})],D.prototype,"renderer",2);nt([p({attribute:"importer"})],D.prototype,"importer",2);nt([F()],D.prototype,"loadedComponent",2);D=nt([wt("lazy-load")],D);var Ie=(e=>(e[e.sm=576]="sm",e[e.md=768]="md",e[e.lg=992]="lg",e[e.xl=1200]="xl",e[e.xxl=1600]="xxl",e[e.xxxl=1960]="xxxl",e))(Ie||{}),y=(e=>(e[e.xs=575]="xs",e[e.sm=767]="sm",e[e.md=991]="md",e[e.lg=1199]="lg",e[e.xl=1599]="xl",e[e.xxl=1959]="xxl",e))(y||{});function v(e){return[576,768,768,992,1200,1600,1960].includes(e)?$`@media(min-width: ${e}px)`:$`@media(max-width: ${e}px)`}function hr(){return v(575)}function Te(){return zo({"max-width":"700px","max-height":"400px"})}function ur(e){return[576,768,768,992,1200,1600,1960].includes(e)?window.matchMedia(`(min-width: ${e}px)`).matches:window.matchMedia(`(max-width: ${e}px)`).matches}function zo(e={}){let t="";for(const[o,s]of Object.entries(e))t+=t===""?"":" and ",t+=`(${o}: ${s})`;return $`@media${bt(t)}`}const Bt=$`
    h1, h2, h3, h4, h5 {
        font-family: var(--header-font);
    }

    .d-flex {
        display: flex;
    }

    .flex-column {
        flex-direction: column;
    }

    .justify-content-center {
        justify-content: center;
    }

    .align-items-center {
        align-items: center;
    }

    sl-divider {
        height: 0.875rem;
        --spacing: var(--sl-spacing-2x-small);
    }

    .d-none {
        display: none !important;
    }
    .opacity-0 {
        opacity: 0;
    }
    .opacity-1 {
        opacity: 1;
    }

    /* Lazy load styles defined here because lazy-load cannot use shadow DOM style encapsulation. */
    lazy-load {
        --shimmer-height: 0;
        --shimmer-padding: 0;
        --shimmer-border-radius: 0;
        display: block;
        position: relative;
        min-height: var(--shimmer-height, 0);

        &.loaded {
            --shimmer-height: 0 !important;
        }

        > sl-skeleton {
            --border-radius: var(--shimmer-border-radius, var(--sl-border-radius-x-large));
            width: 100%;
            height: 100%;
            min-height: var(--shimmer-height, 0);
            position: absolute;
            top: 0;
            bottom: 0;
            padding: var(--shimmer-padding, 0);
        }
    }

    /** A utility for making a span of text use ellipsis. Must be paired with a width or max-width. */
    .text-ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .text-two-line-overflow {
        display: inline-block;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        overflow: hidden;
        -webkit-box-orient: vertical;
        white-space: normal !important;
    }

    .text-three-line-overflow {
        display: inline-block;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        white-space: normal !important;
    }

    .wide-column-collection {
        --max-height: 300px;

        /** On mobile, wide column collections should be a bit taller to allow for an additional row */
        ${v(y.sm)} {
            & {
                --max-height: 420px;
            }
        }
    }

    .product-collections-wrap {
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-3x-large);
        margin: 0 38px;
    }
    .product-details {
        padding: 0 38px;
    }

    /** When spotlight shows only one, prodct-collections-wrap doesn't need margin */
    ${v(1024)} {
        .product-collections-wrap {
            margin: 0;
        }
        .product-details {
            padding: 0;
        }
    }

    .module-divider {
        border: 1px solid var(--theme-divider-color);
        opacity: 0.7;
        margin-top: 6px;
        margin-left: auto;
        margin-right: auto;
        width: 92%;
    }

    .double-small-hero-row {
        display: flex;
        flex-direction: row;
        gap: var(--sl-spacing-small);

        ${v(y.md-130)} {
            & {
                flex-direction: column;
                gap: var(--sl-spacing-x-large);
            }
        }
    }

    .double-row-hero {
        flex-grow: 1;
        flex-basis: 0;
    }

    @media screen and (-ms-high-contrast: active) {
        .label {
            background-color: var(--sl-default-white);
        }
    }
`,Uo=$`
    .scroll-to-top-button{
        position: fixed;
        z-index: 1000;
        right: 50px;
        bottom: 5%;
        opacity: 0;
        transform: translateY(100px);
        transition: all .5s ease;
    }
    .scroll-to-top-button::part(base) {
        position: static;
    }

    .scroll-to-top-button.visible.show {
        opacity: 1;
        transform: translateY(0);
    }

    .scroll-to-top-button::part(icon) {
        font-size: 28px;

    }

    ${Te()} {
        .scroll-to-top-button {
            transform: translateY(50px);
            opacity: 0;
            right: 5px!important;

        }
        .scroll-to-top-button.show {
            transform: translateY(0);
            opacity: 1;
        }
    }

    /** When the viewport is in a portrait orientation, adjust the position of the button from the right edge */
    @media (orientation: portrait){
        .scroll-to-top-button {
            right: 5px!important;
        }
    }
`;var No=$`
  ${yt}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;const Lt=new Set,Vo=new MutationObserver(Ue),G=new Map;let Me=document.documentElement.dir||"ltr",Oe=document.documentElement.lang||navigator.language,T;Vo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ze(...e){e.map(t=>{const o=t.$code.toLowerCase();G.has(o)?G.set(o,Object.assign(Object.assign({},G.get(o)),t)):G.set(o,t),T||(T=t)}),Ue()}function Ue(){Me=document.documentElement.dir||"ltr",Oe=document.documentElement.lang||navigator.language,[...Lt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Do=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Lt.add(this.host)}hostDisconnected(){Lt.delete(this.host)}dir(){return`${this.host.dir||Me}`.toLowerCase()}lang(){return`${this.host.lang||Oe}`.toLowerCase()}getTranslationData(t){var o,s;const r=new Intl.Locale(t.replace(/_/g,"-")),i=r?.language.toLowerCase(),n=(s=(o=r?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&s!==void 0?s:"",a=G.get(`${i}-${n}`),l=G.get(i);return{locale:r,language:i,region:n,primary:a,secondary:l}}exists(t,o){var s;const{primary:r,secondary:i}=this.getTranslationData((s=o.lang)!==null&&s!==void 0?s:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[t]||i&&i[t]||o.includeFallback&&T&&T[t])}term(t,...o){const{primary:s,secondary:r}=this.getTranslationData(this.lang());let i;if(s&&s[t])i=s[t];else if(r&&r[t])i=r[t];else if(T&&T[t])i=T[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...o):i}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,o)}};var Ne={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ze(Ne);var Fo=Ne,Ve=class extends Do{};ze(Fo);var De=class extends R{constructor(){super(...arguments),this.localize=new Ve(this)}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};De.styles=No;var K=new WeakMap,Y=new WeakMap,Q=new WeakMap,kt=new WeakSet,lt=new WeakMap,Bo=class{constructor(e,t){this.handleFormData=o=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!s&&!n&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{o.formData.append(r,a.toString())}):o.formData.append(r,i.toString()))},this.handleFormSubmit=o=>{var s;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=K.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),lt.set(this.host,[])},this.handleInteraction=o=>{const s=lt.get(this.host);s.includes(o.type)||s.push(o.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=it({form:o=>{const s=o.form;if(s){const i=o.getRootNode().getElementById(s);if(i)return i}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var s;return(s=o.disabled)!=null?s:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,s)=>o.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),lt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),lt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,K.has(this.form)?K.get(this.form).add(this.host):K.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Y.has(this.form)||(Y.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Q.has(this.form)||(Q.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=K.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Y.has(this.form)&&(this.form.reportValidity=Y.get(this.form),Y.delete(this.form)),Q.has(this.form)&&(this.form.checkValidity=Q.get(this.form),Q.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?kt.add(e):kt.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&o.setAttribute(s,t.getAttribute(s))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!kt.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Ht=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),mr=Object.freeze(Le(it({},Ht),{valid:!1,valueMissing:!0})),gr=Object.freeze(Le(it({},Ht),{valid:!1,customError:!0})),Ho=$`
  ${yt}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Go=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const s=o.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function fr(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let o="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(o+=s.textContent)}),o}var jo=$`
  ${yt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Rt="";function le(e){Rt=e}function Wo(e=""){if(!Rt){const t=[...document.getElementsByTagName("script")],o=t.find(s=>s.hasAttribute("data-shoelace"));if(o)le(o.getAttribute("data-shoelace"));else{const s=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let r="";s&&(r=s.getAttribute("src")),le(r.split("/").slice(0,-1).join("/"))}}return Rt.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var qo={name:"default",resolver:e=>Wo(`assets/icons/${e}.svg`)},Jo=qo,ce={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ko={name:"system",resolver:e=>e in ce?`data:image/svg+xml,${encodeURIComponent(ce[e])}`:""},Yo=Ko,Qo=[Jo,Yo],It=[];function Zo(e){It.push(e)}function Xo(e){It=It.filter(t=>t!==e)}function de(e){return Qo.find(t=>t.name===e)}function Gt(e,t){const o=it({waitUntilFirstUpdate:!1},t);return(s,r)=>{const{update:i}=s,n=Array.isArray(e)?e:[e];s.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),d=this[c];h!==d&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,d)}}),i.call(this,a)}}}var Z=Symbol(),ct=Symbol(),At,Pt=new Map,k=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let s;if(t?.spriteSheet)return m`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?Z:ct}catch{return ct}try{const r=document.createElement("div");r.innerHTML=await s.text();const i=r.firstElementChild;if(((o=i?.tagName)==null?void 0:o.toLowerCase())!=="svg")return Z;At||(At=new DOMParser);const a=At.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Z}catch{return Z}}connectedCallback(){super.connectedCallback(),Zo(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xo(this)}getIconSource(){const e=de(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),s=o?de(this.library):void 0;if(!t){this.svg=null;return}let r=Pt.get(t);if(r||(r=this.resolveIcon(t,s),Pt.set(t,r)),!this.initialRender)return;const i=await r;if(i===ct&&Pt.delete(t),t===this.getIconSource().url){if(fo(i)){this.svg=i;return}switch(i){case ct:case Z:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=s?.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};k.styles=jo;u([F()],k.prototype,"svg",2);u([p({reflect:!0})],k.prototype,"name",2);u([p()],k.prototype,"src",2);u([p()],k.prototype,"label",2);u([p({reflect:!0})],k.prototype,"library",2);u([Gt("label")],k.prototype,"handleLabelChange",1);u([Gt(["name","src","library"])],k.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fe=Symbol.for(""),ts=e=>{if(e?.r===Fe)return e?._$litStatic$},he=(e,...t)=>({_$litStatic$:t.reduce((o,s,r)=>o+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[r+1],e[0]),r:Fe}),ue=new Map,es=e=>(t,...o)=>{const s=o.length;let r,i;const n=[],a=[];let l,c=0,h=!1;for(;c<s;){for(l=t[c];c<s&&(i=o[c],(r=ts(i))!==void 0);)l+=r+t[++c],h=!0;c!==s&&a.push(i),n.push(l),c++}if(c===s&&n.push(t[s]),h){const d=n.join("$$lit$$");(t=ue.get(d))===void 0&&(n.raw=n,ue.set(d,t=n)),o=a}return e(t,...o)},St=es(m);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=e=>e??w;var g=class extends R{constructor(){super(...arguments),this.formControlController=new Bo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Go(this,"[default]","prefix","suffix"),this.localize=new Ve(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ht}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?he`a`:he`button`;return St`
      <${t}
        part="base"
        class=${Re({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${A(e?void 0:this.disabled)}
        type=${A(e?void 0:this.type)}
        title=${this.title}
        name=${A(e?void 0:this.name)}
        value=${A(e?void 0:this.value)}
        href=${A(e?this.href:void 0)}
        target=${A(e?this.target:void 0)}
        download=${A(e?this.download:void 0)}
        rel=${A(e?this.rel:void 0)}
        role=${A(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?St` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?St`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};g.styles=Ho;g.dependencies={"sl-icon":k,"sl-spinner":De};u([mo(".button")],g.prototype,"button",2);u([F()],g.prototype,"hasFocus",2);u([F()],g.prototype,"invalid",2);u([p()],g.prototype,"title",2);u([p({reflect:!0})],g.prototype,"variant",2);u([p({reflect:!0})],g.prototype,"size",2);u([p({type:Boolean,reflect:!0})],g.prototype,"caret",2);u([p({type:Boolean,reflect:!0})],g.prototype,"disabled",2);u([p({type:Boolean,reflect:!0})],g.prototype,"loading",2);u([p({type:Boolean,reflect:!0})],g.prototype,"outline",2);u([p({type:Boolean,reflect:!0})],g.prototype,"pill",2);u([p({type:Boolean,reflect:!0})],g.prototype,"circle",2);u([p()],g.prototype,"type",2);u([p()],g.prototype,"name",2);u([p()],g.prototype,"value",2);u([p()],g.prototype,"href",2);u([p()],g.prototype,"target",2);u([p()],g.prototype,"rel",2);u([p()],g.prototype,"download",2);u([p()],g.prototype,"form",2);u([p({attribute:"formaction"})],g.prototype,"formAction",2);u([p({attribute:"formenctype"})],g.prototype,"formEnctype",2);u([p({attribute:"formmethod"})],g.prototype,"formMethod",2);u([p({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);u([p({attribute:"formtarget"})],g.prototype,"formTarget",2);u([Gt("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);var br=g;g.define("sl-button");var Tt=(e=>(e.ApiError="API",e.TranslationError="Translation",e.UnhandledError="Unhandled",e))(Tt||{});class Mt extends Error{constructor(t,o,s){super(o),this.data=()=>({type:this.type,context:this.context}),this.type=t,this.context=s}}class os extends Mt{constructor(t,o,s={}){super("Translation",t,s),this.data=()=>({...super.data(),locale:this.language}),this.language=o}}class ss{constructor(){this.defaultMetadata={step:null,route:null,component:{type:null,area:null,areaSlot:null,subSlot:null,id:null,name:null}},this.history=[],this.routes=["/home","/apps","/games","/movies","/search","/"],this.customEvents=["ProductCardClicked","SeeAllClicked","TallTileCollectionClicked","CollectionGroupClicked","SpotlightCardClicked","PublisherClicked","CategoryClicked"]}updateStep(t,o){o.step=t}updateRoute(t,o){o.route=t}updateComponentType(t,o){o.component.type=t}updateComponentArea(t,o){o.component.area=t}updateComponentAreaSlot(t,o){o.component.areaSlot=t}updateComponentSubSlot(t,o){o.component.subSlot=t}updateComponentId(t,o){o.component.id=t}updateComponentName(t,o){o.component.name=t}hasRoutes(t){return this.routes.includes(t)}hasEvents(t){return this.customEvents.includes(t)}updateMetadata(t,o,s=""){const r=JSON.parse(JSON.stringify(this.defaultMetadata));s&&this.updateComponentArea(s,r),"type"in t?this.updateComponentType(t.type,r):"type"in o&&this.updateComponentType(o.type,r),"collectionId"in o?this.updateComponentId(o.collectionId,r):"collectionId"in t&&this.updateComponentId(t.collectionId,r),"areaSlot"in o&&this.updateComponentAreaSlot(o.areaSlot,r),"slot"in t?this.updateComponentSubSlot(t.slot,r):"slot"in o&&this.updateComponentSubSlot(o.slot,r),"itemId"in t&&this.updateComponentId(t.itemId,r),"itemName"in t&&this.updateComponentName(t.itemName,r),this.updateRoute(window.location.pathname,r),this.updateStep(this.hasRoutes(window.location.pathname)?0:this.getHistory().length,r),this.updateHistory(r)}getHistory(){return this.history}resetHistory(){this.history=[]}updateHistory(t){this.hasRoutes(t.route||"")&&this.resetHistory(),this.history.push(t)}}class rs{constructor(t){this.config=t,this.appInsightsResolver=null,this.adobeAnalyticsResolver=null,this.globalProperties={},this.visibleObserver=null,this.eventIdName="telemetry-event-id",this.areaIdName="telemetry-area-id",this.dataName="telemetry-data",this.operationId="",this.operationRoute=null,this.excludeDomains=["clarity.ms","video.microsoft.com","universalstore.streaming.mediaservices.windows.net"],this.navigationTracking=new ss,this.appInsightsLoaded=new Promise(o=>this.appInsightsResolver=o),this.adobeAnalyticsLoaded=new Promise(o=>this.adobeAnalyticsResolver=o),(this.config.appInsightsKey||this.config.adobeKey)&&(this.trackActions(),this.trackExceptions(),this.trackImpressions())}initialize(t,o,s){this.setProperties({market:o,locale:t});const r=new URL(window.location.href);this.config.appInsightsKey?this.loadAppInsights(this.config).then(i=>this.initializeAppInsights(i,r,s)).then(i=>this.appInsightsResolver?.(i)).catch(i=>console.warn("Unable to import Application Insights due to an error",i)):console.warn("No Application Insights telemetry key provided."),this.config.adobeKey?this.loadAdobeAnalytics().then(i=>this.initializeAdobeAnalytics(i)).then(i=>this.adobeAnalyticsResolver?.(i)).catch(i=>console.warn("Unable to import Adobe Analytics due to an error",i)):console.warn("No Adobe Analytics telemetry key provided.")}track(t){this.appInsightsLoaded.then(s=>{const r={name:t.name,properties:{...this.globalProperties,...t.properties}};s.appInsights.trackEvent(r)}),(t.name==="CtaClicked"||t.name==="SpotlightCardCtaClicked")&&t.properties?.itemId&&this.adobeAnalyticsLoaded.then(s=>{const r={content:[{id:`getOrRemoveButton-${t.properties?.itemId}`,cN:"Get in Store app"}],actionType:"CL",behavior:92,name:t.properties?.itemId,uri:window.location.href,properties:{pageTags:{productId:t.properties?.itemId}},id:s.getPlugin("WebAnalyticsPlugin").plugin.id.getLastPageViewId()};s.trackPageAction(r)})}trackFlush(){this.appInsightsLoaded.then(t=>{t.appInsights.flush()})}trackPageView(t,o,s){this.appInsightsLoaded.then(r=>{o&&this.newOperation(r.generateW3CId,t),r.appInsights.trackPageView({refUri:o?.href})}),this.adobeAnalyticsLoaded.then(r=>{const n=t.pathname.toLowerCase().startsWith("/detail/")&&s?.id?{id:s?.id,title:s?.name}:null,a=n?{pageTags:{ProductInfo:n}}:{},l={uri:t.toString(),properties:a,pageType:n?"PDP":void 0,behavior:n?90:0};r.trackPageView(l)})}addImpressionTracking(t){this.visibleObserver?.observe(t)}removeImpressionTracking(t){this.visibleObserver?.unobserve(t)}error(t){console.error(t),this.appInsightsLoaded.then(o=>{o.appInsights.trackException({exception:t,properties:{...this.globalProperties,...t.data}})})}warn(t,o={}){console.warn(t),this.logCore(t,o,2)}log(t,o={}){this.logCore(t,o,1)}setProperties(t){this.globalProperties={...this.globalProperties,...t}}logCore(t,o={},s){this.appInsightsLoaded.then(r=>{const i={message:t,severityLevel:s},n={...this.globalProperties,...o};r.appInsights.trackTrace(i,n)})}newOperation(t,o=null){this.operationRoute=o,this.operationId=t()}initializeAppInsights(t,o,s){this.newOperation(t.generateW3CId,o);const r=t.appInsights;return r.addDependencyInitializer(i=>{const n=i?.item?.target;return n?!this.excludeDomains.find(a=>n.includes(a)):!0}),r.addTelemetryInitializer(i=>{i.tags=i.tags||[],i.tags["ai.operation.id"]=this.operationId,i.tags["ai.operation.name"]=this.operationRoute?.pathname,i.data=i.data||[],i.baseType==="PageviewData"&&(i.data.userAgent=navigator.userAgent,i.data.isMobile=navigator.userAgentData?.mobile,i.data.isCookieEnabled=navigator.cookieEnabled,i.baseData.startTime=new Date)}),this.config.role&&r.addTelemetryInitializer(i=>{i.tags=i.tags||[],i.tags["ai.cloud.role"]=this.config.role}),r.addTelemetryInitializer(i=>{i.data=i.data||[],i.data.muid=s.sessionId,i.baseType==="PageviewData"&&(i.data.assignmentContext=s.context)}),r.loadAppInsights(),this.track({name:"ExpContextSet",properties:{assignmentContext:s.context,assignmentFlags:s.values}}),t}initializeAdobeAnalytics(t){const o={disableCookiesUsage:!0,propertyStorageOverride:{getProperty:s=>window.sessionStorage.getItem(s)||"",setProperty:(s,r)=>window.sessionStorage.setItem(s,r)},instrumentationKey:this.config.adobeKey||"",webAnalyticsConfiguration:{manageCv:!0,urlCollectHash:!1,urlCollectQuery:!0,syncPageActionNavClick:!1,autoCapture:{click:!1,scroll:!1,pageView:!1,jsError:!1,msTags:!1,onUnload:!1}}};return t.initialize(o,[]),t}getAttribute(t,o){return t?.attributes?.getNamedItem(o)?.value||null}trackActions(){if(!document)return;const t=(a,l)=>{const c=a.composedPath().find(x=>!!this.getAttribute(x,l)),h=this.getAttribute(c,l),d=this.getAttribute(c,this.dataName);let _={};return d&&(_={..._,...JSON.parse(d)}),{element:c,name:h,data:_}},o=a=>{const l=a.composedPath().filter(d=>!!this.getAttribute(d,this.areaIdName)),c=l.map(d=>this.getAttribute(d,this.areaIdName)).reverse().join("/");let h={};return l.forEach(d=>{const _=this.getAttribute(d,this.dataName);_&&(h={...h,...JSON.parse(_)})}),{elements:l,name:c,data:h}};let s="",r="";const i=(a,l=["SL-INPUT"])=>{const c=t(a,this.eventIdName);if(!c.element||l.find(d=>d===c.element.tagName)||r!==a.type&&s===c.element.accessKey+c.name)return;const h=o(a);this.navigationTracking.hasEvents(c.name||"")?(this.navigationTracking.updateMetadata(c.data,h.data,h.name),this.track({name:c.name||"",properties:{area:h?.name,event:a.type,...c.data??null,...h?.data,history:this.navigationTracking.getHistory()}})):this.track({name:c.name||"",properties:{area:h?.name,event:a.type,...c.data??null,...h?.data}}),r=a.type,s=c.element.accessKey+c.name};document.addEventListener("click",a=>{a.sourceCapabilities?.firesTouchEvents||i(a)});let n=!1;document.addEventListener("touchstart",()=>n=!1),document.addEventListener("touchmove",()=>n=!0),document.addEventListener("touchend",a=>{n||a.touches.length>0||i(a)}),document.addEventListener("keydown",a=>{a.key==="Enter"&&i(a,[])})}trackExceptions(){window.addEventListener("error",t=>(this.error(new Mt(Tt.UnhandledError,"Unhandled error.",t.error)),!1)),window.addEventListener("unhandledrejection",t=>{this.error(new Mt(Tt.UnhandledError,`Unhandled error: ${t.reason?.message||t.reason}`,{stack:t.reason?.stack}))})}trackImpressions(){this.visibleObserver=new IntersectionObserver(t=>{const o=t.filter(s=>s.isIntersecting);for(const{target:s}of o){this.visibleObserver?.unobserve(s);let r=this.getAttribute(s,this.areaIdName),i=this.getAttribute(s,this.dataName);if(!r){const n=s.querySelector(`[${this.areaIdName}]`)||s.shadowRoot?.querySelector(`[${this.areaIdName}]`);if(!n)return;r=this.getAttribute(n,this.areaIdName),i=this.getAttribute(n,this.dataName)}this.track({name:"AreaDisplayed",properties:{area:r,...i?JSON.parse(i):{}}})}},{root:null,threshold:0,rootMargin:"5px 5px 5px 5px"})}async loadAppInsights(t){const o=await Promise.all([f(()=>import("./applicationinsights-web-9ad09b9c.js"),["assets/js/applicationinsights-web-9ad09b9c.js","assets/js/InstrumentHooks-cd565348.js"]),f(()=>import("./applicationinsights-core-js-9783d46c.js"),["assets/js/applicationinsights-core-js-9783d46c.js","assets/js/InstrumentHooks-cd565348.js"])]),[s,r]=o;return{appInsights:new s.ApplicationInsights({config:{connectionString:t.appInsightsKey,enableAutoRouteTracking:!1,autoTrackPageVisitTime:!1,perfEvtsSendAll:!1,enableCorsCorrelation:!0,correlationHeaderExcludedDomains:[...this.excludeDomains],disablePageUnloadEvents:["unload"],maxBatchInterval:3e3}}),generateW3CId:r.generateW3CId}}loadAdobeAnalytics(){return f(()=>import("./Index-cbed7ffc.js"),[]).then(o=>new o.ApplicationInsights)}}const is=window.storeViewModel,j=new rs(is.telemetry);class ns{constructor(){this.locale=null,this.fallbackLocale=null,this.fetchTask=null,this.supportedLocales=[{code:"af-za",translationCode:"af-za"},{code:"am-et",translationCode:"am-et"},{code:"ar-sa",translationCode:"ar-sa"},{code:"as-in",translationCode:"as-in"},{code:"az-latn-az",translationCode:"az-latn-az"},{code:"bd-by",translationCode:"ru-ru"},{code:"bg-bg",translationCode:"bg-bg"},{code:"bn-bd",translationCode:"bn-in"},{code:"bn-in",translationCode:"bn-in"},{code:"bs-latn-ba",translationCode:"bs-latn-ba"},{code:"ca-es",translationCode:"ca-es"},{code:"ca-es-valencia",translationCode:"ca-es-valencia"},{code:"chr-cher-us",translationCode:"en-us"},{code:"bd-by",translationCode:"ru-ru"},{code:"cs-cz",translationCode:"cs-cz"},{code:"cy-gb",translationCode:"cy-gb"},{code:"da-dk",translationCode:"da-dk"},{code:"de-at",translationCode:"de-de"},{code:"de-ch",translationCode:"de-de"},{code:"de-li",translationCode:"de-de"},{code:"de-de",translationCode:"de-de"},{code:"el-gr",translationCode:"el-gr"},{code:"en-au",translationCode:"en-gb"},{code:"en-ca",translationCode:"en-gb"},{code:"en-in",translationCode:"en-gb"},{code:"en-gb",translationCode:"en-gb"},{code:"en-nz",translationCode:"en-gb"},{code:"en-us",translationCode:"en-us"},{code:"en-za",translationCode:"en-gb"},{code:"es-419",translationCode:"es-es"},{code:"es-ar",translationCode:"es-es"},{code:"es-cl",translationCode:"es-es"},{code:"es-co",translationCode:"es-es"},{code:"es-cr",translationCode:"es-es"},{code:"es-es",translationCode:"es-es"},{code:"es-hn",translationCode:"es-es"},{code:"es-mx",translationCode:"es-mx"},{code:"es-pe",translationCode:"es-es"},{code:"es-us",translationCode:"es-es"},{code:"es-uy",translationCode:"es-es"},{code:"es-ve",translationCode:"es-es"},{code:"et-ee",translationCode:"et-ee"},{code:"eu-es",translationCode:"eu-es"},{code:"fa-ir",translationCode:"fa-ir"},{code:"fi-fi",translationCode:"fi-fi"},{code:"fil-ph",translationCode:"fil-ph"},{code:"fr-ca",translationCode:"fr-ca"},{code:"fr-ch",translationCode:"fr-fr"},{code:"fr-fr",translationCode:"fr-fr"},{code:"ga-ie",translationCode:"ga-ie"},{code:"gd-gb",translationCode:"gd-gb"},{code:"gl-es",translationCode:"gl-es"},{code:"gu-in",translationCode:"gu-in"},{code:"ha-latn-ng",translationCode:"en-gb"},{code:"he-il",translationCode:"he-il"},{code:"hi-in",translationCode:"hi-in"},{code:"hr-hr",translationCode:"hr-hr"},{code:"hu-hu",translationCode:"hu-hu"},{code:"hy-am",translationCode:"en-us"},{code:"id-id",translationCode:"id-id"},{code:"ig-ng",translationCode:"en-gb"},{code:"is-is",translationCode:"is-is"},{code:"it-ch",translationCode:"it-it"},{code:"it-it",translationCode:"it-it"},{code:"ja-jp",translationCode:"ja-jp"},{code:"ka-ge",translationCode:"ka-ge"},{code:"kk-kz",translationCode:"kk-kz"},{code:"km-kh",translationCode:"km-kh"},{code:"kn-in",translationCode:"kn-in"},{code:"ko-kr",translationCode:"ko-kr"},{code:"kok-in",translationCode:"kok-in"},{code:"ky-kg",translationCode:"ru-ru"},{code:"lb-lu",translationCode:"lb-lu"},{code:"lo-la",translationCode:"lo-la"},{code:"lt-lt",translationCode:"lt-lt"},{code:"lv-lv",translationCode:"lv-lv"},{code:"mi-nz",translationCode:"mi-nz"},{code:"mk-mk",translationCode:"mk-mk"},{code:"ml-in",translationCode:"ml-in"},{code:"mn-mn",translationCode:"ru-ru"},{code:"mr-in",translationCode:"mr-in"},{code:"ms-my",translationCode:"ms-my"},{code:"mt-mt",translationCode:"mt-mt"},{code:"nb-no",translationCode:"nb-no"},{code:"ne-np",translationCode:"ne-np"},{code:"nl-nl",translationCode:"nl-nl"},{code:"nn-no",translationCode:"nn-no"},{code:"nso-za",translationCode:"af-za"},{code:"or-in",translationCode:"or-in"},{code:"pa-arab-pk",translationCode:"en-gb"},{code:"pa-in",translationCode:"pa-in"},{code:"pl-pl",translationCode:"pl-pl"},{code:"prs-af",translationCode:"en-gb"},{code:"pt-br",translationCode:"pt-br"},{code:"pt-pt",translationCode:"pt-pt"},{code:"quc-latn-gt",translationCode:"es-es"},{code:"quz-pe",translationCode:"quz-pe"},{code:"ro-ro",translationCode:"ro-ro"},{code:"ru-ru",translationCode:"ru-ru"},{code:"rw-rw",translationCode:"en-gb"},{code:"sd-arab-pk",translationCode:"en-gb"},{code:"sk-sk",translationCode:"sk-sk"},{code:"si-lk",translationCode:"en-gb"},{code:"sl-si",translationCode:"sl-si"},{code:"sq-al",translationCode:"sq-al"},{code:"sr-cyrl-ba",translationCode:"sr-cyrl-ba"},{code:"sr-cyrl-rs",translationCode:"sr-cyrl-rs"},{code:"sr-latn-rs",translationCode:"sr-latn-rs"},{code:"sv-se",translationCode:"sv-se"},{code:"sw-ke",translationCode:"en-gb"},{code:"ta-in",translationCode:"ta-in"},{code:"te-in",translationCode:"te-in"},{code:"tg-cyrl-tj",translationCode:"ru-ru"},{code:"th-th",translationCode:"th-th"},{code:"ti-et",translationCode:"am-et"},{code:"tk-tm",translationCode:"ru-ru"},{code:"tn-za",translationCode:"af-za"},{code:"tr-tr",translationCode:"tr-tr"},{code:"tt-ru",translationCode:"tt-ru"},{code:"ug-cn",translationCode:"ug-cn"},{code:"uk-ua",translationCode:"uk-ua"},{code:"ur-pk",translationCode:"ur-pk"},{code:"uz-latn-uz",translationCode:"en-gb"},{code:"vi-vn",translationCode:"vi-vn"},{code:"wo-sn",translationCode:"fr-fr"},{code:"xh-za",translationCode:"af-za"},{code:"yo-ng",translationCode:"en-gb"},{code:"zh-cn",translationCode:"zh-cn"},{code:"zh-hans",translationCode:"zh-cn"},{code:"zh-hant",translationCode:"zh-tw"},{code:"zh-hant-hk",translationCode:"zh-tw"},{code:"zh-hant-tw",translationCode:"zh-tw"},{code:"zh-hk",translationCode:"zh-tw"},{code:"zh-mo",translationCode:"zh-tw"},{code:"zh-tw",translationCode:"zh-tw"},{code:"zu-za",translationCode:"af-za"}]}fetch(){return this.fetchTask||(this.fetchTask=this.fetchCore()),this.fetchTask}get(t){const s=this.getTranslations()[t];if(s)return s;j.warn(`Couldn't find translation for ${t} in ${this.locale?.code}. Falling back to ${this.fallbackLocale?.code}`);const i=this.getFallbackTranslations()[t];return i||(j.error(new os(`Couldn't find translation or fallback translation for ${t}. Is this misspelled?`,this.locale?.code)),"")}getFormatted(t,...o){if(!o)return j.warn("Called localeStrings.getFormatted(...) but didn't pass any arguments to format. Instead, use localeStrings.get(...)"),this.get(t);let s=this.get(t);if(s)for(let r=0;r<o.length;r++){const i=new RegExp("\\{"+r+"\\}","gi"),n=s,a=typeof o[r]=="string"?o[r]:`${o[r]}`;s=s.replace(i,a),s===n&&j.warn(`String translation warning: The value ${this.get(t)} expected a different number of arguments than was supplied (${o.length}).`)}return s}isRtl(){const t=["ar","fa","he","ku","pa","prs","sd","ug","ur"],o=this.ensureLocale();return t.some(s=>o.code.startsWith(s+"-"))}getLocaleName(){if(!this.locale)throw new Error("Locale is not yet loaded.");return this.locale.code}async fetchCore(){const t=this.getSupportedLocale(),o=this.getFallbackLocale(),s=this.loadTranslationFile(t.translationCode);let r=null;o!==t&&(r=this.loadTranslationFile(o.translationCode));const n=await s;if(this.locale={code:t.code,translations:n},r){const a=await r;this.fallbackLocale={code:o.code,translations:a}}else this.fallbackLocale=this.locale;return document.documentElement.lang=this.locale.code,document.documentElement.dir=this.isRtl()?"rtl":"ltr",t.code}async loadTranslationFile(t){const o=window.storeViewModel;if(o?.localeStrings&&t.localeCompare(o.hl,void 0,{sensitivity:"base"})===0)return o.localeStrings;const s=o?.supportedLocaleHashes[t]||"",r=await fetch(`localized-strings/${t}/strings.json?v=${s}`);if(!r.ok)throw new Error("Unable to fetch translation file for locale "+t);return await r.json()}getTranslations(){return this.ensureLocale().translations}getFallbackTranslations(){if(!this.fallbackLocale)throw new Error("Fallback locale must first be initialized via fetch().");return this.fallbackLocale.translations}ensureLocale(){if(!this.locale)throw new Error("Locale must first be initialized via fetch().");return this.locale}getSupportedLocale(){return this.getSupportedLocaleFromQueryString()||this.getSupportedLocaleFromBrowserLanguage()||this.getFallbackLocale()}getSupportedLocaleFromQueryString(){const t=new URLSearchParams(location?.search).get("hl");return t?this.getSupportedLocaleFromLanguage(t):null}getSupportedLocaleFromBrowserLanguage(){return[navigator.language].concat(navigator.languages||[]).filter(t=>!!t&&t.length>0).map(t=>this.getSupportedLocaleFromLanguage(t)).find(t=>!!t)||null}getFallbackLocale(){const t="en-US",o=this.getSupportedLocaleFromLanguage(t);if(!o)throw new Error("Unable to find fallback locale.");return o}getSupportedLocaleFromLanguage(t){const o=t.toLowerCase(),s=this.supportedLocales.find(r=>r.code===o);if(s)return s;if(o.includes("-")){const r=t.toLowerCase()+"-",i=this.supportedLocales.find(n=>n.code.startsWith(r));if(i)return i}return null}}const b=new ns;k.define("sl-icon");const as=$`
    @media (prefers-color-scheme: light) {
        sl-button {
            --background-color: #f9f9f9;
            --hover-bg-color: #eeeeee;
            --border-color: rgba(0, 0, 0, 0.06);
            --icon-color: rgba(0, 0, 0, 0.61);
            --icon-hover-color: rgba(0, 95, 184, 1);
        }
    }
    @media (prefers-color-scheme: dark) {
        sl-button {
            --background-color: #2c2c2c;
            --hover-bg-color: #1c1c1c;
            --border-color: rgba(255, 255, 255, 0.09);
            --icon-color: rgba(255, 255, 255, 0.79);
            --icon-hover-color: rgba(96, 205, 255, 1);
        }
    }
    :host {
        --scroll-btn-size: 40px;
        position: absolute;
        transition: opacity var(--sl-transition-medium) ease-out;
        z-index: 1;
    }
    :host([direction="left"]) {
        left: calc(var(--scroll-btn-size) / -2);
        top: calc(50% - (var(--scroll-btn-size) / 2));
    }

    :host([direction="right"]) {
        right: calc((var(--scroll-btn-size) / 2) * -1);
        top: calc(50% - (var(--scroll-btn-size) / 2));
    }

    /** The scrolling icons should be larger and have some padding and margin. */
    sl-icon {
        color: var(--icon-color);
        position: absolute;
        inset: 0;
        margin: auto;
    }
    sl-button:hover sl-icon {
        color: var(--icon-hover-color);
    }

    /** Style the actual button content to have our fixed size and some shadow */
    sl-button::part(base) {
        width: var(--scroll-btn-size);
        height: var(--scroll-btn-size);
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
        background-color: var(--background-color);
        border: 1px solid var(--border-color);
        transition: background-color var(--sl-transition-fast) ease-out;
    }

    sl-button:hover::part(base) {
        background-color: var(--hover-bg-color);
    }
`;var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,Be=(e,t,o,s)=>{for(var r=s>1?void 0:s?cs(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&ls(t,o,r),r};let gt=class extends S{constructor(){super(),this.direction="left"}render(){let e="Common.ScrollLeft.ButtonTitle",t="chevron-left";return this.direction==="right"&&(e="Common.ScrollRight.ButtonTitle",t="chevron-right"),this.direction==="top"&&(e="Common.ScrollToTop.ButtonTitle",t="arrow-up-short"),m`
            <sl-button
                variant="default"
                part="base"
                circle
                title=${b.get(e)}
                aria-label="${b.get(e)}"
            >
                <sl-icon name="${t}" label="${b.getFormatted(e)}" aria-hidden="true" part="icon"></sl-icon>
            </sl-button>
        `}};gt.styles=[Bt,as];Be([p({reflect:!0})],gt.prototype,"direction",2);gt=Be([wt("scroll-button")],gt);var ds=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,_t=(e,t,o,s)=>{for(var r=s>1?void 0:s?hs(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&ds(t,o,r),r};let W=class extends S{constructor(){super(),this.isVisible=!1,this.isShow=!1,this.pageScrollingListener=()=>this.listenPageScrolling()}connectedCallback(){super.connectedCallback(),document.addEventListener("toggleScrollToTopButton",this.scrollToTopButtonVisibility),window.addEventListener("scroll",this.pageScrollingListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("toggleScrollToTopButton",this.scrollToTopButtonVisibility),window.removeEventListener("scroll",this.pageScrollingListener)}listenPageScrolling(){window.requestAnimationFrame(()=>{const e=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop/e>.15?this.isShow=!0:this.isShow=!1})}scrollToTopButtonVisibility(e){this.isVisible=e.detail.isVisible}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}render(){const e=this.isVisible?"visible":"",t=this.isShow?"show":"";return m`    
            <scroll-button
                class="scroll-to-top-button ${e} ${t}"
                direction="top"
                @click="${this.scrollToTop}"
            ></scroll-button>
        `}};W.styles=[Bt,Uo];_t([F()],W.prototype,"isVisible",2);_t([F()],W.prototype,"isShow",2);_t([po({passive:!0})],W.prototype,"listenPageScrolling",1);W=_t([wt("scroll-to-top-button")],W);const us={type:"wide-card","num-xxl":4,"num-xl":3,"num-lg":2,"num-md":2,"num-sm":1,"num-xs":1},ps={type:"square-and-tall-card","num-xxl":8,"num-xl":6,"num-lg":5,"num-md":4,"num-sm":3,"num-xs":3},ms={type:"tall-tile-card","num-xxl":4,"num-xl":2,"num-lg":2,"num-md":2,"num-sm":1,"num-xs":1},gs={type:"offer-card","num-xl":5,"num-lg":4,"num-md":3,"num-sm":2,"num-xs":1},fs={type:"has-bg-collection-card","num-xxl":5,"num-xl":4,"num-lg":3,"num-md":2},bs={type:"square-details-card","num-xl":4,"num-lg":3,"num-md":2,"num-sm":1},vs={type:"collection-group","num-xxl":4,"num-xl":3,"num-lg":2,"num-sm":1},ws={type:"wide-details-card","num-xxl":4,"num-xl":3,"num-lg":2,"num-sm":1},ys={type:"ranked-card","num-xl":3,"num-lg":3,"num-md":3,"num-sm":2,"num-xs":1},_s={type:"related-products","num-xxl":5,"num-xl":4,"num-lg":4,"num-md":3,"num-sm":2,"num-xs":2},$s={type:"recommend-card","num-lg":2,"num-sm":1},Cs={type:"footer-column","num-xxl":4,"num-xl":4,"num-lg":3,"num-sm":2,"num-xs":1},He=[us,ps,ms,gs,fs,bs,vs,ws,ys,_s,$s,Cs];function xs(){const e=He.reduce((t,o)=>{const s=o.type;let r="",i=!0;for(const n in o)n!=="type"&&(i&&(r+=`--${s}-num: ${o[n]};`,i=!1),r+=`--${s}-${n}: ${o[n]};`);return t+r},"");return bt(e)}function B(e){const t=He.reduce((o,s)=>{const r=s.type;for(const i in s)if(i.includes(`-${e}`))return o+`--${r}-num: ${s[i]};`;return o},"");return bt(t)}const ks=$`
    :host {
        --responsive-container-width: 100%;

        --collection-detail-width-percent-md: 50%;
        --collection-detail-width-percent: 36%;

        --collection-of-tall-max-height-xl: 680px;
        --collection-of-tall-max-height-lg: 660px;
        --collection-of-tall-max-height-md: 800px;
        --collection-of-tall-max-height: 850px;

        /** for tall tile group */
        --tall-tile-group-max-width-lg: 370px;
        --tall-tile-group-max-width-md: 230px;
        --tall-tile-group-max-width-xs: 150px;
        --tall-tile-group-max-width: var(--tall-tile-group-max-width-lg);

        ${xs()}

        /**
         * Default exceeds BkreakpointMax.xxl is the first index value that cardsConfig sorts by except key is type
         * We can override exceeding the size of BkreakpointMax.xxl
         */
        --has-bg-collection-card-num: 6;
        --related-products-num: 6;
    }



    ${v(y.xxl)} {
        :host {
            ${B("xxl")}
        }
    }

    ${v(y.xl)} {
        :host {
            --collection-of-tall-max-height: var(--collection-of-tall-max-height-xl);
            ${B("xl")}
        }
    }

    ${v(y.lg)} {
        :host {
            --collection-of-tall-max-height: var(--collection-of-tall-max-height-lg);
            ${B("lg")}
        }
    }

    ${v(y.md)} {
        :host {
            --collection-detail-width-percent: var(--collection-detail-width-percent-md);
            --collection-of-tall-max-height: var(--collection-of-tall-max-height-md);
            ${B("md")}
        }
    }

    ${v(y.sm)} {
        :host {
            ${B("sm")}
        }
    }

    ${v(y.xs)} {
        :host {
            ${B("xs")}
        }
    }

    ${v(y.xs-100)} {
        :host {
            --square-and-tall-card-num: 2;
        }
    }

    ${v(y.xs-250)} {
        :host {
            --square-and-tall-card-num: 1;
        }
    }
`,As=$`
    :host {
        /**
         * The value of layout-padding will be different for different screen sizes
         * To prevent scroll bars when displaying scroll-btns in a collection
         */
        --layout-padding: 100px;
        --layout-width: calc(100% - var(--layout-padding));
    }

    ${v(Ie.lg)} {
        :host {
            --layout-padding: calc(100px + 2 * var(--sl-spacing-3x-large));
        }
    }

    ${v(y.xs)} {
        :host {
            --layout-padding: 20px;
        }
    }
`,Ps=[ks,As],Ss=$`
    :host {
        --max-width: 1996px;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .layout-container {
        height: 100%;
        display: flex;
        justify-content: center;
        flex: 1;
    }

    ${Te()} {
        app-header {
            position: sticky!important;
        }
    }

    main {
        margin-top: var(--sl-spacing-small);
        width: var(--layout-width);
        max-width: var(--max-width);
        z-index: 1;
    }

    #routerOutlet {
        /** Extracting this element separately to animate causes a backward flickering issue */
        /** view-transition-name: page-nav; */
        padding: 0;
    }


    ${v(y.sm+70)} {
        .layout-container {
            padding-top: var(--sl-spacing-x-large);
        }
    }

    #routerOutlet > * {
        width: 100% !important;
    }

    app-header {
        /** Exclude the app header from view transitions. Otherwise we can get a slight jarring effect
            as the header size slightly changes with addition/removal of scrollbar on body. */
        view-transition-name: main-header;
        contain: layout;
    }

    /** The shimmer styles for the header */
    .header-shimmer {
        width: 100%;
        --shimmer-height: 84px;
        --shimmer-border-radius: 0;
        position: sticky;
        top: 0;
        background-color: var(--theme-header-background-color);
        z-index: var(--sl-z-index-tooltip);        

        ${v(y.md)} {
            & {
                --shimmer-height: 132px;
            }
        }

        ${v(y.xs)} {
            & {
                --shimmer-height: 120px;
            }
        }
    }

    .footer-shimmer {
        --shimmer-height: 495px;
        --shimmer-padding: 40px;
        --shimmer-border-radius: 0;

        ${v(y.lg)} {
            & {
                --shimmer-height: 788px;
            }
        }

        ${v(y.md)} {
            & {
                --shimmer-height: 828px;
            }
        }

        ${v(y.sm)} {
            & {
                --shimmer-height: 842px;
            }
        }

        ${v(y.xs)} {
            & {
                --shimmer-height: 1237px;
            }
        }
    }
`;var Es=(e=>(e.Apps="Apps",e.Movies="Movies",e.Games="Games",e.TV="TV",e.Passes="Passes",e))(Es||{}),Ge=(e=>(e.All="all",e.Apps="apps",e.Games="games",e.Movies="movies",e.TV="tv",e.Devices="devices",e.Fonts="fonts",e.Themes="themes",e.Memberships="memberships",e))(Ge||{}),Ls=(e=>(e.All="all",e.Three="TO3",e.Four="TO4",e.Five="TO5",e.Six="TO6",e.Seven="TO7",e.Eight="TO8",e.Nine="TO9",e.Ten="TO10",e.Eleven="TO11",e.Twelve="TO12",e.Thirteen="TO13",e.Fourteen="TO14",e.Fifteen="TO15",e.Sixteen="TO16",e.Seventeen="TO17",e))(Ls||{}),Rs=(e=>(e.All="all",e.BooksAndReference="Books & reference",e.Business="Business",e.DeveloperTools="Developer tools",e.Education="Education",e.Entertainment="Entertainment",e.FoodAndDining="Food & dining",e.GovernmentAndPolitics="Government & politics",e.HealthAndFitness="Health & fitness",e.KidsAndFamily="Kids & family",e.Lifestyle="Lifestyle",e.Medical="Medical",e.MultimediaDesign="Multimedia design",e.Music="Music",e.NavigationAndMaps="Navigation & maps",e.NewsAndWeather="News & weather",e.PersonalFinance="Personal finance",e.Personalization="Personalization",e.PhotoAndVideo="Photo & video",e.Productivity="Productivity",e.Security="Security",e.Shopping="Shopping",e.Social="Social",e.Sports="Sports",e.Travel="Travel",e.UtilitiesAndTools="Utilities & tools",e.ActionAndAdventure="Action & adventure",e.CardAndBoard="Card & board",e.Casino="Casino",e.Classics="Classics",e.Companion="Companion",e.Educational="Educational",e.FamilyAndKids="Family & kids",e.Fighting="Fighting",e.MultiplayerOnlineBattleArena="Multi-player Online Battle Arena",e.Other="Other",e.Platformer="Platformer",e.PuzzleAndTrivia="Puzzle & trivia",e.RacingAndFlying="Racing & flying",e.Roleplaying="Role playing",e.Shooter="Shooter",e.Simulation="Simulation",e.Strategy="Strategy",e.Tools="Tools",e.Video="Video",e.Word="Word",e.ActionAdventure="Action/Adventure",e.Animation="Animation",e.Anime="Anime",e.Comedy="Comedy",e.Documentary="Documentary",e.Family="Family",e.ForeignIndependent="Foreign/Independent",e.Horror="Horror",e.Romance="Romance",e.RomanticComedy="Romantic Comedy",e.SciFiFantasy="Sci-Fi/Fantasy",e.ThrillerMystery="Thriller/Mystery",e.TVMovies="TV Movies",e.DocumentaryBio="Documentary/Bio",e.FamilyChildren="Family/Children",e.Movies="Movies",e.News="News",e.RealityTV="Reality TV",e.Soap="Soap",e.Accessories="Accessories",e.MicrosoftSurface="Microsoft Surface",e.PCsAndTablets="PCs & tablets",e.VirtualReality="Virtual Reality",e.WindowsPhone="Windows Phone",e.Xbox="Xbox",e.ForHomeAndStudents="HomeStudents",e.ForMac="Mac",e.ForSmallBusiness="SmallBusiness",e.Office365="Office365",e.Office365Renewal="Office365Renewal",e.OfficeApps="OfficeApps",e.XboxLive="XboxLive",e))(Rs||{}),Is=(e=>(e.All="all",e.Free="Free",e.Paid="Paid",e.Sale="Sale",e))(Is||{}),Ts=(e=>(e.All="all",e.GamePass="GamePass",e))(Ts||{}),Ms=(e=>(e[e.MostRecent=1]="MostRecent",e[e.HighestRated=3]="HighestRated",e[e.LowestRated=4]="LowestRated",e[e.MostHelpful=5]="MostHelpful",e))(Ms||{}),Os=(e=>(e.HomeSpotlight="Home/Spotlight/Home_Spotlight_T1_T2",e.AppsSpotlight="Apps/Spotlight/Apps_Spotlight_T1_T2",e.GamingSpotlight="Gaming/Spotlight/Gaming_Spotlight_T1_T2",e.MoviesSpotlight="Movies_TV/Spotlight/Movies_TV_Spotlight_Mrkt_V2",e.MoviesSpotlightUS="Movies_TV/Spotlight/v2_Movies_TV_Spotlight_en-US",e.TopFree="TopFree",e.TopPaid="TopPaid",e.TopDeals="Deal",e.GetStarted="GettingStartedApps",e.EssentialApps="MerchandiserContent/Apps/Primary/EssentialApps/_EssentialApps",e.ExploreAWorldOfMusic="MerchandiserContent/Apps/Primary/ExploreAWorldOfMusic/_ExploreAWorldOfMusic",e.InlineSpotlight="Home/InlineSpotlight/Home_InlineSpotlight1_T1_T2",e.TopGrossing="TopGrossing",e.CasualPCGames="MerchandiserContent/Games/Primary/CasualPCGames/_CasualPCGames",e.NewMovies="video.newreleases.movies",e.Sale499Movies="video.collections.sale_499specials",e.HarryPotterMovies="video.collections.promo_harrypotter",e.NewAndRising="NewAndRising",e.NewAndNotableGames="MerchandiserContent/Games/Primary/NewAndNotablePCGames/_NewAndNotablePCGames",e.PuzzleGames="MerchandiserContent/Games/Primary/PuzzlePCGames/_PuzzlePCGames",e.WorldBuildingPCGames="MerchandiserContent/Games/Primary/BuildYourOwnWorldPCGames/_BuildYourOwnWorldPCGames",e.RacingGames="MerchandiserContent/Games/Primary/RacingGames/_RacingGames",e.ClassicGames="MerchandiserContent/Games/Primary/ClassicPCGames/_ClassicPCGames",e.GamesForKids="MerchandiserContent/Games/Primary/PCGamesForKids/_PCGamesForKids",e.CorePCGames="MerchandiserContent/Games/Primary/CorePCGames/_CorePCGames",e.AppsForGamers="MerchandiserContent/Apps/Primary/AppsForGamers/_AppsForGamers",e.WeeklyGameDeals="MerchandiserContent/Games/Primary/WklyPCGamesDeals/_WklyPCGamesDeals",e.BestProductivityApps="MerchandiserContent/Apps/Primary/BestProductivityApps/_BestProductivityApps",e.BestCreativityApps="MerchandiserContent/Apps/Primary/BestCreativityApps/_BestCreativityApps",e.BestPhotoAndVideoEditingApps="MerchandiserContent/Apps/Primary/BestPhotoAndVideoEditingApps/_BestPhotoAndVideoEditingApps",e.UtilityApps="MerchandiserContent/Apps/Primary/MostPopularUtilityApps/_MostPopularUtilityApps",e.TopRentedMovies="video.toprented.movies",e.FeaturedMovies="video.featured.movies",e.TopSellingTvShows="video.topselling.tv",e.TopSellingMovies="video.topselling.movies",e.NewTvShows="video.newreleases.tv",e.DisneyMovies="video.collections.promo_disneymovies",e.PrimeVideoOriginals="MerchandiserContent/MMTV/Exp/MMTVUMSPrimeVideo/_MMTVUMSPrimeVideo",e.MoviePromoBundles="video.collections.promo_bundles",e.EverythingMarvel="video.collections.promo_marvelmovies",e.HomeCollectionGroup="MerchandiserContent/HomePage/Collection C - Home Page/CollectionCHomePage",e.AppsCollectionGroup="MerchandiserContent/Apps/Collection-C/CollectionCAppsPage",e.GamingCollectionGroup="MerchandiserContent/Games/Collection-C/CollectionCGamesPage",e.MoviesCollectionGroup="MerchandiserContent/M-TV/Collection-C/List_of_Collections/MTV_Page_List of Collections_WW",e.BestVideoStreamingApps="MerchandiserContent/Apps/Primary/BestVideoStreamingApps/_BestVideoStreamingApps",e.SocialNetworkingApps="MerchandiserContent/Apps/Primary/ConnectAndStayInformed/_ConnectAndStayInformed",e))(Os||{}),zs=(e=>(e.Home="Home/Spotlight/Home_Spotlight_T1_T2",e.Apps="Apps/Spotlight/Apps_Spotlight_T1_T2",e.Gaming="Gaming/Spotlight/Gaming_Spotlight_T1_T2",e.Movies="Movies_TV/Spotlight/Movies_TV_Spotlight_Mrkt_V2",e.MoviesUS="Movies_TV/Spotlight/v2_Movies_TV_Spotlight_en-US",e))(zs||{}),z=(e=>(e.BadRequest="BadRequest",e.InvalidProductId="InvalidProductId",e.NotFound="NotFound",e.ProductNotFound="ProductNotFound",e.CollectionNotFound="CollectionNotFound",e.ProductDelisted="ProductDelisted",e.UnhandledError="UnhandledError",e))(z||{});const jt=Symbol.for("app-tools::log::1.x");globalThis[jt]={setDebug:Us,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Us(e){globalThis[jt].debug=!!e}function Ns(e,t){globalThis[jt].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function Vs(e){return(t,o)=>{Ns(`${e}: ${t}`,o)}}const E=Vs("router");class Ds extends Event{constructor(t){super("route-changed"),this.context=t}}class Fs extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(o=>({...o,urlPattern:new URLPattern({pathname:o.path,baseURL:window.location.href,search:"*",hash:"*"})})),E("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return E(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const o of this.routes){const s=o.urlPattern.exec(t);if(s){const{title:r}=o,i=Object.fromEntries(new URLSearchParams(t.search)),n=s?.pathname?.groups??{};return this.context={url:t,title:typeof r=="function"?r({params:n,query:i,url:t}):r,params:n,query:i},o}}return E(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Ds(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const o=t.composedPath().find(i=>i.tagName==="A");if(!o||!o.href)return;const s=new URL(o.href);if(this.url.href===s.href||s.host!==window.location.host||o.hasAttribute("download")||o.href.includes("mailto:"))return;const r=o.getAttribute("target");r&&r!==""&&r!=="_self"||(t.preventDefault(),this.navigate(s))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,o={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let s=this._matchRoute(t)||this._matchRoute(this.fallback);E(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let r=this._collectPlugins(s);for(const i of r)try{const n=await i?.shouldNavigate?.(this.context);n&&(await n.condition()||(t=new URL(n.redirect,this.baseUrl),s=this._matchRoute(t)||this._matchRoute(this.fallback),r=this._collectPlugins(s),E("Redirecting",{context:this.context,route:this.route})))}catch(n){throw E(`Plugin "${i.name}" error on shouldNavigate hook`,n),n}if(this.route=s,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const i of r)try{await i?.beforeNavigation?.(this.context)}catch(n){throw E(`Plugin "${i.name}" error on beforeNavigation hook`,n),n}o?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):o.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const i of r)try{await i?.afterNavigation?.(this.context)}catch(n){throw E(`Plugin "${i.name}" error on afterNavigation hook`,n),n}}}function Bs(e){return{name:"redirect",shouldNavigate:t=>({condition:()=>!1,redirect:typeof e=="function"?e(t):e})}}class Hs{async getJson(t,o){const s=await this.getResponse(t,o);return s.status===204?null:await s.json()}async getString(t,o){return await(await this.getResponse(t,o)).text()}async post(t,o){const s=await fetch(t,{method:"POST",body:o?JSON.stringify(o):void 0});if(!s.ok)throw new ht("HTTP POST resulted in non-successful status code "+s.status);return await s.json()}async postFormData(t,o){const s=await fetch(t,{method:"POST",body:o});if(!s.ok)throw new ht("HTTP POST resulted in non-successful status code "+s.status)}async getResponse(t,o){let s=t;if(o){const i=new URLSearchParams;Object.entries(o).filter(n=>n[1]!==void 0&&n[1]!==null).forEach(n=>i.append(n[0],n[1]===null?"":n[1])),s+="?"+i.toString()}const r=await fetch(s);if(!r.ok)throw r.status===404||r.status===410?new Gs("HTTP GET resulted in 404"):new ht("HTTP GET resulted in non-successful status code "+r.status);return r}}class ht extends Error{constructor(t="",o){super(t,o)}}class Gs extends Error{constructor(t="",o){super(t,o)}}class js extends Hs{constructor(t){super(),this.apiUrl=t,this.markets=new Map,this.cachedMarket=null}get market(){return this.cachedMarket?.market||""}getAutoSuggestions(t){const o="/api/products/getAutosuggestions",s={prefix:t};return this.getJsonWithMarketLocale(o,s)}search(t,o,s,r,i,n,a){const l="/api/products/search",c={query:t,mediaType:o,age:s,price:r,category:i,subscription:n,cursor:a};return this.getJsonWithMarketLocale(l,c)}searchByPublisher(t,o){const s="/api/Products/SearchByPublisherName",r={publisherName:t,cursor:o};return this.getJsonWithMarketLocale(s,r)}searchFiltered(t){const o="/api/Products/GetFilteredProducts",s={category:t};return this.getJsonWithMarketLocale(o,s)}getPromotionProducts(t,o,s){const r=this.getViewModel();if(r&&r.spotlight?.title===t)return Promise.resolve(r.spotlight);const i="/api/reco/getPromotionProducts",n={collectionName:t,pgNo:o||1,noItems:s||24};return this.getJsonWithMarketLocale(i,n)}getComputedProductsList(t,o,s,r,i,n,a,l,c){const h="/api/Reco/GetComputedProductsList",d={listName:t,pgNo:o||1,noItems:s||25,filteredCategories:r||"AllProducts",mediaType:i,discountFilter:n,subscriptionFilter:a,numPlayersFilter:l,subcategoryFilter:c};return this.getJsonWithMarketLocale(h,d)}getRelatedProductsList(t,o,s,r,i){const n=`/api/Reco/GetRelatedProductsList/${t}`,a={noItems:s,pgNo:o||1,productType:r,filteredCategories:i};return this.getJsonWithMarketLocale(n,a)}getMerchandiserContentProductList(t,o,s,r){const i="/api/Reco/GetMerchandiserContentProductList",n={collectionName:t,pgNo:o||1,noItems:s||22,filteredCategories:r||"AllProducts"};return this.getJsonWithMarketLocale(i,n)}getListOfCollections(t,o,s){const r="/api/Reco/GetListOfCollections",i={collectionName:t,pgNo:o||1,noItems:s||25};return this.getJsonWithMarketLocale(r,i)}getMovieProductsList(t,o,s,r,i,n){const a="/api/Reco/GetMovieProductsList",l={listName:t,pgNo:o||1,noItems:s||25,mediaType:"movies",filteredCategories:r||"AllProducts",...i!==void 0&&{networkFilter:i},...n!==void 0&&{studioFilter:n}};return this.getJsonWithMarketLocale(a,l)}getMovieSearchProductsList(t,o,s,r,i){const n="/api/Reco/GetMovieSearchProductsList",a={listName:t,pgNo:o||1,noItems:s||25,filteredCategories:r||"all",studio:i||"all",mediaType:"movies"};return this.getJsonWithMarketLocale(n,a)}getCollectionFilters(t,o){const s="/api/Reco/GetCollectionFiltersList",r={listName:t,mediaType:o||Ge.Apps};return this.getJsonWithMarketLocale(s,r)}getMovieGenresForCurrentMarket(){const t="/api/pages/getMovieGenresByMarket";return this.getJsonWithMarketLocale(t)}getFeatureFlags(t){return this.getJsonWithMarketLocale("/api/settings/flags",{sessionId:t})}getProductDetails(t,o=!1){const s=`/api/ProductsDetails/GetProductDetailsById/${t}`;return this.getJsonWithMarketLocale(s,{includeStructured:o})}getPdpPage(t){const o=this.getViewModel();if(o?.productDetails&&t.localeCompare(o.productDetails.productId,void 0,{sensitivity:"base"})===0)return Promise.resolve(o.productDetails);const s="/api/pages/pdp",r={productId:t};return this.getJsonWithMarketLocale(s,r)}getChrome(){const t=this.getViewModel();if(t?.chrome)return Promise.resolve(t.chrome);const o="/api/pages/chrome";return this.getJsonWithMarketLocale(o)}getPageCollections(t){const o=this.getViewModel();if(o?.collectionIds&&o.pageName===t)return Promise.resolve(o.collectionIds);const s="/api/pages/collections",r={pageName:t};return this.getJsonWithMarketLocale(s,r)}getPromoProductDetails(t){const o=`/api/ProductsDetails/GetPromoProductDetailsById/${t}`;return this.getJsonWithMarketLocale(o)}getMovieContributorList(t){const o=`/api/ProductsDetails/GetMovieContributorList/${t}`;return this.getJsonWithMarketLocale(o)}getTVEpisodesList(t){const o=`/api/ProductsDetails/GetTVEpisodesList/${t}`;return this.getJsonWithMarketLocale(o)}getReviewsSummary(t,o){const s=`/api/Products/GetReviewsSummary/${t}`;return this.getJsonWithMarketLocale(s,{catalogSource:o})}getReviews(t,o,s,r){const i=`/api/products/getReviews/${t}`,n={orderBy:o,pgNo:s,noItems:r};return this.getJsonWithMarketLocale(i,n)}async getCachedMarket(t){const o=this.getViewModel();if(o?.marketDetails)return this.cachedMarket=o.marketDetails,o.marketDetails;const s=t??"default";let r=this.markets.get(s);if(!r){const i={gl:new URLSearchParams(location.search||"").get("gl")};r=this.getJson("/api/settings/market",i),this.markets.set(s,r);const n=await r;t||(this.cachedMarket=n)}return r}getJson(t,o){const s=this.apiUrl+t;return super.getJson(s,o)}async getJsonWithMarketLocale(t,o,s,r){const n={gl:(await this.getCachedMarket(r)).market,hl:s??b.getLocaleName(),...o||{}};return this.getJson(t,n)}getViewModel(){return window.storeViewModel}}const M=new js("");class pe{static setCookie(t,o,s){document.cookie=t+`= ${o}; expires=${s.toUTCString()}; path=/`}static getCookie(t){return new RegExp(`${t}=([^;]+)`).exec(document.cookie)?.[1]}static deleteCookie(t){const o=new Date;o.setTime(o.getTime()+-1*24*60*60*1e3),document.cookie=t+`=; expires=${o.toUTCString()}; path=/`}}class Ws{constructor(){this.sessionExpiresKey="exp-session-expires",this.sessionIdKey="exp-session-id",this.cachedFlags=null}async getFlags(){return this.cachedFlags||(this.cachedFlags=await M.getFeatureFlags(this.sessionId),this.restoreSession(this.cachedFlags)),this.cachedFlags}restoreSession(t){this.sessionExpired&&this.newSession(t),this.setSessionCookies()}setSessionCookies(){this.sessionId&&(pe.getCookie(this.sessionIdKey)||pe.setCookie(this.sessionIdKey,this.sessionId,this.sessionExpireDate))}newSession(t){const o=new Date;o.setTime(o.getTime()+t.sessionDuration),localStorage.setItem(this.sessionIdKey,t.sessionId),localStorage.setItem(this.sessionExpiresKey,o.toUTCString())}get sessionExpired(){return new Date>=this.sessionExpireDate}get sessionId(){return localStorage.getItem(this.sessionIdKey)||""}get sessionExpireDate(){const t=localStorage.getItem(this.sessionExpiresKey);return t?new Date(t):new Date}}const je=new Ws;String.prototype.capitalize=function(){return this?this.charAt(0).toUpperCase()+this.slice(1):this};String.prototype.equalsIgnoreCase=function(e){return this?.toLowerCase()===e?.toLowerCase()};String.prototype.toEnum=function(e){for(let t of[this.toLowerCase(),this.toLowerCase().capitalize(),this.toUpperCase()]){let o=e[t];if(o)return o}throw new Error(`Can't cast value ${this} to enum ${typeof e}`)};class qs{constructor(){this.scrollEndHandler=()=>this.scrollEnded(),this.desiredScrollPosition=null,this.desiredScrollBehavior="smooth",this.resizeObserver=null,this.resolver=null,this.periodicCheckHandle=0,this.timeoutHandle=0}scrollTo(t,o="smooth",s=1e3){if(this.resolver)throw new Error("Scroll operation already in progress. Call .disconnect() before starting a new scroll operation.");return new Promise(r=>{window.addEventListener("scrollend",this.scrollEndHandler);const i=To(()=>this.pageResized(),200);this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(document.body),this.periodicCheckHandle=setInterval(()=>this.periodicCheckForDesiredPosition(),500),this.timeoutHandle=setTimeout(()=>this.timeoutExpired(),s),this.desiredScrollPosition=t,this.desiredScrollBehavior=o,this.resolver=r,this.scrollToTarget()})}disconnect(){window.removeEventListener("scrollend",this.scrollEndHandler),this.desiredScrollPosition=null,this.resizeObserver?.disconnect(),clearInterval(this.periodicCheckHandle),clearTimeout(this.timeoutHandle),this.resolver?.(window.scrollY),this.resolver=null}scrollEnded(){this.desiredScrollPosition===null||window.scrollY===this.desiredScrollPosition?this.disconnect():window.scrollTo({top:this.desiredScrollPosition,behavior:this.desiredScrollBehavior})}pageResized(){this.desiredScrollPosition!==null&&window.scrollY!==this.desiredScrollPosition&&this.scrollToTarget()}periodicCheckForDesiredPosition(){this.desiredScrollPosition!==null&&window.scrollY!==this.desiredScrollPosition?this.scrollToTarget():this.disconnect()}timeoutExpired(){this.scrollToTarget(),this.disconnect()}scrollToTarget(){this.desiredScrollPosition!==null&&window.scrollTo({top:this.desiredScrollPosition,behavior:this.desiredScrollBehavior})}}globalThis.URLPattern||await f(()=>import("./index-d961e0b8.js"),[]);class Js{constructor(){this._route=null,this.lastNavigatedProduct=null,this.localeStringsFetch=b.fetch(),this.marketFetch=M.getCachedMarket(),this.router=new Fs({plugins:[new Et(()=>Promise.allSettled([this.localeStringsFetch,this.marketFetch]))],fallback:"/404",routes:[this.createRoute("/home",()=>b.get("NavigationBar.Home"),()=>m`<home-page></home-page>`,()=>f(()=>import("./home-ecb93e4d.js"),["assets/js/home-ecb93e4d.js","assets/js/market-collection-service-a80a5752.js","assets/js/paged-list-5dbf62ed.js"])),this.createRedirect("/","/home",()=>f(()=>import("./home-ecb93e4d.js"),["assets/js/home-ecb93e4d.js","assets/js/market-collection-service-a80a5752.js","assets/js/paged-list-5dbf62ed.js"])),this.createRoute("/apps",()=>b.get("NavigationBar.Apps"),()=>m`<apps-page></apps-page>`,()=>f(()=>import("./apps-b9f608b1.js"),["assets/js/apps-b9f608b1.js","assets/js/paged-list-5dbf62ed.js","assets/js/market-collection-service-a80a5752.js"])),this.createRoute("/games",()=>b.get("NavigationBar.Games"),()=>m`<gaming-page></gaming-page>`,()=>f(()=>import("./gaming-589fd7e3.js"),["assets/js/gaming-589fd7e3.js","assets/js/paged-list-5dbf62ed.js","assets/js/market-collection-service-a80a5752.js"])),this.createRoute("/movies",()=>b.get("NavigationBar.MoviesAndTV"),()=>m`<movies-page></movies-page>`,()=>f(()=>import("./movies-29a45f95.js"),["assets/js/movies-29a45f95.js","assets/js/paged-list-5dbf62ed.js","assets/js/market-collection-service-a80a5752.js"])),this.createRoute("/search",t=>`${decodeURIComponent(t.query?.query||"")}`,t=>m`<search-results-page query="${decodeURIComponent(t.query?.query||"")}"></search-results-page>`,()=>f(()=>import("./search-results-c19c605e.js"),["assets/js/search-results-c19c605e.js","assets/js/repeat-1a78a8d2.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/style-map-a428b004.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/not-found-f0dc2434.js","assets/js/spacing.styles-c42ebb1e.js","assets/js/paged-list-5dbf62ed.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/search/publisher",t=>`${decodeURIComponent(t.query?.name||"")}`,t=>m`<search-results-publisher-page name="${decodeURIComponent(t.query?.name||"")}"></search-results-publisher-page>`,()=>f(()=>import("./search-results-publisher-9fc6a7ea.js"),["assets/js/search-results-publisher-9fc6a7ea.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/paged-list-5dbf62ed.js"])),this.createRoute("/collections/:mediaType/category/:category",t=>`${t.params?.category||""}`,t=>m`<collections-page collection-name="TopFree" collection-type="computed" media-type="${decodeURIComponent(t.params?.mediaType||"")}" category="${decodeURIComponent(t.params?.category||"")}"></collections-page>`,()=>f(()=>import("./collections-a075faf0.js"),["assets/js/collections-a075faf0.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/paged-list-5dbf62ed.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/related/:id",t=>this.lastNavigatedProduct&&t.params?.id===this.lastNavigatedProduct?.productId?b.getFormatted("RelatedProducts.Title",this.lastNavigatedProduct.title):document.title,t=>m`<related-products-page id="${t.params?.id||""}"></related-products-page>`,()=>f(()=>import("./related-products-b26de6e7.js"),["assets/js/related-products-b26de6e7.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/paged-list-5dbf62ed.js"])),this.createRoute("/detail/:id",t=>this.lastNavigatedProduct&&t.params?.id===this.lastNavigatedProduct?.productId?this.lastNavigatedProduct.title:t.query?.name||t.params?.id||"",t=>m`<product-details-page product-id="${t.params?.id||""}" product-name="${decodeURIComponent(t.query?.name||"")}"></product-details-page>`,()=>f(()=>import("./product-details-43d9b0bb.js"),["assets/js/product-details-43d9b0bb.js","assets/js/repeat-1a78a8d2.js","assets/js/product-collection-91cc6b51.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/chunk.OHYIWJSO-d08d8d85.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/chunk.SKOOBYPV-dc2f449b.js","assets/js/platform-2180e403.js","assets/js/paged-list-5dbf62ed.js","assets/js/spacing.styles-c42ebb1e.js"]),[new Ys]),this.createRoute("/404/:itemType?",t=>b.getFormatted(`Error.${t.params?.itemType?.capitalize()||""}NotFound.Title`,t.query?.id||""),t=>m`
                        <not-found-page
                            item-id="${t.query?.id||""}" 
                            item-name="${t.query?.name||""}" 
                            item-type="${t.params?.itemType}">
                        </not-found-page>`,()=>f(()=>import("./not-found-f0dc2434.js"),["assets/js/not-found-f0dc2434.js","assets/js/spacing.styles-c42ebb1e.js"])),this.createRoute("/collections/computed/:mediaType(apps|games|movies|tv)?/:collectionName+",t=>t.params?.collectionName||"",t=>m`<collections-page collection-name="${decodeURIComponent(t.params?.collectionName||"")}" collection-type="computed" media-type="${t.params?.mediaType}"></collections-page>`,()=>f(()=>import("./collections-a075faf0.js"),["assets/js/collections-a075faf0.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/paged-list-5dbf62ed.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/collections/browse/:collectionName+",t=>decodeURIComponent(t.params?.collectionName||""),t=>m`<collections-browse collection-name="${decodeURIComponent(t.params?.collectionName||"")}"></collections-browse>`,()=>f(()=>import("./collections-browse-77fb715d.js"),["assets/js/collections-browse-77fb715d.js","assets/js/collection-group-f391d218.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/collections-a075faf0.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/paged-list-5dbf62ed.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/collections/movies/:collectionName+",t=>t.params?.collectionName||"",t=>m`<collections-page collection-name="${decodeURIComponent(t.params?.collectionName||"")}" collection-type="movies" category="${t.query?.category||""}" media-type="movies"></collections-page>`,()=>f(()=>import("./collections-a075faf0.js"),["assets/js/collections-a075faf0.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/paged-list-5dbf62ed.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/collections/games/category/:category",()=>"",t=>m`<collections-page collection-name="TopPaid" collection-type="computed" media-type="games" category="${decodeURIComponent(t.params?.category||"")}"></collections-page>`,()=>f(()=>import("./collections-a075faf0.js"),["assets/js/collections-a075faf0.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/paged-list-5dbf62ed.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/collections/category/:category",()=>"",t=>m`<collections-page collection-name="TopFree" collection-type="computed" media-type="apps" category="${decodeURIComponent(t.params?.category||"")}"></collections-page>`,()=>f(()=>import("./collections-a075faf0.js"),["assets/js/collections-a075faf0.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/paged-list-5dbf62ed.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/collections/:collectionName+",t=>t.params?.collectionName||"",t=>m`<collections-page collection-name="${t.params?.collectionName||""}" collection-type="curated"></collections-page>`,()=>f(()=>import("./collections-a075faf0.js"),["assets/js/collections-a075faf0.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/paged-list-5dbf62ed.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d28887f8.js"])),this.createRoute("/badge/:productId?",()=>b.get("BadgePage.Title"),t=>m`<app-badge-page product-name="${decodeURIComponent(t.query?.name||"")}" product-id="${t.params?.productId||""}"></app-badge-page>`,()=>f(()=>import("./app-badge-e5e4591f.js"),["assets/js/app-badge-e5e4591f.js","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/alert-service-1970f04a.js"])),this.createRoute("/editorial",t=>`${t.query?.title||""}`,t=>m`<editorial-page uri="${decodeURIComponent(t.query?.url||"")}" title="${t.query?.title||""}"></editorial-page>`,()=>f(()=>import("./editorial-3818b6af.js"),["assets/js/editorial-3818b6af.js","assets/js/chunk.OHYIWJSO-d08d8d85.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js"])),this.createRoute("/error/:code?",t=>b.getFormatted(`Error.${t.params?.code||z.UnhandledError}.Title`,t.query?.id||""),t=>m`
                        <error-page item-id="${t.query?.id||""}" 
                                    item-name="${t.query?.name||""}"
                                    error-code="${t.params?.code||z.UnhandledError}">
                        </error-page>`,()=>f(()=>import("./error-2ee5dbc9.js"),["assets/js/error-2ee5dbc9.js","assets/js/spacing.styles-c42ebb1e.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js"])),...this.createDevRoutes()]}),window.addEventListener("popstate",()=>this.navigatedBackwards()),this.addEventListener("route-changed",t=>this.routeChanged(t)),window.history.scrollRestoration="manual"}createDevRoutes(){return[]}get route(){return this._route}addEventListener(t,o){this.router.addEventListener(t,o)}removeEventListener(t,o){this.router.removeEventListener(t,o)}renderRoute(){return this.router.render()}navigate(t,o){if(o)this.router.navigate(t+"?"+o.toString());else{const s=new URLSearchParams(t.split("?")[1]);!s.has("hl")||!s.has("gl")?this.router.navigate(t+this.router.context.url.search):this.router.navigate(t)}}getLocalizedUrl(t,o){const s=new URL(t,window.location.origin);s.searchParams.has("hl")||s.searchParams.append("hl",b.getLocaleName()),!s.searchParams.has("gl")&&M.market&&s.searchParams.append("gl",M.market);for(const[r,i]of o?.entries()||[])s.searchParams.append(r,i);return s.pathname+s.search}createRoute(t,o,s,r,i=[]){return i.push(new Et(()=>r())),i.push(new Ks(o)),i.push(new Qs),{path:t,title:"",render:n=>s(n),plugins:i}}createRedirect(t,o,s,...r){return{title:"",path:t,plugins:[Bs(o),new Et(()=>s()),...r]}}navigatedBackwards(){const t="back-transition";document.documentElement.classList.add(t),window.history.scrollRestoration="manual"}routeChanged(t){t.previous=this._route;const o=!t.previous&&performance.getEntriesByType("navigation").some(i=>i instanceof PerformanceNavigationTiming&&i.type==="back_forward");t.isBackForwardNavigation=document.documentElement.classList.contains("back-transition")||o,t.context.data=t.context.data||{},t.context.data.isBackForwardNavigation=t.isBackForwardNavigation;let s=!1,r=!1;t.context.url.searchParams.forEach((i,n)=>{const a=n.toLowerCase();a==="hl"?(a!==n&&(t.context.url.searchParams.delete(n),t.context.url.searchParams.set("hl",i)),s=!0):a==="gl"&&(a!==n&&(t.context.url.searchParams.delete(n),t.context.url.searchParams.set("gl",i)),r=!0)}),this._route=t.context,(!s||!r)&&(s||t.context.url.searchParams.set("hl",b.getLocaleName()),!r&&M.market&&t.context.url.searchParams.set("gl",M.market),window.history.replaceState(null,"",t.context.url)),je.setSessionCookies(),t.context.url.pathname==="/home"&&(document.title=b.getFormatted("Common.PageTitle",b.get("NavigationBar.Home"))),j.trackPageView(t.context.url,t.previous?.url,t.context.params)}}class Et{constructor(t){this.fn=t}beforeNavigation(){return this.fn()}}class Ks{constructor(t){this.pageNameGetter=t}beforeNavigation(t){const o=this.pageNameGetter(t);o?t.title=b.getFormatted("Common.PageTitle",o):t.title=b.get("Common.AppName")}}class Ys{shouldNavigate(t){const o=window.storeViewModel;return{condition:()=>!(o.errorCode&&o.itemId===t.params?.id),redirect:this.getRedirectUrl(o)}}getRedirectUrl(t){const o=new URL("/",window.location.origin);return t.itemId&&o.searchParams.set("id",t.itemId),t.itemName&&o.searchParams.set("name",t.itemName),t.errorCode===z.NotFound?`/404${o.search}`:t.errorCode===z.ProductNotFound||t.errorCode===z.ProductDelisted?`/404/product${o.search}`:t.errorCode===z.CollectionNotFound?`/404/collection${o.search}`:`/error/${t.errorCode}${o.search}`}}const Wt=class C{static get scrollPositionByUrl(){return C._scrollPositionByUrl||(window.addEventListener("beforeunload",()=>C.saveScrollPositionToLocalStorage()),C._scrollPositionByUrl=C.loadScrollPositionsFromLocalStorage()),C._scrollPositionByUrl}beforeNavigation(){L.route?.url&&C.scrollPositionByUrl.set(L.route.url.pathname+L.route.url.search,window.scrollY)}afterNavigation(t){const o=t.data?.isBackForwardNavigation&&C.scrollPositionByUrl.get(t.url.pathname+t.url.search)||0;C.scrollOperation?.disconnect();const s=new qs;C.scrollOperation=s,o===0?s.scrollTo(0):s.scrollTo(0,"instant").then(()=>s.scrollTo(o))}static saveScrollPositionToLocalStorage(){const t=Array.from(C.scrollPositionByUrl);localStorage.setItem(C.localStorageScrollPositionKey,JSON.stringify(t))}static loadScrollPositionsFromLocalStorage(){try{if(!performance.getEntriesByType("navigation").some(r=>r instanceof PerformanceNavigationTiming&&r.type==="back_forward"))return new Map;const o=localStorage.getItem(C.localStorageScrollPositionKey)||"[]",s=JSON.parse(o);return new Map(s)}catch(t){return console.warn("Unable to deserialize scroll positions from local storage.",t),new Map}}};Wt.localStorageScrollPositionKey="scrollPositionByUrl";Wt.scrollOperation=null;let Qs=Wt;const L=new Js;var Zs=Object.defineProperty,Xs=Object.getOwnPropertyDescriptor,We=(e,t,o,s)=>{for(var r=s>1?void 0:s?Xs(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Zs(t,o,r),r};let ft=class extends S{constructor(){super(),this.route=null,this.unhandledRejectionListener=e=>this.unhandledPromiseRejection(e),Promise.all([b.fetch(),M.getCachedMarket(),je.getFlags()]).then(([e,t,o])=>j.initialize(e,t.market,o))}connectedCallback(){super.connectedCallback(),window.addEventListener("unhandledrejection",this.unhandledRejectionListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("unhandledrejection",this.unhandledRejectionListener)}firstUpdated(){L.addEventListener("route-changed",()=>this.routeChanged())}routeChanged(){if(!this.route){this.route=L.route;return}const t=document.documentElement.classList.contains("back-transition");"startViewTransition"in document&&!t?document.startViewTransition(()=>(this.route=L.route,this.updateComplete)).finished.finally(()=>this.clearBackTransition()):(this.route=L.route,this.clearBackTransition())}render(){return m`
            ${this.renderLazyHeader()}
            <div class="layout-container">
                <main>
                    <div id="routerOutlet">
                        ${L.renderRoute()}
                    </div>
                    <scroll-to-top-button></scroll-to-top-button>
                </main>
            </div>
            ${this.renderLazyFooter()}
        `}renderLazyHeader(){return m`
            <lazy-load class="header-shimmer" .renderer="${()=>this.renderHeader()}" .importer="${()=>this.loadHeader()}" when="immediate"></lazy-load>
        `}renderLazyFooter(){return m`
            <lazy-load class="footer-shimmer" .renderer="${()=>this.renderFooter()}" .importer="${()=>this.loadFooter()}" when="immediate"></lazy-load>
        `}loadHeader(){return Promise.all([f(()=>import("./header-9ff1944e.js"),["assets/js/header-9ff1944e.js","assets/js/nav-bar-cd5e889c.js","assets/js/repeat-1a78a8d2.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/style-map-a428b004.js"]),b.fetch()])}loadFooter(){return Promise.all([f(()=>import("./footer-menu-2f1c4d1e.js"),["assets/js/footer-menu-2f1c4d1e.js","assets/js/css-function-2ba732a7.js","assets/js/repeat-1a78a8d2.js","assets/js/platform-2180e403.js"]),b.fetch()])}renderHeader(){return m`
            <app-header></app-header>
        `}renderFooter(){return m`
            <footer-menu></footer-menu>
        `}async unhandledPromiseRejection(e){if(e.reason instanceof ht){const t=await f(()=>import("./alert-service-1970f04a.js"),["assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js"]);t.alertService.hasVisibleAlerts||t.alertService.showError(b.get("Common.UnableToConnect"),b.get("Common.UnableToConnectDetails"),e.reason)}}clearBackTransition(){document.documentElement.classList.remove("back-transition")}};ft.styles=[Bt,Ps,Ss];We([F()],ft.prototype,"route",2);ft=We([wt("app-index")],ft);export{Bo as $,Ls as A,y as B,Os as C,or as D,yt as E,R as F,Re as G,Go as H,dr as I,u as J,mo as K,Gt as L,Ge as M,Ve as N,A as O,Is as P,po as Q,pe as R,zs as S,w as T,Te as U,L as V,Ie as W,Es as X,Gs as Y,ur as Z,f as _,Bt as a,it as a0,k as a1,he as a2,St as a3,gr as a4,mr as a5,Ht as a6,Ho as a7,re as a8,br as a9,hr as aa,Le as ab,ke as ac,zo as ad,fr as ae,ut as af,bo as ag,bt as ah,ir as ai,lr as aj,Ms as ak,M as b,ko as c,Rs as d,Co as e,Ts as f,j as g,Ae as h,$ as i,Pe as j,fo as k,b as l,v as m,p as n,lo as o,ar as p,nr as q,F as r,S as s,wt as t,rr as u,cr as v,sr as w,m as x,$o as y,N as z};
