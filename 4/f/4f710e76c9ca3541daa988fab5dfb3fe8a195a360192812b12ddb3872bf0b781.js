/*! For license information please see newtrial.js.LICENSE.txt */
var e={4676:(e,t,n)=>{n.d(t,{QT:()=>w});var i=n(5112),r=n(23),o=n(7815),a=n(6657),s=n(378),l=n(3037),c=n(2528),u=n(993);class d extends s.I{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}(0,o.gn)([r.Lj],d.prototype,"download",void 0),(0,o.gn)([r.Lj],d.prototype,"href",void 0),(0,o.gn)([r.Lj],d.prototype,"hreflang",void 0),(0,o.gn)([r.Lj],d.prototype,"ping",void 0),(0,o.gn)([r.Lj],d.prototype,"referrerpolicy",void 0),(0,o.gn)([r.Lj],d.prototype,"rel",void 0),(0,o.gn)([r.Lj],d.prototype,"target",void 0),(0,o.gn)([r.Lj],d.prototype,"type",void 0),(0,o.gn)([a.LO],d.prototype,"defaultSlottedContent",void 0);class f{}(0,o.gn)([(0,r.Lj)({attribute:"aria-expanded"})],f.prototype,"ariaExpanded",void 0),(0,u.e)(f,l.v),(0,u.e)(d,c.hW,f);var h=n(3541),p=n(6696),g=n(6164),v=n(1815),m=n(3863);const y="[href]";class b extends d{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var e,t;const n=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===n.length&&n[0]instanceof SVGElement?null===(e=this.control)||void 0===e||e.classList.add("icon-only"):null===(t=this.control)||void 0===t||t.classList.remove("icon-only")}}(0,i.gn)([r.Lj],b.prototype,"appearance",void 0);const w=b.compose({baseName:"anchor",baseClass:d,template:(e,t)=>h.d`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${(0,p.i)("control")}
    >
        ${(0,c.m9)(e,t)}
        <span class="content" part="content">
            <slot ${(0,g.Q)("defaultSlottedContent")}></slot>
        </span>
        ${(0,c.LC)(e,t)}
    </a>
`,styles:(e,t)=>(0,v.vN)(e,t,y).withBehaviors((0,m.H)("neutral",(0,v.KJ)(e,t,y)),(0,m.H)("accent",(0,v.jQ)(e,t,y)),(0,m.H)("hypertext",(0,v.Xu)(e,t,y)),(0,m.H)("lightweight",(0,v.vt)(e,t,y)),(0,m.H)("outline",(0,v.O8)(e,t,y)),(0,m.H)("stealth",(0,v.cg)(e,t,y))),shadowOptions:{delegatesFocus:!0}})},7567:(e,t,n)=>{n.d(t,{hb:()=>E});var i=n(5112),r=n(23),o=n(7815),a=n(6657),s=n(3037),l=n(2528),c=n(993),u=n(2941),d=n(378);lass h extends((0,u.Um)(f)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class p extends h{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(()}}(0,o.gn)([(0,r.Lj)({mode:"boolean"})],p.prototype,"autofocus",void 0),(0,o.gn)([(0,r.Lj)({attribute:"form"})],p.prototype,"formId",void 0),(0,o.gn)([r.Lj],p.prototype,"formaction",void 0),(0,o.gn)([r.Lj],p.prototype,"formenctype",void 0),(0,o.gn)([r.Lj],p.prototype,"formmethod",void 0),(0,o.gn)([(0,r.Lj)({mode:"boolean"})],p.prototype,"formnovalidate",void 0),(0,o.gn)([r.Lj],p.prototype,"formtarget",void 0),(0,o.gn)([r.Lj],p.prototype,"type",void 0),(0,o.gn)([a.LO],p.prototype,"defaultSlottedContent",void 0);0,o.gn)([(0,r.Lj)({attribute:"aria-expanded"})],g.prototype,"ariaExpanded",void 0),(0,o.gn)([(0,r.Lj)({attribute:"aria-pressed"})],g.prototype,"ariaPressed",void 0),(0,c.e)(g,s.v),(0,c.e)(p,l.hW,g);var v=n(3541),m=n(6696),y=n(6164),b=n(5492),w=n(4887),C=n(1815),x=n(3863),T=n(9590);const k=":not([disabled])",S="[disabled]";class I extends p{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(();1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,i.gn)([r.Lj],I.prototype,"appearance",void 0);const E=I.compose({baseName:"button",baseClass:p,template:(e,t)=>v.d`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${(0,m.i)("control")}
    >
        ${(0,l.m9)(e,t)}
        <span class="content" part="content">
            <slot ${(0,y.Q)("defaultSlottedContent")}></slot>
        </span>
        ${(0,l.LC)(e,t)}
    </button>
`,styles:(e,t)=>b.i`
    :host(${k}) .control {
      cursor: pointer;
    }

    :host(${S}) .control {
      cursor: ${w.H};
    }

    @media (forced-colors: none) {
      :host(${S}) .control {
        opacity: ${T.VFZ};
      }
    }

    ${(0,C.vN)(e,t,k,S)}
  `.withBehaviors((0,x.H)("neutral",(0,C.KJ)(e,t,k,S)),(0,x.H)("accent",(0,C.jQ)(e,t,k,S)),(0,x.H)("lightweight",(0,C.vt)(e,t,k,S)),(0,x.H)("outline",(0,C.O8)(e,t,k,S)),(0,x.H)("stealth",(0,C.cg)(e,t,k,S))),shadowOptions:{delegatesFocus:!0}})},3241:(e,t,n)=>{n.d(t,{v:()=>g});var i,r=n(1312),o=n(8513),a=n(8009),s=n(9502),l=n(2211);i||(i={}));var u=n(8473);ar f=n(291),h=n(3699);const p={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},g=Object.freeze({create:function(e,t,n){return"number"==typeof e?g.from(u.w.create(e,t,n)):g.from(e)},from:function(e,t){return(0,u.m)(e)?v.from(e,t):v.from(u.w.create(e.r,e.g,e.b),t)}});class v{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,n,i){void 0===n&&(n=this.closestIndexOf(e));let r=this.swatches;const o=this.lastIndex;let a=n;return void 0===i&&(i=(0,f.a)(e)),-1===i&&(r=this.reversedSwatches,a=o-a),d(r,(n=>(0,h.$)(e,n)>=t),a,o)}get(e){return this.swatches[e]||this.swatches[(0,r.uZ)(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const n=this.swatches.reduce(((t,n)=>Math.abs(n.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?n:t));return t=this.swatches.indexOf(n),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const n=(0,o.lw)(e).s,i=(0,o.lw)(t);if(i.s<n){const e=new a.H(i.h,n,i.l);return(0,o.hP)(e)}return t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],n=(0,o.v1)(s.h.fromObject(e).roundToPrecision(4)),i=(0,o.DR)(new l.R(0,n.a,n.b)).clamp().roundToPrecision(4),r=(0,o.DR)(new l.R(50,n.a,n.b)).clamp().roundToPrecision(4),a=(0,o.DR)(new l.R(100,n.a,n.b)).clamp().roundToPrecision(4),d=new s.h(0,0,0),f=new s.h(1,1,1),h=a.equalValue(f)?0:14,p=i.equalValue(d)?0:14;for(let e=100+h;e>=0-p;e-=.5){let n;n=e<0?c(e/p+1,d,i):e<=50?c(v.ramp(e),i,r):e<=100?c(v.ramp(e),r,a):c((e-100)/h,a,f),n=v.saturationBump(r,n).roundToPrecision(4),t.push(u.w.from(n))}return new v(e,t)}static adjustEnd(e,t,n,i){const o=-1===i?t.swatches:t.reversedSwatches,a=e=>{const n=t.closestIndexOf(e);return 1===i?t.lastIndex-n:n};1===i&&n.reverse();const s=e(n[n.length-2]);if((0,r.fZ)((0,h.$)(n[n.length-1],n[n.length-2]),2)<s){n.pop();const e=a(t.colorContrast(o[t.lastIndex],s,void 0,i))-a(n[n.length-2]);let r=1;for(let i=n.length-e-1;i<n.length;i++){const e=a(n[i]),s=i===n.length-1?t.lastIndex:e+r;n[i]=o[s],r++}}1===i&&n.reverse()}static createColorPaletteByContrast(e,t){const n=v.createHighResolutionPalette(e),i=e=>{const n=t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp;return(0,r.fZ)(n,2)},o=[];let a=t.preserveSource?e:n.swatches[0];o.push(a);do{const e=i(a);a=n.colorContrast(a,e,void 0,1),o.push(a)}while(a.relativeLuminance>0);if(t.preserveSource){a=e;do{const e=i(a);a=n.colorContrast(a,e,void 0,-1),o.unshift(a)}while(a.relativeLuminance<1)}return this.adjustEnd(i,n,o,-1),t.preserveSource&&this.adjustEnd(i,n,o,1),o}static from(e,t){const n=void 0===t?p:Object.assign(Object.assign({},p),t);return new v(e,Object.freeze(v.createColorPaletteByContrast(e,n)))}}},8473:(e,t,n)=>{n.d(t,{m:()=>s,w:()=>a});var i=n(9502),r=n(8513),o=n(3699);const a=Object.freeze({create:from:);function s(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:relativeLuminance:0};for(const n in t)if(typeof t[n]!=typeof e[n])return!1;return!0}class l extends i.h{constructor(e,t,n){super(e,t,n,1),this.toColorString=this.toStringHexRGB,this.contrast=o.$.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,r.hM)(this)}},1334:(e,t,n)=>{n.d(t,{C:()=>o,h:()=>i});var i,r=n(8473);function o(e){return r.w.create(e,e,e)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(i||(i={}))},291:(e,t,n)=>{n.d(t,{a:()=>r});var i=n(6747);function r(e){return(0,i._)(e)?-1:1}},6747:(e,t,n)=>{n.d(t,{_:()=>r});const i=(-.1+Math.sqrt(.21))/2;,3699:(e,t,n)=>{function i(e,t){const n=e.relativeLuminance>t.relativeLuminance?e:t,i=e.relativeLuminance>t.relativeLuminance?t:e;return(n.relativeLuminance+.05)/(i.relativeLuminance+.05)}n.d(t,{$:()=>i})},9590:(e,t,n)=>{n.d(t,{UEO:()=>Ot,OCG:()=>At,Avx:()=>Dt,VNr:()=>Ut,D9J:()=>zt,goi:()=>Vt,oi3:()=>qt,fbQ:()=>jt,z0S:()=>Bt,nfe:()=>P,q2d:()=>me,SVJ:()=>U,UWU:()=>M,hVk:()=>_,_5n:()=>F,o7V:()=>O,VFZ:()=>N,IfY:()=>Et,a2F:()=>qn,yGg:()=>Bn,vxp:()=>z,PpH:()=>Mt,lJV:()=>Ft,w41:()=>_t,rSr:()=>R,Gy2:()=>Xt,XiB:()=>Kt,bWE:()=>rn,W3V:()=>on,vFq:()=>nn,pB6:()=>tn,rFm:()=>Qt,Tm7:()=>Jt,smF:()=>Yt,_Bj:()=>Zt,abR:()=>an,wFS:()=>Wt,_ii:()=>dn,KTo:()=>fn,d$x:()=>un,TuC:()=>ln,_jX:()=>cn,sG3:()=>vn,s0z:()=>mn,QpD:()=>gn,jql:()=>pn,Q5n:()=>xn,axZ:()=>Cn,CHi:()=>wn,s55:()=>Ct,yvm:()=>vt,c1L:()=>In,_ro:()=>Dn,xBI:()=>$n,U_Q:()=>Ln,dtw:()=>On,QPc:()=>Sn,zt3:()=>_n,iAs:()=>Pn,Ja_:()=>Mn,akT:()=>kn,ekh:()=>Un,gKw:()=>zn,rU8:()=>Vn,Han:()=>V,cSu:()=>j,Ww_:()=>G,RUt:()=>q,sNp:()=>W,FMB:()=>X,vgC:()=>K,G8g:()=>Y,Tp7:()=>J,MwG:()=>Z,PwC:()=>Q,GQL:()=>te,b3W:()=>ee,mWK:()=>ne,YQw:()=>re,I7_:()=>ie,ipv:()=>oe,pqD:()=>se,yGZ:()=>ae,IWd:()=>le,SZp:()=>ue,iL4:()=>ce,CXZ:()=>de,NIE:()=>he,n5T:()=>fe,Zaf:()=>pe,dm2:()=>ve,yDy:);var i,r=n(4257);!i||(i={}));var o=n(3241),a=n(1389),s=n(8473);const l=s.w.create(1,1,1),c=s.w.create(0,0,0),u=s.w.create(.5,.5,.5),d=(0,a.in)("#0078D4"),f=s.w.create(d.r,d.g,d.b);function h(e,t,n,i,r){const o=e=>e.contrast(l)>=r?l:c,a=o(e),s=o(t);return{rest:a,hover:s,active:a.relativeLuminance===s.relativeLuminance?a:o(n),focus:o(i)}}var p,g=n(9502),v=n(8513);!p||(p={}));var m=n(291),y=n(3699);class b{constructor(e,t,n,i){this.toColorString=this.contrast=y.$.bind(null,this),this.createCSS=this.toColorString,this.color=new g.h(e,t,n),this.cssGradient=i,this.relativeLuminance=(0,v.hM)(this.color),this.r=e,this.g=t,this.b=n}static fromObjectconst w=new g.h(0,0,0),C=new g.h(1,1,1);function x(e,t,n,i,r,o,l,c,u=10,d=!1){const f=e.closestIndexOf(t);function h(n){if(d){const i=e.closestIndexOf(t),r=e.get(i),o=n.relativeLuminance<t.relativeLuminance?w:C,l=(0,v.PJ)((0,a.in)(n.toColorString()),(0,a.in)(r.toColorString()),o).roundToPrecision(2),c=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new g.h(e.r,e.g,e.b,1);const n=t.a*t.r+(1-t.a)*e.r,i=t.a*t.g+(1-t.a)*e.g,r=t.a*t.b+(1-t.a)*e.b;return new g.h(n,i,r,1)}((0,a.in)(t.toColorString()),l);return s.w.from(c)}return n}void 0===c&&(c=(0,m.a)(t));const p=f+c*n,y=p+c*(i-n),x=p+c*(r-n),T=p+c*(o-n),k=-1===c?0:100-u,S=-1===c?u:100;function I(t,n){const i=e.get(t);if(n){const n=e.get(t+c*l),r=-1===c?n:i,o=-1===c?i:n,a=`linear-gradient(${h(r).toColorString()} ${k}%, ${h(o).toColorString()} ${S}%)`;return b.fromObject(r,a)}return h(i)}return{rest:I(p,!0),hover:I(y,!0),active:I(x,!1),focus:I(T,!0)}}var T=n(6747);function k(e,t,n,i,r,o,a,s){null==s&&(s=(0,m.a)(t));const l=e.closestIndexOf(e.colorContrast(t,n));return{rest:e.get(l+s*i),hover:e.get(l+s*r),active:e.get(l+s*o),focus:e.get(l+s*a)}}function S(e,t,n,i,r,o,a){const s=e.closestIndexOf(t);return null==a&&(a=(0,m.a)(t)),{rest:e.get(s+a*n),hover:e.get(s+a*i),active:e.get(s+a*r),focus:e.get(s+a*o)}}function I(e,t,n,i,r,o,a,s,l,c,u,d){return(0,T._)(t)?S(e,t,s,l,c,u,d):S(e,t,n,i,r,o,a)}var E=n(1334);function L(e,t){return e.closestIndexOf((0,E.C)(t))}function $(e,t,n){return e.get(L(e,t)+-1*n)}const{create:D}=r.L;function A(e){return r.L.create({name:e,cssCustomPropertyName:null})}const O=D("direction").withDefault(i.ltr),N=D("disabled-opacity").withDefault(.3),P=D("base-height-multiplier").withDefault(8),_=(D("base-horizontal-spacing-multiplier").withDefault(3),D("density").withDefault(0)),F=D("design-unit").withDefault(4),M=D("control-corner-radius").withDefault(4),R=D("layer-corner-radius").withDefault(8),V=D("stroke-width").withDefault(1),z=D("focus-stroke-width").withDefault(2),U=D("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),H=D("font-weight").withDefault(400);function B(e){return t=>{const n=e.getValueFor(t),i=H.getValueFor(t);if(n.endsWith("px")){const e=Number.parseFloat(n.replace("px",""));if(e<=12)return`"wght" ${i}, "opsz" 8`;if(e>24)return`"wght" ${i}, "opsz" 36`}return`"wght" ${i}, "opsz" 10.5`}}const j=D("type-ramp-base-font-size").withDefault("14px"),q=D("type-ramp-base-line-height").withDefault("20px"),G=D("type-ramp-base-font-variations").withDefault(B(j)),W=D("type-ramp-minus-1-font-size").withDefault("12px"),K=D("type-ramp-minus-1-line-height").withDefault("16px"),X=D("type-ramp-minus-1-font-variations").withDefault(B(W)),Y=D("type-ramp-minus-2-font-size").withDefault("10px"),Z=D("type-ramp-minus-2-line-height").withDefault("14px"),J=D("type-ramp-minus-2-font-variations").withDefault(B(Y)),Q=D("type-ramp-plus-1-font-size").withDefault("16px"),ee=D("type-ramp-plus-1-line-height").withDefault("22px"),te=D("type-ramp-plus-1-font-variations").withDefault(B(Q)),ne=D("type-ramp-plus-2-font-size").withDefault("20px"),ie=D("type-ramp-plus-2-line-height").withDefault("26px"),re=D("type-ramp-plus-2-font-variations").withDefault(B(ne)),oe=D("type-ramp-plus-3-font-size").withDefault("24px"),ae=D("type-ramp-plus-3-line-height").withDefault("32px"),se=D("type-ramp-plus-3-font-variations").withDefault(B(oe)),le=D("type-ramp-plus-4-font-size").withDefault("28px"),ce=D("type-ramp-plus-4-line-height").withDefault("36px"),ue=D("type-ramp-plus-4-font-variations").withDefault(B(le)),de=D("type-ramp-plus-5-font-size").withDefault("32px"),fe=D("type-ramp-plus-5-line-height").withDefault("40px"),he=D("type-ramp-plus-5-font-variations").withDefault(B(de)),pe=D("type-ramp-plus-6-font-size").withDefault("40px"),ge=D("type-ramp-plus-6-line-height").withDefault("52px"),ve=D("type-ramp-plus-6-font-variations").withDefault(B(pe)),me=D("base-layer-luminance").withDefault(E.h.LightMode),ye=A("accent-fill-rest-delta").withDefault(0),be=A("accent-fill-hover-delta").withDefault(-2),we=A("accent-fill-active-delta").withDefault(-5),Ce=A("accent-fill-focus-delta").withDefault(0),xe=A("accent-foreground-rest-delta").withDefault(0),Te=A("accent-foreground-hover-delta").withDefault(3),ke=A("accent-foreground-active-delta").withDefault(-8),Se=A("accent-foreground-focus-delta").withDefault(0),Ie=A("neutral-fill-rest-delta").withDefault(-1),Ee=A("neutral-fill-hover-delta").withDefault(1),Le=A("neutral-fill-active-delta").withDefault(0),$e=A("neutral-fill-focus-delta").withDefault(0),De=A("neutral-fill-input-rest-delta").withDefault(-1),Ae=A("neutral-fill-input-hover-delta").withDefault(1),Oe=A("neutral-fill-input-active-delta").withDefault(0),Ne=A("neutral-fill-input-focus-delta").withDefault(-2),Pe=A("neutral-fill-input-alt-rest-delta").withDefault(2),_e=A("neutral-fill-input-alt-hover-delta").withDefault(4),Fe=A("neutral-fill-input-alt-active-delta").withDefault(6),Me=A("neutral-fill-input-alt-focus-delta").withDefault(2),Re=A("neutral-fill-layer-rest-delta").withDefault(-2),Ve=A("neutral-fill-layer-hover-delta").withDefault(-3),ze=A("neutral-fill-layer-active-delta").withDefault(-3),Ue=A("neutral-fill-layer-alt-rest-delta").withDefault(-1),He=A("neutral-fill-secondary-rest-delta").withDefault(3),Be=A("neutral-fill-secondary-hover-delta").withDefault(2),je=A("neutral-fill-secondary-active-delta").withDefault(1),qe=A("neutral-fill-secondary-focus-delta").withDefault(3),Ge=A("neutral-fill-stealth-rest-delta").withDefault(0),We=A("neutral-fill-stealth-hover-delta").withDefault(3),Ke=A("neutral-fill-stealth-active-delta").withDefault(2),Xe=A("neutral-fill-stealth-focus-delta").withDefault(0),Ye=A("neutral-fill-strong-rest-delta").withDefault(0),Ze=A("neutral-fill-strong-hover-delta").withDefault(8),Je=A("neutral-fill-strong-active-delta").withDefault(-5),Qe=A("neutral-fill-strong-focus-delta").withDefault(0),et=A("neutral-stroke-rest-delta").withDefault(8),tt=A("neutral-stroke-hover-delta").withDefault(12),nt=A("neutral-stroke-active-delta").withDefault(6),it=A("neutral-stroke-focus-delta").withDefault(8),rt=A("neutral-stroke-control-rest-delta").withDefault(3),ot=A("neutral-stroke-control-hover-delta").withDefault(5),at=A("neutral-stroke-control-active-delta").withDefault(5),st=A("neutral-stroke-control-focus-delta").withDefault(5),lt=A("neutral-stroke-divider-rest-delta").withDefault(4),ct=A("neutral-stroke-layer-rest-delta").withDefault(3),ut=A("neutral-stroke-layer-hover-delta").withDefault(3),dt=A("neutral-stroke-layer-active-delta").withDefault(3),ft=A("neutral-stroke-strong-hover-delta").withDefault(0),ht=A("neutral-stroke-strong-active-delta").withDefault(0),pt=A("neutral-stroke-strong-focus-delta").withDefault(0),gt=D("neutral-base-color").withDefault(u),vt=A("neutral-palette").withDefault((e=>o.v.from(gt.getValueFor(e)))),mt=D("accent-base-color").withDefault(f),yt=A("accent-palette").withDefault((),bt=A("neutral-layer-card-container-recipe").withDefault({evaluate:e=>$(vt.getValueFor(e),me.getValueFor(e),Re.getValueFor(e))}),wt=(D("neutral-layer-card-container").withDefault((e=>bt.getValueFor(e).evaluate(e))),A("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,n){return e.get(L(e,t)+n)}(vt.getValueFor(e),me.getValueFor(e),Re.getValueFor(e))})),Ct=D("neutral-layer-floating").withDefault((e=>wt.getValueFor(e).evaluate(e))),xt=A("neutral-layer-1-recipe").withDefault({evaluate:e=>vt.getValueFor(e),me.getValueFor(e))}),Tt=D("neutral-layer-1").withDefault((e=>xt.getValueFor(e).evaluate(e))),kt=A("neutral-layer-2-recipe").withDefault({evaluate:e=>$(vt.getValueFor(e),me.getValueFor(e),Re.getValueFor(e))}),St=(D("neutral-layer-2").withDefault((e=>kt.getValueFor(e).evaluate(e))),A("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,n){return e.get(L(e,t)+-1*n*2)}(vt.getValueFor(e),me.getValueFor(e),Re.getValueFor(e))})),It=(D("neutral-layer-3").withDefault((e=>St.getValueFor(e).evaluate(e))),A("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,n){return e.get(L(e,t)+-1*n*3)}(vt.getValueFor(e),me.getValueFor(e),Re.getValueFor(e))})),Et=(D("neutral-layer-4").withDefault((),D("fill-color").withDefault(());var Lt;!Lt||(Lt={}));const $t=A("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,n,i,r,o,a,s,l,c,u,d,f,h){return(0,T._)(t)?k(e,t,8,c,u,d,f,void 0):k(e,t,5,i,r,o,a,void 0)}(yt.getValueFor(e),t||Et.getValueFor(e),0,ye.getValueFor(e),be.getValueFor(e),we.getValueFor(e),Ce.getValueFor(e),0,0,ye.getValueFor(e),be.getValueFor(e),we.getValueFor(e),Ce.getValueFor(e))}),Dt=D("accent-fill-rest").withDefault((e=>$t.getValueFor(e).evaluate(e).rest)),At=D("accent-fill-hover").withDefault((e=>$t.getValueFor(e).evaluate(e).hover)),Ot=D("accent-fill-active").withDefault((e=>$t.getValueFor(e).evaluate(e).active)),Nt=D("accent-fill-focus").withDefault((e=>$t.getValueFor(e).evaluate(e).focus)),Pt=A("foreground-on-accent-recipe").withDefault({evaluate:e=>h(Dt.getValueFor(e),At.getValueFor(e),Ot.getValueFor(e),Nt.getValueFor(e),Lt.normal)}),_t=D("foreground-on-accent-rest").withDefault((e=>Pt.getValueFor(e).evaluate(e).rest)),Ft=D("foreground-on-accent-hover").withDefault((e=>Pt.getValueFor(e).evaluate(e).hover)),Mt=D("foreground-on-accent-active").withDefault((e=>Pt.getValueFor(e).evaluate(e).active)),Rt=(D("foreground-on-accent-focus").withDefault((e=>Pt.getValueFor(e).evaluate(e).focus)),A("accent-foreground-recipe").withDefault({evaluate:(e,t)=>k(yt.getValueFor(e),t||Et.getValueFor(e),9.5,xe.getValueFor(e),Te.getValueFor(e),ke.getValueFor(e),Se.getValueFor(e))})),Vt=D("accent-foreground-rest").withDefault((e=>Rt.getValueFor(e).evaluate(e).rest)),zt=D("accent-foreground-hover").withDefault((e=>Rt.getValueFor(e).evaluate(e).hover)),Ut=D("accent-foreground-active").withDefault((e=>Rt.getValueFor(e).evaluate(e).active)),Ht=(D("accent-foreground-focus").withDefault((e=>Rt.getValueFor(e).evaluate(e).focus)),A("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>x(vt.getValueFor(e),t||Et.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)})),Bt=D("accent-stroke-control-rest").withDefault((e=>Ht.getValueFor(e).evaluate(e,Dt.getValueFor(e)).rest)),jt=D("accent-stroke-control-hover").withDefault((e=>Ht.getValueFor(e).evaluate(e,At.getValueFor(e)).hover)),qt=D("accent-stroke-control-active").withDefault((e=>Ht.getValueFor(e).evaluate(e,Ot.getValueFor(e)).active)),Gt=(D("accent-stroke-control-focus").withDefault((e=>Ht.getValueFor(e).evaluate(e,Nt.getValueFor(e)).focus)),A("neutral-fill-recipe").withDefault({evaluate:(e,t)=>I(vt.getValueFor(e),t||Et.getValueFor(e),Ie.getValueFor(e),Ee.getValueFor(e),Le.getValueFor(e),$e.getValueFor(e),void 0,2,3,1,2,void 0)})),Wt=D("neutral-fill-rest").withDefault((e=>Gt.getValueFor(e).evaluate(e).rest)),Kt=D("neutral-fill-hover").withDefault((e=>Gt.getValueFor(e).evaluate(e).hover)),Xt=D("neutral-fill-active").withDefault((e=>Gt.getValueFor(e).evaluate(e).active)),Yt=(D("neutral-fill-focus").withDefault((e=>Gt.getValueFor(e).evaluate(e).focus)),A("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>I(vt.getValueFor(e),t||Et.getValueFor(e),De.getValueFor(e),Ae.getValueFor(e),Oe.getValueFor(e),Ne.getValueFor(e),void 0,2,3,1,0,void 0)})),Zt=D("neutral-fill-input-rest").withDefault((e=>Yt.getValueFor(e).evaluate(e).rest)),Jt=D("neutral-fill-input-hover").withDefault((e=>Yt.getValueFor(e).evaluate(e).hover)),Qt=(D("neutral-fill-input-active").withDefault((e=>Yt.getValueFor(e).evaluate(e).active)),D("neutral-fill-input-focus").withDefault((e=>Yt.getValueFor(e).evaluate(e).focus))),en=A("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>I(vt.getValueFor(e),t||Et.getValueFor(e),Pe.getValueFor(e),_e.getValueFor(e),Fe.getValueFor(e),Me.getValueFor(e),1,Pe.getValueFor(e),Pe.getValueFor(e)-_e.getValueFor(e),Pe.getValueFor(e)-Fe.getValueFor(e),Me.getValueFor(e),1)}),tn=D("neutral-fill-input-alt-rest").withDefault((e=>en.getValueFor(e).evaluate(e).rest)),nn=D("neutral-fill-input-alt-hover").withDefault((e=>en.getValueFor(e).evaluate(e).hover)),rn=D("neutral-fill-input-alt-active").withDefault((e=>en.getValueFor(e).evaluate(e).active)),on=D("neutral-fill-input-alt-focus").withDefault((e=>en.getValueFor(e).evaluate(e).focus)),an=A("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||Et.getValueFor(e),Re.getValueFor(e),Ve.getValueFor(e),ze.getValueFor(e),Re.getValueFor(e),1)}),sn=(D("neutral-fill-layer-rest").withDefault((e=>an.getValueFor(e).evaluate(e).rest)),D("neutral-fill-layer-hover").withDefault((e=>an.getValueFor(e).evaluate(e).hover)),D("neutral-fill-layer-active").withDefault((e=>an.getValueFor(e).evaluate(e).active)),A("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||Et.getValueFor(e),Ue.getValueFor(e),Ue.getValueFor(e),Ue.getValueFor(e),Ue.getValueFor(e))})),ln=(D("neutral-fill-layer-alt-rest").withDefault((e=>sn.getValueFor(e).evaluate(e).rest)),A("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||Et.getValueFor(e),He.getValueFor(e),Be.getValueFor(e),je.getValueFor(e),qe.getValueFor(e))})),cn=D("neutral-fill-secondary-rest").withDefault((e=>ln.getValueFor(e).evaluate(e).rest)),un=D("neutral-fill-secondary-hover").withDefault((e=>ln.getValueFor(e).evaluate(e).hover)),dn=D("neutral-fill-secondary-active").withDefault((e=>ln.getValueFor(e).evaluate(e).active)),fn=D("neutral-fill-secondary-focus").withDefault((e=>ln.getValueFor(e).evaluate(e).focus)),hn=A("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||Et.getValueFor(e),Ge.getValueFor(e),We.getValueFor(e),Ke.getValueFor(e),Xe.getValueFor(e))}),pn=D("neutral-fill-stealth-rest").withDefault((e=>hn.getValueFor(e).evaluate(e).rest)),gn=D("neutral-fill-stealth-hover").withDefault((e=>hn.getValueFor(e).evaluate(e).hover)),vn=D("neutral-fill-stealth-active").withDefault((e=>hn.getValueFor(e).evaluate(e).active)),mn=D("neutral-fill-stealth-focus").withDefault((e=>hn.getValueFor(e).evaluate(e).focus)),yn=A("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>k(vt.getValueFor(e),t||Et.getValueFor(e),4.5,Ye.getValueFor(e),Ze.getValueFor(e),Je.getValueFor(e),Qe.getValueFor(e))}),bn=(D("neutral-fill-strong-rest").withDefault((e=>yn.getValueFor(e).evaluate(e).rest)),D("neutral-fill-strong-hover").withDefault((e=>yn.getValueFor(e).evaluate(e).hover)),D("neutral-fill-strong-active").withDefault((e=>yn.getValueFor(e).evaluate(e).active)),D("neutral-fill-strong-focus").withDefault((e=>yn.getValueFor(e).evaluate(e).focus)),A("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>k(vt.getValueFor(e),t||Et.getValueFor(e),16,0,-19,-30,0)})),wn=D("neutral-foreground-rest").withDefault((e=>bn.getValueFor(e).evaluate(e).rest)),Cn=(D("neutral-foreground-hover").withDefault((e=>bn.getValueFor(e).evaluate(e).hover)),D("neutral-foreground-active").withDefault((e=>bn.getValueFor(e).evaluate(e).active)),D("neutral-foreground-focus").withDefault((e=>bn.getValueFor(e).evaluate(e).focus)),A("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>vt.getValueFor(e),t||Et.getValueFor(e))})),xn=D("neutral-foreground-hint").withDefault((e=>Cn.getValueFor(e).evaluate(e))),Tn=A("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||Et.getValueFor(e),et.getValueFor(e),tt.getValueFor(e),nt.getValueFor(e),it.getValueFor(e))}),kn=D("neutral-stroke-rest").withDefault((e=>Tn.getValueFor(e).evaluate(e).rest)),Sn=D("neutral-stroke-hover").withDefault((e=>Tn.getValueFor(e).evaluate(e).hover)),In=D("neutral-stroke-active").withDefault((e=>Tn.getValueFor(e).evaluate(e).active)),En=(D("neutral-stroke-focus").withDefault((e=>Tn.getValueFor(e).evaluate(e).focus)),A("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>x(vt.getValueFor(e),t||Et.getValueFor(e),rt.getValueFor(e),ot.getValueFor(e),at.getValueFor(e),st.getValueFor(e),5)})),Ln=D("neutral-stroke-control-rest").withDefault((e=>En.getValueFor(e).evaluate(e).rest)),$n=D("neutral-stroke-control-hover").withDefault((e=>En.getValueFor(e).evaluate(e).hover)),Dn=D("neutral-stroke-control-active").withDefault((e=>En.getValueFor(e).evaluate(e).active)),An=(D("neutral-stroke-control-focus").withDefault((e=>En.getValueFor(e).evaluate(e).focus)),A("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,n){return e.get(e.closestIndexOf(t)+(0,m.a)(t)*n)}(vt.getValueFor(e),t||Et.getValueFor(e),lt.getValueFor(e))})),On=D("neutral-stroke-divider-rest").withDefault((e=>An.getValueFor(e).evaluate(e))),Nn=A("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,n,i,r,o,a,s){const l=e.closestIndexOf(t),c=(0,m.a)(t),u=l+c*n,d=u+c*(i-n),f=u+c*(r-n),h=u+c*(o-n),p=`calc(100% - ${s})`;function g(t,n){const i=e.get(t);if(n){const n=e.get(t+20*c),r=`linear-gradient(${i.toColorString()} ${p}, ${n.toColorString()} ${p}, ${n.toColorString()})`;return b.fromObject(i,r)}return i}return{rest:g(u,!0),hover:g(d,!0),active:g(f,!1),focus:g(h,!0)}}(vt.getValueFor(e),t||Et.getValueFor(e),rt.getValueFor(e),ot.getValueFor(e),at.getValueFor(e),st.getValueFor(e),0,V.getValueFor(e)+"px")}),Pn=D("neutral-stroke-input-rest").withDefault((e=>Nn.getValueFor(e).evaluate(e).rest)),_n=D("neutral-stroke-input-hover").withDefault((e=>Nn.getValueFor(e).evaluate(e).hover)),Fn=(D("neutral-stroke-input-active").withDefault((e=>Nn.getValueFor(e).evaluate(e).active)),D("neutral-stroke-input-focus").withDefault((e=>Nn.getValueFor(e).evaluate(e).focus)),A("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>S(vt.getValueFor(e),t||Et.getValueFor(e),ct.getValueFor(e),ut.getValueFor(e),dt.getValueFor(e),ct.getValueFor(e))})),Mn=D("neutral-stroke-layer-rest").withDefault((e=>Fn.getValueFor(e).evaluate(e).rest)),Rn=(D("neutral-stroke-layer-hover").withDefault((e=>Fn.getValueFor(e).evaluate(e).hover)),D("neutral-stroke-layer-active").withDefault((e=>Fn.getValueFor(e).evaluate(e).active)),A("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>k(vt.getValueFor(e),t||Et.getValueFor(e),5.5,0,ft.getValueFor(e),ht.getValueFor(e),pt.getValueFor(e))})),Vn=D("neutral-stroke-strong-rest").withDefault((e=>Rn.getValueFor(e).evaluate(e).rest)),zn=D("neutral-stroke-strong-hover").withDefault((e=>Rn.getValueFor(e).evaluate(e).hover)),Un=D("neutral-stroke-strong-active").withDefault((e=>Rn.getValueFor(e).evaluate(e).active)),Hn=(D("neutral-stroke-strong-focus").withDefault((e=>Rn.getValueFor(e).evaluate(e).focus)),A("focus-stroke-outer-recipe").withDefault({evaluate:e=>{return vt.getValueFor(e),t=Et.getValueFor(e),(0,T._)(t)?l:c;var t}})),Bn=D("focus-stroke-outer").withDefault((e=>Hn.getValueFor(e).evaluate(e))),jn=A("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return yt.getValueFor(e),t=Et.getValueFor(e),Bn.getValueFor(e),(0,T._)(t)?c:l;var t}}),qn=D("focus-stroke-inner").withDefault((e=>jn.getValueFor(e).evaluate(e))),Gn=A("foreground-on-accent-large-recipe").withDefault({evaluate:e=>h(Dt.getValueFor(e),At.getValueFor(e),Ot.getValueFor(e),Nt.getValueFor(e),Lt.large)}),Wn=(D("foreground-on-accent-rest-large").withDefault((e=>Gn.getValueFor(e).evaluate(e).rest)),D("foreground-on-accent-hover-large").withDefault((e=>Gn.getValueFor(e).evaluate(e,At.getValueFor(e)).hover)),D("foreground-on-accent-active-large").withDefault((e=>Gn.getValueFor(e).evaluate(e,Ot.getValueFor(e)).active)),D("foreground-on-accent-focus-large").withDefault((e=>Gn.getValueFor(e).evaluate(e,Nt.getValueFor(e)).focus)),D("neutral-fill-inverse-rest-delta").withDefault(0)),Kn=D("neutral-fill-inverse-hover-delta").withDefault(-3),Xn=D("neutral-fill-inverse-active-delta").withDefault(7),Yn=D("neutral-fill-inverse-focus-delta").withDefault(0),Zn=A("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,n,i,r,o){const a=(0,m.a)(t),s=e.closestIndexOf(e.colorContrast(t,14)),l=s+a*Math.abs(n-i);let c,u;return(1===a?n<i:a*n>a*i)?(c=s,u=l):(c=l,u=s),{rest:e.get(c),hover:e.get(u),active:e.get(c+a*r),focus:e.get(c+a*o)}}(vt.getValueFor(e),t||Et.getValueFor(e),Wn.getValueFor(e),Kn.getValueFor(e),Xn.getValueFor(e),Yn.getValueFor(e))});D("neutral-fill-inverse-rest").withDefault((e=>Zn.getValueFor(e).evaluate(e).rest)),D("neutral-fill-inverse-hover").withDefault((e=>Zn.getValueFor(e).evaluate(e).hover)),D("neutral-fill-inverse-active").withDefault((e=>Zn.getValueFor(e).evaluate(e).active)),D("neutral-fill-inverse-focus").withDefault((e=>Zn.getValueFor(e).evaluate(e).focus))},6368:(e,t,n)=>{n.d(t,{z:()=>v});var i=n(835),r=n(378),o=n(1430),a=n(4257),s=n(713);const l=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),c=new Map,u=new Map;let d=null;const f=o.DI.createInterface((),h=Object.freeze({tagFor:e=>u.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||o.DI.findResponsibleContainer(e).get(f)},getOrCreate);861:(e,t,n)=>{n.d(t,{O:()=>r});var i=n(9590);class r{bind(e){const t=this.cache.get(e);t&&i.o7V.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new o(this.ltr,this.rtl,e),n=i.o7V.getValueFor(e);i.o7V.subscribe(t),t.attach(n),this.cache.set(e,t)}}class o{andleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},8687:(e,t,n)=>{n.d(t,{G:()=>o,H:()=>a});var i=n(5492),r=n(9590);const o=i.j`
  outline: calc(${r.vxp} * 1px) solid ${r.yGg};
  outline-offset: calc(${r.vxp} * -1px);
`,a=i.j`
  outline: calc(${r.vxp} * 1px) solid ${r.yGg};
  outline-offset: calc(${r.Han} * 1px);
`},1815:(e,t,n)=>{n.d(t,{KJ:()=>h,O8:()=>m,Xu:()=>g,cg:()=>y,jQ:()=>p,vN:()=>f,vt:()=>v});var i=n(5492),r=n(3278),o=n(605),a=n(7403),s=n(6693),l=n(5874),c=n(9590),u=n(3547),d=n(8687);const f=(e,t,n,r="[disabled]")=>i.i`
    ${(0,o.j)("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${u.cX}
      height: calc(${l.i} * 1px);
      min-width: calc(${l.i} * 1px);
      color: ${c.CHi};
      border-radius: calc(${c.UWU} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${c.Han} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${c._5n} * 2 * ${c.hVk})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${a.b} {
      ${d.G}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,h=(e,t,n,o="[disabled]")=>i.i`
    .control {
      background: padding-box linear-gradient(${c.wFS}, ${c.wFS}),
        border-box ${c.U_Q};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${c.XiB}, ${c.XiB}),
        border-box ${c.xBI};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${c.Gy2}, ${c.Gy2}),
        border-box ${c._ro};
    }

    :host(${o}) .control {
      background: padding-box linear-gradient(${c.wFS}, ${c.wFS}),
        border-box ${c.akT};
    }
  `.withBehaviors((0,s.vF)(i.i`
        .control {
          background: ${r.H.ButtonFace};
          border-color: ${r.H.ButtonText};
          color: ${r.H.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          forced-color-adjust: none;
          background: ${r.H.HighlightText};
          border-color: ${r.H.Highlight};
          color: ${r.H.Highlight};
        }

        :host(${o}) .control {
          background: transparent;
          border-color: ${r.H.GrayText};
          color: ${r.H.GrayText};
        }

        .control:${a.b} {
          outline-color: ${r.H.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${r.H.LinkText};
          color: ${r.H.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${r.H.CanvasText};
          color: ${r.H.CanvasText};
        }
    `)),p=(e,t,n,o="[disabled]")=>i.i`
    .control {
      background: padding-box linear-gradient(${c.Avx}, ${c.Avx}),
        border-box ${c.z0S};
      color: ${c.w41};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${c.OCG}, ${c.OCG}),
        border-box ${c.fbQ};
      color: ${c.lJV};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${c.UEO}, ${c.UEO}),
        border-box ${c.oi3};
      color: ${c.PpH};
    }

    :host(${o}) .control {
      background: ${c.Avx};
    }

    .control:${a.b} {
      box-shadow: 0 0 0 calc(${c.vxp} * 1px) ${c.a2F} inset !important;
    }
  `.withBehaviors((0,s.vF)(i.i`
        .control {
          forced-color-adjust: none;
          background: ${r.H.Highlight};
          color: ${r.H.HighlightText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${r.H.HighlightText};
          border-color: ${r.H.Highlight};
          color: ${r.H.Highlight};
        }

        :host(${o}) .control {
          background: transparent;
          border-color: ${r.H.GrayText};
          color: ${r.H.GrayText};
        }

        .control:${a.b} {
          outline-color: ${r.H.CanvasText};
          box-shadow: 0 0 0 calc(${c.vxp} * 1px) ${r.H.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${r.H.LinkText};
          color: ${r.H.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${r.H.ButtonFace};
          border-color: ${r.H.LinkText};
          color: ${r.H.LinkText};
        }
      `)),g=(e,t,n,o="[disabled]")=>i.i`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${n}) .control {
      color: ${c.goi};
      text-decoration: underline 1px;
    }

    :host(${n}:hover) .control {
      color: ${c.D9J};
      text-decoration: none;
    }

    :host(${n}:active) .control {
      color: ${c.VNr};
      text-decoration: none;
    }

    .control:${a.b} {
      ${d.H}
    }
  `.withBehaviors((0,s.vF)(i.i`
        :host(${n}) .control {
          color: ${r.H.LinkText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          color: ${r.H.CanvasText};
        }

        .control:${a.b} {
          outline-color: ${r.H.CanvasText};
        }
      `)),v=(e,t,n,o="[disabled]")=>i.i`
    :host {
      color: ${c.goi};
    }

    .control {
      background: ${c.jql};
    }

    :host(${n}:hover) .control {
      background: ${c.QpD};
      color: ${c.D9J};
    }

    :host(${n}:active) .control {
      background: ${c.sG3};
      color: ${c.VNr};
    }

    :host(${o}) .control {
      background: ${c.jql};
    }
  `.withBehaviors((0,s.vF)(i.i`
        :host {
          color: ${r.H.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${r.H.ButtonText};
          color: ${r.H.ButtonText};
        }

        :host(${o}) .control {
          background: transparent;
          color: ${r.H.GrayText};
        }

        .control:${a.b} {
          outline-color: ${r.H.CanvasText};
        }

        :host([href]) .control {
          color: ${r.H.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${r.H.LinkText};
          color: ${r.H.LinkText};
        }
      `)),m=(e,t,n,o="[disabled]")=>i.i`
    .control {
      background: transparent !important;
      border-color: ${c.akT};
    }

    :host(${n}:hover) .control {
      border-color: ${c.QPc};
    }

    :host(${n}:active) .control {
      border-color: ${c.c1L};
    }

    :host(${o}) .control {
      background: transparent !important;
      border-color: ${c.akT};
    }
  `.withBehaviors((0,s.vF)(i.i`
        .control {
          border-color: ${r.H.ButtonText};
          color: ${r.H.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${r.H.HighlightText};
          border-color: ${r.H.Highlight};
          color: ${r.H.Highlight};
        }

        :host(${o}) .control {
          border-color: ${r.H.GrayText};
          color: ${r.H.GrayText};
        }

        .control:${a.b} {
          outline-color: ${r.H.CanvasText};
        }

        :host([href]) .control {
          border-color: ${r.H.LinkText};
          color: ${r.H.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${r.H.CanvasText};
          color: ${r.H.CanvasText};
        }
      `)),y=(e,t,n,o="[disabled]")=>i.i`
    .control {
      background: ${c.jql};
    }

    :host(${n}:hover) .control {
      background: ${c.QpD};
    }

    :host(${n}:active) .control {
      background: ${c.sG3};
    }

    :host(${o}) .control {
      background: ${c.jql};
    }
  `.withBehaviors((0,s.vF)(i.i`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${r.H.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${r.H.ButtonText};
          color: ${r.H.ButtonText};
        }

        :host(${o}) .control {
          background: transparent;
          color: ${r.H.GrayText};
        }
        
        .control:${a.b} {
          outline-color: ${r.H.CanvasText};
        }

        :host([href]) .control {
          color: ${r.H.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${r.H.LinkText};
          color: ${r.H.LinkText};
        }
      `))},3547:(e,t,n)=>{n.d(t,{cX:()=>o});var i=n(5492),r=n(9590);const o=i.j`
  font-family: ${r.SVJ};
  font-size: ${r.cSu};
  line-height: ${r.RUt};
  font-weight: initial;
  font-variation-settings: ${r.Ww_};
`;i.j`
  font-family: ${r.SVJ};
  font-size: ${r.sNp};
  line-height: ${r.vgC};
  font-weight: initial;
  font-variation-settings: ${r.FMB};
`,i.j`
  font-family: ${r.SVJ};
  font-size: ${r.G8g};
  line-height: ${r.MwG};
  font-weight: initial;
  font-variation-settings: ${r.Tp7};
`,i.j`
  font-family: ${r.SVJ};
  font-size: ${r.PwC};
  line-height: ${r.b3W};
  font-weight: initial;
  font-variation-settings: ${r.GQL};
`,i.j`
  font-family: ${r.SVJ};
  font-size: ${r.mWK};
  line-height: ${r.I7_};
  font-weight: initial;
  font-variation-settings: ${r.YQw};
`,i.j`
  font-family: ${r.SVJ};
  font-size: ${r.ipv};
  line-height: ${r.yGZ};
  font-weight: initial;
  font-variation-settings: ${r.pqD};
`,i.j`
  font-family: ${r.SVJ};
  font-size: ${r.IWd};
  line-height: ${r.iL4};
  font-weight: initial;
  font-variation-settings: ${r.SZp};
`,i.j`
  font-family: ${r.SVJ};
  font-size: ${r.CXZ};
  line-height: ${r.n5T};
  font-weight: initial;
  font-variation-settings: ${r.NIE};
`,i.j`
  font-family: ${r.SVJ};
  font-size: ${r.Zaf};
  line-height: ${r.yDy};
  font-weight: initial;
  font-variation-settings: ${r.dm2};
`},5874:(e,t,n)=>{n.d(t,{i:()=>o});var i=n(5492),r=n(9590);const o=i.j`(${r.nfe} + ${r.hVk}) * ${r._5n}`},3863:(e,t,n)=>{n.d(t,{H:()=>o});var i=n(6657);class r{constructor(e,t,n){this.propertyName=e,this.value=t,this.styles=n}bind(e){i.y$.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){i.y$.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}},1550:(e,t,n)=>{n.d(t,{CY:()=>h,Pw:()=>l,RJ:()=>f,V4:()=>c,bO:()=>s,cb:()=>i,fK:()=>r,hB:()=>a,jA:()=>o,rl:()=>u,yu:()=>d});var i="function",r="object",o="undefined",a="prototype",s="hasOwnProperty",l=Object,c=l[a],u=l.assign,d=l.create,f=l.defineProperty,h=c[s]},175:(e,t,n)=>{n.d(t,{Rd:()=>o,ZU:()=>a,pu:()=>s});var i=n(1550),r=null;unction a(e){throw new TypeError(e)},7421:(e,t,n)=>{n.d(t,{$h:()=>l,ne:()=>s,uc:()=>o});var i=n(1550),r=n(175),o=(((0,r.Rd)()||{}).Symbol,((0,r.Rd)()||{}).Reflect,i.rl||,a=9141:(e,t,n)=>{var i;n.d(t,{Z:()=>R});var r,o="undefined",a="constructor",s="prototype",l="function",c="_dynInstFuncs",u="_isDynProxy",d="_dynClass",f="_dynInstChk",h=f,p="_dfOpts",g="_unknown_",v="__proto__",m="_dyn"+v,y="__dynProto$Gbl",b="_dynInstProto",w="useBaseInst",C="setInstFuncs",x=Object,T=x.getPrototypeOf,k=x.getOwnPropertyNames,S=(typeof globalThis!==o&&(r=globalThis),r||typeof self===o||(r=self),r||typeof window===o||(r=window),r||typeof n.g===o||(r=n.g),r||{}),I=S[y]||(S[y]={o:(i={},i[C]=!0,i[w]=!0,i),n:1e3});function E(e,t){return e&&x[s].hasOwnProperty.call(e,t)}function L(e){return e&&(e===x[s]||e===Array[s])}function $(e){return L(e)||e===Function[s]}function D(e){var t;if(e){if(T)return T(e);var n=e[v]||e[s]||(e[a]?e[a][s]:null);t=e[m]||n,E(e,m)||(delete e[b],t=e[m]=e[b]||e[m],e[b]=n)}return t}function A(e,t){var n=[];if(k)n=k(e);else for(var i in e)"string"==typeof i&&E(e,i)&&n.push(i);if(n&&n.length>0)for(var r=0;r<n.length;r++)t(n[r])}function O(e,t,n){return t!==a&&typeof e[t]===l&&(n||E(e,t))}function N(e){throw new TypeError("DynamicProto: "+e)}function P(e,t){for(var n=e.length-1;n>=0;n--)if(e[n]===t)return!0;return!1}function _(e,t,n,i){var r=null;if(e&&E(n,d)){var o=e[c]||{};if((r=(o[n[d]]||{})[t])||N("Missing ["+t+"] "+l),!r[f]&&!1!==o[h]){for(var a=!E(e,t),s=D(e),u=[];a&&s&&!$(s)&&!P(u,s);){var p=s[t];if(p){a=p===i;break}u.push(s),s=D(s)}try{a&&(e[t]=r),r[f]=1}catch(e){o[h]=!1}}}return r}function F(e,t,n){var i=t[e];return i===n&&(i=D(t)[e]),typeof i!==l&&N("["+e+"] is not a "+l),i}function M(e,t){return E(e,s)?e.name||t||g:((e||{})[a]||{}).name||t||g}function R(e,t,n,i){E(e,s)||N("theClass is an invalid class definition.");var r=e[s];(function(e,t){if(T){for(var n=[],i=D(t);i&&!$(i)&&!P(n,i);){if(i===e)return!0;n.push(i),i=D(i)}return!1}return!0})(r,t)||N("["+M(e)+"] not in hierarchy of ["+M(t)+"]");var o=null;E(r,d)?o=r[d]:(o="_dynCls$"+M(e,"_")+"$"+I.n,I.n++,r[d]=o);var a=R[p],l=!!a[w];l&&i&&void 0!==i[w]&&(l=!!i[w]);var f=function(e){var t={};return A(e,(function(n){!t[n]&&O(e,n,!1)&&(t[n]=e[n])})),t}(t),g=function(e,t,n,i){function r(e,t,n){var r=t[n];if(r[u]&&i){var o=e[c]||{};!1!==o[h]&&(r=(o[t[d]]||{})[n]||r)}return function(){return r.apply(e,arguments)}}var o={};A(n,(function(e){o[e]=r(t,n,e)}));for(var a=D(e),s=[];a&&!$(a)&&!P(s,a);)A(a,(function(e){!o[e]&&O(a,e,!T)&&(o[e]=r(t,a,e))})),s.push(a),a=D(a);return o}(r,t,f,l);n(t,g);var v=!!T&&!!a[C];v&&i&&(v=!!i[C]),function(e,t,n,i,r){if(!L(e)){var o=n[c]=n[c]||{},a=o[t]=o[t]||{};!1!==o[h]&&(o[h]=!!r),A(n,(function(t){O(n,t,!1)&&n[t]!==i[t]&&(a[t]=n[t],delete n[t],(!E(e,t)||e[t]&&!e[t][u])&&(e[t]=function(e,t){var n=function(){return(_(this,t,e,n)||F(t,e,n)).apply(this,arguments)};return n[u]=1,n}(e,t)))}))}}(r,o,t,f,!1!==v)}R[p]=I.o},7815:(e,t,n)=>{.d(t,{gn:()=>i})},7856:function(e){e.exports=function(){Object.hasOwnProperty,s=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,d=Object.freeze,f=Object.seal,h=Object.create,p="undefined"!=typeof Reflect&&Reflect,g=p.apply,v=p.construct;g||(g=,d||(d=function(e){return e}),f||(f=function(e){return e}),v||(v=;var m,y=$(Array.prototype.forEach),b=$(Array.prototype.pop),w=$(Array.prototype.push),C=$(String.prototype.toLowerCase),x=$(String.prototype.toString),T=$(String.prototype.match),k=$(String.prototype.replace),S=$(String.prototype.indexOf),I=$(String.prototype.trim),E=$(RegExp.prototype.test),L=(m=TypeError,;N=d(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),P=d(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_=d(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=d(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),M=d(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),R=d(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),V=d(["#text"]),z=d(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),U=d(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),H=d(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),B=d(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),j=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=f(/<%[\w\W]*|[\w\W]*%>/gm),G=f(/\${[\w\W]*}/gm),W=f(/^data-[\-\w.\u00B7-\uFFFF]/),K=f(/^aria-[\-\w]+$/),X=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Y=f(/^(?:\w+script|data):/i),Z=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=f(/^html$/i),Q=ee=return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q(),i=function(e){return t(e)};if(i.version="2.4.3",i.removed=[],!n||!n.document||9!==n.document.nodeType)return i.isSupported=!1,i;var o=n.document,a=n.document,s=n.DocumentFragment,l=n.HTMLTemplateElement,c=n.Node,u=n.Element,f=n.NodeFilter,h=n.NamedNodeMap,p=void 0===h?n.NamedNodeMap||n.MozNamedAttrMap:h,g=n.HTMLFormElement,v=n.DOMParser,m=n.trustedTypes,$=u.prototype,te=O($,"cloneNode"),ne=O($,"nextSibling"),ie=O($,"childNodes"),re=O($,"parentNode");if("function"==typeof l){var oe=a.createElement("template");oe.content&&oe.content.ownerDocument&&(a=oe.content.ownerDocument)}var ae=ee(m,o),se=ae?ae.createHTML(""):"",le=a,ce=le.implementation,ue=le.createNodeIterator,de=le.createDocumentFragment,fe=le.getElementsByTagName,he=o.importNode,pe={};try{pe=A(a).documentMode?a.documentMode:{}}catch(e){}var ge={};i.isSupported="function"==typeof re&&ce&&void 0!==ce.createHTMLDocument&&9!==pe;var ve,me,ye=j,be=q,we=G,Ce=W,xe=K,Te=Y,ke=Z,Se=X,Ie=null,Ee=D({},[].concat(r(N),r(P),r(_),r(M),r(V))),Le=null,$e=D({},[].concat(r(z),r(U),r(H),r(B))),De=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ae=null,Oe=null,Ne=!0,Pe=!0,_e=!1,Fe=!1,Me=!1,Re=!1,Ve=!1,ze=!1,Ue=!1,He=!1,Be=!0,je=!1,qe="user-content-",Ge=!0,We=!1,Ke={},Xe=null,Ye=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ze=null,Je=D({},["audio","video","img","source","image","track"]),Qe=null,et=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",it="http://www.w3.org/1999/xhtml",rt=it,ot=!1,at=null,st=D({},[tt,nt,it],x),lt=["application/xhtml+xml","text/html"],ct="text/html",ut=null,dt=a.createElement("form"),ft=ht=pt=D({},["mi","mo","mn","ms","mtext"]),gt=D({},["foreignobject","desc","title","annotation-xml"]),vt=D({},["title","style","font","a","script"]),mt=D({},P);D(mt,_),D(mt,F);var yt=D({},M);D(yt,R);var bt=wt=Ct=xt=Tt=kt=St=It=Et=Lt=$t=Dt=At=return i.sanitize=i.setConfig=i.clearConfig=i.isValidAttribute=i.addHook=i.removeHook=i.removeHooks=i.removeAllHooks=i}()}()},7634:(e,t,n)=>{n.d(t,{jr:()=>a,C7:()=>s,p9:()=>l,uH:()=>c});var i=n(4257);const{create:r}=i.L;var o=n(5492);o.i``;const a={colorWhite:r("color-white").withDefault("#FFF"),colorAntiFlashWhite:r("color-anti-flash-white").withDefault("#F2F2F2"),colorCulturedGrey:r("color-cultured-grey").withDefault("#F7F7F7"),colorBrightGrey:r("color-bright-grey").withDefault("#EBEBEB"),colorDarkGrey:r("color-dark-grey").withDefault("#3C3C41"),colorSilverSand:r("color-silver-sand").withDefault("#C6C6C6"),colorSonicSilver:r("color-sonic-silver").withDefault("#75757A"),colorWenge:r("color-wenge").withDefault("#605E5C"),colorBlackOlive:r("color-black-olive").withDefault("#C6C6C6"),colorEerieBlack:r("color-eerie-black").withDefault("#191919"),colorBlack:r("color-black").withDefault("#000"),dynamicsBlue:r("dynamics-blue").withDefault("#0078D4"),dynamicsGreen:r("dynamics-green").withDefault("#0B556A"),dynamicsYellow:r("dynamics-yellow").withDefault("#FEF000"),powerBiYellow:r("powerbi-yellow").withDefault("#F2C811"),powerAppsPurple:r("powerapps-purple").withDefault("#742774"),powerAppsMagenta:r("powerapps-magenta").withDefault("#C649AD"),flowBlue:r("flow-blue").withDefault("#06F"),flowCyan:r("flow-cyan").withDefault("#0CF"),darkCandyAppleRed:r("dark-candy-apple-red").withDefault("#A80000"),errorColor:r("error-color").withDefault("#A80000"),textFieldBorderColorBlue:r("textFieldBorderColorBlue").withDefault("#0078d4"),textFieldBorderColorBlack:r("textFieldBorderColorBlack").withDefault("#3c3c41"),buttonBorderColorBlack:r("textFieldBorderColorBlack").withDefault("#000")},s=(i.L.create("font-family").withDefault("'Segoe UI',SegoeUI,'Segoe WP',Tahoma,Arial,sans-serif"),{viewportHeight100:r("viewport-height-100").withDefault("100vh"),viewportWidth100:r("viewport-width-100").withDefault("100vh"),viewportHeight50:r("viewport-height-50").withDefault("50vh"),viewportWidth50:r("viewport-width-50").withDefault("50vh"),vmin1:r("vmin-1").withDefault("1vmin"),vmax1:r("vmax-1").withDefault("1vmax"),oneHundredPercent:r("100-percent").withDefault("100%"),fiftyPercent:r("50-percent").withDefault("50%"),character50:r("character-50").withDefault("50ch"),spacingSize1:r("spacing-size1").withDefault("12px"),spacingSize2:r("spacing-size2").withDefault("24px"),spacingSize3:r("spacing-size3").withDefault("36px"),spacingSize4:r("spacing-size4").withDefault("48px"),spacingSize5:r("spacing-size5").withDefault("60px"),spacingSize6:r("spacing-size6").withDefault("72px"),spacingSize7:r("spacing-size7").withDefault("84px"),spacingSize8:r("spacing-size8").withDefault("96px"),lineHeight15:r("line-height15").withDefault("1.5")}),l=(i.L.create("shadow-size1").withDefault("0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)"),i.L.create("shadow-size2").withDefault("0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)"),i.L.create("shadow-size").withDefault("0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108)"),i.L.create("shadow-size41").withDefault("0 25.6px 57.6px 0 rgba(0,0,0,.22), 0 4.8px 14.4px 0 rgba(0,0,0,.18)"),{fontSizeSmall:r("font-size-sm").withDefault("0.75rem"),fontSizeMediumSmall:r("font-size-sm-med").withDefault("0.85rem"),baseFontSize:r("base-font-size").withDefault("1rem"),fontSizeMedium:r("font-size-med").withDefault("1.125rem"),fontSizeMediumLarge:r("font-size-med-lg").withDefault("1.5rem"),fontSizeLarge:r("font-size-lg").withDefault("2.25rem"),fontSizeXL:r("font-size-xl").withDefault("3rem"),fontWeight4:r("font-weight4").withDefault("400"),fontWeight6:r("font-weight6").withDefault("600")}),c=(o.i`
  html {
    font-size: 100%;
  }
`,{displayNone:r("display-none").withDefault("none"),displayBlock:r("display-block").withDefault("block"),displayInlineBlock:r("display-inline-block").withDefault("inline-block"),displayUnset:r("display-unset").withDefault("unset"),displayFlex:r("display-flex").withDefault("flex"),displayGrid:r("display-grid").withDefault("grid"),positionAbsolute:r("position-absolute").withDefault("absolute"),positionRelative:r("position-relative").withDefault("relative"),positionFixed:r("position-fixed").withDefault("fixed"),elevation4:r("elevation4").withDefault("4")});o.i`
    .flex {
        display: ${c.displayFlex};
    }

    .error {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        color: ${a.errorColor};
    }

    .error-highlight {
        color: ${a.errorColor};
    }
`},5571:(e,t,n)=>{function i(e){let t;return class{constructor(...n){return t||(t=new e(...n),t)}}}n.d(t,{r:()=>i})},9569:(e,t,n)=>{n.d(t,{t:()=>jv});var i=n(655);var r;!function(e){e[e.PAGE_ACTION=0]="PAGE_ACTION",e[e.CONTENT_UPDATE=1]="CONTENT_UPDATE"}(r||(r={}));var o=n(2437);const a={A:!0,BUTTON:!0,AREA:!0,INPUT:!0,"FLUENT-BUTTON":!0,"FLUENT-CHECKBOX":!0},s={BUTTON:!0,CHECKBOX:!0,RADIO:!0,RESET:!0,SUBMIT:!0};var l,c,u=n(7421),d=n(9141),f="undefined",h="constructor",p="prototype",g="function",v="_dynInstFuncs",m="_isDynProxy",y="_dynClass",b="_dynInstChk",w=b,C="_dfOpts",x="_unknown_",T="__proto__",k="_dyn"+T,S="__dynProto$Gbl",I="_dynInstProto",E="useBaseInst",L="setInstFuncs",$=Object,D=$.getPrototypeOf,A=$.getOwnPropertyNames,O=(typeof globalThis!==f&&(c=globalThis),c||typeof self===f||(c=self),c||typeof window===f||(c=window),c||typeof n.g===f||(c=n.g),c||{}),N=O[S]||(O[S]={o:(l={},l[L]=!0,l[E]=!0,l),n:1e3});function P(e,t){return e&&$[p].hasOwnProperty.call(e,t)}function _(e){return e&&(e===$[p]||e===Array[p])}function F(e){return _(e)||e===Function[p]}function M(e){var t;if(e){if(D)return D(e);var n=e[T]||e[p]||(e[h]?e[h][p]:null);t=e[k]||n,P(e,k)||(delete e[I],t=e[k]=e[I]||e[k],e[I]=n)}return t}function R(e,t){var n=[];if(A)n=A(e);else for(var i in e)"string"==typeof i&&P(e,i)&&n.push(i);if(n&&n.length>0)for(var r=0;r<n.length;r++)t(n[r])}function V(e,t,n){return t!==h&&typeof e[t]===g&&(n||P(e,t))}function z(e){throw new TypeError("DynamicProto: "+e)}function U(e,t){for(var n=e.length-1;n>=0;n--)if(e[n]===t)return!0;return!1}function H(e,t,n,i){var r=null;if(e&&P(n,y)){var o=e[v]||{};if((r=(o[n[y]]||{})[t])||z("Missing ["+t+"] "+g),!r[b]&&!1!==o[w]){for(var a=!P(e,t),s=M(e),l=[];a&&s&&!F(s)&&!U(l,s);){var c=s[t];if(c){a=c===i;break}l.push(s),s=M(s)}try{a&&(e[t]=r),r[b]=1}catch(e){o[w]=!1}}}return r}function B(e,t,n){var i=t[e];return i===n&&(i=M(t)[e]),typeof i!==g&&z("["+e+"] is not a "+g),i}function j(e,t){return P(e,p)?e.name||t||x:((e||{})[h]||{}).name||t||x}function q(e,t,n,i){P(e,p)||z("theClass is an invalid class definition.");var r=e[p];(function(e,t){if(D){for(var n=[],i=M(t);i&&!F(i)&&!U(n,i);){if(i===e)return!0;n.push(i),i=M(i)}return!1}return!0})(r,t)||z("["+j(e)+"] not in hierarchy of ["+j(t)+"]");var o=null;P(r,y)?o=r[y]:(o="_dynCls$"+j(e,"_")+"$"+N.n,N.n++,r[y]=o);var a=q[C],s=!!a[E];s&&i&&void 0!==i[E]&&(s=!!i[E]);var l=function(e){var t={};return R(e,(function(n){!t[n]&&V(e,n,!1)&&(t[n]=e[n])})),t}(t),c=function(e,t,n,i){function r(e,t,n){var r=t[n];if(r[m]&&i){var o=e[v]||{};!1!==o[w]&&(r=(o[t[y]]||{})[n]||r)}return function(){return r.apply(e,arguments)}}var o={};R(n,(function(e){o[e]=r(t,n,e)}));for(var a=M(e),s=[];a&&!F(a)&&!U(s,a);)R(a,(function(e){!o[e]&&V(a,e,!D)&&(o[e]=r(t,a,e))})),s.push(a),a=M(a);return o}(r,t,l,s);n(t,c);var u=!!D&&!!a[L];u&&i&&(u=!!i[L]),function(e,t,n,i,r){if(!_(e)){var o=n[v]=n[v]||{},a=o[t]=o[t]||{};!1!==o[w]&&(o[w]=!!r),R(n,(function(t){V(n,t,!1)&&n[t]!==i[t]&&(a[t]=n[t],delete n[t],(!P(e,t)||e[t]&&!e[t][m])&&(e[t]=function(e,t){var n=function(){return(H(this,t,e,n)||B(t,e,n)).apply(this,arguments)};return n[m]=1,n}(e,t)))}))}}(r,o,t,l,!1!==u)}q[C]=N.o;var G="initialize",W="name",K="getNotifyMgr",X="identifier",Y="push",Z="isInitialized",J="config",Q="instrumentationKey",ee="logger",te="length",ne="time",ie="processNext",re="getProcessTelContext",oe="addNotificationListener",ae="removeNotificationListener",se="stopPollingInternalLogs",le="onComplete",ce="getPlugin",ue="flush",de="_extensions",fe="splice",he="teardown",pe="messageId",ge="message",ve="isAsync",me="_doTeardown",ye="update",be="getNext",we="diagLog",Ce="setNextPlugin",xe="createNew",Te="cookieCfg",ke="indexOf",Se="substring",Ie="userAgent",Ee="split",Le="setEnabled",$e="substr",De="nodeType",Ae="apply",Oe="replace",Ne="enableDebugExceptions",Pe="call",_e="type",Fe="handler",Me="listeners",Re="isChildEvt",Ve="getCtx",ze="setCtx",Ue="complete",He="traceId",Be="spanId",je="traceFlags",qe=n(1550),Ge=n(175),We="",Ke="channels",Xe="core",Ye="createPerfMgr",Ze="disabled",Je="extensionConfig",Qe="processTelemetry",et="priority",tt="eventsSent",nt="eventsDiscarded",it="eventsSendRequest",rt="perfEvent",ot="errorToConsole",at="warnToConsole",st="getPerfMgr",lt="toISOString",ct="endsWith",ut="startsWith",dt="indexOf",ft="reduce",ht="trim",pt="toString",gt="constructor",vt=qe.RJ,mt=qe.Pw.freeze,yt=(qe.Pw.seal,qe.Pw.keys),bt=String[qe.hB],wt=bt[ht],Ct=bt[ct],xt=bt[ut],Tt=Date[qe.hB][lt],kt=Array.isArray,St=qe.V4[pt],It=qe.CY[pt],Et=It[Pe](qe.Pw),Lt=/-([a-z])/g,$t=/([^\w\d_$])/g,Dt=/^(\d+[\w\d_$])/,At=Object.getPrototypeOf;function Ot(e){return void 0===e||typeof e===qe.jA}function Nt(e){return null===e||Ot(e)}function Pt(e){return!Nt(e)}function _t(e,t){return!(!e||!qe.CY[Pe](e,t))}function Ft(e){return!(!e||typeof e!==qe.fK)}function Mt(e){return!(!e||typeof e!==qe.cb)}function Rt(e){var t=e;return t&&jt(t)&&(t=(t=(t=t[Oe](Lt,(function(e,t){return t.toUpperCase()})))[Oe]($t,"_"))[Oe](Dt,(function(e,t){return"_"+t}))),t}function Vt(e,t){if(e)for(var n in e)qe.CY[Pe](e,n)&&t[Pe](e,n,e[n])}unction Ut(e,t){return!(!e||!t)&&-1!==e[ke](t)}var Ht=kt||function(e){return!(!e||"[object Array]"!==St[Pe](e))};function Bt(e){return!(!e||"[object Error]"!==St[Pe](e))}function jt(e){return"string"==typeof e}function qt(e){return"number"==typeof e}function Gt(e){return"boolean"==typeof e}function Wt(e){var t=!1;if(e&&"object"==typeof e){var n=At?At(e):e);n?(n[gt]&&qe.CY[Pe](n,gt)&&(n=n[gt]),t=typeof n===qe.cb&&It[Pe](n)===Et):t=!0}return t}function Kt(e){if(e)return Tt?e[lt]():function(e){if(e&&e.getUTCFullYear){var t=function(e){var t=String(e);return 1===t[te]&&(t="0"+t),t};return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"."+String((e.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(e)}function Xt(e,t,n){var i=e[te];try{for(var r=0;r<i&&(!(r in e)||-1!==t[Pe](n||e,e[r],r,e));r++);}catch(e){}}function Yt(e,t,n){if(e){if(e[dt])return e[dt](t,n);var i=e[te],r=n||0;try{for(var o=Math.max(r>=0?r:i-Math.abs(r),0);o<i;o++)if(o in e&&e[o]===t)return o}catch(e){}}return-1}function Zt(e){return e&&(e=wt&&e[ht]?e[ht]():e[Oe]?e[Oe](/^\s+|(?=\s)\s+$/g,We):e),e}var Jt=!{toString:null}.propertyIsEnumerable("toString"),Qt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function en(e){var t=typeof e;if(t===qe.cb||t===qe.fK&&null!==e||(0,Ge.ZU)("objKeys called on non-object"),!Jt&&yt)return yt(e);var n=[];for(var i in e)e&&qe.CY[Pe](e,i)&&n[Y](i);if(Jt)for(var r=Qt[te],o=0;o<r;o++)e&&qe.CY[Pe](e,Qt[o])&&n[Y](Qt[o]);return n}function tn(e,t,n,i){if(vt)try{var r={enumerable:!0,configurable:!0};return n&&(r.get=n),i&&(r.set=i),vt(e,t,r),!0}catch(e){}return!1}var nn=mt||function(e){return e};function rn(){var e=Date;return e.now?e.now():(new e).getTime()}function on(e){return Bt(e)?e[W]:We}function an(e,t,n,i,r){var o=n;return e&&((o=e[t])===n||r&&!r(o)||i&&!i(n)||(o=n,e[t]=o)),o}function sn(e,t,n){var i;return e?!(i=e[t])&&Nt(i)&&(i=Ot(n)?{}:n,e[t]=i):i=Ot(n)?{}:n,i}function ln(e,t){return Nt(e)?t:e}function cn(e){return!!e}function un(e){throw new Error(e)}function dn(e,t){var n=null,i=null;return Mt(e)?n=e:i=e,function(){var e=arguments;if(n&&(i=n()),i)return i[t][Ae](i,e)}}function fn(e,t,n,i,r){e&&t&&n&&(!1!==r||Ot(e[t]))&&(e[t]=dn(n,i))}function hn(e,t,n,i){return e&&t&&Ft(e)&&Ht(n)&&Xt(n,(function(n){jt(n)&&fn(e,n,t,n,i)})),e}function pn(e){return e&&qe.rl&&(e=(0,qe.Pw)((0,qe.rl)({},e))),e}function gn(e,t,n,i,r,o){var a=arguments,s=a[0]||{},l=a[te],c=!1,u=1;for(l>0&&Gt(s)&&(c=s,s=a[u]||{},u++),Ft(s)||(s={});u<l;u++){var d=a[u],f=Ht(d),h=Ft(d);for(var p in d){var g=f&&p in d||h&&qe.CY[Pe](d,p);if(g){var v=d[p],m=void 0;if(c&&v&&((m=Ht(v))||Wt(v))){var y=s[p];m?Ht(y)||(y=[]):Wt(y)||(y={}),v=gn(c,y,v)}void 0!==v&&(s[p]=v)}}}return s}var vn="ctx",mn="ParentContextKey",yn="ChildrenContextKey",bn=function(){function e(t,n,i){var r,o=this,a=!1;o.start=rn(),o[W]=t,o[ve]=i,o[Re]=function(){return!1},Mt(n)&&(a=tn(o,"payload",(function(){return!r&&Mt(n)&&(r=n(),n=null),r}))),o[Ve]=function(t){return t?t===e[mn]||t===e[yn]?o[t]:(o[vn]||{})[t]:null},o[ze]=function(t,n){t&&(t===e[mn]?(o[t]||(o[Re]=function(){return!0}),o[t]=n):t===e[yn]?o[t]=n:(o[vn]=o[vn]||{})[t]=n)},o[Ue]=function(){var t=0,i=o[Ve](e[yn]);if(Ht(i))for(var r=0;r<i[te];r++){var s=i[r];s&&(t+=s[ne])}o[ne]=rn()-o.start,o.exTime=o[ne]-t,o[Ue]=function(){},!a&&Mt(n)&&(o.payload=n())}}return e.ParentContextKey="parent",e.ChildrenContextKey="childEvts",e}(),wn=),Cn="CoreUtils.doPerf";function xn(e,t,n,i,r){if(e){var o=e;if(o[st]&&(o=o[st]()),o){var a=void 0,s=o[Ve](Cn);try{if(a=o.create(t(),i,r)){if(s&&a[ze]&&(a[ze](bn[mn],s),s[Ve]&&s[ze])){var l=s[Ve](bn[yn]);l||(l=[],s[ze](bn[yn],l)),l[Y](a)}return o[ze](Cn,a),n(a)}}catch(e){a&&a[ze]&&a[ze]("exception",e)}finally{a&&o.fire(a),o[ze](Cn,s)}}}return n()}var Tn="window",kn="JSON",Sn="XMLHttpRequest",In=null,En=null,Ln=null,$n=null;function Dn(e,t){var n=!1;if(e){try{if(!(n=t in e)){var i=e[qe.hB];i&&(n=t in i)}}catch(e){}if(!n)try{n=!Ot((new e)[t])}catch(e){}}return n}function An(e){var t=(0,Ge.Rd)();return t&&t[e]?t[e]:e===Tn&&On()?window:null}function On(){return Boolean(typeof window===qe.fK&&window)}function Nn(){return On()?window:An(Tn)}function Pn(){return Boolean(typeof document===qe.fK&&document)}function _n(){return Pn()?document:An("document")}function Fn(){return Boolean(typeof navigator===qe.fK&&navigator)}function Mn(){return Fn()?navigator:An("navigator")}function Rn(e){return typeof location===qe.fK&&location?location:An("location")}function Vn(){return An("performance")}function zn(){return Boolean(typeof JSON===qe.fK&&JSON||null!==An(kn))}function Un(){return zn()?JSON||An(kn):null}unction Bn(){var e=Mn();if(e&&(e[Ie]!==En||null===In)){var t=((En=e[Ie])||We).toLowerCase();In=Ut(t,"msie")||Ut(t,"trident/")}return In}function jn(e){var t=Object[qe.hB].toString[Pe](e),n=We;return"[object Error]"===t?n="{ stack: '"+e.stack+"', message: '"+e.message+"', name: '"+e[W]+"'":zn()&&(n=Un().stringify(e)),t+n}function qn(){return null===$n&&($n=Fn()&&Boolean(Mn().sendBeacon)),$n}function Gn(e){var t=!1;try{t=!!An("fetch");var n=An("Request");t&&e&&n&&(t=Dn(n,"keepalive"))}catch(e){}return t}function Wn(){var e=!1;try{e=!!An(Sn)}catch(e){}return e}var Kn,Xn=["eventsSent","eventsDiscarded","eventsSendRequest","perfEvent"],Yn=null;function Zn(e,t){return function(){var n=arguments,i=Jn(t);if(i){var r=i.listener;r&&r[e]&&r[e][Ae](r,n)}}}function Jn(e){var t,n=Yn;return n||!0===e.disableDbgExt||(n=Yn||((t=An("Microsoft"))&&(Yn=t.ApplicationInsights),Yn)),n?n.ChromeDbgExt:null}function Qn(e){if(!Kn){Kn={};for(var t=0;t<Xn[te];t++)Kn[Xn[t]]=Zn(Xn[t],e)}return Kn}function ei(e){return e?'"'+e[Oe](/\"/g,We)+'"':We}function ti(e,t){var n=typeof console!==qe.jA?console:An("console");if(n){var i="log";n[e]&&(i=e),Mt(n[i])&&n[i](t)}}var ni=function(){function e(e,t,n,i){void 0===n&&(n=!1);var r=this;r[pe]=e,r[ge]=(n?"AI: ":"AI (Internal): ")+e;var o=We;zn()&&(o=Un().stringify(i));var a=(t?" message:"+ei(t):We)+(i?" props:"+ei(o):We);r[ge]+=a}return e.dataType="MessageData",e}();function ii(e,t){return(e||{})[ee]||new ri(t)}var ri=function(){function e(t){this.identifier="DiagnosticLogger",this.queue=[];var n,i,r,o,a=0,s={};q(e,this,(function(e){function l(t,n){if(!(a>=r)){var o=!0,l="AITR_"+n[pe];if(s[l]?o=!1:s[l]=!0,o&&(t<=i&&(e.queue[Y](n),a++,c(1===t?"error":"warn",n)),a===r)){var u="Internal events throttle limit per PageView reached for this app.",d=new ni(23,u,!1);e.queue[Y](d),1===t?e[ot](u):e[at](u)}}}function c(e,n){var i=Jn(t||{});i&&i[we]&&i[we](e,n)}!function(e){n=ln(e.loggingLevelConsole,0),i=ln(e.loggingLevelTelemetry,1),r=ln(e.maxMessageLimit,25),o=ln(e.enableDebug,ln(e[Ne],!1))}(t||{}),e.consoleLoggingLevel=function(){return n},e.telemetryLoggingLevel=function(){return i},e.maxInternalMessageLimit=function(){return r},e[Ne]=function(){return o},e.throwInternal=function(t,i,r,a,u){void 0===u&&(u=!1);var d=new ni(i,r,u,a);if(o)throw jn(d);var f=1===t?ot:at;if(Ot(d[ge]))c("throw"+(1===t?"Critical":"Warning"),d);else{if(u){var h=+d[pe];!s[h]&&n>=t&&(e[f](d[ge]),s[h]=!0)}else n>=t&&e[f](d[ge]);l(t,d)}},e[at]=function(e){ti("warn",e),c("warning",e)},e[ot]=function(e){ti("error",e),c("error",e)},e.resetInternalMessageCount=function(){a=0,s={}},e.logInternalMessage=l}))}return e.__ieDyn=1,e}();function oi(e){return e||new ri}function ai(e,t,n,i,r,o){void 0===o&&(o=!1),oi(e).throwInternal(t,n,i,r,o)}function si(e,t){oi(e)[at](t)}var li="toGMTString",ci="toUTCString",ui="cookie",di="expires",fi="enabled",hi="isCookieUseDisabled",pi="disableCookiesUsage",gi="_ckMgr",vi=null,mi=null,yi=null,bi=_n(),wi={},Ci={};function xi(e,t){var n=Ii[gi]||Ci[gi];return n||(n=Ii[gi]=Ii(e,t),Ci[gi]=n),n}function Ti(e){return!e||e.isEnabled()}function ki(e,t){return!!(t&&e&&Ht(e.ignoreCookies))&&-1!==e.ignoreCookies[ke](t)}function Si(e,t){var n;if(e)n=e.getCookieMgr();else if(t){var i=t[Te];n=i[gi]?i[gi]:Ii(t)}return n||(n=xi(t,(e||{})[ee])),n}function Ii(e,t){var n,i=function(e){var t=e[Te]=e[Te]||{};if(an(t,"domain",e.cookieDomain,Pt,Nt),an(t,"path",e.cookiePath||"/",null,Nt),Nt(t[fi])){var n=void 0;Ot(e[hi])||(n=!e[hi]),Ot(e[pi])||(n=!e[pi]),t[fi]=n}return t}(e||Ci),r=i.path||"/",o=i.domain,a=!1!==i[fi],s=((n={isEnabled:function(){var e=a&&Ei(t),n=Ci[gi];return e&&n&&s!==n&&(e=Ti(n)),e}})[Le]=function(e){a=!1!==e},n.set=function(e,t,n,a,l){var c,u=!1;if(Ti(s)&&!function(e,t){return!!(t&&e&&Ht(e.blockedCookies)&&-1!==e.blockedCookies[ke](t))||ki(e,t)}(i,e)){var d={},f=Zt(t||We),h=f[ke](";");if(-1!==h&&(f=Zt(t[Se](0,h)),d=Li(t[Se](h+1))),an(d,"domain",a||o,cn,Ot),!Nt(n)){var p=Bn();if(Ot(d[di])){var g=rn()+1e3*n;if(g>0){var v=new Date;v.setTime(g),an(d,di,$i(v,p?li:ci)||$i(v,p?li:ci)||We,cn)}}p||an(d,"max-age",We+n,null,Ot)}var m=Rn();m&&"https:"===m.protocol&&(an(d,"secure",null,null,Ot),null===mi&&(c=(Mn()||{})[Ie],mi=!(jt(c)&&(Ut(c,"CPU iPhone OS 12")||Ut(c,"iPad; CPU OS 12")||Ut(c,"Macintosh; Intel Mac OS X 10_14")&&Ut(c,"Version/")&&Ut(c,"Safari")||Ut(c,"Macintosh; Intel Mac OS X 10_14")&&function(e,t){var n=!1;return e&&t&&!(n=e===t)&&(n=Ct?e[ct](t):function(e,t){var n=!1,i=t?t[te]:0,r=e?e[te]:0;if(i&&r&&r>=i&&!(n=e===t)){for(var o=r-1,a=i-1;a>=0;a--){if(e[o]!=t[a])return!1;o--}n=!0}return n}(e,t)),n}(c,"AppleWebKit/605.1.15 (KHTML, like Gecko)")||Ut(c,"Chrome/5")||Ut(c,"Chrome/6")||Ut(c,"UnrealEngine")&&!Ut(c,"Chrome")||Ut(c,"UCBrowser/12")||Ut(c,"UCBrowser/11")))),mi&&an(d,"SameSite","None",null,Ot)),an(d,"path",l||r,null,Ot),(i.setCookie||Oi)(e,Di(f,d)),u=!0}return u},n.get=function(e){var t=We;return Ti(s)&&!ki(i,e)&&(t=(i.getCookie||Ai)(e)),t},n.del=function(e,t){var n=!1;return Ti(s)&&(n=s.purge(e,t)),n},n.purge=function(e,n){var r,o=!1;if(Ei(t)){var a=((r={}).path=n||"/",r[di]="Thu, 01 Jan 1970 00:00:01 GMT",r);Bn()||(a["max-age"]="0"),(i.delCookie||Oi)(e,Di(We,a)),o=!0}return o},n);return s[gi]=s,s}function Ei(e){if(null===vi){vi=!1;try{vi=void 0!==(bi||{})[ui]}catch(t){ai(e,2,68,"Cannot access document.cookie - "+on(t),{exception:jn(t)})}}return vi}function Li(e){var t={};return e&&e[te]&&Xt(Zt(e)[Ee](";"),(function(e){if(e=Zt(e||We)){var n=e[ke]("=");-1===n?t[e]=null:t[Zt(e[Se](0,n))]=Zt(e[Se](n+1))}})),t}function $i(e,t){return Mt(e[t])?e[t]():null}function Di(e,t){var n=e||We;return Vt(t,(function(e,t){n+="; "+e+(Nt(t)?We:"="+t)})),n}function Ai(e){var t=We;if(bi){var n=bi[ui]||We;yi!==n&&(wi=Li(n),yi=n),t=Zt(wi[e]||We)}return t}function Oi(e,t){bi&&(bi[ui]=e+"="+t)}var Ni=4294967296,Pi=4294967295,_i=!1,Fi=123456789,Mi=987654321;function Ri(e){e<0&&(e>>>=0),Fi=123456789+e&Pi,Mi=987654321-e&Pi,_i=!0}function Vi(){try{var e=2147483647&rn();Ri((Math.random()*Ni^e)+e)}catch(e){}}function zi(e){var t=0,n=An("crypto")||An("msCrypto");return n&&n.getRandomValues&&(t=n.getRandomValues(new Uint32Array(1))[0]&Pi),0===t&&Bn()&&(_i||Vi(),t=Ui()&Pi),0===t&&(t=Math.floor(Ni*Math.random()|0)),e||(t>>>=0),t}function Ui(e){var t=((Mi=36969*(65535&Mi)+(Mi>>16)&Pi)<<16)+(65535&(Fi=18e3*(65535&Fi)+(Fi>>16)&Pi))>>>0&Pi|0;return e||(t>>>=0),t}function Hi(e){void 0===e&&(e=22);for(var t=zi()>>>0,n=0,i=We;i[te]<e;)n++,i+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&t),t>>>=6,5===n&&(t=(zi()<<2&4294967295|3&t)>>>0,n=0);return i}var Bi=qe.RJ,ji="2.8.15",qi="."+Hi(6),Gi=0;function Wi(e){return 1===e[De]||9===e[De]||!+e[De]}function Ki(e,t){return void 0===t&&(t=!1),Rt(e+Gi+++(t?"."+ji:We)+qi)}function Xi(e){var t={id:Ki("_aiData-"+(e||We)+"."+ji),accept:function(e){return Wi(e)},get:function(e,n,i,r){var o=e[t.id];return o?o[Rt(n)]:(r&&((o=function(e,t){var n=t[e.id];if(!n){n={};try{Wi(t)&&(function(e,t,n){if(Bi)try{return Bi(e,t,{value:n,enumerable:!1,configurable:!0}),!0}catch(e){}return!1}(t,e.id,n)||(t[e.id]=n))}catch(e){}}return n}(t,e))[Rt(n)]=i),i)},kill:function(e,t){if(e&&e[t])try{delete e[t]}catch(e){}}};return t}var Yi="attachEvent",Zi="addEventListener",Ji="detachEvent",Qi="removeEventListener",er="events",tr="visibilitychange",nr="pagehide",ir="pageshow",rr="unload",or="beforeunload",ar=Ki("aiEvtPageHide"),sr=Ki("aiEvtPageShow"),lr=/\.[\.]+/g,cr=/[\.]+$/,ur=1,dr=Xi("events"),fr=/^([^.]*)(?:\.(.+)|)/;function hr(e){return e&&e[Oe]?e[Oe](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g,We):e}function pr(e,t){var n;if(t){var i=We;Ht(t)?(i=We,Xt(t,(function(e){(e=hr(e))&&("."!==e[0]&&(e="."+e),i+=e)}))):i=hr(t),i&&("."!==i[0]&&(i="."+i),e=(e||We)+i)}var r=fr.exec(e||We)||[];return(n={})[_e]=r[1],n.ns=(r[2]||We).replace(lr,".").replace(cr,We)[Ee](".").sort().join("."),n}function gr(e,t,n){void 0===n&&(n=!0);var i=dr.get(e,er,{},n),r=i[t];return r||(r=i[t]=[]),r}function vr(e,t,n,i){e&&t&&t[_e]&&(e[Qi]?e[Qi](t[_e],n,i):e[Ji]&&e[Ji]("on"+t[_e],n))}function mr(e,t,n,i){for(var r=t[te];r--;){var o=t[r];o&&(n.ns&&n.ns!==o.evtName.ns||i&&!i(o)||(vr(e,o.evtName,o[Fe],o.capture),t[fe](r,1)))}}function yr(e,t){return t?pr("xx",Ht(t)?[e].concat(t):[e,t]).ns[Ee]("."):e}function br(e,t,n,i,r){var o;void 0===r&&(r=!1);var a=!1;if(e)try{var s=pr(t,i);if(a=function(e,t,n,i){var r=!1;return e&&t&&t[_e]&&n&&(e[Zi]?(e[Zi](t[_e],n,i),r=!0):e[Yi]&&(e[Yi]("on"+t[_e],n),r=!0)),r}(e,s,n,r),a&&dr.accept(e)){var l=((o={guid:ur++,evtName:s})[Fe]=n,o.capture=r,o);gr(e,s.type)[Y](l)}}catch(e){}return a}function wr(e,t,n,i,r){if(void 0===r&&(r=!1),e)try{var o=pr(t,i),a=!1;!function(e,t,n){if(t[_e])mr(e,gr(e,t[_e]),t,n);else{var i=dr.get(e,er,{});Vt(i,(function(i,r){mr(e,r,t,n)})),0===en(i)[te]&&dr.kill(e,er)}}(e,o,(function(e){return!((!o.ns||n)&&e[Fe]!==n||(a=!0,0))})),a||vr(e,o,n,r)}catch(e){}}function Cr(e,t,n){var i=!1,r=Nn();r&&(i=br(r,e,t,n),i=br(r.body,e,t,n)||i);var o=_n();return o&&(i=br(o,e,t,n)||i),i}function xr(e,t,n,i){var r=!1;return t&&e&&e[te]>0&&Xt(e,(function(e){e&&(n&&-1!==Yt(n,e)||(r=Cr(e,t,i)||r))})),r}function Tr(e,t,n){e&&Ht(e)&&Xt(e,(function(e){e&&function(e,t,n){var i=Nn();i&&(wr(i,e,t,n),wr(i.body,e,t,n));var r=_n();r&&wr(r,e,t,n)}(e,t,n)}))}nction Ir(e,t,n){var i=yr(ar,n),r=xr([nr],e,t,i);return t&&-1!==Yt(t,tr)||(r=xr([tr],(function(t){var n=_n();e&&n&&"hidden"===n.visibilityState&&e(t)}),t,i)||r),!r&&t&&(r=Ir(e,null,n)),r}r $r,Dr=null;nction Nr(){for(var e,t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=We,i=0;i<4;i++)n+=t[15&(e=zi())]+t[e>>4&15]+t[e>>8&15]+t[e>>12&15]+t[e>>16&15]+t[e>>20&15]+t[e>>24&15]+t[e>>28&15];var r=t[8+(3&zi())|0];return n[$e](0,8)+n[$e](9,4)+"4"+n[$e](13,3)+r+n[$e](16,3)+n[$e](19,12)}var Pr={_canUseCookies:void 0,isTypeof:function(e,t){return typeof e===t},isUndefined:Ot,isNullOrUndefined:Nt,hasOwnProperty:_t,isFunction:Mt,isObject:Ft,isDate:function(e){return!(!e||"[object Date]"!==St[Pe](e))},isArray:Ht,isError:Bt,isString:jt,isNumber:qt,isBoolean:Gt,toISOString:Kt,arrForEach:Xt,arrIndexOf:Yt,arrMap:function(e,t,n){var i;if(e){if(e.map)return e.map(t,n);var r=e[te],o=n||e;i=new Array(r);try{for(var a=0;a<r;a++)a in e&&(i[a]=t[Pe](o,e[a],e))}catch(e){}}return i},arrReduce:function(e,t,n){var i;if(e){if(e[ft])return e[ft](t,n);var r=e[te],o=0;if(arguments[te]>=3)i=arguments[2];else{for(;o<r&&!(o in e);)o++;i=e[o++]}for(;o<r;)o in e&&(i=t(i,e[o],o,e)),o++}return i},strTrim:Zt,objCreate:Ge.pu,objKeys:en,objDefineAccessors:tn,addEventHandler:Cr,dateNow:rn,isIE:Bn,disableCookies:function(){var e,t,n,i;(n=xi(e,t),i=Pr._canUseCookies,null===Dr&&(Dr=[],$r=i,tn(Pr,"_canUseCookies",(function(){return $r}),(function(e){$r=e,Xt(Dr,(function(t){t[Le](e)}))}))),-1===Yt(Dr,n)&&Dr[Y](n),Gt(i)&&n[Le](i),Gt($r)&&n[Le]($r),n)[Le](!1)},newGuid:Ar,perfNow:Or,newId:Hi,randomValue:function(e){return e>0?Math.floor(zi()/Pi*(e+1))>>>0:0},random32:zi,mwcRandomSeed:function(e){e?Ri(e):Vi()},mwcRandom32:Ui,generateW3CId:Nr};var _r,Fr="",Mr="version",Rr="properties",Vr="1DS-Web-JS-3.2.13",zr="withCredentials",Ur=((_r={})[0]=0,_r[2]=6,_r[1]=1,_r[3]=7,_r[4098]=6,_r[4097]=1,_r[4099]=7,_r),Hr=Boolean(_n()),Br=Boolean(Nn());unction qr(e,t,n){var i=-1;if(!Ot(e))if(t>0&&(32===t?i=8192:t<=13&&(i=t<<5)),n))-1===i&&(i=0),i|=n;else{var r=Ur[Zr(e)]||-1;-1!==i&&-1!==r?i|=r:6===r&&(i=r)}return i}nction Kr(e,t,n,i,r){var o={},a=!1,s=0,l=arguments.length,c=Object[qe.hB],u=arguments;for("[object Boolean]"===c.toString.call(u[0])&&(a=u[0],s++);s<l;s++)Vt(e=u[s],();return o}var Xr=Or;unction Zr(e){var t=0;if(null!=e){var n=typeof e;"string"===n?t=1:"number"===n?t=2:"boolean"===n?t=3:n===qe.fK&&(t=4,Ht(e)?(t=4096,e.length>0&&(t|=Zr(e[0]))):qe.CY.call(e,"value")&&(t=8192|Zr(e.value)))}return t}qe.jA,qe.fK,qe.jA,Ge.pu;function Jr(e,t,n){return!(!e||e[te]!==t||e===n||!e.match(/^[\da-f]*$/))}function Qr(e){return Jr(e,32,"00000000000000000000000000000000")}ar to=Xi("plugin");function no(e){return to.get(e,"state",{},!0)}function io(e,t){for(var n,i=[],r=null,o=e[be]();o;){var a=o[ce]();a&&(r&&Mt(r[Ce])&&Mt(a[Qe])&&r[Ce](a),(Mt(a[Z])?a[Z]():(n=no(a))[Z])||i[Y](a),r=a,o=o[be]())}Xt(i,(function(i){var r=e[Xe]();i[G](e.getCfg(),r,t,e[be]()),n=no(i),i[Xe]||n[Xe]||(n[Xe]=r),n[Z]=!0,delete n[he]}))}function ro(e){return e.sort((function(e,t){var n=0;if(t){var i=Mt(t[Qe]);Mt(e[Qe])?n=i?e[et]-t[et]:1:i&&(n=-1)}else n=e?1:-1;return n}))}var oo="_hasRun",ao="_getTelCtx",so=0;function lo(e,t,n,i){var r=null,o=[];null!==i&&(r=i?function(e,t,n){for(;e;){if(e[ce]()===n)return e;e=e[be]()}return ho([n],t[J]||{},t)}(e,n,i):e);var a={_next:function(){var e=r;if(r=e?e[be]():null,!e){var t=o;t&&t[te]>0&&(Xt(t,(function(e){try{e.func[Pe](e.self,e.args)}catch(e){ai(n[ee],2,73,"Unexpected Exception during onComplete - "+jn(e))}})),o=[])}return e},ctx:{core:function(){return n},diagLog:function(){return ii(n,t)},getCfg:function(){return t},getExtCfg:s,getConfig:function(e,n,i){void 0===i&&(i=!1);var r,o=s(e,null);return o&&!Nt(o[n])?r=o[n]:t&&!Nt(t[n])&&(r=t[n]),Nt(r)?i:r},hasNext:function(){return!!r},getNext:function(){return r},setNext:function(e){r=e},iterate:function(e){for(var t;t=a._next();){var n=t[ce]();n&&e(n)}},onComplete:function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e&&o[Y]({func:e,self:Ot(t)?a.ctx:t,args:n})}}};function s(e,n,i){var r;if(void 0===n&&(n={}),void 0===i&&(i=0),t){var o=t[Je];o&&e&&(r=o[e])}if(r){if(Ft(n)&&0!==i){var a=gn(!0,n,r);t&&2===i&&Vt(n,(function(e){if(Nt(a[e])){var n=t[e];Nt(n)||(a[e]=n)}})),r=a}}else r=n;return r}return a}function co(e,t,n,i){var r=lo(e,t,n,i),o=r.ctx;return o[ie]=function(e){var t=r._next();return t&&t[Qe](e,o),!t},o[xe]=function(e,i){return void 0===e&&(e=null),Ht(e)&&(e=ho(e,t,n,i)),co(e||o[be](),t,n,i)},o}function uo(e,t,n){var i=t[J]||{},r=lo(e,i,t,n),o=r.ctx;return o[ie]=function(e){var t=r._next();return t&&t.unload(o,e),!t},o[xe]=function(e,n){return void 0===e&&(e=null),Ht(e)&&(e=ho(e,i,t,n)),uo(e||o[be](),t,n)},o}unction ho(e,t,n,i){var r=null,o=!i;if(Ht(e)&&e[te]>0){var a=null;Xt(e,(function(e){if(o||i!==e||(o=!0),o&&e&&Mt(e[Qe])){var s=function(e,t,n){var i,r=null,o=Mt(e[Qe]),a=Mt(e[Ce]),s={getPlugin:function(){return e},getNext:function(){return r},processTelemetry:unload:update:_id:i=e?e[X]+"-"+e[et]+"-"+so++:"Unknown-0-"+so++,_setNext:function(e){r=e}};function l(t,n,o,a,s){var l=!1,c=e?e[X]:"TelemetryPluginChain",u=t[oo];return u||(u=t[oo]={}),t.setNext(r),e&&xn(t[Xe](),(,(,a,s),l}return nn(s)}(e,t,n);r||(r=s),a&&a._setNext(s),a=s}}))}return i&&!r?ho([i],t,n):r}var po=500;r mo="getPlugin",yo=),bo=function(e){eturn(0,u.ne)(t,e),t.__ieDyn=1,t}(yo),wo="Plugins must provide initialize method",Co="_notificationManager",xo="SDK is still unloading...",To={loggingLevelConsole:1};r Io=function(){function e(){var t,n,i,r,o,a,s,l,c,d,f,h,p,g,v,m,y,b,w,C,x=0,T=!1;q(e,this,(function(e){ction E(n){var i=e[ee],0,c);d=i[Xe],l=null;var r=i.all;if(p=nn(h,r,e)),f){var o=Yt(r,f);-1!==o&&r[fe](o,1),-1!==(o=Yt(d,f))&&d[fe](o,1),f._setQueue(p)}else f=p,e);r[Y](f),d[Y](f),e[de]=ro(r),f[G](t,e,r),io(I(),r),e[de]=nn(ro(d||[])).slice(),n&&n)}Z]=function(){return n},e[G]=function(i,o,s,l){var d,f;g&&un(xo),e[Z]()&&un("Core should not be initialized more than once"),t=i||{},e[J]=t,Nt(i[Q])&&un("Please provide instrumentation key"),r=l,e[Co]=l,!0===(f=ln(t.disableDbgExt))&&w&&(r[ae](w),w=null),r&&!w&&!0!==f&&(w=Qn(t),r[oe](w)),!(d=ln(t.enablePerfMgr))&&a&&(a=null),d&&sn(t,Ye,ko),sn(t,Je,{}).NotificationManager=r,s&&(e[ee]=s);var v=sn(t,"extensions",[]);(c=[])[Y].apply(c,(0,u.$h)((0,u.$h)([],o,!1),v,!1)),h=sn(t,Ke,[]),E(null),p&&0!==p[te]||un("No "+Ke+" available"),n=!0,e.releaseQueue()},e.getTransmissionControls=function(){var e=[];return p&&Xt(p,(function(t){e[Y](t.queue)})),nn(e)},e.track=function(n){n.iKey=n.iKey||t[Q],n[ne]=n[ne]||Kt(new Date),n.ver=n.ver||"4.0",!g&&e[Z]()?I()[ie](n):i[Y](n)},e[re]=I,e[K]=function(){return r||(r=function(){var e;return(0,Ge.pu)(((e={})[oe]=function(e){},e[ae]=function(e){},e[tt]=function(e){},e[nt]=function(e,t){},e[it]=function(e,t){},e))}(),e[Co]=r),r},e[oe]=function(e){r&&r[oe](e)},e[ae]=function(e){r&&r[ae](e)},e.getCookieMgr=function(){return s||(s=Ii(t,e[ee])),s},e.setCookieMgr=function(e){s=e},e[st]=function(){if(!o&&!a&&ln(t.enablePerfMgr)){var n=ln(t[Ye]);Mt(n)&&(a=n(e,e[K]()))}return o||a||null},e.setPerfMgr=function(e){o=e},e.eventCnt=function(){return i[te]},e.releaseQueue=function(){if(n&&i[te]>0){var e=i;i=[],Xt(e,(function(e){I()[ie](e)}))}},e.pollInternalLogs=e[se]=hn(e,(function(){return v}),["addTelemetryInitializer"]),e.unload=function(t,i,r){var o;void 0===t&&(t=!0),n||un("SDK is not initialized"),g&&un(xo);var a=((o={reason:50})[ve]=t,o.flushComplete=!1,o),s=uo($(),e);function l(t){a.flushComplete=t,g=!0,b.run(s,a),e[se](),s[ie](a)}s[le]((function(){S(),i&&i(a)}),e),A(),O(t,l,6,r)||l(!1)},e[ce]=L,e.addPlugin=function(e,t,n,i){if(!e)return i&&i(!1),void N(wo);var r=L(e[X]);if(r&&!t)return i&&i(!1),void N("Plugin ["+e[X]+"] is already loaded!");var o={reason:16};function a(t){c[Y](e),o.added=[e],E(o),i&&i(!0)}if(r){var s=[r.plugin];D(s,{reason:2,isAsync:!!n},(function(e){e?(o.removed=s,o.reason|=32,a()):i&&i(!1)}))}else a()},e.evtNamespace=function(){return y},e[ue]=O,e.getTraceCtx=function(e){var t;return C||(t={},C={getName:function(){return t[W]},setName:function(e){t[W]=e},getTraceId:function(){return t[He]},setTraceId:function(e){Qr(e)&&(t[He]=e)},getSpanId:function(){return t[Be]},setSpanId:function(e){eo(e)&&(t[Be]=e)},getTraceFlags:function(){return t[je]},setTraceFlags:function(e){t[je]=e}}),C},e.setTraceCtx=function(e){C=e||null},fn(e,"addUnloadCb",(function(){return b}),"add")}))}return e.__ieDyn=1,e}();function Eo(e,t,n,i){Xt(e,(function(e){if(e&&e[t])if(n)setTimeout((function(){return i(e)}),0);else try{i(e)}catch(e){}}))}var Lo=),$o=function(e){eturn(0,u.ne)(t,e),t.__ieDyn=1,t}(Io),Do=function(e){function t(){var n=e.call(this)||this;return n.pluginVersionStringArr=[],(0,d.Z)(t,n,(function(e,t){e.logger&&e.logger.queue||(e.logger=new ri({loggingLevelConsole:1})),e.initialize=e.track=)),n}return(0,u.ne)(t,e),t.__ieDyn=1,t}($o);const Ao=Do;var Oo,No,Po=(No={},Vt({Unknown:0,NonRetryableStatus:1,InvalidEvent:2,SizeLimitExceeded:3,KillSwitch:4,QueueFull:5},(function(e,t){No[e]=t,No[t]=e})),Oo=No,mt&&Vt(Oo,(function(e,t){(Ht(t)||Ft(t))&&mt(t)})),nn(Oo)),_o="REAL_TIME",Fo="",Mo="POST",Ro="drop",Vo="requeue",zo="application/x-json-stream",Uo="cache-control",Ho="content-type",Bo="kill-duration",jo="time-delta-millis",qo="client-version",Go="client-id",Wo="time-delta-to-apply-millis",Ko="upload-time",Xo="apikey",Yo="AuthMsaDeviceTicket",Zo="AuthXToken",Jo="msfpc",Qo="trace",ea="user";r ia=);const ra=);var oa=function(){function e(){var t={};(0,d.Z)(e,this,()}return e.__ieDyn=1,e}();const aa=oa;ar la,ca=2e6,ua=Math.min(ca,65e3),da="metadata",fa="f",ha=/\./,pa=function(){function e(t,n,i,r){var o="data",a="baseData",s=!!r,l=n,c={};(0,d.Z)(e,this,(function(e){function n(e,t,r,o,a,u,d){Vt(e,(function(e,f){var h=null;if(f||jr(f)){var p=r,g=e,v=a,m=t;if(s&&!o&&ha.test(e)){var y=e.split("."),b=y.length;if(b>1){v&&(v=v.slice());for(var w=0;w<b-1;w++){var C=y[w];m=m[C]=m[C]||{},p+="."+C,v&&v.push(C)}g=y[b-1]}}var x=o&&p);if(h=!x&&l&&l.handleField(p,g)?l.value(p,g,f,i):function(e,t,n){if(!t&&!jr(t)||"string"!=typeof e)return null;var i=typeof t;if("string"===i||"number"===i||"boolean"===i||Ht(t))t={value:t};else if("object"!==i||qe.CY.call(t,"value")){if(Nt(t.value)||t.value===Fr||!jt(t.value)&&!qt(t.value)&&!Gt(t.value)&&!Ht(t.value))return null}else t={value:n?JSON.stringify(t):t};if(Ht(t.value)&&!(t.value.length>0))return null;if(!Nt(t.kind)){if(Ht(t.value)||!(0===(r=t.kind)||r>0&&r<=13||32===r))return null;t.value=t.value.toString()}var r;return t}(g,f,i)){var T=h.value;if(m[g]=T,u&&u(v,g,h),d&&"object"==typeof T&&!Ht(T)){var k=v;k&&(k=k.slice()).push(g),n(f,T,p+"."+g,o,k,u,d)}}}}))}e.createPayload=e.appendPayload=e.getEventBlob=function(e){try{return xn(t,(function(){return"Serializer.getEventBlob"}),(function(){var t={};t.name=e.name,t.time=e.time,t.ver=e.ver,t.iKey="o:"+function(e){if(e){var t=e.indexOf("-");if(t>-1)return e.substring(0,t)}return Fr}(e.iKey);var i={},r=e.ext;r&&(t.ext=i,Vt(r,());var s=t[o]={};s.baseType=e.baseType;var l=s[a]={};return n(e.baseData,l,a,!1,[a],(function(e,t,n){ga(i,e,t,n)}),!0),n(e.data,s,o,!1,[],(,!0),JSON.stringify(t)}),(function(){return{item:e}}))}catch(e){return null}}}))}return e.__ieDyn=1,e}();ar va="sendAttempt",ma="&NoResponseBody=true",ya=((la={})[1]=Vo,la[100]=Vo,la[200]="sent",la[8004]=Ro,la[8003]=Ro,la),ba={},wa={};,Yo,!1),Ca(qo,qo),Ca(Go,"Client-Id"),Ca(Xo,Xo),Ca(Wo,Wo),Ca(Ko,Ko),Ca(Zo,Zo);var Ia=function(){function e(t,n,i,r,o){this._responseHandlers=[];var a,s,l,c,u,f,h,p,g,v,m="?cors=true&"+Ho.toLowerCase()+"="+zo,y=new aa,b=!1,w=new ra,C=!1,x=0,T=!0,k=[],S={},I=[],E=null,L=!1,$=!1,D=!1;(0,d.Z)(e,this,(function(e){var d=!0;function A(e,t){for(var n=0,i=null,r=0;null==i&&r<e.length;)1===(n=e[r])?(null===Ln&&(Ln=typeof XDomainRequest!==qe.jA)&&Wn()&&(Ln=Ln&&!Dn(An(Sn),"withCredentials")),Ln?i=O:Wn()&&(i=P)):2===n&&Gn(t)&&(!t||t&&!p)?i=N:C&&3===n&&qn()&&(i=F),r++;return i?{_transport:n,_isSync:t,sendPOST:i}:null}nction P(e,t,n){var i=e.urlString;unction o(e,n){_(t,e.status,function(e){var t,n,i={};return e.getAllResponseHeaders?(t=e.getAllResponseHeaders(),n={},jt(t)&&Xt(Zt(t).split(/[\r\n]+/),(),i=n):(i=r(i,e,jo),i=r(i,e,Bo),i=r(i,e,"kill-duration-seconds")),i}(e),n)}n&&e.disableXhrSync&&(n=!1);var a=Mo,i,d,!0,n,e.timeout);Vt(e.headers,(function(e,t){a.setRequestHeader(e,t)})),a.onload=a.onerror=function(){o(a)},a.ontimeout=a.send(e.data)}(t,n,r,o){if(t&&t.payloadBlob&&t.payloadBlob.length>0){var u=!!e.sendHook,d=l[t.sendType];!M(t.sendType)&&t.isBeacon&&2===t.sendReason&&(d=l[2]||l[3]||d);var g=D;(t.isBeacon||3===d._transport)&&(g=!1);var v=function(e,t){var n={url:m,hdrs:{},useHdrs:!1};t?(n.hdrs=Kr(n.hdrs,S),n.useHdrs=en(n.hdrs).length>0):Vt(S,(),ka(n,Go,"NO_AUTH",t),ka(n,qo,Vr,t);var i=Fo;Xt(e.apiKeys,(),ka(n,Xo,i,t),ka(n,Ko,rn().toString(),t);var r=e);if(jr(r)&&(n.url+="&ext.intweb.msfpc="+r),w.shouldAddClockSkewHeaders()&&ka(n,Wo,w.getClockSkewHeaderValue(),t),c.getWParam){var o=c.getWParam();o>=0&&(n.url+="&w="+o)}for(var a=0;a<k.length;a++)n.url+="&"+k[a].name+"="+k[a].value;return n}(t,g);g=g||v.useHdrs;var b=Xr();xn(c,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var l=0;l<t.batches.length;l++)for(var m=t.batches[l].events(),C=0;C<m.length;C++){var k=m[C];if(L){var S=k.timings=k.timings||{};j(S,"sendEventStart",b),j(S,"serializationStart",n),j(S,"serializationCompleted",r)}k[va]>0?k[va]++:k[va]=1}K(t.batches,1e3+(o||0),t.sendType,!0);var I={data:t.payloadBlob,urlString:v.url,headers:v.hdrs,_thePayload:t,_sendReason:o,timeout:f,disableXhrSync:h,disableFetchKeepAlive:p};g&&(Ta(I.headers,Uo)||(I.headers[Uo]="no-cache, no-store"),Ta(I.headers,Ho)||(I.headers[Ho]=zo));var E=null;d&&(E=function(n){w.firstRequestSent();var r=function(n,r){!function(t,n,r,o){var s,l=9e3,c=null,u=!1,d=!1;try{var f=!0;if(typeof t!==qe.jA){if(n){w.setClockSkew(n[jo]);var h=n[Bo]||n["kill-duration-seconds"];Xt(y.setKillSwitchTenants(n["kill-tokens"],h),()}if(200==t||204==t)return void(l=200);((s=t)>=300&&s<500&&408!=s&&429!=s||501==s||505==s||r.numEvents<=0)&&(f=!1),l=9e3+t%1e3}if(f){l=100;var p=r.retryCnt;0===r.sendType&&(p<i?(u=!0,G((,$,sa(p))):(d=!0,$&&(l=8001)))}}finally{u||(w.setClockSkew(),r,l,o,d)),K(c,8004,r.sendType)}}(n,r,t,o)},l=t.isTeardown||t.isSync;try{d.sendPOST(n,r,l),e.sendListener&&e.sendListener(I,n,l,t.isBeacon)}catch(e){si(s,"Unexpected exception sending payload. Ex:"+jn(e)),_(r,0,{})}}),xn(c,(function(){return"HttpManager:_doPayloadSend.sender"}),()}),(,t.isSync)}t.sizeExceed&&t.sizeExceed.length>0&&K(t.sizeExceed,8003,t.sendType),t.failedEvts&&t.failedEvts.length>0&&K(t.failedEvts,8002,t.sendType)}nction K(e,t,n,i){if(e&&e.length>0&&r){var o=r[(l=t,u=ya[l],jr(u)||(u="oth",l>=9e3&&l<=9999?u="rspFail":l>=8e3&&l<=8999?u=Ro:l>=1e3&&l<=1999&&(u="send")),u)];if(o){var a=0!==n;xn(c,(function(){return"HttpManager:_sendBatchesNotification"}),(,(,!a)}}var l,u}e.initialize=e._getDbgPlgTargets=e.addQueryStringParameter=e.addHeader=function(e,t){S[e]=t},e.canSendRequest=e.sendQueuedRequests=e.isCompletelyIdle=e.setUnloading=function(e){$=e},e.addBatch=e.teardown=e.pause=e.resume=e.sendSynchronousBatch=))}return e.__ieDyn=1,e}(); Da="eventsDiscarded",Aa="overrideInstrumentationKey",Oa="maxEventRetryAttempts",Na="maxUnloadEventRetryAttempts",Pa=function(e){function t(){var n,i=e.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.13";var r,o,a,s,l,c,u,f=!1,h=[],p=null,g=!1,v=0,m=500,y=0,b=1e4,w={},C=_o,x=null,T=null,k=0,S=0,I={},E=-1,L=!0,$=!1,D=6,A=2;return(0,d.Z)(t,i,(function(e,t){itialize=function(s,l,f){xn(l,(,(function(){var h=l;t.initialize(s,l,f);try{l.addUnloadCb,c=yr(Ki(e.identifier),l.evtNamespace&&l.evtNamespace());var p=e._getTelCtx();s.extensionConfig[e.identifier]=s.extensionConfig[e.identifier]||{},n=p.getExtCfg(e.identifier),u=$a(n.setTimeoutOverride,n.clearTimeoutOverride),L=!n.disableOptimizeObj&&!!An("chrome"),h),n.eventsLimitInMem>0&&(b=n.eventsLimitInMem),n.immediateEventLimit>0&&(m=n.immediateEventLimit),n.autoFlushEventsLimit>0&&(a=n.autoFlushEventsLimit),qt(n[Oa])&&(D=n[Oa]),qt(n[Na])&&(A=n[Na]),ie(),n.httpXHROverride&&n.httpXHROverride.sendPOST&&(r=n.httpXHROverride),jr(s.anonCookieName)&&o.addQueryStringParameter("anoncknm",s.anonCookieName),o.sendHook=n.payloadPreprocessor,o.sendListener=n.payloadListener;var g=n.overrideEndpointUrl?n.overrideEndpointUrl:s.endpointUrl;e._notificationManager=l.getNotifyMgr(),o.initialize(g,e.core,e,r,n);var v=s.disablePageUnloadEvents||[];kr(i,v,c),Ir(i,v,c),Lr(d,s.disablePageShowEvents,c)}catch(t){throw e.setInitialized(!1),t}}),()},e.processTelemetry=e._doTeardown=e.setEventQueueLimits=e.pause=e.resume=e.addResponseHandler=e._loadTransmitProfiles=e.flush=e.setMsaAuthTicket=e.hasEvents=P,e._setTransmitProfile=e._backOffTransmission=e._clearBackOff=tn(e,"_setTimeoutOverride",(function(){return u.set}),(),tn(e,"_clearTimeoutOverride",(function(){return u.clear}),()})),i}return(0,u.ne)(t,e),t.__ieDyn=1,t}(yo);const _a=Pa;var Fa="call",Ma="toString",Ra=(qe.RJ,qe.Pw.freeze),Va=(qe.Pw.seal,qe.Pw.keys,String[qe.hB]),za=(Va.trim,Va.endsWith,Va.startsWith,Date[qe.hB].toISOString,Array.isArray),Ua=qe.V4[Ma];function Ha(e,t){if(e)for(var n in e)qe.CY[Fa](e,n)&&t[Fa](e,n,e[n])}qe.CY[Ma][Fa](qe.Pw),Object.getPrototypeOf;var Ba=za||function(e){return!(!e||"[object Array]"!==Ua[Fa](e))};({toString:null}).propertyIsEnumerable("toString");var ja=Ra||function(e){return e};function qa(e){var t={};return Ha(e,(function(e,n){t[e]=n[1],t[n[0]]=n[1]})),function(e){return Ra&&Ha(e,(function(e,t){(Ba(t)||function(e){return!(!e||typeof e!==qe.fK)}(t))&&Ra(t)})),ja(e)}(t)}var Ga,Wa="locale",Ka="ver",Xa="name",Ya=qa({UserExt:[0,"user"],DeviceExt:[1,"device"],TraceExt:[2,"trace"],WebExt:[3,"web"],AppExt:[4,"app"],OSExt:[5,"os"],SdkExt:[6,"sdk"],IntWebExt:[7,"intweb"],UtcExt:[8,"utc"],LocExt:[9,"loc"],CloudExt:[10,"cloud"],DtExt:[11,"dt"]}),Za=qa({id:[0,"id"],ver:[1,Ka],appName:[2,Xa],locale:[3,Wa],expId:[4,"expId"],env:[5,"env"]}),Ja=qa({domain:[0,"domain"],browser:[1,"browser"],browserVer:[2,"browserVer"],screenRes:[3,"screenRes"],userConsent:[4,"userConsent"],consentDetails:[5,"consentDetails"]}),Qa=qa({locale:[0,Wa],localId:[1,"localId"],id:[2,"id"]}),es=qa({osName:[0,Xa],ver:[1,Ka]}),ts=qa({ver:[0,Ka],seq:[1,"seq"],installId:[2,"installId"],epoch:[3,"epoch"]}),ns=qa({msfpc:[0,"msfpc"],anid:[1,"anid"],serviceName:[2,"serviceName"]}),is=qa({popSample:[0,"popSample"],eventFlags:[1,"eventFlags"]}),rs=qa({tz:[0,"tz"]}),os=qa({sessionId:[0,"sesId"]}),as=qa({localId:[0,"localId"],deviceClass:[1,"deviceClass"],make:[2,"make"],model:[3,"model"]}),ss=qa({role:[0,"role"],roleInstance:[1,"roleInstance"],roleVer:[2,"roleVer"]}),ls=qa({traceId:[0,"traceID"],traceName:[1,Xa],parentId:[2,"parentID"]}),cs=qa({traceId:[0,"traceId"],spanId:[1,"spanId"],traceFlags:[2,"traceFlags"]});nction fs(e){var t,n,i=null;try{var r=(0,Ge.Rd)();if(!r)return null;n=new Date,(i=0===e?r.localStorage:r.sessionStorage)&&Mt(i.setItem)&&(i.setItem(n,n),t=i.getItem(n)!==n,i.removeItem(n),t&&(i=null))}catch(e){i=null}return i}function hs(){return this.getId()}function ps(e){this.setId(e)}var gs=function(){function e(){(0,d.Z)(e,this,()}return e._staticInit=void tn(e.prototype,"id",hs,ps),e}(),vs="ai_session",ms=function(){function e(t,n){var i,r,o=ii(t),a=Si(t);(0,d.Z)(e,this,(function(t){var s,l={sessionRenewalMs:(s=n).sessionRenewalMs&&function(){return s.sessionRenewalMs},sessionExpirationMs:s.sessionExpirationMs&&function(){return s.sessionExpirationMs},cookieDomain:s.cookieDomain&&function(){return s.cookieDomain},namePrefix:s.namePrefix&&function(){return s.namePrefix},sessionAsGuid:function(){return s.sessionAsGuid},idLength:;n.sessionExpirationMs)||(l.sessionExpirationMs=function(){return e.acquisitionSpan}),Mt(n.sessionRenewalMs)||(l.sessionRenewalMs=function(){return e.renewalSpan}),t.config=l,r=t.automaticSession=new gs,t.update=function(){t.automaticSession.getId()||);var n=t.automaticSession,s=t.config,l=(new Date).getTime(),f=l-n.acquisitionDate>s.sessionExpirationMs(),h=l-n.renewalDate>s.sessionRenewalMs();f||h?u():(!i||l-i>e.cookieUpdateInterval)&&(n.renewalDate=l,d(n.getId(),n.acquisitionDate,n.renewalDate))},t.backup=function(){var e,n,i,a=t.automaticSession;e=a.getId(),n=a.acquisitionDate,i=a.renewalDate,function(e,t,n){var i=ds();if(null!==i)try{i.setItem(t,n)}catch(t){Ga=!1,ai(e,1,504,"Browser failed write to local storage. "+t)}}(o,r(),[e,n,i].join("|"))}}))}return e.acquisitionSpan=864e5,e.renewalSpan=18e5,e.cookieUpdateInterval=6e4,e}(),ys=["AX","EX","SF","CS","CF","CT","CU","DC","DF","H5","HL","WS","WP"];nction Cs(){return this.getExpId()}var xs=function(){function e(t,n){var i=null,r=ys.slice(0),o=Si(n),a=t;(0,d.Z)(e,this,(function(e){if(Pn()){var n=_n().documentElement;n&&(e.locale=n.lang)}.env=t.env?t.env:function(e){var t,n={},i=_n();if(i){t=i&&i.querySelectorAll("meta");for(var r=0;r<t.length;r++){var o=t[r];o.name&&0===o.name.toLowerCase().indexOf(e)&&(n[o.name.replace(e,"")]=o.content)}}return n}("awa-").env,e.getExpId=))}return e.validateAppExpId=bs,e._staticInit=void tn(e.prototype,"expId",Cs),e}(),Ts=function(){},ks=function(){};function Ss(){return this.getMsfpc()}function Is(){return this.getAnid()}var Es=function(){function e(t,n){var i=Si(n);(0,d.Z)(e,this,()}var t;return e._staticInit=(tn(t=e.prototype,"msfpc",Ss),void tn(t,"anid",Is)),e}(),Ls=$s={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(ipad|iphone|ipod)(?=.*like mac os x)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i,CROS:/CrOS/i},Ds={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},As="([\\d,_,.]+)",Os="Unknown",Ns=[{r:$s.WINPHONE,os:"Windows Phone"},{r:$s.WINRT,os:"Windows RT"},{r:$s.WIN,os:"Windows"},{r:$s.IOS,os:"iOS"},{r:$s.ANDROID,os:"Android"},{r:$s.LINUX,os:"Linux"},{r:$s.CROS,os:"Chrome OS"},{s:"x11",os:"Unix"},{s:"blackberry",os:"BlackBerry"},{s:"symbian",os:"Symbian"},{s:"nokia",os:"Nokia"},{r:$s.OSX,os:"Mac OS X"}];r Fs=function(e){if(e.populateOperatingSystemInfo){var t=this,n=Mn()||{},i=e.userAgent||n.userAgent||"",r=e.userAgentData||n.userAgentData||{};if(i){var o=i.toLowerCase());t.name=o,t.ver=function(e,t){return"Windows"===t?Ps(e,"Windows NT"):"Android"===t?Ps(e,t):"Mac OS X"===t?function(e){var t=e.match(new RegExp("Mac OS X "+As));if(t){var n=t[1].replace(/_/g,".");if(n){var i=_s(n);return i?n.split(i)[0]:n}}return Os}(e):"iOS"===t?e):Os}(i,o)}t.name&&t.name!==Os||!jt(r.platform)||(t.name=r.platform)}},Ms="MicrosoftApplicationsTelemetryDeviceId",Rs=function(){function e(t,n){var i=0;(0,d.Z)(e,this,(function(e){var r=t.propertyStorageOverride;e.seq=i,e.epoch=zi(!1).toString();var o=Si(n,t);if(o.isEnabled()||r){var a=o,r,Ms);a||(a=Ar()),o,r,Ms,a),e.installId=a}else o.purge(Ms);e.getSequenceId=))}return e.__ieDyn=1,e}(),Vs=function(e,t,n,i){var r=this;if(r.traceId=t||Nr(),e.enableDistributedTracing&&!n&&(n=Nr().substring(0,16)),r.parentId=n,e.enableApplicationInsightsTrace){r.name=i;var o=Rn();o&&o.pathname&&(r.name=o.pathname)}},zs="setLocalId";function Us(){return this.getLocalId()}ar Bs=function(){function e(t,n,i){var r,o=n,a=Si(i,t);(0,d.Z)(e,this,(function(n){if(a&&a.isEnabled()&&(f(),o.enableApplicationInsightsUser)){var i=Gr(a,e.userCookieName);if(i){var s=i.split(e.cookieSeparator);s.length>0&&(n.id=s[0])}if(!n.id){n.id=Hi(t&&!Ot(t.idLength)?t.idLength:22);var l=Kt(new Date);n.accountAcquisitionDate=l;var c=[n.id,l],u=o.cookieDomain?o.cookieDomain:void 0;a.set(e.userCookieName,c.join(e.cookieSeparator),31536e3,u)}}if("undefined"!=typeof navigator){var d=navigator;n.locale=d.userLanguage||d.language}.getLocalId=n[zs]=function(e){r=e}}))}return e.cookieSeparator="|",e.userCookieName="ai_user",e._staticInit=void tn(e.prototype,"localId",Us,Hs),e}(),js=qs=["Required","Analytics","SocialMedia","Advertising"],Gs="([\\d,.]+)",Ws="Unknown",Ks="Edg/",Xs=[{ua:"OPR/",b:"Opera"},{ua:"PhantomJS",b:"PhantomJS"},{ua:"Edge",b:"Edge"},{ua:Ks,b:"Edge"},{ua:"Electron",b:"Electron"},{ua:"Chrome",b:"Chrome"},{ua:"Trident",b:"MSIE"},{ua:"MSIE ",b:"MSIE"},{ua:"Firefox",b:"Firefox"},{ua:"Safari",b:"Safari"},{ua:"SkypeShell",b:"SkypeShell"}],Ys=[{br:"Microsoft Edge",b:"Edge"},{br:"Google Chrome",b:"Chrome"},{br:"Opera",b:"Opera"}]; el=function(){function e(t,n){var i=Si(n),r=t||{};(0,d.Z)(e,this,(function(e){var t=Rn();if(t){var n=t.hostname;n&&(e.domain="file:"===t.protocol?"local":n)}if(r.populateBrowserInfo){var o=r.userAgent,a=(r.userAgentData||{}).brands,s=Mn();s&&(o=o||s.userAgent||"",a=a||(s.userAgentData||{}).brands),function(t,n){if(Ht(n))try{for(var i=0;i<Ys.length;i++){var r=Js(Ys[i].br,n);if(r)return e.browser=Ys[i].b,void(e.browserVer=r)}}catch(e){}if(t){var o=t);e.browser=o,e.browserVer=function(e,t){return"MSIE"===t?function(e){var t=e.match(new RegExp("MSIE "+Gs));if(t)return t[1];var n=e.match(new RegExp("rv:"+Gs));return n?n[1]:void 0}(e):function(e,t){"Safari"===e?e="Version":"Edge"===e&&Zs(Ks,t)&&(e="Edg");var n=t.match(new RegExp(e+"/"+Gs));return n||"Opera"===e&&(n=t.match(new RegExp("OPR/"+Gs)))?n[1]:Ws}(t,e)}(t,o)}}(o,a);var l=);e.screenRes=l.w+"X"+l.h}Ot(r.gpcDataSharingOptIn)?e.gpcDataSharingOptIn=null:e.gpcDataSharingOptIn=r.gpcDataSharingOptIn,e.getUserConsent=e.getUserConsentDetails=tn(e,"userConsent",e.getUserConsent)}))}return e._staticInit=void tn(e.prototype,"userConsent",Qs),e}();function tl(e,t,n,i,r){var o=t.ext[Ya[e]];return o&&Vt(i,(),o}var nl=function(){function e(t,n,i){(0,d.Z)(e,this,(function(e){e.app=new xs(n,i),e.cloud=new Ts,e.user=new Bs(t,n,i),e.os=new Fs(n),e.web=new el(n,i);var r=new Rs(t,i),o=new Es(n,i),a=new js(n);e.loc=new Ls,e.device=new ks;var s=new ms(i,n);e.session=new gs;var l,c,u,d=(l=new Vs(n),c=p(),u=l||{},{getName:function(){return u.name},setName:function(e){c&&c.setName(e),u.name=e},getTraceId:function(){return u.traceId},setTraceId:function(e){c&&c.setTraceId(e),Qr(e)&&(u.traceId=e)},getSpanId:function(){return u.parentId},setSpanId:function(e){c&&c.setSpanId(e),eo(e)&&(u.parentId=e)},getTraceFlags:function(){return u.traceFlags},setTraceFlags:function(e){c&&c.setTraceFlags(e),u.traceFlags=e}}),f=!(n||{}).eventContainExtFields;getTraceCtx=function(){return d},e.getSessionId=h,e.applyApplicationContext=e.applyUserContext=e.applyWebContext=e.applyOsContext=e.applySdkContext=e.applyIntWebContext=e.applyUtcContext=e.applyLocContext=e.applySessionContext=e.applyDeviceContext=e.applyCloudContext=e.applyAITraceContext=e.applyDistributedTraceContext=))}return e.__ieDyn=1,e}(),il=[Ya[4],Ya[0],Ya[3],Ya[5],Ya[6],Ya[7],Ya[8],Ya[9],Ya[1],Ya[2],Ya[11],Ya[10]];const rl=function(e){function t(){var n,i,r,o=e.call(this)||this;return o.identifier="SystemPropertiesCollector",o.priority=3,o.version="3.2.13",(0,d.Z)(t,o,(function(e,t){(),e.initialize=e.processTelemetry=e.getPropertiesContext=function(){return n},e.setProperty=e._doTeardown=)),o}return(0,u.ne)(t,e),t.__ieDyn=1,t}(yo);var ol=["c:","i:","w:"],al={"microsoft.com":"c1.microsoft.com","xbox.com":"c.xbox.com","live.com":"c.live.com","microsoftstore.com":"c.microsoftstore.com","msn.com":"c.msn.com","windows.com":"c.windows.com","office.com":"c.office.com"};const sl=function(){function e(t){this.core=t;var n,i=Wr(),r=Nr(),o=null,a=!1,s=Si(t);(0,d.Z)(e,this,()}return e.visitorId=e}(),ll=);var cl,ul="undefined",dl="constructor",fl="prototype",hl="function",pl="_dynInstFuncs",gl="_isDynProxy",vl="_dynClass",ml="_dynInstChk",yl=ml,bl="_dfOpts",wl="_unknown_",Cl="__proto__",xl="_dyn"+Cl,Tl="__dynProto$Gbl",kl="_dynInstProto",Sl="useBaseInst",Il="setInstFuncs",El=Object,Ll=El.getPrototypeOf,$l=El.getOwnPropertyNames,Dl=function(){var e;return typeof globalThis!==ul&&(e=globalThis),e||typeof self===ul||(e=self),e||typeof window===ul||(e=window),e||typeof n.g===ul||(e=n.g),e||{}}(),Al=Dl[Tl]||(Dl[Tl]={o:(cl={},cl[Il]=!0,cl[Sl]=!0,cl),n:1e3});function Ol(e,t){return e&&El[fl].hasOwnProperty.call(e,t)}function Nl(e){return e&&(e===El[fl]||e===Array[fl])}function Pl(e){return Nl(e)||e===Function[fl]}function _l(e){var t;if(e){if(Ll)return Ll(e);var n=e[Cl]||e[fl]||(e[dl]?e[dl][fl]:null);t=e[xl]||n,Ol(e,xl)||(delete e[kl],t=e[xl]=e[kl]||e[xl],e[kl]=n)}return t}function Fl(e,t){var n=[];if($l)n=$l(e);else for(var i in e)"string"==typeof i&&Ol(e,i)&&n.push(i);if(n&&n.length>0)for(var r=0;r<n.length;r++)t(n[r])}function Ml(e,t,n){return t!==dl&&typeof e[t]===hl&&(n||Ol(e,t))}function Rl(e){throw new TypeError("DynamicProto: "+e)}function Vl(e,t){for(var n=e.length-1;n>=0;n--)if(e[n]===t)return!0;return!1}function zl(e,t,n,i){var r=null;if(e&&Ol(n,vl)){var o=e[pl]||{};if((r=(o[n[vl]]||{})[t])||Rl("Missing ["+t+"] "+hl),!r[ml]&&!1!==o[yl]){for(var a=!Ol(e,t),s=_l(e),l=[];a&&s&&!Pl(s)&&!Vl(l,s);){var c=s[t];if(c){a=c===i;break}l.push(s),s=_l(s)}try{a&&(e[t]=r),r[ml]=1}catch(e){o[yl]=!1}}}return r}function Ul(e,t,n){var i=t[e];return i===n&&(i=_l(t)[e]),typeof i!==hl&&Rl("["+e+"] is not a "+hl),i}function Hl(e,t){return Ol(e,fl)?e.name||t||wl:((e||{})[dl]||{}).name||t||wl}function Bl(e,t,n,i){Ol(e,fl)||Rl("theClass is an invalid class definition.");var r=e[fl];(function(e,t){if(Ll){for(var n=[],i=_l(t);i&&!Pl(i)&&!Vl(n,i);){if(i===e)return!0;n.push(i),i=_l(i)}return!1}return!0})(r,t)||Rl("["+Hl(e)+"] not in hierarchy of ["+Hl(t)+"]");var o=null;Ol(r,vl)?o=r[vl]:(o="_dynCls$"+Hl(e,"_")+"$"+Al.n,Al.n++,r[vl]=o);var a=Bl[bl],s=!!a[Sl];s&&i&&void 0!==i[Sl]&&(s=!!i[Sl]);var l=function(e){var t={};return Fl(e,(function(n){!t[n]&&Ml(e,n,!1)&&(t[n]=e[n])})),t}(t),c=function(e,t,n,i){function r(e,t,n){var r=t[n];if(r[gl]&&i){var o=e[pl]||{};!1!==o[yl]&&(r=(o[t[vl]]||{})[n]||r)}return function(){return r.apply(e,arguments)}}var o={};Fl(n,(function(e){o[e]=r(t,n,e)}));for(var a=_l(e),s=[];a&&!Pl(a)&&!Vl(s,a);)Fl(a,(function(e){!o[e]&&Ml(a,e,!Ll)&&(o[e]=r(t,a,e))})),s.push(a),a=_l(a);return o}(r,t,l,s);n(t,c);var u=!!Ll&&!!a[Il];u&&i&&(u=!!i[Il]),function(e,t,n,i,r){if(!Nl(e)){var o=n[pl]=n[pl]||{},a=o[t]=o[t]||{};!1!==o[yl]&&(o[yl]=!!r),Fl(n,(function(t){Ml(n,t,!1)&&n[t]!==i[t]&&(a[t]=n[t],delete n[t],(!Ol(e,t)||e[t]&&!e[t][gl])&&(e[t]=function(e,t){var n=function(){return(zl(this,t,e,n)||Ul(t,e,n)).apply(this,arguments)};return n[gl]=1,n}(e,t)))}))}}(r,o,t,l,!1!==u)}Bl[bl]=Al.o;var jl="name",ql="identifier",Gl="push",Wl="isInitialized",Kl="config",Xl="logger",Yl="length",Zl="time",Jl="processNext",Ql="getPlugin",ec="splice",tc="teardown",nc="messageId",ic="message",rc="isAsync",oc="_doTeardown",ac="update",sc="getNext",lc="diagLog",cc="setNextPlugin",uc="createNew",dc="cookieCfg",fc="indexOf",hc="substring",pc="userAgent",gc="split",vc="setEnabled",mc="substr",yc="nodeType",bc="apply",wc="replace",Cc="enableDebugExceptions",xc="call",Tc="type",kc="handler",Sc="isChildEvt",Ic="getCtx",Ec="setCtx",Lc="complete",$c="",Dc="core",Ac="extensionConfig",Oc="processTelemetry",Nc="errorToConsole",Pc="warnToConsole",_c="getPerfMgr",Fc="toISOString",Mc="endsWith",Rc="indexOf",Vc="reduce",zc="trim",Uc="toString",Hc="constructor",Bc=qe.RJ,jc=qe.Pw.freeze,qc=(qe.Pw.seal,qe.Pw.keys),Gc=String[qe.hB],Wc=Gc[zc],Kc=Gc[Mc],Xc=(Gc.startsWith,Date[qe.hB][Fc]),Yc=Array.isArray,Zc=qe.V4[Uc],Jc=qe.CY[Uc],Qc=Jc[xc](qe.Pw),eu=/-([a-z])/g,tu=/([^\w\d_$])/g,nu=/^(\d+[\w\d_$])/,iu=Object.getPrototypeOf;ion cu(e){return!(!e||typeof e!==qe.fK)}pu=Yc||function(e){return!(!e||"[object Array]"!==Zc[xc](e))};unction vu(e){return"string"==typeof e}unction yu(e){var t=!1;if(e&&"object"==typeof e){var n=iu?iu(e):ru(e);n?(n[Hc]&&qe.CY[xc](n,Hc)&&(n=n[Hc]),t=typeof n===qe.cb&&Jc[xc](n)===Qc):t=!0}return t}u=!{toString:null}.propertyIsEnumerable("toString"),Su=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function Iu(e){var t=typeof e;if(t===qe.cb||t===qe.fK&&null!==e||(0,Ge.ZU)("objKeys called on non-object"),!ku&&qc)return qc(e);var n=[];for(var i in e)e&&qe.CY[xc](e,i)&&n[Gl](i);if(ku)for(var r=Su[Yl],o=0;o<r;o++)e&&qe.CY[xc](e,Su[o])&&n[Gl](Su[o]);return n}r $u=jc||split",Vu="length",zu="toLowerCase",Uu="toString",Hu="removeItem",Bu="name",ju="message",qu="stringify",Gu="pathname",Wu="indexOf",Ku="exceptions",Xu="parsedStack",Yu="properties",Zu="measurements",Ju="sizeInBytes",Qu="typeName",ed="severityLevel",td="problemGroup",nd="isManual",id="CreateFromInterface",rd="assembly",od="fileName",ad="hasFullStack",sd="level",ld="method",cd="line",ud="duration",dd="receivedResponse",fd="substring";r gd,vd="window",md="JSON",yd=null,bd=null;unction Cd(){return Boolean(typeof window===qe.fK&&window)}unction Td(){return Boolean(typeof document===qe.fK&&document)?document:wd("document")}on Dd(){var e=kd();if(e&&(e[pc]!==bd||null===yd)){var t=((bd=e[pc])||$c).toLowerCase();yd=hu(t,"msie")||hu(t,"trident/")}return yd}ar Od="undefined",Nd="constructor",Pd="prototype",_d="function",Fd="_dynInstFuncs",Md="_isDynProxy",Rd="_dynClass",Vd="_dynInstChk",zd=Vd,Ud="_dfOpts",Hd="_unknown_",Bd="__proto__",jd="_dyn"+Bd,qd="__dynProto$Gbl",Gd="_dynInstProto",Wd="useBaseInst",Kd="setInstFuncs",Xd=Object,Yd=Xd.getPrototypeOf,Zd=Xd.getOwnPropertyNames,Jd=function(){var e;return typeof globalThis!==Od&&(e=globalThis),e||typeof self===Od||(e=self),e||typeof window===Od||(e=window),e||typeof n.g===Od||(e=n.g),e||{}}(),Qd=Jd[qd]||(Jd[qd]={o:(gd={},gd[Kd]=!0,gd[Wd]=!0,gd),n:1e3});(e,t,n,i){ef(e,Pd)||sf("theClass is an invalid class definition.");var r=e[Pd];((r,t)||sf("["+df(e)+"] not in hierarchy of ["+df(t)+"]");var o=null;ef(r,Rd)?o=r[Rd]:(o="_dynCls$"+df(e,"_")+"$"+Qd.n,Qd.n++,r[Rd]=o);var a=ff[Ud],s=!!a[Wd];s&&i&&void 0!==i[Wd]&&(s=!!i[Wd]);var l=t),c=r,t,l,s);n(t,c);var u=!!Yd&&!!a[Kd];u&&i&&(u=!!i[Kd]),function(e,t,n,i,r){if(!tf(e)){var o=n[Fd]=n[Fd]||{},a=o[t]=o[t]||{};!1!==o[zd]&&(o[zd]=!!r),of(n,()}}(r,o,t,l,!1!==u)}ff[Ud]=Qd.o;var hf=null;r vf=);ar yf=function(){function e(t){this.identifier="DiagnosticLogger",this.queue=[];var n,i,r,o,a=0,s={};ff(e,this,(function(e){unction c(e,n){var i=function(e){var t,n=hf;return n||!0===e.disableDbgExt||(n=hf||((t=wd("Microsoft"))&&(hf=t.ApplicationInsights),hf)),n?n.ChromeDbgExt:null}(t||{});i&&i[lc]&&i[lc](e,n)}!t||{}),e.consoleLoggingLevel=function(){return n},e.telemetryLoggingLevel=function(){return i},e.maxInternalMessageLimit=function(){return r},e[Cc]=function(){return o},e.throwInternal=e[Pc]=function(e){gf("warn",e),c("warning",e)},e[Nc]=e.resetInternalMessageCount=e.logInternalMessage=l}))}return e.__ieDyn=1,e}();Tf=xf({LocalStorage:0,SessionStorage:1}),kf=void xf({AI:0,AI_AND_W3C:1,W3C:2}),Sf=void 0,If="";function Ef(e){try{if(au((0,Ge.Rd)()))return null;var t=(new Date)[Uu](),n=wd(e===Tf.LocalStorage?"localStorage":"sessionStorage"),i=If+t;n.setItem(i,t);var r=n.getItem(i)!==t;if(n[Hu](i),!r)return n}catch(e){}return null} Af,Of="not_specified",Nf="iKey";E_LENGTH:150,MAX_ID_LENGTH:128,MAX_PROPERTY_LENGTH:8192,MAX_STRING_LENGTH:1024,MAX_URL_LENGTH:2048,MAX_MESSAGE_LENGTH:32768,MAX_EXCEPTION_LENGTH:32768}).sanitizeKeyAndAddUniqueness=Pf,Af.sanitizeKey=_f,Af.sanitizeString=Ff,Af.sanitizeUrl=Mf,Af.sanitizeMessage=Rf,Af.sanitizeException=Vf,Af.sanitizeProperties=zf,Af.sanitizeMeasurements=Uf,Af.sanitizeId=Hf,Af.sanitizeInput=Bf,Af.padNumber=jf,Af.trim=Tu;var Gf=),Wf=),Kf=Xf=),Yf=),Zf=),Jf="error",Qf="stack",eh="stackDetails",th="errorSrc",nh="message",ih="description";function(){function e(e,t,n,i,r,o){this.aiDataContract={ver:1,exceptions:1,severityLevel:0,properties:0,measurements:0};var a=this;a.ver=2,t)?(a[Ku]=t[Ku]||[],a[Yu]=t[Yu],a[Zu]=t[Zu],t[ed]&&(a[ed]=t[ed]),t.id&&(a.id=t.id),t[td]&&(a[td]=t[td]),au(t[nd])||(a[nd]=t[nd])):(n||(n={}),a[Ku]=[new fh(e,t,n)],a[Yu]=zf(e,n),a[Zu]=Uf(e,i),r&&(a[ed]=r),o&&(a.id=o))}return e.CreateAutoException=e.CreateFromInterface=function(t,n,i,r){var o=n[Ku]&&xu(n[Ku],();return new e(t,(0,u.uc)((0,u.uc)({},n),{exceptions:o}),i,r)},e.prototype.toInterface=e.CreateSimpleException=e.envelopeType="Microsoft.ApplicationInsights.{0}.Exception",e.dataType="ExceptionData",e.formatError=uh,e}(),fh=function(){function e(e,t,n){this.aiDataContract={id:0,outerId:0,typeName:1,message:1,hasFullStack:0,stack:0,parsedStack:2};var i=this;if(t))i[Qu]=t[Qu],i[ju]=t[ju],i[Qf]=t[Qf],i[Xu]=t[Xu]||[],i[ad]=t[ad];else{var r=t,o=r&&r.evt;gu(r)||(r=r[Jf]||o||r),i[Qu]=Ff(e,ch(r))||Of,i[ju]=Rf(e,oh(t||r,i[Qu]))||Of;var a=t[eh]||lh(t);i[Xu]=a),pu(i[Xu])&&xu(i[Xu],(),i[Qf]=Vf(e,a)),i.hasFullStack=pu(i.parsedStack)&&i.parsedStack[Vu]>0,n&&(n[Qu]=n[Qu]||i[Qu])}}return e.prototype.toInterface=e.CreateFromInterface=function(t,n){var i=n[Xu]instanceof Array&&xu(n[Xu],()||n[Xu];return new e(t,(0,u.uc)((0,u.uc)({},n),{parsedStack:i}))},e}(),hh=function(){function e(t,n){this.aiDataContract={level:1,method:1,assembly:0,fileName:0,line:0};var i=this;if(i[Ju]=0,"string"==typeof t){var r=t;i[sd]=n,i[ld]="<no_method>",i[rd]=Tu(r),i[od]="",i[cd]=0;var o=r.match(e.regex);o&&o[Vu]>=5&&(i[ld]=Tu(o[2])||i[ld],i[od]=Tu(o[4]),i[cd]=parseInt(o[5])||0)}else i[sd]=t[sd],i[ld]=t[ld],i[rd]=t[rd],i[od]=t[od],i[cd]=t[cd],i[Ju]=0;i.sizeInBytes+=i.method[Vu],i.sizeInBytes+=i.fileName[Vu],i.sizeInBytes+=i.assembly[Vu],i[Ju]+=e.baseSize,i.sizeInBytes+=i.level.toString()[Vu],i.sizeInBytes+=i.line.toString()[Vu]}return e.CreateFromInterface=e.prototype.toInterface=e.regex=/^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/,e.baseSize=58,e}(),ph="toGMTString",gh="toUTCString",vh="cookie",mh="expires",yh="enabled",bh="isCookieUseDisabled",wh="disableCookiesUsage",Ch="_ckMgr",xh=null,Th=null,kh=null,Sh=Td(),Ih={},Eh={};ction Ah(e,t){var n,i=e||Eh),r=i.path||"/",o=i.domain,a=!1!==i[yh],s=((n={isEnabled:)[vc]=n.set=function(e,t,n,a,l){var c,u=!1;if($h(s)&&!i,e)){var d={},f=Tu(t||$c),h=f[fc](";");if(-1!==h&&(f=Tu(t[hc](0,h)),d=Nh(t[hc](h+1))),Ou(d,"domain",a||o,Pu,ou),!au(n)){var p=Dd();if(ou(d[mh])){var g=Du()+1e3*n;if(g>0){var v=new Date;v.setTime(g),Ou(d,mh,Ph(v,p?ph:gh)||Ph(v,p?ph:gh)||$c,Pu)}}p||Ou(d,"max-age",$c+n,null,ou)}var m=Id();m&&"https:"===m.protocol&&(Ou(d,"secure",null,null,ou),null===Th&&(c=(kd()||{})[pc],Th=!(vu(c)&&(hu(c,"CPU iPhone OS 12")||hu(c,"iPad; CPU OS 12")||hu(c,"Macintosh; Intel Mac OS X 10_14")&&hu(c,"Version/")&&hu(c,"Safari")||hu(c,"Macintosh; Intel Mac OS X 10_14")&&function(e,t){var n=!1;return e&&t&&!(n=e===t)&&(n=Kc?e[Mc](t):e,t)),n}(c,"AppleWebKit/605.1.15 (KHTML, like Gecko)")||hu(c,"Chrome/5")||hu(c,"Chrome/6")||hu(c,"UnrealEngine")&&!hu(c,"Chrome")||hu(c,"UCBrowser/12")||hu(c,"UCBrowser/11")))),Th&&Ou(d,"SameSite","None",null,ou)),Ou(d,"path",l||r,null,ou),(i.setCookie||Mh)(e,_h(f,d)),u=!0}return u},n.get=n.del=n.purge=n);return s[Ch]=s,s}=4294967296,Vh=4294967295,zh=!1,Uh=123456789,Hh=987654321;h=qe.RJ,Xh="2.8.15",Yh="."+Wh(6),Zh=0;nction ep(e){var t={id:Qh("_aiData-"+(e||$c)+"."+Xh),accept:get:kill:;return t}var tp="attachEvent",np="addEventListener",ip="detachEvent",rp="removeEventListener",op="events",ap=(Qh("aiEvtPageHide"),Qh("aiEvtPageShow"),/\.[\.]+/g),sp=/[\.]+$/,lp=1,cp=ep("events"),up=/^([^.]*)(?:\.(.+)|)/;,yp=null;ar wp={_canUseCookies:void 0,isTypeof:isUndefined:ou,isNullOrUndefined:au,hasOwnProperty:lu,isFunction:uu,isObject:cu,isDate:isArray:pu,isError:gu,isString:vu,isNumber:isBoolean:mu,toISOString:bu,arrForEach:wu,arrIndexOf:Cu,arrMap:xu,arrReduce:strTrim:Tu,objCreate:Ge.pu,objKeys:Iu,objDefineAccessors:Eu,addEventHandler:dateNow:Du,isIE:Dd,disableCookies:function(){(n=Lh(e,t),i=wp._canUseCookies,null===yp&&(yp=[],mp=i,Eu(wp,"_canUseCookies",(function(){return mp}),()),-1===Cu(yp,n)&&yp[Gl](n),mu(i)&&n[vc](i),mu(mp)&&n[vc](mp),n)[vc](!1);var e,t,n,i},newGuid:perfNow:newId:Wh,randomValue:random32:qh,mwcRandomSeed:mwcRandom32:Gh,generateW3CId:bp};var Cp;={},fu({requestContextHeader:[0,"Request-Context"],requestContextTargetKey:[1,"appId"],requestContextAppIdFormat:[2,"appId=cid-v1:"],requestIdHeader:[3,"Request-Id"],traceParentHeader:[4,"traceparent"],traceStateHeader:[5,"tracestate"],sdkContextHeader:[6,"Sdk-Context"],sdkContextHeaderAppIdRequest:[7,"appId"],requestContextHeaderLowerCase:[8,"request-context"]},(),Lu(Cp);var kp=Td()||{},Sp=0,Ip=[null,null,null,null,null];r $p=function(){function e(e,t,n,i,r,o,a,s,l,c,u,d){void 0===l&&(l="Ajax"),this.aiDataContract={id:1,ver:1,name:0,resultCode:0,duration:0,success:0,data:0,target:0,type:0,properties:0,measurements:0,kind:0,value:0,count:0,min:0,max:0,stdDev:0,dependencyKind:0,dependencySource:0,commandName:0,dependencyTypeName:0};var f=this;f.ver=2,f.id=t,f[ud]=pd(r),f.success=o,f.resultCode=a+"",f.type=Ff(e,l);var h=function(e,t,n,i){var r,o,a,s,l,c=i,u=i;if(t&&t[Vu]>0){var d=(o=t,l=(s=Ip)[a=Sp],kp.createElement?s[a]||(l=s[a]=kp.createElement("a")):l={host:Ep(o,!0)},l.href=o,++a>=s[Vu]&&(a=0),Sp=a,l);if(r=d.host,!c)if(null!=d[Gu]){var f=0===d.pathname[Vu]?"/":d[Gu];"/"!==f.charAt(0)&&(f="/"+f),u=d[Gu],c=Ff(e,n?n+" "+f:f)}else c=Ff(e,t)}else r=i,c=i;return{target:r,name:c,data:u}}(e,n,s,i);f.data=Mf(e,i)||h.data,f.target=Ff(e,h.target),c&&(f.target="".concat(f.target," | ").concat(c)),f[Bu]=Ff(e,h[Bu]),f[Yu]=zf(e,u),f[Zu]=Uf(e,d)}return e.envelopeType="Microsoft.ApplicationInsights.{0}.RemoteDependency",e.dataType="RemoteDependencyData",e}(),Dp="ctx",Ap="ParentContextKey",Op="ChildrenContextKey",Np=),Pp="CoreUtils.doPerf",_p=ep("plugin");ar Mp="_hasRun",Rp="_getTelCtx",Vp=0;function zp(e,t,n,i){var r=null,o=[];null!==i&&(r=i?e,n,i):e);var a={_next:ctx:{core:function(){return n},diagLog:getCfg:function(){return t},getExtCfg:s,getConfig:hasNext:getNext:setNext:function(e){r=e},iterate:function(e){for(var t;t=a._next();){var n=t[Ql]();n&&e(n)}},onComplete:function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e&&o[Gl]({func:e,self:ou(t)?a.ctx:t,args:n})}}};function s(e,n,i){var r;if(void 0===n&&(n={}),void 0===i&&(i=0),t){var o=t[Ac];o&&e&&(r=o[e])}if(r){if(cu(n)&&0!==i){var a=Mu(!0,n,r);t&&2===i&&fu(n,(function(e){if(au(a[e])){var n=t[e];au(n)||(a[e]=n)}})),r=a}}else r=n;return r}return a}function Up(e,t,n,i){var r=zp(e,t,n,i),o=r.ctx;return o[Jl]=function(e){var t=r._next();return t&&t[Oc](e,o),!t},o[uc]=function(e,i){return void 0===e&&(e=null),pu(e)&&(e=jp(e,t,n,i)),Up(e||o[sc](),t,n,i)},o}function Hp(e,t,n){var i=t[Kl]||{},r=zp(e,i,t,n),o=r.ctx;return o[Jl]=function(e){var t=r._next();return t&&t.unload(o,e),!t},o[uc]=function(e,n){return void 0===e&&(e=null),pu(e)&&(e=jp(e,i,t,n)),Hp(e||o[sc](),t,n)},o}function Bp(e,t,n){var i=t[Kl]||{},r=zp(e,i,t,n).ctx;return r[Jl]=function(e){return r.iterate((function(t){uu(t[ac])&&t[ac](r,e)}))},r[uc]=function(e,n){return void 0===e&&(e=null),pu(e)&&(e=jp(e,i,t,n)),Bp(e||r[sc](),t,n)},r}function jp(e,t,n,i){var r=null,o=!i;if(pu(e)&&e[Yl]>0){var a=null;wu(e,(function(e){if(o||i!==e||(o=!0),o&&e&&uu(e[Oc])){var s=function(e,t,n){var i,r=null,o=uu(e[Oc]),a=uu(e[cc]),s={getPlugin:function(){return e},getNext:function(){return r},processTelemetry:function(i,c){l(c=c||function(){var i;return e&&uu(e[Rp])&&(i=e[Rp]()),i||(i=Up(s,t,n)),i}(),(function(t){if(!e||!o)return!1;var n=Fp(e);return!n[tc]&&!n.disabled&&(a&&e[cc](r),e[Oc](i,t),!0)}),"processTelemetry",(function(){return{item:i}}),!i.sync)||c[Jl](i)},unload:function(t,n){l(t,(function(){var i=!1;if(e){var r=Fp(e),o=e[Dc]||r[Dc];!e||o&&o!==t.core()||r[tc]||(r[Dc]=null,r[tc]=!0,r[Wl]=!1,e[tc]&&!0===e[tc](t,n)&&(i=!0))}return i}),"unload",(function(){}),n[rc])||t[Jl](n)},update:function(t,n){l(t,(function(){var i=!1;if(e){var r=Fp(e),o=e[Dc]||r[Dc];!e||o&&o!==t.core()||r[tc]||e[ac]&&!0===e[ac](t,n)&&(i=!0)}return i}),"update",(function(){}),!1)||t[Jl](n)},_id:i=e?e[ql]+"-"+e.priority+"-"+Vp++:"Unknown-0-"+Vp++,_setNext:function(e){r=e}};function l(t,n,o,a,s){var l=!1,c=e?e[ql]:"TelemetryPluginChain",u=t[Mp];return u||(u=t[Mp]={}),t.setNext(r),e&&function(e,t,n,i,r){if(e){var a=e;if(a[_c]&&(a=a[_c]()),a){var s=void 0,l=a[Ic](Pp);try{if(s=a.create(c+":"+o,i,r)){if(l&&s[Ec]&&(s[Ec](Np[Ap],l),l[Ic]&&l[Ec])){var u=l[Ic](Np[Op]);u||(u=[],l[Ec](Np[Op],u)),u[Gl](s)}return a[Ec](Pp,s),n()}}catch(e){s&&s[Ec]&&s[Ec]("exception",e)}finally{s&&a.fire(s),a[Ec](Pp,l)}}}n()}(t[Dc](),0,(function(){u[i]=!0;try{var e=r?r._id:$c;e&&(u[e]=!1),l=n(t)}catch(e){var a=!r||u[r._id];a&&(l=!0),r&&a||wf(t[lc](),1,73,"Plugin ["+c+"] failed during "+o+" - "+Ad(e)+", run flags: "+Ad(u))}}),a,s),l}return $u(s)}(e,t,n);r||(r=s),a&&a._setNext(s),a=s}}))}return i&&!r?jp([i],t,n):r}var qp="_aiHooks",Gp=["req","rsp","hkErr","fnErr"];function Wp(e,t){if(e)for(var n=0;n<e[Yl]&&!t(e[n],n);n++);}function Kp(e,t,n,i,r){r>=0&&r<=2&&Wp(e,(function(e,o){var a=e.cbks,s=a[Gp[r]];if(s){t.ctx=function(){return i[o]=i[o]||{}};try{s[bc](t.inst,n)}catch(e){var l=t.err;try{var c=a[Gp[2]];c&&(t.err=e,c[bc](t.inst,n))}catch(e){}finally{t.err=l}}}}))}function Xp(e,t,n,i){var r=null;return e&&(lu(e,t)?r=e:n&&(r=Xp(ru(e),t,i,!1))),r}function Yp(e,t,n,i,r){if(e&&t&&n){var o=Xp(e,t,i,r)||e;if(o)return function(e,t,n,i){var r=n&&n[qp];if(!r){var o=function(e){return function(){var t,n=this,i=arguments,r=e.h,o=((t={})[jl]=e.n,t.inst=n,t.ctx=null,t.set=c,t),a=[],s=l([o],i);function l(e,t){return Wp(t,(function(t){e[Gl](t)})),e}function c(e,t){(i=l([],i))[e]=t,s=l([o],i)}o.evt=wd("event"),Kp(r,o,s,a,0);var u=e.f;if(u)try{o.rslt=u[bc](n,i)}catch(e){throw o.err=e,Kp(r,o,s,a,3),e}return Kp(r,o,s,a,1),o.rslt}}(r={i:0,n:t,f:n,h:[]});o[qp]=r,e[t]=o}var a={id:r.i,cbks:i,rm:function(){var e=this.id;Wp(r.h,(function(t,n){if(t.id===e)return r.h[ec](n,1),1}))}};return r.i++,r.h[Gl](a),a}(o,t,o[t],n)}return null}var Zp="getPlugin",Jp=function(){function e(){var t,n,i,r,o,a=this;function s(e){void 0===e&&(e=null);var t=e;if(!t){var r=n||Up(null,{},a[Dc]);t=i&&i[Zp]?r[uc](null,i[Zp]):r[uc](null,i)}return t}function l(e,t,r){e&&Ou(e,Ac,[],null,au),!r&&t&&(r=t.getProcessTelContext()[sc]());var o=i;i&&i[Zp]&&(o=i[Zp]()),a[Dc]=t,n=Up(r,e,t,o)}function c(){var e;t=!1,a[Dc]=null,n=null,i=null,o=[],e=[],r={add:run:function(t,n){wu(e,(function(e){try{e(t,n)}catch(e){wf(t[lc](),2,73,"Unexpected error calling unload handler - "+Ad(e))}})),e=[]}}}c(),ff(e,a,(function(e){e.initialize=function(e,n,i,r){l(e,n,r),t=!0},e[tc]=function(t,n){var a,s=e[Dc];if(s&&(!t||s===t[Dc]())){var l,u=!1,d=t||Hp(null,s,i&&i[Zp]?i[Zp]():i),f=n||((a={reason:0})[rc]=!1,a);return e[oc]&&!0===e[oc](d,f,h)?l=!0:h(),l}function h(){if(!u){u=!0,r.run(d,n);var e=o;o=[],wu(e,(function(e){e.rm()})),!0===l&&d[Jl](f),c()}}},e[ac]=function(t,n){var r=e[Dc];if(r&&(!t||r===t[Dc]())){var o,a=!1,s=t||Bp(null,r,i&&i[Zp]?i[Zp]():i),c=n||{reason:0};return e._doUpdate&&!0===e._doUpdate(s,c,u)?o=!0:u(),o}function u(){a||(a=!0,l(s.getCfg(),s.core(),s[sc]()))}},e._addHook=function(e){e&&(pu(e)?o=o.concat(e):o[Gl](e))},Fu(e,"_addUnloadCb",(function(){return r}),"add")})),a[lc]=function(e){return s(e)[lc]()},a[Wl]=function(){return t},a.setInitialized=function(e){t=e},a[cc]=function(e){i=e},a[Jl]=function(e,t){t?t[Jl](e):i&&uu(i[Oc])&&i[Oc](e,null)},a._getTelCtx=s}return e.__ieDyn=1,e}(),Qp="toString",eg="disableExceptionTracking",tg="autoTrackPageVisitTime",ng="overridePageViewDuration",ig="enableUnhandledPromiseRejectionTracking",rg="samplingPercentage",og="isStorageUseDisabled",ag="isBrowserLinkTrackingEnabled",sg="enableAutoRouteTracking",lg="namePrefix",cg="disableFlushOnBeforeUnload",ug="core",dg="dataType",fg="envelopeType",hg="diagLog",pg="track",gg="trackPageView",vg="trackPreviousPageVisit",mg="sendPageViewInternal",yg="sendPageViewPerformanceInternal",bg="populatePageViewPerformanceEvent",wg="href",Cg="sendExceptionInternal",xg="exception",Tg="error",kg="_onerror",Sg="errorSrc",Ig="lineNumber",Eg="columnNumber",Lg="message",$g="CreateAutoException",Dg="addTelemetryInitializer",Ag="duration",Og="length",Ng="isPerformanceTimingSupported",Pg="getPerformanceTiming",_g="navigationStart",Fg="shouldCollectDuration",Mg="isPerformanceTimingDataReady",Rg="responseStart",Vg="loadEventEnd",zg="responseEnd",Ug="connectEnd",Hg="pageVisitStartTime",Bg=null,jg=function(){function e(t,n,i,r){Bl(e,this,(function(e){var o,a=null,s=[],l=!1;function c(e){i&&i.flush(e)}&(o=i.logger),e[gg]=function(e,i){var a=e.name;if(au(a)||"string"!=typeof a){var s=Td();a=e.name=s&&s.title||""}var u=e.uri;if(au(u)||"string"!=typeof u){var f=Id();u=e.uri=f&&f[wg]||""}if(!r[Ng]())return t[mg](e,i),c(!0),void(function(){if(null==Bg)try{Bg=!!(self&&self instanceof WorkerGlobalScope)}catch(e){Bg=!1}return Bg}()||wf(o,2,25,"trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info."));var h,p,g=!1,v=r[Pg]()[_g];v>0&&(h=Lp(v,+new Date),r[Fg](h)||(h=void 0)),au(i)||au(i[Ag])||(p=i[Ag]),!n&&isNaN(p)||(isNaN(p)&&(i||(i={}),i[Ag]=h),t[mg](e,i),c(!0),g=!0),i||(i={}),d((function(){var n=!1;try{if(r[Mg]()){n=!0;var s={name:a,uri:u};r[bg](s),s.isValid||g?(g||(i[Ag]=s.durationMs,t[mg](e,i)),l||(t[yg](s,i),l=!0)):(i[Ag]=h,t[mg](e,i))}else v>0&&Lp(v,+new Date)>6e4&&(n=!0,g||(i[Ag]=6e4,t[mg](e,i)))}catch(e){wf(o,1,38,"trackPageView failed on page load calculation: "+Au(e),{exception:Ad(e)})}return n}))},e.teardown=function(e,t){if(a){clearTimeout(a),a=null;var n=s.slice(0);s=[],wu(n,(function(e){e()}))}}}))}return e.__ieDyn=1,e}(),qg=36e5,Gg=["googlebot","adsbot-google","apis-google","mediapartners-google"];function Wg(){var e=Ed();return e&&!!e.timing}function Kg(){var e=Ed(),t=e?e.timing:0;return t&&t.domainLookupStart>0&&t[_g]>0&&t[Rg]>0&&t.requestStart>0&&t[Vg]>0&&t[zg]>0&&t[Ug]>0&&t.domLoading>0}function Xg(){return Wg()?Ed().timing:null}function Yg(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=kd()||{},i=n.userAgent,r=!1;if(i)for(var o=0;o<Gg[Og];o++)r=r||-1!==i.toLowerCase().indexOf(Gg[o]);if(r)return!1;for(o=0;o<e[Og];o++)if(e[o]<0||e[o]>=qg)return!1;return!0}var Zg=function(){function e(t){var n=mf(t);Bl(e,this,(function(e){e[bg]=function(t){t.isValid=!1;var i,r=(i=Ed())&&i.getEntriesByType&&i.getEntriesByType("navigation")[Og]>0?Ed().getEntriesByType("navigation")[0]:null,o=Xg(),a=0,s=0,l=0,c=0,u=0;(r||o)&&(r?(a=r[Ag],s=0===r.startTime?r[Ug]:Lp(r.startTime,r[Ug]),l=Lp(r.requestStart,r[Rg]),c=Lp(r[Rg],r[zg]),u=Lp(r.responseEnd,r[Vg])):(a=Lp(o[_g],o[Vg]),s=Lp(o[_g],o[Ug]),l=Lp(o.requestStart,o[Rg]),c=Lp(o[Rg],o[zg]),u=Lp(o.responseEnd,o[Vg])),0===a?wf(n,2,10,"error calculating page view performance.",{total:a,network:s,request:l,response:c,dom:u}):e[Fg](a,s,l,c,u)?a<Math.floor(s)+Math.floor(l)+Math.floor(c)+Math.floor(u)?wf(n,2,8,"client performance math error.",{total:a,network:s,request:l,response:c,dom:u}):(t.durationMs=a,t.perfTotal=t[Ag]=pd(a),t.networkConnect=pd(s),t.sentRequest=pd(l),t.receivedResponse=pd(c),t.domProcessing=pd(u),t.isValid=!0):wf(n,2,45,"Invalid page load duration value. Browser perf data won't be sent.",{total:a,network:s,request:l,response:c,dom:u}))},e[Pg]=Xg,e[Ng]=Wg,e[Mg]=Kg,e[Fg]=Yg}))}return e.__ieDyn=1,e}(),Jg=function(){function e(t,n){var i="prevPageVisitData";Bl(e,this,(function(e){e[vg]=function(e,r){try{var o=function(e,n){var r=null;try{r=function(){var e=null;try{if($f()){var n=Du(),r=Df(t,i);r&&Ld()&&((e=$d().parse(r)).pageVisitTime=n-e[Hg],function(e,t){var n=Lf();if(null!==n)try{return n[Hu](t),!0}catch(t){Sf=!1,wf(e,2,6,"Browser failed removal of session storage item. "+Au(t),{exception:Ad(t)})}}(t,i))}}catch(n){Cf(t,"Stop page visit timer failed: "+Ad(n)),e=null}return e}(),function(e,n){try{if($f()){null!=Df(t,i)&&_u("Cannot call startPageVisit consecutively without first calling stopPageVisit");var r=new Qg(e,n),o=$d().stringify(r);!function(e,t,n){var i=Lf();if(null!==i)try{return i.setItem(t,n),!0}catch(t){Sf=!1,wf(e,2,4,"Browser failed write to session storage. "+Au(t),{exception:Ad(t)})}}(t,i,o)}}catch(e){Cf(t,"Call to start failed: "+Ad(e))}}(e,n)}catch(e){Cf(t,"Call to restart failed: "+Ad(e)),r=null}return r}(e,r);o&&n(o.pageName,o.pageUrl,o.pageVisitTime)}catch(e){Cf(t,"Auto track page visit time failed, metric will not be collected: "+Ad(e))}},Eu(e,"_logger",(function(){return t})),Eu(e,"pageVisitTimeTrackingHandler",(function(){return n}))}))}return e.__ieDyn=1,e}(),Qg=function(e,t){this[Hg]=Du(),this.pageName=e,this.pageUrl=t},ev=function(e,t){var n=this,i={};n.start=function(t){void 0!==i[t]&&wf(e,2,62,"start was called more than once for this event without calling stop.",{name:t,key:t},!0),i[t]=+new Date},n.stop=function(t,r,o,a){var s=i[t];if(isNaN(s))wf(e,2,63,"stop was called without a corresponding start.",{name:t,key:t},!0);else{var l=Lp(s,+new Date);n.action(t,r,l,o,a)}delete i[t],i[t]=void 0}};function tv(e,t){e&&e.dispatchEvent&&t&&e.dispatchEvent(t)}function nv(e,t){return(e=e||t)<6e4&&(e=6e4),e}function iv(e){return e||(e={}),e.sessionRenewalMs=nv(e.sessionRenewalMs,18e5),e.sessionExpirationMs=nv(e.sessionExpirationMs,864e5),e[eg]=hd(e[eg]),e[tg]=hd(e[tg]),e[ng]=hd(e[ng]),e[ig]=hd(e[ig]),(isNaN(e[rg])||e[rg]<=0||e[rg]>=100)&&(e[rg]=100),e[og]=hd(e[og]),e[ag]=hd(e[ag]),e[sg]=hd(e[sg]),e[lg]=e[lg]||"",e.enableDebug=hd(e.enableDebug),e[cg]=hd(e[cg]),e.disableFlushOnUnload=hd(e.disableFlushOnUnload,e[cg]),e}function rv(e){ou(e[og])||(e[og]?(kf=!1,Sf=!1):((!0||void 0===kf)&&(kf=!!Ef(Tf.LocalStorage)),Sf=$f(!0)))}var ov=function(e){function t(){var n,i,r,o,a,s,l,c,d,f,h,p,g,v,m,y,b,w=e.call(this)||this;return w.identifier="ApplicationInsightsAnalytics",w.priority=180,w.autoRoutePVDelay=500,Bl(t,w,(function(e,t){var w=t._addHook;function C(t,n,i,r,o){e[hg]().throwInternal(t,n,i,r,o)}function x(){n=null,i=null,r=null,o=null,a=null,s=null,l=!1,c=!1,d=!1,f=!1,h=!1,p=!1,g=!1,v=!1;var e=Id();m=e&&e[wg]||"",y=null,b=null}x(),e.getCookieMgr=function(){return function(e,t){var n;e&&(n=e.getCookieMgr());return n||(n=Lh(t,(e||{})[Xl])),n}(e[ug])},e.processTelemetry=function(t,n){e.processNext(t,n)},e.trackEvent=function(t,n){try{var i=qf(t,Gf[dg],Gf[fg],e[hg](),n);e[ug][pg](i)}catch(e){C(2,39,"trackTrace failed, trace will not be collected: "+Au(e),{exception:Ad(e)})}},e.startTrackEvent=function(e){try{n.start(e)}catch(e){C(1,29,"startTrackEvent failed, event will not be collected: "+Au(e),{exception:Ad(e)})}},e.stopTrackEvent=function(e,t,i){try{n.stop(e,void 0,t,i)}catch(e){C(1,30,"stopTrackEvent failed, event will not be collected: "+Au(e),{exception:Ad(e)})}},e.trackTrace=function(t,n){try{var i=qf(t,Wf[dg],Wf[fg],e[hg](),n);e[ug][pg](i)}catch(e){C(2,39,"trackTrace failed, trace will not be collected: "+Au(e),{exception:Ad(e)})}},e.trackMetric=function(t,n){try{var i=qf(t,Xf[dg],Xf[fg],e[hg](),n);e[ug][pg](i)}catch(e){C(1,36,"trackMetric failed, metric will not be collected: "+Au(e),{exception:Ad(e)})}},e[gg]=function(t,n){try{var i=t||{};r[gg](i,(0,u.uc)((0,u.uc)((0,u.uc)({},i.properties),i.measurements),n)),e.config[tg]&&a[vg](i.name,i.uri)}catch(e){C(1,37,"trackPageView failed, page view will not be collected: "+Au(e),{exception:Ad(e)})}},e[mg]=function(t,n,i){var r=Td();r&&(t.refUri=void 0===t.refUri?r.referrer:t.refUri);var o=qf(t,Yf[dg],Yf[fg],e[hg](),n,i);e[ug][pg](o)},e[yg]=function(t,n,i){var r=qf(t,Zf[dg],Zf[fg],e[hg](),n,i);e[ug][pg](r)},e.trackPageViewPerformance=function(t,n){var i=t||{};try{o[bg](i),e[yg](i,n)}catch(e){C(1,37,"trackPageViewPerformance failed, page view will not be collected: "+Au(e),{exception:Ad(e)})}},e.startTrackPage=function(e){try{if("string"!=typeof e){var t=Td();e=t&&t.title||""}i.start(e)}catch(e){C(1,31,"startTrackPage failed, page view may not be collected: "+Au(e),{exception:Ad(e)})}},e.stopTrackPage=function(t,n,r,o){try{if("string"!=typeof t){var s=Td();t=s&&s.title||""}if("string"!=typeof n){var l=Id();n=l&&l[wg]||""}i.stop(t,n,r,o),e.config[tg]&&a[vg](t,n)}catch(e){C(1,32,"stopTrackPage failed, page view will not be collected: "+Au(e),{exception:Ad(e)})}},e[Cg]=function(t,n,i){var r=t&&(t[xg]||t[Tg])||gu(t)&&t||{name:t&&typeof t,message:t||Of};t=t||{};var o=qf(new dh(e[hg](),r,t.properties||n,t.measurements,t.severityLevel,t.id).toInterface(),dh[dg],dh[fg],e[hg](),n,i);e[ug][pg](o)},e.trackException=function(t,n){t&&!t[xg]&&t[Tg]&&(t[xg]=t[Tg]);try{e[Cg](t,n)}catch(e){C(1,35,"trackException failed, exception will not be collected: "+Au(e),{exception:Ad(e)})}},e[kg]=function(t){var n=t&&t[Tg],i=t&&t.evt;try{if(!i){var r=xd();r&&(i=r.event)}var o=t&&t.url||(Td()||{}).URL,a=t[Sg]||"window.onerror@"+o+":"+(t[Ig]||0)+":"+(t[Eg]||0),s={errorSrc:a,url:o,lineNumber:t[Ig]||0,columnNumber:t[Eg]||0,message:t[Lg]};!function(e,t,n,i,r){return!r&&vu(e)&&("Script error."===e||"Script error"===e)}(t.message,t.url,t.lineNumber,t.columnNumber,t[Tg])?(t[Sg]||(t[Sg]=a),e.trackException({exception:t,severityLevel:3},s)):function(t,n){var i=qf(t,dh[dg],dh[fg],e[hg](),n);e[ug][pg](i)}(dh[$g]("Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.",o,t[Ig]||0,t[Eg]||0,n,i,null,a),s)}catch(e){var l=n?n.name+", "+n[Lg]:"null";C(1,11,"_onError threw exception while logging error, error will not be collected: "+Au(e),{exception:Ad(e),errorString:l})}},e[Dg]=function(t){if(e[ug])return e[ug][Dg](t);s||(s=[]),s.push(t)},e.initialize=function(u,C,x,T){if(!e.isInitialized()){var k;au(C)&&_u("Error initializing"),t.initialize(u,C,x,T),u.storagePrefix&&(k=u.storagePrefix,If=k||"");try{I=Qh(e.identifier),E=C.evtNamespace&&C.evtNamespace(),b=E?fp("xx",pu(E)?[I].concat(E):[I,E]).ns[gc]("."):I,s&&(wu(s,(function(e){C[Dg](e)})),s=null);var S=function(t){var n=Up(null,t,e[ug]),i=e.identifier,r=iv(t),o=e.config=n.getExtCfg(i);return void 0!==r&&fu(r,(function(e,t){o[e]=n.getConfig(i,e,t),void 0===o[e]&&(o=t)})),o}(u);rv(S),o=new Zg(e[ug]),r=new jg(e,S[ng],e[ug],o),a=new Jg(e[hg](),(function(t,n,i){return function(t,n,i){var r={PageName:t,PageUrl:n};e.trackMetric({name:"PageVisitTime",average:i,max:i,min:i,sampleCount:1},r)}(t,n,i)})),function(t,n){l=t[ag]||n[ag],function(){if(!c&&l){var t=["/browserLinkSignalR/","/__browserLink/"];e[Dg]((function(e){if(l&&e.baseType===$p[dg]){var n=e.baseData;if(n)for(var i=0;i<t[Og];i++)if(n.target&&n.target.indexOf(t[i])>=0)return!1}return!0})),c=!0}}()}(S,u),(n=new ev(e[hg](),"trackEvent")).action=function(t,n,i,r,o){r||(r={}),o||(o={}),r.duration=i[Qp](),e.trackEvent({name:t,properties:r,measurements:o})},(i=new ev(e[hg](),"trackPageView")).action=function(t,n,i,r,o){au(r)&&(r={}),r.duration=i[Qp]();var a={name:t,uri:n,properties:r,measurements:o};e[mg](a,r)},Cd()&&(function(t){var n=xd(),i=Id();(h=t[eg])||p||t.autoExceptionInstrumented||(w(Yp(n,"onerror",{ns:b,rsp:function(t,n,i,r,o,a){h||!0===t.rslt||e[kg](dh[$g](n,i,r,o,a,t.evt))}},!1)),p=!0),function(t,n,i){(g=!0===t[ig])&&!v&&(w(Yp(n,"onunhandledrejection",{ns:b,rsp:function(t,n){g&&!0!==t.rslt&&e[kg](dh[$g](function(e){if(e&&e.reason){var t=e.reason;return!vu(t)&&uu(t[Qp])?t[Qp]():Ad(t)}return e||""}(n),i?i[wg]:"",0,0,n,t.evt))}},!1)),v=!0,t.autoUnhandledPromiseInstrumented=v)}(t,n,i)}(S),function(t){var n=xd(),i=Id();if(d=!0===t[sg],n&&d&&Sd()){var r=Sd()?history:wd("history");uu(r.pushState)&&uu(r.replaceState)&&typeof Event!==qe.jA&&function(t,n,i,r){var o=t[lg]||"";f||(w(Yp(i,"pushState",{ns:b,rsp:function(){d&&(tv(n,Tp(o+"pushState")),tv(n,Tp(o+"locationchange")))}},!0)),w(Yp(i,"replaceState",{ns:b,rsp:function(){d&&(tv(n,Tp(o+"replaceState")),tv(n,Tp(o+"locationchange")))}},!0)),vp(n,o+"popstate",(function(){d&&tv(n,Tp(o+"locationchange"))}),b),vp(n,o+"locationchange",(function(){if(y?(m=y,y=r&&r[wg]||""):y=r&&r[wg]||"",d){var t=function(){var t,n,i=null;if(e[ug]&&e[ug].getTraceCtx&&(i=e[ug].getTraceCtx(!1)),!i){var r=e[ug].getPlugin("AppInsightsPropertiesPlugin");if(r){var o=r.plugin.context;o&&(t=o.telemetryTrace,n=t||{},i={getName:function(){return n[Bu]},setName:function(e){n[Bu]=e},getTraceId:function(){return n.traceID},setTraceId:function(e){xp(e,32,"00000000000000000000000000000000")&&(n.traceID=e)},getSpanId:function(){return n.parentID},setSpanId:getTraceFlags:function(){return n.traceFlags},setTraceFlags:function(e){n.traceFlags=e}})}}return i}();if(t){t.setTraceId(bp());var n="_unknown_";r&&r.pathname&&(n=r.pathname+(r.hash||"")),t.setName(Ff(e[hg](),n))}setTimeout(function(t){e[gg]({refUri:t,properties:{duration:0}})}.bind(e,m),e.autoRoutePVDelay)}}),b),f=!0)}(t,n,r,i)}}(S))}catch(t){throw e.setInitialized(!1),t}}var I,E},e._doTeardown=function(e,t){r&&r.teardown(e,t),function(e,t,n,i,r){if(void 0===r&&(r=!1),e)try{var o=fp(t,i),a=!1;!function(e,t,n){if(t[Tc])gp(e,hp(e,t[Tc]),t,n);else{var i=cp.get(e,op,{});fu(i,(function(i,r){gp(e,r,t,n)})),0===Iu(i)[Yl]&&cp.kill(e,op)}}(e,o,(function(e){return!((!o.ns||n)&&e[kc]!==n||(a=!0,0))})),a||pp(e,o,n,r)}catch(e){}}(window,null,null,b),x()},Eu(e,"_pageViewManager",(function(){return r})),Eu(e,"_pageViewPerformanceManager",(function(){return o})),Eu(e,"_pageVisitTimeManager",(function(){return a})),Eu(e,"_evtNamespace",(function(){return"."+b}))})),w}return(0,u.ne)(t,e),t.Version="2.8.15",t.getDefaultConfig=iv,t}(Jp);ction cv(e,t){var n,i,r,o,a,s,l,c,u,d;return i=t,r=(n=e.getBoundingClientRect()).left,o=n.top,a=n.right,s=n.bottom,l=i.left,c=i.top,u=i.right,d=i.bottom,Math.max(0,Math.min(a,u)-Math.max(r,l))*Math.max(0,Math.min(s,d)-Math.max(o,c))>0}function uv(e,t){return!!jr(dv(e,"data-bi-dnt"))},yv={BUTTON:!0,CHECKBOX:!0,RADIO:!0,RESET:!0,SUBMIT:!0};(mv={}));var kv,Sv=function(){eturn e.prototype._setBasicProperties=function(e,t){e.ver="1.0",e.id=this._id.getLastPageViewId(),jr(e.name)||(e.name=function(e,t){if(t&&t.pageName)return t.pageName;if(e.callback&&"function"==typeof e.callback.pageName)return e.callback.pageName();if(e.coreData&&e.coreData.pageName)return e.coreData.pageName;var n=((Rn()||{}).pathname||"").replace(/(^\/+|\/+$)/g,"").split("/");return n&&n[n.length-1]?n[n.length-1]:"Home"}(this._config,t)),!jr(e.uri)&&Br&&(e.uri=function(e,t){return e.coreData&&e.coreData.requestUri&&""!==e.coreData.requestUri?e.coreData.requestUri:function(e,t){if(!t)return null;var n=t.protocol+"//"+(t.hostname||t.host)+(jr(t.port)?":"+t.port:"")+t.pathname;if(e.urlCollectQuery){var i=t.search;if(!i){var r=t.hash||"",o=r.indexOf("?");-1!==o&&(i=r.slice(o))}n+=i}return e.urlCollectHash&&(n+=t.hash||""),n}(e,t)}(this._config,Rn()))},e.prototype._setCommonProperties=function(e,t,n){var i,r=this;r._setBasicProperties(e,n),r._setPageTags(e,n),r._pageTypeMetaTag=Tv(r.metaTags,r._config.coreData,"pageType"),r._marketMetaTag=Tv(r.metaTags,r._config.coreData,"market"),r._behaviorMetaTag=Tv(r.metaTags,r._config.coreData,"behavior"),jr(n.pageType)&&(e.pageType=n.pageType),jr(r._pageTypeMetaTag)&&!jr(e.pageType)&&(e.pageType=r._pageTypeMetaTag),jr(r._marketMetaTag)&&(e.market=r._marketMetaTag),e.isLoggedIn=(i=r._config).callback&&"function"==typeof i.callback.signedinStatus?i.callback.signedinStatus():i.isLoggedIn,t.cookieEnabled=Ei()},e.prototype._setPageTags=e.prototype._getBehavior=e.prototype._getValidBehavior=e.prototype._getContentFormatted=e}(),Iv=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,u.ne)(t,e),t.prototype.trackContentUpdate=t.prototype.captureContentUpdate=t}(Sv);!function(e){e[e.PAGE_ACTION=0]="PAGE_ACTION",e[e.CONTENT_UPDATE=1]="CONTENT_UPDATE"}(kv||(kv={}));var Ev=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,u.ne)(t,e),t.prototype.trackPageAction=t.prototype.capturePageAction=function(e,t,n,i){t=jr(t)?t:{};var r={},o=jr(n)?n:{};this._setCommonProperties(r,o,t),r.isManual=!t.isAuto,r.behavior=this._getBehavior(t);var a={};if(i)r.behavior=9;else{var s=this._config||{};if((e&&Ot(s.syncPageActionNavClick)||s.syncPageActionNavClick)&&("CL"===t.actionType||"KE"===t.actionType)&&"a"===e.tagName.toLowerCase()){var l=(e.getAttribute("href")||"").toLowerCase();l&&(zt(l,"https:")||zt(l,"http:")||zt(l,".")||zt(l,"/"))&&(r.sync=3)}}if(e&&(r.targetUri=function(e){var t="";switch(e.tagName){case"A":case"AREA":t=e.href||"";break;case"IMG":t=e);break;case"INPUT":var n=e.type;if(n&&yv[n.toUpperCase()]){var i=Rn()||{};t=e.form?e.form.action||i.pathname||"":i.pathname||""}}return t}(e),(a=Kr(a=this._contentHandler.getElementContent(e,kv.PAGE_ACTION),this._getCustomTags(e)))&&a.bhvr&&!jr(t.behavior))){var c=a,"bhvr");r.behavior=this._getValidBehavior(c)}jr(t.actionType)&&(r.actionType=t.actionType),jr(t.clickCoordinateX)&&jr(t.clickCoordinateY)&&(r.clickCoordinates=t.clickCoordinateX+"X"+t.clickCoordinateY),jr(t.targetUri)&&(r.targetUri=t.targetUri),r.contentVer="2.0";var u=t.content||a;if(!Ht(u)){var d=this._config.callback.pageActionContentTags;u=Kr(u,"function"==typeof d?d(e):{},t&&t.contentTags?t.contentTags:{})}r.content=this._getContentFormatted(u),o.timeToAction=this._getTimeToClick(),o.refUri=jr(t.refUri)?t.refUri:this._config.coreData.referrerUri;var f=wv(this._config,this._traceLogger);f&&(o.cookies=f),this.trackPageAction(r,o)},t.prototype._getCustomTags=t.prototype._getTimeToClick=t}(Sv),Lv=function(e){eturn(0,u.ne)(t,e),t.prototype.trackPageUnload=t.prototype.capturePageUnload=t}(Sv),$v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,u.ne)(t,e),t.prototype.capturePageView=t}(Sv),Dv=function(e){eturn(0,u.ne)(t,e),t.prototype.capturePageViewPerformance=t}(Sv),Av={BUTTON:!0,CHECKBOX:!0,RADIO:!0,RESET:!0,SUBMIT:!0},Ov=function(){function e(t,n){var i,r,o,a,s,l,c,u,f,h=this;(0,d.Z)(e,this,(function(e){function d(e){var t,n={A:!0,BUTTON:!0,AREA:!0,INPUT:!0},r=Nn(),o=(e=e||r.event).srcElement||e.target,a={isAuto:!0,clickCoordinateX:e.pageX,clickCoordinateY:e.pageY},s="which"in(t=e)?3===t.which:"button"in t?2===t.button:void 0;if(s)a.actionType="CR";else if(function(e){return"which"in e?1===e.which:"button"in e?1===e.button:void 0}(e))a.actionType="CL";else if(function(e){if("keyCode"in e)return 13===e.keyCode}(e))a.actionType="KE";else if(e))a.actionType="KS";else{if(!e))return;a.actionType="CM"}for(;o&&o.tagName;){if(o.control&&n[o.control.tagName.toUpperCase()]&&(o=o.control),n[o.tagName.toUpperCase()]){("INPUT"!==o.tagName.toUpperCase()||Av[o.type.toUpperCase()])&&i&&i.capturePageAction(o,a,{},s);break}o=o.parentElement||o.parentNode}}(),i=t,r=n,o=yr(Ki("AutoCaptureHandler"),i._evtNamespace),e._analyticsPlugin=i,e._traceLogger=r,e.pageView=e.onLoad=e.click=function(){if(!a){var e=Nn(),t=_n();e&&e.addEventListener?(br(e,-1!==navigator.appVersion.indexOf("MSIE")?"click":"mousedown",d,o),br(e,"keyup",d,o)):t&&t.attachEvent&&(br(t,"click",d,o),br(t,"keyup",d,o)),a=!0}},e.scroll=function(e){if(!s){var t=pv(null,(function(){i&&i.captureContentUpdate({isAuto:!0,actionType:"S"})}),e.scroll,h);br(Nn(),"scroll",t,o),s=!0}},e.maxScroll=e.resize=function(e){if(!c){var t=pv((,null,e.resize,h);br(Nn(),"resize",t,o),c=!0}},e.onUnload=e.teardown=e._processClick=d}))}return e.__ieDyn=1,e}(),Nv={longNames:{isShortNames:!1,id:"data-bi-id",areaName:"data-bi-area",slotNumber:"data-bi-slot",contentName:"data-bi-name",contentSource:"data-bi-source",templateName:"data-bi-view",productId:"data-bi-product",contentType:"data-bi-type",parentId:"data-bi-parentid",parentName:"data-bi-parentname"},shortNames:{isShortNames:!0,id:"data-bi-id",areaName:"data-bi-an",slotNumber:"data-bi-sn",contentName:"data-bi-cn",contentSource:"data-bi-cs",templateName:"data-bi-tn",productId:"data-bi-pid",contentType:"data-bi-ct",parentId:"data-bi-pi",parentName:"data-bi-pn"}},Pv="parentId",_v="parentName",Fv="pI",Mv="pN",Rv=function(){eturn e.prototype.getMetadata=e.prototype.getVisibleContent=function(){var e,t={top:0,bottom:(e=vv()).h,left:0,right:e.w},n=null;Hr&&(n=document.querySelectorAll(hv(this._contentBlobFieldNames.areaName)+","+hv(this._contentBlobFieldNames.slotNumber)+","+hv(this._config.biBlobAttributeTag)));var i=[];if(n)for(var r=0;r<n.length;r++){var o=n[r];if(!uv(o)&&cv(o,t)){var a=this.getElementContent(o,kv.CONTENT_UPDATE);a&&i.push(a)}}return i},e.prototype.getElementContent=e.prototype.getLineageDetails=e.prototype._populateElementContentwithDataBi=function(e,t){var n={};if(!e){if(!this._config.useDefaultContentName)return n;e=t}var i=dv(e,this._contentBlobFieldNames.areaName),r=Kr({},this._getAreaContent(i)),o=this._config.callback.contentName?this._config.callback.contentName(e,this._config.useDefaultContentName):"",a=this._getDefaultContentName(t,this._config.useDefaultContentName);(n={id:e.getAttribute(this._contentBlobFieldNames.id)||e.id||"",aN:r.areaName,sN:e.getAttribute(this._contentBlobFieldNames.slotNumber),cN:o||e.getAttribute(this._contentBlobFieldNames.contentName)||a||e.getAttribute("alt")||"",cS:e.getAttribute(this._contentBlobFieldNames.contentSource)||r.contentSource,tN:r.templateName,pid:e.getAttribute(this._contentBlobFieldNames.productId),cT:e.getAttribute(this._contentBlobFieldNames.contentType)||r.type,pI:e.getAttribute(this._contentBlobFieldNames.parentId),pN:e.getAttribute(this._contentBlobFieldNames.parentName)}).id&&n.aN&&n.sN&&n.cN||ai(this._traceLogger,2,515,"Invalid content blob.  Missing required attributes (id, aN/area, sN/slot), cN/contentName.  Content information will still be collected!"),this._contentBlobFieldNames.isShortNames||(n={contentId:n.id,areaName:n.aN,slotNumber:n.sN,contentName:n.cN,contentSource:n.cS,templateName:n.tN,productId:n.pid,contentType:n.cT,parentId:n.pI,parentName:n.pN});for(var s,l=0;l<e.attributes.length;l++)(s=e.attributes[l]).name!==this._contentBlobFieldNames.id&&s.name!==this._contentBlobFieldNames.areaName&&s.name!==this._contentBlobFieldNames.slotNumber&&s.name!==this._contentBlobFieldNames.contentName&&s.name!==this._contentBlobFieldNames.contentSource&&s.name!==this._contentBlobFieldNames.templateName&&s.name!==this._contentBlobFieldNames.productId&&s.name!==this._contentBlobFieldNames.contentType&&s.name!==this._contentBlobFieldNames.parentId&&s.name!==this._contentBlobFieldNames.parentName&&-1!==s.name.indexOf("data-bi-")&&(n[s.name.replace("data-bi-","")]=s.value);return n},e.prototype._getMetaDataFromDOM=function(e,t){var n,i={};if(Hr){n=document.querySelectorAll("meta");for(var r=0;r<n.length;r++){var o=n[r];o.name&&0===o.name.toLowerCase().indexOf(e)&&(i[t?o.name.replace(e,""):o.name]=o.content)}}return i},e.prototype._getAreaContent=e.prototype._getDefaultContentName=e.prototype._getParentDetails=e.prototype._isTrackedWithDataM=e.prototype._isTrackedWithDataBi=e.prototype._isTracked=e.prototype._populateParentInfo=e}();var Vv=function(e){function t(){var n,i,r,o,a,s,l,c,u=e.call(this)||this;u.identifier="WebAnalyticsPlugin",u.version="3.2.13";var f,h,p,g,v=!1;return(0,d.Z)(t,u,(function(e,t){,e.updateCoreDataConfig=e.refreshMetadata=e.initialize=function(d,v,y){var b,w,C,x=v;d.extensionConfig=d.extensionConfig||[],d.extensionConfig[e.identifier]=d.extensionConfig[e.identifier]||{},e._config=(b=d.extensionConfig[e.identifier],w={useDefaultContentName:!0,useShortNameForContentBlob:!0,debounceMs:{scroll:600,resize:3e3},biBlobAttributeTag:"data-m",isLoggedIn:!1,shareAuthStatus:!1,cookiesToCollect:["MSFPC","ANON"],autoCapture:{pageView:!0,onLoad:!0,onUnload:!0,click:!0,scroll:!1,resize:!1,lineage:!1,jsError:!0,msTags:!0},callback:{pageName:null,pageActionPageTags:null,pageViewPageTags:null,contentUpdatePageTags:null,pageActionContentTags:null,signedinStatus:null},coreData:{referrerUri:Hr?document.referrer:"",requestUri:"",pageName:"",pageType:"",product:"",market:"",pageTags:{}},autoPopulateParentIdAndParentName:!1,syncMuid:!1,muidDomain:"microsoft.com"},C=[],Vt(w,(),function(e,t){av(e),Xt(t,()}(b,C),l=Kr(!0,w,b)),g=l.autoCapture;var T=x.getWParam;if(x.getWParam=function(){var e=0;return l.mscomCookies&&(e|=1),e|T()},d.extensionConfig[e.identifier].disableExceptionTracking=!g.jsError,t.initialize(d,v,y),h=h||new Rv(l,e.diagLog()),p=p||new Ov(e,e.diagLog()),l.manageCv){for(var k=0;k<y.length;k++)if("CorrelationVectorPlugin"===y[k].identifier){l.manageCv=!0,s=y[k];break}s||(ai(e.diagLog(),2,508,'Automatic Cv management is set to "true" in config.  However, cv plugin is not available. Disabling automatic Cv management'),l.manageCv=!1)}e.id=new sl(v),f=new ll;var S=h.getMetadata();n=new $v(u,l,h,e.id,l.callback.pageViewPageTags,S,e.diagLog()),i=new Ev(u,l,h,e.id,l.callback.pageActionPageTags,S,e.diagLog()),r=new Iv(u,l,h,e.id,l.callback.contentUpdatePageTags,S,e.diagLog()),o=new Lv(u,l,e.id,e.diagLog(),f,c),a=new Dv(u,l,h,e.id,l.callback.pageViewPageTags,S,e.diagLog()),l.syncMuid&&Cv((,e._evtNamespace),m(!0)},e.processTelemetry=e.trackEvent=e.trackPageView=e.capturePageView=function(e,t){n.capturePageView(e,t)},e.trackPageViewPerformance=e.capturePageViewPerformance=function(e,t){a.capturePageViewPerformance(e,t)},e.trackException=e.trackPageAction=function(e,t){i.trackPageAction(e,t)},e.capturePageAction=e.trackContentUpdate=function(e,t){r.trackContentUpdate(e,t)},e.captureContentUpdate=function(e,t){r.captureContentUpdate(e,t)},e.trackPageUnload=function(e,t){v||(v=!0,o.trackPageUnload(e,t))},e.capturePageUnload=e._populatePageViewPerformance=e.setContentHandler=function(e){h=e},e.setAutoCaptureHandler=e._doTeardown=)),u}return(0,u.ne)(t,e),t.__ieDyn=1,t}(ov),zv=["snippet","_webAnalytics","_postChannel","_propertyManager","_extensions"],Uv=["queue","extensions","version","sv"],Hv=function(e){function t(){var n,i,r,o,a=e.call(this)||this;eturn(0,d.Z)(t,a,(function(e,t){s(),e.initialize=function(n,a){xn(e,(function(){return"ApplicationInsights:initialize"}),(function(){var s=[o,i];if(a&&(s=s.concat(a)),n||un("You must provide a config object!"),n.channels&&n.channels.length>0){for(var l=!1,c=0;c<n.channels[0].length;c++)if(n.channels[0][c].identifier===r.identifier){l=!0;break}l||n.channels[0].push(r)}else n.channels=[[r]];var u=n.extensionConfig=n.extensionConfig||[];u[r.identifier]=u[r.identifier]||n&&n.channelConfiguration||{},u[o.identifier]=u[o.identifier]||n&&n.propertyConfiguration||{},u[i.identifier]=u[i.identifier]||n&&n.webAnalyticsConfiguration||{};try{t.initialize(n,s)}catch(t){ai(e.logger,1,514,"Failed to initialize SDK."+jn(t))}}),()},e._getDbgPlgTargets=e.getPropertyManager=function(){return o},e.getPostChannel=function(){return r},e.getWebAnalyticsExtension=function(){return i},hn(e,(function(){return i}),["trackEvent","trackPageView","trackPageAction","trackContentUpdate","trackPageUnload","trackException","trackPageViewPerformance","capturePageView","capturePageViewPerformance","capturePageAction","captureContentUpdate","capturePageUnload","_onerror"]),e.emptySnippetQueue=function(t){try{if(t&&(Nt(n),Vt(e,()),Ht(t.queue)){for(var i=t.queue.length,r=0;r<i;r++)(0,t.queue[r])();t.queue=void 0,delete t.queue}}catch(e){e&&Mt(e.toString)&&e.toString()}},e.updateSnippetDefinitions=function(e){var t=a;t.snippet=e,n=""+(e.sv||e.version||""),t.config?t.config=Kr(!0,e.config,t.config||{}):t.config=e.config,function(e,t,n){if(e&&t&&Ft(e)&&Ft(t)){var i=function(i){if(jt(i)){var r=t[i];Mt(r)?n&&!n(i)||(e[i]=dn(t,i)):n&&!n(i)||(_t(e,i)&&delete e[i],tn(e,i,(function(){return t[i]}),(function(e){t[i]=e}))||(e[i]=r))}};for(var r in t)i(r)}}(e,t,()},e.unload=)),a}return(0,u.ne)(t,e),t.__ieDyn=1,t}(Ao),Bv=n(5571);let jv=class{constructor(){this.areaName="DefaultAreaName",this.slotNumber=0,this.contentName="DefaultContentName",this.id="DefaultId",this.analytics=new Hv;const e={instrumentationKey:o.w.OneDSInstrumentationKey,enableDebug:!1,autoConfig:{scroll:!1,pageView:!1,onLoad:!1,onUnload:!1,click:!1,resize:!1,jsError:!1}};this.analytics.initialize(e,[])}init(e,t){e.addEventListener("click",this.processClick.bind(this)),this.areaName=t}rocessClick(e){e.target;const t=e.composedPath(),n={actionType:"",isAuto:!0};let i="which"in(r=e)&&3===r.which;var r;if(i)n.actionType="CR";else if((e=>"which"in e&&1===e.which)(e))n.actionType="CL";else if((e=>"key"in e?"Enter"===e.key:"keyCode"in e&&13===e.keyCode)(e))n.actionType="KE";else if((e=>"key"in e?" "===e.key:"keyCode"in e&&32===e.keyCode)(e))n.actionType="KS";else{if(!((e))return;n.actionType="CM"}t.some(((e,r)=>{var o,l;if(e instanceof Element){let c=e;if(a[c.tagName])return c instanceof HTMLInputElement?!!s[c.type.toUpperCase()]&&(c=null!==(o=this.lookforBITags(t,r))&&void 0!==o?o:c,!c.hasAttribute("data-bi-mto")&&(this.addRequiredTelemetryAttributes(c),this.analytics.capturePageAction(c,n,{},i),!0)):(c=null!==(l=this.lookforBITags(t,r))&&void 0!==l?l:c,!c.hasAttribute("data-bi-mto")&&(this.addRequiredTelemetryAttributes(c),this.analytics.capturePageAction(c,n,{},i),!0))}return!1}))}addRequiredTelemetryAttributes(e){var t;const n=e.hasAttribute("data-bi-an");(!n||n&&0===e.getAttribute("data-bi-an").length)&&e.setAttribute("data-bi-an",this.areaName);const i=e.hasAttribute("data-bi-sn");(!i||i&&0===e.getAttribute("data-bi-sn").length)&&e.setAttribute("data-bi-sn",this.slotNumber.toString());const r=e.hasAttribute("data-bi-cn");(!r||r&&0===e.getAttribute("data-bi-cn").length)&&e.setAttribute("data-bi-cn",this.contentName),(null===(t=e.id)||void 0===t?void 0:t.length)>0||e.hasAttribute("data-bi-id")||e.setAttribute("data-bi-id",this.id)}trackEvent(e){const t=Object.assign(Object.assign({},{behavior:300,actionType:"O",content:{}}),e);t.content||(t.content={}),t.content.aN&&""!==t.content.aN||(t.content.aN=this.areaName),t.content.sN&&""!==t.content.sN||(t.content.sN=this.slotNumber.toString()),t.content.contentName&&""!==t.content.contentName||(t.content.contentName=this.contentName),this.analytics.trackPageAction(t)}lookforBITags(e,t=0){for(let n=t;n<e.length;n++){const t=e[n];if(this.isTrackedWithDataBi(t))return t}return null}isTrackedWithDataBi(e){var t=e.attributes;if(t)for(var n=0;n<t.length;n++)if(t[n].name.indexOf("data-bi-")>=0)return!0;return!1}};jv=(0,i.gn)([Bv.r],jv),new jv},2437:655:(e,t,n)=>{function i(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}.d(t,{gn:()=>i,mG:()=>r}),Object.create,Object.create},3278:5112:(e,t,n)=>{function i(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}n.d(t,{gn:()=>i}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},8513:(e,t,n)=>{n.d(t,{PJ:()=>d,hP:()=>h,DR:()=>g,lw:()=>f,v1:()=>p,hM:()=>l});var i=n(8009),r=n(2211),o=n(9502),a=n(1312);class s{constructor(e,t,n){this.x=e,this.y=t,this.z=n}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new s(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new s((0,a.fZ)(this.x,e),(0,a.fZ)(this.y,e),(0,a.fZ)(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}oint=new s(.95047,1,1.08883)},8009:(e,t,n)=>{n.d(t,{H:()=>r});var i=n(1312);class r{constructor(e,t,n){this.h=e,this.s=t,this.l=n}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new r(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new r((0,i.fZ)(this.h,e),(0,i.fZ)(this.s,e),(0,i.fZ)(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},2211:(e,t,n)=>{n.d(t,{R:()=>r});var i=n(1312);.epsilon=216/24389,r.kappa=24389/27},9502:(e,t,n)=>{n.d(t,{h:()=>r});var i=n(1312);,1312:(e,t,n)=>{{Fv:()=>r,cY:()=>o,fZ:()=>l,t7:()=>s,uZ:()=>i,yi:()=>a}),Math.PI},1389:(e,t,n)=>{n.d(t,{in:()=>a});var i=n(9502),r=n(1312);const o=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;,23:(e,t,n)=>{n.d(t,{Ax:()=>a,Id:()=>l,Lj:()=>u,bw:()=>s,so:()=>c});var i=n(6657),r=n(6617),o=n(5238);const a=Object.freeze({locate:(0,o.j8)()}),s={toView:fromView:,l={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};835:(e,t,n)=>{n.d(t,{W:()=>u});var i=n(5238),r=n(6657),o=n(1704),a=n(23);const s={mode:"open"},l={},c=i.Bo.getById(4,();.forType=c.getByType},7917:(e,t,n)=>{n.d(t,{H:()=>f,M:()=>h});var i=n(6617),r=n(7267),o=n(6657),a=n(835);const s=new WeakMap,l={bubbles:!0,composed:!0,cancelable:!0};st f=Object.assign(d(HTMLElement),{from:define:);function h(e){return },6617:(e,t,n)=>{n.d(t,{SO:()=>u,Yl:()=>c,pc:()=>l});var i=n(5238);const r=i.P3.FAST.getById(1,(),o=i.P3.trustedTypes.createPolicy("fast-html",{createHTML:);let a=o;const s=`fast-${Math.random().toString(36).substring(2,8)}`,l=`${s}{`,c=`}${s}`,u=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicycreateHTML:e=>a.createHTML(e),isMarker:extractDirectiveIndexFromMarker:createInterpolationPlaceholder:createCustomAttributePlaceholdercreateBlockPlaceholder:queueUpdate:r.enqueue,processUpdates:r.process,nextUpdate:setAttributesetBooleanAttributeremoveChildNodescreateTemplateWalker:)},7267:(e,t,n)=>{n.d(t,{A:()=>r,q:()=>i});class i{bscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}6657:(e,t,n)=>{n.d(t,{LO:()=>s,Wp:()=>d,lk:()=>l,rd:()=>u,y$:()=>a});var i=n(6617),r=n(5238),o=n(7267);const a=r.Bo.getById(2,();unction l(e,t,n){return Object.assign({},n,{get:)}const c=r.Bo.getById(3,();.defineProperty(u.prototype,"index"),a.defineProperty(u.prototype,"length");const d=Object.seal(new u)},5238:(e,t,n)=>{n.d(t,{Bo:()=>o,P3:()=>i,j8:()=>s,ow:()=>a});const i=);void 0===i.trustedTypes&&(i.trustedTypes={createPolicy:(e,t)=>t});const r={configurable:!1,enumerable:!1,writable:!1};void 0===i.FAST&&Reflect.defineProperty(i,"FAST",Object.assign({value:Object.create(null)},r));const o=i.FAST;if(void 0===o.getById){const e=Object.create(null);Reflect.defineProperty(o,"getById",Object.assign({value,r))}const a=Object.freeze([]);,2125:(e,t,n)=>{n.d(t,{v:()=>i});,5492:(e,t,n)=>{n.d(t,{i:()=>a,j:()=>l});var i=n(2125),r=n(1704);04:(e,t,n)=>{n.d(t,{XL:()=>r});var i=n(6617);reate=(();let s=l=if(i.SO.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),s=l=catch(e){}et u=0;,4280:(e,t,n)=>{n.d(t,{ON:()=>a,d$:()=>o,m0:()=>r});var i=n(6617);ass a extends r{eateBehavior(e){return new this.behavior(e,this.options)}}},6696:(e,t,n)=>{n.d(t,{i:()=>o});var i=n(4280);class r{constructor(e,t){this.target=e,this.propertyName=t}bindunction o(e){return new i.ON("fast-ref",r,e)}},6164:(e,t,n)=>{n.d(t,{Q:()=>l});var i=n(4280),r=n(6657),o=n(5238);class a{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=r.y$.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(o.ow),this.source=null,this.shouldUpdate&&this.disconnect()}omputeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTargetclass s extends a{bserve(){this.target.addEventListener("slotchange",this)}unction l(e){return"string"==typeof e&&(e={property:e}),new i.ON("fast-slotted",s,e)}},3541:(e,t,n)=>{n.d(t,{d:()=>L});var i=n(6617),r=n(6657),o=n(4280);ion d(e){i.SO.setAttribute(this.target,this.targetName,e)}s v extends o.d${=null;nst C=i.Yl.length; S=n(6202);class I{reate(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=i.SO.createHTML(t);const n=e.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(e=n)}else e=t;const n=e,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,r=new Array(this.behaviorCount),o=i.SO.createTemplateWalker(t);let a=0,s=this.targetOffset,l=o.nextNode();for(let e=n.length;a<e;++a){const e=n[a],t=e.targetIndex;for(;null!==l;){if(s===t){r[a]=e.createBehavior(l);break}l=o.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let n=0,i=t.length;n<i;++n,++a)r[a]=t[n].createBehavior(e)}return new S.b(t,r)}const E=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function L(e,...t){const n=[];let i="";for(let r=0,a=e.length-1;r<a;++r){const a=e[r];let s=t[r];if(i+=a,s instanceof I){const e=s;s=()=>e}if("function"==typeof s&&(s=new v(s)),s instanceof o.d$){const e=E.exec(a);null!==e&&(s.targetName=e[2])}s instanceof o.m0?(i+=s.createPlaceholder(n.length),n.push(s)):i+=s}return i+=e[e.length-1],new I(i,n)}},6202:(e,t,n)=>{n.d(t,{b:()=>r});const i=document.createRange();,6243:(e,t,n)=>{n.d(t,{g:()=>a});const i=r=()=>null;function o(e){return void 0===e?r:i(e)?e:()=>e}function a(e,t,n){const r=i(e)?e:()=>e,a=o(t),s=o(n);return(e,t)=>r(e,t)?a(e,t):s(e,t)}},713:(e,t,n)=>{n.d(t,{B:()=>l,v:()=>s});var i=n(1704),r=n(1430);onst a=new Map,s=Object.freeze({defineforTag(e,t){const n=o(e),i=a.get(n);return!1===i?r.DI.findResponsibleContainer(t).get(n):i||null}});,4257:(e,t,n)=>{n.d(t,{L:()=>I});var i=n(7815),r=n(2125),o=n(6657),a=n(7917),s=n(407),l=n(6617),c=n(1704);const u=document.createElement("div");.gn)([o.LO],p.prototype,"target",void 0);roots=new Set,v.properties={};const m=new WeakMap,y=l.SO.supportsAdoptedStyleSheets?p,b=Object.freeze({getOrCreate(e){if(m.has(e))return m.get(e);let t;return t=e===u?new v:e instanceof Document?l.SO.supportsAdoptedStyleSheets?new f:new h:e instanceof a.H?new y(e):new g(e),m.set(e,t),t}});.uniqueId=((),w.tokensById=new Map;nst T=new WeakMap,k=new WeakMap;class S{tic findParent(e){if(u!==e.target){let t=(0,s.T)(e.target);for(;null!==t;){if(T.has(t))return T.get(t);t=(0,s.T)(t)}return S.getOrCreate(u)}return null}s(e){return this.assignedValues.has(e)}d(){this.parent&&k.get(this).removeChild(this)}ntains(e){return function(e,t){let n=t;for(;null!==n;){if(n===e)return!0;n=(0,s.T)(n)}return!1}(this.target,e.target)}ustomPropertyReflector=new (0,i.gn)([o.LO],S.prototype,"children",void 0);const I=Object.freeze({create:function(e){return w.from(e)},notifyConnection:e=>!(!e.isConnected||!S.existsFor(e)||(S.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!S.existsFor(e)||(S.getOrCreate(e).unbind(),0)),registerRoot(e=u){v.registerRoot(e)},unregisterRoot)},1430:(e,t,n)=>{n.d(t,{DI:()=>h,YM:()=>N,f3:()=>v});var i=n(7917),r=n(5238);const o=new Map;"metadata"in Reflect||(Reflect.metadata=Reflect.defineMetadata=Reflect.getOwnMetadata=;nst l=Object.freeze({nonesingleton:e=>new w(e,1,e),transient:),c=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:l.singleton})}),u=new Map;et f=null;const h=Object.freeze({createContainer:findResponsibleContainerfindParentContainergetOrCreateDOMContainer:getDesignParamtypes:d("design:paramtypes"),getAnnotationParamtypes:d("di:paramtypes"),getOrCreateAnnotationParamTypesgetDependenciesdefinePropertycreateInterface(e,t){const n="function"==typeof e?e:t,i="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||F,r="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),o=function(e,t,n){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${o.friendlyName}'`);t?h.defineProperty(e,t,o,r):h.getOrCreateAnnotationParamTypes(e)[n]=o};return o.$isInterface=!0,o.friendlyName=null==i?"(anonymous)":i,null!=n&&(o.register=,o.toString=o},inject:transient:singleton:),p=h.createInterface("Container");onst v=h.inject,m={scoped:!1};(),g((),y.$isResolver=!0,y.resolve=g((),g(();t k={$isResolver:!0,resolve:;nst E=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),L="__DI_LOCATE_PARENT__",$=new Map;onst A=new WeakMap;onst N=Object.freeze({instance:(e,t)=>new w(e,0,t),singleton:(e,t)=>new w(e,1,t),transient:(e,t)=>new w(e,2,t),callback:(e,t)=>new w(e,3,t),cachedCallback:aliasTo:);nst F="(anonymous)";onst R=),V={};,2941:(e,t,n)=>{n.d(t,{Um:()=>f,V2:()=>h});var i=n(5238),r=n(6617),o=n(23),a=n(6657),s=n(7824);const l="form-associated-proxy",c="ElementInternals",u=c in window&&"setFormValue"in window[c].prototype,d=new WeakMap;function f(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}et validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}et labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return i.ow}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}nitialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),r.SO.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),r.SO.queueUpdate((),this.validate()}get elementInternals(){if(!u)return null;let e=d.get(this);return e||(e=this.attachInternals(),d.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidityetValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}ormResetCallbackttachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",l),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",l)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===s.kL&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}};return(0,o.Lj)({mode:"boolean"})(t.prototype,"disabled"),(0,o.Lj)({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),(0,o.Lj)({attribute:"current-value"})(t.prototype,"currentValue"),(0,o.Lj)(t.prototype,"name"),(0,o.Lj)({mode:"boolean"})(t.prototype,"required"),(0,a.LO)(t.prototype,"value"),t}function h(e){class t extends(f(e)){}class n extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChangedpdateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return(0,o.Lj)({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),(0,o.Lj)({attribute:"current-checked",converter:o.bw})(n.prototype,"currentChecked"),(0,a.LO)(n.prototype,"defaultChecked"),(0,a.LO)(n.prototype,"checked"),n}},378:(e,t,n)=>{n.d(t,{I:()=>s});var i=n(7815),r=n(7917),o=n(6657),a=n(713);,i.gn)([o.LO],s.prototype,"template",void 0),(0,i.gn)([o.LO],s.prototype,"styles",void 0);,3037:(e,t,n)=>{n.d(t,{v:()=>o});var i=n(7815),r=n(23);class o{}(0,i.gn)([(0,r.Lj)({attribute:"aria-atomic"})],o.prototype,"ariaAtomic",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-busy"})],o.prototype,"ariaBusy",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-controls"})],o.prototype,"ariaControls",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-current"})],o.prototype,"ariaCurrent",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-describedby"})],o.prototype,"ariaDescribedby",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-details"})],o.prototype,"ariaDetails",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-disabled"})],o.prototype,"ariaDisabled",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-errormessage"})],o.prototype,"ariaErrormessage",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-flowto"})],o.prototype,"ariaFlowto",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-haspopup"})],o.prototype,"ariaHaspopup",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-hidden"})],o.prototype,"ariaHidden",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-invalid"})],o.prototype,"ariaInvalid",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-keyshortcuts"})],o.prototype,"ariaKeyshortcuts",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-label"})],o.prototype,"ariaLabel",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-labelledby"})],o.prototype,"ariaLabelledby",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-live"})],o.prototype,"ariaLive",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-owns"})],o.prototype,"ariaOwns",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-relevant"})],o.prototype,"ariaRelevant",void 0),(0,i.gn)([(0,r.Lj)({attribute:"aria-roledescription"})],o.prototype,"ariaRoledescription",void 0)},2528:(e,t,n)=>{n.d(t,{LC:()=>a,hW:()=>o,m9:()=>s});var i=n(3541),r=n(6696);class o{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const a=(e,t)=>i.d`
    <span
        part="end"
        ${(0,r.i)("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${(0,r.i)("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,s=(e,t)=>i.d`
    <span
        part="start"
        ${(0,r.i)("startContainer")}
        class="${"
    >
        <slot
            name="start"
            ${(0,r.i)("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;i.d`
    <span part="end" ${(0,r.i)("endContainer")}>
        <slot
            name="end"
            ${(0,r.i)("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,i.d`
    <span part="start" ${(0,r.i)("startContainer")}>
        <slot
            name="start"
            ${(0,r.i)("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`},993:(e,t,n)=>{n.d(t,{e:()=>r});var i=n(23);function r(e,...t){const n=i.Ax.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))})),i.Ax.locate(t).forEach((e=>n.push(e)))}))}},407:(e,t,n)=>{.d(t,{T:()=>i})},6693:(e,t,n)=>{n.d(t,{vF:()=>o});class i{ind(e){const{query:t}=this,n=this.constructListener(e);n.bind(t)(),t.addListener(n),this.listenerCache.set(e,n)}class r extends i{tatic with(e){return t=>new r(e,t)}constructListener(e){let t=!1;const n=this.styles;return function(){const{matches:i}=this;i&&!t?(e.$fastController.addStyles(n),t=i):!i&&t&&(e.$fastController.removeStyles(n),t=i)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const o=r.with(window.matchMedia("(forced-colors)"));r.with(window.matchMedia("(prefers-color-scheme: dark)")),r.with(window.matchMedia("(prefers-color-scheme: light)"))},4887:605:(e,t,n)=>{.d(t,{j:()=>i})},7403:(e,t,n)=>{n.d(t,{b:()=>i});const i=(0,n(1853).Zm)()?"focus-visible":"focus"},1853:(e,t,n)=>{et r;function o(){if("boolean"==typeof r)return r;if("undefined"==typeof window||!window.document||!window.document.createElement)return r=!1,r;const e=document.createElement("style"),t=);null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),r=!0}catch(e){r=!1}finally{document.head.removeChild(e)}return r}n.d(t,{Zm:()=>o,Re:()=>i})},7824:(e,t,n)=>{var i;n.d(t,{BI:()=>u,CX:()=>s,Kh:()=>c,SB:()=>o,iF:()=>r,kL:()=>a,oM:()=>d,tU:()=>l}),i||(i={}));const r="ArrowDown",o="ArrowUp",a="Enter",s="Escape",l="Home",c="End",u=" ",d="Tab"}},t={};.d=n.g=),n.o=var i={};(()=>{n.d(i,{D:()=>av});var e=n(655),t=n(7917),r=n(23),o=n(6657),a=n(1430),s=n(9590),l=n(1334),c=n(6368),u=n(7815),d=n(6617),f=n(7824),h=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"].join(","),p="undefined"==typeof Element,g=p?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,v=!p&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},m=function(e){return"INPUT"===e.tagName},y=b=function(e,t){return!(t)||t)<0||!e,t))},w=C=n(378);class x extends C.I{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case f.CX:this.dismiss(),e.preventDefault();break;case f.oM:this.handleTabKeyDown(e)}},this.handleDocumentFocus=this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const t=this.getTabQueueBounds();return 0!==t.length?1===t.length?(t[0].focus(),void e.preventDefault()):void(e.shiftKey&&e.target===t[0]?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||e.target!==t[t.length-1]||(t[0].focus(),e.preventDefault())):void 0},this.getTabQueueBounds=()=>x.reduceTabbableItems([],this),this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=this.updateTrapFocus=e=>{const t=void 0===e?this.shouldTrapFocus():e;t&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),d.SO.queueUpdate((()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()}))):!t&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}how(){this.hidden=!1}onnectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=o.y$.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChangetatic reduceTabbableItems(e,t){return"-1"===t.getAttribute("tabindex")?e:w(t)||x.isFocusableFastElement(t)&&x.hasTabbableShadow(t)?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(x.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var t,n;return!!(null===(n=null===(t=e.$fastController)||void 0===t?void 0:t.definition.shadowOptions)||void 0===n?void 0:n.delegatesFocus)}static hasTabbableShadow(e){var t,n;return Array.from(null!==(n=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("*"))&&void 0!==n?n:[]).some((e=>w(e)))}}(0,u.gn)([(0,r.Lj)({mode:"boolean"})],x.prototype,"modal",void 0),(0,u.gn)([(0,r.Lj)({mode:"boolean"})],x.prototype,"hidden",void 0),(0,u.gn)([(0,r.Lj)({attribute:"trap-focus",mode:"boolean"})],x.prototype,"trapFocus",void 0),(0,u.gn)([(0,r.Lj)({attribute:"aria-describedby"})],x.prototype,"ariaDescribedby",void 0),(0,u.gn)([(0,r.Lj)({attribute:"aria-labelledby"})],x.prototype,"ariaLabelledby",void 0),(0,u.gn)([(0,r.Lj)({attribute:"aria-label"})],x.prototype,"ariaLabel",void 0);var T=n(3541),k=n(6243),S=n(6696),I=n(5492),E=n(4257);const L=E.L.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(e,t,n)=>{let i=.12,r=.14;return t>16&&(i=.2,r=.24),`0 0 2px rgba(0, 0, 0, ${i}), 0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${r})`}}),$=E.L.create("elevation-shadow-card-rest-size").withDefault(4),D=E.L.create("elevation-shadow-card-hover-size").withDefault(8),A=E.L.create("elevation-shadow-card-active-size").withDefault(0),O=E.L.create("elevation-shadow-card-focus-size").withDefault(8),N=E.L.create("elevation-shadow-card-rest").withDefault((e=>L.getValueFor(e).evaluate(e,$.getValueFor(e)))),P=(E.L.create("elevation-shadow-card-hover").withDefault((e=>L.getValueFor(e).evaluate(e,D.getValueFor(e)))),E.L.create("elevation-shadow-card-active").withDefault((e=>L.getValueFor(e).evaluate(e,A.getValueFor(e)))),E.L.create("elevation-shadow-card-focus").withDefault((e=>L.getValueFor(e).evaluate(e,O.getValueFor(e)))),E.L.create("elevation-shadow-tooltip-size").withDefault(16)),_=(E.L.create("elevation-shadow-tooltip").withDefault((e=>L.getValueFor(e).evaluate(e,P.getValueFor(e)))),E.L.create("elevation-shadow-flyout-size").withDefault(32)),F=E.L.create("elevation-shadow-flyout").withDefault((e=>L.getValueFor(e).evaluate(e,_.getValueFor(e)))),M=E.L.create("elevation-shadow-dialog-size").withDefault(128),R=E.L.create("elevation-shadow-dialog").withDefault((e=>L.getValueFor(e).evaluate(e,M.getValueFor(e)))),V=x.compose({baseName:"dialog",template:(e,t)=>T.d`
    <div class="positioning-region" part="positioning-region">
        ${(0,k.g)((e=>e.modal),T.d`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${(0,S.i)("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(e,t)=>I.i`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${R};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${s.rSr} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${s.IfY};
    z-index: 1;
    border: calc(${s.Han} * 1px) solid transparent;
  }
`});var z=n(2437);const U=H={trialSignupBaseAPI:`${z.w.TrialServiceUrl}/api/v1/`,localizationAPI:"Localization/TrialSignUpForm/",provisionReadyAPI:"environment/",provisionAPI:"ProvisionTrialEnvironment/",provisionAvailability:"GetTrialEligibility/",login:`${U(z.w.TrialServiceLogin)}/signin/`,signup:"https://prv.signup.microsoft.com/get-started/signup",switchto:`${U(z.w.TrialServiceLogin)}/switchto`,signinto:`${U(z.w.TrialServiceLogin)}/signinto`,switchtenant:`${U(z.w.TrialServiceLogin)}/switchtenant`,provisionTries:10,provisionTimeSec:5},B=Object.assign(Object.assign({},H),{trialSignupBaseAPI:`${U(z.w.TrialServiceAEM)}/api/v1/`,login:`${U(z.w.TrialServiceLoginAEM)}/cascadeauth/v1/bap-sites/account/signin`,switchto:`${U(z.w.TrialServiceLoginAEM)}/cascadeauth/v1/bap-sites/account/switchto`,signinto:`${U(z.w.TrialServiceLoginAEM)}/cascadeauth/v1/bap-sites/account/signinto`,switchtenant:`${U(z.w.TrialServiceLoginAEM)}/cascadeauth/v1/bap-sites/account/switchtenant`});var j=n(7567);class q extends C.I{(0,u.gn)([r.Lj],q.prototype,"role",void 0),(0,u.gn)([r.Lj],q.prototype,"orientation",void 0);var G=n(605);const W=q.compose({baseName:"divider",template:(e,t)=>T.d`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>I.i`
    ${(0,G.j)("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${s.Han} * 1px) solid ${s.dtw};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${s._5n} * 1px);
      border-left: calc(${s.Han} * 1px) solid ${s.dtw};
  }
  `});var K=n(5112);class X extends C.I{}var Y=n(407),Z=n(1389),J=n(8473),Q=n(3241),ee=n(6693),te=n(3278);class ne extends X{cardFillColorChanged(e,t){if(t){const e=(0,Z.in)(t);null!==e&&(this.neutralPaletteSource=t,s.IfY.setValueFor(this,J.w.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=(0,Z.in)(t),n=J.w.create(e.r,e.g,e.b);s.yvm.setValueFor(this,Q.v.create(n))}}handleChange(e,t){this.cardFillColor||s.IfY.setValueFor(this,(t=>s.abR.getValueFor(t).evaluate(t,s.IfY.getValueFor(e)).rest))}connectedCallback(){super.connectedCallback();const e=(0,Y.T)(this);if(e){const t=o.y$.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}(0,K.gn)([(0,r.Lj)({attribute:"card-fill-color",mode:"fromView"})],ne.prototype,"cardFillColor",void 0),(0,K.gn)([(0,r.Lj)({attribute:"neutral-palette-source",mode:"fromView"})],ne.prototype,"neutralPaletteSource",void 0);const ie=ne.compose({baseName:"card",baseClass:X,template:(e,t)=>T.d`
    <slot></slot>
`,styles:(e,t)=>I.i`
    ${(0,G.j)("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${s.IfY};
      color: ${s.CHi};
      border: calc(${s.Han} * 1px) solid ${s.Ja_};
      border-radius: calc(${s.rSr} * 1px);
      box-shadow: ${N};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors((0,ee.vF)(I.i`
        :host {
          background: ${te.H.Canvas};
          color: ${te.H.CanvasText};
        }
      `))});var re=n(3037),oe=n(2528),ae=n(993),se=n(2941);class le extends C.I{}class ce extends((0,se.Um)(le)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ue extends ce{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&d.SO.queueUpdate(()}ndleChange(){this.$emit("change")}validate(){super.validate(this.control)}}(0,u.gn)([(0,r.Lj)({attribute:"readonly",mode:"boolean"})],ue.prototype,"readOnly",void 0),(0,u.gn)([(0,r.Lj)({mode:"boolean"})],ue.prototype,"autofocus",void 0),(0,u.gn)([r.Lj],ue.prototype,"placeholder",void 0),(0,u.gn)([r.Lj],ue.prototype,"type",void 0),(0,u.gn)([r.Lj],ue.prototype,"list",void 0),(0,u.gn)([(0,r.Lj)({converter:r.Id})],ue.prototype,"maxlength",void 0),(0,u.gn)([(0,r.Lj)({converter:r.Id})],ue.prototype,"minlength",void 0),(0,u.gn)([r.Lj],ue.prototype,"pattern",void 0),(0,u.gn)([(0,r.Lj)({converter:r.Id})],ue.prototype,"size",void 0),(0,u.gn)([(0,r.Lj)({mode:"boolean"})],ue.prototype,"spellcheck",void 0),(0,u.gn)([o.LO],ue.prototype,"defaultSlottedNodes",void 0);class de{}(0,ae.e)(de,re.v),(0,ae.e)(ue,oe.hW,de);var fe=n(6164);function he(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}var pe=n(4887),ge=n(3547),ve=n(5874),me=n(8687);const ye=E.L.create("input-placeholder-rest").withDefault((e=>{const t=s.smF.getValueFor(e);return s.axZ.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),be=E.L.create("input-placeholder-hover").withDefault((e=>{const t=s.smF.getValueFor(e);return s.axZ.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),we=E.L.create("input-filled-placeholder-rest").withDefault((e=>{const t=s.TuC.getValueFor(e);return s.axZ.getValueFor(e).evaluate(e,t.evaluate(e).rest)})),Ce=E.L.create("input-filled-placeholder-hover").withDefault((e=>{const t=s.TuC.getValueFor(e);return s.axZ.getValueFor(e).evaluate(e,t.evaluate(e).hover)})),xe=(e,t,n,i=":not([disabled]):not(:focus-within)")=>I.i`
  ${n} {
    background: ${s._jX};
  }

  :host(${i}:hover) ${n} {
    background: ${s.d$x};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: ${s.KTo};
  }

  :host([disabled]) ${n} {
    background: ${s._jX};
  }

  .control::placeholder {
    color: ${we};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${Ce};
  }
`,Te=(e,t,n,i=":not([disabled]):not(:focus-within)")=>I.i`
  :host {
    color: ${te.H.ButtonText};
  }

  ${n} {
    background: ${te.H.ButtonFace};
    border-color: ${te.H.ButtonText};
  }

  :host(${i}:hover) ${n},
  :host(:not([disabled]):focus-within) ${n} {
    border-color: ${te.H.Highlight};
  }

  :host([disabled]) ${n} {
    opacity: 1;
    background: ${te.H.ButtonFace};
    border-color: ${te.H.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${te.H.CanvasText};
  }

  :host(:not([disabled]):focus) ${n} {
    ${me.G}
    outline-color: ${te.H.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${te.H.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${te.H.GrayText};
  }
`;var ke=n(3863);const Se=".root";class Ie extends ue{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}(0,K.gn)([r.Lj],Ie.prototype,"appearance",void 0);const Ee=Ie.compose({baseName:"text-field",baseClass:ue,template:(e,t)=>T.d`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,fe.Q)({property:"defaultSlottedNodes",filter:he})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0,oe.m9)(e,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${(0,S.i)("control")}
            />
            ${(0,oe.LC)(e,t)}
        </div>
    </template>
`,styles:(e,t)=>I.i`
    ${(0,G.j)("inline-block")}

    ${((e,t,n)=>I.i`
  :host {
    ${ge.cX}
    color: ${s.CHi};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${n} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${s.Han} * 1px) solid transparent;
    border-radius: calc(${s.UWU} * 1px);
    height: calc(${ve.i} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${s.CHi};
    cursor: pointer;
    ${ge.cX}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${n},
  :host([readonly]) ${n},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${pe.H};
  }

  :host([disabled]) {
    opacity: ${s.VFZ};
  }
`)(0,0,Se)}

    ${I.i`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${s.vxp} * 1px);
      bottom: 0;
      border-bottom: calc(${s.vxp} * 1px) solid ${s.Avx};
      border-bottom-left-radius: calc(${s.UWU} * 1px);
      border-bottom-right-radius: calc(${s.UWU} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${s._5n} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors((0,ke.H)("outline",((e,t,n,i=":not([disabled]):not(:focus-within)")=>I.i`
  ${n} {
    background: padding-box linear-gradient(${s._Bj}, ${s._Bj}),
      border-box ${s.iAs};
  }

  :host(${i}:hover) ${n} {
    background: padding-box linear-gradient(${s.Tm7}, ${s.Tm7}),
      border-box ${s.zt3};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: padding-box linear-gradient(${s.rFm}, ${s.rFm}),
      border-box ${s.iAs};
  }
  
  :host([disabled]) ${n} {
    background: padding-box linear-gradient(${s._Bj}, ${s._Bj}),
      border-box ${s.akT};
  }

  .control::placeholder {
    color: ${ye};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${be};
  }
`)(0,0,Se)),(0,ke.H)("filled",xe(0,0,Se)),(0,ee.vF)(Te(0,0,Se))),shadowOptions:{delegatesFocus:!0}});class Le extends C.I{}class $e extends((0,se.V2)(Le)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class De extends $e{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key!==f.BI||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}(0,u.gn)([(0,r.Lj)({attribute:"readonly",mode:"boolean"})],De.prototype,"readOnly",void 0),(0,u.gn)([o.LO],De.prototype,"defaultSlottedNodes",void 0),(0,u.gn)([o.LO],De.prototype,"indeterminate",void 0);var Ae=n(7403);const Oe=De.compose({baseName:"checkbox",template:(e,t)=>T.d`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${(0,fe.Q)("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>I.i`
    ${(0,G.j)("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${ve.i} / 2 + ${s._5n}) * 1px);
      height: calc((${ve.i} / 2 + ${s._5n}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${s.UWU} * 1px);
      border: calc(${s.Han} * 1px) solid ${s.rU8};
      background: ${s.pB6};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${ge.cX}
      color: ${s.CHi};
      ${""} padding-inline-start: calc(${s._5n} * 2px + 2px);
      margin-inline-end: calc(${s._5n} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${s.CHi};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${s.w41};
    }

    :host(:not(.disabled):hover) .control {
      background: ${s.vFq};
      border-color: ${s.gKw};
    }

    :host(:not(.disabled):active) .control {
      background: ${s.bWE};
      border-color: ${s.ekh};
    }

    :host(:${Ae.b}) .control {
      background: ${s.W3V};
      ${me.H}
    }

    :host(.checked) .control {
      background: ${s.Avx};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${s.OCG};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${s.UEO};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${pe.H};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${s.VFZ};
    }
  `.withBehaviors((0,ee.vF)(I.i`
        .control {
          border-color: ${te.H.FieldText};
          background: ${te.H.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${te.H.Highlight};
          background: ${te.H.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${te.H.FieldText};
        }
        :host(:${Ae.b}) .control {
          forced-color-adjust: none;
          outline-color: ${te.H.FieldText};
          background: ${te.H.Field};
          border-color: ${te.H.Highlight};
        }
        :host(.checked) .control {
          background: ${te.H.Highlight};
          border-color: ${te.H.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${te.H.HighlightText};
          border-color: ${te.H.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${te.H.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${te.H.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${te.H.GrayText};
          background: ${te.H.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${te.H.GrayText};
        }
      `)),checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '});class Ne extends C.I{alueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}onnectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,i=t-e;this.percentComplete=0===i?0:Math.fround((n-e)/i*100)}}(0,u.gn)([(0,r.Lj)({converter:r.Id})],Ne.prototype,"value",void 0),(0,u.gn)([(0,r.Lj)({converter:r.Id})],Ne.prototype,"min",void 0),(0,u.gn)([(0,r.Lj)({converter:r.Id})],Ne.prototype,"max",void 0),(0,u.gn)([(0,r.Lj)({mode:"boolean"})],Ne.prototype,"paused",void 0),(0,u.gn)([o.LO],Ne.prototype,"percentComplete",void 0);const Pe=compose({baseName:"progress-ring",template:(e,t)=>T.d`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${(0,k.g)((,T.d`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,T.d`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>I.i`
    ${(0,G.j)("flex")} :host {
      align-items: center;
      height: calc(${ve.i} * 1px);
      width: calc(${ve.i} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${s.Avx};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${s.Avx};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${s.Q5n};
    }

    :host(.paused) .determinate {
      stroke: ${s.Q5n};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors((0,ee.vF)(I.i`
        .background {
          stroke: ${te.H.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${te.H.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${te.H.GrayText};
        }
      `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '});var _e=n(7856),Fe=n(3861),Me=n(7634);const Re=I.i`
    
`,Ve=I.i`

`,ze=I.i`
    :host {
        /* FAST variables */
        --neutral-fill-hover: var(--brand-color);
        --neutral-fill-active: var(--brand-color);
        --accent-fill-rest: var(--brand-color);
        --accent-fill-hover: var(--brand-color);
        --accent-fill-active: var(--brand-color);
        --accent-foreground-rest: var(--brand-color);
        --right-background-color: ${Me.jr.colorWhite};
        --brand-logo: '';
        --brand-color: '';
        --brand-forecolor: ${Me.jr.colorWhite};
        -webkit-font-smoothing: antialiased;
    }

    h2 {
        font-size: ${Me.p9.fontSizeMediumLarge};
        font-weight: ${Me.p9.fontWeight6};
        line-height: 36px;
    }

    h3 {
        font-size: ${Me.p9.fontSizeMediumLarge};
        font-weight: ${Me.p9.fontWeight6};
        line-height: 32px;
    }

    .container {
        display: ${Me.uH.displayFlex};
        flex-direction: column-reverse;
        text-rendering: optimizeLegibility;
        line-height: ${Me.C7.lineHeight15};
    }

    .container.loading {
        height: 400px;
        align-items: center;
        justify-content: space-around;
    }

    fluent-card {
        box-shadow: none;
        background-color: ${Me.jr.colorWhite};
    }

    .hide-small {
        display: ${Me.uH.displayNone};
    }

    .container :where(.left-side-wrapper, .right-side-wrapper) {
        flex: 1 1 50%;
        padding: 36px 15px;
    }

    .right-side-wrapper {
        padding: 0;
    }

    .top-wrapper {
        background-color: ${Me.jr.colorAntiFlashWhite};
        padding: 24px 12px 10px 12px;
    }

    p.error {
        margin-top: 0;
        font-size: ${Me.p9.fontSizeSmall};
        font-weight: ${Me.p9.fontWeight6};
        line-height: 16px;
        color: ${Me.jr.errorColor};
    }

    .body-top {
        font-size: ${Me.p9.baseFontSize};
        font-weight: ${Me.p9.fontWeight6};
        line-height: 21px;
    }

    .medium-text {
        font-size: ${Me.p9.baseFontSize};
    }

    .consent-wrapper,
    .setup-link {
        margin: ${Me.C7.spacingSize1} 0;
        font-size: 0.75rem;
    }

    .consent a, .setup-link a {
        color: ${Me.jr.colorBlack};
    }

    .submit-button-wrapper {
        margin-top: 40px;
        display: ${Me.uH.displayFlex};
    }

    fluent-checkbox {
        --neutral-stroke-rest: ${Me.jr.colorDarkGrey};
        --accent-fill-rest: ${Me.jr.colorWhite};
        --neutral-fill-hover: var(--brand-color);
        --neutral-fill-active: var(--brand-color);
        --accent-fill-rest: var(--brand-color);
        --accent-fill-hover: var(--brand-color);
        --accent-fill-active: var(--brand-color);
        --accent-foreground-rest: var(--brand-color);
        --stroke-width: 1;
        --base-height-multiplier: 5;
    }

    fluent-text-field {
        width: ${Me.C7.oneHundredPercent};
        --focus-stroke-width: 1;
        --stroke-width: 1;
        --focus-stroke-outer: ${Me.jr.colorDarkGrey};
        --neutral-stroke-input-rest: ${Me.jr.colorDarkGrey};
        --neutral-stroke-input-hover: ${Me.jr.colorDarkGrey};
        --neutral-stroke-input-active: ${Me.jr.colorDarkGrey};
        --neutral-stroke-input-focus: ${Me.jr.colorDarkGrey};
    }

    fluent-text-field::part(label) {
        font-weight: ${Me.p9.fontWeight6};
        display: ${Me.uH.displayBlock};
        padding-bottom: 20px;
    }

    fluent-text-field:focus {
        --focus-stroke-width: 2;
        --stroke-width: 2;
        --focus-stroke-outer: var(--brand-color);
        --neutral-stroke-input-rest: var(--brand-color);
        --neutral-stroke-input-hover: var(--brand-color);
        --neutral-stroke-input-active: var(--brand-color);
        --neutral-stroke-input-focus: var(--brand-color);
    }

    fluent-text-field.error {
        --neutral-stroke-input-rest: ${Me.jr.errorColor};
        --focus-stroke-outer: ${Me.jr.errorColor};
        --neutral-stroke-input-rest: ${Me.jr.errorColor};
        --neutral-stroke-input-hover: ${Me.jr.errorColor};
        --neutral-stroke-input-active: ${Me.jr.errorColor};
        --neutral-stroke-input-focus: ${Me.jr.errorColor};
        --accent-fill-rest: ${Me.jr.errorColor};
    }

    fluent-button {
        --neutral-foreground-rest: var(--brand-forecolor);
        --neutral-fill-active: var(--brand-color);
        --neutral-fill-rest: var(--brand-color);
        --accent-fill-hover: var(--brand-color);
        --neutral-fill-hover: var(--brand-color);
        opacity: 1;
        height: 3rem;
        font-size: ${Me.p9.baseFontSize};
    }

    fluent-button.disabled {
        --neutral-fill-rest: rgba(0, 0, 0, 0.2);
    }

    fluent-button:focus {
        outline: 1px dashed ${Me.jr.buttonBorderColorBlack};
        outline-offset: 1px;
    }

    fluent-button::part(control) {
        padding: 0px 20px;
    }

    fluent-progress-ring {
        --accent-foreground-rest: var(--brand-color);
        margin: 0 0 0 20px;
    }

    .brand-logo {
        height: ${Me.C7.spacingSize4};
        width: ${Me.C7.spacingSize4};
    }

    .brand-logo-small-wrapper {
        display: ${Me.uH.displayFlex};
        align-items: center;
    }

    .brand-logo-small {
        width: ${Me.C7.spacingSize2};
        height: ${Me.C7.spacingSize2};
    }

    .brand-logo-small-wrapper span {
        font-size: 14px;
        padding-left: 5px;
        padding-right: 5px;
    }

    .left-side-wrapper {
        background-color: ${Me.jr.colorAntiFlashWhite};
    }

    fluent-card form {
        padding-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;
    }

    ul {
        padding-left: 20px;
        padding-right: 20px;
    }

    ul li {
        font-size: inherit;
        font-weight: ${Me.p9.fontWeight4};
        margin-bottom: 16px;
    }

    fluent-card h3 {
        padding: 0 15px;
    }

    @media only screen and (min-width: 768px) {
        .container :where(.left-side-wrapper, .right-side-wrapper) {
            padding: 40px;
        }

        .right-side-wrapper {
            padding: 0;
        }

        .top-wrapper {
            padding-left: 35px;
            padding-right: 35px;
        }

        .top-wrapper h2 {
            width: 50%;
        }

        fluent-card form {
            padding-left: 35px;
            padding-right: 35px;
            width: 50%;
        }

        fluent-card h3 {
            margin-left: 35px;
            margin-right: 35px;
            padding: 0;
            width: 50%;
        }
    }

    @media only screen and (min-width: 960px) {
        .container {
            flex-direction: row;
            font-size: ${Me.p9.baseFontSize};
        }

        .top-wrapper {
            width: unset;
            padding: unset;
        }

        h2 {
            font-size: ${Me.p9.fontSizeLarge};
            line-height: 54px;
        }

        .top-wrapper h2 {
            width: unset;
        }

        fluent-card h3 {
            margin-left: unset;
            margin-right: unset;
            width: unset;
        }

        .hide-small {
            display: ${Me.uH.displayUnset};
        }

        .hide-large {
            display: ${Me.uH.displayNone};
        }

        fluent-divider {
            margin: ${Me.C7.spacingSize3} 0;
            padding-top: 2px;
            width: ${Me.C7.oneHundredPercent};
            background: ${Me.jr.colorBlack};
        }

        fluent-card form {
            padding-left: unset;
            padding-right: unset;
            width: unset;
        }

        .container :where(.left-side-wrapper, .right-side-wrapper) {
            padding: 60px;
        }

        fluent-card {
            margin-top: 5%;
            box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
            border-radius: 4px;
        }

        fluent-card > div {
            padding: 50px;
        }

        .left-side-wrapper {
            background-color: unset;
        }

        .right-side-wrapper {
            background-color: ${Me.jr.colorAntiFlashWhite};
        }

        .body-top {
            font-size: ${Me.p9.fontSizeMedium};
            line-height: 28px;
        }

        .top-wrapper {
            background-color: unset;
        }
    }
`.withBehaviors(new Fe.O(Re,Ve));var Ue=n(5238);unction Be(e,t,n,i,r,o){let a=0,s=0;const l=Math.min(n-t,o-r);if(0===t&&0===r&&(a=function(e,t,n){for(let i=0;i<n;++i)if(e[i]!==t[i])return i;return n}(e,i,l)),n===e.length&&o===i.length&&(s=function(e,t,n){let i=e.length,r=t.length,o=0;for(;o<n&&e[--i]===t[--r];)o++;return o}(e,i,l-a)),r+=a,o-=s,(n-=s)-(t+=a)==0&&o-r==0)return Ue.ow;if(t===n){const e=He(t,[],0);for(;r<o;)e.removed.push(i[r++]);return[e]}if(r===o)return[He(t,[],n-t)];const c=function(e){let t=e.length-1,n=e[0].length-1,i=e[t][n];const r=[];for(;t>0||n>0;){if(0===t){r.push(2),n--;continue}if(0===n){r.push(3),t--;continue}const o=e[t-1][n-1],a=e[t-1][n],s=e[t][n-1];let l;l=a<s?a<o?a:o:s<o?s:o,l===o?(o===i?r.push(0):(r.push(1),i=o),t--,n--):l===a?(r.push(3),t--,i=a):(r.push(2),n--,i=s)}return r.reverse(),r}(function(e,t,n,i,r,o){const a=o-r+1,s=n-t+1,l=new Array(a);let c,u;for(let e=0;e<a;++e)l[e]=new Array(s),l[e][0]=e;for(let e=0;e<s;++e)l[0][e]=e;for(let n=1;n<a;++n)for(let o=1;o<s;++o)e[t+o-1]===i[r+n-1]?l[n][o]=l[n-1][o-1]:(c=l[n-1][o]+1,u=l[n][o-1]+1,l[n][o]=c<u?c:u);return l}(e,t,n,i,r,o)),u=[];let d,f=t,h=r;for(let e=0;e<c.length;++e)switch(c[e]){case 0:void 0!==d&&(u.push(d),d=void 0),f++,h++;break;case 1:void 0===d&&(d=He(f,[],0)),d.addedCount++,f++,d.removed.push(i[h]),h++;break;case 2:void 0===d&&(d=He(f,[],0)),d.addedCount++,f++;break;case 3:void 0===d&&(d=He(f,[],0)),d.removed.push(i[h]),h++}return void 0!==d&&u.push(d),u}const je=Array.prototype.push;function qe(e,t,n,i){const r=He(t,n,i);let o=!1,a=0;for(let t=0;t<e.length;t++){const n=e[t];if(n.index+=a,o)continue;const i=(s=r.index,l=r.index+r.removed.length,c=n.index,u=n.index+n.addedCount,l<c||u<s?-1:l===c||u===s?0:s<c?l<u?l-c:u-c:u<l?u-s:l-s);if(i>=0){e.splice(t,1),t--,a-=n.addedCount-n.removed.length,r.addedCount+=n.addedCount-i;const s=r.removed.length+n.removed.length-i;if(r.addedCount||s){let e=n.removed;if(r.index<n.index){const t=r.removed.slice(0,n.index-r.index);je.apply(t,e),e=t}if(r.index+r.removed.length>n.index+n.addedCount){const t=r.removed.slice(n.index+n.addedCount-r.index);je.apply(e,t)}r.removed=e,n.index<r.index&&(r.index=n.index)}else o=!0}else if(r.index<n.index){o=!0,e.splice(t,0,r),t++;const i=r.addedCount-r.removed.length;n.index+=i,a+=i}}var s,l,c,u;o||e.push(r)}var Ge=n(7267);let We=!1;function Ke(e,t){let n=e.index;const i=t.length;return n>i?n=i-e.addedCount:n<0&&(n=i+e.removed.length+n-e.addedCount),n<0&&(n=0),e.index=n,e}class Xe extends Ge.q{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}ddSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,d.SO.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,d.SO.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=void 0===t?function(e,t){let n=[];const i=function(e){const t=[];for(let n=0,i=e.length;n<i;n++){const i=e[n];qe(t,i.index,i.removed,i.addedCount)}return t}(t);for(let t=0,r=i.length;t<r;++t){const r=i[t];1!==r.addedCount||1!==r.removed.length?n=n.concat(Be(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==e[r.index]&&n.push(r)}return n}(this.source,e):Be(this.source,0,this.source.length,t,0,t.length);this.notify(n)}}var Ye=n(4280),Ze=n(6202);const Je=Object.freeze({positioning:!1,recycle:!0});function Qe(e,t,n,i){e.bind(t[n],i)}function et(e,t,n,i){const r=Object.create(i);r.index=n,r.length=t.length,e.bind(t[n],r)}class tt{constructor(e,t,n,i,r,a){this.location=e,this.itemsBinding=t,this.templateBinding=i,this.options=a,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Qe,this.itemsBindingObserver=o.y$.binding(t,this,n),this.templateBindingObserver=o.y$.binding(i,this,r),a.positioning&&(this.bindView=et)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=Ue.ow);const t=this.itemsObserver,n=this.itemsObserver=o.y$.getNotifier(this.items),i=t!==n;i&&null!==t&&t.unsubscribe(this),(i||e)&&n.subscribe(this)}updateViews(e){const t=this.childContext,n=this.views,i=this.bindView,r=this.items,o=this.template,a=this.options.recycle,s=[];let l=0,c=0;for(let u=0,d=e.length;u<d;++u){const d=e[u],f=d.removed;let h=0,p=d.index;const g=p+d.addedCount,v=n.splice(d.index,f.length),m=c=s.length+v.length;for(;p<g;++p){const e=n[p],u=e?e.firstChild:this.location;let d;a&&c>0?(h<=m&&v.length>0?(d=v[h],h++):(d=s[l],l++),c--):d=o.create(),n.splice(p,0,d),i(d,r,p,t),d.insertBefore(u)}v[h]&&s.push(...v.slice(h))}for(let e=l,t=s.length;e<t;++e)s[e].dispose();if(this.options.positioning)for(let e=0,t=n.length;e<t;++e){const i=n[e].context;i.length=t,i.index=e}}refreshAllViews(e=!1){const t=this.items,n=this.childContext,i=this.template,r=this.location,o=this.bindView;let a=t.length,s=this.views,l=s.length;if(0!==a&&!e&&this.options.recycle||(Ze.b.disposeContiguousBatch(s),l=0),0===l){this.views=s=new Array(a);for(let e=0;e<a;++e){const a=i.create();o(a,t,e,n),s[e]=a,a.insertBefore(r)}}else{let e=0;for(;e<a;++e)if(e<l)o(s[e],t,e,n);else{const a=i.create();o(a,t,e,n),s.push(a),a.insertBefore(r)}const c=s.splice(e,l-e);for(e=0,a=c.length;e<a;++e)c[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,n=e.length;t<n;++t)e[t].unbind()}}class nt extends Ye.m0{constructor(e,t,n){super(),this.itemsBinding=e,this.templateBinding=t,this.options=n,this.createPlaceholder=d.SO.createBlockPlaceholder,function(){if(We)return;We=!0,o.y$.setArrayObserverFactory((e=>new Xe(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,n=e.push,i=e.reverse,r=e.shift,a=e.sort,s=e.splice,l=e.unshift;e.pop=function(){const e=this.length>0,n=t.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(He(this.length,[n],0)),n},e.push=function(){const e=n.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ke(He(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=i.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.shift=function(){const e=this.length>0,t=r.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(He(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=a.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.splice=function(){const e=s.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ke(He(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=l.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ke(He(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=o.y$.isVolatileBinding(e),this.isTemplateBindingVolatile=o.y$.isVolatileBinding(t)}function it(e,t,n=Je){return new nt(e,"function"==typeof t?t:()=>t,Object.assign(Object.assign({},Je),n))}_e.addHook("afterSanitizeAttributes",();const rt=T.d`
    <div class="flex">
        <div class="container">
            <div class="left-side-wrapper">
                <div class="left-side" part="left-side">
                    <div>
                        <span> ${(0,k.g)((e=>{var t,n,i,r;return(null===(n=null===(t=e.localization)||void 0===t?void 0:t.ImagePaths)||void 0===n?void 0:n.EmailDialogLeftBrandingImage)&&(null===(r=null===(i=e.localization)||void 0===i?void 0:i.ImagePaths)||void 0===r?void 0:r.EmailDialogLeftBrandingImage.length)>0}),T.d` <img class="brand-logo hide-small" alt="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogLeftBranding}}" :src=${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.ImagePaths.EmailDialogLeftBrandingImage}} /> `)} </span>
                        <div>
                            <h2 class="hide-small" :innerHTML=${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogLeftHeading)||"")}}></h2>
                        </div>
                        <fluent-divider></fluent-divider>
                    </div>
                    <div class="body-top" :innerHTML=${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogLeftSubheading)||"")}}></div>
                    ${(0,k.g)((e=>{var t,n;return(null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content.EmailDialogLeftBulletList)||void 0===n?void 0:n.length)>0}),T.d`
                            <div class="body-middle">
                                <ul>
                                    ${it((e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.EmailDialogLeftBulletList}),T.d` <li>${e=>e}</li> `)}
                                </ul>
                            </div>
                        `)}
                    <div class="body-bottom" :innerHTML=${e=>{var t;return _e.sanitize((null===(t=e.localization)||void 0===t?void 0:t.Content.EmailDialogLeftFooter)||"")}}></div>
                    ${(0,k.g)((e=>e.showDisclaimerFlag),T.d`
                        <div class="body-bottom" :innerHTML=${e=>{var t;return _e.sanitize((null===(t=e.localization)||void 0===t?void 0:t.Content.EmailDialogLeftDisclaimer)||"")}}></div>
                    `)} 
                </div>
            </div>
            <div class="right-side-wrapper">
                <div class="right-side" part="right-side">
                    <fluent-card ${(0,S.i)("fluentcard")}>
                        <div>
                            <div class="top-wrapper">
                                <div class="brand-logo-small-wrapper">
                                    ${(0,k.g)((e=>{var t,n,i,r,o;return(null===(n=null===(t=e.localization)||void 0===t?void 0:t.ImagePaths)||void 0===n?void 0:n.EmailDialogLeftBrandingImage)&&(null===(o=null===(r=null===(i=e.localization)||void 0===i?void 0:i.ImagePaths)||void 0===r?void 0:r.EmailDialogLeftBrandingImage)||void 0===o?void 0:o.length)>0}),T.d`
                                            <img class="brand-logo-small" alt="${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.EmailDialogLeftBranding}}" :src=${e=>e.localization.ImagePaths.EmailDialogLeftBrandingImage} />
                                            <span :innerHTML="${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogLeftBranding)||"")}}"></span>
                                        `)}
                                </div>
                                <h2 class="hide-large" :innerHTML=${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogLeftHeading)||"")}}></h2>
                            </div>
                            <h3>${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogRightHeading}}</h3>
                            <form @submit=${(e,t)=>e.submitForm(t.event)} id="start_trial">
                                <fluent-text-field id="trial-email" name="email" type="text" aria-required="true" class="${e=>void 0!==e.errorType?"error":""}" :value=${e=>e.email} @change=${(e,t)=>e.updateEmail(t.event)} @keyup=${(e,t)=>e.updateEmail(t.event)} @blur=${(e,t)=>e.handleEmailChange(t.event)} :innerHTML=${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogRightEmailField)||"")}}> </fluent-text-field>
                                ${(0,k.g)((,T.d`
                                        <p id="try-free-identifier-error" class="error ${e=>{var t,n,i;return null!==(n=null===(t=e.servererror)||void 0===t?void 0:t.toLocaleLowerCase())&&void 0!==n?n:null===(i=e.errorType)||void 0===i?void 0:i.toLocaleLowerCase()}}" tabindex="0">${</p>
                                        ${(0,k.g)((e=>e.setupLink.length>0),T.d`<p class="setup-link" id="${e=>e.hasSetupLinkEmail?"try-free-identifier-email-app-link":"try-free-identifier-app-link"}" :innerHTML=${e=>e.setupLink}></p> `)} ${(0,k.g)((e=>e.setupLinkNeptune.length>0),T.d` <p class="setup-link" data-bi-mto id="try-free-identifier-neptune-app-link" :innerHTML=${e=>e.setupLinkNeptune}></p> `)}
                                    `)}
                                <div class="consent-wrapper">
                                    <fluent-checkbox data-bi-mto id="trial-email-consent" name="consent" aria-label="${e=>{var t,n;return(null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogRightConsent_AriaLabel)||""}}" :checked=${e=>e.consent} @change=${(e,t)=>e.handleCheckboxChange(t.event)}></fluent-checkbox>
                                    <label for="consent" class="consent" :innerHTML=${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogRightConsent.Text)||"")}}></label>
                                </div>
                                <div class="submit-button-wrapper">
                                    <fluent-button name="submit" data-bi-mto type="submit" ?disabled=${e=>e.disableFormButtonState} aria-label="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogRightSubmitAriaLabel}}">${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.EmailDialogRightSubmit}}</fluent-button>
                                    <fluent-progress-ring ?hidden=${e=>!e.loading}></fluent-progress-ring>
                                </div>
                            </form>
                        </div>
                    </fluent-card>
                </div>
            </div>
        </div>
    </div>
`,ot="EmailDialogRightInvalidEmail",at="EmailDialogRightInvalidLogin";var st;!function(e){e.ltr="ltr",e.rtl="rtl"}(st||(st={}));const lt="UserTypeNotSupported",ct="GenericErrorMessage",ut="LoadingDialogCreateTrialLongerLoadErrorMessage",dt="GenericErrorMessage";var ft,ht;!ft||(ft={})),function(e){e.Viral="viral",e.Consumer="consumer",e.AAD="aad",e.AAD_Unknown="aad_unknown",e.MSA="msa"}(ht||(ht={}));const pt=["LicenseConflict","CreateEnvironmentAccessRestricted","TenantProvisioningScopeValidationForCloud","FailedToAssignTrialLicense","LicenseAssignmentApiNullResponseReceived","TrialLicenseAssignmentFailed","TrialScenarioNotSupportedForPartner","UserTypeNotSupported"];var gt;!gt||(gt={}));const vt=t=>(0,e.mG)(void 0,void 0,void 0,(function*(){return new Promise(()})),mt="checkbox",yt="steps",bt="beethoven-modal-action";(0,c.z)().register(V(),(0,j.hb)(),W(),ie(),Ee(),Oe(),Pe()),_e.setConfig({RETURN_TRUSTED_TYPE:!0});let wt=class extends t.H{constructor(){super(...arguments),this.email="",this.enableloadingstate=!1,this.consent=!1,this.loading=!1,this.loclang="en-us",this.correlationId="",this.disableFormButtonState=!0,this.resetstate=!1,this.enableSetupLink=!1,this.enableSetupLinkNeptune=!1,this.setupLink="",this.hasSetupLinkEmail=!1,this.setupLinkNeptune="",this.showDisclaimerFlag=!1,this.emailRegex=/.*\S+@\S.*/,this.enableSetupLinkEmailPlaceholder="",this.enableSetupLinkNeptunePlaceholder=""}resetstateChanged(e,t){var n,i;!0===t&&(this.errorType=void 0,this.consent=!1,this.setupLink="",this.email=null!==(i=null===(n=this.auth)||void 0===n?void 0:n.emailAddress)&&void 0!==i?i:"")}loadLocalization(){var t,n,i,r,o,a,s,l,c,u,d,f,h,p,g,v,m,y,b,w,C,x,T,k,S,I,E,L,$,D,A,O,N,P,_,F,M,R;return(0,e.mG)(this,void 0,void 0,(function*(){this.localization=yield this.trialLocalizationService.getEmailDialogLoc(),this.commonformerrorlocalization=yield this.trialLocalizationService.getCommonErrorLoc(),this.style.setProperty("--right-background-color",null===(n=null===(t=this.localization)||void 0===t?void 0:t.Theme)||void 0===n?void 0:n.EmailDialogRightBackgroundColor),this.style.setProperty("--brand-logo","url("+(null===(r=null===(i=this.localization)||void 0===i?void 0:i.ImagePaths)||void 0===r?void 0:r.EmailDialogRightBackgroundImage)+")"),this.style.setProperty("--brand-color",null===(a=null===(o=this.localization)||void 0===o?void 0:o.Theme)||void 0===a?void 0:a.EmailDialogBrandColor),this.style.setProperty("--brand-forecolor",null===(l=null===(s=this.localization)||void 0===s?void 0:s.Theme)||void 0===l?void 0:l.EmailDialogBrandForecolor),(null===(c=this.localization.Content)||void 0===c?void 0:c.EmailDialogRightConsent)&&(this.localization.Content.EmailDialogRightConsent.Text=this.textReplacement(null!==(u=this.localization.Content.EmailDialogRightConsent.Text)&&void 0!==u?u:"",null!==(h=null===(f=null===(d=this.localization.Content)||void 0===d?void 0:d.EmailDialogRightConsent)||void 0===f?void 0:f.Placeholders)&&void 0!==h?h:{})),this.enableSetupLink&&(this.localization.Content.TryFreeNewAccountSetup.Text=this.textReplacement(null!==(v=null===(g=null===(p=this.localization.Content)||void 0===p?void 0:p.TryFreeNewAccountSetup)||void 0===g?void 0:g.Text)&&void 0!==v?v:"",null!==(b=null===(y=null===(m=this.localization.Content)||void 0===m?void 0:m.TryFreeNewAccountSetup)||void 0===y?void 0:y.Placeholders)&&void 0!==b?b:{}),this.localization.Content.TryFreeNewAccountSetupWithEmail.Text=this.textReplacement(null!==(x=null===(C=null===(w=this.localization.Content)||void 0===w?void 0:w.TryFreeNewAccountSetupWithEmail)||void 0===C?void 0:C.Text)&&void 0!==x?x:"",null!==(S=null===(k=null===(T=this.localization.Content)||void 0===T?void 0:T.TryFreeNewAccountSetupWithEmail)||void 0===k?void 0:k.Placeholders)&&void 0!==S?S:{}),this.enableSetupLinkEmailPlaceholder=this.localization.Content.TryFreeNewAccountSetupWithEmail.Text),this.enableSetupLinkNeptune&&(this.localization.Content.NeptuneErrorNewAccountSetup.Text=this.textReplacement(null!==(L=null===(E=null===(I=this.localization.Content)||void 0===I?void 0:I.NeptuneErrorNewAccountSetup)||void 0===E?void 0:E.Text)&&void 0!==L?L:"",null!==(A=null===(D=null===($=this.localization.Content)||void 0===$?void 0:$.NeptuneErrorNewAccountSetup)||void 0===D?void 0:D.Placeholders)&&void 0!==A?A:{}),this.localization.Content.NeptuneErrorNewAccountSetupWithEmail.Text=this.textReplacement(null!==(P=null===(N=null===(O=this.localization.Content)||void 0===O?void 0:O.NeptuneErrorNewAccountSetupWithEmail)||void 0===N?void 0:N.Text)&&void 0!==P?P:"",null!==(M=null===(F=null===(_=this.localization.Content)||void 0===_?void 0:_.NeptuneErrorNewAccountSetupWithEmail)||void 0===F?void 0:F.Placeholders)&&void 0!==M?M:{}),this.enableSetupLinkNeptunePlaceholder=null!==(R=this.localization.Content.NeptuneErrorNewAccountSetupWithEmail.Text)&&void 0!==R?R:"")}))}textReplacement(e,t){let n=null!=e?e:"";for(const e in t)n=n.replace(`{{${e}}}`,`<a href="${t[e].Url}"\n                                        aria-label="${t[e].AriaLabel}"\n                                        id="${t[e].Slug}"\n                                        target="_blank">\n                                            ${t[e].Title}\n                                    </a>`);return n}enableloadingstateChanged(e,t){t?(this.consent=!0,this.loading=!0):(this.consent=!1,this.loading=!1)}servererrorChangedonnectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});var n;return(0,e.mG)(this,void 0,void 0,(function*(){t.connectedCallback.call(this),this.style.setProperty("--direction",(null===(n=null===document||void 0===document?void 0:document.querySelector("html"))||void 0===n?void 0:n.getAttribute("dir"))||"ltr"),"rtl"===this.dir?s.o7V.withDefault(st.rtl):s.o7V.withDefault(st.ltr),yield this.loadLocalization()}))}disconnectedCallback(){super.disconnectedCallback(),this.fluentcard.removeEventListener("click",this.validateForm.bind(this))}fluentcardChanged(e,t){!e&&t&&this.fluentcard.addEventListener("click",this.validateForm.bind(this))}validateForm(e){var t;this.errorType=void 0,this.email.length>0&&!this.emailRegex.test(this.email)&&(this.errorType=ot,this.servererror=void 0,this.setupLink="",this.setupLinkNeptune="",this.loading=!1,this.enableSetupLink&&(this.setupLink=null!==(t=this.localization.Content.TryFreeNewAccountSetup.Text)&&void 0!==t?t:"",this.hasSetupLinkEmail=!1)),this.buttonDisabledState()}andleSetUpLinkClick(t){return(0,e.mG)(this,void 0,void 0,(function*(){const e=t.target;if("A"===e.tagName){const t={behavior:0,actionType:"CL",targetUri:e.href},n={contentId:"sign-up-alternative-flow",contentName:yt,ecn:yt,scnstp:"AlternativeFlow"};return yield this.sendTracking(t,{},n),yield vt(1),void(window.location.href=e.href)}}))}handleCheckboxChange(e){const t=e.target;this.consent=Boolean(t.checked);const n={behavior:0,actionType:"CL"},i={contentId:t.id,contentName:mt,ecn:mt,scnstp:"Consent"};this.sendTracking(n,{},i),this.buttonDisabledState()}handleEmailChange(e){this.email=e.target.value,this.validateForm(e)}buttonDisabledState(){void 0!==this.errorType&&this.errorType.length>0?this.disableFormButtonState=!0:this.emailRegex.test(this.email)?this.disableFormButtonState=!this.consent||this.loading:this.disableFormButtonState=!0}submitForm(t){var n,i,r,o,a,s;return(0,e.mG)(this,void 0,void 0,(function*(){this.loading=!0;const e=t.currentTarget;if(this.errorType=void 0,this.servererror=void 0,this.email=this.email.trim(),!this.emailRegex.test(this.email))return this.errorType=ot,this.loading=!1,this.enableSetupLink&&(this.setupLink=null!==(n=this.localization.Content.TryFreeNewAccountSetup.Text)&&void 0!==n?n:"",this.setupLinkNeptune="",this.hasSetupLinkEmail=!1),this.buttonDisabledState(),!1;let l=yield this.trialServices.getEligibility(this.email);if(l&&l.userType){const t={scnstp:"EmailSubmit",contentid:e.id,contentName:null!==(r=null===(i=this.localization.Content)||void 0===i?void 0:i.EmailDialogRightSubmit)&&void 0!==r?r:"",ecn:"Start your free trial"};switch(l.userType.toLocaleLowerCase()){case ht.Viral:this.sendTracking({behavior:20},{error_code:"viraltenant"},t);break;case ht.Consumer:this.sendTracking({behavior:20},{error_code:"consumerdomain"},t);break;default:this.sendTracking({behavior:20},{error_code:"validaad"},t)}if(this.sendLogging(l),l.eligible)return void this.$emit("is-completed",{email:this.email,userDetails:l});if(l.error){switch(null===(o=l.error)||void 0===o?void 0:o.code){case"EmailInvalid":this.errorType=ot;break;case"TrialScenarioNotSupportedForPartner":case lt:this.servererror=at;break;default:this.servererror=null===(a=l.error)||void 0===a?void 0:a.code}const e=this.enableSetupLinkNeptune&&pt.includes(null===(s=l.error)||void 0===s?void 0:s.code);return e&&this.localization.Content.NeptuneErrorNewAccountSetupWithEmail.Text&&(this.setupLink="",this.setupLinkNeptune=this.enableSetupLinkNeptunePlaceholder.replace("{{emailaddress}}",this.email)),!e&&this.enableSetupLink&&l.userType.toLocaleLowerCase()!==ht.AAD.toLocaleLowerCase()&&l.userType.toLocaleLowerCase()!==ht.AAD_Unknown.toLocaleLowerCase()&&(this.setupLink=this.enableSetupLinkEmailPlaceholder.replace("{{emailaddress}}",this.email),this.setupLinkNeptune="",this.hasSetupLinkEmail=!0),void(this.loading=!1)}}this.sendLogging(l),this.loading=!1}))}getLocalizationErrorString(e,t=!1){var n,i,r,o;const a=null!==(i=" "+(null===(n=this.commonformerrorlocalization.ErrorCorrelationIdPlaceholder)||void 0===n?void 0:n.replace("{{correlationId}}",this.correlationId)))&&void 0!==i?i:"",s=[at,ot,"EmailDialogEnvironmentCreationInProgress"];let l="";return l=e&&this.commonformerrorlocalization[e]?null!==(r=this.commonformerrorlocalization[e])&&void 0!==r?r:"":this.commonformerrorlocalization[dt]?null!==(o=this.commonformerrorlocalization[dt])&&void 0!==o?o:"":"We are unable to sign up for the trial at this time. Please try again later.",t||!s.includes(null!=e?e:"")?l+a:(this.email&&(l=l.replace("{{emailaddress}}",this.email)),l)}sendLogging(e){var t,n;let i="";const r=null===(t=e.userType)||void 0===t?void 0:t.toLowerCase();switch(r){case"viral":i="User is from viral tenant";break;case"Consumer":i="User is from consumer domain";break;case"aad":case"aad_unknown":i="User is AAD user";break;default:i="Unknown user"}null===(n=this.logging)||void 0===n||n.trackTrace(gt.Information,i+"User Type: "+r)}sendTracking(e,t,n){var i;const r={pageTags:Object.assign({app_name:this.getAttribute("data-appname")||"",ProductInfo:{id:this.getAttribute("data-offer-id")||"",title:this.getAttribute("data-offer-name")||"",sku:""},action_time:(new Date).toUTCString(),correlation_id:this.correlationId,userInfo:this.auth},t)},o=Object.assign({sN:"0",compnm:this.getAttribute("data-areaname")||"",hn:this.getAttribute("data-appfullname")||"",ehn:this.getAttribute("data-appfullname")||"",trlid:this.getAttribute("data-offer-id")||"",trlnm:this.getAttribute("data-offer-name")||"",scn:this.getAttribute("data-scn")||""},n),a=Object.assign(Object.assign({},e),{properties:r,content:o});try{this.telemetry.trackEvent(a)}catch(e){null===(i=this.logging)||void 0===i||i.trackException(gt.Error,"JSLLTrackEvent failed",e)}}};(0,e.gn)([r.Lj],wt.prototype,"email",void 0),(0,e.gn)([o.LO],wt.prototype,"enableloadingstate",void 0),(0,e.gn)([o.LO],wt.prototype,"consent",void 0),(0,e.gn)([o.LO],wt.prototype,"errorType",void 0),(0,e.gn)([o.LO],wt.prototype,"loading",void 0),(0,e.gn)([o.LO],wt.prototype,"localization",void 0),(0,e.gn)([o.LO],wt.prototype,"loclang",void 0),(0,e.gn)([o.LO],wt.prototype,"commonformerrorlocalization",void 0),(0,e.gn)([o.LO],wt.prototype,"servererror",void 0),(0,e.gn)([o.LO],wt.prototype,"correlationId",void 0),(0,e.gn)([o.LO],wt.prototype,"disableFormButtonState",void 0),(0,e.gn)([o.LO],wt.prototype,"resetstate",void 0),(0,e.gn)([o.LO],wt.prototype,"enableSetupLink",void 0),(0,e.gn)([o.LO],wt.prototype,"enableSetupLinkNeptune",void 0),(0,e.gn)([o.LO],wt.prototype,"setupLink",void 0),(0,e.gn)([o.LO],wt.prototype,"hasSetupLinkEmail",void 0),(0,e.gn)([o.LO],wt.prototype,"setupLinkNeptune",void 0),(0,e.gn)([o.LO],wt.prototype,"auth",void 0),(0,e.gn)([o.LO],wt.prototype,"fluentcard",void 0),(0,e.gn)([o.LO],wt.prototype,"showDisclaimerFlag",void 0),(0,e.gn)([(0,a.f3)("TrialLocalizationService")],wt.prototype,"trialLocalizationService",void 0),(0,e.gn)([(0,a.f3)("TrialServices")],wt.prototype,"trialServices",void 0),(0,e.gn)([(0,a.f3)("AppInsightsLoggerService")],wt.prototype,"logging",void 0),(0,e.gn)([(0,a.f3)("OneDSTelemetry")],wt.prototype,"telemetry",void 0),wt=(0,e.gn)([(0,t.M)({name:"new-trial-email",template:rt,styles:ze,shadowOptions:{delegatesFocus:!0}})],wt);let Ct=0;ar Tt=n(1853);function kt(e){return(0,Tt.Re)(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class St extends C.I{constructor(e,t,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}et text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),o.y$.notify(this,"value")}get value(){var e;return o.y$.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}(0,u.gn)([o.LO],St.prototype,"checked",void 0),(0,u.gn)([o.LO],St.prototype,"content",void 0),(0,u.gn)([o.LO],St.prototype,"defaultSelected",void 0),(0,u.gn)([(0,r.Lj)({mode:"boolean"})],St.prototype,"disabled",void 0),(0,u.gn)([(0,r.Lj)({attribute:"selected",mode:"boolean"})],St.prototype,"selectedAttribute",void 0),(0,u.gn)([o.LO],St.prototype,"selected",void 0),(0,u.gn)([(0,r.Lj)({attribute:"value",mode:"fromView"})],St.prototype,"initialValue",void 0);class It{}(0,u.gn)([o.LO],It.prototype,"ariaChecked",void 0),(0,u.gn)([o.LO],It.prototype,"ariaPosInSet",void 0),(0,u.gn)([o.LO],It.prototype,"ariaSelected",void 0),(0,u.gn)([o.LO],It.prototype,"ariaSetSize",void 0),(0,ae.e)(It,re.v),(0,ae.e)(St,oe.hW,It);class Et extends C.I{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}et hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}et options(){return o.y$.track(this,"options"),this._options}et typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpiredlickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame(())}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(()}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,i=e+n;let r=null;switch(n){case-1:r=this.options.reduceRight(((e,t,n)=>!e&&!t.disabled&&n<i?t:e),r);break;case 1:r=this.options.reduce(((e,t,n)=>!e&&!t.disabled&&n>i?t:e),r)}return this.options.indexOf(r)}handleChange(e,t){"selected"===t&&(Et.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((,Et.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case f.tU:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case f.iF:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case f.SB:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case f.Kh:e.preventDefault(),this.selectLastOption();break;case f.oM:return this.focusAndScrollOptionIntoView(),!0;case f.kL:case f.CX:return!0;case f.BI:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof e){const n=this.getSelectableIndex(e,t),i=n>-1?n:e;return this.selectedIndex=i,void(t===i&&this.selectedIndexChanged(t,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var n;const i=t.filter(Et.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((e=>{const t=o.y$.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=i.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let n=e.length;for(;n--;)if(!e[n].disabled)return n;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,n;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(kt(t)&&e.push(t),e)),[]);const n=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=xt("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Et.slottedOptionFilter=Et.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,u.gn)([(0,r.Lj)({mode:"boolean"})],Et.prototype,"disabled",void 0),(0,u.gn)([o.LO],Et.prototype,"selectedIndex",void 0),(0,u.gn)([o.LO],Et.prototype,"selectedOptions",void 0),(0,u.gn)([o.LO],Et.prototype,"slottedOptions",void 0),(0,u.gn)([o.LO],Et.prototype,"typeaheadBuffer",void 0);class Lt{}function $t(e,t,n=0){return[t,n]=[t,n].sort((),t<=e&&e<n}(0,u.gn)([o.LO],Lt.prototype,"ariaActiveDescendant",void 0),(0,u.gn)([o.LO],Lt.prototype,"ariaDisabled",void 0),(0,u.gn)([o.LO],Lt.prototype,"ariaExpanded",void 0),(0,u.gn)([o.LO],Lt.prototype,"ariaMultiSelectable",void 0),(0,ae.e)(Lt,re.v),(0,ae.e)(Et,Lt);class Dt extends Et{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}et checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,i;this.ariaActiveDescendant=null!==(i=null===(n=this.options[t])||void 0===n?void 0:n.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=$t(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=$t(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}isconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=$t(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=$t(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}eydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case f.tU:return void this.checkFirstOption(n);case f.iF:return void this.checkNextOption(n);case f.SB:return void this.checkPreviousOption(n);case f.Kh:return void this.checkLastOption(n);case f.oM:return this.focusAndScrollOptionIntoView(),!0;case f.CX:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case f.BI:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,null===(n=this.options)||void 0===n||n.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var n;const i=Math.max(0,parseInt(null!==(n=null==t?void 0:t.toFixed())&&void 0!==n?n:"",10));i!==t&&d.SO.queueUpdate(()}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}(0,u.gn)([o.LO],Dt.prototype,"activeIndex",void 0),(0,u.gn)([(0,r.Lj)({mode:"boolean"})],Dt.prototype,"multiple",void 0),(0,u.gn)([(0,r.Lj)({converter:r.Id})],Dt.prototype,"size",void 0);lass Ot extends((0,se.Um)(At)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Nt="above";class Pt extends Ot{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=xt("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void d.SO.queueUpdate(();this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}et value(e){var t,n,i,r,a,s,l;const c=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((),o=null!==(i=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==i?i:null,c=null!==(a=null===(r=this._options[t])||void 0===r?void 0:r.value)&&void 0!==a?a:null;-1!==t&&o===c||(e="",this.selectedIndex=t),e=null!==(l=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==l?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),o.y$.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==n?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}tPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Nt:"below",this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Nt?~~e.top:~~t}get displayValue(){var e,t;return o.y$.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;this.isSameNode(n)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{o.y$.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{o.y$.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),null===(n=this.options)||void 0===n||n.forEach(((e,t)=>{var n;const i=null===(n=this.proxy)||void 0===n?void 0:n.options.item(t);i&&(i.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Et.slottedOptionFilter),n=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case f.BI:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case f.tU:case f.Kh:e.preventDefault();break;case f.kL:e.preventDefault(),this.open=!this.open;break;case f.CX:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case f.oM:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===f.iF||t===f.SB)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&o.y$.notify(this,"displayValue")}}(0,u.gn)([(0,r.Lj)({attribute:"open",mode:"boolean"})],Pt.prototype,"open",void 0),(0,u.gn)([o.lk],Pt.prototype,"collapsible",null),(0,u.gn)([o.LO],Pt.prototype,"control",void 0),(0,u.gn)([(0,r.Lj)({attribute:"position"})],Pt.prototype,"positionAttribute",void 0),(0,u.gn)([o.LO],Pt.prototype,"position",void 0),(0,u.gn)([o.LO],Pt.prototype,"maxHeight",void 0);class _t{}(0,u.gn)([o.LO],_t.prototype,"ariaControls",void 0),(0,ae.e)(_t,Lt),(0,ae.e)(Pt,oe.hW,_t);var Ft=n(1815);const Mt=".control",Rt=":not([disabled]):not([open])",Vt="[disabled]";class zt extends Pt{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&s.IfY.setValueFor(this.listbox,s.s55)}}(0,K.gn)([(0,r.Lj)({mode:"fromView"})],zt.prototype,"appearance",void 0);const Ut=zt.compose({baseName:"select",baseClass:Pt,template:(e,t)=>T.d`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${(0,k.g)((e=>e.collapsible),T.d`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${(0,S.i)("control")}
                >
                    ${(0,oe.m9)(e,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${(0,oe.LC)(e,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${"
            ${(0,S.i)("listbox")}
        >
            <slot
                ${(0,fe.Q)({filter:Et.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>I.i`
    ${(0,G.j)("inline-flex")}
    
    :host {
      border-radius: calc(${s.UWU} * 1px);
      box-sizing: border-box;
      color: ${s.CHi};
      fill: currentcolor;
      font-family: ${s.SVJ};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${F};
      background: ${s.IfY};
      border-radius: calc(${s.rSr} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${ve.i} * 1px));
      padding: calc((${s._5n} - ${s.Han} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${s.Han} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${s.Han} * 1px) solid transparent;
      border-radius: calc(${s.UWU} * 1px);
      height: calc(${ve.i} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${ge.cX}
      min-height: 100%;
      padding: 0 calc(${s._5n} * 2.25px);
      width: 100%;
    }

    :host(:${Ae.b}) {
      ${me.G}
    }

    :host([disabled]) .control {
      cursor: ${pe.H};
      opacity: ${s.VFZ};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${ve.i} + ${s._5n} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${ve.i} + ${s._5n} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `.withBehaviors((0,ke.H)("outline",(0,Ft.KJ)(e,t,Rt,Vt)),(0,ke.H)("filled",xe(0,0,Mt,Rt).withBehaviors((0,ee.vF)(Te(0,0,Mt,Rt)))),(0,ke.H)("stealth",(0,Ft.cg)(e,t,Rt,Vt)),(0,ee.vF)(I.i`
    :host([open]) .listbox {
      background: ${te.H.ButtonFace};
      border-color: ${te.H.CanvasText};
    }
  `)),indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),Ht=St.compose({baseName:"option",template:(e,t)=>T.d`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${(0,oe.m9)(e,t)}
        <span class="content" part="content">
            <slot ${(0,fe.Q)("content")}></slot>
        </span>
        ${(0,oe.LC)(e,t)}
    </template>
`,styles:(e,t)=>I.i`
    ${(0,G.j)("inline-flex")} :host {
      position: relative;
      ${ge.cX}
      background: ${s.jql};
      border-radius: calc(${s.UWU} * 1px);
      border: calc(${s.Han} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${s.CHi};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${ve.i} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${s._5n} * 3) - ${s.Han} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${s.vxp} - ${s.Han}) * 1px);
      top: calc((${ve.i} / 4) - ${s.vxp} * 1px);
      width: 3px;
      height: calc((${ve.i} / 2) * 1px);
      background: transparent;
      border-radius: calc(${s.UWU} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${s.QpD};
    }

    :host(:not([disabled]):active) {
      background: ${s.sG3};
    }

    :host(:not([disabled]):active)::before {
      background: ${s.Avx};
      height: calc(((${ve.i} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${s.Avx};
    }

    :host(:${Ae.b}) {
      ${me.G}
      background: ${s.s0z};
    }

    :host([aria-selected='true']) {
      background: ${s._jX};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${s.d$x};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${s._ii};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${s.QpD};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${s.sG3};
    }

    :host([disabled]) {
      cursor: ${pe.H};
      opacity: ${s.VFZ};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new Fe.O(null,I.i`
      :host::before {
        right: calc((${s.vxp} - ${s.Han}) * 1px);
      }
    `),(0,ee.vF)(I.i`
        :host {
          background: ${te.H.ButtonFace};
          border-color: ${te.H.ButtonFace};
          color: ${te.H.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${te.H.Highlight};
          color: ${te.H.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${te.H.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${te.H.Canvas};
          color: ${te.H.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Ae.b}) {
          outline-color: ${te.H.CanvasText};
        }
      `))}),Bt=T.d`
    ${(0,k.g)((,T.d`
        <div class="container">
            <div class="left-side" part="left-side">
                <div class="logo-wrapper">
                    <img class="logo" :src=${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.ImagePaths)||void 0===n?void 0:n.LeadsFormLeftBrandingImage}} :alt="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormLeftBrandingImage_AltText}}" />
                    <span>${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormLeftBranding}}</span>
                </div>
                <h2>${e=>{var t,n,i,r,o;return null===(i=null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.Greeting)||void 0===i?void 0:i.replaceAll("{{firstname}}",(null===(r=e.auth)||void 0===r?void 0:r.firstName)?` ${null===(o=e.auth)||void 0===o?void 0:o.firstName}`:"")}}</h2>
                <p>${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormLeftHeading}}</p>
                <form @submit=${(e,t)=>e.submitForm(t.event)} novalidate ${(0,S.i)("form")} id="submit-leads-form">
                    ${(0,k.g)((e=>{var t,n;return!(null===(t=e.auth)||void 0===t?void 0:t.firstName)||0===(null===(n=e.auth)||void 0===n?void 0:n.firstName.length)}),T.d`
                        <div>
                            <fluent-text-field id="firstname" name="firstName" placeholder=${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormFirstNamePlaceholder}} ${(0,S.i)("firstnameelement")} @change=${(e,t)=>e.handleChange(t.event)} type="text" required :innerHTML=${e=>{var t,n;return _e.sanitize(e.addRequiredAsterisk((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormFirstNameLabel)||"First Name"))}}></fluent-text-field>
                            <span for="firstName" class="error hidden"></span>
                        </div>
                    `)}
                    ${(0,k.g)((e=>{var t,n;return!(null===(t=e.auth)||void 0===t?void 0:t.lastName)||0===(null===(n=e.auth)||void 0===n?void 0:n.lastName.length)}),T.d`
                        <div>
                            <fluent-text-field id="lastname" name="lastName" placeholder=${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormLastNamePlaceholder}} ${(0,S.i)("lastnameelement")} @change=${(e,t)=>e.handleChange(t.event)} type="text" required :innerHTML=${e=>{var t,n;return _e.sanitize(e.addRequiredAsterisk((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormLastNameLabel)||"Last Name"))}}></fluent-text-field>
                            <span for="lastName" class="error hidden"></span>
                        </div>
                    `)}
                    <div>
                        <label class="label" for="countries" :innerHTML=${e=>{var t,n;return _e.sanitize(e.addRequiredAsterisk(null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormCountryLabel)||"")}}></label>
                        <fluent-select id="countries" name="countries" ${(0,S.i)("country")} aria-label="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormCountryDropdownAriaLabel}}"  @change=${(e,t)=>e.countriesOnChange(t.event)}>
                            ${it((e=>e.countries),T.d`
                                    <fluent-option value="${e=>e.slug}">${e=>e.locValue}</fluent-option>
                                `)}
                        </fluent-select>
                    </div>
                    <div>
                        <fluent-text-field id="phoneNumber" name="phoneNumber" type="text" placeholder=${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormPhonePlaceholder}} @change=${ required :innerHTML=${e=>{var t,n;return _e.sanitize(e.addRequiredAsterisk(null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LeadsFormPhoneNumberLabel)||"")}} ></fluent-text-field>            
                        <span for="phoneNumber" class="error hidden"></span>
                    </div>
                    ${(0,k.g)((,T.d`
                        ${it((e=>e.consent),T.d`
                                <div class="consent-wrapper">
                                    ${(0,k.g)((,T.d`
                                        <fluent-checkbox id="${e=>e.consentLocKey.toLocaleLowerCase()}" aria-label="${e=>e.consentLocKey}" name="${e=>e.consentLocKey.toLocaleLowerCase()}" :checked=${e=>e.checkboxDefaultCheck}  ?required=${e=>"mandatory_consent_optin_kr"===e.consentLocKey.toLocaleLowerCase()}></fluent-checkbox>
                                        <label for="${e=>e.consentLocKey.toLocaleLowerCase()}" class="consent" :innerHTML=${e=>_e.sanitize(e.consentLocValue)}></label>
                                        ${(0,k.g)((,T.d`
                                            <span for="mandatory_consent_optin_kr" class="error hidden"></span>
                                        `)}
                                        <div style="clear:both"></div>
                                    `)}
                                    ${(0,k.g)((,T.d`
                                        <p class="consent" :innerHTML=${></p>
                                        <input type="hidden" name="${" value="${e=>e.checkboxDefaultCheck}" />
                                    `)}
                                </div>
                            `)}
                    `)}
                    ${(0,k.g)((e=>0===e.consent.length),T.d`
                        <div class="progress-wrapper">
                            <fluent-progress-ring></fluent-progress-ring>
                        </div>
                    `)}
                    <fluent-button name="submit" type="submit" ?disabled=${>${</fluent-button>
                </form>
            </div>
            <div class="right-side hide-small ${e=>{var t,n,i,r,o;return(null===(n=null===(t=e.localization)||void 0===t?void 0:t.ImagePaths)||void 0===n?void 0:n.LeadsFormRightBackgroundImage)&&(null===(o=null===(r=null===(i=e.localization)||void 0===i?void 0:i.ImagePaths)||void 0===r?void 0:r.LeadsFormRightBackgroundImage)||void 0===o?void 0:o.length)>0?"bg-bottom-aligned":""}}" part="right-side"></div>
        </div>
    `)}
`,jt=I.i``,qt=I.i`
    fluent-checkbox {
        float: right;
        margin-left: 6px;
        margin-right: 0;
    }
`,Gt=I.i`
        :host {
            /* FAST variables */
            --neutral-fill-hover: var(--brand-color);
            --neutral-fill-active: var(--brand-color);
            --accent-fill-rest: var(--brand-color);
            --accent-fill-hover: var(--brand-color);
            --accent-fill-active: var(--brand-color);
            --accent-foreground-rest: var(--brand-color);

            --right-background-color: ${Me.jr.colorWhite};
            --brand-logo: '';
            --brand-color: '';
            --brand-forecolor: ${Me.jr.colorWhite};
            --foreground-on-accent-active: ${Me.jr.colorWhite};
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            
        }

        /* Fluent Components */
        fluent-checkbox {
            float: left;
            margin-right: 6px;
            margin-left: 0;
            margin-bottom: 0;
            --stroke-width: 1;
            --base-height-multiplier: 5;
            --neutral-stroke-rest: ${Me.jr.colorDarkGrey};
            --accent-fill-rest: ${Me.jr.colorWhite};
            --neutral-fill-hover: var(--brand-color);
            --neutral-fill-active: var(--brand-color);
            --accent-fill-rest: var(--brand-color);
            --accent-fill-hover: var(--brand-color);
            --accent-fill-active: var(--brand-color);
            --accent-foreground-rest: var(--brand-color);
        }

        fluent-checkbox.error {
            --neutral-stroke-rest: ${Me.jr.errorColor};
        }

        fluent-text-field {
            width: ${Me.C7.oneHundredPercent};
            --stroke-width: 1;
            --accent-fill-rest: ${Me.jr.colorDarkGrey};
            --accent-fill-hover:  ${Me.jr.colorDarkGrey};
            --focus-stroke-width: 1;
            --focus-stroke-outer: ${Me.jr.colorDarkGrey};
            --neutral-stroke-input-rest: ${Me.jr.colorDarkGrey};
            --neutral-stroke-input-hover: ${Me.jr.colorDarkGrey};
            --neutral-stroke-input-active: ${Me.jr.colorDarkGrey};
            --neutral-stroke-input-focus: ${Me.jr.colorDarkGrey};
        }

        fluent-text-field::part(label) {
            font-weight: ${Me.p9.fontWeight6};
            display: ${Me.uH.displayUnset};
        }

        fluent-text-field::part(root) {
            height: 2.6rem;
        }

        fluent-text-field.error {
            --accent-fill-rest: ${Me.jr.errorColor};
            --focus-stroke-outer: ${Me.jr.errorColor};
            --neutral-stroke-input-rest: ${Me.jr.errorColor};
            --neutral-stroke-input-hover: ${Me.jr.errorColor};
            --neutral-stroke-input-active: ${Me.jr.errorColor};
            --neutral-stroke-input-focus: ${Me.jr.errorColor};     
        }

        fluent-text-field:focus {
            --stroke-width: 2;
            --focus-stroke-outer: var(--brand-color);
            --neutral-stroke-input-rest: var(--brand-color);
            --neutral-stroke-input-hover: var(--brand-color);
            --neutral-stroke-input-active: var(--brand-color);
            --neutral-stroke-input-focus: var(--brand-color);
        }

        fluent-select {
            width: ${Me.C7.oneHundredPercent};
            height: 2.6rem;
            --accent-fill-rest: ${Me.jr.colorDarkGrey};
            --accent-fill-hover:  ${Me.jr.colorDarkGrey};
            --stroke-width: 1;
            --focus-stroke-width: 0;
            --focus-stroke-outer: ${Me.jr.colorDarkGrey};
            --neutral-stroke-control-rest: ${Me.jr.colorDarkGrey};
            --neutral-stroke-control-hover: ${Me.jr.colorDarkGrey};
            --neutral-stroke-control-active: ${Me.jr.colorDarkGrey};
            --neutral-stroke-control-focus: ${Me.jr.colorDarkGrey};
        }

        fluent-select::part(listbox) {
            height: 10rem;
        }

        fluent-select:focus {
            --stroke-width: 2;
            --focus-stroke-outer: var(--brand-color);
            --neutral-stroke-control-rest: var(--brand-color);
            --neutral-stroke-control-hover: var(--brand-color);
            --neutral-stroke-control-active: var(--brand-color);
            --neutral-stroke-control-focus: var(--brand-color);
        }

        fluent-option {
            --accent-fill-rest: var(--brand-color);
            --accent-fill-focus: var(--brand-color);
            --accent-fill-hover: var(--brand-color);
        }

        fluent-button {
            margin-top: 30px;
            height: 3rem;
            font-size: ${Me.p9.baseFontSize};
            --neutral-foreground-rest: var(--brand-forecolor);
            --neutral-fill-rest: var(--brand-color);
            --neutral-fill-active: var(--brand-color);
            --neutral-fill-hover: var(--brand-color);
            --accent-fill-rest: var(--brand-color);
            --accent-fill-active: var(--brand-color);
        }

        fluent-button:focus{            
            outline: 1px dashed ${Me.jr.buttonBorderColorBlack};
            outline-offset: 1px;
        }

        fluent-button::part(control) {
            padding: 0px 20px;
        }

        /* Other Styles */
        .container {
            display: ${Me.uH.displayFlex};
            justify-content: space-between;
            flex-direction: column-reverse;
            line-height: ${Me.C7.lineHeight15};
            width: ${Me.C7.oneHundredPercent};
            height: ${Me.C7.oneHundredPercent};
        }

        .container :where(.left-side-wrapper, .right-side-wrapper) {
            flex: 1 1 50%;
            padding: 60px;
        }

        .asterisk {
            color: ${Me.jr.errorColor};
        }

        .container .left-side {
            padding: 20px 0 70px 0;
        }

        .left-side > .logo-wrapper, .left-side > h2, .left-side > p, .left-side > form {
           padding: 0 20px;
        }

        .right-side {
            background: bottom -100px right -110px no-repeat var(--right-background-color);
            background-size: ${Me.C7.oneHundredPercent};
            display: ${Me.uH.displayFlex};
            justify-content: center;
        }
    
        .right-side .button-wrapper fluent-button {
            font-size: 30px;
            border: 0;
            background: none;
            color:  ${Me.jr.colorWhite};
        }
    
        .right-side img {
            width: 100%;
            vertical-align: middle;
        }

        .container > div {
            flex-basis: ${Me.C7.oneHundredPercent};
        }

        .consent-wrapper {
            margin: 5px 0 0 0;
        }

        .consent {
            display: ${Me.uH.displayBlock};
            font-size: ${Me.p9.fontSizeSmall};
        }
        
        .consent a {
            color: ${Me.jr.colorBlack};
        }
        
        .hide-small {
            display: ${Me.uH.displayNone};
        }

        span.error {
            margin-top: 0;
            font-size: 12px;
            font-weight: 600;
            display: ${Me.uH.displayBlock};
            color: ${Me.jr.errorColor};
        }

        .label {
            font-size: 14px;
            font-weight: ${Me.p9.fontWeight6};
            color: #2b2b2b;
        }

        label.consent {
            cursor: pointer;
        }

        h2 {
            margin-bottom: 0;
        }

        p {
            margin-top: 4px;
            font-size: 14px;
        }

        .progress-wrapper {
            display: ${Me.uH.displayFlex};
            alight-items: center;
            height: 100px;
        }

        .container.loading {
            height: 400px;
            align-items: center;
            justify-content: space-around;
        }

        .logo-wrapper {
            display: ${Me.uH.displayFlex};
            align-items: center;
            font-size: 14px;
            line-height: 20px;
            padding-top: 15px;
            color: ${Me.jr.colorWenge};
        }

        .logo {
            height: ${Me.C7.spacingSize2};
            width: ${Me.C7.spacingSize2};
            display: ${Me.uH.displayInlineBlock};
        }

        .logo-wrapper > span {
            margin-left: 5px;
            margin-right: 5px;
        }

        form > div {
            margin-top: 20px;
            padding-bottom: 5px
        }

        form > div:first-of-type {
            margin-top: 25px;
        }

        .hidden { 
            visibility: hidden;
        }
  
        @media only screen and (min-width: 960px) {
            .container {
                flex-direction: row;
                font-size: ${Me.p9.fontSizeMedium};
            }
    
            .right-side {
                background-image: var(--right-background-image);
                background-color: var(--right-background-color);
            }

            .bg-bottom-aligned {
                background-position: bottom;
            }
            
             .container :where(.left-side, .right-side) {
                display: ${Me.uH.displayFlex};
                flex-direction: column;
                justify-content: flex-start
                align-items: flex-start;              
                flex-grow: 1;
                flex-basis: 50%;
                width: 100%;
            }
            
            .hide-small {
                display: ${Me.uH.displayUnset};
            }
        
            .hide-large {
                display: ${Me.uH.displayNone};
            }
    
            .container .left-side {
                padding: unset 60px 120px;
            }

            .left-side > .logo-wrapper, .left-side > h2, .left-side > p, .left-side > form {
                padding: 0 40px;
            }
        }
    `.withBehaviors(new Fe.O(jt,qt)),Wt={trialSignupBaseAPI:`${z.w.TrialServiceUrl}/api/v1/`,countriesURL:"country",privacyConsent:"privacyconsent",leadSubmission:"Lead"};var Kt=n(9141),Xt=n(7421),Yt=n(1550),Zt=n(175),Jt="initialize",Qt="name",en="getNotifyMgr",tn="identifier",nn="push",rn="isInitialized",on="config",an="instrumentationKey",sn="logger",ln="length",cn="time",un="processNext",dn="getProcessTelContext",fn="addNotificationListener",hn="removeNotificationListener",pn="stopPollingInternalLogs",gn="onComplete",vn="getPlugin",mn="flush",yn="_extensions",bn="splice",wn="teardown",Cn="messageId",xn="message",Tn="isAsync",kn="_doTeardown",Sn="update",In="getNext",En="diagLog",Ln="setNextPlugin",$n="createNew",Dn="cookieCfg",An="indexOf",On="substring",Nn="userAgent",Pn="split",_n="setEnabled",Fn="substr",Mn="nodeType",Rn="apply",Vn="replace",zn="enableDebugExceptions",Un="logInternalMessage",Hn="toLowerCase",Bn="call",jn="type",qn="handler",Gn="listeners",Wn="isChildEvt",Kn="getCtx",Xn="setCtx",Yn="complete",Zn="traceId",Jn="spanId",Qn="traceFlags",ei="version",ti="",ni="channels",ii="core",ri="createPerfMgr",oi="disabled",ai="extensionConfig",si="processTelemetry",li="priority",ci="eventsSent",ui="eventsDiscarded",di="eventsSendRequest",fi="perfEvent",hi="errorToConsole",pi="warnToConsole",gi="getPerfMgr",vi="toISOString",mi="endsWith",yi="indexOf",bi="reduce",wi="trim",Ci="toString",xi="constructor",Ti=Yt.RJ,ki=Yt.Pw.freeze,Si=(Yt.Pw.seal,Yt.Pw.keys),Ii=String[Yt.hB],Ei=Ii[wi],Li=Ii[mi],$i=(Ii.startsWith,Date[Yt.hB][vi]),Di=Array.isArray,Ai=Yt.V4[Ci],Oi=Yt.CY[Ci],Ni=Oi[Bn](Yt.Pw),Pi=/-([a-z])/g,_i=/([^\w\d_$])/g,Fi=/^(\d+[\w\d_$])/,Mi=Object.getPrototypeOf;function Ri(e){if(e){if(Mi)return Mi(e);var t=e.__proto__||e[Yt.hB]||e[xi];if(t)return t}return null}function Vi(e){return void 0===e||typeof e===Yt.jA}function zi(e){return null===e||Vi(e)}function Ui(e){return!zi(e)}function Hi(e,t){return!(!e||!Yt.CY[Bn](e,t))}function Bi(e){return!(!e||typeof e!==Yt.fK)}function ji(e){return!(!e||typeof e!==Yt.cb)}function qi(e){var t=e;return t&&Yi(t)&&(t=(t=(t=t[Vn](Pi,(function(e,t){return t.toUpperCase()})))[Vn](_i,"_"))[Vn](Fi,(function(e,t){return"_"+t}))),t}function Gi(e,t){if(e)for(var n in e)Yt.CY[Bn](e,n)&&t[Bn](e,n,e[n])}function Wi(e,t){return!(!e||!t)&&-1!==e[An](t)}var Ki=Di||function(e){return!(!e||"[object Array]"!==Ai[Bn](e))};function Xi(e){return!(!e||"[object Error]"!==Ai[Bn](e))}function Yi(e){return"string"==typeof e}function Zi(e){return"number"==typeof e}function Ji(e){return"boolean"==typeof e}function Qi(e){var t=!1;if(e&&"object"==typeof e){var n=Mi?Mi(e):Ri(e);n?(n[xi]&&Yt.CY[Bn](n,xi)&&(n=n[xi]),t=typeof n===Yt.cb&&Oi[Bn](n)===Ni):t=!0}return t}function er(e){if(e)return $i?e[vi]():function(e){if(e&&e.getUTCFullYear){var t=function(e){var t=String(e);return 1===t[ln]&&(t="0"+t),t};return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"."+String((e.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(e)}function tr(e,t,n){var i=e[ln];try{for(var r=0;r<i&&(!(r in e)||-1!==t[Bn](n||e,e[r],r,e));r++);}catch(e){}}function nr(e,t,n){if(e){if(e[yi])return e[yi](t,n);var i=e[ln],r=n||0;try{for(var o=Math.max(r>=0?r:i-Math.abs(r),0);o<i;o++)if(o in e&&e[o]===t)return o}catch(e){}}return-1}function ir(e,t,n){var i;if(e){if(e.map)return e.map(t,n);var r=e[ln],o=n||e;i=new Array(r);try{for(var a=0;a<r;a++)a in e&&(i[a]=t[Bn](o,e[a],e))}catch(e){}}return i}unction or(e){return e&&(e=Ei&&e[wi]?e[wi]():e[Vn]?e[Vn](/^\s+|(?=\s)\s+$/g,ti):e),e}var ar=!{toString:null}.propertyIsEnumerable("toString"),sr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function lr(e){var t=typeof e;if(t===Yt.cb||t===Yt.fK&&null!==e||(0,Zt.ZU)("objKeys called on non-object"),!ar&&Si)return Si(e);var n=[];for(var i in e)e&&Yt.CY[Bn](e,i)&&n[nn](i);if(ar)for(var r=sr[ln],o=0;o<r;o++)e&&Yt.CY[Bn](e,sr[o])&&n[nn](sr[o]);return n}function cr(e,t,n,i){if(Ti)try{var r={enumerable:!0,configurable:!0};return n&&(r.get=n),i&&(r.set=i),Ti(e,t,r),!0}catch(e){}return!1}function ur(e){return ki&&Gi(e,(function(e,t){(Ki(t)||Bi(t))&&ki(t)})),dr(e)}var dr=ki||function(e){return e};function fr(){var e=Date;return e.now?e.now():(new e).getTime()}function hr(e){return Xi(e)?e[Qt]:ti}function pr(e,t,n,i,r){var o=n;return e&&((o=e[t])===n||r&&!r(o)||i&&!i(n)||(o=n,e[t]=o)),o}unction vr(e,t){return zi(e)?t:e}function mr(e){return!!e}function yr(e){throw new Error(e)}tion Tr(e,t,n,i,r,o){var a=arguments,s=a[0]||{},l=a[ln],c=!1,u=1;for(l>0&&Ji(s)&&(c=s,s=a[u]||{},u++),Bi(s)||(s={});u<l;u++){var d=a[u],f=Ki(d),h=Bi(d);for(var p in d){var g=f&&p in d||h&&Yt.CY[Bn](d,p);if(g){var v=d[p],m=void 0;if(c&&v&&((m=Ki(v))||Qi(v))){var y=s[p];m?Ki(y)||(y=[]):Qi(y)||(y={}),v=Tr(c,y,v)}void 0!==v&&(s[p]=v)}}}return s}var kr="split",Sr="length",Ir="toLowerCase",Er="ingestionendpoint",Lr="toString",$r="removeItem",Dr="name",Ar="message",Or="stringify",Nr="pathname",Pr="correlationHeaderExcludePatterns",_r="indexOf",Fr="exceptions",Mr="parsedStack",Rr="properties",Vr="measurements",zr="sizeInBytes",Ur="typeName",Hr="severityLevel",Br="problemGroup",jr="isManual",qr="CreateFromInterface",Gr="assembly",Wr="hasFullStack",Kr="level",Xr="method",Yr="fileName",Zr="line",Jr="duration",Qr="receivedResponse",eo="substring";function to(e,t){return void 0===t&&(t=!1),null==e?t:"true"===e.toString()[Ir]()}function no(e){(isNaN(e)||e<0)&&(e=0);var t=""+(e=Math.round(e))%1e3,n=""+Math.floor(e/1e3)%60,i=""+Math.floor(e/6e4)%60,r=""+Math.floor(e/36e5)%24,o=Math.floor(e/864e5);return t=1===t[Sr]?"00"+t:2===t[Sr]?"0"+t:t,n=n[Sr]<2?"0"+n:n,i=i[Sr]<2?"0"+i:i,(o>0?o+".":"")+(r=r[Sr]<2?"0"+r:r)+":"+i+":"+n+"."+t}var io="window",ro="JSON",oo="msie",ao="trident/",so="XMLHttpRequest",lo=null,co=null,uo=null,fo=null;unction po(e){var t=(0,Zt.Rd)();return t&&t[e]?t[e]:e===io&&go()?window:null}function go(){return Boolean(typeof window===Yt.fK&&window)}function vo(){return go()?window:po(io)}function mo(){return Boolean(typeof document===Yt.fK&&document)}function yo(){return mo()?document:po("document")}function bo(){return Boolean(typeof navigator===Yt.fK&&navigator)}unction Co(){return Boolean(typeof history===Yt.fK&&history)}function xo(e){return typeof location===Yt.fK&&location?location:po("location")}function To(){return po("performance")}function ko(){return Boolean(typeof JSON===Yt.fK&&JSON||null!==po(ro))}function So(){return ko()?JSON||po(ro):null}nction Lo(e){var t=Object[Yt.hB].toString[Bn](e),n=ti;return"[object Error]"===t?n="{ stack: '"+e.stack+"', message: '"+e.message+"', name: '"+e[Qt]+"'":ko()&&(n=So().stringify(e)),t+n}No,Po=["eventsSent","eventsDiscarded","eventsSendRequest","perfEvent"],_o=null;ction Vo(e){return e?'"'+e[Vn](/\"/g,ti)+'"':ti}function zo(e,t){var n=typeof console!==Yt.jA?console:po("console");if(n){var i="log";n[e]&&(i=e),ji(n[i])&&n[i](t)}}var Uo=function(){function e(e,t,n,i){void 0===n&&(n=!1);var r=this;r[Cn]=e,r[xn]=(n?"AI: ":"AI (Internal): ")+e;var o=ti;ko()&&(o=So().stringify(i));var a=(t?" message:"+Vo(t):ti)+(i?" props:"+Vo(o):ti);r[xn]+=a}return e.dataType="MessageData",e}();function Ho(e,t){return(e||{})[sn]||new Bo(t)}var Bo=function(){function e(t){this.identifier="DiagnosticLogger",this.queue=[];var n,i,r,o,a=0,s={};(0,Kt.Z)(e,this,()}return e.__ieDyn=1,e}();function jo(e){return e||new Bo}function qo(e,t,n,i,r,o){void 0===o&&(o=!1),jo(e).throwInternal(t,n,i,r,o)}function Go(e,t){jo(e)[pi](t)}function Wo(e){var t={};return Gi(e,(function(e,n){t[e]=n,t[n]=e})),ur(t)}var Ko=Wo({LocalStorage:0,SessionStorage:1}),Xo=void Wo({AI:0,AI_AND_W3C:1,W3C:2}),Yo=void 0;function Zo(){return ea()?Jo(Ko.LocalStorage):null}function Jo(e){try{if(zi((0,Zt.Rd)()))return null;var t=(new Date)[Lr](),n=po(e===Ko.LocalStorage?"localStorage":"sessionStorage");n.setItem(t,t);var i=n.getItem(t)!==t;if(n[$r](t),!i)return n}catch(e){}return null}function Qo(){return ta()?Jo(Ko.SessionStorage):null}function ea(e){return(e||void 0===Xo)&&(Xo=!!Jo(Ko.LocalStorage)),Xo}function ta(e){return(e||void 0===Yo)&&(Yo=!!Jo(Ko.SessionStorage)),Yo}function na(e,t){var n=Qo();if(null!==n)try{return n.getItem(t)}catch(t){Yo=!1,qo(e,2,2,"Browser failed read of session storage. "+hr(t),{exception:Lo(t)})}return null}ar ra,oa="AppInsightsPropertiesPlugin",aa="AppInsightsChannelPlugin",sa="Microsoft_ApplicationInsights_BypassAjaxInstrumentation",la="sampleRate",ca="ProcessLegacy",ua="http.method",da="https://dc.services.visualstudio.com",fa="/v2/track",ha="not_specified",pa="iKey";function ga(e,t,n){var i=t[Sr],r=va(e,t);if(r[Sr]!==i){for(var o=0,a=r;void 0!==n[a];)o++,a=r[eo](0,147)+Sa(o);r=a}return r}function va(e,t){var n;return t&&(t=or(t[Lr]()))[Sr]>150&&(n=t[eo](0,150),qo(e,2,57,"name is too long.  It has been truncated to 150 characters.",{name:t},!0)),n||t}function ma(e,t,n){var i;return void 0===n&&(n=1024),t&&(n=n||1024,(t=or(t)).toString()[Sr]>n&&(i=t[Lr]()[eo](0,n),qo(e,2,61,"string value is too long. It has been truncated to "+n+" characters.",{value:t},!0))),i||t}function ya(e,t){return ka(e,t,2048,66)}function ba(e,t){var n;return t&&t[Sr]>32768&&(n=t[eo](0,32768),qo(e,2,56,"message is too long, it has been truncated to 32768 characters.",{message:t},!0)),n||t}function wa(e,t){var n;if(t){var i=""+t;i[Sr]>32768&&(n=i[eo](0,32768),qo(e,2,52,"exception is too long, it has been truncated to 32768 characters.",{exception:t},!0))}return n||t}function Ca(e,t){if(t){var n={};Gi(t,(function(t,i){if(Bi(i)&&ko())try{i=So()[Or](i)}catch(t){qo(e,2,49,"custom property is not valid",{exception:t},!0)}i=ma(e,i,8192),t=ga(e,t,n),n[t]=i})),t=n}return t}function xa(e,t){if(t){var n={};Gi(t,(function(t,i){t=ga(e,t,n),n[t]=i})),t=n}return t}function Ta(e,t){return t?ka(e,t,128,69)[Lr]():t}function ka(e,t,n,i){var r;return t&&(t=or(t))[Sr]>n&&(r=t[eo](0,n),qo(e,2,i,"input is too long, it has been truncated to "+n+" characters.",{data:t},!0)),r||t}function Sa(e){var t="00"+e;return t.substr(t[Sr]-3)}function Ia(e,t,n,i,r,o){var a;n=ma(i,n)||ha,(zi(e)||zi(t)||zi(n))&&yr("Input doesn't contain all required fields");var s="";e[pa]&&(s=e[pa],delete e[pa]);var l=((a={})[Dr]=n,a.time=er(new Date),a.iKey=s,a.ext=o||{},a.tags=[],a.data={},a.baseType=t,a.baseData=e,a);return zi(r)||Gi(r,(function(e,t){l.data[e]=t})),l}(ra={MAX_NAME_LENGTH:150,MAX_ID_LENGTH:128,MAX_PROPERTY_LENGTH:8192,MAX_STRING_LENGTH:1024,MAX_URL_LENGTH:2048,MAX_MESSAGE_LENGTH:32768,MAX_EXCEPTION_LENGTH:32768}).sanitizeKeyAndAddUniqueness=ga,ra.sanitizeKey=va,ra.sanitizeString=ma,ra.sanitizeUrl=ya,ra.sanitizeMessage=ba,ra.sanitizeException=wa,ra.sanitizeProperties=Ca,ra.sanitizeMeasurements=xa,ra.sanitizeId=Ta,ra.sanitizeInput=ka,ra.padNumber=Sa,ra.trim=or;var Ea=function(){function e(e,t,n,i){this.aiDataContract={ver:1,name:1,properties:0,measurements:0};var r=this;r.ver=2,r[Dr]=ma(e,t)||ha,r[Rr]=Ca(e,n),r[Vr]=xa(e,i)}return e.envelopeType="Microsoft.ApplicationInsights.{0}.Event",e.dataType="EventData",e}(),La=function(){function e(e,t,n,i,r){this.aiDataContract={ver:1,message:1,severityLevel:0,properties:0};var o=this;o.ver=2,t=t||ha,o[Ar]=ba(e,t),o[Rr]=Ca(e,i),o[Vr]=xa(e,r),n&&(o[Hr]=n)}return e.envelopeType="Microsoft.ApplicationInsights.{0}.Message",e.dataType="MessageData",e}(),$a=function(){this.aiDataContract={name:1,kind:0,value:1,count:0,min:0,max:0,stdDev:0},this.kind=0},Da=function(){function e(e,t,n,i,r,o,a,s,l){this.aiDataContract={ver:1,metrics:1,properties:0};var c=this;c.ver=2;var u=new $a;u.count=i>0?i:void 0,u.max=isNaN(o)||null===o?void 0:o,u.min=isNaN(r)||null===r?void 0:r,u[Dr]=ma(e,t)||ha,u.value=n,u.stdDev=isNaN(a)||null===a?void 0:a,c.metrics=[u],c[Rr]=Ca(e,s),c[Vr]=xa(e,l)}return e.envelopeType="Microsoft.ApplicationInsights.{0}.Metric",e.dataType="MetricData",e}(),Aa=function(){function e(e,t,n,i,r,o,a){this.aiDataContract={ver:1,name:0,url:0,duration:0,properties:0,measurements:0,id:0};var s=this;s.ver=2,s.id=Ta(e,a),s.url=ya(e,n),s[Dr]=ma(e,t)||ha,isNaN(i)||(s[Jr]=no(i)),s[Rr]=Ca(e,r),s[Vr]=xa(e,o)}return e.envelopeType="Microsoft.ApplicationInsights.{0}.Pageview",e.dataType="PageviewData",e}(),Oa=function(){function e(e,t,n,i,r,o,a){this.aiDataContract={ver:1,name:0,url:0,duration:0,perfTotal:0,networkConnect:0,sentRequest:0,receivedResponse:0,domProcessing:0,properties:0,measurements:0};var s=this;s.ver=2,s.url=ya(e,n),s[Dr]=ma(e,t)||ha,s[Rr]=Ca(e,r),s[Vr]=xa(e,o),a&&(s.domProcessing=a.domProcessing,s[Jr]=a[Jr],s.networkConnect=a.networkConnect,s.perfTotal=a.perfTotal,s[Qr]=a[Qr],s.sentRequest=a.sentRequest)}return e.envelopeType="Microsoft.ApplicationInsights.{0}.PageviewPerformance",e.dataType="PageviewPerformanceData",e}(),Na="error",Pa="stack",_a="stackDetails",Fa="errorSrc",Ma="message",Ra="description";function Va(e,t){var n=e;return n&&!Yi(n)&&(JSON&&JSON[Or]?(n=JSON[Or](e),!t||n&&"{}"!==n||(n=ji(e[Lr])?e[Lr]():""+e)):n=e+" - (Missing JSON.stringify)"),n||""}function za(e,t){var n=e;return e&&(n&&!Yi(n)&&(n=e[Ma]||e[Ra]||n),n&&!Yi(n)&&(n=Va(n,!0)),e.filename&&(n=n+" @"+(e.filename||"")+":"+(e.lineno||"?")+":"+(e.colno||"?"))),t&&"String"!==t&&"Object"!==t&&"Error"!==t&&-1===(n||"")[_r](t)&&(n=t+": "+n),n||""}function Ua(e){return e&&e.src&&Yi(e.src)&&e.obj&&Ki(e.obj)}function Ha(e){var t=e||"";Yi(t)||(t=Yi(t[Pa])?t[Pa]:""+t);var n=t[kr]("\n");return{src:t,obj:n}}function Ba(e){var t=null;if(e)try{if(e[Pa])t=Ha(e[Pa]);else if(e[Na]&&e[Na][Pa])t=Ha(e[Na][Pa]);else if(e.exception&&e.exception[Pa])t=Ha(e.exception[Pa]);else if(Ua(e))t=e;else if(Ua(e[_a]))t=e[_a];else if(window&&window.opera&&e[Ma])t=function(e){for(var t=[],n=e[kr]("\n"),i=0;i<n[Sr];i++){var r=n[i];n[i+1]&&(r+="@"+n[i+1],i++),t.push(r)}return{src:e,obj:t}}(e[Ar]);else if(e.reason&&e.reason[Pa])t=Ha(e.reason[Pa]);else if(Yi(e))t=Ha(e);else{var n=e[Ma]||e[Ra]||"";Yi(e[Fa])&&(n&&(n+="\n"),n+=" from "+e[Fa]),n&&(t=Ha(n))}}catch(e){t=Ha(e)}return t||{src:"",obj:null}}function ja(e){var t="";if(e&&!(t=e.typeName||e[Dr]||""))try{var n=/function (.{1,200})\(/.exec(e.constructor[Lr]());t=n&&n[Sr]>1?n[1]:""}catch(e){}return t}function qa(e){if(e)try{if(!Yi(e)){var t=ja(e),n=Va(e,!1);return n&&"{}"!==n||(e[Na]&&(t=ja(e=e[Na])),n=Va(e,!0)),0!==n[_r](t)&&"String"!==t?t+":"+n:n}}catch(e){}return""+(e||"")}var Ga=function(){function e(e,t,n,i,r,o){this.aiDataContract={ver:1,exceptions:1,severityLevel:0,properties:0,measurements:0};var a=this;a.ver=2,function(e){try{if(Bi(e))return"ver"in e&&"exceptions"in e&&"properties"in e}catch(e){}return!1}(t)?(a[Fr]=t[Fr]||[],a[Rr]=t[Rr],a[Vr]=t[Vr],t[Hr]&&(a[Hr]=t[Hr]),t.id&&(a.id=t.id),t[Br]&&(a[Br]=t[Br]),zi(t[jr])||(a[jr]=t[jr])):(n||(n={}),a[Fr]=[new Wa(e,t,n)],a[Rr]=Ca(e,n),a[Vr]=xa(e,i),r&&(a[Hr]=r),o&&(a.id=o))}return e.CreateAutoException=function(e,t,n,i,r,o,a,s){var l,c=ja(r||o||e);return(l={})[Ar]=za(e,c),l.url=t,l.lineNumber=n,l.columnNumber=i,l.error=qa(r||o||e),l.evt=qa(o||e),l[Ur]=c,l.stackDetails=Ba(a||r||o),l.errorSrc=s,l},e.CreateFromInterface=function(t,n,i,r){var o=n[Fr]&&ir(n[Fr],(function(e){return Wa[qr](t,e)}));return new e(t,(0,Xt.uc)((0,Xt.uc)({},n),{exceptions:o}),i,r)},e.prototype.toInterface=function(){var e,t=this,n=t.exceptions,i=t.properties,r=t.measurements,o=t.severityLevel,a=t.problemGroup,s=t.id,l=t.isManual,c=n instanceof Array&&ir(n,(function(e){return e.toInterface()}))||void 0;return(e={ver:"4.0"})[Fr]=c,e.severityLevel=o,e.properties=i,e.measurements=r,e.problemGroup=a,e.id=s,e.isManual=l,e},e.CreateSimpleException=function(e,t,n,i,r,o){var a;return{exceptions:[(a={},a[Wr]=!0,a.message=e,a.stack=r,a.typeName=t,a)]}},e.envelopeType="Microsoft.ApplicationInsights.{0}.Exception",e.dataType="ExceptionData",e.formatError=qa,e}(),Wa=function(){function e(e,t,n){this.aiDataContract={id:0,outerId:0,typeName:1,message:1,hasFullStack:0,stack:0,parsedStack:2};var i=this;if(function(e){try{if(Bi(e))return"hasFullStack"in e&&"typeName"in e}catch(e){}return!1}(t))i[Ur]=t[Ur],i[Ar]=t[Ar],i[Pa]=t[Pa],i[Mr]=t[Mr]||[],i[Wr]=t[Wr];else{var r=t,o=r&&r.evt;Xi(r)||(r=r[Na]||o||r),i[Ur]=ma(e,ja(r))||ha,i[Ar]=ba(e,za(t||r,i[Ur]))||ha;var a=t[_a]||Ba(t);i[Mr]=function(e){var t,n=e.obj;if(n&&n[Sr]>0){t=[];var i=0,r=0;if(tr(n,(function(e){var n=e[Lr]();if(Ka.regex.test(n)){var o=new Ka(n,i++);r+=o[zr],t.push(o)}})),r>32768)for(var o=0,a=t[Sr]-1,s=0,l=o,c=a;o<a;){if((s+=t[o][zr]+t[a][zr])>32768){var u=c-l+1;t.splice(l,u);break}l=o,c=a,o++,a--}}return t}(a),Ki(i[Mr])&&ir(i[Mr],(),i[Pa]=wa(e,function(e){var t="";return e&&(e.obj?tr(e.obj,(function(e){t+=e+"\n"})):t=e.src||""),t}(a)),i.hasFullStack=Ki(i.parsedStack)&&i.parsedStack[Sr]>0,n&&(n[Ur]=n[Ur]||i[Ur])}}return e.prototype.toInterface=function(){var e,t=this,n=t[Mr]instanceof Array&&ir(t[Mr],(function(e){return e.toInterface()}));return(e={id:t.id,outerId:t.outerId,typeName:t[Ur],message:t[Ar],hasFullStack:t[Wr],stack:t[Pa]})[Mr]=n||void 0,e},e.CreateFromInterface=function(t,n){var i=n[Mr]instanceof Array&&ir(n[Mr],(function(e){return Ka[qr](e)}))||n[Mr];return new e(t,(0,Xt.uc)((0,Xt.uc)({},n),{parsedStack:i}))},e}(),Ka=function(){function e(t,n){this.aiDataContract={level:1,method:1,assembly:0,fileName:0,line:0};var i=this;if(i[zr]=0,"string"==typeof t){var r=t;i[Kr]=n,i[Xr]="<no_method>",i[Gr]=or(r),i[Yr]="",i[Zr]=0;var o=r.match(e.regex);o&&o[Sr]>=5&&(i[Xr]=or(o[2])||i[Xr],i[Yr]=or(o[4]),i[Zr]=parseInt(o[5])||0)}else i[Kr]=t[Kr],i[Xr]=t[Xr],i[Gr]=t[Gr],i[Yr]=t[Yr],i[Zr]=t[Zr],i[zr]=0;i.sizeInBytes+=i.method[Sr],i.sizeInBytes+=i.fileName[Sr],i.sizeInBytes+=i.assembly[Sr],i[zr]+=e.baseSize,i.sizeInBytes+=i.level.toString()[Sr],i.sizeInBytes+=i.line.toString()[Sr]}return e.CreateFromInterface=function(t){return new e(t,null)},e.prototype.toInterface=function(){var e=this;return{level:e[Kr],method:e[Xr],assembly:e[Gr],fileName:e[Yr],line:e[Zr]}},e.regex=/^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/,e.baseSize=58,e}(),Xa="toGMTString",Ya="toUTCString",Za="cookie",Ja="expires",Qa="enabled",es="isCookieUseDisabled",ts="disableCookiesUsage",ns="_ckMgr",is=null,rs=null,os=null,as=yo(),ss={},ls={};function cs(e,t){var n=hs[ns]||ls[ns];return n||(n=hs[ns]=hs(e,t),ls[ns]=n),n}function us(e){return!e||e.isEnabled()}function ds(e,t){return!!(t&&e&&Ki(e.ignoreCookies))&&-1!==e.ignoreCookies[An](t)}unction hs(e,t){var n,i=function(e){var t=e[Dn]=e[Dn]||{};if(pr(t,"domain",e.cookieDomain,Ui,zi),pr(t,"path",e.cookiePath||"/",null,zi),zi(t[Qa])){var n=void 0;Vi(e[es])||(n=!e[es]),Vi(e[ts])||(n=!e[ts]),t[Qa]=n}return t}(e||ls),r=i.path||"/",o=i.domain,a=!1!==i[Qa],s=((n={isEnabled:function(){var e=a&&ps(t),n=ls[ns];return e&&n&&s!==n&&(e=us(n)),e}})[_n]=function(e){a=!1!==e},n.set=function(e,t,n,a,l){var c,u=!1;if(us(s)&&!function(e,t){return!!(t&&e&&Ki(e.blockedCookies)&&-1!==e.blockedCookies[An](t))||ds(e,t)}(i,e)){var d={},f=or(t||ti),h=f[An](";");if(-1!==h&&(f=or(t[On](0,h)),d=gs(t[On](h+1))),pr(d,"domain",a||o,mr,Vi),!zi(n)){var p=Io();if(Vi(d[Ja])){var g=fr()+1e3*n;if(g>0){var v=new Date;v.setTime(g),pr(d,Ja,vs(v,p?Xa:Ya)||vs(v,p?Xa:Ya)||ti,mr)}}p||pr(d,"max-age",ti+n,null,Vi)}var m=xo();m&&"https:"===m.protocol&&(pr(d,"secure",null,null,Vi),null===rs&&(c=(wo()||{})[Nn],rs=!(Yi(c)&&(Wi(c,"CPU iPhone OS 12")||Wi(c,"iPad; CPU OS 12")||Wi(c,"Macintosh; Intel Mac OS X 10_14")&&Wi(c,"Version/")&&Wi(c,"Safari")||Wi(c,"Macintosh; Intel Mac OS X 10_14")&&function(e,t){var n=!1;return e&&t&&!(n=e===t)&&(n=Li?e[mi](t):function(e,t){var n=!1,i=t?t[ln]:0,r=e?e[ln]:0;if(i&&r&&r>=i&&!(n=e===t)){for(var o=r-1,a=i-1;a>=0;a--){if(e[o]!=t[a])return!1;o--}n=!0}return n}(e,t)),n}(c,"AppleWebKit/605.1.15 (KHTML, like Gecko)")||Wi(c,"Chrome/5")||Wi(c,"Chrome/6")||Wi(c,"UnrealEngine")&&!Wi(c,"Chrome")||Wi(c,"UCBrowser/12")||Wi(c,"UCBrowser/11")))),rs&&pr(d,"SameSite","None",null,Vi)),pr(d,"path",l||r,null,Vi),(i.setCookie||bs)(e,ms(f,d)),u=!0}return u},n.get=function(e){var t=ti;return us(s)&&!ds(i,e)&&(t=(i.getCookie||ys)(e)),t},n.del=function(e,t){var n=!1;return us(s)&&(n=s.purge(e,t)),n},n.purge=function(e,n){var r,o=!1;if(ps(t)){var a=((r={}).path=n||"/",r[Ja]="Thu, 01 Jan 1970 00:00:01 GMT",r);Io()||(a["max-age"]="0"),(i.delCookie||bs)(e,ms(ti,a)),o=!0}return o},n);return s[ns]=s,s}function ps(e){if(null===is){is=!1;try{is=void 0!==(as||{})[Za]}catch(t){qo(e,2,68,"Cannot access document.cookie - "+hr(t),{exception:Lo(t)})}}return is}function gs(e){var t={};return e&&e[ln]&&tr(or(e)[Pn](";"),(function(e){if(e=or(e||ti)){var n=e[An]("=");-1===n?t[e]=null:t[or(e[On](0,n))]=or(e[On](n+1))}})),t}function vs(e,t){return ji(e[t])?e[t]():null}function ms(e,t){var n=e||ti;return Gi(t,(function(e,t){n+="; "+e+(zi(t)?ti:"="+t)})),n}function ys(e){var t=ti;if(as){var n=as[Za]||ti;os!==n&&(ss=gs(n),os=n),t=or(ss[e]||ti)}return t}function bs(e,t){as&&(as[Za]=e+"="+t)}var ws=4294967296,Cs=4294967295,xs=!1,Ts=123456789,ks=987654321;function Ss(e){e<0&&(e>>>=0),Ts=123456789+e&Cs,ks=987654321-e&Cs,xs=!0}function Is(){try{var e=2147483647&fr();Ss((Math.random()*ws^e)+e)}catch(e){}}function Es(e){var t=0,n=po("crypto")||po("msCrypto");return n&&n.getRandomValues&&(t=n.getRandomValues(new Uint32Array(1))[0]&Cs),0===t&&Io()&&(xs||Is(),t=Ls()&Cs),0===t&&(t=Math.floor(ws*Math.random()|0)),e||(t>>>=0),t}function Ls(e){var t=((ks=36969*(65535&ks)+(ks>>16)&Cs)<<16)+(65535&(Ts=18e3*(65535&Ts)+(Ts>>16)&Cs))>>>0&Cs|0;return e||(t>>>=0),t}function $s(e){void 0===e&&(e=22);for(var t=Es()>>>0,n=0,i=ti;i[ln]<e;)n++,i+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&t),t>>>=6,5===n&&(t=(Es()<<2&4294967295|3&t)>>>0,n=0);return i}var Ds=Yt.RJ,As="2.8.11",Os="."+$s(6),Ns=0;function Ps(e){return 1===e[Mn]||9===e[Mn]||!+e[Mn]}function _s(e,t){return void 0===t&&(t=!1),qi(e+Ns+++(t?"."+As:ti)+Os)}function Fs(e){var t={id:_s("_aiData-"+(e||ti)+"."+As),accept:function(e){return Ps(e)},get:function(e,n,i,r){var o=e[t.id];return o?o[qi(n)]:(r&&((o=function(e,t){var n=t[e.id];if(!n){n={};try{Ps(t)&&(function(e,t,n){if(Ds)try{return Ds(e,t,{value:n,enumerable:!1,configurable:!0}),!0}catch(e){}return!1}(t,e.id,n)||(t[e.id]=n))}catch(e){}}return n}(t,e))[qi(n)]=i),i)},kill:function(e,t){if(e&&e[t])try{delete e[t]}catch(e){}}};return t}var Ms="attachEvent",Rs="addEventListener",Vs="detachEvent",zs="removeEventListener",Us="events",Hs="visibilitychange",Bs="pagehide",js="unload",qs="beforeunload",Gs=_s("aiEvtPageHide"),Ws=(_s("aiEvtPageShow"),/\.[\.]+/g),Ks=/[\.]+$/,Xs=1,Ys=Fs("events"),Zs=/^([^.]*)(?:\.(.+)|)/;function Js(e){return e&&e[Vn]?e[Vn](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g,ti):e}function Qs(e,t){var n;if(t){var i=ti;Ki(t)?(i=ti,tr(t,(function(e){(e=Js(e))&&("."!==e[0]&&(e="."+e),i+=e)}))):i=Js(t),i&&("."!==i[0]&&(i="."+i),e=(e||ti)+i)}var r=Zs.exec(e||ti)||[];return(n={})[jn]=r[1],n.ns=(r[2]||ti).replace(Ws,".").replace(Ks,ti)[Pn](".").sort().join("."),n}function el(e,t,n){void 0===n&&(n=!0);var i=Ys.get(e,Us,{},n),r=i[t];return r||(r=i[t]=[]),r}function tl(e,t,n,i){e&&t&&t[jn]&&(e[zs]?e[zs](t[jn],n,i):e[Vs]&&e[Vs]("on"+t[jn],n))}function nl(e,t,n,i){for(var r=t[ln];r--;){var o=t[r];o&&(n.ns&&n.ns!==o.evtName.ns||i&&!i(o)||(tl(e,o.evtName,o[qn],o.capture),t[bn](r,1)))}}unction rl(e,t,n,i,r){var o;void 0===r&&(r=!1);var a=!1;if(e)try{var s=Qs(t,i);if(a=function(e,t,n,i){var r=!1;return e&&t&&t[jn]&&n&&(e[Rs]?(e[Rs](t[jn],n,i),r=!0):e[Ms]&&(e[Ms]("on"+t[jn],n),r=!0)),r}(e,s,n,r),a&&Ys.accept(e)){var l=((o={guid:Xs++,evtName:s})[qn]=n,o.capture=r,o);el(e,s.type)[nn](l)}}catch(e){}return a}l,dl=null;function fl(){for(var e,t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=ti,i=0;i<4;i++)n+=t[15&(e=Es())]+t[e>>4&15]+t[e>>8&15]+t[e>>12&15]+t[e>>16&15]+t[e>>20&15]+t[e>>24&15]+t[e>>28&15];var r=t[8+(3&Es())|0];return n[Fn](0,8)+n[Fn](9,4)+"4"+n[Fn](13,3)+r+n[Fn](16,3)+n[Fn](19,12)}var hl={_canUseCookies:void 0,isTypeof:function(e,t){return typeof e===t},isUndefined:Vi,isNullOrUndefined:zi,hasOwnProperty:Hi,isFunction:ji,isObject:Bi,isDate:function(e){return!(!e||"[object Date]"!==Ai[Bn](e))},isArray:Ki,isError:Xi,isString:Yi,isNumber:Zi,isBoolean:Ji,toISOString:er,arrForEach:tr,arrIndexOf:nr,arrMap:ir,arrReduce:rr,strTrim:or,objCreate:Zt.pu,objKeys:lr,objDefineAccessors:cr,addEventHandler:al,dateNow:fr,isIE:Io,disableCookies:function(){(n=cs(e,t),i=hl._canUseCookies,null===dl&&(dl=[],ul=i,cr(hl,"_canUseCookies",(function(){return ul}),(function(e){ul=e,tr(dl,(function(t){t[_n](e)}))}))),-1===nr(dl,n)&&dl[nn](n),Ji(i)&&n[_n](i),Ji(ul)&&n[_n](ul),n)[_n](!1);var e,t,n,i},newGuid:function(){var e=fl();return e[On](0,8)+"-"+e[On](8,12)+"-"+e[On](12,16)+"-"+e[On](16,20)+"-"+e[On](20)},perfNow:function(){var e=To();return e&&e.now?e.now():fr()},newId:$s,randomValue:function(e){return e>0?Math.floor(Es()/Cs*(e+1))>>>0:0},random32:Es,mwcRandomSeed:function(e){e?Ss(e):Is()},mwcRandom32:Ls,generateW3CId:fl};var pl="00",gl="00000000000000000000000000000000",vl="0000000000000000";function ml(e,t,n){return!(!e||e[ln]!==t||e===n||!e.match(/^[\da-f]*$/))}unction bl(e,t,n,i){var r;return(r={})[ei]=ml(i,2,"ff")?i:pl,r[Zn]=wl(e)?e:fl(),r.spanId=Cl(t)?t:fl()[Fn](0,16),r.traceFlags=n>=0&&n<=255?n:1,r}function wl(e){return ml(e,32,gl)}unction xl(e){if(e){var t=e[Qn]);ml(t,2)||(t="01");var n=e[ei]||pl;return"00"!==n&&"ff"!==n&&(n=pl),"".concat(n,"-").concat(yl(e.traceId,32,gl),"-").concat(yl(e.spanId,16,vl),"-").concat(t)}return""}function Tl(e){var t=null;if(ji(Event))t=new Event(e);else{var n=yo();n&&n.createEvent&&(t=n.createEvent("Event")).initEvent(e,!0,!0)}return t}var kl,Sl=(kl={},Gi({requestContextHeader:[0,"Request-Context"],requestContextTargetKey:[1,"appId"],requestContextAppIdFormat:[2,"appId=cid-v1:"],requestIdHeader:[3,"Request-Id"],traceParentHeader:[4,"traceparent"],traceStateHeader:[5,"tracestate"],sdkContextHeader:[6,"Sdk-Context"],sdkContextHeaderAppIdRequest:[7,"appId"],requestContextHeaderLowerCase:[8,"request-context"]},(function(e,t){kl[e]=t[1],kl[t[0]]=t[1]})),ur(kl)),Il=yo()||{},El=0,Ll=[null,null,null,null,null]; Ol=[da+fa,"https://breeze.aimon.applicationinsights.io"+fa,"https://dc-int.services.visualstudio.com"+fa];ar Pl={correlationIdPrefix:"cid-v1:",canIncludeCorrelationHeader:function(e,t,n){if(!t||e&&e.disableCorrelationHeaders)return!1;if(e&&e[Pr])for(var i=0;i<e.correlationHeaderExcludePatterns[Sr];i++)if(e[Pr][i].test(t))return!1;var r=$l(t).host[Ir]();if(!r||-1===r[_r](":443")&&-1===r[_r](":80")||(r=(Al(t,!0)||"")[Ir]()),(!e||!e.enableCorsCorrelation)&&r&&r!==n)return!1;var o,a=e&&e.correlationHeaderDomains;if(a&&(tr(a,(),!o))return!1;var s=e&&e.correlationHeaderExcludedDomains;if(!s||0===s[Sr])return!0;for(i=0;i<s[Sr];i++)if(new RegExp(s[i].toLowerCase().replace(/\\/g,"\\\\").replace(/\./g,"\\.").replace(/\*/g,".*")).test(r))return!1;return r&&r[Sr]>0},getCorrelationContext:getCorrelationContextValue:;unction Fl(e,t){var n=null;return 0===e||0===t||zi(e)||zi(t)||(n=t-e),n}ar Rl=),Vl="ctx",zl="ParentContextKey",Ul="ChildrenContextKey",Hl=function(){function e(t,n,i){var r,o=this,a=!1;o.start=fr(),o[Qt]=t,o[Tn]=i,o[Wn]=function(){return!1},ji(n)&&(a=cr(o,"payload",(function(){return!r&&ji(n)&&(r=n(),n=null),r}))),o[Kn]=function(t){return t?t===e[zl]||t===e[Ul]?o[t]:(o[Vl]||{})[t]:null},o[Xn]=function(t,n){t&&(t===e[zl]?(o[t]||(o[Wn]=function(){return!0}),o[t]=n):t===e[Ul]?o[t]=n:(o[Vl]=o[Vl]||{})[t]=n)},o[Yn]=function(){var t=0,i=o[Kn](e[Ul]);if(Ki(i))for(var r=0;r<i[ln];r++){var s=i[r];s&&(t+=s[cn])}o[cn]=fr()-o.start,o.exTime=o[cn]-t,o[Yn]=function(){},!a&&ji(n)&&(o.payload=n())}}return e.ParentContextKey="parent",e.ChildrenContextKey="childEvts",e}(),Bl=function(){function e(t){this.ctx={},(0,Kt.Z)(e,this,()}return e.__ieDyn=1,e}(),jl="CoreUtils.doPerf";ar Gl=Fs("plugin");function Wl(e){return Gl.get(e,"state",{},!0)}r Yl="_hasRun",Zl="_getTelCtx",Jl=0;function Ql(e,t,n,i){var r=null,o=[];null!==i&&(r=i?function(e,t,n){for(;e;){if(e[vn]()===n)return e;e=e[In]()}return ic([n],t[on]||{},t)}(e,n,i):e);var a={_next:function(){var e=r;if(r=e?e[In]():null,!e){var t=o;t&&t[ln]>0&&(tr(t,(function(e){try{e.func[Bn](e.self,e.args)}catch(e){qo(n[sn],2,73,"Unexpected Exception during onComplete - "+Lo(e))}})),o=[])}return e},ctx:{core:function(){return n},diagLog:function(){return Ho(n,t)},getCfg:function(){return t},getExtCfg:s,getConfig:function(e,n,i){void 0===i&&(i=!1);var r,o=s(e,null);return o&&!zi(o[n])?r=o[n]:t&&!zi(t[n])&&(r=t[n]),zi(r)?i:r},hasNext:function(){return!!r},getNext:function(){return r},setNext:iterate:onComplete:};eturn a}nction nc(e,t,n){var i=t[on]||{},r=Ql(e,i,t,n).ctx;return r[un]=function(e){return r.iterate((function(t){ji(t[Sn])&&t[Sn](r,e)}))},r[$n]=function(e,n){return void 0===e&&(e=null),Ki(e)&&(e=ic(e,i,t,n)),nc(e||r[In](),t,n)},r}function ic(e,t,n,i){var r=null,o=!i;if(Ki(e)&&e[ln]>0){var a=null;tr(e,(function(e){if(o||i!==e||(o=!0),o&&e&&ji(e[si])){var s=function(e,t,n){var i,r=null,o=ji(e[si]),a=ji(e[Ln]),s={getPlugin:function(){return e},getNext:function(){return r},processTelemetry:function(i,c){l(c=c||function(){var i;return e&&ji(e[Zl])&&(i=e[Zl]()),i||(i=ec(s,t,n)),i}(),(function(t){if(!e||!o)return!1;var n=Wl(e);return!n[wn]&&!n[oi]&&(a&&e[Ln](r),e[si](i,t),!0)}),"processTelemetry",(function(){return{item:i}}),!i.sync)||c[un](i)},unload:function(t,n){l(t,(function(){var i=!1;if(e){var r=Wl(e),o=e[ii]||r[ii];!e||o&&o!==t.core()||r[wn]||(r[ii]=null,r[wn]=!0,r[rn]=!1,e[wn]&&!0===e[wn](t,n)&&(i=!0))}return i}),"unload",(function(){}),n[Tn])||t[un](n)},update:function(t,n){l(t,(function(){var i=!1;if(e){var r=Wl(e),o=e[ii]||r[ii];!e||o&&o!==t.core()||r[wn]||e[Sn]&&!0===e[Sn](t,n)&&(i=!0)}return i}),"update",(function(){}),!1)||t[un](n)},_id:i=e?e[tn]+"-"+e[li]+"-"+Jl++:"Unknown-0-"+Jl++,_setNext:function(e){r=e}};function l(t,n,o,a,s){var l=!1,c=e?e[tn]:"TelemetryPluginChain",u=t[Yl];return u||(u=t[Yl]={}),t.setNext(r),e&&ql(t[ii](),(function(){return c+":"+o}),(function(){u[i]=!0;try{var e=r?r._id:ti;e&&(u[e]=!1),l=n(t)}catch(e){var a=!r||u[r._id];a&&(l=!0),r&&a||qo(t[En](),1,73,"Plugin ["+c+"] failed during "+o+" - "+Lo(e)+", run flags: "+Lo(u))}}),a,s),l}return dr(s)}(e,t,n);r||(r=s),a&&a._setNext(s),a=s}}))}return i&&!r?ic([i],t,n):r}var rc="_aiHooks",oc=["req","rsp","hkErr","fnErr"];on fc(){var e=[];return{add:function(t){t&&e[nn](t)},run:function(t,n){tr(e,(function(e){try{e(t,n)}catch(e){qo(t[En](),2,73,"Unexpected error calling unload handler - "+Lo(e))}})),e=[]}}}var hc="getPlugin",pc=function(){function e(){var t,n,i,r,o,a=this;function s(e){void 0===e&&(e=null);var t=e;if(!t){var r=n||ec(null,{},a[ii]);t=i&&i[hc]?r[$n](null,i[hc]):r[$n](null,i)}return t}function l(e,t,r){e&&pr(e,ai,[],null,zi),!r&&t&&(r=t[dn]()[In]());var o=i;i&&i[hc]&&(o=i[hc]()),a[ii]=t,n=ec(r,e,t,o)}function c(){t=!1,a[ii]=null,n=null,i=null,o=[],r=fc()}c(),(0,Kt.Z)(e,a,(function(e){e[Jt]=function(e,n,i,r){l(e,n,r),t=!0},e[wn]=function(t,n){var a,s=e[ii];if(s&&(!t||s===t[ii]())){var l,u=!1,d=t||tc(null,s,i&&i[hc]?i[hc]():i),f=n||((a={reason:0})[Tn]=!1,a);return e[kn]&&!0===e[kn](d,f,h)?l=!0:h(),l}function h(){if(!u){u=!0,r.run(d,n);var e=o;o=[],tr(e,(function(e){e.rm()})),!0===l&&d[un](f),c()}}},e[Sn]=function(t,n){var r=e[ii];if(r&&(!t||r===t[ii]())){var o,a=!1,s=t||nc(null,r,i&&i[hc]?i[hc]():i),c=n||{reason:0};return e._doUpdate&&!0===e._doUpdate(s,c,u)?o=!0:u(),o}function u(){a||(a=!0,l(s.getCfg(),s.core(),s[In]()))}},e._addHook=function(e){e&&(Ki(e)?o=o.concat(e):o[nn](e))},wr(e,"_addUnloadCb",(function(){return r}),"add")})),a[En]=function(e){return s(e)[En]()},a[rn]=function(){return t},a.setInitialized=function(e){t=e},a[Ln]=function(e){i=e},a[un]=function(e,t){t?t[un](e):i&&ji(i[si])&&i[si](e,null)},a._getTelCtx=s}return e.__ieDyn=1,e}(),gc="toString",vc="disableExceptionTracking",mc="autoTrackPageVisitTime",yc="overridePageViewDuration",bc="enableUnhandledPromiseRejectionTracking",wc="samplingPercentage",Cc="isStorageUseDisabled",xc="isBrowserLinkTrackingEnabled",Tc="enableAutoRouteTracking",kc="namePrefix",Sc="disableFlushOnBeforeUnload",Ic="core",Ec="dataType",Lc="envelopeType",$c="diagLog",Dc="track",Ac="trackPageView",Oc="trackPreviousPageVisit",Nc="sendPageViewInternal",Pc="sendPageViewPerformanceInternal",_c="populatePageViewPerformanceEvent",Fc="href",Mc="sendExceptionInternal",Rc="exception",Vc="error",zc="_onerror",Uc="errorSrc",Hc="lineNumber",Bc="columnNumber",jc="message",qc="CreateAutoException",Gc="addTelemetryInitializer",Wc="duration",Kc="length",Xc="isPerformanceTimingSupported",Yc="getPerformanceTiming",Zc="navigationStart",Jc="shouldCollectDuration",Qc="isPerformanceTimingDataReady",eu="responseStart",tu="loadEventEnd",nu="responseEnd",iu="connectEnd",ru="pageVisitStartTime",ou=null,au=function(){function e(t,n,i,r){(0,Kt.Z)(e,this,(function(e){var o,a=null,s=[],l=!1;&&(o=i.logger),e[Ac]=function(e,i){var u=e.name;if(zi(u)||"string"!=typeof u){var d=yo();u=e.name=d&&d.title||""}var f=e.uri;if(zi(f)||"string"!=typeof f){var h=xo();f=e.uri=h&&h[Fc]||""}if(!r[Xc]())return t[Nc](e,i),c(!0),void(function(){if(null==ou)try{ou=!!(self&&self instanceof WorkerGlobalScope)}catch(e){ou=!1}return ou}()||qo(o,2,25,"trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info."));var p,g,v,m=!1,y=r[Yc]()[Zc];y>0&&(p=Fl(y,+new Date),r[Jc](p)||(p=void 0)),zi(i)||zi(i[Wc])||(g=i[Wc]),!n&&isNaN(g)||(isNaN(g)&&(i||(i={}),i[Wc]=p),t[Nc](e,i),c(!0),m=!0),i||(i={}),v=s.push(v),a||(a=setInterval((,100))},e.teardown=function(e,t){if(a){clearInterval(a),a=null;var n=s.slice(0);s=[],tr(n,()}}}))}return e.__ieDyn=1,e}(),su=36e5,lu=["googlebot","adsbot-google","apis-google","mediapartners-google"];ction fu(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=wo()||{},i=n.userAgent,r=!1;if(i)for(var o=0;o<lu[Kc];o++)r=r||-1!==i.toLowerCase().indexOf(lu[o]);if(r)return!1;for(o=0;o<e[Kc];o++)if(e[o]<0||e[o]>=su)return!1;return!0}var hu=function(){function e(t){var n=this,i=Ho(t);(0,Kt.Z)(e,this,(function(e){e[_c]=function(e){e.isValid=!1;var t,r=(t=To())&&t.getEntriesByType&&t.getEntriesByType("navigation")[Kc]>0?To().getEntriesByType("navigation")[0]:null,o=du(),a=0,s=0,l=0,c=0,u=0;(r||o)&&(r?(a=r[Wc],s=0===r.startTime?r[iu]:Fl(r.startTime,r[iu]),l=Fl(r.requestStart,r[eu]),c=Fl(r[eu],r[nu]),u=Fl(r.responseEnd,r[tu])):(a=Fl(o[Zc],o[tu]),s=Fl(o[Zc],o[iu]),l=Fl(o.requestStart,o[eu]),c=Fl(o[eu],o[nu]),u=Fl(o.responseEnd,o[tu])),0===a?qo(i,2,10,"error calculating page view performance.",{total:a,network:s,request:l,response:c,dom:u}):n[Jc](a,s,l,c,u)?a<Math.floor(s)+Math.floor(l)+Math.floor(c)+Math.floor(u)?qo(i,2,8,"client performance math error.",{total:a,network:s,request:l,response:c,dom:u}):(e.durationMs=a,e.perfTotal=e[Wc]=no(a),e.networkConnect=no(s),e.sentRequest=no(l),e.receivedResponse=no(c),e.domProcessing=no(u),e.isValid=!0):qo(i,2,45,"Invalid page load duration value. Browser perf data won't be sent.",{total:a,network:s,request:l,response:c,dom:u}))},e[Yc]=du,e[Xc]=cu,e[Qc]=uu,e[Jc]=fu}))}return e.__ieDyn=1,e}(),pu=function(){function e(t,n){var i="prevPageVisitData";(0,Kt.Z)(e,this,(function(e){e[Oc]=function(e,r){try{var o=function(e,n){var r=null;try{r=),function(e,n){try{if(ta()){null!=na(t,i)&&yr("Cannot call startPageVisit consecutively without first calling stopPageVisit");var r=new gu(e,n),o=So().stringify(r);ia(t,i,o)}}catch(e){Go(t,"Call to start failed: "+Lo(e))}}(e,n)}catch(e){Go(t,"Call to restart failed: "+Lo(e)),r=null}return r}(e,r);o&&n(o.pageName,o.pageUrl,o.pageVisitTime)}catch(e){Go(t,"Auto track page visit time failed, metric will not be collected: "+Lo(e))}},cr(e,"_logger",(function(){return t})),cr(e,"pageVisitTimeTrackingHandler",(function(){return n}))}))}return e.__ieDyn=1,e}(),gu=vu=Cu=function(e){function t(){var n,i,r,o,a,s,l,c,u,d,f,h,p,g,v,m,y,b=e.call(this)||this;return b.identifier="ApplicationInsightsAnalytics",b.priority=180,b.autoRoutePVDelay=500,(0,Kt.Z)(t,b,(function(e,t){var w=t._addHook;unction x(){n=null,i=null,r=null,o=null,a=null,s=null,l=!1,c=!1,u=!1,d=!1,f=!1,h=!1,p=!1,g=!1;var e=xo();v=e&&e[Fc]||"",m=null,y=null}x(),e.getCookieMgr=e.processTelemetry=function(t,n){e.processNext(t,n)},e.trackEvent=function(t,n){try{var i=Ia(t,Ea[Ec],Ea[Lc],e[$c](),n);e[Ic][Dc](i)}catch(e){C(2,39,"trackTrace failed, trace will not be collected: "+hr(e),{exception:Lo(e)})}},e.startTrackEvent=e.stopTrackEvent=e.trackTrace=function(t,n){try{var i=Ia(t,La[Ec],La[Lc],e[$c](),n);e[Ic][Dc](i)}catch(e){C(2,39,"trackTrace failed, trace will not be collected: "+hr(e),{exception:Lo(e)})}},e.trackMetric=e[Ac]=function(t,n){try{var i=t||{};r[Ac](i,(0,Xt.uc)((0,Xt.uc)((0,Xt.uc)({},i.properties),i.measurements),n)),e.config[mc]&&a[Oc](i.name,i.uri)}catch(e){C(1,37,"trackPageView failed, page view will not be collected: "+hr(e),{exception:Lo(e)})}},e[Nc]=function(t,n,i){var r=yo();r&&(t.refUri=void 0===t.refUri?r.referrer:t.refUri);var o=Ia(t,Aa[Ec],Aa[Lc],e[$c](),n,i);e[Ic][Dc](o)},e[Pc]=e.trackPageViewPerformance=e.startTrackPage=e.stopTrackPage=e[Mc]=e.trackException=e[zc]=e[Gc]=e.initialize=function(C,x,T,k){if(!e.isInitialized()){zi(x)&&yr("Error initializing"),t.initialize(C,x,T,k);try{y=il(_s(e.identifier),x.evtNamespace&&x.evtNamespace()),s&&(tr(s,(function(e){x[Gc](e)})),s=null);var S=function(t){var n=ec(null,t,e[Ic]),i=e.identifier,r=bu(t),o=e.config=n.getExtCfg(i);return void 0!==r&&Gi(r,(),o}(C);wu(S),o=new hu(e[Ic]),r=new au(b,S[yc],e[Ic],o),a=new pu(e[$c](),(),S,C),(n=new vu(e[$c](),"trackEvent")).action=(i=new vu(e[$c](),"trackPageView")).action=go()&&(S),function(t){var n=vo(),i=xo();if(u=!0===t[Tc],n&&u&&Co()){var r=Co()?history:po("history");ji(r.pushState)&&ji(r.replaceState)&&typeof Event!==Yt.jA&&function(t,n,i,r){var o=t[kc]||"";d||(w(dc(i,"pushState",{ns:y,rsp:function(){u&&(mu(n,Tl(o+"pushState")),mu(n,Tl(o+"locationchange")))}},!0)),w(dc(i,"replaceState",{ns:y,rsp:,!0)),rl(n,o+"popstate",(,y),rl(n,o+"locationchange",(function(){if(m?(v=m,m=r&&r[Fc]||""):m=r&&r[Fc]||"",u){var t=function(){var t=null;if(e[Ic]&&e[Ic].getTraceCtx&&(t=e[Ic].getTraceCtx(!1)),!t){var n=e[Ic].getPlugin(oa);if(n){var i=n.plugin.context;i&&(t=Ml(i.telemetryTrace))}}return t}();if(t){t.setTraceId(fl());var n="_unknown_";r&&r.pathname&&(n=r.pathname+(r.hash||"")),t.setName(ma(e[$c](),n))}setTimeout(bind(this,v),e.autoRoutePVDelay)}}),y),d=!0)}(t,n,r,i)}}(S))}catch(t){throw e.setInitialized(!1),t}}},e._doTeardown=cr(e,"_pageViewManager",(function(){return r})),cr(e,"_pageViewPerformanceManager",(function(){return o})),cr(e,"_pageVisitTimeManager",(function(){return a})),cr(e,"_evtNamespace",(function(){return"."+y}))})),b}return(0,Xt.ne)(t,e),t.Version="2.8.11",t.getDefaultConfig=bu,t}(pc);ar Tu,ku=xu("application"),Su=xu("device"),Iu=xu("location"),Eu=xu("operation"),Lu=xu("session"),$u=xu("user"),Du=xu("cloud"),Au=xu("internal"),Ou=(Tu={applicationVersion:ku("ver"),applicationBuild:ku("build"),applicationTypeId:ku("typeId"),applicationId:ku("applicationId"),applicationLayer:ku("layer"),deviceId:Su("id"),deviceIp:Su("ip"),deviceLanguage:Su("language"),deviceLocale:Su("locale"),deviceModel:Su("model"),deviceFriendlyName:Su("friendlyName"),deviceNetwork:Su("network"),deviceNetworkName:Su("networkName"),deviceOEMName:Su("oemName"),deviceOS:Su("os"),deviceOSVersion:Su("osVersion"),deviceRoleInstance:Su("roleInstance"),deviceRoleName:Su("roleName"),deviceScreenResolution:Su("screenResolution"),deviceType:Su("type"),deviceMachineName:Su("machineName"),deviceVMName:Su("vmName"),deviceBrowser:Su("browser"),deviceBrowserVersion:Su("browserVersion"),locationIp:Iu("ip"),locationCountry:Iu("country"),locationProvince:Iu("province"),locationCity:Iu("city"),operationId:Eu("id"),operationName:Eu("name"),operationParentId:Eu("parentId"),operationRootId:Eu("rootId"),operationSyntheticSource:Eu("syntheticSource"),operationCorrelationVector:Eu("correlationVector"),sessionId:Lu("id"),sessionIsFirst:Lu("isFirst"),sessionIsNew:Lu("isNew"),userAccountAcquisitionDate:$u("accountAcquisitionDate"),userAccountId:$u("accountId"),userAgent:$u("userAgent"),userId:$u("id"),userStoreRegion:$u("storeRegion"),userAuthUserId:$u("authUserId"),userAnonymousUserAcquisitionDate:$u("anonUserAcquisitionDate"),userAuthenticatedUserAcquisitionDate:$u("authUserAcquisitionDate"),cloudName:Du("name"),cloudRole:Du("role"),cloudRoleVer:Du("roleVer"),cloudRoleInstance:Du("roleInstance"),cloudEnvironment:Du("environment"),cloudLocation:Du("location"),cloudDeploymentUnit:Du("deploymentUnit"),internalNodeName:Au("nodeName"),internalSdkVersion:Au("sdkVersion"),internalAgentVersion:Au("agentVersion"),internalSnippet:Au("snippet"),internalSdkSrc:Au("sdkSrc")},),Nu="user",Pu="device",_u="trace",Fu="web",Mu="app",Ru="os",Vu=new Ou,zu=Uu=Hu="duration",Bu="tags",ju="deviceType",qu="data",Gu="name",Wu="traceID",Ku="length",Xu="stringify",Yu="measurements",Zu="dataType",Ju="envelopeType",Qu="toString",ed="onLine",td="enqueue",nd="count",id="push",rd="emitLineDelimitedJson",od="clear",ad="batchPayloads",sd="markAsSent",ld="clearSent",cd="BUFFER_KEY",ud="SENT_BUFFER_KEY",dd="MAX_BUFFER_SIZE",fd="namePrefix",hd="maxBatchSizeInBytes",pd="triggerSend",gd="diagLog",vd="onunloadDisableBeacon",md="isBeaconApiDisabled",yd="_sender",bd="_senderConfig",wd="_buffer",Cd="enableSessionStorageBuffer",xd="samplingPercentage",Td="instrumentationKey",kd="endpointUrl",Sd="customHeaders",Id="disableXhr",Ed="onunloadDisableFetch",Ld="disableTelemetry",$d="baseType",Dd="sampleRate",Ad="convertUndefined",Od="_onError",Nd="_onPartialSuccess",Pd="_onSuccess",_d="itemsAccepted",Fd="isRetryDisabled",Md="setRequestHeader",Rd="maxBatchInterval",Vd="eventsSendRequest",zd="disableInstrumentationKeyValidation",Ud="getSamplingScore",Hd="baseType",Bd="baseData",jd="properties",qd="true";ction Xd(e,t,n,i){var r=new zu(e,i,t);Gd(r,"sampleRate",n[la]),(n[Bd]||{}).startTime&&(r.time=er(n[Bd].startTime)),r.iKey=n.iKey;var o=n.iKey.replace(/-/g,"");return r[Gu]=r[Gu].replace("{0}",o),function(e,t,n){var i=n[Bu]=n[Bu]||{},r=t.ext=t.ext||{},o=t[Bu]=t[Bu]||[],a=r.user;a&&(Gd(i,Vu.userAuthUserId,a.authId),Gd(i,Vu.userId,a.id||a.localId));var s=r.app;s&&Gd(i,Vu.sessionId,s.sesId);var l=r.device;l&&(Gd(i,Vu.deviceId,l.id||l.localId),Gd(i,Vu[ju],l.deviceClass),Gd(i,Vu.deviceIp,l.ip),Gd(i,Vu.deviceModel,l.model),Gd(i,Vu[ju],l[ju]));var c=t.ext.web;if(c){Gd(i,Vu.deviceLanguage,c.browserLang),Gd(i,Vu.deviceBrowserVersion,c.browserVer),Gd(i,Vu.deviceBrowser,c.browser);var u=n[qu]=n[qu]||{},d=u[Bd]=u[Bd]||{},f=d[jd]=d[jd]||{};Gd(f,"domain",c.domain),Gd(f,"isManual",c.isManual?qd:null),Gd(f,"screenRes",c.screenRes),Gd(f,"userConsent",c.userConsent?qd:null)}var h=r.os;h&&Gd(i,Vu.deviceOS,h[Gu]);var p=r.trace;p&&(Gd(i,Vu.operationParentId,p.parentID),Gd(i,Vu.operationName,ma(e,p[Gu])),Gd(i,Vu.operationId,p[Wu]));for(var g={},v=o[Ku]-1;v>=0;v--)Gi(o[v],(function(e,t){g[e]=t})),o.splice(v,1);Gi(o,(function(e,t){g[e]=t}));var m=(0,Xt.uc)((0,Xt.uc)({},i),g);m[Vu.internalSdkVersion]||(m[Vu.internalSdkVersion]="javascript:".concat(Zd.Version)),n[Bu]=xr(m)}(e,n,r),n[Bu]=n[Bu]||[],xr(r)}ar Zd={Version:"2.8.11"};r ef,tf=function(){function e(t,n){var i=[],r=!1;this._get=function(){return i},this._set=(0,Kt.Z)(e,this,()}return e.__ieDyn=1,e}(),nf=function(e){function t(n,i){var r=e.call(this,n,i)||this;return(0,Kt.Z)(t,r,(),r}return(0,Xt.ne)(t,e),t.__ieDyn=1,t}(tf),rf=function(e){function t(n,i){var r=e.call(this,n,i)||this,o=!1;return(0,Kt.Z)(t,r,(),r}return(0,Xt.ne)(t,e),t.BUFFER_KEY="AI_buffer",t.SENT_BUFFER_KEY="AI_sentBuffer",t.MAX_BUFFER_SIZE=2e3,t}(tf),of=function(){function e(t){(0,Kt.Z)(e,this,(function(e){function n(e,o){var a="__aiCircularRefCheck",s={};if(!e)return qo(t,1,48,"cannot serialize object because it is null or undefined",{name:o},!0),s;if(e[a])return qo(t,2,50,"Circular reference detected while serializing object",{name:o},!0),s;if(!e.aiDataContract){if("measurements"===o)s=r(e,"number",o);else if("properties"===o)s=r(e,"string",o);else if("tags"===o)s=r(e,"string",o);else if(Ki(e))s=i(e,o);else{qo(t,2,49,"Attempting to serialize an object which does not implement ISerializable",{name:o},!0);try{So()[Xu](e),s=e}catch(e){qo(t,1,48,e&&ji(e[Qu])?e[Qu]():"Error serializing object",null,!0)}}return s}return e[a]=!0,Gi(e.aiDataContract,(function(r,a){var l=ji(a)?1&a():1&a,c=ji(a)?4&a():4&a,u=2&a,d=void 0!==e[r],f=Bi(e[r])&&null!==e[r];if(!l||d||u){if(!c){var h;void 0!==(h=f?u?i(e[r],r):n(e[r],r):e[r])&&(s[r]=h)}}else qo(t,1,24,"Missing required field specification. The field is required but not present on source",{field:r,name:o})})),delete e[a],s}serialize=))}return e.__ieDyn=1,e}(),af=),sf=lf=);unction uf(){var e,t;return(e={endpointUrl:)[rd]=function(){return!1},e[Rd]=function(){return 15e3},e[hd]=function(){return 102400},e[Ld]=function(){return!1},e[Cd]=function(){return!0},e[Fd]=function(){return!1},e[md]=function(){return!0},e[Id]=function(){return!1},e[Ed]=function(){return!1},e[vd]=function(){return!1},e[Td]=function(){return t},e[fd]=function(){return t},e[xd]=function(){return 100},e[Sd]=function(){},e[Ad]=function(){return t},e.eventsLimitInMem=function(){return 1e4},e}var df=((ef={})[Ea.dataType]=Jd,ef[La.dataType]=ef[Aa.dataType]=ef[Oa.dataType]=ef[Ga.dataType]=ef[Da.dataType]=ef[Rl.dataType]=ef),ff=function(e){function t(){var n,i,r,o,a,s,l,c=e.call(this)||this;c.priority=1001,c.identifier=aa,c._senderConfig=uf();var u,d,f,h,p=0;return(0,Kt.Z)(t,c,(function(e,g){function v(t,i,r,o,a,s){var l=null;if(e._appId||(l=S(s))&&l.appId&&(e._appId=l.appId),(t<200||t>=300)&&0!==t){if((301===t||307===t||308===t)&&!m(r))return void e[Od](i,a);!e[bd][Fd]()&&$(t)?(I(i),qo(e[gd](),2,40,". Response code "+t+". Will retry to send "+i[Ku]+" items.")):e[Od](i,a)}else f&&!f.isOnline()?e[bd][Fd]()||(I(i,10),qo(e[gd](),2,40,". Offline - Response Code: ".concat(t,". Offline status: ").concat(!f.isOnline(),". Will retry to send ").concat(i.length," items."))):(m(r),206===t?(l||(l=S(s)),l&&!e[bd][Fd]()?e[Nd](i,l):e[Od](i,a)):(n=0,e[Pd](i,o)))}function m(t){return!(s>=10||zi(t)||""===t||t===e[bd][kd]()||(e[bd][kd]=function(){return t},++s,0))}yd]=null,e[wd]=null,e._appId=null,e._sample=null,l={},f=null,n=0,i=null,r=!1,o=null,a=null,s=0,p=0,u=null,d=null,h=null}N(),e.pause=e.resume=e.flush=e.onunloadFlush=e.addHeader=function(e,t){l[e]=t},e.initialize=function(t,r,o,l){e.isInitialized()&&qo(e[gd](),1,28,"Sender is already initialized"),g.initialize(t,r,o,l);var p=e._getTelCtx(),v=e.identifier;a=new of(r.logger),n=0,i=null,e[yd]=null,s=0;var m=e[gd]();h=il(_s("Sender"),r.evtNamespace&&r.evtNamespace()),f=function(e){var t=yo(),n=wo(),i=!1,r=!0,o=il(_s("OfflineListener"),e);try{if(s(vo())&&(i=!0),t){var a=t.body||t;a.ononline&&s(a)&&(i=!0)}i&&n&&!zi(n[ed])&&(r=n[ed])}catch(e){i=!1}unction l(){r=!0}eturn{isOnline:isListening:function(){return i},unload:}(h),Gi(uf(),(),e._buffer=e[bd][Cd]()&&ta()?new rf(m,e[bd]):new nf(m,e[bd]),e._sample=new lf(e[bd][xd](),m),function(e){return!(zi(e[zd])||!e[zd])||new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$").test(e[Td])}(t)||qo(m,1,100,"Invalid Instrumentation key "+t[Td]),!Nl(e._senderConfig.endpointUrl())&&e._senderConfig.customHeaders()&&e._senderConfig.customHeaders()[Ku]>0&&tr(e[bd][Sd](),();var y=e[bd],b=null;!y[Id]()&&Ao()?b=A:!y[Id]()&&Oo()&&(b=C),!b&&Do()&&(b=T),u=b||C,!y[md]()&&$o()&&(b=w),e[yd]=b||C,d=!y[Ed]()&&Do(!0)?x:$o()?w:!y[Id]()&&Ao()?A:!y[Id]()&&Oo()?C:u},e.processTelemetry=function(n,i){var r,o=(i=e._getTelCtx(i))[gd]();try{if(e[bd][Ld]())return;if(!n)return void qo(o,1,7,"Cannot send empty telemetry");if(n.baseData&&!n[$d])return void qo(o,1,70,"Cannot send telemetry without baseData and baseType");if(n[$d]||(n[$d]="EventData"),!e[yd])return void qo(o,1,28,"Sender was not initialized");if(r=n,!e._sample.isSampledIn(r))return void qo(o,2,33,"Telemetry item was sampled out and not sent",{SampleRate:e._sample[Dd]});n[la]=e._sample[Dd];var s=e[bd][Ad]()||void 0,l=n.iKey||e[bd][Td](),c=t.constructEnvelope(n,l,o,s);if(!c)return void qo(o,1,47,"Unable to create an AppInsights envelope");var u=!1;if(n[Bu]&&n[Bu][ca]&&(tr(n[Bu][ca],(),delete n[Bu][ca]),u)return;var d=a.serialize(c),f=e[wd];f.size()+d[Ku]>e[bd][hd]()&&e[pd](!0,null,10),f[td](d),E()}catch(e){qo(o,2,12,"Failed adding telemetry to the sender's buffer, some telemetry will be lost: "+hr(e),{exception:Lo(e)})}e.processNext(n,i)},e._xhrReadyStateChange=e[pd]=function(t,n,i){if(void 0===t&&(t=!0),!r)try{var o=e[wd];if(e[bd][Ld]())o[od]();else{if(o[nd]()>0){var a=o.getItems();!function(t,n){var i,r=(i="getNotifyMgr",e.core[i]?e.core[i]():e.core._notificationManager);if(r&&r[Vd])try{r[Vd](t,n)}catch(t){qo(e[gd](),1,74,"send request notification failed: "+hr(t),{exception:Lo(t)})}}(i||0,t),n?n.call(c,a,t):e[yd](a,t)}new Date}L()}catch(t){var s=Eo();(!s||s>9)&&qo(e[gd](),1,40,"Telemetry transmission failed, some telemetry will be lost: "+hr(t),{exception:Lo(t)})}},e._doTeardown=e[Od]=function(t,n,i){qo(e[gd](),2,26,"Failed to send telemetry.",{message:n}),e._buffer[ld](t)},e[Nd]=e[Pd]=e._xdrOnLoad=)),c}return(0,Xt.ne)(t,e),t.constructEnvelope=function(e,t,n,i){var r;return r=t===e.iKey||zi(t)?e:(0,Xt.uc)((0,Xt.uc)({},e),{iKey:t}),(df[r.baseType]||Jd)(n,r,i)},t}(pc);var hf=Wo({Verbose:0,Information:1,Warning:2,Error:3,Critical:4}),pf=500;function gf(e,t,n){t&&Ki(t)&&t[ln]>0&&(tr(t=t.sort((function(e,t){return e[li]-t[li]})),(function(e){e[li]<pf&&yr("Channel has invalid priority - "+e[tn])})),e[nn]({queue:dr(t),chain:ic(t,n[on],n)}))}var vf=function(e){function t(){var n,i,r=e.call(this)||this;function o(){n=0,i=[]}return r.identifier="TelemetryInitializerPlugin",r.priority=199,o(),(0,Kt.Z)(t,r,(function(e,t){e.addTelemetryInitializer=function(e){var t={id:n++,fn:e};return i[nn](t),{remove:function(){tr(i,(function(e,n){if(e.id===t.id)return i[bn](n,1),-1}))}}},e[si]=function(t,n){for(var r=!1,o=i[ln],a=0;a<o;++a){var s=i[a];if(s)try{if(!1===s.fn[Rn](null,[t])){r=!0;break}}catch(e){qo(n[En](),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+hr(e),{exception:Lo(e)},!0)}}r||e[un](t,n)},e[kn]=function(){o()}})),r}return(0,Xt.ne)(t,e),t.__ieDyn=1,t}(pc),mf="Plugins must provide initialize method",yf="_notificationManager",bf="SDK is still unloading...",wf={loggingLevelConsole:1};function Cf(e,t){return new Bl(t)}function xf(e,t){var n=!1;return tr(t,(function(t){if(t===e)return n=!0,-1})),n}var Tf=function(){function e(){var t,n,i,r,o,a,s,l,c,u,d,f,h,p,g,v,m,y,b,w,C=0;(0,Kt.Z)(e,this,(function(e){function x(){n=!1,t=Tr(!0,{},wf),e[on]=t,e[sn]=new Bo(t),e[yn]=[],g=new vf,i=[],r=null,o=null,a=null,s=null,l=null,u=null,c=[],d=null,f=null,h=null,p=!1,v=null,m=_s("AIBaseCore",!0),y=fc(),w=null}unction k(n){var i=function(e,t,n){var i,r=[],o={};return tr(n,(function(t){(zi(t)||zi(t[Jt]))&&yr(mf);var n=t[li],i=t[tn];t&&n&&(zi(o[n])?o[n]=i:Go(e,"Two extensions have same priority #"+n+" - "+o[n]+", "+i)),(!n||n<500)&&r[nn](t)})),(i={all:n})[ii]=r,i}(e[sn],0,c);u=i[ii],l=null;var r=i.all;if(h=dr(function(e,t,n){var i=[];if(e&&tr(e,(function(e){return gf(i,e,n)})),t){var r=[];tr(t,(function(e){e[li]>pf&&r[nn](e)})),gf(i,r,n)}return i}(f,r,e)),d){var o=nr(r,d);-1!==o&&r[bn](o,1),-1!==(o=nr(u,d))&&u[bn](o,1),d._setQueue(h)}else d=function(e,t){function n(){return ec(null,t[on],t,null)}function i(e,t,n,i){var r=e?e[ln]+1:1;function o(){0==--r&&(i&&i(),i=null)}r>0&&tr(e,(function(e){if(e&&e.queue[ln]>0){var i=e.chain,a=t[$n](i);a[gn](o),n(a)}else r--})),o()}var r=!1,o={identifier:"ChannelControllerPlugin",priority:pf,initialize:function(t,n,i,o){r=!0,tr(e,(function(e){e&&e.queue[ln]>0&&Kl(ec(e.chain,t,n),i)}))},isInitialized:function(){return r},processTelemetry:function(t,r){i(e,r||n(),(function(e){e[un](t)}),(function(){r[un](t)}))},update:function(t,n){var r=n||{reason:0};return i(e,t,(function(e){e[un](r)}),(function(){t[un](r)})),!0},pause:function(){i(e,n(),(function(e){e.iterate((function(e){e.pause&&e.pause()}))}),null)},resume:function(){i(e,n(),(function(e){e.iterate((function(e){e.resume&&e.resume()}))}),null)},teardown:function(t,n){var o=n||{reason:0,isAsync:!1};return i(e,t,(function(e){e[un](o)}),(function(){t[un](o),r=!1})),!0},getChannel:function(t){var n=null;return e&&e[ln]>0&&tr(e,(function(e){if(e&&e.queue[ln]>0&&(tr(e.queue,(function(e){if(e[tn]===t)return n=e,-1})),n))return-1})),n},flush:function(t,r,o,a){var s=1,l=!1,c=null;function u(){s--,l&&0===s&&(c&&(clearTimeout(c),c=null),r&&r(l),r=null)}return a=a||5e3,i(e,n(),(function(e){e.iterate((function(e){if(e[mn]){s++;var n=!1;e[mn](t,(function(){n=!0,u()}),o)||n||(t&&null==c?c=setTimeout((function(){c=null,u()}),a):u())}}))}),(function(){l=!0,u()})),!0},_setQueue:function(t){e=t}};return o}(h,e);r[nn](d),u[nn](d),e[yn]=Xl(r),d[Jt](t,e,r),Kl(T(),r),e[yn]=dr(Xl(u||[])).slice(),n&&n)}function S(t){var n,i=null,r=null;return tr(e[yn],(function(e){if(e[tn]===t&&e!==d&&e!==g)return r=e,-1})),!r&&d&&(r=d.getChannel(t)),r&&((n={plugin:r})[_n]=function(e){Wl(r)[oi]=!e},n.isEnabled=function(){var e=Wl(r);return!e[wn]&&!e[oi]},n.remove=function(e,t){var n;void 0===e&&(e=!0);var i=[r],o=((n={reason:1})[Tn]=e,n);E(i,o,(function(e){e&&k({reason:32,removed:i}),t&&t(e)}))},i=n),i}function I(){if(!l){var n=(u||[]).slice();-1===nr(n,g)&&n[nn](g),l=ic(Xl(n),t,e)}return l}nction $(e,t,n,i){return d?d[mn](e,t,n||6,i):(t&&t(!1),!0)}(),e[rn]=function(){return n},e[Jt]=function(i,o,s,l){var u,d;p&&yr(bf),e[rn]()&&yr("Core should not be initialized more than once"),t=i||{},e[on]=t,zi(i[an])&&yr("Please provide instrumentation key"),r=l,e[yf]=l,!0===(d=vr(t.disableDbgExt))&&b&&(r[hn](b),b=null),r&&!b&&!0!==d&&(b=Ro(t),r[fn](b)),!(u=vr(t.enablePerfMgr))&&a&&(a=null),u&&gr(t,ri,Cf),gr(t,ai,{}).NotificationManager=r,s&&(e[sn]=s);var g=gr(t,"extensions",[]);(c=[])[nn].apply(c,(0,Xt.$h)((0,Xt.$h)([],o,!1),g,!1)),f=gr(t,ni,[]),k(null),h&&0!==h[ln]||yr("No "+ni+" available"),n=!0,e.releaseQueue()},e.getTransmissionControls=e.track=e[dn]=T,e[en]=function(){return r||(r=function(){var e;return(0,Zt.pu)(((e={})[fn]=function(e){},e[hn]=function(e){},e[ci]=function(e){},e[ui]=function(e,t){},e[di]=e))}(),e[yf]=r),r},e[fn]=function(e){r&&r[fn](e)},e[hn]=function(e){r&&r[hn](e)},e.getCookieMgr=e.setCookieMgr=function(e){s=e},e[gi]=e.setPerfMgr=function(e){o=e},e.eventCnt=function(){return i[ln]},e.releaseQueue=e.pollInternalLogs=e[pn]=Cr(e,(function(){return g}),["addTelemetryInitializer"]),e.unload=e[vn]=S,e.addPlugin=e.evtNamespace=function(){return m},e[mn]=$,e.getTraceCtx=e.setTraceCtx=wr(e,"addUnloadCb",(function(){return y}),"add")}))}return e.__ieDyn=1,e}();ar Sf=function(){function e(t){this.listeners=[];var n=!!(t||{}).perfEvtsSendAll;(0,Kt.Z)(e,this,()}return e.__ieDyn=1,e}(),If=function(e){function t(){var n=e.call(this)||this;return(0,Kt.Z)(t,n,(),n}return(0,Xt.ne)(t,e),t.__ieDyn=1,t}(Tf),Ef="duration",Lf="properties",$f="requestUrl",Df="inst",Af="length",Of="traceID",Nf="spanID",Pf="traceFlags",_f="context",Ff="aborted",Mf="traceId",Rf="spanId",Vf="core",zf="includeCorrelationHeaders",Uf="canIncludeCorrelationHeader",Hf="getAbsoluteUrl",Bf="headers",jf="requestHeaders",qf="appId",Gf="setRequestHeader",Wf="trackDependencyDataInternal",Kf="distributedTracingMode",Xf="startTime",Yf="toLowerCase",Zf="status",Jf="statusText",Qf="headerMap",eh="openDone",th="sendDone",nh="requestSentTime",ih="abortDone",rh="getTraceId",oh="getTraceFlags",ah="method",sh="errorStatusText",lh="stateChangeAttached",ch="responseFinishedTime",uh="CreateTrackItem",dh="response",fh="getAllResponseHeaders",hh="getPartAProps",ph="getCorrelationContext",gh="perfMark",vh="name",mh="perfTiming",yh="ajaxTotalDuration",bh="eventTraceCtx"; Th=kh=function(){function e(t,n,i,r){var o,a=this,s=i;a[gh]=null,a.completed=!1,a.requestHeadersSize=null,a[jf]=null,a.responseReceivingDuration=null,a.callbackDuration=null,a[yh]=null,a[Ff]=0,a.pageUrl=null,a[$f]=null,a.requestSize=0,a[ah]=null,a[Zf]=null,a[nh]=null,a.responseStartedTime=null,a[ch]=null,a.callbackFinishedTime=null,a.endTime=null,a.xhrMonitoringState=new Th,a.clientFailure=0,a[Of]=t,a[Nf]=n,a[Pf]=null==r?void 0:r.getTraceFlags(),a[bh]=r?((o={})[Mf]=r[rh](),o[Rf]=r.getSpanId(),o[Pf]=r[oh](),o):null,(0,Kt.Z)(e,a,(function(e){e.getAbsoluteUrl=function(){return e[$f]?(t=e[$f],(i=$l(t))&&(n=i.href),n):null;var t,n,i},e.getPathName=e[uh]=function(t,n,i){var r;if(e.ajaxTotalDuration=Math.round(1e3*Fl(e.requestSentTime,e.responseFinishedTime))/1e3,e[yh]<0)return null;var o=((r={id:"|"+e[Of]+"."+e[Nf],target:e[Hf]()})[vh]=e.getPathName(),r.type=t,r[Xf]=null,r.duration=e[yh],r.success=+e[Zf]>=200&&+e[Zf]<400,r.responseCode=+e[Zf],r[Lf]={HttpMethod:e[ah]},r),a=o[Lf];if(e[Ff]&&(a[Ff]=!0),e[nh]&&(o[Xf]=new Date,o[Xf].setTime(e[nh])),function(e,t){var n=e[mh],i=t[Lf]||{},r=0,o="name",a="Start",s="End",l="domainLookup",c="connect",u="redirect",d="request",f="response",h="startTime",p=l+a,g=l+s,v=c+a,m=c+s,y=d+a,b=d+s,w=f+a,C=f+s,x=u+a,T=u=s,k="transferSize",S="encodedBodySize",I="decodedBodySize",E="serverTiming";if(n){r|=Ch(i,u,n,x,T),r|=Ch(i,l,n,p,g),r|=Ch(i,c,n,v,m),r|=Ch(i,d,n,y,b),r|=Ch(i,f,n,w,C),r|=Ch(i,"networkConnect",n,h,m),r|=Ch(i,"sentRequest",n,y,C);var L=n[Ef];L||(L=wh(n,h,C)||0),r|=xh(i,Ef,L),r|=xh(i,"perfTotal",L);var $=n[E];if($){var D={};tr($,(),r|=xh(i,E,D)}r|=xh(i,k,n[k]),r|=xh(i,S,n[S]),r|=xh(i,I,n[I])}else e[gh]&&(r|=xh(i,"missing",e.perfAttempts));r&&(t[Lf]=i)}(e,o),n&&lr(e.requestHeaders)[Af]>0&&(a[jf]=e[jf]),i){var s=i();if(s){var l=s.correlationContext;if(l&&(o.correlationContext=l),s[Qf]&&lr(s.headerMap)[Af]>0&&(a.responseHeaders=s[Qf]),e[sh])if(e[Zf]>=400){var c=s.type;""!==c&&"text"!==c||(a.responseText=s.responseText?s[Jf]+" - "+s.responseText:s[Jf]),"json"===c&&(a.responseText=s.response?s[Jf]+" - "+JSON.stringify(s[dh]):s[Jf])}else 0===e[Zf]&&(a.responseText=s[Jf]||"")}}return o},e[hh]=function(){var t,n=null,i=e[bh];if(i&&(i[Mf]||i[Rf])){var r=(n={})[_u]=((t={})[Of]=i[Mf],t.parentID=i[Rf],t);zi(i[Pf])||(r[Pf]=i[Pf])}return n}}))}return e.__ieDyn=1,e}(),Sh="ai.ajxmn.",Ih="diagLog",Eh="ajaxData",Lh="fetch",$h="Failed to monitor XMLHttpRequest",Dh=", monitoring data for this ajax call ",Ah=Dh+"may be incorrect.",Oh=Dh+"won't be sent.",Nh="Failed to get Request-Context correlation header as it may be not included in the response or not accessible.",Ph="Failed to add custom defined request context as configured call back may missing a null check.",_h="Failed to calculate the duration of the ",Fh=0,Mh=null;unction Vh(e,t,n,i,r){qo(e[Ih](),1,t,n,i,r)}h="*.blob.core.",Gh=ur([qh+"windows.net",qh+"chinacloudapi.cn",qh+"cloudapi.de",qh+"usgovcloudapi.net"]),Wh=[/https:\/\/[^\/]*(\.pipe\.aria|aria\.pipe|events\.data|collector\.azure)\.[^\/]+\/(OneCollector\/1|Collector\/3)\.0/i];r Yh=function(e){function t(){var n,i,r,o,a,s,l,c,u,d,f,h,p,g,v,m,y,b,w,C,x,T,k,S=e.call(this)||this;return S.identifier=t.identifier,S.priority=120,(0,Kt.Z)(t,S,(function(e,S){var I=S._addHook;n P(t){try{var n=t[fh]();if(null!==n&&-1!==Hh(n[Yf](),Sl[8])){var i=t.getResponseHeader(Sl[0]);return Pl[ph](i)}}catch(n){zh(e,18,Nh,{ajaxDiagnosticsMessage:Rh(t),exception:Lo(n)})}}ction R(t,n,i,r,o,s,l){&&(o[ch]=_l(),o[Zf]=n,F(Lh,o,(function(){var t,l=o[uh]("Fetch",a,s);try{w&&(t=w({status:n,request:i,response:r}))}catch(t){zh(e,104,Ph)}if(l){void 0!==t&&(l[Lf]=(0,Xt.uc)((0,Xt.uc)({},l.properties),t));var u=o[hh]();z(k,e[Vf],o,l,null,u)}else c(14,null,{requestSentTime:o[nh],responseFinishedTime:o[ch]})}),())}unction z(t,n,i,r,o,a){var s=!0;t[Af]>0&&(s=jh(n,t,{item:r,properties:o,sysProperties:a,context:i?i[_f]:null,aborted:!!i&&!!i[Ff]},"initializer")),s&&e[Wf](r,o,a)}E(),e.initialize=function(r,l,v,x){var T;e.isInitialized()||(S.initialize(r,l,v,x),C=il(_s("ajax"),l&&l.evtNamespace&&l.evtNamespace()),function(n){var i=ec(null,n,e[Vf]);o=Xh(),Gi(Kh(),();var r=o[Kf];if(a=o.enableRequestHeaderTracking,s=o.enableAjaxErrorStatusText,h=o.enableAjaxPerfTracking,p=o.maxAjaxCallsPerView,g=o.enableResponseHeaderTracking,b=[].concat(o.excludeRequestFromAutoTrackingPatterns||[],!1!==o.addIntEndpoints?Wh:[]),w=o.addRequestContext,d=0===r||1===r,u=1===r||2===r,h){var l=n.instrumentationKey||"unkwn";f=l[Af]>5?Sh+l.substring(l[Af]-5)+".":Sh+l+"."}m=!!o.disableAjaxTracking,y=!!o.disableFetchTracking}(r),!function(e){var t=!1;if(Oo()){var n=XMLHttpRequest[Yt.hB];t=!(zi(n)||zi(n.open)||zi(n.send)||zi(n.abort))}var i=Eo();if(i&&i<9&&(t=!1),t)try{(new XMLHttpRequest)[Eh]={};var r=XMLHttpRequest[Yt.hB].open;XMLHttpRequest[Yt.hB].open=r}catch(n){t=!1,Vh(e,15,"Failed to enable XMLHttpRequest monitoring, extension is not supported",{exception:Lo(n)})}return t}(e)||m||i||($(XMLHttpRequest,"open",{ns:C,req:function(t,n,i,r){if(!m){var o=t[Df],l=o[Eh];!D(o,i)&&A(o,!0)&&(l&&l.xhrMonitoringState[eh]||o,n,i,r),function(t){t[Eh].xhrMonitoringState[lh]=rl(t,"readystatechange",(function(){try{t&&4===t.readyState&&A(t)&&function(t){var n=t[Eh];function i(n,i){var r=i||{};r.ajaxDiagnosticsMessage=Rh(t),n&&(r.exception=Lo(n)),zh(e,14,_h+"ajax call"+Oh,r)}n[ch]=_l(),n[Zf]=t[Zf],F("xmlhttprequest",n,(function(){try{var r=n[uh]("Ajax",a,(),o=void 0;try{w&&(o=w({status:t[Zf],xhr:t}))}catch(t){zh(e,104,Ph)}if(r){void 0!==o&&(r[Lf]=(0,Xt.uc)((0,Xt.uc)({},r.properties),o));var s=n[hh]();z(k,e[Vf],n,r,null,s)}else i(null,{requestSentTime:n[nh],responseFinishedTime:n[ch]})}finally{try{t[Eh]=null}catch(e){}}}),()}(t)}catch(i){var n=Lo(i);n&&-1!==Hh(n[Yf](),"c00c023f")||Vh(e,16,$h+" 'readystatechange' event handler"+Ah,{ajaxDiagnosticsMessage:Rh(t),exception:n})}}),C)}(o))}},hkErr:Uh(e,15,$h+".open"+Ah)}),$(XMLHttpRequest,"send",{ns:C,req:hkErr:Uh(e,17,$h+Ah)}),$(XMLHttpRequest,"abort",{ns:C,req:hkErr:Uh(e,13,$h+".abort"+Ah)}),$(XMLHttpRequest,"setRequestHeader",{ns:C,req:hkErr:Uh(e,71,$h+".setRequestHeader"+Ah)}),i=!0),function(){var t,r=!(t=(0,Zt.Rd)())||zi(t.Request)||zi(t.Request[Yt.hB])||zi(t[Lh])?null:t[Lh];if(r){var o=(0,Zt.Rd)(),l=r.polyfill;y||n?l&&I(uc(o,Lh,{ns:C,req:)):(I(uc(o,Lh,{ns:C,req:function(t,r,o){var c;if(!y&&n&&!D(null,r,o)&&(!l||!i)){var u=t.ctx();c=function(t,n){var i,r=O(),o=r&&r[rh]()||fl(),l=fl().substr(0,16),c=new kh(o,l,e[Ih](),null===(i=e.core)||void 0===i?void 0:i.getTraceCtx());c[Pf]=r&&r[oh](),c[nh]=_l(),c[sh]=s,t instanceof Request?c[$f]=t?t.url:"":c[$f]=t;var u="GET";n&&n[ah]?u=n[ah]:t&&t instanceof Request&&(u=t[ah]),c[ah]=u;var d={};return a&&new Headers((n?n[Bf]:0)||t instanceof Request&&t[Bf]||{}).forEach((function(e,t){L(t)&&(d[t]=e)})),c[jf]=d,_(Lh,c),c}(r,o);var d=e[zf](c,r,o);d!==o&&t.set(1,d),u.data=c}},rsp:function(e,t){if(!y){var n=e.ctx().data;n&&(e.rslt=e.rslt.then((function(e){return R(0,(e||{})[Zf],t,e,n,(),e})).catch(())}},hkErr:Uh(e,15,"Failed to monitor Window.fetch"+Ah)},!0,))),n=!0),l&&(o[Lh].polyfill=l)}}(),(T=e[Vf].getPlugin(oa))&&(c=T.plugin[_f]))},e._doTeardown=function(){E()},e.trackDependencyData=e[zf]=function(t,n,i,s){var l=e._currentWindowHost||r;if(T,e[Vf],t,s,n,i),n){if(Pl[Uf](o,t[Hf](),l)){i||(i={});var f=new Headers(i[Bf]||n instanceof Request&&n[Bf]||{});if(d){var h="|"+t[Of]+"."+t[Nf];f.set(Sl[3],h),a&&(t[jf][Sl[3]]=h)}if((g=o[qf]||c&&c[qf]())&&(f.set(Sl[0],Sl[2]+g),a&&(t[jf][Sl[0]]=Sl[2]+g)),u){zi(v=t[Pf])&&(v=1);var p=xl(bl(t[Of],t[Nf],v));f.set(Sl[4],p),a&&(t[jf][Sl[4]]=p)}i[Bf]=f}return i}if(s){var g,v;if(Pl[Uf](o,t[Hf](),l))if(d&&(h="|"+t[Of]+"."+t[Nf],s[Gf](Sl[3],h),a&&(t[jf][Sl[3]]=h)),(g=o[qf]||c&&c[qf]())&&(s[Gf](Sl[0],Sl[2]+g),a&&(t[jf][Sl[0]]=Sl[2]+g)),u)zi(v=t[Pf])&&(v=1),p=xl(bl(t[Of],t[Nf],v)),s[Gf](Sl[4],p),a&&(t[jf][Sl[4]]=p);return s}},e[Wf]=function(t,n,i){if(-1===p||l<p){2!==o[Kf]&&1!==o[Kf]||"string"!=typeof t.id||"."===t.id[t.id[Af]-1]||(t.id+="."),zi(t[Xf])&&(t[Xf]=new Date);var r=Ia(t,Rl.dataType,Rl.envelopeType,e[Ih](),n,i);e[Vf].track(r)}else l===p&&Vh(e,55,"Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.",!0);++l},e.addDependencyListener=function(e){return Bh(T,x++,e)},e.addDependencyInitializer=)),S}return(0,Xt.ne)(t,e),t.prototype.processTelemetry=t.prototype.addDependencyInitializer=function(e){return null},t.identifier="AjaxDependencyPlugin",t.getDefaultConfig=Kh,t.getEmptyConfig=Xh,t}(pc),Zh=function(){},Jh=Qh="sessionManager",ep="update",tp="isUserCookieSet",np="isNewUser",ip="getTraceCtx",rp="telemetryTrace",op="applySessionContext",ap="applyApplicationContext",sp="applyDeviceContext",lp="applyOperationContext",cp="applyUserContext",up="applyOperatingSystemContxt",dp="applyLocationContext",fp="applyInternalContext",hp="accountId",pp="sdkExtension",gp="getSessionId",vp="namePrefix",mp="sessionCookiePostfix",yp="userCookiePostfix",bp="idLength",wp="getNewId",Cp="length",xp="automaticSession",Tp="authenticatedId",kp="sessionExpirationMs",Sp="sessionRenewalMs",Ip="config",Ep="acquisitionDate",Lp="renewalDate",$p="cookieDomain",Dp="join",Ap="cookieSeparator",Op="authUserCookieName",Np=Pp=function(){},_p=function(){},Fp=function(){function e(t,n){var i,r,o=Ho(n),a=fs(n);(0,Kt.Z)(e,this,(function(n){t||(t={}),ji(t[kp])||(t[kp]=function(){return e.acquisitionSpan}),ji(t[Sp])||(t[Sp]=function(){return e.renewalSpan}),n[Ip]=t;var s=n.config[mp]&&n[Ip][mp]()?n.config[mp]():n.config[vp]&&n[Ip][vp]()?n[Ip][vp]():"";unction c(e,t){var o=e[Ep];e[Lp]=t;var s,l=n[Ip],c=l[Sp](),u=o+l[kp]()-t,d=[e.id,o,t];s=u<c?u/1e3:c/1e3;var f=l[$p]?l[$p]():null;a.set(i(),d.join("|"),l[kp]()>0?s:null,f),r=t}i=n[xp]=new _p,n[ep]=function(){var t=fr(),s=!1,u=n[xp];u.id||(s=!function(e,t){var n=!1,r=a.get(i());if(r&&ji(r.split))n=l(e,r);else{var s=function(e,t){var n=Zo();if(null!==n)try{return n.getItem(t)}catch(t){Xo=!1,qo(e,2,1,"Browser failed read of local storage. "+hr(t),{exception:Lo(t)})}return null}(o,i());s&&(n=l(e,s))}return n||!!e.id}(u));var d=n.config[kp]();if(!s&&d>0){var f=n.config[Sp](),h=t-u[Ep],p=t-u[Lp];s=(s=(s=h<0||p<0)||h>d)||p>f}s?t):(!r||t-r>e.cookieUpdateInterval)&&c(u,t)},n.backup=function(){var e,t,r,a=n[xp];e=a.id,t=a[Ep],r=a[Lp],o,i(),[e,t,r][Dp]("|"))}}))}return e.acquisitionSpan=864e5,e.renewalSpan=18e5,e.cookieUpdateInterval=6e4,e}(),Mp=ar Vp=function(){function e(t,n){this.isNewUser=!1,this.isUserCookieSet=!1;var i,r=Ho(n),o=fs(n);(0,Kt.Z)(e,this,(function(n){n[Ip]=t;var a=n.config[yp]&&n[Ip][yp]()?n[Ip][yp]():"";i=var s=o.get(i());if(s){n[np]=!1;var l=s.split(e[Ap]);l[Cp]>0&&(n.id=l[0],n[tp]=!!n.id)}!n.id){n.id=c(),d(u(n.id)[Dp](e[Ap]));var f=t[vp]&&t[vp]()?t[vp]()+"ai_session":"ai_session";!r,f)}n[hp]=t[hp]?t[hp]():void 0;var h=o.get(e[Op]);if(h){var p=(h=decodeURI(h)).split(e[Ap]);p[0]&&(n[Tp]=p[0]),p[Cp]>1&&p[1]&&(n[hp]=p[1])}n.setAuthenticatedUserContext=n.clearAuthenticatedUserContext=n[ep]=))}return e.cookieSeparator="|",e.userCookieName="ai_user",e.authUserCookieName="ai_authUser",e}(),zp="ext",Up="tags";ar Bp=function(){function e(t,n,i){var r=this,o=t.logger;this.appId=function(){return null},this[gp]=function(){return null},(0,Kt.Z)(e,this,(function(e){if(e.application=new Zh,e.internal=new Np(n),go()){e[Qh]=new Fp(n,t),e.device=new Jh,e.location=new Pp,e.user=new Vp(n,t);var a,s=void 0,l=void 0;i&&(s=i.getTraceId(),l=i.getSpanId(),a=i.getName()),e[rp]=new Mp(s,l,a,o),e.session=new _p}e[gp]=e[op]=function(t,n){pr(gr(t.ext,Mu),"sesId",e[gp](),Yi)},e[up]=e[ap]=e[sp]=function(t,n){var i=e.device;if(i){var r=gr(gr(t,zp),Pu);pr(r,"localId",i.id,Yi),pr(r,"ip",i.ip,Yi),pr(r,"model",i.model,Yi),pr(r,"deviceClass",i.deviceClass,Yi)}},e[fp]=function(t,n){var i=e.internal;if(i){var r=gr(t,Up);pr(r,Vu.internalAgentVersion,i.agentVersion,Yi),pr(r,Vu.internalSdkVersion,i.sdkVersion,Yi),t.baseType!==Uo.dataType&&t.baseType!==Aa.dataType||(pr(r,Vu.internalSnippet,i.snippetVer,Yi),pr(r,Vu.internalSdkSrc,i.sdkSrc,Yi))}},e[dp]=e[lp]=function(t,n){var i=e[rp];if(i){var r=gr(gr(t,zp),_u,{traceID:void 0,parentID:void 0});pr(r,"traceID",i.traceID,Yi,zi),pr(r,"name",i.name,Yi,zi),pr(r,"parentID",i.parentID,Yi,zi)}},e.applyWebContext=function(e,t){var n=r.web;n&&pr(gr(e,zp),Fu,n)},e[cp]=function(t,n){var i=e.user;if(i){pr(gr(t,Up,[]),Vu.userAccountId,i[hp],Yi);var r=gr(gr(t,zp),Nu);pr(r,"id",i.id,Yi),pr(r,"authId",i[Tp],Yi)}},e.cleanUp=function(e,t){var n=e.ext;n&&(Hp(n,Pu),Hp(n,Nu),Hp(n,Fu),Hp(n,Ru),Hp(n,Mu),Hp(n,_u))}}))}return e.__ieDyn=1,e}(),jp=function(e){function t(){var n,i,r,o=e.call(this)||this;return o.priority=110,o.identifier=oa,(0,Kt.Z)(t,o,(function(e,o){(),e.initialize=function(a,s,l,c){o.initialize(a,s,l,c),function(o){var a=e.identifier,s=e.core,l=ec(null,o,s),c=t.getDefaultConfig();n=n||{},Gi(c,(),r=s[ip](!1),e.context=new Bp(s,n,r),i=Ml(e.context[rp],r),s.setTraceCtx(i),e.context.appId=e._extConfig=n}(a)},e.processTelemetry=function(t,n){if(zi(t));else{n=e._getTelCtx(n),t.name===Aa.envelopeType&&n.diagLog().resetInternalMessageCount();var i=e.context||{};i.session&&"string"!=typeof e.context.session.id&&i[Qh]&&i[Qh][ep]();var r=i.user;if(r&&!r[tp]&&r[ep](i.user.id),t,n),r&&r[np]){r[np]=!1;var o=new Uo(72,(wo()||{}).userAgent||"");!n.diagLog(),0,o)}e.processNext(t,n)}},e._doTeardown=)),o}return(0,Xt.ne)(t,e),t.getDefaultConfig=function(){var e,t,n=null;return(e={instrumentationKey:function(){return t}})[hp]=function(){return n},e.sessionRenewalMs=function(){return 18e5},e.samplingPercentage=function(){return 100},e.sessionExpirationMs=function(){return 864e5},e[$p]=function(){return n},e[pp]=function(){return n},e.isBrowserLinkTrackingEnabled=function(){return!1},e.appId=function(){return n},e[gp]=function(){return n},e[vp]=function(){return t},e[mp]=function(){return t},e[yp]=function(){return t},e[bp]=function(){return 22},e[wp]=function(){return n},e},t}(pc);const qp=jp;var Gp,Wp="AuthenticatedUserContext",Kp="track",Xp="snippet",Yp="flush",Zp="pollInternalLogs",Jp="getPlugin",Qp="evtNamespace",eg=Kp+"Event",tg=Kp+"Trace",ng=Kp+"Metric",ig=Kp+"PageView",rg=Kp+"Exception",og=Kp+"DependencyData",ag="set"+Wp,sg="clear"+Wp,lg="endpointUrl",cg="diagnosticLogInterval",ug="config",dg="context",fg="push",hg="version",pg="queue",gg="connectionString",vg="instrumentationKey",mg="appInsights",yg="disableIkeyDeprecationMessage",bg="getTransmissionControls",wg="onunloadFlush",Cg="addHousekeepingBeforeUnload",xg="indexOf",Tg=[Xp,"dependencies","properties","_snippetVersion","appInsightsNew","getSKUDefaults"],kg=function(){function e(t){var n,i,r,o,a,s,l,c=this;(0,Kt.Z)(e,this,(function(e){a=_s("AISKU"),s=null,null,null,null,null,o=""+(t.sv||t[hg]||""),t[pg]=t[pg]||[],t[hg]=t[hg]||2;var u=t[ug]||{};if(u[gg]){var d=function(e){if(!e)return{};var t=rr(e[kr](";"),(,{});if(lr(t)[Sr]>0){if(t.endpointsuffix){var n=t.location?t.location+".":"";t[Er]=t[Er]||"https://"+n+"dc."+t.endpointsuffix}t[Er]=t[Er]||da}return t}(u[gg]),f=d.ingestionendpoint;u[lg]=f?f+fa:u[lg],u[vg]=d.instrumentationkey||u[vg]}e[mg]=new Cu,i=new qp,n=new Yh,r=new ff,l=new If,e.core=l;var h=!!zi(u[yg])||u[yg];u[gg]||h||qo(l.logger,1,106,"Instrumentation key support will end soon, see aka.ms/IkeyMigrate"),e[Xp]=t,e[ug]=u,e.config[cg]=e.config[cg]&&e[ug][cg]>0?e[ug][cg]:1e4,e[Yp]=e[wg]=e.loadAppInsights=e.updateSnippetDefinitions=function(t){!function(e,t,n){if(e&&t&&Bi(e)&&Bi(t)){var i=function(i){if(Yi(i)){var r=t[i];ji(r)?n&&!n(i)||(e[i]=br(t,i)):n&&!n(i)||(Hi(e,i)&&delete e[i],cr(e,i,(function(){return t[i]}),(function(e){t[i]=e}))||(e[i]=r))}};for(var r in t)i(r)}}(t,e,()},e.emptyQueue=e[Cg]=function(e){if(go()||mo()){var t=n=!1,i=e.appInsights[ug].disablePageUnloadEvents;s||(s=il(a,l[Qp]&&l[Qp]())),e.appInsights.config.disableFlushOnBeforeUnload||(function(e,t,n,i){var r=!1;return t&&e&&Ki(e)&&!(r=sl(e,t,n,i))&&n&&n[ln]>0&&(r=sl(e,t,null,i)),r}([qs,js,Bs],t,i,s)&&(n=!0),cl(t,i,s)&&(n=!0),n||(r=wo())&&r.product&&"ReactNative"===r.product||qo(e[mg].core.logger,1,19,"Could not add handler for beforeunload and pagehide")),n||e.appInsights.config.disableFlushOnUnload||cl(t,i,s)}var r},e.getSender=function(){return r},e.unload=function(t,n,i){var r;e[wg](t),s&&(ll([qs,js,Bs],null,s),r=il(Gs,s),ll([Bs],null,r),ll([Hs],null,r)),l.unload&&l.unload(t,n,i)},Cr(e,e[mg],["getCookieMgr",eg,ig,"trackPageViewPerformance",rg,"_onerror",tg,ng,"startTrackPage","stopTrackPage","startTrackEvent","stopTrackEvent"]),Cr(e,(function(){return n}),[og,"addDependencyListener","addDependencyInitializer"]),Cr(e,l,["addTelemetryInitializer",Zp,"stopPollingInternalLogs",Jp,"addPlugin",Qp,"addUnloadCb","getTraceCtx"]),Cr(e,(,[ag,sg])}))}return e.prototype.addDependencyInitializer=e}();!);var Sg=n(5571);const Ig="trialSignUpInProgress",Eg="trialSignUpComponent",Lg="correlationId";let $g=class{constructor(){this.appInsights=new kg({config:{connectionString:`InstrumentationKey=${z.w.AppInsightsInstrumentationKey}`}}),this.appInsights.loadAppInsights()}trackTrace(e,t,n){let i={message:t,severityLevel:this.convertToSeverityLevel(e)};i.properties=n?Object.assign(Object.assign({},this.addCommonProperties(n)),n):this.addCommonProperties({}),this.appInsights.trackTrace(i)}trackException(e,t,n,i){let r=this.convertToSeverityLevel(e),o={exception:null!=i?i:new Error(t),severityLevel:r};o.properties=n?Object.assign(Object.assign({},this.addCommonProperties(n)),n):this.addCommonProperties({}),this.appInsights.trackException(o)}trackEvent(e,t){let n={name:e};n.properties=t?Object.assign(Object.assign({},this.addCommonProperties(t)),t):this.addCommonProperties({}),this.appInsights.trackEvent(n)}addCommonProperties(e){return e||(e={}),Object.assign(Object.assign({},e),{CorrelationId:this.getCorrelationID()})}getCorrelationID(){const e=window.localStorage.getItem(Lg);return e&&"string"==typeof e?e:e?e.value:null}convertToSeverityLevel;$g=(0,e.gn)([Sg.r],$g);const Dg="application/json";var Ag;!Ag||(Ag={}));const Og=(t,n,i,r)=>(0,e.mG)(void 0,void 0,void 0,(function*(){var e;const o=null!==(e=null==i?void 0:i.headers)&&void 0!==e?e:{};return i={method:Ag.POST,headers:Object.assign(Object.assign(Object.assign({},o),_g(n)),{"Content-Type":Dg})},yield Pg(t,i,n,r)})),Ng=(t,n,i)=>(0,e.mG)(void 0,void 0,void 0,(function*(){var e;const r=null!==(e=null==i?void 0:i.headers)&&void 0!==e?e:{};return i={method:Ag.GET,headers:Object.assign(Object.assign({},r),_g(n))},yield Pg(t,i,n)})),Pg=(t,n,i,r)=>(0,e.mG)(void 0,void 0,void 0,(function*(){const o=new $g,a=Object.assign(Object.assign({},n),{body:r?JSON.stringify(r):void 0});return yield fetch(t,a).then((n=>(0,e.mG)(void 0,void 0,void 0,(function*(){return o.trackTrace(gt.Information,`Executed ${t} call successfully. CorrelationId: ${i}`),yield Fg(n)})))).catch((e=>(o.trackException(gt.Error,`Error occurred while executing api ${t}. CorrelationId: ${i}`,e),Mg(e))))})),_g=e=>{var t,n;const i=new $g,r={};return r.Accept=Dg,r["x-ms-correlation-request-id"]=e,r["x-ms-request-page"]=(null===(t=null===window||void 0===window?void 0:window.location)||void 0===t?void 0:t.pathname)+(null===(n=null===window||void 0===window?void 0:window.location)||void 0===n?void 0:n.search),i.trackTrace(gt.Information,`Added common request headers. CorrelationId: ${e}`),r},Fg=t=>(0,e.mG)(void 0,void 0,void 0,(function*(){const{ok:e,status:n,statusText:i,headers:r}=t,o={};r.forEach(();let a={isSuccess:e,statusCode:n,reasonPhrase:i,headers:o},s=yield Rg(t);return e?a.data=s:(a.data=s,a.error={code:i,message:JSON.stringify(s)}),a})),Mg=t=>(0,e.mG)(void 0,void 0,void 0,(function*(){var e;return{isSuccess:!1,error:{code:null===(e=null==t?void 0:t.error)||void 0===e?void 0:e.code,message:yield Rg(t)}}})),Rg=t=>(0,e.mG)(void 0,void 0,void 0,(function*(){const e=new $g;return yield null==t?void 0:t.json().then(e.trackTrace(gt.Information,"Received Json response")).catch(()}));let Vg=class{constructor(){this.appInsights=new kg({config:{connectionString:`InstrumentationKey=${z.w.AppInsightsInstrumentationKey}`}}),this.appInsights.loadAppInsights()}mitApiFailureMetric(e){this.appInsights.trackMetric({name:"Record API Failure",average:1},Object.assign(Object.assign({},e),this.getCustomProperties()))}emitApiSuccessMetric(e){this.appInsights.trackMetric({name:"Record API Success",average:1},Object.assign(Object.assign({},e),this.getCustomProperties()))}emitExceptionLoggedMetric(e){this.appInsights.trackMetric({name:"Exception Logged",average:1},Object.assign(Object.assign({},e),this.getCustomProperties()))}};Vg=(0,e.gn)([Sg.r],Vg);const zg=new Vg;class Ug{constructor(e,t,n,i,r){this.logger=new $g,this.partnerId=t,this.correlationId=n,this.loclang=i||navigator.language.toLocaleLowerCase(),this.trialsignupbaseapi=r||"",this.proteanToken=e}getPrivacyConsent(t){return(0,e.mG)(this,void 0,void 0,(function*(){try{const e=`${this.getBaseTrialSignUpAPIUrl()}${Wt.privacyConsent}/${this.partnerId}/${t}/${this.loclang}/`,n=yield Ng(e,this.correlationId,{headers:{Authorization:`Bearer ${this.proteanToken}`}}),{isSuccess:i,reasonPhrase:r,statusCode:o,data:a,error:s}=n;if(i){if(zg.emitApiSuccessMetric({Api:"PrivacyConsent"}),this.logger.trackTrace(gt.Information,`Executed Privacy Consent Api call successfully. CorrelationId: ${this.correlationId}`),a&&a.consent){let e=a.consent;return e.sort((),e}zg.emitApiFailureMetric({Api:"PrivacyConsent-NoData",ApiResponseCode:null==s?void 0:s.code}),this.logger.trackTrace(gt.Warning,`Privacy Consent Api returned empty response. CorrelationId: ${this.correlationId}`)}else zg.emitApiFailureMetric({Api:"PrivacyConsent",ApiResponseCode:null==s?void 0:s.code}),this.logger.trackTrace(gt.Warning,`Privacy Consent Api call failed. Status Code- ${o} ErrorCode- ${null==s?void 0:s.code} ErrorMessage- ${null==s?void 0:s.message} ReasonPhrase- ${r}. CorrelationId: ${this.correlationId}`)}catch(e){zg.emitApiFailureMetric({Api:"PrivacyConsent"}),this.logger.trackException(gt.Error,`Unhandled Exception occurred while executing GetPrivacyConsent Api call. CorrelationId: ${this.correlationId}`,e)}return[]}))}getCountries(){var t;return(0,e.mG)(this,void 0,void 0,(function*(){try{const e=`${this.getBaseTrialSignUpAPIUrl()}${Wt.countriesURL}/${this.partnerId}/${this.loclang}`,n=yield Ng(e,this.correlationId,{headers:{Authorization:`Bearer ${this.proteanToken}`}}),{isSuccess:i,reasonPhrase:r,statusCode:o,data:a,error:s}=n;return i?(zg.emitApiSuccessMetric({Api:"GetCountries"}),this.logger.trackTrace(gt.Information,`Executed Get Countries Api call successfully. CorrelationId: ${this.correlationId}`),a?null===(t=a.locCountriesList)||void 0===t?void 0:t.sort(():(this.logger.trackTrace(gt.Information,`Get Countries Api returned empty response. CorrelationId: ${this.correlationId}`),zg.emitApiFailureMetric({Api:"GetCountries-NoData",ApiResponseCode:null==s?void 0:s.code}),[])):(zg.emitApiFailureMetric({Api:"GetCountries",ApiResponseCode:null==s?void 0:s.code}),this.logger.trackTrace(gt.Warning,`Get Countries Api call failed. Status Code- ${o} ErrorCode- ${null==s?void 0:s.code} ErrorMessage- ${null==s?void 0:s.message} ReasonPhrase- ${r}. CorrelationId: ${this.correlationId}`),[])}catch(e){return zg.emitApiFailureMetric({Api:"GetCountries"}),this.logger.trackException(gt.Error,`Unhandled Exception occurred while executing GetCountries Api call. CorrelationId: ${this.correlationId}`,e),[]}}))}submitLeadForm(t,n,i){return(0,e.mG)(this,void 0,void 0,(function*(){try{const e=`${this.getBaseTrialSignUpAPIUrl()}${Wt.leadSubmission}/${this.partnerId}/${t}/${n}`,r=yield Og(e,this.correlationId,{headers:{Authorization:`Bearer ${this.proteanToken}`}},i),{isSuccess:o,reasonPhrase:a,statusCode:s,data:l,error:c}=r;return o?(zg.emitApiSuccessMetric({Api:"LeadForm"}),this.logger.trackTrace(gt.Information,`Successfully submitted lead. Message: ${null==l?void 0:l.message} Correlation Id: ${null==l?void 0:l.trackingID}`)):(zg.emitApiFailureMetric({Api:"LeadForm",ApiResponseCode:null==c?void 0:c.code}),this.logger.trackTrace(gt.Warning,`Lead Submission Api call failed. Status Code- ${s} ErrorCode- ${null==c?void 0:c.code} ErrorMessage- ${null==c?void 0:c.message} ReasonPhrase- ${a}. Correlation Id: ${this.correlationId}`)),o}catch(e){return zg.emitApiFailureMetric({Api:"LeadForm"}),this.logger.trackException(gt.Error,`Exception occurred while submitting lead form. Correlation Id: ${this.correlationId}`,e),!1}}))}getBaseTrialSignUpAPIUrl(){return this.trialsignupbaseapi.length>0?this.trialsignupbaseapi:Wt.trialSignupBaseAPI}}function Hg(){var e;let t=null===(e=document.querySelector("html"))||void 0===e?void 0:e.getAttribute("lang");if(!t)return window.navigator.language.toLowerCase();if(2===t.indexOf("-"))return t.toLocaleLowerCase();let n=document.querySelector('meta[name="loc"]');return n?`${null==t?void 0:t.toLocaleLowerCase()}-${n}`:null==t?void 0:t.toLocaleLowerCase()}(0,c.z)().register(Ut(),Ht(),Ee(),(0,j.hb)(),Oe()),_e.setConfig({RETURN_TRUSTED_TYPE:!0});let Bg=class extends t.H{constructor(){var e;super(...arguments),this.partnerid="trialpartner",this.trialscenariotype="Sales",this.leadscenariotype="CPMAndMarketingApi",this.dir=(null===(e=null===document||void 0===document?void 0:document.querySelector("html"))||void 0===e?void 0:e.getAttribute("dir"))||"ltr",this.areaname="LeadsFormComponent",this.correlationId="",this.countries=[],this.consent=[],this.firstnameelement=void 0,this.lastnameelement=void 0,this.resetstate=!1,this.validators={phoneNumber:{pattern:"\\+?\\d{1,4}?[\\-\\.\\s]?\\(?\\d{1,3}?\\)?[\\-\\.\\s]?\\d{1,4}[\\-\\.\\s]?\\d{1,4}[\\-\\.\\s]?\\d{1,9}",maxlength:"20"},firstName:{maxlength:"50"},lastName:{maxlength:"50"}},this.isDirty=!1,this.loclang="en-us",this.allValidators=["valueMissing","patternMismatch","tooLong"]}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:});return(0,e.mG)(this,void 0,void 0,(function*(){t.connectedCallback.call(this),"rtl"===this.dir?s.o7V.withDefault(st.rtl):s.o7V.withDefault(st.ltr),this.loclang=Hg(),yield this.loadLocalization(),this.leadServices=new Ug(this.proteanToken,this.partnerid,this.correlationId,this.loclang,this.getBaseTrialSignUpAPIUrl()),this.countries=yield this.leadServices.getCountries()}))}resetstateChanged(t,n){var i;return(0,e.mG)(this,void 0,void 0,(function*(){if(!0===n){void 0!==this.firstnameelement&&(this.firstnameelement.value=""),void 0!==this.lastnameelement&&(this.lastnameelement.value="");const e=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector('[name="phoneNumber"]');null!=e&&(e.value=""),yield this.setDefaultCountry(this.country)}}))}countryChanged(t,n){return(0,e.mG)(this,void 0,void 0,(function*(){void 0!==this.country&&(yield this.setDefaultCountry(this.country))}))}lastnameelementChanged(e,t){void 0!==this.lastnameelement&&this.bindValidatorsToElement(this.lastnameelement,this.validators.lastName)}firstnameelementChanged(e,t){void 0!==this.firstnameelement&&this.bindValidatorsToElement(this.firstnameelement,this.validators.firstName)}formChanged(e,t){void 0!==this.form&&this.bindValidators()}handleChange(e){this.isDirty&&(this.clearErrors(e.target),this.setErrors(e.target))}clearAllErrors(){var e,t;null===(e=this.form)||void 0===e||e.querySelectorAll("span.error").forEach(((e,t)=>{e.classList.add("hidden"),e.innerHTML=""})),null===(t=this.form)||void 0===t||t.querySelectorAll(".error:not(span)").forEach(()}addRequiredAsteriskisplayError(e,t){var n,i,r,o,a,s,l,c,u,d;let f="Input is invalid (ie: no text, checkbox is required).";return"phoneNumber"===t.name&&("valueMissing"===e&&(null===(n=this.commonformerrorlocalization)||void 0===n?void 0:n.LeadsFormPhoneNumberValueMissing)&&(f=null===(i=this.commonformerrorlocalization)||void 0===i?void 0:i.LeadsFormPhoneNumberValueMissing),"patternMismatch"===e&&(null===(r=this.commonformerrorlocalization)||void 0===r?void 0:r.LeadsFormPhoneNumberPatternMismatch)&&(f=null===(o=this.commonformerrorlocalization)||void 0===o?void 0:o.LeadsFormPhoneNumberPatternMismatch)),"firstName"===t.name&&"valueMissing"===e&&(null===(a=this.commonformerrorlocalization)||void 0===a?void 0:a.LeadsFormFirstNameError)&&(f=null===(s=this.commonformerrorlocalization)||void 0===s?void 0:s.LeadsFormFirstNameError),"lastName"===t.name&&"valueMissing"===e&&(null===(l=this.commonformerrorlocalization)||void 0===l?void 0:l.LeadsFormLastNameError)&&(f=null===(c=this.commonformerrorlocalization)||void 0===c?void 0:c.LeadsFormLastNameError),"mandatory_consent_optin_kr"===t.id&&(null===(u=this.commonformerrorlocalization)||void 0===u?void 0:u.LeadsFormConsentMissing)&&(f=null===(d=this.commonformerrorlocalization)||void 0===d?void 0:d.LeadsFormConsentMissing),f}clearErrors(e){var t;e.classList.remove("error"),null===(t=e.parentElement)||void 0===t||t.querySelectorAll("span.error").forEach(()}setErrors(e){e.validity.valid||this.allValidators.some(((t,n)=>{var i;if(e.validity[t]){e.classList.add("error");let n=null===(i=e.parentElement)||void 0===i?void 0:i.querySelector("span.error");n&&(n.classList.remove("hidden"),n.innerHTML=this.displayError(t,e))}}))}bindValidators(){Array.from(this.form.elements).forEach((e=>{const t=e;this.validators[t.name]&&this.bindValidatorsToElement(t,this.validators[t.name])}))}bindValidatorsToElement(e,t){if(e&&t){if(t.pattern&&t.pattern.length>0){let n=new RegExp(t.pattern,"gm");e.setAttribute("pattern",n.source)}t.maxlength&&t.maxlength.length>0&&e.setAttribute("maxlength",t.maxlength)}}setDefaultCountry(t){return(0,e.mG)(this,void 0,void 0,(function*(){!1===this.countries.some(((e,n)=>{if(e.slug===this.loclang.toLocaleLowerCase())return t.value=this.loclang.toLocaleLowerCase(),t.setSelectedOptions(),this.setConsentAndOptIn(t),!0}))&&(t.value=this.countries[0].slug,t.setSelectedOptions(),this.setConsentAndOptIn(t))}))}setConsentAndOptIn(t){return(0,e.mG)(this,void 0,void 0,(function*(){this.consent=yield this.leadServices.getPrivacyConsent(t.value)}))}countriesOnChange(t){return(0,e.mG)(this,void 0,void 0,(function*(){this.consent=[],yield this.setConsentAndOptIn(t.target)}))}loadLocalization(){var t,n,i,r,o,a,s,l,c,u,d,f,h,p,g,v;return(0,e.mG)(this,void 0,void 0,(function*(){this.localization=yield this.trialLocalizationService.getLeadsFormLoc(),this.commonformerrorlocalization=yield this.trialLocalizationService.getCommonErrorLoc(),this.style.setProperty("--right-background-color",null===(n=null===(t=this.localization)||void 0===t?void 0:t.Theme)||void 0===n?void 0:n.LeadsFormRightBackgroundColor),this.style.setProperty("--brand-logo","url("+(null===(r=null===(i=this.localization)||void 0===i?void 0:i.ImagePaths)||void 0===r?void 0:r.LeadsFormRightBackgroundImage)+")"),this.style.setProperty("--brand-color",null===(a=null===(o=this.localization)||void 0===o?void 0:o.Theme)||void 0===a?void 0:a.LeadsFormBrandColor),this.style.setProperty("--brand-forecolor",null===(l=null===(s=this.localization)||void 0===s?void 0:s.Theme)||void 0===l?void 0:l.LeadsFormBrandForecolor),(null===(u=null===(c=this.localization)||void 0===c?void 0:c.ImagePaths)||void 0===u?void 0:u.LeadsFormRightBackgroundImage)&&(null===(f=null===(d=this.localization)||void 0===d?void 0:d.ImagePaths)||void 0===f?void 0:f.LeadsFormRightBackgroundImage.length)>0?this.style.setProperty("--right-background-image","url("+(null===(p=null===(h=this.localization)||void 0===h?void 0:h.ImagePaths)||void 0===p?void 0:p.LeadsFormRightBackgroundImage)+")"):this.style.setProperty("--right-background-image","url("+(null===(v=null===(g=this.localization)||void 0===g?void 0:g.ImagePaths)||void 0===v?void 0:v.LeadsFormLeftBrandingImage)+")")}))}submitForm(t){var n,i,r,o,a,s,l,c,u,d,f,h,p;return(0,e.mG)(this,void 0,void 0,(function*(){if(t.preventDefault(),this.isDirty=!0,this.clearAllErrors(),!this.form.checkValidity()){let e;Array.from(this.form.elements).forEach((t=>{const n=t;n.checkValidity()||(e||(e=n),this.setErrors(n))}));const t={id:null==e?void 0:e.id,contentName:null==e?void 0:e.name};return void this.sendTracking({},{error_code:`${null==e?void 0:e.id}-Invalid`},t)}let e=null!==(i=null===(n=this.auth)||void 0===n?void 0:n.firstName)&&void 0!==i?i:"";0===e.length&&(e=null!==(o=null===(r=this.firstnameelement)||void 0===r?void 0:r.value)&&void 0!==o?o:"");let g=null!==(s=null===(a=this.auth)||void 0===a?void 0:a.lastName)&&void 0!==s?s:"";0===g.length&&(g=null!==(c=null===(l=this.lastnameelement)||void 0===l?void 0:l.value)&&void 0!==c?c:"");let v=null===(u=this.shadowRoot)||void 0===u?void 0:u.querySelector('[name="phoneNumber"]'),m={email:null!==(f=null===(d=this.auth)||void 0===d?void 0:d.emailAddress)&&void 0!==f?f:"",firstName:e,lastName:g,countrySlug:this.country.value,phone:v.value,offerID:this.offerid,offerName:this.offername},y=null===(h=this.shadowRoot)||void 0===h?void 0:h.querySelector('[name^="consent_"]');y&&(m.consent=y.checked);let b=null===(p=this.shadowRoot)||void 0===p?void 0:p.querySelector('[name="partner_consent"]');b&&(m.partnerConsent=b.checked);const w=yield this.leadServices.submitLeadForm(this.trialscenariotype,this.leadscenariotype,m);w||this.sendTracking({},{error_code:"LeadSubmissionFailed"}),this.$emit("is-completed",w)}))}sendTracking(e,t,n){var i;const r={pageTags:Object.assign({app_name:this.getAttribute("data-appname")||"",ProductInfo:{id:null!==(i=this.offerid)&&void 0!==i?i:"",title:this.getAttribute("data-product-name")||"",sku:""},action_time:(new Date).toUTCString(),correlation_id:this.correlationId,userInfo:this.auth},t)},o=Object.assign({sN:"0",compnm:this.areaname,hn:this.getAttribute("data-appfullname")||"",trlid:this.offerid,trlnm:this.offerid,scn:this.getAttribute("data-scn")||""},n),a=Object.assign(Object.assign({},e),{properties:r,content:o});this.telemetry.trackEvent(a)}getBaseTrialSignUpAPIUrl(){var e;return this.trialsignupbaseapi&&(null===(e=this.trialsignupbaseapi)||void 0===e?void 0:e.length)>0?this.trialsignupbaseapi:Wt.trialSignupBaseAPI}};(0,e.gn)([r.Lj],Bg.prototype,"trialsignupbaseapi",void 0),(0,e.gn)([r.Lj],Bg.prototype,"partnerid",void 0),(0,e.gn)([r.Lj],Bg.prototype,"trialscenariotype",void 0),(0,e.gn)([r.Lj],Bg.prototype,"leadscenariotype",void 0),(0,e.gn)([r.Lj],Bg.prototype,"offername",void 0),(0,e.gn)([r.Lj],Bg.prototype,"offerid",void 0),(0,e.gn)([r.Lj],Bg.prototype,"dir",void 0),(0,e.gn)([r.Lj],Bg.prototype,"areaname",void 0),(0,e.gn)([o.LO],Bg.prototype,"correlationId",void 0),(0,e.gn)([o.LO],Bg.prototype,"localization",void 0),(0,e.gn)([o.LO],Bg.prototype,"commonformerrorlocalization",void 0),(0,e.gn)([o.LO],Bg.prototype,"countries",void 0),(0,e.gn)([o.LO],Bg.prototype,"consent",void 0),(0,e.gn)([o.LO],Bg.prototype,"country",void 0),(0,e.gn)([o.LO],Bg.prototype,"form",void 0),(0,e.gn)([o.LO],Bg.prototype,"firstnameelement",void 0),(0,e.gn)([o.LO],Bg.prototype,"lastnameelement",void 0),(0,e.gn)([o.LO],Bg.prototype,"resetstate",void 0),(0,e.gn)([o.LO],Bg.prototype,"auth",void 0),(0,e.gn)([o.LO],Bg.prototype,"proteanToken",void 0),(0,e.gn)([o.LO],Bg.prototype,"validators",void 0),(0,e.gn)([(0,a.f3)("TrialLocalizationService")],Bg.prototype,"trialLocalizationService",void 0),(0,e.gn)([(0,a.f3)("OneDSTelemetry")],Bg.prototype,"telemetry",void 0),Bg=(0,e.gn)([(0,t.M)({name:"leads-form",template:Bt,styles:Gt})],Bg);var jg=n(4676);const qg=I.i`

`,Gg=I.i`
    .carousel svg {
        transform: rotateY(180deg);
    }
`,Wg=I.i`
    :host {
        /* FAST variables */
        --neutral-fill-rest: var(--brand-color);
        --neutral-fill-hover: var(--brand-color);
        --neutral-fill-active: var(--brand-color);
        --accent-foreground-rest: ${Me.jr.colorBlack};

        --right-background-color:  ${Me.jr.colorWhite};
        --brand-logo: '';
        --brand-color: '';
        --brand-forecolor:  ${Me.jr.colorWhite};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        
    }

    .footer-wrapper {
        display: ${Me.uH.displayFlex};
        justify-content: space-between;
        flex-direction: column-reverse;
    }

    .footer-wrapper .button-wrapper {
        display: ${Me.uH.displayFlex};
        flex-direction: row-reverse;
        font-weight: ${Me.p9.fontWeight6};
        --accent-foreground-rest: ${Me.jr.colorBlack};
        align-self: start;
        margin-top: 15px;
    }

    .footer-wrapper .button-wrapper fluent-button {
        --accent-foreground-hover: ${Me.jr.colorBlack}; 
        --accent-foreground-active: ${Me.jr.colorWhite}; 
        font-size: ${Me.p9.baseFontSize};
    }

    .footer-wrapper .button-wrapper fluent-button:hover {
        text-decoration: underline;
    }

    .footer-wrapper .button-wrapper span {
        align-self: center;
        margin-left: 5px;
    }

    .video-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 504px;
        background-color: black;
        padding-bottom: 40px;
    }

    .video-wrapper iframe {
        width: 100%;
        height: 100%;
    }

    .video-wrapper .video-wrapper-button {
        align-self: flex-end;
        margin-right: 22px;
        margin-top: -15px;
        color: ${Me.jr.colorWhite};
        --accent-foreground-rest: ${Me.jr.colorWhite}; 
        --accent-foreground-hover: ${Me.jr.colorWhite};
        --accent-foreground-active: ${Me.jr.colorWhite};
    }

    .container {
        display: ${Me.uH.displayFlex};
        justify-content: space-between;
        flex-direction: column-reverse;
        width: ${Me.C7.oneHundredPercent};
        height: ${Me.C7.oneHundredPercent};
    }

    .container .left-side {
        padding: 20px 40px 35px 40px;
    }

    .right-side {
        background: var(--right-background-color) bottom -100px right -110px no-repeat;
        background-size: ${Me.C7.oneHundredPercent};
        display: ${Me.uH.displayFlex};
        background-color: var(--right-background-color);
        justify-content: center;
    }

    .right-side .button-wrapper fluent-button {
        font-size: 30px;
        border: 0;
        background: none;
        color:  ${Me.jr.colorWhite};
    }

    .right-side img {
        width: 100%;
        vertical-align: middle;
    }

    .error {
        color: ${Me.jr.errorColor};
    }

    .content-wrapper {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    }

    .fade {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .content-wrapper p {
        margin-top: 0;
        font-size: 0.85rem;
    }

    .content-wrapper h2 {
        font-weight: ${Me.p9.fontWeight6};
        padding: 0;
        margin: 0;
    }

    .container.loading {
        height: 400px;
        align-items: center;
        justify-content: space-around;
    }

    .progress {
        display: ${Me.uH.displayFlex};
        align-items: center;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .progress > p {
        align-self: center;
        font-size: ${Me.p9.fontSizeMediumSmall};
        margin: 0 10px;
    }

    fluent-progress-ring {
        flex-grow: 0;
        flex-shrink: 0;
        padding: 0 10px;
        margin: 0;
        --accent-foreground-rest: var(--brand-color);
    }

    .logo-wrapper {
        font-size: 14px;
        color: ${Me.jr.colorWenge};
        flex-wrap: wrap;
        align-content: flex-start;
        display: none;
    }

    .logo-wrapper img {
        margin-right: 10px;
        margin-left: 10px;
    }

    .logo {
        height: ${Me.C7.spacingSize2};
        width: ${Me.C7.spacingSize2};
        display: ${Me.uH.displayInlineBlock};
    }

    fluent-anchor {
        --neutral-foreground-rest: var(--brand-color);
        --neutral-fill-rest: var(--brand-color);
        --accent-fill-hover: var(--brand-color);
        --neutral-fill-hover: var(--brand-color);   
        --accent-fill-active: var(--brand-color);
        --accent-fill-rest: var(--brand-color);
        --accent-stroke-control-rest: var(--brand-color);
        --accent-foreground-rest: ${Me.jr.colorBlack};
        opacity: 1;
        font-size: ${Me.p9.baseFontSize};
        height: 3rem;
    }

    fluent-anchor:focus {
        outline: 1px dashed ${Me.jr.buttonBorderColorBlack};
        outline-offset: 1px;
    }

    fluent-anchor::part(control) {
        padding: 0px 20px;
    }

    .messaging {
        font-size: ${Me.p9.fontSizeMediumSmall};
    }

    .carousel {
        display: ${Me.uH.displayFlex};
        margin-top: 20px;
    }

    .carousel.rtl svg {
        transform: rotateY(180deg);
    }

    .messaging fluent-button {
        padding-left: 0;
    }

    fluent-button {
        --neutral-foreground-rest: var(--brand-forecolor);
        --neutral-fill-active: var(--brand-color);
        --neutral-fill-rest: var(--brand-color);
        --accent-fill-hover: var(--brand-color);
        --neutral-fill-hover: var(--brand-color);
        opacity: 1;
        padding: 0 10px;  
        font-size: ${Me.p9.baseFontSize};
    }

    .carousel button {
        background: transparent;
        border: 0;
        color: var(--brand-color);
        cursor: pointer;
    }

    .carousel .nav {
        display: ${Me.uH.displayFlex};
        justify-content: left;
        align-items: center;
        margin-bottom: 6px;
    }

    .carousel .nav button {
        border-radius: 50%;
        border: 0.666px solid var(--brand-color);
        height: 14px;
        width: 14px;
        margin: 0 12px;
        cursor: pointer;
    }

    .carousel .nav button.active {
        background: var(--brand-color);
    }

    button:focus {
        outline: auto;
    }

    fluent-anchor:focus {
        outline: 1px dashed var(--brand-color);
    }

    @media only screen and (min-width: 960px) {
        .container {
            flex-direction: row;
            font-size: ${Me.p9.fontSizeMedium};
            width: 100%;
        }
        
        .hide-small {
            display: ${Me.uH.displayUnset};
        }
    
        .hide-large {
            display: ${Me.uH.displayNone};
        }

        .container :where(.left-side, .right-side) {
            display: ${Me.uH.displayFlex};
            flex-direction: column;
            justify-content: flex-start
            align-items: flex-start;              
            border-radius: 4px 0 0 4px;
            flex-grow: 1;
            flex-basis: 50%;
            width: 100%;
        }

        .container .left-side {
            padding: 0;
        }

        .logo-wrapper, .button-wrapper, .progress, .content-wrapper{
            padding: 30px;
        }

        .logo-wrapper, .button-wrapper, .progress, .content-wrapper, .messaging {
            flex: 1;
        }

        .progress {
            margin-top: 0;
            padding-top: 0;
        }

        .content-wrapper {
            padding-bottom: unset;
        }

        .logo-wrapper {
            display: ${Me.uH.displayFlex};
        }

        .carousel {
            margin: 40px 30px;
        }

        .messaging {
            padding-left: 30px;
            padding-right: 30px;
        }

        .footer-wrapper {
            display: ${Me.uH.displayFlex};
            justify-content: space-between;
            flex-direction: row;
        }

        .footer-wrapper .button-wrapper {
            align-self: unset;
            margin-top: unset;
        }

    }
`.withBehaviors(new Fe.O(qg,Gg)),Kg=T.d`
    <div>
        <div class="container">
            ${(0,k.g)((e=>!e.showVideoSlide),T.d`
                    <div class="left-side" part="left-side">
                        <div class="logo-wrapper">
                            <img
                                class="logo"
                                :src=${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.ImagePaths)||void 0===n?void 0:n.LoadingDialogLeftBrandingImage}}
                                :alt="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LoadingDialogLeftBrandingImage_AltText}}"
                            />
                            <span>${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LoadingDialogLeftBranding}}</span>
                        </div>
                        <div class="content-wrapper" ${(0,S.i)("contentwrapper")}>
                            <h2>${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.Carousel[e.currentSlide].Content.QuoteHeading}}</h2>
                            <p
                                :innerHTML=${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.Carousel[e.currentSlide].Content.QuoteParagraph)||"")}}
                            ></p>
                        </div>
                        ${(0,k.g)((e=>0===e.buttonlink.length&&void 0===e.error),T.d`
                                <div class="progress">
                                    <fluent-progress-ring></fluent-progress-ring>
                                    <p :innerHTML=${e=>{var t,n;return _e.sanitize((null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.LoadingDialogLeftProgress)||"")}}></p>
                                </div>
                            `)}
                        ${(0,k.g)((,T.d`
                                <div class="messaging">
                                    <div class="error" tabindex="0">
                                        ${e=>e.getLocalizationErrorString(e.error)}
                                    </div>
                                    <div>
                                        <fluent-button
                                            @click="${e=>e.closeDialog()}"
                                            id="cta-back-to-website"
                                            aria-label="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.BackToWebsiteAriaLabel}}"
                                            :innerHTML="${e=>{var t,n,i;return null!==(i=null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.BackToWebsite)&&void 0!==i?i:"Back to website"}}"
                                        ></fluent-button>
                                    </div>
                                </div>
                            `)}
                        ${(0,k.g)((e=>e.buttonlink.length>0),T.d`
                                <div class="button-wrapper">
                                    <fluent-anchor
                                        href=${e=>e.buttonlink}
                                        aria-label="${e=>e.localization.Content.LaunchTrial_AriaLabel}"
                                        appearance="accent"
                                        >${</fluent-anchor
                                    >
                                </div>
                            `)}

                        <div class="footer-wrapper">
                            ${(0,k.g)((e=>{var t,n;return(null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.Carousel.length)>0}),T.d`
                                    <div class="carousel">
                                        <button
                                            @click=${
                                            aria-label="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.Prev_button_AriaLabel}}"
                                        >
                                            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.27594 16.5518L9.27832 15.5494L2.00484 8.2759L9.27832 1.00242L8.27594 3.41721e-05L7.68304e-05 8.2759L8.27594 16.5518Z"
                                                    fill="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Theme)||void 0===n?void 0:n.LoadingDialogBrandColor}}"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div class="nav">
                                            ${it((e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.Carousel}),T.d`
                                                    <button
                                                        @click="${"
                                                        aria-label="${"
                                                        slide="${"
                                                        class="carousel_indicator ${(e,t)=>t.parent.currentSlide===t.index?"active":""}"
                                                    ></button>
                                                `,{positioning:!0})}
                                        </div>
                                        <button
                                            @click=${
                                            aria-label="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.Next_button_AriaLabel}}"
                                        >
                                            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.72406 0.448242L0.72168 1.45062L7.99516 8.7241L0.721678 15.9976L1.72406 17L9.99992 8.7241L1.72406 0.448242Z"
                                                    fill="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Theme)||void 0===n?void 0:n.LoadingDialogBrandColor}}"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                `)}
                            ${(0,k.g)((e=>{var t,n,i,r,o;return(null===(n=null===(t=e.localization)||void 0===t?void 0:t.Configurations)||void 0===n?void 0:n.WatchVideoLink)&&(null===(o=null===(r=null===(i=e.localization)||void 0===i?void 0:i.Configurations)||void 0===r?void 0:r.WatchVideoLink)||void 0===o?void 0:o.length)}),T.d`
                                    <div class="button-wrapper">
                                        <span>&#x25B7;</span>
                                        <fluent-button @click=${e=>e.showVideo()} appearance="lightweight">Watch Intro Video</fluent-button>
                                    </div>
                                `)}
                        </div>
                    </div>
                    <div class="right-side" part="right-side">
                        <picture>
                            <source srcset="${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.Carousel[e.currentSlide].ImagePaths.Large}}" media="(min-width: 960px)" />
                            <source srcset="${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.Carousel[e.currentSlide].ImagePaths.Tablet}}" media="(min-width: 540px)" />
                            <source srcset="${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.Carousel[e.currentSlide].ImagePaths.Mobile}}" media="(min-width: 0px)" />
                            <img
                                ${(0,S.i)("imagewrapper")}
                                src="${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.Carousel[e.currentSlide].ImagePaths.Large}}"
                                alt="${e=>{var t;return null===(t=e.localization)||void 0===t?void 0:t.Content.Carousel[e.currentSlide].Content.Image_AltText}}"
                            />
                        </picture>
                    </div>
                `)}
            ${(0,k.g)((e=>e.showVideoSlide),T.d`
                    <div class="video-wrapper">
                        <div class="video-wrapper-button">
                            <fluent-button
                                @click=${e=>e.hideVideo()}
                                appearance="lightweight"
                                aria-label="${"
                                >${e=>{var t,n;return null!==(n=null===(t=e.localization)||void 0===t?void 0:t.Content.Goback_button)&&void 0!==n?n:"Go Back"}}</fluent-button
                            >
                        </div>
                        <iframe
                            frameborder="0"
                            allow="autoplay"
                            allowfullscreen=""
                            title="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.WatchVideoLink_AriaLabel}}"
                            src="${e=>{var t,n;return null===(n=null===(t=e.localization)||void 0===t?void 0:t.Configurations)||void 0===n?void 0:n.WatchVideoLink}}"
                        >
                        </iframe>
                    </div>
                `)}
        </div>
    </div>
`;(0,c.z)().register(Pe(),(0,jg.QT)()),_e.setConfig({RETURN_TRUSTED_TYPE:!0});let Xg=class extends t.H{constructor(){super(...arguments),this.buttonlink="",this.dir="ltr",this.areaname="NewTrialLoading",this.currentSlide=0,this.showVideoSlide=!1,this.correlationId="",this.slidesVisited=new Map}connectedCallback(){super.connectedCallback(),this.style.setProperty("--direction",this.dir),"rtl"===this.dir?s.o7V.withDefault(st.rtl):s.o7V.withDefault(st.ltr),this.loadLocalization()}howVideo(){this.showVideoSlide=!0}electSlide(e){this.imagewrapper.addEventListener("transitionend",(()=>{var t,n,i,r,o,a;e>(null===(n=null===(t=this.localization)||void 0===t?void 0:t.Content)||void 0===n?void 0:n.Carousel.length)-1?this.currentSlide=0:this.currentSlide=e<0?(null===(r=null===(i=this.localization)||void 0===i?void 0:i.Content)||void 0===r?void 0:r.Carousel.length)-1:e,this.contentwrapper.classList.remove("fade"),this.imagewrapper.classList.remove("fade"),this.slidesVisited.set(this.currentSlide,!0),this.sendTracking({},{totalSlides:null===(a=null===(o=this.localization)||void 0===o?void 0:o.Content)||void 0===a?void 0:a.Carousel.length,slidesCompletedCount:this.slidesVisited.size,userInfo:this.auth},{id:"slides",contentName:"slides"})}),{once:!0}),this.contentwrapper.classList.add("fade"),this.imagewrapper.classList.add("fade")}loadLocalization(){var t,n,i,r,o;return(0,e.mG)(this,void 0,void 0,(function*(){this.localization=yield this.trialLocalizationService.getLoadingDialogLoc(),this.commonformerrorlocalization=yield this.trialLocalizationService.getCommonErrorLoc(),this.style.setProperty("--right-background-color",null===(n=null===(t=this.localization)||void 0===t?void 0:t.Theme)||void 0===n?void 0:n.LoadingDialogRightBackgroundColor),this.style.setProperty("--brand-color",null===(r=null===(i=this.localization)||void 0===i?void 0:i.Theme)||void 0===r?void 0:r.LoadingDialogBrandColor),this.style.setProperty("--brand-forecolor",null===(o=this.localization.Theme)||void 0===o?void 0:o.LoadingDialogBrandForecolor)}))}getLocalizationErrorString(e){var t,n;const i=null!==(n=" "+(null===(t=this.commonformerrorlocalization.ErrorCorrelationIdPlaceholder)||void 0===t?void 0:t.replace("{{correlationId}}",this.correlationId)))&&void 0!==n?n:"";return e&&this.commonformerrorlocalization[e]?this.commonformerrorlocalization[e]+i:this.commonformerrorlocalization[dt]?this.commonformerrorlocalization[dt]+i:"Something went wrong. Please try again later."+i}sendTracking(e,t,n){var i;const r={pageTags:Object.assign({app_name:this.getAttribute("data-appname")||"",ProductInfo:{id:this.getAttribute("data-offer-id")||"",title:this.getAttribute("data-product-name")||"",sku:""},action_time:(new Date).toUTCString(),correlation_id:this.correlationId,userInfo:this.auth},t)},o=Object.assign({sN:"0",compnm:this.getAttribute("data-areaname")||"",hn:this.getAttribute("data-appfullname")||"",trlid:this.getAttribute("data-offer-id")||"",trlnm:this.getAttribute("data-offer-id")||"",scn:this.getAttribute("data-scn")||""},n),a=Object.assign(Object.assign({},e),{properties:r,content:o});try{this.telemetry.trackEvent(a)}catch(e){null===(i=this.logging)||void 0===i||i.trackException(gt.Error,"JSLLTrackEvent failed",e)}}};(0,e.gn)([r.Lj],Xg.prototype,"buttonlink",void 0),(0,e.gn)([r.Lj],Xg.prototype,"dir",void 0),(0,e.gn)([r.Lj],Xg.prototype,"areaname",void 0),(0,e.gn)([o.LO],Xg.prototype,"localization",void 0),(0,e.gn)([o.LO],Xg.prototype,"auth",void 0),(0,e.gn)([o.LO],Xg.prototype,"error",void 0),(0,e.gn)([o.LO],Xg.prototype,"commonformerrorlocalization",void 0),(0,e.gn)([o.LO],Xg.prototype,"currentSlide",void 0),(0,e.gn)([o.LO],Xg.prototype,"showVideoSlide",void 0),(0,e.gn)([o.LO],Xg.prototype,"correlationId",void 0),(0,e.gn)([o.LO],Xg.prototype,"slidesVisited",void 0),(0,e.gn)([(0,a.f3)("TrialLocalizationService")],Xg.prototype,"trialLocalizationService",void 0),(0,e.gn)([(0,a.f3)("AppInsightsLoggerService")],Xg.prototype,"logging",void 0),(0,e.gn)([(0,a.f3)("OneDSTelemetry")],Xg.prototype,"telemetry",void 0),Xg=(0,e.gn)([(0,t.M)({name:"new-trial-loading",template:Kg,styles:Wg,shadowOptions:{delegatesFocus:!0}})],Xg);const Yg=T.d`
    <slot @click=${(e,t)=>e.openDialogOnClick(t.event)}></slot>
    <fluent-dialog  modal="true" trap-focus="true" ?hidden=${ part="trial-modal" aria-label="${e=>e.applicationFullName}" >
        <div class="dialog-wrapper">
            <div class="button-wrapper">
                <button @click=${e=>e.closeDialog()} aria-label="${e=>{var t;return null===(t=e.localizations)||void 0===t?void 0:t.CloseAriaLabel}}" title="${" id="sign-up-trial-form-close-cta"}" data-bi-cn="x" autofocus>
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.897052 1.05379L0.96967 0.96967C1.23594 0.703403 1.6526 0.679197 1.94621 0.897052L2.03033 0.96967L7 5.939L11.9697 0.96967C12.2359 0.703403 12.6526 0.679197 12.9462 0.897052L13.0303 0.96967C13.2966 1.23594 13.3208 1.6526 13.1029 1.94621L13.0303 2.03033L8.061 7L13.0303 11.9697C13.2966 12.2359 13.3208 12.6526 13.1029 12.9462L13.0303 13.0303C12.7641 13.2966 12.3474 13.3208 12.0538 13.1029L11.9697 13.0303L7 8.061L2.03033 13.0303C1.76406 13.2966 1.3474 13.3208 1.05379 13.1029L0.96967 13.0303C0.703403 12.7641 0.679197 12.3474 0.897052 12.0538L0.96967 11.9697L5.939 7L0.96967 2.03033C0.703403 1.76406 0.679197 1.3474 0.897052 1.05379L0.96967 0.96967L0.897052 1.05379Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            ${(0,k.g)((e=>e.enableEmail),T.d`
                <new-trial-email
                    @is-completed=${(e,t)=>e.isTrialEmailCompleted(t.event.detail)}
                    email="${"
                    ?hidden=${e=>e.disableEmail} 
                    :servererror=${e=>e.error}
                    :enableloadingstate=${e=>e.enableEmailLoadingState}
                    :correlationId=${e=>e.correlationId}
                    :loclang=${e=>e.loclang}
                    :resetstate=${e=>e.resetstate}
                    :enableSetupLink=${e=>e.enableSetupLink}
                    :enableSetupLinkNeptune=${e=>e.enableSetupLinkNeptune}
                    :auth=${e=>e.auth}
                    :proteanToken=${e=>e.proteanToken}
                    :showDisclaimerFlag=${e=>e.showDisclaimerFlag}      
                    dir=${e=>e.dir}
                    part="trial-email"
                    exportparts="left-side:trial-email-lside, right-side:trial-email-rside"
                    data-offer-name="${e=>e.offerName}"
                    data-offer-id="${e=>e.offerId}"
                    data-appname="${e=>e.applicationSlug}"
                    data-appfullname="${e=>e.applicationFullName.replaceAll("&nbsp;"," ")}"
                    data-areaname="${e=>e.areaName}"
                    data-scn="${e=>e.scn}"    
                >
                </new-trial-email>
            `)}
            
            ${(0,k.g)((e=>e.enableQuestionaire&&e.auth),T.d`
                <leads-form part="trial-questions"
                    @is-completed=${
                    dir=${e=>e.dir}
                    :correlationId=${e=>e.correlationId}
                    :resetstate=${e=>e.resetstate}
                    :auth=${e=>e.auth}
                    :proteanToken=${e=>e.proteanToken}
                    ?hidden=${e=>e.disableQuestion}
                    trialscenariotype=${e=>e.trialscenariotype}
                    partnerid=${e=>e.partnerid}
                    offername=${e=>e.offerName}
                    offerid=${e=>e.offerId}
                    trialsignupbaseapi="${"
                    areaname=${e=>e.areaName}
                    data-appname="${e=>e.applicationSlug}"
                    data-appfullname="${e=>e.applicationFullName.replaceAll("&nbsp;"," ")}"
                    data-scn="${e=>e.scn}"
                ></leads-form>
            `)}

            ${(0,k.g)((,T.d`  
                <new-trial-loading part="trial-loading"
                    @close-dialog=${
                    dir=${e=>e.dir}
                    :error=${e=>e.error} 
                    buttonlink=${e=>e.loadingButtonLink} 
                    areaname=${e=>e.areaName}
                    :correlationId=${e=>e.correlationId}
                    :auth=${e=>e.auth}
                    data-product-name="${e=>e.offerName}"
                    data-offer-id="${e=>e.offerId}"
                    ?hidden=${e=>e.disableLoading}
                    exportparts="left-side:trial-loading-lside, right-side:trial-loading-rside"
                    data-appname="${e=>e.applicationSlug}"
                    data-appfullname="${"
                    data-scn="${"   
                ></new-trial-loading>
            `)}
        </div>
    </fluent-dialog>
`,Zg=I.i`
    .button-wrapper {
        right: 20px;
    }
`,Jg=I.i`
    .button-wrapper {
        left: 20px;
    }
`,Qg=I.i`
    fluent-dialog {
        --dialog-width: 1024px;
        --dialog-height: unset;
        --stroke-width: 0;
        --layer-corner-radius: 0;
        position: fixed;
        z-index: 1001; // AEM menus are 700...., right rail widget is 1000
    }

    fluent-dialog::part(control) {
        margin-left: 40px;
        margin-right: 40px;
    }

    .dialog-wrapper {
        position: ${Me.uH.positionRelative};
    }

    .button-wrapper {
        position: ${Me.uH.positionAbsolute};
        top: 20px;
        z-index: 5;
    }

    
    .button-wrapper button {
        font-size: 10px;
        border: 0;
        border-radius: 4px;
        padding: 6px 6px 4px 6px;
        background-color: ${Me.jr.colorWhite};
    }

    .button-wrapper button:hover {
        cursor: pointer;
    }
    
`.withBehaviors(new Fe.O(Zg,Jg));class ev{constructor(e,t,n,i=navigator.language,r){this.pollingTries=0,this.logger=new $g,this.trialsignupbaseapi=n,this.partnerid=e,this.trialScenarioType=t,this.locale=i,this.correlationId=r,this.timeout=60}provisionTrial(t,n){var i;return(0,e.mG)(this,void 0,void 0,(function*(){try{let e=`${this.getBaseTrialSignUpAPIUrl()}${H.provisionAPI}${this.partnerid}/${this.trialScenarioType}/?language=${this.locale}`;n&&(e=`${e}&scenarioId=${n}`);const r=yield Og(e,this.correlationId,{headers:{Authorization:`Bearer ${t}`}}),{isSuccess:o,reasonPhrase:a,statusCode:s,data:l,error:c}=r;if(o){this.logger.trackTrace(gt.Information,`Successfully executed Provision Trial Api for ${this.trialScenarioType}. Correlation Id: ${this.correlationId}`),zg.emitApiSuccessMetric({Api:"Provisioning"});const e=yield this.getEnvironment(t);return(null==l?void 0:l.hasExistingEnvironment)?Object.assign(Object.assign({},e),{hasExistingEnvironment:l.hasExistingEnvironment}):e}return zg.emitApiFailureMetric({Api:"Provisioning",ApiResponseCode:null==c?void 0:c.code}),s&&s>=500?this.logger.trackException(gt.Critical,`Provision Trial Api call failed. Status Code- ${s} ErrorCode- ${null==c?void 0:c.code} ErrorMessage- ${null==c?void 0:c.message} ReasonPhrase- ${a}. CorrelationId: ${this.correlationId}`,l):this.logger.trackTrace(gt.Error,`Provision Trial Api call failed. Status Code- ${s} ErrorCode- ${null==c?void 0:c.code} ErrorMessage- ${null==c?void 0:c.message} ReasonPhrase- ${a}. CorrelationId: ${this.correlationId}`,l),Object.assign(Object.assign({},l),{error:(null==c?void 0:c.code)&&(null===(i=null==c?void 0:c.code)||void 0===i?void 0:i.length)>0?c.code:ct})}catch(e){return zg.emitApiFailureMetric({Api:"Provisioning"}),this.logger.trackException(gt.Error,`Exception occurred while provisioning trial environment. Correlation Id: ${this.correlationId}`,e),{error:ct}}}))}getEnvironment(t){var n;return(0,e.mG)(this,void 0,void 0,(function*(){try{const e=`${this.getBaseTrialSignUpAPIUrl()}${H.provisionReadyAPI}${this.partnerid}/${this.trialScenarioType}/Tryfree/`,i=yield Ng(e,this.correlationId,{headers:{Authorization:`Bearer ${t}`}}),{isSuccess:r,reasonPhrase:o,statusCode:a,data:s,error:l}=i;return r?(this.logger.trackTrace(gt.Information,`Executed Get Environment Api call successfully. CorrelationId: ${this.correlationId}`),zg.emitApiSuccessMetric({Api:"GetEnvironment"}),(null==s?void 0:s.provisioningState)===ft.Succeeded?{environmentId:null==s?void 0:s.environmentId,organizationId:null==s?void 0:s.organizationId,baseLanguage:null==s?void 0:s.baseLanguage,location:null==s?void 0:s.location,url:(null==s?void 0:s.trialEnvironmentUrl)?null==s?void 0:s.trialEnvironmentUrl:null==s?void 0:s.instanceUrl}:{needPolling:!0}):(zg.emitApiFailureMetric({Api:"GetEnvironment",ApiResponseCode:null==l?void 0:l.code}),a&&a>=500?this.logger.trackException(gt.Critical,`GetEnvironment Api call failed. Status Code- ${a} ErrorCode- ${null==l?void 0:l.code} ErrorMessage- ${null==l?void 0:l.message} ReasonPhrase- ${o}. CorrelationId: ${this.correlationId}`,s):this.logger.trackTrace(gt.Error,`GetEnvironment Api call failed. Status Code- ${a} ErrorCode- ${null==l?void 0:l.code} ErrorMessage- ${null==l?void 0:l.message} ReasonPhrase- ${o}. CorrelationId: ${this.correlationId}`,s),{error:null!==(n=null==l?void 0:l.code)&&void 0!==n?n:ct})}catch(e){return zg.emitApiFailureMetric({Api:"GetEnvironment"}),this.logger.trackException(gt.Error,`Unhandled Exception occurred while executing GetEnvironment Api call. CorrelationId: ${this.correlationId}`,e),{error:ct}}}))}getEnvironmentPolling(t,n){var i;return(0,e.mG)(this,void 0,void 0,(function*(){let e=Math.ceil(this.timeout/H.provisionTimeSec);for(n&&(e=Math.ceil(n/H.provisionTimeSec));++this.pollingTries<e;)try{const e=`${this.getBaseTrialSignUpAPIUrl()}${H.provisionReadyAPI}${this.partnerid}/${this.trialScenarioType}/Tryfree/`,n=yield Ng(e,this.correlationId,{headers:{Authorization:`Bearer ${t}`}}),{isSuccess:r,reasonPhrase:o,statusCode:a,data:s,error:l}=n,c=null==s?void 0:s.provisioningState;if(r){if(this.logger.trackTrace(gt.Information,`Executed Get Environment Polling Api call successfully. CorrelationId: ${this.correlationId}`),zg.emitApiSuccessMetric({Api:"GetEnvironment-Polling"}),c===ft.Inprogress||c===ft.Creating){yield vt(H.provisionTimeSec);continue}return c===ft.Running||c===ft.Succeeded?{environmentId:null==s?void 0:s.environmentId,organizationId:null==s?void 0:s.organizationId,baseLanguage:null==s?void 0:s.baseLanguage,location:null==s?void 0:s.location,url:(null==s?void 0:s.trialEnvironmentUrl)?null==s?void 0:s.trialEnvironmentUrl:null==s?void 0:s.instanceUrl}:(zg.emitApiFailureMetric({Api:"GetEnvironment-Polling"}),{error:ct})}return zg.emitApiFailureMetric({Api:"GetEnvironment-Polling",ApiResponseCode:null==l?void 0:l.code}),a&&a>=500?this.logger.trackException(gt.Critical,`GetEnvironmentPolling Api call failed. Status Code- ${a} ErrorCode- ${null==l?void 0:l.code} ErrorMessage- ${null==l?void 0:l.message} ReasonPhrase- ${o}. CorrelationId: ${this.correlationId}`,s):this.logger.trackTrace(gt.Error,`GetEnvironmentPolling Api call failed. Status Code- ${a} ErrorCode- ${null==l?void 0:l.code} ErrorMessage- ${null==l?void 0:l.message} ReasonPhrase- ${o}. CorrelationId: ${this.correlationId}`,s),{error:null!==(i=null==l?void 0:l.code)&&void 0!==i?i:ct}}catch(e){return zg.emitApiFailureMetric({Api:"GetEnvironment-Polling"}),this.logger.trackException(gt.Error,`Unhandled Exception occurred while calling getEnvironmentPolling call. CorrelationId: ${this.correlationId}`,e),{error:ct}}return this.logger.trackTrace(gt.Information,`GetEnvironmentPolling Api reached maximum polling tries ${this.pollingTries}. CorrelationId: ${this.correlationId}`),{error:ut}}))}getEligibility(t){return(0,e.mG)(this,void 0,void 0,(function*(){try{const e=`${this.getGeteligibilityURL()}?email=${t}`,n=yield Ng(e,this.correlationId),{isSuccess:i,reasonPhrase:r,statusCode:o,data:a,error:s}=n;if(i){if(this.logger.trackTrace(gt.Information,`Executed GetEligibility Api call successfully. CorrelationId: ${this.correlationId}`),zg.emitApiSuccessMetric({Api:"GetEligibility"}),a)return a}else zg.emitApiFailureMetric({Api:"GetEligibility",ApiResponseCode:null==s?void 0:s.code}),o&&o>=500?this.logger.trackException(gt.Critical,`GetEligibility Api call failed. Status Code- ${o} ErrorCode- ${null==s?void 0:s.code} ErrorMessage- ${null==s?void 0:s.message} ReasonPhrase- ${r}. CorrelationId: ${this.correlationId}`,a):this.logger.trackTrace(gt.Error,`GetEligibility Api call failed. Status Code- ${o} ErrorCode- ${null==s?void 0:s.code} ErrorMessage- ${null==s?void 0:s.message} ReasonPhrase- ${r}. CorrelationId: ${this.correlationId}`,a)}catch(e){this.logger.trackException(gt.Error,`Unhandled Exception occurred while executing GetEligibility Api call. CorrelationId: ${this.correlationId}`,e)}return this.signUpError()}))}signUpError(){return{eligible:!1,error:{code:lt},userType:"unknown",analyticsData:{code:"unknown"}}}getGeteligibilityURL(){return`${this.getBaseTrialSignUpAPIUrl()}${H.provisionAvailability}${this.partnerid}/${this.trialScenarioType}/`}getBaseTrialSignUpAPIUrl(){return this.trialsignupbaseapi.length>0?this.trialsignupbaseapi:H.trialSignupBaseAPI}}const tv=(e,t,n,i)=>{const r=new $g,o=new Date;n=null!=n?n:60,o.setMinutes(o.getMinutes()+n);const a={expiration:o.toISOString(),value:t};r.trackTrace(gt.Information,`Setting ${e} to local storage. CorrelationId: ${i}`),window.localStorage.setItem(e,JSON.stringify(a))},nv=e=>{const t=new $g,n=window.localStorage.getItem(e);if(!n)return null;const i=JSON.parse(n);return new Date>new Date(i.expiration)?(window.localStorage.removeItem(e),null):(t.trackTrace(gt.Information,`Getting ${e} from local storage.`),i.value)},iv=e=>{(new $g).trackTrace(gt.Information,`Removing ${e} from local storage.`),window.localStorage.getItem(e)&&window.localStorage.removeItem(e)};class rv{constructor(e,t,n,i,r,o){this.expirationTime=60,this.fallbackLocale="en-us",this.logging=new $g,this.trialScenarioType=n,this.partnerID=e,this.correlationId=t,this.trialsignupbaseapi=i,this.locale=r?r.toLocaleLowerCase():navigator.language.toLocaleLowerCase(),o&&(this._localizationObject=o)}getEmailDialogLoc(){var t;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null===(t=this._localizationObject)||void 0===t?void 0:t.TrialSignupFormData.TrialSignUpEmailDialog}))}getLoadingDialogLoc(){var t;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null===(t=this._localizationObject)||void 0===t?void 0:t.TrialSignupFormData.TrialSignUpLoadingDialog}))}getLeadsFormLoc(){var t;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null===(t=this._localizationObject)||void 0===t?void 0:t.TrialSignupFormData.TrialSignUpLeadsForm}))}getCommonErrorLoc(){var t;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null===(t=this._localizationObject)||void 0===t?void 0:t.CommonFormData.ErrorDetails.Content}))}getApplicationLoc(){var t;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null===(t=this._localizationObject)||void 0===t?void 0:t.CommonFormData.Content}))}getApplicationConfiguration(){var t;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null===(t=this._localizationObject)||void 0===t?void 0:t.TrialSignupFormData.Configurations}))}getApplicationSlug(){var t,n;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null!==(n=null===(t=this._localizationObject)||void 0===t?void 0:t.TrialSignupFormData.Slug)&&void 0!==n?n:""}))}getApplicationFullName(){var t,n;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null!==(n=null===(t=this._localizationObject)||void 0===t?void 0:t.TrialSignupFormData.Content.ApplicationFullName)&&void 0!==n?n:""}))}getEnableRTLDisclaimer(){var t,n;return(0,e.mG)(this,void 0,void 0,(function*(){return this._localizationObject||(yield this.loadLocalization()),null!==(n=null===(t=this._localizationObject)||void 0===t?void 0:t.TrialSignupFormData.TrialSignUpEmailDialog.Configurations.EnableRTLDisclaimer)&&void 0!==n&&n}))}loadLocalization(){return(0,e.mG)(this,void 0,void 0,(function*(){const e=`${this.locale}_${this.trialScenarioType}_${this.partnerID}`;let t=nv(e);if(null!=t)return void(this._localizationObject=t);let n=yield this.getLocalizationData(this.locale);(n||(n=yield this.getLocalizationData(this.fallbackLocale),n))&&(this._localizationObject=n,tv(e,this._localizationObject,this.expirationTime,this.correlationId))}))}getLocalizationData(t){return(0,e.mG)(this,void 0,void 0,(function*(){try{const e=yield Ng(this.getLocalizationUrl(t),this.correlationId),{isSuccess:n,reasonPhrase:i,statusCode:r,data:o,error:a}=e;if(n){if(o)return o;zg.emitApiSuccessMetric({Api:"LocalizationAPI"}),this.logging.trackTrace(gt.Information,`Executed Localization Api call successfully. CorrelationId: ${this.correlationId}, Locale: ${this.locale}`)}else zg.emitApiFailureMetric({Api:"LocalizationAPI",ApiResponseCode:null==r?void 0:r.toString()}),r&&r>=500?this.logging.trackException(gt.Critical,`Localization Api call failed. Status Code- ${r} ErrorCode- ${null==a?void 0:a.code} ErrorMessage- ${null==a?void 0:a.message} ReasonPhrase- ${i}. Correlation Id: ${this.correlationId}`,a):this.logging.trackTrace(gt.Error,`Localization Api call failed. Status Code- ${r} ErrorCode- ${null==a?void 0:a.code} ErrorMessage- ${null==a?void 0:a.message} ReasonPhrase- ${i}. Correlation Id: ${this.correlationId}`,a)}catch(e){zg.emitApiFailureMetric({Api:"LocalizationAPI"}),this.logging.trackException(gt.Error,`Unhandled exception occurred while fetching localization data. Correlation Id: ${this.correlationId}, Locale: ${this.locale}`,e)}return null}))}getLocalizationUrl(e){return`${this.getBaseTrialSignUpAPIUrl()}${H.localizationAPI}${this.partnerID}/${this.trialScenarioType}/${e}`}getBaseTrialSignUpAPIUrl(){return this.trialsignupbaseapi.length>0?this.trialsignupbaseapi:H.trialSignupBaseAPI}}var ov=n(9569);s.q2d.withDefault(l.h.LightMode),(0,c.z)().register(V(),wt,Bg,Xg);let av=class extends t.H{constructor(){var e;super(),this.partnerid="",this.trialscenariotype="",this.id="",this.haslocalizationobject=!1,this.trialsignupbaseapi="",this.isaem=!1,this.dir=(null===(e=null===document||void 0===document?void 0:document.querySelector("html"))||void 0===e?void 0:e.getAttribute("dir"))||"ltr",this.enableEmail=!1,this.enableQuestionaire=!1,this.enableLoadingPage=!1,this.disableEmail=!1,this.disableQuestion=!0,this.disableLoading=!0,this.enableRTLDisclaimer=!1,this.showDisclaimerFlag=!1,this.loadingButtonLink="",this.enableEmailLoadingState=!1,this.opendialog=!1,this.offerName="",this.offerId="",this.appName="",this.resetstate=!1,this.enableSetupLink=!1,this.enableSetupLinkNeptune=!1,this.applicationFullName="",this.correlationId=this.generateGuid(),this.loclang="en-us",this.areaName="Beethoven Modal",this.scn="BeethovenTrials",this.newTrialUrl="",this.LocalParamsConstants={newTrialInProgress:"newtrialinprogress",loginHint:"login_hint",tenantId:"tenantid",tsApp:"tsapp",scenarioId:"scenarioid"},this.triggerPopup="triggerpopup",this.authProteanTimeout=10,this.diContainer=a.DI.getOrCreateDOMContainer(this),this.diContainer.register(a.YM.singleton("AppInsightsLoggerService",$g),a.YM.singleton("OneDSTelemetry",ov.t)),this.logger=this.diContainer.get("AppInsightsLoggerService"),this.telemetry=this.diContainer.get("OneDSTelemetry")}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});var n,i;return(0,e.mG)(this,void 0,void 0,(function*(){if(t.connectedCallback.call(this),"rtl"===this.dir?s.o7V.withDefault(st.rtl):s.o7V.withDefault(st.ltr),!1===this.startUpRequirementChecks("connectedCallback"))return!1;this.loclang=Hg(),yield this.getLocalization(),this.enableEmail=!0,yield this.telemetry.init(this,this.areaName),this.enableRTLDisclaimer&&this.UpdateUnSupportedRTLanguage(),this.provisionService=new ev(this.partnerid,this.trialscenariotype,this.getBaseTrialSignUpAPIUrl(),this.showDisclaimerFlag?"en-us":this.loclang,this.correlationId),this.diContainer.register(a.YM.instance("TrialServices",this.provisionService));const e=nv(Eg),r=yield this.paramsLowerCase();if(e&&e.toLocaleLowerCase()===this.id.toLocaleLowerCase())if(r.has(this.LocalParamsConstants.newTrialInProgress)){if(r.delete(this.LocalParamsConstants.newTrialInProgress),r.size>0?history.pushState({},"",`${window.location.origin}${window.location.pathname}?${r}`):history.pushState({},"",`${window.location.origin}${window.location.pathname}`),r.has(this.LocalParamsConstants.scenarioId)&&(this.scenarioId=r.get(this.LocalParamsConstants.scenarioId)),r.has(this.LocalParamsConstants.tenantId)&&(null===(n=this.auth)||void 0===n?void 0:n.tenantId)!==r.get(this.LocalParamsConstants.tenantId)){const e=r.get(this.LocalParamsConstants.tenantId);if(e)return void(window.location.href=this.getSwitchTenantUrl(e))}if(r.has(this.LocalParamsConstants.loginHint)&&(null===(i=this.auth)||void 0===i?void 0:i.emailAddress)!==r.get(this.LocalParamsConstants.loginHint)){let e=r.get(this.LocalParamsConstants.loginHint),t=r.get(this.LocalParamsConstants.tenantId);if(e)return void(window.location.href=this.getSignInToUrl(e,null!=t?t:void 0))}iv(Eg);let e=nv(Ig);if(e&&e.length){let t=JSON.parse(e)||null;if(iv(Ig),t)return!1===(yield this.waitforAuthandProteanToken())?void(this.error=dt):(this.opendialog=!0,this.enableEmailLoadingState=!0,yield this.userlogin(t),void setTimeout((()=>{var e;null===(e=this.shadowRoot)||void 0===e||e.dispatchEvent(new CustomEvent("newtrialloaded",{bubbles:!0,composed:!0}))})))}}else iv(Eg),iv(Ig);if(!1!==(yield this.waitforAuthandProteanToken())){if(r.has(this.LocalParamsConstants.tsApp)&&this.hasAttribute(this.triggerPopup)){let e=r.get(this.LocalParamsConstants.tsApp),t=this.getAttribute(this.triggerPopup);(null==e?void 0:e.toLocaleLowerCase())===(null==t?void 0:t.toLocaleLowerCase())&&(this.opendialog=!0)}if(this.auth&&this.proteanToken){const e=yield this.provisionService.getEnvironment(this.proteanToken);e&&e.url&&(this.newTrialUrl=e.url)}setTimeout((()=>{var e;null===(e=this.shadowRoot)||void 0===e||e.dispatchEvent(new CustomEvent("newtrialloaded",{bubbles:!0,composed:!0}))}))}}))}waitforAuthandProteanToken(){return(0,e.mG)(this,void 0,void 0,(function*(){let e=this.authProteanTimeout;for(;(void 0===this.auth||void 0===this.proteanToken)&&e>0;)yield vt(1),e--;return void 0!==this.auth&&void 0!==this.proteanToken||(this.logger.trackException(gt.Error,`Never got an auth object, or protean token, element id: ${this.id}`),console.error("Never got an auth object, or protean token.",this.id),!1)}))}closeDialog(){if(this.opendialog=!1,!1===this.disableLoading&&void 0!==this.error)return this.resetstate=!0,this.disableLoading=!0,this.disableEmail=!1,iv(Eg),void iv(Ig);!1===this.disableEmail&&(this.resetstate=!0)}getUserInfoChanged(e,t){"function"==typeof t&&void 0===this.auth&&(this.auth=structuredClone(t()))}getProteanTokenChanged(e,t){if("function"==typeof t&&void 0===this.proteanToken){const e=structuredClone(t());this.proteanToken=(null==e?void 0:e.token)||null}}resetstateChanged(e,t){!0===t&&(this.error=void 0)}getBaseTrialSignUpAPIUrl(){return this.trialsignupbaseapi.length>0?this.trialsignupbaseapi:this.isaem?B.trialSignupBaseAPI:H.trialSignupBaseAPI}openDialogOnClick(t){return(0,e.mG)(this,void 0,void 0,(function*(){if(this.resetstate=!1,this.newTrialUrl.length>0)return void(window.location.href=this.newTrialUrl);if(!1===this.startUpRequirementChecks("openDialogOnClick"))return!1;if(void 0===this.localizations)return zg.emitExceptionLoggedMetric({UIOperation:"WebComponent.openDialogOnClick"}),!1;!1===this.disableQuestion&&(this.disableQuestion=!0,this.disableLoading=!1);const e={contentId:bt,contentName:bt,scnstp:"FunnelLoad",aN:bt,hn:void 0,ehn:void 0,ecn:void 0,compnm:void 0},t={behavior:20,actionType:"CL"};yield this.sendTracking(t,{},e),this.opendialog=!0}))}generateGuid(){const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,();return iv(Lg),tv(Lg,e),e}opendialogChanged(e,t){document.documentElement.style.overflow=!0===t?"hidden":"auto"}isLeadFormCompleted(t){return(0,e.mG)(this,void 0,void 0,(function*(){const e={behavior:200},n={contentId:"sign-up-trial-send-request-button",contentName:"Submit",ecn:"Submit",scnstp:"SignupComplete"};return this.provisionEnvironmentUrl?(t&&(yield this.sendTracking(e,{auto_launch:!0},n)),yield vt(1),void(window.location.href=this.provisionEnvironmentUrl)):(t&&(yield this.sendTracking(e,{auto_launch:!1},n)),!0===this.enableLoadingPage?(this.disableLoading=!1,void(this.disableQuestion=!0)):void 0)}))}isTrialEmailCompleted(t){return(0,e.mG)(this,void 0,void 0,(function*(){this.error=void 0,this.newTrialEmailResponse=t,yield this.userlogin(t)}))}paramsLowerCase(){return(0,e.mG)(this,void 0,void 0,(function*(){const e=new URLSearchParams,t=new URLSearchParams(window.location.search);for(const n of t.keys())e.set(n.toLocaleLowerCase(),t.get(n));return e}))}userlogin(t){var n,i,r;return(0,e.mG)(this,void 0,void 0,(function*(){if(this.proteanToken&&this.auth){if(t.email.toLocaleLowerCase()===(null===(i=null===(n=this.auth)||void 0===n?void 0:n.emailAddress)||void 0===i?void 0:i.toLocaleLowerCase())){const e="Consumer"===t.userDetails.userType;if(e)if(void 0===this.scenarioId)yield vt(1),window.location.href=this.getSignUpUrl(t.email);else if("signup"!==(null===(r=this.scenarioId)||void 0===r?void 0:r.toLowerCase()))return this.error="EmailDialogRightInvalidEmail",yield this.sendTracking({},{error_code:"consumerdomain"},{id:"signup",contentName:"signup"}),zg.emitExceptionLoggedMetric({UIOperation:"WebComponent.ConsumerDomainInvalidScenarioId"}),!1;return iv(Ig),iv(Eg),void(yield this.provision(e))}{let e=this.getSwitchToUrl(t.email);return"Consumer"===t.userDetails.userType&&(e=this.getSignUpUrl(t.email)),tv(Ig,JSON.stringify(t)),tv(Eg,`${this.id}`),yield vt(1),window.location.href=e,!1}}{let e=this.getSignInToUrl(t.email);"Consumer"===t.userDetails.userType&&(e=this.getSignUpUrl(t.email)),tv(Ig,JSON.stringify(t)),tv(Eg,`${this.id}`),yield vt(1),window.location.href=e}}))}provision(t=!1){var n;return(0,e.mG)(this,void 0,void 0,(function*(){if(this.provisionService){const e=(new Date).toUTCString(),i=yield this.provisionService.provisionTrial(this.proteanToken,this.scenarioId);if(i.hasExistingEnvironment&&i.url)return yield vt(1),void(window.location.href=i.url);if(i.hasExistingEnvironment)return yield this.sendTracking({},{error_code:"CreateEnvironmentTimedOut"},{id:"environment",contentName:"environment"}),zg.emitExceptionLoggedMetric({UIOperation:"WebComponent.EmailScreenCreateEnvironmentTimedOut"}),void(this.error="EmailDialogEnvironmentCreationInProgress");if(i.needPolling||i.url){if(yield this.sendTracking({behavior:21},{},{id:bt,contentName:bt,aN:bt,scnstp:"Provisioning",compnm:void 0,hn:void 0,ehn:void 0,ecn:void 0}),this.enableQuestionaire&&!t){if(this.disableQuestion=!1,this.disableEmail=!0,i.url)return yield this.provisionReadyAnalytics(i,e,(new Date).toUTCString()),this.provisionEnvironmentUrl=i.url,void(this.newTrialUrl=i.url)}else if(this.enableLoadingPage){if(this.disableLoading=!1,this.disableEmail=!0,i.url)return yield this.provisionReadyAnalytics(i,e,(new Date).toUTCString()),this.loadingButtonLink=i.url,void(this.newTrialUrl=i.url)}else if(i.url)return yield this.provisionReadyAnalytics(i,e,(new Date).toUTCString()),yield vt(1),void(window.location.href=i.url);return void(yield this.environmentPolling(e))}if(i.error){const e={id:"provision",contentName:"provision"};return i.error===ut?(yield this.sendTracking({},{error_code:"CreateEnvironmentTimedOut"},e),zg.emitExceptionLoggedMetric({UIOperation:"WebComponent.CreateEnvironmentTimedOut"})):(yield this.sendTracking({},{error_code:null!==(n=i.error)&&void 0!==n?n:"CreateEnvironmentFailed"},e),zg.emitExceptionLoggedMetric({UIOperation:"WebComponent.CreateEnvironmentFailed"})),this.error=i.error,void this.logger.trackException(gt.Error,"Provisioning Environment failed",i)}}}))}environmentPolling(t){var n,i;return(0,e.mG)(this,void 0,void 0,(function*(){if(this.provisionService){let e;(null===(n=this.trialLoadingLocalization)||void 0===n?void 0:n.Configurations.LoadingDialogTimeout)&&(e=parseInt(null===(i=this.trialLoadingLocalization)||void 0===i?void 0:i.Configurations.LoadingDialogTimeout)||void 0);const r=yield this.provisionService.getEnvironmentPolling(this.proteanToken,e);if(r.url)return yield this.provisionReadyAnalytics(r,t,(new Date).toUTCString()),this.enableQuestionaire&&!this.disableQuestion?(this.provisionEnvironmentUrl=r.url,void(this.newTrialUrl=r.url)):this.enableLoadingPage?(this.loadingButtonLink=r.url,void(this.newTrialUrl=r.url)):void(window.location.href=r.url);if(r.error)return this.error=r.error,this.logger.trackException(gt.Error,"Provision failed",r),void zg.emitExceptionLoggedMetric({UIOperation:"WebComponent.ProvisioningFailedDuringPolling"})}}))}provisionReadyAnalytics(t,n,i){var r;return(0,e.mG)(this,void 0,void 0,(function*(){let e;window.WcpConsent&&window.WcpConsent.siteconsent&&(yield window.WcpConsent.siteconsent.getConsent()).Analytics&&(e={environment_id:t.environmentId,org_url:t.url,org_id:t.organizationId});const o={provision_end_time:n,provision_start_time:i,userInfo:this.auth,base_language:t.baseLanguage,totalSlidesCount:null===(r=this.trialLoadingLocalization)||void 0===r?void 0:r.Content.Carousel.length,ProvisioningType:"TryFree"},a={scnstp:"ProvisioningComplete",aN:bt,hn:void 0,ehn:void 0,compnm:void 0,contentName:bt,id:bt},s=Object.assign(Object.assign({},e),o);yield this.sendTracking({behavior:0},s,a)}))}getSwitchTenantUrl(e){let t=new URLSearchParams(window.location.search);t.delete(this.LocalParamsConstants.tenantId),t.delete(this.LocalParamsConstants.loginHint),t.delete(this.LocalParamsConstants.tsApp),t.append(this.LocalParamsConstants.newTrialInProgress,"true");const n=encodeURIComponent(`${window.location.origin}${window.location.pathname}?${t}`);return this.isaem?`${B.switchtenant}?tenantid=${e}&ru=${n}`:`${H.switchtenant}?tenantid=${e}&ru=${n}`}getSignInToUrl(e,t){let n=new URLSearchParams(window.location.search);n.append(this.LocalParamsConstants.newTrialInProgress,"true"),n.delete(this.LocalParamsConstants.tsApp),n.delete(this.LocalParamsConstants.loginHint),n.delete(this.LocalParamsConstants.tenantId);const i=encodeURIComponent(`${window.location.origin}${window.location.pathname}?${n}`);if(this.isaem)return`${B.signinto}?ru=${i}&login_hint=${e}`;{let n=`${H.signinto}?ru=${i}&login_hint=${e}`;return t&&(n+=`&tenantID=${t}`),n}}getSignUpUrl(e){const t=encodeURIComponent(`${window.location.origin}${window.location.pathname}?newtrialinprogress=true&appName=${this.appName}&tenantid={tenantid}`);return`${H.signup}?products=${this.productIdSignup}&bac=1&useAltSecOnly=true&brandingid=${this.brandingId}&ar=1&email=${e}&ru=${t}`}getSwitchToUrl(e){let t=new URLSearchParams(window.location.search);t.delete(this.LocalParamsConstants.loginHint),t.delete(this.LocalParamsConstants.tsApp),t.append(this.LocalParamsConstants.newTrialInProgress,"true");const n=encodeURIComponent(`${window.location.origin}${window.location.pathname}?${t}`);return this.isaem?`${B.switchto}?ru=${n}&login_hint=${e}`:`${H.switchto}?ru=${n}&login_hint=${e}`}getLocalization(){var t,n,i,r,o,s,l;return(0,e.mG)(this,void 0,void 0,(function*(){const e=new rv(this.partnerid,this.correlationId,this.trialscenariotype,this.getBaseTrialSignUpAPIUrl(),this.loclang);this.diContainer.register(a.YM.instance("TrialLocalizationService",e));let c=yield e.getApplicationConfiguration();this.enableLoadingPage=null!==(t=c.EnableTrialSignUpLoadingDialog)&&void 0!==t&&t,this.enableQuestionaire=null!==(n=c.EnableLeadForm)&&void 0!==n&&n,this.enableSetupLink=!c.IsNoNewEmailAccount,this.enableSetupLinkNeptune=c.NeptuneErrorNewAccountSetupLink,this.offerName=null!==(i=c.OfferName)&&void 0!==i?i:"",this.offerId=null!==(r=c.OfferID)&&void 0!==r?r:"",this.appName=null!==(o=c.AppName)&&void 0!==o?o:"",this.productIdSignup=null!==(s=c.ProductIDSignup)&&void 0!==s?s:"",this.brandingId=null!==(l=c.BrandingID)&&void 0!==l?l:"",this.applicationFullName=yield e.getApplicationFullName(),this.applicationSlug=yield e.getApplicationSlug(),this.localizations=yield e.getApplicationLoc(),this.trialLoadingLocalization=yield e.getLoadingDialogLoc(),this.enableRTLDisclaimer=yield e.getEnableRTLDisclaimer()}))}sendTracking(e,t,n){const i={pageTags:Object.assign({app_name:this.applicationSlug,ProductInfo:{id:this.offerId,title:this.offerName,sku:""},action_time:(new Date).toUTCString(),correlation_id:this.correlationId,userInfo:this.auth},t)},r=Object.assign({sN:"0",compnm:this.areaName,hn:this.applicationFullName.replaceAll("&nbsp;"," "),ehn:this.applicationFullName.replaceAll("&nbsp;"," "),trlid:this.offerId,trlnm:this.offerName,scn:this.scn},n),o=Object.assign(Object.assign({},e),{properties:i,content:r});try{this.telemetry.trackEvent(o)}catch(e){this.logger.trackException(gt.Error,"JSLLTrackEvent failed",e)}}startUpRequirementChecks(e){return 0===this.id.trim().length?(zg.emitExceptionLoggedMetric({UIOperation:`WebComponent.${e}`}),this.logger.trackException(gt.Error,"ID attribute is required"),console.error("ID is required"),!1):""!==this.partnerid&&""!==this.trialscenariotype||(zg.emitExceptionLoggedMetric({UIOperation:`WebComponent.${e}`}),this.logger.trackException(gt.Error,"New Trial Web Component: Partner ID and Trial Scenario Type are required."),console.error("Partner ID and Trial Scenario Type are required."),!1)}UpdateUnSupportedRTLanguage(){var e,t,n,i;const r=["ar","he"],o=2===(null===(e=this.loclang)||void 0===e?void 0:e.indexOf("-"))?null===(t=this.loclang)||void 0===t?void 0:t.slice(0,2):this.loclang,a=r.includes(o),s=2===(null===(n=window.navigator.language)||void 0===n?void 0:n.indexOf("-"))?null===(i=window.navigator.language)||void 0===i?void 0:i.slice(0,2).toLowerCase():window.navigator.language.toLowerCase(),l=null==r?void 0:r.includes(s);(a||l)&&(this.showDisclaimerFlag=!0)}};(0,e.gn)([r.Lj],av.prototype,"partnerid",void 0),(0,e.gn)([r.Lj],av.prototype,"trialscenariotype",void 0),(0,e.gn)([r.Lj],av.prototype,"id",void 0),(0,e.gn)([(0,r.Lj)({mode:"boolean"})],av.prototype,"haslocalizationobject",void 0),(0,e.gn)([r.Lj],av.prototype,"trialsignupbaseapi",void 0),(0,e.gn)([(0,r.Lj)({mode:"boolean"})],av.prototype,"isaem",void 0),(0,e.gn)([r.Lj],av.prototype,"dir",void 0),(0,e.gn)([o.LO],av.prototype,"getUserInfo",void 0),(0,e.gn)([o.LO],av.prototype,"getProteanToken",void 0),(0,e.gn)([o.LO],av.prototype,"enableEmail",void 0),(0,e.gn)([o.LO],av.prototype,"enableQuestionaire",void 0),(0,e.gn)([o.LO],av.prototype,"enableLoadingPage",void 0),(0,e.gn)([o.LO],av.prototype,"disableEmail",void 0),(0,e.gn)([o.LO],av.prototype,"disableQuestion",void 0),(0,e.gn)([o.LO],av.prototype,"disableLoading",void 0),(0,e.gn)([o.LO],av.prototype,"trialEmailLocalization",void 0),(0,e.gn)([o.LO],av.prototype,"enableRTLDisclaimer",void 0),(0,e.gn)([o.LO],av.prototype,"showDisclaimerFlag",void 0),(0,e.gn)([o.LO],av.prototype,"trialLoadingLocalization",void 0),(0,e.gn)([o.LO],av.prototype,"leadsFormLocalization",void 0),(0,e.gn)([o.LO],av.prototype,"commonFormErrorLocalization",void 0),(0,e.gn)([o.LO],av.prototype,"localizations",void 0),(0,e.gn)([o.LO],av.prototype,"injectedlocalizationobject",void 0),(0,e.gn)([o.LO],av.prototype,"loadingButtonLink",void 0),(0,e.gn)([o.LO],av.prototype,"error",void 0),(0,e.gn)([o.LO],av.prototype,"enableEmailLoadingState",void 0),(0,e.gn)([o.LO],av.prototype,"opendialog",void 0),(0,e.gn)([o.LO],av.prototype,"offerName",void 0),(0,e.gn)([o.LO],av.prototype,"offerId",void 0),(0,e.gn)([o.LO],av.prototype,"appName",void 0),(0,e.gn)([o.LO],av.prototype,"resetstate",void 0),(0,e.gn)([o.LO],av.prototype,"enableSetupLink",void 0),(0,e.gn)([o.LO],av.prototype,"enableSetupLinkNeptune",void 0),(0,e.gn)([o.LO],av.prototype,"applicationFullName",void 0),(0,e.gn)([o.LO],av.prototype,"auth",void 0),(0,e.gn)([o.LO],av.prototype,"proteanToken",void 0),(0,e.gn)([o.LO],av.prototype,"applicationSlug",void 0),av=(0,e.gn)([(0,t.M)({name:"new-trial",template:Yg,styles:Qg,shadowOptions:{delegatesFocus:!0}})],av)})();var r=i.D;export{r as NewTrial};
//# sourceMappingURL=newtrial.js.map
// SIG // Begin signature block
// SIG // MIInzwYJKoZIhvcNAQcCoIInwDCCJ7wCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // t3uosw4LfbY9S4h3xEIEDp6XMg+qyqoinErA0XrV31Sg
// SIG // gg2FMIIGAzCCA+ugAwIBAgITMwAAA64tNVHIU49VHQAA
// SIG // AAADrjANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTIzMTExNjE5MDg1OVoX
// SIG // DTI0MTExNDE5MDg1OVowdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // 9CD8pjY3wxCoPmMhOkow7ycCltfqYnqk4wGNApzh2dTY
// SIG // +YqxozWTzJUOB38VxsgFQmXBFhOMdrGYGpvO9kdbNPkw
// SIG // HpTrW6hZqFuLLiRwGKEx4ZM5zVSqbHJuX2fPfUJ0Xmb+
// SIG // VrVsGw/BwBV2zz0rVtiSgqj3GeeGOsG7llfWyrSjyJqm
// SIG // 5DHE3o04BAI/NuhkHOv04euiqJGvHFCL8+fXvyD9OAxq
// SIG // 4fcJKtoyBb0PBA3oMNQeCsiUyLO+voZqVTOUsAWY0bN5
// SIG // YjkK4nq5DVaNdVrrowd5AX9gmz6D/TJTssns6pDCG00Y
// SIG // +Dh3ipWpnVmkhYcByyUSEKX3PLC8DkiAQQIDAQABo4IB
// SIG // gjCCAX4wHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFIcf73Spl4cHOFoll27H9COd
// SIG // 4fE/MFQGA1UdEQRNMEukSTBHMS0wKwYDVQQLEyRNaWNy
// SIG // b3NvZnQgSXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQx
// SIG // FjAUBgNVBAUTDTIzMDAxMis1MDE4MzYwHwYDVR0jBBgw
// SIG // FoAUSG5k5VAF04KqFzc3IrVtqMp1ApUwVAYDVR0fBE0w
// SIG // SzBJoEegRYZDaHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraW9wcy9jcmwvTWljQ29kU2lnUENBMjAxMV8yMDEx
// SIG // LTA3LTA4LmNybDBhBggrBgEFBQcBAQRVMFMwUQYIKwYB
// SIG // BQUHMAKGRWh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvY2VydHMvTWljQ29kU2lnUENBMjAxMV8yMDEx
// SIG // LTA3LTA4LmNydDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQBqyWA1Eu7PKNMjaaxl0V7gJ0XBysUo
// SIG // xZluMHJXFE2LEGZIZ2zMLYVjOnAGG/4dluRjSrZZo/8v
// SIG // wk4Xt8v6NBB9ofo8H1P/XidHytWTv9lg9MYu++6lPmu5
// SIG // fCozD3cI2NLZPW2BBhGX2D0R8tQBj0FbmZRuIucpiQ7D
// SIG // K3CHKlfKcc7MP8pPzuMv55Tox8+KFQD1NG6+bfbYA/BN
// SIG // PBkg4tyOh+exbaHfcNuodDJUIjq9dF6oa+Yjy0u0pUMI
// SIG // /B1t+8m6rJo0KSoZlrpesYl0jRhpt+hmqx8uENXoGJcY
// SIG // ZVJ5N2Skq90LViKNRhi9N4U+e8c4y9uXyomUF/6viCPJ
// SIG // 7huTNEJo75ehIJba+IWd3txUEc0R3y6DT6txC6cW1nR/
// SIG // LTbo9I/8fQq538G5IvJ+e5iSiOSVVkVk0i5m03Awy5E2
// SIG // ZSS4PVdQSCcFxmN4tpEfYuR7AAy/GJVtIDFlUpSgdXok
// SIG // pSui5hYtK1R9enXXvo+U/xGkLRc+qp4De3dZbzu7pOq7
// SIG // V/jCyhuCw0bEIAU4urCGIip7TI6GBRzD7yPzjFIqeZY7
// SIG // S4rVW5BRn2oEqpm8Su6yTIQvMIk8x2pwYNUa2339Z4gW
// SIG // 5xW21eFA5mLpo7NRSKRQms5OgAA18aCgqOU7Ds0h6q/Y
// SIG // B4BmEAtoTMl/TBiyKaMGAlEcdy+5FIhmzojMGjCCB3ow
// SIG // ggVioAMCAQICCmEOkNIAAAAAAAMwDQYJKoZIhvcNAQEL
// SIG // BQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMT
// SIG // KU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1dGhv
// SIG // cml0eSAyMDExMB4XDTExMDcwODIwNTkwOVoXDTI2MDcw
// SIG // ODIxMDkwOVowfjELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEoMCYG
// SIG // A1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmluZyBQQ0Eg
// SIG // MjAxMTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoC
// SIG // ggIBAKvw+nIQHC6t2G6qghBNNLrytlghn0IbKmvpWlCq
// SIG // uAY4GgRJun/DDB7dN2vGEtgL8DjCmQawyDnVARQxQtOJ
// SIG // DXlkh36UYCRsr55JnOloXtLfm1OyCizDr9mpK656Ca/X
// SIG // llnKYBoF6WZ26DJSJhIv56sIUM+zRLdd2MQuA3WraPPL
// SIG // bfM6XKEW9Ea64DhkrG5kNXimoGMPLdNAk/jj3gcN1Vx5
// SIG // pUkp5w2+oBN3vpQ97/vjK1oQH01WKKJ6cuASOrdJXtjt
// SIG // 7UORg9l7snuGG9k+sYxd6IlPhBryoS9Z5JA7La4zWMW3
// SIG // Pv4y07MDPbGyr5I4ftKdgCz1TlaRITUlwzluZH9TupwP
// SIG // rRkjhMv0ugOGjfdf8NBSv4yUh7zAIXQlXxgotswnKDgl
// SIG // mDlKNs98sZKuHCOnqWbsYR9q4ShJnV+I4iVd0yFLPlLE
// SIG // tVc/JAPw0XpbL9Uj43BdD1FGd7P4AOG8rAKCX9vAFbO9
// SIG // G9RVS+c5oQ/pI0m8GLhEfEXkwcNyeuBy5yTfv0aZxe/C
// SIG // HFfbg43sTUkwp6uO3+xbn6/83bBm4sGXgXvt1u1L50kp
// SIG // pxMopqd9Z4DmimJ4X7IvhNdXnFy/dygo8e1twyiPLI9A
// SIG // N0/B4YVEicQJTMXUpUMvdJX3bvh4IFgsE11glZo+TzOE
// SIG // 2rCIF96eTvSWsLxGoGyY0uDWiIwLAgMBAAGjggHtMIIB
// SIG // 6TAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4EFgQUSG5k
// SIG // 5VAF04KqFzc3IrVtqMp1ApUwGQYJKwYBBAGCNxQCBAwe
// SIG // CgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB
// SIG // /wQFMAMBAf8wHwYDVR0jBBgwFoAUci06AjGQQ7kUBU7h
// SIG // 6qfHMdEjiTQwWgYDVR0fBFMwUTBPoE2gS4ZJaHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVj
// SIG // dHMvTWljUm9vQ2VyQXV0MjAxMV8yMDExXzAzXzIyLmNy
// SIG // bDBeBggrBgEFBQcBAQRSMFAwTgYIKwYBBQUHMAKGQmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMv
// SIG // TWljUm9vQ2VyQXV0MjAxMV8yMDExXzAzXzIyLmNydDCB
// SIG // nwYDVR0gBIGXMIGUMIGRBgkrBgEEAYI3LgMwgYMwPwYI
// SIG // KwYBBQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9wa2lvcHMvZG9jcy9wcmltYXJ5Y3BzLmh0bTBABggr
// SIG // BgEFBQcCAjA0HjIgHQBMAGUAZwBhAGwAXwBwAG8AbABp
// SIG // AGMAeQBfAHMAdABhAHQAZQBtAGUAbgB0AC4gHTANBgkq
// SIG // hkiG9w0BAQsFAAOCAgEAZ/KGpZjgVHkaLtPYdGcimwuW
// SIG // EeFjkplCln3SeQyQwWVfLiw++MNy0W2D/r4/6ArKO79H
// SIG // qaPzadtjvyI1pZddZYSQfYtGUFXYDJJ80hpLHPM8QotS
// SIG // 0LD9a+M+By4pm+Y9G6XUtR13lDni6WTJRD14eiPzE32m
// SIG // kHSDjfTLJgJGKsKKELukqQUMm+1o+mgulaAqPyprWElj
// SIG // HwlpblqYluSD9MCP80Yr3vw70L01724lruWvJ+3Q3fMO
// SIG // r5kol5hNDj0L8giJ1h/DMhji8MUtzluetEk5CsYKwsat
// SIG // ruWy2dsViFFFWDgycScaf7H0J/jeLDogaZiyWYlobm+n
// SIG // t3TDQAUGpgEqKD6CPxNNZgvAs0314Y9/HG8VfUWnduVA
// SIG // KmWjw11SYobDHWM2l4bf2vP48hahmifhzaWX0O5dY0Hj
// SIG // Wwechz4GdwbRBrF1HxS+YWG18NzGGwS+30HHDiju3mUv
// SIG // 7Jf2oVyW2ADWoUa9WfOXpQlLSBCZgB/QACnFsZulP0V3
// SIG // HjXG0qKin3p6IvpIlR+r+0cjgPWe+L9rt0uX4ut1eBrs
// SIG // 6jeZeRhL/9azI2h15q/6/IvrC4DqaTuv/DDtBEyO3991
// SIG // bWORPdGdVk5Pv4BXIqF4ETIheu9BCrE/+6jMpF3BoYib
// SIG // V3FWTkhFwELJm3ZbCoBIa/15n8G9bW1qyVJzEw16UM0x
// SIG // ghmiMIIZngIBATCBlTB+MQswCQYDVQQGEwJVUzETMBEG
// SIG // A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
// SIG // ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBTaWduaW5n
// SIG // IFBDQSAyMDExAhMzAAADri01UchTj1UdAAAAAAOuMA0G
// SIG // CWCGSAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJAzEMBgor
// SIG // BgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEE
// SIG // AYI3AgEVMC8GCSqGSIb3DQEJBDEiBCAtvj1u1l9d4fVn
// SIG // aHggszFey1prnAa7zqZTQrU7u75fVDBCBgorBgEEAYI3
// SIG // AgEMMTQwMqAUgBIATQBpAGMAcgBvAHMAbwBmAHShGoAY
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tMA0GCSqGSIb3
// SIG // DQEBAQUABIIBAHimkaZnpcQvGUAqFAziVwSRP+PEaPeJ
// SIG // msxDuJCQ3mMPUYGqXkZ9OtIwIOzT8fd3GV/nqGwh3xNz
// SIG // N4ZuQFMYMiNo2fcmZ2SuPMUxAzUt2yl+gkkpMc+Rq2wZ
// SIG // VYglaPoxiovNIQJ4KLXYqDkbH+LO1PTJQd0A+/5rQWi1
// SIG // xZKHeD0m3ZhmvschmDq1HiFyIUGI2mm/CwcAmJwnkOmV
// SIG // Bl68X8TUgcBC2U8KD6XQ9ByWQtfm6HnasdzbCzvlg78j
// SIG // egPM6fwe1rGwEmloFUDwvq3Nhf+WR8nrBhLLDkBkm8Ig
// SIG // 2kYb2pOfJDjBz7eDaIm5cEUISexZsylnYVfVo1dXyX2F
// SIG // 1wqhghcsMIIXKAYKKwYBBAGCNwMDATGCFxgwghcUBgkq
// SIG // hkiG9w0BBwKgghcFMIIXAQIBAzEPMA0GCWCGSAFlAwQC
// SIG // AQUAMIIBWQYLKoZIhvcNAQkQAQSgggFIBIIBRDCCAUAC
// SIG // AQEGCisGAQQBhFkKAwEwMTANBglghkgBZQMEAgEFAAQg
// SIG // mnhit8aSf2IUBew/IwYKx+bnXFB/5jj5UskEFvHOoUYC
// SIG // BmWC9Ca+NhgTMjAyNDAxMTgxNzE0MjguODgyWjAEgAIB
// SIG // 9KCB2KSB1TCB0jELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEtMCsG
// SIG // A1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0aW9u
// SIG // cyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVT
// SIG // TjozQkQ0LTRCODAtNjlDMzElMCMGA1UEAxMcTWljcm9z
// SIG // b2Z0IFRpbWUtU3RhbXAgU2VydmljZaCCEXswggcnMIIF
// SIG // D6ADAgECAhMzAAAB5Y9qwPM9tAujAAEAAAHlMA0GCSqG
// SIG // SIb3DQEBCwUAMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwMB4XDTIzMTAxMjE5MDczNVoXDTI1MDExMDE5MDcz
// SIG // NVowgdIxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsT
// SIG // JE1pY3Jvc29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGlt
// SIG // aXRlZDEmMCQGA1UECxMdVGhhbGVzIFRTUyBFU046M0JE
// SIG // NC00QjgwLTY5QzMxJTAjBgNVBAMTHE1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFNlcnZpY2UwggIiMA0GCSqGSIb3DQEB
// SIG // AQUAA4ICDwAwggIKAoICAQCpe+A62rtjuiy6yTtx8k7z
// SIG // vWl2ov/3jcj+TC1ma5lBjTiTD8DCNPFfcwX0TzXLnK3i
// SIG // GEsiR45DCFBprodKz1ef9vlAixqzdT++5/X6v5nc1zDd
// SIG // Rc6mjx3ShJSp3iUPEenD+Ha7thspprda6xnDXvNNAnA+
// SIG // nfzXaKJppHdfelajrY2RQNV1rvhrBQXlh4ns/z5ZanDP
// SIG // 3lp7ZEDLNJStM5gnx/gbu4tYfhQ0UfBe1s1K/+zN44VX
// SIG // T6QH6ts2AgPGVSzYBIs2PrxZoMfsw7rlPxgoQyu5JQ3A
// SIG // sPv4FaBLkjpeXJULMnVkIySV+2dslftSguhtSVaqT93a
// SIG // SjwD/+LnTaqUeRyHm/E2tSX40VM0r96ko3ucvUWE/wI1
// SIG // jWEO4LHs7g1jP/HGddZHKNSb1MjkPMfyQ5DBakkcI9b/
// SIG // pnOiyipY//3Vghvx8PaaXZViV+qbA3rELkEexVe3gqlf
// SIG // 5X2o6C6Tzcf/cxdXb/MlwXc5liT3gontl2kJ6wCg6pRt
// SIG // 817sfbTUJs9i/ek3cZyDtjhpmMQQAGQFqCm5rWCPgos+
// SIG // AmMjtBZuWd0+NGuXeyibn7Regk6HHHP1Kf46RX0IrS34
// SIG // 3e9XEvnCwnqEPqtJ9CAC71fmnGxDaLkjq47/0LWOBSIx
// SIG // 5SOc3ScyZxrJFSeaM4Y4tGEbHL9VsCRQLssgjELy3Zj3
// SIG // XQIDAQABo4IBSTCCAUUwHQYDVR0OBBYEFN//n4e7TXMx
// SIG // InxF5QkIBTl4DIeqMB8GA1UdIwQYMBaAFJ+nFV0AXmJd
// SIG // g/Tl0mWnG1M1GelyMF8GA1UdHwRYMFYwVKBSoFCGTmh0
// SIG // dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY3Js
// SIG // L01pY3Jvc29mdCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAy
// SIG // MDEwKDEpLmNybDBsBggrBgEFBQcBAQRgMF4wXAYIKwYB
// SIG // BQUHMAKGUGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvY2VydHMvTWljcm9zb2Z0JTIwVGltZS1TdGFt
// SIG // cCUyMFBDQSUyMDIwMTAoMSkuY3J0MAwGA1UdEwEB/wQC
// SIG // MAAwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0P
// SIG // AQH/BAQDAgeAMA0GCSqGSIb3DQEBCwUAA4ICAQAz+sIT
// SIG // hYw9WnfBpBCfaCwbr3453TMhkPUeB4ASkpT7d6WtF1S3
// SIG // IpqyZQ5yhoBQYlsCOlzoMPNoXaJQ4jAwSy1kTEyR1lXl
// SIG // GNYFOFwfDjiMQXPf0PN829XNEVhLqYAuPCPm/tsdlTYB
// SIG // iVLECMj0dj4l0IU+T8nqzIGoPTkqHUIxcKTXRoq52tq6
// SIG // VdtxFMBXjuft6El+CXgjWb4MlDsyqcjL6lWrm6PhpX/6
// SIG // bH1ubSHDI2VbdHpbMH6tKiTUIKGIqW2k77+8ZosVCRk2
// SIG // 4sWIn08AIrz3CjXXorGZrbbOzh2wDO/eWbyi0hKl4kVI
// SIG // w2Gcnh8gMrDBAC2yIXV4BxIetCqGcs5QV891cRIqxO54
// SIG // bnDcDNrVYjpcCOxJHlOYbnXLZ1whueSbjMP8G+3O9USo
// SIG // pmQPyl5VqZgb5CZAdAWREvDghg3fs2P0/QZ06fLIt+k6
// SIG // pfOFX6WHvYh5suz6qsajBdgp+KtmtJhDJ6Qa7gxhP4Ef
// SIG // XPElSdp7ZAEcuUn5brifzAetckb09ZlMd5cqaTttnj4w
// SIG // Y58KBL1cWw409Y4XTDXXrzrg3iRs0SyvRzZkwwvk3WUJ
// SIG // Y/lTICJvGXhCETRdKGr4hfkGXFGS1s1m2Kusg6JPBGSh
// SIG // YkUeaLQaBi72mBacQWVBPJpyyrg5WKG468Ye5Z8K8Vf3
// SIG // zMtBfX0qNicRZrS4LTCCB3EwggVZoAMCAQICEzMAAAAV
// SIG // xedrngKbSZkAAAAAABUwDQYJKoZIhvcNAQELBQAwgYgx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jv
// SIG // c29mdCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAy
// SIG // MDEwMB4XDTIxMDkzMDE4MjIyNVoXDTMwMDkzMDE4MzIy
// SIG // NVowfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMd
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwggIi
// SIG // MA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDk4aZM
// SIG // 57RyIQt5osvXJHm9DtWC0/3unAcH0qlsTnXIyjVX9gF/
// SIG // bErg4r25PhdgM/9cT8dm95VTcVrifkpa/rg2Z4VGIwy1
// SIG // jRPPdzLAEBjoYH1qUoNEt6aORmsHFPPFdvWGUNzBRMhx
// SIG // XFExN6AKOG6N7dcP2CZTfDlhAnrEqv1yaa8dq6z2Nr41
// SIG // JmTamDu6GnszrYBbfowQHJ1S/rboYiXcag/PXfT+jlPP
// SIG // 1uyFVk3v3byNpOORj7I5LFGc6XBpDco2LXCOMcg1KL3j
// SIG // tIckw+DJj361VI/c+gVVmG1oO5pGve2krnopN6zL64NF
// SIG // 50ZuyjLVwIYwXE8s4mKyzbnijYjklqwBSru+cakXW2dg
// SIG // 3viSkR4dPf0gz3N9QZpGdc3EXzTdEonW/aUgfX782Z5F
// SIG // 37ZyL9t9X4C626p+Nuw2TPYrbqgSUei/BQOj0XOmTTd0
// SIG // lBw0gg/wEPK3Rxjtp+iZfD9M269ewvPV2HM9Q07BMzlM
// SIG // jgK8QmguEOqEUUbi0b1qGFphAXPKZ6Je1yh2AuIzGHLX
// SIG // pyDwwvoSCtdjbwzJNmSLW6CmgyFdXzB0kZSU2LlQ+QuJ
// SIG // YfM2BjUYhEfb3BvR/bLUHMVr9lxSUV0S2yW6r1AFemzF
// SIG // ER1y7435UsSFF5PAPBXbGjfHCBUYP3irRbb1Hode2o+e
// SIG // FnJpxq57t7c+auIurQIDAQABo4IB3TCCAdkwEgYJKwYB
// SIG // BAGCNxUBBAUCAwEAATAjBgkrBgEEAYI3FQIEFgQUKqdS
// SIG // /mTEmr6CkTxGNSnPEP8vBO4wHQYDVR0OBBYEFJ+nFV0A
// SIG // XmJdg/Tl0mWnG1M1GelyMFwGA1UdIARVMFMwUQYMKwYB
// SIG // BAGCN0yDfQEBMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvRG9jcy9SZXBv
// SIG // c2l0b3J5Lmh0bTATBgNVHSUEDDAKBggrBgEFBQcDCDAZ
// SIG // BgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8E
// SIG // BAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAW
// SIG // gBTV9lbLj+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBN
// SIG // MEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAx
// SIG // MC0wNi0yMy5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsG
// SIG // AQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIz
// SIG // LmNydDANBgkqhkiG9w0BAQsFAAOCAgEAnVV9/Cqt4Swf
// SIG // ZwExJFvhnnJL/Klv6lwUtj5OR2R4sQaTlz0xM7U518Jx
// SIG // Nj/aZGx80HU5bbsPMeTCj/ts0aGUGCLu6WZnOlNN3Zi6
// SIG // th542DYunKmCVgADsAW+iehp4LoJ7nvfam++Kctu2D9I
// SIG // dQHZGN5tggz1bSNU5HhTdSRXud2f8449xvNo32X2pFaq
// SIG // 95W2KFUn0CS9QKC/GbYSEhFdPSfgQJY4rPf5KYnDvBew
// SIG // VIVCs/wMnosZiefwC2qBwoEZQhlSdYo2wh3DYXMuLGt7
// SIG // bj8sCXgU6ZGyqVvfSaN0DLzskYDSPeZKPmY7T7uG+jIa
// SIG // 2Zb0j/aRAfbOxnT99kxybxCrdTDFNLB62FD+CljdQDzH
// SIG // VG2dY3RILLFORy3BFARxv2T5JL5zbcqOCb2zAVdJVGTZ
// SIG // c9d/HltEAY5aGZFrDZ+kKNxnGSgkujhLmm77IVRrakUR
// SIG // R6nxt67I6IleT53S0Ex2tVdUCbFpAUR+fKFhbHP+Crvs
// SIG // QWY9af3LwUFJfn6Tvsv4O+S3Fb+0zj6lMVGEvL8CwYKi
// SIG // excdFYmNcP7ntdAoGokLjzbaukz5m/8K6TT4JDVnK+AN
// SIG // uOaMmdbhIurwJ0I9JZTmdHRbatGePu1+oDEzfbzL6Xu/
// SIG // OHBE0ZDxyKs6ijoIYn/ZcGNTTY3ugm2lBRDBcQZqELQd
// SIG // VTNYs6FwZvKhggLXMIICQAIBATCCAQChgdikgdUwgdIx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xLTArBgNVBAsTJE1pY3Jv
// SIG // c29mdCBJcmVsYW5kIE9wZXJhdGlvbnMgTGltaXRlZDEm
// SIG // MCQGA1UECxMdVGhhbGVzIFRTUyBFU046M0JENC00Qjgw
// SIG // LTY5QzMxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFNlcnZpY2WiIwoBATAHBgUrDgMCGgMVAPeNohrm
// SIG // Ba7BOMM1g3fORKTOkYsKoIGDMIGApH4wfDELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRp
// SIG // bWUtU3RhbXAgUENBIDIwMTAwDQYJKoZIhvcNAQEFBQAC
// SIG // BQDpU6vlMCIYDzIwMjQwMTE4MjE1MzQxWhgPMjAyNDAx
// SIG // MTkyMTUzNDFaMHcwPQYKKwYBBAGEWQoEATEvMC0wCgIF
// SIG // AOlTq+UCAQAwCgIBAAICCKUCAf8wBwIBAAICEVAwCgIF
// SIG // AOlU/WUCAQAwNgYKKwYBBAGEWQoEAjEoMCYwDAYKKwYB
// SIG // BAGEWQoDAqAKMAgCAQACAwehIKEKMAgCAQACAwGGoDAN
// SIG // BgkqhkiG9w0BAQUFAAOBgQBH1c2EVUg9j7XVIVQnRD+T
// SIG // y7mWZ+6+N/34cL5qMwPaf4WYXtZAUljj7rXKQW6sDJHz
// SIG // 2p7La2cJLVQEMSALX2XPmE4ACY1Zlt81DRXypNqAEoh8
// SIG // l6Q09kMIrgzfjgOkdm0UjAC2GphB67y/1KOOsIgeAj/H
// SIG // hex0ifsJK8Is/YoBATGCBA0wggQJAgEBMIGTMHwxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29m
// SIG // dCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB5Y9qwPM9
// SIG // tAujAAEAAAHlMA0GCWCGSAFlAwQCAQUAoIIBSjAaBgkq
// SIG // hkiG9w0BCQMxDQYLKoZIhvcNAQkQAQQwLwYJKoZIhvcN
// SIG // AQkEMSIEIHpPPY07B9b9uxpikpCVh3MHr9i2zVZRoK2K
// SIG // QDVwD6Q8MIH6BgsqhkiG9w0BCRACLzGB6jCB5zCB5DCB
// SIG // vQQgFanT//6o8RhYXtmG6BF3m/CP6QKH9NQsIW8VB/VO
// SIG // ve0wgZgwgYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYw
// SIG // JAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0Eg
// SIG // MjAxMAITMwAAAeWPasDzPbQLowABAAAB5TAiBCAQEMj8
// SIG // cBaffK6JtRDi1BCfp+nD10TN/RIdpqBIA8PQRTANBgkq
// SIG // hkiG9w0BAQsFAASCAgCbfVFZMNnqVxVtU+2S8kmACdt0
// SIG // hB6kUU3HvwMWMfklX67OJac63dEK+Hoii5FSzRYlQFMQ
// SIG // Nb42E/j7RdDq0Hxq8YPVe6RDKojR+XoIK03r3kfZ0pGN
// SIG // LqJ0GQc3IUiAKB3Vcsjr4tbj8TgBu0WQ29WbwePXDdO6
// SIG // lylAFZyX5KgqyXNSvoCRhCS3lkHO7CjkaFVDs4YjE4td
// SIG // oW8rXv8FL4ZEKy8dipnP8WTaAIriKDKZ48Dqc8w1MAkt
// SIG // JgP6OYgjof100UUd3ERrVj0KBSa1ZwfZHluYSNY8QH8H
// SIG // POQ31JqvSWYsQXcHffsZlgkcndKjPYsTKB4s94Fj9x1T
// SIG // NV1M1zLD9C006HBdpLGTnUwyaCMgBR+4uT4tpGQj6QBH
// SIG // TbaAlWaGEncGsxna9OYt3DPMOkz2S8UgpwjPb19KOcDU
// SIG // dfEjiEfxBPt4MrZrvrHVoKT3STPg67ZPqXkbd0Kipilv
// SIG // 1ZwaJPWJfObzjLY9Qbw6X9ljjVYXkw2l+JXx0F3yR4j6
// SIG // w3siFjPuxVMug468hmJkt/OMpb84sG54umnKNxfdv0R/
// SIG // cqrZG1bQF48CXhWGhr45Qhj3JV+ILk8hWXm24XZw4WpX
// SIG // heZt06EiAws7iSNC51VsRta4E/T2rMd0GQVPtPCfv9z0
// SIG // sI0tbIf5aKjL09C4/IahmPJ3TfCA6UxqrMURdOhxcQ==
// SIG // End signature block
