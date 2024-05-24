import{i as m,x as n,r as a,t as u}from"./index-f0821274.js";import"./collection-group-77d800d0.js";import{CollectionsPage as f}from"./collections-7af4dccb.js";import{P as h}from"./paged-list-89caa6b1.js";import"./product-collection-2e973b65.js";import"./repeat-aaef31c8.js";import"./style-map-663a1d19.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-74a8ae57.js";import"./image-helper-5b969ca1.js";import"./nav-bar-ca104fe4.js";import"./auto-complete-app-search-76feaa83.js";import"./alert-service-b4ead372.js";import"./chunk.HDLULROG-e7e1d3ca.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-a9c3431f.js";import"./chunk.MHCKU7CX-552ac5c8.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./filter-menu.styles-da605465.js";const d=m`
    .main-column {
        display: flex;
        flex-direction: column;
    }

`;var _=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,C=Reflect.get,p=(t,e,l,r)=>{for(var o=r>1?void 0:r?v(e,l):e,c=t.length-1,s;c>=0;c--)(s=t[c])&&(o=(r?s(e,l,o):s(o))||o);return r&&o&&_(e,l,o),o},P=(t,e,l)=>C(y(t),l,e);let i=class extends f{constructor(){super(),this.title="",this.collectionType="collection-group"}setCollectionItems(){this.collectionItems=h.fromListOfCollections(decodeURIComponent(this.collectionName))}collectionChunkFetched(t){super.collectionChunkFetched(t),this.title=t.title}render(){return n`
            <div class="main-column" 
                 telemetry-area-id="CollectionGroup"
                 telemetry-data='{ "collectionId": "${this.collectionItems?.collectionName}" }'>
                <h3>${this.title}</h3>
                <collection-group .products=${this.collectionItems}></collection-group>
            </div>
        `}};i.styles=P(i,i,"styles").concat(d);p([a()],i.prototype,"title",2);i=p([u("collections-browse")],i);export{i as CollectionsBrowse};
