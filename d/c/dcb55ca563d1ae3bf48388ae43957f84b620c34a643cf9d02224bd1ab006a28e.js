/*!!
 * Matomo - free/libre analytics platform
 *
 * Matomo Tag Manager
 *
 * @link https://matomo.org
 * @source https://github.com/matomo-org/tag-manager/blob/master/js/piwik.js
 * @license https://matomo.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 */
(function(){var b=document;var a=window;
var ignoreGtmDataLayer = false;
;
/*!!! previewModeHook */
;if(typeof window.MatomoTagManager!=="object"){if(typeof window._mtm!=="object"){window._mtm=[]}window.MatomoTagManager=(()}
(function(){
var Templates = {};
Templates['MatomoTag'] = (function(){var libLoaded=false;var libAvailable=false;var callbacks={callbacks:[],push:;window._paq=window._paq||[];if('object'!==typeof window.matomoPluginAsyncInit){window.matomoPluginAsyncInit=[];}
window.matomoPluginAsyncInit.push(function(){libAvailable=true;executeCallbacks();});function loadMatomo(){if(checkLoadedAlready()){return;}
/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;if(typeof _paq!=="object"){_paq=[]}if(typeof window.Matomo!=="object"){window.Matomo=window.Piwik=())}
/*!!! pluginTrackerHook */

/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */
(();
/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
(h)}})();
/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
s)}})();
/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * All information contained herein is, and remains the property of InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
")}})();

/* END GENERATED: tracker.min.js rue}mo}}());if(typeof window.piwik_log!=="function"){window.piwik()}}}
/*!! @license-end */;libAvailable=typeof window.Piwik!=='undefined'||typeof window.Matomo!=='undefined';libLoaded=libAvailab);}}
var configuredTrackers={};re;};};})(); 
Templates['MatomoConfigurationVariable';};})(); 
Templates['DataLayerVariable';};})(); 
Templates['CustomHtmlTag';};})(); 
Templates['FacebookPixelTag'] = (function(){return function(parameters,TagManager){var setup={};var isLibLoaded=false;this.fire=function(){if(!isLibLoaded){isLibLoaded=t,s)}(parameters.window,parameters.document,'script','https://connect.facebook.net/en_US/fbevents.js');}
var pixelId=parameters.get('pixelId');if(!(pixelId in setup)){setup[pixelId]=true;fbq('init',pixelId);}
fbq('track','PageView');};};})(); 
Templates['PageViewTrigger';};})(); 
Templates['PageUrlVariable'] = (function () { return function (parameters, TagManager) { this.get = function () { return parameters.window.location.href;   }; } })(); 
Templates['PageHostnameVariable' } })(); 
Templates['FormSubmitTrigger'] = (function(){return function(parameters,TagManager){this.setUp=function(triggerEvent){TagManager.dom.onReady(function(){TagManager.dom.addEventListener(parameters.document.body,"submit",function(event){if(!event.target){return;}
var target=event.target;if(target.nodeName==='FORM'){var dom=TagManager.dom;var formAction=dom.getElementAttribute(target,'action');if(!formAction){formAction=parameters.window.location.href;}
triggerEvent({event:'mtm.FormSubmit','mtm.formElement':target,'mtm.formElementId':dom.getElementAttribute(target,'id'),'mtm.formElementName':dom.getElementAttribute(target,'name'),'mtm.formElementClasses':dom.getElementClassNames(target),'mtm.formElementAction':formAction});}},true);});};};})(); 
Templates['FormIdVariable' } })(); 
window.MatomoTagManager.addContainer({"id":"FEa7juIW","idsite":1,"versionName":"track lead","revision":15,"environment":"live","tags":[{"id":97,"type":"Matomo","name":"52f5e5226fa8c4c4c7ae7ab8a7b67dec","parameters":{"matomoConfig":{"name":"Norstatpanel Tracking Configuration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/track.norstatpanel.com\/","idSite":"1","enableLinkTracking":true,"enableFormAnalytics":true,"enableMediaAnalytics":true,"enableFileTracking":false,"enableCrossDomainLinking":false,"crossDomainLinkingTimeout":180,"enableDoNotTrack":false,"disablePerformanceTracking":false,"enableJSErrorTracking":false,"enableHeartBeatTimer":true,"heartBeatTime":15,"trackAllContentImpressions":true,"trackVisibleContentImpressions":true,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"referralCookieTimeOut":182,"sessionCookieTimeOut":30,"setSecureCookie":false,"cookieDomain":"www.norstatpanel.com","cookieNamePrefix":"_pk_","cookiePath":"","cookieSameSite":"Strict","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"disableAlwaysUseSendBeacon":false,"userId":"","customDimensions":[{"index":"1","value":"itemID"}],"registerAsDefaultTracker":true,"bundleTracker":true,"jsEndpoint":"matomo.js","jsEndpointCustom":"custom.js","trackingEndpoint":"matomo.php","trackingEndpointCustom":"custom.php","appendToTrackingUrl":"","forceRequestMethod":false,"requestMethod":"GET","requestContentType":"application\/x-www-form-urlencoded; charset=UTF-8","customRequestProcessing":""},"Variable":"MatomoConfigurationVariable"},"trackingType":"event","idGoal":"","goalCustomRevenue":"","documentTitle":{"name":"DLV itemID","type":"DataLayer","lookUpTable":[],"defaultValue":"","parameters":{"dataLayerName":"dimension1"},"Variable":"DataLayerVariable"},"customUrl":"","isEcommerceView":false,"productSKU":"","productName":"","categoryName":"","price":"","eventCategory":{"name":"DLV itemID","type":"DataLayer","lookUpTable":[],"defaultValue":"","parameters":{"dataLayerName":"dimension1"},"Variable":"DataLayerVariable"},"eventAction":"complete ID","eventName":"shop reward","eventValue":""},"blockTriggerIds":[],"fireTriggerIds":[76],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"MatomoTag"},{"id":98,"type":"CustomHtml","name":"c42bb92405d2bcb16b79010fe536c76e","parameters":{"customHtml":"<script>\n  var _paq = window._paq = window._paq || [];\n_paq.push(['enableHeartBeatTimer', 5]);\n  _paq.push([\"setExcludedQueryParams\", [\"rp1\",\"rp2\",\"rp3\",\"rp4\",\"rp5\",\"fname\",\"lname\",\"email\",\"mobile\",\"lang\",\"coins\",\"check_logged_in\",\"at_gd\",\"coid\",\"PasswordKey\",\"intro\"]]);\n  _paq.push(['trackPageView']);\n  _paq.push(['enableLinkTracking']);\n  (function() {\n    var u=\"https:\/\/track.norstatpanel.com\/\";\n    _paq.push(['setTrackerUrl', u+'matomo.php']);\n    _paq.push(['setSiteId', '1']);\n    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n  })();\n<\/script>","htmlPosition":"headStart"},"blockTriggerIds":[],"fireTriggerIds":[77],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"CustomHtmlTag"},{"id":99,"type":"FacebookPixel","name":"b7ca35f100eec22e63e206481b8b4573","parameters":{"pixelId":"756868222477339"},"blockTriggerIds":[],"fireTriggerIds":[77],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"FacebookPixelTag"},{"id":100,"type":"CustomHtml","name":"630b94b84391b8447cada93b034583f1","parameters":{"customHtml":"<script>\nfbq('track', 'Lead');\n<\/script>","htmlPosition":"bodyEnd"},"blockTriggerIds":[],"fireTriggerIds":[78],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"CustomHtmlTag"}],"triggers":[{"id":76,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"PageUrl","type":"PageUrl","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageUrlVariable"},"comparison":"regexp_ignore_case","expected":"^(.*)\\\/redeem\\\/(.*)\\\/complete\\\/(.*)$"},{"actual":{"name":"PageHostname","type":"PageHostname","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageHostnameVariable"},"comparison":"equals","expected":"www.norstatpanel.com"}],"Trigger":"PageViewTrigger"},{"id":77,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"PageUrl","type":"PageUrl","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageUrlVariable"},"comparison":"starts_with","expected":"https:\/\/www.norstatpanel.com\/"}],"Trigger":"PageViewTrigger"},{"id":78,"type":"FormSubmit","name":"FormSubmit","parameters":[],"conditions":[{"actual":{"name":"FormId","type":"FormId","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"FormIdVariable"},"comparison":"equals","expected":"webform-submission-sign-up-node-60-add-form"},{"actual":{"name":"PageHostname","type":"PageHostname","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageHostnameVariable"},"comparison":"equals","expected":"www.norstatpanel.com"}],"Trigger":"FormSubmitTrigger"}],"variables":[{"name":"MatomoConfiguration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/track.norstatpanel.com\/","idSite":"1","enableLinkTracking":true,"enableFormAnalytics":true,"enableMediaAnalytics":true,"enableFileTracking":false,"enableCrossDomainLinking":false,"crossDomainLinkingTimeout":180,"enableDoNotTrack":false,"disablePerformanceTracking":false,"enableJSErrorTracking":false,"enableHeartBeatTimer":true,"heartBeatTime":15,"trackAllContentImpressions":true,"trackVisibleContentImpressions":true,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"referralCookieTimeOut":182,"sessionCookieTimeOut":30,"setSecureCookie":false,"cookieDomain":"www.norstatpanel.com","cookieNamePrefix":"_pk_","cookiePath":"","cookieSameSite":"Strict","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"disableAlwaysUseSendBeacon":false,"userId":"","customDimensions":[{"index":"1","value":"itemID"}],"registerAsDefaultTracker":true,"bundleTracker":true,"jsEndpoint":"matomo.js","jsEndpointCustom":"custom.js","trackingEndpoint":"matomo.php","trackingEndpointCustom":"custom.php","appendToTrackingUrl":"","forceRequestMethod":false,"requestMethod":"GET","requestContentType":"application\/x-www-form-urlencoded; charset=UTF-8","customRequestProcessing":""},"Variable":"MatomoConfigurationVariable"},{"name":"DataLayer","type":"DataLayer","lookUpTable":[],"defaultValue":"","parameters":{"dataLayerName":"dimension1"},"Variable":"DataLayerVariable"},{"name":"PageUrl","type":"PageUrl","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageUrlVariable"},{"name":"PageHostname","type":"PageHostname","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageHostnameVariable"},{"name":"FormId","type":"FormId","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"FormIdVariable"}]}, Templates);})()
})();