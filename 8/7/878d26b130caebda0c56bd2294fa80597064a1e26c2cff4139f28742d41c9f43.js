import{i as p,m,B as w,a as g,n as v,r as u,s as f,x as c,l as r,t as b}from"./index-ea800fad.js";import"./product-collection-ec619889.js";import{P as x}from"./nav-bar-eecd89ff.js";const y=p`
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
    ${m(w.xs)} {
        .reviewer-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--sl-spacing-x-small);
        }
    }
`;var F=Object.defineProperty,T=Object.getOwnPropertyDescriptor,o=(i,e,a,l)=>{for(var t=l>1?void 0:l?T(e,a):e,n=i.length-1,h;n>=0;n--)(h=i[n])&&(t=(l?h(e,a,t):h(t))||t);return l&&t&&F(e,a,t),t};let s=class extends f{constructor(){super(),this.review=null,this.showMostHelpful=!1,this.highlighted=!1,this.productName="",this.isDarkMode=!1,this.handleThemeChange=this.handleThemeChange.bind(this)}connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new x(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange()}disconnectedCallback(){super.disconnectedCallback(),this.prefersThemesObserver?.removeListenThemeChange()}handleThemeChange(i){this.isDarkMode=i}updated(i){if(i.has("highlighted")&&this.highlighted===!0){const e=this.shadowRoot?.querySelector(".review:not(:focus)");e&&(e.focus(),e.scrollIntoView({block:"center",behavior:"smooth"}))}}render(){if(!this.review)return c``;const i=r.getFormatted("RatingReview.AriaLabel",this.review.rating,5),e=this.review.submittedDateTimeUtc?new Date(this.review.submittedDateTimeUtc):null,a=r.getLocaleName(),t=(this.review.reviewerName?", ":"")+new Intl.DateTimeFormat(a).format(e||void 0),n=e?new Intl.DateTimeFormat(a).format(e):"",h=this.showMostHelpful?"top-margin":"",d=r.getFormatted("RatingReview.ReportIssueAriaLabel",this.productName);return c`
            <div class="review ${h}" aria-label="${r.getFormatted("RatingReview.AriaMetaInfoForReview",this.review.reviewerName,this.review.rating,n)}" tabindex="0" telemetry-area-id="ProductReviews">
                <div class="heading">
                    <div class="rating-heading">
                        ${this.review.rating.toFixed(1)}
                        <sl-rating label="${i}" readonly value="1" max="1" tabindex="-1"></sl-rating>
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
                            <img class="logo" src=${this.isDarkMode?"/assets/icons/thumbs-up-light.svg":"/assets/icons/thumbs-up-dark.svg"} alt="${r.get("RatingReview.ThumbsUp.label")}" />
                            <div class="review-number">${this.review.helpfulPositive}</div>
                        </div>
                        <div class="thumbs-down">
                            <img class="logo" src=${this.isDarkMode?"/assets/icons/thumbs-down-light.svg":"/assets/icons/thumbs-down-dark.svg"} alt="${r.get("RatingReview.ThumbsDown.label")}" />
                            <div class="review-number">${this.review.helpfulNegative}</div>
                        </div>
                        <a href="https://support.xbox.com/en-US/help/family-online-safety/online-safety/report-issue-in-microsoft-store" target="_blank" aria-label="${d}">
                            <sl-icon class="icon" name="flag"></sl-icon>
                        </a>
                    </div>
                </div>
            </div>
        `}renderMostHelpfulTag(){return this.showMostHelpful?c`
            <div class="most-helpful">
                <sl-icon name="trophy"></sl-icon>
                ${r.get("RatingReview.MostHelpful")}
            </div>
        `:c``}};s.styles=[g,y];o([v({type:Object})],s.prototype,"review",2);o([v({type:Boolean,attribute:"most-helpful"})],s.prototype,"showMostHelpful",2);o([v({type:Boolean})],s.prototype,"highlighted",2);o([v({attribute:"product-name"})],s.prototype,"productName",2);o([u()],s.prototype,"isDarkMode",2);s=o([b("product-review")],s);
