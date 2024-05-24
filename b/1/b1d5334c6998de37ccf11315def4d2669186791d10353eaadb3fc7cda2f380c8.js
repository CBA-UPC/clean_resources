(function(_ds){var window=this;var vua=_ds.fw([':host{--mdc-line-height:var(--devsite-mdc-line-height,56px);--mdc-text-field-outlined-hover-border-color:#4e5256;--mdc-text-field-outlined-focused-border-color:var(--devsite-link-color);--mdc-text-field-outlined-focused-label-color:var(--devsite-link-color);--mdc-text-field-padding:16px;--mdc-text-field-border-radius:4px;--mdc-text-field-error-color:#d93025;--mdc-text-field-warning-color:#e37400;--mdc-text-field-icon-width:24px;--mdc-text-field-icon-height:24px;--mdc-select-dropdown-icon-color:rgba(0,0,0,tokens.$devsite-ref-opacity--alpha-54)}:host *{-moz-box-sizing:border-box;box-sizing:border-box}:host label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;position:relative;border:var(--devsite-input-border);border-radius:var(--mdc-text-field-border-radius);color:var(--devsite-input-color,var(--devsite-primary-text-color))}:host label:hover{border-color:var(--mdc-text-field-outlined-hover-border-color)}:host label:focus{outline:0}:host label.devsite-mwc--focused,:host label.devsite-mwc--focused:hover{border:1px solid var(--mdc-text-field-outlined-focused-border-color)}:host label.devsite-mwc--focused .devsite-mwc__label,:host label.devsite-mwc--focused:hover .devsite-mwc__label{color:var(--mdc-text-field-outlined-focused-label-color);font-weight:500}:host label.devsite-mwc--focused input,:host label.devsite-mwc--focused select,:host label.devsite-mwc--focused textarea,:host label.devsite-mwc--focused:hover input,:host label.devsite-mwc--focused:hover select,:host label.devsite-mwc--focused:hover textarea{border:1px solid var(--mdc-text-field-outlined-focused-border-color);border-radius:calc(var(--mdc-text-field-border-radius)/2)}:host label.devsite-mwc--invalid,:host label.devsite-mwc--invalid:hover{border-color:var(--mdc-text-field-error-color)}:host label.devsite-mwc--invalid input,:host label.devsite-mwc--invalid select,:host label.devsite-mwc--invalid textarea,:host label.devsite-mwc--invalid:hover input,:host label.devsite-mwc--invalid:hover select,:host label.devsite-mwc--invalid:hover textarea{border-color:var(--mdc-text-field-error-color)}:host label.devsite-mwc--invalid .devsite-mwc__label,:host label.devsite-mwc--invalid:hover .devsite-mwc__label{color:var(--mdc-text-field-error-color)}:host label.devsite-mwc--warning,:host label.devsite-mwc--warning:hover{border-color:var(--mdc-text-field-warning-color)}:host label.devsite-mwc--warning input,:host label.devsite-mwc--warning select,:host label.devsite-mwc--warning textarea,:host label.devsite-mwc--warning:hover input,:host label.devsite-mwc--warning:hover select,:host label.devsite-mwc--warning:hover textarea{border-color:var(--mdc-text-field-warning-color)}:host label.devsite-mwc--warning .devsite-mwc__label,:host label.devsite-mwc--warning:hover .devsite-mwc__label{color:var(--mdc-text-field-warning-color)}:host .devsite-mwc__label--required:after{-webkit-margin-start:1px;-moz-margin-start:1px;margin-inline-start:1px;-webkit-margin-end:0;-moz-margin-end:0;margin-inline-end:0;content:"*"}:host input,:host select,:host textarea{color:var(--devsite-input-color,var(--devsite-primary-text-color));background:var(--devsite-input-background);border:1px solid transparent;line-height:var(--mdc-line-height);min-height:var(--mdc-line-height);width:100%;padding-block:0;padding-inline:var(--mdc-text-field-padding);border-radius:var(--mdc-text-field-border-radius);font-family:var(--mdc-typography-subtitle1-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:var(--mdc-typography-subtitle1-font-size,1rem);font-weight:var(--mdc-typography-subtitle1-font-weight,400);letter-spacing:var(--mdc-typography-subtitle1-letter-spacing,.009375em);text-transform:var(--mdc-typography-subtitle1-text-transform,inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;margin-block:0;margin-inline:0}:host input:active,:host input:focus,:host select:active,:host select:focus,:host textarea:active,:host textarea:focus{outline:0}:host textarea{overflow-x:hidden;overflow-y:auto;-moz-box-sizing:border-box;box-sizing:border-box;resize:none;line-height:1.5em;padding-block:var(--mdc-text-field-padding);padding-inline:var(--mdc-text-field-padding)}:host .devsite-mwc__label{position:absolute;inset-block-start:50%;padding-block:0;padding-inline:0;inset-inline-start:var(--mdc-text-field-padding);-webkit-transform:translate3d(0,-50%,0) scale(1);transform:translate3d(0,-50%,0) scale(1);-webkit-transition:.15s cubic-bezier(.4,0,.2,1);transition:.15s cubic-bezier(.4,0,.2,1);-webkit-transform-origin:left center;transform-origin:left center;background:0 0;pointer-events:none}[dir=rtl] :host .devsite-mwc__label{-webkit-transform-origin:right center;transform-origin:right center}:host .devsite-mwc-text-area .devsite-mwc__label{inset-block-start:calc(13px + var(--mdc-text-field-padding))}:host .devsite-mwc-text-field__icon{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px;position:absolute;inset-inline-start:var(--mdc-text-field-padding);inset-block-start:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);pointer-events:none}:host .devsite-mwc-text-field__icon img{max-width:100%}:host .devsite-mwc-text-field--with-leading-icon input{-webkit-padding-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px);-moz-padding-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px);padding-inline-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px)}:host .devsite-mwc-text-field--with-leading-icon .devsite-mwc__label{inset-inline-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px)}:host .devsite-mwc-select__dropdown-icon{position:absolute;inset-inline-end:var(--mdc-text-field-padding);inset-block-start:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);width:10px;height:5px;pointer-events:none;fill:var(--mdc-select-dropdown-icon-color)}:host .devsite-mwc-select__dropdown-icon svg{position:absolute;width:10px;height:5px}:host .devsite-mwc-select__dropdown-icon svg .devsite-mwc-select__dropdown-icon-inactive{fill:var(--devsite-secondary-text-color)}:host .devsite-mwc-character-counter{font-size:12px;color:#5f6368;margin-block:4px;margin-inline:var(--mdc-text-field-padding)}:host .devsite-mwc--floating .devsite-mwc__label{inset-block-start:0;inset-inline-start:var(--mdc-text-field-padding);padding-block:0;padding-inline:4px;-webkit-transform:translate3d(-3px,-50%,0) scale(.75);transform:translate3d(-3px,-50%,0) scale(.75);background:var(--devsite-input-background)}']);var u6=v6=wua=function(a){return(0,_ds.Q)`
      <select aria-labelledby="label"
              class="devsite-mwc-select__input"
              .value="${(0,_ds.bJ)(a.value)}"
              ?disabled="${a.disabled}"
              ?required="${a.required}"
              ?readonly="${a.readOnly}"
              name="${_ds.aJ(""===a.name?void 0:a.name)}"
              @change="${"
              @blur="${a.j}"
              @focus="${a.v}">
        ${a.options.map(}
      </select>
      <span class="devsite-mwc-select__dropdown-icon">
        <svg class="devsite-mwc-select__dropdown-icon-graphic"
             viewBox="7 10 10 5"
             focusable="false">
          <polygon class="devsite-mwc-select__dropdown-icon-inactive"
                   stroke="none"
                   fill-rule="evenodd"
                   points="7 10 12 15 17 10">
          </polygon>
        </svg>
      </span>`},w6=class extends _ds.Hw{const a=new CustomEvent("focus");let b;null==(b=this.inputElement)||b.dispatchEvent(a);let c;null==(c=this.inputElement)||c.focus();let d;null==(d=this.Qo)||d.dispatchEvent(a);let e;null==(e=this.Qo)||e.focus();let f;null==(f=this.Un)||f.dispatchEvent(a);let g;null==(g=this.Un)||
g.focus()}nder(){switch(this.kind){case "textfield":var a=(0,_ds.Lw)({"devsite-mwc-text-field--with-leading-icon":this.icon,
"devsite-mwc--no-label":!this.label,"devsite-mwc--outlined":this.outlined,"devsite-mwc--disabled":this.disabled,"devsite-mwc--focused":this.focused,"devsite-mwc--invalid":this.invalid,"devsite-mwc--warning":this.warning,"devsite-mwc--floating":""!==this.value||this.focused}),b=u6(this),c=v6(this);var d=-1===this.minLength?void 0:this.minLength;const e=-1===this.maxLength?void 0:this.maxLength;d=(0,_ds.Q)` <input
      aria-labelledby="label"
      class="devsite-mwc-text-field__input"
      type="${this.type}"
      .value="${(0,_ds.bJ)(this.value)}"
      ?disabled="${this.disabled}"
      placeholder="${this.placeholder}"
      ?required="${this.required}"
      ?readonly="${this.readOnly}"
      minlength="${null!=d?d:_ds.mt}"
      maxlength="${null!=e?e:_ds.mt}"
      name="${_ds.aJ(""===this.name?void 0:this.name)}"
      @input="${this.h}"
      @blur="${this.j}"
      @focus="${this.v}"
      @change="${this.g}" />`;return(0,_ds.Q)`
      <label class="devsite-mwc-text-field ${a}">
        ${b} ${c}
        ${d}
      </label>
    `;case "select":a:{for(a of this.options)if(a.value.trim()===this.value.trim()){a=a.text.trim();break a}a=""}return(0,_ds.Q)`
      <label class="devsite-mwc-select ${(0,_ds.Lw)({"devsite-mwc--disabled":this.disabled,"devsite-mwc--no-label":!this.label,"devsite-mwc--outlined":this.outlined,"devsite-mwc--focused":this.focused,"devsite-mwc--invalid":this.invalid,"devsite-mwc--floating":""!==a||this.focused})}">
        ${u6(this)} ${v6(this)}
        ${wua(this)}
      </label>
    `;case "textarea":return a=(0,_ds.Lw)({"devsite-mwc--no-label":!this.label,"devsite-mwc--outlined":this.outlined,"devsite-mwc--disabled":this.disabled,"devsite-mwc--focused":this.focused,"devsite-mwc--invalid":this.invalid,"devsite-mwc--floating":""!==this.value||this.focused}),b=u6(this),c=-1===this.minLength?void 0:this.minLength,d=-1===this.maxLength?void 0:this.maxLength,c=(0,_ds.Q)`<textarea
      aria-labelledby="label"
      class="devsite-mwc-text-area__input"
      .value="${(0,_ds.bJ)(this.value)}"
      ?disabled="${this.disabled}"
      ?required="${this.required}"
      ?readonly="${this.readOnly}"
      rows="${this.rows}"
      cols="${this.cols}"
      name="${_ds.aJ(""===this.name?void 0:this.name)}"
      minlength="${null!=c?c:_ds.mt}"
      maxlength="${null!=d?d:_ds.mt}"
      @input="${this.h}"
      @blur="${this.j}"
      @focus="${this.v}"
      @change="${this.g}"></textarea>`,(0,_ds.Q)`
      <label class="devsite-mwc-text-area ${a}">
        ${b} ${c}
      </label>
      ${!this.charCounter&&this.maxLength?_ds.mt:(0,_ds.Q)`<span class="devsite-mwc-character-counter"
      >${Math.min(this.value.length,this.maxLength)} / ${this.maxLength}</span
    >`}
    `;default:return(0,_ds.Q)`<span>Invalid element type</span>`}}};_ds.u([_ds.tq("input"),_ds.v("design:type",HTMLInputElement)],w6.prototype,"inputElement",void 0);_ds.u([_ds.tq("select"),_ds.v("design:type",HTMLSelectElement)],w6.prototype,"Qo",void 0);_ds.u([_ds.tq("textarea"),_ds.v("design:type",HTMLTextAreaElement)],w6.prototype,"Un",void 0);_ds.u([_ds.J({type:Boolean}),_ds.v("design:type",Object)],w6.prototype,"readOnly",void 0);
_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],w6.prototype,"kind",void 0);_ds.u([_ds.J({type:String}),_ds.v("design:type",String)],w6.prototype,"type",void 0);_ds.u([_ds.J({type:Boolean}),_ds.v("design:type",Object)],w6.prototype,"outlined",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],w6.prototype,"required",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],w6.prototype,"warning",void 0);
_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],w6.prototype,"disabled",void 0);_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],w6.prototype,"label",void 0);_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],w6.prototype,"icon",void 0);_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],w6.prototype,"placeholder",void 0);_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],w6.prototype,"value",void 0);
_ds.u([_ds.J({type:String}),_ds.v("design:type",Object)],w6.prototype,"name",void 0);_ds.u([_ds.J({type:Boolean}),_ds.v("design:type",Object)],w6.prototype,"focused",void 0);_ds.u([_ds.J({type:Boolean,Na:!0}),_ds.v("design:type",Object)],w6.prototype,"invalid",void 0);_ds.u([_ds.J({type:Number}),_ds.v("design:type",Object)],w6.prototype,"rows",void 0);_ds.u([_ds.J({type:Number}),_ds.v("design:type",Object)],w6.prototype,"cols",void 0);
_ds.u([_ds.J({type:Number}),_ds.v("design:type",Object)],w6.prototype,"minLength",void 0);_ds.u([_ds.J({type:Number}),_ds.v("design:type",Object)],w6.prototype,"maxLength",void 0);_ds.u([_ds.J({type:Boolean}),_ds.v("design:type",Object)],w6.prototype,"charCounter",void 0);_ds.u([_ds.J({type:String,Na:!0}),_ds.v("design:type",Object)],w6.prototype,"staticPath",void 0);try{customElements.define("devsite-mwc",w6)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteMwc",a)};})(_ds_www);
