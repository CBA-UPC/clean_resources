import{c as i}from"./checkLandingContent.809a05ed.js";import{ab as m,bt as c,u as d,ay as u}from"./itinerary-entities.5f897bcd.js";import{l as p,a4 as l,q as g,G as f,H as C,z as _}from"./graphql.5cf3693b.js";import{I as y}from"./InformationContainer.c9910b2d.js";import{R}from"./itinerary-modules.2ea32123.js";import"./service-client.4862e840.js";import"./FaqList.f0c8de76.js";import"./index.308ba4bd.js";const x=p({__name:"[code]",setup(h){i({message:"Page Removed",statusCode:410});const n=m(),e=c(),s=d(),t=l().params.code.toString();e.setOriginBaseOnCode("THR"),e.setDestinationBaseOnCode(t);const{landingPageContent:a,landingCityName:r}=u(n);return g(async()=>{var o;e.searchMode=((o=a.value)==null?void 0:o.mode)||"domestic",e.isForeign&&t.trim()&&(await e.loadForeignAirports({target:"destination",token:t.trim()}),e.setDestinationBaseOnCode(t),e.setOriginBaseOnCode("IKA")),s.setReserveType(R.Flight)}),(o,O)=>(f(),C(y,{title:`راهنمای خرید اینترنتی پرواز ${_(r)} از مستر بلیط `},null,8,["title"]))}});export{x as default};