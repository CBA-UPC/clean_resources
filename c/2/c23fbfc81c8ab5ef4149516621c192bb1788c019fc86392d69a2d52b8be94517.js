(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[3422],{10793:(e,t,r)=>{"use strict";r.d(t,{f:()=>s});var a=r(76955),n=r(52377),o=r(5154),i=r.n(o),c=r(54285);class s extends a.PureComponent{constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:i(),viewLogger:i()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}et params(){var{algorithmId:e,bloggerAmebaId:t,categoryId:r,subCategoryId:a,contentId:n,displayPosition:o,pageId:i,entryId:c,orderId:s,sectionId:p,serviceId:d,tagName:l}=this.props;return{algorithmId:e,bloggerAmebaId:t,categories:this.props.categories.filter((),categoryId:r,subCategoryId:a,contentId:n,displayPosition:o,pageId:i,entryId:c,orderId:s,sectionId:p,serviceId:d,tagName:l}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(s.intersectionListener||(s.intersectionListener=(0,c.T)({})),this.stopListen(),this.trigger=n.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=s.intersectionListener.listen(this.trigger,(e=>{(e.isIntersecting||e.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(e){var t=a.Children.only(this.props.children).props.onClick;t&&t(e),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var e=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(e=a.cloneElement(e,{onClick:this.handleClick})),e}}s.displayName="Tracker"},21281:(e,t,r)=>{"use strict";r.d(t,{fu:()=>s});var a=r(66062),n=r(55752),o=r.n(n),i=r(18274),c=r(79235),s=(0,i.H)({ttl:500},((e,t)=>function(){var r=(0,a.Z)((function*(r,a,n){var{fetchr:i}=n,s=a();if((!t||o()(s,["archiveState","archiveMetaMap",e,"currentYear"],"")===t)&&a().archiveState.archiveMap[e])return null;try{var p=o()(s,["bloggerState","blogMap",e,"blog_name"],"");return r((yield i.read("blogArchives").params({amebaId:p,blogId:e,year:t}).end()).data))}catch(d){return r(((e,t)=>({type:c.l,payload:{blogId:e,error:t},error:!0}))(e,d))}}));return ()))},83422:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var a=r(3e4),n=r(66062),o=(r(91938),r(76955)),i=r(55752),c=r.n(i),s=r(29466),p=r.n(s),d=r(66948),l=r(55382),g=r.n(l),h=r(97175),m=r(45525),u=r(51650),b=r(10793),v=r(5563),I=r(87072),y=r.n(I),f=r(21281),Z=r(73614),T=r(96216),k=r(82282);class _ extends o.Component{houldComponentUpdate(e){return this.props.amebaId!==e.amebaId||this.props.pageType!==e.pageType||!p()(this.props.blog,e.blog)||!p()(this.props.seoSetting,e.seoSetting)}render(){var e=(0,k.Z)(this.props.pageType,{amebaId:this.props.amebaId,seoSetting:this.props.seoSetting||{}});return(0,a.Z)(T.ql,{},void 0,(0,a.Z)("title",{},void 0,["\u6708\u5225\u8a18\u4e8b\u4e00\u89a7",this.props.blog.blog_title||""].filter(().join("\uff5c")),e)}}_.displayName="Head";var w,L,x,P=r(18043),A=function(){var e=(0,n.Z)((function*(e){var{dispatch:t,getState:r,match:a}=e,{params:n}=a,o=n.amebaId;yield t((0,Z.Rs)(o));var i=c()(r(),["bloggerState","bloggerMap",o,"blog"]);yield t((0,f.fu)(i))}));return (),E=(0,d.$j)(((e,t)=>{var{match:r}=t,{params:a,route:n}=r,o=a.amebaId,i=e.bloggerState,c=i.bloggerMap[o]||{},s=c.seo_setting||{},p=i.blogMap[c.blog]||{},d=c.blog;return{amebaId:o,archiveMap:e.archiveState.archiveMap[d]||[],blog:p,bloggerType:(c.attribute||{}).bloggerType,pageType:n.pageType,seoSetting:s,trackTapLog:v.XI,trackViewLog:v.iG}}),{trackTapLog:v.XI,trackViewLog:v.iG})(w=(0,h.provideHooks)({defer:A})(w=(0,m.w1)(y())((x=L=class extends o.Component{shouldComponentUpdate(e){return this.props.amebaId!==e.amebaId||this.props.bloggerType!==e.bloggerType||this.props.pageType!==e.pageType||this.props.trackTapLog!==e.trackTapLog||this.props.trackViewLog!==e.trackViewLog||!p()(this.props.seoSetting,e.seoSetting)||!p()(this.props.archiveMap,e.archiveMap)||!p()(this.props.blog,e.blog)}renderArchivesEmpty(){return(0,a.Z)("div",{className:y().ErrorBlock},void 0,(0,a.Z)("p",{className:g()(y().ErrorText,P.iJ)},void 0,"\u6295\u7a3f\u3055\u308c\u305f\u8a18\u4e8b\u306f\u3042\u308a\u307e\u305b\u3093\u3002"))}renderArchiveLine(){if(this.props.archiveMap.length<1)return this.renderArchivesEmpty();var e="official"===this.props.bloggerType?"official":"general",t=this.props.archiveMap.map(((t,r)=>(0,a.Z)("li",{className:g()(y().Item,P.ex,P.Qx,P.hn)},"".concat(t.year).concat(t.month),(0,a.Z)(b.f,{activate:["tap","view"],bloggerAmebaId:this.props.amebaId,contentId:"".concat(t.year).concat(t.month),orderId:"".concat(r+1),pageId:this.props.pageType,sectionId:"article_blog-archive",serviceId:e,tapLogger:this.props.trackTapLog,viewLogger:this.props.trackViewLog},void 0,(0,a.Z)(u.rU,{className:y().Link,to:"/".concat(this.props.amebaId,"/archive-").concat(t.year).concat(t.month,".html")},void 0,(0,a.Z)("span",{className:(y().Title,P.iJ)},void 0,t.year,"\u5e74",t.month,"\u6708"),(0,a.Z)("span",{className:g()(y().RecordCounts,P.RS)},void 0,t.cnt,"\u4ef6"))))));return(0,a.Z)("ul",{className:y().List},void 0,t)}render(){return(0,a.Z)("section",{className:g()(y().Block,P.hn,P.Qx)},void 0,(0,a.Z)(_,{amebaId:this.props.amebaId,blog:this.props.blog,pageType:this.props.pageType,seoSetting:this.props.seoSetting}),(0,a.Z)("h2",{className:g()(y().Heading,P.iJ,P.Qx,P.hn,P.KS,P.$d)},void 0,"\u6708\u5225\u8a18\u4e8b\u4e00\u89a7"),this.renderArchiveLine())}},L.displayName="SpArchiveList",w=x))||w)||w)||w},82282:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(3e4),n=(r(76955),r(16884)),o=r(75457);function i(e,t){var{amebaId:r,entryId:i,themeId:c,entryYm:s}=t;if(!r)return[];var p="";switch(e){case o.Z.BlogTop:p=(0,n.Z)(o.Z.BlogTop,{amebaId:r});break;case o.Z.Entry:i&&(p=(0,n.Z)(o.Z.Entry,{amebaId:r,entryId:i}));break;case o.Z.Theme:c&&(p=(0,n.Z)(o.Z.Theme,{amebaId:r,themeId:c}));break;case o.Z.Archive:s&&(p=(0,n.Z)(o.Z.Archive,{amebaId:r,entryYm:s}))}var d=[];return p&&d.push((0,a.Z)("link",{href:p,rel:"canonical"},"seo_canonical")),d}function c(e,t){var{amebaId:r,paging:i,entryYm:c,themeId:s}=t;if(!i||!r)return[];var p=i.prev_page,d=i.next_page,l=i.current_page,g=p<l&&p>0,h=d>l,m="",u="";switch(e){case o.Z.BlogTop:m=g?(0,n.Z)(o.Z.BlogTop,{amebaId:r,page:p}):"",u=h?(0,n.Z)(o.Z.BlogTop,{amebaId:r,page:d}):"";break;case o.Z.Archive:m=g?(0,n.Z)(o.Z.Archive,{amebaId:r,entryYm:c,page:p}):"",u=h?(0,n.Z)(o.Z.Archive,{amebaId:r,entryYm:c,page:d}):"";break;case o.Z.Theme:m=g?(0,n.Z)(o.Z.Theme,{amebaId:r,themeId:s,page:p}):"",u=h?(0,n.Z)(o.Z.Theme,{amebaId:r,themeId:s,page:d}):"";break;case o.Z.Reader:m=g?(0,n.Z)(o.Z.Reader,{amebaId:r,page:p}):"",u=h?(0,n.Z)(o.Z.Reader,{amebaId:r,page:d}):""}var b=[];return m&&b.push((0,a.Z)("link",{href:m,rel:"prev"},"seo_prev")),u&&b.push((0,a.Z)("link",{href:u,rel:"next"},"seo_next")),b}function s(e,t){var{seoSetting:r={},prFlg:n,paging:i,totalReaders:c}=t,s="";if(r.noindex||!1)s="noindex,nofollow";else switch(e){case o.Z.Entry:s="1"===n?"noindex":"2"===n?"nofollow,max-image-preview:large":"3"===n?"noindex,nofollow":"max-image-preview:large";break;case o.Z.Reader:(0===c||i&&1===i.current_page)&&(s="noindex,nofollow");break;case o.Z.Theme:case o.Z.BlogTop:case o.Z.Archive:0===i.total_count&&(s="noindex,nofollow");break;case o.Z.AmemberEntry:s="noindex,follow";break;case o.Z.VideoList:i&&0===i.total_count&&(s="noindex,nofollow")}var p=[];return s&&p.push((0,a.Z)("meta",{content:s,name:"robots"},"seo_robots")),p}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!t.amebaId)return[];var r=s(e,t),a=c(e,t),n=[];return t.paging&&1!==t.paging.current_page||n.push(...i(e,t)),[...r,...a,...n]}},16884:(e,t,r)=>{"use strict";r.d(t,{Z:);var a=r(75457),n=e=>{var{amebaId:t,entryId:r,vnm:a}=e;return t&&r?"/".concat(t,"/video-").concat(r,".html").concat(a?"?vnm=".concat(a):""):""};function o(e,t){var{amebaId:r,entryId:o,themeId:i,entryYm:c,imageId:s,vnm:p,day:d,page:l=1}=t,g=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.process.env.HTTP_PATH_AMEBLO;if(!r||!e)return"";var h="".concat(g,"/").concat(r),m="";switch(e){case a.Z.BlogTop:return m=l>1?"page-".concat(l,".html"):"","".concat(h,"/").concat(m);case a.Z.EntryList:return m=l>1?"-".concat(l):"","".concat(h,"/entrylist").concat(m,".html");case a.Z.AmemberEntryList:return m=l>1?"-".concat(l):"","".concat(h,"/amemberentrylist").concat(m,".html");case a.Z.ArchiveTop:return"".concat(h,"/archivetop.html");case a.Z.Archive:if(c)return m=l>1?"".concat(l):"","".concat(h,"/archive").concat(m,"-").concat(c,".html");console.error("PageType.Archive: entryYm is undefined.");break;case a.Z.Day:if(d)return m=l>1?"".concat(l):"","".concat(h,"/day").concat(m,"-").concat(d,".html");console.error("PageType.Day: day is undefined.");break;case a.Z.ThemeTop:return"".concat(h,"/themetop.html");case a.Z.Theme:if(i)return m=l>1?"".concat(l):"","".concat(h,"/theme").concat(m,"-").concat(i,".html");console.error("PageType.Theme: themeId is undefined.");break;case a.Z.PopularRecentList:return m=l>1?"-".concat(l):"","".concat(h,"/popularrecentlist").concat(m,".html");case a.Z.Entry:if(o)return m=l>1?"".concat(l):"","".concat(h,"/entry").concat(m,"-").concat(o,".html");console.error("PageType.Entry: entryId is undefined.");break;case a.Z.ImageList:return m=l>1?"-".concat(l):"",c?"".concat(h,"/imagelist-").concat(c).concat(m,".html"):"".concat(h,"/imagelist.html");case a.Z.Image:if(o&&s)return"".concat(h,"/image-").concat(o,"-").concat(s,".html");console.error("PageType.Image: entryId or imageId is undefined.");break;case a.Z.VideoList:return m=l>1?"-".concat(l):"","".concat(h,"/videolist").concat(m,".html");case a.Z.Video:if(o)return"".concat(g).concat(n({amebaId:r,entryId:o,vnm:p}));console.error("PageType.Video: entryId is undefined.");break;case a.Z.IineEntry:if(o)return"".concat(h,"/iine_entry-").concat(o,".html");console.error("PageType.IineEntry: entryId is undefined.");break;case a.Z.Comment:if(m=l>1?"page-".concat(l,".html"):"",o)return"".concat(h,"/comment-").concat(o,"/").concat(m);console.error("PageType.Comment: entryId is undefined.");break;case a.Z.Reblog:if(m=l>1?"page-".concat(l,".html"):"",o)return"".concat(h,"/reblog-").concat(o,"/").concat(m);console.error("PageType.Reblog: entryId is undefined.");break;case a.Z.MessageBoard:return"".concat(h,"/message-board.html");case a.Z.Reader:return m=l>1?"-".concat(l):"","".concat(h,"/reader").concat(m,".html");case a.Z.Favorite:return m=l>1?"-".concat(l):"","".concat(h,"/favorite").concat(m,".html");case a.Z.Bookmark:return m=l>1?"-".concat(l):"","".concat(h,"/bookmark").concat(m,".html");case a.Z.AmemberEntry:if(o)return"".concat(window.process.env.HTTP_PATH_AMEBLO,"/").concat(r,"/amemberentry-").concat(o,".html");console.error("PageType.AmemberEntry: entryId is undefined.");break;case a.Z.ImageEmbed:if(o&&s)return"".concat(window.process.env.HTTP_PATH_EMBED,"/p/embed/").concat(r,"/image-").concat(o,"-").concat(s,".html");console.error("PageType.ImageEmbed: entryId or imageId is undefined.");break;case a.Z.SkinPreview:return"";default:console.error("PageType is not match.")}return""}},74177:(e,t,r)=>{var a=r(18300)(();a.push([e.id,"._11kWP6N1{margin:0 0 .5rem;overflow:hidden}._2_zsj0ze{border-top:1px solid #ccc;display:block;font-size:14px;font-weight:700;height:48px;line-height:48px;margin:0;padding:0 .5rem}._2lmr6IzK{border:0;font-size:100%;list-style:none;margin:0;padding:0;vertical-align:baseline}._2lgzvWjs{border-bottom:1px solid #e2e2e2;height:48px;margin:0}._2lgzvWjs:first-child{border-top:none}.__FEg7w7I{box-sizing:border-box;display:block;font-size:15px;height:100%;line-height:30px;padding:9px 8px}._3ZLGrywm{color:#333}._1DcM_0pL{color:#999;float:right}._3BgR_P-r{margin:20px 0;padding:0 8px}._2p6mkgV0{color:#333;font-size:15px;line-height:1.4em;margin:15px 0}",""]),a.locals={Block:"_11kWP6N1",Heading:"_2_zsj0ze",List:"_2lmr6IzK",Item:"_2lgzvWjs",Link:"__FEg7w7I",Title:"_3ZLGrywm",RecordCounts:"_1DcM_0pL",ErrorBlock:"_3BgR_P-r",ErrorText:"_2p6mkgV0"},e.exports=a},87072:(e,t,r)=>{var a=r(74177),n=Object.assign||o=Object.defineProperty||"string"==typeof a&&(a=[[e.id,a,""]]),e.exports=function(e){var t=n({},e.locals||{});return o(t,"_",{value:),o(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(a)}}]);