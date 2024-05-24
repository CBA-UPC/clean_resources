import{i as c,m as u,B as h,s as g,x as n,l as i,a as y,n as p,r as b,t as f}from"./index-64e4e9e7.js";import"./product-collection-7797e90b.js";import{alertService as v}from"./alert-service-3ccfd653.js";import{c as q}from"./repeat-632d6c35.js";import"./style-map-69b34fe6.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-5d5da084.js";import"./image-helper-5b969ca1.js";import"./nav-bar-8584c4e6.js";import"./auto-complete-app-search-1bd0a416.js";import"./chunk.HDLULROG-961dc698.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-68edf51b.js";const w=c`
    .system-req-row {
        display:flex;
        flex-direction: row;
        gap: var(--sl-spacing-2x-small);
    }

    .system-req-heading {
        font-size: var(--sl-font-size-medium);
        font-weight: var(--sl-font-weight-semibold);
    }

    .system-req-content {
        font-size: var(--sl-font-size-medium);
        flex: 1;
    }

    .show-more-btn::part(label) {
        /** For the "show more/show less" buttons, don't give any left padding. This allows the text to align right up to the left edge of the text above it. */
        padding-left: 0;
        /** Move it up a bit to make it appear properly spaced with the text above it. */
        margin-top: calc(-1 * var(--sl-spacing-x-small));
    }

    p {
        margin-top: 0;
    }

    sl-card {
        --border-radius: var(--sl-border-radius-large);
        width: 100%;
    }

    .requirement-label {
        color: var(--sl-color-neutral-500);
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
        font-family: var(--body-font);
    }

    sl-card::part(body) {
        padding: var(--sl-card-body-padding);
    }

    sl-card::part(header) {
        border-color: #E6E6E6;
        margin: var(--sl-card-header-margin);
        padding: var(--sl-card-header-padding);
    }


    ${u(h.lg)} {
        .system-req-row, sl-button {
            margin-left: 0;
        }
    }

    sl-button::part(base) {
        font-size: 14px;
        font-weight: 400;
    }

    p {
        font-size: 14px !important;
    }
    .system-req-row:last-of-type p{
        margin-bottom: 0;
    }

    @media (prefers-color-scheme: dark) {
        sl-card::part(header) {
            border-color: #FFFFFF15 !important;
        }

        .show-more-btn::part(label) {
            color: var(--theme-secondary-element-color) !important;
        }

        .show-more-btn::part(label):hover {
            color: var(--theme-secondary-element-hover-color) !important;
        }
    }
`;var x=Object.defineProperty,R=Object.getOwnPropertyDescriptor,l=(e,t,s,o)=>{for(var r=o>1?void 0:o?R(t,s):t,d=e.length-1,m;d>=0;d--)(m=e[d])&&(r=(o?m(t,s,r):m(r))||r);return o&&r&&x(t,s,r),r};let a=class extends g{constructor(){super(),this.product=null,this.dir="ltr",this.requirementExpanded=!1,this.counter=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}showProductLoadError(e){v.showError("Unable to load app","We couldn't load that app. Try searching for the app to try again.",e)}renderRequirementRow(e){const t=e.name,s=this.renderRequirementContent(e.description||"");return n`
            <div class="system-req-row">
                <b class="system-req-heading"><p>${i.getFormatted("ProductDetails.GeneralHeader",t)}</p></b>
                ${s}
            </div>
        `}renderRequirementContent(e){const t=this.product?.systemRequirements?.recommended?.items?.at(this.counter)?.description;if(this.counter++,!t||e===t)return n`<p class="system-req-content">${e}</p>`;{const s=i.get("SystemRequirements.Minimum"),o=i.get("SystemRequirements.Recommended"),r=n`${e} <span class="requirement-label">${s}</span>${", "+t} <span class="requirement-label">${o}</span>`;return n`
                <p class="system-req-content">${r}</p>`}}render(){return n`
            <div dir=${this.dir}>
                <sl-card telemetry-area-id="SystemRequirements">
                    <div slot="header">
                        <h4>${i.get("ProductDetails.SystemRequirementHeader")}</h4>
                    </div>
                    ${this.product?.systemRequirements?.minimum?.items!==void 0?q(this.product?.systemRequirements?.minimum?.items,e=>this.renderRequirementRow(e)):""}
                </sl-card>
            </div>
        `}};a.styles=[y,w];l([p({attribute:"product"})],a.prototype,"product",2);l([p()],a.prototype,"dir",2);l([b()],a.prototype,"requirementExpanded",2);a=l([f("system-requirements")],a);export{a as SystemRequirements};
