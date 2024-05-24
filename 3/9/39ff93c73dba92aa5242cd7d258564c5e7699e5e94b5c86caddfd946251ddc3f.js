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
if ((document.cookie.indexOf('mtmPreview1_OYTiSMwj%3D1') !== -1 && window.location.href.indexOf('&mtmPreviewMode=0') === -1 && window.location.href.indexOf('?mtmPreviewMode=0') === -1) || window.location.href.indexOf('&mtmPreviewMode=OYTiSMwj') !== -1 || window.location.href.indexOf('?mtmPreviewMode=OYTiSMwj') !== -1) {

    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=false; g.defer=false; g.src='https://statistiques.cnrs.fr/js/container_OYTiSMwj_preview.js'; s.parentNode.insertBefore(g,s);
    return;
}

;if(typeof window.MatomoTagManager!=="object"){if(typeof window._mtm!=="object"){window._mtm=[]}window.MatomoTagManager=(()}
(function(){
var Templates = {};
Templates['MatomoTag'] = ((); 
Templates['MatomoConfigurationVariable'] = ((); 
Templates['MetaContentVariable'] = (function(){return function(parameters,TagManager){function getMetaContent(name){if(!name){return;}
var dom=TagManager.dom;var elements=dom.byTagName('meta');var index,element;for(index=0;index<elements.length;index++){element=elements[index];if(element.name===name||dom.getElementAttribute(element,'property')===name||dom.getElementAttribute(element,'http-equiv')===name){return element.content;}}}
this.get=};})(); 
Templates['PageViewTrigger'] = ((); 
window.MatomoTagManager.addContainer({"id":"OYTiSMwj","idsite":1,"versionName":"1.0.1","revision":3,"environment":"live","tags":[{"id":6,"type":"Matomo","name":"7bd9fc0ef0755857ab05e64f95c0e2ac","parameters":{"matomoConfig":{"name":"Configuration Matomo","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/www.statistiques.cnrs.fr\/","idSite":"1","enableLinkTracking":true,"enableCrossDomainLinking":true,"enableDoNotTrack":true,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"trackAllContentImpressions":true,"trackVisibleContentImpressions":true,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"setSecureCookie":true,"cookieDomain":"","cookiePath":"","cookieSameSite":"Lax","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[],"bundleTracker":true,"registerAsDefaultTracker":true,"jsEndpoint":"matomo.js","trackingEndpoint":"matomo.php"},"Variable":"MatomoConfigurationVariable"},"trackingType":"pageview","idGoal":"","goalCustomRevenue":"","documentTitle":"","customUrl":"","eventCategory":"","eventAction":"","eventName":"","eventValue":""},"blockTriggerIds":[],"fireTriggerIds":[9],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"MatomoTag"},{"id":7,"type":"Matomo","name":"feb97a674adc6e1c2231cc3deb82c786","parameters":{"matomoConfig":{"name":"Configuration Matomo (avec th\u00e9matiques)","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/www.statistiques.cnrs.fr\/","idSite":"1","enableLinkTracking":true,"enableCrossDomainLinking":true,"enableDoNotTrack":true,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"trackAllContentImpressions":true,"trackVisibleContentImpressions":true,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"setSecureCookie":true,"cookieDomain":"","cookiePath":"","cookieSameSite":"Lax","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[{"index":"1","value":{"name":"Th\u00e9matiques","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"keywords"},"Variable":"MetaContentVariable"}}],"bundleTracker":true,"registerAsDefaultTracker":true,"jsEndpoint":"matomo.js","trackingEndpoint":"matomo.php"},"Variable":"MatomoConfigurationVariable"},"trackingType":"pageview","idGoal":"","goalCustomRevenue":"","documentTitle":"","customUrl":"","eventCategory":"","eventAction":"","eventName":"","eventValue":""},"blockTriggerIds":[],"fireTriggerIds":[10,11,12,13],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"MatomoTag"}],"triggers":[{"id":9,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"Type de contenu","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"og:type"},"Variable":"MetaContentVariable"},"comparison":"equals","expected":"Information institutionnelle"}],"Trigger":"PageViewTrigger"},{"id":10,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"Type de contenu","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"og:type"},"Variable":"MetaContentVariable"},"comparison":"equals","expected":"Information presse"}],"Trigger":"PageViewTrigger"},{"id":11,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"Type de contenu","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"og:type"},"Variable":"MetaContentVariable"},"comparison":"equals","expected":"Press release"}],"Trigger":"PageViewTrigger"},{"id":12,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"Type de contenu","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"og:type"},"Variable":"MetaContentVariable"},"comparison":"equals","expected":"Actualit\u00e9"}],"Trigger":"PageViewTrigger"},{"id":13,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"Type de contenu","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"og:type"},"Variable":"MetaContentVariable"},"comparison":"equals","expected":"News"}],"Trigger":"PageViewTrigger"}],"variables":[{"name":"MatomoConfiguration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/www.statistiques.cnrs.fr\/","idSite":"1","enableLinkTracking":true,"enableCrossDomainLinking":true,"enableDoNotTrack":true,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"trackAllContentImpressions":true,"trackVisibleContentImpressions":true,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"setSecureCookie":true,"cookieDomain":"","cookiePath":"","cookieSameSite":"Lax","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[],"bundleTracker":true,"registerAsDefaultTracker":true,"jsEndpoint":"matomo.js","trackingEndpoint":"matomo.php"},"Variable":"MatomoConfigurationVariable"},{"name":"MetaContent","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"keywords"},"Variable":"MetaContentVariable"},{"name":"MatomoConfiguration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"https:\/\/www.statistiques.cnrs.fr\/","idSite":"1","enableLinkTracking":true,"enableCrossDomainLinking":true,"enableDoNotTrack":true,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"trackAllContentImpressions":true,"trackVisibleContentImpressions":true,"disableCookies":false,"requireConsent":false,"requireCookieConsent":false,"customCookieTimeOutEnable":false,"customCookieTimeOut":393,"setSecureCookie":true,"cookieDomain":"","cookiePath":"","cookieSameSite":"Lax","disableBrowserFeatureDetection":false,"domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[{"index":"1","value":{"name":"Th\u00e9matiques","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"keywords"},"Variable":"MetaContentVariable"}}],"bundleTracker":true,"registerAsDefaultTracker":true,"jsEndpoint":"matomo.js","trackingEndpoint":"matomo.php"},"Variable":"MatomoConfigurationVariable"},{"name":"MetaContent","type":"MetaContent","lookUpTable":[],"defaultValue":"","parameters":{"metaName":"og:type"},"Variable":"MetaContentVariable"}]}, Templates);})()
})();