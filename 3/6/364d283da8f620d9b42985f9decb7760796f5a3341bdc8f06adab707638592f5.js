!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[6135,3981],{21147:(e,i,t)=>{t.r(i),t.d(i,{default:()=>eq});var s=t(54138),a=t.n(s),n=t(33970),l=t.n(n),o=t(5754),r=t.n(o),c=t(88767),d=t(76636),u=t(30862),m=t(42132),v=t(84741),g=t(67615),p=t(28798),h=t(47995),b=t(6644),x=t(93804),N=t(10274),C=t(51272),f=t(32415),j=t(95004),k=t(55673),Z=t(78667),y=t(49116),w=t(94833);let _={activeCollection:"k8D0o",link:"p4uR3",avatar:"zK_u7",collectionDetails:"z1kLx",collectionName:"CtzHc",collectionDescription:"c0Lia",reorderButton:"ejtJf",linkWrapper:"Q08tH",mobile:"Xak6I"};var A=t(2629),S="sortableCollectionsOrder",P=w.z.array(w.z.string()),I=e=>{var i=e.activeCollectionId,t=e.itemClassName,s=e.isMobile,a=e.className,n=(0,Z.bp)()._n,o=(0,N.bX)().data,c=(0,f.Pc)().data,d=null==o?void 0:o.filter(e=>{var i;return(null==c||null===(i=c.user)||void 0===i?void 0:i.name)===(null==e?void 0:e.owner.name)}),u=(0,j.useState)(function(){try{var e=y.E.getItem(S);return P.parse(JSON.parse(e||""))}catch(e){return}}()),m=l()(u,2),v=m[0],w=m[1],I=d&&function(e,i){if(!i)return e;var t=i.reduce((e,i,t)=>(e[i]=t+1,e),{});return e.toSorted((e,i)=>(t[e.id]||Number.MAX_VALUE)-(t[i.id]||Number.MAX_VALUE))}(d,v),L=(0,j.useCallback)((e,i,t)=>{if(I){var s=t.oldIndex,a=t.newIndex;if(s!==a){var n=(0,b.Uy)(I.map(e=>e.id),e=>{e.splice(a,0,e.splice(s,1)[0])});y.E.setItem(S,JSON.stringify(n)),w(n)}}},[I]);if(I)return(0,A.jsx)(g.Z,{tag:"ul",className:a,onChange:L,options:{animation:150,draggable:".__draggable-item__",handle:`.${h.Z.reorderButton}`,forceFallback:!1},children:I.map(e=>{var a=[];return e.blogs.length>0&&a.push(n("%1$s blog","%1$s blogs",e.blogs.length)),e.tagpack.length>0&&a.push(n("%1$s tag","%1$s tags",e.tagpack.length)),(0,A.jsx)("li",{className:r()({"__draggable-item__":!0,[_.activeCollection]:e.id===i},_.collection,t),children:(0,A.jsxs)("div",{className:r()(_.linkWrapper,{[_.mobile]:s}),children:[(0,A.jsxs)(k.rU,{to:(0,x.gy)({id:e.id}),className:_.link,children:[(0,A.jsx)("div",{className:_.avatar,children:(0,A.jsx)(C.W,{avatar:e.avatar,blogs:e.blogs,id:e.id,dimensions:37})}),(0,A.jsxs)("div",{className:_.collectionDetails,children:[(0,A.jsx)("div",{className:_.collectionName,children:e.name}),(0,A.jsx)("div",{className:_.collectionDescription,children:a.join(" · ")})]})]}),(0,A.jsx)(p.Z,{className:_.reorderButton})]})},e.name)})})},L=t(77209),F=t(94133),M=t(48810),E=t(32468),J=t(43523),D=t(63583),V=t.n(D);let O={homeMenu:"tpJIh",items:"RZBuC",collectionItem:"BYhVs",heading:"sehv1",subNavHeading:"uo2al"};var T=e=>{var i,t=e.activePage,s=(0,Z.bp)(),a=s._c,n=s.logEvent;return(0,A.jsxs)("div",{className:O.homeMenu,children:[(0,A.jsx)("div",{className:O.heading,children:(0,A.jsx)("h3",{children:a("Link label in main navigation pointing to Collections page","Collections")})}),(0,A.jsxs)("div",{className:r()(O.heading,O.subNavHeading),children:[(0,A.jsxs)(k.OL,{to:(0,M.Gn)(x.nN.collections),onClick:()=>n({eventName:J.J.CollectionsNavClick}),end:!0,children:[(0,A.jsx)(L.n,{colors:{primary:V().paletteGray65}})," ",a("Link label in main navigation pointing to Collections page","See all")]}),(0,A.jsxs)(k.OL,{to:(0,M.Gn)(x.nN.collectionCreate),onClick:()=>n({eventName:J.J.CollectionsCreateNavClick}),end:!0,children:["+ ",a("Link label in main navigation pointing to create Collection page","New")]})]}),(0,A.jsx)(F.Z,{fallback:null,children:(0,A.jsx)(I,{activeCollectionId:(0,E.cB)(t)?null==t||null===(i=t.extraAttributes)||void 0===i?void 0:i.collectionId:void 0,className:O.items,itemClassName:O.collectionItem})})]})},B=t(79767),z=t(23213),G=t(12968),W="sortableCommunitiesOrder",R=w.z.array(w.z.string()),H=e=>{var i=e.className,t=e.activeCommunityName,s=e.itemClassName,n=e.onCommunityClick,o=e.isMobile,c=e.showSubNavigation,d=void 0===c||c,u=(0,Z.bp)()._getLocaleNumberString,m=(0,G.F)().data,v=(0,j.useState)(function(){try{var e=y.E.getItem(W);return R.parse(JSON.parse(e||""))}catch(e){return}}()),p=l()(v,2),N=p[0],C=p[1],f=m&&function(e,i){if(!i)return e;var t=i.reduce((e,i,t)=>(e[i]=t+1,e),{});return e.toSorted((e,i)=>(t[e.name]||Number.MAX_VALUE)-(t[i.name]||Number.MAX_VALUE))}(m,N),k=(0,j.useCallback)((e,i,t)=>{if(f){var s=t.oldIndex,a=t.newIndex;if(s!==a){var n=(0,b.Uy)(f.map),e=>{e.splice(a,0,e.splice(s,1)[0])});y.E.setItem(W,JSON.stringify(n)),C(n)}}},[f]);if(f)return(0,A.jsx)(g.Z,{tag:"ul",className:i,onChange:k,options:{animation:150,draggable:".__draggable-item__",handle:`.${h.Z.reorderButton}`,forceFallback:!1},children:f.map(e=>{var i={name:e.title,url:(0,M.Gn)((0,x.j0)({communityId:e.name})),avatar:e.avatarImage,title:`${u(e.memberCount,"short")} members`,uuid:`@@${e.name}`},l=(0,z.L)(i);return(0,A.jsx)("li",{className:r()({"__draggable-item__":!0,LZNW6:e.name===t},"UivaL",s),children:(0,A.jsx)(B.Z,a()(a()({},l),{},{isMobile:o,onClick:n,showSubNavigation:d,internalLink:!0}))},e.name)})})};let U={homeMenu:"BC4i0",items:"yVAMA",heading:"mKEeW"};var $=e=>{var i,t=e.activePage,s=(0,Z.bp)()._t;return(0,A.jsxs)("div",{className:U.homeMenu,children:[(0,A.jsx)("div",{className:U.heading,children:(0,A.jsx)("h3",{children:s("Communities")})}),(0,A.jsx)(F.Z,{fallback:null,children:(0,A.jsx)(H,{activeCommunityName:(0,E.MZ)(t)?null==t||null===(i=t.extraAttributes)||void 0===i?void 0:i.blogName:void 0,className:U.items,itemClassName:U.CommunitiesBlogItem,showSubNavigation:!1})})]})},q=t(44238),K=t(2487),X=t(55953),Y=t(63100),Q=t(68144),ee=t(69486),ei=t(7161),et=t(70648),es=t(69654),ea=t(10689),en=t(70106),el=t(85768),eo=t(63764),er=t(93390),ec=t(16558),ed=t(25723),eu=t(31872),em=t(33272),ev=t(99708),eg=t(40033),ep=t(4609),eh=t(8535),eb=t(9358),ex=t(34417),eN=t(58811),eC=t(73465),ef=t(10381),ej=t(25190),ek=t(90127),eZ=t(11007),ey=t(13194),ew=t(56249),e_=t(47211),eA=t(13773),eS=t(56256),eP=t(68239),eI=t(40563),eL=t(49803),eF=()=>{var e=(0,j.useState)({}),i=l()(e,2),t=i[0],s=i[1];return(0,eL.L)(()=>{var e=document.createElement("div");e.style.position="fixed",e.style.visibility="hidden",e.style.height="100px",e.style.width="100px",e.style.overflowY="scroll",document.body.append(e);var i=e.offsetWidth-e.clientWidth;e.remove(),s({scrollbarIsObtrusive:0!==i,scrollbarIsOverlaid:0===i,scrollbarWidth:i})},[]),t},eM=t(96467),eE=t.n(eM),eJ=t(28886),eD=t(26082),eV=t(54589),eO=t.n(eV),eT=t(53714),eB=t(43684),ez=t(93207),eG=["popover","onClick"];let eW=e=>{var i=e.popover,t=e.onClick,s=eO()(e,eG),n=(0,j.useState)(!1),o=l()(n,2),r=o[0],c=o[1];return i?(0,A.jsx)(eT.ZP,a()(a()({arrowWrapperClassName:ez.Z.arrow,closeForAllExternalClicks:!0,hasArrow:!0,height:"90vh",isOpen:r,maxHeight:"90vh",onOpen:t,position:eB.I2.Right,shouldFocusContentOnPopoverOpen:!0,showOverflowY:!0,strategy:"fixed",targetWrapperClassName:ez.Z.targetPopoverWrapper,toggle,usePortals:!0},i),{},{children:(0,A.jsx)(eJ.Z,a()(a()({},s),{},{link:void 0,isActive:r||s.isActive}))})):(0,A.jsx)(eJ.Z,a()({onClick:t},s))};var eR=t(11697),eH={showSettings:!1,showAccount:!1,showCommunities:!1,showCollections:!1},eU=()=>(0,A.jsx)("span",{className:eR.Z.newSparkles,children:(0,A.jsx)(ev.Z,{useViewBox:!0})}),e$=()=>{var e=(0,Z.bp)()._t;return(0,A.jsx)("span",{className:eR.Z.betaLabel,children:e("Beta")})};let eq=e=>{var i,t,s,n,o,g,p,h=e.activePage,b=e.blogName,N=e.closeMenu,C=(0,Z.bp)(),y=(0,eI.J)("communities"),w=(0,eI.J)("collections"),_=(0,ej.v$)().isMobile,S=(0,eA.B)(),P=S.unseenPosts,D=S.inboxCount,O=S.unreadMessagesCount,B=S.notificationCount,z=S.privateGroupBlogUnreadPostCounts,G=S.unreadCommunityPostCounts,W=eF().scrollbarIsOverlaid,R=(0,ey.g)(),U=(0,f.Pc)().data,ev=(0,eZ.g)().data,eL=(0,ef.pG)().width,eM=(0,eS.T)(z),eV=(0,eP.J)(G),eO=C._c,eT=C._getLocaleNumberString,eB=C._t,eG=C.configRef,eq=C.features,eK=eq.liveStreamingWeb,eX=eq.liveStreamingUserEnabled,eY=eq.redpopUnreadNotificationsOnTab,eQ=eq.redpopAdFreeCtaNavigation,e0=C.logEvent,e1=C.wwwBaseUrl,e2=(0,j.useState)(eH.showSettings),e3=l()(e2,2),e4=e3[0],e7=e3[1],e6=(0,j.useState)(eH.showAccount),e9=l()(e6,2),e8=e9[0],e5=e9[1],ie=(0,j.useState)(eH.showCommunities||(0,E.MZ)(h)),ii=l()(ie,2),it=ii[0],is=ii[1],ia=(0,j.useState)(eH.showCollections),il=l()(ia,2),io=il[0],ir=il[1];(0,j.useEffect)(()=>{_||e0({eventName:J.J.FeatureExposed,eventDetails:{feature_key:"redpop_vertical_nav"}}),eH.showCommunities=(0,E.MZ)(h)},[]);var ic=()=>e0({eventName:J.J.SettingsNavClick}),id=()=>e0({eventName:J.J.AccountPopover}),iu=()=>e0({eventName:J.J.CommunitiesPopover}),im=()=>e0({eventName:J.J.CollectionsPopover}),iv=e=>{e0({eventName:e}),null==N||N()},ig=null==eG?void 0:eG.takeoverLogoUrl,ip=ew.Zq[e_.f.DomainsManagement],ih=(0,ew.J1)(ip.isVisible,C),ib=(0,ew.J1)(ip.isFeaturedAsNew,C),ix=null==U||null===(i=U.user)||void 0===i?void 0:i.hasTumblrPremium,iN=_||eL>=eE().navBreakpointFull,iC="settings_button",ij="settings_subnav",ik=_&&(0,A.jsx)("ul",{"aria-labelledby":iC,className:ez.Z.subNav,hidden:!e4,id:ij,children:Object.entries(ew.Zq).map(e=>{var i,t=l()(e,2),s=t[0],a=t[1],n=a.title,o=a.isActiveInNavigationFor,r=void 0===o:o,c=a.isVisible,d=a.isVisibleInNavigation,u=a.isFeaturedAsNew,m=a.clickEvent;return(0,ew.J1)(void 0===d?c:d,C)&&(0,A.jsx)(eJ.Z,{link:(0,ek.B9)({page:s}),useRouter:!0,onClick:m?()=>iv(m):N,endChild:(0,ew.J1)(u,C)&&(0,A.jsx)(eU,{}),isActive:(0,E.K3)(h)&&r().includes(null===(i=h.extraAttributes)||void 0===i?void 0:i.page),children:n(C)},s)})}),iZ="account_button",iy="account_subnav",iw=null!==(t=null==U||null===(s=U.user)||void 0===s?void 0:s.likes)&&void 0!==t?t:0,i_=null!==(n=null==U||null===(o=U.user)||void 0===o?void 0:o.following)&&void 0!==n?n:0,iA=iN&&(0,A.jsxs)("ul",{"aria-labelledby":iZ,className:ez.Z.subNav,hidden:!e8,id:iy,children:[(0,A.jsx)(eJ.Z,{endChild:iw<0?"⏳":eT(iw),isActive:(0,E.Vj)(h),link:ek.o_.likes,onClick:()=>iv(J.J.LikesNavClick),useRouter:!0,children:eB("Likes")}),(0,A.jsx)(eJ.Z,{endChild:eT(i_),isActive:(0,E.sl)(h),link:ek.o_.following,onClick:()=>iv(J.J.FollowingNavClick),useRouter:!0,children:eO("Link to blog's Following page","Following")}),(0,A.jsx)(u._,{isMobile:!0}),(0,A.jsx)(eJ.Z,{childIsButton:!0,children:(0,A.jsx)(ep.Z,{children:eB("Log out")})}),(0,A.jsx)(F.Z,{fallback:null,children:(0,A.jsxs)("li",{className:eR.Z.blogSectionWrapper,children:[(0,A.jsxs)("div",{className:eR.Z.navSubHeader,children:[(0,A.jsx)("h4",{children:eB("Blogs")}),(0,A.jsxs)("a",{href:`${e1}/new/blog`,children:["+ ",eB("New")]})]}),(0,A.jsx)(Y.s,{isMobile:!0,activeBlogName:b,itemClassName:eR.Z.blogTile,onBlogClick:N,showSubNavigation:_})]})})]}),iS="community_button",iP="community_subnav",iI=iN&&(0,A.jsx)("ul",{"aria-labelledby":iS,className:ez.Z.subNav,hidden:!it,id:iP,children:(0,A.jsx)(F.Z,{fallback:null,children:(0,A.jsx)("li",{className:eR.Z.blogSectionWrapper,children:(0,A.jsx)(H,{isMobile:!0,activeCommunityName:(0,E.MZ)(h)?null==h||null===(g=h.extraAttributes)||void 0===g?void 0:g.blogName:void 0,itemClassName:eR.Z.blogTile,onCommunityClick:N,showSubNavigation:!1})})})}),iL="collections_button",iF="collections_subnav",iM=iN&&(0,A.jsxs)("ul",{"aria-labelledby":iL,className:ez.Z.subNav,hidden:!io,id:iF,children:[(0,A.jsxs)("div",{className:eR.Z.navSubHeader,children:[(0,A.jsx)("h4",{children:(0,A.jsx)(k.OL,{to:(0,M.Gn)(x.nN.collections),onClick:()=>e0({eventName:J.J.CollectionsNavClick}),className:e=>{var i=e.isActive;return r()({[eR.Z.active]:i})},end:!0,children:eO("Link label in main navigation pointing to Collections page","See all")})}),(0,A.jsxs)(k.OL,{to:(0,M.Gn)(x.nN.collectionCreate),onCli}),className:e=>{var i=e.isActive;return r()({[eR.Z.active]:i})},end:!0,children:["+ ",eO("Link label in main navigation pointing to create Collection page","New")]})]}),(0,A.jsx)(F.Z,{fallback:null,children:(0,A.jsx)("li",{className:eR.Z.blogSectionWrapper,children:(0,A.jsx)(I,{isMobile:!0,activeCollectionId:(0,E.cB)(h)?null==h||null===(p=h.extraAttributes)||void 0===p?void 0:p.collectionId:void 0,itemClassName:eR.Z.blogTile,onCollectionClick:N})})})]}),iE=!eY||!(0,E.fR)(h);return(0,A.jsxs)("div",{className:eR.Z.navigation,role:_?void 0:"banner",children:[(0,A.jsx)("div",{className:eR.Z.navigationInner,children:(0,A.jsxs)("nav",{className:r()(eR.Z.primaryNav,{[eR.Z.scrollbarIsOverlaid]:W}),children:[(0,A.jsxs)("ul",{className:eR.Z.navigationLinks,tabIndex:-1,children:[(0,A.jsxs)("li",{className:eR.Z.logoContainer,children:[ig?(0,A.jsx)(K.Z,{logoUrl:ig}):(0,A.jsx)(X.Z,a()({theme:"light",animatedGradientOnHover:!0,showFullLogo:iN},iN&&{size:{width:98,height:20}})),_&&(0,A.jsx)(eg.Z,{onClick:()=>iv(J.J.CloseNavClick),className:eR.Z.closeButton,iconProps:{colors:{primary:V().transparentWhite60}}})]}),(0,A.jsx)(eJ.Z,{link:ek.o_.dashboard,useRouter:!0,onClick:()=>iv(J.J.HomeNavClick),startChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(es.Z,{}),!_&&(0,A.jsx)(q.Z,{className:eR.Z.badge,count:iE?P:0})]}),endChild:iE&&(0,A.jsx)(q.Z,{className:r()(eR.Z.badge,eR.Z.static),count:P}),isActive:(0,E.fR)(h),title:eB("Home"),children:eB("Home")}),(0,A.jsx)(eD.A,{onClick:()=>iv(J.J.ExploreNavClick)}),w&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(eW,a()(a()({startChild:(0,A.jsx)(L.n,{}),endChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(e$,{}),(0,A.jsx)(Q.sn,{className:eR.Z.caret})]}),title:eO("Link label in main navigation pointing to Collections","Collections")},iN?{isOpen:io,onClick:e=>{e.stopPropagation(),ir(e=>{var i=!e;return!0===i&&im(),eH.showCollections=i,i})},buttonId:iL,subNavId:iF}:{popover:{component:(0,A.jsx)(T,{activePage:h}),width:240,height:"auto",maxHeight:"90vh",onOpen:im},isActive:(0,E.kd)(h),title:eO("Link label in main navigation pointing to Collections","Collections")}),{},{children:eO("Link label in main navigation pointing to Collections","Collections")})),iM]}),y&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(eW,a()(a()({startChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ee.Z,{}),!_&&(0,A.jsx)(q.Z,{className:r()(eR.Z.badge),count:eV})]}),endChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(eU,{}),eV&&eV>0?(0,A.jsx)(q.Z,{className:r()(eR.Z.badge,eR.Z.static),count:eV}):(0,A.jsx)(Q.sn,{className:eR.Z.caret})]}),title:eB("Communities")},iN?{isOpen:it,onClick:e=>{e.stopPropagation(),is(e=>{var i=!e;return!0===i&&iu(),eH.showCommunities=i,i})},buttonId:iS,subNavId:iP}:{popover:{component:(0,A.jsx)($,{activePage:h}),width:240,height:"auto",maxHeight:"90vh",onOpen:iu},isActive:(0,E.VM)(h),title:eB("Communities")}),{},{children:eB("Communities")})),iI]}),C.features.tumblrPatio&&!_?(0,A.jsx)(eJ.Z,{link:ek.o_.patio,isActive:(0,E.im)(h),useRouter:!0,startChild:(0,A.jsx)(ei.$,{}),endChild:(0,A.jsx)(e$,{}),title:eB("Patio"),children:eB("Patio")}):null,eK&&eX&&(0,A.jsx)(eJ.Z,{link:ek.o_.live,useRouter:!0,onClick:()=>iv(J.J.TumblrLiveLiveAccessed),startChild:(0,A.jsx)(en.Z,{}),isActive:(0,E.jl)(h),featureExposedKey:"liveStreaming",title:eB("Live"),children:eB("Live")}),(0,A.jsx)(eW,a()(a()({link:ev?(0,ek.Ms)({blogName:ev.name}):`${e1}/activity`,onClick:_?N:()=>iv(J.J.ActivityPopover)},ev?{useRouter:!0}:{isExternalLink:!0}),{},{startChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ea.Z,{}),!_&&(0,A.jsx)(q.Z,{className:eR.Z.badge,count:B})]}),endChild:(0,A.jsx)(q.Z,{className:r()(eR.Z.badge,eR.Z.static),count:B}),isActive:(0,E.fu)(h),title:eB("Activity"),popover:_?void 0:{component:(0,A.jsx)(v.default,{}),width:380,maxHeight:620},children:eB("Activity")})),(0,A.jsx)(eW,{link:ek.o_.messaging,useRouter:!0,onClick:_?N:()=>iv(J.J.MessagesPopover),startChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(eo.Z,{}),!_&&(0,A.jsx)(q.Z,{className:eR.Z.badge,count:O})]}),endChild:(0,A.jsx)(q.Z,{className:r()(eR.Z.badge,eR.Z.static),count:O}),isActive:(0,E.ww)(h),title:eB("Messages"),popover:_?void 0:{component:(0,A.jsx)(eh.Z,{}),width:280,maxHeight:490},children:eB("Messages")}),(0,A.jsx)(eJ.Z,{link:ek.o_.inbox,useRouter:!0,onClick:()=>iv(J.J.InboxNavClick),startChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(el.Z,{}),!_&&(0,A.jsx)(q.Z,{className:eR.Z.badge,count:D})]}),endChild:(0,A.jsx)(q.Z,{className:r()(eR.Z.badge,eR.Z.static),count:D}),isActive:(0,E.GT)(h),title:eB("Inbox"),children:eB("Inbox")}),(0,A.jsx)(eW,a()(a()({startChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(eu.Z,{}),!_&&(0,A.jsx)(q.Z,{className:eR.Z.badge,count:eM})]}),endChild:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(q.Z,{className:r()(eR.Z.badge,eR.Z.static),count:eM}),(0,A.jsx)(Q.sn,{className:eR.Z.caret})]})},iN?{isOpen:e8,onClick:e=>{e.stopPropagation(),e5(e=>{var i=!e;return!0===i&&id(),eH.showAccount=i,i})},buttonId:iZ,subNavId:iy}:{popover:{component:(0,A.jsx)(m.AccountPopover,{activePage:h}),width:240,height:"auto",maxHeight:"90vh",onOpen:id},isActive:(0,E.G8)(h,!1),title:eB("Account")}),{},{children:eB("Account")})),iA,(0,A.jsx)(eJ.Z,a()(a()({startChild:(0,A.jsx)(ec.Z,{}),title:eB("Settings"),isActive:(0,E.K3)(h)},_?{isOpen:e4,onClick:e=>{e.stopPropagation(),e7(e=>{var i=!e;return!0===i&&ic(),eH.showSettings=i,i})},buttonId:iC,subNavId:ij,endChild:(0,A.jsx)(Q.sn,{className:eR.Z.caret})}:{link:(0,M.Gn)(ek.o_.accountSettings),useRouter:!0}),{},{children:eB("Settings")})),ik,(0,A.jsx)(eW,{link:ek.o_.tumblrMart,onClick:()=>iv(J.J.TumblrMartShopClick),useRouter:!0,startChild:(0,A.jsx)(ed.Z,{}),title:eB("TumblrMart"),popover:_?void 0:{component:(0,A.jsx)(eb.Z,{source:"desktop-header"}),width:380,maxHeight:620},children:eB("TumblrMart")}),ih&&(0,A.jsx)(eJ.Z,{endChild:ib&&(0,A.jsx)(eU,{}),link:ek.o_.domainPurchase,onClick:()=>iv(J.J.DomainsNavClick),startChild:(0,A.jsx)(et.Z,{}),title:eO("Short CTA for buying a custom domain; button opens a marketing page","Get a domain"),useRouter:!0,children:eO("Short CTA for buying a custom domain; button opens a marketing page","Get a domain")}),!ix&&!eQ&&(0,A.jsx)(eJ.Z,{link:(0,ek.B9)({page:e_.f.AdFreeBrowsing}),onClik),startChild:(0,A.jsx)(em.Z,{}),title:eB("Go Ad-Free"),useRouter:!0,children:eB("Go Ad-Free")}),eQ&&!ix&&_&&(0,A.jsx)(eN.O,{productGroup:"ad-free",title:(0,eC.UX)(eO),expandText:(0,eC.Mi)(eO,eT),krakenEvent:J.J.AdFreeNavClick,onClick:N}),!_&&!!(null!=R&&R.length)&&(0,A.jsx)("li",{children:(0,A.jsx)(ex.Z,{vertical:!0})})]}),(0,A.jsx)("div",{className:eR.Z.aboutLinks,children:(0,A.jsx)(c.Z,{})})]})}),(0,A.jsx)("div",{className:eR.Z.createPost,children:(0,A.jsxs)(d.Z,{label:eB("Create a post"),onClick:N,className:eR.Z.createPostButton,children:[(0,A.jsx)(er.Z,{}),eB("Create")]})})]})}},77209:(e,i,t)=>{t.d(i,{n:()=>s});var s=(0,t(36343).q)("collections");s.defaultProps={size:{width:16,height:16}}},69486:(e,i,t)=>{t.d(i,{Z:()=>a});var s=(0,t(36343).q)("communities");s.defaultProps={size:{width:25,height:24}};let a=s},40033:(e,i,t)=>{t.d(i,{Z:()=>u});var s=t(44009),a=t(98478),n=t(78667),l=t(5754),o=t.n(l),r=t(63583),c=t.n(r),d=t(2629);let u=e=>{var i,t,l=e.onClick,r=e.iconProps,u=e.className,m=(0,n.bp)()._t;return(0,d.jsx)(s.Z,{wrapperClassName:o()("gqUco",u),onClick:l,label:m("Close"),title:m("Close"),children:(0,d.jsx)(a.Z,{size:null!==(i=null==r?void 0:r.size)&&void 0!==i?i:{width:14,height:14},colors:null!==(t=null==r?void 0:r.colors)&&void 0!==t?t:{primary:c().paletteWhiteOnDark}})})}},58811:(e,i,t)=>{t.d(i,{O:()=>d});var s=t(73465),a=t(90127),n=t(25793),l=t(78994),o=t(43523),r=t(78667),c=t(2629),d=e=>{var i=e.title,t=e.expandText,d=e.accentText,u=e.onClick,m=e.productGroup,v=e.krakenEvent,g=(0,r.bp)(),p=g._c,h=g._getPriceInCurrency,b=g.logEvent,x=(0,n.m)(m),N=x.data,C=x.isError,f=(0,l.s0)();if(!N||C)return null;var j=(0,s.AS)(N,p,h),k=i||N.title,Z=t||N.subtitle;return(0,c.jsxs)("button",{className:"HOjIH",onClick:()=>{v?b({eventName:v}):b({eventName:o.J.TumblrMartExpandOnHoverCtaClicked,eventDetails:{productGroup:m}}),u&&u(),f((0,a.v)({productGroup:m}))},children:[(0,c.jsxs)("span",{className:"L_SvM",children:[(0,c.jsx)("span",{className:"NFDGM",children:k}),(0,c.jsx)("span",{className:"MLUVg",children:d||j})]}),(0,c.jsx)("span",{className:"CHF47",children:Z})]})}},10274:(e,i,t)=>{t.d(i,{Kx:()=>j,bX:()=>f,$J:()=>k,Do:()=>y,fe:()=>Z});var s=t(17276),a=t.n(s),n=t(33590),l=t(46244),o=t(77865),r=t(91253),c=t(92779),d=t(94833),u=d.z.object({avatar:d.z.array(c.k0).optional(),name:d.z.string(),title:d.z.string(),url:d.z.string(),uuid:d.z.string()}),m=d.z.object({avatar:d.z.array(c.k0),blogs:d.z.array(u),description:d.z.string(),followingPack:d.z.boolean(),id:d.z.string(),name:d.z.string(),owner:u,public:d.z.boolean(),tagpack:d.z.array(d.z.string())}),v=(0,r.i)(m),g=d.z.array(m),p=(0,r.i)(d.z.object({blogpacks:g})),h=t(78667),b=t(10240),x=e=>["collections",e]"],C=e=>{var i;return a()().async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a()().awrap(e("/v2/blogpacks",p));case 2:return i=t.sent,t.abrupt("return",i.response.blogpacks);case 4:case"end":return t.stop()}},null,null,null,Promise)},f=()=>{var e=(0,h.bp)().apiFetchWithSchema;return(0,n.a)({queryKey:N(),querye)})},j=e=>{var i=(0,h.bp)().apiFetchWithSchema;return(0,n.a)({queryKey:x(e),queryFn:()=>(function(e,i){var t;return a()().async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a()().awrap(e(`/v2/blogpacks/${i}`,v));case 2:return t=s.sent,s.abrupt("return",t.response);case 4:case"end":return s.stop()}},null,null,null,Promise)})(i,e),retry:(e,i)=>!(i instanceof b.Z)||404!==i.status})},k=()=>{var e=(0,h.bp)().apiFetchWithSchema;return(0,l.D)({mutationFn:i=>{var t,s,n,l,o,r;return a()().async(function(c){for(;;)switch(c.prev=c.next){case 0:return t=i.name,s=i.description,n=i.tagpack,l=i.blogs,o=i.media_url,c.next=3,a()().awrap(e("/v2/blogpacks",v,{method:"POST",body:{name:t,description:s,tagpack:n,blogs:l,media_url:o,public:!0}}));case 3:return r=c.sent,c.abrupt("return",r.response);case 5:case"end":return c.stop()}},null,null,null,Promise)}})},Z=()=>{var e=(0,h.bp)().apiFetchWithSchema,i=(0,o.NL)();return(0,l.D)({mutationFn:i=>{var t,s,n,l,o,r,c;return a()().async(function(d){for(;;)switch(d.prev=d.next){case 0:return t=i.id,s=i.media_url,n=i.name,l=i.description,o=i.tagpack,r=i.blogs,d.next=3,a()().awrap(e(`/v2/blogpacks/${t}`,v,{method:"PUT",body:{media_url:s,name:n,description:l,tagpack:o,blogs:r,public:!0}}));case 3:return c=d.sent,d.abrupt("return",c.response);case 5:case"end":return d.stop()}},null,null,null,Promise)},onSuccess:e=>{var t=e.id;i.invalidateQueries({queryKey:x(t)})}})},y=()=>{var e=(0,h.bp)().apiFetch,i=(0,o.NL)();return(0,l.D)({mutationFn:i=>{var t=i.id;return e(`/v2/blogpacks/${t}`,{method:"DELETE"})},onSuccess:e=>{var t=e.id;i.invalidateQueries({queryKey:x(t)})}})}},51272:(e,i,t)=>{t.d(i,{W:()=>v});var s=t(5754),a=t.n(s),n=t(38149),l=t(25190),o=t(78667),r=t(61238);let c={container:"X2bNy"};var d=t(2629),u=e=>{var i=e.blogs.slice(0,4).map(e=>(0,d.jsx)(n.Sw,{className:c.avatar,imageResponse:e.avatar,isSquare:!0},e.name));return(0,d.jsx)("div",{className:a()(c.container),children:i})},m=e=>{var i=e.avatar,t=e.blogs,s=e.altText,a=e.id,l=t.length>0,o=t.filter(r.Uh),c=i.length>0,m=l&&o.length>=4,v=l&&o.length>0&&o.length<4;if(c||v){var g=c?i:o[0].avatar;return(0,d.jsx)(n.Sw,{imageResponse:g,altText:s})}if(m)return(0,d.jsx)(u,{blogs:o});var p=(0,r.s5)(a);return(0,d.jsx)(n.Sw,{imageResponse:[p],altText:s})},v=e=>{var i=e.avatar,t=e.className,s=e.blogs,n=e.dimensions,r=void 0===n?156:n,c=e.id,u=e.showBorder,v=(0,o.bp)()._c,g=(0,l.v$)().isMobile;return(0,d.jsx)("figure",{className:a()(t,"tPOYE",{QZw59:void 0!==u&&u}),style:{width:g?"100%":`${r}px`,height:g?"auto":`${r}px`},children:(0,d.jsx)(m,{avatar:i,blogs:s,altText:v("Alt text for the logo of a blog collection","Logo for this collection"),id:c})})}},61238:(e,i,t)=>{t.d(i,{Uh:()=>r,s5:()=>d});let s=t.p+"src/labs/routes/base/collections/assets/default-placeholder-1-4b122adb.png",a=t.p+"src/labs/routes/base/collections/assets/default-placeholder-2-f0722677.png",n=t.p+"src/labs/routes/base/collections/assets/default-placeholder-3-98c1ba76.png",l=t.p+"src/labs/routes/base/collections/assets/default-placeholder-4-309b99a4.png";var o=[s,a,n,l,t.p+"src/labs/routes/base/collections/assets/default-placeholder-5-7ef492c1.png",t.p+"src/labs/routes/base/collections/assets/default-placeholder-6-32172aa2.png",t.p+"src/labs/routes/base/collections/assets/default-placeholder-7-2f72a1d0.png"]>0,c=e=>e?e.charCodeAt(e.length-1)%o.length:0,d=e=>({url:o[c(e)],height:234,width:234})},25793:(e,i,t)=>{t.d(i,{m:()=>u});var s=t(17276),a=t.n(s),n=t(33590),l=t(91253),o=t(39377),r=t(78667),c=(0,l.i)(o.xm)e],u=e=>{var i=(0,r.bp)().apiFetchWithSchema;return(0,n.a)({queryKey:d(e),queryFn:()=>{var t;return a()().async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a()().awrap(i("/v2/tumblrmart/store_v2",c,{method:"GET",queryParams:{product_group:e}}));case 2:return t=s.sent.response,s.abrupt("return",t);case 5:case"end":return s.stop()}},null,null,null,Promise)},refetchOnWindowFocus:!1})}},56249:(e,i,t)=>{t.d(i,{J1:()=>m,Nk:()=>u,Zq:()=>d});var s=t(33970),a=t.n(s),n=t(48810),l=t(90127),o=t(43523),r=t(47211),c=["The good stuff","Look around. Be Amazed","What?","Keep Out","More like sadmin","We are awesome","Flips, switches & toggles","Enable the lasers","Let the dogs out","Meow"],d={[r.f.Account]:{title:e=>(0,e._c)("Account settings page title","Account"),description:e=>(0,e._c)("Account settings page description","The essentials"),isVisible:!0,clickEvent:o.J.AccountSettingsNavClick},[r.f.Dashboard]:{title:e=>(0,e._c)("Dashboard Settings | Tumblr","Dashboard"),description:e=>(0,e._c)("Dashboard settings page description","Appearance options, text editor"),isVisible:!0,clickEvent:o.J.DashboardSettingsNavClick},[r.f.Notifications]:{title:e=>(0,e._c)("Notification settings page title","Notifications"),description:e=>(0,e._c)("Notification settings page description","Via email & mobile"),isVisible:!0,clickEvent:o.J.NotificationsSettingsNavClick},[r.f.DomainAdd]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainAdd],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainAddAny]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainAddAny],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainTransfer]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainTransfer],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainsManagement]:{title:e=>(0,e._t)("Domains"),description:e=>(0,e._t)("Buy and manage custom domains"),isVisible:!0,isFeaturedAsNew:!0,isActiveInNavigationFor:()=>[r.f.DomainsManagement,r.f.DomainPurchase,r.f.DomainSettings,r.f.DomainSearch],clickEvent:o.J.DomainsSettingsNavClick},[r.f.DomainPurchase]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainPurchase],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainSearch]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainSearch],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainSettings]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainSettings],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainManageDns]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainSettingsManageDns],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainManageDnsAdd]:{title:()=>"",description:()=>"",routes:()=>[l.o_.domainSettingsAddDns],isVisible:!0,isVisibleInNavigation:!1},[r.f.DomainManageDnsEdit]:{title:()=>"",descripti"",routs],isVisible:!0,isVisibleInNavigation:!1},[r.f.AdFreeBrowsing]:{title:e=>(0,e._t)("Ad-Free Browsing"),description:e=>(0,e._t)("Manage your subscription"),routes:()=>[(0,l.B9)({page:r.f.AdFreeBrowsing}),l.o_.adFreeGiftPermalink],isVisible:!0,analyticsPageName:"PremiumBenefits",clickEvent:o.J.AdFreeSettingsNavClick},[r.f.Purchases]:{title:e=>(0,e._c)("[Payment & Purchases] Navigation menu item name","Payment & purchases"),descripti"),routes:()=>[(0,l.B9)({page:r.f.Purchases})],isVisible:!0,clickEvent:o.J.PurchasesSettingsNavClick},[r.f.Subscriptions]:{title:e=>(0,e._c)("Subscriptions settings page title","Subscriptions"),description:e=>(0,e._c)("Subscriptions settings page description","Manage your subscriptions"),isVisibon,analyticsPageName:"Subscriptions",clickEvent:o.J.SubscriptionsSettingsNavClick},[r.f.Apps]:{title:e=>(0,e._c)("App settings page title","Apps"),description:e=>(0,e._c)("App settings page description","Things you've connected"),isVisible:!0,clickEvent:o.J.AppsSettingsNavClick},[r.f.Privacy]:{title:e=>(0,e._c)("Privacy settings page title","Privacy"),description:e=>(0,e._c)("Privacy settings page description","Manage your privacy settings"),isVisible:!0,clickEvent:o.J.PrivacySettingsNavClick},[r.f.Admin]:{title:e=>(0,e._c)("Administration settings page title","Admin"),description:()=>c[new Date(new Date().setHours(0,0,0,0)).getTime()%10],isVisibin},[r.f.Labs]:{title:e=>(0,e._c)("Tumblr Labs settings page title","Labs"),description:e=>(0,e._c)("Tumblr Labs settings page title","Weird new stuff we're making"),isVisible:!0,clickEvent:o.J.LabsSettingsNavClick},[r.f.Gifts]:{title:e=>(0,e._c)("Gift settings page title","Gifts"),description:e=>(0,e._c)("Gift settings page description","View and accept gifts sent to your blogs."),isVisible:!0,analyticsPageName:"GiftsManagementList",clickEvent:o.J.GiftsSettingsNavClick}},u=e=>Object.entries(d).find(i=>{var t=a()(i,2),s=t[0],o=t[1].routes;return(void 0===o?()=>[(0,l.B9)({page:s})]:o)().soe))}),m=(e,i)=>"function"!=typeof e?!!e:e(i)},56256:(e,i,t)=>{t.d(i,{T:()=>s});function s(e){return Object.values(null!=e?e:{}).reduce((e,i)=>{var t=Number(i);return isNaN(t)?e:e+t},0)}},68239:(e,i,t)=>{t.d(i,{J:()=>s});function s(e){return Object.values(null!=e?e:{}).reduce((e,i)=>{var t=Number(i);return isNaN(t)?e:e+t},0)}},498t}}]);