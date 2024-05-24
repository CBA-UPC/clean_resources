<H1>Too Many Request</H1>ml as n}from"https://cdn.jsdelivr.net/gh/lit/dist@2.6.0/all/lit-all.min.js";import{Icon as a}from"https://cdn.jsdelivr.net/npm/@appmate/wishlist@4.20.4/components/icon.js";var o=class extends r{constructor(){super();this.icon="caret"}render(){if(!this.option)return;let e=`options[${this.option.name}]`,t=`${this.id}-select`;return n`
      <div class="wk-option-select">
        <label class="wk-label" for=${t}>${this.option.name}</label>
        <div class="wk-control">
          <select id=${t} class="wk-input" name=${e}>
            ${this.option.values.map(i=>{var s;return n`
                <option
                  value=${i}
                  ?selected=${i===((s=this.option)==null?void 0:s.selectedValue)}
                >
                  ${i}
                </option>
              `})}
          </select>
          <div class="wk-content">
            <div class="wk-text">
              ${this.option.selectedValue||this.option.name}
            </div>
            <wk-icon class="wk-icon" icon=${this.icon}></wk-icon>
          </div>
        </div>
      </div>
    `}updated(e){var t;super.updated(e),e.has("option")&&this.classList.toggle("wk-single-option",((t=this.option)==null?void 0:t.values.length)===1)}createRenderRoot(){return this}};o.properties={icon:{type:String},option:{type:Object}};a.addIcons({caret:`
    <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6" />
    </svg>
  `});customElements.get("wk-option-select")||customElements.define("wk-option-select",o);export{o as OptionSelect};
