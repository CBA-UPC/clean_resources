import{i as k,m as N,B as H,E as y,J as i,K as w,r as u,n as l,L as m,F as x,$ as O,x as o,G as C,O as q,N as B,a0 as U,s as W,e as L,b as T,l as s,c as M,a as V,t as G}from"./index-aa05d19d.js";import"./product-collection-91cc6b51.js";import{d as j,l as J,S as K}from"./auto-complete-app-search-dfdb1cc6.js";import"./chunk.MHCKU7CX-8942761d.js";import{s as F}from"./chunk.RK73WSZS-e061cb19.js";import{S as E}from"./chunk.HDLULROG-fa2c67c1.js";import{s as R,g as A}from"./chunk.H437TPPF-d2f2afca.js";import{p as I,s as z,a as D,w as P}from"./chunk.KRRLOROJ-faa56958.js";import{alertService as X}from"./alert-service-1970f04a.js";import"./repeat-1a78a8d2.js";import"./style-map-a428b004.js";import"./css-function-2ba732a7.js";import"./image-helper-99359f42.js";import"./nav-bar-cd5e889c.js";import"./chunk.YCHBWCKL-ccebaa75.js";const Q=k`
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

    ${N(H.xs)} { 
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
`;var Y=k`
  ${y}

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
`,g=class extends x{constructor(){super(...arguments),this.formControlController=new O(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return o`
      <label
        part="base"
        class=${C({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${q(this.value)}
          .checked=${J(this.checked)}
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
    `}};g.styles=Y;i([w('input[type="checkbox"]')],g.prototype,"input",2);i([u()],g.prototype,"hasFocus",2);i([l()],g.prototype,"title",2);i([l()],g.prototype,"name",2);i([l()],g.prototype,"value",2);i([l({reflect:!0})],g.prototype,"size",2);i([l({type:Boolean,reflect:!0})],g.prototype,"disabled",2);i([l({type:Boolean,reflect:!0})],g.prototype,"checked",2);i([j("checked")],g.prototype,"defaultChecked",2);i([l({reflect:!0})],g.prototype,"form",2);i([l({type:Boolean,reflect:!0})],g.prototype,"required",2);i([m("checked",{waitUntilFirstUpdate:!0})],g.prototype,"handleCheckedChange",1);i([m("disabled",{waitUntilFirstUpdate:!0})],g.prototype,"handleDisabledChange",1);g.define("sl-switch");var Z=k`
  ${y}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,b=class extends x{constructor(){super(...arguments),this.localize=new B(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(a=>!["aria-labelledby","aria-controls"].includes(a.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(a=>a.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((a,d)=>{var n;a[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((n=this.getActiveTab())!=null?n:this.tabs[0],{emitEvents:!1}),d.unobserve(a[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(a=>t.includeDisabled?a.tagName.toLowerCase()==="sl-tab":a.tagName.toLowerCase()==="sl-tab"&&!a.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const a=t.target.closest("sl-tab");a?.closest("sl-tab-group")===this&&a!==null&&this.setActiveTab(a,{scrollBehavior:"smooth"})}handleKeyDown(t){const a=t.target.closest("sl-tab");if(a?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&a!==null&&(this.setActiveTab(a,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const n=this.tabs.find(r=>r.matches(":focus")),f=this.localize.dir()==="rtl";if(n?.tagName.toLowerCase()==="sl-tab"){let r=this.tabs.indexOf(n);t.key==="Home"?r=0:t.key==="End"?r=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(f?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?r--:(["top","bottom"].includes(this.placement)&&t.key===(f?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&r++,r<0&&(r=this.tabs.length-1),r>this.tabs.length-1&&(r=0),this.tabs[r].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[r],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&F(this.tabs[r],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=U({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const a=this.activeTab;this.activeTab=t,this.tabs.forEach(d=>d.active=d===this.activeTab),this.panels.forEach(d=>{var n;return d.active=d.name===((n=this.activeTab)==null?void 0:n.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&F(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(a&&this.emit("sl-tab-hide",{detail:{name:a.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(a=>a.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,a=t.clientHeight,d=this.localize.dir()==="rtl",n=this.getAllTabs(),r=n.slice(0,n.indexOf(t)).reduce(($,S)=>({left:$.left+S.clientWidth,top:$.top+S.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=d?`${-1*r.left}px`:`${r.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${a}px`,this.indicator.style.translate=`0 ${r.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(a=>a.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return o`
      <div
        part="base"
        class=${C({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?o`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?o`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};b.styles=Z;b.dependencies={"sl-icon-button":E};i([w(".tab-group")],b.prototype,"tabGroup",2);i([w(".tab-group__body")],b.prototype,"body",2);i([w(".tab-group__nav")],b.prototype,"nav",2);i([w(".tab-group__indicator")],b.prototype,"indicator",2);i([u()],b.prototype,"hasScrollControls",2);i([l()],b.prototype,"placement",2);i([l()],b.prototype,"activation",2);i([l({attribute:"no-scroll-controls",type:Boolean})],b.prototype,"noScrollControls",2);i([m("noScrollControls",{waitUntilFirstUpdate:!0})],b.prototype,"updateScrollControls",1);i([m("placement",{waitUntilFirstUpdate:!0})],b.prototype,"syncIndicator",1);b.define("sl-tab-group");var tt=k`
  ${y}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,et=0,v=class extends x{constructor(){super(...arguments),this.localize=new B(this),this.attrId=++et,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,o`
      <div
        part="base"
        class=${C({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?o`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};v.styles=tt;v.dependencies={"sl-icon-button":E};i([w(".tab")],v.prototype,"tab",2);i([l({reflect:!0})],v.prototype,"panel",2);i([l({type:Boolean,reflect:!0})],v.prototype,"active",2);i([l({type:Boolean})],v.prototype,"closable",2);i([l({type:Boolean,reflect:!0})],v.prototype,"disabled",2);i([m("active")],v.prototype,"handleActiveChange",1);i([m("disabled")],v.prototype,"handleDisabledChange",1);v.define("sl-tab");var at=k`
  ${y}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,it=0,_=class extends x{constructor(){super(...arguments),this.attrId=++it,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return o`
      <slot
        part="base"
        class=${C({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};_.styles=at;i([l({reflect:!0})],_.prototype,"name",2);i([l({type:Boolean,reflect:!0})],_.prototype,"active",2);i([m("active")],_.prototype,"handleActiveChange",1);_.define("sl-tab-panel");var ot=k`
  ${y}

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
`,h=class extends x{constructor(){super(),this.localize=new B(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&!this.disabled&&t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=I(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=I(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await z(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=A(this,"tooltip.show",{dir:this.localize.dir()});await D(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await z(this.body);const{keyframes:t,options:e}=A(this,"tooltip.hide",{dir:this.localize.dir()});await D(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,P(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,P(this,"sl-after-hide")}render(){return o`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${C({tooltip:!0,"tooltip--open":this.open})}
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
    `}};h.styles=ot;h.dependencies={"sl-popup":K};i([w("slot:not([name])")],h.prototype,"defaultSlot",2);i([w(".tooltip__body")],h.prototype,"body",2);i([w("sl-popup")],h.prototype,"popup",2);i([l()],h.prototype,"content",2);i([l()],h.prototype,"placement",2);i([l({type:Boolean,reflect:!0})],h.prototype,"disabled",2);i([l({type:Number})],h.prototype,"distance",2);i([l({type:Boolean,reflect:!0})],h.prototype,"open",2);i([l({type:Number})],h.prototype,"skidding",2);i([l()],h.prototype,"trigger",2);i([l({type:Boolean})],h.prototype,"hoist",2);i([m("open",{waitUntilFirstUpdate:!0})],h.prototype,"handleOpenChange",1);i([m(["content","distance","hoist","placement","skidding"])],h.prototype,"handleOptionsChange",1);i([m("disabled")],h.prototype,"handleDisabledChange",1);R("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});R("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});h.define("sl-tooltip");var rt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,p=(t,e,a,d)=>{for(var n=d>1?void 0:d?st(e,a):e,f=t.length-1,r;f>=0;f--)(r=t[f])&&(n=(d?r(e,a,n):r(n))||n);return d&&n&&rt(e,a,n),n};let c=class extends W{constructor(){super(),this.productName="",this.productId="",this.product=null,this.campaignId="",this.languageName="Auto Detect",this.languageCode=navigator.language,this.launchMode="Pop up",this.theme="Dark",this.animation="Off",this.generateReady=!0,this.validAppId=!0,this.animationToggle=!1,this.interactionActive="block",this.windowWidth=0,this.selectedTab="design preview",this.resizeObserver=null,this.lastPreviewCode="",this.previewContainer=L(),this.langSelectEventHandler=t=>this.attachLangSelectHandler(t),this.launchSelectEventHandler=t=>this.attachLaunchSelectHandler(t),this.themeSelectEventHandler=t=>this.attachThemeSelectHandler(t),this.interactionSelectEventHandler=t=>this.attachInteractionSelectHandler(t),this.supportedLanguages=[{name:"Auto Detect",code:navigator.language},{name:"Afrikaans",code:"af"},{name:"Arabic",code:"ar"},{name:"Belarusian",code:"be"},{name:"Bengali",code:"bn"},{name:"Bosnian",code:"bs"},{name:"Bulgarian",code:"bg"},{name:"Catalan",code:"ca"},{name:"Chinese (Simplified)",code:"zh-cn"},{name:"Chinese (Traditional)",code:"zh-tw"},{name:"Croatian",code:"hr"},{name:"Czech",code:"cs"},{name:"Danish",code:"da"},{name:"Dutch",code:"nl"},{name:"English",code:"en-us"},{name:"Estonian",code:"et"},{name:"Filipino",code:"fil"},{name:"Finnish",code:"fi"},{name:"French",code:"fr"},{name:"Galician",code:"gl"},{name:"Georgian",code:"ka"},{name:"German",code:"de"},{name:"Greek",code:"el"},{name:"Hebrew",code:"he"},{name:"Hindi",code:"hi"},{name:"Hungarian",code:"hu"},{name:"Icelandic",code:"is"},{name:"Indonesian",code:"id"},{name:"Italian",code:"it"},{name:"Japanese",code:"ja"},{name:"Kazakh",code:"kk"},{name:"Korean",code:"ko"},{name:"Latvian",code:"lv"},{name:"Lithuanian",code:"lt"},{name:"Malay",code:"ms"},{name:"Norwegian",code:"no"},{name:"Persian",code:"fa"},{name:"Polish",code:"pl"},{name:"Portuguese (Brazil)",code:"pt-br"},{name:"Portuguese (Portugal)",code:"pt-pt"},{name:"Romanian",code:"ro"},{name:"Russian",code:"ru"},{name:"Serbian",code:"sr"},{name:"Slovak",code:"sk"},{name:"Slovenian",code:"sl"},{name:"Spanish",code:"es"},{name:"Swahili",code:"sw"},{name:"Swedish",code:"sv"},{name:"Thai",code:"th"},{name:"Turkish",code:"tr"},{name:"Ukranian",code:"uk"},{name:"Vietnamese",code:"vi"},{name:"Welsh",code:"cy"}],this.previewContainer=L()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.removeLangSelectListener(),this.removeLaunchSelectListener(),this.removeThemeSelectListener(),this.removeInteractionSelectListener()}firstUpdated(){!this.productId&&this.productName?(this.productId="",this.productName=""):this.productId&&T.getProductDetails(this.productId).then(t=>this.productLoaded(t)).catch(t=>this.showProductLoadError(t)),this.injectAppBadgeScript(),this.updateBadgePreview(),this.resizeObserver=new ResizeObserver(()=>{this.windowWidth=window.innerWidth,this.animationToggle=!1}),this.resizeObserver.observe(document.body),this.addLangSelectListener(),this.addLaunchSelectListener(),this.addThemeSelectListener(),this.addInteractionSelectListener()}productLoaded(t){this.product=t,this.productName=this.product?.title||""}showProductLoadError(t){X.showError("Unable to load app","We couldn't load that app. Try searching for the app to try again.",t)}injectAppBadgeScript(){const t=document.createElement("script");t.src="https://get.microsoft.com/badge/ms-store-badge.bundled.js",document.body.append(t)}getCode(t){const e={cid:this.campaignId,"window-mode":this.launchMode==="popup"?void 0:this.launchMode,theme:this.theme,size:t==="large"?void 0:t,language:this.languageCode?this.languageCode:void 0,animation:this.animation==="on"?void 0:this.animation},a=Object.entries(e).filter(n=>!!n[1]).map(n=>`	${n[0]}="${n[1]?.toLowerCase()}"`).join(`
`);return['<script type="module" src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"><\/script>',"<ms-store-badge",'	productid="'+this.productId+'"'].concat(a+">").concat("</ms-store-badge>").join(`
`)}getNonJSCode(){return`<a href="https://apps.microsoft.com/detail${this.getNonJSProductName()}${this.getNonJSProductID()}?launch=true${this.getNonJSCID()}
	&mode=${this.launchMode==="Pop up"?"mini":"full"}">
	<img src="https://get.microsoft.com/images/${this.languageCode.toLowerCase()}%20${this.theme==="Auto"||this.theme==="Dark"?"dark":"light"}.svg" width="200"/>
</a>`}getNonJSProductName(){return this.productName?`/${encodeURI(this.productName)}`:""}getNonJSProductID(){return this.productId?`/${this.productId}`:""}getNonJSCID(){return this.campaignId?`
	&cid=${this.campaignId}`:""}attachLangSelectHandler(t){const e=t.detail.item,a=this.supportedLanguages.find(d=>d.name===e.value);this.languageName=a?.name||"",this.languageCode=a?.code||"",this.updateBadgePreview()}addLangSelectListener(){this.shadowRoot?.querySelector(".lang-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.langSelectEventHandler)}removeLangSelectListener(){this.shadowRoot?.querySelector(".lang-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.langSelectEventHandler)}attachLaunchSelectHandler(t){const e=t.detail.item;this.launchMode=e.value,this.updateBadgePreview()}addLaunchSelectListener(){this.shadowRoot?.querySelector(".launch-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.launchSelectEventHandler)}removeLaunchSelectListener(){this.shadowRoot?.querySelector(".launch-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.launchSelectEventHandler)}attachThemeSelectHandler(t){const e=t.detail.item;this.theme=e.value,this.updateBadgePreview(),this.animationToggle=!0}addThemeSelectListener(){this.shadowRoot?.querySelector(".theme-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.themeSelectEventHandler)}removeThemeSelectListener(){this.shadowRoot?.querySelector(".theme-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.themeSelectEventHandler)}attachInteractionSelectHandler(t){const e=t.detail.item;this.animation=e.value,this.animationToggle=!1,this.updateBadgePreview()}addInteractionSelectListener(){this.shadowRoot?.querySelector(".interaction-dropdown-selection")?.querySelector("sl-dropdown")?.addEventListener("sl-select",this.interactionSelectEventHandler)}removeInteractionSelectListener(){this.shadowRoot?.querySelector(".interaction-dropdown-selection")?.querySelector("sl-dropdown")?.removeEventListener("sl-select",this.interactionSelectEventHandler)}renderLangDropdown(){return o`
            <div class="lang-dropdown-selection">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${s.getFormatted("BadgePage.ButtonAriaLabel","Language")}" caret>
                        <div class="dropdown-button-text">${this.languageName}</div>
                    </sl-button>
                    <sl-menu size="small">
                        ${this.supportedLanguages.map(t=>o`<sl-menu-item value=${t.name}>${t.name}</sl-menu-item>`)}
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderLaunchDropdown(){return o`
            <div class="launch-dropdown-selection selection-gap">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${s.getFormatted("BadgePage.ButtonAriaLabel","Launch")}" caret>
                        <div class="dropdown-button-text">${this.launchMode}</div>
                    </sl-button>
                    <sl-menu size="small">
                        <sl-menu-item value="Pop up">Pop up</sl-menu-item>
                        <sl-menu-item value="Full">Full</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderThemeDropdown(){return o`
            <div class="theme-dropdown-selection selection-gap">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${s.getFormatted("BadgePage.ButtonAriaLabel","Theme")}" caret>
                        <div class="dropdown-button-text">${this.theme}</div>
                    </sl-button>
                    <sl-menu size="small">
                        <sl-menu-item value="Dark">Dark</sl-menu-item>
                        <sl-menu-item value="Light">Light</sl-menu-item>
                        <sl-menu-item value="Auto">Auto</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderInteraction(){const t=this.shadowRoot?.querySelector(".tab-group"),e=this.shadowRoot?.querySelector("#non-js");t&&(t.activeTab===e?this.interactionActive="none":this.interactionActive="block")}renderInteractionDropdown(){return o`
            <div class="interaction-dropdown-selection selection-gap">
                <sl-dropdown>
                    <sl-button size="small" slot="trigger" aria-label="${s.getFormatted("BadgePage.ButtonAriaLabel","Interaction")}" caret>
                        <div class="dropdown-button-text">${this.animation}</div>
                    </sl-button>
                    <sl-menu size="small">
                        <sl-menu-item value="Off">Off</sl-menu-item>
                        <sl-menu-item value="On">On</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>
        `}renderSampleBadges(t){if(t==="light"){if(this.windowWidth>1485)return o`
                    <div>
                        <div class="sampleBadge1-light sampleBadge-animation-light"></div>
                        <div class="sampleBadge2-light sampleBadge-animation-light"></div>
                    </div>
                `;if(this.windowWidth>1200)return o`
                    <div>
                        <div class="sampleBadge1-light sampleBadge-animation-light"></div>
                    </div>
                `}else if(t==="lightD"){if(this.windowWidth>1485)return o`
                    <div>
                        <div class="sampleBadge1-light"></div>
                        <div class="sampleBadge2-light"></div>
                    </div>
                `;if(this.windowWidth>1200)return o`
                    <div>
                        <div class="sampleBadge1-light"></div>
                    </div>
                `}else if(t==="dark"){if(this.windowWidth>1485)return o`
                    <div>
                        <div class="sampleBadge1-dark sampleBadge-animation-dark"></div>
                        <div class="sampleBadge2-dark sampleBadge-animation-dark"></div>
                    </div>
                `;if(this.windowWidth>1200)return o`
                    <div>
                        <div class="sampleBadge1-dark sampleBadge-animation-dark"></div>
                    </div>
                `}else{if(this.windowWidth>1485)return o`
                    <div>
                        <div class="sampleBadge1-dark"></div>
                        <div class="sampleBadge2-dark"></div>
                    </div>
                `;if(this.windowWidth>1200)return o`
                    <div>
                        <div class="sampleBadge1-dark"></div>
                    </div>
                `}return o``}renderCopyButton(){return this.validAppId?this.generateReady?o`
                    <sl-button @click="${this.copyText}" class="badge-button" variant="primary" size="small" telemetry-event-id="BadgeGenerateClicked">Generate your badge</sl-button>
                `:o`
                <sl-button @click="${this.copyText}" class="badge-button" variant="primary" size="small" telemetry-event-id="BadgeGenerateClicked">Copied to clipboard!</sl-button>
            `:o`
            <sl-button @click="${this.copyText}" ?disabled="${!0}" class="badge-button" variant="primary" size="small" telemetry-event-id="BadgeGenerateClicked">Generate your badge</sl-button>
        `}copyText(){const t=this.shadowRoot?.querySelector(".tab-group"),e=this.shadowRoot?.querySelector("#code-snippet");this.generateReady=!1,t.setActiveTab(e),setTimeout(()=>{this.generateReady=!0},5e3),this.animationToggle=!1,navigator.clipboard.writeText(this.getCode("large"))}appIdChanged(t){const e=t.target.value,a=e.length===12,d=e.length===14&&(e.substring(0,2)==="XP"||e.substring(0,2)==="XM");e.length!==0?d?(this.validAppId=!0,this.productId=e):a?(this.validAppId=!0,this.productId=e):(this.validAppId=!1,this.productId=e,this.productName=""):(this.validAppId=!0,this.productId=e,this.productName=""),this.checkValidAppRefresh(a,d),this.generateReady=!0,this.animationToggle=!1,this.updateBadgePreview()}checkValidAppRefresh(t,e){(t||e)&&T.getProductDetails(this.productId).then(a=>this.productLoaded(a))}campaignIdChanged(t){const e=t.target.value;this.campaignId=e,this.generateReady=!0,this.animationToggle=!1,this.updateBadgePreview()}generateAppId(){return this.validAppId?o`
                <h5 class="input-header">${s.get("BadgePage.AppID.Header")}</h5>
                <sl-tooltip role="definition" content=${s.get("BadgePage.AppID.Tooltip")}>
                    <sl-icon class="icon" name="info-circle"></sl-icon>
                </sl-tooltip>
            `:o`
            <h5 class="input-header-red">${s.get("BadgePage.AppID.Header")}</h5>
            <sl-tooltip role="definition" content=${s.get("BadgePage.AppID.Invalid.Tooltip")}>
                <sl-icon class="icon-red" name="info-circle"></sl-icon>
            </sl-tooltip>
        `}generateAppNameLogoIfAvailable(){return this.productId&&this.productName?o`
                <div class="app-name-logo">
                    ${this.renderProductLogo()}
                    <h5 class="input-header">${decodeURIComponent(this.productName)}</h5>
                </div>
            `:o``}renderProductLogo(){return this.product?.iconUrl?o`<img class="logo" src="${this.product?.iconUrl||""}" alt="App logo">`:o``}generateCampaignId(){return o`
            <h5 class="input-header">${s.get("BadgePage.CID.Header")}</h5>
            <sl-tooltip role="definition" content=${s.get("BadgePage.CID.Tooltip")}>
                <sl-icon class="icon" name="info-circle"></sl-icon>
            </sl-tooltip>
            <h5 class="desc">(Optional)</h5>
        `}updateBadgePreview(){const t=this.getCode("large");t!==this.lastPreviewCode&&this.previewContainer.value&&(this.lastPreviewCode=t,this.previewContainer.value.innerHTML=t)}renderLightBrowser(){return o`
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
        `}renderLightDefaultBrowser(){return o`
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
        `}renderDarkBrowser(){return o`
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
        `}renderDarkDefaultBrowser(){return o`
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
        `}renderBrowserPreview(){return this.animationToggle&&(this.theme==="Light"||this.theme==="Auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches)?o`
                ${this.renderDarkBrowser()}
            `:!this.animationToggle&&(this.theme==="Light"||this.theme==="Auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches)?o`
                ${this.renderDarkDefaultBrowser()}
            `:this.animationToggle&&(this.theme==="Dark"||this.theme==="Auto"&&window.matchMedia("(prefers-color-scheme: light)").matches)?o`
                ${this.renderLightBrowser()}
            `:o`
                ${this.renderLightDefaultBrowser()}
            `}renderCodeSnippet(){return o`
            <div class="code-area">${this.getCode("large")}</div>
        `}renderNonJS(){return o`
            <div class="code-area">${this.getNonJSCode()}</div>
        `}tabKeydown(t,e){e.key==="Enter"&&(this.selectedTab=t)}render(){const t="design preview",e="code snippet",a="non javascript badge",d=this.selectedTab===t?s.getFormatted("BadgePage.TabSelectedAriaLabel",t):s.getFormatted("BadgePage.TabAriaLabel",t),n=this.selectedTab===e?s.getFormatted("BadgePage.TabSelectedAriaLabel",e):s.getFormatted("BadgePage.TabAriaLabel",e),f=this.selectedTab===a?s.getFormatted("BadgePage.TabSelectedAriaLabel",a):s.getFormatted("BadgePage.TabAriaLabel",a);return o`
        <div class="badge-container" telemetry-area-id="ProductBadge" telemetry-data='{ "itemId": "${this.product?.productId}", "itemType": "${this.product?.productFamilyName}" }'>
            <div class="header">
                <h1 class="title">${s.get("BadgePage.Title")}</h1>
                <h2 class="desc">${s.get("BadgePage.Description")} </h2>
            </div>
            <div class="main">
                <div class="input">
                    <div class="padding-bottom">
                        <div class="section-header">
                            ${this.generateAppId()}
                            ${this.generateAppNameLogoIfAvailable()}
                        </div>
                        <sl-input @sl-input="${r=>this.appIdChanged(r)}" maxlength=14 class="input-box" size="small" placeholder="App ID" value="${this.productId}"></sl-input>
                    </div>

                    <div class="section-header">
                        ${this.generateCampaignId()}
                    </div>
                    <sl-input @sl-input="${r=>this.campaignIdChanged(r)}" maxlength=30 class="input-box" size="small" placeholder="Campaign ID"></sl-input>
                    <div class="section-header">
                        <h5 class="input-header">${s.get("BadgePage.Language.Header")}</h5>
                        <sl-tooltip role="definition" content=${s.get("BadgePage.Language.Tooltip")}>
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                        </sl-tooltip>
                    </div>
                    ${this.renderLangDropdown()}
                    <div class="section-header">
                        <h5 class="input-header">${s.get("BadgePage.Launch.Header")}</h5>
                        <sl-tooltip role="definition" content=${s.get("BadgePage.Launch.Tooltip")}>
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                        </sl-tooltip>
                    </div>
                    ${this.renderLaunchDropdown()}
                    <div class="section-header">
                        <h5 class="input-header">${s.get("BadgePage.Theme.Header")}</h5>
                        <sl-tooltip role="definition" content=${s.get("BadgePage.Theme.Tooltip")}>
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                        </sl-tooltip>
                    </div>
                    ${this.renderThemeDropdown()}
                    <div style="display: ${this.interactionActive}">
                        <div class="section-header">
                            <h5 class="input-header">${s.get("BadgePage.Interaction.Header")}</h5>
                            <sl-tooltip role="definition" content=${s.get("BadgePage.Interaction.Tooltip")}>
                                <sl-icon class="icon" name="info-circle"></sl-icon>
                            </sl-tooltip>
                        </div>
                        ${this.renderInteractionDropdown()}
                    </div>
                    ${this.renderCopyButton()}
                </div>
                <div class="preview">
                    <sl-tab-group class="tab-group" @click="${this.renderInteraction}" activation="manual">
                        <sl-tab slot="nav" panel="${t}" @click="${()=>this.selectedTab=t}" @keydown="${r=>this.tabKeydown(t,r)}" id="design-preview"><span aria-label="${d}">${s.get("BadgePage.Design.Tab")}</span></sl-tab>
                        <sl-tab slot="nav" panel="${e}" @click="${()=>this.selectedTab=e}" @keydown="${r=>this.tabKeydown(e,r)}" id="code-snippet"><span aria-label="${n}">${s.get("BadgePage.Code.Tab")}</span></sl-tab>
                        <sl-tab slot="nav" panel="${a}" @click="${()=>this.selectedTab=a}" @keydown="${r=>this.tabKeydown(a,r)}" id="non-js"><span aria-label="${f}">${s.get("BadgePage.NonJS.Tab")}</span></sl-tab>
                        <sl-tab-panel name="${t}">
                            ${this.renderBrowserPreview()}
                            <div class="microsoft-badge" ${M(this.previewContainer)}></div>
                        </sl-tab-panel>
                        <sl-tab-panel name="${e}">
                            ${this.renderCodeSnippet()}
                        </sl-tab-panel>
                        <sl-tab-panel name="${a}">
                            ${this.renderNonJS()}
                        </sl-tab-panel>
                    </sl-tab-group>
                </div>
            </div>   
        </div>
        `}};c.styles=[V,Q];p([l({attribute:"product-name"})],c.prototype,"productName",2);p([l({attribute:"product-id"})],c.prototype,"productId",2);p([u()],c.prototype,"product",2);p([u()],c.prototype,"campaignId",2);p([u()],c.prototype,"languageName",2);p([u()],c.prototype,"languageCode",2);p([u()],c.prototype,"launchMode",2);p([u()],c.prototype,"theme",2);p([u()],c.prototype,"animation",2);p([u()],c.prototype,"generateReady",2);p([u()],c.prototype,"validAppId",2);p([u()],c.prototype,"animationToggle",2);p([u()],c.prototype,"interactionActive",2);p([u()],c.prototype,"windowWidth",2);p([u()],c.prototype,"selectedTab",2);p([u()],c.prototype,"resizeObserver",2);c=p([G("app-badge-page")],c);export{c as BadgePage};
