(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[4100],{19589:(e,t,n)=>{"use strict";n.d(t,{p:()=>p});n(91938);var a=n(76955),r=n(29466),i=n.n(r),o=n(45525),c=n(55382),s=n.n(c),d=n(64214),l=n(66003),h=n(72852),m=n.n(h);function u(e,t){return e.alt===t.alt&&e.className===t.className&&e.disableLazy===t.disableLazy&&e.hasThumb===t.hasThumb&&e.height===t.height&&e.noImageSize===t.noImageSize&&e.noImageSrc===t.noImageSrc&&e.src===t.src&&e.width===t.width&&i()(e.style,t.style)&&e.withBackgroundColor===t.withBackgroundColor}var g=e=>{var[t,n]=a.useState(!1),r=a.useCallback((,[]);if(!e.hasThumb){var i={height:"".concat(e.noImageSize,"px"),width:"".concat(e.noImageSize,"px")};return a.createElement("div",{className:m().Block,style:i},a.createElement("span",{className:m().NoImageBlock},"no image"))}var o=t?e.noImageSrc:e.src,c=e.disableLazy?m().Block:m().BlockLoading;return a.createElement(l.j,{alt:e.alt,className:s()(e.withBackgroundColor?m().WithBackgroundColor:"",e.className||c),disableLazy:e.disableLazy,height:(0,d.W)(e.height),src:o,srcSet:e.srcSet,style:e.style,width:(0,d.W)(e.width),onError:r})};g.defaultProps={alt:"",className:"",disableLazy:!1,hasThumb:!0,noImageSize:80,noImageSrc:"",src:"",srcSet:"",style:{},withBackgroundColor:!1};var p=(0,o.w1)(m())(a.memo(g,u))},10793:(e,t,n)=>{"use strict";n.d(t,{f:()=>s});var a=n(76955),r=n(52377),i=n(5154),o=n.n(i),c=n(54285);class s extends a.PureComponent{constructor(e){super(e),this.handleClick=this.handleClick.bind(this),this.handleInview=this.handleInview.bind(this),this.startListen=this.startListen.bind(this),this.stopListen=this.stopListen.bind(this),this.inviewTracked=!1,this.tapTracked=!1}static get defaultProps(){return{activate:["tap"],algorithmId:"",bloggerAmebaId:"",categories:[],categoryId:"",subCategoryId:"",children:null,contentId:"",disable:!1,displayPosition:"",entryId:"",orderId:"",pageId:"",sectionId:"",serviceId:"",tagName:"",tapLogger:o(),viewLogger:o()}}componentDidMount(){this.startListen()}componentDidUpdate(){this.startListen()}componentWillUnmount(){this.stopListen()}get params(){var{algorithmId:e,bloggerAmebaId:t,categoryId:n,subCategoryId:a,contentId:r,displayPosition:i,pageId:o,entryId:c,orderId:s,sectionId:d,serviceId:l,tagName:h}=this.props;return{algorithmId:e,bloggerAmebaId:t,categories:this.props.categories.filter((),categoryId:n,subCategoryId:a,contentId:r,displayPosition:i,pageId:o,entryId:c,orderId:s,sectionId:d,serviceId:l,tagName:h}}startListen(){-1===this.props.activate.indexOf("view")||this.inviewTracked||(s.intersectionListener||(s.intersectionListener=(0,c.T)({})),this.stopListen(),this.trigger=r.findDOMNode(this),this.trigger&&!this.unlisten&&(this.unlisten=s.intersectionListener.listen(this.trigger,(e=>{(e.isIntersecting||e.intersectionRatio>0)&&(this.stopListen(),this.handleInview())}))))}andleClick(e){var t=a.Children.only(this.props.children).props.onClick;t&&t(e),this.props.tapLogger(this.params)}ender(){if(this.props.disable)return this.props.children;var e=this.props.children;return-1!==this.props.activate.indexOf("tap")&&(e=a.cloneElement(e,{onClick:this.handleClick})),e}}s.displayName="Tracker"},23915:94533:(e,t,n)=>{"use strict";n.d(t,{J4:()=>h});var a=n(66062),r=n(18274),i=n(55752),o=n.n(i),c=n(15026),s=n(92289),d=l=e=>({type:s.d,payload:{error:(0,c.s)(e)},error:!0}),h=(0,r.H)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(){var n=(0,a.Z)((function*(n,a,r){var{fetchr:i}=r;if(o()(a(),["rankingOfficialState","rankingOfficialMap",e],null))return null;try{var c=yield i.read("rankingOfficial").params({type:e,limit:t}).end();return n(d(e,c.data))}catch(s){return n(l(s))}}));return ()}))},68330:(e,t,n)=>{"use strict";n.d(t,{g:()=>i});var a=n(3e4),r=n(76955);n(91938);class i extends r.PureComponent{omponentDidMount(){this.handleMount()}andleMount(){var{maxLength:e,children:t}=this.props,n="undefined"!=typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(display: -webkit-box) and (-webkit-box-orient : vertical) and (-webkit-line-clamp: 2)")?t:this.stringTruncation(t,e);this.setState({viewText:n})}stringTruncation(e,t){if(!e)return"";var n=t-2;return e.length<=t||n<1?e:"".concat(e.substr(0,n),"\u2026")}render(){return(0,a.Z)(r.Fragment,{},void 0,this.state.viewText)}}i.displayName="PcClampLineText"},18899:(e,t,n)=>{"use strict";n.d(t,{aU:()=>a});var a=[{ameba_id:"ebizo-ichikawa",rank:"MVB",nick_name:"\u5e02\u5ddd\u5718\u5341\u90ce\u767d\u733f"},{ameba_id:"maokobayashi0721",rank:"MVB",nick_name:"\u5c0f\u6797\u9ebb\u592e"}]},16884:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(75457),r=e=>{var{amebaId:t,entryId:n,vnm:a}=e;return t&&n?"/".concat(t,"/video-").concat(n,".html").concat(a?"?vnm=".concat(a):""):""};function i(e,t){var{amebaId:n,entryId:i,themeId:o,entryYm:c,imageId:s,vnm:d,day:l,page:h=1}=t,m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.process.env.HTTP_PATH_AMEBLO;if(!n||!e)return"";var u="".concat(m,"/").concat(n),g="";switch(e){case a.Z.BlogTop:return g=h>1?"page-".concat(h,".html"):"","".concat(u,"/").concat(g);case a.Z.EntryList:return g=h>1?"-".concat(h):"","".concat(u,"/entrylist").concat(g,".html");case a.Z.AmemberEntryList:return g=h>1?"-".concat(h):"","".concat(u,"/amemberentrylist").concat(g,".html");case a.Z.ArchiveTop:return"".concat(u,"/archivetop.html");case a.Z.Archive:if(c)return g=h>1?"".concat(h):"","".concat(u,"/archive").concat(g,"-").concat(c,".html");console.error("PageType.Archive: entryYm is undefined.");break;case a.Z.Day:if(l)return g=h>1?"".concat(h):"","".concat(u,"/day").concat(g,"-").concat(l,".html");console.error("PageType.Day: day is undefined.");break;case a.Z.ThemeTop:return"".concat(u,"/themetop.html");case a.Z.Theme:if(o)return g=h>1?"".concat(h):"","".concat(u,"/theme").concat(g,"-").concat(o,".html");console.error("PageType.Theme: themeId is undefined.");break;case a.Z.PopularRecentList:return g=h>1?"-".concat(h):"","".concat(u,"/popularrecentlist").concat(g,".html");case a.Z.Entry:if(i)return g=h>1?"".concat(h):"","".concat(u,"/entry").concat(g,"-").concat(i,".html");console.error("PageType.Entry: entryId is undefined.");break;case a.Z.ImageList:return g=h>1?"-".concat(h):"",c?"".concat(u,"/imagelist-").concat(c).concat(g,".html"):"".concat(u,"/imagelist.html");case a.Z.Image:if(i&&s)return"".concat(u,"/image-").concat(i,"-").concat(s,".html");console.error("PageType.Image: entryId or imageId is undefined.");break;case a.Z.VideoList:return g=h>1?"-".concat(h):"","".concat(u,"/videolist").concat(g,".html");case a.Z.Video:if(i)return"".concat(m).concat(r({amebaId:n,entryId:i,vnm:d}));console.error("PageType.Video: entryId is undefined.");break;case a.Z.IineEntry:if(i)return"".concat(u,"/iine_entry-").concat(i,".html");console.error("PageType.IineEntry: entryId is undefined.");break;case a.Z.Comment:if(g=h>1?"page-".concat(h,".html"):"",i)return"".concat(u,"/comment-").concat(i,"/").concat(g);console.error("PageType.Comment: entryId is undefined.");break;case a.Z.Reblog:if(g=h>1?"page-".concat(h,".html"):"",i)return"".concat(u,"/reblog-").concat(i,"/").concat(g);console.error("PageType.Reblog: entryId is undefined.");break;case a.Z.MessageBoard:return"".concat(u,"/message-board.html");case a.Z.Reader:return g=h>1?"-".concat(h):"","".concat(u,"/reader").concat(g,".html");case a.Z.Favorite:return g=h>1?"-".concat(h):"","".concat(u,"/favorite").concat(g,".html");case a.Z.Bookmark:return g=h>1?"-".concat(h):"","".concat(u,"/bookmark").concat(g,".html");case a.Z.AmemberEntry:if(i)return"".concat(window.process.env.HTTP_PATH_AMEBLO,"/").concat(n,"/amemberentry-").concat(i,".html");console.error("PageType.AmemberEntry: entryId is undefined.");break;case a.Z.ImageEmbed:if(i&&s)return"".concat(window.process.env.HTTP_PATH_EMBED,"/p/embed/").concat(n,"/image-").concat(i,"-").concat(s,".html");console.error("PageType.ImageEmbed: entryId or imageId is undefined.");break;case a.Z.SkinPreview:return"";default:console.error("PageType is not match.")}return""}},64214:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});var a=e=>{var t=Number(e);return Number.isNaN(t)?e:t}},40112:(e,t,n)=>{var a=n(18300),r=n(55830),i=a(();i.i(r,"",!0),i.push([e.id,'._1g8R0KLz,._2ZRT7Mwb{position:relative;width:100%}._2ZRT7Mwb{}._JdNQmklx{color:#ccc;content:"no image";font-family:\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W6,\u30d2\u30e9\u30ae\u30ce\u89d2\u30b4 Pro W3,Hiragino Kaku Gothic Pro,\uff2d\uff33 \uff30\u30b4\u30b7\u30c3\u30af,Helvetica,Arial,sans-serif;font-size:12px;left:0;margin:-.5em 0 0;position:absolute;text-align:center;top:50%;width:100%}._25tu5oLk{background-color:rgba(8, 18, 26, 0.04)}',""]),i.locals={Block:"_1g8R0KLz",BlockLoading:"_2ZRT7Mwb "+r.locals.Loading,NoImageBlock:"_JdNQmklx",WithBackgroundColor:"_25tu5oLk"},e.exports=i},72852:(e,t,n)=>{var a=n(40112),r=Object.assign||i=Object.defineProperty||"string"==typeof a&&(a=[[e.id,a,""]]),e.exports=function(e){var t=r({},e.locals||{});return i(t,"_",{value:),i(t,"toString",{value:function(){return"function"==typeof e.toString?e.toString():""}}),t}(a)}}]);