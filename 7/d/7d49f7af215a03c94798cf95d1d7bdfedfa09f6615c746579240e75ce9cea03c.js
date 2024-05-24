'use strict';(function(){var cmpFile='noModule'in HTMLScriptElement.prototype?'cmp2.js':'cmp2-polyfilled.js';(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion;var tagUrl=document.currentScript.src;cmpVersion='https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=reblog.hu'.replace('CMP_FILE',cmpFile);cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #111111 !important; "
+"   border-color: #111111 !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #111111 !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #111111 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #111111 !important; "
+"   border-color: #111111 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #111111 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #eee !important; "
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
+"   color: #000000 !important; "
+" } "
+" .qc-cmp-ui a, "
+" .qc-cmp-ui .qc-cmp-alt-action { "
+"   color: #ff4d00 !important; "
+" } "
+" .qc-cmp-small-toggle.qc-cmp-toggle-on, "
+" .qc-cmp-toggle.qc-cmp-toggle-on { "
+"   background-color: #111111!important; "
+"   border-color: #111111!important; "
+" } "
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';var gvlVersion=3;function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','pt-br','pt-pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(gvlVersion===2&&isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(gvlVersion===3&&isSupported(document.documentElement.lang)){autoDetectedLanguage=document.documentElement.lang;}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,function(){},{"coreConfig":{"inmobiAccountId":"gq2uc_c-uMyQL","privacyMode":["GDPR"],"hashCode":"JHIoOB0bVlfU3i8vRF3rgQ","publisherCountryCode":"HU","publisherName":"ReBlog","vendorPurposeIds":[2,4,6,7,9,10,1,3,5,8,11],"vendorFeaturesIds":[1,2,3],"vendorPurposeLegitimateInterestIds":[7,8,9,2,10,11],"vendorSpecialFeaturesIds":[2,1],"vendorSpecialPurposesIds":[1,2],"googleEnabled":true,"consentScope":"service","thirdPartyStorageType":"iframe","consentOnSafari":false,"displayUi":"always","defaultToggleValue":"off","initScreenRejectButtonShowing":false,"initScreenCloseButtonShowing":false,"softOptInEnabled":false,"showSummaryView":true,"persistentConsentLinkLocation":4,"displayPersistentConsentLink":true,"uiLayout":"popup","vendorListUpdateFreq":30,"publisherPurposeIds":[1,10,9,8,2,3,4,5,7,6],"initScreenBodyTextOption":1,"publisherConsentRestrictionIds":[],"publisherLIRestrictionIds":[],"publisherPurposeLegitimateInterestIds":[],"publisherSpecialPurposesIds":[2,1],"publisherFeaturesIds":[3,2,1],"publisherSpecialFeaturesIds":[2,1],"stacks":[1,42],"lang_":"hu","gvlVersion":3,"totalVendors":748},"premiumUiLabels":{"initScreenCustomLinks":[{"label":"Adatvédelem","link":"https://legal.reblog.hu/rebloghu-adatkezelesi-szabalyzat"},{"label":"Felhasználási feltételek","link":"https://legal.reblog.hu/rebloghu-felhasznalasi-feltetelek"}]},"premiumProperties":{"googleWhitelist":[1]},"coreUiLabels":{"persistentConsentLinkLabel":"Süti beállítások"},"theme":{"uxPrimaryButtonColor":"#111111","uxSecondaryButtonTextColor":"#111111","uxToogleActiveColor":"#111111","uxLinkColor":"#ff4d00","uxFontColor":"#000000"},"nonIabVendorsInfo":{}});})();adOcean');
    $el.trigger(event);
    if (event.isDefaultPrevented()) {
        return;
    }

    $el.closest('.et_pb_module, .banner-container, .eads_banner_areas').removeClass('hidden d-none');
    $el.trigger('postShow.adOcean');
};

adOcean.removeStrategies = {
    'forced': function (el) {
        return true;
    }
};

adOcean.shouldBeSentStrategies = {
    'default': function (el) {
        var isMobile = adOcean.isMobile();
        if (isMobile && el.hasClass('adOceanMobile')) {
            return true;
        }

        return !!(!isMobile && el.hasClass('adOceanDesktop'));
    }
};

adOcean.isMasterAlreadySent = function (masterId) {
    return this.mastersAlreadySent.indexOf(masterId) !== -1;
};

adOcean.isPageNsfw = function () {
    return document.querySelector('meta[name="nfsw"]') && document.querySelector('meta[name="nfsw"]').getAttribute('content') === 'true';
};

adOcean.getKeywordsMeta = function () {
    var tags = document.querySelector('meta[name="keywords"]') ? document.querySelector('meta[name="keywords"]').getAttribute('content').split(',') : [];
    var tagsInArticleDom = document.querySelectorAll('.tags .tag');
    if (tagsInArticleDom.length) {
        tagsInArticleDom.forEach((tag) => {
            if (tag.querySelector('*')) {
                if (tags.indexOf(tag.querySelector('*').innerHTML) === -1) {
                    tags.push(tag.querySelector('*').innerHTML);
                }
            } else if (tags.indexOf(tag.innerHTML) === -1) {
                tags.push(tag.innerHTML);
            }
        });
    }

    return tags;
};

adOcean.getSiteUserIdFromCookie = function () {
    var cookie = document.cookie.split(';').filter((item) => {
        return item.indexOf('_vid') !== -1;
    });

    if (cookie.length) {
        return cookie[0].split('=')[1];
    }

    return null;
};

adOcean.initZones = function () {

    var masterCode = this.getMasterCode(); // needed for not custom slaves
    var vars = {nsfw: adOcean.isPageNsfw(), mwid: adOcean.getSiteUserIdFromCookie()};
    var customCodes = this.getCustomCodesWithIdKeys();

    jQuery.each(this.getZoneElements(), jQuery.proxy(function (i, el) {
        if (this.shouldBeSentStrategies.default(el)) {
            var zoneElement = jQuery(el);
            if (zoneElement[0].id.indexOf('ado-') !== -1) {
                adOcean.sendPlacement(zoneElement);
            } else if (customCodes.hasOwnProperty(zoneElement[0].id)) {
                console.log(zoneElement[0]);
                if (adOcean.isMobile() && zoneElement[0].classList.contains("adOceanMobile") && customCodes[zoneElement[0].id].mobile.length) {
                    adOcean.sendMaster({id: customCodes[zoneElement[0].id].mobile, keys: adOcean.getKeywordsMeta(), vars: vars});
                    adOcean.sendSlave(zoneElement, customCodes[zoneElement[0].id].mobile);
                } else if (customCodes[zoneElement[0].id].desktop.length) {
                    adOcean.sendMaster({id: customCodes[zoneElement[0].id].desktop, keys: adOcean.getKeywordsMeta(), vars: vars});
                    adOcean.sendSlave(zoneElement, customCodes[zoneElement[0].id].desktop);
                }
            } else if (masterCode && masterCode.length) {
                adOcean.sendMaster({id: masterCode, keys: adOcean.getKeywordsMeta(), vars: vars});
                adOcean.sendSlave(zoneElement, masterCode, adOcean.getKeywordsMeta(), vars);
            }
            return true;
        }

        var removeStrategy = el.data('removeStrategy');
        if (typeof removeStrategy === 'undefined') {
            return true;
        }

        if (adOcean.removeStrategies[removeStrategy](el)) {
            adOcean.removeEmptyAdo(el);
        }

    }, this));
};

jQuery(function ($) {
    if (!ado) {
        return;
    }

    adOcean.initZones();
});
