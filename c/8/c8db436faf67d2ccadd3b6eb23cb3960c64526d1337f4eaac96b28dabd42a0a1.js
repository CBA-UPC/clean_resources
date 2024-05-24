import{i as l,x as n,V as p,c as d,t as m}from"./index-ea800fad.js";import{P as u}from"./product-collection-ec619889.js";import{r as g}from"./css-function-af4ff51c.js";import"./repeat-0dadc8c6.js";import"./style-map-14544ca7.js";import"./image-helper-99359f42.js";import"./nav-bar-eecd89ff.js";import"./auto-complete-app-search-88360129.js";const f=l`
    :host {
        margin-top: var(--sl-spacing-large);
        --card-width: ${g("100%","var(--card-spacing)","var(--collection-group-num)")};
        --aspect-ratio: 16 / 9;
    }
`;var v=Object.defineProperty,h=Object.getOwnPropertyDescriptor,P=Object.getPrototypeOf,y=Reflect.get,_=(e,o,r,i)=>{for(var t=i>1?void 0:i?h(o,r):o,c=e.length-1,s;c>=0;c--)(s=e[c])&&(t=(i?s(o,r,t):s(t))||t);return i&&t&&v(o,r,t),t},$=(e,o,r)=>y(P(e),r,o);let a=class extends u{constructor(){super(),this.cardAppearance="collection-group"}renderDefaultCard(e,o,r,i){const t=navigator.userAgent.toLowerCase();if(e.productId==="MerchandiserContent/Games/Primary/instantgamescollectionprimary/_instantgamescollectionprimary"){const s=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(navigator.userAgentData?.mobile||t.includes("macintosh")||t.includes("android")||t.includes("linux")||s)return n``}return n`
            <collection-module
                .product=${e}
                card-index=${o+1}
                part="collection-group"
                role="listitem"
                class="product-card"
                telemetry-event-id=${p.CollectionGroupClicked}
                telemetry-data='{ "itemId": "${e.productId}", "itemType": "${e.productFamilyName}", "cardType": "collection-group", "slot": ${o+1}, "type": "collection" }'
                @focus="${()=>this.focusedProduct=e}"
                ?highlighted=${this.focusedProduct===e}
                tabindex="${r}"
                ${d(i)}>
            ></collection-module>
        `}};a.styles=$(a,a,"styles").concat(f);a=_([m("collection-group")],a);export{a as CollectionGroup};
