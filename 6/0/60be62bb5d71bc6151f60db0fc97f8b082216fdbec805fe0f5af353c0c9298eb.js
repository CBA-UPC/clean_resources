import{H as v,Q as C,L as _,A as l,D as u,N as S,B as r,V as m,W as g,a8 as M,I as f,_ as b,Y as h,Z as D,G as p,a7 as I,T as w}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import{w as H}from"./performanceMonitor_a4992bdd_r24-02-0_b0_t240129-161140.js";import{V as A,u as V}from"./ssrViewStoreMultiMiniProduct_fdef1c58_r24-02-0_b0_t240129-161140.js";import{b as L}from"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import{c as T}from"./cmsContentHelper_f68cc642_r24-02-0_b0_t240129-161140.js";import{S as $}from"./SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js";import{_ as q}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";const B={contentTypeUid:"",sectionId:"",modulePosition:1,story_shortname:"",story_purpose:"",story_scheduled_launch:"",publishDatePage:"",publishDateLayout:"",publishDateModule:""},N={inject:{providedCmsAnalyticsData:{default:,mq:{default:"mq"}},emits:["updateSelectedProductData"],props:{shoppableConfig:{type:Object,default:},components:{VCmsMiniProduct:A,SvgIcon:$},data:computed:{...v(L,["previewMode"]),isMobile,methods:{...C(V,["getMultiMiniProductSet"]),handleHotspotClick(e,a){let s;this.selectedProductId===e?(this.updateSelectedProductId(""),s="deactivated"):(this.updateSelectedProductId(e),s="activated");const t=this.providedCmsAnalyticsData();T({sectionId:t.sectionId,publishDatePage:t.publishDatePage,publishDateLayout:t.publishDateLayout,publishDateModule:t.publishDateModule,modulePosition:t.modulePosition,moduleType:t.contentTypeUid,storyName:t.story_shortname,storyPurpose:t.story_purpose,linkPosition:a+1,storyScheduledLaunch:t.story_scheduled_launch,previewState:this.previewMode,linkText:e,linkAction:`shoppable hotspot ${s}`})},updateSelectedProductId(e){const a=this.shoppableProducts.find(;if(a){const{productData:s}=a;this.selectedProductId=e,this.$emit("updateSelectedProductData",s)}else this.selectedProductId="",this.$emit("updateSelectedProductData",null)},computeMiniProductOffsetClass(e){var a,s;if(!this.isMobile&&this.validateHotspot(e==null?void 0:e.hotspot_position_desktop_tablet)){let t=!1,n=!1;return((a=e==null?void 0:e.hotspot_position_desktop_tablet)==null?void 0:a.percent_from_top)>60&&(t=!0),((s=e==null?void 0:e.hotspot_position_desktop_tablet)==null?void 0:s.percent_from_left)<40&&(n=!0),`${t?"top":"bottom"}-${n?"right":"left"}`}return"hidden"},computeHotspotPosition(e){return this.isMobile&&this.validateHotspot(e==null?void 0:e.hotspot_position_mobile)?{top:`${e.hotspot_position_mobile.percent_from_top}%`,left:`${e.hotspot_position_mobile.percent_from_left}%`,position:"absolute"}:!this.isMobile&&this.validateHotspot(e==null?void 0:e.hotspot_position_desktop_tablet)?{top:`${e.hotspot_position_desktop_tablet.percent_from_top}%`,left:`${e.hotspot_position_desktop_tablet.percent_from_left}%`,position:"absolute"}:{display:"none"}},validateHotspot(e){return!!(e!=null&&e.percent_from_top&&(e!=null&&e.percent_from_left))}},async mounted(){var e,a;if((a=(e=this.shoppableConfig)==null?void 0:e.products)!=null&&a.length){await H;const s=this.shoppableConfig.products.map(i=>i.product_id),t=await this.getMultiMiniProductSet(s);this.shoppableProducts=t.filter(.map(i=>({...this.shoppableConfig.products.find(,productData:i}));const n=this.shoppableProducts.find(;n&&this.updateSelectedProductId(n.product_id)}}},O={key:0,class:"shoppable-hotspots-overlay"},P=["onClick","onKeyup"];function F(e,a,s,t,n,i){const c=_("SvgIcon"),y=_("VCmsMiniProduct");return l(),u(w,{name:"fade"},{default:S(()=>[e.shoppableProducts.length?(l(),r("div",O,[(l(!0),r(m,null,g(e.shoppableProducts,(o,d)=>(l(),r("div",{key:`hotspot-${d}-${o.code}`,class:"shoppable-hotspot",style:M(i.computeHotspotPosition(o))},[f("div",{class:b(["ring",{selected:o.product_id===e.selectedProductId}]),onClick:h(k=>i.handleHotspotClick(o.product_id,d),["stop"]),onKeyup:D(h(["stop"]),["enter"])},[f("div",{class:b(["dot",{selected:o.product_id===e.selectedProductId}])},[i.mq.current!=="mobile"&&o.product_id===e.selectedProductId?(l(),u(c,{key:0,name:"close",title:"Close",class:"close"})):p("",!0)],2)],42,P),i.mq.current!=="mobile"?(l(),r(m,{key:0},[o.product_id===e.selectedProductId?(l(),u(y,I({key:0,"link-position":d,"link-text":s.shoppableConfig.link_text},o.productData,{class:["mini-product-overlay-desktop",i.computeMiniProductOffsetClass(o)]}),null,16,["link-position","link-text","class"])):p("",!0)],64)):p("",!0)],4))),128))])):p("",!0)]),_:1})}const Y=q(N,[["render",F],["__scopeId","data-v-964e9ead"]]);export{Y as V};