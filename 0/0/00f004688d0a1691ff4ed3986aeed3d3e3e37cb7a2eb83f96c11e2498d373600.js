'use strict';(function(){var cmpFile='noModule'in HTMLScriptElement.prototype?'cmp2.js':'cmp2-polyfilled.js';(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion;var tagUrl=document.currentScript.src;cmpVersion='https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=iefimerida.gr'.replace('CMP_FILE',cmpFile);cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #ff0000 !important; "
+"   border-color: #ff0000 !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #ff0000 !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #ff0000 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #ff0000 !important; "
+"   border-color: #ff0000 !important; "
+" } "
+" .qc-cmp-button { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #fefefe !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #ff0000 !important; "
+"   border-color: transparent !important; "
+" } "
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';var gvlVersion=3;function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','pt-br','pt-pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(gvlVersion===2&&isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(gvlVersion===3&&isSupported(document.documentElement.lang)){autoDetectedLanguage=document.documentElement.lang;}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,{"coreConfig":{"inmobiAccountId":"b0xUC-p4nMqe1","privacyMode":["GDPR"],"hashCode":"JS+D2A57RkoUO28mRDJpgQ","publisherCountryCode":"GR","publisherName":"iefimerida.gr","vendorPurposeIds":[2,4,6,7,9,10,1,3,5,8,11],"vendorFeaturesIds":[1,2,3],"vendorPurposeLegitimateInterestIds":[7,8,9,2,10,11],"vendorSpecialFeaturesIds":[2,1],"vendorSpecialPurposesIds":[1,2],"googleEnabled":true,"consentScope":"service","thirdPartyStorageType":"iframe","consentOnSafari":false,"displayUi":"always","defaultToggleValue":"off","initScreenRejectButtonShowing":true,"initScreenCloseButtonShowing":false,"softOptInEnabled":false,"showSummaryView":true,"persistentConsentLinkLocation":3,"displayPersistentConsentLink":true,"uiLayout":"popup","publisherLogo":"https://www.iefimerida.gr/themes/on/images/logo.png?qc-size=498,80","vendorListUpdateFreq":30,"publisherPurposeIds":[],"initScreenBodyTextOption":1,"publisherConsentRestrictionIds":[],"publisherLIRestrictionIds":[],"stacks":[1,42],"lang_":"el","gvlVersion":3,"totalVendors":763},"premiumUiLabels":{},"premiumProperties":{"googleWhitelist":[1]},"coreUiLabels":{"initScreenRejectButton":"ΑΠΟΡΡΙΨΗ","saveAndExitButton":"ΑΠΟΘΗΚΕΥΣΗ ΚΑΙ ΕΞΟΔΟΣ","agreeButton":"ΑΠΟΔΟΧΗ"},"theme":{"uxPrimaryButtonTextColor":"#ffffff","uxPrimaryButtonColor":"#ff0000","uxSecondaryButtonColor":"#ff0000","uxSecondaryButtonTextColor":"#fefefe"},"nonIabVendorsInfo":{}});})();