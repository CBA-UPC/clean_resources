(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{83829:63159:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var r=n(85893),i=n(67294),a=n(50449),o=n(61497),l=n(16328),c=[0,1],u=s=function(e){for(var t,n=e.segments,a=void 0===n?4:n,o=e.onSegmentEntered,l=void 0===o?u:o,s=e.onSegmentExited,d=void 0===s?u:s,f=e.children,p=!1,v=[],m=100/a,g=[],h=0,b=0,y=(0,i.useRef)(null),w=function(e){e.forEach((function(e){var n=v[e.target.attributes["data-index"].value],r=window.scrollY>=h?"down":"up";h=window.scrollY,n&&"down"===r&&(e.intersectionRatio>0&&!n.hasEnteredViewport?(n.hasEnteredViewport=!0,l(e.target.attributes["data-segment"].value,e.target.attributes["data-percentage"].value,r,b)):e.boundingClientRect.top<0-e.boundingClientRect.height&&!n.hasLeftViewport&&(n.hasLeftViewport=!0,null===t||void 0===t||t.unobserve(n.ref.current||e.target),d(e.target.attributes["data-segment"].value,e.target.attributes["data-percentage"].value,r,b)))}))},_=0;_<a;_+=1){var E=i.createRef(),x=_+1;v[_]={ref:E,hasEnteredViewport:!1,hasLeftViewport:!1},g[_]=(0,r.jsx)("div",{ref:E,className:"observer__trigger","data-index":_,"data-segment":x,"data-percentage":m*x,style:{height:"".concat(m,"%"),top:"".concat(m*_,"%")}},"seg_".concat(_))}return(0,i.useEffect)((function(){return!b&&y&&y.current&&(b=y.current.clientHeight),p?(null===t||void 0===t||t.disconnect(),t=null,t=new IntersectionObserver(w,{rootMargin:"0px",threshold:c}),v.forEach((function(e){null===t||void 0===t||t.observe(e.ref.current)}))):(p=!0,t=new IntersectionObserver(w,{rootMargin:"0px",threshold:c}),v.forEach((function(e){null===t||void 0===t||t.observe(e.ref.current)}))),function(){t&&(t.disconnect(),t=null),p=!1}}),[l]),(0,r.jsxs)("div",{className:"observer",children:[(0,r.jsx)("div",{className:"observer__content",ref:y,children:f}),g]})},d=n(31671),f=function(e){var t=e.direction,n=void 0===t?"down":t,a=e.id,o=e.locale,l=e.title,c=e.description,u=e.url,s=e.relativeURL,f=(0,i.useContext)(d.At),p=!1,v=(0,i.useRef)(null);return(0,i.useEffect)((function(){if(!p&&v.current)return null===f||void 0===f||f.observe(v.current),p=!0,function(){if(v.current&&f)try{f.unobserve(v.current)}catch(e){console.log(e)}}}),[]),(0,r.jsx)("span",{ref:v,"data-direction":n,"data-article-id":a||"This is an article id","data-article-locale":o||"en","data-article-title":l||"This is an article title","data-article-description":c||"This is the description","data-article-url":s||u,children:e.children})},p=n(3239),v=n(55747),m=n(18463),g=n(66487),h=function(){var e=(0,p.z$)();return function(t,n){var r=void 0===n?{}:n;return e.updatePage(r),e.trackCustomEvent(t,r),e}},b=n(54889);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}var _=n(89012),E=n(25822),x=n(95923),O=function(e){var t=e.onVisible,n=void 0===t?t,i=e.children,a=(0,E.Z)({onView:n});return(0,r.jsx)("div",{ref:a.ref,children:i})},S=n(8571),j=n(70404);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P={recirc:["sticky-wrapper--pad-bottom-10","sticky-wrapper--m-b-40"].join(" "),adSlot:["sticky-wrapper","sticky-wrapper--fill-space"].join(" ")},A={"general.more_like_this":{_:"More like this"}},k=function(e,t,n){var a=void 0===n?null:n,o=(0,p.z$)(),l=(0,j.U)(A);return(0,i.useMemo)((function(){return{sidebar:"long-form"!==e.display_type?[(0,r.jsx)("div",{className:"related-sidebar sticky-wrapper sticky-wrapper--auto-fit",children:!!t.length&&(0,r.jsx)("div",{className:P.recirc,children:(0,r.jsx)(O,{onVisible:children:(0,r.jsx)(S.O,{title:l["general.more_like_this"].toUpperCase(),items:t})})})}),a&&(0,r.jsx)("div",{className:P.adSlot,children:(0,r.jsx)("div",{className:"sticky-content",children:a})})]:[],TitleWrapper:function(t){return(0,r.jsx)(f,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){I(e,t,n[t])}))}return e}({direction:"down"},e.metadata,{children:t.children}))}}}),[e,t])},M=n(21160),C=n(58676);function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){T(e,t,n[t])}))}return e}var R=function(e){var t,n=e.previewOnLoad,c=void 0!==n&&n,u=e.isInitialArticle,d=void 0!==u&&u,y=e.article,E=e.article,x=E.metadata,O=void 0===x?void 0:x,S=E.display_type,j=void 0===S?"short-form":S,I=e.relatedArticles,P=void 0===I?[]:I,A=e.afterBodyElement,T={article:y,relatedArticles:P,isInitialArticle:d};(0,i.useEffect)((,[]),function(e,t){var n=void 0===e?{}:e,r=void 0===t?"MAKE_FIXTURE=1":t,a=n&&window.location.search.includes(r);(0,i.useEffect)((function(){a&&console.log(JSON.stringify(n))}),[])}(T);var R,L=(0,M.U)().isAdFree,N=(0,C.M)().geoLocale,V=(0,i.useState)(!c),F=V[0],U=V[1],Z=null===y||void 0===y||null===(t=y.translated)||void 0===t?void 0:t.advertisement,W=(0,_.Z)().width,B=function(e,t,n,i){var a=void 0===t?"Advertisement":t;return{sponsored:(0,r.jsx)(m.Z,{id:"sponsored-article-".concat(e.web_id),slotId:"longform-sponsored-article",shouldShowDisclaimer:!1,targeting:e.adTargeting,adUnitPath:e.adUnitPath,disclaimer:a,className:"sponsored-slot",isAdFree:i}),rightRail:n>=700?(0,r.jsx)(m.Z,{id:"right-".concat(e.web_id),slotId:"shortform-right",disclaimer:a,shouldShowDisclaimer:!0,targeting:e.adTargeting,adUnitPath:e.adUnitPath,isAdFree:i}):null}}(y,Z,W||0,L),H=k(y,P,B.rightRail),G=function(e,t,n){var r=(0,p.z$)(),a=h(),o=(0,b.w)();return(0,i.useMemo)((function(){var i,l=g.E.events,c=l.CLICK,u=l.VIEW,s=l.PAGEVIEW,d=l.INFINITE_SCROLL_VIEW,f=l.SCROLLDEPTH,p=l.SOCIAL_CLICK,v=g.E.modules.RECIRC,m=g.E.pageModules.INFINITE_SCROLL,h=w({itemIndex:n,linkUID:e.id,linkTitle:null===(i=e.analyticsMetadata)||void 0===i?void 0:i.pageTitle,pageModule:v,pageModuleName:m,index:n},e.analyticsMetadata);return{onArticleExpanded:function(e,i){var l,d;t(!0),r.trackModuleEvent(c,v,{pageModule:v,pageModuleName:m,itemName:"Read More",itemIndex:n,linkUID:i.id,linkTitle:null===(l=i.analyticsMetadata)||void 0===l?void 0:l.pageTitle}),r.trackModuleEvent(u,v,{pageModule:v,pageModuleName:m,itemIndex:n,linkUID:i.id,linkTitle:null===(d=i.analyticsMetadata)||void 0===d?void 0:d.pageTitle}),a(s,(null===i||void 0===i?void 0:i.analyticsMetadata)||{}),o({type:"UPDATE",metadata:i.metadata})},onExpandedScrollProgress:function(e,t){25==t&&r.trackModuleEvent(u,v,w({},h,{scrollDepthPercentage:t,expanded:!0})),r.trackPageEvent("".concat(f," - ").concat(t),{scrollDepthPercentage:t})},onPreviewScrollBy:function(e,t){25==t&&r.trackModuleEvent(d,v,w({},h,{scrollDepthPercentage:t,expanded:!1}))},onShareClick:function(t){r.trackModuleEvent(p,"Article:Top",w({},e.analyticsMetadata,{pageModule:"Article:Top",pageModuleName:"Share Buttons",title:t,shareType:t}))}}}),[e])}(y,U,d?void 0:e.index),q=(0,p.z$)(),J=function(e){q.trackPageEvent(e,D({},y.analyticsMetadata))},z=(0,i.useMemo)((function(){var e;switch(j){case"long-form":e=o.X;break;case"full-page-ceros-iframe":case"full-page-iframe":e=l.G;break;default:e=a.bh}return e}),[j]),$=(0,i.useMemo)((function(){var t;return["long-form","short-form","video-lede"].includes(j)?D({},e,{previewOnLoad:c,afterBodyElement:A,titleWrapper:H.TitleWrapper,sponsorshipAdContainer:B.sponsored,onExpanded:G.onArticleExpanded,keepReadingLabel:null===(t=y.translated)||void 0===t?void 0:t["general.read_more_button"],onShareClick:G.onShareClick,sidebarElements:"long-form"!==j&&H.sidebar,avSensor:(0,r.jsx)(f,D({direction:"up"},O,{children:(0,r.jsx)("div",{style:{height:40}})})),geoLocale:N}):["full-page-iframe","full-page-ceros-iframe"].includes(j)?D({},e,{handleIFrameAnalytics:J}):D({},e)}),[e,y,j,G,H,B,A]);return(0,r.jsxs)("div",{"data-article-display-type":y.display_type,"data-article-is-expanded":F,children:[(0,r.jsx)(v.R,{fixtureData:T,domID:"FIXTURE-".concat(y.web_id)}),(0,r.jsx)(s,{segments:4,onSegmentEntered:(R=F,R?G.onExpandedScrollProgress:G.onPreviewScrollBy),children:(0,r.jsx)(z,D({},$,{isAdFree:L}))})]})}},55747:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});var r=n(85893),i=(n(67294),n(11163)),a=function(e){var t=e.fixtureData,n=void 0===t?{}:t,a=e.domID,o=void 0===a?"FIXTURE":a,l=(0,i.useRouter)().query,c=l.useFixture,u=void 0!==c&&c,s=l.showFixture,d=void 0!==s&&s;return"true"!==u&&"true"!==d?null:(0,r.jsxs)("div",{style:{padding:20,fontSize:10,display:d?"block":"none",fontFamily:"monospace",marginBottom:40},children:[(0,r.jsx)("h4",{children:o}),(0,r.jsx)("div",{id:o,className:"dev_fixture",children:JSON.stringify(n)})]})}},69846:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),i=n(67294),a=n(94184),o=n.n(a),l=n(22700),c=n(83870),u=n(19867),s=n(54431),d=n(3239),f=n(58676),p=n(25523),v=n(70404);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={"newsletter.disclaimer":{_:"By signing up to the VICE newsletter you agree to receive electronic communications from VICE that may sometimes include advertisements or sponsored content."},"migration.newsletter.email":{_:"Your email"},"migration.subscribe":{_:"Subscribe"}},h=function(e){var t=e.location,n=e.titleOverride,a=e.variant,h=void 0===a?"dark":a,b=e.newsletterBEMRoot,y=void 0===b?"newsletter-signup":b,w=e.userReg,_=e.className,E=e.showManageSubscription,x=void 0===E||E,O=(0,f.M)(),S=O.geoLocale,j=O.geoLocation,I=(0,d.z$)(),P=(0,i.useState)(!1),A=P[0],k=P[1],M=(0,i.useState)(),C=M[0],T=M[1],D=(0,s.aC)(),R=D.signedIn,L=D.email,N=(0,p.hS)().site,V=N.newsletter_signup_headline,F=N.newsletter_signup_dek,U=(N.name,(0,i.useContext)(u.Z).onShow);if(!F&&!V&&!n)return null;var Z="Newsletter | Signup",W="".concat(t," Interstitial"),B=function(e){var t={localePreference:S,email:e,languagePreference:window.navigator.language,country:j||"US"};window.dataLayer.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({event:"segmentIdentify"},t))},H=function(e){T(void 0),I.trackPageEvent(Z,{email:e,newsletterSignupStatus:"Submit",newsletterPlacement:W}),(null===e||void 0===e?void 0:e.trim())&&e)?(B(e),I.trackPageEvent(Z,{email:e,newsletterSignupStatus:"Success",newsletterPlacement:W}),k(!0)):(T("Invalid email address"),I.trackPageEvent(Z,{newsletterSignupStatus:"Error",newsletterPlacement:W}))},G=if(w&&"en_us"===S)return(0,r.jsx)("div",{className:o()("user-newsletter-signup",h&&"user-newsletter-signup--".concat(h),_),children:(0,r.jsx)(c.Z,{title:G(),locale:S,defaultEmail:R?L:void 0,isSuccess:A,variant:h,error:C,showManageSubscription:x,onSubmit:H,onResend:function(e){var n={event:"resendConfirmationEmail",email:e,newsletterSignupStatus:"Reconfirmation Email",newsletterPlacement:"".concat(t," Interstitial")};window.dataLayer.push(n),U("We've sent a confirmation email to ".concat(e))}})});var q=(0,v.U)(g);return(0,r.jsx)(l.Z,{bemRoot:y,title:G(),disclaimer:q&&q["newsletter.disclaimer"],buttonText:q&&q["migration.subscribe"],defaultEmail:null!==R&&R?L:void 0,isSuccess:A,onSubmit:H,onFocus:variant:h,placeholder:q&&q["migration.newsletter.email"]})}},66487:function(e,t,n){"use strict";var r,i,a,o,l,c;n.d(t,{E:function(){return u}}),(i=r||(r={})).CLICK="Article | Click",i.INFINITE_SCROLL_VIEW="Article | Infinite Scroll View",i.PAGEVIEW="articlePageLoad",i.SCROLLDEPTH="Article | ScrollDepth",i.VIEW="Article | View",i.SOCIAL_CLICK="SocialModule | Click",(o=a||(a={})).EMBEDDED_ARTICLE="Embedded Article",o.RECIRC="Article Recirculation",(c=l||(l={})).GRID_MODULE="Grid Module",c.INFINITE_SCROLL="Infinite Scroll",c.RIGHT_RAIL="Right Rail";var u={events:r,modules:a,pageModules:l}},31671:function(e,t,n){"use strict";n.d(t,{At:function(){return u},m6:function(){return d}});var r=n(85893),i=n(67294),a=n(19877),o={margins:"0px 0px 0px 0px",threshold:[0,1]},l=-1,c=function(e){return new IntersectionObserver(function(e){var t=e;return function(n,r){var i=window.scrollY>=l?"down":"up";l=window.scrollY,n.forEach((function(n){var r=n.target.attributes["data-article-id"].value,o=n.target.attributes["data-article-locale"].value,l=n.target.attributes["data-article-title"].value,c=n.target.attributes["data-article-description"].value,u=n.target.attributes["data-article-url"].value,s={id:r,locale:o,title:l,description:c};n.intersectionRatio>0&&n.target.attributes["data-direction"].value===i&&(document.title!==l&&"function"===typeof e&&t({type:a.AD.UPDATE,metadata:s}),-1===window.location.href.indexOf(u)&&window.history.replaceState({},s.title,u))}))}}(e),o)},u=i.createContext(c(()),s=d=function(e){var t=(0,i.useRef)(c(e.dispatch||s));return(0,i.useEffect)((function(){return function(){if(t.current)try{t.current.disconnect(),t.current=null}catch(e){console.log(e)}}}),[]),(0,r.jsx)(u.Provider,{value:t.current,children:e.children})}},54889:function(e,t,n){"use strict";n.d(t,{w:function(){return a}});var r=n(67294),i=n(61620),a=,34368:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(72907),i=n(16748),a=n(2712),o=function(e){return e.latest.map((function(e){var t=e.data;return{web_id:t.web_id,url:t.url,title:t.title,thumbnail_url_1_1:t.thumbnail_url_1_1,thumbnail_url_16_9:t.thumbnail_url_16_9,slug:t.slug,card:(0,r.O)(e.data)}}))};ar c=function(e,t,n){var r,c,u,s,d=void 0!==n&&n,f=function(e,t,n,r,o,l){var c=void 0===t?"vice":t,u=void 0===n?8:n,s=void 0===r?"en_us":r,d=void 0!==l&&l,f=(0,i.a)(a.b2.RelatedArticles,{ssr:d,skip:!e,variables:{id:e,site:c,perPage:u,locale:s},notifyOnNetworkStatusChange:!0}),p=f.loading,v=f.data;return e?!p&&v?{loading:!1,data:void 0}:{loading:!1,data:[]}:{loading:!1,data:void 0}}(e.articleID,e.site,e.perPage,e.locale,0,d),p=f.loading||!!(null===f||void 0===f||null===(r=f.data)||void 0===r?void 0:r.length),v=e.perPage;!f.loading&&(null===f||void 0===f||null===(c=f.data)||void 0===c?void 0:c.length)&&(null===f||void 0===f||null===(u=f.data)||void 0===u?void 0:u.length)<(e.perPage||0)&&(v=(v||0)-((null===(s=f.data)||void 0===s?void 0:s.length)||0),p=!1);var m=function(e,t,n,r,l,c,u,s,d,f){var p=void 0===e||e,v=void 0===t?"en_us":t,m=void 0===n?"vice":n,g=void 0===r?8:r,h=void 0===l?1:l,b=void 0===d?o:d,y=void 0!==f&&f,w=(0,i.a)(a.b2.LatestFeed,{skip:p,variables:{site:m,perPage:g,locale:v,page:h,type:"articles",topicID:c,sectionID:u,notID:s},notifyOnNetworkStatusChange:!0,ssr:y}),_=w.loading,E=w.data;return p?[]:!_&&E?b(E):[]}(p,e.locale,e.site,v,e.page,e.primaryTopicID,e.sectionID,e.articleID||void 0,t,d);return l(f.data||[]).concat(l(m||[]))}},8111:function(e,t,n){"use strict";var r=n(67294),i=n(3239);t.Z=function(e,t){var n=void 0===t?{}:t,a=(0,i.z$)();return(0,r.useEffect)((function(){return a.initPage(e,n),),[]),a}},8352:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return Me},default:function(){return Ce}});var r=n(28520),i=n.n(r),a=n(85893),o=n(67294),l=n(9008),c=n(54928),u=n(63159),s=n(2712),d=n(34155),f=function(e){var t=e.queryClass,n=e.headers,r=void 0===n?{}:n,i=e.vars,a=void 0===i?{}:i,o=e.req,l=e.res;return(0,s.i1)({vars:a,headers:r,clientClass:t,apiUrl:d.env.API_HOSTNAME,req:o,res:l})};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e,t,n){var r=void 0===n?{}:n;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},(0,s.mf)(t,"db48efd81f1976a4cba37fa92014703f2e","62805006619a4c963526f3d7b8749b106ade676a0afe0"),r)};function m(e,t,n,r,i,a,o){try{var l=e[a](o),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,i)}var g,h=(g=i().mark((function e(t,n){var r,a,o,l,c,u,d,p,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(r=void 0===t?{geoLocale:"en_uk",web_id:"5dbqeq",lang:"en"}:t).geoLocale,o=r.web_id,l=r.lang,e.prev=2,d=v(0,n),console.log("!!!!!!!!!!!!!!!!!!!!!!","production",null===(c="db48efd81f1976a4cba37fa92014703f2e")?void 0:c.substring(0,8),null===(u="62805006619a4c963526f3d7b8749b106ade676a0afe0")?void 0:u.substring(0,8),d),p=f({headers:d,vars:{site:"vice",locale:a,lang:l,web_id:o},queryClass:s.vF,res:n.res}),e.next=10,p.runQuery();case 10:return m=e.sent,e.abrupt("return",{article:m});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",{error:e.t0});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})),,b=n(97264),y=n(77914),w=n(34155);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}var x=function(e,t,n,r){var i,o=[{"@type":"ListItem",position:1,name:"Home",item:"".concat(t,"/").concat(e)}];n.rubric&&o.push({"@type":"ListItem",position:2,name:n.rubric.title,item:"".concat(t).concat(n.rubric.url)});var l=null===n||void 0===n||null===(i=n.body_components)||void 0===i?void 0:i.filter((function(e){return"product"===e.role})),c=[];null===l||void 0===l||l.forEach((function(e){c=c.concat(e.products||[])}));var u=c.map((function(e){var t=e.name,n=e.brand,r=e.descriptionText,i=e.images,a=e.retailers,o=e.currency,l=a?a[0]:null,c=i.map(();return{"@type":"Product",name:t,brand:null===n||void 0===n?void 0:n.name,description:r,image:c,url:null===l||void 0===l?void 0:l.product_url,offers:{"@type":"Offer",url:null===l||void 0===l?void 0:l.product_url,priceCurrency:null===o||void 0===o?void 0:o.code,price:null===l||void 0===l?void 0:l.sale_price,availability:"https://schema.org/InStock"},review:[]}}))||[],s=l&&{"@context":"https://schema.org","@type":"ItemList",name:n.title,itemListElement:c.map((function(e,t){var r=e.images,i=e.id,a=e.name,o=r[r.length-1];return{"@type":"ListItem",position:"".concat(t+1),item:{"@type":"Thing",url:"".concat(n.url,"#").concat(i),name:a,image:null===o||void 0===o?void 0:o.thumbnail_url_16_9}}}))},d={"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList",itemListElement:o},E({"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":n.url},headline:n.title},r&&{image:[r]},{datePublished:"".concat(new Date(n.publish_date||0).toISOString())},(n.updated_at||n.publish_date)&&{dateModified:"".concat(new Date(n.updated_at?n.updated_at:n.publish_date||0).toISOString())},n.contributors&&n.contributors[0]&&{author:{"@type":"Person",name:n.contributors[0].name}},{publisher:{"@type":"Organization",name:"VICE",logo:{"@type":"ImageObject",url:"".concat(w.env.PUBLIC_ASSET_HOST_NAME||"https://vice-web-statics-cdn.vice.com","/images/vice-og.png")}}}),s,u]};return(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(E({},d))}})},O=n(58676),S=n(25523),j=n(98467),I=n(69846),P=n(8111),A=function(){(0,o.useEffect)((,[])},k=n(31671),M=n(60139),C=n(24348),T=n(70681),D=n(66641),R=n(18463),L=n(45240),N=n(21160),V={"1x1":(0,a.jsx)(a.Fragment,{}),"1x5":(0,a.jsx)(a.Fragment,{}),"post-article":(0,a.jsx)(a.Fragment,{}),sharethrough:(0,a.jsx)(a.Fragment,{}),first:(0,a.jsx)(a.Fragment,{})},F=function(e){var t=(0,N.U)().isAdFree;return(0,o.useMemo)((function(){if(!e||!e.web_id)return V;var n=e.web_id,r=e.adTargeting,i=e.adUnitPath,o=e.translated.advertisement;return{"1x1":(0,a.jsx)(R.Z,{id:"1x1-".concat(n),slotId:"1x1",shouldShowDisclaimer:!1,targeting:r,adUnitPath:i,isAdFree:t}),"1x5":(0,a.jsx)(R.Z,{id:"1x5",slotId:"1x5",shouldShowDisclaimer:!1,targeting:r,adUnitPath:i,isAdFree:t}),"post-article":(0,a.jsx)(L.Z,{id:"post-article-".concat(e.web_id),slotId:"post-article",disclaimer:o||"Advertisement",shouldShowDisclaimer:!0,targeting:r,adUnitPath:i,variant:"bottom-border",className:"recirc-ad",isAdFree:t}),sharethrough:(0,a.jsx)(R.Z,{shouldShowDisclaimer:!1,id:"next",slotId:"next",adUnitPath:i,targeting:r,isAdFree:t}),first:"full-page-iframe"!==e.display_type?(0,a.jsx)(L.Z,{className:"ad-width ad pre-article docked-slot",id:"first-".concat(n),slotId:"first",shouldShowDisclaimer:!0,variant:"dark",disclaimer:o||"Advertisement",adUnitPath:i,targeting:r,isAdFree:t}):(0,a.jsx)(a.Fragment,{})}}),[e,t])},U=n(47472),Z=n(11163),W=n(1488),B=n(58425),H=n(97636);function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e,t,n){var r=void 0===t?"userOver18":t,i=void 0===n?30:n,l=(0,Z.useRouter)(),c=(0,O.M)().locale,u=(0,W.Ws)(),s=function(){return document.cookie=(0,B.pC)(r,!0,i)};(0,o.useEffect)((function(){var t=(0,B.A7)(r);if(e&&!t&&(e.birthday_required||e.age_required)){var n=1===e.birthday_required?"birthday":"prompt",i="birthday"===n?{ageRequirement:18,onTooYoungForThis:function(e){l.push("/".concat(c))},onOldEnough:function(e){s(),u({type:H.DT.HIDE})},promptText:"You need to be ".concat(18," or over to read this. Enter your birthdate to continue.")}:{onButtonConfirm:function(e){s(),u({type:H.DT.HIDE})},onButtonCancel:,o=(0,a.jsx)(U.m,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){G(e,t,n[t])}))}return e}({mode:n},i));return u({type:H.DT.SHOW,element:o}),}),[e])},J=n(61620),z=n(54889),$=n(66487),Y=n(3239),K=n(95923),X=n(97140),Q=n(70441),ee=n(15565),te=n(89012),ne=function(){var e=(0,o.useState)({}),t=e[0],n=e[1];return(0,o.useEffect)((,[]),t},re=n(55601),ie=n(768),ae=n(34368),oe=n(16748);function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){le(e,t,n[t])}))}return e}var ue=function(e,t,n,r){var i=void 0===r?"DEFAULT":r,a={moreVice:[],mostRead:[],mostWatched:[],infiniteScroll:[],mainArticleSidebar:[]},o=(0,S.hS)(),l=(0,O.M)(),c=(l.locale,l.geoLocale),u=function(e,t){var n=(0,oe.a)(s.b2.GetPopular,{skip:!1,ssr:!1,variables:ce({page:1,perPage:3},e),notifyOnNetworkStatusChange:!0}),r=n.loading,i=n.data;return!r&&(null===i||void 0===i?void 0:i.read)?t(i):{read:[],watched:[]}}({site:o.site.name,locale:c||""},(0,ie.s)(c)),d={articleID:e,sectionID:t||void 0,primaryTopicID:n||void 0,site:o.site.name,locale:c,perPage:15,page:1},f=(0,ae.r)(d,(0,ie.f)(c));return f.length&&se(a,f,i),a.mostRead=u.read,a.mostWatched=u.watched,a},se=function(e,t,n){var r=void 0===t?[]:t;switch(void 0===n?"DEFAULT":n){case"A":case"D":default:e.moreVice=r.slice(0,6),e.infiniteScroll=r.slice(6,10),e.mainArticleSidebar=r.slice(10,15);break;case"B":e.moreVice=r.slice(5,11),e.infiniteScroll=r.slice(11,15),e.mainArticleSidebar=r.slice(0,5);break;case"C":e.moreVice=r.slice(9,15),e.infiniteScroll=r.slice(0,4),e.mainArticleSidebar=r.slice(4,9);break;case"E":e.moreVice=r.slice(5,11),e.infiniteScroll=r.slice(11,15),e.mainArticleSidebar=r.slice(0,5)}},de=n(50361),fe=n.n(de),pe=$.E.events.CLICK,ve=$.E.modules.RECIRC,me=$.E.pageModules.RIGHT_RAIL,ge=["full-page-ceros-iframe","full-page-iframe"],he=function(e){return!(!e||!ge.includes(e.display_type||""))},be=function(e,t,n){var r=void 0===t?"DEFAULT":t,i=void 0!==n&&n;if(he(e)||i)return{moreVice:[],mostRead:[],mostWatched:[],infiniteScroll:[],mainArticleSidebar:[]};var a=(null===e||void 0===e?void 0:e.section)?e.section.id:null,l=!a&&e&&e.primary_topic?e.primary_topic.id:null;return function(e){var t=(0,Y.z$)();return(0,o.useMemo)((function(){var n={};return Object.keys(e).forEach((function(t){n[t]=fe()(e[t])})),n.mainArticleSidebar.forEach((0,X.R)({pageModule:ve,pageModuleName:me,pageModuleIndex:0},pe,ve,t)),n.moreVice.forEach((0,X.R)({pageModule:ve,pageModuleName:"More VICE Grid Module",pageModuleIndex:0},pe,ve,t)),n.mostRead.forEach((0,X.R)({pageModule:ve,pageModuleName:"Most Read Grid Module",pageModuleIndex:0},pe,ve,t)),n}),[e])}(ue(e&&e.id||void 0,a,l,r))},ye=n(5152);ar _e=function(e,t,n){var r=function(e){var t;try{var n=document.cookie.match(/(^| )__pcvc=([^;]+)/);n&&(t=JSON.parse(n[2]))}catch(r){t={}}return t||(t={}),"undefined"!==typeof e?"undefined"!==typeof t[e]?t[e]:null:t}();r[t]=n;var i=new Date;i.setTime(i.getTime()+94608e6);var a="expires="+i.toUTCString();document.cookie="__pcvc="+JSON.stringify(r)+";"+a+";path=/",Object.keys(r).forEach((function(t){e.push(["setCustomVariable",t,r[t]])}))},Ee=function(e,t,n,r,i,a){var o="".concat(t," Interstitial"),l=e.params,c=l.email,u=l.source,s=l.sourceType,d=l.astroSign;n.trackPageEvent("Newsletter | Signup",{email:c,locale:r,pageTitle:"VICE",pageType:t.toLowerCase(),vertical:"vice",newsletterSignupStatus:"Success",newsletterPlacement:o,localePreference:r,languagePreference:window.navigator.language,listName:a,source:u,sourceType:s,astroSign:d})},xe=function(e,t,n,r){window.addEventListener("message",(function(r){if(r&&"https://buy.tinypass.com"===r.origin){var i,a,o=window.tp||[];"email-signup"===(null===(i=JSON.parse(r.data))||void 0===i||null===(a=i.params)||void 0===a?void 0:a.eventName)&&o.push(["addHandler","customEvent",function(r){void 0!==r.params&&("post-email-signup"===r.eventName?function(e,t,n,r,i){var a=["email","source","sourceType"],o=Object.fromEntries(Object.entries(e.params).filter(());Object.entries(o).forEach((function(i){if("true"===i[1]){var a=i[0],o=e.params["listName".concat(a.charAt(0).toUpperCase()+a.slice(1))];Ee(e,t,n,r,0,o)}}))}(r,e,t,n):function(e,t,n,r,i){var a=e.params.listName;Ee(e,t,n,r,0,a)}(r,e,t,n),_e(o,"newsletter","true"))}])}}))},Oe=n(32141);unction je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ar Pe=(0,ye.default)((,{loadableGenerated:{webpack:modules:["../containers/Article/index.tsx -> ../../components/Article/InBodyRelatedArticles"]},ssr:!1}),Ae=["D","E"],ke=(i().mark((function e(t){var n,r,a,o,l,c,u,s,d,f,p,v,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.res.locals,n.siteName,r=n.geoLocale,a=n.pageType,o=void 0===a?"article":a,l=n.recircVariant,c=void 0===l?"DEFAULT":l,u=n.siteSettings,s=t.res.locale,d=t.query.web_id,e.next=5,h({web_id:d,geoLocale:r,lang:s},t);case 5:return f=e.sent,p=f.article,v=f.error,m=t.req.headers.host,e.abrupt("return",{props:JSON.parse(JSON.stringify(Ie({data:p.data,siteSettings:u,locale:s,hostName:m,error:v,geoLocale:r,recircVariant:c,pageType:o},t.res.locals)))});case 10:case"end":return e.stop()}}),e)}))),(0,Q.Z)((function(e){var t,n,r,i,s,d=e.recircVariant,f=void 0===d?"DEFAULT":d,p=e.data,v=e.error,m=e.loading,g=(0,D.NE)(),h=(0,O.M)(),w=h.locale,_=h.geoLocale,E=h.geoLocation,R=(0,N.U)().isAdFree,L=(0,S.hS)(),V=L.site,U=L.isCmsUser,Z=L.cmsHostname,W=(0,b.T_)(),B=(0,o.useMemo)((function(){return(0,y.J)((0,Oe.ZP)(w,_,g)(p),W)}),[p]);(0,X.G)(B);var H=be(B,f,!!v),G=(0,Y.z$)(),Q=(0,o.useMemo)((function(){return function(e){var t={pageModule:$.E.modules.RECIRC,pageModuleName:"".concat(e," Grid Module"),pageModuleIndex:0};G.trackPageEvent($.E.events.VIEW,t)}}),[B]);(0,P.Z)("articlePageLoad",(null===B||void 0===B?void 0:B.analyticsMetadata)||{}),A(),q(B);var te=(0,o.useContext)(J.J5),ie=(0,z.w)(),ae=F(B),oe=ne().width;if(v&&!B&&!m){if(404===v.statusCode||500===v.statusCode)return(0,a.jsx)(re.C,{statusCode:v.statusCode});throw v}(0,o.useEffect)((function(){xe("Article",G,_||"",E)}),[]);var le={moreVice:H.moreVice,mostRead:H.mostRead,mostWatched:H.mostWatched};if(m)return null;var ce="VICE"===te.title&&(null===B||void 0===B||null===(t=B.metadata)||void 0===t||null===(n=t.title)||void 0===n?void 0:n.length)?B.metadata:te;B.social_title&&(ce.shareTitle=B.social_title),B.social_description&&(ce.socialDescription=B.social_description),B.social_lede&&(ce.socialThumbnail=B.social_lede.thumbnail_url_16_9);var ue,se={template:"article-next",site:g,brand:g},de=(0,a.jsxs)("div",{className:"custom-slots",children:[ae["1x1"],ae["1x5"]]}),fe=he(B),pe=(0,o.useMemo)((function(){var e;return fe||Ae.includes(f)||R?null:(0,a.jsx)(C.Z,{permaLink:null===B||void 0===B||null===(e=B.metadata)||void 0===e?void 0:e.url,mediationID:"en_au"===_?"VICEA1OBNFO32JEO7D6HK9QBK":void 0,widgetId:"AR_1"})}),[fe,f,_,R]),ve={thumbnail_url_16_9:B.thumbnail_url_16_9,thumbnail_url_1_1:B.thumbnail_url_1_1};return(0,a.jsxs)(c.Z,Ie({},ce,{enableKeywords:!1,adLib:se,canonicalURL:B.url,pageType:e.pageType,injectedTopElement:de,mainClassname:("full-page-iframe"===B.display_type||"full-page-ceros-iframe"===B.display_type)&&"main-content full-page-iframe",article:B,children:[(0,a.jsxs)(l.default,{children:[(0,j.Z)(ve,B.display_type),x(w,V.canonical_root_url,B,ce.shareThumbnail),B.content_policies&&(ue=B.content_policies,ue?(0,o.useMemo)((function(){var e=ue.filter((),t=e.map((function(e){return(0,a.jsx)("link",{rel:"alternate",hrefLang:(null===e||void 0===e?void 0:e.language)||"",href:(null===e||void 0===e?void 0:e.url)||""},"content-policy-".concat(null===e||void 0===e?void 0:e.language))})),n=e.find(()||e[0];return t.push((0,a.jsx)("link",{rel:"alternate",hrefLang:"x-default",href:(null===n||void 0===n?void 0:n.url)||""},"content-policy-x-default")),t}),[ue]):[]),(0,a.jsx)("meta",{name:"recirc-variant",content:f})]}),!(0,K.ZO)()&&oe?(0,a.jsx)(T.Z,{element:ae.first,isAdFree:R}):null,(0,a.jsxs)(k.m6,{dispatch:ie,children:[(0,a.jsx)(u.Z,{article:B,relatedArticles:H.mainArticleSidebar,previewOnLoad:!1,isInitialArticle:!0,isAdFree:R,afterBodyElement:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I.Z,{location:"Article",variant:"light",newsletterBEMRoot:"article-newsletter-signup",userReg:!0,className:"article-newsletter-signup",showManageSubscription:!1,titleOverride:"en_us"===_&&"news"===(null===B||void 0===B||null===(r=B.section)||void 0===r?void 0:r.slug)?"Get the latest from VICE News in your inbox. Sign up right here.":null}),("long-form"===(null===B||void 0===B?void 0:B.display_type)||void 0!==oe&&oe<700)&&ae.sharethrough]})}),(0,a.jsx)(M.D,Ie({precirculationElement:pe},le,{moreViceHeading:null===B||void 0===B||null===(i=B.translated)||void 0===i?void 0:i["video.video-page.more-from-host"],postArticleAd:fe?void 0:ae["post-article"],onMoreViceVisible:Q,onMostReadVisible:Q,onMostWatchedVisible:Q})),(0,a.jsx)(ee.Z,{articleId:te.id||B.id,locale:te.locale||B.content_policy_scoped_locales?null===(s=B.content_policy_scoped_locales[0])||void 0===s?void 0:s.url_fragment:B.locale,cmsHostname:Z,isCmsUser:U}),(0,a.jsx)(Pe,{relatedArticles:H.infiniteScroll,locale:_})]})]}))}))),Me=!0,Ce=ke},72907:function(e,t,n){"use strict";n.d(t,{O:function(){return l},w:function(){return c}});var r=n(67294),i=n(36740);r l=function(e){switch(e.__typename){case"Video":return(0,i.Oz)(e);case"Article":default:return(0,i.jt)(e)}},c=function(e,t){var n=void 0===t?"en_us":t;return(0,r.useMemo)((function(){if(null===e||void 0===e?void 0:e.sections_full_slug){var t=e.sections_full_slug,r=t.id,i=t.title,c=t.slug,s=t.ad_targeting_id,d=t.highlight_video,f=t.social_title,p=t.social_description,v=t.brand_name,m=t.brand_description,g=t.brand_logo_svg_url,h=t.brand_background,b=t.social_lede,y=t.videos,w=t.latest,_=t.pinned,E=t.links,x=t.promo_units,O=o(w.filter((function(e){return!!(null===e||void 0===e?void 0:e.data)})).map((function(e){return l(e.data)}))),S=O[0],j=O[1],I=O[2],P=O.slice(3),A=(null===_||void 0===_?void 0:_.length)?l(_[0].data):{};return A.pubDate=void 0,{id:r,title:i,slug:c,ad_targeting_id:s,highlight_video:d,social_title:f,social_description:p,brand_name:v,brand_description:m,brand_logo_svg_url:g,brand_background:h,social_lede:b,latest:P,ledes:[A,S,j,I],shouldShowShoppingDisclaimer:"shopping"===c&&"en_us"===n,videos:null===y||void 0===y?void 0:y.filter(().map((function(e){return l(e.data)})),promos:x},u(E))}}),[e,n])},u=function(e){var t=[],n=[];return e.map((function(e){var r=e.title,i=e.external_url,a=e.type,o=e.show_content,c=e.data,u=e.latest;switch(a){default:break;case"topic":var s=c.name,d=c.url;t[t.length]={title:r||s,url:d,type:a},o&&u&&u.length&&(n[n.length]={title:r,url:d,items:u.map(()});break;case"external":t[t.length]={title:r,url:i,type:a}}})),{links:t,collections:n}}},768:function(e,t,n){"use strict";n.d(t,{f:function(){return i},s:function(){return a}});var r=n(91714),i=function(e){return function(t){var n=(0,r.j)(e);return(t.related_articles||t.latest||[]).map(n)}},a=function(e){return function(t){var n=(0,r.j)(e);return{read:(t.read||[]).filter((function(e){return e&&e.id})).map(n),watched:(t.watched||[]).filter(().map(n)}}}},98467:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(36488)),a=n(97595),o=n(90684),l=n(50449),c=n(61497);t.Z=function(e,t){var n=void 0===t?"card":t,u={"short-form":l.$d,"long-form":c.$,masonry:o.Z,card:i.Z},s=(0,a.Ff)(e,u[n]),d=s.sm,f=s.md,p=s.lg,v=s.xl;return(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)("link",{rel:"preload","data-fetchpriority":"high",as:"image",imagesrcset:d,media:f?"(min-width: 0px) and (max-width: 699.9px)":"(min-width: 0px)"}),f&&(0,r.jsx)("link",{rel:"preload","data-fetchpriority":"high",as:"image",imagesrcset:f,media:p?"(min-width: 700px) and (max-width: 999.9px)":"(min-width: 700px)"}),p&&(0,r.jsx)("link",{rel:"preload","data-fetchpriority":"high",as:"image",imagesrcset:p,media:v?"(min-width: 1000px) and (max-width: 1599.9px)":"(min-width: 1000px)"}),v&&(0,r.jsx)("link",{rel:"preload","data-fetchpriority":"high",as:"image",imagesrcset:v,media:"(min-width: 1600px)"})]})}},89012:function(e,t,n){"use strict";.d(t,{Z:)}},function(e){e.O(0,[774,967,995,455,250,361,122,796,506,222,392,635,204,936,258,888,179],();var t=e.O();_N_E=t}]);
//# sourceMappingURL=[slug]-907ed45cd63604d7.js.map