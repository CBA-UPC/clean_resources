import{i as m,x as n,r as a,t as u}from"./index-b49b19e7.js";import"./collection-group-77279367.js";import{CollectionsPage as f}from"./collections-8ddcdc1e.js";import{P as h}from"./paged-list-43c2f330.js";import"./product-collection-3fa5ff54.js";import"./repeat-18af36e2.js";import"./style-map-db7a8965.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-27cf3c1f.js";import"./image-helper-99359f42.js";import"./nav-bar-27bbdc35.js";import"./auto-complete-app-search-29ced610.js";import"./alert-service-619e8956.js";import"./chunk.HDLULROG-a171dd0c.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-42ee1a93.js";import"./chunk.MHCKU7CX-df67fb6b.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./filter-menu.styles-d60fd63e.js";const d=m`
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
