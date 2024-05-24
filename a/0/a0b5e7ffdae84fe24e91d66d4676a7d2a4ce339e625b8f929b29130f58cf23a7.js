import{g as Te,s as Qe,e as Y,a as q,K as qe,d as h,c as W,C as I,i as Q,b as Z,f as P,h as N,k as d,j as R,B as me,D as We,z as Be,A as Re,M as Ve,l as De,n as ie}from"../chunks/scheduler.6hyDou9G.js";import{f as Ee,H as je,Q as Ae,n as Ge,d as ke}from"../chunks/notificationStore.Dik4qyms.js";import{a as Le,g as Fe,b as ze}from"../chunks/entry.Cu783cqS.js";import{r as Ke,e as Ue}from"../chunks/index.t1u780Y_.js";import{l as ce,S as Je,a as fe}from"../chunks/logger.rxQQzaAn.js";import{s as oe}from"../chunks/slug.aA6mVju7.js";import{S as He,i as Me,t as p,g as x,b as g,d as ee,c as j,a as A,m as G,e as L}from"../chunks/index.hQc_5nPF.js";import{s as Xe}from"../chunks/seriesName.store.Qg5giBXX.js";import{u as Ye}from"../chunks/updateQueryParams.OkfTKLrN.js";import{M as Ze}from"../chunks/MetaTags.rwrjvebb.js";import{P as xe}from"../chunks/play.aYyeJ66P.js";import{A as et}from"../chunks/Assets.NwZ8gZlJ.js";import{B as tt}from"../chunks/Button.ej9Fc0uR.js";import{C as Oe}from"../chunks/restricted-plus-content.xDAfdFXD.js";import{G as rt}from"../chunks/GoBackButton.GUqdlU5E.js";import{I as st,T as at}from"../chunks/TruncateParagraph.csNixuul.js";import{R as lt}from"../chunks/RemocoResponsiveImage.Sf1mnmbI.js";import{c as ot}from"../chunks/currentPage.store.JSQX7DqS.js";import{p as it}from"../chunks/portalCollection.store.CIHWa64N.js";import{s as ye}from"../chunks/sourceOfPlaybackStore.zl-3pXWw.js";import{s as ne}from"../chunks/convivaHelper.vWK4BitH.js";const nt=async s=>{var c,D,$;ce.info("series loader start");const l=(await s.parent()).client,{useFancyImages:e}=Te(Ee),a=s.params.id,r=s.url.searchParams.get("c"),o=await l.query(Je,{id:a,useFancyImages:e});ce.info("series loader end");let i="?"+(s.url.searchParams.has("utm_source")?"utm_source="+s.url.searchParams.get("utm_source"):"")+(s.url.searchParams.has("utm_medium")?"utm_medium="+s.url.searchParams.get("utm_medium"):"")+(s.url.searchParams.has("utm_campaign")?"utm_campaign="+s.url.searchParams.get("utm_campaign"):"");if(s.url.searchParams.get("last-episode")==="true"&&i!=="?"){const f=(D=(c=o.data)==null?void 0:c.visitor.video.series)==null?void 0:D.streams.slice(-1)[0];Ke(301,`/streams/${oe((f==null?void 0:f.title)??"")}/${(f==null?void 0:f.id)??""}${i}`)}return($=o.data)!=null&&$.visitor.video.series||Ue(404,"Not found"),{collectionId:r,queryResult:o}},jt=Object.freeze(Object.defineProperty({__proto__:null,load:nt},Symbol.toStringTag,{value:"Module"}));function $e(s){let t,l;return{c(){t=P("link"),this.h()},l(e){t=N(e,"LINK",{as:!0,crossorigin:!0,fetchpriority:!0,href:!0,rel:!0,type:!0}),this.h()},h(){var e,a;d(t,"as","image"),d(t,"crossorigin","anonymous"),d(t,"fetchpriority","high"),d(t,"href",l=(a=(e=s[1])==null?void 0:e.image)==null?void 0:a.uri),d(t,"rel","preload"),d(t,"type","image/jpeg")},m(e,a){Q(e,t,a)},p(e,a){var r,o;a&2&&l!==(l=(o=(r=e[1])==null?void 0:r.image)==null?void 0:o.uri)&&d(t,"href",l)},d(e){e&&h(t)}}}function we(s){var pe,he,_e,ge,be;let t,l,e,a,r,o,i,c,D,$,f,H=" ",M,u,C,O,V,B,F,E,U,m,y,w,z,b=s[2]&&((pe=s[1])==null?void 0:pe.description)&&Ce(s);r=new rt({props:{href:s[3]}}),c=new lt({props:{className:"h-full w-full object-cover",alt:"series-page-background",dataTestId:"series-page-placeholder-image",fetchpriority:"high",loading:"eager",src:(_e=(he=s[1])==null?void 0:he.image)==null?void 0:_e.uri,mobileWidth:420,tabletWidth:768,desktopWidth:1024,desktop1440pWidth:1280,desktop4kWidth:1440,aspectRatio:"16:9"}});let S=!s[5]&&Ie(s);V=new Oe({props:{text:(ge=s[1])==null?void 0:ge.title}});let v=((be=s[1])==null?void 0:be.description)&&Se(s),k=s[6]&&Pe(s);const ue=[pt,dt],J=[];function de(n,_){return n[6]?0:1}return y=de(s),w=J[y]=ue[y](s),{c(){b&&b.c(),t=q(),l=P("main"),e=P("section"),a=P("div"),j(r.$$.fragment),o=q(),i=P("div"),j(c.$$.fragment),D=q(),$=P("div"),f=P("span"),f.textContent=H,M=q(),u=P("div"),S&&S.c(),C=q(),O=P("h1"),j(V.$$.fragment),B=q(),v&&v.c(),F=q(),E=P("div"),k&&k.c(),U=q(),m=P("section"),w.c(),this.h()},l(n){b&&b.l(n),t=W(n),l=N(n,"MAIN",{});var _=R(l);e=N(_,"SECTION",{"data-cy":!0,class:!0});var K=R(e);a=N(K,"DIV",{class:!0});var te=R(a);A(r.$$.fragment,te),te.forEach(h),o=W(K),i=N(K,"DIV",{class:!0});var re=R(i);A(c.$$.fragment,re),re.forEach(h),D=W(K),$=N(K,"DIV",{class:!0});var X=R($);f=N(X,"SPAN",{"data-svelte-h":!0}),me(f)!=="svelte-1uypmr0"&&(f.textContent=H),M=W(X),u=N(X,"DIV",{class:!0});var T=R(u);S&&S.l(T),C=W(T),O=N(T,"H1",{class:!0});var se=R(O);A(V.$$.fragment,se),se.forEach(h),B=W(T),v&&v.l(T),F=W(T),E=N(T,"DIV",{class:!0});var ae=R(E);k&&k.l(ae),ae.forEach(h),T.forEach(h),X.forEach(h),K.forEach(h),U=W(_),m=N(_,"SECTION",{class:!0,"data-cy":!0});var le=R(m);w.l(le),le.forEach(h),_.forEach(h),this.h()},h(){d(a,"class","z-10 absolute top-1 left-3 sm:top-4 md:left-[20px] lg:top-[18px]"),d(i,"class","absolute w-full md:h-full md:w-[60%]"),d(O,"class","mt-4 line-clamp-2 font-NormsMedium text-2xl font-bold tracking-wide text-white lg:text-3xl"),d(E,"class","my-5 flex h-[55px] space-x-4"),d(u,"class","flex flex-col space-y-6 md:pl-2 md:w-[40%] md:pt-10 lg:pt-14"),d($,"class","series-gradient absolute bottom-5 flex h-full w-full flex-col justify-between px-3 landscape:px-5 py-6 sm:bottom-0 md:flex-row md:justify-start md:pl-10 svelte-1vcs2vg"),d(e,"data-cy","hero section"),d(e,"class",We("relative flex h-[31em] w-full flex-col items-end overflow-hidden bg-cover bg-no-repeat md:h-[50vw] lg:h-[37vw] xl:h-[31vw]")+" svelte-1vcs2vg"),d(m,"class","h-42 flex min-h-[200px] flex-col overflow-x-hidden bg-slate-900 pb-10 landscape:pt-5 sm:pt-10"),d(m,"data-cy","episodes section")},m(n,_){b&&b.m(n,_),Q(n,t,_),Q(n,l,_),I(l,e),I(e,a),G(r,a,null),I(e,o),I(e,i),G(c,i,null),I(e,D),I(e,$),I($,f),I($,M),I($,u),S&&S.m(u,null),I(u,C),I(u,O),G(V,O,null),I(u,B),v&&v.m(u,null),I(u,F),I(u,E),k&&k.m(E,null),I(l,U),I(l,m),J[y].m(m,null),z=!0},p(n,_){var T,se,ae,le,ve;n[2]&&((T=n[1])!=null&&T.description)?b?(b.p(n,_),_&6&&p(b,1)):(b=Ce(n),b.c(),p(b,1),b.m(t.parentNode,t)):b&&(x(),g(b,1,1,()=>{b=null}),ee());const K={};_&8&&(K.href=n[3]),r.$set(K);const te={};_&2&&(te.src=(ae=(se=n[1])==null?void 0:se.image)==null?void 0:ae.uri),c.$set(te),n[5]?S&&(S.d(1),S=null):S?S.p(n,_):(S=Ie(n),S.c(),S.m(u,C));const re={};_&2&&(re.text=(le=n[1])==null?void 0:le.title),V.$set(re),(ve=n[1])!=null&&ve.description?v?(v.p(n,_),_&2&&p(v,1)):(v=Se(n),v.c(),p(v,1),v.m(u,F)):v&&(x(),g(v,1,1,()=>{v=null}),ee()),n[6]?k?(k.p(n,_),_&64&&p(k,1)):(k=Pe(n),k.c(),p(k,1),k.m(E,null)):k&&(x(),g(k,1,1,()=>{k=null}),ee());let X=y;y=de(n),y===X?J[y].p(n,_):(x(),g(J[X],1,1,()=>{J[X]=null}),ee(),w=J[y],w?w.p(n,_):(w=J[y]=ue[y](n),w.c()),p(w,1),w.m(m,null))},i(n){z||(p(b),p(r.$$.fragment,n),p(c.$$.fragment,n),p(V.$$.fragment,n),p(v),p(k),p(w),z=!0)},o(n){g(b),g(r.$$.fragment,n),g(c.$$.fragment,n),g(V.$$.fragment,n),g(v),g(k),g(w),z=!1},d(n){n&&(h(t),h(l)),b&&b.d(n),L(r),L(c),S&&S.d(),L(V),v&&v.d(),k&&k.d(),J[y].d()}}}function Ce(s){let t,l;return t=new st({props:{text:s[1].description}}),t.$on("closeModal",s[10]),{c(){j(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,a){G(t,e,a),l=!0},p(e,a){const r={};a&2&&(r.text=e[1].description),t.$set(r)},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function Ie(s){let t;function l(r,o){return r[1].companyCodes[0]===fe.Qvc?ft:ct}let e=l(s),a=e(s);return{c(){t=P("div"),a.c(),this.h()},l(r){t=N(r,"DIV",{class:!0});var o=R(t);a.l(o),o.forEach(h),this.h()},h(){d(t,"class","w-8")},m(r,o){Q(r,t,o),a.m(t,null)},p(r,o){e!==(e=l(r))&&(a.d(1),a=e(r),a&&(a.c(),a.m(t,null)))},d(r){r&&h(t),a.d()}}}function ct(s){let t,l;return{c(){t=P("img"),this.h()},l(e){t=N(e,"IMG",{alt:!0,src:!0,height:!0,width:!0}),this.h()},h(){d(t,"alt","HSN Logo"),De(t.src,l=je)||d(t,"src",l),d(t,"height",277),d(t,"width",277)},m(e,a){Q(e,t,a)},d(e){e&&h(t)}}}function ft(s){let t,l;return{c(){t=P("img"),this.h()},l(e){t=N(e,"IMG",{alt:!0,src:!0,height:!0,width:!0}),this.h()},h(){d(t,"alt","QVC Logo"),De(t.src,l=Ae)||d(t,"src",l),d(t,"height",246),d(t,"width",246)},m(e,a){Q(e,t,a)},d(e){e&&h(t)}}}function Se(s){let t,l;return t=new at({props:{lineClampNumber:3,testId:"series-description",$$slots:{default:[mt]},$$scope:{ctx:s}}}),t.$on("moreButton",s[10]),{c(){j(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,a){G(t,e,a),l=!0},p(e,a){const r={};a&524290&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function mt(s){var e;let t,l;return t=new Oe({props:{text:(e=s[1])==null?void 0:e.description}}),{c(){j(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,r){G(t,a,r),l=!0},p(a,r){var i;const o={};r&2&&(o.text=(i=a[1])==null?void 0:i.description),t.$set(o)},i(a){l||(p(t.$$.fragment,a),l=!0)},o(a){g(t.$$.fragment,a),l=!1},d(a){L(t,a)}}}function Pe(s){let t,l;return t=new tt({props:{onClick:s[9],primary:!0,iconPath:xe,testId:"series-page-watch-now",alt:"",$$slots:{default:[ut]},$$scope:{ctx:s}}}),{c(){j(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,a){G(t,e,a),l=!0},p(e,a){const r={};a&524288&&(r.$$scope={dirty:a,ctx:e}),t.$set(r)},i(e){l||(p(t.$$.fragment,e),l=!0)},o(e){g(t.$$.fragment,e),l=!1},d(e){L(t,e)}}}function ut(s){let t;return{c(){t=Be("Watch Now")},l(l){t=Re(l,"Watch Now")},m(l,e){Q(l,t,e)},d(l){l&&h(t)}}}function dt(s){let t,l="This show currently doesn't have any episodes.";return{c(){t=P("p"),t.textContent=l,this.h()},l(e){t=N(e,"P",{class:!0,"data-svelte-h":!0}),me(t)!=="svelte-dzo83h"&&(t.textContent=l),this.h()},h(){d(t,"class","px-10 text-center leading-loose text-slate-300")},m(e,a){Q(e,t,a)},p:ie,i:ie,o:ie,d(e){e&&h(t)}}}function pt(s){let t,l="Episodes",e,a,r;return a=new et({props:{assets:s[1].streams,collectionId:s[0],seriesId:s[1].id,widgetIndex:1,collectionTitle:s[4],useEmailProfileRestriction:s[7],useFancyImages:s[8]}}),{c(){t=P("h2"),t.textContent=l,e=q(),j(a.$$.fragment),this.h()},l(o){t=N(o,"H2",{class:!0,"data-svelte-h":!0}),me(t)!=="svelte-1e13got"&&(t.textContent=l),e=W(o),A(a.$$.fragment,o),this.h()},h(){d(t,"class","mb-4 overflow-visible px-3 font-NormsMedium text-xl text-slate-50 md:px-10 md:text-2xl")},m(o,i){Q(o,t,i),Q(o,e,i),G(a,o,i),r=!0},p(o,i){const c={};i&2&&(c.assets=o[1].streams),i&1&&(c.collectionId=o[0]),i&2&&(c.seriesId=o[1].id),i&16&&(c.collectionTitle=o[4]),a.$set(c)},i(o){r||(p(a.$$.fragment,o),r=!0)},o(o){g(a.$$.fragment,o),r=!1},d(o){o&&(h(t),h(e)),L(a,o)}}}function ht(s){let t,l,e,a,r=s[1]&&$e(s),o=s[1]&&we(s);return{c(){r&&r.c(),t=Y(),l=q(),o&&o.c(),e=Y()},l(i){const c=qe("svelte-w2opl9",document.head);r&&r.l(c),t=Y(),c.forEach(h),l=W(i),o&&o.l(i),e=Y()},m(i,c){r&&r.m(document.head,null),I(document.head,t),Q(i,l,c),o&&o.m(i,c),Q(i,e,c),a=!0},p(i,[c]){i[1]?r?r.p(i,c):(r=$e(i),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),i[1]?o?(o.p(i,c),c&2&&p(o,1)):(o=we(i),o.c(),p(o,1),o.m(e.parentNode,e)):o&&(x(),g(o,1,1,()=>{o=null}),ee())},i(i){a||(p(o),a=!0)},o(i){g(o),a=!1},d(i){i&&(h(l),h(e)),r&&r.d(i),h(t),o&&o.d(i)}}}function _t(s,t,l){let e,a,r,o,i,c,D,$,f,H,M;Z(s,it,m=>l(13,$=m)),Z(s,ot,m=>l(15,f=m)),Z(s,ye,m=>l(16,H=m)),Z(s,Ee,m=>l(17,M=m));let{collectionId:u}=t,{queryData:C}=t;const{useEmailProfileRestriction:O,useFancyImages:V}=M;let B=!1;const F=()=>{var w,z;const m=(w=e==null?void 0:e.streams[0])==null?void 0:w.companyCodes,y=((z=e==null?void 0:e.streams[0])==null?void 0:z.title)||"";ne({event:"video_event",source_playback:f.source_playback,source_playback_detail:`${f.source_playback_details}${a}`||"",swimlane_position:1,video_name:y,video_format:"VOD",brand:!m||m.length===0?"QVC":m[0]})},E=()=>{if(r&&r.length>0){const{title:m,id:y}=r[0];let w="",z=u||(e==null?void 0:e.id);w=`/streams/${oe(m)}/${y}${z?"?":""}${u?"c="+u.replace("/collections/",""):""}${e!=null&&e.id?(u?"&":"")+"s="+e.id:""}`,Ve(ye,H={sourceOfPlayback:f.sourceOfPlayback,sourceOfPlaybackDetails:`${f.source_playback_details}${m}`,sourceOfPlaybackPosition:"Collection: 1 | Swimlane: 1"},H),Fe(w),F()}},U=()=>{l(2,B=!B)};return Le(({from:m})=>{m||ne({event:"deeplink",mediatype:"series",seriesname:a||""}),ne({event:"page_view",page_location:location.href,page_title:`Series | ${a}`,page_referrer:(m==null?void 0:m.url.href)||""})}),s.$$set=m=>{"collectionId"in m&&l(0,u=m.collectionId),"queryData"in m&&l(11,C=m.queryData)},s.$$.update=()=>{s.$$.dirty&2048&&l(1,e=C==null?void 0:C.visitor.video.series),s.$$.dirty&2&&l(4,a=e==null?void 0:e.title),s.$$.dirty&2&&(r=e==null?void 0:e.streams),s.$$.dirty&2&&l(6,o=(e==null?void 0:e.streams)&&(e==null?void 0:e.streams.length)>0),s.$$.dirty&2&&l(12,i=e==null?void 0:e.companyCodes),s.$$.dirty&4096&&l(5,c=i&&(i.length>0&&i.includes(fe.Qvc)&&i.includes(fe.Hsn)||i.length===0)),s.$$.dirty&8192&&l(3,D=$.path||"/")},[u,e,B,D,a,c,o,O,V,E,U,C,i,$]}class gt extends He{constructor(t){super(),Me(this,t,_t,ht,Qe,{collectionId:0,queryData:11})}}function Ne(s){let t,l,e,a;return t=new Ze({props:{canonical:s[3],description:s[4],openGraph:{description:s[4],images:[{alt:s[1],url:s[5]}],siteName:"QVC+ and HSN+",title:s[1],url:s[3]},title:s[1],twitter:{description:s[4],handle:"@QVC",image:s[5],imageAlt:s[1],site:"@QVC",title:s[1]}}}),e=new gt({props:{collectionId:s[6],queryData:s[2]}}),{c(){j(t.$$.fragment),l=q(),j(e.$$.fragment)},l(r){A(t.$$.fragment,r),l=W(r),A(e.$$.fragment,r)},m(r,o){G(t,r,o),Q(r,l,o),G(e,r,o),a=!0},p(r,o){const i={};o&8&&(i.canonical=r[3]),o&16&&(i.description=r[4]),o&58&&(i.openGraph={description:r[4],images:[{alt:r[1],url:r[5]}],siteName:"QVC+ and HSN+",title:r[1],url:r[3]}),o&2&&(i.title=r[1]),o&50&&(i.twitter={description:r[4],handle:"@QVC",image:r[5],imageAlt:r[1],site:"@QVC",title:r[1]}),t.$set(i);const c={};o&64&&(c.collectionId=r[6]),o&4&&(c.queryData=r[2]),e.$set(c)},i(r){a||(p(t.$$.fragment,r),p(e.$$.fragment,r),a=!0)},o(r){g(t.$$.fragment,r),g(e.$$.fragment,r),a=!1},d(r){r&&h(l),L(t,r),L(e,r)}}}function bt(s){let t,l,e=s[0]&&Ne(s);return{c(){e&&e.c(),t=Y()},l(a){e&&e.l(a),t=Y()},m(a,r){e&&e.m(a,r),Q(a,t,r),l=!0},p(a,[r]){a[0]?e?(e.p(a,r),r&1&&p(e,1)):(e=Ne(a),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(x(),g(e,1,1,()=>{e=null}),ee())},i(a){l||(p(e),l=!0)},o(a){g(e),l=!1},d(a){a&&h(t),e&&e.d(a)}}}function vt(s,t,l){let e,a,r,o,i,c,D,$,f,H;Z(s,Ge,u=>l(9,f=u)),Z(s,ke,u=>l(10,H=u));let{data:M}=t;return ce.info("series route"),ze(({to:u,from:C})=>{(u==null?void 0:u.url.pathname)!==(C==null?void 0:C.url.pathname)&&Ve(ke,H={...H,series:{seriesId:`${oe(i)}/${o==null?void 0:o.id}`,seriesUrl:`/series/${oe(i)}/${o==null?void 0:o.id}`}},H)}),s.$$set=u=>{"data"in u&&l(0,M=u.data)},s.$$.update=()=>{var u,C,O,V,B,F,E,U,m,y;s.$$.dirty&1&&l(6,{collectionId:e,queryResult:a}=M,e,(l(8,a),l(0,M))),s.$$.dirty&256&&l(2,{data:r}=a,r),s.$$.dirty&4&&l(7,o=r==null?void 0:r.visitor.video.series),s.$$.dirty&128&&l(1,i=(o==null?void 0:o.title)??""),s.$$.dirty&128&&l(5,c=((u=o==null?void 0:o.image)==null?void 0:u.uri)??""),s.$$.dirty&130&&l(4,D=(o==null?void 0:o.description)??`Watch the ${i} series for exciting inspiration, the latest deals and all that's new from QVC® & HSN® streaming channels.`),s.$$.dirty&130&&l(3,$=`https://plus.qvc.com/series/${oe(i)}/${o==null?void 0:o.id}`),s.$$.dirty&2&&Xe.set(i),s.$$.dirty&512&&f&&((C=f==null?void 0:f.to)==null?void 0:C.url.pathname)!==((O=f==null?void 0:f.from)==null?void 0:O.url.pathname)&&(F=(B=(V=f==null?void 0:f.to)==null?void 0:V.route)==null?void 0:B.id)!=null&&F.includes("series")&&((U=(E=f==null?void 0:f.to)==null?void 0:E.route)==null?void 0:U.id)!==((y=(m=f==null?void 0:f.from)==null?void 0:m.route)==null?void 0:y.id)&&Ye("remove",{keys:["series"]})},[M,i,r,$,D,c,e,o,a,f]}class At extends He{constructor(t){super(),Me(this,t,vt,bt,Qe,{data:0})}}export{At as component,jt as universal};