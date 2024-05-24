"use strict";(globalThis.webpackChunkweb=globalThis.webpackChunkweb||[]).push([[4313],{9906:(e,t,i)=>{i.d(t,{Z:()=>E});var n=i(7294),a=i(2824),s=i(7004);const o="bdz4500";i(3585);var r=i(9506),l=i(4895),c=i(6356),u=i(8917),d=i(4020),f=i(7615),g=i(1082),h=i(2579),p=i(4398),m=i(5893);function T(e,t){const{appState:i,buildTeaserContextLink:s}=(0,d.wg)(),o=function(e){return(0,n.useMemo)((()=>{const t=e.type===a.Wp.POSTER?e.images?.aspect3x4:e.images?.aspect16x9;return{srcset:(0,l.n5)(t?.src,[[r.e.w272,320],[r.e.w480,480],[r.e.w320,768],[r.e.w448,960],[r.e.w384,1280],[r.e.w320,1440],[r.e.w320,1600],[r.e.w272,1920],[r.e.w384,2560]]),alt:t?.alt??"",title:(0,l.ZR)(t)}}),[e])}(e);return(0,n.useMemo)((()=>({...(0,f.A3)(e,i),index:e.index,isLoadingEagerly:!0,image:o,hasClickEffect:c.Z.animationEnabled,href:(0,u.wS)(e,s)})),[e,t])}const E=function({teaserData:e,pageType:t,onTeaserClick:i=(()=>{}),onTeaserVisible:n=(()=>{}),onWatchlistButtonClick:a=(()=>{})}){const r=T(e,t);return(0,m.jsx)(p.sg,{className:(0,g.cx)(h.b.base,o),all:12,xs:6,s:4,m:3,l:2,xl:2,p:2,children:(0,m.jsx)(s.Z,{...r,onClick:i,onVisible:n,onWatchlistButtonClick:a})})}},6007:(e,t,i)=>{i.d(t,{Z:()=>g});i(1703);var n=i(7294),a=i(4020),s=i(4398),o=i(5609),r=i(7387),l=i(7916),c=i(6872),u=i(9906),d=i(5893);var f=i(9463);const g=function({initialData:e,startingPageNumber:t=0,fetchUrl:i,onTeaserVisible:g=(()=>{}),onTeaserClick:h=(()=>{}),onWatchlistButtonClick:p=(()=>{}),pageSize:m,placeholder:T,index:E=0}){const{appState:b}=(0,a.wg)(),[k,x]=(0,l.n4)("InfiniteScrollingWidget",{index:0}),C=(0,n.useMemo)((()=>{const e=(0,l.N1)();return{index:k.index,scrollY:e.y}}),[]),S=(0,f.UT)(E,e?.id,h),v=(0,f.UT)(E,e?.id,p),W=(0,f.UT)(E,e?.id,g),[O,y]=(0,n.useState)(!0),Z=(0,n.useRef)(!0),A=(0,n.useRef)(i),w=(0,n.useCallback)((({index:e})=>{Z.current?Z.current=!1:x({index:e})}),[]),L=function(e,t,i,a,s){return(0,n.useMemo)((()=>e?.map(((e,n)=>(0,d.jsx)(u.Z,{teaserData:{...e,index:n},pageType:t,onTeaserClick:a,onTeaserVisible:s,onWatchlistButtonClick:i},e.id)))),[e])}(e?.teasers,b.navigation.currentRoute.pageType,v,S,W),I=!!L&&e?.pagination.totalElements>e?.pagination.pageSize;return(0,n.useEffect)((()=>{A.current!==i&&(A.current=i,y(!0))}),[i]),(0,d.jsxs)(n.Profiler,{id:"InfiniteScrollingWidget",onRender:c._,children:[!!L?.length&&(0,d.jsx)(s.X2,{"data-bb-id":e?.id,outerSpace:"none",children:L}),I&&(0,d.jsx)(o.Z,{loadMore:async function(e){return await async function(e,t,i,n,a,s,o,l,c){const f=e.replace("{pageNumber}",String(t+i)),g=await fetch(f,r.Od);if(!g.ok)throw Error(`Fetching more failed: ${g.statusText}`);const{pagination:h,teasers:p}=await g.json();return Math.ceil(h.totalElements/h.pageSize-1)===h.pageNumber&&n(!1),p.length?p.map(((e,n)=>{const r=n+(t+i)*s;return(0,d.jsx)(u.Z,{teaserData:{...e,index:r},pageType:a.navigation.currentRoute.pageType,onTeaserVisible:o,onTeaserClick:l,onWatchlistButtonClick:c},e.id)})):(n(!1),[])}(i,e,t,y,b,m,W,S,v)},hasNextPage:O,placeholder:T,onChange:w,initialRow:C},i)]})}},8917:(e,t,i)=>{i.d(t,{wS:()=>d,Oh:()=>f,r4:()=>u});var n=i(2824),a=i(2355),s=i(4020),o=i(7294),r=i(7615),l=i(4390),c=i(5893);const u=function({hasClickEffect:e=!1,swiperIsLoadingEagerly:t=!1,onTeaserVisible:i,onTeaserClick:a,onWatchlistButtonClick:u,onRemoveFromPlayHistory:f,teaserLinkAs:g},h){const{appState:p,buildTeaserContextLink:m}=(0,s.wg)();return(0,o.useMemo)((()=>{if(h?.length){const s=function(e){switch(e){case n.WO.PHONE:return 3;case n.WO.TABLET:return 6;default:return 9}}(p.config.deviceType);return h.map(((n,o)=>({...(0,r.A3)(n,p),isLoadingEagerly:t&&o<s,hasContextMenu:!!f,teaserButtons:f&&[{text:"Aus Weiterschauen entfernen",type:"text",iconLeft:(0,c.jsx)(l.Z,{}),onClick:()=>f(n)}],hasClickEffect:e,href:d(n,m),onWatchlistButtonClick:u,onVisible:i,onClick:a,index:o,as:g})))}}),[h])};function d(e,t){return e.isExpired?void 0:e.links?.target.type===n.EO.ARD_EXTERNAL?e.links?.target.href:t((0,a.Iu)(e))}function f(e){if(e[0]?.type===n.Wp.POSTER)return"3x4"}},7004:(e,t,i)=>{i.d(t,{Z:()=>Z});i(7658);var n=i(7294),a=i(4390),s=i(2359),o=i(2442),r=i(1962),l=i(3117),c=i(7216),u=i(1732),d=i(1924),f=i(161),g=i(7781),h=i(7454),p=i(827),m=i(5480),T=i(6356),E=i(2670),b=i(2824),k=i(9655),x=i(6386),C=i(7615),S=i(9463),v=i(4020),W=i(5680),O=i(3534),y=i(5893);const Z=function({teaserData:e,id:t,targetId:i,url:Z,duration:A,type:w,shortTitle:L,mediumTitle:I,longTitle:R,isExpired:D,isLoading:V,maturityRating:j,externalHref:P,availableTo:M,teaserButtons:N,hasClickEffect:B,ratio:_,href:Y,isStage:H,onClick:U,onVisible:G,onWatchlistButtonClick:X,as:z=k.rU,index:J=0,hasHiddenTitle:F,hasSubtitles:$,hasSignLanguage:q,hasAudioDescription:K,hasOriginalVersion:Q,programTime:ee,description:te,textPosition:ie,ctaLabel:ne,...ae}){const{appState:se,openPrompt:oe}=(0,v.wg)(),re=(0,m.BP)(),le=function(e){const t=(0,p.kX)(),[i,a]=(0,n.useState)(),s=t.playtime(e);return(0,n.useEffect)((()=>{e&&a(s)}),[s]),i}(i),ce=(0,E.Z)(w),ue=(0,S.Y)(J,Z,t,i,w,U),de=(0,S.Y)(J,Z,t,i,w,G),fe=function(e,t,i,o,r,l,c){return(0,n.useMemo)((()=>{let n=[];return t.hasItem(o)&&e.view.loggedInUserId?n.push({text:"Aus Merkliste entfernen",iconLeft:(0,y.jsx)(a.Z,{}),type:"text",onClick:()=>t.removeItem(o)}):n.push({text:"Merken",iconLeft:(0,y.jsx)(s.Z,{}),type:"text",onClick:n=>{e.view.loggedInUserId?(t.addItem(o,r),c&&c(n)):i(b.GV.WATCHLIST_PROMO)}}),l?.length?l.concat(n):n}),[o,t.hasItem(o),r,l,e.view.loggedInUserId,c])}(se,re,oe,i,e,N,(0,S.Y)(J,Z,t,i,w,X));if(H)return(0,y.jsx)(W.y,{...ae,id:t,duration:A,shortTitle:L,mediumTitle:I,longTitle:R,progress:(0,C.J5)(le,A),href:Y,teaserButtons:ce===b.Wp.MEDIA&&w!==b.Wp.EXTERNAL&&fe.length>0?fe:N,target:P?"_blank":void 0,hasClickEffect:B,clickEffectOffsetY:8,hasDisabledAnimations:!T.Z.animationEnabled,hasSubtitles:$,as:P||V?void 0:z,onClick:U&&ue,ratio:_,maturityRating:O.TO[j],availableTo:M,type:w===b.Wp.LIVE?"live":w===b.Wp.EVENT?"event":void 0,programTime:ee});if(!V){if(w===b.Wp.ONDEMAND)return(0,y.jsx)(o.Z,{...ae,id:t,duration:A,shortTitle:L,mediumTitle:I,longTitle:R,progress:(0,C.J5)(le,A),href:Y,teaserButtons:ce===b.Wp.MEDIA&&fe.length>0?fe:void 0,target:P?"_blank":void 0,hasClickEffect:B,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!T.Z.animationEnabled,hasSubtitles:$,hasSignLanguage:q,hasAudioDescription:K,hasOriginalVersion:Q,as:P?void 0:z,onClick:ue,onVisible:de,maturityRating:O.TO[j],availableTo:M,isExpired:D});if(w===b.Wp.LIVE)return(0,y.jsx)(r.Z,{...ae,id:t,shortTitle:L,mediumTitle:I,longTitle:R,progress:(0,C.J5)(le,A),href:Y,target:P?"_blank":void 0,hasClickEffect:B,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!T.Z.animationEnabled,hasSubtitles:$,hasHiddenTitle:F,as:P?void 0:z,onClick:ue,onVisible:de,maturityRating:O.TO[j]});if(w===b.Wp.EVENT)return(0,y.jsx)(l.Z,{...ae,id:t,shortTitle:L,mediumTitle:I,longTitle:R,href:Y,target:P?"_blank":void 0,hasClickEffect:B,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!T.Z.animationEnabled,hasSubtitles:$,as:P?void 0:z,onClick:ue,onVisible:de,programTime:ee,maturityRating:O.TO[j]});if(w===b.Wp.SHOW||w===b.Wp.SERIES||w===b.Wp.CLIP)return(0,y.jsx)(c.Z,{...ae,id:t,shortTitle:L,mediumTitle:I,longTitle:R,href:Y,target:P?"_blank":void 0,hasClickEffect:B,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!T.Z.animationEnabled,hasHiddenTitle:F,as:P?void 0:z,onClick:ue,onVisible:de});if(w===b.Wp.POSTER)return(0,y.jsx)(u.Z,{...ae,id:t,duration:A,shortTitle:L,mediumTitle:I,longTitle:R,progress:(0,C.J5)(le,A),href:Y,teaserButtons:ce===b.Wp.MEDIA&&fe.length>0?fe:void 0,target:P?"_blank":void 0,hasClickEffect:B,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!T.Z.animationEnabled,hasSubtitles:$,as:P?void 0:z,onClick:ue,onVisible:de,maturityRating:O.TO[j],availableTo:M});if(w===b.Wp.COLLECTION||w===b.Wp.COMPILATION||w===b.Wp.EDITORIAL_PAGE)return(0,y.jsx)(d.Z,{...ae,id:t,shortTitle:L,mediumTitle:I,longTitle:R,href:Y,target:P?"_blank":void 0,hasClickEffect:B,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!T.Z.animationEnabled,hasHiddenTitle:F,as:P?void 0:z,onClick:ue,onVisible:de});if(w===b.Wp.EPG||w===b.Wp.EPG_LARGE)return(0,n.createElement)(f.Z,{...ae,id:t,key:t,href:Y,hasClickEffect:B,clickEffectOffsetY:x.Sf,hasDisabledAnimations:!T.Z.animationEnabled,hasSubtitles:$,hasSignLanguage:q,hasAudioDescription:K,hasOriginalVersion:Q,maturityRating:O.TO[j],description:te,onClick:ue,onVisible:de,as:z,type:w===b.Wp.EPG_LARGE?"large":"default"});if(w===b.Wp.EXTERNAL)return(0,y.jsx)(g.Z,{...ae,id:t,shortTitle:L,title:L,description:te,ctaLabel:ne??Y,href:Y,hasDisabledAnimations:!T.Z.animationEnabled,onClick:ue,onVisible:de})}return V?(0,y.jsx)(h.Z,{textPosition:ie}):(console.error(`🚨 rendering unknown teaser="${w}" 🚨`),null)}},3272:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(6825),a=i(4466);const s=function(e){return a.Z.index||(e.from=e.to,e.immediate=!0),(0,n.useSpring)(e)}},3585:(e,t,i)=>{e.exports=i.p+"78492f0a1915464b90c8.css"}}]);