(function(_ds){var window=this;var Ena=class{constructor(){this.j=0;this.g=[];this.oa=[];this.ea=this.v=0}get h(){return this.v}set h(a){0>a?a=0:a>this.g.length-1&&(a=this.g.length-1);this.v=a}set m(a){0<a&&(a=0);this.ea=a};var k1=function(a,b){a.target.dispatchEvent(new CustomEvent("scroll-nav",{bubbles:!0,composed:!0,detail:b}))},Fna=function(a){return(0,_ds.Q)`
      <style>
        .overflow-cover {
          background-color: white;
          height: 100%;
          position: absolute;
          top: 0;
          z-index: 100;
        }

        .overflow-cover.left-overflow {
          left: -360px;
          width: 360px;
        }

        .overflow-cover.right-overflow {
          right: -710px;
          width: 700px;
        }

        button.scroll-button {
          background-color: white;
          border: none;
          color: var(--scroll-button-color);
          cursor: pointer;
          display: none;
          font-family: 'Material Icons';
          /* Make these buttons take up the same vertical space as a normal full
          line of text. (since they will be sitting next to text). */
          font-size: var(--scroll-button-font-size);
          height: 100%;
          padding: 0;
          position: absolute;
          top: 0;
          z-index: 101;
        }

        button.scroll-button:hover,
        button.scroll-button:focus {
          color: var(--scroll-button-hover-color);
          outline: none;
        }

        button.scroll-button.scroll-left {
          /* Pull the left scroll button slightly behind the content so that it
          doesn't sit too close to text. */
          left: -8px;
        }

        button.scroll-button.scroll-left::after {
          content: 'chevron_left';
        }

        button.scroll-button.scroll-right {
          /* Pull the right scroll button slightly ahead of content so that it
          doesn't sit too close to text. */
          right: -8px;
        }

        button.scroll-button.scroll-right::after {
          content: 'chevron_right';
        }

        button.scroll-button.visible {
          display: block;
        }
      </style>
      <div class="overflow-cover left-overflow"></div>
      <button
        class="scroll-button scroll-left ${0<a.h?"visible":""}"
        @click="${b=>{k1(b,"left")}}"
        aria-label="${"Desplazarse a los elementos de navegaci\u00f3n anteriores"}">
      </button>
      <slot></slot>
      <button
        class="scroll-button scroll-right ${a.h<a.g.length-1?"visible":""}"
        @click="${"
        aria-label="${"Desplazarse para ver m\u00e1s elementos de navegaci\u00f3n"}">
      </button>
      <div class="overflow-cover right-overflow"></div>
    `},Gna=var l1=function(a,b,c,d,e){const {width:f}=a.getBoundingClientRect();0===f&&32>d?window.requestAnimationFrame(()=>{l1(a,b,c,d+1,e)}):32<=d?c("Exceeded max paint retries."):b(f)},Hna=function(a){return new Promise((b,c)=>{l1(a,b,c,0,32)})};var n1=async function(a,b,c){a.state.m=-b[c];a.state.h=c;await m1(a,a.state)},Ina=async function(a){await m1(a,a.state);document.body.dispatchEvent(new CustomEvent("cloud-tabs-loaded"))},m1=async function(a,b){await Jna(a,b);a.render(Fna(b),a.La)},Jna=async function(a,b){return new Promise(c=>{a.ya.style.setProperty("--scroll-offset",`${b.m}px`);window.setTimeout(250)})},Kna=class extends _ds.vN{constructor(){super();this.cloudtrack=new _ds.NA;this.element=this;this.template=Gna;this.render=
_ds.$v;this.Fa=a=>{let b=this.state.h;b+="right"===a.detail?1:-1;n1(this,this.state.g,b)};this.state=new Ena;this.ya=this.element.querySelector(".devsite-tabs-wrapper");this.ya.style.setProperty("--scroll-animation-duration","250ms");this.La=this.element.attachShadow({mode:"open"});Ina(this);this.element.querySelectorAll(".devsite-tabs-dropdown a").forEach(a=>{a.addEventListener("click",})}oa(a){super.oa(a);a.target instanceof Node&&_ds.IA(this.cloudtrack,a.target)}connectedCallback(){super.connectedCallback();
this.element.addEventListener("scroll-nav",this.Fa)}disconnectedCallback(){super.disconnectedCallback();this.element.removeEventListener("scroll-nav",this.Fa)}sync xa(){try{const a=await Hna(this.ya);if(this.state.j!==a){this.state.j=a;const b=Array.from(this.element.querySelectorAll("tab"));this.state.oa=b.map(c=>({element:c,Kl:c?c.offsetWidth:0}));this.state.g=_ds.pca(this.state.oa,this.state.j);await n1(this,this.state.g,0)}}catch(a){await n1(this,
this.state.g,0)}}};try{customElements.define("cloudx-tabs-nav",Kna)}catch(a){console.warn("devsite.app.tenants.cloud.static.components.CloudxTabsNav",a)};})(_ds_www);
