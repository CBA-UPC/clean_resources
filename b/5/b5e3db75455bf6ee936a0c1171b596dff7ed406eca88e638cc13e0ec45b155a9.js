import{V as p}from"./VCmsMediaSSR_1101c01c_r24-02-0_b0_t240129-161140.js";import{V as b}from"./VLinkWrapper_89f0cc15_r24-02-0_b0_t240129-161140.js";import{_ as y}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import{L as r,A as o,B as _,I as a,_ as i,O as n,a7 as u,X as s,J as l,G as f,V as h,W as x,N as k}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import"./eventBus_552c1ba1_r24-02-0_b0_t240129-161140.js";import"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import"./safariCheck_11313f0b_r24-02-0_b0_t240129-161140.js";import"./SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js";import"./i18n_4b81f106_r24-02-0_b0_t240129-161140.js";import"./LscoLazyLoadDirective_02fa23a1_r24-02-0_b0_t240129-161140.js";import"./VResponsivePicture_fb50e2e9_r24-02-0_b0_t240129-161140.js";import"./imageUtils_fcbf42ca_r24-02-0_b0_t240129-161140.js";import"./vuex.esm-bundler_aa359dca_r24-02-0_b0_t240129-161140.js";import"./cmsContentHelper_f68cc642_r24-02-0_b0_t240129-161140.js";import"./typeOf_b861069e_r24-02-0_b0_t240129-161140.js";const L={content_type_uid:"module_single_up_v1",components:{VCmsMediaSSR:p,VLinkWrapper:b},props:{copy:{type:String,default:""},cta_links:{type:Array,default:,headline_text:{type:String,default:""},image_layout:{type:String,default:""},media_aspect_ratio_mobile:{type:String,default:""},media_alt_text:{type:String,default:""},media_link:{type:Object,default:void 0},desktop_image_or_video_aem:{type:Object,default:void 0},mobile_image_or_video_aem:{type:Object,default:void 0},image_caption_text:{type:String,default:""},image_caption_text_bold:{type:String,default:""},moduleShouldEagerLoad:{type:Boolean,default:!1}},computed:{mobileLayoutLandscapemobileLayoutPortrait(){return this.media_aspect_ratio_mobile==="4-5"||this.media_aspect_ratio_mobile!=="16-9"}}},S={"aria-label":"Single Up Image",class:"single-up__image lsco-row lsco-row-md--center lsco-row-xs--center"},v={class:"single-up__image--image-wrap lsco-row lsco-row-md--center lsco-row-xs--center"},w=["aria-label"],V=["aria-label"],z={key:0},C=["aria-label"],P=["aria-label"];function B(M,N,e,E,O,t){const c=r("VCmsMediaSSR"),g=r("VLinkWrapper");return o(),_("div",S,[a("div",v,[a("figure",{class:i(["single-up__image--figure lsco-row-md--center lsco-row-xs--center lsco-col-md-17",{"lsco-col-xs-21":t.mobileLayoutPortrait},{"lsco-col-xs-25":t.mobileLayoutLandscape}])},[a("div",{"aria-label":"single-up__image--image-container",class:i([{"single-up__image--portrait-container":t.mobileLayoutPortrait},{"single-up__image--landscape-container":t.mobileLayoutLandscape}])},[n(c,u({class:"single-up__image--image show-mobile"},e.mobile_image_or_video_aem,{"alt-text":e.media_alt_text,"media-link":e.media_link,"enable-hover-zoom":!0,"column-width":t.mobileLayoutPortrait?21:25,"aspect-ratio-width":4,"aspect-ratio-height":5,"disable-lazy-load":e.moduleShouldEagerLoad}),null,16,["alt-text","media-link","column-width","disable-lazy-load"]),n(c,u({class:"single-up__image--image hide-mobile"},e.desktop_image_or_video_aem,{"alt-text":e.media_alt_text,"media-link":e.media_link,"enable-hover-zoom":!0,"column-width":17,"aspect-ratio-width":16,"aspect-ratio-height":9,"disable-lazy-load":e.moduleShouldEagerLoad}),null,16,["alt-text","media-link","disable-lazy-load"])],2),a("span",{"aria-label":e.image_caption_text,class:i(["single-up__image--caption2",{"single-up__image--caption2-mobile-landscape":t.mobileLayoutLandscape},{"single-up__image--caption2-mobile-portrait":t.mobileLayoutPortrait}])},[a("span",{"aria-label":e.image_caption_text_bold,class:"single-up__image--caption2-bold"},[s(l(e.image_caption_text_bold)+" ",1),e.image_caption_text&&e.image_caption_text_bold?(o(),_("span",z," / ")):f("",!0)],8,V),s(" "+l(e.image_caption_text),1)],10,w),a("figcaption",{class:i(["single-up__image--caption1 lsco-col-xs-21 lsco-col-md-17",{"lsco-col-xs-offset-2 lsco-col-md-offset-0":t.mobileLayoutLandscape}]),"aria-label":"single-up__image--caption1"},[a("div",{"aria-label":e.headline_text,class:"single-up__image--caption1-headline"},l(e.headline_text),9,C),a("div",{"aria-label":e.copy,class:"single-up__image--caption1-copy"},l(e.copy),9,P),a("div",{class:i({"lsco-row lsco-col-xs-21":e.cta_links.length>0})},[(o(!0),_(h,null,x(e.cta_links,(m,d)=>(o(),_("div",{key:d},[n(g,{"cta-link":m,"link-position":d,class:"single-up__image--cta-link"},{default:k(,_:2},1032,["cta-link","link-position"])]))),128))],2)],2)],2)])])}const Q=y(L,[["render",B],["__scopeId","data-v-ef6d9e4a"]]);export{Q as default};
