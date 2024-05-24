import{i as x,E as R,J as s,K as y,r as b,n as a,L as C,F as k,a2 as S,H as _,a7 as T,a8 as V,a9 as z,x as u,G as $,aa as A,a6 as F,O as M,m as g,B as v,e as E,l as m,c as w,a as B,t as I}from"./index-64e4e9e7.js";import{f as q}from"./auto-complete-app-search-1bd0a416.js";import{S as O}from"./nav-bar-8584c4e6.js";import{P as G,s as D}from"./product-collection-7797e90b.js";import"./repeat-632d6c35.js";import"./style-map-69b34fe6.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-5d5da084.js";import"./image-helper-5b969ca1.js";var L=x`
  ${R}
  ${q}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,l=class extends k{constructor(){super(...arguments),this.formControlController=new S(this),this.hasSlotController=new _(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?T:t?V:z}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const o=t.target.closest("sl-radio, sl-radio-button"),e=this.getAllRadios(),i=this.value;o.disabled||(this.value=o.value,e.forEach(r=>r.checked=r===o),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var o;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const e=this.getAllRadios().filter(p=>!p.disabled),i=(o=e.find(p=>p.checked))!=null?o:e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,f=this.value;let n=e.indexOf(i)+r;n<0&&(n=e.length-1),n>e.length-1&&(n=0),this.getAllRadios().forEach(p=>{p.checked=!1,this.hasButtonGroup||(p.tabIndex=-1)}),this.value=e[n].value,e[n].checked=!0,this.hasButtonGroup?e[n].shadowRoot.querySelector("button").focus():(e[n].tabIndex=0,e[n].focus()),this.value!==f&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),e=t.find(i=>i.checked)||t[0];e&&e.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,o;const e=this.getAllRadios();if(await Promise.all(e.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=e.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!e.some(i=>i.checked))if(this.hasButtonGroup){const i=(t=e[0].shadowRoot)==null?void 0:t.querySelector("button");i&&(i.tabIndex=0)}else e[0].tabIndex=0;if(this.hasButtonGroup){const i=(o=this.shadowRoot)==null?void 0:o.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(o=>o.checked=o.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,o=this.customValidityMessage!=="";return t||o?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),o=this.hasSlotController.test("help-text"),e=this.label?!0:!!t,i=this.helpText?!0:!!o,r=u`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return u`
      <fieldset
        part="form-control"
        class=${$({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":e,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${e?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?u`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};l.styles=L;l.dependencies={"sl-button-group":O};s([y("slot:not([name])")],l.prototype,"defaultSlot",2);s([y(".radio-group__validation-input")],l.prototype,"validationInput",2);s([b()],l.prototype,"hasButtonGroup",2);s([b()],l.prototype,"errorMessage",2);s([b()],l.prototype,"defaultValue",2);s([a()],l.prototype,"label",2);s([a({attribute:"help-text"})],l.prototype,"helpText",2);s([a()],l.prototype,"name",2);s([a({reflect:!0})],l.prototype,"value",2);s([a({reflect:!0})],l.prototype,"size",2);s([a({reflect:!0})],l.prototype,"form",2);s([a({type:Boolean,reflect:!0})],l.prototype,"required",2);s([C("size",{waitUntilFirstUpdate:!0})],l.prototype,"handleSizeChange",1);s([C("value")],l.prototype,"handleValueChange",1);l.define("sl-radio-group");var P=x`
  ${A}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,d=class extends k{constructor(){super(...arguments),this.hasSlotController=new _(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return F`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${$({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${M(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};d.styles=P;s([y(".button")],d.prototype,"input",2);s([y(".hidden-input")],d.prototype,"hiddenInput",2);s([b()],d.prototype,"hasFocus",2);s([a({type:Boolean,reflect:!0})],d.prototype,"checked",2);s([a()],d.prototype,"value",2);s([a({type:Boolean,reflect:!0})],d.prototype,"disabled",2);s([a({reflect:!0})],d.prototype,"size",2);s([a({type:Boolean,reflect:!0})],d.prototype,"pill",2);s([C("disabled",{waitUntilFirstUpdate:!0})],d.prototype,"handleDisabledChange",1);d.define("sl-radio-button");const U=x`
    .component {
        display: flex;
        padding: var(--sl-spacing-2x-large);
        border: 1px solid var(--theme-border-color);
        border-radius: var(--sl-border-radius-large);
        background-color: rgba(255, 255, 255, 0.7);
        flex-direction: column;
        position: relative;
    }

    product-collection {
        margin-top: 0;
    }

    h3 {
        font-size: 20px;
        font-family: var(--header-font);
        font-weight: var(--sl-font-weight-semibold);
        text-align: center;
    }
    
    .view-all-text {
        top: var(--sl-spacing-x-small);
        width: fit-content;
        align-self: center;
    }

    .view-all-text::part(base) {
        font-weight: normal;
    }

    .view-all-anchor {
        display: flex;
        justify-content: center;
    }

    .view-more-text {
        position: absolute;
        top: 20px;
        right: 2%;
    }

    .view-more-text::part(label) {
        font-weight: normal;
    }

    .header {
        display: flex;
        position: relative;
        margin-top: -20px;
        width: 92%;
        justify-content: space-between;
        align-self: center;
    }

    .button-group {
        top: 24px;
        position: relative;
    }

    .button-group::part(base) {
        display: flex;
        gap: var(--sl-spacing-small);
    }

    .category-button::part(base) {
        border-radius: 20px;
        background-color: #F3F3F3C2;
        font-weight: normal;
        border-color: #0000000F;
        transition: all 0.2s ease-in-out;
    }

    .category-button::part(base):hover {
        background-color: var(--sl-color-primary-500);
    }

    .category-button::part(label) {
        font-size: var(--sl-font-size-x-small);
        color: black;
    }

    .category-button:hover::part(label) {
        color: white;
    }

    .checked-button::part(base) {
        background-color: var(--sl-color-primary-600);
    }

    .checked-button::part(label) {
        color: white;
    }

    .main-title {
        font-size: 20px;
        position: relative;
        top: 20px;
        height: 68px;
    }
    

    .button-group::part(button-group__base) {
        gap: 12px;
    }

    @media (prefers-color-scheme: dark) {
        .component {
            background-color: rgba(255, 255, 255, 0.0512);
        }

        .category-button::part(base) {
            border-radius: 20px;
            background-color: #FFFFFF0F;
            font-weight: normal;
            border-color: #0000000F;
            transition: background-color 0.2s ease-in-out;
        }

        .category-button::part(base):hover {
            background-color: #a5daff;
        }

        .category-button::part(label) {
            color: white;
        }

        .category-button::part(label):hover {
            color: black;
        }

        .checked-button::part(base) {
            background-color: var(--theme-secondary-element-color);
        }

        .checked-button::part(label) {
            color: black !important;
        }
    }

    ${g(v.xl-170)} {
        .view-more-text {
            right: 0%;
        }
    }

    ${g(v.md-100)} {
        .view-more-text {
            right: 2%;
        }
    }

    ${g(v.sm)} {
        .header {
            flex-direction: column;
            flex-wrap: wrap;
        }

        .button-group {
            position: relative;
            top: 0;
            right: 0;
            margin: 0 auto;
            padding: 0 0 var(--sl-spacing-3x-large) 0;
        }

        .main-title {
            margin: 0 auto;
            left: 0;
        }

        .module-divider {
            display: none;
        }

        .component {
            overflow-x: hidden;
        }

        .view-more-text {
            position: relative;
            right: 0;
            top: 0;
            width: fit-content;
        }

        .view-more-container {
            display: flex;
            justify-content: center;
            overflow: hidden;
            height: 50px;
            align-items: center;
        }
    }

    ${g(v.sm-150)} {
        .mobile-component-hide {
            border: none;
            background-color: transparent;
            padding-left: 0;
            padding-right: 0;
        }
    }
`;var j=Object.defineProperty,W=Object.getOwnPropertyDescriptor,h=(t,o,e,i)=>{for(var r=i>1?void 0:i?W(o,e):o,f=t.length-1,n;f>=0;f--)(n=t[f])&&(r=(i?n(o,e,r):n(r))||r);return i&&r&&j(o,e,r),r};let c=class extends G{constructor(){super(...arguments),this.componentSize="big",this.apps=null,this.games=null,this.movies=null,this.category="apps",this.windowWidth=0,this.gridContainerRef=E(),this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.windowWidth=window.innerWidth}),this.resizeObserver.observe(document.body)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}updated(t){super.updated(t),(t.has("apps")||t.has("games")||t.has("movies"))&&this.fetchProducts(this.category,!1),t.has("category")&&this.fetchProducts(this.category,!0)}fetchProducts(t,o){switch(o){case!0:t==="apps"&&this.apps?this.products=this.apps:t==="games"&&this.games?this.products=this.games:t==="movies"&&this.movies&&(this.products=this.movies);break;case!1:this.apps?this.products=this.apps:this.games?this.products=this.games:this.movies&&(this.products=this.movies);break}}changeTo(t){this.category!==t&&(this.category=t)}renderCategories(){return[this.apps,this.games,this.movies].reduce((o,e)=>e?o+1:o,0)<=1?u``:u`
            <sl-button-group class="button-group" value="1" size="small">
                ${this.renderCategory("apps",!!this.apps,1,m.get("TrendingApps.Apps"))}
                ${this.renderCategory("games",!!this.games,2,m.get("TrendingApps.Games"))}
                ${this.renderCategory("movies",!!this.movies,3,m.get("TrendingApps.Movies"))}
            </sl-button-group>
        `}renderCategory(t,o,e,i){if(!o)return u``;const r=i.toLowerCase().includes(this.category)?"checked-button":"";return u`
            <sl-button class="category-button ${r}" pill size="small" @click="${()=>this.changeTo(t)}" value="${e}"
                telemetry-event-id="ProductTypeFilterChanged"
                telemetry-data='{ "data": "${t}" }'>
                ${i}
            </sl-button>
        `}render(){return this.showTitle=!0,this.componentSize==="big"?u`
                <div class="component" ${this.isMobile?"mobile-component-hide":""} ${w(this.gridContainerRef)}>
                    <div class="header">
                        <div class="main-title">
                            ${this.renderComponentTitle()}
                        </div>
                        ${this.renderCategories()}
                    </div>
                    <div class="module-divider"></div>
                    <product-collection card-appearance="trending" .products=${this.products} max-product-count=${this.windowWidth<=1429?8:9} wrap="wrap" direction="row" infinite-scroll="none"></product-collection>
                </div>
            `:u`
            <div class="component ${this.isMobile?"mobile-component-hide":""}" ${w(this.gridContainerRef)}>
                <div class="header">
                    <div class="main-title">
                        ${this.renderComponentTitle()}
                    </div>
                </div>
                <div class="module-divider"></div>
                <product-collection card-appearance="top-list" .products=${this.products} max-product-count="6" wrap="wrap" direction="row" infinite-scroll="none"></product-collection>
            </div>
        `}renderComponentTitle(){if(this.seeAllUrl=this.products?.collectionLink||"",this.titleOverride)return this.renderTitle(!0,this.titleOverride);if(this.collectionName)return this.renderTitle(!0,this.collectionName);if(!this.products?.isLoading)switch(this.category){case"apps":return this.renderTitle(!0,m.getFormatted("TrendingApps.TopApps"));case"games":return this.renderTitle(!0,m.getFormatted("TrendingApps.TopGames"));case"movies":return this.renderTitle(!0,m.getFormatted("TrendingApps.TopMovies"))}return u``}};c.styles=[B,U,D];h([a({attribute:"component-size"})],c.prototype,"componentSize",2);h([a({type:Object})],c.prototype,"apps",2);h([a({type:Object})],c.prototype,"games",2);h([a({type:Object})],c.prototype,"movies",2);h([a({attribute:"category"})],c.prototype,"category",2);h([b()],c.prototype,"products",2);h([b()],c.prototype,"windowWidth",2);c=h([I("trending-collection")],c);export{c as TrendingCollection};
