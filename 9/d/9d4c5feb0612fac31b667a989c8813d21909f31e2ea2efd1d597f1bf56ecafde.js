"use strict";(globalThis.webpackChunkweb=globalThis.webpackChunkweb||[]).push([[4202],{2830:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(7294);const n=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e},s.createElement("path",{d:"M27.5 30v-1.8l4.3-7.1.4-.6.4-.6h-5v-2.1h7.9v1.9L30.8 27c-.1.2-.2.3-.2.5l-.3.4h5.2V30ZM24 26a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM18.3 30.1l-.8-2.5h-4.6l-.9 2.5H9.7L13.9 18h2.7l4.3 12.1Zm-2.6-7.5-.3-1a3 3 0 0 1-.2-1h-.1a16 16 0 0 1-.5 2.1l-1.1 3.1h3.4Z"}))},8065:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(7294);const n=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e},s.createElement("path",{d:"M28 19.4a3.4 3.4 0 0 1-.4 1.8l-1 1.5-1.2 1.2a6.9 6.9 0 0 0-1.1 1.3 4.9 4.9 0 0 0-.6 1.7 4.6 4.6 0 0 0 .3 2.2h-2.4a4.5 4.5 0 0 1-.4-2.4 3.5 3.5 0 0 1 .5-1.8 4 4 0 0 1 1-1.5l1.2-1.2 1-1.2a2.2 2.2 0 0 0 .4-1.3 2 2 0 0 0-.4-1.3 2.9 2.9 0 0 0-1.1-1.1l-1.7-.7-2.1-.4.3-2.2a10.2 10.2 0 0 1 3.2.5l2.5 1.2a8 8 0 0 1 1.5 1.7 4.6 4.6 0 0 1 .5 2Zm-3.4 12.9a1.7 1.7 0 0 1-3.4 0 1.6 1.6 0 0 1 .5-1.1 1.3 1.3 0 0 1 1.2-.5 1.3 1.3 0 0 1 1.2.5 1.6 1.6 0 0 1 .5 1.1Z"}))},6624:(e,t,a)=>{a.d(t,{Z:()=>f});var s=a(7294),n=a(3905),i=a(1842),l=a(131),r=a(4390),c=a(2991),o=a(7963),m=a(5133),d=a(3315),u=a(1082);function E({description:e,longDescription:t,mediumDescription:a,shortDescription:E,image:f,title:b,longTitle:p,mediumTitle:g,shortTitle:h,onClose:x,onVisible:v,button:L,isLoadingEagerly:w=!1,isVisible:y=!0,isTitleVisible:A=!0}){const[N,M]=(0,l.YD)({threshold:.5,triggerOnce:!0}),Z=(0,s.useRef)(null),R=(0,m.ZQ)(Z,p,h,g,b),T=(0,m.ZQ)(Z,t,E,a,e);return(0,s.useEffect)((()=>{y&&M&&v&&v()}),[M,v]),y?s.createElement("div",{className:(0,u.cx)(n.f.base),ref:N},x&&s.createElement(c.z,{type:"text",text:"Banner ausblenden",isIconOnly:!0,iconLeft:s.createElement(r.Z,null),onClick:x}),f&&s.createElement(i.ZP,{...f,isLoadingEagerly:w}),s.createElement("div",{ref:Z},R&&A&&s.createElement("h2",{className:(0,u.cx)(d.H2.base)},R),T&&s.createElement("p",{className:(0,u.cx)(o.P.base)},T),L&&s.createElement(c.z,{...L}))):null}const f=s.memo(E)},7103:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(7294),n=a(3905),i=a(1842),l=a(293),r=a(1543),c=a(1082);function o(){return s.createElement("div",{className:(0,c.cx)(n.f.base)},s.createElement(i.ZP,{ratio:"16x9",isLoading:!0}),s.createElement("div",{className:(0,c.cx)(l.l.base)},s.createElement("span",{className:(0,c.cx)(r.V.base),style:{width:"100%"}}),s.createElement("span",{className:(0,c.cx)(r.V.base),style:{width:"60%"}}),s.createElement("span",{className:(0,c.cx)(r.V.base),style:{width:"60%"}})))}const m=s.memo(o)},3905:(e,t,a)=>{a.d(t,{f:()=>s});const s={base:"b1fgheli"};a(8126)},4622:(e,t,a)=>{a.d(t,{Z:()=>L});var s=a(7294);const n={base:"b1e0pemc",hasLogo:"h1bb6l0a",logoPosition:{left:"lxe27lt",right:"rkpscu7",center:null}},i="bzynspi",l={base:"bxzi0e6",hasNavigation:"hfb5in0",logoPosition:{left:"lt2zqt2",right:"r1dqhq7r",center:null}},r={base:"brvzu8x",titlePosition:{left:"l1jyke2u",right:"rxohhor",center:null},hasNavigation:"hyl1bh2"},c="buj6vz3",o="bfw7v0e",m="b1cm5nwt",d="bt1ztrx";a(4848);var u=a(400),E=a(1842),f=a(7902),b=a(8477),p=a(4398),g=a(1082),h=a(3315),x=a(1543);function v({image:e={},logo:t,logoPosition:a="center",title:v,titleAs:L="h1",subline:w,subtitle:y,titlePosition:A="center",items:N=[],navigationPosition:M="left",scrollEffect:Z="none",buttonItems:R=[],ratio:T="16x7",isLoading:S,maturityRating:k,hasSubtitles:D,hasAudioDescription:P,hasSignLanguage:z,hasOriginalVersion:I,progress:C}){const V=(0,s.useRef)(null);function G(){V.current&&(V.current.style.transform=`translate3d(0, ${window.scrollY/2}px, 0)`)}const _=L;return(0,s.useEffect)((()=>("parallax"===Z&&window.addEventListener("scroll",G),function(){"parallax"===Z&&window.removeEventListener("scroll",G)})),[Z]),s.createElement("header",{className:(0,g.cx)(n.base,!!t&&n.hasLogo,n.logoPosition[a])},s.createElement("div",{className:(0,g.cx)(i),ref:V},S&&s.createElement(E.Ee,{ratio:T,isLoading:!0}),!S&&e&&s.createElement(E.Ee,{ratio:T,...e})),t&&s.createElement("img",{className:(0,g.cx)(l.base,N.length>0&&l.hasNavigation,l.logoPosition[a]),src:t,alt:"Logo"}),(v||w||y||R.length>0||S)&&s.createElement("div",{className:(0,g.cx)(r.base,r.titlePosition[A],N&&N.length>0&&r.hasNavigation)},s.createElement(p.X2,{outerSpace:"wide"},s.createElement(p.sg,{all:12},S&&s.createElement(s.Fragment,null,s.createElement(_,{className:(0,g.cx)(h.H2.base,c)},s.createElement("span",{className:(0,g.cx)(x.V.base),style:{width:"40%",height:"3rem"}}))),!S&&s.createElement(s.Fragment,null,v&&s.createElement(_,{className:(0,g.cx)(h.H2.base,c)},v),w&&s.createElement("span",{className:(0,g.cx)(m)},w),s.createElement(f.Z,{maturityRating:k,hasSubtitles:D,hasSignLanguage:z,hasAudioDescription:P,hasOriginalVersion:I}),C&&s.createElement("div",{className:(0,g.cx)(d)},"number"==typeof C&&s.createElement(b.Z,{progress:C})),y&&s.createElement("p",{className:(0,g.cx)(o)},y),R.length>0&&s.createElement(u.w,{items:R,hasControlledItems:!0}))))),N&&N.length>0&&s.createElement(u.w,{items:N,isSwipeable:!0,accessibility:"menu",alignment:M}))}const L=s.memo(v)},328:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(7294),n=a(3322),i=a(2991),l=a(1082);function r({placeholderCount:e,buttonType:t,alignment:a="left"}){return s.createElement("nav",{className:(0,l.cx)(n.fC.base)},s.createElement("ul",{className:(0,l.cx)(n.W4.base,n.W4.alignment[a])},Array(e).fill(!0).map(((e,a)=>s.createElement("li",{className:(0,l.cx)(n.S$.base,n.S$.isLoading),key:a},s.createElement(i.z,{type:t,text:""}))))))}const c=s.memo(r)},4499:(e,t,a)=>{a.d(t,{Z:()=>p});a(7658);var s=a(7294),n=a(9578),i=a(5680),l=a(221),r=a(188),c=a(869);function o(e,t,a,s){if(s&&s.slides){const t=s.slides;let n,i="aspect16x7";window.innerWidth<=c.J.xs?(n="1x1",i="aspect1x1"):window.innerWidth<=c.J.s?(n="16x9",i="aspect16x9"):(n="16x7",i="aspect16x7");for(const a in t){const s=t[a];if(s.classList&&s.classList.contains("swiper-slide")){const t=s.dataset.swiperSlideIndex,a=s.querySelector("img");if(a){const s=a.classList.contains("swiper-lazy-loaded"),n=e[t]&&e[t].image;let l=n?.src,r=n?.srcset,c=null,o=n?.alt,m=n?.title;if(n&&n[i])l=n[i].src,r=n[i].srcset,c=n[i].sizes,o=n[i].alt,m=n[i].title;else if(n&&n.aspect16x9)l=n.aspect16x9.src,r=n.aspect16x9.srcset,c=n.aspect16x9.sizes,o=n.aspect16x9.alt,m=n.aspect16x9.title;else for(const e in n)n&&n[e]instanceof Object&&(l=n[e].src,r=n[e].srcset,c=n[e].sizes,o=n[e].alt,m=n[e].title);l&&(s&&(a.src=l),a.dataset.src=l||a.src),r&&(s&&(a.srcset=r),a.dataset.srcset=r),a.sizes=c||a.sizes,a.alt=o||a.alt,a.title=m||a.title}}}n&&a(n)}}var m=a(123),d=a(3315),u=a(3483),E=a(1082);function f({id:e,title:t,items:a=[],onTeaserVisible:r,hasAutoplay:c,initialRatio:f,itemAs:b=i.y,isLoading:p,hasDisabledAnimations:g,hasClickEffect:h,clickEffectOffsetY:x}){const v=b,[L,w]=(0,s.useState)((()=>function(e){return e??"16x9"}(f))),y=(0,s.useRef)([]),A=(0,s.useRef)(),N=function(e,t,a,n,i,r,c){return e.map(((e,o)=>s.createElement(l.o5,{key:`${e.id}_${o}`},s.createElement(a,{hasDisabledAnimations:i,hasClickEffect:r,clickEffectOffsetY:c,...e,ratio:t,isLoadingEagerly:0===o,isLoading:n,index:o}))))}(a,L,v,p,g,h,x),M=(0,s.useCallback)((()=>{if(A.current){const e=A.current?.realIndex;r&&!y.current.includes(e)&&a[e]&&(r(a[e].index??e),y.current.push(e))}}),[y,r,a]);return(0,s.useEffect)((()=>{A.current&&(o(a,0,w,A.current),A.current.update())}),[N]),(0,s.useEffect)((()=>(A.current?.on("slideChange",M),()=>{A.current?.off("slideChange",M)})),[M,A]),(0,s.useEffect)((()=>{!p&&a.length>0&&M()}),[a,p]),s.createElement("section",{className:(0,E.cx)(n.fC.base)},t&&s.createElement("span",{className:(0,E.cx)(u.Z.base)},s.createElement("h1",{className:(0,E.cx)(d.H2.base)},t)),s.createElement(l.tq,{spaceBetween:50,slidesPerView:1,watchSlidesProgress:!0,navigation:a.length>1?{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}:{nextEl:null,prevEl:null},pagination:a.length>1&&{type:"bullets",clickable:!1,dynamicBullets:!0,dynamicMainBullets:3},allowSlideNext:a.length>1,allowSlidePrev:a.length>1,lazy:{loadPrevNext:!0,loadOnTransitionStart:!0},autoplay:!!(c&&a.length>1)&&{delay:7e3},loop:!0,effect:"fade",onInit:e=>{A.current=e,setTimeout((()=>{o(a,0,w,e)}),1e3)},onResize:e=>o(a,0,w,e),onOrientationchange:e=>{o(a,0,w,e)},threshold:5},N,a.length>1&&s.createElement(s.Fragment,null,s.createElement(m.Z,{direction:"right"}),s.createElement(m.Z,{direction:"left"}))))}r.ZP.use([r.W_,r.tl,r.s5,r.xW,r.oM,r.pt]);const b=s.memo(f);b.Teaser=i.y;const p=b},440:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(7294),n=a(9578),i=a(5680),l=a(123),r=a(1082);function c(){return s.createElement("section",{className:(0,r.cx)(n.fC.base)},s.createElement("div",{className:"swiper swiper-initialized"},s.createElement("div",{className:"swiper-wrapper"},s.createElement("div",{className:"swiper-slide"},s.createElement(i.y,null))),s.createElement(l.Z,{direction:"right"}),s.createElement(l.Z,{direction:"left"})))}const o=s.memo(c)},9493:(e,t,a)=>{a.d(t,{Ge:()=>E,ZP:()=>b});var s=a(7294),n=a(5721),i=a(3315),l=a(6825),r=a(7208),c=a(8423),o=a(5783),m=a(1082),d=a(1543),u=a(3483);function E(e){return{from:{opacity:0},to:{opacity:1},config:{duration:200,easing:r.Vv},immediate:e}}function f(e){const{id:t,title:a,hasVisibleTitle:r=!0,titleLink:f,type:b="default",ratio:p="16x9",items:g,hasDisabledAnimations:h,isLoading:x,hasInitAnimation:v=!0}=e,L=h||!v,w=(0,c.Z)(E(L));return s.createElement("section",{className:(0,m.cx)(n.fC.base,n.fC.type[b]?.base,"default"===b&&n.fC.type.default.ratio[p])},a&&r&&!f&&s.createElement(l.animated.span,{style:w},s.createElement("h2",{className:(0,m.cx)(i.H2.base)},a)),a&&r&&f&&s.createElement("a",{href:f},s.createElement(l.animated.span,{style:w},s.createElement("h2",{className:(0,m.cx)(i.H2.base)},a))),a&&!r&&s.createElement("span",{className:(0,m.cx)(u.Z.base)},s.createElement("h2",{className:(0,m.cx)(i.H2.base)},a)),!a&&r&&x&&s.createElement(l.animated.span,{style:w},s.createElement("h2",{className:(0,m.cx)(i.H2.base,n.Rk.base)},s.createElement("span",{className:(0,m.cx)(d.V.base,n.T9.base),style:{width:"30%"}}),s.createElement("span",{className:(0,m.cx)(n.Tv.base)},"Wird geladen..."))),g.length>0?s.createElement(o.Z,{...e}):s.createElement("h4",{className:(0,m.cx)(i.H4.base)},"Keine Inhalte verfügbar"))}const b=s.memo(f)},5547:(e,t,a)=>{a.d(t,{Z:()=>f});var s=a(7294),n=a(5721),i=a(7454),l=a(6825),r=a(8423),c=a(9493),o=a(5783),m=a(1082),d=a(3315),u=a(1543);function E({ratio:e="16x9",items:t,hasVisibleTitle:a,hasDisabledAnimations:E,hasInitAnimation:f=!0,type:b="default"}){const p=E||!f,g=(0,r.Z)((0,c.Ge)(p)),h=(0,r.Z)((0,o.K)(p));return s.createElement("section",{className:(0,m.cx)(n.fC.base,n.fC.type[b]?.base,"default"===b&&n.fC.type.default.ratio[e])},a&&s.createElement(l.animated.span,{style:g},s.createElement("h2",{className:(0,m.cx)(d.H2.base,n.Rk.base)},s.createElement("span",{className:(0,m.cx)(u.V.base,n.T9.base),style:{width:"30%"}}),s.createElement("span",{className:(0,m.cx)(n.Tv.base)},"Wird geladen..."))),s.createElement(l.animated.div,{className:(0,m.cx)(n.mn.base),style:h},s.createElement("div",{className:"swiper"},s.createElement("div",{className:"swiper-wrapper"},t.map(((e,t)=>s.createElement("div",{className:"swiper-slide",key:t},s.createElement(i.d,{...e}))))))))}const f=s.memo(E)},5783:(e,t,a)=>{a.d(t,{Z:()=>y,K:()=>w});var s=a(5721),n=a(919),i=a(7294),l=a(869);const r=Object.freeze({EXTRA_SMALL:l.J.xs+1,SMALL:l.J.s+1,MEDIUM:l.J.m+1,MEDIUM_LARGE:l.J["m-l"]+1,LARGE:l.J.l+1,EXTRA_LARGE:l.J.xl+1}),c=Object.freeze({...r,DEFAULT:"default"}),o=Object.freeze({[c.EXTRA_SMALL]:8,[c.SMALL]:16,[c.MEDIUM]:16,[c.MEDIUM_LARGE]:16,[c.LARGE]:16,[c.EXTRA_LARGE]:16,[c.DEFAULT]:8}),m=Object.freeze({"16x9":{[c.EXTRA_SMALL]:2.5,[c.SMALL]:3.5,[c.MEDIUM]:4.5,[c.MEDIUM_LARGE]:5.5,[c.LARGE]:5.5,[c.EXTRA_LARGE]:5.5,[c.DEFAULT]:1.5},"3x4":{[c.EXTRA_SMALL]:3.5,[c.SMALL]:4.5,[c.MEDIUM]:5.5,[c.MEDIUM_LARGE]:6.5,[c.LARGE]:7.5,[c.EXTRA_LARGE]:7.5,[c.DEFAULT]:2.5},"24x9":{[c.EXTRA_SMALL]:1.5,[c.SMALL]:2.5,[c.MEDIUM]:2.5,[c.MEDIUM_LARGE]:2.5,[c.LARGE]:3.3,[c.EXTRA_LARGE]:3.3,[c.DEFAULT]:1.25},"1x1":{[c.EXTRA_SMALL]:3.5,[c.SMALL]:5.5,[c.MEDIUM]:5.5,[c.MEDIUM_LARGE]:6.5,[c.LARGE]:6.5,[c.EXTRA_LARGE]:6.5,[c.DEFAULT]:2.25}});const d=function(e,t){const a=function(e){const t={};return Object.values(r).forEach((a=>{t[a]={slidesPerView:m[e][a],slidesPerGroup:Math.floor(m[e][a]),spaceBetween:o[a]}})),{slidesPerView:m[e].default,slidesPerGroup:Math.floor(m[e].default),spaceBetween:o[c.DEFAULT],breakpoints:t}}(t=t||"16x9");return"dynamic"===e&&function(e){e.slidesPerView=Math.floor(e.slidesPerView),e.slidesPerGroup=Math.floor(e.slidesPerGroup);for(const t in e.breakpoints){const a=e.breakpoints[t];a.slidesPerView=Math.floor(a.slidesPerView),a.slidesPerGroup=Math.floor(a.slidesPerGroup)}}(a),[a,`${e}:${t}`]};var u=a(8423),E=a(188),f=a(5201),b=a(221),p=a(7208),g=a(1082),h=a(6825),x=a(3483);E.ZP.use([E.s5,E.N1,E.W_,E.LW,E.eZ]);const v={addSlidesBefore:2,addSlidesAfter:2};function L(e,t,a){a&&a!==e&&t(a)}function w(e){return{from:{opacity:0,transform:"scale(0.9)"},to:{opacity:1,transform:"scale(1)"},config:{duration:200,easing:p.Vv},immediate:e}}const y=function({type:e="default",ratio:t="16x9",hoverEffect:a="default",items:l,hasVirtualSlides:r=!1,hasDisabledAnimations:c=!1,itemAs:o=f.Z,isLoading:m,hasInitAnimation:E=!0,activeIndex:p,onActiveIndexChange:y}){const A=(0,i.useRef)(r).current,[N,M]=(0,i.useState)(t||"16x9"),Z=(0,i.useRef)(null),[R,T]=(0,i.useState)(),S=c||!E,k=(0,u.Z)(w(S)),[D,P]=d(e,t),z=function(e,t,a,s,n,l,r){const c=t;return(0,i.useMemo)((()=>e.map(((e,t)=>i.createElement(b.o5,{key:t,virtualIndex:s?t:void 0},i.createElement(c,{ratio:a,index:t,hasDisabledAnimations:n,isLoading:r||e.isLoading,hoverEffect:l,isLoadingEagerly:s,...e}))))),[r,e,s,a])}(l,o,N,A,c,a,m);(0,i.useEffect)((()=>{!function(e,t){if(e.current&&!t){e.current.style.willChange="transform, opacity, contents";const t=setTimeout((()=>{e.current&&(e.current.style.willChange="auto")}),2e3)}}(Z,S)}),[]);const I=function(e){return(0,i.useCallback)((()=>{e&&e.keyboard.enable()}),[e])}(R),C=function(e){return(0,i.useCallback)((()=>{e&&e.keyboard.disable()}),[e])}(R);return(0,i.useEffect)((()=>function(e,t,a){return a&&!a.destroyed&&(a.el.addEventListener("focusin",e),a.el.addEventListener("focusout",t),a.on("beforeDestroy",(()=>{a.el.removeEventListener("focusin",e),a.el.removeEventListener("focusout",t)}))),function(){a&&!a.destroyed&&(a.el.removeEventListener("focusin",e),a.el.removeEventListener("focusout",t),a.off("beforeDestroy"),a.off("slideChangeTransitionStart"),a.off("slideChangeTransitionEnd"))}}(I,C,R)),[R,I,C]),i.createElement(i.Fragment,null,i.createElement("span",{className:(0,g.cx)(x.Z.base)},"Liste mit ",l.length," Einträgen"),i.createElement(h.animated.div,{className:(0,g.cx)(s.mn.base),style:k,ref:Z},i.createElement(b.tq,{onSwiper:e=>{T(e),A&&e.virtual.update(!1)},key:P,keyboard:{enabled:!1},roundLengths:!0,a11y:{firstSlideMessage:"Erster Eintrag",lastSlideMessage:"Letzter Eintrag",prevSlideMessage:"Vorheriger Eintrag",nextSlideMessage:"Nächster Eintrag"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},threshold:20,initialSlide:p,speed:200,scrollbar:{el:".swiper-scrollbar",hide:!0,draggable:!0},...D,slidesOffsetAfter:"default"===e?62:void 0,virtual:!!A&&v,onResize:()=>{L(N,M,t)},onOrientationchange:()=>{L(N,M,t)},onActiveIndexChange:e=>y&&y({activeIndex:e.activeIndex})},z,i.createElement("div",{className:"swiper-scrollbar"}),i.createElement(n.Z,{direction:"right"}),i.createElement(n.Z,{direction:"left"}))))}},5721:(e,t,a)=>{a.d(t,{Rk:()=>l,T9:()=>i,Tv:()=>r,fC:()=>s,mn:()=>n});const s={base:"b19rpejl",type:{default:{base:"b16odzls",ratio:{"1x1":"_vugb4y","3x4":"_1o7e715","16x9":"_1d954ko","24x9":"_w08zxu"}},dynamic:null}},n={base:"bioomuv"},i={base:"b1ggmje9"},l={base:"bwk63ra"},r={base:"b1dscrpg"};a(6471)},919:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(7294);const n="b177ej76",i={base:"b1gmk5lf",isVisible:"ik4r3ey",direction:{right:"r1vr8gzq",left:"lfoikzm"}};a(2395);var l=a(8591),r=a(1082);const c=function({direction:e="right",isVisible:t=!1,role:a="button",swiperId:c}){const o="right"===e?"next":"prev";let m=`swiper-button-${o}`;if(c){m+=" "+`swiper-${c?c+"-":"-"}button-${o}`}return s.createElement("div",{className:(0,r.cx)(i.base,t&&i.isVisible,i.direction[e],m),role:a},s.createElement("div",{className:(0,r.cx)(n)},s.createElement(l.Z,null)))}},123:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(7294);const n={base:"b15qf0bn",direction:{left:"l12ecqxa",right:"r1gzyv4s"}},i={base:"buigq00",direction:{left:"ln7tz9e",right:"r1bgo84x"}};a(9982);var l=a(8591),r=a(1082);const c=function({direction:e="right",role:t="button",swiperId:a}){const c="right"===e?"next":"prev";let o=`swiper-button-${c}`;if(a){o+=" "+`swiper-${a?a+"-":"-"}button-${c}`}return s.createElement("div",{className:(0,r.cx)(i.base,i.direction[e],o),role:t},s.createElement("div",{className:(0,r.cx)(n.base,n.direction[e])},s.createElement(l.Z,null)))}},8126:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},4848:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},6471:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},2395:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},9982:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"}}]);