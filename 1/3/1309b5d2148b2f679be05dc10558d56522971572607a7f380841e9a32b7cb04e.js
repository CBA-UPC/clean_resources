import{i as l,x as n,W as p,c as m,t as d}from"./index-64e4e9e7.js";import{P as u}from"./product-collection-7797e90b.js";import{r as g}from"./css-function-5d5da084.js";import"./repeat-632d6c35.js";import"./style-map-69b34fe6.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./image-helper-5b969ca1.js";import"./nav-bar-8584c4e6.js";import"./auto-complete-app-search-1bd0a416.js";const f=l`
    :host {
        margin-top: var(--sl-spacing-large);
        --card-width: ${g("100%","var(--card-spacing)","var(--collection-group-num)")};
        --aspect-ratio: 16 / 9;
    }
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,P=Object.getPrototypeOf,y=Reflect.get,_=(t,o,r,i)=>{for(var e=i>1?void 0:i?h(o,r):o,c=t.length-1,s;c>=0;c--)(s=t[c])&&(e=(i?s(o,r,e):s(e))||e);return i&&e&&v(o,r,e),e},$=(t,o,r)=>y(P(t),r,o);let a=class extends u{constructor(){super(),this.cardAppearance="collection-group"}renderDefaultCard(t,o,r,i){const e=navigator.userAgent.toLowerCase();if(t.productId==="MerchandiserContent/Games/Primary/instantgamescollectionprimary/_instantgamescollectionprimary"){const s=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(navigator.userAgentData?.mobile||e.includes("macintosh")||e.includes("android")||e.includes("linux")||s)return n``}return n`
            <collection-module
                .product=${t}
                card-index=${o+1}
                part="collection-group"
                role="listitem"
                class="product-card"
                telemetry-event-id=${p.CollectionGroupClicked}
                telemetry-data='{ "itemId": "${t.productId}", "itemType": "${t.productFamilyName}", "cardType": "collection-group", "slot": ${o+1}, "type": "collection" }'
                @focus="${()=>this.focusedProduct=t}"
                ?highlighted=${this.focusedProduct===t}
                tabindex="${r}"
                ${m(i)}>
            ></collection-module>
        `}};a.styles=$(a,a,"styles").concat(f);a=_([d("collection-group")],a);export{a as CollectionGroup};
