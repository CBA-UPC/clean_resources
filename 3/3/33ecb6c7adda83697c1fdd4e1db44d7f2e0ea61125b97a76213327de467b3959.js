import{H as d,S as c,U as i,A as t,B as s,I as e,J as r,G as n}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import{k as l,u as m,c as u}from"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import{u as p}from"./ssrGlobalStoreHeadMeta_ca820fb3_r24-02-0_b0_t240129-161140.js";import{useSsrViewStoreProduct as _}from"./ssrViewStoreProduct_cb84dadb_r24-02-0_b0_t240129-161140.js";import{q as h}from"./lsanalytics-product_ee6481c4_r24-02-0_b0_t240129-161140.js";import{_ as b}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import"./i18n_4b81f106_r24-02-0_b0_t240129-161140.js";import"./productUtils_e3499a9f_r24-02-0_b0_t240129-161140.js";import"./imageUtils_fcbf42ca_r24-02-0_b0_t240129-161140.js";import"./csrGlobalStoreAppState_f9ff4bfa_r24-02-0_b0_t240129-161140.js";const v={data:()=>({brandName:""}),mounted(){this.brandName=l(),h("product is no longer available")},computed:{...d(_,{product:"productPDP"}),...d(m,["locale","country"]),...d(u,["paths"]),noProductCode(){return this.product.code}},created(){p().setHeadMeta({title:this.$t("i18n.thisProductsNotAvailable"),robots:this.envUtil("NGS_ENV_NOINDEX_NOFOLLOW"),httpStatus:"404"})}},f={class:"product-header lsco-row lsco-row-xs--center"},g={class:"product-header__wrapper lsco-col-xs-21 lsco-col-md-15"},N={class:"product-header__nothing-found--message"},S={class:"product-header__nothing-found--subtext"},k={class:"product-header__nothing-found_button-grid lsco-row lsco-row-xs--center lsco-row-xs--middle"},w={class:"lsco-col-xs-17 lsco-col-lg-25 lsco-col-md-11"},P=["href"],$=["href"],y={key:0,id:"nopdp-recomm-1",class:"nopdp-recommendation lv-recommendation"},G={key:1,id:"nopdp-recomm-1",class:"nopdp-recommendation dk-recommendation"},C={key:2,id:"nopdp-recomm-2",class:"nopdp-recommendation lv-recommendation"},M={key:3,id:"nopdp-recomm-2",class:"nopdp-recommendation dk-recommendation"};function B(o,H,D,E,F,a){return c((t(),s("div",f,[c(e("div",g,[e("h1",N,r(o.$t("i18n.thisProductsNotAvailable")),1),e("span",S,r(`${o.$t("i18n.nothingFoundSubtext")}`||" "),1),e("div",k,[e("div",w,[e("a",{href:`${o.paths.base}/clothing/men/c/levi_clothing_men`,class:"product-header__nothing-found_button"},r(o.$t("i18n.shopMen")),9,P),e("a",{href:`${o.paths.base}/clothing/women/c/levi_clothing_women`,class:"product-header__nothing-found_button"},r(o.$t("i18n.shopWomen")),9,$)])])],512),[[i,a.noProductCode==null]]),o.brandName==="levi"?(t(),s("div",y)):n("",!0),o.brandName==="dockers"?(t(),s("div",G)):n("",!0),o.brandName==="levi"?(t(),s("div",C)):n("",!0),o.brandName==="dockers"?(t(),s("div",M)):n("",!0)],512)),[[i,a.noProductCode==null]])}const J=b(v,[["render",B]]);export{J as default};
a23a1_r24-02-0_b0_t240129-161140.js";import"./VResponsivePicture_fb50e2e9_r24-02-0_b0_t240129-161140.js";import"./VRawMarkup_119eefb5_r24-02-0_b0_t240129-161140.js";import"./performanceMonitor_a4992bdd_r24-02-0_b0_t240129-161140.js";import"./objectHasKeys_aced35f1_r24-02-0_b0_t240129-161140.js";import"./ElementInViewDirective_8a3c1de4_r24-02-0_b0_t240129-161140.js";const Se={class:"element-img"},Be={class:"element-body"},we={key:0,class:"tile-media-eyebrow lsco-col-lg-2 lsco-col-xs-4",ref:"eyebrowImage"},Te={key:1,class:"headline"},Ee={key:1,class:"tile-links"},De={key:0,class:"block-background"},Pe={key:2},Ie={class:"block-background"},Le="open-rich-text",Ae={__name:"CarouselTile",props:{element:{type:Object,default:null},fullView:{type:Boolean,default:!1}},setup(e){const i=e,o=k(()=>{if(i.element){const n=i.element;return se.forEach(C=>{delete n[C]}),n}return null}),r=k(()=>o.value.headline_text),a=k(()=>o.value.copy),s=k(()=>o.value.primary_image_or_video_aem),h=k(()=>o.value.primary_media_alt_text),f=k(()=>o.value.media_link),v=k(()=>{let n;return x(o.value.cta_links)==="array"?n=o.value.cta_links:x(o.value.cta_links)==="object"&&(n=[o.value.cta_links]),/Only CTA/gi.test(o.value.content_choice)?o.value.cta_links.slice(0,1):n}),m=k(()=>{var n;return!!((n=o.value.eyebrow)!=null&&n.eyebrow_image)}),p=(n,C)=>x(n)==="string"&&(n==null?void 0:n.length)>0?{link_text:ue.global.t("i18n.detailsLinkText"),link_action_modal:Le,modal_rich_text_content:n||"",link_aria_label:C||""}:null,g=n=>{N.$emit("showRaffleModal",n)};return(n,C)=>(l(),d("div",{class:j(["carousel-element",{"full-view":e.fullView}])},[t("div",Se,[u(M,{class:"media-wrapper","cta-link":f.value,"link-position":n.linkPosition},{default:y(()=>[u(be,ee({class:["cover"]},s.value,{"alt-text":h.value,"aspect-ratio-width":4,"aspect-ratio-height":5,"column-width":5,"column-width-override-mobile":21}),null,16,["alt-text"])]),_:1},8,["cta-link","link-position"])]),t("div",Be,[n.hideHeadlineCopy?_("",!0):(l(),d(w,{key:0},[m.value?(l(),d("div",we,null,512)):_("",!0),r.value?(l(),d("h6",Te,c(r.value),1)):_("",!0),a.value?(l(),d("p",{key:2,ref:"copy",class:"copy","data-testid":"copy"},c(a.value),513)):_("",!0)],64)),v.value&&v.value.length>0?(l(),d("div",Ee,[(l(!0),d(w,null,T(v.value,(I,O)=>(l(),S(M,{class:"tile-link",key:O,"cta-link":I,"link-position":O},{default:y(()=>[I.link_action!=="open_raffle_modal"?(l(),d("span",De,c(I.link_text),1)):(l(),d("span",{key:1,class:"raffle-link",onClick:C[0]||(C[0]=J=>g(i.element)),onKeyup:C[1]||(C[1]=A(J=>g(i.element),["enter"]))},c(I.link_text),33))]),_:2},1032,["cta-link","link-position"]))),128))])):_("",!0),o.value.modal_content?(l(),d("div",Pe,[(l(),S(M,{class:"tile-link",key:n.index,"cta-link":p(o.value.modal_content),"link-position":0,tabindex:"0","data-testid":"benefit-modal"},{default:y(()=>[t("span",Ie,c(n.$t("i18n.detailsLinkText")),1)]),_:1},8,["cta-link"]))])):_("",!0)])],2))}},z=P(Ae,[["__scopeId","data-v-aeb89a2d"]]);const Me={class:"red-tab-benefits"},$e={class:"icon-wrapper"},Re={class:"red-tab-benefits__heading-details-wrapper"},xe={class:"red-tab-benefits__heading-details lsco-col-xs-19 lsco-col-md-9"},He={class:"benefit-tiles-title"},Ne={key:0,class:"benefit-tiles"},Ue={key:1,class:"scrollable-list"},Oe="raffle",Ge={__name:"PersonalizedBenefits",setup(e){ye.use([me]);const i=te.useMq(),o=ae(),r=k(()=>o.getters["loyaltyBenefitsState/personalizedBenefits"]),a=k(()=>i.current==="mobile"?[3,1.3]:[3.33,3]),s=k(()=>i.current==="mobile"),h=k(()=>r.value.length>0?r.value.filter(m=>m.bannerContent&&m.bannerContent.headline!=="").map(m=>{const{eyebrow:p,headline:g,...n}=m.bannerContent,{benefitId:C}=m.benefitDetails;return{...n,eyebrow_text:p,headline_text:g,is_raffle:m.benefitDetails.category===Oe,benefit_id:C}}):null);return(f,v)=>{const m=b("svg-icon"),p=b("heading-container");return l(),d("div",Me,[u(p,{class:"red-tab-benefits__heading-container lsco-col-xs-25 lsco-col-md-16",title:f.$t("i18n.myRedTabBenefits")},{"content-above":y(()=>[t("div",$e,[u(m,{name:"red-tab-logo",title:"Levi’s® Red Tab™","set-aria-hidden":!0})])]),details:y(()=>[t("div",Re,[t("div",xe,[t("div",null,c(f.$t("i18n.myRedTabBenefitsDescription1")),1),t("div",null,c(f.$t("i18n.myRedTabBenefitsDescription2")),1)])])]),_:1},8,["title"]),t("div",He,c(f.$t("i18n.personalizedBenefits")),1),s.value?(l(),d("div",Ue,[(l(!0),d(w,null,T(h.value,(g,n)=>(l(),d("div",{class:"list-item",key:n},[u(z,{element:g,"full-view":!1},null,8,["element"])]))),128))])):(l(),d("div",Ne,[u(G(ge),{"slides-per-view":a.value[0],"slides-per-group":a.value[1],"space-between":24,navigation:!s.value,modules:f.modules,mousewheel:!0,keyboard:!0,class:"mySwiper"},{default:y(()=>[(l(!0),d(w,null,T(h.value,(g,n)=>(l(),S(G(_e),{key:n},{default:y(()=>[u(z,{element:g,"full-view":!1},null,8,["element"])]),_:2},1024))),128))]),_:1},8,["slides-per-view","slides-per-group","navigation","modules"])]))])}}},Ve=P(Ge,[["__scopeId","data-v-d4495d83"]]);const Fe=async()=>W(K(()=>import("./countries_code_dd26cbfc_r24-02-0_b0_t240129-161140.js").then(e=>e.c),[])),qe=ie(()=>W(K(()=>import("./LoyaltyCustomerRaffleModal_b6816544_r24-02-0_b0_t240129-161140.js"),["ngsa/js/LoyaltyCustomerRaffleModal_b6816544_r24-02-0_b0_t240129-161140.js","ngsa/js/vuex.esm-bundler_aa359dca_r24-02-0_b0_t240129-161140.js","ngsa/js/vendor_6ed58054_r24-02-0_b0_t240129-161140.js","ngsa/js/csrGlobalStoreAppState_f9ff4bfa_r24-02-0_b0_t240129-161140.js","ngsa/js/index_31ad23dc_r24-02-0_b0_t240129-161140.js","ngsa/js/csrViewStoreNotifyMe_836d5172_r24-02-0_b0_t240129-161140.js","ngsa/js/VCmsMediaSSR_1101c01c_r24-02-0_b0_t240129-161140.js","ngsa/js/eventBus_552c1ba1_r24-02-0_b0_t240129-161140.js","ngsa/js/safariCheck_11313f0b_r24-02-0_b0_t240129-161140.js","ngsa/js/SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js","ngsa/js/i18n_4b81f106_r24-02-0_b0_t240129-161140.js","ngsa/js/_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js","ngsa/css/SvgIcon_0ec91b45_r24-02-0_b0_t240129-161140.css","ngsa/js/LscoLazyLoadDirective_02fa23a1_r24-02-0_b0_t240129-161140.js","ngsa/js/VResponsivePicture_fb50e2e9_r24-02-0_b0_t240129-161140.js","ngsa/js/imageUtils_fcbf42ca_r24-02-0_b0_t240129-161140.js","ngsa/css/VResponsivePicture_4d17c684_r24-02-0_b0_t240129-161140.css","ngsa/js/VLinkWrapper_89f0cc15_r24-02-0_b0_t240129-161140.js","ngsa/js/cmsContentHelper_f68cc642_r24-02-0_b0_t240129-161140.js","ngsa/js/typeOf_b861069e_r24-02-0_b0_t240129-161140.js","ngsa/css/VLinkWrapper_50953258_r24-02-0_b0_t240129-161140.css","ngsa/css/VCmsMediaSSR_4852a88c_r24-02-0_b0_t240129-161140.css","ngsa/js/Modal_886b6642_r24-02-0_b0_t240129-161140.js","ngsa/js/trapFocus_6aa864f5_r24-02-0_b0_t240129-161140.js","ngsa/js/SpinnerSkeleton_362db941_r24-02-0_b0_t240129-161140.js","ngsa/css/SpinnerSkeleton_85496d2d_r24-02-0_b0_t240129-161140.css","ngsa/css/Modal_8faad7d6_r24-02-0_b0_t240129-161140.css","ngsa/js/RadioButton_aacab2f5_r24-02-0_b0_t240129-161140.js","ngsa/css/RadioButton_e202aee1_r24-02-0_b0_t240129-161140.css","ngsa/css/LoyaltyCustomerRaffleModal_42a0da6a_r24-02-0_b0_t240129-161140.css"]))),ze="_Site_LoyaltyCustomerPage",je={components:{SvgIcon:Z,Modal:pe,SectionRow:he,PersonalizedBenefits:Ve,RaffleModal:qe},data(){return{totalPoints:0,memberInfo:{},transactions:[],showEarningHistoryModal:!1,qrImagePath:null,benefitsColumnContent:{},benefitsInstructions:[],progressBarStep:80,progressBarStart:7,progressBarCheckPoints:[0,500,1e3,2e3,2500],raffleData:{},countriesQuery:null}},computed:{...$(U,["isLoyaltyConsumerIdEmail","isRedTabGlobalEnabled","paths","defaultCurrency"]),...R("userProfileState",["record","updateUserRecord"]),...R("loyaltyBenefitsState",["raffleModalOpen","updateUserLoyaltyData"]),...X("loyaltyBenefitsState",["personalizedBenefits"]),...$(ne,["country","locale","isLSE"]),countryOfEnrollment(){var i,o,r,a;return this.record?(((i=this.record.country)==null?void 0:i.name)??((o=this.record.loyaltyProfile)==null?void 0:o.Country))||((a=this.countriesQuery)==null?void 0:a.getCountry((r=this.record.loyaltyProfile)==null?void 0:r.LoyaltyZoneCode)):""},currencyName(){var e;return((e=this.defaultCurrency)==null?void 0:e.name)||""},countryCodeWithPageId(){return this.country&&fe.filter(e=>e.Country_Code===this.country)[0].Country_Code.toUpperCase().concat(ze)},downloadAppSubtitle(){return this.$t("i18n.downloadAppSubtitle")},enrollmentDate(){var e,i,o;return(e=this.memberInfo)!=null&&e.EnrollmentDate&&((o=(i=B(this.memberInfo.EnrollmentDate))==null?void 0:i.toLocaleDateString)==null?void 0:o.call(i,this.localeIntl,{month:"short",year:"numeric"}))||""},getBenefitExpDate(e){let i="";if(e.expiryDate&&(i=e.expiryDate.toLocaleDateString),e.benefit.pointsExpiryInDays){const o=B(e.createdAt);o.setDate(o.getDate()+e.benefit.pointsExpiryInDays),i=o.toLocaleDateString}return i},showEarningHistory(){return!!Object.keys(this.earningHistory).length},coinsDueToExpire(){var o,r;if(!this.transactions.length)return{};const i=this.transactions.slice().sort((a,s)=>B(a.ExpirationDate)-B(s.ExpirationDate)).find(a=>a.ExpirationDate!==null);return i?{points:i.PointsGross,date:`${((r=(o=B(i.ExpirationDate))==null?void 0:o.toLocaleDateString)==null?void 0:r.call(o,this.localeIntl,{month:"2-digit",year:"numeric",day:"2-digit"}))||""}`}:{}},showCoinsDueToExpire(){return!!Object.keys(this.coinsDueToExpire).length},leviAppleAppUrl(){return this.isLSE?this.envUtil("NGS_ENV_LEVI_APPSTORE_URL_LSE"):this.envUtil("NGS_ENV_LEVI_APPSTORE_URL")},leviGoogleAppUrl(){return this.isLSE?this.envUtil("NGS_ENV_LEVI_GOOGLEPLAY_URL_LSE"):this.envUtil("NGS_ENV_LEVI_GOOGLEPLAY_URL")},earningHistory(){if(!this.transactions.length)return{};const o=this.transactions.filter(r=>r.points&&r.points!=="0"&&r.transactionType!==D.TRANSACTION_TYPE_ASSIGNED&&r.transactionType!==D.TRANSACTION_TYPE_ASSIGNED).map(r=>{const a=new Date(parseInt(r.date,10)).toLocaleDateString(),s=r.expiryDate?new Date(parseInt(r.expiryDate,10)).toLocaleDateString():null;let h="",f="",v="",m="",p="points";return r.benefit&&(r.benefit.status===D.EXPIRED?h="i18n.loyaltyHistoryPointsType.loyaltyHistoryPointsExpired":h=r.benefit.pointType===D.EARN?"i18n.loyaltyHistoryPointsType.loyaltyHistoryPointsEarned":"i18n.loyaltyHistoryPointsType.loyaltyHistoryPointsUsed",f=r.benefit.description[this.locale],v=r.benefit.pointType,m=r.benefit.status,p=r.benefit.type),{points:r.points,benefitDescription:f,transactionType:r.type,pointType:v,actionDateText:h,date:a,expirationDate:s,benefitStatus:m,benefitType:p}}).slice().sort((r,a)=>B(r.date)-B(a.date));return o.reverse(),o},getProgressWidth(){let e=0,i=0,o="",r=0,a=0;this.totalPoints>2500?(e=this.progressBarStep*4,a=0):this.totalPoints>=2e3?(e=this.progressBarStep*3,i=2e3,a=500):this.totalPoints>=1e3?(e=this.progressBarStep*2,i=1e3,a=1e3):this.totalPoints>=500?(e=this.progressBarStep,i=500,a=500):this.totalPoints>=0&&(e=this.progressBarStart,i=0,a=500);const s=(this.totalPoints-i)/a;return r=s<1?s*this.progressBarStep:0,o=`${e+r}px`,o},getRaffleData(){return this.raffleData}},methods:{...V(le,["displayProgressSpinner","hideProgressSpinner"]),...V(re,["fetchLoyaltyTransactions"]),googlePlayClick(){L("google play store")},appStoreClick(){L("ios app store")},faqsClick(){L("faqs")},learnMoreClick(){L("learn more")},viewEarningHistory(){this.showEarningHistoryModal=!0,ce("summary","view earning history")},handle247Click(){de("email subscription","submit")},closeModal(){this.showEarningHistoryModal=!1},fetchLoyaltyData(){return this.$store.dispatch("userProfileState/fetchLoyaltyData")},fetchLoyaltyTransactionsMethod(){return this.fetchLoyaltyTransactions({numberOfLastDaysActivities:"365"})},fetchTransactions(){Promise.all([this.fetchLoyaltyTransactionsMethod()]).then(e=>{this.transactions=e[0].transactions.filter(i=>{const o=B(i.ExpirationDate);return!(i.ActionId!==1&&i.ActionId!==100&&i.ExpirationDate!==null&&o<Date.now())})})},fetchBenefits(){return this.isRedTabGlobalEnabled?this.$store.dispatch("loyaltyBenefitsState/fetchBenefits",{pageId:this.countryCodeWithPageId,pageType:"Account"}):this.$store.dispatch("loyaltyBenefitsState/fetchBenefits",{pageId:"Loyalty Customer Page",pageType:"Account"})},fetchContactData(){return this.$store.dispatch("userProfileState/fetchLSEContactData")},fetchQRCode(){return this.$store.dispatch("loyaltyBenefitsState/fetchQRCode")},setBenefitsContent(){this.benefitsColumnContent={header:this.$t("i18n.loyaltyBenefits.benefitList.header"),benefits:[{name:"freeShipping",imageName:"loyalty-free-shipping",title:this.$t("i18n.freeShippingEasyReturns"),copy:this.$t("i18n.loyaltyBenefits.benefitList.benefits[0].copy")},{name:"earlyAccess",imageName:"loyalty-early-access",title:this.$t("i18n.loyaltyBenefits.benefitList.benefits[1].title"),copy:this.$t("i18n.loyaltyBenefits.benefitList.benefits[1].copy")},{name:"earnCoins",imageName:"loyalty_coins",title:this.$t("i18n.loyaltyBenefits.benefitList.benefits[2].title"),copy:this.$t("i18n.loyaltyBenefits.benefitList.benefits[2].copy")},{name:"birthdayRewardsw",imageName:"loyalty-birthday-rewards",title:this.$t("i18n.loyaltyBenefits.benefitList.benefits[3].title"),copy:this.$t("i18n.loyaltyBenefits.benefitList.benefits[3].copy")}]},this.setInstructionList()},setInstructionList(){this.benefitsInstructions=[{title:this.$t("i18n.loyaltyBenefits.instructionsList[0].title"),copy:this.$t("i18n.loyaltyBenefits.instructionsList[0].copy")},{title:this.$t("i18n.loyaltyBenefits.instructionsList[1].title"),copy:this.$t("i18n.loyaltyBenefits.instructionsList[1].copy")}]},mapCoinType(e){let i="";switch(e){case D.EXPIRE:i=this.$t("i18n.loyaltyHistoryPointsType.loyaltyHistoryPointsExpiry");break;default:i=this.$t("i18n.loyaltyHistoryPointsType.loyaltyCoinsHistoryActionUsed");break}return i},reachedMileStone(e){return this.totalPoints>=e},showRuffleModal(e){var i;e&&(this.raffleData=(i=e==null?void 0:e.shared_content)==null?void 0:i.raffle_content[0],this.raffleData.userPoints=this.totalPoints,this.raffleData.benefitId=e.benefit_id,this.raffleData.benefitCost=this.getBenefitCost(e.benefit_id),this.raffleData.userEmail=this.memberInfo.email,this.raffleData.benefitName=e.benefit_name,this.$store.dispatch("loyaltyBenefitsState/showRaffleModal",!0))},getBenefitCost(e){var o;let i=0;return((o=this.personalizedBenefits)==null?void 0:o.length)>0&&this.personalizedBenefits.filter(a=>{var s;return((s=a==null?void 0:a.benefitDetails)==null?void 0:s.benefitId)===e}).map(a=>{var s;return i=((s=a==null?void 0:a.benefitDetails)==null?void 0:s.pointsFixed)||0,i}),i},updateAfterRedeem(){Promise.all([this.fetchLoyaltyData(),this.fetchBenefits()]).then(e=>{var i;return!e[0]||e[0].message||!e[0].totalPoints?Promise.reject(((i=e[0])==null?void 0:i.message)||this.$t("i18n.OtherError")):(this.totalPoints=e[0].totalPoints,this.raffleData.userPoints=this.totalPoints,this.raffleData.availableBenefits=this.personalizedBenefits,e)}),this.$store.dispatch("loyaltyBenefitsState/UpdateLoyaltyData",!1)},updateAfterUserRecordUpdated(){this.displayProgressSpinner(),Promise.all([this.fetchLoyaltyData(),this.fetchLoyaltyTransactionsMethod(),this.fetchContactData(),this.fetchQRCode(),this.fetchBenefits()]).then(e=>{var i,o,r;return!e[0]||e[0].message||!e[0].totalPoints?Promise.reject(((i=e[0])==null?void 0:i.message)||this.$t("i18n.OtherError")):(this.totalPoints=e[0].totalPoints,!e[1]||e[1].message||!e[1].transactions?Promise.reject(((o=e[1])==null?void 0:o.message)||this.$t("i18n.OtherError")):(this.transactions=e[1].transactions.filter(a=>{const s=B(a.ExpirationDate);return!(a.ActionId!==1&&a.ActionId!==100&&a.ExpirationDate!==null&&s<Date.now())}),!e[2]||e[2].message?Promise.reject(((r=e[2])==null?void 0:r.message)||this.$t("i18n.OtherError")):(this.memberInfo=e[2].getLSEContactData,e[3]&&e[3].qrcode&&(this.qrImagePath=`url(data:image/png;base64,${e[3].qrcode})`),e)))}).finally(()=>{this.hideProgressSpinner()})}},created(){this.setBenefitsContent(),this.updateUserRecord&&this.updateAfterUserRecordUpdated()},async mounted(){this.countriesQuery=await Fe(),N.$on("showRaffleModal",this.showRuffleModal)},beforeUnmount(){N.$off("showRaffleModal",this.showRuffleModal)},watch:{updateUserLoyaltyData(e){e&&this.updateAfterRedeem()},updateUserRecord(e){e&&this.updateAfterUserRecordUpdated()}}},E=e=>(Q("data-v-4e2353d8"),e=e(),Y(),e),Qe={class:"lsco-col-md-17"},Ye={class:"member-content"},We={class:"lsco-row"},Ke=E(()=>t("div",{class:"loyalty-customer-banner lsco-col-xs-21 lsco-col-md-16 lsco-col-md-offset-8"},null,-1)),Xe={class:"lsco-col-xs-21 lsco-col-md-8 member-card-container"},Ze=E(()=>t("div",{class:"red-tab-logo"},null,-1)),Je={class:"customer-name"},et={class:"member-id"},tt={key:0},it={key:1},st={key:0,class:"qrcode-container"},nt={class:"lsco-col-xs-21 lsco-col-md-8 coin-balance"},ot={class:"coin-balance-container lsco-row"},at=E(()=>t("div",{class:"coin-balance-icon"},null,-1)),lt={class:"lsco-row coins-amount"},rt={class:"coin-progress-container"},ct={xmlns:"http://www.w3.org/2000/svg",class:"coin-progress-mask",width:"340",height:"22",viewBox:"0 0 337 12",fill:"none"},dt=E(()=>t("rect",{y:"3",width:"337",height:"8",rx:"4",fill:"#C9C9C9"},null,-1)),pt=["width"],ut=["fill","stroke"],ft=["cx","fill","stroke"],ht=["cx","fill","stroke"],yt=["cx","fill","stroke"],mt=["cx","fill","stroke"],_t={class:"loyalty-customer-container"},gt={class:"personalized-benefits"},bt={class:"member-benefits"},vt={class:"lsco-row member-benefit left"},Ct={class:"lsco-col-xs-21 lsco-col-md-7"},kt={class:"left"},St={class:"lsco-icon"},Bt={class:"benefit-text"},wt={class:"lsco-col-xs-21 lsco-col-md-7 lsco-col-md-offset-1 instruction-column"},Tt={class:"right"},Et={class:"instruction-text"},Dt=["innerHTML"],Pt={class:"banner-container"},It=E(()=>t("div",{class:"banner-app-247"},null,-1)),Lt={class:"banner-body"},At={class:"download-app-title"},Mt={class:"app-download"},$t=["href"],Rt=["href"],xt=["innerHTML"],Ht=E(()=>t("div",{class:"modal-title"},null,-1)),Nt={class:"lsco-col-xs-offset-2 lsco-col-xs-offset-right-2 lsco-col-md-offset-1 lsco-col-md-offset-right-0 lsco-col-md-7"},Ut={class:"modal-title"},Ot={class:"lsco-row"},Gt={class:"lsco-icon"},Vt={key:0},Ft={class:"lsco-row points-action-date"},qt={key:0},zt={key:1};function jt(e,i,o,r,a,s){const h=b("SvgIcon"),f=b("section-row"),v=b("PersonalizedBenefits"),m=b("router-link"),p=b("Modal"),g=b("RaffleModal");return l(),d("div",Qe,[t("div",Ye,[u(f,{top:""},{default:y(()=>[t("div",We,[Ke,t("div",Xe,[Ze,t("div",Je,[t("p",null,c(e.record.firstName),1),t("p",null,c(e.record.lastName),1)]),t("div",et,[e.isLoyaltyConsumerIdEmail?(l(),d("span",tt,c(e.$t("i18n.loyaltycustomerMemberId"))+": "+c(e.record.uid),1)):(l(),d("span",it,c(e.$t("i18n.loyaltycustomerMemberId"))+": "+c(e.record.loyaltyID),1))]),a.qrImagePath?(l(),d("div",st,[e.isLoyaltyConsumerIdEmail?(l(),d("div",{key:0,class:"qrcode-image",style:F({backgroundImage:a.qrImagePath})},null,4)):(l(),d("div",{key:1,class:"barcode-image",style:F({backgroundImage:a.qrImagePath})},null,4))])):_("",!0)]),t("div",nt,[t("div",ot,[t("header",null,[at,t("span",null,c(e.$t("i18n.loyaltyCustomerCoinBalance")),1),t("span",{class:"coin-details-link",onClick:i[0]||(i[0]=(...n)=>s.viewEarningHistory&&s.viewEarningHistory(...n)),onKeyup:i[1]||(i[1]=A((...n)=>s.viewEarningHistory&&s.viewEarningHistory(...n),["enter"]))},c(e.$t("i18n.detailsLinkText")),33)]),t("div",lt,[t("span",null,c(a.totalPoints)+" "+c(e.$t("i18n.loyaltycustomerCoinsAmount")),1)]),t("span",null,c(e.$t("i18n.earningCoinsMeterTitle",{_currency_:s.currencyName})),1),t("div",rt,[(l(),d("svg",ct,[dt,t("rect",{class:"coin-progress-indicator",y:"3",width:s.getProgressWidth,height:"8",rx:"4",fill:"#C41230"},null,8,pt),t("circle",{cx:"7",cy:"7",r:"5.5",fill:s.reachedMileStone(0)?"#C41230":"#C9C9C9",stroke:s.reachedMileStone(0)?"#C41230":"#C9C9C9","stroke-width":"3"},null,8,ut),t("circle",{cx:a.progressBarStep,cy:"7",r:"5.5",fill:s.reachedMileStone(500)?"#C41230":"#C9C9C9",stroke:s.reachedMileStone(500)?"#C41230":"#C9C9C9","stroke-width":"3"},null,8,ft),t("circle",{cx:a.progressBarStep*2,cy:"7",r:"5.5",fill:s.reachedMileStone(1e3)?"#C41230":"#C9C9C9",stroke:s.reachedMileStone(1e3)?"#C41230":"#C9C9C9","stroke-width":"3"},null,8,ht),t("circle",{cx:a.progressBarStep*3,cy:"7",r:"5.5",fill:s.reachedMileStone(2e3)?"#C41230":"#C9C9C9",stroke:s.reachedMileStone(2e3)?"#C41230":"#C9C9C9","stroke-width":"3"},null,8,yt),t("circle",{cx:a.progressBarStep*4,cy:"7",r:"5.5",fill:s.reachedMileStone(2500)?"#C41230":"#C9C9C9",stroke:s.reachedMileStone(2500)?"#C41230":"#C9C9C9","stroke-width":"3"},null,8,mt)])),u(h,{name:`coin-progress-indicator_${e.defaultCurrency.isocode}`,class:"coin-milestones",title:"coin milestones"},null,8,["name"])])])])])]),_:1})]),t("div",_t,[t("div",gt,[u(v)]),t("div",bt,[u(f,null,{default:y(()=>[t("div",vt,[t("div",Ct,[t("header",null,c(a.benefitsColumnContent.header),1),t("ul",kt,[(l(!0),d(w,null,T(a.benefitsColumnContent.benefits,n=>(l(),d("li",{key:n.name},[t("div",null,[t("header",null,[t("span",St,[u(h,{name:n.imageName,class:"benefit-icon",title:"coins icon"},null,8,["name"])]),t("div",null,c(n.title),1)]),t("div",Bt,c(n.copy),1)])]))),128))])]),t("div",wt,[t("ul",Tt,[(l(!0),d(w,null,T(a.benefitsInstructions,(n,C)=>(l(),d("li",{key:C},[t("div",null,[t("header",null,[t("div",null,c(n.title),1)]),t("div",Et,c(n.copy),1)])]))),128))]),t("span",{class:"coin-history-link",onClick:i[2]||(i[2]=(...n)=>s.viewEarningHistory&&s.viewEarningHistory(...n)),onKeyup:i[3]||(i[3]=A((...n)=>s.viewEarningHistory&&s.viewEarningHistory(...n),["enter"]))},c(e.$t("i18n.loyaltyCoinHistory")),33)])])]),_:1})]),u(f,null,{default:y(()=>[t("header",{class:"app-247-title",innerHTML:e.$t("i18n.leviTwoFourSevenApp")},null,8,Dt),t("div",Pt,[It,t("div",Lt,[t("header",At,c(e.$t("i18n.downloadAppTitle")),1),t("p",null,c(s.downloadAppSubtitle),1),t("div",Mt,[t("a",{title:"iOS App Store Download",target:"_blank",onClick:i[4]||(i[4]=n=>s.appStoreClick()),class:"appstore-icon",href:s.leviAppleAppUrl},[u(h,{name:"apple-appstore-badge",alt:"Apple Store Download",width:"120",height:"40"})],8,$t),t("a",{title:"Google Play Download",target:"_blank",class:"googlePlay-icon",onClick:i[5]||(i[5]=n=>s.googlePlayClick()),href:s.leviGoogleAppUrl},[u(h,{name:"google-play-badge",alt:"Google Play Download",width:"135",height:"40"})],8,Rt)]),u(m,{class:"learn-more",onClick:i[6]||(i[6]=n=>s.learnMoreClick()),to:e.paths.redTabGlobal,target:"_blank"},{default:y(()=>[H(c(e.$t("i18n.learnMoreAboutApp")),1)]),_:1},8,["to"])])])]),_:1}),u(f,null,{default:y(()=>[t("p",{class:"questions",onClick:i[7]||(i[7]=n=>s.faqsClick()),onKeyup:i[8]||(i[8]=A(n=>s.faqsClick(),["enter"])),innerHTML:e.$t("i18n.checkFAQs",{_url_:e.paths.help})},null,40,xt)]),_:1})]),a.showEarningHistoryModal?(l(),S(p,{key:0,class:"earning-history-modal",onCloseModal:s.closeModal,"modal-name":"EarningHistoryModal"},{header:y(()=>[Ht]),body:y(()=>[t("div",null,[t("div",Nt,[t("div",Ut,c(e.$t("i18n.loyaltyCoinHistory")),1),t("ul",null,[(l(!0),d(w,null,T(s.earningHistory,n=>(l(),d("li",{key:n.date},[t("div",null,[t("div",Ot,[t("span",Gt,[u(h,{name:"coins-flat",class:"coins-icon",title:"coins icon"})]),t("b",null,c(` ${n.points>0?"+":""}${n.points} ${e.$t(`i18n.loyaltyHistoryBenefitType.${n.benefitType}`)} `),1),n.benefitDescription?(l(),d("span",Vt,c(n.benefitDescription),1)):_("",!0)]),t("div",Ft,[t("span",null,[n.date?(l(),d("span",qt,c(`${e.$t(n.actionDateText)} ${n.date}`),1)):_("",!0),n.expirationDate?(l(),d("span",zt,c(`, ${e.$t("i18n.loyaltyHistoryPointsType.loyaltyHistoryPointsExpires")} ${n.expirationDate}`),1)):_("",!0)])])])]))),128))])])])]),_:1},8,["onCloseModal"])):_("",!0),e.raffleModalOpen?(l(),S(g,{key:1,"raffle-data":s.getRaffleData,onFetchTransactions:s.fetchTransactions},null,8,["raffle-data","onFetchTransactions"])):_("",!0)])}const Qt=P(je,[["render",jt],["__scopeId","data-v-4e2353d8"]]);const Yt={components:{HeadingContainer:Ce,SvgIcon:Z,VLinkWrapper:M,VCmsTileFacade:ke},data:()=>({appleMusicRedemptionUrl:"",benefitsContainAppleMusicBenefit:!1}),computed:{...R("loyaltyBenefitsState",["contentTypeId"]),...R("auth",["loggedIn"]),...X({getBenefits:"loyaltyBenefitsState/benefits",userMayHaveBenefits:"loyaltyBenefitsState/userMayHaveBenefits"}),...$(U,["logoName"]),programBenefits(){return[{logoName:"free-shipping",headline:this.$t("i18n.freeShippingEasyReturns"),copy:this.$t("i18n.freeShippingEasyReturnsCopy")},{logoName:"exclusive-access",headline:this.$t("i18n.exclusiveAccess"),copy:this.$t("i18n.exclusiveAccessCopy")},{logoName:"tailor-shop",headline:this.$t("i18n.tailorShopBenefits"),copy:this.$t("i18n.tailorShopBenefitsCopy")},{logoName:"birthday",headline:this.$t("i18n.birthdayReward"),copy:this.$t("i18n.birthdayRewardCopy")}]},benefitsMappedToTileFacadeSchema(){return this.getBenefits().map(e=>{var s;const{promoGroupId:i}=e.benefitDetails;((s=e==null?void 0:e.bannerContent)==null?void 0:s.benefit_name)==="applemusicbenefit2023"&&(this.benefitsContainAppleMusicBenefit=!0);const{eyebrow:o,headline:r,...a}=e.bannerContent;return{...a,eyebrow_text:o,headline_text:r,promoGroupId:i}})}},mounted(){q()},watch:{loggedIn(){q()},userMayHaveBenefits:{async handler(e){e&&(await this.$store.dispatch("loyaltyBenefitsState/fetchBenefitsForRoute",oe.MY_RED_TAB_BENEFITS),this.fetchAppleMusicRedemptionData())},immediate:!0}},methods:{createDetailsModalLink(e){return ve(e.modal_content)},async fetchAppleMusicRedemptionData(){this.benefitsContainAppleMusicBenefit&&(this.appleMusicRedemptionUrl=await this.$store.dispatch("loyaltyBenefitsState/fetchAppleMusicRedemptionData"))},isAppleMusicBenefitAndHasUrl(e){var i;if(typeof window=="object"){const o=(i=this.$route)==null?void 0:i.hash.split("#")[1];o&&this.$nextTick(()=>{const r=document.getElementById(`benefit-${o}`);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})}return e.benefit_name==="applemusicbenefit2023"&&this.appleMusicRedemptionUrl!==null},isAppleMusicBenefitAndHasUrlOrNotIsAppleBenefit(e){return e.benefit_name!=="applemusicbenefit2023"||e.benefit_name==="applemusicbenefit2023"&&this.appleMusicRedemptionUrl!==null},appleMusicCTA(){return{link_text:this.$t("i18n.tryItForFreeText"),link_url:this.appleMusicRedemptionUrl,link_aria_label:this.$t("i18n.tryItForFreeText")||""}}}},Wt=e=>(Q("data-v-b073d64e"),e=e(),Y(),e),Kt={class:"red-tab-benefits"},Xt={class:"icon-wrapper"},Zt={class:"red-tab-benefits__heading-details-wrapper"},Jt={class:"red-tab-benefits__heading-details lsco-col-xs-19 lsco-col-md-9"},ei={class:"benefit-tiles-title"},ti={class:"benefit-tiles"},ii=Wt(()=>t("p",null,null,-1)),si={class:"program-benefits"},ni={class:"icon-wrapper"};function oi(e,i,o,r,a,s){const h=b("svg-icon"),f=b("heading-container"),v=b("v-cms-tile-facade"),m=b("v-link-wrapper");return l(),d("div",Kt,[u(f,{class:"red-tab-benefits__heading-container lsco-col-xs-25 lsco-col-md-16",title:e.$t("i18n.myRedTabBenefits")},{"content-above":y(()=>[t("div",Xt,[u(h,{name:"red-tab-logo","set-aria-hidden":"",title:"Levi’s® Red Tab™"})])]),details:y(()=>[t("div",Zt,[t("div",Jt,[t("div",null,c(e.$t("i18n.myRedTabBenefitsDescription1")),1),t("div",null,c(e.$t("i18n.myRedTabBenefitsDescription2")),1)])])]),_:1},8,["title"]),t("div",ei,c(e.$t("i18n.currentBenefits")),1),t("div",ti,[(l(!0),d(w,null,T(s.benefitsMappedToTileFacadeSchema,(p,g)=>(l(),d("div",{key:p.headline,class:j(["benefit-tile__wrapper",{even:g%2===0},{odd:g%2===1},{hidden:p.benefit_name==="applemusicbenefit2023"&&e.appleMusicRedemptionUrl===null}])},[s.isAppleMusicBenefitAndHasUrlOrNotIsAppleBenefit(p)?(l(),S(v,{key:0,class:"lsco-col-xs-21 lsco-col-md-5",id:`benefit-${p.benefit_name}`,"render-as-content-type-uid":"tile_single_media_v1","track-as-content-type-uid":e.contentTypeId,"tile-data":p,"tile-position":g,"section-id":"redTabBenefits","publish-date-module":p.updated_at},null,8,["id","track-as-content-type-uid","tile-data","tile-position","publish-date-module"])):_("",!0),s.isAppleMusicBenefitAndHasUrl(p)?(l(),S(m,{key:1,class:"link","cta-link":s.appleMusicCTA()},{default:y(()=>[H(c(e.$t("i18n.tryItForFreeText")),1)]),_:1},8,["cta-link"])):_("",!0),ii,s.isAppleMusicBenefitAndHasUrlOrNotIsAppleBenefit(p)&&s.createDetailsModalLink(p)?(l(),S(m,{key:2,"cta-link":s.createDetailsModalLink(p)},{default:y(()=>[H(c(e.$t("i18n.detailsLinkText")),1)]),_:2},1032,["cta-link"])):_("",!0)],2))),128))]),t("div",si,[(l(!0),d(w,null,T(s.programBenefits,p=>(l(),d("div",{key:p.logoName,class:"program-benefits__heading-item-wrapper"},[u(f,{class:"program-benefits__heading-item lsco-col-xs-19 lsco-col-md-4",title:p.headline,details:p.copy},{"content-above":y(()=>[t("div",ni,[u(h,{name:p.logoName,"set-aria-hidden":""},null,8,["name"])])]),_:2},1032,["title","details"])]))),128))])])}const ai=P(Yt,[["render",oi],["__scopeId","data-v-b073d64e"]]),li={components:{RedTabBenefits:ai,LoyaltyCustomer:Qt},computed:{...$(U,["isRedTabGlobalEnabled","paths"])}};function ri(e,i,o,r,a,s){const h=b("LoyaltyCustomer"),f=b("RedTabBenefits");return e.isRedTabGlobalEnabled?(l(),S(h,{key:0})):(l(),S(f,{key:1}))}const Yi=P(li,[["render",ri]]);export{Yi as default};