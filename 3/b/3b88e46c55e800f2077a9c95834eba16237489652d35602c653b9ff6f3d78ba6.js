(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[5045],{30274:(t,a,e)=>{"use strict";e.d(a,{in:()=>g,wq:()=>l});var r=e(66062),n=e(55752),s=e.n(n),o=e(5663),i=e.n(o),c=e(18274);function h(t,a){var e="".concat(window.process.env.API_HASHTAG_PUB,"/v2/article/multiple/tag/").concat(t,"?entryIds=").concat(a);return fetch(e)}var p=e(74925);ar l=(0,c.H)({ttl:18e5},((t,a)=>function(){var e=(0,r.Z)((function*(e,r){if(s()(r(),["entryState","entryHashtagMap",a]))return null;try{var n=yield function(t,a){var e="".concat(window.process.env.API_HASHTAG_PUB,"/v2/article/tag/").concat(t,"/").concat(a);return fetch(e,{timeout:1e3})}(t,a),o=yield n.json();return e(d(t,a,o))}catch(i){return e(function(t,a,e){return{type:p.bv,payload:{amebaId:t,entryId:a,error:e},error:!0}}(i))}}));return function(t,a){return e.apply(this,arguments)}}()));function u(t,a,e){return{type:p.uI,payload:{amebaId:t,entryIds:a,error:e},error:!0}}var g=(0,c.H)((function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(){var e=(0,r.Z)((function*(e,r){var n=[];if(a.map((t=>(s()(r(),["entryState","entryHashtagMap",t])||n.push(t),null))),!t||i()(n))return null;var o=n.join(",");try{if(n.length>1){var c=yield h(t,o);return(yield c.json()).data.map((a=>e(d(t,a.entryId,a.tagList)))),null}var p=n[0];return e(l(t,p)),null}catch(g){return e(u(t,o,g))}}));return ()}))},21739:(t,a,e)=>{"use strict";e.d(a,{u:()=>y});var r,n,s,o=e(3e4),i=(e(91938),e(76955)),c=e(29466),h=e.n(c),p=e(1029),d=e.n(p),l=e(55382),u=e.n(l),g=e(45525),f=e(87760),v=e.n(f),y=(0,g.w1)(v())((s=n=class extends i.Component{shouldComponentUpdate(t){return this.props.amebaId!==t.amebaId||this.props.entryId!==t.entryId||this.props.genreCode!==t.genreCode||this.props.isOfficial!==t.isOfficial||!h()(this.props.hashtag,t.hashtag)}getTagData(t){var{genreCode:a}=this.props;if(!a)return t?t[0]:null;var e=t.find(();return e||(t?t[0]:null)}renderItem(t){var a=this.getTagData(t.tagData),e=a?a.tagType:"0",r=!this.props.isOfficial&&a&&("01"===e||"02"===e),n="".concat(window.process.env.HTTP_PATH_HASHTAG,"/detail/").concat(t.hashtag);return r&&(n="".concat(window.process.env.HTTP_PATH_GENRE,"/hashtags/").concat(t.hashtag),this.props.genreCode===a.genreCode&&(n="".concat(window.process.env.HTTP_PATH_GENRE,"/hashtags/").concat(t.hashtag,"?genre=").concat(a.genreCode))),(0,o.Z)("span",{className:"hashtag-module__item"},t.hashtag,(0,o.Z)("a",{href:n},void 0,r&&(0,o.Z)("i",{className:u()(v().Icon,"s","s-hashtag_official","hashtag-module__icon")}),(0,o.Z)("span",{className:"hashtag-module__item__text"},void 0,"#".concat(t.hashtag))))}render(){var{hashtag:t}=this.props;return!d()(t)||t.length<1?null:(0,o.Z)("div",{className:"js-hashtag hashtag-module-wrapper"},void 0,(0,o.Z)("div",{className:"hashtag-module hashtag-module-borderTop"},void 0,t.map(()))}},n.displayName="PcEntryHashtag",r=s))||r},95045:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:);var r,n,s,o=e(3e4),i=e(66062),c=(e(91938),e(76955)),h=e(29466),p=e.n(h),d=e(97175),l=e(66948),u=e(73614),g=e(30274),f=e(21739);function v(){return(v=(0,i.Z)((function*(t){var{dispatch:a,getState:e,match:r}=t,{params:n}=r,s=n.amebaId,o=yield a((0,u.Rs)(s));if(!o||!o.error){var i=e().bloggerState,c=i.bloggerMap,h=i.blogMap[(c[s]||{}).blog];if(h&&h.blog_id){var p=n.entryId;yield a((0,g.in)(s,[p]))}}}))).apply(this,arguments)}var y=(0,l.$j)((function(t,a){var{match:e}=a,{params:r}=e,n=r.amebaId,s=r.entryId,o=t.entryState,i=t.bloggerState.bloggerMap,c=(o.entryHashtagMap||{})[s]||[],h=i[n]||{},p=(h.attribute||{}).isOfficial;return{amebaId:n,entryId:s,genreCode:(h.blog_genre||{}).genre_code||"",hashtag:c,isOfficial:p}}))(r=(0,d.provideHooks)({done:)((s=n=class extends c.Component{shouldComponentUpdate(t){return this.props.amebaId!==t.amebaId||this.props.entryId!==t.entryId||this.props.genreCode!==t.genreCode||this.props.isOfficial!==t.isOfficial||!p()(this.props.hashtag,t.hashtag)}render(){return(0,o.Z)(f.u,{amebaId:this.props.amebaId,entryId:this.props.entryId,genreCode:this.props.genreCode,hashtag:this.props.hashtag,isOfficial:this.props.isOfficial},"entry_hashtag")}},n.displayName="PcEntryDetailHashtag",r=s))||r)||r},84088:(t,a,e)=>{var r=e(18300)(();r.push([t.id,"._3KOqJWD2{margin-right:2px;vertical-align:-18%}",""]),r.locals={Icon:"_3KOqJWD2"},t.exports=r},87760:(t,a,e)=>{var r=e(84088),n=Object.assign||s=Object.defineProperty||"string"==typeof r&&(r=[[t.id,r,""]]),t.exports=function(t){var a=n({},t.locals||{});return s(a,"_",{value:),s(a,"toString",{value:function(){return"function"==typeof t.toString?t.toString():""}}),a}(r)}}]);