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
if ((document.cookie.indexOf('mtmPreview17_HBF2fCC3%3D1') !== -1 && window.location.search.indexOf('&mtmPreviewMode=0') === -1 && window.location.search.indexOf('?mtmPreviewMode=0') === -1) || window.location.search.indexOf('&mtmPreviewMode=HBF2fCC3') !== -1 || window.location.search.indexOf('?mtmPreviewMode=HBF2fCC3') !== -1) {

    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=false; g.defer=false; g.src='https://piwik.wikimedia.org/js/container_HBF2fCC3_preview.js'; s.parentNode.insertBefore(g,s);
    return;
}
;if(typeof window.MatomoTagManager!=="object"){if(typeof window._mtm!=="object"){window._mtm=[]}window.MatomoTagManager=(function(){var j=new Date().getTime();function h(){if(window.mtmPreviewWindow&&"object"===typeof window.mtmPreviewWindow.mtmLogs){var G=new Date();var I=[];for(var H=0;H<arguments.length;H++){I.push(JSON.stringify(arguments[H]))}window.mtmPreviewWindow.mtmLogs.push({time:G.toLocaleTimeString()+"."+G.getMilliseconds(),messages:I})}}ar y={enabled:!!window.mtmPreviewWindow,log:error:; x=new F("localStorage");var e=new F("sessionStorage");var B={_compare:compare:trim:isDefined:isFunction:function(i){return typeof i==="function"},isObject:isString:function(i){return typeof i==="string"},isNumber:isArray:hasProperty:indexOfArray:setMethodWrapIfNeeded:;var t=var p=new t();var E={matchesDateRange:;var r={parseUrl:decodeSafe:getQueryParameter:;var c;var D={hasSetupScroll:false,scrollCallbacks:[],scrollListenEvents:["scroll","resize"],offScroll:didScroll:onScroll:getScreenHeight:function(){return a.screen.height},getScreenWidth:getViewportWidth:function(){var i=a.innerWidth||b.documentElement.clientWidth||b.body.clientWidth;if(!i){return 0}return i},getViewportHeight:getPerformanceTiming:;var A={loadScriptUrl:getScrollLeft:function(){return a.document.body.scrollLeft||a.document.documentElement.scrollLeft},getScrollTop:getDocumentHeight:function(){return Math.max(b.body.offsetHeight,b.body.scrollHeight,b.documentElement.offsetHeight,b.documentElement.clientHeight,b.documentElement.scrollHeight,1)},getDocumentWidth:addEventListener:getElementText:getElementClassNames:getElementAttribute:_htmlCollectionToArray:byId:byClassName:function(i){if(i&&"getElementsByClassName" in b){return this._htmlCollectionToArray(b.getElementsByClassName(i))}return[]},byTagName:function(i){if(i&&"getElementsByTagName" in b){return this._htmlCollectionToArray(b.getElementsByTagName(i))}return[]},bySelector:isElementContext:isAttributeContext:onLoad:onReady:;IMIT_ONCE_PAGE="once_page";g.FIRE_LIMIT_ONCE_24HOURS="once_24hours";g.FIRE_LIMIT_ONCE_LIFETIME="once_lifetime";g.FIRE_LIMIT_UNLIMITED="unlimited";function n(H,M){var I=this;this.id=H.id;this.idsite=H.idsite||null;this.versionName=H.versionName||null;this.revision=H.revision||null;this.environment=H.environment||null;this.templates=M||{};this.dataLayer=new t();this.variables=[];this.triggers=[];this.tags=[];this.onNewGlobalDataLayerValue=p.on(;this.addDebugValues=function(O){O.variables=[];var P;for(P=0;P<this.variables.length;P++){this.variables[P].addDebugValues(O.variables)
}O.tags=[];for(P=0;P<this.tags.length;P++){this.tags[P].addDebugValues(O.tags,"Not Fired Yet")}O.id=this.id;O.versionName=this.versionName;O.dataLayer=JSON.parse(JSON.stringify(this.dataLayer.values))};this.getTriggerById=this.addTrigger=var L,K,G,N,J;if(H.variables&&B.isArray(H.variables)){for(L=0;L<H.variables.length;L++){this.variables.push(o(H.variables[L],this))}}if(H.triggers&&B.isArray(H.triggers)){for(L=0;L<H.triggers.length;L++){this.addTrigger(H.triggers[L])}}if(H.tags&&B.isArray(H.tags)){for(L=0;L<H.tags.length;L++){N=H.tags[L];G=new g(N,this);this.tags.push(G);if(N.blockTriggerIds&&B.isArray(N.blockTriggerIds)){for(K=0;K<N.blockTriggerIds.length;K++){J=this.getTriggerById(N.blockTriggerIds[K]);if(J){J.addReferencedTag(G)}}}if(N.fireTriggerIds&&B.isArray(N.fireTriggerIds)){for(K=0;
K<N.fireTriggerIds.length;K++){J=this.getTriggerById(N.fireTriggerIds[K]);if(J){J.addReferencedTag(G)}}}}}this.run=var k={THROW_ERRORS:true,dataLayer:p,containers:[],url:r,date:E,utils:B,debug:y,dom:A,window:D,Variable:s,storage:{local:x,session:e},_buildVariable:o,Condition:z,TemplateParameters:w,Trigger:f,Tag:g,throwError:C,Container:n,addContainer:function(I,G){if(!window.mtmPreviewWindow){var H=b.getElementById("mtmDebugFrame");if(H&&H.contentWindow){window.mtmPreviewWindow=H.contentWindow}}y.log("creating container");var i=new n(I,G);this.containers.push(i);i.dataLayer.push({"mtm.containerId":i.id});y.log("running container");i.run();return i},enableDebugMode:function(){y.enabled=true}};if("matomoTagManagerAsyncInit" in a&&B.isFunction(a.matomoTagManagerAsyncInit)){a.matomoTagManagerAsyncInit()}var m=a._mtm;a._mtm={push:function(){var K,I,H,M,N;
for(K=0;K<arguments.length;K+=1){N=null;if(arguments[K]&&arguments[K].slice){N=arguments[K].slice()}M=arguments[K];if(B.isObject(M)&&!B.isArray(M)){p.push(M);continue}H=M.shift();var L=B.isString(H)&&H.indexOf("::")>0;if(L){var G,J;G=H.split("::");J=G[0];H=G[1];if("object"===typeof k[J]&&B.isFunction(k[J][H])){k[J][H].apply(k[J],M)}}else{if(H&&H in k&&B.isFunction(k[H])){k[H].apply(k,M)}else{y.error("method "+H+" is not valid")}}}}};var v;for(v=0;v<m.length;v++){a._mtm.push(m[v])}p.push({"mtm.mtmScriptLoadedTime":j});if("undefined"!==typeof a.dataLayer&&B.isArray(a.dataLayer)){for(v=0;v<a.dataLayer.length;v++){if(B.isObject(a.dataLayer[v])){p.push(a.dataLayer[v])}}}return k})()}
(function(){
var Templates = {};
Templates['MatomoTag'] = (function(){var libLoaded=false;var libAvailable=false;var callbacks={callbacks:[],push:;window._paq=window._paq||[];if('object'!==typeof window.piwikPluginAsyncInit){window.piwikPluginAsyncInit=[];}
window.piwikPluginAsyncInit.push(;function loadMatomo(){if(checkLoadedAlready()){return;}
/*!!
 * Piwik - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;if(typeof window.JSON==="object"&&typeof window.JSON.stringify==="function"&&typeof window.JSON.parse==="function"){JSON_PIWIK=window.JSON}else{(()}if(typeof _paq!=="object"){_paq=[]}if(typeof window.Piwik!=="object"){window.Matomo=window.Piwik=())}
/*!!! pluginTrackerHook */
());());if(typeof piwik_log!=="function"){piwik_log=
/*!! @license-end */;libAvailable=typeof window.Piwik!=='undefined'||typeof window.Matomo!=='undefined';libLoaded=libAvailable;}
function loadTracker(url,jsEndpoint){if(checkLoadedAlready()){return;}
if(!libLoaded){libLoaded=true;var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.type='text/javascript';g.async=true;g.src=url+jsEndpoint;s.parentNode.insertBefore(g,s);}}
var configuredTrackers={};return function(parameters,TagManager){var lastUserId;var lastIdSite;var lastMatomoUrl;this.fire=function(){callbacks.push(function(){if(!parameters.matomoConfig||!parameters.matomoConfig.name){return;}
var variableName=parameters.matomoConfig.name;var matomoConfig=parameters.get('matomoConfig',{});var tracker;if(variableName in configuredTrackers){tracker=configuredTrackers[variableName];}else{lastIdSite=matomoConfig.idSite;lastMatomoUrl=getMatomoUrlFromConfig(matomoConfig);var trackerUrl=lastMatomoUrl+matomoConfig.trackingEndpoint;if(matomoConfig.registerAsDefaultTracker){tracker=Piwik.addTracker(trackerUrl);}else{tracker=Piwik.getTracker(trackerUrl);}
configuredTrackers[variableName]=tracker;if(matomoConfig.disableCookies){tracker.disableCookies();}
if(matomoConfig.enableCrossDomainLinking){tracker.enableCrossDomainLinking();}
if(matomoConfig.setSecureCookie){tracker.setSecureCookie(true);}
if(matomoConfig.cookieDomain){tracker.setCookieDomain(matomoConfig.cookieDomain);}
if(matomoConfig.cookiePath){tracker.setCookiePath(matomoConfig.cookiePath);}
if(matomoConfig.domains&&TagManager.utils.isArray(matomoConfig.domains)&&matomoConfig.domains.length){var domains=[];var k,domainType;for(k=0;k<matomoConfig.domains.length;k++){var domainType=typeof matomoConfig.domains[k];if(domainType==='string'){domains.push(matomoConfig.domains[k]);}else if(domainType==='object'&&matomoConfig.domains[k].domain){domains.push(matomoConfig.domains[k].domain);}}
tracker.setDomains(domains);}
tracker.setSiteId(matomoConfig.idSite);if(matomoConfig.alwaysUseSendBeacon){tracker.alwaysUseSendBeacon();}
if(matomoConfig.enableLinkTracking){tracker.enableLinkTracking();}
if(matomoConfig.enableDoNotTrack){tracker.setDoNotTrack(1);}
if(matomoConfig.enableJSErrorTracking){tracker.enableJSErrorTracking();}
if(matomoConfig.enableHeartBeatTimer){tracker.enableHeartBeatTimer();}
if(matomoConfig.trackAllContentImpressions){tracker.trackAllContentImpressions();}
if(matomoConfig.trackVisibleContentImpressions){tracker.trackVisibleContentImpressions();}}
if((matomoConfig.userId||tracker.getUserId())&&lastUserId!==matomoConfig.userId){tracker.setUserId(matomoConfig.userId);lastUserId=matomoConfig.userId;}
if(matomoConfig.idSite&&lastIdSite!==matomoConfig.idSite){tracker.setSiteId(matomoConfig.idSite);lastIdSite=matomoConfig.idSite;}
var possiblyUpdatedMatomoUrl=getMatomoUrlFromConfig(matomoConfig);if(possiblyUpdatedMatomoUrl&&lastMatomoUrl!==possiblyUpdatedMatomoUrl){tracker.setTrackerUrl(possiblyUpdatedMatomoUrl+matomoConfig.trackingEndpoint);lastIdSite=possiblyUpdatedMatomoUrl;}
if(matomoConfig.customDimensions&&TagManager.utils.isArray(matomoConfig.customDimensions)&&matomoConfig.customDimensions.length){var dimIndex;for(dimIndex=0;dimIndex<matomoConfig.customDimensions.length;dimIndex++){var dimension=matomoConfig.customDimensions[dimIndex];if(dimension&&TagManager.utils.isObject(dimension)&&dimension.index&&dimension.value){tracker.setCustomDimension(dimension.index,dimension.value);}}}
if(tracker){var trackingType=parameters.get('trackingType');if(trackingType==='pageview'){var customTitle=parameters.get('documentTitle');if(customTitle){tracker.setDocumentTitle(customTitle);}
var customUrl=parameters.get('customUrl');if(customUrl){tracker.setCustomUrl(customUrl);}
tracker.trackPageView();}else if(trackingType==='event'){tracker.trackEvent(parameters.get('eventCategory'),parameters.get('eventAction'),parameters.get('eventName'),parameters.get('eventValue'));}else if(trackingType==='goal'){tracker.trackGoal(parameters.get('idGoal'));}}});var matomoConfig=parameters.get('matomoConfig',{});if(matomoConfig.bundleTracker){loadMatomo();}
if(!matomoConfig.matomoUrl||!matomoConfig.idSite){return;}
var matomoUrl=getMatomoUrlFromConfig(matomoConfig);loadTracker(matomoUrl,matomoConfig.jsEndpoint);};};})(); 
Templates['MatomoConfigurationVariable'] = ((); 
Templates['PageViewTrigger'] = ((); 
Templates['PageUrlVariable'] = ((); 
window.MatomoTagManager.addContainer({"id":"HBF2fCC3","idsite":17,"versionName":"wmf1.0","revision":1,"environment":"live","tags":[{"id":2,"type":"Matomo","name":"0e0b9dd7788ce735965ec12013e4f5cf","parameters":{"matomoConfig":{"name":"Matomo Configuration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"\/\/piwik.wikimedia.org\/","idSite":"17","enableLinkTracking":true,"enableCrossDomainLinking":false,"enableDoNotTrack":false,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"trackAllContentImpressions":true,"trackVisibleContentImpressions":false,"disableCookies":false,"setSecureCookie":false,"cookieDomain":"","cookiePath":"","domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[],"bundleTracker":true,"registerAsDefaultTracker":true,"jsEndpoint":"piwik.js","trackingEndpoint":"piwik.php"},"Variable":"MatomoConfigurationVariable"},"trackingType":"pageview","idGoal":"","documentTitle":"","customUrl":"","eventCategory":"","eventAction":"","eventName":"","eventValue":""},"blockTriggerIds":[],"fireTriggerIds":[3],"fireLimit":"unlimited","fireDelay":0,"startDate":null,"endDate":null,"Tag":"MatomoTag"}],"triggers":[{"id":3,"type":"PageView","name":"PageView","parameters":[],"conditions":[{"actual":{"name":"PageUrl","type":"PageUrl","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageUrlVariable"},"comparison":"equals","expected":"https:\/\/wikimediafoundation-org-preprod.go-vip.net\/about\/jobs\/"}],"Trigger":"PageViewTrigger"}],"variables":[{"name":"MatomoConfiguration","type":"MatomoConfiguration","lookUpTable":[],"defaultValue":"","parameters":{"matomoUrl":"\/\/piwik.wikimedia.org\/","idSite":"17","enableLinkTracking":true,"enableCrossDomainLinking":false,"enableDoNotTrack":false,"enableJSErrorTracking":false,"enableHeartBeatTimer":false,"trackAllContentImpressions":true,"trackVisibleContentImpressions":false,"disableCookies":false,"setSecureCookie":false,"cookieDomain":"","cookiePath":"","domains":[],"alwaysUseSendBeacon":false,"userId":"","customDimensions":[],"bundleTracker":true,"registerAsDefaultTracker":true,"jsEndpoint":"piwik.js","trackingEndpoint":"piwik.php"},"Variable":"MatomoConfigurationVariable"},{"name":"PageUrl","type":"PageUrl","lookUpTable":[],"defaultValue":null,"parameters":[],"Variable":"PageUrlVariable"}]}, Templates);})()
})();
