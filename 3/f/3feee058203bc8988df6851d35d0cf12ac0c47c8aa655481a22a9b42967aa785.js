"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[216],{"Nl+Y":function(e,n,i){var t=i("fhF1"),a=i("QslU"),r=(i("Oz0t"),i("7aI0")),s=i.n(r),o=i("V67U"),l=i.n(o),c=i("tLCh"),d="ma-ButtonBasic",u=function e(n){var i=n.action,r=n.children,o=n.className,l=n.complementaryModifiers,c=n.disabled,u=n.fullWidth,m=n.href,f=n.icon,h=n.kind,p=n.isSubmit,g=n.link,E=n.linkFactory,x=n.size,v=n.target,T=n.rightIcon,N=n["aria-pressed"],_=b=d+" "+d+"--"+e.kind[h],O=l?l.map(():[],j=s().apply(void 0,[""+b,o,d+"--"+x,u&&d+"--fullWidth",c&&d+"--disabled"].concat((0,t.Z)(O)));return g?(0,a.jsxs)(E,{href:m,target:v,rel:"_blank"===v?"noopener":void 0,onClick:_,className:j,children:[f&&(0,a.jsx)("span",{className:d+"-icon",children:f}),(0,a.jsx)("span",{className:d+"-content",children:r}),T&&(0,a.jsx)("span",{className:d+"-icon",children:T})]}):(0,a.jsxs)("button",{onClick:_,className:j,disabled:c,"aria-pressed":N,type:p?"submit":"button",children:[f&&(0,a.jsx)("span",{className:d+"-icon",children:f}),r&&(0,a.jsx)("span",{className:d+"-content",children:r}),T&&(0,a.jsx)("span",{className:d+"-icon",children:T})]})};u.kind={primary:"primary",search:"search",secondary:"secondary",neutral:"neutral",tertiary:"tertiary",accent:"accent",danger:"danger"},u.size={large:"large",medium:"medium",small:"small",xsmall:"xsmall"},u.complementaryModifiers={marginRight:"marginRight",marginLeft:"marginLeft",focused:"focused",hideLabelMobile:"hideLabelMobile",rounded:"rounded"},u.displayName="ButtonBasic",u.propTypes={action:l().func,children:l().node,className:l().string,complementaryModifiers:l().arrayOf(l().oneOf(Object.values(u.complementaryModifiers))),disabled:l().bool,fullWidth:l().bool,href:l().string,icon:l().node,isSubmit:l().bool,kind:l().oneOf(Object.values(u.kind)),link:l().bool,linkFactory:l().func,rightIcon:l().node,size:l().oneOf(Object.values(u.size)),target:l().string,"aria-pressed":l().bool},u.defaultProps={disabled:!1,fullWidth:!1,isSubmit:!1,kind:u.kind.primary,link:!1,linkFactory:c.Z,size:u.size.medium},n.Z=u},CjDN:function(e,n,i){i.d(n,{Z:function(){return _}});var t=i("11lP"),a=i("QslU"),r=i("Oz0t"),s=i("V67U"),o=i.n(s),l=i("3Fx5"),c=i("bBVy"),d=i("8pxB"),u=i("uvxJ"),m=i("aysb");function f(e){var n=e.onLogin,i=(0,r.useContext)(c.Z),s=i.i18n,o=i.domain,f=(0,l.tv)(),h=o.get("config").get("AUTHENTICATION").LOGIN_ERROR_TYPES,p=(0,r.useState)(!1),g=p[0],E=p[1],x=(0,r.useState)(null),v=x[0],T=x[1];return(0,a.jsxs)(a.Fragment,{children:[!v&&(0,a.jsx)(m.Z,{isSpaced:!0,isFullWidth:!0,children:(0,a.jsx)(d.Z,{tab:d.G.LOGIN,onChange:function(e){e===d.G.REGISTER&&window.open(s.url("/LINK_REGISTER"),"_self")},onForgotPasswordClick:onLogin:n,onLoginError:function(e){var n=e.errorCode,i=e.email;n!==h.BLOCKED&&n!==h.REVIEW&&n!==h.CHALLENGE||T({error:n,email:i})},onResetPasswordError:function(e){var n=(void 0===e?{}:e).email;T({email:n}),E(!0)},children:function(e){var n=e.tab,i=e.formProps;return(0,a.jsx)(a.Fragment,{children:n===d.G.LOGIN&&(0,a.jsx)(u.Z,(0,t.Z)({},i,{openLinksInNewTab:!1,defaultSessionPersist:!0,isSocialEnabled:!0}))})}})}),(0,a.jsxs)("div",{className:"ma-ContentLogin-error",children:[g&&(0,a.jsx)(d.Z.ResetPassword,{email:null==v?void 0:v.email,onSubmitSuccess:),v&&!g&&(0,a.jsx)(d.Z.ErrorState,{error:v,onClose:)]})]})}f.propTypes={onLogin:o().func.isRequired},f.displayName="ContentLogin";var h=f,p=i("Ab2B"),g=i("op6l"),E=i("U21o"),x="loading",v="content",T="fallback",N=function(e){var n=e.children,i=e.fallback,t=void 0===i?h:i,s=(0,l.tv)(),o=(0,E.C6)(),c=(0,r.useRef)(!1),d=(0,r.useState)(!1),u=d[0],m=d[1],f=(0,r.useState)(x),N=f[0],_=f[1],b=o.isReady,O=o.isAuthenticated,j=o.isLoading,L=N===v&&!O,S=return(0,r.useEffect)((,[]),(0,r.useEffect)((function(){if(b){if(!j)return c.current?void(O?_(v):s.push("/")):(_(O?v:T),void(c.current=!0));_(x)}}),[s,j,b,O]),!u||L?null:(0,a.jsxs)(p.Z,{isLoading:N===x,hideContentWhileLoading:!0,children:[(0,a.jsx)(g.Z,{value:N===v,children:),(0,a.jsx)(g.Z,{value:N===T,children:)]})};function _(e,n){return function(i){return(0,a.jsx)(N,{fallback:n,children:function(n){return(0,a.jsx)(e,(0,t.Z)({},n,i))}})}}N.propTypes={children:o().func,fallback:o().node}},"9Y+p":function(e,n,i){i.d(n,{Z:function(){return s}});var t=i("QslU"),a=(i("Oz0t"),i("V67U")),r=i.n(a);.displayName="LayoutFullHeight",s.propTypes={children:r().node}},IBpw:function(e,n,i){var t=i("11lP"),a=i("dLhX"),r=i("QslU"),s=i("Oz0t"),o=i("V67U"),l=i.n(o),c=i("bBVy"),d=i("r4X9"),u=i("3Fx5"),m=function(e){var n=e.seoDefinition,i=void 0===n?{}:n,o=(0,s.useContext)(c.Z),l=o.i18n,m=o.domain,f=(0,u.TH)(),h=""+m.get("config").get("BASE_IMAGES_URL_STATICS"),p=m.get("config").get("CURRENT_ENV_HOST");if(i&&Object.keys(i).length){var g=i.title,E=void 0===g?"HOME_SEO_TITLE":g,x=i.meta,v=void 0===x?[]:x,T=i.link,N=void 0===T?[]:T,_=v.find((),b=""+p+f.pathname,O=h+"/images/icons/icon-square-192x192.ff91f9a5f0.png";return(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("title",{children:l.t(E)}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:l.t(E)}),(0,r.jsx)("meta",{property:"og:url",content:b}),(0,r.jsx)("meta",{property:"og:image",content:O}),_&&(0,r.jsx)("meta",{property:"og:description",content:l.t(_.content)}),v.map((function(e){return(0,r.jsx)("meta",{name:e.name,property:e.property,content:l.t(e.content)},e.name)})),N.map((function(e){return(0,r.jsx)("link",(0,t.Z)({},(i=(n=e).name,s=n.content,o=(0,a.Z)(n,["name","content"]),(0,t.Z)({rel:i,href:s,key:i},o))));var n,i,s,o}))]})}return null};m.displayName="SeoHeadTags",m.propTypes={seoDefinition:l().object},n.Z=m},aysb:function(e,n,i){i.d(n,{Z:function(){return u}});var t=i("11lP"),a=i("dLhX"),r=i("QslU"),s=(i("Oz0t"),i("7aI0")),o=i.n(s),l=i("V67U"),c=i.n(l),d="ma-SharedBox";function u(e){var n,i=e.isSpaced,s=e.isFullWidth,l=(0,a.Z)(e,["isSpaced","isFullWidth"]),c=o()(d,((n={})[d+"--spaced"]=i,n[d+"--full-width"]=s,n));return(0,r.jsx)("div",(0,t.Z)({className:c},l))}u.displayName="SharedBox",u.propTypes={isSpaced:c().bool,isFullWidth:c().bool}},"40i8":function(e,n,i){i.d(n,{Z:function(){return m},x:function(){return u}});var t=i("QslU"),a=i("Oz0t"),r=i("7aI0"),s=i.n(r),o=i("V67U"),l=i.n(o),c=i("bBVy"),d="ma-SharedHelpText",u={CENTER:"CENTER",LEFT:"LEFT",RIGHT:"RIGHT"};function m(e){var n,i=e.link,r=void 0===i?"LINK_HELP_PAGE":i,o=e.align,l=void 0===o?u.LEFT:o,m=(0,a.useContext)(c.Z).i18n,f=m.t(r),h=s()(d,((n={})[d+"--centered"]=l===u.CENTER,n[d+"--left"]=l===u.LEFT,n[d+"--right"]=l===u.RIGHT,n));return(0,t.jsx)("p",{className:h,dangerouslySetInnerHTML:{__html:m.t("SHARED_HELP_TEXT",{linkStart:'<a href="'+f+'" target="_blank">',linkEnd:"</a>",boldStart:"<strong>",boldEnd:"</strong>",space:"&nbsp;"})}})}m.displayName="SharedHelpText",m.propTypes={link:l().string,align:l().oneOf(Object.keys(u))}},Ab2B:function(e,n,i){var t=i("QslU"),a=(i("Oz0t"),i("7aI0")),r=i.n(a),s=i("V67U"),o=i.n(s),l=i("jrL8"),c=function(e){var n,i,a=e.isLoading,s=e.isAnimated,o=e.hideContentWhileLoading,l=e.children,c=e.loaderFactory,d="ma-SharedLoadingContent",u=r()(((n={})[d+"-spinnerContainer"]=!0,n[d+"-spinnerContainer--isAnimated"]=s,n)),m=r()(((i={})[d+"-veil"]=!0,i[d+"-veil--opaque"]=o,i));return(0,t.jsxs)("div",{className:d,children:[l,a&&(0,t.jsx)("div",{className:m,children:(0,t.jsx)("span",{className:u,children:(0,t.jsx)(c,{})})})]})};c.displayName="SharedLoadingContent",c.propTypes={isLoading:o().bool,isAnimated:o().bool,hideContentWhileLoading:o().bool,children:o().node,loaderFactory:o().func},c.defaultProps={isAnimated:!0,loaderFactory:hideContentWhileLoading:!1},n.Z=c},jrL8:function(e,n,i){i.d(n,{E:function(){return c}});var t=i("QslU"),a=(i("Oz0t"),i("7aI0")),r=i.n(a),s=i("V67U"),o=i.n(s),l="ma-SharedSpinner",c={M:"m",L:"l",XL:"xl"},d=function(e){var n,i=e.className,a=e.size,s=void 0===a?c.L:a,o=e.isOverlay,d=e.isTight,u=r()(l,i,((n={})[l+"--"+s]=!0,n[l+"--overlay"]=o,n[l+"--tight"]=d,n));return(0,t.jsx)("span",{className:u})};d.displayName="SharedSpinner",d.propTypes={className:o().string,size:o().oneOf(Object.values(c)),isOverlay:o().bool,isTight:o().bool},n.Z=d},Nqr0:function(e,n,i){var t=i("QslU"),a=(i("Oz0t"),i("7aI0")),r=i.n(a),s=i("V67U"),o=i.n(s),l=i("Puin"),c=i("gPdi"),d="ma-SharedVerifiedStatus",u=function(e){var n,i,a=e.children,s=e.title,o=e.subTitle,u=e.icon,m=e.imageUrl,f=e.imageAlt,h=e.animationOverImage,p=e.loopAnimation,g=e.cta,E=e.secondaryCta,x=e.fixedCta,v=e.narrowed,T=e.additionalCategories,N=e.bannerCoches,_=r()(d+"-buttons",((n={})[d+"-buttons--fixed"]=x,n)),b=r()(d,((i={})[d+"--narrowed"]=v,i)),O=function(){return(0,t.jsx)("img",{className:d+"-image",alt:f||s,title:s,src:m})};return(0,t.jsxs)("div",{className:b,children:[(0,t.jsx)("div",{className:d+"-caption",children:(0,c.UM)(s)}),(0,t.jsx)("span",{className:d+"-subtitle",children:(0,c.UM)(o)}),h&&m?(0,t.jsx)(l.J5,{autoplay:!0,src:h,className:d+"-player",loop:p,children:(0,t.jsx)(O,{})}):m&&(0,t.jsx)(O,{}),u&&(0,t.jsx)("div",{className:d+"-icon",children:u}),T,N&&(0,t.jsx)("div",{className:d+"-banner",children:N}),(0,t.jsxs)("div",{className:_,children:[g&&(0,t.jsx)("div",{className:d+"-button",children:g}),E&&(0,t.jsx)("div",{className:d+"-button",children:E})]}),a&&(0,t.jsx)("span",{className:d+"-content",children:a})]})};u.displayName="SharedVerifiedStatus",u.propTypes={children:o().node,title:o().string,subTitle:o().string,imageUrl:o().string,imageAlt:o().string,animationOverImage:o().string,loopAnimation:o().bool,icon:o().node,cta:o().node,secondaryCta:o().node,fixedCta:o().bool,narrowed:o().bool,additionalCategories:o().node,bannerCoches:o().node},n.Z=u},p7xU:function(e,n,i){i.r(n),i.d(n,{default:);var t=i("Tim7"),a=i("jbFD"),r=i.n(a),s=i("Oz0t"),o=i("beVP"),l=i("2GZr"),c=i("QslU"),d=i("bBVy"),u=i("Fd55"),m=i("WrYh"),f=i("3Fx5"),h=i("Nl+Y"),p=function(e){var n=e.ssr,i=void 0!==n&&n,t=e.className,a=(0,s.useState)(i),r=a[0],o=a[1];return(0,s.useEffect)((function(){!1===r&&o(!0)}),[]),!1===r?null:(0,c.jsx)("svg",{className:t,viewBox:"0 0 24 24",children:(0,c.jsx)("path",{d:"M3 7a1 1 0 110-2h11a1 1 0 010 2H3zm0 4a1 1 0 010-2h11a1 1 0 010 2H3zm0 4a1 1 0 010-2h11a1 1 0 010 2H3zm0 4a1 1 0 010-2h11a1 1 0 010 2H3zM18 7a1 1 0 010-2h3a1 1 0 010 2h-3zm0 4a1 1 0 010-2h3a1 1 0 010 2h-3zm0 4a1 1 0 010-2h3a1 1 0 010 2h-3zm0 4a1 1 0 010-2h3a1 1 0 010 2h-3z"})})},g=(0,s.memo)(p),E=function(e){var n=e.ssr,i=void 0!==n&&n,t=e.className,a=(0,s.useState)(i),r=a[0],o=a[1];return(0,s.useEffect)((,[]),!1===r?null:(0,c.jsx)("svg",{className:t,viewBox:"0 0 24 24",children:(0,c.jsx)("path",{d:"M7 4a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm0-2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm6 11.067V17a1 1 0 01-2 0v-3.933H7a1 1 0 010-2h4V7a1 1 0 012 0v4.067h4a1 1 0 110 2h-4z"})})},x=(0,s.memo)(E),v=i("40i8"),T=i("Nqr0"),N=i("op6l");function _(){var e,n,i=(0,s.useContext)(d.Z),t=i.i18n,a=i.domain,r=(0,f.tv)(),h=null==r||null==(e=r.location)?void 0:e.query,p=h.taskId,g=h.adId,E=(0,u.Z)("(min-width:576px)"),x=(0,s.useState)(),v=x[0],_=x[1],O=(0,s.useState)(!0),j=O[0],L=O[1];return(0,m.Z)((0,o.Z)((function(){var e,i,r,s,o,c,d,u,m,f;return(0,l.__generator)(this,(function(l){switch(l.label){case 0:return L(!1),n=b({i18n:t,adId:g,isDesktop:E}),e="",i=a.get("config").get("PAGES"),r=i.MODERATION_OBSOLETE_AD_AVAILABLE,s=i.MODERATION_OBSOLETE_AD_REMOVED,o=i.MODERATION_OBSOLETE_AD_ERROR,c=a.get("config").get("MODERATION").ERRORS,d=c.ConflictModerationError,u=c.ForbiddenModerationError,[4,a.get("delete_task_moderation_use_case").execute({id:p})];case 1:return m=l.sent(),f=m[0],m[1],f?f instanceof d?(_(n.removed),e=s):(f instanceof u||f)&&(_(n.error),e=o):(_(n.available),e=r),a.get("call_view_tracking_use_case").execute({page:e}),[2]}}))}))),(0,c.jsx)("div",{className:"ma-ContentObsoleteAd",children:(0,c.jsx)(N.Z,{value:!j&&v,children:function(){return(0,c.jsx)(T.Z,{title:v.title,subTitle:v.subTitle,imageUrl:v.imageUrl,cta:v.cta,children:v.children})}})})}var b=function(e){var n=e.i18n,i=e.adId,t=e.isDesktop?h.Z.size.medium:h.Z.size.large,a=(0,c.jsx)(v.Z,{link:"LINK_PTA_TIPS",align:v.x.CENTER});return{available:{title:n.t("CONTENT_OBSOLETE_AD_AVAILABLE_TITLE"),subTitle:n.t("CONTENT_OBSOLETE_AD_AVAILABLE_SUBTITLE"),imageUrl:"https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/moderation/ok.8f5b1e5ff6.svg",cta:(0,c.jsx)(h.Z,{isSubmit:!0,link:!0,href:n.url("/LINK_AD_DETAIL/")+"r"+i+".htm",size:t,fullWidth:!0,children:n.t("CONTENT_OBSOLETE_AD_AVAILABLE_CTA")})},removed:{title:n.t("CONTENT_OBSOLETE_AD_REMOVED_TITLE"),subTitle:n.t("CONTENT_OBSOLETE_AD_REMOVED_SUBTITLE"),imageUrl:"https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/moderation/deleted.33af46dd09.svg",cta:(0,c.jsx)(h.Z,{isSubmit:!0,link:!0,href:n.url("/LINK_PUBLISH_AD/"),size:t,fullWidth:!0,kind:h.Z.kind.accent,icon:(0,c.jsx)(x,{}),children:n.t("CONTENT_OBSOLETE_AD_REMOVED_CTA")}),children:a},error:{title:n.t("CONTENT_OBSOLETE_AD_GENERAL_ERROR_TITLE",{paragraphBreak:"<br>"}),subTitle:"",imageUrl:"https://scm-milanuncios-frontend-pro.milanuncios.com/statics/images/common/fail.1f90a388ee.svg",cta:(0,c.jsx)(h.Z,{isSubmit:!0,link:!0,href:n.url("/LINK_MY_ADS/"),size:t,fullWidth:!0,icon:(0,c.jsx)(g,{}),children:n.t("CONTENT_OBSOLETE_AD_GENERAL_ERROR_CTA")}),children:a}}};_.displayName="ContentObsoleteAd",_.propTypes={};var O=i("CjDN"),j=i("Bd1x"),L=i("9Y+p"),S=i("IBpw"),y=i("h8GR"),A=(0,O.Z)(_),I=function(e){var n=e.page,i=e.seoDefinition;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(j.Z,{children:(0,c.jsxs)(L.Z,{children:[(0,c.jsx)(S.Z,{seoDefinition:i}),(0,c.jsx)(y.Z,{disableInitialCall:!0}),(0,c.jsx)(j.Z.Header,{page:n}),(0,c.jsx)(j.Z.Body,{children:(0,c.jsx)(j.Z.MainContent,{children:(0,c.jsx)(A,{})})})]})}),(0,c.jsx)(j.Z.Footer,{})]})};I.displayName="ObsoleteAd",I.getInitialProps=function(){var e=(0,t.Z)(r().mark((function e(n){var i,t,a,s,o,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.context.domain,t=i.get("config").get("PAGES"),a=t.MODERATION_OBSOLETE_AD,e.next=4,i.get("get_definition_by_page_seo_use_case").execute({page:a});case 4:return s=e.sent,o=s[0],l=s[1],o&&console.error(o),e.abrupt("return",{page:a,seoDefinition:l||{title:"HOME_SEO_TITLE",meta:[],link:[]}});case 9:case"end":return e.stop()}}),e)})));return ();var C=I},JRnX:]);