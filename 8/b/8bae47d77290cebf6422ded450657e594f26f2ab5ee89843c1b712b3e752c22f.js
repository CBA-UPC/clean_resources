!);var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"redpop@b474a6ad4354f4ba5fde672fa4e9c2c267684761"};"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[1912],{55397:(e,t,s)=>{s.d(t,{Z:()=>a});var i=(0,s(36343).q)("info");i.defaultProps={size:{width:24,height:24}};let a=i},43107:(e,t,s)=>{s.d(t,{Z:()=>M});var i=s(54138),a=s.n(i),r=s(33970),n=s.n(r),l=s(54589),o=s.n(l),c=s(5754),h=s.n(c),p=s(95004),d=s(55673),m=s(36485),u=s(44009),g=(0,s(36343).q)("filter-alt");g.defaultProps={size:{width:24,height:24}};var v=s(99708),b=s(39191),x=s(25190),P=s(90127),j=s(43523),f=s(78667),S=s(68144),y=s(96467);let N={tabsNavArrowButton:"KO5EN",arrowLeft:"V7v4g",arrowRight:"TyF2z",hidden:"m2bR1"};var w=s(2629);function C(e){var t=e.scrollingEl,s=(0,f.bp)()._c,i=(0,p.useState)(!0),a=n()(i,2),r=a[0],l=a[1],o=(0,p.useState)(!0),c=n()(o,2),d=c[0],m=c[1],g=e=>{var s=t.scrollLeft+(e?t.clientWidth/2:-Math.abs(t.clientWidth/2));t.scrollTo({left:s})};return(0,p.useEffect)(()=>{function e(e){var s=t.clientWidth,i=t.children[0].clientWidth;l(e<=y.timelineTabHorizontalMarginPx),m(e>=i-s-y.timelineTabHorizontalMarginPx)}(t.scrollLeft),t.addEventListener("scroll",s);var i=new ResizeObserver(;return i.observe(t.children[0]),function(){null==t||t.children[0].removeEventListener("scroll",s),i.unobserve(t),i.disconnect()}},[t]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{onClick:wrapperClassName:h()(N.tabsNavArrowButton,N.arrowLeft,r&&N.hidden),"aria-label":s("Label for a button that scrolls left","Scroll left"),children:(0,w.jsx)(S.UX,{})}),(0,w.jsx)(u.Z,{onClick:wrapperClassName:h()(N.tabsNavArrowButton,N.arrowRight,d&&N.hidden),"aria-label":s("Label for a button that scrolls right","Scroll right"),children:(0,w.jsx)(S.jV,{})})]})}var Z=s(28431),k=s(98384),O=s(9557),T=s(54382),D=s(43684);let B={dropdownMenu:"rTGl_",dropdownMenuItem:"RSD75",dropdownTitleContainer:"WojaA",arrow:"hXMYF",isActive:"nNfe0"},E=function(e){var t,s=e.submenuElements,i=e.activeOption,r=e.getLinkProps,n=e.getButtonProps,l=e.wrapperClassName,o=e.isActiveClassName,c=!!s.includes(i),p=(0,w.jsx)("div",{className:B.dropdownMenu,children:s.map(e=>{if(r){var t=r(e);return(0,w.jsx)(Z.Z,{linkTo:t.to,className:B.dropdownMenuItem,onClick:t.onClick,children:(0,w.jsx)("span",{"aria-label":t["aria-label"],children:t.children})},t.to)}return!!n&&(0,w.jsx)(Z.Z,{children:(0,w.jsx)(u.Z,a()({},n(e)))},e)})});return(0,w.jsx)(O.Z,{component:p,position:D.I2.BottomStart,width:200,height:"auto",usePortals:!0,children:(0,w.jsx)(u.Z,{wrapperClassName:h()(void 0===l?"wrapper":l,{[void 0===o?"active":o]:c}),className:B.timelineOptionInner,children:(0,w.jsxs)("span",{className:B.dropdownTitleContainer,children:[(0,w.jsx)("span",{className:B.titleContainerText,children:(t=s.find()?r?r(t).children:n(t).label:(0,w.jsx)(T.ZP,{children:"More"})}),(0,w.jsx)("span",{className:h()(B.arrow,{[B.isActive]:c}),children:(0,w.jsx)(k.$S,{})})]})})})},_={timelineHeader:"p4DiZ",reblogRedesignEnabled:"ani78",timelineHeaderNavInner:"WVvBo",timelineOptionsItemWrapper:"MNkkC",timelineHeaderNav:"JuP8X",timelineHeaderButtons:"Ojie7",configurableTabsHeader:"Wxvpx",timelineOptions:"uM3pd",timelineLoggedOut:"kjNtH",addBottomMargin:"ZHf8b",timelineChangeOption:"wl0Ka",timelineOptionInner:"OPOal",active:"sSq2h",timelineScrollable:"bZTy6",submenuWrapper:"vBp1h",loggedOutOptions:"DV0UQ",tabManagementLink:"vli36",sparkle:"P6ZvZ",hidden:"MR2LH"};var L=["activeOption","addBottomMargin","defaultActiveOption","getButtonProps","getLinkProps","hideOnDesktop","isConfigurableTabsHeader","isScrollingHeader","submenuOptions","timelineChangeOptionClassName","timelineOptions","timelineOptionsClassName"];let M=function(e){var t,s,i=e.activeOption,r=e.addBottomMargin,l=e.defaultActiveOption,c=e.getButtonProps,S=e.getLinkProps,y=e.hideOnDesktop,N=e.isConfigurableTabsHeader,Z=void 0!==N&&N,k=e.isScrollingHeader,O=void 0!==k&&k,T=e.submenuOptions,D=e.timelineChangeOptionClassName,B=e.timelineOptions,M=e.timelineOptionsClassName,A=o()(e,L),F=(0,x.v$)().isMobile,H=(0,f.bp)(),I=H._c,W=H.features,V=H.isLoggedIn,R=H.logEvent,U=!V&&F,z=(0,p.useState)(null),J=n()(z,2),G=J[0],q=J[1],Y=(0,p.useState)(!1),K=n()(Y,2),X=K[0],Q=K[1],$=(0,p.useCallback)(e=>h()(_.timelineChangeOption,D,{[_.active]:e,[_.loggedOutOptions]:U}),[D]),ee=(0,p.useCallback)([]),et=null!==(t=(0,p.useRef)(),(0,p.useEffect)([i]),s=t.current)&&void 0!==s?s:l;(0,p.useEffect)(()=>{var e=B.indexOf(i),t=et&&B.indexOf(et);return R({eventName:j.J.DashboardTabScreenView,eventDetails:{screen_id:"DashboardTab",tab_position:e}}),void 0!==t&&t!=e&&R({eventName:j.J.TabbedDashboardTabChanged,eventDetails:{origin_tab_index:t,destination_tab_index:e,origin_tab_id:B[t],destination_tab_id:B[e]}}),()=>{R({eventName:j.J.DashboardTabScreenLeft,eventDetails:{screen_id:"DashboardTab",tab_position:e}})}},[i,Z]);var es=(0,p.useRef)(new Map),ei=(e,t)=>{var s=es.current;t?null==s||s.set(e,t):null==s||s.delete(e),e===i&&ea(e),Q(!0)},ea=(0,p.useCallback)(e=>{if(O){var t=es.current,s=null==t?void 0:t.get(e);s&&G&&((e,t)=>{var s=matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",i=e.offsetLeft-(t.clientWidth/2-e.clientWidth/2);t.scrollTo({left:i,behavior:s})})(s,G)}},[i,B]);return(0,w.jsxs)("div",{className:h()(_.timelineHeader,{[_.addBottomMargin]:void 0!==r&&r,[_.hideOnDesktop]:void 0!==y&&y,[_.reblogRedesignEnabled]:W.reblogRedesignNew}),children:[(0,w.jsx)("div",{className:_.timelineHeaderNav,children:(0,w.jsx)("div",{className:h()(_.timelineHeaderNavInner,{[_.timelineScrollable]:O}),ref:ee,children:(0,w.jsxs)("div",{className:h()(_.timelineOptions,M,{[_.timelineLoggedOut]:U}),children:[O&&G&&X?(0,w.jsx)(C,{scrollingEl:G}):null,B.map(e=>{var t=$(e===i),s={key:e},r=null==c?void 0:c(e);return S?O?(0,w.jsx)("div",{className:h()(e===i&&_.active,_.timelineOptionsItemWrapper),ref:children:(0,w.jsx)(d.rU,a()(a()(a()({},s),S(e)),{},{className:t}))},e):(0,w.jsx)(d.rU,a()(a()(a()({},s),S(e)),{},{className:t})):(0,w.jsx)(u.Z,a()(a()(a()({},s),r),{},{wrapperClassName:t,className:_.timelineOptionInner,children:r.label}))}),T&&(0,w.jsx)("div",{className:h()(_.submenuWrapper,{[_.loggedOutOptions]:U}),children:(0,w.jsx)(E,a()({activeOption:i,submenuElements:T,isActiveClassName:_.active,wrapperClassName:_.timelineChangeOption},c?{getButtonProps:c}:{getLinkProps:S}),"submenu")})]})})}),!F&&A.viewsShown.length>0&&(0,w.jsx)("div",{className:_.timelineHeaderButtons,children:(0,w.jsx)(b.Z,a()({},A))}),Z?(0,w.jsx)("div",{className:h()(_.timelineHeaderButtons,_.configurableTabsHeader),children:(0,w.jsx)("div",{className:_.tabManagementLink,children:(0,w.jsxs)(d.rU,{to:i?(0,m.S)(P.o_.tabManagement,{active:i}):P.o_.tabManagement,title:I("Button that opens Dashboard Tabs Configure screen","Configure Dashboard Tabs"),children:[(0,w.jsx)(g,{}),(0,w.jsx)("span",{className:h()(_.sparkle,_.hidden),children:(0,w.jsx)(v.Z,{})})]})})}):null]})}},11461:(e,t,s)=>{s.r(t),s.d(t,{default:);var i=s(54138),a=s.n(i),r=s(50209),n=s.n(r),l=s(78994),o=s(52980),c=s(98724),h=s(30337),p=s(54382),d=s(43597),m=s(90127),u=s(32468),g=s(71417),v=s(78667),b=s(14728),x=s(10732),P=s(5754),j=s.n(P),f=s(1539);let S={alert:"c8AIf",alertContent:"nQWq3",alertTitle:"vDCwA",content:"x2P16",text:"s2SBW",heading:"Awavc"};var y=s(2629);let N=e=>{var t=e.alertTitle,s=e.alertBody,i=(0,y.jsxs)("div",{className:S.alertContent,children:[(0,y.jsx)("p",{className:S.alertTitle,children:t}),(0,y.jsx)("p",{className:S.alertBody,children:s})]});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.Z,{theme:"info",message:i,wrapperClassName:S.alert}),(0,y.jsxs)("div",{className:S.content,children:[(0,y.jsx)("h2",{className:j()(S.heading,S.text),children:(0,y.jsx)(p.ZP,{children:"Exclusive posts for your biggest fans"})}),(0,y.jsx)("p",{className:S.text,children:(0,y.jsx)(p.ZP,{children:"Nothing beats having a monthly income to support your work. Your fans probably want you to have that freedom as much as you do."})})]})]})};var w=s(95004),C=s(91264),Z=s(43107),k={}),O=s(22979),T=s(85795),D=s(45051),B=s(63583),E=s.n(B);let _=e=>{var t=e.filter,s=t===k.Active?(0,y.jsx)(p.ZP,{comment:"Title when no active members",children:"You have no active supporters."}):(0,y.jsx)(p.ZP,{comment:"Title when no inactive members",children:"You have no inactive supporters."}),i=t===k.Active?(0,y.jsx)(p.ZP,{comment:"Message when no active members",children:"Your supporters will appear here once they are active."}):(0,y.jsx)(p.ZP,{comment:"Message when no inactive members",children:"Your past supporters will appear here once they are inactive."});return(0,y.jsxs)("div",{className:"PK17k",children:[(0,y.jsx)("span",{className:"TEikV",children:s}),(0,y.jsx)("span",{className:"fIBSM",children:i})]})},L=()=>(0,y.jsxs)("div",{className:"nHrJ1",children:[(0,y.jsx)("span",{className:"ahTos",children:(0,y.jsx)(p.ZP,{children:"Member"})}),(0,y.jsx)("span",{className:"WHe6a",children:(0,y.jsx)(p.ZP,{children:"Inactive since"})}),(0,y.jsx)("span",{className:"vyMEc",children:(0,y.jsx)(p.ZP,{children:"Inactive Status"})})]}),M=()=>(0,y.jsxs)("div",{className:"J3TxO",children:[(0,y.jsx)("span",{className:"nZRzr",children:(0,y.jsx)(p.ZP,{children:"Member"})}),(0,y.jsx)("span",{className:"jUwry",children:(0,y.jsx)(p.ZP,{children:"Member since"})}),(0,y.jsx)("span",{className:"sqJ3O",children:(0,y.jsx)(p.ZP,{children:"Plan"})})]});var A=[k.Active,k.Inactive];class F extends w.Component{constructor(){super(...arguments),n()(this,"state",{hasError:!1,isEmpty:!1,activeFilter:k.Active}),n()(this,"getBody",()=>{var e=this.props.appContext.apiFetch,t=this.getBlogNameFromProps();return(0,y.jsx)("main",{className:"wDihp",children:(0,y.jsx)(C.ZP,{id:`memberships-subscribers-${t}`,endpointApiRequest:this.getSubscribers(e,t),getObjectsFromResponse:this.getObjectsFromResponse,getNextLink:this.getNextLink,emptyView:this.getEmptyView(),onPaginationError:this.onPaginationError,onPagination:this.onPagination,loader:(0,y.jsx)(c.w,{color:E().transparentBlack65,condensed:!0})})})}),n()(this,"onPagination",e=>{0===e.objects.length?this.setState({isEmpty:!0,hasError:!1}):this.setState({isEmpty:!1,hasError:!1})}),n()(this,"onPaginationError",,n()(this,"getTitle",,n()(this,"getHeader",()=>this.state.activeFilter===k.Active?(0,y.jsx)(M,{}):(0,y.jsx)(L,{})),n()(this,"getSubscribers",(e,t)=>{var s=this.state.activeFilter;return(0,T.ZP)(e).getSubscribers(t,s)}),n()(this,"getObjectsFromResponse",e=>{var t=e.response.timeline.elements;return t.forEach((e,t,s)=>{s[t]=a()(a()({},e),{},{planOwner:this.props.blogName})}),t}),n()(this,"getNextLink",,n()(this,"getEmptyView",()=>{var e=this.state.activeFilter;return(0,y.jsx)(_,{filter:e})}),n()(this,"getTimelineChangeButtonProps",e=>({label:(0,this.props.appContext._t)(e===k.Active?"Active":"Inactive"),onClick:)),n()(this,"setFilterMode",,n()(this,"getBlogNameFromProps",}render(){var e=this.state,t=e.hasError,s=e.isEmpty,i=e.activeFilter;return(0,y.jsxs)("div",{children:[this.getTitle(),(0,y.jsx)(Z.Z,{timelineOptions:A,viewsShown:[],onViewClick:D.Z,getButtonProps:this.getTimelineChangeButtonProps,currentView:O.mt.List,activeOption:i}),(0,y.jsxs)("div",{className:j()("KXOCW",{HYARX:t||s}),children:[!(t||s)&&this.getHeader(),this.getBody()]})]})}}let H=(0,v.HJ)(F);var I=s(17276),W=s.n(I),V=s(33970),R=s.n(V),U=s(44009),z=s(22183),J=s(62570),G=s(55397),q=s(52533),Y=s(6135),K=s(9557),X=s(36583),Q=s(18488),$=s(50213),ee=s(93853);let et=e=>{var t=e.onConfirm,s=e.onDismiss,i=(0,v.bp)()._t;return(0,y.jsxs)("div",{className:"yiGev",children:[(0,y.jsx)("header",{className:"RbebD",children:(0,y.jsx)(p.ZP,{children:"Before you go, there are a few things you should know..."})}),(0,y.jsx)("span",{className:"HQqng",children:(0,y.jsx)(p.ZP,{children:"Deactivating your Post+ means:"})}),(0,y.jsxs)("ul",{className:"BMI9H",children:[(0,y.jsx)("li",{children:(0,y.jsx)(p.ZP,{children:"You'll say goodbye to all of your Post+ supporters"})}),(0,y.jsx)("li",{children:(0,y.jsx)(p.ZP,{children:"Your +Posts will remain on Tumblr with only the teaser visible to everyone."})}),(0,y.jsx)("li",{children:(0,y.jsx)(p.ZP,{children:"Your +Posts will lose the support/subscribe option and you'll no longer receive financial support."})}),(0,y.jsx)("li",{children:(0,y.jsx)(p.ZP,{children:"You'll still have access to all your +Posts and be able to edit them."})})]}),(0,y.jsx)("span",{className:"Ge2Th",children:(0,y.jsx)(p.ZP,{children:"Deactivation is effective immediately. But don't sweat it. Your details are stored, so you can reactivate again at anytime."})}),(0,y.jsxs)("div",{className:"JH0np",children:[(0,y.jsx)(U.Z,{wrapperClassName:"uHBRE",label:i("Deactivate Post+"),onClick:t,children:(0,y.jsx)(p.ZP,{children:"Deactivate Post+"})}),(0,y.jsx)(U.Z,{wrapperClassName:"xavec",label:i("Nevermind"),onClick:s,children:(0,y.jsx)(p.ZP,{comment:"Nevermind button",children:"Nevermind"})})]})]})},es=e=>{var t=e.onDeactivateConfirm,s=e.onDeactivateCancel;return(0,y.jsxs)($.Z,{centerContent:!0,onGlassClick:s,children:[(0,y.jsx)(ee.ZP,{disable:ee.z9}),(0,y.jsx)(et,{onConfirm:t,onDismiss:s})]})};var ei=s(89792),ea=s(43523),er=s(52153),en=s(43684),el=s(59215),eo=s(86033),ec=s(88926),eh=s(11476);let ep={errorMessage:"z_1_O",icon:"Qr8J9",message:"f3P88",link:"zcjta"};function ed(e){var t=e.status,s=(0,v.bp)()._t,i=(0,ec.GX)(t),a=!!t.disabledFromPaymentsReason;return!a&&(0,ec.pZ)(t.stripeKycStatus)?null:(0,y.jsxs)("div",{className:ep.errorMessage,children:[(0,y.jsx)("span",{className:ep.icon,children:(0,y.jsx)(eh.Z,{colors:{primary:E().paletteOrange}})}),(0,y.jsxs)("div",{className:ep.message,children:[a?t.disabledFromPaymentsLabel:t.stripeKycStatusMessage,(0,y.jsx)("br",{}),i&&(0,y.jsx)("a",{className:ep.link,href:i,children:s("View details")})]})]})}let em=e=>{var t=e.isReactivating,s=e.onReactivateClick,i=(0,v.bp)()._t;return(0,y.jsxs)("div",{className:"vESjt",children:[(0,y.jsx)(eh.Z,{}),(0,y.jsxs)("div",{className:"E_pXc",children:[(0,y.jsx)("span",{className:"GmZ_P",children:(0,y.jsx)(p.ZP,{comment:"Settings page title",children:"Post+ is currently inactive."})}),(0,y.jsx)("span",{className:"SfQc6",children:(0,y.jsx)(p.ZP,{comment:"Settings page subtitle",children:"Nobody can subscribe until you reactivate."})})]}),(0,y.jsx)(U.Z,{wrapperClassName:"JuPgp",label:i("Reactivate Post+"),disabled:t,onClick:s,children:t?(0,y.jsx)(Y.Z,{small:!0,centerOrientation:"horizontal",color:E().paletteWhite}):(0,y.jsx)(p.ZP,{children:"Reactivate Post+"})})]})},eu=e=>{var t=e.onSetupClick,s=(0,v.bp)()._t,i=s("Setup Post+");return(0,y.jsxs)("div",{className:"AgexC",children:[(0,y.jsxs)("svg",{width:"92",height:"92",viewBox:"0 0 92 92",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"qIhj8",children:[(0,y.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46 0H26V26L0 26V46H26V72H46V46H72V26L46 26V0Z",fill:E().sidekickPink}),(0,y.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M66 20H46V46L20 46V66H46V92H66V66H92V46L66 46V20Z",fill:E().zunePurple}),(0,y.jsx)("path",{d:"M46 92L0 46L36 36L46 0L92 46L56 56L46 92Z",fill:"url(#paint0_linear_3501:14752)"}),(0,y.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56 10H36V36L10 36V56H36V82H56V56H82V36L56 36V10Z",fill:E().segwayNavy}),(0,y.jsx)("defs",{children:(0,y.jsxs)("linearGradient",{id:"paint0_linear_3501:14752",x1:"26",y1:"26",x2:"66",y2:"66",gradientUnits:"userSpaceOnUse",children:[(0,y.jsx)("stop",{stopColor:E().sidekickPink}),(0,y.jsx)("stop",{offset:"1",stopColor:E().zunePurple})]})})]}),(0,y.jsx)("h2",{className:"GUuHp",children:s("A flexible subscription service for your biggest supporters.")}),(0,y.jsx)("p",{className:"hnFFV",children:s("With Post+, you can create multi-media experiences and add bonus content for your supporters with our flexible +post formats — offering a deeper dive into your content. All this while earning some money for your efforts.")}),(0,y.jsx)(U.Z,{className:"N7Q6o",onClick:t,label:i,children:i})]})},eg={bodyTitle:"_tfCg",minimizedProfile:"PZFjJ",contentWrapper:"CkO9m",settingsWrapper:"SQ8f7",sectionWrapper:"AKgVO",section:"O63Rp",leftAlignedWrapper:"vux4n",rightAlignedWrapper:"NWFVY",heading:"WRDbO",detail:"CX3tx",priceGroup:"WLTuL",editIcon:"iVzf8",alertIcon:"iOUGo",alertPopover:"NmDIX",message:"eaGp7",activateDetails:"V93Se",activateButton:"VJm_A",progress:"tHPh4",supportLink:"WC8IR",setupButton:"WCsz9",viewProfile:"ZidPu",priceSection:"emwdJ",priceGroup2:"XVC2a",price:"lALS9",priceDuration:"e8ZcC",alert:"EdWeM",noteText:"fdF5v",buttons:"q2p_6",saveButton:"PIw5a",actions:"qrwCp",deactivateButton:"aw6B1",buttonInToast:"ad3CZ"};var ev={isTumblrpayOnboarded:!1,isTumblrpaySiteProvisioned:!1,stripeDashboardUrl:"",stripeKycStatus:er.Uc.Empty,stripeKycStatusMessage:"",stripeKycUrl:"",isPaywallOn:!1,disabledFromPaymentsReason:null,disabledFromPaymentsLabel:""};class eb extends w.Component{constructor(){var e,t;super(...arguments),t=this,n()(this,"state",{prices:[],isEditingPrice:!1,planDraft:this.props.plan,isFetching:!0,membersCount:0,isFetchingSetupUrl:!1,membershipsStatus:ev,hasSetPrice:!1,isEditingCreatorProfile:!1,hideSetupBanner:!1}),n()(this,"apiHelper",(0,T.ZP)(this.props.appContext.apiFetch)),n()(this,"pollingIntervalTime",null!==(e=this.props.__TEST_ONLY_pollingIntervalTime)&&void 0!==e?e:3e3),n()(this,"onSetupClick",()=>{this.setState({hideSetupBanner:!0}),this.logSettingsEvent(ea.J.PostpSetupBannerTap)}),n()(this,"fetchPageData",()=>(this.setState({isFetching:!0}),this.fetchInProgress=(0,eo.Z)(Promise.all([this.getPricePoints(),this.getMembershipStatus(this.props.blogName)])),this.fetchInProgress.then(e=>{var t=R()(e,2),s=t[0],i=t[1].response,a=i.members,r=i.membershipsStatus,n=i.membershipPrice;this.setState({prices:s,membershipsStatus:r,membersCount:a.count,isFetching:!1,hasSetPrice:null==n||!n.badgeIcon})}))),n()(this,"renderPricingSettingsContent",()=>{var e=this.props,t=e.showActivateBanner,s=e.showReactivateBanner,i=this.state.isSavingActivate;return(0,y.jsxs)("div",{className:eg.contentWrapper,children:[!!s&&(0,y.jsx)(em,{isReactivating:!!i,onReactivateClick:this.activateMembership}),(0,y.jsxs)("section",{className:eg.settingsWrapper,children:[!!t&&(0,y.jsx)("section",{className:eg.sectionWrapper,children:(0,y.jsx)("span",{className:eg.detail,children:(0,y.jsx)(p.ZP,{components:{faqLink:(0,y.jsx)("a",{href:"https://tumblr.zendesk.com/hc/en-us/articles/4402757539607-Post-Overview-FAQ",target:"_blank"})},children:"Activating Post+ is simple. Just complete the sections below to get things started. Looking for more details on Post+? [faqLink]Read the FAQ[/faqLink]."})})}),this.renderPersonalDepositSection(),this.renderMembershipPriceSection(),this.renderCreatorProfileSection(),this.renderBanner()]}),(0,y.jsx)("div",{className:eg.supportLink,children:(0,y.jsx)(p.ZP,{components:{supportLink:(0,y.jsx)("a",{href:"https://www.tumblr.com/support",target:"_blank"})},children:"Questions or need help? [supportLink]Contact Tumblr Support[/supportLink]"})})]})}),n()(this,"renderBanner",()=>{var e=this.props,t=e.showActivateBanner,s=e.showDeactivateSection,i=e.appContext,a=i._c,r=i._t,n=this.state,l=n.isSavingActivate,o=n.isSavingDeactivate,c=a("Text on a button that will deactivate the Post+ feature for selected blog","Deactivate Post+"),h=this.isPlanValid();return(0,y.jsxs)(y.Fragment,{children:[!!t&&(0,y.jsxs)("section",{className:eg.activateDetails,children:[(0,y.jsx)("span",{children:(0,y.jsx)(p.ZP,{components:{tosLink:(0,y.jsx)("a",{href:"https://tumblr.com/policy/terms-of-service",target:"_blank"}),privacyLink:(0,y.jsx)("a",{href:"https://www.tumblr.com/privacy",target:"_blank"})},children:"By “Activating Post+” you agree to our [tosLink]Terms of Service[/tosLink] and that you have read our [privacyLink]Privacy Policy[/privacyLink]"})}),(0,y.jsx)(U.Z,{className:eg.activateBanner,wrapperClassName:j()(eg.activateButton,{[eg.progress]:l}),label:r("Activate Post+"),disabled:l||!h,onClick:this.activateMembership,children:l||this.shouldPoll()?(0,y.jsx)(Y.Z,{small:!0,centerOrientation:"horizontal",color:E().paletteWhite}):(0,y.jsx)(p.ZP,{children:"Activate Post+"})})]}),!!s&&(0,y.jsx)("section",{className:eg.actions,children:(0,y.jsx)(Q.Z,{theme:"border",wrapperClassName:eg.deactivateButton,label:c,onClick:this.toggleShowDeactivateSurvey,disabled:o,disabledTextColor:E().paletteGray40,children:o?(0,y.jsx)(Y.Z,{small:!0,centerOrientation:"horizontal",color:E().paletteGray80}):c})})]})}),n()(this,"renderPersonalDepositSection",()=>{var e=this.props.appContext,t=e._t,s=e._c,i=e.features.paywallOnboarding,a=this.state,r=a.isFetchingSetupUrl,n=a.membershipsStatus,l=n.isTumblrpayOnboarded,o=n.isTumblrpaySiteProvisioned,c=n.stripeKycStatus,h=o?(0,y.jsx)(J.Z,{colors:{primary:E().paletteAccent}}):null,d=t(l?"Edit personal and deposit details at Stripe.com":"Set up your deposit details on Stripe.com"),m=s("Button linking to external payments processor",o?"Edit":"Set up"),u=o?this.goToStripeDashboard:this.fetchStripeProvisionUrl;return(0,y.jsxs)("section",{className:eg.sectionWrapper,children:[(0,y.jsxs)("div",{className:eg.section,children:[(0,y.jsxs)("div",{className:eg.leftAlignedWrapper,children:[(0,y.jsx)("h2",{className:eg.heading,children:(0,y.jsx)(p.ZP,{children:"Personal and deposit details"})}),(0,y.jsx)("span",{className:eg.detail,children:(0,y.jsx)(p.ZP,{children:"View and edit your details over at Stripe"})})]}),(0,ec.pZ)(c)&&(0,y.jsx)(Q.Z,{label:d,theme:o?"default":"border",onClick:u,wrapperClassName:eg.setupButton,disabled:r||!i,children:(0,y.jsx)("div",{className:eg.rightAlignedWrapper,children:r?(0,y.jsx)(Y.Z,{small:!0,centerOrientation:"horizontal",color:E().paletteGray40}):(0,y.jsxs)(y.Fragment,{children:[m,h]})})})]}),(0,y.jsx)(ed,{status:n})]})}),n()(this,"renderMembershipPriceSection",()=>{var e=this.state,t=e.isEditingPrice;return!!e.planDraft&&(0,y.jsxs)("section",{className:eg.sectionWrapper,children:[this.renderMainPricingSection(),t&&this.renderEditingPricingSection()]})}),n()(this,"hasSetPrice",()=>this.state.hasSetPrice||this.state.membershipsStatus.isPaywallOn),n()(this,"renderMainPricingSection",()=>{var e=this.props.appContext,t=e._t,s=e._getPriceInCurrency,i=this.state,a=i.isEditingPrice,r=i.planDraft,n=t(this.hasSetPrice()?"Edit subscription price":"Set up"),l=this.hasSetPrice()?(0,y.jsx)(U.Z,{label:n,onClick:this.editMembershipPrice,wrapperClassName:eg.setupButton,className:"editPrice",children:(0,y.jsx)("div",{className:eg.editIcon,children:(0,y.jsx)(z.Z,{size:{width:24,height:24},colors:{primary:E().paletteGray40}})})}):(0,y.jsx)(Q.Z,{theme:"border",label:n,onClick:this.editMembershipPrice,wrapperClassName:eg.setupButton,className:"editPrice",children:(0,y.jsx)("div",{className:eg.rightAlignedWrapper,children:n})});return(0,y.jsxs)("div",{className:eg.section,children:[(0,y.jsxs)("div",{className:eg.leftAlignedWrapper,children:[(0,y.jsx)("h2",{className:eg.heading,children:(0,y.jsx)(p.ZP,{comment:"Heading displayed to a creator on their membership settings screen",children:"Subscription price"})}),(0,y.jsx)("span",{className:eg.detail,children:(0,y.jsx)(p.ZP,{comment:"Subheading displayed to a creator on their membership settings screen",children:"Set your monthly price"})})]}),(0,y.jsx)("div",{className:eg.rightAlignedWrapper,children:!a&&(0,y.jsxs)(y.Fragment,{children:[this.hasSetPrice()&&this.renderVerticalPriceGroup((0,ec.T4)(r.monthlyPrice,r.currencyCode,s),(0,y.jsx)(p.ZP,{comment:"Note indicating displayed price is per month",children:"per month"})),this.canEditPrice()?l:(0,y.jsx)(K.Z,{type:en.Oj.Hover,render:this.renderTooltip,position:en.I2.BottomEnd,width:"216px",height:"auto",isChromeless:!0,children:(0,y.jsx)("div",{className:eg.alertIcon,children:(0,y.jsx)(G.Z,{size:{width:24,height:24},colors:{primary:E().paletteAccent}})})})]})})]})}),n()(this,"renderTooltip",()=>(0,y.jsx)("div",{className:eg.alertPopover,children:(0,y.jsx)("h2",{className:eg.message,children:(0,y.jsx)(p.ZP,{children:"Sorry… you can't change your subscription price while you have active supporters."})})})),n()(this,"renderEditingPricingSection",()=>{var e=this.props.appContext._t,t=this.state,s=t.planDraft,i=t.prices,a=t.isSavingPriceChange,r=i.indexOf(s.monthlyPrice);return(0,y.jsxs)("div",{className:eg.priceSection,children:[(0,y.jsx)(X.Z,{groupLabel:e("Subscription price"),name:"membershipPrice",options:this.createOptionsForPriceSelector(),selectedOptionIndex:r,onChange:this.onChangePrice}),(0,y.jsxs)("p",{className:eg.noteText,children:[e("The amount selected above is how much your supporters will be charged. You can't change your monthly price after receiving your first payment.")," ",(0,y.jsx)("a",{href:"https://tumblr.zendesk.com/hc/articles/4402764366615#fees",target:"_blank",children:e("See how much you’ll be paid.")})]}),this.renderAlert(),(0,y.jsxs)("div",{className:eg.buttons,children:[(0,y.jsx)(Q.Z,{theme:"border",backgroundColor:E().paletteGray25,disabled:a,label:e("Cancel"),onClick:this.cancelEditors,children:(0,y.jsx)(p.ZP,{comment:"Cancel button",children:"Cancel"})}),(0,y.jsx)(Q.Z,{wrapperClassName:eg.saveButton,backgroundColor:E().paletteAccent,textColor:E().paletteNavy,disabledTheme:"default",disabledBackgroundColor:E().paletteGray13,disabledTextColor:E().paletteGray40,label:e("Save subscription price"),onClick:this.saveMembershipPrice,children:a?(0,y.jsx)(Y.Z,{small:!0,centerOrientation:"horizontal",color:E().paletteWhite}):(0,y.jsx)(p.ZP,{comment:"Save subscription price button",children:"Save"})})]})]})}),n()(this,"renderAlert",()=>{var e=this.state.errorWhileSaving,t=this.props.appContext._t;return e?(0,y.jsx)(f.Z,{theme:"error",wrapperClassName:eg.alert,message:t('Oh no, computer says no. "Cough!"')}):null}),n()(this,"renderVerticalPriceGroup",(e,t)=>(0,y.jsxs)("div",{className:eg.priceGroup,children:[(0,y.jsx)("h2",{className:eg.heading,children:e}),(0,y.jsx)("span",{className:eg.detail,children:t})]})),n()(this,"renderCreatorProfileSection",()=>{var e=this.props,t=e.appContext._t,s=e.blogName,i=e.plan,a=this.state,r=a.isEditingCreatorProfile,n=a.membershipsStatus,l=n.isPaywallOn?(0,m.nh)({blogName:s}):null,o=i.description?(0,y.jsx)(U.Z,{label:t("Edit creator profile"),onClick:this.editCreatorProfile,children:(0,y.jsx)("div",{className:eg.editIcon,children:(0,y.jsx)(z.Z,{size:{width:24,height:24},colors:{primary:E().paletteGray40}})})}):(0,y.jsx)(Q.Z,{theme:"border",label:t("Set up your creator profile"),onClick:this.editCreatorProfile,wrapperClassName:eg.setupButton,className:"profileButton",children:(0,y.jsx)("div",{className:eg.rightAlignedWrapper,children:t("Set up")})});return r?(0,y.jsxs)("section",{className:eg.sectionWrapper,children:[(0,y.jsx)("h2",{className:eg.heading,children:(0,y.jsx)(p.ZP,{children:"Post+ profile"})}),(0,y.jsx)("span",{className:eg.detail,children:(0,y.jsx)(p.ZP,{children:"Share your story and add perks"})}),(0,y.jsx)(ei.Z,{isTumblrpayOnboarded:n.isTumblrpayOnboarded,blogName:s,plan:i,onUpdateSubscriptionPlan:this.onUpdateCreatorProfile,onCancel:this.cancelEditors})]}):(0,y.jsx)("section",{className:eg.sectionWrapper,children:(0,y.jsxs)("div",{className:eg.minimizedProfile,children:[(0,y.jsxs)("div",{className:eg.leftAlignedWrapper,children:[(0,y.jsx)("h2",{className:eg.heading,children:(0,y.jsx)(p.ZP,{children:"Post+ profile"})}),(0,y.jsx)("span",{className:eg.detail,children:(0,y.jsx)(p.ZP,{children:"Share your story and add perks"})})]}),(0,y.jsx)("div",{className:eg.rightAlignedWrapper,children:(0,y.jsxs)(y.Fragment,{children:[l&&(0,y.jsx)(q.Z,{className:eg.viewProfile,to:l,children:(0,y.jsx)(p.ZP,{comment:"Button linking to the user's creator profile",children:"View profile"})}),o]})})]})})}),n()(this,"onUpdateCreatorProfile",e=>{var t=this.props.updateSubscriptionPlan;this.setState({isEditingPrice:!1,isEditingCreatorProfile:!1,planDraft:e}),t(a()({},e))}),n()(this,"renderDeactivationSurvey",()=>(0,y.jsx)(es,{onDeactivateConfirm:this.deactivateMembership,onDeactivateCancel:this.toggleShowDeactivateSurvey})),n()(this,"onChangePrice",e=>{var t=this.state,s=t.prices,i=t.planDraft,r=s[e];this.logSettingsEvent(ea.J.PostpSetupPriceSelected,{monthly_price:r}),r!==(null==i?void 0:i.monthlyPrice)&&this.setState({planDraft:a()(a()({},this.state.planDraft),{},{monthlyPrice:r})})}),n()(this,"cancelEditors",()=>this.setState({isEditingPrice:!1,isEditingCreatorProfile:!1,planDraft:this.props.plan})),n()(this,"saveMembershipPrice",function(){var e,s,i,r,n,l;return W()().async(function(o){for(;;)switch(o.prev=o.next){case 0:if(s=(e=t.props).blogName,i=e.updateSubscriptionPlan,n=(r=t.state).planDraft,!(r.isSavingPriceChange||!n)){o.next=4;break}return o.abrupt("return");case 4:return l=n.monthlyPrice,t.setState({isSavingPriceChange:!0}),t.logSettingsEvent(ea.J.PostpSetupPriceSaveTap,{monthly_price:l}),o.next=9,W()().awrap(t.apiHelper.updateSubscriptionSettings({blogName:s,monthlyPrice:l}).fetch().then(()=>{t.setState({isSavingPriceChange:!1,isEditingPrice:!1,errorWhileSaving:!1,hasSetPrice:!0}),i(a()(a()({},n),{},{monthlyPrice:l}))}).catch(()=>{t.setState({isEditingPrice:!0,isSavingPriceChange:!1,errorWhileSaving:!0})}));case 9:case"end":return o.stop()}},null,null,null,Promise)}),n()(this,"logSettingsEvent",function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.state.membershipsStatus.isTumblrpayOnboarded;(0,t.props.appContext.logEvent)({eventName:e,eventDetails:a()(a()({},{is_activated:i}),s)})}),n()(this,"editMembershipPrice",()=>{this.logSettingsEvent(ea.J.PostpSetupPriceTap),this.setState({isEditingPrice:!0,isEditingCreatorProfile:!1})}),n()(this,"editCreatorProfile",()=>{this.logSettingsEvent(ea.J.PostpSetupProfileTap,{source:er.sD.Settings}),this.setState({isEditingCreatorProfile:!0,isEditingPrice:!1})}),n()(this,"goToStripeDashboard",()=>{var e=this.state.membershipsStatus.stripeKycStatus;this.logSettingsEvent(ea.J.PostpStripeDashboardTap,{stripe_status:e}),window.location.assign(this.state.membershipsStatus.stripeDashboardUrl)}),n()(this,"fetchStripeProvisionUrl",()=>{var e=this.props,t=e.blogName,s=e.appContext._t,i=e.toastContext.toggleToast;return this.setState({isFetchingSetupUrl:!0}),this.logSettingsEvent(ea.J.PostpSetupKycTap),this.apiHelper.getMembershipProvisionUrl(t,window.location.host,window.location.pathname).fetch().then(e=>{var t=e.response;window.location.assign(t.url)}).catch(()=>{i(s('Oh no, computer says no. "Cough!"'),"error"),this.setState({isFetchingSetupUrl:!1})})}),n()(this,"activateMembership",function(){var e,s,i,a,r,n,l,o,c,h,d,m,u;return W()().async(function(g){for(;;)switch(g.prev=g.next){case 0:return s=(e=t.props).blogName,i=e.updatePaywallStatus,r=(a=e.appContext)._t,n=a._c,l=a.getUserInfo,o=a.toggleEditorBeta,c=e.toastContext.toggleToast,h=e.showReactivateBanner,d=!0,m=h?ea.J.PostpReactivate:ea.J.PostpActivate,t.setState({isSavingActivate:!0}),t.logSettingsEvent(m),g.prev=5,g.next=8,W()().awrap(t.apiHelper.updateBlogSettings(s,{isPaywallOn:d}).fetch());case 8:u=h?n("Alert that appears when Post+ is successfully reactivated","Post+ is now active"):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.ZP,{comment:"Alert that appears when Post+ is successfully enabled",children:"Tumblr Post+ has been activated!"}),(0,y.jsx)(Q.Z,{textColor:E().paletteBlack,backgroundColor:E().paletteWhite,className:eg.buttonInToast,href:`/new?name=${s}`,children:(0,y.jsx)(p.ZP,{children:"Create your first +Post"})})]}),i(d),l(!0),c(u,"success"),o(!0),g.next=18;break;case 15:g.prev=15,g.t0=g.catch(5),c(r('Oh no, computer says no. "Cough!"'),"error");case 18:return g.prev=18,t.setState({isSavingActivate:!1}),g.finish(18);case 21:case"end":return g.stop()}},null,null,[[5,15,18,21]],Promise)}),n()(this,"toggleShowDeactivateSurvey",()=>{this.state.showDeactivateSurvey||this.logSettingsEvent(ea.J.PostpDeactivateTap),thiseSurvey}))}),n()(this,"deactivateMembership",function(){var e,s,i,a,r,n,l;return W()().async(function(o){for(;;)switch(o.prev=o.next){case 0:return s=(e=t.props).blogName,i=e.updatePaywallStatus,r=(a=e.appContext)._t,n=a.getUserInfo,l=e.toastContext.toggleToast,t.setState({showDeactivateSurvey:!1,isSavingDeactivate:!0}),t.logSettingsEvent(ea.J.PostpDeactivateConfirm),o.next=6,W()().awrap(t.apiHelper.updateBlogSettings(s,{isPaywallOn:!1}).fet1),n(!0ugh!"'))}ate:!1})}));case 6:case"end":return o.stop()}},null,null,null,Promise)}),n()(this,"canEbersCount),n()(this,"isPlanValid",()=>this.props.plan.isValid&&this.state.membershipsStatus.isTumblrpayOnboarded),n()(this,"createOptionsForPriceSelector",()=>{var e=this.state,t=e.prices,s=e.planDraft;return t.map(e=>{var t=this.props.appContext._getPriceInCurrency,i=(0,ec.T4)(e,s.currencyCode,t);return{value:`${e}`,children:(0,y.jsxs)("div",{className:eg.priceGroup2,children:[(0,y.jsx)("span",{className:eg.price,children:i})," ",(0,y.jsx)("span",{className:eg.priceDuration,children:(0,y.jsx)(p.ZP,{comment:"Note indicating displayed price is per month",children:"/month"})})]})}})}),n()(this,"shouldPoll",()=>(0,ec.zc)(this.props.search)&&!this.state.membershipsStatus.isTumblrpayOnboarded),n()(this,"maybeRefetchStatus",()=>{if(!this.shouldPoll()){clearInterval(this.pollingInterval);return}this.fetchPageData()})}componentDidMount(){return this.pollingInterval=window.setInterval(this.maybeRefetchStatus,this.pollingIntervalTime),this.fetchPageData()}componentWcancel()}render(){var e=this.props.contentLoader,t=this.state,s=t.isFetching,i=t.showDeactivateSurvey,a=t.hideSetupBanner,r=t.hasSetPrice,n=t.membershipsStatus.isTumblrpayOnboarded,l=!!i&&this.renderDeactivationSurvey();return a||r||n||s?(0,y.jsxs)(y.Fragment,{children:[l,(0,y.jsx)("label",{className:eg.bodyTitle,children:this.isPlanValid()?(0,y.jsx)(p.ZP,{comment:"Settings page title",children:"Manage Post+"}):(0,y.jsx)(p.ZP,{comment:"Settings page title",children:"Tumblr Post+"})}),s&&!this.shouldPoll()?e:this.renderPricingSettingsContent()]}):(0,y.jsx)(eu,{onSetupClick:this.onSetupClick})}getPricePoints(){return this.apiHelper.getPricePoints().feticePoints)}getMembershipStatus(e){return this.apiHelper.getCreatorSettingsStatus(e).fetthen(e=>e)}}let ex=(0,el.X9)(eb,{appContext:!0,toastContext:!0});var eP=s(48352);let ej={bodyWrapper:"aF2M3"};class ef extends g.lb{constructor(){super(...arguments),n()(this,"state",this.props.appContext.getBootstrap(x.Rn)),n()(this,"renderSidebar",()=>(0,y.jsx)(h.Z,{activeBlogPage:u.vS.creatorSettings(this.getBlogNameFromProps())})),n()(this,"fetchPageData",()=>(this.setState({isFetching:!0}),(0,x.Cb)(this.props.appContext.apiFetch,this.getBlogNameFromProptState(e)))),n()(this,"renderPageContent",()=>{var e=this.state,t=e.blog,s=e.blog,i=s.isPaywallOn,a=s.wasPaywallOn,r=s.name,n=this.props,l=n.location,o=l.pathname,h=l.search,d=n.appContext,u=d._t,g=d.wwwBaseUrl;return"supporters"===(0,m.dn)(o)?(0,y.jsx)(H,{blogName:r}):t.isPasswordProtected?(0,y.jsx)(N,{alertTitle:u("This blog is password protected."),alertBody:(0,y.jsx)(p.ZP,{components:{a:(0,y.jsx)("a",{href:`${g}${(0,m.BR)({blogName:r})}`})},children:"To activate Post+ you must disable password protection [a]here[/a]."})}):t.isGroupChannel?(0,y.jsx)(N,{alertTitle:u("This blog is a group blog."),alertBody:(0,y.jsx)(p.ZP,{components:{a:(0,y.jsx)("a",{href:"https://tumblr.zendesk.com/hc/articles/4402757539607#creator-faq"})},children:"Post+ cannot be activated on a group blog. [a]Learn more.[/a]"})}):t.subscriptionPlan?(0,y.jsx)(ex,{blogName:this.getBlogNameFromProps(),plan:t.subscriptionPlan,updateSubscriptionPlan:this.updateSubscriptionPlan,updatePaywallStatus:this.updatePaywallStatus,contentLoader:(0,y.jsx)(c.w,{}),showActivateBanner:!a,showReactivateBanner:!i&&!!a&&t.subscriptionPlan.isValid,showDeactivateSection:!!i&&t.subscriptionPlan.isValid,search:h}):null}),n()(this,"updatePaywallStatus",e=>{this.setState(t=>{var s=t.blog;return{blog:a()(a()({},s),{},{isPaywallOn:e,wasPaywallOn:!0})}})}),n()(this,"updateSubscriptionPlan",e=>{this.setState(t=>{var s=t.blog;return{blog:a()(a()({},s),{},{subscriptionPlan:a()(a()({},s.subscriptionPlan),e)})}})}),n()(this,"getBlogNameF.blogName)}componentDidMount(){return this.state.blog?Promise.resolve():this.fetchPageData()}componentDidUpdate(e){return new Promise(t=>{this.getBlogNameFromProps()!==e.params.blogName?this.fetchPageData().then(t):t()})}render(){var e=this.state,t=e.isFetching,s=e.blog;return s&&!(0,b.v)(s)?(0,y.jsx)(l.Fg,{to:(0,m.vw)({blogName:this.getBlogNameFromProps()}),replace:!0}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(eP.Z,{page:x.HJ.analyticsPageName}),(0,y.jsx)(o.Z,{activePage:u.vS.creatorSettings(this.getBlogNameFromProps()),children:(0,y.jsx)(d.Z,{sidebar:this.renderSidebar(),children:t?(0,y.jsx)(c.w,{}):s&&(0,y.jsx)("main",{className:ej.bodyWrapper,children:this.renderPageContent()})})})]})}}let eS=(0,v.VP)(ef)}}]);