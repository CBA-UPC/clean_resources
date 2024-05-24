"use strict";(self.webpackChunkrelap_widgets=self.webpackChunkrelap_widgets||[]).push([[64717],{22645:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(32747),n=r.n(o),i=r(45697),l=r.n(i),a=r(90107);function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class d extends o.PureComponent{render(){const{description:e,descriptionCfg:t,onReady:r,cutTextUntilThumbnailBottom:o,cutUntilEl:i,labelEl:l}=this.props;return Z,{maxLines:t.maxLines,text:e,onReady:r,cutUntilEl:i,cutTextUntilThumbnailBottom:o,labelEl:l})}}s(d,"propTypes",{styles:l().object,type:l().oneOf(["normal","ad","promo","exchange"]),size:l().oneOf(["normal","wide"]),title:l().string,titleCfg:l().shape({maxLines:l().number}),description:l().string,descriptionCfg:l().shape({maxLines:l().number}),label:l().string,category:l().string,categoryUrl:l().string,pubDate:l().string,meta:l().object,onReady:l().func,cutUntilEl:l().object,cutTextUntilThumbnailBottom:l().bool,labelEl:l().object}),s(d,"defaultProps",{styles:{classes:{}},type:"normal",size:"normal",title:"",titleCfg:{},description:"",descriptionCfg:{},label:"",category:"",categoryUrl:"",pubDate:"",meta:{},onReady:()=>{},cutTextUntilThumbnailBottom:!1,cutUntilEl:null,labelEl:null})},90107:(e,t,r)=>{r.d(t,{Z:()=>f});var o=r(23493),n=r.n(o),i=r(51463),l=r.n(i),a=r(32747),s=r.n(a),d=r(45697),c=r.n(d),p=r(82897),u=r(3798);const m={ellipsizer:{"max-height":0,overflow:"hidden","word-break":"break-word"}};function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h={},b=new p.gq;class f extends a.PureComponent{constructor(e){super(e),g(this,"applyCss",(()=>{const{local:e}=this.context,{maxLines:t,isResponsive:r,cutTextUntilThumbnailBottom:o,cutUntilEl:n,labelEl:i}=this.props,l=parseInt(getComputedStyle(this._rootEl).width,10),a=Math.max(.07857142857140001*l,14);e.jss.createRule({"font-size":r?`${a}px`:"inherit"}).applyTo(this._rootEl);const s=parseFloat(getComputedStyle(this._rootEl).lineHeight);let d=t,c=!1;if(o&&n&&(t||0===t)){var p,u,m,g,h,b;const e=i?i.getBoundingClientRect().height+parseInt(getComputedStyle(i).marginTop,10)+parseInt(getComputedStyle(i).marginBottom,10):0,r=n.getBoundingClientRect().bottom,o=this._rootEl.getBoundingClientRect().top,l=0===(null===(p=this._rootEl.parentNode.previousElementSibling)||void 0===p||null===(u=p.getBoundingClientRect())||void 0===u?void 0:u.bottom)||void 0===(null===(m=this._rootEl.parentNode.previousElementSibling)||void 0===m||null===(g=m.getBoundingClientRect())||void 0===g?void 0:g.bottom)?this._rootEl.parentNode.parentNode.getBoundingClientRect().top:((null===(h=this._rootEl.parentNode.previousElementSibling)||void 0===h||null===(b=h.getBoundingClientRect())||void 0===b?void 0:b.bottom)||0)+15,a=0!==o?o:l,f=Math.floor((r-e-a)/s);c=f<=0||isNaN(f),d=t<=f&&0!==t?t:c?0:f}e.jss.createRule({display:c?"none":"block"}).applyTo(this._rootEl.parentNode),e.jss.createRule({"max-height":(d!==1/0||o)&&d||c?s*d:"none"}).applyTo(this._rootEl),this.handleEllipsizerReady()})),g(this,"handleEllipsizerReady",(()=>{const{onReady:e}=this.props;e()})),g(this,"handleWindowResize",(()=>{this.applyCss()})),this.handleEllipsizerReady=l()(this.handleEllipsizerReady),this.handleWindowResize=n()(this.handleWindowResize,300)}componentWillMount(){const{local:e}=this.context;(0,u.fu)({jss:e.jss,stylesSrc:m,styleSheetsDict:h,widgetId:e.id,sheetsManager:b})}componentDidMount(){const{local:e}=this.context;e.innerWrapperEl.addEventListener("resize",this.handleWindowResize),this.applyCss()}componentDidUpdate(){this.applyCss()}componentWillUnmount(){const{local:e}=this.context;(0,u.Yl)({widgetId:e.id,styleSheetsDict:h,sheetsManager:b}),e.innerWrapperEl.removeEventListener("resize",this.handleWindowResize),this.handleWindowResize.cancel()}render(){const{local:e}=this.context,{text:t,children:r}=this.props,o=h[e.id].sheet,n=r||t;return s().createElement("div",{ref:e=>{this._rootEl=e},className:o.classes.ellipsizer},n)}}g(f,"propTypes",{maxLines:c().number,text:c().string,children:c().node,onReady:c().func,isResponsive:c().bool,cutTextUntilThumbnailBottom:c().bool,cutUntilEl:c().object,labelEl:c().object}),g(f,"contextTypes",{local:c().object.isRequired}),g(f,"defaultProps",{maxLines:1/0,text:"",children:null,onReady:()=>{},isResponsive:!1,cutTextUntilThumbnailBottom:!1,cutUntilEl:null,labelEl:null})},84675:(e,t,r)=>{r.d(t,{Z:()=>f});var o=r(32747),n=r.n(o),i=r(45697),l=r.n(i),a=r(82897),s=r(94184),d=r.n(s),c=r(85213),p=r(60226),u=r(3798);const m={recItemInner:{position:"relative"},closeButton:{display:"none","z-index":1e4,"&$visible":{display:"block"}},visible:{},video:{position:"relative","z-index":1e3},thumbnail:{position:"relative","z-index":100}};function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h={},b=new a.gq;class f extends o.PureComponent{constructor(){super(...arguments),g(this,"getAdChoiceItems",(()=>{const{advertiserInfoOverlay:e,closeButtonOverlay:t,ordTokenItem:r}=this.props;return[{id:"closeButton",text:"Скрыть объявление",overlay:t},{id:"advertiserInfo",text:"О рекламодателе",overlay:e},{id:"ordToken",type:"customItem",item:r}].filter((e=>{let{overlay:t,item:r}=e;return Boolean(t||r)}))})),g(this,"renderAdChoice",(()=>{const{styles:e}=this.props,t=this.getAdChoiceItems();return f.shouldAdChoiceRender(t)?n().createElement(c.Z,{items:t,styles:e}):null})),g(this,"renderAgeRestriction",(()=>{const{ageRestriction:e,styles:t}=this.props;if(null===e)return null;const r=this.getAdChoiceItems(),o=f.shouldAdChoiceRender(r);return n().createElement(p.Z,{ageRestriction:e,adChoiceRendered:o,styles:t})})),g(this,"renderVideo",(()=>{const{local:e}=this.context,{styles:t,recComposition:r,video:o}=this.props;if(!o)return null;const i=h[e.id].sheet,l=d()(i.classes.video,t.classes.video);switch(r){case"normalPlate":case"normalList":case"fullPlate":case"fullList":return n().createElement("div",{className:l},o);default:return null}})),g(this,"renderThumbnail",(()=>{const{local:e}=this.context,{styles:t,recComposition:r,renderLink:o,thumbnail:i}=this.props;if(!i)return null;const l=h[e.id].sheet,a=d()(l.classes.thumbnail,t.classes.thumbnail);switch(r){case"normalPlate":case"normalList":return o({children:i,className:a});case"fullPlate":case"fullList":return n().createElement("div",{className:a},i);default:return null}})),g(this,"renderTitle",(()=>{const{styles:e,recComposition:t,renderLink:r,title:o}=this.props;if(!o)return null;switch(t){case"normalPlate":case"normalList":return r({children:o,className:e.classes.title});case"fullPlate":case"fullList":return n().createElement("div",{className:e.classes.title},o);default:return null}})),g(this,"renderDescription",(()=>{const{styles:e,description:t}=this.props;return t?n().createElement("div",{className:e.classes.description},t):null})),g(this,"renderDisclaimer",(()=>{const{styles:e,disclaimer:t}=this.props;return t?n().createElement("div",{className:e.classes.disclaimer},t):null})),g(this,"renderLabel",(()=>{const{styles:e,type:t,label:r}=this.props;if(!r)return null;switch(t){case"ad":const t=d()(e.classes.label,e.classes.adLabel);return n().createElement("div",{ref:e=>{this._labelEl=e},className:t},r);case"promo":const o=d()(e.classes.label,e.classes.promoLabel);return n().createElement("div",{ref:e=>{this._labelEl=e},className:o},r);case"exchange":const i=d()(e.classes.label,e.classes.exchangeLabel);return n().createElement("div",{ref:e=>{this._labelEl=e},className:i},r);default:return null}})),g(this,"renderCategory",(()=>{const{styles:e,category:t,categoryUrl:r}=this.props;if(!t)return null;if(t&&r){const o=d()(e.classes.recCategory,e.classes.recCategoryWithLink);return n().createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:o},t)}return n().createElement("div",{className:e.classes.recCategory},t)}))}componentWillMount(){const{local:e}=this.context;(0,u.fu)({jss:e.jss,stylesSrc:m,styleSheetsDict:h,widgetId:e.id,sheetsManager:b})}componentDidMount(){const{setLabelEl:e}=this.props;e(this._labelEl)}componentDidUpdate(){const{setLabelEl:e}=this.props;e(this._labelEl)}componentWillUnmount(){const{local:e}=this.context;(0,u.Yl)({widgetId:e.id,styleSheetsDict:h,sheetsManager:b})}static shouldAdChoiceRender(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).length>0}render(){const{local:e}=this.context,{styles:t,RecLayout:r,type:o,size:i,renderLinkOverlay:l,recComposition:a,meta:s,pubDate:c,callButton:p}=this.props,u=h[e.id].sheet,m=d()(u.classes.recItemInner,t.classes.recItemInner),g="fullPlate"===a||"fullList"===a?l({zIndex:200}):null;return n().createElement("div",{className:m},n().createElement(r,{styles:t,type:o,size:i,linkOverlay:g,adChoice:this.renderAdChoice(),ageRestriction:this.renderAgeRestriction(),closeButton:null,video:this.renderVideo(),thumbnail:this.renderThumbnail(),title:this.renderTitle(),description:this.renderDescription(),disclaimer:this.renderDisclaimer(),label:this.renderLabel(),category:this.renderCategory(),pubDate:c,meta:s,callButton:p}))}}g(f,"propTypes",{styles:l().object,RecLayout:l().oneOfType([l().func,l().object]).isRequired,recComposition:l().string.isRequired,type:l().oneOf(["normal","ad","promo","exchange"]),size:l().oneOf(["normal","wide"]),renderLink:l().func,renderLinkOverlay:l().func,closeButtonOverlay:l().node,advertiserInfoOverlay:l().node,ordTokenItem:l().node,video:l().node,thumbnail:l().node,title:l().node,description:l().node,disclaimer:l().node,label:l().node,callButton:l().node,ageRestriction:l().number,category:l().string,categoryUrl:l().string,pubDate:l().string,meta:l().object,setLabelEl:l().func}),g(f,"contextTypes",{local:l().object.isRequired}),g(f,"defaultProps",{styles:{classes:{}},type:"normal",size:"normal",renderLink:()=>{},renderLinkOverlay:()=>{},closeButtonOverlay:null,advertiserInfoOverlay:null,ordTokenItem:null,video:null,thumbnail:null,title:null,description:null,disclaimer:null,label:null,callButton:null,ageRestriction:null,category:"",categoryUrl:"",pubDate:"",meta:{},setLabelEl:()=>{}})},955:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(32747),n=r.n(o),i=r(45697),l=r.n(i),a=r(90107);function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class d extends o.PureComponent{render(){var e;const{title:t,titleCfg:r,onReady:o,cutTextUntilThumbnailBottom:i,cutUntilEl:l,labelEl:s}=this.props;return n().createElement(a.Z,{cutUntilEl:l,cutTextUntilThumbnailBottom:i,isResponsive:!(null==r||null===(e=r.font)||void 0===e||!e.responsive),maxLines:r.maxLines,text:t,onReady:o,labelEl:s})}}s(d,"propTypes",{styles:l().object,type:l().oneOf(["normal","ad","promo","exchange"]),size:l().oneOf(["normal","wide"]),title:l().string,titleCfg:l().shape({maxLines:l().number,font:l().shape({responsive:l().bool})}),description:l().string,descriptionCfg:l().shape({maxLines:l().number}),label:l().string,category:l().string,categoryUrl:l().string,pubDate:l().string,meta:l().object,onReady:l().func,cutUntilEl:l().object,cutTextUntilThumbnailBottom:l().bool,labelEl:l().object}),s(d,"defaultProps",{styles:{classes:{}},type:"normal",size:"normal",title:"",titleCfg:{},description:"",descriptionCfg:{},label:"",category:"",categoryUrl:"",pubDate:"",meta:{},onReady:()=>{},cutTextUntilThumbnailBottom:!1,cutUntilEl:null,labelEl:null})},56329:(e,t,r)=>{r.d(t,{Z:()=>o});const o={itemScrollWrapper:{padding:e=>`${(e=>(e=>"simple"===e.cfg.grid.type?e.cfg.grid.simple.gutter:0)(e)/2)(e)}px`},sideButtonWrapper:{position:"absolute",top:0,zIndex:1e3,height:"100%"},sideButtonInner:{position:"absolute",top:"116px",height:"40px",width:"40px",display:"block",cursor:"pointer",transition:"0.2s ease-in-out",borderRadius:"50%",border:"2px solid #FFF",backgroundColor:"#FFF",fontSize:0,filter:"drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.2)) drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.2))","&::before":{top:"50%",left:"50%",width:"12px",height:"12px",content:'""',display:"block",position:"absolute",transition:"0.2s ease-in-out",transform:"translateX(-50%) translateY(-50%) rotate(-45deg)",border:"2px solid #BFC4C8"},"&:hover":{filter:"drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.3))"},"&:hover::before":{borderColor:"#000"}},sideButtonLeft:{left:0,transform:"translateY(-50%) translateX(8px)",marginLeft:"-100px","$itemScrollWrapper:hover &":{marginLeft:0},"&::before":{borderBottom:"none",borderRight:"none",marginLeft:"2px"}},sideButtonRight:{right:0,transform:"translateY(-50%) translateX(-8px)",marginRight:"-100px","$itemScrollWrapper:hover &":{marginRight:0},"&::before":{borderTop:"none",borderLeft:"none",marginLeft:"-2px"}},sideButtonLeftHide:{marginLeft:e=>((e=>{var t,r,o,n;return(null===(t=e.cfg)||void 0===t||null===(r=t.grid)||void 0===r||null===(o=r.simple)||void 0===o||null===(n=o.carousel)||void 0===n?void 0:n.buttons)||{}})(e).leftButtonHide?-100:0)+"px"},animate:{transition:e=>`all ${(e=>{var t,r,o,n,i;return(null===(t=e.cfg)||void 0===t||null===(r=t.grid)||void 0===r||null===(o=r.simple)||void 0===o||null===(n=o.carousel)||void 0===n||null===(i=n.buttons)||void 0===i?void 0:i.animationDuration)||.5})(e)}s`},sideButtonLeftHideAtStart:{left:"100%",transform:"translateY(-50%) translateX(-100%) translateX(-20px)"},carouselLoaderWrapper:{minWidth:"64px"},"@media screen and (max-width: 480px)":{sideButtonInner:{position:"absolute",top:"106px"}},"@media (hover: none)":{sideButtonLeft:{marginLeft:0},sideButtonRight:{marginRight:0}}}},39344:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(72584);const n=e=>{let{carouselGridStyles:t={},formStyles:r={},widgetStyles:n={},exposedSliderStyles:i={},exposedFlyRollStyles:l={}}=e;return{exposedSliderStylesSrc:i,exposedFlyRollStyleSrc:l,widgetStylesSrc:{...o.Z,...t,...r,...n}}}},31389:(e,t,r)=>{r.d(t,{Z:()=>L});var o=r(83300);const n=e=>"simple"===e.cfg.grid.type?e.cfg.grid.simple.gutter:0,i=e=>e.cfg.itemsContainer||{},l=e=>e.cfg.mainTitle||{},a=e=>l(e).font||{},s=e=>l(e).underline||{},d=e=>e.cfg.recThumbnail||{},c=e=>e.cfg.recTitle||{},p=e=>c(e).font||{},u=e=>e.cfg.recDescription||{},m=e=>u(e).font||{},g=e=>e.cfg.recPromo||{},h=e=>g(e).font||{},b=e=>e.cfg.recDisclaimer||{},f=e=>b(e).font||{},v=e=>e.cfg.recItem||{},x=e=>d(e).visible?`${(d(e).width||0)+(0===d(e).margin?0:d(e).margin||25)}px`:0,y={arial:"Arial, Helvetica",arialblack:"Arial Black, Gadget",impact:"Impact, Charcoal",tahoma:"Tahoma, Geneva",trebuchetms:"Trebuchet MS, Helvetica",verdana:"Verdana, Geneva",georgia:"Georgia",palatino:"Palatino",times:"Times New Roman"},w=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"arial";if(!e.type)return y.arial;switch(e.type){case"custom":return`'${e.custom.family}'`;case"google":return e.google.family;default:return y[e.regular.family||t]}},L={disclaimer:{"z-index":200,position:e=>d(e).visible?"absolute":"relative",bottom:0,right:0,left:0,overflow:"hidden","white-space":"nowrap",padding:0,width:"auto",height:"max(11%, 20px)","-webkit-mask-image":"linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)","mask-image":"linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)","font-family":e=>w(f(e)),"font-weight":e=>f(e).weight||"400","font-style":e=>f(e).style||"normal","font-size":e=>f(e).size||"13px","line-height":e=>f(e).lineHeight||"1.3","text-decoration":e=>f(e).underline||"none","letter-spacing":e=>f(e).letterSpacing||0,border:e=>b(e).border||"none",background:e=>(e=>b(e).background||((e=>"fullPlate"===e.cfg.recComposition||"normalPlate"===e.cfg.recComposition)(e)?"rgba(255, 255, 255, 0.75)":"transparent"))(e),color:e=>f(e).color||"#666",display:"flex","align-items":"center","$recItemFullList &, $recItemNormalList &":{height:e=>{const{width:t=1,aspectRatioHeight:r=1,aspectRatioWidth:o=1}=d(e),n=t*r*.11/o;return n>20?`${n}px`:"20px"},position:"relative","margin-top":"0px","margin-left":x}},thumbnailWrapper:{position:"relative"},disclaimerText:{position:"absolute",transition:"transform linear",transform:"translateX(0px)",padding:"2px 5px 0"},sliderLayout:{padding:e=>n(e)/2+"px",background:"#fff"},sliderLayoutTransparent:{padding:0,background:"transparent"},mainTitle:{margin:e=>l(e).margin||"0","font-family":e=>w(a(e)),"font-weight":e=>a(e).weight||"400","font-style":e=>a(e).style||"normal","font-size":e=>a(e).size||"20px","line-height":e=>a(e).lineHeight||"20px",color:e=>a(e).color||"#1a1a1a","text-decoration":e=>a(e).underline||"none","letter-spacing":e=>a(e).letterSpacing||0,"text-align":e=>l(e).textAlign||"left",padding:e=>l(e).padding||"0 0 10px",border:e=>l(e).border||"none",background:e=>l(e).background||"none",transition:e=>{var t;return(null===(t=l(e).hover)||void 0===t?void 0:t.transition)||"color 1s, easy"},"$widgetBaseLayout &:hover":{color:e=>{var t;return(null===(t=l(e).hover)||void 0===t?void 0:t.color)||"#1a1a1a"},"text-decoration":e=>{var t;return(null===(t=l(e).hover)||void 0===t?void 0:t.underline)||"none"}},"&::before":{content:'""',display:"inline-block",margin:e=>(e=>`0 0 0 ${n(e)/2}px`)(e)},"&::after":{content:'""',width:"100%",display:e=>s(e).visible?"block":"none","border-bottom-color":e=>s(e).color||"#ebebeb","border-bottom-width":e=>`${s(e).width||1}px`,"border-bottom-style":e=>s(e).style||"solid","margin-top":e=>`${s(e).marginTop||10}px`}},widgetBaseLayout:{},widgetBaseLayoutFlyrolled:{padding:10},itemsContainer:{margin:e=>(e=>n(e)/2+"px")(e),padding:e=>i(e).padding||0,"border-radius":e=>i(e).borderRadius||0,background:e=>i(e).background||"none"},customRecWrapper:{},recItemNormalPlate:{display:"flex"},recItemNormalList:{extend:"recItemNormalPlate"},recItemFullList:{extend:"recItemNormalPlate"},recItemFullPlate:{extend:"recItemNormalPlate"},recItemNormalSize:{},recItemWideSize:{},recItemInner:{display:"block",overflow:e=>""+(v(e).overflow?"":"hidden"),margin:e=>(e=>{const t=n(e);return t?`-${t/2}px`:v(e).margin||0})(e),width:e=>`calc(100% + ${n(e)}px)`,padding:e=>n(e)/2+"px",transition:e=>{var t;return(null===(t=v(e).hover)||void 0===t?void 0:t.transition)||"background 0s"},"$recItemNormalList &":o.d,"$recItemFullList &":o.d,"$recItemFullList &:hover, $recItemFullPlate &:hover":{"&::before":{background:e=>{var t;return(null===(t=v(e).hover)||void 0===t?void 0:t.background)||"#f9fafb"},"border-color":e=>{var t;return(null===(t=v(e).hover)||void 0===t?void 0:t.borderColor)||""}}},"&::before":{content:'""',position:"absolute",background:e=>v(e).background||"none","border-width":e=>v(e).borderWidth||0,"border-style":e=>v(e).borderStyle||"solid","border-color":e=>v(e).borderColor||"transparent","border-radius":e=>v(e).borderRadius||0,transition:e=>{var t;return(null===(t=v(e).hover)||void 0===t?void 0:t.transition)||"background 0s"},inset:e=>v(e).backgroundInset||0}},menuWrapper:{"&&":{position:"absolute",top:e=>n(e)/2+"px",right:e=>n(e)/2+"px",maxWidth:e=>`calc(100% - ${n(e)}px)`,"$recItemFullList &, $recItemNormalList &":{right:"auto",left:e=>n(e)/2+"px","& ~ $thumbnailWrapper":{marginTop:e=>d(e).visible?"":35}}}},ageRestrictionWrapper:{"&&":{"--adchoice-transform":"translate(0, 35px)",position:"absolute",top:e=>n(e)/2+"px",right:e=>n(e)/2+"px",maxWidth:e=>`calc(100% - ${n(e)}px)`,"$recItemFullList &, $recItemNormalList &":{"--adchoice-transform":e=>d(e).visible?"translate(0, 35px)":"translate(25px, 0px)",top:e=>n(e)/2+3+"px",right:"auto",left:e=>n(e)/2+"px","& ~ $thumbnailWrapper":{marginTop:e=>d(e).visible?"":35}}}},closeButton:{position:"absolute",color:"#FFF",transition:"opacity 350ms ease 0s",opacity:.8,filter:"drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.4))","&:hover":{opacity:1},"& svg":{width:"100%",height:"100%"}},closeButtonSmall:{top:e=>n(e)/2+5+"px",right:e=>n(e)/2+5+"px",width:"16px",height:"16px"},closeButtonMedium:{top:e=>n(e)/2+5+"px",right:e=>n(e)/2+5+"px",width:"20px",height:"20px"},closeButtonLarge:{top:e=>n(e)/2+10+"px",right:e=>n(e)/2+10+"px",width:"24px",height:"24px"},closeButtonOverlay:{},"@keyframes thumbnailInViewportAnimation":{from:{transform:"translateX(0) scale(1.2)"},"25%, 50%":{transform:"translateX(-10px) scale(1.2)"},"75%, 100%":{transform:"translateX(0) scale(1.2)"}},thumbnail:{display:"block","border-radius":e=>d(e).borderRadius||"2px",overflow:"hidden","$recItemWideSize &":{border:"1px solid #b2b2b2"},"$recItemFullList &, $recItemNormalList &":{float:"left","margin-right":e=>`${(e=>0===d(e).margin?0:d(e).margin||25)(e)}px`,width:e=>`${d(e).width||0}px`},'& img[data-rec-type="ad"]':{transform:e=>d(e).isInViewportAnimation?"scale(1.2)":"initial",transformOrigin:"center left",animation:e=>d(e).isInViewportAnimation?"$thumbnailInViewportAnimation 8s ease infinite":"none"}},video:{extend:"thumbnail"},textContent:{"$recItemFullList &, $recItemNormalList &":{"margin-left":e=>x(e)}},title:{display:"block","font-family":e=>w(p(e)),"font-weight":e=>p(e).weight||"400","font-style":e=>p(e).style||"normal","font-size":e=>p(e).size||"18px","line-height":e=>p(e).lineHeight||"1.3",color:e=>p(e).color||"#1a1a1a","text-decoration":e=>p(e).underline||"none","letter-spacing":e=>p(e).letterSpacing||0,"text-align":e=>c(e).textAlign||"left",padding:e=>c(e).padding||"0",border:e=>c(e).border||"none","$recItemNormalPlate &, $recItemFullPlate &":{margin:e=>c(e).margin||"20px 0 0"},transition:e=>{var t;return(null===(t=c(e).hover)||void 0===t?void 0:t.transition)||"color"},"$recItemNormalPlate:hover &, $recItemFullPlate:hover &, $recItemFullList:hover &, $recItemNormalList:hover &":{color:e=>{var t;return(null===(t=c(e).hover)||void 0===t?void 0:t.color)||"#1a1a1a"},"text-decoration":e=>{var t;return(null===(t=c(e).hover)||void 0===t?void 0:t.underline)||"none"}}},description:{margin:e=>u(e).margin||"15px 0 0","font-family":e=>w(m(e)),"font-weight":e=>m(e).weight||"400","font-style":e=>m(e).style||"normal","font-size":e=>m(e).size||"14px","line-height":e=>m(e).lineHeight||"1.2",color:e=>m(e).color||"#1a1a1a","text-decoration":e=>m(e).underline||"none","letter-spacing":e=>m(e).letterSpacing||0,"text-align":e=>u(e).textAlign||"left",padding:e=>u(e).padding||"0",border:e=>u(e).border||"none",transition:e=>{var t;return(null===(t=u(e).hover)||void 0===t?void 0:t.transition)||"color 1s, easy"},"$recItemNormalPlate:hover &, $recItemFullPlate:hover &, $recItemFullList:hover &, $recItemNormalList:hover &":{color:e=>{var t;return(null===(t=u(e).hover)||void 0===t?void 0:t.color)||"#1a1a1a"},"text-decoration":e=>{var t;return(null===(t=u(e).hover)||void 0===t?void 0:t.underline)||"none"}}},label:{margin:e=>g(e).margin||"15px 0 0","font-family":e=>w(h(e),"verdana"),"font-weight":e=>h(e).weight||"400","font-style":e=>h(e).style||"normal","font-size":e=>h(e).size||"12px","line-height":e=>h(e).lineHeight||"1",color:e=>h(e).color||"#b2b2b2","text-decoration":e=>h(e).underline||"none","letter-spacing":e=>h(e).letterSpacing||0,"text-align":e=>g(e).textAlign||"left",padding:e=>g(e).padding||"0",border:e=>g(e).border||"none",transition:e=>{var t;return(null===(t=g(e).hover)||void 0===t?void 0:t.transition)||"none"},"$recItemNormalPlate:hover &, $recItemFullPlate:hover &, $recItemFullList:hover &, $recItemNormalList:hover &":{color:e=>{var t;return(null===(t=g(e).hover)||void 0===t?void 0:t.color)||"#b2b2b2"},"text-decoration":e=>{var t;return(null===(t=g(e).hover)||void 0===t?void 0:t.underline)||"none"}},"&$adLabel":{},"&$promoLabel":{}},adLabel:{},promoLabel:{},recLogo:{"margin-top":"15px"},recCategory:{},recCategoryWithLink:{},loadMoreButtonWrapper:{"margin-top":"24px","text-align":"center"},loadMoreButton:{position:"relative",display:"inline-block","&$loadMoreButtonInProgress":{"& $loadMoreButtonContent":{visibility:"hidden"}}},loadMoreButtonInProgress:{},loadMoreButtonContent:{padding:"16px 24px",border:"1px solid","border-color":"#b2b2b2","border-radius":"4px",background:"#fff","font-family":"Arial, Helvetica, sans-serif","font-size":"18px","line-height":"1.1",color:"#1a1a1a",transition:"border-color 200ms linear","$loadMoreButtonOverlay:hover ~ &":{"border-color":"#191919"},"$loadMoreButtonOverlay:active ~ &":{background:"#f2f2f2"}},loadMoreButtonLoader:{position:"absolute",top:"50%",left:"50%",margin:"-20px 0 0 -20px",width:"40px",height:"40px",border:"4px solid","border-color":"#e7eaea","border-bottom-color":"transparent","border-radius":"50%",animation:"1s ease-in-out 0s normal none infinite $rotate"},loadMoreButtonOverlay:{},logo:{margin:e=>(e=>{const t=n(e),r=(e=>e.cfg.logo||{})(e).marginTop||"15px";return`${r} 0 0 ${t/2}px`})(e)},logoTextWithOnlyLabel:{"font-family":e=>w(h(e),"verdana"),"font-weight":e=>h(e).weight||"400","font-style":e=>h(e).style||"normal","font-size":e=>h(e).size||"12px","line-height":e=>h(e).lineHeight||"1",color:e=>h(e).color||"#b2b2b2","text-decoration":e=>h(e).underline||"none","letter-spacing":e=>h(e).letterSpacing||0,"text-align":e=>g(e).textAlign||"left",padding:e=>g(e).padding||"0",border:e=>g(e).border||"none",transition:e=>{var t;return(null===(t=g(e).hover)||void 0===t?void 0:t.transition)||"none"}},"@media (max-width: 500px)":{loadMoreButtonContent:{padding:"12px 20px","font-size":"14px"}},"@keyframes rotate":{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}}}}]);5.4.5.8a1 1 0 0 1-1 1 1 1 0 0 1-.9-.3l-2.4-2.8-2.4 2.8a1 1 0 0 1-.8.3 1 1 0 0 1-1-1c0-.4.4-.8.4-.8l2.3-3s-2-.8-2.6-1.2c-.4-.2-.6-.5-.6-1a1 1 0 0 1 1-1c.5 0 1.6 1 3.7 1 2 0 3.1-1 3.7-1 .6 0 1 .5 1.2 1z"></path>
        </symbol>
        <symbol id="icon-tg" viewBox="0 0 22 22">
            <path d="M14.9 5.3L5.7 8.6s-2 1.2.8 2.5l3 1.3 1.7 3.3s1.3 3.1 2.6-.3c1-2.4 2-5.8 2.9-8.2 1.3-3.4-1.8-1.9-1.8-1.9z"></path>
        </symbol>
        <symbol id="icon-twitter" viewBox="0 0 22 22">
            <path d="M18.6 6.8c-.6.3-1.3.5-2 .5.7-.4 1.2-1.1 1.5-1.9a7 7 0 0 1-1.5 1l-.4-.4c-.4-.6-1.1-1-1.9-1a2.8 2.8 0 0 0-2.9 2.8v.5c-3 0-5-.6-6.4-2.4-.3.4-.5.9-.6 1.4.1 1 .6 2 1.5 2.5-.5 0-1-.2-1.5-.6 0 1.5 2 3.1 3.5 3.5-.6.5-2.2 0-2.5 0a3 3 0 0 0 3 1.9 6 6 0 0 1-3.7 1.2H4c1.5.8 3.2 1.3 4.9 1.2a8.2 8.2 0 0 0 8.3-8.3v-.5l1.4-1.4z"></path>
        </symbol>
        <symbol id="icon-viber" viewBox="0 0 22 22">
            <path d="M11.6 6.7c.4 0 .8.1 1 .5.4.3.7.8.7 1.3l-.3.3a.3.3 0 0 1-.2-.3c0-.4-.1-.7-.4-1-.2-.2-.5-.3-.8-.3a.3.3 0 0 1-.3-.3c0-.1 0-.2.3-.2zM14 9a3 3 0 0 0-.8-2.3c-.6-.6-1.3-1-2.1-.9a.2.2 0 1 1 0-.5c.9 0 1.8.3 2.4 1A4 4 0 0 1 14.6 9c0 .1 0 .2-.2.2-.1 0-.3 0-.4-.2zm-3.4-4.8l.2-.2c1.5 0 3 .6 4 1.7A5 5 0 0 1 16 9.4s-.1.2-.3.2a.3.3 0 0 1-.2-.2c.1-1.2-.3-2.4-1.1-3.2-.9-1.1-2.2-1.7-3.6-1.7a.3.3 0 0 1-.2-.3zm4.3 8c.1.3 0 .6-.3.8-.3.5-.8.8-1.3 1-.5 0-1.1-.3-2-.8-1.2-.8-2.4-1.7-3.3-2.9-.8-.9-1.3-1.9-1.7-3-.1-.4 0-.9.1-1.2.2-.3.5-.5.9-.7.1 0 .6-.2 1 .4.5.4.8.8 1 1.2.2.2.3.5.2.8l-.6.6c-.2.2-.2.5-.2.7a4.3 4.3 0 0 0 2 2.2l.8.2c.2 0 .4-.4.7-.7.1-.2.5-.2.7 0l.8.3 1.2 1zM11.9 1c3.6.1 5 .9 6 1.5 1.1.8 1.9 2 2.1 3.3l.3 4.8c0 5.5-4 5.4-6.2 5.8l-3 .2H10c-.6 0-2 1.8-2.8 2.7l-.8.7v-4a13.1 13.1 0 0 1-2.3-1.2C2 13.2 2 10.5 2 9c0-1.4.3-2.8.7-4.2.5-1 1.3-2 2.2-2.6C7 1.3 9 1 11.1 1h.7zM11 2.3c-1.9-.2-3.8.2-5.5 1-.8.3-1.3 1-1.6 1.7l-.2.3c-.4 1.2-.6 2.5-.6 3.7 0 1.6.2 3.7 1.6 4.8l.5.4.1.2 1.3.6.8.3V17c1-1.1 1.6-1.6 2.4-1.6H11c1 0 1.9 0 2.8-.3 2.3-.3 3.3-.4 4-1.2 1-.8 1.2-1.5 1.2-3.3 0-1.5 0-3-.3-4.5-.1-1-.7-2-1.5-2.5-.8-.7-2.3-1.2-5.5-1.4h-.7z"></path>
        </symbol>
        <symbol id="icon-whatsapp" viewBox="0 0 22 22">
            <path d="M9 7.4l.8 1.8v.3l-.7.7v.3c.6 1.1 1.6 2 2.8 2.5l.3-.1.7-.9h.3l1.7.7.2.3-.1.4c-.1.4-.4.8-.7 1-.6.4-1.3.5-1.9.3a8.4 8.4 0 0 1-4.5-3.3c-.7-.8-1-1.8-.9-2.8.2-.5.4-.9.8-1.2l.4-.2h.6l.2.2zM3 19l1.1-4a8 8 0 1 1 3 3L3 19zm4.3-2.5l.3.2a6.6 6.6 0 1 0-2.2-2.1l.2.2-.7 2.3 2.4-.6z"></path>
        </symbol>
        <symbol id="icon-instagram" viewBox="0 0 22 22">
            <path d="M16 7C16 7.5 15.5 8 15 8C14.5 8 14 7.5 14 7C14 6.5 14.5 6 15 6C15.5 6 16 6.5 16 7ZM6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V16C5 16.2652 5.10536 16.5196 5.29289 16.7071C5.48043 16.8946 5.73478 17 6 17H16C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V6C17 5.73478 16.8946 5.48043 16.7071 5.29289C16.5196 5.10536 16.2652 5 16 5H6ZM6 3H16C16.7956 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6V16C19 16.7956 18.6839 17.5587 18.1213 18.1213C17.5587 18.6839 16.7956 19 16 19H6C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3ZM12.5 11C12.5 10.15 11.83 9.5 11 9.5C10.2 9.5 9.5 10.2 9.5 11C9.5 11.8 10.2 12.5 11 12.5C11.8 12.5 12.5 11.8 12.5 11ZM14.5 11C14.5 12.9 12.9 14.5 11 14.5C9.1 14.5 7.5 12.9 7.5 11C7.5 9.1 9.1 7.5 11 7.5C12.93 7.5 14.5 9.03 14.5 11Z"></path>
        </symbol>
        <symbol id="icon-dzen" viewBox="0 0 22 22">
            <path d="M19 11.2l-.1 3.82a4 4 0 01-3.9 3.9l-3.8.08c0-1.08.02-2.35.07-3.83a4 4 0 013.9-3.87l3.83-.1zM10.8 19l-3.78-.08a4 4 0 01-3.91-3.89l-.1-3.83 3.8.1a4 4 0 013.9 3.9l.09 3.8zm.4-16l3.81.1a4 4 0 013.9 3.9l.09 3.8-3.78-.08a4 4 0 01-3.91-3.89L11.21 3h-.01zm-.4 0l-.1 3.82a4 4 0 01-3.9 3.9L3 10.8c0-1.08.02-2.35.07-3.83a4 4 0 013.9-3.87L10.8 3z"></path>
        </symbol>
        <symbol id="icon-rutube" viewBox="0 0 22 22">
        <g id="ico-/-socseti-/-rutube_color" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="RUTUBE_Short_Dark-Red" transform="translate(3.000000, 3.000000)" fill-rule="nonzero">
            <circle id="Oval" fill="#F41240" cx="15.5" cy="1.5" r="1.5"></circle>
            <path d="M10.9146166,3 L0,3 L0,15 L3.1011448,15 L3.1011448,11.0959809 L8.8162445,11.0959809 L11.5274252,15 L15,15 L12.0102049,11.0779919 C13.0756921,10.9293313 13.6072633,10.5922354 14.0157949,10.0525012 C14.4243266,9.51276698 14.6285366,8.6491879 14.6285366,7.49776355 L14.6285366,6.59820651 C14.6285366,5.91454965 14.5542885,5.37481543 14.4243266,4.96102569 C14.2943646,4.54723594 14.0715089,4.18740231 13.7557593,3.86356826 C13.4215874,3.5577232 13.0501239,3.34183384 12.6044125,3.19790038 C12.1588126,3.07196673 11.6016733,3 10.9146166,3 Z M10.4132359,8.45128752 L3.1011448,8.45128752 L3.1011448,5.64468254 L10.4132359,5.64468254 C10.8403463,5.64468254 11.1374612,5.71664927 11.2860354,5.84258293 C11.4345315,5.9685274 11.5274252,6.20240574 11.5274252,6.54423958 L11.5274252,7.55173048 C11.5274252,7.91155329 11.4345315,8.14544245 11.2860354,8.27137611 C11.1374612,8.39732058 10.8403463,8.45128752 10.4132359,8.45128752 Z" id="Shape" fill="#1C293E"></path>
          </g>
        </g>
      </symbol>
        <symbol id="icon-16" viewBox="0 0 34 37">
            <path fill="currentColor" d="M0 0h34v23.96l-17.016 9L0 23.96z"></path>
            <path fill-rule="nonzero" d="M14 24.473h-3.544V9.982L7 11.376V8.3l6.626-2.828H14v19zM24.7 5.238v3.059h-.204c-1.35.008-2.424.414-3.218 1.217-.795.802-1.277 1.926-1.447 3.37.773-.883 1.742-1.325 2.906-1.325 1.343 0 2.416.573 3.219 1.72.803 1.147 1.204 2.676 1.204 4.588 0 1.215-.23 2.31-.688 3.287-.459.977-1.103 1.736-1.931 2.275-.829.54-1.766.81-2.81.81-1.683 0-3.032-.676-4.048-2.027-1.015-1.35-1.523-3.169-1.523-5.454V15.42c0-2.047.32-3.84.962-5.378.642-1.537 1.568-2.72 2.78-3.549 1.21-.828 2.623-1.246 4.237-1.255h.561zm.828 13.164v-1.44h-2.862v-2.835h-1.472v2.836H18.33v1.44h2.863v2.835h1.472v-2.836h2.862z"></path>
        </symbol>
        <symbol id="icon-mksport" viewBox="0 0 24 24">
            <g id="ico-/-sport" stroke-width="1">
                <circle id="Oval" fill="#777777" cx="12" cy="12" r="12"></circle>
                <path d="M11.5,17.0440226 L11.5,15.2541286 L8.97887953,13.414656 L6.58534024,14.144948 L6.58534024,16.4367053 C7.26530706,17.2655778 8.13186145,17.9355212 9.12082511,18.3823574 L11.5,17.0440226 Z M14.7213584,18.4513244 C15.7760225,18.0058904 16.6987567,17.3093837 17.4146598,16.4367053 L17.4146598,14.2857141 L15.0491169,13.551971 L12.5,15.4118706 L12.5,17.2017646 L14.7213584,18.4513244 Z M6.16582279,13.2110967 L9.13445718,12.290287 L9.16479385,12.3124214 L9.28943248,12.2743929 L9.74544472,10.072949 L9.70270886,10.072949 L7.88102409,8.04954073 L6.22044857,8.04954073 C5.90821057,8.50546918 5.6485183,9.00021853 5.4500988,9.52506177 L5.12037591,10.7005914 C5.04133823,11.1216467 5,11.5559958 5,12 C5,12.2067863 5.00896647,12.4114784 5.02653182,12.6137087 L6.16582279,13.2110967 Z M9.20553978,5.58004359 L8.67463143,7.38094504 L10.2000662,9.07294902 L13.540725,9.07294902 L15.0271485,7.4219271 L14.450558,5.44093392 C13.794317,5.19564614 13.091404,5.04602373 12.3587882,5.00903597 L11.6412118,5.00903597 C10.778954,5.052569 9.95784134,5.25212687 9.20553978,5.58004359 Z M15.8076712,8.04954073 L14.3280839,9.69296956 L15.2479942,12.5241622 L17.5523787,13.2217238 L18.9844157,12.4708343 C18.9934158,12.3353194 18.9985594,12.1987497 18.9997377,12.061234 L17.9459138,8.30413573 C17.8922613,8.21800202 17.8367892,8.1331191 17.7795514,8.04954073 L15.8076712,8.04954073 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z" id="Combined-Shape" fill="#DDDDDD" fill-rule="nonzero"></path>
            </g>
        </symbol>
				<symbol id="icon-email" viewBox="0 0 640 640">
					<path fill="#currentColor"
						d="M20.411 152.393c17.357 9.316 257.707 138.458 266.668 143.257s20.557 7.082 32.216 7.082c11.666 0 23.258-2.282 32.216-7.082s249.316-133.941 266.668-143.257c17.391-9.358 33.816-45.724 1.924-45.724h-601.554c-31.899 0-15.467 36.374 1.891 45.724zM626.238 230.725c-19.733 10.282-262.649 136.858-274.735 143.183s-20.558 7.082-32.216 7.082-20.124-0.749-32.216-7.082-253.618-132.949-273.352-143.224c-13.867-7.258-13.724 1.249-13.724 7.791s0 259.308 0 259.308c0 14.933 20.124 35.558 35.558 35.558h568.884c15.433 0 35.558-20.624 35.558-35.558 0 0 0-252.727 0-259.268s0.149-15.041-13.766-7.791z">
					</path>
				</symbol>
				<symbol id="icon-mobile" viewBox="0 0 32 32">
					<path
						d="M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z">
					</path>
				</symbol>
				<symbol id="icon-location" viewBox="0 0 20 20">
					<path d="M10 20s-7-9.13-7-13c0-3.866 3.134-7 7-7s7 3.134 7 7v0c0 3.87-7 13-7 13zM10 9c1.105 0 2-0.895 2-2s-0.895-2-2-2v0c-1.105 0-2 0.895-2 2s0.895 2 2 2v0z"></path>
			</symbol>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="icon-calendar" viewBox="0 0 16 16">
        <path d="M4 1a1 1 0 0 1 2 0v1h4V1a1 1 0 0 1 2 0v1h.29A2.73 2.73 0 0 1 15 4.7v7.6a2.68 2.68 0 0 1-2.71 2.7H3.7A2.73 2.73 0 0 1 1 12.3V4.7A2.68 2.68 0 0 1 3.71 2H4V1zM3 7v6h10V7H3zm5 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      </symbol>
      <symbol id="icon-rubric" viewBox="0 0 16 16">
        <path d="M9.8 1.26L2.71 8.33l-.57 1.94 3.56 3.56 1.96-.55 7.07-7.07a3 3 0 0 0 0-4.24l-.7-.7a3 3 0 0 0-4.25 0zM4.6 14.14l-2.77-2.77-1.14 3.87 3.91-1.1z"></path>
      </symbol>
      <symbol id="icon-comments" viewBox="0 0 16 16">
        <path fill="currentColor" d="M1 3a2 2 0 0 1 2-2h1v8h8V8H4V7h8V6H4V5h3V4H4V1h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7.04v3l-3-3H3a2 2 0 0 1-2-2V3z"></path>
      </symbol>
      <symbol id="icon-sound" viewBox="0 0 24 24">
        <path d="M14 2L7 8H2a1 1 0 00-1 1v6c0 .6.4 1 1 1h5l7 6V2z"></path>
        <path fill="currentColor" d="M8 16l5 4V4L8 8v4H6V9H3a1 1 0 00-1 1v2H0v-2a3 3 0 013-3h3l7-5.4L15 0v10.3a2 2 0 010 3.4V16h1.5l-.3-.6a4 4 0 000-6.8l.9-1.8a6 6 0 010 10.3l-.6-1.1H15v4h3.5l-.5-1a8 8 0 000-14l.9-1.7a10 10 0 010 17.4l-.4-.7H15v4l-2-1.6L6 17H3a3 3 0 01-3-3v-2h2v2a1 1 0 001 1h3v-3h2v4z"></path>
      </symbol>
      <symbol id="icon-bookmarks" viewBox="0 0 24 24">
        <path d="M5 1v21l7.44-3.94L19 22V1H5z"></path>
        <path fill="currentColor" d="M13 0H4v24l8.5-4.43L20 24V0h-7v2h5v18.5l-5.43-3.22L6 20.7V2h7V0z"></path>
      </symbol>
    </svg>
</div>
<div class="wraper">
    <aside class="ring">
        <div class="ring__scroll">

            <nav class="ring__projects" aria-label="Сайты сателиты">
    <a href="https://www.mk.ru" class="ring__item ring__item_active">
        <svg class="ring__item-icon" width="24" height="24"><use xlink:href="#icon-mk"></use></svg>
        <span class="ring__item-name">МК</span>
    </a>
    <a href="https://www.sportmk.ru/" class="ring__item" target="_blank" rel="noopener">
        <svg class="ring__item-icon" width="24" height="24"><use xlink:href="#icon-mksport"></use></svg>
        <span class="ring__item-name">СпортМК</span>
    </a>
    <a href="https://avtovzglyad.ru" class="ring__item" target="_blank" rel="noopener">
        <svg class="ring__item-icon" width="24" height="24"><use xlink:href="#icon-av"></use></svg>
        <span class="ring__item-name">АвтоВзгляд</span>
    </a>
    <a href="https://ohotniki.ru" class="ring__item" target="_blank" rel="noopener">
        <svg class="ring__item-icon" width="24" height="24"><use xlink:href="#icon-oh"></use></svg>
        <span class="ring__item-name">Охотники.ру</span>
    </a>
    <a href="https://womanhit.ru" class="ring__item" target="_blank" rel="noopener">
        <svg class="ring__item-icon" width="24" height="24"><use xlink:href="#icon-wh"></use></svg>
        <span class="ring__item-name">WomanHit.ru</span>
    </a>
    <a href="https://www.mk.ru/promokodi/" class="ring__item" target="_blank" rel="noopener">
        <svg class="ring__item-icon" width="24" height="24"><use xlink:href="#icon-promo"></use></svg>
        <span class="ring__item-name">Промокоды</span>
    </a>
</nav>            <style>.ring__spec_header {display:none;}</style>
<!-- <a href="https://www.mk.ru/stories/vstrechaem-vesnu-bezopasnye-sposoby-probuzhdeniya-organizma/" target="_blank" class="ring__spec">
<div class="ring__spec-content">
<img src="/upload/region/izobrazhenie-bolshoe-18-10-22.svg" class="ring__spec-project-name">
</div>
</a> -->



<!-- <a href="https://www.mk.ru/projects/proshkoly/?utm_campaign=proshkolu&utm_medium=ring" target="_blank" class="ring__spec ring__spec-bg"><div class="ring__spec-content">
<span class="ring__spec-project-name" style="
    text-transform: uppercase;
    font-style: italic;">Про школу</span></div>
</a> -->

<!-- regions-iframe -->
<script>
<!--
const iframeRegions = {
  0: {
    url:
      "https://www.mk-mosobl.ru/media/mkru2020/frame/regions-frame.html?name=Московская область",
    title: "Новости Московская область",
    percent: 15
  },
  90: {
    url:
      "https://www.mk-mosobl.ru/media/mkru2020/frame/regions-frame.html?name=Московская область",
    title: "Новости Московская область",
    percent: 15
  },
  89: {
    url:
      "https://www.mk-lipetsk.ru/media/mkru2020/frame/regions-frame.html?name=Липецк",
    title: "Новости Липецк",
    percent: 100
  }
};

(function showIframe() {
  window.addEventListener("DOMContentLoaded", () => {
    if (
      location.pathname === "/" &&
      location.href.indexOf(".sportmk.ru") === -1
    ) {
      fetch(`https://api.mk.ru/geo-location/suggested-region/`)
        .then((res) => res.json())
        .then((res) => {
          if (iframeRegions[res.detectedRegion.id]) {
            console.log("region", res.detectedRegion.id);
            createIframe(iframeRegions[res.detectedRegion.id]);
          }
        });

      function createIframe(region) {
        let ul;
        let li;
        let frame;
        const random = Math.floor(Math.random() * 100);

        if (region.percent >= random) {
          console.log("%+");
          ul = document.querySelector(".good-news_right-line .good-news__container");

          if (ul) {
            console.log("list+");
            li = document.createElement("li");
            frame = document.createElement("iframe");

            frame.setAttribute("src", region.url);
            frame.setAttribute("title", region.title);
            frame.setAttribute("frameborder", "0");
            frame.setAttribute("height", "20px");
            frame.setAttribute("sandbox", "allow-scripts allow-top-navigation");

            li.classList.add("good-news__item");
            li.append(frame);
            ul.append(li);
          }
        }
      }
    }
  });
})();
-->
</script>
<!-- end regions-iframe -->
            <form class="ring__search" action="https://www.mk.ru/search/" role="search">
                <div class="ring__search-label">
                    <label for="header-search">
                        <svg class="ring__search-label-icon ring__search-icon" width="32" height="32"><use xlink:href="#icon-search"></use></svg>
                    </label>
                    <input type="search" name="q" class="ring__search-field" id="header-search" placeholder="Поиск" aria-label="Поиск" required>
                    <button class="ring__search-button" aria-label="Искать">
                        <svg class="ring__search-icon" width="32" height="32"><use xlink:href="#icon-search"></use></svg>
                    </button>
                </div>
            </form>
            <span class="ring__age-rating">
                <svg class="ring__age-rating-icon" width="34" height="37">
                    <use xlink:href="#icon-16"></use>
                </svg>
                <span class="visually-hidden">Предназначено для лиц старше шестнадцати лет</span>
            </span>
        </div>
    </aside>
    <div class="good-place__under-ring"><div style="position:relative;z-index:1"> 
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: Перетяжка 100%x40 d MK-->
<!--Расположение: <верх страницы>-->
<div id="adfox_162210926690472316"></div>
<script>
	window.yaContextCb.push(()=>{
    window.Ya.adfoxCode.create({
        ownerId: 353925,
        containerId: 'adfox_162210926690472316',
        params: {
            pp: 'g',
            ps: 'edud',
            p2: 'gybd',
            puid1: '',
            puid2: ''
        }
    })
    })
</script>
</div></div>
    <div class="wraper__header">
        <div class="header__fixed">
            <div class="header">
                <header class="header__content">
                    <div class="header__logo-wraper">
                        <div class="header-logo__wrap">
                            <div class="header-logo">
                                <a href="https://www.mk.ru" class="header-logo__link">
                                    <img class="header-logo__image" loading="lazy" src="/media/mkru2020/img/mk-logo.svg" alt="Московский Комсомолец" width="108" height="50">
                                                                    </a>
                            </div>
                            <a href="https://t.me/mk_ru" class="header-logo__button-tg" aria-label="телеграм" target="_blank">telegram «MK»</a>
                            <a href="#" class="header-logo__menu" aria-label="Меню">
                                <svg class="header-logo__menu-icon" width="32" height="32"><use xlink:href="#icon-menu"></use></svg>
                            </a>
                        </div>
                    </div>
                    <form class="header__search-wraper" action="https://www.mk.ru/search/">
                        <input type="search" name="q" class="header__search" aria-label="Поиск по сайту" placeholder="Найти" required>
                        <svg class="header__search-icon" width="24" height="24"><use xlink:href="#icon-search"></use></svg>
                        <button class="header__search-button">Найти</button>
                    </form>
                    <div class="header__regions-pin-wraper">
                        <a href="#" class="header__regions-pin" aria-label="Выбран: Федеральный регион">
                            <svg class="header__regions-pin-icon" width="24" height="24"><use xlink:href="#icon-geo-pin"></use></svg>
                            Выбрать регион
                        </a>
                    </div>
                    <div class="header__aggregation">

                        <section class="header__currency">
    <h2 class="visually-hidden">Курсы валюты:</h2>
        <span class="header__currency-item header__currency-item_first"><span class="header__currency-item-icon" aria-label="Доллар">$</span> 90.66</span>
    
        <span class="header__currency-item"><span class="header__currency-item-icon" aria-label="Евро">&#8364;</span> 98.64</span>
    </section>
                        <a href="https://www.mk.ru/daily/newspaper/" class="header__daily-newspaper">Свежий номер</a>
                        <a href="https://www.mk.ru/subscription/" class="header__subscription">Подписка</a>

                        <ul class="header__social-list">

        <li class="header__social-item">
        <a href="http://vk.com/mk_ru" class="header__social-link header__social-link_vk" target="_blank" rel="noopener">
            <svg class="header__social-icon" width="22" height="22"><use xlink:href="#icon-vk"></use></svg>
            <span class="visually-hidden">МК Вконтакте</span>
        </a>
    </li>
    
        <li class="header__social-item">
        <a href="http://www.odnoklassniki.ru/mkomsomolets" class="header__social-link header__social-link_ok" target="_blank" rel="noopener">
            <svg class="header__social-icon" width="22" height="22"><use xlink:href="#icon-ok"></use></svg>
            <span class="visually-hidden">МК в Одноклассниках</span>
        </a>
    </li>
    
        <li class="header__social-item">
        <a href="https://www.mk.ru/telegram/" class="header__social-link header__social-link_tg" target="_blank" rel="noopener">
            <svg class="header__social-icon" width="22" height="22"><use xlink:href="#icon-tg"></use></svg>
            <span class="visually-hidden">МК в Telegram</span>
        </a>
    </li>
    
        <li class="header__social-item">
        <a href="http://www.twitter.com/mkomsomolets" class="header__social-link header__social-link_twitter" target="_blank" rel="noopener">
            <svg class="header__social-icon" width="22" height="22"><use xlink:href="#icon-twitter"></use></svg>
            <span class="visually-hidden">МК в Twitter</span>
        </a>
    </li>
    
    <li class="header__social-item">
        <a href="https://invite.viber.com/?g2=AQAlzCKwAKzt1kjyzyAABH9y6H6YwWgXAtaIqIJpJaS4%2FwrK8RPd%2FX4wpU1%2Bqm4R" class="header__social-link header__social-link_viber" target="_blank" rel="noopener">
            <svg class="header__social-icon" width="22" height="22"><use xlink:href="#icon-viber"></use></svg>
            <span class="visually-hidden">МК в <span lang="en">Viber</span></span>
        </a>
    </li>

        <li class="header__social-item">
        <a href="https://dzen.ru/mk.ru" class="header__social-link header__social-link_dzen" target="_blank" rel="noopener">
            <svg class="header__social-icon" width="22" height="22"><use xlink:href="#icon-dzen"></use></svg>
            <span class="visually-hidden">МК в Яндекс Дзен</span>
        </a>
    </li>
    
    <li class="header__social-item">
        <a href="https://rutube.ru/channel/23896695/" class="header__social-link header__social-link_rutube" target="_blank" rel="noopener">
            <svg class="header__social-icon" width="22" height="22"><use xlink:href="#icon-rutube"></use></svg>
            <span class="visually-hidden">МК в Rutube</span>
        </a>
    </li>
</ul>                    </div>

                    <div class="header__navigation-wraper">
    <nav class="header__navigation nav_main nav_main-header">
        <ul class="nav__list">
                                <li class="nav__item"><a href="https://www.mk.ru/news/" class="nav__link"><span>Новости</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/editorial/exclusive/?from=topmenu" class="nav__link"><span>Эксклюзивы</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/politics/" class="nav__link"><span>Политика</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/economics/" class="nav__link"><span>Экономика</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/incident/" class="nav__link"><span>Происшествия</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/sport/" class="nav__link"><span>спорт</span></a></li>
                                <li class="nav__item nav__item_active"><a href="https://www.mk.ru/social/" class="nav__link"><span>Общество</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/science/" class="nav__link"><span>Наука</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/culture/" class="nav__link"><span>Культура</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/auto/" class="nav__link"><span>Авто</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/moscow/" class="nav__link"><span>Москва</span></a></li>
                                <li class="nav__item"><a href="https://www.mk-mosobl.ru/" class="nav__link"><span>Подмосковье</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/video/" class="nav__link"><span>Видео</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/photo/" class="nav__link"><span>Фото</span></a></li>
                                <li class="nav__item"><a href="/stories/daty/" class="nav__link"><span>Дни рождения</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/nationalprojects/" class="nav__link"><span>Национальные проекты России</span></a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/press-center/" class="nav__link"><span>Прямые эфиры МК</span></a></li>
                    </ul>
        <a href="#" class="header__menu-dots" aria-label="Меню">
            <svg class="header__menu-dots-icon" width="32" height="32"><use xlink:href="#icon-menu-dots"></use></svg>
        </a>
    </nav>
</div>
                    <div class="header__mk nav_mk"></div>
                    <div class="header__for-readers"></div>
                    <div class="header__for-advertisers nav_for-advertisers"></div>
                </header>
            </div>
        </div>
    </div>
    <div class="wraper__suggest"></div>
    <div class="wraper__modal modal__wrap"></div>
    <div class="good-place__top"><div style="position: relative; z-index: 0">
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Перетяжка верхняя (1690 и выше)-->
  <!--Расположение: <верх страницы>-->
  <div
    id="adfox_159412311279068369"
    style="text-align: center; margin: 0 auto"
  ></div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_159412311279068369",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwks",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
          onLoad: function (data) {
            if (data.bundleName != "banner.background") {
              Ya.adfoxCode.create({
                ownerId: 353925,
                containerId: "adfox_159412336388314040",
                params: Object.assign(
                  {
                    pp: "g",
                    ps: "edud",
                    p2: "gwkn",
                  },
                  window.puids || {}
                ),
              });
            }
          },
        },
        ["desktop"],
        {
          tabletWidth: 1689,
          phoneWidth: 1023,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Перетяжка верхняя (1024-1689)-->
  <!--Расположение: <верх страницы>-->
  <div
    id="adfox_159412315363679491"
    style="text-align: center; margin: 0 auto"
  ></div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_159412315363679491",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwkr",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
          onLoad: function (data) {
            if (data.bundleName != "banner.background") {
              Ya.adfoxCode.create({
                ownerId: 353925,
                containerId: "adfox_15941234308903630",
                params: Object.assign(
                  {
                    pp: "g",
                    ps: "edud",
                    p2: "gwkm",
                  },
                  window.puids || {}
                ),
              });
            }
          },
        },
        ["tablet"],
        {
          tabletWidth: 1689,
          phoneWidth: 1023,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Перетяжка верхняя (до 1024)-->
  <!--Расположение: <верх страницы>-->
  <div
    id="adfox_159412319100978740"
    style="text-align: center; margin: 0 auto"
  ></div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_159412319100978740",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwko",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
          onLoad: function (data) {
            if (data.bundleName != "banner.background") {
              Ya.adfoxCode.create({
                ownerId: 353925,
                containerId: "adfox_159412347685825599",
                params: Object.assign(
                  {
                    pp: "g",
                    ps: "edud",
                    p2: "gwkl",
                  },
                  window.puids || {}
                ),
              });
            }
          },
        },
        ["tablet"],
        {
          tabletWidth: 1022,
          phoneWidth: 801,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Моб. 320х100 / 300x250 верхний-->
  <!--Расположение: <верх страницы>-->
  <div
    id="adfox_15941232407382703"
    style="margin: 0 auto; text-align: center"
  ></div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_15941232407382703",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwjq",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
        },
        ["phone"],
        {
          tabletWidth: 1022,
          phoneWidth: 801,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <div id="adfox_159412336388314040"></div>
  <div id="adfox_15941234308903630"></div>
  <div id="adfox_159412347685825599"></div>
</div>

<style>
  .article__ad {
    position: relative;
    width: 100%;
    /* height: 100px; */
    overflow: hidden;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    z-index: 0;
  }

  #yandex_rtb_R-A-592219-79 {
    position: absolute;
    /* bottom: 0; */
    /* opacity: 0;
    animation: slideUp 1s forwards, fadeIn 1.5s forwards; */
    background-color: #fefefe;
    /* height: 100px; */
    width: 100%;
  }

  @keyframes slideUp {
    0% {
      transform: translateY(70%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
<script>
  function initAdfoxAP(adDiv) {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const blockId = isMobile ? "R-A-592219-79" : "R-A-592219-80";
    console.log(blockId);

    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: blockId,
        renderTo: "yandex_rtb_R-A-592219-79",
        onRender: (data) => {
          adDiv.style.height = "100px";
        },
      });
    });
  }

  function checkInread() {
    let inreadAdUnit = document.querySelector("#adfox_15942129737992027");
    let articleBody = document.querySelector(".article__body");

    if (
      inreadAdUnit == null &&
      window.location.href != "https://www.mk.ru" &&
      window.location.href != "https://www.mk.ru/news/"
      // && window.location.search == "?test_ads=rsya_under_pic_mobile"
    ) {
      const adDiv = document.createElement("div");
      adDiv.className = "article__ad";
      articleBody.parentNode.insertBefore(adDiv, articleBody);

      const adContent = document.createElement("div");
      adContent.id = "yandex_rtb_R-A-592219-79";
      adDiv.appendChild(adContent);

      initAdfoxAP(adDiv);
    } else {
      console.log("it's not a test page or inread is in text");
    }
  }

  if (window.location.host == "www.mk.ru") {
    let delayCheck = 1000;

    setTimeout(() => {
      checkInread();
    }, delayCheck);
    console.log("Script launched on https://www.mk.ru");
  } else {
    console.log("URL does not match https://www.mk.ru");
  }
</script>

</div>
    <div class="wraper__content">
        <div class="article-grid">
    <div class="article-grid__content">
        <main class="article" itemscope itemtype="https://schema.org/NewsArticle">
            
    <div class="article__meta">
        <p class="meta meta_article">
            <span class="meta__item meta__item_first-line">
                <svg class="meta__icon" width="16" height="16"><use xlink:href="#icon-calendar"></use></svg>
                <time class="meta__text" pubdate datetime="2024-02-02T15:40:49+0300">сегодня  в 15:40</time>
                <meta itemprop="datePublished" content="2024-02-02T15:40:49+0300">
                <meta itemprop="dateModified" content="2024-02-02T15:40:49+0300">
            </span>

                            <span class="meta__item">
                    <a href="/social/" class="meta__item-link">
                        <svg class="meta__icon" width="16" height="16"><use xlink:href="#icon-rubric"></use></svg>
                        <span class="meta__text">Общество</span>
                    </a>
                </span>
            
                            <span class="meta__item erid">
                    <a href="https://www.mk.ru/stories/dnr-lnr-ukraina-obostrenie/" class="meta__item-link">
                        <svg class="meta__icon" width="16" height="16"><use xlink:href="#icon-stories"></use></svg>
                        <span class="meta__text">Сюжет: Новости СВО </span>
                    </a>
                </span>
            
            
            
            
            <span class="meta__item meta__item_views meta__item_first-line">
                <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                <span class="meta__text">9938</span>
            </span>
        </p>

        <div style="display:none">
            		        <meta itemprop="articleSection" content="Общество">
            
		    <div itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
		        <meta itemprop="name" content="Московский Комсомолец">

		        <link itemprop="url" href="https://www.mk.ru">

		        		        	<link itemprop="sameAs" href="http://www.facebook.com/www.mk.ru">
		        		        	<link itemprop="sameAs" href="http://vk.com/mk_ru">
		        		        	<link itemprop="sameAs" href="http://www.twitter.com/mkomsomolets">
		        		        	<link itemprop="sameAs" href="https://">
		        		        	<link itemprop="sameAs" href="http://www.odnoklassniki.ru/mkomsomolets">
		        		        	<link itemprop="sameAs" href="https://dzen.ru/mk.ru">
		        		        	<link itemprop="sameAs" href="https://www.mk.ru/telegram/">
		        
		        <div itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
		    	    <link itemprop="url contentUrl" href="https://static.mk.ru/media/img/mk.ru/mkru_og.jpg">

		    	    <div itemprop="width" itemscope itemtype="https://schema.org/QuantitativeValue">
		    		    <meta itemprop="name" content="500">
		    	    </div>

		    	    <div itemprop="height" itemscope itemtype="https://schema.org/QuantitativeValue">
		    		    <meta itemprop="name" content="261">
		    	    </div>
		        </div>
		    </div>

            <meta itemprop="mainEntityOfPage" itemscope itemtype="https://schema.org/WebPage" itemid="https://www.mk.ru/social/2024/02/02/v-gosdume-obyasnili-pochemu-pesni-o-geroyakh-svo-ignoriruyut-na-televidenii.html" content="https://www.mk.ru/social/2024/02/02/v-gosdume-obyasnili-pochemu-pesni-o-geroyakh-svo-ignoriruyut-na-televidenii.html">
            <script type="application/json" class="js-mk-item-settings">{"type":"article","id":4918481}</script>
        </div>
    </div>

    <header class="article__header">
        <aside class="article__tools">
            <form class="article-tool" hidden>
                <label class="article-tool__label">
                    <input type="checkbox" class="article-tool__item article-tool__item_sound visually-hidden" aria-label="Прочитать статью" disabled>
                    <svg class="article-tool__icon" width="24" height="24"><use xlink:href="#icon-sound"></use></svg>
                </label>
            </form>
            <div class="article-tool article-tool_font-size">
                <button type="button" class="article-tool__button js-font-size-increase" aria-label="Увеличить шрифт">+</button>
                <button type="button" class="article-tool__button article-tool__button_bold js-font-size-reset" aria-label="Вернуть изначальный размер шрифта">A</button>
                <button type="button" class="article-tool__button js-font-size-reduce" aria-label="Уменьшить шрифт">-</button>
            </div>
        </aside>
        <h1 class="article__title" itemprop="headline">В Госдуме объяснили, почему песни о героях СВО игнорируют на телевидении</h1>

                <p class="article__subtitle">«Должны быть хорошие песни»</p>
            </header>

    <div class="article__share-top">
        <div class="article__share share share_no-init">
    <span class="share__text">Поделиться</span>
    <ul class="share__list">
        <li class="share__item">
            <a class="share__link share__link_vk" target="_blank" rel="nofollow noopener" data-mod="vk" aria-label="Вконтакте">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-vk"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_ok" target="_blank" rel="nofollow noopener" data-mod="ok" aria-label="в Одноклассниках">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-ok"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_tg" target="_blank" rel="nofollow noopener" data-mod="tg" aria-label="в Telegram">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-tg"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_twitter" target="_blank" rel="nofollow noopener" data-mod="twitter" aria-label="в Twitter">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-twitter"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_viber" target="_blank" rel="nofollow noopener" data-mod="viber" aria-label="в Viber">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-viber"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_whatsapp" target="_blank" rel="nofollow noopener" data-mod="whatsapp" aria-label="в WhatsApp">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-whatsapp"></use></svg>
            </a>
        </li>
    </ul>
</div>
    </div>

            <div class="article__description" itemprop="description">
            <p>Юрий Лоза, отметивший вчера 70-й день рождения, поднял весьма серьезную тему. Музыкант заявил, что не так давно написал песню об СВО, но ее не взял в эфир ни один федеральный канал. Не оказалось патриотической новинки от Лозы и в эфире радиостанций. Певец считает, что явную патриотику в России не жалуют.  </p>
        </div>
    
                    <figure class="article__picture-group" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
            <picture class="article__picture">
                <img class="article__picture-image" src="https://static.mk.ru/upload/entities/2024/02/02/15/articles/detailPicture/60/7d/2f/21/a6daafdb304e368dacd07e41eff4ee36.jpg" alt="«Должны быть хорошие песни»" itemprop="url contentUrl">
            </picture>

            <figcaption class="article__picture-caption">
                                    <span class="article__picture-description" itemprop="caption">Фото: duma.gov.ru</span>
                
                
                <span itemprop="width" itemscope itemtype="https://schema.org/QuantitativeValue">
                      <meta itemprop="name" content="720">
                    </span>
                <span itemprop="height" itemscope itemtype="https://schema.org/QuantitativeValue">
                      <meta itemprop="name" content="480">
                    </span>
            </figcaption>
        </figure>
            
    <div class="article__body" itemprop="articleBody">
        <p>- Должны обязательно патриотические композиции звучать и на радио, и на телевидении, - уверила корреспондентов «МК» первый заместитель председателя Комитета Государственной думы по культуре Елена Драпеко. – Единственный момент, что должны быть хорошие песни. Но Лоза — очень талантливый человек. Наверняка его песня достойна исполнения в телевизионных концертах.</p>

<p>Драпеко считает, что исполнителю хита «Плот» нужно обратиться в Госдуму.</p>

<p>- Надо разговаривать с руководством радио, телеканалов, —  продолжила Драпеко. —  У нас в Государственной думе есть профильный комитет по средствам массовой информации, который должен решать такие вопросы.  </p>

<p>Заявление Лозы – далеко не первое. В прошлом году Илья Резник посетовал, что его новинку – хит о погибших бойцах СВО «Любимые не умирают» в исполнении Азизы – тоже проигнорировали в эфире ТВ-каналов и радиостанций. И это несмотря на то что в Интернете композиция набрала сотни тысяч просмотров и восторженных откликов. </p>

<p>Азиза исполнила патриотическую новинку на юбилейном вечере Резника, который снимал Первый канал. Но из эфира «Любимые не умирают» по непонятным причинам вырезали, оставив в исполнении Азизы лишь лирическую композицию.</p>
                <script>
            window.MKInreadsInArticle = [
                "<!--AdFox START-->\n<!--yandex_mkruok-->\n<!--\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430: MK.ru \/ * \/ *-->\n<!--\u0422\u0438\u043f \u0431\u0430\u043d\u043d\u0435\u0440\u0430: \u0418\u043d\u0440\u0438\u0434 \u21163-->\n<!--\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: <\u0432\u0435\u0440\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b>-->\n<div id=\"adfox_159404172309455056\" style=\"margin: 0 auto; text-align: center; position: relative; z-index: 0;\"><\/div>\n<script>\nwindow.yaContextCb.push(()=>{\n    Ya.adfoxCode.create({\n        ownerId: 353925,\n        containerId: 'adfox_159404172309455056',\n        params: {\n            pp: 'g',\n            ps: 'edud',\n            p2: 'gwjv',\n            puid1: '',\n            puid2: ''\n        }\n    })\n})\n<\/script>"
,
                "<!--AdFox START-->\n<!--yandex_mkruok-->\n<!--\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430: MK.ru \/ * \/ *-->\n<!--\u0422\u0438\u043f \u0431\u0430\u043d\u043d\u0435\u0440\u0430: \u0418\u043d\u0440\u0438\u0434 \u21162-->\n<!--\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: <\u0432\u0435\u0440\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b>-->\n<div id=\"adfox_159421342775392767\" style=\"position: relative; z-index: 0; margin:0 auto; text-align: center;\"><\/div>\n<script>\nwindow.yaContextCb.push(()=>{\n    Ya.adfoxCode.createAdaptive({\n        ownerId: 353925,\n        containerId: 'adfox_159421342775392767',\n        params: Object.assign({\n            pp: 'g',\n            ps: 'edud',\n            p2: 'gwju',\n\t\t\t}, \n\t\t\twindow.puids || {})\n    }, ['desktop'], {\n        tabletWidth: 599,\n        phoneWidth: 335,\n        isAutoReloads: true\n    })\n})\n<\/script>\n<!--AdFox START-->\n<!--yandex_mkruok-->\n<!--\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430: MK.ru \/ * \/ *-->\n<!--\u0422\u0438\u043f \u0431\u0430\u043d\u043d\u0435\u0440\u0430: \u041c\u043e\u0431. \u0438\u043d\u0440\u0438\u0434 \u21162-->\n<!--\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: <\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b>-->\n<div id=\"adfox_1594213447966582992\" style=\"position: relative; z-index: 0;\"><\/div>\n<script>\nwindow.yaContextCb.push(()=>{\n    Ya.adfoxCode.createAdaptive({\n        ownerId: 353925,\n        containerId: 'adfox_1594213447966582992',\n        params: Object.assign({\n            pp: 'h',\n            ps: 'edud',\n            p2: 'gwke',\n\t\t\t}, \n\t\t\twindow.puids || {})\n    }, ['tablet'], {\n        tabletWidth: 599,\n        phoneWidth: 335,\n        isAutoReloads: true\n    })\n})\n<\/script>\n<!--AdFox START-->\n<!--yandex_mkruok-->\n<!--\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430: MK.ru \/ * \/ *-->\n<!--\u0422\u0438\u043f \u0431\u0430\u043d\u043d\u0435\u0440\u0430: \u041c\u043e\u0431. \u0438\u043d\u0440\u0438\u0434 \u21162-->\n<!--\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: <\u0432\u0435\u0440\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b>-->\n<div id=\"adfox_159421344796658299\" style=\"position: relative; z-index: 0;\"><\/div>\n<script>\nwindow.yaContextCb.push(()=>{\n    Ya.adfoxCode.createAdaptive({\n        ownerId: 353925,\n        containerId: 'adfox_159421344796658299',\n        params: Object.assign({\n            pp: 'g',\n            ps: 'edud',\n            p2: 'gwke',\n\t\t\t}, \n\t\t\twindow.puids || {})\n    }, ['phone'], {\n        tabletWidth: 599,\n        phoneWidth: 335,\n        isAutoReloads: true\n    })\n})\n<\/script>"
,
                "<!--AdFox START-->\n<!--yandex_mkruok-->\n<!--\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430: MK.ru \/ * \/ *-->\n<!--\u0422\u0438\u043f \u0431\u0430\u043d\u043d\u0435\u0440\u0430: \u0418\u043d\u0440\u0438\u0434 \u21161-->\n<!--\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: <\u0432\u0435\u0440\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b>-->\n<div id=\"adfox_159421292220852306\" style=\"position: relative; z-index: 0\"><\/div>\n<script>\n  window.yaContextCb.push(() => {\n    Ya.adfoxCode.createAdaptive(\n      {\n        ownerId: 353925,\n        containerId: \"adfox_159421292220852306\",\n        params: Object.assign(\n          {\n            pp: \"g\",\n            ps: \"edud\",\n            p2: \"gwjr\",\n          },\n          window.puids || {}\n        ),\n      },\n      [\"desktop\", \"tablet\"],\n      {\n        tabletWidth: 1023,\n        phoneWidth: 599,\n        isAutoReloads: true,\n      }\n    );\n  });\n<\/script>\n<!--AdFox START-->\n<!--yandex_mkruok-->\n<!--\u041f\u043b\u043e\u0449\u0430\u0434\u043a\u0430: MK.ru \/ * \/ *-->\n<!--\u0422\u0438\u043f \u0431\u0430\u043d\u043d\u0435\u0440\u0430: \u041c\u043e\u0431. \u0438\u043d\u0440\u0438\u0434 \u21161-->\n<!--\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: <\u0432\u0435\u0440\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b>-->\n<div\n  id=\"adfox_15942129737992027\"\n  style=\"position: relative; z-index: 0; margin: 0 auto; text-align: center\"\n><\/div>\n<script>\n  window.yaContextCb.push(() => {\n    Ya.adfoxCode.createAdaptive(\n      {\n        ownerId: 353925,\n        containerId: \"adfox_15942129737992027\",\n        params: Object.assign(\n          {\n            pp: \"g\",\n            ps: \"edud\",\n            p2: \"gwjw\",\n          },\n          window.puids || {}\n        ),\n      },\n      [\"phone\"],\n      {\n        tabletWidth: 1023,\n        phoneWidth: 599,\n        isAutoReloads: true,\n      }\n    );\n  });\n<\/script>"
,
            ].filter(function(item) {return item.trim().length > 0});
        </script>
            </div>

    <script type="application/json" class="article-social-networks-promotion">[{"href":"https:\/\/t.me\/mk_ru","class":"subsctibe-under-article subsctibe-under-article_telegram","target":"_blank","text":"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043b\u0443\u0447\u0448\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438 \"\u041c\u041a\" \u0432 Telegram"},{"href":"https:\/\/dzen.ru\/news?favid=1429&issue_tld=ru","class":"subsctibe-under-article subsctibe-under-article_yanews","target":"_blank","text":"\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043d\u0430\u0448\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0432\u044b\u043c\u0438 - \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u00ab\u041c\u041a\u00bb \u0432 \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438."},{"href":"https:\/\/zen.yandex.ru\/mk.ru?invite=1","class":"subsctibe-under-article subsctibe-under-article_zen","target":"_blank","text":"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043d\u0430\u0448 \u043a\u0430\u043d\u0430\u043b \u0432 \u042f\u043d\u0434\u0435\u043a\u0441 \u0414\u0437\u0435\u043d: \u0441\u0430\u043c\u044b\u0435 \u044f\u0440\u043a\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0434\u043d\u044f"}]</script>

    <script type="application/json" data-probability="0" class="article-subscription-inject">
  [
    {
      "href": "https://www.mk.ru/nationalprojects/digitaleconomics/2023/07/03/kurs-na-cifrovizaciyu-kak-razvivaetsya-funkcional-gosuslug.html?from=podpiski",
      "img": "https://www.mk.ru/upload/promo/obrazovanie-image.jpg",
      "btn": "Перейти",
      "class": "subsctibe-under-article",
      "target": "_blank",
      "text": "Оформить социальные выплаты стало проще"
    }
  ]
  </script>

    <div class="article__subscription">
        <a class="subscription subscription_hidden subscription_article" target="_blank" rel="noopener">
            <div class="subscription__image"></div>
            <p class="subscription__desc"></p>
            <div class="subscription__link-wraper">
                <p class="subscription__link">
                    <span class="subscription__link-text">Подписаться</span>
                    <svg class="subscription__icon-link" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
                </p>
            </div>
        </a>
    </div>

            <div class="article__authors">
                            <ul class="article__authors-image-list" aria-hidden="true">
                                                            <li class="article__authors-image-item">
                            <a href="https://www.mk.ru/authors/dmitriy-ilinskiy/" class="article__author-image-link">
                                <picture class="article__author-picture">
                                    <img class="article__author-image" width="52" height="52" src="https://static.mk.ru/media/img/mk.ru/no_author_photo_small.gif" alt="Дмитрий Ильинский">
                                </picture>
                            </a>
                        </li>
                                                    </ul>
            
            <div class="article__authors-data">
                Авторы:
                <ul class="article__authors-data-list">
                                                            <li class="article__authors-data-item" itemprop="author" itemscope itemtype="https://schema.org/Person">
                            <a href="https://www.mk.ru/authors/dmitriy-ilinskiy/" class="article__author-text-link" itemprop="url">
                                Дмитрий Ильинский                                <span class="article__authors-info"></span>
                            </a>
                            <meta itemprop="name" content="Дмитрий Ильинский">
                        </li>
                                                    </ul>

                
                <script type="application/json" class="yandex-metrika-article-info">{"Type":"news","Author":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439"}</script>

            </div>
        </div>
    
            <div class="article__tag">
                        <a href="https://www.mk.ru/organizations/gosduma/" class="article__tag-item" aria-label="Государственная Дума РФ">Государственная Дума РФ</a>
                        <a href="https://www.mk.ru/places/rossiya/" class="article__tag-item" aria-label="Россия">Россия</a>
                    </div>
    
    <div class="article__share-and-comments">
        <div class="article__share share share_no-init">
    <span class="share__text">Поделиться</span>
    <ul class="share__list">
        <li class="share__item">
            <a class="share__link share__link_vk" target="_blank" rel="nofollow noopener" data-mod="vk" aria-label="Вконтакте">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-vk"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_ok" target="_blank" rel="nofollow noopener" data-mod="ok" aria-label="в Одноклассниках">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-ok"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_tg" target="_blank" rel="nofollow noopener" data-mod="tg" aria-label="в Telegram">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-tg"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_twitter" target="_blank" rel="nofollow noopener" data-mod="twitter" aria-label="в Twitter">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-twitter"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_viber" target="_blank" rel="nofollow noopener" data-mod="viber" aria-label="в Viber">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-viber"></use></svg>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link_whatsapp" target="_blank" rel="nofollow noopener" data-mod="whatsapp" aria-label="в WhatsApp">
                <svg class="share__icon" width="22" height="22"><use xlink:href="#icon-whatsapp"></use></svg>
            </a>
        </li>
    </ul>
</div>
    </div>

    
    <div class="article__stories">
    <header class="article__stories-header">
        <a href="https://www.mk.ru/stories/dnr-lnr-ukraina-obostrenie/" class="article__stories-header-link">
                      <span class="article__stories-header-meta">
                        <svg class="article__stories-header-icon" width="16" height="16"><use xlink:href="#icon-stories"></use></svg>
                        Сюжет:
                      </span>
            <h2 class="article__stories-name">
                Новости СВО                 <svg class="article__stories-name-link-icon" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
            </h2>
        </a>
    </header>
    <ul class="article__stories-list">
                    <li class="article__stories-item">
                <h3 class="article__stories-title">
                    <a href="https://www.mk.ru/politics/2024/02/02/fifa-i-mossadik-slitaya-perepiska-zaluzhnogo-vskryla-peremeny-v-intimnoy-zhizni-zelenskogo.html" class="article__stories-link">
                        «Фифа» и «Моссадик»: слитая переписка Залужного вскрыла перемены в интимной жизни Зеленского                    </a>
                </h3>
            </li>
                    <li class="article__stories-item">
                <h3 class="article__stories-title">
                    <a href="https://www.mk.ru/politics/2024/02/02/professor-mirshaymer-novaya-pomoshh-es-kievu-ne-ostanovit-uspekhi-vs-rf.html" class="article__stories-link">
                        Профессор Миршаймер: новая помощь ЕС Киеву не остановит успехи ВС РФ                    </a>
                </h3>
            </li>
                    <li class="article__stories-item">
                <h3 class="article__stories-title">
                    <a href="https://www.mk.ru/incident/2024/02/02/sk-vozbudil-delo-protiv-vracha-nasmekhavsheysya-nad-pogibshim-boycom-svo.html" class="article__stories-link">
                        СК возбудил дело против врача, насмехавшейся над погибшим бойцом СВО                    </a>
                </h3>
            </li>
            </ul>
</div>
    
            
            <script type="application/json" class="js-article-post-editor-related-articles">[{"id":4916317,"title":"\u00ab\u041e\u043d\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b\u0438\u0433\u0440\u0430\u044e\u0442\u00bb: \u043f\u0440\u043e\u0434\u044e\u0441\u0435\u0440 \u043e\u0437\u0432\u0443\u0447\u0438\u043b \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0431\u043e\u0439\u043a\u043e\u0442\u0430 \u041a\u0438\u0440\u043a\u043e\u0440\u043e\u0432\u0430 \u0438 \u041b\u043e\u043b\u0438\u0442\u044b \u0432 \u0420\u043e\u0441\u0441\u0438\u0438","subtitle":"\u0421\u0435\u0440\u0433\u0435\u0439 \u041b\u0430\u0432\u0440\u043e\u0432 \u043e\u0437\u0432\u0443\u0447\u0438\u043b \u043d\u0435\u0442\u0440\u0438\u0432\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u043d\u0435\u043d\u0438\u0435","newspaperTitle":"","url":"https:\/\/www.mk.ru\/social\/2024\/02\/01\/oni-tolko-vyigrayut-prodyuser-ozvuchil-glavnoe-preimushhestvo-boykota-kirkorova-i-lolity-v-rossii.html","views":"5206","viewsFirst3Days":"5206","imageTitle":"\u0421\u0435\u0440\u0433\u0435\u0439 \u041b\u0430\u0432\u0440\u043e\u0432 \u043e\u0437\u0432\u0443\u0447\u0438\u043b \u043d\u0435\u0442\u0440\u0438\u0432\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u043d\u0435\u043d\u0438\u0435\n\n","hasAdvertisingSystemSign":false,"isStubImageUsed":false,"image":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/articles\/detailPicture\/11\/25\/16\/ba\/df28ac7c8203d769d910b53ed5ddd769.jpg","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/articles\/announcePic200\/20\/45\/83\/ee\/6b9e3cbeb3b5465ab0999a273f6b6eb1.jpg","teaserImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/articles\/teaserPicSmall\/6e\/fe\/2e\/3d\/f5fad73601901f022ce0f05ad549fbde.jpg","detailImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/articles\/detailPicture\/11\/25\/16\/ba\/df28ac7c8203d769d910b53ed5ddd769.jpg","facebookPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/articles\/facebookPicture\/80\/02\/2a\/92\/4c20bf628cc96748f99f39b0b914ce9f.jpg","hasFacebookPicture":true,"announce":"\u0411\u043e\u0439\u043a\u043e\u0442 \u041a\u0438\u0440\u043a\u043e\u0440\u043e\u0432\u0430, \u041b\u043e\u043b\u0438\u0442\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0437\u0432\u0435\u0437\u0434, \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0432\u0448\u0438\u0445 \u0432 \u00ab\u0433\u043e\u043b\u043e\u0439 \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0435\u00bb, \u043e\u0431\u0441\u0443\u0436\u0434\u0430\u044e\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e. \u0410\u0440\u0442\u0438\u0441\u0442\u044b \u043e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0435\u0437 \u044d\u0444\u0438\u0440\u043e\u0432 \u043d\u0430 \u0442\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u0438\u0438, \u043d\u043e \u0438 \u0431\u0435\u0437 \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u043e\u0432. \u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u044b \u043e\u0442\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u0445 \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f. \u041a\u043e\u043d\u0446\u0435\u0440\u0442\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u044e\u0441\u0435\u0440 \u0421\u0435\u0440\u0433\u0435\u0439 \u041b\u0430\u0432\u0440\u043e\u0432 \u043e\u0437\u0432\u0443\u0447\u0438\u043b \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u0432 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0435\u043c.\n\n","viewsCount":"5206","hasVideos":false,"hasPhotos":false,"commentsCount":0,"regionId":0,"region":null,"typeId":71,"hasStories":false,"isExclusive":true,"isWinterChinaOlympic":false,"publishDate":"2024-02-01 17:52:00","publishDateWithTime":"1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f, 17:52","activeFromDate":"1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2024","activeFromDateWithTime":"1 \u0444\u0435\u0432\u0440\u0430\u043b\u044f, 17:40","generalSection":{"id":18,"name":"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"},"isPressCenterActual":false,"sportMkSections":[],"authors":[{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/dmitriy-ilinskiy\/","realAuthorId":354262,"name":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","imageTitle":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","post":""}],"firstAuthor":{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/dmitriy-ilinskiy\/","realAuthorId":354262,"name":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","imageTitle":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","post":""}},{"id":4917858,"title":"\u00ab\u0423\u0431\u0440\u0430\u043b\u0438 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u041b\u043e\u043b\u0438\u0442\u0443 \u0438 \u041a\u0438\u0440\u043a\u043e\u0440\u043e\u0432\u0430\u00bb: \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u043f\u0435\u0432\u0435\u0446 \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u043b \u0432\u043d\u0435\u0437\u0430\u043f\u043d\u043e\u0435 \u0438\u0441\u0447\u0435\u0437\u043d\u043e\u0432\u0435\u043d\u0438\u0435 \u0441 \u044d\u043a\u0440\u0430\u043d\u043e\u0432 \u0422\u0412","subtitle":"\u0421\u0435\u0440\u0433\u0435\u0439 \u0411\u0435\u043b\u0438\u043a\u043e\u0432: \u00ab\u042f \u0441\u0442\u0430\u043b \u0447\u0443\u0436\u0438\u043c\u00bb","newspaperTitle":"","url":"https:\/\/www.mk.ru\/social\/2024\/02\/02\/ubrali-ne-tolko-lolitu-i-kirkorova-izvestnyy-pevec-obyasnil-vnezapnoe-ischeznovenie-s-ekranov-tv.html","views":"6790","viewsFirst3Days":"6790","imageTitle":"\u0421\u0435\u0440\u0433\u0435\u0439 \u0411\u0435\u043b\u0438\u043a\u043e\u0432: \u00ab\u042f \u0441\u0442\u0430\u043b \u0447\u0443\u0436\u0438\u043c\u00bb\n\n","hasAdvertisingSystemSign":false,"isStubImageUsed":false,"image":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/12\/articles\/detailPicture\/b2\/1e\/ec\/e2\/59d8ea207359c31a6568b0e97c0804c2.jpg","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/12\/articles\/announcePic200\/ee\/8e\/ff\/d1\/b90f4bb7b77f4474204fb180bd218239.jpg","teaserImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/12\/articles\/teaserPicSmall\/31\/d6\/7e\/46\/c303d9a4f9bf6818dc1164176f84aee5.jpg","detailImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/12\/articles\/detailPicture\/b2\/1e\/ec\/e2\/59d8ea207359c31a6568b0e97c0804c2.jpg","facebookPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/12\/articles\/facebookPicture\/ad\/5d\/54\/f6\/39ce3bc08038cbff56bbacb44739ab3d.jpg","hasFacebookPicture":true,"announce":"\u0412 \u0441\u043e\u0432\u0435\u0442\u0441\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0421\u0435\u0440\u0433\u0435\u0439 \u0411\u0435\u043b\u0438\u043a\u043e\u0432 \u0441\u0447\u0438\u0442\u0430\u043b\u0441\u044f \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u0432\u043e\u0441\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0435\u0439. \u0415\u0433\u043e \u0445\u0438\u0442\u044b \u2013 \u00ab\u0421\u043d\u0438\u0442\u0441\u044f \u043c\u043d\u0435 \u0434\u0435\u0440\u0435\u0432\u043d\u044f\u00bb, \u00ab\u0423 \u0431\u0435\u0434\u044b \u0433\u043b\u0430\u0437\u0430 \u0437\u0435\u043b\u0435\u043d\u044b\u0435\u00bb, \u00ab\u0420\u043e\u0434\u043d\u0438\u043a\u00bb - \u0437\u0432\u0443\u0447\u0430\u043b\u0438 \u043e\u0442\u043e\u0432\u0441\u044e\u0434\u0443. \u0412 \u043d\u0430\u0447\u0430\u043b\u0435 90-\u0445 \u0411\u0435\u043b\u0438\u043a\u043e\u0432 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e \u0438\u0441\u0447\u0435\u0437 \u0441 \u044d\u043a\u0440\u0430\u043d\u043e\u0432 \u0442\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u043e\u0432. \u0415\u0433\u043e \u0443\u0431\u0440\u0430\u043b\u0438 \u043d\u0435 \u0442\u0430\u043a \u0433\u0440\u043e\u043c\u043a\u043e, \u043a\u0430\u043a \u041b\u043e\u043b\u0438\u0442\u0443 \u0438 \u041a\u0438\u0440\u043a\u043e\u0440\u043e\u0432\u0430. \u041e \u0442\u043e\u043c, \u0438\u0437-\u0437\u0430 \u0447\u0435\u0433\u043e \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043b\u043e \u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u0438\u0435, \u0421\u0435\u0440\u0433\u0435\u0439 \u043e\u0442\u043a\u0440\u043e\u0432\u0435\u043d\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043b \u043a\u043e\u0440\u0440\u0435\u0441\u043f\u043e\u043d\u0434\u0435\u043d\u0442\u0430\u043c \u00ab\u041c\u041a\u00bb.\n\n","viewsCount":"6790","hasVideos":false,"hasPhotos":false,"commentsCount":0,"regionId":0,"region":null,"typeId":71,"hasStories":false,"isExclusive":true,"isWinterChinaOlympic":false,"publishDate":"2024-02-02 12:09:08","publishDateWithTime":"2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f, 12:09","activeFromDate":"2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2024","activeFromDateWithTime":"2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f, 12:08","generalSection":{"id":18,"name":"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"},"isPressCenterActual":false,"sportMkSections":[],"authors":[{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/dmitriy-ilinskiy\/","realAuthorId":354262,"name":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","imageTitle":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","post":""}],"firstAuthor":{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/dmitriy-ilinskiy\/","realAuthorId":354262,"name":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","imageTitle":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","post":""}},{"id":4918378,"title":"\u00ab\u0425\u043e\u0434\u0438\u0442 \u0441 \u043f\u0430\u043b\u043e\u0447\u043a\u0430\u043c\u0438\u00bb: \u0434\u0440\u0443\u0433 \u041d\u0438\u043a\u043e\u043b\u0430\u044f \u0414\u0440\u043e\u0437\u0434\u043e\u0432\u0430 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043b \u043f\u0440\u0430\u0432\u0434\u0443 \u043e \u0435\u0433\u043e \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435","subtitle":"","newspaperTitle":"","url":"https:\/\/www.mk.ru\/social\/2024\/02\/02\/khodit-s-palochkami-drug-nikolaya-drozdova-rasskazal-pravdu-o-ego-zdorove.html","views":"3123","viewsFirst3Days":"3123","imageTitle":"\u0417\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044f \u041d\u0438\u043a\u043e\u043b\u0430\u044f \u0414\u0440\u043e\u0437\u0434\u043e\u0432\u0430 \u0441\u043b\u0435\u0434\u0438\u0442 \u0432\u0441\u044f \u0441\u0442\u0440\u0430\u043d\u0430","hasAdvertisingSystemSign":false,"isStubImageUsed":false,"image":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/detailPicture\/87\/2a\/14\/cd\/c1a57479c05ab01706c286ac382fa45b.jpg","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/announcePic200\/fb\/ce\/76\/15\/f80cc76913ac6b6951d77ca15e923e23.jpg","teaserImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/teaserPicSmall\/7c\/31\/e2\/6d\/dfec00af3b4eae3178c67bcd04f63b13.jpg","detailImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/detailPicture\/87\/2a\/14\/cd\/c1a57479c05ab01706c286ac382fa45b.jpg","facebookPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/facebookPicture\/6d\/d2\/70\/b6\/8abb74b4854e184a0e9e2548fd9053ab.jpg","hasFacebookPicture":true,"announce":"","viewsCount":"3123","hasVideos":false,"hasPhotos":false,"commentsCount":0,"regionId":0,"region":null,"typeId":1,"hasStories":false,"isExclusive":true,"isWinterChinaOlympic":false,"publishDate":"2024-02-02 15:15:42","publishDateWithTime":"2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f, 15:15","activeFromDate":"2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2024","activeFromDateWithTime":"2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f, 15:15","generalSection":{"id":18,"name":"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"},"isPressCenterActual":false,"sportMkSections":[],"authors":[{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/dmitriy-ilinskiy\/","realAuthorId":354262,"name":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","imageTitle":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","post":""}],"firstAuthor":{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/dmitriy-ilinskiy\/","realAuthorId":354262,"name":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","imageTitle":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","post":""}}]</script>        </main>

        <div class="good-place__under-article-1"><style>
  .ad-unit_center {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>

<div style="position: relative; z-index: 0">
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Под статьёй (1690 и выше)-->
  <!--Расположение: <верх страницы>-->
  <div class="ad-unit_center">
    <div
      id="adfox_1594221437518263"
      style="margin: 0 auto; text-align: center; max-height: 350px"
    ></div>
  </div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_1594221437518263",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwkv",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
          lazyLoad: {
            fetchMargin: 100,
            mobileScaling: 2,
          },
        },
        ["desktop"],
        {
          tabletWidth: 1689,
          phoneWidth: 1023,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Под статьёй (1024-1689)-->
  <!--Расположение: <верх страницы>-->
  <div class="ad-unit_center">
    <div
      id="adfox_159422147277339195"
      style="margin: 0 auto; text-align: center; max-height: 300px"
    ></div>
  </div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_159422147277339195",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwku",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
          lazyLoad: {
            fetchMargin: 200,
            mobileScaling: 2,
          },
        },
        ["tablet"],
        {
          tabletWidth: 1689,
          phoneWidth: 1023,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Под статьёй (до 1024)-->
  <!--Расположение: <верх страницы>-->
  <div class="ad-unit_center">
    <div
      id="adfox_159422149172633958"
      style="margin: 0 auto; text-align: center; max-height: 300px"
    ></div>
  </div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_159422149172633958",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwkt",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
          lazyLoad: {
            fetchMargin: 100,
            mobileScaling: 2,
          },
        },
        ["tablet"],
        {
          tabletWidth: 1022,
          phoneWidth: 599,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Моб. 300x250 под статьёй №1-->
  <!--Расположение: <верх страницы>-->
  <div
    class="ad-unit_center mk-undart-block__300x250_mobile_1"
    style="margin: 0 auto; text-align: center; max-height: 300px"
  >
    <div id="adfox_1594221522506922"></div>
  </div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_1594221522506922",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwib",
              pk: decodeURIComponent("%20" + adFoxParams.mksafe),
            },
            window.puids || {}
          ),
          lazyLoad: {
            fetchMargin: 100,
            mobileScaling: 2,
          },
        },
        ["phone"],
        {
          tabletWidth: 1022,
          phoneWidth: 599,
          isAutoReloads: true,
        }
      );
    });
  </script>
  <!--AdFox START-->
  <!--yandex_mkruok-->
  <!--Площадка: MK.ru / * / *-->
  <!--Тип баннера: Моб. 320x100 / 300x250 под статьёй №2-->
  <!--Расположение: <верх страницы>-->
  <div
    class="ad-unit_center mk-undart-block__320x100_mobile_2"
    style="margin: 15px auto 10px; text-align: center"
  >
    <div id="adfox_160323859383387455"></div>
  </div>
  <script>
    window.yaContextCb.push(() => {
      Ya.adfoxCode.createAdaptive(
        {
          ownerId: 353925,
          containerId: "adfox_160323859383387455",
          params: Object.assign(
            {
              pp: "g",
              ps: "edud",
              p2: "gwic",
            },
            window.puids || {}
          ),
        },
        ["phone"],
        {
          tabletWidth: 1022,
          phoneWidth: 599,
          isAutoReloads: true,
        }
      );
    });
  </script>
</div>
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: Моб. экстра-->
<!--Расположение: <верх страницы>-->
<div id="adfox_161617348168962148"></div>
<script>
  window.yaContextCb.push(() => {
    Ya.adfoxCode.createAdaptive(
      {
        ownerId: 353925,
        containerId: "adfox_161617348168962148",
        params: {
          pp: "g",
          ps: "edud",
          p2: "gxdp",
          puid1: "",
          puid2: "",
        },
        lazyLoad: {
          fetchMargin: 200,
          mobileScaling: 1,
        },
      },
      ["phone"],
      {
        tabletWidth: 1022,
        phoneWidth: 599,
        isAutoReloads: false,
      }
    );
  });
</script>
<div id="unit_95292" style="margin-left: 5px;"></div> <script type="text/javascript" charset="utf-8">
  (function() {
    var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
    sc.src = '//smi2.ru/data/js/95292.js'; sc.charset = 'utf-8';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
  }());
</script></div>

        

                    <section class="article-grid__interesting interesting_mob-shown js-not-init">
    <script type="application/json" class="js-content-data">
        [{"id":4918896,"url":"https:\/\/www.mk.ru\/incident\/2024\/02\/02\/na-rossiyskom-kladbishhe-razgromili-mogily-uchastnikov-svo.html","title":"\u041d\u0430 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u043c \u043a\u043b\u0430\u0434\u0431\u0438\u0449\u0435 \u0440\u0430\u0437\u0433\u0440\u043e\u043c\u0438\u043b\u0438 \u043c\u043e\u0433\u0438\u043b\u044b \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u0421\u0412\u041e","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/18\/articles\/announcePic200\/4b\/0f\/cb\/4a\/63e9223a22265a930503d1e7af674992.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/18\/articles\/announcePic200\/4b\/0f\/cb\/4a\/63e9223a22265a930503d1e7af674992.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/18\/articles\/detailPicture\/7b\/2f\/cd\/42\/1b9849081c614be6f9dfb2cddf8d9a7b.jpg","size":550},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/18\/articles\/teaserPicSmall\/ac\/81\/7f\/87\/13e60b7dcde71a6f407f7552970178fa.jpg","size":90}],"hasPhotos":false,"hasVideos":false,"viewsCount":"16260","authors":[{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/maksimaleksandrov\/","realAuthorId":354655,"name":"\u041c\u0430\u043a\u0441\u0438\u043c \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432","imageTitle":"\u041c\u0430\u043a\u0441\u0438\u043c \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432","post":""}],"region":null},{"id":4919018,"url":"https:\/\/www.mk.ru\/politics\/2024\/02\/02\/medvedev-nazval-usloviya-naneseniya-rossiey-udara-po-strane-nato.html","title":"\u041c\u0435\u0434\u0432\u0435\u0434\u0435\u0432 \u043d\u0430\u0437\u0432\u0430\u043b \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043d\u0430\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0420\u043e\u0441\u0441\u0438\u0435\u0439 \u0443\u0434\u0430\u0440\u0430 \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0435 \u041d\u0410\u0422\u041e","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/announcePic200\/97\/71\/1d\/57\/8df256cf45b78133124b8bf72dbbfd6a.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/announcePic200\/97\/71\/1d\/57\/8df256cf45b78133124b8bf72dbbfd6a.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/detailPicture\/98\/c3\/7e\/e7\/ca03aca4f5aa683142082296b1c08748.jpg","size":550},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/teaserPicSmall\/b7\/98\/46\/ff\/8f597ae8c74fa6ed45660f54a6a58b16.jpg","size":90}],"hasPhotos":false,"hasVideos":false,"viewsCount":"4957","authors":[{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/tatyanaplotnikova\/","realAuthorId":354488,"name":"\u0422\u0430\u0442\u044c\u044f\u043d\u0430 \u041f\u043b\u043e\u0442\u043d\u0438\u043a\u043e\u0432\u0430","imageTitle":"\u0422\u0430\u0442\u044c\u044f\u043d\u0430 \u041f\u043b\u043e\u0442\u043d\u0438\u043a\u043e\u0432\u0430","post":""}],"region":null},{"id":4919042,"url":"https:\/\/www.mk.ru\/culture\/2024\/02\/02\/ot-pevca-malinina-izza-svo-potrebovali-izvineniy-za-staruyu-pesnyu.html","title":"\u041e\u0442 \u043f\u0435\u0432\u0446\u0430 \u041c\u0430\u043b\u0438\u043d\u0438\u043d\u0430 \u0438\u0437-\u0437\u0430 \u0421\u0412\u041e \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u0438 \u0438\u0437\u0432\u0438\u043d\u0435\u043d\u0438\u0439 \u0437\u0430 \u0441\u0442\u0430\u0440\u0443\u044e \u043f\u0435\u0441\u043d\u044e","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/announcePic200\/2e\/af\/5f\/26\/49cba3a06818d92ee5700ed45a36c66f.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/announcePic200\/2e\/af\/5f\/26\/49cba3a06818d92ee5700ed45a36c66f.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/detailPicture\/a9\/1e\/51\/07\/4c24ac2e451c26bfbb795fc82e3fb72a.jpg","size":550},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/teaserPicSmall\/12\/de\/ec\/f2\/a4e86460819ef387687f8fe46968e23c.jpg","size":90}],"hasPhotos":false,"hasVideos":false,"viewsCount":"4937","authors":[{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/martapetrova\/","realAuthorId":351392,"name":"\u041c\u0430\u0440\u0442\u0430 \u041f\u0435\u0442\u0440\u043e\u0432\u0430","imageTitle":"\u041c\u0430\u0440\u0442\u0430 \u041f\u0435\u0442\u0440\u043e\u0432\u0430","post":""}],"region":null},{"id":4918481,"url":"https:\/\/www.mk.ru\/social\/2024\/02\/02\/v-gosdume-obyasnili-pochemu-pesni-o-geroyakh-svo-ignoriruyut-na-televidenii.html","title":"\u0412 \u0413\u043e\u0441\u0434\u0443\u043c\u0435 \u043e\u0431\u044a\u044f\u0441\u043d\u0438\u043b\u0438, \u043f\u043e\u0447\u0435\u043c\u0443 \u043f\u0435\u0441\u043d\u0438 \u043e \u0433\u0435\u0440\u043e\u044f\u0445 \u0421\u0412\u041e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442 \u043d\u0430 \u0442\u0435\u043b\u0435\u0432\u0438\u0434\u0435\u043d\u0438\u0438","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/announcePic200\/04\/6f\/8b\/d5\/d5e187390c14441bcad33559a8af06a5.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/announcePic200\/04\/6f\/8b\/d5\/d5e187390c14441bcad33559a8af06a5.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/detailPicture\/60\/7d\/2f\/21\/a6daafdb304e368dacd07e41eff4ee36.jpg","size":550},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/15\/articles\/teaserPicSmall\/81\/bc\/65\/93\/f46f82a19dd3cfb0eb75581bc095273f.jpg","size":90}],"hasPhotos":false,"hasVideos":false,"viewsCount":"9874","authors":[{"smallAvatar":"https:\/\/static.mk.ru\/media\/img\/mk.ru\/no_author_photo_small.gif","url":"https:\/\/www.mk.ru\/authors\/dmitriy-ilinskiy\/","realAuthorId":354262,"name":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","imageTitle":"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439","post":""}],"region":null},{"id":4918732,"url":"https:\/\/www.mk.ru\/politics\/2024\/02\/02\/polkovnik-matviychuk-rasskazal-kto-navodil-petriot-na-il76-zelenskiy-skoree-vsego-znal.html","title":"\u041f\u043e\u043b\u043a\u043e\u0432\u043d\u0438\u043a \u041c\u0430\u0442\u0432\u0438\u0439\u0447\u0443\u043a \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043b, \u043a\u0442\u043e \u043d\u0430\u0432\u043e\u0434\u0438\u043b \u00ab\u041f\u044d\u0442\u0440\u0438\u043e\u0442\u00bb \u043d\u0430 \u0418\u043b-76: \u00ab\u0417\u0435\u043b\u0435\u043d\u0441\u043a\u0438\u0439, \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0437\u043d\u0430\u043b\u00bb","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/17\/articles\/announcePic200\/ea\/27\/c5\/3b\/562d84d4dd86718a016e110a4f95638f.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/17\/articles\/announcePic200\/ea\/27\/c5\/3b\/562d84d4dd86718a016e110a4f95638f.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/17\/articles\/detailPicture\/28\/8a\/64\/80\/16c8afa5dc405791df3c564ff594c39d.jpg","size":550},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/17\/articles\/teaserPicSmall\/f1\/66\/76\/cf\/97710319e89090e3adf2c0db40ce9097.jpg","size":90}],"hasPhotos":false,"hasVideos":false,"viewsCount":"5695","authors":[{"smallAvatar":"https:\/\/static.mk.ru\/upload\/objects\/authors\/picture\/e1\/38\/17\/64\/9653486_9726237.jpg","url":"https:\/\/www.mk.ru\/authors\/darya-fedotova\/","realAuthorId":1682,"name":"\u0414\u0430\u0440\u044c\u044f \u0424\u0435\u0434\u043e\u0442\u043e\u0432\u0430","imageTitle":"\u0414\u0430\u0440\u044c\u044f \u0424\u0435\u0434\u043e\u0442\u043e\u0432\u0430","post":""}],"region":null},{"id":4919030,"url":"https:\/\/www.mk.ru\/incident\/2024\/02\/02\/zhena-izvestnogo-gollivudskogo-aktera-bredli-tomasa-pokonchila-s-soboy.html","title":"\u0416\u0435\u043d\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u0433\u043e\u043b\u043b\u0438\u0432\u0443\u0434\u0441\u043a\u043e\u0433\u043e \u0430\u043a\u0442\u0435\u0440\u0430 \u043f\u043e\u043a\u043e\u043d\u0447\u0438\u043b\u0430 \u0441 \u0441\u043e\u0431\u043e\u0439","announceImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/announcePic200\/fe\/59\/95\/db\/e84c1d941e171baec73e956c61801d98.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/announcePic200\/fe\/59\/95\/db\/e84c1d941e171baec73e956c61801d98.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/detailPicture\/00\/21\/30\/b1\/f4080414b275948480c2131d9349e746.jpg","size":550},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/20\/articles\/teaserPicSmall\/af\/5b\/ba\/fa\/317e10c7560a05a53be8dc9f9d4c41d2.jpg","size":90}],"hasPhotos":false,"hasVideos":false,"viewsCount":"3434","authors":[{"smallAvatar":"https:\/\/static.mk.ru\/upload\/entities\/2021\/07\/02\/21\/authors\/picture\/1e\/6e\/27\/fd\/9369392_1056694.jpg","url":"https:\/\/www.mk.ru\/authors\/elizavetasapkova\/","realAuthorId":353803,"name":"\u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430 \u0421\u0430\u043f\u043a\u043e\u0432\u0430","imageTitle":"\u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430 \u0421\u0430\u043f\u043a\u043e\u0432\u0430","post":""}],"region":null}]    </script>
    <script type="application/json" class="js-extra-data">"<div class=\"article-preview\">\n  <div class=\"js-relap-anchor\" data-relap-id=\"WpGRLf4_0yjSAAAA\"><\/div>\n<\/div>\n<script>\n  window.relapTasks = window.relapTasks || [];\n  window.relapTasks.push(function(relapAPI) {\n    relapAPI.addWidget({\n      cfgId: 'WpGRLf4_0yjSAAAA',\n      events: {\n        onReady: function(obj) {\n          const meta = document.createElement('p');\n          meta.classList.add('meta');\n          meta.innerHTML = '<span class=\"meta__item meta__item_adv\">\u0420\u0435\u043a\u043b\u0430\u043c\u0430<\/span>'\n          obj.el.parentElement.insertAdjacentElement('beforeend', meta);\n          obj.el.parentElement.parentElement.style.display = '';\n          obj.el.parentElement.parentElement.classList.add('interesting__item');\n          var root = obj.el.parentElement.parentElement.parentElement;\n          root.insertAdjacentElement('beforeend', root.children[3]);\n          root.insertAdjacentElement('beforeend', root.children[3]);\n          root.children[2].remove();\n        }\n      },\n    });\n  });\n<\/script>"</script>
</section>        
        
        
        <div class="good-place__under-article-2"><div id="adfox_160224647124888679"></div>
<script>
window.yaContextCb.push(()=>{
    window.Ya.adfoxCode.createAdaptive({
        ownerId: 353925,
        containerId: 'adfox_160224647124888679',
        params: {
            pp: 'g',
            ps: 'edud',
            p2: 'gywp',
            puid1: '',
            puid2: ''
        }
    }, ['phone'], {
        tabletWidth: 830,
        phoneWidth: 599,
        isAutoReloads: true
    })
})
</script>
<script async data-lazy="https://jsn.24smi.net/smi.js"></script>
<div class="smi24__informer smi24__auto" data-smi-blockid="18387" style="position:relative;z-index:0;"></div>
<script>(window.smiq = window.smiq || []).push({});</script></div>

        <section class="article-grid__photo-slider media-slider js-media-slider js-not-init" data-url="/photo/" data-name="Фоторепортажи">
    <script type="application/json" class="js-content-data" data-content="photo">
        [{"id":"39043","url":"https:\/\/www.mk.ru\/photo\/gallery\/39043-772488.html","title":"\u0413\u0430\u0440\u0438\u043a \u0425\u0430\u0440\u043b\u0430\u043c\u043e\u0432 \u043d\u0430\u043c\u0435\u043a\u043d\u0443\u043b \u043d\u0430 \u0440\u0430\u0437\u0440\u044b\u0432 \u0441 \u041a\u0430\u0442\u0435\u0440\u0438\u043d\u043e\u0439 \u041a\u043e\u0432\u0430\u043b\u044c\u0447\u0443\u043a: \u0432\u0441\u0435 \u0436\u0435\u043d\u0449\u0438\u043d\u044b \u043a\u043e\u043c\u0438\u043a\u0430","coverImage":{"id":"772488","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/14\/photoreportsImages\/teaserPicture\/ae\/fc\/ea\/4b\/8b83c85036cee6b6079bd1fff6eb597b.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/14\/photoreportsImages\/detailPicture\/ad\/9e\/90\/ad\/5d74828b6d50c3b1683d2fd1fe1a5ba8.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/14\/photoreportsImages\/announcePicture\/0b\/e1\/a3\/8e\/81edbe95c780e3c975d788bfe8baaa27.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/14\/photoreportsImages\/listingTeaserPicture\/c9\/ac\/8e\/70\/ee1ab55539f7a945386cc346aadc6703.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/14\/photoreportsImages\/sliderTeaserPicture\/2f\/98\/d2\/79\/b701c3291d4575301b2f16e03fc89541.jpg"},"views":0,"isCover":true,"url":"\/\/www.mk.ru\/photo\/gallery\/39043-772488.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/14\/photoreportsImages\/announcePicture\/0b\/e1\/a3\/8e\/81edbe95c780e3c975d788bfe8baaa27.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/02\/14\/photoreportsImages\/detailPicture\/ad\/9e\/90\/ad\/5d74828b6d50c3b1683d2fd1fe1a5ba8.jpg","size":1000}],"cntPhoto":11,"isPhotoReportOfTheDay":true,"viewsCount":25336,"region":null},{"id":"38992","url":"https:\/\/www.mk.ru\/photo\/gallery\/38992-771626.html","title":"\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u041c\u0430\u0448\u043a\u043e\u0432, SHAMAN \u0432 \u043a\u043e\u0441\u0442\u044e\u043c\u0435: \u044d\u043c\u043e\u0446\u0438\u0438 \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u041f\u0443\u0442\u0438\u043d\u0430 \u0441 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u043b\u0438\u0446\u0430\u043c\u0438","coverImage":{"id":"771626","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/18\/photoreportsImages\/teaserPicture\/86\/15\/c8\/63\/efb0a58ea1b86d817cab2e793bfb7608.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/18\/photoreportsImages\/detailPicture\/8c\/bd\/23\/81\/88018d4741510c7ec28c4a4061818d9c.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/18\/photoreportsImages\/announcePicture\/4f\/e0\/d4\/87\/64abc6af7c26efaffe3197f7ee558122.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/18\/photoreportsImages\/listingTeaserPicture\/f3\/69\/94\/a9\/8d4c5cadcad9dc5fae1b419bb019e1ac.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/18\/photoreportsImages\/sliderTeaserPicture\/aa\/b1\/05\/35\/06073160207215f2d8b35630367f7585.jpg"},"views":0,"isCover":true,"url":"\/\/www.mk.ru\/photo\/gallery\/38992-771626.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/18\/photoreportsImages\/announcePicture\/4f\/e0\/d4\/87\/64abc6af7c26efaffe3197f7ee558122.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/18\/photoreportsImages\/detailPicture\/8c\/bd\/23\/81\/88018d4741510c7ec28c4a4061818d9c.jpg","size":1000}],"cntPhoto":79,"isPhotoReportOfTheDay":false,"viewsCount":465922,"region":null},{"id":"38979","url":"https:\/\/www.mk.ru\/photo\/gallery\/38979-771438.html","title":"\u041f\u0440\u0430\u0432\u043d\u0443\u0447\u043a\u0430 \u043b\u0435\u0442\u0447\u0438\u043a\u0430 \u0427\u043a\u0430\u043b\u043e\u0432\u0430 \u043f\u0440\u0438\u0437\u0432\u0430\u043b\u0430 \u0443\u0434\u0430\u0440\u0438\u0442\u044c \u043f\u043e \u041c\u043e\u0441\u043a\u0432\u0435 \u044f\u0434\u0435\u0440\u043d\u044b\u043c \u043e\u0440\u0443\u0436\u0438\u0435\u043c: \u0444\u043e\u0442\u043e \u0414\u0430\u0440\u044c\u0438 \u0411\u043e\u0433\u0434\u0430\u043d\u043e\u0432\u043e\u0439","coverImage":{"id":"771438","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/11\/photoreportsImages\/teaserPicture\/c0\/04\/1d\/0e\/d985b3dc04b11d510d393333eea4401f.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/11\/photoreportsImages\/detailPicture\/3f\/c1\/08\/ad\/c2335d4e52dd53f1457aea7ec05b2cbb.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/11\/photoreportsImages\/announcePicture\/66\/e1\/c1\/e2\/d9eb8f1e579761bb8436a12f5c4a936a.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/11\/photoreportsImages\/listingTeaserPicture\/bc\/b7\/02\/56\/adf6a182dfa265a643136f192b9be39b.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/11\/photoreportsImages\/sliderTeaserPicture\/ec\/88\/07\/24\/5f9c6b6a5f9c2058c1417f24891cac7f.jpg"},"views":0,"isCover":true,"url":"\/\/www.mk.ru\/photo\/gallery\/38979-771438.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/11\/photoreportsImages\/announcePicture\/66\/e1\/c1\/e2\/d9eb8f1e579761bb8436a12f5c4a936a.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/11\/photoreportsImages\/detailPicture\/3f\/c1\/08\/ad\/c2335d4e52dd53f1457aea7ec05b2cbb.jpg","size":1000}],"cntPhoto":10,"isPhotoReportOfTheDay":false,"viewsCount":173097,"region":null},{"id":"39015","url":"https:\/\/www.mk.ru\/photo\/gallery\/39015-772136.html","title":"\u0414\u043e\u0447\u044c \u0415\u043b\u044c\u0446\u0438\u043d\u0430 \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430\u0441\u044c, \u0432\u043d\u0443\u043a \u0432\u043e\u0437\u043c\u0443\u0436\u0430\u043b: \u043a\u0430\u0434\u0440\u044b \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0445 \u043d\u0430 \u043c\u043e\u0433\u0438\u043b\u0443 \u044d\u043a\u0441-\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442\u0430","coverImage":{"id":"772136","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/photoreportsImages\/teaserPicture\/e7\/e1\/c5\/85\/0e62118d16301fe730681dd302c1b4e5.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/photoreportsImages\/detailPicture\/d7\/f6\/39\/e8\/418bfca786de4ddb74b408fbb081e5d2.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/photoreportsImages\/announcePicture\/ac\/d3\/12\/bf\/380f4d3e1c55ec8204615735693e3c3f.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/photoreportsImages\/listingTeaserPicture\/e0\/df\/61\/72\/b4a7d8df175fe8cc1bc06c902a7c5ec5.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/photoreportsImages\/sliderTeaserPicture\/ba\/1c\/fb\/fb\/c4c456d5b0958d04fc3f57046c2a560a.jpg"},"views":0,"isCover":true,"url":"\/\/www.mk.ru\/photo\/gallery\/39015-772136.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/photoreportsImages\/announcePicture\/ac\/d3\/12\/bf\/380f4d3e1c55ec8204615735693e3c3f.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/17\/photoreportsImages\/detailPicture\/d7\/f6\/39\/e8\/418bfca786de4ddb74b408fbb081e5d2.jpg","size":1000}],"cntPhoto":23,"isPhotoReportOfTheDay":false,"viewsCount":140978,"region":null},{"id":"38824","url":"https:\/\/www.mk.ru\/photo\/gallery\/38824-768571.html","title":"\u041f\u043e\u0434 \u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u043e\u043c \u0440\u0443\u0445\u043d\u0443\u043b \u0432\u043e\u0435\u043d\u043d\u043e-\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0439 \u0441\u0430\u043c\u043e\u043b\u0435\u0442 \u0418\u043b-76: \u0436\u0443\u0442\u043a\u0438\u0435 \u043a\u0430\u0434\u0440\u044b \u0441 \u043c\u0435\u0441\u0442\u0430 \u0427\u041f","coverImage":{"id":"768571","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/13\/photoreportsImages\/teaserPicture\/94\/f2\/b2\/b3\/690a36fd3c7c2fe11b65010aaa71e461.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/13\/photoreportsImages\/detailPicture\/c6\/36\/57\/33\/7acc1a880ef85e5468d5110189a01d87.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/13\/photoreportsImages\/announcePicture\/db\/5f\/04\/3e\/40a891456ff6fac46ee2930884b98738.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/13\/photoreportsImages\/listingTeaserPicture\/2a\/a1\/ac\/08\/792530c1d8659d2260dbb77fc7119da7.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/13\/photoreportsImages\/sliderTeaserPicture\/7d\/41\/2c\/0e\/8966567a578a78885f2bea1f1f0bc0e5.jpg"},"views":0,"isCover":true,"url":"\/\/www.mk.ru\/photo\/gallery\/38824-768571.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/13\/photoreportsImages\/announcePicture\/db\/5f\/04\/3e\/40a891456ff6fac46ee2930884b98738.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/13\/photoreportsImages\/detailPicture\/c6\/36\/57\/33\/7acc1a880ef85e5468d5110189a01d87.jpg","size":1000}],"cntPhoto":16,"isPhotoReportOfTheDay":false,"viewsCount":798558,"region":null},{"id":"38926","url":"https:\/\/www.mk.ru\/photo\/gallery\/38926-770531.html","title":"\u041f\u0435\u0440\u0435\u0441\u0438\u043b\u044c\u0434, \u042f\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439, \u041c\u0438\u0445\u0430\u043b\u043a\u043e\u0432\u0430: \u0444\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u0438 \u0432\u0440\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u0438\u043d\u043e\u043f\u0440\u0435\u043c\u0438\u0438","coverImage":{"id":"770531","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/20\/photoreportsImages\/teaserPicture\/b0\/76\/23\/87\/fbff37703ca21369967acb1df2c33780.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/20\/photoreportsImages\/detailPicture\/17\/aa\/36\/cf\/5a26725bf0b23fb1608566d049610e49.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/20\/photoreportsImages\/announcePicture\/c7\/6d\/11\/7e\/63efe7088c6f6a30720db95b28d9b6d5.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/20\/photoreportsImages\/listingTeaserPicture\/c6\/9a\/07\/06\/c4b8c87fafd5a4fb05663c7554196da4.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/20\/photoreportsImages\/sliderTeaserPicture\/23\/a7\/45\/24\/0df4e7a1387a3b665f063827a6972d2c.jpg"},"views":0,"isCover":true,"url":"\/\/www.mk.ru\/photo\/gallery\/38926-770531.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/20\/photoreportsImages\/announcePicture\/c7\/6d\/11\/7e\/63efe7088c6f6a30720db95b28d9b6d5.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/20\/photoreportsImages\/detailPicture\/17\/aa\/36\/cf\/5a26725bf0b23fb1608566d049610e49.jpg","size":1000}],"cntPhoto":29,"isPhotoReportOfTheDay":false,"viewsCount":190345,"region":null},{"id":"38963","url":"https:\/\/www.mk.ru\/photo\/gallery\/38963-771166.html","title":"\u0423\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u0438\u0439 \u0430\u043a\u0442\u0435\u0440 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0424\u0435\u0434\u0438\u043d\u0447\u0443\u043a \u0443\u0431\u0438\u0442 \u0432 \u0437\u043e\u043d\u0435 \u0421\u0412\u041e: \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0444\u043e\u0442\u043e","coverImage":{"id":"771166","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/12\/photoreportsImages\/teaserPicture\/b2\/87\/94\/f7\/b42144a419c2e71a37e06e627a3ac258.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/12\/photoreportsImages\/detailPicture\/75\/1a\/cd\/0c\/d131b7b855ef4dbabccd4e78ae0081c3.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/12\/photoreportsImages\/announcePicture\/0f\/35\/25\/b8\/121ebb3dd19ed9272127803c0b4397d0.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/12\/photoreportsImages\/listingTeaserPicture\/18\/8b\/e4\/c3\/1b242f7c66837d9f67e279ff4eefc047.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/12\/photoreportsImages\/sliderTeaserPicture\/49\/9c\/df\/fc\/9207c76bdf2863fb7dc1dd088f47740b.jpg"},"views":0,"isCover":true,"url":"\/\/www.mk.ru\/photo\/gallery\/38963-771166.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/12\/photoreportsImages\/announcePicture\/0f\/35\/25\/b8\/121ebb3dd19ed9272127803c0b4397d0.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/12\/photoreportsImages\/detailPicture\/75\/1a\/cd\/0c\/d131b7b855ef4dbabccd4e78ae0081c3.jpg","size":1000}],"cntPhoto":9,"isPhotoReportOfTheDay":false,"viewsCount":127826,"region":null},{"id":"26702","url":"https:\/\/vladimir.mk.ru\/photo\/gallery\/26702-512019.html","title":"\u041d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f \u043a \u043f\u0440\u0438\u0435\u043c\u0443 \u0433\u043e\u0441\u0442\u0435\u0439","coverImage":{"id":"512019","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2022\/01\/09\/16\/photoreportsImages\/teaserPicture\/4e\/e1\/0f\/d6\/e379095dc25de5b6d2ab6d2b9e7260bb.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2022\/01\/09\/16\/photoreportsImages\/detailPicture\/1f\/58\/44\/fa\/9911a154dc32b5ec1c32f67637149703.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2022\/01\/09\/16\/photoreportsImages\/announcePicture\/10\/fb\/bd\/96\/4e2d3bfb50ac7d62274b906e06e2dfc4.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2022\/01\/09\/16\/photoreportsImages\/listingTeaserPicture\/21\/12\/94\/91\/175808551ffc1a92eaf7e3493d567e68.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2022\/01\/09\/16\/photoreportsImages\/sliderTeaserPicture\/2f\/92\/44\/db\/a280319c538eb438e908db56d3b1f04c.jpg"},"views":0,"isCover":true,"url":"\/\/vladimir.mk.ru\/photo\/gallery\/26702-512019.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2022\/01\/09\/16\/photoreportsImages\/announcePicture\/10\/fb\/bd\/96\/4e2d3bfb50ac7d62274b906e06e2dfc4.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2022\/01\/09\/16\/photoreportsImages\/detailPicture\/1f\/58\/44\/fa\/9911a154dc32b5ec1c32f67637149703.jpg","size":1000}],"cntPhoto":14,"isPhotoReportOfTheDay":false,"viewsCount":124658,"region":{"id":"25","name":"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440","url":"https:\/\/vladimir.mk.ru"}},{"id":"38099","url":"https:\/\/yar.mk.ru\/photo\/gallery\/38099-753318.html","title":"\u0421\u0430\u043c\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u043a\u0430\u0442\u043e\u043a \u0420\u043e\u0441\u0441\u0438\u0438 \u043e\u0442\u043a\u0440\u044b\u043b\u0438 \u0432 \u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u0435","coverImage":{"id":"753318","sizes":{"teaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2023\/12\/17\/10\/photoreportsImages\/teaserPicture\/57\/52\/f1\/11\/d2036c96d76e56557556d6fd717d4219.jpg","detailPicture":"https:\/\/static.mk.ru\/upload\/entities\/2023\/12\/17\/10\/photoreportsImages\/detailPicture\/2e\/5e\/37\/d0\/95fc2e8b0bb2c6f66432d4868a3c16a3.jpg","announcePicture":"https:\/\/static.mk.ru\/upload\/entities\/2023\/12\/17\/10\/photoreportsImages\/announcePicture\/85\/53\/be\/1f\/232cb24c3e447ebb3c14dd04cfcc2286.jpg","listingTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2023\/12\/17\/10\/photoreportsImages\/listingTeaserPicture\/3c\/2d\/d6\/4e\/421d5e28095ff5c101fb03b1021bacf9.jpg","sliderTeaserPicture":"https:\/\/static.mk.ru\/upload\/entities\/2023\/12\/17\/10\/photoreportsImages\/sliderTeaserPicture\/66\/b0\/8f\/e7\/14fc3c4378626961ae49faa58e64509f.jpg"},"views":0,"isCover":true,"url":"\/\/yar.mk.ru\/photo\/gallery\/38099-753318.html"},"coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2023\/12\/17\/10\/photoreportsImages\/announcePicture\/85\/53\/be\/1f\/232cb24c3e447ebb3c14dd04cfcc2286.jpg","size":243},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2023\/12\/17\/10\/photoreportsImages\/detailPicture\/2e\/5e\/37\/d0\/95fc2e8b0bb2c6f66432d4868a3c16a3.jpg","size":1000}],"cntPhoto":36,"isPhotoReportOfTheDay":false,"viewsCount":104128,"region":{"id":"28","name":"\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c","url":"https:\/\/yar.mk.ru"}}]    </script>
</section>
        <div class="good-place__uunder-photo-reports"><script src='https://setka.media/scr/bundle.js'></script>
<link rel='stylesheet' href='https://setka.media/scr/bundle.css' media='all'>
<div id='setka46' style='margin-bottom:20px'></div>
<script type='text/javascript'>
  new setka({
    bid: 46,
    blockid: '#setka46',
    params: {
          type: 'slider',
          mod: 'overlay',
          slideWidth: 192,
          slideHeight: 256
        }
  });
</script></div>

        
                    <section class="article-grid__read-more interesting_mob-shown">
    <header class="aside-head">
        <h2 class="aside-head__title">
            Что еще почитать
        </h2>
    </header>
    <ul class="interesting interesting_read-more">
                        <li class="interesting__item interesting__item_first">
            <article class="article-preview ">
                <a class="article-preview__content " href="https://www.mk.ru/social/2024/02/02/stalo-izvestno-ot-chego-nado-otkazatsya-malininu-radi-koncerta-v-saratove.html?from=article_mstpp">
                    <div class="article-preview__story-title-group">
                        <picture class="article-preview__image article-preview__image_in-story">
                            <img class="article-preview__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/02/02/16/articles/detailPicture/b5/ca/9d/ca/db822b5b8b7dfbf553eb7312b6b68415.jpg" alt="«Он должен публично заявить о поддержке СВО»

">
                        </picture>
                        <h3 class="article-preview__title">Стало известно, от чего надо отказаться Малинину ради концерта в Саратове</h3>
                    </div>
                </a>
                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">4867</span>
                    </span>
                </p>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="https://www.mk.ru/authors/irina-bobrova/">Ирина Боброва</a>
                                                    </div>
                    </div>
                                            </article>
        </li>
                            <li class="interesting__item">
            <article class="article-preview ">
                <a class="article-preview__content " href="https://www.mk.ru/politics/2024/02/02/deputat-fedorov-ssha-podgotovili-80-tysyach-ultrapatriotov-dlya-maydana-v-rossii.html?from=article_mstpp">
                    <div class="article-preview__story-title-group">
                        <picture class="article-preview__image article-preview__image_in-story">
                            <img class="article-preview__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/02/02/15/articles/detailPicture/6a/65/b4/ad/8db1ff5f4574d97bead3de9778ea3337.jpg" alt="Их готовили 30 лет

">
                        </picture>
                        <h3 class="article-preview__title">Депутат Федоров: «США подготовили 80 тысяч ультрапатриотов для «майдана» в России»</h3>
                    </div>
                </a>
                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">5738</span>
                    </span>
                </p>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="https://www.mk.ru/authors/tatyana-antonova/">Татьяна Антонова</a>
                                                    </div>
                    </div>
                                            </article>
        </li>
                            <li class="interesting__item">
            <article class="article-preview ">
                <a class="article-preview__content " href="https://www.mk.ru/politics/2024/02/02/gundarov-raskryl-sut-novoy-strategii-zaluzhnogo-stavka-na-tekhnoterrorizm.html?from=article_mstpp">
                    <div class="article-preview__story-title-group">
                        <picture class="article-preview__image article-preview__image_in-story">
                            <img class="article-preview__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/02/02/12/articles/detailPicture/24/75/8f/7d/98793269b3c496b2d254167741fd5dad.jpg" alt="«Надо успеть подготовиться и сорвать эти планы, что обойдется меньшими потерями»

">
                        </picture>
                        <h3 class="article-preview__title">Гундаров раскрыл суть новой «стратегии Залужного»: ставка на технотерроризм</h3>
                    </div>
                </a>
                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">6685</span>
                    </span>
                </p>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="https://www.mk.ru/authors/sergeyvalchenko/">Сергей Вальченко</a>
                                                    </div>
                    </div>
                                            </article>
        </li>
                            <li class="interesting__item">
            <article class="article-preview article-preview_interesting_last">
                <a class="article-preview__content article-preview__content_last-interesting" href="https://www.mk.ru/social/2024/02/02/ubrali-ne-tolko-lolitu-i-kirkorova-izvestnyy-pevec-obyasnil-vnezapnoe-ischeznovenie-s-ekranov-tv.html?from=article_mstpp">
                    <div class="article-preview__story-title-group">
                        <picture class="article-preview__image article-preview__image_in-story">
                            <img class="article-preview__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/02/02/12/articles/detailPicture/b2/1e/ec/e2/59d8ea207359c31a6568b0e97c0804c2.jpg" alt="Сергей Беликов: «Я стал чужим»

">
                        </picture>
                        <h3 class="article-preview__title">«Убрали не только Лолиту и Киркорова»: известный певец объяснил внезапное исчезновение с экранов ТВ</h3>
                    </div>
                </a>
                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">6804</span>
                    </span>
                </p>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="https://www.mk.ru/authors/dmitriy-ilinskiy/">Дмитрий Ильинский</a>
                                                    </div>
                    </div>
                                            </article>
        </li>
                            <li class="interesting__item">
            <article class="article-preview article-preview_interesting_last">
                <a class="article-preview__content article-preview__content_last-interesting" href="https://www.mk.ru/incident/2024/02/02/eksglava-gruppy-summa-magomedov-zhaluetsya-na-kirovskoe-sizo-temnota-psikhopaty.html?from=article_mstpp">
                    <div class="article-preview__story-title-group">
                        <picture class="article-preview__image article-preview__image_in-story">
                            <img class="article-preview__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/02/02/12/articles/detailPicture/35/7b/c8/ec/21e80f6cffc8de0dc739dd74e0404eb9.jpg" alt="О суровых условиях содержания заключенных правозащитникам поведала сестра осужденного миллионера

">
                        </picture>
                        <h3 class="article-preview__title">Экс-глава группы «Сумма» Магомедов в кировском СИЗО: темнота, психопаты</h3>
                    </div>
                </a>
                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">4815</span>
                    </span>
                </p>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="https://www.mk.ru/authors/eva-merkacheva/">Ева Меркачева</a>
                                                    </div>
                    </div>
                                            </article>
        </li>
                        </ul>
    <div class="aside-show-more">
        <a href="#" class="aside-show-more__button">
            Что почитать:<span class="aside-show-more__button-text">Ещё материалы</span><svg class="aside-show-more__icon-link" width="16" height="16"><use xlink:href="#icon-show-more"></use></svg>
        </a>
    </div>
</section>        
        <section class="article-grid__video-slider media-slider js-media-slider js-not-init" data-url="/video/" data-name="Видео">
    <script type="application/json" class="js-content-data" data-content="video">
        [{"id":32920,"date":"2024-02-01 20:13:05","url":"https:\/\/www.mk.ru\/video\/2024\/02\/01\/putin-spel-gimn-rossii-vmeste-s-detmi-a-kapella-video.html","title":"\u041f\u0443\u0442\u0438\u043d \u0441\u043f\u0435\u043b \u0433\u0438\u043c\u043d \u0420\u043e\u0441\u0441\u0438\u0438 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0434\u0435\u0442\u044c\u043c\u0438 \u0430 \u043a\u0430\u043f\u0435\u043b\u043b\u0430: \u0432\u0438\u0434\u0435\u043e","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/19\/videos\/pictureMedium\/b9\/fe\/04\/7c\/297bae3d04dbdd9f0c109e58d5328927.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/19\/videos\/pictureMedium\/b9\/fe\/04\/7c\/297bae3d04dbdd9f0c109e58d5328927.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/02\/01\/19\/videos\/pictureBig\/bc\/78\/4b\/4d\/34d3ba20e1d3d2da01ded7b8e3f57a6b.jpg","size":550}],"duration":"02:15","isVideoOfTheDay":true,"viewsCount":1850,"region":null},{"id":32905,"date":"2024-01-31 17:29:12","url":"https:\/\/www.mk.ru\/video\/2024\/01\/31\/aktrisa-kotova-posle-razvoda-poyavilas-v-soblaznitelnom-plate-s-otkrytym-dekolte-video.html","title":"\u0410\u043a\u0442\u0440\u0438\u0441\u0430 \u041a\u043e\u0442\u043e\u0432\u0430 \u043f\u043e\u0441\u043b\u0435 \u0440\u0430\u0437\u0432\u043e\u0434\u0430 \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0432 \u0441\u043e\u0431\u043b\u0430\u0437\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u043b\u0430\u0442\u044c\u0435 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0434\u0435\u043a\u043e\u043b\u044c\u0442\u0435: \u0432\u0438\u0434\u0435\u043e","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/17\/videos\/pictureMedium\/fc\/83\/1a\/a2\/0fe38142b985680c38dbb4d8a6c18741.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/17\/videos\/pictureMedium\/fc\/83\/1a\/a2\/0fe38142b985680c38dbb4d8a6c18741.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/17\/videos\/pictureBig\/2d\/e3\/28\/06\/da07d157404aa2eee4d82927ba9f51bd.jpg","size":550}],"duration":"00:25","isVideoOfTheDay":false,"viewsCount":3867,"region":null},{"id":32897,"date":"2024-01-31 10:35:12","url":"https:\/\/www.mk.ru\/video\/2024\/01\/31\/obuvnoy-sklad-vo-vladimirskoy-oblasti-tushili-55-pozharnykh-video-chp.html","title":"\u041e\u0431\u0443\u0432\u043d\u043e\u0439 \u0441\u043a\u043b\u0430\u0434 \u0432\u043e \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0442\u0443\u0448\u0438\u043b\u0438 55 \u043f\u043e\u0436\u0430\u0440\u043d\u044b\u0445: \u0432\u0438\u0434\u0435\u043e \u0427\u041f","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/10\/videos\/pictureMedium\/35\/be\/e4\/7d\/5b52cbd1a1bffeeb6a8e623bec9a8601.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/10\/videos\/pictureMedium\/35\/be\/e4\/7d\/5b52cbd1a1bffeeb6a8e623bec9a8601.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/31\/10\/videos\/pictureBig\/74\/ae\/95\/a8\/872800ab799e5719b03b634919a19174.jpg","size":550}],"duration":"00:33","isVideoOfTheDay":false,"viewsCount":2054,"region":null},{"id":32862,"date":"2024-01-26 15:05:16","url":"https:\/\/www.mk.ru\/video\/2024\/01\/26\/v-podmoskove-nashli-i-peredali-khozyainu-vysazhennogo-iz-elektrichki-toyterera-archi-video.html","title":"\u0412 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435 \u043d\u0430\u0448\u043b\u0438 \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043b\u0438 \u0445\u043e\u0437\u044f\u0438\u043d\u0443 \u0432\u044b\u0441\u0430\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u0437 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u043a\u0438 \u0442\u043e\u0439-\u0442\u0435\u0440\u044c\u0435\u0440\u0430 \u0410\u0440\u0447\u0438: \u0432\u0438\u0434\u0435\u043e","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/26\/15\/videos\/pictureMedium\/4a\/86\/06\/ed\/98dbbbcc9b413e2a2f6dd8c61b2dfca5.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/26\/15\/videos\/pictureMedium\/4a\/86\/06\/ed\/98dbbbcc9b413e2a2f6dd8c61b2dfca5.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/26\/15\/videos\/pictureBig\/15\/aa\/6d\/55\/dec2c02a99d6f20bad7348e4945ec372.jpg","size":550}],"duration":"00:41","isVideoOfTheDay":false,"viewsCount":7361,"region":null},{"id":32880,"date":"2024-01-29 16:45:15","url":"https:\/\/www.mk.ru\/video\/2024\/01\/29\/zhena-ivana-yankovskogo-obnazhila-spinu-na-krasnoy-dorozhke-video.html","title":"\u0416\u0435\u043d\u0430 \u0418\u0432\u0430\u043d\u0430 \u042f\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u043e\u0431\u043d\u0430\u0436\u0438\u043b\u0430 \u0441\u043f\u0438\u043d\u0443 \u043d\u0430 \u043a\u0440\u0430\u0441\u043d\u043e\u0439 \u0434\u043e\u0440\u043e\u0436\u043a\u0435: \u0432\u0438\u0434\u0435\u043e","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/29\/09\/videos\/pictureMedium\/a8\/bf\/e0\/d1\/b92b7f69f4e1ea66f7e4ca6124f05da3.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/29\/09\/videos\/pictureMedium\/a8\/bf\/e0\/d1\/b92b7f69f4e1ea66f7e4ca6124f05da3.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/29\/09\/videos\/pictureBig\/82\/1d\/a5\/08\/be795b248a7a5a2a07b8109f0f3aafcf.jpg","size":550}],"duration":"00:26","isVideoOfTheDay":false,"viewsCount":6194,"region":null},{"id":32889,"date":"2024-01-30 10:23:32","url":"https:\/\/www.mk.ru\/video\/2024\/01\/30\/na-zabaykalskoy-gres-sotni-dzerenov-prorvali-ograzhdenie-udivitelnoe-video.html","title":"\u041d\u0430 \u0437\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u043e\u0439 \u0413\u0420\u042d\u0421 \u0441\u043e\u0442\u043d\u0438 \u0434\u0437\u0435\u0440\u0435\u043d\u043e\u0432 \u043f\u0440\u043e\u0440\u0432\u0430\u043b\u0438 \u043e\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435: \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0432\u0438\u0434\u0435\u043e ","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/10\/videos\/pictureMedium\/37\/ba\/e7\/30\/2ce7d081031d3d351677671460c4a948.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/10\/videos\/pictureMedium\/37\/ba\/e7\/30\/2ce7d081031d3d351677671460c4a948.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/10\/videos\/pictureBig\/03\/86\/8e\/dc\/7a22dc94ecd4ee76948addbb50b828a1.jpg","size":550}],"duration":"01:54","isVideoOfTheDay":false,"viewsCount":6064,"region":null},{"id":32891,"date":"2024-01-30 13:37:25","url":"https:\/\/www.mk.ru\/video\/2024\/01\/30\/moshhnyy-vzryv-na-elektropodstancii-v-shherbinke-popal-na-video.html","title":"\u041c\u043e\u0449\u043d\u044b\u0439 \u0432\u0437\u0440\u044b\u0432 \u043d\u0430 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u0432 \u0429\u0435\u0440\u0431\u0438\u043d\u043a\u0435 \u043f\u043e\u043f\u0430\u043b \u043d\u0430 \u0432\u0438\u0434\u0435\u043e","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/13\/videos\/pictureMedium\/fd\/86\/85\/37\/d6dc205bd296fee666dbad7046097fb6.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/13\/videos\/pictureMedium\/fd\/86\/85\/37\/d6dc205bd296fee666dbad7046097fb6.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/30\/13\/videos\/pictureBig\/72\/f7\/19\/bf\/f5295de2853544e0e5cd4447ad5b931d.jpg","size":550}],"duration":"00:18","isVideoOfTheDay":true,"viewsCount":4428,"region":null},{"id":32876,"date":"2024-01-28 13:40:36","url":"https:\/\/www.mk.ru\/video\/2024\/01\/28\/pozharnye-popytalis-probratsya-v-zdanie-okhvachennogo-ognem-teatra-satiry-video.html","title":"\u041f\u043e\u0436\u0430\u0440\u043d\u044b\u0435 \u043f\u043e\u043f\u044b\u0442\u0430\u043b\u0438\u0441\u044c \u043f\u0440\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0445\u0432\u0430\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u043e\u0433\u043d\u0435\u043c \u0422\u0435\u0430\u0442\u0440\u0430 \u0421\u0430\u0442\u0438\u0440\u044b: \u0432\u0438\u0434\u0435\u043e","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/13\/videos\/pictureMedium\/1d\/33\/8a\/a5\/bb839c06c4b75f1d429b14232bb54d22.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/13\/videos\/pictureMedium\/1d\/33\/8a\/a5\/bb839c06c4b75f1d429b14232bb54d22.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/28\/13\/videos\/pictureBig\/08\/94\/61\/6e\/328e05ad5e1724593dfc725a82625edb.jpg","size":550}],"duration":"00:20","isVideoOfTheDay":true,"viewsCount":3530,"region":null},{"id":32824,"date":"2024-01-24 18:33:45","url":"https:\/\/www.mk.ru\/video\/2024\/01\/24\/v-peterburge-avtobus-vletel-v-tolpu-prokhozhikh-dtp-popalo-na-video.html","title":"\u0412 \u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0435 \u0430\u0432\u0442\u043e\u0431\u0443\u0441 \u0432\u043b\u0435\u0442\u0435\u043b \u0432 \u0442\u043e\u043b\u043f\u0443 \u043f\u0440\u043e\u0445\u043e\u0436\u0438\u0445: \u0414\u0422\u041f \u043f\u043e\u043f\u0430\u043b\u043e \u043d\u0430 \u0432\u0438\u0434\u0435\u043e","coverImage":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/18\/videos\/pictureMedium\/5b\/67\/77\/7d\/d67ab21a350a71100b10c84a0f2f00a2.jpg","coverPicture":[{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/18\/videos\/pictureMedium\/5b\/67\/77\/7d\/d67ab21a350a71100b10c84a0f2f00a2.jpg","size":210},{"src":"https:\/\/static.mk.ru\/upload\/entities\/2024\/01\/24\/18\/videos\/pictureBig\/52\/46\/eb\/25\/20f3630a7c671954082d8e9987a5b7cc.jpg","size":550}],"duration":"00:27","isVideoOfTheDay":false,"viewsCount":3452,"region":null}]    </script>
</section>

        <section class="article-grid__in-region interesting_mob-shown">
    <header class="aside-head">
        <h2 class="aside-head__title">
            <svg class="aside-head__title-icon-section" width="24" height="24"><use xlink:href="#icon-geo-pin"></use></svg>
            В регионах
        </h2>
    </header>
    <ul class="interesting interesting_in-region">
                <li class="interesting__item last-shown-item">
            <article class="article-preview">
                                    <a class="article-preview__content" href="https://crimea.mk.ru/politics/2024/02/01/eksgubernatora-sevastopolya-arestovali-v-londone.html">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title article-preview__title_bold">Экс-губернатора Севастополя арестовали в Лондоне</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/02/01/08/articles/detailPicture/90/3d/9d/03/19b2a8f666f0b452e4306a136c56e347.jpg" alt="В Лондоне за нарушение санкций задержан экс-губернатор Севастополя Дмитрий Овсянников. ">
                            </picture>
                        </div>
                    </a>
                                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">13803</span>
                    </span>
                </p>
                <a href="https://crimea.mk.ru" class="article-preview__regions">Крым</a>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="">фото: МК в Крыму</a>
                                                    </div>
                    </div>
                            </article>
        </li>
                <li class="interesting__item last-shown-item">
            <article class="article-preview">
                                    <a class="article-preview__content" href="https://eburg.mk.ru/social/2024/01/26/zhiteli-oficerskikh-domov-elanskogo-garnizona-ustali-ot-kholoda-v-kvartirakh-izza-problem-na-mestnoy-kotelnoy.html">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title article-preview__title_bold">Жители офицерских домов Еланского гарнизона устали от холода в квартирах из-за проблем на местной котельной</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/01/26/09/articles/detailPicture/76/70/42/f9/6bde83d03ed50eb938f48393a508785f.jpg" alt="Следственный комитет и прокуратура проводят проверки после публикации «МК-Урал»">
                            </picture>
                        </div>
                    </a>
                                <p class="meta">
                                        <span class="meta__item">
                      <svg class="meta__icon" width="16" height="16"><use xlink:href="#icon-photo"></use></svg>
                      <span class="meta__text">Фото</span>
                    </span>
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">10197</span>
                    </span>
                </p>
                <a href="https://eburg.mk.ru" class="article-preview__regions">Екатеринбург</a>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="">Артем Ковальчук, фото МК-Урал.</a>
                                                    </div>
                    </div>
                            </article>
        </li>
                <li class="interesting__item last-shown-item">
            <article class="article-preview">
                                    <a class="article-preview__content" href="https://www.mkchita.ru/politics/2024/01/24/ya-ponimala-kuda-idu-intervyu-s-pervoy-zhenshhinoymerom-chity-innoy-shheglovoy.html">
                        <h3 class="article-preview__title">«Я понимала, куда иду»: интервью с первой женщиной-мэром Читы Инной Щегловой</h3>
                    </a>
                                <p class="meta">
                                        <span class="meta__item">
                      <svg class="meta__icon" width="16" height="16"><use xlink:href="#icon-photo"></use></svg>
                      <span class="meta__text">Фото</span>
                    </span>
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">5959</span>
                    </span>
                </p>
                <a href="https://www.mkchita.ru" class="article-preview__regions">Чита</a>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="https://www.mk.ru/authors/elenakalabukhova/">Елена Калабухова</a>
                                                    </div>
                    </div>
                            </article>
        </li>
                <li class="interesting__item last-shown-item">
            <article class="article-preview">
                                    <a class="article-preview__content" href="https://www.mk-kirov.ru/social/2024/01/19/stali-izvestny-podrobnosti-kto-vyshvyrnul-iz-poezda-na-vokzale-v-kirove.html">
                        <h3 class="article-preview__title">Стали известны подробности, кто вышвырнул кота из поезда на вокзале в Кирове</h3>
                    </a>
                                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">4707</span>
                    </span>
                </p>
                <a href="https://www.mk-kirov.ru" class="article-preview__regions">Киров</a>
                            </article>
        </li>
                <li class="interesting__item last-shown-item">
            <article class="article-preview">
                                    <a class="article-preview__content" href="https://www.mk-yamal.ru/social/2024/02/01/priznalas-v-finansirovanii-vsu-deputat-gosdumy-ot-yanao-poprosil-bastrykina-proverit-rabotu-pisatelnicy-ulickoy.html">
                        <h3 class="article-preview__title">Призналась в финансировании ВСУ: депутат Госдумы от ЯНАО попросил Бастрыкина проверить работу писательницы Улицкой</h3>
                    </a>
                                <p class="meta">
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">3508</span>
                    </span>
                </p>
                <a href="https://www.mk-yamal.ru" class="article-preview__regions">Ямал</a>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="">Екатерина Руденко</a>
                                                    </div>
                    </div>
                            </article>
        </li>
                <li class="interesting__item last-shown-item">
            <article class="article-preview">
                                    <a class="article-preview__content" href="https://karel.mk.ru/social/2024/01/24/sud-finlyandii-postanovil-vernut-rossiyskikh-detey-domoy-chto-poka-nevozmozhno.html">
                        <h3 class="article-preview__title">Суд Финляндии постановил вернуть российских детей домой, что пока невозможно</h3>
                    </a>
                                <p class="meta">
                                        <span class="meta__item">
                      <svg class="meta__icon" width="16" height="16"><use xlink:href="#icon-photo"></use></svg>
                      <span class="meta__text">Фото</span>
                    </span>
                                                            <span class="meta__item meta__item_views">
                      <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                      <span class="meta__text">2900</span>
                    </span>
                </p>
                <a href="https://karel.mk.ru" class="article-preview__regions">Карелия</a>
                                    <div class="article-preview__authors-wrap">
                        <div class="article-preview__authors-list">
                                                            <a class="article-preview__author" href="https://www.mk.ru/authors/maksimbershteyn/">Максим Берштейн</a>
                                                    </div>
                    </div>
                            </article>
        </li>
            </ul>
    <div class="aside-show-more">
        <a href="#" class="aside-show-more__button">
            В регионах:<span class="aside-show-more__button-text">Ещё материалы</span><svg class="aside-show-more__icon-link" width="16" height="16"><use xlink:href="#icon-show-more"></use></svg>
        </a>
    </div>
</section>
    </div>

    <div class="article-grid__right">
        
<section class="article-grid__news js-federal-news-in-region js-mob-shown">
    <header class="aside-head">
        <h2 class="aside-head__title">
            <a href="https://www.mk.ru/news/" class="aside-head__title-link">
                Новости
                <svg class="aside-head__title-icon-link" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
            </a>
        </h2>
        <form class="news-listing__sort js-hidden">
            <label class="news-listing__sort-label">Важные<input type="checkbox" class="news-listing__sort-input visually-hidden"><span class="news-listing__sort-control"></span></label>
        </form>
    </header>
    <ul class="news-listing__day-list">
                <li class="news-listing__item">
            <a href="https://www.mk.ru/politics/2024/02/02/putin-nazval-podderzhku-armii-grazhdanami-osnovoy-uspekha-rossii.html" class="news-listing__item-link">
                <span class="news-listing__item-time">20:57</span>
                <h3 class="news-listing__item-title">Путин назвал поддержку армии гражданами основой успеха России</h3>
            </a>
        </li>
                <li class="news-listing__item">
            <a href="https://www.mk.ru/incident/2024/02/02/stali-izvestny-podrobnosti-napadeniya-na-figurista-dikidzhi-v-metro.html" class="news-listing__item-link">
                <span class="news-listing__item-time">20:50</span>
                <h3 class="news-listing__item-title">Стали известны подробности нападения на фигуриста Дикиджи в метро</h3>
            </a>
        </li>
                <li class="news-listing__item">
            <a href="https://www.mk.ru/incident/2024/02/02/sovrativshuyu-chetveroklassnika-rossiyskuyu-uchitelnicu-otpravili-domoy-k-muzhu.html" class="news-listing__item-link">
                <span class="news-listing__item-time">20:48</span>
                <h3 class="news-listing__item-title">Совратившую четвероклассника российскую учительницу отправили домой к мужу</h3>
            </a>
        </li>
                <li class="news-listing__item">
            <a href="https://www.mk.ru/economics/2024/02/02/putin-razreshil-sdelki-s-akciyami-russnefti.html" class="news-listing__item-link">
                <span class="news-listing__item-time">20:47</span>
                <h3 class="news-listing__item-title">Путин разрешил сделки с акциями "Русснефти"</h3>
            </a>
        </li>
                <li class="news-listing__item">
            <a href="https://www.mk.ru/politics/2024/02/02/professor-mirshaymer-novaya-pomoshh-es-kievu-ne-ostanovit-uspekhi-vs-rf.html" class="news-listing__item-link">
                <span class="news-listing__item-time">20:42</span>
                <h3 class="news-listing__item-title">Профессор Миршаймер: новая помощь ЕС Киеву не остановит успехи ВС РФ</h3>
            </a>
        </li>
                <li class="news-listing__item">
            <a href="https://www.mk.ru/social/2024/02/02/zavod-po-vypusku-zhilykh-moduley-stroyat-po-programme-maip-v-tinao.html" class="news-listing__item-link">
                <span class="news-listing__item-time">15:14</span>
                <h3 class="news-listing__item-title">Завод по выпуску жилых модулей строят по программе МаИП в ТиНАО</h3>
            </a>
        </li>
                <li class="aside-button__in-main-news">
            <a href="https://www.mk.ru/news/" class="aside-button aside-button_top-news">
                Все новости <svg class="aside-button__icon-link" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
            </a>
        </li>
    </ul>
    <div class="aside-show-more aside-show-more_top-news">
        <a href="https://www.mk.ru/news/" class="aside-show-more__button">
            Новости:<span class="aside-show-more__button-text">Ещё материалы</span><svg class="aside-show-more__icon-link" width="16" height="16"><use xlink:href="#icon-show-more"></use></svg>
        </a>
    </div>
</section>
    <div class="good-place__in-article-news-top"><div class="good-place__stiky-content"><!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: 300x600 / 240x400 #1-->
<!--Расположение: <верх страницы>-->
<div id="adfox_159420773958847010" style="min-height: 300px;"></div>
<script>
window.yaContextCb.push(() => {
	Ya.adfoxCode.createAdaptive({
		ownerId: 353925,
		containerId: 'adfox_159420773958847010',
		params: Object.assign({
			pp: 'g',
			ps: 'edud',
			p2: 'gwid',
			pk: decodeURIComponent('%20' + adFoxParams.mksafe),
		}, window.puids || {})
	}, ['desktop'], {
		tabletWidth: 1023,
		phoneWidth: 599,
		isAutoReloads: true
	})
})
</script>
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: 300x600 / 240x400 #1-->
<!--Расположение: <верх страницы>-->
<div id="adfox_159420773958847010"></div>
<script>
window.yaContextCb.push(() => {
	Ya.adfoxCode.createAdaptive({
		ownerId: 353925,
		containerId: 'adfox_159420773958847010',
		params: Object.assign({
			pp: 'g',
			ps: 'edud',
			p2: 'gwid',
			pk: decodeURIComponent('%20' + adFoxParams.mksafe),
		}, window.puids || {}),
		lazyLoad: {
			fetchMargin: 100,
			mobileScaling: 2
		}
	}, ['tablet', 'phone'], {
		tabletWidth: 1023,
		phoneWidth: 599,
		isAutoReloads: true
	})
})
</script></div></div>

<div class="article-grid__right-group article-grid__right-group_with-line">

    <section class="article-grid__most-read">
    <header class="aside-head">
        <h2 class="aside-head__title">
            Самое читаемое
        </h2>
        <form class="most-read__sort js-hidden">
            <div class="most-read__radio-container">
                <label class="most-read__sort-label">
                    <input type="radio" name="most-read" value="week" class="most-read__sort-input visually-hidden" checked=""><span class="most-read__sort-control"></span>
                    За неделю
                </label>
                <label class="most-read__sort-label">
                    <input type="radio" name="most-read" value="month" class="most-read__sort-input visually-hidden"><span class="most-read__sort-control"></span>
                    За месяц
                </label>
            </div>
        </form>
    </header>
    <ol class="most-read">
                <li class="most-read__item">
            <article class="most-read__content">
                <a class="most-read__link" href="https://www.sportmk.ru/sports/2023/09/18/kardiolog-rasskazal-kakaya-fizicheskaya-aktivnost-polezna-dlya-serdca.html">
                    <span class="most-read__counter"></span>
                    <h3 class="most-read__title">Кардиолог рассказал, какая физическая активность полезна для сердца</h3>
                    <div class="most-read__image-wraper">
                        <picture class="most-read__image">
                            <img class="most-read__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2023/09/18/16/articles/detailPicture/da/14/ee/58/add726e77a664a37b406e46055d34c04.jpg" alt="Врач-кардиолог Асият Хачирова сообщила, что йога и плавание оказывают кардиоваскулярный эффект ">
                        </picture>
                    </div>
                </a>

                <div class="most-read__meta">
                    <p class="meta">
                        
                        
                        
                        
                        <span class="meta__item meta__item_views">
                            <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                            <span class="meta__text">347827</span>
                        </span>
                    </p>
                </div>
            </article>
        </li>
                <li class="most-read__item">
            <article class="most-read__content">
                <a class="most-read__link" href="https://www.sportmk.ru/sports/2023/08/09/chto-za-krivlyaniya-37letnyaya-karpovich-razdelas-do-belya-i-narvalas-na-kheyt.html">
                    <span class="most-read__counter"></span>
                    <h3 class="most-read__title">«Что за кривляния»: 37-летняя Карпович разделась до белья и нарвалась на хейт</h3>
                    <div class="most-read__image-wraper">
                        <picture class="most-read__image">
                            <img class="most-read__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2023/08/09/17/articles/detailPicture/21/d0/06/36/128ee1fdcb472d9c6b6aacabb21d8f11.jpg" alt="Актриса и модель Мирослава Карпович опубликовала в соцсетях бэкстейдж откровенной фотосессии. Звезда «Папиных дочек» позировала в нижнем белье.">
                        </picture>
                    </div>
                </a>

                <div class="most-read__meta">
                    <p class="meta">
                        
                        
                        
                        
                        <span class="meta__item meta__item_views">
                            <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                            <span class="meta__text">208713</span>
                        </span>
                    </p>
                </div>
            </article>
        </li>
                <li class="most-read__item">
            <article class="most-read__content">
                <a class="most-read__link" href="https://www.mk.ru/politics/2024/01/28/v-kremenchug-priletela-otvetka-za-ustlugu-i-tuapse.html">
                    <span class="most-read__counter"></span>
                    <h3 class="most-read__title">В Кременчуг прилетела «ответка» за Усть-Лугу и Туапсе</h3>
                    <div class="most-read__image-wraper">
                        <picture class="most-read__image">
                            <img class="most-read__image-content" width="240" height="135" loading="lazy" src="https://static.mk.ru/upload/entities/2024/01/28/11/articles/detailPicture/90/5c/17/c4/d8803f22b1f585a9d23d715bf1f251dd.jpg" alt="Пожар на НПЗ тушили всю ночь

">
                        </picture>
                    </div>
                </a>

                <div class="most-read__meta">
                    <p class="meta">
                        
                                                    <span class="meta__item">
                                <svg class="meta__icon" width="16" height="16"><use xlink:href="#icon-stories"></use></svg>
                                <span class="meta__text">Сюжет</span>
                            </span>
                        
                        
                        
                        <span class="meta__item meta__item_views">
                            <svg class="meta__icon" width="18" height="16"><use xlink:href="#icon-views"></use></svg>
                            <span class="meta__text">163725</span>
                        </span>
                    </p>
                </div>
            </article>
        </li>
            </ol>
</section>

    <div class="good-place__inner-under-most-read"><div class="article-preview"><p class="meta"><span class="meta__item meta__item_views"><span class="meta__item meta__item_adv"><span class="meta__text">Реклама</span></span></span></p><div class="js-relap-anchor" data-relap-id="sPPz-DDxQrlDuLi4" style="width: 100%; display: flex;"></div></div></div>
    <div class="good-place__stiky-content" style="top:0">
        <section class="article-grid__partners"><style>
  .ad-teaser {
    margin: 0 auto 15px;
    text-align: center;
  }
</style>
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: Тизер №1-->
<!--Расположение: <верх страницы>-->
<div class="ad-teaser">
  <div id="adfox_159412016759937213"></div>
</div>
<script>
  window.yaContextCb.push(() => {
    Ya.adfoxCode.createAdaptive(
      {
        ownerId: 353925,
        containerId: "adfox_159412016759937213",
        params: Object.assign(
          {
            pp: "g",
            ps: "edud",
            p2: "gwkf",
            pk: decodeURIComponent("%20" + adFoxParams.mksafe),
          },
          window.puids || {}
        ),
        lazyLoad: {
          fetchMargin: 100,
          mobileScaling: 2,
        },
      },
      ["desktop"],
      {
        tabletWidth: 1023,
        phoneWidth: 599,
        isAutoReloads: true,
      }
    );
  });
</script>
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: Тизер №2-->
<!--Расположение: <верх страницы>-->
<div class="ad-teaser">
  <div id="adfox_159412023464448459"></div>
</div>
<script>
  window.yaContextCb.push(() => {
    Ya.adfoxCode.createAdaptive(
      {
        ownerId: 353925,
        containerId: "adfox_159412023464448459",
        params: Object.assign(
          {
            pp: "g",
            ps: "edud",
            p2: "gwkg",
            pk: decodeURIComponent("%20" + adFoxParams.mksafe),
          },
          window.puids || {}
        ),
      },
      ["desktop"],
      {
        tabletWidth: 1023,
        phoneWidth: 599,
        isAutoReloads: true,
      }
    );
  });
</script>
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: Тизер №2-->
<!--Расположение: <верх страницы>-->
<div class="ad-teaser">
  <div id="adfox_15941202346444845922"></div>
</div>
<script>
  window.yaContextCb.push(() => {
    Ya.adfoxCode.createAdaptive(
      {
        ownerId: 353925,
        containerId: "adfox_15941202346444845922",
        params: Object.assign(
          {
            pp: "g",
            ps: "edud",
            p2: "gwkg",
            pk: decodeURIComponent("%20" + adFoxParams.mksafe),
          },
          window.puids || {}
        ),
        lazyLoad: {
          fetchMargin: 100,
          mobileScaling: 2,
        },
      },
      ["tablet", "phone"],
      {
        tabletWidth: 1023,
        phoneWidth: 599,
        isAutoReloads: true,
      }
    );
  });
</script>
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: Тизер №3-->
<!--Расположение: <верх страницы>-->
<div class="ad-teaser mk-teaser-block__desktop_3">
  <div id="adfox_159857045582424850"></div>
</div>
<script>
  window.yaContextCb.push(() => {
    Ya.adfoxCode.createAdaptive(
      {
        ownerId: 353925,
        containerId: "adfox_159857045582424850",
        params: Object.assign(
          {
            pp: "g",
            ps: "edud",
            p2: "gxuo",
            pk: decodeURIComponent("%20" + adFoxParams.mksafe),
          },
          window.puids || {}
        ),
      },
      ["desktop"],
      {
        tabletWidth: 1023,
        phoneWidth: 599,
        isAutoReloads: true,
      }
    );
  });
</script>
<!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: Тизер №3-->
<!--Расположение: <верх страницы>-->
<div class="ad-teaser mk-teaser-block__desktop_3">
  <div id="adfox_1598570455824248502"></div>
</div>
<script>
  window.yaContextCb.push(() => {
    Ya.adfoxCode.createAdaptive(
      {
        ownerId: 353925,
        containerId: "adfox_1598570455824248502",
        params: Object.assign(
          {
            pp: "g",
            ps: "edud",
            p2: "gxuo",
            pk: decodeURIComponent("%20" + adFoxParams.mksafe),
          },
          window.puids || {}
        ),
        lazyLoad: {
          fetchMargin: 100,
          mobileScaling: 2,
        },
      },
      ["tablet", "phone"],
      {
        tabletWidth: 1023,
        phoneWidth: 599,
        isAutoReloads: true,
      }
    );
  });
</script></section>
        <div class="good-place__inner-under-partner-news"><script async data-lazy="https://jsn.24smi.net/smi.js"></script>
<div class="smi24__informer smi24__auto" data-smi-blockid="14305"></div></div>
    </div>
</div>
<div class="article-grid__right-group article-grid__right-group_bottom">

    <section class="article-grid__avto js-slider-with-counter">
    <header class="aside-head aside-head_slider-with-counter">
        <h2 class="aside-head__title">
            <a href="https://www.avtovzglyad.ru" target="_blank" class="aside-head__title-link">
                <svg class="aside-head__title-icon-section" width="24" height="24"><use xlink:href="#icon-av"></use></svg>
                Автовзгляд                <svg class="aside-head__title-icon-link" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
            </a>
        </h2>
        <span class="aside-head__counter"></span>
        <span class="aside-head__slider">
                  <button class="aside-head__slider-button aside-head__slider-button_back" aria-label="Листать в начало">
                    <svg class="aside-head__slider-button-icon" width="31" height="31" style="transform: scale(-1, 1)"><use xlink:href="#icon-arrow"></use></svg>
                  </button>
                  <button class="aside-head__slider-button aside-head__slider-button_forward" aria-label="Листать в конец">
                    <svg class="aside-head__slider-button-icon" width="31" height="31"><use xlink:href="#icon-arrow"></use></svg>
                  </button>
                </span>
    </header>
    <div class="side-project__wraper">
        <ul class="side-project side-project_article">
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple article-preview_simple-accent">
                    <a class="article-preview__content" target="_blank" href="https://www.avtovzglyad.ru/sovety/ekspluataciya/60654-2024-02-02-tri-problemyi-kitayskih-avto-reshenie-kotoryih-razorit-ih-vladeltsev-uzhe-zavtra/?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Три проблемы китайских авто, решение которых разорит их владельцев уже завтра</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.avtovzglyad.ru/2024/02/02/bed7c834ed0d7a14a9ae25938441c07c.jpg" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple ">
                    <a class="article-preview__content" target="_blank" href="https://www.avtovzglyad.ru/avto/avtoprom/60655-2024-02-02-obem-proizvodstva-avtomobiley-v-rossii-vyiros-na-19/?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Объем производства автомобилей в России вырос на 19%</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.avtovzglyad.ru/2024/02/02/6c9d3a2425d1d9049d0d3968e0762d17.jpg" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple ">
                    <a class="article-preview__content" target="_blank" href="https://www.avtovzglyad.ru/sovety/ekspluataciya/60651-2024-02-02-pochemu-dvorniki-kitayskih-mashin-razmazyivayut-gryaz-i-kak-s-etim-borotsya/?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Почему «дворники» китайских машин размазывают грязь и как с этим бороться</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.avtovzglyad.ru/2024/02/02/ba2ca5acafc34f09cfc1791bd403ddf7.jpg" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                    </ul>
    </div>
</section>
    <div class="good-place__inner-under-avto"><script type="text/javascript" data-lazy="https://code.giraff.io/data/widget-v2_mkru.js" async></script>
<div id="grf_v2_mkru"></div></div>

    <section class="article-grid__avto js-slider-with-counter">
    <header class="aside-head aside-head_slider-with-counter">
        <h2 class="aside-head__title">
            <a href="https://www.womanhit.ru" target="_blank" class="aside-head__title-link">
                <svg class="aside-head__title-icon-section" width="24" height="24"><use xlink:href="#icon-av"></use></svg>
                Womanhit                <svg class="aside-head__title-icon-link" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
            </a>
        </h2>
        <span class="aside-head__counter"></span>
        <span class="aside-head__slider">
                  <button class="aside-head__slider-button aside-head__slider-button_back" aria-label="Листать в начало">
                    <svg class="aside-head__slider-button-icon" width="31" height="31" style="transform: scale(-1, 1)"><use xlink:href="#icon-arrow"></use></svg>
                  </button>
                  <button class="aside-head__slider-button aside-head__slider-button_forward" aria-label="Листать в конец">
                    <svg class="aside-head__slider-button-icon" width="31" height="31"><use xlink:href="#icon-arrow"></use></svg>
                  </button>
                </span>
    </header>
    <div class="side-project__wraper">
        <ul class="side-project side-project_article">
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple article-preview_simple-accent">
                    <a class="article-preview__content" target="_blank" href="https://www.womanhit.ru/stars/news/2024-02-01-kadry-nedeli-solisty-bi2-pokazali-itogi-deportatsii-vizrail-peresild-poznakomila-bojfrenda-sdocherju/?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Кадры недели: солисты «Би−2» вернулись в Израиль после депортации, Пересильд познакомила бойфренда с дочерью</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.womanhit.ru/2024/02/02/b2fc7a6eebcc9895caeba153223fd1f9.jpg" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple ">
                    <a class="article-preview__content" target="_blank" href="https://www.womanhit.ru/stars/news/2024-02-02-nidnja-drug-bez-druga-dua-lipu-snjali-posle-uzhina-snovym-vozljublennym/?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Дуа Липу сняли после ужина с новым возлюбленным</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.womanhit.ru/2024/02/02/61c449f6b12681a58e5136c0278c1e96.png" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple ">
                    <a class="article-preview__content" target="_blank" href="https://www.womanhit.ru/stars/news/2024-02-02-bredli-kuper-idzhidzhi-hadid-sijajut-otschastja-vovremja-progulki-ponju-jorku/?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Брэдли Купер и Джиджи Хадид сияют от счастья во время прогулки по Нью-Йорку</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.womanhit.ru/2024/02/02/d4f5e4e97a6a84c46e3f945bc99ed253.png" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                    </ul>
    </div>
</section>
    

    <section class="article-grid__avto js-slider-with-counter">
    <header class="aside-head aside-head_slider-with-counter">
        <h2 class="aside-head__title">
            <a href="https://www.ohotniki.ru" target="_blank" class="aside-head__title-link">
                <svg class="aside-head__title-icon-section" width="24" height="24"><use xlink:href="#icon-av"></use></svg>
                Охотники.ру                <svg class="aside-head__title-icon-link" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
            </a>
        </h2>
        <span class="aside-head__counter"></span>
        <span class="aside-head__slider">
                  <button class="aside-head__slider-button aside-head__slider-button_back" aria-label="Листать в начало">
                    <svg class="aside-head__slider-button-icon" width="31" height="31" style="transform: scale(-1, 1)"><use xlink:href="#icon-arrow"></use></svg>
                  </button>
                  <button class="aside-head__slider-button aside-head__slider-button_forward" aria-label="Листать в конец">
                    <svg class="aside-head__slider-button-icon" width="31" height="31"><use xlink:href="#icon-arrow"></use></svg>
                  </button>
                </span>
    </header>
    <div class="side-project__wraper">
        <ul class="side-project side-project_article">
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple article-preview_simple-accent">
                    <a class="article-preview__content" target="_blank" href="https://www.ohotniki.ru/fishing/news/2024/02/02/668323-ryibodobyitchik-za-vzyatku-pyitalsya-legalizovat-24-tonnyi-trepanga.html?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Рыбодобытчик за взятку пытался легализовать 2,4 тонны трепанга</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.ohotniki.ru/2024/02/02/ef3b36656e4de665cabf947e1b3ccf2b.jpg" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple ">
                    <a class="article-preview__content" target="_blank" href="https://www.ohotniki.ru/hunting/news/2024/02/02/668322-v-magadanskoy-oblasti-vosstanavlivayut-populyatsiyu-ovtsebyikov.html?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">В Магаданской области восстанавливают популяцию овцебыков</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.ohotniki.ru/2024/02/02/921e7c9b739494fccf0c7c99363bd2ba.jpg" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                        <li class="side-project__item">
                <article class="article-preview article-preview_simple ">
                    <a class="article-preview__content" target="_blank" href="https://www.ohotniki.ru/hunting/news/2024/02/02/668318-vitaminizirovalas-losiha-obela-kustyi-smorodinyi-na-kamchatke-.html?utm_referrer=mk.ru">
                        <div class="article-preview__title-photo-group">
                            <h3 class="article-preview__title">Объела все кордоны: лосиха витаминизировалась кустами смородины</h3>
                            <picture class="article-preview__image">
                                <img class="article-preview__image-content" width="90" height="51" loading="lazy" src="https://static.mk.ru/upload/satellite/www.ohotniki.ru/2024/02/02/2593025aa1fddb7a257a14d4ca70969e.jpg" alt="">
                            </picture>
                        </div>
                    </a>
                </article>
            </li>
                    </ul>
    </div>
</section>
    <div class="good-place_inner-right-bottom"><!--AdFox START-->
<!--yandex_mkruok-->
<!--Площадка: MK.ru / * / *-->
<!--Тип баннера: 300x600 / 240x400 #3-->
<!--Расположение: верх страницы-->
<div id="adfox_159404209140032749"></div>
<script>
  window.yaContextCb.push(() => {
    Ya.adfoxCode.createAdaptive(
      {
        ownerId: 353925,
        containerId: "adfox_159404209140032749",
        params: {
          pp: "g",
          ps: "edud",
          p2: "gwjp",
          pk: decodeURIComponent("%20" + adFoxParams.mksafe),
        },
        lazyLoad: {
          fetchMargin: 100,
          mobileScaling: 2,
        },
      },
      ["desktop", "tablet"],
      {
        tabletWidth: 830,
        phoneWidth: 480,
        isAutoReloads: false,
      }
    );
  });
</script></div>
</div>    </div>
</div>    </div>

    <div class="wraper__footer">
        <footer class="footer">

    <div class="footer__navigation nav_main">
    <ul class="nav__list">
                            <li class="nav__item "><a href="https://www.mk.ru/news/" class="nav__link">Новости</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/editorial/exclusive/?from=topmenu" class="nav__link">Эксклюзивы</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/politics/" class="nav__link">Политика</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/economics/" class="nav__link">Экономика</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/incident/" class="nav__link">Происшествия</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/sport/" class="nav__link">спорт</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/social/" class="nav__link">Общество</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/science/" class="nav__link">Наука</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/culture/" class="nav__link">Культура</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/auto/" class="nav__link">Авто</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/moscow/" class="nav__link">Москва</a></li>
                                    <li class="nav__item "><a href="https://www.mk-mosobl.ru/" class="nav__link">Подмосковье</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/video/" class="nav__link">Видео</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/photo/" class="nav__link">Фото</a></li>
                                    <li class="nav__item "><a href="/stories/daty/" class="nav__link">Дни рождения</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/nationalprojects/" class="nav__link">Национальные проекты России</a></li>
                                    <li class="nav__item "><a href="https://www.mk.ru/press-center/" class="nav__link">Прямые эфиры МК</a></li>
                    </ul>
</div>
    <div class="footer__mk nav_mk">
        <h2 class="nav__title">Московский Комсомолец</h2>
        <ul class="nav__list">
                        <li class="nav__item"><a href="https://www.mk.ru/authors/" class="nav__link">Авторы</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/editions/" class="nav__link">Издания</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/press-center/" class="nav__link">Пресс-центр</a></li>
                                <li class="nav__item"><a href="/photo/" class="nav__link">Фоторепортажи</a></li>
                                <li class="nav__item"><a href="/polls/" class="nav__link">Опросы</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/blogs/" class="nav__link">Блоги</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/merinov/" class="nav__link">Галерея Алексея Меринова</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/pro/" class="nav__link">Про товары и услуги</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/medical/" class="nav__link">Медицина</a></li>
                                            <li class="nav__item"><a href="https://www.mk.ru/regions/about/" class="nav__link">МК. Российский региональный еженедельник</a></li>
                                <li class="nav__item"><a href="http://www.mkgazeta.ru/" class="nav__link">История газеты</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/vacancy/" class="nav__link">Вакансии</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/contacts/" class="nav__link">Контакты</a></li>
            </ul>    </div>
    <div class="footer__for-readers nav_for-readers">
        <h2 class="nav__title">Читателям</h2>
        <ul class="nav__list">
                        <li class="nav__item"><a href="https://www.mk.ru/subscription/" class="nav__link">Подписка</a></li>
                                <li class="nav__item"><a href="https://push.mk.ru/" class="nav__link">Подписаться на срочные новости</a></li>
                                            <li class="nav__item"><a href="https://www.mk.ru/promokodi/" class="nav__link">Промокоды</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/privacy/" class="nav__link">Политика конфиденциальности</a></li>
            </ul>    </div>
    <div class="footer__for-advertisers nav_for-advertisers">
        <h2 class="nav__title">Рекламодателям</h2>
        <ul class="nav__list">
                        <li class="nav__item"><a href="https://www.mk.ru/ad/" class="nav__link">Реклама</a></li>
                                <li class="nav__item"><a href="http://ok.mk.ru/" class="nav__link">РИА "O'Кей"</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/agentstvo_mk/" class="nav__link">Агентство МК</a></li>
                                <li class="nav__item"><a href="http://mediaservice.mk.ru/" class="nav__link">МК.Медиа-Сервис</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/mk-service/" class="nav__link">МК-Сервис</a></li>
                                <li class="nav__item"><a href="https://www.mk.ru/app/" class="nav__link">МК-Агентство Продвижения Прессы</a></li>
            </ul>    </div>
    <div class="footer__regions js-regions-trigger">
    <noscript class="js-regions-markup nav_regions">
        <h2 class="nav__title">МК Регионы</h2>
        <button type="button" class="footer__show-regions-button footer__show-regions-button_hidden" aria-hidden="true">
            Раскрыть весь список
            <svg class="footer__show-regions-button-icon" width="16" height="16"><use xlink:href="#icon-link"></use></svg>
        </button>
        <div class="nav__list-wraper nav__list-wraper_regions">
            <ul class="nav__list">
                                    <li class="nav__item"><a href="https://www.mk.ru" class="nav__link">Москва</a></li>
                                    <li class="nav__item"><a href="https://spb.mk.ru" class="nav__link">Санкт-Петербург</a></li>
                
                                    <li class="nav__item"><a href="https://www.mk-hakasia.ru/" class="nav__link">Абакан</a></li>
                                    <li class="nav__item"><a href="https://www.mk-chukotka.ru/" class="nav__link">Анадырь</a></li>
                                    <li class="nav__item"><a href="https://arh.mk.ru/" class="nav__link">Архангельск</a></li>
                                    <li class="nav__item"><a href="https://ast.mk.ru" class="nav__link">Астрахань</a></li>
                                    <li class="nav__item"><a href="https://brl.mk.ru/" class="nav__link">Барнаул</a></li>
                                    <li class="nav__item"><a href="https://www.mk-belgorod.ru/" class="nav__link">Белгород</a></li>
                                    <li class="nav__item"><a href="https://www.mkbryansk.ru/" class="nav__link">Брянск</a></li>
                                    <li class="nav__item"><a href="https://www.mk-novgorod.ru/" class="nav__link">Великий Новгород</a></li>
                                    <li class="nav__item"><a href="https://vlad.mk.ru/" class="nav__link">Владивосток</a></li>
                                    <li class="nav__item"><a href="https://kavkaz.mk.ru/" class="nav__link">Владикавказ</a></li>
                                    <li class="nav__item"><a href="https://vladimir.mk.ru/" class="nav__link">Владимир</a></li>
                                    <li class="nav__item"><a href="https://volg.mk.ru/" class="nav__link">Волгоград</a></li>
                                    <li class="nav__item"><a href="https://vologda.mk.ru/" class="nav__link">Вологда</a></li>
                                    <li class="nav__item"><a href="https://vrn.mk.ru/" class="nav__link">Воронеж</a></li>
                                    <li class="nav__item"><a href="https://brl.mk.ru/" class="nav__link">Горно-Алтайск</a></li>
                                    <li class="nav__item"><a href="https://kavkaz.mk.ru/" class="nav__link">Грозный</a></li>
                                    <li class="nav__item"><a href="https://www.mk-donbass.ru/" class="nav__link">Донецк</a></li>
                                    <li class="nav__item"><a href="https://eburg.mk.ru/" class="nav__link">Екатеринбург</a></li>
                                    <li class="nav__item"><a href="https://www.mk-zap.ru/" class="nav__link">Запорожье </a></li>
                                    <li class="nav__item"><a href="https://www.mkivanovo.ru/" class="nav__link">Иваново</a></li>
                                    <li class="nav__item"><a href="https://izhevsk.mk.ru/" class="nav__link">Ижевск</a></li>
                                    <li class="nav__item"><a href="https://baikal.mk.ru/" class="nav__link">Иркутск</a></li>
                                    <li class="nav__item"><a href="https://kazan.mk.ru" class="nav__link">Казань</a></li>
                                    <li class="nav__item"><a href="https://www.mk-kaliningrad.ru/" class="nav__link">Калининград</a></li>
                                    <li class="nav__item"><a href="https://www.mkkaluga.ru/" class="nav__link">Калуга</a></li>
                                    <li class="nav__item"><a href="https://www.mk-kuzbass.ru/" class="nav__link">Кемерово</a></li>
                                    <li class="nav__item"><a href="https://www.mk-kirov.ru" class="nav__link">Киров</a></li>
                                    <li class="nav__item"><a href="https://kostroma.mk.ru/" class="nav__link">Кострома</a></li>
                                    <li class="nav__item"><a href="https://kuban.mk.ru/" class="nav__link">Краснодар</a></li>
                                    <li class="nav__item"><a href="https://kras.mk.ru/" class="nav__link">Красноярск</a></li>
                                    <li class="nav__item"><a href="https://eburg.mk.ru/" class="nav__link">Курган</a></li>
                                    <li class="nav__item"><a href="https://chr.mk.ru/" class="nav__link">Курск</a></li>
                                    <li class="nav__item"><a href="https://www.mk-tuva.ru/" class="nav__link">Кызыл</a></li>
                                    <li class="nav__item"><a href="https://www.mk-lenobl.ru/" class="nav__link">Ленинградская область</a></li>
                                    <li class="nav__item"><a href="https://www.mk-lipetsk.ru/" class="nav__link">Липецк</a></li>
                                    <li class="nav__item"><a href="https://www.mk-donbass.ru/" class="nav__link">Луганск</a></li>
                                    <li class="nav__item"><a href="https://kavkaz.mk.ru/" class="nav__link">Магас</a></li>
                                    <li class="nav__item"><a href="https://www.mk-mari.ru/" class="nav__link">Марий Эл</a></li>
                                    <li class="nav__item"><a href="https://mkala.mk.ru" class="nav__link">Махачкала</a></li>
                                    <li class="nav__item"><a href="https://www.mk-mosobl.ru/" class="nav__link">Московская область</a></li>
                                    <li class="nav__item"><a href="https://murmansk.mk.ru" class="nav__link">Мурманск</a></li>
                                    <li class="nav__item"><a href="https://kavkaz.mk.ru/" class="nav__link">Нальчик</a></li>
                                    <li class="nav__item"><a href="https://www.mk-nao.ru/" class="nav__link">Нарьян-Мар</a></li>
                                    <li class="nav__item"><a href="https://nn.mk.ru/" class="nav__link">Нижний Новгород</a></li>
                                    <li class="nav__item"><a href="https://novos.mk.ru/" class="nav__link">Новосибирск</a></li>
                                    <li class="nav__item"><a href="https://omsk.mk.ru" class="nav__link">Омск</a></li>
                                    <li class="nav__item"><a href="https://oren.mk.ru/" class="nav__link">Оренбург</a></li>
                                    <li class="nav__item"><a href="https://www.mk-orel.ru/" class="nav__link">Орел</a></li>
                                    <li class="nav__item"><a href="https://www.mkpenza.ru/" class="nav__link">Пенза</a></li>
                                    <li class="nav__item"><a href="https://perm.mk.ru/" class="nav__link">Пермь</a></li>
                                    <li class="nav__item"><a href="https://karel.mk.ru/" class="nav__link">Петрозаводск</a></li>
                                    <li class="nav__item"><a href="https://www.mk-kamchatka.ru/" class="nav__link">Петропавловск-Камчатский</a></li>
                                    <li class="nav__item"><a href="https://www.mk-pskov.ru/" class="nav__link">Псков</a></li>
                                    <li class="nav__item"><a href="https://rostov.mk.ru/" class="nav__link">Ростов-на-Дону</a></li>
                                    <li class="nav__item"><a href="https://rzn.mk.ru/" class="nav__link">Рязань</a></li>
                                    <li class="nav__item"><a href="https://www.mk-yamal.ru/" class="nav__link">Салехард</a></li>
                                    <li class="nav__item"><a href="https://saratov.mk.ru/" class="nav__link">Саратов</a></li>
                                    <li class="nav__item"><a href="https://crimea.mk.ru/" class="nav__link">Севастополь</a></li>
                                    <li class="nav__item"><a href="https://serp.mk.ru/" class="nav__link">Серпухов</a></li>
                                    <li class="nav__item"><a href="https://crimea.mk.ru" class="nav__link">Симферополь</a></li>
                                    <li class="nav__item"><a href="https://www.mk-smolensk.ru/" class="nav__link">Смоленск</a></li>
                                    <li class="nav__item"><a href="https://sochi.mk.ru/" class="nav__link">Сочи</a></li>
                                    <li class="nav__item"><a href="https://kavkaz.mk.ru/" class="nav__link">Ставрополь</a></li>
                                    <li class="nav__item"><a href="https://tambov.mk.ru/" class="nav__link">Тамбов</a></li>
                                    <li class="nav__item"><a href="https://tver.mk.ru/" class="nav__link">Тверь</a></li>
                                    <li class="nav__item"><a href="https://tomsk.mk.ru/" class="nav__link">Томск</a></li>
                                    <li class="nav__item"><a href="https://tula.mk.ru/" class="nav__link">Тула</a></li>
                                    <li class="nav__item"><a href="https://tumen.mk.ru/" class="nav__link">Тюмень</a></li>
                                    <li class="nav__item"><a href="https://ulan.mk.ru/" class="nav__link">Улан-Удэ</a></li>
                                    <li class="nav__item"><a href="https://ufa.mk.ru/" class="nav__link">Уфа</a></li>
                                    <li class="nav__item"><a href="https://hab.mk.ru/" class="nav__link">Хабаровск</a></li>
                                    <li class="nav__item"><a href="https://ugra.mk.ru/" class="nav__link">Ханты-Мансийск</a></li>
                                    <li class="nav__item"><a href="https://www.mk-herson.ru/" class="nav__link">Херсонская область </a></li>
                                    <li class="nav__item"><a href="https://cheb.mk.ru/" class="nav__link">Чебоксары</a></li>
                                    <li class="nav__item"><a href="https://chel.mk.ru/" class="nav__link">Челябинск</a></li>
                                    <li class="nav__item"><a href="https://kavkaz.mk.ru/" class="nav__link">Черкесск</a></li>
                                    <li class="nav__item"><a href="https://www.mkchita.ru" class="nav__link">Чита</a></li>
                                    <li class="nav__item"><a href="https://www.mk-kalm.ru" class="nav__link">Элиста</a></li>
                                    <li class="nav__item"><a href="https://www.mk-sakhalin.ru/" class="nav__link">Южно-Сахалинск</a></li>
                                    <li class="nav__item"><a href="https://yakutia.mk.ru/" class="nav__link">Якутск</a></li>
                                    <li class="nav__item"><a href="https://yar.mk.ru/" class="nav__link">Ярославль</a></li>
                            </ul>
        </div>
        <h2 class="visually-hidden">МК Зарубежом</h2>
        <div class="nav__list-wraper nav__list-wraper_abroads">
            <ul class="nav__list">
                                    <li class="nav__item"><a href="https://www.mknews.de/" class="nav__link">Германия</a></li>
                                    <li class="nav__item"><a href="http://mkegypt.net/" class="nav__link">Египет</a></li>
                                    <li class="nav__item"><a href="https://mkisrael.co.il/" class="nav__link">Израиль</a></li>
                                    <li class="nav__item"><a href=" http://rcbcanada.com/broadcasting/nasha-gazeta/" class="nav__link">Канада</a></li>
                                    <li class="nav__item"><a href="https://mk-kz.kz/" class="nav__link">Казахстан</a></li>
                                    <li class="nav__item"><a href="https://www.mk.kg/" class="nav__link">Киргизия</a></li>
                                    <li class="nav__item"><a href="https://mk-turkey.ru" class="nav__link">Турция</a></li>
                            </ul>
        </div>
    </noscript>
</div>    <div class="footer__copyright">
        <p class="footer__text"><strong>Соблюдение авторских прав:</strong>
            Все права на материалы, опубликованные на сайте <a href="https://www.mk.ru">www.mk.ru</a>, принадлежат редакции и охраняются в соответствии с законодательством РФ.
Использование материалов, опубликованных на сайте <a href="https://www.mk.ru">www.mk.ru</a> допускается только с письменного разрешения правообладателя и с обязательной прямой гиперссылкой на страницу, с которой материал заимствован. Гиперссылка должна размещаться непосредственно в тексте, воспроизводящем оригинальный материал <a href="https://www.mk.ru">mk.ru</a>, до или после цитируемого блока.        </p>
    </div>
    <div class="footer__legal-information">
        <p class="footer__text"><strong>Для читателей:</strong>
            
В России признаны экстремистскими и запрещены организации ФБК (Фонд борьбы с коррупцией, признан иноагентом), Штабы Навального, «Национал-большевистская партия», «Свидетели Иеговы», «Армия воли народа», «Русский общенациональный союз», «Движение против нелегальной иммиграции», «Правый сектор», УНА-УНСО, УПА, «Тризуб им. Степана Бандеры», «Мизантропик дивижн», «Меджлис крымскотатарского народа», движение «Артподготовка», движение ЛГБТ, общероссийская политическая партия «Воля», АУЕ, батальоны «Азов» и «Айдар». Признаны террористическими и запрещены: «Движение Талибан», «Имарат Кавказ», «Исламское государство» (ИГ, ИГИЛ), Джебхад-ан-Нусра, «АУМ Синрике», «Братья-мусульмане», «Аль-Каида в странах исламского Магриба», «Сеть», «Колумбайн». В РФ признана нежелательной деятельность «Открытой России», издания «Проект Медиа». СМИ-иноагентами признаны: телеканал «Дождь», «Медуза», «Важные истории», «Голос Америки», радио «Свобода», The Insider, «Медиазона», ОВД-инфо. Иноагентами признаны общество/центр «Мемориал», «Аналитический Центр Юрия Левады», Сахаровский центр. Instagram и Facebook (Metа) запрещены в РФ за экстремизм.
<br><br>
<strong>На информационном ресурсе применяются <a href="https://www.mk.ru/rectech/">рекомендательные технологии</a>.</strong>
                </p>
    </div>
    <div class="footer__about">
        <p><b>© АO "Редакция газеты "Московский Комсомолец" Электронное периодическое издание «MK.ru»</b><br /><br />

Зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор). Регистрационный номер Эл №ФС77-79310 Редакция - АO "Редакция газеты "Московский Комсомолец". Адрес редакции: 125993, г. Москва, ул. 1905 года, д. 7, стр. 1. Телефон: +7(495)609-44-44, +7(495)609-44-33 , e-mail info@mk.ru. Главный редактор и учредитель - П.Н. Гусев. &nbsp; <a href="/reklama-tretih-storon/">Реклама третьих сторон</a></p><br />
            </div>

    			<!--LiveInternet logo--><a href="http://www.liveinternet.ru/click;mk"
target="_blank" rel="nofollow"><img pagespeed_no_defer src="//counter.yadro.ru/logo;mk?17.3"
title="LiveInternet: показано число просмотров за 24 часа, посетителей за 24 часа и за сегодня"
alt="" border="0" width="88" height="31"/></a><!--/LiveInternet-->

<!-- Rating@Mail.ru counter -->
<img src="//top-fwz1.mail.ru/counter?id=391164;js=na" style="border:0;position:absolute;left:-9999px;" alt="" />
<!-- //Rating@Mail.ru counter -->

<!-- Rating@Mail.ru logo -->
<a href="https://top.mail.ru/jump?from=391164" rel="nofollow" target="_blank">
<img src="//top-fwz1.mail.ru/counter?id=391164;t=441;l=1" 
style="border:0; margin-left:-5px;" height="31" width="88" alt="Рейтинг@Mail.ru" /></a>
<!-- //Rating@Mail.ru logo -->

<script>
  // LI.RU
  ('MKCounterCallbacksOnHit' in window) || (window.MKCounterCallbacksOnHit = []);
  window.MKCounterCallbacksOnHit.push(function(){
    new Image().src = "//counter.yadro.ru/hit;"+((location.href.indexOf('.sportmk.ru')!==-1)||(location.href.indexOf('www.mk.ru')!==-1)?"mk":"mk/regions")+"?r"+
    escape(document.referrer)+((typeof(screen)=="undefined")?"":
    ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
    screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
    ";h"+escape(document.title.substring(0,80))+
    ";"+Math.random();
  });
  // Mail
  ('MKCounterCallbacksOnHit' in window) || (window.MKCounterCallbacksOnHit = []);
  window.MKCounterCallbacksOnHit.push(function(){
    new Image().src = '//top-fwz1.mail.ru/counter?id=391164;js=na';
  });
</script>
			<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-59RKCLZ5TQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-59RKCLZ5TQ');
</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-2395626-1', 'auto');
  ga('send', 'pageview');

  // Google
  ('MKCounterCallbacksOnHit' in window) || (window.MKCounterCallbacksOnHit = []);
  window.MKCounterCallbacksOnHit.push(function(){
    if ('ga' in window) {
      ga('set', 'page', document.URL);
      ga('send', 'pageview');
    }
  });
</script>			<script>
    ((counterHostname) => {
        window.MSCounter = {
            counterHostname: counterHostname
        };
        window.mscounterCallbacks = window.mscounterCallbacks || [];
        window.mscounterCallbacks.push(() => {
            msCounterExampleCom = new MSCounter.counter({
                    'account':'mk_ru',
                    'tmsec': 'mk_ru',
                    'autohit' : true
                });
        });
  
        const newScript = document.createElement('script');
        newScript.async = true;
        newScript.src = `${counterHostname}/ncc/counter.js`;
  
        const referenceNode = document.querySelector('script');
        if (referenceNode) {
            referenceNode.parentNode.insertBefore(newScript, referenceNode);
        } else {
            document.firstElementChild.appendChild(newScript);
        }
    })('https://tns-counter.ru/');
</script>			<!--  20 идей -->
<script>
  var oldSrc = 'https://static.mk.ru/upload/entities/2022/04/28/19/stories/backgroundImage/d3/e3/8a/80/082df287822bfa6208aa0bbac3af6432.jpg';
  var secondOldSrc = 'https://static.mk.ru/upload/entities/2022/04/28/10/stories/detailPicture/83/ba/09/3e/2e4751c0582f7a83b2ba27e90cdf98a2.jpg';
  // сюжет
  var previewImg = document.querySelector('.article-grid .main-story__preview img');
  if (previewImg && previewImg.src === secondOldSrc) {
    previewImg.src = 'https://www.mk.ru/upload/spec/20idei_2.png';
    previewImg.style.height = '100%';
    //previewImg.style.display = 'block';
  }
  // главная
  var imgList = document.querySelectorAll('.top-stories img');
  if (imgList.length > 0) {
    imgList.forEach((img) => {
      if (img.src === oldSrc) {
        img.src = 'https://www.mk.ru/upload/spec/20idei_2.png';
      }
    });
  }
</script>			<script async data-lazy="https://cdn.skcrtxr.com/roxot-wrapper/js/roxot-manager.js?pid=81cbd0d7-ad22-4465-bee1-efc2cbf3e548"></script>	
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
	var yaParamsNode = document.querySelector(`.yandex-metrika-article-info`);
	var tempParams = {};
	var yaParams = {};
	if (yaParamsNode && yaParamsNode.textContent) {
		tempParams = JSON.parse(yaParamsNode.textContent);
		if (tempParams['Author']) {
			yaParams = JSON.parse(yaParamsNode.textContent);
		}
	}
	console.log('yaParams', yaParams);

	(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
	(window, document,'script','//mc.yandex.ru/metrika/tag.js', 'ym');

	try {
		ym(1598573, 'init', {params:yaParams, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});
			} catch(e) { }

	('MKCounterCallbacksOnHit' in window) || (window.MKCounterCallbacksOnHit = []);
	window.MKCounterCallbacksOnHit.push(function(){
		('ym' in window) && ym(1598573, 'hit', document.URL);
		});
</script>
<noscript>
	<div>
		<img src="//mc.yandex.ru/watch/1598573?ut=noindex" />
			</div>
</noscript>
<!-- /Yandex.Metrika counter -->
</footer>    </div>
</div>
    <!-- isReachBannerAllowed -->
    <div class="reach-banners"><div id="adfox_159421510021274294"></div><script>window.yaContextCb.push(()=>{Ya.adfoxCode.createAdaptive({ownerId: 353925, containerId: "adfox_159421510021274294", params:{pp: "g", ps: "edud", p2: "gwlw", puid1: "", puid2: ""},}, ["desktop"],{tabletWidth: 1023, phoneWidth: 599, isAutoReloads: true});});</script><div id="adfox_159421517788572753"></div><script>window.yaContextCb.push(()=>{Ya.adfoxCode.createAdaptive({ownerId: 353925, containerId: "adfox_159421517788572753", params:{pp: "g", ps: "edud", p2: "gwlu", puid1: "", puid2: ""},}, ["phone"],{tabletWidth: 1023, phoneWidth: 599, isAutoReloads: true});});</script><style>#ya_feed_cont{z-index: 0; margin-top: 10px; min-height: 300px; overflow: hidden; position: relative;}@media (min-width: 600px){#ya_feed_cont{max-width: 768px;}}@media (min-width: 1024px){#ya_feed_cont{max-width: 1050px;}}@media (min-width: 1690px){#ya_feed_cont{max-width: 1406px;}}</style><script>function getDeviceCode(device){let id=""; if (device==="mobile"){return (id="R-A-592219-66");}else if (device==="desktop"){return (id="R-A-592219-65");}else{return "Invalid device";}}function initFeed(device){const wrapperContentElement=document.querySelector(".wraper__content"); id=getDeviceCode(device); console.log("new_feed"); if (wrapperContentElement){const yaInfDiv=document.createElement("div"); const yaInfCont=document.createElement("div"); yaInfCont.id="ya_feed_cont"; yaInfDiv.id=`yandex_rtb_${id}`; wrapperContentElement.appendChild(yaInfCont); yaInfCont.appendChild(yaInfDiv); window.yarenderFeedCb=window.yarenderFeedCb || []; window.yaContextCb.push(()=>{Ya.Context.AdvManager.render({blockId: id, renderTo: `yandex_rtb_${id}`, type: "feed",});});}}function hideCatfish(){const feed=document.getElementById("yandex_rtb_R-A-592219-66"); const callback=(entries)=>{entries.forEach((entry)=>{if (entry.isIntersecting){Ya.Context.AdvManager.destroy({blockId: "R-A-592219-51"});}});}; const observer=new IntersectionObserver(callback,{threshold: 0}); observer.observe(feed);}function isMobileDevice(){var e=navigator.userAgent, o=/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( e ), t=window.matchMedia("(max-width: 767px)").matches, e="ontouchstart" in window || 0 < navigator.msMaxTouchPoints; return o && (t || e);}function init(){if (isMobileDevice()){initFeed("mobile"); hideCatfish();}else{initFeed("desktop");}}document.addEventListener("DOMContentLoaded", init);</script></div>
<!-- /isReachBannerAllowed -->
<script>
  window.MKPageState = ('MKPageState' in window) ?  window.MKPageState : {};
  window.MKPageState.siteId = 1;
</script>
<script nomodule src="/media/mkru2020/js/polyfills/polyfills.js?v=170"></script>
<script nomodule src="/media/mkru2020/js/bundle.fallback.js?v=170"></script>
<script type="module" src="/media/mkru2020/js/bundle.modern.js?v=170"></script>


</body>
</html>
