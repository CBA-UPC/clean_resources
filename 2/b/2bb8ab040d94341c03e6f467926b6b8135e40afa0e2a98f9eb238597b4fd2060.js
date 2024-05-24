(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[1698],{48516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(76955),a=n(62869),i=n.n(a),o=n(5154),l=n.n(o),c=n(51650),s=class p extends r.PureComponent{static get defaultProps(){return{children:null,className:"",targetUrl:void 0,onClick:l(),onMouseEnter:l()}}sSpaTargetLink(e){var{pathname:t,hostname:n}=e,r=n===new URL(window.process.env.HTTP_PATH_AMEBLO).hostname,a="/"===t,i="/accessibility"===t,[o,l]=t.split("/"),c=/_/.test(l);return r&&!(a||i||c)}handleClick(e){i()(this.props.onClick)&&this.props.onClick(e)}render(){var e,t=this.props,{children:n,className:a,targetUrl:i,onMouseEnter:o}=t,l=s(t,["children","className","targetUrl","onMouseEnter"]);if(void 0===i)return r.createElement("a",Object.assign({className:a},l),n);try{e=new URL(i)}catch(u){e=null}if(e&&this.isSpaTargetLink(e)){var p=e.pathname,g=e.search?"".concat(e.search):"",d=e.hash?"".concat(e.hash):"";return r.createElement(c.rU,Object.assign({className:a,to:"".concat(p).concat(g).concat(d),onClick:this.handleClick,onMouseEnter:o},l),n)}return r.createElement("a",Object.assign({className:a,href:i,onClick:this.handleClick,onMouseEnter:o},l),n)}}p.displayName="AnchorBlock"},19589:(e,t,n)=>{"use strict";n.d(t,{p:()=>h});n(91938);var r=n(76955),a=n(29466),i=n.n(a),o=n(45525),l=n(55382),c=n.n(l),s=n(64214),p=n(66003),g=n(72852),d=n.n(g);function u(e,t){return e.alt===t.alt&&e.className===t.className&&e.disableLazy===t.disableLazy&&e.hasThumb===t.hasThumb&&e.height===t.height&&e.noImageSize===t.noImageSize&&e.noImageSrc===t.noImageSrc&&e.src===t.src&&e.width===t.width&&i()(e.style,t.style)&&e.withBackgroundColor===t.withBackgroundColor}var m=e=>{var[t,n]=r.useState(!1),a=r.useCallback((,[]);if(!e.hasThumb){var i={height:"".concat(e.noImageSize,"px"),width:"".concat(e.noImageSize,"px")};return r.createElement("div",{className:d().Block,style:i},r.createElement("span",{className:d().NoImageBlock},"no image"))}var o=t?e.noImageSrc:e.src,l=e.disableLazy?d().Block:d().BlockLoading;return r.createElement(p.j,{alt:e.alt,className:c()(e.withBackgroundColor?d().WithBackgroundColor:"",e.className||l),disableLazy:e.disableLazy,height:(0,s.W)(e.height),src:o,srcSet:e.srcSet,style:e.style,width:(0,s.W)(e.width),onError:a})};m.defaultProps={alt:"",className:"",disableLazy:!1,hasThumb:!0,noImageSize:80,noImageSrc:"",src:"",srcSet:"",style:{},withBackgroundColor:!1};var h=(0,o.w1)(d())(r.memo(m,u))},17559:(e,t,n)=>{"use strict";n.d(t,{xu:()=>d});var r=n(66062),a=n(55752),i=n.n(a),o=n(18274);var l=n(7940),c=n(82195);var s=(0,o.H)((e=>function(){var t=(0,r.Z)((function*(t,n,r){var{fetchr:a}=r;if(i()(n(),["genreState","themeGenreMap","mappingList"]))return null;try{return t(function(e){return{type:c.rX,payload:{genreList:e}}}((yield a.read("themeGenreMapping").params({genreCode:e}).end()).data))}catch(o){return t(function(e){return{type:c.Fl,payload:{error:e},error:!0}}(o))}}));return ())),p=n(85729);function g(e,t){return{type:p.u$,payload:{amebaId:e,genreCode:t}}}(0,o.H)(((e,t)=>function(){var n=(0,r.Z)((function*(n,r){if(i()(r(),["genreState","blogGenreMap",e],""))return null;try{var a=yield function(e){var t="".concat(window.process.env.API_GENRES,"/v1/genres/").concat(e);return fetch(t)}(t),o=yield a.json();return n(e,o.data))}catch(l){return n(function(e,t){return{type:p.JW,payload:{amebaId:e,error:t},error:!0}}(l))}}));return function(e,t){return n.apply(this,arguments)}}()));var d=(0,o.H)(((e,t)=>function(){var n=(0,r.Z)((function*(n,r){var a=i()(r(),["genreState","genreCodeMap",e],null);if(null!==a)return null;var o=i()(r(),["bloggerState","bloggerMap",e,"blog_genre"],{}),p=o.relation||{};if(t){if(""===(a=(p.to_official_blogger||{}).genre_code||""))a=((p.to_official_secondary_category||[])[0]||{}).genre_code||"";return n(g(e,a))}if((a=o.genre_code||"")&&"theme"!==(o.large_genre_code||"")){yield n(s(a));var d=i()(r(),["genreState","themeGenreMap","mappingList"],[]);yield n(function(e){return{type:c.TC,payload:{genreList:e}}}(d)),a=i()(r(),["genreState","themeGenreMap","themeGenreCode"],"")}if(""===a){yield n((0,l.OW)());var u=i()(r(),["genreState","genrePickupMap","genrePickupList"],[]);yield n((0,l.nD)(u)),a=i()(r(),["genreState","genrePickupMap","pickupGenreCode"],"")}return n(g(e,a))}));return function(e,t){return n.apply(this,arguments)}}()))},7940:(e,t,n)=>{"use strict";n.d(t,{OW:()=>p,Xq:()=>s,nD:()=>c});var r=n(66062),a=n(18274),i=n(55752),o=n.n(i);var l=n(28873);r p=(0,a.H)((()=>function(){var e=(0,r.Z)((function*(e,t){var n=o()(t(),["genreState","genrePickupMap","genrePickupList"],[]);if(!n||n.length>0)return null;try{var r=yield function(){var e="".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/blog/blogger/genres/pickup.json");return fetch(e)}();return e(yield r.json()))}catch(a){return e(function(e){return{type:l.lI,payload:{error:e},error:!0}}(a))}}));return ()))},68330:(e,t,n)=>{"use strict";n.d(t,{g:()=>i});var r=n(3e4),a=n(76955);n(91938);class i extends a.PureComponent{omponentDidMount(){this.handleMount()}andleMount(){var{maxLength:e,children:t}=this.props,n="undefined"!=typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(display: -webkit-box) and (-webkit-box-orient : vertical) and (-webkit-line-clamp: 2)")?t:this.stringTruncation(t,e);this.setState({viewText:n})}stringTruncation(e,t){if(!e)return"";var n=t-2;return e.length<=t||n<1?e:"".concat(e.substr(0,n),"\u2026")}render(){return(0,r.Z)(a.Fragment,{},void 0,this.state.viewText)}}i.displayName="PcClampLineText"},75441:(e,t,n)=>{"use strict";n.d(t,{T:);var r,a,i,o=n(3e4),l=n(76955),c=(n(91938),n(45525)),s=n(59226),p=n.n(s),g=n(10793),d=n(65495),u=n.n(d),m=(0,c.w1)(u())((i=a=class extends l.PureComponent{ender(){var{categoryId:e,children:t,contentId:n,pageType:r,path:a,sectionId:i,serviceId:l,tapLogger:c}=this.props;return(0,o.Z)("p",{className:u().MoreLink},void 0,(0,o.Z)(g.f,{categoryId:e,contentId:n,pageId:r,sectionId:i,serviceId:l,tapLogger:c},void 0,(0,o.Z)("a",{className:u().MoreLinkTarget,href:a},void 0,(0,o.Z)("span",{className:u().MoreLinkText},void 0,t),(0,o.Z)(p(),{"aria-hidden":"true",className:u().MoreLinkIcon}))))}},a.displayName="PcMoreLink",r=i))||r},91698:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var r=n(3e4),a=n(66062),i=(n(91938),n(76955)),o=n(55752),l=n.n(o),c=n(29466),s=n.n(c),p=n(5663),g=n.n(p),d=n(66948),u=n(97175),m=n(55382),h=n.n(m),f=n(7756),y=n(45525),_=n(28588),v=n.n(_),b=n(73614),T=n(7940),k=n(18274),x=n(8369),w=(0,k.H)(((e,t)=>function(){var n=(0,a.Z)((function*(n,r,a){var{fetchr:i}=a;if(!e)return null;var o=r().genreRankingState.genreRankingEntryMap[e]||{};if(!g()(o))return null;try{var l=yield i.read("genreRankingEntry").params({genreCode:e,limit:t}).end(),{data:c}=l;return n(((e,c.data,c.summary))}catch(s){return n(((e,t)=>({type:x._,payload:{genreCode:e,error:t},error:!0}))(e,s))}}));return function(e,t,r){return n.apply(this,arguments)}}())),C=n(33867);var L,I,Z,N=(0,k.H)({ttl:18e5},(()=>function(){var e=(0,a.Z)((function*(e,t,n){var{fetchr:r}=n,a=(t().genreMasterState||{}).genreMasterMap||{};if(!g()(a))return null;try{return e(function(e){return{type:C.t,payload:{data:e}}}((yield r.read("genreMaster").end()).data))}catch(i){return e(function(e){return{type:C.U,payload:{error:e},error:!0}}(i))}}));return function(t,n,r){return e.apply(this,arguments)}}())),O=n(5563),S=n(17559),P=n(48516),M=n(19589),R=n(10793),j=n(68330),E=n(75441),G=n(16884),H=n(75457),z=n(61306),B=n.n(z);function D(){return(D=(0,a.Z)((function*(e){var{dispatch:t,getState:n,match:r}=e,{params:a}=r,i=a.amebaId;yield Promise.all([t((0,b.Rs)(i)),t(N())]);var o=((n().bloggerState.bloggerMap[i]||{}).attribute||{}).isOfficial;if(yield t((0,S.xu)(i,o)),""===l()(n(),["genreState","genrePickupMap","pickupGenreCode"],"")){var c=l()(n(),["genreState","genreCodeMap",i],"");c&&(yield Promise.all([t(N()),t(w(c,5))]))}else{var s=l()(n(),"genreState.genrePickupMap.genrePickupList",[]);yield t((0,T.Xq)(s,3));var p=l()(n(),"genreState.genrePickupMap.genreRandomPickupList",[]);yield p.forEach(()}}))).apply(this,arguments)}var U=(0,d.$j)((function(e,t){var n,{match:r}=t,{params:a,route:i}=r,o=a.amebaId,c=i.pageType,s=e.bloggerState,p=e.genreState,g=e.genreRankingState,d=e.genreMasterState,u=((s.bloggerMap[o]||{}).attribute||{}).isOfficial,m=l()(p,["genreCodeMap",o],""),h=g.genreRankingEntryMap||{},f=e.genreRankingState.genreSummaryMap||{};return n=u?!!m:""===l()(p,["genrePickupMap","pickupGenreCode"],""),u||n?{genre:{genreCode:m,genreRankingList:h[m]||[],genreTitle:(f[m]||{}).genre_title||"",styleType:l()(d,["genreMasterMap",m],{}).style_type},isBelonging:n,isOfficial:u,pageType:c}:{genreEntryRankingList:((p.genrePickupMap||{}).genreRandomPickupList||[]).map((e=>({genreCode:e,genreTitle:(f[e]||{}).genre_title||"",genreRankingList:l()(h,e,[]).slice(0,3)}))),isBelonging:!1,isOfficial:u,pageType:c}}),{trackTapLog:O.XI})(L=(0,u.provideHooks)({done:)(L=(0,y.w1)(B())((Z=I=class extends i.Component{static get defaultProps(){return{genre:{genreCode:"",genreRankingList:[],genreTitle:"",styleType:""},genreEntryRankingList:[]}}shouldComponentUpdate(e){return this.props.isBelonging!==e.isBelonging||this.props.isOfficial!==e.isOfficial||this.props.pageType!==e.pageType||this.props.trackTapLog!==e.trackTapLog||!s()(this.props.genre,e.genre)||!s()(this.props.genreEntryRankingList,e.genreEntryRankingList)}renderGenreRankingList(){var{genreEntryRankingList:e}=this.props,t="".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/ameblo/pc/img/amebloJp/no-image-s.png"),n=e=>{var n=e&&e.image_thumbnail?"".concat(e.image_thumbnail,"?cpd=").concat(64):t;return(0,r.Z)(M.p,{alt:"",height:64,src:n,style:{height:64,width:64},width:64})},a=e.map(((e,t)=>{var a=e.genreRankingList.map(((t,a)=>{var o=B()["LabelRanking__No".concat(t.rank)];return(0,r.Z)("li",{className:B().ContentTypeGenreListItem},"".concat(t.ameba_id,"_").concat(t.entry_id),"closed"===t.public_status?(0,r.Z)(i.Fragment,{},void 0,n({}),(0,r.Z)("div",{className:B().ContentTypeGenreDescription},void 0,(0,r.Z)("p",{className:h()(B().LabelRanking,{[o]:t.rank<=3})},void 0,t.rank),(0,r.Z)("p",{className:B().ContentEmpty},void 0,"\u975e\u516c\u958b\u307e\u305f\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f"))):(0,r.Z)(R.f,{contentId:e.genreCode,orderId:"".concat(a+1),pageId:this.props.pageType,sectionId:"genre-article-ranking",serviceId:this.props.isOfficial?"official":"general",tapLogger:this.props.trackTapLog},void 0,(0,r.Z)(P.Z,{className:B().ListTarget,targetUrl:(0,G.Z)(H.Z.Entry,{amebaId:t.ameba_id,entryId:t.entry_id})},void 0,n(t),(0,r.Z)("div",{className:B().ContentTypeGenreDescription},void 0,(0,r.Z)("p",{},void 0,(0,r.Z)("span",{className:h()(B().LabelRanking,{[o]:t.rank<=3})},void 0,t.rank),(0,r.Z)("span",{className:B().ContentTypeGenreDescriptionTitle},void 0,t.blog_title)),(0,r.Z)("p",{className:B().LineClamp},void 0,(0,r.Z)(j.g,{maxLength:27},void 0,t.entry_title))))))}));return(0,r.Z)("li",{className:B().ContentTypeGenre},"".concat(e.genreCode,"_").concat(t),(0,r.Z)("p",{className:B().ContentTypeGenreTitle},void 0,(0,r.Z)("a",{className:B().ContentTypeGenreTitleTarget,href:"".concat(window.process.env.HTTP_PATH_GENRE,"/genres/").concat(e.genreCode)},void 0,e.genreTitle)),(0,r.Z)("ul",{className:B().ContentTypeGenreList},void 0,a))}));return(0,r.Z)("ul",{className:B().List},void 0,a)}renderGenreRankingText(){var{genre:e}=this.props,t=e.genreRankingList.slice(0,3).map(((t,n)=>{var a=t.video_thumbnail||t.image_thumbnail||"",o=f.N3.decode(t.short_article_text),l=a?39:54,c=B()["LabelRanking__No".concat(t.rank)];return(0,r.Z)("li",{className:B().ContentTypeText},"".concat(t.ameba_id,"_").concat(t.entry_id),"closed"===t.public_status?(0,r.Z)("p",{className:B().ContentEmptyText},void 0,(0,r.Z)("span",{className:h()(B().LabelRanking,{[c]:t.rank<=3})},void 0,t.rank),"\u975e\u516c\u958b\u307e\u305f\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f"):(0,r.Z)(R.f,{contentId:e.genreCode,orderId:"".concat(n+1),pageId:this.props.pageType,sectionId:"genre-article-ranking",serviceId:this.props.isOfficial?"official":"general",tapLogger:this.props.trackTapLog},void 0,(0,r.Z)(P.Z,{className:B().ListTarget,targetUrl:(0,G.Z)(H.Z.Entry,{amebaId:t.ameba_id,entryId:t.entry_id})},void 0,(0,r.Z)("div",{className:B().ContentTypeTextThumnail},void 0,(0,r.Z)(M.p,{alt:"",className:B().ContentTypeTextThumnailImage,height:40,src:"".concat(t.profile_image,"?cat=40"),style:{height:40,width:40},width:40})),(0,r.Z)("div",{className:B().ContentTypeTextHeading},void 0,(0,r.Z)("p",{className:B().ContentTypeTextHeadingTitle},void 0,(0,r.Z)("span",{className:h()(B().LabelRanking,{[c]:t.rank<=3})},void 0,t.rank),(0,r.Z)("span",{className:B().ContentTypeTextEntryTitle},void 0,t.entry_title)),t.nick_name&&(0,r.Z)("p",{className:B().ContentTypeTextNickname},void 0,t.nick_name)),t.short_article_text&&(0,r.Z)(i.Fragment,{},void 0,(0,r.Z)("p",{className:h()({[B().ContentTypeTextDescriptionImage]:!!a},B().ContentTypeTextDescription)},void 0,(0,r.Z)("span",{className:h()(B().LineClamp,B().LineClamp__Line3)},void 0,(0,r.Z)(j.g,{maxLength:l},void 0,o))),a&&(0,r.Z)(M.p,{alt:"",height:64,src:"".concat(a,"?cpd=64"),style:{height:64,width:64},width:64})))))}));return(0,r.Z)("ul",{className:h()(B().List,B().List__ContentTypeText)},void 0,t)}renderGenreRankingImage(){var{genre:e}=this.props,t=176,n="".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/ameblo/pc/img/amebloJp/no-image.png"),a=e=>{var a=e&&e.image_thumbnail?"".concat(e.image_thumbnail,"?cpd=").concat(t):n;return(0,r.Z)(M.p,{alt:e.entry_title||"NoImage",height:t,src:a,style:{height:t,width:t},width:t})},o=e.genreRankingList.map(((t,n)=>{var o=B()["LabelRanking__No".concat(t.rank)];return(0,r.Z)("li",{className:B().ContentTypeImage},"".concat(t.ameba_id,"_").concat(t.entry_id),"closed"===t.public_status?(0,r.Z)(i.Fragment,{},void 0,(0,r.Z)("div",{className:B().ContentTypeImageThumbnail},void 0,a({}),(0,r.Z)("div",{"aria-label":"\u30e9\u30f3\u30ad\u30f3\u30b0 ".concat(t.rank,"\u4f4d"),className:h()(B().LabelRanking,B().LabelRanking__ContentTypeImage,{[o]:t.rank<=3})},void 0,(0,r.Z)(v(),{"aria-hidden":"true",className:B().ContentTypeImageIcon}),(0,r.Z)("span",{},void 0,t.rank))),(0,r.Z)("p",{className:B().ImageTitleEmpty},void 0,"\u975e\u516c\u958b\u307e\u305f\u306f\u524a\u9664\u3055\u308c\u307e\u3057\u305f")):(0,r.Z)(R.f,{contentId:e.genreCode,orderId:"".concat(n+1),pageId:this.props.pageType,sectionId:"genre-article-ranking",serviceId:this.props.isOfficial?"official":"general",tapLogger:this.props.trackTapLog},void 0,(0,r.Z)(P.Z,{className:B().ListTarget,targetUrl:(0,G.Z)(H.Z.Entry,{amebaId:t.ameba_id,entryId:t.entry_id})},void 0,(0,r.Z)("div",{className:B().ContentTypeImageThumbnail},void 0,a(t),(0,r.Z)("div",{"aria-label":"\u30e9\u30f3\u30ad\u30f3\u30b0 ".concat(t.rank,"\u4f4d"),className:h()(B().LabelRanking,B().LabelRanking__ContentTypeImage,{[o]:t.rank<=3})},void 0,(0,r.Z)(v(),{"aria-hidden":"true",className:B().ContentTypeImageIcon}),(0,r.Z)("span",{},void 0,t.rank))),(0,r.Z)("p",{className:h()(B().ContentTypeImageText,B().LineClamp)},void 0,(0,r.Z)(j.g,{maxLength:21},void 0,t.entry_title)),(0,r.Z)("p",{className:B().ContentTypeImageTitle},void 0,t.blog_title))))}));return(0,r.Z)("ul",{className:h()(B().List,B().List__ContentTypeImage)},void 0,o)}render(){var e,{genre:t,genreEntryRankingList:n,isBelonging:a}=this.props;if(""===t.genreCode&&g()(n))return null;a?"text"===t.styleType?e=this.renderGenreRankingText():"image"===t.styleType&&(e=this.renderGenreRankingImage()):e=this.renderGenreRankingList();var i=a?"".concat(window.process.env.HTTP_PATH_GENRE,"/genres/").concat(t.genreCode,"/entries/ranking#rank5"):window.process.env.HTTP_PATH_GENRE;return(0,r.Z)("section",{className:B().Block},void 0,(0,r.Z)("h3",{className:B().Title},void 0,a?"\u30b8\u30e3\u30f3\u30eb\u4eba\u6c17\u8a18\u4e8b\u30e9\u30f3\u30ad\u30f3\u30b0 ".concat(t.genreTitle,"\u30b8\u30e3\u30f3\u30eb"):"\u30b8\u30e3\u30f3\u30eb\u4eba\u6c17\u8a18\u4e8b\u30e9\u30f3\u30ad\u30f3\u30b0"),e,(0,r.Z)(E.T,{categoryId:t.genreCode,pageType:this.props.pageType,path:i,sectionId:"genre-article-ranking-more",serviceId:this.props.isOfficial?"official":"general",tapLogger:this.props.trackTapLog},void 0,"\u7d9a\u304d\u3092\u898b\u308b"))}},I.displayName="PcFooterGenreRanking",L=Z))||L)||L)||L},64214:(e,t,n)=>{"use strict";n.d(t,{W:()=>r});var r=e=>{var t=Number(e);return Number.isNaN(t)?e:t}},59226:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(76955));t.default=function(e){return l.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",role:"img"},e),l.createElement("path",{d:"M9.41 21c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L16 12 8.71 4.71a.996.996 0 1 1 1.41-1.41l7.29 7.29c.78.78.78 2.05 0 2.83l-7.29 7.29c-.19.19-.45.29-.71.29Z"}))}},28588:function(e,t,n){"use strict";var r=this&&this.__assign||a=this&&this.__createBinding||(Object.create?,i=this&&this.__setModuleDefault||(Object.create?,o=this&&this.__importStar||Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(76955));t.default=,40112:(e,t,n)=>{var r=n(18300),a=n(55830),i=r((function(e){return e[1]}));i.i(a,"",!0),i.push([e.id,'._1g8R0KLz,._2ZRT7Mwb{position:relative;width:100%}._2ZRT7Mwb{}._JdNQmklx{color:#ccc;content:"no image";font-family:\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W6,\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3,Hiragino Kaku Gothic Pro,\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af,Helvetica,Arial,sans-serif;font-size:12px;left:0;margin:-.5em 0 0;position:absolute;text-align:center;top:50%;width:100%}._25tu5oLk{background-color:rgba(8, 18, 26, 0.04)}',""]),i.locals={Block:"_1g8R0KLz",BlockLoading:"_2ZRT7Mwb "+a.locals.Loading,NoImageBlock:"_JdNQmklx",WithBackgroundColor:"_25tu5oLk"},e.exports=i},13706:(e,t,n)=>{var r=n(18300)((function(e){return e[1]}));r.push([e.id,"._BL0a0NaL{letter-spacing:1px;text-align:right}._TPbSiakl{border-bottom:1px solid transparent;color:rgba(8, 18, 26, 0.74)!important;display:inline-block;font-size:14px;line-height:1.4;text-decoration:none}._TPbSiakl:hover{border-color:rgba(8, 18, 26, 0.74);color:inherit;text-decoration:none}._TPbSiakl:visited{color:inherit}._1w5trZ3S{font-size:14px;line-height:1;margin-right:4px;vertical-align:middle}._1rtijHUV{font-size:16px;vertical-align:middle}",""]),r.locals={MoreLink:"_BL0a0NaL",MoreLinkTarget:"_TPbSiakl",MoreLinkText:"_1w5trZ3S",MoreLinkIcon:"_1rtijHUV"},e.exports=r},93657:(e,t,n)=>{var r=n(18300),a=n(40112),i=r(();i.i(a,"",!0),i.push([e.id,"._2e1OHIf-{margin:0 auto 17px;text-align:left;width:980px}._2ZlDW6wL{color:#333;font-size:14px;font-weight:700;letter-spacing:1px;line-height:1}._3veWbxxv,._2ZlDW6wL{margin-bottom:15px}._3veWbxxv{background-color:#fff;padding:24px 24px 32px}._1Iz2Z8-_{padding:32px}._UfejuNTd{padding:24px 32px 32px}._3m_U1C_a{color:#333!important;display:block;letter-spacing:1px;text-decoration:none}._3m_U1C_a:hover,._3m_U1C_a:visited{color:inherit}._qVoycf7W{background-color:#ccc;color:#fff;display:inline-block;font-size:10px;font-weight:700;height:16px;line-height:16px;margin:0 8px 4px 0;text-align:center;vertical-align:middle;width:16px}._1Xa9FqyP{font-size:16px;height:24px;left:0;line-height:24px;position:absolute;top:0;width:40px}._3-kU-8XF{background-color:#cea65c}._15bIz2ws{background-color:#999}._1D5DfcdY{background-color:#b98353}._1jhALt1F{-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;line-height:1.5;overflow:hidden;text-overflow:ellipsis}._mAZGc7xX{-webkit-line-clamp:3}._3pZYYS-g{color:#333;display:inline-block;font-size:14px;padding:0;vertical-align:top;width:276px}._3pZYYS-g+._3pZYYS-g{margin-left:44px}._1lem4vbd{font-size:12px;letter-spacing:1px;margin-bottom:12px}._2Sn4Xs0w{color:#2d8c3c!important;font-weight:400;text-decoration:none}._18c-HOXL{list-style-type:none;padding-left:0}._1InrDTTv{margin-bottom:8px}._1InrDTTv:last-child{margin-bottom:0}._IufqHFaU{box-sizing:border-box;display:inline-block;padding-left:8px;vertical-align:top;width:204px}._1oxeVPmO{display:inline-block;overflow:hidden;text-overflow:ellipsis;vertical-align:top;white-space:nowrap;width:172px}._1OCWjFKS{color:#333;display:inline-block;font-size:14px;padding:0;vertical-align:top;width:280px}._1OCWjFKS+._1OCWjFKS{margin-left:36px}._1C1QvxFC{display:inline-block;margin-bottom:8px;vertical-align:top}._16WZ32AX{border-radius:50%}._1sjZl5WU{box-sizing:border-box;display:inline-block;margin-bottom:8px;padding-left:8px;vertical-align:top;width:240px}._YxODwDGI{line-height:16px;margin-bottom:4px}._IV_KDaCd{box-sizing:border-box;display:inline-block;font-weight:700;vertical-align:middle;width:208px}._IV_KDaCd,._744mQBw6{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._744mQBw6{display:block;font-size:12px;line-height:1}._rIhVh27J{display:inline-block;vertical-align:top}._30HEY3Dk{box-sizing:border-box;padding-right:8px;width:216px}._2hf2VHqn{color:#333;display:inline-block;font-size:14px;padding:0;vertical-align:top;width:176px}._2hf2VHqn+._2hf2VHqn{margin-left:9px}._2Ulrglz2{margin-bottom:10px;position:relative}._359IcUYv{font-size:19px;vertical-align:-4px}._3JtYzaCz{font-size:16px;margin-bottom:4px}._3xqtk30x{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._xhfPdFer,._3xqtk30x{color:#999;font-size:12px}._OsfJkkaB{background-color:#f8f8f8;color:#999;margin:32px auto}._PVhcy6NF{color:#999;font-size:12px}",""]),i.locals={Block:"_2e1OHIf-",Title:"_2ZlDW6wL",List:"_3veWbxxv",List__ContentTypeText:"_1Iz2Z8-_",List__ContentTypeImage:"_UfejuNTd",ListTarget:"_3m_U1C_a",LabelRanking:"_qVoycf7W",LabelRanking__ContentTypeImage:"_1Xa9FqyP",LabelRanking__No1:"_3-kU-8XF",LabelRanking__No2:"_15bIz2ws",LabelRanking__No3:"_1D5DfcdY",LineClamp:"_1jhALt1F",LineClamp__Line3:"_mAZGc7xX",ContentTypeGenre:"_3pZYYS-g",ContentTypeGenreTitle:"_1lem4vbd",ContentTypeGenreTitleTarget:"_2Sn4Xs0w",ContentTypeGenreList:"_18c-HOXL",ContentTypeGenreListItem:"_1InrDTTv",ContentTypeGenreDescription:"_IufqHFaU",ContentTypeGenreDescriptionTitle:"_1oxeVPmO",ContentTypeText:"_1OCWjFKS",ContentTypeTextThumnail:"_1C1QvxFC",ContentTypeTextThumnailImage:"_16WZ32AX "+a.locals.Block,ContentTypeTextHeading:"_1sjZl5WU",ContentTypeTextHeadingTitle:"_YxODwDGI",ContentTypeTextEntryTitle:"_IV_KDaCd",ContentTypeTextNickname:"_744mQBw6",ContentTypeTextDescription:"_rIhVh27J",ContentTypeTextDescriptionImage:"_30HEY3Dk",ContentTypeImage:"_2hf2VHqn",ContentTypeImageThumbnail:"_2Ulrglz2",ContentTypeImageIcon:"_359IcUYv",ContentTypeImageText:"_3JtYzaCz",ContentTypeImageTitle:"_3xqtk30x",ContentEmpty:"_xhfPdFer",ContentEmptyText:"_OsfJkkaB",ContentEmptyImage:"_PVhcy6NF"},e.exports=i},72852:(e,t,n)=>{var r=n(40112),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=Object.defineProperty||function(e,t,n){e[t]=n.value};"string"==typeof r&&(r=[[e.id,r,""]]),e.exports=function(e){var t=a({},e.locals||{});return i(t,"_",{value:function(){return e}}),i(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(r)},65495:(e,t,n)=>{var r=n(13706),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=Object.defineProperty||function(e,t,n){e[t]=n.value};"string"==typeof r&&(r=[[e.id,r,""]]),e.exports=function(e){var t=a({},e.locals||{});return i(t,"_",{value:function(){return e}}),i(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(r)},61306:(e,t,n)=>{var r=n(93657),a=Object.assign||i=Object.defineProperty||"string"==typeof r&&(r=[[e.id,r,""]]),e.exports=function(e){var t=a({},e.locals||{});return i(t,"_",{value:),i(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(r)}}]);