import{V as E}from"./VScrollLockedSection_ccf6395f_r24-02-0_b0_t240129-161140.js";import{S as L}from"./SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js";import{aE as x,bo as k,k as V}from"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import{o as P}from"./objectHasKeys_aced35f1_r24-02-0_b0_t240129-161140.js";import{V as B}from"./VCmsMediaSSR_1101c01c_r24-02-0_b0_t240129-161140.js";import{V as M}from"./VLinkWrapper_89f0cc15_r24-02-0_b0_t240129-161140.js";import{_ as C}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import{v as O,L as r,A as t,B as i,I as o,_ as u,D as f,a7 as b,G as p,J as c,X as D,O as h,V as S,W as y,N as v}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import"./eventBus_552c1ba1_r24-02-0_b0_t240129-161140.js";import"./i18n_4b81f106_r24-02-0_b0_t240129-161140.js";import"./typeOf_b861069e_r24-02-0_b0_t240129-161140.js";import"./safariCheck_11313f0b_r24-02-0_b0_t240129-161140.js";import"./LscoLazyLoadDirective_02fa23a1_r24-02-0_b0_t240129-161140.js";import"./VResponsivePicture_fb50e2e9_r24-02-0_b0_t240129-161140.js";import"./imageUtils_fcbf42ca_r24-02-0_b0_t240129-161140.js";import"./vuex.esm-bundler_aa359dca_r24-02-0_b0_t240129-161140.js";import"./cmsContentHelper_f68cc642_r24-02-0_b0_t240129-161140.js";const T="info-panel__main--dark",H={mixins:[P],components:{VCmsMediaSSR:B,VLinkWrapper:M,SvgIcon:L},data:props:{hideImageByDefault:{type:Boolean,default:!1},headline_text:{type:String,default:""},text_color:{type:String,default:"Dark"},expand_cta_copy:{type:String,default:""},information_panel:{type:Object,default:,bg_media:{type:Object,default:()=>({image_desktop_aem:{},image_mobile_aem:{},bg_image_desktop:null,bg_image_mobile:null,image_alt_text:""})},moduleShouldEagerLoad:{type:Boolean,default:!1}},computed:{darkTextgetMainContentClasses(){return{[x.CLOSED]:this.panelIsExpanded,[T]:this.darkText}},getOpenClass(){return this.panelIsExpanded?x.OPEN:""},getHiddenClassgetFillColorgetLightFillColorgetCloseBtnIndexisLevi,methods:{setup(){window.addEventListener("scroll",this.onScroll,{passive:!0}),this.$lastScroll=document.documentElement.scrollTop},onOpenClickonCloseClick(){this.closePanel(),this.$refs.infoPanelCloseCta.blur(),this.$refs.infoPanelMainCta.focus()},onScrollhandleScroll(){const n=document.documentElement.scrollTop-this.$lastScroll;this.$lastScroll=document.documentElement.scrollTop;const a=this.$refs.infoPanelParent.getBoundingClientRect();(n>=0&&a.bottom<window.innerHeight||n<=0&&a.top>window.innerHeight)&&this.closePanel()},openPanel(){this.panelIsExpanded=!0},closePanel,mountedbeforeMountbeforeUnmount,z={class:"info-panel__wrapper"},N={class:"lsco-row lsco-row-xs--middle lsco-row-xs--center lsco-row-md--start lsco-col-md-offset-2"},R={class:"lsco-col-xs-21 lsco-col-md-10 info-panel__main-heading"},j={class:"lsco-row lsco-row-xs--middle lsco-row-xs--center lsco-row-md--start lsco-col-md-offset-2"},A=["aria-controls","aria-expanded"],W={class:"lsco-row lsco-row-xs--center lsco-row-xs--middle"},F=["id","tabindex"],K={class:"lsco-col-xs-17"},q=["tabindex"],X={class:"info-panel__expanded-heading lsco-col-xs-17"},G={class:"info-panel__expanded-content lsco-col-xs-17"},J={key:0,class:"info-panel__expanded-cta -bg-dark cta-align lsco-row-md--center lsco-row"},U={class:"link-text"};function Q(n,a,e,I,w,l){const _=r("VCmsMediaSSR"),d=r("SvgIcon"),g=r("VLinkWrapper");return t(),i("div",null,[o("div",{ref:"infoPanelParent",class:u(["info-panel",l.getOpenClass])},[o("div",{class:u(["info-panel__background",l.getHiddenClass])},[n.objectHasKeys(e.bg_media)?(t(),f(_,b({key:0,class:"info-panel__background--media show-mobile","lazy-offscreen-proximity":50},e.bg_media.image_mobile_aem,{"alt-text":e.bg_media.image_alt_text||e.headline_text,"column-width":25,"disable-fixed-aspect-ratio":!0,"disable-lazy-load":e.moduleShouldEagerLoad}),null,16,["alt-text","disable-lazy-load"])):p("",!0),n.objectHasKeys(e.bg_media)?(t(),f(_,b({key:1,class:"info-panel__background--media hide-mobile","lazy-offscreen-proximity":50},e.bg_media.image_desktop_aem,{"alt-text":e.bg_media.image_alt_text||e.headline_text,"column-width":25,"disable-fixed-aspect-ratio":!0,"disable-lazy-load":e.moduleShouldEagerLoad}),null,16,["alt-text","disable-lazy-load"])):p("",!0)],2),o("div",z,[o("div",{class:u(["info-panel__main",l.getMainContentClasses])},[o("div",N,[o("h3",R,c(e.headline_text),1)]),o("div",j,[o("button",{ref:"infoPanelMainCta",class:"info-panel__main-cta lsco-col-xs-25 lsco-col-md-8","aria-controls":n.uuid,"aria-expanded":n.panelIsExpanded,onClick:a[0]||(a[0]=(...s)=>l.onOpenClick&&l.onOpenClick(...s))},[D(c(e.expand_cta_copy),1),h(d,{name:"plus",title:"Open modal",class:"info-panel__main-cta-svg"})],8,A)])],2),o("div",W,[o("div",{id:n.uuid,class:u(["info-panel__expanded lsco-row lsco-row-xs--center lsco-row-xs--middle",l.getOpenClass]),tabindex:l.getCloseBtnIndex},[o("div",K,[o("button",{ref:"infoPanelCloseCta",class:"info-panel__close-button",tabindex:l.getCloseBtnIndex,onClick:a[1]||(a[1]=},[h(d,{name:"close-zoom",title:"Close modal",class:"info-panel__close-button-svg"})],8,q),o("h4",X,c(`${e.information_panel.info_panel_headline||""}`),1),o("div",G,c(`${e.information_panel.multi_line_textbox||""}`),1),e.information_panel&&e.information_panel.cta_links&&e.information_panel.cta_links.length?(t(),i("div",J,[(t(!0),i(S,null,y(e.information_panel.cta_links,(s,m)=>(t(),i("div",{key:m},[h(g,{"cta-link":s,"link-position":m,class:"info-panel__expanded-cta-link"},{default:v(()=>[o("span",U,c(s.link_text),1),l.isLevi?(t(),f(d,{key:0,name:"link-underline",class:"cta-svg"})):p("",!0)]),_:2},1032,["cta-link","link-position"])]))),128))])):p("",!0)])],10,F)])])],2)])}const Y=C(H,[["render",Q],["__scopeId","data-v-1a9b0b4a"]]);const Z={content_type_uid:"module_scroll_locked_image_v2",inject:["mq"],components:{InfoPanel:Y,VScrollLockedSection:E},props:{scroll_locked_items:{type:Array,default:,moduleShouldEagerLoad:{type:Boolean,default:!1}},computed:{notMobile(){return this.isMounted&&!this.mq.current==="mobile"}}},$={class:"module-scroll-locked-image"};function ee(n,a,e,I,w,l){const _=r("InfoPanel"),d=r("VScrollLockedSection");return t(),i("div",$,[(t(!0),i(S,null,y(e.scroll_locked_items,(g,s,m)=>(t(),f(d,{key:m,"full-bleed":"","unlock-threshold":l.notMobile?1:1.5},{default:v(()=>[h(_,b({"hide-image-by-default":""},g,{"module-should-eager-load":e.moduleShouldEagerLoad&&s===0}),null,16,["module-should-eager-load"])]),_:2},1032,["unlock-threshold"]))),128))])}const xe=C(Z,[["render",ee],["__scopeId","data-v-fa2ae234"]]);export{xe as default};
