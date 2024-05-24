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
window.matomoPluginAsyncInit.push(;function loadMatomo(){if(checkLoadedAlready()){return;}
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
(h)}})();
/* END GENERATED: tracker.min.js rue}mo}}());if(typeof window.piwik_log!=="function"){window.piwik()}}}
/*!! @license-end */;libAvailable=typeof window.Piwik!=='undefined'||typeof window.Matomo!=='undefined';libLoaded=libAvailab);}}
var configuredTrackers={};re;};};})(); 
Templates['MatomoConfigurationVariable';};})(); 
Templates['PageTitleVariable' } })(); 
Templates['TimeSinceLoadVariable'] = (function(){return function(parameters,TagManager){this.get=function(){var unit=parameters.get('unit','ms');var now=new Date().getTime();var loadTime=TagManager.dataLayer.get('mtm.mtmScriptLoadedTime');if(!loadTime){loadTime=TagManager.dataLayer.get('mtm.startTime');}
if(!loadTime){var win=parameters.window;if(TagManager.utils.isObject(win.performance)&&win.performance.timing&&win.performance.timing){loadTime=win.performance.timing.loadEventStart;}}
if(!loadTime){return;}
if(unit==='s'){now=now / 1000;loadTime=loadTime / 1000;}else if(unit==='m'){now=now / 1000 / 60;loadTime=loadTime / 1000 / 60;}
return parseInt(Math.round(now-loadTime),10);};};})(); 
Templates['PageRenderTimeVariable'] = (function () { return function (parameters, TagManager) { this.get = function () { return TagManager.window.getPerformanceTiming('domComplete') - TagManager.window.getPerformanceTiming('domLoading');   }; } })(); 
Templates['DomReadyTrigger'] = (function(){return function(parameters,TagManager){this.setUp=function(triggerEvent){TagManager.dom.onReady(function(){triggerEvent({event:'DOMReady'});});};};})(); 
Templates['PageViewTrigger';};})(); 
Templates['WindowLoadedTrigger';};})(); 
Templates['UrlParameterVariable'] = (function(){return function(parameters,TagManager){this.get=function(){var name=parameters.get('parameterName');return TagManager.url.getQueryParameter(name,parameters.window.location.search);};};})(); 
window.MatomoTagManager.addContainer({"id":"RUSvfnjK","idsite":1,"versionName":"falscher PageView Tag entfernt","revision":18,"environment":"live","tags":[{"id":114,"type":"Matomo","name":"f0fb9a8305409aa424b94d803e7fb29e","parameters":{"matomoConfig":{"name":"Matomo Konfiguration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/webstats.ch.ch\/","idSite":"1","enableLinkTracking":true,"enableFileTracking":false,"enableCrossDomainLinking":false,"crossDomainLinkingTimeout":180,"enableDoNotTrack":false,"disablePerformanceTracking":false,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"heartBeatTime":15,"trackAllContentImpressions":false,"trackVisibleContentImpressions":false,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"referralCookieTimeOut":182,"sessionCookieTimeOut":30,"setSecureCookie":false,"cookieDomain":"","cookieNamePrefix":"_pk_","cookiePath":"","cookieSameSite":"Lax","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[],"registerAsDefaultTracker":true,"bundleTracker":true,"jsEndpoint":"piwik.js","jsEndpointCustom":"custom.js","trackingEndpoint":"piwik.php","trackingEndpointCustom":"custom.php","appendToTrackingUrl":"","forceRequestMethod":false,"requestMethod":"GET","requestContentType":"application\/x-www-form-urlencoded; charset=UTF-8","customRequestProcessing":"","disableAlwaysUseSendBeacon":false},"Variable":"MatomoConfigurationVariable"},"trackingType":"event","idGoal":"","goalCustomRevenue":"","documentTitle":"","customUrl":"","isEcommerceView":false,"productSKU":"","productName":"","categoryName":"","price":"","eventCategory":"Page Topic","eventAction":"Aufgerufene Seitenthemen","eventName":{"name":"PageTitle","type":"PageTitle","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageTitleVariable"},"eventValue":{"name":"Zeit seit dem Laden der Seite","type":"TimeSinceLoad","lookUpTable":[],"defaultValue":"0","parameters":{"unit":"s"},"Variable":"TimeSinceLoadVariable"}},"blockTriggerIds":[],"fireTriggerIds":[139],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"MatomoTag"},{"id":115,"type":"Matomo","name":"b7c443bdf146ad4093fc38c49b2fd6c1","parameters":{"matomoConfig":{"name":"Matomo Konfiguration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/webstats.ch.ch\/","idSite":"1","enableLinkTracking":true,"enableFileTracking":false,"enableCrossDomainLinking":false,"crossDomainLinkingTimeout":180,"enableDoNotTrack":false,"disablePerformanceTracking":false,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"heartBeatTime":15,"trackAllContentImpressions":false,"trackVisibleContentImpressions":false,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"referralCookieTimeOut":182,"sessionCookieTimeOut":30,"setSecureCookie":false,"cookieDomain":"","cookieNamePrefix":"_pk_","cookiePath":"","cookieSameSite":"Lax","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[],"registerAsDefaultTracker":true,"bundleTracker":true,"jsEndpoint":"piwik.js","jsEndpointCustom":"custom.js","trackingEndpoint":"piwik.php","trackingEndpointCustom":"custom.php","appendToTrackingUrl":"","forceRequestMethod":false,"requestMethod":"GET","requestContentType":"application\/x-www-form-urlencoded; charset=UTF-8","customRequestProcessing":"","disableAlwaysUseSendBeacon":false},"Variable":"MatomoConfigurationVariable"},"trackingType":"event","idGoal":"","goalCustomRevenue":"","documentTitle":"","customUrl":"","isEcommerceView":false,"productSKU":"","productName":"","categoryName":"","price":"","eventCategory":"Performance","eventAction":"Load","eventName":"Page Render Time","eventValue":{"name":"PageRenderTime","type":"PageRenderTime","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageRenderTimeVariable"}},"blockTriggerIds":[],"fireTriggerIds":[141],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"MatomoTag"}],"triggers":[{"id":139,"type":"DomReady","name":"DomReady","parameters":[],"conditions":[],"Trigger":"DomReadyTrigger"},{"id":140,"type":"PageView","name":"PageView","parameters":[],"conditions":[],"Trigger":"PageViewTrigger"},{"id":141,"type":"WindowLoaded","name":"WindowLoaded","parameters":[],"conditions":[],"Trigger":"WindowLoadedTrigger"}],"variables":[{"name":"MatomoConfiguration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/webstats.ch.ch\/","idSite":"1","enableLinkTracking":true,"enableFileTracking":false,"enableCrossDomainLinking":false,"crossDomainLinkingTimeout":180,"enableDoNotTrack":false,"disablePerformanceTracking":false,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"heartBeatTime":15,"trackAllContentImpressions":false,"trackVisibleContentImpressions":false,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"referralCookieTimeOut":182,"sessionCookieTimeOut":30,"setSecureCookie":false,"cookieDomain":"","cookieNamePrefix":"_pk_","cookiePath":"","cookieSameSite":"Lax","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[],"registerAsDefaultTracker":true,"bundleTracker":true,"jsEndpoint":"piwik.js","jsEndpointCustom":"custom.js","trackingEndpoint":"piwik.php","trackingEndpointCustom":"custom.php","appendToTrackingUrl":"","forceRequestMethod":false,"requestMethod":"GET","requestContentType":"application\/x-www-form-urlencoded; charset=UTF-8","customRequestProcessing":"","disableAlwaysUseSendBeacon":false},"Variable":"MatomoConfigurationVariable"},{"name":"PageTitle","type":"PageTitle","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageTitleVariable"},{"name":"TimeSinceLoad","type":"TimeSinceLoad","lookUpTable":[],"defaultValue":"0","parameters":{"unit":"s"},"Variable":"TimeSinceLoadVariable"},{"name":"PageRenderTime","type":"PageRenderTime","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageRenderTimeVariable"},{"name":"UrlParameter","type":"UrlParameter","lookUpTable":[],"defaultValue":"","parameters":{"parameterName":"q"},"Variable":"UrlParameterVariable"}]}, Templates);})()
})();