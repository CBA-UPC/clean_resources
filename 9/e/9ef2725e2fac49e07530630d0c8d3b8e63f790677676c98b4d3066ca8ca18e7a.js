import{i as $,m as v,B as p,l as s,s as w,x as t,W as f,a as D,n as u,r as d,t as y}from"./index-64e4e9e7.js";import{g as x,b as P}from"./product-collection-7797e90b.js";import{c}from"./repeat-632d6c35.js";import"./product-details-2a58db49.js";import{C as g}from"./image-helper-5b969ca1.js";import"./style-map-69b34fe6.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-5d5da084.js";import"./nav-bar-8584c4e6.js";import"./auto-complete-app-search-1bd0a416.js";import"./chunk.OHYIWJSO-da1f282c.js";import"./chunk.HDLULROG-961dc698.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./chunk.RK73WSZS-e061cb19.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-68edf51b.js";import"./chunk.SKOOBYPV-0c5f2ec1.js";import"./platform-2180e403.js";import"./paged-list-221ade0f.js";import"./spacing.styles-3217686a.js";const T=$`

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

    ${v(p.lg)} {
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

    ${v(p.xs)} {
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

    ${v(p.xs-44)} {
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
`;class b{static createDataSizeFormatter(i,r){const{unit:a}=this.calculateDataSize(i);return this.createDataSizeFormatterInternal(a,r)}static calculateDataSize(i){let r,a;return i<g.Gigabyte?(r="megabyte",a=i/g.Megabyte):i<g.Terabyte?(r="gigabyte",a=i/g.Gigabyte):(r="terabyte",a=i/g.Terabyte),{unit:r,size:a}}static createDataSizeFormatterInternal(i,r){return new Intl.NumberFormat(s.getLocaleName(),{notation:"compact",style:"unit",unit:i,maximumFractionDigits:1,minimumFractionDigits:r||0})}static formatDataSize(i,r){const{unit:a,size:o}=this.calculateDataSize(i);return this.createDataSizeFormatterInternal(a,r).format(o)}}var S=Object.defineProperty,L=Object.getOwnPropertyDescriptor,l=(e,i,r,a)=>{for(var o=a>1?void 0:a?L(i,r):i,h=e.length-1,m;h>=0;h--)(m=e[h])&&(o=(a?m(i,r,o):m(o))||o);return a&&o&&S(i,r,o),o};let n=class extends w{constructor(){super(),this.product=null,this.contributors=null,this.episodes=null,this.dir="ltr",this.overThreeLang=!1,this.dialogOpen=!1,this.addedLangDialogListeners=!1,this.overThreePerm=!1,this.addedPermDialogListeners=!1,this.exceedPermLength=!1,this.addedTermsDialogListeners=!1,this.showMoreCategoryText="",this.showMoreLangText="",this.showMorePermText="",this.showMoreTermsText="",this.renderTermsDialog=!1,this.directors=[],this.writers=[],this.videoSizesMap=new Map,this.subtitleLanguages=[],this.audioLanguages=[],this.totalEpisodesDuration="",this.overThreeCategories=!1,this.locale=s.getLocaleName(),this.movieSizeFormatter=b.createDataSizeFormatter(g.Gigabyte,1)}render(){const e=this.product;return e?e.isMovie?this.renderMoviesSection(e):e.isTvSeries?this.renderTVSection(e):this.renderAppGamesSection(e):t``}renderAppGamesSection(e){const i="/search/publisher?name="+encodeURIComponent(e.publisherName??"");return e.categories&&e.categories.length>3&&(this.showMoreCategoryText=s.get("ProductDetails.ReadMore"),this.overThreeCategories=!0),e.supportedLanguages.length>3&&(this.showMoreLangText=s.get("ProductDetails.ReadMore"),this.overThreeLang=!0),e.permissionsRequired&&(e.permissionsRequired.length>3||e.permissionsRequired.slice(0,3).some(r=>r.length>20))&&(this.showMorePermText=s.get("ProductDetails.ReadMore"),this.overThreePerm=!0),e.additionalLicenseTerms&&(this.showMoreTermsText=s.get("ProductDetails.ReadMore")),t`
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
                            <sl-button class="publisher-name" telemetry-event-id=${f.PublisherTagClicked}
                                       telemetry-data='{ "data": "${e.publisherName}", "type": "publisher-search-results"  }'
                                       variant="text"
                                       size="medium"
                                       rel="nofollow"
                                       href=${e.isMovie?" ":i}>${e.publisherName}</sl-button>
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
     `}openLangDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-lang");!this.dialogOpen&&this.overThreeLang&&e.show()}openCategoryDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-category");!this.dialogOpen&&this.overThreeCategories&&e.show()}openPermDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-perm");!this.dialogOpen&&this.overThreePerm&&e.show()}openAdditionalTermsDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-terms");!this.dialogOpen&&this.renderTermsDialog&&e.show()}openContactInfoDialog(){const e=this.shadowRoot?.querySelector(".dialog-overview-contact-info");this.dialogOpen||e.show()}renderCategories(e,i){if(this.product&&this.product.categories){if(i==="SystemComponents")return t`<div>
                    ${e}
                </div>`;const a="/collections/"+encodeURIComponent(this.product.productFamilyName.toLowerCase())+"/category/"+encodeURIComponent(e);return t`
                <sl-button variant="text" size="medium"
                    href=${a}
                    rel="nofollow"
                    telemetry-data='{ "data": "${e}", "type": "category-search-results"   }'
                    telemetry-event-id=${f.CategoryTagClicked}>
                    ${e}
                </sl-button>
            `}return t``}renderLanguage(e){return t`
            <li>${e}</li>
        `}renderPermission(e){return t`
            <li>${e}</li>
        `}renderLangDialog(e){return this.overThreeLang?t`
            <sl-button class="show-more-button" variant="text" size="medium"
                       telemetry-event-id="LanguagesViewSelected"
                       @click = ${this.openLangDialog} >
                ${this.showMoreLangText}
            </sl-button>
            <sl-dialog label="Supported Languages" class="dialog-overview-lang" @sl-show="${()=>this.dialogOpen=!0}" @sl-after-hide="${()=>this.dialogOpen=!1}">
                <!-- Scrollable content can be reached with sequential focus navigation -->
                <!-- Reference: https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/proposed/ -->
                <div class="dialog-style-lang" tabindex="0">
                    <ul>${e.supportedLanguages?c(e.supportedLanguages,i=>this.renderLanguage(i)):""}</ul>
                </div>
            </sl-dialog>
        `:t``}renderCategoryDialog(e){return e.categories&&e.categories.length>3?t`
                    <sl-button class="show-more-button" variant="text" size="medium"
                                telemetry-event-id="CategoriesViewSelected"
                                @click = ${this.openCategoryDialog} >
                        ${this.showMoreCategoryText}
                    </sl-button>
                    <sl-dialog label="Category" class="dialog-overview-category" @sl-show="${()=>this.dialogOpen=!0}" @sl-after-hide="${()=>this.dialogOpen=!1}">
                        <div class="dialog-style-category">
                            ${e.categories?c(e.categories,i=>this.renderCategories(i,e.categoryId)):""}
                        </div>
                    </sl-dialog>
                `:t``}renderAdditionalTermsDialog(e,i){return i?t`
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
            `:t``}renderContactInfoDialog(e){return t`
            <sl-dialog label="Contact information" class="dialog-overview-contact-info" @sl-show="${()=>this.dialogOpen=!0}" @sl-after-hide="${()=>this.dialogOpen=!1}">
                <div class="term-dialog-spacing">
                    <div class="contact-info-header">Name</div>
                    <div>${e.publisherName}</div>
                </div>
            </sl-dialog>
        `}renderPermDialog(e,i){return e.permissionsRequired&&i?t`
                <sl-button class="show-more-button" variant="text" size="medium"
                           telemetry-event-id="PermissionsShowClicked"
                           @click = ${this.openPermDialog} @sl-show="${()=>this.dialogOpen=!0}"
                           @sl-after-hide="${()=>this.dialogOpen=!1}">
                    ${this.showMorePermText}
                </sl-button>
                <sl-dialog label="Permissions Required" class="dialog-overview-perm">
                    <div class="dialog-style-perm">
                        <ul>${e.permissionsRequired?c(e.permissionsRequired,r=>this.renderPermission(r)):""}</ul>
                    </div>
                </sl-dialog>
                `:t``}renderPermInfo(e){return e.permissionsRequired?t`
                <sl-button
                        href="https://support.microsoft.com/en-us/windows/app-permissions-aea98a7c-b61a-1930-6ed0-47f0ed2ee15c"
                        target="_blank" variant="text" size="medium" rel="nofollow"
                        telemetry-event-id="PermissionInfoClicked">
                    ${s.get("ProductDetails.PermissionsInfo")}
                </sl-button>
            `:t``}renderDeveloperSection(e){return e.developerName?t`
                <div>
                    <div class="row">
                            <sl-icon class="icon" name="box-seam"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.DevelopedBy")}</h5>
                        </div>
                    <h5 class="content">${e.developerName}</h5>
                </div>
            `:t``}renderReleaseDate(e){if(e.releaseDateUtc){const i=x(e.releaseDateUtc);return t`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="calendar4-week"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.ReleaseDate")}</h5>
                    </div>
                    <h5 class="content">${i}</h5>
                </div>
            `}return t``}renderApproximateSize(e){return e.approximateSizeInBytes>0?t`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="boxes"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.ApproximateSize")}</h5>
                    </div>
                    <h5 class="content">${b.formatDataSize(e.maxInstallSizeInBytes||e.approximateSizeInBytes||0)}</h5>
                </div>
            `:t``}renderCategoriesSection(e){return e.categories?t`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="bookmark"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.Category")}</h5>
                    </div>
                    <h5 class="content">
                        ${e.categories!==null?c(e.categories.slice(0,3),i=>this.renderCategories(i,e.categoryId)):""}
                        <div class="dialog-content">${this.renderCategoryDialog(e)}</div>
                    </h5>
                </div>
            `:t``}renderInstallation(e){return e.installationTerms?t`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="download"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.Installation")}</h5>
                    </div>
                    <h5 class="content overflow">${e.installationTerms}</h5>
                </div>
            `:t``}renderCapabilities(e){return e.permissionsRequired?t`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="shield"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.Capabilities")}</h5>
                    </div>
                    <h5 class="content">
                        ${this.renderPermissions(e)}
                    </h5>
                </div>
            `:t``}renderSupportedLanguages(e){return e.supportedLanguages.length!==0?t`
                <div>
                    <div class="row">
                        <sl-icon class="icon" name="chat-text"></sl-icon>
                        <h5 class="subheading">${s.get("ProductDetails.SupportedLanguages")}</h5>
                    </div>
                    <h5 class="content">
                        ${c(e.supportedLanguages.slice(0,3),i=>this.renderSupportedLanguage(i))}
                        <div class="dialog-content">${this.renderLangDialog(e)}</div>
                    </h5>
                </div>
            `:t``}renderSeizureWarning(e){return e.warningMessages&&e.warningMessages.length>0?t`
            <div>
                <div class="row">
                    <sl-icon class="icon" name="exclamation-triangle"></sl-icon>
                    <h5 class="subheading">${s.get("ProductDetails.SeizureWarning")}</h5>
                </div>
                <h5 class="content">${this.renderWarningMessage()}</h5>
            </div>
        `:t``}getShortTitle(e){return e.title&&e.title.length>15?s.getFormatted("Common.Ellipsis",e.title.substring(0,15)):e.title||""}renderSupport(e,i){const r=e.supportUris?.at(0)?.uri;return i&&r?t`
                <sl-button variant="text" size="medium" target="_blank"
                           telemetry-event-id="SupportClicked" 
                           rel="nofollow"
                           href=${r}>
                    ${s.get("ProductDetails.AppSupport")}
                </sl-button>
            `:t``}renderWebsite(e){const i=e.appWebsiteUrl;return i?t`
            <sl-button variant="text" size="medium" target="_blank" href=${i} rel="nofollow"
                       telemetry-event-id="WebsiteClicked">
                ${s.get("ProductDetails.AppWebsite")}
            </sl-button>
        `:t``}renderContactInfo(){return t`
            <sl-button variant="text" size="medium" target="_blank"
                        telemetry-event-id="ContactsClicked" 
                        @click = ${this.openContactInfoDialog}>Contact information</sl-button>
        `}renderPrivacyPolicy(e){return t`
            <sl-button variant="text" size="medium" target="_blank" rel="nofollow"
                        telemetry-event-id="PrivacyClicked"
                        href=${e.privacyUrl}>${s.get("ProductDetails.AppPrivacyPolicy")}</sl-button>
        `}renderLicenseTerms(e,i){return e.additionalLicenseTerms?.startsWith("https:")||e.additionalLicenseTerms?.startsWith("http:")?t`
                <sl-button variant="text" size="medium" target="_blank"
                           telemetry-event-id="LicenseTermsClicked"
                           href=${e.additionalLicenseTerms}
                           rel="nofollow">
                    ${s.get("ProductDetails.AppLicenseTerms")}
                </sl-button>
            `:i?t`
                <div>
                    ${e.additionalLicenseTerms}
                </div>
            `:e.additionalLicenseTerms?(this.renderTermsDialog=!0,t`
                    <div>
                        ${s.getFormatted("Common.Ellipsis",e.additionalLicenseTerms?.substring(0,55).trim()||"")}
                    </div>
                `):t``}renderLegalDisclaimer(e){return e.isMoviesOrTVs||e.productFamilyName==="Passes"&&e.isMicrosoftProduct?t``:t`
        <div>
            <div class="row">
                <sl-icon class="icon" name="info-circle"></sl-icon>
                <h5 class="subheading">${s.get("ProductDetails.LegalDisclaimer")}</h5>
            </div>
            <h5 class="content">
                <p class="subtext">${s.get("ProductDetails.LegalDisclaimerNote")}</p>
            </h5>
        </div>
        `}renderTermsOfTransaction(){return t`
            <sl-button variant="text" size="medium" target="_blank"
                       telemetry-event-id="TransactionTermsClicked"
                       rel="nofollow"
                       href="https://www.microsoft.com/en-us/store/b/terms-of-sale?rtc=1">
                ${s.get("ProductDetails.TransactionTerms")}
            </sl-button>
        `}renderAdditionalTerms(e){return e.isMovie?this.renderTermsOfTransaction():t`
                ${e.privacyUrl?this.renderPrivacyPolicy(e):""}
                ${e.additionalLicenseTerms?this.renderLicenseTerms(e,!1):""}
                ${this.renderTermsOfTransaction()}
                <div>${this.renderAdditionalTermsDialog(e,this.renderTermsDialog)}</div>`}renderPublisherInfo(e){const i=!!e.supportUris&&e.supportUris.length>0&&!!e.supportUris[0].uri;return e.isMovie?t``:t`
                ${this.renderSupport(e,i)}
                ${this.renderWebsite(e)}
                ${this.renderContactInfo()}
                <div>${this.renderContactInfoDialog(e)}</div>
            `}renderDisplayPermission(e,i){let r="";const a=e.permissionsRequired?e.permissionsRequired[i]:null;return a&&(a.length>25?(r=s.getFormatted("Common.Ellipsis",a.substring(0,25)),this.exceedPermLength=!0):r=a),t`
            ${r}
        `}renderPermissions(e){return e.isMovie?t``:t`
                <div>${this.renderDisplayPermission(e,0)}</div>
                <div>${this.renderDisplayPermission(e,1)}</div>
                <div>${this.renderDisplayPermission(e,2)}</div>
                <div class="dialog-content">
                    <div>${this.renderPermDialog(e,this.overThreePerm)}</div>
                    <div>${this.renderPermInfo(e)}</div>
                </div>
            `}renderWarningMessage(){return t`
            <sl-button variant="text" size="medium"
                        telemetry-event-id="SeizureWarningClicked"
                        rel="nofollow"
                        href="https://support.xbox.com/en-US/help/family-online-safety/online-safety/photosensitive-seizure-warning" target="_blank">
                ${s.get("ProductDetails.SeizureWarningPhotosensitive")}
            </sl-button>
        `}renderSupportedLanguage(e){return t`
            <div>${e}</div>
        `}renderMoviesSection(e){this.getDirectors(),this.getWriters();const i=Math.floor((e.durationInSeconds||0)/3600),r=Math.floor((e.durationInSeconds||0)%3600/60),a=(i!==0?i+s.get("ProductDetails.HourAbbreviation"):"")+(r!==0?r+s.get("ProductDetails.MinAbbreviation"):"");return this.getVideoSizes(e),this.getVideoSubtitles(e),t`
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
                        <h5 class="content">${c(this.directors,o=>this.renderDirectors(o))}</h5>
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
                        <h5 class="content">${c(this.subtitleLanguages,o=>this.renderVideoSubtitles(o))}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="calendar4-week"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.ReleasedYear")}</h5>
                        </div>
                        <h5 class="content">${P(e.releaseDateUtc)}</h5>
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
                    <div class="${i+r===0?"hidden":""}">
                        <div class="row">
                            <sl-icon class="icon" name="stopwatch"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Duration")}</h5>
                        </div>
                        <h5 class="content">${a}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="bookmark"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Genres")}</h5>
                        </div>
                        <div class="genre-column">
                            ${e.categories!==null?c(e.categories,o=>this.renderGenres(o)):""}
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="person"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Writers")}</h5>
                        </div>
                        <h5 class="content">${c(this.writers,o=>this.renderWriters(o))}</h5>
                    </div>
                    <div class="${this.videoSizesMap.size===0?"hidden":""}">
                        <div class="row">
                            <sl-icon class="icon" name="boxes"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Size")}</h5>
                        </div>
                        <h5 class="content">${c(this.videoSizesMap,o=>this.renderVideoSizes(o))}</h5>
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
     `}renderRatingDescriptors(e){if(e){const i=e.join(", ");return t`
                <span class="descriptor-text">${i}</span>
            `}return t``}renderGenres(e){const i="/search?query="+encodeURIComponent(e);return t`
            <h5 class="content">
                <sl-button class="genre" variant="text" size="medium"
                           telemetry-event-id="GenreClicked"
                           rel="nofollow"
                           href=${i}>
                    ${e}
                </sl-button>
            </h5>
        `}getDirectors(){this.contributors?.forEach(e=>{e.subtitle?.includes("Director")&&this.directors?.push(e.title)})}renderDirectors(e){return t`
            <div>${e}</div>
        `}getWriters(){this.contributors?.forEach(e=>{e.subtitle?.includes("Writer")&&this.writers?.push(e.title)})}renderWriters(e){return t`
            <div>${e}</div>
        `}getVideoSizes(e){e.skus?.forEach(i=>{this.parseVideoInstance(i.videoInstances)})}parseVideoInstance(e){e.forEach(i=>{const r=i.resolutionDetail+" "+i.resolutionFormat,a=i.size;i.deliveryFormat==="Progressive"&&(this.videoSizesMap.has(r)||this.videoSizesMap.set(r,this.movieSizeFormatter.format((a||0)/1073741824)))})}renderVideoSizes(e){return t`<div>${e[1]+" ("+e[0]+")"}</div>`}getVideoSubtitles(e){if(e.skus!==null){const a=JSON.parse(e.skus[0]?.fulfillmentData).VideoAttributes.AvailableVideoLanguages[0]?.OverlaysProperties;a&&a.forEach(o=>{o.DisplayName==="English"&&(o.DisplayName+="(CC)"),this.subtitleLanguages.push(o.DisplayName.charAt(0).toUpperCase()+o.DisplayName.slice(1))})}}renderVideoSubtitles(e){return t`
            <div>${e}</div>
        `}renderTVSection(e){return this.getVideoSubtitles(e),this.getAudioLanguages(e),this.getTotalEpisodeDuration(),t`
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
                        <h5 class="content">${c(this.audioLanguages,i=>this.renderAudioLanguages(i))}</h5>
                    </div>
                    <div>
                        <div class="row">
                            <sl-icon class="icon" name="justify-left"></sl-icon>
                            <h5 class="subheading">${s.get("ProductDetails.Subtitles")}</h5>
                        </div>
                        <h5 class="content">${c(this.subtitleLanguages,i=>this.renderVideoSubtitles(i))}</h5>
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
                            ${e.categories!==null?c(e.categories,i=>this.renderGenres(i)):""}
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
        `}getAudioLanguages(e){if(e.skus!==null){const a=JSON.parse(e.skus[0].fulfillmentData).VideoAttributes.AvailableVideoLanguages[0],o=new Intl.DisplayNames([this.locale],{type:"language"});if(a!==void 0){const h=o.of(a.AudioLocale);h!==void 0&&this.audioLanguages.push(h)}}}renderAudioLanguages(e){return t`
            <div>${e}</div>
        `}getTotalEpisodeDuration(){let e=0;this.episodes?.forEach(o=>{o.durationInSeconds!==null&&(e+=o.durationInSeconds)});const i=Math.floor((e||0)/3600),r=Math.floor((e||0)%3600/60),a=this.episodes?.length+" episodes ("+(i!==0?i+" h ":"")+(r!==0?r+" min)":")");this.totalEpisodesDuration=a}};n.styles=[D,T];l([u({attribute:"product"})],n.prototype,"product",2);l([u({attribute:"contributors"})],n.prototype,"contributors",2);l([u({attribute:"episodes"})],n.prototype,"episodes",2);l([u()],n.prototype,"dir",2);l([d()],n.prototype,"overThreeLang",2);l([d()],n.prototype,"dialogOpen",2);l([d()],n.prototype,"addedLangDialogListeners",2);l([d()],n.prototype,"overThreePerm",2);l([d()],n.prototype,"addedPermDialogListeners",2);l([d()],n.prototype,"exceedPermLength",2);l([d()],n.prototype,"addedTermsDialogListeners",2);l([d()],n.prototype,"showMoreCategoryText",2);l([d()],n.prototype,"showMoreLangText",2);l([d()],n.prototype,"showMorePermText",2);l([d()],n.prototype,"showMoreTermsText",2);l([d()],n.prototype,"renderTermsDialog",2);l([d()],n.prototype,"directors",2);l([d()],n.prototype,"writers",2);l([d()],n.prototype,"videoSizesMap",2);l([d()],n.prototype,"subtitleLanguages",2);l([d()],n.prototype,"audioLanguages",2);l([d()],n.prototype,"totalEpisodesDuration",2);l([d()],n.prototype,"overThreeCategories",2);n=l([y("additional-info")],n);export{n as AdditionalInfo};
