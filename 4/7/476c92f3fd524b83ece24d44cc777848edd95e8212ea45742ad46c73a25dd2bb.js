(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7877],{22049:function(e,n,t){"use strict";var r=t(48978),i=t(27378),o=t(94993);n.Z=function(e){var n=(0,i.useState)(Date.now()),t=(n[0],n[1]),a=e.items,u=e.hasMore,c=e.data,s=(0,i.useRef)({items:a,hasMore:u,data:c});return{items:s.current.items,hasMore:s.current.hasMore,loadNext:function(){return new Promise((function(n,i){e.loadItems(s.current).then((function(i){var a=i;a.items=(0,o.X1)([].concat((0,r.Z)(s.current.items),(0,r.Z)(i.items)),e.getItemKey),s.current=a,t(Date.now()),n(a)})).catch((function(e){return i(e)}))}))},reset:}},635:function(e,n,t){"use strict";t.d(n,{vX:function(){return r},Ds:function(){return i}});var r,i,o,a=t(27378),u=t(36077),c=t(97458),s=t(81817),l=t(24246);!r||(r={})),i||(i={})),o||(o={}));var d=(0,a.forwardRef)((function(e,n){var t=e.className,r=e.spacing,a=void 0===r?i.NONE:r,d=e.title,f=e.subtitle,v=e.iconName,m=e.imageUrl,p=e.headerNode,y=e.size,g=void 0===y?o.MD:y,h=e.children,b="ds-p-6";switch(a){case i.NONE:b="";break;case i.SM:b="ds-p-4";break;case i.MD:b="ds-p-6";break;case i.LG:b="ds-p-8"}var N=120,x=120,I=s.XR.MD;switch(g){case o.SM:N=80,x=80,I=s.XR.SM;break;case o.MD:N=120,x=120,I=s.XR.MD;break;case o.LG:N=160,x=160,I=s.XR.LG}return(0,l.jsxs)("div",{ref:n,className:"ds-flex ds-flex-col ds-items-center ".concat(b," ").concat(t||""),children:[p||null,m?(0,l.jsx)(c.Z,{url:m,variant:s.N6.SQUARE,size:s.Ui.WIDTH_160,alt:"string"===typeof d?d:"No Result",width:N,height:x}):null,v?(0,l.jsx)(u.ZP,{name:v,size:I}):null,(0,l.jsx)("div",{className:"ds-py-4",children:d}),(0,l.jsx)("div",{children:f}),(0,l.jsx)("div",{children:h})]})}));d.displayName="DSResult",n.ZP=d},26805:function(e,n,t){"use strict";var r=t(27378),i=t(2251),o=t(44757),a=t(54104),u=t(78392),c=t(71244),s=t(4188),l=t(81817),d=t(24246),f=(0,r.forwardRef)((function(e,n){var t=e.className,r=e.topOffset,f=void 0===r?0:r,v=e.label,m=e.visibleOffset,p=e.handleClick,y=(0,c.Z)(n),g=(0,s.Z)((function(){m&&y.current&&(window.scrollY>m?y.current.classList.remove("ds-hidden"):y.current.classList.add("ds-hidden"))}),100);(0,u.Z)((function(){if(m)return document.addEventListener("scroll",g),g(),));return(0,d.jsx)(o.ZP,{className:t,label:v,variant:o.Tu.FLOATING,ref:y,startIcon:{name:i.v.KEYBOARD_UP_SOLID,color:l.BG.PRIMARY},onClick:function(){return(0,a.k3)(f),p&&p(),!1}})}));f.displayName="DSScrollToTop",n.Z=f},67281:function(e,n,t){"use strict";var r=t(27378),i=t(60042),o=t.n(i),a=t(4188),u=t(44387),c=t(26805),s=t(635),l=t(71244),d=t(24246),f=(0,r.forwardRef)((function(e,n){var t=e.id,i=e.className,f=e.lifecycle,v=e.noContentMessage,m=e.loaderMessage,p=e.endMessage,y=e.scrollToTop,g=void 0!==y&&y,h=e.scrollToTopItems,b=void 0===h?10:h,N=e.children,x=(0,l.Z)(n),I=(0,r.useRef)(!1),j=(0,r.useState)(!1),E=j[0],D=j[1],M=(0,r.useRef)(),O=(0,r.useCallback)((function(e){E||(M.current&&M.current.disconnect(),M.current=new IntersectionObserver((function(e){e[0].isIntersecting&&f.hasMore&&T()})),e&&M.current.observe(e))}),[E,f.hasMore]),T=(0,a.Z)((function(){I.current||(I.current=!0,D(!0),f.loadNext().then(())}),300);return(0,d.jsxs)("div",{id:t,className:o()(i),ref:x,children:[f.items.length>0?(0,d.jsx)("div",{children:N}):(0,d.jsx)(s.ZP,{variant:s.vX.NO_CONTENT,title:v}),f.hasMore?(0,d.jsx)("div",{ref:O}):null,E?(0,d.jsx)("div",{className:"ds-flex ds-justify-center ds-my-4",children:(0,d.jsx)(u.ZP,{label:m})}):null,g&&f.items.length>b?(0,d.jsx)("div",{className:"ds-flex ds-justify-center",children:(0,d.jsx)(c.Z,{topOffset:x.current?x.current.offsetTop:0})}):null,p&&f.hasMore?null:(0,d.jsx)("div",{children:p})]})}));f.displayName="DSWDInfiniteScroll",n.Z=f},25867:function(e,n,t){"use strict";var r=t(1717),i=t(31750),o=t(27378),a=t(60042),u=t.n(a),c=t(27693),s=t.n(c),l=t(50348),d=t(10626),f=t(47086),v=t(73627),m=t(16453),p=t(31229),y=t(1319),g=t(7839),h=t(32425),b=t(81817),N=t(62882),x=t(46162),I=t(24246),j=["video","size","variant","contentType","action","override","hide","className","modal","imgVariant","imgSize","imgLazy","onClick","mediaInfo","autoplay","muted","pageData"];Z=function(e){var n,t,r=e.video,a=e.size,c=e.variant,E=e.contentType,M=e.action,O=e.override,T=e.hide,S=e.className,P=e.modal,w=e.imgVariant,L=e.imgSize,C=e.imgLazy,k=e.onClick,Z=e.mediaInfo,_=void 0===Z||Z,R=e.autoplay,V=void 0!==R&&R,A=e.muted,U=e.pageData,G=(0,i.Z)(e,j),z=r.title,Y=r.summary,F=r.genreId,H=r.genreName,B=r.publishedAt,X=r.imageUrl,Q=(0,o.useContext)(y.Z).adVideo,W=null!==(n=null===O||void 0===O?void 0:O.title)&&void 0!==n?n:z,K=null!==(t=null===O||void 0===O?void 0:O.summary)&&void 0!==t?t:Y,$=null!==O&&void 0!==O&&O.imageUrl?null===O||void 0===O?void 0:O.imageUrl:X||void 0,q=[];B&&q.push({label:(0,I.jsx)("time",{children:s()(B).format("MMM DD, YYYY")})});return(0,I.jsx)(x.Z,{video:r,modal:P,autoplay:V,muted:void 0!==A?A:V,userInitiated:!V,className:S,embedPlayerSelector:!1===P?".embedVideoCnt":void 0,children:function(e){return function(e){var n=void 0;_&&(r.origin.type===v.i00.CLIP?n=(0,d.zj)(r.duration):r.origin.type===v.i00.LIVE_STREAM&&(n="LIVE"));var t={type:h.f$.IMAGE_MEDIA,mediaType:b._L.VIDEO,info:n,imageUrl:$||N.DN.LAZYIMAGE_PLACEHOLDER,alt:W||"",variant:w,size:L,lazy:C};return!e.showPlayer||r.origin.type!==v.i00.YOUTUBE&&!1!==P||(t={type:h.f$.NODE,node:(0,I.jsx)("div",{className:"ds-w-full",onClick:children:e.player})}),(0,I.jsx)(g.Z,D(D({className:S,variant:c,size:a,title:null!==T&&void 0!==T&&T.title?void 0:W,description:null!==T&&void 0!==T&&T.description?void 0:K,category:null!==T&&void 0!==T&&T.category?void 0:H||void 0,anchorType:{href:(0,l.Hb)(r),data:D({},M&&{action:M}),onClick:function(){return(!k||!1!==k())&&((0,m.FQ)()&&r.origin.type===v.i00.CLIP?(p.ZP.handleNativeVideoPlayer(D({ad:{video:Q||null},videoId:r.objectId,genreId:F||void 0},U)),!1):void 0!==P?(M&&(0,f.Yg)().trackEvent(M),e.setVideoPlayerState({type:"PLAY",options:{volumeNamespace:"ESPNCricinfoVideoModal",muted:void 0!==A&&A}}),r.origin.type===v.i00.YOUTUBE):void 0)}},contentType:E,media:t,attributes:null!==T&&void 0!==T&&T.attributes?void 0:q},G),{},{mediaContainerClassName:u()(G.mediaContainerClassName,!1===P?"embedVideoCnt":void 0)}))}(e)}})}},46162:function(e,n,t){"use strict";t(27378);var r=t(65218),i=t(73627),o=t(24246),a=(0,r.default)((function(){return t.e(9449).then(t.bind(t,90907))}),{loadableGenerated:{webpack:function(){return[90907]},modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoYouTubeInline"]}}),u=(0,r.default)((function(){return t.e(6955).then(t.bind(t,221))}),{loadableGenerated:{webpack:function(){return[221]},modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoPlayerLiveStream"]}}),c=(0,r.default)((function(){return t.e(6955).then(t.bind(t,785))}),{loadableGenerated:{webpack:function(){return[785]},modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoPlayerDefaultModal"]}}),s=(0,r.default)((,{loadableGenerated:{webpack:modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoPlayerDefaultInline"]}});n.Z=function(e){var n=e.children,t=e.video,r=e.autoplay,l=e.userInitiated,d=e.muted,f=e.modal,v=e.eventHandler,m=e.analytics,p=e.className,y=e.embedPlayerSelector;if(t.origin.type===i.i00.YOUTUBE)return(0,o.jsx)(a,{video:t,autoplay:r,children:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return n(e)}))});if(t.origin.type===i.i00.LIVE_STREAM){var g=t.origin;return(0,o.jsx)(u,{liveStreamId:g.id.trim(),useParentsDimension:!0,children:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return n(e)}))})}return!0===f?(0,o.jsx)(c,{video:t,eventHandler:v,analytics:m,children:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){return n(e)}))}):(0,o.jsx)(s,{video:t,autoplay:r,userInitiated:l,muted:d,eventHandler:v,analytics:m,className:p,embedPlayerSelector:y,children:()})}},50348:function(e,n,t){"use strict";t.d(n,{v9:function(){return i},$x:function(){return o},Hb:function(){return a},UL:function(){return u},mJ:function(){return c}});var r=t(8325),i=o=function(e){return"".concat((0,r.P_)(e)).concat("/cricket-videos","/latest")},a=function(e){return"/cricket-videos/".concat(e.slug,"-").concat(e.objectId)},u=function(e){return"/cricket-videos/genre/".concat(e.slug,"-").concat(e.id)},c=,84371:function(e,n,t){"use strict";t.r(n);var r=t(6952),i=t(88742),o=t.n(i),a=t(27378),u=t(1319),c=t(77215),s=t(96151),l=t(99889),d=t(7757),f=t(58111),v=t(98286),m=t(24439),p=t(16950),y=t(46723),g=t(22049),h=t(67281),b=t(25867),N=t(32425),x=t(81817),I=t(11164),j=t(58331),E=t(73627),D=t(47086),M=t(24246),O=function(e){var n=e.player,t=e.content,i=t.videos,c=t.supportInfo,s=(0,a.useContext)(u.Z),l=s.lang,d=s.country,f=s.device,v=f.isMobile,I=f.screen,O=(0,g.Z)({items:i.results,hasMore:i.results.length<i.total,data:{page:1},loadItems:function(){var e=(0,r.Z)(o().mark((function e(t){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,D.nH)();case 2:return r=e.sent,e.next=5,r.searchVideo({searchMode:E.WsX.RESULT,page:t.data.page+1,records:20,filter:{languages:[],country:d,playerId:n.objectId,lang:l,videoGenreId:null,seriesId:null,teamId:null,globalIndex:null,groundId:null,matchId:null},sort:E.lAc.DATE_DESC});case 5:return a=e.sent,e.abrupt("return",{items:a.results,hasMore:t.items.length+a.results.length<i.total,data:{page:t.data.page+1}});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getItemKey:),T=O.items[0];return(0,M.jsx)(p.Z,{player:n,page:m.Sh.VIDEOS,supportInfo:c,children:(0,M.jsxs)(y.Z,{children:[T?(0,M.jsx)("div",{className:"ds-mb-4 ds-overflow-hidden ds-rounded-xl",children:(0,M.jsx)(b.Z,{video:T,variant:N.YQ.OVERLAY,size:v?I===j.QU.TABLET?N.io.LG:N.io.MD:N.io.LG,imgVariant:x.N6.WIDE,imgSize:x.Ui.COL2_CONTENT_FULL,hide:{description:!0},pageData:{playerId:n.objectId}})}):null,(0,M.jsx)("div",{children:(0,M.jsx)(h.Z,{lifecycle:O,noContentMessage:"No videos available.",scrollToTop:!0,children:(0,M.jsx)("div",{className:"ds-grid lg:ds-grid-cols-3 ds-gap-4",children:O.items.slice(1).map((function(e){return(0,M.jsx)(b.Z,{video:e,variant:N.YQ.BOTTOM,size:v&&I===j.QU.TABLET?N.io.MD:N.io.SM,imgVariant:x.N6.WIDE,imgSize:x.Ui.COL2_CONTENT_1T,hide:{description:I!==j.QU.TABLET},pageData:{playerId:n.objectId}},e.id)}))})})})]})})};O.getMobileAppBar=O.getInitialProps=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.appNextJsContext.country,e.next=3,(0,D.mt)();case 3:return r=e.sent,e.next=6,r.getPlayerVideosPage({languages:[],playerId:Number(n.query.playerId),country:t});case 6:return i=e.sent,(0,s._4)(n,(0,l.Xp)(i.player)),(0,s.es)(n,300),e.abrupt("return",{data:i,layout:{type:c.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!1,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!1,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!1,appStickyAd:!0},ad:(0,d.wF)(i),analytics:(0,f.gB)(i),seo:(0,v.vs)(i)}});case 10:case"end":return e.stop()}}),e)})));return (),n.default=O},65750:4188:function(e,n,t){"use strict";t.d(n,{Z:);var r=t(27378);function i(e,n,t){var i=this,o=(0,r.useRef)(null),a=(0,r.useRef)(0),u=(0,r.useRef)(null),c=(0,r.useRef)([]),s=(0,r.useRef)(),l=(0,r.useRef)(),d=(0,r.useRef)(e),f=(0,r.useRef)(!0);d.current=e;var v=!n&&0!==n&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");n=+n||0;var m=!!(t=t||{}).leading,p=!("trailing"in t)||!!t.trailing,y="maxWait"in t,g=y?Math.max(+t.maxWait||0,n):null;return(0,r.useEffect)((,[]),(0,r.useMemo)((,[m,y,n,g,p,v])}}},);