(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[962],{33811:(e,t,r)=>{"use strict";r.d(t,{uw:()=>j,x0:()=>A});var i=r(41185),a=r(66062),o=r(18274),n=r(55752),s=r.n(n),p=r(5663),c=r.n(p),l=r(74890),d=r.n(l),u=r(62720),h=r(64123),g=r(11622),f=r(18966),y=r(41779);r I=[u.Z.REBLOG,u.Z.HASH_TAG,u.Z.IMAGE,u.Z.VIDEO,u.Z.CLIPBLOG,u.Z.VOICE_BLOG,u.Z.PR,u.Z.AUTO_AD],v=k=(e,t,r)=>({type:f.V7,payload:{blogId:e,entryId:t,error:r},error:!0}),A=(0,o.H)((function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3?arguments[3]:void 0;return function(){var o=(0,a.Z)((function*(a,o,n){var{fetchr:p}=n,l=d()(I.concat(r)),u=s()(o(),["bloggerState","blogMap",e,"blog_name"],"");if(!u||!t)return null;var y=s()(o(),["entryState","entryMetaMap",t],null),m=s()(y,"pagingType",void 0),A=i===m,j=s()(o(),["entryState","entryMap",t],null);if(y&&A&&j&&(!c()(j.entry_text)||404===j.status_code))return null;try{a({type:f.Gh,payload:{blogId:e,entryId:t,fieldFilter:l,frm:i}});var O={amebaId:u,blogId:e,entryId:t,fieldFilter:l,frm:i},L=yield p.read(h.Z.BlogEntry).params(O).end(),T=L.data;if(!(!1!==o().deviceState.isEmojiSupported)&&T.entities&&T.entities.entryMap)try{T=b(b({},T),{},{entities:b(b({},T.entities),{},{entryMap:yield(0,g.R9)(T.entities.entryMap)})})}catch(M){console.warn(M),T=L.data}return a(v(e,t,T,i))}catch(_){return a(k(e,t,_))}}));return ()})),j=(0,o.H)(((e,t)=>function(){var r=(0,a.Z)((function*(r,i){var a=s()(i(),["bloggerState","blogMap",e,"blog_name"],"");if(!a||!t)return null;var o=s()(i(),["entryState","entryMap",t],null);if("amember"!==o.publish_flg||o&&(o.entry_text||404===o.statusCode))return null;try{r({type:f.tB,payload:{entryId:t}});var n={token:s()(i(),["amebloTokenState","amebloToken"],null),amebaId:a,entryId:parseInt(t,10)},p=yield(0,y.s)(n);return r(((t,p))}catch(c){return r(((e,t)=>({type:f.Ny,payload:{entryId:e,error:t},error:!0}))(t,c))}}));return ()))},90857:(e,t,r)=>{"use strict";r.d(t,{M:()=>o,h:()=>a});var i=r(55263);function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{type:i.a,payload:{entryId:e,opendModalName:t,data:r}}},3434:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:);var i,a,o,n=r(3e4),s=r(66062),p=(r(91938),r(76955)),c=r(55752),l=r.n(c),d=r(29466),u=r.n(d),h=r(97175),g=r(66948),f=r(73614),y=r(62986),m=r(33811),b=r(12942),I=r(90857),v=r(5563),k=r(55833),A=r(51650),j=r(20721),O=r(76587),L=r(3710),T=r(87816),M=r(68858),_=r(66229),P=r(85969),S=r(928),w=r(16884),C=r(75457),R=r(70317),E=r(4645),D=r(68396),Z=r(84596),F=r(22247),B=r(92235),G=r(98618),q=r(92836);function x(){return(x=(0,s.Z)((function*(e){var{dispatch:t,getState:r,match:i,location:a}=e,{params:o}=i,n=o.amebaId;yield t((0,f.Rs)(n));var s=r().bloggerState,p=s.bloggerMap,c=s.blogMap,l=p[n]||{};if(l.statusCode){if(404===l.statusCode)return void t((0,b.Qn)(n));if(200!==l.statusCode)return void t((0,b.$F)(n))}var d=c[l.blog],u=l.blog;if(d&&d.blog_id){var h=o.entryId,{query:g}=a,{frm:I}=g;yield Promise.all([t((0,y.sq)(d.blog_id)),t((0,m.x0)(d.blog_id,h,[],I))]);var v=r().entryState.entryMap[h]||{};if(v.statusCode){if(404===v.statusCode)return void t((0,b.fw)(n,h));if(200!==v.statusCode)return void t((0,b.$F)(n))}var A=v.publish_flg||"";"amember"===A&&a.pathname==="/".concat(n,"/entry-").concat(h,".html")?yield t((0,b.qj)((0,w.Z)(C.Z.AmemberEntry,{amebaId:n,entryId:h}))):"open"===A&&a.pathname==="/".concat(n,"/amemberentry-").concat(h,".html")&&(yield t((0,b.qj)((0,w.Z)(C.Z.Entry,{amebaId:n,entryId:h})))),yield Promise.all([t((0,k.Oq)(n,h)),t((0,_.Mz)(u,[M.rY.PcInArticleInjectedAds],{ignoreAdNG:!0}))])}else t((0,b.Qn)(n))}))).apply(this,arguments)}function V(){return(V=(0,s.Z)((function*(e){var{dispatch:t,getState:r,match:i}=e,{params:a}=i,o=a.amebaId,n=a.entryId,s=l()(r(),["bloggerState","bloggerMap",o],{}).blog||"";yield Promise.all([t((0,S.cl)("pc")),t((0,m.uw)(s,n)),t((0,T.H2)(o,n))])}))).apply(this,arguments)}var N=(0,A.lB)(["match","location"])(i=(0,g.$j)((function(e,t){var{match:r,location:i}=t,{search:a,pathname:o}=i,{params:n,route:s}=r,p=n.amebaId,c=n.entryId,d=e.entryState,u=e.bloggerState,h=e.skinState,g=u.bloggerMap,f=u.blogMap,y=d.entryMap,m=g[p]||{},b=m.attribute||{},I=b.isOfficial,v=b.bloggerType||"general",k=l()(m,["official","upper_text"],""),A=m.profile||{},j=m.seo_setting||{},O=m.blog,L=y[c]||{},T=f[m.blog]||{},_=T.daydisplay_flg||1,S=l()(m,["official","image_protection_type"],""),w=l()(m,["official","image_reproduce"],""),C=(0,G.O)(e,p,c).itemList||[],F=h.pcSkinMap[O]||{},x=l()(h,["pcSkinMap",O,"use_layout"]),V=(0,P.U)(x),N=s.pageType,U=(0,D.j)(e),H=(0,E.dg)({isOfficial:I,blogId:O,entry:L,noAdMap:(0,Z.jj)(e),remoteConfig:U}),$=(0,Z.$V)(e,{blogId:O,adKey:M.rY.PcInArticleInjectedAds}),{ads:X,statuses:Y}=(0,E.l1)(e,o),K=(0,E.TY)({adIds:$,blogger:m,blog:T,skinState:h,isPC:!0,isOfficial:I}),Q=(0,R.jl)(e);return{amebaId:p,amebloOneTimeToken:l()(e,["amebloTokenState","amebloOneTimeToken"],""),blog:T,blogger:m,bloggerType:v,dateDisplayCode:_,entry:L,imageProtectionType:S,imageReproduce:w,isLoggedIn:Q,isOfficial:I,officialUpperText:k,pageType:N,pathname:o,profile:A,remoteConfig:U,seoSetting:j,skin:F,sidebarCount:V,locationSearch:a,injectedAdDfpParam:K,injectedAdsData:X,injectedAdsLoadingStatus:Y,pickEventLabels:(0,B.V)(e),shouldInjectAutoGeneratedAds:H,commerceEntryImageItemList:C,structuredMarkupList:(0,q.Z)(e,c)}}),{openModal:I.h,trackTapLog:v.XI,trackRaichoAdInviewRequest:L.xs,trackRaichoAdTapRequest:L.tJ,trackStartClip:v.F_,trackViewLog:v.iG,fetchRaichoAdRequest:L.OX,fetchRaichoInArticleInjectedAd:L.s$})(i=(0,h.provideHooks)({defer:function(e){return x.apply(this,arguments)},done:)((o=a=class extends p.Component{constructor(){super(...arguments),this.handleInjectedAdDFPNotFound=e=>{var{entryId:t,orderId:r,fallbackRaichoModuleKey:i}=e;this.fetchInArticleInjectedAdFromAdcross((0,E.Fd)(t,r),i)},this.handleFetchPickEventLabels=()=>{this.props.fetchRaichoAdRequest(F.Xy,F.ee,this.props.amebaId,{useAmebaId:!0,useCache:!0,requestParameter:{ms:F.F}})}}static get defaultProps(){return{injectedAdDfpParam:{},injectedAdsData:null,injectedAdsLoadingStatus:null,shouldInjectAutoGeneratedAds:!1,pickEventLabels:[],remoteConfig:{},sidebarCount:null,structuredMarkupList:[]}}shouldComponentUpdate(e){return!(this.props.amebaId===e.amebaId&&this.props.amebloOneTimeToken===e.amebloOneTimeToken&&this.props.adInArticlePanel===e.adInArticlePanel&&this.props.bloggerType===e.bloggerType&&this.props.dateDisplayCode===e.dateDisplayCode&&this.props.imageProtectionType===e.imageProtectionType&&this.props.imageReproduce===e.imageReproduce&&this.props.isLoggedIn===e.isLoggedIn&&this.props.shouldInjectAutoGeneratedAds===e.shouldInjectAutoGeneratedAds&&this.props.isOfficial===e.isOfficial&&this.props.openModal===e.openModal&&this.props.officialUpperText===e.officialUpperText&&this.props.pageType===e.pageType&&this.props.sidebarCount===e.sidebarCount&&this.props.trackRaichoAdInviewRequest===e.trackRaichoAdInviewRequest&&this.props.trackRaichoAdTapRequest===e.trackRaichoAdTapRequest&&this.props.trackStartClip===e.trackStartClip&&this.props.trackTapLog===e.trackTapLog&&this.props.trackViewLog===e.trackViewLog&&this.props.fetchRaichoInArticleInjectedAd===e.fetchRaichoInArticleInjectedAd&&this.props.locationSearch===e.locationSearch&&this.props.injectedAdsLoadingStatus===e.injectedAdsLoadingStatus&&u()(this.props.injectedAdDfpParam,e.injectedAdDfpParam)&&u()(this.props.injectedAdsData,e.injectedAdsData)&&u()(this.props.blog,e.blog)&&u()(this.props.entry,e.entry)&&u()(this.props.adEntryBottom,e.adEntryBottom)&&u()(this.props.entryDetailGenreRanking,e.entryDetailGenreRanking)&&u()(this.props.entryDetailClip,e.entryDetailClip)&&u()(this.props.hashtag,e.hashtag)&&u()(this.props.mypickModule,e.mypickModule)&&u()(this.props.recentImageEntryList,e.recentImageEntryList)&&u()(this.props.recentThemeEntryList,e.recentThemeEntryList)&&u()(this.props.readerModule,e.readerModule)&&u()(this.props.profile,e.profile)&&u()(this.props.cheerFrame,e.cheerFrame)&&u()(this.props.reactions,e.reactions)&&u()(this.props.reactionsLink,e.reactionsLink)&&u()(this.props.readerModule,e.readerModule)&&u()(this.props.seoSetting,e.seoSetting)&&u()(this.props.shareButton,e.shareButton)&&u()(this.props.skin,e.skin)&&u()(this.props.remoteConfig,e.remoteConfig)&&u()(this.props.pickEventLabels,e.pickEventLabels)&&u()(this.props.commerceEntryImageItemList,e.commerceEntryImageItemList)&&u()(this.props.structuredMarkupList,e.structuredMarkupList))}fetchInArticleInjectedAdFromAdcross(e,t){var{amebaId:r,pathname:i}=this.props;this.props.fetchRaichoInArticleInjectedAd(t,r,i,e)}render(){var{shouldInjectAutoGeneratedAds:e}=this.props;return(0,n.Z)(p.Fragment,{},void 0,(0,n.Z)(j.F,{blog:this.props.blog,entry:this.props.entry,isOfficial:this.props.isOfficial,officialUpperText:this.props.officialUpperText,pageType:this.props.pageType,profile:this.props.profile,seoSetting:this.props.seoSetting,skin:this.props.skin,structuredMarkupList:this.props.structuredMarkupList}),(0,n.Z)(O.Z,{adEntryBottom:this.props.adEntryBottom,adInArticlePanel:this.props.adInArticlePanel(0)||null,amebaId:this.props.amebaId,amebloOneTimeToken:this.props.amebloOneTimeToken,bloggerGenreCode:l()(this.props.blogger,["blog_genre","genre_code"],""),bloggerType:this.props.bloggerType,cheerFrame:this.props.cheerFrame,commerceEntryImageItemList:this.props.commerceEntryImageItemList,dateDisplayCode:this.props.dateDisplayCode,entry:this.props.entry,entryDetailClip:this.props.entryDetailClip,entryDetailGenreRanking:this.props.entryDetailGenreRanking,entryIndex:0,hashtag:this.props.hashtag,imageProtectionType:this.props.imageProtectionType,imageReproduce:this.props.imageReproduce,injectedAdDfpParam:this.props.injectedAdDfpParam,injectedAdsData:this.props.injectedAdsData,injectedAdsLoadingStatus:this.props.injectedAdsLoadingStatus,isLoggedIn:this.props.isLoggedIn,isOfficial:this.props.isOfficial,locationSearch:this.props.locationSearch,mypickModule:this.props.mypickModule,openModal:this.props.openModal,pageType:this.props.pageType,pickEventLabels:this.props.pickEventLabels,reactions:this.props.reactions,reactionsLink:this.props.reactionsLink,readerModule:this.props.readerModule,recentImageEntryList:this.props.recentImageEntryList,recentThemeEntryList:this.props.recentThemeEntryList,remoteConfig:this.props.remoteConfig,shareButton:this.props.shareButton,shouldInjectAutoGeneratedAds:e,sidebarCount:this.props.sidebarCount,trackRaichoAdInviewRequest:this.props.trackRaichoAdInviewRequest,trackRaichoAdTapRequest:this.props.trackRaichoAdTapRequest,trackStartClip:this.props.trackStartClip,trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog,onFetchPickEventLabels:this.handleFetchPickEventLabels,onInjectedAdDFPNotFound:this.handleInjectedAdDFPNotFound}))}},a.displayName="PcEntryDetailNew",i=o))||i)||i)||i},59226:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,a)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(76955));t.default=function(e){return s.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",role:"img"},e),s.createElement("path",{d:"M9.41 21c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L16 12 8.71 4.71a.996.996 0 1 1 1.41-1.41l7.29 7.29c.78.78.78 2.05 0 2.83l-7.29 7.29c-.19.19-.45.29-.71.29Z"}))}},27356:function(e,t,r){"use strict";var i=this&&this.__assign||a=this&&this.__createBinding||(Object.create?,o=this&&this.__setModuleDefault||(Object.create?,n=this&&this.__importStar||Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(76955));t.default=,74890:]);