(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[7946],{84572:84596:(e,t,r)=>{"use strict";r.d(t,{$V:()=>s,CB:()=>c,JZ:()=>l,PY:()=>d,dS:()=>h,jj:()=>p,ly:()=>o});var a=r(55752),i=r.n(a),n=r(35613),o=(e,t)=>i()(e,["raichoAdState","requestStatusMap",...(0,n.E)(t)]),s=(e,t)=>{var{blogId:r,adKey:a}=t;return i()(e,["adState","adIdsMap",r,a])},p=c=e=>i()(e,["adState","attribute","hasBillboardPanel"],!1),d=e=>i()(e,["adState","attribute","canBillboardPanelRequest"],!1),l=e=>i()(e,["adState","pageTransitionCount"],0),h=e=>i()(e,["adState","fullPageAdType"],"")},66229:(e,t,r)=>{"use strict";r.d(t,{Mz:gq:()=>b});var a=r(41185),i=r(66062),n=r(18274),o=r(20076),s=r(55752),p=r.n(s),c=r(80602),d=r(68858);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=(e,t)=>({type:c.vg,payload:{blogId:e,data:t}}),g=(e,t,r)=>({type:c.gU,payload:{blogId:e,adsTypes:t,error:r},error:!0}),m=(e,t)=>!!t&&!e.some((),y=(0,n.H)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{ignoreAdNG:!1};return function(){var a=(0,i.Z)((function*(a,i,n){var{fetchr:s}=n,c=m(t,r.ignoreAdNG),d=i(),l=((d.adState||{}).adIdsMap||{})[e]||null,y=l?[]:t;if(0===y.length&&0===(y=t.filter((e=>-1===Object.keys(l).indexOf(e)))).length)return null;try{var b=p()(d,["bloggerState","blogMap",e,"blog_name"],""),f=y.join(","),I=yield s.read("adIds").params({amebaId:b,blogId:e,options:{ads_types:f,ignore_ad_ng_user:c}}).end(),k=(0,o.ZP)(I.data,(e=>{y.forEach((t=>{e.data=h(h({},e.data),{},{[t]:p()(e,["data",t],{})})}))}));return a(u(e,k))}catch(v){return a(g(e,t,v))}}));return function(e,t,r){return a.apply(this,arguments)}}()})),b=,33811:(e,t,r)=>{"use strict";r.d(t,{uw:()=>L,x0:()=>T});var a=r(41185),i=r(66062),n=r(18274),o=r(55752),s=r.n(o),p=r(5663),c=r.n(p),d=r(74890),l=r.n(d),h=r(62720),u=r(64123),g=r(11622),m=r(18966),y=r(41779);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=[h.Z.REBLOG,h.Z.HASH_TAG,h.Z.IMAGE,h.Z.VIDEO,h.Z.CLIPBLOG,h.Z.VOICE_BLOG,h.Z.PR,h.Z.AUTO_AD],k=v=(e,t,r)=>({type:m.V7,payload:{blogId:e,entryId:t,error:r},error:!0}),T=(0,n.H)((function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3?arguments[3]:void 0;return function(){var n=(0,i.Z)((function*(i,n,o){var{fetchr:p}=o,d=l()(I.concat(r)),h=s()(n(),["bloggerState","blogMap",e,"blog_name"],"");if(!h||!t)return null;var y=s()(n(),["entryState","entryMetaMap",t],null),b=s()(y,"pagingType",void 0),T=a===b,L=s()(n(),["entryState","entryMap",t],null);if(y&&T&&L&&(!c()(L.entry_text)||404===L.status_code))return null;try{i({type:m.Gh,payload:{blogId:e,entryId:t,fieldFilter:d,frm:a}});var P={amebaId:h,blogId:e,entryId:t,fieldFilter:d,frm:a},A=yield p.read(u.Z.BlogEntry).params(P).end(),j=A.data;if(!(!1!==n().deviceState.isEmojiSupported)&&j.entities&&j.entities.entryMap)try{j=f(f({},j),{},{entities:f(f({},j.entities),{},{entryMap:yield(0,g.R9)(j.entities.entryMap)})})}catch(E){console.warn(E),j=A.data}return i(k(e,t,j,a))}catch(O){return i(v(e,t,O))}}));return ()})),L=(0,n.H)(((e,t)=>function(){var r=(0,i.Z)((function*(r,a){var i=s()(a(),["bloggerState","blogMap",e,"blog_name"],"");if(!i||!t)return null;var n=s()(a(),["entryState","entryMap",t],null);if("amember"!==n.publish_flg||n&&(n.entry_text||404===n.statusCode))return null;try{r({type:m.tB,payload:{entryId:t}});var o={token:s()(a(),["amebloTokenState","amebloToken"],null),amebaId:i,entryId:parseInt(t,10)},p=yield(0,y.s)(o);return r(((t,p))}catch(c){return r(((e,t)=>({type:m.Ny,payload:{entryId:e,error:t},error:!0}))(t,c))}}));return ()))},90857:(e,t,r)=>{"use strict";r.d(t,{M:()=>n,h:()=>i});var a=r(55263);function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{type:a.a,payload:{entryId:e,opendModalName:t,data:r}}},76723:(e,t,r)=>{"use strict";r.d(t,{Z:()=>q});var a,i,n,o,s,p,c=r(3e4),d=(r(91938),r(76955)),l=r(55382),h=r.n(l),u=r(29466),g=r.n(u),m=r(5154),y=r.n(m),b=r(52361),f=r.n(b),I=r(93533),k=r.n(I),v=r(45525),T=r(98205),L=r.n(T),P=r(66680),A=r.n(P),j=r(59226),E=r.n(j),O=r(75457),_=r(16884),D=r(36509),S=r(30657),Z=r(87683),w=r(48516),R=r(10793),C=r(39954),M=r(14272),x=r(72792),F=r.n(x),q=(0,v.w1)(F())((n=i=class extends d.Component{static get defaultProps(){return{adEntryBottom:null,adInArticlePanel:null,amebloOneTimeToken:"",bloggerGenreCode:"",bloggerType:"",entryDetailClip:null,entryDetailGenreRanking:null,hashtag:null,cheerFrame:null,mypickModule:null,pickEventLabels:[],reactions:null,reactionsLink:null,readerModule:null,recentImageEntryList:null,recentThemeEntryList:null,shareButton:null,locationSearch:null,injectedAdDfpParam:{},injectedAdsData:null,injectedAdsLoadingStatus:null,isLoggedIn:!1,trackViewLog:y(),onFetchPickEventLabels:null,onInjectedAdDFPNotFound:y()}}houldComponentUpdate(e){return!(this.props.adEntryBottom===e.adEntryBottom&&this.props.adInArticlePanel===e.adInArticlePanel&&this.props.amebaId===e.amebaId&&this.props.amebloOneTimeToken===e.amebloOneTimeToken&&this.props.dateDisplayCode===e.dateDisplayCode&&this.props.entryDetailClip===e.entryDetailClip&&this.props.entryDetailGenreRanking===e.entryDetailGenreRanking&&this.props.entryIndex===e.entryIndex&&this.props.hashtag===e.hashtag&&this.props.imageProtectionType===e.imageProtectionType&&this.props.imageReproduce===e.imageReproduce&&this.props.isLoggedIn===e.isLoggedIn&&this.props.isOfficial===e.isOfficial&&this.props.openModal===e.openModal&&this.props.pageType===e.pageType&&this.props.reactions===e.reactions&&this.props.reactionsLink===e.reactionsLink&&this.props.readerModule===e.readerModule&&this.props.recentImageEntryList===e.recentImageEntryList&&this.props.recentThemeEntryList===e.recentThemeEntryList&&this.props.shareButton===e.shareButton&&this.props.trackTapLog===e.trackTapLog&&this.props.trackStartClip===e.trackStartClip&&this.props.trackRaichoAdInviewRequest===e.trackRaichoAdInviewRequest&&this.props.trackRaichoAdTapRequest===e.trackRaichoAdTapRequest&&this.props.locationSearch===e.locationSearch&&this.props.bloggerGenreCode===e.bloggerGenreCode&&this.props.bloggerType===e.bloggerType&&this.props.injectedAdsLoadingStatus===e.injectedAdsLoadingStatus&&g()(this.props.cheerFrame,e.cheerFrame)&&g()(this.props.entry,e.entry)&&g()(this.props.mypickModule,e.mypickModule)&&g()(this.props.trackViewLog,e.trackViewLog)&&g()(this.props.injectedAdDfpParam,e.injectedAdDfpParam)&&g()(this.props.injectedAdsData,e.injectedAdsData)&&g()(this.props.commerceEntryImageItemList,e.commerceEntryImageItemList))}trackLinkTapLog(e){var{amebaId:t,entry:r,isOfficial:a,pageType:i}=this.props,n={bloggerAmebaId:t,contentId:e,entryId:r.entry_id,pageId:i,sectionId:"entry-hyperlink",serviceId:a?"official":"general"};this.props.trackTapLog(n)}handleClickEntryTextLink(e){var t="".concat(window.process.env.HTTP_PATH_BLOG_AMEBA,"/reader.do"),r=e.currentTarget.href;-1!==r.indexOf(t.replace("https://",""))||this.trackLinkTapLog(r)}renderEntryEmpty(){return(0,c.Z)("span",{className:"error"},void 0,"\u3053\u306e\u8a18\u4e8b\u306f\u524a\u9664\u3055\u308c\u3066\u3044\u308b\u304b\u3001",o||(o=(0,c.Z)("br",{})),"\u307e\u305f\u306f\u672a\u6765\u8a18\u4e8b\u8a2d\u5b9a\uff08\u73fe\u65e5\u6642\u4ee5\u964d\u306e\u516c\u958b\uff09\u3055\u308c\u305f\u8a18\u4e8b\u306e\u305f\u3081\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002",s||(s=(0,c.Z)("br",{})),(0,c.Z)("span",{className:"entryListLink"},void 0,(0,c.Z)(w.Z,{targetUrl:(0,_.Z)(O.Z.EntryList,{amebaId:this.props.amebaId})},void 0,"\u30d6\u30ed\u30b0\u8a18\u4e8b\u4e00\u89a7\u3078")))}renderEntryHead(){var e=this.props.entry.entry_created_datetime||"",t=this.props.entry.is_pickpr||!1;return(0,c.Z)("div",{className:h()(F().TimeBlock,{[F().NoJSTimeBlock]:!t},"entry_head")},void 0,(0,c.Z)("div",{className:F().Time},void 0,(0,c.Z)(C.x,{},void 0,(0,c.Z)("span",{className:"date"},void 0,(0,S.TA)(this.props.dateDisplayCode,e)))),t&&(0,c.Z)(M.E,{wrapperStyle:{marginLeft:"12px"}}))}renderIcon(){return"amember"===this.props.entry.publish_flg?(0,c.Z)(L(),{"aria-label":"\u30a2\u30e1\u30f3\u30d0\u30fc\u8a18\u4e8b",className:F().EntryIcon}):this.props.entry.reblog_flg?(0,c.Z)(A(),{"aria-label":"\u30ea\u30d6\u30ed\u30b0\u8a18\u4e8b",className:F().EntryIcon}):null}renderEntryTitle(){var e=this.props.isOfficial?"official":"general";return(0,c.Z)("h3",{className:"title"},void 0,(0,c.Z)(R.f,{bloggerAmebaId:this.props.amebaId,entryId:this.props.entry.entry_id,orderId:"".concat(this.props.entryIndex+1),pageId:this.props.pageType,sectionId:"article",serviceId:e,tapLogger:this.props.trackTapLog},void 0,(0,c.Z)(w.Z,{targetUrl:(0,D.IT)(this.props.amebaId,this.props.entry)},void 0,this.renderIcon(),this.props.entry.entry_title)))}renderEntryTheme(){return(0,c.Z)("span",{className:h()(F().Theme,"theme")},void 0,(0,c.Z)(C.x,{},void 0,"\u30c6\u30fc\u30de\uff1a",(0,c.Z)(w.Z,{targetUrl:(0,_.Z)(O.Z.Theme,{amebaId:this.props.amebaId,themeId:this.props.entry.theme_id})},void 0,this.props.entry.theme_name,(0,c.Z)(E(),{"aria-hidden":"true",className:h()(F().ThemeIcon)}))))}renderEntry(){var e=this.props.entry.entry_created_datetime||"",t=e&&f()(e,k()(new Date,1)),r="open"===this.props.entry.publish_flg||this.props.pageType===O.Z.AmemberEntry;return(0,c.Z)("div",{className:h()("entry",{new:t},"js-entryWrapper"),"data-unique-ameba-id":this.props.amebaId,"data-unique-entry-id":this.props.entry.entry_id,"data-unique-entry-title":this.props.entry.entry_title},void 0,this.renderEntryHead(),this.renderEntryTitle(),this.renderEntryTheme(),(0,c.Z)("div",{className:"contents"},void 0,this.props.pageType===O.Z.Entry&&(0,c.Z)("div",{className:"js-blogGenreRank blogGenreEntryRankInfo__block"},void 0,this.props.entryDetailGenreRanking),this.props.entryDetailClip,(0,c.Z)("div",{className:"subContents"},void 0,(0,c.Z)(Z.Z,{amebaId:this.props.amebaId,amebloOneTimeToken:this.props.amebloOneTimeToken,bloggerType:this.props.bloggerType,commerceEntryImageItemList:this.props.commerceEntryImageItemList,entry:this.props.entry,entryIndex:this.props.entryIndex,imageProtectionType:this.props.imageProtectionType,imageReproduce:this.props.imageReproduce,injectedAdDfpParam:this.props.injectedAdDfpParam,injectedAdsData:this.props.injectedAdsData,injectedAdsLoadingStatus:this.props.injectedAdsLoadingStatus,isLoggedIn:this.props.isLoggedIn,isOfficial:this.props.isOfficial,locationSearch:this.props.locationSearch,openModal:this.props.openModal,pageType:this.props.pageType,pickEventLabels:this.props.pickEventLabels,trackRaichoAdInviewRequest:this.props.trackRaichoAdInviewRequest,trackRaichoAdTapRequest:this.props.trackRaichoAdTapRequest,trackStartClip:this.props.trackStartClip,trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog,onClickLink:this.handleClickEntryTextLink,onFetchPickEventLabels:this.props.onFetchPickEventLabels,onInjectedAdDFPNotFound:this.props.onInjectedAdDFPNotFound}),(0,c.Z)(C.x,{},void 0,r&&this.props.mypickModule,this.props.hashtag,this.props.adInArticlePanel,this.props.adEntryBottom,this.props.cheerFrame,this.props.reactions,this.props.reactionsLink,this.props.shareButton,this.props.readerModule,this.props.recentThemeEntryList,this.props.recentImageEntryList))),p||(p=(0,c.Z)("div",{className:"foot"})))}render(){var{entry:e}=this.props;return e.entry_id?this.renderEntry():this.renderEntryEmpty()}},i.displayName="PcEntryDetailBlockOfficial",a=n))||a},87683:(e,t,r)=>{"use strict";r.d(t,{Z:()=>W});var a,i,n,o=r(3e4),s=r(41185),p=(r(91938),r(76955)),c=r(52377),d=r(29466),l=r.n(d),h=r(5154),u=r.n(h),g=r(45525),m=r(55382),y=r.n(m),b=r(27356),f=r.n(b),I=r(55752),k=r.n(I),v=r(34679),T=r(1324),L=r(97243),P=r(47530),A=r(77383),j=r(22221),E=r(36509),O=r(52791),_=r.n(O),D=r(47255),S=r.n(D),Z=r(40393),w=r(15972),R=r(84572),C=r(24448),M=r(75457),x=r(16884),F=r(91216),q=r(39954),B=r(38160),N=r(4645),H=r(39472),G=r(71500);r W=(0,g.w1)([_(),S()])((n=i=class extends p.Component{static get defaultProps(){return{amebloOneTimeToken:"",bloggerGenreCode:"",bloggerType:Z.vh,trackRaichoAdInviewRequest:u(),trackRaichoAdTapRequest:u(),locationSearch:null,injectedAdDfpParam:{},injectedAdsData:null,injectedAdsLoadingStatus:null,isLoggedIn:!1,pickEventLabels:[],onFetchPickEventLabels:null,onInjectedAdDFPNotFound:u()}}constructor(e){super(e);var t=e.entry||{},r=t.entry_text||"";this.state={adSlots:[],clipPortalTargets:[],html:(0,j.Z)(r),imageEmbedTargets:[],entry:t,imageProtectionType:e.imageProtectionType||""}}tatic getDerivedStateFromProps(e,t){var r=(t.entry||{}).entry_text||"",a=e.entry||{},i=a.entry_text||"";return r!==i||e.imageProtectionType!==t.imageProtectionType?{clipPortalTargets:[],html:(0,j.Z)(i),imageEmbedTargets:[],entry:a,imageProtectionType:e.imageProtectionType,adSlots:[]}:null}shouldComponentUpdate(e,t){return!(this.props.amebaId===e.amebaId&&this.props.amebloOneTimeToken===e.amebloOneTimeToken&&this.props.entry===e.entry&&this.props.openModal===e.openModal&&this.props.trackStartClip===e.trackStartClip&&this.props.trackTapLog===e.trackTapLog&&this.props.trackViewLog===e.trackViewLog&&this.props.bloggerGenreCode===e.bloggerGenreCode&&this.props.bloggerType===e.bloggerType&&this.props.onInjectedAdDFPNotFound===e.onInjectedAdDFPNotFound&&this.props.trackRaichoAdInviewRequest===e.trackRaichoAdInviewRequest&&this.props.trackRaichoAdTapRequest===e.trackRaichoAdTapRequest&&this.props.isLoggedIn===e.isLoggedIn&&this.state.html===t.html&&this.state.adSlots===t.adSlots&&l()(this.state.clipPortalTargets,t.clipPortalTargets)&&l()(this.state.imageEmbedTargets,t.imageEmbedTargets)&&l()(this.props.onClickLink,e.onClickLink)&&l()(this.props.injectedAdsLoadingStatus,e.injectedAdsLoadingStatus)&&l()(this.props.injectedAdDfpParam,e.injectedAdDfpParam)&&l()(this.props.injectedAdsData,e.injectedAdsData)&&l()(this.props.pickEventLabels,e.pickEventLabels)&&l()(this.props.commerceEntryImageItemList,e.commerceEntryImageItemList))}componentDidUpdate(e,t){if(this.state.html!==t.html&&setImmediate((),l()(this.props.pickEventLabels,e.pickEventLabels)||(0,H.DH)(this.entryDetailText,this.props.pickEventLabels),!l()(this.props.commerceEntryImageItemList,e.commerceEntryImageItemList)){var{amebaId:r,entry:a}=this.props,i={bloggerAmebaId:r,entryId:a.entry_id,pageId:this.props.pageType,sectionId:G.ej};(0,A.A_)({amebaId:this.props.amebaId,itemList:this.props.commerceEntryImageItemList,trackTapLog:e=>{this.props.trackTapLog(U(U({},i),{},{contentId:e}))},trackInViewLog:e=>{this.props.trackViewLog(U(U({},i),{},{contentId:e}))}})}}ndleMount(){var{amebaId:e,entry:t,imageProtectionType:r,pageType:a}=this.props;setImmediate((()=>{this.entryDetailText&&((0,A.V0)(this.entryDetailText,{amebaId:e,entryId:t.entry_id,imageProtectionType:r,pageType:a}),(0,A.C9)(this.entryDetailText),(0,v.IO)(this.entryDetailText,this.props.locationSearch),this.props.isOfficial&&"protected"!==this.props.imageReproduce&&this.setState({imageEmbedTargets:(0,A.Fr)(this.entryDetailText,_().ImageEmbedWrapper,_().ImageEmbedWrapper__EntryDesign)}),(0,E.WW)(this.entryDetailText),this.setState({clipPortalTargets:(0,P.O)(this.entryDetailText,e,"".concat(t.entry_id),this.props.trackStartClip)}),this.updateLinkClick(),this.updatePickEventLabelsIfNeeded())}))}updateLinkClick(){this.unlistenLinkClick&&this.unlistenLinkClick();var e=this.entryDetailText.querySelectorAll("a")||[];Array.prototype.forEach.call(e,(e=>{e.addEventListener("click",this.props.onClickLink,!1)})),this.unlistenLinkClick=()=>{Array.prototype.forEach.call(e,(e=>{e.removeEventListener("click",this.props.onClickLink,!1)})),this.unlistenLinkClick=null}}updateInjectedAdsPortalTargets(){var{entryDetailText:e}=this;if(e){var t=Array.from(e.querySelectorAll(w.w6));0!==t.length&&this.setState({adSlots:t})}}updatePickEventLabelsIfNeeded(){var{entryDetailText:e}=this;e&&(0,H.iq)(e)&&this.props.onFetchPickEventLabels&&(this.props.pickEventLabels.length>0?(0,H.DH)(this.entryDetailText,this.props.pickEventLabels):this.props.onFetchPickEventLabels())}renderClipPortal(){var e=this.state.clipPortalTargets.map((e=>e.element?c.createPortal(p.createElement(T.L,e.props),e.element):null));return e.length<1?null:e}renderImageEmbedButtonPortal(){var e=this.state.imageEmbedTargets.map((e=>c.createPortal((0,o.Z)("button",{className:_().ImageEmbedButton,style:{bottom:".5em"},onClick:()=>{this.props.openModal("".concat(this.props.entry.entry_id),L.rl,{imageHeight:parseInt(e.dataset.imageHeight,10),imageId:e.dataset.imageId,imageWidth:parseInt(e.dataset.imageWidth,10)})}},void 0,(0,o.Z)(f(),{"aria-hidden":"true",className:_().ImageEmbedButtonIcon}),(0,o.Z)("span",{className:_().ImageEmbedButtonLabel},void 0,"\u3053\u306e\u753b\u50cf\u3092\u30b7\u30a7\u30a2")),e)));return e.length<1?null:e}renderInjectedAdsPortal(){var{bloggerType:e,amebaId:t,entry:r,pageType:a,injectedAdsLoadingStatus:i,isOfficial:n,injectedAdsData:s,injectedAdDfpParam:p,onInjectedAdDFPNotFound:c,trackTapLog:d,trackViewLog:l,trackRaichoAdInviewRequest:h,trackRaichoAdTapRequest:u}=this.props,g=this.state.adSlots.length>0;return e&&g?this.state.adSlots.map(((e,g)=>{var{orderId:m,slotHeight:y,pickLayoutType:b}=(0,N.Cg)(e,"".concat(g+1)),{data:f,status:I}=(0,N.lW)({adData:s,adRequestStatus:i,entryId:r.entry_id,orderId:m,pickLayoutType:b}),v={status:I,data:f,trackInview:h,trackTap:u};return(0,o.Z)(R.Z,{container:e},g,(0,o.Z)(C.Z,{adInjectionType:"manual",adcross:v,affiliatorId:k()(r,"affiliator_id"),amebaId:t,dfp:(0,N.m5)(p,b),entryId:r.entry_id,isOfficial:n,orderId:m,pageType:a,pickLayoutType:b,slotHeight:y,trackTapLog:d,trackViewLog:l,onDfpNotFound:c}))})):null}render(){var{amebaId:e,entry:t}=this.props;if("amember"===t.publish_flg&&(this.props.pageType===M.Z.BlogTop||this.props.pageType===M.Z.SkinPreview))return(0,o.Z)("div",{className:"amemberEntry"},void 0,(0,o.Z)(F.Z,{linkButtonUrl:(0,x.Z)(M.Z.AmemberEntry,{amebaId:e,entryId:t.entry_id}),shouldUseDefaultColor:!0,status:"inList"}));var r=t.entry_text||"";return"mon_ng"===t.closed_flg?(0,o.Z)("div",{className:"subContentsInner"},void 0,(0,o.Z)("div",{className:"nopermitentry",dangerouslySetInnerHTML:{__html:r}})):"amember"!==this.props.entry.publish_flg||r||!1!==this.props.entry.amemberLoading?(0,o.Z)(p.Fragment,{},void 0,p.createElement("div",{className:y()("subContentsInner",_().Block,{[_().ImageProtected]:"all_deny"===this.props.imageProtectionType}),dangerouslySetInnerHTML:{__html:this.state.html},id:"entryBody",ref:),this.renderInjectedAdsPortal(),this.renderClipPortal(),this.renderImageEmbedButtonPortal()):(0,o.Z)(q.x,{},void 0,(0,o.Z)("div",{className:"amemberEntry"},void 0,(0,o.Z)(F.Z,{linkButtonUrl:this.props.isLoggedIn?"".concat(window.process.env.HTTP_PATH_AMEMBER_APPLY,"/amemberRequest.do?oAid=").concat(this.props.amebaId):"".concat(B.qD,"?bnm=").concat(this.props.amebaId,"&eid=").concat(this.props.entry.entry_id,"&service=amember_entry&token=").concat(this.props.amebloOneTimeToken),shouldUseDefaultColor:!0,status:this.props.isLoggedIn?"notAmember":"notLoggedIn"})))}},i.displayName="PcEntryDetailTextOld",a=n))||a},87946:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var a,i,n,o=r(3e4),s=r(66062),p=(r(91938),r(76955)),c=r(55752),d=r.n(c),l=r(29466),h=r.n(l),u=r(97175),g=r(66948),m=r(51650),y=r(73614),b=r(62986),f=r(33811),I=r(12942),k=r(90857),v=r(5563),T=r(55833),L=r(20721),P=r(76723),A=r(3710),j=r(87816),E=r(68858),O=r(66229),_=r(75457),D=r(16884),S=r(70317),Z=r(4645),w=r(84596),R=r(22247),C=r(92235),M=r(98618),x=r(92836);function F(){return(F=(0,s.Z)((function*(e){var{dispatch:t,getState:r,match:a,location:i}=e,{params:n}=a,o=n.amebaId;yield t((0,y.Rs)(o));var s=r().bloggerState,p=s.bloggerMap,c=s.blogMap,d=p[o]||{},l=d.blog;if(d.statusCode){if(404===d.statusCode)return void t((0,I.Qn)(o));if(200!==d.statusCode)return void t((0,I.$F)(o))}var h=c[d.blog];if(h&&h.blog_id){var u=n.entryId,{query:g}=i,{frm:m}=g;yield Promise.all([t((0,b.sq)(h.blog_id)),t((0,f.x0)(h.blog_id,u,[],m))]);var k=r().entryState.entryMap[u]||{};if(k.statusCode){if(404===k.statusCode)return void t((0,I.fw)(o,u));if(200!==k.statusCode)return void t((0,I.$F)(o))}var v=k.publish_flg||"";"amember"===v&&i.pathname==="/".concat(o,"/entry-").concat(u,".html")?yield t((0,I.qj)((0,D.Z)(_.Z.AmemberEntry,{amebaId:o,entryId:u}))):"open"===v&&i.pathname==="/".concat(o,"/amemberentry-").concat(u,".html")&&(yield t((0,I.qj)((0,D.Z)(_.Z.Entry,{amebaId:o,entryId:u})))),yield Promise.all([t((0,T.Oq)(o,u)),t((0,O.Mz)(l,[E.rY.PcInArticleInjectedAds],{ignoreAdNG:!0}))])}else t((0,I.Qn)(o))}))).apply(this,arguments)}function q(){return(q=(0,s.Z)((function*(e){var{dispatch:t,getState:r,match:a}=e,{params:i}=a,n=i.amebaId,o=i.entryId,s=d()(r(),["bloggerState","bloggerMap",n],{}).blog||"";yield Promise.all([t((0,f.uw)(s,o)),t((0,j.H2)(n,o))])}))).apply(this,arguments)}var B=(0,m.lB)(["match","location"])(a=(0,g.$j)((function(e,t){var{match:r,location:a}=t,{search:i,pathname:n}=a,{params:o,route:s}=r,p=o.amebaId,c=o.entryId,l=e.entryState,h=e.bloggerState,u=e.skinState,g=h.bloggerMap,m=h.blogMap,y=l.entryMap,b=g[p]||{},f=b.attribute||{},I=f.isOfficial,k=f.bloggerType||"general",v=d()(b,["official","upper_text"],""),T=b.profile||{},L=b.seo_setting||{},P=b.blog,A=y[c]||{},j=m[b.blog]||{},O=j.daydisplay_flg||1,_=d()(b,["official","image_protection_type"],""),D=d()(b,["official","image_reproduce"],""),R=(0,M.O)(e,p,c).itemList||[],F=u.pcSkinMap[P]||{},q=s.pageType,B=(0,w.$V)(e,{blogId:P,adKey:E.rY.PcInArticleInjectedAds}),{ads:N,statuses:H}=(0,Z.l1)(e,n),G=(0,Z.TY)({adIds:B,blogger:b,blog:j,skinState:u,isPC:!0,isOfficial:I}),V=F.use_layout||"",U=(0,S.jl)(e);return{amebaId:p,amebloOneTimeToken:d()(e,["amebloTokenState","amebloOneTimeToken"],""),blog:j,blogger:b,bloggerType:k,dateDisplayCode:O,entry:A,imageProtectionType:_,imageReproduce:D,isLoggedIn:U,isOfficial:I,officialUpperText:v,pageType:q,pathname:n,pickEventLabels:(0,C.V)(e),profile:T,seoSetting:L,skin:F,useLayout:V,locationSearch:i,injectedAdDfpParam:G,injectedAdsData:N,injectedAdsLoadingStatus:H,commerceEntryImageItemList:R,structuredMarkupList:(0,x.Z)(e,c)}}),{openModal:k.h,trackTapLog:v.XI,trackRaichoAdInviewRequest:A.xs,trackRaichoAdTapRequest:A.tJ,trackStartClip:v.F_,trackViewLog:v.iG,fetchRaichoAdRequest:A.OX,fetchRaichoInArticleInjectedAd:A.s$})(a=(0,u.provideHooks)({defer:function(e){return F.apply(this,arguments)},done:)((n=i=class extends p.Component{constructor(){super(...arguments),this.handleInjectedAdDFPNotFound=e=>{var{entryId:t,orderId:r,fallbackRaichoModuleKey:a}=e;this.fetchInArticleInjectedAdFromAdcross((0,Z.Fd)(t,r),a)},this.handleFetchPickEventLabels=()=>{this.props.fetchRaichoAdRequest(R.Xy,R.ee,this.props.amebaId,{useAmebaId:!0,useCache:!0,requestParameter:{ms:R.F}})}}static get defaultProps(){return{injectedAdDfpParam:{},injectedAdsData:null,injectedAdsLoadingStatus:null,pickEventLabels:[],structuredMarkupList:[]}}shouldComponentUpdate(e){return!(this.props.amebaId===e.amebaId&&this.props.amebloOneTimeToken===e.amebloOneTimeToken&&this.props.adInArticlePanel===e.adInArticlePanel&&this.props.bloggerType===e.bloggerType&&this.props.dateDisplayCode===e.dateDisplayCode&&this.props.imageProtectionType===e.imageProtectionType&&this.props.imageReproduce===e.imageReproduce&&this.props.isLoggedIn===e.isLoggedIn&&this.props.isOfficial===e.isOfficial&&this.props.officialUpperText===e.officialUpperText&&this.props.openModal===e.openModal&&this.props.pageType===e.pageType&&this.props.fetchRaichoInArticleInjectedAd===e.fetchRaichoInArticleInjectedAd&&this.props.trackRaichoAdInviewRequest===e.trackRaichoAdInviewRequest&&this.props.trackRaichoAdTapRequest===e.trackRaichoAdTapRequest&&this.props.trackStartClip===e.trackStartClip&&this.props.trackTapLog===e.trackTapLog&&this.props.trackViewLog===e.trackViewLog&&this.props.useLayout===e.useLayout&&this.props.locationSearch===e.locationSearch&&this.props.injectedAdsLoadingStatus===e.injectedAdsLoadingStatus&&h()(this.props.injectedAdDfpParam,e.injectedAdDfpParam)&&h()(this.props.injectedAdsData,e.injectedAdsData)&&h()(this.props.blog,e.blog)&&h()(this.props.entry,e.entry)&&h()(this.props.adEntryBottom,e.adEntryBottom)&&h()(this.props.entryDetailGenreRanking,e.entryDetailGenreRanking)&&h()(this.props.entryDetailClip,e.entryDetailClip)&&h()(this.props.hashtag,e.hashtag)&&h()(this.props.mypickModule,e.mypickModule)&&h()(this.props.profile,e.profile)&&h()(this.props.cheerFrame,e.cheerFrame)&&h()(this.props.reactions,e.reactions)&&h()(this.props.reactionsLink,e.reactionsLink)&&h()(this.props.readerModule,e.readerModule)&&h()(this.props.recentImageEntryList,e.recentImageEntryList)&&h()(this.props.recentThemeEntryList,e.recentThemeEntryList)&&h()(this.props.seoSetting,e.seoSetting)&&h()(this.props.shareButton,e.shareButton)&&h()(this.props.skin,e.skin)&&h()(this.props.pickEventLabels,e.pickEventLabels)&&h()(this.props.commerceEntryImageItemList,e.commerceEntryImageItemList)&&h()(this.props.structuredMarkupList,e.structuredMarkupList))}fetchInArticleInjectedAdFromAdcross(e,t){var{amebaId:r,pathname:a}=this.props;this.props.fetchRaichoInArticleInjectedAd(t,r,a,e)}render(){return(0,o.Z)(p.Fragment,{},void 0,(0,o.Z)(L.F,{blog:this.props.blog,entry:this.props.entry,isOfficial:this.props.isOfficial,officialUpperText:this.props.officialUpperText,pageType:this.props.pageType,profile:this.props.profile,seoSetting:this.props.seoSetting,skin:this.props.skin,structuredMarkupList:this.props.structuredMarkupList,useLayout:this.props.useLayout}),(0,o.Z)(P.Z,{adEntryBottom:this.props.adEntryBottom,adInArticlePanel:this.props.adInArticlePanel(0)||null,amebaId:this.props.amebaId,amebloOneTimeToken:this.props.amebloOneTimeToken,bloggerGenreCode:d()(this.props.blogger,["blog_genre","genre_code"],""),bloggerType:this.props.bloggerType,cheerFrame:this.props.cheerFrame,commerceEntryImageItemList:this.props.commerceEntryImageItemList,dateDisplayCode:this.props.dateDisplayCode,entry:this.props.entry,entryDetailClip:this.props.entryDetailClip,entryDetailGenreRanking:this.props.entryDetailGenreRanking,entryIndex:0,hashtag:this.props.hashtag,imageProtectionType:this.props.imageProtectionType,imageReproduce:this.props.imageReproduce,injectedAdDfpParam:this.props.injectedAdDfpParam,injectedAdsData:this.props.injectedAdsData,injectedAdsLoadingStatus:this.props.injectedAdsLoadingStatus,isLoggedIn:this.props.isLoggedIn,isOfficial:this.props.isOfficial,locationSearch:this.props.locationSearch,mypickModule:this.props.mypickModule,openModal:this.props.openModal,pageType:this.props.pageType,pickEventLabels:this.props.pickEventLabels,reactions:this.props.reactions,reactionsLink:this.props.reactionsLink,readerModule:this.props.readerModule,recentImageEntryList:this.props.recentImageEntryList,recentThemeEntryList:this.props.recentThemeEntryList,shareButton:this.props.shareButton,trackRaichoAdInviewRequest:this.props.trackRaichoAdInviewRequest,trackRaichoAdTapRequest:this.props.trackRaichoAdTapRequest,trackStartClip:this.props.trackStartClip,trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog,onFetchPickEventLabels:this.handleFetchPickEventLabels,onInjectedAdDFPNotFound:this.handleInjectedAdDFPNotFound}))}},i.displayName="PcEntryDetailOfficial",a=n))||a)||a)||a},59226:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,i)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var s=o(r(76955));t.default=function(e){return s.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",role:"img"},e),s.createElement("path",{d:"M9.41 21c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L16 12 8.71 4.71a.996.996 0 1 1 1.41-1.41l7.29 7.29c.78.78.78 2.05 0 2.83l-7.29 7.29c-.19.19-.45.29-.71.29Z"}))}},27356:function(e,t,r){"use strict";var a=this&&this.__assign||i=this&&this.__createBinding||(Object.create?,n=this&&this.__setModuleDefault||(Object.create?,o=this&&this.__importStar||Object.defineProperty(t,"__esModule",{value:!0});var s=o(r(76955));t.default=,74890:42266:(e,t,r)=>{var a=r(18300)(();a.push([e.id,"._140OnDmn{align-items:center;display:flex;justify-content:space-between;min-height:26px}#no-js ._1YnxN6FD{display:none}._3H3W5Hyd{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._q4jOoAPq,._3H3W5Hyd{min-height:14px}#no-js ._q4jOoAPq{display:none}._3jJPDegP{vertical-align:text-bottom}._3tPTZ9QK{font-size:1.5em;margin-right:4px;vertical-align:-.25em}",""]),a.locals={TimeBlock:"_140OnDmn",NoJSTimeBlock:"_1YnxN6FD",Time:"_3H3W5Hyd",Theme:"_q4jOoAPq",ThemeIcon:"_3jJPDegP",EntryIcon:"_3tPTZ9QK"},e.exports=a},72792:(e,t,r)=>{var a=r(42266),i=Object.assign||n=Object.defineProperty||"string"==typeof a&&(a=[[e.id,a,""]]),e.exports=function(e){var t=i({},e.locals||{});return n(t,"_",{value:),n(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(a)}}]);