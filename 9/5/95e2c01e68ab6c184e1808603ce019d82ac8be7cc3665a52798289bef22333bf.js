(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2362,7885,9448],{55773:function(e,t,i){"use strict";var s=i(26265),a=i(94184),n=i.n(a),o=i(41664),r=i(67294),l=i(25362),c=i.n(l),d=r.createElement,u=function(e){var t,i=e.children,a=e.className,r=e.disabled,l=e.onClick,u=e.icon,p=void 0===u?null:u,m=e.prefix,_=void 0===m?null:m,f=e.suffix,v=void 0===f?null:f,g=e.type,h=e.shape,y=e.theme,b=e.htmlType,w=e.active,x=e.href,N=n()(c().button,(t={},(0,s.Z)(t,"".concat(c()[g]),g),(0,s.Z)(t,"".concat(c()[h]),h),(0,s.Z)(t,"".concat(c()[y]),y),(0,s.Z)(t,c().icon,!i&&0!==i&&p),(0,s.Z)(t,c().active,w),t),a);return"link"===g?d(o.default,{prefetch:!1,href:x},d("a",{className:N},p?d("span",{className:c().iconNode},p):null,d("span",null,i))):d("button",{type:b,className:N,disabled:r,onClick:,_?d("span",{className:c().prefix},_):null,p?d("span",{className:c().iconNode},p):null,i?d("span",null,i):null,v?d("span",{className:c().suffix},v):null)};u.defaultProps={disabled:!1,className:null,onClick:null,prefix:null,suffix:null,theme:"light",type:"primary",htmlType:"button",active:!1,href:""},u.displayName="Button",t.Z=u},59794:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var s=i(67294),a=i(2450),n=i.n(a),o=s.createElement;var r=function(e){var t=e.title,i=void 0===t?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":t;return o("div",{className:n().wrapper},o("div",{className:n().load},o("div",{className:n().pulse}),i))}},62148:function(e,t,i){"use strict";var s=i(94184),a=i.n(s),n=i(41664),o=i(11163),r=i(67294),l=i(55773),c=i(53122),d=i(5773),u=i(91900),p=i.n(u),m=r.createElement,_=function(e,t){switch(e){case"/s/novosti":return"main";case"/s/novosti/last":return"last";case"/s/novosti/r/".concat(t):return"region"}},f=function(e,t){switch(e){case"last":return"/s/novosti/last";case"region":return"/s/novosti/r/".concat(t);default:return"/s/novosti"}};t.Z=function(){var e=(0,o.useRouter)(),t=(0,d.bN)().state.regions,i=(0,d.MS)(),s=i.state.region,u=i.dispatch,v=(0,r.useState)(_(e.asPath,e.query.region)),g=v[0],h=v[1],y=(0,r.useState)(null),b=y[0],w=y[1];(0,r.useEffect)((function(){h(_(e.asPath,e.query.region||(null===s||void 0===s?void 0:s.alias))),w(t.find((function(t){return t.alias===(e.query.region||(null===s||void 0===s?void 0:s.alias))})))}),[e.asPath]);var x=(0,r.useCallback)((,[]);return(0,r.useEffect)((function(){switch(e.pathname){case"/s/novosti/last":h("last");break;case"/s/novosti/main":h("main");break;case"/s/novosti/r/".concat(e.query.region||(null===s||void 0===s?void 0:s.alias)):h("region")}}),[e.pathname]),m(r.Fragment,null,m("div",{className:p().newsMenu},m(n.default,{prefetch:!0,href:f("main",e.query.region||(null===s||void 0===s?void 0:s.alias))},m("a",{className:p().typeLink},m("div",{className:a()(p().menuItem,"main"===g&&p().selected)},"\u0413\u043b\u0430\u0432\u043d\u044b\u0435"))),m("div",{className:p().menuDelimiter}),m(n.default,{prefetch:!0,href:f("last",e.query.region||(null===s||void 0===s?void 0:s.alias))},m("a",{className:p().typeLink},m("div",{className:a()(p().menuItem,"last"===g&&p().selected)},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435"))),b&&"all"!==b.alias&&m(r.Fragment,null,m("div",{className:p().menuDelimiter}),m(n.default,{prefetch:!0,href:f("region",e.query.region||(null===s||void 0===s?void 0:s.alias))},m("a",{className:p().typeLink},m("div",{className:a()(p().menuItem,"region"===g&&p().selected)},b.title))))),m("div",{className:p().changeRegionWrapper},"region"===g&&m(c.Z,{tag:"div",color:"dusty-gray"},"\u0412\u044b \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 ",null===b||void 0===b?void 0:b.genitive," ",m(l.Z,{type:"text",className:p().changeBtn,onClick:x},"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))))}},3140:function(e,t,i){"use strict";var s=i(94184),a=i.n(s),n=i(5152),o=i(67294),r=i(43153),l=i(72750),c=i.n(l),d=o.createElement,u=(0,n.default)((,{loadableGenerated:{webpack:modules:["../AdSlotYa"]}});function p(e){var t=e.className,i=e.targets;return d(r.Z,{type:"ad",placeholder:null},d(u,{className:a()(c().root,t),refreshInterval:3e4,containerId:"adfox_1646036379705771",params:{pp:"h",ps:"cuvu",p2:"fgjn"},targets:i,sizes:[[300,600],[300,500]],bids:[{bidder:"myTarget",params:{placementId:"1196312"}},{bidder:"mediasniper",params:{placementId:"120008"}},{bidder:"sape",params:{placementId:"739136"}},{bidder:"otm",params:{placementId:"42866"}},{bidder:"adfox_adsmart",params:{p1:"cxnee",p2:"hhro"}}],ownerId:243120}))}p.defaultProps={className:"",targets:[]},t.Z=p},43153:function(e,t,i){"use strict";var s=i(45697),a=i.n(s),n=i(32196),o=function(e){var t=e.children,i=e.placeholder,s=void 0===i?"":i,a=e.type;return n.xj[a]?s:t};o.propTypes={className:a().string,children:a().oneOfType([a().string,a().element]),placeholder:a().oneOfType([a().string,a().element]),type:a().string},t.Z=o},94285:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var s=i(26265),a=i(67294),n=i(15045),o=i(47054),r=a.createElement;function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d=function(e){var t=e.title,i=void 0===t?"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u0438\u0434\u0435\u043e":t,s=e.viewAllLink,a=void 0===s?"/video":s,l=e.viewAllTitle,d=void 0===l?"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0438\u0434\u0435\u043e":l,u=e.backgroundColor,p=void 0===u?"#1f232d":u,m=e.isMobile,_=e.isTablet,f=e.isVerticalTablet,v=e.videos,g=void 0===v?[]:v,h=e.previewProps,y=void 0===h?{}:h,b=e.id,w=void 0===b?"popularVideo":b,x=8;return m?x=3:_?x=4:f&&(x=6),g.length>0&&r(o.Z,{backgroundColor:p},r(n.ZP,{type:n.CV.sideGrid,title:i,isSubTitle:!1,isBlackTheme:!0,withoutLine:!0,withoutMarginTop:!0,posts:g.map((),previewProps:y,postLayoutProps:{layout:"row"},layoutProps:{gridPostsCount:x},viewAllLink:a,viewAllTitle:m?"":d,isNewTabs:m,ratio:"2/3",id:w}))}},66461:function(e,t,i){"use strict";i.d(t,{Z:function(){return v}});var s=i(94184),a=i.n(s),n=i(41664),o=i(67294),r=i(53122),l=i(72942),c=i.n(l),d=o.createElement,u=function(e){var t=e.children,i=e.className,s=e.isBlackTheme,n=(0,o.useRef)(null);return d("div",{className:a()(c().root,i,s&&c().blackTheme)},d("span",{className:c().leftHover,onMouseEnter:),d("div",{className:c().scrolling,ref:n},t),d("span",{className:c().rightHover,onMouseEnter:))},p=i(88294),m=i.n(p),_=o.createElement,f=function(e){var t=e.title,i=e.className,s=e.tags,o=void 0===s?[]:s,l=e.isBlackTheme,c=e.isMobile;return _("div",{className:a()(m().root,i)},_(r.Z,{tag:"h1",color:"red",textTransform:"uppercase",fontWeight:"medium",size:c?"big-s":"large-xls",className:m().title},"#",t),_("div",{className:m().tags,style:{display:"none"}},!c&&_(r.Z,{tag:"h5",color:l?"white":"black",textTransform:"uppercase",fontWeight:"medium",size:"small-xs",className:m().text},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435:"),_("div",{className:a()(m().wrap,l&&m().darkWrap)},_(u,{isBlackTheme:l},o.map((function(e){return e&&_(n.default,{href:"/t/[tag]",as:"/t/".concat(e.alias),key:e._id},_("a",{className:m().link},_(r.Z,{tag:"span",color:"dusty-gray",textTransform:"uppercase",fontWeight:"medium",size:"small-xs",className:m().tag},e.title)))})),_("span",{className:m().lastLink},"l")))))};f.defaultProps={title:"",tags:[],className:"",isBlackTheme:!1,isMobile:!1};var v=f},47885:function(e,t,i){"use strict";i.r(t);var s=i(94184),a=i.n(s),n=i(41664),o=i(67294),r=i(53122),l=i(5773),c=i(71825),d=i.n(c),u=o.createElement,p=function(e){var t,i,s=e.isNewTab,a=e.link,o=e.title,l=void 0===o?"":o,c=null!==(t=null===a||void 0===a?void 0:a.href)&&void 0!==t?t:a,p=null!==(i=null===a||void 0===a?void 0:a.as)&&void 0!==i?i:a;return c?u(n.default,{href:c,as:p,prefetch:!1},u("a",{style:{marginLeft:"auto"},target:s?"_blank":void 0},u(r.Z,{className:d().link,tag:"div",color:"dusty-gray",size:"normal-xs",fontWeight:"medium"},l))):null},m=function(e){var t=e.className,i=e.title,s=e.link,n=void 0===s?"":s,o=e.linkTitle,c=void 0===o?"":o,m=e.isSubTitle,_=e.withoutMarginTop,f=e.children,v=e.isBlack,g=void 0!==v&&v,h=e.withoutLine,y=void 0!==h&&h,b=e.tag,w=void 0===b?"h2":b,x=e.isNewTabs,N=(0,l.MS)().state.isBlackTheme,k=(0,l.q7)().state.isMobile,T=g||N?"white":"black";return m?u("header",{className:a()(d().rootSub,t,_&&d().withoutTop)},!y&&u("span",{className:a()(d().line,d().lineSub)}),u("div",{className:d().flex},u(r.Z,{className:d().titleSub,tag:"h3",color:T,size:"big",fontWeight:"black"},i),u(p,{isNewTab:x,link:n,title:c}))):u("header",{className:a()(d().root,t,_&&d().withoutTop)},f||u(r.Z,{className:d().title,tag:w,color:T,size:k?"big":"large-s",fontWeight:"black"},i),!y&&u("span",{className:d().line}),u(p,{link:n,title:c}))};m.defaultProps={className:"",title:"",link:"",linkTitle:"",tag:"h2",isSubTitle:!1,isBlack:!1,children:null},t.default=m},18357:function(e,t,i){"use strict";i.d(t,{Y:function(){return _}});var s=i(74047),a=i(52700),n=i(4706),o=i(8127),r=i(44102),l=i(20775),c=i(26265),d=i(11163),u=i(67294),p=u.createElement;unction _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id";return function(t){var i=function(i){(0,o.Z)(l,i);var r=m(l);function l(e){var t;return(0,s.Z)(this,l),t=r.call(this,e),(0,c.Z)((0,n.Z)(t),"rerender",(),t.state={isRender:!0},t}return(0,a.Z)(l,[{key:"componentDidUpdate",value:function(t){var i=this.props.router;t.router.query[e]!==i.query[e]&&this.rerender()}},{key:"render",value:function(){return this.state.isRender?p(t,this.props):null}}]),l}(u.Component);return t.getInitialProps&&(i.getInitialProps=t.getInitialProps),i.displayName="Rerender",(0,d.withRouter)(i)}}},79601:function(e,t,i){"use strict";var s=i(67294),a=i(32196),n=i(95083);t.Z=function(e){var t=(0,s.useState)(!1),i=t[0],o=t[1],r=(0,s.useState)(!1),l=r[0],c=r[1];function d(){if(i||!l){var e=window.innerHeight;document.body.getBoundingClientRect().bottom<e+a.TH&&!i&&o(!0)}}return(0,s.useEffect)((,[l]),(0,s.useEffect)((function(){var t,s;i&&(e(),(0,n.tN)("".concat(null!==(t=null===(s=window)||void 0===s?void 0:s.location.href)&&void 0!==t?t:url).concat(window.location.search),{event:"scrollpage"}))}),[i]),a.sk?[!1,:[i,o,c]}},59448:function(e,t,i){"use strict";i.r(t);var s=i(91229),a=i(41664),n=i(67294),o=i(55773),r=i(34484),l=i(30033),c=i(5773),d=n.createElement;t.default=function(){var e=(0,n.useState)([]),t=e[0],u=e[1],p=(0,c.MS)().state.isBlackTheme,m=(0,c.q7)().state,_=m.isDesktop,f=m.isMobile;return(0,n.useEffect)((function(){_&&t.length<1&&Promise.resolve().then(i.bind(i,16318)).then((function(e){(0,e.loadFooterPosts)().then(()}))}),[_]),d("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"calc(100vh - 70px)",color:p?"#FFF":"#000"}},d(r.Z,{title:"\xabLife.ru\xbb \u2014 404 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430",type:"404"}),d("h1",{style:{fontSize:f?24:48,fontWeight:500,marginBottom:10,marginTop:60,textAlign:"center",letterSpacing:"0.5px"}},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"),d("div",{style:{marginTop:10,fontSize:f?"96px":"144px",fontWeight:700,marginBottom:40}},"404"),d("div",{style:{marginBottom:60}},d(o.Z,{type:p?"primary":"bordered"},d(a.default,{href:"/",prefetch:!1},d("a",{href:"/",style:{color:"currentColor",padding:"18px 32px",display:"block",textTransform:"uppercase"}},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))),_&&t.length>0?d("div",{className:"container__life_global",style:{marginBottom:40}},d("p",{style:{marginTop:10,fontSize:"24px",marginBottom:30,letterSpacing:"0.5px",textAlign:"center"}},"\u0422\u0430\u043a\u0436\u0435 \u0432\u0430\u0441 \u043c\u043e\u0433\u0443\u0442 \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u0442\u044c"),d("div",{className:"row"},t.map((function(e){return d("div",{className:"col",key:e._id},d(l.Z,(0,s.Z)({isNewTab:!0},e,{layout:"column",theme:p?"dark":"white",isHiddingDesc:!0,htmlTitle:e.title})))})))):null)}},92090:function(e,t,i){"use strict";i.d(t,{Z:function(){return ue}});var s=i(91229),a=i(38347),n=i(94184),o=i.n(n),r=i(11163),l=i(67294),c=i(62148),d=i(3140),u=i(94285),p=i(66461),m=i(41664),_=i(53122),f=i(26265),v=i(4235),g=i(51569),h=i(91623),y=i(28232),b=i.n(y),w=i(5773),x=i(53825),N=i.n(x),k=l.createElement;function T(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}var Z=function(e){return k("svg",e,k("path",{d:"M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",stroke:"#9A9A9A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),k("path",{d:"M10 18.083c4.417-3.916 6.667-7.25 6.667-9.75a6.666 6.666 0 1 0-13.334 0c0 2.5 2.25 5.75 6.667 9.75z",stroke:"#9A9A9A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))};Z.defaultProps={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var S=function(e){var t=e.dateFormat,i=e.cover,a=e.title,n=e.clickbait,r=e.subtitle,c=e.publicationDate,d=e.publicDate,u=e.isBlackTheme,p=e.className,y=e.flags,x=e.index,S=e.link,P=e.region,E=e.currentRegion,z=e.withRegion,O=void 0!==z&&z,j=e.previewType,I=void 0===j?"post":j,L=e.playListUrl,A=e.isNewTab,W=e.id,R=e.typePreview,D=e.isNewDesign,M=(0,w.q7)().state,B=M.isDesktop,C=M.isLaptop,H=(0,h._)(n,a),F=(0,l.useState)(K(R)),q=F[0],G=F[1],V="playList"===I,U="post"===I?"p":"v",Y=void 0!==y&&y.criminalContent,J=void 0!==y&&y.adultContent;function K(e){switch(e){case"main-big":return{imgWidth:B||C?900:400,styles:N().main__big,text:{title:{fontSize:32,fontWeight:"bold",lineHeight:"40px",color:"white"},date:{fontSize:12,fontWeight:"medium",lineHeight:"12px",color:"white",opacity:"zero-seven"}}};case"main-middle":return{imgWidth:450,styles:N().main__middle,text:{title:{color:"white",fontSize:18,fontWeight:"bold",lineHeight:"22px"},subtitle:{fontSize:14,fontWeight:"normal",lineHeight:"20px",color:"alto"},date:{fontSize:12,fontWeight:"medium",lineHeight:"12px",color:"dusty-gray"}}};case"main-small":return{imgWidth:600,styles:N().main__small,text:{title:{color:"white",fontSize:32,fontWeight:"bold",lineHeight:"40px"},date:{fontSize:12,fontWeight:"medium",lineHeight:"12px",color:"white",opacity:"zero-seven"}}};case"secondary":return{imgWidth:345,styles:N().secondary,text:{title:{color:u?"white":"black",fontSize:18,fontWeight:"bold",lineHeight:"22px"},date:{fontSize:12,fontWeight:"medium",lineHeight:"12px",color:u?"dove-gray":"dusty-gray",opacity:void 0}}};case"actual-mini":return{imgWidth:300,styles:o()(N().actual__mini,D&&N().newDesign),text:{title:{color:u?"white":"black",fontSize:16,fontWeight:"medium",lineHeight:"22px"},date:{fontSize:12,fontWeight:"medium",lineHeight:"12px",color:u?"dove-gray":"dusty-gray"}}};case"actual-normal":return{imgWidth:311,styles:N().actual__normal,text:{title:{color:"white",fontSize:16,fontWeight:"medium",lineHeight:"22px"},date:{}}};default:return null}}(0,l.useEffect)((function(){G({},K(R)))}),[u,R,B,C]);return k(m.default,{href:S||V?"/pl/".concat(L,"?v=").concat(x):"/".concat(U,"/").concat(x),prefetch:!1},k("a",(0,s.Z)({id:W,className:o()(N().postPreview2,q.styles,p)},A?{target:"_blank",rel:"noopener"}:{}),k("div",{className:o()(N().imgWrap,(Y||J)&&N().adultContent)},(Y||J)&&"actual-normal"!==R&&k("img",{src:b(),alt:"adult",className:N().adultImg}),k(g.Z,(0,s.Z)({className:o()((Y||J)&&N().adultContent)},i||{},{width:q.imgWidth,isPreview:!0}))),k("div",{className:N().textContent},k(_.Z,(0,s.Z)({tag:"h3"},q.text.title),null!==H&&void 0!==H?H:a),"main-middle"===R&&k(_.Z,q.text.subtitle,r),k((function(){return"actual-mini"===R?k("div",null,O&&P&&E&&P.alias===E.alias&&k("div",{className:N().regionInfo},k(Z,{className:N().pointIcon}),k(_.Z,{tag:"span",className:N().regionTitle,fontSize:"12px",fontWeight:"medium"},P.title)),k(_.Z,(0,s.Z)({},q.text.date,{tag:"div",size:"small-s"}),k(v.Z,{date:c||d,format:t}))):"actual-normal"!==R?k(_.Z,(0,s.Z)({},q.text.date,{tag:"div",size:"small-s"}),k(v.Z,{date:c||d,format:t})):null}),null))))};S.defaultProps={isBlackTheme:!1,isFullWidthImg:!1,subtitle:"",dateFormat:"",link:"",index:"",alias:"",cover:"",title:"",clickbait:"",region:null,isHiddingDesc:!1,isDesc:!1,publicationDate:"",publicDate:"",className:"",flags:{},isBlack:!1,isNewTab:!1,withRegion:!1,htmlTitle:"",highlights:[]};var P=S,E=i(22193),z=function(e){return function(t){return"/".concat(e,"/").concat(t&&(t.alias||t.index||t.idx))}},O={videos:"video",specials:"special",category:z("c"),post:z("p"),section:z("s"),video:z("v"),playlist:z("pl"),tag:z("t"),categoryFormat:"/c/[category]",postFormat:"/p/[id]",sectionFormat:"/s/[section]",videoFormat:"/v/[video]",playListFormat:"/pl/[video]",tagFormat:"/t/[tag]"},j=i(65791),I=i.n(j),L=l.createElement,A=function(e){var t=e.className,i=e.data,a=e.dataLast,n=e.isMobile,c=e.isNewDesign,d=(0,w.MS)().state,u=d.isBlackTheme,p=d.region,f=(0,r.useRouter)(),v=(0,l.useState)(!0),g=v[0],h=v[1];return L("div",{className:o()(t,I().root,u&&I().black)},L("div",{className:I().header},L(_.Z,{className:o()(I().btn,g&&I().active,u&&I().black),tag:"button",color:"dusty-gray",fontWeight:"semibold",textTransform:"uppercase",onClick:id:(0,E.Z)(f,"2C","btnLastNews")},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435"),L(_.Z,{className:o()(I().btn,!g&&I().active,u&&I().black),tag:"button",color:"dusty-gray",fontWeight:"semibold",textTransform:"uppercase",onClick:,"\u0413\u043b\u0430\u0432\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438")),(g?a:i).map((function(e,t){return L(P,(0,s.Z)({},e,{key:e._id,typePreview:"actual-mini",className:n?I().mobile_preview:"",isNewTab:!0,id:(0,E.Z)(f,"2C",t+1),currentRegion:p,withRegion:!0,isBlackTheme:u,isNewDesign:c}))})),L("div",{className:I().viewAll__wrap},L(m.default,{href:O.sectionFormat,as:O.section({alias:"novosti"}),prefetch:!1},L("a",{className:I().viewAll,target:"_blank",rel:"noopener noreferrer"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435"))))};A.defaultProps={className:"",data:[],dataLast:null,isMobile:!1};var W=A,R=i(96610),D=i.n(R),M=l.createElement,B=function(e){var t=e.className,i=e.mainNews,s=e.actualPosts,a=null===s||void 0===s?void 0:s.slice(0,6);return M("div",{className:o()(t,D().root)},M(W,{data:i,dataLast:a}))};B.defaultProps={className:"",mainNews:[],actualPosts:[]};var C=B,H=i(30033),F=i(47885),q=i(32196),G=i(13642),V=i(56326),U=i(60840),Y=i.n(U),J=l.createElement;r Q=function(e){var t=e.posts,i=void 0===t?[]:t,s=(0,r.useRouter)();return Array.isArray(i)&&0!==i.length?J("div",{className:"row"},J("div",{className:"col-2"},l.cloneElement(i[0],X(X({},i[0].props),{},{idTarget:(0,E.Z)(s,1)})),J("div",{className:o()("row",Y().rowTop)},J("div",{className:o()("col")},l.cloneElement(i[1],X(X({},i[1].props),{},{idTarget:(0,E.Z)(s,2)}))),J("div",{className:o()("col")},i.slice(2,4).map((function(e,t){return l.cloneElement(e,X(X({},e.props),{},{idTarget:(0,E.Z)(s,3,t+1)}))}))))),J("div",{className:"col-2"},i.slice(4,8).map((function(e,t){return l.cloneElement(e,X(X({},e.props),{},{idTarget:(0,E.Z)(s,4,t+1)}))})))):null},$=i(30906),ee=i(13165),te=l.createElement,ie=function(e){var t=e.posts,i=void 0===t?[]:t,s=(0,w.MS)().state.experiments,a=(0,l.useState)([{type:["infox","smi24"],rate:{infox:8,smi24:2},maxPosts:10},{type:["smi2"],maxPosts:10}]),n=a[0],r=a[1];return(0,l.useEffect)((function(){null!==s&&void 0!==s&&s.sparrowExchange&&(document.getElementById("sparrowEmbed")||(0,$.Z)("https://widget.sparrow.ru/js/embed.js",{id:"sparrowEmbed",async:!0}),setTimeout((function(){(0,$.Z)("/static/js/sparrow.js",{parentId:"sparrowMobile",id:"sparrow1","data-key":"b75cfe19fe4b02b095827560041da9df",async:!0})}),1e3),r([n[0]]))}),[null===s||void 0===s?void 0:s.sparrowExchange]),Array.isArray(i)&&0!==i.length?te(l.Fragment,null,te("div",{className:"row"},i[0]),te("div",{className:"row"},te("div",{className:"col"},te("div",{style:{padding:"0 12px"}},i[1]))),te("div",{className:"row"},te("div",{className:o()("col")},te("div",{style:{padding:"0 12px"}},i.slice(2,4).map((function(e){return e}))))),te("div",{className:"row"},te("div",{className:"col-2"},te("div",{className:Y().posts_list},i.slice(4,7).map((function(e){return e}))))),te("div",null,te(l.Fragment,null,n.map((function(e){return te("div",{id:null!==s&&void 0!==s&&s.sparrowExchange?"withSparrowMobile":"noSparrowMobile",className:o()(Y().container)},te(ee.Rj,e))})))),(null===s||void 0===s?void 0:s.sparrowExchange)&&te("div",null,te("div",{id:"sparrowMobile",className:Y().container})),te("div",{className:"row"},te("div",{className:"col-2"},te("div",{className:Y().posts_list},i[7])))):null},se=l.createElement;var ae=function(e){var t=e.posts,i=void 0===t?[]:t;return Array.isArray(i)&&0!==i.length?se("div",{className:"row"},se("div",{className:"col-2"},se("div",{className:"row"},se("div",{className:"col-2"},i[0])),se("div",{className:"row"},se("div",{className:"col-2"},i.slice(1,4).map((function(e){return e}))))),se("div",{className:o()("col")},i[4],i.slice(5,7).map((function(e){return e})))):null},ne=l.createElement;var oe=function(e){var t=e.posts,i=void 0===t?[]:t;return Array.isArray(i)&&0!==i.length?ne(l.Fragment,null,ne("div",{className:"row"},i[0]),ne("div",{className:"row"},ne("div",{className:o()("col")},i[1]),ne("div",{className:o()("col")},i.slice(2,4).map((function(e){return e})))),ne("div",{className:"row"},ne("div",{className:"col-2"},i.slice(4,8).map(()))):null},re=l.createElement,le={desktop:{byPosition:[{layout:"full",subtitle:""},{layout:"column",subtitle:""},{size:"s"},{size:"s"},{size:"m"},{size:"m"},{size:"m"},{size:"m"},{size:"m"}],default:{}},tablet:{byPosition:[{layout:"full",subtitle:""},{size:"m"},{size:"m"},{size:"m"},{layout:"column",size:"s"},{size:"s"},{size:"s"},{size:"s"},{size:"s"}],default:{}},vtablet:{byPosition:[{layout:"full",subtitle:""},{layout:"column",size:"s",subtitle:""},{size:"s"},{size:"s"},{size:"m"},{size:"m"},{size:"m"},{size:"m"},{size:"m"}],default:{}},mobile:{byPosition:[{layout:"full",subtitle:""},{layout:"column",size:"m",subtitle:""},{size:"s"},{size:"s"},{layout:"column",size:"m",subtitle:""},{layout:"column",size:"m",subtitle:""},{layout:"column",size:"m",subtitle:""},{layout:"column",size:"m",subtitle:""},{layout:"column",size:"m",subtitle:""}],default:{}}},ce=function(e){var t=e.children,i=e.tag,s=void 0===i?"div":i,n=(0,a.Z)(e,["children","tag"]);return l.createElement(s,n,t)},de=function(e){var t=e.AuthorHead,i=void 0===t?null:t,a=e.title,n=void 0===a?"":a,l=e.description,m=void 0===l?"":l,_=e.tags,f=void 0===_?[]:_,v=e.grid,g=e.lenta,h=e.mainNews,y=void 0===h?[]:h,b=e.actualPosts,x=void 0===b?[]:b,N=e.section,k=e.authorInfo,T=(0,w.MS)().state.isBlackTheme,Z=(0,w.q7)().state,S=Z.isMobile,P=Z.isDesktop,E=Z.isVerticalTablet,z=Z.isTablet,O=Z.isLaptop,j=Z.isHorizontalTablet,I=(0,r.useRouter)(),L="novosti"===N,A=Array.isArray(f)&&f.length>0,W=v.map((function(e,t){return function(e,t,i,a){var n="desktop";i.isMobile?n="mobile":i.isVerticalTablet?n="vtablet":i.isTablet&&(n="tablet");return re(H.Z,(0,s.Z)({key:e._id},e,le[n].byPosition[t],{isMobile:i.isMobile,isNewTab:a}))}(e,t,{isMobile:S,isTablet:j||O,isVerticalTablet:E},L)})),R=(0,V.Ac)(I.asPath),D=(0,G.xA)([],R),M=(0,w.bN)().state.mainVideos,B=q.Sv.test(m);return re("div",{className:"container__life_global ".concat(Y().root)},re(ce,{tag:S?"div":void 0,style:{paddingLeft:"24px"}},i||(A?re(p.Z,{title:n,tags:f}):re(F.default,{title:n,isSubTitle:!1,tag:"h1"})),(null===m||void 0===m?void 0:m.length)>0&&re("div",{className:o()(Y().description,!B&&Y().preline,T&&Y().black),dangerouslySetInnerHTML:{__html:m}}),k&&k),L&&re(c.Z,null),re(S?ie:E?oe:j||O?ae:Q,{posts:W}),re("div",{className:"row"},re("div",{className:"col-3"},re(ce,{tag:S?"div":void 0,className:Y().posts_list},g.slice(0,4).map((function(e){return re(H.Z,(0,s.Z)({},e,{key:e._id,size:S?"m":"l",layout:S?"column":"row",subtitle:S?"":e.subtitle,isNewTab:L}))})))),P&&re("div",{className:"col"},re(C,{className:Y().aside,mainNews:y,actualPosts:x}))),re("div",{className:"row"},re(u.Z,{videos:M,isMobile:S,isDesktop:P,isTablet:z,isVerticalTablet:E})),re("div",{className:"row"},re("div",{className:S?"col-2":"col-3"},re(ce,{tag:S?"div":void 0,className:Y().posts_list},g.slice(4).map((function(e){return re(H.Z,(0,s.Z)({},e,{key:e._id,size:S?"m":"l",layout:S?"column":"row",subtitle:S?"":e.subtitle,isNewTab:L,previewType:(0,G.z_)(e)}))})))),P&&re("div",{className:"col"},re("div",{style:{position:"sticky",top:"80px"}},re(d.Z,{targets:D})))))};de.defaultProps={Head:null,title:"",tags:[],grid:[],lenta:[],popularCategories:[]};var ue=de},42057:function(e,t,i){"use strict";i.d(t,{Z:function(){return w}});var s=i(91229),a=i(94184),n=i.n(a),o=i(67294),r=i(62148),l=i(15045),c=i(66461),d=i(30033),u=i(47885),p=i(64815),m=i(5773),_=i(24234),f=i(30906),v=i(85191),g=i.n(v),h=o.createElement,y={type:["smi2"],rate:{smi2:20}},b=function(e){var t=e.posts,i=e.isInlineTags,a=void 0!==i&&i;return h("div",null,h("div",{className:n()(g().wrapper)},h("div",{className:g().postsList},t.map((function(e){return h(d.Z,(0,s.Z)({},e,{key:e._id,size:"l",layout:"news",subtitle:e.subtitle,isNewTab:!0,isHiddingDesc:!0,isInlineTags:a}))})))))},w=function(e){var t=e.title,i=void 0===t?"":t,s=e.grid,a=e.lenta,d=e.mainPosts,v=void 0===d?[]:d,w=e.isShowRadioButtons,x=void 0===w||w,N=e.AuthorHead,k=e.authorInfo,T=e.description,Z=e.tags,S=void 0===Z?[]:Z,P=Array.isArray(S)&&S.length>0,E=(0,m.MS)().state,z=E.isBlackTheme,O=E.experiments,j=(0,m.q7)().state,I=j.isVerticalTablet,L=j.isHorizontalTablet,A=j.isLaptop;return(0,o.useEffect)((function(){null!==O&&void 0!==O&&O.sparrowExchange&&!(I||L||A)&&(document.getElementById("sparrowEmbed")||(0,f.Z)("https://widget.sparrow.ru/js/embed.js",{id:"sparrowEmbed",async:!0}),setTimeout((function(){(0,f.Z)("/static/js/sparrow.js",{parentId:"sparrowAside",id:"sparrow1","data-key":"b75cfe19fe4b02b095827560041da9df",async:!0})}),1e3))}),[null===O||void 0===O?void 0:O.sparrowExchange]),(0,o.useEffect)((function(){null!==O&&void 0!==O&&O.sparrowExchange&&!(I||L||A)&&setTimeout((function(){(0,f.Z)("/static/js/sparrow.js",{parentId:"sparrowAside2",id:"sparrow2","data-key":"b75cfe19fe4b02b095827560041da9df",async:!0})}),1e3)}),[null===O||void 0===O?void 0:O.sparrowExchange]),h("div",{className:n()(g().root)},h("div",{className:n()("app_content_wrapper",g().main_grid)},h("div",{className:g().content},h("div",{style:{paddingLeft:"24px"}},N||P&&h(c.Z,{title:i,tags:S})||h(u.default,{title:i,isSubTitle:!1,tag:"h1"}),k&&k,(null===T||void 0===T?void 0:T.length)>0&&h("div",{className:n()("col-3",g().description,z&&g().black),dangerouslySetInnerHTML:{__html:T}})),x&&h(r.Z,null),h(b,{posts:s,isInlineTags:I||L})),!(I||L||A)&&h("div",null,h(o.Fragment,null,!(null!==O&&void 0!==O&&O.sparrowExchange)&&h("div",{id:"smi2Aside",className:g().exchange},h(_.Z,y)),(null===O||void 0===O?void 0:O.sparrowExchange)&&h("div",{id:"sparrowAside",className:g().exchange})))),!(I||L||A)&&h("div",{className:n()("app_content_wrapper",g().main_grid),style:{padding:"32px"}},v.filter((function(e){return e.resourceType!==p.IF})).length>0&&h("div",{className:"editor-choice col-4"},h(l.ZP,{isSubTitle:!1,type:l.CV.row,title:"\u0427\u0438\u0442\u0430\u0435\u043c\u043e\u0435",posts:v.filter(().slice(0,5)}))),h("div",{className:n()("app_content_wrapper",g().main_grid)},h("div",{className:n()(g().content,(I||L||A)&&g().tablet)},h(b,{posts:a,isInlineTags:I||L})),!(I||L||A)&&h("div",null,h(o.Fragment,null,!(null!==O&&void 0!==O&&O.sparrowExchange)&&h("div",{id:"smi2Aside2",className:g().exchange},h(_.Z,y)),(null===O||void 0===O?void 0:O.sparrowExchange)&&h("div",{id:"sparrowAside2",className:g().exchange})))))}},30906:function(e,t,i){"use strict";i.d(t,{Z:);var s=i(32292),a=i(38347);function n(e,t){var i=t.onload,n=t.onerror,o=(0,a.Z)(t,["onload","onerror"]),r=function(){"function"===typeof i&&i()};if(document.getElementById(null===o||void 0===o?void 0:o.id))r();else{var l=document.createElement("script"),c=document.getElementsByTagName("script")[0],d=document.getElementById(null===o||void 0===o?void 0:o.parentId);l.src=e,Object.entries(o).forEach((),l.setAttribute("data-key",o["data-key"]),l.onload=r,l.onerror=d?d.append(l):c.parentNode.insertBefore(l,c)}}},25362:2450:91900:function(e){e.exports={desktop_width:"1366px",landscape_width:"1200px",portrait_width:"1020px",mobile_width:"768px",stretch_desktop:"1408px",stretch_horTablet:"1279px",stretch_verTablet:"963px",stretch_mobile:"647px",stretch_gap:"16px",app:"styles_app__2ADMZ",app_content_wrapper:"styles_app_content_wrapper__aqnhD",margin_bottom_m:"styles_margin_bottom_m__23hv0",app_grid_4_coll:"styles_app_grid_4_coll__1NeE5",newsMenu:"styles_newsMenu__34aMV",menuItem:"styles_menuItem__3I-fz",selected:"styles_selected__2V_P7",menuDelimiter:"styles_menuDelimiter__3qdN7",typeLink:"styles_typeLink__2Sm3d",changeRegionWrapper:"styles_changeRegionWrapper__3e4Ka"}},72750:88294:72942:96610:53825:71825:65791:60840:85191:]);