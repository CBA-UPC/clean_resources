(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3632],{635:function(t,e,n){"use strict";n.d(e,{vX:function(){return o},Ds:function(){return r}});var o,r,s,i=n(27378),a=n(36077),c=n(97458),u=n(81817),p=n(24246);!o||(o={})),r||(r={})),s||(s={}));var l=(0,i.forwardRef)((function(t,e){var n=t.className,o=t.spacing,i=void 0===o?r.NONE:o,l=t.title,d=t.subtitle,b=t.iconName,y=t.imageUrl,m=t.headerNode,v=t.size,g=void 0===v?s.MD:v,f=t.children,N="ds-p-6";switch(i){case r.NONE:N="";break;case r.SM:N="ds-p-4";break;case r.MD:N="ds-p-6";break;case r.LG:N="ds-p-8"}var I=120,k=120,_=u.XR.MD;switch(g){case s.SM:I=80,k=80,_=u.XR.SM;break;case s.MD:I=120,k=120,_=u.XR.MD;break;case s.LG:I=160,k=160,_=u.XR.LG}return(0,p.jsxs)("div",{ref:e,className:"ds-flex ds-flex-col ds-items-center ".concat(N," ").concat(n||""),children:[m||null,y?(0,p.jsx)(c.Z,{url:y,variant:u.N6.SQUARE,size:u.Ui.WIDTH_160,alt:"string"===typeof l?l:"No Result",width:I,height:k}):null,b?(0,p.jsx)(a.ZP,{name:b,size:_}):null,(0,p.jsx)("div",{className:"ds-py-4",children:l}),(0,p.jsx)("div",{children:d}),(0,p.jsx)("div",{children:f})]})}));l.displayName="DSResult",e.ZP=l},2163:function(t,e,n){"use strict";var o=n(27378),r=n(31139),s=n(78392),i=n(24246);e.Z=function(t){var e=t.options,n=t.observeOnce,a=void 0===n||n,c=t.onObserve,u=t.handleObserve,p=t.className,l=t.children,d=(0,o.useRef)(null);return(0,s.Z)((function(){var t;return t=e?new r.Z(e,a):a?(window.dsElementOnceObserver||(window.dsElementOnceObserver=new r.Z({threshold:.3},!0)),window.dsElementOnceObserver):(window.dsElementObserver||(window.dsElementObserver=new r.Z({threshold:.3},!1)),window.dsElementObserver),d.current&&(c&&t.intersect(d.current,c),u&&t.observe(d.current,u)),)),(0,i.jsx)("div",{ref:d,className:p,children:l})}},17459:function(t,e,n){"use strict";var o=n(1717),r=n(48978),s=n(60042),i=n.n(s),a=n(27378),c=n(10817),u=n(36077),p=n(2251),l=n(81817),d=n(24246),b=(0,a.forwardRef)((function(t,e){var n=t.totalRecords,s=t.currentPageNumber,a=t.recordsPerPage,b=t.createPageLink,y=t.onPageChange,m=t.className,v=Math.ceil(n/a),g=s>1,f=s<v,N=s!==v,I=function(t,e){var n=t-2;n<=0||e<=5?n=1:t+2>e&&(n=e-5+1);var o=n+5-1;o>e&&(o=e);var s=o-n+1;return(0,r.Z)(Array(s).keys()).map(()}(s,v),k="ds-border ds-border-line ds-flex ds-rounded-lg ds-bg-fill-content-prime";m&&(k+=" ".concat(m));var _="ds-p-2 ds-flex ds-justify-center ds-items-center",h="ds-border-r ds-border-line",E="ds-pointer-events-none",x=function(t){return b?{href:b(t)}:;return(0,d.jsxs)("div",{className:"ds-flex ds-flex-col ds-space-y-4",children:[(0,d.jsxs)("div",{ref:e,className:k,children:[(0,d.jsx)(c.Z,{className:i()([_,h,(0,o.Z)({},E,1===s)]),anchorType:x(1),children:(0,d.jsx)(u.ZP,{disabled:1===s,color:g?l.BG.PRIMARY:l.BG.MID,name:p.v.KEYBOARD_DOUBLE_LEFT_SOLID})}),(0,d.jsx)(c.Z,{className:i()([_,h,(0,o.Z)({},E,!g)]),anchorType:x(s-1),children:(0,d.jsx)(u.ZP,{disabled:!g,color:g?l.BG.PRIMARY:l.BG.MID,name:p.v.KEYBOARD_LEFT_SOLID})}),(0,d.jsx)("span",{className:i()([h,"ds-flex ds-flex-row ds-px-0.5 ds-space-x-1 sm:ds-space-x-3 sm:ds-px-3"]),children:I.map((function(t){return(0,d.jsx)(c.Z,{className:i()([_,"ds-text-typo ds-text-tight-m",{"ds-font-bentonsans-bold":s===t}]),anchorType:x(t),children:t},t)}))}),(0,d.jsx)(c.Z,{className:i()([_,h,(0,o.Z)({},E,!f)]),anchorType:x(s+1),children:(0,d.jsx)(u.ZP,{disabled:!f,color:f?l.BG.PRIMARY:l.BG.MID,name:p.v.KEYBOARD_RIGHT_SOLID})}),(0,d.jsx)(c.Z,{className:i()([_,(0,o.Z)({},E,!N)]),anchorType:x(v),children:(0,d.jsx)(u.ZP,{disabled:!N,color:f?l.BG.PRIMARY:l.BG.MID,name:p.v.KEYBOARD_DOUBLE_RIGHT_SOLID})})]}),(0,d.jsx)("p",{className:"ds-text-compact-xs ds-text-center ds-text-typo-mid2 ds-mt-2",children:function(){var t=(s-1)*a+1,e=n;return s<v&&(e=t+a-1),t===e?"Showing ".concat(t," of ").concat(n):"Showing ".concat(t," - ").concat(e,"  of ").concat(n)}()})]})}));b.displayName="DSWDPagination",e.Z=b},54304:function(t,e,n){"use strict";n.d(e,{s:function(){return r}});var o=n(17452),r={exclusions:{unit:"exclusions",type:o.Ft.OUT_OF_PAGE,attributes:{pos:"exclusions"}},overlay:{unit:"overlay",type:o.Ft.OUT_OF_PAGE,attributes:{pos:"outofpage"}},wallpaper:{unit:"wallpaper",type:o.Ft.IN_PAGE,attributes:{pos:"wallpaper"}},scoresCarousel:{unit:"scoresCarousel",type:o.Ft.IN_PAGE,attributes:{pos:"scoresCarousel"}},presbyHeader:{unit:"presbyHeader",type:o.Ft.IN_PAGE,attributes:{pos:"presbyHeader"}},bannerTop:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"top"}},bannerTopRoW:{unit:"bannerRoW",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"top"}},bannerBottom:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"bottom"}},bannerBottom2:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"bottom2"}},bannerNewBottom:{unit:"banner",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"newbottom"}},bannerBottomRoW:{unit:"bannerRoW",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},longstrip:{unit:"longstrip",type:o.Ft.IN_PAGE,attributes:{pos:"longstrip"}},longstrip2:{unit:"longstrip2",type:o.Ft.IN_PAGE,attributes:{pos:"longstrip2"}},incontentstrip:{unit:"incontentstrip",type:o.Ft.IN_PAGE,attributes:{pos:"incontentstrip"}},incontent:{unit:"incontent",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentNewBottom:{unit:"incontent",type:o.Ft.IN_VIEW,attributes:{pos:"newbottom",kvpos:"top"}},incontentNewTop:{unit:"incontent",type:o.Ft.IN_PAGE,attributes:{pos:"newtop",kvpos:"newtop"}},incontentRoW:{unit:"incontentRoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},promobox:{unit:"promobox",type:o.Ft.IN_PAGE,attributes:{pos:"promobox"}},promoboxTop:{unit:"promobox",type:o.Ft.IN_PAGE,attributes:{pos:"promobox",kvpos:"top"}},incontent2:{unit:"incontent2",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontent2RoW:{unit:"incontent2RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontent3:{unit:"incontent3",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontent3RoW:{unit:"incontent3RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontent3Bottom2:{unit:"incontent3",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom2"}},incontent4:{unit:"incontent4",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"newtop"}},incontentStory:{unit:"incontentStory",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentStoryRoW:{unit:"incontentStoryRoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},promoboxBottom:{unit:"promobox",type:o.Ft.IN_VIEW,attributes:{pos:"promobox",kvpos:"bottom"}},bannerSticky:{unit:"bannerSticky",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"sticky"}},bannerStickyRoW:{unit:"bannerStickyRoW",type:o.Ft.IN_PAGE,attributes:{pos:"banner",kvpos:"sticky"}},scoresCarouselApp:{unit:"scoresCarouselApp",type:o.Ft.IN_PAGE,attributes:{pos:"scoresCarouselApp",kvpos:"hsb"}},incontentApp:{unit:"incontent",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentAppRoW:{unit:"incontentRoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"top"}},incontentApp2:{unit:"incontent2",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentApp2RoW:{unit:"incontent2RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"middle"}},incontentApp3:{unit:"incontent3",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},incontentApp3RoW:{unit:"incontent3RoW",type:o.Ft.IN_VIEW,attributes:{pos:"incontent",kvpos:"bottom"}},bannerTopApp:{unit:"banner",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"top"}},bannerTopAppRoW:{unit:"bannerRoW",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"top"}},bannerBottomApp:{unit:"banner",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},bannerBottomAppRoW:{unit:"bannerRoW",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"bottom"}},bannerNewBottomApp:{unit:"banner",type:o.Ft.IN_VIEW,attributes:{pos:"banner",kvpos:"newbottom"}}}},65057:function(t,e,n){"use strict";n(27378);var o=n(60042),r=n.n(o),s=n(17809),i=n(24246);e.Z=function(t){var e=t.className;return(0,i.jsxs)("div",{className:r()("lg:ds--mx-5",e),children:[(0,i.jsx)(s.Z,{pageUnitId:"bannerTop",className:"ds-mb-2"}),(0,i.jsx)(s.Z,{pageUnitId:"bannerTopRoW",className:"ds-mb-2"})]})}},30554:function(t,e,n){"use strict";var o=n(27378),r=n(1319),s=n(47086),i=n(24246);e.Z=function(t){var e=(0,o.useContext)(r.Z),n=(0,o.useState)(!1),a=n[0],c=n[1],u=e.consent.region!==r.y.UNKNOWN;return(0,o.useEffect)((function(){var t;return u?(0,s.Oe)()?c(!0):(t=document.addEventListener("tms.ready",t)):c(!0),),[u]),(0,i.jsx)(o.Fragment,{children:a?t.children:null})}},48427:function(t,e,n){"use strict";n(27378);var o=n(43083),r=n(36223),s=n(32425),i=n(24246);e.Z=function(t){var e=t.title,n=t.children,a=t.subtitle;return(0,i.jsx)(o.ZP,{className:"ds-mb-4",children:(0,i.jsxs)(o.ZP.Content,{size:o.kC.FULL,children:[e?(0,i.jsx)(r.Z,{size:s.MM.LG,title:e,titleElement:"h1",description:a,className:"ds-p-4"}):null,n]})})}},57591:function(t,e,n){"use strict";n.d(e,{S5:function(){return y},dV:function(){return m},Pv:function(){return v},gk:function(){return g},FK:function(){return f},bA:function(){return N},N6:function(){return I},QL:function(){return _},By:function(){return h},vq:);var o=n(1717),r=n(48978),s=n(10626),i=n(28847),a=n(4550),c=n(47086),u=n(8325),p=n(69731),l=n(23346);r y=function(t){return{attributes:{pageName:"news",siteSection:"news",contentType:"story",subSection:"news",league:"no-leage"}}},m=function(t){return{attributes:{pageName:"features",siteSection:"features",contentType:"story",subSection:"features",league:"no-leage"}}},v=function(t,e){var n=t.story,o=t.related,s=t.author,i=o.serieses[0],a=(null===i||void 0===i?void 0:i.slug)||"no-league";return n.isLiveBlog?{attributes:{pageName:"story:".concat(n.slug),siteSection:a,subSection:"news:".concat(a),contentType:"story",league:a,storyDetails:"Live-Blog:".concat(n.objectId,"+").concat(n.slug),columnist:n.byline,storyPubdate:n.publishedAt,storyTitle:n.title,storyLang:n.language,storyUrl:(0,p.S1)(n),storyAuthor:null===s||void 0===s?void 0:s.name,keywords:n.keywords||[]}}:{attributes:{pageName:e.print?"print:".concat(n.slug):"story:".concat(n.slug),siteSection:a,subSection:"news:".concat(a),contentType:"story",league:a,storyDetails:"story:".concat(n.objectId,"+").concat(n.slug),columnist:n.byline,storyPubdate:n.publishedAt,storyTitle:n.title,storyLang:n.language,storyUrl:(0,p.S1)(n),storyAuthor:null===s||void 0===s?void 0:s.name,keywords:[].concat((0,r.Z)(n.keywords||[]),[(0,u.cd)(n.language,"news"),(0,u.cd)(n.language,"daily"),(0,u.cd)(n.language,"package"),(0,u.cd)(n.language,"cricket"),(0,u.cd)(n.language,"headlines"),(0,u.cd)(n.language,"bulletin")])}}},g=function(t,e){var n=b({story:t.story},t.content);return v(n,e)},f=function(t){var e=b({story:t.story,blogs:[]},t.content);return v(e,{})},N=function(t){var e=t.storyGenre;return{attributes:{pageName:"features:".concat(e.slug),siteSection:"features",contentType:"story",subSection:"features:".concat(e.slug),league:"no-leage"}}},I=k=function(t,e,n){var r,u=e.serieses[0],d=(null===u||void 0===u?void 0:u.slug)||"no-league",b={vars:{pageName:"espncricinfo:story:".concat(t.slug),eVar21:d,prop61:(t.keywords||[]).join(",").toLowerCase(),channel:"espncricinfo:".concat(d),section:"news",type:"story",premium:"premium-no",convrSport:"cricket",lang:t.language,prop35:t.publishedAt?(0,s.pC)(t.publishedAt.toString()):t.publishedAt,contentType:"story",siteType:"full",prop58:"isIndex=false",columnist:(0,l.mz)(t.byline),eVar11:"espncricinfo:news:".concat(d),league:(0,l.mz)(d),countryRegion:(0,c.RL)(),eVar13:"espncricinfo:story:".concat(t.slug),hier1:"news:story",storyInfo:(0,l.mz)("story:".concat(t.objectId,"+").concat(t.slug)),prop5:"espncricinfo:news:".concat(d),sections:"cricket:story",site:"cricinfo",pageURL:"".concat(a.Z.global.baseUrl).concat((0,p.S1)(t)),sport:"cricket",account:a.Z.integrations.omniture.ampCode,prop26:d},requests:{base:"https://sw88.espn.com/b/ss/${account}/1/AMP-0.1/s${random}?AQB=1&vid=${clientId(adobe_amp_id)}",pageView:"${base}&events=event3&pageName=${site}:amp:${type}&v13=${site}:amp:${type}&ch=${site}&c1=${site}&c4=amp:${type}&c5=${site}:amp&v11=amp:${type}:${site}:amp&v44=${externalReferrer}&v19=${sport}&c25=${sport}&v21=${league}&c26=${league}&c15=${storyInfo}&v15=${storyInfo}&c23=${columnist}&v10=${columnist}&c17=${lang}&v9=${lang}&c16=${countryRegion}&v12=${countryRegion}&c30=${premium}&c28=${wordCount}&j=amp&AQE=1",event:"${base}&pev2=${target}:google amp&c1=${site}&c9=${target}:google amp&v74=${target}:google amp"},triggers:{pageLoad:{on:"visible",request:"pageView"},"click-logo":{on:"click",selector:"a.Logo",request:"event",vars:{target:"logo"}},"click-menu":{on:"click",selector:".Nav__ToggleBtn",request:"event",vars:{target:"menu"}},"click-vertical":{on:"click",selector:".Nav__Link",request:"event",vars:{target:"vertical"}},"click-article-link":{on:"click",selector:"p a",request:"event",vars:{target:"article"}},"click-promo":{on:"click",selector:".AppPromo__Btn",request:"event",vars:{target:"app"}}}},y={vars:{path:(0,p.S1)(t),uid:"".concat(a.Z.integrations.chartbeat.code),canonicalHost:"".concat(a.Z.global.domain),domain:"".concat(a.Z.global.domain),title:"".concat(t.title),contentType:"story",sections:"cricket",authors:"".concat(n?n.name:"story")}};return{providersConfig:(r={},(0,o.Z)(r,i.S.ADOBE_ANALYTICS,{data:b}),(0,o.Z)(r,i.S.CHARTBEAT,{data:y}),(0,o.Z)(r,i.S.COMSCORE,{data:{vars:{c2:"${appConfig.integrations.comscore.code}"},extraUrlParams:{comscorekw:"amp"}}}),r)}},_=function(t){var e=t.story,n=t.content,o=n.related,r=n.author;return k(e,o,r)},h=function(t){var e=t.content,n=e.related,o=e.author,r=e.story;return k(r,n,o)},E=function(t){var e=t.story,n=t.content.author;return k(e,{stories:[],videos:[],matches:[],serieses:[],teams:[],players:[],grounds:[]},n)}},53798:function(t,e,n){"use strict";n.r(e);var o=n(40479),r=n(6952),s=n(88742),i=n.n(s),a=n(86677),c=n(27378),u=n(25480),p=n(56528),l=n(77215),d=n(96151),b=n(69731),y=n(85078),m=n(57591),v=n(65701),g=n(75869),f=n(48427),N=n(635),I=n(17459),k=n(1319),_=n(10897),h=n(86514),E=n(32425),x=n(81817),w=n(58331),A=n(47086),P=n(3366),O=n(24246),R=function(t){var e=t.featuredAuthors,n=t.data,o=n.storyGenre,r=n.content,s=r.stories,i=r.trendingStories,l=(0,c.useContext)(k.Z),d=l.lang,y=l.device,m=y.isMobile,v=y.screen,_=(0,c.useContext)(u.Z).translate,h=(0,a.useRouter)();return(0,O.jsxs)(g.Z,{trendingStories:i,featuredAuthors:e,children:[(0,O.jsx)(f.Z,{title:_("lookup_story_genre_".concat(o.title.replace(/\s+/gi,"_").toLowerCase()),o.title),children:s.results.length>0?s.results.map((function(t){return(0,O.jsx)("div",{className:"ds-border-b ds-border-line ds-p-4",children:(0,O.jsx)(p.Z,{story:t,variant:E.YQ.LEFT,size:m?v===w.QU.TABLET?E.io.LG:E.io.SM:E.io.LG,imgVariant:m?x.N6.SQUARE:x.N6.WIDE,imgSize:x.Ui.COL2_CONTENT_1T})},t.id)})):(0,O.jsx)(N.ZP,{variant:N.vX.NO_CONTENT,title:_("cm_no_content_available","No content available")})}),(0,O.jsx)("div",{className:"ds-mb-4",children:(0,O.jsx)(I.Z,{className:"ds-justify-center",totalRecords:s.total,recordsPerPage:20,currentPageNumber:Number(h.query.page||1),createPageLink:)})]})};R.getMobileAppBar=function(t){var e=t.data.storyGenre,n=(0,c.useContext)(k.Z).lang,o=(0,c.useContext)(u.Z).translate,r={type:_.iD.TEXT,title:o("cm_genre","Genre"),anchorType:{href:(0,b.T)(n,e)}};return(0,O.jsx)(h.Z,{title:r})},R.getInitialProps=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,s,a,c,u,p,g,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.appNextJsContext.lang,r=e.appNextJsContext.edition,s=e.query.page?Number(e.query.page):null,(a=(0,P.T)(n)).featuredAuthors=!0,t.next=7,(0,A.b6)();case 7:return c=t.sent,t.t0=Promise,t.next=11,c.getStoryGenreHomePage({lang:n,storyGenreId:Number(e.query.genreId),recentContent:null,page:s,records:null});case 11:return t.t1=t.sent,t.next=14,(0,A.JI)().getGlobalDetails(a);case 14:return t.t2=t.sent,t.t3=[t.t1,t.t2],t.next=18,t.t0.all.call(t.t0,t.t3);case 18:return u=t.sent,p=(0,o.Z)(u,2),g=p[0],f=p[1].featuredAuthors,(0,d._4)(e,(0,b.T)(n,g.storyGenre,s||void 0)),(0,d.es)(e,300),t.abrupt("return",{data:{featuredAuthors:f,data:g},layout:{type:l.g.DEFAULT,view:{desktopHeader:!0,desktopFooter:!1,desktopHsb:!0,desktopFooterLegalLinks:!0,mobileHeader:!0,mobileFooter:!0,mobileHsb:!1,mobileFooterLegalLinks:!0,mobileStickyAd:!1,mobileStickyAsk:!1,appStickyAd:!0},ad:(0,y.Yl)(g),analytics:(0,m.bA)(g),seo:(0,v.VB)(g,{lang:n,edition:r,blogPage:!1})}});case 25:case"end":return t.stop()}}),t)})));return (),e.default=R},46488:,);