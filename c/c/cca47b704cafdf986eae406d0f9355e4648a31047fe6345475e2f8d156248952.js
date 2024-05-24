import{l as G,d as pe,C as _e}from"../chunks/logger.rxQQzaAn.js";import{g as ye,s as z,f as v,a as M,h as C,j as D,d as k,c as N,k as _,L as H,i as E,C as S,m as be,b as j,l as ke,M as me,B as Z,q as we,t as ve,H as de,e as x}from"../chunks/scheduler.6hyDou9G.js";import{f as ge,n as Ce,d as $,a as Pe}from"../chunks/notificationStore.Dik4qyms.js";import{b as Se}from"../chunks/entry.Cu783cqS.js";import{S as U,i as Q,c as R,a as I,m as q,t as p,g as O,b as y,d as B,e as L}from"../chunks/index.hQc_5nPF.js";import{s as W}from"../chunks/slug.aA6mVju7.js";import{c as Ee}from"../chunks/categoryName.store.CKfCeTA3.js";import{u as De}from"../chunks/updateQueryParams.OkfTKLrN.js";import{e as T}from"../chunks/each.JT9aIWxh.js";import{p as Re}from"../chunks/portalCollection.store.CIHWa64N.js";import{C as J,R as Ie}from"../chunks/restricted-plus-content.xDAfdFXD.js";import{R as qe}from"../chunks/RemocoResponsiveImage.Sf1mnmbI.js";import{c as Le}from"../chunks/currentPage.store.JSQX7DqS.js";import{s as ee}from"../chunks/sourceOfPlaybackStore.zl-3pXWw.js";import{a as Me}from"../chunks/addDynamicClass.JWta0H1e.js";import{G as Ne}from"../chunks/GoBackButton.GUqdlU5E.js";import{M as Ve}from"../chunks/MetaTags.rwrjvebb.js";const Oe=async i=>{var f,a,g;G.info("category loader start");const r=(await i.parent()).client,{useFancyImages:s}=ye(ge),t=i.params.id,l=await r.query(pe,{id:t,useFancyImages:s});let o;return(((f=l.data)==null?void 0:f.visitor.video.category)===null||((a=l.data)==null?void 0:a.visitor.video.category)===void 0||((g=l.data)==null?void 0:g.visitor.video.category.assets.length)===0)&&(o=await r.query(_e,{})),G.info("category loader end"),{queryResult:l,categoriesList:o}},ft=Object.freeze(Object.defineProperty({__proto__:null,load:Oe},Symbol.toStringTag,{value:"Module"}));function te(i){let e,r,s;return r=new J({props:{text:i[3]}}),{c(){e=v("h3"),R(r.$$.fragment),this.h()},l(t){e=C(t,"H3",{class:!0});var l=D(e);I(r.$$.fragment,l),l.forEach(k),this.h()},h(){_(e,"class","line-clamp-2 whitespace-normal px-1 pt-1 text-left font-NormsRegular text-sm group-hover:text-slate-50 sm:mt-2 lg:m-2 xl:text-base 2xl:text-lg")},m(t,l){E(t,e,l),q(r,e,null),s=!0},p(t,l){const o={};l&8&&(o.text=t[3]),r.$set(o)},i(t){s||(p(r.$$.fragment,t),s=!0)},o(t){y(r.$$.fragment,t),s=!1},d(t){t&&k(e),L(r)}}}function re(i){let e,r;return{c(){e=v("img"),this.h()},l(s){e=C(s,"IMG",{alt:!0,class:!0,height:!0,src:!0,width:!0}),this.h()},h(){_(e,"alt",""),_(e,"class","absolute right-[2px] top-[2px] z-10 h-[32px] w-[32px]"),_(e,"height",32),ke(e.src,r=Ie)||_(e,"src",r),_(e,"width",32)},m(s,t){E(s,e,t)},d(s){s&&k(e)}}}function Be(i){var c;let e,r,s,t,l,o,f,a,g,n;s=new qe({props:{className:"h-full "+(i[4]?"aspect-square":"aspect-video")+" object-center object-cover",aspectRatio:i[4]?"1:1":"16:9",alt:i[8],crossOrigin:"anonymous",loading:i[1]>5?"lazy":"eager",src:i[7],mobileWidth:400,tabletWidth:320,desktopWidth:400,desktop1440pWidth:600,desktop4kWidth:800}});let m=!i[4]&&te(i),d=!i[5]&&((c=i[0])==null?void 0:c.isRestrictedWithoutProfileEmail)&&i[2]&&re();return{c(){e=v("a"),r=v("div"),R(s.$$.fragment),t=M(),m&&m.c(),l=M(),d&&d.c(),this.h()},l(u){e=C(u,"A",{"data-test-id":!0,"data-test-shelf-style":!0,class:!0,href:!0});var h=D(e);r=C(h,"DIV",{class:!0});var b=D(r);I(s.$$.fragment,b),b.forEach(k),t=N(h),m&&m.l(h),l=N(h),d&&d.l(h),h.forEach(k),this.h()},h(){_(r,"class","overflow-hidden w-full rounded-md border-2 border-transparent group-hover:border-slate-50"),H(r,"aspect-square",i[4]),H(r,"aspect-video",!i[4]),H(r,"flex-grow",i[4]),_(e,"data-test-id",o=`category-asset-${i[1]}-${i[4]?"category":"normal"}`),_(e,"data-test-shelf-style",f=i[4]?"1:1-square-without-titles":"16:9-landscape-with-titles"),_(e,"class","group relative flex flex-col w-full h-full overflow-hidden rounded-md text-slate-300"),_(e,"href",i[6])},m(u,h){E(u,e,h),S(e,r),q(s,r,null),S(e,t),m&&m.m(e,null),S(e,l),d&&d.m(e,null),a=!0,g||(n=be(e,"click",i[9]),g=!0)},p(u,[h]){var P;const b={};h&16&&(b.className="h-full "+(u[4]?"aspect-square":"aspect-video")+" object-center object-cover"),h&16&&(b.aspectRatio=u[4]?"1:1":"16:9"),h&256&&(b.alt=u[8]),h&2&&(b.loading=u[1]>5?"lazy":"eager"),h&128&&(b.src=u[7]),s.$set(b),(!a||h&16)&&H(r,"aspect-square",u[4]),(!a||h&16)&&H(r,"aspect-video",!u[4]),(!a||h&16)&&H(r,"flex-grow",u[4]),u[4]?m&&(O(),y(m,1,1,()=>{m=null}),B()):m?(m.p(u,h),h&16&&p(m,1)):(m=te(u),m.c(),p(m,1),m.m(e,l)),!u[5]&&((P=u[0])!=null&&P.isRestrictedWithoutProfileEmail)&&u[2]?d||(d=re(),d.c(),d.m(e,null)):d&&(d.d(1),d=null),(!a||h&18&&o!==(o=`category-asset-${u[1]}-${u[4]?"category":"normal"}`))&&_(e,"data-test-id",o),(!a||h&16&&f!==(f=u[4]?"1:1-square-without-titles":"16:9-landscape-with-titles"))&&_(e,"data-test-shelf-style",f),(!a||h&64)&&_(e,"href",u[6])},i(u){a||(p(s.$$.fragment,u),p(m),a=!0)},o(u){y(s.$$.fragment,u),y(m),a=!1},d(u){u&&k(e),L(s),m&&m.d(),d&&d.d(),g=!1,n()}}}function He(i,e,r){let s,t,l,o,f,a,g,n,m;j(i,Le,w=>r(13,n=w)),j(i,ee,w=>r(14,m=w));let{asset:d}=e,{index:c}=e,{useEmailProfileRestriction:u}=e,h="",b;const P=()=>{me(ee,m={sourceOfPlayback:n.sourceOfPlayback,sourceOfPlaybackDetails:`${n.source_playback_details}${l}`,sourceOfPlaybackPosition:`Collection: ${c+1}`},m)};return i.$$set=w=>{"asset"in w&&r(0,d=w.asset),"index"in w&&r(1,c=w.index),"useEmailProfileRestriction"in w&&r(2,u=w.useEmailProfileRestriction)},i.$$.update=()=>{var w,A;if(i.$$.dirty&1&&r(11,{id:s,image:t,title:l}=d,s,(r(10,t),r(0,d)),(r(3,l),r(0,d))),i.$$.dirty&8&&r(8,o=l),i.$$.dirty&1&&r(12,f=d.__typename==="Video_CategoryAsset"),i.$$.dirty&1&&r(4,a=d.__typename==="Video_VideoCategory"),i.$$.dirty&1&&r(5,g=d.__typename==="Video_VideoSeries"),i.$$.dirty&6193){const V={series:"series",streams:"streams",categories:"categories"},F=f||a?V.categories:g?V.series:V.streams;r(6,h=`/${F}/${W(d.title)}/${s}`)}i.$$.dirty&1041&&(a?r(7,b=(A=(w=d==null?void 0:d.resources)==null?void 0:w.find(V=>V.type==="square_1_1"))==null?void 0:A.uri):r(7,b=t==null?void 0:t.uri))},[d,c,u,l,a,g,h,b,o,P,t,s,f]}class he extends U{constructor(e){super(),Q(this,e,He,Be,z,{asset:0,index:1,useEmailProfileRestriction:2})}}function se(i){let e,r,s;return r=new J({props:{text:i[0]}}),{c(){e=v("h1"),R(r.$$.fragment),this.h()},l(t){e=C(t,"H1",{"data-test-id":!0,class:!0});var l=D(e);I(r.$$.fragment,l),l.forEach(k),this.h()},h(){_(e,"data-test-id","category-title"),_(e,"class","text-[#f5f5f5] text-[30px] md:text-[60px] leading-[36px] md:leading-[72px] font-NormsMedium font-medium relative")},m(t,l){E(t,e,l),q(r,e,null),s=!0},p(t,l){const o={};l&1&&(o.text=t[0]),r.$set(o)},i(t){s||(p(r.$$.fragment,t),s=!0)},o(t){y(r.$$.fragment,t),s=!1},d(t){t&&k(e),L(r)}}}function ie(i){let e,r,s;return r=new J({props:{text:i[1]}}),{c(){e=v("p"),R(r.$$.fragment),this.h()},l(t){e=C(t,"P",{"data-test-id":!0,class:!0});var l=D(e);I(r.$$.fragment,l),l.forEach(k),this.h()},h(){_(e,"data-test-id","category-description"),_(e,"class","text-[#f5f5f5] line-clamp-2 text-[14px] md:text-[22px] leading-[16px] md:leading-[28px] font-NormsMedium font-medium relative pt-[22px]")},m(t,l){E(t,e,l),q(r,e,null),s=!0},p(t,l){const o={};l&2&&(o.text=t[1]),r.$set(o)},i(t){s||(p(r.$$.fragment,t),s=!0)},o(t){y(r.$$.fragment,t),s=!1},d(t){t&&k(e),L(r)}}}function je(i){let e,r,s='<div data-test-id="category-radial-gradient" class="custom-radial-gradient h-[1000px] -top-[500px] absolute -translate-x-1/2 w-[300%] svelte-16o0z4"></div>',t,l,o="",f,a,g,n=i[0]&&se(i),m=i[1]&&ie(i);return{c(){e=v("div"),r=v("div"),r.innerHTML=s,t=M(),l=v("div"),l.innerHTML=o,f=M(),n&&n.c(),a=M(),m&&m.c(),this.h()},l(d){e=C(d,"DIV",{"data-test-id":!0,class:!0});var c=D(e);r=C(c,"DIV",{class:!0,"data-svelte-h":!0}),Z(r)!=="svelte-3ttdbi"&&(r.innerHTML=s),t=N(c),l=C(c,"DIV",{"data-test-id":!0,class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1xay7ai"&&(l.innerHTML=o),f=N(c),n&&n.l(c),a=N(c),m&&m.l(c),c.forEach(k),this.h()},h(){_(r,"class","absolute opacity-90 bg-opacity-20 w-full md:w-3/4 h-full top-0 left-0 overflow-hidden"),_(l,"data-test-id","category-linear-gradient"),_(l,"class","absolute bg-gradient-to-t from-slate-900 to-slate-transparent w-full h-[100%] bottom-0 right-0"),_(e,"data-test-id","category-hero"),_(e,"class","h-[220px] md:h-[320px] w-full px-[40px] pt-[60px] relative")},m(d,c){E(d,e,c),S(e,r),S(e,t),S(e,l),S(e,f),n&&n.m(e,null),S(e,a),m&&m.m(e,null),i[5](e),g=!0},p(d,[c]){d[0]?n?(n.p(d,c),c&1&&p(n,1)):(n=se(d),n.c(),p(n,1),n.m(e,a)):n&&(O(),y(n,1,1,()=>{n=null}),B()),d[1]?m?(m.p(d,c),c&2&&p(m,1)):(m=ie(d),m.c(),p(m,1),m.m(e,null)):m&&(O(),y(m,1,1,()=>{m=null}),B())},i(d){g||(p(n),p(m),g=!0)},o(d){y(n),y(m),g=!1},d(d){d&&k(e),n&&n.d(),m&&m.d(),i[5](null)}}}function Ae(i,e,r){let s,{title:t=""}=e,{description:l}=e,{glowColor:o="#525CBB"}=e,f,a;we(()=>{a==null||a.destroy()});function g(n){ve[n?"unshift":"push"](()=>{f=n,r(2,f)})}return i.$$set=n=>{"title"in n&&r(0,t=n.title),"description"in n&&r(1,l=n.description),"glowColor"in n&&r(3,o=n.glowColor)},i.$$.update=()=>{i.$$.dirty&8&&r(4,s=`background-color: ${o};`),i.$$.dirty&20&&f&&(a=Me(f,"category-hero-dynamic-class",s))},[t,l,f,o,s,g]}class Fe extends U{constructor(e){super(),Q(this,e,Ae,je,z,{title:0,description:1,glowColor:3})}}function le(i,e,r){const s=i.slice();return s[1]=e[r],s[13]=r,s}function ae(i,e,r){const s=i.slice();return s[14]=e[r],s[13]=r,s}function oe(i){let e,r,s=T(i[0]),t=[];for(let o=0;o<s.length;o+=1)t[o]=ne(ae(i,s,o));const l=o=>y(t[o],1,1,()=>{t[o]=null});return{c(){e=v("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=C(o,"DIV",{"data-test-id":!0,class:!0});var f=D(e);for(let a=0;a<t.length;a+=1)t[a].l(f);f.forEach(k),this.h()},h(){_(e,"data-test-id","category-items"),_(e,"class","px-8 pb-8 -mt-6 md:-mt-8 grid grid-cols-1 gap-3 font-NormsMedium text-2xl text-slate-50 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5")},m(o,f){E(o,e,f);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);r=!0},p(o,f){if(f&33){s=T(o[0]);let a;for(a=0;a<s.length;a+=1){const g=ae(o,s,a);t[a]?(t[a].p(g,f),p(t[a],1)):(t[a]=ne(g),t[a].c(),p(t[a],1),t[a].m(e,null))}for(O(),a=s.length;a<t.length;a+=1)l(a);B()}},i(o){if(!r){for(let f=0;f<s.length;f+=1)p(t[f]);r=!0}},o(o){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)y(t[f]);r=!1},d(o){o&&k(e),de(t,o)}}}function ne(i){let e,r;return e=new he({props:{useEmailProfileRestriction:i[5],asset:i[14],index:i[13],useFancyImages:!1}}),{c(){R(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,t){q(e,s,t),r=!0},p(s,t){const l={};t&32&&(l.useEmailProfileRestriction=s[5]),t&1&&(l.asset=s[14]),e.$set(l)},i(s){r||(p(e.$$.fragment,s),r=!0)},o(s){y(e.$$.fragment,s),r=!1},d(s){L(e,s)}}}function fe(i){let e,r,s=T(i[7]),t=[];for(let o=0;o<s.length;o+=1)t[o]=ce(le(i,s,o));const l=o=>y(t[o],1,1,()=>{t[o]=null});return{c(){e=v("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=C(o,"DIV",{"data-test-id":!0,class:!0});var f=D(e);for(let a=0;a<t.length;a+=1)t[a].l(f);f.forEach(k),this.h()},h(){_(e,"data-test-id","categories-full-list"),_(e,"class","px-8 pb-8 -mt-6 md:-mt-8 grid grid-cols-2 gap-4 font-NormsMedium text-2xl text-slate-50 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6")},m(o,f){E(o,e,f);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);r=!0},p(o,f){if(f&160){s=T(o[7]);let a;for(a=0;a<s.length;a+=1){const g=le(o,s,a);t[a]?(t[a].p(g,f),p(t[a],1)):(t[a]=ce(g),t[a].c(),p(t[a],1),t[a].m(e,null))}for(O(),a=s.length;a<t.length;a+=1)l(a);B()}},i(o){if(!r){for(let f=0;f<s.length;f+=1)p(t[f]);r=!0}},o(o){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)y(t[f]);r=!1},d(o){o&&k(e),de(t,o)}}}function ce(i){let e,r;return e=new he({props:{useEmailProfileRestriction:i[5],asset:i[1],index:i[13],useFancyImages:!1}}),{c(){R(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,t){q(e,s,t),r=!0},p(s,t){const l={};t&32&&(l.useEmailProfileRestriction=s[5]),t&128&&(l.asset=s[1]),e.$set(l)},i(s){r||(p(e.$$.fragment,s),r=!0)},o(s){y(e.$$.fragment,s),r=!1},d(s){L(e,s)}}}function We(i){var m,d;let e,r,s,t,l,o,f,a;r=new Fe({props:{glowColor:i[6],description:i[2],title:i[3]}}),l=new Ne({props:{href:i[4]}});let g=i[0]&&i[0].length>0&&((m=i[1])==null?void 0:m.assets)!==null&&i[1]!==null&&oe(i),n=i[7]&&((d=i[7])==null?void 0:d.length)>0&&fe(i);return{c(){e=v("main"),R(r.$$.fragment),s=M(),t=v("div"),R(l.$$.fragment),o=M(),g&&g.c(),f=M(),n&&n.c(),this.h()},l(c){e=C(c,"MAIN",{class:!0});var u=D(e);I(r.$$.fragment,u),s=N(u),t=C(u,"DIV",{class:!0});var h=D(t);I(l.$$.fragment,h),h.forEach(k),o=N(u),g&&g.l(u),f=N(u),n&&n.l(u),u.forEach(k),this.h()},h(){_(t,"class","absolute top-1 left-3 sm:top-4 md:left-[20px] lg:top-[18px]"),_(e,"class","relative")},m(c,u){E(c,e,u),q(r,e,null),S(e,s),S(e,t),q(l,t,null),S(e,o),g&&g.m(e,null),S(e,f),n&&n.m(e,null),a=!0},p(c,[u]){var P,w;const h={};u&64&&(h.glowColor=c[6]),u&4&&(h.description=c[2]),u&8&&(h.title=c[3]),r.$set(h);const b={};u&16&&(b.href=c[4]),l.$set(b),c[0]&&c[0].length>0&&((P=c[1])==null?void 0:P.assets)!==null&&c[1]!==null?g?(g.p(c,u),u&3&&p(g,1)):(g=oe(c),g.c(),p(g,1),g.m(e,f)):g&&(O(),y(g,1,1,()=>{g=null}),B()),c[7]&&((w=c[7])==null?void 0:w.length)>0?n?(n.p(c,u),u&128&&p(n,1)):(n=fe(c),n.c(),p(n,1),n.m(e,null)):n&&(O(),y(n,1,1,()=>{n=null}),B())},i(c){a||(p(r.$$.fragment,c),p(l.$$.fragment,c),p(g),p(n),a=!0)},o(c){y(r.$$.fragment,c),y(l.$$.fragment,c),y(g),y(n),a=!1},d(c){c&&k(e),L(r),L(l),g&&g.d(),n&&n.d()}}}function Te(i,e,r){let s,t,l,o,f,a,g,n,m,d;j(i,Re,h=>r(10,m=h)),j(i,ge,h=>r(11,d=h));let{queryData:c}=e,{categoriesListData:u}=e;return i.$$set=h=>{"queryData"in h&&r(8,c=h.queryData),"categoriesListData"in h&&r(9,u=h.categoriesListData)},i.$$.update=()=>{var h,b;i.$$.dirty&512&&r(7,s=u==null?void 0:u.visitor.video.categories),i.$$.dirty&256&&r(1,t=c.visitor.video.category),i.$$.dirty&2&&r(0,l=t==null?void 0:t.assets),i.$$.dirty&2&&r(6,o=(b=(h=t==null?void 0:t.resources)==null?void 0:h.find(P=>P.type==="channel_glow_color"))==null?void 0:b.uri),i.$$.dirty&2048&&r(5,{useEmailProfileRestriction:f}=d,f),i.$$.dirty&2&&r(2,a=t==null?void 0:t.description),i.$$.dirty&2&&r(3,g=t==null?void 0:t.title),i.$$.dirty&1024&&r(4,n=m.path||"/"),i.$$.dirty&3&&((l==null?void 0:l.length)===0||(t==null?void 0:t.assets)===null||t===null)&&(r(3,g="Oops! No videos were found."),r(2,a="Sorry, it seems there are no videos in this category. Feel free to explore other categories."))},[l,t,a,g,n,f,o,s,c,u,m,d]}class ze extends U{constructor(e){super(),Q(this,e,Te,We,z,{queryData:8,categoriesListData:9})}}function ue(i){let e,r,s,t;return e=new Ve({props:{canonical:i[2],description:"Categories",title:`${i[0]}`}}),s=new ze({props:{queryData:i[1],categoriesListData:i[3]}}),{c(){R(e.$$.fragment),r=M(),R(s.$$.fragment)},l(l){I(e.$$.fragment,l),r=N(l),I(s.$$.fragment,l)},m(l,o){q(e,l,o),E(l,r,o),q(s,l,o),t=!0},p(l,o){const f={};o&4&&(f.canonical=l[2]),o&1&&(f.title=`${l[0]}`),e.$set(f);const a={};o&2&&(a.queryData=l[1]),o&8&&(a.categoriesListData=l[3]),s.$set(a)},i(l){t||(p(e.$$.fragment,l),p(s.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),y(s.$$.fragment,l),t=!1},d(l){l&&k(r),L(e,l),L(s,l)}}}function Ue(i){let e,r,s=i[1]&&ue(i);return{c(){s&&s.c(),e=x()},l(t){s&&s.l(t),e=x()},m(t,l){s&&s.m(t,l),E(t,e,l),r=!0},p(t,[l]){t[1]?s?(s.p(t,l),l&2&&p(s,1)):(s=ue(t),s.c(),p(s,1),s.m(e.parentNode,e)):s&&(O(),y(s,1,1,()=>{s=null}),B())},i(t){r||(p(s),r=!0)},o(t){y(s),r=!1},d(t){t&&k(e),s&&s.d(t)}}}function Qe(i,e,r){let s,t,l,o,f,a,g,n,m;j(i,Ce,c=>r(7,n=c)),j(i,$,c=>r(9,m=c));let{data:d}=e;return G.info("category route"),Se(({to:c,from:u})=>{(c==null?void 0:c.url.pathname)!==(u==null?void 0:u.url.pathname)&&me($,m={...m,category:{categoryId:`${W(f)}/${g}`,categoryUrl:`/categories/${W(f)}/${g}`}},m)}),i.$$set=c=>{"data"in c&&r(4,d=c.data)},i.$$.update=()=>{var c,u,h,b,P,w,A,V,F,K,X,Y;i.$$.dirty&16&&r(6,{queryResult:s,categoriesList:t}=d,s,(r(5,t),r(4,d))),i.$$.dirty&64&&r(1,l=s==null?void 0:s.data),i.$$.dirty&32&&r(3,o=t==null?void 0:t.data),i.$$.dirty&2&&r(0,f=((c=l==null?void 0:l.visitor.video.category)==null?void 0:c.title)??""),i.$$.dirty&3&&r(2,a=`https://plus.qvc.com/categories/${W(f)}/${(u=l==null?void 0:l.visitor.video.category)==null?void 0:u.id}`),i.$$.dirty&2&&(g=(h=l==null?void 0:l.visitor.video.category)==null?void 0:h.id),i.$$.dirty&1&&Ee.set(f),i.$$.dirty&128&&n&&((b=n==null?void 0:n.to)==null?void 0:b.url.pathname)!==((P=n==null?void 0:n.from)==null?void 0:P.url.pathname)&&(V=(A=(w=n==null?void 0:n.to)==null?void 0:w.route)==null?void 0:A.id)!=null&&V.includes("categories")&&((K=(F=n==null?void 0:n.to)==null?void 0:F.route)==null?void 0:K.id)!==((Y=(X=n==null?void 0:n.from)==null?void 0:X.route)==null?void 0:Y.id)&&(De("remove",{keys:["category","series"]}),Pe("series"))},[f,l,a,o,d,t,s,n]}class ct extends U{constructor(e){super(),Q(this,e,Qe,Ue,z,{data:4})}}export{ct as component,ft as universal};
