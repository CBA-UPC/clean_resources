import{i as p,m,B as v,s as f,l as s,x as i,a as b,n as g,r as d,t as w}from"./index-aa05d19d.js";import{g as $,b as D}from"./product-collection-91cc6b51.js";import{c}from"./repeat-1a78a8d2.js";import"./product-details-43d9b0bb.js";import"./style-map-a428b004.js";import"./css-function-2ba732a7.js";import"./image-helper-99359f42.js";import"./nav-bar-cd5e889c.js";import"./auto-complete-app-search-dfdb1cc6.js";import"./chunk.OHYIWJSO-d08d8d85.js";import"./chunk.HDLULROG-fa2c67c1.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./chunk.RK73WSZS-e061cb19.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-faa56958.js";import"./chunk.SKOOBYPV-dc2f449b.js";import"./platform-2180e403.js";import"./paged-list-5dbf62ed.js";import"./spacing.styles-c42ebb1e.js";const y=p`

    sl-card {
        --border-radius: var(--sl-border-radius-large);
        width: 100%;
    }


    sl-card [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    sl-card [slot='header'] h4 {
        margin: var(--sl-spacing-3x-small) var(--sl-spacing-3x-small) var(--sl-spacing-3x-small) 0;
        display: inline-block;
        font-weight: var(--sl-card-header-font-weight);
        font-size: 18px;
        font-family: var(--header-font);
    }

    sl-card::part(header) {
        border-color: #E6E6E6;
        margin: var(--sl-card-header-margin);
        padding: var(--sl-card-header-padding);
    }
    sl-card::part(body) {
        padding: var(--sl-card-body-padding);
    }

    .publisher-name::part(base) {
        white-space: normal;
        text-overflow: ellipsis;
        max-width: 400px;
    }

    .grid-container {
        display: inline-grid;
        row-gap: var(--sl-spacing-large);
        align-items: flex-start;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        width: 100%;
        margin-top: -1.5rem;
    }

    ${m(v.lg)} {
        .grid-container {
            margin-left: 0 !important;
        }
    }

    .hidden {
        display: none;
    }

    .subheading {
        max-width: 200px;
        color: var(--sl-color-neutral-500);
        font-weight: var(--sl-font-weight-normal);
        font-size: 14px;
        margin-bottom: 12px;
    }

    .subtext {
        margin-top: 0px;
    }

    .row {
        display: flex;
        flex-direction: row;
        gap: var(--sl-spacing-small);
    }

    .content {
        margin: -8px 0 0 var(--sl-spacing-x-large);
        color: var(--sl-color-neutral-1000);
        font-weight: var(--sl-font-weight-normal);
        font-size: var(--sl-font-size-small);
        display: flex;
        flex-direction: column;
    }

    .content sl-button::part(base) {
        white-space: normal;
        text-align: start;
    }

    .content sl-button {
        height: auto;
    }

    .rating-logo {
        margin: -10px 0 0 30px;
        max-width: 58px;
        height: auto;
    }

    .age-rating {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
    }

    .icon {
        color: var(--sl-color-neutral-500);
        margin-top: 26px;
    }

    sl-button {
        height: 20px;
    }

    ${m(v.xs)} {
        sl-button {
            height: 16px;
        }

        sl-button::part(base) {
            line-height: 16px !important;
        }
    }

    sl-button::part(base) {
        min-height: 0;
        width: fit-content;
        font-weight: normal;
        line-height: 20px;
    }

    sl-button::part(label) {
        padding: 0;
        max-width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    sl-dialog::part(body) {
        padding-top: 0;
    }

    .first-contact-info-margin {
        margin-left: -1px !important;
    }

    .overflow {
        max-width: 800px;
        overflow: hidden;
    }

    .age-rating {
        margin-top: 5px;
    }

    .dialog-style-lang, .dialog-style-perm {
        max-height: 600px;
        overflow: auto;
        position: relative;
    }

    .show-more-button-additional {
        margin-top: 8px;
    }

    .column, .genre-column, .dialog-style-category {
        display: flex;
        flex-direction: column;
    }

    .genre-column {
        gap: 6px;
    }

    .contact-info-header {
        font-weight: var(--sl-font-weight-semibold);
    }

    .term-dialog-spacing {
        display: flex;
        flex-direction: column;
    }

    .descriptor-text {
        font-size: 12px;
        margin: 4px 0 0 var(--sl-spacing-x-large);
        color: var(--sl-color-neutral-500);
    }

    ${m(v.xs-44)} {
        sl-button::part(label) {
            max-width: 350px;
        }
    }

    @media (prefers-color-scheme: dark) {
        .subheading, .icon, .descriptor-text {
            color: var(--sl-color-neutral-800);
        }

        sl-card::part(header) {
            border-color: #FFFFFF15 !important;
        }

        sl-button::part(label) {
            color: var(--theme-secondary-element-color) !important;
        }

        sl-button::part(label):hover {
            color: var(--theme-secondary-element-hover-color) !important;
        }
    }
`;var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,n=(e,t,a,l)=>{for(var r=l>1?void 0:l?P(t,a):t,h=e.length-1,u;h>=0;h--)(u=e[h])&&(r=(l?u(t,a,r):u(r))||r);return l&&r&&x(t,a,r),r};let o=class extends f{constructor(){super(),this.product=null,this.contributors=null,this.episodes=null,this.dir="ltr",this.overThreeLang=!1,this.dialogOpen=!1,this.addedLangDialogListeners=!1,this.overThreePerm=!1,this.addedPermDialogListeners=!1,this.exceedPermLength=!1,this.addedTermsDialogListeners=!1,this.showMoreCategoryText="",this.showMoreLangText="",this.showMorePermText="",this.showMoreTermsText="",this.renderTermsDialog=!1,this.directors=[],this.writers=[],this.videoSizesMap=new Map,this.subtitleLanguages=[],this.audioLanguages=[],this.totalEpisodesDuration="",this.overThreeCategories=!1,this.locale=s.getLocaleName(),this.appSizeFormatter=new Intl.NumberFormat(this.locale,{notation:"compact",style:"unit",unit:"megabyte",unitDisplay:"short",maximumFractionDigits:1}),this.movieSizeFormatter=new Intl.NumberFormat(this.locale,{notation:"compact",style:"unit",unit:"gigabyte",maximumFractionDigits:1,minimumFractionDigits:1})}render(){const e=this.product;return e?e.isMovie?this.renderMoviesSection(e):e.isTvSeries?this.renderTVSection(e):this.renderAppGamesSection(e):i``}renderAppGamesSection(e){const t="/search/publisher?name="+encodeURIComponent(e.publisherName??"");return e.categories&&e.categories.length>3&&(this.showMoreCategoryText=s.get("ProductDetails.ReadMore"),this.overThreeCategories=!0),e.supportedLanguages.length>3&&(this.showMoreLangText=s.get("ProductDetails.ReadMore"),this.overThreeLang=!0),e.permissionsRequired&&(e.permissionsRequired.length>3||e.permissionsRequired.slice(0,3).some(a=>a.length>20))&&(this.showMorePermText=s.get("ProductDetails.ReadMore"),this.overThreePerm=!0),e.additionalLicenseTerms&&(this.showMoreTermsText=s.get("ProductDetails.ReadMore")),i`
        <div dir="${this.dir}">
            <sl-card telemetry-area-id="AdditionalInfo">
                <div slot="header">
                    <h4>${s.get("ProductDetails.AdditionalInfo")}</h4>
                </div>
                <div class="grid-container">
                    ${this.renderDeveloperSection(e)}
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="box-seam"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.PublishedBy")}</h5>
                        </div>
                        <h5 class="content">
                            <sl-button class="publisher-name" telemetry-event-id="PublisherClicked"
                                       telemetry-data='{ "data": "${e.publisherName}", "type": "publisher-search-results"  }'
                                       variant="text"
                                       size="medium"
                                       rel="nofollow"
                                       href=${e.isMovie?" ":t}>${e.publisherName}</sl-button>
                        </h5>
                    </div>
                    ${this.renderReleaseDate(e)}
                    ${this.renderApproximateSize(e)}
                    ${this.renderCategoriesSection(e)}
                    ${this.renderInstallation(e)}
                    ${this.renderCapabilities(e)}
                    ${this.renderSupportedLanguages(e)}
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="box-seam"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.PublisherInfo")}</h5>
                        </div>
                        <h5 class="content">
                            ${this.renderPublisherInfo(e)}
                        </h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="card-text"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.AdditionalTerms")}</h5>
                        </div>
                        <h5 class="content">
                            ${this.renderAdditionalTerms(e)}
                        </h5>
                    </div>
                    <div>
                    <div class="row">
                        <sl-icon class="icon" name="flag"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.ReportThisProduct")}</h5>
                    </div>
                    <h5 class="content">
                        <sl-button variant="text" size="medium"
                                    telemetry-event-id="IssueReportClicked"
                                    href="https://support.xbox.com/en-US/help/family-online-safety/online-safety/report-issue-in-microsoft-store"
                                    target="_blank"
                                    rel="nofollow">
                            ${s.get("ProductDetails.ReportToMicrosoft")}
                        </sl-button>

                        <sl-button variant="text" size="medium"
                                    rel="nofollow"
                                    telemetry-event-id="IllegalContentReportClicked"
                                    href="https://www.microsoft.com/digitalsafety/report-a-concern" target="_blank">
                                    ${s.get("ProductDetails.ReportIllegalContent")}
                        </sl-button>
                    </h5>
                </div>

                    ${this.renderSeizureWarning(e)}
                    
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="aspect-ratio"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.AppBadge")}</h5>
                        </div>
                        <h5 class="content">
                            <sl-button variant="text" size="medium"
                                       telemetry-event-id="BadgeCreateClicked"
                                       rel="nofollow"
                                       href="badge/${e.productId}" target="_blank">
                                ${s.get("ProductDetails.CreateAppBadge")}
                            </sl-button>
                        </h5>
                    </div>
                    ${this.renderLegalDisclaimer(e)}
                </div>
            </sl-card>
        </div>
     `}openLangDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-lang");!this.dialogOpen&&this.overThreeLang&&e.show()}openCategoryDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-category");!this.dialogOpen&&this.overThreeCategories&&e.show()}openPermDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-perm");!this.dialogOpen&&this.overThreePerm&&e.show()}openAdditionalTermsDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-terms");!this.dialogOpen&&this.renderTermsDialog&&e.show()}openContactInfoDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-contact-info");this.dialogOpen||e.show()}renderCategories(e){if(this.product&&this.product.categories){const t="/collections/"+encodeURIComponent(this.product.productFamilyName.toLowerCase())+"/category/"+encodeURIComponent(e);return i`
                <sl-button variant="text" size="medium"
                    href=${t}
                    rel="nofollow"
                    telemetry-data='{ "data": "${e}", "type": "category-search-results"   }'
                    telemetry-event-id="CategoryClicked">
                    ${e}
                </sl-button>
            `}return i``}renderLanguage(e){return i`
            <li>${e}</li>
        `}renderPermission(e){return i`
            <li>${e}</li>
        `}renderLangDialog(e){return this.overThreeLang?i`
            <sl-button class="show-more-button" variant="text" size="medium"
                       telemetry-event-id="LanguagesViewSelected"
                       @click = ${this.openLangDialog} >
                ${this.showMoreLangText}
            </sl-button>
            <sl-dialog label="Supported Languages" class="dialog-overview-lang" @sl-show="${()=>this.dialogOpen=!0}" @sl-after-hide="${()=>this.dialogOpen=!1}">
                <!-- Scrollable content can be reached with sequential focus navigation -->
                <!-- Reference: https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/proposed/ -->
                <div class="dialog-style-lang" tabindex="0">
                    <ul>${e.supportedLanguages?c(e.supportedLanguages,t=>this.renderLanguage(t)):""}</ul>
                </div>
            </sl-dialog>
        `:i``}renderCategoryDialog(e){return e.categories&&e.categories.length>3?i`
                    <sl-button class="show-more-button" variant="text" size="medium"
                                telemetry-event-id="CategoriesViewSelected"
                                @click = ${this.openCategoryDialog} >
                        ${this.showMoreCategoryText}
                    </sl-button>
                    <sl-dialog label="Category" class="dialog-overview-category" @sl-show="${()=>this.dialogOpen=!0}" @sl-after-hide="${()=>this.dialogOpen=!1}">
                        <div class="dialog-style-category">
                            ${e.categories?c(e.categories,t=>this.renderCategories(t)):""}
                        </div>
                    </sl-dialog>
                `:i``}renderAdditionalTermsDialog(e,t){return t?i`
                <sl-button class="show-more-button-additional" variant="text" size="medium"
                           telemetry-event-id="AdditionalTermsShowClicked"
                           @click = ${this.openAdditionalTermsDialog}>
                    ${this.showMoreTermsText}
                </sl-button>
                <sl-dialog label="Additional Terms" class="dialog-overview-terms" @sl-show="${()=>this.dialogOpen=!0}" @sl-after-hide="${()=>this.dialogOpen=!1}">
                    <div class="term-dialog-spacing">
                        <div>${e.privacyUrl?this.renderPrivacyPolicy(e):""}</div>
                        <div>${e.additionalLicenseTerms?this.renderLicenseTerms(e,!0):""}</div>
                        <div>${this.renderTermsOfTransaction()}</div>
                    </div>
                </sl-dialog>
            `:i``}renderContactInfoDialog(e){return i`
            <sl-dialog label="Contact information" class="dialog-overview-contact-info" @sl-show="${()=>this.dialogOpen=!0}" @sl-after-hide="${()=>this.dialogOpen=!1}">
                <div class="term-dialog-spacing">
                    <div class="contact-info-header">Name</div>
                    <div>${e.publisherName}</div>
                </div>
            </sl-dialog>
        `}renderPermDialog(e,t){return e.permissionsRequired&&t?i`
                <sl-button class="show-more-button" variant="text" size="medium"
                           telemetry-event-id="PermissionsShowClicked"
                           @click = ${this.openPermDialog} @sl-show="${()=>this.dialogOpen=!0}"
                           @sl-after-hide="${()=>this.dialogOpen=!1}">
                    ${this.showMorePermText}
                </sl-button>
                <sl-dialog label="Permissions Required" class="dialog-overview-perm">
                    <div class="dialog-style-perm">
                        <ul>${e.permissionsRequired?c(e.permissionsRequired,a=>this.renderPermission(a)):""}</ul>
                    </div>
                </sl-dialog>
                `:i``}renderPermInfo(e){return e.permissionsRequired?i`
                <sl-button
                        href="https://support.microsoft.com/en-us/windows/app-permissions-aea98a7c-b61a-1930-6ed0-47f0ed2ee15c"
                        target="_blank" variant="text" size="medium" rel="nofollow"
                        telemetry-event-id="PermissionInfoClicked">
                    ${s.get("ProductDetails.PermissionsInfo")}
                </sl-button>
            `:i``}renderDeveloperSection(e){return e.developerName?i`
                <div>
                    <div class="row">
                            <sl-icon class="icon" name="box-seam"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.DevelopedBy")}</h5>
                        </div>
                    <h5 class="content">${e.developerName}</h5>
                </div>
            `:i``}renderReleaseDate(e){if(e.releaseDateUtc){const t=$(e.releaseDateUtc);return i`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="calendar4-week"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.ReleaseDate")}</h5>
                    </div>
                    <h5 class="content">${t}</h5>
                </div>
            `}return i``}renderApproximateSize(e){return e.approximateSizeInBytes>0?i`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="boxes"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.ApproximateSize")}</h5>
                    </div>
                    <h5 class="content">${this.appSizeFormatter?.format((e.maxInstallSizeInBytes||e.approximateSizeInBytes||0)/1048576)}</h5>
                </div>
            `:i``}renderCategoriesSection(e){return e.categories?i`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="bookmark"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.Category")}</h5>
                    </div>
                    <h5 class="content">
                        ${e.categories!==null?c(e.categories.slice(0,3),t=>this.renderCategories(t)):""}
                        <div class="dialog-content">${this.renderCategoryDialog(e)}</div>
                    </h5>
                </div>
            `:i``}renderInstallation(e){return e.installationTerms?i`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="download"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.Installation")}</h5>
                    </div>
                    <h5 class="content overflow">${e.installationTerms}</h5>
                </div>
            `:i``}renderCapabilities(e){return e.permissionsRequired?i`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="shield"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.Capabilities")}</h5>
                    </div>
                    <h5 class="content">
                        ${this.renderPermissions(e)}
                    </h5>
                </div>
            `:i``}renderSupportedLanguages(e){return e.supportedLanguages.length!==0?i`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="chat-text"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.SupportedLanguages")}</h5>
                    </div>
                    <h5 class="content">
                        ${c(e.supportedLanguages.slice(0,3),t=>this.renderSupportedLanguage(t))}
                        <div class="dialog-content">${this.renderLangDialog(e)}</div>
                    </h5>
                </div>
            `:i``}renderSeizureWarning(e){return e.warningMessages&&e.warningMessages.length>0?i`
            <div>
                <div class="row">
                    <sl-icon class="icon" name="exclamation-triangle"></sl-icon>
                    <h5 class="subheading">${s.get("ProductDetails.SeizureWarning")}</h5>
                </div>
                <h5 class="content">${this.renderWarningMessage()}</h5>
            </div>
        `:i``}getShortTitle(e){return e.title&&e.title.length>15?s.getFormatted("Common.Ellipsis",e.title.substring(0,15)):e.title||""}renderSupport(e,t){const a=e.supportUris?.at(0)?.uri;return t&&a?i`
                <sl-button variant="text" size="medium" target="_blank"
                           telemetry-event-id="SupportClicked" 
                           rel="nofollow"
                           href=${a}>
                    ${s.get("ProductDetails.AppSupport")}
                </sl-button>
            `:i``}renderWebsite(e){const t=e.appWebsiteUrl;return t?i`
            <sl-button variant="text" size="medium" target="_blank" href=${t} rel="nofollow"
                       telemetry-event-id="WebsiteClicked">
                ${s.get("ProductDetails.AppWebsite")}
            </sl-button>
        `:i``}renderContactInfo(){return i`
            <sl-button variant="text" size="medium" target="_blank"
                        telemetry-event-id="ContactsClicked" 
                        @click = ${this.openContactInfoDialog}>Contact information</sl-button>
        `}renderPrivacyPolicy(e){return i`
            <sl-button variant="text" size="medium" target="_blank" rel="nofollow"
                        telemetry-event-id="PrivacyClicked"
                        href=${e.privacyUrl}>${s.get("ProductDetails.AppPrivacyPolicy")}</sl-button>
        `}renderLicenseTerms(e,t){return e.additionalLicenseTerms?.startsWith("https:")||e.additionalLicenseTerms?.startsWith("http:")?i`
                <sl-button variant="text" size="medium" target="_blank"
                           telemetry-event-id="LicenseTermsClicked"
                           href=${e.additionalLicenseTerms}
                           rel="nofollow">
                    ${s.get("ProductDetails.AppLicenseTerms")}
                </sl-button>
            `:t?i`
                <div>
                    ${e.additionalLicenseTerms}
                </div>
            `:e.additionalLicenseTerms?(this.renderTermsDialog=!0,i`
                    <div>
                        ${s.getFormatted("Common.Ellipsis",e.additionalLicenseTerms?.substring(0,55).trim()||"")}
                    </div>
                `):i``}renderLegalDisclaimer(e){return e.isMoviesOrTVs||e.productFamilyName==="Passes"&&e.isMicrosoftProduct?i``:i`
        <div>
            <div class="row">
                <sl-icon class="icon" name="info-circle"></sl-icon>
                <h5 class="subheading">${s.get("ProductDetails.LegalDisclaimer")}</h5>
            </div>
            <h5 class="content">
                <p class="subtext">${s.get("ProductDetails.LegalDisclaimerNote")}</p>
            </h5>
        </div>
        `}renderTermsOfTransaction(){return i`
            <sl-button variant="text" size="medium" target="_blank"
                       telemetry-event-id="TransactionTermsClicked"
                       rel="nofollow"
                       href="https://www.microsoft.com/en-us/store/b/terms-of-sale?rtc=1">
                ${s.get("ProductDetails.TransactionTerms")}
            </sl-button>
        `}renderAdditionalTerms(e){return e.isMovie?this.renderTermsOfTransaction():i`
                ${e.privacyUrl?this.renderPrivacyPolicy(e):""}
                ${e.additionalLicenseTerms?this.renderLicenseTerms(e,!1):""}
                ${this.renderTermsOfTransaction()}
                <div>${this.renderAdditionalTermsDialog(e,this.renderTermsDialog)}</div>`}renderPublisherInfo(e){const t=!!e.supportUris&&e.supportUris.length>0&&!!e.supportUris[0].uri;return e.isMovie?i``:i`
                ${this.renderSupport(e,t)}
                ${this.renderWebsite(e)}
                ${this.renderContactInfo()}
                <div>${this.renderContactInfoDialog(e)}</div>
            `}renderDisplayPermission(e,t){let a="";const l=e.permissionsRequired?e.permissionsRequired[t]:null;return l&&(l.length>25?(a=s.getFormatted("Common.Ellipsis",l.substring(0,25)),this.exceedPermLength=!0):a=l),i`
            ${a}
        `}renderPermissions(e){return e.isMovie?i``:i`
                <div>${this.renderDisplayPermission(e,0)}</div>
                <div>${this.renderDisplayPermission(e,1)}</div>
                <div>${this.renderDisplayPermission(e,2)}</div>
                <div class="dialog-content">
                    <div>${this.renderPermDialog(e,this.overThreePerm)}</div>
                    <div>${this.renderPermInfo(e)}</div>
                </div>
            `}renderWarningMessage(){return i`
            <sl-button variant="text" size="medium"
                        telemetry-event-id="SeizureWarningClicked"
                        rel="nofollow"
                        href="https://support.xbox.com/en-US/help/family-online-safety/online-safety/photosensitive-seizure-warning" target="_blank">
                ${s.get("ProductDetails.SeizureWarningPhotosensitive")}
            </sl-button>
        `}renderSupportedLanguage(e){return i`
            <div>${e}</div>
        `}renderMoviesSection(e){this.getDirectors(),this.getWriters();const t=Math.floor((e.durationInSeconds||0)/3600),a=Math.floor((e.durationInSeconds||0)%3600/60),l=(t!==0?t+s.get("ProductDetails.HourAbbreviation"):"")+(a!==0?a+s.get("ProductDetails.MinAbbreviation"):"");return this.getVideoSizes(e),this.getVideoSubtitles(e),i`
            <sl-card>
                <div slot="header">
                    <h4>${s.get("ProductDetails.AdditionalInfo")}</h4>
                </div>
                <div class="grid-container">
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="person"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Directors")}</h5>
                        </div>
                        <h5 class="content">${c(this.directors,r=>this.renderDirectors(r))}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="film"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Studio")}</h5>
                        </div>
                        <h5 class="content">${e.publisherName}</h5>
                    </div>
                    <div class="${this.subtitleLanguages.length===0?"hidden":""}">
                        <div class="row">
                            <sl-icon class="icon" name="justify-left"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Subtitles")}</h5>
                        </div>
                        <h5 class="content">${c(this.subtitleLanguages,r=>this.renderVideoSubtitles(r))}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="calendar4-week"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.ReleasedYear")}</h5>
                        </div>
                        <h5 class="content">${D(e.releaseDateUtc)}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.AgeRating")}</h5>
                        </div>
                        <div class="age-rating">
                            <img class="rating-logo" src="${e.productRatings[0].ratingValueLogoUrl}" alt="">
                            <a telemetry-event-id="AgeRatingClicked"
                               href="${e.productRatings[0].ratingSystemUrl}" target="_blank"><h5 class="content age-rating">${e.productRatings[0].ratingValue}</h5></a>
                            ${this.renderRatingDescriptors(e.productRatings[0].ratingDescriptors)}
                        </div>
                    </div>
                    <div class="${t+a===0?"hidden":""}">
                        <div class="row">
                            <sl-icon class="icon" name="stopwatch"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Duration")}</h5>
                        </div>
                        <h5 class="content">${l}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="bookmark"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Genres")}</h5>
                        </div>
                        <div class="genre-column">
                            ${e.categories!==null?c(e.categories,r=>this.renderGenres(r)):""}
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="person"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Writers")}</h5>
                        </div>
                        <h5 class="content">${c(this.writers,r=>this.renderWriters(r))}</h5>
                    </div>
                    <div class="${this.videoSizesMap.size===0?"hidden":""}">
                        <div class="row">
                            <sl-icon class="icon" name="boxes"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Size")}</h5>
                        </div>
                        <h5 class="content">${c(this.videoSizesMap,r=>this.renderVideoSizes(r))}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="card-text"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.AdditionalTerms")}</h5>
                        </div>
                        <h5 class="content">
                            ${this.renderAdditionalTerms(e)}
                        </h5>
                    </div>
                </div>
            </sl-card>
     `}renderRatingDescriptors(e){if(e){const t=e.join(", ");return i`
                <span class="descriptor-text">${t}</span>
            `}return i``}renderGenres(e){const t="/search?query="+encodeURIComponent(e);return i`
            <h5 class="content">
                <sl-button class="genre" variant="text" size="medium"
                           telemetry-event-id="GenreClicked"
                           rel="nofollow"
                           href=${t}>
                    ${e}
                </sl-button>
            </h5>
        `}getDirectors(){this.contributors?.forEach(e=>{e.subtitle?.includes("Director")&&this.directors?.push(e.title)})}renderDirectors(e){return i`
            <div>${e}</div>
        `}getWriters(){this.contributors?.forEach(e=>{e.subtitle?.includes("Writer")&&this.writers?.push(e.title)})}renderWriters(e){return i`
            <div>${e}</div>
        `}getVideoSizes(e){e.skus?.forEach(t=>{this.parseVideoInstance(t.videoInstances)})}parseVideoInstance(e){e.forEach(t=>{const a=t.resolutionDetail+" "+t.resolutionFormat,l=t.size;t.deliveryFormat==="Progressive"&&(this.videoSizesMap.has(a)||this.videoSizesMap.set(a,this.movieSizeFormatter.format((l||0)/1073741824)))})}renderVideoSizes(e){return i`<div>${e[1]+" ("+e[0]+")"}</div>`}getVideoSubtitles(e){if(e.skus!==null){const l=JSON.parse(e.skus[0]?.fulfillmentData).VideoAttributes.AvailableVideoLanguages[0]?.OverlaysProperties;l&&l.forEach(r=>{r.DisplayName==="English"&&(r.DisplayName+="(CC)"),this.subtitleLanguages.push(r.DisplayName.charAt(0).toUpperCase()+r.DisplayName.slice(1))})}}renderVideoSubtitles(e){return i`
            <div>${e}</div>
        `}renderTVSection(e){return this.getVideoSubtitles(e),this.getAudioLanguages(e),this.getTotalEpisodeDuration(),i`
            <sl-card>
                <div slot="header">
                    <h4>${s.get("ProductDetails.AdditionalInfo")}</h4>
                </div>
                <div class="grid-container">
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="film"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Networks")}</h5>
                        </div>
                        <h5 class="content">${e.publisherName}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="translate"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Audio")}</h5>
                        </div>
                        <h5 class="content">${c(this.audioLanguages,t=>this.renderAudioLanguages(t))}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="justify-left"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Subtitles")}</h5>
                        </div>
                        <h5 class="content">${c(this.subtitleLanguages,t=>this.renderVideoSubtitles(t))}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="calendar4-week"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.ReleasedYear")}</h5>
                        </div>
                        <h5 class="content">${e.releaseDateUtc&&e.releaseDateUtc!=="0001-01-01T00:00:00"?new Date(e.releaseDateUtc).getFullYear().toString():""}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="info-circle"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.AgeRating")}</h5>
                        </div>
                        <div class="age-rating">
                            <img class="rating-logo" src="${e.productRatings[0].ratingValueLogoUrl}" alt="">
                            <br>
                            <h5 class="content">
                                <sl-button class="genre" variant="text" size="medium"
                                    telemetry-event-id="AgeRatingClicked"
                                    target="_blank"
                                    rel="nofollow"       
                                    href="${(e.productRatings||[])[0].ratingSystemUrl}">
                                    ${(e.productRatings||[])[0].ratingValue}
                                </sl-button>
                            </h5>
                            ${this.renderRatingDescriptors(e.productRatings[0].ratingDescriptors)}
                        </div>
                    </div>
                    <div >
                        <div class="row">
                            <sl-icon class="icon" name="stopwatch"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Duration")}</h5>
                        </div>
                        <h5 class="content">${this.totalEpisodesDuration}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="bookmark"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Genres")}</h5>
                        </div>
                        <div class="genre-column">
                            ${e.categories!==null?c(e.categories,t=>this.renderGenres(t)):""}
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="card-text"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.AdditionalTerms")}</h5>
                        </div>
                        <h5 class="content">
                            ${this.renderAdditionalTerms(e)}
                        </h5>
                    </div>
                </div>
            </sl-card>
        `}getAudioLanguages(e){if(e.skus!==null){const l=JSON.parse(e.skus[0].fulfillmentData).VideoAttributes.AvailableVideoLanguages[0],r=new Intl.DisplayNames([this.locale],{type:"language"});if(l!==void 0){const h=r.of(l.AudioLocale);h!==void 0&&this.audioLanguages.push(h)}}}renderAudioLanguages(e){return i`
            <div>${e}</div>
        `}getTotalEpisodeDuration(){let e=0;this.episodes?.forEach(r=>{r.durationInSeconds!==null&&(e+=r.durationInSeconds)});const t=Math.floor((e||0)/3600),a=Math.floor((e||0)%3600/60),l=this.episodes?.length+" episodes ("+(t!==0?t+" h ":"")+(a!==0?a+" min)":")");this.totalEpisodesDuration=l}};o.styles=[b,y];n([g({attribute:"product"})],o.prototype,"product",2);n([g({attribute:"contributors"})],o.prototype,"contributors",2);n([g({attribute:"episodes"})],o.prototype,"episodes",2);n([g()],o.prototype,"dir",2);n([d()],o.prototype,"overThreeLang",2);n([d()],o.prototype,"dialogOpen",2);n([d()],o.prototype,"addedLangDialogListeners",2);n([d()],o.prototype,"overThreePerm",2);n([d()],o.prototype,"addedPermDialogListeners",2);n([d()],o.prototype,"exceedPermLength",2);n([d()],o.prototype,"addedTermsDialogListeners",2);n([d()],o.prototype,"showMoreCategoryText",2);n([d()],o.prototype,"showMoreLangText",2);n([d()],o.prototype,"showMorePermText",2);n([d()],o.prototype,"showMoreTermsText",2);n([d()],o.prototype,"renderTermsDialog",2);n([d()],o.prototype,"directors",2);n([d()],o.prototype,"writers",2);n([d()],o.prototype,"videoSizesMap",2);n([d()],o.prototype,"subtitleLanguages",2);n([d()],o.prototype,"audioLanguages",2);n([d()],o.prototype,"totalEpisodesDuration",2);n([d()],o.prototype,"overThreeCategories",2);o=n([w("additional-info")],o);export{o as AdditionalInfo};
cKCwpPCr8OFwpspM8Kjw4p5wr/CvW/DrMO7w6TCn8Ktw6RGL8KOZ8KSwrXCtiHCnMKrwqMYaAo2X2PCm8KGdG0HMcK2cEnCisOLwpXCqSpPw47CnVPCqkLDhylhGMOSworCrCsqwpDCnSYewr7DuGLDiMOXMjlnwo/DuMOWwo7CgkjCjMK8PcOyRV0PABMCaMKiwoXCkmFEEkTDvMKUw4LCsMK5dcKowqECYQXDqsKCaTNGwoHCicOhwph+w6gLwp7Dm8ODaAIGc8OqRcOlw6nCo8KKBMKCw5x9M8KWwo3CjDxBJ8OONcK2U8KmDcKHNXfDp8KIagYwBxMUwoJYMQ98G8KQwotkWTVZwoUsw7bCoCTDpFRUwploSTTCj8K/wqIsHMO9wq8vw7TDiljCpj5QIFfClMKOBMOlF0zDu1zCrAMww67DnWhNNcKCwpFiVi7DusOKwoLDj8O0w4LCtcOoe8OcFcKic8O+dsOqwpJRbcKKWzMfwr3DuGvDqsKxa8Odw64kUsOmWsOBw5QLw69+wrvCk8KPRg7CvTjCjTwSwrbCiHvCvMO5L8OowpoQcMKQDyxBw65PfMOOAjIBT2lGwrPDtcKswrnDh2ICA8KZw6xBHUTDlSAOVMOdVsKIwotdw6RlwrMewobDq8OIKMOnWsOjwpbDqVrCi0kiwqXDusKbI8OZFcKkCsOkEsO5bsKQGcOcfAoAQcOrO1g1UGJswrd0FsKGw6fDosK8wrTCpmbDoi/DiMOBR8KrY1VOw5UhMwspGsKqw75XQ8OIw6fDr8K/b1MJY8K8wo/CoXRVwo3Cvz3CmSd5w6RpNngVwofDlDdZJVTDrxdtw67DtxrCgWpQwq9gL8KLw4HDmyHCkcOOw4oVw67CiGoRwqZxdcOBYcKxH8KNeFnDrAkAV1AlQ8O6AnhpwqvCsF7ChsKZwoPCiMOECUAOwohfw4thJCETw4XCnWnDqMKYbnXCkh/DkUPCvsKMNW8LLWkTwqnCl8OYDsKbwrrDjcOddMKwJ8OkXhvCsMKRH1nCv8O+CyxHw4gzeAYNwrN9wq4KMcO1wpVOw7nClMOawpoeEkrDtWBsFy3DsnDDjMKyw6HDsMOkFcOmwonDi1dsw59RZsKRw4xpYmDCtsKEXsKVwp0hwo9WfG59A8O7w4nDjsO1Q8KVAMOvw6/CmBsqw6zCk8OqZMKZdTTCm0hRwr3DpcKlw7fDk8Kkw4Q/UsO/wplHHcOlDQMUw77Dlnc2RlAIABfDvlnDsjJiUTnCkMOGwqRYYMOue0IWwp82ecOawqElw4DDnTZFJsO/woohS8KWwqYadktSw64vwq8jwpzDrsKgw4nDtXF1w48Hw4zDhQEpE8OKwoV3R8KyPk7CiyPDrFsOYcKGWSDCogluQMOtJMKNw4jCsB7DonUcwr4Tw4lWw6h1w73DusOpw6/Du8KOXx/DoQwDcUF9LDIGwrRBwqsjwq1Zw5dyPjHCv1rCpcKFwpgXwrhawpTClgAewpXDtnzDucK8w7zCkmzCvzvDucOLNAVnEMKUw7F1wp7Dp8ONw440w6Qmw60TG8O0w6rDisOXN0zCi8Opw64yw6jDlggqw5/DvcKdEmMTXhHCrhIJWsKCTG7DsMKMwqLCkgnCp8ONw5LCm8K9wp0OTMKsc8KSO8OGw7nDimRew4drwrnCkE8FPsK8McKXUD7Cnks5OcOHwpTDqMO4TTUWLh/CiX/CoyTCnE4bacOeVsO0BTfDrFjCu3zDp3/Ci8OyMcObw7HCtcOXwqgrYhLDgcKAF8O5w5/ClcKJFMKZECZ7bmPDscOTNcKsHFIpwq51w5PCr2kWw6nDlcOtwrt6w7cGbFIPWgxuwoxAwr3Cj0FpRcKZw4fDvycrIVnCnTBUU8KVdcOILWbDrcOhw4IKcMK9CBdxw5dnw4/CjMOcJTnDoXnCn8K+H0VSwqDCqcOZwojDjsKkwr/DrE8ewpbDmRDCp8KYR1pjXno6wpzDjMK2wpfDgcK5w6cNXTggWXkAwrLChWvDlwnDuMKhw6jChcO2ZVzCgW3CiMKXwpjClsKewoR4CzPDlklJAgjDrcO9NkTCtW7CrcOnw6/Clhg1VzZIw67Ct1vCoRdQEA95w4bDkipjVTZEEcKDX8OsAhnDsMOeRcOhw40eZ2R7wqfCosOdfsKCBiIqHcOIw6rCtgzClnwAwpXDnMO9wpbCtMK1w67CiMKFw7wIw5PCr8KkOsKuwoHChRY6wqQnUTDCjMKTw7PDicKuXsOGf3LDjcOlXSXDlV/CoMK/w54vS8K8w5bDnHLCp8KIdBtVJMKLS8OJwonDssKDwrdPwqvDtkw1w5vDoMKtw71YUcOEF8K1SljChsOGKsKEw7kdLU1/HMKXwoNqw6B0LMKCc8KDw6PCoVbCh8OyKcKkSCjDrcK8b8K6ZsKdw4t+worDk8OsWSl+M8OLaQQjw4plw4xlfCgeYcOKQwJLfcKIJXzDh3LCkcKKw69sw6zClcKzw5nCksKMSXIvwqBnbsK1IxDDncKdw6Vjfxp+wozCuSXCsTMPNsKcwpJTwqEVZcKmQsO2wpDDp1IrezdUF0bChkfCgFTCucOFw4HDj8KpAcO1P09Pw4TDoH81PsKCw6nCiEAMNkbDuixiwqU0AMKwGBTDpcOIF8KZRyBicwEHPcKuAXXCncOqw48uDGIGw5rCoVJMwoTDsMKTQisNYTB7w6FKwqrCusOtw4jCugzDmsOkBMO9wpPCswXCjGzCqD1gbsKxbgDDh8Oga8KBw5V3w6HCiWXCsMO+wptOw4JOwpjDnnxgQ8KTNlMew6hJw7tDw7rCrwI0MMOAwr1xw6/ChsK9w5jDix4fDijDosKMwrIKw5fCpxc5VsOkCsKiw7F9w7haeALDjMK7wqPDoRAYw4fCvh9rw4jDo0B6wq3Dm0dHw4NAMCnCuE/DgMKRwq/Co8KYwrBnw4PCrMKranbDp8KiZcK/wpVbwrAZw4TClCgpwr0GwoLCqSxQw4zDh8O0wqJlGiXDt2cMw4/Ci2fDqn3CqcOJEcKsb8K7wrPDpcKZw43CqsOAIsOFwqnDiMKZw5FFw4IHdi4sYFMUYcKXagnDtcO8ZcO5wpUmBxVLw5BJJMOcRMKcQcOcw7MOwqtJScOEwpVtHcK6w70vwow3S8KnBMOUKMOJT21uwpbDtknDtsKSw6rDncOGWMO2EmAWX0ppbgZiwpMZQ0zCi8Oywr01DSNVw6gIKGnCkcOMw7/CqkjClMOneMOGMcKbwpEEcMONSSENaFcvWR3Dh07DrMKDeMK5w4fCmsKKaDfChcKOXhPDn8KyNC8PXsKUJMO0w7/DsCzCmMOtwrvCvcOIw4jDtUMYdzI8wqJnJy7DssOAwpRuw7p5w5pFwrXCscKGOi9+w6s3w4vDt0bDosORa8OJE8O+wr/CmMKlbFkwwooWQywCBcKJw5PCtg3Dk8KNwrYOVcKnNyA4wobDkn3CuTrDrFnDkMKiwoBECMOswozCvMOtS8OIwosbwrTCnGPDq8O9RMKzwo0Pwr5EVHQ1wpLCkcOoUUBcwr4/w4vCpGFmw7MnSjwyw6orwoHDi8OGIH89Q1LDlsOHwqZNQ8Kvwo7DnsOvGcKgYsO+DcKtNwnCgsKzwpLDoMOsMQxUY07CoWlhwoPCmhPCssO5bMOVDMOiY3pWPsKdwqDDjsO5w7ZPKsOfZcKofsO6HsOJwrJfw79Uw7TCjRMywoDDkU58wrbCpgJWw6jDljBkdWBrPsK3w6ZOB8KPJ8OvUcObBcOnUW00w5ZrBBXDmMOewqrDgWbChlAWw7dmNsO6f8KfwqnDtjFaX8OOw4bClz5xw7rDl8OpwrpNw5TCi8KYKm3CmsOUQVggw63DiMKGw5A+wqYaw5PDil9GwoLDnAF3w6fCpcOQIMKfwo4tV8K+wrBHw70yw4PCjsOZw4d1AcOIw6HCgcKMw5N2wrvCi8OSw4HDj2/CjTILGRbDq11UdSpfB8OmecOew6o7wrZkw4TDtw0HwqMcwqrDmC7Cq8Kkwr3Dq8ONBsOyw6p4wrtsPWZvHcOzw4Ynw43Dv8O1wo7CjCbCr8OVTWYKcMOGGwxAST47WALDvDUiw6HCm1IXB8KoKcO+w5zCtXHCrG8ewoUlV8OhLxdtw7REF0LCkMKTwpBnwphVR0fCsUwudsONw6tTAcOVPFfCrcKAwqvCsiHDkcOKwrtXw7VicMO+TcK4wpHDtMKVQi/CmsOKw63DmMOPKgTDsUnCvQVhwrx7wpTCv8OmLXHDqinCkcONAijCmsOxw5RFMsOLwo8mw50JNBc9d8KLL2jCmsOvw6VYw63DvMKLw442IhzDu0vCtw40w4UFwrU4OBckw4NYRDDDkytVw6XChsK5Cg1awqA5w4w0wqTDtxvCoDDCr8ObwrfDlMKCMktuMcKzw7PDiSXDpjIUAsOUWcOVw60QCsOpwpbClcOkwrDCoMOpNgV+bFnDqVXCrsOawpnCrwsKw7rCrcOAJ0vCpsKNV8OMI8OJwrnDrQfCtWNdUXXCtGE1wpDDmCRmYMKiPcKkbTzDqXfCjWkqZ8O7EsOqwp/Ch3oXw5XCrsKmw40rJx/DoWF3WQLDlBcmwoDComfCnEbCnS5YwrgbwrPCsm1WPVUwcsKoMFADdMO6wqAowqF7w7MZwplBVDLDgQFIOsOYVMKDwr7CvsOEw6zCs04we8OQw6U0dMOZElodQFNowosSw4hOwqHDs8OzMMOcw5PCgcOMUEBKFGrDm8Ksw4wWwqk7wrbDpBbDm8KXwocnw6fCtwnClcKfMQQvN13DmsOlVCAaw7bDuFLChcO5w78uEXQnwrIHEsK/YsO6w60MwpsUIMKhw43CssKVBMO0wrdDA2DDvUlaFcK9chzCnnIBwoXChGpSw7x7EcOPZFrCmQfDt8KBTHjCgRQEw6JTW8KWEcKzNG4hS17CsXfCmMKbR1bCg0/Dm31Gb8Kmw5AYw6vCs8KJSmhpBW4NJ8Otw5TCssOnwpjDtkhEw4R0Y0nClsOPS0TCmMOrwoM5KcO6wqjCokYgQcKRAkzDkA7Cm8Kacg5Bw7RsSjLDrEYCwr/CqiDCpXtYw7hXw5jDqz0jI8O9QcKZwr0rw4Iww5MxwofDs8KIwqrDmhTChMOvXCfDgsORUcKNN1LCqzdwwpcmG8Kaw7rCgsOLw7Fgwo9aw40UTw7DhmfCuCcpw5LDn8OxQcO5OmdowpMswp/CksKrwqLCiMKlw6TDmcKWwrFww5YWWjAPwoAAcMOvw67DlAwjFhQQacO6wpzDnMKZGUXDqk/DoFdnPMKhw6fDisKKwpnCgk8QwrjDrMObU8OfwqMGCCHCscOKVTcyw53DqBHDvx8TwolUGg59Wn3DhE3ChMKgCinDsMKUw5socsOcwrzDpcO/w4PCpsKZwozClErCpwXDosO6VGPCqcOJWj3DssKTwoLDsnvDm8KhGzvCksKvMMKBwqLCoiDDpD9Hw5ItIznCnMOvV8KKKcOyG8OzeMKjwptqBwTCsCrDpsKvI8K4w47DozTDi2Maw5vCsMOzw4XCmcKHO3bCg8Omw71OBhvDmsOtIBZyFi3DosK0EDUuZcOKe8KyaMOew7rDrcOMNMKxZcO7w4cUbUPDp8OwwrPCiMKAw5oKwrHCv2tvJMOXHTfChMOvDw9Xwo5Uwp5SAsKew7Qkw7oPw5PChV7CiMKJW8KowpZQwrl7w67CkyMow4PDsVzClsOHwp52cXggwovDv1hzw6ddWcOhw7fCllJ4w5jDmsKbKMKpHSfDpSvCtmFEwodyw5YgDsOGfWlZwrnDk8O/wpfDrcOYwozDhMOeb8KkPcKZwoDCmcK0wq3DiMOOCcO1wpUXwoFDPsOfw4TCtsOIw77DtsKewobCg10\\u003d\x22],null,[\x22conf\x22,null,\x226LdPPe4SAAAAAKTUAgnOXnmcuwebVPkwD_0fQxAI\x22,0,null,null,null,0,[21,63,73,95,87,41,43,42,83,102],[262244,441],0,null,null,null,25,0,null,0,null,700],\x22https://www.speedtest.net:443\x22,[\x22ctask\x22,[[\x22hctask\x22,\x222d3b28a8\x22,\x2209b38668983663c63a677924dc070da2f947b1000f26cde48f83c7843c48b6f5\x22,0,100],[\x22hctask\x22,\x22fa133832\x22,\x2221d66358a86bf2acb7cced9cc8f491c4995848c7085e4bab997da098f1c02821\x22,0,100],[\x22hctask\x22,\x22f02edb1e\x22,\x22efebe4a2027a69008ca3e9c066dfdb1d555ac586ff604b8b3cf01ce7b34ad4c1\x22,0,100]]],[1,1,1],null,null,null,0,3600,[\x22https://www.google.com/intl/es/policies/privacy/\x22,\x22https://www.google.com/intl/es/policies/terms/\x22],\x22FcOGpigNxOB9O9X5bO0zrfAgwbt4f/FkycGpErE9V+E\\u003d\x22,0,0,null,1,1705460900454,0,0,[125,157,105],null,[76,231,21],\x22RC-5H672pc-1Z0H0w\x22,null,0]");
    </script></body></html>