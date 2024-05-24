import{i as g,m as u,B as v,s as b,b as f,x as n,l as d,a as w,n as p,r as m,t as x}from"./index-aa05d19d.js";import{c as y}from"./repeat-1a78a8d2.js";import"./product-collection-91cc6b51.js";import"./auto-complete-app-search-dfdb1cc6.js";import"./product-review-9b3a8083.js";import{alertService as k}from"./alert-service-1970f04a.js";import{P as R}from"./nav-bar-cd5e889c.js";import"./style-map-a428b004.js";import"./css-function-2ba732a7.js";import"./image-helper-99359f42.js";import"./chunk.HDLULROG-fa2c67c1.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-faa56958.js";const C=g`
    :host {
        display: block;
    }

    /** In ratings & reviews section, have a square skeleton to simulate the square box containing the average rating and total rating count */
    sl-skeleton.square-rating {
        width: 5em;
        height: 5em;
        --border-radius: 0;
    }

    /** We have several skeletons simulating the star rating count bars  */
    .star-rating-skeleton-container {
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-x-small);
        width: 100%;
        margin-left: var(--sl-spacing-x-small);
    }

    .ratings-section {
        display: flex;
        gap: 42px;
        align-items: center;
    }

    .rating-box {
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-2x-small);
    }

    /** Big font size for the average rating */
    h1 {
        font-size: 66px;
        font-weight: var(--sl-font-weight-semibold);
        margin-top: calc(var(--sl-spacing-large) * -1); /** Remove some of the space at the top */
        margin-bottom: calc(var(--sl-spacing-2x-small) * -1);
    }

    /** Underneath the big average rating number, we show star rating in a smaller size. */
    .rating-box sl-rating {
        --symbol-size: 0.8em;
        width: 100%;
    }

    .rating-count {
        width: 100%;
        display: inline-block;
        text-transform: uppercase;
        color: var(--sl-color-gray-700);
        font-size: 12px;
        padding-left: var(--sl-spacing-3x-small);
    }

    .star-count-container {
        flex-grow: 2;
    }

    .star-count {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .star-count sl-progress-bar {
        width: min(100%, 200px);
        --height: var(--sl-spacing-x-small);
        --indicator-color: #F8871B;
        --track-color: #FFB22E33;
    }

    .star-count span {
        font-size: 8px;
        color: var(--sl-color-gray-700);
        width: 8px;
        display: flex;
        justify-content: center;
    }

    .star-rating {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    sl-rating::part(base) {
        --symbol-size: 10px;
        --symbol-color-active: #F8871B;
    }

    .see-all-btn {
        margin-top: 12px;
    }

    .see-all-btn::part(label) {
        font-weight: 400;
        padding: 0;
    }

    .see-all-btn::part(base) {
        font-family: var(--body-font);
        color: var(--theme-primary-element-color);
        line-height: 24px;
        min-height: 0;
    }

    .see-all-btn::part(base):hover {
        color: var(--sl-color-primary-600);
    }

    img {
        width: 14px;
        height: 14px;
    }

    @media (prefers-color-scheme: dark) {
        .see-all-btn::part(label) {
            color: var(--theme-secondary-element-color) !important;
        }

        .see-all-btn::part(label):hover{
            color: var(--theme-secondary-element-hover-color) !important;
        }
    }

    ${u(v.xs)} {
        img {
            width: 12px;
            height: 12px;
        }
        
    }
`;var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(e,t,r,s)=>{for(var i=s>1?void 0:s?T(t,r):t,c=e.length-1,o;c>=0;c--)(o=e[c])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&S(t,r,i),i};let a=class extends b{constructor(){super(),this.showReview="show",this.productName="",this.isDarkMode=!1,this.reviews=null,this.reviewsLoading=!0,this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new R(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange(),this.productId&&this.catalogSource&&f.getReviewsSummary(this.productId,this.catalogSource).then(e=>this.ratingsReviewsLoaded(e)).catch(e=>k.showError("Unable to load reviews","We had trouble loading the ratings and reviews. It might help to try again in a few minutes.",e)).finally(()=>this.reviewsLoading=!1)}disconnectedCallback(){super.disconnectedCallback(),this.prefersThemesObserver?.removeListenThemeChange()}handleThemeChange(e){this.isDarkMode=e,this.requestUpdate()}render(){return this.reviewsLoading?this.renderReviewsSkeleton():this.reviews?n`
            ${this.renderRatings(this.reviews)}
            ${this.renderTopReview(this.reviews)}
        `:n``}renderRatings(e){const t=[e.star5Count,e.star4Count,e.star3Count,e.star2Count,e.star1Count].map(o=>o||0),r=t.reduce((o,h)=>o+h),s=d.getLocaleName(),i=d.getFormatted("ProductDetails.RatingsCount",new Intl.NumberFormat(s).format(r)),c=new Intl.NumberFormat(s,{minimumFractionDigits:1,maximumFractionDigits:1}).format(e.averageRating);return n`
            <div class="ratings-section">
                <div class="rating-box">
                    <h1>${c}</h1>
                    <span class="rating-count">${i}</span>
                </div>
                <div class="star-count-container">
                    ${y(t,(o,h)=>this.renderStarRating(5-h,o,r))}
                </div>
            </div>
        `}renderReviewsSkeleton(){return n`
            <div class="d-flex">
                <sl-skeleton class="square-rating" effect="pulse"></sl-skeleton>
                <div class="star-rating-skeleton-container">
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                    <sl-skeleton effect="pulse"></sl-skeleton>
                </div>
            </div>
        `}renderStarRating(e,t,r){const s=Math.round(100*(r===0?0:t/r));return n`
            <div class="star-count">
                <div class="star-rating">
                    <span>${e}</span>
                    <sl-rating label="rating" readonly value="1" max="1" tabindex="-1"></sl-rating>
                </div>
                <sl-progress-bar value="${s}"></sl-progress-bar>
            </div>
        `}renderTopReview(e){if(this.catalogSource==="AmazonAppStore"){const t=d.get("ProductDetails.SeeFromAmazon"),r=this.reviews?.redirectLink,s=this.isDarkMode?"/assets/icons/see-all-dark.svg":"/assets/icons/see-all-light.svg";return n`
            <sl-button class="see-all-btn" variant="text" size="medium"
                           telemetry-event-id="SeeAllClicked"
                           href="${r||""}"
                           target="_blank">
                    ${t}
                    <img src="${s}" alt="${d.get("ProductDetails.GetLogo.label")}" />
            </sl-button>
            `}return this.showReview==="hide"||!e.mostFavorableReview||!e.mostFavorableReview.reviewId?n``:n`
            <product-review .review="${e.mostFavorableReview}" ?most-helpful="${!0}" .productName="${this.productName}"></product-review>
        `}ratingsReviewsLoaded(e){this.reviews=e,(!e||e.reviewCount===0)&&this.dispatchEvent(new CustomEvent("reviewsempty",{bubbles:!0,composed:!0}))}};a.styles=[w,C];l([p({attribute:"product-id"})],a.prototype,"productId",2);l([p({attribute:"catalog-source"})],a.prototype,"catalogSource",2);l([p({attribute:"show-favorable-review"})],a.prototype,"showReview",2);l([p({attribute:"product-name"})],a.prototype,"productName",2);l([p({type:Boolean})],a.prototype,"isDarkMode",2);l([m()],a.prototype,"reviews",2);l([m()],a.prototype,"reviewsLoading",2);a=l([x("ratings-reviews-summary")],a);export{a as RatingsReviewsSummary};
