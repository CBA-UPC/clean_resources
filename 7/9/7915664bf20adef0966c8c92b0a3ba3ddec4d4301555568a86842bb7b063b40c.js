import{i as m,x as n,r as a,t as u}from"./index-64e4e9e7.js";import"./collection-group-c0458f7e.js";import{CollectionsPage as f}from"./collections-791d3c1f.js";import{P as h}from"./paged-list-221ade0f.js";import"./product-collection-7797e90b.js";import"./repeat-632d6c35.js";import"./style-map-69b34fe6.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-5d5da084.js";import"./image-helper-5b969ca1.js";import"./nav-bar-8584c4e6.js";import"./auto-complete-app-search-1bd0a416.js";import"./alert-service-3ccfd653.js";import"./chunk.HDLULROG-961dc698.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-68edf51b.js";import"./chunk.MHCKU7CX-495c5042.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./filter-menu.styles-b53c2b6a.js";const d=m`
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
