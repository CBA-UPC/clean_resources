(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const Ye="modulepreload",Xe=function(o){return"/"+o},Yt={},f=function(t,e,s){if(!e||e.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=Xe(i),i in Yt)return;Yt[i]=!0;const n=i.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(!!s)for(let h=r.length-1;h>=0;h--){const d=r[h];if(d.href===i&&(!n||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":Ye,n||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),n)return new Promise((h,d)=>{c.addEventListener("load",h),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=globalThis,Ut=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),Xt=new WeakMap;let ve=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ut&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Xt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Xt.set(e,t))}return t}toString(){return this.cssText}};const lt=o=>new ve(typeof o=="string"?o:o+"",void 0,Nt),$=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new ve(e,o,Nt)},Qe=(o,t)=>{if(Ut)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=gt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,o.appendChild(s)}},Qt=Ut?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return lt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ze,defineProperty:to,getOwnPropertyDescriptor:eo,getOwnPropertyNames:oo,getOwnPropertySymbols:so,getPrototypeOf:ro}=Object,yt=globalThis,Zt=yt.trustedTypes,io=Zt?Zt.emptyScript:"",no=yt.reactiveElementPolyfillSupport,ot=(o,t)=>o,ft={toAttribute(o,t){switch(t){case Boolean:o=o?io:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Vt=(o,t)=>!Ze(o,t),te={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:Vt};Symbol.metadata??=Symbol("metadata"),yt.litPropertyMetadata??=new WeakMap;class j extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=te){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&to(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=eo(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){const a=r?.call(this);i.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??te}static _$Ei(){if(this.hasOwnProperty(ot("elementProperties")))return;const t=ro(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot("properties"))){const e=this.properties,s=[...oo(e),...so(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(Qt(r))}else t!==void 0&&e.push(Qt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const i=(s.converter?.toAttribute!==void 0?s.converter:ft).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:ft;this._$Em=r,this[r]=n.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??Vt)(r?i:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,i]of s)i.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(t){}firstUpdated(t){}}j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[ot("elementProperties")]=new Map,j[ot("finalized")]=new Map,no?.({ReactiveElement:j}),(yt.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis,bt=Dt.trustedTypes,ee=bt?bt.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ft="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,Bt="?"+E,ao=`<${Bt}>`,D=document,rt=()=>D.createComment(""),it=o=>o===null||typeof o!="object"&&typeof o!="function",we=Array.isArray,ye=o=>we(o)||typeof o?.[Symbol.iterator]=="function",kt=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,se=/>/g,M=RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),re=/'/g,ie=/"/g,_e=/^(?:script|style|textarea|title)$/i,lo=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),u=lo(1),F=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ne=new WeakMap,N=D.createTreeWalker(D,129);function $e(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ee!==void 0?ee.createHTML(t):t}const Ce=(o,t)=>{const e=o.length-1,s=[];let r,i=t===2?"<svg>":"",n=X;for(let a=0;a<e;a++){const l=o[a];let c,h,d=-1,_=0;for(;_<l.length&&(n.lastIndex=_,h=n.exec(l),h!==null);)_=n.lastIndex,n===X?h[1]==="!--"?n=oe:h[1]!==void 0?n=se:h[2]!==void 0?(_e.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=M):h[3]!==void 0&&(n=M):n===M?h[0]===">"?(n=r??X,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?M:h[3]==='"'?ie:re):n===ie||n===re?n=M:n===oe||n===se?n=X:(n=M,r=void 0);const x=n===M&&o[a+1].startsWith("/>")?" ":"";i+=n===X?l+ao:d>=0?(s.push(c),l.slice(0,d)+Ft+l.slice(d)+E+x):l+E+(d===-2?a:x)}return[$e(o,i+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class nt{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,n=0;const a=t.length-1,l=this.parts,[c,h]=Ce(t,e);if(this.el=nt.createElement(c,s),N.currentNode=this.el.content,e===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=N.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Ft)){const _=h[n++],x=r.getAttribute(d).split(E),ut=/([.?@])?(.*)/.exec(_);l.push({type:1,index:i,name:ut[2],strings:x,ctor:ut[1]==="."?xe:ut[1]==="?"?Pe:ut[1]==="@"?Ae:ct}),r.removeAttribute(d)}else d.startsWith(E)&&(l.push({type:6,index:i}),r.removeAttribute(d));if(_e.test(r.tagName)){const d=r.textContent.split(E),_=d.length-1;if(_>0){r.textContent=bt?bt.emptyScript:"";for(let x=0;x<_;x++)r.append(d[x],rt()),N.nextNode(),l.push({type:2,index:++i});r.append(d[_],rt())}}}else if(r.nodeType===8)if(r.data===Bt)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(E,d+1))!==-1;)l.push({type:7,index:i}),d+=E.length-1}i++}}static createElement(t,e){const s=D.createElement("template");return s.innerHTML=t,s}}function B(o,t,e=o,s){if(t===F)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl;const i=it(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=B(o,r._$AS(o,t.values),r,s)),t}class ke{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??D).importNode(e,!0);N.currentNode=r;let i=N.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new Y(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new Se(i,this,t)),this._$AV.push(c),l=s[++a]}n!==l?.index&&(i=N.nextNode(),n++)}return N.currentNode=D,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),it(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==F&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ye(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&it(this._$AH)?this._$AA.nextSibling.data=t:this.$(D.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=nt.createElement($e(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const i=new ke(r,this),n=i.u(this.options);i.p(e),this.$(n),this._$AH=i}}_$AC(t){let e=ne.get(t.strings);return e===void 0&&ne.set(t.strings,e=new nt(t)),e}T(t){we(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new Y(this.k(rt()),this.k(rt()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,e=this,s,r){const i=this.strings;let n=!1;if(i===void 0)t=B(this,t,e,0),n=!it(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=B(this,a[s+l],e,l),c===F&&(c=this._$AH[l]),n||=!it(c)||c!==this._$AH[l],c===v?t=v:t!==v&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}n&&!r&&this.O(t)}O(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xe extends ct{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===v?void 0:t}}class Pe extends ct{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class Ae extends ct{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??v)===F)return;const s=this._$AH,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Se{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const co={j:Ft,P:E,A:Bt,C:1,M:Ce,L:ke,R:ye,V:B,D:Y,I:ct,H:Pe,N:Ae,U:xe,B:Se},ho=Dt.litHtmlPolyfillSupport;ho?.(nt,Y),(Dt.litHtmlVersions??=[]).push("3.1.0");const uo=(o,t,e)=>{const s=e?.renderBefore??t;let r=s._$litPart$;if(r===void 0){const i=e?.renderBefore??null;s._$litPart$=r=new Y(t.insertBefore(rt(),i),i,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let L=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=uo(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};L._$litElement$=!0,L.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:L});const po=globalThis.litElementPolyfillSupport;po?.({LitElement:L});(globalThis.litElementVersions??=[]).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:Vt},go=(o=mo,t,e)=>{const{kind:s,metadata:r}=e;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(e.name,o),s==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,o)},init(a){return a!==void 0&&this.C(n,void 0,o),a}}}if(s==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,o)}}throw Error("Unsupported decorator location: "+s)};function m(o){return(t,e)=>typeof e=="object"?go(o,t,e):((s,r,i)=>{const n=r.hasOwnProperty(i);return r.constructor.createProperty(i,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(r,i):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(o){return m({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fo(o){return(t,e)=>{const s=typeof t=="function"?t:t[e];Object.assign(s,o)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bo(o,t){return(e,s,r)=>{const i=n=>n.renderRoot?.querySelector(o)??null;if(t){const{get:n,set:a}=typeof s=="object"?e:r??(()=>{const l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return ae(e,s,{get(){let l=n.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return ae(e,s,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:vo}=co,ir=o=>o===null||typeof o!="object"&&typeof o!="function",wo=(o,t)=>t===void 0?o?._$litType$!==void 0:o?._$litType$===t,nr=o=>o?._$litType$?.h!=null,yo=o=>o.strings===void 0,le=()=>document.createComment(""),ar=(o,t,e)=>{const s=o._$AA.parentNode,r=t===void 0?o._$AB:t._$AA;if(e===void 0){const i=s.insertBefore(le(),r),n=s.insertBefore(le(),r);e=new vo(i,n,o,o.options)}else{const i=e._$AB.nextSibling,n=e._$AM,a=n!==o;if(a){let l;e._$AQ?.(o),e._$AM=o,e._$AP!==void 0&&(l=o._$AU)!==n._$AU&&e._$AP(l)}if(i!==r||a){let l=e._$AA;for(;l!==i;){const c=l.nextSibling;s.insertBefore(l,r),l=c}}}return e},lr=(o,t,e=o)=>(o._$AI(t,e),o),_o={},cr=(o,t=_o)=>o._$AH=t,dr=o=>o._$AH,hr=o=>{o._$AP?.(!1,!0);let t=o._$AA;const e=o._$AB.nextSibling;for(;t!==e;){const s=t.nextSibling;t.remove(),t=s}},ur=o=>{o._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Le=o=>(...t)=>({_$litDirective$:o,values:t});class Re{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(o,t)=>{const e=o._$AN;if(e===void 0)return!1;for(const s of e)s._$AO?.(t,!1),st(s,t);return!0},vt=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while(e?.size===0)},Te=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),ko(t)}};function $o(o){this._$AN!==void 0?(vt(this),this._$AM=o,Te(this)):this._$AM=o}function Co(o,t=!1,e=0){const s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(s))for(let i=e;i<s.length;i++)st(s[i],!1),vt(s[i]);else s!=null&&(st(s,!1),vt(s));else st(this,o)}const ko=o=>{o.type==Ee.CHILD&&(o._$AP??=Co,o._$AQ??=$o)};class xo extends Re{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Te(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(st(this,t),vt(this))}setValue(t){if(yo(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=()=>new Ao;class Ao{}const xt=new WeakMap,So=Le(class extends xo{render(o){return v}update(o,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=o.options?.host,this.ot(this.lt=o.element)),v}ot(o){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=xt.get(t);e===void 0&&(e=new WeakMap,xt.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,o),o!==void 0&&this.G.call(this.ct,o)}else this.G.value=o}get rt(){return typeof this.G=="function"?xt.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var $t=$`
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
`,Eo=$`
  ${$t}

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
`,Ie=Object.defineProperty,Lo=Object.defineProperties,Ro=Object.getOwnPropertyDescriptor,To=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertySymbols,Io=Object.prototype.hasOwnProperty,Mo=Object.prototype.propertyIsEnumerable,Pt=(o,t)=>{if(t=Symbol[o])return t;throw Error("Symbol."+o+" is not defined")},de=(o,t,e)=>t in o?Ie(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,dt=(o,t)=>{for(var e in t||(t={}))Io.call(t,e)&&de(o,e,t[e]);if(ce)for(var e of ce(t))Mo.call(t,e)&&de(o,e,t[e]);return o},Me=(o,t)=>Lo(o,To(t)),p=(o,t,e,s)=>{for(var r=s>1?void 0:s?Ro(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Ie(t,e,r),r},Oo=function(o,t){this[0]=o,this[1]=t},pr=o=>{var t=o[Pt("asyncIterator")],e=!1,s,r={};return t==null?(t=o[Pt("iterator")](),s=i=>r[i]=n=>t[i](n)):(t=t.call(o),s=i=>r[i]=n=>{if(e){if(e=!1,i==="throw")throw n;return n}return e=!0,{done:!1,value:new Oo(new Promise(a=>{var l=t[i](n);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),r[Pt("iterator")]=()=>r,s("next"),"throw"in t?s("throw"):r.throw=i=>{throw i},"return"in t&&s("return"),r},I=class extends L{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([o,t])=>{this.constructor.define(o,t)})}emit(o,t){const e=new CustomEvent(o,dt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(e),e}static define(o,t=this,e={}){const s=customElements.get(o);if(!s){customElements.define(o,class extends t{},e);return}let r=" (unknown version)",i=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in s&&s.version&&(i=" v"+s.version),!(r&&i&&r===i)&&console.warn(`Attempted to register <${o}>${r}, but <${o}>${i} has already been registered.`)}};I.version="2.12.0";I.dependencies={};p([m()],I.prototype,"dir",2);p([m()],I.prototype,"lang",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=Le(class extends Re{constructor(o){if(super(o),o.type!==Ee.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!this.st?.has(s)&&this.it.add(s);return this.render(t)}const e=o.element.classList;for(const s of this.it)s in t||(e.remove(s),this.it.delete(s));for(const s in t){const r=!!t[s];r===this.it.has(s)||this.st?.has(s)||(r?(e.add(s),this.it.add(s)):(e.remove(s),this.it.delete(s)))}return F}});var Ht=class extends I{constructor(){super(...arguments),this.effect="none"}render(){return u`
      <div
        part="base"
        class=${Oe({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ht.styles=Eo;p([m()],Ht.prototype,"effect",2);Ht.define("sl-skeleton");function zo(o,t){let e;return()=>{clearTimeout(e),e=setTimeout(o,t)}}var Uo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,ht=(o,t,e,s)=>{for(var r=s>1?void 0:s?No(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Uo(t,e,r),r};let H=class extends L{constructor(){super(...arguments),this.when="immediate",this.renderer=null,this.importer=null,this.loadedComponent=null,this.visibleObserver=null,this.renderedPromise=new Promise(o=>this.loadedPromiseResolver=o),this.isRenderedPromiseResolved=!1,this.skeletonRef=Po(),this.skeletonHeight=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}firstUpdated(){(this.importer||this.when)&&this.listenForLoad()}createRenderRoot(){return this}render(){return this.loadedComponent?this.renderer?(this.resolveRenderedPromise(),this.renderer()):(this.resolveRenderedPromise(),this.loadedComponent):this.renderLoading()}renderLoading(){return u`
            <sl-skeleton tabindex="0" class="lazy-loading-skeleton" effect="pulse" ${So(this.skeletonRef)}></sl-skeleton>
        `}listenForLoad(){if(this.when==="immediate")this.loadImmediately();else if(this.when==="visible")this.loadWhenVisible();else if(this.when instanceof Promise)this.when.finally(()=>this.loadImmediately());else{const o=this.when;if(!o||!o.value||!(o.value instanceof H)){console.warn("<lazy-load> had an unknown .when property. Expects 'immediate' | 'visible' | Promise | Ref<LazyLoad>. Because of this, the <lazy-load> element will not be loaded.");return}o.value.renderedPromise.then(()=>this.loadImmediately())}}addLoadedClass(){this.classList.add("loaded")}loadImmediately(){this.importer&&this.renderer&&this.importer().then(()=>{this.skeletonHeight=this.skeletonRef.value?.clientHeight||0,this.renderedPromise.then(()=>this.addLoadedClass()),this.loadedComponent=this.renderer?.()||u``})}loadWhenVisible(){if(this.visibleObserver?.disconnect(),!this.visibleObserver){const t={root:null,threshold:0,rootMargin:"5px 5px 5px 5px"};this.visibleObserver=new IntersectionObserver(e=>this.visibleObserved(e),t)}const o=this.querySelector("sl-skeleton");o&&this.visibleObserver.observe(o)}visibleObserved(o){o.find(e=>e.isIntersecting)&&(this.visibleObserver?.disconnect(),this.visibleObserver=null,this.loadImmediately())}resolveRenderedPromise(){this.isRenderedPromiseResolved||(this.isRenderedPromiseResolved=!0,queueMicrotask(()=>this.loadedPromiseResolver?.()))}warnIfShimmerSizeDoesntMatchRealSize(){this.skeletonHeight&&this.clientHeight&&this.clientHeight!==this.skeletonHeight&&(console.warn(`Warning: Wrong lazy load skeleton height.

Skeleton height: ${this.skeletonHeight}
Actual rendered content height: ${this.clientHeight}.

Accurate skeleton sizes are important for proper scroll position restoration during back/forward navigations.`,this),this.resizeObserver?.disconnect())}};ht([m()],H.prototype,"when",2);ht([m({attribute:"renderer"})],H.prototype,"renderer",2);ht([m({attribute:"importer"})],H.prototype,"importer",2);ht([T()],H.prototype,"loadedComponent",2);H=ht([_t("lazy-load")],H);var ze=(o=>(o[o.sm=576]="sm",o[o.md=768]="md",o[o.lg=992]="lg",o[o.xl=1200]="xl",o[o.xxl=1600]="xxl",o[o.xxxl=1960]="xxxl",o))(ze||{}),y=(o=>(o[o.xs=575]="xs",o[o.sm=767]="sm",o[o.md=991]="md",o[o.lg=1199]="lg",o[o.xl=1599]="xl",o[o.xxl=1959]="xxl",o))(y||{});function w(o){return[576,768,768,992,1200,1600,1960].includes(o)?$`@media(min-width: ${o}px)`:$`@media(max-width: ${o}px)`}function Ue(){return Vo({"max-width":"700px","max-height":"400px"})}function mr(o){return[576,768,768,992,1200,1600,1960].includes(o)?window.matchMedia(`(min-width: ${o}px)`).matches:window.matchMedia(`(max-width: ${o}px)`).matches}function Vo(o={}){let t="";for(const[e,s]of Object.entries(o))t+=t===""?"":" and ",t+=`(${e}: ${s})`;return $`@media${lt(t)}`}const Gt=$`
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
        ${w(y.sm)} {
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
    ${w(1024)} {
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

        ${w(y.md-130)} {
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
`,Do=$`
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

    ${Ue()} {
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
`;var Fo=$`
  ${$t}

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
`;const Tt=new Set,Bo=new MutationObserver(Fe),W=new Map;let Ne=document.documentElement.dir||"ltr",Ve=document.documentElement.lang||navigator.language,O;Bo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function De(...o){o.map(t=>{const e=t.$code.toLowerCase();W.has(e)?W.set(e,Object.assign(Object.assign({},W.get(e)),t)):W.set(e,t),O||(O=t)}),Fe()}function Fe(){Ne=document.documentElement.dir||"ltr",Ve=document.documentElement.lang||navigator.language,[...Tt.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}let Ho=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Tt.add(this.host)}hostDisconnected(){Tt.delete(this.host)}dir(){return`${this.host.dir||Ne}`.toLowerCase()}lang(){return`${this.host.lang||Ve}`.toLowerCase()}getTranslationData(t){var e,s;const r=new Intl.Locale(t.replace(/_/g,"-")),i=r?.language.toLowerCase(),n=(s=(e=r?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&s!==void 0?s:"",a=W.get(`${i}-${n}`),l=W.get(i);return{locale:r,language:i,region:n,primary:a,secondary:l}}exists(t,e){var s;const{primary:r,secondary:i}=this.getTranslationData((s=e.lang)!==null&&s!==void 0?s:this.lang());return e=Object.assign({includeFallback:!1},e),!!(r&&r[t]||i&&i[t]||e.includeFallback&&O&&O[t])}term(t,...e){const{primary:s,secondary:r}=this.getTranslationData(this.lang());let i;if(s&&s[t])i=s[t];else if(r&&r[t])i=r[t];else if(O&&O[t])i=O[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,e)}};var Be={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,t)=>`Go to slide ${o} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format"};De(Be);var Go=Be,He=class extends Ho{};De(Go);var Ge=class extends I{constructor(){super(...arguments),this.localize=new He(this)}render(){return u`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ge.styles=Fo;var Q=new WeakMap,Z=new WeakMap,tt=new WeakMap,At=new WeakSet,pt=new WeakMap,jo=class{constructor(o,t){this.handleFormData=e=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!s&&!n&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{e.formData.append(r,a.toString())}):e.formData.append(r,i.toString()))},this.handleFormSubmit=e=>{var s;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=Q.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),pt.set(this.host,[])},this.handleInteraction=e=>{const s=pt.get(this.host);s.includes(e.type)||s.push(e.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const s of e)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const s of e)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=o).addController(this),this.options=dt({form:e=>{const s=e.form;if(s){const i=e.getRootNode().getElementById(s);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var s;return(s=e.disabled)!=null?s:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,s)=>e.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const o=this.options.form(this.host);o&&this.attachForm(o),pt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),pt.delete(this.host),this.options.assumeInteractionOn.forEach(o=>{this.host.removeEventListener(o,this.handleInteraction)})}hostUpdated(){const o=this.options.form(this.host);o||this.detachForm(),o&&this.form!==o&&(this.detachForm(),this.attachForm(o)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(o){o?(this.form=o,Q.has(this.form)?Q.get(this.form).add(this.host):Q.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Z.has(this.form)||(Z.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),tt.has(this.form)||(tt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const o=Q.get(this.form);o&&(o.delete(this.host),o.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Z.has(this.form)&&(this.form.reportValidity=Z.get(this.form),Z.delete(this.form)),tt.has(this.form)&&(this.form.checkValidity=tt.get(this.form),tt.delete(this.form)),this.form=void 0))}setUserInteracted(o,t){t?At.add(o):At.delete(o),o.requestUpdate()}doAction(o,t){if(this.form){const e=document.createElement("button");e.type=o,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",t&&(e.name=t.name,e.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&e.setAttribute(s,t.getAttribute(s))})),this.form.append(e),e.click(),e.remove()}}getForm(){var o;return(o=this.form)!=null?o:null}reset(o){this.doAction("reset",o)}submit(o){this.doAction("submit",o)}setValidity(o){const t=this.host,e=!!At.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!o),t.toggleAttribute("data-valid",o),t.toggleAttribute("data-user-invalid",!o&&e),t.toggleAttribute("data-user-valid",o&&e)}updateValidity(){const o=this.host;this.setValidity(o.validity.valid)}emitInvalidEvent(o){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});o||t.preventDefault(),this.host.dispatchEvent(t)||o?.preventDefault()}},jt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),fr=Object.freeze(Me(dt({},jt),{valid:!1,valueMissing:!0})),br=Object.freeze(Me(dt({},jt),{valid:!1,customError:!0})),Wo=$`
  ${$t}

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
`,qo=class{constructor(o,...t){this.slotNames=[],this.handleSlotChange=e=>{const s=e.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=o).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent.trim()!=="")return!0;if(o.nodeType===o.ELEMENT_NODE){const t=o;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(o){return this.host.querySelector(`:scope > [slot="${o}"]`)!==null}test(o){return o==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(o)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function vr(o){if(!o)return"";const t=o.assignedNodes({flatten:!0});let e="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e}var Jo=$`
  ${$t}

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
`,It="";function he(o){It=o}function Ko(o=""){if(!It){const t=[...document.getElementsByTagName("script")],e=t.find(s=>s.hasAttribute("data-shoelace"));if(e)he(e.getAttribute("data-shoelace"));else{const s=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let r="";s&&(r=s.getAttribute("src")),he(r.split("/").slice(0,-1).join("/"))}}return It.replace(/\/$/,"")+(o?`/${o.replace(/^\//,"")}`:"")}var Yo={name:"default",resolver:o=>Ko(`assets/icons/${o}.svg`)},Xo=Yo,ue={caret:`
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
  `},Qo={name:"system",resolver:o=>o in ue?`data:image/svg+xml,${encodeURIComponent(ue[o])}`:""},Zo=Qo,ts=[Xo,Zo],Mt=[];function es(o){Mt.push(o)}function os(o){Mt=Mt.filter(t=>t!==o)}function pe(o){return ts.find(t=>t.name===o)}function Wt(o,t){const e=dt({waitUntilFirstUpdate:!1},t);return(s,r)=>{const{update:i}=s,n=Array.isArray(o)?o:[o];s.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),d=this[c];h!==d&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,d)}}),i.call(this,a)}}}var et=Symbol(),mt=Symbol(),St,Et=new Map,A=class extends I{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(o,t){var e;let s;if(t?.spriteSheet)return u`<svg part="svg">
        <use part="use" href="${o}"></use>
      </svg>`;try{if(s=await fetch(o,{mode:"cors"}),!s.ok)return s.status===410?et:mt}catch{return mt}try{const r=document.createElement("div");r.innerHTML=await s.text();const i=r.firstElementChild;if(((e=i?.tagName)==null?void 0:e.toLowerCase())!=="svg")return et;St||(St=new DOMParser);const a=St.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):et}catch{return et}}connectedCallback(){super.connectedCallback(),es(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),os(this)}getIconSource(){const o=pe(this.library);return this.name&&o?{url:o.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var o;const{url:t,fromLibrary:e}=this.getIconSource(),s=e?pe(this.library):void 0;if(!t){this.svg=null;return}let r=Et.get(t);if(r||(r=this.resolveIcon(t,s),Et.set(t,r)),!this.initialRender)return;const i=await r;if(i===mt&&Et.delete(t),t===this.getIconSource().url){if(wo(i)){this.svg=i;return}switch(i){case mt:case et:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(o=s?.mutator)==null||o.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};A.styles=Jo;p([T()],A.prototype,"svg",2);p([m({reflect:!0})],A.prototype,"name",2);p([m()],A.prototype,"src",2);p([m()],A.prototype,"label",2);p([m({reflect:!0})],A.prototype,"library",2);p([Wt("label")],A.prototype,"handleLabelChange",1);p([Wt(["name","src","library"])],A.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=Symbol.for(""),ss=o=>{if(o?.r===je)return o?._$litStatic$},me=(o,...t)=>({_$litStatic$:t.reduce((e,s,r)=>e+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+o[r+1],o[0]),r:je}),ge=new Map,rs=o=>(t,...e)=>{const s=e.length;let r,i;const n=[],a=[];let l,c=0,h=!1;for(;c<s;){for(l=t[c];c<s&&(i=e[c],(r=ss(i))!==void 0);)l+=r+t[++c],h=!0;c!==s&&a.push(i),n.push(l),c++}if(c===s&&n.push(t[s]),h){const d=n.join("$$lit$$");(t=ge.get(d))===void 0&&(n.raw=n,ge.set(d,t=n)),e=a}return o(t,...e)},Lt=rs(u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=o=>o??v;var g=class extends I{constructor(){super(...arguments),this.formControlController=new jo(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new qo(this,"[default]","prefix","suffix"),this.localize=new He(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:jt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(o){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(o)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(o){this.isButton()&&(this.button.setCustomValidity(o),this.formControlController.updateValidity())}render(){const o=this.isLink(),t=o?me`a`:me`button`;return Lt`
      <${t}
        part="base"
        class=${Oe({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${P(o?void 0:this.disabled)}
        type=${P(o?void 0:this.type)}
        title=${this.title}
        name=${P(o?void 0:this.name)}
        value=${P(o?void 0:this.value)}
        href=${P(o?this.href:void 0)}
        target=${P(o?this.target:void 0)}
        download=${P(o?this.download:void 0)}
        rel=${P(o?this.rel:void 0)}
        role=${P(o?void 0:"button")}
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
        ${this.caret?Lt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Lt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};g.styles=Wo;g.dependencies={"sl-icon":A,"sl-spinner":Ge};p([bo(".button")],g.prototype,"button",2);p([T()],g.prototype,"hasFocus",2);p([T()],g.prototype,"invalid",2);p([m()],g.prototype,"title",2);p([m({reflect:!0})],g.prototype,"variant",2);p([m({reflect:!0})],g.prototype,"size",2);p([m({type:Boolean,reflect:!0})],g.prototype,"caret",2);p([m({type:Boolean,reflect:!0})],g.prototype,"disabled",2);p([m({type:Boolean,reflect:!0})],g.prototype,"loading",2);p([m({type:Boolean,reflect:!0})],g.prototype,"outline",2);p([m({type:Boolean,reflect:!0})],g.prototype,"pill",2);p([m({type:Boolean,reflect:!0})],g.prototype,"circle",2);p([m()],g.prototype,"type",2);p([m()],g.prototype,"name",2);p([m()],g.prototype,"value",2);p([m()],g.prototype,"href",2);p([m()],g.prototype,"target",2);p([m()],g.prototype,"rel",2);p([m()],g.prototype,"download",2);p([m()],g.prototype,"form",2);p([m({attribute:"formaction"})],g.prototype,"formAction",2);p([m({attribute:"formenctype"})],g.prototype,"formEnctype",2);p([m({attribute:"formmethod"})],g.prototype,"formMethod",2);p([m({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);p([m({attribute:"formtarget"})],g.prototype,"formTarget",2);p([Wt("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);var wr=g;g.define("sl-button");var Ot=(o=>(o.ApiError="API",o.TranslationError="Translation",o.UnhandledError="Unhandled",o))(Ot||{});class zt extends Error{constructor(t,e,s){super(e),this.data=()=>({type:this.type,context:this.context}),this.type=t,this.context=s}}class is extends zt{constructor(t,e,s={}){super("Translation",t,s),this.data=()=>({...super.data(),locale:this.language}),this.language=e}}class k{}k.ProductCardClicked="ProductCardClicked";k.SeeAllClicked="SeeAllClicked";k.CollectionReelClicked="CollectionReelClicked";k.CollectionGroupClicked="CollectionGroupClicked";k.SpotlightCardClicked="SpotlightCardClicked";k.PublisherTagClicked="PublisherClicked";k.CategoryTagClicked="CategoryClicked";k.CtaClicked="CtaClicked";k.SpotlightCardCtaClicked="SpotlightCardCtaClicked";class ns{constructor(){this.defaultMetadata={step:null,route:null,component:{type:null,area:null,areaSlot:null,subSlot:null,id:null,name:null}},this.history=[],this.routes=["/home","/apps","/games","/movies","/search","/"]}updateStep(t,e){e.step=t}updateRoute(t,e){e.route=t}updateComponentType(t,e){e.component.type=t}updateComponentArea(t,e){e.component.area=t}updateComponentAreaSlot(t,e){e.component.areaSlot=t}updateComponentSubSlot(t,e){e.component.subSlot=t}updateComponentId(t,e){e.component.id=t}updateComponentName(t,e){e.component.name=t}hasRoutes(t){return this.routes.includes(t)}hasEvents(t){return Object.values(k).includes(t)}updateMetadata(t,e,s=""){const r=JSON.parse(JSON.stringify(this.defaultMetadata));s&&this.updateComponentArea(s,r),"type"in t?this.updateComponentType(t.type,r):"type"in e&&this.updateComponentType(e.type,r),"collectionId"in e?this.updateComponentId(e.collectionId,r):"collectionId"in t&&this.updateComponentId(t.collectionId,r),"areaSlot"in e&&this.updateComponentAreaSlot(e.areaSlot,r),"slot"in t?this.updateComponentSubSlot(t.slot,r):"slot"in e&&this.updateComponentSubSlot(e.slot,r),"itemId"in t&&this.updateComponentId(t.itemId,r),"itemName"in t&&this.updateComponentName(t.itemName,r),this.updateRoute(window.location.pathname,r),this.updateStep(this.hasRoutes(window.location.pathname)?0:this.getHistory().length,r),this.updateHistory(r)}getHistory(){return this.history}resetHistory(){this.history=[]}updateHistory(t){this.hasRoutes(t.route||"")&&this.resetHistory(),this.history.push(t)}}class as{constructor(t){this.config=t,this.appInsightsResolver=null,this.adobeAnalyticsResolver=null,this.globalProperties={},this.visibleObserver=null,this.eventIdName="telemetry-event-id",this.areaIdName="telemetry-area-id",this.dataName="telemetry-data",this.operationId="",this.operationRoute=null,this.excludeDomains=["clarity.ms","video.microsoft.com","universalstore.streaming.mediaservices.windows.net"],this.navigationTracking=new ns,this.appInsightsLoaded=new Promise(e=>this.appInsightsResolver=e),this.adobeAnalyticsLoaded=new Promise(e=>this.adobeAnalyticsResolver=e),(this.config.appInsightsKey||this.config.adobeKey)&&(this.trackActions(),this.trackExceptions(),this.trackImpressions())}initialize(t,e,s){this.setProperties({market:e,locale:t});const r=new URL(window.location.href);this.config.appInsightsKey?this.loadAppInsights(this.config).then(i=>this.initializeAppInsights(i,r,s)).then(i=>this.appInsightsResolver?.(i)).catch(i=>console.warn("Unable to import Application Insights due to an error",i)):console.warn("No Application Insights telemetry key provided."),this.config.adobeKey?this.loadAdobeAnalytics().then(i=>this.initializeAdobeAnalytics(i)).then(i=>this.adobeAnalyticsResolver?.(i)).catch(i=>console.warn("Unable to import Adobe Analytics due to an error",i)):console.warn("No Adobe Analytics telemetry key provided.")}track(t){this.appInsightsLoaded.then(s=>{const r={name:t.name,properties:{...this.globalProperties,...t.properties}};s.appInsights.trackEvent(r)}),(t.name===k.CtaClicked||t.name===k.SpotlightCardCtaClicked)&&t.properties?.itemId&&this.adobeAnalyticsLoaded.then(s=>{const r={content:[{id:`getOrRemoveButton-${t.properties?.itemId}`,cN:"Get in Store app"}],actionType:"CL",behavior:92,name:t.properties?.itemId,uri:window.location.href,properties:{pageTags:{productId:t.properties?.itemId,sku:t.properties?.sku||""}},id:s.getPlugin("WebAnalyticsPlugin").plugin.id.getLastPageViewId()};s.trackPageAction(r)})}trackFlush(){this.appInsightsLoaded.then(t=>{t.appInsights.flush()})}trackPageView(t,e,s){this.appInsightsLoaded.then(r=>{e&&this.newOperation(r.generateW3CId,t),r.appInsights.trackPageView({refUri:e?.href})}),this.adobeAnalyticsLoaded.then(r=>{const n=t.pathname.toLowerCase().startsWith("/detail/")&&s?.id?{id:s?.id,title:s?.name}:null,a=n?{pageTags:{ProductInfo:n}}:{},l={uri:t.toString(),properties:a,pageType:n?"PDP":void 0,behavior:n?90:0};r.trackPageView(l)})}addImpressionTracking(t){this.visibleObserver?.observe(t)}removeImpressionTracking(t){this.visibleObserver?.unobserve(t)}error(t){console.error(t),this.appInsightsLoaded.then(e=>{e.appInsights.trackException({exception:t,properties:{...this.globalProperties,...t.data}})})}warn(t,e={}){console.warn(t),this.logCore(t,e,2)}log(t,e={}){this.logCore(t,e,1)}setProperties(t){this.globalProperties={...this.globalProperties,...t}}logCore(t,e={},s){this.appInsightsLoaded.then(r=>{const i={message:t,severityLevel:s},n={...this.globalProperties,...e};r.appInsights.trackTrace(i,n)})}newOperation(t,e=null){this.operationRoute=e,this.operationId=t()}initializeAppInsights(t,e,s){this.newOperation(t.generateW3CId,e);const r=t.appInsights;return r.addDependencyInitializer(i=>{const n=i?.item?.target;return n?!this.excludeDomains.find(a=>n.includes(a)):!0}),r.addTelemetryInitializer(i=>{i.tags=i.tags||[],i.tags["ai.operation.id"]=this.operationId,i.tags["ai.operation.name"]=this.operationRoute?.pathname,i.data=i.data||[],i.baseType==="PageviewData"&&(i.data.userAgent=navigator.userAgent,i.data.isMobile=navigator.userAgentData?.mobile,i.data.isCookieEnabled=navigator.cookieEnabled,i.baseData.startTime=new Date)}),this.config.role&&r.addTelemetryInitializer(i=>{i.tags=i.tags||[],i.tags["ai.cloud.role"]=this.config.role}),r.addTelemetryInitializer(i=>{i.data=i.data||[],i.data.muid=s.sessionId,i.baseType==="PageviewData"&&(i.data.assignmentContext=s.context)}),r.loadAppInsights(),this.track({name:"ExpContextSet",properties:{assignmentContext:s.context,assignmentFlags:s.values,assignmentPsi:s.assignmentPsi}}),t}initializeAdobeAnalytics(t){const e={disableCookiesUsage:!0,propertyStorageOverride:{getProperty:s=>window.sessionStorage.getItem(s)||"",setProperty:(s,r)=>window.sessionStorage.setItem(s,r)},instrumentationKey:this.config.adobeKey||"",disablePageUnloadEvents:["unload"],webAnalyticsConfiguration:{manageCv:!0,urlCollectHash:!1,urlCollectQuery:!0,syncPageActionNavClick:!1,autoCapture:{click:!1,scroll:!1,pageView:!1,jsError:!1,msTags:!1,onUnload:!1}}};return t.initialize(e,[]),t}getAttribute(t,e){return t?.attributes?.getNamedItem(e)?.value||null}trackActions(){if(!document)return;const t=(a,l)=>{const c=a.composedPath().find(x=>!!this.getAttribute(x,l)),h=this.getAttribute(c,l),d=this.getAttribute(c,this.dataName);let _={};return d&&(_={..._,...JSON.parse(d)}),{element:c,name:h,data:_}},e=a=>{const l=a.composedPath().filter(d=>!!this.getAttribute(d,this.areaIdName)),c=l.map(d=>this.getAttribute(d,this.areaIdName)).reverse().join("/");let h={};return l.forEach(d=>{const _=this.getAttribute(d,this.dataName);_&&(h={...h,...JSON.parse(_)})}),{elements:l,name:c,data:h}};let s="",r="";const i=(a,l=["SL-INPUT"])=>{const c=t(a,this.eventIdName);if(!c.element||l.find(d=>d===c.element.tagName)||r!==a.type&&s===c.element.accessKey+c.name)return;const h=e(a);this.navigationTracking.hasEvents(c.name||"")?(this.navigationTracking.updateMetadata(c.data,h.data,h.name),this.track({name:c.name||"",properties:{area:h?.name,event:a.type,...c.data??null,...h?.data,history:this.navigationTracking.getHistory()}})):this.track({name:c.name||"",properties:{area:h?.name,event:a.type,...c.data??null,...h?.data}}),r=a.type,s=c.element.accessKey+c.name};document.addEventListener("click",a=>{a.sourceCapabilities?.firesTouchEvents||i(a)});let n=!1;document.addEventListener("touchstart",()=>n=!1),document.addEventListener("touchmove",()=>n=!0),document.addEventListener("touchend",a=>{n||a.touches.length>0||i(a)}),document.addEventListener("keydown",a=>{a.key==="Enter"&&i(a,[])})}trackExceptions(){window.addEventListener("error",t=>(this.error(new zt(Ot.UnhandledError,"Unhandled error.",t.error)),!1)),window.addEventListener("unhandledrejection",t=>{this.error(new zt(Ot.UnhandledError,`Unhandled error: ${t.reason?.message||t.reason}`,{stack:t.reason?.stack}))})}trackImpressions(){this.visibleObserver=new IntersectionObserver(t=>{const e=t.filter(s=>s.isIntersecting);for(const{target:s}of e){this.visibleObserver?.unobserve(s);let r=this.getAttribute(s,this.areaIdName),i=this.getAttribute(s,this.dataName);if(!r){const n=s.querySelector(`[${this.areaIdName}]`)||s.shadowRoot?.querySelector(`[${this.areaIdName}]`);if(!n)return;r=this.getAttribute(n,this.areaIdName),i=this.getAttribute(n,this.dataName)}this.track({name:"AreaDisplayed",properties:{area:r,...i?JSON.parse(i):{}}})}},{root:null,threshold:0,rootMargin:"5px 5px 5px 5px"})}async loadAppInsights(t){const e=await Promise.all([f(()=>import("./applicationinsights-web-9ad09b9c.js"),["assets/js/applicationinsights-web-9ad09b9c.js","assets/js/InstrumentHooks-cd565348.js"]),f(()=>import("./applicationinsights-core-js-9783d46c.js"),["assets/js/applicationinsights-core-js-9783d46c.js","assets/js/InstrumentHooks-cd565348.js"])]),[s,r]=e;return{appInsights:new s.ApplicationInsights({config:{connectionString:t.appInsightsKey,enableAutoRouteTracking:!1,autoTrackPageVisitTime:!1,perfEvtsSendAll:!1,enableCorsCorrelation:!0,correlationHeaderExcludedDomains:[...this.excludeDomains],disablePageUnloadEvents:["unload"],maxBatchInterval:3e3,extensionConfig:{ApplicationInsightsAnalytics:{disablePageUnloadEvents:["unload"]}}}}),generateW3CId:r.generateW3CId}}loadAdobeAnalytics(){return f(()=>import("./Index-cbed7ffc.js"),[]).then(e=>new e.ApplicationInsights)}}const ls=window.storeViewModel,q=new as(ls.telemetry);class cs{constructor(){this.locale=null,this.fallbackLocale=null,this.fetchTask=null,this.supportedLocales=[{code:"af-za",translationCode:"af-za"},{code:"am-et",translationCode:"am-et"},{code:"ar-sa",translationCode:"ar-sa"},{code:"as-in",translationCode:"as-in"},{code:"az-latn-az",translationCode:"az-latn-az"},{code:"bd-by",translationCode:"ru-ru"},{code:"bg-bg",translationCode:"bg-bg"},{code:"bn-bd",translationCode:"bn-in"},{code:"bn-in",translationCode:"bn-in"},{code:"bs-latn-ba",translationCode:"bs-latn-ba"},{code:"ca-es",translationCode:"ca-es"},{code:"ca-es-valencia",translationCode:"ca-es-valencia"},{code:"chr-cher-us",translationCode:"en-us"},{code:"bd-by",translationCode:"ru-ru"},{code:"cs-cz",translationCode:"cs-cz"},{code:"cy-gb",translationCode:"cy-gb"},{code:"da-dk",translationCode:"da-dk"},{code:"de-at",translationCode:"de-de"},{code:"de-ch",translationCode:"de-de"},{code:"de-li",translationCode:"de-de"},{code:"de-de",translationCode:"de-de"},{code:"el-gr",translationCode:"el-gr"},{code:"en-au",translationCode:"en-gb"},{code:"en-ca",translationCode:"en-gb"},{code:"en-in",translationCode:"en-gb"},{code:"en-gb",translationCode:"en-gb"},{code:"en-nz",translationCode:"en-gb"},{code:"en-us",translationCode:"en-us"},{code:"en-za",translationCode:"en-gb"},{code:"es-419",translationCode:"es-es"},{code:"es-ar",translationCode:"es-es"},{code:"es-cl",translationCode:"es-es"},{code:"es-co",translationCode:"es-es"},{code:"es-cr",translationCode:"es-es"},{code:"es-es",translationCode:"es-es"},{code:"es-hn",translationCode:"es-es"},{code:"es-mx",translationCode:"es-mx"},{code:"es-pe",translationCode:"es-es"},{code:"es-us",translationCode:"es-es"},{code:"es-uy",translationCode:"es-es"},{code:"es-ve",translationCode:"es-es"},{code:"et-ee",translationCode:"et-ee"},{code:"eu-es",translationCode:"eu-es"},{code:"fa-ir",translationCode:"fa-ir"},{code:"fi-fi",translationCode:"fi-fi"},{code:"fil-ph",translationCode:"fil-ph"},{code:"fr-ca",translationCode:"fr-ca"},{code:"fr-ch",translationCode:"fr-fr"},{code:"fr-fr",translationCode:"fr-fr"},{code:"ga-ie",translationCode:"ga-ie"},{code:"gd-gb",translationCode:"gd-gb"},{code:"gl-es",translationCode:"gl-es"},{code:"gu-in",translationCode:"gu-in"},{code:"ha-latn-ng",translationCode:"en-gb"},{code:"he-il",translationCode:"he-il"},{code:"hi-in",translationCode:"hi-in"},{code:"hr-hr",translationCode:"hr-hr"},{code:"hu-hu",translationCode:"hu-hu"},{code:"hy-am",translationCode:"en-us"},{code:"id-id",translationCode:"id-id"},{code:"ig-ng",translationCode:"en-gb"},{code:"is-is",translationCode:"is-is"},{code:"it-ch",translationCode:"it-it"},{code:"it-it",translationCode:"it-it"},{code:"ja-jp",translationCode:"ja-jp"},{code:"ka-ge",translationCode:"ka-ge"},{code:"kk-kz",translationCode:"kk-kz"},{code:"km-kh",translationCode:"km-kh"},{code:"kn-in",translationCode:"kn-in"},{code:"ko-kr",translationCode:"ko-kr"},{code:"kok-in",translationCode:"kok-in"},{code:"ky-kg",translationCode:"ru-ru"},{code:"lb-lu",translationCode:"lb-lu"},{code:"lo-la",translationCode:"lo-la"},{code:"lt-lt",translationCode:"lt-lt"},{code:"lv-lv",translationCode:"lv-lv"},{code:"mi-nz",translationCode:"mi-nz"},{code:"mk-mk",translationCode:"mk-mk"},{code:"ml-in",translationCode:"ml-in"},{code:"mn-mn",translationCode:"ru-ru"},{code:"mr-in",translationCode:"mr-in"},{code:"ms-my",translationCode:"ms-my"},{code:"mt-mt",translationCode:"mt-mt"},{code:"nb-no",translationCode:"nb-no"},{code:"ne-np",translationCode:"ne-np"},{code:"nl-nl",translationCode:"nl-nl"},{code:"nn-no",translationCode:"nn-no"},{code:"nso-za",translationCode:"af-za"},{code:"or-in",translationCode:"or-in"},{code:"pa-arab-pk",translationCode:"en-gb"},{code:"pa-in",translationCode:"pa-in"},{code:"pl-pl",translationCode:"pl-pl"},{code:"prs-af",translationCode:"en-gb"},{code:"pt-br",translationCode:"pt-br"},{code:"pt-pt",translationCode:"pt-pt"},{code:"quc-latn-gt",translationCode:"es-es"},{code:"quz-pe",translationCode:"quz-pe"},{code:"ro-ro",translationCode:"ro-ro"},{code:"ru-ru",translationCode:"ru-ru"},{code:"rw-rw",translationCode:"en-gb"},{code:"sd-arab-pk",translationCode:"en-gb"},{code:"sk-sk",translationCode:"sk-sk"},{code:"si-lk",translationCode:"en-gb"},{code:"sl-si",translationCode:"sl-si"},{code:"sq-al",translationCode:"sq-al"},{code:"sr-cyrl-ba",translationCode:"sr-cyrl-ba"},{code:"sr-cyrl-rs",translationCode:"sr-cyrl-rs"},{code:"sr-latn-rs",translationCode:"sr-latn-rs"},{code:"sv-se",translationCode:"sv-se"},{code:"sw-ke",translationCode:"en-gb"},{code:"ta-in",translationCode:"ta-in"},{code:"te-in",translationCode:"te-in"},{code:"tg-cyrl-tj",translationCode:"ru-ru"},{code:"th-th",translationCode:"th-th"},{code:"ti-et",translationCode:"am-et"},{code:"tk-tm",translationCode:"ru-ru"},{code:"tn-za",translationCode:"af-za"},{code:"tr-tr",translationCode:"tr-tr"},{code:"tt-ru",translationCode:"tt-ru"},{code:"ug-cn",translationCode:"ug-cn"},{code:"uk-ua",translationCode:"uk-ua"},{code:"ur-pk",translationCode:"ur-pk"},{code:"uz-latn-uz",translationCode:"en-gb"},{code:"vi-vn",translationCode:"vi-vn"},{code:"wo-sn",translationCode:"fr-fr"},{code:"xh-za",translationCode:"af-za"},{code:"yo-ng",translationCode:"en-gb"},{code:"zh-cn",translationCode:"zh-cn"},{code:"zh-hans",translationCode:"zh-cn"},{code:"zh-hant",translationCode:"zh-tw"},{code:"zh-hant-hk",translationCode:"zh-tw"},{code:"zh-hant-tw",translationCode:"zh-tw"},{code:"zh-hk",translationCode:"zh-tw"},{code:"zh-mo",translationCode:"zh-tw"},{code:"zh-tw",translationCode:"zh-tw"},{code:"zu-za",translationCode:"af-za"}]}fetch(){return this.fetchTask||(this.fetchTask=this.fetchCore()),this.fetchTask}get(t){const s=this.getTranslations()[t];if(s)return s;q.warn(`Couldn't find translation for ${t} in ${this.locale?.code}. Falling back to ${this.fallbackLocale?.code}`);const i=this.getFallbackTranslations()[t];return i||(q.error(new is(`Couldn't find translation or fallback translation for ${t}. Is this misspelled?`,this.locale?.code)),"")}getFormatted(t,...e){if(!e)return q.warn("Called localeStrings.getFormatted(...) but didn't pass any arguments to format. Instead, use localeStrings.get(...)"),this.get(t);let s=this.get(t);if(s)for(let r=0;r<e.length;r++){const i=new RegExp("\\{"+r+"\\}","gi"),n=s,a=typeof e[r]=="string"?e[r]:`${e[r]}`;s=s.replace(i,a),s===n&&q.warn(`String translation warning: The value ${this.get(t)} expected a different number of arguments than was supplied (${e.length}).`)}return s}isRtl(){const t=["ar","fa","he","ku","pa","prs","sd","ug","ur"],e=this.ensureLocale();return t.some(s=>e.code.startsWith(s+"-"))}getLocaleName(){if(!this.locale)throw new Error("Locale is not yet loaded.");return this.locale.code}async fetchCore(){const t=this.getSupportedLocale(),e=this.getFallbackLocale(),s=this.loadTranslationFile(t.translationCode);let r=null;e!==t&&(r=this.loadTranslationFile(e.translationCode));const n=await s;if(this.locale={code:t.code,translations:n},r){const a=await r;this.fallbackLocale={code:e.code,translations:a}}else this.fallbackLocale=this.locale;return document.documentElement.lang=this.locale.code,document.documentElement.dir=this.isRtl()?"rtl":"ltr",t.code}async loadTranslationFile(t){const e=window.storeViewModel;if(e?.localeStrings&&t.localeCompare(e.hl,void 0,{sensitivity:"base"})===0)return e.localeStrings;const s=e?.supportedLocaleHashes[t]||"",r=await fetch(`localized-strings/${t}/strings.json?v=${s}`);if(!r.ok)throw new Error("Unable to fetch translation file for locale "+t);return await r.json()}getTranslations(){return this.ensureLocale().translations}getFallbackTranslations(){if(!this.fallbackLocale)throw new Error("Fallback locale must first be initialized via fetch().");return this.fallbackLocale.translations}ensureLocale(){if(!this.locale)throw new Error("Locale must first be initialized via fetch().");return this.locale}getSupportedLocale(){return this.getSupportedLocaleFromQueryString()||this.getSupportedLocaleFromBrowserLanguage()||this.getFallbackLocale()}getSupportedLocaleFromQueryString(){const t=new URLSearchParams(location?.search).get("hl");return t?this.getSupportedLocaleFromLanguage(t):null}getSupportedLocaleFromBrowserLanguage(){return[navigator.language].concat(navigator.languages||[]).filter(t=>!!t&&t.length>0).map(t=>this.getSupportedLocaleFromLanguage(t)).find(t=>!!t)||null}getFallbackLocale(){const t="en-US",e=this.getSupportedLocaleFromLanguage(t);if(!e)throw new Error("Unable to find fallback locale.");return e}getSupportedLocaleFromLanguage(t){const e=t.toLowerCase(),s=this.supportedLocales.find(r=>r.code===e);if(s)return s;if(e.includes("-")){const r=t.toLowerCase()+"-",i=this.supportedLocales.find(n=>n.code.startsWith(r));if(i)return i}return null}}const b=new cs;A.define("sl-icon");const ds=$`
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
`;var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,We=(o,t,e,s)=>{for(var r=s>1?void 0:s?us(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&hs(t,e,r),r};let wt=class extends L{constructor(){super(),this.direction="left"}render(){let o="Common.ScrollLeft.ButtonTitle",t="chevron-left";return this.direction==="right"&&(o="Common.ScrollRight.ButtonTitle",t="chevron-right"),this.direction==="top"&&(o="Common.ScrollToTop.ButtonTitle",t="arrow-up-short"),u`
            <sl-button
                variant="default"
                part="base"
                circle
                title=${b.get(o)}
                aria-label="${b.get(o)}"
            >
                <sl-icon name="${t}" label="${b.getFormatted(o)}" aria-hidden="true" part="icon"></sl-icon>
            </sl-button>
        `}};wt.styles=[Gt,ds];We([m({reflect:!0})],wt.prototype,"direction",2);wt=We([_t("scroll-button")],wt);var ps=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,Ct=(o,t,e,s)=>{for(var r=s>1?void 0:s?ms(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&ps(t,e,r),r};let K=class extends L{constructor(){super(),this.isVisible=!1,this.isShow=!1,this.pageScrollingListener=()=>this.listenPageScrolling()}connectedCallback(){super.connectedCallback(),document.addEventListener("toggleScrollToTopButton",this.scrollToTopButtonVisibility),window.addEventListener("scroll",this.pageScrollingListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("toggleScrollToTopButton",this.scrollToTopButtonVisibility),window.removeEventListener("scroll",this.pageScrollingListener)}listenPageScrolling(){window.requestAnimationFrame(()=>{const o=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop/o>.15?this.isShow=!0:this.isShow=!1})}scrollToTopButtonVisibility(o){this.isVisible=o.detail.isVisible}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}render(){const o=this.isVisible?"visible":"",t=this.isShow?"show":"";return u`    
            <scroll-button
                class="scroll-to-top-button ${o} ${t}"
                direction="top"
                @click="${this.scrollToTop}"
            ></scroll-button>
        `}};K.styles=[Gt,Do];Ct([T()],K.prototype,"isVisible",2);Ct([T()],K.prototype,"isShow",2);Ct([fo({passive:!0})],K.prototype,"listenPageScrolling",1);K=Ct([_t("scroll-to-top-button")],K);function yr(o,t,e,s,r){let i=`calc((${o} - ${t} * (${e} - 1)) / ${e})`;return s?i=`max(${i}, ${s})`:r&&(i=`min(${i}, ${r})`),lt(i)}const gs={type:"wide-card","num-xxl":4,"num-xl":3,"num-lg":2,"num-md":2,"num-sm":1,"num-xs":1},fs={type:"square-and-tall-card","num-xxl":8,"num-xl":6,"num-lg":5,"num-md":4,"num-sm":3,"num-xs":3},bs={type:"collection-reel-group","num-xxl":4,"num-xl":3,"num-lg":2,"num-md":2,"num-sm":1,"num-xs":1},vs={type:"offer-card","num-xl":5,"num-lg":4,"num-md":3,"num-sm":2,"num-xs":1},ws={type:"has-bg-collection-card","num-xxl":5,"num-xl":4,"num-lg":3,"num-md":2},ys={type:"square-details-card","num-xl":4,"num-lg":3,"num-md":2,"num-sm":1},_s={type:"collection-group","num-xxl":4,"num-xl":3,"num-lg":2,"num-sm":1},$s={type:"wide-details-card","num-xxl":4,"num-xl":3,"num-lg":2,"num-sm":1},Cs={type:"ranked-card","num-xl":3,"num-lg":3,"num-md":3,"num-sm":2,"num-xs":1},ks={type:"related-products","num-xxl":5,"num-xl":4,"num-lg":4,"num-md":3,"num-sm":2,"num-xs":2},xs={type:"recommend-card","num-lg":2,"num-sm":1},Ps={type:"footer-column","num-xxl":4,"num-xl":4,"num-lg":3,"num-sm":2,"num-xs":1},qe=[gs,fs,bs,vs,ws,ys,_s,$s,Cs,ks,xs,Ps];function As(){const o=qe.reduce((t,e)=>{const s=e.type;let r="",i=!0;for(const n in e)n!=="type"&&(i&&(r+=`--${s}-num: ${e[n]};`,i=!1),r+=`--${s}-${n}: ${e[n]};`);return t+r},"");return lt(o)}function G(o){const t=qe.reduce((e,s)=>{const r=s.type;for(const i in s)if(i.includes(`-${o}`))return e+`--${r}-num: ${s[i]};`;return e},"");return lt(t)}const Ss=$`
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

        ${As()}

        /**
         * Default exceeds BkreakpointMax.xxl is the first index value that cardsConfig sorts by except key is type
         * We can override exceeding the size of BkreakpointMax.xxl
         */
        --has-bg-collection-card-num: 6;
        --related-products-num: 6;
    }



    ${w(y.xxl)} {
        :host {
            ${G("xxl")}
        }
    }

    ${w(y.xl)} {
        :host {
            --collection-of-tall-max-height: var(--collection-of-tall-max-height-xl);
            ${G("xl")}
        }
    }

    ${w(y.lg)} {
        :host {
            --collection-of-tall-max-height: var(--collection-of-tall-max-height-lg);
            ${G("lg")}
        }
    }

    ${w(y.md)} {
        :host {
            --collection-detail-width-percent: var(--collection-detail-width-percent-md);
            --collection-of-tall-max-height: var(--collection-of-tall-max-height-md);
            ${G("md")}
        }
    }

    ${w(y.sm)} {
        :host {
            ${G("sm")}
        }
    }

    ${w(y.xs)} {
        :host {
            ${G("xs")}
        }
    }

    ${w(y.xs-100)} {
        :host {
            --square-and-tall-card-num: 2;
        }
    }

    ${w(y.xs-250)} {
        :host {
            --square-and-tall-card-num: 1;
        }
    }
`,Es=$`
    :host {
        /**
         * The value of layout-padding will be different for different screen sizes
         * To prevent scroll bars when displaying scroll-btns in a collection
         */
        --layout-padding: 100px;
        --layout-width: calc(100% - var(--layout-padding));
    }

    ${w(ze.lg)} {
        :host {
            --layout-padding: calc(100px + 2 * var(--sl-spacing-3x-large));
        }
    }

    ${w(y.xs)} {
        :host {
            --layout-padding: 20px;
        }
    }
`,Ls=[Ss,Es],Rs=$`
    :host {
        --max-width: 1996px;
        --layout-sm-padding-top: var(--layout-sm-padding-top, var(--sl-spacing-x-large)); /* we use existing value here because it can be overriden in Play Board. See play-board.ts */
        --layout-margin-top: var(--layout-margin-top, var(--sl-spacing-small)); /* we use existing value here because it can be overriden in Play Board. See play-board.ts */
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

    ${Ue()} {
        app-header {
            position: sticky!important;
        }
    }

    main {
        margin-top: var(--layout-margin-top);
        width: var(--layout-width);
        max-width: var(--max-width);
        z-index: 1;
    }

    #routerOutlet {
        /** Extracting this element separately to animate causes a backward flickering issue */
        /** view-transition-name: page-nav; */
        padding: 0;
    }


    ${w(y.sm+70)} {
        .layout-container {
            padding-top: var(--layout-sm-padding-top);
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

        ${w(y.md)} {
            & {
                --shimmer-height: 132px;
            }
        }

        ${w(y.xs)} {
            & {
                --shimmer-height: 120px;
            }
        }
    }

    .footer-shimmer {
        --shimmer-height: 495px;
        --shimmer-padding: 40px;
        --shimmer-border-radius: 0;

        ${w(y.lg)} {
            & {
                --shimmer-height: 788px;
            }
        }

        ${w(y.md)} {
            & {
                --shimmer-height: 828px;
            }
        }

        ${w(y.sm)} {
            & {
                --shimmer-height: 842px;
            }
        }

        ${w(y.xs)} {
            & {
                --shimmer-height: 1237px;
            }
        }
    }
`;var Ts=(o=>(o.Apps="Apps",o.Movies="Movies",o.Games="Games",o.TV="TV",o.Passes="Passes",o))(Ts||{}),Je=(o=>(o.All="all",o.Apps="apps",o.Games="games",o.Movies="movies",o.TV="tv",o.Devices="devices",o.Fonts="fonts",o.Themes="themes",o.Memberships="memberships",o))(Je||{}),Is=(o=>(o.All="all",o.Three="TO3",o.Four="TO4",o.Five="TO5",o.Six="TO6",o.Seven="TO7",o.Eight="TO8",o.Nine="TO9",o.Ten="TO10",o.Eleven="TO11",o.Twelve="TO12",o.Thirteen="TO13",o.Fourteen="TO14",o.Fifteen="TO15",o.Sixteen="TO16",o.Seventeen="TO17",o))(Is||{}),Ms=(o=>(o.All="all",o.BooksAndReference="Books & reference",o.Business="Business",o.DeveloperTools="Developer tools",o.Education="Education",o.Entertainment="Entertainment",o.FoodAndDining="Food & dining",o.GovernmentAndPolitics="Government & politics",o.HealthAndFitness="Health & fitness",o.KidsAndFamily="Kids & family",o.Lifestyle="Lifestyle",o.Medical="Medical",o.MultimediaDesign="Multimedia design",o.Music="Music",o.NavigationAndMaps="Navigation & maps",o.NewsAndWeather="News & weather",o.PersonalFinance="Personal finance",o.Personalization="Personalization",o.PhotoAndVideo="Photo & video",o.Productivity="Productivity",o.Security="Security",o.Shopping="Shopping",o.Social="Social",o.Sports="Sports",o.Travel="Travel",o.UtilitiesAndTools="Utilities & tools",o.ActionAndAdventure="Action & adventure",o.CardAndBoard="Card & board",o.Casino="Casino",o.Classics="Classics",o.Companion="Companion",o.Educational="Educational",o.FamilyAndKids="Family & kids",o.Fighting="Fighting",o.MultiplayerOnlineBattleArena="Multi-player Online Battle Arena",o.Other="Other",o.Platformer="Platformer",o.PuzzleAndTrivia="Puzzle & trivia",o.RacingAndFlying="Racing & flying",o.Roleplaying="Role playing",o.Shooter="Shooter",o.Simulation="Simulation",o.Strategy="Strategy",o.Tools="Tools",o.Video="Video",o.Word="Word",o.ActionAdventure="Action/Adventure",o.Animation="Animation",o.Anime="Anime",o.Comedy="Comedy",o.Documentary="Documentary",o.Family="Family",o.ForeignIndependent="Foreign/Independent",o.Horror="Horror",o.Romance="Romance",o.RomanticComedy="Romantic Comedy",o.SciFiFantasy="Sci-Fi/Fantasy",o.ThrillerMystery="Thriller/Mystery",o.TVMovies="TV Movies",o.DocumentaryBio="Documentary/Bio",o.FamilyChildren="Family/Children",o.Movies="Movies",o.News="News",o.RealityTV="Reality TV",o.Soap="Soap",o.Accessories="Accessories",o.MicrosoftSurface="Microsoft Surface",o.PCsAndTablets="PCs & tablets",o.VirtualReality="Virtual Reality",o.WindowsPhone="Windows Phone",o.Xbox="Xbox",o.ForHomeAndStudents="HomeStudents",o.ForMac="Mac",o.ForSmallBusiness="SmallBusiness",o.Office365="Office365",o.Office365Renewal="Office365Renewal",o.OfficeApps="OfficeApps",o.XboxLive="XboxLive",o))(Ms||{}),Os=(o=>(o.All="all",o.Free="Free",o.Paid="Paid",o.Sale="Sale",o))(Os||{}),zs=(o=>(o.All="all",o.GamePass="GamePass",o))(zs||{}),Us=(o=>(o[o.MostRecent=1]="MostRecent",o[o.HighestRated=3]="HighestRated",o[o.LowestRated=4]="LowestRated",o[o.MostHelpful=5]="MostHelpful",o))(Us||{}),Ns=(o=>(o.HomeSpotlight="Home/Spotlight/Home_Spotlight_T1_T2",o.AppsSpotlight="Apps/Spotlight/Apps_Spotlight_T1_T2",o.GamingSpotlight="Gaming/Spotlight/Gaming_Spotlight_T1_T2",o.MoviesSpotlight="Movies_TV/Spotlight/Movies_TV_Spotlight_Mrkt_V2",o.MoviesSpotlightUS="Movies_TV/Spotlight/v2_Movies_TV_Spotlight_en-US",o.TopFree="TopFree",o.TopPaid="TopPaid",o.TopDeals="Deal",o.GetStarted="GettingStartedApps",o.EssentialApps="MerchandiserContent/Apps/Primary/EssentialApps/_EssentialApps",o.ExploreAWorldOfMusic="MerchandiserContent/Apps/Primary/ExploreAWorldOfMusic/_ExploreAWorldOfMusic",o.InlineSpotlight="Home/InlineSpotlight/Home_InlineSpotlight1_T1_T2",o.TopGrossing="TopGrossing",o.CasualPCGames="MerchandiserContent/Games/Primary/CasualPCGames/_CasualPCGames",o.NewMovies="video.newreleases.movies",o.Sale499Movies="video.collections.sale_499specials",o.HarryPotterMovies="video.collections.promo_harrypotter",o.NewAndRising="NewAndRising",o.NewAndNotableGames="MerchandiserContent/Games/Primary/NewAndNotablePCGames/_NewAndNotablePCGames",o.PuzzleGames="MerchandiserContent/Games/Primary/PuzzlePCGames/_PuzzlePCGames",o.WorldBuildingPCGames="MerchandiserContent/Games/Primary/BuildYourOwnWorldPCGames/_BuildYourOwnWorldPCGames",o.RacingGames="MerchandiserContent/Games/Primary/RacingGames/_RacingGames",o.ClassicGames="MerchandiserContent/Games/Primary/ClassicPCGames/_ClassicPCGames",o.GamesForKids="MerchandiserContent/Games/Primary/PCGamesForKids/_PCGamesForKids",o.CorePCGames="MerchandiserContent/Games/Primary/CorePCGames/_CorePCGames",o.AppsForGamers="MerchandiserContent/Apps/Primary/AppsForGamers/_AppsForGamers",o.WeeklyGameDeals="MerchandiserContent/Games/Primary/WklyPCGamesDeals/_WklyPCGamesDeals",o.BestProductivityApps="MerchandiserContent/Apps/Primary/BestProductivityApps/_BestProductivityApps",o.BestCreativityApps="MerchandiserContent/Apps/Primary/BestCreativityApps/_BestCreativityApps",o.BestPhotoAndVideoEditingApps="MerchandiserContent/Apps/Primary/BestPhotoAndVideoEditingApps/_BestPhotoAndVideoEditingApps",o.UtilityApps="MerchandiserContent/Apps/Primary/MostPopularUtilityApps/_MostPopularUtilityApps",o.TopRentedMovies="video.toprented.movies",o.FeaturedMovies="video.featured.movies",o.TopSellingTvShows="video.topselling.tv",o.TopSellingMovies="video.topselling.movies",o.NewTvShows="video.newreleases.tv",o.DisneyMovies="video.collections.promo_disneymovies",o.PrimeVideoOriginals="MerchandiserContent/MMTV/Exp/MMTVUMSPrimeVideo/_MMTVUMSPrimeVideo",o.MoviePromoBundles="video.collections.promo_bundles",o.EverythingMarvel="video.collections.promo_marvelmovies",o.HomeCollectionGroup="MerchandiserContent/HomePage/Collection C - Home Page/CollectionCHomePage",o.AppsCollectionGroup="MerchandiserContent/Apps/Collection-C/CollectionCAppsPage",o.GamingCollectionGroup="MerchandiserContent/Games/Collection-C/CollectionCGamesPage",o.MoviesCollectionGroup="MerchandiserContent/M-TV/Collection-C/List_of_Collections/MTV_Page_List of Collections_WW",o.BestVideoStreamingApps="MerchandiserContent/Apps/Primary/BestVideoStreamingApps/_BestVideoStreamingApps",o.SocialNetworkingApps="MerchandiserContent/Apps/Primary/ConnectAndStayInformed/_ConnectAndStayInformed",o))(Ns||{}),Vs=(o=>(o.Home="Home/Spotlight/Home_Spotlight_T1_T2",o.Apps="Apps/Spotlight/Apps_Spotlight_T1_T2",o.Gaming="Gaming/Spotlight/Gaming_Spotlight_T1_T2",o.Movies="Movies_TV/Spotlight/Movies_TV_Spotlight_Mrkt_V2",o.MoviesUS="Movies_TV/Spotlight/v2_Movies_TV_Spotlight_en-US",o))(Vs||{}),V=(o=>(o.BadRequest="BadRequest",o.InvalidProductId="InvalidProductId",o.NotFound="NotFound",o.ProductNotFound="ProductNotFound",o.CollectionNotFound="CollectionNotFound",o.ProductDelisted="ProductDelisted",o.UnhandledError="UnhandledError",o))(V||{});const qt=Symbol.for("app-tools::log::1.x");globalThis[qt]={setDebug:Ds,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Ds(o){globalThis[qt].debug=!!o}function Fs(o,t){globalThis[qt].debug&&(console.groupCollapsed(`[app-tools] ${o}`),t&&console.log(t),console.groupEnd())}function Bs(o){return(t,e)=>{Fs(`${o}: ${t}`,e)}}const R=Bs("router");class Hs extends Event{constructor(t){super("route-changed"),this.context=t}}class Gs extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(e=>({...e,urlPattern:new URLPattern({pathname:e.path,baseURL:window.location.href,search:"*",hash:"*"})})),R("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return R(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const e of this.routes){const s=e.urlPattern.exec(t);if(s){const{title:r}=e,i=Object.fromEntries(new URLSearchParams(t.search)),n=s?.pathname?.groups??{};return this.context={url:t,title:typeof r=="function"?r({params:n,query:i,url:t}):r,params:n,query:i},e}}return R(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Hs(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(i=>i.tagName==="A");if(!e||!e.href)return;const s=new URL(e.href);if(this.url.href===s.href||s.host!==window.location.host||e.hasAttribute("download")||e.href.includes("mailto:"))return;const r=e.getAttribute("target");r&&r!==""&&r!=="_self"||(t.preventDefault(),this.navigate(s))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,e={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let s=this._matchRoute(t)||this._matchRoute(this.fallback);R(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let r=this._collectPlugins(s);for(const i of r)try{const n=await i?.shouldNavigate?.(this.context);n&&(await n.condition()||(t=new URL(n.redirect,this.baseUrl),s=this._matchRoute(t)||this._matchRoute(this.fallback),r=this._collectPlugins(s),R("Redirecting",{context:this.context,route:this.route})))}catch(n){throw R(`Plugin "${i.name}" error on shouldNavigate hook`,n),n}if(this.route=s,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const i of r)try{await i?.beforeNavigation?.(this.context)}catch(n){throw R(`Plugin "${i.name}" error on beforeNavigation hook`,n),n}e?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):e.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const i of r)try{await i?.afterNavigation?.(this.context)}catch(n){throw R(`Plugin "${i.name}" error on afterNavigation hook`,n),n}}}function fe(o){return{name:"redirect",shouldNavigate:t=>({condition:()=>!1,redirect:typeof o=="function"?o(t):o})}}function z(){return window.storeViewModel}class js{async getJson(t,e){const s=await this.getResponse(t,e);return s.status===204?null:await s.json()}async getString(t,e){return await(await this.getResponse(t,e)).text()}async post(t,e){const s=await fetch(t,{method:"POST",body:e?JSON.stringify(e):void 0});if(!s.ok)throw new J("HTTP POST resulted in non-successful status code "+s.status,s.status);return await s.json()}async postJson(t,e){const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},r=await fetch(t,s);if(!r.ok)throw new J("HTTP POST resulted in non-successful status code "+r.status,r.status)}async postFormData(t,e){const s=await fetch(t,{method:"POST",body:e});if(!s.ok)throw new J("HTTP POST resulted in non-successful status code "+s.status,s.status)}async getResponse(t,e){let s=t;if(e){const i=new URLSearchParams;Object.entries(e).filter(n=>n[1]!==void 0&&n[1]!==null).forEach(n=>i.append(n[0],n[1]===null?"":n[1])),s+="?"+i.toString()}const r=await fetch(s);if(!r.ok)throw r.status===404||r.status===410?new Ws("HTTP GET resulted in 404",r.status):new J("HTTP GET resulted in non-successful status code "+r.status,r.status);return r}}class J extends Error{constructor(t="",e,s){super(t,s),this.statusCode=e}}class Ws extends J{constructor(t="",e,s){super(t,e,s)}}class qs extends js{constructor(t){super(),this.apiUrl=t,this.markets=new Map,this.cachedMarket=null}get market(){return this.cachedMarket?.market||""}getAutoSuggestions(t){const e="/api/products/getAutosuggestions",s={prefix:t};return this.getJsonWithMarketLocale(e,s)}async postReportedReview(t,e,s,r,i,n,a){const l=this.apiUrl+"/api/products/concern/review",c=await this.getCachedMarket(),h={ConcernCategory:s,ConcernText:r,ProductId:t,UserName:i,UserEmail:n,ReviewId:e,UserRequestsNotification:a,Locale:b.getLocaleName(),Market:c.market};this.postJson(l,h)}search(t,e,s,r,i,n,a){const l="/api/products/search",c={query:t,mediaType:e,age:s,price:r,category:i,subscription:n,cursor:a};return this.getJsonWithMarketLocale(l,c)}searchByPublisher(t,e){const s="/api/Products/SearchByPublisherName",r={publisherName:t,cursor:e};return this.getJsonWithMarketLocale(s,r)}searchFiltered(t){const e="/api/Products/GetFilteredProducts",s={category:t};return this.getJsonWithMarketLocale(e,s)}getPromotionProducts(t,e,s){const r=z();if(r&&r.spotlight?.title===t)return Promise.resolve(r.spotlight);const i="/api/reco/getPromotionProducts",n={collectionName:t,pgNo:e||1,noItems:s||24};return this.getJsonWithMarketLocale(i,n)}getComputedProductsList(t,e,s,r,i,n,a,l,c){const h="/api/Reco/GetComputedProductsList",d={listName:t,pgNo:e||1,noItems:s||25,filteredCategories:r||"AllProducts",mediaType:i,discountFilter:n,subscriptionFilter:a,numPlayersFilter:l,subcategoryFilter:c};return this.getJsonWithMarketLocale(h,d)}getRelatedProductsList(t,e,s,r,i){const n=`/api/Reco/GetRelatedProductsList/${t}`,a={noItems:s,pgNo:e||1,productType:r,filteredCategories:i};return this.getJsonWithMarketLocale(n,a)}getMerchandiserContentProductList(t,e,s,r){const i="/api/Reco/GetMerchandiserContentProductList",n={collectionName:t,pgNo:e||1,noItems:s||22,filteredCategories:r||"AllProducts"};return this.getJsonWithMarketLocale(i,n)}getListOfCollections(t,e,s){const r="/api/Reco/GetListOfCollections",i={collectionName:t,pgNo:e||1,noItems:s||25};return this.getJsonWithMarketLocale(r,i)}getMovieProductsList(t,e,s,r,i,n){const a="/api/Reco/GetMovieProductsList",l={listName:t,pgNo:e||1,noItems:s||25,mediaType:"movies",filteredCategories:r||"AllProducts",...i!==void 0&&{networkFilter:i},...n!==void 0&&{studioFilter:n}};return this.getJsonWithMarketLocale(a,l)}getMovieSearchProductsList(t,e,s,r,i){const n="/api/Reco/GetMovieSearchProductsList",a={listName:t,pgNo:e||1,noItems:s||25,filteredCategories:r||"all",studio:i||"all",mediaType:"movies"};return this.getJsonWithMarketLocale(n,a)}getCollectionFilters(t,e){const s="/api/Reco/GetCollectionFiltersList",r={listName:t,mediaType:e||Je.Apps};return this.getJsonWithMarketLocale(s,r)}getMovieGenresForCurrentMarket(){const t="/api/pages/getMovieGenresByMarket";return this.getJsonWithMarketLocale(t)}getFeatureFlags(t){return this.getJsonWithMarketLocale("/api/settings/flags",{sessionId:t})}getProductDetails(t,e=!1){const s=`/api/ProductsDetails/GetProductDetailsById/${t}`;return this.getJsonWithMarketLocale(s,{includeStructured:e})}getPdpPage(t){const e=z();if(e?.productDetails&&t.localeCompare(e.productDetails.productId,void 0,{sensitivity:"base"})===0)return Promise.resolve(e.productDetails);const s="/api/pages/pdp",r={productId:t};return this.getJsonWithMarketLocale(s,r)}getChrome(){const t=z();if(t?.chrome)return Promise.resolve(t.chrome);const e="/api/pages/chrome";return this.getJsonWithMarketLocale(e)}getPageCollections(t){const e=z();if(e?.collectionIds&&e.pageName===t)return Promise.resolve(e.collectionIds);const s="/api/pages/collections",r={pageName:t};return this.getJsonWithMarketLocale(s,r)}getPromoProductDetails(t){const e=`/api/ProductsDetails/GetPromoProductDetailsById/${t}`;return this.getJsonWithMarketLocale(e)}getMovieContributorList(t){const e=`/api/ProductsDetails/GetMovieContributorList/${t}`;return this.getJsonWithMarketLocale(e)}getTVEpisodesList(t){const e=`/api/ProductsDetails/GetTVEpisodesList/${t}`;return this.getJsonWithMarketLocale(e)}getReviewsSummary(t,e){const s=`/api/Products/GetReviewsSummary/${t}`;return this.getJsonWithMarketLocale(s,{catalogSource:e})}getReviews(t,e,s,r){const i=`/api/products/getReviews/${t}`,n={orderBy:e,pgNo:s,noItems:r};return this.getJsonWithMarketLocale(i,n)}async getCachedMarket(t){const e=z();if(e?.marketDetails)return this.cachedMarket=e.marketDetails,e.marketDetails;const s=t??"default";let r=this.markets.get(s);if(!r){const i={gl:new URLSearchParams(location.search||"").get("gl")};r=this.getJson("/api/settings/market",i),this.markets.set(s,r);const n=await r;t||(this.cachedMarket=n)}return r}getJson(t,e){const s=this.apiUrl+t;return super.getJson(s,e)}async getJsonWithMarketLocale(t,e,s,r){const n={gl:(await this.getCachedMarket(r)).market,hl:s??b.getLocaleName(),...e||{}};return this.getJson(t,n)}}const U=new qs("");class be{static setCookie(t,e,s){document.cookie=t+`= ${e}; expires=${s.toUTCString()}; path=/`}static getCookie(t){return new RegExp(`${t}=([^;]+)`).exec(document.cookie)?.[1]}static deleteCookie(t){const e=new Date;e.setTime(e.getTime()+-1*24*60*60*1e3),document.cookie=t+`=; expires=${e.toUTCString()}; path=/`}}class Js{constructor(){this.sessionExpiresKey="exp-session-expires",this.sessionIdKey="exp-session-id",this.cachedFlags=null}async getFlags(){return this.cachedFlags||(this.cachedFlags=await U.getFeatureFlags(this.sessionId),this.restoreSession(this.cachedFlags)),this.cachedFlags}restoreSession(t){this.sessionExpired&&this.newSession(t),this.setSessionCookies()}setSessionCookies(){this.sessionId&&(be.getCookie(this.sessionIdKey)||be.setCookie(this.sessionIdKey,this.sessionId,this.sessionExpireDate))}newSession(t){const e=new Date;e.setTime(e.getTime()+t.sessionDuration),localStorage.setItem(this.sessionIdKey,t.sessionId),localStorage.setItem(this.sessionExpiresKey,e.toUTCString())}get sessionExpired(){return new Date>=this.sessionExpireDate}get sessionId(){return localStorage.getItem(this.sessionIdKey)||""}get sessionExpireDate(){const t=localStorage.getItem(this.sessionExpiresKey);return t?new Date(t):new Date}}const Ke=new Js;String.prototype.capitalize=function(){return this?this.charAt(0).toUpperCase()+this.slice(1):this};String.prototype.equalsIgnoreCase=function(o){return this?.toLowerCase()===o?.toLowerCase()};String.prototype.toEnum=function(o){for(let t of[this.toLowerCase(),this.toLowerCase().capitalize(),this.toUpperCase()]){let e=o[t];if(e)return e}throw new Error(`Can't cast value ${this} to enum ${typeof o}`)};class Ks{constructor(){this.scrollEndHandler=()=>this.scrollEnded(),this.desiredScrollPosition=null,this.desiredScrollBehavior="smooth",this.resizeObserver=null,this.resolver=null,this.periodicCheckHandle=0,this.timeoutHandle=0}scrollTo(t,e="smooth",s=1e3){if(this.resolver)throw new Error("Scroll operation already in progress. Call .disconnect() before starting a new scroll operation.");return new Promise(r=>{window.addEventListener("scrollend",this.scrollEndHandler);const i=zo(()=>this.pageResized(),200);this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(document.body),this.periodicCheckHandle=setInterval(()=>this.periodicCheckForDesiredPosition(),500),this.timeoutHandle=setTimeout(()=>this.timeoutExpired(),s),this.desiredScrollPosition=t,this.desiredScrollBehavior=e,this.resolver=r,this.scrollToTarget()})}disconnect(){window.removeEventListener("scrollend",this.scrollEndHandler),this.desiredScrollPosition=null,this.resizeObserver?.disconnect(),clearInterval(this.periodicCheckHandle),clearTimeout(this.timeoutHandle),this.resolver?.(window.scrollY),this.resolver=null}scrollEnded(){this.desiredScrollPosition===null||window.scrollY===this.desiredScrollPosition?this.disconnect():window.scrollTo({top:this.desiredScrollPosition,behavior:this.desiredScrollBehavior})}pageResized(){this.desiredScrollPosition!==null&&window.scrollY!==this.desiredScrollPosition&&this.scrollToTarget()}periodicCheckForDesiredPosition(){this.desiredScrollPosition!==null&&window.scrollY!==this.desiredScrollPosition?this.scrollToTarget():this.disconnect()}timeoutExpired(){this.scrollToTarget(),this.disconnect()}scrollToTarget(){this.desiredScrollPosition!==null&&window.scrollTo({top:this.desiredScrollPosition,behavior:this.desiredScrollBehavior})}}globalThis.URLPattern||await f(()=>import("./index-d961e0b8.js"),[]);class Ys{constructor(){this._route=null,this.lastNavigatedProduct=null,this.localeStringsFetch=b.fetch(),this.marketFetch=U.getCachedMarket();const t=[new Rt(()=>Promise.allSettled([this.localeStringsFetch,this.marketFetch]))];z().isEmbargoedMarket&&t.push(fe(e=>`/error/UnavailableInMarket?hideHome=true&hideDescription=true&hideErrorCode=true&${new URLSearchParams(e.query).toString()}`)),this.router=new Gs({plugins:t,fallback:"/404",routes:[this.createRoute("/home",()=>b.get("NavigationBar.Home"),()=>u`<home-page></home-page>`,()=>f(()=>import("./home-4a74d35c.js"),["assets/js/home-4a74d35c.js","assets/js/market-collection-service-6f451765.js","assets/js/paged-list-43c2f330.js"])),this.createRedirect("/","/home",()=>f(()=>import("./home-4a74d35c.js"),["assets/js/home-4a74d35c.js","assets/js/market-collection-service-6f451765.js","assets/js/paged-list-43c2f330.js"])),this.createRoute("/apps",()=>b.get("NavigationBar.Apps"),()=>u`<apps-page></apps-page>`,()=>f(()=>import("./apps-34659dac.js"),["assets/js/apps-34659dac.js","assets/js/paged-list-43c2f330.js","assets/js/market-collection-service-6f451765.js"])),this.createRoute("/games",()=>b.get("NavigationBar.Games"),()=>u`<gaming-page></gaming-page>`,()=>f(()=>import("./gaming-8d4ff4dd.js"),["assets/js/gaming-8d4ff4dd.js","assets/js/paged-list-43c2f330.js","assets/js/market-collection-service-6f451765.js"])),this.createRoute("/movies",()=>b.get("NavigationBar.MoviesAndTV"),()=>u`<movies-page></movies-page>`,()=>f(()=>import("./movies-5148e35f.js"),["assets/js/movies-5148e35f.js","assets/js/paged-list-43c2f330.js","assets/js/market-collection-service-6f451765.js"])),this.createRoute("/search",e=>`${decodeURIComponent(e.query?.query||"")}`,e=>u`<search-results-page query="${decodeURIComponent(e.query?.query||"")}"></search-results-page>`,()=>f(()=>import("./search-results-1b60abc7.js"),["assets/js/search-results-1b60abc7.js","assets/js/repeat-18af36e2.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/style-map-db7a8965.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/not-found-ab606646.js","assets/js/spacing.styles-ac719b05.js","assets/js/paged-list-43c2f330.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/search/publisher",e=>`${decodeURIComponent(e.query?.name||"")}`,e=>u`<search-results-publisher-page name="${decodeURIComponent(e.query?.name||"")}"></search-results-publisher-page>`,()=>f(()=>import("./search-results-publisher-6c3e61a4.js"),["assets/js/search-results-publisher-6c3e61a4.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/paged-list-43c2f330.js"])),this.createRoute("/collections/:mediaType/category/:category",e=>`${e.params?.category||""}`,e=>u`<collections-page collection-name="TopFree" collection-type="computed" media-type="${decodeURIComponent(e.params?.mediaType||"")}" category="${decodeURIComponent(e.params?.category||"")}"></collections-page>`,()=>f(()=>import("./collections-8ddcdc1e.js"),["assets/js/collections-8ddcdc1e.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/paged-list-43c2f330.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/related/:id",e=>this.lastNavigatedProduct&&e.params?.id===this.lastNavigatedProduct?.productId?b.getFormatted("RelatedProducts.Title",this.lastNavigatedProduct.title):document.title,e=>u`<related-products-page id="${e.params?.id||""}"></related-products-page>`,()=>f(()=>import("./related-products-4db60d46.js"),["assets/js/related-products-4db60d46.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/paged-list-43c2f330.js"])),this.createRoute("/detail/:id",e=>this.lastNavigatedProduct&&e.params?.id===this.lastNavigatedProduct?.productId?this.lastNavigatedProduct.title:e.query?.name||e.params?.id||"",e=>u`<product-details-page product-id="${e.params?.id||""}" product-name="${decodeURIComponent(e.query?.name||"")}"></product-details-page>`,()=>f(()=>import("./product-details-01179dab.js"),["assets/js/product-details-01179dab.js","assets/js/repeat-18af36e2.js","assets/js/product-collection-3fa5ff54.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/chunk.OHYIWJSO-b3067601.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/chunk.SKOOBYPV-14bc18ae.js","assets/js/platform-2180e403.js","assets/js/paged-list-43c2f330.js","assets/js/spacing.styles-ac719b05.js"]),[new Qs,new Zs]),this.createRoute("/404/:itemType?",e=>b.getFormatted(`Error.${e.params?.itemType?.capitalize()||""}NotFound.Title`,e.query?.id||""),e=>u`
                        <not-found-page
                            item-id="${e.query?.id||""}"
                            item-name="${e.query?.name||""}"
                            item-type="${P(e.params?.itemType)}">
                        </not-found-page>`,()=>f(()=>import("./not-found-ab606646.js"),["assets/js/not-found-ab606646.js","assets/js/spacing.styles-ac719b05.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js"])),this.createRoute("/collections/computed/:mediaType(apps|games|movies|tv)?/:collectionName+",e=>e.params?.collectionName||"",e=>u`<collections-page collection-name="${decodeURIComponent(e.params?.collectionName||"")}" collection-type="computed" media-type="${e.params?.mediaType}"></collections-page>`,()=>f(()=>import("./collections-8ddcdc1e.js"),["assets/js/collections-8ddcdc1e.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/paged-list-43c2f330.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/collections/browse/:collectionName+",e=>decodeURIComponent(e.params?.collectionName||""),e=>u`<collections-browse collection-name="${decodeURIComponent(e.params?.collectionName||"")}"></collections-browse>`,()=>f(()=>import("./collections-browse-d745ac13.js"),["assets/js/collections-browse-d745ac13.js","assets/js/collection-group-77279367.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/collections-8ddcdc1e.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/paged-list-43c2f330.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/collections/movies/:collectionName+",e=>e.params?.collectionName||"",e=>u`<collections-page collection-name="${decodeURIComponent(e.params?.collectionName||"")}" collection-type="movies" category="${e.query?.category||""}" media-type="movies"></collections-page>`,()=>f(()=>import("./collections-8ddcdc1e.js"),["assets/js/collections-8ddcdc1e.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/paged-list-43c2f330.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/collections/games/category/:category",()=>"",e=>u`<collections-page collection-name="TopPaid" collection-type="computed" media-type="games" category="${decodeURIComponent(e.params?.category||"")}"></collections-page>`,()=>f(()=>import("./collections-8ddcdc1e.js"),["assets/js/collections-8ddcdc1e.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/paged-list-43c2f330.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/collections/category/:category",()=>"",e=>u`<collections-page collection-name="TopFree" collection-type="computed" media-type="apps" category="${decodeURIComponent(e.params?.category||"")}"></collections-page>`,()=>f(()=>import("./collections-8ddcdc1e.js"),["assets/js/collections-8ddcdc1e.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/paged-list-43c2f330.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/collections/:collectionName+",e=>e.params?.collectionName||"",e=>u`<collections-page collection-name="${e.params?.collectionName||""}" collection-type="curated"></collections-page>`,()=>f(()=>import("./collections-8ddcdc1e.js"),["assets/js/collections-8ddcdc1e.js","assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/paged-list-43c2f330.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/filter-menu.styles-d60fd63e.js"])),this.createRoute("/badge/:productId?",()=>b.get("BadgePage.Title"),e=>u`<app-badge-page product-name="${decodeURIComponent(e.query?.name||"")}" product-id="${e.params?.productId||""}"></app-badge-page>`,()=>f(()=>import("./app-badge-62e8273d.js"),["assets/js/app-badge-62e8273d.js","assets/js/product-collection-3fa5ff54.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-27bbdc35.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/chunk.MHCKU7CX-df67fb6b.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js","assets/js/chunk.MA3AIOTI-4dcdc6dc.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/alert-service-619e8956.js"])),this.createRoute("/editorial",e=>`${e.query?.title||""}`,e=>u`<editorial-page uri="${decodeURIComponent(e.query?.url||"")}" title="${e.query?.title||""}"></editorial-page>`,()=>f(()=>import("./editorial-e6a1fb61.js"),["assets/js/editorial-e6a1fb61.js","assets/js/chunk.OHYIWJSO-b3067601.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/alert-service-619e8956.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js"])),this.createRoute("/error/:code?",e=>b.getFormatted(`Error.${e.params?.code||V.UnhandledError}.Title`,e.query?.id||""),e=>u`
                        <error-page item-id="${e.query?.id||""}"
                                    item-name="${e.query?.name||""}"
                                    error-code="${e.params?.code||V.UnhandledError}"
                                    ?hide-home="${e.query?.hideHome==="true"||!1}"
                                    ?hide-description="${e.query?.hideDescription==="true"||!1}"
                                    ?hide-error-code="${e.query?.hideErrorCode==="true"||!1}">
                        </error-page>`,()=>f(()=>import("./error-b32e65dc.js"),["assets/js/error-b32e65dc.js","assets/js/spacing.styles-ac719b05.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js"])),...this.createDevRoutes()]}),window.addEventListener("popstate",()=>this.navigatedBackwards()),this.addEventListener("route-changed",e=>this.routeChanged(e)),window.history.scrollRestoration="manual"}createDevRoutes(){let t=[];if(z().environmentName!=="production"){const s=this.createRoute("/play-board",()=>"",()=>u`<play-board></play-board>`,()=>f(()=>import("./play-board-95466532.js"),["assets/js/play-board-95466532.js","assets/js/spacing.styles-ac719b05.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/spotlight-control-f9fc4617.js","assets/js/css-function-27cf3c1f.js","assets/js/image-helper-99359f42.js"])),r=this.createRoute("/play-board-tester",()=>"",()=>u`<play-board-tester></play-board-tester>`,()=>f(()=>import("./play-board-tester-f17632b3.js"),["assets/js/play-board-tester-f17632b3.js","assets/js/spacing.styles-ac719b05.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/repeat-18af36e2.js","assets/js/style-map-db7a8965.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/chunk.MA3AIOTI-4dcdc6dc.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.HDLULROG-a171dd0c.js"]));t.push(s,r)}return t}get route(){return this._route}addEventListener(t,e){this.router.addEventListener(t,e)}removeEventListener(t,e){this.router.removeEventListener(t,e)}renderRoute(){return this.router.render()}navigate(t,e){if(e)this.router.navigate(t+"?"+e.toString());else{const s=new URLSearchParams(t.split("?")[1]);!s.has("hl")||!s.has("gl")?this.router.navigate(t+this.router.context.url.search):this.router.navigate(t)}}getLocalizedUrl(t,e){const s=new URL(t,window.location.origin);s.searchParams.has("hl")||s.searchParams.append("hl",b.getLocaleName()),!s.searchParams.has("gl")&&U.market&&s.searchParams.append("gl",U.market);for(const[r,i]of e?.entries()||[])s.searchParams.append(r,i);return s.pathname+s.search}createRoute(t,e,s,r,i=[]){return i.push(new Rt(()=>r())),i.push(new Xs(e)),i.push(new tr),{path:t,title:"",render:n=>s(n),plugins:i}}createRedirect(t,e,s,...r){return{title:"",path:t,plugins:[fe(e),new Rt(()=>s()),...r]}}navigatedBackwards(){const t="back-transition";document.documentElement.classList.add(t),window.history.scrollRestoration="manual"}routeChanged(t){t.previous=this._route;const e=!t.previous&&performance.getEntriesByType("navigation").some(i=>i instanceof PerformanceNavigationTiming&&i.type==="back_forward");t.isBackForwardNavigation=document.documentElement.classList.contains("back-transition")||e,t.context.data=t.context.data||{},t.context.data.isBackForwardNavigation=t.isBackForwardNavigation;let s=!1,r=!1;t.context.url.searchParams.forEach((i,n)=>{const a=n.toLowerCase();a==="hl"?(a!==n&&(t.context.url.searchParams.delete(n),t.context.url.searchParams.set("hl",i)),s=!0):a==="gl"&&(a!==n&&(t.context.url.searchParams.delete(n),t.context.url.searchParams.set("gl",i)),r=!0)}),this._route=t.context,(!s||!r)&&(s||t.context.url.searchParams.set("hl",b.getLocaleName()),!r&&U.market&&t.context.url.searchParams.set("gl",U.market),window.history.replaceState(null,"",t.context.url)),Ke.setSessionCookies(),t.context.url.pathname==="/home"&&(document.title=b.getFormatted("Common.PageTitle",b.get("NavigationBar.Home"))),q.trackPageView(t.context.url,t.previous?.url,t.context.params)}}class Rt{constructor(t){this.fn=t}beforeNavigation(){return this.fn()}}class Xs{constructor(t){this.pageNameGetter=t}beforeNavigation(t){const e=this.pageNameGetter(t);e?t.title=b.getFormatted("Common.PageTitle",e):t.title=b.get("Common.AppName")}}class Qs{beforeNavigation(t){const e=t.params.id;["XPDC1025XC905J","XPDDSNXVBBX02L","XPFM9JSPWG7ZKK"].includes(e.toUpperCase())&&(t.query.gl.toUpperCase()==="JP"?t.params.id="CFQ7TTC0K5BC":t.params.id="CFQ7TTC0K5BF")}afterNavigation(t){const e=window.location.href.replace(/(?<=detail\/)(.+)(?=\?)/,t.params.id);window.history.replaceState({},"",e.toString())}}class Zs{shouldNavigate(t){const e=window.storeViewModel;return{condition:()=>!(e.errorCode&&e.itemId===t.params?.id),redirect:this.getRedirectUrl(e)}}getRedirectUrl(t){const e=new URL("/",window.location.origin);return t.itemId&&e.searchParams.set("id",t.itemId),t.itemName&&e.searchParams.set("name",t.itemName),t.errorCode===V.NotFound?`/404${e.search}`:t.errorCode===V.ProductNotFound||t.errorCode===V.ProductDelisted?`/404/product${e.search}`:t.errorCode===V.CollectionNotFound?`/404/collection${e.search}`:`/error/${t.errorCode}${e.search}`}}const Jt=class C{static get scrollPositionByUrl(){return C._scrollPositionByUrl||(window.addEventListener("beforeunload",()=>C.saveScrollPositionToLocalStorage()),C._scrollPositionByUrl=C.loadScrollPositionsFromLocalStorage()),C._scrollPositionByUrl}beforeNavigation(){S.route?.url&&C.scrollPositionByUrl.set(S.route.url.pathname+S.route.url.search,window.scrollY)}afterNavigation(t){const e=t.data?.isBackForwardNavigation&&C.scrollPositionByUrl.get(t.url.pathname+t.url.search)||0;C.scrollOperation?.disconnect();const s=new Ks;C.scrollOperation=s,e===0?s.scrollTo(0):s.scrollTo(0,"instant").then(()=>s.scrollTo(e))}static saveScrollPositionToLocalStorage(){const t=Array.from(C.scrollPositionByUrl);localStorage.setItem(C.localStorageScrollPositionKey,JSON.stringify(t))}static loadScrollPositionsFromLocalStorage(){try{if(!performance.getEntriesByType("navigation").some(r=>r instanceof PerformanceNavigationTiming&&r.type==="back_forward"))return new Map;const e=localStorage.getItem(C.localStorageScrollPositionKey)||"[]",s=JSON.parse(e);return new Map(s)}catch(t){return console.warn("Unable to deserialize scroll positions from local storage.",t),new Map}}};Jt.localStorageScrollPositionKey="scrollPositionByUrl";Jt.scrollOperation=null;let tr=Jt;const S=new Ys;var er=Object.defineProperty,or=Object.getOwnPropertyDescriptor,Kt=(o,t,e,s)=>{for(var r=s>1?void 0:s?or(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&er(t,e,r),r};let at=class extends L{constructor(){super(),this.route=null,this.hideHeaderFooter=!1,this.unhandledRejectionListener=o=>this.unhandledPromiseRejection(o),this.hiddenHeaderFooterRoutes=["/play-board"],Promise.all([b.fetch(),U.getCachedMarket(),Ke.getFlags()]).then(([o,t,e])=>q.initialize(o,t.market,e))}connectedCallback(){super.connectedCallback(),window.addEventListener("unhandledrejection",this.unhandledRejectionListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("unhandledrejection",this.unhandledRejectionListener)}firstUpdated(){S.addEventListener("route-changed",()=>this.routeChanged())}routeChanged(){const o=!this.route,t=S.route?.url?.pathname||null;if(this.hideHeaderFooter=!!t&&this.hiddenHeaderFooterRoutes.some(s=>t===s),o){this.route=S.route;return}const e=document.documentElement.classList.contains("back-transition");"startViewTransition"in document&&!e?document.startViewTransition(()=>(this.route=S.route,this.updateComplete)).finished.finally(()=>this.clearBackTransition()):(this.route=S.route,this.clearBackTransition())}render(){return u`
            ${this.renderLazyHeader()}
            <div class="layout-container">
                <main>
                    <div id="routerOutlet">
                        ${S.renderRoute()}
                    </div>
                    <scroll-to-top-button></scroll-to-top-button>
                </main>
            </div>
            ${this.renderLazyFooter()}
        `}renderLazyHeader(){return this.hideHeaderFooter?u``:u`
            <lazy-load class="header-shimmer" .renderer="${()=>this.renderHeader()}" .importer="${()=>this.loadHeader()}" when="immediate"></lazy-load>
        `}renderLazyFooter(){return this.hideHeaderFooter?u``:u`
            <lazy-load class="footer-shimmer" .renderer="${()=>this.renderFooter()}" .importer="${()=>this.loadFooter()}" when="immediate"></lazy-load>
        `}loadHeader(){return Promise.all([f(()=>import("./header-740c7e80.js"),["assets/js/header-740c7e80.js","assets/js/nav-bar-27bbdc35.js","assets/js/repeat-18af36e2.js","assets/js/auto-complete-app-search-29ced610.js","assets/js/style-map-db7a8965.js"]),b.fetch()])}loadFooter(){return Promise.all([f(()=>import("./footer-menu-766a2618.js"),["assets/js/footer-menu-766a2618.js","assets/js/css-function-27cf3c1f.js","assets/js/repeat-18af36e2.js","assets/js/platform-2180e403.js"]),b.fetch()])}renderHeader(){return u`
            <app-header></app-header>
        `}renderFooter(){return u`
            <footer-menu></footer-menu>
        `}async unhandledPromiseRejection(o){if(o.reason instanceof J&&o.reason.statusCode!==451){const t=await f(()=>import("./alert-service-619e8956.js"),["assets/js/alert-service-619e8956.js","assets/js/chunk.HDLULROG-a171dd0c.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-42ee1a93.js"]);t.alertService.hasVisibleAlerts||t.alertService.showError(b.get("Common.UnableToConnect"),b.get("Common.UnableToConnectDetails"),o.reason)}}clearBackTransition(){document.documentElement.classList.remove("back-transition")}};at.styles=[Gt,Ls,Rs];Kt([T()],at.prototype,"route",2);Kt([T()],at.prototype,"hideHeaderFooter",2);at=Kt([_t("app-index")],at);export{Ts as $,Is as A,y as B,Ns as C,ir as D,$t as E,I as F,Oe as G,qo as H,pr as I,p as J,bo as K,Wt as L,Je as M,He as N,P as O,Os as P,fo as Q,z as R,Vs as S,v as T,be as U,Ke as V,k as W,Ue as X,S as Y,ze as Z,f as _,Gt as a,Ws as a0,mr as a1,jo as a2,dt as a3,A as a4,me as a5,Lt as a6,br as a7,fr as a8,jt as a9,Wo as aa,ae as ab,wr as ac,yr as ad,Me as ae,Ee as af,Vo as ag,vr as ah,ft as ai,yo as aj,lt as ak,lr as al,hr as am,Us as an,U as b,So as c,Ms as d,Po as e,zs as f,q as g,Le as h,$ as i,Re as j,wo as k,b as l,w as m,m as n,uo as o,dr as p,cr as q,T as r,L as s,_t as t,ar as u,ur as v,nr as w,u as x,xo as y,F as z};
