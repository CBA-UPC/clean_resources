import{i as f,m as I,B as T,E as S,J as o,K as v,r as c,n,L as b,F as L,a2 as D,x as i,G as F,O as z,N as P,s as A,e as w,b as k,l as a,c as E,a as N,t as R}from"./index-64e4e9e7.js";import"./product-collection-7797e90b.js";import{d as H,l as q,S as O}from"./auto-complete-app-search-1bd0a416.js";import"./chunk.MHCKU7CX-495c5042.js";import"./chunk.MA3AIOTI-1dba8e8d.js";import"./chunk.HDLULROG-961dc698.js";import{s as _,g as x}from"./chunk.H437TPPF-d2f2afca.js";import{p as y,s as C,a as B,w as $}from"./chunk.KRRLOROJ-68edf51b.js";import{alertService as M}from"./alert-service-3ccfd653.js";import"./repeat-632d6c35.js";import"./style-map-69b34fe6.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-5d5da084.js";import"./image-helper-5b969ca1.js";import"./nav-bar-8584c4e6.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./chunk.RK73WSZS-e061cb19.js";const V=f`
    .badge-container {
        position: relative;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .badge-container .header {
        font-size: var(--sl-font-size-2x-large);
        font-weight: var(--sl-font-weight-semibold);
        margin-bottom: var(--sl-spacing-3x-large) 
    }

    .header .title {
        font-size: 28px;
        margin-top: var(--sl-spacing-3x-large);
        margin-bottom: var(--sl-spacing-x-large);
    }

    .header .desc {
        font-size: var(--sl-font-size-small);
        font-weight: var(--sl-font-weight-normal);
        color: var(--sl-color-neutral-600);
    }

    .section-header .desc {
        font-weight: var(--sl-font-weight-normal);
        color: var(--sl-color-neutral-600);
        margin-bottom: var(--sl-spacing-2x-small);
    }
    
    .input {
        display: flex;
        flex-direction: column;
    }

    .input-header {
        font-weight: var(--sl-font-weight-normal);
        margin-bottom: var(--sl-spacing-small);
    }

    .input-header-red {
        font-weight: var(--sl-font-weight-normal);
        margin-bottom: var(--sl-spacing-small);
        color: red;
    }

    .badge-button {
        width: 135px;
        margin-top: var(--sl-spacing-2x-large);
    }

    .input-box {
        width: 250px;
    }

    sl-menu[size="small"] sl-menu-item::part(base) {
        font-size: var(--sl-font-size-x-small);
    }

    sl-button {
        width: 250px;
    }

    sl-button::part(caret) {
        margin-left: 210px;
    }

    .dropdown-button-text {
        position: absolute;
    }

    .section-header {
        flex-direction: row;
        display: flex;
        gap: var(--sl-spacing-2x-small);
    }

    .icon, .icon-red {
        margin-top: 25.5px;
        font-size: var(--sl-font-size-x-small);
    }

    .icon-red {
        color: red;
    }

    .main {
        display: flex;
        flex-direction: row;
        gap: 188px;
    }

    .logo {
        margin-top: 22px;
        width: 20px;
        height: 20px;
        padding-right: 5px;
    }

    /* Re-adjust for medium sized devices */
    @media (max-width: 994px) {
       .main {
            flex-direction: column;
            gap: 0;
       }

       .preview {
            position: relative;
            top: 24px;
       }

       .browser-light, .browser-dark, .code-area, .code-area-dark {
            min-width: 442px;
       }
    }


    @keyframes fadeFromLight {
        from {background-color: #f8f8f8;}
        to {background-color: #393838}
    }
    @keyframes fadeFromDark {
        from {background-color: #393838;}
        to {background-color: #f8f8f8}
    }

    /* Browser Design Preview Styling */
    @keyframes fadeDarkBrowser {
        from {background: #FCFCFC;}
        to {background: #292929}
    }
    @keyframes fadeLightBrowser {
        from {background: #292929;}
        to {background: #FCFCFC}
    }

    @keyframes fadeDarkFrame {
        from {background: #F3F2F1;}
        to {background: #141414}
    }
    @keyframes fadeLightFrame {
        from {background: #141414;}
        to {background: #F3F2F1}
    }

    @keyframes fadeDarkSearch {
        from {background: #F3F2F1;}
        to {background: #141414}
    }
    @keyframes fadeLightSearch {
        from {background: #141414;}
        to {background: #F3F2F1}
    }

    @keyframes fadeDarkContent {
        from {background: #F3F5F7; border-top: 1px solid #C8C6C4;}
        to {background: #1F262D; border-top: 1px solid rgb(64, 64, 64);}
    }
    @keyframes fadeLightContent {
        from {background: #1F262D; border-top: 1px solid rgb(64, 64, 64);}
        to {background: #F3F5F7; border-top: 1px solid #C8C6C4;}
    }

    @keyframes fadeDarkContainer {
        from {background: #FCFCFC;}
        to {background: black}
    }
    @keyframes fadeLightContainer {
        from {background: black;}
        to {background: #FCFCFC}
    }

    @keyframes fadeLightBottomBar {
        from {background: #292929;}
        to {background: #0C0F11}
    }
    @keyframes fadeDarkBottomBar {
        from {background: #0C0F11;}
        to {background: #292929}
    }

    @keyframes fadeLightSample {
        from {background: #141414;}
        to {background:rgba(155, 165, 177, 0.4)}
    }
    @keyframes fadeDarkSample {
        from {background: rgba(155, 165, 177, 0.4)}
        to {background: #141414}
    }

    @keyframes fadeLightCorner {
        from {background: #141414;}
        to {background:#F3F2F1}
    }
    @keyframes fadeDarkCorner {
        from {background: #F3F2F1}
        to {background: #141414}
    }

    .browser-light {
        position: relative;
        box-sizing: border-box;
        width: 44.1vw;
        max-width: 700px;
        height: 404px;
        background: #FCFCFC;
        border: 1px solid #C8C6C4;
        border-radius: 8px;
        bottom: 8px;
    }

    .browser-animation-light {
        animation-name: fadeLightBrowser;
        animation-duration: 1s;
    }

    .browser-dark {
        position: relative;
        box-sizing: border-box;
        width: 44.1vw;
        max-width: 700px;
        height: 404px;
        background: #292929;
        border: 1px solid rgb(64, 64, 64);
        border-radius: 8px;
        bottom: 8px;
    }

    .browser-animation-dark {
        animation-name: fadeDarkBrowser;
        animation-duration: 1s;
    }

    .browser-content-light {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 165px;
        background: #FCFCFC;
        top: 136px;
    }

    .browser-content-animation-light {
        animation-name: fadeLightContainer;
        animation-duration: 1s;
    }

    .browser-content-dark {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 165px;
        background: black;
        top: 136px;
    }

    .browser-content-animation-dark {
        animation-name: fadeDarkContainer;
        animation-duration: 1s;
    }

    .frame-light {
        display: flex;
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 32px;
        border-radius: 8px 8px 0px 0px;
        background: #F3F2F1;
    }

    .frame-animation-light {
        animation-name: fadeLightFrame;
        animation-duration: 1s;
    }

    .frame-dark {
        display: flex;
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 32px;
        border-radius: 8px 8px 0px 0px;
        background: #141414;
    }

    .frame-animation-dark {
        animation-name: fadeDarkFrame;
        animation-duration: 1s;
    }

    .tab-light {
        position: absolute;
        min-width: 16%;
        height: 24px;
        left: 8px;
        top: 8px;
        background: #FCFCFC;
        border-radius: 4px 4px 0px 0px;
    }

    .tab-dark {
        position: absolute;
        min-width: 16%;
        height: 24px;
        left: 8px;
        top: 8px;
        background: #292929;
        border-radius: 4px 4px 0px 0px;
    }

    .searchBar-light {
        display: flex;
        position: absolute;
        min-width: 45%;
        height: 21px;
        left: calc(55%/2);
        top: 40px;
        background: #F3F2F1;
        border-radius: 4px;
    }

    .searchBar-animation-light {
        animation-name: fadeLightSearch;
        animation-duration: 1s;
    }

    .searchBar-dark {
        display: flex;
        position: absolute;
        min-width: 45%;
        height: 21px;
        left: calc(55%/2);
        top: 40px;
        background: #141414;
        border-radius: 4px;
    }

    .searchBar-animation-dark {
        animation-name: fadeDarkSearch;
        animation-duration: 1s;
    }

    .contentSection-light {
        display: flex;
        position: absolute;
        box-sizing: border-box;
        min-width: 100%;
        height: 136px;
        top: 70px;
        background: #F3F5F7;
        border-top: 1px solid #C8C6C4;
    }

    .contentSection-animation-light {
        animation-name: fadeLightContent;
        animation-duration: 1s;
    }

    .contentSection-dark {
        display: flex;
        position: absolute;
        box-sizing: border-box;
        min-width: 100%;
        height: 136px;
        top: 70px;
        background: #1F262D;
        border-top: 1px solid rgb(64, 64, 64);
    }

    .contentSection-animation-dark {
        animation-name: fadeDarkContent;
        animation-duration: 1s;
    }

    .bottomBar-light {
        display: flex;
        position: absolute;
        min-width: 100%;
        height: 32px;
        top: 370px;
        background: #0C0F11;
        border-radius: 0px 0px 8px 8px;
    }

    .bottonBar-animation-light {
        animation-name: fadeLightBottomBar;
        animation-duration: 1s;
    }

    .bottomBar-dark {
        display: flex;
        position: absolute;
        min-width: 100%;
        height: 32px;
        top: 370px;
        background: #292929;
        border-radius: 0px 0px 8px 8px;
    }

    .bottomBar-animation-dark {
        animation-name: fadeDarkBottomBar;
        animation-duration: 1s;
    }

    ms-store-badge::part(img) {
        max-width: 294px;
    }

    .sampleBadge1-light {
        position: relative;
        width: 116px;
        height: 91px;
        margin-left: 330%;
        top: 29px; 
        background: rgba(155, 165, 177, 0.4);
        border-radius: 8px;
    }

    .sampleBadge-animation-light {
        animation-name: fadeLightSample;
        animation-duration: 1s;
    }

    .sampleBadge1-dark {
        position: relative;
        width: 116px;
        height: 91px;
        margin-left: 330%;
        top: 29px; 
        background: #141414;
        border-radius: 8px;
    }

    .sampleBadge-animation-dark {
        animation-name: fadeDarkSample;
        animation-duration: 1s;
    }

    .sampleBadge2-light {
        position: relative;
        width: 116px;
        height: 91px;
        margin-left: 450%;
        bottom: 62px;
        background: rgba(155, 165, 177, 0.4);
        border-radius: 8px;
    }

    .sampleBadge2-dark {
        position: relative;
        width: 116px;
        height: 91px;
        margin-left: 450%;
        bottom: 62px;
        background: #141414;
        border-radius: 8px;
    }

    .cornerLeft-light {
        position: relative;
        width: 5px;
        height: 24px;
        top: 8.2px;
        left: 4.3px;
        background: #F3F2F1;
        border-radius: 0px 4px 0px 0px;
        transform: matrix(1, 0, 0, -1, 0, 0);
    }

    .corner-animation-light {
        animation-name: fadeLightCorner;
        animation-duration: 1s;
    }

    .cornerRight-light {
        position: relative;
        min-width: 5px;
        height: 24px;
        left: 16.3%;
        top: 8px;
        background: #F3F2F1;
        border-radius: 0px 4px 0px 0px;
        transform: rotate(-180deg);
    }

    .cornerLeft-dark {
        position: relative;
        width: 5px;
        height: 24px;
        top: 8.2px;
        left: 4.3px;
        background: #141414;
        border-radius: 0px 4px 0px 0px;
        transform: matrix(1, 0, 0, -1, 0, 0);
    }

    .corner-animation-dark {
        animation-name: fadeDarkCorner;
        animation-duration: 1s;
    }

    .cornerRight-dark {
        position: relative;
        min-width: 5px;
        height: 24px;
        left: 16.3%;
        top: 8px;
        background: #141414;
        border-radius: 0px 4px 0px 0px;
        transform: rotate(-180deg);
    }

    .microsoft-badge {
        position: relative;
        left: 68px;
        bottom: 180px;
        border: none;
        padding: 0;
    }

    .preview {
        display: flex;
        flex-direction: column;
    }
    
    .tab {
        margin: 0 0 7px 75px;
    }

    .code-area {
        position: relative;
        box-sizing: border-box;
        width: 44.1vw;
        max-width: 700px;
        height: 404px;
        background: #F3F2F1;
        border: 1px solid #C8C6C4;
        border-radius: 8px;
        bottom: 8px;
        white-space: pre-wrap;
        padding: 10px;
        overflow: auto;
    }

    @media (prefers-color-scheme: dark) {
        .code-area {
            background: #292929;
            border: 1px solid rgb(64, 64, 64);
        }

        sl-tab[aria-selected="true"]::part(base) {
            color: var(--sl-color-primary-600) !important;
        }
    }

    sl-tab[aria-selected="true"]::part(base) {
        color: var(--sl-color-primary-800);
    }

    sl-tab-panel {
        overflow-x: hidden;
    }

    sl-tab-panel::part(base) {
        height: 450px;
    }

    sl-tab-group::part(body) {
        overflow: hidden;
    }

    sl-tab-group::part(nav) {
        width: fit-content;
        padding: 0;
    }

    sl-tab-group::part(scroll-button) {
        display: none;
    }

    .code-snippet {
        margin-top: -83px;
    }

    .app-name-logo {
        display: flex;
        flex-direction: row;
        margin-left: var(--sl-spacing-x-small)
    }

    ${I(T.xs)} { 
        sl-tab-group::part(tabs) {
            flex: none;
        }

        .browser-light, .browser-dark, .code-area, .code-area-dark {
            min-width: 386px;
       }

       .icon, .icon-red {
            margin-top: 23px;
        }

        .logo {
            margin-top: 18px;
        }

        .microsoft-badge {
            left: 44px;
        }
    }
`;var U=f`
  ${S}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,h=class extends L{constructor(){super(...arguments),this.formControlController=new D(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return i`
      <label
        part="base"
        class=${F({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${z(this.value)}
          .checked=${q(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};h.styles=U;o([v('input[type="checkbox"]')],h.prototype,"input",2);o([c()],h.prototype,"hasFocus",2);o([n()],h.prototype,"title",2);o([n()],h.prototype,"name",2);o([n()],h.prototype,"value",2);o([n({reflect:!0})],h.prototype,"size",2);o([n({type:Boolean,reflect:!0})],h.prototype,"disabled",2);o([n({type:Boolean,reflect:!0})],h.prototype,"checked",2);o([H("checked")],h.prototype,"defaultChecked",2);o([n({reflect:!0})],h.prototype,"form",2);o([n({type:Boolean,reflect:!0})],h.prototype,"required",2);o([b("checked",{waitUntilFirstUpdate:!0})],h.prototype,"handleCheckedChange",1);o([b("disabled",{waitUntilFirstUpdate:!0})],h.prototype,"handleDisabledChange",1);h.define("sl-switch");var j=f`
  ${S}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,d=class extends L{constructor(){super(),this.localize=new P(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&!this.disabled&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=y(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=y(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await C(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=x(this,"tooltip.show",{dir:this.localize.dir()});await B(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await C(this.body);const{keyframes:e,options:t}=x(this,"tooltip.hide",{dir:this.localize.dir()});await B(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,$(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,$(this,"sl-after-hide")}render(){return i`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${F({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};d.styles=j;d.dependencies={"sl-popup":O};o([v("slot:not([name])")],d.prototype,"defaultSlot",2);o([v(".tooltip__body")],d.prototype,"body",2);o([v("sl-popup")],d.prototype,"popup",2);o([n()],d.prototype,"content",2);o([n()],d.prototype,"placement",2);o([n({type:Boolean,reflect:!0})],d.prototype,"disabled",2);o([n({type:Number})],d.prototype,"distance",2);o([n({type:Boolean,reflect:!0})],d.prototype,"open",2);o([n({type:Number})],d.prototype,"skidding",2);o([n()],d.prototype,"trigger",2);o([n({type:Boolean})],d.prototype,"hoist",2);o([b("open",{waitUntilFirstUpdate:!0})],d.prototype,"handleOpenChange",1);o([b(["content","distance","hoist","placement","skidding"])],d.prototype,"handleOptionsChange",1);o([b("disabled")],d.prototype,"handleDisabledChange",1);_("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});_("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});d.define("sl-tooltip");var W=Object.defineProperty,J=Object.getOwnPropertyDescriptor,l=(e,t,r,g)=>{for(var p=g>1?void 0:g?J(t,r):t,m=e.length-1,u;m>=0;m--)(u=e[m])&&(p=(g?u(t,r,p):u(p))||p);return g&&p&&W(t,r,p),p};let s=class extends A{constructor(){super(),this.productName="",this.productId="",this.product=null,this.campaignId="",this.languageName="Auto Detect",this.languageCode=navigator.language,this.launchMode="Pop up",this.theme="Dark",this.animation="Off",this.generateReady=!0,this.validAppId=!0,this.animationToggle=!1,this.interactionActive="block",this.windowWidth=0,this.selectedTab="design preview",this.resizeObserver=null,this.lastPreviewCode="",this.previewContainer=w(),this.langSelectEventHandler=e=>this.attachLangSelectHandler(e),this.launchSelectEventHandler=e=>this.attachLaunchSelectHandler(e),this.themeSelectEventHandler=e=>this.attachThemeSelectHandler(e),this.interactionSelectEventHandler=e=>this.attachInteractionSelectHandler(e),this.supportedLanguages=[{name:"Auto Detect",code:navigator.language},{name:"Afrikaans",code:"af"},{name:"Arabic",code:"ar"},{name:"Belarusian",code:"be"},{name:"Bengali",code:"bn"},{name:"Bosnian",code:"bs"},{name:"Bulgarian",code:"bg"},{name:"Catalan",code:"ca"},{name:"Chinese (Simplified)",code:"zh-cn"},{name:"Chinese (Traditional)",code:"zh-tw"},{name:"Croatian",code:"hr"},{name:"Czech",code:"cs"},{name:"Danish",code:"da"},{name:"Dutch",code:"nl"},{name:"English",code:"en-us"},{name:"Estonian",code:"et"},{name:"Filipino",code:"fil"},{name:"Finnish",code:"fi"},{name:"French",code:"fr"},{name:"Galician",code:"gl"},{name:"Georgian",code:"ka"},{name:"German",code:"de"},{name:"Greek",code:"el"},{name:"Hebrew",code:"he"},{name:"Hindi",code:"hi"},{name:"Hungarian",code:"hu"},{name:"Icelandic",code:"is"},{name:"Indonesian",code:"id"},{name:"Italian",code:"it"},{name:"Japanese",code:"ja"},{name:"Kazakh",code:"kk"},{name:"Korean",code:"ko"},{name:"Latvian",code:"lv"},{name:"Lithuanian",code:"lt"},{name:"Malay",code:"ms"},{name:"Norwegian",code:"no"},{name:"Persian",code:"fa"},{name:"Polish",code:"pl"},{name:"Portuguese (Brazil)",code:"pt-br"},{name:"Portuguese (Portugal)",code:"pt-pt"},{name:"Romanian",code:"ro"},{name:"Russian",code:"ru"},{name:"Serbian",code:"sr"},{name:"Slovak",code:"sk"},{name:"Slovenian",code:"sl"},{name:"Spanish",code:"es"},{name:"Swahili",code:"sw"},{name:"Swedish",code:"sv"},{name:"Thai",code:"th"},{name:"Turkish",code:"tr"},{name:"Ukranian",code:"uk"},{name:"Vietnamese",code:"vi"},{name:"Welsh",code:"cy"}],this.previewContainer=w()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.removeLangSelectListener(),this.removeLaunchSelectListener(),this.removeThemeSelectListener(),this.removeInteractionSelectListener()}firstUpdated(){!this.productId&&this.productName?(this.productId="",this.productName=""):this.productId&&k.getProductDetails(this.productId).then(e=>this.productLoaded(e)).catch(e=>this.showProductLoadError(e)),this.injectAppBadgeScript(),this.updateBadgePreview(),this.resizeObserver=new ResizeObserver(()=>{this.windowWidth=window.innerWidth,this.animationToggle=!1}),this.resizeObserver.observe(document.body),this.addLangSelectListener(),this.addLaunchSelectListener(),this.addThemeSelectListener(),this.addInteractionSelectListener()}productLoaded(e){this.product=e,this.productName=this.product?.title||""}showProductLoadError(e){M.showError("Unable to load app","We couldn't load that app. Try searching for the app to try again.",e)}injectAppBadgeScript(){const e=document.createElement("script");e.src="https://get.microsoft.com/badge/ms-store-badge.bundled.js",document.body.append(e)}getCode(e){const t={cid:this.campaignId,"window-mode":this.launchMode==="popup"?void 0:this.launchMode,theme:this.theme,size:e==="large"?void 0:e,language:this.languageCode?this.languageCode:void 0,animation:this.animation==="on"?void 0:this.animation},r=Object.entries(t).filter(p=>!!p[1]).map(p=>`	${p[0]}="${p[1]?.toLowerCase()}"`).join(`
`);return['<script type="module" src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"><\/script>',"<ms-store-badge",'	productid="'+this.productId+'"'].concat(r+">").concat("</ms-store-badge>").join(`
`)}getNonJSCode(){return`<a href="https://apps.microsoft.com/detail${this.getNonJSProductName()}${this.getNonJSProductID()}?launch=true${this.getNonJSCID()}
	&mode=${this.launchMode==="Pop up"?"mini":"full"}">
	<img src="https://get.microsoft.com/images/${this.languageCode.toLowerCase()}%20${this.theme==="Auto"||this.theme==="Dark"?"dark":"light"}.svg" width="200"/>
</a>`}getNonJSProductName(){return this.productName?`/${encodeURI(this.productName)}`:""}getNonJSProductID(){return this.productId?`/${this.productId}`:""}getNonJSCID(){return this.campaignId?`
	&cid=${this.campaignId}`:""}attachLangSelectHandler(e){const t=e.detail.item,r=this.supportedLanguages.find(g=>g.name===t.value);this.languageName=r?.name||"",this.languageCode=r?.code||"",this.updateBadgePreview()}addLangSelectListener(){this.shadowRoot?.querySelector(".lang-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.langSelectEventHandler)}removeLangSelectListener(){this.shadowRoot?.querySelector(".lang-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.langSelectEventHandler)}attachLaunchSelectHandler(e){const t=e.detail.item;this.launchMode=t.value,this.updateBadgePreview()}addLaunchSelectListener(){this.shadowRoot?.querySelector(".launch-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.launchSelectEventHandler)}removeLaunchSelectListener(){this.shadowRoot?.querySelector(".launch-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.launchSelectEventHandler)}attachThemeSelectHandler(e){const t=e.detail.item;this.theme=t.value,this.updateBadgePreview(),this.animationToggle=!0}addThemeSelectListener(){this.shadowRoot?.querySelector(".theme-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.themeSelectEventHandler)}removeThemeSelectListener(){this.shadowRoot?.querySelector(".theme-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.themeSelectEventHandler)}attachInteractionSelectHandler(e){const t=e.detail.item;this.animation=t.value,this.animationToggle=!1,this.updateBadgePreview()}addInteractionSelectListener(){this.shadowRoot?.querySelector(".interaction-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.interactionSelectEventHandler)}removeInteractionSelectListener(){this.shadowRoot?.querySelector(".interaction-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.interactionSelectEventHandler)}renderLangDropdown(){return i`
            <div class="lang-dropdown-selection">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${a.getFormatted("BadgePage.ButtonAriaLabel","Language")}" caret>
                        <div class="dropdown-button-text">${this.languageName}</div>
                    </sl-button>
                    <sl-menu size="small">
                        ${this.supportedLanguages.map(e=>i`<sl-menu-item value=${e.name}>${e.name}</sl-menu-item>`)}
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderLaunchDropdown(){return i`
            <div class="launch-dropdown-selection selection-gap">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${a.getFormatted("BadgePage.ButtonAriaLabel","Launch")}" caret>
                        <div class="dropdown-button-text">${this.launchMode}</div>
                    </sl-button>
                    <sl-menu size="small">
                        <sl-menu-item value="Pop up">Pop up</sl-menu-item>
                        <sl-menu-item value="Full">Full</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderThemeDropdown(){return i`
            <div class="theme-dropdown-selection selection-gap">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${a.getFormatted("BadgePage.ButtonAriaLabel","Theme")}" caret>
                        <div class="dropdown-button-text">${this.theme}</div>
                    </sl-button>
                    <sl-menu size="small">
                        <sl-menu-item value="Dark">Dark</sl-menu-item>
                        <sl-menu-item value="Light">Light</sl-menu-item>
                        <sl-menu-item value="Auto">Auto</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderInteraction(){const e=this.shadowRoot?.querySelector(".tab-group"),t=this.shadowRoot?.querySelector("#non-js");e&&(e.activeTab===t?this.interactionActive="none":this.interactionActive="block")}renderInteractionDropdown(){return i`
            <div class="interaction-dropdown-selection selection-gap">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${a.getFormatted("BadgePage.ButtonAriaLabel","Interaction")}" caret>
                        <div class="dropdown-button-text">${this.animation}</div>
                    </sl-button>
                    <sl-menu size="small">
                        <sl-menu-item value="Off">Off</sl-menu-item>
                        <sl-menu-item value="On">On</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderSampleBadges(e){if(e==="light"){if(this.windowWidth>1485)return i`
                    <div>
                        <div class="sampleBadge1-light sampleBadge-animation-light"></div>
                        <div class="sampleBadge2-light sampleBadge-animation-light"></div>
                    </div>
                `;if(this.windowWidth>1200)return i`
                    <div>
                        <div class="sampleBadge1-light sampleBadge-animation-light"></div>
                    </div>
                `}else if(e==="lightD"){if(this.windowWidth>1485)return i`
                    <div>
                        <div class="sampleBadge1-light"></div>
                        <div class="sampleBadge2-light"></div>
                    </div>
                `;if(this.windowWidth>1200)return i`
                    <div>
                        <div class="sampleBadge1-light"></div>
                    </div>
                `}else if(e==="dark"){if(this.windowWidth>1485)return i`
                    <div>
                        <div class="sampleBadge1-dark sampleBadge-animation-dark"></div>
                        <div class="sampleBadge2-dark sampleBadge-animation-dark"></div>
                    </div>
                `;if(this.windowWidth>1200)return i`
                    <div>
                        <div class="sampleBadge1-dark sampleBadge-animation-dark"></div>
                    </div>
                `}else{if(this.windowWidth>1485)return i`
                    <div>
                        <div class="sampleBadge1-dark"></div>
                        <div class="sampleBadge2-dark"></div>
                    </div>
                `;if(this.windowWidth>1200)return i`
                    <div>
                        <div class="sampleBadge1-dark"></div>
                    </div>
                `}return i``}renderCopyButton(){return this.validAppId?this.generateReady?i`
                    <sl-button @click="${this.copyText}" class="badge-button" variant="primary" size="small" telemetry-event-id="BadgeGenerateClicked">Generate your badge</sl-button>
                `:i`
                <sl-button @click="${this.copyText}" class="badge-button" variant="primary" size="small" telemetry-event-id="BadgeGenerateClicked">Copied to clipboard!</sl-button>
            `:i`
            <sl-button @click="${this.copyText}" ?disabled="${!0}" class="badge-button" variant="primary" size="small" telemetry-event-id="BadgeGenerateClicked">Generate your badge</sl-button>
        `}copyText(){const e=this.shadowRoot?.querySelector(".tab-group"),t=this.shadowRoot?.querySelector("#code-snippet");this.generateReady=!1,e.setActiveTab(t),setTimeout(()=>{this.generateReady=!0},5e3),this.animationToggle=!1,navigator.clipboard.writeText(this.getCode("large"))}appIdChanged(e){const t=e.target.value,r=t.length===12,g=t.length===14&&(t.substring(0,2)==="XP"||t.substring(0,2)==="XM");t.length!==0?g?(this.validAppId=!0,this.productId=t):r?(this.validAppId=!0,this.productId=t):(this.validAppId=!1,this.productId=t,this.productName=""):(this.validAppId=!0,this.productId=t,this.productName=""),this.checkValidAppRefresh(r,g),this.generateReady=!0,this.animationToggle=!1,this.updateBadgePreview()}checkValidAppRefresh(e,t){(e||t)&&k.getProductDetails(this.productId).then(r=>this.productLoaded(r))}campaignIdChanged(e){const t=e.target.value;this.campaignId=t,this.generateReady=!0,this.animationToggle=!1,this.updateBadgePreview()}generateAppId(){return this.validAppId?i`
                <h5 class="input-header">${a.get("BadgePage.AppID.Header")}</h5>
                <sl-tooltip role="definition" content=${a.get("BadgePage.AppID.Tooltip")}>
                    <sl-icon class="icon" name="info-circle"></sl-icon>
                </sl-tooltip>
            `:i`
            <h5 class="input-header-red">${a.get("BadgePage.AppID.Header")}</h5>
            <sl-tooltip role="definition" content=${a.get("BadgePage.AppID.Invalid.Tooltip")}>
                <sl-icon class="icon-red" name="info-circle"></sl-icon>
            </sl-tooltip>
        `}generateAppNameLogoIfAvailable(){return this.productId&&this.productName?i`
                <div class="app-name-logo">
                    ${this.renderProductLogo()}
                    <h5 class="input-header">${decodeURIComponent(this.productName)}</h5>
                </div>
            `:i``}renderProductLogo(){return this.product?.iconUrl?i`<img class="logo" src="${this.product?.iconUrl||""}" alt="App logo">`:i``}generateCampaignId(){return i`
            <h5 class="input-header">${a.get("BadgePage.CID.Header")}</h5>
            <sl-tooltip role="definition" content=${a.get("BadgePage.CID.Tooltip")}>
                <sl-icon class="icon" name="info-circle"></sl-icon>
            </sl-tooltip>
            <h5 class="desc">(Optional)</h5>
        `}updateBadgePreview(){const e=this.getCode("large");e!==this.lastPreviewCode&&this.previewContainer.value&&(this.lastPreviewCode=e,this.previewContainer.value.innerHTML=e)}renderLightBrowser(){return i`
            <div class="browser">
                <div class="browser-light browser-animation-light">
                    <div class="frame-light frame-animation-light">
                        <div class="tab-light browser-animation-light"></div>
                        <div class="cornerLeft-light corner-animation-light"></div>
                        <div class="cornerRight-light corner-animation-light"></div>
                        <div class="searchBar-light searchBar-animation-light"></div>
                    </div>
                    <div class="contentSection-light contentSection-animation-light">
                        <div class="browser-content-light browser-content-animation-light">
                        ${this.renderSampleBadges("light")}
                        </div>
                    </div>
                    <div class="bottomBar-light bottomBar-animation-light"></div>
                </div>
            </div>
        `}renderLightDefaultBrowser(){return i`
            <div class="browser">
                <div class="browser-light">
                    <div class="frame-light">
                        <div class="tab-light"></div>
                        <div class="cornerLeft-light"></div>
                        <div class="cornerRight-light"></div>
                        <div class="searchBar-light"></div>
                    </div>
                    <div class="contentSection-light">
                        <div class="browser-content-light">
                        ${this.renderSampleBadges("lightD")}
                        </div>
                    </div>
                    <div class="bottomBar-light"></div>
                </div>
            </div>
        `}renderDarkBrowser(){return i`
            <div class="browser-dark browser-animation-dark">
                <div class="frame-dark frame-animation-dark">
                    <div class="tab-dark browser-animation-dark" ></div>
                    <div class="cornerLeft-dark corner-animation-dark" ></div>
                    <div class="cornerRight-dark corner-animation-dark" ></div>
                    <div class="searchBar-dark searchBar-animation-dark" ></div>
                </div>
                <div class="contentSection-dark contentSection-animation-dark">
                    <div class="browser-content-dark browser-content-animation-dark">
                        ${this.renderSampleBadges("dark")}
                    </div>
                </div>
                <div class="bottomBar-dark bottomBar-animation-dark"></div>
            </div>
        `}renderDarkDefaultBrowser(){return i`
            <div class="browser-dark">
                <div class="frame-dark">
                    <div class="tab-dark" ></div>
                    <div class="cornerLeft-dark" ></div>
                    <div class="cornerRight-dark" ></div>
                    <div class="searchBar-dark" ></div>
                </div>
                <div class="contentSection-dark">
                    <div class="browser-content-dark">
                        ${this.renderSampleBadges("darkD")}
                    </div>
                </div>
                <div class="bottomBar-dark"></div>
            </div>
        `}renderBrowserPreview(){return this.animationToggle&&(this.theme==="Light"||this.theme==="Auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches)?i`
                ${this.renderDarkBrowser()}
            `:!this.animationToggle&&(this.theme==="Light"||this.theme==="Auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches)?i`
                ${this.renderDarkDefaultBrowser()}
            `:this.animationToggle&&(this.theme==="Dark"||this.theme==="Auto"&&window.matchMedia("(prefers-color-scheme: light)").matches)?i`
                ${this.renderLightBrowser()}
            `:i`
                ${this.renderLightDefaultBrowser()}
            `}renderCodeSnippet(){return i`
            <div class="code-area">${this.getCode("large")}</div>
        `}renderNonJS(){return i`
            <div class="code-area">${this.getNonJSCode()}</div>
        `}tabKeydown(e,t){t.key==="Enter"&&(this.selectedTab=e)}render(){const e="design preview",t="code snippet",r="non javascript badge",g=this.selectedTab===e?a.getFormatted("BadgePage.TabSelectedAriaLabel",e):a.getFormatted("BadgePage.TabAriaLabel",e),p=this.selectedTab===t?a.getFormatted("BadgePage.TabSelectedAriaLabel",t):a.getFormatted("BadgePage.TabAriaLabel",t),m=this.selectedTab===r?a.getFormatted("BadgePage.TabSelectedAriaLabel",r):a.getFormatted("BadgePage.TabAriaLabel",r);return i`
        <div class="badge-container" telemetry-area-id="ProductBadge" telemetry-data='{ "itemId": "${this.product?.productId}", "itemType": "${this.product?.productFamilyName}" }'>
            <div class="header">
                <h1 class="title">${a.get("BadgePage.Title")}</h1>
                <h2 class="desc">${a.get("BadgePage.Description")} </h2>
            </div>
            <div class="main">
                <div class="input">
                    <div class="padding-bottom">
                        <div class="section-header">
                            ${this.generateAppId()}
                            ${this.generateAppNameLogoIfAvailable()}
                        </div>
                        <sl-input @sl-input="${u=>this.appIdChanged(u)}" maxlength=14 class="input-box" size="small" placeholder="App ID" value="${this.productId}"></sl-input>
                    </div>

                    <div class="section-header">
                        ${this.generateCampaignId()}
                    </div>
                    <sl-input @sl-input="${u=>this.campaignIdChanged(u)}" maxlength=30 class="input-box" size="small" placeholder="Campaign ID"></sl-input>
                    <div class="section-header">
                        <h5 class="input-header">${a.get("BadgePage.Language.Header")}</h5>
                        <sl-tooltip role="definition" content=${a.get("BadgePage.Language.Tooltip")}>
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                        </sl-tooltip>
                    </div>
                    ${this.renderLangDropdown()}
                    <div class="section-header">
                        <h5 class="input-header">${a.get("BadgePage.Launch.Header")}</h5>
                        <sl-tooltip role="definition" content=${a.get("BadgePage.Launch.Tooltip")}>
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                        </sl-tooltip>
                    </div>
                    ${this.renderLaunchDropdown()}
                    <div class="section-header">
                        <h5 class="input-header">${a.get("BadgePage.Theme.Header")}</h5>
                        <sl-tooltip role="definition" content=${a.get("BadgePage.Theme.Tooltip")}>
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                        </sl-tooltip>
                    </div>
                    ${this.renderThemeDropdown()}
                    <div style="display: ${this.interactionActive}">
                        <div class="section-header">
                            <h5 class="input-header">${a.get("BadgePage.Interaction.Header")}</h5>
                            <sl-tooltip role="definition" content=${a.get("BadgePage.Interaction.Tooltip")}>
                                <sl-icon class="icon" name="info-circle"></sl-icon>
                            </sl-tooltip>
                        </div>
                        ${this.renderInteractionDropdown()}
                    </div>
                    ${this.renderCopyButton()}
                </div>
                <div class="preview">
                    <sl-tab-group class="tab-group" @click="${this.renderInteraction}" activation="manual">
                        <sl-tab slot="nav" panel="${e}" @click="${()=>this.selectedTab=e}" @keydown="${u=>this.tabKeydown(e,u)}" id="design-preview"><span aria-label="${g}">${a.get("BadgePage.Design.Tab")}</span></sl-tab>
                        <sl-tab slot="nav" panel="${t}" @click="${()=>this.selectedTab=t}" @keydown="${u=>this.tabKeydown(t,u)}" id="code-snippet"><span aria-label="${p}">${a.get("BadgePage.Code.Tab")}</span></sl-tab>
                        <sl-tab slot="nav" panel="${r}" @click="${()=>this.selectedTab=r}" @keydown="${u=>this.tabKeydown(r,u)}" id="non-js"><span aria-label="${m}">${a.get("BadgePage.NonJS.Tab")}</span></sl-tab>
                        <sl-tab-panel name="${e}">
                            ${this.renderBrowserPreview()}
                            <div class="microsoft-badge" ${E(this.previewContainer)}></div>
                        </sl-tab-panel>
                        <sl-tab-panel name="${t}">
                            ${this.renderCodeSnippet()}
                        </sl-tab-panel>
                        <sl-tab-panel name="${r}">
                            ${this.renderNonJS()}
                        </sl-tab-panel>
                    </sl-tab-group>
                </div>
            </div>   
        </div>
        `}};s.styles=[N,V];l([n({attribute:"product-name"})],s.prototype,"productName",2);l([n({attribute:"product-id"})],s.prototype,"productId",2);l([c()],s.prototype,"product",2);l([c()],s.prototype,"campaignId",2);l([c()],s.prototype,"languageName",2);l([c()],s.prototype,"languageCode",2);l([c()],s.prototype,"launchMode",2);l([c()],s.prototype,"theme",2);l([c()],s.prototype,"animation",2);l([c()],s.prototype,"generateReady",2);l([c()],s.prototype,"validAppId",2);l([c()],s.prototype,"animationToggle",2);l([c()],s.prototype,"interactionActive",2);l([c()],s.prototype,"windowWidth",2);l([c()],s.prototype,"selectedTab",2);l([c()],s.prototype,"resizeObserver",2);s=l([R("app-badge-page")],s);export{s as BadgePage};
