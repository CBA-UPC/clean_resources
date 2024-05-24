import{i as u,s as d,x as p,T as h,l as m,a as y,n as c,t as g}from"./index-aa05d19d.js";import{s as f}from"./spacing.styles-c42ebb1e.js";const v=u`
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
`;var x=Object.defineProperty,b=Object.getOwnPropertyDescriptor,n=(t,s,i,r)=>{for(var e=r>1?void 0:r?b(s,i):s,a=t.length-1,l;a>=0;a--)(l=t[a])&&(e=(r?l(s,i,e):l(e))||e);return r&&e&&x(s,i,e),e};let o=class extends d{constructor(){super(...arguments),this.itemId=null,this.itemType=null,this.itemName=null}render(){const t=this.itemType?.capitalize(),s=this.itemType==="product"?p`<div class="d-flex gap-2 justify-content-center"><auto-complete-app-search class="shown" /></div>`:h,i=this.itemName||this.itemId||this.itemType;return p`
            <h1 class="pb-0">⚠️ ${m.getFormatted(`Error.${t}NotFound.Title`,i)}</h1>
            <p class="mt-0">
                ${m.getFormatted(`Error.${t}NotFound.Description`,i)}
            </p>
            ${s}
        `}};o.styles=[y,f,v];n([c({attribute:"item-id"})],o.prototype,"itemId",2);n([c({attribute:"item-type"})],o.prototype,"itemType",2);n([c({attribute:"item-name",converter:t=>t?decodeURIComponent(t):""})],o.prototype,"itemName",2);o=n([g("not-found-page")],o);export{o as NotFoundPage};
