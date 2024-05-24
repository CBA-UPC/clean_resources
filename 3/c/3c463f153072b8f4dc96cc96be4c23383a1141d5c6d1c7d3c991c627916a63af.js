import{i as v,m as h,B as m,a as w,n as p,r as g,s as u,l as i,x as a,t as f}from"./index-f0821274.js";import"./product-collection-2e973b65.js";import{P as b}from"./nav-bar-ca104fe4.js";const x=v`
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


    .dev-wrapper {
        display: flex;
        flex-direction: row;
    }

    .dev-response {
        display: flex;
        flex-direction: column;
        
    }

    .response-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    .response-header sl-icon {
        color: var(--sl-color-neutral-900);
    }

    .response-body {
        display: flex;
        flex-direction: column;
        padding-inline-start: 4%;
    }

    .response-footer, .response-date {
        display: flex;
        flex-direction: row;
    }

    .response-footer {
        justify-content: space-between;
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
    ${h(m.xs)} {
        .reviewer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--sl-spacing-x-small);
        }
    }
`;var y=Object.defineProperty,R=Object.getOwnPropertyDescriptor,n=(e,s,r,l)=>{for(var t=l>1?void 0:l?R(s,r):s,d=e.length-1,c;d>=0;d--)(c=e[d])&&(t=(l?c(s,r,t):c(t))||t);return l&&t&&y(s,r,t),t};let o=class extends u{constructor(){super(),this.review=null,this.showMostHelpful=!1,this.highlighted=!1,this.productName="",this.isDarkMode=!1,this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new b(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange()}disconnectedCallback(){super.disconnectedCallback(),this.prefersThemesObserver?.removeListenThemeChange()}handleThemeChange(e){this.isDarkMode=e}showReportDialog(){const e=this.review?.reviewUrl,s=new CustomEvent("report-dialog-open",{detail:{message:this.review,reviewUrl:e}});window.dispatchEvent(s)}updated(e){if(e.has("highlighted")&&this.highlighted===!0){const s=this.shadowRoot?.querySelector(".review:not(:focus)");s&&(s.focus(),s.scrollIntoView({block:"center",behavior:"smooth"}))}}renderDevResponse(){if(this.review?.userResponse){const e=this.review.userResponse,s=e.submittedDateTime?new Date(e.submittedDateTime):null,r=e.responderName&&s?", ":"",l=i.getLocaleName(),t=r+new Intl.DateTimeFormat(l).format(s||void 0);return a`
                <div class="dev-response">
                    <div class="response-header">
                        <sl-icon name="reply"></sl-icon>
                        <h3>${i.get("Review.DevResponse")} ${e.responderName}</h3>
                    </div>
                    <div class="response-body">
                        <p class="review-text">${e.text}</p>
                        <div class="response-footer">
                            <div class="reviewer-info">
                                <span class="reviewer-name">${e.responderName}</span>
                                <span class="review-date">${t}</span>
                            </div>
                            ${this.renderReportReviewFlag()}
                        </div>
                    </div>
                </div>
            `}return a``}render(){if(!this.review)return a``;const e=i.getFormatted("RatingReview.AriaLabel",this.review.rating,5),s=this.review.submittedDateTimeUtc?new Date(this.review.submittedDateTimeUtc):null,r=i.getLocaleName(),t=(this.review.reviewerName?", ":"")+new Intl.DateTimeFormat(r).format(s||void 0),d=s?new Intl.DateTimeFormat(r).format(s):"",c=this.showMostHelpful?"top-margin":"";return a`
            <div class="review-wrapper">
                <div class="review ${c}" aria-label="${i.getFormatted("RatingReview.AriaMetaInfoForReview",this.review.reviewerName,this.review.rating,d)}" tabindex="0" telemetry-area-id="ProductReviews">
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
                            <span class="review-date">${t}</span>
                        </div>
                        <div class="review-stats">
                            <div class="thumbs-up">
                                <img class="logo" src=${this.isDarkMode?"/assets/icons/thumbs-up-light.svg":"/assets/icons/thumbs-up-dark.svg"} alt="${i.get("RatingReview.ThumbsUp.label")}" />
                                <div class="review-number">${this.review.helpfulPositive}</div>
                            </div>
                            <div class="thumbs-down">
                                <img class="logo" src=${this.isDarkMode?"/assets/icons/thumbs-down-light.svg":"/assets/icons/thumbs-down-dark.svg"} alt="${i.get("RatingReview.ThumbsDown.label")}" />
                                <div class="review-number">${this.review.helpfulNegative}</div>
                            </div>
                            ${this.renderReportReviewFlag()}
                        </div>
                    </div>
                </div>
                ${this.renderDevResponse()}
            </div>
        `}renderReportReviewFlag(){if(this.showMostHelpful)return a``;const e=i.getFormatted("RatingReview.ReportIssueAriaLabel",this.productName);return a`
            <sl-icon-button class="icon" name="flag" @click=${this.showReportDialog} aria-label="${e}">
            </sl-icon-button>
        `}renderMostHelpfulTag(){return this.showMostHelpful?a`
            <div class="most-helpful">
                <sl-icon name="trophy"></sl-icon>
                ${i.get("RatingReview.MostHelpful")}
            </div>
        `:a``}};o.styles=[w,x];n([p({type:Object})],o.prototype,"review",2);n([p({type:Boolean,attribute:"most-helpful"})],o.prototype,"showMostHelpful",2);n([p({type:Boolean})],o.prototype,"highlighted",2);n([p({attribute:"product-name"})],o.prototype,"productName",2);n([g()],o.prototype,"isDarkMode",2);o=n([f("product-review")],o);
