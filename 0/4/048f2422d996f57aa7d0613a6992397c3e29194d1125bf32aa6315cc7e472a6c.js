/*
 Oracle Infinity
 @preserve Copyright (c) 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 common.js v1.3.48
 Created: 2023-08-28T06:10:12+0000

*/
ORA.common||(ORA.common={});ORA.common.mutations||(ORA.common.mutations={});ORA.common.mobile||(ORA.common.mobile={});
ORA.common.clientID={cfg:{DNTBehavior:"honorDNT",wtidTimeout:1E3,cookie:{enable:!0,name:"ORA_FPC",expires:63113851500,autoTLD:!1,sessionOnly:!1,expireDate:new Date((new Date).getTime()+63113851500),domain:""},endpoint:{clientIDServer:"dc.oracleinfinity.io",accountGuid:"abcde12345",protocol:"https"}},isClientIdSet:!1,isWaitForSetClientId:!1,waitForSetClientId:setConfig:getClientID:setClientID:storeClientId:clearClientID:getId:function(a,b){var c=ORA.common.protocols.xhrProtocol({endpoint:a.protocol+"://"+
a.clientIDServer+"/v4/account/"+(a.accountGuid||"not_supplied")+"/client/id",type:"GET"},function(d){if(null!==b){if("undefined"===typeof d||ORA.common.clientID.clientId)ORA.common.clientID.clientId?b(ORA.common.clientID.clientId):c(ORA.common.clientID.getUniqueID());else{var f={data:{}};try{f=JSON.parse(d)}catch(e){ORA.Debug.error("getId - Invalid JSON")}f.data.id?c(f.data.id):c(ORA.common.clientID.getUniqueID())}ORA.fireEvent(new ORA.Event(ORA.Event.COMMON_GETID,ORA.Event.STATUS_SUCCESS))}},},
getUniqueID:;
ORA.common.getMergedConfigs=ORA.common._getConfigObject=
ORA.common._mergeCopy=ORA.common._shallowMerge=
ORA.common._deepMerge=
ORA.common.CookieMgrClass=
ORA.common.CountDownLatchClass=
ORA.common._createScriptEl=ORA.common._createElement=ORA.common._functionFactory=
ORA.common._execScript=
ORA.common.getQryParams=ORA.common._isDNTSet=ORA.common._isEloquaOptOutSet=function(a){return a.ELOQUA&&void 0!==a.ELOQUA.GUID&&"00000000000000000000000000000000"===a.ELOQUA.GUID};ORA.common._isOracleOptOutSet=function(a){return a.OPTOUT&&void 0!==a.OPTOUT.s33&&"0"===a.OPTOUT.s33};
ORA.common._isInfinityOptOutSet=ORA.common._isWTOptOutSet=function(a){return!!a.WTOPTOUT&&a.WTOPTOUT["1"]};
ORA.common._isOptedOut=ORA.common._setInfinityOptOut=
ORA.common.loadJS=ORA.common._getIEVer=
ORA.common.isSafariBrowser=ORA.common.isMobileBrowser=
ORA.common.visitMetaTags=ORA.common.elemExists=
ORA.common.createObserver=ORA.common.protocols||(ORA.common.protocols={});
ORA.common.protocols={corsPost:collectionV2Post:{name:"collection.v2.post",protocol:,makeRequest:createEndpointUrl:function(a,b){var c=a,d=[];b.dcsdat=(new Date).getTime();
for(var f in b)if(b.hasOwnProperty(f)){var e=d,g=e.push,h=f;var t=b[f];t="function"===typeof encodeURIComponent?encodeURIComponent(t):escape(t);g.call(e,h+"\x3d"+t)}0<d.length&&(c+="?"+d.join("\x26"));(d=ORA.common._getIEVer())&&9>d&&2048<c.length&&(c=c.substring(0,2040)+"\x26wt.tu\x3d1",ORA.Debug.debug("Warning: exceeded max size of limit 2047. Truncating payload."));return c},gifProtocol:function(a,b,c,d){var f=a.endpoint,e=!1,g=a.timeout||2E3,h=c||function(){},t=d||function(){};if(!b)throw Error("Payload is not defined");
if(ORA.common._isOptedOut()&&a.protocolType&&"default"!==a.protocolType)return ORA.Debug.debug("Sending no data due to opted out"),e=!0,ORA.common.invokeFn(t),!0;a=ORA.common.protocols.createEndpointUrl(f,b);b=new Image;b.onload=function(){if(!e)return e=!0,ORA.common.invokeFn(h),!0};b.onerror=window.setTimeout(g);ORA.Debug.debug("gifProtocol sending:"+a);b.src=a;return!0},xhrProtocol:beaconProtocol:{name:"beaconProtocol",protocol:,xhrRespHandler:;
ORA.common.isFn=ORA.common.isArray=ORA.common.isRegExp=ORA.common.invokeFn=
ORA.common.extendArray=
ORA.common.extendObject=ORA.common.isEmpty=
ORA.common.objectToKVPArray=ORA.common.extendProps=ORA.common.JSONPrettify=
ORA.common.trim=ORA.common.getAttrIfExistsElseDefault=ORA.common.isInteger=
ORA.common.getObjId=
ORA.common.getObjIdStrict=
ORA.common._qsaEscape=
ORA.common._getClassAttrValue=ORA.common._isDynamicClass=ORA.common._getClasses=
ORA.common._isYuiDynamicId=ORA.common._getTheSameSiblings=
ORA.common._getSubSelectorByClasses=ORA.common._getSubSelectorByTagWithIndex=
ORA.common._getUniqueId=ORA.common._filterUniqueClasses=
ORA.common.getObjIdClasses=ORA.common.encode=function(a){for(var b=[],c=0;c<a.length;c++){var d=b,f=d.push;var e=void 0;var g=a[c],h=[];for(e in g)g.hasOwnProperty(e)&&(h.push(String(e)),h.push(encodeURIComponent(g[e])));e=h.join(",");f.call(d,e)}return b.join(":")};
ORA.common.decode=function(a){var b=[];a=a.split(":");for(var c=0;c<a.length;c++){for(var d=b,f=d.push,e=a[c].split(","),g={},h=0;h<e.length;h+=2)g[e[h]]=decodeURIComponent(e[h+1]);f.call(d,g)}return b};ORA.common.isFpcSet=ORA.common.addEventListenersOnDOMElement=
ORA.common.getChildNodes=ORA.common.triggerMutationCallback=
ORA.common.getMutationObserver=
ORA.common.addMutationObserver=
ORA.common.isElementInViewport=
ORA.common.scrollEventCallback=function(a){this.documentObject||(this.documentObject={},this.documentObject.de=document.documentElement,this.documentObject.db=document.body,this.documentObject.hs="CSS1Compat"===document.compatMode?this.documentObject.de.clientHeight||window.innerHeight||0:this.documentObject.db.clientHeight||0);a=Math.ceil(Math.round((this.documentObject.hs+(window.pageYOffset||this.documentObject.de&&this.documentObject.de.scrollTop||this.documentObject.db.scrollTop))/Math.max(this.documentObject.db.scrollHeight,
this.documentObject.de.scrollHeight,this.documentObject.db.offsetHeight,this.documentObject.de.offsetHeight,this.documentObject.db.clientHeight,this.documentObject.de.clientHeight)*100)/a);ORA.Debug.debug("percentilePart value "+a,"COMMON");return a};ORA.common.getSelectedOption=
ORA.common.readDOMValue=ORA.common.getValueFromDOM=
ORA.common.CommManagerClass=ORA.common.CommManager=new ORA.common.CommManagerClass;
ORA.common.Message=
ORA.common.MutationMgrClass=ORA.common.Queue=
ORA.common.TrackingPipelineClass=
ORA.common.PluginMgrClass=
(function(){ORA.Debug.superfine=ORA.Debug.superfine;ORA.Debug.trace=ORA.Debug.trace;ORA.Debug.error=ORA.Debug.error;ORA.Debug.debug=ORA.Debug.debug;ORA.Debug.info=ORA.Debug.info;var a=b=function(){var c=
d=function(e,g,h){ORA.Debug.info("ORA."+g);var t=e),q=function(k){var m={};k&&k.params&&k.params.data&&(m=JSON.parse(JSON.stringify(k.params.data)));return a(m,h)}(e),w,l;e&&e.params&&e.params.config&&e.params.config.callbacks&&e.params.config.callbacks.success&&(w=e.params.config.callbacks.success);
e&&e.params&&e.params.config&&e.params.config.callbacks&&e.params.config.callbacks.fail&&(l=e.params.config.callbacks.fail);var p={};p[g]=!0;return ORA.paramsMerge(e.params.config,{endpoints:t,desc:g,payload:q,mutation:p,success:w,fail:l})},f=ORA.addEventHandler(ORA.Event.LOADER_CLICK,;ORA.addEventHandler(ORA.Event.LOADER_COLLECT,function(e){e=d(e,"collect",0);c(e)});ORA.addEventHandler(ORA.Event.LOADER_VIEW,
;ORA.addEventHandler(ORA.Event.LOADER_RESET,f);ORA.addEventHandler(ORA.Event.LOADER_PRE_EXECUTE,};ORA.cookieMgr=new ORA.common.CookieMgrClass;ORA.common._setCookie=ORA.cookieMgr.setCookie;ORA.common._getCookieAsObj=ORA.cookieMgr.getCookieAsObj;ORA.common._deleteCookie=ORA.cookieMgr.deleteCookie;ORA.common._getCookieRaw=ORA.cookieMgr.getCookie;ORA.common._createCookie=ORA.cookieMgr.createCookie;
ORA.common._doesCookieExist=ORA.cookieMgr.doesCookieExist;ORA.common.setup=ORA.isOptedOut=ORA.common._isOptedOut;ORA.setInfinityOptOut=ORA.common._setInfinityOptOut;ORA.setCookie=
ORA.common._setCookie;ORA.deleteCookie=ORA.common._deleteCookie;ORA.getCookieRaw=ORA.getCookie=ORA.common._getCookieRaw;ORA.getCookieAsObj=ORA.common._getCookieAsObj;ORA.doesCookieExist=ORA.common._doesCookieExist;ORA.getIEVer=ORA.common._getIEVer;ORA.JSONPrettify=ORA.common.JSONPrettify;ORA.extendObject=ORA.common.extendObject;ORA.getQryParams=ORA.common.getQryParams;ORA.getClientID=ORA.common.clientID.getClientID;ORA.setClientID=ORA.common.clientID.setClientID;ORA.clearClientID=ORA.common.clientID.clearClientID})();
ORA.common.mutations.PageAnalyze=
ORA.common.QueryParamCacheClass=ORA.common.QueryParamCache=new ORA.common.QueryParamCacheClass;
(();ORA.setExecuteState("common","ready");ORA.fireEvent(new ORA.Event(ORA.Event.COMMON_LOAD_COMPLETE,ORA.Event.STATUS_SUCCESS),!0);ORA.fireEvent(new ORA.Event(ORA.Event.COMMON_PRODUCT_READY,ORA.Event.STATUS_SUCCESS),!0);ORA.getQryParams=ORA.common.getQryParams;