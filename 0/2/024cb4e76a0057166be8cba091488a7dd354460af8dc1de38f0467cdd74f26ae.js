"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76],{7457:function(t,e,n){n.d(e,{H1:function(){return u},eE:function(){return g},xD:function(){return c},zy:function(){return i}});var r=n(9686),o=n(40),l=n(6185),s=n(4489);const u=(0,l.M)("querySuggestionResults",{loading:!1,error:!1,results:null,currentKey:null});(0,r.fZ)(null);const i=(0,r.fZ)(null);function c(t){i.set(t)}function a(t,e){const n={querySuggestions:null},r=e.results[0].grouped_hits;var o,l;r.length&&(n.querySuggestions=r.reduce(((t,e)=>{const n=e.hits.map((t=>{var e;const n=t.document,r=null===(e=t.highlight)||void 0===e?void 0:e.title;return{string:n.title,url:n.url,highlight:r?r.snippet:null}}));return t.concat(n)}),[])),o=t,l=n,u.update((t=>t?{...t,results:{...t.results,[o]:l},loading:!1,currentKey:o}:t))}async function d(t){const e=function(t){const e=(0,r.U2)(u);return null!=e&&e.results&&null!=e&&e.results[t]?null==e?void 0:e.results[t]:null}(t);if(e)return void function(t){u.update((e=>e?{...e,currentKey:t}:e))}(t);var n;n=!0,u.update((t=>t?{...t,loading:n}:t));const l=new AbortController,s=l.signal,i=`${o.Z.config.typesenseNearestNode}/multi_search`,c=(o.Z.config.locale.toLowerCase(),setTimeout((()=>l.abort()),5e3)),d={searches:[{collection:"query-suggestions",query_by:"title,url",group_by:"title",group_limit:1,q:t,per_page:10,infix:"fallback"}]};try{const e=await fetch(i,{method:"POST",signal:s,headers:{"Content-Type":"application/json","x-typesense-api-key":o.Z.config.typesenseApiKey},body:JSON.stringify(d)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);a(t,await e.json())}catch(t){throw console.error("Fetching failed:",t),t}finally{clearTimeout(c)}}const g=(0,s.Z)((t=>d(t)),200)},6185:function(t,e,n){n.d(e,{M:function(){return s}});var r=n(9686);const o={},l=t=>"local"===t?localStorage:sessionStorage,s=(t,e,n)=>((t,e,n)=>{var s;const u=null!==(s=null==n?void 0:n.serializer)&&void 0!==s?s:JSON,i=(null==n?void 0:n.storage)||null,c="undefined"!=typeof window&&"undefined"!=typeof document,a=i&&c?l(i):null,d=(t,e)=>{a&&a.setItem(t,u.stringify(e))};if(!o[t]){const n=(0,r.fZ)(e,(e=>{if(!i)return;const n=c?l(i).getItem(t):null;if(n&&e(u.parse(n)),c){const n=n=>{n.key===t&&e(n.newValue?u.parse(n.newValue):null)};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}})),{subscribe:s,set:a}=n;o[t]={set(e){d(t,e),a(e)},update(e){const o=e((0,r.U2)(n));d(t,o),a(o)},subscribe:s}}return o[t]})(t,e,n)},8687:function(t,e,n){n.d(e,{x:function(){return r}});const r=(t,e)=>{const n=n=>{const r=n.target;t.contains(r)||(null==e?void 0:e.controller)===r||(e.stopPropigation&&n.stopPropagation(),e.callback(n))};return document.addEventListener("click",n,!0),{destroy:()=>{document.removeEventListener("click",n,!0)}}}},226:function(t,e,n){n.d(e,{e:function(){return r}});const r=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=new URLSearchParams(window.location.search),r={...Object.fromEntries(n.entries()),...t};for(const t in r)r[t]?n.set(t,r[t]):n.delete(t);const o=`${window.location.pathname}?${n.toString()}`;e?window.history.replaceState(null,"",o):window.history.pushState(r,"",o)}},7378:function(t,e,n){n.r(e);var r=n(1044),o=n(7457),l=n(8687),s=n(226),u=n(282);function i(t,e,n){const r=t.slice();return r[14]=e[n].string,r[15]=e[n].url,r[16]=e[n].highlight,r}function c(t){let e,n,o,s,u=t[0]?.length&&a(t);return{c(){e=(0,r.bGB)("div"),u&&u.c(),(0,r.Ljt)(e,"class","query-suggestions container")},m(i,c){(0,r.$Tr)(i,e,c),u&&u.m(e,null),o||(s=[(0,r.TVh)(n=l.x.call(null,e,{controller:t[1]})),(0,r.oLt)(e,"outclick",t[5])],o=!0)},p(t,o){t[0]?.length?u?u.p(t,o):(u=a(t),u.c(),u.m(e,null)):u&&(u.d(1),u=null),n&&(0,r.sBU)(n.update)&&2&o&&n.update.call(null,{controller:t[1]})},d(t){t&&(0,r.ogt)(e),u&&u.d(),o=!1,(0,r.j7q)(s)}}}function a(t){let e,n,o=(0,r.NXn)(t[0]),l=[];for(let e=0;e<o.length;e+=1)l[e]=d(i(t,o,e));return{c(){e=(0,r.bGB)("div"),n=(0,r.bGB)("ul");for(let t=0;t<l.length;t+=1)l[t].c();(0,r.Ljt)(n,"class","query-suggestion-results"),(0,r.Ljt)(n,"id","autocomplete-item-list"),(0,r.Ljt)(n,"role","listbox"),(0,r.Ljt)(e,"class","suggestions-wrapper")},m(t,o){(0,r.$Tr)(t,e,o),(0,r.R3I)(e,n);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(n,null)},p(t,e){if(25&e){let s;for(o=(0,r.NXn)(t[0]),s=0;s<o.length;s+=1){const r=i(t,o,s);l[s]?l[s].p(r,e):(l[s]=d(r),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=o.length}},d(t){t&&(0,r.ogt)(e),(0,r.RMB)(l,t)}}}function d(t){let e,n,o,l,s,u,i,c=(t[16]?t[16]:t[14])+"";function a(...e){return t[11](t[14],...e)}return{c(){e=(0,r.bGB)("li"),n=(0,r.bGB)("a"),o=(0,r.bGB)("span"),s=(0,r.DhX)(),(0,r.Ljt)(n,"href",l=t[3](window.location.href,t[14]))},m(t,l){(0,r.$Tr)(t,e,l),(0,r.R3I)(e,n),(0,r.R3I)(n,o),o.innerHTML=c,(0,r.R3I)(e,s),u||(i=(0,r.oLt)(n,"click",a),u=!0)},p(e,s){t=e,1&s&&c!==(c=(t[16]?t[16]:t[14])+"")&&(o.innerHTML=c),1&s&&l!==(l=t[3](window.location.href,t[14]))&&(0,r.Ljt)(n,"href",l)},d(t){t&&(0,r.ogt)(e),u=!1,i()}}}function g(t){let e,n=t[2]&&c(t);return{c(){n&&n.c(),e=(0,r.cSb)()},m(t,o){n&&n.m(t,o),(0,r.$Tr)(t,e,o)},p(t,[r]){t[2]?n?n.p(t,r):(n=c(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:r.ZTd,o:r.ZTd,d(t){t&&(0,r.ogt)(e),n&&n.d(t)}}}function f(t,e,n){let l,i;(0,r.FIv)(t,o.H1,(t=>n(10,i=t)));let c,a,d=null,{core:g}=e,{handleQuerySuggestionSelect:f}=e;const h=document.body.classList.contains("searchpage"),p=g.env.wcmModeDisabled||!1;function y(t=null){return n(9,d=""!==t?t:null),t&&t.length>=2?((0,o.eE)(t),d):null}function m(t,e){if(h){t.preventDefault();const n=t.target;if(n){const t=n.href;y(null),(0,s.e)({q:e,currentTab:"products"}),(0,o.xD)(t),"function"==typeof f&&f(e)}}}(0,u.H3)((()=>{const t=document.body.getElementsByClassName("search-input");t.length&&n(1,a=Array.from(t)[0])}));return t.$$set=t=>{"core"in t&&n(6,g=t.core),"handleQuerySuggestionSelect"in t&&n(7,f=t.handleQuerySuggestionSelect)},t.$$.update=()=>{if(1024&t.$$.dirty&&i?.currentKey&&i?.results){const t=i.currentKey,e=i?.results,r=e?.[t];r&&n(0,c=r.querySuggestions)}513&t.$$.dirty&&n(2,l=c?.length&&d&&c[0].string!==d)},[c,a,l,function(t,e){const n=`${window.location.origin}${g.storeManager.commerceData.pageUrlSuffix}/search.html`,r=new URL(n);return r.searchParams.set("q",e),p&&r.searchParams.set("wcmmode","disabled"),r.toString()},m,function(){n(9,d=null)},g,f,y,d,i,(t,e)=>m(e,t)]}class h extends r.f_C{constructor(t){super(),(0,r.S1n)(this,t,f,g,r.N8,{core:6,handleQuerySuggestionSelect:7,updateQueryTerm:8})}get updateQueryTerm(){return this.$$.ctx[8]}}e.default=h}}]);