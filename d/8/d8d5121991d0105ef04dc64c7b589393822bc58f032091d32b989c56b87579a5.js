(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{9942:8460:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return pe},default:);var n=r(93313),c=r(13048),o=r(65639),l=r.n(o),i=r(91751),a=r(44047);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){return(0,a.tZ)("svg",u(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},e),{},{children:(0,a.tZ)("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1Zm1 4h-2v-2h2v2Z"})}))},f=r(21477),h=r(95507),m=r(13952),p=r(62873),b=r(41176),v=r(12891),g=r(4973),y=r(10494),O=r(9942),w=r.n(O),j=r(9860),Z=r(52983),x=r(97973),P=r(72193),k=r(71592),N=r(68817),C=r(99798),S=r(42584),E=r.n(S),B=r(27091),M=r(13661),X=r(42921);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(){return(R=(0,C.Z)(E().mark((function e(t,r,c){var o;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"&").concat((0,M.getQueryParamsString)(r)),{headers:(0,n.Z)({},P.jJ.locale,c)});case 2:return o=e.sent,e.next=5,o.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,r){var c=(0,X.b)(),o="/api/search?".concat((0,M.getQueryParamsString)(e));return(0,B.useInfiniteQuery)([o,c],(function(e){var t=e.pageParam;return o,void 0===t?r:t,c)}),{staleTime:1/0,keepPreviousData:!0},t))}var L=r(59395),_=r(32917),A=r(15289),G=r(76408),F=r(8896),I=r(52274),q=r(98330),H=r(15001),z=r(82743),Y=r(34528),$=r(71111),J=r(28150);function Q(e){var t,r=e.term,n=e.value,c=e.label,o=(0,j.useRouter)(),l=o.query,i=!!l[r],s=(null!==(t=null===l||void 0===l?void 0:l[r])&&void 0!==t?t:"").split(",");return(0,a.tZ)(J.J,{id:n,label:c,onClick:function(){i?(s.includes(n)?s=s.filter(():s.push(n),s.length?l[r]=s.join(","):delete l[r]):l[r]=n,o.push({pathname:"/search",query:l},void 0,{shallow:!0})},side:"right",checked:s.includes(n)})}function V(e){var t=e.term,r=e.filters,n=(0,c.$G)().t,o=(0,Z.useState)(!1),l=o[0],i=o[1],s=(0,$.d)("".concat(h.Fg,"px")),u=r.length>4,d=u?3:4;return(0,a.BX)("div",{className:"mb-2 lg:mb-0 last:mr-0 last:mb-0 lg:w-60 type-body-s",children:[(0,a.tZ)("div",{className:"uppercase text-text-primary-60",children:n(t)}),s?(0,a.tZ)("div",{role:"group","aria-labelledby":"search-filter-group-".concat(t),className:"block lg:hidden",children:r.map((function(e){var r=e.value,n=e.label;return(0,a.tZ)(Q,{term:"".concat(t,"[all]"),value:r,label:n},r)}))}):(0,a.BX)("div",{role:"group","aria-labelledby":"search-filter-group-".concat(t),className:"hidden lg:block",children:[r.slice(0,l?r.length:d).map((function(e){var r=e.value,n=e.label;return(0,a.tZ)(Q,{term:"".concat(t,"[all]"),value:r,label:n},r)})),!l&&u&&(0,a.tZ)("button",{className:"capitalize text-text-primary",type:"button",onClick:function(){return i(!0)},children:n("more")})]})]})}var W=function(e){return(0,Y.E)(Object.values(P.Yw).map((function(t){var r=e[t]||[];return r.length?(0,a.tZ)(V,{term:t,filters:r},t):null})))};function U(e){var t=e.searchTerms;return(0,a.tZ)("div",{role:"group","aria-labelledby":"search-filters-container",className:"flex flex-col lg:flex-row","data-testid":f.y0,children:W(t)})}var K=r(80112),ee=r(81473),te=r(91785),re=r(4298),ne=r(56636),ce=(0,ee.css)("width:100%; &>div>div>section{text-align:center; &>section:last-of-type{justify-content:center; text-align:initial;@media (min-width: ",h.H6,"px){grid-template-columns:repeat(auto-fit, minmax(8rem, 14rem));}}header{justify-content:center;;}}");function oe(e){var t=e.errorPage,r=(0,c.$G)().t,n=(0,j.useRouter)(),o=(0,re.H)().storeRoot,l=(0,Z.useMemo)((function(){var e;return(0,Y.E)(null===t||void 0===t||null===(e=t.latestGamesCollection)||void 0===e?void 0:e.items)}),[t]);return(0,a.BX)("div",{className:"flex flex-col items-center w-full mx-auto",children:[(null===t||void 0===t?void 0:t.hero)&&(0,a.tZ)("section",{className:"flex mt-24 w-full max-w-[7.5rem]",children:(0,a.tZ)(te.E,{sizes:"50vw",className:"w-full object-contain object-center",src:(0,A.Jn)(null===t||void 0===t?void 0:t.hero),alt:(0,A.EQ)(null===t||void 0===t?void 0:t.hero)})}),(0,a.BX)("section",{className:"text-center mb-12 px-4","data-testid":f.bx,children:[(0,a.tZ)("p",{className:"my-4 text-2xl text-text-primary",children:r("no-search-result")}),(0,a.tZ)("button",{type:"button",className:"btn text-button-m bg-primary text-button-text",onClick:function(){return n.push({pathname:o||"/"})},"data-testid":f.Jy,children:r("back-to-store")})]}),l.length>0&&(0,a.tZ)(ne.O,{css:ce,layout:l})]})}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae={height:"100%"};function se(e){var t=e.item,r=e.slug;if(!t)throw new Error("no item!");var n=t.contentType&&t.contentType.includes("Merch"),c=n?F.O:I.J,o=n?H.O:z.o;return(0,a.tZ)(c,{slug:r,children:(0,a.tZ)(k.n,{value:t,children:(0,a.tZ)(o,{css:ae,width:h.sl,maxImageWidth:400})})})}var ue={marginTop:"4rem",marginBottom:"4rem"},de={name:"fte77b",styles:"overflow:auto;padding-left:1rem;padding-right:1rem;padding-top:2.75rem; h1{margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;font-weight:700; color:rgba(var(--text-color-primary-rgb), 1);}"};function fe(e){var t,r,o,l,s,u,h,O,k,C,S,E,B,X,D,R=e.model,F=(0,Z.useState)(!1),I=F[0],H=F[1],z=(0,x.YD)({fallbackInView:!0,threshold:.8}),Y=z.ref,$=z.inView,J=(0,c.$G)().t,Q=(0,j.useRouter)(),V=Q.query,W=V[P.bc.categoriesALL],ee=V.title;ee="string"===typeof ee?ee:"";var te=[{label:J("search-sort-relevance"),value:"score.desc",key:"score"},{label:J("search-sort-date-desc"),value:"date.desc",key:"date.desc"},{label:J("search-sort-name-asc"),value:"name.asc",key:"name.asc"},{label:J("search-sort-name-desc"),value:"name.desc",key:"name.desc"}],re=te.find(()||te[0],ne=(0,Z.useCallback)((function(e){var t=ie(ie({},V),{},(0,n.Z)({},P.bc.sort,e.value));Q.replace({pathname:"/search",query:t},void 0,{shallow:!0})}),[V]),ce=(0,y.s)(V.query),le=ie({},V);W?W.toString().toLowerCase().includes(P.hR.Merch.toLowerCase())&&(le[P.bc.categoriesALL]=W.split(",").filter(().join(",")):(le[P.bc.categoriesANY]=[P.hR.FullDigitalGame,P.hR.ExpansionPack,P.hR.ConsoleGame,P.hR.Bundle,P.hR.VirtualCurrency].join(","),le[P.bc.size]="100");var ae=!W||W.toString().toLowerCase()!==P.hR.Merch.toLowerCase(),fe=(0,L.R)(le,{enabled:ae}),he=fe.data,me=fe.isFetching,pe=ie(ie({},V),{},(t={},(0,n.Z)(t,P.bc.categoriesALL,P.hR.Merch.toLowerCase()),(0,n.Z)(t,P.bc.showOOS,"false"),t)),be=!W||W.toString().toLowerCase().includes(P.hR.Merch.toLowerCase()),ve=T(pe,{enabled:be},{from:0,size:21}),ge=ve.data,ye=ve.error,Oe=ve.fetchNextPage,we=ve.isFetching,je=ve.isFetchingNextPage,Ze=ae&&(null===he||void 0===he?void 0:he.results)||[],xe=(0,Z.useMemo)((function(){var e;return be&&(null===ge||void 0===ge||null===(e=ge.pages)||void 0===e?void 0:e.reduce((function(e,t){return{count:e.count+t.count,from:t.from,merch:[].concat((0,i.Z)(e.merch),(0,i.Z)(t.results)),skus:ie(ie({},e.skus),t.skus)}}),{count:0,from:0,merch:[],skus:{}}))||{count:0,from:0,merch:[],skus:{}}}),[null===ge||void 0===ge?void 0:ge.pages,be]),Pe=xe.count,ke=xe.from,Ne=xe.merch,Ce=xe.skus,Se=null!==(r=null===ge||void 0===ge||null===(o=ge.pages)||void 0===o||null===(l=o[0])||void 0===l||null===(s=l.total)||void 0===s?void 0:s.value)&&void 0!==r?r:0,Ee=null!==(u=null===ge||void 0===ge||null===(h=ge.pages)||void 0===h?void 0:h.length)&&void 0!==u?u:0;Ee=0===Ee?0:Ee-1;var Be=Se>Pe&&(null!==(O=null===ge||void 0===ge||null===(k=ge.pages)||void 0===k?void 0:k[Ee].count)&&void 0!==O?O:0)>0,Me=w()(be&&(null===ge||void 0===ge||null===(C=ge.pages)||void 0===C||null===(S=C[0])||void 0===S?void 0:S.searchTerms)||{},ae&&(null===he||void 0===he?void 0:he.searchTerms)||{},{arrayMerge:function(e,t){var r=new Set(t.map(());return[].concat((0,i.Z)(t),(0,i.Z)(e.filter(()))}}),Xe=!(!Ze.length&&!Ne.length),De=null!==(E=null===he||void 0===he?void 0:he.total.value)&&void 0!==E?E:0,Re=be&&ae?De+Se:ae?De:Se;(0,Z.useEffect)((function(){$&&Be&&!we&&Oe({pageParam:{from:ke,size:21}})}),[$]);var Te=!je&&we,Le=me||Te,_e="";try{_e=ce?decodeURIComponent(ce.replace(/<|>/g,"")):""}catch(Ie){(0,G.O)(Ie)}(0,Z.useEffect)((function(){return Q.events.on("routeChangeComplete",M.scrollToTop),),[]),(0,Z.useEffect)((function(){if("true"===V[P.bc.random]){var e=ie(ie({},V),{},(0,n.Z)({},P.bc.random,(0,M.getMSecondsSinceEpoch)()));Q.replace({pathname:"/search",query:e},void 0,{shallow:!0})}}),[]);var Ae=Object.keys(Me).some((),Ge=(0,a.tZ)(m.L,{title:"".concat(J("search-sort-by"),"..."),onItemSelected:ne,selectedItem:re,items:te,"data-testid":f.FX}),Fe=null===R||void 0===R||null===(B=R.page)||void 0===B||null===(X=B.pageInfo)||void 0===X||null===(D=X.blurredBackground)||void 0===D?void 0:D.url;return(0,a.BX)("main",{children:[Fe&&(0,a.tZ)(K.A,{pageBackground:!0,src:Fe,blur:!0}),!ee&&(0,a.tZ)("div",{className:"flex items-center w-full py-9 bg-neutral-100-70",children:(0,a.BX)("div",{css:_.FG,children:[(0,a.BX)("div",{className:"flex items-center justify-between py-2 lg:border-b lg:border-solid lg:mb-4  border-neutral-999-20",children:[(0,a.tZ)("span",{className:"lg:flex lg:items-end","data-testid":f.MO,children:(0,a.BX)(c.cC,{i18nKey:"search-results",values:{count:Re,query:_e},children:[(0,a.tZ)("h1",{className:"text-headline-l me-2",children:"search strings"}),(0,a.tZ)(p.H,{className:"opacity-80 whitespace-nowrap",children:"results"})]})}),Ge]}),Ae&&(0,a.BX)(a.HY,{children:[(0,a.tZ)("div",{className:"lg:hidden [&>button>div]:text-base",children:(0,a.tZ)("button",{type:"button",className:"btn text-button-m bg-primary text-button-text",onClick:function(){return H(!0)},"data-testid":f.CX,children:J("filters")})}),(0,a.tZ)("div",{className:"hidden lg:flex lg:justify-between",children:(0,a.tZ)(U,{searchTerms:Me})}),(0,a.BX)(b.e,{isOpen:I,requestClose:labelClose:J("Close"),css:de,children:[(0,a.tZ)("h1",{children:J("filters")}),(0,a.tZ)(U,{searchTerms:Me})]})]})]})}),Le&&(0,a.tZ)("div",{className:"h-72 w-full flex items-center justify-center",children:(0,a.tZ)(v.T,{})}),!Le&&!Xe&&(0,a.tZ)(oe,{errorPage:R.errorPage}),!me&&Xe&&(0,a.tZ)(N.jW,{value:null===he||void 0===he?void 0:he.skus,children:Ze.length>0&&(0,a.tZ)(q.P,{css:ue,title:ee?(0,a.BX)("div",{className:"flex justify-between",children:[(0,a.BX)(p.H,{children:[ee," "]}),Ge]}):J("Games"),children:(0,a.tZ)(g.r,{screenFilling:!0,minCol:2,children:Ze.map((function(e){return(0,a.tZ)(se,{slug:e.slug,item:e},(0,A.km)(e))}))})})}),!Te&&!me&&Xe&&(0,a.tZ)(N.jW,{value:Ce,children:Ne&&Ne.length>0&&(0,a.BX)(a.HY,{children:[(0,a.tZ)(q.P,{css:ue,title:ee?(0,a.BX)("div",{className:"flex justify-between",children:[(0,a.BX)(p.H,{children:[ee," "]}),Ge]}):J("Gear"),children:(0,a.tZ)(g.r,{screenFilling:!0,minCol:2,children:Ne.map((function(e){return(0,a.tZ)(se,{slug:e.slug,item:e},(0,A.km)(e))}))})}),je&&(0,a.tZ)("div",{className:"h-72 w-full flex items-center justify-center",children:(0,a.tZ)(v.T,{})}),!je&&ye&&(0,a.BX)("div",{className:"type-body-s text-text-primary flex flex-col items-center pt-12 pb-28",children:[(0,a.tZ)(d,{className:"text-5xl mb-4"}),J("error-fetch-more-content")]}),(0,a.tZ)("div",{ref:Y})]})})]})}r pe=!0;function be(e){var t=(0,c.$G)().t;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(l(),{children:(0,a.tZ)("title",{children:t("search-page-title")})}),(0,a.tZ)(fe,me({},e))]})}},13065:,);