"use strict";(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[3650],{48516:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(76955),r=a(62869),c=a.n(r),o=a(5154),s=a.n(o),i=a(51650),l=class d extends n.PureComponent{static get defaultProps(){return{children:null,className:"",targetUrl:void 0,onClick:s(),onMouseEnter:s()}}sSpaTargetLink(e){var{pathname:t,hostname:a}=e,n=a===new URL(window.process.env.HTTP_PATH_AMEBLO).hostname,r="/"===t,c="/accessibility"===t,[o,s]=t.split("/"),i=/_/.test(s);return n&&!(r||c||i)}handleClick(e){c()(this.props.onClick)&&this.props.onClick(e)}render(){var e,t=this.props,{children:a,className:r,targetUrl:c,onMouseEnter:o}=t,s=l(t,["children","className","targetUrl","onMouseEnter"]);if(void 0===c)return n.createElement("a",Object.assign({className:r},s),a);try{e=new URL(c)}catch(h){e=null}if(e&&this.isSpaTargetLink(e)){var d=e.pathname,m=e.search?"".concat(e.search):"",p=e.hash?"".concat(e.hash):"";return n.createElement(i.rU,Object.assign({className:r,to:"".concat(d).concat(m).concat(p),onClick:this.handleClick,onMouseEnter:o},s),a)}return n.createElement("a",Object.assign({className:r,href:c,onClick:this.handleClick,onMouseEnter:o},s),a)}}d.displayName="AnchorBlock"},73650:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n,r,c,o=a(3e4),s=a(66062),i=(a(91938),a(76955)),l=a(66948),d=a(97175),m=a(73614),p=a(48516),h=a(16884),u=a(75457);function g(){return(g=(0,s.Z)((function*(e){var{dispatch:t,match:a}=e,{params:n}=a,r=n.amebaId;t((0,m.Rs)(r))}))).apply(this,arguments)}var b=(0,l.$j)(((e,t)=>{var{match:a}=t,{params:n}=a,r=n.amebaId,c=e.bloggerState,o=c.bloggerMap,s=c.blogMap[(o[r]||{}).blog]||{};return{amebaId:r,blogTitle:s.blog_title||"",description:s.blog_description||""}}))(n=(0,d.provideHooks)({done:)((c=r=class extends i.Component{shouldComponentUpdatender(){return(0,o.Z)("div",{className:"skinHeaderFrame"},void 0,(0,o.Z)("header",{},void 0,(0,o.Z)("div",{className:"skinHeaderArea"},void 0,(0,o.Z)("div",{className:"skinHeaderArea2"},void 0,(0,o.Z)("div",{className:"skinBlogHeadingGroupArea"},void 0,(0,o.Z)("hgroup",{},void 0,(0,o.Z)("h1",{className:"skinTitleArea"},void 0,(0,o.Z)(p.Z,{className:"skinTitle",targetUrl:(0,h.Z)(u.Z.BlogTop,{amebaId:this.props.amebaId})},void 0,this.props.blogTitle)),(0,o.Z)("h2",{className:"skinDescriptionArea"},void 0,(0,o.Z)("span",{className:"skinDescription",dangerouslySetInnerHTML:{__html:this.replaceBlogDescription(this.props.description)}}))))))))}},r.displayName="PcBlogCoverNew",n=c))||n)||n},16884:(e,t,a)=>{a.d(t,{Z:);var n=a(75457),r=e=>{var{amebaId:t,entryId:a,vnm:n}=e;return t&&a?"/".concat(t,"/video-").concat(a,".html").concat(n?"?vnm=".concat(n):""):""};function c(e,t){var{amebaId:a,entryId:c,themeId:o,entryYm:s,imageId:i,vnm:l,day:d,page:m=1}=t,p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.process.env.HTTP_PATH_AMEBLO;if(!a||!e)return"";var h="".concat(p,"/").concat(a),u="";switch(e){case n.Z.BlogTop:return u=m>1?"page-".concat(m,".html"):"","".concat(h,"/").concat(u);case n.Z.EntryList:return u=m>1?"-".concat(m):"","".concat(h,"/entrylist").concat(u,".html");case n.Z.AmemberEntryList:return u=m>1?"-".concat(m):"","".concat(h,"/amemberentrylist").concat(u,".html");case n.Z.ArchiveTop:return"".concat(h,"/archivetop.html");case n.Z.Archive:if(s)return u=m>1?"".concat(m):"","".concat(h,"/archive").concat(u,"-").concat(s,".html");console.error("PageType.Archive: entryYm is undefined.");break;case n.Z.Day:if(d)return u=m>1?"".concat(m):"","".concat(h,"/day").concat(u,"-").concat(d,".html");console.error("PageType.Day: day is undefined.");break;case n.Z.ThemeTop:return"".concat(h,"/themetop.html");case n.Z.Theme:if(o)return u=m>1?"".concat(m):"","".concat(h,"/theme").concat(u,"-").concat(o,".html");console.error("PageType.Theme: themeId is undefined.");break;case n.Z.PopularRecentList:return u=m>1?"-".concat(m):"","".concat(h,"/popularrecentlist").concat(u,".html");case n.Z.Entry:if(c)return u=m>1?"".concat(m):"","".concat(h,"/entry").concat(u,"-").concat(c,".html");console.error("PageType.Entry: entryId is undefined.");break;case n.Z.ImageList:return u=m>1?"-".concat(m):"",s?"".concat(h,"/imagelist-").concat(s).concat(u,".html"):"".concat(h,"/imagelist.html");case n.Z.Image:if(c&&i)return"".concat(h,"/image-").concat(c,"-").concat(i,".html");console.error("PageType.Image: entryId or imageId is undefined.");break;case n.Z.VideoList:return u=m>1?"-".concat(m):"","".concat(h,"/videolist").concat(u,".html");case n.Z.Video:if(c)return"".concat(p).concat(r({amebaId:a,entryId:c,vnm:l}));console.error("PageType.Video: entryId is undefined.");break;case n.Z.IineEntry:if(c)return"".concat(h,"/iine_entry-").concat(c,".html");console.error("PageType.IineEntry: entryId is undefined.");break;case n.Z.Comment:if(u=m>1?"page-".concat(m,".html"):"",c)return"".concat(h,"/comment-").concat(c,"/").concat(u);console.error("PageType.Comment: entryId is undefined.");break;case n.Z.Reblog:if(u=m>1?"page-".concat(m,".html"):"",c)return"".concat(h,"/reblog-").concat(c,"/").concat(u);console.error("PageType.Reblog: entryId is undefined.");break;case n.Z.MessageBoard:return"".concat(h,"/message-board.html");case n.Z.Reader:return u=m>1?"-".concat(m):"","".concat(h,"/reader").concat(u,".html");case n.Z.Favorite:return u=m>1?"-".concat(m):"","".concat(h,"/favorite").concat(u,".html");case n.Z.Bookmark:return u=m>1?"-".concat(m):"","".concat(h,"/bookmark").concat(u,".html");case n.Z.AmemberEntry:if(c)return"".concat(window.process.env.HTTP_PATH_AMEBLO,"/").concat(a,"/amemberentry-").concat(c,".html");console.error("PageType.AmemberEntry: entryId is undefined.");break;case n.Z.ImageEmbed:if(c&&i)return"".concat(window.process.env.HTTP_PATH_EMBED,"/p/embed/").concat(a,"/image-").concat(c,"-").concat(i,".html");console.error("PageType.ImageEmbed: entryId or imageId is undefined.");break;case n.Z.SkinPreview:return"";default:console.error("PageType is not match.")}return""}}}]);