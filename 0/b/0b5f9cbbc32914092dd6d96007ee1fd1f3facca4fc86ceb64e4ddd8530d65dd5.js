(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[8514],{10793:(e,t,r)=>{"use strict";r.d(t,{f:()=>s});var n=r(76955),a=r(52377),o=r(5154),i=r.n(o),c=r(54285);class s extends n.PureComponent{constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:i(),viewLogger:i()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}et params(){var{algorithmId:e,bloggerAmebaId:t,categoryId:r,subCategoryId:n,contentId:a,displayPosition:o,pageId:i,entryId:c,orderId:s,sectionId:d,serviceId:l,tagName:m}=this.props;return{algorithmId:e,bloggerAmebaId:t,categories:this.props.categories.filter((),categoryId:r,subCategoryId:n,contentId:a,displayPosition:o,pageId:i,entryId:c,orderId:s,sectionId:d,serviceId:l,tagName:m}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(s.intersectionListener||(s.intersectionListener=(0,c.T)({})),this.stopListen(),this.trigger=a.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=s.intersectionListener.listen(this.trigger,(e=>{(e.isIntersecting||e.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(e){var t=n.Children.only(this.props.children).props.onClick;t&&t(e),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var e=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(e=n.cloneElement(e,{onClick:this.handleClick})),e}}s.displayName="Tracker"},18958:35874:(e,t,r)=>{"use strict";r.d(t,{Vx:()=>l});var n=r(66062),a=r(18274),o=r(55752),i=r.n(o),c=r(82548),s=d=(e,t,r,n)=>({type:c.Ic,payload:{blogId:e,themeId:t,error:n,page:r},error:!0}),l=(0,a.H)((function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return function(){var o=(0,n.Z)((function*(n,o,l){var{fetchr:m}=l,p=r>0?(r-1)*a:0,h=parseInt(r,10),u=a,g=o(),y=g.themesState.themePageMap["".concat(t,"/").concat(h)];if(y&&y.data)return null;try{var b={amebaId:i()(g,["bloggerState","blogMap",e,"blog_name"],""),blogId:e,page:h,themeId:t,offset:p,limit:u};n({type:c._P,payload:b});var I=yield m.read("blogThemeEntries").params(b).end();return n(s(e,t,h,I.data))}catch(f){return n(d(e,t,h,f))}}));return function(e,t,r){return o.apply(this,arguments)}}()}))},63455:(e,t,r)=>{"use strict";r.d(t,{IM:()=>l,kt:()=>m});var n=r(66062),a=r(18274),o=r(55752),i=r.n(o),c=r(5663),s=r.n(c),d=r(61863),l=(0,a.H)((e=>function(){var t=(0,n.Z)((function*(t,r,n){var{fetchr:a}=n;if(!e)return null;var o=r();if(!s()(i()(o,["themesState","bloggerThemeIdsMap",e])))return null;try{var c=i()(o,["bloggerState","blogMap",e,"blog_name"],""),l=yield a.read("themes").params({amebaId:c,blogId:e}).end(),{themeIds:m,themeMap:p}=l.data;return t(((e,t,r)=>({type:d.vR,payload:{blogId:e,themeIds:t,themeMap:r}}))(e,m,p))}catch(h){return t((e=>({type:d.fl,payload:{error:e},error:!0}))(h))}}));return function(e,r,n){return t.apply(this,arguments)}}())),m=(0,a.H)(((e,t)=>function(){var r=(0,n.Z)((function*(r,n,a){var{fetchr:o}=a,c=n();if(-1!==i()(c,["themesState","bloggerThemeIdsMap",e],[]).indexOf(t))return null;try{var s=i()(c,["bloggerState","blogMap",e,"blog_name"],""),l=yield o.read("themeInfo").params({amebaId:s,blogId:e,themeId:t}).end(),{themeMap:m}=l.data;return r(((e,t,m))}catch(p){return r((e=>({type:d.tf,payload:{error:e},error:!0}))(p))}}));return ()))},39954:(e,t,r)=>{"use strict";r.d(t,{x:()=>c});var n=r(91938),a=r.n(n),o=r(76955);function i(e){var{children:t,placeholder:r=null}=e,[n,a]=(0,o.useState)(!1);return(0,o.useEffect)((,[]),n?t:r}i.propTypes={children:a().node.isRequired,placeholder:a().node};var c=(0,o.memo)(i)},96914:(e,t,r)=>{"use strict";r.d(t,{F:()=>u});var n=r(3e4),a=(r(91938),r(76955)),o=r(55752),i=r.n(o),c=r(29466),s=r.n(c),d=r(5663),l=r.n(d),m=r(64530),p=r(75457),h=r(73324);class u extends a.Component{shouldComponentUpdate(e){return!(s()(this.props.blog,e.blog)&&s()(this.props.entries,e.entries)&&s()(this.props.paging,e.paging)&&s()(this.props.profile,e.profile)&&s()(this.props.seoSetting,e.seoSetting))}render(){var{blog:e,entries:t,paging:r,profile:a,seoSetting:o}=this.props,c=e.blog_name||"",s=a.nickname||c||"",d=e.blog_title||"",u=r.current_page||1,g=i()(t,[0,"theme_name"],"\u30d6\u30ed\u30b0"),y=i()(t,[0,"theme_id"],""),b=[],I=[],f=(0,h.ZP)(p.Z.Theme,{amebaId:c,hasContents:!l()(t),paging:r,seoSetting:o,themeId:y});b.push(...f.meta),I.push(...f.link);var v="".concat(s,"\u3055\u3093\u306e\u30d6\u30ed\u30b0\u30c6\u30fc\u30de\u3001\u300c").concat(g,"\u300d\u306e\u8a18\u4e8b\u4e00\u89a7\u30da\u30fc\u30b8\u3067\u3059\u3002");return b.push({name:"description",content:v}),(0,n.Z)(m.c,{link:I,meta:b,title:(()=>{var e=u>1?" -".concat(u,"\u30da\u30fc\u30b8\u76ee"):"";return"".concat(g,"\uff5c").concat(d).concat(e)})()})}}u.displayName="Head"},36509:(e,t,r)=>{"use strict";r.d(t,{IT:()=>u,O4:()=>g,WW:()=>I,oK:()=>y});var n=r(5663),a=r.n(n),o=r(43177),i=r.n(o),c=r(12943),s=r.n(c),d=r(16884),l=r(75457),m=r(77948),p=r(18958),h=r(19008);function u(e,t){return"amember"===t.publish_flg||"2"===t.publish_flg?(0,d.Z)(l.Z.AmemberEntry,{amebaId:e,entryId:t.entry_id}):(0,d.Z)(l.Z.Entry,{amebaId:e,entryId:t.entry_id})}function g(e,t){var r=u(e,t);return"https://cs.ameba.jp/inq/inquiry/vio?targetAmebaId=".concat(e,"&url=").concat(r,"&service=blog")}function y(e,t){if(a()(e)||!t)return!1;if(!a()(e)&&!e.entry_created_datetime)return!1;var r=i()(new Date,m.Z.DEFAULT_DATE),n=i()(e.entry_created_datetime,m.Z.DEFAULT_DATE);return s()(r,n)>t}function b(e){!function(e){window.YT&&window.YT.Player?e():(window.onYouTubeIframeAPIReady=()=>{window.YT.loaded&&window.YT.Player?e():window.YT.ready&&"function"==typeof window.YT.ready&&window.YT.ready(()},(0,h.v)("https://www.youtube.com/iframe_api").catch((e=>{console.warn(e)})))}((()=>{!function(e){var t=e.querySelectorAll('iframe[src^="https://www.youtube.com/embed/"]'),r=[],n=e=>{e.data===window.YT.PlayerState.PLAYING&&r.forEach((t=>{t!==e.target&&t.pauseVideo()}))};t.forEach((e=>{var t=new window.YT.Player(e,{events:{onStateChange:n}});r.push(t)}))}(e)}))}function I(e){e&&(null!==e.querySelector("blockquote.twitter-tweet")&&(0,h.v)("https://platform.twitter.com/widgets.js").then((()=>{window.twttr&&window.twttr.widgets&&window.twttr.widgets.load()})).catch((e=>{console.warn(e)})),null!==e.querySelector('blockquote[class="instagram-media"]')&&(0,h.v)("https://platform.instagram.com/en_US/embeds.js").then((()=>{window.instgrm&&window.instgrm.Embeds&&window.instgrm.Embeds.process()})).catch((e=>{console.warn(e)})),null!==e.querySelector(".pickCreative_root")&&(0,h.v)("".concat(window.process.env.HTTP_PATH_STAT,"/ameblo/pick/pick_sdk-").concat(p.C,".js")).then(().catch((),null!==e.querySelector('iframe[src^="https://www.youtube.com/embed/"]')&&b(e))}},16884:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(75457),a=e=>{var{amebaId:t,entryId:r,vnm:n}=e;return t&&r?"/".concat(t,"/video-").concat(r,".html").concat(n?"?vnm=".concat(n):""):""};function o(e,t){var{amebaId:r,entryId:o,themeId:i,entryYm:c,imageId:s,vnm:d,day:l,page:m=1}=t,p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.process.env.HTTP_PATH_AMEBLO;if(!r||!e)return"";var h="".concat(p,"/").concat(r),u="";switch(e){case n.Z.BlogTop:return u=m>1?"page-".concat(m,".html"):"","".concat(h,"/").concat(u);case n.Z.EntryList:return u=m>1?"-".concat(m):"","".concat(h,"/entrylist").concat(u,".html");case n.Z.AmemberEntryList:return u=m>1?"-".concat(m):"","".concat(h,"/amemberentrylist").concat(u,".html");case n.Z.ArchiveTop:return"".concat(h,"/archivetop.html");case n.Z.Archive:if(c)return u=m>1?"".concat(m):"","".concat(h,"/archive").concat(u,"-").concat(c,".html");console.error("PageType.Archive: entryYm is undefined.");break;case n.Z.Day:if(l)return u=m>1?"".concat(m):"","".concat(h,"/day").concat(u,"-").concat(l,".html");console.error("PageType.Day: day is undefined.");break;case n.Z.ThemeTop:return"".concat(h,"/themetop.html");case n.Z.Theme:if(i)return u=m>1?"".concat(m):"","".concat(h,"/theme").concat(u,"-").concat(i,".html");console.error("PageType.Theme: themeId is undefined.");break;case n.Z.PopularRecentList:return u=m>1?"-".concat(m):"","".concat(h,"/popularrecentlist").concat(u,".html");case n.Z.Entry:if(o)return u=m>1?"".concat(m):"","".concat(h,"/entry").concat(u,"-").concat(o,".html");console.error("PageType.Entry: entryId is undefined.");break;case n.Z.ImageList:return u=m>1?"-".concat(m):"",c?"".concat(h,"/imagelist-").concat(c).concat(u,".html"):"".concat(h,"/imagelist.html");case n.Z.Image:if(o&&s)return"".concat(h,"/image-").concat(o,"-").concat(s,".html");console.error("PageType.Image: entryId or imageId is undefined.");break;case n.Z.VideoList:return u=m>1?"-".concat(m):"","".concat(h,"/videolist").concat(u,".html");case n.Z.Video:if(o)return"".concat(p).concat(a({amebaId:r,entryId:o,vnm:d}));console.error("PageType.Video: entryId is undefined.");break;case n.Z.IineEntry:if(o)return"".concat(h,"/iine_entry-").concat(o,".html");console.error("PageType.IineEntry: entryId is undefined.");break;case n.Z.Comment:if(u=m>1?"page-".concat(m,".html"):"",o)return"".concat(h,"/comment-").concat(o,"/").concat(u);console.error("PageType.Comment: entryId is undefined.");break;case n.Z.Reblog:if(u=m>1?"page-".concat(m,".html"):"",o)return"".concat(h,"/reblog-").concat(o,"/").concat(u);console.error("PageType.Reblog: entryId is undefined.");break;case n.Z.MessageBoard:return"".concat(h,"/message-board.html");case n.Z.Reader:return u=m>1?"-".concat(m):"","".concat(h,"/reader").concat(u,".html");case n.Z.Favorite:return u=m>1?"-".concat(m):"","".concat(h,"/favorite").concat(u,".html");case n.Z.Bookmark:return u=m>1?"-".concat(m):"","".concat(h,"/bookmark").concat(u,".html");case n.Z.AmemberEntry:if(o)return"".concat(window.process.env.HTTP_PATH_AMEBLO,"/").concat(r,"/amemberentry-").concat(o,".html");console.error("PageType.AmemberEntry: entryId is undefined.");break;case n.Z.ImageEmbed:if(o&&s)return"".concat(window.process.env.HTTP_PATH_EMBED,"/p/embed/").concat(r,"/image-").concat(o,"-").concat(s,".html");console.error("PageType.ImageEmbed: entryId or imageId is undefined.");break;case n.Z.SkinPreview:return"";default:console.error("PageType is not match.")}return""}},73324:(e,t,r)=>{"use strict";r.d(t,{YQ:()=>c,Yz:()=>s,Z2:()=>d,ZP:);var n=r(55752),a=r.n(n),o=r(75457),i=r(16884);function c(e,t,r){var n=t>1?" -".concat(t,"\u30da\u30fc\u30b8\u76ee"):"";switch(e){case o.Z.BlogTop:case o.Z.SkinPreview:return"".concat(r).concat(n)}return""}function s(e,t,r){if(1!==e||0===t.length)return"";var n=a()(t,[0,"entry_title"],""),o=!!a()(t,[0,"image_url"]),i="";return!!a()(t,[0,"video_thumbnail_url"])?i="\uff08\u52d5\u753b\u3042\u308a\uff09":o&&(i="\uff08\u753b\u50cf\u3042\u308a\uff09"),"".concat(r,"\u3055\u3093\u306e\u30d6\u30ed\u30b0\u3067\u3059\u3002\u6700\u8fd1\u306e\u8a18\u4e8b\u306f\u300c").concat(n).concat(i,"\u300d\u3067\u3059\u3002")}function d(e,t){var{amebaId:r,entryId:n,themeId:a,entryYm:c}=t;switch(e){case o.Z.BlogTop:case o.Z.EntryList:return(0,i.Z)(e,{amebaId:r});case o.Z.Entry:return(0,i.Z)(e,{amebaId:r,entryId:n});case o.Z.Theme:return(0,i.Z)(e,{amebaId:r,themeId:a});case o.Z.Archive:return(0,i.Z)(e,{amebaId:r,entryYm:c})}return""}function l(e,t){var{amebaId:r,paging:n,entryId:a,entryYm:c,themeId:s,day:d}=t,l=[];if(!n||!r)return{link:l};var m=n.prev_page,p=n.next_page,h=n.current_page,u=n.max_page,g=n.order,y=m<h&&m>0&&u>1,b=p>h,I="",f="";switch(e){case o.Z.BlogTop:case o.Z.Reader:case o.Z.Favorite:case o.Z.Bookmark:case o.Z.AmemberEntryList:I=y?(0,i.Z)(e,{amebaId:r,page:m}):"",f=b?(0,i.Z)(e,{amebaId:r,page:p}):"";break;case o.Z.EntryList:I=y?(0,i.Z)(e,{amebaId:r,page:m,order:g}):"",f=b?(0,i.Z)(e,{amebaId:r,page:p,order:g}):"";break;case o.Z.Entry:I=y?(0,i.Z)(e,{amebaId:r,entryId:a,page:m}):"",f=b?(0,i.Z)(e,{amebaId:r,entryId:a,page:p}):"";break;case o.Z.Theme:I=y?(0,i.Z)(e,{amebaId:r,themeId:s,page:m,order:g}):"",f=b?(0,i.Z)(e,{amebaId:r,themeId:s,page:p,order:g}):"";break;case o.Z.Archive:case o.Z.ArchiveList:I=y?(0,i.Z)(e,{amebaId:r,entryYm:c,page:m,order:g}):"",f=b?(0,i.Z)(e,{amebaId:r,entryYm:c,page:p,order:g}):"";break;case o.Z.Day:I=y?(0,i.Z)(e,{amebaId:r,day:d,page:m}):"",f=b?(0,i.Z)(e,{amebaId:r,day:d,page:p}):"";break;case o.Z.ImageList:case o.Z.Image:case o.Z.Video:}return I&&l.push({href:I,rel:"prev"}),f&&l.push({href:f,rel:"next"}),{link:l}}function m(e,t){var{seoSetting:r={},prFlg:n,paging:a={},hasContents:i,isReblog:c}=t,s=r.noindex||!1,d=a.current_page||1;if(!e||s||!i)return"noindex,nofollow";switch(e){case o.Z.BlogTop:case o.Z.EntryList:if(d>1)return"noindex,follow";break;case o.Z.Day:case o.Z.Reader:case o.Z.Favorite:case o.Z.Bookmark:case o.Z.AmemberEntryList:case o.Z.AmemberEntry:case o.Z.ImageList:case o.Z.Image:return"noindex,follow";case o.Z.EntryPreview:case o.Z.SkinPreview:return"noindex,nofollow";case o.Z.Entry:return d>1||c?"noindex,follow":"1"===n?"noindex":"2"===n?"nofollow,max-image-preview:large":"3"===n?"noindex,nofollow":"max-image-preview:large"}return""}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],n=[];if(!e||!t.amebaId)return{meta:r,link:n,isShowAndroidAlternate:!1,isShowMbAlternate:!1};var o=l(e,t);n.push(...o.link);var i=m(e,t);if(i&&(r.push({name:"robots",content:i}),-1!==i.indexOf("noindex")))return{meta:r,link:n,isShowAndroidAlternate:!1,isShowMbAlternate:!1};var c=a()(t,["paging","current_page"],1);if(c>1)return{meta:r,link:n,isShowAndroidAlternate:!0,isShowMbAlternate:!1};var s=d(e,t);return s&&n.push({rel:"canonical",href:s}),{meta:r,link:n,isShowAndroidAlternate:!0,isShowMbAlternate:!0}}},12943:52361:]);