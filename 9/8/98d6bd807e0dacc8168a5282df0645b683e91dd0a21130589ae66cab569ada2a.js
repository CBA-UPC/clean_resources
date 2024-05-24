import{i as b,aa as k,a as v,n as u,x as o,t as y,e as $,B as p,V as S,r as d}from"./index-aa05d19d.js";import{c as x}from"./repeat-1a78a8d2.js";import{r as C,f as m}from"./css-function-2ba732a7.js";import{P as w,a as f}from"./product-collection-91cc6b51.js";import{o as T}from"./style-map-a428b004.js";import"./chunk.SKOOBYPV-dc2f449b.js";import"./image-helper-99359f42.js";import"./nav-bar-cd5e889c.js";import"./auto-complete-app-search-dfdb1cc6.js";import"./chunk.KRRLOROJ-faa56958.js";const R=b`
    :host {
        --card-spacing: 15px;
        --card-width: ${C("100%","var(--card-spacing)","var(--collection-group-num)")};
    }

    sl-carousel::part(base) {
        gap: 0;
    }

    .carousel-container {
        position: relative;

    }

    .carousel-container:hover{
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

    /** On mobile, don't display scroll buttons */
    ${k()} {
        .scroll-buttons {   
            display: none;
        }
    }

    .scroll-buttons scroll-button {
        opacity: 0;
    }

    .carousel {
        --card-spacing: 10px;
        min-height: 300px;
        max-height: 600px;
        z-index: 1;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        display:grid;
        grid-auto-flow: column;
        grid-auto-columns:calc((100% - (var(--tall-tile-card-num) - 1)*var(--card-spacing))/var(--tall-tile-card-num));
        grid-gap:var(--card-spacing);
        width: 100%;
        overflow:auto;
    }

    .carousel::-webkit-scrollbar {
        height: 0;
    }

    .tile-card {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .tall-tile-container {
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
        transition: all var(--sl-transition-fast) ease-out;
    }

    .tall-tile {
        height: 100%;
        width: 100%;
        overflow-y: hidden;
    }

    .carousel-item:hover{
        box-shadow: var(--sl-shadow-large);
        transform: translateY(-2px);
        background-color: var(--theme-card-hover-background-color);
    }

    .tall-tile:focus-visible {
        border-radius:8px;

    }


`,I=b`
    :host {
        --card-height: 260px;
        --card-padding: 20px;
    }

    .card-container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: var(--card-padding);
        width: 100%;
        height: 100%;
        text-decoration: none;
    }

    .card-container:hover {
        cursor: pointer;
    }

    .collection-card {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
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

    .blur {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .blurred-bg {
        position: absolute;
        inset: 0;
        background-blend-mode: luminosity, overlay, normal;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100% 100%;
        --filter-params: blur(40px) saturate(5);
        ${m("var(--filter-params)")}
    }

    .product-poster-image .gradual-blur {
        position: absolute;
        inset: 0;
        transform: scale(1.5);
        background-blend-mode: luminosity, overlay, normal;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 100% 100%;
        --filter-params: blur(40px) saturate(5);
        ${m("var(--filter-params)")}
    }

    .product-image {
        position: absolute;
        top: 30%;
        left: 17%;
        border-radius: 8px;
        width: 66%;
        height: auto;
        aspect-ratio: 1;
    }

    .img-app-bkg {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        visibility: hidden;
    }

    .img-bkg {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .card-0 .img-bkg {
        border-radius: 8px 0px 0px 8px;
    }

    .card-0 .blur {
        border-radius: 8px 0px 0px 8px;
    }

    .card-2 .img-bkg {
        border-radius: 0px 8px 8px 0px;
    }

    .card-2 .blur {
        border-radius: 0px 8px 8px 0px;
    }

    .collection-link {
        text-decoration: none;
    }

    sl-skeleton {
        height: calc(var(--card-height) + (2 * var(--card-padding)));
        --border-radius: 0;
    }
`;var O=Object.defineProperty,L=Object.getOwnPropertyDescriptor,g=(e,t,r,l)=>{for(var i=l>1?void 0:l?L(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(i=(l?c(t,r,i):c(i))||i);return l&&i&&O(t,r,i),i};let h=class extends w{constructor(){super(...arguments),this.subtitle="",this.mediaType=null}renderCollectionCard(){if(this.products?.isLoading)return this.renderTallTileCollectionSkeleton();if(!this.products)return o``;const e=this.products.items.slice(0,3),t=this.titleOverride||this.products.titleOverride||this.collectionName;return o`
        <a class="card-container" href="${this.seeAllUrl}">
            <div class="card-header">
                <p class="collection-title">${t}</p>
                <p class="text-ellipsis">${this.subtitle}</p>
            </div>
            <div class="collection-card">
                ${x(e,r=>r.productId,(r,l)=>this.renderProduct(r,l))}
            </div>
        </a>
        `}renderTallTileCollectionSkeleton(){return o`
            <sl-skeleton class="product-skeleton" effect="pulse"></sl-skeleton>
        `}renderProduct(e,t){const r=t<10?t*50:0;return o`
            <sl-animation name="fadeIn" easing="ease-out" duration="1000" fill="both" play iterations="1" delay="${r}">
                ${this.renderProductCard(e,t)}
            </sl-animation>
        `}renderProductCard(e,t){const{iconUrl:r,iconBkg:l}=this.getCardBaseDetail(e,75),i=this.getPosterArtUrl(e,400);if(e.isApplication){const a={backgroundImage:`var(--theme-noise-image-to-linear-gradient), linear-gradient(${l}, ${l}), url(${r})`};return o`
            <div class="product-poster-image tile card-${t}">
                <sl-animation name="pulse" easing="ease-out" duration="250" iterations="1">
                    <div class="blur">
                        <div class="blurred-bg" style="${T(a)}"></div>
                        <div class="img-app-bkg" style="background-color: ${l}; background-image: url('${i}')"></div>
                    </div>
                    <img class="product-image" alt="" width="80" height="80" src="${r}" loading="lazy" style="background-color: ${l}" />
                </sl-animation>
            </div>
            `}return o`
            <div class="product-poster-image tile card-${t}">
                <sl-animation name="pulse" easing="ease-out" duration="250" iterations="1">
                    <div class="img-bkg" style="background-color: ${l}; background-image: url('${i}')"></div>
                </sl-animation>
            </div>
        `}getCardBaseDetail(e,t=75){return{iconUrl:e.iconUrl?f.getUrlWithWidth(e.iconUrl,t):"/assets/icons/app.svg",iconBkg:e.iconUrlBackground||"transparent"}}getPosterArtUrl(e,t){return e.posterArtUrl?f.getUrlWithWidth(e.posterArtUrl,t):"/assets/icons/app.svg"}render(){return o`
            ${this.renderCollectionCard()}
        `}};h.styles=[v,I];g([u({attribute:"subtitle"})],h.prototype,"subtitle",2);g([u({attribute:"media-type"})],h.prototype,"mediaType",2);h=g([y("tall-tile-collection")],h);var z=Object.defineProperty,U=Object.getOwnPropertyDescriptor,n=(e,t,r,l)=>{for(var i=l>1?void 0:l?U(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(i=(l?c(t,r,i):c(i))||i);return l&&i&&z(t,r,i),i};let s=class extends w{constructor(){super(),this.mediaType=null,this.collections=[],this.focusRef=$(),this.elementIndex=0,this.numberOfItems=4,this.canScrollLeft=!1,this.canScrollRight=!0,this.currentSlide=0,this.handleResize=this.handleResize.bind(this),this.currentSlideIndex=0}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize)}firstUpdated(){this.handleResize()}handleResize(){this.numberOfItems=this.collections?.length,window.innerWidth<p.xxl&&(this.collections.length<4?this.numberOfItems=this.collections.length:this.numberOfItems=4),window.innerWidth<p.lg&&(this.collections.length<2?this.numberOfItems=this.collections.length:this.numberOfItems=2),window.innerWidth<p.xs&&(this.numberOfItems=1,this.canScrollLeft=!1,this.canScrollRight=!1),this.requestUpdate()}handleScrollability(){const t=this.shadowRoot?.querySelector(".carousel");this.canScrollLeft=!!t&&t.scrollLeft>=t.clientWidth/2,this.canScrollRight=!!t&&t.scrollLeft+t.clientWidth<t.scrollWidth}render(){return this.collections.length===0?o``:o`
            <div class="tall-tile-group">
                ${this.renderCollections()}
            </div>
        `}renderCollections(){return o`
            <div class="carousel-container">
                <div class="carousel"
                    @scroll=${this.handleScrollability}
                    @mouseenter=${this.handleScrollability}
                    @keydown=${this.inputKeyDown}>
                    ${x(this.collections,(e,t)=>this.renderTallTile(e,t))}
                </div>
                ${this.renderScrollButtons()}
            </div>
        `}renderScrollButtons(){const e=this.canScrollLeft?"":"d-none",t=this.canScrollRight?"":"d-none";return o`
            <div class="scroll-buttons">
                <scroll-button
                    direction="left"
                    class="scroll-button-left ${e}"
                    name="chevron-left"
                    @click=${()=>this.slideLeft()}
                    telemetry-event-id="TallTileScrollLeftClicked"
                ></scroll-button>
                <scroll-button
                    direction="right"
                    class="scroll-button-right ${t}"
                    name="chevron-right"
                    @click=${()=>this.slideRight()}
                    telemetry-event-id="TallTileScrollRightClicked"
                ></scroll-button>
            </div>
        `}slideLeft(){const e=this.shadowRoot?.querySelector(".carousel");if(e){const t=e.children[0].clientWidth;e.scrollLeft-=t}this.handleScrollability(),this.requestUpdate()}slideRight(){const e=this.shadowRoot?.querySelector(".carousel");if(e){const t=e.children[0].clientWidth;e.scrollLeft+=t}this.handleScrollability(),this.requestUpdate()}renderTallTile(e,t){const r=t===0?0:-1;return e.subtitle&&e.collectionLink?o`
                <div class="carousel-item">
                    <tall-tile-collection
                        class="tall-tile"
                        .products=${e}
                        subtitle=${e.subtitle}
                        card-appearance="tall-tile"
                        see-all-url=${e.collectionLink}
                        tabindex=${r}
                        telemetry-event-id="TallTileCollectionClicked"
                        telemetry-data='{ "collectionId": "${e.collectionName}", "slot": ${t+1}}'
                    ></tall-tile-collection>
                </div>
            `:o``}inputKeyDown(e){e.key==="ArrowLeft"?this.navigateLeft(e):e.key==="ArrowRight"?this.navigateRight(e):e.key==="Enter"&&this.enterCollection(e)}navigateRight(e){e.preventDefault();const t=this.shadowRoot?.querySelector(".carousel");if(t?.children){const r=Array.from(t.children);this.elementIndex<r.length-1&&this.elementIndex++;const l=r[this.elementIndex]?.children[0];l&&l.focus()}}navigateLeft(e){e.preventDefault();const t=this.shadowRoot?.querySelector(".carousel");if(t?.children){const r=Array.from(t.children);this.elementIndex>0&&this.elementIndex--;const l=r[this.elementIndex]?.children[0];l&&l.focus()}}enterCollection(e){const t=this.shadowRoot?.querySelector(".carousel");if(t?.children){e.preventDefault();const r=Array.from(t?.children);if(r[this.elementIndex].children){const l=r[this.elementIndex].children[0];S.navigate(l.getAttribute("see-all-url")??"")}}}};s.styles=[v,R];n([u({attribute:"media-type"})],s.prototype,"mediaType",2);n([u({type:Array})],s.prototype,"collections",2);n([d()],s.prototype,"focusRef",2);n([d()],s.prototype,"elementIndex",2);n([d()],s.prototype,"numberOfItems",2);n([d()],s.prototype,"canScrollLeft",2);n([d()],s.prototype,"canScrollRight",2);n([d()],s.prototype,"currentSlide",2);s=n([y("tall-tile-group")],s);export{s as TallTileGroup};
