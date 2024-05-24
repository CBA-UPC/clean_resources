import{i as k,ad as R,n as v,r as h,x as l,t as x,e as A,B as b,V as y,Y as L}from"./index-ea800fad.js";import{c as g}from"./repeat-0dadc8c6.js";import{P as C,a as w}from"./product-collection-ec619889.js";import{f as $}from"./css-function-af4ff51c.js";import{o as P}from"./style-map-14544ca7.js";import"./chunk.SKOOBYPV-793496d5.js";import"./image-helper-99359f42.js";import"./nav-bar-eecd89ff.js";import"./auto-complete-app-search-88360129.js";import"./chunk.KRRLOROJ-71726c0b.js";const I=k`
    :host {
        --card-spacing: 15px;
        --card-width: ${R("100%","var(--card-spacing)","var(--collection-group-num)")};
    }

    sl-carousel::part(base) {
        gap: 0;
    }

    .carousel-container {
        position: relative;

    }

    .carousel-container:hover,
    .carousel-container:focus-within{
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

    .carousel {
        min-height: 300px;
        max-height: 600px;
        z-index: 1;
        display:grid;
        grid-auto-flow: column;
        grid-auto-columns:calc((100% - (var(--collection-reel-group-num) - 1)*var(--card-spacing))/var(--collection-reel-group-num));
        grid-gap:var(--card-spacing);
        width: 100%;
        overflow:auto;
    }

    /* .carousel::-webkit-scrollbar {
        height: 0;
    } */

    .collection-reel-container {
        width: 100%;
        position: relative;
    }

    .carousel-item{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        border-radius:7px;
        box-shadow: var(--sl-shadow-large);
        background-color: var(--sl-color-neutral-50);
        scroll-snap-align: start;
        scroll-snap-stop: normal;
        transition: all var(--sl-transition-fast) ease-out;
    }

    .collection-reel {
        height: 100%;
        width: 100%;
        overflow-y: hidden;
    }

    .carousel-item:hover{
        box-shadow: var(--sl-shadow-large);
        transform: translateY(-2px);
        background-color: var(--theme-card-hover-background-color);
    }

    .collection-reel:focus-visible {
        border-radius:8px;

    }


`,E=k`

    :root {
        --row-height: 200px;
    }

    :host {
        --gameTranslateY: 0;
        --appTranslateY: 0;
    }

    .reel-skeleton {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 20px;
    }

    .skeleton-wrapper {
        padding-bottom: 20px;
    }

    .collection-reel-header-skeleton {
        width: 50%;
    }

    .collection-reel-header-skeleton::part(indicator) {
        height: var(--sl-font-size-small);
    }

    .collection-reel-subheader-skeleton {
        width: 75%;
    }

    .collection-reel-subheader-skeleton::part(indicator) {
        height: var(--sl-font-size-x-large);
    }

    .collection-reel-skeleton-container {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }

    .collection-reel-skeleton {
        aspect-ratio: 336 / 636;
        width: 100%;
        height: auto; 
        --border-radius: var(--sl-border-radius-medium);
    }

    .card-container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 20px;
        width: 100%;
        height: 100%;
        text-decoration: none;
    }

    .card-container:hover {
        cursor: pointer;
    }

    .collection-card {
        display: flex;
        gap: 4px;
        flex-direction: row;
        width: 100%;
        aspect-ratio: 3.2 / 2;
        overflow: hidden;
    }

    .card-header {
        padding-bottom: 20px;
        font-weight: var(--sl-font-weight-semibold);
    }

    .card-header p {
        font-size: var(--sl-font-size-large);
        color: var(--sl-color-neutral-1000);
        margin: 0 ;
    }

    .card-header .collection-title {
        font-size: var(--sl-font-size-x-small);
        color: var(--theme-tall-tile-font-color);
        text-transform: uppercase;
        margin: 0;
    }

    .product-poster-image {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .product-poster-image-blur {
        position: relative;
        width: 100%;
    }

    .blur {
        aspect-ratio: 464 / 636;
        width: 100%;
        height: auto; 
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        margin-bottom: 4px;
    }

    .blurred-bg {
        position: absolute;
        inset: 0;
        --filter-blur-params: blur(40px) saturate(5);
        ${$("var(--filter-blur-params)")}
        background-blend-mode: luminosity, overlay, normal;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100% 100%;
    }

    .product-poster-image-blur .gradual-blur {
        position: absolute;
        inset: 0;
        transform: scale(1.5);
        --filter-blur-params: blur(40px) saturate(5);
        ${$("var(--filter-blur-params)")}
        background-blend-mode: luminosity, overlay, normal;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100% 100%;
    }

    .blurred-product-image {
        position: absolute;
        top: 30%;
        left: 17%;
        border-radius: 8px;
        width: 66%;
        height: auto;
        aspect-ratio: 1;
    }

    .product-image {
        border-radius: 8px;
        width: 100%;
        height: auto;
        aspect-ratio: 1;
    }

    .poster {
        aspect-ratio: 464 / 636;
        width: 100%;
        height: auto; 
        border-radius: 4px !important;
    }

    .img-app-bkg {
        aspect-ratio: 464 / 636;
        width: 100%;
        height: auto; 
        background-size: cover;
        background-position: center;
        visibility: hidden;
    }

    .img-bkg {
        aspect-ratio: 464 / 696;
        width: 100%;
        height: auto; 
        background-size: cover;
        background-position: center;
        border-radius: 4px;
    }

    .column {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .paused-animation {
        animation-play-state: paused !important;
    }

    .running-animation {
        animation-play-state: running;
    }

    .collection-link {
        text-decoration: none;
    }

    .slot-0 {
        animation: slotMachineGame-0 28s linear infinite;
    }

    .slot-1 {
        animation: slotMachineGame-1 28s linear infinite;
    }

    .slot-2 {
        animation: slotMachineGame-2 28s linear infinite;
    }

    @keyframes slotMachineGame-0 {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(calc(-3 * var(--gameTranslateY)));
        }
    }

    @keyframes slotMachineGame-1 {
        0% {
            transform: translateY(calc(-1 * (var(--gameTranslateY) / 2))); 
        }
        100% {
            transform: translateY(calc(-3 * (var(--gameTranslateY)) - (var(--gameTranslateY) / 2))); 
        }
    }

    @keyframes slotMachineGame-2 {
        0% {
            transform: translateY(calc(-1 * (var(--gameTranslateY) / 3))); 
        }
        100% {
            transform: translateY(calc(-3 * (var(--gameTranslateY)) - (var(--gameTranslateY) / 3))); 
        }
    }

    .app-casino {
        gap: 8px;
    }

    .app-card {
        gap: 8px;
    }

    .app-slot-0 {
        animation: slotMachineApp-0 16s linear infinite;
    }

    .app-slot-1 {
        animation: slotMachineApp-1 16s linear infinite;
    }

    .app-slot-2 {
        animation: slotMachineApp-2 16s linear infinite;
    }

    .app-slot-3 {
        animation: slotMachineApp-3 16s linear infinite;
    }


    @keyframes slotMachineApp-0 {
        0% {
        transform: translateY(0);
        }
        100% {
        transform: translateY(calc(-3 * (var(--appTranslateY) + 8px)));
        }
    }

    @keyframes slotMachineApp-1 {
        0% {
        transform: translateY(calc(-1 * (var(--appTranslateY) / 2)));
        }
        100% {
        transform: translateY(calc(-3 * (var(--appTranslateY) + 8px) - (var(--appTranslateY) / 2)));
        }
    }

    @keyframes slotMachineApp-2 {
        0% {
        transform: translateY(0);
        }
        100% {
        transform: translateY(calc(-3 * (var(--appTranslateY) + 8px)));
        }
    }

    @keyframes slotMachineApp-3 {
        0% {
        transform: translateY(calc(-1 * (var(--appTranslateY) / 2)));
        }
        100% {
        transform: translateY(calc(-3 * (var(--appTranslateY) + 8px) - (var(--appTranslateY) / 2)));
        }
    }
`;var Y=Object.defineProperty,O=Object.getOwnPropertyDescriptor,T=Object.getPrototypeOf,z=Reflect.get,m=(e,t,r,i)=>{for(var o=i>1?void 0:i?O(t,r):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&Y(t,r,o),o},q=(e,t,r)=>z(T(e),r,t);let d=class extends C{constructor(){super(...arguments),this.subtitle="",this.mediaType="games",this.collectionType="games",this.calculatedCardHeight=0,this.animationPaused=!1,this.isIntersecting=!1,this.animationState="",this.resizeHandler=()=>this.handleWindowResize(),this.animationHandler=()=>this.handleAnimation()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.resizeHandler),document.addEventListener("visibilitychange",this.animationHandler),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeHandler),document.removeEventListener("visibilitychange",this.animationHandler)}handleCollectionCardIntersection(e){e.forEach(t=>{const r=t.target.querySelectorAll(".column");t.isIntersecting?(this.animationPaused=!0,r.forEach(i=>{i.classList.remove("paused-animation"),i.classList.add("running-animation")})):(this.animationPaused=!1,r.forEach(i=>{i.classList.remove("running-animation"),i.classList.add("paused-animation")}))})}handleAnimation(){document.visibilityState==="hidden"?this.animationPaused=!0:this.animationPaused=!1}onImageLoad(){this.requestUpdate()}updateTranslateYValue(){const t=this.shadowRoot?.querySelector(".collection-card")?.querySelector(".card-0");t&&(this.calculatedCardHeight=t.clientHeight,this.collectionType==="games"?this.style.setProperty("--gameTranslateY",`${this.calculatedCardHeight}px`):this.style.setProperty("--appTranslateY",`${this.calculatedCardHeight}px`))}handleWindowResize(){this.updateTranslateYValue()}renderCollectionCard(){if(this.products?.isLoading)return this.renderProductCollectionSkeleton();if(!this.products)return l``;const e=this.generateColumnItems();return this.renderCardContainer(e)}generateColumnItems(){if(!this.products)return[];const e=this.products.items.slice(0,12),t=e[0].productFamilyName==="Apps"?4:3;this.collectionType=e[0].productFamilyName==="Apps"?"apps":"games";const r=3;return Array.from({length:t},(o,a)=>{const s=a*r,c=s+r;return e.slice(s,c)})}renderLoadingProduct(){return l`
            <sl-skeleton class="collection-reel-skeleton" effect="pulse"></sl-skeleton>
        `}renderProductCollectionSkeleton(){return this.collectionType==="games"?l`
                <div class="reel-skeleton">
                    <div class="skeleton-wrapper">
                        <sl-skeleton class="collection-reel-header-skeleton" effect="pulse"></sl-skeleton>
                        <sl-skeleton class="collection-reel-subheader-skeleton" effect="pulse"></sl-skeleton>
                    </div>
                    <div class="collection-reel-skeleton-container">
                        ${g([1,2,3],()=>this.renderLoadingProduct())}
                    </div>
                </div>
            `:l`
            <div class="collection-reel-skeleton-container">
                ${g([1,2,3,4],()=>this.renderLoadingProduct())}
            </div>
        `}renderCardContainer(e){const t=this.collectionType==="apps"?"app-card":"";return l`
            <a class="card-container" href="${this.seeAllUrl}">
                ${this.renderCardHeader()}
                <div class="collection-card ${t}">
                    ${e.map((r,i)=>this.renderColumn(r,i))}
                </div>
            </a>
        `}renderCardHeader(){return l`
            <div class="card-header">
                <p class="collection-title">${this.titleOverride||this.collectionName}</p>
                <p class="text-ellipsis">${this.subtitle}</p>
            </div>
        `}renderColumn(e,t){return this.collectionType==="apps"?l`
            <div class="column app-casino app-slot-${t} ${this.animationPaused?"paused-animation":"running-animation"}">
              ${e.map((r,i)=>this.renderProduct(r,i))}
              ${e.map((r,i)=>this.renderProduct(r,i))}
              ${e.map((r,i)=>this.renderProduct(r,i))}
              ${e.map((r,i)=>this.renderProduct(r,i))}
              ${this.notifyAfterRender()}
            </div>
          `:l`
          <div class="column game-casino slot-${t} ${this.animationPaused?"paused-animation":"running-animation"}">
            ${e.map((r,i)=>this.renderProduct(r,i))}
            ${e.map((r,i)=>this.renderProduct(r,i))}
            ${e.map((r,i)=>this.renderProduct(r,i))}
            ${this.notifyAfterRender()}
          </div>
        `}notifyAfterRender(){this.dispatchEvent(new CustomEvent("after-render"));const e=this.shadowRoot?.querySelector(".card-0");return e&&(this.calculatedCardHeight=e.clientHeight,this.collectionType==="games"?this.style.setProperty("--gameTranslateY",`${this.calculatedCardHeight}px`):this.style.setProperty("--appTranslateY",`${this.calculatedCardHeight}px`)),l``}renderProduct(e,t){const r=t<10?t*50:0;return l`
            <sl-animation name="fadeIn" easing="ease-out" duration="1000" fill="both" play iterations="1" delay="${r}">
                ${this.renderProductCard(e,t)}
            </sl-animation>
        `}renderProductCard(e,t){const{iconUrl:r,iconBkg:i}=this.getCardBaseDetail(e,75),o=this.getPosterArtUrl(e,400);if(e.isApplication){const a={backgroundImage:`var(--theme-noise-image-to-linear-gradient), linear-gradient(${i}, ${i}), url(${r})`};return this.collectionType!=="apps"?l`
                <div class="product-poster-image-blur tile card-${t}">
                    <sl-animation name="pulse" easing="ease-out" duration="250" iterations="1">
                        <div class="blur">
                            <div class="blurred-bg" style="${P(a)}"></div>
                            <div class="img-app-bkg" style="background-color: ${i}; background-image: url('${o}')"></div>
                        </div>
                        <img class="blurred-product-image" alt="" loading="lazy" width="98" height="98" src="${r}" style="background-color: ${i}"/>
                    </sl-animation>
                </div>
                `:l`
            <div class="product-poster-image tile card-${t}">
                <sl-animation name="pulse" easing="ease-out" duration="250" iterations="1">
                    <img class="product-image" alt=""  loading="lazy" width="80" height="80" src="${r}" style="background-color: ${i}"  @load="${this.onImageLoad}"/>
                </sl-animation>
            </div>
            `}return l`
            <div class="product-poster-image tile card-${t}">
                <sl-animation name="pulse" easing="ease-out" duration="250" iterations="1">
                    <img src=${o} class="poster" alt="" width="110" height="197" @load="${this.onImageLoad}" />
                </sl-animation>
            </div>
        `}getCardBaseDetail(e,t=75){return{iconUrl:e.iconUrl?w.getUrlWithWidth(e.iconUrl,t):"/assets/icons/app.svg",iconBkg:e.iconUrlBackground||"transparent"}}getPosterArtUrl(e,t){return e.posterArtUrl?w.getUrlWithWidth(e.posterArtUrl,t):"/assets/icons/app.svg"}render(){const e=this.shadowRoot?.querySelector(".card-container");return e&&new IntersectionObserver(this.handleCollectionCardIntersection,{threshold:0}).observe(e),l`
            ${this.renderCollectionCard()}
        `}};d.styles=q(d,d,"styles").concat(E);m([v({attribute:"subtitle"})],d.prototype,"subtitle",2);m([v({attribute:"media-type"})],d.prototype,"mediaType",2);m([h()],d.prototype,"collectionType",2);m([h()],d.prototype,"calculatedCardHeight",2);m([h()],d.prototype,"animationPaused",2);m([h()],d.prototype,"isIntersecting",2);m([h()],d.prototype,"animationState",2);d=m([x("collection-reel")],d);var _=Object.defineProperty,U=Object.getOwnPropertyDescriptor,W=Object.getPrototypeOf,H=Reflect.get,u=(e,t,r,i)=>{for(var o=i>1?void 0:i?U(t,r):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&_(t,r,o),o},D=(e,t,r)=>H(W(e),r,t);let n=class extends C{constructor(){super(),this.mediaType=null,this.collections=[],this.focusRef=A(),this.elementIndex=0,this.numberOfItems=4,this.canScrollLeft=!1,this.canScrollRight=!0,this.currentSlide=0,this.pauseOnScroll=!1,this.handleResize=this.handleResize.bind(this),this.currentSlideIndex=0}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize),this.unobserveCollection()}firstUpdated(e){this.handleResize(),this.intersectionObserver=new IntersectionObserver(this.handleIntersection,{root:this.shadowRoot?.querySelector(".carousel"),threshold:.5}),this.shadowRoot?.querySelector(".carousel")?.querySelectorAll("collection-reel")?.forEach(i=>{this.intersectionObserver?.observe(i)})}unobserveCollection(){this.intersectionObserver&&this.intersectionObserver.disconnect()}handleIntersection(e){e.forEach(t=>{const r=t.target,i=r.shadowRoot?.querySelectorAll(".app-casino"),o=r.shadowRoot?.querySelectorAll(".game-casino");t.isIntersecting?(i&&i.forEach((a,s)=>{a.classList.add(`app-slot-${s}`)}),o&&o.forEach((a,s)=>{a.classList.add(`slot-${s}`)})):(i&&i?.forEach(a=>{Array.from(a.classList).forEach(c=>{c.startsWith("app-slot-")&&a.classList.remove(c)})}),o&&o.forEach(a=>{Array.from(a.classList).forEach(c=>{c.startsWith("slot-")&&a.classList.remove(c)})}))})}handleResize(){this.numberOfItems=this.collections?.length,window.innerWidth<b.xxl&&(this.collections.length<4?this.numberOfItems=this.collections.length:this.numberOfItems=4),window.innerWidth<b.lg&&(this.collections.length<2?this.numberOfItems=this.collections.length:this.numberOfItems=2),window.innerWidth<b.xs&&(this.numberOfItems=1,this.canScrollLeft=!1,this.canScrollRight=!1),this.requestUpdate()}handleScrollability(){const t=this.shadowRoot?.querySelector(".carousel");this.canScrollLeft=!!t&&t.scrollLeft>=t.clientWidth/this.collections.length,this.canScrollRight=!!t&&t.scrollLeft+t.clientWidth<t.scrollWidth}render(){return this.collections.length===0?l``:l`
            <div class="collection-reel-group">
                ${this.renderCollections()}
            </div>
        `}renderCollections(){return navigator.userAgentData?.mobile?l`
            <div class="products-and-scroll-container">
                <div class="carousel"
                    @scroll=${t=>this.pauseAnimationOnScroll(t)}
                    @mouseenter=${this.handleScrollability}
                    @keydown=${this.inputKeyDown}
                    
                >
                    ${g(this.collections,(t,r)=>this.renderCollectionReel(t,r))}
                </div>
            </div>
            `:l`
        <div class="carousel-container">
            <div class="carousel products-container"
                @scroll=${this.pauseAnimationOnScroll}
                @mouseenter=${this.handleScrollability}
                @keydown=${this.inputKeyDown}
                
            >
                ${g(this.collections,(t,r)=>this.renderCollectionReel(t,r))}
            </div>
            ${this.renderScrollButtons()}
        </div>
        `}renderScrollButtons(){const e=this.canScrollLeft?"":"d-none",t=this.canScrollRight?"":"d-none";return l`
            <div class="scroll-buttons">
                <scroll-button
                    direction="left"
                    class="scroll-left-btn ${e}"
                    name="chevron-left"
                    @click=${()=>this.slideLeft()}
                    telemetry-event-id="CollectionReelScrollLeftClicked"
                ></scroll-button>
                <scroll-button
                    direction="right"
                    class="scroll-right-btn ${t}"
                    name="chevron-right"
                    @click=${()=>this.slideRight()}
                    telemetry-event-id="CollectionReelScrollRightClicked"
                ></scroll-button>
            </div>
        `}slideLeft(){const e=this.shadowRoot?.querySelector(".carousel");if(e){const t=e.children[0].clientWidth;e.scrollLeft-=t}this.handleScrollability(),this.requestUpdate()}slideRight(){const e=this.shadowRoot?.querySelector(".carousel");if(e){const t=e.children[0].clientWidth;e.scrollLeft+=t}this.handleScrollability(),this.requestUpdate()}pauseAnimationOnScroll(e){const r=e.target.querySelectorAll("collection-reel");r.forEach(o=>{const a=o.shadowRoot?.querySelector(".card-container"),s=a?.querySelectorAll(".game-casino"),c=a?.querySelectorAll(".app-casino");s&&s.forEach(p=>{p.classList.add("paused-animation"),console.log(p)}),c&&c.forEach(p=>{p.classList.add("paused-animation")})}),this.handleScrollability(),setTimeout(()=>{r.forEach(o=>{const a=o.shadowRoot?.querySelector(".card-container"),s=a?.querySelectorAll(".game-casino"),c=a?.querySelectorAll(".app-casino");s&&s.forEach(p=>{Array.from(p.classList).forEach(f=>{f.startsWith("paused-animation")&&p.classList.remove(f)})}),c&&c.forEach(p=>{Array.from(p.classList).forEach(f=>{f.startsWith("paused-animation")&&p.classList.remove(f)})})})},500)}resumeAnimationOnScroll(){this.handleScrollability()}renderCollectionReel(e,t){const r=t===0?0:-1;return e.take=16,e.subtitle&&e.collectionLink?this.numberOfItems===1?l`
                <div class="carousel-item">
                    <collection-reel
                        class="collection-reel"
                        data-index="${t}"
                        .products=${e}
                        subtitle=${e.subtitle}
                        card-appearance="collection-reel"
                        see-all-url=${e.collectionLink}
                        tabindex=${r}
                        telemetry-event-id=${y.CollectionReelClicked}
                        telemetry-data='{ "collectionId": "${e.collectionName}", "slot":${t+1} }'
                    ></collection-reel>
                </div>
                `:l`
                <div class="carousel-item" data-index="${t}">
                    <collection-reel
                        class="collection-reel"
                        data-index="${t}"
                        .products=${e}
                        subtitle=${e.subtitle}
                        card-appearance="collection-reel"
                        see-all-url=${e.collectionLink}
                        tabindex=${r}
                        telemetry-event-id=${y.CollectionReelClicked}
                        telemetry-data='{ "collectionId": "${e.collectionName}", "slot":${t+1} }'
                    ></collection-reel>
                </div>
            `:l``}inputKeyDown(e){e.key==="ArrowLeft"?this.navigateLeft(e):e.key==="ArrowRight"?this.navigateRight(e):e.key==="Enter"&&this.enterCollection(e)}navigateRight(e){e.preventDefault();const t=this.shadowRoot?.querySelector(".carousel");if(t?.children){const r=Array.from(t.children);this.elementIndex<r.length-1&&this.elementIndex++;const i=r[this.elementIndex]?.children[0];i&&i.focus()}}navigateLeft(e){e.preventDefault();const t=this.shadowRoot?.querySelector(".carousel");if(t?.children){const r=Array.from(t.children);this.elementIndex>0&&this.elementIndex--;const i=r[this.elementIndex]?.children[0];i&&i.focus()}}enterCollection(e){const t=this.shadowRoot?.querySelector(".carousel");if(t?.children){e.preventDefault();const r=Array.from(t?.children);if(r[this.elementIndex].children){const i=r[this.elementIndex].children[0];L.navigate(i.getAttribute("see-all-url")??"")}}}};n.styles=D(n,n,"styles").concat(I);u([v({attribute:"media-type"})],n.prototype,"mediaType",2);u([v({type:Array})],n.prototype,"collections",2);u([h()],n.prototype,"focusRef",2);u([h()],n.prototype,"elementIndex",2);u([h()],n.prototype,"numberOfItems",2);u([h()],n.prototype,"canScrollLeft",2);u([h()],n.prototype,"canScrollRight",2);u([h()],n.prototype,"currentSlide",2);u([h()],n.prototype,"pauseOnScroll",2);n=u([x("collection-reel-group")],n);export{n as CollectionReelGroup};
