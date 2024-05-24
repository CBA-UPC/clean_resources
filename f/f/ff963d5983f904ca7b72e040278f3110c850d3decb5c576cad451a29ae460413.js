import{i as m,x as n,r as a,t as u}from"./index-ea800fad.js";import"./collection-group-28268adb.js";import{CollectionsPage as f}from"./collections-77766656.js";import{P as h}from"./paged-list-3560a4f8.js";import"./product-collection-ec619889.js";import"./repeat-0dadc8c6.js";import"./style-map-14544ca7.js";import"./css-function-af4ff51c.js";import"./image-helper-99359f42.js";import"./nav-bar-eecd89ff.js";import"./auto-complete-app-search-88360129.js";import"./alert-service-c797c76f.js";import"./chunk.HDLULROG-24721c13.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-71726c0b.js";import"./chunk.MHCKU7CX-3581d254.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./filter-menu.styles-5436d836.js";const d=m`
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
