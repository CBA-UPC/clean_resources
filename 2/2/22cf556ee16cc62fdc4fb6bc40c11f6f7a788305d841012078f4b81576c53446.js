
// Copyright 2012 Google Inc. All rights reserved.
 
 ((window,'google_tag_manager');
 
(function(){

var data = {
"resource": {
  "version":"17",
  
  "macros":[{"function":"__e"},{"function":"__v","vtp_dataLayerVersion":2,"vtp_setDefaultValue":false,"vtp_name":"consentStatus"},{"function":"__cvt_103077572_5","vtp_consentKey":"sppd","vtp_option":"key"},{"function":"__u","vtp_component":"QUERY","vtp_queryKey":"brand","vtp_enableMultiQueryKeys":false,"vtp_enableIgnoreEmptyQueryParam":false},{"function":"__smm","vtp_setDefaultValue":true,"vtp_input":["macro",3],"vtp_defaultValue":"https:\/\/sst.hs.fi","vtp_map":["list",["map","key","hs","value","https:\/\/sst.hs.fi"],["map","key","hs-business","value","https:\/\/sst.hs.fi"],["map","key","al","value","https:\/\/sst.aamulehti.fi"],["map","key","sk","value","https:\/\/sst.satakunnankansa.fi"],["map","key","skk","value","https:\/\/sst.satakunnankansa.fi"],["map","key","is","value","https:\/\/sst.is.fi"],["map","key","mn","value","https:\/\/sst.is.fi"]]},{"function":"__e"},{"function":"__v","vtp_dataLayerVersion":2,"vtp_setDefaultValue":false,"vtp_name":"pakki_id"},{"function":"__v","vtp_dataLayerVersion":2,"vtp_setDefaultValue":false,"vtp_name":"pakki_title"},{"function":"__v","vtp_dataLayerVersion":2,"vtp_setDefaultValue":false,"vtp_name":"pakki_type"},{"function":"__cid"},{"function":"__ctv"},{"function":"__cvt_103077572_5","vtp_consentKey":"spcx","vtp_option":"key"},{"function":"__cvt_103077572_5","vtp_consentKey":"spam","vtp_option":"key"},{"function":"__cvt_103077572_5","vtp_consentKey":"spma","vtp_option":"key"},{"function":"__cvt_103077572_5","vtp_consentKey":"spad","vtp_option":"key"},{"function":"__cvt_103077572_5","vtp_consentKey":"spem","vtp_option":"key"},{"function":"__v","vtp_dataLayerVersion":2,"vtp_setDefaultValue":false,"vtp_name":"event_label"},{"function":"__v","vtp_dataLayerVersion":2,"vtp_setDefaultValue":false,"vtp_name":"pakki_variable_id"},{"function":"__gtes","vtp_eventSettingsTable":["list",["map","parameter","pakki_id","parameterValue",["macro",6]],["map","parameter","pakki_title","parameterValue",["macro",7]],["map","parameter","pakki_type","parameterValue",["macro",8]],["map","parameter","gtm_container_version","parameterValue",["template",["macro",9],"_",["macro",10]]],["map","parameter","cookieConsent_sppd","parameterValue",["macro",2]],["map","parameter","cookieConsent_spcx","parameterValue",["macro",11]],["map","parameter","cookieConsent_spam","parameterValue",["macro",12]],["map","parameter","cookieConsent_spma","parameterValue",["macro",13]],["map","parameter","cookieConsent_spad","parameterValue",["macro",14]],["map","parameter","cookieConsent_spem","parameterValue",["macro",15]],["map","parameter","event_label","parameterValue",["macro",16]],["map","parameter","pakki_variable_id","parameterValue",["macro",17]],["map","parameter","pakki_brand","parameterValue",["macro",3]]]},{"function":"__cvt_103077572_5","vtp_option":"string"},{"function":"__jsm","vtp_javascript":["template","(function(){return 1==",["escape",["macro",13],8,16],"})();"]},{"function":"__jsm","vtp_javascript":["template","(function(){var b=16;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]},{"function":"__v","vtp_dataLayerVersion":2,"vtp_setDefaultValue":false,"vtp_name":"consentVariation"},{"function":"__u","vtp_component":"URL","vtp_enableMultiQueryKeys":false,"vtp_enableIgnoreEmptyQueryParam":false},{"function":"__u","vtp_component":"HOST","vtp_enableMultiQueryKeys":false,"vtp_enableIgnoreEmptyQueryParam":false},{"function":"__u","vtp_component":"PATH","vtp_enableMultiQueryKeys":false,"vtp_enableIgnoreEmptyQueryParam":false},{"function":"__f","vtp_component":"URL"}],
  "tags":[{"function":"__googtag","priority":999,"metadata":["map"],"once_per_event":true,"vtp_tagId":"G-BT669YV034","vtp_configSettingsTable":["list",["map","parameter","send_page_view","parameterValue","false"],["map","parameter","server_container_url","parameterValue",["macro",4]],["map","parameter","cookie_flags","parameterValue","samesite=none;secure"]],"tag_id":31},{"function":"__gaawe","metadata":["map"],"setup_tags":["list",["tag",0,0]],"once_per_event":true,"vtp_sendEcommerceData":false,"vtp_enhancedUserId":false,"vtp_eventName":["macro",5],"vtp_measurementIdOverride":"G-BT669YV034","vtp_eventSettingsVariable":["macro",18],"vtp_enableUserProperties":true,"vtp_enableMoreSettingsOption":true,"vtp_enableEuid":true,"vtp_migratedToV2":true,"vtp_demoV2":false,"tag_id":37},{"function":"__html","metadata":["map"],"once_per_event":true,"vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(a){var b=a.data;0\u003Ee.indexOf(a.origin)||\"object\"!=typeof b||(b.hasOwnProperty(\"smfConsentAccepted\")\u0026\u0026(window.localStorage\u0026\u0026b.smfConsentAccepted.hasOwnProperty(\"consent\")\u0026\u0026(a=JSON.parse(b.smfConsentAccepted.consent),null!==a\u0026\u0026(window.parentConsent=a)),dataLayer.push({event:\"smfConsentAccepted\",smfConsentData:b.smfConsentAccepted}),c=!0),b.hasOwnProperty(\"smfConsentResponse\")\u0026\u0026(window.localStorage\u0026\u0026b.smfConsentResponse.hasOwnProperty(\"consent\")\u0026\u0026(a=JSON.parse(b.smfConsentResponse.consent),\nnull!==a\u0026\u0026(window.parentConsent=a,a.hasOwnProperty(\"sppd\")\u0026\u00261==a.sppd\u0026\u0026dataLayer.push({event:\"smfConsentAccepted\",smfConsentData:b.smfConsentResponse}))),dataLayer.push({event:\"smfConsentResponse\",smfConsentData:b.smfConsentResponse}),c=!0))}var e=\"https:\/\/www.is.fi https:\/\/www.hs.fi https:\/\/www.janakkalansanomat.fi https:\/\/www.aamulehti.fi https:\/\/www.satakunnankansa.fi https:\/\/www.jamsanseutu.fi https:\/\/www.kankaanpaanseutu.fi https:\/\/www.kmvlehti.fi https:\/\/www.merikarvialehti.fi https:\/\/www.nokianuutiset.fi https:\/\/www.rannikkoseutu.fi https:\/\/www.suurkeuruu.fi https:\/\/www.sydansatakunta.fi https:\/\/www.tyrvaansanomat.fi https:\/\/www.valkeakoskensanomat.fi https:\/\/test.is.fi https:\/\/test.hs.fi https:\/\/test.janakkalansanomat.fi https:\/\/test.aamulehti.fi https:\/\/test.satakunnankansa.fi https:\/\/test.jamsanseutu.fi https:\/\/test.kankaanpaanseutu.fi https:\/\/test.kmvlehti.fi https:\/\/test.merikarvialehti.fi https:\/\/test.nokianuutiset.fi https:\/\/test.rannikkoseutu.fi https:\/\/test.suurkeuruu.fi https:\/\/test.sydansatakunta.fi https:\/\/test.tyrvaansanomat.fi https:\/\/test.valkeakoskensanomat.fi https:\/\/apps-html.is.fi\/ https:\/\/apps-html.hs.fi https:\/\/apps-html.janakkalansanomat.fi https:\/\/apps-html.aamulehti.fi https:\/\/apps-html.satakunnankansa.fi https:\/\/apps-html.jamsanseutu.fi https:\/\/apps-html.kankaanpaanseutu.fi https:\/\/apps-html.kmvlehti.fi https:\/\/apps-html.merikarvialehti.fi https:\/\/apps-html.nokianuutiset.fi https:\/\/apps-html.rannikkoseutu.fi https:\/\/apps-html.suurkeuruu.fi https:\/\/apps-html.sydansatakunta.fi https:\/\/apps-html.tyrvaansanomat.fi https:\/\/apps-html.valkeakoskensanomat.fi\".split(\" \"),\nc=!1;window.addEventListener(\"message\",d,!1);setTimeout(function(){window.parent.postMessage(\"smfConsentRequest\",\"*\")},100);var f=setInterval(function(){c?clearInterval(f):window.parent.postMessage(\"smfConsentRequest\",\"*\")},2E3)})();\u003C\/script\u003E","vtp_supportDocumentWrite":false,"vtp_enableIframeMode":false,"vtp_enableEditJsMacroBehavior":false,"tag_id":7},{"function":"__html","metadata":["map"],"once_per_event":true,"vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.pakkiEventsQueued=window.pakkiEventsQueued||0;window.pakkiEventsQueued++})();\u003C\/script\u003E","vtp_supportDocumentWrite":false,"vtp_enableIframeMode":false,"vtp_enableEditJsMacroBehavior":false,"tag_id":43},{"function":"__html","metadata":["map"],"once_per_event":true,"vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(0\u003Cwindow.pakkiEventsQueued)for(var a=0;a\u003Cwindow.dataLayer.length;a++)if(window.dataLayer[a].event\u0026\u00260===window.dataLayer[a].event.indexOf(\"pakki_\")){var b={};Object.assign(b,window.dataLayer[a]);b.hasOwnProperty(\"gtm.uniqueEventId\")\u0026\u0026delete b[\"gtm.uniqueEventId\"];window.dataLayer.push(b);if(0===--window.pakkiEventsQueued)break}})();\u003C\/script\u003E","vtp_supportDocumentWrite":false,"vtp_enableIframeMode":false,"vtp_enableEditJsMacroBehavior":false,"tag_id":45}],
  "predicates":[{"function":"_eq","arg0":["macro",0],"arg1":"gtm.init"},{"function":"_eq","arg0":["macro",0],"arg1":"smfConsentAccepted"},{"function":"_cn","arg0":["macro",1],"arg1":"accepted"},{"function":"_eq","arg0":["macro",0],"arg1":"consent"},{"function":"_eq","arg0":["macro",2],"arg1":"1"},{"function":"_re","arg0":["macro",0],"arg1":".*"},{"function":"_re","arg0":["macro",0],"arg1":"pakki.*"},{"function":"_eq","arg0":["macro",0],"arg1":"gtm.js"}],
  "rules":[[["if",0],["add",0]],[["if",1],["add",0,4]],[["if",2,3],["add",0]],[["if",6],["add",1]],[["if",7],["add",2]],[["if",6],["unless",4],["add",3]],[["if",5],["unless",4],["block",0,1]]]
},
"runtime":[ [50,"__cvt_103077572_5",[46,"a"],[50,"n",[46,"u"],["f",["g",[15,"u"]]]],[52,"b",["require","localStorage"]],[52,"c",["require","getCookieValues"]],[52,"d",["require","setCookie"]],[52,"e",["require","JSON"]],[52,"f",["require","logToConsole"]],[52,"g",["require","makeString"]],[52,"h",["require","getQueryParameters"]],[52,"i",["require","copyFromWindow"]],[52,"j",[7,"sppd","spcx","spam","spma","spad","spem"]],[52,"k","8"],[52,"l","sp(pd|cx|am|ma|ad|em)(0|1|8|9)"],[52,"m",[2,[15,"j"],"reduce",[7,[51,"",[7,"u","v"],[43,[15,"u"],[15,"v"],[15,"k"]],[36,[15,"u"]]],[8]]]],["n","cookieConsent template debug"],[41,"o"],[22,[15,"b"],[46,["n","localStorage works"],[3,"o",[2,[15,"e"],"parse",[7,[2,[15,"b"],"getItem",[7,"cookieConsent"]]]]]],[46,["n","localStorage does NOT work"]]],["n","localStorageCookieConsent"],["n",[2,[15,"e"],"stringify",[7,[15,"o"]]]],[52,"p",["h","T_ccs",false]],["n","T_ccs query parameter"],["n",[2,[15,"e"],"stringify",[7,[15,"p"]]]],[41,"q"],[22,[15,"p"],[46,[22,[2,[2,[15,"p"],"toLowerCase",[7]],"match",[7,[15,"l"]]],[46,[3,"q",[2,[2,[15,"p"],"split",[7,"-"]],"reduce",[7,[51,"",[7,"u","v"],[52,"w",[2,[2,[15,"v"],"toLowerCase",[7]],"match",[7,[15,"l"]]]],[22,[15,"w"],[46,[43,[15,"u"],[2,[16,[15,"w"],0],"substring",[7,0,4]],[2,[16,[15,"w"],0],"substring",[7,4]]]]],[36,[15,"u"]]],[15,"m"]]]]]]]],["n","ccsCookieConsent"],["n",[2,[15,"e"],"stringify",[7,[15,"q"]]]],[41,"r"],[3,"r",["c","T_ccs"]],[3,"r",[39,[18,[17,[15,"r"],"length"],0],[2,[15,"e"],"parse",[7,[16,[15,"r"],0]]],[45]]],["n","ccsCookie"],["n",[2,[15,"e"],"stringify",[7,[15,"r"]]]],[52,"s",["i","parentConsent"]],["n","parentConsent"],["n",[2,[15,"e"],"stringify",[7,[15,"s"]]]],[52,"t",[30,[30,[30,[30,[15,"q"],[15,"s"]],[15,"o"]],[15,"r"]],[15,"m"]]],["n","cookieConsent"],["n",[2,[15,"e"],"stringify",[7,[15,"t"]]]],["d","T_ccs",[2,[15,"e"],"stringify",[7,[15,"t"]]],[8,"domain","auto","max-age",[26,[26,60,60],24],"path","/","samesite","none","secure","true"]],[22,[20,[17,[15,"a"],"option"],"string"],[46,[53,[52,"u",[15,"t"]],[55,"v",[15,"u"],[46,[43,[15,"u"],[15,"v"],["g",[16,[15,"u"],[15,"v"]]]]]],[36,[2,[15,"e"],"stringify",[7,[15,"u"]]]]]],[46,[22,[12,[17,[15,"a"],"consentKey"],"spam"],[46,[22,[12,[16,[15,"t"],[17,[15,"a"],"consentKey"]],1],[46,[36,false]],[46,[36,true]]]],[46,[53,[52,"u",["g",[16,[15,"t"],[17,[15,"a"],"consentKey"]]]],[22,[12,[15,"u"],"undefined"],[46,[36,[15,"k"]]],[46,[36,["g",[15,"u"]]]]]]]]]]]
 ,[50,"__cid",[46,"a"],[36,[17,[13,[41,"$0"],[3,"$0",["require","getContainerVersion"]],["$0"]],"containerId"]]]
 ,[50,"__ctv",[46,"a"],[36,[17,[13,[41,"$0"],[3,"$0",["require","getContainerVersion"]],["$0"]],"version"]]]
 ,[50,"__googtag",[46,"a"],[50,"m",[46,"v","w"],[66,"x",[2,[15,"b"],"keys",[7,[15,"w"]]],[46,[43,[15,"v"],[15,"x"],[16,[15,"w"],[15,"x"]]]]]],[50,"n",[46],[36,[7,[17,[17,[15,"e"],"SCHEMA"],"EP_SERVER_CONTAINER_URL"],[17,[17,[15,"e"],"SCHEMA"],"EP_TRANSPORT_URL"]]]],[50,"o",[46,"v"],[52,"w",["n"]],[65,"x",[15,"w"],[46,[53,[52,"y",[16,[15,"v"],[15,"x"]]],[22,[15,"y"],[46,[36,[15,"y"]]]]]]],[36,[44]]],[52,"b",["require","Object"]],[52,"c",["require","createArgumentsQueue"]],[52,"d",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"e",[15,"__module_gtag"]],[52,"f",["require","internal.gtagConfig"]],[52,"g",["require","getType"]],[52,"h",["require","internal.loadGoogleTag"]],[52,"i",["require","logToConsole"]],[52,"j",["require","makeNumber"]],[52,"k",["require","makeString"]],[52,"l",["require","makeTableMap"]],[52,"p",[30,[17,[15,"a"],"tagId"],""]],[22,[30,[21,["g",[15,"p"]],"string"],[24,[2,[15,"p"],"indexOf",[7,"-"]],0]],[46,["i",[0,"Invalid Measurement ID for the GA4 Configuration tag: ",[15,"p"]]],[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"q",[30,[17,[15,"a"],"configSettingsVariable"],[8]]],[52,"r",[30,["l",[30,[17,[15,"a"],"configSettingsTable"],[7]],"parameter","parameterValue"],[8]]],["m",[15,"q"],[15,"r"]],[52,"s",[30,[17,[15,"a"],"eventSettingsVariable"],[8]]],[52,"t",[30,["l",[30,[17,[15,"a"],"eventSettingsTable"],[7]],"parameter","parameterValue"],[8]]],["m",[15,"s"],[15,"t"]],[52,"u",[15,"q"]],["m",[15,"u"],[15,"s"]],[22,[30,[2,[15,"u"],"hasOwnProperty",[7,[17,[17,[15,"e"],"SCHEMA"],"EP_USER_PROPERTIES"]]],[17,[15,"a"],"userProperties"]],[46,[53,[52,"v",[30,[16,[15,"u"],[17,[17,[15,"e"],"SCHEMA"],"EP_USER_PROPERTIES"]],[8]]],["m",[15,"v"],[30,["l",[30,[17,[15,"a"],"userProperties"],[7]],"name","value"],[8]]],[43,[15,"u"],[17,[17,[15,"e"],"SCHEMA"],"EP_USER_PROPERTIES"],[15,"v"]]]]],[2,[15,"e"],"convertParameters",[7,[15,"u"],[17,[15,"e"],"GOLD_BOOLEAN_FIELDS"],[51,"",[7,"v"],[36,[39,[20,"false",[2,["k",[15,"v"]],"toLowerCase",[7]]],false,[28,[28,[15,"v"]]]]]]]],[2,[15,"e"],"convertParameters",[7,[15,"u"],[17,[15,"e"],"GOLD_NUMERIC_FIELDS"],[51,"",[7,"v"],[36,["j",[15,"v"]]]]]],[22,[16,[15,"d"],"enableDirectTagLoadingInGoogleTag"],[46,["h",[15,"p"],[8,"firstPartyUrl",["o",[15,"u"]]]]]],["f",[15,"p"],[15,"u"],[8,"noTargetGroup",true]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__gtes",[46,"a"],[50,"f",[46,"h","i"],[66,"j",[2,[15,"b"],"keys",[7,[15,"i"]]],[46,[43,[15,"h"],[15,"j"],[16,[15,"i"],[15,"j"]]]]]],[52,"b",["require","Object"]],[52,"c",["require","getType"]],[52,"d",[15,"__module_gtag"]],[52,"e",["require","makeTableMap"]],[52,"g",[30,["e",[30,[17,[15,"a"],"eventSettingsTable"],[7]],"parameter","parameterValue"],[8]]],[22,[17,[15,"a"],"userProperties"],[46,[53,[41,"h"],[3,"h",[30,[16,[15,"g"],[17,[17,[15,"d"],"SCHEMA"],"EP_USER_PROPERTIES"]],[8]]],[22,[29,["c",[15,"h"]],"object"],[46,[3,"h",[8]]]],["f",[15,"h"],[30,["e",[30,[17,[15,"a"],"userProperties"],[7]],"name","value"],[8]]],[43,[15,"g"],[17,[17,[15,"d"],"SCHEMA"],"EP_USER_PROPERTIES"],[15,"h"]]]]],[36,[15,"g"]]]
 ,[52,"__module_gtag",[13,[41,"$0"],[3,"$0",[51,"",[7],[50,"a",[46],[50,"f",[46,"g","h","i"],[65,"j",[15,"h"],[46,[22,[2,[15,"g"],"hasOwnProperty",[7,[15,"j"]]],[46,[43,[15,"g"],[15,"j"],["i",[16,[15,"g"],[15,"j"]]]]]]]]],[52,"b",["require","Object"]],[52,"c",[2,[15,"b"],"freeze",[7,[8,"EP_FIRST_PARTY_COLLECTION","first_party_collection","EP_SERVER_CONTAINER_URL","server_container_url","EP_TRANSPORT_URL","transport_url","EP_USER_PROPERTIES","user_properties"]]]],[52,"d",[2,[15,"b"],"freeze",[7,[7,"allow_ad_personalization_signals","allow_google_signals","cookie_update","ignore_referrer","update","first_party_collection","send_page_view"]]]],[52,"e",[2,[15,"b"],"freeze",[7,[7,"cookie_expires","event_timeout","session_duration","session_engaged_time","engagement_time_msec"]]]],[36,[8,"SCHEMA",[15,"c"],"GOLD_BOOLEAN_FIELDS",[15,"d"],"GOLD_NUMERIC_FIELDS",[15,"e"],"convertParameters",[15,"f"]]]],[36,["a"]]]],["$0"]]]
 
]
,"entities":{
"__cid":{"2":true,"4":true,"3":true}
,
"__ctv":{"2":true,"3":true}
,
"__googtag":{"1":10}


}
,"permissions":{
"__cvt_103077572_5":{"logging":{"environments":"debug"},"access_local_storage":{"keys":[{"key":"cookieConsent","read":true,"write":true},{"key":"marketingConsent","read":true,"write":false}]},"get_url":{"queriesAllowed":"specific","urlParts":"specific","queryKeys":["T_ccs"],"query":true},"get_cookies":{"cookieAccess":"specific","cookieNames":["T_ccs"]},"set_cookies":{"allowedCookies":[{"name":"T_ccs","domain":"*","path":"*","secure":"any","session":"any"}]},"access_globals":{"keys":[{"key":"parentConsent","read":true,"write":false,"execute":false}]}}
,
"__cid":{"read_container_data":{}}
,
"__ctv":{"read_container_data":{}}
,
"__googtag":{"logging":{"environments":"debug"},"access_globals":{"keys":[{"key":"gtag","read":true,"write":true,"execute":true},{"key":"dataLayer","read":true,"write":true,"execute":false}]},"configure_google_tags":{"allowedTagIds":"any"},"load_google_tags":{"allowedTagIds":"any","allowFirstPartyUrls":true,"allowedFirstPartyUrls":"any"}}
,
"__gtes":{}


}

,"sandboxed_scripts":[
"__cvt_103077572_5"

]

,"security_groups":{
"google":[
"__cid"
,
"__ctv"
,
"__googtag"
,
"__gtes"

]


}



};


var aa,ba=ca=ea=function(a,b){a.raw=b;return a},fa=ha=ka=la="function"==typeof Object.create?Object.create:ma;if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}ma=oa?null}
var ra=ma,sa=ta=/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ua=this||self,va=function(a){return a};var wa=function(a,b){this.h=a;this.s=b};var xa=function(){this.h={};this.C={}};aa=xa.prototype;aa.get=aa.set=aa.Zh=aa.has=aa.remove=var ya=function(){this.quota={}};ya.prototype.reset=function(){this.quota={}};var za=za.prototype.add=var Aa=za.prototype.set=za.prototype.get=za.prototype.has=
var Da=var Ea=function(){},Fa=function(a){return"function"===typeof a},k=Ga=Ha=Array.isArray,Ia=Ja=La=Na=Oa=Pa=Qa=Ra=Sa=Ta=
Ua=Ka=Ka.prototype.set=Ka.prototype.get=
var Va=Wa=Xa=Ya=Za=$a=
ab=bb=/^\w{1,9}$/,cb=db=ar gb=gb.prototype.execute=gb.prototype.s=gb.prototype.F=var hb=sa(hb,xa);var ib=hb.prototype.set=function(a,b){this.s||xa.prototype.set.call(this,a,b)};hb.prototype.Zh=hb.prototype.remove=hb.prototype.Eb=/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var jb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,kb=lb=nb=z=var ob=pb=qb=var rb=aa=rb.prototype;aa.toString=
aa.set=aa.get=aa.length=aa.Wb=aa.remove=
aa.pop=function(){return this.h.pop()};aa.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};aa.shift=aa.splice=aa.unshift=aa.has=aa.Eb=var sb=sa(sb,hb);sb.prototype.Wb=function(){return new rb(ib(this,1))};r ub,wb;var zb={},Ab=Bb=Cb=var Db=Array.prototype.indexOf?var Eb,Fb=var Gb=function(a){this.h=a};Gb.prototype.toString=var Hb=function(a){return a instanceof Gb&&a.constructor===Gb?a.h:"type_error:TrustedResourceUrl"},Ib={},Jb=var Lb=function(a){this.h=a};Lb.prototype.toString=function(){return this.h.toString()};var Mb=function(a){return a instanceof Lb&&a.constructor===Lb?a.h:"type_error:SafeUrl"},Nb={},Ob=new Lb("about:invalid#zClosurez",Nb);var Pb,Qb;a:{for(var Rb=["CLOSURE_FLAGS"],Sb=ua,Tb=0;Tb<Rb.length;Tb++)if(Sb=Sb[Rb[Tb]],null==Sb){Qb=null;break a}Qb=Sb}var Ub=Qb&&Qb[610401301];Pb=null!=Ub?Ub:!1;ar Wb,Xb=ua.navigator;Wb=Xb?Xb.userAgentData||null:null;dc={},ec=function(a){this.h=a};ec.prototype.toString=function(){return this.h.toString()};var fc=/*

 SPDX-License-Identifier: Apache-2.0
*/
var gc=ca([""]),hc=ea(["\x00"],["\\0"]),ic=ea(["\n"],["\\n"]),jc=ea(["\x00"],["\\u0000"]);c(function(a){return a(gc)})||kc(function(a){return a(hc)})||kc(function(a){return a(ic)})||kc(function(a){return a(jc)});var lc=function(a){this.ym=a};ar nc=[mc("data"),mc("http"),mc("https"),mc("mailto"),mc("ftp"),new lc(];r qc="function"===typeof URL;
ar sc=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;var tc={};var uc=function(){},vc=function(a){this.h=a};sa(vc,uc);vc.prototype.toString=function(){return this.h};r l=window,C=document,Cc=navigator,Dc=C.currentScript&&C.currentScript.src,Ec=Fc=Gc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},Hc={onload:1,src:1,width:1,height:1,style:1};var Jc=Kc=Lc=Mc=Nc=Oc=F=Pc=Qc=Rc=Sc=
Tc=Uc=Vc=Wc=Xc=var Yc=function(a,b){return I(this,a)&&I(this,b)},Zc=$c=function(a,b){return I(this,a)||I(this,b)},ad=bd=cd=var dd=sa(dd,hb);dd.prototype.toString=function(){return this.F};dd.prototype.Wb=dd.prototype.invoke=dd.prototype.Za=var ed=I=J=function(a){return a.s.F};var fd=fd.prototype.set=fd.prototype.get=function(a){return this.map.get(a)};var gd=function(){this.keys=[];this.values=[]};gd.prototype.set=gd.prototype.get=var id=id.prototype.toString=var kd=sa(kd,sb);var jd=var md=ld=var nd=function(){var a=!1;return a};var od={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:every:filter:forEach:hasOwnProperty:indexOf:join:lastIndexOf:map:pop:function(){return this.pop()},push:function(a,
b){return this.push.apply(this,Array.prototype.slice.call(arguments,1))},reduce:reduceRight:reverse:shift:function(){return this.shift()},slice:some:sort:splice:toString:unshift:;var pd=sa(pd,Error);var qd={charAt:1,concat:1,indexOf:1,lastIndexOf:1,match:1,replace:1,search:1,slice:1,split:1,substring:1,toLowerCase:1,toLocaleLowerCase:1,toString:1,toUpperCase:1,toLocaleUpperCase:1,trim:1},rd=new wa("break"),sd=new wa("continue"),td=vd=wd=xd=yd=zd=function(){return rd},Ad=Bd=Cd=function(){return sd},Dd=Ed=Fd=Gd=Hd=ar Kd=function(a,b,c){a=I(this,a);b=I(this,b);c=I(this,c);var d=this.h;return Jd(function(e){d.set(a,e);return d},b,c)},Ld=function(a,b,c){a=I(this,a);b=I(this,b);c=I(this,c);var d=this.h;return Jd(function(e){var f=Da(d);Aa(f,a,e,!0);return f},b,c)},Md=function(a,b,c){a=I(this,a);b=I(this,b);c=I(this,c);var d=this.h;return Jd(function(e){var f=Da(d);f.add(a,e);return f},b,c)},Od=Pd=
Qd=
var Rd=Sd=Td=Ud=Vd=Wd=Xd=Yd=function(a,b){return!Xd.call(this,a,b)},Zd=$d=ae=be=ce=de=ee=fe=ge=he=ie=function(){return null},je=ke=
le=me=ne=oe=pe=qe=re=se=te=ue=ve=we=xe=ye=ze=Ae=Be=Ce=function(){},De=var Fe=function(){this.h=new gb;Ee(this)};Fe.prototype.execute=var Ee=var He=He.prototype.execute=
var Je=Ge=var Ke=var Ne=);
var Oe=[],Pe={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Qe=function(a){return Pe[a]},Re=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ve=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,We={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\v":"\\x0b","\f":"\\f",
"\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Xe=function(a){return We[a]};
Oe[8]=var ef=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ff={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},gf=function(a){return ff[a]};Oe[16]=var jf;
var kf=[],lf=[],mf=[],nf=[],of=[],pf={},qf,rf,sf=tf=function(a){},uf,vf=[],wf=xf=zf=yf=Af=Bf=var Cf=sa(Cf,Error);var Ef=sa(Ef,Error);var Gf=var Jf=If=Hf=var Kf={Dl:;var Lf=function(){this.h={}},Nf=var Qf=[],Rf=var Vf=Wf=
ar Xf=!1;var Yf={};Yf.wn=Qa('');Yf.Hl=Qa('');var Zf=Xf,$f=Yf.Hl,ag=Yf.wn;var og=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];ar qg=new Ka;=/^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;var Hg=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,Ig={Fn:"function",PixieMap:"Object",List:"Array"},K=var Lg=Mg=var Ng=var Og=ar Rg=var Sg=function(a){var b;return b};var Tg=var Ug=function(a){try{return encodeURI(a)}catch(b){}};var Vg=Wg.D="internal.evaluateBooleanExpression";var ah=var bh=var ch=var dh=var eh=var fh=function(a){return Pa(md(a,this.h))};var gh=var hh=var mh=var Qg="floor ceil round max min abs pow sqrt".split(" ");var nh=oh=ph=var qh={};var rh=
qh.keys=
qh.values=
qh.entries=
qh.freeze=qh.delete=var L=var sh=function(){this.h={};this.s={};};sh.prototype.get=
sh.prototype.add=var wh=xh=yh=!1;if(C.querySelectorAll)try{var zh=C.querySelectorAll(":root");zh&&1==zh.length&&zh[0]==C.documentElement&&(yh=!0)}catch(a){}var vh=yh;var M=function(a){Ab("GTM",a)};var N={g:{Fa:"ad_personalization",J:"ad_storage",N:"ad_user_data",R:"analytics_storage",Ua:"region",xd:"consent_updated",af:"wait_for_update",ri:"ads",hg:"all",rk:"maps",sk:"playstore",tk:"search",uk:"shopping",vk:"youtube",si:"app_remove",ui:"app_store_refund",vi:"app_store_subscription_cancel",wi:"app_store_subscription_convert",xi:"app_store_subscription_renew",jg:"add_payment_info",kg:"add_shipping_info",hc:"add_to_cart",ic:"remove_from_cart",lg:"view_cart",Ib:"begin_checkout",jc:"select_item",
eb:"view_item_list",ub:"select_promotion",fb:"view_promotion",wa:"purchase",kc:"refund",Ga:"view_item",mg:"add_to_wishlist",xk:"exception",yi:"first_open",zi:"first_visit",ka:"gtag.config",Pa:"gtag.get",Ai:"in_app_purchase",mc:"page_view",yk:"screen_view",Bi:"session_start",zk:"timing_complete",Ak:"track_social",Ad:"user_engagement",Jb:"gclgb",Qa:"gclid",la:"ads_data_redaction",Bk:"gad_source",ng:"gclid_url",Ck:"gclsrc",Ci:"wbraid",ia:"allow_ad_personalization_signals",bf:"allow_custom_scripts",cf:"allow_display_features",
Bd:"allow_enhanced_conversions",hb:"allow_google_signals",Ha:"allow_interest_groups",Dk:"app_id",Ek:"app_installer_id",Fk:"app_name",Gk:"app_version",Kb:"auid",Di:"auto_detection_enabled",Lb:"aw_remarketing",df:"aw_remarketing_only",Cd:"discount",Dd:"aw_feed_country",Ed:"aw_feed_language",Z:"items",Fd:"aw_merchant_id",og:"aw_basket_type",Kc:"campaign_content",Lc:"campaign_id",Mc:"campaign_medium",Nc:"campaign_name",Oc:"campaign",Pc:"campaign_source",Qc:"campaign_term",vb:"client_id",Hk:"rnd",Ei:"content_group",
Fi:"content_type",Va:"conversion_cookie_prefix",Rc:"conversion_id",xa:"conversion_linker",Ik:"conversion_linker_disabled",Mb:"conversion_api",ef:"cookie_deprecation",jb:"cookie_domain",Ra:"cookie_expires",kb:"cookie_flags",nc:"cookie_name",Sc:"cookie_path",Wa:"cookie_prefix",oc:"cookie_update",qc:"country",ya:"currency",Gd:"customer_lifetime_value",Tc:"custom_map",Gi:"gcldc",pg:"dclid",Hi:"debug_mode",ba:"developer_id",Ii:"disable_merchant_reported_purchases",Uc:"dc_custom_params",Ji:"dc_natural_search",
qg:"dynamic_event_settings",rg:"affiliation",Hd:"checkout_option",ff:"checkout_step",sg:"coupon",Vc:"item_list_name",hf:"list_name",Ki:"promotions",Wc:"shipping",jf:"tax",Id:"engagement_time_msec",Jd:"enhanced_client_id",Kd:"enhanced_conversions",ug:"enhanced_conversions_automatic_settings",Ld:"estimated_delivery_date",kf:"euid_logged_in_state",Xc:"event_callback",Jk:"event_category",wb:"event_developer_id_string",Kk:"event_label",lf:"event",Md:"event_settings",Nd:"event_timeout",Lk:"description",
Mk:"fatal",Li:"experiments",nf:"firebase_id",Yc:"first_party_collection",Od:"_x_20",lb:"_x_19",vg:"fledge",wg:"flight_error_code",xg:"flight_error_message",Mi:"fl_activity_category",Ni:"fl_activity_group",yg:"fl_advertiser_id",Oi:"fl_ar_dedupe",zg:"match_id",Pi:"fl_random_number",Qi:"tran",Ri:"u",Pd:"gac_gclid",sc:"gac_wbraid",Ag:"gac_wbraid_multiple_conversions",Bg:"ga_restrict_domain",Cg:"ga_temp_client_id",Zc:"gdpr_applies",Dg:"geo_granularity",xb:"value_callback",nb:"value_key",Nk:"google_ono",
Nb:"google_signals",Eg:"google_tld",Qd:"groups",Fg:"gsa_experiment_id",pf:"iframe_state",ad:"ignore_referrer",qf:"internal_traffic_results",Ob:"is_legacy_converted",zb:"is_legacy_loaded",Rd:"is_passthrough",Sd:"_lps",Ma:"language",rf:"legacy_developer_id_string",Ia:"linker",uc:"accept_incoming",Ab:"decorate_forms",W:"domains",Pb:"url_position",Gg:"method",Ok:"name",bd:"new_customer",Hg:"non_interaction",Si:"optimize_id",Ti:"page_hostname",dd:"page_path",Ja:"page_referrer",Bb:"page_title",Ig:"passengers",
Jg:"phone_conversion_callback",Ui:"phone_conversion_country_code",Kg:"phone_conversion_css_class",Vi:"phone_conversion_ids",Lg:"phone_conversion_number",Mg:"phone_conversion_options",Ng:"_protected_audience_enabled",ed:"quantity",Td:"redact_device_info",tf:"referral_exclusion_definition",Qb:"restricted_data_processing",Wi:"retoken",Pk:"sample_rate",uf:"screen_name",Cb:"screen_resolution",Xi:"search_term",Na:"send_page_view",Rb:"send_to",Ud:"server_container_url",fd:"session_duration",Vd:"session_engaged",
vf:"session_engaged_time",Db:"session_id",Wd:"session_number",gd:"delivery_postal_code",Qk:"temporary_client_id",wf:"topmost_url",Yi:"tracking_id",xf:"traffic_type",Aa:"transaction_id",Sb:"transport_url",Og:"trip_type",Tb:"update",ob:"url_passthrough",Xd:"_user_agent_architecture",Yd:"_user_agent_bitness",Zd:"_user_agent_full_version_list",ae:"_user_agent_mobile",be:"_user_agent_model",ce:"_user_agent_platform",de:"_user_agent_platform_version",ee:"_user_agent_wow64",Ca:"user_data",Pg:"user_data_auto_latency",
Qg:"user_data_auto_meta",Rg:"user_data_auto_multi",Sg:"user_data_auto_selectors",Tg:"user_data_auto_status",fe:"user_data_mode",he:"user_data_settings",Sa:"user_id",Xa:"user_properties",Zi:"_user_region",yf:"us_privacy_string",ja:"value",Ug:"wbraid_multiple_conversions",fj:"_host_name",gj:"_in_page_command",ij:"_is_passthrough_cid",Xb:"non_personalized_ads",oe:"_sst_parameters",ib:"conversion_label",za:"page_location",yb:"global_developer_id_string",hd:"tc_privacy_string"}},Zh={},$h=Object.freeze((Zh[N.g.ia]=
1,Zh[N.g.cf]=1,Zh[N.g.Bd]=1,Zh[N.g.hb]=1,Zh[N.g.Z]=1,Zh[N.g.jb]=1,Zh[N.g.Ra]=1,Zh[N.g.kb]=1,Zh[N.g.nc]=1,Zh[N.g.Sc]=1,Zh[N.g.Wa]=1,Zh[N.g.oc]=1,Zh[N.g.Tc]=1,Zh[N.g.ba]=1,Zh[N.g.qg]=1,Zh[N.g.Xc]=1,Zh[N.g.Md]=1,Zh[N.g.Nd]=1,Zh[N.g.Yc]=1,Zh[N.g.Bg]=1,Zh[N.g.Nb]=1,Zh[N.g.Eg]=1,Zh[N.g.Qd]=1,Zh[N.g.qf]=1,Zh[N.g.Ob]=1,Zh[N.g.zb]=1,Zh[N.g.Ia]=1,Zh[N.g.tf]=1,Zh[N.g.Qb]=1,Zh[N.g.Na]=1,Zh[N.g.Rb]=1,Zh[N.g.Ud]=1,Zh[N.g.fd]=1,Zh[N.g.vf]=1,Zh[N.g.gd]=1,Zh[N.g.Sb]=1,Zh[N.g.Tb]=1,Zh[N.g.he]=1,Zh[N.g.Xa]=1,Zh[N.g.oe]=
1,Zh));Object.freeze([N.g.za,N.g.Ja,N.g.Bb,N.g.Ma,N.g.uf,N.g.Sa,N.g.nf,N.g.Ei]);
var ai={},bi=Object.freeze((ai[N.g.si]=1,ai[N.g.ui]=1,ai[N.g.vi]=1,ai[N.g.wi]=1,ai[N.g.xi]=1,ai[N.g.yi]=1,ai[N.g.zi]=1,ai[N.g.Ai]=1,ai[N.g.Bi]=1,ai[N.g.Ad]=1,ai)),ci={},di=Object.freeze((ci[N.g.jg]=1,ci[N.g.kg]=1,ci[N.g.hc]=1,ci[N.g.ic]=1,ci[N.g.lg]=1,ci[N.g.Ib]=1,ci[N.g.jc]=1,ci[N.g.eb]=1,ci[N.g.ub]=1,ci[N.g.fb]=1,ci[N.g.wa]=1,ci[N.g.kc]=1,ci[N.g.Ga]=1,ci[N.g.mg]=1,ci)),ei=Object.freeze([N.g.ia,N.g.hb,N.g.oc,N.g.Yc,N.g.ad,N.g.Na,N.g.Tb]),fi=Object.freeze([].concat(ei)),gi=Object.freeze([N.g.Ra,N.g.Nd,
N.g.fd,N.g.vf,N.g.Id]),hi=Object.freeze([].concat(gi)),ii={},ji=(ii[N.g.J]="1",ii[N.g.R]="2",ii[N.g.N]="3",ii[N.g.Fa]="4",ii),ki={},li=Object.freeze((ki[N.g.ia]=1,ki[N.g.Bd]=1,ki[N.g.Ha]=1,ki[N.g.Lb]=1,ki[N.g.df]=1,ki[N.g.Cd]=1,ki[N.g.Dd]=1,ki[N.g.Ed]=1,ki[N.g.Z]=1,ki[N.g.Fd]=1,ki[N.g.Va]=1,ki[N.g.xa]=1,ki[N.g.jb]=1,ki[N.g.Ra]=1,ki[N.g.kb]=1,ki[N.g.Wa]=1,ki[N.g.ya]=1,ki[N.g.Gd]=1,ki[N.g.ba]=1,ki[N.g.Ii]=1,ki[N.g.Kd]=1,ki[N.g.Ld]=1,ki[N.g.nf]=1,ki[N.g.Yc]=1,ki[N.g.Ob]=1,ki[N.g.zb]=1,ki[N.g.Ma]=1,ki[N.g.bd]=
1,ki[N.g.za]=1,ki[N.g.Ja]=1,ki[N.g.Jg]=1,ki[N.g.Kg]=1,ki[N.g.Lg]=1,ki[N.g.Mg]=1,ki[N.g.Qb]=1,ki[N.g.Na]=1,ki[N.g.Rb]=1,ki[N.g.Ud]=1,ki[N.g.gd]=1,ki[N.g.Aa]=1,ki[N.g.Sb]=1,ki[N.g.Tb]=1,ki[N.g.ob]=1,ki[N.g.Ca]=1,ki[N.g.Sa]=1,ki[N.g.ja]=1,ki)),mi={},ni=Object.freeze((mi[N.g.tk]="s",mi[N.g.vk]="y",mi[N.g.sk]="p",mi[N.g.uk]="h",mi[N.g.ri]="a",mi[N.g.rk]="m",mi));Object.freeze(N.g);var oi={},pi=l.google_tag_manager=l.google_tag_manager||{},qi=Math.random();oi.Zg="41v0";oi.ne=Number("0")||0;oi.fa="dataLayer";oi.zn="ChAIgKuCrgYQppKJ1MbZqahxEiQAgdVznuVm+U+u/nXaP2ya8/6HGZjGPCParuc4UJvP8eHGvO0aAn+C";var ri={__cl:1,__ecl:1,__ehl:1,__evl:1,__fal:1,__fil:1,__fsl:1,__hl:1,__jel:1,__lcl:1,__sdl:1,__tl:1,__ytl:1},si={__paused:1,__tg:1},ti;for(ti in ri)ri.hasOwnProperty(ti)&&(si[ti]=1);var ui=Qa(""),vi,wi=!1;
vi=wi;var xi,yi=!1;yi=!0;xi=yi;var zi,Ai=!1;zi=Ai;oi.zd="www.googletagmanager.com";var Bi=""+oi.zd+(vi?"/gtag/js":"/gtm.js"),Ci=null,Di=null,Ei={},Fi={},Gi=oi.pk="";var Hi="";Hi="4ea122d1b227f347a4c07bd5f5f21b1c0f303c9f419c670343362059549ad77f_20240206";
oi.Ff=Hi;var Ii=new ar Ki=new Ka,Li={},Mi={},Pi={name:oi.fa,set:get:reset:,Oi=Qi=Ri=Si=Ni=Ti=var Xi=[];(5);Q(6);Q(7);Q(9);Q(10);
Q(13);Q(11);Q(14);
Q(17);Q(18);
Q(19);Q(21);Q(22);
Q(23);
Q(25);Q(27);Q(28);
Q(29);Q(31);Q(32);Q(36);Q(38);Q(41);Q(42);
Q(43);Q(45);Q(46);Q(47);Q(49);Q(50);Q(51);
Q(56);
Q(58);
Q(61);Q(62);Q(67);Q(71);
Q(73);Q(78);Q(79);
Q(81);
Q(83);Q(86);
Q(87);Q(88);Q(89);
Q(94);
Q(98);
Q(99);ar $i=var aj;try{aj=JSON.parse(yb("e30"))}catch(a){M(123),$i(2),aj={}}
var bj=function(){return aj["0"]||""},cj=dj=function(){var a=!1;return a},ej=fj=function(){var a="";return a},gj=function(){var a=!1;return a},hj=var ij=new 1933);var jj=jj[" "]=function(){};var lj=var kj=var mj=!1,nj=!1,oj={},uj={},vj=!1,wj={ad_storage:!1,ad_user_data:!1,ad_personalization:!1};ar yj=
yj.prototype.default=yj.prototype.waitForUpdate=
var zj=
aa=yj.prototype;aa.clearTimeout=
aa.update=
aa.declare=aa.implicit=
aa.getConsentState=aa.setCps=
aa.addListener=var Bj=yj.prototype.notifyListeners=var Dj=Ej=Fj=Gj=Hj=Ij=function(a,b){xj().addListener(a,b)},Jj=Kj=Lj=function Mj(){}var Oj=[N.g.J,N.g.R,N.g.N,N.g.Fa],Pj=Qj=Rj=Sj=Tj=Uj=Vj=function(a,b){Ij(a,b)},Wj=function(a,b){Lj(a,b)},Xj=Yj=Zj=var ak=var bk=/[A-Z]+/,ck=/\s/,dk=fk=var gk=/:[0-9]+$/,hk=/^\d+\.fls\.doubleclick\.net$/,ik=lk=kk=jk=mk=nk={},ok=0,qk=pk=rk=sk=yk=zk=0<=l.location.search.indexOf("?gtm_latency=")||0<=l.location.search.indexOf("&gtm_latency=");var Bk=Ck=Ak=var Dk={},Ek=!1,Sf={ctid:"GTM-TX348HL",Kf:"103077572",Pj:"GTM-TX348HL",Qj:"GTM-TX348HL"};Dk.je=Qa("");
var Hk=function(){var a=Fk();return Ek?a.map(Gk):a},Jk=Lk=Mk=Fk=Ik=Nk=Kk=Gk=Ok=Pk=
var Rk=Sk=Tk=Uk=ar Wk=Xk=Yk=var Zk={sampleRate:"0.005000",kk:"",jk:Number("5"),ko:Number("")},$k=[];ar bl=!1,cl;if(!(cl=zk)){var dl=Math.random(),el=Zk.sampleRate;cl=dl<Number(el)}
var fl=cl,gl="/a?id="+Sf.ctid,hl="https://www.googletagmanager.com"+gl,il=void 0,jl={},kl=void 0,ll=new ml=1E3;
ar pl=!1;ar rl=Ja();ar ul="",vl=[];var xl=[];var zl={initialized:11,complete:12,interactive:13},Al={},Bl=Object.freeze((Al[N.g.Na]=!0,Al)),Cl=0<=C.location.search.indexOf("?gtm_diagnostics=")||0<=C.location.search.indexOf("&gtm_diagnostics="),El=ar Gl=Hl=T=Il=Jl=Kl=Ll=Ml=function(a,b){a.C=b;return a},Nl=function(a,b){a.Vb=b;return a},Ol=function(a,b){a.h=b;return a},
Pl=function(a,b){a.F=b;return a},Ql=function(a,b){a.kd=b;return a},Rl=function(a,b){a.Ub=b;return a},Sl=Tl=function(a,b){a.Oa=b;return a},Ul=function(a,b){a.X=b;return a},Vl=Wl=var Xl={};ar am=bm=function(a,b,c,d){var e=dk(c,d.isGtmEvent);e&&$l.push("event",[b,a],e,d)},cm=em=fm=gm=hm=im=dm=jm=im.prototype.register=
im.prototype.push=
im.prototype.flush=
var km=$l=new im;var mm=nm=var om=();$b()||Zb("Trident")||Zb("MSIE");Zb("Edge");!Zb("Gecko")||-1!=Vb().toLowerCase().indexOf("webkit")&&!Zb("Edge")||Zb("Trident")||Zb("MSIE")||Zb("Edge");-1!=Vb().toLowerCase().indexOf("webkit")&&!Zb("Edge")&&Zb("Mobile");pm()||Zb("Macintosh");pm()||Zb("Windows");(pm()?"Linux"===Wb.platform:Zb("Linux"))||pm()||Zb("CrOS");pm()||Zb("Android");qm();Zb("iPad");Zb("iPod");rm();Vb().toLowerCase().indexOf("kaios");var sm=tm=/#|$/,um=vm=/[?&]($|#)/,wm=var xm=ym=var Bm=Am=var Em=Dm=var Fm=function(){};var Gm=Hm=sa(Hm,Fm);
var Jm=
Hm.prototype.addEventListener=Hm.prototype.removeEventListener=
var Mm=Lm=Km=Im=Nm=Om=var Pm={1:0,3:0,4:0,7:3,9:3,10:3};var Rm=Xm=ar Sm=ar Wm=Ym=Zm=var $m=[N.g.J,N.g.R,N.g.N,N.g.Fa],an={},bn=(an[N.g.J]=1,an[N.g.R]=2,an);var dn=en=fn=gn={},hn=(gn[N.g.J]=0,gn[N.g.R]=1,gn[N.g.N]=2,gn[N.g.Fa]=3,gn);var un=vn=wn=xn=yn=var zn=function(){var a=!1;return a};var An={UA:1,AW:2,DC:3,G:4,GF:5,GT:12,GTM:14,HA:6,MC:7},Bn=var Cn=var Fn=In=var Nn=On=ar Kn=Pn=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Qn=/(^|\.)doubleclick\.net$/i,Mn=En=Ln=Dn=Rn=Sn=var Tn=Un=Vn=Wn=var Yn;var bo=co=eo=var fo=/(.*?)\*(.*?)\*(.*)/,go=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ho=/^(?:www\.|m\.|amp\.)+/,io=/([^?#]+)(\?[^#]*)?(#.*)?/;var no=mo=
 uo=vo=wo=xo=var yo=["1"],zo={},Ao={},Fo=
on Go(){return Rf(14)?["ad_storage","ad_user_data"]:["ad_storage"]};var Lo=
var No=/^\w+$/,Oo=/^[\w-]+$/,Po={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"};var Ro=So=Uo=To=ar ap=$o=cp=
var fp=dp=ep=
ar hp=Xo=ip=var kp=lp=mp=np=
r qp=var Hp,Ip=!1;ar Kp=var Lp=Lp.prototype.copyToHitData=var Mp=function(a){return a.metadata.source_canonical_id},Np=var Op=var Pp=/^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,Qp=/^www.googleadservices.com$/,Sp=Rp=var Tp=ar jq=var Eq=Fq=var Er={pl:Number('')||500,Tk:Number('')||5E3,jj:Number('')||10,wk:Number('')||5E3};var Gr=var Hr="https://"+oi.zd,Ir=Hr+"/gtm/static/",Jr=Number('')||5,Kr=Number('')||50,Lr=Hr,Mr=Ir,Nr=!1,Or=0,Pr=Ja();function Ur(a,b,c,d){}
function bs(a,b,c,d){}
ar es=void 0;var gs=bc();qm()||Zb("iPod");Zb("iPad");!Zb("Android")||cc()||bc()||ac()||Zb("Silk");cc();!Zb("Safari")||cc()||($b()?0:Zb("Coast"))||ac()||($b()?0:Zb("Edge"))||($b()?Yb("Microsoft Edge"):Zb("Edg/"))||($b()?Yb("Opera"):Zb("OPR"))||bc()||Zb("Silk")||Zb("Android")||rm();var hs={},is=null,js=Object.freeze(new function(){});Object.freeze(new function(){});var ks="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");r qs,rs=ts=us=function vs(){return"attribution-reporting"}var xs=!1;ar Bs=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),Cs=/^~?[\w-]+(?:\.~?[\w-]+)*$/,Ds=/^\d+\.fls\.doubleclick\.net$/,Es=/;gac=([^;?]+)/,Fs=/;gacgb=([^;?]+)/,Gs=/;gclaw=([^;?]+)/,Hs=/;gclgb=([^;?]+)/;
var Js=var Ls=function(a){return Ks(a,"_aw",Gs).map(function(b){return b.aa}).join(".")},Ms=Ns=var Dt={H:{fi:"ads_conversion_hit",yd:"container_execute_start",ii:"container_setup_end",fg:"container_setup_start",gi:"container_blocking_end",hi:"container_execute_end",ji:"container_yield_end",gg:"container_yield_start",bj:"event_execute_end",aj:"event_evaluation_end",Vg:"event_evaluation_start",cj:"event_setup_end",ie:"event_setup_start",dj:"ga4_conversion_hit",ke:"page_load",Rn:"pageview",Yb:"snippet_load",sj:"tag_callback_error",tj:"tag_callback_failure",uj:"tag_callback_success",vj:"tag_execute_end",
ld:"tag_execute_start"}};var Ft=!1;
var mu=function(a,b){},nu=function(a,b){},ou=function(a,b){},pu=function(a,b){},qu=eu=ru=function(){},su=tu=uu=function(){};var vu=var wu=var Nu=Ou=Pu=Ru=var Wu=Xu=function(){var a=Mk();if(R(98))return Uu().getRestrictions(0,a);var b=Vu(a),c,d;return[].concat(ka((null==b?void 0:null==(c=b._entity)?void 0:c.internal)||[]),ka((null==b?void 0:null==(d=b._entity)?void 0:d.external)||[]))},Yu=Zu=
ar $u=av=
$u.prototype.addRestriction=
$u.prototype.getRestrictions=
$u.prototype.getExternalRestrictions=$u.prototype.removeExternalRestrictions=function Uu(){var a=pi.r;a||(a=new $u,pi.r=a);return a};var bv=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),cv={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},dv={cl:["ecl"],customPixels:["customScripts",
"html"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},ev="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),hv=gv=!1;
gv=!0;var fv=iv=var kv=lv=var mv=!1,nv=0,ov=[];r rv=var tv=var vv=wv=xv=yv=uv=
vv.prototype.Hf=var zv=Av=var Bv={},Dv=Ev=!1;
var Hv=Iv=var Nv=["es","1"],Ov={},Pv={};ar Sv={};ar Vv={},Wv={};w=function(a,b){return 1===arguments.length?ew("set",a):ew("set",a,b)},gw=hw=ar Ew=Ew.prototype.enqueue=Ew.prototype.listen=
Ew.prototype.get=Ew.prototype.prune=var Mw=Ow=
var Qw=Rw={zone:1,cn:1,css:1,ew:1,eq:1,ge:1,gt:1,lc:1,le:1,lt:1,re:1,sw:1,um:1},Sw={cl:["ecl"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"]},Pw=aa=Pw.prototype;aa.isActive=aa.getIsAllowedFn=aa.unregisterChild=aa.createZone=aa.updateZone=aa.registerChild=var Tw=Tw.prototype.F=Tw.prototype.od=Tw.prototype.C=var Uw=Vw=
var Ww=Xw=Yw=var ax=
ar dx=!1,bx;
var jx=r Mf;var kx={},lx={},mx=nx=function(a){Na(kx,function(b,
c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})},ox=var px="HA GF G UA AW DC MC".split(" "),qx=!1,rx=!1;ar tx=void 0,ux=void 0;var xx={config:consent:event:get:js:policy:set:,yx={policy:!0};var zx=Ax=var Bx=!1,Cx=[];ar Ex=var Vx=Vx.prototype.getUntrustedMessageValue=var Ux=Vx.prototype.getUntrustedMessageValue=Vx.prototype.getUntrustedMessageValue;var Wx=0,Xx={},Yx=[],Zx=[],$x=!1,ay=!1;var cy=dy=ey=
ar my=ly=var Jy=function(){};var Ky=Ky.prototype.toString=var Ly=new Ky;
var Ny=Qy=Ry=Oy=Oy.prototype.toString=
Oy.prototype.valueOf=Oy.prototype.toString;var My={},Py={};var sz=l.clearTimeout,tz=l.setTimeout,uz=vz=wz=function(){return l.location.href},xz=yz=zz=Az=Bz=function(a,b){l[a]=b},W=
Cz=Dz=Ez=Fz=Gz=

ar hA;var jA=function(){return!1},kA=function oA(a,b){var c=this;}oA.O="addConsentListener";var pA;var qA=A.D="internal.addDataLayerEventListener";function sA(a,b,c){}sA.O="addDocumentEventListener";function tA(a,b,c,d){}tA.O="addElementEventListener";function uA(a){}uA.O="addEventCallback";
function yA(a){}yA.D="internal.addFormAbandonmentListener";function zA(a,b,c,d){}zA.D="internal.addFormData";var AA={},BA=[],CA={},DA=0,EA=0;
function LA(a,b){}LA.D="internal.addFormInteractionListener";
function SA(a,b){}SA.D="internal.addFormSubmitListener";
function XA(a){}XA.D="internal.addGaSendListener";ar $A=function(a,b){this.tagId=a;this.vc=b};
B.D="internal.loadGoogleTag";cB.D="internal.addGoogleTagRestriction";var dB={},eB=[];
var lB=function(a,b){};
lB.D="internal.addHistoryChangeListener";function mB(a,b,c){}mB.O="addWindowEventListener";B.O="aliasInWindow";function oB(a,b,c){}oB.D="internal.appendRemoteConfigParameter";function pB(){var a=2;return a};function qB(a,b){var c;return c}qB.O="callInWindow";function rB(a){}rB.O="callLater";function sB(a){}sB.D="callOnDomReady";function tB(a){}tB.D="callOnWindowLoad";function uB(a,b){var c;return c}uB.D="internal.computeGtmParameter";B.O="copyFromDataLayer";
function wB(a){var b=void 0;return b}wB.D="internal.copyFromDataLayerCache";B.O="copyFromWindow";B.D="internal.copyKeyFromWindow";function zB(a,b){var c;return c}zB.D="internal.copyPreHit";B.O="createArgumentsQueue";B.D="internal.createGaCommandQueue";B.O="createQueue";function DB(a,b){var c=null;return c}DB.D="internal.createRegex";function EB(a){}EB.D="internal.declareConsentState";function FB(a){var b="";return b}FB.D="internal.decodeUrlHtmlEntities";function GB(a,b,c){var d;return d}GB.D="internal.decorateUrlWithGaCookies";function HB(a){var b;
return b}HB.D="internal.detectUserProvidedData";
function LB(a,b){return b}LB.D="internal.enableAutoEventOnClick";
function QB(a,b){return b}QB.D="internal.enableAutoEventOnElementVisibility";function RB(){}RB.D="internal.enableAutoEventOnError";var SB={},TB=[],UB={},VB=0,WB=0;
function bC(a,b){var c=this;return b}bC.D="internal.enableAutoEventOnFormInteraction";
function gC(a,b){var c=this;return b}gC.D="internal.enableAutoEventOnFormSubmit";
C.D="internal.enableAutoEventOnGaSend";var mC={},nC=[];
function uC(a,b){var c=this;return b}uC.D="internal.enableAutoEventOnHistoryChange";var vC=["http://","https://","javascript:","file://"];
function zC(a,b){var c=this;return b}zC.D="internal.enableAutoEventOnLinkClick";var AC,BC;
function MC(a,b){var c=this;return b}MC.D="internal.enableAutoEventOnScroll";C.D="internal.enableAutoEventOnTimer";var xc=ca(["data-gtm-yt-inspected-"]),PC=["www.youtube.com","www.youtube-nocookie.com"],QC,RC=!1;
D.D="internal.enableAutoEventOnYouTubeActivity";var bD;function cD(a){var b=!1;return b}cD.D="internal.evaluateMatchingRules";var GD=function BE(a,b,c,d){}BE.D="internal.executeEventProcessor";E.D="internal.executeJavascriptString";var DE=function(a){var b;return b};E.O="getContainerVersion";E.O="getCookieValues";function GE(){return bj()}GE.D="internal.getCountryCode";E.D="internal.getDestinationIds";function IE(a,b){var c=null;return c}IE.D="internal.getElementAttribute";function JE(a){var b=null;return b}JE.D="internal.getElementById";function KE(a){var b="";return b}KE.D="internal.getElementInnerText";E.D="internal.getElementProperty";function ME(a){var b;return b}ME.D="internal.getElementValue";function NE(a){var b=0;return b}NE.D="internal.getElementVisibilityRatio";function OE(a){var b=null;return b}OE.D="internal.getElementsByCssSelector";
function PE(a){var b=void 0;return b}PE.D="internal.getEventData";var QE={};QE.enableAWFledge=R(6);QE.enableAdsConversionValidation=R(19);QE.enableAutoPiiOnPhoneAndAddress=R(26);QE.enableCachedEcommerceData=R(80);QE.enableCcdPreAutoPiiDetection=R(11);QE.enableCloudRecommentationsErrorLogging=R(66);QE.enableCloudRecommentationsSchemaIngestion=R(65);QE.enableCloudRetailInjectPurchaseMetadata=R(64);QE.enableCloudRetailLogging=R(63);QE.enableCloudRetailPageCategories=R(16);QE.enableConsentDisclosureActivity=R(31);QE.enableDCFledge=R(7);QE.enableDecodeUri=R(49);
QE.enableDeferAllEnhancedMeasurement=R(33);QE.enableDirectTagLoadingInGoogleTag=R(58);QE.enableEuidAutoMode=R(10);QE.enableFormSkipValidation=R(27);QE.enableUrlDecodeEventUsage=R(43);QE.enableV1HistoryEventInApi=R(71);QE.enableZoneConfigInChildContainers=R(93);QE.loadContainerForGtmEventTags=R(30);QE.useEnableAutoEventOnFormApis=R(20);QE.autoPiiEligible=gj();E.D="internal.getFlags";E.D="internal.getHtmlId";function TE(a,b){var c;return c}TE.D="internal.getProductSettingsParameter";E.O="getQueryParameters";function VE(a,b){var c;return c}VE.O="getReferrerQueryParameters";function WE(a){var b="";return b}WE.O="getReferrerUrl";E.D="internal.getRegionCode";E.D="internal.getRemoteConfigParameter";E.O="getUrl";E.O="getUserAgent";ar gF=hF=var PF=QF=function(a,b){a.h=b;return a};ar gG=window,hG=document,iG=var zG=function(a,b){};function AG(a,b,c){};var BG=yG;G.D="internal.gtagConfig";function EG(){var a={};return a};
function GG(a,b){}GG.O="gtagSet";function HG(a,b){}HG.O="injectHiddenIframe";function IG(a,b,c,d,e){}IG.D="internal.injectHtml";var MG={};
function OG(a,b,c,d){}var PG=Object.freeze({dl:1,id:1}),QG={};
function RG(a,b,c,d){}OG.O="injectScript";RG.D="internal.injectScript";function SG(a){var b=!0;return b}SG.O="isConsentGranted";G.D="internal.isEntityInfrastructure";var UG=G.D="internal.legacyParseUrl";var WG=XG={getItem:setItem:removeItem:;G.O="logToConsole";function ZG(a,b){}ZG.D="internal.mergeRemoteConfig";G.D="internal.parseCookieValuesFromString";H.O="parseUrl";function bH(a){}bH.D="internal.processAsNewEvent";H.D="internal.pushToDataLayer";function dH(a,b){var c=!1;return c}dH.O="queryPermission";function eH(){var a="";return a}eH.O="readCharacterSet";H.D="internal.readDataLayerName";H.O="readTitle";function hH(a,b){var c=this;}hH.D="internal.registerCcdCallback";iH.D="internal.registerDestination";var jH=Object.freeze(["config","event","get","set"]);function kH(a,b,c){}kH.D="internal.registerGtagCommandListener";function lH(a,b){var c=!1;return c}lH.D="internal.removeDataLayerEventListener";function mH(a,b){}
mH.D="internal.removeFormData";function nH(){}nH.O="resetDataLayer";function oH(a,b,c,d){}oH.D="internal.sendGtagEvent";function pH(a,b,c){}pH.O="sendPixel";function qH(a,b){}qH.D="internal.setAnchorHref";H.O="setCookie";function sH(a,b){}sH.D="internal.setCorePlatformServices";function tH(a,b){}tH.D="internal.setDataLayerValue";function uH(a){}uH.O="setDefaultConsentState";function vH(a,b){}vH.D="internal.setDelegatedConsentType";H.D="internal.setFormAction";H.O="setInWindow";function yH(a,b,c){}yH.D="internal.setProductSettingsParameter";function zH(a,b,c){}zH.D="internal.setRemoteConfigParameter";H.D="internal.setupConversionLinker";H.O="sha256";function CH(a,b,c){}
CH.D="internal.sortRemoteConfigParameters";var DH={},EH={};DH.O="templateStorage";DH.getItem=
DH.setItem=function(a,b){};
DH.removeItem=function(a){};DH.clear=function(){};function FH(a,b){var c=!1;return c}FH.D="internal.testRegex";var GH=function(a){var b;return b};H.D="internal.unsiloId";function IH(a){}IH.O="updateConsentState";var JH;ar NH=var mA;ar QH=encodeURI,X=encodeURIComponent,RH=SH=TH=var Z={securityGroups:{}};

Z.securityGroups.jsm=["customScripts"],);Z.securityGroups.e=["google"],);
Z.securityGroups.f=["google"],);
Z.securityGroups.access_globals=["google"],);
Z.securityGroups.u=["google"],);Z.securityGroups.v=["google"],);




Z.securityGroups.access_local_storage=["google"],);



Z.securityGroups.smm=["google"],);



Z.securityGroups.gaawe=["google"],);


Z.securityGroups.load_google_tags=["google"],);
Z.securityGroups.read_container_data=["google"],);


Z.securityGroups.get_url=["google"],);



Z.securityGroups.logging=["google"],);

Z.securityGroups.configure_google_tags=["google"],);


Z.securityGroups.html=["customScripts"],);

Z.securityGroups.set_cookies=["google"],);



Z.securityGroups.get_cookies=["google"],);var oJ={};oJ.onHtmlSuccess=Ry(!0),oJ.onHtmlFailure=Ry(!1);oJ.dataLayer=Pi;oJ.callback=oJ.bootstrap=0;oJ._spx=!1;
((;

})()

