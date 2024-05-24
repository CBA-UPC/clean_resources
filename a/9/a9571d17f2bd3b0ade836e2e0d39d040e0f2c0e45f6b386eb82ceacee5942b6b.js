import{i as h,s as u,x as c,l as m,T as d,a as y,n as p,t as g}from"./index-b49b19e7.js";import{s as f}from"./spacing.styles-ac719b05.js";import"./auto-complete-app-search-29ced610.js";import"./repeat-18af36e2.js";import"./style-map-db7a8965.js";const v=h`
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
`;var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,n=(t,r,s,o)=>{for(var e=o>1?void 0:o?b(r,s):r,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(o?l(r,s,e):l(e))||e);return o&&e&&x(r,s,e),e};let i=class extends u{constructor(){super(...arguments),this.itemId=null,this.itemType=null,this.itemName=null}render(){const t=this.itemType?.capitalize()||"",r=this.renderSearch(),s=this.itemName||this.itemId||this.itemType;return c`
            <h1 class="pb-0">⚠️ ${m.getFormatted(`Error.${t}NotFound.Title`,s)}</h1>
            <p class="mt-0">
                ${m.getFormatted(`Error.${t}NotFound.Description`,s)}
            </p>
            ${r}
        `}renderSearch(){return this.itemType!=="product"?d:c`
            <div class="d-flex gap-2 justify-content-center">
                <auto-complete-app-search class="shown"></auto-complete-app-search>
            </div>
        `}};i.styles=[y,f,v];n([p({attribute:"item-id"})],i.prototype,"itemId",2);n([p({attribute:"item-type"})],i.prototype,"itemType",2);n([p({attribute:"item-name",converter:t=>t?decodeURIComponent(t):""})],i.prototype,"itemName",2);i=n([g("not-found-page")],i);export{i as NotFoundPage};
