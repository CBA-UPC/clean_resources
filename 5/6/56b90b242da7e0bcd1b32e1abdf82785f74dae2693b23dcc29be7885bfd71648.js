/*! For license information please see async-purchase-feature-baf5a983ee464a240cab.js.LICENSE.txt */
"use strict";(globalThis.webpackChunktinderweb=globalThis.webpackChunktinderweb||[]).push([[85340],{145726:(e,a,s)=>{s.r(a),s.d(a,{persistConfig:()=>T,reducer:()=>A});var r=s(343599),E=s(991931),t=s.n(E),o=s(112954),n=s.n(o),_=s(794128),S=s(351843),i=s(983330),c=s(25462),l=s(954995),p=s(473610),P=s(969240);const R=e=>{const a=e?.filter((e=>e.product_type&&i.ar.includes(e.product_type)));return a?.[0]},u=e=>{const a={};return e?.filter((e=>i.A5.includes(e.product_type||""))).forEach((e=>{e.product_type&&(a[e.product_type]=e)})),a},A=(0,r.ZP)(((e,a)=>{switch(a.type){case p.PURCHASE_SUCCESSFUL_POST:{const s=a.payload;e.purchaseInfo=s,e.tieredPurchases=R([s]),e.alternativeSubPurchases=u([s]),e.submissionInProgress=!1,e.purchaseAttempts=0;break}case p.PURCHASE_GET_LATEST_CARD_INFO_RESPONSE:e.isGettingPaymentMethods=!1,e.latest=a.payload;break;case p.PURCHASE_GET_PAYMENT_METHODS:e.isGettingPaymentMethods=!0;break;case p.PURCHASE_GET_PAYMENT_METHODS_RESPONSE:e.paymentMethods=a.payload,e.isGettingPaymentMethods=!1,e.isPaymentSaving=P.default.isPaymentSaving;break;case p.PURCHASE_GET_PAYMENT_METHODS_ERROR_RESPONSE:case p.PURCHASE_GET_PAYMENT_METHODS_CLEAR_LOADING:e.isGettingPaymentMethods=!1,e.isPaymentSaving=P.default.isPaymentSaving;break;case p.PURCHASE_ADD_CART:e.cart=a.payload.productId??"",e.purchaseInfo=null,e.from=a.payload.from??0,e.shouldAutoStartBoost=a.payload.shouldAutoStartBoost??!1,e.shouldAutoStartCompoundBoost=a.payload.shouldAutoStartCompoundBoost??!1,e.shouldAutoRewind=a.payload.shouldAutoRewind??!1,e.purchasedFromIncognito=a.payload.purchasedFromIncognito??!1;break;case p.PURCHASE_REMOVE_PAYWALL_SOURCE:e.from=null;break;case p.PURCHASE_ENABLE_AUTORENEW_RESPONSE:case p.PURCHASE_DISABLE_AUTORENEW_RESPONSE:{const{product_type:s}=a.payload;i.ar.includes(s)?e.tieredPurchases=a.payload:e.alternativeSubPurchases={[s]:a.payload};break}case l.FETCH_PROFILE_SUCCESS:{const s=t()(a,["payload","data","purchase","purchases"]);s&&(e.tieredPurchases=R(s),e.alternativeSubPurchases=u(s));break}case p.PURCHASE_SAVE_BRAINTREE_PAYMENT_METHOD:{const{paymentMethod:s}=a.payload;n()(e,["isPaymentSaving",s],!0);break}case p.PURCHASE_UPDATE_LATEST_CARD_RESPONSE:e.latest={card:{number:a.payload?.cardSummary},variant:a.payload?.paymentMethod},e.cardUpdateSuccess=!0,e.submissionInProgress=!1;break;case p.PURCHASE_UPDATE_LATEST_CARD_ERR_RESPONSE:e.cardUpdateSuccess=!1,e.submissionInProgress=!1;break;case p.PURCHASE_UPDATE_LATEST_CARD_CLEAR_SUCCESS:e.cardUpdateSuccess=!1;break;case p.PURCHASE_RESTORE_ACCOUNT_CLEAR_ERROR_RESPONSE:e.restoreAccountSuccessConfirmation=!1;break;case p.PURCHASE_ATTEMPT:e.purchaseAttempts+=1;break;case p.PURCHASE_POST:case p.PURCHASE_UPDATE_LATEST_CARD:case p.PURCHASE_RESTORE_ACCOUNT:case p.PURCHASE_UPDATE_EMAIL:e.submissionInProgress=!0;break;case p.PURCHASE_GET_TAX:e.getTaxInProgress=!0;break;case p.PURCHASE_RESTORE_ACCOUNT_ERROR_RESPONSE:case p.PURCHASE_ERROR_RESPONSE:e.submissionInProgress=!1,e.restoreAccountSuccessConfirmation=!1;break;case p.PURCHASE_3D_ERROR_RESPONSE:e.submissionInProgress=!1,e.restoreAccountSuccessConfirmation=!1,e.cart=a.payload.productId??"",e.purchaseInfo=null;break;case p.PURCHASE_RESTORE_ACCOUNT_RESPONSE:e.tieredPurchases=a.payload,e.submissionInProgress=!1,e.restoreAccountSuccessConfirmation=!0,e.restoreToken=a.payload.restore_token??null;break;case p.PURCHASE_GET_TAX_DETAILS_RESPONSE:{const s=a.payload;e.taxPrice=Number(s.taxAmount),e.finalPrice=Number(s.grandTotal),e.taxRate=s.taxRate,e.getTaxInProgress=!1;break}case p.PURCHASE_CLEAR_TAX_DETAILS:e.taxPrice=null,e.finalPrice=null,e.taxRate=null;break;case p.PURCHASE_UPDATE_EMAIL_SUCCESS:e.submissionInProgress=!1,e.updateEmailSuccessConfirmation=!0;break;case p.PURCHASE_UPDATE_EMAIL_ERROR_RESPONSE:e.submissionInProgress=!1,e.updateEmailSuccessConfirmation=!1;break;case p.PURCHASE_UPDATE_EMAIL_CLEAR_ERROR_RESPONSE:e.updateEmailSuccessConfirmation=!1;break;case p.SET_CHECKOUT_PAGE_TYPE:e.pageType=a.payload;break;case p.SET_CHECKOUT_PAGE_VERSION:e.pageVersion=a.payload;break;case c.REDEEM_INCENTIVE_INTRO_PRICE_PRODUCT:e.submissionInProgress=!0;break;case c.INCENTIVE_INTRO_PRICE_REDEEM_SUCCESS:e.purchaseInfo=a.payload,e.submissionInProgress=!1;break;case c.INCENTIVE_INTRO_PRICE_REDEEM_ERROR:e.submissionInProgress=!1;break;case p.PURCHASE_FORM_VALIDATION:e.isFormValidated=a.payload.isFormValidated;break;case p.PURCHASE_UPDATE_FORM:e.formData=a.payload.formData;break;case p.SET_PAYMENT_METHOD:e.paymentMethod=a.payload;break;case p.SET_CC_TYPE:e.ccType=a.payload;break;case p.SET_3DS_TYPE:e.threeDSVersion=a.payload;break;case p.SET_UPSELL_SHOWN:{const s=t()(a.payload,["upsellType"]),r=t()(a.payload,["upsellTs"],0),E=t()(a.payload,["stopShowingUpsell"]),o=t()(e,["upsells",s,"amountShown"],0);r&&n()(e,["upsells",s,"timestamp"],r),n()(e,["upsells",s,"amountShown"],o+1),n()(e,["upsells",s,"shown"],!0),E&&n()(e,["upsells",s,"stopShowingUpsell"],E);break}case p.SET_SAVE_CARD_BOX:e.saveCardBitwise=a.payload;break;case p.SET_ADYEN_DEVICE_FINGERPRINT:e.adyenDeviceFingerprint=a.payload.fingerprint;break;case p.SET_BRAINTREE_DEVICE_FINGERPRINT:e.braintreeError=!1,e.braintreeDeviceFingerprint=a.payload.fingerprint,n()(e,["isPaymentSdkLoading",p.PAYMENT_TYPE_PAYPAL],!1);break;case p.SET_BRAINTREE_ERROR:e.braintreeError=a.payload.hasError,n()(e,["isPaymentSdkLoading",p.PAYMENT_TYPE_PAYPAL],!1),n()(e,["isPaymentSaving",p.PAYMENT_TYPE_PAYPAL],!1);break;case p.SET_BRAINTREE_CLIENT_TOKEN:e.braintreeError=!1,e.braintreeClientToken=a.payload;break;case p.PURCHASE_SET_PAYMENT_SDK_LOADING:{const{paymentType:s,isLoading:r}=a.payload;n()(e,["isPaymentSdkLoading",s],r);break}case(0,S.dh)(a.type):return P.default;default:return e}}),P.default),T={transforms:[(0,_.n)(["upsells.boost.timestamp","upsells.attachAMessage.timestamp","upsells.newLikes.timestamp","upsells.goldHomeTooltip.timestamp","upsells.homeScreenTooltip.shown","upsells.primetimeboost.amountShown","upsells.primetimeboost.timestamp","upsells.priorityLikes.timestamp","upsells.superlike.timestamp","upsells.webDiscountBanner.amountShown","upsells.webDiscountBanner.timestamp","upsells.webDiscountBanner.stopShowingUpsell"])],version:2}}}]);