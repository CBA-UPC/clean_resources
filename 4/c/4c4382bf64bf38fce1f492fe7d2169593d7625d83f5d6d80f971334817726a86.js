"use strict";(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[7418],{3066:(e,t,a)=>{a.d(t,{F:()=>f});var p=a(3e4),i=(a(91938),a(76955)),r=a(55752),s=a.n(r),o=a(29466),n=a.n(o),g=a(5663),l=a.n(g),c=a(64530),b=a(75457),d=a(73324),h=a(81105);class f extends i.Component{shouldComponentUpdate(e){return!(n()(this.props.blog,e.blog)&&n()(this.props.entries,e.entries)&&n()(this.props.paging,e.paging)&&n()(this.props.profile,e.profile)&&n()(this.props.seoSetting,e.seoSetting))}render(){var{blog:e,entries:t,profile:a,paging:i,seoSetting:r}=this.props,o=e.blog_name||"",n=e.blog_title||"",g=a.nickname||o||"",f=i.current_page||1,m=[],u=[],y=(0,d.ZP)(b.Z.EntryList,{amebaId:o,hasContents:!l()(t),paging:i,seoSetting:r});m.push(...y.meta),u.push(...y.link);var v=[];return v.push(...(0,h.Z)((0,d.Z2)(b.Z.EntryList,{amebaId:o}),n,e.ins_datetime||"",s()(t,[0,"entry_created_datetime"],""),g)),(0,p.Z)(c.c,{link:u,meta:m,script:v,title:(()=>{var e=f>1?" -".concat(f,"\u30da\u30fc\u30b8\u76ee"):"";return"\u30d6\u30ed\u30b0\u8a18\u4e8b\u4e00\u89a7\uff5c".concat(n).concat(e)})()})}}f.displayName="Head"},77418:(e,t,a)=>{a.r(t),a.d(t,{default:);var p,i,r,s,o=a(3e4),n=a(41185),g=a(66062),l=(a(91938),a(76955)),c=a(55752),b=a.n(c),d=a(29466),h=a.n(d),f=a(97175),m=a(66948),u=a(81454),y=a(73614),v=a(12942),O=a(5563),I=a(3066),T=a(71998),Z=a(49577);nction _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=parseInt(e,10);return!t||t<1?1:t}function j(){return(j=(0,g.Z)((function*(e){var{dispatch:t,getState:a,match:p}=e,{params:i}=p,r=i.amebaId;yield t((0,y.Rs)(r));var s=a().bloggerState,o=s.bloggerMap,n=s.blogMap,g=o[r]||{};if(g.statusCode){if(404===g.statusCode)return void t((0,v.Qn)(r));if(200!==g.statusCode)return void t((0,v.$F)(r))}var l=n[g.blog]||{};if(l&&l.blog_id){var c=_(i.page);yield t((0,u.OQ)(l.blog_id,c,20))}else t((0,v.Qn)(r))}))).apply(this,arguments)}var L=function(){var e=(0,g.Z)((function*(e){var{dispatch:t,getState:a,match:p}=e,{params:i}=p,r=i.amebaId,s=b()(a(),["bloggerState","bloggerMap",r,"blog"]),o=_(i.page),n=(a().entryState.blogPageMap["".concat(s,"/").concat(o)]||{}).data||[];t((0,u.l1)(s,n))}));return function(t){return e.apply(this,arguments)}}();var P=(0,m.$j)((function(e,t){var{match:a}=t,{params:p,route:i}=a,r=p.amebaId,s=e.bloggerState,o=e.entryState,n=s.bloggerMap,g=s.blogMap,l=n[r]||{},c=l.seo_setting||{},b=g[l.blog]||{},d=l.profile||{},h=(l.attribute||{}).isOfficial,f=_(p.page),m=o.blogPageMap["".concat(b.blog_id,"/").concat(f)]||{},u=m.data||[],y=o.entryMap,v=u.map((e=>S(S({},y[e]),o.entryReactionsMap[e]))),O=m.paging||{};return{amebaId:r,blog:b,entries:v,isOfficial:h,loading:!1!==m.loading,pageType:i.pageType,paging:O,profile:d,seoSetting:c}}),{trackTapLog:O.XI})(p=(0,f.provideHooks)({defer:done:L})((r=i=class extends l.Component{shouldComponentUpdate(e){return!(this.props.amebaId===e.amebaId&&this.props.isOfficial===e.isOfficial&&this.props.loading===e.loading&&this.props.pageType===e.pageType&&this.props.trackTapLog===e.trackTapLog&&h()(this.props.blog,e.blog)&&h()(this.props.entries,e.entries)&&h()(this.props.paging,e.paging)&&h()(this.props.profile,e.profile)&&h()(this.props.seoSetting,e.seoSetting))}render(){return(0,o.Z)(l.Fragment,{},void 0,(0,o.Z)(I.F,{blog:this.props.blog,entries:this.props.entries,paging:this.props.paging,profile:this.props.profile,seoSetting:this.props.seoSetting}),(0,o.Z)(Z.Z,{amebaId:this.props.amebaId,className:"page",isOfficial:this.props.isOfficial,nextItem:{label:"\u6b21\u30da\u30fc\u30b8",title:"\u6b21\u306e\u30da\u30fc\u30b8\u3078"},pageType:this.props.pageType,paging:this.props.paging,position:"top",prevItem:{label:"\u524d\u30da\u30fc\u30b8",title:"\u524d\u306e\u30da\u30fc\u30b8\u3078"},trackTapLog:this.props.trackTapLog}),(0,o.Z)("div",{id:"recent_entries_list",style:{marginBottom:"20px"}},void 0,s||(s=(0,o.Z)("h3",{className:"title"},void 0,"\u8a18\u4e8b\u4e00\u89a7")),(0,o.Z)(T.Z,{amebaId:this.props.amebaId,blog:this.props.blog,entries:this.props.entries,isOfficial:this.props.isOfficial,loading:this.props.loading,pageType:this.props.pageType,trackTapLog:this.props.trackTapLog})),(0,o.Z)(Z.Z,{amebaId:this.props.amebaId,className:"page",isOfficial:this.props.isOfficial,nextItem:{label:"\u6b21\u30da\u30fc\u30b8",title:"\u6b21\u306e\u30da\u30fc\u30b8\u3078"},pageType:this.props.pageType,paging:this.props.paging,position:"bottom",prevItem:{label:"\u524d\u30da\u30fc\u30b8",title:"\u524d\u306e\u30da\u30fc\u30b8\u3078"},trackTapLog:this.props.trackTapLog}))}},i.displayName="PcEntryListOld",p=r))||p)||p}}]);