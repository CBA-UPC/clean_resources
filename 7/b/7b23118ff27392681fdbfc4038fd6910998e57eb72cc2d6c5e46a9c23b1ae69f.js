'use strict';(function(){var cmpFile='noModule'in HTMLScriptElement.prototype?'cmp2.js':'cmp2-polyfilled.js';(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion;var tagUrl=document.currentScript.src;cmpVersion='https://cmp.inmobi.com/tcfv2/CMP_FILE?referer=mojasvadba.zoznam.sk'.replace('CMP_FILE',cmpFile);cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #c12d5a !important; "
+"   border-color: #c12d5a !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #c12d5a !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #c12d5a !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #c12d5a !important; "
+"   border-color: #c12d5a !important; "
+" } "
+" .qc-cmp-button { "
+"   color: #FFFFFF !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #FFFFFF !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #c12d5a !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #eee !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-ui a, "
+" .qc-cmp-ui .qc-cmp-alt-action { "
+"   color: #c12d5a !important; "
+" } "
+" .qc-cmp-ui { "
+"   background-color: #FFFFFF !important; "
+" } "
+" .qc-cmp-small-toggle.qc-cmp-toggle-on, "
+" .qc-cmp-toggle.qc-cmp-toggle-on { "
+"   background-color: #c12d5a!important; "
+"   border-color: #c12d5a!important; "
+" } "
+"#qc-cmp2-ui button[mode=\"secondary\"] {border: none;background: white;}#qc-cmp2-ui button[mode=\"secondary\"]:hover {border: none;background: white;color: #c12d5a;}"
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,{"coreConfig":{"inmobiAccountId":"bP3pSgQmEGCFG","privacyMode":["GDPR"],"hashCode":"lEGR5+wHE8hVCld/zO+brw","publisherCountryCode":"SK","publisherName":"Moja svadba","vendorPurposeIds":[7,1,3,5,4,2,10,6,8,9],"vendorFeaturesIds":[1,2,3],"vendorPurposeLegitimateInterestIds":[7,8,9,2,10,3,4,5,6],"vendorSpecialFeaturesIds":[2,1],"vendorSpecialPurposesIds":[1,2],"googleEnabled":false,"consentScope":"service","thirdPartyStorageType":"iframe","consentOnSafari":false,"displayUi":"always","defaultToggleValue":"off","initScreenRejectButtonShowing":true,"initScreenCloseButtonShowing":false,"softOptInEnabled":false,"showSummaryView":true,"persistentConsentLinkLocation":3,"displayPersistentConsentLink":false,"uiLayout":"popup","publisherLogo":"https://mojasvadba.zoznam.sk/static/media/wedding-sk-logo.3096ce12.svg?qc-size=1235,342","vendorListUpdateFreq":30,"publisherPurposeIds":[1],"initScreenBodyTextOption":1,"publisherConsentRestrictionIds":[],"publisherLIRestrictionIds":[],"publisherPurposeLegitimateInterestIds":[],"publisherSpecialPurposesIds":[1,2],"publisherFeaturesIds":[1,2,3],"publisherSpecialFeaturesIds":[1,2],"stacks":[],"lang_":"sk","gvlVersion":2},"premiumUiLabels":{"initScreenCustomLinks":[{"label":"Ochrana osobných údajov","link":"https://mojasvadba.zoznam.sk/about-privacy"}]},"premiumProperties":{"googleWhitelist":[1]},"coreUiLabels":{"initScreenRejectButton":"ODMIETNUŤ VŠETKO","saveAndExitButton":"ULOŽIŤ A ZATVORIŤ","agreeButton":"PRIJAŤ VŠETKO"},"theme":{"uxPrimaryButtonTextColor":"#FFFFFF","uxPrimaryButtonColor":"#c12d5a","uxBackgroundColor":"#FFFFFF","uxSecondaryButtonTextColor":"#c12d5a","uxToogleActiveColor":"#c12d5a","uxLinkColor":"#c12d5a"},"nonIabVendorsInfo":{}});})();