(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8092],{22049:function(e,n,r){"use strict";var t=r(48978),s=r(27378),i=r(94993);n.Z=function(e){var n=(0,s.useState)(Date.now()),r=(n[0],n[1]),a=e.items,c=e.hasMore,u=e.data,o=(0,s.useRef)({items:a,hasMore:c,data:u});return{items:o.current.items,hasMore:o.current.hasMore,loadNext:function(){return new Promise((function(n,s){e.loadItems(o.current).then((function(s){var a=s;a.items=(0,i.X1)([].concat((0,t.Z)(o.current.items),(0,t.Z)(s.items)),e.getItemKey),o.current=a,r(Date.now()),n(a)})).catch(()}))},reset:}},635:function(e,n,r){"use strict";r.d(n,{vX:function(){return t},Ds:function(){return s}});var t,s,i,a=r(27378),c=r(36077),u=r(97458),o=r(81817),l=r(24246);!t||(t={})),s||(s={})),i||(i={}));var d=(0,a.forwardRef)((function(e,n){var r=e.className,t=e.spacing,a=void 0===t?s.NONE:t,d=e.title,f=e.subtitle,m=e.iconName,h=e.imageUrl,v=e.headerNode,x=e.size,p=void 0===x?i.MD:x,g=e.children,N="ds-p-6";switch(a){case s.NONE:N="";break;case s.SM:N="ds-p-4";break;case s.MD:N="ds-p-6";break;case s.LG:N="ds-p-8"}var j=120,Z=120,T=o.XR.MD;switch(p){case i.SM:j=80,Z=80,T=o.XR.SM;break;case i.MD:j=120,Z=120,T=o.XR.MD;break;case i.LG:j=160,Z=160,T=o.XR.LG}return(0,l.jsxs)("div",{ref:n,className:"ds-flex ds-flex-col ds-items-center ".concat(N," ").concat(r||""),children:[v||null,h?(0,l.jsx)(u.Z,{url:h,variant:o.N6.SQUARE,size:o.Ui.WIDTH_160,alt:"string"===typeof d?d:"No Result",width:j,height:Z}):null,m?(0,l.jsx)(c.ZP,{name:m,size:T}):null,(0,l.jsx)("div",{className:"ds-py-4",children:d}),(0,l.jsx)("div",{children:f}),(0,l.jsx)("div",{children:g})]})}));d.displayName="DSResult",n.ZP=d},26805:function(e,n,r){"use strict";var t=r(27378),s=r(2251),i=r(44757),a=r(54104),c=r(78392),u=r(71244),o=r(4188),l=r(81817),d=r(24246),f=(0,t.forwardRef)((function(e,n){var r=e.className,t=e.topOffset,f=void 0===t?0:t,m=e.label,h=e.visibleOffset,v=e.handleClick,x=(0,u.Z)(n),p=(0,o.Z)((function(){h&&x.current&&(window.scrollY>h?x.current.classList.remove("ds-hidden"):x.current.classList.add("ds-hidden"))}),100);(0,c.Z)((function(){if(h)return document.addEventListener("scroll",p),p(),));return(0,d.jsx)(i.ZP,{className:r,label:m,variant:i.Tu.FLOATING,ref:x,startIcon:{name:s.v.KEYBOARD_UP_SOLID,color:l.BG.PRIMARY},onClick:function(){return(0,a.k3)(f),v&&v(),!1}})}));f.displayName="DSScrollToTop",n.Z=f},67281:function(e,n,r){"use strict";var t=r(27378),s=r(60042),i=r.n(s),a=r(4188),c=r(44387),u=r(26805),o=r(635),l=r(71244),d=r(24246),f=(0,t.forwardRef)((function(e,n){var r=e.id,s=e.className,f=e.lifecycle,m=e.noContentMessage,h=e.loaderMessage,v=e.endMessage,x=e.scrollToTop,p=void 0!==x&&x,g=e.scrollToTopItems,N=void 0===g?10:g,j=e.children,Z=(0,l.Z)(n),T=(0,t.useRef)(!1),M=(0,t.useState)(!1),b=M[0],I=M[1],E=(0,t.useRef)(),w=(0,t.useCallback)((function(e){b||(E.current&&E.current.disconnect(),E.current=new IntersectionObserver((function(e){e[0].isIntersecting&&f.hasMore&&L()})),e&&E.current.observe(e))}),[b,f.hasMore]),L=(0,a.Z)((function(){T.current||(T.current=!0,I(!0),f.loadNext().then(())}),300);return(0,d.jsxs)("div",{id:r,className:i()(s),ref:Z,children:[f.items.length>0?(0,d.jsx)("div",{children:j}):(0,d.jsx)(o.ZP,{variant:o.vX.NO_CONTENT,title:m}),f.hasMore?(0,d.jsx)("div",{ref:w}):null,b?(0,d.jsx)("div",{className:"ds-flex ds-justify-center ds-my-4",children:(0,d.jsx)(c.ZP,{label:h})}):null,p&&f.items.length>N?(0,d.jsx)("div",{className:"ds-flex ds-justify-center",children:(0,d.jsx)(u.Z,{topOffset:Z.current?Z.current.offsetTop:0})}):null,v&&f.hasMore?null:(0,d.jsx)("div",{children:v})]})}));f.displayName="DSWDInfiniteScroll",n.Z=f},59385:function(e,n,r){"use strict";r.r(n);var t=r(40479),s=r(28789),i=r(6952),a=r(88742),c=r.n(a),u=r(27378),o=r(60042),l=r.n(o),d=r(1319),f=r(65349),m=r(77215),h=r(65057),v=r(17809),x=r(96151),p=r(69604),g=r(47083),N=r(31045),j=r(46723),Z=r(31283),T=r(9009),M=r(76278),b=r(67281),I=r(22049),E=r(7413),w=r(8367),L=r(56312),S=r(84789),y=r(58331),O=r(73627),D=r(47086),G=r(3366),R=r(32425),_=r(5273),k=r(81817),C=r(25867),V=r(24246),P=function(e){var n=e.featuredVideoGenres,r=e.data.content,t=(0,u.useContext)(d.Z),a=t.country,o=t.device,m=o.isMobile,x=o.screen,p=t.lang,g=r.videos,N=r.trendingVideos,E=(0,I.Z)({items:g.results,hasMore:g.results.length<g.total,data:{page:1},loadItems:function(){var e=(0,i.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,D.nH)();case 2:return r=e.sent,e.next=5,r.searchVideo({searchMode:O.WsX.RESULT,page:n.data.page+1,records:10,filter:{languages:p===O.IBh.ENGLISH?[]:[p],country:a,globalIndex:!0,videoGenreId:null,lang:null,seriesId:null,teamId:null,playerId:null,groundId:null,matchId:null},sort:O.lAc.DATE_DESC});case 5:return t=e.sent,e.abrupt("return",{items:t.results,hasMore:n.items.length+t.results.length<g.total,data:{page:n.data.page+1}});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getItemKey:),w=E.items.slice(0,4),G=(0,s.Z)(w),P=G[0],A=G.slice(1),U=E.items.slice(4);return(0,V.jsxs)(j.Z,{className:"ds-pt-4",children:[(0,V.jsx)(Z.Z,{app:!0,match:Z.d.NEGATIVE,children:(0,V.jsx)(h.Z,{className:"ds-mb-2"})}),(0,V.jsxs)(T.Z,{children:[(0,V.jsxs)(T.Z.Left,{children:[N.length>0?(0,V.jsx)("div",{className:"ds-mb-4",children:(0,V.jsx)(M.Z,{trendingVideos:N})}):null,(0,V.jsxs)("div",{children:[(0,V.jsx)(v.Z,{pageUnitId:"incontent",className:"ds-mb-4"}),(0,V.jsx)(v.Z,{pageUnitId:"incontentRoW",className:"ds-mb-4"})]})]}),(0,V.jsx)(T.Z.Content,{className:l()({"ds-px-2":m}),children:(0,V.jsxs)(b.Z,{lifecycle:E,noContentMessage:"Videos are not yet published",scrollToTop:!0,children:[P?(0,V.jsx)("div",{className:"ds-mb-4 ds-overflow-hidden ds-rounded-xl",children:(0,V.jsx)(C.Z,{video:P,variant:R.YQ.OVERLAY,size:m?x===y.QU.TABLET?R.io.LG:R.io.MD:R.io.LG,imgVariant:k.N6.WIDE,imgSize:k.Ui.COL1_CONTENT_FULL,hide:{category:!0,description:!0}})}):null,A.length>0?(0,V.jsx)("div",{children:(0,V.jsx)("div",{className:"ds-mb-4",children:m?(0,V.jsx)(S.Z,{children:A.map((function(e){return(0,V.jsx)("div",{className:"ds-pr-2 ds-w-3/4",children:(0,V.jsx)(C.Z,{video:e,variant:R.YQ.BOTTOM,size:R.io.SM,imgVariant:k.N6.WIDE,imgSize:k.Ui.COL1_CONTENT_1F,className:"ds-w-60",hide:{category:!0,description:!0}})},e.id)}))}):(0,V.jsx)(L.Z,{slidesToScroll:3,slidesToShow:3,fixedSlideWidth:!0,children:A.map((function(e){return(0,V.jsx)("div",{className:"ds-pr-2",children:(0,V.jsx)(C.Z,{video:e,variant:R.YQ.BOTTOM,size:R.io.SM,imgVariant:k.N6.WIDE,imgSize:k.Ui.COL1_CONTENT_1F,hide:{category:!0,description:!0}})},e.id)}))})})}):null,n.length>0?(0,V.jsxs)("div",{className:"ds-mb-4",children:[(0,V.jsx)(_.Z,{element:"h3",className:"ds-mb-4",variant:k.Fu.TITLE_L,children:"ESPNcricinfo shows"}),(0,V.jsx)(f.Z,{featuredVideoGenres:n})]}):null,(0,V.jsxs)(Z.Z,{isMobile:!0,children:[N.length>0?(0,V.jsx)("div",{className:"ds-mb-4",children:(0,V.jsx)(M.Z,{trendingVideos:N,sidebar:!1})}):null,(0,V.jsx)(v.Z,{pageUnitId:"incontent",className:"ds-mb-4"}),(0,V.jsx)(v.Z,{pageUnitId:"incontentRoW",className:"ds-mb-4"})]}),U.length>0?(0,V.jsx)("div",{className:"ds-grid lg:ds-grid-cols-3 ds-gap-4",children:U.map((function(e){return(0,V.jsx)("div",{children:(0,V.jsx)(C.Z,{video:e,variant:R.YQ.BOTTOM,size:R.io.SM,imgVariant:k.N6.WIDE,imgSize:k.Ui.COL2_CONTENT_1T,hide:{category:!0,description:!0}})},e.id)}))}):null]})})]})]})};P.getDesktopSubHeader=function(e){var n=e.featuredVideoGenres;return(0,V.jsx)(E.Z,{videoIndexPage:!1,featuredVideoGenres:n,videoGenre:null})},P.getMobileAppBar=function(e){var n=e.featuredVideoGenres;return(0,V.jsx)(w.Z,{videoIndexPage:!1,featuredVideoGenres:n,videoGenre:null})},P.getInitialProps=function(){var e=(0,i.Z)(c().mark((function e(n){var r,s,i,a,u,o,l,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.appNextJsContext.lang,s=n.appNextJsContext.country,(i=(0,G.T)(r)).featuredVideoGenres=!0,e.next=6,(0,D.nH)();case 6:return a=e.sent,e.t0=Promise,e.next=10,a.getVideoIndexLatestPage({languages:r===O.IBh.ENGLISH?[]:[r],country:s});case 10:return e.t1=e.sent,e.next=13,(0,D.JI)().getGlobalDetails(i);case 13:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=17,e.t0.all.call(e.t0,e.t3);case 17:return u=e.sent,o=(0,t.Z)(u,2),l=o[0],d=o[1].featuredVideoGenres,(0,x.es)(n,600),e.abrupt("return",{data:{featuredVideoGenres:d,data:l},layout:{type:m.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!1,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!1,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!1,appStickyAd:!0},ad:(0,p.ri)(l),analytics:(0,g.t6)(l),seo:(0,N.rG)(l,{lang:r})}});case 23:case"end":return e.stop()}}),e)})));return (),n.default=P},85810:4188:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(27378);function s(e,n,r){var s=this,i=(0,t.useRef)(null),a=(0,t.useRef)(0),c=(0,t.useRef)(null),u=(0,t.useRef)([]),o=(0,t.useRef)(),l=(0,t.useRef)(),d=(0,t.useRef)(e),f=(0,t.useRef)(!0);d.current=e;var m=!n&&0!==n&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");n=+n||0;var h=!!(r=r||{}).leading,v=!("trailing"in r)||!!r.trailing,x="maxWait"in r,p=x?Math.max(+r.maxWait||0,n):null;return(0,t.useEffect)((,[]),(0,t.useMemo)((,[h,x,n,p,v,m])}},28789:,);