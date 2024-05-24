import{i as w,s as m,an as h,l as n,b,x as r,a as g,n as v,r as u,t as f}from"./index-b49b19e7.js";import{c as p}from"./repeat-18af36e2.js";import{alertService as k}from"./alert-service-619e8956.js";import"./product-collection-3fa5ff54.js";import"./chunk.MHCKU7CX-df67fb6b.js";import"./auto-complete-app-search-29ced610.js";import"./product-review-d1e8dcdb.js";import{b as R}from"./platform-2180e403.js";import{f as y}from"./filter-menu.styles-d60fd63e.js";import"./chunk.HDLULROG-a171dd0c.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-42ee1a93.js";import"./style-map-db7a8965.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-27cf3c1f.js";import"./image-helper-99359f42.js";import"./nav-bar-27bbdc35.js";import"./chunk.YCHBWCKL-ccebaa75.js";const x=w`
    :root {
        display: block;
    }

    .main-container {
        display: flex;
        flex-direction: column;
        margin-top: 28px;
    }

    .reviews-container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 28px;
    }

    .review-skeleton {
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-small);
        margin-top: var(--sl-spacing-large);
    }

    .header-skeleton {
        width: 25%;
    }

    .rating-skeleton {
        width: 13%;
    }

    .review-skeleton {
        width: 75%;
    }

    .name-skeleton {
        width: 20%;
    }

    .show-more-btn {
        width: fit-content;
    }

    .show-more-btn::part(label) {
        padding-left: 0;
    }

    .toolbar {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    sl-button::part(base) {
        height: 32px;
        min-height: 0;
        align-items: center;
        background-color: #FFFFFFB2;
    }

    sl-button::part(label), .sort-by-text {
        font-size: 14px;
        font-weight: 400;
        font-family: var(--body-font);
        color: #000000E4;
    }

    sl-button:hover::part(label) {
        color: var(--theme-secondary-element-color);
    }

    .sort-order-btn::part(label) {
        padding-left: 12px;
        padding-right: 20px;
    }

    .sort-order-btn::part(caret) {
        width: 12px;
    }

    sl-menu-item::part(base) {
        gap: 2px;
    }

    sl-menu-item::part(label) {
        font-size: 14px;
    }

    sl-menu-item::part(checked-icon) {
        width: 14px;
        height: 26px;
    }

    .checked-style::part(base)::before {
        content: "";
        background-color: var(--sl-color-primary-600);
        width: 3px;
        height: 50%;
        position: absolute;
        left: 0;
        top: 25%;
    }

    .checked-style::part(base) {
        background-color: var(--sl-color-neutral-100);
    }

    @media (prefers-color-scheme: dark) {
        sl-menu-item::part(base) {
            background-color: var(--sl-color-neutral-100);
            color: var(--sl-color-neutral-1000);
        }

        sl-menu-item::part(base):hover {
            background-color: var(--sl-color-neutral-300);
        }

        sl-button::part(base):hover, sl-button:hover::part(caret) {
            background-color: var(--sl-color-neutral-200);
            color: var(--theme-secondary-element-hover-color) !important;
        }

        sl-button::part(base) {
            background-color: #FFFFFF0F;
        }

        sl-button::part(label), .sort-by-text, sl-button::part(caret) {
            color: #FFFFFF;
        }

        .checked-style::part(base) {
            background-color: var(--sl-color-neutral-300);
        }

        .checked-style::part(base)::before {
            background-color: var(--theme-secondary-element-color);
        }
    }
`;var F=Object.defineProperty,S=Object.getOwnPropertyDescriptor,c=(e,t,s,o)=>{for(var i=o>1?void 0:o?S(t,s):t,d=e.length-1,a;d>=0;d--)(a=e[d])&&(i=(o?a(t,s,i):a(i))||i);return o&&i&&F(t,s,i),i};let l=class extends m{constructor(){super(...arguments),this.productId=null,this.productName="",this.reviews=[],this.isFetchingReviews=!1,this.pageNumber=1,this.hasMoreReviews=!0,this.take=10,this.sortOrders=[{value:h.MostHelpful,label:n.get("RatingReview.MostHelpful")},{value:h.MostRecent,label:n.get("RatingReview.MostRecent")},{value:h.HighestRated,label:n.get("RatingReview.HighestRated")},{value:h.LowestRated,label:n.get("RatingReview.LowestRated")}],this.sortOrder=this.sortOrders[0]}connectedCallback(){super.connectedCallback(),this.reviews.length===0?this.fetchNextReviewsChunk():this.shadowRoot?.querySelectorAll("sl-animation").forEach(e=>e.play=!0)}setComboboxRoles(){(this.shadowRoot?.querySelector(".sort-order-btn")).shadowRoot?.querySelector('[part~="base"]')?.setAttribute("role","combobox")}fetchNextReviewsChunk(){if(this.productId&&this.hasMoreReviews&&!this.isFetchingReviews){this.isFetchingReviews=!0;const e=this.sortOrder;b.getReviews(this.productId,this.sortOrder.value,this.pageNumber,this.take).then(t=>this.reviewsLoaded(t,e)).catch(t=>k.showError("Error loading reviews","There was a problem loading the reviews for this app. It might help to try again later by refreshing the page.",t)).finally(()=>this.performPostReviewFetchActions())}}performPostReviewFetchActions(){this.isFetchingReviews=!1,this.setComboboxRoles()}reviewsLoaded(e,t){this.sortOrder===t&&(this.reviews=this.reviews.concat(e.items||[]),this.pageNumber=e.nextPageNumber,this.hasMoreReviews=e.hasMorePages)}render(){return r`
            <div class="main-container">
                ${this.renderToolbar()}
                <div class="reviews-container" role="list" @keydown="${this.keyDown}" >
                    ${p(this.reviews||[],e=>e.reviewId,(e,t)=>this.renderReview(e,t))}
                    ${this.renderReviewSkeletons()}
                </div>
            </div>
        `}renderToolbar(){return r`
            <div class="toolbar">
                <span class="sort-by-text">Sort by:</span>
                <sl-dropdown>
                    <sl-button class="sort-order-btn" slot="trigger" aria-label="${n.getFormatted("Collection.Filter.SortByAriaLabel","rating")}" caret>${this.sortOrder.label}</sl-button>
                    <sl-menu>
                        ${p(this.sortOrders,e=>this.renderSortOption(e))}
                    </sl-menu>
                </sl-dropdown>
                ${this.renderAddReviewBtn()}
            </div>
        `}renderAddReviewBtn(){return R()?r`
            <sl-button @click="${this.addReview}" telemetry-event-id="ReviewAddClicked">${n.get("RatingReview.AddAReview")}</sl-button>
        `:r``}renderSortOption(e){const t=e.label===this.sortOrder.label?"checked-style":"";return r`
            <sl-menu-item class="${t}" @click="${()=>this.changeSort(e)}" 
                          telemetry-event-id="SortOrderChanged" 
                          telemetry-data='{ "data": "${e.value}" }' >
                ${e.label}
            </sl-menu-item>
        `}renderReview(e,t){const s=t<this.take?t*50:0;return r`
            <sl-animation name="fadeIn" easing="ease-out" duration="1000" fill="both" play iterations="1" delay="${s}" aria-hidden="true">
                <product-review tabindex="${t===0?0:-1}" .productName="${this.productName}" .review="${e}" review-url=${e.reviewUrl} role="listitem" @focus="${this.reviewFocused}" @blur="${this.reviewBlurred}"></product-review>
            </sl-animation>
        `}renderReviewSkeletons(){return this.isFetchingReviews?r`${p([1,2,3,4],()=>this.renderReviewSkeleton())}`:r``}renderReviewSkeleton(){return r`
            <div class="review-skeleton">
                <sl-skeleton class="header-skeleton" effect="pulse"></sl-skeleton>
                <sl-skeleton class="rating-skeleton" effect="pulse"></sl-skeleton>
                <sl-skeleton class="review-skeleton" effect="pulse"></sl-skeleton>
                <sl-skeleton class="name-skeleton" effect="pulse"></sl-skeleton>
            </div>
        `}renderShowMore(){return this.isFetchingReviews||!this.hasMoreReviews?r``:r`
            <sl-button class="show-more-btn" variant="text" size="medium"
                       telemetry-event-id="LoadMoreClicked"
                       @click="${()=>this.fetchNextReviewsChunk()}">
                ${n.get("ProductDetails.ShowMore")}
            </sl-button>
        `}changeSort(e){this.sortOrder!==e&&(this.sortOrder=e,this.pageNumber=1,this.hasMoreReviews=!0,this.reviews=[],this.fetchNextReviewsChunk())}addReview(){this.productId&&(location.href=`ms-windows-store://review/?ProductId=${this.productId}`)}keyDown(e){const t=e.key==="ArrowUp",s=e.key==="ArrowDown";if(t||s){const o=this.shadowRoot?.querySelectorAll(".reviews-container product-review"),i=this.shadowRoot?.querySelector(".reviews-container product-review:focus-within");if(i&&o){const d=Array.from(o).indexOf(i),a=d!==-1?d+(t?-1:1):-1;a>=0&&a<o.length&&(o.item(a).highlighted=!0,e.preventDefault())}}}reviewFocused(e){this.markReviewAsHighlighted(e,!0)}reviewBlurred(e){this.markReviewAsHighlighted(e,!1)}markReviewAsHighlighted(e,t){const s=e.target;s&&(s.highlighted=t)}};l.styles=[g,y,x];c([v({attribute:"product-id"})],l.prototype,"productId",2);c([v({attribute:"product-name"})],l.prototype,"productName",2);c([u()],l.prototype,"reviews",2);c([u()],l.prototype,"isFetchingReviews",2);c([u()],l.prototype,"hasMoreReviews",2);c([u()],l.prototype,"sortOrder",2);l=c([f("ratings-reviews-list")],l);export{l as ProductDetailsPage};
