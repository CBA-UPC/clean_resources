(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{62135:function(e,t,n){"use strict";var a=n(1717),s=n(27378),r=n(60042),l=n.n(r),o=n(36077),i=n(3647),c=n(71056),m=n(5273),d=n(81817),u=n(24246);r f=(0,s.forwardRef)((function(e,t){var n=e.className,a=e.children,s=e.text,r=e.placement,p=e.startIcon,f=e.arrow,E=void 0===f||f,x=e.zIndex,S=e.show,T=void 0!==S&&S,v=e.trigger,y=void 0===v?d.f1.HOVER:v;return(0,u.jsx)(i.Z,{className:"ds-tooltip",placement:r,arrow:E,zIndex:x,trigger:y,show:T,contentClassName:"ds-rounded-lg ds-bg-ui-fill-contrast",content:(0,u.jsxs)("span",{className:l()("ds-text-raw-white ds-flex ds-items-center ds-justify-center ds-px-4 ds-py-3 ds-overflow-ellipsis ds-overflow-hidden",n),ref:t,style:{maxWidth:344},children:[p?(0,u.jsx)(o.ZP,h({className:"ds-mr-1"},(0,c.P)(p))):null,(0,u.jsx)(m.Z,{variant:d.Fu.COMPACT_S,children:s})]}),children:a})}));f.displayName="DSTooltip",t.Z=f},78118:function(e,t,n){"use strict";var a=n(1717),s=n(48978),r=n(60042),l=n.n(r),o=n(27378),i=n(9091),c=n(98765),m=n(44757),d=n(97458),u=n(15140),p=n(47535),h=n(25686),f=n(14131),E=n(1319),x=n(25480),S=n(31708),T=n(34501),v=n(99889),y=n(12586),N=n(44595),g=n(85402),b=n(64650),I=n(81817),Z=n(2251),O=n(73627),j=n(4550),_=n(24246),C=function(e){var t,n,a=e.team,s=e.className;return(0,_.jsxs)("span",{className:l()("ds-inline-flex ds-items-center",s),children:[null!==(t=a.image)&&void 0!==t&&t.url?(0,_.jsx)(d.Z,{variant:I.N6.SQUARE,size:I.Ui.WIDTH_80,width:20,url:null===(n=a.image)||void 0===n?void 0:n.url,alt:"",className:"ds-mr-2"}):null,a.longName]})};t.Z=function(e){var t,n,r,l=e.page,d=e.team,I=e.teamOptions,A=void 0===I?[]:I,D=(0,o.useContext)(u.ZP).showModal,k=(0,o.useContext)(E.Z).lang,L=(0,o.useContext)(x.Z).translate,w=(0,T.Z)(),P=(0,o.useState)(0),R=P[0],H=P[1],U=(0,g.QE)(d),M=[U[y.ns.HOME]?{key:y.ns.HOME,label:L("cm_home","Home"),anchorType:{href:(0,b.nv)(k,d)}}:null,U[y.ns.SCHEDULE]?{key:y.ns.SCHEDULE,label:L("cm_fixtures_and_results","Fixtures and Results"),anchorType:{href:(0,b.Z9)(k,d)}}:null,U[y.ns.PLAYERS]?{key:y.ns.PLAYERS,label:L("cm_player_plural","Players"),anchorType:{href:(0,v.c7)(d)}}:null,U[y.ns.STATS]?{key:y.ns.STATS,label:L("cm_statistics_short","Stats"),anchorType:{href:(0,b.ZV)(k,d)}}:null,U[y.ns.VIDEOS]?{key:y.ns.VIDEOS,label:L("cm_videos","Videos"),anchorType:{href:(0,b.nY)(k,d)}}:null,U[y.ns.SQUADS]?{key:y.ns.SQUADS,label:L("cm_squad_plural","Squads"),anchorType:{href:(0,b.cB)(d)}}:null,U[y.ns.GALLERIES]?{key:y.ns.GALLERIES,label:L("cm_gallery_plural","Galleries"),anchorType:{href:(0,b.yH)(d)}}:null,U[y.ns.IMAGES]?{key:y.ns.IMAGES,label:L("cm_photos","Photos"),anchorType:{href:(0,b.dJ)(d)}}:null].filter(Boolean);if(A.length>0){var G=A.map((function(e){return{key:e.id,label:(0,_.jsx)(C,{team:e}),anchorType:{href:(0,g.QE)(e)[l]?(0,b.TH)(l,k,e):(0,b.nv)(k,d)},data:{altText:e.longName}}})),F=[{key:d.id,label:(0,_.jsx)(C,{team:d,className:"ds-py-2"}),data:{altText:d.longName}}].concat((0,s.Z)(G));t=(0,_.jsx)("div",{className:"ds-flex ds-items-center ds-border-ui-stroke ds-border-r ds-pr-6 ds-mr-4",children:(0,_.jsx)(c.ZP,{options:F,variant:c.Z$.TEXT,placement:i.zJ.BOTTOM_LEFT,valueLink:{value:d.id,setValue:,hideSelected:!0,data:{action:"team:home:teams-dropdown"}})})}else{var B;n={title:d.longName,imageUrl:null===(B=d.image)||void 0===B?void 0:B.url,anchorType:{href:(0,b.nv)(k,d)},titleElement:"h1"}}var Y=j.Z.features.teamCompare?(0,_.jsx)(m.ZP,{variant:m.Tu.SECONDARY,size:m.NA.XS,href:(0,b.f7)(O.IBh.ENGLISH,[d]),data:{action:"team:profile-compare"},startIcon:Z.v.SHIELDS_OUTLINED,label:L("cm_compare","Compare")}):null;if(w.state===T.s.ACCEPTED){var z,V=(0,N.fT)(d);r=(0,_.jsxs)("div",{className:"ds-flex ds-gap-2",children:[Y,(0,_.jsx)(h.Z,{type:f.Z.NOTIFICATIONS_TEAM,placement:i.zJ.LEFT,action:(z={},(0,a.Z)(z,f.G.INTERACTED,"promotion:team:notification:dismissed"),(0,a.Z)(z,f.G.DISMISSED,"promotion:team:notification:interacted"),z),disabled:V,text:"Follow to get direct match reminders, points table updates, live scores & more.",children:(0,_.jsx)(m.ZP,{variant:V?m.Tu.PRIMARY:m.Tu.SECONDARY,size:m.NA.XS,onClick:function(){D((0,_.jsx)(S.Z,{entitites:(0,N._j)(d),onClose:function(){H(R+1)}}))},startIcon:V?Z.v.NOTIFICATIONS_SOLID:Z.v.NOTIFICATIONS_OUTLINE})})]})}else r=Y;var Q=l;return l===y.ns.SCHEDULE&&(Q=y.ns.SCHEDULE),(0,_.jsx)(p.Z,{selectedNavKey:Q,navItems:M,leftNode:t,heading:n,rightNode:r})}},31253:function(e,t,n){"use strict";var a=n(1717),s=n(27378),r=n(9091),l=n(28496),o=n(26375),i=n(71741),c=n(10817),m=n(2251),d=n(15140),u=n(10897),p=n(86514),h=n(25686),f=n(14131),E=n(1319),x=n(47086),S=n(25480),T=n(31708),v=n(34501),y=n(99889),N=n(12586),g=n(44595),b=n(85402),I=n(64650),Z=n(36077),O=n(97458),j=n(81817),_=n(73627),C=n(4550),A=n(24246);t.Z=function(e){var t,n,D=e.page,k=e.team,L=e.teamOptions,w=void 0===L?[]:L,P=(0,s.useContext)(d.ZP),R=P.showModal,H=P.handleNavigation,U=(0,s.useContext)(E.Z).lang,M=(0,s.useContext)(S.Z).translate,G=(0,v.Z)(),F=(0,s.useState)(0),B=F[0],Y=F[1],z=(0,b.QE)(k),V=[z[N.ns.HOME]?{key:N.ns.HOME,label:M("cm_home","Home"),anchorType:{href:(0,I.nv)(U,k)}}:null,z[N.ns.SCHEDULE]?{key:N.ns.SCHEDULE,label:M("cm_fixtures_and_results","Fixtures and Results"),anchorType:{href:(0,I.Z9)(U,k)}}:null,z[N.ns.PLAYERS]?{key:N.ns.PLAYERS,label:M("cm_player_plural","Players"),anchorType:{href:(0,y.c7)(k)}}:null,z[N.ns.STATS]?{key:N.ns.STATS,label:M("cm_statistics_short","Stats"),anchorType:{href:(0,I.ZV)(U,k)}}:null,z[N.ns.VIDEOS]?{key:N.ns.VIDEOS,label:M("cm_videos","Videos"),anchorType:{href:(0,I.nY)(U,k)}}:null,z[N.ns.SQUADS]?{key:N.ns.SQUADS,label:M("cm_squad_plural","Squads"),anchorType:{href:(0,I.cB)(k)}}:null,z[N.ns.GALLERIES]?{key:N.ns.GALLERIES,label:M("cm_gallery_plural","Galleries"),anchorType:{href:(0,I.yH)(k)}}:null,z[N.ns.IMAGES]?{key:N.ns.IMAGES,label:M("cm_photos","Photos"),anchorType:{href:(0,I.dJ)(k)}}:null].filter(Boolean),Q=[];C.Z.features.teamCompare&&Q.push({name:m.v.SHIELDS_OUTLINED,onClick:function(){H((0,I.f7)(_.IBh.ENGLISH,[k]),{action:"team:profile-compare"})}});var W=[];if(G.state===v.s.ACCEPTED){var X,J=(0,g.fT)(k);W.push((0,A.jsx)(h.Z,{type:f.Z.NOTIFICATIONS_TEAM,placement:r.zJ.BOTTOM_RIGHT,action:(X={},(0,a.Z)(X,f.G.INTERACTED,"promotion:team:notification:dismissed"),(0,a.Z)(X,f.G.DISMISSED,"promotion:team:notification:interacted"),X),disabled:J,text:"Follow to get direct match reminders, points table updates, live scores & more.",children:(0,A.jsx)(Z.ZP,{name:J?m.v.NOTIFICATIONS_SOLID:m.v.NOTIFICATIONS_OUTLINE,className:"ds-p-2 ds-text-raw-white ds-cursor-pointer",color:j.BG.INVERSE,size:j.XR.MD,onClick:function(){R((0,A.jsx)(T.Z,{entitites:(0,g._j)(k),onClose:))}})},"app-promotions"))}var K=D;D===N.ns.SCHEDULE&&(K=N.ns.SCHEDULE);var q={options:V,defaultActiveKey:K,variant:o.m6.PRIMARY},$=function(e){var t=e.data;if(t){var n=(0,b.QE)(t)[D]?(0,I.TH)(D,U,t):(0,I.nv)(U,t);H(n)}},ee=w.map((function(e){var t,n;return{key:e.id,label:(0,A.jsxs)("span",{className:"ds-inline-flex ds-items-center",children:[null!==(t=e.image)&&void 0!==t&&t.url?(0,A.jsx)(O.Z,{variant:j.N6.SQUARE,size:j.Ui.WIDTH_80,width:20,url:null===(n=e.image)||void 0===n?void 0:n.url,alt:"",className:"ds-mr-2"}):null,e.longName]}),data:e}})),te=w.length>0?{type:u.iD.ANCHOR,titleNode:(0,A.jsxs)(c.Z,{className:"ds-flex ds-items-center ds-py-2 ds-text-raw-white",anchorType:function(){return(0,x.Yg)().trackEvent("team:home:teams-dropdown"),R((0,A.jsx)(i.Z,{groupName:"other_teams",header:{title:"Other Teams",iconName:m.v.FLAG_OUTLINE},selectedKey:null,options:ee,onChange:$})),!1},children:[(0,A.jsx)(l.Z,{titleClassName:"ds-line-clamp-1 ds-break-all",title:k.longName,size:l.t.LG,imageUrl:null===(t=k.image)||void 0===t?void 0:t.url}),(0,A.jsx)(Z.ZP,{className:"ds-ml-1",name:m.v.KEYBOARD_DOWN_OUTLINE,color:j.BG.INVERSE,size:j.XR.SM})]})}:{type:u.iD.TEXT,title:k.longName,anchorType:{href:(0,I.nv)(U,k)},imageUrl:null===(n=k.image)||void 0===n?void 0:n.url,titleElement:"h1"};return(0,A.jsx)(p.Z,{defaultIcons:!1,title:te,tabs:q,icons:Q,rightNodes:W})}},74737:function(e,t,n){"use strict";n.r(t);var a=n(6952),s=n(88742),r=n.n(s),l=n(27378),o=n(1319),i=n(4647),c=n(25480),m=n(12586),d=n(65057),u=n(17809),p=n(77215),h=n(96151),f=n(64650),E=n(65420),x=n(57506),S=n(57021),T=n(32172),v=n(74034),y=n(31283),N=n(51148),g=n(2351),b=n(1305),I=n(79091),Z=n(78118),O=n(31253),j=n(46723),_=n(9009),C=n(47086),A=n(17452),D=n(24246),k=function(e){var t=e.team,n=e.content.matches,s=(0,l.useContext)(o.Z),m=s.globalDetails,p=s.lang,h=(0,l.useContext)(c.Z).translate,E=(0,l.useState)(n),x=E[0],S=E[1],Z=(0,l.useState)("default"),O=Z[0],k=Z[1],L=(0,l.useState)(null),w=L[0],P=L[1],R={type:v.ro.TEAM,team:t,noContentButton:{label:h("cm_view_all_results","VIEW ALL RESULTS"),href:(0,f.fR)(p,t)}},H=(0,g.dt)((0,g.uQ)(x)),U=function(e){(0,a.Z)(r().mark((function n(){var a,s,l,o,i,c;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=w?w.getTime():0,s=e.month?e.month.getTime():0,a==s){n.next=13;break}return l=null,e.month&&(o=e.month,l=Number("".concat(o.getFullYear()).concat((0,b.y1)(o.getMonth()+1,2))),P(e.month)),n.next=7,(0,C.ee)();case 7:return i=n.sent,n.next=10,i.getTeamSchedulePage({lang:p,teamId:t.objectId,yearmm:l});case 10:c=n.sent,S(c.content.matches),k((0,I.f)(10));case 13:case"end":return n.stop()}}),n)})))()};return(0,D.jsxs)(j.Z,{children:[(0,D.jsx)(d.Z,{className:"ds-mt-4 ds-mb-2"}),(0,D.jsx)(y.Z,{isMobile:!0,match:y.d.NEGATIVE,children:(0,D.jsx)(u.Z,{pageUnitId:"longstripGamepackage",className:"ds-mb-4 ds-flex ds-justify-center"})}),(0,D.jsxs)(_.Z,{children:[(0,D.jsxs)(_.Z.Content,{className:"ds-px-0",children:[(0,D.jsxs)(y.Z,{isMobile:!0,match:y.d.TERNARY,children:[(0,D.jsxs)("div",{className:"ds-mb-4",children:[(0,D.jsx)(v.ZP,{matches:H,variant:R,dataKey:O,onChange:U}),(0,D.jsx)(u.Z,{pageUnitId:"bannerNewBottom",className:"ds-mt-4"},"bannerNewBottom")]}),(0,D.jsx)("div",{className:"ds-mb-4",children:(0,D.jsx)(v.ZP,{matches:H,variant:R,dataKey:O,onChange:U})})]}),(0,D.jsx)(i.Z,{taboola:{id:"taboola-below-content-thumbnails",desktopSize:"thumbnails-3x2-a",mobileSize:"thumbnails-3x2-a",placement:"scores",targetType:"mix"},mgIdPageType:A.sY.OTHERS})]}),(0,D.jsxs)(_.Z.Right,{children:[(0,D.jsx)(u.Z,{pageUnitId:"incontentstrip",className:"ds-mb-4"}),(0,D.jsx)(u.Z,{pageUnitId:"incontent",className:"ds-mb-4"}),(0,D.jsx)(u.Z,{pageUnitId:"incontentRoW",className:"ds-mb-4"}),(0,D.jsx)(u.Z,{pageUnitId:"promobox",className:"ds-mb-4"}),(0,D.jsx)(N.Z,{items:m.featuredItems,dynamicNodes:{2:(0,D.jsx)(T.Z,{units:["incontent2","incontent2RoW"]}),10:(0,D.jsx)(T.Z,{units:["incontent3","incontent3RoW"]})}})]})]})]})};k.getDesktopSubHeader=function(e){var t=e.team,n=e.content.recentOppositionTeams;return(0,D.jsx)(Z.Z,{page:m.ns.SCHEDULE,team:t,teamOptions:n})},k.getMobileAppBar=function(e){var t=e.team,n=e.content.recentOppositionTeams;return(0,D.jsx)(O.Z,{page:m.ns.SCHEDULE,team:t,teamOptions:n})},k.getInitialProps=function(){var e=(0,a.Z)(r().mark((function e(t){var n,a,s,l,o,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.appNextJsContext.lang,a=t.appNextJsContext.edition,e.next=4,(0,C.ee)();case 4:return s=e.sent,e.next=7,s.getTeamSchedulePage({lang:n,teamId:Number(t.query.teamId),yearmm:null});case 7:return l=e.sent,o=l.team,(0,h._4)(t,(0,f.Z9)(n,o)),(0,h.es)(t,1200),i={lang:n,edition:a},e.abrupt("return",{data:l,layout:{type:p.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!1,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!1,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!1,appStickyAd:!1},ad:(0,E._9)(l),analytics:(0,x.$0)(l),seo:(0,S.xe)(l,i)}});case 13:case"end":return e.stop()}}),e)})));return (),t.default=k},50299:,function(e){e.O(0,[2579,2741,1415,2437,8601,8413,6514,7839,751,3355,9397,954,8617,2580,1403,9774,2888,179],();var t=e.O();_N_E=t}]);