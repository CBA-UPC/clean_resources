import{H as V,L as r,R as B,A as l,B as i,I as o,O as d,a7 as _,D as y,G as s,a8 as p,J as m,V as C,W as R,N as w,_ as c,S as x,T as H}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import{u as T}from"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import{E as M}from"./ElementInViewDirective_8a3c1de4_r24-02-0_b0_t240129-161140.js";import{p as j}from"./cmsContentHelper_f68cc642_r24-02-0_b0_t240129-161140.js";import{o as D}from"./objectHasKeys_aced35f1_r24-02-0_b0_t240129-161140.js";import{V as F}from"./VRawMarkup_119eefb5_r24-02-0_b0_t240129-161140.js";import{S as O}from"./SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js";import{s as I}from"./LscoLazyLoadDirective_02fa23a1_r24-02-0_b0_t240129-161140.js";import{V as z}from"./VCmsMediaSSR_1101c01c_r24-02-0_b0_t240129-161140.js";import{V as E}from"./ssrViewStoreMultiMiniProduct_fdef1c58_r24-02-0_b0_t240129-161140.js";import{V as K}from"./VCmsShoppableHotspotsOverlay_b557ee34_r24-02-0_b0_t240129-161140.js";import{V as W}from"./VLinkWrapper_89f0cc15_r24-02-0_b0_t240129-161140.js";import{_ as N}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import"./typeOf_b861069e_r24-02-0_b0_t240129-161140.js";import"./i18n_4b81f106_r24-02-0_b0_t240129-161140.js";import"./eventBus_552c1ba1_r24-02-0_b0_t240129-161140.js";import"./safariCheck_11313f0b_r24-02-0_b0_t240129-161140.js";import"./VResponsivePicture_fb50e2e9_r24-02-0_b0_t240129-161140.js";import"./imageUtils_fcbf42ca_r24-02-0_b0_t240129-161140.js";import"./VProductMediaSSR_5d417f74_r24-02-0_b0_t240129-161140.js";import"./performanceMonitor_a4992bdd_r24-02-0_b0_t240129-161140.js";import"./vuex.esm-bundler_aa359dca_r24-02-0_b0_t240129-161140.js";const G={content_type_uid:"module_50_50_media_v2",mixins:[D],components:{VCmsMediaSSR:z,VLinkWrapper:W,SvgIcon:O,VCmsMiniProduct:E,VCmsShoppableHotspotsOverlay:K,VRawMarkup:F},data:props:{subcopy:{type:String,default:""},cta_links:{type:Array,default:,eyebrow_text:{type:String,default:""},eyebrow_color:{type:String,default:""},eyebrow_svg:{type:String,default:""},eyebrow_image_aem:{type:Object,default:void 0},eyebrow_image_alt_text:{type:String,default:""},headline_text:{type:String,default:""},headline_color:{type:String,default:""},headline_image_aem:{type:Object,default:void 0},headline_image_alt_text:{type:String,default:""},copy:{type:String,default:""},image_caption_text:{type:String,default:""},image_caption_text_bold:{type:String,default:""},mobile_image_and_text_placement:{type:String,default:""},desktop_image_and_text_placement:{type:String,default:""},image_layout:{type:String,default:""},media_link:{type:Object,default:void 0},primary_image_or_video_aem:{type:Object,default:void 0},background_image_aem:{type:Object,default:void 0},accent_image_aem:{type:Object,default:void 0},primary_media_alt_text:{type:String,default:""},background_image_alt_text:{type:String,default:""},accent_image_alt_text:{type:String,default:""},copy_rich_text:{type:String,default:""},shoppable_configuration:{type:Object,default:,moduleShouldEagerLoad:{type:Boolean,default:!1}},directives:{"activate-when-visible":M},computed:{...V(T,["locale","country"]),textContainerHeightStyle(){const t=if(!this.mdImageAbove){if(this.isLandscapeInset)return t("36.8");if(this.isLandscapeFullBleed)return t("40");if(this.isStacked)return t("44");if(this.isPortraitInset)return t("57.5")}return""},isPrimaryImage(){var t;return((t=this.primary_image_or_video_aem)==null?void 0:t.displayFileType)==="IMAGE"},layoutClasses(){return{"landscape-full-bleed":this.image_layout==="Landscape Full Bleed","portrait-inset":this.image_layout==="Portrait Inset","landscape-inset":this.image_layout==="Landscape Inset",stacked:this.image_layout==="Stacked","md-image-left":this.desktop_image_and_text_placement==="Image Left, Text Right","md-image-right":this.desktop_image_and_text_placement==="Image Right, Text Left","md-image-above":this.desktop_image_and_text_placement==="Image Above, Text Below","xs-image-above":this.mobile_image_and_text_placement==="Image Above, Text Below","xs-image-below":this.mobile_image_and_text_placement==="Image Below, Text Above"}},isStacked(){return this.image_layout==="Stacked"},isLandscapeInset(){return this.image_layout==="Landscape Inset"},isPortraitInset(){return this.image_layout==="Portrait Inset"},isLandscapeFullBleed(){return this.image_layout==="Landscape Full Bleed"},mdImageLeft(){return this.desktop_image_and_text_placement==="Image Left, Text Right"},mdImageRight(){return this.desktop_image_and_text_placement==="Image Right, Text Left"},mdImageAbove(){return this.desktop_image_and_text_placement==="Image Above, Text Below"},xsImageAbove(){return this.mobile_image_and_text_placement==="Image Above, Text Below"},xsImageBelowplayButtonPosition(){return this.desktop_image_and_text_placement==="Image Right, Text Left"?I.leftBottom:I.rightBottom},copyRichTextPrepared(){return j(this.copy_rich_text,this.country,this.locale)||""},displayShoppableAsHotspots(){var t;return((t=this==null?void 0:this.shoppable_configuration)==null?void 0:t.display)==="Hotspots"},hasValidShoppableConfig(){var t,n,a;return!!(((t=this.shoppable_configuration)==null?void 0:t.display)==="Hotspots"&&((a=(n=this.shoppable_configuration)==null?void 0:n.products)!=null&&a.some(g=>{var h;return((h=g==null?void 0:g.product_id)==null?void 0:h.length)>0})))}},methods:{updateSelectedProductData(t){t?this.selectedProductData=t:this.selectedProductData=null}}},U={key:0,class:"lsco-row lsco-row-xs--center lsco-row-xs--center lsco-row-md--unset-justify"},q={key:1,class:"lsco-row"},J={key:3,class:"lsco-row"},Q={key:4,class:"lsco-row"},X={key:6,class:"module-50-50__subcopy"},Y={key:7,class:"module-50-50__cta-wrapper lsco-row-xs--center lsco-row-md--start"},Z={class:"module-50-50__aspect-ratio-box"},$={key:0,class:"caption-bold"},ee={key:1,class:"caption-bold"},ae={key:2},te={class:"module-50-50__aspect-ratio-box"},le={key:2,class:"shoppable-mobile-miniproducts lsco-row lsco-row-xs--center show-mobile"},ie={key:0},se={class:"shoppable-hotspot-mobile-caption lsco-col-xs-21"};function oe(t,n,a,g,h,e){const u=r("VCmsMediaSSR"),f=r("SvgIcon"),S=r("VRawMarkup"),A=r("VLinkWrapper"),L=r("VCmsShoppableHotspotsOverlay"),P=r("VCmsMiniProduct"),b=B("activate-when-visible");return l(),i("div",{class:c(["module-50-50 lsco-row lsco-row-xs--center",{"landscape-full-bleed":e.isLandscapeFullBleed},{"portrait-inset":e.isPortraitInset},{"landscape-inset":e.isLandscapeInset},{stacked:e.isStacked},{"md-image-left":e.mdImageLeft},{"md-image-right":e.mdImageRight},{"md-image-above":e.mdImageAbove},{"xs-image-above":e.xsImageAbove},{"xs-image-below":e.xsImageBelow}])},[o("div",{style:p(e.textContainerHeightStyle),class:c(["module-50-50__text lsco-col-xs-21",{"lsco-col-md--last":e.mdImageLeft},{"lsco-col-md--first":e.mdImageRight},{"lsco-col-xs--last":e.xsImageAbove},{"lsco-col-xs--first":e.xsImageBelow},{"lsco-col-md--last":e.mdImageAbove},{"lsco-col-md-12-and-a-half":!e.mdImageAbove},{"lsco-col-md-13":e.mdImageAbove&&(e.isLandscapeInset||e.isLandscapeFullBleed)},{"lsco-col-md-12":e.mdImageAbove&&e.isStacked},{"lsco-col-md-11":e.mdImageAbove&&e.isPortraitInset}])},[t.objectHasKeys(a.eyebrow_image_aem)?(l(),i("div",U,[d(u,_({class:"module-50-50__eyebrow-image lsco-col-xs-13 lsco-col-md-4"},a.eyebrow_image_aem,{"alt-text":a.eyebrow_image_alt_text,"use-intrinsic-size":!0,"column-width":4,"column-width-override-mobile":13,alpha:!0,"disable-fixed-aspect-ratio":!0}),null,16,["alt-text"])])):a.eyebrow_svg?(l(),i("div",q,[a.eyebrow_svg?(l(),y(f,{key:0,name:a.eyebrow_svg,class:"eyebrow__svg",title:a.eyebrow_svg,"unique-id":"5050",tabindex:"-1"},null,8,["name","title"])):s("",!0)])):a.eyebrow_text?(l(),i("h4",{key:2,class:"module-50-50__eyebrow",style:p({color:a.eyebrow_color})},m(a.eyebrow_text),5)):s("",!0),t.objectHasKeys(a.headline_image_aem)?(l(),i("div",J,[d(u,_({class:"module-50-50__headline-image lsco-col-xs-21 lsco-col-md-7"},a.headline_image_aem,{"alt-text":a.headline_image_alt_text,"use-intrinsic-size":!0,alpha:!0,"disable-fixed-aspect-ratio":!0,"column-width":7,"column-width-override-mobile":21}),null,16,["alt-text"])])):a.headline_text?(l(),i("div",Q,[o("h3",{class:"module-50-50__headline",style:p({color:a.headline_color})},m(a.headline_text),5)])):s("",!0),e.copyRichTextPrepared?(l(),y(S,{key:5,class:"module-50-50__subcopy","raw-markup":e.copyRichTextPrepared},null,8,["raw-markup"])):(l(),i("div",X,[o("p",null,m(a.copy),1)])),a.cta_links?(l(),i("ul",Y,[(l(!0),i(C,null,R(a.cta_links,(v,k)=>(l(),i("li",{class:"module-50-50__cta-link",key:k},[d(A,{"cta-link":v,"link-position":k},{default:w(()=>[o("span",null,m(v.link_text),1),d(f,{name:"link-underline",class:"cta-svg"})]),_:2},1032,["cta-link","link-position"])]))),128))])):s("",!0)],6),o("div",{class:c(["module-50-50__image lsco-row lsco-row-xs--center lsco-col-xs-25",{"lsco-col-xs--first":e.xsImageAbove},{"lsco-col-xs--last":e.xsImageBelow},{"lsco-col-md--first":e.mdImageAbove},{"lsco-col-md--first lsco-row-md--end":e.mdImageLeft},{"lsco-col-md--last lsco-row-md--start":e.mdImageRight},{"lsco-col-md-12-and-a-half":!e.mdImageAbove}])},[o("div",{class:c(["module-50-50__image-outer",{"module-50-50__stack-wrapper":e.isStacked},{"lsco-col-xs-21":e.isStacked},{"lsco-col-md-10":!e.mdImageAbove&&e.isStacked},{"lsco-col-md-12":e.mdImageAbove&&e.isStacked},{"lsco-col-md-13":e.mdImageAbove&&(e.isLandscapeInset||e.isLandscapeFullBleed)},{"lsco-col-md-11":e.mdImageAbove&&e.isPortraitInset}])},[e.isStacked&&t.objectHasKeys(a.background_image_aem)?(l(),i("div",{key:0,class:c(["module-50-50__image-wrapper--background module-50-50__image-wrapper","lsco-col-xs-20",e.mdImageAbove?"lsco-col-md-9":"lsco-col-md-8"])},[o("div",Z,[x(d(u,_({class:["module-50-50__image module-50-50__image--background"]},a.background_image_aem,{"media-link":a.media_link,"alt-text":a.background_image_alt_text,"column-width":9,"column-width-override-mobile":20,"aspect-ratio-width":4,"aspect-ratio-height":5}),null,16,["media-link","alt-text"]),[[b]])])],2)):s("",!0),o("div",{class:c(["module-50-50__image-wrapper--primary",{"module-50-50__image-wrapper":!e.hasValidShoppableConfig&&!e.displayShoppableAsHotspots},{"lsco-col-xs-20":e.isStacked},{"lsco-col-xs-21":!e.isStacked},{"lsco-col-md-9":e.isStacked&&e.mdImageAbove},{"lsco-col-md-8":e.isStacked&&!e.mdImageAbove},{"lsco-col-md-11-and-a-half":!e.mdImageAbove&&(e.isLandscapeInset||e.isPortraitInset)},{"lsco-col-md-12-and-a-half":!e.mdImageAbove&&e.isLandscapeFullBleed},{"lsco-col-md-11":e.mdImageAbove&&e.isPortraitInset},{"lsco-col-md-13":e.mdImageAbove&&(e.isLandscapeInset||e.isLandscapeFullBleed)}])},[e.isPrimaryImage&&e.hasValidShoppableConfig&&e.displayShoppableAsHotspots?(l(),y(L,{key:0,"shoppable-config":a.shoppable_configuration,onUpdateSelectedProductData:e.updateSelectedProductData},null,8,["shoppable-config","onUpdateSelectedProductData"])):s("",!0),o("div",{class:c(["module-50-50__image-caption",{"md-image-above-caption":e.mdImageAbove}])},[a.image_caption_text_bold?(l(),i("span",$,m(a.image_caption_text_bold),1)):s("",!0),a.image_caption_text_bold&&a.image_caption_text?(l(),i("span",ee," / ")):s("",!0),a.image_caption_text?(l(),i("span",ae,m(a.image_caption_text),1)):s("",!0)],2),o("div",te,[x(d(u,_({class:["module-50-50__image module-50-50__image--primary"],"media-link":a.media_link},a.primary_image_or_video_aem,{"play-button-position":e.playButtonPosition,"alt-text":a.primary_media_alt_text,"column-width":13,"column-width-override-mobile":21,"aspect-ratio-width":e.isPortraitInset||e.isStacked?4:5,"aspect-ratio-height":e.isPortraitInset||e.isStacked?5:4,"disable-lazy-load":a.moduleShouldEagerLoad}),null,16,["media-link","play-button-position","alt-text","aspect-ratio-width","aspect-ratio-height","disable-lazy-load"]),[[b]])])],2),e.isStacked&&t.objectHasKeys(a.accent_image_aem)?(l(),i("div",{key:1,class:c(["module-50-50__image-wrapper module-50-50__image-wrapper--accent",{"lsco-col-xs-10 lsco-col-md-5":e.isStacked}])},[x(d(u,_({class:["module-50-50__image module-50-50__image--accent"],"media-link":a.media_link},a.accent_image_aem,{"alt-text":a.accent_image_alt_text,"column-width":5,"column-width-override-mobile":10,alpha:!0,"disable-fixed-aspect-ratio":!0,"use-intrinsic-size":!0}),null,16,["media-link","alt-text"]),[[b]])],2)):s("",!0),e.isPrimaryImage&&e.hasValidShoppableConfig&&e.displayShoppableAsHotspots?(l(),i("div",le,[d(H,{name:"fade"},{default:w(()=>[t.selectedProductData?(l(),i("div",ie,[o("div",se,m(a.shoppable_configuration.caption||""),1),d(P,_(t.selectedProductData,{class:"shoppable-mobile-miniproduct lsco-col-xs-23"}),null,16)])):s("",!0)]),_:1})])):s("",!0)],2)],2)],2)}const Ve=N(G,[["render",oe],["__scopeId","data-v-86a616fc"]]);export{Ve as default};
