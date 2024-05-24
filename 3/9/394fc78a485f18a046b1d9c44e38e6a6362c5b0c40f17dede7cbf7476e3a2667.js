import{s as x,a as $,c as ee,i as E,d as R,f as O,h as U,j as v,k as I,D as Z,L as P,C as ae,m as ye,b as H,o as Te,e as ne,l as Re,M as Ce,F as Le}from"./scheduler.6hyDou9G.js";import{S as ie,i as se,c as F,a as M,m as q,t as T,b as C,e as G,g as oe,d as re}from"./index.hQc_5nPF.js";import{s as We}from"./slug.aA6mVju7.js";import{C as Be,R as Ee}from"./restricted-plus-content.xDAfdFXD.js";import{R as Ae}from"./RemocoResponsiveImage.Sf1mnmbI.js";import{R as Fe}from"./ResponsivePicture.e5b6Wv1I.js";import{w as Me}from"./entry.Cu783cqS.js";import{f as ge}from"./notificationStore.Dik4qyms.js";import{T as qe,g as fe}from"./TouchSlider.wuMXQdls.js";import{c as Ge}from"./currentPage.store.JSQX7DqS.js";import{s as ue}from"./sourceOfPlaybackStore.zl-3pXWw.js";import{v as ze}from"./videoEventStore.RLP5upR3.js";unction Ne(s){let i,e,a,t=ce();return e=new Ae({props:{src:s[0],alt:s[1],fetchpriority:s[2],mobileWidth:s[5]*.6,tabletWidth:s[5]*.75,desktopWidth:s[5],desktop1440pWidth:s[5]*1.25,desktop4kWidth:s[5]*1.5,loading:s[4],aspectRatio:s[6],className:`${s[3]}`}}),e.$on("imageLoaded",s[8]),{clmp(l,[n]){t||(t=ce(),t.c(),t.m(i.parentNode,i));const c={};n&1&&(c.src=l[0]),n&2&&(c.alt=l[1]),n&4&&(c.fetchpriority=l[2]),n&32&&(c.mobileWidth=l[5]*.6),n&32&&(c.tabletWidth=l[5]*.75),n&32&&(c.desktopWidth=l[5]),n&32&&(c.desktop1440pWidth=l[5]*1.25),n&32&&(c.desktop4kWidth=l[5]*1.5),n&16&&(c.loading=l[4]),n&64&&(c.aspectRatio=l[6]),n&8&&(c.className=`${l[3]}`),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){C(e.$$.fragment,l),a=!1},d(l){l&&R(i),t&&t.d(l),G(e,l)}}}function De(s,i,e){let{src:a}=i,{alt:t}=i,{fetchPriority:l="auto"}=i,{className:n}=i,{loading:c}=i,{width:f}=i,{aspectRatio:h}=i,b=!1;const d=return s.$$set=[a,t,l,n,c,f,h,b,d]}onst He=Me("");function Oe(s){var n,c;let i,e,a,t;i=new Ve({props:{src:(n=s[25])==null?void 0:n.uri,alt:s[23],fetchPriority:"low",loading:s[5]>5||s[2]>3?"lazy":"eager",width:s[18],aspectRatio:s[19],className:"absolute h-full w-full"}});let l=!s[13]&&((c=s[0])==null?void 0:c.isRestrictedWithoutProfileEmail)&&s[3]&&me();return{clmp(f,h){var d,g;const b={};h[0]&33554432&&(b.src=(d=f[25])==null?void 0:d.uri),h[0]&8388608&&(b.alt=f[23]),h[0]&36&&(b.loading=f[5]>5||f[2]>3?"lazy":"eager"),h[0]&262144&&(b.width=f[18]),h[0]&524288&&(b.aspectRatio=f[19]),i.$set(b),!f[13]&&((g=f[0])!=null&&g.isRestrictedWithoutProfileEmail)&&f[3]?l||(l=me(),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},i(f){t||(T(i.$$.fragment,f),t=!0)},o(f){C(i.$$.fragment,f),t=!1},d}function Ue(s){let i,e;return i=new Fe({props:{alt:s[23],data:s[14],isLazy:s[5]>5||s[2]>3,sizes:"(min-width: 1536px) 17vw, (min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 44vw"}}),{c(){F(i.$$.fragment)},l(a){M(i.$$.fragment,a)},m(a,t){q(i,a,t),e=!0},p(a,t){const l={};t[0]&8388608&&(l.alt=a[23]),t[0]&16384&&(l.data=a[14]),t[0]&36&&(l.isLazy=a[5]>5||a[2]>3),i.$set(l)},i(a){e||(T(i.$$.fragment,a),e=!0)},o(a){C(i.$$.fragment,a),e=!1},d(a){G(i,a)}}}function me(s){let i,e;return{clh(){I(i,"alt",""),I(i,"class","absolute -right-0 top-0 z-10 h-[32px] w-[32px]"),I(i,"height",32),Re(i.src,e=Ee)||I(i,"src",e),I(i,"width",32)},md}function de(s){let i,e,a;return e=new Be({props:{text:s[15]}}),{clhmp(t,l){const n={};l[0]&32768&&(n.text=t[15]),e.$set(n)},i(t){a||(T(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d}function Qe(s){let i,e,a,t,l,n,c,f,h,b,d,g,L;const y=[Ue,Oe],w=[];=W(s),t=w[a]=y[a](s);let _=s[20]&&!s[8]&&de(s);return{cl(o){i=U(o,"A",{tabindex:!0,"aria-label":!0,"data-cs-override-id":!0,class:!0,href:!0});var u=v(i);e=U(u,"DIV",{class:!0});var k=v(e);t.l(k),k.forEach(R),n=ee(u),_&&_.l(u),u.forEach(R),this.h()},h(){I(e,"class",l=Z(`${s[7]?"assetContainerGatingPage":"assetContainer"} ${s[21]?"":s[17]} ${s[8]?"rounded-xl border-4":"rounded-md border-2"}`)+" svelte-186n32q"),P(e,"aspect-w-16",s[21]&&s[12]),P(e,"aspect-h-9",s[21]&&s[12]),P(e,"aspect-w-2",s[21]&&s[11]),P(e,"aspect-h-3",s[21]&&s[11]),P(e,"aspect-w-1",s[21]&&s[10]),P(e,"aspect-h-1",s[21]&&s[10]),P(e,"border-slate-50",s[22]),I(i,"tabindex",c=s[6]?0:-1),I(i,"aria-label",f=`${s[2]===0?`${s[1]} row .`:""} ${s[15]}`),I(i,"data-cs-override-id",h=`video_asset_swimlane_asset_${s[9].replace("=","_")}`),I(i,"class",b=Z(`${s[7]?"pointer-events-none":""} assetLink group `)+" svelte-186n32q"),I(i,"href",s[16])},m(o,u){E(o,i,u),ae(i,e),w[a].m(e,null),ae(i,n),_&&_.m(i,null),d=!0,g||(L=ye(i,"click",s[33]),g=!0)},p(o,u){let k=a;a=W(o),a===k?w[a].p(o,u):(oe(),C(w[k],1,1,,re(),t=w[a],t?t.p(o,u):(t=w[a]=y[a](o),t.c()),T(t,1),t.m(e,null)),(!d||u[0]&2228608&&l!==(l=Z(`${o[7]?"assetContainerGatingPage":"assetContainer"} ${o[21]?"":o[17]} ${o[8]?"rounded-xl border-4":"rounded-md border-2"}`)+" svelte-186n32q"))&&I(e,"class",l),(!d||u[0]&2232704)&&P(e,"aspect-w-16",o[21]&&o[12]),(!d||u[0]&2232704)&&P(e,"aspect-h-9",o[21]&&o[12]),(!d||u[0]&2230656)&&P(e,"aspect-w-2",o[21]&&o[11]),(!d||u[0]&2230656)&&P(e,"aspect-h-3",o[21]&&o[11]),(!d||u[0]&2229632)&&P(e,"aspect-w-1",o[21]&&o[10]),(!d||u[0]&2229632)&&P(e,"aspect-h-1",o[21]&&o[10]),(!d||u[0]&6422912)&&P(e,"border-slate-50",o[22]),o[20]&&!o[8]?_?(_.p(o,u),u[0]&1048832&&T(_,1)):(_=de(o),_.c(),T(_,1),_.m(i,null)):_&&(oe(),C(_,1,1,,re()),(!d||u[0]&64&&c!==(c=o[6]?0:-1))&&I(i,"tabindex",c),(!d||u[0]&32774&&f!==(f=`${o[2]===0?`${o[1]} row .`:""} ${o[15]}`))&&I(i,"aria-label",f),(!d||u[0]&512&&h!==(h=`video_asset_swimlane_asset_${o[9].replace("=","_")}`))&&I(i,"data-cs-override-id",h),(!d||u[0]&128&&b!==(b=Z(`${o[7]?"pointer-events-none":""} assetLink group `)+" svelte-186n32q"))&&I(i,"class",b),(!d||u[0]&65536)&&I(i,"href",o[16])},iod}function je(s,i,e){let a,t,l,n,c,f,h,b,d,g,L,y,w,W,_,o;H(s,He,m=>e(32,_=m)),H(s,ge,m=>e(35,o=m));let{asset:u}=i,{collectionId:k}=i,{collectionTitle:Q}=i,{index:z=0}=i,{seriesId:S}=i,{useEmailProfileRestriction:j}=i,{useFancyImages:N}=i,{widgetIndex:r}=i,{isIntersecting:J=!1}=i,{assetType:B="landscapeSmall"}=i,{displayTitles:A=!0}=i,{isGatingPage:D=!1}=i,{isWideBanner:V=!1}=i;const te=Te(),{modularLayoutId:_e}=o,he=_e==="Marketplace-HomeScreen";let le="",K="pb-[55%]",X=530,Y="16:9";const be=()=>{te("assetClick",{isSeries:d,index:z,title:n,companyCodes:c})};return s.$$set=s.$$.update=()=>{if(s.$$.dirty[0]&1&&e(9,{id:a,image:t,responsiveImage:l,title:n,companyCodes:c}=u,a,(e(25,t),e(0,u)),(e(14,l),e(0,u)),(e(15,n),e(0,u)),(e(24,c),e(0,u))),s.$$.dirty[0]&32768&&e(23,f=n),s.$$.dirty[0]&512|s.$$.dirty[1]&2&&e(22,h=a===_),s.$$.dirty[0]&16400&&e(21,b=l&&N),s.$$.dirty[0]&1&&e(13,d=u.__typename==="Video_VideoSeries"),s.$$.dirty[0]&402653184&&e(31,g=k||S),s.$$.dirty[0]&536870912&&e(12,L=["landscapeMedium","landscapeSmall"].includes(B)),s.$$.dirty[0]&536870912&&e(11,y=["portraitSmall","portraitMedium","portraitLarge"].includes(B)),s.$$.dirty[0]&536870912&&e(10,w=["squareSmall","squareMedium"].includes(B)),s.$$.dirty[0]&1073741824&&e(20,W=he?!0:A),s.$$.dirty[0]&7168&&(L?(e(17,K="pb-[55%]"),e(18,X=530),e(19,Y="16:9")):y?(e(17,K="pb-[147%]"),e(18,X=353),e(19,Y="2:3")):w&&(e(17,K="pb-[100%]"),e(18,X=330),e(19,Y="1:1"))),s.$$.dirty[0]&402653697|s.$$.dirty[1]&1){const m=u.__typename==="Video_CategoryAsset",we=u.__typename==="Video_VideoSeries",p={series:"series",streams:"streams",categories:"categories"},Ie=m?p.categories:we?p.series:p.streams,ke=g&&(k||S)?"?":"",Se=k&&!m?`c=${k.replace("/collections/","")}`:"",Pe=S?k?`&s=${S}`:`s=${S}`:"";e(16,le=`/${Ie}/${We(u.title)}/${a}${ke}${Se}${Pe}`)}},[u,Q,z,j,N,r,J,D,V,a,w,y,L,d,l,n,le,K,X,Y,W,b,h,f,c,t,te,k,S,B,A,g,_,be]}class Je extends ie{constructor(i){super(),se(this,i,je,Qe,x,{asset:0,collectionId:27,collectionTitle:1,index:2,seriesId:28,useEmailProfileRestriction:3,useFancyImages:4,widgetIndex:5,isIntersecting:6,assetType:29,displayTitles:30,isGatingPage:7,isWideBanner:8},null,[-1,-1])}}function Ke(s){var a;let i,e;return i=new Je({props:{collectionTitle:s[3],asset:fe(s[24],(a=s[1])==null?void 0:a[0]),collectionId:s[2],index:s[25],seriesId:s[5],widgetIndex:s[8],useEmailProfileRestriction:s[6],useFancyImages:s[7],isIntersecting:s[23],assetType:s[11],displayTitles:s[0],isGatingPage:s[4],isWideBanner:s[10]}}),i.$on("assetClick",s[13]),{c(){F(i.$$.fragment)},l(t){M(i.$$.fragment,t)},m(t,l){q(i,t,l),e=!0},p(t,l){var c;const n={};l&8&&(n.collectionTitle=t[3]),l&16777218&&(n.asset=fe(t[24],(c=t[1])==null?void 0:c[0])),l&4&&(n.collectionId=t[2]),l&33554432&&(n.index=t[25]),l&32&&(n.seriesId=t[5]),l&256&&(n.widgetIndex=t[8]),l&64&&(n.useEmailProfileRestriction=t[6]),l&128&&(n.useFancyImages=t[7]),l&8388608&&(n.isIntersecting=t[23]),l&2048&&(n.assetType=t[11]),l&1&&(n.displayTitles=t[0]),l&16&&(n.isGatingPage=t[4]),l&1024&&(n.isWideBanner=t[10]),i.$set(n)},i(t){e||(T(i.$$.fragment,t),e=!0)},o(t){C(i.$$.fragment,t),e=!1},d(t){G(i,t)}}}function Xe(s){let i,e;return i=new qe({props:{type:s[11],isWideBanner:s[10],sliderButtonBgColor:s[10]?"gray":"slate900",index:s[8],items:s[1],showControls:s[9],isShelve:!(!s[12]&&!s[0]),scrollInfinitely:!0,$$slots:{default:[Ke,({isIntersecting:a,item:t,index:l})=>({23:a,24:t,25:l}),({isIntersecting:a,item:t,index:l})=>(a?8388608:0)|(t?16777216:0)|(l?33554432:0)]},$$scope:{ctx:s}}}),i.$on("wideBannerLeftArrowClick",s[18]),{clmp(a,[t]){const l={};t&2048&&(l.type=a[11]),t&1024&&(l.isWideBanner=a[10]),t&1024&&(l.sliderButtonBgColor=a[10]?"gray":"slate900"),t&256&&(l.index=a[8]),t&2&&(l.items=a[1]),t&512&&(l.showControls=a[9]),t&1&&(l.isShelve=!(!a[12]&&!a[0])),t&125832703&&(l.$$scope={dirty:t,ctx:a}),i.$set(l)},iod}function Ye(s,i,e){let a,t,l;H(s,Ge,r=>e(19,a=r)),H(s,ue,r=>e(20,t=r)),H(s,ge,;let{assets:n=[]}=i,{collectionId:c}=i,{collectionTitle:f}=i,{displayTitles:h=!0}=i,{isGatingPage:b=!1}=i,{isHomepage:d=!1}=i,{orientation:g=void 0}=i,{seriesId:L=void 0}=i,{shelfStyle:y=void 0}=i,{tileSize:w=void 0}=i,{useEmailProfileRestriction:W}=i,{useFancyImages:_}=i,{widgetIndex:o}=i,{showShelfButtons:u=!0}=i,{isWideBanner:k=!1}=i;const{modularLayoutId:Q}=l,z=Q==="Marketplace-HomeScreen";let S="landscapeSmall";const j=r=>{const{isSeries:J,title:B,index:A,companyCodes:D}=r.detail;if(J)return;const V={event:"video_event",source_playback:a.source_playback,source_playback_detail:`${a.source_playback_details}${f}`||"",collection_position:o+1,swimlane_position:A+1,video_name:B,video_format:"VOD",brand:D.length===0?"QVC":D[0],shelf_style:y};d||delete V.collection_position,ze.set(V),Ce(ue,t={sourceOfPlayback:a.sourceOfPlayback,sourceOfPlaybackDetails:`${a.source_playback_details}${f}`||"",sourceOfPlaybackPosition:`Collection: ${A+1} | Swimlane: ${d?o-1:"1"}`},t)};eturn s.$$set=s.$$.update=()=>{if(s.$$.dirty&163840&&g&&w)switch(g){case"PORTRAIT":w==="SMALL"?e(11,S="portraitSmall"):w==="MEDIUM"?e(11,S="portraitMedium"):e(11,S="portraitLarge");break;case"LANDSCAPE":w==="SMALL"?e(11,S="landscapeSmall"):e(11,S="landscapeMedium");break;case"SQUARE":w==="SMALL"?e(11,S="squareSmall"):e(11,S="squareMedium");break;default:e(11,S="landscapeSmall")}s.$$.dirty&65552&&!y&&!b&&e(0,h=!0)},[h,n,c,f,b,L,W,_,o,u,k,S,z,j,d,g,y,w,N]}class oi extends ie{constructor(i){super(),se(this,i,Ye,Xe,x,{assets:1,collectionId:2,collectionTitle:3,displayTitles:0,isGatingPage:4,isHomepage:14,orientation:15,seriesId:5,shelfStyle:16,tileSize:17,useEmailProfileRestriction:6,useFancyImages:7,widgetIndex:8,showShelfButtons:9,isWideBanner:10})}}export{oi as A,He as a};