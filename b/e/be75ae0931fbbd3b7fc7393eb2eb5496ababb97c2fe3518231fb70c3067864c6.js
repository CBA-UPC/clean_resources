import{H as p,A as i,B as a,I as s,Z as y,J as r,G as u,V as S,W as g,_ as b,L as m,O as h}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import{u as v}from"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import{useSsrViewStoreProduct as $}from"./ssrViewStoreProduct_cb84dadb_r24-02-0_b0_t240129-161140.js";import{_ as f}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import"./productUtils_e3499a9f_r24-02-0_b0_t240129-161140.js";import"./i18n_4b81f106_r24-02-0_b0_t240129-161140.js";import"./imageUtils_fcbf42ca_r24-02-0_b0_t240129-161140.js";import"./ssrGlobalStoreHeadMeta_ca820fb3_r24-02-0_b0_t240129-161140.js";import"./csrGlobalStoreAppState_f9ff4bfa_r24-02-0_b0_t240129-161140.js";const P={computed:{...p($,{product:"productPDP"}),...p(v,["locale"])},datamethods:{seeMore(){const e=document.getElementsByClassName("pdp-spec-description");e&&e.length>0&&e[0].classList.remove("pdp-spec-description"),this.showSeeMore=!1},canShowSeeMore(){const e=document.getElementsByClassName("pdp-spec-description");e&&e.length>0?this.showSeeMore=e[0].offsetHeight!==e[0].scrollHeight:this.showSeeMore=!1}},mounted,L={key:0,class:"pdp-spec-feature"},w={class:"contentContainer"},H={class:"pdp-spec-description"},z=["innerHTML"],D={key:0,class:"see-more"},T={class:"style-product-code hidden-md hidden-lg"};function V(e,n,d,l,o,t){return e.product.description?(i(),a("div",L,[s("div",w,[s("div",H,[s("div",{innerHTML:e.product.description},null,8,z)]),o.showSeeMore?(i(),a("div",D,[s("a",{onClick:n[0]||(n[0]=c=>t.seeMore()),onKeyup:n[1]||(n[1]=y(["enter"])),tabindex:"0"},r(e.$t("i18n.seeMore")),33)])):u("",!0),s("div",T,[s("div",null,r(e.$t("i18n.styleLabel"))+" "+r(e.product.code),1),s("div",null,r(e.$t("i18n.colorLabel"))+": "+r(e.product.colorName),1)])])])):u("",!0)}const C=f(P,[["render",V],["__scopeId","data-v-6d9b8de0"]]);const k={computed:{...p($,{product:"productPDP",isProductHasModelDescription:"isProductHasModelDescription"}),...p(v,["locale"]),fitSizingText(){const e=[],n=this.product.classifications;return this.product&&this.product.classifications&&n.forEach(d=>{d.features.forEach(o=>{if(o.code.endsWith("fit_text"))for(let t=0;t<=o.featureValues.length;t++)o.featureValues[t]&&e.push(o.featureValues[t].value)})}),e}}},E={key:0,class:"pdp-spec-feature"},x={class:"pdp-tabs-header"},B={class:"pdp-tabs-title"},N={class:"contentContainer"},I=["innerHTML"];function F(e,n,d,l,o,t){return t.fitSizingText.length>0?(i(),a("div",E,[s("div",x,[s("span",B,r(e.$t("i18n.pdpFitSizing")),1)]),s("div",N,[s("ul",null,[(i(!0),a(S,null,g(t.fitSizingText,(c,_)=>(i(),a("li",{class:b([{"model-measurements":(c==null?void 0:c.toLowerCase().includes("model"))&&e.isProductHasModelDescription}]),key:_,innerHTML:c,tabindex:"0"},null,10,I))),128))])])])):u("",!0)}const O=f(k,[["render",F],["__scopeId","data-v-c147e7a5"]]);const W={computed:{...p($,{product:"productPDP"}),...p(v,["locale"]),material(){const e=[],n=this.product.classifications;return this.product&&this.product.classifications&&n.forEach(d=>{d.features.forEach(o=>{if(o.code.endsWith("material"))for(let t=0;t<=o.featureValues.length;t++)o.featureValues[t]&&e.push(o.featureValues[t].value)})}),e}}},j={key:0,class:"pdp-spec-feature"},G={class:"pdp-tabs-header"},K={class:"pdp-tabs-title"},A={class:"contentContainer"},J=["innerHTML"];function Z(e,n,d,l,o,t){return t.material.length>0?(i(),a("div",j,[s("div",G,[s("span",K,r(e.$t("i18n.pdpMaterials")),1)]),s("div",A,[s("ul",null,[(i(!0),a(S,null,g(t.material,(c,_)=>(i(),a("li",{key:_,innerHTML:c,tabindex:"0"},null,8,J))),128))])])])):u("",!0)}const q=f(W,[["render",Z],["__scopeId","data-v-7bd55726"]]);const Q={components:{"pdp-specs-details-component":C,"pdp-specs-material-component":q,"pdp-specs-fit-sizing-component":O}},R={class:"pdp-specifications"},U={class:"product-overview"},X={class:"product-spec-overview"};function Y(e,n,d,l,o,t){const c=m("pdp-specs-details-component"),_=m("pdp-specs-fit-sizing-component"),M=m("pdp-specs-material-component");return i(),a("div",R,[s("div",U,[h(c)]),s("div",X,[h(_),h(M)])])}const re=f(Q,[["render",Y],["__scopeId","data-v-4d6fea07"]]);export{re as default};