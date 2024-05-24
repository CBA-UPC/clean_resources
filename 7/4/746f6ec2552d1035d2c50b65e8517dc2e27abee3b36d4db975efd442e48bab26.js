"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3707],{4647:function(e,n,s){s.d(n,{Z:function(){return p}});var a=s(1717),l=s(27378),t=s(43218),r=s(86677),i=s(1319),c=s(98878),d=s(4550),u=s(24246),o=function(e){var n=e.id,s=e.desktopSize,a=e.mobileSize,o=e.placement,m=e.targetType,p=(0,l.useContext)(i.Z).device.isMobile,x=(0,r.useRouter)().asPath,T=(0,l.useRef)(null);return(0,c.Z)((function(){var e=p?a:s;e&&_taboola.push({mode:e,container:n,placement:o,target_type:m})}),[n,x]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.default,{id:"tb_loader_script",strategy:"lazyOnload",defer:!0,src:"https://cdn.taboola.com/libtrc/".concat(d.Z.integrations.taboola.code,"/loader.js")}),(0,u.jsx)("div",{id:n,ref:T,className:"ci-ad-taboola-slot"})]})};function m(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,a)}return s}var p=function(e){var n=e.taboola;e.mgIdPageType;return(0,u.jsx)(o,{},n))}},30843:function(e,n,s){s.d(n,{u3:function(){return c},_k:function(){return d},cG:function(){return u},MG:function(){return o}});var a,l,t=s(1717),r=s(73627),i=s(54291),c=(a={},(0,t.Z)(a,r.LQl.TWITTER,{name:"Twitter"}),(0,t.Z)(a,r.LQl.WEBSITE,{name:"Website"}),(0,t.Z)(a,r.LQl.FACEBOOK,{name:"Facebook"}),(0,t.Z)(a,r.LQl.GOOGLE,{name:"Google"}),(0,t.Z)(a,r.LQl.INSTAGRAM,{name:"Instagram"}),(0,t.Z)(a,r.LQl.YOUTUBE,{name:"Youtube"}),(0,t.Z)(a,r.LQl.LINKEDIN_COMPANY,{name:"LinkedIn Company"}),(0,t.Z)(a,r.LQl.LINKEDIN_PROFILE,{name:"LinkedIn Profile"}),(0,t.Z)(a,r.LQl.LIVEJOURNAL,{name:"Live Journal"}),(0,t.Z)(a,r.LQl.TUMBLR,{name:"Tumblr"}),a),d="https://espn.wonderwins.com",u=(0,t.Z)({},i.r.METAVERSE,{name:"metaverse"}),o=(l={},(0,t.Z)(l,r._FL.WON,"W"),(0,t.Z)(l,r._FL.LOST,"L"),(0,t.Z)(l,r._FL.DRAW,"D"),(0,t.Z)(l,r._FL.NO_RESULT,"NR"),(0,t.Z)(l,r._FL.ABANDONED,"A"),(0,t.Z)(l,r._FL.TIED,"T"),(0,t.Z)(l,r._FL.CANCELLED,"C"),l)},54291:88979:function(e,n,s){var a=s(6952),l=s(1717),t=s(40479),r=s(88742),i=s.n(r),c=s(27378),d=s(60042),u=s.n(d),o=s(85336),m=s(55220),p=s(27693),x=s.n(p),T=s(37707),C=s(1319),E=s(88889),h=s(47391),b=s(11293),N=s(43083),S=s(16311),_=s(62318),j=s(74045),v=s(93670),y=s(2251),f=s(36077),O=s(73627),B=s(47086),I=s(99011),A=s(92572),g=s(25480),L=s(61623),Z=s(31283),R=s(4550),P=s(5273),H=s(81817),M=s(24246);r K=(0,m.default)((),G=(0,m.default)((),W=n.Z=function(e){var n,s,r,d,m=e.series,p=e.standings,D=e.setSortedStandings,w=e.rightNode,k=e.highlighted,U=void 0===k?[]:k,Y=e.playingLive,Q=void 0===Y?[]:Y,X=e.enhanced,z=void 0!==X&&X,V=(0,c.useContext)(C.Z),q=V.device.isMobile,J=V.lang,$=(0,c.useContext)(g.Z).translate,ee=p.available,ne=p.groups,se=p.objects.matches,ae={};U.forEach((function(e){ae[e]?ae[e].hightlight=!0:ae[e]={hightlight:!0,playingLive:!1,rendered:!1}})),Q.forEach((function(e){ae[e]?ae[e].playingLive=!0:ae[e]={hightlight:!1,playingLive:!0,rendered:!1}}));var le=c.useState({seriesPlayed:"",seriesWon:"",matchesPlayed:"",matchesWon:"",matchesLost:"",matchesTied:"",matchesDrawn:"",matchesNoResult:"",points:"",quotient:"",nrr:"",rpwr:"",for:"",against:"",pct:""}),te=(0,t.Z)(le,2),re=te[0],ie=te[1],ce=c.useState(""),de=(0,t.Z)(ce,2),ue=de[0],oe=de[1],me=(0,c.useState)({}),pe=me[0],xe=me[1],Te={asc:O.XiW.ASCENDING,desc:O.XiW.DESCENDING},Ce=function(){var e=(0,a.Z)(i().mark((function e(n,s){var a,t,r,c,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=re[n],t="asc"===a?"desc":"asc",oe(n),r={lang:J,seriesId:m.objectId,sortField:s,sortDirection:Te[t],allMatches:!0},e.next=6,(0,B.PK)();case 6:return c=e.sent,e.next=9,c.getSeriesStandings(r);case 9:d=e.sent,D(d),ie(F(F({},re),{},(0,l.Z)({},n,t)));case 12:case"end":return e.stop()}}),e)})));return (),Ee=null!==(null===(n=ne[0])||void 0===n||null===(s=n.teamStats[0])||void 0===s?void 0:s.seriesPlayed),he=null!==(null===(r=ne[0])||void 0===r||null===(d=r.teamStats[0])||void 0===d?void 0:d.seriesWon),be=x()().isAfter(x()(m.endDate),"date");return(0,M.jsxs)(c.Fragment,{children:[(0,M.jsxs)("div",{className:"ds-mb-4",children:[(0,M.jsx)(N.ZP,{children:ne.map((function(e,n){var s=e.teamsToQualifyCount;return(0,M.jsxs)(c.Fragment,{children:[""!==e.name?(0,M.jsx)(N.ZP.Header,{title:(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,format:H.iL.UPPERCASE,children:e.name})}):null,(0,M.jsx)(N.ZP.Content,{size:N.kC.FULL,className:u()("ds-border-b ds-border-line last:ds-border-b-0 ds-overflow-auto"),children:(0,M.jsxs)(_.ZP,{className:u()("ds-w-full"),size:q?_.UT.SM:_.UT.MD,children:[(0,M.jsx)(_.ZP.Head,{className:"ds-text-right",children:(0,M.jsxs)(_.ZP.Row,{head:!0,children:[(0,M.jsx)(_.ZP.Cell,{head:!0,fixed:!0,className:u()("ds-text-left !ds-pr-8 ds-w-[99%]"),children:$("cm_team_plural","TEAMS")}),null!==ee&&Ee?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.SERIES_PLAYED,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.SERIES_PLAYED].name,currentColumnTitle:$(L.pB[O.n1u.SERIES_PLAYED].abbrLangKey,L.pB[O.n1u.SERIES_PLAYED].abbr),currentColumnDescription:$(L.pB[O.n1u.SERIES_PLAYED].langKey,L.pB[O.n1u.SERIES_PLAYED].label)}):null,he?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.SERIES_WON,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.SERIES_WON].name,currentColumnTitle:$(L.pB[O.n1u.SERIES_WON].abbrLangKey,L.pB[O.n1u.SERIES_WON].abbr),currentColumnDescription:$(L.pB[O.n1u.SERIES_WON].langKey,L.pB[O.n1u.SERIES_WON].label)}):null,(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.MATCHES_PLAYED,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.MATCHES_PLAYED].name,currentColumnTitle:$(L.pB[O.n1u.MATCHES_PLAYED].abbrLangKey,L.pB[O.n1u.MATCHES_PLAYED].abbr),currentColumnDescription:$(L.pB[O.n1u.MATCHES_PLAYED].langKey,L.pB[O.n1u.MATCHES_PLAYED].label)}),(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.MATCHES_WON,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.MATCHES_WON].name,currentColumnTitle:$(L.pB[O.n1u.MATCHES_WON].abbrLangKey,L.pB[O.n1u.MATCHES_WON].abbr),currentColumnDescription:$(L.pB[O.n1u.MATCHES_WON].langKey,L.pB[O.n1u.MATCHES_WON].label)}),(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.MATCHES_LOST,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.MATCHES_LOST].name,currentColumnTitle:$(L.pB[O.n1u.MATCHES_LOST].abbrLangKey,L.pB[O.n1u.MATCHES_LOST].abbr),currentColumnDescription:$(L.pB[O.n1u.MATCHES_LOST].langKey,L.pB[O.n1u.MATCHES_LOST].label)}),ee.tie?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.MATCHES_TIED,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.MATCHES_TIED].name,currentColumnTitle:$(L.pB[O.n1u.MATCHES_TIED].abbrLangKey,L.pB[O.n1u.MATCHES_TIED].abbr),currentColumnDescription:$(L.pB[O.n1u.MATCHES_TIED].langKey,L.pB[O.n1u.MATCHES_TIED].label)}):null,ee.draw?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.MATCHES_DRAW,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.MATCHES_DRAW].name,currentColumnTitle:$(L.pB[O.n1u.MATCHES_DRAW].abbrLangKey,L.pB[O.n1u.MATCHES_DRAW].abbr),currentColumnDescription:$(L.pB[O.n1u.MATCHES_DRAW].langKey,L.pB[O.n1u.MATCHES_DRAW].label)}):null,(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.MATCHES_NO_RESULT,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.MATCHES_NO_RESULT].name,currentColumnTitle:$(L.pB[O.n1u.MATCHES_NO_RESULT].abbrLangKey,L.pB[O.n1u.MATCHES_NO_RESULT].abbr),currentColumnDescription:$(L.pB[O.n1u.MATCHES_NO_RESULT].langKey,L.pB[O.n1u.MATCHES_NO_RESULT].label)}),(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.MATCH_POINTS,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.MATCH_POINTS].name,currentColumnTitle:$(L.pB[O.n1u.MATCH_POINTS].abbrLangKey,L.pB[O.n1u.MATCH_POINTS].abbr),currentColumnDescription:$(L.pB[O.n1u.MATCH_POINTS].langKey,L.pB[O.n1u.MATCH_POINTS].label),groupEnd:!0}),ee.quotient?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.QUOTIENT,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.QUOTIENT].name,currentColumnTitle:$(L.pB[O.n1u.QUOTIENT].abbrLangKey,L.pB[O.n1u.QUOTIENT].abbr),currentColumnDescription:$(L.pB[O.n1u.QUOTIENT].langKey,L.pB[O.n1u.QUOTIENT].label)}):null,ee.nrr?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.NRR,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.NRR].name,currentColumnTitle:$(L.pB[O.n1u.NRR].abbrLangKey,L.pB[O.n1u.NRR].abbr),currentColumnDescription:$(L.pB[O.n1u.NRR].langKey,L.pB[O.n1u.NRR].label)}):null,ee.rpwr?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.RPWR,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.RPWR].name,currentColumnTitle:$(L.pB[O.n1u.RPWR].abbrLangKey,L.pB[O.n1u.RPWR].abbr),currentColumnDescription:$(L.pB[O.n1u.RPWR].langKey,L.pB[O.n1u.RPWR].label)}):null,ee.pct?(0,M.jsx)(h.Z,{onColumnHeadClick:Ce,sortFieldType:O.n1u.PERCENTAGE,clickedColumn:ue,sortKeyMap:re,maxContent:!0,currentColumnName:L.pB[O.n1u.PERCENTAGE].name,currentColumnTitle:$(L.pB[O.n1u.PERCENTAGE].abbrLangKey,L.pB[O.n1u.PERCENTAGE].abbr),currentColumnDescription:$(L.pB[O.n1u.PERCENTAGE].langKey,L.pB[O.n1u.PERCENTAGE].label)}):null,(0,M.jsx)(_.ZP.Cell,{head:!0,maxContent:!0,children:$("cm_series_form","Series Form")}),be?null:(0,M.jsx)(_.ZP.Cell,{head:!0,maxContent:!0,children:$("cm_next","Next")}),ee.forAgainst?(0,M.jsx)(_.ZP.Cell,{head:!0,maxContent:!0,children:(0,M.jsx)("span",{children:$(L.pB[O.n1u.FOR].langKey,L.pB[O.n1u.FOR].label)})}):null,ee.forAgainst?(0,M.jsx)(_.ZP.Cell,{head:!0,maxContent:!0,children:(0,M.jsx)("span",{children:$(L.pB[O.n1u.AGAINST].langKey,L.pB[O.n1u.AGAINST].label)})}):null]})}),(0,M.jsx)(_.ZP.Body,{className:"ds-text-center",children:e.teamStats.map((function(e,n){var a="0"===e.matchesPlayed,t="0/0.0"==e.for?"0":W(e.for),r="0/0.0"==e.against?"0":W(e.against),i=ae[e.teamInfo.id],d=!1,m=!1;i&&!i.rendered&&(d=i.hightlight,m=i.playingLive,ae[e.teamInfo.id].rendered=!0);var p=(0,E.WY)(e.allMatchObjectIds,se),x=p.recentMatches,T=p.nextMatches.slice(0,3);return(0,M.jsxs)(c.Fragment,{children:[(0,M.jsxs)(_.ZP.Row,{className:u()(["ds-text-tight-s ds-text-typo-mid2",{"ds-bg-ui-fill-blue-highlight":d,"ds-border-b-1 !ds-border-line-inverse":n===s-1}]),children:[(0,M.jsx)(b.Z,{rank:e.rank,teamInfo:e.teamInfo,isLive:m,fixed:!0,className:d?"!ds-bg-ui-fill-blue-highlight":""}),Ee?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.seriesPlayed}):null,he?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.seriesWon}):null,(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.matchesPlayed}),(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.matchesWon}),(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.matchesLost}),ee.tie?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":W(e.matchesTied)}):null,ee.draw?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.matchesDrawn}):null,(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.matchesNoResult}),(0,M.jsx)(_.ZP.Cell,{className:u()({"ds-font-bold ds-text-typo":!ee.pct}),maxContent:!0,children:a?"-":e.points}),ee.quotient?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.quotient}):null,ee.nrr?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":(0,E.qb)(e.nrr)}):null,ee.rpwr?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":e.rpwr}):null,ee.pct?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:(0,M.jsx)("strong",{children:null===e.pct?"-":e.pct.toFixed(2)})}):null,(0,M.jsx)(_.ZP.Cell,{className:"ds-cursor-pointer",onClick:function(){return n=e.teamInfo.objectId,void xe(F(F({},pe),{},(0,l.Z)({},n,!pe[n])));var n},children:(0,M.jsxs)("div",{className:"ds-flex ds-justify-end",children:[be?null:(0,M.jsx)(j.Z,{recentMatches:x,team:e.teamInfo}),(0,M.jsx)(f.ZP,{name:pe[e.teamInfo.objectId]?y.v.KEYBOARD_UP_SOLID:y.v.KEYBOARD_DOWN_SOLID})]})}),be?null:(0,M.jsx)(_.ZP.Cell,{maxContent:!0,className:"ds-text-right",children:T.length>0?T.map((function(n,s){var a,l=n.teams.find(();return(0,M.jsxs)(P.Z,{variant:H.Fu.COMPACT_XS,className:"ds-mr-px",children:[0===s?"vs ":"",(0,M.jsx)(I.Z,{label:null!==(a=null===l||void 0===l?void 0:l.team.abbreviation)&&void 0!==a?a:"",labelVariant:H.Fu.COMPACT_XS,anchorType:{href:(0,A.n1)(J,n)},variant:I.I.UNDERLINE}),s<T.length-1?", ":""]},n.id)})):"-"}),ee.forAgainst?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":t}):null,ee.forAgainst?(0,M.jsx)(_.ZP.Cell,{maxContent:!0,children:a?"-":r}):null]}),(0,M.jsx)(_.ZP.Row,{className:u()({"ds-border-none":!pe[e.teamInfo.objectId]}),children:(0,M.jsx)(_.ZP.Cell,{span:20,className:"!ds-p-0 ds-text-left",fixed:q,children:(0,M.jsx)(o.Collapse,{isOpened:pe[e.teamInfo.objectId],children:(0,M.jsx)("div",{className:"ds-px-4 ds-py-2",children:(0,M.jsx)(v.Z,{recentMatches:x,team:e.teamInfo})})})})})]},n)}))})]},n)})]},n)}))}),z&&m.standingsType===O.I2N.ENHANCED?(0,M.jsxs)(Z.Z,{isMobile:!0,match:Z.d.NEGATIVE,children:[R.Z.features.enhancedPointsTable?(0,M.jsx)(K,{className:"ds-my-4",standings:p}):null,R.Z.features.pointsGraph?(0,M.jsx)(G,{className:"ds-mb-4",standings:p}):null]}):null]}),(0,M.jsxs)("div",{className:u()({"ds-px-2":q},"ds-grid lg:ds-grid-cols-12"),children:[(0,M.jsxs)("div",{className:u()(w?"lg:ds-col-span-9":"lg:ds-col-span-12"),children:[(0,M.jsx)("div",{className:"ds-my-4",children:(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,children:(0,M.jsx)(S.Z,{className:"ci-series-standings-notes",html:(0,T.vB)(p.notes),element:"p"})})}),(0,M.jsxs)("div",{className:"ds-my-4",children:[(0,M.jsx)(P.Z,{element:"h5",variant:H.Fu.TIGHT_M,className:"ds-text-typo-light ds-mb-2",children:$("cm_standings_update","Standings are updated with the completion of each game")}),(0,M.jsxs)("div",{className:"ds-grid lg:ds-grid-cols-3",children:[Ee?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,children:[$(L.pB[O.n1u.SERIES_PLAYED].abbrLangKey,L.pB[O.n1u.SERIES_PLAYED].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.SERIES_PLAYED].langKey,L.pB[O.n1u.SERIES_PLAYED].label)})]})}):null,he?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.SERIES_WON].abbrLangKey,L.pB[O.n1u.SERIES_WON].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.SERIES_WON].langKey,L.pB[O.n1u.SERIES_WON].label)})]})}):null,(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.MATCHES_PLAYED].abbrLangKey,L.pB[O.n1u.MATCHES_PLAYED].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.MATCHES_PLAYED].langKey,L.pB[O.n1u.MATCHES_PLAYED].label)})]})}),(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.MATCHES_WON].abbrLangKey,L.pB[O.n1u.MATCHES_WON].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.MATCHES_WON].langKey,L.pB[O.n1u.MATCHES_WON].label)})]})}),(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.MATCHES_LOST].abbrLangKey,L.pB[O.n1u.MATCHES_LOST].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.MATCHES_LOST].langKey,L.pB[O.n1u.MATCHES_LOST].label)})]})}),ee.tie?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.MATCHES_TIED].abbrLangKey,L.pB[O.n1u.MATCHES_TIED].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.MATCHES_TIED].langKey,L.pB[O.n1u.MATCHES_TIED].label)})]})}):null,ee.draw?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.MATCHES_DRAW].abbrLangKey,L.pB[O.n1u.MATCHES_DRAW].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.MATCHES_DRAW].langKey,L.pB[O.n1u.MATCHES_DRAW].label)})]})}):null,(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.MATCHES_NO_RESULT].abbrLangKey,L.pB[O.n1u.MATCHES_NO_RESULT].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.MATCHES_NO_RESULT].langKey,L.pB[O.n1u.MATCHES_NO_RESULT].label)})]})}),(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.MATCH_POINTS].abbrLangKey,L.pB[O.n1u.MATCH_POINTS].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.MATCH_POINTS].langKey,L.pB[O.n1u.MATCH_POINTS].label)})]})}),ee.quotient?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.QUOTIENT].abbrLangKey,L.pB[O.n1u.QUOTIENT].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.QUOTIENT].langKey,L.pB[O.n1u.QUOTIENT].label)})]})}):null,ee.nrr?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.NRR].abbrLangKey,L.pB[O.n1u.NRR].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.NRR].langKey,L.pB[O.n1u.NRR].label)})]})}):null,ee.rpwr?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.RPWR].abbrLangKey,L.pB[O.n1u.RPWR].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.RPWR].langKey,L.pB[O.n1u.RPWR].label)})]})}):null,ee.quotient?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.FOR].abbrLangKey,L.pB[O.n1u.FOR].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,className:"ds-text-typo-mid3",children:$(L.pB[O.n1u.FOR].langKey,L.pB[O.n1u.FOR].label)})]})}):null,ee.quotient?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.AGAINST].abbrLangKey,L.pB[O.n1u.AGAINST].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,children:$(L.pB[O.n1u.AGAINST].langKey,L.pB[O.n1u.AGAINST].label)})]})}):null,ee.pct?(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:"ds-flex ds-space-1 ds-my-1",children:[(0,M.jsxs)(P.Z,{variant:H.Fu.TIGHT_S_BOLD,className:"ds-mr-1",children:[$(L.pB[O.n1u.PERCENTAGE].abbrLangKey,L.pB[O.n1u.PERCENTAGE].abbr),":"]}),(0,M.jsx)(P.Z,{variant:H.Fu.TIGHT_S,children:$(L.pB[O.n1u.PERCENTAGE].langKey,L.pB[O.n1u.PERCENTAGE].label)})]})}):null]})]})]}),w?(0,M.jsx)("div",{className:"lg:ds-col-span-3",children:w}):null]})]})}},47391:function(e,n,s){var a=s(60042),l=s.n(a),t=(s(27378),s(62318)),r=s(2251),i=s(36077),c=s(81817),d=s(24246);n.Z=function(e){var n=e.onColumnHeadClick,s=e.sortable,a=void 0===s||s,u=e.sortFieldType,o=e.clickedColumn,m=e.sortKeyMap,p=e.currentColumnName,x=e.currentColumnTitle,T=e.currentColumnDescription,C=e.groupEnd,E=e.fixed,h=void 0!==E&&E,b=e.className,N=e.containerClassName,S=e.maxContent;return(0,d.jsx)(t.ZP.Cell,{head:!0,className:l()(b),maxContent:S,fixed:h,children:(0,d.jsxs)("div",{className:l()("ds-flex ds-items-center ds-justify-center ds-cursor-pointer",N),onClick:title:T,children:[(0,d.jsx)("span",{className:l()({"ds-underline ds-underline-offset-2":a,"table-head-title-not-clicked":o!==p,"ds-border-r ds-border-line":C}),children:x}),o===p?(0,d.jsx)(i.ZP,{className:"ds-flex ds-w-0",size:c.XR.XS,name:"asc"===m[p]?r.v.KEYBOARD_UP_SOLID:r.v.KEYBOARD_DOWN_SOLID}):(0,d.jsx)(i.ZP,{className:"ds-flex ds-w-0 ds-opacity-0",name:r.v.KEYBOARD_UP_SOLID,size:c.XR.XS})]})})}},11293:function(e,n,s){var a=s(27378),l=s(31283),t=s(62318),r=s(36786),i=s(2251),c=s(1319),d=s(64650),u=s(36077),o=s(97458),m=s(5273),p=s(81817),x=s(24246);n.Z=function(e){var n,s=e.rank,T=e.teamInfo,C=e.isLive,E=void 0!==C&&C,h=e.fixed,b=e.className,N=(0,a.useContext)(c.Z),S=N.device.isMobile,_=N.lang;return(0,x.jsx)(t.ZP.Cell,{fixed:null!==h&&void 0!==h?h:S,className:b,children:(0,x.jsxs)(r.Z,{className:"ds-flex ds-items-center ds-min-w-max",href:(0,d.nv)(_,T),children:[s?(0,x.jsx)(m.Z,{className:"ds-w-[14px]",variant:p.Fu.TIGHT_XS_BOLD,children:s}):null,(0,x.jsxs)("div",{className:"ds-flex ds-items-center ds-space-x-2 ds-ml-2",children:[(0,x.jsx)(l.Z,{isMobile:!0,match:l.d.NEGATIVE,children:null!==(n=T.image)&&void 0!==n&&n.url?(0,x.jsx)(o.Z,{url:T.image.url,variant:p.N6.SQUARE,size:p.Ui.WIDTH_80,alt:T.longName,height:24,width:24}):(0,x.jsx)(u.ZP,{name:i.v.CI_SHEILD_SOLID,size:p.XR.SM})}),(0,x.jsx)(m.Z,{element:"span",variant:p.Fu.TIGHT_S_BOLD,format:p.iL.UPPERCASE,className:"ds-text-left ds-text-typo",children:S?T.abbreviation:T.longName})]}),E&&(0,x.jsx)(u.ZP,{className:"ds-animate-pulse",name:i.v.DOT_CIRCLE_FILLED,color:p.BG.ERROR,size:p.XR.XXS})]})})}},77743:function(e,n,s){s(27378);var a=s(60042),l=s.n(a),t=s(2251),r=s(73627),i=s(30843),c=s(36077),d=s(5273),u=s(81817),o=s(24246);n.Z=function(e){var n=e.matchInfo,s=e.team,a=e.className,m=n.resultStatus;return n.winnerTeamId&&null!==n.resultStatus&&(m=n.winnerTeamId===s.id?r._FL.WON:r._FL.LOST),(0,o.jsx)("div",{className:l()("ds-w-4 ds-h-4 ds-rounded ds-flex ds-items-center ds-justify-center",{"ds-bg-ui-fill-success":m===r._FL.WON,"ds-bg-ui-fill-error":m===r._FL.LOST,"ds-bg-raw-grey07":null===m||![r._FL.WON,r._FL.LOST].includes(m)},a),children:null===m?(0,o.jsx)(c.ZP,{name:t.v.HORIZONTAL_RULE_FILLED,color:u.BG.INVERSE,size:u.XR.XXS}):(0,o.jsx)(d.Z,{variant:u.Fu.TIGHT_XS_MEDIUM,className:"ds-text-raw-white",children:i.MG[m]})})}},74045:function(e,n,s){var a=s(27378),l=s(9091),t=s(62135),r=s(25480),i=s(77743),c=s(24246);n.Z=function(e){var n=e.recentMatches,s=e.team,d=(0,a.useContext)(r.Z).translate,u=n.slice(0,5).reverse();return(0,c.jsx)("div",{className:"ds-flex ds-flex-row ds-justify-center ds-items-start ds-space-x-1 ds-cursor-pointer",children:u.map((function(e,n){return n===u.length-1?(0,c.jsx)(t.Z,{text:d("cm_most_recent_match","Most Recent Match"),placement:l.zJ.TOP,children:(0,c.jsxs)("div",{className:"ds-relative",children:[(0,c.jsx)(i.Z,{matchInfo:e,team:s}),(0,c.jsx)("div",{className:"ds-h-px ds-bg-raw-grey07 ds-w-3/4 ds-mt-0.5 ds-mx-auto"})]})},e.objectId):(0,c.jsx)("div",{className:"ds-flex ds-flex-col ds-items-center",children:(0,c.jsx)(i.Z,{matchInfo:e,team:s})},e.objectId)}))})}},93670:function(e,n,s){var a=s(60042),l=s.n(a),t=s(27693),r=s.n(t),i=s(27378),c=s(36786),d=s(2251),u=s(1319),o=s(25480),m=s(43568),p=s(92572),x=s(77743),T=s(36077),C=s(99011),E=s(5273),h=s(81817),b=s(24246);n.Z=function(e){var n=e.recentMatches,s=e.team,a=e.className,t=(0,i.useContext)(u.Z),N=t.device.isMobile,S=t.lang,_=(0,i.useContext)(o.Z).translate;return 0===n.length?(0,b.jsx)(E.Z,{variant:h.Fu.COMFORTABLE_S,children:" No match details found "}):(0,b.jsx)("div",{className:a,children:n.map((function(e){var n="".concat(r().utc(e.startDate).format("MMMM DD, YYYY"),", ").concat(e.title,", ").concat((0,m.ou)(e,s.id));return(0,b.jsx)(c.Z,{href:(0,p.ep)(S,e),children:(0,b.jsxs)("div",{className:"ds-my-2 ds-flex ds-flex-row ds-space-x-2 ds-items-start",children:[(0,b.jsx)(x.Z,{matchInfo:e,team:s,className:"ds-mt-0.5"}),(0,b.jsxs)("div",{className:l()("ds-flex ds-flex-col"),children:[(0,b.jsx)(E.Z,{variant:h.Fu.COMPACT_XS_MEDIUM,children:n}),(0,b.jsx)(E.Z,{variant:h.Fu.COMPACT_XS,className:"ds-text-typo-mid3 ds-text-left",children:e.statusText})]}),(0,b.jsx)("div",{className:"!ds-ml-auto ds-self-start",children:N?(0,b.jsx)(T.ZP,{name:d.v.KEYBOARD_RIGHT_SOLID,size:h.XR.XS}):(0,b.jsx)(C.Z,{label:_("cm_view_scoreboard","View scorecard"),labelVariant:h.Fu.COMPACT_XS,anchorType:variant:C.I.UNDERLINE,endIcon:d.v.KEYBOARD_RIGHT_SOLID,className:"ds-leading-none"})})]})},e.objectId)}))})}}}]);