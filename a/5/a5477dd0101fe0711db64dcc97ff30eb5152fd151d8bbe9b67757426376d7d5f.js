(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8945],{9009:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(60042),s=n.n(r),a=n(27378),i=n(58331),c=n(15140),o=n(24246),u=(0,a.forwardRef)((function(e,t){var n=e.className,r=e.children,u=e.colCount,l=void 0===u?2:u,d=(0,a.useContext)(c.ZP).device,f=d.screen,p=d.isMobile,v={width:"calc(100% - 322px)"};return 3===l&&f===i.QU.DESKTOP_LG&&(v.width="calc(100% - 604px)"),p&&(v.width="100%"),(0,o.jsx)("div",{ref:t,className:s()("ds-grow",n,{"ds-px-2":p}),style:v,children:r},"content")}));u.displayName="DSLayoutPageContent";var l=u,d=n(31283),f=(0,a.forwardRef)((function(e,t){var n=e.className,r=e.children;e.colCount;return(0,o.jsx)(d.Z,{screen:[i.QU.DESKTOP,i.QU.DESKTOP_LG],children:(0,o.jsx)("div",{ref:t,className:s()(["ds-flex-none",n]),style:{width:"302px"},children:r})},"right")}));f.displayName="DSLayoutPageRight";var p=f,v=n(78392),m=(0,a.forwardRef)((function(e,t){var n=e.className,r=e.children,c=e.colCount,u=void 0===c?2:c,l=(0,a.useState)([i.QU.DESKTOP,i.QU.DESKTOP_LG]),f=l[0],p=l[1],m={width:"302px"};return 3===u&&(m.width="264px"),(0,v.Z)((function(){3===u&&p([i.QU.DESKTOP_LG])})),(0,o.jsx)(d.Z,{screen:f,children:(0,o.jsx)("div",{ref:t,className:s()(["ds-flex-none",n]),style:m,children:r},"left")},"left")}));m.displayName="DSLayoutPageLeft";var h=m,b=n(1717);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=(0,a.forwardRef)((function(e,t){var n=e.className,r=e.children,i=a.Children.map(r,(function(e){if(a.isValidElement(e)){var t=g(g({},e.props),{},{colCount:a.Children.count(r)});return a.cloneElement(e,t)}return e}));return(0,o.jsx)("div",{ref:t,className:s()(["ds-flex","ds-space-x-5",n]),children:i})}));x.displayName="DSLayoutPage";var y=x,j=Object.assign(y,{Left:h,Content:l,Right:p})},635:function(e,t,n){"use strict";n.d(t,{vX:function(){return r},Ds:function(){return s}});var r,s,a,i=n(27378),c=n(36077),o=n(97458),u=n(81817),l=n(24246);!r||(r={})),s||(s={})),a||(a={}));var d=(0,i.forwardRef)((function(e,t){var n=e.className,r=e.spacing,i=void 0===r?s.NONE:r,d=e.title,f=e.subtitle,p=e.iconName,v=e.imageUrl,m=e.headerNode,h=e.size,b=void 0===h?a.MD:h,N=e.children,g="ds-p-6";switch(i){case s.NONE:g="";break;case s.SM:g="ds-p-4";break;case s.MD:g="ds-p-6";break;case s.LG:g="ds-p-8"}var x=120,y=120,j=u.XR.MD;switch(b){case a.SM:x=80,y=80,j=u.XR.SM;break;case a.MD:x=120,y=120,j=u.XR.MD;break;case a.LG:x=160,y=160,j=u.XR.LG}return(0,l.jsxs)("div",{ref:t,className:"ds-flex ds-flex-col ds-items-center ".concat(g," ").concat(n||""),children:[m||null,v?(0,l.jsx)(o.Z,{url:v,variant:u.N6.SQUARE,size:u.Ui.WIDTH_160,alt:"string"===typeof d?d:"No Result",width:x,height:y}):null,p?(0,l.jsx)(c.ZP,{name:p,size:j}):null,(0,l.jsx)("div",{className:"ds-py-4",children:d}),(0,l.jsx)("div",{children:f}),(0,l.jsx)("div",{children:N})]})}));d.displayName="DSResult",t.ZP=d},2163:function(e,t,n){"use strict";var r=n(27378),s=n(31139),a=n(78392),i=n(24246);t.Z=function(e){var t=e.options,n=e.observeOnce,c=void 0===n||n,o=e.onObserve,u=e.handleObserve,l=e.className,d=e.children,f=(0,r.useRef)(null);return(0,a.Z)((function(){var e;return e=t?new s.Z(t,c):c?(window.dsElementOnceObserver||(window.dsElementOnceObserver=new s.Z({threshold:.3},!0)),window.dsElementOnceObserver):(window.dsElementObserver||(window.dsElementObserver=new s.Z({threshold:.3},!1)),window.dsElementObserver),f.current&&(o&&e.intersect(f.current,o),u&&e.observe(f.current,u)),)),(0,i.jsx)("div",{ref:f,className:l,children:d})}},17459:function(e,t,n){"use strict";var r=n(1717),s=n(48978),a=n(60042),i=n.n(a),c=n(27378),o=n(10817),u=n(36077),l=n(2251),d=n(81817),f=n(24246),p=(0,c.forwardRef)((function(e,t){var n=e.totalRecords,a=e.currentPageNumber,c=e.recordsPerPage,p=e.createPageLink,v=e.onPageChange,m=e.className,h=Math.ceil(n/c),b=a>1,N=a<h,g=a!==h,x=function(e,t){var n=e-2;n<=0||t<=5?n=1:e+2>t&&(n=t-5+1);var r=n+5-1;r>t&&(r=t);var a=r-n+1;return(0,s.Z)(Array(a).keys()).map(()}(a,h),y="ds-border ds-border-line ds-flex ds-rounded-lg ds-bg-fill-content-prime";m&&(y+=" ".concat(m));var j="ds-p-2 ds-flex ds-justify-center ds-items-center",O="ds-border-r ds-border-line",E="ds-pointer-events-none",w=function(e){return p?{href:p(e)}:;return(0,f.jsxs)("div",{className:"ds-flex ds-flex-col ds-space-y-4",children:[(0,f.jsxs)("div",{ref:t,className:y,children:[(0,f.jsx)(o.Z,{className:i()([j,O,(0,r.Z)({},E,1===a)]),anchorType:w(1),children:(0,f.jsx)(u.ZP,{disabled:1===a,color:b?d.BG.PRIMARY:d.BG.MID,name:l.v.KEYBOARD_DOUBLE_LEFT_SOLID})}),(0,f.jsx)(o.Z,{className:i()([j,O,(0,r.Z)({},E,!b)]),anchorType:w(a-1),children:(0,f.jsx)(u.ZP,{disabled:!b,color:b?d.BG.PRIMARY:d.BG.MID,name:l.v.KEYBOARD_LEFT_SOLID})}),(0,f.jsx)("span",{className:i()([O,"ds-flex ds-flex-row ds-px-0.5 ds-space-x-1 sm:ds-space-x-3 sm:ds-px-3"]),children:x.map((function(e){return(0,f.jsx)(o.Z,{className:i()([j,"ds-text-typo ds-text-tight-m",{"ds-font-bentonsans-bold":a===e}]),anchorType:w(e),children:e},e)}))}),(0,f.jsx)(o.Z,{className:i()([j,O,(0,r.Z)({},E,!N)]),anchorType:w(a+1),children:(0,f.jsx)(u.ZP,{disabled:!N,color:N?d.BG.PRIMARY:d.BG.MID,name:l.v.KEYBOARD_RIGHT_SOLID})}),(0,f.jsx)(o.Z,{className:i()([j,(0,r.Z)({},E,!g)]),anchorType:w(h),children:(0,f.jsx)(u.ZP,{disabled:!g,color:N?d.BG.PRIMARY:d.BG.MID,name:l.v.KEYBOARD_DOUBLE_RIGHT_SOLID})})]}),(0,f.jsx)("p",{className:"ds-text-compact-xs ds-text-center ds-text-typo-mid2 ds-mt-2",children:function(){var e=(a-1)*c+1,t=n;return a<h&&(t=e+c-1),e===t?"Showing ".concat(e," of ").concat(n):"Showing ".concat(e," - ").concat(t,"  of ").concat(n)}()})]})}));p.displayName="DSWDPagination",t.Z=p},30554:function(e,t,n){"use strict";var r=n(27378),s=n(1319),a=n(47086),i=n(24246);t.Z=function(e){var t=(0,r.useContext)(s.Z),n=(0,r.useState)(!1),c=n[0],o=n[1],u=t.consent.region!==s.y.UNKNOWN;return(0,r.useEffect)((function(){var e;return u?(0,a.Oe)()?o(!0):(e=document.addEventListener("tms.ready",e)):o(!0),),[u]),(0,i.jsx)(r.Fragment,{children:c?e.children:null})}},74611:function(e,t,n){"use strict";var r=n(86677),s=(n(27378),n(36077)),a=n(2251),i=n(93813),c=n(47535),o=n(81817),u=n(24246);t.Z=function(e){var t=e.heading,n=e.items,l=e.matchPath,d=e.activeNavItemElement,f=(0,r.useRouter)().asPath,p=void 0,v=[];return n.forEach((function(e,t){v.push({key:t,label:(0,i.S7)(e.url)?(0,u.jsxs)("span",{className:"ds-flex ds-items-center",children:[e.title,(0,u.jsx)(s.ZP,{name:a.v.OPEN_IN_NEW_OUTLINE,size:o.XR.XS,className:"hover:ds-text-typo-primary-hover ds-ml-2"})]}):e.title,anchorType:{href:e.url}}),(0,i.jN)(null!==l&&void 0!==l?l:f,e.url)&&(p=t)})),(0,u.jsx)(c.Z,{selectedNavKey:p,navItems:v,heading:t,activeNavItemElement:d})}},61261:function(e,t,n){"use strict";n.d(t,{B:function(){return a},o:function(){return i}});var r=n(92438),s=n(8325),a=i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,r.ij)("".concat((0,s.P_)(e),"/author/").concat(t.slug,"-").concat(t.id),n)}},16766:function(e,t,n){"use strict";var r=n(27378),s=n(86677),a=n(2251),i=n(93813),c=n(1319),o=n(73627),u=n(26375),l=n(86514),d=n(36077),f=n(10897),p=n(81817),v=n(24246);t.Z=function(e){var t=e.heading,n=e.items,m=(0,r.useContext)(c.Z).lang,h=(0,s.useRouter)().asPath,b=void 0,N=void 0;if(m===o.IBh.ENGLISH){var g=[];n.forEach((function(e,t){g.push({key:t,label:(0,i.S7)(e.url)?(0,v.jsxs)("span",{className:"ds-flex ds-items-center",children:[e.title,(0,v.jsx)(d.ZP,{name:a.v.OPEN_IN_NEW_OUTLINE,color:p.BG.INVERSE,className:"ds-ml-2 hover:ds-text-typo-primary-hover",size:p.XR.XS})]}):e.title,anchorType:{href:e.url}}),!N&&(0,i.jN)(h,e.url)&&(N=t)})),b={options:g,defaultActiveKey:N,variant:u.m6.PRIMARY}}var x={type:f.iD.TEXT,title:t.title,anchorType:t.anchorType,imageUrl:t.imageUrl,iconName:t.iconName};return(0,v.jsx)(l.Z,{title:x,tabs:b})}},48427:function(e,t,n){"use strict";n(27378);var r=n(43083),s=n(36223),a=n(32425),i=n(24246);t.Z=function(e){var t=e.title,n=e.children,c=e.subtitle;return(0,i.jsx)(r.ZP,{className:"ds-mb-4",children:(0,i.jsxs)(r.ZP.Content,{size:r.kC.FULL,children:[t?(0,i.jsx)(s.Z,{size:a.MM.LG,title:t,titleElement:"h1",description:c,className:"ds-p-4"}):null,n]})})}},22870:function(e,t,n){"use strict";n.r(t),n.d(t,{default:);var r=n(40479),s=n(6952),a=n(88742),i=n.n(a),c=n(27378),o=n(86677),u=n(56528),l=n(77215),d=n(96151),f=n(8325),p=n(92438),v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,p.ij)("".concat((0,f.P_)(e),"/cricket-news/").concat(t.slug,"-").concat(t.id),n)},m=n(1717),h=n(54304);r g=function(e){var t=e.subject;return{attributes:{pageName:"in focus:".concat(t.slug),siteSection:"in focus",contentType:"story",subSection:"in focus:".concat(t.slug),league:"no-leage"}}},x=n(659),y=n(73627),j=function(e,t){var n=t.lang,r=t.edition,s=(0,x.MN)(r),a=e.subject;return{title:"".concat(a.title," | In Focus | Find Out The Latest updates on ").concat(a.title," | Cricket"),description:"Check out our exclusive updates on everything around ".concat(a.title," | Cricket"),canonical:v(n,a),canonicalEng:v(y.IBh.ENGLISH,a),keywords:[a.title,"Cricket Updates"],language:n!==y.IBh.ENGLISH?{title:{langKey:"subject_index_title",defaultValue:"{{SUBJECT_TITLE}} | In Focus | Find Out The Latest updates on {{SUBJECT_TITLE}} | Cricket",params:{SUBJECT_TITLE:a.title}},description:{langKey:"subject_index_description",defaultValue:"Check out our exclusive updates on everything around {{SUBJECT_TITLE}} | Cricket",params:{SUBJECT_TITLE:a.title}},keywords:[{langKey:"",defaultValue:a.title},{langKey:"cm_cricket_update",defaultValue:"Cricket Updates"}]}:void 0,languagesCanonical:s.map(()}},O=n(75869),E=n(48427),w=n(635),P=n(17459),S=n(1319),T=n(25480),Z=n(69731),L=n(16766),_=n(32425),I=n(81817),D=n(58331),k=n(74611),C=n(47086),R=n(3366),M=n(24246),G=function(e){var t=e.featuredAuthors,n=e.data,r=n.subject,s=n.content,a=s.contentItems,i=s.trendingStories,l=a.results.map((),d=(0,c.useContext)(S.Z),f=d.lang,p=d.device,m=p.isMobile,h=p.screen,b=(0,o.useRouter)();return(0,M.jsxs)(O.Z,{trendingStories:i,featuredAuthors:t,children:[(0,M.jsx)(E.Z,{title:r.title,subtitle:r.description?r.description:void 0,children:l.length>0?l.map((function(e){return(0,M.jsx)("div",{className:"ds-border-b ds-border-line ds-p-4",children:(0,M.jsx)(u.Z,{story:e,variant:_.YQ.LEFT,size:m?h===D.QU.TABLET?_.io.LG:_.io.SM:_.io.LG,imgVariant:m?I.N6.SQUARE:I.N6.WIDE,imgSize:I.Ui.COL2_CONTENT_1T})},e.id)})):(0,M.jsx)(w.ZP,{variant:w.vX.NO_CONTENT,title:"No Stories Found"})}),(0,M.jsx)("div",{className:"ds-mb-4",children:(0,M.jsx)(P.Z,{className:"ds-justify-center",totalRecords:a.total,recordsPerPage:20,currentPageNumber:Number(b.query.page||1),createPageLink:)})]})};G.getDesktopSubHeader=function(e){var t=(0,c.useContext)(T.Z).translate,n=(0,c.useContext)(S.Z).lang,r=e.newsSubNavigationItems;if(n===y.IBh.ENGLISH)return(0,M.jsx)(k.Z,{heading:{title:t("cm_news","News"),anchorType:{href:(0,Z.VY)(n)}},items:r})},G.getMobileAppBar=function(e){var t=(0,c.useContext)(T.Z).translate,n=(0,c.useContext)(S.Z).lang,r=e.newsSubNavigationItems;if(n===y.IBh.ENGLISH)return(0,M.jsx)(L.Z,{heading:{title:t("cm_news","News"),anchorType:{href:(0,Z.VY)(n)}},items:r})},G.getInitialProps=function(){var e=(0,s.Z)(i().mark((function e(t){var n,s,a,c,o,u,f,p,m,b,x;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.appNextJsContext.lang,s=t.appNextJsContext.edition,a=t.query.page?Number(t.query.page):null,(c=(0,R.T)(n)).newsSubNavigationItems=!0,c.featuredAuthors=!0,e.next=8,(0,C.iw)();case 8:return o=e.sent,e.t0=Promise,e.next=12,o.getSubjectHomePage({lang:n,subjectId:Number(t.query.subjectId),page:a});case 12:return e.t1=e.sent,e.next=15,(0,C.JI)().getGlobalDetails(c);case 15:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=19,e.t0.all.call(e.t0,e.t3);case 19:return u=e.sent,f=(0,r.Z)(u,2),p=f[0],m=f[1],b=m.newsSubNavigationItems,x=m.featuredAuthors,(0,d._4)(t,v(n,p.subject)),(0,d.es)(t,300),e.abrupt("return",{data:{newsSubNavigationItems:b,featuredAuthors:x,data:p},layout:{type:l.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!1,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!1,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!1,appStickyAd:!0},ad:(i=p,{gpt:{webAdUnitPath:"newsindex/infocus",appAdUnitPath:"newsindex/infocus",attributes:{kvpt:"index",kvbrand:"infocus",kvsite:i.subject.slug},units:N({},h.s)}}),analytics:g(p),seo:j(p,{lang:n,edition:s})}});case 28:case"end":return e.stop()}var i}),e)})));return ();var U=G},42651:,);