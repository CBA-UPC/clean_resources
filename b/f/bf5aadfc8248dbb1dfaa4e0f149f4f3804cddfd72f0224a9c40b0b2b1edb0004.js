import{i as d,m as p,B as w,a as m,n as c,r as g,s as u,x as l,l as r,t as f}from"./index-b49b19e7.js";import"./product-collection-3fa5ff54.js";import{P as b}from"./nav-bar-27bbdc35.js";const x=d`
    :host {
        display: block;
    }

    /** When we show focus on us (e.g. tabbing into a review),
        do something a bit nicer than the default black border box */
    .review:focus-visible {
        background-color: var(--selection);
        outline-color: var(--selection-border);
        outline-offset: 1px;
    }

    .review {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 99%;
    }

    .reviewer-info {
        display: flex;
        flex-direction: row;
    }

    h3 {
        font-weight: 600;
        font-size: 14px;
    }

    sl-divider {
        height: 18px;
        --spacing: var(--sl-spacing-2x-small);
        --color: #00000014;
        --width: var(--sl-panel-border-width);
    }

    sl-rating {
        --symbol-size: 15px;
        --symbol-color-active: #F8871B;
    }

    .rating-heading, .heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--sl-spacing-3x-small);
        font-size: 14px;
        font-weight: 600;
        height: 20px;
    }

    p {
        margin-top: var(--sl-spacing-x-small);
        margin-bottom: var(--sl-spacing-x-small);
    }

    .review-text {
        overflow-wrap: break-word; /** Otherwise, review text that contains garbage (e.g. the letter B repeated 50 times) would overflow the bounding box. */
        margin-top: 0;
        font-size: 14px;
    }

    .reviewer-name, .review-date {
        font-size: 14px;
        color: #0000009B;
    }

    sl-icon {
        color: #000000E4;
    }

    .thumbs-up, .thumbs-down, .review-stats, .reviewer-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .reviewer-row {
        justify-content: space-between;
    }

    .review-stats {
        gap: 28px;
    }

    .thumbs-up, .thumbs-down {
        gap: 8px;
    }

    .review-number {
        font-size: 14px;
    }

    .most-helpful {
        display: inline-flex;
        align-items: center;
        gap: var(--sl-spacing-2x-small);
        text-transform: uppercase;
        color: var(--sl-color-primary-600);
        font-size: var(--sl-font-size-x-small);
        margin-left: var(--sl-spacing-x-small);
        font-weight: var(--sl-font-weight-bold);
    }

    .icon {
        color: var(--sl-color-neutral-900);
    }

    a {
        display: flex;
    }

    .top-margin {
        margin-top: 28px;
    }

    @media (prefers-color-scheme: dark) {
        sl-divider {
            --color: #FFFFFF15 !important;
        }

        .reviewer-name, .review-date {
            color: #FFFFFFC8;
        }
    }

    /** on mobile screen */
    ${p(w.xs)} {
        .reviewer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--sl-spacing-x-small);
        }
    }
`;var y=Object.defineProperty,R=Object.getOwnPropertyDescriptor,a=(e,t,o,n)=>{for(var i=n>1?void 0:n?R(t,o):t,h=e.length-1,v;h>=0;h--)(v=e[h])&&(i=(n?v(t,o,i):v(i))||i);return n&&i&&y(t,o,i),i};let s=class extends u{constructor(){super(),this.review=null,this.showMostHelpful=!1,this.highlighted=!1,this.productName="",this.reviewUrl="",this.isDarkMode=!1,this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new b(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange()}disconnectedCallback(){super.disconnectedCallback(),this.prefersThemesObserver?.removeListenThemeChange()}handleThemeChange(e){this.isDarkMode=e}showReportDialog(){const e=new CustomEvent("report-dialog-open",{detail:{message:this.review,reviewUrl:this.reviewUrl}});window.dispatchEvent(e)}updated(e){if(e.has("highlighted")&&this.highlighted===!0){const t=this.shadowRoot?.querySelector(".review:not(:focus)");t&&(t.focus(),t.scrollIntoView({block:"center",behavior:"smooth"}))}}render(){if(!this.review)return l``;const e=r.getFormatted("RatingReview.AriaLabel",this.review.rating,5),t=this.review.submittedDateTimeUtc?new Date(this.review.submittedDateTimeUtc):null,o=r.getLocaleName(),i=(this.review.reviewerName?", ":"")+new Intl.DateTimeFormat(o).format(t||void 0),h=t?new Intl.DateTimeFormat(o).format(t):"",v=this.showMostHelpful?"top-margin":"";return l`
            <div class="review ${v}" aria-label="${r.getFormatted("RatingReview.AriaMetaInfoForReview",this.review.reviewerName,this.review.rating,h)}" tabindex="0" telemetry-area-id="ProductReviews">
                <div class="heading">
                    <div class="rating-heading">
                        ${this.review.rating.toFixed(1)}
                        <sl-rating label="${e}" readonly value="1" max="1" tabindex="-1"></sl-rating>
                    </div>
                    <sl-divider vertical></sl-divider>
                    <h3>${this.review.title}</h3>
                </div>
                <p class="review-text">${this.review.reviewText}</p>
                <div class="reviewer-row">
                    <div class="reviewer-info">
                        <span class="reviewer-name">${this.review.reviewerName}</span>
                        <span class="review-date">${i}</span>
                    </div>
                    <div class="review-stats">
                        <div class="thumbs-up">
                            <img class="logo" src=${this.isDarkMode?"/assets/icons/thumbs-up-light.svg":"/assets/icons/thumbs-up-dark.svg"} alt="${r.get("RatingReview.ThumbsUp.label")}" />
                            <div class="review-number">${this.review.helpfulPositive}</div>
                        </div>
                        <div class="thumbs-down">
                            <img class="logo" src=${this.isDarkMode?"/assets/icons/thumbs-down-light.svg":"/assets/icons/thumbs-down-dark.svg"} alt="${r.get("RatingReview.ThumbsDown.label")}" />
                            <div class="review-number">${this.review.helpfulNegative}</div>
                        </div>
                        ${this.renderReportReviewFlag()}
                    </div>
                </div>
            </div>
        `}renderReportReviewFlag(){if(this.showMostHelpful)return l``;const e=r.getFormatted("RatingReview.ReportIssueAriaLabel",this.productName);return l`
            <sl-icon-button class="icon" name="flag" @click=${this.showReportDialog} aria-label="${e}">
            </sl-icon-button>
        `}renderMostHelpfulTag(){return this.showMostHelpful?l`
            <div class="most-helpful">
                <sl-icon name="trophy"></sl-icon>
                ${r.get("RatingReview.MostHelpful")}
            </div>
        `:l``}};s.styles=[m,x];a([c({type:Object})],s.prototype,"review",2);a([c({type:Boolean,attribute:"most-helpful"})],s.prototype,"showMostHelpful",2);a([c({type:Boolean})],s.prototype,"highlighted",2);a([c({attribute:"product-name"})],s.prototype,"productName",2);a([c({attribute:"review-url"})],s.prototype,"reviewUrl",2);a([g()],s.prototype,"isDarkMode",2);s=a([f("product-review")],s);
