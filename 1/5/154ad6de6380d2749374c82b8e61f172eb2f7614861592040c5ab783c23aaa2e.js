/*
 Oracle Infinity
 @preserve Copyright (c) 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 common.js v1.3.45
 Created: 2022-12-07T04:14:19+0000
*/
ORA.common||(ORA.common={});ORA.common.mutations||(ORA.common.mutations={});ORA.common.mobile||(ORA.common.mobile={});
ORA.common.clientID={cfg:{DNTBehavior:"honorDNT",wtidTimeout:1E3,cookie:{enable:!0,name:"ORA_FPC",expires:63113851500,autoTLD:!1,sessionOnly:!1,expireDate:new Date((new Date).getTime()+63113851500),domain:""},endpoint:{clientIDServer:"dc.oracleinfinity.io",accountGuid:"abcde12345",protocol:"https"}},isClientIdSet:!1,isWaitForSetClientId:!1,waitForSetClientId:setConfig:getClientID:setClientID:storeClientId:clearClientID:getId:
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
ORA.common.protocols={corsPost:collectionV2Post:{name:"collection.v2.post",protocol:,makeRequest:createEndpointUrl:gifProtocol:xhrProtocol:beaconProtocol:{name:"beaconProtocol",protocol:,xhrRespHandler:;ORA.common.isFn=ORA.common.isArray=
ORA.common.isRegExp=ORA.common.invokeFn=
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
ORA.common.getObjIdClasses=ORA.common.encode=
ORA.common.decode=ORA.common.isFpcSet=ORA.common.addEventListenersOnDOMElement=
ORA.common.getChildNodes=ORA.common.triggerMutationCallback=
ORA.common.getMutationObserver=
ORA.common.addMutationObserver=
ORA.common.isElementInViewport=
ORA.common.scrollEventCallback=ORA.common.getSelectedOption=
ORA.common.readDOMValue=ORA.common.getValueFromDOM=
ORA.common.CommManagerClass=ORA.common.CommManager=new ORA.common.CommManagerClass;
ORA.common.Message=
ORA.common.MutationMgrClass=ORA.common.Queue=
ORA.common.TrackingPipelineClass=
ORA.common.PluginMgrClass=
(();
ORA.common.mutations.PageAnalyze=
ORA.common.QueryParamCacheClass=ORA.common.QueryParamCache=new ORA.common.QueryParamCacheClass;
(();ORA.setExecuteState("common","ready");ORA.fireEvent(new ORA.Event(ORA.Event.COMMON_LOAD_COMPLETE,ORA.Event.STATUS_SUCCESS),!0);ORA.fireEvent(new ORA.Event(ORA.Event.COMMON_PRODUCT_READY,ORA.Event.STATUS_SUCCESS),!0);ORA.getQryParams=ORA.common.getQryParams;