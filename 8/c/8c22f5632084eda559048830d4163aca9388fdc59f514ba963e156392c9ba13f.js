(function(_ds){var window=this;var G6=class extends _ds.E{static get observedAttributes(){return["visible"]}constructor(){super();this.eventHandler=new _ds.H}connectedCallback(){this.eventHandler.listen(document.body,"devsite-sitemask-show",()=>this.show());this.eventHandler.listen(document.body,"keydown",a=>{"Escape"===a.key&&this.hasAttribute("visible")&&(a.preventDefault(),a.stopPropagation(),this.Eb())});this.eventHandler.listen(document.body,"devsite-sitemask-hide",()=>this.Eb());this.eventHandler.listen(this,"click",()=>
this.Eb())}attributeChangedCallback(a,b,c){"visible"===a&&(null==c?this.dispatchEvent(new CustomEvent("devsite-sitemask-hidden",{bubbles:!0})):this.dispatchEvent(new CustomEvent("devsite-sitemask-visible",{bubbles:!0})))}disconnectedCallback(){_ds.I(this.eventHandler)}show(){this.setAttribute("visible",this.getAttribute("visible")||"")}Eb(){this.removeAttribute("visible")}};G6.prototype.hide=G6.prototype.Eb;G6.prototype.show=G6.prototype.show;G6.prototype.disconnectedCallback=G6.prototype.disconnectedCallback;
G6.prototype.attributeChangedCallback=G6.prototype.attributeChangedCallback;G6.prototype.connectedCallback=G6.prototype.connectedCallback;try{customElements.define("devsite-sitemask",G6)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteSitemask",a)};})(_ds_www);
y"
              aria-hidden="true"
              href=${o(this.ctaElement?.href)}
              target=${o(this.ctaElement?.target)}
              data-g-event=${o(this.ctaElement?.getAttribute("data-g-event"))}
              data-g-action=${o(this.ctaElement?.getAttribute("data-g-action"))}
              data-g-label=${o(this.ctaElement?.getAttribute("data-g-label"))}
              @click=${a=>this.handleOverlayClick(a)}
            >
              <slot></slot>
            </${e}>`:c`<slot></slot>`}
      </div>
    `}};i.styles=d(b);v([g({attribute:"overlay",reflect:!0})],i.prototype,"overlay",2);i=v([u("gws-card-wrapper")],i);
