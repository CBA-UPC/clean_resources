import{i as k,E as w,J as o,n as l,F as C,N as $,x as c,G as _,a4 as z,K as x,r as d,L as f,a2 as T,H as V,O as E,l as r,s as L,b as N,a as B,t as P}from"./index-64e4e9e7.js";import{o as U}from"./product-collection-7797e90b.js";import{f as M,S as H,d as A,l as O}from"./auto-complete-app-search-1bd0a416.js";import{S as q}from"./chunk.HDLULROG-961dc698.js";import{s as j}from"./chunk.RK73WSZS-e061cb19.js";import{s as F,g as S}from"./chunk.H437TPPF-d2f2afca.js";import{s as I,a as D,w as R}from"./chunk.KRRLOROJ-68edf51b.js";import"./chunk.OHYIWJSO-da1f282c.js";import"./repeat-632d6c35.js";import"./style-map-69b34fe6.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-5d5da084.js";import"./image-helper-5b969ca1.js";import"./nav-bar-8584c4e6.js";var G=k`
  ${w}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,y=class extends C{constructor(){super(...arguments),this.localize=new $(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return c`
      <span
        part="base"
        class=${_({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?c`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};y.styles=G;y.dependencies={"sl-icon-button":q};o([l({reflect:!0})],y.prototype,"variant",2);o([l({reflect:!0})],y.prototype,"size",2);o([l({type:Boolean,reflect:!0})],y.prototype,"pill",2);o([l({type:Boolean})],y.prototype,"removable",2);var K=k`
  ${w}
  ${M}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,s=class extends C{constructor(){super(...arguments),this.formControlController=new T(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new V(this,"help-text","label"),this.localize=new $(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>c`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,i=t.closest(".select__clear")!==null,a=t.closest("sl-icon-button")!==null;if(!(i||a)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const n=this.getAllOptions(),g=n.indexOf(this.currentOption);let m=Math.max(0,g);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(m=g+1,m>n.length-1&&(m=0)):e.key==="ArrowUp"?(m=g-1,m<0&&(m=n.length-1)):e.key==="Home"?m=0:e.key==="End"&&(m=n.length-1),this.setCurrentOption(n[m])}if(e.key.length===1||e.key==="Backspace"){const n=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const g of n)if(g.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(g);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const i=e.composedPath().some(a=>a instanceof Element&&a.tagName.toLowerCase()==="sl-icon-button");this.disabled||i||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const i=e.target.closest("sl-option"),a=this.value;i&&!i.disabled&&(this.multiple?this.toggleOptionSelection(i):this.setSelectedOptions(i),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],i=[];customElements.get("sl-option")?(e.forEach(a=>i.push(a.value)),this.setSelectedOptions(e.filter(a=>t.includes(a.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(i=>{i.current=!1,i.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(a=>a.selected=!1),i.length&&i.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i,a;this.selectedOptions=this.getAllOptions().filter(n=>n.selected),this.multiple?(this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(a=(i=this.selectedOptions[0])==null?void 0:i.getTextLabel())!=null?a:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(e,t);return c`<div @sl-remove=${a=>this.handleTagRemove(a,e)}>
          ${typeof i=="string"?U(i):i}
        </div>`}else if(t===this.maxOptionsVisible)return c`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return c``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(i=>t.includes(i.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await I(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=S(this,"select.show",{dir:this.localize.dir()});await D(this.popup.popup,e,t),this.currentOption&&j(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await I(this);const{keyframes:e,options:t}=S(this,"select.hide",{dir:this.localize.dir()});await D(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,R(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,R(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,a=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&this.value.length>0,g=this.placeholder&&this.value.length===0;return c`
      <div
        part="form-control"
        class=${_({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":a})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${_({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":g,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?c`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${n?c`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};s.styles=K;s.dependencies={"sl-icon":z,"sl-popup":H,"sl-tag":y};o([x(".select")],s.prototype,"popup",2);o([x(".select__combobox")],s.prototype,"combobox",2);o([x(".select__display-input")],s.prototype,"displayInput",2);o([x(".select__value-input")],s.prototype,"valueInput",2);o([x(".select__listbox")],s.prototype,"listbox",2);o([d()],s.prototype,"hasFocus",2);o([d()],s.prototype,"displayLabel",2);o([d()],s.prototype,"currentOption",2);o([d()],s.prototype,"selectedOptions",2);o([l()],s.prototype,"name",2);o([l({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],s.prototype,"value",2);o([A()],s.prototype,"defaultValue",2);o([l({reflect:!0})],s.prototype,"size",2);o([l()],s.prototype,"placeholder",2);o([l({type:Boolean,reflect:!0})],s.prototype,"multiple",2);o([l({attribute:"max-options-visible",type:Number})],s.prototype,"maxOptionsVisible",2);o([l({type:Boolean,reflect:!0})],s.prototype,"disabled",2);o([l({type:Boolean})],s.prototype,"clearable",2);o([l({type:Boolean,reflect:!0})],s.prototype,"open",2);o([l({type:Boolean})],s.prototype,"hoist",2);o([l({type:Boolean,reflect:!0})],s.prototype,"filled",2);o([l({type:Boolean,reflect:!0})],s.prototype,"pill",2);o([l()],s.prototype,"label",2);o([l({reflect:!0})],s.prototype,"placement",2);o([l({attribute:"help-text"})],s.prototype,"helpText",2);o([l({reflect:!0})],s.prototype,"form",2);o([l({type:Boolean,reflect:!0})],s.prototype,"required",2);o([l()],s.prototype,"getTag",2);o([f("disabled",{waitUntilFirstUpdate:!0})],s.prototype,"handleDisabledChange",1);o([f("value",{waitUntilFirstUpdate:!0})],s.prototype,"handleValueChange",1);o([f("open",{waitUntilFirstUpdate:!0})],s.prototype,"handleOpenChange",1);F("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});F("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});s.define("sl-select");var J=k`
  ${w}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,v=class extends C{constructor(){super(...arguments),this.localize=new $(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return c`
      <div
        part="base"
        class=${_({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};v.styles=J;v.dependencies={"sl-icon":z};o([x(".option__label")],v.prototype,"defaultSlot",2);o([d()],v.prototype,"current",2);o([d()],v.prototype,"selected",2);o([d()],v.prototype,"hasHover",2);o([l({reflect:!0})],v.prototype,"value",2);o([l({type:Boolean,reflect:!0})],v.prototype,"disabled",2);o([f("disabled")],v.prototype,"handleDisabledChange",1);o([f("selected")],v.prototype,"handleSelectedChange",1);o([f("value")],v.prototype,"handleValueChange",1);v.define("sl-option");var W=k`
  ${w}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,h=class extends C{constructor(){super(...arguments),this.formControlController=new T(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return c`
      <label
        part="base"
        class=${_({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${E(this.value)}
          .indeterminate=${O(this.indeterminate)}
          .checked=${O(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?c`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?c`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};h.styles=W;h.dependencies={"sl-icon":z};o([x('input[type="checkbox"]')],h.prototype,"input",2);o([d()],h.prototype,"hasFocus",2);o([l()],h.prototype,"title",2);o([l()],h.prototype,"name",2);o([l()],h.prototype,"value",2);o([l({reflect:!0})],h.prototype,"size",2);o([l({type:Boolean,reflect:!0})],h.prototype,"disabled",2);o([l({type:Boolean,reflect:!0})],h.prototype,"checked",2);o([l({type:Boolean,reflect:!0})],h.prototype,"indeterminate",2);o([A("checked")],h.prototype,"defaultChecked",2);o([l({reflect:!0})],h.prototype,"form",2);o([l({type:Boolean,reflect:!0})],h.prototype,"required",2);o([f("disabled",{waitUntilFirstUpdate:!0})],h.prototype,"handleDisabledChange",1);o([f(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],h.prototype,"handleStateChange",1);h.define("sl-checkbox");const Q=k`

    .row-margin {
    }

    .toggle-text::part(base) {
        font-size: var(--sl-font-size-small);
        --thumb-size: 16px;
    }

    #toggle-subtext {
        font-size: var(--sl-font-size-x-small);
        font-weight: var(--sl-font-weight-light);
    }

    .subheading {
        margin: 0;
        font-size: var(--sl-font-size-small);
    }

    .dialog-overview-report::part(header) {
        display: none;
    }

    .dialog-overview-report::part(body) {
        padding: 0px;
    }

    .dialog-overview-report::part(panel) {
        border-radius: var(--sl-border-radius-large);
    }
    
    .optional-information {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .dialog-container {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .dialog-content {
        display: flex;
        flex-direction: column;
        margin-top: 8px;
    }
    
    .dialog-wrapper {
        justify-content: start;
    }

    .dialog-wrapper .header {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .header .report-product-icon {
        border-radius: var(--sl-border-radius-medium);
    }

    .product-text .product-text-header {
        font-weight: var(--sl-font-weight-semibold);
        font-size: var(--sl-font-size-large);
        margin-top: 0px;
    }

    .product-text-header {
        margin-bottom: 0px;
    }

    .report-dropdown {
        position: relative
    }

    .report-dropdown p {
        font-size: var(--sl-font-size-small);
        margin-bottom: 8px;
    }

    .report-dropdown sl-select::part(form-control-label) {
        margin-bottom: 16px;
        font-size: var(--sl-font-size-small);
    }


    .shoelace-dropdown::part(base):hover {
        background-color: var(--sl-color-neutral-50) !important;
        border-color: var(--sl-color-neutral-200) !important;
    }

    .shoelace-dropdown::part(label):hover {
        color: var(--sl-color-neutral-1000) !important;
    }

    .dropdown-menu {
        width: 100%;
    }

    .optional-info-container{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .menu-item-subheader {
        padding: 0px 16px 4px 28px;
        font-family: var(--body-font);
        color: #0000009B;
    }

    .menu-item-category::part(label) {
        font-size: var(--sl-font-size-x-small);
        font-weight: var(--sl-font-weight-light);
    }

    .menu-item::part(label) {
        font-size: var(--sl-font-size-small);
        font-weight: var(--sl-font-weight-normal);
        font-family: var(--body-font);
    }

    .menu-item::part(base) {
        padding: 4px 16px 4px 16px;
    }

    .report-textarea p {
        font-family: var(--body-font);
        font-size: var(--sl-font-size-small);
        margin-bottom: 4px;
    }

    .report-textarea textarea {
        width: -webkit-fill-available;
        font-family: var(--body-font);
        margin-top: 16px;
        height: 75px;
        border: none;
        border-radius: var(--sl-border-radius-small);
        box-shadow: 0px 2px 0px var(--sl-color-neutral-300);
        background-color: var(--sl-color-neutral-100);
        padding: 8px;
        resize: none;
    }

    .report-textarea textarea::-webkit-scrollbar {
        height: 0;
        width: 0;
    }

    .report-textarea textarea:focus-visible {
        outline: none;
        border-bottom: solid 1px var(--theme-secondary-element-color);
    }

    .max-word-count p {
        margin: 0 !important;
    }

    .user-info-input {
        display: flex;
        flex-direction: row;
        gap: 16px;
        margin-top: 16px;
    }

    .user-info-input sl-input::part(input) {
        width: 100% !important;
    }

    .div-container {
        padding:  0px var(--sl-spacing-x-large);
    }

    .gov-violation-close-btn {
        display: flex;
        flex-direction: row;
        gap: 8px;
        margin: 24px 0px;
    }  

    .report-buttons {
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: space-between;
    }

    .copy-link {
        display: flex;
        flex-direction: row;
    }

    .copy-link sl-input {
        flex-basis: 100%;
    }  


    .gov-violation-close-btn sl-button, .report-buttons sl-button {
        width: 100%;
        height: auto !important;
    }

    .gov-violation-close-btn sl-button::part(base), .report-buttons sl-button::part(base) {
        width: 100%;
        height: 36px;
        align-items: center;
        border-radius: var(--sl-border-radius-large);
    }

    .report-buttons sl-button {
        max-width: 214px;
    }

    .cancel-btn::part(label) {
        color: var(--sl-color-neutral-1000) !important;
    }

    .cancel-btn::part(base):hover {
        background-color: var(--sl-color-neutral-50) !important;
        border-color: var(--sl-color-neutral-200) !important;
    }

    .cancel-btn::part(label):hover {
        color: var(--sl-color-neutral-1000) !important;
    }

    .submit-btn::part(base) {
        background-color: var(--theme-secondary-element-color) !important;
        
    }

    .submit-btn::part(label) {
        color: var(--sl-color-neutral-0) !important;
    }

    .submit-btn::part(base):hover {
        border-color: var(--sl-color-neutral-200) !important;
        opacity: 0.8;
    }

    .submit-btn::part(label):hover {
        color: var(--sl-color-neutral-0) !important;
    }

    sl-button::part(base) {
        min-height: 0;
        width: fit-content;
        font-weight: normal;
        line-height: 20px;
    }

    sl-button::part(label) {
        padding: 0;
        max-width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
    }


    @media (prefers-color-scheme: dark) {

        sl-card::part(header) {
            border-color: #FFFFFF15 !important;
        }

        sl-button::part(label) {
            color: var(--theme-secondary-element-color) !important;
        }

        sl-button::part(label):hover {
            color: var(--theme-secondary-element-hover-color) !important;
        }

        sl-divider {
            --color: #FFFFFF15 !important;
        }

        .menu-item-subheader {
            color: #FFFFFFC8;
        }
    }

    @media (prefers-color-scheme: light) {
        .submit-btn::part(base) {
            background-color: var(--theme-primary-element-color) !important;
        }
        .report-textarea textarea:focus-visible {
            outline: none;
            border-bottom: solid 1px var(--theme-primary-element-color);
        }

    }
`;class p{}p.HateSpeech={text:r.get("ReportContent.HateSpeech"),categoryNumber:-1};p.BullyingAndHarassment={text:r.get("ReportContent.BullyingAndHarassment"),categoryNumber:10};p.CoordinateOfHarm={text:r.get("ReportContent.CoordinateOfHarm"),categoryNumber:17};p.GraphicViolenceAndGore={text:r.get("ReportContent.GraphicViolenceAndGore"),categoryNumber:11};p.Grooming={text:r.get("ReportContent.Grooming"),categoryNumber:2};p.HateSpeechAndDiscrimination={text:r.get("ReportContent.HateSpeechAndDiscrimination"),categoryNumber:13};p.SexualContent={text:r.get("ReportContent.SexualContent"),categoryNumber:-1};p.SexualSolicitation={text:r.get("ReportContent.SexualSolicitation"),categoryNumber:15};p.ThreateningViolence={text:r.get("ReportContent.ThreateningViolence"),categoryNumber:-1};p.SuicideAndSelfInjury={text:r.get("ReportContent.SuicideAndSelfInjury"),categoryNumber:14};p.OffensiveContent={text:r.get("ReportContent.Offensive"),categoryNumber:1};p.TerrorismAndViolentExtremism={text:r.get("ReportContent.TerrorismAndViolentExtremism"),categoryNumber:16};p.Trafficking={text:r.get("ReportContent.Trafficking"),categoryNumber:19};p.ViolentThreadsIncitementAndGlorificationOfViolence={text:r.get("ReportContent.ViolentThreatsIncitementAndGlorificationOfViolence"),categoryNumber:18};p.Spam={text:r.get("ReportContent.Spam"),categoryNumber:-1};p.SpamOrAdvertising={text:r.get("ReportContent.SpamOrAdvertising"),categoryNumber:8};p.Profanity={text:r.get("ReportContent.Profanity"),categoryNumber:9};p.GovernmentViolation={text:r.get("ReportContent.GovernmentViolation"),categoryNumber:0};p.GovernmentOrder={text:r.get("ReportContent.GovernmentOrder"),categoryNumber:0};var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,b=(e,t,i,a)=>{for(var n=a>1?void 0:a?Y(t,i):t,g=e.length-1,m;g>=0;g--)(m=e[g])&&(n=(a?m(t,i,n):m(n))||n);return a&&n&&X(t,i,n),n};let u=class extends L{constructor(){super(...arguments),this.review=null,this.reviewUrl="",this.productId="",this.dialogOpen=!1,this.showReportDialog=!1,this.selectedIndex=0,this.reportReason="",this.reportDescription="",this.userName="",this.userEmail="",this.showMenu=!0,this.showTextArea=!1,this.showUserTextInput=!1}updated(e){if(e.has("dialogOpen")){const t=this.shadowRoot?.querySelector(".dialog-overview-report");this.dialogOpen?t.show():t.hide()}}closeReportDialog(){const e=new CustomEvent("report-dialog-close");window.dispatchEvent(e)}handleReportDescInput(e){this.reportDescription=e.target.value}updateUserName(e){this.userName=e.target.value}updateUserEmail(e){this.userEmail=e.target.value}renderDropdownItem(e,t){return c`
                <sl-option @click=${()=>this.handleReportItemClick(e,t)}>
                    ${e}
                </sl-option>
            `}handleReportItemClick(e,t){this.reportReason=e,this.showMenu=!1,this.selectedIndex=t}renderMenuItems(e,t){return this.reviewUrl===""&&e.categoryNumber===0?c``:t===0||t===6||t===8||t===14||t===17?t!==0?c`
                    <sl-divider class="subheader-divider"></sl-divider>
                    <div class="menu-item-category menu-item-subheader" >
                        <small>
                            ${e.text}
                        </small>
                    </div>
            `:c`
                <div class="menu-item-category menu-item-subheader" >
                    <small>
                        ${e.text}
                    </small>
                </div>
            `:c`
            <sl-option class="menu-item" @keydown="${i=>this.handleTab(i)}" value=${e.text.replaceAll(" ","_")} @click=${()=>this.handleReportItemClick(e.text,e.categoryNumber)}>
                ${e.text}
            </sl-option>
        `}handleSubmitClick(){if(this.review?.reviewId){const e=!!this.userEmail;N.postReportedReview(this.productId,this.review.reviewId,this.selectedIndex,this.reportDescription,this.userName,this.userEmail,e)}this.closeReportDialog()}handleCopyClick(){this.reviewUrl&&navigator.clipboard.writeText(this.reviewUrl)}renderOptionalInformation(){return this.reportReason!==r.get("ReportContent.GovernmentOrder")?c`
                <div class="optional-information">
                    <p class="subheading row-margin">${r.get("RatingReview.OptionalInformation")}</p>
                    <div class="report-textarea">
                        <sl-checkbox class="row-margin toggle-text" @keydown=${e=>this.handleEnter(e)} @sl-change=${()=>this.showTextArea=!this.showTextArea}>${r.get("RatingReview.AdditionalInfo")}
                        
                        </sl-checkbox>
                        <div class="${this.showTextArea?"":"d-none"}">
                            <textarea class="row-margin" @input="${this.handleReportDescInput}" maxlength=${500} placeholder=${r.get("ProductDetails.ReportTextAreaPlaceholder")}>${this.reportDescription}</textarea>
                            <span class="${this.reportDescription.length<400?"d-none":""} max-word-count">
                                <p>${this.reportDescription.length}/500</p>
                            </span>
                        </div>
                    </div>
                    <div class="user-input">
                        <div class="row-margin">
                            <sl-checkbox class="toggle-text" @keydown=${e=>this.handleEnter(e)} @sl-change=${()=>this.showUserTextInput=!this.showUserTextInput}>${r.get("RatingReview.ReceiveEmail")}</sl-checkbox>
                        </div>
                        <div class="user-info-input row-margin ${this.showUserTextInput?"":"d-none"}">
                            <sl-input @input=${this.updateUserEmail} type="email" placeholder=${r.get("RatingReview.EmailPlaceholder")}></sl-input>
                            <sl-input @input=${this.updateUserName} placeholder=${r.get("RatingReview.FullNamePlaceholder")}></sl-input>
                        </div>
                    </div>
                </div>
                <div class="report-buttons">
                    <sl-button 
                    class="submit-btn" 
                    ?disabled=${!this.reportReason} 
                    @click=${this.handleSubmitClick}
                    telemetry-event-id="ReviewReportedClicked"
                    telemetry-data = '{"concernCategory": "${this.selectedIndex}", "reviewId": "${this.review?.reviewId}", "productId": "${this.productId}", "reportDescription": "${this.reportDescription}", "userEmail": "${this.userEmail}", "userName": "${this.userName}"}'
                    >${r.get("ProductDetails.Submit")}</sl-button>
                    <sl-button class="cancel-btn" @click=${this.closeReportDialog}>${r.get("NavigationBar.Cancel")}</sl-button>
                </div>
            `:c`
            <div class="row-margin">
                <div class="copy-link">
                    <sl-input placeholder=${this.reviewUrl??""} size="small" filled readonly> </sl-input>
                    <sl-icon-button name="copy" @click=${()=>this.handleCopyClick()}></sl-icon-button>
                </div>
                
                <div class="gov-violation-close-btn">
                    <sl-button class="cancel-btn" @click=${this.closeReportDialog}>${r.get("NavigationBar.Cancel")}</sl-button>
                </div>
            </div>
        `}handleTab(e){e.key==="Tab"&&(this.showMenu=!1)}handleEnter(e){e.key==="Enter"&&e.target.click()}render(){const e=Object.values(p);return c`
            <sl-dialog class="dialog-overview-report" @sl-request-close=${this.closeReportDialog}>
            <div class="dialog-wrapper">
                <div class="dialog-container">
                    <div class="header">
                        <div class="product-text">
                            <p class="product-text-header">${r.get("RatingReview.ReportReview")}</p>
                        </div>
                    </div>
                    <div class="info-container">
                        <div class="report-dropdown row-margin">
                            <sl-select class="dropdown-menu" ?open=${this.showMenu} @sl-after-show="${()=>this.showMenu=!0}" size="medium" placeholder=${r.get("ReportContent.Reason")} label=${r.get("ProductDetails.PotentialViolation")}>
                                ${e.map((t,i)=>this.renderMenuItems(t,i))}
                            </sl-select>
                        </div>
                        ${this.renderOptionalInformation()}
                    </div>
                </div>
            </div>

            </sl-dialog> 
        `}};u.styles=[B,Q];b([l({type:Object})],u.prototype,"review",2);b([l({attribute:"review-url"})],u.prototype,"reviewUrl",2);b([l({attribute:"product-id"})],u.prototype,"productId",2);b([l({type:Boolean,attribute:"dialog-open"})],u.prototype,"dialogOpen",2);b([d()],u.prototype,"showReportDialog",2);b([d()],u.prototype,"selectedIndex",2);b([d()],u.prototype,"reportReason",2);b([d()],u.prototype,"reportDescription",2);b([d()],u.prototype,"userName",2);b([d()],u.prototype,"userEmail",2);b([d()],u.prototype,"showMenu",2);b([d()],u.prototype,"showTextArea",2);b([d()],u.prototype,"showUserTextInput",2);u=b([P("report-dialog")],u);export{u as ReportDialog};
