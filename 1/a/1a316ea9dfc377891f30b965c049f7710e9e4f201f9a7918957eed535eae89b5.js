import{i as h,s as p,x as t,l as i,a as u,n as d,t as f}from"./index-aa05d19d.js";import{s as g}from"./spacing.styles-c42ebb1e.js";import"./auto-complete-app-search-dfdb1cc6.js";import"./repeat-1a78a8d2.js";import"./style-map-a428b004.js";const y=h`
    :host {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container {
        max-width: 500px;
    }

    h1 {
        font-weight: 600;
        text-align: center;
        font-family: var(--body-font);
    }

    h3 {
        font-weight: 400;
        text-align: center;
        font-family: var(--body-font);
        margin: 0;
    }

    p {
        text-align: center;
        padding: 0 var(--sl-spacing-x-large);
    }

    .technical-details {
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-gray-600); /** Any lighter and Accessibility Insights complains about contrast issues */
        position: absolute;
        bottom: 0;
    }

    auto-complete-app-search {
        min-width: 300px;
    }
`;var b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,s=let o=class extends p{ender(){return t`
            <div class="container d-flex flex-column align-items-center justify-content-center mr-2">
                ${this.renderContent()}
            </div>
        `}renderContent(){const e=this.itemName?"default":"primary",r=this.itemName||this.itemId||"";return t`
            <div class="container d-flex flex-column align-items-center justify-content-center mr-2">
                <h1 class="pb-0">⚠️ ${i.getFormatted(`Error.${this.errorCode}.Title`,r)}</h1>
                <p class="mt-0" id="search-btn-label" for="search-btn">
                    ${i.getFormatted(`Error.${this.errorCode}.Description`,r)}
                </p>
                <div class="d-flex gap-2 justify-content-center">
                    <sl-button variant="${e}" href="/">${i.get("NavigationBar.Home")}</sl-button>
                    ${this.renderSearchButton()}
                </div>

                ${this.renderTechnicalDetails()}
            </div>
       `}renderTechnicalDetails(){if(!this.errorCode)return t``;const e=this.errorCode?t`<span>${i.getFormatted("Error.Code",this.errorCode)}</span>`:t``;return t`
            <p class="technical-details d-flex flex-column align-items-center">
                ${e}
            </p>
        `}};o.styles=[u,g,y];s([d({attribute:"error-code"})],o.prototype,"errorCode",2);s([d({attribute:"item-id"})],o.prototype,"itemId",2);s([d({attribute:"item-name",conver:""})],o.prototype,"itemName",2);o=s([f("error-page")],o);export{o as ErrorPage};
