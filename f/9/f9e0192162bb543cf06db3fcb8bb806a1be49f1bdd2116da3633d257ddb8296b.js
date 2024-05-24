import{ab as P,i as L,m as x,B as S,a as M,n as m,r as o,s as k,x as u,t as T,K as C,l as v,g as w,W,Y as f,b as O,ac as R,S as U}from"./index-b49b19e7.js";import{c as H}from"./repeat-18af36e2.js";import{f as B}from"./css-function-27cf3c1f.js";import{C as p,I as z}from"./image-helper-99359f42.js";import{o as X}from"./style-map-db7a8965.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let F;function _(t){return(e,i)=>P(e,i,{get(){return(this.renderRoot??(F??=document.createDocumentFragment())).querySelectorAll(t)}})}class j{static stringify(e,i=!1){return typeof e=="string"&&!i?e:JSON.stringify(e)}static safeParse(e){if(typeof e=="string")try{return JSON.parse(e.trim())}catch{return e}else return e}}const J=L`
    :host {
        --border-raduis: 12px;
        --slider-transition-time: 400ms;
        --slider-transition-function: ease;
        margin: auto;
        display: block;
        position: relative;
        width: 100%;
    }

    spot-light-card:focus-visible {
        outline: none;
        position: relative;
    }

    spot-light-card:focus-visible::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        border: 2px solid var(--selection-border);
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        border-radius: var(--border-raduis);
      }
    .spotlight {
        overflow: hidden;
        margin: auto;
        width: 100%;
        border-radius: var(--border-raduis);
        position: relative;
    }
    .imgs-wrap {
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;
        transition-property: transform;
        transition-timing-function: var(--slider-transition-function);
        transition-duration: 0ms;
    }
    .spot-img {
        flex-shrink: 0;
        transition-property: width;
        transition-timing-function: var(--slider-transition-function);
        transition-duration: 0ms;
    }

    .blur {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transition-property: background;
        transition-timing-function: var(--slider-transition-function);
        transition-duration: 0ms;
    }
    .animating.blur {
        transition-duration: var(--slider-transition-time);
    }

    .spot-img sl-skeleton {
        height: 100%;
    }

    .spot-img sl-skeleton::part(indicator) {
        border-radius: var(--border-raduis);
    }

    scroll-button {
        opacity: 0;
    }
    :host(:hover) scroll-button {
        opacity: 1;   
    }

    scroll-button.scroll-left-button {
        left: calc(34px - var(--scroll-btn-size) / 2);
    }

    scroll-button.scroll-right-button {
        right: calc(34px - var(--scroll-btn-size) / 2);
    }

    /** When only one item is displayed, the scroll button will be half exposed on the outside. */
    @media (max-width: 1024px) {
        scroll-button.scroll-left-button {
            left: calc(var(--scroll-btn-size) / -2);
        }
    
        scroll-button.scroll-right-button {
            right: calc((var(--scroll-btn-size) / 2) * -1);
        }
    }
    /** Hide scroll-button on mobile devices  */
    /** There isn't enough space to display it, and users can swipe their fingers instead */
    ${x(S.xs)} {
        scroll-button {
            display: none;
        }
    }

    .tab-list {
        margin: auto;
        display: inline-flex;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        margin-top: var(--sl-spacing-x-large);
        padding: 0;
        position: absolute;
    }

    .tab-list>li {
        position: relative;
        display: inline-block;
        margin: 0 4px;
        width: 5px;
        height: 5px;
        background-color: var(--sl-color-neutral-400);
        border-radius: 50px;
        border: 1px solid var(--sl-color-neutral-400);
        cursor: pointer;
        user-select: none;
    }
    /** Expanding the range of clicks */
    .tab-list>li::after {
        content: '';
        position: absolute;
        left: -4px;
        top: -4px;
        right: -4px;
        bottom: -4px;
    }
    .tab-list>li:hover {
        transform: scale(1.2);
        background-color: var(--sl-color-neutral-500);
    }
    .tab-list>li[active="true"] {
        transform: scale(1.4);
    }

    .animating .imgs-wrap {
        transition-duration: var(--slider-transition-time);
    }
    .animating .spot-img {
        transition-duration: var(--slider-transition-time);
    }

`,V=L`
    :host {
        height: 100%;
        --desc-offset-top: 48%;
        --title-font-size: var(--sl-font-size-large);
        --ad-badge-scale: 0.9;
        --detail-font-size: var(--sl-font-size-small);
        --detail-left: 30px;
        --btn-offset-top: var(--sl-spacing-x-large);
        --img-base: linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.33) 40%, rgba(0,0,0,0) 100%);
        --btn-border-line-width: 1px;
        --accent_first_project: #ccc;
        --accent_four_project: transparent;
    }
    :host([animating]) .main, :host([animating]) .title, :host([animating]) .detail, :host([animating]) .mask, :host([animating]) .colorful-overlay, :host([animating]) .base-overlay {
        transition-duration: 400ms;
    }
    :host:focus-within .timer{
        animation-play-state: paused;
    }
    .main, .title, .detail, .mask, .colorful-overlay, .base-overlay{
        transition-property: all;
        transition-timing-function: ease;
        transition-duration: 0ms;
        /**
         * The issue is a nasty performance drop around the element on which the filter is used, making every other interaction extremely slow. And it happens in Safari only. In other browsers everything works well.
         * One solution is to use transform: translate3d(0, 0, 0) along with filter on the same element, to force the browser use GPU acceleration for that particular element instead of the CPU.
         */
        transform: translate3d(0, 0, 0);
    }
    ${x(S.xxl)} {
        :host {
            --btn-offset-top: var(--sl-spacing-medium);
            --title-font-size: var(--sl-font-size-large);
        }
    }
    ${x(S.xl)} {
        :host {
            --btn-offset-top: var(--sl-spacing-medium);
            --title-font-size: var(--sl-font-size-large);
        }
    }

    ${x(S.lg)} {
        :host {
            --btn-offset-top: var(--sl-spacing-large);
            --title-font-size: var(--sl-font-size-medium);            
        }
    }

    .main {
        display: block;
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: var(--border-raduis);
        user-select: none;
        cursor: pointer;
        box-sizing: border-box;
    }
    .isActived.main {
        filter: brightness(1.1);
    }
    .main .hover-light {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: radial-gradient(circle farthest-side at 100% 50%, transparent 5%, rgba(0, 0, 0, .1) 100%);
    }

    .base-overlay {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        width: 100%;
        background-image: radial-gradient(circle farthest-side at 50% 50%, transparent 20%, rgba(0, 0, 0, .5) 100%);
    }

    .isActived .base-overlay {
        width: 160%;
    }
    .colorful-overlay {
        position: absolute;
        top: 0px;
        right: 0%;
        bottom: 0px;
        left: 0px;
        border-radius: var(--border-raduis);
        --filter-params: blur(150px) contrast(1.2) saturate(2.5);
        ${B("var(--filter-params)")}
    }
    .mask {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-image: radial-gradient(circle at center, transparent 0,  var(--sl-default-black) 100%);
        border-radius: var(--border-raduis);
    }
    lazy-background-img::part(img) {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        object-fit: cover;
        cursor: pointer;
        background-color: var(--sl-color-neutral-300); /** Display a background color for lazy loaded images */
    }
    lazy-background-img::part(img)[src=""], lazy-background-img::part(img):not([src]){
        opacity:0;
    }
    .desc-wrap {
        color: var(--sl-default-white);
        position: absolute;
        left: var(--detail-left);
        bottom: 32%;
        top: var(--desc-offset-top);
        height: 18%;
        width: 100px;
        pointer-events: none;
        font-weight: var(--sl-font-weight-semibold);
    }

    [dir="rtl"] .desc-wrap {
        right: var(--detail-left);
    }

    .title {
        font-size: var(--title-font-size);
        font-family: var(--header-font);
        position: absolute;
        bottom: var(--desc-offset-top);
        /**Change from the bottom left corner */
        transform-origin: bottom left;
    }
    [dir="rtl"] .title {
        transform-origin: bottom right;
    }
    .title .text {
        line-height: calc(var(--title-font-size) + 5px);
        max-height: calc((var(--title-font-size) + 5px) * 3);
    }

    .ad-badge {
        position: absolute;
        top: -4px;
        display: inline-block;
        margin-bottom: 2px;
        padding: var(--sl-spacing-3x-small) var(--sl-spacing-2x-small);
        font-size: 10px;
        border: 1px solid #eee;
        border-radius: var(--sl-border-radius-medium);
        line-height: 1;
        transform-origin: left bottom;
        font-weight: normal;
        transform: scale(var(--ad-badge-scale)) translateY(-100%);
    }

    .detail {
        position: absolute;
        top: var(--desc-offset-top);
        font-size: var(--detail-font-size);
        height: auto;
        color: #dfdfdf;
        line-height: calc(var(--detail-font-size) + 2px);
        max-height: calc((var(--detail-font-size) + 2px) * 2);
        overflow: hidden;
    }

    ${x(700)} {
        .title {
            bottom: 0;
            --title-font-size: var(--sl-font-size-2x-small);
        }
        .detail {
            display: none;
        }
    }

    ${x(S.xs)} {
        :host {
            --desc-offset-top: 45%;
        }
        .detail-btn {
            display: none;
        }

        .title {
            bottom: -1.25rem;
        }
        .ad-badge {
            --ad-badge-scale: 0.6;
            top: -8px;
        }
        a.detail-btn {
            min-width: 50px;
            height: 20px;
            line-height: 20px;
            font-size: 10px;
        }
    }


    .detail-btn {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        min-width: 100px;
        width: auto;
        position: absolute;
        left: var(--detail-left);
        bottom: 28%;
        overflow: hidden;
        border-radius: var(--sl-border-radius-large);
        filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, .8));
        background-color: rgba(255, 255, 255, .6);
        color: var(--sl-default-black);
        border-color: transparent;
        font-size: var(--sl-font-size-x-small);
        font-weight: var(--sl-font-weight-semibold);
    }
    [dir="rtl"] .detail-btn {
        left: auto;
        right: var(--detail-left);
    }
    .detail-btn:hover.detail-btn::before{
        transform: skewX(-45deg) translateX(200%);
        transition: all 1000ms ease-in-out;
    }
    .detail-btn::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transform: skewX(-45deg) translateX(-100%);
        background: linear-gradient(to right, transparent, var(--sl-default-white) 20%, transparent 60%);
    }
    .detail-btn:focus-visible {
        outline: var(--sl-focus-ring);
        outline-offset: var(--sl-focus-ring-offset);
    }
    .detail-btn:focus+.timer {
        animation-play-state: paused;
    }
    .add-btn-animation.detail-btn::before {
        animation: btn-animation 1000ms ease-in-out;
    }


    .detail-btn sl-icon {
        font-size: var(--sl-font-size-small);
        vertical-align: middle;
        margin-top: -4px;
    }


    .timer {
        --timer-raduis: 5px;
        --timer-cycle: 8s;
        position: absolute;
        left: 15px;
        bottom: 5px;
        width: 80px;
        height: 80px;
        fill: none;
        stroke: rgb(233, 200, 200);
        stroke-width: calc(2 * var(--timer-raduis));
        stroke-linecap: butt;
        stroke-dasharray: calc(2 * var(--timer-raduis) * 3.14);
        transform: rotate(-90deg);
        opacity: 0;
        mix-blend-mode: luminosity;
        transition: opacity ease-in-out var(--sl-transition-slow);
    }

    [dir="rtl"] .timer {
        right: 15px;
        transform: translateX(55px) rotate(-90deg);
    }

    .timer circle {
        opacity: 0.5;
    }

    .timer.sport {
        opacity: .5;
        animation-name: timer-animation;
        animation-duration: var(--timer-cycle);
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        animation-delay: var(--sl-transition-slow);
    }
    .timer.paused {
        animation-play-state: paused;
    }

    .main:focus {
        outline: 3px solid var(--selection-border);
        outline-offset: -3px;
        background-color: var(--selection);
    }

    .main:focus .timer{
        animation-play-state: paused;
    }
    .main:hover .timer{
        animation-play-state: paused;
    }

    @keyframes timer-animation {
        0% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: calc(-1 * 2 * var(--timer-raduis) * 3.14);
        }
    }

    @keyframes btn-animation {
        0% {
            transform: skewX(-45deg) translateX(-100%);
        }
        100% {
            transform: skewX(-45deg) translateX(200%);
        }
    }
`,K=L`
    :host {
        display: block;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        background-position: center;
    }
`;var G=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,$=(t,e,i,s)=>{for(var a=s>1?void 0:s?Y(e,i):e,r=t.length-1,c;r>=0;r--)(c=t[r])&&(a=(s?c(e,i,a):c(a))||a);return s&&a&&G(e,i,a),a};let I=class extends k{constructor(){super(...arguments),this.loadImmediately=!1,this.isVisible=!1}render(){return this.backgroundImage?this.renderLazyImg(this.backgroundImage):u``}renderLazyImg(t){const e=this.loadImmediately?"eager":"lazy",i=this.isVisible?"opacity-1":"opacity-0";return u`
            <img 
                loading="${e}"
                src="${t}"
                @load="${()=>this.isVisible=!0}"
                class="${i}"
                part="img"
                alt=""
            />
        `}};I.styles=[M,K];$([m({attribute:"background-image"})],I.prototype,"backgroundImage",2);$([m({type:Boolean,attribute:"load-immediately"})],I.prototype,"loadImmediately",2);$([o()],I.prototype,"isVisible",2);I=$([T("lazy-background-img")],I);var g=(t=>(t.Application="app",t.Collection="collection",t.Link="link",t.Movie="movie",t.Tvepisode="tvepisode",t.Tvseries="tvseries",t.PurchasedItem="purchasedItem",t.ReadyToInstall="ReadyToInstall",t))(g||{}),q=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,h=(t,e,i,s)=>{for(var a=s>1?void 0:s?Q(e,i):e,r=t.length-1,c;r>=0;r--)(c=t[r])&&(a=(s?c(e,i,a):c(a))||a);return s&&a&&q(e,i,a),a};let n=class extends k{constructor(){super(...arguments),this.animating=!1,this.hideDesc=!1,this.smallCardWidth=0,this.showSmallImgNum=0,this.productType="",this.showBtnEffect=!1,this.stopClickToJump=!1,this.startTimer=!1,this.direction="ltr",this.cardDetailOpacity=0,this.cardTitleScalc=1,this.cardMaskOpacity=0,this.cardDescOffsetBottom=0,this.cardScalc=1,this.isActived=!1,this.mouseClientX=null,this.mouseClientY=null,this.isHolding=!1,this.touchStartTime=0,this.touchStartHandler=this.handleTouchStart.bind(this),this.touchMoveHandler=this.handleTouchMove.bind(this),this.touchEndHandler=this.handleTouchEnd.bind(this),this.mousemoveHandler=this.handleMouseMove.bind(this),this.mouseEndHandler=this.handleMouseEnd.bind(this),this.timerAnimationEndHandler=this.timerAnimationEnd.bind(this),this.instantGamesId="MerchandiserContent/Games/Primary/instantgamescollectionprimary/_instantgamescollectionprimary"}get isEditorial(){return this.data.productId?.startsWith(p.EditorialUrl)}get canJumpPdp(){return this.productType?[g.Application,g.Movie,g.Tvepisode,g.Tvseries,g.PurchasedItem,g.ReadyToInstall].includes(this.productType):!1}get isMSStoreLink(){return this.data.externalUri?.startsWith(p.StoreProtocol)}get isCollections(){return this.productType===g.Collection}get isLink(){return this.data.productType===g.Link}get isAd(){return this.data.isAd}get imgUrl(){return z.getResizableImageUrl(this.data?.previews[0].url,"height",520)}get collectionName(){let t=this.data.productId.toLowerCase();if(!t)return null;if(t.startsWith(p.NavigateToPageUrl)&&(t.includes("?pagename=featureddeals")&&(t="ms-windows-store://collection/?collectionid=MerchandiserContent/Apps/Sale/2023/BFApps1123/_BFApps1123"),t.includes("?pagename=featureddealsmmtv")&&(t="ms-windows-store://videogallery/?itemtype=movies&listid=video.collections.sale_blackfridaysale2023")),t.startsWith("merchandisercontent/apps/primary")){const i=t.split("/");return i.length<2?null:i[i.length-2]}else if(t.startsWith("ms-windows-store://videogallery")){const i=new URL(t),s=i.searchParams&&i.searchParams.get("listid");return s?`movies/${s}`:t}else if(t.startsWith(`${p.CollectionUrl}/?collectionid`))return t.replace(`${p.CollectionUrl}/?collectionid=`,"");return t}get browseName(){const t=new URL(this.data.externalUri);let e=t.searchParams.get("list")||"";e=e[0].toUpperCase()+e.slice(1);const i=t.searchParams.get("type")?.toLocaleLowerCase()||"";return{listName:e,mediaType:i}}get getButtonText(){if(this.isMSStoreLink){if(this.data.externalUri?.startsWith(p.EditorialUrl))return v.get("Common.SeeDetails");if(this.data.externalUri?.startsWith(p.StorePdpUrl))return v.get("ProductDetails.Get");if(this.data.externalUri?.startsWith(p.CollectionUrl))return v.get("ProductDetails.ShowAll")}else{if(this.canJumpPdp)return v.get("ProductDetails.Get");if(this.isCollections)return v.get("ProductDetails.ShowAll");if(this.isLink)return v.get("ProductDetails.Get")}return v.get("ProductDetails.Get")}get getEditorialUrl(){return new URL(this.data.externalUri).searchParams.get("url")||""}get calcCardTitle(){const t=this.smallCardWidth*.7;return this.showSmallImgNum===0?t*.4:t}get calcCardDesc(){const t=this.smallCardWidth*.9;return this.showSmallImgNum===0?t*.4:t}get loadImmediately(){const t=this.showSmallImgNum===0?this.activeIndex:this.activeIndex-1,e=this.showSmallImgNum===0?this.activeIndex+this.showSmallImgNum:this.activeIndex+this.showSmallImgNum+1;return this.index>=t&&this.index<=e}firstUpdated(){this.listenEventList()}updated(t){if(t.has("isActived"))if(this.isActived){this.listenTimerAnimationEnd();const e=this.renderRoot.querySelector(".timer");this.startTimer?e?.classList.remove("paused"):e?.classList.add("paused"),w.addImpressionTracking(this)}else this.isActived||w.removeImpressionTracking(this)}connectedCallback(){super.connectedCallback(),this.listenEventList()}disconnectedCallback(){super.disconnectedCallback(),this._main.removeEventListener("touchstart",this.touchStartHandler),this._main.removeEventListener("touchmove",this.touchMoveHandler),this._main.removeEventListener("touchend",this.touchEndHandler),this._main.removeEventListener("mousemove",this.mousemoveHandler),this._main.removeEventListener("mouseleave",this.mouseEndHandler),this.isActived&&this.RemoveListenTimerAnimationEnd(),w.removeImpressionTracking(this)}listenEventList(){this._main&&(this._main.addEventListener("touchstart",this.touchStartHandler),this._main.addEventListener("touchmove",this.touchMoveHandler),this._main.addEventListener("touchend",this.touchEndHandler),this._main.addEventListener("mousemove",this.mousemoveHandler),this._main.addEventListener("mouseleave",this.mouseEndHandler),this.isActived=this.activeIndex===this.index)}handleTouchStart(t){t.preventDefault(),this.isHolding=!1,this.touchStartTime=new Date().getTime();const e=this.index;this.dispatchEvent(new CustomEvent("touch-start",{detail:{e:t,targetIndex:e}}))}handleTouchMove(t){this.dispatchEvent(new CustomEvent("touch-move",{detail:{e:t}}))}handleTouchEnd(t){t.preventDefault(),new Date().getTime()-this.touchStartTime>500&&(this.isHolding=!0);const e=this.openDetailPage.bind(this),i=this.handleButtonClick.bind(this);this.dispatchEvent(new CustomEvent("touch-end",{detail:{e:t,openDetailPage:e,handleButtonClick:i}}))}handleMouseMove(t){this.mouseClientX=t.clientX,this.mouseClientY=t.clientY}handleMouseEnd(){this.mouseClientX=null,this.mouseClientY=null}handleButtonClick(t){if(!this.stopClickToJump){if(t?.stopPropagation(),w.track({name:W.SpotlightCardCtaClicked,properties:{itemType:this.productType,itemId:this.data.productId,slot:this.index>=this.length?this.index-this.length:this.index,event:t?.type,isAd:this.isAd,redirect:!!this.data.redirectUrl}}),this.data.productId===this.instantGamesId)window.location.href=this.data.externalUri+"&cid=InstantArcadeWebRedirect";else if(this.isEditorial)this.navigationPage("editorial");else if(/^https?/.test(this.data.productId))window.open(this.data.productId,"_black");else if(this.isCollections)this.navigationPage("collection");else if(this.isMSStoreLink){if(this.data.redirectUrl){window.open(this.data.redirectUrl,"_blank");return}this.isAd?window.location.href=`${this.data.externalUri}&referrer=storeforweb&ocid=web-spotlight-ad`:window.location.href=`${this.data.externalUri}&referrer=storeforweb`}}}renderDesc(){const t=`transform: scale(${this.cardTitleScalc}) translate3d(0, -${this.cardDescOffsetBottom}px, 0); width: ${this.calcCardTitle}px`,e=`opacity: ${this.cardDetailOpacity}; width: ${this.calcCardDesc}px; transform: translate3d(0, -${this.cardDescOffsetBottom}px, 0)`;return u`
            <div ?hidden=${this.hideDesc} class="desc-wrap">
                <div class="title" style="${t}">
                    <span class="ad-badge ${this.isAd?"":"d-none"}">${v.get("Common.AdBadge")}</span>
                    <div class="text text-three-line-overflow">${this.data.title}</div>
                </div>
                <div class="detail text-two-line-overflow" style="${e}">${this.data.description}</div>
            </div>
        `}renderButton(){const t=this.isActived?0:-1,e=this.showBtnEffect?"add-btn-animation":"";return u`
            <a
                role="button"
                ?hidden="${this.hideDesc}"
                tabindex="${t}"
                @click="${this.handleButtonClick}"
                @keydown="${i=>this.handleKeyDown(i,"Enter",this.handleButtonClick.bind(this))}"
                class="detail-btn ${e}"
            >
                <sl-icon slot="prefix" name="caret-right-fill" aria-hidden="true"></sl-icon>
                ${this.getButtonText}
            </a>
        `}handleKeyDown(t,e,i){t.key===e&&i&&i(t)}navigationPage(t){switch(t){case"editorial":f.navigate("/editorial",new URLSearchParams({url:this.getEditorialUrl,title:this.data.title}));break;case"pdp":{if(this.data.redirectUrl){window.open(this.data.redirectUrl,"_blank");return}if(this.isAd){const e=f.route?.url.pathname.replaceAll("/","");sessionStorage.setItem("asource",`${e}-${this.data.productId}-${this.isAd}`),f.navigate(`/detail/${this.data.productId||""}`)}else f.navigate(`/detail/${this.data.productId||""}`);break}case"collection":if(this.data.externalUri?.startsWith(p.BrowseUrl)){this.browseName.listName&&this.browseName.mediaType&&f.navigate(`/collections/computed/${this.browseName.mediaType}/${this.browseName.listName}`);break}if(this.data.externalUri?.startsWith(p.NavigateToPageUrl)){const e=new URL(this.data.externalUri.toLowerCase()).searchParams.get("pagename");if(e==="featureddeals")if(O.market==="US"){f.navigate("/editorial",new URLSearchParams({url:"https://editorial-msstore-site.azurewebsites.net/countdown-save-up-to-50-on-games-apps-movies-tv",title:this.data.title}));return}else{const i="MerchandiserContent/Apps/Sale/2023/CountdownApps1223/_CountdownApps1223";f.navigate(`/collections/${i}`,new URLSearchParams({ocid:"storytelling.apps.countdown.dec23",ccid:"ccid=$ASID$"}));return}else if(e==="featureddealsmmtv"){const i="movies/video.collections.sale_countdown2023";f.navigate(`/collections/${i}`,new URLSearchParams({ocid:"storytelling.MMTV.countdown.dec23",ccid:"ccid=$ASID$"}));return}window.open(this.data.externalUri,"_blank");return}this.collectionName&&f.navigate(`/collections/${this.collectionName}`);break;case"link":window.open(this.data.productId,"_blank");break;case"msLink":{if(this.data.redirectUrl){window.open(this.data.redirectUrl,"_blank");return}window.location.href=this.data.externalUri;break}}}openDetailPage(){if(this.isActived&&!this.stopClickToJump&&!this.isHolding){if(this.data.productId===this.instantGamesId){window.location.href=this.data.externalUri+"/&cid=InstantArcadeWebRedirect";return}else if(this.isMSStoreLink){if(this.data.externalUri?.startsWith(p.EditorialUrl))return this.navigationPage("editorial");if(this.data.externalUri?.startsWith(p.StorePdpUrl))return this.navigationPage("pdp");if(this.data.externalUri?.startsWith(p.CollectionUrl))return this.navigationPage("collection")}else{this.canJumpPdp?this.navigationPage("pdp"):this.isCollections?this.navigationPage("collection"):this.isLink&&this.navigationPage("link");return}if(this.isCollections)return this.navigationPage("collection");this.isMSStoreLink&&this.navigationPage("msLink")}}renderOverlay(){const t=`opacity: ${this.cardMaskOpacity}`,e=`width: ${this.calcCardDesc}px`,i=!!this?.getBoundingClientRect(),s=this.getBoundingClientRect().left,a=this.getBoundingClientRect().top;let r="";return this.mouseClientX!==null&&this.mouseClientY!==null&&i&&(r=`background-image: radial-gradient(circle farthest-side at ${this.mouseClientX-s}px ${this.mouseClientY-a}px, transparent 3%, rgba(0, 0, 0, .1) 100%)`),u`
             <!-- We hide the base overlay and hover light elements for performance reasons -->
            <div ?hidden=${this.hideDesc} class="base-overlay"></div>
            <lazy-background-img class="colorful-overlay" background-image="${this.imgUrl}" ?load-immediately=${this.loadImmediately} style="${e}"></lazy-background-img>
            <div class="mask" style="${t}"></div>
            <div ?hidden=${this.hideDesc} class="hover-light" style="${r}"></div>
        `}renderTimer(){return this.isActived?u`
            <svg class="timer">
                <circle cx="15" cy="15" r="5"/>
            </svg>
        `:u``}listenTimerAnimationEnd(){const t=this.shadowRoot?.querySelector(".timer");t?.addEventListener("animationend",this.timerAnimationEndHandler),setTimeout(()=>{t?.classList.add("sport")},1e3)}RemoveListenTimerAnimationEnd(){this.shadowRoot?.querySelector(".timer")?.removeEventListener("animationend",this.timerAnimationEndHandler)}timerAnimationEnd(){this.dispatchEvent(new CustomEvent("go-next",{detail:this.index&&this.index+1}))}render(){const t=`transform: scale(${this.cardScalc});`,e=this.isActived?"isActived":"";return u`

            <a
                id="${e?"active-card":""}"
                class="main ${e}"
                style="${t}"
                @click="${this.openDetailPage}"
                telemetry-event-id=${W.SpotlightCardClicked}
                telemetry-area-id="SpotlightCard"
                telemetry-data='{ "slot": "${this.index>=this.length?this.index-this.length:this.index}", "itemType": "${this.productType}", "itemId": "${this.data.productId}", "redirect": "${this.data.redirectUrl}", "isAd": "${this.isAd}" }'
                dir="${this.direction}"
                tabindex="0"
            >
                <lazy-background-img background-image="${this.imgUrl}" ?load-immediately=${this.loadImmediately}></lazy-background-img>
                ${this.renderOverlay()}
                ${this.renderDesc()}
                ${this.renderButton()}
                ${this.renderTimer()}
            </a>
        `}};n.shadowRootOptions={...k.shadowRootOptions,delegatesFocus:!0};n.styles=[M,V];h([C(".main")],n.prototype,"_main",2);h([m()],n.prototype,"data",2);h([m({type:Boolean,reflect:!0})],n.prototype,"animating",2);h([m({type:Number})],n.prototype,"index",2);h([m({type:Boolean,attribute:"hide-desc"})],n.prototype,"hideDesc",2);h([m({type:Number,attribute:"small-card-width"})],n.prototype,"smallCardWidth",2);h([m({type:Number,attribute:"show-small-img-num"})],n.prototype,"showSmallImgNum",2);h([m({type:String,attribute:"product-type"})],n.prototype,"productType",2);h([m({type:Boolean,attribute:"show-btn-effect"})],n.prototype,"showBtnEffect",2);h([m({type:Boolean,attribute:"stop-click-to-jump"})],n.prototype,"stopClickToJump",2);h([m({type:Boolean,attribute:"start-timer"})],n.prototype,"startTimer",2);h([m({type:Number,attribute:"active-index"})],n.prototype,"activeIndex",2);h([m({type:Number,attribute:"length"})],n.prototype,"length",2);h([m()],n.prototype,"direction",2);h([o()],n.prototype,"cardDetailOpacity",2);h([o()],n.prototype,"cardTitleScalc",2);h([o()],n.prototype,"cardMaskOpacity",2);h([o()],n.prototype,"cardDescOffsetBottom",2);h([o()],n.prototype,"cardScalc",2);h([o()],n.prototype,"isActived",2);h([o()],n.prototype,"mouseClientX",2);h([o()],n.prototype,"mouseClientY",2);n=h([T("spot-light-card")],n);var Z=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,d=(t,e,i,s)=>{for(var a=s>1?void 0:s?tt(e,i):e,r=t.length-1,c;r>=0;r--)(c=t[r])&&(a=(s?c(e,i,a):c(a))||a);return s&&a&&Z(e,i,a),a};let l=class extends k{constructor(){super(),this.configs={},this.data=Array(6).fill(1),this.isReady=!1,this.activeIndex=this.data.length,this.beforeActive=this.data.length,this.translateX=0,this.hideDesc=!1,this.list=[...this.data,...this.data],this.animating=!1,this.deltaX=0,this.isCardFocus=!1,this.isTabFocus=!1,this.isHovered=!1,this.stopClickToJump=!1,this.isDirRTL=!1,this.startTimer=!0,this.isIntersecting=!1,this.hasEleFocus=!1,this.imgMargin=0,this.navWidth=0,this.activeImgWidth="",this.showSmallImgNum=0,this.imgsLen=this.data.length,this.firstShowActiveBtnEffect=!1,this.originX=0,this.originActiveIndex=null,this.originCardDesc=null,this.touchStartX=0,this.touchMoveDirction=null,this.isTouchMove=!1,this.touchIndex=null,this.touchMoveNum=0,this.touchStartTime=0,this.deltaImgWidth=0,this.deltaDescOpacity=0,this.deltaMaskOpacity=0,this.deltaTitleScalc=0,this.deltaDescOffsetBottom=0,this.deltaNextCardScalcForShowOne=0,this.isTouchEnd=!0,this.titleScalc=1.6,this.wideNavWidth=22,this.wideImgMargin=6,this.aspectRatio=9/16,this.maskOpacity=.5,this.descOffsetBottom=22,this.nextCardScalcForShowOne=.95,this.resizedHandler=()=>this.adaptiveLayout(),this.mouseoverdHandler=this.handleMouseOver.bind(this),this.mouseleaveHandler=this.handleMouseLeave.bind(this),this.transitionStartHandler=t=>t.propertyName==="transform"&&(this.stopClickToJump=!0),this.transitionEndHandler=t=>t.propertyName==="transform"&&(this.stopClickToJump=!1),this.listenTabKeyHandler=t=>{t.key==="Tab"&&(this.hasEleFocus=!1,this.changeTimerStatus())},this.listenPageClickHandler=t=>{t.pointerType==="mouse"&&(this.hasEleFocus=!1,this.changeTimerStatus())},this.documentVisibilityChangedHandler=()=>this.startTimer=document.visibilityState==="visible",this.visibleObserver=new IntersectionObserver(t=>{this.isIntersecting=t[0].isIntersecting,this.changeTimerStatus()},{})}changeTimerStatus(){if(this.isIntersecting&&!this.hasEleFocus){this.startTimer=!0;return}this.startTimer=!1}setCardFocus(){this._cards[this.activeIndex]?.focus()}get realActiveWidth(){const t=Number(this.activeImgWidth.replace("%",""))/100;return this.clientWidth*t}get smallImgWidth(){if(this.showSmallImgNum===0)return this.realActiveWidth;const t=(this.clientWidth-this.realActiveWidth-2*this.navWidth-(2*this.showSmallImgNum+6)*this.imgMargin)/this.showSmallImgNum;return Number(t.toFixed(2))}get sliderHeight(){return this.realActiveWidth*this.aspectRatio}get deltaTwoTypeImgWidth(){return this.realActiveWidth-this.smallImgWidth}get calcTouchSliderTranRatio(){return(this.smallImgWidth+2*this.imgMargin)/this.realActiveWidth}get calcTouchImgWidthRatio(){return this.deltaTwoTypeImgWidth/this.realActiveWidth}get cardTitleScalc(){return(this.titleScalc-1)/this.realActiveWidth}get calcDetailOpacityRatio(){return 1/this.realActiveWidth}get calcMaskOpacityRatio(){return this.maskOpacity/this.realActiveWidth}get calcDescOffsetBottom(){return this.descOffsetBottom/this.realActiveWidth}get calcNextCardScalcForShowOne(){return(1-this.nextCardScalcForShowOne)/this.realActiveWidth}connectedCallback(){super.connectedCallback(),this.adaptiveLayout(),window.addEventListener("resize",this.resizedHandler),window.addEventListener("keydown",this.listenTabKeyHandler),window.addEventListener("pointerdown",this.listenPageClickHandler),document.addEventListener("visibilitychange",this.documentVisibilityChangedHandler),document.addEventListener("skipToSpotlight",()=>this.setCardFocus()),this.updateDirValue()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizedHandler),window.removeEventListener("keydown",this.listenTabKeyHandler),window.removeEventListener("pointerdown",this.listenPageClickHandler),document.removeEventListener("visibilitychange",this.documentVisibilityChangedHandler),document.removeEventListener("skipToSpotlight",()=>this.setCardFocus()),this._imgWrap.removeEventListener("transitionstart",this.transitionStartHandler),this._imgWrap.removeEventListener("transitionend",this.transitionEndHandler),this._container.removeEventListener("mouseover",this.mouseoverdHandler),this._container.removeEventListener("mouseleave",this.mouseleaveHandler),this.visibleObserver.disconnect()}firstUpdated(){this.listenEventList()}listenEventList(){this._container&&(this._container.addEventListener("mouseover",this.mouseoverdHandler),this._container.addEventListener("mouseleave",this.mouseleaveHandler),this.visibleObserver.observe(this._container)),this._imgWrap&&(this._imgWrap.addEventListener("transitionstart",this.transitionStartHandler),this._imgWrap.addEventListener("transitionend",this.transitionEndHandler))}updateDirValue(){document.documentElement.getAttribute("dir")==="rtl"||v.isRtl()?this.isDirRTL=!0:this.isDirRTL=!1}handleTouchStart(t){const{e,targetIndex:i}=t.detail;e.touches&&e.touches.length>1||(this.touchIndex=i,this.touchIndex&&(this.originX=this.translateX,this.originActiveIndex=this.activeIndex,this.touchStartX=e.touches[0]?.clientX,this.animating=!1,this.touchStartTime=new Date().getTime(),this.isTouchMove=!1,this.touchMoveDirction=null,this.touchMoveNum=0,this.deltaX=0))}handleTouchMove(t){const{e}=t.detail;if(this.deltaX=e.touches[0]?.clientX-this.touchStartX,this.touchMoveNum=Math.floor(Math.abs(this.deltaX/this.realActiveWidth)),this.touchMoveDirction=null,Math.abs(this.deltaX%this.realActiveWidth)<this.realActiveWidth*.35?this.isTouchMove=!1:this.isTouchMove=!0,this.deltaX<0?this.touchMoveDirction="right":this.deltaX>0&&(this.touchMoveDirction="left"),this.touchIndex!==null){const i=this.touchIndex===this.activeIndex?-1*this.calcTouchImgWidthRatio:this.calcTouchImgWidthRatio,s=Math.abs(this.deltaX%this.realActiveWidth);this.deltaImgWidth=Math.abs(s*i),this.deltaDescOpacity=s*this.calcDetailOpacityRatio,this.deltaTitleScalc=s*this.cardTitleScalc,this.deltaMaskOpacity=s*this.calcMaskOpacityRatio,this.deltaDescOffsetBottom=s*this.calcDescOffsetBottom,this.deltaNextCardScalcForShowOne=s*this.calcNextCardScalcForShowOne;const a=this.deltaX*this.calcTouchSliderTranRatio;this.translateX=this.originX+a}this.startTimer=!1}handleTouchEnd(t){const{e,openDetailPage:i,handleButtonClick:s}=t.detail;if(!this.isTouchEnd||this.touchIndex===null)return;if(Math.abs(this.deltaX)<3){this.originActiveIndex===this.activeIndex&&(e.target instanceof R?s():i()),this.handleTouchImg(this.touchIndex);return}const a=new Date().getTime()-this.touchStartTime<300&&Math.abs(this.deltaX)>30;if(this.isTouchMove||a){const r=this.touchMoveDirction==="right"?this.activeIndex+this.touchMoveNum+1:this.activeIndex-this.touchMoveNum-1;this.beforeActive=this.touchMoveDirction==="right"?r-1:r+1,this.handleTouchImg(r)}else{const r=this.touchMoveDirction==="right"?this.activeIndex+this.touchMoveNum:this.activeIndex-this.touchMoveNum;this.beforeActive=this.touchMoveDirction==="right"?r-1:r+1,this.handleTouchImg(r)}this.startTimer=!0}handleMouseOver(){this.isReady&&(this.isHovered=!0)}handleMouseLeave(){this.isHovered=!1}updated(t){t.has("activeIndex")&&(this.isCardFocus&&this.shadowRoot?.activeElement?.localName==="spot-light-card"&&setTimeout(()=>this._cards[this.activeIndex]?.focus(),300),this.isTabFocus&&this.shadowRoot?.activeElement?.className==="tab-item"&&setTimeout(()=>this._tabItems[this.activeIndex%this.imgsLen]?.focus(),300)),this.firstShowActiveBtnEffect=!1,t.has("isReady")&&this.isReady&&(this.firstShowActiveBtnEffect=!0)}ready(t){this.activeIndex=this.beforeActive=this.imgsLen=t.length,this.list=[...t,...t,...t.slice(0,this.showSmallImgNum)],this.init(),this.isReady=!0}async adaptiveLayout(){const t=window.innerWidth;this.hideDesc=!1;for(const[e,i]of Object.entries(this.configs)){const{activeImgWidth:s,showSmallImgNum:a,hideDesc:r}=i;if(t<Number(e)){a===0?(this.navWidth=0,this.imgMargin=0,this.showSmallImgNum=0,this.activeImgWidth="100%",this.animating=!1,this.hideDesc=!!r):(this.activeImgWidth=s,this.showSmallImgNum=a);break}this.activeImgWidth=s,this.showSmallImgNum=a,this.navWidth=this.wideNavWidth,this.imgMargin=this.wideImgMargin,this.isReady&&(this.animating=!0)}this.animating=!1,await this.updateComplete,this.isReady&&(this.animating=!0),this.init()}init(){this.setMoveAmition(()=>{this.translateX=-1*(this.smallImgWidth+2*this.imgMargin)*(this.activeIndex-1)-this.smallImgWidth+this.navWidth})}setMoveAmition(t){if(requestAnimationFrame){requestAnimationFrame&&requestAnimationFrame(()=>t());return}setTimeout(t,16.7)}calcImgStyle(t){let e,i,s,a,r,c,A;const E=this.touchMoveDirction==="right"?this.activeIndex+this.touchMoveNum:this.activeIndex-this.touchMoveNum;if(t===E?(e=this.realActiveWidth,i=this.titleScalc,s=1,a=0,r=this.descOffsetBottom,c=1,A=!0):(e=this.smallImgWidth,i=1,s=0,a=this.maskOpacity,r=0,c=this.showSmallImgNum===0?this.nextCardScalcForShowOne:1,A=!1),this._cards[t]&&(this._cards[t].cardTitleScalc=i,this._cards[t].cardDetailOpacity=s,this._cards[t].cardMaskOpacity=a,this._cards[t].cardDescOffsetBottom=r,this._cards[t].cardScalc=c,this._cards[t].isActived=A),this.touchIndex!==null&&this.originActiveIndex){const D=E,N=this.touchMoveDirction==="right"?D+1:D-1;t===D?(e=Math.max(e-this.deltaImgWidth,this.smallImgWidth),this._cards[t].cardTitleScalc=Math.max(i-this.deltaTitleScalc,1),this._cards[t].cardDetailOpacity=Math.max(s-this.deltaDescOpacity,0),this._cards[t].cardMaskOpacity=Math.min(this.deltaMaskOpacity,this.maskOpacity),this._cards[t].cardDescOffsetBottom=Math.max(r-this.deltaDescOffsetBottom,0),this.showSmallImgNum===0&&(this._cards[t].cardScalc=Math.max(c-this.deltaNextCardScalcForShowOne,this.nextCardScalcForShowOne))):t===N?(e=Math.min(e+this.deltaImgWidth,this.realActiveWidth),this._cards[t].cardTitleScalc=Math.min(i+this.deltaTitleScalc,this.titleScalc),this._cards[t].cardDetailOpacity=Math.min(s+this.deltaDescOpacity,1),this._cards[t].cardMaskOpacity=Math.max(this.maskOpacity-this.deltaMaskOpacity,0),this._cards[t].cardDescOffsetBottom=Math.min(r+this.deltaDescOffsetBottom,this.descOffsetBottom),this.showSmallImgNum===0&&(this._cards[t].cardScalc=Math.min(c+this.deltaNextCardScalcForShowOne,1))):(e=this.smallImgWidth,this._cards[t].cardTitleScalc=i,this._cards[t].cardDetailOpacity=s,this._cards[t].cardMaskOpacity=a,this._cards[t].cardDescOffsetBottom=r,this._cards[t].cardScalc=c)}return{width:e+"px",margin:`0 ${this.imgMargin}px`,height:this.sliderHeight+"px"}}handleClickImg(t,e=!0){if(this.animating=e,this.touchIndex===null&&(this.beforeActive=this.activeIndex),this.activeIndex=t,this.activeIndex<=1){this.animating=!1;const i=this.activeIndex;this.activeIndex=this.beforeActive+this.imgsLen;const s=this.deltaX*this.calcTouchSliderTranRatio;this.translateX=-1*(this.smallImgWidth+2*this.imgMargin)*(this.activeIndex-1)-this.smallImgWidth+this.navWidth+s,this.isTouchEnd=!1,this.setMoveAmition(()=>{this.activeIndex=i,this.animating=!0,this.handleClickImg(this.activeIndex+this.imgsLen)});return}if(this.activeIndex>this.imgsLen+1&&this.beforeActive>=this.imgsLen){this.animating=!1,this.animating=!1;const i=this.activeIndex;this.activeIndex=this.beforeActive-this.imgsLen;const s=this.deltaX*this.calcTouchSliderTranRatio;this.isTouchEnd=!1,this.translateX=-1*(this.smallImgWidth+2*this.imgMargin)*(this.activeIndex-1)-this.smallImgWidth+this.navWidth+s,this.setMoveAmition(()=>{this.activeIndex=i,this.animating=!0,this.handleClickImg(this.activeIndex-this.imgsLen)});return}this.translateX=-1*(this.smallImgWidth+2*this.imgMargin)*(this.activeIndex-1)-this.smallImgWidth+this.navWidth,this.deltaX=0,this.deltaImgWidth=0,this.deltaDescOpacity=0,this.deltaMaskOpacity=0,this.deltaTitleScalc=0,this.deltaDescOffsetBottom=0,this.deltaNextCardScalcForShowOne=0,this.touchIndex=null,this.touchMoveDirction=null,this.originActiveIndex=null,this.isTouchEnd=!0,this.touchMoveNum=0}handleTouchImg(t){this.animating=!0,this.beforeActive=this.activeIndex,this.activeIndex=t,this.handleClickImg(t)}handleKeydown(t){if(t.key==="ArrowLeft")this.handleClickImg(this.activeIndex-1);else if(t.key==="ArrowRight")this.handleClickImg(this.activeIndex+1);else return;this.startTimer=!1}throttleHandleKeydown(){let t;const e=this;return function(i){t||(t=setTimeout(()=>{t=null,e.handleKeydown.call(e,i)},300))}}focusTarget(t){t==="card"?(this.isCardFocus=!0,this.isTabFocus=!1):t==="tab"&&(this.isTabFocus=!0,this.isCardFocus=!1)}renderSpotItem(t,e){return u`
            <div
                class="spot-img"
                style=${X(this.calcImgStyle(e))}
            >
                ${this.isReady?this.renderCard(t,e):this.renderShimmer()}
            </div>
        `}renderSpotlight(){const t=this.animating?"animating":"",e=this.activeImgWidth==="100%"?`width: ${this.realActiveWidth}px`:"width: auto",s=`transform: translate3d(${(this.isDirRTL?-1:1)*this.translateX}px, 0, 0)`;return u`
            <div
                class="spotlight ${t}"
                style="${e}"
            >
                <div class="imgs-wrap" style="${s}" role="list" @keydown="${this.throttleHandleKeydown()}">
                    ${this.list.map((a,r)=>this.renderSpotItem(a,r))}
                </div>
            </div>
        `}renderCard(t,e){const i=e===this.activeIndex?0:-1,s=this.firstShowActiveBtnEffect&&this.activeIndex===e;return u`
            <spot-light-card
                .data=${t}
                index=${e}
                length=${this.imgsLen}
                active-index=${this.activeIndex}
                ?show-btn-effect=${s}
                ?hide-desc=${this.hideDesc}
                ?animating=${this.animating}
                ?stop-click-to-jump=${this.stopClickToJump}
                small-card-width=${this.smallImgWidth}
                show-small-img-num=${this.showSmallImgNum}
                product-type=${t.typeTag||g.Application}
                ?start-timer=${this.startTimer}
                direction=${this.isDirRTL?"rtl":"ltr"}
                tabindex=${i}
                role="listitem"
                @focus="${()=>this.focusTarget("card")}"
                @touch-start=${this.handleTouchStart}
                @touch-move=${this.handleTouchMove}
                @touch-end=${this.handleTouchEnd}
                @keydown=${this.jumpDEtailPage}
                @go-next=${({detail:a})=>this.handleClickImg(a)}
                @click="${()=>this.handleClickImg(e)}"
            ></spot-light-card>
        `}jumpDEtailPage(t){t.key==="Enter"&&this._cards[this.activeIndex]?.openDetailPage()}renderShimmer(){return u`
            <sl-skeleton effect="pulse"></sl-skeleton>
        `}renderTabList(){return u`
            <ul class="tab-list">
                ${H(Array(this.imgsLen),()=>!0,(t,e)=>this.renderTabItem(e))}
            </ul>
        `}renderTabItem(t){const e=this.activeIndex%this.imgsLen;return u`
            <li class="tab-item" tabindex="${t===e?0:-1}" @focus="${()=>this.focusTarget("tab")}" @click="${()=>this.handleClickTab(t)}" active=${t===e} @keydown="${this.throttleHandleKeydown()}"
                telemetry-event-id="SpotlightTabClicked"></li>
        `}renderPagingButtons(){const t=this.isHovered?null:-1;return u`
            <scroll-button
                class="scroll-left-button"
                direction="left"
                telemetry-event-id="SpotlightPagingLeftClicked"
                tabindex="${t}"
                @click="${this.scrollProductsLeft}"
            ></scroll-button>
            <scroll-button
                class="scroll-right-button"
                direction="right"
                telemetry-event-id="SpotlightPagingRightClicked"
                tabindex="${t}"
                @click="${this.scrollProductsRight}"
            ></scroll-button>
        `}scrollProductsLeft(){const t=this.isDirRTL?this.activeIndex+this.showSmallImgNum+1:this.activeIndex-this.showSmallImgNum-1;this.handleClickImg(t)}scrollProductsRight(){const t=this.isDirRTL?this.activeIndex-this.showSmallImgNum-1:this.activeIndex+this.showSmallImgNum+1;this.handleClickImg(t)}handleClickTab(t){const e=this.activeIndex%this.imgsLen;let i=0;e!==t&&(e<t?(i=this.activeIndex+(t-e),this.handleClickImg(i)):(i=this.activeIndex-(e-t),this.activeIndex<this.imgsLen&&i<=1?(this.handleClickImg(this.activeIndex+this.imgsLen,!1),this.setMoveAmition(()=>this.handleClickImg(i+this.imgsLen))):this.handleClickImg(i)))}render(){return u`
            ${this.renderSpotlight()}
            ${this.renderPagingButtons()}
            ${this.renderTabList()}
        `}};l.styles=[M,J];d([C(".spotlight")],l.prototype,"_container",2);d([C(".imgs-wrap")],l.prototype,"_imgWrap",2);d([_("spot-light-card")],l.prototype,"_cards",2);d([_(".tab-item")],l.prototype,"_tabItems",2);d([m({type:Object})],l.prototype,"configs",2);d([m({type:Array})],l.prototype,"data",2);d([o()],l.prototype,"isReady",2);d([o()],l.prototype,"activeIndex",2);d([o()],l.prototype,"beforeActive",2);d([o()],l.prototype,"translateX",2);d([o()],l.prototype,"hideDesc",2);d([o()],l.prototype,"list",2);d([o()],l.prototype,"animating",2);d([o()],l.prototype,"deltaX",2);d([o()],l.prototype,"isCardFocus",2);d([o()],l.prototype,"isTabFocus",2);d([o()],l.prototype,"isHovered",2);d([o()],l.prototype,"stopClickToJump",2);d([o()],l.prototype,"isDirRTL",2);d([o()],l.prototype,"startTimer",2);d([o()],l.prototype,"isIntersecting",2);d([o()],l.prototype,"hasEleFocus",2);l=d([T("product-spotlight")],l);var et=Object.defineProperty,it=Object.getOwnPropertyDescriptor,y=(t,e,i,s)=>{for(var a=s>1?void 0:s?it(e,i):e,r=t.length-1,c;r>=0;r--)(c=t[r])&&(a=(s?c(e,i,a):c(a))||a);return s&&a&&et(e,i,a),a};let b=class extends k{constructor(){super(...arguments),this.collectionName=U.Home,this.list=[],this.imgs=Array(6).fill(1),this.show=!0,this.isLoaded=!1,this.spotlightData=[],this.configs={1024:{showSmallImgNum:0},1400:{activeImgWidth:"70%",showSmallImgNum:1},1650:{activeImgWidth:"58%",showSmallImgNum:2},1800:{activeImgWidth:"56%",showSmallImgNum:2},default:{activeImgWidth:"48%",showSmallImgNum:3}}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),w.removeImpressionTracking(this)}validateProductsList(t){const e=[];if(t?Array.isArray(t)?!Array.isArray(t)||t.length===0?e.push("Products list is empty."):t.forEach(i=>{i.title||e.push("Invalid Product Name for productId: "+i.productId),i.productId||e.push("Invalid Product Id:  "+i.productId)}):e.push("Products list should be an array."):e.push("Products list is required"),e.length>0)throw j.stringify(e)}async fetchData(){if(!this.collectionName)throw new Error("Unable to fetch spotlight items because no collection name specified.");try{const t=await O.getPromotionProducts(this.collectionName);this.list=t.productsList||[];const e=navigator.userAgent.toLowerCase(),i=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(navigator.userAgentData?.mobile||e.includes("macintosh")||e.includes("android")||e.includes("linux")||i){const s=this.list.findIndex(a=>a.productId==="MerchandiserContent/Games/Primary/instantgamescollectionprimary/_instantgamescollectionprimary");s!==-1&&this.list.splice(s,1)}this.validateProductsList(this.list)}finally{this.spotLight.ready(this.list),w.addImpressionTracking(this)}}firstUpdated(){this.fetchData()}render(){return u`
            <product-spotlight
                id='spotLight'
                .configs=${this.configs}
                telemetry-area-id='Spotlight'
                telemetry-data='{ "areaSlot": 0, "list": ${JSON.stringify(this.list.map(({title:t,productId:e})=>({title:t,productId:e})))}, "size": ${this.list.length}, "collection": "${this.collectionName}"}'
            ></product-spotlight>
        `}};y([m({attribute:"collection-name"})],b.prototype,"collectionName",2);y([o()],b.prototype,"list",2);y([o()],b.prototype,"imgs",2);y([o()],b.prototype,"show",2);y([o()],b.prototype,"isLoaded",2);y([C("#spotLight")],b.prototype,"spotLight",2);y([o()],b.prototype,"spotlightData",2);b=y([T("product-spotlight-control")],b);export{b as SpotLightControl};
