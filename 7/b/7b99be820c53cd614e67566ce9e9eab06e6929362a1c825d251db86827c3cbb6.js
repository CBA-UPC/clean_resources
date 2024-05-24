/*
 Copyright © 1995, 2021, Oracle and/or its affiliates. All rights reserved.

 For information, please see the following link:
 https://www.oracle.com/legal/copyright.html

 Oracle Infinity
 @preserve Copyright (c) 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 odc.js v1.0.7
 Created: 2021-07-28T20:10:30+0000
*/
(function(){function l(v,q){var u={major:1,minor:0,inc:7},h=this,C=!1,B=2E3,x=location.protocol,R="sizzle",O=null,P=!1,E=!1,K=!1,k={};this.getTagId;this.inHead=function(){return E};this.applyStyleSheet;this.removeStyleSheet;this.getSelector;this.setCustomSelector;this.hasVal;var X,Y,Z,aa,ba,ca;this.hideAndShow;E();var D=function(){P||(P=!0,ORA.fireEvent(new ORA.Event(ORA.Event.DOM_READY,ORA.Event.STATUS_SUCCESS),!0))},L,S,T;this.execute;this.loaderConversionTimeoutDefault=function(){return B};this.setLoaderConversionTimeoutDefault=function(a){B=a};this.reset;this.pollForCondition;this.paramsMerge;this.downloadLib=function(a,b,c,e,f,g){g&&(h.Debug.info("LOADER:  Start download: "+x+g+" \x26 attach to "+a+", async\x3d"+f),window.setTimeout(function(){var d=q.getElementsByTagName(a)[0],n=q.createElement("script");n.type="text/javascript";n.src=x+g;n.setAttribute("async",f);n.setAttribute("defer",f);n.oraHasRun=!1;var m=function(){!1===this.oraHasRun?(b(),this.oraHasRun=
!0,h.Debug.info("Completed download: "+x+g+", callback running oraHasRun\x3d"+this.oraHasRun,"LOADER"),h.Debug.superfine("downloadLib: successCallback\x3d"+b.toString(),"LOADER")):h.Debug.trace("downloadLib: not running successCallback, since oraHasRun\x3d"+this.oraHasRun,"LOADER")};b&&(n.onload=m,n.onreadystatechange=m);n.onerror=function(){h.Debug.error("FAILED download: "+x+g+" \x26 attach to "+a+", async\x3d"+f,"010");c&&(c(),h.Debug.superfine("failCallback: "+c.toString(),"LOADER"))};"undefined"!==
typeof d?d.appendChild(n):h.Debug.info("LOADER:  Dom element: "+a+" is not found so not Downloading")},e))};this.downloadLibs;this.parseQueryString;this.abortModuleHelper;this.Event;this.fireEventName=function(a,b){ORA.fireEvent(new ORA.Event(a,ORA.Event.STATUS_SUCCESS,null,b),null,null,!0)};this.EventEngineClass;var I=new this.EventEngineClass;this.addEventHandler=I.addEventHandler;this.removeEventHandler=
I.removeEventHandler;this.fireEvent=I.fireEvent;this.addFireOnce=I.addFireOnce;this.clearAllEventHandlers=I.clearAllEventHandlers;this.Event.PREINIT="preinit";this.Event.INIT="init";this.Event.PRELOAD="preload";this.Event.LOAD="load";this.Event.POSTLOAD="postload";this.Event.LOADER_ABORT="loader_abort";this.Event.LOADER_MODULE_ABORT="loader_module_abort";this.Event.DEBUGGER_CLEAR_COOKIES="debugger_clear_cookies";this.Event.DEBUGGER_DUMP_PARAMS="debugger_dump_params";this.Event.DEBUG_ERROR_OUT="debug_error_out";
this.Event.DOM_READY="dom_ready";this.Event.DOM_ONLOAD="dom_onload";this.Event.TIMER_EXPIRE="timer_expire";this.Event.TIMER_CLEAR="timer_clear";this.Event.STATUS_SUCCESS="success";this.Event.STATUS_FAULT="fault";this.Event.STATUS_UNKNOWN="unknown";this.Event.PAGEVIEW="pageview";this.Event.CONVERSION="conversion";this.Event.DEBUGGER_CHECK_MODE="debugger_check_mode";this.Event.SCRIPT_LOAD_COMPLETE="script_load_complete";this.Event.HIDESHOW="hide_show";this.Event.SET_CLIENT_ID="set_client_id";this.Event.CLEAR_CLIENT_ID=
"clear_client_id";this._Debug;var U,y;y.WAITING="waiting";y.DOWNLOADING="downloading";y.READY="ready";y.RUNNING="running";y.ABORTED="aborted";this.registerPlugin;this.clearPlugins;this.hasMetDeps;this.getDependents;this.updateDependencies;var V;this.setExecuteState;this.getExecuteState;this.isDependency;this.getTrackingPipelineProducts;this.getContextUrl;this.getProduct;
this.isProductEnabled;this.isReady=function(){return P};this.isLoaded=function(){return K};this.addDOMEvent;this.removeDOMEvent;this.getSafeEventName;var ea,fa,ha;h.Debug=new h._Debug;var G=this.parseQueryString(v);
h.hasVal(G)&&h.hasVal(G["_ora.debug"])&&h.Debug.setDebugLevel(G["_ora.debug"]);var H,A();if("undefined"!==typeof A){h.Debug.info("LOADER:  Found one or more context(s)");for(var Q in A)A.hasOwnProperty(Q)&&h.Debug.trace('LOADER:  triggers have set contextTriggerMap "'+Q+'":"'+A[Q]+'"')}var N,J;h.Debug.info("LOADER:  Version "+[u.major,u.minor,u.inc].join("."));this.addEventHandler(this.Event.PREINIT,function(){var a="unknown";try{for(a in k){var b;
if(b=k.hasOwnProperty(a)){var c=a;b=ORA.hasVal(k[c].plugin)&&ORA.hasVal(k[c].plugin[ORA.Event.PREINIT])}b&&N(a)&&ORA.getExecuteState(a)!==ORA.Event.LOADER_MODULE_ABORT&&(c='LOADER:  product "'+a+'" with context name "',c+=k[a].configName+'" _preinit phase start',h.Debug.trace(c),k[a].plugin[ORA.Event.PREINIT](),c='LOADER:  product "'+a+'" with context name "',c+=k[a].configName+'" _preinit phase complete',h.Debug.trace(c))}}catch(e){ORA.abortModuleHelper(a,e)}},function(){J("preinit fail")});this.addEventHandler(this.Event.INIT,,
function(){J("init fail")});this.addEventHandler(this.Event.PRELOAD,function(){J("preload fail")});this.addEventHandler(this.Event.LOAD,function(){J("load fail")});this.addEventHandler(this.Event.LOADER_ABORT);var W=[];this.start;this.productReady=function(a,b,c){var e=k[a];c=c||"_product_ready";if(!e||e.executeState!==y.READY&&e.executeState!==
y.RUNNING)e?(ORA.addEventHandler(a+c,b),ORA.Debug.debug("attached lister for "+a+" "+c)):(ORA.Debug.debug("product was not found attaching to "+a+" "+c),ORA.addEventHandler(a+c,b));else try{b()}catch(f){ORA.Debug.debug("User supplied product ready callback failed "+f.message)}};this.productReady.push;h.Debug.debug("ORA object created","LOADER");h.Debug.info('To dump config params use: "ORA.Debug.dumpParams()"');
h.Debug.info('To check the mode use: "ORA.Debug.checkMode(false)" - Use true if you wish to reset the mode.')}var p;if("undefined"===typeof ORA||"undefined"!==typeof ORA&&!ORA.ready){var r=[];"undefined"!==typeof ORA&&ORA.productReady&&(r=ORA.productReady);
ORA=new l(window,window.document,window.navigator,window.location);p(r);ORA.ready=!0}else console.error("ORA global namespace already in use, Infinity not loaded/setup")})();
(function(){"undefined"!==typeof ORA&&!0===ORA.ready&&(!0===ORA.isInitCompleted?ORA.Debug.error("The tag is being loaded multiple times. Exiting second tag initialization request."):(ORA.isInitCompleted=!0,ORA.registerPlugin=ORA.registerPlugin,ORA.abortModuleHelper=ORA.abortModuleHelper,ORA.setLoaderConversionTimeoutDefault=ORA.setLoaderConversionTimeoutDefault,ORA.loaderConversionTimeoutDefault=ORA.loaderConversionTimeoutDefault,ORA.downloadLib=ORA.downloadLib,ORA.reset=ORA.reset,ORA.productLoadInit=
function(){ORA.analyticsModule=function(){};ORA.analyticsModule.prototype.oraConfigObj={s_disableSeed:!1,alwaysLoad:!0,"ora-plugins":{cg:{enable:!0,cgDefs:"wt.cg_l1 wt.cg_l2 wt.cg_l3 wt.cg_l4 wt.cg_l5 wt.cg_l6 wt.cg_l7 wt.cg_l8 wt.cg_l9 wt.cg_l10".split(" "),blockCollect:!0},html5Video:{enable:!0,poll:!1,pctInc:25,beraconType:"auto",seek:!0,pollRate:250,nameCallback:null,beaconCurve:{300:30,60:10,600:60,130:30,420:45,1800:150},pause:!0,load:!1,cued:!1,loadMeta:!1,screenMode:!1,beacon:!0,postMessage:!1,
fixed:!1,quartile:!0,buffering:!1,bins:15,beaconRate:60,metaTags:!0,volume:!1},evtTrack:{enable:!0,eventList:{myClick:{eventTrigger:"mousedown",selector:"BUTTON.btnTest",eventCallback:'var el \x3d e["element"] || e["srcElement"] || {},payload \x3d {};payload["WT.ti"] \x3d "Button:" + el.textContent || el.innerText;payload["WT.dl"] \x3d "99";return {"data": payload};'}},trackSocial:!0,standardEvents:{anchor:!0,onsite:!0,offsite:!0,rightclick:!0,download:!0,javascript:!1,scrollTracking:!0},downloadtypes:"xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip,pptx",
socialTypes:{Reddit:["Reddit.com"],Pinterest:["Pinterest.com"],YouTube:["youtube.com"],Meetup:["Meetup.com"],"Google+":["plus.google.com"],VK:["VK.com"],Twitter:["Twitter.com"],Odnoklassniki:["Odnoklassniki.ru"],Weibo:["Weibo.com"],Facebook:["www.facebook.com"],"Ask.fm":["Ask.fm"],Tumblr:["Tumblr.com"],LinkedIn:["LinkedIn.com"],Instagram:["instagram.com"],Flickr:["Flickr.com"],Qzone:["Qzone.qq.com"]}},yt:{enable:!0,legacy:!1,pctInc:25,seek:!0,pause:!0,load:!1,cued:!1,loadMeta:!1,beacon:!0,mode:"auto",
quartile:!0,buffering:!1,loadAPI:!1,bins:15,beaconRate:60,volume:!1},fragment:{virtualPageView:!1,prefix:"anchor",blockCollect:!0,virtialDl:26,paramHandeling:"addPrefix",addAnchorName:"name",applyClickEventOnly:!1},bc:{enable:!0,poll:!1,pctInc:25,beraconType:"auto",seek:!0,pollRate:250,nameCallback:null,beaconCurve:{300:30,60:10,600:60,130:30,420:45,1800:150},pause:!0,load:!1,cued:!1,preProcess:null,loadMeta:!1,screenMode:!1,beacon:!0,maxBinds:10,postMessage:!1,fixed:!1,playerId:"div[id^\x3d'vjs_video']:not([id$\x3d'_api']):not([id*\x3d'_component'])",
quartile:!0,buffering:!1,bins:15,beaconRate:60,metaTags:!0,volume:!1},heatmap:{enable:!0,maxymiserEnable:!0,blockCollect:!0},cookieCutter:{readCookies:[{cookie:{TEST:"ora.cook_a"},options:{persist:!0}},{cookie:{ORA_FPC:{id:"ora.c_id",ss:"ora.c_ss",lv:"ora.c_lv"}},options:{parseOn:":",parseLv:"\x3d"}},{cookie:{ELOQUA:{GUID:"ora.eloqua"}}},{cookie:{utag_main:{_ss:"ora.u_ss",_st:"ora.u_st",v_id:"ora.u_vid",_sn:"ora.u_sn",ses_id:"ora.u_ses_id"}},options:{parseOn:"$",parseLv:":",persist:!1}}],enable:!0},
pp:{enable:!0,cookieDays:365,priority:100,defPrefix:"DCSext",params:["wt.gcm_uid","wt.p_cookie_att","wt.gcm_uid","wt.p_status","vtid"],useMostRecent:!0,cookieName:"WTPERSIST"},plt:{enable:!0,waitTime:150,sampleRate:50,assetFilter:".*js",maxT:2,enablePerf:!1,perfLimit:50}},timezone:0,enabled:!0,DNTBehavior:"honorDNT",skip_qp_no_equals:!0,s_dependencies:"common:running","hosted-plugins":{InfinityPlugin:{enable:!0,src:"https://www.oracle.com/asset/web/analytics/infinity_common.js",blockCollect:!1}},
defaultCollectionServer:"dc.oracleinfinity.io",s_useTrackingPipeline:!0,libUrl:"//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracleblogs/analytics-production/analytics.js",accountGuid:"wh3g12c3gg",tagId:"oracleblogs",secureCookie:!1,FPCConfig:{domain:".oracle.com",sessionOnly:!1,autoTLD:!1},cookieTypes:"firstpartyonly",destinations:[{accountGuid:"wh3g12c3gg"}],s_TrackingPipelineTimeout:4E3};typeof ORA.analyticsModule.prototype.oraConfigObj.enabled&&!1===ORA.analyticsModule.prototype.oraConfigObj.enabled?
ORA.Debug.debug("analytics  module disabled - exiting module setup"):(ORA.analyticsModule.prototype.preinit=function(){try{ORA.Debug.debug("PREINIT: Executing Preinit script")}catch(l){ORA.abortModuleHelper("analytics",l)}},ORA.analyticsModule.prototype.init,ORA.analyticsModule.prototype.preload=,ORA.analyticsModule.prototype.load,ORA.analyticsModule.prototype.postload,ORA.analyticsModule.prototype.abort);ORA.analyticsModule.ProductName="analytics";ORA.registerPlugin(ORA.analyticsModule,"production")}()()()(),function(){ORA.Event.ANA_LOAD_COMPLETE="analytics_load_complete";ORA.Event.ANA_ORA_PLUGINS_LOADED="analytics_ora_plugins_loaded";ORA.Event.ANA_HOSTED_PLUGINS_LOADED=
"analytics_hosted_plugins_loaded";ORA.Event.ANA_ORA_PLUGINS_INIT="analytics_ora_plugins_init";ORA.Event.ANA_HOSTED_PLUGINS_INIT="analytics_hosted_plugins_init";ORA.Event.ANA_DCS_SETUP="analytics_dcs_setup";ORA.Event.ANA_PRODUCT_READY="analytics_product_ready";ORA.Event.ANA_SETUP_COMPLETE="analytics_setup_complete";ORA.Event.ANA_BEFORE_PAGE_ANALYSIS="analytics_before_page_analysis";ORA.Event.ANA_AFTER_PAGE_ANALYSIS="analytics_after_page_analysis";ORA.Event.ANA_BEFORE_GETID="analytics_before_getid";
ORA.Event.ANA_AFTER_GETID="analytics_after_getid";ORA.Event.ANA_PV_MUTATE="analytics_pv_mutate";ORA.Event.ANA_DATA_SEND="analytics_data_send";ORA.Event.LOADER_CLICK="loader_click";ORA.Event.LOADER_PRE_EXECUTE="loader_pre_execute";ORA.Event.LOADER_EXECUTE="loader_execute";ORA.Event.LOADER_RESET="loader_reset";ORA.Event.LOADER_COLLECT="loader_collect";ORA.Event.LOADER_VIEW="loader_view";ORA.getContextName=function(){return ORA.getProduct("analytics")&&ORA.getProduct("analytics").configName||""};ORA.getConfigName=;var l;ORA.collect=function(p){l(ORA.Event.LOADER_COLLECT,p);return!0};ORA.view=function(p){l(ORA.Event.LOADER_VIEW,p);return!0};ORA.click=ORA.sendEvent;ORA.regPlugin}()(),ORA.productLoadInit(),
ORA.start()))})();