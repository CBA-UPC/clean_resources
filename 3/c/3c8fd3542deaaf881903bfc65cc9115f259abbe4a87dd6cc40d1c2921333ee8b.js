(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[295],{10793:(e,t,r)=>{"use strict";r.d(t,{f:()=>c});var a=r(76955),n=r(52377),o=r(5154),i=r.n(o),s=r(54285);class c extends a.PureComponent{constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:i(),viewLogger:i()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}et params(){var{algorithmId:e,bloggerAmebaId:t,categoryId:r,subCategoryId:a,contentId:n,displayPosition:o,pageId:i,entryId:s,orderId:c,sectionId:p,serviceId:d,tagName:g}=this.props;return{algorithmId:e,bloggerAmebaId:t,categories:this.props.categories.filter((),categoryId:r,subCategoryId:a,contentId:n,displayPosition:o,pageId:i,entryId:s,orderId:c,sectionId:p,serviceId:d,tagName:g}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(c.intersectionListener||(c.intersectionListener=(0,s.T)({})),this.stopListen(),this.trigger=n.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=c.intersectionListener.listen(this.trigger,(e=>{(e.isIntersecting||e.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(e){var t=a.Children.only(this.props.children).props.onClick;t&&t(e),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var e=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(e=a.cloneElement(e,{onClick:this.handleClick})),e}}c.displayName="Tracker"},18958:20541:(e,t,r)=>{"use strict";r.d(t,{OQ:()=>l});var a=r(66062),n=r(18274),o=r(55752),i=r.n(o),s=r(15026),c=r(64123),p=r(83244),d=g=(e,t,r)=>({type:p.wn,payload:{blogId:e,page:t,error:(0,s.s)(r)},error:!0}),l=(0,n.H)((function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return function(){var n=(0,a.Z)((function*(a,n,o){var{fetchr:s}=o,l=t>0?(t-1)*r:0,m=parseInt(t,10),h=n().entryState.amemberPageMap["".concat(e,"/").concat(m)];if(h&&h.data)return null;try{a({type:p.v7,payload:{blogId:e,page:m}});var u={amebaId:i()(n(),["bloggerState","blogMap",e,"blog_name"],""),amember:!0,blogId:e,page:m,offset:l,limit:r},b=yield s.read(c.Z.BlogAmemberEntries).params(u).end();return a(d(e,m,b.data))}catch(y){return a(g(e,m,y))}}));return ()}))},39954:(e,t,r)=>{"use strict";r.d(t,{x:()=>s});var a=r(91938),n=r.n(a),o=r(76955);function i(e){var{children:t,placeholder:r=null}=e,[a,n]=(0,o.useState)(!1);return(0,o.useEffect)((,[]),a?t:r}i.propTypes={children:n().node.isRequired,placeholder:n().node};var s=(0,o.memo)(i)},58826:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var a,n,o,i=r(3e4),s=r(41185),c=r(66062),p=(r(91938),r(76955)),d=r(55752),g=r.n(d),l=r(29466),m=r.n(l),h=r(66948),u=r(97175),b=r(20541),y=r(73614),f=r(62986),v=r(81454),I=r(12942),w=r(5563),T=r(13248),Z=r(96216),k=r(82282);class P extends p.Component{static get defaultProps(){return{blog:{},entries:[],paging:{},seoSetting:{}}}shouldComponentUpdate(e){return this.props.amebaId!==e.amebaId||this.props.pageType!==e.pageType||!m()(this.props.blog,e.blog)||!m()(this.props.paging,e.paging)||!m()(this.props.seoSetting,e.seoSetting)}render(){var e=this.props.paging.current_page||1,t=e>1?" -".concat(e||1,"\u30da\u30fc\u30b8\u76ee"):"",r=(0,k.Z)(this.props.pageType,{amebaId:this.props.amebaId,seoSetting:this.props.seoSetting||{},paging:this.props.paging});return(0,i.Z)(Z.ql,{},void 0,(0,i.Z)("title",{},void 0,"\u30a2\u30e1\u30f3\u30d0\u30fc\u8a18\u4e8b\u4e00\u89a7\uff5c".concat(this.props.blog.blog_title||"").concat(t)),r)}}nction A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=parseInt(e,10);return!t||t<1?1:t}P.displayName="Head";var S=function(){var e=(0,c.Z)((function*(e){var{dispatch:t,getState:r,match:a}=e,{params:n}=a,o=n.amebaId,i=yield t((0,y.Rs)(o));if(i&&i.error)"Not Found"===g()(i,"payload.error.message")?t((0,I.Qn)(o)):t((0,I.$F)(o));else{var s=g()(r(),["bloggerState","bloggerMap",o,"blog"]),c=r().bloggerState.blogMap[s];if(c&&c.blog_id){var p=A(n.page);yield Promise.all([t((0,b.OQ)(c.blog_id,p,10)),t((0,f.Pi)(c.blog_id))])}else t((0,I.Qn)(o))}}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=(0,c.Z)((function*(e){var{dispatch:t,getState:r,match:a}=e,{params:n}=a,o=n.amebaId,i=g()(r(),["bloggerState","bloggerMap",o,"blog"]),s=A(n.page),c=(r().entryState.amemberPageMap["".concat(i,"/").concat(s)]||{}).data||[];t((0,v.l1)(i,c))}));return (),O=(0,h.$j)(((e,t)=>{var{match:r}=t,{params:a,route:n}=r,o=a.amebaId,i=e.bloggerState,s=e.entryState,c=s.entryMap,p=i.bloggerMap[o]||{},d=p.seo_setting||{},l=p.attribute||{},m=i.blogMap[p.blog]||{},h=(e.skinState.spSkinMap[p.blog]||{}).layout,u=n.pageType,b=g()(p,"official.image_protection_type")||"",y=A(a.page),f=s.amemberPageMap["".concat(m.blog_id,"/").concat(y)]||{},v=(f.data||[]).map((e=>L(L({},c[e]),s.entryReactionsMap[e]))),I=void 0===f.loading||f.loading,w=f.paging||{};return{amebaId:o,blog:m,bloggerAttribute:l,currentPage:y,entries:v,entryMap:c,imageProtectionType:b,layoutType:h,pageType:u,entriesLoading:I,paging:w,seoSetting:d}}),{trackTapLog:w.XI,trackViewLog:w.iG,fetchPageRequest:b.OQ})(a=(0,u.provideHooks)({defer:S,done:E})((o=n=class extends p.Component{houldComponentUpdate(e){return!(this.props.amebaId===e.amebaId&&this.props.currentPage===e.currentPage&&this.props.entriesLoading===e.entriesLoading&&this.props.imageProtectionType===e.imageProtectionType&&this.props.fetchPageRequest===e.fetchPageRequest&&this.props.layoutType===e.layoutType&&this.props.pageType===e.pageType&&this.props.trackTapLog===e.trackTapLog&&this.props.trackViewLog===e.trackViewLog&&m()(this.props.bloggerAttribute,e.bloggerAttribute)&&m()(this.props.blog,e.blog)&&m()(this.props.entries,e.entries)&&m()(this.props.paging,e.paging)&&m()(this.props.seoSetting,e.seoSetting))}render(){return(0,i.Z)("div",{},void 0,(0,i.Z)(P,{amebaId:this.props.amebaId,blog:this.props.blog,entries:this.props.entries,pageType:this.props.pageType,paging:this.props.paging,seoSetting:this.props.seoSetting}),(0,i.Z)(T.X,{amebaId:this.props.amebaId,blog:this.props.blog,bloggerAttribute:this.props.bloggerAttribute,bloggerType:this.props.bloggerAttribute.bloggerType,entries:this.props.entries,imageProtectionType:this.props.imageProtectionType,layoutType:this.props.layoutType,loading:this.props.entriesLoading&&this.props.entries.length<1,pageType:this.props.pageType,paging:this.props.paging,queryForFrm:"?frm=amember",trackTapLog:this.props.trackTapLog,trackViewLog:this.props.trackViewLog}))}},n.displayName="SpAmemberEntryList",a=o))||a)||a},36509:(e,t,r)=>{"use strict";r.d(t,{IT:()=>h,O4:()=>u,WW:()=>f,oK:()=>b});var a=r(5663),n=r.n(a),o=r(43177),i=r.n(o),s=r(12943),c=r.n(s),p=r(16884),d=r(75457),g=r(77948),l=r(18958),m=r(19008);function h(e,t){return"amember"===t.publish_flg||"2"===t.publish_flg?(0,p.Z)(d.Z.AmemberEntry,{amebaId:e,entryId:t.entry_id}):(0,p.Z)(d.Z.Entry,{amebaId:e,entryId:t.entry_id})}function u(e,t){var r=h(e,t);return"https://cs.ameba.jp/inq/inquiry/vio?targetAmebaId=".concat(e,"&url=").concat(r,"&service=blog")}function b(e,t){if(n()(e)||!t)return!1;if(!n()(e)&&!e.entry_created_datetime)return!1;var r=i()(new Date,g.Z.DEFAULT_DATE),a=i()(e.entry_created_datetime,g.Z.DEFAULT_DATE);return c()(r,a)>t}function y(e){!function(e){window.YT&&window.YT.Player?e():(window.onYouTubeIframeAPIReady=()=>{window.YT.loaded&&window.YT.Player?e():window.YT.ready&&"function"==typeof window.YT.ready&&window.YT.ready(()},(0,m.v)("https://www.youtube.com/iframe_api").catch((e=>{console.warn(e)})))}((()=>{!function(e){var t=e.querySelectorAll('iframe[src^="https://www.youtube.com/embed/"]'),r=[],a=e=>{e.data===window.YT.PlayerState.PLAYING&&r.forEach((t=>{t!==e.target&&t.pauseVideo()}))};t.forEach((e=>{var t=new window.YT.Player(e,{events:{onStateChange:a}});r.push(t)}))}(e)}))}function f(e){e&&(null!==e.querySelector("blockquote.twitter-tweet")&&(0,m.v)("https://platform.twitter.com/widgets.js").then((()=>{window.twttr&&window.twttr.widgets&&window.twttr.widgets.load()})).catch((e=>{console.warn(e)})),null!==e.querySelector('blockquote[class="instagram-media"]')&&(0,m.v)("https://platform.instagram.com/en_US/embeds.js").then((()=>{window.instgrm&&window.instgrm.Embeds&&window.instgrm.Embeds.process()})).catch((e=>{console.warn(e)})),null!==e.querySelector(".pickCreative_root")&&(0,m.v)("".concat(window.process.env.HTTP_PATH_STAT,"/ameblo/pick/pick_sdk-").concat(l.C,".js")).then(().catch((),null!==e.querySelector('iframe[src^="https://www.youtube.com/embed/"]')&&y(e))}},82282:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(3e4),n=(r(76955),r(16884)),o=r(75457);function i(e,t){var{amebaId:r,entryId:i,themeId:s,entryYm:c}=t;if(!r)return[];var p="";switch(e){case o.Z.BlogTop:p=(0,n.Z)(o.Z.BlogTop,{amebaId:r});break;case o.Z.Entry:i&&(p=(0,n.Z)(o.Z.Entry,{amebaId:r,entryId:i}));break;case o.Z.Theme:s&&(p=(0,n.Z)(o.Z.Theme,{amebaId:r,themeId:s}));break;case o.Z.Archive:c&&(p=(0,n.Z)(o.Z.Archive,{amebaId:r,entryYm:c}))}var d=[];return p&&d.push((0,a.Z)("link",{href:p,rel:"canonical"},"seo_canonical")),d}function s(e,t){var{amebaId:r,paging:i,entryYm:s,themeId:c}=t;if(!i||!r)return[];var p=i.prev_page,d=i.next_page,g=i.current_page,l=p<g&&p>0,m=d>g,h="",u="";switch(e){case o.Z.BlogTop:h=l?(0,n.Z)(o.Z.BlogTop,{amebaId:r,page:p}):"",u=m?(0,n.Z)(o.Z.BlogTop,{amebaId:r,page:d}):"";break;case o.Z.Archive:h=l?(0,n.Z)(o.Z.Archive,{amebaId:r,entryYm:s,page:p}):"",u=m?(0,n.Z)(o.Z.Archive,{amebaId:r,entryYm:s,page:d}):"";break;case o.Z.Theme:h=l?(0,n.Z)(o.Z.Theme,{amebaId:r,themeId:c,page:p}):"",u=m?(0,n.Z)(o.Z.Theme,{amebaId:r,themeId:c,page:d}):"";break;case o.Z.Reader:h=l?(0,n.Z)(o.Z.Reader,{amebaId:r,page:p}):"",u=m?(0,n.Z)(o.Z.Reader,{amebaId:r,page:d}):""}var b=[];return h&&b.push((0,a.Z)("link",{href:h,rel:"prev"},"seo_prev")),u&&b.push((0,a.Z)("link",{href:u,rel:"next"},"seo_next")),b}function c(e,t){var{seoSetting:r={},prFlg:n,paging:i,totalReaders:s}=t,c="";if(r.noindex||!1)c="noindex,nofollow";else switch(e){case o.Z.Entry:c="1"===n?"noindex":"2"===n?"nofollow,max-image-preview:large":"3"===n?"noindex,nofollow":"max-image-preview:large";break;case o.Z.Reader:(0===s||i&&1===i.current_page)&&(c="noindex,nofollow");break;case o.Z.Theme:case o.Z.BlogTop:case o.Z.Archive:0===i.total_count&&(c="noindex,nofollow");break;case o.Z.AmemberEntry:c="noindex,follow";break;case o.Z.VideoList:i&&0===i.total_count&&(c="noindex,nofollow")}var p=[];return c&&p.push((0,a.Z)("meta",{content:c,name:"robots"},"seo_robots")),p}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!t.amebaId)return[];var r=c(e,t),a=s(e,t),n=[];return t.paging&&1!==t.paging.current_page||n.push(...i(e,t)),[...r,...a,...n]}},16884:(e,t,r)=>{"use strict";r.d(t,{Z:);var a=r(75457),n=e=>{var{amebaId:t,entryId:r,vnm:a}=e;return t&&r?"/".concat(t,"/video-").concat(r,".html").concat(a?"?vnm=".concat(a):""):""};function o(e,t){var{amebaId:r,entryId:o,themeId:i,entryYm:s,imageId:c,vnm:p,day:d,page:g=1}=t,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.process.env.HTTP_PATH_AMEBLO;if(!r||!e)return"";var m="".concat(l,"/").concat(r),h="";switch(e){case a.Z.BlogTop:return h=g>1?"page-".concat(g,".html"):"","".concat(m,"/").concat(h);case a.Z.EntryList:return h=g>1?"-".concat(g):"","".concat(m,"/entrylist").concat(h,".html");case a.Z.AmemberEntryList:return h=g>1?"-".concat(g):"","".concat(m,"/amemberentrylist").concat(h,".html");case a.Z.ArchiveTop:return"".concat(m,"/archivetop.html");case a.Z.Archive:if(s)return h=g>1?"".concat(g):"","".concat(m,"/archive").concat(h,"-").concat(s,".html");console.error("PageType.Archive: entryYm is undefined.");break;case a.Z.Day:if(d)return h=g>1?"".concat(g):"","".concat(m,"/day").concat(h,"-").concat(d,".html");console.error("PageType.Day: day is undefined.");break;case a.Z.ThemeTop:return"".concat(m,"/themetop.html");case a.Z.Theme:if(i)return h=g>1?"".concat(g):"","".concat(m,"/theme").concat(h,"-").concat(i,".html");console.error("PageType.Theme: themeId is undefined.");break;case a.Z.PopularRecentList:return h=g>1?"-".concat(g):"","".concat(m,"/popularrecentlist").concat(h,".html");case a.Z.Entry:if(o)return h=g>1?"".concat(g):"","".concat(m,"/entry").concat(h,"-").concat(o,".html");console.error("PageType.Entry: entryId is undefined.");break;case a.Z.ImageList:return h=g>1?"-".concat(g):"",s?"".concat(m,"/imagelist-").concat(s).concat(h,".html"):"".concat(m,"/imagelist.html");case a.Z.Image:if(o&&c)return"".concat(m,"/image-").concat(o,"-").concat(c,".html");console.error("PageType.Image: entryId or imageId is undefined.");break;case a.Z.VideoList:return h=g>1?"-".concat(g):"","".concat(m,"/videolist").concat(h,".html");case a.Z.Video:if(o)return"".concat(l).concat(n({amebaId:r,entryId:o,vnm:p}));console.error("PageType.Video: entryId is undefined.");break;case a.Z.IineEntry:if(o)return"".concat(m,"/iine_entry-").concat(o,".html");console.error("PageType.IineEntry: entryId is undefined.");break;case a.Z.Comment:if(h=g>1?"page-".concat(g,".html"):"",o)return"".concat(m,"/comment-").concat(o,"/").concat(h);console.error("PageType.Comment: entryId is undefined.");break;case a.Z.Reblog:if(h=g>1?"page-".concat(g,".html"):"",o)return"".concat(m,"/reblog-").concat(o,"/").concat(h);console.error("PageType.Reblog: entryId is undefined.");break;case a.Z.MessageBoard:return"".concat(m,"/message-board.html");case a.Z.Reader:return h=g>1?"-".concat(g):"","".concat(m,"/reader").concat(h,".html");case a.Z.Favorite:return h=g>1?"-".concat(g):"","".concat(m,"/favorite").concat(h,".html");case a.Z.Bookmark:return h=g>1?"-".concat(g):"","".concat(m,"/bookmark").concat(h,".html");case a.Z.AmemberEntry:if(o)return"".concat(window.process.env.HTTP_PATH_AMEBLO,"/").concat(r,"/amemberentry-").concat(o,".html");console.error("PageType.AmemberEntry: entryId is undefined.");break;case a.Z.ImageEmbed:if(o&&c)return"".concat(window.process.env.HTTP_PATH_EMBED,"/p/embed/").concat(r,"/image-").concat(o,"-").concat(c,".html");console.error("PageType.ImageEmbed: entryId or imageId is undefined.");break;case a.Z.SkinPreview:return"";default:console.error("PageType is not match.")}return""}},12943:52361:]);