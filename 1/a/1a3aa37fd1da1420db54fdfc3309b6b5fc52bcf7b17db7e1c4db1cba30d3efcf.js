(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{62318:function(e,s,a){"use strict";a.d(s,{s1:function(){return x},UT:function(){return T},v1:function(){return p},ZP:);var t=a(60042),n=a.n(t),r=a(27378),d=a(24246),o=(0,r.forwardRef)((function(e,s){var a=e.className,t=e.children;return(0,d.jsx)("thead",{ref:s,className:n()("ds-bg-fill-content-alternate ds-text-left",a),children:t})}));o.displayName="DSTableHead";var l=o,c=(0,r.forwardRef)((function(e,s){var a=e.className,t=e.compact,r=void 0===t?x.NONE:t,o=e.children;return(0,d.jsx)("tbody",{ref:s,className:n()({"ds-table-body-compact-top":r===x.TOP,"ds-table-body-compact-bottom":r===x.BOTTOM},a),children:o})}));c.displayName="DSTableBody";var i=c,u=(0,r.forwardRef)((function(e,s){var a=e.className,t=e.compact,r=void 0===t?x.NONE:t,o=e.children;return(0,d.jsx)("tr",{ref:s,className:n()({"ds-table-row-compact-top":r===x.TOP,"ds-table-row-compact-bottom":r===x.BOTTOM},a),children:o})}));u.displayName="DSTableRow";var m=u,N=(0,r.forwardRef)((function(e,s){var a=e.className,t=e.head,o=e.footer,l=e.span,c=e.rowSpan,i=e.fixed,u=e.maxContent,m=e.maxContentWidth,N=void 0===m||m,f=e.onClick,b=e.children,h=(0,r.useRef)(null),T=(0,r.useState)(!1),p=(T[0],T[1]);(0,r.useEffect)((function(){h.current&&new IntersectionObserver((,{threshold:[0,1]}).observe(h.current)}),[]);var x=_=t?(0,d.jsx)("th",{ref:s,className:n()({"ds-sticky ds-left-0 ds-z-10 ds-bg-fill-content-alternate ds-table-row-sticky":i,"ds-w-0 ds-whitespace-nowrap":u,"ds-min-w-max":N},a),colSpan:l,rowSpan:c,onClick:x,children:b}):(0,d.jsx)("td",{ref:s,className:n()({"ds-sticky ds-left-0 ds-z-10 ds-table-row-sticky":i,"ds-font-bold ds-bg-fill-content-alternate ds-text-tight-m":o,"ds-w-0 ds-whitespace-nowrap":u,"ds-min-w-max":N},a),colSpan:l,onClick:x,children:b});return(0,d.jsx)(d.Fragment,{children:_})}));N.displayName="DSTableCell";var f=N,b=a(54104),h=(0,r.forwardRef)((function(e,s){var a=e.className,t=e.variant,r=void 0===t?p.DEFAULT:t,o=e.size,l=void 0===o?T.MD:o,c=e.border,i=void 0!==c&&c,u=e.colFixedWidth,m=void 0!==u&&u,N=e.cellTextNoWrap,f=void 0!==N&&N,h=e.children,x="";switch(l){case T.XS:x="ds-table-xs";break;case T.SM:x="ds-table-sm";break;case T.MD:x="ds-table-md"}return(0,d.jsx)("table",{ref:s,className:n()("ds-w-full","ds-table",x,{"ds-table-bordered ds-border-collapse ds-border ds-border-line":i},{"ds-table-stripped":r===p.STRIPPED},{"ds-table-no-wrap":f},m?"ds-table-fixed":"ds-table-auto ",a),children:(0,b.dz)(h,()})}));h.displayName="DSTable";var T,p,x,_=h;!function(e){e.XS="XS",e.SM="SM",e.MD="MD"}(T||(T={})),p||(p={})),x||(x={}));var v=_,S=Object.assign(v,{Head:l,Body:i,Row:m,Cell:f})},15359:function(e,s,a){"use strict";a.r(s);var t=a(6952),n=a(40479),r=a(88742),d=a.n(r),o=a(60042),l=a.n(o),c=a(27378),i=a(31283),u=a(77215),m=a(47086),N=a(96151),f=a(25480),b=a(85437),h=a(75948),T=a(26655),p=a(37535),x=a(26375),_=a(13435),v=a(82601),S=a(12795),E=a(81106),I=a(43083),w=a(62318),O=a(99011),g=a(81817),P=a(92572),j=a(84789),M=a(93726),Z=a(36786),y=a(1319),A=a(58582),C=a(73627),k=a(43568),D=a(23346),R=a(23573),L=a(24246),U=function(e){var s=e.ground,a=e.classMatch,t=e.className,r=(0,c.useContext)(y.Z),d=r.device.isMobile,o=r.lang,l=(0,c.useContext)(f.Z).translate;return(0,L.jsxs)(I.ZP,{rounded:!d,className:t,children:[(0,L.jsx)(I.ZP.Header,{size:I.y2.MD,title:R.J6[a.matchClass.id].shortNamePlural}),(0,L.jsx)(I.ZP.Content,{size:I.kC.FULL,children:(0,L.jsxs)(w.ZP,{size:d?w.UT.SM:w.UT.MD,border:!0,className:"ds-border-t-0 ds-border-b-0",children:[(0,L.jsx)(w.ZP.Head,{children:(0,L.jsxs)(w.ZP.Row,{children:[(0,L.jsxs)(w.ZP.Cell,{head:!0,className:"!ds-normal-case",children:[l("cm_first","First"),"/",l("cm_last","Last")]}),(0,L.jsx)(w.ZP.Cell,{head:!0,className:"!ds-normal-case",children:l("cm_match_short","Match")})]})}),(0,L.jsx)(w.ZP.Body,{children:a.events.map((function(e){var s=e.match,t=(0,n.Z)(s.teams,2),r=t[0],d=t[1];return(0,L.jsxs)(w.ZP.Row,{children:[(0,L.jsxs)(w.ZP.Cell,{children:[(0,D._v)(e.interval)," ",R.J6[a.matchClass.id].shortName]}),(0,L.jsx)(w.ZP.Cell,{children:(0,L.jsx)(O.Z,{label:"".concat(r.team.name," vs ").concat(d.team.name," - ").concat((0,k.Xt)(s)),anchorType:{href:(0,P.n1)(o,e.match)},labelVariant:g.Fu.TIGHT_S_MEDIUM,variant:O.I.UNDERLINE})})]},e.interval)}))})]})}),(0,L.jsx)(I.ZP.Footer,{className:"ds-border-t-0",children:(0,L.jsx)(j.Z,{containerClassName:"ds-px-4 ds-py-2 ds-items-center",children:(0,_.i$)(o,s,a.matchClass,l).map((function(e){return(0,L.jsx)(Z.Z,{href:e.url,children:(0,L.jsx)(M.ZP,{className:"ds-mr-2 ds-flex ds-whitespace-nowrap",label:e.label,size:M.KA.XS,variant:M.ji.LINK_SECONDARY})},e.key)}))})})]})},F=[C.dqm.I_TESTS,C.dqm.I_ONE_DAY_INTERNATIONALS,C.dqm.I_TWENTY20_INTERNATIONALS,C.dqm.I_WOMENS_TESTS,C.dqm.I_WOMENS_ONE_DAY_INTERNATIONALS,C.dqm.I_WOMENS_TWENTY20_INTERNATIONALS,C.dqm.I_YOUTH_TESTS,C.dqm.I_YOUTH_ONE_DAY_INTERNATIONALS,C.dqm.I_YOUTH_TWENTY20_INTERNATIONALS],H=function(e){var s=e.content,a=s.classMatches,t=s.supportInfo,n=e.ground,r=(0,c.useContext)(y.Z),d=r.device.isMobile,o=r.lang,u=(0,c.useContext)(f.Z).translate;return(0,L.jsxs)(E.Z,{ground:n,supportInfo:t,children:[(0,L.jsx)(i.Z,{isMobile:!0,match:i.d.NEGATIVE,children:(0,L.jsx)(x.ZP,{className:l()("ds-mb-4 ds-bg-fill-content-prime ds-w-full ds-rounded-xl ds-border ds-border-line"),options:(0,_.z1)(n,o,u),defaultActiveKey:v.$.STATS,activeLabelElement:"h1",fixed:!0})}),a.sort(().map((function(e){return(0,L.jsx)(U,{ground:n,classMatch:e,className:"ds-mb-4"},e.matchClass.id)})),(0,L.jsxs)(I.ZP,{rounded:!d,className:"ds-mb-4",children:[(0,L.jsx)(I.ZP.Header,{size:I.y2.MD,title:"".concat(u("cm_more","More")," ").concat(u("cm_quick_links","links"))}),(0,L.jsx)(I.ZP.Content,{children:(0,L.jsx)(O.Z,{label:u("cm_records_index","Records Index"),anchorType:{href:(0,A.Eu)(o,C.n6v.GROUND,[{id:n.id.toString(),name:n.name,slug:n.slug,shortName:n.smallName}])},labelVariant:g.Fu.TIGHT_S_MEDIUM,variant:O.I.UNDERLINE})})]})]})};H.getMobileAppBar=function(e){var s=e.ground;return(0,L.jsx)(S.Z,{ground:s,pageType:v.$.STATS})},H.getInitialProps=function(){var e=(0,t.Z)(d().mark((function e(s){var a,t,n,r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.appNextJsContext.lang,t=Number(s.query.groundId),e.next=4,(0,m.d5)();case 4:return n=e.sent,e.next=7,n.getGroundStatsPage({groundId:t,lang:a});case 7:return r=e.sent,(0,N._4)(s,(0,p.L8)(a,r.ground)),(0,N.es)(s,300),e.abrupt("return",{data:r,layout:{type:u.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!1,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!1,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!1,appStickyAd:!0},ad:(0,b.Mu)(r.ground),analytics:(0,h.l4)(r.ground,"stats"),seo:(0,T.AP)(r,{lang:a})}});case 11:case"end":return e.stop()}}),e)})));return (),s.default=H},33878:,);