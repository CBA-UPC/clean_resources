;(function(win){var ccaoName="cca";var ccao=win[ccaoName];ccao.privacy=ccao.privacy||{que:[]};var googletag=win.googletag||{};var requestTimeout={};var requestTimedOut=false;var PREBID_TIMEOUT=1000;var prebidJs=win["pbjs"]||win["pbjsSortable"]||{};prebidJs.que=prebidJs.que||[];var gptTargeting=function(response){var pubads=googletag.pubads().getSlots();for(i=0;i<pubads.length;i++){pubads[i].setTargeting("carbon_audience",response.audiences.map(function(i){return i.id;}));pubads[i].setTargeting("carbon_interests",response.interests.map(function(i){return i.id;}));pubads[i].setTargeting("carbon_brands",response.brands.map(function(i){return i.id;}));pubads[i].setTargeting("carbon_demographics",response.demographics.map(function(i){return i.id;}));}
googletag.pubads().refresh();};function setStorage(store,key,value){if(!ccao.privacy.law||typeof ccao.privacy.law!=="string"){ccao.privacy.law="unknown";}
switch(ccao.privacy.law.toLowerCase()){case "gdpr":if(ccao.privacy.gdpr.Consent){store.setItem(key,value);}
break;case "ccpa":if(ccao.privacy.ccpa.Consent){store.setItem(key,value);}
break;case "na":store.setItem(key,value);break;case "optout":case "unknown":default:break;}}
var prebidTargetting=function(response){var config=prebidJs.getConfig();var user=Object.assign(config.user||{},response.user);user.dnt=win._ccScriptSettings.user.dnt;prebidJs.setConfig({user:user});prebidJs.que.push(;};win.ccRealTime=win.ccRealTime||{};win.ccRealTime.callback=function(response){clearTimeout(requestTimeout);if(!requestTimedOut&&win._ccScriptSettings.realtime.setGptTargeting&&googletag.pubads){gptTargeting(response);}
if(!requestTimedOut&&win._ccScriptSettings.realtime.setPrebidConfig&&googletag.pubads&&typeof prebidJs.getConfig==="function"){prebidTargetting(response);}
try{ccao.privacy=ccao.privacy||{};ccao.privacy.que=ccao.privacy.que||[];ccao.privacy.que.push(function(){setStorage(win.localStorage,'ccRealtimeData',JSON.stringify(response));});win.cca.api.dispatchEvent('realtimeReady',response);}catch(err){console.debug('realtimeReady error:'+err.message);}
if(win._ccScriptSettings.realtime.loadAudiences){win._ccScriptSettings.user.audienceMemberships=response.audiences.map(function(i){return i.id;});win.cca.api.dispatchEvent('audiencesReady',response.audiences.map();}
if(win._ccScriptSettings.realtime.loadIntent){win._ccScriptSettings.user.interests=response.interests;win.cca.api.dispatchEvent('interestsReady',response.interests);}
if(win._ccScriptSettings.realtime.loadDemographics){win._ccScriptSettings.user.demographics=response.demographics;win.cca.api.dispatchEvent('demographicsReady',response.demographics);}
if(win._ccScriptSettings.realtime.loadBrands){win._ccScriptSettings.user.brands=response.brands;win.cca.api.dispatchEvent('brandsReady',response.brands);}};var startScript=function(userId,isNew){if(isNew){return;}
requestTimeout=setTimeout(50,;var qsOptions="?ccuid="+userId+
"&intent="+win._ccScriptSettings.realtime.loadIntent+
"&demo="+win._ccScriptSettings.realtime.loadDemographics+
"&brands="+win._ccScriptSettings.realtime.loadBrands+
"&audiences="+win._ccScriptSettings.realtime.loadAudiences+
"&parentId="+win._ccScriptSettings.site.parentId;ccao.loadScript(win._ccLauncherSettings.api+"/getProfileRealtime"+qsOptions,undefined,function(){var realTimeData=JSON.parse(win.localStorage.getItem('ccRealtimeData'));if(realTimeData!=null){if(addDays(realTimeData.createdAt,14).getTime()<=new Date().getTime()){win.localStorage.removeItem('ccRealtimeData');}}});};if(win.carbonApi.ready===true)
startScript(win._ccScriptSettings.user.id,win._ccScriptSettings.user.isNew);else
win.carbonApi.userIdEvent(startScript);})(window);