'use strict';(function(){var cmpFile='noModule'in HTMLScriptElement.prototype?'cmp2.js':'cmp2-polyfilled.js';(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion;var tagUrl=document.currentScript.src;cmpVersion='https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=ssmas.com'.replace('CMP_FILE',cmpFile);cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #6666FE !important; "
+"   border-color: #6666FE !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #6666FE !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #6666FE !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #6666FE !important; "
+"   border-color: #6666FE !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #ffffff !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #6666FE !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #eee !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-ui a, "
+" .qc-cmp-ui .qc-cmp-alt-action { "
+"   color: #6666FE !important; "
+" } "
+" .qc-cmp-small-toggle.qc-cmp-toggle-on, "
+" .qc-cmp-toggle.qc-cmp-toggle-on { "
+"   background-color: #6666FE!important; "
+"   border-color: #6666FE!important; "
+" } "
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';var gvlVersion=3;function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','pt-br','pt-pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(gvlVersion===2&&isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(gvlVersion===3&&isSupported(document.documentElement.lang)){autoDetectedLanguage=document.documentElement.lang;}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,{"coreConfig":{"inmobiAccountId":"4ke6M6mUC1Jkc","privacyMode":["GDPR"],"hashCode":"S0G8t4LVD64vWrHCPKICpg","publisherCountryCode":"ES","publisherName":"ssmas.com","vendorPurposeIds":[2,4,6,7,9,10,1,3,5,8,11],"vendorFeaturesIds":[1,2,3],"vendorPurposeLegitimateInterestIds":[7,8,9,2,10,11],"vendorSpecialFeaturesIds":[2,1],"vendorSpecialPurposesIds":[1,2],"googleEnabled":true,"consentScope":"service","thirdPartyStorageType":"iframe","consentOnSafari":false,"displayUi":"inEU","defaultToggleValue":"off","initScreenRejectButtonShowing":true,"initScreenCloseButtonShowing":false,"softOptInEnabled":false,"showSummaryView":true,"persistentConsentLinkLocation":3,"displayPersistentConsentLink":true,"uiLayout":"banner","vendorListUpdateFreq":30,"publisherPurposeIds":[],"initScreenBodyTextOption":1,"publisherConsentRestrictionIds":[],"publisherLIRestrictionIds":[],"publisherPurposeLegitimateInterestIds":[],"publisherSpecialPurposesIds":[],"publisherFeaturesIds":[],"publisherSpecialFeaturesIds":[],"stacks":[1,42],"lang_":"es","gvlVersion":3,"totalVendors":747},"premiumUiLabels":{},"premiumProperties":{"googleWhitelist":[1]},"coreUiLabels":{},"theme":{"uxPrimaryButtonColor":"#6666FE","uxSecondaryButtonTextColor":"#6666FE","uxToogleActiveColor":"#6666FE","uxLinkColor":"#6666FE"},"nonIabVendorsInfo":{}});})();