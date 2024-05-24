"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4386],{32425:function(e,t,n){var i,r,o,a,u,c,l,d,s,f;n.d(t,{MM:function(){return i},sA:function(){return r},io:function(){return o},YQ:function(){return a},f$:function(){return u},xx:function(){return c},ye:function(){return l},Kv:function(){return d},tC:function(){return s},Uv:function(){return f}}),function(e){e.XXS="XXS",e.XS="XS",e.SM="SM",e.MD="MD",e.MD_LG="MD_LG",e.LG="LG"}(i||(i={})),function(e){e.DEFAULT="DEFAULT",e.DARK="DARK"}(r||(r={})),o||(o={})),function(e){e.OVERLAY="OVERLAY",e.BOTTOM="BOTTOM",e.LEFT="LEFT",e.RIGHT="RIGHT"}(a||(a={})),function(e){e.IMAGE="IMAGE",e.IMAGE_MEDIA="IMAGE_MEDIA",e.NODE="NODE"}(u||(u={})),function(e){e.DEFAULT="DEFAULT",e.FEATURED="FEATURED"}(c||(c={})),function(e){e.OVERLAY="OVERLAY",e.BOTTOM="BOTTOM",e.LEFT="LEFT",e.RIGHT="RIGHT"}(l||(l={})),function(e){e.IMAGE="IMAGE",e.IMAGE_MEDIA="IMAGE_MEDIA",e.NODE="NODE"}(d||(d={})),s||(s={})),f||(f={}))},91681:function(e,t,n){n.r(t),n.d(t,{CiMatchRecentStoryType:function(){return i}});var i,r=n(60042),o=n.n(r),a=n(27378),u=n(27693),c=n.n(u),l=n(43083),d=n(1319),s=n(47086),f=n(56528),v=n(25867),m=n(92572),y=n(36786),p=n(15140),E=n(58331),O=n(36223),g=n(32425),b=n(81817),h=n(24246);!i||(i={}));t.default=function(e){var t=e.match,n=e.story,r=e.matchRecentStoryType,u=n.video,D=(0,a.useContext)(d.Z),M=D.lang,L=D.country,T=D.device,I=T.isMobile,S=T.screen,P=(0,a.useContext)(p.ZP).handleNavigation,j=r===i.PREVIEW?(0,m.RO)(M,t):(0,m.B_)(M,t);return(0,h.jsx)(l.ZP,{className:o()("ds-mb-4"),children:(0,h.jsx)(l.ZP.Content,{children:u&&(0,s.zC)(u.countryCodes,L)?(0,h.jsxs)("section",{children:[(0,h.jsx)(v.Z,{variant:S===E.QU.DESKTOP_LG?g.YQ.LEFT:g.YQ.BOTTOM,size:I?g.io.SM:g.io.XXL,imgVariant:b.N6.WIDE,imgSize:b.Ui.COL2_CONTENT_HALF,video:u,hide:{category:!0,title:I,description:I,attributes:I},override:{title:n.title,summary:n.summary,imageUrl:null},modal:I,autoplay:!I,onClick:I?void 0:pageData:{matchId:t.objectId}},u.id),I?(0,h.jsx)(O.Z,{size:g.MM.XS,title:(0,h.jsx)(y.Z,{href:j,children:n.title}),description:n.summary,attributes:[{label:(0,h.jsx)("time",{children:c()(n.publishedAt).format("MMM DD, YYYY")})}],className:"ds-mt-2"}):null]}):(0,h.jsx)(f.Z,{variant:S===E.QU.DESKTOP_LG?g.YQ.LEFT:g.YQ.BOTTOM,size:I?g.io.SM:g.io.XXL,imgVariant:b.N6.WIDE,imgSize:b.Ui.COL2_CONTENT_HALF,story:n,anchorUrl:r===i.REPORT?(0,m.B_)(M,t):(0,m.RO)(M,t),hide:{category:!0}},n.id)})})}},56528:function(e,t,n){var i=n(1717),r=n(31750),o=(n(27378),n(69731)),a=n(78364),u=n(16311),c=n(73627),l=n(7839),d=n(32425),s=n(81817),f=n(62882),v=n(22e3),m=n(24246),y=["story","anchorUrl","size","variant","contentType","action","override","hide","className","imgVariant","imgSize","imgLazy","onClick"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t,n,i=e.story,p=e.anchorUrl,O=e.size,g=e.variant,b=e.contentType,h=e.action,D=e.override,M=e.hide,L=e.className,T=e.imgVariant,I=e.imgSize,S=e.imgLazy,P=e.onClick,j=(0,r.Z)(e,y),A=i.title,C=i.summary,N=i.image,U=i.byline,R=null!==(t=null===D||void 0===D?void 0:D.title)&&void 0!==t?t:A,G=null!==(n=null===D||void 0===D?void 0:D.summary)&&void 0!==n?n:C,V=null!==D&&void 0!==D&&D.imageUrl?null===D||void 0===D?void 0:D.imageUrl:N?(0,a.lX)(N,T===s.N6.SQUARE?c.rh3.SQUARE:c.rh3.WIDE):f.DN.THUMBNAIL_PLACEHOLDER,x={type:d.f$.IMAGE,imageUrl:V,alt:R,variant:T,size:I,lazy:S},z=[{label:i.categoryType!==c.ux$.OTD?(0,v.vl)(i):""}];return U&&z.push({label:U}),(0,m.jsx)(l.Z,E({variant:g,size:O,title:null!==M&&void 0!==M&&M.title?void 0:R,description:null!==M&&void 0!==M&&M.description?void 0:G?(0,m.jsx)(u.Z,{element:"div",html:G}):void 0,anchorType:{href:p||(0,o.S1)(i),data:E({},h&&{action:h}),onClick:P},contentType:b,media:x,attributes:null!==M&&void 0!==M&&M.attributes?void 0:z,className:L},j))}},25867:function(e,t,n){var i=n(1717),r=n(31750),o=n(27378),a=n(60042),u=n.n(a),c=n(27693),l=n.n(c),d=n(50348),s=n(10626),f=n(47086),v=n(73627),m=n(16453),y=n(31229),p=n(1319),E=n(7839),O=n(32425),g=n(81817),b=n(62882),h=n(46162),D=n(24246),M=["video","size","variant","contentType","action","override","hide","className","modal","imgVariant","imgSize","imgLazy","onClick","mediaInfo","autoplay","muted","pageData"];Z=function(e){var t,n,i=e.video,a=e.size,c=e.variant,L=e.contentType,I=e.action,S=e.override,P=e.hide,j=e.className,A=e.modal,C=e.imgVariant,N=e.imgSize,U=e.imgLazy,R=e.onClick,G=e.mediaInfo,V=void 0===G||G,x=e.autoplay,z=void 0!==x&&x,_=e.muted,Y=e.pageData,k=(0,r.Z)(e,M),X=i.title,Z=i.summary,w=i.genreId,F=i.genreName,B=i.publishedAt,H=i.imageUrl,Q=(0,o.useContext)(p.Z).adVideo,W=null!==(t=null===S||void 0===S?void 0:S.title)&&void 0!==t?t:X,$=null!==(n=null===S||void 0===S?void 0:S.summary)&&void 0!==n?n:Z,K=null!==S&&void 0!==S&&S.imageUrl?null===S||void 0===S?void 0:S.imageUrl:H||void 0,J=[];B&&J.push({label:(0,D.jsx)("time",{children:l()(B).format("MMM DD, YYYY")})});return(0,D.jsx)(h.Z,{video:i,modal:A,autoplay:z,muted:void 0!==_?_:z,userInitiated:!z,className:j,embedPlayerSelector:!1===A?".embedVideoCnt":void 0,children:function(e){return function(e){var t=void 0;V&&(i.origin.type===v.i00.CLIP?t=(0,s.zj)(i.duration):i.origin.type===v.i00.LIVE_STREAM&&(t="LIVE"));var n={type:O.f$.IMAGE_MEDIA,mediaType:g._L.VIDEO,info:t,imageUrl:K||b.DN.LAZYIMAGE_PLACEHOLDER,alt:W||"",variant:C,size:N,lazy:U};return!e.showPlayer||i.origin.type!==v.i00.YOUTUBE&&!1!==A||(n={type:O.f$.NODE,node:(0,D.jsx)("div",{className:"ds-w-full",onClick:children:e.player})}),(0,D.jsx)(E.Z,T(T({className:j,variant:c,size:a,title:null!==P&&void 0!==P&&P.title?void 0:W,description:null!==P&&void 0!==P&&P.description?void 0:$,category:null!==P&&void 0!==P&&P.category?void 0:F||void 0,anchorType:{href:(0,d.Hb)(i),data:T({},I&&{action:I}),onClick:function(){return(!R||!1!==R())&&((0,m.FQ)()&&i.origin.type===v.i00.CLIP?(y.ZP.handleNativeVideoPlayer(T({ad:{video:Q||null},videoId:i.objectId,genreId:w||void 0},Y)),!1):void 0!==A?(I&&(0,f.Yg)().trackEvent(I),e.setVideoPlayerState({type:"PLAY",options:{volumeNamespace:"ESPNCricinfoVideoModal",muted:void 0!==_&&_}}),i.origin.type===v.i00.YOUTUBE):void 0)}},contentType:L,media:n,attributes:null!==P&&void 0!==P&&P.attributes?void 0:J},k),{},{mediaContainerClassName:u()(k.mediaContainerClassName,!1===A?"embedVideoCnt":void 0)}))}(e)}})}},46162:function(e,t,n){n(27378);var i=n(65218),r=n(73627),o=n(24246),a=(0,i.default)((function(){return n.e(9449).then(n.bind(n,90907))}),{loadableGenerated:{webpack:function(){return[90907]},modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoYouTubeInline"]}}),u=(0,i.default)((function(){return n.e(6955).then(n.bind(n,221))}),{loadableGenerated:{webpack:function(){return[221]},modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoPlayerLiveStream"]}}),c=(0,i.default)((function(){return n.e(6955).then(n.bind(n,785))}),{loadableGenerated:{webpack:function(){return[785]},modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoPlayerDefaultModal"]}}),l=(0,i.default)((,{loadableGenerated:{webpack:modules:["../modules/domain/video/components/CiVideoPlayer.tsx -> ./CiVideoPlayerDefaultInline"]}});t.Z=function(e){var t=e.children,n=e.video,i=e.autoplay,d=e.userInitiated,s=e.muted,f=e.modal,v=e.eventHandler,m=e.analytics,y=e.className,p=e.embedPlayerSelector;if(n.origin.type===r.i00.YOUTUBE)return(0,o.jsx)(a,{video:n,autoplay:i,children:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t(e)}))});if(n.origin.type===r.i00.LIVE_STREAM){var E=n.origin;return(0,o.jsx)(u,{liveStreamId:E.id.trim(),useParentsDimension:!0,children:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t(e)}))})}return!0===f?(0,o.jsx)(c,{video:n,eventHandler:v,analytics:m,children:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return t(e)}))}):(0,o.jsx)(l,{video:n,autoplay:i,userInitiated:d,muted:s,eventHandler:v,analytics:m,className:y,embedPlayerSelector:p,children:()})}},50348:function(e,t,n){n.d(t,{v9:function(){return r},$x:function(){return o},Hb:function(){return a},UL:function(){return u},mJ:);var i=n(8325),r=o=function(e){return"".concat((0,i.P_)(e)).concat("/cricket-videos","/latest")},a=function(e){return"/cricket-videos/".concat(e.slug,"-").concat(e.objectId)},u=function(e){return"/cricket-videos/genre/".concat(e.slug,"-").concat(e.id)},c=}]);