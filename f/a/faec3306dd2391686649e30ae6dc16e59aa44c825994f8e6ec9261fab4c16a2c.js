'use strict';(function(){var cmpFile='noModule'in HTMLScriptElement.prototype?'cmp2.js':'cmp2-polyfilled.js';(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion;var tagUrl=document.currentScript.src;cmpVersion='https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=15min.lt'.replace('CMP_FILE',cmpFile);cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #19cd5a !important; "
+"   border-color: #19cd5a !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #19cd5a !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #19cd5a !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #19cd5a !important; "
+"   border-color: #19cd5a !important; "
+" } "
+" .qc-cmp-button { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #616161 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #f5f5f5 !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-ui, "
+" .qc-cmp-ui .qc-cmp-title, "
+" .qc-cmp-ui .qc-cmp-table, "
+" .qc-cmp-ui .qc-cmp-messaging, "
+" .qc-cmp-ui .qc-cmp-sub-title, "
+" .qc-cmp-ui .qc-cmp-vendor-list, "
+" .qc-cmp-ui .qc-cmp-purpose-info, "
+" .qc-cmp-ui .qc-cmp-table-header, "
+" .qc-cmp-ui .qc-cmp-beta-messaging, "
+" .qc-cmp-ui .qc-cmp-main-messaging, "
+" .qc-cmp-ui .qc-cmp-vendor-list-title{ "
+"   color: #616161 !important; "
+" } "
+" .qc-cmp-ui a, "
+" .qc-cmp-ui .qc-cmp-alt-action { "
+"   color: #000000 !important; "
+" } "
+" .qc-cmp-ui { "
+"   background-color: #f5f5f5 !important; "
+" } "
+" .qc-cmp-small-toggle.qc-cmp-toggle-on, "
+" .qc-cmp-toggle.qc-cmp-toggle-on { "
+"   background-color: #19cd5a!important; "
+"   border-color: #19cd5a!important; "
+" } "
+".qc-cmp2-summary-buttons button[mode=\"secondary\"] { border: none; background: none; color: #616161 !important; box-shadow: none;}.qc-cmp2-summary-buttons button[mode=\"secondary\"]:hover { border: none; background: none; text-decoration: underline;}"
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';var gvlVersion=2;function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','pt-br','pt-pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(gvlVersion===2&&isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(gvlVersion===3&&isSupported(document.documentElement.lang)){autoDetectedLanguage=document.documentElement.lang;}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,function(){},{"coreConfig":{"inmobiAccountId":"nSDKTP3q7Vc-R","privacyMode":["GDPR"],"hashCode":"igZ/qH+CdBz1nQzH3vljoA","publisherCountryCode":"LT","publisherName":"15min","vendorPurposeIds":[1,2,3,4,5,6,7,8,9,10],"vendorFeaturesIds":[1,2,3],"vendorPurposeLegitimateInterestIds":[3,5,7,8,9,2,4,10,6],"vendorSpecialFeaturesIds":[1,2],"vendorSpecialPurposesIds":[1,2],"googleEnabled":true,"consentScope":"service","thirdPartyStorageType":"iframe","consentOnSafari":false,"displayUi":"inEU","defaultToggleValue":"off","initScreenRejectButtonShowing":false,"initScreenCloseButtonShowing":false,"softOptInEnabled":false,"showSummaryView":true,"persistentConsentLinkLocation":3,"displayPersistentConsentLink":false,"uiLayout":"banner","publisherLogo":"https://www.15min.lt/assets/images/touchicons/15min_57x57.png?qc-size=57,57","vendorListUpdateFreq":30,"publisherPurposeIds":[],"initScreenBodyTextOption":1,"publisherConsentRestrictionIds":[],"publisherLIRestrictionIds":[],"publisherPurposeLegitimateInterestIds":[],"publisherSpecialPurposesIds":[],"publisherFeaturesIds":[],"publisherSpecialFeaturesIds":[],"stacks":[1,42],"lang_":"lt","gvlVersion":2},"premiumUiLabels":{},"premiumProperties":{"googleWhitelist":[1]},"coreUiLabels":{},"theme":{"uxPrimaryButtonTextColor":"#ffffff","uxPrimaryButtonColor":"#19cd5a","uxBackgroundColor":"#f5f5f5","uxSecondaryButtonColor":"#f5f5f5","uxSecondaryButtonTextColor":"#616161","uxToogleActiveColor":"#19cd5a","uxLinkColor":"#000000","uxFontColor":"#616161"},"nonIabVendorsInfo":{}});})();container-inner{background-color:#fc0;background-image:url(/static/images/shipment/gift.svg);background-position:22px;background-repeat:no-repeat;border:2px solid #fff;border-radius:100px;box-sizing:border-box;color:#333;font-size:12px;font-weight:700;height:56px;line-height:17px;padding:9px 0 0 67px;width:326px}.shipment-survey-container .shipment-survey-container-inner .arrow{background-image:url(/static/images/shipment/arrow_survey.svg);background-repeat:no-repeat;height:16px;position:absolute;right:19px;top:20px;width:12px}.shipment-survey-container .close{background-color:#b2b2b2;border-radius:20px;cursor:pointer;height:20px;left:-5px;position:absolute;top:-5px;width:20px}.shipment-survey-container .close:after{transform:scaleX(-1) rotate(-45deg)}.shipment-survey-container .close:after,.shipment-survey-container .close:before{background-color:#fff;border-radius:2px;content:"";display:block;height:2px;left:5px;position:absolute;top:9px;width:10px}.shipment-survey-container .close:before{transform:rotate(-45deg)}.loader-container{align-items:center;background-color:rgba(0,0,0,.5);display:none;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:999999}.lds-ellipsis{display:inline-block;height:80px;position:relative;width:80px}.lds-ellipsis div{animation-timing-function:cubic-bezier(0,1,1,0);background:#fff;border-radius:50%;height:13px;position:absolute;top:33px;width:13px}.lds-ellipsis div:first-child{animation:lds-ellipsis1 .6s infinite;left:8px}.lds-ellipsis div:nth-child(2){animation:lds-ellipsis2 .6s infinite;left:8px}.lds-ellipsis div:nth-child(3){animation:lds-ellipsis2 .6s infinite;left:32px}.lds-ellipsis div:nth-child(4){animation:lds-ellipsis3 .6s infinite;left:56px}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}#menu-events{position:relative;text-align:center}#menu-events .events-tooltip{display:none;margin-left:-93px;margin-top:-30px;position:absolute;text-align:center;width:200px}#menu-events .events-tooltip span{background:#6e6e6e;color:#fff;font-size:11px;padding:5px;position:relative;text-align:center;white-space:pre}#menu-events .events-tooltip span:after{border:5px solid hsla(0,0%,43%,0);border-top-color:#6e6e6e;content:" ";height:0;left:50%;margin-left:-5px;pointer-events:none;position:absolute;top:100%;width:0}#menu-events.active .events-container,#menu-events:hover .events-tooltip{display:block}#menu-events:hover.active .events-tooltip{display:none}#menu-events .events-button{cursor:pointer;display:inline-block;position:relative}#menu-events .events-button.has-new-messages .events-count{background-color:#d9111b}#menu-events .events-button.has-new-messages .icon{background-image:url(/static/images/menu/news-feed_red.svg)}#menu-events .events-button .icon{background-image:url(/static/images/menu/news-feed_grey.svg);background-position:50%;background-repeat:no-repeat;display:inline-block;height:15px;vertical-align:-3px;width:15px}#menu-events .events-button .events-count{background-color:#999;border:1px solid #fff;border-radius:8px;box-sizing:border-box;color:#fff;display:inline-block;font-size:12px;font-weight:700;height:17px;line-height:15px;width:25px}.events-container{box-shadow:0 0 4px 0 rgba(0,0,0,.5);display:none;position:absolute;right:-64px;text-align:left;top:28px;z-index:17}.events-container .triangle{height:10px;overflow:hidden;position:absolute;right:56px;top:-10px;transform:translateX(-50%);width:20px}.events-container .triangle:after{background:#fff;bottom:0;box-shadow:0 0 4px 0 rgba(0,0,0,.5);content:"";height:10px;left:50%;position:absolute;transform:translateX(-50%) translateY(50%) rotate(45deg);width:10px}.events-container .events-container-content{background-color:#fff;max-height:738px;overflow-y:scroll;width:400px}.events-container .events-container-content .skelbiu-progress-loader{margin:20px auto;width:90%}.events-container .events-container-content .events-count-title{color:#666;display:none;font-size:10px;line-height:14px;margin:8px 10px}.events-container .events-container-content .events-list{background-color:#fff;display:none}.events-container .events-container-content .events-list .event{border-top:1px solid #eaeaea;padding:10px 0;white-space:normal}.events-container .events-container-content .events-list .event.unread{background-color:#fafafa}.events-container .events-container-content .events-list .event.unread .right .unread-circle{cursor:pointer}.events-container .events-container-content .events-list .event.unread .right .unread-circle span{display:inline-block}.events-container .events-container-content .events-list .event.unread .content .title{font-weight:700}.events-container .events-container-content .events-list .event .left{float:left;margin:0 10px;position:relative}.events-container .events-container-content .events-list .event .left .icon{height:20px;left:-8px;position:absolute;top:-8px;width:20px}.events-container .events-container-content .events-list .event .left .icon.icon-review{background-image:url(/static/images/messages_feed/atsiliepimas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ad-approved-by-admin{background-image:url(/static/images/messages_feed/patvirtintas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ad-auto-prolong{background-image:url(/static/images/messages_feed/dar-neaktyvuotas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-package-discount-applied{background-image:url(/static/images/messages_feed/nuolaida.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ended-service-top{background-image:url(/static/images/messages_feed/iskelimas-baigesi.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ended-service-bold{background-image:url(/static/images/messages_feed/pariskynimas-baigesi.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-not-activated-ad{background-image:url(/static/images/messages_feed/dar-neaktyvuotas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ad-will-expire-soon{background-image:url(/static/images/messages_feed/besibaigiantis-galiojimas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ad-expired{background-image:url(/static/images/messages_feed/baigesi-galiojimas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-commented-ad{background-image:url(/static/images/messages_feed/atsiliepimas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-bookmarked-ad{background-image:url(/static/images/messages_feed/isimine.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ad-price-up{background-color:#fff;background-image:url(/static/images/svg/arrow_up.svg);background-position:50%;background-repeat:no-repeat;background-size:11px 11px;border-radius:50%}.events-container .events-container-content .events-list .event .left .icon.icon-ad-price-down{background-color:#fff;background-image:url(/static/images/svg/arrow_down.svg);background-position:50%;background-repeat:no-repeat;background-size:11px 11px;border-radius:50%}.events-container .events-container-content .events-list .event .left .icon.icon-ad-position-falls{background-image:url(/static/images/messages_feed/krito-pozicija.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-register-for-open-doors{background-image:url(/static/images/messages_feed/ADD.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-remove-reservation{background-image:url(/static/images/messages_feed/rezervuota.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-parcel-delivered-to-recipient{background-image:url(/static/images/messages_feed/patvirtintas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-admin-pasyvuoti{background-image:url(/static/images/messages_feed/pasleptas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-admin-blokuoti{background-image:url(/static/images/messages_feed/blokuotas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-admin-ok{background-image:url(/static/images/messages_feed/patvirtintas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-admin-sold{background-image:url(/static/images/messages_feed/pasleptas.svg)}.events-container .events-container-content .events-list .event .left .icon.icon-ad-reservation-canceled,.events-container .events-container-content .events-list .event .left .icon.icon-upsell-ap-ar{background-image:url(/static/images/messages_feed/upsell.svg)}.events-container .events-container-content .events-list .event .left img{display:block;height:34px;width:45px}.events-container .events-container-content .events-list .event .right{float:right;margin:0 10px}.events-container .events-container-content .events-list .event .right .time{color:#999;font-size:10px;line-height:14px;text-align:right}.events-container .events-container-content .events-list .event .right .unread-circle{text-align:right}.events-container .events-container-content .events-list .event .right .unread-circle span{background-color:#390;border-radius:50%;display:none;height:7px;width:7px}.events-container .events-container-content .events-list .event .content{height:28px;overflow:hidden}.events-container .events-container-content .events-list .event .content .title{color:#333;display:block;font-size:10px;line-height:14px}.events-container.has-new-messages .triangle{right:75px}#message-container{left:0;position:fixed;right:0;top:0;z-index:10010}#message-container .flash-javascript-message{background-color:#ffd;box-shadow:3px 3px 10px 0 rgba(0,0,0,.5);color:#46a92b;font-size:16px;line-height:23px;margin:0 auto;max-width:940px;padding:20px;position:relative}#message-container .flash-javascript-message.error{background:#fee4e5;color:#fd0017}#message-container .flash-javascript-message.warning{background-color:#e6e6e8;color:#666}#message-container .flash-javascript-message .close-button{background-image:url(/static/images/mobile/close_flash_message_icon.svg);background-repeat:no-repeat;bottom:-11px;cursor:pointer;height:22px;position:absolute;right:-11px;width:22px}#message-container .flash-javascript-message a{font-weight:700;text-decoration:underline}5px;
    text-align: left;
    height: 18px;
    line-height: 18px;
    font-size: 13px;
}

.top-five-advert-img-v2 .open-door-container {
    height: 18px;
    line-height: 18px;
}

.top-five-advert-img-v2 .reservation-strip
{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(241,130,0,0.8);
    height: 20px;
    width: 100%;
    padding: 0 10px;
    text-align: left;
}

.top-five-advert-img-v2 .in-project
{
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  background: rgba(229, 20, 34, 0.7);
  color: #FFF;
  font-size: 13px;
  padding: 2px 6px;
  line-height: normal;
  pointer-events: none;
}

.top-five-advert-img-v2 .in-project {
    padding: 0 6px;
    line-height: 18px;
    pointer-events: none;
}

.top-five-advert-img-v2 .in-project.opendoor {
    bottom: 18px;
}

.top-five-advert-img-v2 .open-door-container .open-door-text:after {
    border-width: 18px 10px 0 0;
}

.top-five-adverts__header__info {
    background: url(/static/svg/search/info.svg) center center no-repeat;
    width: 15px;
    height: 18px;
    display: inline-block;
    margin-left: 7px;
    vertical-align: bottom
}

.top-five-adverts__header__info .simple-info-tooltip {
    font-weight: normal;
}


.top-five-advert-v2:hover {
    background: #F1F3F2;
}


.top-five-adverts__advert__address {
    text-align: left;
    margin-bottom: 8px;
    margin-top: 6px;
    max-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 14px;
    height: 28px;
    color: #333333;
}

.top-five-adverts__advert__info {
    text-align: left;
    color: #666666;
    font-size: 12px;
    line-height: 14px;
}

.top-five-adverts__advert__price {
    text-align: left;
    margin-top: 7px;
}

.top-five-adverts__advert__price__price {
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
    color: #333333;
}

.top-five-adverts__advert__price__oldprice {
    font-size: 10px;
    line-height: 11px;
    color: #666666;
}

.top-five-adverts__advert__image .reservation-strip {
    width: 25px;
    padding: 0 5px;
}

.bottom-promo {
    margin-top: 15px;
    margin-bottom: 15px;
}

/** extras styling */
.advert-extras-wrapper {
    width: 320px;
    right: 0px;
    position: absolute;
    height: 109px;
    top: 61px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 20px;
    padding-right: 15px;
}

.advert-extras-wrapper > div {
    position: relative;
    width: 100%;
    vertical-align: right;
    right: unset;
    top: unset;
    bottom: unset;
    text-align: right;
}

.advert-extras-wrapper .open-door-wrapper {
    position: relative;
    width: 320px;
    right: unset;
    bottom: unset;
    padding-right: 10px;
}

.advert-extras-wrapper .pet_friendly_info {
    width: 100%;
    font-size: 12px;
    line-height: 14px;
    color: #777;
    text-align: left;
}
.advert-extras-wrapper .pet_friendly_info img {
    width: 13px;
    height: 14px;
    margin-right: 5px;
}

.advert-extras-wrapper .list-advert__help-ukraine--info {
    text-align: left;
}

.advert-extras-wrapper .list-advert__help-ukraine--flag {
    width: 14px;
    height: 14px;
    margin-right: 5px;
}

.advert-extras-wrapper .list-advert__help-ukraine {
    margin-top: 6px;
    color: #777;
}

.open-door-outer-wrapper {
    margin-top: 6px;
    padding-right: 10px;
}

.advert-extras-wrapper .floating-info,
.advert-extras-wrapper .list-advert__help-ukraine {
    width: 145px;
    text-align: left;
}

.advert-extras-wrapper .luminor-list-link-add {
    position: relative;
    bottom: unset;
    right: unset;
}

.project-chosen .luminor-list-link-add {
    bottom: 0px;
    margin-top: 5px;
}

.advert-extras-wrapper .project-of-the-month-strip {
    height: 22px;
    background-color: #065F5B;
    color: white;
    font-size: 12px;
    line-height: 22px;
    padding-right: 15px;
    padding-left: 18px;
    margin-top: 2px;
    width: unset;
    position: relative;
}

.project-of-the-month-strip img {
    position: absolute;
    width: 22px;
    height: 22px;
    left: -11px;
}

/** help-ukraine */
.list-advert__help-ukraine--info-icon.icon-v2 {
    vertical-align: middle;
    margin-left: 3px;
    margin-bottom: 2px;
}

.list-advert__help-ukraine--info.info-v2 {
    left: 19px;
    top: 2px;
}

/** chosen-project */
.project-chosen .list-photo-v2,
.project-chosen .list-photo-v2 a,
.project-chosen .list-img-v2,
.project-chosen .list-img-v2 img {
    width: 301px;
    height: 190px;
}

.project-chosen.list-row-v2 {
    min-height: 210px;
}

.project-chosen .advert-extras-wrapper {
    height: 129px;
}

.project-chosen .list-adress-v2  {
    height: 190px;
}

/** projects table */
.project-details {
    margin-top: 20px;
    background: #fff;
    /*margin-left: 20;*/
}

.project-details {
    border-bottom: none;
}

.project-chosen:after {
    display: none !important;
}

.project-chosen .advert-projects-container {
    padding-left: 29.5px;
    padding-right: 36.5px;
    padding-bottom: 0;
    position: relative;
}

.project-chosen .advert-projects-table,
.project-chosen .advert-projects-table tbody,
.project-chosen .advert-projects-table tr {
    border-spacing: 0px;
    border-color: #DDD;
    background-color: #DDD;
}

.project-chosen .advert-projects-table {
    border-spacing: 0 1px;
    border-top: none;
    position: relative;
}

.project-chosen .advert-projects-container:before {
    position: absolute;
    content: ' ';
    height:4px;
    width: calc(100% - 10px);
    left: 5px;
    background: #fff;
    top: 0;
    z-index:2
}

.project-chosen:hover .advert-projects-container:before {
    background: #F1F3F2;
}

.advert-projects-container--image {
    width:100px;
    height: 63px;
    object-fit: cover;
    vertical-align: top;
}

.more-projects-cta {
    font-size: 14px;
    color: #E00D18;
    line-height: 16px;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
}

.more-projects-cta:hover {
    background: #E7E7E7;
}

.more-projects-cta a {
    display: block;
    width: 100%;
    height: 100%;
}

/** project tags */
.project-tags {
    margin-left: 20.5px;
    margin-right: 22px;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 0;
    white-space: normal;
}

.project-tags .project-tag {
    background: #EBFBEB;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    color: #333;
    width: auto;
    border-radius: 13px;
    padding: 0 10px;
    margin-bottom: 7px;
    margin-right: 7px;
}

/** project header */

.project-heading {
    /*margin: 0 29.5px;*/
    display: inline-flex;
    /*width: calc(100% - 59px);*/
    align-items: center;
    /*margin-bottom: 10px;*/
    box-shadow: 0 2px 4px 0 rgba(126,126,126,0.5);
    height: 70px;
    width: 100%;
    justify-content: space-between;
    padding: 0 28px;
    z-index: 3;
    position: relative;
}

.project-title .title{
    display: block;
    font-size: 18px;
    line-height: 22px;
    color: #333;
    font-weight: bold;
    margin-bottom: 5px;
}

.project-title .subtitle {
    color: #E00D18;
    line-height: 18px;
    font-size: 14px;
}

.project-thumb {
    max-width: 150px;
    height: 64px;
    display: inline-flex;
    align-items: flex-start;
    margin-right: 25px;
    justify-content: flex-start;
    flex-shrink: 1;
}

.project-thumb img {
    text-align: center;
    max-width: 150px;
    max-height: 64px;
    object-fit: contain;
    border: none;
}

/** developer */

.developer-details {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    font-family: "Arial";
    margin-bottom: 10px;
}

.developer-name {
    display: block;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 2px;
    font-weight: bold;
    flex-grow: 1;
    text-align: center;
    width: 33.33%;
}

.developer-type {
    flex-grow: 1;
    color: #777;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    width: 33.33%;
}

.developer-logo {
    /*width: 127px;*/
    width: 33.33%;
    height: 54px;
    margin-left: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    flex-grow: 1;
    text-align: center;
}

.developer-logo-img {
    max-width: 105px;
    max-height: 54px;
    object-fit: contain;
}

.with-more .more-projects-cta {
    border-top: 1px solid #DDD;
}

.project-chosen .advert-projects-table tr .variants a {
    height: 28px;
    line-height: 28px;
    border: 1px solid #E00D18;
    border-radius: 14px;
    color: #E00D18;
    padding: 0 20px;
    white-space: nowrap;
    display: inline-block;
}

.project-chosen .advert-projects-table th.has-link {
    pointer-events: auto;
}