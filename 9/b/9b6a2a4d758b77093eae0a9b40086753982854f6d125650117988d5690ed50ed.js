(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[6699],{84596:(e,t,r)=>{"use strict";r.d(t,{$V:()=>s,CB:()=>c,JZ:()=>d,PY:()=>l,dS:()=>u,jj:()=>p,ly:()=>n});var a=r(55752),i=r.n(a),o=r(35613),n=(e,t)=>i()(e,["raichoAdState","requestStatusMap",...(0,o.E)(t)]),s=(e,t)=>{var{blogId:r,adKey:a}=t;return i()(e,["adState","adIdsMap",r,a])},p=c=e=>i()(e,["adState","attribute","hasBillboardPanel"],!1),l=e=>i()(e,["adState","attribute","canBillboardPanelRequest"],!1),d=e=>i()(e,["adState","pageTransitionCount"],0),u=e=>i()(e,["adState","fullPageAdType"],"")},66229:(e,t,r)=>{"use strict";r.d(t,{Mz:()=>f,gq:()=>m});var a=r(41185),i=r(66062),o=r(18274),n=r(20076),s=r(55752),p=r.n(s),c=r(80602),l=r(68858);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=(e,t)=>({type:c.vg,payload:{blogId:e,data:t}}),g=(e,t,r)=>({type:c.gU,payload:{blogId:e,adsTypes:t,error:r},error:!0}),y=(e,t)=>!!t&&!e.some((),f=(0,o.H)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{ignoreAdNG:!1};return function(){var a=(0,i.Z)((function*(a,i,o){var{fetchr:s}=o,c=y(t,r.ignoreAdNG),l=i(),d=((l.adState||{}).adIdsMap||{})[e]||null,f=d?[]:t;if(0===f.length&&0===(f=t.filter((e=>-1===Object.keys(d).indexOf(e)))).length)return null;try{var m=p()(l,["bloggerState","blogMap",e,"blog_name"],""),b=f.join(","),v=yield s.read("adIds").params({amebaId:m,blogId:e,options:{ads_types:b,ignore_ad_ng_user:c}}).end(),I=(0,n.ZP)(v.data,(e=>{f.forEach((t=>{e.data=u(u({},e.data),{},{[t]:p()(e,["data",t],{})})}))}));return a(h(e,I))}catch(O){return a(g(e,t,O))}}));return function(e,t,r){return a.apply(this,arguments)}}()})),m=,33811:(e,t,r)=>{"use strict";r.d(t,{uw:()=>j,x0:()=>k});var a=r(41185),i=r(66062),o=r(18274),n=r(55752),s=r.n(n),p=r(5663),c=r.n(p),l=r(74890),d=r.n(l),u=r(62720),h=r(64123),g=r(11622),y=r(18966),f=r(41779);r v=[u.Z.REBLOG,u.Z.HASH_TAG,u.Z.IMAGE,u.Z.VIDEO,u.Z.CLIPBLOG,u.Z.VOICE_BLOG,u.Z.PR,u.Z.AUTO_AD],I=O=(e,t,r)=>({type:y.V7,payload:{blogId:e,entryId:t,error:r},error:!0}),k=(0,o.H)((function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3?arguments[3]:void 0;return function(){var o=(0,i.Z)((function*(i,o,n){var{fetchr:p}=n,l=d()(v.concat(r)),u=s()(o(),["bloggerState","blogMap",e,"blog_name"],"");if(!u||!t)return null;var f=s()(o(),["entryState","entryMetaMap",t],null),m=s()(f,"pagingType",void 0),k=a===m,j=s()(o(),["entryState","entryMap",t],null);if(f&&k&&j&&(!c()(j.entry_text)||404===j.status_code))return null;try{i({type:y.Gh,payload:{blogId:e,entryId:t,fieldFilter:l,frm:a}});var A={amebaId:u,blogId:e,entryId:t,fieldFilter:l,frm:a},L=yield p.read(h.Z.BlogEntry).params(A).end(),P=L.data;if(!(!1!==o().deviceState.isEmojiSupported)&&P.entities&&P.entities.entryMap)try{P=b(b({},P),{},{entities:b(b({},P.entities),{},{entryMap:yield(0,g.R9)(P.entities.entryMap)})})}catch(T){console.warn(T),P=L.data}return i(I(e,t,P,a))}catch(S){return i(O(e,t,S))}}));return ()})),j=(0,o.H)(((e,t)=>function(){var r=(0,i.Z)((function*(r,a){var i=s()(a(),["bloggerState","blogMap",e,"blog_name"],"");if(!i||!t)return null;var o=s()(a(),["entryState","entryMap",t],null);if("amember"!==o.publish_flg||o&&(o.entry_text||404===o.statusCode))return null;try{r({type:y.tB,payload:{entryId:t}});var n={token:s()(a(),["amebloTokenState","amebloToken"],null),amebaId:i,entryId:parseInt(t,10)},p=yield(0,f.s)(n);return r(((t,p))}catch(c){return r(((e,t)=>({type:y.Ny,payload:{entryId:e,error:t},error:!0}))(t,c))}}));return ()))},90857:(e,t,r)=>{"use strict";r.d(t,{M:()=>o,h:()=>i});var a=r(55263);function i(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{type:a.a,payload:{entryId:e,opendModalName:t,data:r}}},35974:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:);var a,i,o,n=r(3e4),s=r(66062),p=(r(91938),r(76955)),c=r(55752),l=r.n(c),d=r(29466),u=r.n(d),h=r(97175),g=r(66948),y=r(51650),f=r(73614),m=r(62986),b=r(33811),v=r(3710),I=r(12942),O=r(90857),k=r(87816),j=r(5563),A=r(55833),L=r(20721),P=r(46334),T=r(68858),S=r(66229),_=r(16884),M=r(75457),w=r(70317),E=r(4645),D=r(84596),R=r(22247),C=r(92235),Z=r(98618),F=r(92836);function B(){return(B=(0,s.Z)((function*(e){var{dispatch:t,getState:r,match:a,location:i}=e,{params:o}=a,n=o.amebaId;yield t((0,f.Rs)(n));var s=r().bloggerState,p=s.bloggerMap,c=s.blogMap,l=p[n]||{},d=l.blog;if(l.statusCode){if(404===l.statusCode)return void t((0,I.Qn)(n));if(200!==l.statusCode)return void t((0,I.$F)(n))}var u=c[l.blog];if(u&&u.blog_id){var h=o.entryId,{query:g}=i,{frm:y}=g;yield Promise.all([t((0,m.sq)(u.blog_id)),t((0,b.x0)(u.blog_id,h,[],y))]);var v=r().entryState.entryMap[h]||{};if(v.statusCode){if(404===v.statusCode)return void t((0,I.fw)(n,h));if(200!==v.statusCode)return void t((0,I.$F)(n))}var O=v.publish_flg||"";"amember"===O&&i.pathname==="/".concat(n,"/entry-").concat(h,".html")?yield t((0,I.qj)((0,_.Z)(M.Z.AmemberEntry,{amebaId:n,entryId:h}))):"open"===O&&i.pathname==="/".concat(n,"/amemberentry-").concat(h,".html")&&(yield t((0,I.qj)((0,_.Z)(M.Z.Entry,{amebaId:n,entryId:h})))),yield Promise.all([t((0,A.Oq)(n,h)),t((0,S.Mz)(d,[T.rY.PcInArticleInjectedAds],{ignoreAdNG:!0}))])}else t((0,I.Qn)(n))}))).apply(this,arguments)}function q(){return(q=(0,s.Z)((function*(e){var{dispatch:t,getState:r,match:a}=e,{params:i}=a,o=i.amebaId,n=i.entryId,s=l()(r(),["bloggerState","bloggerMap",o],{}).blog||"";yield Promise.all([t((0,b.uw)(s,n)),t((0,k.H2)(o,n))])}))).apply(this,arguments)}var x=(0,y.lB)(["match","location"])(a=(0,g.$j)((function(e,t){var{match:r,location:a}=t,{search:i,pathname:o}=a,{params:n,route:s}=r,p=n.amebaId,c=n.entryId,d=e.entryState,u=e.bloggerState,h=e.skinState,g=u.bloggerMap,y=u.blogMap,f=d.entryMap,m=g[p]||{},b=m.attribute||{},v=b.isOfficial,I=b.bloggerType||"general",O=l()(m,["official","upper_text"],""),k=m.profile||{},j=m.seo_setting||{},A=m.blog,L=f[c]||{},P=y[m.blog]||{},S=P.daydisplay_flg||1,_=l()(m,["official","image_protection_type"],""),M=l()(m,["official","image_reproduce"],""),R=(0,Z.O)(e,p,c).itemList||[],B=h.pcSkinMap[A]||{},q=s.pageType,x=(0,D.$V)(e,{blogId:A,adKey:T.rY.PcInArticleInjectedAds}),{ads:G,statuses:V}=(0,E.l1)(e,o),H=(0,E.TY)({adIds:x,blogger:m,blog:P,skinState:h,isPC:!0,isOfficial:v}),N=B.use_layout||"",U=(0,w.jl)(e);return{amebaId:p,amebloOneTimeToken:l()(e,["amebloTokenState","amebloOneTimeToken"],""),blog:P,blogger:m,bloggerType:I,dateDisplayCode:S,entry:L,imageProtectionType:_,imageReproduce:M,isLoggedIn:U,isOfficial:v,officialUpperText:O,pageType:q,pathname:o,profile:k,seoSetting:j,skin:B,useLayout:N,locationSearch:i,injectedAdDfpParam:H,injectedAdsData:G,injectedAdsLoadingStatus:V,pickEventLabels:(0,C.V)(e),commerceEntryImageItemList:R,structuredMarkupList:(0,F.Z)(e,c)}}),{fetchRaichoInArticleInjectedAd:v.s$,openModal:O.h,trackTapLog:j.XI,trackStartClip:j.F_,trackViewLog:j.iG,fetchRaichoAdRequest:v.OX,trackRaichoAdInviewRequest:v.xs,trackRaichoAdTapRequest:v.tJ})(a=(0,h.provideHooks)({defer:function(e){return B.apply(this,arguments)},done:)((o=i=class extends p.Component{constructor(){super(...arguments),this.handleInjectedAdDFPNotFound=e=>{var{entryId:t,orderId:r,fallbackRaichoModuleKey:a}=e;this.fetchInArticleInjectedAdFromAdcross((0,E.Fd)(t,r),a)},this.handleFetchPickEventLabels=()=>{this.props.fetchRaichoAdRequest(R.Xy,R.ee,this.props.amebaId,{useAmebaId:!0,useCache:!0,requestParameter:{ms:R.F}})}}static get defaultProps(){return{injectedAdDfpParam:{},injectedAdsData:null,injectedAdsLoadingStatus:null,pickEventLabels:[],structuredMarkupList:[]}}shouldComponentUpdate(e){return!(this.props.amebaId===e.amebaId&&this.props.amebloOneTimeToken===e.amebloOneTimeToken&&this.props.adInArticlePanel===e.adInArticlePanel&&this.props.bloggerType===e.bloggerType&&this.props.dateDisplayCode===e.dateDisplayCode&&this.props.imageProtectionType===e.imageProtectionType&&this.props.imageReproduce===e.imageReproduce&&this.props.isLoggedIn===e.isLoggedIn&&this.props.isOfficial===e.isOfficial&&this.props.officialUpperText===e.officialUpperText&&this.props.pageType===e.pageType&&this.props.trackStartClip===e.trackStartClip&&this.props.trackTapLog===e.trackTapLog&&this.props.trackViewLog===e.trackViewLog&&this.props.useLayout===e.useLayout&&this.props.openModal===e.openModal&&this.props.locationSearch===e.locationSearch&&this.props.fetchRaichoInArticleInjectedAd===e.fetchRaichoInArticleInjectedAd&&this.props.trackRaichoAdInviewRequest===e.trackRaichoAdInviewRequest&&this.props.trackRaichoAdTapRequest===e.trackRaichoAdTapRequest&&u()(this.props.injectedAdsLoadingStatus,e.injectedAdsLoadingStatus)&&u()(this.props.injectedAdDfpParam,e.injectedAdDfpParam)&&u()(this.props.injectedAdsData,e.injectedAdsData)&&u()(this.props.blog,e.blog)&&u()(this.props.entry,e.entry)&&u()(this.props.adEntryBottom,e.adEntryBottom)&&u()(this.props.entryDetailGenreRanking,e.entryDetailGenreRanking)&&u()(this.props.entryDetailClip,e.entryDetailClip)&&u()(this.props.hashtag,e.hashtag)&&u()(this.props.mypickModule,e.mypickModule)&&u()(this.props.profile,e.profile)&&u()(this.props.cheerFrame,e.cheerFrame)&&u()(this.props.reactions,e.reactions)&&u()(this.props.reactionsLink,e.reactionsLink)&&u()(this.props.readerModule,e.readerModule)&&u()(this.props.recentImageEntryList,e.recentImageEntryList)&&u()(this.props.recentThemeEntryList,e.recentThemeEntryList)&&u()(this.props.seoSetting,e.seoSetting)&&u()(this.props.shareButton,e.shareButton)&&u()(this.props.skin,e.skin)&&u()(this.props.pickEventLabels,e.pickEventLabels)&&u()(this.props.commerceEntryImageItemList,e.commerceEntryImageItemList)&&u()(this.props.structuredMarkupList,e.structuredMarkupList))}fetchInArticleInjectedAdFromAdcross(e,t){var{amebaId:r,pathname:a}=this.props;this.props.fetchRaichoInArticleInjectedAd(t,r,a,e)}render(){return(0,n.Z)(p.Fragment,{},void 0,(0,n.Z)(L.F,{blog:this.props.blog,entry:this.props.entry,isOfficial:this.props.isOfficial,officialUpperText:this.props.officialUpperText,pageType:this.props.pageType,profile:this.props.profile,seoSetting:this.props.seoSetting,skin:this.props.skin,structuredMarkupList:this.props.structuredMarkupList,useLayout:this.props.useLayout}),(0,n.Z)(P.Z,{adEntryBottom:this.props.adEntryBottom,adInArticlePanel:this.props.adInArticlePanel(0)||null,amebaId:this.props.amebaId,amebloOneTimeToken:this.props.amebloOneTimeToken,bloggerGenreCode:l()(this.props.blogger,["blog_genre","genre_code"],""),bloggerType:this.props.bloggerType,cheerFrame:this.props.cheerFrame,commerceEntryImageItemList:this.props.commerceEntryImageItemList,dateDisplayCode:this.props.dateDisplayCode,entry:this.props.entry,entryDetailClip:this.props.entryDetailClip,entryDetailGenreRanking:this.props.entryDetailGenreRanking,entryIndex:0,hashtag:this.props.hashtag,imageProtectionType:this.props.imageProtectionType,imageReproduce:this.props.imageReproduce,injectedAdDfpParam:this.props.injectedAdDfpParam,injectedAdsData:this.props.injectedAdsData,injectedAdsLoadingStatus:this.props.injectedAdsLoadingStatus,isLoggedIn:this.props.isLoggedIn,isOfficial:this.props.isOfficial,locationSearch:this.props.locationSearch,mypickModule:this.props.mypickModule,openModal:this.props.openModal,pageType:this.props.pageType,pickEventLabels:this.props.pickEventLabels,reactions:this.props.reactions,reactionsLink:this.props.reactionsLink,readerModule:this.props.readerModule,recentImageEntryList:this.props.recentImageEntryList,recentThemeEntryList:this.props.recentThemeEntryList,shareButton:this.props.shareButton,trackRaichoAdInviewRequest:this.props.trackRaichoAdInviewRequest,trackRaichoAdTapRequest:this.props.trackRaichoAdTapRequest,trackStartClip:this.props.trackStartClip,trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog,onFetchPickEventLabels:this.handleFetchPickEventLabels,onInjectedAdDFPNotFound:this.handleInjectedAdDFPNotFound}))}},i.displayName="PcEntryDetailOld",a=o))||a)||a)||a},59226:function(e,t,r){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,i)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(76955));t.default=function(e){return s.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",role:"img"},e),s.createElement("path",{d:"M9.41 21c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L16 12 8.71 4.71a.996.996 0 1 1 1.41-1.41l7.29 7.29c.78.78.78 2.05 0 2.83l-7.29 7.29c-.19.19-.45.29-.71.29Z"}))}},27356:function(e,t,r){"use strict";var a=this&&this.__assign||i=this&&this.__createBinding||(Object.create?,o=this&&this.__setModuleDefault||(Object.create?,n=this&&this.__importStar||Object.defineProperty(t,"__esModule",{value:!0});var s=n(r(76955));t.default=,74890:]);