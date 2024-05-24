import{a as L}from"./vuex.esm-bundler_aa359dca_r24-02-0_b0_t240129-161140.js";import{H as S,L as c,A as l,B as f,_ as h,D as g,N as k,I as d,O as u,a7 as x,G as m,J as p,V as v,W,an as q}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import{o as z}from"./objectHasKeys_aced35f1_r24-02-0_b0_t240129-161140.js";import{u as Y,c as J,R as K}from"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import{u as Q}from"./csrGlobalStoreCMSSitewide_0c2e7b56_r24-02-0_b0_t240129-161140.js";import{B as X}from"./ButtonFilledAndLink_63b1b973_r24-02-0_b0_t240129-161140.js";import{C as Z}from"./CheckboxItem_c90003c9_r24-02-0_b0_t240129-161140.js";import{S as $}from"./SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js";import{r as ee}from"./rules_bb747cab_r24-02-0_b0_t240129-161140.js";import{s as te}from"./serverToUserErrorMessageTransformer_631b8f39_r24-02-0_b0_t240129-161140.js";import{H as oe}from"./HeadingContainer_bcedf16a_r24-02-0_b0_t240129-161140.js";import{V as ae}from"./VCmsMediaSSR_1101c01c_r24-02-0_b0_t240129-161140.js";import{E as se,u as ie}from"./AlertNotice_f548d739_r24-02-0_b0_t240129-161140.js";import{T as le}from"./TextField_69ef4928_r24-02-0_b0_t240129-161140.js";import{P as re}from"./PasswordField_e5e3802a_r24-02-0_b0_t240129-161140.js";import{B as ne,D as de}from"./DateSelect_49429832_r24-02-0_b0_t240129-161140.js";import{k as me}from"./lsanalytics-loyalty_c6fb8ea0_r24-02-0_b0_t240129-161140.js";import{u as ce}from"./useBirthday_a7115f27_r24-02-0_b0_t240129-161140.js";import{N as he}from"./NewsLetterChoiceSelect_84d7fd52_r24-02-0_b0_t240129-161140.js";import{D as ue}from"./DropdownGroup_166fff12_r24-02-0_b0_t240129-161140.js";import{j as be}from"./lsanalytics-login_d6e95fa1_r24-02-0_b0_t240129-161140.js";import{R as r}from"./formTypes_72e4bcc9_r24-02-0_b0_t240129-161140.js";import{C as ye}from"./ClickwrapNotice_237df641_r24-02-0_b0_t240129-161140.js";import{_ as fe}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import"./typeOf_b861069e_r24-02-0_b0_t240129-161140.js";import"./cmsContentHelper_f68cc642_r24-02-0_b0_t240129-161140.js";import"./i18n_4b81f106_r24-02-0_b0_t240129-161140.js";import"./csrGlobalStoreAppState_f9ff4bfa_r24-02-0_b0_t240129-161140.js";import"./regexLocalization_16c032f3_r24-02-0_b0_t240129-161140.js";import"./VRawMarkup_119eefb5_r24-02-0_b0_t240129-161140.js";import"./eventBus_552c1ba1_r24-02-0_b0_t240129-161140.js";import"./safariCheck_11313f0b_r24-02-0_b0_t240129-161140.js";import"./LscoLazyLoadDirective_02fa23a1_r24-02-0_b0_t240129-161140.js";import"./VResponsivePicture_fb50e2e9_r24-02-0_b0_t240129-161140.js";import"./imageUtils_fcbf42ca_r24-02-0_b0_t240129-161140.js";import"./VLinkWrapper_89f0cc15_r24-02-0_b0_t240129-161140.js";import"./dateRules_139f881d_r24-02-0_b0_t240129-161140.js";import"./regexRules_cc2f3e2b_r24-02-0_b0_t240129-161140.js";import"./ErrorMessages_003296c8_r24-02-0_b0_t240129-161140.js";const ge={mixins:[ee,te,z],inject:["mq"],emits:["login","existingUserFound","userCreated","change"],components:{ButtonAndLink:X,CheckboxItem:Z,ClickwrapNotice:ye,ErrorMessage:se,HeadingContainer:oe,SvgIcon:$,VCmsMediaSSR:ae,PasswordField:re,TextField:le,BirthdaySeparator:ne,DateSelect:de,NewsLetterChoiceSelect:he,DropdownSelect:ue},props:{useEmail:{type:String,default:""},type:{type:String,default:r.DEFAULT,validate(e){return r.includes(e)?!(e===r.POST_SUBSCRIPTION&&!this.useEmail):!1}},subsourceIdentifier:{type:String,default:""}},setup(e){const{data:t,tempUser:s,v$:o,register:n}=ie(e),{birthdayData:a,birthdayValidator:b,checkFromToValidation:y}=ce();return{firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password,emailOptInChecked:t.emailOptInChecked,otherErrorsExist:t.otherErrorsExist,submitting:t.submitting,tempUser:s,v$:o,register:n,birthday:a.birthday,birthdayValidator:b,checkFromToValidation:y}},data(){return{emailValidationServerErrors:[],month:null,year:null,dateSelectDisabled:!1,globalModalAccountCreationContentTimeoutComplete:!1}},computed:{...S(Y,["locale","country","isNonLoyaltyEuCountry","countryAllowsAutoOptInForEmail","isLSE","isLSA","isLoyaltyEu","isLoyalty"]),...S(Q,["globalModalAccountCreationContent"]),...S(J,["isRedTabEnabled","isNonLoyalty","logoName","isRedTabGlobalEnabled","logoNameAltTextTranslationName","paths","isOptInImprovementEnabled","isOptInImprovementEnabledInLSA"]),...L("emailSubscriptionState",["subSource"]),...L("userProfileState",["uid"]),clickwrapNoticeIdreadyToShow(){return this.objectHasKeys(this.globalModalAccountCreationContent)||this.globalModalAccountCreationContentTimeoutComplete},optInMessages(){var e,t;return[{text:(e=this.globalModalAccountCreationContent)==null?void 0:e.re_marketing_opt_in,value:!0},{text:(t=this.globalModalAccountCreationContent)==null?void 0:t.re_marketing_opt_out,value:!1}]},emailValidationOptions(){return{errorTextAllReplaceWith:{i18nPath:"errors.regex"},customErrors:this.emailValidationServerErrors}},iconNamerootClassObj(){let e=[`register-${this.type}`];return this.type===r.DEFAULT?this.isLoyaltyEu?e=["lsco-col-md-offset-0","lsco-col-md-16","lsco-col-md-offset-right-1"]:e=["lsco-col-md-offset-0","lsco-col-md-15","lsco-col-md-offset-right-1"]:this.type===r.POST_SUBSCRIPTION&&(e=["lsco-col-md-offset-2","lsco-col-md-7","lsco-col-md-offset-right-2"]),e},leftPanelClassObj(){return{"lsco-col-xs-21":!this.type===r.DEFAULT,"lsco-col-xs-25":this.type===r.DEFAULT,"lsco-col-md-8":this.type===r.DEFAULT,"lsco-row-md--middle":this.type!==r.PAGE}},innerClassObj(){switch(this.type){case r.DEFAULT:return this.isLoyaltyEu?["lsco-col-xs-offset-2","lsco-col-xs-21","lsco-col-md-offset-1","lsco-col-md-7"]:["lsco-col-xs-offset-2","lsco-col-xs-21","lsco-col-md-offset-1","lsco-col-md-6"];case r.POST_SUBSCRIPTION:return["lsco-col-xs-offset-2","lsco-col-xs-21","lsco-col-md-offset-0","lsco-col-md-7"];case r.PAGE:return["lsco-col-xs-offset-2","lsco-col-xs-21","lsco-col-md-offset-3","lsco-col-md-7"];default:return[]}},namesClassObjects(){return this.type!==r.POST_SUBSCRIPTION||this.mq.current==="mobile"?{full:["first-child",{"name-container--page":this.type===r.PAGE}],first:["first-name-input"],last:[]}:{full:["name-row","first-child",{"name-container--page":this.type===r.PAGE}],first:["lsco-col-md-3"],last:["lsco-col-md-3","lsco-col-md-offset-1"]}},firstNameFieldName(){return this.$t("i18n.formFirstNameLabel").toLowerCase()},lastNameFieldName(){return this.$t("i18n.userProfileLastNameLabel").toLowerCase()},passwordFieldNameinteractionTrackingCallParams(){const e=this.emailOptInChecked?"yes":"no";return{section:"join modal",actionFields:`email: ${this.email}, subscribe: ${e}`}},submitDisabled(){return this.firstName.length===0&&this.lastName.length===0&&this.email.length===0&&this.password.length===0},monthClasses(){return["lsco-col-xs-9","lsco-col-md-2"]},yearClassesisWelcomeBenefitsAvailable(){var e,t,s;return this.isLoyalty&&((s=(t=(e=this.globalModalAccountCreationContent)==null?void 0:e.registration_benefits)==null?void 0:t.benefit)==null?void 0:s.length)>0}},createdmounted(){(this.countryAllowsAutoOptInForEmail||this.type===this.$_types.POST_SUBSCRIPTION)&&(this.emailOptInChecked=!0),this.sendViewAnalytics(),setTimeout(5e3)},methods:{resetServerErrorschangeOptInStatus(e){var t;this.emailOptInChecked=JSON.parse((t=e==null?void 0:e.target)==null?void 0:t.value)},async onRegisterClick(){var s,o,n,a,b;if(this.useEmail&&(this.email=this.useEmail),this.isLSE&&this.birthday!==""&&((s=this.birthday)!=null&&s.split("/").map(.some(y=>Number.isInteger(y)))&&!await this.checkFromToValidation()){(b=(a=(n=(o=this.$refs)==null?void 0:o.birthdaySeparator)==null?void 0:n.$refs)==null?void 0:a.birthdayContainer)==null||b.focus();return}const{section:e,actionFields:t}=this.interactionTrackingCallParams;await this.register({onEtoUserFound:()=>this.$emit("existingUserFound",this.email,!0),onExistingLevisUserFound:()=>this.$emit("existingUserFound",this.email,!1,!0),onValidFormSubmit:onUserRegistered:isDOBDirty:this.isDOBDirty(),referralId:this.getReferralId(),getDobFieldInfo:)},isDOBDirtygetReferralId(){const{name:e,query:t}=this.$route,s="storeid";return e===K.REGISTER&&(t!=null&&t[s])?t==null?void 0:t[s]:null},sendViewAnalytics(){this.type!==r.PAGE&&be()},birthdayValidate(){var e,t;return(t=(e=this.birthdayValidator)==null?void 0:e.birthday)==null?void 0:t.$errors.length},async getDobFieldInfo(){var e;if(this.isLSE&&this.birthday!==""&&!this.birthday.includes("null")){const t=await this.checkFromToValidation();if(t){const[s,o,n]=((e=this.birthday)==null?void 0:e.split("/"))||[];return t?{birth_date:{year:n,month:o,day:s}}:!1}}return this.isLSA&&(this.month||this.year)?(this.month!==""&&String(this.month).length===1&&(this.month=`0${this.month}`),this.month!==""&&this.year!==""?{birth_date:{year:String(this.year),month:String(this.month),day:"01"}}:!1):!1},handleChoiceSelect},pe={class:"logo-container"},Ce={key:1,class:"cms-media-image-container lsco-col-md-12"},Se={class:"copy"},ke={class:"benefits"},Ee={class:"benefit-data"},_e={class:"icons"},Ie={class:"benefit-title"},Te=["aria-label"],Ne={key:3,class:"optInDropdown"},Ae={class:"remarketing-headline"},we={class:"remarketing-copy"},Oe={class:"drop-down-info"},Le={key:4,class:"birthday-wrapper"},ve={class:"birthday-email"},Pe=["innerHTML"];function Fe(e,t,s,o,n,a){var E,_,I,T,N,A,w,O;const b=c("svg-icon"),y=c("heading-container"),P=c("VCmsMediaSSR"),F=c("ErrorMessage"),C=c("TextField"),V=c("PasswordField"),M=c("DropdownSelect"),R=c("BirthdaySeparator"),U=c("date-select"),D=c("checkbox-item"),B=c("news-letter-choice-select"),j=c("clickwrap-notice"),G=c("button-and-link");return a.readyToShow?(l(),f("section",{key:0,class:h([a.rootClassObj,"register-content"])},[a.isWelcomeBenefitsAvailable?m("",!0):(l(),f("div",{key:0,class:h(["cms-media",a.leftPanelClassObj])},[s.type===e.$_types.DEFAULT?(l(),g(y,{key:0,class:"register-heading-container",title:e.globalModalAccountCreationContent.headline||"",details:e.globalModalAccountCreationContent.copy||""},{"content-above":k(()=>[d("div",pe,[u(b,{class:h(["logo--levi",{nonLoyal:e.isNonLoyalty}]),"set-aria-hidden":!1,name:e.logoName,title:e.$t(`i18n.${e.logoNameAltTextTranslationName(e.logoName)}`)},null,8,["class","name","title"])])]),_:1},8,["title","details"])):s.type===e.$_types.PAGE&&a.mq.current==="desktop"?(l(),f("div",Ce,[e.globalModalAccountCreationContent?(l(),g(P,x({key:0,class:"cms-media-image"},e.globalModalAccountCreationContent.image_join_page_aem,{"media-link":e.globalModalAccountCreationContent.image_link,"alt-text":e.globalModalAccountCreationContent.image_join_page_alt_text,"column-width":12,"aspect-ratio-width":4,"aspect-ratio-height":5}),null,16,["media-link","alt-text"])):m("",!0),u(b,{class:h(["logo--levi",{nonLoyal:e.isNonLoyalty}]),name:e.logoName,title:"Logo"},null,8,["class","name"])])):m("",!0)],2)),a.isWelcomeBenefitsAvailable&&s.type===e.$_types.DEFAULT?(l(),f("div",{key:1,class:h([a.innerClassObj,"benefit-content"])},[u(b,{name:"red-tab-global-logo-horizontal",title:"red-tab-logo",class:"red-tab-global-logo"}),d("p",Se,p((E=e.globalModalAccountCreationContent)==null?void 0:E.copy),1),d("div",ke,[(l(!0),f(v,null,W((I=(_=e.globalModalAccountCreationContent)==null?void 0:_.registration_benefits)==null?void 0:I.benefit,(i,H)=>(l(),f("div",{key:H},[d("div",Ee,[d("div",_e,[u(b,{name:i.icon,title:i.title},null,8,["name","title"])]),d("div",Ie,p(i.title),1)])]))),128))])],2)):m("",!0),d("div",{class:h(["inner-content",a.innerClassObj])},[d("form",{method:"POST",class:"register-form",action:"javascript:void(0);","aria-label":e.$t("i18n.join"),onSubmit:t[13]||(t[13]=},[s.type!==e.$_types.DEFAULT?(l(),f(v,{key:0},[e.globalModalAccountCreationContent?(l(),g(y,{key:0,class:"register-form-heading-container",title:e.globalModalAccountCreationContent.headline||"",details:e.globalModalAccountCreationContent.copy||""},q({_:2},[s.type===e.$_types.POST_SUBSCRIPTION?{name:"content-above",fn:k(()=>[u(b,{class:h(["logo--levi",{nonLoyal:e.isNonLoyalty}]),name:e.logoName,title:"Logo"},null,8,["class","name"])]),key:"0"}:void 0]),1032,["title","details"])):m("",!0)],64)):m("",!0),o.otherErrorsExist?(l(),g(F,{key:1,class:h(["error-message",{"error-message--page":s.type===e.$_types.PAGE},{"error-message--default":s.type===e.$_types.DEFAULT}]),"html-message":e.$t("i18n.registrationErrorMessageDefault")},null,8,["class","html-message"])):m("",!0),d("div",{class:h(["name-container",...a.namesClassObjects.full])},[u(C,{modelValue:o.firstName,"onUpdate:modelValue":t[0]||(t[0]=i=>o.firstName=i),class:h(["registration__input","name__input",...a.namesClassObjects.first]),"label-text":e.$t("i18n.formFirstNameLabel"),name:a.firstNameFieldName,errors:o.v$.firstName.$errors,placeholder:e.$t("i18n.formFirstNameLabel"),"show-label":!!o.firstName,"max-length":127,"is-required":!0},null,8,["modelValue","class","label-text","name","errors","placeholder","show-label"]),u(C,{modelValue:o.lastName,"onUpdate:modelValue":t[1]||(t[1]=i=>o.lastName=i),class:h(["registration__input","name__input",...a.namesClassObjects.last]),"label-text":e.$t("i18n.userProfileLastNameLabel"),name:a.lastNameFieldName,errors:o.v$.lastName.$errors,placeholder:e.$t("i18n.userProfileLastNameLabel"),"show-label":!!o.lastName,"max-length":127,"is-required":!0},null,8,["modelValue","class","label-text","name","errors","placeholder","show-label"])],2),s.type===e.$_types.DEFAULT||s.type===e.$_types.PAGE?(l(),g(C,{key:2,modelValue:o.email,"onUpdate:modelValue":t[2]||(t[2]=i=>o.email=i),class:"registration__input form-field--addition","label-text":e.$t("i18n.formEmailLabel"),errors:o.v$.email.$errors,placeholder:e.$t("i18n.formEmailLabel"),"set-aria-details-id":a.clickwrapNoticeId,"max-length":128,"is-required":!0},null,8,["modelValue","label-text","errors","placeholder","set-aria-details-id"])):m("",!0),u(V,{modelValue:o.password,"onUpdate:modelValue":t[3]||(t[3]=,class:h(["registration__input","name__input","password__input"]),"label-text":e.$t("i18n.passwordText"),errors:o.v$.password.$errors,"show-password-help-text":"","max-length":255,"is-required":!0},null,8,["modelValue","label-text","errors"]),s.type!==e.$_types.POST_SUBSCRIPTION&&e.isOptInImprovementEnabledInLSA?(l(),f("div",Ne,[d("h2",Ae,p((T=e.globalModalAccountCreationContent)==null?void 0:T.re_marketing_headline),1),d("p",we,p((N=e.globalModalAccountCreationContent)==null?void 0:N.re_marketing_copy),1),u(M,{"is-disabled":!1,"hide-label":!0,items:a.optInMessages,onChange:t[4]||(t[4]=,"model-value":o.emailOptInChecked,value:o.emailOptInChecked},null,8,["items","model-value","value"]),d("p",Oe,p(e.$t("i18n.lsaNewsletterPlaceHolderText")),1)])):m("",!0),e.isLoyalty&&s.type!==e.$_types.POST_SUBSCRIPTION?(l(),f("div",Le,[d("h2",null,p(e.$t("i18n.birthdayOptional")),1),d("p",ve,p(e.$t("i18n.emailDisountForYourBirthday")),1),e.isLoyaltyEu&&s.type!==e.$_types.POST_SUBSCRIPTION?(l(),g(R,{key:0,validator:(w=(A=o.birthdayValidator)==null?void 0:A.birthday)==null?void 0:w.$errors,disabled:!1,modelValue:o.birthday,"onUpdate:modelValue":[t[5]||(t[5]=i=>o.birthday=i),t[6]||(t[6]=i=>e.$emit("change",a.birthdayValidate(o.birthday)))],ref:"birthdaySeparator",onChange:t[7]||(t[7]=},null,8,["validator","modelValue"])):m("",!0),e.isLSA?(l(),g(U,{key:1,"is-birthday":"",onChange:t[8]||(t[8]=i=>e.$emit("change",{month:n.month,year:n.year})),ref:"dateSelect","class-name":"date-select-item","include-day":!1,"is-disabled":n.dateSelectDisabled,"month-class":a.monthClasses,"selected-month":n.month,"onUpdate:selectedMonth":t[9]||(t[9]=i=>n.month=i),"selected-year":n.year,"onUpdate:selectedYear":t[10]||(t[10]=i=>n.year=i),"show-month-label":n.month!==null,"show-year-label":n.year!==null,"year-class":a.yearClasses},null,8,["is-disabled","month-class","selected-month","selected-year","show-month-label","show-year-label","year-class"])):m("",!0)])):m("",!0),s.type!==e.$_types.POST_SUBSCRIPTION&&!e.isOptInImprovementEnabled?(l(),g(D,{key:5,class:"unsubscribe-checkbox",id:"unsubscribe-checkbox",checked:o.emailOptInChecked,"onUpdate:checked":t[11]||(t[11]=i=>o.emailOptInChecked=i)},{default:k(()=>[d("label",{for:"unsubscribe-checkbox",innerHTML:e.globalModalAccountCreationContent.clickwrap_checkbox||""},null,8,Pe)]),_:1},8,["checked"])):m("",!0),e.isLoyaltyEu&&s.type!==e.$_types.POST_SUBSCRIPTION?(l(),g(B,{key:6,"handle-choice-select":a.handleChoiceSelect,"email-opt-in-checked":o.emailOptInChecked},null,8,["handle-choice-select","email-opt-in-checked"])):m("",!0),u(j,{"content-id":a.clickwrapNoticeId,html:((O=e.globalModalAccountCreationContent)==null?void 0:O.clickwrap_notice)||""},null,8,["content-id","html"]),u(G,{class:"register-button-n-link","button-text":e.$t("i18n.join"),"link-text":e.$t("i18n.logInWithAnExistingAccount"),onLinkClick:t[12]||(t[12]=,disabled:a.submitDisabled||o.submitting},null,8,["button-text","link-text","disabled"])],40,Te)],2)],2)):m("",!0)}const Ct=fe(ge,[["render",Fe],["__scopeId","data-v-8e8684fe"]]);export{Ct as default};