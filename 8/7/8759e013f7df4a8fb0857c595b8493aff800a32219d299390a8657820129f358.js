"use strict";(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[4628],{20868:3832:14628:(s,t,e)=>{e.r(t),e.d(t,{default:);var i,n,a,o,c,l=e(3e4),r=e(66062),d=(e(91938),e(96216)),p=e(76955),u=e(55752),_=e.n(u),m=e(29466),h=e.n(m),k=e(66948),T=e(97175),b=e(55382),g=e.n(b),f=e(73614),A=e(12942),w=e(62986),P=e(20868),L=e(3832),v="1.11.2",H="1.002";function O(){return(O=(0,r.Z)((function*(s){var{dispatch:t,getState:e,match:i}=s,{params:n}=i,a=n.amebaId,o=yield t((0,f.Rs)(a));if(o&&o.error)"Not Found"===_()(o,"payload.error.message")?t((0,A.Qn)(a)):t((0,A.$F)(a));else{var c=_()(e(),["bloggerState","bloggerMap",a,"blog"]),l=e().bloggerState.blogMap[c];l&&l.blog_id?yield t((0,w.sq)(c)):t((0,A.Qn)(a))}}))).apply(this,arguments)}var S=(0,k.$j)((function(s,t){var{match:e}=t,{params:i}=e,n=i.amebaId,a=s.bloggerState,o=s.skinState,{bloggerMap:c,blogMap:l}=a,r=c[n]||{},d=r.blog,p=l[r.blog]||{},u="1"===_()(r,["official","image_protection"],"0"),m=(r.attribute||{}).isOfficial,h=o.pcSkinMap[d]||{};return{blog:p,isImageProtection:u,isOfficial:m,skin:h,useLayout:h.use_layout||""}}))(i=(0,T.provideHooks)({defer:)((a=n=class s extends p.Component{static get defaultPropsonstructor(t){super(t),this.state={loading:!1,cssList:s.getCssList(t),isImageProtection:null,isOfficial:null,useLayout:null,blog:null,skin:{}},this.handleRightClick=this.handleRightClick.bind(this)}componentDidMount(){window.addEventListener("contextmenu",this.handleRightClick,!1)}static getDerivedStateFromProps(t,e){return!(t.skin&&t.skin.base_skin&&t.blog)||e.isImageProtection===t.isImageProtection&&e.isOfficial===t.isOfficial&&e.useLayout===t.useLayout&&h()(e.blog,t.blog)&&h()(e.skin,t.skin)?null:{isImageProtection:t.isImageProtection,isOfficial:t.isOfficial,useLayout:t.useLayout,blog:t.blog,skin:t.skin,cssList:s.getCssList(t)}}shouldComponentUpdate(s,t){return!(this.state.loading===t.loading&&this.props.isImageProtection===s.isImageProtection&&this.props.isOfficial===s.isOfficial&&this.props.useLayout===s.useLayout&&this.props.templateNew===s.templateNew&&this.props.templateOfficial===s.templateOfficial&&this.props.templateOld===s.templateOld&&this.props.templateUranus===s.templateUranus&&h()(this.props.blog,s.blog)&&h()(this.props.skin,s.skin)&&h()(this.state.cssList,t.cssList)&&h()(this.state.styles,t.styles))}componentDidUpdate(s,t){if(this.state.cssList!==t.cssList){var e=Promise.all(this.state.cssList.map((s=>new Promise((t=>{var e=document.createElement("link");e.onload=()=>{t(),document.head.removeChild(e)},e.onerror=e.rel="stylesheet",e.href=s,document.head.appendChild(e)})))));this.setState({loading:!0},(()=>{e.finally(()}))}}etAttributes(){var s={},t={};if(!this.props.skin||!this.props.skin.base_skin)return{htmlAttributes:s,bodyAttributes:t};var e=L.Z[this.props.useLayout];switch(this.props.skin.base_skin){case P.Z.DEFAULT:return{htmlAttributes:s={className:"fixed","data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"},bodyAttributes:t={id:"mainIndex"}};case P.Z.NEW:return{htmlAttributes:s={className:g()("column".concat(e),"fixed"),"data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"},bodyAttributes:t={}};case P.Z.OFFICIAL:return{htmlAttributes:s={className:"fixed","data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"},bodyAttributes:t={id:"mainIndex"}};case P.Z.URANUS:return{htmlAttributes:s={className:g()("column".concat(e),"fixed"),"data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"},bodyAttributes:t={className:"skin-column".concat(e),"data-uranus-layout":"column".concat(e)}};default:return{htmlAttributes:s,bodyAttributes:t}}}static getSidebarCssPath(s,t){var e="1"===s.sidebar_css_type?s.skin_code:"cmn",i=(L.Z[t]||"").toLowerCase(),n="1"===s.expand_flg?"_ex":"";return i?"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/").concat(e,"/css/type_").concat(i).concat(n,".css"):null}static getCssList(t){var{skin:e,isOfficial:i,useLayout:n}=t,a=[];switch(e.base_skin){case P.Z.DEFAULT:return a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/ameblo/pc/css/all-").concat(v,".css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/comment.css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/common151216.css")),"on"===e.is_customized?a.push(e.customized_css_url,"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/ban.css")):a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/").concat(e.skin_code,"/css/common.css"),s.getSidebarCssPath(e,n)),a;case P.Z.OFFICIAL:return a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/ameblo/pc/css/all-").concat(v,".css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/official_facebook.css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/comment.css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/common151216.css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/official.css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/official_module.").concat(H,".css")),"on"===e.is_customized?a.push(e.customized_css_url,"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/ban.css")):a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/").concat(e.skin_code,"/css/common.css"),s.getSidebarCssPath(e,n)),a;case P.Z.NEW:return a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/ameblo/pc/css/newBlog-").concat("1.36.2",".css"),"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/").concat(e.skin_code,"/css/skin.css")),i&&a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/cmn/css/official_module.").concat(H,".css")),"on"===e.is_customized&&a.push(e.customized_css_url,"".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/blog/new/css/orgn/cssedit/cssedit.css")),a;case P.Z.URANUS:var o="";return"standard"===e.template?o="templateStd":"list"===e.template?o="templateList":"tile"===e.template&&(o="templateTile"),o&&a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/ameblo/pc/css/").concat(o,"-").concat("1.30.0",".css")),"css_on"===e.allow_customize_flg&&"on"===e.is_customized||a.push("".concat(window.process.env.HTTP_PATH_BLOG_STAT,"/p_skin/").concat(e.skin_code,"/css/skin.css")),"css_on"!==e.allow_customize_flg&&"header_on"!==e.allow_customize_flg||"on"!==e.is_customized||a.push(e.customized_css_url),a;default:return a}}handleRightClick(s){this.props.isImageProtection&&("IMG"===_()(s,["target","tagName"],"")&&s.preventDefault())}render(){var s=L.Z[this.props.useLayout],t=this.state.cssList.filter(().map(();switch(this.props.blog&&this.props.blog.blog_name&&t.push({rel:"alternate",type:"application/rss+xml",title:"RSS",href:"".concat(window.process.env.HTTP_PATH_RSS,"/").concat(this.props.blog.blog_name,"/rss20.xml")}),this.props.skin.base_skin){case P.Z.DEFAULT:return(0,l.Z)(p.Fragment,{},void 0,(0,l.Z)(d.ql,{defer:!1,link:t},void 0,(0,l.Z)("html",{className:"fixed","data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"}),o||(o=(0,l.Z)("body",{id:"mainIndex"}))),this.state.loading?null:this.props.templateOld());case P.Z.NEW:return(0,l.Z)(p.Fragment,{},void 0,(0,l.Z)(d.ql,{defer:!1,link:t},void 0,(0,l.Z)("html",{className:g()("column".concat(s),"fixed"),"data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"})),this.state.loading?null:this.props.templateNew());case P.Z.OFFICIAL:return(0,l.Z)(p.Fragment,{},void 0,(0,l.Z)(d.ql,{defer:!1,link:t},void 0,(0,l.Z)("html",{className:"fixed","data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"}),c||(c=(0,l.Z)("body",{id:"mainIndex"}))),this.state.loading?null:this.props.templateOfficial());case P.Z.URANUS:return(0,l.Z)(p.Fragment,{},void 0,(0,l.Z)(d.ql,{defer:!1,link:t},void 0,(0,l.Z)("html",{className:g()("column".concat(s),"fixed"),"data-base-skin-code":this.props.skin.base_skin,"data-skin-code":this.props.skin.skin_code,lang:"ja"}),(0,l.Z)("body",{className:"skin-column".concat(s),"data-uranus-layout":"column".concat(s)})),this.state.loading?null:this.props.templateUranus());default:return null}}},n.displayName="PcBlogLayout",i=a))||i)||i}}]);