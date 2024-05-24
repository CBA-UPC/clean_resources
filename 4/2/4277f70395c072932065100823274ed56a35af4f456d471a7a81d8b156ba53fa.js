(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[8134],{48516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(76955),r=n(62869),o=n.n(r),i=n(5154),c=n.n(i),s=n(51650),l=class d extends a.PureComponent{static get defaultProps(){return{children:null,className:"",targetUrl:void 0,onClick:c(),onMouseEnter:c()}}sSpaTargetLink(e){var{pathname:t,hostname:n}=e,a=n===new URL(window.process.env.HTTP_PATH_AMEBLO).hostname,r="/"===t,o="/accessibility"===t,[i,c]=t.split("/"),s=/_/.test(c);return a&&!(r||o||s)}handleClick(e){o()(this.props.onClick)&&this.props.onClick(e)}render(){var e,t=this.props,{children:n,className:r,targetUrl:o,onMouseEnter:i}=t,c=l(t,["children","className","targetUrl","onMouseEnter"]);if(void 0===o)return a.createElement("a",Object.assign({className:r},c),n);try{e=new URL(o)}catch(h){e=null}if(e&&this.isSpaTargetLink(e)){var d=e.pathname,p=e.search?"".concat(e.search):"",m=e.hash?"".concat(e.hash):"";return a.createElement(s.rU,Object.assign({className:r,to:"".concat(d).concat(p).concat(m),onClick:this.handleClick,onMouseEnter:i},c),n)}return a.createElement("a",Object.assign({className:r,href:o,onClick:this.handleClick,onMouseEnter:i},c),n)}}d.displayName="AnchorBlock"},10793:(e,t,n)=>{"use strict";n.d(t,{f:()=>s});var a=n(76955),r=n(52377),o=n(5154),i=n.n(o),c=n(54285);class s extends a.PureComponent{constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:i(),viewLogger:i()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}et params(){var{algorithmId:e,bloggerAmebaId:t,categoryId:n,subCategoryId:a,contentId:r,displayPosition:o,pageId:i,entryId:c,orderId:s,sectionId:l,serviceId:d,tagName:p}=this.props;return{algorithmId:e,bloggerAmebaId:t,categories:this.props.categories.filter((),categoryId:n,subCategoryId:a,contentId:r,displayPosition:o,pageId:i,entryId:c,orderId:s,sectionId:l,serviceId:d,tagName:p}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(s.intersectionListener||(s.intersectionListener=(0,c.T)({})),this.stopListen(),this.trigger=r.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=s.intersectionListener.listen(this.trigger,(e=>{(e.isIntersecting||e.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(e){var t=a.Children.only(this.props.children).props.onClick;t&&t(e),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var e=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(e=a.cloneElement(e,{onClick:this.handleClick})),e}}s.displayName="Tracker"},55311:(e,t,n)=>{"use strict";n.d(t,{EN:()=>d});var a=n(66062),r=n(18274),o=n(55752),i=n.n(o),c=n(43597);unction l(e,t){return{type:c.U,payload:{blogId:e,page:t},error:!0}}var d=(0,r.H)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return function(){var r=(0,a.Z)((function*(a,r,o){var{fetchr:c}=o,d=t>0?(t-1)*n:0,p=r();if(i()(p,["bookmarkState","bookmarkPageMap","".concat(e,"/").concat(t)]))return null;try{var m=i()(p,["bloggerState","blogMap",e,"blog_name"],""),h=(yield c.read("blogBookmarks").params({amebaId:m,blogId:e,limit:n,offset:d}).end()).data||{};return a(s(e,t,h))}catch(u){return console.warn(u),a(l(e,t))}}));return ()}))},57224:(e,t,n)=>{"use strict";n.d(t,{m:()=>h});var a,r,o,i=n(3e4),c=(n(91938),n(76955)),s=n(55382),l=n.n(s),d=n(45525),p=n(6362),m=n.n(p),h=(0,d.w1)(m())((o=r=class extends c.PureComponent{ender(){return(0,i.Z)("div",{className:this.props.className||m().Spinner},void 0,(0,i.Z)("div",{className:l()(m().Rect,m().Rect__Element1,this.props.barClass)}),(0,i.Z)("div",{className:l()(m().Rect,m().Rect__Element2,this.props.barClass)}),(0,i.Z)("div",{className:l()(m().Rect,m().Rect__Element3,this.props.barClass)}))}},r.displayName="ModuleLoader",a=o))||a},64530:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});n(91938);var a=n(76955),r=n(96216),o=n(29466),i=n.n(o);class c extends a.Component{static get defaultPropshouldComponentUpdate(e){return this.props.title!==e.title||!i()(this.props.link,e.link)||!i()(this.props.meta,e.meta)||!i()(this.props.script,e.script)}render(){var{link:e,meta:t,script:n,title:o}=this.props,i={};return e.length>0&&(i.link=e),t.length>0&&(i.meta=t),n.length>0&&(i.script=n),o&&(i.title=o),a.createElement(r.ql,i)}}c.displayName="PcHead"},50019:(e,t,n)=>{"use strict";n.d(t,{F:()=>m});var a=n(3e4),r=(n(91938),n(76955)),o=n(29466),i=n.n(o),c=n(5663),s=n.n(c),l=n(64530),d=n(75457),p=n(73324);class m extends r.Component{shouldComponentUpdate(e){return!(i()(this.props.blog,e.blog)&&i()(this.props.bookmarks,e.bookmarks)&&i()(this.props.paging,e.paging)&&i()(this.props.seoSetting,e.seoSetting))}render(){var{blog:e,bookmarks:t,paging:n,seoSetting:r}=this.props,o=e.blog_name||"",i=e.blog_title||"",c=n.current_page||1,m=[],h=[],u=(0,p.ZP)(d.Z.Bookmark,{amebaId:o,hasContents:!s()(t),paging:n,seoSetting:r});return m.push(...u.meta),h.push(...u.link),(0,a.Z)(l.c,{link:h,meta:m,title:(()=>{var e=c>1?" -".concat(c,"\u30da\u30fc\u30b8\u76ee"):"";return"\u30d6\u30c3\u30af\u30de\u30fc\u30af\u4e00\u89a7\uff5c".concat(i).concat(e)})()})}}m.displayName="Head"},16884:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(75457),r=e=>{var{amebaId:t,entryId:n,vnm:a}=e;return t&&n?"/".concat(t,"/video-").concat(n,".html").concat(a?"?vnm=".concat(a):""):""};function o(e,t){var{amebaId:n,entryId:o,themeId:i,entryYm:c,imageId:s,vnm:l,day:d,page:p=1}=t,m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.process.env.HTTP_PATH_AMEBLO;if(!n||!e)return"";var h="".concat(m,"/").concat(n),u="";switch(e){case a.Z.BlogTop:return u=p>1?"page-".concat(p,".html"):"","".concat(h,"/").concat(u);case a.Z.EntryList:return u=p>1?"-".concat(p):"","".concat(h,"/entrylist").concat(u,".html");case a.Z.AmemberEntryList:return u=p>1?"-".concat(p):"","".concat(h,"/amemberentrylist").concat(u,".html");case a.Z.ArchiveTop:return"".concat(h,"/archivetop.html");case a.Z.Archive:if(c)return u=p>1?"".concat(p):"","".concat(h,"/archive").concat(u,"-").concat(c,".html");console.error("PageType.Archive: entryYm is undefined.");break;case a.Z.Day:if(d)return u=p>1?"".concat(p):"","".concat(h,"/day").concat(u,"-").concat(d,".html");console.error("PageType.Day: day is undefined.");break;case a.Z.ThemeTop:return"".concat(h,"/themetop.html");case a.Z.Theme:if(i)return u=p>1?"".concat(p):"","".concat(h,"/theme").concat(u,"-").concat(i,".html");console.error("PageType.Theme: themeId is undefined.");break;case a.Z.PopularRecentList:return u=p>1?"-".concat(p):"","".concat(h,"/popularrecentlist").concat(u,".html");case a.Z.Entry:if(o)return u=p>1?"".concat(p):"","".concat(h,"/entry").concat(u,"-").concat(o,".html");console.error("PageType.Entry: entryId is undefined.");break;case a.Z.ImageList:return u=p>1?"-".concat(p):"",c?"".concat(h,"/imagelist-").concat(c).concat(u,".html"):"".concat(h,"/imagelist.html");case a.Z.Image:if(o&&s)return"".concat(h,"/image-").concat(o,"-").concat(s,".html");console.error("PageType.Image: entryId or imageId is undefined.");break;case a.Z.VideoList:return u=p>1?"-".concat(p):"","".concat(h,"/videolist").concat(u,".html");case a.Z.Video:if(o)return"".concat(m).concat(r({amebaId:n,entryId:o,vnm:l}));console.error("PageType.Video: entryId is undefined.");break;case a.Z.IineEntry:if(o)return"".concat(h,"/iine_entry-").concat(o,".html");console.error("PageType.IineEntry: entryId is undefined.");break;case a.Z.Comment:if(u=p>1?"page-".concat(p,".html"):"",o)return"".concat(h,"/comment-").concat(o,"/").concat(u);console.error("PageType.Comment: entryId is undefined.");break;case a.Z.Reblog:if(u=p>1?"page-".concat(p,".html"):"",o)return"".concat(h,"/reblog-").concat(o,"/").concat(u);console.error("PageType.Reblog: entryId is undefined.");break;case a.Z.MessageBoard:return"".concat(h,"/message-board.html");case a.Z.Reader:return u=p>1?"-".concat(p):"","".concat(h,"/reader").concat(u,".html");case a.Z.Favorite:return u=p>1?"-".concat(p):"","".concat(h,"/favorite").concat(u,".html");case a.Z.Bookmark:return u=p>1?"-".concat(p):"","".concat(h,"/bookmark").concat(u,".html");case a.Z.AmemberEntry:if(o)return"".concat(window.process.env.HTTP_PATH_AMEBLO,"/").concat(n,"/amemberentry-").concat(o,".html");console.error("PageType.AmemberEntry: entryId is undefined.");break;case a.Z.ImageEmbed:if(o&&s)return"".concat(window.process.env.HTTP_PATH_EMBED,"/p/embed/").concat(n,"/image-").concat(o,"-").concat(s,".html");console.error("PageType.ImageEmbed: entryId or imageId is undefined.");break;case a.Z.SkinPreview:return"";default:console.error("PageType is not match.")}return""}},73324:(e,t,n)=>{"use strict";n.d(t,{YQ:()=>c,Yz:()=>s,Z2:()=>l,ZP:);var a=n(55752),r=n.n(a),o=n(75457),i=n(16884);function c(e,t,n){var a=t>1?" -".concat(t,"\u30da\u30fc\u30b8\u76ee"):"";switch(e){case o.Z.BlogTop:case o.Z.SkinPreview:return"".concat(n).concat(a)}return""}function s(e,t,n){if(1!==e||0===t.length)return"";var a=r()(t,[0,"entry_title"],""),o=!!r()(t,[0,"image_url"]),i="";return!!r()(t,[0,"video_thumbnail_url"])?i="\uff08\u52d5\u753b\u3042\u308a\uff09":o&&(i="\uff08\u753b\u50cf\u3042\u308a\uff09"),"".concat(n,"\u3055\u3093\u306e\u30d6\u30ed\u30b0\u3067\u3059\u3002\u6700\u8fd1\u306e\u8a18\u4e8b\u306f\u300c").concat(a).concat(i,"\u300d\u3067\u3059\u3002")}function l(e,t){var{amebaId:n,entryId:a,themeId:r,entryYm:c}=t;switch(e){case o.Z.BlogTop:case o.Z.EntryList:return(0,i.Z)(e,{amebaId:n});case o.Z.Entry:return(0,i.Z)(e,{amebaId:n,entryId:a});case o.Z.Theme:return(0,i.Z)(e,{amebaId:n,themeId:r});case o.Z.Archive:return(0,i.Z)(e,{amebaId:n,entryYm:c})}return""}function d(e,t){var{amebaId:n,paging:a,entryId:r,entryYm:c,themeId:s,day:l}=t,d=[];if(!a||!n)return{link:d};var p=a.prev_page,m=a.next_page,h=a.current_page,u=a.max_page,g=a.order,b=p<h&&p>0&&u>1,y=m>h,v="",f="";switch(e){case o.Z.BlogTop:case o.Z.Reader:case o.Z.Favorite:case o.Z.Bookmark:case o.Z.AmemberEntryList:v=b?(0,i.Z)(e,{amebaId:n,page:p}):"",f=y?(0,i.Z)(e,{amebaId:n,page:m}):"";break;case o.Z.EntryList:v=b?(0,i.Z)(e,{amebaId:n,page:p,order:g}):"",f=y?(0,i.Z)(e,{amebaId:n,page:m,order:g}):"";break;case o.Z.Entry:v=b?(0,i.Z)(e,{amebaId:n,entryId:r,page:p}):"",f=y?(0,i.Z)(e,{amebaId:n,entryId:r,page:m}):"";break;case o.Z.Theme:v=b?(0,i.Z)(e,{amebaId:n,themeId:s,page:p,order:g}):"",f=y?(0,i.Z)(e,{amebaId:n,themeId:s,page:m,order:g}):"";break;case o.Z.Archive:case o.Z.ArchiveList:v=b?(0,i.Z)(e,{amebaId:n,entryYm:c,page:p,order:g}):"",f=y?(0,i.Z)(e,{amebaId:n,entryYm:c,page:m,order:g}):"";break;case o.Z.Day:v=b?(0,i.Z)(e,{amebaId:n,day:l,page:p}):"",f=y?(0,i.Z)(e,{amebaId:n,day:l,page:m}):"";break;case o.Z.ImageList:case o.Z.Image:case o.Z.Video:}return v&&d.push({href:v,rel:"prev"}),f&&d.push({href:f,rel:"next"}),{link:d}}function p(e,t){var{seoSetting:n={},prFlg:a,paging:r={},hasContents:i,isReblog:c}=t,s=n.noindex||!1,l=r.current_page||1;if(!e||s||!i)return"noindex,nofollow";switch(e){case o.Z.BlogTop:case o.Z.EntryList:if(l>1)return"noindex,follow";break;case o.Z.Day:case o.Z.Reader:case o.Z.Favorite:case o.Z.Bookmark:case o.Z.AmemberEntryList:case o.Z.AmemberEntry:case o.Z.ImageList:case o.Z.Image:return"noindex,follow";case o.Z.EntryPreview:case o.Z.SkinPreview:return"noindex,nofollow";case o.Z.Entry:return l>1||c?"noindex,follow":"1"===a?"noindex":"2"===a?"nofollow,max-image-preview:large":"3"===a?"noindex,nofollow":"max-image-preview:large"}return""}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],a=[];if(!e||!t.amebaId)return{meta:n,link:a,isShowAndroidAlternate:!1,isShowMbAlternate:!1};var o=d(e,t);a.push(...o.link);var i=p(e,t);if(i&&(n.push({name:"robots",content:i}),-1!==i.indexOf("noindex")))return{meta:n,link:a,isShowAndroidAlternate:!1,isShowMbAlternate:!1};var c=r()(t,["paging","current_page"],1);if(c>1)return{meta:n,link:a,isShowAndroidAlternate:!0,isShowMbAlternate:!1};var s=l(e,t);return s&&a.push({rel:"canonical",href:s}),{meta:n,link:a,isShowAndroidAlternate:!0,isShowMbAlternate:!0}}},3296:(e,t,n)=>{var a=n(18300)(();a.push([e.id,"._2UHpSTOt{font-size:10px;margin:0 auto;padding:2rem 0;text-align:center;width:50px}._1BoYp5Ub{animation:_2Y9N-ajV .8s ease-in-out infinite;background-color:#efefef;border-radius:4px;display:inline-block;height:24px;margin:0 3px;width:6px}._Xjel4Y3u{animation-delay:-1.1s}._O2FTu59_{animation-delay:-1s}._GiX98iQc{animation-delay:-.9s}@keyframes _2Y9N-ajV{0%,40%,to{transform:scaleY(.6666)}20%{transform:scaleY(1)}}",""]),a.locals={Spinner:"_2UHpSTOt",Rect:"_1BoYp5Ub","sk-stretchdelay":"_2Y9N-ajV",Rect__Element1:"_Xjel4Y3u",Rect__Element2:"_O2FTu59_",Rect__Element3:"_GiX98iQc"},e.exports=a},6362:(e,t,n)=>{var a=n(3296),r=Object.assign||o=Object.defineProperty||"string"==typeof a&&(a=[[e.id,a,""]]),e.exports=function(e){var t=r({},e.locals||{});return o(t,"_",{value:),o(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(a)}}]);