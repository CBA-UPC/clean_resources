import{h as Se,j as Te,k as ee,p as te,o as Ae,T as Fe,q as ie,u as re,v as Ee,w as Me,y as He,z as se,D as Be,i as A,E as ke,F as Pe,H as Ce,x as s,G as Ie,I as ze,J as F,K as X,n as h,L as Ne,N as Ue,O as oe,m as x,B as $,a as O,r as d,s as V,e as ae,l as a,g as S,_ as L,c as J,t as G,Q as Oe,R as ne,U as le,V as H,b as B,W as de,C as ce,X as he,Y as Ve,Z as Ge}from"./index-aa05d19d.js";import{c as C}from"./repeat-1a78a8d2.js";import{D as pe}from"./product-collection-91cc6b51.js";import"./chunk.OHYIWJSO-d08d8d85.js";import{S as qe}from"./chunk.HDLULROG-fa2c67c1.js";import{g as ue}from"./chunk.YCHBWCKL-ccebaa75.js";import{l as ge,u as me}from"./chunk.RK73WSZS-e061cb19.js";import{s as q,g as z}from"./chunk.H437TPPF-d2f2afca.js";import{a as N,s as K,w as fe}from"./chunk.KRRLOROJ-faa56958.js";import"./chunk.SKOOBYPV-dc2f449b.js";import{o as We}from"./style-map-a428b004.js";import{I as Q,C as be,g as Ke}from"./image-helper-99359f42.js";import{P as je}from"./nav-bar-cd5e889c.js";import{b as Z,c as Y}from"./platform-2180e403.js";import{P as Re}from"./paged-list-5dbf62ed.js";import{f as Ze}from"./css-function-2ba732a7.js";import{s as Ye}from"./spacing.styles-c42ebb1e.js";import"./auto-complete-app-search-dfdb1cc6.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=e=>Me(e)?e._$litType$.h:e.strings,Je=Se(class extends Te{constructor(e){super(e),this.tt=new WeakMap}render(e){return[e]}update(e,[t]){const i=ee(this.et)?ve(this.et):null,r=ee(t)?ve(t):null;if(i!==null&&(r===null||i!==r)){const o=te(e).pop();let n=this.tt.get(i);if(n===void 0){const l=document.createDocumentFragment();n=Ae(Fe,l),n.setConnected(!1),this.tt.set(i,n)}ie(n,[o]),re(n,void 0,o)}if(r!==null){if(i===null||i!==r){const o=this.tt.get(r);if(o!==void 0){const n=te(o).pop();Ee(e),re(e,void 0,n),ie(e,[n])}}this.et=t}else this.et=void 0;return this.render(t)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qe{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Xe{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=e=>!Be(e)&&typeof e.then=="function",we=1073741823;class et extends He{constructor(){super(...arguments),this._$C_t=we,this._$Cwt=[],this._$Cq=new Qe(this),this._$CK=new Xe}render(...t){return t.find(i=>!ye(i))??se}update(t,i){const r=this._$Cwt;let o=r.length;this._$Cwt=i;const n=this._$Cq,l=this._$CK;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$C_t);c++){const p=i[c];if(!ye(p))return this._$C_t=c,p;c<o&&p===r[c]||(this._$C_t=we,o=0,Promise.resolve(p).then(async v=>{for(;l.get();)await l.get();const I=n.deref();if(I!==void 0){const M=I._$Cwt.indexOf(p);M>-1&&M<I._$C_t&&(I._$C_t=M,I.setValue(v))}}))}return se}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const tt=Se(et);var it=A`
  ${ke}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Le=class extends Pe{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer","header","image")}render(){return s`
      <div
        part="base"
        class=${Ie({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Le.styles=it;Le.define("sl-card");function*De(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*ze(De(e.shadowRoot.activeElement))))}function rt(){return[...De()].pop()}var U=[],st=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i,r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const o=ue(this.element),n=rt();let l=o.findIndex(p=>p===n);if(l===-1){this.currentFocus=o[0],(i=this.currentFocus)==null||i.focus({preventScroll:!0});return}const c=this.tabDirection==="forward"?1:-1;l+c>=o.length?l=0:l+c<0?l=o.length-1:l+=c,this.currentFocus=o[l],(r=this.currentFocus)==null||r.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){U.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){U=U.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return U[U.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=ue(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],r=this.tabDirection==="forward"?t:i;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!0}))}}}},ot=A`
  ${ke}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,P=class extends Pe{constructor(){super(...arguments),this.hasSlotController=new Ce(this,"footer"),this.localize=new Ue(this),this.modal=new st(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ge(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),me(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=z(this,"dialog.denyClose",{dir:this.localize.dir()});N(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ge(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([K(this.dialog),K(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=z(this,"dialog.show",{dir:this.localize.dir()}),i=z(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([N(this.panel,t.keyframes,t.options),N(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([K(this.dialog),K(this.overlay)]);const e=z(this,"dialog.hide",{dir:this.localize.dir()}),t=z(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([N(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),N(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,me(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fe(this,"sl-after-hide")}render(){return s`
      <div
        part="base"
        class=${Ie({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${oe(this.noHeader?this.label:void 0)}
          aria-labelledby=${oe(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":s`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};P.styles=ot;P.dependencies={"sl-icon-button":qe};F([X(".dialog")],P.prototype,"dialog",2);F([X(".dialog__panel")],P.prototype,"panel",2);F([X(".dialog__overlay")],P.prototype,"overlay",2);F([h({type:Boolean,reflect:!0})],P.prototype,"open",2);F([h({reflect:!0})],P.prototype,"label",2);F([h({attribute:"no-header",type:Boolean,reflect:!0})],P.prototype,"noHeader",2);F([Ne("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);q("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});q("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});q("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});q("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});q("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});P.define("sl-dialog");const at=A`

	.global-container {
		display: flex;
	}

    .carousel-container {
        position: relative;
    }

    img, .trailer-play {
        transition: opacity 0.1s ease-in-out !important;
    }

    img:hover,
    .trailer-play:hover {
        opacity: 0.85 !important;
    }

    img:active,
    .trailer-play:hover {
        opacity: 0.65 !important;
    }

    .screenshot-carousel {
        --card-spacing: var(--sl-spacing-small);
        z-index: 1;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        display: flex;
        gap: var(--card-spacing);
        overflow:auto;
        scrollbar-width: none;
        justify-content: flex-start;
    }
    .screenshot-carousel .screenshot {
		height: 250px;
		max-width: 100%; /** The maximum width of the image should not exceed the container */
        object-fit: cover;
        box-sizing: border-box;
    }

    .screenshot-carousel .screenshot:focus-visible {
        outline: rgb(66, 136, 202) solid 2px;
    }
    .screenshot-carousel .screenshot-animations {
        height: 100%;
    }


    .screenshot-carousel::-webkit-scrollbar {
        height: 0;

    }

    .screenshot-carousel::-webkit-scrollbar-horizontal {
        display: none;
    }

    .carousel-item {
        flex-shrink: 0;
		display: flex;
		align-items: center;
        position: relative;
        justify-self: center;
        height: 100%;
        overflow: hidden;
        border-radius:7px;
		max-width: 100%;
        transition: all var(--sl-transition-fast) ease-out;
    }

    .screenshot-carousel.loaded .carousel-item{
        scroll-snap-align: start;
    }

    .carousel-container:hover{
        .scroll-buttons scroll-button {
            opacity: 1;
        }
    }

    .scroll-buttons {
        position: absolute;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        top: 50%;
    }

    .scroll-buttons scroll-button {
        opacity: 0;
    }

    .screenshot {
        border-radius: 4px;
    }


    .video-screenshot {
        position: relative;
    }

    .screenshot-animations .trailer-play {
        position: absolute;
        width: 40px;
        height: 40px;
        left: 45%;
        bottom: 45%;
        color: var(--sl-color-neutral-900);
        opacity: 0.8;
    }

    .carousel {
        height: 100vh;
    }

    ${x($.md)} {
        .trailer-header{
            display: none;
        }
    }

    ${x($.sm)} {
        .screenshot-animations .trailer-play {
            height: 30px;
        }

        .screenshot-carousel {
            grid-auto-columns: 100%;
        }
    }

    /* On extra small (xs) screens, don't show the scroll buttons. Use can just use swipe gesture instead. */
    ${x($.xs)} {
        scroll-button {
            display: none;
        }

        .screenshot-carousel .screenshot {
            max-height: 250px;
            height: auto;
        }
    }
`,nt=A`
    .dialog {
        z-index: 1;
        display: flex;
        background-color: transparent;
        position: relative;
    }

    .dialog-container {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .hide {
        visibility: hidden;
    }

    .dialog::part(header) {
        position: absolute;
        right: 1%;
        top: 10%;
        z-index: 1;
    }

    .dialog::part(overlay){
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    .dialog::part(panel){
        background-color: transparent;
        border: none;
        box-shadow: none;
        max-height: 100%;
        height: calc(var(--screen-height) - 140px);
        width: auto;
    }

    .dialog::part(body){
        overflow: hidden;
    }

    .dialog::part(close-button) {
        border-radius: var(--sl-border-radius-large);
        height: 35px;
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: rgba(110, 110, 110, 0.1);
    }

    .dialog::part(base) {
        padding-top: 135px;
    }

    .dialog::part(base)::after {
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        margin: auto;
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
    }
    .carousel, sl-carousel-item {
        position: relative;
        height: calc(var(--screen-height) - 270px);
    }

    .carousel::part(base) {
        column-gap: var(--sl-spacing-medium);
        gap: 0;
    }

    .screenshot {
        object-fit: contain !important;
    }

    .vertical-slide {
        border-radius: var(--sl-border-radius-large);
        margin: 0px !important;
        height: 100%;
    }

    .subtitle {
        display: flex;
        z-index: 1;
        flex-direction: column;
        width: 100%;
    }

    sl-dialog {
        display: flex;
        flex-direction: column;
    }

    sl-carousel:focus-visible {
        outline: none;
    }

    .subtitle .caption {
        font-weight: 600;
        margin-left: auto;
        margin-right: auto;
    }

    .scroll-button {
        background-color: var(--sl-color-neutral-50);
        color: var(--sl-color-neutral-700);
        border: solid 1px var(--sl-color-neutral-300);
        border-radius: 50%;
        font-size: 20px;
        font-family: var(--header-font);
        padding: 4px;
    }

    .desc-wrapper .page-desc {
        background-color: rgba(160, 160, 160, 0.26);
        border-radius: var(--sl-border-radius-pill);
        opacity: 0.7;
        display: flex;
        align-self: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        font-size: 14px;
        width: 100px;
    }

    .index-num{
        color: white;
        font-weight: 600;
        opacity: 1;
    }

    .no-display {
        display:none;
    }

    .dialog sl-carousel {
        margin: auto;
        width: 100%;
    }

    .dialog .horizontal-slide  {
        overflow: hidden;
        border-radius: var(--sl-border-radius-large);
        width: 100%;
        height: auto;
    }

    .dialog .vertical {
        z-index: 1;
        margin-right: var(--sl-spacing-small);
        width: 30%;
    }

    .video-slide-play {
        position: absolute;
        top: 40%;
        left: 49%;
        z-index: 2;
        width: 50px;
        height: 50px;
        opacity: 0.2;
    }

    .video-container {
        position: relative;
    }

    .slide-skeleton {
        z-index: 2;
        max-height: 476px;
        width: 100%;
        height: 100%;
        max-width: 846px;
    }

    .slide-skeleton::part(indicator) {
        border-radius: var(--sl-border-radius-large);
    }

    ${x($.md)} {
        video {
            width: 100%;
            height: auto;
        }

        .video-slide-play {
            position: absolute;
            top: 20%;
            left: 43%;
            z-index: 2;
            width: 50px;
            height: 50px;
            opacity: 0.2;
        }
    }

    @media (prefers-contrast: more) {
        .dialog::part(overlay){
            backdrop-filter: blur(0);
        }

        .dialog::part(panel){
            background-color: var(--theme-background-color);
        }
    }

    ${x($.lg)} {
        .dialog::part(header) {
            right: 0%;
            top: 15%;
        }
    }

    ${x($.sm+70)} {
        .dialog::part(close-button) {
            top: 130px;
        }

        .dialog::part(base) {
            align-items: center !important;
        }

        .dialog::part(panel) {
            height: calc(var(--screen-height) - 170px);
        }

        .scroll-button {
            padding: 2px;
            font-size: 10px;
        }

        .carousel, sl-carousel-item {
            height: calc(var(--screen-height) - 290px);
        }
    }

    ${x($.xs)} {
        .dialog::part(body) {
            padding-left: 0;
            padding-right: 0;
        }

        .scroll-button {
            display: none;
        }
    }

`;var lt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,m=(e,t,i,r)=>{for(var o=r>1?void 0:r?dt(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&lt(t,i,o),o};let u=class extends V{constructor(){super(),this.screenshots=null,this.trailers=null,this.modal=!1,this.showTrailer=!1,this.slideNum=0,this.productId="",this.length=0,this.dialogRef=ae(),this.videoIsPaused=!0,this.loadingScreenshots=!0,this.loadingSlides=!0,this.loadingVideo=!1,this.autoplayVideo=!1,this.currentSlideIndex=0,this.screenHeight=0,this.canScrollLeft=!0,this.canScrollRight=!0,this.iconInvoke=null,this.isRtl=!!a.isRtl(),this.dialogHandler=()=>this.closeDialog(),this.slideChangeHandler=e=>this.handleSlideChange(e),this.carouselRef=ae(),this.keydownHandler=this.handleArrowKeyPress.bind(this),this.windowHandler=this.handleResize.bind(this),this.screenHeight=window.innerHeight}connectedCallback(){super.connectedCallback(),this.addEventListener("sl-request-close",this.dialogHandler),this.addEventListener("keydown",this.keydownHandler),this.addEventListener("sl-slide-change",this.slideChangeHandler),window.addEventListener("resize",this.windowHandler),this.requestUpdate(),S.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sl-request-close",this.dialogHandler),this.removeEventListener("keydown",this.keydownHandler),this.removeEventListener("sl-slide-change",this.slideChangeHandler),window.removeEventListener("resize",this.windowHandler),S.removeImpressionTracking(this)}update(e){super.update(e),e.has("trailerModal")&&(this.showTrailer=!0),e.has("screenHeight")&&document.documentElement.style.setProperty("--screen-height",`${this.screenHeight}px`),e.has("currentSlideIndex")&&this.updateNavButtons()}updated(e){super.updated(e);const t=this.shadowRoot?.querySelector("sl-carousel");t&&(t.tabIndex=0,t.focus(),t.shadowRoot?.querySelector("#scroll-container")?.setAttribute("tabindex","-1"),t.shadowRoot?.querySelectorAll("button")?.forEach(o=>{o.setAttribute("tabindex","-1")}))}handleArrowKeyPress(e){const t=this.shadowRoot?.querySelector("sl-carousel"),i=this.currentSlideIndex!==(this.screenshots?.length||0)+(this.trailers?.length||0)-1,r=this.currentSlideIndex!==0;t&&(e.key==="ArrowRight"&&(this.isRtl?r:i)?(t.tabIndex=0,this.isRtl?t.previous():t.next()):e.key==="ArrowLeft"&&(this.isRtl?i:r)?(t.tabIndex=0,this.isRtl?t.next():t.previous()):e.key==="Tab"&&(t.tabIndex=-1))}async firstUpdated(){this.trailers&&this.trailers.length>0&&(await L(()=>import("./dash.all.min-f4f61554.js").then(e=>e.d),["assets/js/dash.all.min-f4f61554.js","assets/js/_commonjsHelpers-39b5b250.js"]).then(e=>{this.videoPlayer=e.MediaPlayer().create()}).catch(e=>console.error(`Error loading dashjs: ${e}`)),await L(()=>import("./dash.mss.min-9e6d10cc.js").then(e=>e.d),["assets/js/dash.mss.min-9e6d10cc.js","assets/js/_commonjsHelpers-39b5b250.js"])),this.goToFirstSlide(),this.currentSlideIndex=this.slideNum,this.slideNum===0&&this.trailers&&this.trailers[this.currentSlideIndex]&&this.playTrailer(this.trailers[this.currentSlideIndex],this.currentSlideIndex)}handleResize(){this.screenHeight=window.innerHeight,this.requestUpdate()}updateNavButtons(){this.currentSlideIndex===0?(this.canScrollLeft=!1,this.length===1&&(this.canScrollRight=!1)):this.currentSlideIndex===this.length-1?(this.canScrollRight=!1,this.canScrollLeft=!0):(this.canScrollLeft=!0,this.canScrollRight=!0)}closeDialog(){this.modal=!1,this.showTrailer=!1,this.slideNum=0}handleSlideChange(e){const t=e.detail.index;this.loadingSlides=!0,this.pauseTrailer(),t>this.currentSlideIndex?this.currentSlideIndex++:t<this.currentSlideIndex&&this.currentSlideIndex--,this.trailers&&this.trailers[this.currentSlideIndex]&&this.playTrailer(this.trailers[this.currentSlideIndex],this.currentSlideIndex),e?.stopPropagation()}checkIconInvoke(){const e=this.screenshots?.length||0,t=this.trailers?.length||0;this.length!==e+t&&(this.iconInvoke=!0,this.requestUpdate())}setLength(){this.screenshots&&this.trailers&&this.showTrailer===!1?this.calculateLength(this.screenshots?.length,this.trailers?.length):this.screenshots&&this.showTrailer===!1?this.calculateLength(this.screenshots?.length,0):this.trailers&&this.calculateLength(0,this.trailers?.length),this.checkIconInvoke()}renderDialog(){if(this.setLength(),this.modal&&this.screenshots){const e=navigator.userAgentData?.mobile,t=this.canScrollLeft?"":"hide",i=this.canScrollRight?"":"hide",r=this.isRtl?"chevron-right":"chevron-left",o=this.isRtl?"chevron-left":"chevron-right";return s`
                <sl-dialog
                    class="dialog"
                    id="dialog"
                    ?open=${this.modal}
                    >
                    <div class="dialog-container"
                        ${J(this.dialogRef)}>
                            <sl-carousel
                                ${J(this.carouselRef)}
                                class="carousel"
                                id="my-carousel"
                                aria-label="${a.getFormatted("ProductDetails.SelectedDialogSlide",this.currentSlideIndex+1,this.length)}"
                                mouse-dragging
                                ?navigation=${!e}
                                @sl-slide-change=${n=>this.handleSlideChange(n)}>
                                <sl-icon-button
                                    class="scroll-button ${t}"
                                    name="${r}"
                                    slot="previous-icon"
                                    title=${a.get("Common.ScrollLeft.ButtonTitle")}
                                    telemetry-event-id="ScreenshotScrollLeftClicked"
                                ></sl-icon-button>
                                <sl-icon-button
                                    class="scroll-button ${i}"
                                    name="${o}"
                                    slot="next-icon"
                                    title=${a.get("Common.ScrollRight.ButtonTitle")}
                                    telemetry-event-id="ScreenshotScrollRightClicked"
                                ></sl-icon-button>
                                    ${this.renderTrailers()}
                                    ${this.renderScreenshots()}
                            </sl-carousel>
                            ${this.renderDescription()}
                    </div>
                </sl-dialog>
            `}return s``}renderTrailers(){return s`
            ${this.trailers?C(this.trailers,(e,t)=>this.renderVideoPlayback(e,t)):""}
        `}renderScreenshots(){return this.iconInvoke?s``:s`
                ${this.screenshots?C(this.screenshots,(e,t)=>this.renderSlides(e,t)):""}
            `}renderDescription(){return this.screenshots&&this.trailers?this.currentSlideIndex+1<=this.trailers.length?this.renderTrailerDescription():this.renderScreenshotDescription(this.currentSlideIndex-this.trailers.length):this.screenshots?this.renderScreenshotDescription(this.currentSlideIndex):this.trailers?this.renderTrailerDescription():s``}renderScreenshotDescription(e){return this.screenshots?s`
            <div class="subtitle">
                <p class="caption">
                    ${this.screenshots[e]?.caption?this.screenshots[e].caption:a.getFormatted("ProductDetails.Screenshot",new Intl.NumberFormat(a.getLocaleName()).format(this.currentSlideIndex+1))}</p>
                <div class="desc-wrapper">
                    <div class="page-desc">
                        <p>
                            ${a.getFormatted("ProductDetails.ScreenshotCount",new Intl.NumberFormat(a.getLocaleName()).format(this.currentSlideIndex+1),new Intl.NumberFormat(a.getLocaleName()).format(this.length??0))} </p>
                    </div>
                </div>
            </div>
        `:s``}renderTrailerDescription(){return this.trailers?s`
            <div class="subtitle">
                <p class="caption">${this.trailers[this.currentSlideIndex]?.image?.caption?this.trailers[this.currentSlideIndex].image?.caption:a.getFormatted("ProductDetails.Trailer",new Intl.NumberFormat(a.getLocaleName()).format(this.currentSlideIndex+1))}</p>
                <div class="desc-wrapper">
                    <div class="page-desc">
                        <p> ${a.getFormatted("ProductDetails.ScreenshotCount",new Intl.NumberFormat(a.getLocaleName()).format(this.currentSlideIndex%this.length+1),new Intl.NumberFormat(a.getLocaleName()).format(this.length??0))} </p>
                    </div>
                </div>
            </div>
        `:s``}renderSlides(e,t){const i=e.width,r=e.height;let o="horizontal-slide",n={};return i<r&&(o="vertical-slide"),n={aspectRatio:i===0&&r===0?"auto":`${i}/${r}`},s`
            <sl-carousel-item class="screenshot-container ${this.showTrailer?"no-display":""}" id="slide-${t}" aria-hidden="true">
                <img
                        src=${e.url??""}
                        alt="${a.get("ProductDetails.Screenshot")}-${t}"
                        class="screenshot ${o}"
                        style="${We(n)}"
                        tabindex=${-1} id="slide-${t}"
                        @load=${()=>this.loadingSlides=!1}
                        aria-hidden="true"
                        loading="lazy"/>
            </sl-carousel-item>
        `}renderVideoPlayback(e,t){let i=e.width,r=e.height;(i===0||r===0)&&(i=1920,r=1080);const o="horizontal-slide",n={productId:this.productId,index:t,itemType:"video",area:"PreviewDialog"};return r&&i?s`
            <sl-carousel-item class="video-container">
                    <sl-animation name="pulse" easing="ease-out" duration="250" ?play=${!0} iterations="1">
                    <video
                    @playing=${()=>this.loadingSlides=!1}
                    @play="${()=>S.track({name:"VideoPlayStarted",properties:n})}"
                    @pause="${()=>S.track({name:"VideoPlayPaused",properties:n})}"
                    data-dashjs-player autoplay
                    class="slideshow-horizontal-image ${o}"
                    id="slide-${t}"
                    tabindex="-1"
                    controls></video>
                    </sl-animation>
            </sl-carousel-item>
            `:s``}calculateLength(e,t){this.length=e+t}renderPlayButton(){return this.videoIsPaused?s`
                <sl-icon name="play-circle-fill" class="video-slide-play"></sl-icon>
            `:s``}playTrailer(e,t){if(this.loadingVideo=!0,!e.url)return;const i=e.url?.replace(/http:\/\/msv-r\d{3}/,"https://xvsec"),r=this.shadowRoot?.querySelector(`#slide-${t}`);r&&this.videoPlayer&&(this.videoIsPaused=!1,this.videoPlayer.initialize(),this.videoPlayer.attachView(r),this.videoPlayer.attachSource(i||""),this.loadingVideo=!1),this.requestUpdate()}async pauseTrailer(){this.videoIsPaused||(this.videoPlayer?.pause(),this.videoIsPaused=!0)}goToFirstSlide(){event?.preventDefault();const e=this.shadowRoot?.querySelector("#my-carousel");this.currentSlideIndex=this.slideNum,e?.goToSlide(this.slideNum)}renderLoadingSkeleton(e,t,i){return e&&t&&i?s`
            <sl-skeleton effect="sheen" class="slide-skeleton" style="width: ${t}px; height: ${i}px;"></sl-skeleton>
          `:s``}render(){return s`
          ${this.renderDialog()}
        `}};u.styles=[O,nt];m([h({attribute:"screenshots"})],u.prototype,"screenshots",2);m([h({attribute:"trailers"})],u.prototype,"trailers",2);m([h({attribute:"modal"})],u.prototype,"modal",2);m([h({attribute:"showTrailer"})],u.prototype,"showTrailer",2);m([h({attribute:"slideNum"})],u.prototype,"slideNum",2);m([h({attribute:"productId"})],u.prototype,"productId",2);m([d()],u.prototype,"length",2);m([d()],u.prototype,"videoPlayer",2);m([d()],u.prototype,"dialogRef",2);m([d()],u.prototype,"videoIsPaused",2);m([d()],u.prototype,"loadingScreenshots",2);m([d()],u.prototype,"loadingSlides",2);m([d()],u.prototype,"loadingVideo",2);m([d()],u.prototype,"autoplayVideo",2);m([d()],u.prototype,"currentSlideIndex",2);m([d()],u.prototype,"screenHeight",2);m([d()],u.prototype,"canScrollLeft",2);m([d()],u.prototype,"canScrollRight",2);m([d()],u.prototype,"iconInvoke",2);m([d()],u.prototype,"isRtl",2);u=m([G("product-dialog")],u);var ct=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,w=(e,t,i,r)=>{for(var o=r>1?void 0:r?ht(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&ct(t,i,o),o};let f=class extends V{constructor(){super(),this.screenshots=null,this.trailers=null,this.modal=!1,this.showTrailer=!1,this.transitionToSlide=0,this.productId="",this.dir="ltr",this.loadingScreenshots=!0,this.loadingSlides=!0,this.currentSlide=0,this.isMobile=!1,this.canScrollLeft=!!a.isRtl(),this.canScrollRight=!a.isRtl(),this.initialAnimationLoad=!0,this.dialogHandler=()=>this.closeDialog(),this.changeHandler=e=>this.currentSlide=e.detail.index}connectedCallback(){super.connectedCallback(),this.addEventListener("sl-request-close",this.dialogHandler),this.addEventListener("sl-slide-change",this.changeHandler),this.initialAnimationLoad=!0,this.modal=!1,this.requestUpdate(),S.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sl-slide-change",this.changeHandler),this.removeEventListener("sl-request-close",this.dialogHandler),S.removeImpressionTracking(this)}firstUpdated(){this.imgsAllLoaded()}imgsAllLoaded(){const e=this.shadowRoot?.querySelectorAll("img"),t=r=>new Promise(o=>{r.onload=()=>o()}),i=Array.from(e||[])?.map(r=>t(r));Promise.all(i).then(()=>{this._screenshotCarousel?.classList.add("loaded")})}closeDialog(){this.modal=!1,this.showTrailer=!1,this.currentSlide=0}handleScroll(){window.requestAnimationFrame(()=>{this.handleScrollability()})}renderCarousel(){const e=this.trailers?.length?this.trailers.length:0;return this.screenshots&&this.trailers?s`
                <div class="carousel-container">
                    <div
                        class="screenshot-carousel"
                        @scroll=${this.handleScroll}
                        @mouseenter=${this.handleScrollability}
                        tabindex="-1"
                        role="group"
                        @keydown=${this.inputKeyDown}
                    >
                        ${C(this.trailers,(t,i)=>this.renderVideoScreenshot(t,i))}
                        ${C(this.screenshots,(t,i)=>this.renderImage(t,e+i))}
                        ${this.renderLoadingScreenshots(!1)}
                        ${this.renderScrollButtons()}
                    </div>
                </div>
            `:this.screenshots?s`
                <div class="carousel-container">
                    <div
                        class="screenshot-carousel"
                        @scroll=${this.handleScroll}
                        @mouseenter=${this.handleScrollability}
                        role="group"
                        @keydown=${this.inputKeyDown}
                        tabindex="-1"
                    >
                        ${C(this.screenshots,(t,i)=>this.renderImage(t,i))}
                        ${this.renderLoadingScreenshots(!1)}
                        ${this.renderScrollButtons()}
                    </div>
                </div>
            `:s``}renderImage(e,t){if(!e.url)return s``;this.initialAnimationCheck();const i=t===0?0:-1,r=this.trailers?.length??0,o=this.screenshots?.length??0,n=Q.getResizableImageUrl(e?.url||"","height",250);return s`
            <div role="button" class="carousel-item" @click=${()=>this.showModal(t)} dir="${this.dir}">
                <sl-animation name="fadeIn" easing="ease-out" duration="1000" fill="both" iterations="1" class="screenshot-animations" onload=${this.loadingScreenshots=!1}>
                    <img
                        src=${n}
                        alt="${a.getFormatted("ProductDetails.SelectedSlide",t+1,r+o)}"
                        id="image-${t}"
                        class="screenshot"
                        tabindex=${i}
                    />
                </sl-animation>
            </div>
        `}renderVideoScreenshot(e,t){this.initialAnimationCheck();const i=t===0?0:-1,r=this.trailers?.length??0,o=this.screenshots?.length??0,n=Q.getResizableImageUrl(e.image?.url||"","height",250);return e.image?s`
                <div class="carousel-item">
                    <div class="screenshot-animations" dir="${this.dir}">
                        <sl-animation name="fadeIn" easing="ease-out" duration="1000" fill="both" iterations="1"  onload=${this.loadingScreenshots=!1}>
                            <img
                                src=${n}
                                alt="${a.getFormatted("ProductDetails.SelectedSlide",t+1,r+o)}"
                                class="screenshot"
                                id="video-${t}"
                                @click=${()=>this.showModal(t)}
                                tabindex=${i}
                            />
                            <sl-icon
                                name="play-circle-fill"
                                label=${a.getFormatted("ProductDetails.Play")}
                                id="icon-${t}"
                                class="trailer-play"
                                @click=${()=>this.showModal(t)}
                            ></sl-icon>
                        </sl-animation>
                    </div>
                </div>
            `:s``}initialAnimationCheck(){const e=this.shadowRoot?.querySelectorAll("sl-animation");e&&this.initialAnimationLoad&&!this.loadingScreenshots&&e.length>0&&(e.forEach(t=>{t.play=!0}),this.initialAnimationLoad=!1)}showModal(e){this.currentSlide=e,this.requestUpdate(),this.modal=!this.modal,S.track({name:"PreviewItemClick",properties:{index:this.currentSlide,area:"Screenshots",productId:this.productId}})}renderModal(){return this.modal?s`
            <product-dialog
                .screenshots=${this.screenshots}
                .trailers=${this.trailers}
                .showTrailer=${this.showTrailer}
                .modal=${this.modal}
                .slideNum=${this.currentSlide}
                .productId="${this.productId}"
                telemetry-area-id="PreviewDialog"
                telemetry-data='{
                    "productId": "${this.productId}",
                    "videosCount": ${this.trailers?.length||0},
                    "imagesCount": ${this.screenshots?.length||0},
                    "itemType": "${this.trailers?.length&&this.trailers[this.currentSlide]?"video":"image"}",
                    "index": ${this.currentSlide}
                }'
            >
            </product-dialog>
        `:s``}renderLoadingScreenshots(e){return this.loadingScreenshots&&this.screenshots&&!e?s`${C(this.screenshots,()=>this.renderLoadingProduct())}`:this.loadingSlides&&this.screenshots&&e?s`${C(this.screenshots,()=>this.renderLoadingProduct())}`:s``}renderLoadingProduct(){return s`
            <sl-skeleton effect="pulse"></sl-skeleton>
        `}renderScrollButtons(){const e=this.canScrollLeft?"":"d-none",t=this.canScrollRight?"":"d-none";return s`
            <div class="scroll-buttons">
                <scroll-button
                    class="scroll-button-left ${e}"
                    direction="left"
                    name="chevron-left"
                    @click=${()=>a.isRtl()?this.slideRight():this.slideLeft()}
                    telemetry-event-id="ScreenshotScrollLeftClicked"
                ></scroll-button>
                <scroll-button
                    class="scroll-button-right ${t}"
                    direction="right"
                    name="chevron-right"
                    @click=${()=>a.isRtl()?this.slideLeft():this.slideRight()}
                    telemetry-event-id="ScreenshotScrollRightClicked"
                ></scroll-button>
            </div>
        `}slideLeft(){if(this._screenshotCarousel){const e=this._screenshotCarousel.clientWidth;a.isRtl()?this._screenshotCarousel.scrollLeft+=e:this._screenshotCarousel.scrollLeft-=e}this.handleScrollability(),this.requestUpdate()}slideRight(){if(this._screenshotCarousel){const e=this._screenshotCarousel.clientWidth;a.isRtl()?this._screenshotCarousel.scrollLeft-=e:this._screenshotCarousel.scrollLeft+=e}this.handleScrollability(),this.requestUpdate()}handleScrollability(){const e=this._screenshotCarousel;a.isRtl()?(this.canScrollRight=!!e&&e.scrollLeft<0,this.canScrollLeft=!!e&&e.scrollLeft-e.clientWidth>-e.scrollWidth):(this.canScrollLeft=!!e&&e.scrollLeft>0,this.canScrollRight=!!e&&e.scrollLeft+e.clientWidth+1<e.scrollWidth)}inputKeyDown(e){const t=a.isRtl();e.key==="ArrowLeft"?t?this.navigateRight(e):this.navigateLeft(e):e.key==="ArrowRight"?t?this.navigateLeft(e):this.navigateRight(e):e.key==="Enter"&&this.enterCollection(e)}navigateRight(e){if(e.preventDefault(),this._screenshotCarousel?.children){const t=Array.from(this._screenshotCarousel.children);this.currentSlide<t.length-2&&this.currentSlide++;const i=t[this.currentSlide]?.children[0];i&&i.querySelector(".screenshot").focus()}}navigateLeft(e){if(e.preventDefault(),this._screenshotCarousel?.children){const t=Array.from(this._screenshotCarousel.children);this.currentSlide>0&&this.currentSlide--;const i=t[this.currentSlide]?.children[0];i&&i.querySelector(".screenshot").focus()}}enterCollection(e){this._screenshotCarousel?.children&&(e.preventDefault(),this.showModal(this.currentSlide))}render(){return s`
        <div class="global-container">
            ${this.renderCarousel()}
            ${this.renderModal()}
        </div>

        `}};f.styles=[O,at];w([X(".screenshot-carousel")],f.prototype,"_screenshotCarousel",2);w([h({attribute:"screenshots",type:Array})],f.prototype,"screenshots",2);w([h({attribute:"trailers",type:Array})],f.prototype,"trailers",2);w([h({attribute:"modal",type:Boolean})],f.prototype,"modal",2);w([h({attribute:"showTrailer",type:Boolean})],f.prototype,"showTrailer",2);w([h({attribute:"transitionToSlide",type:Number})],f.prototype,"transitionToSlide",2);w([h({attribute:"productId"})],f.prototype,"productId",2);w([h()],f.prototype,"dir",2);w([d()],f.prototype,"loadingScreenshots",2);w([d()],f.prototype,"loadingSlides",2);w([d()],f.prototype,"currentSlide",2);w([d()],f.prototype,"isMobile",2);w([d()],f.prototype,"canScrollLeft",2);w([d()],f.prototype,"canScrollRight",2);w([d()],f.prototype,"initialAnimationLoad",2);w([Oe({passive:!0})],f.prototype,"handleScroll",1);f=w([G("screenshot-viewer")],f);class R{static getInstallUrl(t){const i=new URLSearchParams(window.location.search?.toLowerCase()||"");if(i.set("productid",t.productId),t.price===0&&!t.isMovie&&!t.isAndroid&&!i.has("mode")){i.set("mode","mini");const l=Math.floor(window.screenLeft*window.devicePixelRatio),c=Math.floor(window.screenTop*window.devicePixelRatio),p=Math.floor(window.outerWidth*window.devicePixelRatio),v=Math.floor(window.outerHeight*window.devicePixelRatio);i.set("pos",[l,c,p,v].join(","))}return i.has("referrer")||i.set("referrer","storeforweb"),document.referrer&&!i.has("source")&&i.set("source",document.referrer),(t.productId.startsWith(be.StorePdpUrl)?t.productId:be.StorePdpUrl)+"?"+i}}const pt=A`
    .buy-box {
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        transition: all ease-in-out var(--sl-transition-medium);
    }

    .buy-box-column {
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }

    ${x($.xs)} {
        .buy-box {
            justify-content: center;
        }
    }

    .rent-or-buy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .rent-or-buy .rent-label {
        line-height: var(--sl-line-height-dense);
    }

    .rent-or-buy .buy-label {
        font-size: var(--sl-font-size-x-small);
        line-height: var(--sl-line-height-normal);
        font-weight: var(--sl-font-weight-normal);
    }

    .stream-button-contents {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-x-small);
        height: 100%;
    }

    .buy-and-stream-container {
        display: flex;
        gap: var(--sl-spacing-x-small);
        flex-direction: row;
    }

    img.streaming-service-logo {
        border-radius: var(--sl-border-radius-medium);
    }

    img.streaming-service-logo,
    sl-skeleton.streaming-service-logo {
        width: 32px;
        height: 32px;
    }

    sl-skeleton.streaming-service-logo {
        --border-radius: 0;
    }

    .badge {
        padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
        background-color: rgb(255, 216, 0);
        border-radius: var(--sl-border-radius-x-large);
        font-size: var(--sl-font-size-x-small);
        white-space: nowrap;
        width: fit-content; /** Needed for when container's flex direction is column; we want each badge to take up only the space it needs, not stretch the width of the container */
    }

    /** On dark mode, buy button text should be white */
    @media (prefers-color-scheme: dark) {
        .buy-btn::part(label) {
            color: #000000;
        }

        .buy-btn::part(base) {
            background-color: var(--theme-secondary-element-color) !important;
            border-color: #FFFFFF14 !important;
        }

        .discount-btn-container:hover .buy-btn::part(base) {
            background-color: var(--theme-secondary-element-hover-color) !important;
        }

        .buy-btn::part(base):hover {
            background-color: var(--theme-secondary-element-hover-color) !important;
        }

        .buy-info {
            color: #FFFFFFC8 !important;
        }

        .strikethrough-price, .strikethrough-price-text {
            color: rgba(0, 0, 0, 0.6) !important;
        }

        .gamepass-btn::part(label) {
            color: white !important;
        }

        .standalone-dark-theme {
            color: #FFFFFFC8 !important;
        }
    }

    ${x($.xs)} {
        /** On phones, the Get button can take up full width */
        .buy-box .buy-btn {
            max-width: none;
        }

        .buy-box {
            align-items: center !important;
        }
    }

    .stream::part(base) {
        height: 42px;
    }

    .buy-btn::part(base) {
        /** Use a slightly darker primary color for our buy button */
        background-color: var(--theme-primary-element-color);
        height: 46px;
        min-height: auto;
        min-width: 180px;
        align-items: center;
        font-weight: var(--sl-title-font-weight);
        font-size: 18px;
        line-height: 24px;
        font-family: var(--header-font);
    }

    .buy-btn:hover::part(base) {
        background-color: var(--sl-color-primary-700);
    }

    .buy-btn::part(label) {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .buy-box .buy-info {
        display: flex;
        gap: var(--sl-spacing-x-small);
        font-size: 14px;
        line-height: 20px;
        color: var(--sl-color-neutral-600);
        margin-bottom: 0;
        align-items: center;
    }

    .buy-box .badge {
        color: var(--theme-sale-badge-color);
    }

    ${x($.sm)} {
        /** On medium and smaller devices, the buy info items ("in app purchases", "Xbox game pass, etc") will be display vertically */
        .buy-box {
            flex-direction: column;
            align-items: start;
        }
    }

    .prices-container {
        display: flex;
        gap: 4px;
    }

    .discount-btn-container {
        display: flex;
    }

    .discount-btn-container:hover .discount-btn::part(base) {
        background-color: #FDE528 !important;
    }

    .discount-btn-container:hover .with-discount-btn::part(base) {
        background-color: var(--sl-color-primary-700);
    }

    .discount-btn::part(base) {
        width: 72px;
        min-width: 0;
        background-color: var(--theme-sale-badge-background-color) !important;
        border-color: var(--theme-sale-badge-background-color) !important;
        align-items: center;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .with-discount-btn::part(base) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-color: #FFFFFF14;
    }

    .discount-percent {
        color: #0000009B;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        font-family: var(--header-font);
    }

    .strikethrough-price {
        text-decoration: line-through;
        color: #f0f0f0;
        font-weight: 400;
    }

    .strikethrough-price-text, .standalone-dark-theme {
        text-decoration: line-through;
        color: #0000009B;
        font-size: 18px;
        font-family: var(--header-font);
    }

    .gamepass-btn::part(base) {
        background-color: #0F7B0F !important;
        border-color: #FFFFFF14 !important;
    }

    .gamepass-btn::part(base):hover {
        background-color: #238c1b !important;
    }

    .gp-included::part(base) {
        min-width: 268px;
    }

    .gp-price::part(base) {
        min-width: 244px;
    }

    .gamepass-btn-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 14px;
    }

    .or-text {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
    }

    .regular-price {
        font-size: 18px;
        line-height: 24px;
        font-family: var(--header-font);
    }

    .regular-price-container {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`,ut={BaseUrl:"https://apps.microsoft.com",Keywords:["Microsoft","Microsoft Store","applications","apps","Windows apps"],ThemesCollectionName:"WindowsThemes",WildcardCategory:"AllProducts",CuratedCollections:["SecurityApps","GettingStartedApps","YourSocialNetwork","photoandvideoediting","WindowsThemes","Appstostartyourday","VideoEditingApps","SearchMusicCreate","Weather","AppsforKids","EssentialAppsCampaign","TheReadingRoom","StudentsandScholars","FreeTrialProductivityApps","WindowsInkCollection","FixingYourHome","AppsforTablets","Home/Spotlight/Home_Spotlight_T1_T2","Apps/Spotlight/Apps_Spotlight_T1_T2","Gaming/Spotlight/Gaming_Spotlight_T1_T2","Movies_TV/Spotlight/v2_Movies_TV_Spotlight_en-US","Movies_TV/Spotlight/Movies_TV_Spotlight_Mrkt_V2,"],ComputedLists:["TopGrossing","NewAndRising","TopFree","TopPaid","BestRated","MostPopular","Deal","MostPopular","video.newreleases.movies","video.collections.fh_windowscollectionBhome"],ListsWithoutTopApps:["photoandvideoediting","BestProductivityApps","BestPhotoAndVideoEditingApps"],MarketsTier1:["AU","BR","CA","CN","DE","ES","FR","GB","IT","JP","KR","MX","US"],MarketsTier2:["AE","AR","AT","BE","CH","CL","CO","CZ","DK","FI","GR","HK","HU","ID","IE","IL","IN","NL","NO","NZ","PL","PT","RU","SA","SE","SG","SK","TH","TR","TW","VN","ZA"],MarketsTier3:["AD","AF","AG","AI","AL","AM","AO","AQ","AS","AW","AX","AZ","BA","BB","BD","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CC","CD","CF","CG","CI","CK","CM","CR","CV","CW","CX","CY","DJ","DM","DO","DZ","EC","EE","EG","EH","ER","ET","FJ","FK","FM","FO","GA","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GS","GT","GU","GW","GY","HM","HN","HR","HT","IM","IO","IQ","IR","IS","JE","JM","JO","KE","KG","KH","KI","KM","KN","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MY","MZ","NA","NC","NE","NF","NG","NI","NP","NR","NU","OM","PA","PE","PF","PG","PH","PK","PM","PN","PS","PW","PY","QA","RE","RO","RS","RW","SB","SC","SH","SI","SJ","SL","SM","SN","SO","SR","ST","SV","SX","SZ","TC","TD","TF","TG","TJ","TK","TL","TM","TN","TO","TT","TV","TZ","UA","UG","UM","UY","UZ","VA","VC","VE","VG","VI","VU","WF","WS","YE","YT","ZM","ZW"],PSIProductIdArray:["9P1J8S7CCWWT","9PKTQ5699M62","9NTM2QC6QWS7","9NZVDKPMR9RD","9WZDNCRFJ27N","9PF4KZ2VN4W9","9WZDNCRFHWLH","9PFDF2ZD4Z4N","9NBLGGH4Z1JC","9NBLGGH4TWWG"],RestrictedProducts:["XPDCMJG5PTR3TP"]},gt={Name:"NameFromConfig",ClientId:"929d973a-a08f-46a0-80b5-3c690ee1ee5f",Authority:"https://login.microsoftonline.com/consumers/",IsInCorpNet:!1,StoreUrl:"https://storeedgefd.dsx.mp.microsoft.com",PurchaseScope:"onestore-df.microsoft.com",EnvironmentName:"Development",DefaultAPITimeoutInMilliseconds:1e4,EnableSSO:!1,ClientAppVersion:"22307.701.0.0",MaxConcurrentRequests:5,DefaultQueryParameters:{deviceFamily:"Windows.Desktop",architecture:"x64",appmodels:"uwp,win32,wsa",deviceFamilyVersion:"2814751249596416"},StorefrontGlobalFeatureFlags:["resizableImageUrlEnabled"],StorefrontSpotlightFeatureFlags:["EnableSpotLightV2"],UserAgent:"StoreWeb"},mt={PartnerId:"MSApps",HeaderId:"MSAppsHeader2",FooterId:"MSAppsFooter2",RequestTimeoutInMilliseconds:6e3},ft={ExtensionDetailCacheAbsoluteTimeoutInMinutes:60,ExtensionDetailCacheSlidingTimeoutInMinutes:30,ExtensionDetailRedisCacheRefreshTimeoutInHours:12,RedisCacheEnable:!1,ShouldUseCache:!0},bt={SyncTimeoutInSec:30,AsyncTimeoutInSec:30,ConnectRetry:3,KeepAlive:60,ReconnectRetryTime:5,ConnectionString:null},vt={InstrumentationKey:"be61a02d4c674edfb65d61bd30fb65d5-ee4b86c1-d9a7-4f97-8d4b-124dd301b180-7729"},yt={EnableDCatCircuitBreaker:!0,DCatExceptionsAllowedBeforeBreaking:15,DurationOfBreakForDcatCallsInSec:1,EnableRecoCircuitBreaker:!0,RecoExceptionsAllowedBeforeBreaking:15,DurationOfBreakForRecoCallsInSec:1},wt={MediaEnabled:!0,AvailableLanguagesEnabled:!0},xt={EnableFaultInjection:!1},$t={Enabled:!0,Attempts:3,BackoffCoefficient:2},St={ConnectionString:"",AppIdsContainerName:"spark-apps-dump",SitemapsContainerName:"sitemaps"},kt={BlobUrl:"https://default.exp-tas.com/exptas13/2d058e11-07d8-46f3-b6c0-07f30d91e5f6-storeclientexp/api/v1/experimentationblob",ClientType:"StoreWeb",PollingIntervalInMinutes:5,SessionDurationInHours:336,AuthSettings:{AadAudience:"https://exp.azure.net/.default",ClientId:"6ee3f783-925a-4e8c-92e7-f1e2ffb42ab7",Authority:"72f988bf-86f1-41af-91ab-2d7cd011db47",ClientSecret:null}},Pt={DownloadUrl:"https://get.microsoft.com/installer/download/"},Ct={ConnectionString:"InstrumentationKey=626714bf-40f1-46db-a2b9-41617ea92329;IngestionEndpoint=https://centralus-2.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/"},It={Endpoint:"https://emerald.xboxservices.com/xboxcomfd/allowedProducts",CorrelationIdHeader:"web-store",IntervalInMinutes:2880,IsEnabled:!0},xe={SiteConfig:ut,StoreWebConfig:gt,StoreUHFConfig:mt,StoreCacheConfig:ft,RedisConfig:bt,AdobeAnalyticsConfig:vt,StoreCircuitBreakerConfig:yt,StoreProductDetailsConfig:wt,FaultInjectConfig:xt,RetryPolicyConfig:$t,AzureStorageConfig:St,AzureExpConfig:kt,PSIConfig:Pt,ApplicationInsights:Ct,CoreGamesConfig:It};let j;const Rt=new Uint8Array(16);function Lt(){if(!j&&(j=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!j))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return j(Rt)}const y=[];for(let e=0;e<256;++e)y.push((e+256).toString(16).slice(1));function Dt(e,t=0){return y[e[t+0]]+y[e[t+1]]+y[e[t+2]]+y[e[t+3]]+"-"+y[e[t+4]]+y[e[t+5]]+"-"+y[e[t+6]]+y[e[t+7]]+"-"+y[e[t+8]]+y[e[t+9]]+"-"+y[e[t+10]]+y[e[t+11]]+y[e[t+12]]+y[e[t+13]]+y[e[t+14]]+y[e[t+15]]}const _t=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),$e={randomUUID:_t};function Tt(e,t,i){if($e.randomUUID&&!t&&!e)return $e.randomUUID();e=e||{};const r=e.random||(e.rng||Lt)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=r[o];return t}return Dt(r)}var At=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,D=(e,t,i,r)=>{for(var o=r>1?void 0:r?Ft(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&At(t,i,o),o};let k=class extends V{constructor(){super(),this.size="large",this.product=null,this.showExtraInfo="show",this.isDarkMode=!1,this.hasGamePass=!1,this.psiProductIdArray=xe.SiteConfig.PSIProductIdArray,this.loadingState=!1,this.psiControlFlag="psi_c",this.psiTreamtmentFlag="psi_t",this.psiServiceFailedOcidPrefix="psi_f_svc",this.inThrottle=!1,this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new je(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange(),S.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.prefersThemesObserver?.removeListenThemeChange(),S.removeImpressionTracking(this)}handleThemeChange(e){this.isDarkMode=e,this.requestUpdate()}render(){if(!this.product)return s``;if(!this.product.mediaType)return s``;this.hasGamePass=this.product.plaintextPassName==="Xbox Game Pass";const e=this.hasGamePass?"buy-box-column":"";return s`
            <div class="buy-box ${e}">
                ${this.renderBuyOrShareButton(this.product)}
                ${this.renderPurchaseInfo(this.product)}
            </div>
        `}renderBuyOrShareButton(e){return Z()?this.renderBuyButton(e):Y()?this.renderShareButton(e):s``}renderBuyButton(e){return e.isMoviesOrTVs?this.renderMovieOrTVActions(e):this.renderAppOrGameBuyButton(e)}renderMovieOrTVActions(e){const[t,i]=this.getPriceFromSkus(e.skus);return s`
            <div class="buy-and-stream-container">
                ${this.renderMovieOrTVBuyButton(e,t,i)}
            </div>
        `}renderMovieOrTVBuyButton(e,t,i){const r=pe.getDiscount(e),o=r.price&&r.strikethroughPrice&&r.price!==r.strikethroughPrice;let n;return o?n=r.price:e.price===0||t==="-1"||t.toLowerCase()==="free"?n=a.get("ProductDetails.Get"):n=i==="multiple"?a.getFormatted("ProductDetails.FromPrice",t):t,o?s`
                ${this.renderDiscountButton(e,n,r)}
            `:s`
                ${this.renderRegularBuyButton(e,n)}
            `}renderAppOrGameBuyButton(e){const t=pe.getDiscount(e),i=t.price&&t.strikethroughPrice&&t.price!==t.strikethroughPrice;if(this.hasGamePass)return s`
                ${this.renderGamePassButton(e,i||!1,t)}
            `;let r;return i?r=t.price:e.price===0?r=a.get("ProductDetails.Install"):r=e.displayPrice,i?s`
            ${this.renderDiscountButton(e,r,t)}
        `:s`
                ${this.renderRegularBuyButton(e,r)}
            `}renderGamePassButton(e,t,i){const[r,o]=this.getGamePassPrices(e),n=r===a.get("ProductDetails.Free")?a.get("ProductDetails.Included"):r,l=n===a.get("ProductDetails.Included")?"gp-included":"gp-price";return s`
            <div class="gamepass-btn-container">
                <sl-button class="buy-btn gamepass-btn ${l}" variant="primary" size="${this.size}"
                        telemetry-event-id="CtaClicked"
                        telemetry-data='{ "productId": "${e.productId}" }'
                        rel="nofollow"
                        href="${R.getInstallUrl(e)}">
                    ${a.getFormatted("ProductDetails.WithGamePass",n)}
                    ${this.renderGetLogo("light")}
                </sl-button>
                ${this.renderRegularPricing(o,t,i)}
            </div>
        `}renderRegularBuyButton(e,t){return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                       telemetry-event-id="CtaClicked"
                       rel="nofollow"
                       href="${R.getInstallUrl(e)}">
                ${this.renderRegularBuyLabel(e,t)}
                ${this.renderGetLogo()}
            </sl-button>
        `}renderPSIBuyButton(e,t){if(this.isSMode())return this.renderRegularBuyButton(e,t);let i="";const o=new URLSearchParams(window.location.search).get("ocid");return o===this.psiTreamtmentFlag||o===this.psiControlFlag?i=o:(i=ne.getCookie("psi_cookie")||"",i||(i=this.generateNewPSICookie())),i===this.psiControlFlag?this.renderPSIBtnControl(e,t):this.renderPSIBtnTreatment(e,t)}renderPSIBtnTreatment(e,t){return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                    telemetry-event-id="CtaClicked"
                    telemetry-data='{"psiGroup": "${this.psiTreamtmentFlag}"}'
                    @click=${()=>this.throttleAsync(this.performPSIAcquisition,1400)(e)}
                    ?loading="${this.loadingState}">
                ${this.renderRegularBuyLabel(e,t)}
                ${this.renderGetLogo()}
            </sl-button>
        `}renderPSIBtnControl(e,t){return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                       telemetry-event-id="CtaClicked"
                       telemetry-data='{"psiGroup": "${this.psiControlFlag}"}'
                       rel="nofollow"
                       href="${R.getInstallUrl(e)+"&ocid="+this.psiControlFlag}">
                ${this.renderRegularBuyLabel(e,t)}
                ${this.renderGetLogo()}
            </sl-button>
        `}isSMode(){return window.external&&window.external.getHostEnvironmentValue?JSON.parse(window.external.getHostEnvironmentValue("os-mode"))["os-mode"]==="2":!1}throttleAsync(e,t){return async(...i)=>{if(!this.inThrottle){this.inThrottle=!0;try{await e.apply(this,i)}finally{setTimeout(()=>this.inThrottle=!1,t)}}}}async performPSIAcquisition(e,t={}){this.loadingState=!0;const r=`${xe.PSIConfig.DownloadUrl}${e.productId}`,o=Tt(),l={...{method:"GET",headers:{Origin:"https://apps.microsoft.com",Referer:document.URL,"Access-Control-Request-Method":"GET","X-Correlation-Id":o,"Content-Type":"application/octet-stream"},responseType:"blob",params:{ocid:`${this.psiTreamtmentFlag}`,referrer:"storeforweb"}},...t},c=new URLSearchParams(l.params);try{const p=await fetch(`${r}?${c}`,{method:l.method,cache:"no-cache",headers:l.headers});if(p.ok){const v=p.headers.get("Content-Disposition");let I=e.title+" Installer.exe";if(v){const _=v?.match(/filename\*=UTF-8''([\w%]*)/i);_&&_[1]&&(I=_[1])}const M=await p.blob(),_e=URL.createObjectURL(M),E=document.createElement("a");E.href=r,E.download=decodeURIComponent(I),E.style.display="none",document.body.appendChild(E);try{E.click(),await new Promise(_=>setTimeout(_,1e3))}catch(_){S.warn(`[PSI] unsuccessful download: ${_}`,{CorrelationId:o})}finally{URL.revokeObjectURL(_e),document.body.removeChild(E)}}else{const v=await p.json();S.track({name:"PSIFailed",properties:{CorrelationId:o,Status:p.status,Result:v,productId:e.productId}}),window.location.href=`${R.getInstallUrl(e)}&ocid=${this.psiServiceFailedOcidPrefix}${p.status}`}}catch(p){const v=p;S.track({name:"PSIFailed",properties:{CorrelationId:o,Cause:v?.cause,ErrName:v?.name,ErrMsg:v?.message,productId:e.productId}}),window.location.href=`${R.getInstallUrl(e)}&ocid=${this.psiServiceFailedOcidPrefix}na`}this.loadingState=!1}generateNewPSICookie(){const t=(Math.random()<.5?0:1)?this.psiTreamtmentFlag:this.psiControlFlag,i=new Date;return i.setMonth(i.getMonth()+1),ne.setCookie("psi_cookie",t,i),t}renderRegularBuyLabel(e,t){const i=e.price===0,r=i?a.getFormatted("ProductDetails.BuyBoxFreeAriaRole",e.title):a.getFormatted("ProductDetails.BuyBoxPaidAriaRole",e.title);return i?s`<span aria-label="${a.getFormatted("ProductDetails.BuyBoxFreeAriaLabel",e.title)}" aria-roledescription="${r}" role="note">${t}</span>`:s`<span aria-label="${a.getFormatted("ProductDetails.BuyBoxPaidAriaLabel",e.title,t)}" aria-roledescription="${r}" role="note">${t}</span>`}renderDiscountButton(e,t,i){return s`
            <div class="discount-btn-container">
                <sl-button class="buy-btn discount-btn" variant="primary" size="${this.size}"
                        telemetry-event-id="CtaClicked"
                        tabindex="-1"
                        rel="nofollow"
                        href="${R.getInstallUrl(e)}">
                    <span class="discount-percent">${i.percentageOffText}</span>
                </sl-button>
                <sl-button class="buy-btn with-discount-btn" variant="primary" size="${this.size}"
                        telemetry-event-id="CtaClicked"
                        rel="nofollow"
                        href="${R.getInstallUrl(e)}">
                    <div class="prices">
                        <span class="strikethrough-price" aria-label="${a.getFormatted("ProductDetails.BuyBoxSpecialAriaLabel",e.title,i.strikethroughPrice)}" aria-roledescription="${a.getFormatted("ProductDetails.BuyBoxPaidAriaRole",e.title)}" role="note">${i.strikethroughPrice}</span>
                        <span class="current-price">${t}</span>
                    </div>
                    ${this.renderGetLogo()}
                </sl-button>
            </div>
        `}renderGetLogo(e){let t="";return e?t=e==="dark"?"/assets/icons/get-dark.svg":"/assets/icons/get-light.svg":t=this.isDarkMode?"/assets/icons/get-dark.svg":"/assets/icons/get-light.svg",s`
            <img class="logo" width="16" height="16" src=${t} alt="" />
        `}renderRegularPricing(e,t,i){return e!=="-1"?s`
            <div class="regular-price-container">
                <span class="or-text">${a.get("ProductDetails.OrRegularPrice")}</span>
                <div class="prices-container">
                    ${this.renderStrikethroughPrice(t,i.strikethroughPrice)}
                    <span class="regular-price">${e}</span>
                </div>
            </div>
            `:s``}renderStrikethroughPrice(e,t){const i=this.hasGamePass?"standalone-dark-theme":"strikethrough-price-text";return e?s`<span class="${i}">${t}</span>`:s``}getGamePassPrices(e){const t=e.skusSummary,i=this.getGPPricing(t[0],"gamepass")??"-1",r=this.getGPPricing(t[0],"default")??"-1";return[i,r]}getGPPricing(e,t){const i=e.salePrices,r=[],o=new Map,n=t==="gamepass";for(const l of Object.values(i))(n?l.badgeId.toLowerCase()==="gamepass":l.badgeId.toLowerCase()!=="gamepass")&&(r.push(l.price),o.set(l.price,l.displayPrice));return o.get(Math.min(...r))}renderShareButton(e){return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                        telemetry-event-id="CtaClicked"
                        @click="${()=>this.share(e)}">
                ${a.get("ProductDetails.Share")}
            </sl-button>
        `}renderPurchaseInfo(e){if(this.showExtraInfo==="show"){const t=e.hasAddOns||e.hasThirdPartyIAPs;return t?s`
                <div class="buy-info">
                    <span>${t?a.get("ProductDetails.HasThirdPartyIAPs"):null}</span>
                </div>
            `:s``}return s``}share(e){navigator.share({url:`https://apps.microsoft.com/detail/${e.productId}`,title:e.title||"",text:e.shortDescription||e.description||""})}getPriceFromSkus(e){if(e===null)return["-1","single"];const t=[],i=new Map;if(e?.forEach(l=>{const c=l.price;l.displayPrice&&(t.push(c),i.set(c,l.displayPrice))}),t.length===0)return["-1","single"];const r=Math.min(...t)??-1;if(r===-1)return["-1","single"];const n=t.every((l,c,p)=>l===p[0])?"single":"multiple";return[i.get(r)||"",n]}};k.styles=[O,pt];D([h()],k.prototype,"size",2);D([h({type:Object})],k.prototype,"product",2);D([h({attribute:"show-extra-info"})],k.prototype,"showExtraInfo",2);D([h({type:Boolean})],k.prototype,"isDarkMode",2);D([d()],k.prototype,"hasGamePass",2);D([d()],k.prototype,"psiProductIdArray",2);D([d()],k.prototype,"loadingState",2);k=D([G("buy-box")],k);const Et=A`

    /** This doesn't seem to work in mac safari */
    :host([direction=column])::part(products-container) {
        --card-width: 100%;
    }

    .product-recommendation.column product-collection::part(products-container) {
        --card-width: 100%;
    }
    .product-recommendation.row product-collection {
        margin-top: 0;
    }

    product-collection {
        margin-top: -12px;
        background-color: var(--color)
    }

`;var Mt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,W=(e,t,i,r)=>{for(var o=r>1?void 0:r?Ht(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&Mt(t,i,o),o};let T=class extends V{constructor(){super(),this.direction="row",this.recommendationProducts=null,this.isErrorOrNoData=!1}fetchProductRecommendationData(e){const{productId:t,productFamilyName:i,categoryIds:r}=e||{};try{this.recommendationProducts=Re.fromRelatedProducts(t,i,r,30)}catch{this.handleErrorAndNoData()}}connectedCallback(){super.connectedCallback(),this.fetchProductRecommendationData(this.product)}handleErrorAndNoData(){this.isErrorOrNoData=!0,this.dispatchEvent(new CustomEvent("hide-component"))}render(){if(!this.product||this.isErrorOrNoData)return s``;const e=this.direction==="column"?"column":"row";return s`
            <div class="product-recommendation ${e}">
                <product-collection
                    .products=${this.recommendationProducts}
                    part="product-collection"
                    card-appearance="recommend"
                    ?show-title="${!0}"
                    see-all-url="${`/related/${this.product.productId}`}"
                    direction="${this.direction}"
                    max-product-count="6"
                    telemetry-area-id="RelatedProducts"
                    telemetry-data='{ "sourceProductId": "${this.product.productId}" }'
                    @no-data="${this.handleErrorAndNoData}"
                >
                </product-collection>
            </div>
        `}};T.styles=[O,Et];W([h()],T.prototype,"product",2);W([h({reflect:!0})],T.prototype,"direction",2);W([d()],T.prototype,"recommendationProducts",2);W([d()],T.prototype,"isErrorOrNoData",2);T=W([G("product-recommendation")],T);const Bt=A`
    :host{
        --carousel-width: 100%;
        --sl-card-body-padding: 1.25rem 1.5rem; /** 20px 24px */
        --sl-card-header-padding: var(--sl-spacing-medium) 0;
        --sl-card-header-margin: 0 1.5rem;
        --sl-card-border-radius: var(--sl-border-radius-large);
        --sl-card-header-font-weight: var(--sl-title-font-weight);
        width: calc(100% - var(--layout-padding));
    }

    .image-logo-container, .logo-container {
        position: relative;
        height: 100%;
        width: auto;
    }

    .logo-container {
        cursor: pointer;
    }


    .hero-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 500px;
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;
        ${Ze("blur(40px) opacity(0.8)")}
    }

    .hero-img::before{
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background: var(--theme-background-color);
        opacity: 0.4;
    }
    .hero-img::after {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, var(--theme-background-color), transparent 30%),
        linear-gradient(to top, var(--theme-background-color), transparent 30%),
        linear-gradient(to right, var(--theme-background-color), transparent 50%),
        linear-gradient(to left, var(--theme-background-color), transparent 100%);
    }

    .hero-img-container .loading {
        width: 100%;
        aspect-ratio: 16 / 9;
        background-color: var(--sl-color-gray-50);
    }

    /** details-container is the full width section that contains the centered div that shows all app details. */
    .details-container {
        width: 100%;
        position: relative;
        box-sizing: border-box;
    }

    /** Child of details-container that takes up most of the width and shows app detail sections. */
    .details {
        display: flex;
        align-items: stretch;
        --right-side: max(338px, 22%);
        --side-spacing: 64px;
        --left-side: calc(100% - var(--right-side) - var(--side-spacing));
        --transition: all ease-in-out var(--sl-transition-medium);
        gap: var(--side-spacing);
    }

    .details .left-side {
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-large);
        transition: var(--transition);
    }
    .details .product-recommendation {
        transition: var(--transition);
        align-self: flex-start;
        position: sticky;
        width: 100%;
        top: 115px;
    }
    .details.two-column .left-side {
        width: var(--left-side);
    }

    .details.two-column .product-recommendation {

        width: var(--right-side);
        overflow: visible;
    }
    .details.one-column {
        flex-direction: column;
        --side-spacing: var(--sl-spacing-large);
    }

    .details.one-column .left-side {
        width: 100%;
    }

    .loading .product-recommendation {
        height: 500px;
    }


    .details .left-side product-recommendation {
        display: none;
    }



    product-collection.related-products {
        --square-and-tall-card-num: var(--related-products-num);
    }


    .app-info-container {
        /** Use a variable here; it's updated in JS due to nature of fixed position elements */
        --sticky-header-width: 100px;
        display: flex;
        gap: 2rem;
        margin: 5.625rem 0 4.25rem; /**top: 90px, bottom: 68px */
    }


    .logo {
        border-radius: var(--sl-border-radius-large);
        height: auto;
        width: 200px;
        vertical-align: middle;
    }

    .logo.view-transition {
        view-transition-name: app-logo;
    }

    .header-wrapper {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        background-color: transparent;
        height: 45px;
        border-radius: 0 0 var(--sl-border-radius-large) var(--sl-border-radius-large);
        overflow: hidden;
        transition: ease-in-out background-color 1s;
    }

    .logo-container:hover .header-wrapper {
        background-color: black;
    }

    .wide-trailer-header {
        position: absolute;
        right: -80px;
        bottom: 0px;
        padding: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        background-color: transparent;
        border: none;
        color: #FFFFFF;
        transition: ease-in-out right 0.5s, border-radius 1s;
        border-radius: 0 0 var(--sl-border-radius-large) var(--sl-border-radius-large);
    }

    [dir="rtl"] .wide-trailer-header {
        right: 70px;
    }

    .logo-container:hover .wide-trailer-header {
        right: 20%;
        opacity: 0.8;
        cursor: pointer;
        transition-delay: 0s, 0s, 0s;
    }

    [dir="rtl"] .logo-container:hover .wide-trailer-header {
        right: -20%;
    }

    .logo-caption {
        display: block;
        opacity: 0;
        visibility: hidden;
        padding-right: 5px;
        transition: ease-in-out opacity 1s, visibility 1s, transform 1s;
    }

    .logo-container:hover .logo-caption {
        opacity: 1;
        visibility: visible;
        transform: translateX(5%);
        transition-delay: 0s, 0s, 0s;
    }

    .wide-trailer-header .trailer-play {
        width: 25px;
        height: 25px;
        padding-right: 5px;
    }

    sl-skeleton.transparent {
        --color: transparent;
    }
    sl-skeleton.logo {
        width: 200px;
        height: 200px;
        flex-shrink: 0;
        --border-radius: 8px;
    }

    .app-info, .app-info-skeleton {
        display: flex;
        flex-direction: column;
        min-height: 200px;
    }

    .app-info-skeleton {
        gap: 16px;
        flex: 1;
        max-width: 500px;
    }

    .app-info h1 {
        font-weight: var(--sl-title-font-weight);
        font-size: 28px;
        margin: var(--sl-spacing-x-small) 0;
        line-height: var(--sl-line-height-denser);
    }


    .title.view-transition {
        view-transition-name: app-title;
    }

    /** Loading skeletong for empty title */
    .app-info sl-skeleton.title {
        width: 300px;
        height: 36px;
    }


    .app-info .subtitle {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-3x-small);
        font-size: var(--sl-font-size-medium);
        color: var(--sl-color-neutral-600);
        margin: 0;
        line-height: 40px;
    }

    sl-rating {
        --symbol-size: 14px;
        height: 17px;
        --symbol-color-active: var(--sl-color-neutral-500);
    }

    sl-divider {
        height: 22px;
        --spacing: var(--sl-spacing-2x-small);
        --color: #00000014;
        --width: var(--sl-panel-border-width);
    }

    sl-card::part(header) {
        border-color: #E6E6E6;
        margin: var(--sl-card-header-margin);
        padding: var(--sl-card-header-padding);
    }

    sl-card::part(body) {
        padding: var(--sl-card-body-padding);
    }


    .app-info sl-skeleton.subtitle {
        width: 200px;
        height: 20px;
    }


    .app-info .short-description {
        font-size: var(--sl-font-size-small);
        margin-top: 0;
    }

    .app-info .buy-box-container {
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 100%;
    }

    sl-card {
        --border-radius: var(--sl-card-border-radius);
    }

    sl-card .feature-text:first-of-type {
        margin-top: 0;
    }
    sl-card .feature-text:last-of-type {
        margin-bottom: 0;
    }

    sl-card [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    sl-card [slot='header'] h4 {
        font-family: var(--body-font);
        font-weight: var(--sl-card-header-font-weight);
        font-size: 18px;
        margin: 0;
        display: inline-block;
    }

    .description {
        white-space: pre-wrap;
        max-height: 150px;
        overflow-y: hidden;
        text-overflow: ellipsis;
        padding-bottom: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    .description.expanded {
        max-height: none;
        overflow-y: initial;
        text-overflow: none;
    }


    ratings-reviews-list {
        position: relative;
    }

    [dir="rtl"] ratings-reviews-list {
        left: 0;
    }

    .show-more-btn, .see-all-btn {
        margin-top: 8px;
        margin-bottom: -16px;
    }

    .see-all-btn-related {
        left: 32px;
    }

    [dir="rtl"] .see-all-btn-related {
        left: 0;
        right: 32px;
    }

    .see-all-btn-related {
        position: relative;
        bottom: var(--sl-spacing-x-small);
    }

    ${x($.lg)} {
        .description, sl-button,  ratings-reviews-summary, .feature-text {
            margin-left: 0;
        }

        ratings-reviews-list {
            left: 0;
        }
    }

    sl-icon-button::part(base) {
        padding-right: 0;
    }

    sl-button::part(base), p {
        font-size: 14px;
        font-weight: 400;
    }

    .publisher-link, .category-button {
        margin-left: 0;
    }

    .publisher-link::part(base), .category-button::part(base) {
        font-size: var(--sl-font-size-medium);
    }


    sl-button::part(base) {
        font-family: var(--body-font);
        font-weight: 400;
        color: var(--theme-primary-element-color);
    }

    sl-button::part(base):hover {
        color: var(--sl-color-primary-600);
    }

    .publisher-link::part(label), .category-button::part(label) {
        padding: 0;
    }

    .see-all-btn::part(label),
    .show-more-btn::part(label),
    .about-ratings-and-review::part(label) {
        /** For the "show more/show less" buttons, don't give any left padding. This allows the text to align right up to the left edge of the text above it. */
        padding: 0;
    }

    .reviews-age-rating-container {
        display: flex;
        gap: var(--sl-spacing-2x-small);
        flex-wrap: wrap;
        align-items: center;
    }


    sl-skeleton.reviews-age-rating-container {
        height: 76px;
        --border-radius: 8px;
    }


    .reviews-age-rating-container h3 {
        margin-bottom: var(--sl-spacing-2x-small);
        white-space: nowrap; /** No wrap here otherwise the '3.5 ⭐' header can push the star to the next line on small screens */
        text-align: center;
    }

    .rating-count {
        text-align: center;
    }

    .rating-info-icon::part(base) {
        padding-left: 0;
        font-size: var(--sl-font-size-small);
    }

    .rating-logo {
        max-height: 50px;
        width: auto;
        align-self: center;
    }

    .rating-name-link {
        color: var(--sl-color-neutral-1000);
        text-decoration: none;
    }

    .rating-name {
        font-weight: var(--sl-font-weight-semibold);
        margin-top: 0;
        margin-bottom: var(--sl-spacing-3x-small);
    }

    .rnr-dialog::part(panel) {
        width: 950px;
        min-width: 350px;
        max-height: 626px;
        background-color: #F3F3F3;
        border-radius: 8px;
    }

    .rnr-dialog::part(header) {
        border-bottom: 1px solid #00000014;
    }

    .rnr-dialog::part(overlay) {
        background-color: #00000099;
    }

    .rnr-dialog::part(title) {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        padding: 12px 32px;
    }

    @media (max-height: 920px) {
        .rnr-dialog::part(base) {
            align-items: baseline;
        }

        .rnr-dialog::part(panel) {
           height: calc(var(--screen-height) - 170px);
           min-height: 160px;
           margin-top: 148px;
        }
    }

    ${le()} {
        .rnr-dialog::part(base) {
            align-items: center;
        }
        .rnr-dialog::part(panel) {
            height: 92vh;
            margin-top: 0;
         }
    }

    .rnr-dialog::part(body) {
        padding: 20px 32px;
    }


    .rating-reasons {
        margin-bottom: 0;
        max-width: 300px;
        text-align: left !important; /** Marked !important to override the rule that says text-align: center for all <p> inside app details */
    }

    .promo-image {
        border-radius: var(--sl-border-radius-x-large);
        height: 80px;
        width: 150px;
        align-items: center;
    }

    .promo-container {
        display: flex;
        gap: var(--sl-spacing-large);
        text-decoration: none;
        padding: var(--sl-spacing-small);
    }

    .promo-container:hover {
        background-color: var(--sl-color-neutral-50);
    }

    .promo-content-container {
        color: var(--sl-color-neutral-1000);
    }

    .promo-title {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: var(--sl-font-weight-semibold);
    }

    .promo-body {
        color: var(--sl-color-neutral-500);
        margin-top: var(--sl-spacing-2x-small);
    }


    /** For the chevron open/close buttons, have an animated transform.
        This allows us to animate chevron direction as its opened and closed */
    sl-icon-button[name="chevron-right"] {
        transition: transform var(--sl-transition-medium) ease-out;
    }

    sl-icon-button.chevron-opened {
        transform: rotate(90deg);
    }

    .reviews-summary-shimmer {
        --shimmer-height: 171px;
    }

    .system-requirements-shimmer {
        --shimmer-height: 287px;
    }

    .reviews-list-shimmer {
        --shimmer-height: 400px;
    }

    .additional-info-shimmer {
        --shimmer-height: 595px;
    }

    .lazy-related-apps {
        min-height: 240px;
        margin-top: -44px;
    }

    .sticky-header-container {
        position: absolute;
        width: 100%;
    }

    .sticky-header {
        background-image: var(--theme-noise-image-to-linear-gradient);
        backdrop-filter: blur(100px);
        border: 1px solid var(--sl-color-gray-200);
        border-radius: var(--sl-border-radius-large);
        position: fixed;
        transition: top var(--sl-transition-medium) ease-in-out, opacity var(--sl-transition-medium) ease-in-out;
        top: 0;
        width: var(--sticky-header-width);
        opacity: 0;
        padding: var(--sl-spacing-small);
        margin-left: 8px;
        margin-right: 8px;
        box-sizing: border-box; /** So that setting the width in JS won't be affected by our padding. */
        box-shadow: var(--sl-shadow-large);
        z-index: var(--sl-z-index-drawer);
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-small);
        justify-content: space-between;
        align-items: center;
    }


    .sticky-header.show {
        opacity: 0.95;
        top: 90px;
        z-index: 1;
    }

    /** The navbar on mobile is taller - account for that here. */
    @media (max-width: 838px) {
        .sticky-header.show {
            top: 113px;
        }
    }
    ${le()} {
        .sticky-header.show {
            top: 5px;
        }
    }

    .sticky-header:hover {
        filter: brightness(1.05);
    }

    .sticky-header img {
        border-radius: var(--sl-border-radius-large);
        max-width: 55px;
        height: auto;
    }

    .sticky-header h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: var(--sl-font-weight-semibold);
    }

    .sticky-header .title-and-publisher {
        flex-grow: 2;
        flex-basis: 0;
    }

    .category-module-text {
        font-size: var(--sl-font-size-x-small);
        position: relative;
        bottom: 6px;
    }

    .movie-category-module-container {
        display: flex;
        flex-direction: row;
        gap: var(--sl-spacing-small);
    }

    .movie-category-module {
        margin: 1% 0;
    }

    .movie-category-module::part(base) {
        height: 30px;
        min-height: 0px;
    }

    @media (prefers-color-scheme: dark) {
        .publisher-link::part(base), .category-button::part(base), .see-all-btn::part(label), .show-more-btn::part(label), .movie-category-module::part(base) {
            color: var(--theme-secondary-element-color) !important;
        }

        .publisher-link::part(base):hover, .category-button::part(base):hover, .see-all-btn::part(label):hover, .show-more-btn::part(label):hover {
            color: var(--theme-secondary-element-hover-color) !important;
        }

        .subtitle {
            color: #FFFFFFC8 !important;
        }

        sl-rating {
            --symbol-color-active: #FFFFFF8B !important;
        }

        sl-card::part(header) {
            border-color: #FFFFFF15 !important;
        }

        sl-divider {
            --color: #FFFFFF15 !important;
        }

        .hero-img-container::before,
        .hero-img-container::after {
            width: 80%;
        }

        .background-overlay {
            background: rgba(16, 16, 16, 0.3);
        }

        .rnr-dialog::part(panel) {
            background-color: #202020;
        }

        .rnr-dialog::part(header) {
            border-bottom: 1px solid #FFFFFF15;
        }

        .rnr-dialog::part(close-button__base):hover {
            color: var(--theme-secondary-element-color);
        }

    }

    .screenshots-loading sl-skeleton {
        height: 250px;
        width: 50%;
    }

    .description-loading {
        height: 277px;
    }

    .ratings-reviews-loading {
        height: 309px;
    }

    sl-skeleton.no-radius {
        --border-radius: var(--sl-spacing-large);
    }

    /** on mobile screen */
    ${x($.xs)} {
        /** On phones, details should go the full width, no margin. */
        .details {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }

        /** On phones, app info container should be verticle and horizontally centered */
        .app-info-container {
            flex-direction: column;
            align-items: center;
            margin-top: var(--sl-spacing-4x-large);
        }
        /** On phones, center the product name */
        .app-info h1 {
            text-align: center;
        }

        /** On mobile, when we show a loading skeleton for the app info, align them to be centered */
        .app-info.loading {
            align-items: center;
        }

        .app-info {
            gap: 4px;
        }

        /** On phones, center the product name */
        .app-info h1 {
            text-align: center;
        }

        .app-info sl-skeleton.title {
            width: 275px;
        }

        .app-info .subtitle {
            justify-content: center;
        }

        .app-info sl-skeleton.subtitle {
            width: 200px;
        }

        .publisher-link::part(base), .category-button::part(base) {
            position: relative;
            top: 1px;
        }

        .publisher-link::part(label) {
            padding: 0 var(--sl-spacing-medium);
        }

        /** On phones, the ratings summary section should be centered */
        .reviews-age-rating-container {
            justify-content: center;
        }

        sl-skeleton.reviews-age-rating-container {
            width: 300px;
        }

        /** To avoid wrapping the rating section on mobile, don't display the rating name (e.g. "TEEN"). */
        .rating-name {
            display: none;
        }


        /** On phones, sticky header should take full width */
        .sticky-header {
            width: calc(100% - 20px);
            margin-left: 0;
            margin-right: 0;
        }

        buy-box {
            margin-top: var(--sl-spacing-large);
        }

        .screenshots-loading sl-skeleton {
            height: 250px;
            width: 100%;
        }

        ${x($.xs-100)} {
            .sticky-header .title-and-publisher {
                display: none;
            }
        }
    }

`;var zt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,b=(e,t,i,r)=>{for(var o=r>1?void 0:r?Nt(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&zt(t,i,o),o};let g=class extends V{constructor(){super(),this.productName=null,this.productId="",this.product=null,this.promotedProduct=null,this.contributors=null,this.episodes=null,this.descriptionExpanded=!1,this.reviewsModalOpen=!1,this.reviewsHidden=!1,this.stickyHeaderVisible=!1,this.relatedProducts=null,this.modal=!1,this.trailerModalOpen=!1,this.relatedAppsState="loading",this.dir="ltr",this.screenHeight=0,this.noProductRecommendation=!1,this.oneColumnLayout=!1,this.scrollHandler=()=>this.scrolled(),this.resizeHandler=()=>this.resized(),this.reviewsDialogClosedHandler=()=>this.closeDialog(),this.trailerDialogClosedHandler=()=>this.closeTrailerDialog(),this.routeChangedHandler=()=>this.routeChanged(),this.windowHandler=()=>this.handleResize(),this.heroImg=null,this.stickyHeaderScrollHandle=0,this.stickyHeaderResizeHandle=0,this.minDate=new Date("0001-01-01T00:00:00"),this.screenHeight=window.innerHeight,this.updateLayout()}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.scrollHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}),window.addEventListener("sl-request-close",this.trailerDialogClosedHandler),H.addEventListener("route-changed",this.routeChangedHandler),this.addEventListener("sl-request-close",this.reviewsDialogClosedHandler),window.addEventListener("resize",this.windowHandler),document.addEventListener("skipToMain",()=>this.setPublisherFocus()),this.updateDirection()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("sl-request-close",this.trailerDialogClosedHandler),H.removeEventListener("route-changed",this.routeChangedHandler),this.removeEventListener("sl-request-close",this.reviewsDialogClosedHandler),window.removeEventListener("resize",this.windowHandler),document.removeEventListener("skipToMain",()=>this.setPublisherFocus())}updated(e){if(e.has("productId"))if(this.product=null,this.heroImg=null,this.descriptionExpanded=!1,this.reviewsModalOpen=!1,this.productId){const t=new Date;B.getPdpPage(this.productId).then(i=>{H.lastNavigatedProduct=i,document.title=a.getFormatted("Common.PageTitle",i.title),this.productLoaded(i,t)}).catch(i=>this.showProductLoadError(i))}else this.showProductLoadError("No product ID specified.");e.has("screenHeight")&&document.documentElement.style.setProperty("--screen-height",`${this.screenHeight}px`)}updateLayout(){window.innerWidth<de.xl?this.oneColumnLayout=!0:this.oneColumnLayout=!1}updateDirection(){this.dir=a.isRtl()?"rtl":"ltr"}closeDialog(){this.reviewsModalOpen=!1}handleResize(){this.screenHeight=window.innerHeight,this.requestUpdate()}setPublisherFocus(){this.shadowRoot?.querySelector(".publisher-link")?.focus()}async fetchAdditionalMovieTVData(e){if(e.isMovie)try{const t=await B.getMovieContributorList(e.productId);this.contributors=t.cards}catch(t){this.showProductLoadError(t)}else try{const t=await B.getTVEpisodesList(e.productId);this.episodes=t.products}catch(t){this.showProductLoadError(t)}}async fetchAdditionalAppData(e){try{B.getPromoProductDetails(e.productId).then(t=>this.promotedProduct=t).catch(t=>this.showProductLoadError(t))}catch(t){this.showProductLoadError(t)}}productLoaded(e,t){const i=new Date().getTime()-t.getTime(),r=H.lastNavigatedProduct?.productId===this.productId,o=250;if(i<o&&r){this.shadowRoot?.querySelectorAll("sl-skeleton")?.forEach(c=>c.classList.add("transparent")),setTimeout(()=>{this.productLoaded(e,t)},o-i);return}this.product=e,this.fetchAdditionalAppData(e),new URLSearchParams(location.search.toLowerCase()).get("launch")==="true"&&(location.href=R.getInstallUrl(e)),this.updateStickyHeaderVisibility(!0)}render(){if(!this.product)return this.renderLoading();const e=this.product.isMoviesOrTVs?this.renderMovieHeader(this.product):this.renderAppHeader(this.product);return s`
            ${this.renderHero(this.product)}
            <div
                class="details-container product-details"
                telemetry-area-id="ProductDetails"
                telemetry-data='{ "itemId": "${this.product.productId}", "itemType": "${this.product.productFamilyName}", "itemName": "${this.product.title}" }'
            >
                ${e}
                <!-- No recommended products always show one column -->
                <div class="details ${this.oneColumnLayout||this.noProductRecommendation?"one-column":"two-column"}" dir=${this.dir} >
                    ${this.renderLeftSide(this.product)}
                    ${this.renderRecommendation(this.product,this.oneColumnLayout?"row":"column")}
                </div>
            </div>
        `}renderLeftSide(e){return s`
            <div class="left-side">
                ${this.renderScreenshots(e)}
                ${this.renderDescription(e)}
                ${this.renderPromo()}
                ${this.renderReviews(e)}
                ${this.renderFeatures(e)}
                ${this.renderSystemRequirements(e)}
                ${this.renderAdditionalInfo(e)}
                <!-- Hide this commponent for now as the data is uncertain-->
                <!-- ${this.renderRelatedProductsLazy(e)} -->
            </div>
        `}renderRecommendation(e,t){return s`
            <product-recommendation
                class="product-recommendation"
                .product=${e}
                direction="${t}"
                @hide-component=${()=>this.noProductRecommendation=!0}
            ></product-recommendation>
        `}renderLoading(){return s`
            <div class="details-container with-hero product-details loading">
                ${this.renderLoadingAppInfo()}
                <div class="details ${this.oneColumnLayout?"one-column":"two-column"}">
                    <div class="left-side">
                        ${this.renderLoadingScreenshots()}
                        ${this.renderLoadingBlock("description-loading")}
                        ${this.renderLoadingBlock("ratings-reviews-loading")}
                    </div>
                    <div class="product-recommendation loading">
                        ${this.renderLoadingBlock("product-recommendation")}
                    </div>
                </div>
            </div>
        `}renderLoadingAppInfo(){return s`
            <div class="app-info-container">
                <sl-skeleton class="logo view-transition" effect="pulse"></sl-skeleton>
                <div class="app-info-skeleton loading">
                    <sl-skeleton class="title view-transition" effect="pulse"></sl-skeleton>
                    <sl-skeleton class="subtitle" effect="pulse"></sl-skeleton>
                    <sl-skeleton class="reviews-age-rating-container" effect="pulse"></sl-skeleton>
                </div>
            </div>
        `}renderLoadingScreenshots(){return s`
            <div class="screenshots-loading d-flex gap-2">
                <sl-skeleton class="no-radius" effect="pulse"></sl-skeleton>
                <sl-skeleton class="no-radius" effect="pulse"></sl-skeleton>
            </div>
        `}renderLoadingBlock(e){return s`
            <sl-skeleton class="${e} no-radius" effect="pulse"></sl-skeleton>
        `}renderHero(e){const t=Q.getResizableImageUrl(e?.pdpImageUrl||"","height",200);return s`
            <div class="hero-img" style="background-image: url('${t}')"></div>
        `}renderTrailerWrapper(e,t){return t?s`
                <div class="header-wrapper" @click="${()=>this.renderVideoTrailers(e)}" dir=${this.dir}>
                <button class="wide-trailer-header" @click="${()=>this.renderVideoTrailers(e)}">
                    <sl-icon name="play-circle" class="trailer-play" label=${a.getFormatted("ProductDetails.Play")}></sl-icon>
                    <span class="logo-caption">${a.get("ProductDetails.PlayTrailer")}</span>
                    </button>
                </div>
            `:s``}renderVideoTrailers(e){return this.trailerModalOpen=!0,this.modal=!0,this.getScreenshotViewer(e,this.trailerModalOpen,this.modal)}getAppImageSourceSet(e){const t=e.pdpImageUrl,i=this.getDimensions(e,t||""),r=new URL(t||"");return Ke(r,i[0],i[1],200,200)}getDimensions(e,t){return(e.images||[]).filter(i=>i.url===t).map(i=>[i.width,i.height]).at(0)||[0,0]}renderLogo(e){const t=e.iconUrlBackground||"transparent",{src:i,srcSet:r}=this.getAppImageSourceSet(e),o=navigator.userAgentData?.mobile;return e?.trailers&&e?.trailers.length>0&&!o?s`
                <div class="logo-container" @click="${()=>this.renderVideoTrailers(e)}">
                    <img class="logo view-transition" src="${i}" srcset="${r}" style="background-color: ${t}" role="presentation"/>
                    ${this.renderTrailerWrapper(e,!0)}
                </div>
            `:s`
            <div class="image-logo-container">
                <img class="logo view-transition" src="${i}" srcset="${r}" style="background-color: ${t}" role="presentation"/>
                ${this.renderTrailerWrapper(e,!1)}
            </div>
        `}renderAppHeader(e){const t=o=>this.updateStickyHeaderWidth(o),i=e.averageRating!==0&&e.ratingCount!==0,r=!!(e.ratingCount!==0&&e.categories);return s`
            <div class="app-info-container" ${J(t)} dir=${this.dir}>
                ${this.renderLogo(e)}
                <div class="app-info" telemetry-area-id="Header">
                    <h1 class="title view-transition">${e.title}</h1>
                    ${this.renderSubtitle(e)}
                    <div class="reviews-age-rating-container">
                        ${this.renderAverageRating(e)}
                        ${this.renderDivider(i)}
                        ${this.renderNumRatings(e)}
                        ${this.renderDivider(r)}
                        ${this.renderCategory(e)}
                    </div>
                    <div class="buy-box-container">
                        <buy-box .product="${e}" size="large"
                                 telemetry-area-id="CtaButton"
                                 telemetry-data='{
                                     "buttonType": "${Z()?"get":Y()?"share":"unknown"}",
                                     "isPaid": ${!!(e.price||e?.skus?.find(o=>!!o.price))},
                                     "itemId": "${e.productId}",
                                     "itemType": "${e.productFamilyName}"
                                 }'>
                        </buy-box>
                    </div>
                </div>
                ${this.renderStickyHeader(e)}
            </div>
        `}renderDivider(e){return e?s`
                <sl-divider vertical></sl-divider>
            `:s``}renderMovieHeader(e){const t=Math.floor((e.durationInSeconds||0)/3600),i=Math.floor((e.durationInSeconds||0)%3600/60),r=(t!==0?t+" h ":"")+(i!==0?i+" min":""),o=e.supportedLanguages.length>1?a.get("ProductDetails.MultipleLanguageAudio"):a.get("ProductDetails.OneLanguageAudio"),n=e.productRatings!==null?e.productRatings[0].shortName:"",c=[e.releaseDateUtc&&new Date(e.releaseDateUtc)>this.minDate?new Date(e.releaseDateUtc).getFullYear().toString():"",e.subtitle||e.publisherName,r,o,n].filter(v=>!!v).join(" · ");return s`
            <div class="app-info-container" ${J(v=>this.updateStickyHeaderWidth(v))} telemetry-area-id="Header">
                ${this.renderLogo(e)}
                <div class="app-info">
                    <h1 class="title view-transition">${e.title}</h1>
                    <p class="subtitle">${c}</p>
                    ${this.renderMovieCategoryModule(e)}
                    <div class="buy-box-container">
                        <buy-box .product="${e}" size="large"
                                 telemetry-area-id="CtaButton"
                                 telemetry-data='{
                                     "buttonType": "${Z()?"get":Y()?"share":"unknown"}",
                                     "isPaid": ${!!(e.price||e?.skus?.find(v=>!!v.price))},
                                     "itemId": "${e.productId}",
                                     "itemName": "${e.title}",
                                     "itemType": "${e.productFamilyName}"
                                  }'>
                        </buy-box>
                    </div>
                </div>
                ${this.renderStickyHeader(e)}
            </div>
        `}renderMovieCategoryModule(e){return!e.categories||e.categories.length===0?s``:s`
            <div class="movie-category-module-container">
                ${C(e.categories,t=>this.renderMovieCategory(e,t))}
            </div>
        `}renderMovieCategory(e,t){const i=e.isMovie?`/collections/movies/${ce.TopSellingMovies}?category=${encodeURIComponent(t)}`:`/collections/movies/${ce.TopSellingTvShows}?category=${encodeURIComponent(t)}`;return s`
            <sl-button class="movie-category-module" pill
                telemetry-event-id="CategoryClicked"
                telemetry-data='{ "data": "${t}", "type": "category-search-results" }'
                href="${i}">
                <span class="category-module-text">${t}</span>
            </sl-button>
        `}renderSubtitle(e){return s`
            <p class="subtitle">
                ${this.renderPublisherLink(e)}
            </p>
        `}renderAverageRating(e){const t=e.averageRating===0?null:e.averageRating.toFixed(1);return t?s`
                <div>
                    <p class="subtitle">
                        <span>${t}</span>
                        <span class="label"><sl-rating label="Rating" readonly value="1" max="1" tabindex="-1"></sl-rating></span>
                    </p>
                </div>
            `:s``}renderNumRatings(e){const t=e.ratingCount===0?null:e.ratingCountFormatted;return t?s`
                <div>
                    <p class="subtitle">
                        <span>${a.getFormatted("ProductDetails.RatingsCount",t)}</span>
                    </p>
                </div>
            `:s``}consolidateCategories(){let e="";const t=this.product?.categories?.length;return this.product?.categories&&t&&t>1&&(e=a.getFormatted("ProductDetails.ConsolidateCategory",t-1)),e?s`
                <sl-button class="category-button" variant="text" @click="${this.redirectToAdditionalInfo}">
                    ${e}
                </sl-button>
            `:s``}renderCategory(e){if(e.categories){const t="/collections/"+encodeURIComponent(e.productFamilyName.toLowerCase())+"/category/"+encodeURIComponent(e.categories[0]);return s`
                <div>
                    <p class="subtitle">
                        <sl-button class="category-button" variant="text" href=${t}>
                            ${e.categories[0]}
                        </sl-button>
                        ${this.consolidateCategories()}
                    </p>
                </div>
            `}return s`
        `}redirectToAdditionalInfo(){const e=this.shadowRoot?.getElementById("system-requirements");e&&e.scrollIntoView()}renderPublisherLink(e){const t=e.subtitle||e.publisherName;if(e.isMovie||!e.publisherName)return s`
                <span>${t}</span>
            `;const i=`/search/publisher?name=${encodeURIComponent(e.publisherName)}`;return s`
            <sl-button class="publisher-link" variant="text"
                       telemetry-event-id="PublisherClicked"
                       telemetry-data='{ "data": "${e.publisherName}", "type": "publisher-search-results"  }'
                       href="${i}">${t}</sl-button>
        `}renderProductRatingLogo(e){const t=(e.productRatings||[]).find(o=>!!o.ratingValueLogoUrl);if(!t?.ratingValueLogoUrl)return s``;const i=t.ratingValue||t.longName||t.description||"",r=new Intl.ListFormat(a.getLocaleName(),{style:"short"}).format((t.ratingDescriptors||[]).concat(t.interactiveElements||[]));return s`
            <div class="d-flex gap-1">
                <img class="rating-logo" loading="lazy" alt="${i}" src="${t.ratingValueLogoUrl}" @click="${()=>this.shadowRoot?.querySelector(".rating-dialog")?.show()}" />
                <div>
                    <h4 class="rating-name">
                        ${t.ratingValue||t.longName}
                        <sl-icon-button
                            class="rating-info-icon"
                            name="info-circle"
                            label="${a.get("ProductDetails.AgeRating")}"
                            @click="${()=>this.shadowRoot?.querySelector(".rating-dialog")?.show()}"></sl-icon-button>
                    </h4>

                    <sl-dialog label="${t.ratingValue||""}" class="rating-dialog">
                        <div class="d-flex gap-1">
                            <img class="rating-logo" loading="lazy" alt="${i}" src="${t.ratingValueLogoUrl}" />
                            <div class="d-flex flex-column">
                                <p class="m-0">${t.description}</p>
                                <p class="m-0">${r}</p>
                            </div>
                        </div>
                        <sl-button slot="footer" variant="primary" href="${t.ratingSystemUrl||""}" target="_blank">${a.get("Common.LearnMore")}</sl-button>
                    </sl-dialog>
                </div>
            </div>
        `}setModals(){this.modal=!this.modal,this.trailerModalOpen=!1}renderScreenshots(e){return e.screenshots.length===0&&e.trailers?.length===0?s``:this.getScreenshotViewer(e,this.trailerModalOpen,this.modal)}getScreenshotViewer(e,t,i){return s`
            <sl-card>
                <div slot="header">
                    <h4>${a.get("ProductDetails.ScreenshotLabel")}</h4>
                </div>
                <screenshot-viewer
                .screenshots=${e?.screenshots}
                .trailers=${e?.trailers}
                .showTrailer=${t}
                .modal=${i}
                .productId="${this.productId}"
                .dir=${this.dir}
                telemetry-area-id="Screenshots"
                telemetry-data='{
                    "itemId": "${e.productId}",
                    "itemType": "${e.productFamilyName}",
                    "itemName": "${e.title}",
                    "imagesCount": ${e.screenshots?.length||0},
                    "videosCount": ${e.trailers?.length||0}
                 }'>
                </screenshot-viewer>
            </sl-card>
        `}renderDescription(e){const t=this.descriptionExpanded?"expanded":"",i=this.descriptionExpanded?a.get("ProductDetails.ReadLess"):a.get("ProductDetails.ReadMore"),r=this.descriptionExpanded?a.getFormatted("ProductDetails.ReadLessAriaLabel","Description"):a.getFormatted("ProductDetails.ReadMoreAriaLabel","Description"),o=this.descriptionExpanded?a.get("ProductDetails.ReadLessAriaRole"):a.get("ProductDetails.ReadMoreAriaRole"),n=150,c=(this.shadowRoot?.querySelector(".description")?.clientHeight||0)<n;return s`
            <sl-card telemetry-area-id="Description">
                <div slot="header">
                    <h4>${a.get("Common.Description")}</h4>
                </div>
                <div class="body">
                    <p class="description ${t}">${e.description}</p>
                </div>
                <span ?hidden=${c}>
                    <sl-button class="show-more-btn" variant="text" size="medium" @click="${()=>this.descriptionExpanded=!this.descriptionExpanded}" telemetry-event-id="DescriptionExpandClicked">
                        <span aria-label="${r}" aria-roledescription="${o}" role="button">${i}</span>
                    </sl-button>
                </span>
            </sl-card>
        `}renderPromo(){const e=this.promotedProduct?.items?.at(0),t=e?.actions?.at(0)?.deeplink,r=(t?new URL(t):null)?.searchParams.get("productId");return!e||!e.title||!e.imageUri||!r?s``:s`
            <sl-card telemetry-area-id="PromoProduct">
                <div slot="header">
                    <h4>${e.headline}</h4>
                </div>
                <a class="promo-container" href="/detail/${r}">
                    <img src=${e.imageUri} class="promo-image" alt="${a.get("ProductDetails.DefaultImage.label")}" />
                    <div class = "promo-content-container">
                        <h4 class="promo-title">${e.title}</h4>
                        <p class="promo-body">${e.body}</p>
                    </div>
                </a>
            </sl-card>
        `}renderReviews(e){if(this.reviewsHidden)return s``;const t=e.catalogSource==="AmazonAppStore"?a.get("ProductDetails.RatingsFromAmazon"):a.get("ProductDetails.RatingsAndReviews");return s`
            <sl-card class="reviews-section" telemetry-area-id="Reviews">
                <div slot="header">
                    <h4>${t}</h4>
                </div>
                ${Je(this.renderReviewsSummaryOrModule(e))}
            </sl-card>
        `}renderReviewsSummaryOrModule(e){return e.ratingCount===0?s`
                <p>${a.get("RatingReview.NoReviewText")}</p>
            `:s`
            <lazy-load class="reviews-summary-shimmer" .importer="${()=>this.importRatingsReviewsSummary()}" .renderer="${()=>this.renderReviewsSummary(e,"show")}" when="visible"></lazy-load>
            ${this.renderReviewSeeAll()}
            ${this.renderAboutReviews()}
            ${this.renderRnRModule(e)}
        `}renderRnRModule(e){return s`
            <sl-dialog label="${a.get("ProductDetails.RatingsAndReviews")}" class="rnr-dialog" ?open=${this.reviewsModalOpen}>
                <lazy-load class="reviews-summary-shimmer" .importer="${()=>this.importRatingsReviewsSummary()}" .renderer="${()=>this.renderReviewsSummary(e,"hide")}" when="visible"></lazy-load>
                <lazy-load class="reviews-list-shimmer" .importer="${()=>this.importRatingsReviewsList()}" .renderer="${()=>this.renderReviewsList(e)}" when="visible"></lazy-load>
            </sl-dialog>
        `}renderReviewSeeAll(){if(this.product?.catalogSource==="AmazonAppStore")return s``;const e=a.get("ProductDetails.ReadMore"),t=a.getFormatted("ProductDetails.ReadMoreAriaLabel","Reviews"),i=a.get("ProductDetails.ReadMoreAriaRole");return s`
            <sl-button class="see-all-btn" variant="text" size="medium"
                           telemetry-event-id="SeeAllClicked"
                           @click="${()=>this.reviewsModalOpen=!0}">
                    <span aria-label="${t}" aria-roledescription="${i}" role="button">${e}</span>
            </sl-button>
        `}renderAboutReviews(){const e=B.getCachedMarket().then(t=>t.market==="FR"?s`
                    <br />
                    <sl-button class="about-ratings-and-review" variant="text" target="_blank" href="https://support.microsoft.com/en-us/account-billing/rate-and-review-apps-in-the-microsoft-store-4ed126a4-5d46-413f-a28e-968bd4414a80">
                        ${a.get("RatingReview.About")}
                    </sl-button>`:s``);return s`${tt(e,s``)}`}importRatingsReviewsSummary(){return L(()=>import("./ratings-reviews-summary-38d0215e.js"),["assets/js/ratings-reviews-summary-38d0215e.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/product-collection-91cc6b51.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/product-review-9b3a8083.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js"])}importRatingsReviewsList(){return L(()=>import("./ratings-reviews-list-f9490c2a.js"),["assets/js/ratings-reviews-list-f9490c2a.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/product-collection-91cc6b51.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/chunk.MHCKU7CX-8942761d.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/product-review-9b3a8083.js","assets/js/platform-2180e403.js","assets/js/filter-menu.styles-d28887f8.js"])}importSystemRequirements(){return L(()=>import("./system-requirements-2152295c.js"),["assets/js/system-requirements-2152295c.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js"])}importAdditionalInfo(e){const i=[L(()=>import("./additional-info-d2097e4e.js"),["assets/js/additional-info-d2097e4e.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/chunk.OHYIWJSO-d08d8d85.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js","assets/js/chunk.SKOOBYPV-dc2f449b.js","assets/js/platform-2180e403.js","assets/js/paged-list-5dbf62ed.js","assets/js/spacing.styles-c42ebb1e.js"])];return e.isMoviesOrTVs&&i.push(this.fetchAdditionalMovieTVData(e)),Promise.all(i)}renderReviewsSummary(e,t){return s`
            <ratings-reviews-summary product-id="${e.productId}" product-name="${e.title}" catalog-source="${e.catalogSource}" show-favorable-review="${t}" @reviewsempty="${()=>this.reviewsHidden=!0}"></ratings-reviews-summary>
        `}renderReviewsList(e){return s`
            <ratings-reviews-list product-id="${e.productId}" product-name="${e.title}"></ratings-reviews-list>
        `}renderFeatures(e){return!e.features||e.features.length===0?s``:s`
            <sl-card telemetry-area-id="Features">
                <div slot="header">
                    <h4>${a.get("ProductDetails.FeaturesHeader")}</h4>
                </div>
                ${C(e.features,t=>t,t=>s`<p class="feature-text">${t}</p>`)}
            </sl-card>
        `}renderSystemRequirements(e){if(e.isMoviesOrTVs||e.productFamilyName===he.Passes)return s``;const t=()=>s`
            <system-requirements id="system-requirements" .product=${e} dir=${this.dir}></system-requirements>
        `;return s`
            <lazy-load class="system-requirements-shimmer" .importer="${()=>this.importSystemRequirements()}" .renderer="${()=>t()}" when="immediate"></lazy-load>
        `}renderAdditionalInfo(e){const t=()=>s`
            <additional-info id="additional-info" .product=${e} .contributors=${this.contributors} .episodes=${this.episodes} dir=${this.dir}></additional-info>
        `;return s`
            <lazy-load class="additional-info-shimmer" .importer="${()=>this.importAdditionalInfo(e)}" .renderer="${()=>t()}" when="immediate"></lazy-load>
        `}renderRelatedProductsLazy(e){return this.relatedAppsState==="none"?s``:s`
            <div class="people-also-view" telemetry-area-id="RelatedProducts">
                <lazy-load class="lazy-related-apps" .renderer="${()=>this.renderRelatedProducts(e.isMoviesOrTVs)}" .importer="${()=>this.loadRelatedProducts(e)}" when="visible"></lazy-load>
            </div>

        `}renderRelatedProducts(e){const t=e||this.product?.productFamilyName==="Games"?"tall":"square";return s`
            <product-collection
                class="related-products"
                .products=${this.relatedProducts}
                card-appearance="${t}"
                wrap="nowrap"
                direction="row"
                ?show-title="${!0}"
                title-override="${a.get("ProductDetails.PeopleCheckout")}"
                see-all-url="${`/related/${this.productId}`}"
                telemetry-area-id="RelatedProducts"
                telemetry-data='{ "sourceProductId": "${this.productId}" }'
            >
            </product-collection>
        `}async getRelatedApps(e){return this.relatedProducts=Re.fromRelatedProducts(this.productId,e.productFamilyName,e.categoryIds,7),await this.relatedProducts?.fetch(),this.relatedProducts?.totalCount!==0}loadRelatedProducts(e){if(e.productFamilyName===he.Passes)return this.relatedAppsState="none",Promise.resolve();const t=L(()=>import("./product-collection-91cc6b51.js").then(r=>r.p),["assets/js/product-collection-91cc6b51.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js"]),i=this.getRelatedApps(e).then(r=>this.relatedAppsState=r?"some":"none");return Promise.all([t,i])}async showProductLoadError(e){if(e instanceof Ve){const t=new URLSearchParams;t.set("id",this.productId),t.set("name",this.productName||""),H.navigate("/404/product",t)}else(await L(()=>import("./alert-service-1970f04a.js"),["assets/js/alert-service-1970f04a.js","assets/js/chunk.HDLULROG-fa2c67c1.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-faa56958.js"])).alertService.showError("Unable to load app","We couldn't load that app. Try searching for the app to try again.",e)}scrolled(){this.heroImg&&(this.adjustHeroGradient(window.scrollY),this.panHeroImage(this.heroImg,window.scrollY)),clearTimeout(this.stickyHeaderScrollHandle),this.stickyHeaderScrollHandle=window.setTimeout(()=>this.updateStickyHeaderVisibility(),1)}resized(){clearTimeout(this.stickyHeaderResizeHandle),this.stickyHeaderResizeHandle=window.setTimeout(()=>this.updateStickyHeaderWidth(this.shadowRoot?.querySelector(".app-info-container")),250),this.updateLayout()}closeTrailerDialog(){this.trailerModalOpen=!1,this.modal=!1}clearViewTransitions(){Array.from(this.shadowRoot?.querySelectorAll(".view-transition")||[]).forEach(t=>t.classList.remove("view-transition"))}adjustHeroGradient(e){if(e<100)this.setHeroImageGradient(20);else{const l=20-(Math.min(400,e)-100)*(20-8)/(400-100);this.setHeroImageGradient(l)}}setHeroImageGradient(e){const t="--hero-gradient",i=this.shadowRoot?.querySelector(".details-container"),r=i?.style.getPropertyValue(t),o=e+"%";r!==o&&i&&i.style.setProperty(t,o)}panHeroImage(e,t){const i=Ge(de.xl),r=this.shadowRoot?.querySelector(".hero-img");if(i&&r&&e.height&&r.clientHeight<e.height){const o=(e.height-r.clientHeight)*.5,n=470,c=Math.min(n,t)/n,p=Math.round(o*c*-1);r.style.setProperty("--background-position-y",p+"px")}}renderStickyHeader(e){const t=this.stickyHeaderVisible?"show":"",i=Q.getResizableImageUrl(e.pdpImageUrl||"","height",200),r=e.iconUrlBackground||"transparent",o=this.stickyHeaderVisible?"0":"-1";return s`
            <div class="sticky-header ${t}" telemetry-area-id="StickyHeader">
                <img class="logo" src="${i}" loading="lazy"
                     alt="${a.get("ProductDetails.DefaultImage.label")}"
                     @click="${()=>window.scroll(0,0)}"
                     style="background-color: ${r}"/>
                <div class="title-and-publisher" @click="${()=>window.scroll(0,0)}">
                    <h3>${e.title}</h3>
                    <span>${e.publisherName}</span>
                </div>
                <buy-box tabindex="${o}"
                         .product="${e}"
                         size="medium"
                         direction="column"
                         show-extra-info="hide"
                         telemetry-area-id="CtaButton"
                         telemetry-data='{
                            "buttonType": "${Z()?"get":Y()?"share":"unknown"}",
                            "isPaid": ${!!(e.price||e?.skus?.find(n=>!!n.price))},
                            "itemId": "${e.productId}",
                            "itemType": "${e.productFamilyName}" }'
                         style="display: ${this.stickyHeaderVisible?"block":"none"};"></buy-box>
            </div>
        `}updateStickyHeaderWidth(e){const t=this.shadowRoot?.querySelector(".left-side");if(e&&t){const r=Math.max(0,t.getBoundingClientRect().width-16);e.style.setProperty("--sticky-header-width",r+"px")}}updateStickyHeaderVisibility(e){if(e){this.stickyHeaderVisible=!1;return}const t=this.shadowRoot?.querySelector("buy-box");if(t){const i=t.getBoundingClientRect();this.stickyHeaderVisible=i.y<40}}routeChanged(){this.resetState()}resetState(){this.closeTrailerDialog(),this.clearViewTransitions(),this.reviewsHidden=!1,this.reviewsModalOpen=!1,this.stickyHeaderVisible=!1,this.relatedAppsState="loading"}};g.styles=[O,Ye,Bt];b([h({attribute:"product-name"})],g.prototype,"productName",2);b([h({attribute:"product-id"})],g.prototype,"productId",2);b([d()],g.prototype,"product",2);b([d()],g.prototype,"promotedProduct",2);b([d()],g.prototype,"contributors",2);b([d()],g.prototype,"episodes",2);b([d()],g.prototype,"descriptionExpanded",2);b([d()],g.prototype,"reviewsModalOpen",2);b([d()],g.prototype,"reviewsHidden",2);b([d()],g.prototype,"stickyHeaderVisible",2);b([d()],g.prototype,"relatedProducts",2);b([d()],g.prototype,"modal",2);b([d()],g.prototype,"trailerModalOpen",2);b([d()],g.prototype,"relatedAppsState",2);b([d()],g.prototype,"dir",2);b([d()],g.prototype,"screenHeight",2);b([d()],g.prototype,"noProductRecommendation",2);b([d()],g.prototype,"oneColumnLayout",2);g=b([G("product-details-page")],g);export{g as ProductDetailsPage};
