(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[7011],{91726:(e,a,t)=>{"use strict";t.d(a,{Wk:()=>p});var n=t(66062),r=t(18274),i=t(55752),o=t.n(i),l=t(47113),c=t(64123),s=(e,a)=>({type:l.Po,payload:{amebaId:e,pageNum:a}}),d=(e,a,t)=>({type:l.sP,payload:{amebaId:e,pageNum:a,data:t}}),g=(e,a)=>({type:l.FE,payload:{amebaId:e,pageNum:a},error:!0}),p=(0,r.H)((function(e,a,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20;return function(){var i=(0,n.Z)((function*(n,i,l){var{fetchr:p}=l,u=i().videoPaginateState;if(void 0!==o()(u,["videoPageMap","".concat(e,"/").concat(t)]))return null;try{n(s(e,t));var m=yield p.read(c.Z.BlogVideos).params({amebaId:e,blogId:a,options:{offset:t>0?(t-1)*r:0,limit:r}}).end();return n(d(e,t,m.data))}catch(v){return n(g(e,t))}}));return ()}))},27011:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>ie});var n=t(66062),r=t(97175),i=t(66948),o=t(55752),l=t.n(o),c=t(78168),s=t(51650),d=t(63014),g=t(70317),p=t(31058),u=t(12942),m=t(73614),v=t(90926),f=t(74309),b=t(79751),h=t(91726),y=t(76955),I=t(29466),_=t.n(I),Z=t(73724),T=t(92700),w=t(53162),L=t(96550),k=t(96216),x=t(82282),S=e=>{var{amebaId:a,pageType:t,blogTitle:n,blogId:r,seoSetting:i={},paging:o={}}=e,l=(0,x.Z)(t,{amebaId:a,seoSetting:i,blogId:r,paging:o});return y.createElement(y.Fragment,null,y.createElement(k.ql,null,y.createElement("title",null,"\u52d5\u753b\u4e00\u89a7\uff5c".concat(n||"")),l))};const B=y.memo(S,_());var P=t(45525),E=t(16592),H=t(80007),F=t.n(H),N=t(75457),A=t(40393),z=t(13497),C=t(16884),M=t(10793),j=t(48516),O=t(55502),V=t(93358),W=t.n(V),R=t(57224),U=t(4623),D=t(72705),Q=t.n(D),G=e=>{var{amebaId:a,videoList:t,isVideoLoading:n,pageType:r,useTrackTapLog:i,useTrackViewLog:o,useServiceId:l}=e,c=i(),s=o(),d=l(a),g=0===t.length;return y.createElement(y.Fragment,null,g?n?y.createElement(R.m,null):y.createElement("div",{className:Q().EmptyContainer},y.createElement("p",{className:Q().NoVideoMessage},"\u307e\u3060\u6295\u7a3f\u3055\u308c\u3066\u3044\u307e\u305b\u3093"),y.createElement("div",{className:Q().LinkButtonWrap},y.createElement(O.LinkButton,{href:(0,C.Z)(N.Z.BlogTop,{amebaId:a}),layout:"fullWidth",size:"medium",variant:"neutral"},"\u30d6\u30ed\u30b0\u3092\u307f\u308b"))):y.createElement(y.Fragment,null,y.createElement("ul",{className:Q().List},t.map(((e,t)=>{var n=0===e.videoIndexInEntry?"":String(e.videoIndexInEntry+1),i="".concat(e.entryId,"-").concat(e.videoId,"-").concat(t),o=String(e.entryId);return y.createElement("li",{className:Q().ListItem,key:i},y.createElement(M.f,{activate:["tap","view"],bloggerAmebaId:a,contentId:e.videoId,entryId:String(e.entryId),pageId:r,sectionId:"video-list-item",serviceId:d,tapLogger:c,viewLogger:s},y.createElement("div",null,y.createElement(U._,{amebaId:a,entryCreatedDatetime:e.entryCreatedDatetime,entryId:o,entryTitle:e.entryTitle,videoNumber:n,videoThumb:e.videoThumb}))))})))))},J=(0,P.w1)([Q(),W()])(y.memo(G,_())),K=t(87066),Y=t(68610),q=t.n(Y),$=e=>{var{blog:a,blogger:t,videoList:n,isVideoLoading:r,videoPaging:i,followButtonStatus:o,isFollowingUpperLimit:c,pageNumber:s,useRouter:d,useTrackTapLog:g,useTrackViewLog:p,useServiceId:u,usePcFollow:m}=e,{match:v}=d(),{amebaId:f}=v.params,b=v.route.pageType,h=g(),I=p(),_=u(f),Z=l()(t,["attribute","bloggerType"],A.vh),T=l()(t,["profile"],{}),w=l()(t,["official"],{}),L=Z===A.KO,k=Z===A.w5,x=i.max_page||0,S=n.length>0&&!r&&x>0;return y.createElement(y.Fragment,null,y.createElement("div",{className:q().Header},y.createElement("div",{className:q().HeaderTitle},y.createElement(M.f,{activate:["tap","view"],bloggerAmebaId:f,pageId:b,sectionId:"header-blogtop",serviceId:_,tapLogger:h,viewLogger:I},y.createElement(j.Z,{className:q().Anchor,targetUrl:(0,C.Z)(N.Z.BlogTop,{amebaId:f})},a.blog_title)))),y.createElement("div",{className:q().Container},y.createElement("section",{className:q().Section},y.createElement("h1",{className:q().Heading},"\u52d5\u753b\u4e00\u89a7"),y.createElement(J,{amebaId:f,isVideoLoading:r,pageType:b,useServiceId:u,useTrackTapLog:g,useTrackViewLog:p,videoList:n}),S&&y.createElement("div",{className:q().PaginationWrap},y.createElement(E.Pagination,{createUrl:current:s,linkFollowType:"all",total:x}))),y.createElement("div",{className:q().SideModule},y.createElement(K.r,{actionRoute:z.FD,amebaId:f,followButtonStatus:o,isFollowingUpperLimit:c,isOfficial:L,isTopBlogger:k,official:w,pageType:b,profile:T,trackTapLog:h,usePcFollow:m}))))},X=(0,P.w1)([q(),F()])(y.memo($,_())),ee=e=>{var{blog:a,blogger:t,videoList:n,isVideoLoading:r,videoPaging:i,followButtonStatus:o,isFollowingUpperLimit:l,pageNumber:c,useRouter:d=s.tv,useTrackTapLog:g=Z.Z,useTrackViewLog:p=T.Z,useServiceId:u=w.Z,usePcFollow:m=L.Z}=e,{match:v}=d(),{amebaId:f}=v.params,b=v.route.pageType;return y.createElement(y.Fragment,null,y.createElement(B,{amebaId:f,blogId:a.blog_id,blogTitle:a.blog_title,pageType:b,paging:i,seoSetting:t.seo_setting}),y.createElement(X,{blog:a,blogger:t,followButtonStatus:o,isFollowingUpperLimit:l,isVideoLoading:r,pageNumber:c,usePcFollow:m,useRouter:d,useServiceId:u,useTrackTapLog:g,useTrackViewLog:p,videoList:n,videoPaging:i}))},ae=y.memo(ee,_());function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",a=parseInt(e,10);return!a||a<1?1:a}var ne=function(){var e=(0,n.Z)((function*(e){var{dispatch:a,getState:t,match:n}=e,{params:r}=n,{amebaId:i}=r,o=yield a((0,m.Rs)(i));if(o&&o.error)"Not Found"===l()(o,"payload.error.message")?a((0,u.Qn)(i)):a((0,u.$F)(i));else{var c=(0,p.XJ)(t(),i),s=te(r.page);null===(yield a((0,h.Wk)(i,c,s,20)))||(0,d.A)(t(),i,s)&&a((0,u.Qn)(i))}}));return function(a){return e.apply(this,arguments)}}(),re=function(){var e=(0,n.Z)((function*(e){var{dispatch:a,getState:t,match:n}=e,{params:r}=n,{amebaId:i}=r,o=t().bloggerState.bloggerMap[i]||{},c=l()(o,["attribute","isOfficial"],!1),s=[a((0,v.wn)())];if(!c){var d=l()(o,["blog_genre","genre_code"],"");s.push(a((0,f.mn)(i,d)))}yield Promise.all(s),(0,g.jl)(t())&&(yield a((0,v.h$)())),yield a((0,b.fU)(i))}));return (),ie=(0,c.ee)((0,i.$j)(((e,a)=>{var{match:t}=a,{params:n}=t,{amebaId:r}=n,i=e.bloggerState,o=i.bloggerMap,c=i.blogMap,s=o[r]||{},d=c[s.blog],g=te(n.page),p=e.videoPaginateState,u=p.videoMap||{},m=p.videoPageMap["".concat(r,"/").concat(g)]||{},v=(m.keys||[]).map((),f=m.isLoading||!1,b=m.paging||{},h=e.followState,y=l()(h,["followActionMap","isUpperLimit"],!1);return{blog:d,blogger:s,videoList:v,isVideoLoading:f,videoPaging:b,followButtonStatus:Object.assign({amebaId:r},h.followMap[r]||{}),isFollowingUpperLimit:y,pageNumber:g}})),(0,r.provideHooks)({defer:ne,done:re}),(0,s.lB)(["match","location"]))(ae)},63014:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});var n=t(55752),r=t.n(n),i=t(62427),o=(e,a,t)=>{var n=(0,i.J)(e,a,t),o=r()(n,["paging","current_page"]);return 1!==t&&o!==t||!!n.hasErrors}},62427:(e,a,t)=>{"use strict";t.d(a,{J:()=>i});var n=t(55752),r=t.n(n),i=(e,a,t)=>r()(e,["videoPaginateState","videoPageMap","".concat(a,"/").concat(t)],{})},74309:(e,a,t)=>{"use strict";t.d(a,{mn:()=>g,uq:()=>s,_4:()=>d});var n=t(66062),r=t(55752),i=t.n(r),o=t(18274),l=t(70709);var c=t(86478),s=(0,o.H)(((e,a,t)=>function(){var r=(0,n.Z)((function*(n,r){if(i()(r(),["officialHashTagState","officialHashtagRankingMap",a],null))return null;try{var o=yield function(e,a,t){var n={limit:t},r=(0,l.ui)("".concat(window.process.env.API_HASHTAG_PUB,"/v2/article/tag/ranking/").concat(e,"/blogpub/").concat(encodeURIComponent(a)),n);return fetch(r)}(e,a,t),s=yield o.json();return n(((e,a,s))}catch(d){return n(((e,a,t)=>({type:c.kF,payload:{bloggerType:e,hashtag:a,error:t},error:!0}))(e,a,d))}}));return function(e,a){return r.apply(this,arguments)}}())),d=(0,o.H)(((e,a)=>function(){var t=(0,n.Z)((function*(t,n){if(i()(n(),["officialHashTagState","officialTrendHashTagMap",e],""))return null;try{var r=yield function(e){var a={limit:arguments.length>1&&void 0!==arguments[1]?arguments[1]:3},t=(0,l.ui)("".concat(window.process.env.API_HASHTAG_PUB,"/v1/genre/official/hot/").concat(e),a);return fetch(t)}(e,a),o=yield r.json();return t(((e,a)=>({type:c._9,payload:{genreCode:e,hashtagList:a}}))(e,o))}catch(s){return t(((e,a)=>({type:c._Q,payload:{genreCode:e,error:a},error:!0}))(e,s))}}));return function(e,a){return t.apply(this,arguments)}}())),g=(0,o.H)(((e,a)=>function(){var t=(0,n.Z)((function*(t,n){if(i()(n(),["officialHashtagState","officialHashtagHistoryMap",e]))return null;try{var r=yield function(e,a){var t={tagFilter:1};a&&(t.genreCode=a);var n=(0,l.ui)("".concat(window.process.env.API_HASHTAG_PUB,"/v2/tag/history/").concat(e),t);return fetch(n)}(e,a),o=yield r.json();return t(((e,o))}catch(s){return t(((e,a)=>({type:c.tx,payload:{amebaId:e,error:a},error:!0}))(e,s))}}));return ()))},82282:(e,a,t)=>{"use strict";t.d(a,{Z:);var n=t(3e4),r=(t(76955),t(16884)),i=t(75457);function o(e,a){var{amebaId:t,entryId:o,themeId:l,entryYm:c}=a;if(!t)return[];var s="";switch(e){case i.Z.BlogTop:s=(0,r.Z)(i.Z.BlogTop,{amebaId:t});break;case i.Z.Entry:o&&(s=(0,r.Z)(i.Z.Entry,{amebaId:t,entryId:o}));break;case i.Z.Theme:l&&(s=(0,r.Z)(i.Z.Theme,{amebaId:t,themeId:l}));break;case i.Z.Archive:c&&(s=(0,r.Z)(i.Z.Archive,{amebaId:t,entryYm:c}))}var d=[];return s&&d.push((0,n.Z)("link",{href:s,rel:"canonical"},"seo_canonical")),d}function l(e,a){var{amebaId:t,paging:o,entryYm:l,themeId:c}=a;if(!o||!t)return[];var s=o.prev_page,d=o.next_page,g=o.current_page,p=s<g&&s>0,u=d>g,m="",v="";switch(e){case i.Z.BlogTop:m=p?(0,r.Z)(i.Z.BlogTop,{amebaId:t,page:s}):"",v=u?(0,r.Z)(i.Z.BlogTop,{amebaId:t,page:d}):"";break;case i.Z.Archive:m=p?(0,r.Z)(i.Z.Archive,{amebaId:t,entryYm:l,page:s}):"",v=u?(0,r.Z)(i.Z.Archive,{amebaId:t,entryYm:l,page:d}):"";break;case i.Z.Theme:m=p?(0,r.Z)(i.Z.Theme,{amebaId:t,themeId:c,page:s}):"",v=u?(0,r.Z)(i.Z.Theme,{amebaId:t,themeId:c,page:d}):"";break;case i.Z.Reader:m=p?(0,r.Z)(i.Z.Reader,{amebaId:t,page:s}):"",v=u?(0,r.Z)(i.Z.Reader,{amebaId:t,page:d}):""}var f=[];return m&&f.push((0,n.Z)("link",{href:m,rel:"prev"},"seo_prev")),v&&f.push((0,n.Z)("link",{href:v,rel:"next"},"seo_next")),f}function c(e,a){var{seoSetting:t={},prFlg:r,paging:o,totalReaders:l}=a,c="";if(t.noindex||!1)c="noindex,nofollow";else switch(e){case i.Z.Entry:c="1"===r?"noindex":"2"===r?"nofollow,max-image-preview:large":"3"===r?"noindex,nofollow":"max-image-preview:large";break;case i.Z.Reader:(0===l||o&&1===o.current_page)&&(c="noindex,nofollow");break;case i.Z.Theme:case i.Z.BlogTop:case i.Z.Archive:0===o.total_count&&(c="noindex,nofollow");break;case i.Z.AmemberEntry:c="noindex,follow";break;case i.Z.VideoList:o&&0===o.total_count&&(c="noindex,nofollow")}var s=[];return c&&s.push((0,n.Z)("meta",{content:c,name:"robots"},"seo_robots")),s}function s(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!a.amebaId)return[];var t=c(e,a),n=l(e,a),r=[];return a.paging&&1!==a.paging.current_page||r.push(...o(e,a)),[...t,...n,...r]}},42814:(e,a,t)=>{var n=t(18300)((function(e){return e[1]}));n.push([e.id,"._1sCGFhQx{display:grid;gap:24px 16px;grid-template-columns:repeat(3,1fr);list-style:none;margin:0;padding:0}@media (min-width:1168px){._1sCGFhQx{grid-template-columns:repeat(4,1fr)}}._eKdJB3zc{min-width:0}._2fRhDaOz{margin-top:40px}._PsZMjvT5{color:#08121a;font-size:14px;line-height:1.6;margin:0 0 16px;padding:0;text-align:center}._3zD6TkhT{font-size:16px;margin:0 auto;width:240px}._3zD6TkhT .spui-LinkButton{text-decoration:none}._3zD6TkhT .spui-LinkButton--neutral,._3zD6TkhT .spui-LinkButton--neutral:visited{color:var(--LinkButton--neutral-color)}",""]),n.locals={List:"_1sCGFhQx",ListItem:"_eKdJB3zc",EmptyContainer:"_2fRhDaOz",NoVideoMessage:"_PsZMjvT5",LinkButtonWrap:"_3zD6TkhT"},e.exports=n},16191:(e,a,t)=>{var n=t(18300)(();n.push([e.id,"._3B_2gSqD{border-bottom:1px solid rgba(8, 18, 26, 0.08)}._zHBBCL6T,._zHBBCL6T:hover,._zHBBCL6T:visited{color:inherit;text-decoration:none}._WLmy-Hmg{font-size:16px}._WLmy-Hmg,._WLmy-Hmg ._zHBBCL6T{color:#08121a}._WLmy-Hmg ._zHBBCL6T{display:inline-block;padding:40px 24px;width:100%}._1W1L1QOu{display:flex;justify-content:space-between;margin:0 24px;padding:24px 0 120px;width:calc(100% - 48px)}._3_lNmm6j{min-width:472px;width:100%}._1Im93mtF{color:#08121a;font-size:14px;font-weight:700;margin:0 0 24px}._2hrsZybl{font-size:16px;margin:40px auto 0}._2nZKibbf{min-width:300px;padding:0 0 0 40px}@media (min-width:1168px){._1W1L1QOu{margin:0 auto;width:1120px}}._2hrsZybl .spui-PaginationItem-link,._2hrsZybl .spui-PaginationItem-link:hover,._2hrsZybl .spui-PaginationItem-link:visited{color:rgba(8, 18, 26, 0.74);opacity:1;text-decoration:none}._2hrsZybl .spui-PaginationItem-link--first[aria-disabled],._2hrsZybl .spui-PaginationItem-link--last[aria-disabled],._2hrsZybl .spui-PaginationItem-link--next[aria-disabled],._2hrsZybl .spui-PaginationItem-link--prev[aria-disabled]{opacity:.3}._2hrsZybl .spui-Pagination-link,._2hrsZybl .spui-Pagination-link:hover,._2hrsZybl .spui-Pagination-link:visited{opacity:1;text-decoration:none}",""]),n.locals={Header:"_3B_2gSqD",Anchor:"_zHBBCL6T",HeaderTitle:"_WLmy-Hmg",Container:"_1W1L1QOu",Section:"_3_lNmm6j",Heading:"_1Im93mtF",PaginationWrap:"_2hrsZybl",SideModule:"_2nZKibbf"},e.exports=n},72705:(e,a,t)=>{var n=t(42814),r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=Object.defineProperty||function(e,a,t){e[a]=t.value};"string"==typeof n&&(n=[[e.id,n,""]]),e.exports=function(e){var a=r({},e.locals||{});return i(a,"_",{value:function(){return e}}),i(a,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),a}(n)},68610:(e,a,t)=>{var n=t(16191),r=Object.assign||i=Object.defineProperty||"string"==typeof n&&(n=[[e.id,n,""]]),e.exports=function(e){var a=r({},e.locals||{});return i(a,"_",{value:),i(a,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),a}(n)}}]);