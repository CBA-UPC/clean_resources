(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[1637],{59308:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var o,a,i,n,s,p=r(3e4),c=(r(91938),r(76955)),d=r(5663),l=r.n(d),h=r(29466),g=r.n(h),u=r(29835),f=r(45525),m=r(19008),b=r(36509),y=r(68751),v=r(50672),k=r(63826),I=r.n(k),A=r(70709),T=(0,f.w1)(I())((i=a=class extends c.Component{houldComponentUpdate(e){return this.props.amebaId!==e.amebaId||!g()(this.props.blog,e.blog)||!g()(this.props.entry,e.entry)||!g()(this.props.official,e.official)}componentDidUpdate(){if(this.handleMount(),this.target){var{amebaId:e,entry:t}=this.props,r=this.getShareTitle(),o=(0,b.IT)(e,t);this.target.innerHTML=u.renderToStaticMarkup(this.renderHatenaDom(r,o))}}getShareTitle(){var{entry:e,official:t}=this.props,r="\u300e".concat(e.entry_title,"\u300f");return l()(t)?unescape(r):unescape(t.upper_text+r)}handleMount(){return(0,y.$O)().then((()=>{window&&window.FB&&window.FB.XFBML&&window.FB.XFBML.parse()})).catch((e=>{console.error(e)})),(0,m.v)("https://platform.twitter.com/widgets.js").then((()=>{window&&window.twttr&&window.twttr.widgets&&window.twttr.widgets.load()})).catch((),(0,m.v)("https://b.st-hatena.com/js/bookmark_button.js")}reportLink(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,p.Z)("div",{className:I().ReportLinkWrapper,style:{marginTop:r&&16}},void 0,(0,p.Z)(v.Z,{amebaId:e,entry:{entry_id:t.entry_id,publish_flg:t.publish_flg}}))}renderHatenaDom(e,t){return(0,p.Z)("a",{className:"hatena-bookmark-button","data-hatena-bookmark-lang":"ja","data-hatena-bookmark-layout":"standard-balloon","data-hatena-bookmark-title":e,href:"http://b.hatena.ne.jp/entry/".concat(t),title:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0"},void 0,(0,p.Z)("img",{alt:"\u3053\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u306f\u3066\u306a\u30d6\u30c3\u30af\u30de\u30fc\u30af\u306b\u8ffd\u52a0",className:I().HatenaImage,height:"20",src:"https://b.st-hatena.com/images/entry-button/button-only@2x.png",width:"20"}))}render(){var{amebaId:e,blog:t,entry:r}=this.props;if("mon_ng"===r.closed_flg||0===t.ex_link_flg||"amember"===r.publish_flg)return this.reportLink(e,r,!0);var o=this.getShareTitle();if(!o)return this.reportLink(e,r,!0);var a=(0,b.IT)(e,r);return(0,p.Z)(c.Fragment,{},void 0,(0,p.Z)("div",{className:"articleExLinkArea"},void 0,(0,p.Z)("div",{className:"articleExLinkSubArea"},void 0,c.createElement("div",{className:"hatebu-button",ref:,this.renderHatenaDom(o,a)),(0,p.Z)("a",{className:"tweetBtn",href:(0,A.L)({text:"".concat(o,"\n\u21d2"),url:a,hashtags:["\u30a2\u30e1\u30d6\u30ed"],via:"ameba_official"}),rel:"noopener noreferrer nofollow",target:"_blank"},void 0,n||(n=(0,p.Z)("i",{})),s||(s=(0,p.Z)("span",{},void 0,"\u30c4\u30a4\u30fc\u30c8"))),(0,p.Z)("div",{className:"entryFbShareButton",style:{height:"20px",minWidth:"80px"}},void 0,(0,p.Z)("div",{className:"fb-share-button","data-href":a,"data-layout":"button_count"})))),this.reportLink(e,r))}},a.displayName="PcEntryDetailExLinkButtonNew",o=i))||o},22905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ae});var o,a,i,n,s,p,c=r(3e4),d=r(41185),l=r(66062),h=(r(91938),r(76955)),g=r(55752),u=r.n(g),f=r(29466),m=r.n(f),b=r(5154),y=r.n(b),v=r(97175),k=r(66948),I=r(5663),A=r.n(I),T=r(23347),j=r(81454),_=r(73614),w=r(12942),L=r(3710),C=r(30274),R=r(43192),M=r(77442),P=r(90857),S=r(5563),O=r(29842),E=r(78216),D=r(76587),N=r(59308),Z=r(81151),F=r(21739),x=r(83917),q=r(97557),B=r(51650),H=r(68858),U=r(85969),V=r(928),G=r(4645),X=r(66229),$=r(31289),Q=r(68396),W=r(84596),Y=r(22247),z=r(92235);r ee={minHeight:"600px"};function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=parseInt(e,10);return!t||t<1?1:t}function re(){return(re=(0,l.Z)((function*(e){var{dispatch:t,getState:r,match:o,location:a}=e,{params:i}=o,n=i.amebaId,s=yield t((0,_.Rs)(n));if(s&&s.error)"Not Found"===u()(s,"payload.error.message")?t((0,w.Qn)(n)):t((0,w.$F)(n));else{var p=r().bloggerState,c=p.bloggerMap,d=p.blogMap,l=c[n]||{},h=d[l.blog]||{},g=h.entry_limit||"";if(h&&h.blog_id){var f=te(i.page);yield Promise.all([t((0,T.sl)(h.blog_id,f,g,!0)),t((0,$.QG)(a.pathname,i)),t((0,X.Mz)(l.blog,[H.rY.PcInArticleInjectedAds],{ignoreAdNG:!0}))])}else t((0,w.Qn)(n))}}))).apply(this,arguments)}function oe(){return(oe=(0,l.Z)((function*(e){var{dispatch:t,getState:r,match:o}=e,{params:a}=o,i=a.amebaId,n=r().bloggerState,s=n.bloggerMap,p=n.blogMap[(s[i]||{}).blog]||{};if("new"===(u()(r(),["skinState","pcSkinMap",p.blog_id],{}).base_skin||"")){t((0,V.cl)("pc"));var c=r().entryState,d=te(a.page),l=(c.pcBlogTopPageMap["".concat(p.blog_id,"/").concat(d)]||{}).data||[],h=c.entryMap,g=[t((0,C.in)(i,l)),t((0,j.l1)(p.blog_id,l))];l.forEach((e=>{var r=h[e];g.push(t((0,R.ov)(p.blog_id,r.entry_id))),(0,O.M)(p,r).canIine&&g.push(t((0,M.yr)(i,r.entry_id)))})),yield Promise.all(g)}}))).apply(this,arguments)}var ae=(0,B.lB)(["match","location"])(o=(0,k.$j)((function(e,t){var{match:r,location:o}=t,{params:a,route:i}=r,{search:n,pathname:s}=o,p=a.amebaId,c=e.bloggerState,d=e.entryState,l=e.iineState,h=e.skinState,g=c.bloggerMap,f=c.blogMap,m=g[p]||{},b=m.official||{},y=m.seo_setting||{},v=m.blog,k=f[v]||{},I=m.profile||{},A=m.attribute||{},T=A.isOfficial,j=A.bloggerType||"general",_=(m.blog_genre||{}).genre_code||"",w=k.daydisplay_flg||1,L=u()(m,["official","image_protection_type"],""),C=u()(m,["official","image_reproduce"],""),R=te(a.page),M=d.pcBlogTopPageMap["".concat(k.blog_id,"/").concat(R)]||{},P=M.data||[],S=d.entryMap,O=P.map((e=>K(K({},S[e]),u()(d,["entryReactionsMap",e],{})))),E=void 0===M.loading||M.loading,D=M.paging||{},N=d.entryHashtagMap||{},Z=P.map((),F=i.pageType,x=l.iineButtonMap,q=u()(e,["amebloTokenState","amebloOneTimeToken"],""),B=(0,z.V)(e),V=(0,W.$V)(e,{blogId:v,adKey:H.rY.PcInArticleInjectedAds}),X=(0,Q.j)(e),{ads:$,statuses:Y}=(0,G.l1)(e,s),J=(0,G.TY)({adIds:V,blogger:m,blog:k,skinState:h,isPC:!0,isOfficial:T}),ee=u()(e,["skinState","pcSkinMap",v,"use_layout"]),re=(0,U.U)(ee);return{amebaId:p,amebloOneTimeToken:q,blog:k,blogger:m,bloggerType:j,dateDisplayCode:w,entries:O,entriesLoading:E,genreCode:_,hashtags:Z,iineButtonMap:x,imageProtectionType:L,imageReproduce:C,isOfficial:T,official:b,pageType:F,paging:D,pathname:s,pickEventLabels:B,profile:I,remoteConfig:X,seoSetting:y,sidebarCount:re,locationSearch:n,injectedAdDfpParam:J,injectedAdsData:$,injectedAdsLoadingStatus:Y,checkAutoInjectionEnabled:t=>(0,G.dg)({isOfficial:T,blogId:v,entry:t,noAdMap:(0,W.jj)(e),remoteConfig:X})}}),{cancelIineRequest:M.Xc,executeIineRequest:M.Ry,closeModal:P.M,openModal:P.h,fetchIineRequest:M.yr,trackTapLog:S.XI,trackEndClip:S.ps,trackProgressClip:S.QJ,trackRaichoAdInviewRequest:L.xs,trackRaichoAdTapRequest:L.tJ,trackStartClip:S.F_,trackViewLog:S.iG,fetchRaichoAdRequest:L.OX,fetchRaichoInArticleInjectedAd:L.s$})(o=(0,v.provideHooks)({defer:function(e){return re.apply(this,arguments)},done:)((i=a=class extends h.Component{constructor(){super(...arguments),this.handleInjectedAdDFPNotFound=e=>{var{entryId:t,orderId:r,fallbackRaichoModuleKey:o}=e;this.fetchInArticleInjectedAdFromAdcross((0,G.Fd)(t,r),o)},this.handleFetchPickEventLabels=()=>{this.props.fetchRaichoAdRequest(Y.Xy,Y.ee,this.props.amebaId,{useAmebaId:!0,useCache:!0,requestParameter:{ms:Y.F}})}}static get defaultProps(){return{amebloOneTimeToken:"",mypickModule:y(),injectedAdDfpParam:{},injectedAdsData:{},injectedAdsLoadingStatus:{},remoteConfig:{},sidebarCount:null,checkAutoInjectionEnabled:pickEventLabels:[]}}shouldComponentUpdate(e){return!(this.props.amebaId===e.amebaId&&this.props.amebloOneTimeToken===e.amebloOneTimeToken&&this.props.adInArticlePanel===e.adInArticlePanel&&this.props.bloggerType===e.bloggerType&&this.props.cancelIineRequest===e.cancelIineRequest&&this.props.closeModal===e.closeModal&&this.props.dateDisplayCode===e.dateDisplayCode&&this.props.entriesLoading===e.entriesLoading&&this.props.executeIineRequest===e.executeIineRequest&&this.props.fetchIineRequest===e.fetchIineRequest&&this.props.genreCode===e.genreCode&&this.props.imageProtectionType===e.imageProtectionType&&this.props.imageReproduce===e.imageReproduce&&this.props.checkAutoInjectionEnabled===e.checkAutoInjectionEnabled&&this.props.isOfficial===e.isOfficial&&this.props.mypickModule===e.mypickModule&&this.props.openModal===e.openModal&&this.props.pageType===e.pageType&&this.props.pathname===e.pathname&&this.props.sidebarCount===e.sidebarCount&&this.props.trackRaichoAdInviewRequest===e.trackRaichoAdInviewRequest&&this.props.trackRaichoAdTapRequest===e.trackRaichoAdTapRequest&&this.props.trackEndClip===e.trackEndClip&&this.props.trackProgressClip===e.trackProgressClip&&this.props.trackStartClip===e.trackStartClip&&this.props.trackTapLog===e.trackTapLog&&this.props.trackViewLog===e.trackViewLog&&this.props.locationSearch===e.locationSearch&&this.props.fetchRaichoInArticleInjectedAd===e.fetchRaichoInArticleInjectedAd&&m()(this.props.injectedAdsLoadingStatus,e.injectedAdsLoadingStatus)&&m()(this.props.injectedAdDfpParam,e.injectedAdDfpParam)&&m()(this.props.injectedAdsData,e.injectedAdsData)&&m()(this.props.blog,e.blog)&&m()(this.props.entries,e.entries)&&m()(this.props.adEntryBottom,e.adEntryBottom)&&m()(this.props.hashtags,e.hashtags)&&m()(this.props.cheerFrame,e.cheerFrame)&&m()(this.props.iineButtonMap,e.iineButtonMap)&&m()(this.props.official,e.official)&&m()(this.props.paging,e.paging)&&m()(this.props.profile,e.profile)&&m()(this.props.recentImageEntryList,e.recentImageEntryList)&&m()(this.props.recentThemeEntryList,e.recentThemeEntryList)&&m()(this.props.seoSetting,e.seoSetting)&&m()(this.props.blogger,e.blogger)&&m()(this.props.match,e.match)&&m()(this.props.remoteConfig,e.remoteConfig)&&m()(this.props.pickEventLabels,e.pickEventLabels))}fetchInArticleInjectedAdFromAdcross(e,t){var{amebaId:r,pathname:o}=this.props;this.props.fetchRaichoInArticleInjectedAd(t,r,o,e)}renderEntryEmpty(){return(0,c.Z)("span",{className:"error"},void 0,n||(n=(0,c.Z)("br",{})),(0,c.Z)("p",{align:"center"},void 0,(0,c.Z)("img",{alt:"\u3053\u306e\u30d6\u30ed\u30b0\u306b\u306f\u307e\u3060\u6295\u7a3f\u304c\u3042\u308a\u307e\u305b\u3093\u3002",src:"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/common_style/img/ameba/common/no_article.gif"),style:{display:"flex",justifyContent:"center"}})),s||(s=(0,c.Z)("br",{})),p||(p=(0,c.Z)("br",{})))}render(){var e=this.props.entries.map(((e,t)=>{var r=(0,c.Z)(F.u,{amebaId:this.props.amebaId,entryId:"".concat(e.entry_id),genreCode:this.props.genreCode,hashtag:this.props.hashtags[t]||[],isOfficial:this.props.isOfficial}),o=!A()(e.clip)&&(0,c.Z)(Z.E,{amebaId:this.props.amebaId,duration:e.clip.duration||0,entryId:"".concat(e.entry_id),id:e.clip.id||"",pathname:this.props.pathname,playCount:e.clip.play_count||0,trackEndClip:this.props.trackEndClip,trackProgressClip:this.props.trackProgressClip,trackStartClip:this.props.trackStartClip}),a=(0,c.Z)(N.Z,{amebaId:this.props.amebaId,blog:this.props.blog,entry:e,official:this.props.official}),i=(0,c.Z)(x.m,{amebaId:this.props.amebaId,amebloOneTimeToken:this.props.amebloOneTimeToken,blog:this.props.blog,cancelIineRequest:this.props.cancelIineRequest,entry:e,executeIineRequest:this.props.executeIineRequest,fetchIineRequest:this.props.fetchIineRequest,iine:this.props.iineButtonMap[e.entry_id]||{},isOfficial:this.props.isOfficial,pageType:this.props.pageType,trackTapLog:this.props.trackTapLog}),n=(0,c.Z)(q.L,{amebaId:this.props.amebaId,closeModal:this.props.closeModal,entry:e,isOfficial:this.props.isOfficial,openModal:this.props.openModal,pageType:this.props.pageType,permissions:(0,O.M)(this.props.blog,e),trackTapLog:this.props.trackTapLog}),s=this.props.checkAutoInjectionEnabled(e);return 0===t?(0,c.Z)(D.Z,{adEntryBottom:this.props.adEntryBottom,adInArticlePanel:this.props.adInArticlePanel(t)||null,amebaId:this.props.amebaId,bloggerGenreCode:u()(this.props.blogger,["blog_genre","genre_code"],""),bloggerType:this.props.bloggerType,cheerFrame:this.props.cheerFrame,dateDisplayCode:this.props.dateDisplayCode,entry:e,entryDetailClip:o,entryIndex:t,hashtag:r,imageProtectionType:this.props.imageProtectionType,imageReproduce:this.props.imageReproduce,injectedAdDfpParam:this.props.injectedAdDfpParam,injectedAdsData:this.props.injectedAdsData,injectedAdsLoadingStatus:this.props.injectedAdsLoadingStatus,isOfficial:this.props.isOfficial,locationSearch:this.props.locationSearch,mypickModule:this.props.mypickModule(e.entry_id)||null,openModal:this.props.openModal,pageType:this.props.pageType,pickEventLabels:this.props.pickEventLabels,reactions:i,reactionsLink:n,recentImageEntryList:this.props.recentImageEntryList,recentThemeEntryList:this.props.recentThemeEntryList,remoteConfig:this.props.remoteConfig,shareButton:a,shouldInjectAutoGeneratedAds:s,sidebarCount:this.props.sidebarCount,trackRaichoAdInviewRequest:this.props.trackRaichoAdInviewRequest,trackRaichoAdTapRequest:this.props.trackRaichoAdTapRequest,trackStartClip:this.props.trackStartClip,trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog,onFetchPickEventLabels:this.handleFetchPickEventLabels,onInjectedAdDFPNotFound:this.handleInjectedAdDFPNotFound},e.entry_id):(0,c.Z)(D.Z,{adInArticlePanel:this.props.adInArticlePanel(t)||null,amebaId:this.props.amebaId,bloggerType:this.props.bloggerType,dateDisplayCode:this.props.dateDisplayCode,entry:e,entryDetailClip:o,entryIndex:t,hashtag:r,imageProtectionType:this.props.imageProtectionType,imageReproduce:this.props.imageReproduce,injectedAdDfpParam:this.props.injectedAdDfpParam,injectedAdsData:this.props.injectedAdsData,injectedAdsLoadingStatus:this.props.injectedAdsLoadingStatus,isOfficial:this.props.isOfficial,locationSearch:this.props.locationSearch,mypickModule:this.props.mypickModule(e.entry_id)||null,openModal:this.props.openModal,pageType:this.props.pageType,pickEventLabels:this.props.pickEventLabels,reactions:i,reactionsLink:n,remoteConfig:this.props.remoteConfig,shareButton:a,shouldInjectAutoGeneratedAds:s,sidebarCount:this.props.sidebarCount,trackRaichoAdInviewRequest:this.props.trackRaichoAdInviewRequest,trackRaichoAdTapRequest:this.props.trackRaichoAdTapRequest,trackStartClip:this.props.trackStartClip,trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog,onFetchPickEventLabels:this.handleFetchPickEventLabels,onInjectedAdDFPNotFound:this.handleInjectedAdDFPNotFound},e.entry_id)})),t=e.length>0,r=!this.props.entriesLoading&&!t;return(0,c.Z)(h.Fragment,{},void 0,(0,c.Z)(E.F,{blog:this.props.blog,entries:this.props.entries,pageType:this.props.pageType,paging:this.props.paging,profile:this.props.profile,seoSetting:this.props.seoSetting}),r&&this.renderEntryEmpty(),(0,c.Z)("div",{style:ee},void 0,e))}},a.displayName="PcBlogTopNew",o=i))||o)||o)||o},69383:(e,t,r)=>{"use strict";r.d(t,{ZP:);var o,a=r(76955),i=r(52377),n=/^-?\d*\.?\d+(px|%)$/;ar p=(o=Object.prototype).hasOwnProperty,c=o.toString;ar l=new Map;tion m(e){var t;null===(t=l.get(e.observer))||void 0===t||t.add(e),e.observer.observe(e.target)}ar y=),v=["root","rootMargin","threshold"],k=["root","rootMargin","threshold","disabled"],I=const A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=t.handleNode=function(e){var r=t.props.children;if(d(r)){var o=r.ref;"function"==typeof o?o(e):o&&p.call(o,"current")&&(o.current=e)}if(t.targetNode=void 0,e){var a=(0,i.findDOMNode)(e);a&&1===a.nodeType&&(t.targetNode=a)}},t.observe=t.unobserve=t.externalUnobserve=t}return y(t,e),t.prototype.getSnapshotBeforeUpdate=t.prototype.componentDidUpdate=t.prototype.componentDidMount=t.prototype.componentWillUnmount=t.prototype.render=t.displayName="IntersectionObserver",t}(a.Component)},78198:(e,t,r)=>{var o=r(18300)(();o.push([e.id,"._340cHFRU{margin-right:5.5px}._1_Unuu28{border:none}._3xTo3aZr{margin:6px 0 16px auto;width:fit-content}",""]),o.locals={Block:"_340cHFRU",HatenaImage:"_1_Unuu28",ReportLinkWrapper:"_3xTo3aZr"},e.exports=o},63826:(e,t,r)=>{var o=r(78198),a=Object.assign||i=Object.defineProperty||"string"==typeof o&&(o=[[e.id,o,""]]),e.exports=function(e){var t=a({},e.locals||{});return i(t,"_",{value:),i(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(o)}}]);