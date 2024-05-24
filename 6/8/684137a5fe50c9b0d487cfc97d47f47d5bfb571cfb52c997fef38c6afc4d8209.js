"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[302],{l8MI:function(e,t,a){a.r(t);var n=a("QslU"),i=a("Oz0t"),s=a("V67U"),r=a.n(s),l=a("bBVy"),o=a("Yk0W"),c=a("TIci"),d=a("lEcB"),_=(0,i.lazy)((function(){return a.e(9645).then(a.bind(a,"UXKy"))})),u=(0,i.lazy)((),E=(0,i.lazy)((),g=function(e){var t,a=e.user,s=e.page,r=e.adId,g=e.origin,A=e.sellerId,p=e.defaultMessage,m=e.trackingData,S=void 0===m?{}:m,O=e.isSitePrivate,C=e.isMilanunciosOrigin,M=e.isCnetOrigin,T=e.onClose,f=void 0===T?function(){}:T,N=e.ad,h=void 0===N?{}:N,L=(0,i.useContext)(l.Z).domain,v=L.get("config").get("VERIFICATION"),I=v.PHONE_REQUIRED,b=v.ORIGINS,y=(0,i.useState)(!1),R=y[0],x=y[1],P=(0,o.Z)((function(){return L.get("needs_verification_use_case").execute({origin:b.CONVERSATION_LEAD,userId:a.userId})})),D=P.data,j=P.isLoading,k=(null==D||null==(t=D.status)?void 0:t.phoneRequired)===I.STATUSES.MANDATORY,G=return j?null:(C||M)&&A?(null==a?void 0:a.userId)?R||(null==a?void 0:a.isEmailVerified)?k?(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(E,{visible:!0,onClose:G})}):(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(_,{visible:!0,adId:r,sellerId:A,defaultMessage:p,trackingData:S,page:s,isSitePrivate:O,onClose:f,ad:h})}):(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(u,{adId:r,userId:null==a?void 0:a.userId,origin:g,visible:!0,onClose:G,userEmail:null==a?void 0:a.email})}):(0,n.jsx)(c.ZP,{page:s,onboardingContext:c.M3.CONTACT_MESSAGE,initialStep:c.Ss.ONBOARDING,visible:!0,onSuccess:function(e){var t=e.authenticationMethod;x(t===c.z9.SOCIAL_LOGIN||t===c.z9.SOCIAL_REGISTER)},onDismiss:f}):(0,n.jsx)(d.Z,{visible:!0,adId:r,trackingData:S,defaultMessage:p,isSitePrivate:O,onClose:f,ad:h})};g.displayName="AdContactMessageModal",g.propTypes={user:r().object,origin:r().string,sellerId:r().string.isRequired,page:r().string.isRequired,adId:r().string,defaultMessage:r().string,trackingData:r().object,isSitePrivate:r().bool,isMilanunciosOrigin:r().bool,isCnetOrigin:r().bool,onClose:r().func,ad:r().object},t.default=g},"Nl+Y":function(e,t,a){var n=a("fhF1"),i=a("QslU"),s=(a("Oz0t"),a("7aI0")),r=a.n(s),l=a("V67U"),o=a.n(l),c=a("tLCh"),d="ma-ButtonBasic",_=function e(t){var a=t.action,s=t.children,l=t.className,o=t.complementaryModifiers,c=t.disabled,_=t.fullWidth,u=t.href,E=t.icon,g=t.kind,A=t.isSubmit,p=t.link,m=t.linkFactory,S=t.size,O=t.target,C=t.rightIcon,M=t["aria-pressed"],T=f=d+" "+d+"--"+e.kind[g],N=o?o.map(():[],h=r().apply(void 0,[""+f,l,d+"--"+S,_&&d+"--fullWidth",c&&d+"--disabled"].concat((0,n.Z)(N)));return p?(0,i.jsxs)(m,{href:u,target:O,rel:"_blank"===O?"noopener":void 0,onClick:T,className:h,children:[E&&(0,i.jsx)("span",{className:d+"-icon",children:E}),(0,i.jsx)("span",{className:d+"-content",children:s}),C&&(0,i.jsx)("span",{className:d+"-icon",children:C})]}):(0,i.jsxs)("button",{onClick:T,className:h,disabled:c,"aria-pressed":M,type:A?"submit":"button",children:[E&&(0,i.jsx)("span",{className:d+"-icon",children:E}),s&&(0,i.jsx)("span",{className:d+"-content",children:s}),C&&(0,i.jsx)("span",{className:d+"-icon",children:C})]})};_.kind={primary:"primary",search:"search",secondary:"secondary",neutral:"neutral",tertiary:"tertiary",accent:"accent",danger:"danger"},_.size={large:"large",medium:"medium",small:"small",xsmall:"xsmall"},_.complementaryModifiers={marginRight:"marginRight",marginLeft:"marginLeft",focused:"focused",hideLabelMobile:"hideLabelMobile",rounded:"rounded"},_.displayName="ButtonBasic",_.propTypes={action:o().func,children:o().node,className:o().string,complementaryModifiers:o().arrayOf(o().oneOf(Object.values(_.complementaryModifiers))),disabled:o().bool,fullWidth:o().bool,href:o().string,icon:o().node,isSubmit:o().bool,kind:o().oneOf(Object.values(_.kind)),link:o().bool,linkFactory:o().func,rightIcon:o().node,size:o().oneOf(Object.values(_.size)),target:o().string,"aria-pressed":o().bool},_.defaultProps={disabled:!1,fullWidth:!1,isSubmit:!1,kind:_.kind.primary,link:!1,linkFactory:c.Z,size:_.size.medium},t.Z=_},lEcB:function(e,t,a){a.d(t,{M:function(){return k},Z:function(){return F}});var n=a("beVP"),i=a("11lP"),s=a("2GZr"),r=a("QslU"),l=a("Oz0t"),o=a("7aI0"),c=a.n(o),d=a("V67U"),_=a.n(d),u=a("bPwt"),E=a("bBVy"),g=a("WrYh"),A=a("UT5F"),p=a("op6l"),m=a("Nl+Y"),S=a("f+Nb"),O=a("2S0f"),C="ma-ModalContactMessage-captcha",M=function(e){var t=e.srcImage,a=(0,l.useContext)(E.Z).i18n,n=(0,l.useState)(!1),i=n[0],s=n[1];return(0,r.jsxs)("div",{className:C,children:[(0,r.jsx)("p",{className:C+"-title",children:a.t("MODAL_CONTACT_MESSAGE_CAPTCHA_FORM_TITLE")}),(0,r.jsx)(p.Z,{value:!i,children:function(){return(0,r.jsx)(O.ZP,{variant:O.nb.square,width:"280px",height:"80px",style:{display:"block",marginLeft:"auto",marginRight:"auto"},"data-testid":"modal-contact-message-captcha-image"})}}),(0,r.jsx)("img",{className:C+"-image",src:t,alt:"captcha",onLoad:)]})};M.displayName="ModalContactMessageCaptcha",M.propTypes={srcImage:_().string};var T=M,f={NAME:"name",EMAIL:"email",PHONE:"phone",MESSAGE:"message",CONSENT:"consent",CAPTCHA_RESPONSE:"captchaResponse"},N="ma-ModalContactMessage-form",h=function(e){var t,a=e.accountName,n=e.userName,i=e.defaultMessage,s=e.onContactClick,o=e.captchaImage,c=e.fields,d=e.onSetFields,_=(0,l.useContext)(E.Z),u=_.i18n,g=_.domain.get("config").get("COMMON").VALIDATIONS.validateEmail,A=(0,l.useState)({}),O=A[0],C=A[1],M=((t={})[f.EMAIL]=a,t[f.NAME]=n,t[f.MESSAGE]=i,t),h=function(e){var t=e.i18n,a=e.initFields,n=e.isLoggedIn,i=e.hasCaptcha;return{form:{id:"form-modal-ad-contact",type:"group",fields:[{type:"text",display:"",id:f.CAPTCHA_RESPONSE,required:!0,hidden:!i,hint:t.t("MODAL_CONTACT_MESSAGE_CAPTCHA_FORM_PLACEHOLDER"),constraints:[{property:{notnull:""},message:t.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_FIELD_EMPTY")}]},{type:"text",display:"",id:f.NAME,label:t.t("MODAL_CONTACT_MESSAGE_FORM_NAME_LABEL"),required:!0,hidden:i,constraints:[{property:{notnull:""},message:t.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_FIELD_EMPTY")}],value:a[f.NAME]},{type:"text",display:"",id:f.EMAIL,label:t.t("MODAL_CONTACT_MESSAGE_FORM_EMAIL_LABEL"),required:!0,hidden:i,disabled:n,constraints:[{property:{notnull:""},message:t.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_FIELD_EMPTY")}],value:a[f.EMAIL]},{type:"text",display:"",id:f.PHONE,label:t.t("MODAL_CONTACT_MESSAGE_FORM_PHONE_LABEL"),hidden:i,constraints:[{property:{pattern:S.KV},message:t.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_FIELD_PHONE")}]},{type:"text",display:"multiline",id:f.MESSAGE,label:t.t("MODAL_CONTACT_MESSAGE_FORM_MESSAGE_LABEL"),hidden:i,constraints:[{property:{notnull:""},message:t.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_FIELD_EMPTY")}],value:a[f.MESSAGE]},{type:"picker",display:"checkbox",id:f.CONSENT,value:"true",required:!0,hidden:n||i,constraints:[{property:{pattern:"^true$"},message:t.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_FIELD_CONSENT")}]}]}}}({i18n:u,isLoggedIn:!!a,hasCaptcha:!!o,initFields:M});return(0,r.jsxs)("div",{className:N,children:[(0,r.jsx)(p.Z,{value:o,children:),(0,r.jsxs)(S.ZP,{fields:c,initFields:M,setFields:d,errors:O,renderer:function(e){var t,a=e.id;return((t={})[f.CONSENT]={nodeLabel:(0,r.jsx)("label",{className:N+"-terms",dangerouslySetInnerHTML:{__html:u.t("MODAL_CONTACT_MESSAGE_PRIVACY_CONSENT_CHECK",{linkUseOfTermsStart:'<a class="'+N+'-link" href="'+u.url("/LINK_LEGAL_SEGMENT/LINK_USE_OF_TERMS")+'" target="_blank">',linkUseOfTermsEnd:"</a>",linkPolicyStart:'<a class="'+N+'-link" href="'+u.url("/LINK_LEGAL_SEGMENT/LINK_PRIVACY_POLICY")+'" target="_blank">',linkPolicyEnd:"</a>"})}})},t)[a]},setErrors:C,checkCustomConstraint:function(e){var t;if(e.fieldId===f.EMAIL&&(e.fieldValue&&!g(e.fieldValue)))return(t={})[f.EMAIL]=[u.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_FIELD_PHONE")],t},formJSON:h,onSubmitSuccessfully:s,children:[(0,r.jsx)(p.Z,{value:!o&&!a,children:function(){return(0,r.jsx)("p",{className:N+"-consent-text",dangerouslySetInnerHTML:{__html:u.t("MODAL_CONTACT_MESSAGE_PRIVACY_CONSENT_DESCRIPTION",{breakLine:"</br>",linkPolicyStart:'<a class="'+N+'-link" href="'+u.url("/LINK_LEGAL_SEGMENT/LINK_PRIVACY_POLICY")+'" target="_blank">',linkPolicyEnd:"</a>"})}})}}),(0,r.jsx)("div",{className:N+"-submit","data-testid":"MODAL_CONTACT_MESSAGE_SUBMIT",children:(0,r.jsx)(m.Z,{fullWidth:!0,isSubmit:!0,children:u.t(o?"MODAL_CONTACT_MESSAGE_CAPTCHA_FORM_BUTTON":"MODAL_CONTACT_MESSAGE_FORM_SUBMIT")})})]})]})};h.displayName="ModalContactMessageForm",h.propTypes={accountName:_().string,userName:_().string,defaultMessage:_().string,onContactClick:_().func,captchaImage:_().string,fields:_().object,onSetFields:_().func},h.FieldKeys=f;var L=h,v=a("AgMK"),I=a("FhAj"),b=a("3Fx5"),y=a("7Tse"),R=a("XErn"),x=a("ZtEa"),P="ma-ModalContactMessage-response",D=j=function(e){var t=e.isError,a=e.onClickClose,n=void 0===a?D:a,i=e.showWebChatLink,s=void 0!==i&&i,o=(0,l.useContext)(E.Z),c=o.i18n,d=o.domain.get("config").get("BASE_IMAGES_URL_STATICS"),_=d+"/images"+(t?"/common/error-image":"/search/img-message-sent")+".svg",u=t?c.t("MODAL_CONTACT_MESSAGE_ERROR_IMAGE_ALT"):c.t("MODAL_CONTACT_MESSAGE_RESPONSE_IMAGE_ALT"),g=(0,v.SS)("ff_web_hhs_contact_message_modal_response_app_cta").isActive;return(0,r.jsxs)("div",{className:P,children:[(0,r.jsx)(y.ZP,{className:P+"-upperImage",src:_,alt:u}),(0,r.jsx)(R.ZP,{className:P+"-title",size:R.ZP.sizeTypes.xl,fontWeight:R.ZP.fontWeightTypes.bold,children:t?c.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_TITLE"):c.t("MODAL_CONTACT_MESSAGE_FORM_SUCCESS_TITLE")}),(0,r.jsxs)(R.ZP,{className:P+"-description",align:R.ZP.alignTypes.center,children:[!t&&s&&(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:c.t("MODAL_CONTACT_MESSAGE_FORM_SUCCESS_WEB_CHAT",{webChatLinkStart:'<a class="'+P+'-descriptionLink" href="'+c.url("/LINK_MY_MESSAGES")+'">',webChatLinkEnd:"</a>"})}}),!t&&!s&&c.t("MODAL_CONTACT_MESSAGE_FORM_SUCCESS_DESCRIPTION"),t&&c.t("MODAL_CONTACT_MESSAGE_FORM_ERROR_DESCRIPTION")]}),g&&(0,r.jsxs)(r.Fragment,{children:[!t&&(0,r.jsx)("div",{className:P+"-appChat",children:(0,r.jsx)(R.ZP,{className:P+"-appChatText",align:R.ZP.alignTypes.center,children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:c.t("MODAL_CONTACT_MESSAGE_APP_CHAT_DESCRIPTION")}})})}),(0,r.jsx)("div",{className:P+"-trustpilot",children:(0,r.jsx)(x.Z,{dataTemplateId:x.p.SMALL})}),(0,r.jsxs)("div",{className:P+"--onlyDesktop "+P+"-qr",children:[(0,r.jsx)(R.ZP,{className:P+"-qr-title",size:R.ZP.sizeTypes.s,align:R.ZP.alignTypes.center,children:c.t("MODAL_CONTACT_MESSAGE_DOWNLOAD_APP_QR_TITLE")}),(0,r.jsx)("img",{className:P+"-qr-image",alt:c.t("MODAL_CONTACT_MESSAGE_DOWNLOAD_APP_QR_ALT"),src:d+"/images/promo/download-app-qr.1535889078.svg"})]}),(0,r.jsxs)("div",{className:P+"--onlyMobile "+P+"-downloadApp",children:[(0,r.jsx)(I.ZP,{design:I.hq.SOLID,className:P+"-downloadApp-button",link:!0,href:"https://milanuncios.onelink.me/u1dj/8o9884j5",target:"_blank",fullWidth:!0,isFitted:!0,children:c.t("MODAL_CONTACT_MESSAGE_APP_CHAT_BUTTON_DOWNLOAD_APP")}),(0,r.jsx)(I.ZP,{design:I.hq.SOLID,color:"neutral",className:P+"-downloadApp-button",onClick:n,fullWidth:!0,isFitted:!0,children:c.t("MODAL_CONTACT_MESSAGE_APP_CHAT_BUTTON_CLOSE_MODAL")})]}),(0,r.jsxs)("div",{className:P+"--onlyDesktop "+P+"-appStore",children:[(0,r.jsx)(R.ZP,{className:P+"-appStore-title",size:R.ZP.sizeTypes.s,align:R.ZP.alignTypes.center,children:c.t("MODAL_CONTACT_MESSAGE_DOWNLOAD_STORE_TITLE")}),(0,r.jsx)(b.rU,{className:P+"-appStore-link",href:c.t("SAVED_SEARCH_ANDROID_LINK"),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{alt:c.t("LINK_APP_MOBILE_FOOTER_ANDROID"),src:d+"/images/promo/logo-disponible-googlePlay.dda98bd191.png"})}),(0,r.jsx)(b.rU,{className:P+"-appStore-link",href:c.t("SAVED_SEARCH_IOS_LINK"),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{alt:c.t("LINK_APP_MOBILE_FOOTER_IOS"),src:d+"/images/promo/logo-disponible-appStore.c1747aba6d.png"})})]})]})]})};j.displayName="ModalContactMessageResponse",j.propTypes={isError:_().bool,onClickClose:_().func,showWebChatLink:_().bool};var k=j,G="ma-ModalContactMessage",Z=function(e){var t,a=e.adId,o=void 0===a?"":a,d=e.visible,_=e.trackingData,m=void 0===_?{}:_,S=e.defaultMessage,O=e.onClose,C=e.isSitePrivate,M=e.ad,T=void 0===M?{}:M,f=(0,l.useContext)(E.Z),N=f.i18n,h=f.domain,v=(0,l.useState)(!0),I=v[0],b=v[1],y=(0,l.useState)(!1),R=y[0],x=y[1],P=(0,l.useState)(!1),D=P[0],j=P[1],Z=(0,l.useState)(),F=Z[0],w=Z[1],H=(0,l.useState)({}),U=H[0],B=H[1],V=(0,l.useState)({}),z=V[0],W=V[1],K=c()(G+"-content",((t={})[G+"-content-form"]=!R&&!D,t[G+"-content-form-captcha"]=F,t));(0,g.Z)((0,n.Z)((function(){var e,t,a,n,r,l;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return S&&B({message:S}),[4,h.get("get_current_user_use_case").execute()];case 1:return e=s.sent(),t=e[0],a=e[1],t?[3,3]:[4,h.get("get_public_profile_user_use_case").execute({userId:a.id})];case 2:n=s.sent(),r=n[0],l=n[1],r?(B((),console.error(r)):B((),s.label=3;case 3:return W(U),b(!1),[2]}}))}))),(0,l.useEffect)((,[d]),(0,l.useEffect)((,[U]);var q=(0,n.Z)((function(){var e,t,a,n,r,l,c,d,_,u,E,g,A,p,S,O,M,f,N,L,v,I,b,y,R,x,P,D;return(0,s.__generator)(this,(function(s){return p=h.get("config").get("TRACKING_EVENTS_NAMES"),S=p.AD_DETAIL_CONTACT_EMAIL,O=p.CONTACT_EMAIL_LEAD,M=p.PURCHASE_GOOGLE_ANALYTICS,f=m.page_category_level1,N=m.page_category_level2,L=m.page_category_level3,v=m.page_category_level4,I=m.page_category_level5,b=m.page_category_level6,y=m.vertical,R=m.page_type,x=m.filtered_provinces,P=void 0===x?"unknown":x,D={event:S,data:(0,i.Z)({event_name_adobe:O,ad_id:o,page_category_level1:f},N&&{page_category_level2:N},L&&{page_category_level3:L},v&&{page_category_level4:v},I&&{page_category_level5:I},b&&{page_category_level6:b},{vertical:y,products:[{id:o,category:"ads",product_id:o}],page_type:R,label:m.label||"detalle",ad_site_private:C,filtered_provinces:P})},h.get("call_link_tracking_use_case").execute(D),h.get("call_link_tracking_use_case").execute({data:{event_name:M,event_name_adobe:M,event_type:S,currency:"EUR",transaction_id:T.id,value:null==(e=T.price)||null==(t=e.cashPrice)?void 0:t.value,items:[{item_id:T.id,item_name:T.title,index:1,item_brand:null==(a=T.category)?void 0:a.name,item_category:null==(n=T.categories)||null==(r=n[0])?void 0:r.name,item_category2:null==(l=T.categories)||null==(c=l[1])?void 0:c.name,item_category3:null==(d=T.categories)||null==(_=d[2])?void 0:_.name,item_category4:null==(u=T.categories)||null==(E=u[3])?void 0:E.name,price:null==(g=T.price)||null==(A=g.cashPrice)?void 0:A.value,quantity:1}]}}),[2]}))})),Y=(0,n.Z)((function(){var e,t,a;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return b(!0),[4,h.get("contact_ad_detail_use_case").execute((0,i.Z)({},z,{id:o,captchaKey:null==F?void 0:F.key}))];case 1:return e=n.sent(),t=e[0],a=e[1],t?(j(!0),[3,5]):[3,2];case 2:return a.captcha?(w(a.captcha),[3,5]):[3,3];case 3:return x(!0),[4,q()];case 4:n.sent(),n.label=5;case 5:return b(!1),[2]}}))})),Q=function(e){if(F){var t=L.FieldKeys.CAPTCHA_RESPONSE;W((function(a){var n;return(0,i.Z)({},a,((n={})[t]=e[t],n))}))}else W(e)};return(0,r.jsx)(A.Z,{visible:d,header:D||R?null:F?F?N.t("MODAL_CONTACT_MESSAGE_CAPTCHA_FORM_HEADER"):void 0:N.t("MODAL_CONTACT_MESSAGE_FORM_HEADER"),withoutIndentation:!0,onClose:O,size:R||D?void 0:A.Z.SIZES.SMALL,isResponsive:!0,children:(0,r.jsxs)("div",{className:K,children:[(0,r.jsx)(p.Z,{value:I,children:),(0,r.jsx)(p.Z,{value:!R&&!I&&!D,children:function(){return(0,r.jsx)(L,{accountName:U.email,userName:U.name,defaultMessage:U.message,onContactClick:Y,captchaImage:null==F?void 0:F.image,fields:z,onSetFields:Q})}}),(0,r.jsx)(p.Z,{value:R||D,children:)]})})};Z.displayName="ModalContactMessage",Z.propTypes={adId:_().string.isRequired,defaultMessage:_().string,visible:_().bool,isSitePrivate:_().bool,trackingData:_().object,onClose:_().func,ad:_().object};var F=Z},ZtEa:function(e,t,a){a.d(t,{p:function(){return o},Z:);var n=a("QslU"),i=a("Oz0t"),s=a("V67U"),r=a.n(s),l=a("bBVy"),o={SMALL:"54ad5defc6454f065c28af8b",LARGE:"53aa8912dec7e10d38f59f36",DROPDOWN:"5418052cfbfb950d88702476"},c=a("beVP"),d=a("2GZr"),_=a("ND5x");function u(e){var t=e.dataTemplateId,a=e.dataStyleHeight,s=void 0===a?"240px":a,r=(0,i.useContext)(l.Z).i18n,o=(0,i.useRef)(null);return function(e){(0,i.useEffect)((function(){(0,c.Z)((function(){return(0,d.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,_.v)({src:"https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js",verifier:function(){if(window.Trustpilot)return window.Trustpilot.loadFromElement(e.current,!0),!0}})];case 1:return t.sent(),[2]}}))}))()}),[])}(o),(0,n.jsx)("div",{className:"ma-SharedTrustPilotWidget",children:(0,n.jsx)("div",{ref:o,className:"trustpilot-widget","data-locale":"es-ES","data-template-id":t,"data-businessunit-id":"4be30e570000640005087a26","data-style-height":s,"data-style-width":"100%","data-theme":"light","data-tags":"App","data-stars":"4,5","data-review-languages":"es","data-font-family":"Rubik","data-text-color":"#191c1e",children:(0,n.jsx)("a",{href:"https://es.trustpilot.com/review/www.milanuncios.com",target:"_blank",rel:"noopener",children:r.t("MODAL_CONTACT_MESSAGE_TRUSTPILOT")})})})}u.displayName="SharedTrustPilotWidget",u.propTypes={dataTemplateId:r().oneOf(Object.values(o)).isRequired,dataStyleHeight:r().string}}}]);