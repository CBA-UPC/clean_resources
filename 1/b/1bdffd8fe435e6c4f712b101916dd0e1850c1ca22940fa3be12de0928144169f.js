"use strict";(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[9575],{79575:(e,t,p)=>{p.r(t),p.d(t,{default:);var a,r,i,s,o=p(3e4),n=p(41185),g=p(66062),l=(p(91938),p(76955)),c=p(55752),h=p.n(c),m=p(29466),b=p.n(m),d=p(5663),f=p.n(d),u=p(97175),y=p(66948),O=p(35874),T=p(63455),I=p(73614),v=p(81454),M=p(12942),k=p(5563),S=p(96914),Z=p(71998),j=p(49577);nction L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=parseInt(e,10);return!t||t<1?1:t}function _(){return(_=(0,g.Z)((function*(e){var{dispatch:t,getState:p,match:a}=e,{params:r}=a,i=r.amebaId,s=yield t((0,I.Rs)(i));if(s&&s.error)"Not Found"===h()(s,"payload.error.message")?t((0,M.Qn)(i)):t((0,M.$F)(i));else{var o=p().bloggerState,n=o.bloggerMap,g=o.blogMap[(n[i]||{}).blog]||{};if(g&&g.blog_id){var l=L(r.page),c=r.themeId;yield Promise.all([t((0,O.Vx)(g.blog_id,c,l,20)),t((0,T.IM)(g.blog_id))])}else t((0,M.Qn)(i))}}))).apply(this,arguments)}var x=function(){var e=(0,g.Z)((function*(e){var{dispatch:t,getState:p,match:a}=e,{params:r}=a,i=r.amebaId,s=r.themeId,o=h()(p(),["bloggerState","bloggerMap",i,"blog"]),n=L(r.page),g=(p().themesState.themePageMap["".concat(s,"/").concat(n)]||{}).data||[];t((0,v.l1)(o,g))}));return function(t){return e.apply(this,arguments)}}();var N=(0,y.$j)((function(e,t){var{match:p}=t,{params:a,route:r}=p,i=a.amebaId,s=a.themeId,o=e.bloggerState,n=e.entryState,g=e.themesState,l=o.bloggerMap,c=o.blogMap,h=l[i]||{},m=h.seo_setting||{},b=c[h.blog]||{},d=h.profile||{},f=(h.attribute||{}).isOfficial,u=L(a.page),y=g.themePageMap["".concat(s,"/").concat(u)]||{},O=y.data||[],T=n.entryMap,I=O.map((e=>w(w({},T[e]),n.entryReactionsMap[e]))),v=y.paging||{},M=!1!==y.loading,k=r.pageType;return{amebaId:i,blog:b,currentThemeMap:(g.themeMap||{})[s]||{},entries:I,isOfficial:f,loading:M,pageType:k,paging:v,profile:d,seoSetting:m}}),{trackTapLog:k.XI})(a=(0,u.provideHooks)({defer:done:x})((i=r=class extends l.Component{shouldComponentUpdate(e){return!(this.props.amebaId===e.amebaId&&this.props.isOfficial===e.isOfficial&&this.props.loading===e.loading&&this.props.pageType===e.pageType&&this.props.trackTapLog===e.trackTapLog&&b()(this.props.blog,e.blog)&&b()(this.props.currentThemeMap,e.currentThemeMap)&&b()(this.props.entries,e.entries)&&b()(this.props.paging,e.paging)&&b()(this.props.profile,e.profile)&&b()(this.props.seoSetting,e.seoSetting))}render(){return(0,o.Z)(l.Fragment,{},void 0,(0,o.Z)(S.F,{blog:this.props.blog,entries:this.props.entries,paging:this.props.paging,profile:this.props.profile,seoSetting:this.props.seoSetting}),(0,o.Z)(j.Z,{amebaId:this.props.amebaId,className:"page",isOfficial:this.props.isOfficial,nextItem:{label:"\u6b21\u30da\u30fc\u30b8",title:"\u6b21\u306e\u30da\u30fc\u30b8\u3078"},pageType:this.props.pageType,paging:this.props.paging,position:"top",prevItem:{label:"\u524d\u30da\u30fc\u30b8",title:"\u524d\u306e\u30da\u30fc\u30b8\u3078"},themeId:this.props.currentThemeMap.theme_id,trackTapLog:this.props.trackTapLog}),(0,o.Z)("div",{id:"recent_entries_list",style:{marginBottom:"20px"}},void 0,!f()(this.props.entries)&&(s||(s=(0,o.Z)("h3",{className:"title"},void 0,"\u8a18\u4e8b\u4e00\u89a7"))),(0,o.Z)(Z.Z,{amebaId:this.props.amebaId,blog:this.props.blog,entries:this.props.entries,isOfficial:this.props.isOfficial,loading:this.props.loading,pageType:this.props.pageType,trackTapLog:this.props.trackTapLog})),(0,o.Z)(j.Z,{amebaId:this.props.amebaId,className:"page",isOfficial:this.props.isOfficial,nextItem:{label:"\u6b21\u30da\u30fc\u30b8",title:"\u6b21\u306e\u30da\u30fc\u30b8\u3078"},pageType:this.props.pageType,paging:this.props.paging,position:"bottom",prevItem:{label:"\u524d\u30da\u30fc\u30b8",title:"\u524d\u306e\u30da\u30fc\u30b8\u3078"},themeId:this.props.currentThemeMap.theme_id,trackTapLog:this.props.trackTapLog}))}},r.displayName="PcThemeListOld",a=i))||a)||a}}]);