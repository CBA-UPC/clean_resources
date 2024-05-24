/**
 * Copyright 2024 Medallia Inc.
 * https://www.medallia.com/
 */
window._da_=window._da_||[];_da_['jsVersion']=1703168079;_da_["da_websiteId"] = 645786;_da_["returnVisit"] = false;_da_["accountNumber"] = 14007;_da_["da_dnsRecord"] = "collection.decibelinsight.net";_da_["intPreScripts"] = function(){};_da_["intScripts"] = _da_["formTitleCallback"] = _da_["formTitleCallback"] || _da_["fieldTitleCallback"] = _da_["fieldTitleCallback"] || _da_["fieldErrorCallback"] = _da_["fieldErrorCallback"] || function(field){try{var error=field.parentNode?field.parentNode.querySelector('.fieldError, #signInContainerSection-error'):false;if(field.type==='hidden'){return false;}
if(!error)return false;return error.innerText?error.innerText.trim():false;}catch(e){ if (window[window.DecibelInsight].handleException) window[window.DecibelInsight].handleException('fieldErrorCallback', e, 'CONFIG'); window[window.DecibelInsight].warn('DecibelInsight: Configuration error in fieldErrorCallback. ', e.toString());return false;}};_da_["preInit"] = function(){try{var limit=20;var formDictionary={acSignIn:{sel:"#accountCenterIframeSigninForm44",name:"Account Sign in",submissionSelector:"#acSignInBtn"},findMyAccount:{sel:"#adsAccountLookupForm",name:"Find My Account",submissionSelector:"#registerLookupFindMyAccountBtn"},applyForm:{sel:"#applyForm",name:"Apply Form",submissionSelector:"#formContinue"},activationForm:{sel:"#activation",name:'Activation Form',submissionSelector:'#activationPrimaryAccountContinue'},applyIntroductionForm:{sel:'#applyIntroduction',name:'Apply Introduction Form',submissionSelector:'#goToFormLink'}};function checkDictionary(dict){var i=0;var k;var ref;for(k in dict){i++;if(i>limit){break;}
if(dict.hasOwnProperty(k)){ref=dict[k];setFormAttributes(ref.sel,ref.name);}}}
function setSubmitEventListener(sel,name,submissionSelector){var form=document.querySelector(sel);var submissionButton=document.querySelector(submissionSelector);console.log(submissionButton);if(form&&submissionButton){submissionButton.addEventListener("click",;}}
checkDictionary(formDictionary);if(window.location.pathname==='/error'){decibelInsight('sendHTTPError',document.querySelector('.error__title').innerText);}}catch(e){window[window.DecibelInsight].warn('DecibelInsight: Configuration error in Custom JavaScript Tags.', e.toString()); if (window[window.DecibelInsight].handleException) window[window.DecibelInsight].handleException('CustomJS', e, 'CONFIG');}};
/**
 * Copyright Medallia Inc.
 * https://www.medallia.com/
 */

/**
 * Diff Match and Patch
 * Copyright Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 * Licensed under the Apache License, Version 2.0 (the "License");
 * http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * Sizzle CSS Selector Engine v2.2.1-pre
 * http://sizzlejs.com/
 * Released under the MIT license
 * http://jquery.org/license
 */
!);