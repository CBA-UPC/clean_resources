/*! For license information please see vendors~learning-shelf-rc.7d85f2743d1b135dfd0c.chunk.v7.js.LICENSE.txt */
(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[654],{"1w9C":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("mXGw"),a=n("QjXU"),i=function(e,t,n){var i=function(e){var t=Object(a.__read)(Object(r.useState)(null),2),n=t[0],i=t[1],o=Object(r.useCallback)(e,[]);return Object(r.useEffect)((,[o]),n}(e(t));return Object(r.useMemo)((function(){return i&&n?i.getDataManager(n):void 0}),[n,i])}},"26L8":function(e,t,n){"use strict";n.d(t,"a",(function(){return be}));var r,a=n("CU8J"),i=n("7Yj8"),o=n("2/or"),c=n("O76m"),s=n("mXGw"),u=n.n(s),l=n("ci7w"),d=n("84Nv"),f=Object(s.lazy)((),v=function(e,t,n,r){return u.a.createElement(s.Suspense,{fallback:null},u.a.createElement(f,{card:e,index:t,ref:r,relativeIndex:n,tabIndex:-1}))},h=function(e){var t=e.cards,n=e.isCollapsed,r=e.isVisualRefresh,a=e.direction,f=e.callbacks,h=e.learningShelfStrings,b=e.homeReorderedEnabled,g=Object(d.a)(),p=Object(s.useCallback)((function(e){var t=l.a.height,n={width:l.a.width,maxWidth:l.a.maxWidth,minWidth:l.a.minWidth,height:t};return{Small:{width:l.a.minWidth,maxWidth:l.a.maxWidth,minWidth:l.a.maxWidth,height:t},Medium:{width:l.a.maxWidth,maxWidth:l.a.maxWidth,minWidth:l.a.minWidth,height:t},Large:n,ExtraLarge:n,ExtraExtraLarge:n,ExtraExtraExtraLarge:n}[e]}),[]);return u.a.createElement("div",{className:b?g.shelfContainer:""},u.a.createElement(i.a,{arrowKeyListNavEnabled:!0,callbacks:f,cards:t||[],cardGutterWidth:l.a.gutterWidthPixels,carouselBottomMargin:l.a.carouselMarginBottomPixels,carouselResources:h.carouselResources,carouselTitle:h.learningShelfResources.titleText,direction:a,getItemDimensionsForBreakpoint:p,headerOptions:{type:o.a.SubtitleTwo,isCollapsed:n,onCarouselToggled:f.onCarouselToggled},isVisualRefresh:null!=r&&r,renderItem:v,resizeOptions:{type:c.a.Fixed,peekSizePixels:l.a.peekPixels}}))},b=n("QjXU"),g=n("NrNW"),p=n("h8qh"),m=n("/Oio"),O=n("cenr"),w=n("lOFt"),j=n("V9hE"),_=n("a3FV"),S=n("Dn7E"),y=n("lUkk"),k=n("CMIS"),C=n("dy1P"),x="LearningShelf",L=n("h9iM"),P=n("io1X"),N=n("FPnS"),A=n("DCX/"),E=n("gd1C"),R=function(e){eturn Object(b.__extends)(t,e),t.prototype.getCardErrorInfo=function(){return this.cardErrorOptions},t}(Error);!function(e){e.NewTab="NewTab"}(r||(r={}));var T,M,D=n("SL81"),I=n("MiUb"),U=n("Yvbg"),F=W=function(e){var t,n,r,a;if(!(null===(t=e.cardAction)||void 0===t?void 0:t.url))throw new R(F(e,{url:null===(n=e.cardAction)||void 0===n?void 0:n.url,cardActionType:null===(r=e.cardAction)||void 0===r?void 0:r.type}),"Unable to launch url: ctaURL value is missing or empty");try{e.cardAction.type!==L.a.flexPaneArticle&&new URL(null===(a=e.cardAction)||void 0===a?void 0:a.url)}catch(t){throw new R(F(e),"Unable to launch url: URL is not valid")}return e.cardAction.url},H=((T={})[L.a.externalUrl]=T[L.a.inAppNavigationUrl]=function(e){return{ariaRole:"button",onClickAriaLabel:e.opensInSameTab,titleIcon:void 0}},T[L.a.flexPaneArticle]=function(e){return{ariaRole:"link",onClickAriaLabel:e.opensInSameTab,titleIcon:void 0}},T),V=((M={})[L.a.externalUrl]=function(e,t,n){return Object(b.__awaiter)(void 0,void 0,void 0,(function(){var r;return Object(b.__generator)(this,(function(a){return r=W(e),t.logLearningShelfCardClick(e.id,n,r),[2,Object(E.a)(r)]}))}))},M[L.a.inAppNavigationUrl]=function(e,t,n){return Object(b.__awaiter)(void 0,void 0,void 0,(function(){var r,a,i;return Object(b.__generator)(this,(function(o){switch(o.label){case 0:return r=W(e),[4,Object(A.a)()];case 1:if(!(a=o.sent()))throw new Error("Capabilities not available");if(!(i=Object(D.a)(r,a)))throw new R(F(e,{url:r}),"Unable to get route for url");return t.logLearningShelfCardClick(e.id,n,i),[2,Object(E.a)(i)]}}))}))},M[L.a.flexPaneArticle]=function(e,t,n){return Object(b.__awaiter)(void 0,void 0,void 0,(function(){var r,a,i;return Object(b.__generator)(this,(function(o){switch(o.label){case 0:r=function(e){var t,n,r;if(!(null===(t=e.cardAction)||void 0===t?void 0:t.guid))throw new R(F(e,{url:null===(n=e.cardAction)||void 0===n?void 0:n.guid,cardActionType:null===(r=e.cardAction)||void 0===r?void 0:r.type}),"Unable to launch url: ctaURL value is missing or empty");if(!Object(U.a)(e.cardAction.guid))throw new R(F(e),"Unable to launch ctaUrl: ArticleId is not valid, expected a GUID");return e.cardAction.guid}(e),t.logLearningShelfCardClick(e.id,n,r),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Object(I.a)()];case 2:return(a=o.sent())&&a.NFD&&"function"==typeof a.NFD.OpenHelp?(a.NFD.OpenHelp(r),[2,{success:!0}]):[3,4];case 3:return i=o.sent(),t.logLearningShelfCardClickError(e.id,i),[3,4];case 4:return[2,{success:!1,message:"Failed to open FlexPane"}]}}))}))},M),B=n("B5kz"),X=n("1w9C");function z(e){switch(e){case"home":return function(){return n.e(570).then(n.bind(null,"omtC"))};case"word":return function(){return n.e(573).then(n.bind(null,"qPU6"))};case"iris":return case"custom":default:return }var K,G=((K={})[N.a.highContrast]=L.c.Contrast,K[N.a.dark]=L.c.DarkMode,K[N.a.default]=L.c.Default,K),Q="LearningShelfData",J=n("LLg0"),Z=n("Pspf"),Y=function(e,t){return Object(b.__assign)(Object(b.__assign)(Object(b.__assign)({},{enabled:!1,impressionsSinceLastInteraction:0,learningShelfCollapsed:!1}),e),t)};function q(){var e=Object(g.a)().data,t=Object(J.a)(Q,Y),n=Object(Z.a)(Q,Y);return Object(s.useMemo)((function(){return(null==e?void 0:e.workload)===m.a.Hwa?n:t}),[null==e?void 0:e.workload,n,t])}var $=n("CaQ9"),ee=n("mpo9"),te=(n("MJsD"),n("yEz2")),ne=(n("W7wX"),n("Ot9e")),re=n("PIlr"),ae=n("iiZS"),ie=n("66iV"),oe=n("Pd+Y"),ce=n("kA1t"),se=n("AGMK"),ue=n("iPRk"),le=n("gB6C"),de=n("pdjy"),fe=n("laSs");function ve(e){var t=Object(s.useRef)(!1),n=function(){var e=function(e){var t=Object(g.a)().data,n=Object(ie.a)(),r=["UserStorage",e];return Object(B.c)(r,(function(){return function(e,t){return Object(oe.a)("LearningShelfData",t).then((function(e){return e?{result:e,fromPersistence:!1}:{result:void 0,fromPersistence:!1}}))}(0,n)}),{cacheTime:1/0,staleTime:1/0,enabled:!!n&&(null==t?void 0:t.workload)!==m.a.Hwa})}(Q).data,t=Object(ae.a)(Q).data,n=Object(g.a)().data;return Object(s.useMemo)((function(){return(null==n?void 0:n.workload)===m.a.Hwa?t||void 0:e?e.result:null}),[null==n?void 0:n.workload,t,e])}(),r=Object(b.__read)(q(),1)[0],i=Object(g.a)().data,o=function(e){var t="Click";return{logLearningShelfAutoCollapsed:function(){Object(S.a)({area:x,eventName:"LearningShelfAutoCollapsed",featureName:"LearningShelf"}),Object(O.a)(_.a.LearningShelfAutoCollapsed,{Area:"LearningShelf"})},logLearningShelfCardClick:function(n,r,a){var i,o,c="LearningShelfCardClick";if(function(e){return void 0!==e.route}(a)){var s=((i={}).Create=C.a.Create,i.AppGallery=C.a.MyApps,i);Object(y.a)({id:n,area:x,eventName:c,result:"Navigate",target:null!==(o=s[a.route])&&void 0!==o?o:"Other",type:t}),Object(w.a)(_.a.LearningShelfCardClick,n,"LearningShelf")}else Object(y.a)({id:n,area:x,eventName:c,result:"Refer",target:"Other",type:t}),Object(w.a)(_.a.LearningShelfCardClick,n,"LearningShelf","Other",e?"Native":"Web");Object(S.a)({area:x,eventName:c,featureName:"LearningShelf",params:{id:n,index:r.toString()}})},logLearningShelfNavClick:function(e,n,r,a){var i="LearningShelfNavClick",o=-1===a?"NavigationPrevious":"NavigationNext";Object(y.a)({id:o,area:x,eventName:i,result:"Navigate",target:"Other",type:t}),Object(w.a)(i,o,"LearningShelf"),Object(S.a)({area:x,eventName:i,featureName:"LearningShelf",params:{id:o,index:e.toString(),cardsPerPage:n.toString(),totalCards:r.toString()}})},logLearningShelfCardInvalid:function(e,t){var n,r="".concat(e,":").concat(t||"");Object(k.a)({area:x,eventName:"LearningShelfCardInvalid",message:r}),Object(j.a)(_.a.LearningShelfCardInvalid,((n={}).DebugInfo=r,n))},logLearningShelfCardClickError:function(e,t){var n,r=t instanceof Error?"".concat(e,":").concat(t.message,":").concat(t.stack):e;Object(k.a)({area:x,eventName:"LearningShelfCardClickError",message:r}),Object(j.a)(_.a.LearningShelfCardClickError,((n={}).DebugInfo=r,n))},logLearningShelfToggled:function(e){Object(y.a)({id:"LearningShelfToggled",area:x,eventName:"LearningShelfToggled",result:e?"Close":"Open",target:"LearningShelf",type:t}),Object(w.a)(_.a.LearningShelfToggled,e?"Close":"Open","LearningShelf")}}}((null==i?void 0:i.workload)===m.a.Hwa),c=function(){var e=Object(g.a)().data,t=Object($.a)().data;return Object(s.useMemo)((function(){return e&&t?e.workload===m.a.Hwa?function(e){var t=Object(re.b)(e,"_PwaFirstVisitTimestamp");return!!t&&Object(te.a)(Date.parse(t))<=5}(t.puid):Object(ee.c)():null}),[t,e])}(),u=Object(p.a)().data,l=function(e){var t,n,r,i=function(){return Object(s.useMemo)((function(){return function(){switch(Object(ne.a)(location.search).showLearningShelfOverride){case"1":return!0;case"0":return!1;default:return}}()}),[])}(),o=Object(a.a)().data,c=null!==(r=null===(n=null===(t=null==o?void 0:o.result)||void 0===t?void 0:t.learningShelfGates)||void 0===n?void 0:n.learningShelfAudienceExpansionEnabled)&&void 0!==r&&r;return Object(s.useMemo)((function(){return void 0!==i?i:!!e&&(!!c||e.enabled)}),[i,e,c])}(n),d=function(e,t,n){var r=Object(b.__read)(q(),1)[0],i=Object(s.useRef)(!1),o=Object(a.a)().data,c=Object(s.useMemo)((function(){var e,t;return(null===(t=null===(e=null==o?void 0:o.result)||void 0===e?void 0:e.homeReorderedGates)||void 0===t?void 0:t.homeReorderedEnabled)||!1}),[o]);return Object(s.useMemo)((function(){var a=function(){if(!i.current&&(!e||e.impressionsSinceLastInteraction<=10)&&n){var a=void 0!==(null==e?void 0:e.impressionsSinceLastInteraction)?e.impressionsSinceLastInteraction+1:1;a>10&&!c&&t.logLearningShelfAutoCollapsed(),r(Object(b.__assign)(Object(b.__assign)({},e),{impressionsSinceLastInteraction:a})),i.current=!0}};return c||void 0===e?(a(),!1):!(null!==e&&r&&!e.learningShelfCollapsed)||(a(),e.impressionsSinceLastInteraction>10)}),[c,n,t,r,e])}(n,o,l),f=Object(s.useCallback)((function(){n&&0===n.impressionsSinceLastInteraction||r({impressionsSinceLastInteraction:0})}),[n,r]),v=Object(s.useCallback)((function(e){r({learningShelfCollapsed:e,impressionsSinceLastInteraction:0}),o.logLearningShelfToggled(e)}),[o,r]),h=Object(s.useMemo)((function(){return Object(b.__assign)(Object(b.__assign)({},o),{onUserClick:f,onCarouselToggled:v,onCarouselNavClick:o.logLearningShelfNavClick})}),[o,f,v]),N=function(e,t,n,r){var a=function(e,t,n){var r=function(e){void 0===e&&(e="home");var t=Object(g.a)().data,n=Object(s.useMemo)((function(){if(t)return{context:t,dataProviderType:e}}),[t,e]);return Object(X.a)(z,e,n)}(t),a=["LearningShelfCards",t];return Object(B.c)(a,(function(){return n?null==r?void 0:r.getApiCards():void 0}),{staleTime:1/0,cacheTime:1/0,enabled:!!r&&!e})}(e,n,r).data,i=Object(P.a)(),o=Object(p.a)().data;return Object(s.useMemo)((function(){var e;if(i&&o&&a&&0!==a.length){var n=null!==(e=G[i])&&void 0!==e?e:L.c.Default;return function(e,t,n,r,a){var i=screen.width>1920?L.b.Large:L.b.Normal,o=[];return e.forEach((function(e,n){if(function(e){return void 0!==e.cardAction}(e)){var c=function(e,t,n,r,a,i,o){void 0===i&&(i=L.c.Default);var c=e.id,s=e.telemetry,u=e.type,l=e.metadata,d=l.description,f=l.title,v=function(e,t,n){var r=e[t];return r||(r=e[L.b.Normal]),n,r)}(l.images,a,i),h=function(e,t,n,r){var a=e.cardAction.type;if(e.cardAction.url||e.cardAction.guid)return function(){return Object(b.__awaiter)(void 0,void 0,void 0,(function(){var n;return Object(b.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,V[a](e,t,r)];case 1:return i.sent(),(null==t?void 0:t.onUserClick)&&t.onUserClick(),[3,3];case 2:return n=i.sent(),t.logLearningShelfCardClickError(e.id,n),[3,3];case 3:return[2]}}))}))}}(e,n,0,r);h||n.logLearningShelfCardInvalid(e.id,"onCardClick is missing");var g=H[e.cardAction.type](o);return{completed:!1,id:c,metadata:{ariaRole:g.ariaRole,description:d,image:{src:v.src,altText:v.alt},onClickAriaLabel:g.onClickAriaLabel,title:f,titleIcon:g.titleIcon,firstCardHint:o.firstCardHint},onCardClick:h,telemetry:s,type:u}}(e,0,t,n,i,r,a);c.onCardClick&&o.push(c)}else t.logLearningShelfCardInvalid(e.id,"cardAction is missing")})),o}(a,t,0,n,o.learningShelfResources)}}),[a,i,t,o])}(d,h,e,l);return Object(s.useEffect)((function(){null===n||null===c||t.current||!(null==n?void 0:n.enabled)&&c&&(t.current=!0,r({enabled:!0}))}),[c,r,n]),function(e,t){var n="LearningShelf";!function(e){var t=Object(s.useRef)(!1),n=e.area,r=e.featureName,a=e.impressionOptions,i=e.initializationOptions;Object(s.useEffect)((function(){i&&Object(S.a)({area:n,eventName:i.eventName,featureName:r})}),[]),Object(s.useEffect)((function(){if(a&&a.paintMarker&&a.canRender&&!t.current){var e=a.eventName,r=a.paintMarker,i=a.renderSize;Object(le.a)((function(){Object(fe.a)({area:n,eventName:e,renderSize:i});var t={};t.Area=n,t.RenderSize=i.toString(),Object(ce.a)(e,t)}),de.d),Object(se.a)()&&Object(ue.a)(r),t.current=!0}}),[n,a])}({area:n,featureName:"LearningShelf",impressionOptions:{canRender:t,eventName:"Learning_Shelf",renderSize:e,paintMarker:"".concat(n,"_Paint")},initializationOptions:{eventName:"Learning_Shelf"}})}(d?0:1,l&&(!u||null===n)),Object(s.useMemo)((function(){if(u&&null!==n&&null!==c&&l)return{callbacks:h,cards:N,isShelfCollapsed:d,learningShelfStrings:{carouselResources:u.carouselResources,learningShelfResources:u.learningShelfResources}}}),[h,N,d,c,u,l,n])}var he=n("HcnA"),be=function(e){var t=e.dataProviderType,n=ve(!function(){var e=Object(a.a)().data;return Object(s.useMemo)((function(){var t,n;return(null===(n=null===(t=null==e?void 0:e.result)||void 0===t?void 0:t.irisForLearningShelfGates)||void 0===n?void 0:n.irisForLearningShelfEnabled)||!1}),[e])}()||void 0!==t&&"home"!==t?t:"iris"),r=Object(a.a)().data,i=Object(s.useMemo)((function(){var e,t;return(null===(t=null===(e=null==r?void 0:r.result)||void 0===e?void 0:e.homeReorderedGates)||void 0===t?void 0:t.homeReorderedEnabled)||!1}),[r]),o=Object(he.a)();return n?u.a.createElement(h,{cards:n.cards,direction:"rtl"===document.dir?"rtl":"ltr",isCollapsed:n.isShelfCollapsed,isVisualRefresh:null!=o&&o,learningShelfStrings:n.learningShelfStrings,callbacks:n.callbacks,homeReorderedEnabled:i}):null}},"28zg":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("QjXU"),a=n("MJsD"),i=n("B5kz"),o=n("gCKw"),c=n("mJgL"),s=n("W7wX"),u=n("s1V1"),l=n("ohjr"),d=n("8VPm");function f(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,i.a.fetchQuery([e.key],(function(){var t={featureGatesPromise:Object(o.a)(),featureSettingsPromise:Object(c.a)(),userEntitlementsPromise:Object(u.a)(),contextPromise:Object(a.a)(),identityPromise:Object(s.a)()};return Object(l.a)(t,e)}),d.a)];case 1:return[2,t.sent()]}}))}))}},"5DIn":"84Nv":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("QjXU"),a=n("p/uK"),i=n("DU/N"),o=n("sLnE"),c=n("ci7w"),s={display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"},u=Object(a.a)({shelfContainer:{marginTop:"40px"},cardContainer:Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({backgroundColor:i.a.colorNeutralBackground1},o.a.border("1px","none",i.a.colorTransparentStroke)),o.a.borderRadius(i.a.borderRadiusXLarge)),{boxShadow:i.a.shadow4,cursor:"pointer"}),o.a.margin("".concat(c.a.shadowMarginPixels,"px"),"".concat(c.a.shadowMarginPixels,"px"),0,"".concat(c.a.shadowMarginPixels,"px"))),o.a.outline("1px","solid","transparent")),{outlineOffset:"-1px"}),o.a.overflow("hidden")),{"&:hover":{backgroundColor:i.a.colorNeutralBackground1Hover,boxShadow:i.a.shadow8},"&:active":{backgroundColor:i.a.colorNeutralBackground5Pressed},":focus-visible":{outlineColor:i.a.colorStrokeFocus2,outlineStyle:"solid",outlineWidth:"2px",outlineOffset:"-2px"}}),cardContainerDisabled:{backgroundColor:i.a.colorNeutralBackgroundDisabled,boxShadow:i.a.shadow2,cursor:"not-allowed","&:hover":{backgroundColor:i.a.colorNeutralBackgroundDisabled,boxShadow:i.a.shadow2},"&:active":{backgroundColor:i.a.colorNeutralBackgroundDisabled}},headerContainer:Object(r.__assign)(Object(r.__assign)({boxSizing:"border-box"},o.a.padding("20px","40px","0px","24px")),{height:"112px"}),title:Object(r.__assign)(Object(r.__assign)({fontSize:i.a.fontSizeBase400,fontWeight:700,color:i.a.colorNeutralForeground1,lineHeight:i.a.lineHeightBase400},o.a.overflow("hidden")),s),description:Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({fontSize:i.a.fontSizeBase200,lineHeight:i.a.lineHeightBase200,color:i.a.colorNeutralForeground3},o.a.padding("4px","0px","0px","0px")),o.a.overflow("hidden")),s),imageContainer:{display:"flex",height:"148px",width:"100%"},image:{height:"100%",objectFit:"cover",width:"100%"}})},AcOL:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("5DIn"),a={Tab:r.a.Tab,Enter:r.a.Enter,Shift:r.a.Shift,Esc:r.a.Escape,Escape:r.a.Escape,Space:r.a.Space," ":r.a.Space,Left:r.a.ArrowLeft,ArrowLeft:r.a.ArrowLeft,Up:r.a.ArrowUp,ArrowUp:r.a.ArrowUp,Right:r.a.ArrowRight,ArrowRight:r.a.ArrowRight,Down:r.a.ArrowDown,ArrowDown:r.a.ArrowDown,Zero:r.a.Zero,Nine:r.a.Nine,a:r.a.A,z:r.a.Z,A:r.a.A,Z:r.a.Z,ContextMenu:r.a.ContextMenu,"/":r.a.Slash,F10:r.a.F10,Home:r.a.Home,End:r.a.End,Delete:r.a.Delete,Backspace:r.a.Backspace};,CDuu:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("MJsD"),a=n("B5kz"),i=n("gCKw"),o=n("mJgL"),c=n("W7wX"),s=n("s1V1"),u=n("ohjr"),l=n("8VPm");function d(e){var t=[e.key];return Object(a.c)(t,(function(){var t={featureGatesPromise:Object(i.a)(),featureSettingsPromise:Object(o.a)(),userEntitlementsPromise:Object(s.a)(),contextPromise:Object(r.a)(),identityPromise:Object(c.a)()};return Object(u.a)(t,e)}),l.a)}},"Coo+":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("NrNW"),a=n("B5kz"),i=n("CaQ9"),o=n("+vVg"),c=n("bIL4");function s(){var e=Object(r.a)().data,t=Object(i.a)().data;return Object(a.c)(c.b,(,{staleTime:1/0,cacheTime:1/0,enabled:e&&t})}},"DCX/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("QjXU"),a=n("28zg"),i=n("ddw+");function o(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,Object(a.a)(i.a)]}))}))}},KSsg:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("lOFt"),a=n("V9hE"),i=n("iPRk"),o=n("HQCr"),c=n("Dn7E"),s=n("CMIS"),u=n("GMuP"),l={AppBar:"AppBar",AppList:"AppGallery",AppsNotificationDialog:"AppsNotificationDialog",Edgeworth:"Edgeworth",Recommended:"Recommended",QuickAccess:"QuickAccess",MyContent:"MyContent",MyContentOdspView:"MyContent",MyContentPeopleView:"MyContent",MyContentPeopleViewDetailed:"MyContent",TuiCallout:"TeachingUi",GettingToKnowYou:"GettingToKnowYou"};function d(e){if(!e)return"Other";var t=l[e];return null!=t?t:"Other"}var f=n("KbiU"),v=n("rTyw"),h=function(e){var t,n=e.launchInstrumentationParams,l=e.success,h=e.platform,b=e.uiHost;if(n){var g=n.area,p=n.dataSecurityLevel,m=n.eventName,O=n.elementId,w=n.renderTimingInstrumentationParams,j=n.referral,_=n.isScdType,S=n.pageName,y=n.clickParams;if(!n.isLogged){if(n.isLogged=!0,y||(y={}),y.ClickDestination=b?"ContentPage":"ExternalPage",Object(r.a)(m,O,g,l?j:"",h,y,[],p),l)Object(o.a)(O,g,j,void 0,void 0,m,_,S),Object(c.a)({featureName:d(g),eventName:m,params:Object(f.a)(y),area:g});else{var k=j?Object(v.a)(j):"Other",C="Error: \nelementId: ".concat(O,"\n referral: ").concat(k,"}"),x=((t={}).DebugInfo=C,t);Object(s.a)({eventName:m,debugInfo:C}),Object(u.a)({eventName:m,params:x,area:g}),Object(a.a)(m,x,[],p)}if(w){var L=w.clickMarker,P=w.paintMarker;Object(i.a)(L,P)}}}}},KbiU:function(e,t,n){"use strict";function r(e){var t,n={};if(!e)return n;for(var r in e){var a=e[r],i="";if("object"==typeof a){if("value"in a&&(i=a.value),"defaultValue"in a){var o=a.defaultValue;i="object"==typeof o?o.value:o}}else i=null!==(t=a)&&void 0!==t?t:"";n[r]=i}return n}n.d(t,"a",(function(){return r}))},LzJX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("mXGw");function a(e,t,n){var a=this,i=Object(r.useRef)(null),o=Object(r.useRef)(0),c=Object(r.useRef)(null),s=Object(r.useRef)([]),u=Object(r.useRef)(),l=Object(r.useRef)(),d=Object(r.useRef)(e),f=Object(r.useRef)(!0);d.current=e;var v=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var h=!!(n=n||{}).leading,b=!("trailing"in n)||!!n.trailing,g="maxWait"in n,p=g?Math.max(+n.maxWait||0,t):null;return Object(r.useEffect)((,[]),Object(r.useMemo)((function(){var e=n=r=m=O=function(){var e=Date.now();if(r(e))return m(e);if(f.current){var a=t-(e-i.current),c=g?Math.min(a,p-(e-o.current)):a;n(O,c)}},w=return w.cancel=w.isPending=w.flush=w}),[h,g,t,p,b,v])}},MiUb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,a=n("QjXU"),i=n("uV9m"),o=n("CMIS"),c=!1;function s(){return Object(a.__awaiter)(this,void 0,void 0,(function(){return Object(a.__generator)(this,(function(e){return[2,new Promise((function(e,t){var n=function(){return function(){c||function(){if(window.shellRenderedPromise)r=window.shellRenderedPromise,window,window;else{var e="ShellRendered promise does not exist, unable to get shell status";Object(i.f)()?Object(o.a)({eventName:"Shell_Shim_Load",errorType:"Shell_Bootstrap_Error",message:e}):window.standaloneOteLogger.logBootError("Shell_Bootstrap_Error",e)}c=!0}()}(),r}();if(void 0!==n)n.then(().catch(();else{var a="ShellRendered promise does not exist, unable to get shell status";Object(o.a)({eventName:"Shell_Shim_Load",errorType:"Shell_Bootstrap_Error",message:a}),t(new Error(a))}}))]}))}))}},NkqM:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("QjXU"),a=["^.*[\0- ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:.*","^.*[\0- ]*d[\r\n\t]*a[\r\n\t]*t[\r\n\t]*a[\r\n\t]*:.*"];function i(e){var t,n;if(e)try{for(var i=Object(r.__values)(a),o=i.next();!o.done;o=i.next()){var c=new RegExp(o.value);if(e.match(c))return e.replace(c,"")}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return e}},Ohvh:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6ib3"),a={none:r.a.None,excel:r.a.Excel,onenote:r.a.OneNote,pdf:r.a.Pdf,powerpoint:r.a.PowerPoint,audio:r.a.Audio,video:r.a.Video,visio:r.a.Visio,word:r.a.Word,photos:r.a.Photos,text:r.a.Text,outlook:r.a.Outlook,sway:r.a.Sway,forms:r.a.Forms,formsquiz:r.a.FormsQuiz,project:r.a.Project,projectoperations:r.a.ProjectOperations,portfolio:r.a.Portfolio,news:r.a.NewsArticle,newsarticle:r.a.NewsArticle,onedrive:r.a.OneDrive,sharepoint:r.a.SharePoint,bohemia:r.a.Fluid,fluid:r.a.Fluid,powerbi:r.a.PowerBI,streamsvideo:r.a.StreamsVideo,yammer:r.a.Yammer,mindmeister:r.a.MindMeister,stream:r.a.Stream,monday:r.a.Monday,trello:r.a.Trello,platform:r.a.Platform,image:r.a.Image,media:r.a.Media,whiteboard:r.a.Whiteboard,meetingnotes:r.a.MeetingNotes,screenrecording:r.a.ScreenRecording,designer:r.a.Designer,list:r.a.List,clipchamp:r.a.Clipchamp};,OoM2:PZ4A:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var r,a,i=n("6ib3");function o(){return(r={})[i.a[i.a.Excel]]=["xls","xlsx","xlb","xlc","xlsb","xlsm","xlt","xltx","xltm","xlm","xla","xll","xlam","xlw","excel","csv"],r[i.a[i.a.Visio]]=["vsd","vss","vst","vdx","vsx","vtx","vsl","vsu","vsw","vsdx","vsdm","vssm","vstx","vstm"],r[i.a[i.a.PowerPoint]]=["ppt","pptx","pot","potx","potm","ppam","ppsx","ppsm","sldx","sldm","ppa","pps","pptm","powerpoint"],r[i.a[i.a.Word]]=["doc","dot","docx","docm","dotx","dotm","docb","word"],r[i.a[i.a.Photos]]=["jpg","png","jpeg","gif","svg","bmp","tif","tiff","heic"],r[i.a[i.a.Outlook]]=["msg","eml"],r[i.a[i.a.OneNote]]=["one"],r[i.a[i.a.Pdf]]=["pdf"],r[i.a[i.a.Audio]]=["mp3","m4a","wav","wma"],r[i.a[i.a.Text]]=["txt"],r[i.a[i.a.Fluid]]=["fluid","loop"],r[i.a[i.a.Stream]]=["mts","m2ts","ts","3g2","3gp","3gp2","3gpp","asf","wmv","avi","m4v","mov","mp4","mp4v","ogg","webm","movie","mkv","mpg","mpeg"],r[i.a[i.a.Whiteboard]]=["whiteboard"],r[i.a[i.a.MeetingNotes]]=["note"],r[i.a[i.a.Clipchamp]]=["clipchamp"],r[i.a[i.a.Link]]=["url"],r[i.a[i.a.Draft]]=["draft"],r[i.a[i.a.Planner]]=["plan"],r}function c(e){return a||(a=function(){r||(r=o()),a={};var e=function(e){if(!r.hasOwnProperty(e))return"continue";var t=r[e];if(!t)return"continue";t.forEach(()};for(var t in r)e(t);return a}()),e&&a[e.toLowerCase()]||i.a.None}function s(e){return r||(r=o()),r[e]}},QHw4:SL81:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("PZ4A"),a=n("QHw4");function i(e){return e.startsWith("/")&&(e=e.slice(1)),e.endsWith("/")&&(e=e.slice(0,-1)),e.toLowerCase()}function o(e){if(e){var t=Object(r.b)(e);return"None"!==t?t:e}}function c(e,t){if(e){if(void 0!==e.route)return e;if("string"==typeof e)try{var n=new URL(e),r=n.pathname.toLowerCase().split("/").filter((function(e,t){return!!e&&(t>1||"embed"!==e)})),c=function(e,t){var n,r=t.pwaEnabled?"Pwa":"OfficeHome";if(void 0===e)return r;var c=i(a.a.TemplatePageRootPath),s=i(a.a.StartPageRootPath),u=i(a.a.WacHostPagePath);return((n={home:r,apps:"AppGallery",pwa:"Pwa",create:"Create",mycontent:"MyContent",m365apps:function(e,t){var n,r,a,i,o=null!==(n=e[1])&&void 0!==n?n:void 0,c=null!==(r=null==t?void 0:t.get("subPageId"))&&void 0!==r?r:void 0;return{route:"M365Apps",app:o,appId:o,entityId:null!==(a=e[2])&&void 0!==a?a:void 0,subPageId:null!==(i=e[3])&&void 0!==i?i:c}},search:function(e,t){switch(e[1]){case"siteall":case"sitenews":case"sitesites":case"sitefiles":case"siteimages":return{route:"SearchSiteScoped"};case"content":case"contact":case"organization":case"calendar":case"office":return{route:"SearchPersonScoped"};case"files":return{route:"SearchFilesScoped"};case"people":return{route:"SearchPeopleScoped"};case"sites":return{route:"SearchSitesScoped"};default:return{route:"Search"}}}})[s]=function(e,t){var n="Start";switch(e[2]){case"myforms":n="MyForms";break;case"groupforms":n="GroupForms";break;case u:n="Content";break;default:n="Start"}var r=o(e[1]);return r?{route:n,app:r}:{route:n}},n[c]=function(e,t){var n="Templates",r=o(e[1]);return r?{route:n,app:r}:{route:n}},n)[e]}(r[0],t);if(c)switch(typeof c){case"string":return{route:c};case"function":return c(r,n.searchParams);default:return}}catch(e){}}}},ci7w:gCKw:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("QjXU"),a=n("MJsD"),i=n("B5kz"),o=n("W7wX"),c=n("XcEc");function s(){var e=this;return i.a.fetchQuery(["FeatureGates"],(function(){return Object(r.__awaiter)(e,void 0,void 0,(function(){var e,t,n;return Object(r.__generator)(this,(function(i){switch(i.label){case 0:return[4,Promise.all([Object(a.a)(),Object(o.a)()])];case 1:return e=r.__read.apply(void 0,[i.sent(),2]),t=e[0],n=e[1],[2,Object(c.a)(n,t)]}}))}))}),{staleTime:1/0,cacheTime:1/0})}},gd1C:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,a=n("QjXU"),i=n("MJsD"),o=n("yQST"),c=n("gCKw"),s=n("mJgL"),u=n("/Oio"),l=n("dSKW"),d=n("NkqM"),f=n("KSsg"),v=function(e){var t,n=e.left,r=e.top,a=e.width,i=e.height;return n&&r&&(t="left=".concat(n,",top=").concat(r)),a&&i&&(t=(t?"".concat(t,","):"")+"width=".concat(a,",height=").concat(i)),t},h=function(e,t,n,r){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var o,c,s,u,h,b,g,p;return Object(a.__generator)(this,(function(m){switch(m.label){case 0:return o=!1,s="defaultLaunchUrl",e?e)?[4,Object(i.a)()]:[3,3]:[2,{message:s,result:c,success:o}];case 1:return u=m.sent().router,n&&(n.pageName=Object(l.a)(u.getCurrentPageForLogging())),[4,u.navigateTo(e,!1,r)];case 2:return o=m.sent(),c="Inline",s+=".navigateTo:".concat(o),[3,4];case 3:h=Object(a.__read)(function(e,t){if(void 0===t&&(t="_blank"),!e)return[void 0,t,window];var n=e.linkTarget,r=e.targetTab;return[v(e),null!=n?n:t,null!=r?r:window]}(t),3),b=h[0],g=h[1],p=h[2].open(Object(d.a)(e),g,b),s+=".open:".concat(o=!!p),c=function(e,t){return null===e?"OpenNull":void 0===e?"OpenUndefined":"_blank"===t?"NewTab":"Inline"}(p,g),m.label=4;case 4:return null!==o&&Object(f.a)({launchInstrumentationParams:n,success:o,platform:"Web"}),[2,{message:s,result:c,success:o}]}}))}))},b={chat:"d870f6cd-4aa5-4d42-9626-ab690c041429",testapp:"07b75f22-72b5-4063-b7fc-0ed5ea8ff3ff",onedrive:"377c982d-9686-450e-9a7c-22aeaf1bc162"},g=function(e,t,n){if(e&&t&&t.length){var r="";if(-1===e.indexOf("/"))r=e;else{var a=e.replace("/pwa","").replace("/embed","").replace("/v2",""),i=a.indexOf("/m365apps")>-1?a.split("/m365apps")[1].split("/"):a.split("/");i.length>=2&&i[1]&&(r=i[1])}if(r){if(t.includes(r))return n?r:b[r];var o=Object.keys(b).find(();if(o&&t.includes(o))return n?o:r}}},p=function(e,t,l,d){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var f,v;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return r?[3,4]:[4,Object(i.a)()];case 1:return a.sent().workload===u.a.Hwa||Object(o.a)()?[4,Promise.all([n.e(3),n.e(476)]).then(n.bind(null,"rYv4")).then(()]:[3,3];case 2:return r=a.sent(),[3,4];case 3:r=h,a.label=4;case 4:return"string"!=typeof e?[3,7]:[4,Object(c.a)()];case 5:return f=a.sent(),[4,Object(s.a)()];case 6:v=a.sent(),e=function(e,t,n){var r,a,i;if((null===(r=null==t?void 0:t.mosAppHostedAtRootGates)||void 0===r?void 0:r.mosAppHostedAtRootEnabled)&&e.indexOf("/m365apps")>-1){var o=null===(i=null===(a=null==n?void 0:n.routing)||void 0===a?void 0:a.mosAppsHostedAtRoot)||void 0===i?void 0:i.split(","),c=g(e,o,!0);if(c){var s=g(e,o,!1);e=e.replace("/m365apps","").replace("/".concat(s),"/".concat(c))}}return e}(e,null==f?void 0:f.result,null==v?void 0:v.result),a.label=7;case 7:return[2,r(e,t,l,d)]}}))}))}},h9iM:function(e,t,n){"use strict";var r,a,i,o,c;n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),function(e){e.externalUrl="externalUrl",e.inAppNavigationUrl="inAppNavigationUrl",e.flexPaneArticle="flexPaneArticle"}(r||(r={})),a||(a={})),function(e){e.Normal="1x",e.Large="2x"}(i||(i={})),o||(o={})),c||(c={}))},kA1t:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8/lW"),a=n("a3FV"),i=n("4CZh");function o(e,t,n,o){void 0===t&&(t={}),void 0===n&&(n=[]),void 0===o&&(o=r.a.Security),Object(i.b)(e,a.a.GenericImpression,o,t,n,!0)}},lJoY:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("QjXU"),a=n("OoM2"),i=n.n(a),o=n("mXGw"),c=n("NrNW"),s=function(){var e=Object(c.a)().data,t=Object(r.__read)(Object(o.useState)(null==e?void 0:e.router.getCurrentRoute()),2),n=t[0],a=t[1];return Object(o.useEffect)((function(){var t=null==e?void 0:e.router.getRouteObservable(),n=null==t?void 0:t.subscribe((function(e){a(()}));return ),[e]),Object(o.useMemo)((function(){return n}),[n])}},lOFt:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("8/lW"),a=n("a3FV"),i=n("rTyw"),o=n("4CZh");function c(e,t,n,c,s,u,l,d){if(void 0===u&&(u={}),void 0===l&&(l=[]),void 0===d&&(d=r.a.Security),l=l||[],n&&t&&"Unknown"!==t&&l.push("".concat(e,".").concat(n,".").concat(t)),t&&(u.ElementId=t),c){var f=Object(i.a)(c);u.Referral=f,l.push("Referral.".concat(f)),u.ReferralPlatform=s?{defaultValue:s,securityThreshold:r.a.Enhanced,fallbackValue:"Web"}:"Web"}n&&(u.Area=n),Object(o.b)(e,a.a.GenericClick,d,u,l,!0)}},mJgL:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("QjXU"),a=n("MJsD"),i=n("B5kz"),o=n("W7wX"),c=n("yNE0");function s(){var e=this;return i.a.fetchQuery(["FeatureSettings"],(function(){return Object(r.__awaiter)(e,void 0,void 0,(function(){var e,t,n;return Object(r.__generator)(this,(function(i){switch(i.label){case 0:return[4,Promise.all([Object(a.a)(),Object(o.a)()])];case 1:return e=r.__read.apply(void 0,[i.sent(),2]),t=e[0],n=e[1],[2,Object(c.a)(n,t)]}}))}))}),{staleTime:1/0,cacheTime:1/0})}},qyk8:function(e,t,n){"use strict";function r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)return e;for(var r=e,a=function(e){var n=new RegExp("\\{"+e+"\\}","gi");r=r.replace(n,()},i=0;i<t.length;i++)a(i);return r}n.d(t,"a",(function(){return r}))},rbGx:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n("mXGw"),a=Object(r.createContext)({dialogState:void 0,convertedToPaid:void 0}),i=Object(r.createContext)({setDialogState:function(e){},setConvertedToPaid:)},yEz2:function(e,t,n){"use strict";function r(e){return(Date.now()-e)/864e5}n.d(t,"a",()},yNE0:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("QjXU"),a=n("mgFK"),i=n("CRHC"),o=n("m32Q"),c=n("lkvL"),s=n("a3FV"),u=n("0TX8"),l=n("Wa5Y");function d(e,t,n,a,i,o,c){return Object(r.__awaiter)(this,void 0,void 0,(function(){var d,f,v;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:d={},f={method:"GET",responseType:"json",url:"".concat(a,"/api/featureSettings")},r.label=1;case 1:return r.trys.push([1,4,,5]),[4,Object(u.a)(f,n,i,t)];case 2:return r.sent(),[4,Object(l.a)(s.a.FeatureSettingsRequest,"FeatureSettings",f.url,f,c,o,a,e,"OfficeHome",{})];case 3:return(v=r.sent().data)?[2,v]:[3,5];case 4:return r.sent(),[3,5];case 5:return[2,d]}}))}))}var f="featureSettings";function v(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(a.a)(f,e)];case 1:return[2,t.sent()]}}))}))}function h(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){return[2,Object(i.a)((function(){return function(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,v(t)];case 1:return void 0!==(n=r.sent())?[3,3]:[4,d(t.correlationId,(,t.inMockMode,t.officeHomeApiRoot,t.workload,t.getAccessToken,t.jwtAuthEnabled)];case 2:n=r.sent(),r.label=3;case 3:return[2,n]}}))}))}(e,t)}),(function(){return Object(o.a)({userId:e.puid,collectionName:f,collectionVersion:1,key:f})}),(function(t){return Object(c.a)({userId:e.puid,collectionName:f,collectionVersion:1,key:f,data:0===Object.keys(t).length?null:t})}))]}))}))}},zvGb:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return c}));const r="undefined"!=typeof WeakRef;class a{eref(){var e,t,n;let r;return this._weakRef?(r=null===(e=this._weakRef)||void 0===e?void 0:e.deref(),r||delete this._weakRef):(r=this._instance,(null===(n=null===(t=r)||void 0===t?void 0:t.isDisposed)||void 0===n?void 0:n.call(t))&&delete this._instance),r}}const i="keyborg:focusin";let o=!1;et s=0;class u{Val(e){if(this._isNavigatingWithKeyboard!==e){this._isNavigatingWithKeyboard=e;for(const t of Object.keys(this.__keyborgCoreRefs)){const n=this.__keyborgCoreRefs[t].deref();n?n.update(e):this.remove(t)}}}const l=new u;class d{constructor(e,t){this._isMouseUsed=!1,this._onFocusIn=e=>{if(this._isMouseUsed)return void(this._isMouseUsed=!1);if(l.getVal())return;const t=e.details;t.relatedTarget&&(t.isFocusedProgrammatically||void 0===t.isFocusedProgrammatically||l.setVal(!0))},this._onMouseDown=e=>{0===e.buttons||0===e.clientX&&0===e.clientY&&0===e.screenX&&0===e.screenY||(this._isMouseUsed=!0,l.setVal(!1))},this._onKeyDown=e=>{var t;const n=l.getVal(),r=e.keyCode,a=this._triggerKeys;n||a&&!a.has(r)?n&&(null===(t=this._dismissKeys)||void 0===t?void 0:t.has(r))&&this._scheduleDismiss():l.setVal(!0)},this.id="c"+ ++s,this._win=e;const n=e.document;if(t){const e=t.triggerKeys,n=t.dismissKeys;(null==e?void 0:e.length)&&(this._triggerKeys=new Set(e)),(null==n?void 0:n.length)&&(this._dismissKeys=new Set(n))}n.addEventListener(i,this._onFocusIn,!0),n.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("keydown",this._onKeyDown,!0),function(e){const t=e;o||(o=function(e){const t=e.HTMLElement,n=t.prototype.focus;let r=!1;return t.prototype.focus=e.document.createElement("button").focus(),t.prototype.focus=n,r}(t));const n=t.HTMLElement.prototype.focus;if(n.__keyborgNativeFocus)return;t.HTMLElement.prototype.focus=c;const r=t.__keyborgData={focusInHandler:;.document.addEventListener("focusin",t.__keyborgData.focusInHandler,!0),c.__keyborgNativeFocus=n}(e),l.add(this)}disposess f{constructor(e,t){this._cb=[],this._id="k"+ ++s,this._win=e;const n=e.__keyborg;n?(this._core=n.core,n.refs[this._id]=this):(this._core=new d(e,t),e.__keyborg={core:this._core,refs:{[this._id]:this}})} sourceMappingURL=vendors~learning-shelf-rc.7d85f2743d1b135dfd0c.chunk.v7.js.map