"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[94255],{935956:(e,r,t)=>{t.d(r,{KG:()=>l,mb:()=>i,nQ:()=>n});var i=e=>{var r,t,i=null==e||null===(r=e.params)||void 0===r||null===(t=r.find(())||void 0===t?void 0:t.normalizedValue,l={new:"https://schema.org/NewCondition",used:"https://schema.org/UsedCondition",damaged:"https://schema.org/DamagedCondition",refurbished:"https://schema.org/RefurbishedCondition"};return i&&l[i]?{condition:l[i]}:null},l=(e,r)=>e.slice(0,r).map((),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pathName:""},r=arguments.length>1?arguments[1]:void 0,t=[{level:"districtName",type:"AdministrativeArea"},{level:"cityName",type:"City"},{level:"regionName",type:"State"}];for(var{level:i,type:l}of t){var n=e[i];if(n)return{"@type":l,name:n}}return{"@type":"Country",name:r}}},971224:(e,r,t)=>{t.r(r),t.d(r,{default:);var i=t(356088),l=t.n(i),n=t(46160),a=t(93321),o=t(616642),u=t(643716),c=t.n(u),d=t(181917),v=t(935956),s=e=>{var{locationNames:r,name:t,offerCount:u,organicAds:s,priceCurrency:p}=e,{requestData:{host:m}}=(0,i.useContext)(a.ZP),{pathname:h}=(0,d.useLocation)(),{marketMetadata:{countryCode:g}}=(0,o.J8)(),y=(5,s.filter(().slice(0,5).map((e=>e.photos[0].replace(/;s=.*$/,"")))),f=s.slice(0,9).map(().join(" "),{lowPrice:C,highPrice:P}=(e=>{var r=e.map(();return{lowPrice:Math.min(...r),highPrice:Math.max(...r)}})(s),A=((e,r)=>{if(c()(e))return{"@type":"Country",name:r};for(var{level:t,type:i}of[{level:"district",type:"AdministrativeArea"},{level:"city",type:"City"},{level:"region",type:"State"}]){var l,n=null===(l=e[t])||void 0===l?void 0:l.name;if(n)return{"@type":i,name:n}}})(r,g),_="https://".concat(m).concat(h),N=(e=>e.slice(0,20).map((e=>{var r,t,i,l;return{"@type":"Offer",additionalType:"Product",itemCondition:(0,v.mb)(e),availability:"https://schema.org/InStock",priceCurrency:null===(r=e.price)||void 0===r||null===(t=r.regularPrice)||void 0===t?void 0:t.currencyCode,areaServed:(0,v.nQ)(e.location,g),name:e.title,price:null===(i=e.price)||void 0===i||null===(l=i.regularPrice)||void 0===l?void 0:l.value,url:e.url,image:(0,v.KG)(e.photos,5),priceValidUntil:e.validToTime}})))(s),S={"@context":"https://schema.org","@type":"Product",name:t,image:y,description:f,url:_,offers:{"@type":"AggregateOffer",availability:"https://schema.org/InStock",priceCurrency:p,lowPrice:C,highPrice:P,offerCount:u,areaServed:A,offers:N}},D=JSON.stringify(S);return l().createElement(n.ql,null,l().createElement("script",{type:"application/ld+json"},D))},p=t(749856),m=t(370491),h=t(391742),g=t(971215),y=t.n(g),f=(0,i.memo)((e=>{var r,t,{seo:i,listing:n,categoryPath:a,locationNames:o}=e,{isFeatureFlag:u}=(0,p.Z)(),c=u(h.h.listingProductSchema),[d]=(0,m.L_)(),v=null==d?void 0:d[n.categoryId];if(!c||!n.ads.length)return null;if(!v||"job"===(null==v?void 0:v.type)||"services"===(null==v?void 0:v.type))return null;var g=(null===(r=n.metaData.searchReason)||void 0===r?void 0:r.organic)||[],y=g.length?n.ads.filter(():[];if(!y.length)return null;var f,C,P,A=(P=y.find(())?null==P||null===(f=P.price)||void 0===f||null===(C=f.regularPrice)||void 0===C?void 0:C.currencyCode:null;if(!A)return null;var _=a!==v.path?(null==i?void 0:i.h1)||(null==i?void 0:i.title):(null==v?void 0:v.name)||(null==i?void 0:i.h1)||(null==i?void 0:i.title);return l().createElement(s,{name:_,offerCount:null!==(t=n.totalElements)&&void 0!==t?t:n.ads.length,organicAds:y,priceCurrency:A,locationNames:o})}),()}}]);
//# sourceMappingURL=olxeuweb.listing.productSchema.d6c1acee5.chunk.js.map