import{i as m,E as w,J as o,K as y,n as c,L as p,F as x,N as P,x as g,O as z,s as k,l as T,a as C,t as $}from"./index-64e4e9e7.js";import{s as F}from"./spacing.styles-3217686a.js";import"./auto-complete-app-search-1bd0a416.js";import{c as v}from"./chunk.HF7GESMZ-7c1083f0.js";import"./chunk.MA3AIOTI-1dba8e8d.js";import"./chunk.HDLULROG-961dc698.js";import"./repeat-632d6c35.js";import"./style-map-69b34fe6.js";import"./chunk.RK73WSZS-e061cb19.js";const S=m`
    .desktop {
        background-image: url("/assets/icons/play-board-background.jpg");
        background-size: contain;
        width: 1400px;
        height: 935px;
        margin-right: auto;
        margin-left: auto;
    }

    sl-split-panel {
        height: 100%;
    }

    sl-split-panel::part(divider) {
        background-color: rgba(255, 255, 255, 0);
    }

    .widgets-sidebar {
        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(40px);
        border-radius: var(--sl-border-radius-large);
        margin: var(--sl-spacing-medium) 0 57px var(--sl-spacing-medium);
        box-shadow: 5px 5px 8px rgba(100, 100, 100, 0.2);
    }

    sl-tab-group {
        margin-top: 30px;
        font-size: var(--sl-font-size-x-small);
        --track-color: transparent;
    }

    sl-tab[aria-selected="true"] {
        background-color: rgba(255, 255, 255, 0.4);
    }

    sl-tab sl-icon {
        font-size: 20px;
    }

    sl-tab-panel {
        max-height: 822px;
        overflow: auto;
        scrollbar-color: #848484 transparent;
        scrollbar-width: 5px;
    }

    .semibold-heading {
        font-weight: var(--sl-title-font-weight);
    }

    .widgets-section {
        width: 33%;
    }

    .feed-section {
        width: 67%;
    }

    .widget {
        border-radius: var(--sl-border-radius-large);
        width: 100%;
    }

    .widget:first-of-type {
        background: linear-gradient(#f6f6f6, #e5f2e6);
        height: 300px;
    }

    .widget:nth-of-type(2) {
        background: linear-gradient(124.33deg, rgba(255, 255, 255, 0.03) -20.01%, rgba(101, 107, 241, 0.15) 96.49%), linear-gradient(0deg, #FFFFFF, #FFFFFF);
        height: 200px;
    }

    .widget:nth-of-type(3) {
        background: #B5AAF38C;
        height: 450px;
    }

    iframe {
        width: 100%;
        height: 950px; /* This will be adjusted to the real height of the iframe in our JS */
    }
`;var D=m`
  ${w}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function E(e,i){function s(t){const d=e.getBoundingClientRect(),l=e.ownerDocument.defaultView,n=d.left+l.scrollX,f=d.top+l.scrollY,b=t.pageX-n,u=t.pageY-f;i?.onMove&&i.onMove(b,u)}function a(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",a),i?.onStop&&i.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",a),i?.initialEvent instanceof PointerEvent&&s(i.initialEvent)}var r=class extends x{constructor(){super(...arguments),this.localize=new P(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:i}=this.getBoundingClientRect();this.size=this.vertical?i:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const i=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),E(this,{onMove:(s,a)=>{let t=this.vertical?a:s;this.primary==="end"&&(t=this.size-t),this.snap&&this.snap.split(" ").forEach(l=>{let n;l.endsWith("%")?n=this.size*(parseFloat(l)/100):n=parseFloat(l),i&&!this.vertical&&(n=this.size-n),t>=n-this.snapThreshold&&t<=n+this.snapThreshold&&(t=n)}),this.position=v(this.pixelsToPercentage(t),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let i=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(i-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(i+=s),e.key==="Home"&&(i=this.primary==="end"?100:0),e.key==="End"&&(i=this.primary==="end"?0:100),this.position=v(i,0,100)}}handleResize(e){const{width:i,height:s}=e[0].contentRect;this.size=this.vertical?s:i,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",i=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",a=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,t="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${a} var(--divider-width) ${t}`:this.style[e]=`${t} var(--divider-width) ${a}`:s&&!this.vertical?this.style[e]=`${t} var(--divider-width) ${a}`:this.style[e]=`${a} var(--divider-width) ${t}`,this.style[i]="",g`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${z(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};r.styles=D;o([y(".divider")],r.prototype,"divider",2);o([c({type:Number,reflect:!0})],r.prototype,"position",2);o([c({attribute:"position-in-pixels",type:Number})],r.prototype,"positionInPixels",2);o([c({type:Boolean,reflect:!0})],r.prototype,"vertical",2);o([c({type:Boolean,reflect:!0})],r.prototype,"disabled",2);o([c()],r.prototype,"primary",2);o([c()],r.prototype,"snap",2);o([c({type:Number,attribute:"snap-threshold"})],r.prototype,"snapThreshold",2);o([p("position")],r.prototype,"handlePositionChange",1);o([p("positionInPixels")],r.prototype,"handlePositionInPixelsChange",1);o([p("vertical")],r.prototype,"handleVerticalChange",1);r.define("sl-split-panel");var I=Object.defineProperty,R=Object.getOwnPropertyDescriptor,_=(e,i,s,a)=>{for(var t=a>1?void 0:a?R(i,s):i,d=e.length-1,l;d>=0;d--)(l=e[d])&&(t=(a?l(i,s,t):l(t))||t);return a&&t&&I(i,s,t),t};let h=class extends k{render(){return g`
            <div class="desktop">
                <!-- Split panel so that we can resize the sidebar. -->
                <sl-split-panel position="60">
                    <div slot="start" class="widgets-sidebar" style="">
                    
                        <!-- Nav panel -->
                        <sl-tab-group placement="start">
                            <sl-tab slot="nav" panel="blank">
                                <sl-icon name="menu-app"></sl-icon>
                            </sl-tab>
                            <sl-tab slot="nav" panel="blank">
                                <sl-icon name="microsoft"></sl-icon>
                            </sl-tab>
                            <sl-tab slot="nav" panel="blank">
                            <sl-icon name="briefcase"></sl-icon>
                            </sl-tab>
                            <sl-tab slot="nav" active panel="play">
                                <sl-icon name="controller"></sl-icon>
                            </sl-tab>
                            <sl-tab slot="nav" panel="blank">
                                <sl-icon name="people"></sl-icon>
                            </sl-tab>
                            <sl-tab slot="nav" panel="blank">
                                <sl-icon name="plus-square"></sl-icon>
                            </sl-tab>

                            <sl-tab-panel name="blank"></sl-tab-panel>

                            <sl-tab-panel name="play">
                                <div>
                                    <h4 class="semibold-heading mb-1">${new Intl.DateTimeFormat(T.getLocaleName(),{month:"long",day:"numeric"}).format(new Date)}</h4>
                                    <h2 class="semibold-heading mt-0">Good afternoon</h2>
                                </div>
                                <div class="d-flex w-100 gap-3">
                                    <div class="widgets-section d-flex flex-column gap-2">
                                        <h3 class="semibold-heading">Widgets</h3>
                                        <div class="widget"></div>
                                        <div class="widget"></div>
                                        <div class="widget"></div>
                                    </div>
                                    <div class="feed-section d-flex flex-column gap-2">
                                        <h3 class="semibold-heading">Play</h3>
                                        <iframe src="/play-board" title="Play board" frameborder="0" scrolling="no" @load="${this.playBoardIframeLoaded}"></iframe>
                                    </div>
                                </div>
                            </sl-tab-panel>
                            
                        </sl-tab-group>

                    </div>
                    <div slot="end">
                        <!-- Nothing here: this exists to allow the resizable divider for the first section -->
                    </div>
                </sl-split-panel>
            </div>
        `}playBoardIframeLoaded(){const e=this.shadowRoot?.querySelector("iframe");e?.contentWindow&&(e.style.height=e.contentWindow.document.documentElement.scrollHeight+"px")}};h.styles=[C,F,S];h=_([$("play-board-tester")],h);export{h as PlayBoardPage};
