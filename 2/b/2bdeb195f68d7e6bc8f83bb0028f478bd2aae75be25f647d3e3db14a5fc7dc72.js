(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3014],{62135:function(e,t,r){"use strict";var n=r(1717),s=r(27378),o=r(60042),i=r.n(o),a=r(36077),c=r(3647),l=r(71056),u=r(5273),d=r(81817),p=r(24246);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(0,s.forwardRef)((function(e,t){var r=e.className,n=e.children,s=e.text,o=e.placement,b=e.startIcon,h=e.arrow,m=void 0===h||h,g=e.zIndex,y=e.show,O=void 0!==y&&y,j=e.trigger,v=void 0===j?d.f1.HOVER:j;return(0,p.jsx)(c.Z,{className:"ds-tooltip",placement:o,arrow:m,zIndex:g,trigger:v,show:O,contentClassName:"ds-rounded-lg ds-bg-ui-fill-contrast",content:(0,p.jsxs)("span",{className:i()("ds-text-raw-white ds-flex ds-items-center ds-justify-center ds-px-4 ds-py-3 ds-overflow-ellipsis ds-overflow-hidden",r),ref:t,style:{maxWidth:344},children:[b?(0,p.jsx)(a.ZP,f({className:"ds-mr-1"},(0,l.P)(b))):null,(0,p.jsx)(u.Z,{variant:d.Fu.COMPACT_S,children:s})]}),children:n})}));h.displayName="DSTooltip",t.Z=h},71781:function(e,t,r){"use strict";r.r(t);var n=r(1717),s=r(6952),o=r(40479),i=r(48978),a=r(88742),c=r.n(a),l=r(27378),u=r(4647),d=r(58018),p=r(77215),b=r(47010),f=r(33489),h=r(12209),m=r(96151),g=r(80520),y=r(32098),O=r(6129),j=r(59649),v=r(29193),w=r(88979),x=r(92572),P=r(45672),S=r(43083),I=r(1319),N=r(67378),k=r(20155),Z=r(47086),E=r(73627),_=r(17452),A=r(17809),D=r(31283),C=r(24246);r M=function(e){var t=e,r=(0,l.useContext)(I.Z).device.isMobile,n=(0,d.Z)(t.match.objectId);n&&(t={match:n.match,content:{innings:null!==n.scorecard?n.scorecard.innings:t.content.innings,supportInfo:n.supportInfo}});var s=t,a=s.match,c=s.content,p=c.innings,b=c.supportInfo,f=a.teams.map((),h=a.state===E.xdB.LIVE?(0,i.Z)(f):[],m=l.useState(b.seriesStandings),g=(0,o.Z)(m,2),y=g[0],v=g[1];return(0,C.jsxs)(j.Z,{page:O.nA.STANDINGS,match:a,innings:p,supportInfo:b,children:[y?(0,C.jsxs)(S.ZP,{rounded:!r,className:"ds-mb-4",children:[(0,C.jsx)(S.ZP.Header,{title:"".concat(y.series.name," Points table"),titleElement:"h1",size:S.y2.SM}),(0,C.jsx)(S.ZP.Content,{children:(0,C.jsx)(w.Z,{series:y.series,standings:y,setSortedStandings:highlighted:f,playingLive:h})})]}):null,(0,C.jsx)(D.Z,{isMobile:!0,match:D.d.POSITIVE,children:(0,C.jsx)(A.Z,{pageUnitId:"incontent3",className:"ds-mb-4"})}),(0,C.jsx)(u.Z,{taboola:{id:"taboola-below-article-thumbnails",desktopSize:"thumbnails-3x2-a",mobileSize:"thumbnails-3x2-a",placement:"report",targetType:"mix"},mgIdPageType:_.sY.OTHERS})]})};M.getMobileAppBar=function(e){var t=e.match,r=e.content.supportInfo;return(0,C.jsx)(v.Z,{page:O.nA.STANDINGS,match:t,supportInfo:r})},M.getInitialProps=function(){var e=(0,s.Z)(c().mark((function e(t){var r,n,s,o,i,a,l,u,d,O,j;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,s=t.appNextJsContext,o=s.lang,i=s.edition,a=null,e.next=5,(0,Z.hk)();case 5:return l=e.sent,e.prev=6,e.next=9,l.getMatchStandingsPage(L({lang:o,seriesId:Number(t.query.seriesId),matchId:Number(t.query.matchId)},n.day&&{day:Number(t.query.day)}));case 9:a=e.sent,e.next=20;break;case 12:if(e.prev=12,e.t0=e.catch(6),!k.w_.isSWCoreAppError(e.t0)){e.next=20;break}if(u=e.t0,d="",u.category===N.P.NOT_FOUND&&(d="".concat(f.h4[o].path,"/series/").concat(n.seriesSlug,"-").concat(n.seriesId,"/").concat(n.matchSlug,"-").concat(n.matchId,"/live-cricket-score")),!d){e.next=20;break}throw new h.Z(h.E.INVALID_CANONICAL,"Redirecting to: ".concat(d),{redirectPath:d,ttl:180});case 20:return O=null===(r=a)||void 0===r?void 0:r.match,(0,m._4)(t,(0,x.zh)(o,O)),(0,b.ME)(t,O),j={lang:o,edition:i},e.abrupt("return",{data:a,layout:{type:p.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!1,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!1,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!1,appStickyAd:!0},ad:(0,P.rr)(a),analytics:(0,g.Su)(a),seo:(0,y.Cj)(a,j)}});case 25:case"end":return e.stop()}}),e,null,[[6,12]])})));return (),t.default=M},63143:,);