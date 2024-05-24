import{h as Pe,j as Ae,k as re,p as se,o as Ee,T as ze,q as oe,u as ae,v as He,w as Be,y as Oe,z as ne,D as Me,i as A,E as Ie,F as Ce,H as Re,x as s,G as Le,I as Ue,J as E,K as te,n as u,L as Ne,N as Ve,O as le,m as $,B as k,a as q,r as d,s as G,e as de,l as n,g as S,_ as L,c as Q,t as j,Q as qe,R as ce,U as B,V as Ge,W as I,X as he,Y as O,b as M,Z as pe,C as ue,$ as ge,a0 as je,a1 as We}from"./index-f0821274.js";import{c as C}from"./repeat-aaef31c8.js";import{D as me}from"./product-collection-2e973b65.js";import"./chunk.OHYIWJSO-799bed38.js";import{S as Ke}from"./chunk.HDLULROG-e7e1d3ca.js";import{g as fe}from"./chunk.YCHBWCKL-ccebaa75.js";import{l as ve,u as be}from"./chunk.RK73WSZS-e061cb19.js";import{s as W,g as U}from"./chunk.H437TPPF-d2f2afca.js";import{a as N,s as Y,w as ye}from"./chunk.KRRLOROJ-a9c3431f.js";import"./chunk.SKOOBYPV-db0b4048.js";import{o as Ye}from"./style-map-663a1d19.js";import{I as ee,C as we,g as Xe}from"./image-helper-5b969ca1.js";import{P as Ze}from"./nav-bar-ca104fe4.js";import{b as Z,c as J}from"./platform-2180e403.js";import{P as De}from"./paged-list-89caa6b1.js";import{f as Je}from"./css-function-74a8ae57.js";import{s as Qe}from"./spacing.styles-57b961dc.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./auto-complete-app-search-76feaa83.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=e=>Be(e)?e._$litType$.h:e.strings,et=Pe(class extends Ae{constructor(e){super(e),this.tt=new WeakMap}render(e){return[e]}update(e,[t]){const i=re(this.et)?xe(this.et):null,r=re(t)?xe(t):null;if(i!==null&&(r===null||i!==r)){const o=se(e).pop();let a=this.tt.get(i);if(a===void 0){const l=document.createDocumentFragment();a=Ee(ze,l),a.setConnected(!1),this.tt.set(i,a)}oe(a,[o]),ae(a,void 0,o)}if(r!==null){if(i===null||i!==r){const o=this.tt.get(r);if(o!==void 0){const a=se(o).pop();He(e),ae(e,void 0,a),oe(e,[a])}}this.et=t}else this.et=void 0;return this.render(t)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class tt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class it{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=e=>!Me(e)&&typeof e.then=="function",ke=1073741823;class rt extends Oe{constructor(){super(...arguments),this._$C_t=ke,this._$Cwt=[],this._$Cq=new tt(this),this._$CK=new it}render(...t){return t.find(i=>!$e(i))??ne}update(t,i){const r=this._$Cwt;let o=r.length;this._$Cwt=i;const a=this._$Cq,l=this._$CK;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$C_t);c++){const h=i[c];if(!$e(h))return this._$C_t=c,h;c<o&&h===r[c]||(this._$C_t=ke,o=0,Promise.resolve(h).then(async x=>{for(;l.get();)await l.get();const w=a.deref();if(w!==void 0){const H=w._$Cwt.indexOf(h);H>-1&&H<w._$C_t&&(w._$C_t=H,w.setValue(x))}}))}return ne}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const _e=Pe(rt);var st=A`
  ${Ie}

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
`,Fe=class extends Ce{constructor(){super(...arguments),this.hasSlotController=new Re(this,"footer","header","image")}render(){return s`
      <div
        part="base"
        class=${Le({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Fe.styles=st;Fe.define("sl-card");function*Te(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Ue(Te(e.shadowRoot.activeElement))))}function ot(){return[...Te()].pop()}var V=[],at=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var i,r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const o=fe(this.element),a=ot();let l=o.findIndex(h=>h===a);if(l===-1){this.currentFocus=o[0],(i=this.currentFocus)==null||i.focus({preventScroll:!0});return}const c=this.tabDirection==="forward"?1:-1;l+c>=o.length?l=0:l+c<0?l=o.length-1:l+=c,this.currentFocus=o[l],(r=this.currentFocus)==null||r.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){V.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){V=V.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return V[V.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=fe(this.element);if(!this.element.matches(":focus-within")){const t=e[0],i=e[e.length-1],r=this.tabDirection==="forward"?t:i;typeof r?.focus=="function"&&(this.currentFocus=r,r.focus({preventScroll:!0}))}}}},nt=A`
  ${Ie}

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
`,R=class extends Ce{constructor(){super(...arguments),this.hasSlotController=new Re(this,"footer"),this.localize=new Ve(this),this.modal=new at(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ve(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),be(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const i=U(this,"dialog.denyClose",{dir:this.localize.dir()});N(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ve(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Y(this.dialog),Y(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=U(this,"dialog.show",{dir:this.localize.dir()}),i=U(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([N(this.panel,t.keyframes,t.options),N(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Y(this.dialog),Y(this.overlay)]);const e=U(this,"dialog.hide",{dir:this.localize.dir()}),t=U(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([N(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),N(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,be(this);const i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ye(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ye(this,"sl-after-hide")}render(){return s`
      <div
        part="base"
        class=${Le({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${le(this.noHeader?this.label:void 0)}
          aria-labelledby=${le(this.noHeader?void 0:"title")}
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
    `}};R.styles=nt;R.dependencies={"sl-icon-button":Ke};E([te(".dialog")],R.prototype,"dialog",2);E([te(".dialog__panel")],R.prototype,"panel",2);E([te(".dialog__overlay")],R.prototype,"overlay",2);E([u({type:Boolean,reflect:!0})],R.prototype,"open",2);E([u({reflect:!0})],R.prototype,"label",2);E([u({attribute:"no-header",type:Boolean,reflect:!0})],R.prototype,"noHeader",2);E([Ne("open",{waitUntilFirstUpdate:!0})],R.prototype,"handleOpenChange",1);W("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});W("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});W("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});W("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});R.define("sl-dialog");const lt=A`

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

    ${$(k.md)} {
        .trailer-header{
            display: none;
        }
    }

    ${$(k.sm)} {
        .screenshot-animations .trailer-play {
            height: 30px;
        }

        .screenshot-carousel {
            grid-auto-columns: 100%;
        }
    }

    /* On extra small (xs) screens, don't show the scroll buttons. Use can just use swipe gesture instead. */
    ${$(k.xs)} {
        scroll-button {
            display: none;
        }

        .screenshot-carousel .screenshot {
            max-height: 250px;
            height: auto;
        }
    }
`,dt=A`
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

    ${$(k.md)} {
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

    ${$(k.lg)} {
        .dialog::part(header) {
            right: 0%;
            top: 15%;
        }
    }

    ${$(k.sm+70)} {
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

    ${$(k.xs)} {
        .dialog::part(body) {
            padding-left: 0;
            padding-right: 0;
        }

        .scroll-button {
            display: none;
        }
    }

`;var ct=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,f=(e,t,i,r)=>{for(var o=r>1?void 0:r?ht(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&ct(t,i,o),o};let g=class extends G{constructor(){super(),this.screenshots=null,this.trailers=null,this.modal=!1,this.showTrailer=!1,this.slideNum=0,this.productId="",this.length=0,this.dialogRef=de(),this.videoIsPaused=!0,this.loadingScreenshots=!0,this.loadingSlides=!0,this.loadingVideo=!1,this.autoplayVideo=!1,this.currentSlideIndex=0,this.screenHeight=0,this.canScrollLeft=!0,this.canScrollRight=!0,this.iconInvoke=null,this.isRtl=!!n.isRtl(),this.dialogHandler=()=>this.closeDialog(),this.slideChangeHandler=e=>this.handleSlideChange(e),this.carouselRef=de(),this.keydownHandler=this.handleArrowKeyPress.bind(this),this.windowHandler=this.handleResize.bind(this),this.screenHeight=window.innerHeight}connectedCallback(){super.connectedCallback(),this.addEventListener("sl-request-close",this.dialogHandler),this.addEventListener("keydown",this.keydownHandler),this.addEventListener("sl-slide-change",this.slideChangeHandler),window.addEventListener("resize",this.windowHandler),this.requestUpdate(),S.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sl-request-close",this.dialogHandler),this.removeEventListener("keydown",this.keydownHandler),this.removeEventListener("sl-slide-change",this.slideChangeHandler),window.removeEventListener("resize",this.windowHandler),S.removeImpressionTracking(this)}update(e){super.update(e),e.has("trailerModal")&&(this.showTrailer=!0),e.has("screenHeight")&&document.documentElement.style.setProperty("--screen-height",`${this.screenHeight}px`),e.has("currentSlideIndex")&&this.updateNavButtons()}updated(e){super.updated(e);const t=this.shadowRoot?.querySelector("sl-carousel");t&&(t.tabIndex=0,t.focus(),t.shadowRoot?.querySelector("#scroll-container")?.setAttribute("tabindex","-1"),t.shadowRoot?.querySelectorAll("button")?.forEach(o=>{o.setAttribute("tabindex","-1")}))}handleArrowKeyPress(e){const t=this.shadowRoot?.querySelector("sl-carousel"),i=this.currentSlideIndex!==(this.screenshots?.length||0)+(this.trailers?.length||0)-1,r=this.currentSlideIndex!==0;t&&(e.key==="ArrowRight"&&(this.isRtl?r:i)?(t.tabIndex=0,this.isRtl?t.previous():t.next()):e.key==="ArrowLeft"&&(this.isRtl?i:r)?(t.tabIndex=0,this.isRtl?t.next():t.previous()):e.key==="Tab"&&(t.tabIndex=-1))}async firstUpdated(){this.trailers&&this.trailers.length>0&&(await L(()=>import("./dash.all.min-f4f61554.js").then(e=>e.d),["assets/js/dash.all.min-f4f61554.js","assets/js/_commonjsHelpers-39b5b250.js"]).then(e=>{this.videoPlayer=e.MediaPlayer().create()}).catch(e=>console.error(`Error loading dashjs: ${e}`)),await L(()=>import("./dash.mss.min-9e6d10cc.js").then(e=>e.d),["assets/js/dash.mss.min-9e6d10cc.js","assets/js/_commonjsHelpers-39b5b250.js"])),this.goToFirstSlide(),this.currentSlideIndex=this.slideNum,this.slideNum===0&&this.trailers&&this.trailers[this.currentSlideIndex]&&this.playTrailer(this.trailers[this.currentSlideIndex],this.currentSlideIndex)}handleResize(){this.screenHeight=window.innerHeight,this.requestUpdate()}updateNavButtons(){this.currentSlideIndex===0?(this.canScrollLeft=!1,this.length===1&&(this.canScrollRight=!1)):this.currentSlideIndex===this.length-1?(this.canScrollRight=!1,this.canScrollLeft=!0):(this.canScrollLeft=!0,this.canScrollRight=!0)}closeDialog(){this.modal=!1,this.showTrailer=!1,this.slideNum=0}handleSlideChange(e){const t=e.detail.index;this.loadingSlides=!0,this.pauseTrailer(),t>this.currentSlideIndex?this.currentSlideIndex++:t<this.currentSlideIndex&&this.currentSlideIndex--,this.trailers&&this.trailers[this.currentSlideIndex]&&this.playTrailer(this.trailers[this.currentSlideIndex],this.currentSlideIndex),e?.stopPropagation()}checkIconInvoke(){const e=this.screenshots?.length||0,t=this.trailers?.length||0;this.length!==e+t&&(this.iconInvoke=!0,this.requestUpdate())}setLength(){this.screenshots&&this.trailers&&this.showTrailer===!1?this.calculateLength(this.screenshots?.length,this.trailers?.length):this.screenshots&&this.showTrailer===!1?this.calculateLength(this.screenshots?.length,0):this.trailers&&this.calculateLength(0,this.trailers?.length),this.checkIconInvoke()}renderDialog(){if(this.setLength(),this.modal&&this.screenshots){const e=navigator.userAgentData?.mobile,t=this.canScrollLeft?"":"hide",i=this.canScrollRight?"":"hide",r=this.isRtl?"chevron-right":"chevron-left",o=this.isRtl?"chevron-left":"chevron-right";return s`
                <sl-dialog
                    class="dialog"
                    id="dialog"
                    ?open=${this.modal}
                    >
                    <div class="dialog-container"
                        ${Q(this.dialogRef)}>
                            <sl-carousel
                                ${Q(this.carouselRef)}
                                class="carousel"
                                id="my-carousel"
                                aria-label="${n.getFormatted("ProductDetails.SelectedDialogSlide",this.currentSlideIndex+1,this.length)}"
                                mouse-dragging
                                ?navigation=${!e}
                                @sl-slide-change=${a=>this.handleSlideChange(a)}>
                                <sl-icon-button
                                    class="scroll-button ${t}"
                                    name="${r}"
                                    slot="previous-icon"
                                    title=${n.get("Common.ScrollLeft.ButtonTitle")}
                                    telemetry-event-id="ScreenshotScrollLeftClicked"
                                ></sl-icon-button>
                                <sl-icon-button
                                    class="scroll-button ${i}"
                                    name="${o}"
                                    slot="next-icon"
                                    title=${n.get("Common.ScrollRight.ButtonTitle")}
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
                    ${this.screenshots[e]?.caption?this.screenshots[e].caption:n.getFormatted("ProductDetails.Screenshot",new Intl.NumberFormat(n.getLocaleName()).format(this.currentSlideIndex+1))}</p>
                <div class="desc-wrapper">
                    <div class="page-desc">
                        <p>
                            ${n.getFormatted("ProductDetails.ScreenshotCount",new Intl.NumberFormat(n.getLocaleName()).format(this.currentSlideIndex+1),new Intl.NumberFormat(n.getLocaleName()).format(this.length??0))} </p>
                    </div>
                </div>
            </div>
        `:s``}renderTrailerDescription(){return this.trailers?s`
            <div class="subtitle">
                <p class="caption">${this.trailers[this.currentSlideIndex]?.image?.caption?this.trailers[this.currentSlideIndex].image?.caption:n.getFormatted("ProductDetails.Trailer",new Intl.NumberFormat(n.getLocaleName()).format(this.currentSlideIndex+1))}</p>
                <div class="desc-wrapper">
                    <div class="page-desc">
                        <p> ${n.getFormatted("ProductDetails.ScreenshotCount",new Intl.NumberFormat(n.getLocaleName()).format(this.currentSlideIndex%this.length+1),new Intl.NumberFormat(n.getLocaleName()).format(this.length??0))} </p>
                    </div>
                </div>
            </div>
        `:s``}renderSlides(e,t){const i=e.width,r=e.height;let o="horizontal-slide",a={};return i<r&&(o="vertical-slide"),a={aspectRatio:i===0&&r===0?"auto":`${i}/${r}`},s`
            <sl-carousel-item class="screenshot-container ${this.showTrailer?"no-display":""}" id="slide-${t}" aria-hidden="true">
                <img
                        src=${e.url??""}
                        alt="${n.get("ProductDetails.Screenshot")}-${t}"
                        class="screenshot ${o}"
                        style="${Ye(a)}"
                        tabindex=${-1} id="slide-${t}"
                        @load=${()=>this.loadingSlides=!1}
                        aria-hidden="true"
                        loading="lazy"/>
            </sl-carousel-item>
        `}renderVideoPlayback(e,t){let i=e.width,r=e.height;(i===0||r===0)&&(i=1920,r=1080);const o="horizontal-slide",a={productId:this.productId,index:t,itemType:"video",area:"PreviewDialog"};return r&&i?s`
            <sl-carousel-item class="video-container">
                    <sl-animation name="pulse" easing="ease-out" duration="250" ?play=${!0} iterations="1">
                    <video
                    @playing=${()=>this.loadingSlides=!1}
                    @play="${()=>S.track({name:"VideoPlayStarted",properties:a})}"
                    @pause="${()=>S.track({name:"VideoPlayPaused",properties:a})}"
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
        `}};g.styles=[q,dt];f([u({attribute:"screenshots"})],g.prototype,"screenshots",2);f([u({attribute:"trailers"})],g.prototype,"trailers",2);f([u({attribute:"modal"})],g.prototype,"modal",2);f([u({attribute:"showTrailer"})],g.prototype,"showTrailer",2);f([u({attribute:"slideNum"})],g.prototype,"slideNum",2);f([u({attribute:"productId"})],g.prototype,"productId",2);f([d()],g.prototype,"length",2);f([d()],g.prototype,"videoPlayer",2);f([d()],g.prototype,"dialogRef",2);f([d()],g.prototype,"videoIsPaused",2);f([d()],g.prototype,"loadingScreenshots",2);f([d()],g.prototype,"loadingSlides",2);f([d()],g.prototype,"loadingVideo",2);f([d()],g.prototype,"autoplayVideo",2);f([d()],g.prototype,"currentSlideIndex",2);f([d()],g.prototype,"screenHeight",2);f([d()],g.prototype,"canScrollLeft",2);f([d()],g.prototype,"canScrollRight",2);f([d()],g.prototype,"iconInvoke",2);f([d()],g.prototype,"isRtl",2);g=f([j("product-dialog")],g);var pt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,y=(e,t,i,r)=>{for(var o=r>1?void 0:r?ut(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&pt(t,i,o),o};let v=class extends G{constructor(){super(),this.screenshots=null,this.trailers=null,this.modal=!1,this.showTrailer=!1,this.transitionToSlide=0,this.productId="",this.dir="ltr",this.loadingScreenshots=!0,this.loadingSlides=!0,this.currentSlide=0,this.isMobile=!1,this.canScrollLeft=!!n.isRtl(),this.canScrollRight=!n.isRtl(),this.initialAnimationLoad=!0,this.dialogHandler=()=>this.closeDialog(),this.changeHandler=e=>this.currentSlide=e.detail.index}connectedCallback(){super.connectedCallback(),this.addEventListener("sl-request-close",this.dialogHandler),this.addEventListener("sl-slide-change",this.changeHandler),this.initialAnimationLoad=!0,this.modal=!1,this.requestUpdate(),S.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sl-slide-change",this.changeHandler),this.removeEventListener("sl-request-close",this.dialogHandler),S.removeImpressionTracking(this)}firstUpdated(){this.imgsAllLoaded()}imgsAllLoaded(){const e=this.shadowRoot?.querySelectorAll("img"),t=r=>new Promise(o=>{r.onload=()=>o()}),i=Array.from(e||[])?.map(r=>t(r));Promise.all(i).then(()=>{this._screenshotCarousel?.classList.add("loaded")})}closeDialog(){this.modal=!1,this.showTrailer=!1,this.currentSlide=0}handleScroll(){window.requestAnimationFrame(()=>{this.handleScrollability()})}renderCarousel(){const e=this.trailers?.length?this.trailers.length:0;return this.screenshots&&this.trailers?s`
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
            `:s``}renderImage(e,t){if(!e.url)return s``;this.initialAnimationCheck();const i=t===0?0:-1,r=this.trailers?.length??0,o=this.screenshots?.length??0,a=ee.getResizableImageUrl(e?.url||"","height",250);return s`
            <div role="button" class="carousel-item" @click=${()=>this.showModal(t)} dir="${this.dir}">
                <sl-animation name="fadeIn" easing="ease-out" duration="1000" fill="both" iterations="1" class="screenshot-animations" onload=${this.loadingScreenshots=!1}>
                    <img
                        src=${a}
                        alt="${n.getFormatted("ProductDetails.SelectedSlide",t+1,r+o)}"
                        id="image-${t}"
                        class="screenshot"
                        tabindex=${i}
                    />
                </sl-animation>
            </div>
        `}renderVideoScreenshot(e,t){this.initialAnimationCheck();const i=t===0?0:-1,r=this.trailers?.length??0,o=this.screenshots?.length??0,a=ee.getResizableImageUrl(e.image?.url||"","height",250);return e.image?s`
                <div class="carousel-item">
                    <div class="screenshot-animations" dir="${this.dir}">
                        <sl-animation name="fadeIn" easing="ease-out" duration="1000" fill="both" iterations="1"  onload=${this.loadingScreenshots=!1}>
                            <img
                                src=${a}
                                alt="${n.getFormatted("ProductDetails.SelectedSlide",t+1,r+o)}"
                                class="screenshot"
                                id="video-${t}"
                                @click=${()=>this.showModal(t)}
                                tabindex=${i}
                            />
                            <sl-icon
                                name="play-circle-fill"
                                label=${n.getFormatted("ProductDetails.Play")}
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
                    @click=${()=>n.isRtl()?this.slideRight():this.slideLeft()}
                    telemetry-event-id="ScreenshotScrollLeftClicked"
                ></scroll-button>
                <scroll-button
                    class="scroll-button-right ${t}"
                    direction="right"
                    name="chevron-right"
                    @click=${()=>n.isRtl()?this.slideLeft():this.slideRight()}
                    telemetry-event-id="ScreenshotScrollRightClicked"
                ></scroll-button>
            </div>
        `}slideLeft(){if(this._screenshotCarousel){const e=this._screenshotCarousel.clientWidth;n.isRtl()?this._screenshotCarousel.scrollLeft+=e:this._screenshotCarousel.scrollLeft-=e}this.handleScrollability(),this.requestUpdate()}slideRight(){if(this._screenshotCarousel){const e=this._screenshotCarousel.clientWidth;n.isRtl()?this._screenshotCarousel.scrollLeft-=e:this._screenshotCarousel.scrollLeft+=e}this.handleScrollability(),this.requestUpdate()}handleScrollability(){const e=this._screenshotCarousel;n.isRtl()?(this.canScrollRight=!!e&&e.scrollLeft<0,this.canScrollLeft=!!e&&e.scrollLeft-e.clientWidth>-e.scrollWidth):(this.canScrollLeft=!!e&&e.scrollLeft>0,this.canScrollRight=!!e&&e.scrollLeft+e.clientWidth+1<e.scrollWidth)}inputKeyDown(e){const t=n.isRtl();e.key==="ArrowLeft"?t?this.navigateRight(e):this.navigateLeft(e):e.key==="ArrowRight"?t?this.navigateLeft(e):this.navigateRight(e):e.key==="Enter"&&this.enterCollection(e)}navigateRight(e){if(e.preventDefault(),this._screenshotCarousel?.children){const t=Array.from(this._screenshotCarousel.children);this.currentSlide<t.length-2&&this.currentSlide++;const i=t[this.currentSlide]?.children[0];i&&i.querySelector(".screenshot").focus()}}navigateLeft(e){if(e.preventDefault(),this._screenshotCarousel?.children){const t=Array.from(this._screenshotCarousel.children);this.currentSlide>0&&this.currentSlide--;const i=t[this.currentSlide]?.children[0];i&&i.querySelector(".screenshot").focus()}}enterCollection(e){this._screenshotCarousel?.children&&(e.preventDefault(),this.showModal(this.currentSlide))}render(){return s`
        <div class="global-container">
            ${this.renderCarousel()}
            ${this.renderModal()}
        </div>

        `}};v.styles=[q,lt];y([te(".screenshot-carousel")],v.prototype,"_screenshotCarousel",2);y([u({attribute:"screenshots",type:Array})],v.prototype,"screenshots",2);y([u({attribute:"trailers",type:Array})],v.prototype,"trailers",2);y([u({attribute:"modal",type:Boolean})],v.prototype,"modal",2);y([u({attribute:"showTrailer",type:Boolean})],v.prototype,"showTrailer",2);y([u({attribute:"transitionToSlide",type:Number})],v.prototype,"transitionToSlide",2);y([u({attribute:"productId"})],v.prototype,"productId",2);y([u()],v.prototype,"dir",2);y([d()],v.prototype,"loadingScreenshots",2);y([d()],v.prototype,"loadingSlides",2);y([d()],v.prototype,"currentSlide",2);y([d()],v.prototype,"isMobile",2);y([d()],v.prototype,"canScrollLeft",2);y([d()],v.prototype,"canScrollRight",2);y([d()],v.prototype,"initialAnimationLoad",2);y([qe({passive:!0})],v.prototype,"handleScroll",1);v=y([j("screenshot-viewer")],v);class _{static getInstallUrl(t,i){const r=new URLSearchParams(window.location.search?.toLowerCase()||"");if(r.set("productid",t.productId),t.price===0&&!t.isMovie&&!t.isAndroid&&!r.has("mode")){r.set("mode","mini");const c=Math.floor(window.screenLeft*window.devicePixelRatio),h=Math.floor(window.screenTop*window.devicePixelRatio),x=Math.floor(window.outerWidth*window.devicePixelRatio),w=Math.floor(window.outerHeight*window.devicePixelRatio);r.set("pos",[c,h,x,w].join(","))}return r.has("referrer")||r.set("referrer","storeforweb"),i&&i.endsWith("-true")&&i.split("-")[1]===t.productId&&r.set("ocid","web-spotlight-ad"),document.referrer&&!r.has("source")&&r.set("source",document.referrer),(t.productId.startsWith(we.StorePdpUrl)?t.productId:we.StorePdpUrl)+"?"+r}}const gt=A`
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

    ${$(k.xs)} {
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

    ${$(k.xs)} {
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

    ${$(k.sm)} {
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
`;let X;const mt=new Uint8Array(16);function ft(){if(!X&&(X=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!X))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return X(mt)}const b=[];for(let e=0;e<256;++e)b.push((e+256).toString(16).slice(1));function vt(e,t=0){return b[e[t+0]]+b[e[t+1]]+b[e[t+2]]+b[e[t+3]]+"-"+b[e[t+4]]+b[e[t+5]]+"-"+b[e[t+6]]+b[e[t+7]]+"-"+b[e[t+8]]+b[e[t+9]]+"-"+b[e[t+10]]+b[e[t+11]]+b[e[t+12]]+b[e[t+13]]+b[e[t+14]]+b[e[t+15]]}const bt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Se={randomUUID:bt};function yt(e,t,i){if(Se.randomUUID&&!t&&!e)return Se.randomUUID();e=e||{};const r=e.random||(e.rng||ft)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=r[o];return t}return vt(r)}var wt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,D=(e,t,i,r)=>{for(var o=r>1?void 0:r?xt(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&wt(t,i,o),o};let P=class extends G{constructor(){super(),this.size="large",this.product=null,this.showExtraInfo="show",this.isDarkMode=!1,this.hasGamePass=!1,this.loadingState=!1,this.excludedPSIProducts=ce().excludedPsiProductIds,this.psiControlFlag="psi_c",this.psiTreatmentFlag="psi_t",this.psiServiceFailedOcidPrefix="psi_f_svc",this.inThrottle=!1,this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new Ze(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange(),S.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.prefersThemesObserver?.removeListenThemeChange(),S.removeImpressionTracking(this)}handleThemeChange(e){this.isDarkMode=e,this.requestUpdate()}render(){if(!this.product)return s``;if(!this.product.mediaType)return s``;this.hasGamePass=this.product.plaintextPassName==="Xbox Game Pass";const e=this.hasGamePass?"buy-box-column":"";return s`
            <div class="buy-box ${e}">
                ${this.renderBuyOrShareButton(this.product)}
                ${this.renderPurchaseInfo(this.product)}
            </div>
        `}renderBuyOrShareButton(e){return Z()?this.renderBuyButton(e):J()?this.renderShareButton(e):s``}renderBuyButton(e){return e.isMoviesOrTVs?this.renderMovieOrTVActions(e):this.renderAppOrGameBuyButton(e)}renderMovieOrTVActions(e){const[t,i]=this.getPriceFromSkus(e.skus);return s`
            <div class="buy-and-stream-container">
                ${this.renderMovieOrTVBuyButton(e,t,i)}
            </div>
        `}renderMovieOrTVBuyButton(e,t,i){const r=me.getDiscount(e),o=r.price&&r.strikethroughPrice&&r.price!==r.strikethroughPrice;let a;return o?a=r.price:e.price===0||t==="-1"||t.toLowerCase()==="free"?a=n.get("ProductDetails.Get"):a=i==="multiple"?n.getFormatted("ProductDetails.FromPrice",t):t,o?s`
                ${this.renderDiscountButton(e,a,r)}
            `:s`
                ${this.renderRegularBuyButton(e,a)}
            `}renderAppOrGameBuyButton(e){const t=me.getDiscount(e),i=t.price&&t.strikethroughPrice&&t.price!==t.strikethroughPrice;if(this.hasGamePass)return s`
                ${this.renderGamePassButton(e,i||!1,t)}
            `;let r;if(i?r=t.price:e.price===0?r=n.get("ProductDetails.Install"):r=e.displayPrice,i)return s`
                ${this.renderDiscountButton(e,r,t)}
            `;if(!this.excludedPSIProducts.includes(e.productId)&&this.checkPSICriteria(e)){r=n.get("ProductDetails.Download");const o=this.getAssignmentTaskTemplate(e,r);return s`${_e(o,s``)}`}return s`
            ${this.renderRegularBuyButton(e,r)}
        `}checkPSICriteria(e){const t=e.productRatings&&e.productRatings.length>0?e.productRatings[0].ratingAge<6:!1,i=e.catalogSource==="BigCat",r=e.price===0&&!e.isMoviesOrTVs;return t&&i&&r}async getAssignmentTaskTemplate(e,t){const i=B.getCookie("psi_cookie"),r=B.getCookie("psi_enroll_cookie");return i?s`
                ${this.renderPSIBuyButton(e,t)}
            `:!r&&await this.runAssignmentRandomization()?s`
                ${this.renderPSIBuyButton(e,t)}
            `:(t=n.get("ProductDetails.Install"),s`
            ${this.renderRegularBuyButton(e,t)}
        `)}async runAssignmentRandomization(){this.expFlags||(this.expFlags=await Ge.getFlags());const e=this.expFlags.assignmentPsi;return!e||e===0?(this.generateNewEnrollmentCookie(),!1):e===1?!0:Math.random()<e?(this.generateNewEnrollmentCookie(),!0):(this.generateNewEnrollmentCookie(),!1)}renderGamePassButton(e,t,i){const[r,o]=this.getGamePassPrices(e),a=r===n.get("ProductDetails.Free")?n.get("ProductDetails.Included"):r,l=a===n.get("ProductDetails.Included")?"gp-included":"gp-price";return s`
            <div class="gamepass-btn-container">
                <sl-button class="buy-btn gamepass-btn ${l}" variant="primary" size="${this.size}"
                        telemetry-event-id=${I.CtaClicked}
                        telemetry-data='{ "itemId": "${e.productId}", "itemName": "${e.title}" }'
                        href="${_.getInstallUrl(e)}">
                    ${n.getFormatted("ProductDetails.WithGamePass",a)}
                    ${this.renderGetLogo("light")}
                </sl-button>
                ${this.renderRegularPricing(o,t,i)}
            </div>
        `}renderRegularBuyButton(e,t){const i=sessionStorage.getItem("asource");return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                       telemetry-event-id=${I.CtaClicked}
                       telemetry-data='{ "itemId": "${e.productId}", "itemName": "${e.title}" }'
                       rel="nofollow"
                       href="${_.getInstallUrl(e,i)}">
                ${this.renderRegularBuyLabel(e,t)}
                ${this.renderGetLogo()}
            </sl-button>
        `}renderPSIBuyButton(e,t){if(this.isSMode())return this.renderRegularBuyButton(e,t);let i="";const o=new URLSearchParams(window.location.search).get("ocid");return o===this.psiTreatmentFlag||o===this.psiControlFlag?i=o:(i=B.getCookie("psi_cookie")||"",i||(i=this.generateNewPSICookie())),i===this.psiControlFlag?this.renderPSIBtnControl(e,t):this.renderPSIBtnTreatment(e,t)}renderPSIBtnTreatment(e,t){return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                    telemetry-event-id=${I.CtaClicked}
                    telemetry-data='{"psiGroup": "${this.psiTreatmentFlag}${this.getOCIDPostfixByBrowser()}"}'
                    @click=${()=>this.throttleAsync(this.performPSIAcquisition,1400)(e)}
                    ?loading="${this.loadingState}">
                ${this.renderRegularBuyLabel(e,t)}
                ${this.renderGetLogo()}
            </sl-button>
        `}renderPSIBtnControl(e,t){return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                       telemetry-event-id=${I.CtaClicked}
                       telemetry-data='{"psiGroup": "${this.psiControlFlag}${this.getOCIDPostfixByBrowser()}"}'
                       rel="nofollow"
                       href="${_.getInstallUrl(e)+"&ocid="+this.psiControlFlag+this.getOCIDPostfixByBrowser()}">
                ${this.renderRegularBuyLabel(e,t)}
                ${this.renderGetLogo()}
            </sl-button>
        `}isSMode(){return window.external&&window.external.getHostEnvironmentValue?JSON.parse(window.external.getHostEnvironmentValue("os-mode"))["os-mode"]==="2":!1}getOCIDPostfixByBrowser(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("edg")>-1&&!/opr|opera/i.test(e)?"_be":e.indexOf("chrome")>-1&&!/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(e)?"_bc":e.indexOf("firefox")>-1&&!/seamonkey/i.test(e)?"_bf":"_bo"}throttleAsync(e,t){return async(...i)=>{if(!this.inThrottle){this.inThrottle=!0;try{await e.apply(this,i)}finally{setTimeout(()=>this.inThrottle=!1,t)}}}}async performPSIAcquisition(e,t={}){this.loadingState=!0;const r=`${ce().psiDownloadUrl}${e.productId}`,o=yt(),l={...{method:"GET",headers:{Origin:"https://apps.microsoft.com",Referer:document.URL,"Access-Control-Request-Method":"GET","X-Correlation-Id":o,"Content-Type":"application/octet-stream"},responseType:"blob",params:{ocid:`${this.psiTreatmentFlag}${this.getOCIDPostfixByBrowser()}`,referrer:"storeforweb"}},...t},c=new URLSearchParams(l.params);try{const h=await fetch(`${r}?${c}`,{method:l.method,cache:"no-cache",headers:l.headers});if(h.ok){const x=h.headers.get("Content-Disposition");let w=encodeURIComponent(e.title)+" Installer.exe";if(x){const F=x?.match(/filename\*=UTF-8''([\w%]*)/i);F&&F[1]&&(w=F[1])}const H=await h.blob(),ie=URL.createObjectURL(H),z=document.createElement("a");z.href=ie,z.download=decodeURIComponent(w),z.style.display="none",document.body.appendChild(z);try{z.click(),await new Promise(F=>setTimeout(F,1e3))}catch(F){S.warn(`[PSI] unsuccessful download: ${F}`,{CorrelationId:o})}finally{URL.revokeObjectURL(ie),document.body.removeChild(z)}}else{const x=await h.json();S.track({name:"PSIFailed",properties:{CorrelationId:o,Status:h.status,Result:x,productId:e.productId}}),window.location.href=`${_.getInstallUrl(e)}&ocid=${this.psiServiceFailedOcidPrefix}${h.status}`}}catch(h){const x=h;S.track({name:"PSIFailed",properties:{CorrelationId:o,Cause:x?.cause,ErrName:x?.name,ErrMsg:x?.message,productId:e.productId}}),window.location.href=`${_.getInstallUrl(e)}&ocid=${this.psiServiceFailedOcidPrefix}na`}this.loadingState=!1}generateNewPSICookie(){const t=(Math.random()<.5?0:1)?this.psiTreatmentFlag:this.psiControlFlag,i=new Date;return i.setMonth(i.getMonth()+1),B.setCookie("psi_cookie",t,i),t}generateNewEnrollmentCookie(){const e="attempted",t=new Date;t.setHours(t.getHours()+4),B.setCookie("psi_enroll_cookie",e,t)}renderRegularBuyLabel(e,t){const i=e.price===0,r=i?n.getFormatted("ProductDetails.BuyBoxFreeAriaRole",e.title):n.getFormatted("ProductDetails.BuyBoxPaidAriaRole",e.title);return i?s`<span aria-label="${n.getFormatted("ProductDetails.BuyBoxFreeAriaLabel",e.title)}" aria-roledescription="${r}" role="note">${t}</span>`:s`<span aria-label="${n.getFormatted("ProductDetails.BuyBoxPaidAriaLabel",e.title,t)}" aria-roledescription="${r}" role="note">${t}</span>`}renderDiscountButton(e,t,i){return s`
            <div class="discount-btn-container">
                <sl-button class="buy-btn discount-btn" variant="primary" size="${this.size}"
                        telemetry-event-id=${I.CtaClicked}
                        telemetry-data='{ "itemId": "${e.productId}", "itemName": "${e.title}" }'
                        tabindex="-1"
                        rel="nofollow"
                        href="${_.getInstallUrl(e)}">
                    <span class="discount-percent">${i.percentageOffText}</span>
                </sl-button>
                <sl-button class="buy-btn with-discount-btn" variant="primary" size="${this.size}"
                        telemetry-event-id=${I.CtaClicked}
                        telemetry-data='{ "itemId": "${e.productId}", "itemName": "${e.title}" }'
                        rel="nofollow"
                        href="${_.getInstallUrl(e)}">
                    <div class="prices">
                        <span class="strikethrough-price" aria-label="${n.getFormatted("ProductDetails.BuyBoxSpecialAriaLabel",e.title,i.strikethroughPrice)}" aria-roledescription="${n.getFormatted("ProductDetails.BuyBoxPaidAriaRole",e.title)}" role="note">${i.strikethroughPrice}</span>
                        <span class="current-price">${t}</span>
                    </div>
                    ${this.renderGetLogo()}
                </sl-button>
            </div>
        `}renderGetLogo(e){let t="";return e?t=e==="dark"?"/assets/icons/get-dark.svg":"/assets/icons/get-light.svg":t=this.isDarkMode?"/assets/icons/get-dark.svg":"/assets/icons/get-light.svg",s`
            <img class="logo" width="16" height="16" src=${t} alt="" />
        `}renderRegularPricing(e,t,i){return e!=="-1"?s`
            <div class="regular-price-container">
                <span class="or-text">${n.get("ProductDetails.OrRegularPrice")}</span>
                <div class="prices-container">
                    ${this.renderStrikethroughPrice(t,i.strikethroughPrice)}
                    <span class="regular-price">${e}</span>
                </div>
            </div>
            `:s``}renderStrikethroughPrice(e,t){const i=this.hasGamePass?"standalone-dark-theme":"strikethrough-price-text";return e?s`<span class="${i}">${t}</span>`:s``}getGamePassPrices(e){const t=e.skusSummary,i=this.getGPPricing(t[0],"gamepass")??"-1",r=this.getGPPricing(t[0],"default")??"-1";return[i,r]}getGPPricing(e,t){const i=e.salePrices,r=[],o=new Map,a=t==="gamepass";for(const l of Object.values(i))(a?l.badgeId.toLowerCase()==="gamepass":l.badgeId.toLowerCase()!=="gamepass")&&(r.push(l.price),o.set(l.price,l.displayPrice));return o.get(Math.min(...r))}renderShareButton(e){return s`
            <sl-button class="buy-btn" variant="primary" size="${this.size}"
                        telemetry-event-id=${I.CtaClicked}
                        telemetry-data='{ "itemId": "${e.productId}", "itemName": "${e.title}" }'
                        @click="${()=>this.share(e)}">
                ${n.get("ProductDetails.Share")}
            </sl-button>
        `}renderPurchaseInfo(e){if(this.showExtraInfo==="show"){const t=e.hasAddOns||e.hasThirdPartyIAPs;return t?s`
                <div class="buy-info">
                    <span>${t?n.get("ProductDetails.HasThirdPartyIAPs"):null}</span>
                </div>
            `:s``}return s``}share(e){navigator.share({url:`https://apps.microsoft.com/detail/${e.productId}`,title:e.title||"",text:e.shortDescription||e.description||""})}getPriceFromSkus(e){if(e===null)return["-1","single"];const t=[],i=new Map;if(e?.forEach(l=>{const c=l.price;l.displayPrice&&(t.push(c),i.set(c,l.displayPrice))}),t.length===0)return["-1","single"];const r=Math.min(...t)??-1;if(r===-1)return["-1","single"];const a=t.every((l,c,h)=>l===h[0])?"single":"multiple";return[i.get(r)||"",a]}};P.styles=[q,gt];D([u()],P.prototype,"size",2);D([u({type:Object})],P.prototype,"product",2);D([u({attribute:"show-extra-info"})],P.prototype,"showExtraInfo",2);D([u({type:Boolean})],P.prototype,"isDarkMode",2);D([d()],P.prototype,"hasGamePass",2);D([d()],P.prototype,"loadingState",2);D([d()],P.prototype,"expFlags",2);D([d()],P.prototype,"excludedPSIProducts",2);P=D([j("buy-box")],P);const $t=A`

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

`;var kt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,K=(e,t,i,r)=>{for(var o=r>1?void 0:r?St(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&kt(t,i,o),o};let T=class extends G{constructor(){super(),this.direction="row",this.recommendationProducts=null,this.isErrorOrNoData=!1}fetchProductRecommendationData(e){const{productId:t,productFamilyName:i,categoryIds:r}=e||{};try{this.recommendationProducts=De.fromRelatedProducts(t,i,r,30)}catch{this.handleErrorAndNoData()}}connectedCallback(){super.connectedCallback(),this.fetchProductRecommendationData(this.product)}handleErrorAndNoData(){this.isErrorOrNoData=!0,this.dispatchEvent(new CustomEvent("hide-component"))}render(){if(!this.product||this.isErrorOrNoData)return s``;const e=this.direction==="column"?"column":"row";return s`
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
        `}};T.styles=[q,$t];K([u()],T.prototype,"product",2);K([u({reflect:!0})],T.prototype,"direction",2);K([d()],T.prototype,"recommendationProducts",2);K([d()],T.prototype,"isErrorOrNoData",2);T=K([j("product-recommendation")],T);const Pt=A`
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
        ${Je("blur(40px) opacity(0.8)")}
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

    sl-card .feature-text:first-of-type, .whats-new-text:first-of-type {
        margin-top: 0;
    }
    sl-card .feature-text:last-of-type, .whats-new-text:last-of-type {
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

    ${$(k.lg)} {
        .description, sl-button,  ratings-reviews-summary, .feature-text, .whats-new-text {
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

    ${he()} {
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
    ${he()} {
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
    ${$(k.xs)} {
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

        ${$(k.xs-100)} {
            .sticky-header .title-and-publisher {
                display: none;
            }
        }
    }

`;var It=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,m=(e,t,i,r)=>{for(var o=r>1?void 0:r?Ct(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=(r?l(t,i,o):l(o))||o);return r&&o&&It(t,i,o),o};let p=class extends G{constructor(){super(),this.productName=null,this.productId="",this.product=null,this.promotedProduct=null,this.contributors=null,this.episodes=null,this.descriptionExpanded=!1,this.reviewsModalOpen=!1,this.reviewsHidden=!1,this.stickyHeaderVisible=!1,this.relatedProducts=null,this.modal=!1,this.trailerModalOpen=!1,this.relatedAppsState="loading",this.dir="ltr",this.screenHeight=0,this.noProductRecommendation=!1,this.oneColumnLayout=!1,this.showReportDialog=!1,this.review=null,this.reviewUrl="",this.scrollHandler=()=>this.scrolled(),this.resizeHandler=()=>this.resized(),this.reviewsDialogClosedHandler=()=>this.closeDialog(),this.trailerDialogClosedHandler=()=>this.closeTrailerDialog(),this.reportDialogOpenHandler=e=>{const t=e;this.openReportDialog(t)},this.reportDialogClosedHandler=()=>this.closeReportDialog(),this.routeChangedHandler=()=>this.routeChanged(),this.windowHandler=()=>this.handleResize(),this.heroImg=null,this.stickyHeaderScrollHandle=0,this.stickyHeaderResizeHandle=0,this.minDate=new Date("0001-01-01T00:00:00"),this.screenHeight=window.innerHeight,this.updateLayout()}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.scrollHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}),window.addEventListener("sl-request-close",this.trailerDialogClosedHandler),O.addEventListener("route-changed",this.routeChangedHandler),this.addEventListener("sl-request-close",this.reviewsDialogClosedHandler),window.addEventListener("resize",this.windowHandler),document.addEventListener("skipToMain",()=>this.setPublisherFocus()),window.addEventListener("report-dialog-open",this.reportDialogOpenHandler),window.addEventListener("report-dialog-close",this.reportDialogClosedHandler),this.updateDirection()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler),window.removeEventListener("sl-request-close",this.trailerDialogClosedHandler),O.removeEventListener("route-changed",this.routeChangedHandler),this.removeEventListener("sl-request-close",this.reviewsDialogClosedHandler),window.removeEventListener("resize",this.windowHandler),document.removeEventListener("skipToMain",()=>this.setPublisherFocus())}updated(e){if(e.has("productId"))if(this.product=null,this.heroImg=null,this.descriptionExpanded=!1,this.reviewsModalOpen=!1,this.productId){const t=new Date;M.getPdpPage(this.productId).then(i=>{O.lastNavigatedProduct=i,document.title=n.getFormatted("Common.PageTitle",i.title),this.productLoaded(i,t)}).catch(i=>this.showProductLoadError(i))}else this.showProductLoadError("No product ID specified.");e.has("screenHeight")&&document.documentElement.style.setProperty("--screen-height",`${this.screenHeight}px`)}updateLayout(){window.innerWidth<pe.xl?this.oneColumnLayout=!0:this.oneColumnLayout=!1}updateDirection(){this.dir=n.isRtl()?"rtl":"ltr"}closeDialog(){this.reviewsModalOpen=!1}openReportDialog(e){this.review=e.detail.message,this.showReportDialog=!0,this.reviewUrl=e.detail.reviewUrl}closeReportDialog(){this.showReportDialog=!1}handleResize(){this.screenHeight=window.innerHeight,this.requestUpdate()}setPublisherFocus(){this.shadowRoot?.querySelector(".publisher-link")?.focus()}lazyImportReportReview(){return Promise.all([L(()=>import("./report-dialog-bb93141e.js"),["assets/js/report-dialog-bb93141e.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-2e973b65.js","assets/js/repeat-aaef31c8.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js","assets/js/chunk.HDLULROG-e7e1d3ca.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-a9c3431f.js","assets/js/chunk.OHYIWJSO-799bed38.js"])])}async fetchAdditionalMovieTVData(e){if(e.isMovie)try{const t=await M.getMovieContributorList(e.productId);this.contributors=t.cards}catch(t){this.showProductLoadError(t)}else try{const t=await M.getTVEpisodesList(e.productId);this.episodes=t.products}catch(t){this.showProductLoadError(t)}}async fetchAdditionalAppData(e){try{M.getPromoProductDetails(e.productId).then(t=>this.promotedProduct=t).catch(t=>this.showProductLoadError(t))}catch(t){this.showProductLoadError(t)}}productLoaded(e,t){const i=new Date().getTime()-t.getTime(),r=O.lastNavigatedProduct?.productId===this.productId,o=250;if(i<o&&r){this.shadowRoot?.querySelectorAll("sl-skeleton")?.forEach(c=>c.classList.add("transparent")),setTimeout(()=>{this.productLoaded(e,t)},o-i);return}this.product=e,this.fetchAdditionalAppData(e),new URLSearchParams(location.search.toLowerCase()).get("launch")==="true"&&(location.href=_.getInstallUrl(e)),this.updateStickyHeaderVisibility(!0)}getSkuId(e){return e?.find(t=>t.actions?.some(i=>i.toLowerCase()==="browse"))?.skuId||""}render(){if(!this.product)return this.renderLoading();const e=this.product.isMoviesOrTVs?this.renderMovieHeader(this.product):this.renderAppHeader(this.product);return s`
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
                ${this.lazyLoadReportDialog(e)}
                ${this.renderFeatures(e)}
                ${this.renderWhatsNewVersion(e)}
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
        `}renderHero(e){const t=ee.getResizableImageUrl(e?.pdpImageUrl||"","height",200);return s`
            <div class="hero-img" style="background-image: url('${t}')"></div>
        `}renderTrailerWrapper(e,t){return t?s`
                <div class="header-wrapper" @click="${()=>this.renderVideoTrailers(e)}" dir=${this.dir}>
                <button class="wide-trailer-header" @click="${()=>this.renderVideoTrailers(e)}">
                    <sl-icon name="play-circle" class="trailer-play" label=${n.getFormatted("ProductDetails.Play")}></sl-icon>
                    <span class="logo-caption">${n.get("ProductDetails.PlayTrailer")}</span>
                    </button>
                </div>
            `:s``}renderVideoTrailers(e){return this.trailerModalOpen=!0,this.modal=!0,this.getScreenshotViewer(e,this.trailerModalOpen,this.modal)}getAppImageSourceSet(e){const t=e.pdpImageUrl,i=this.getDimensions(e,t||""),r=new URL(t||"");return Xe(r,i[0],i[1],200,200)}getDimensions(e,t){return(e.images||[]).filter(i=>i.url===t).map(i=>[i.width,i.height]).at(0)||[0,0]}renderLogo(e){const t=e.iconUrlBackground||"transparent",{src:i,srcSet:r}=this.getAppImageSourceSet(e),o=navigator.userAgentData?.mobile;return e?.trailers&&e?.trailers.length>0&&!o?s`
                <div class="logo-container" @click="${()=>this.renderVideoTrailers(e)}">
                    <img class="logo view-transition" src="${i}" srcset="${r}" style="background-color: ${t}" role="presentation"/>
                    ${this.renderTrailerWrapper(e,!0)}
                </div>
            `:s`
            <div class="image-logo-container">
                <img class="logo view-transition" src="${i}" srcset="${r}" style="background-color: ${t}" role="presentation"/>
                ${this.renderTrailerWrapper(e,!1)}
            </div>
        `}renderAppHeader(e){const t=a=>this.updateStickyHeaderWidth(a),i=e.averageRating!==0&&e.ratingCount!==0,r=!!(e.ratingCount!==0&&e.categories),o=this.getSkuId(e.skus);return s`
            <div class="app-info-container" ${Q(t)} dir=${this.dir}>
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
                                     "buttonType": "${Z()?"get":J()?"share":"unknown"}",
                                     "isPaid": ${!!(e.price||e?.skus?.find(a=>!!a.price))},
                                     "itemId": "${e.productId}",
                                     "itemType": "${e.productFamilyName}",
                                     "sku": "${o}"
                                 }'>
                        </buy-box>
                    </div>
                </div>
                ${this.renderStickyHeader(e)}
            </div>
        `}renderDivider(e){return e?s`
                <sl-divider vertical></sl-divider>
            `:s``}renderMovieHeader(e){const t=Math.floor((e.durationInSeconds||0)/3600),i=Math.floor((e.durationInSeconds||0)%3600/60),r=(t!==0?t+" h ":"")+(i!==0?i+" min":""),o=e.supportedLanguages.length>1?n.get("ProductDetails.MultipleLanguageAudio"):n.get("ProductDetails.OneLanguageAudio"),a=e.productRatings!==null?e.productRatings[0].shortName:"",c=[e.releaseDateUtc&&new Date(e.releaseDateUtc)>this.minDate?new Date(e.releaseDateUtc).getFullYear().toString():"",e.subtitle||e.publisherName,r,o,a].filter(w=>!!w).join(" · "),h=this.getSkuId(e.skus);return s`
            <div class="app-info-container" ${Q(w=>this.updateStickyHeaderWidth(w))} telemetry-area-id="Header">
                ${this.renderLogo(e)}
                <div class="app-info">
                    <h1 class="title view-transition">${e.title}</h1>
                    <p class="subtitle">${c}</p>
                    ${this.renderMovieCategoryModule(e)}
                    <div class="buy-box-container">
                        <buy-box .product="${e}" size="large"
                                 telemetry-area-id="CtaButton"
                                 telemetry-data='{
                                     "buttonType": "${Z()?"get":J()?"share":"unknown"}",
                                     "isPaid": ${!!(e.price||e?.skus?.find(w=>!!w.price))},
                                     "itemId": "${e.productId}",
                                     "itemName": "${e.title}",
                                     "itemType": "${e.productFamilyName}",
                                     "sku": "${h}"
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
        `}renderMovieCategory(e,t){const i=e.isMovie?`/collections/movies/${ue.TopSellingMovies}?category=${encodeURIComponent(t)}`:`/collections/movies/${ue.TopSellingTvShows}?category=${encodeURIComponent(t)}`;return s`
            <sl-button class="movie-category-module" pill
                telemetry-event-id=${I.CategoryTagClicked}
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
                        <span>${n.getFormatted("ProductDetails.RatingsCount",t)}</span>
                    </p>
                </div>
            `:s``}consolidateCategories(){let e="";const t=this.product?.categories?.length;return this.product?.categories&&t&&t>1&&(e=n.getFormatted("ProductDetails.ConsolidateCategory",t-1)),e?s`
                <sl-button class="category-button" variant="text" @click="${this.redirectToAdditionalInfo}">
                    ${e}
                </sl-button>
            `:s``}renderCategory(e){if(e.categories){const t=e.categoryId==="SystemComponents",i="/collections/"+encodeURIComponent(e.productFamilyName.toLowerCase())+"/category/"+encodeURIComponent(e.categories[0]),r=s`
                <sl-button class="category-button" variant="text" href="${i}">
                    ${e.categories[0]}
                </sl-button>`,o=s`
                <div class="category-button">
                    ${e.categories[0]}
                </div>`;return s`
                <div>
                    <p class="subtitle">
                        ${t?o:r}
                        ${this.consolidateCategories()}
                    </p>
                </div>
            `}return s`
        `}redirectToAdditionalInfo(){const e=this.shadowRoot?.getElementById("system-requirements");e&&e.scrollIntoView()}renderPublisherLink(e){const t=e.subtitle||e.publisherName;if(e.isMovie||!e.publisherName)return s`
                <span>${t}</span>
            `;const i=`/search/publisher?name=${encodeURIComponent(e.publisherName)}`;return s`
            <sl-button class="publisher-link" variant="text"
                       telemetry-event-id=${I.PublisherTagClicked}
                       telemetry-data='{ "data": "${e.publisherName}", "type": "publisher-search-results"  }'
                       href="${i}">${t}</sl-button>
        `}renderProductRatingLogo(e){const t=(e.productRatings||[]).find(o=>!!o.ratingValueLogoUrl);if(!t?.ratingValueLogoUrl)return s``;const i=t.ratingValue||t.longName||t.description||"",r=new Intl.ListFormat(n.getLocaleName(),{style:"short"}).format((t.ratingDescriptors||[]).concat(t.interactiveElements||[]));return s`
            <div class="d-flex gap-1">
                <img class="rating-logo" loading="lazy" alt="${i}" src="${t.ratingValueLogoUrl}" @click="${()=>this.shadowRoot?.querySelector(".rating-dialog")?.show()}" />
                <div>
                    <h4 class="rating-name">
                        ${t.ratingValue||t.longName}
                        <sl-icon-button
                            class="rating-info-icon"
                            name="info-circle"
                            label="${n.get("ProductDetails.AgeRating")}"
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
                        <sl-button slot="footer" variant="primary" href="${t.ratingSystemUrl||""}" target="_blank">${n.get("Common.LearnMore")}</sl-button>
                    </sl-dialog>
                </div>
            </div>
        `}setModals(){this.modal=!this.modal,this.trailerModalOpen=!1}renderScreenshots(e){return e.screenshots.length===0&&e.trailers?.length===0?s``:this.getScreenshotViewer(e,this.trailerModalOpen,this.modal)}getScreenshotViewer(e,t,i){return s`
            <sl-card>
                <div slot="header">
                    <h4>${n.get("ProductDetails.ScreenshotLabel")}</h4>
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
        `}renderDescription(e){const t=this.descriptionExpanded?"expanded":"",i=this.descriptionExpanded?n.get("ProductDetails.ReadLess"):n.get("ProductDetails.ReadMore"),r=this.descriptionExpanded?n.getFormatted("ProductDetails.ReadLessAriaLabel","Description"):n.getFormatted("ProductDetails.ReadMoreAriaLabel","Description"),o=this.descriptionExpanded?n.get("ProductDetails.ReadLessAriaRole"):n.get("ProductDetails.ReadMoreAriaRole"),a=150,c=(this.shadowRoot?.querySelector(".description")?.clientHeight||0)<a;return s`
            <sl-card telemetry-area-id="Description">
                <div slot="header">
                    <h4>${n.get("Common.Description")}</h4>
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
                    <img src=${e.imageUri} class="promo-image" alt="${n.get("ProductDetails.DefaultImage.label")}" />
                    <div class = "promo-content-container">
                        <h4 class="promo-title">${e.title}</h4>
                        <p class="promo-body">${e.body}</p>
                    </div>
                </a>
            </sl-card>
        `}renderReviews(e){if(this.reviewsHidden)return s``;const t=e.catalogSource==="AmazonAppStore"?n.get("ProductDetails.RatingsFromAmazon"):n.get("ProductDetails.RatingsAndReviews");return s`
            <sl-card class="reviews-section" telemetry-area-id="Reviews">
                <div slot="header">
                    <h4>${t}</h4>
                </div>
                ${et(this.renderReviewsSummaryOrModule(e))}
            </sl-card>
        `}renderReviewsSummaryOrModule(e){return e.ratingCount===0?s`
                <p>${n.get("RatingReview.NoReviewText")}</p>
            `:s`
            <lazy-load class="reviews-summary-shimmer" .importer="${()=>this.importRatingsReviewsSummary()}" .renderer="${()=>this.renderReviewsSummary(e,"show")}" when="visible"></lazy-load>
            ${this.renderReviewSeeAll()}
            ${this.renderAboutReviews()}
            ${this.renderRnRModule(e)}
        `}renderRnRModule(e){return s`
            <sl-dialog label="${n.get("ProductDetails.RatingsAndReviews")}" class="rnr-dialog" ?open=${this.reviewsModalOpen}>
                <lazy-load class="reviews-summary-shimmer" .importer="${()=>this.importRatingsReviewsSummary()}" .renderer="${()=>this.renderReviewsSummary(e,"hide")}" when="visible"></lazy-load>
                <lazy-load class="reviews-list-shimmer" .importer="${()=>this.importRatingsReviewsList()}" .renderer="${()=>this.renderReviewsList(e)}" when="visible"></lazy-load>
            </sl-dialog>
        `}renderReviewSeeAll(){if(this.product?.catalogSource==="AmazonAppStore")return s``;const e=n.get("ProductDetails.ReadMore"),t=n.getFormatted("ProductDetails.ReadMoreAriaLabel","Reviews"),i=n.get("ProductDetails.ReadMoreAriaRole");return s`
            <sl-button class="see-all-btn" variant="text" size="medium"
                           telemetry-event-id=${I.SeeAllClicked}
                           @click="${()=>this.reviewsModalOpen=!0}">
                    <span aria-label="${t}" aria-roledescription="${i}" role="button">${e}</span>
            </sl-button>
        `}renderAboutReviews(){const e=M.getCachedMarket().then(t=>t.market==="FR"?s`
                    <br />
                    <sl-button class="about-ratings-and-review" variant="text" target="_blank" href="https://support.microsoft.com/en-us/account-billing/rate-and-review-apps-in-the-microsoft-store-4ed126a4-5d46-413f-a28e-968bd4414a80">
                        ${n.get("RatingReview.About")}
                    </sl-button>`:s``);return s`${_e(e,s``)}`}lazyLoadReportDialog(e){const t=()=>s`
            <report-dialog .review=${this.review} review-url=${this.reviewUrl} .productId=${e.productId} ?dialog-open=${this.showReportDialog}></report-dialog>
        `;return s`
            <lazy-load class="system-requirements-shimmer" .importer="${()=>this.lazyImportReportReview()}" .renderer="${()=>t()}" when="immediate"></lazy-load>
        `}importRatingsReviewsSummary(){return L(()=>import("./ratings-reviews-summary-d9eb07f5.js"),["assets/js/ratings-reviews-summary-d9eb07f5.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-aaef31c8.js","assets/js/product-collection-2e973b65.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js","assets/js/product-review-002b8777.js","assets/js/alert-service-b4ead372.js","assets/js/chunk.HDLULROG-e7e1d3ca.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-a9c3431f.js"])}importRatingsReviewsList(){return L(()=>import("./ratings-reviews-list-3f3ef40e.js"),["assets/js/ratings-reviews-list-3f3ef40e.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-aaef31c8.js","assets/js/alert-service-b4ead372.js","assets/js/chunk.HDLULROG-e7e1d3ca.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-a9c3431f.js","assets/js/product-collection-2e973b65.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js","assets/js/chunk.MHCKU7CX-552ac5c8.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/product-review-002b8777.js","assets/js/platform-2180e403.js","assets/js/filter-menu.styles-da605465.js"])}importSystemRequirements(){return L(()=>import("./system-requirements-acc7614a.js"),["assets/js/system-requirements-acc7614a.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-2e973b65.js","assets/js/repeat-aaef31c8.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js","assets/js/alert-service-b4ead372.js","assets/js/chunk.HDLULROG-e7e1d3ca.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-a9c3431f.js"])}importAdditionalInfo(e){const i=[L(()=>import("./additional-info-670d92cc.js"),["assets/js/additional-info-670d92cc.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-2e973b65.js","assets/js/repeat-aaef31c8.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js","assets/js/chunk.OHYIWJSO-799bed38.js","assets/js/chunk.HDLULROG-e7e1d3ca.js","assets/js/chunk.YCHBWCKL-ccebaa75.js","assets/js/chunk.RK73WSZS-e061cb19.js","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-a9c3431f.js","assets/js/chunk.SKOOBYPV-db0b4048.js","assets/js/platform-2180e403.js","assets/js/paged-list-89caa6b1.js","assets/js/spacing.styles-57b961dc.js"])];return e.isMoviesOrTVs&&i.push(this.fetchAdditionalMovieTVData(e)),Promise.all(i)}renderReviewsSummary(e,t){return s`
            <ratings-reviews-summary product-id="${e.productId}" product-name="${e.title}" catalog-source="${e.catalogSource}" show-favorable-review="${t}" @reviewsempty="${()=>this.reviewsHidden=!0}"></ratings-reviews-summary>
        `}renderReviewsList(e){return s`
            <ratings-reviews-list product-id="${e.productId}" product-name="${e.title}"></ratings-reviews-list>
        `}renderFeatures(e){return!e.features||e.features.length===0?s``:s`
            <sl-card telemetry-area-id="Features">
                <div slot="header">
                    <h4>${n.get("ProductDetails.FeaturesHeader")}</h4>
                </div>
                ${C(e.features,t=>t,t=>s`<p class="feature-text">${t}</p>`)}
            </sl-card>
        `}renderWhatsNewVersion(e){if(!e.notes||e.notes.length===0)return s``;const t=i=>i?.split(`
`)?.map(o=>s`${o}<br>`);return s`
            <sl-card telemetry-area-id="WhatsNewVersion">
                <div slot="header">
                    <h4>${n.get("ProductDetails.WhatsNewVersion")}</h4>
                </div>
                ${C(e.notes,i=>i,i=>s`<p class="whats-new-text">${t(i)}</p>`)}
            </sl-card>
        `}renderSystemRequirements(e){if(e.isMoviesOrTVs||e.productFamilyName===ge.Passes)return s``;const t=()=>s`
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
                title-override="${n.get("ProductDetails.PeopleCheckout")}"
                see-all-url="${`/related/${this.productId}`}"
                telemetry-area-id="RelatedProducts"
                telemetry-data='{ "sourceProductId": "${this.productId}" }'
            >
            </product-collection>
        `}async getRelatedApps(e){return this.relatedProducts=De.fromRelatedProducts(this.productId,e.productFamilyName,e.categoryIds,7),await this.relatedProducts?.fetch(),this.relatedProducts?.totalCount!==0}loadRelatedProducts(e){if(e.productFamilyName===ge.Passes)return this.relatedAppsState="none",Promise.resolve();const t=L(()=>import("./product-collection-2e973b65.js").then(r=>r.p),["assets/js/product-collection-2e973b65.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-aaef31c8.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js"]),i=this.getRelatedApps(e).then(r=>this.relatedAppsState=r?"some":"none");return Promise.all([t,i])}async showProductLoadError(e){if(e instanceof je){const t=new URLSearchParams;t.set("id",this.productId),t.set("name",this.productName||""),O.navigate("/404/product",t)}else(await L(()=>import("./alert-service-b4ead372.js"),["assets/js/alert-service-b4ead372.js","assets/js/chunk.HDLULROG-e7e1d3ca.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/chunk.H437TPPF-d2f2afca.js","assets/js/chunk.KRRLOROJ-a9c3431f.js"])).alertService.showError("Unable to load app","We couldn't load that app. Try searching for the app to try again.",e)}scrolled(){this.heroImg&&(this.adjustHeroGradient(window.scrollY),this.panHeroImage(this.heroImg,window.scrollY)),clearTimeout(this.stickyHeaderScrollHandle),this.stickyHeaderScrollHandle=window.setTimeout(()=>this.updateStickyHeaderVisibility(),1)}resized(){clearTimeout(this.stickyHeaderResizeHandle),this.stickyHeaderResizeHandle=window.setTimeout(()=>this.updateStickyHeaderWidth(this.shadowRoot?.querySelector(".app-info-container")),250),this.updateLayout()}closeTrailerDialog(){this.trailerModalOpen=!1,this.modal=!1}clearViewTransitions(){Array.from(this.shadowRoot?.querySelectorAll(".view-transition")||[]).forEach(t=>t.classList.remove("view-transition"))}adjustHeroGradient(e){if(e<100)this.setHeroImageGradient(20);else{const l=20-(Math.min(400,e)-100)*(20-8)/(400-100);this.setHeroImageGradient(l)}}setHeroImageGradient(e){const t="--hero-gradient",i=this.shadowRoot?.querySelector(".details-container"),r=i?.style.getPropertyValue(t),o=e+"%";r!==o&&i&&i.style.setProperty(t,o)}panHeroImage(e,t){const i=We(pe.xl),r=this.shadowRoot?.querySelector(".hero-img");if(i&&r&&e.height&&r.clientHeight<e.height){const o=(e.height-r.clientHeight)*.5,a=470,c=Math.min(a,t)/a,h=Math.round(o*c*-1);r.style.setProperty("--background-position-y",h+"px")}}renderStickyHeader(e){const t=this.stickyHeaderVisible?"show":"",i=ee.getResizableImageUrl(e.pdpImageUrl||"","height",200),r=e.iconUrlBackground||"transparent",o=this.stickyHeaderVisible?"0":"-1",a=this.getSkuId(e.skus);return s`
            <div class="sticky-header ${t}" telemetry-area-id="StickyHeader">
                <img class="logo" src="${i}" loading="lazy"
                     alt="${n.get("ProductDetails.DefaultImage.label")}"
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
                            "buttonType": "${Z()?"get":J()?"share":"unknown"}",
                            "isPaid": ${!!(e.price||e?.skus?.find(l=>!!l.price))},
                            "itemId": "${e.productId}",
                            "itemType": "${e.productFamilyName}",
                            "sku": "${a}"}'
                         style="display: ${this.stickyHeaderVisible?"block":"none"};"></buy-box>
            </div>
        `}updateStickyHeaderWidth(e){const t=this.shadowRoot?.querySelector(".left-side");if(e&&t){const r=Math.max(0,t.getBoundingClientRect().width-16);e.style.setProperty("--sticky-header-width",r+"px")}}updateStickyHeaderVisibility(e){if(e){this.stickyHeaderVisible=!1;return}const t=this.shadowRoot?.querySelector("buy-box");if(t){const i=t.getBoundingClientRect();this.stickyHeaderVisible=i.y<40}}routeChanged(){this.resetState()}resetState(){this.closeTrailerDialog(),this.clearViewTransitions(),this.reviewsHidden=!1,this.reviewsModalOpen=!1,this.stickyHeaderVisible=!1,this.relatedAppsState="loading"}};p.styles=[q,Qe,Pt];m([u({attribute:"product-name"})],p.prototype,"productName",2);m([u({attribute:"product-id"})],p.prototype,"productId",2);m([d()],p.prototype,"product",2);m([d()],p.prototype,"promotedProduct",2);m([d()],p.prototype,"contributors",2);m([d()],p.prototype,"episodes",2);m([d()],p.prototype,"descriptionExpanded",2);m([d()],p.prototype,"reviewsModalOpen",2);m([d()],p.prototype,"reviewsHidden",2);m([d()],p.prototype,"stickyHeaderVisible",2);m([d()],p.prototype,"relatedProducts",2);m([d()],p.prototype,"modal",2);m([d()],p.prototype,"trailerModalOpen",2);m([d()],p.prototype,"relatedAppsState",2);m([d()],p.prototype,"dir",2);m([d()],p.prototype,"screenHeight",2);m([d()],p.prototype,"noProductRecommendation",2);m([d()],p.prototype,"oneColumnLayout",2);m([d()],p.prototype,"showReportDialog",2);m([d()],p.prototype,"review",2);m([d()],p.prototype,"reviewUrl",2);p=m([j("product-details-page")],p);export{p as ProductDetailsPage};
