
// Copyright 2012 Google Inc. All rights reserved.
 
(function(){

var data = {
"resource": {
  "version":"1",
  
  "macros":[{"function":"__e"}],
  "tags":[{"function":"__ogt_ads_datatos","priority":14,"vtp_instanceDestinationId":"AW-938818781","tag_id":8},{"function":"__ogt_1p_data_v2","priority":4,"vtp_isAutoEnabled":true,"vtp_autoCollectExclusionSelectors":["list",["map","exclusionSelector",""]],"vtp_isEnabled":true,"vtp_autoEmailEnabled":true,"vtp_autoPhoneEnabled":false,"vtp_autoAddressEnabled":false,"vtp_isAutoCollectPiiEnabledFlag":false,"tag_id":4},{"function":"__ccd_ads_first","priority":3,"vtp_instanceDestinationId":"AW-938818781","tag_id":9},{"function":"__ccd_pre_auto_pii","priority":1,"vtp_instanceDestinationId":"AW-938818781","tag_id":7},{"function":"__rep","vtp_containerId":"AW-938818781","vtp_remoteConfig":["map","enhanced_conversions",["map","l6-KCLzlhpMYEN351L8D",["map","enhanced_conversions_mode","off","enhanced_conversions_automatic_settings",["map"]]]],"tag_id":1},{"function":"__ccd_ads_last","priority":0,"vtp_instanceDestinationId":"AW-938818781","tag_id":6}],
  "predicates":[{"function":"_eq","arg0":["macro",0],"arg1":"gtm.js"},{"function":"_eq","arg0":["macro",0],"arg1":"gtm.init"}],
  "rules":[[["if",0],["add",4]],[["if",1],["add",1,5,3,0,2]]]
},
"runtime":[ [50,"__ccd_ads_first",[46,"a"],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_ads_last",[46,"a"],[52,"b",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"c",["require","internal.registerCcdCallback"]],[52,"d","hit_type"],[52,"e","conversion_label"],[52,"f","conversion"],[52,"g",[16,[15,"b"],"enableAdsConversionValidation"]],[22,[28,[15,"g"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],["c",[17,[15,"a"],"instanceDestinationId"],[51,"",[7,"h"],[52,"i",[2,[15,"h"],"getMetadata",[7,[15,"d"]]]],[22,[1,[20,[15,"i"],[15,"f"]],[28,[2,[15,"h"],"getHitData",[7,[15,"e"]]]]],[46,[2,[15,"h"],"abort",[7]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ccd_pre_auto_pii",[46,"a"],[50,"q",[46,"s"],[52,"t",[16,[15,"s"],"userData"]],[52,"u",[30,[18,[2,[15,"t"],"indexOf",[7,"@gmail."]],[27,1]],[18,[2,[15,"t"],"indexOf",[7,"@googlemail."]],[27,1]]]],[36,[0,[0,[0,[0,[0,[0,[16,[15,"s"],"tagName"],":"],[16,[15,"s"],"isVisible"]],":"],[17,[15,"t"],"length"]],":"],[15,"u"]]]],[52,"b",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"c",["require","internal.setProductSettingsParameter"]],[52,"d",[17,[15,"a"],"instanceDestinationId"]],[22,[28,[16,[15,"b"],"enableCcdPreAutoPiiDetection"]],[46,["c",[15,"d"],"preAutoPii",true],[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],["c",[15,"d"],"hasPreAutoPiiCcdRule",true],[22,[28,[16,[15,"b"],"autoPiiEligible"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"e",["require","internal.registerCcdCallback"]],[52,"f",["require","getTimestampMillis"]],[52,"g",["require","isConsentGranted"]],[52,"h",["require","makeString"]],[52,"i","conversion"],[52,"j","hit_type"],[52,"k","ad_storage"],[52,"l","user_data_auto_multi"],[52,"m","user_data_auto_selectors"],[52,"n","user_data_auto_meta"],[52,"o","user_data_auto_latency"],[52,"p","user_data_auto_status"],[52,"r",[8,"email","1","phone_number","2","first_name","3","last_name","4","country","5","postal_code","6"]],["e",[15,"d"],[51,"",[7,"s"],[22,[21,[2,[15,"s"],"getMetadata",[7,[15,"j"]]],[15,"i"]],[46,[36]]],[22,[28,["g",[15,"k"]]],[46,[36]]],[52,"t",["f"]],[52,"u",["require","internal.detectUserProvidedData"]],[52,"v",["u",[8,"includeSelector",true,"includeVisibility",true,"selectMultipleElements",true]]],[22,[30,[30,[28,[15,"v"]],[28,[16,[15,"v"],"elements"]]],[20,[17,[16,[15,"v"],"elements"],"length"],0]],[46,[36]]],[52,"w",[16,[15,"v"],"elements"]],[52,"x",[7]],[65,"ba",[15,"w"],[46,[53,[52,"bb",["q",[15,"ba"]]],[52,"bc",[30,[16,[15,"r"],[16,[15,"ba"],"type"]],""]],[2,[15,"x"],"push",[7,[0,[0,[0,[0,[16,[15,"ba"],"querySelector"],"*"],[15,"bb"]],"*"],[15,"bc"]]]]]]],[2,[15,"s"],"setHitData",[7,[15,"l"],[2,[15,"x"],"join",[7,"~"]]]],[52,"y",[16,[15,"v"],"preferredEmailElement"]],[22,[15,"y"],[46,[2,[15,"s"],"setHitData",[7,[15,"m"],[16,[15,"y"],"querySelector"]]],[2,[15,"s"],"setHitData",[7,[15,"n"],["q",[15,"y"]]]]]],[52,"z",["f"]],[2,[15,"s"],"setHitData",[7,[15,"o"],["h",[37,[15,"z"],[15,"t"]]]]],[2,[15,"s"],"setHitData",[7,[15,"p"],[16,[15,"v"],"status"]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ogt_1p_data_v2",[46,"a"],[50,"j",[46,"m","n","o"],[22,[20,[16,[15,"n"],"type"],[15,"o"]],[46,[22,[28,[15,"m"]],[46,[3,"m",[8]]]],[22,[28,[16,[15,"m"],[15,"o"]]],[46,[43,[15,"m"],[15,"o"],[16,[15,"n"],"userData"]]]]]],[36,[15,"m"]]],[50,"k",[46,"m","n"],[52,"o",[16,[15,"a"],[15,"m"]]],[41,"p"],[22,[20,[15,"o"],"CSS_SELECTOR"],[46,[3,"p","css_selector"]],[46,[22,[20,[15,"o"],"JS_VAR"],[46,[3,"p","js_variable"]]]]],[36,[8,"selector_type",[15,"p"],"value",[16,[15,"a"],[15,"n"]]]]],[50,"l",[46,"m","n","o","p"],[22,[28,[16,[15,"a"],[15,"p"]]],[46,[36]]],[43,[15,"m"],[15,"n"],["k",[15,"o"],[15,"p"]]]],[22,[28,[17,[15,"a"],"isEnabled"]],[46,[2,[15,"a"],"gtmOnSuccess",[7]],[36]]],[52,"b",[13,[41,"$0"],[3,"$0",["require","internal.getFlags"]],["$0"]]],[52,"c",["require","internal.getDestinationIds"]],[52,"d",["require","internal.getProductSettingsParameter"]],[52,"e",["require","internal.detectUserProvidedData"]],[52,"f",["require","internal.setRemoteConfigParameter"]],[52,"g",["require","internal.registerCcdCallback"]],[52,"h",[30,["c"],[7]]],[52,"i",[8,"enable_code",true]],[22,[17,[15,"a"],"isAutoEnabled"],[46,[53,[52,"m",[7]],[22,[1,[17,[15,"a"],"autoCollectExclusionSelectors"],[17,[17,[15,"a"],"autoCollectExclusionSelectors"],"length"]],[46,[53,[41,"o"],[3,"o",0],[63,[7,"o"],[23,[15,"o"],[17,[17,[15,"a"],"autoCollectExclusionSelectors"],"length"]],[33,[15,"o"],[3,"o",[0,[15,"o"],1]]],[46,[53,[52,"p",[17,[16,[17,[15,"a"],"autoCollectExclusionSelectors"],[15,"o"]],"exclusionSelector"]],[22,[15,"p"],[46,[2,[15,"m"],"push",[7,[15,"p"]]]]]]]]]]],[52,"n",[39,[17,[15,"a"],"isAutoCollectPiiEnabledFlag"],[17,[15,"a"],"autoEmailEnabled"],true]],[43,[15,"i"],"auto_detect",[8,"email",[15,"n"],"phone",[17,[15,"a"],"autoPhoneEnabled"],"address",[17,[15,"a"],"autoAddressEnabled"],"exclude_element_selectors",[15,"m"]]]]]],[22,[17,[15,"a"],"isManualEnabled"],[46,[53,[52,"m",[8]],[22,[17,[15,"a"],"manualEmailEnabled"],[46,["l",[15,"m"],"email","emailType","emailValue"]]],[22,[17,[15,"a"],"manualPhoneEnabled"],[46,["l",[15,"m"],"phone","phoneType","phoneValue"]]],[22,[17,[15,"a"],"manualAddressEnabled"],[46,[53,[52,"n",[8]],["l",[15,"n"],"first_name","firstNameType","firstNameValue"],["l",[15,"n"],"last_name","lastNameType","lastNameValue"],["l",[15,"n"],"street","streetType","streetValue"],["l",[15,"n"],"city","cityType","cityValue"],["l",[15,"n"],"region","regionType","regionValue"],["l",[15,"n"],"country","countryType","countryValue"],["l",[15,"n"],"postal_code","postalCodeType","postalCodeValue"],[43,[15,"m"],"name_and_address",[7,[15,"n"]]]]]],[43,[15,"i"],"selectors",[15,"m"]]]]],[65,"m",[15,"h"],[46,[53,[41,"n"],[3,"n",[15,"i"]],[22,[1,[20,[2,[15,"m"],"indexOf",[7,"G-"]],0],[28,[16,[15,"b"],"enableEuidAutoMode"]]],[46,[53,[52,"q",[8,"enable_code",true,"selectors",[16,[15,"i"],"selectors"]]],[3,"n",[15,"q"]]]]],["f",[15,"m"],"user_data_settings",[15,"n"]],[52,"o",[16,[15,"n"],"auto_detect"]],[22,[28,[15,"o"]],[46,[6]]],[52,"p",[51,"",[7,"q"],[52,"r",[2,[15,"q"],"getMetadata",[7,"user_data_from_automatic"]]],[22,[15,"r"],[46,[36,[15,"r"]]]],[52,"s",["e",[8,"excludeElementSelectors",[16,[15,"o"],"exclude_element_selectors"],"fieldFilters",[8,"email",[16,[15,"o"],"email"],"phone",[16,[15,"o"],"phone"],"address",[16,[15,"o"],"address"]]]]],[52,"t",[1,[15,"s"],[16,[15,"s"],"elements"]]],[52,"u",[8]],[22,[1,[15,"t"],[18,[17,[15,"t"],"length"],0]],[46,[53,[41,"v"],[53,[41,"w"],[3,"w",0],[63,[7,"w"],[23,[15,"w"],[17,[15,"t"],"length"]],[33,[15,"w"],[3,"w",[0,[15,"w"],1]]],[46,[53,[52,"x",[16,[15,"t"],[15,"w"]]],["j",[15,"u"],[15,"x"],"email"],[22,[16,[15,"b"],"enableAutoPiiOnPhoneAndAddress"],[46,["j",[15,"u"],[15,"x"],"phone_number"],[3,"v",["j",[15,"v"],[15,"x"],"first_name"]],[3,"v",["j",[15,"v"],[15,"x"],"last_name"]],[3,"v",["j",[15,"v"],[15,"x"],"country"]],[3,"v",["j",[15,"v"],[15,"x"],"postal_code"]]]]]]]],[22,[1,[15,"v"],[28,[16,[15,"u"],"address"]]],[46,[43,[15,"u"],"address",[15,"v"]]]]]]],[2,[15,"q"],"setMetadata",[7,"user_data_from_automatic",[15,"u"]]],[36,[15,"u"]]]],["g",[15,"m"],[51,"",[7,"q"],[2,[15,"q"],"setMetadata",[7,"user_data_from_automatic_getter",[15,"p"]]]]]]]],[2,[15,"a"],"gtmOnSuccess",[7]]]
 ,[50,"__ogt_ads_datatos",[46,"a"],[52,"b",["require","internal.setProductSettingsParameter"]],[52,"c",[17,[15,"a"],"instanceDestinationId"]],["b",[15,"c"],"ads_customer_data_terms",true],[2,[15,"a"],"gtmOnSuccess",[7]]]
 
]
,"entities":{
"__ccd_ads_first":{"2":true,"4":true}
,
"__ccd_ads_last":{"2":true,"4":true}
,
"__ccd_pre_auto_pii":{"2":true,"4":true}
,
"__ogt_1p_data_v2":{"2":true}
,
"__ogt_ads_datatos":{"2":true}


}
,"permissions":{
"__ccd_ads_first":{}
,
"__ccd_ads_last":{}
,
"__ccd_pre_auto_pii":{"detect_user_provided_data":{"limitDataSources":true,"allowAutoDataSources":true,"allowManualDataSources":false,"allowCodeDataSources":false},"access_consent":{"consentTypes":[{"consentType":"ad_storage","read":true,"write":false},{"consentType":"analytics_storage","read":true,"write":false}]}}
,
"__ogt_1p_data_v2":{"detect_user_provided_data":{"limitDataSources":true,"allowAutoDataSources":true,"allowManualDataSources":false,"allowCodeDataSources":false}}
,
"__ogt_ads_datatos":{}


}



,"security_groups":{
"google":[
"__ccd_ads_first"
,
"__ccd_ads_last"
,
"__ccd_pre_auto_pii"
,
"__ogt_1p_data_v2"
,
"__ogt_ads_datatos"

]


}



};


var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){return a.raw=a},da=function(a,b){a.raw=b;return a},ea=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");},ha=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c},ia=function(a){return a instanceof Array?a:
ha(ea(a))},ja="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ma;if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},qa={};try{qa.__proto__=oa;na=qa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ra=ma,sa=function(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Zn=b.prototype},ta=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ua=this||self,va=function(a){return a};var wa=function(a,b){this.h=a;this.s=b};var xa=function(){this.h={};this.C={}};aa=xa.prototype;aa.get=function(a){return this.h["dust."+a]};aa.set=function(a,b){a="dust."+a;this.C.hasOwnProperty(a)||(this.h[a]=b)};aa.Uh=function(a,b){this.set(a,b);this.C["dust."+a]=!0};aa.has=function(a){return this.h.hasOwnProperty("dust."+a)};aa.remove=function(a){a="dust."+a;this.C.hasOwnProperty(a)||delete this.h[a]};var ya=function(){this.quota={}};ya.prototype.reset=function(){this.quota={}};var za=function(a,b){this.X=a;this.M=function(c,d,e){return c.apply(d,e)};this.C=b;this.s=new xa;this.h=this.F=void 0};za.prototype.add=function(a,b){Aa(this,a,b,!1)};var Aa=function(a,b,c,d){d?a.s.Uh(b,c):a.s.set(b,c)};za.prototype.set=function(a,b){!this.s.has(a)&&this.C&&this.C.has(a)?this.C.set(a,b):this.s.set(a,b)};za.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.C?this.C.get(a):void 0};za.prototype.has=function(a){return!!this.s.has(a)||!(!this.C||!this.C.has(a))};
var Ba=function(a){var b=new za(a.X,a);a.F&&(b.F=a.F);b.M=a.M;b.h=a.h;return b};var Ca=function(){},Fa=function(a){return"function"===typeof a},k=function(a){return"string"===typeof a},Ga=function(a){return"number"===typeof a&&!isNaN(a)},Ha=Array.isArray,Ia=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ja=function(a,b){if(!Ga(a)||!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},La=function(a,b){for(var c=new Ka,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},l=function(a,
b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ma=function(a){return!!a&&("[object Arguments]"===Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"===String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return new Date(Date.now())},
Sa=function(){return Ra().getTime()},Ka=function(){this.prefix="gtm.";this.values={}};Ka.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ka.prototype.get=function(a){return this.values[this.prefix+a]};
var Ta=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Wa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Xa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ya=function(a,b){return a.substring(0,b.length)===b},Za=function(a,b){var c=z;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=b.indexOf(d))return}return d},
$a=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ab=/^\w{1,9}$/,bb=function(a,b){a=a||{};b=b||",";var c=[];l(a,function(d,e){ab.test(d)&&e&&c.push(d)});return c.join(b)},cb=function(a,b){function c(){++d===b&&(e(),e=null,c.done=!0)}var d=0,e=a;c.done=!1;return c};function db(a,b){for(var c,d=0;d<b.length&&!(c=eb(a,b[d]),c instanceof wa);d++);return c}function eb(a,b){try{var c=a.get(String(b[0]));if(!c||"function"!==typeof c.invoke)throw Error("Attempting to execute non-function "+b[0]+".");return c.invoke.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.F;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var fb=function(){this.C=new ya;this.h=new za(this.C)};fb.prototype.execute=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};fb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=eb(this.h,arguments[c]);return b};fb.prototype.F=function(a,b){var c=Ba(this.h);c.h=a;for(var d,e=1;e<arguments.length;e++)d=eb(c,arguments[e]);return d};var gb=function(){xa.call(this);this.s=!1};sa(gb,xa);var hb=function(a,b){var c=[],d;for(d in a.h)if(a.h.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};aa=gb.prototype;aa.set=function(a,b){this.s||xa.prototype.set.call(this,a,b)};aa.Uh=function(a,b){this.s||xa.prototype.Uh.call(this,a,b)};aa.remove=function(a){this.s||xa.prototype.remove.call(this,a)};aa.Eb=function(){this.s=!0};aa.Hj=function(){return this.s};/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ib=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,jb=function(a){if(null==a)return String(a);var b=ib.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},kb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},mb=function(a){if(!a||"object"!=jb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!kb(a,"constructor")&&!kb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||kb(a,b)},nb=function(a,b){var c=b||("array"==jb(a)?[]:{}),d;for(d in a)if(kb(a,d)){var e=a[d];"array"==jb(e)?("array"!=jb(c[d])&&(c[d]=[]),c[d]=nb(e,c[d])):mb(e)?(mb(c[d])||(c[d]={}),c[d]=nb(e,c[d])):c[d]=e}return c};var ob=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},pb=function(a){if(void 0==a||Ha(a)||mb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1},qb=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)};var rb=function(a){this.s=new gb;this.h=[];this.C=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qb(b)?this.h[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};aa=rb.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.h.length;c++){var d=this.h[c];null===d||void 0===d?b.push(""):d instanceof rb?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(String(d))}return b.join(",")};
aa.set=function(a,b){if(!this.C)if("length"===a){if(!qb(b))throw Error("RangeError: Length property must be a valid integer.");this.h.length=Number(b)}else qb(a)?this.h[Number(a)]=b:this.s.set(a,b)};aa.get=function(a){return"length"===a?this.length():qb(a)?this.h[Number(a)]:this.s.get(a)};aa.length=function(){return this.h.length};aa.Tb=function(){for(var a=hb(this.s,1),b=0;b<this.h.length;b++)a.push(b+"");return new rb(a)};aa.remove=function(a){qb(a)?delete this.h[Number(a)]:this.s.remove(a)};
aa.pop=function(){return this.h.pop()};aa.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.h.shift()};aa.splice=function(a,b,c){return new rb(this.h.splice.apply(this.h,arguments))};aa.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};aa.has=function(a){return qb(a)&&this.h.hasOwnProperty(a)||this.s.has(a)};aa.Eb=function(){this.C=!0;Object.freeze(this.h);this.s.Eb()};aa.Hj=function(){return this.C};var sb=function(){gb.call(this)};sa(sb,gb);sb.prototype.Tb=function(){return new rb(hb(this,1))};function tb(){for(var a=ub,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function vb(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ub,wb;function xb(a){ub=ub||vb();wb=wb||tb();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,m=f>>2,n=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(p=64));b.push(ub[m],ub[n],ub[p],ub[q])}return b.join("")}
function yb(a){function b(m){for(;d<a.length;){var n=a.charAt(d++),p=wb[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return m}ub=ub||vb();wb=wb||tb();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var zb={},Ab=function(a,b){zb[a]=zb[a]||[];zb[a][b]=!0},Bb=function(){delete zb.GA4_EVENT},Cb=function(a){var b=zb[a];if(!b||0===b.length)return"";for(var c=[],d=0,e=0;e<b.length;e++)0===e%8&&0<e&&(c.push(String.fromCharCode(d)),d=0),b[e]&&(d|=1<<e%8);0<d&&c.push(String.fromCharCode(d));return xb(c.join("")).replace(/\.+$/,"")};var Db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var Eb,Fb=function(){if(void 0===Eb){var a=null,b=ua.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:va,createScript:va,createScriptURL:va})}catch(c){ua.console&&ua.console.error(c.message)}Eb=a}else Eb=a}return Eb};var Gb=function(a){this.h=a};Gb.prototype.toString=function(){return this.h+""};var Hb=function(a){return a instanceof Gb&&a.constructor===Gb?a.h:"type_error:TrustedResourceUrl"},Jb={},Kb=function(a){var b=a,c=Fb(),d=c?c.createScriptURL(b):b;return new Gb(d,Jb)};var Lb=function(a){this.h=a};Lb.prototype.toString=function(){return this.h.toString()};var Mb=function(a){return a instanceof Lb&&a.constructor===Lb?a.h:"type_error:SafeUrl"},Nb={},Ob=new Lb("about:invalid#zClosurez",Nb);var Pb,Qb;a:{for(var Rb=["CLOSURE_FLAGS"],Sb=ua,Tb=0;Tb<Rb.length;Tb++)if(Sb=Sb[Rb[Tb]],null==Sb){Qb=null;break a}Qb=Sb}var Ub=Qb&&Qb[610401301];Pb=null!=Ub?Ub:!1;function Vb(){var a=ua.navigator;if(a){var b=a.userAgent;if(b)return b}return""}var Wb,Xb=ua.navigator;Wb=Xb?Xb.userAgentData||null:null;function Yb(a){return Pb?Wb?Wb.brands.some(function(b){var c=b.brand;return c&&-1!=c.indexOf(a)}):!1:!1}function Zb(a){return-1!=Vb().indexOf(a)};function $b(){return Pb?!!Wb&&0<Wb.brands.length:!1}function ac(){return $b()?!1:Zb("Opera")}function bc(){return Zb("Firefox")||Zb("FxiOS")}function cc(){return $b()?Yb("Chromium"):(Zb("Chrome")||Zb("CriOS"))&&!($b()?0:Zb("Edge"))||Zb("Silk")};var dc={},ec=function(a){this.h=a};ec.prototype.toString=function(){return this.h.toString()};var fc=function(a){return a instanceof ec&&a.constructor===ec?a.h:"type_error:SafeHtml"};/*

 SPDX-License-Identifier: Apache-2.0
*/
var gc=ca([""]),hc=da(["\x00"],["\\0"]),ic=da(["\n"],["\\n"]),jc=da(["\x00"],["\\u0000"]);function kc(a){return-1===a.toString().indexOf("`")}kc(function(a){return a(gc)})||kc(function(a){return a(hc)})||kc(function(a){return a(ic)})||kc(function(a){return a(jc)});var lc=function(a){this.om=a};function mc(a){return new lc(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}var nc=[mc("data"),mc("http"),mc("https"),mc("mailto"),mc("ftp"),new lc(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function oc(a,b){b=void 0===b?nc:b;if(a instanceof Lb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof lc&&d.om(a))return new Lb(a,Nb)}}function pc(a){var b;b=void 0===b?nc:b;return oc(a,b)||Ob}var qc="function"===typeof URL;
function rc(a){var b;a:if(qc){var c;try{c=new URL(a)}catch(g){b="https:";break a}b=c.protocol}else{var d;b:{var e=document.createElement("a");try{e.href=a}catch(g){d=void 0;break b}var f=e.protocol;d=":"===f||""===f?"https:":f}b=d}if("javascript:"!==b)return a}var sc=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;var tc={};var uc=function(){},vc=function(a){this.h=a};sa(vc,uc);vc.prototype.toString=function(){return this.h};function wc(a,b){var c=[new vc(xc[0].toLowerCase(),tc)];if(0===c.length)throw Error("");var d=c.map(function(f){var g;if(f instanceof vc)g=f.h;else throw Error("");return g}),e=b.toLowerCase();if(d.every(function(f){return 0!==e.indexOf(f)}))throw Error('Attribute "'+b+'" does not match any of the allowed prefixes.');a.setAttribute(b,"true")}function yc(a){var b=a.tagName;if("SCRIPT"===b||"STYLE"===b)throw Error("");};function zc(a,b){var c=b instanceof Lb?Mb(b):rc(b);void 0!==c&&(a.action=c)};function Ac(a){var b=a=Bc(a),c=Fb(),d=c?c.createHTML(b):b;return new ec(d,dc)}function Bc(a){return null===a?"null":void 0===a?"undefined":a};var z=window,C=document,Cc=navigator,Dc=C.currentScript&&C.currentScript.src,Ec=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},Fc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Gc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},Hc={onload:1,src:1,width:1,height:1,style:1};function Ic(a,b,c){b&&l(b,function(d,e){d=d.toLowerCase();c.hasOwnProperty(d)||a.setAttribute(d,e)})}
var Jc=function(a,b,c,d,e){var f=C.createElement("script");Ic(f,d,Gc);f.type="text/javascript";f.async=d&&!1===d.async?!1:!0;var g;g=Kb(Bc(a));f.src=Hb(g);var h,m,n,p=null==(n=(m=(f.ownerDocument&&f.ownerDocument.defaultView||window).document).querySelector)?void 0:n.call(m,"script[nonce]");(h=p?p.nonce||p.getAttribute("nonce")||"":"")&&f.setAttribute("nonce",h);Fc(f,b);c&&(f.onerror=c);if(e)e.appendChild(f);else{var q=C.getElementsByTagName("script")[0]||C.body||C.head;q.parentNode.insertBefore(f,
q)}return f},Lc=function(){if(Dc){var a=Dc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Mc=function(a,b,c,d,e){var f;f=void 0===f?!0:f;var g=e,h=!1;g||(g=C.createElement("iframe"),h=!0);Ic(g,c,Hc);d&&l(d,function(n,p){g.dataset[n]=p});f&&(g.height="0",g.width="0",g.style.display="none",g.style.visibility="hidden");if(h){var m=C.body&&C.body.lastChild||C.body||C.head;m.parentNode.insertBefore(g,m)}Fc(g,b);void 0!==a&&(g.src=a);return g},Nc=function(a,
b,c,d){var e=new Image(1,1);Ic(e,d,{});e.onload=function(){e.onload=null;b&&b()};e.onerror=function(){e.onerror=null;c&&c()};e.src=a},Oc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},F=function(a){z.setTimeout(a,0)},Qc=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Rc=function(a){var b=a.innerText||
a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Sc=function(a){var b=C.createElement("div"),c=b,d=Ac("A<div>"+a+"</div>");1===c.nodeType&&yc(c);c.innerHTML=fc(d);b=b.lastChild;for(var e=[];b.firstChild;)e.push(b.removeChild(b.firstChild));return e},Tc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
Uc=function(a){var b;try{b=Cc.sendBeacon&&Cc.sendBeacon(a)}catch(c){Ab("TAGGING",15)}b||Nc(a)},Vc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c},Wc=function(a){var b={headers:{"Attribution-Reporting-Eligible":"trigger"},keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!0}};try{z.fetch(a,b)}catch(c){}},Xc=function(){var a=z.performance;if(a&&Fa(a.now))return a.now()},Yc=function(){return z.performance||void 0};var Zc=function(a,b){return H(this,a)&&H(this,b)},$c=function(a,b){return H(this,a)===H(this,b)},ad=function(a,b){return H(this,a)||H(this,b)},bd=function(a,b){a=H(this,a);b=H(this,b);return-1<String(a).indexOf(String(b))},cd=function(a,b){a=String(H(this,a));b=String(H(this,b));return a.substring(0,b.length)===b},dd=function(a,b){a=H(this,a);b=H(this,b);switch(a){case "pageLocation":var c=z.location.href;b instanceof sb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var ed=function(a,b){gb.call(this);this.F=a;this.M=b};sa(ed,gb);ed.prototype.toString=function(){return this.F};ed.prototype.Tb=function(){return new rb(hb(this,1))};ed.prototype.invoke=function(a,b){return this.M.apply(new fd(this,a),Array.prototype.slice.call(arguments,1))};ed.prototype.ab=function(a,b){try{return this.invoke.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var fd=function(a,b){this.s=a;this.h=b},H=function(a,b){var c=a.h;return Ha(b)?eb(c,b):b},I=function(a){return a.s.F};var gd=function(){this.map=new Map};gd.prototype.set=function(a,b){this.map.set(a,b)};gd.prototype.get=function(a){return this.map.get(a)};var hd=function(){this.keys=[];this.values=[]};hd.prototype.set=function(a,b){this.keys.push(a);this.values.push(b)};hd.prototype.get=function(a){var b=this.keys.indexOf(a);if(-1<b)return this.values[b]};function id(){try{return Map?new gd:new hd}catch(a){return new hd}};var jd=function(a){if(a instanceof jd)return a;if(pb(a))throw Error("Type of given value has an equivalent Pixie type.");this.h=a};jd.prototype.toString=function(){return String(this.h)};var ld=function(a){gb.call(this);this.F=a;this.set("then",kd(this));this.set("catch",kd(this,!0));this.set("finally",kd(this,!1,!0))};sa(ld,sb);var kd=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;return new ed("",function(d,e){b&&(e=d,d=void 0);c&&(e=d);d instanceof ed||(d=void 0);e instanceof ed||(e=void 0);var f=Ba(this.h),g=function(m){return function(n){return c?(m.invoke(f),a.F):m.invoke(f,n)}},h=a.F.then(d&&g(d),e&&g(e));return new ld(h)})};var nd=function(a,b,c){var d=id(),e=function(g,h){for(var m=hb(g,1),n=0;n<m.length;n++)h[m[n]]=f(g.get(m[n]))},f=function(g){var h=d.get(g);if(h)return h;if(g instanceof rb){var m=[];d.set(g,m);for(var n=g.Tb(),p=0;p<n.length();p++)m[n.get(p)]=f(g.get(n.get(p)));return m}if(g instanceof ld)return g.F;if(g instanceof sb){var q={};d.set(g,q);e(g,q);return q}if(g instanceof ed){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=md(u[v],b,c);var w=new za(b?b.X:
new ya);b&&(w.h=b.h);return f(g.invoke.apply(g,[w].concat(u)))};d.set(g,r);e(g,r);return r}var t=!1;switch(c){case 1:t=!0;break;case 2:t=!1;break;case 3:t=!1;break;default:}if(g instanceof jd&&t)return g.h;switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},md=function(a,b,c){var d=id(),e=function(g,
h){for(var m in g)g.hasOwnProperty(m)&&h.set(m,f(g[m]))},f=function(g){var h=d.get(g);if(h)return h;if(Ha(g)||Ma(g)){var m=new rb([]);d.set(g,m);for(var n in g)g.hasOwnProperty(n)&&m.set(n,f(g[n]));return m}if(mb(g)){var p=new sb;d.set(g,p);e(g,p);return p}if("function"===typeof g){var q=new ed("",function(x){for(var y=Array.prototype.slice.call(arguments,0),A=0;A<y.length;A++)y[A]=nd(H(this,y[A]),b,c);return f((0,this.h.M)(g,g,y))});d.set(g,q);e(g,q);return q}var v=typeof g;if(null===g||"string"===v||"number"===v||"boolean"===v)return g;var w=!1;switch(c){case 1:w=!0;break;case 2:w=!1;break;default:}if(void 0!==g&&w)return new jd(g)};return f(a)};var od=function(){var a=!1;return a};var pd={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof rb)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new rb(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.invoke(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.invoke(a,this.get(e),e,this)&&d.push(this.get(e));return new rb(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.invoke(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=
e;f<d;f++)if(this.has(f)&&this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.invoke(a,this.get(e),e,this));return new rb(d)},pop:function(){return this.pop()},push:function(a,
b){return this.push.apply(this,Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.invoke(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===
d)throw Error("TypeError: ReduceRight on List with no elements.");for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.invoke(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=ob(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();
void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new rb(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.invoke(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=ob(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.invoke(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d);
return this},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var qd=function(a){var b;b=Error.call(this,a);this.message=b.message;"stack"in b&&(this.stack=b.stack)};sa(qd,Error);var rd={charAt:1,concat:1,indexOf:1,lastIndexOf:1,match:1,replace:1,search:1,slice:1,split:1,substring:1,toLowerCase:1,toLocaleLowerCase:1,toString:1,toUpperCase:1,toLocaleUpperCase:1,trim:1},sd=new wa("break"),td=new wa("continue"),ud=function(a,b){return H(this,a)+H(this,b)},vd=function(a,b){return H(this,a)&&H(this,b)},wd=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);if(!(c instanceof rb))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a){var d="TypeError: Can't read property "+
b+" of "+a+".";if(od())throw new qd(d);throw Error(d);}var e="number"===typeof a;if("boolean"===typeof a||e){if("toString"===b){if(e&&c.length()){var f=nd(c.get(0));try{return a.toString(f)}catch(y){}}return a.toString()}var g="TypeError: "+a+"."+b+" is not a function.";if(od())throw new qd(g);throw Error(g);}if("string"===typeof a){if(rd.hasOwnProperty(b)){var h=2;h=1;
var m=nd(c,void 0,h);return md(a[b].apply(a,m),this.h)}var n="TypeError: "+b+" is not a function";if(od())throw new qd(n);throw Error(n);}if(a instanceof rb){if(a.has(b)){var p=a.get(b);if(p instanceof ed){var q=ob(c);q.unshift(this.h);return p.invoke.apply(p,q)}var r="TypeError: "+b+" is not a function";if(od())throw new qd(r);throw Error(r);}if(0<=pd.supportedMethods.indexOf(b)){var t=ob(c);t.unshift(this.h);return pd[b].apply(a,t)}}if(a instanceof ed||a instanceof sb){if(a.has(b)){var u=a.get(b);
if(u instanceof ed){var v=ob(c);v.unshift(this.h);return u.invoke.apply(u,v)}var w="TypeError: "+b+" is not a function";if(od())throw new qd(w);throw Error(w);}if("toString"===b)return a instanceof ed?a.F:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,ob(c))}if(a instanceof jd&&"toString"===b)return a.toString();var x="TypeError: Object has no '"+b+"' property.";if(od())throw new qd(x);throw Error(x);},xd=function(a,b){a=H(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.h;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=H(this,b);c.set(a,d);return d},yd=function(a){var b=Ba(this.h),c=db(b,Array.prototype.slice.apply(arguments));if(c instanceof wa)return c},zd=function(){return sd},Ad=function(a){for(var b=H(this,a),c=0;c<b.length;c++){var d=H(this,b[c]);if(d instanceof wa)return d}},Bd=function(a){for(var b=this.h,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=H(this,arguments[c+1]);Aa(b,d,e,
!0)}}},Cd=function(){return td},Dd=function(a,b){return new wa(a,H(this,b))},Ed=function(a,b,c){var d=new rb;b=H(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h.add(a,H(this,f))},Fd=function(a,b){return H(this,a)/H(this,b)},Gd=function(a,b){a=H(this,a);b=H(this,b);var c=a instanceof jd,d=b instanceof jd;return c||d?c&&d?a.h==b.h:!1:a==b},Hd=function(a){for(var b,c=0;c<arguments.length;c++)b=H(this,arguments[c]);
return b};function Id(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=db(f,d);if(g instanceof wa){if("break"===g.h)break;if("return"===g.h)return g}}}function Jd(a,b,c){if("string"===typeof b)return Id(a,function(){return b.length},function(f){return f},c);if(b instanceof sb||b instanceof rb||b instanceof ed){var d=b.Tb(),e=d.length();return Id(a,function(){return e},function(f){return d.get(f)},c)}}
var Kd=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Jd(function(e){d.set(a,e);return d},b,c)},Ld=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Jd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},Md=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Jd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},Od=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Nd(function(e){d.set(a,e);return d},b,c)},Pd=
function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Nd(function(e){var f=Ba(d);Aa(f,a,e,!0);return f},b,c)},Qd=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.h;return Nd(function(e){var f=Ba(d);f.add(a,e);return f},b,c)};
function Nd(a,b,c){if("string"===typeof b)return Id(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof rb)return Id(a,function(){return b.length()},function(d){return b.get(d)},c);if(od())throw new qd("The value is not iterable.");throw new TypeError("The value is not iterable.");}
var Rd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=H(this,a);if(!(f instanceof rb))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.h;d=H(this,d);var h=Ba(g);for(e(g,h);eb(h,b);){var m=db(h,d);if(m instanceof wa){if("break"===m.h)break;if("return"===m.h)return m}var n=Ba(g);e(h,n);eb(n,c);h=n}},Sd=function(a,b,c){var d=this.h,e=H(this,b);if(!(e instanceof rb))throw Error("Error: non-List value given for Fn argument names.");
var f=Array.prototype.slice.call(arguments,2);return new ed(a,function(){return function(g){var h=Ba(d);void 0===h.h&&(h.h=this.h.h);for(var m=Array.prototype.slice.call(arguments,0),n=0;n<m.length;n++)if(m[n]=H(this,m[n]),m[n]instanceof wa)return m[n];for(var p=e.get("length"),q=0;q<p;q++)q<m.length?h.add(e.get(q),m[q]):h.add(e.get(q),void 0);h.add("arguments",new rb(m));var r=db(h,f);if(r instanceof wa)return"return"===r.h?r.s:r}}())},Td=function(a){a=H(this,a);var b=this.h,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},Ud=function(a,b){var c;a=H(this,a);b=H(this,b);if(void 0===a||null===a){var d="TypeError: Cannot read properties of "+a+" (reading '"+b+"')";if(od())throw new qd(d);throw Error(d);}if(a instanceof sb||a instanceof rb||a instanceof ed)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:qb(b)&&(c=a[b]);else if(a instanceof jd)return;
return c},Vd=function(a,b){return H(this,a)>H(this,b)},Wd=function(a,b){return H(this,a)>=H(this,b)},Xd=function(a,b){a=H(this,a);b=H(this,b);a instanceof jd&&(a=a.h);b instanceof jd&&(b=b.h);return a===b},Yd=function(a,b){return!Xd.call(this,a,b)},Zd=function(a,b,c){var d=[];H(this,a)?d=H(this,b):c&&(d=H(this,c));var e=db(this.h,d);if(e instanceof wa)return e},$d=function(a,b){return H(this,a)<H(this,b)},be=function(a,b){return H(this,a)<=H(this,b)},ce=function(a){for(var b=new rb,c=0;c<arguments.length;c++){var d=
H(this,arguments[c]);b.push(d)}return b},de=function(a){for(var b=new sb,c=0;c<arguments.length-1;c+=2){var d=H(this,arguments[c])+"",e=H(this,arguments[c+1]);b.set(d,e)}return b},ee=function(a,b){return H(this,a)%H(this,b)},fe=function(a,b){return H(this,a)*H(this,b)},ge=function(a){return-H(this,a)},he=function(a){return!H(this,a)},ie=function(a,b){return!Gd.call(this,a,b)},je=function(){return null},ke=function(a,b){return H(this,a)||H(this,b)},le=function(a,b){var c=H(this,a);H(this,b);return c},
me=function(a){return H(this,a)},ne=function(a){return Array.prototype.slice.apply(arguments)},oe=function(a){return new wa("return",H(this,a))},pe=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);if(null===a||void 0===a){var d="TypeError: Can't set property "+b+" of "+a+".";if(od())throw new qd(d);throw Error(d);}(a instanceof ed||a instanceof rb||a instanceof sb)&&a.set(b,c);return c},qe=function(a,b){return H(this,a)-H(this,b)},re=function(a,b,c){a=H(this,a);var d=H(this,b),e=H(this,c);if(!Ha(d)||
!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===H(this,d[h]))if(f=H(this,e[h]),f instanceof wa){var m=f.h;if("break"===m)return;if("return"===m||"continue"===m)return f}else g=!0;if(e.length===d.length+1&&(f=H(this,e[e.length-1]),f instanceof wa&&("return"===f.h||"continue"===f.h)))return f},se=function(a,b,c){return H(this,a)?H(this,b):H(this,c)},te=function(a){a=H(this,a);return a instanceof ed?"function":typeof a},ue=function(a){for(var b=
this.h,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},ve=function(a,b,c,d){var e=H(this,d);if(H(this,c)){var f=db(this.h,e);if(f instanceof wa){if("break"===f.h)return;if("return"===f.h)return f}}for(;H(this,a);){var g=db(this.h,e);if(g instanceof wa){if("break"===g.h)break;if("return"===g.h)return g}H(this,b)}},we=function(a){return~Number(H(this,a))},xe=function(a,b){return Number(H(this,a))<<Number(H(this,b))},ye=function(a,b){return Number(H(this,a))>>Number(H(this,
b))},ze=function(a,b){return Number(H(this,a))>>>Number(H(this,b))},Ae=function(a,b){return Number(H(this,a))&Number(H(this,b))},Be=function(a,b){return Number(H(this,a))^Number(H(this,b))},Ce=function(a,b){return Number(H(this,a))|Number(H(this,b))},De=function(){},Ee=function(a,b,c,d,e){var f=!0;try{var g=H(this,c);if(g instanceof wa)return g}catch(r){if(!(r instanceof qd&&a))throw f=r instanceof qd,r;var h=Ba(this.h),m=new jd(r);h.add(b,m);var n=H(this,d),p=db(h,n);if(p instanceof wa)return p}finally{if(f&&
void 0!==e){var q=H(this,e);if(q instanceof wa)return q}}};var Ge=function(){this.h=new fb;Fe(this)};Ge.prototype.execute=function(a){return this.h.s(a)};var Fe=function(a){var b=function(c,d){var e=new ed(String(c),d);e.Eb();a.h.h.set(String(c),e)};b("map",de);b("and",Zc);b("contains",bd);b("equals",$c);b("or",ad);b("startsWith",cd);b("variable",dd)};var Ie=function(){this.h=new fb;He(this)};Ie.prototype.execute=function(a){return Je(this.h.s(a))};
var Ke=function(a,b,c){return Je(a.h.F(b,c))},He=function(a){var b=function(c,d){var e=String(c),f=new ed(e,d);f.Eb();a.h.h.set(e,f)};b(0,ud);b(1,vd);b(2,wd);b(3,xd);b(56,Ae);b(57,xe);b(58,we);b(59,Ce);b(60,ye);b(61,ze);b(62,Be);b(53,yd);b(4,zd);b(5,Ad);b(52,Bd);b(6,Cd);b(49,Dd);b(7,ce);b(8,de);b(9,Ad);b(50,Ed);b(10,Fd);b(12,Gd);b(13,Hd);b(51,Sd);b(47,Kd);b(54,Ld);b(55,Md);b(63,Rd);b(64,Od);b(65,Pd);b(66,Qd);b(15,Td);b(16,Ud);b(17,Ud);b(18,Vd);b(19,Wd);b(20,Xd);b(21,Yd);b(22,Zd);b(23,$d);b(24,be);
b(25,ee);b(26,fe);b(27,ge);b(28,he);b(29,ie);b(45,je);b(30,ke);b(32,le);b(33,le);b(34,me);b(35,me);b(46,ne);b(36,oe);b(43,pe);b(37,qe);b(38,re);b(39,se);b(67,Ee);b(40,te);b(44,De);b(41,ue);b(42,ve)};function Je(a){if(a instanceof wa||a instanceof ed||a instanceof rb||a instanceof sb||a instanceof jd||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};function Le(a){switch(a){case 1:return"1";case 2:case 4:return"0";default:return"-"}}function Me(a){switch(a){case 1:return"G";case 3:return"g";case 2:return"D";case 4:return"d";case 0:return"g";default:return"g"}}function Ne(a,b){var c=a[1]||0,d=a[2]||0;switch(b){case 0:return"G1"+Le(c)+Le(d);case 1:return"G2"+Me(c)+Me(d);default:return"g1--"}};var Oe=function(){var a=function(b){return{toString:function(){return b}}};return{kk:a("consent"),fi:a("convert_case_to"),gi:a("convert_false_to"),hi:a("convert_null_to"),ii:a("convert_true_to"),ji:a("convert_undefined_to"),un:a("debug_mode_metadata"),na:a("function"),Tg:a("instance_name"),Sk:a("live_only"),Tk:a("malware_disabled"),Uk:a("metadata"),Xk:a("original_activity_id"),Jn:a("original_vendor_template_id"),In:a("once_on_load"),Wk:a("once_per_event"),ej:a("once_per_load"),Nn:a("priority_override"),
On:a("respected_consent_types"),kj:a("setup_tags"),oe:a("tag_id"),pj:a("teardown_tags")}}();var kf;
var lf=[],mf=[],nf=[],of=[],pf=[],qf={},rf,sf,tf=function(a){sf=sf||a},uf=function(a){},vf,wf=[],xf=function(a,b){var c={};c[Oe.na]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},yf=function(a,
b){var c=a[Oe.na],d=b&&b.event;if(!c)throw Error("Error: No function name given for function call.");var e=qf[c],f=b&&2===b.type&&d.reportMacroDiscrepancy&&e&&-1!==wf.indexOf(c),g={},h={},m;for(m in a)a.hasOwnProperty(m)&&0===m.indexOf("vtp_")&&(e&&d&&d.checkPixieIncompatibility&&d.checkPixieIncompatibility(a[m]),e&&(g[m]=a[m]),!e||f)&&(h[m.substr(4)]=a[m]);e&&d&&d.cachedModelValues&&(g.vtp_gtmCachedValues=d.cachedModelValues);if(b){if(null==b.name){var n;a:{var p=b.type,q=b.index;if(null==q)n="";
else{var r;switch(p){case 2:r=lf[q];break;case 1:r=of[q];break;default:n="";break a}var t=r&&r[Oe.Tg];n=t?String(t):""}}b.name=n}e&&(g.vtp_gtmEntityIndex=b.index,g.vtp_gtmEntityName=b.name)}var u,v;e&&(u=e(g));if(!e||f)v=kf(c,h,b);f&&d&&(pb(u)?typeof u!==typeof v&&d.reportMacroDiscrepancy(d.id,c):u!==v&&d.reportMacroDiscrepancy(d.id,c));return e?u:v},Af=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=zf(a[e],b,c));return d},zf=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];
case "list":d=[];for(var e=1;e<a.length;e++)d.push(zf(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=lf[f];if(!g||b.isBlocked(g))return;c[f]=!0;var h=String(g[Oe.Tg]);try{var m=Af(g,b,c);m.vtp_gtmEventId=b.id;b.priorityId&&(m.vtp_gtmPriorityId=b.priorityId);d=yf(m,{event:b,index:f,type:2,name:h});vf&&(d=vf.xl(d,m))}catch(y){b.logMacroError&&b.logMacroError(y,Number(f),h),d=!1}c[f]=!1;return d;case "map":d={};for(var n=1;n<a.length;n+=2)d[zf(a[n],b,c)]=zf(a[n+1],b,c);return d;case "template":d=
[];for(var p=!1,q=1;q<a.length;q++){var r=zf(a[q],b,c);sf&&(p=p||sf.km(r));d.push(r)}return sf&&p?sf.zl(d):d.join("");case "escape":d=zf(a[1],b,c);if(sf&&Ha(a[1])&&"macro"===a[1][0]&&sf.lm(a))return sf.Pm(d);d=String(d);for(var t=2;t<a.length;t++)Pe[a[t]]&&(d=Pe[a[t]](d));return d;case "tag":var u=a[1];if(!of[u])throw Error("Unable to resolve tag reference "+u+".");return d={Aj:a[2],index:u};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v[Oe.na]=a[1];var w=Bf(v,b,c),x=!!a[4];return x||2!==
w?x!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Bf=function(a,b,c){try{return rf(Af(a,b,c))}catch(d){JSON.stringify(a)}return 2},Cf=function(a){var b=a[Oe.na];if(!b)throw Error("Error: No function name given for function call.");return!!qf[b]};var Df=function(a,b,c){var d;d=Error.call(this,c);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.h=a};sa(Df,Error);function Ef(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ef(a[c],b[c])}};var Ff=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.Km=a;this.s=b;this.h=[]};sa(Ff,Error);var Hf=function(){return function(a,b){a instanceof Ff||(a=new Ff(a,Gf));b&&a.h.push(b);throw a;}};function Gf(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Kf=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=If(a),f=0;f<mf.length;f++){var g=mf[f],h=Jf(g,e);if(h){for(var m=g.add||[],n=0;n<m.length;n++)c[m[n]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<of.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},Jf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;
if(2===e)return null}for(var f=a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},If=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Bf(nf[c],a));return b[c]}};var Lf={xl:function(a,b){b[Oe.fi]&&"string"===typeof a&&(a=1==b[Oe.fi]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Oe.hi)&&null===a&&(a=b[Oe.hi]);b.hasOwnProperty(Oe.ji)&&void 0===a&&(a=b[Oe.ji]);b.hasOwnProperty(Oe.ii)&&!0===a&&(a=b[Oe.ii]);b.hasOwnProperty(Oe.gi)&&!1===a&&(a=b[Oe.gi]);return a}};var Mf=function(){this.h={}},Of=function(a,b){var c=Nf.s,d;null!=(d=c.h)[a]||(d[a]=[]);c.h[a].push(function(){return b.apply(null,ia(ta.apply(0,arguments)))})};function Pf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e](b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Df(c,d,g);}}
function Qf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.h[d],f=a.h.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Pf(e,b,d,g);Pf(f,b,d,g)}}}};var Rf=[],Sf=function(a){return void 0==Rf[a]?!1:Rf[a]};var Wf=function(){var a=data.permissions||{},b=Tf.ctid,c=this;this.s=new Mf;this.h={};var d=Sf(15),e={},f={},g=Qf(this.s,b,function(){var h=arguments[0];return h&&e[h]?e[h].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});l(a,function(h,m){var n={};l(m,function(q,r){var t=Uf(q,r);n[q]=t.assert;e[q]||(e[q]=t.K);d&&t.sj&&!f[q]&&(f[q]=t.sj)});var p;d&&(p=function(q){var r=ta.apply(1,arguments);if(!n[q])throw Vf(q,{},"The requested additional permission "+q+" is not configured.");g.apply(null,
[q].concat(ia(r)))});c.h[h]=function(q,r){var t=n[q];if(!t)throw Vf(q,{},"The requested permission "+q+" is not configured.");var u=Array.prototype.slice.call(arguments,0);t.apply(void 0,u);g.apply(void 0,u);if(d){var v=f[q];v&&v.apply(null,[p].concat(ia(u.slice(1))))}}})},Xf=function(a){return Nf.h[a]||function(){}};
function Uf(a,b){var c=xf(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Vf;try{return yf(c)}catch(d){return{assert:function(e){throw new Df(e,{},"Permission "+e+" is unknown.");},K:function(){if(Sf(15))throw new Df(a,{},"Permission "+a+" is unknown.");for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Vf(a,b,c){return new Df(a,b,c)};var Yf=!1;var Zf={};Zf.qn=Oa('');Zf.Bl=Oa('');var $f=Yf,ag=Zf.Bl,bg=Zf.qn;var pg=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];function qg(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)===c}var rg=new Ka;function sg(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=rg.get(e);f||(f=new RegExp(b,d),rg.set(e,f));return f.test(a)}catch(g){return!1}}function tg(a,b){return 0<=String(a).indexOf(String(b))}function ug(a,b){return String(a)===String(b)}
function vg(a,b){return Number(a)>=Number(b)}function wg(a,b){return Number(a)<=Number(b)}function xg(a,b){return Number(a)>Number(b)}function yg(a,b){return Number(a)<Number(b)}function zg(a,b){return 0===String(a).indexOf(String(b))};var Gg=/^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;function Hg(a,b){for(var c="",d=!0;7<a;){var e=a&31;a>>=5;d?d=!1:e|=32;c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e]+c}a<<=2;d||(a|=32);return c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a|b]+c};var Ig=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,Jg={Fn:"function",PixieMap:"Object",List:"Array"},J=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ig.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],m=c[d];if(null==m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof m;m instanceof ed?n="Fn":m instanceof rb?n="List":m instanceof sb?n="PixieMap":m instanceof jd&&(n=
"OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+(Jg[n]||n)+", which does not match required type "+(Jg[h]||h)+".");}}};function Kg(a){return""+a}
function Lg(a,b){var c=[];return c};var Mg=function(a,b){var c=new ed(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=H(this,d[e]);try{return b.apply(this,d)}catch(g){if(od())throw new qd(g.message);throw g;}});c.Eb();return c},Ng=function(a,b){var c=new sb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,Mg(a+"_"+d,e)):mb(e)?c.set(d,Ng(a+"_"+d,
e)):(Ga(e)||k(e)||"boolean"===typeof e)&&c.set(d,e)}c.Eb();return c};var Og=function(a,b){J(I(this),["apiName:!string","message:?string"],arguments);var c={},d=new sb;return d=Ng("AssertApiSubject",c)};var Pg=function(a,b){J(I(this),["actual:?*","message:?string"],arguments);if(a instanceof ld)throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");var c={},d=new sb;return d=Ng("AssertThatSubject",c)};function Qg(a){return function(){for(var b=[],c=this.h,d=0;d<arguments.length;++d)b.push(nd(arguments[d],c));return md(a.apply(null,b))}}var Sg=function(){for(var a=Math,b=Rg,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Qg(a[e].bind(a)))}return c};var Tg=function(a){var b;return b};var Ug=function(a){var b;return b};var Vg=function(a){try{return encodeURI(a)}catch(b){}};var Wg=function(a){try{return encodeURIComponent(a)}catch(b){}};function Xg(a,b){var c=!1;return c}
Xg.D="internal.evaluateBooleanExpression";var bh=function(a){J(I(this),["message:?string"],arguments);};var ch=function(a,b){J(I(this),["min:!number","max:!number"],arguments);return Ja(a,b)};var dh=function(){return(new Date).getTime()};var jh=function(a){if(null===a)return"null";if(a instanceof rb)return"array";if(a instanceof ed)return"function";if(a instanceof jd){a=a.h;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var kh=function(a){function b(c){return function(d){try{return c(d)}catch(e){($f||bg)&&a.call(this,e.message)}}}return{parse:b(function(c){return md(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(nd(c))})}};var lh=function(a){return Na(nd(a,this.h))};var mh=function(a){return Number(nd(a,this.h))};var nh=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var oh=function(a,b,c){var d=null,e=!1;return e?d:null};var Rg="floor ceil round max min abs pow sqrt".split(" ");var ph=function(){var a={};return{Ol:function(b){return a.hasOwnProperty(b)?a[b]:void 0},hn:function(b,c){a[b]=c},reset:function(){a={}}}},qh=function(a,b){return function(){var c=Array.prototype.slice.call(arguments,0);c.unshift(b);return ed.prototype.invoke.apply(a,c)}},rh=function(a,b){J(I(this),["apiName:!string","mock:?*"],arguments);};var sh={};
sh.keys=function(a){return new rb};
sh.values=function(a){return new rb};
sh.entries=function(a){return new rb};
sh.freeze=function(a){return a};sh.delete=function(a,b){return!1};var K=function(a,b,c){var d=a.h.h;if(!d)throw Error("Missing program state.");if(d.Wm){try{d.uj.apply(null,Array.prototype.slice.call(arguments,1))}catch(e){throw Ab("TAGGING",21),e;}return}d.uj.apply(null,Array.prototype.slice.call(arguments,1))};var uh=function(){this.h={};this.s={};};uh.prototype.get=function(a,b){var c=this.h.hasOwnProperty(a)?this.h[a]:void 0;return c};
uh.prototype.add=function(a,b,c){if(this.h.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.h[a]=c?void 0:Fa(b)?Mg(a,b):Ng(a,b)};function vh(a,b){var c=void 0;return c};function wh(){var a={};
return a};var yh=function(a){return xh?C.querySelectorAll(a):null},zh=function(a,b){if(!xh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ah=!1;if(C.querySelectorAll)try{var Bh=C.querySelectorAll(":root");Bh&&1==Bh.length&&Bh[0]==C.documentElement&&(Ah=!0)}catch(a){}var xh=Ah;var L=function(a){Ab("GTM",a)};
var Ch=function(a){return null==a?"":k(a)?Qa(String(a)):"e0"},Eh=function(a){return a.replace(Dh,"")},Gh=function(a){return Fh(a.replace(/\s/g,""))},Fh=function(a){return Qa(a.replace(Hh,"").toLowerCase())},Jh=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return Ih.test(a)?a:"e0"},Lh=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&(c=c.replace(/\./g,""));c=c+"@"+b[1];if(Kh.test(c))return c}return"e0"},Oh=function(a){if(""===
a||"e0"===a)return Promise.resolve(a);if(z.crypto&&z.crypto.subtle){if(Mh.test(a))return Promise.resolve(a);try{var b=Nh(a);return z.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");return z.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}}else return Promise.resolve("e1")},Nh=function(a){var b;if(z.TextEncoder)b=(new TextEncoder("utf-8")).encode(a);
else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},Hh=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,Kh=/^\S+@\S+\.\S+$/,Ih=/^\+\d{10,15}$/,Dh=/[.~]/g,Ph=/^[0-9A-Za-z_-]{43}$/,Mh=/^[0-9A-Fa-f]{64}$/,Qh={},Rh=(Qh.email="em",Qh.phone_number="pn",Qh.first_name="fn",
Qh.last_name="ln",Qh.street="sa",Qh.city="ct",Qh.region="rg",Qh.country="co",Qh.postal_code="pc",Qh.error_code="ec",Qh),Sh={},Th=(Sh.email="sha256_email_address",Sh.phone_number="sha256_phone_number",Sh.first_name="sha256_first_name",Sh.last_name="sha256_last_name",Sh.street="sha256_street",Sh),Vh=function(a,b){a.some(function(c){c.value&&Uh.indexOf(c.name)})?b(a):z.Promise?Promise.all(a.map(function(c){return c.value&&-1!==Uh.indexOf(c.name)?Oh(c.value).then(function(d){c.value=d}):Promise.resolve()})).then(function(){b(a)}).catch(function(){b([])}):
b([])},Xh=function(a,b){var c=Wh(a);Vh(c,b)},Wh=function(a){function b(r,t,u,v){var w=Ch(r);""!==w&&(Mh.test(w)?h.push({name:t,value:w,index:v}):h.push({name:t,value:u(w),index:v}))}function c(r,t){var u=r;if(k(u)||Ha(u)){u=Ha(r)?r:[r];for(var v=0;v<u.length;++v){var w=Ch(u[v]),x=Mh.test(w);t&&!x&&L(89);!t&&x&&L(88)}}}function d(r,t){var u=r[t];c(u,!1);var v=Th[t];r.hasOwnProperty(v)&&(r.hasOwnProperty(t)&&L(90),u=r[v],c(u,!0));return u}function e(r,t,u){var v=d(r,t);v=Ha(v)?v:[v];for(var w=0;w<v.length;++w)b(v[w],
t,u)}function f(r,t,u,v){var w=d(r,t);b(w,t,u,v)}function g(r){return function(t){L(64);return r(t)}}var h=[];if("https:"!==z.location.protocol)return h.push({name:"error_code",value:"e3",index:void 0}),h;e(a,"email",Lh);e(a,"phone_number",Jh);e(a,"first_name",g(Gh));e(a,"last_name",g(Gh));var m=a.home_address||{};e(m,"street",g(Fh));e(m,"city",g(Fh));e(m,"postal_code",g(Eh));e(m,"region",g(Fh));e(m,"country",g(Eh));var n=a.address||{};n=Ha(n)?n:[n];for(var p=0;p<n.length;p++){var q=n[p];f(q,"first_name",
Gh,p);f(q,"last_name",Gh,p);f(q,"street",Fh,p);f(q,"city",Fh,p);f(q,"postal_code",Eh,p);f(q,"region",Fh,p);f(q,"country",Eh,p)}return h},Zh=function(a,b){Xh(a,function(c){var d=Yh(c);b(d.Nf,d.Lh)})},Yh=function(a){for(var b=["tv.1"],c=0,d=0;d<a.length;++d){var e=a[d].name,f=a[d].value,g=a[d].index,h=Rh[e];h&&f&&(-1===Uh.indexOf(e)||/^e\d+$/.test(f)||Ph.test(f)||Mh.test(f))&&(void 0!==g&&(h+=g),b.push(h+"."+f),c++)}1===a.length&&"error_code"===a[0].name&&(c=0);return{Nf:encodeURIComponent(b.join("~")),
Lh:c}},$h=function(a){if(z.Promise)try{return new Promise(function(b){Zh(a,function(c,d){b({Kj:c,Lh:d})})})}catch(b){}},Uh=Object.freeze(["email","phone_number","first_name","last_name","street"]);var N={g:{Ea:"ad_personalization",J:"ad_storage",N:"ad_user_data",R:"analytics_storage",Va:"region",ud:"consent_updated",We:"wait_for_update",pk:"ads",ag:"all",qk:"maps",rk:"playstore",sk:"search",tk:"shopping",uk:"youtube",ki:"app_remove",li:"app_store_refund",mi:"app_store_subscription_cancel",ni:"app_store_subscription_convert",oi:"app_store_subscription_renew",dg:"add_payment_info",eg:"add_shipping_info",ac:"add_to_cart",bc:"remove_from_cart",fg:"view_cart",Hb:"begin_checkout",fc:"select_item",
fb:"view_item_list",sb:"select_promotion",hb:"view_promotion",ra:"purchase",hc:"refund",Fa:"view_item",gg:"add_to_wishlist",wk:"exception",ri:"first_open",si:"first_visit",sa:"gtag.config",Pa:"gtag.get",ui:"in_app_purchase",ic:"page_view",xk:"screen_view",vi:"session_start",yk:"timing_complete",zk:"track_social",xd:"user_engagement",tb:"gclid",wa:"ads_data_redaction",ja:"allow_ad_personalization_signals",Xe:"allow_custom_scripts",Ye:"allow_display_features",yd:"allow_enhanced_conversions",ib:"allow_google_signals",
Ga:"allow_interest_groups",Ak:"app_id",Bk:"app_installer_id",Ck:"app_name",Dk:"app_version",jc:"auid",wi:"auto_detection_enabled",Ib:"aw_remarketing",Ze:"aw_remarketing_only",zd:"discount",Ad:"aw_feed_country",Bd:"aw_feed_language",Z:"items",Cd:"aw_merchant_id",hg:"aw_basket_type",Ic:"campaign_content",Jc:"campaign_id",Kc:"campaign_medium",Lc:"campaign_name",Mc:"campaign",Nc:"campaign_source",Oc:"campaign_term",ub:"client_id",xi:"content_group",yi:"content_type",Qa:"conversion_cookie_prefix",Pc:"conversion_id",
Ha:"conversion_linker",Jb:"conversion_api",af:"cookie_deprecation",Wa:"cookie_domain",Ka:"cookie_expires",Xa:"cookie_flags",kc:"cookie_name",Qc:"cookie_path",Ra:"cookie_prefix",mc:"cookie_update",nc:"country",xa:"currency",Dd:"customer_lifetime_value",Rc:"custom_map",zi:"gcldc",Ai:"debug_mode",ba:"developer_id",Bi:"disable_merchant_reported_purchases",Sc:"dc_custom_params",Ci:"dc_natural_search",ig:"dynamic_event_settings",jg:"affiliation",Ed:"checkout_option",bf:"checkout_step",kg:"coupon",Tc:"item_list_name",
cf:"list_name",Di:"promotions",Uc:"shipping",df:"tax",Fd:"engagement_time_msec",Gd:"enhanced_client_id",Hd:"enhanced_conversions",lg:"enhanced_conversions_automatic_settings",Id:"estimated_delivery_date",ef:"euid_logged_in_state",Vc:"event_callback",Ek:"event_category",vb:"event_developer_id_string",Fk:"event_label",mg:"event",Jd:"event_settings",Kd:"event_timeout",Gk:"description",Hk:"fatal",Ei:"experiments",ff:"firebase_id",Ld:"first_party_collection",Md:"_x_20",kb:"_x_19",ng:"fledge",og:"flight_error_code",
pg:"flight_error_message",Fi:"fl_activity_category",Gi:"fl_activity_group",qg:"fl_advertiser_id",Hi:"fl_ar_dedupe",rg:"match_id",Ii:"fl_random_number",Ji:"tran",Ki:"u",Nd:"gac_gclid",oc:"gac_wbraid",sg:"gac_wbraid_multiple_conversions",ug:"ga_restrict_domain",vg:"ga_temp_client_id",Od:"gdpr_applies",wg:"geo_granularity",wb:"value_callback",lb:"value_key",Ik:"google_ono",Kb:"google_signals",xg:"google_tld",Pd:"groups",yg:"gsa_experiment_id",zg:"iframe_state",Wc:"ignore_referrer",hf:"internal_traffic_results",
Lb:"is_legacy_converted",yb:"is_legacy_loaded",Qd:"is_passthrough",jf:"_lps",La:"language",kf:"legacy_developer_id_string",Ma:"linker",qc:"accept_incoming",zb:"decorate_forms",W:"domains",Mb:"url_position",Ag:"method",Jk:"name",Xc:"new_customer",Bg:"non_interaction",Li:"optimize_id",Mi:"page_hostname",Yc:"page_path",Na:"page_referrer",Ab:"page_title",Cg:"passengers",Dg:"phone_conversion_callback",Ni:"phone_conversion_country_code",Eg:"phone_conversion_css_class",Oi:"phone_conversion_ids",Fg:"phone_conversion_number",
Gg:"phone_conversion_options",Hg:"_protected_audience_enabled",Zc:"quantity",Rd:"redact_device_info",lf:"referral_exclusion_definition",Nb:"restricted_data_processing",Pi:"retoken",Kk:"sample_rate",nf:"screen_name",Bb:"screen_resolution",Qi:"search_term",Sa:"send_page_view",Ob:"send_to",Sd:"server_container_url",ad:"session_duration",Td:"session_engaged",pf:"session_engaged_time",Cb:"session_id",Ud:"session_number",bd:"delivery_postal_code",Lk:"temporary_client_id",qf:"topmost_url",Ri:"tracking_id",
rf:"traffic_type",ya:"transaction_id",Pb:"transport_url",Ig:"trip_type",Qb:"update",Db:"url_passthrough",Wd:"_user_agent_architecture",Xd:"_user_agent_bitness",Yd:"_user_agent_full_version_list",Zd:"_user_agent_mobile",ae:"_user_agent_model",be:"_user_agent_platform",ce:"_user_agent_platform_version",de:"_user_agent_wow64",Ba:"user_data",Jg:"user_data_auto_latency",Kg:"user_data_auto_meta",Lg:"user_data_auto_multi",Mg:"user_data_auto_selectors",Ng:"user_data_auto_status",ee:"user_data_mode",fe:"user_data_settings",
Ta:"user_id",Ya:"user_properties",Si:"_user_region",Og:"us_privacy_string",ia:"value",sc:"wbraid",Pg:"wbraid_multiple_conversions",Yi:"_host_name",Zi:"_in_page_command",aj:"_is_passthrough_cid",fd:"non_personalized_ads",ne:"_sst_parameters",jb:"conversion_label",Aa:"page_location",xb:"global_developer_id_string",Vd:"tc_privacy_string"}},ai={},bi=Object.freeze((ai[N.g.ja]=1,ai[N.g.Ye]=1,ai[N.g.yd]=1,ai[N.g.ib]=1,ai[N.g.Z]=1,ai[N.g.Wa]=1,ai[N.g.Ka]=1,ai[N.g.Xa]=1,ai[N.g.kc]=1,ai[N.g.Qc]=1,ai[N.g.Ra]=
1,ai[N.g.mc]=1,ai[N.g.Rc]=1,ai[N.g.ba]=1,ai[N.g.ig]=1,ai[N.g.Vc]=1,ai[N.g.Jd]=1,ai[N.g.Kd]=1,ai[N.g.Ld]=1,ai[N.g.ug]=1,ai[N.g.Kb]=1,ai[N.g.xg]=1,ai[N.g.Pd]=1,ai[N.g.hf]=1,ai[N.g.Lb]=1,ai[N.g.yb]=1,ai[N.g.Ma]=1,ai[N.g.lf]=1,ai[N.g.Nb]=1,ai[N.g.Sa]=1,ai[N.g.Ob]=1,ai[N.g.Sd]=1,ai[N.g.ad]=1,ai[N.g.pf]=1,ai[N.g.bd]=1,ai[N.g.Pb]=1,ai[N.g.Qb]=1,ai[N.g.fe]=1,ai[N.g.Ya]=1,ai[N.g.ne]=1,ai));Object.freeze([N.g.Aa,N.g.Na,N.g.Ab,N.g.La,N.g.nf,N.g.Ta,N.g.ff,N.g.xi]);
var ci={},di=Object.freeze((ci[N.g.ki]=1,ci[N.g.li]=1,ci[N.g.mi]=1,ci[N.g.ni]=1,ci[N.g.oi]=1,ci[N.g.ri]=1,ci[N.g.si]=1,ci[N.g.ui]=1,ci[N.g.vi]=1,ci[N.g.xd]=1,ci)),ei={},fi=Object.freeze((ei[N.g.dg]=1,ei[N.g.eg]=1,ei[N.g.ac]=1,ei[N.g.bc]=1,ei[N.g.fg]=1,ei[N.g.Hb]=1,ei[N.g.fc]=1,ei[N.g.fb]=1,ei[N.g.sb]=1,ei[N.g.hb]=1,ei[N.g.ra]=1,ei[N.g.hc]=1,ei[N.g.Fa]=1,ei[N.g.gg]=1,ei)),gi=Object.freeze([N.g.ja,N.g.ib,N.g.mc,N.g.Wc,N.g.Qb]),hi=Object.freeze([].concat(gi)),ii=Object.freeze([N.g.Ka,N.g.Kd,N.g.ad,N.g.pf,
N.g.Fd]),ji=Object.freeze([].concat(ii)),ki={},li=(ki[N.g.J]="1",ki[N.g.R]="2",ki[N.g.N]="3",ki[N.g.Ea]="4",ki),mi={},ni=Object.freeze((mi[N.g.ja]=1,mi[N.g.yd]=1,mi[N.g.Ga]=1,mi[N.g.Ib]=1,mi[N.g.Ze]=1,mi[N.g.zd]=1,mi[N.g.Ad]=1,mi[N.g.Bd]=1,mi[N.g.Z]=1,mi[N.g.Cd]=1,mi[N.g.Qa]=1,mi[N.g.Ha]=1,mi[N.g.Wa]=1,mi[N.g.Ka]=1,mi[N.g.Xa]=1,mi[N.g.Ra]=1,mi[N.g.xa]=1,mi[N.g.Dd]=1,mi[N.g.ba]=1,mi[N.g.Bi]=1,mi[N.g.Hd]=1,mi[N.g.Id]=1,mi[N.g.ff]=1,mi[N.g.Ld]=1,mi[N.g.Lb]=1,mi[N.g.yb]=1,mi[N.g.La]=1,mi[N.g.Xc]=1,mi[N.g.Aa]=
1,mi[N.g.Na]=1,mi[N.g.Dg]=1,mi[N.g.Eg]=1,mi[N.g.Fg]=1,mi[N.g.Gg]=1,mi[N.g.Nb]=1,mi[N.g.Sa]=1,mi[N.g.Ob]=1,mi[N.g.Sd]=1,mi[N.g.bd]=1,mi[N.g.ya]=1,mi[N.g.Pb]=1,mi[N.g.Qb]=1,mi[N.g.Db]=1,mi[N.g.Ba]=1,mi[N.g.Ta]=1,mi[N.g.ia]=1,mi)),oi={},pi=Object.freeze((oi[N.g.sk]="s",oi[N.g.uk]="y",oi[N.g.rk]="p",oi[N.g.tk]="h",oi[N.g.pk]="a",oi[N.g.qk]="m",oi));Object.freeze(N.g);var qi={},ri=z.google_tag_manager=z.google_tag_manager||{},si=Math.random();qi.Ug="41a0";qi.me=Number("0")||0;qi.fa="dataLayer";qi.mk="ChEIgO+YrQYQob7k1MaDxqG5ARIlAFLDcsGcmcgdphxF3tUZdsTGb/k3oZcwwEnGY4PIzT+rnh76/BoCxXk\x3d";var ti={__cl:1,__ecl:1,__ehl:1,__evl:1,__fal:1,__fil:1,__fsl:1,__hl:1,__jel:1,__lcl:1,__sdl:1,__tl:1,__ytl:1},ui={__paused:1,__tg:1},vi;for(vi in ti)ti.hasOwnProperty(vi)&&(ui[vi]=1);var wi=Oa(""),xi,yi=!1;yi=!0;
xi=yi;var zi,Ai=!1;zi=Ai;var Bi,Ci=!1;Bi=Ci;var Di,Ei=!1;Di=Ei;qi.wd="www.googletagmanager.com";
var Fi=""+qi.wd+(xi?"/gtag/js":"/gtm.js"),Gi=null,Hi=null,Ii={},Ji={},Ki={},Li=function(){var a=ri.sequence||1;ri.sequence=a+1;return a};qi.lk="true";var Mi="";qi.zf=Mi;var Ni=function(){return""};var Oi=new Ka,Pi={},Qi={},Ti={name:qi.fa,set:function(a,b){nb($a(a,b),Pi);Ri()},get:function(a){return Si(a,2)},reset:function(){Oi=new Ka;Pi={};Ri()}},Si=function(a,b){return 2!=b?Oi.get(a):Ui(a)},Ui=function(a,b){var c=a.split(".");b=b||[];for(var d=Pi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==b.indexOf(d))return}return d},Vi=function(a,b){Qi.hasOwnProperty(a)||(Oi.set(a,b),nb($a(a,b),Pi),Ri())},Wi=function(){for(var a=["gtm.allowlist","gtm.blocklist","gtm.whitelist",
"gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Si(c,1);if(Ha(d)||mb(d))d=nb(d);Qi[c]=d}},Ri=function(a){l(Qi,function(b,c){Oi.set(b,c);nb($a(b),Pi);nb($a(b,c),Pi);a&&delete Qi[b]})},Xi=function(a,b){var c,d=1!==(void 0===b?2:b)?Ui(a):Oi.get(a);"array"===jb(d)||"object"===jb(d)?c=nb(d):c=d;return c};
var Yi=function(a,b,c){if(!c)return!1;var d=c.selector_type,e=String(c.value),f;if("js_variable"===d){e=e.replace(/\["?'?/g,".").replace(/"?'?\]/g,"");for(var g=e.split(","),h=0;h<g.length;h++){var m=g[h].trim();if(m){if(0===m.indexOf("dataLayer."))f=Si(m.substring(10));else{var n=m.split(".");f=z[n.shift()];for(var p=0;p<n.length;p++)f=f&&f[n[p]]}if(void 0!==f)break}}}else if("css_selector"===d&&xh){var q=yh(e);if(q&&0<q.length){f=[];for(var r=0;r<q.length&&r<("email"===b||"phone_number"===b?5:1);r++)f.push(Rc(q[r])||
Qa(q[r].value));f=1===f.length?f[0]:f}}return f?(a[b]=f,!0):!1},Zi=function(a){if(a){var b={},c=!1;c=Yi(b,"email",a.email)||c;c=Yi(b,"phone_number",a.phone)||c;b.address=[];for(var d=a.name_and_address||[],e=0;e<d.length;e++){var f={};c=Yi(f,"first_name",d[e].first_name)||c;c=Yi(f,"last_name",d[e].last_name)||c;c=Yi(f,"street",d[e].street)||c;c=Yi(f,"city",d[e].city)||c;c=Yi(f,"region",d[e].region)||c;c=Yi(f,"country",d[e].country)||c;c=Yi(f,"postal_code",d[e].postal_code)||c;b.address.push(f)}return c?
b:void 0}},$i=function(a){return mb(a)?!!a.enable_code:!1};
var aj=function(a){var b=a&&a[N.g.lg];return b&&b[N.g.wi]},bj=function(){return-1!==Cc.userAgent.toLowerCase().indexOf("firefox")},cj=function(a){if(a&&a.length){for(var b=[],c=0;c<a.length;++c){var d=a[c];d&&d.estimated_delivery_date?b.push(""+d.estimated_delivery_date):
b.push("")}return b.join(",")}};var dj=[];function ej(a){switch(a){case 25:return 3;case 48:return 14;case 59:return 11;case 60:return 12;case 63:return 10;case 65:return 13;case 61:return 15;case 102:return 16;case 105:return 17}}function Q(a){dj[a]=!0;var b=ej(a);b&&(Rf[b]=!0)}
Q(5);Q(6);Q(7);Q(9);Q(10);
Q(14);Q(11);
Q(15);Q(18);
Q(19);Q(20);Q(21);
Q(23);Q(24);Q(31);Q(32);Q(33);Q(35);Q(36);
Q(40);Q(42);Q(45);Q(46);Q(47);
Q(49);Q(50);Q(51);
Q(53);Q(54);Q(55);Q(56);
Q(61);
Q(63);Q(64);
Q(67);Q(69);

Q(74);
Q(77);Q(82);
Q(86);Q(81);
Q(87);Q(91);
function R(a){return!!dj[a]}var ij=function(a){Ab("HEALTH",a)};var pj;try{pj=JSON.parse(yb("eyIwIjoiRVMiLCIxIjoiRVMtQ1QiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5lcyIsIjQiOiJyZWdpb24xIiwiNSI6ZmFsc2UsIjYiOnRydWUsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))}catch(a){L(123),ij(2),pj={}}
var qj=function(){return pj["0"]||""},rj=function(){return pj["1"]||""},sj=function(){var a=!1;return a},tj=function(){var a="";return a},uj=function(){var a=!1;a=!!pj["5"];return a},vj=function(){var a="";
return a};var wj=new function(a,b){this.h=a;this.defaultValue=void 0===b?!1:b}(1933);var xj=function(a){xj[" "](a);return a};xj[" "]=function(){};var zj=function(){var a=yj,b="th";if(a.th&&a.hasOwnProperty(b))return a.th;var c=new a;return a.th=c};var yj=function(){var a={};this.h=function(){var b=wj.h,c=wj.defaultValue;return null!=a[b]?a[b]:c};this.s=function(){a[wj.h]=!0}};var Aj=!1,Bj=!1,Cj={},Dj={},Ej=!1,Fj={ad_storage:!1,ad_user_data:!1,ad_personalization:!1};function Gj(){var a=Ec("google_tag_data",{});return a.ics=a.ics||new Hj}var Hj=function(){this.entries={};this.cps={};this.waitPeriodTimedOut=this.wasSetLate=this.accessedAny=this.accessedDefault=this.usedSetCps=this.usedImplicit=this.usedUpdate=this.usedDefault=this.usedDeclare=this.active=!1;this.h=[]};
Hj.prototype.default=function(a,b,c,d,e,f){this.usedDefault||this.usedDeclare||!this.accessedDefault&&!this.accessedAny||(this.wasSetLate=!0);this.usedDefault=this.active=!0;Ab("TAGGING",19);void 0==b?Ab("TAGGING",18):Ij(this,a,"granted"===b,c,d,e,f)};Hj.prototype.waitForUpdate=function(a,b){for(var c=0;c<a.length;c++)Ij(this,a[c],void 0,void 0,"","",b)};
var Ij=function(a,b,c,d,e,f,g){var h=a.entries,m=h[b]||{},n=m.region,p=d&&k(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(Jj(p,n,e,f)){var q=!!(g&&0<g&&void 0===m.update),r={region:p,declare_region:m.declare_region,implicit:m.implicit,default:void 0!==c?c:m.default,declare:m.declare,update:m.update,quiet:q};if(""!==e||!1!==m.default)h[b]=r;q&&z.setTimeout(function(){h[b]===r&&r.quiet&&(Ab("TAGGING",2),a.waitPeriodTimedOut=!0,a.clearTimeout(b,void 0),a.notifyListeners())},g)}};
aa=Hj.prototype;aa.clearTimeout=function(a,b){var c=[a],d;for(d in Cj)Cj.hasOwnProperty(d)&&Cj[d]===a&&c.push(d);var e=this.entries[a]||{},f=this.getConsentState(a);if(e.quiet){e.quiet=!1;for(var g=ea(c),h=g.next();!h.done;h=g.next())Kj(this,h.value)}else if(void 0!==b&&f!==b){var m=ea(c);for(h=m.next();!h.done;h=m.next())Kj(this,h.value)}};
aa.update=function(a,b){this.usedDefault||this.usedDeclare||this.usedUpdate||!this.accessedAny||(this.wasSetLate=!0);this.usedUpdate=this.active=!0;if(void 0!=b){var c=this.getConsentState(a),d=this.entries;(d[a]=d[a]||{}).update="granted"===b;this.clearTimeout(a,c)}};
aa.declare=function(a,b,c,d,e){this.usedDeclare=this.active=!0;var f=this.entries,g=f[a]||{},h=g.declare_region,m=c&&k(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(Jj(m,h,d,e)){var n={region:g.region,declare_region:m,declare:"granted"===b,implicit:g.implicit,default:g.default,update:g.update,quiet:g.quiet};if(""!==d||!1!==g.declare)f[a]=n}};aa.implicit=function(a,b){this.usedImplicit=!0;var c=this.entries,d=c[a]=c[a]||{};!1!==d.implicit&&(d.implicit="granted"===b)};
aa.getConsentState=function(a){var b=this.entries,c=b[a]||{},d=c.update;if(void 0!==d)return d?1:2;d=c.default;if(void 0!==d)return d?1:2;if(Cj.hasOwnProperty(a)){var e=b[Cj[a]]||{};d=e.update;if(void 0!==d)return d?1:2;d=e.default;if(void 0!==d)return d?1:2}d=c.declare;if(void 0!==d)return d?1:2;if(Sf(3)){d=c.implicit;if(void 0!==d)return d?3:4;if(Fj.hasOwnProperty(a))return Fj[a]?3:4}return 0};aa.setCps=function(a,b,c,d,e){Lj(this.cps,a,b,c,d,e)&&(this.usedSetCps=!0)};
aa.addListener=function(a,b){this.h.push({consentTypes:a,Gl:b})};var Kj=function(a,b){for(var c=0;c<a.h.length;++c){var d=a.h[c];Ha(d.consentTypes)&&-1!==d.consentTypes.indexOf(b)&&(d.Nj=!0)}};Hj.prototype.notifyListeners=function(a,b){for(var c=0;c<this.h.length;++c){var d=this.h[c];if(d.Nj){d.Nj=!1;try{d.Gl({consentEventId:a,consentPriorityId:b})}catch(e){}}}};function Jj(a,b,c,d){return""===c||a===d?!0:a===c?b!==d:!a&&!b}
function Lj(a,b,c,d,e,f){var g=a[b]||{},h=g.region,m=d&&k(d)?d.toUpperCase():void 0;e=e.toUpperCase();f=f.toUpperCase();if(Jj(m,h,e,f)){var n={enabled:"granted"===c,region:m};if(""!==e||!1!==g.enabled)return a[b]=n,!0}return!1}
var Mj=function(a){var b=Gj();b.accessedAny=!0;return(k(a)?[a]:a).every(function(c){switch(b.getConsentState(c)){case 1:case 3:return!0;case 2:case 4:return!1;default:return!0}})},Nj=function(a){var b=Gj();b.accessedAny=!0;return b.getConsentState(a)},Oj=function(a){var b=Gj();b.accessedAny=!0;return!(b.entries[a]||{}).quiet},Pj=function(){if(!zj().h())return!1;var a=Gj();a.accessedAny=!0;return a.active},Qj=function(a,b){Gj().addListener(a,b)},Rj=function(a,b){Gj().notifyListeners(a,b)},Sj=function(a,
b){function c(){for(var e=0;e<b.length;e++)if(!Oj(b[e]))return!0;return!1}if(c()){var d=!1;Qj(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Tj=function(a,b){function c(){for(var h=[],m=0;m<e.length;m++){var n=e[m];Mj(n)&&!f[n]&&h.push(n)}return h}function d(h){for(var m=0;m<h.length;m++)f[h[m]]=!0}var e=k(b)?[b]:b,f={},g=c();g.length!==e.length&&(d(g),Qj(e,function(h){function m(q){0!==q.length&&(d(q),h.consentTypes=q,a(h))}var n=c();if(0!==n.length){var p=Object.keys(f).length;n.length+p>=e.length?
m(n):z.setTimeout(function(){m(c())},500)}}))};function Uj(){}function Vj(){};var Wj=[N.g.J,N.g.R,N.g.N,N.g.Ea],Xj=function(a){for(var b=a[N.g.Va],c=Array.isArray(b)?b:[b],d={Ce:0};d.Ce<c.length;d={Ce:d.Ce},++d.Ce)l(a,function(e){return function(f,g){if(f!==N.g.Va){var h=c[e.Ce],m=qj(),n=rj();Bj=!0;Aj&&Ab("TAGGING",20);Gj().declare(f,g,h,m,n)}}}(d))},Yj=function(a){var b=a[N.g.Va];b&&L(40);var c=a[N.g.We];c&&L(41);for(var d=Ha(b)?b:[b],e={De:0};e.De<d.length;e={De:e.De},++e.De)l(a,function(f){return function(g,h){if(g!==N.g.Va&&g!==N.g.We){var m=d[f.De],n=Number(c),p=qj(),
q=rj();Aj=!0;Bj&&Ab("TAGGING",20);Gj().default(g,h,m,p,q,n)}}}(e))},Zj=function(a,b){l(a,function(c,d){Aj=!0;Bj&&Ab("TAGGING",20);Gj().update(c,d)});Rj(b.eventId,b.priorityId)},ak=function(a){for(var b=a[N.g.Va],c=Array.isArray(b)?b:[b],d={Ee:0};d.Ee<c.length;d={Ee:d.Ee},++d.Ee)l(a,function(e){return function(f,g){if(f!==N.g.Va){var h=c[e.Ee],m=qj(),n=rj();Gj().setCps(f,g,h,m,n)}}}(d))},bk=function(a){for(var b=a[N.g.Va],c=Array.isArray(b)?b:[b],d={kd:0};d.kd<c.length;d={kd:d.kd},++d.kd)a.hasOwnProperty(N.g.ag)&&
l(pi,function(e){return function(f){Lj(Dj,f,a[N.g.ag],c[e.kd],qj(),rj())&&(Ej=!0)}}(d)),l(a,function(e){return function(f,g){f!==N.g.Va&&f!==N.g.ag&&Lj(Dj,f,g,c[e.kd],qj(),rj())&&(Ej=!0)}}(d))},ck=function(a){Array.isArray(a)||(a=[a]);return a.every(function(b){return Mj(b)})},dk=function(a,b){Qj(a,b)},ek=function(a,b){Tj(a,b)},fk=function(a,b){Sj(a,b)},gk=function(){var a=[N.g.J,N.g.Ea,N.g.N];Gj().waitForUpdate(a,500)},hk=function(a){for(var b=ea(a),c=b.next();!c.done;c=b.next()){var d=c.value;Gj().clearTimeout(d,
void 0)}Rj()};var ik=function(a,b,c,d,e,f,g,h,m,n,p){this.eventId=a;this.priorityId=b;this.h=c;this.M=d;this.C=e;this.F=f;this.s=g;this.eventMetadata=h;this.onSuccess=m;this.onFailure=n;this.isGtmEvent=p},jk=function(a,b){var c=[];switch(b){case 3:c.push(a.h);c.push(a.M);c.push(a.C);c.push(a.F);c.push(a.s);break;case 2:c.push(a.h);break;case 1:c.push(a.M);c.push(a.C);c.push(a.F);c.push(a.s);break;case 4:c.push(a.h),c.push(a.M),c.push(a.C),c.push(a.F)}return c},S=function(a,b,c,d){for(var e=ea(jk(a,void 0===d?3:
d)),f=e.next();!f.done;f=e.next()){var g=f.value;if(void 0!==g[b])return g[b]}return c},kk=function(a){for(var b={},c=jk(a,4),d=ea(c),e=d.next();!e.done;e=d.next())for(var f=Object.keys(e.value),g=ea(f),h=g.next();!h.done;h=g.next())b[h.value]=1;return Object.keys(b)},lk=function(a,b,c){function d(n){mb(n)&&l(n,function(p,q){f=!0;e[p]=q})}var e={},f=!1,g=jk(a,void 0===c?3:c);g.reverse();for(var h=ea(g),m=h.next();!m.done;m=h.next())d(m.value[b]);return f?e:void 0},mk=function(a){for(var b=[N.g.Mc,
N.g.Ic,N.g.Jc,N.g.Kc,N.g.Lc,N.g.Nc,N.g.Oc],c=jk(a,3),d=ea(c),e=d.next();!e.done;e=d.next()){for(var f=e.value,g={},h=!1,m=ea(b),n=m.next();!n.done;n=m.next()){var p=n.value;void 0!==f[p]&&(g[p]=f[p],h=!0)}var q=h?g:void 0;if(q)return q}return{}},nk=function(a,b){this.uf=a;this.vf=b;this.C={};this.Sb={};this.h={};this.F={};this.ed={};this.Rb={};this.s={};this.Oa=function(){};this.X=function(){};this.M=!1},ok=function(a,b){a.C=b;return a},pk=function(a,b){a.Sb=b;return a},qk=function(a,b){a.h=b;return a},
rk=function(a,b){a.F=b;return a},sk=function(a,b){a.ed=b;return a},tk=function(a,b){a.Rb=b;return a},uk=function(a,b){a.s=b||{};return a},vk=function(a,b){a.Oa=b;return a},wk=function(a,b){a.X=b;return a},xk=function(a,b){a.M=b;return a},yk=function(a){return new ik(a.uf,a.vf,a.C,a.Sb,a.h,a.F,a.Rb,a.s,a.Oa,a.X,a.M)};function zk(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var Ak=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Bk=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ck=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function Dk(){return Pb?!!Wb&&!!Wb.platform:!1}function Ek(){return Zb("iPhone")&&!Zb("iPod")&&!Zb("iPad")}function Fk(){Ek()||Zb("iPad")||Zb("iPod")};ac();$b()||Zb("Trident")||Zb("MSIE");Zb("Edge");!Zb("Gecko")||-1!=Vb().toLowerCase().indexOf("webkit")&&!Zb("Edge")||Zb("Trident")||Zb("MSIE")||Zb("Edge");-1!=Vb().toLowerCase().indexOf("webkit")&&!Zb("Edge")&&Zb("Mobile");Dk()||Zb("Macintosh");Dk()||Zb("Windows");(Dk()?"Linux"===Wb.platform:Zb("Linux"))||Dk()||Zb("CrOS");Dk()||Zb("Android");Ek();Zb("iPad");Zb("iPod");Fk();Vb().toLowerCase().indexOf("kaios");var Gk=function(a,b,c,d){for(var e=b,f=c.length;0<=(e=a.indexOf(c,e))&&e<d;){var g=a.charCodeAt(e-1);if(38==g||63==g){var h=a.charCodeAt(e+f);if(!h||61==h||38==h||35==h)return e}e+=f+1}return-1},Hk=/#|$/,Ik=function(a,b){var c=a.search(Hk),d=Gk(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))},Jk=/[?&]($|#)/,Kk=function(a,b,c){for(var d,e=a.search(Hk),f=0,g,h=[];0<=(g=Gk(a,f,b,e));)h.push(a.substring(f,
g)),f=Math.min(a.indexOf("&",g)+1||e,e);h.push(a.slice(f));d=h.join("").replace(Jk,"$1");var m,n=null!=c?"="+encodeURIComponent(String(c)):"";var p=b+n;if(p){var q,r=d.indexOf("#");0>r&&(r=d.length);var t=d.indexOf("?"),u;0>t||t>r?(t=r,u=""):u=d.substring(t+1,r);q=[d.slice(0,t),u,d.slice(r)];var v=q[1];q[1]=p?v?v+"&"+p:p:v;m=q[0]+(q[1]?"?"+q[1]:"")+q[2]}else m=d;return m};var Lk=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{xj(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Mk=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)};function Nk(a){if(!a||!C.head)return null;var b=Ok("META");C.head.appendChild(b);b.httpEquiv="origin-trial";b.content=a;return b}
var Pk=function(a){if(z.top==z)return 0;if(void 0===a?0:a){var b=z.location.ancestorOrigins;if(b)return b[b.length-1]==z.location.origin?1:2}return Lk(z.top)?1:2},Ok=function(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function Qk(a,b,c,d){d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var e=Ok("IMG",a.document);if(c){var f=function(){if(c){var g=a.google_image_requests,h=Db(g,e);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,!1);e.removeEventListener&&e.removeEventListener("error",f,!1)};Ck(e,"load",f);Ck(e,"error",f)}d&&(e.attributionSrc="");e.src=b;a.google_image_requests.push(e)}
var Sk=function(a){var b;b=void 0===b?!1:b;var c="https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";Mk(a,function(d,e){if(d||0===d)c+="&"+e+"="+encodeURIComponent(""+d)});Rk(c,b)},Rk=function(a,b){var c=window,d;b=void 0===b?!1:b;d=void 0===d?!1:d;if(c.fetch){var e={keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"};d&&(e.mode="cors","setAttributionReporting"in XMLHttpRequest.prototype?e.attributionReporting={eventSourceEligible:"true",triggerEligible:"false"}:
e.headers={"Attribution-Reporting-Eligible":"event-source"});c.fetch(a,e)}else Qk(c,a,void 0===b?!1:b,void 0===d?!1:d)};var Tk=function(){};var Uk=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vk=function(a,b){b=void 0===b?{}:b;this.s=a;this.h=null;this.M={};this.Oa=0;var c;this.X=null!=(c=b.mn)?c:500;var d;this.F=null!=(d=b.Un)?d:!1;this.C=null};sa(Vk,Tk);
var Xk=function(a){return"function"===typeof a.s.__tcfapi||null!=Wk(a)};
Vk.prototype.addEventListener=function(a){var b=this,c={internalBlockOnErrors:this.F},d=Bk(function(){return a(c)}),e=0;-1!==this.X&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},this.X));var f=function(g,h){clearTimeout(e);g?(c=g,c.internalErrorState=Uk(c),c.internalBlockOnErrors=b.F,h&&0===c.internalErrorState||(c.tcString="tcunavailable",h||(c.internalErrorState=3))):(c.tcString="tcunavailable",c.internalErrorState=3);a(c)};try{Yk(this,"addEventListener",f)}catch(g){c.tcString=
"tcunavailable",c.internalErrorState=3,e&&(clearTimeout(e),e=0),d()}};Vk.prototype.removeEventListener=function(a){a&&a.listenerId&&Yk(this,"removeEventListener",null,a.listenerId)};
var $k=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var m;if(0===h)if(a.purpose&&a.vendor){var n=Zk(a.vendor.consents,void 0===d?"755":d);m=n&&"1"===b&&a.purposeOneTreatment&&"CH"===a.publisherCC?!0:n&&Zk(a.purpose.consents,b)}else m=!0;else m=1===h?a.purpose&&a.vendor?Zk(a.purpose.legitimateInterests,
b)&&Zk(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return m},Zk=function(a,b){return!(!a||!a[b])},Yk=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Wk(a)){al(a);var f=++a.Oa;a.M[f]=c;if(a.h){var g={};a.h.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Wk=function(a){if(a.h)return a.h;var b;a:{for(var c=a.s,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames.__tcfapiLocator)}catch(h){e=
!1}if(e){b=c;break a}var f;b:{try{var g=c.parent;if(g&&g!=c){f=g;break b}}catch(h){}f=null}if(!(c=f))break}b=null}a.h=b;return a.h},al=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.M[c.callId](c.returnValue,c.success)}catch(d){}},Ck(a.s,"message",a.C))},bl=function(a){if(!1===a.gdprApplies)return!0;void 0===a.internalErrorState&&(a.internalErrorState=Uk(a));return"error"===a.cmpStatus||0!==a.internalErrorState?a.internalBlockOnErrors?
(Sk({e:String(a.internalErrorState)}),!1):!0:"loaded"!==a.cmpStatus||"tcloaded"!==a.eventStatus&&"useractioncomplete"!==a.eventStatus?!1:!0};var cl={1:0,3:0,4:0,7:3,9:3,10:3};function dl(){var a=ri.tcf||{};return ri.tcf=a}
var el=function(){return new Vk(z,{mn:-1})},kl=function(){var a=dl(),b=el();Xk(b)&&!fl()&&!gl()&&L(124);if(!a.active&&Xk(b)){fl()&&(a.active=!0,a.Xb={},a.cmpId=0,a.tcfPolicyVersion=0,Gj().active=!0,a.tcString="tcunavailable");gk();try{b.addEventListener(function(c){if(0!==c.internalErrorState)hl(a),hk([N.g.J,N.g.Ea,N.g.N]),Gj().active=!0;else if(a.gdprApplies=c.gdprApplies,a.cmpId=c.cmpId,a.enableAdvertiserConsentMode=c.enableAdvertiserConsentMode,gl()&&(a.active=!0),!il(c)||fl()||gl()){a.tcfPolicyVersion=
c.tcfPolicyVersion;var d;if(!1===c.gdprApplies){var e={},f;for(f in cl)cl.hasOwnProperty(f)&&(e[f]=!0);d=e;b.removeEventListener(c)}else if(il(c)){var g={},h;for(h in cl)if(cl.hasOwnProperty(h))if("1"===h){var m,n=c,p={Ll:!0};p=void 0===p?{}:p;m=bl(n)?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p.Ll||"string"!==typeof n.tcString||!n.tcString.length?!0:$k(n,"1",0):!1;g["1"]=m}else g[h]=$k(c,h,cl[h]);d=g}if(d){a.tcString=c.tcString||"tcempty";a.Xb=d;var q={},r=(q[N.g.J]=
a.Xb["1"]?"granted":"denied",q);!0!==a.gdprApplies?(hk([N.g.J,N.g.Ea,N.g.N]),Gj().active=!0):(r[N.g.Ea]=a.Xb["3"]&&a.Xb["4"]?"granted":"denied","number"===typeof a.tcfPolicyVersion&&4<=a.tcfPolicyVersion?r[N.g.N]=a.Xb["1"]&&a.Xb["7"]?"granted":"denied":hk([N.g.N]),Zj(r,{eventId:0},{gdprApplies:a?a.gdprApplies:void 0,tcString:jl()||""}))}}else hk([N.g.J,N.g.Ea,N.g.N])})}catch(c){hl(a),hk([N.g.J,N.g.Ea,N.g.N]),Gj().active=!0}}};function hl(a){a.type="e";a.tcString="tcunavailable"}
function il(a){return"tcloaded"===a.eventStatus||"useractioncomplete"===a.eventStatus||"cmpuishown"===a.eventStatus}var fl=function(){return!0===z.gtag_enable_tcf_support};function gl(){return!0===dl().enableAdvertiserConsentMode}var jl=function(){var a=dl();if(a.active)return a.tcString},ll=function(){var a=dl();if(a.active&&void 0!==a.gdprApplies)return a.gdprApplies?"1":"0"},ml=function(a){if(!cl.hasOwnProperty(String(a)))return!0;var b=dl();return b.active&&b.Xb?!!b.Xb[String(a)]:!0};var nl=[N.g.J,N.g.R],ol=[N.g.J,N.g.R,N.g.N,N.g.Ea],pl={},ql=(pl[N.g.J]=1,pl[N.g.R]=2,pl);function rl(a){if(void 0===a)return 0;switch(S(a,N.g.ja)){case void 0:return 1;case !1:return 3;default:return 2}}
var sl=function(a){var b=rl(a);if(3===b)return!1;switch(Nj(N.g.Ea)){case 1:case 3:return!0;case 2:return!1;case 4:return 2===b;case 0:return!0;default:return!1}},tl=function(){return Pj()||!Mj(N.g.J)||!Mj(N.g.R)},ul=function(){var a={},b;for(b in ql)ql.hasOwnProperty(b)&&(a[ql[b]]=Nj(b));var c=R(28)&&nl.every(function(e){return Mj(e)}),d=R(26);return c||d?Ne(a,1):Ne(a,0)},vl={},wl=(vl[N.g.J]=0,vl[N.g.R]=1,vl[N.g.N]=2,vl[N.g.Ea]=3,vl);
function xl(a){switch(a){case void 0:return 1;case !0:return 3;case !1:return 2;default:return 0}}
var yl=function(a){for(var b="1",c=0;c<ol.length;c++){var d=b,e,f=ol[c],g=Cj[f];e=void 0===g?0:wl.hasOwnProperty(g)?12|wl[g]:8;var h=Gj();h.accessedAny=!0;var m=h.entries[f]||{};e=e<<2|xl(m.implicit);b=d+(""+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e]+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[xl(m.declare)<<4|xl(m.default)<<2|xl(m.update)])}var n=b,p;p=""+(Pj()<<2|rl(a));return n+p},zl=function(){if(!Mj(N.g.N))return"-";var a=Gj(),b=Ej,c=a.cps,d=
a.usedSetCps,e={};if(b&&d)for(var f in Dj)Dj.hasOwnProperty(f)&&Dj[f].enabled&&c.hasOwnProperty(f)&&c[f].enabled?e[f]={enabled:!0,region:Dj[f].region}:e[f]={enabled:!1,region:Dj[f].region};else{var g=b?Dj:c,h;for(h in g)g.hasOwnProperty(h)&&(e[h]={enabled:g[h].enabled,region:g[h].region})}for(var m={},n=ea(Object.keys(e)),p=n.next();!p.done;p=n.next()){var q=p.value;m[q]=e[q].enabled}for(var r="",t=ea(Object.keys(pi)),u=t.next();!u.done;u=t.next()){var v=u.value;!1!==m[v]&&(r+=pi[v])}return""===r?
"-":r},Al=function(){return pj["6"]||(fl()||gl())&&"1"===ll()?"1":"0"},Bl=function(){return(pj["6"]?!0:!(!fl()&&!gl())&&"1"===ll())||Gj().usedSetCps||!Mj(N.g.N)},Cl=function(){var a="0",b="0",c;var d=dl();c=d.active?d.cmpId:void 0;"number"===typeof c&&0<=c&&4095>=c&&(a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c>>6&63],b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c&63]);var e="0",f;var g=dl();f=g.active?g.tcfPolicyVersion:void 0;"number"===typeof f&&
0<=f&&63>=f&&(e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);var h=0;pj["6"]&&(h|=1);"1"===ll()&&(h|=2);fl()&&(h|=4);var m;var n=dl();m=void 0!==n.enableAdvertiserConsentMode?n.enableAdvertiserConsentMode?"1":"0":void 0;"1"===m&&(h|=8);Gj().waitPeriodTimedOut&&(h|=16);return"1"+a+b+e+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]};var Dl=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!==c?b^c>>21:b;return b};var El=function(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var m=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");m&&c&&(m=decodeURIComponent(m));d.push(m)}}return d};var Hl=function(a,b,c,d){return Fl(d)?El(a,String(b||Gl()),c):[]},Kl=function(a,b,c,d,e){if(Fl(e)){var f=Il(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Jl(f,function(g){return g.Gf},b);if(1===f.length)return f[0].id;f=Jl(f,function(g){return g.Ne},c);return f[0]?f[0].id:void 0}}};function Ll(a,b,c,d){var e=Gl(),f=window;"null"!==f.origin&&(f.document.cookie=a);var g=Gl();return e!=g||void 0!=c&&0<=Hl(b,g,!1,d).indexOf(c)}
var Pl=function(a,b,c,d){function e(w,x,y){if(null==y)return delete h[x],w;h[x]=y;return w+"; "+x+"="+y}function f(w,x){if(null==x)return delete h[x],w;h[x]=!0;return w+"; "+x}if(!Fl(c.Gb))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ml(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var m;c.expires instanceof Date?m=c.expires.toUTCString():null!=c.expires&&(m=""+c.expires);g=e(g,"expires",m);g=e(g,"max-age",c.Em);g=e(g,"samesite",
c.Ym);c.bn&&(g=f(g,"secure"));var n=c.domain;if(n&&"auto"===n.toLowerCase()){for(var p=Nl(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!Ol(u,c.path)&&Ll(v,a,b,c.Gb))return 0}if(q&&!r)throw q;return 1}n&&"none"!==n.toLowerCase()&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Ol(n,c.path)?1:Ll(g,a,b,c.Gb)?0:1},Ql=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Pl(a,
b,c)};function Jl(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],m=b(h);m===c?d.push(h):void 0===f||m<f?(e=[h],f=m):m===f&&e.push(h)}return 0<d.length?d:e}function Il(a,b,c){for(var d=[],e=Hl(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var m=g.shift();m&&(m=m.split("-"),d.push({id:g.join("."),Gf:1*m[0]||1,Ne:1*m[1]||1}))}}return d}
var Ml=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Rl=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Sl=/(^|\.)doubleclick\.net$/i,Ol=function(a,b){return Sl.test(window.document.location.hostname)||"/"===b&&Rl.test(a)},Gl=function(){return"null"!==window.origin?window.document.cookie:""},Nl=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Sl.test(e)||Rl.test(e)||a.push("none");return a},Fl=function(a){return a&&zj().h()?(k(a)?[a]:a).every(function(b){return Oj(b)&&Mj(b)}):!0},Tl=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Ul=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Vl=function(a){var b=Math.round(2147483647*Math.random());return a?String(b^Dl(a)&2147483647):String(b)},Wl=function(a){return[Vl(a),Math.round(Sa()/1E3)].join(".")},Xl=function(a,b,c,d,e){var f=Tl(b);return Kl(a,f,Ul(c),d,e)},Yl=function(a,b,c,d){var e=""+Tl(c),f=Ul(d);1<f&&(e+="-"+f);return[b,e,a].join(".")};var Zl=function(){ri.dedupe_gclid||(ri.dedupe_gclid=""+Wl());return ri.dedupe_gclid};var $l=function(){var a=!1;return a};var bm=function(a,b){var c=am();c.pending||(c.pending=[]);Ia(c.pending,function(d){return d.target.ctid===a.ctid&&d.target.isDestination===a.isDestination})||c.pending.push({target:a,onLoad:b})},cm=function(){this.container={};this.destination={};this.canonical={};this.pending=[];this.siloed=[]},am=function(){var a=Ec("google_tag_data",{}),b=a.tidr;b||(b=new cm,a.tidr=b);return b};var dm={},em=!1,Tf={ctid:"AW-938818781",Ef:"102665514",Lj:"AW-938818781",Mj:"AW-938818781"};dm.ie=Oa("");
var hm=function(){var a=fm();return em?a.map(gm):a},jm=function(){var a=im();return em?a.map(gm):a},lm=function(){return km(Tf.ctid)},mm=function(){return km(Tf.Ef||"_"+Tf.ctid)},fm=function(){return Tf.Lj?Tf.Lj.split("|"):[Tf.ctid]},im=function(){return Tf.Mj?Tf.Mj.split("|"):[]},nm=function(a){var b=am();return a.isDestination?b.destination[a.ctid]:b.container[a.ctid]},km=function(a){return em?gm(a):a},gm=function(a){return"siloed_"+a},om=function(a){a=String(a);return em&&0===a.indexOf("siloed_")?
a.substring(7):a},pm=function(){var a=!1;if(a){var b=am();if(b.siloed){for(var c=[],d=fm(),e=im(),f={},g=0;g<b.siloed.length;f={Ff:void 0},g++)f.Ff=b.siloed[g],!em&&Ia(f.Ff.isDestination?e:d,function(h){return function(m){return m===h.Ff.ctid}}(f))?em=!0:c.push(f.Ff);b.siloed=c}}};
function qm(){var a=am();if(a.pending){for(var b,c=[],d=!1,e=hm(),f=jm(),g={},h=0;h<a.pending.length;g={Oe:void 0},h++)g.Oe=a.pending[h],Ia(g.Oe.target.isDestination?f:e,function(m){return function(n){return n===m.Oe.target.ctid}}(g))?d||(b=g.Oe.onLoad,d=!0):c.push(g.Oe);a.pending=c;if(b)try{b(mm())}catch(m){}}}
var rm=function(){for(var a=am(),b=hm(),c=0;c<b.length;c++){var d=a.container[b[c]];d?(d.state=2,d.containers=hm(),d.destinations=jm()):a.container[b[c]]={state:2,containers:hm(),destinations:jm()}}for(var e=jm(),f=0;f<e.length;f++){var g=a.destination[e[f]];g&&0===g.state&&L(93);g?(g.state=2,g.containers=hm(),g.destinations=jm()):a.destination[e[f]]={state:2,containers:hm(),destinations:jm()}}a.canonical[mm()]={};qm()},sm=function(a){return!!am().container[a]},tm=function(a){var b=am().destination[a];
return!!b&&!!b.state},um=function(){return{ctid:lm(),isDestination:dm.ie}};function vm(a){var b=am();(b.siloed=b.siloed||[]).push(a)}var wm=function(){var a=am().container,b;for(b in a)if(a.hasOwnProperty(b)&&1===a[b].state)return!0;return!1},xm=function(){var a={};l(am().destination,function(b,c){0===c.state&&(a[b]=c)});return a},ym=function(a){return!!(a&&a.parent&&a.context&&1===a.context.source&&0!==a.parent.ctid.indexOf("GTM-"))};var zm={UA:1,AW:2,DC:3,G:4,GF:5,GT:12,GTM:14,HA:6,MC:7},Am=function(a,b){var c=Tf.ctid.split("-")[0].toUpperCase(),d={};d.ctid=Tf.ctid;d.Vm=qi.me;d.Xm=qi.Ug;d.Am=dm.ie?2:1;d.uc=Tf.Ef;d.uc!==a&&(d.Tf=a);R(75)?d.Xj=2:R(76)&&(d.Xj=1);xi?(d.Rf=zm[c],d.Rf||(d.Rf=0)):d.Rf=Di?13:10;Bi?d.Ch=1:$l()?d.Ch=2:d.Ch=3;var e;var f=d.Rf,g=d.Ch;void 0===f?e="":(g||(g=0),e=""+Hg(1,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f<<2|g]);var h=d.Tn,m=4+e+(h?""+Hg(2,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h]:
""),n,p=d.Xm;n=p&&Gg.test(p)?""+Hg(3,2)+p:"";var q,r=d.Vm;q=r?""+Hg(4,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r]:"";var t;var u=d.ctid;if(u&&b){var v=u.split("-"),w=v[0].toUpperCase();if("GTM"!==w&&"OPT"!==w)t="";else{var x=v[1];t=""+Hg(5,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1+x.length]+(d.Am||0)+x}}else t="";var y=d.Xj,A=d.uc,B=d.Tf,E=d.Yn;return m+n+q+t+(y?""+Hg(6,1)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[y]:
"")+(A?""+Hg(7,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[A.length]+A:"")+(B?""+Hg(8,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[B.length]+B:"")+(E?""+Hg(9,3)+"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[E.length]+E:"")};var Bm=/:[0-9]+$/,Cm=/^\d+\.fls\.doubleclick\.net$/,Dm=function(a,b,c,d){function e(r){return Sf(10)?decodeURIComponent(r.replace(/\+/g," ")):decodeURIComponent(r).replace(/\+/g," ")}for(var f=[],g=ea(a.split("&")),h=g.next();!h.done;h=g.next()){var m=ea(h.value.split("=")),n=m.next().value,p=ha(m);if(e(n)===b){var q=p.join("=");if(!c)return d?q:e(q);f.push(d?q:e(q))}}return c?f:void 0},Gm=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Em(a.protocol)||
Em(z.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:z.location.port)||("http"===a.protocol?80:"https"===a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||z.location.hostname).replace(Bm,"").toLowerCase());return Fm(a,b,c,d,e)},Fm=function(a,b,c,d,e){var f,g=Em(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Hm(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Bm,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&
(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"===g?80:"https"===g?443:""));break;case "path":a.pathname||a.hostname||Ab("TAGGING",1);f="/"===a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=(d||[]).indexOf(m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Dm(f,e,!1));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#",
"");break;default:f=a&&a.href}return f},Em=function(a){return a?a.replace(":","").toLowerCase():""},Hm=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Im={},Jm=0,Lm=function(a){if(Sf(17)){var b=Im[a];b||(b=Km(a),5>Jm&&(Im[a]=b,Jm++));return b}return Km(a)},Km=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Ab("TAGGING",1),c="/"+c);var d=b.hostname.replace(Bm,"");return{href:b.href,protocol:b.protocol,host:b.host,
hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Mm=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!==p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Lm(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var m=""+f+g+h;"/"===m[m.length-
1]&&(m=m.substring(0,m.length-1));return m},Nm=function(a){var b=Lm(z.location.href),c=Gm(b,"host",!1);if(c&&c.match(Cm)){var d=Gm(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}};function Om(a,b,c,d){var e,f=Number(null!=a.Wb?a.Wb:void 0);0!==f&&(e=new Date((b||Sa())+1E3*(f||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:e,Gb:d}};var Pm;var Tm=function(){var a=Qm,b=Rm,c=Sm(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Oc(C,"mousedown",d);Oc(C,"keyup",d);Oc(C,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Um=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Sm().decorators.push(f)},Vm=function(a,b,c){for(var d=Sm().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var m=g.domains,n=a,p=!!g.sameHost;if(m&&(p||n!==C.location.hostname))for(var q=0;q<m.length;q++)if(m[q]instanceof RegExp){if(m[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(m[q])||p&&0<=m[q].indexOf(n)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&Wa(e,g.callback())}}return e};function Sm(){var a=Ec("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Wm=/(.*?)\*(.*?)\*(.*)/,Xm=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ym=/^(?:www\.|m\.|amp\.)+/,Zm=/([^?#]+)(\?[^#]*)?(#.*)?/;function $m(a){var b=Zm.exec(a);if(b)return{Ih:b[1],query:b[2],fragment:b[3]}}
function an(a,b){var c=[Cc.userAgent,(new Date).getTimezoneOffset(),Cc.userLanguage||Cc.language,Math.floor(Sa()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pm)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Pm=d;for(var m=4294967295,n=0;n<c.length;n++)m=m>>>8^Pm[(m^c.charCodeAt(n))&255];return((m^-1)>>>0).toString(36)}
function bn(){return function(a){var b=Lm(z.location.href),c=b.search.replace("?",""),d=Dm(c,"_gl",!1,!0)||"";a.query=cn(d)||{};var e=Gm(b,"fragment"),f;var g=-1;if(Ya(e,"_gl="))g=4;else{var h=e.indexOf("&_gl=");0<h&&(g=h+3+2)}if(0>g)f=void 0;else{var m=e.indexOf("&",g);f=0>m?e.substring(g):e.substring(g,m)}a.fragment=cn(f||"")||{}}}
var dn=function(a){var b=bn(),c=Sm();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Wa(d,e.query),a&&Wa(d,e.fragment));return d},cn=function(a){try{var b=on(a,3);if(void 0!==b){for(var c={},d=b?b.split("*"):[],e=0;e+1<d.length;e+=2){var f=d[e],g=yb(d[e+1]);c[f]=g}Ab("TAGGING",6);return c}}catch(h){Ab("TAGGING",8)}};
function on(a,b){if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Wm.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],m;a:{for(var n=g[2],p=0;p<b;++p)if(n===an(h,p)){m=!0;break a}m=!1}if(m)return h;Ab("TAGGING",7)}}}
function pn(a,b,c,d,e){function f(p){var q=p,r=(new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+n}d=void 0===d?!1:d;e=void 0===e?!1:e;var g=$m(c);if(!g)return"";var h=g.query||"",m=g.fragment||"",n=a+"="+b;d?0!==m.substring(1).length&&e||(m="#"+f(m.substring(1))):h="?"+f(h.substring(1));return""+g.Ih+h+m}
function qn(a,b){function c(n,p,q){var r;a:{for(var t in n)if(n.hasOwnProperty(t)){r=!0;break a}r=!1}if(r){var u,v=[],w;for(w in n)if(n.hasOwnProperty(w)){var x=n[w];void 0!==x&&x===x&&null!==x&&"[object Object]"!==x.toString()&&(v.push(w),v.push(xb(String(x))))}var y=v.join("*");u=["1",an(y),y].join("*");d?(Sf(13)||Sf(11)||!p)&&rn("_gl",u,a,p,q):sn("_gl",u,a,p,q)}}var d="FORM"===(a.tagName||"").toUpperCase(),e=Vm(b,1,d),f=Vm(b,2,d),g=Vm(b,4,d),h=Vm(b,3,d);c(e,!1,!1);c(f,!0,!1);Sf(11)&&c(g,!0,!0);
for(var m in h)h.hasOwnProperty(m)&&tn(m,h[m],a)}function tn(a,b,c){"a"===c.tagName.toLowerCase()?sn(a,b,c):"form"===c.tagName.toLowerCase()&&rn(a,b,c)}function sn(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;var f;if(f=c.href){var g;if(!(g=!Sf(16)||d)){var h=z.location.href,m=$m(c.href),n=$m(h);g=!(m&&n&&m.Ih===n.Ih&&m.query===n.query&&m.fragment)}f=g}if(f){var p=pn(a,b,c.href,d,e);sc.test(p)&&(c.href=p)}}
function rn(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;if(c&&c.action){var f=(c.method||"").toLowerCase();if("get"!==f||d){if("get"===f||"post"===f){var g=pn(a,b,c.action,d,e);sc.test(g)&&(c.action=g)}}else{for(var h=c.childNodes||[],m=!1,n=0;n<h.length;n++){var p=h[n];if(p.name===a){p.setAttribute("value",b);m=!0;break}}if(!m){var q=C.createElement("input");q.setAttribute("type","hidden");q.setAttribute("name",a);q.setAttribute("value",b);c.appendChild(q)}}}}
function Qm(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||qn(e,e.hostname)}}catch(g){}}function Rm(a){try{if(a.action){var b=Gm(Lm(a.action),"host");qn(a,b)}}catch(c){}}
var un=function(a,b,c,d){Tm();Um(a,b,"fragment"===c?2:1,!!d,!1)},vn=function(a,b){Tm();Um(a,[Fm(z.location,"host",!0)],b,!0,!0)},wn=function(){var a=C.location.hostname,b=Xm.exec(C.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ym,""),m=e.replace(Ym,""),n;if(!(n=h===m)){var p="."+m;n=h.substring(h.length-p.length,
h.length)===p}return n},xn=function(a,b){return!1===a?!1:a||b||wn()};var yn=["1"],zn={},An={},Fn=function(a,b){b=void 0===b?!0:b;var c=Bn(a.prefix);if(!zn[c])if(Cn(c,a.path,a.domain)){var d=An[Bn(a.prefix)];Dn(a,d?d.id:void 0,d?d.Bh:void 0)}else{var e=Nm("auiddc");if(e)Ab("TAGGING",17),zn[c]=e;else if(b){var f=Bn(a.prefix),g=Wl();if(0===En(f,g,a)){var h=Ec("google_tag_data",{});h._gcl_au||(h._gcl_au=g)}Cn(c,a.path,a.domain)}}};
function Dn(a,b,c){var d=Bn(a.prefix),e=zn[d];if(e){var f=e.split(".");if(2===f.length){var g=Number(f[1])||0;if(g){var h=e;b&&(h=e+"."+b+"."+(c?c:Math.floor(Sa()/1E3)));En(d,h,a,1E3*g)}}}}function En(a,b,c,d){var e=Yl(b,"1",c.domain,c.path),f=Om(c,d);f.Gb=Gn();return Ql(a,e,f)}function Cn(a,b,c){var d=Xl(a,b,c,yn,Gn());if(!d)return!1;Hn(a,d);return!0}
function Hn(a,b){var c=b.split(".");5===c.length?(zn[a]=c.slice(0,2).join("."),An[a]={id:c.slice(2,4).join("."),Bh:Number(c[4])||0}):3===c.length?An[a]={id:c.slice(0,2).join("."),Bh:Number(c[2])||0}:zn[a]=b}function Bn(a){return(a||"_gcl")+"_au"}function In(a){function b(){Mj(c)&&a()}var c=Gn();Sj(function(){b();Mj(c)||Tj(b,c)},c)}
function Jn(a){var b=dn(!0),c=Bn(a.prefix);In(function(){var d=b[c];if(d){Hn(c,d);var e=1E3*Number(zn[c].split(".")[1]);if(e){Ab("TAGGING",16);var f=Om(a,e);f.Gb=Gn();var g=Yl(d,"1",a.domain,a.path);Ql(c,g,f)}}})}function Kn(a,b,c,d,e){e=e||{};var f=function(){var g={},h=Xl(a,e.path,e.domain,yn,Gn());h&&(g[a]=h);return g};In(function(){un(f,b,c,d)})}function Gn(){return Sf(14)?["ad_storage","ad_user_data"]:["ad_storage"]};var Ln=function(a){for(var b=[],c=C.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Wh:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Mn(a,b){var c=Ln(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Wh]||(d[c[e].Wh]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),aa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Wh].push(g)}}return d};var Nn=/^\w+$/,On=/^[\w-]+$/,Pn={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"};function Qn(){return Sf(14)?["ad_storage","ad_user_data"]:["ad_storage"]}
var Rn=function(a){return!zj().h()||Mj(a)},Sn=function(a){function b(){var d=Rn(c);d&&a();return d}var c=Qn();Sj(function(){b()||Tj(b,c)},c)},Un=function(a){return Tn(a).map(function(b){return b.aa})},Tn=function(a){var b=[],c=Hl(a,C.cookie,void 0,Qn());if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d={aa:void 0},e++){var f=Vn(c[e]);if(null!=f){var g=f,h=g.version;d.aa=g.aa;var m=g.timestamp,n=g.labels,p=Ia(b,function(q){return function(r){return r.aa===q.aa}}(d));p?(p.timestamp=Math.max(p.timestamp,
m),p.labels=Wn(p.labels,n||[])):b.push({version:h,aa:d.aa,timestamp:m,labels:n})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return Xn(b)};function Wn(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}function Yn(a){return a&&"string"==typeof a&&a.match(Nn)?a:"_gcl"}
var $n=function(){var a=Lm(z.location.href),b=Gm(a,"query",!1,void 0,"gclid"),c=Gm(a,"query",!1,void 0,"gclsrc"),d=Gm(a,"query",!1,void 0,"wbraid"),e=Gm(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Dm(f,"gclid",!1);c=c||Dm(f,"gclsrc",!1);d=d||Dm(f,"wbraid",!1)}return Zn(b,c,e,d)},Zn=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&On.test(d)&&(e.wbraid=d,f(d,"gb"));if(void 0!==a&&a.match(On))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},bo=function(a){var b=$n();Sn(function(){ao(b,!1,a)})};
function ao(a,b,c,d,e){function f(w,x){var y=co(w,g);y&&(Ql(y,x,h),m=!0)}c=c||{};e=e||[];var g=Yn(c.prefix);d=d||Sa();var h=Om(c,d,!0);h.Gb=Qn();var m=!1,n=Math.round(d/1E3),p=function(w){var x=["GCL",n,w];0<e.length&&x.push(e.join("."));return x.join(".")};a.aw&&f("aw",p(a.aw[0]));a.dc&&f("dc",p(a.dc[0]));a.gf&&f("gf",p(a.gf[0]));a.ha&&f("ha",p(a.ha[0]));a.gp&&f("gp",p(a.gp[0]));if(!m&&a.gb){var q=a.gb[0],r=co("gb",g),t=!1;if(!b)for(var u=Tn(r),v=0;v<u.length;v++)u[v].aa===q&&u[v].labels&&0<u[v].labels.length&&
(t=!0);t||f("gb",p(q))}}
var fo=function(a,b){var c=dn(!0);Sn(function(){for(var d=Yn(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Pn[f]){var g=co(f,d),h=c[g];if(h){var m=Math.min(eo(h),Sa()),n;b:{for(var p=m,q=Hl(g,C.cookie,void 0,Qn()),r=0;r<q.length;++r)if(eo(q[r])>p){n=!0;break b}n=!1}if(!n){var t=Om(b,m,!0);t.Gb=Qn();Ql(g,h,t)}}}}ao(Zn(c.gclid,c.gclsrc),!1,b)})},co=function(a,b){var c=Pn[a];if(void 0!==c)return b+c},eo=function(a){return 0!==go(a.split(".")).length?1E3*(Number(a.split(".")[1])||0):0};
function Vn(a){var b=go(a.split("."));return 0===b.length?null:{version:b[0],aa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function go(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!On.test(a[2])?[]:a}
var ho=function(a,b,c,d,e){if(Ha(b)&&"null"!==z.origin){var f=Yn(e),g=function(){for(var h={},m=0;m<a.length;++m){var n=co(a[m],f);if(n){var p=Hl(n,C.cookie,void 0,Qn());p.length&&(h[n]=p.sort()[p.length-1])}}return h};Sn(function(){un(g,b,c,d)})}},Xn=function(a){return a.filter(function(b){return On.test(b.aa)})},io=function(a,b){if("null"!==z.origin){for(var c=Yn(b.prefix),d={},e=0;e<a.length;e++)Pn[a[e]]&&(d[a[e]]=Pn[a[e]]);Sn(function(){l(d,function(f,g){var h=Hl(c+g,C.cookie,void 0,Qn());h.sort(function(t,
u){return eo(u)-eo(t)});if(h.length){var m=h[0],n=eo(m),p=0!==go(m.split(".")).length?m.split(".").slice(3):[],q={},r;r=0!==go(m.split(".")).length?m.split(".")[2]:void 0;q[f]=[r];ao(q,!0,b,n,p)}})})}};function jo(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ko=function(a){function b(e,f,g){g&&(e[f]=g)}if(Pj()){var c=$n();if(jo(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.wbraid);vn(function(){return d},3);vn(function(){var e={};return e._up="1",e},1)}}},lo=function(a){if(!Sf(11))return null;var b=dn(!0).gad_source;if(null!=b)return z.location.hash="",b;if(Sf(12)){var c=Lm(z.location.href);b=Gm(c,"query",!1,void 0,"gad_source");if(null!=b)return b;var d=$n();if(jo(d,a))return"0"}return null},mo=function(a){var b=
lo(a);null!=b&&vn(function(){var c={};return c.gad_source=b,c},4)},no=function(a,b,c,d){var e=[];c=c||{};if(!Rn(Qn()))return e;var f=Tn(a);if(!f.length)return e;for(var g=0;g<f.length;g++)-1===(f[g].labels||[]).indexOf(b)?e.push(0):e.push(1);if(d)return e;if(1!==e[0]){var h=f[0],m=f[0].timestamp,n=[h.version,Math.round(m/1E3),h.aa].concat(h.labels||[],[b]).join("."),p=Om(c,m,!0);p.Gb=Qn();Ql(a,n,p)}return e};
function oo(a,b){var c=Yn(b),d=co(a,c);if(!d)return 0;for(var e=Tn(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}function po(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b}var qo=function(a){var b=Math.max(oo("aw",a),po(Rn(Qn())?Mn():{}));return Math.max(oo("gb",a),po(Rn(Qn())?Mn("_gac_gb",!0):{}))>b};
var so=function(a,b){var c=a&&!ck(ro());return b&&c?"0":b},vo=function(a){fk(function(){function b(w){var x=ck(ro()),y=h&&x,A;ri.reported_gclid||(ri.reported_gclid={});A=ri.reported_gclid;var B=function(){var Y=g.prefix||"_gcl";return R(48)?(y?Y:"")+"."+(ck(N.g.J)?1:0)+"."+(ck(N.g.N)?1:0):h&&ck(N.g.J)?n+"."+Y+(w?"gcu":"gcs"):n+(w?"gcu":"gcs")}();if(!A[B]){A[B]=!0;var E=[],G={},D=function(Y,W){W&&(E.push(Y+"="+encodeURIComponent(W)),G[Y]=!0)},M="https://www.google.com";tl()&&(D("gcs",ul()),w&&D("gcu",
"1"));D("gcd",yl(f));Ni()&&D("tag_exp",Ni());if(Pj()){D("rnd",Zl());if((!n||p&&"aw.ds"!==p)&&x){var P=Un("_gcl_aw");D("gclaw",P.join("."))}D("url",String(z.location).split(/[?#]/)[0]);D("dclid",so(d,q));x||(M="https://pagead2.googlesyndication.com")}Bl()&&D("dma_cps",zl());D("dma",Al());sl(f)?R(29)&&D("npa","0"):D("npa","1");Xk(el())&&D("tcfd",Cl());D("gdpr_consent",jl()||"");D("gdpr",ll()||
"");"1"===dn(!1)._up&&D("gtm_up","1");D("gclid",so(d,n));D("gclsrc",p);if(!(G.gclid||G.dclid||G.gclaw)&&(D("gbraid",so(d,r)),!G.gbraid&&Pj()&&ck(N.g.J))){var O=Un("_gcl_gb");0<O.length&&D("gclgb",O.join("."))}D("gtm",Am(f.eventMetadata.source_canonical_id,!e));h&&ck(N.g.J)&&(Fn(g||{}),y&&D("auid",zn[Bn(g.prefix)]||""));uo||a.yj&&D("did",a.yj);a.ph&&D("gdid",a.ph);a.jh&&D("edid",a.jh);var T=M+"/pagead/landing?"+E.join("&");Uc(T)}}var c=!!a.eh,d=!!a.Qf,e=a.targetId,f=a.o,g=void 0===a.jd?{}:a.jd,h=void 0===
a.Lf?!0:a.Lf,m=$n(),n=m.gclid||"",p=m.gclsrc,q=m.dclid||"",r=m.wbraid||"",t=!c&&((!n||p&&"aw.ds"!==p?!1:!0)||r),u=Pj();if(t||u)if(u){var v=R(48)?[N.g.J,N.g.N,N.g.Ea]:[N.g.J];b();(function(){ck(v)||ek(function(w){return b(!0,w.consentEventId,w.consentPriorityId)},v)})()}else b()},[N.g.J,N.g.N,N.g.Ea])},ro=function(){return R(48)?[N.g.J,N.g.N]:[N.g.J]},to=function(a){var b=String(z.location).split(/[?#]/)[0],c=qi.mk||z._CONSENT_MODE_SALT;return a?c?String(Dl(b+a+c)):"0":""},uo=!1;var wo=/[A-Z]+/,xo=/\s/,yo=function(a,b){if(k(a)){a=Qa(a);var c=a.indexOf("-");if(!(0>c)){var d=a.substring(0,c);if(wo.test(d)){var e=a.substring(c+1),f;if(b){var g=function(n){var p=n.indexOf("/");return 0>p?[n]:[n.substring(0,p),n.substring(p+1)]};f=g(e);if("DC"===d&&2===f.length){var h=g(f[1]);2===h.length&&(f[1]=h[0],f.push(h[1]))}}else{f=e.split("/");for(var m=0;m<f.length;m++)if(!f[m]||xo.test(f[m])&&("AW"!==d||1!==m))return}return{id:a,prefix:d,da:d+"-"+f[0],P:f}}}}},Ao=function(a,b){for(var c=
{},d=0;d<a.length;++d){var e=yo(a[d],b);e&&(c[e.id]=e)}zo(c);var f=[];l(c,function(g,h){f.push(h)});return f};function zo(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.P[1]&&b.push(d.da)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Bo=function(a,b,c,d){var e=Lc(),f;if(1===e)a:{var g=Fi;g=g.toLowerCase();for(var h="https://"+g,m="http://"+g,n=1,p=C.getElementsByTagName("script"),q=0;q<p.length&&100>q;q++){var r=p[q].src;if(r){r=r.toLowerCase();if(0===r.indexOf(m)){f=3;break a}1===n&&0===r.indexOf(h)&&(n=2)}}f=n}else f=e;return(2===f||d||"http:"!=z.location.protocol?a:b)+c};
var Do=function(a,b,c){if(z[a.functionName])return b.Gh&&F(b.Gh),z[a.functionName];var d=Co();z[a.functionName]=d;if(a.Cf)for(var e=0;e<a.Cf.length;e++)z[a.Cf[e]]=z[a.Cf[e]]||Co();a.Kf&&void 0===z[a.Kf]&&(z[a.Kf]=c);Jc(Bo("https://","http://",a.Sh),b.Gh,b.Jm);return d},Co=function(){var a=function(){a.q=a.q||[];a.q.push(arguments)};return a},Eo={functionName:"_googWcmImpl",Kf:"_googWcmAk",Sh:"www.gstatic.com/wcm/loader.js"},Fo={functionName:"_gaPhoneImpl",Kf:"ga_wpid",Sh:"www.gstatic.com/gaphone/loader.js"},
Go={jk:"",bl:"5"},Ho={functionName:"_googCallTrackingImpl",Cf:[Fo.functionName,Eo.functionName],Sh:"www.gstatic.com/call-tracking/call-tracking_"+(Go.jk||Go.bl)+".js"},Io={},Jo=function(a,b,c,d){L(22);if(c){d=d||{};var e=Do(Eo,d,a),f={ak:a,cl:b};void 0===d.Fb&&(f.autoreplace=c);e(2,d.Fb,f,c,0,Ra(),d.options)}},Ko=function(a,b,c,d){L(21);if(b&&c){d=d||{};for(var e={countryNameCode:c,destinationNumber:b,retrievalTime:Ra()},f=0;f<a.length;f++){var g=a[f];Io[g.id]||
(g&&"AW"===g.prefix&&!e.adData&&2<=g.P.length?(e.adData={ak:g.P[0],cl:g.P[1]},R(104)&&(e.adData.dma=Al(),Bl()&&(e.adData.dmaCps=zl())),Io[g.id]=!0):g&&"UA"===g.prefix&&!e.gaData&&(e.gaData={gaWpid:g.da},Io[g.id]=!0))}(e.gaData||e.adData)&&Do(Ho,d)(d.Fb,e,d.options)}},Lo=function(){var a=!1;return a},Mo=function(a,b){if(a)if($l()){}else{if(k(a)){var c=yo(a);if(!c)return;a=c}var d=void 0,e=!1,f=S(b,N.g.Oi);if(f&&Ha(f)){d=[];for(var g=0;g<f.length;g++){var h=yo(f[g]);h&&(d.push(h),(a.id===h.id||a.id===a.da&&a.da===h.da)&&(e=!0))}}if(!d||e){var m=S(b,N.g.Fg),n;if(m){Ha(m)?n=m:n=[m];var p=S(b,N.g.Dg),q=S(b,N.g.Eg),r=S(b,N.g.Gg),t=S(b,N.g.Ni),u=p||q,v=1;"UA"!==a.prefix||d||(v=5);for(var w=0;w<n.length;w++)if(w<v)if(d)Ko(d,n[w],t,{Fb:u,options:r});else if("AW"===a.prefix&&a.P[1])Lo()?Ko([a],
n[w],t||"US",{Fb:u,options:r}):Jo(a.P[0],a.P[1],n[w],{Fb:u,options:r});else if("UA"===a.prefix)if(Lo())Ko([a],n[w],t||"US",{Fb:u});else{var x=a.da,y=n[w],A={Fb:u};L(23);if(y){A=A||{};var B=Do(Fo,A,x),E={};void 0!==A.Fb?E.receiver=A.Fb:E.replace=y;E.ga_wpid=x;E.destination=y;B(2,Ra(),E)}}}}}};var No,Oo=!1;function Po(){Oo=!0;No=No||{}}var Qo=function(a){Oo||Po();return No[a]};var Ro=function(a,b,c){this.target=a;this.eventName=b;this.o=c;this.h={};this.metadata=nb(c.eventMetadata||{});this.isAborted=!1};Ro.prototype.copyToHitData=function(a,b,c){var d=S(this.o,a);void 0===d&&(d=b);if(void 0!==d&&void 0!==c&&k(d)&&R(53))try{d=c(d)}catch(e){}void 0!==d&&(this.h[a]=d)};var So=function(a){return a.metadata.source_canonical_id},To=function(a,b,c){var d=Qo(a.target.da);return d&&d.hasOwnProperty(b)?d[b]:c};function Uo(a){return{getDestinationId:function(){return a.target.da},getEventName:function(){return a.eventName},setEventName:function(b){a.eventName=b},getHitData:function(b){return a.h[b]},setHitData:function(b,c){a.h[b]=c},setHitDataIfNotDefined:function(b,c){void 0===a.h[b]&&(a.h[b]=c)},copyToHitData:function(b,c){a.copyToHitData(b,c)},getMetadata:function(b){return a.metadata[b]},setMetadata:function(b,c){a.metadata[b]=c},isAborted:function(){return a.isAborted},abort:function(){a.isAborted=
!0},getFromEventContext:function(b){return S(a.o,b)},Dj:function(){return a},getHitKeys:function(){return Object.keys(a.h)}}};var Wo=function(a){var b=Vo[a.target.da];if(!a.isAborted&&b)for(var c=Uo(a),d=0;d<b.length;++d){try{b[d](c)}catch(e){a.isAborted=!0}if(a.isAborted)break}},Xo=function(a,b){var c=Vo[a];c||(c=Vo[a]=[]);c.push(b)},Vo={};var $o=function(a){a=a||{};var b;if(ck(Yo)){(b=Zo(a))||(b=Wl());var c=a,d=Bn(c.prefix);Dn(c,b);delete zn[d];delete An[d];Cn(d,c.path,c.domain);return Zo(a)}},Zo=function(a){if(ck(Yo)){a=a||{};Fn(a,!1);var b=An[Bn(Yn(a.prefix))];if(b&&!(18E5<Sa()-1E3*b.Bh)){var c=b.id,d=c.split(".");if(2===d.length&&!(864E5<Sa()-1E3*(Number(d[1])||0)))return c}}},Yo=N.g.J;function ap(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Lm(""+c+b).href}}function bp(){return!!qi.zf&&"SGTM_TOKEN"!==qi.zf.split("@@").join("")}function cp(a){for(var b=ea([N.g.Sd,N.g.Pb]),c=b.next();!c.done;c=b.next()){var d=S(a,c.value);if(d)return d}};var dp=function(a){var b=String(a[Oe.na]||"").replace(/_/g,"");0===b.indexOf("cvt")&&(b="cvt");return b},ep=0<=z.location.search.indexOf("?gtm_latency=")||0<=z.location.search.indexOf("&gtm_latency=");var fp={sampleRate:"0.005000",hk:"",gk:Number("5"),ao:Number("")},gp=[];function hp(a){gp.push(a)}var ip=!1,jp;if(!(jp=ep)){var kp=Math.random(),lp=fp.sampleRate;jp=kp<Number(lp)}
var mp=jp,np="https://www.googletagmanager.com/a?id="+Tf.ctid,op=void 0,pp={},qp=void 0,rp=new function(){var a=5;0<fp.gk&&(a=fp.gk);this.h=0;this.C=[];this.s=a},sp=1E3;function tp(a,b){var c=op;if(void 0===c)if(b)c=Li();else return"";for(var d=[np],e=0;e<gp.length;e++){var f=gp[e]({eventId:c,Zb:!!a,Vj:function(){ip=!0}});"&"===f[0]&&d.push(f)}d.push("&z=0");return d.join("")}
function up(){qp&&(z.clearTimeout(qp),qp=void 0);if(void 0!==op&&vp){var a;(a=pp[op])||(a=rp.h<rp.s?!1:1E3>Sa()-rp.C[rp.h%rp.s]);if(a||0>=sp--)L(1),pp[op]=!0;else{var b=rp.h++%rp.s;rp.C[b]=Sa();var c=tp(!0);Nc(c);if(ip){var d=c.replace("/a?","/td?");Nc(d)}vp=ip=!1}}}var vp=!1;function wp(a){pp[a]||(a!==op&&(up(),op=a),vp=!0,qp||(qp=z.setTimeout(up,500)),2022<=tp().length&&up())}var xp=Ja();function yp(){xp=Ja()}function zp(){return["&v=3&t=t","&pid="+xp].join("")};var Ap="",Bp=[];function Cp(a){var b="";Ap&&(b="&dl="+encodeURIComponent(Ap));0<Bp.length&&(b+="&tdp="+Bp.join("."));a.Zb&&(Ap="",Bp.length=0,b&&a.Vj());return b};var Dp=[];function Ep(a){if(!Dp.length)return"";var b="&tdc="+Dp.join("!");a.Zb&&(a.Vj(),Dp.length=0);return b};var Fp={initialized:11,complete:12,interactive:13},Gp={},Hp=Object.freeze((Gp[N.g.Sa]=!0,Gp)),Ip=0<=C.location.search.indexOf("?gtm_diagnostics=")||0<=C.location.search.indexOf("&gtm_diagnostics="),Kp=function(a,b,c){if(mp&&"config"===a&&!(1<yo(b).P.length)){var d,e=Ec("google_tag_data",{});e.td||(e.td={});d=e.td;var f=nb(c.F);nb(c.h,f);var g=[],h;for(h in d){var m=Jp(d[h],f);m.length&&(Ip&&console.log(m),g.push(h))}g.length&&(g.length&&mp&&Dp.push(b+"*"+g.join(".")),Ab("TAGGING",Fp[C.readyState]||
14));d[b]=f}};function Lp(a,b){var c={},d;for(d in b)b.hasOwnProperty(d)&&(c[d]=!0);for(var e in a)a.hasOwnProperty(e)&&(c[e]=!0);return c}function Jp(a,b,c,d){c=void 0===c?{}:c;d=void 0===d?"":d;if(a===b)return[];var e=function(q,r){var t=r[q];return void 0===t?Hp[q]:t},f;for(f in Lp(a,b)){var g=(d?d+".":"")+f,h=e(f,a),m=e(f,b),n="object"===jb(h)||"array"===jb(h),p="object"===jb(m)||"array"===jb(m);if(n&&p)Jp(h,m,c,g);else if(n||p||h!==m)c[g]=!0}return Object.keys(c)};var Mp={};function Np(a,b,c){mp&&void 0!==a&&(Mp[a]=Mp[a]||[],Mp[a].push(c+b),wp(a))}function Op(a){var b=a.eventId,c=a.Zb,d="",e=Mp[b]||[];e.length&&(d+="&epr="+e.join("."));c&&delete Mp[b];return d};var Qp=function(a,b){var c=yo(km(a),!0);c&&Pp.register(c,b)},Rp=function(a,b,c,d){var e=yo(c,d.isGtmEvent);e&&Pp.push("event",[b,a],e,d)},Sp=function(a,b,c,d){var e=yo(c,d.isGtmEvent);e&&Pp.push("get",[a,b],e,d)},Up=function(a){var b=yo(km(a),!0),c;b?c=Tp(Pp,b).h:c={};return c},Vp=function(a,b){var c=yo(km(a),!0);if(c){var d=Pp,e=nb(b);nb(Tp(d,c).h,e);Tp(d,c).h=e}},Wp=function(){this.status=1;this.M={};this.h={};this.s={};this.X=null;this.F={};this.C=!1},Xp=function(a,b,c,d){var e=Sa();this.type=
a;this.C=e;this.h=b;this.s=c;this.messageContext=d},Yp=function(){this.s={};this.C={};this.h=[]},Tp=function(a,b){var c=b.da;return a.s[c]=a.s[c]||new Wp},Zp=function(a,b,c,d){if(d.h){var e=Tp(a,d.h),f=e.X;if(f){var g=nb(c),h=nb(e.M[d.h.id]),m=nb(e.F),n=nb(e.h),p=nb(a.C),q={};if(mp)try{q=nb(Pi)}catch(v){L(72)}var r=d.h.prefix,t=function(v){Np(d.messageContext.eventId,r,v)},u=yk(xk(wk(vk(uk(sk(rk(tk(qk(pk(ok(new nk(d.messageContext.eventId,d.messageContext.priorityId),g),h),m),n),p),q),d.messageContext.eventMetadata),
function(){if(t){var v=t;t=void 0;v("2");if(d.messageContext.onSuccess)d.messageContext.onSuccess()}}),function(){if(t){var v=t;t=void 0;v("3");if(d.messageContext.onFailure)d.messageContext.onFailure()}}),!!d.messageContext.isGtmEvent));try{Np(d.messageContext.eventId,r,"1"),Kp(d.type,d.h.id,u),f(d.h.id,b,d.C,u)}catch(v){Np(d.messageContext.eventId,r,"4")}}}};Yp.prototype.register=function(a,b,c){var d=Tp(this,a);3!==d.status&&(d.X=b,d.status=3,c&&(nb(d.h,c),d.h=c),this.flush())};
Yp.prototype.push=function(a,b,c,d){void 0!==c&&(1===Tp(this,c).status&&(Tp(this,c).status=2,this.push("require",[{}],c,{})),Tp(this,c).C&&(d.deferrable=!1));this.h.push(new Xp(a,c,b,d));d.deferrable||this.flush()};
Yp.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.h.length;e={vc:void 0,lh:void 0}){var f=this.h[0],g=f.h;if(f.messageContext.deferrable)!g||Tp(this,g).C?(f.messageContext.deferrable=!1,this.h.push(f)):c.push(f),this.h.shift();else{switch(f.type){case "require":if(3!==Tp(this,g).status&&!a){this.h.push.apply(this.h,c);return}break;case "set":l(f.s[0],function(r,t){nb($a(r,t),b.C)});break;case "config":var h=Tp(this,g);e.vc={};l(f.s[0],function(r){return function(t,u){nb($a(t,u),r.vc)}}(e));
var m=!!e.vc[N.g.Qb];delete e.vc[N.g.Qb];var n=g.da===g.id;m||(n?h.F={}:h.M[g.id]={});h.C&&m||Zp(this,N.g.sa,e.vc,f);h.C=!0;n?nb(e.vc,h.F):(nb(e.vc,h.M[g.id]),L(70));d=!0;break;case "event":e.lh={};l(f.s[0],function(r){return function(t,u){nb($a(t,u),r.lh)}}(e));Zp(this,f.s[1],e.lh,f);break;case "get":var p={},q=(p[N.g.lb]=f.s[0],p[N.g.wb]=f.s[1],p);Zp(this,N.g.Pa,q,f)}this.h.shift();$p(this,f)}}this.h.push.apply(this.h,c);d&&this.flush()};
var $p=function(a,b){if("require"!==b.type)if(b.h)for(var c=Tp(a,b.h).s[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}},Pp=new Yp;
var aq=function(a,b,c){var d=ri.joined_auid=ri.joined_auid||{},e=(c?a||"_gcl":"")+"."+b;if(d[e])return!0;d[e]=!0;return!1},bq=function(){var a=Lm(z.location.href),b=Gm(a,"query",!1,void 0,"gad_source");if(void 0===b){var c=a.hash.replace("#","");b=Dm(c,"gad_source",!1)}return b},cq=function(){var a=Lm(z.location.href).search.replace("?","");return"1"===Dm(a,"gad",!1,!0)},dq=function(a){var b=[];l(a,function(c,d){d=Xn(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].aa);e.length&&b.push(c+":"+e.join(","))});
return b.join(";")},fq=function(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Nm("gcl"+a);if(d)return d.split(".")}var e=Yn(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!ck(eq())&&c,g;g=$n()[a]||[];if(0<g.length)return f?["0"]:g}var h=co(a,e);return h?Un(h):[]},gq=function(a){var b=eq();fk(function(){a();ck(b)||Tj(a,b)},b)},eq=function(){return R(48)?[N.g.J,N.g.N]:[N.g.J]},hq=/^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,iq=/^www.googleadservices.com$/,jq=function(a,b){return fq("aw",a,b)},kq=function(a,
b){return fq("dc",a,b)},lq=function(a){var b=Nm("gac");return b?!ck(eq())&&a?"0":decodeURIComponent(b):dq(Rn(Qn())?Mn():{})},mq=function(a){var b=Nm("gacgb");return b?!ck(eq())&&a?"0":decodeURIComponent(b):dq(Rn(Qn())?Mn("_gac_gb",!0):{})},nq=function(a,b,c){var d=$n(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw",m=cq(),n=bq();!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h&&"3p.ds"!==h||e.push({aa:f,ye:h});g&&e.push({aa:g,ye:"ds"});0===e.length&&d.wbraid&&e.push({aa:d.wbraid,ye:"gb"});0===e.length&&"aw.ds"===h&&
e.push({aa:"",ye:"aw.ds"});gq(function(){if(R(48)&&R(52)||ck(N.g.J)){var p=ck(eq());Fn(a);var q;if(p&&(q=zn[Bn(a.prefix)],void 0===q&&!R(48)))return;var r=[];q&&r.push("auid="+q);var t=C.referrer?Gm(Lm(C.referrer),"host"):"";0===e.length&&(hq.test(t)||iq.test(t))&&e.push({aa:"",ye:""});if(0!==e.length||m||void 0!==n){t&&r.push("ref="+encodeURIComponent(t));var u=1===Pk(!0)?z.top.location.href:z.location.href;u=u.replace(/[\?#].*$/,"");r.push("url="+encodeURIComponent(u));r.push("tft="+Sa());var v=
Xc();void 0!==v&&r.push("tfd="+Math.round(v));var w=Pk(!0);r.push("frm="+w);m&&r.push("gad=1");void 0!==n&&r.push("gad_source="+encodeURIComponent(n));var x=c;void 0===x&&(x=Pp.C[N.g.ja]);var y={},A=yk(ok(new nk(0),(y[N.g.ja]=x,y)));r.push("gtm="+Am(b));tl()&&r.push("gcs="+ul());r.push("gcd="+yl(A));Bl()&&r.push("dma_cps="+zl());r.push("dma="+Al());sl(A)?R(29)&&r.push("npa=0"):r.push("npa=1");Xk(el())&&r.push("tcfd="+Cl());var B=ll();B&&r.push("gdpr="+B);var E=jl();E&&r.push("gdpr_consent="+E);Ni()&&
r.push("tag_exp="+Ni());var G=p?'https://adservice.google.com/pagead/regclk':"https://adservice.googlesyndication.com/pagead/regclk";if(0<e.length)for(var D=0;D<e.length;D++){var M=e[D],P=M.aa,O=M.ye;if(!aq(a.prefix,O+"."+P,void 0!==q)){var T=G+"?"+r.join("&");""!==P?T="gb"===O?T+"&wbraid="+P:T+"&gclid="+P+"&gclsrc="+O:"aw.ds"===O&&(T+="&gclsrc=aw.ds");Uc(T)}}else if((m||void 0!==n)&&!aq(a.prefix,"gad",void 0!==q)){var Y=G+"?"+r.join("&");Uc(Y)}}}})},oq=function(a){return Nm("gclaw")||Nm("gac")||0<($n().aw||
[]).length?!1:0<($n().gb||[]).length?!0:qo(a)};var pq=function(){function a(b){ri.pscdl=b}if(void 0===ri.pscdl)try{"cookieDeprecationLabel"in Cc?(a("pending"),Cc.cookieDeprecationLabel.getValue().then(a)):a("noapi")}catch(b){a("error")}};
var rq=function(a,b){var c=a.Ij,d=a.bk,e=a.Tf,f=a.allowAdPersonalizationSignals;a.vj&&(xn(c[N.g.qc],!!c[N.g.W])&&(fo(qq,b),Jn(b)),bo(b),io(qq,b),nq(b,e,f));c[N.g.W]&&(ho(qq,c[N.g.W],c[N.g.Mb],!!c[N.g.zb],b.prefix),Kn(Bn(b.prefix),c[N.g.W],c[N.g.Mb],!!c[N.g.zb],b),Kn("FPAU",c[N.g.W],c[N.g.Mb],!!c[N.g.zb],b));d&&ko(qq);mo(qq)},sq=function(a,b,c,d){var e=a.fk,f=a.callback,g=a.Jj;if("function"===typeof f)if(e===N.g.tb&&void 0===g){var h=d(b.prefix,c);0===h.length?f(void 0):1===h.length?f(h[0]):f(h)}else e===
N.g.jc?(L(65),Fn(b,!1),f(zn[Bn(b.prefix)])):f(g)},qq=["aw","dc","gb"];function tq(a){var b=S(a.o,N.g.yb),c=S(a.o,N.g.Lb);b&&!c?(a.eventName!==N.g.sa&&a.eventName!==N.g.xd&&L(131),a.isAborted=!0):!b&&c&&(L(132),a.isAborted=!0)}function uq(a){var b=ck(N.g.J)?ri.pscdl:"denied";a.h[N.g.af]=b};var vq=function(){var a=Cc&&Cc.userAgent||"";if(0>a.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(a))return!1;var b=(/Version\/([\d\.]+)/.exec(a)||[])[1]||"";if(""===b)return!1;for(var c=["14","1","1"],d=b.split("."),e=0;e<d.length;e++){if(void 0===c[e])return!0;if(d[e]!=c[e])return Number(d[e])>Number(c[e])}return d.length>=c.length};var wq=/^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,xq=/^www.googleadservices.com$/,zq=function(a){a||(a=yq());return a.rn?!1:a.am||a.bm||a.dm||a.rh||a.If||a.Kl||a.Sl?!0:!1},yq=function(){var a={},b=dn(!0);a.rn=!!b._up;var c=$n();a.am=void 0!==c.aw;a.bm=void 0!==c.dc;a.dm=void 0!==c.wbraid;var d=Lm(z.location.href),e=Gm(d,"query",!1,void 0,"gad");a.rh=void 0!==e;if(!a.rh){var f=d.hash.replace("#",""),g=Dm(f,"gad",!1);a.rh=void 0!==g}a.If=void 0;if(R(61)){var h=Gm(d,"query",!1,void 0,"gad_source");a.If=
h;if(void 0===a.If){var m=d.hash.replace("#",""),n=Dm(m,"gad_source",!1);a.If=n}}var p=C.referrer?Gm(Lm(C.referrer),"host"):"";a.Sl=wq.test(p);a.Kl=xq.test(p);return a};var Aq=function(){var a=z.screen;return{width:a?a.width:0,height:a?a.height:0}},Bq=function(a){if(C.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!z.getComputedStyle)return!0;var c=z.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=z.getComputedStyle(d,null))}return!1};
var Lq=function(a,b,c){var d=a.element,e={U:a.U,type:a.ma,tagName:d.tagName};b&&(e.querySelector=Kq(d));c&&(e.isVisible=!Bq(d));return e},Mq=function(a,b,c){return Lq({element:a.element,U:a.U,ma:"1"},b,c)},Nq=function(a){var b=!!a.md+"."+!!a.nd;a&&a.ue&&a.ue.length&&(b+="."+a.ue.join("."));a&&a.ob&&(b+="."+a.ob.email+"."+a.ob.phone+"."+a.ob.address);return b},Qq=function(a){if(0!=a.length){var b;b=Oq(a,function(c){return!Pq.test(c.U)});b=Oq(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});
b=Oq(b,function(c){return!Bq(c.element)});return b[0]}},Rq=function(a,b){if(!b||0===b.length)return a;for(var c=[],d=0;d<a.length;d++){for(var e=!0,f=0;f<b.length;f++){var g=b[f];if(g&&zh(a[d].element,g)){e=!1;break}}e&&c.push(a[d])}return c},Oq=function(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c},Kq=function(a){var b;if(a===C.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===
a){e=g+1;break a}e=-1}else e=1}d=Kq(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b},Tq=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=d.textContent;"INPUT"===d.tagName.toUpperCase()&&d.value&&(e=d.value);if(e){var f=e.match(Sq);if(f){var g=f[0],h;if(z.location){var m=Fm(z.location,"host",!0);h=0<=g.toLowerCase().indexOf(m)}else h=!1;h||b.push({element:d,U:g})}}}return b},Xq=function(){var a=[],b=C.body;if(!b)return{elements:a,status:"4"};for(var c=b.querySelectorAll("*"),
d=0;d<c.length&&1E4>d;d++){var e=c[d];if(!(0<=Uq.indexOf(e.tagName.toUpperCase()))&&e.children instanceof HTMLCollection){for(var f=!1,g=0;g<e.childElementCount&&1E4>g;g++)if(!(0<=Vq.indexOf(e.children[g].tagName.toUpperCase()))){f=!0;break}(!f||R(30)&&-1!==Wq.indexOf(e.tagName))&&a.push(e)}}return{elements:a,status:1E4<c.length?"2":"1"}},Yq=!1;var Sq=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
Zq=/@(gmail|googlemail)\./i,Pq=/support|noreply/i,Uq="SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),Vq=["BR"],$q={wn:"1",Ln:"2",An:"3",En:"4",tn:"5",Mn:"6",Hn:"7"},ar={},Wq=["INPUT","SELECT"];var tr=function(a){a=a||{md:!0,nd:!0};a.ob=a.ob||{email:!0,phone:!1,address:!1};var b=Nq(a),c=ar[b];if(c&&200>Sa()-c.timestamp)return c.result;var d=Xq(),e=d.status,
f=[],g,h,m=[];if(!R(30)){if(a.ob&&a.ob.email){var n=Tq(d.elements);f=Rq(n,a&&a.ue);g=Qq(f);10<n.length&&(e="3")}!a.Th&&g&&(f=[g]);for(var p=0;p<f.length;p++)m.push(Mq(f[p],a.md,a.nd));m=m.slice(0,10)}else if(a.ob){}g&&(h=Mq(g,a.md,a.nd));var E={elements:m,Mh:h,status:e};ar[b]={timestamp:Sa(),result:E};return E},ur=function(a){return a.tagName+":"+a.isVisible+":"+a.U.length+":"+Zq.test(a.U)};var vr={jl:Number('')||500,Ok:Number('')||5E3,bj:Number('')||10,vk:Number('')||5E3};function wr(a){return a.performance&&a.performance.now()||Date.now()}
var xr=function(a,b){var c;var d=function(e,f,g){g=void 0===g?{}:g;this.il=e;this.ka=g;this.h=f;this.id=String(Math.floor(Number.MAX_SAFE_INTEGER*Math.random()));this.M=this.X=this.heartbeatCount=this.fl=0;this.uf=!1;this.s={};this.state=0;this.Mf=wr(this.h);this.Uf=wr(this.h);this.F=7};d.prototype.init=function(){this.C(1);this.Oa()};d.prototype.getState=function(){return{state:this.state,Mf:Math.round(wr(this.h)-this.Mf),Uf:Math.round(wr(this.h)-
this.Uf)}};d.prototype.C=function(e){this.state!==e&&(this.state=e,this.Uf=wr(this.h))};d.prototype.cj=function(){return String(this.fl++)};d.prototype.Oa=function(){var e=this;this.heartbeatCount++;this.Rb({type:0,clientId:this.id,requestId:this.cj(),maxDelay:this.vf()},function(f){if(0===f.type){var g;if(null!=(null==(g=f.failure)?void 0:g.failureType))if(f.stats&&(e.stats=f.stats),e.M++,f.isDead||e.M>vr.bj){var h=f.isDead&&f.failure.failureType;e.F=h||7;e.C(4);e.Yk();var m,n;null==(n=(m=e.ka).Hm)||
n.call(m,{failureType:h,data:f.failure.data})}else e.C(3),e.dj();else{if(e.heartbeatCount>f.stats.heartbeatCount+vr.bj){e.heartbeatCount=f.stats.heartbeatCount;var p,q;null==(q=(p=e.ka).onFailure)||q.call(p,{failureType:10})}e.stats=f.stats;var r=e.state;e.C(2);if(2!==r)if(e.uf){var t,u;null==(u=(t=e.ka).Xn)||u.call(t)}else{e.uf=!0;var v,w;null==(w=(v=e.ka).Im)||w.call(v)}e.M=0;e.kl();e.dj()}}})};d.prototype.vf=function(){return 2===this.state?vr.Ok:vr.jl};d.prototype.dj=function(){var e=this;this.h.setTimeout(function(){e.Oa()},
Math.max(0,this.vf()-(wr(this.h)-this.X)))};d.prototype.ol=function(e,f,g){var h=this;this.Rb({type:1,clientId:this.id,requestId:this.cj(),command:e},function(m){if(1===m.type)if(m.result)f(m.result);else{var n,p,q,r={failureType:null!=(q=null==(n=m.failure)?void 0:n.failureType)?q:9,data:null==(p=m.failure)?void 0:p.data},t,u;null==(u=(t=h.ka).onFailure)||u.call(t,r);g(r)}})};d.prototype.Rb=function(e,f){var g=this;if(4===this.state)e.failure={failureType:this.F},f(e);else{var h=2!==this.state&&
0!=e.type,m=e.requestId,n,p=this.h.setTimeout(function(){var r=g.s[m];r&&g.ed(r,4)},null!=(n=e.maxDelay)?n:vr.vk),q={request:e,Uj:f,Pj:h,Dm:p};this.s[m]=q;h||this.fj(q)}};d.prototype.fj=function(e){this.X=wr(this.h);e.Pj=!1;this.il(e.request)};d.prototype.kl=function(){for(var e in this.s){var f=this.s[e];f.Pj&&this.fj(f)}};d.prototype.Yk=function(){for(var e in this.s)this.ed(this.s[e],this.F)};d.prototype.ed=function(e,f){this.Sb(e);var g=e.request;g.failure={failureType:f};e.Uj(g)};d.prototype.Sb=
function(e){delete this.s[e.request.requestId];this.h.clearTimeout(e.Dm)};d.prototype.Yl=function(e){this.X=wr(this.h);var f=this.s[e.requestId];if(f)this.Sb(f),f.Uj(e);else{var g,h;null==(h=(g=this.ka).onFailure)||h.call(g,{failureType:11})}};c=new d(a,z,b);return c};var yr="https://"+qi.wd,zr=yr+"/gtm/static/",Ar=Number('')||5,Br=Number('')||50,Cr=yr,Dr=zr,Er=!1,Fr=0,Gr=Ja();
var Ir=function(a){a=void 0===a?[]:a;Fr>=Ar||(Hr("pid",Gr,a),Hr("bc",++Fr,a),a.unshift("ctid="+Tf.ctid+"&t=s"),Nc("https://www.googletagmanager.com/a?"+a.join("&")))},Jr=function(a,b){a&&(Hr("sid",a.targetId,b),Hr("cc",a.clientCount,b),Hr("tl",a.totalLifeMs,b),Hr("hc",a.heartbeatCount,b),Hr("cl",a.clientLifeMs,b))},Hr=function(a,b,c){null!=b&&c.push(a+"="+b)},Kr=function(){var a=C.referrer;if(a){var b;return Gm(Lm(a),"host")===(null==(b=z.location)?void 0:b.host)?1:2}return 0},Mr=function(a,b){var c=
Mc();try{var d=c.contentDocument.createElement("iframe"),e=Er?"&1p=1":"";Mc(Dr+"sw_iframe.html?origin="+encodeURIComponent(a)+e,void 0,void 0,void 0,d);var f=function(){c.contentDocument.body.appendChild(d);d.addEventListener("load",function(){b(c,d)})};"complete"===c.contentDocument.readyState?f():c.contentWindow.addEventListener("load",function(){f()})}catch(g){c.parentElement.removeChild(c),Lr(void 0,void 0,8,g.toString())}},Nr=function(a){var b=!!a;a||(a=zr);if(0!=a.indexOf("https://"))return!1;
"/"!==a[a.length-1]&&(a+="/");var c=a.indexOf("/",8),d=a.substring(0,c);if(!d)return!1;Cr=d;Dr=a;Er=b;return!0},Or=function(){var a=ri.sw_endpoint;return a&&a[Cr]};function Pr(){var a=!1;var b,c;a=null!=(c=null==(b=Or())?void 0:b.Nl())?c:!1;return a}
function Qr(a){if(!Nr(a)||Or())return;var b=z.location.origin;if(!b)return;if(null==Cc||!Cc.serviceWorker){Lr(void 0,void 0,3);return}var c=!1,d,e=xr(function(m){var n;null==(n=d)||n.postMessage(m,Cr)},{Im:function(){c=!0;Lr(e.getState(),e.stats)},Hm:function(m){c?Rr((null==m?void 0:m.failureType)||7,e.getState(),e.stats,void 0,null==m?void 0:m.data):Lr(e.getState(),e.stats,(null==m?void 0:m.failureType)||1,null==m?void 0:m.data)},onFailure:function(m){Rr(m.failureType,
e.getState(),e.stats,m.command,m.data)}}),f=!1,g=function(){f||e.init();f=!0};z.setTimeout(g,1E3);F(function(){Mr(b,function(m,n){d=n.contentWindow;m.contentWindow.addEventListener("message",function(p){p.origin===Cr&&e.Yl(p.data)});g()})});var h=ri.sw_endpoint;h||(h=ri.sw_endpoint={});h[Cr]={xj:function(m,n,p){e.ol(m,n,p)},Nl:function(){return 2===e.getState().state}};}
function Sr(a,b,c){var d;if(null==(d=Or())||!d.xj){c({failureType:1});return}Or().xj(a,null!=b?b:function(){},null!=c?c:function(){});}
function Lr(a,b,c,d){var e=Kr(),f,g=[];f=z===z.top&&0!==e&&b?1<(null==b?void 0:b.clientCount)?2==e?1:2:2==e?0:3:4;a&&Hr("si",a.Mf,g);Hr("m",0,g);Hr("iss",f,g);Hr("if",c,g);Jr(b,g);d&&Hr("fm",encodeURIComponent(d.substring(0,Br)),g);Ir(g);}
function Rr(a,b,c,d,e){if(!a)return;var f=[];Hr("m",1,f);Hr("s",a,f);Hr("po",Kr(),f);b&&(Hr("st",b.state,f),Hr("si",b.Mf,f),Hr("sm",b.Uf,f));Jr(c,f);Hr("c",d,f);e&&Hr("fm",encodeURIComponent(e.substring(0,Br)),f);Ir(f);}
function Tr(a,b,c,d){Pr()?Sr({commandType:2,params:{url:a,method:0,templates:b,filters:{pii:"sha256"},body:"",processResponse:!1,dryRun:!R(81)}},function(){c()},function(){d()}):(Rr(12,void 0,void 0,2),d());}
function Ur(a,b,c,d){var e=b?1:0;Pr()?Sr({commandType:2,params:{url:a,method:e,templates:c,filters:{},body:b||"",processResponse:!0,dryRun:!1}},function(){},d):(Rr(12,void 0,void 0,2),d());}
function Vr(a){var b={},c=["tv.1"],d=0;for(var e=ea(a),f=e.next();!f.done;f=e.next()){var g=f.value;if(""!==g.value){var h,m=void 0,n=g.name,p=g.value,q=Rh[n];if(q){var r=null!=(m=g.index)?m:"",t=q+"__"+d;-1===Uh.indexOf(n)||/^e\d+$/.test(p)||Ph.test(p)||Mh.test(p)?h=encodeURIComponent(encodeURIComponent(p)):(h="${userData."+t+"|sha256}",b[t]=p,d++);c.push(""+q+r+"."+h)}}}
var u=c.join("~");return{U:b,Nf:u}}var Wr=void 0;function Xr(a){var b="";return b};var Yr=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};bc();Ek()||Zb("iPod");Zb("iPad");!Zb("Android")||cc()||bc()||ac()||Zb("Silk");cc();!Zb("Safari")||cc()||($b()?0:Zb("Coast"))||ac()||($b()?0:Zb("Edge"))||($b()?Yb("Microsoft Edge"):Zb("Edg/"))||($b()?Yb("Opera"):Zb("OPR"))||bc()||Zb("Silk")||Zb("Android")||Fk();var Zr={},$r=null,as=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}var f=4;void 0===f&&(f=0);if(!$r){$r={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var n=g.concat(h[m].split(""));Zr[m]=n;for(var p=0;p<n.length;p++){var q=n[p];void 0===$r[q]&&($r[q]=p)}}}for(var r=Zr[f],t=Array(Math.floor(b.length/3)),u=r[64]||"",v=0,w=0;v<b.length-2;v+=3){var x=b[v],
y=b[v+1],A=b[v+2],B=r[x>>2],E=r[(x&3)<<4|y>>4],G=r[(y&15)<<2|A>>6],D=r[A&63];t[w++]=""+B+E+G+D}var M=0,P=u;switch(b.length-v){case 2:M=b[v+1],P=r[(M&15)<<2]||u;case 1:var O=b[v];t[w]=""+r[O>>2]+r[(O&3)<<4|M>>4]+P+u}return t.join("")};Object.freeze(new function(){});Object.freeze(new function(){});var bs="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function cs(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function ds(){var a=z.google_tag_data,b;if(null!=a&&a.uach){var c=a.uach,d=Object.assign({},c);c.fullVersionList&&(d.fullVersionList=c.fullVersionList.slice(0));b=d}else b=null;return b}function es(){var a,b;return null!=(b=null==(a=z.google_tag_data)?void 0:a.uach_promise)?b:null}
function fs(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}function gs(){var a=z;if(!fs(a))return null;var b=cs(a);if(b.uach_promise)return b.uach_promise;var c=a.navigator.userAgentData.getHighEntropyValues(bs).then(function(d){null!=b.uach||(b.uach=d);return d});return b.uach_promise=c};
var hs,is=function(){if(fs(z)&&(hs=Sa(),!es())){var a=gs();a&&(a.then(function(){L(95);}),a.catch(function(){L(96)}))}},ks=function(a){var b=js.pn,c=function(g,h){try{a(g,h)}catch(m){}},d=ds();if(d)c(d);else{var e=es();if(e){b=
Math.min(Math.max(isFinite(b)?b:0,0),1E3);var f=z.setTimeout(function(){c.He||(c.He=!0,L(106),c(null,Error("Timeout")))},b);e.then(function(g){c.He||(c.He=!0,L(104),z.clearTimeout(f),c(g))}).catch(function(g){c.He||(c.He=!0,L(105),z.clearTimeout(f),c(null,g))})}else c(null)}},ls=function(a,b){a&&(b.h[N.g.Wd]=a.architecture,b.h[N.g.Xd]=a.bitness,a.fullVersionList&&(b.h[N.g.Yd]=a.fullVersionList.map(function(c){return encodeURIComponent(c.brand||"")+";"+encodeURIComponent(c.version||"")}).join("|")),
b.h[N.g.Zd]=a.mobile?"1":"0",b.h[N.g.ae]=a.model,b.h[N.g.be]=a.platform,b.h[N.g.ce]=a.platformVersion,b.h[N.g.de]=a.wow64?"1":"0")};function ms(){return"attribution-reporting"}function ns(a){var b;b=void 0===b?document:b;var c;return!(null==(c=b.featurePolicy)||!c.allowedFeatures().includes(a))};var os=!1;function ps(){if(ns("join-ad-interest-group")&&Fa(Cc.joinAdInterestGroup))return!0;os||(Nk('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),os=!0);return ns("join-ad-interest-group")&&Fa(Cc.joinAdInterestGroup)}
function qs(a,b){var c=void 0;try{c=C.querySelector('iframe[data-tagging-id="'+b+'"]')}catch(e){}if(c){var d=Number(c.dataset.loadTime);if(d&&6E4>Sa()-d){Ab("TAGGING",9);return}try{c.parentNode.removeChild(c)}catch(e){}c=void 0}else try{if(50<=C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length){Ab("TAGGING",10);return}}catch(e){}Mc(a,void 0,{allow:"join-ad-interest-group"},{taggingId:b,loadTime:Sa()},c)}function rs(){return"https://td.doubleclick.net"};var ss=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),ts=/^~?[\w-]+(?:\.~?[\w-]+)*$/,us=/^\d+\.fls\.doubleclick\.net$/,vs=/;gac=([^;?]+)/,ws=/;gacgb=([^;?]+)/,xs=/;gclaw=([^;?]+)/,ys=/;gclgb=([^;?]+)/;
function zs(a,b){if(us.test(C.location.host)){var c=C.location.href.match(b);return c&&2==c.length&&c[1].match(ss)?decodeURIComponent(c[1]):""}var d=[],e;for(e in a){for(var f=[],g=a[e],h=0;h<g.length;h++)f.push(g[h].aa);d.push(e+":"+f.join(","))}return 0<d.length?d.join(";"):""}
var As=function(a,b,c){var d=Rn(Qn())?Mn("_gac_gb",!0):{},e=[],f=!1,g;for(g in d){var h=no("_gac_gb_"+g,a,b,c);f=f||0!==h.length&&h.some(function(m){return 1===m});e.push(g+":"+h.join(","))}return{Jl:f?e.join(";"):"",Il:zs(d,ws)}};function Bs(a,b,c){if(us.test(C.location.host)){var d=C.location.href.match(c);if(d&&2==d.length&&d[1].match(ts))return[{aa:d[1]}]}else return Tn((a||"_gcl")+b);return[]}
var Cs=function(a){return Bs(a,"_aw",xs).map(function(b){return b.aa}).join(".")},Ds=function(a){return Bs(a,"_gb",ys).map(function(b){return b.aa}).join(".")},Es=function(a,b){var c=no((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===c.length||c.every(function(d){return 0===d})?"":c.join(".")};var Fs=function(){if(Fa(z.__uspapi)){var a="";try{z.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&RegExp("^[\\da-zA-Z-]{1,20}$").test(d)&&(a=d)}})}catch(b){}return a}};
var Gs=function(){return R(48)?[N.g.J,N.g.N]:[N.g.J]},Hs=function(a){if(null!=a){var b=String(a).substring(0,512),c=b.indexOf("#");return-1==c?b:b.substring(0,c)}return""},Is=function(){var a=C.title;if(void 0==a||""==a)return"";var b=function(d){try{return decodeURIComponent(d),!0}catch(e){return!1}};a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return decodeURIComponent(a.substr(0,c))},Js=function(a){a.metadata.speculative_in_message||(a.metadata.speculative=!1)},Ks=function(a,b){Ha(b)||
(b=[b]);return 0<=b.indexOf(a.metadata.hit_type)},Ls=function(a){var b=a.target.P[0];if(b){a.h[N.g.Pc]=b;var c=a.target.P[1];c&&(a.h[N.g.jb]=c)}else a.isAborted=!0},Ms=function(a){if(Ks(a,["conversion","remarketing","user_data_lead","user_data_web"])){var b=a.h[N.g.jb],c=!0===S(a.o,N.g.Ze);c&&(a.metadata.remarketing_only=!0);switch(a.metadata.hit_type){case "conversion":!c&&b&&Js(a);bj()&&(a.metadata.is_gcp_conversion=!0);break;case "user_data_lead":case "user_data_web":!c&&b&&(a.isAborted=!0);break;
case "remarketing":!c&&b||Js(a)}a.h[N.g.Yi]=a.metadata.is_gcp_conversion?"www.google.com":"www.googleadservices.com"}},Ns=function(a){Ks(a,["conversion","remarketing"])},Os=function(a){if(Ks(a,["conversion","remarketing"])){var b=Pk(!1);a.h[N.g.zg]=b;var c=S(a.o,N.g.Aa);c||(c=1===b?z.top.location.href:z.location.href);a.h[N.g.Aa]=Hs(c);a.copyToHitData(N.g.Na,C.referrer);a.h[N.g.Ab]=Is();a.copyToHitData(N.g.La);var d=Aq();a.h[N.g.Bb]=d.width+"x"+d.height;for(var e,f=z,g=f;f&&f!=f.parent;)f=f.parent,
Lk(f)&&(g=f);e=g;var h;var m=e.location.href;if(e===e.top)h={url:m,mm:!0};else{var n=!1,p=e.document;p&&p.referrer&&(m=p.referrer,e.parent===e.top&&(n=!0));var q=e.location.ancestorOrigins;if(q){var r=q[q.length-1];r&&-1===m.indexOf(r)&&(n=!1,m=r)}h={url:m,mm:n}}var t=h;t.url&&c!==t.url&&(a.h[N.g.qf]=Hs(t.url))}},Ps=function(a){Ks(a,["conversion","remarketing"])&&(a.copyToHitData(N.g.ya),a.copyToHitData(N.g.ia),a.copyToHitData(N.g.xa),R(48)&&!ck(N.g.N)||a.copyToHitData(N.g.Ta))},Qs=function(a){if(!fs(z))L(87);
else if(void 0!==hs){L(85);var b=ds();b?ls(b,a):L(86)}},Ts=function(a){!Ks(a,["conversion"])||R(48)&&!ck(N.g.N)||(!0===z._gtmpcm||vq()?a.h[N.g.Jb]="2":R(5)&&(Rs||ns(ms())||(Nk('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),Rs=!0),Ss||(Ss=!0,Nk('A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d')),ns(ms())&&(a.h[N.g.Jb]="1")))},Us=function(a){Ks(a,["conversion","remarketing"])&&R(6)&&ck(N.g.J)&&(!R(48)||ck(N.g.N))&&!1!==S(a.o,N.g.Ga)&&sl(a.o)&&!1!==S(a.o,N.g.Ib)&&!1!==S(a.o,N.g.Sa)&&ps()&&
(a.h[N.g.ng]="1",a.metadata.send_fledge_experiment=!0)},Vs=function(a){var b=function(d){return S(a.o,d)};a.metadata.conversion_linker_enabled=!1!==b(N.g.Ha);var c={prefix:b(N.g.Qa)||b(N.g.Ra),domain:b(N.g.Wa),Wb:b(N.g.Ka),flags:b(N.g.Xa)};a.metadata.cookie_options=c;a.metadata.redact_ads_data=null!=b(N.g.wa)&&!1!==b(N.g.wa);a.metadata.allow_ad_personalization=sl(a.o)},Ws=function(a){if(To(a,"ccd_add_1p_data",!1)&&ck(Gs())){var b=a.o.s[N.g.fe];if($i(b)){var c=S(a.o,N.g.Ba);null===c?a.metadata.user_data_from_code=
null:(b.enable_code&&mb(c)&&(a.metadata.user_data_from_code=c),mb(b.selectors)&&(a.metadata.user_data_from_manual=Zi(b.selectors)))}}},Xs=function(a){var b=!a.metadata.send_user_data_hit&&Ks(a,["conversion","user_data_web"]),c=!To(a,"ccd_add_1p_data",!1)&&Ks(a,"user_data_lead");if((b||c)&&ck(N.g.J)){var d="conversion"===a.metadata.hit_type,e=a.o,f=void 0,g=S(e,N.g.Ba);if(d){var h=(S(e,N.g.Hd)||{})[a.h[N.g.jb]];if(!0===S(e,N.g.yd)||h){var m;var n;if(h)b:{switch(h.enhanced_conversions_mode){case "manual":if(g&&
mb(g)){n=g;break b}var p=h.enhanced_conversions_manual_var;n=void 0!==p?p:z.enhanced_conversion_data;break b;case "automatic":n=Zi(h[N.g.lg]);break b}n=void 0}else n=z.enhanced_conversion_data;var q=n,r=(h||{}).enhanced_conversions_mode,t;if(q){if("manual"===r)switch(q._tag_mode){case "CODE":t="c";break;case "AUTO":t="a";break;case "MANUAL":t="m";break;default:t="c"}else t="automatic"===r?aj(h)?"a":"m":"c";m={U:q,ek:t}}else m={U:q,ek:void 0};var u=m,v=u.ek;f=u.U;a.h[N.g.ee]=v}}else if(a.o.isGtmEvent){Js(a);
a.metadata.user_data=g;return}a.metadata.user_data=f}},Ys=function(a){Ks(a,["conversion","remarketing"])&&(a.o.isGtmEvent?"conversion"!==a.metadata.hit_type&&a.eventName&&(a.h[N.g.mg]=a.eventName):a.h[N.g.mg]=a.eventName,l(a.o.h,function(b,c){ni[b.split(".")[0]]||(a.h[b]=c)}))},Zs=function(a){if(a.eventName===N.g.sa&&!a.metadata.consent_updated&&(a.metadata.is_config_command=!0,Ks(a,"conversion")&&(a.metadata.speculative=!0),!Ks(a,"remarketing")||!1!==S(a.o,N.g.Ib)&&!1!==S(a.o,N.g.Sa)||(a.metadata.speculative=
!0),Ks(a,"landing_page"))){var b=S(a.o,N.g.Ma)||{},c=S(a.o,N.g.Db),d=a.metadata.conversion_linker_enabled,e=So(a),f=sl(a.o),g=a.metadata.cookie_options;rq({vj:d,Ij:b,bk:c,Tf:e,allowAdPersonalizationSignals:f},g);Mo(a.target,a.o);vo({eh:!1,Qf:a.metadata.redact_ads_data,targetId:a.target.id,o:a.o,jd:d?g:void 0,Lf:d,yj:a.h[N.g.kf],ph:a.h[N.g.xb],jh:a.h[N.g.vb]});a.isAborted=!0}},$s=function(a){if(!To(a,"hasPreAutoPiiCcdRule",!1)&&Ks(a,"conversion")&&ck(N.g.J)){var b=(S(a.o,N.g.Hd)||{})[a.h[N.g.jb]],
c=a.h[N.g.Pc],d;if(!(d=aj(b)))if(uj())if(Yq)d=!0;else{var e=Qo("AW-"+c);d=!!e&&!!e.preAutoPii}else d=!1;if(d){var f=Sa(),g=tr({md:!0,nd:!0,Th:!0});if(0!==g.elements.length){for(var h=[],m=0;m<g.elements.length;++m){var n=g.elements[m];h.push(n.querySelector+"*"+ur(n)+"*"+n.type)}a.h[N.g.Lg]=h.join("~");var p=g.Mh;p&&(a.h[N.g.Mg]=p.querySelector,a.h[N.g.Kg]=ur(p));a.h[N.g.Jg]=String(Sa()-f);a.h[N.g.Ng]=g.status}}}},at=function(a){if(a.eventName===N.g.Pa&&!a.o.isGtmEvent){if(!a.metadata.consent_updated&&
Ks(a,"conversion")){var b=S(a.o,N.g.wb);if("function"!==typeof b)return;var c=String(S(a.o,N.g.lb)),d=a.h[c],e=S(a.o,c);c===N.g.tb||c===N.g.jc?sq({fk:c,callback:b,Jj:e},a.metadata.cookie_options,a.metadata.redact_ads_data,jq):b(d||e)}a.isAborted=!0}},bt=function(a){if(Ks(a,"conversion")&&ck(N.g.J)&&(a.h[N.g.sc]||a.h[N.g.oc])){var b=a.h[N.g.jb],c=nb(a.metadata.cookie_options),d=Yn(c.prefix);c.prefix="_gcl"===d?"":d;if(a.h[N.g.sc]){var e=Es(b,c);e&&(a.h[N.g.Pg]=e)}if(a.h[N.g.oc]){var f=As(b,c).Jl;f&&
(a.h[N.g.sg]=f)}}},ct=function(a){var b=R(4),c=a.o,d,e,f;if(!b){var g=lk(c,N.g.ba);d=bb(mb(g)?g:{})}var h=lk(c,N.g.ba,1),m=lk(c,N.g.ba,2);e=bb(mb(h)?h:{},".");f=bb(mb(m)?m:{},".");b||(a.h[N.g.kf]=d);a.h[N.g.xb]=e;a.h[N.g.vb]=f},dt=function(a){if(Ks(a,["conversion","remarketing"])){var b="conversion"===a.metadata.hit_type;b&&a.eventName!==N.g.ra||(a.copyToHitData(N.g.Z),b&&(a.copyToHitData(N.g.Cd),a.copyToHitData(N.g.Ad),a.copyToHitData(N.g.Bd),a.copyToHitData(N.g.zd),a.h[N.g.hg]=a.eventName))}},et=
function(a){if(Ks(a,["conversion","remarketing","user_data_lead","user_data_web"])){var b=a.o;if(Ks(a,["conversion","remarketing"])){var c=S(b,N.g.Nb);if(!0===c||!1===c)a.h[N.g.Nb]=c}var d=sl(b);if(!d)a.h[N.g.fd]=!0;else if(R(29)||!0===S(b,N.g.ja))a.h[N.g.fd]=!1;!1===d&&Ks(a,"remarketing")&&(a.isAborted=!0)}},ft=function(a){Ks(a,"conversion")&&(a.copyToHitData(N.g.Xc),a.copyToHitData(N.g.Dd),a.copyToHitData(N.g.bd),a.copyToHitData(N.g.Id),a.copyToHitData(N.g.nc),a.copyToHitData(N.g.Uc))},gt=function(a){
Wo(a);},ht=function(a){if(Ks(a,["conversion","remarketing"])&&z.__gsaExp&&z.__gsaExp.id){var b=z.__gsaExp.id;if(Fa(b))try{var c=Number(b());isNaN(c)||(a.h[N.g.yg]=c)}catch(d){}}},it=function(a){if(Ks(a,["conversion","remarketing"])){var b=Fs();void 0!==b&&(a.h[N.g.Og]=b||"error");var c=ll();c&&(a.h[N.g.Od]=c);var d=jl();d&&(a.h[N.g.Vd]=d)}},jt=function(a){Ks(a,["conversion"])&&"1"===dn(!1)._up&&(a.h[N.g.Qd]=!0)},kt=function(a){Ks(a,["conversion"])&&(a.metadata.redact_click_ids=
!!a.metadata.redact_ads_data&&!ck(Gs()))},lt=function(a){if(Ks(a,["conversion","user_data_lead","user_data_web"])&&ck(N.g.J)&&a.metadata.conversion_linker_enabled){var b=a.metadata.cookie_options,c=Yn(b.prefix);"_gcl"===c&&(c="");if(!R(48)||ck(N.g.N)){var d=c;if(us.test(C.location.host)?xs.test(C.location.href)||vs.test(C.location.href):!qo(d)){var e=Cs(c);e&&(a.h[N.g.tb]=e);if(!c){var f=zs(Rn(Qn())?Mn():{},vs);f&&(a.h[N.g.Nd]=f)}}else{var g=Ds(c);g&&(a.h[N.g.sc]=g);if(!c){var h=a.h[N.g.jb];b=nb(b);
b.prefix=c;var m=As(h,b,!0).Il;m&&(a.h[N.g.oc]=m)}}}}},mt=function(a){if(Ks(a,["conversion","remarketing","user_data_lead","user_data_web"])&&a.metadata.conversion_linker_enabled&&ck(N.g.J)){var b=!R(3);if("remarketing"!==a.metadata.hit_type||b){var c=a.metadata.cookie_options;Fn(c,"conversion"===a.metadata.hit_type&&a.eventName!==N.g.Pa);if(!R(48)||ck(N.g.N))a.h[N.g.jc]=zn[Bn(c.prefix)]}}},nt=function(){zi||Bi||R(75)&&R(86)&&Qr()},ot=function(a){if(Ks(a,["conversion"])){var b=Zo(a.metadata.cookie_options);
if(b&&!a.h[N.g.ya]){var c=Wl(a.h[N.g.jb]);a.h[N.g.ya]=c}b&&(a.h[N.g.Cb]=b,a.metadata.send_ccm_parallel_ping=!0)}},pt=function(a){var b=ck(Gs());switch(a.metadata.hit_type){case "user_data_lead":case "user_data_web":a.isAborted=!b||!!a.metadata.consent_updated;break;case "remarketing":a.isAborted=!b;break;case "conversion":a.metadata.consent_updated&&(a.h[N.g.ud]=!0)}},qt=function(a){Ks(a,["conversion"])&&a.o.eventMetadata.is_external_event&&(a.h[N.g.Zi]=!0)},rt=function(a){if(R(58)&&Ks(a,["conversion"])){var b=
yq();zq(b)&&(a.h[N.g.jf]="1",a.metadata.add_tag_timing=!0)}},st=function(a){var b;if("gtag.config"!==a.eventName&&a.metadata.send_user_data_hit)switch(a.metadata.hit_type){case "user_data_web":b=97;Js(a);break;case "user_data_lead":b=98;Js(a);break;case "conversion":b=99}!a.metadata.speculative&&b&&L(b);!0===a.metadata.speculative&&(a.isAborted=!0)},Rs=!1,Ss=!1;var tt={H:{Zh:"ads_conversion_hit",vd:"container_execute_start",di:"container_setup_end",Yf:"container_setup_start",ai:"container_blocking_end",bi:"container_execute_end",ei:"container_yield_end",Zf:"container_yield_start",Ui:"event_execute_end",Ti:"event_evaluation_end",Qg:"event_evaluation_start",Vi:"event_setup_end",he:"event_setup_start",Wi:"ga4_conversion_hit",je:"page_load",Kn:"pageview",Ub:"snippet_load",lj:"tag_callback_error",mj:"tag_callback_failure",nj:"tag_callback_success",oj:"tag_execute_end",
gd:"tag_execute_start"}};function ut(){function a(c,d){var e=Cb(d);e&&b.push(c+"="+e)}var b=[];a("&u","GTM");a("&ut","TAGGING");a("&h","HEALTH");return b.join("")};var vt=!1;
var du=function(a,b){},eu=function(a,b){},fu=function(a,b){},gu=function(a,b){},hu=function(){var a={};return a},Wt=function(a){a=void 0===a?!0:a;var b={};return b},iu=function(){},ju=function(a,b){},
ku=function(a,b,c){},lu=function(){};
var mu=function(a,b){var c=z,d,e=c.GooglebQhCsO;e||(e={},c.GooglebQhCsO=e);d=e;if(d[a])return!1;d[a]=[];d[a][0]=b;return!0};var nu=function(a,b,c){var d=Ik(a,"fmt");if(b){var e=Ik(a,"random"),f=Ik(a,"label")||"";if(!e)return!1;var g=as(decodeURIComponent(f.replace(/\+/g," "))+":"+decodeURIComponent(e.replace(/\+/g," ")));if(!mu(g,b))return!1}d&&4!=d&&(a=Kk(a,"rfmt",d));var h=Kk(a,"fmt",4);Jc(h,function(){z.google_noFurtherRedirects&&b&&b.call&&(z.google_noFurtherRedirects=null,b())},void 0,c,C.getElementsByTagName("script")[0].parentElement||void 0);return!0};
var ou=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=void 0;if(d.hasOwnProperty("google_business_vertical")){e=d.google_business_vertical;var f={};b[e]=b[e]||(f.google_business_vertical=e,f)}else e="",b.hasOwnProperty(e)||(b[e]={});var g=b[e],h;for(h in d)"google_business_vertical"!==h&&(h in g||(g[h]=[]),g[h].push(d[h]))}return Object.keys(b).map(function(m){return b[m]})},qu=function(a){if(!a||!a.length)return[];for(var b=[],c=0;c<a.length;++c){var d=a[c];if(d){var e={};b.push((e.id=
pu(d),e.origin=d.origin,e.destination=d.destination,e.start_date=d.start_date,e.end_date=d.end_date,e.location_id=d.location_id,e.google_business_vertical=d.google_business_vertical,e))}}return b},ru=function(a){if(!a||!a.length)return[];for(var b=[],c=0;c<a.length;++c){var d=a[c];d&&b.push({item_id:pu(d),quantity:d.quantity,value:d.price,start_date:d.start_date,end_date:d.end_date})}return b},pu=function(a){null!=a.id&&null!=a.item_id&&L(138);var b=a.id;R(85)&&(null!=a.item_id?b=a.item_id:null==
b&&(b=a.item_name));return b},tu=function(a){if(!a)return"";for(var b=[],c=0;c<a.length;c++){var d=a[c],e=[];d&&(e.push(su(d.value)),e.push(su(d.quantity)),e.push(su(d.item_id)),e.push(su(d.start_date)),e.push(su(d.end_date)),b.push("("+e.join("*")+")"))}return 0<b.length?b.join(""):""},su=function(a){return"number"!==typeof a&&"string"!==typeof a?"":a.toString()},vu=function(a,b){var c=uu(b);return""+a+(a&&c?";":"")+c},uu=function(a){if(!a||"object"!==typeof a||"function"===typeof a.join)return"";
var b=[];l(a,function(c,d){var e,f;if(Ha(d)){for(var g=[],h=0;h<d.length;++h){var m=wu(d[h]);void 0!=m&&g.push(m)}f=0!==g.length?g.join(","):void 0}else f=wu(d);e=f;var n=wu(c);n&&void 0!=e&&b.push(n+"="+e)});return b.join(";")},wu=function(a){var b=typeof a;if(null!=a&&"object"!==b&&"function"!==b)return String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")},xu=function(a,b){var c=[],d=function(f,g){null!=g&&""!==g&&(!0===g&&(g=1),!1===g&&(g=0),c.push(f+"="+encodeURIComponent(g)))},
e=a.metadata.hit_type;"conversion"!==e&&"remarketing"!==e||d("random",a.metadata.event_start_timestamp_ms);l(b,d);return c.join("&")},yu=function(a,b){var c=a.metadata.hit_type,d=a.h[N.g.Pc],e=ck(R(48)?[N.g.J,N.g.N]:[N.g.J]),f=[],g,h=a.o.onSuccess,m,n=$l()?2:3,p=0,q=function(x){f.push(x);x.Da&&p++};switch(c){case "conversion":m="pagead/conversion";var r="";e?a.metadata.is_gcp_conversion?(g="https://www.google.com/",m="pagead/1p-conversion"):g="https://www.googleadservices.com/":g="https://pagead2.googlesyndication.com/";
a.metadata.is_gcp_conversion&&(r="&gcp=1&sscte=1&ct_cookie_present=1");var t={Ia:""+g+m+"/"+d+"/?"+xu(a,b)+r,format:n,Da:!0};if(!R(48)||ck(N.g.N))t.attributes={attributionsrc:""};q(t);a.metadata.send_ccm_parallel_ping&&q({Ia:""+g+"ccm/conversion/"+d+"/?"+xu(a,b)+r,format:2,Da:!0});a.metadata.is_gcp_conversion&&(r="&gcp=1&ct_cookie_present=1",q({Ia:""+(e?"https://googleads.g.doubleclick.net/":g)+"pagead/viewthroughconversion/"+d+"/?"+xu(a,b)+r,format:n,Da:!0}));break;case "remarketing":var u=b.data||
"",v=ou(qu(a.h[N.g.Z]));if(v.length){for(var w=0;w<v.length;w++)b.data=vu(u,v[w]),q({Ia:"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/"+d+"/?"+xu(a,b),format:n,Da:!0}),a.metadata.send_fledge_experiment&&q({Ia:rs()+"/td/rul/"+d+"?"+xu(a,b),format:4,Da:!1}),a.metadata.event_start_timestamp_ms+=1;a.metadata.send_fledge_experiment=!1}else q({Ia:"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/"+d+"/?"+xu(a,b),format:n,Da:!0});break;case "user_data_lead":q({Ia:"https://google.com/pagead/form-data/"+
d+"?"+xu(a,b),format:1,Da:!0});break;case "user_data_web":q({Ia:"https://google.com/ccm/form-data/"+d+"?"+xu(a,b),format:1,Da:!0})}1<f.length&&Fa(a.o.onSuccess)&&(h=cb(a.o.onSuccess,p));$l()||"conversion"!==c&&"remarketing"!==c||!a.metadata.send_fledge_experiment||q({Ia:rs()+"/td/rul/"+d+"?"+xu(a,b),format:4,Da:!1});return{onSuccess:h,fm:f}},zu=function(a,b,c,d,e,f){eu(c.o.eventId,c.eventName);var g=function(){e&&e()};switch(b){case 1:Uc(a);e&&e();break;case 2:Nc(a,g,void 0,f);break;case 3:var h=
!1;try{h=nu(a,g,f)}catch(p){h=!1}h||zu(a,2,c,d,g,f);break;case 4:var m="AW-"+c.h[N.g.Pc],n=c.h[N.g.jb];n&&(m=m+"/"+n);qs(a,m)}},Au={},Bu=(Au[N.g.ud]="gcu",Au[N.g.tb]="gclaw",Au[N.g.jc]="auid",Au[N.g.zd]="dscnt",Au[N.g.Ad]="fcntr",Au[N.g.Bd]="flng",Au[N.g.Cd]="mid",Au[N.g.hg]="bttype",Au[N.g.jb]="label",Au[N.g.Jb]="capi",Au[N.g.af]="pscdl",Au[N.g.xa]="currency_code",Au[N.g.Dd]="vdltv",Au[N.g.Ai]="_dbg",Au[N.g.Id]="oedeld",Au[N.g.vb]="edid",Au[N.g.ng]="fledge",Au[N.g.Nd]="gac",Au[N.g.oc]="gacgb",Au[N.g.sg]=
"gacmcov",Au[N.g.Od]="gdpr",Au[N.g.xb]="gdid",Au[N.g.yg]="gsaexp",Au[N.g.zg]="frm",Au[N.g.Qd]="gtm_up",Au[N.g.jf]="lps",Au[N.g.kf]="did",Au[N.g.Xc]=void 0,Au[N.g.Ab]="tiba",Au[N.g.Nb]="rdp",Au[N.g.Cb]="ecsid",Au[N.g.bd]="delopc",Au[N.g.Vd]="gdpr_consent",Au[N.g.ya]="oid",Au[N.g.Wd]="uaa",Au[N.g.Xd]="uab",Au[N.g.Yd]="uafvl",Au[N.g.Zd]="uamb",Au[N.g.ae]="uam",Au[N.g.be]="uap",Au[N.g.ce]="uapv",Au[N.g.de]="uaw",Au[N.g.Jg]="ec_lat",Au[N.g.Kg]="ec_meta",Au[N.g.Lg]="ec_m",Au[N.g.Mg]="ec_sel",Au[N.g.Ng]=
"ec_s",Au[N.g.ee]="ec_mode",Au[N.g.Ta]="userId",Au[N.g.Og]="us_privacy",Au[N.g.ia]="value",Au[N.g.sc]="gclgb",Au[N.g.Pg]="mcov",Au[N.g.Yi]="hn",Au[N.g.Zi]="gtm_ee",Au[N.g.fd]="npa",Au[N.g.Pc]=null,Au[N.g.Bb]=null,Au[N.g.La]=null,Au[N.g.Z]=null,Au[N.g.Aa]=null,Au[N.g.Na]=null,Au[N.g.qf]=null,Au),Du=function(a){Cu(a,function(b,c){for(var d=yu(a,b),e=d.onSuccess,f=d.fm,g={},h=0;h<f.length;g={Ia:void 0,mh:void 0,Da:void 0,Xg:void 0},h++){var m=f[h];g.Ia=m.Ia;g.mh=m.format;g.Da=m.Da;g.Xg=m.attributes;
if(c&&c.zj){var n=c.zj;Tr(g.Ia+"&em="+n.Nf,{userData:n.U},g.Da&&e?e:function(){},function(p){return function(){Vh(c.Gm,function(q){var r=Yh(q);zu(p.Ia+"&em="+encodeURIComponent(r.Nf),p.mh,a,b,p.Da?e:void 0,p.Xg)})}}(g))}else zu(g.Ia,g.mh,a,b,g.Da?e:void 0,g.Xg)}})},Cu=function(a,b){var c=a.metadata.hit_type,d={},e={},f,g=[],h=a.metadata.event_start_timestamp_ms;if("conversion"===c||"remarketing"===c)d.cv="11",d.fst=h,d.fmt=3,d.bg="ffffff",d.guid="ON",d.async="1";var m=lo(["aw","dc"]);null!=m&&(d.gad_source=
m);d.gtm=Am(So(a));"remarketing"!==c&&tl()&&(d.gcs=ul());d.gcd=yl(a.o);Bl()&&(d.dma_cps=zl());d.dma=Al();Xk(el())&&(d.tcfd=Cl());Ni()&&(d.tag_exp=Ni());if(a.h[N.g.Bb]){var n=a.h[N.g.Bb].split("x");2===n.length&&(d.u_w=n[0],d.u_h=n[1])}if(a.h[N.g.La]){var p=a.h[N.g.La];2===p.length?d.hl=p:5===p.length&&(d.hl=p.substring(0,2),d.gl=p.substring(3,5))}var q=a.metadata.redact_click_ids,r=function(D,M){var P=a.h[M];P&&(d[D]=q?Mm(P):P)};r("url",N.g.Aa);r("ref",N.g.Na);r("top",N.g.qf);l(a.h,function(D,M){if(Bu.hasOwnProperty(D)){var P=
Bu[D];P&&(d[P]=M)}else e[D]=M});var t=a.h[N.g.Xc];void 0!=t&&""!==t&&(d.vdnc=String(t));var u=a.h[N.g.Uc];void 0!==u&&(d.shf=u);var v=a.h[N.g.nc];void 0!==v&&(d.delc=v);if(R(58)&&a.metadata.add_tag_timing){d.tft=Sa();var w=Xc();void 0!==w&&(d.tfd=Math.round(w))}d.data=uu(e);var x=a.h[N.g.Z];x&&"conversion"===c&&(d.iedeld=cj(x),d.item=tu(ru(x)));if(!("conversion"!==c&&"user_data_lead"!==c&&"user_data_web"!==c||!a.metadata.user_data||R(48)&&!ck(N.g.N)||R(15)&&!ck(N.g.J))){var y=function(){if("user_data_web"===
c){var D=$o(a.metadata.cookie_options);d.ecsid=D}};if(R(75)&&R(86)&&!zi&&!Bi){var A=Wh(a.metadata.user_data),B=Vr(A);f={zj:B,Gm:A};var E=B.U;E&&0<Object.keys(E).length&&y()}else{var G=$h(a.metadata.user_data);G&&g.push(G.then(function(D){d.em=D.Kj;0<D.Lh&&y()}))}}if(g.length)try{Promise.all(g).then(function(){b(d)});return}catch(D){}b(d,f)};var Eu=function(){this.h={}},Fu=function(a,b,c){null!=c&&(a.h[b]=c)},Gu=function(a){return Object.keys(a.h).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.h[b])}).join("&")},Iu=function(a,b,c,d){if(!Pj()){Hu(a,b,c,d);return}fk(function(){ck(N.g.J)?Hu(a,b,c,d):d&&d()},[N.g.J]);};
var Ju=function(a,b,c){c=void 0===c?!0:c;var d={gclgb:function(){return fq("gb",b,c).join(".")},gacgb:function(){return mq(c)},gclaw:function(){return jq(b,c).join(".")},gac:function(){return lq(c)}},e=oq(b),f=e?"gclgb":"gclaw",g=e?"gacgb":"gac",h=d[g],m=(0,d[f])(),n="_gcl"!==b?"":h();m&&Fu(a,f,m);n&&Fu(a,g,n)},Hu=function(a,b,c,d){c=c||{};var e=c.jd||{},f=new Eu;Zh(b,function(g,h){Fu(f,"em",g);Fu(f,"gtm",Am());tl()&&Fu(f,"gcs",ul());Fu(f,"gcd",yl());Bl()&&Fu(f,"dma_cps",zl());Fu(f,"dma",Al());sl()?
R(29)&&Fu(f,"npa","0"):Fu(f,"npa","1");Xk(el())&&Fu(f,"tcfd",Cl());Ni()&&Fu(f,"tag_exp",Ni());Ju(f,Yn(e.prefix),c.Qf);Fu(f,"auid",zn[Bn(e.prefix)]);if(0<h){var m=$o(e);Fu(f,"ecsid",m)}var n=Gu(f);Uc("https://google.com/pagead/form-data/"+a+"?"+n);Uc("https://google.com/ccm/form-data/"+a+"?"+n);d&&d()})};function Ku(a,b){if(data.entities&&data.entities[a])return data.entities[a][b]};var Mu=function(a,b,c){c=void 0===c?!1:c;var d=Lu(a);d.entity.push(b);d._entity||(d._entity={internal:[],external:[]});c?d._entity.external.push(b):d._entity.internal.push(b)},Nu=function(){var a=Lu(mm());if(R(97)){var b,c;return[].concat(ia((null==a?void 0:null==(b=a._entity)?void 0:b.internal)||[]),ia((null==a?void 0:null==(c=a._entity)?void 0:c.external)||[]))}return a.entity},Ou=function(a,b,c){c=void 0===c?!1:c;var d=Lu(a);d.event&&(d.event.push(b),d._event||(d._event={internal:[],external:[]}),
c?d._event.external.push(b):d._event.internal.push(b))},Pu=function(){var a=Lu(mm());if(R(97)){var b,c;return[].concat(ia((null==a?void 0:null==(b=a._event)?void 0:b.internal)||[]),ia((null==a?void 0:null==(c=a._event)?void 0:c.external)||[]))}return a.event||[]};function Lu(a){var b,c=ri.r;c||(c={container:{}},ri.r=c);b=c;var d=b.container[a];d||(d={entity:[],event:[],_entity:{internal:[],external:[]},_event:{internal:[],external:[]}},b.container[a]=d);return d};var Qu=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ru={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Su={cl:["ecl"],customPixels:["customScripts",
"html"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Tu="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),Wu=function(a){var b=Si("gtm.allowlist")||Si("gtm.whitelist");b&&L(9);xi&&(b=["google","gtagfl",
"lcl","zone"]);Uu()&&(xi?L(116):(L(117),Vu&&(b=[],window.console&&window.console.log&&window.console.log("GTM blocked. See go/13687728."))));var c=b&&Xa(Pa(b),Ru),d=Si("gtm.blocklist")||Si("gtm.blacklist");d||(d=Si("tagTypeBlacklist"))&&L(3);d?L(8):d=[];Uu()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Pa(d).indexOf("google")&&L(2);var e=d&&Xa(Pa(d),Su),f={};return function(g){var h=g&&g[Oe.na];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];
var m=Ji[h]||[],n=a(h,m);if(!R(94))for(var p=Nu(),q=0;q<p.length;q++)try{n=n&&p[q](h,m)}catch(y){n=!1}if(b){var r;if(r=n)a:{if(0>c.indexOf(h))if(m&&0<m.length)for(var t=0;t<m.length;t++){if(0>c.indexOf(m[t])){L(11);r=!1;break a}}else{r=!1;break a}r=!0}n=r}var u=!1;if(d){var v=0<=e.indexOf(h);if(v)u=v;else{var w=La(e,m||[]);w&&L(10);u=w}}var x=!n||u;x||!(0<=m.indexOf("sandboxedScripts"))||c&&-1!==c.indexOf("sandboxedScripts")||(x=La(e,Tu));return f[h]=x}},Vu=!1;
Vu=!0;var Uu=function(){return Qu.test(z.location&&z.location.hostname)},Xu=function(){if(em){var a=function(b){var c=xf(b),d;if(Cf(c)){var e=c[Oe.na];if(!e)throw"Error: No function name given for function call.";var f=qf[e];d=!!f&&!!f.runInSiloedMode}else d=!!Ku(c[Oe.na],4);return d};R(93)?Mu(mm(),function(b){return a(b.entityId)}):Mu(mm(),a)}};var Zu=function(a,b,c,d,e){if(!Yu()&&!sm(a)){var f="?id="+encodeURIComponent(a)+"&l="+qi.fa,g=0===a.indexOf("GTM-");g||(f+="&cx=c");R(41)&&(f+="&gtm="+Am());var h=bp();h&&(f+="&sign="+qi.zf);var m=c?"/gtag/js":"/gtm.js",n=zi||Bi?ap(b,m+f):void 0;if(!n){var p=qi.wd+m;h&&Dc&&g&&(p=Dc.replace(/^(?:https?:\/\/)?/i,"").split(/[?#]/)[0]);n=Bo("https://","http://",p+f)}var q=a;d.siloed&&(vm({ctid:q,isDestination:!1}),q=gm(q));var r=q,t=um();am().container[r]={state:1,context:d,parent:t};bm({ctid:r,isDestination:!1},
e);Jc(n)}},$u=function(a,b,c,d){if(!Yu()&&!tm(a))if(wm())am().destination[a]={state:0,transportUrl:b,context:c,parent:um()},bm({ctid:a,isDestination:!0},d),L(91);else{var e="/gtag/destination?id="+encodeURIComponent(a)+"&l="+qi.fa+"&cx=c";R(41)&&(e+="&gtm="+Am());bp()&&(e+="&sign="+qi.zf);var f=zi||Bi?ap(b,e):void 0;f||(f=Bo("https://","http://",qi.wd+e));var g=a;c.siloed&&(vm({ctid:g,isDestination:!0}),g=gm(g));am().destination[g]={state:1,context:c,parent:um()};bm({ctid:g,isDestination:!0},d);Jc(f)}};
function Yu(){if($l()){return!0}return!1};var av=!1,bv=0,cv=[];function dv(a){if(!av){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){av=!0;for(var e=0;e<cv.length;e++)F(cv[e])}cv.push=function(){for(var f=0;f<arguments.length;f++)F(arguments[f]);return 0}}}function ev(){if(!av&&140>bv){bv++;try{C.documentElement.doScroll("left"),dv()}catch(a){z.setTimeout(ev,50)}}}var fv=function(a){av?a():cv.push(a)};var hv=function(a,b,c){return{entityType:a,indexInOriginContainer:b,nameInOriginContainer:c,originContainerId:lm()}};var jv=function(a,b){this.h=!1;this.F=[];this.M={tags:[]};this.X=!1;this.s=this.C=0;iv(this,a,b)},kv=function(a,b,c,d){if(ui.hasOwnProperty(b)||"__zone"===b)return-1;var e={};mb(d)&&(e=nb(d,e));e.id=c;e.status="timeout";return a.M.tags.push(e)-1},lv=function(a,b,c,d){var e=a.M.tags[b];e&&(e.status=c,e.executionTime=d)},mv=function(a){if(!a.h){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.h=!0;a.F.length=0}},iv=function(a,b,c){void 0!==b&&a.Bf(b);c&&z.setTimeout(function(){return mv(a)},Number(c))};
jv.prototype.Bf=function(a){var b=this,c=Va(function(){return F(function(){a(lm(),b.M)})});this.h?c():this.F.push(c)};var nv=function(a){a.C++;return Va(function(){a.s++;a.X&&a.s>=a.C&&mv(a)})},ov=function(a){a.X=!0;a.s>=a.C&&mv(a)};var pv={},rv=function(){return z[qv()]},sv=!1;
function qv(){return z.GoogleAnalyticsObject||"ga"}
var vv=function(a){},wv=function(a,b){return function(){var c=rv(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),m=0>g.indexOf("&tid="+b);m&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",
g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Bv={},Cv={};function Dv(a,b){if(mp){var c;c=b.match(/^(gtm|gtag)\./)?encodeURIComponent(b):"*";Bv[a]="&e="+c+"&eid="+a;wp(a)}}function Ev(a){var b=a.eventId,c=a.Zb;if(!Bv[b])return"";var d=Cv[b]?"":"&es=1";d+=Bv[b];c&&(Cv[b]=!0);return d};var Fv={};function Gv(a,b){mp&&(Fv[a]=Fv[a]||{},Fv[a][b]=(Fv[a][b]||0)+1)}function Hv(a){var b=a.eventId,c=a.Zb,d=Fv[b]||{},e=[],f;for(f in d)d.hasOwnProperty(f)&&e.push(""+f+d[f]);c&&delete Fv[b];return e.length?"&md="+e.join("."):""};var Iv={},Jv={aev:"1",c:"2",jsm:"3",v:"4",j:"5",smm:"6",rmm:"7",input:"8"};
function Kv(a,b,c){if(mp){Iv[a]=Iv[a]||[];var d=Jv[b]||"0",e;e=c instanceof z.Element?"1":c instanceof z.Event?"2":c instanceof z.RegExp?"3":c===z?"4":c===C?"5":c instanceof z.Promise?"6":c instanceof z.Storage?"7":c instanceof z.Date?"8":c instanceof z.History?"9":c instanceof z.Performance?"a":c===z.crypto?"b":c instanceof z.Location?"c":c instanceof z.Navigator?"d":"object"!==typeof c||mb(c)?"0":"e";Iv[a].push(""+d+e)}}
function Lv(a){var b=a.eventId,c=Iv[b]||[];if(!c.length)return"";a.Zb&&delete Iv[b];return"&pcr="+c.join(".")};var Mv={},Nv={};function Ov(a,b,c){if(mp&&b){var d=dp(b);Mv[a]=Mv[a]||[];Mv[a].push(c+d);var e=(Cf(b)?"1":"2")+d;Nv[a]=Nv[a]||[];Nv[a].push(e);wp(a)}}function Pv(a){var b=a.eventId,c=a.Zb,d="",e=Mv[b]||[];e.length&&(d+="&tr="+e.join("."));var f=Nv[b]||[];f.length&&(d+="&ti="+f.join("."));c&&(delete Mv[b],delete Nv[b]);return d};function Qv(a,b,c,d){var e=of[a],f=Rv(a,b,c,d);if(!f)return null;var g=zf(e[Oe.kj],c,[]);if(g&&g.length){var h=g[0];f=Qv(h.index,{onSuccess:f,onFailure:1===h.Aj?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Rv(a,b,c,d){function e(){if(f[Oe.Tk])h();else{var w=Af(f,c,[]),x=w[Oe.kk];if(null!=x)for(var y=0;y<x.length;y++)if(!ck(x[y])){h();return}var A=kv(c.Vb,String(f[Oe.na]),Number(f[Oe.oe]),w[Oe.Uk]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=Sa()-G;Ov(c.id,of[a],"5");lv(c.Vb,A,"success",D);R(16)&&ku(c,f,tt.H.nj);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=Sa()-G;Ov(c.id,of[a],"6");lv(c.Vb,A,"failure",D);R(16)&&ku(c,f,tt.H.mj);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=
c.id;c.priorityId&&(w.vtp_gtmPriorityId=c.priorityId);Ov(c.id,f,"1");var E=function(){ij(3);var D=Sa()-G;Ov(c.id,f,"7");lv(c.Vb,A,"exception",D);R(16)&&ku(c,f,tt.H.lj);B||(B=!0,h())};R(16)&&ju(c,f);var G=Sa();try{yf(w,{event:c,index:a,type:1})}catch(D){E(D)}R(16)&&ku(c,f,tt.H.oj)}}var f=of[a],g=b.onSuccess,h=b.onFailure,m=b.terminate;if(c.isBlocked(f))return null;var n=zf(f[Oe.pj],c,[]);if(n&&n.length){var p=n[0],q=Qv(p.index,{onSuccess:g,onFailure:h,terminate:m},c,d);if(!q)return null;g=q;h=2===
p.Aj?m:q}if(f[Oe.ej]||f[Oe.Wk]){var r=f[Oe.ej]?pf:c.jn,t=g,u=h;if(!r[a]){e=Va(e);var v=Sv(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function Sv(a,b,c){var d=[],e=[];b[a]=Tv(d,e,c);return{onSuccess:function(){b[a]=Uv;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Vv;for(var f=0;f<e.length;f++)e[f]()}}}function Tv(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Uv(a){a()}function Vv(a,b){b()};var Xv=function(a,b){return 1===arguments.length?Wv("set",a):Wv("set",a,b)},Yv=function(a,b){return 1===arguments.length?Wv("config",a):Wv("config",a,b)},Zv=function(a,b,c){c=c||{};c[N.g.Ob]=a;return Wv("event",b,c)};function Wv(a){return arguments}var $v=function(){this.h=[];this.s=[]};$v.prototype.enqueue=function(a,b,c){var d=this.h.length+1;a["gtm.uniqueEventId"]=b;a["gtm.priorityId"]=d;c.eventId=b;c.fromContainerExecution=!0;c.priorityId=d;var e={message:a,notBeforeEventId:b,priorityId:d,messageContext:c};this.h.push(e);for(var f=0;f<this.s.length;f++)try{this.s[f](e)}catch(g){}};$v.prototype.listen=function(a){this.s.push(a)};
$v.prototype.get=function(){for(var a={},b=0;b<this.h.length;b++){var c=this.h[b],d=a[c.notBeforeEventId];d||(d=[],a[c.notBeforeEventId]=d);d.push(c)}return a};$v.prototype.prune=function(a){for(var b=[],c=[],d=0;d<this.h.length;d++){var e=this.h[d];e.notBeforeEventId===a?b.push(e):c.push(e)}this.h=c;return b};var bw=function(a,b,c){c.eventMetadata=c.eventMetadata||{};c.eventMetadata.source_canonical_id=Tf.Ef;aw().enqueue(a,b,c)},ww=function(){var a=cw;aw().listen(a)};
function aw(){var a=ri.mb;a||(a=new $v,ri.mb=a);return a}
var Jw=function(a){var b=ri.zones;return b?b.getIsAllowedFn(hm(),a):function(){return!0}},Kw=function(a){var b=ri.zones;return b?b.isActive(hm(),a):!0},Lw=function(){R(93)?Ou(mm(),function(a){return Kw(a.originalEventData["gtm.uniqueEventId"])}):Ou(mm(),function(a,b){return Kw(b)});R(94)&&R(95)&&Mu(mm(),function(a){var b=a.entityId,c=a.securityGroups;return Jw(a.originalEventData["gtm.uniqueEventId"])(b,c)})};var Ow=function(a,b){for(var c=[],d=0;d<of.length;d++)if(a[d]){var e=of[d];var f=nv(b.Vb);try{var g=Qv(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=e[Oe.na];if(!h)throw"Error: No function name given for function call.";var m=qf[h];c.push({Yj:d,Oj:(m?m.priorityOverride||0:0)||Ku(e[Oe.na],1)||0,execute:g})}else Mw(d,b),f()}catch(p){f()}}c.sort(Nw);for(var n=0;n<c.length;n++)c[n].execute();return 0<c.length};
function Nw(a,b){var c,d=b.Oj,e=a.Oj;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Yj,h=b.Yj;f=g>h?1:g<h?-1:0}return f}
function Mw(a,b){if(mp){var c=function(d){var e=b.isBlocked(of[d])?"3":"4",f=zf(of[d][Oe.kj],b,[]);f&&f.length&&c(f[0].index);Ov(b.id,of[d],e);var g=zf(of[d][Oe.pj],b,[]);g&&g.length&&c(g[0].index)};c(a)}}var Rw=!1,Pw;
var Yw=function(a){var b=a["gtm.uniqueEventId"],c=a["gtm.priorityId"],d=a.event;if(R(16)){}if("gtm.js"===d){if(Rw)return!1;Rw=!0}var e,f=!1,g=Pu(),h;if(R(93)){var m=nb(a);h=g.every(function(w){return w({originalEventData:m})})}else h=g.every(function(w){return w(d,b)});if(h)e=Jw(b);else{if("gtm.js"!==d&&"gtm.init"!==d&&"gtm.init_consent"!==
d)return!1;f=!0;e=Jw(Number.MAX_SAFE_INTEGER)}Dv(b,d);var n=a.eventCallback,p=a.eventTimeout,q=nb(a),r={id:b,priorityId:c,name:d,isBlocked:Tw(e,q),jn:[],logMacroError:function(){L(6);ij(0)},cachedModelValues:Uw(),checkPixieIncompatibility:Vw(b),Vb:new jv(function(){if(R(16)){}n&&n.apply(n,[].slice.call(arguments,0))},p),originalEventData:q};R(32)&&(r.reportMacroDiscrepancy=Gv);R(16)&&fu(r.id,r.name);var t=Kf(r);R(16)&&gu(r.id,r.name);f&&(t=Ww(t));if(R(16)){}var u=Ow(t,r),v=!1;ov(r.Vb);"gtm.js"!==d&&"gtm.sync"!==d||vv(lm());return Xw(t,u)||v};function Vw(a){return function(b){pb(b)||Kv(a,"input",b)}}
function Uw(){var a={};a.event=Xi("event",1);a.ecommerce=Xi("ecommerce",1);a.gtm=Xi("gtm");a.eventModel=Xi("eventModel");return a}function Tw(a,b){var c=Wu(a);return R(94)?function(d){if(c(d))return!0;var e=d&&d[Oe.na];if(!e||"string"!=typeof e)return!0;e=e.replace(/^_*/,"");for(var f=Nu(),g=Ji[e]||[],h=ea(f),m=h.next();!m.done;m=h.next()){var n=m.value;try{if(!n({entityId:e,securityGroups:g,originalEventData:b}))return!0}catch(p){return!0}}return!1}:c}
function Ww(a){for(var b=[],c=0;c<a.length;c++)if(a[c]){var d=String(of[c][Oe.na]);if(ti[d]||void 0!==of[c][Oe.Xk]||Ki[d]||Ku(d,2))b[c]=!0}return b}function Xw(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&of[c]&&!ui[String(of[c][Oe.na])])return!0;return!1}var Nf;var Zw={},$w={},ax=function(a,b){for(var c=[],d=[],e={},f=0;f<a.length;e={Kh:void 0,qh:void 0},f++){var g=a[f];if(0<=g.indexOf("-")){if(e.Kh=yo(g,b),e.Kh){var h=jm();Ia(h,function(r){return function(t){return r.Kh.da===t}}(e))?c.push(g):d.push(g)}}else{var m=Zw[g]||[];e.qh={};m.forEach(function(r){return function(t){return r.qh[t]=!0}}(e));for(var n=hm(),p=0;p<n.length;p++)if(e.qh[n[p]]){c=c.concat(jm());break}var q=$w[g]||[];q.length&&(c=c.concat(q))}}return{Cm:c,Fm:d}},bx=function(a){l(Zw,function(b,
c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})},cx=function(a){l($w,function(b,c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})};var dx="HA GF G UA AW DC MC".split(" "),ex=!1,fx=!1;function gx(a,b){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Li()});b.eventId=a["gtm.uniqueEventId"];b.priorityId=a["gtm.priorityId"];return{eventId:b.eventId,priorityId:b.priorityId}}var hx=void 0,ix=void 0;function jx(a,b,c){var d=nb(a);d.eventId=void 0;d.inheritParentConfig=void 0;Object.keys(b).some(function(f){return void 0!==b[f]})&&L(136);var e=nb(b);nb(c,e);bw(Yv(hm()[0],e),a.eventId,d)}
function kx(a){for(var b=ea([N.g.Sd,N.g.Pb]),c=b.next();!c.done;c=b.next()){var d=c.value,e=a&&a[d]||Pp.C[d];if(e)return e}}
var lx={config:function(a,b){var c=R(33),d=gx(a,b);if(!(2>a.length)&&k(a[1])){var e={};if(2<a.length){if(void 0!=a[2]&&!mb(a[2])||3<a.length)return;e=a[2]}var f=yo(a[1],b.isGtmEvent);if(f){var g,h,m;a:{if(!dm.ie){var n=nm(um());if(ym(n)){var p=n.parent,q=p.isDestination;m={Lm:nm(p),Bm:q};break a}}m=void 0}var r=m;r&&(g=r.Lm,h=r.Bm);Dv(d.eventId,"gtag.config");var t=f.da,u=f.id!==t;if(u?-1===jm().indexOf(t):-1===hm().indexOf(t)){if(!(c&&b.inheritParentConfig||e[N.g.yb])){var v=kx(e);if(u)$u(t,v,{source:2,
fromContainerExecution:b.fromContainerExecution});else if(c&&void 0!==g&&-1!==g.containers.indexOf(t)){var w=e;hx?jx(b,w,hx):ix||(ix=nb(w))}else Zu(t,v,!0,{source:2,fromContainerExecution:b.fromContainerExecution})}}else{if(g&&(L(128),h&&L(130),c&&b.inheritParentConfig)){var x;var y=e;ix?(jx(b,ix,y),x=!1):(!y[N.g.Qb]&&wi&&hx||(hx=nb(y)),x=!0);x&&g.containers&&g.containers.join(",");return}if(wi&&!u&&!e[N.g.Qb]){var A=fx;fx=!0;if(A)return}ex||L(43);if(!b.noTargetGroup)if(u){cx(f.id);var B=f.id,E=e[N.g.Pd]||
"default";E=String(E).split(",");for(var G=0;G<E.length;G++){var D=$w[E[G]]||[];$w[E[G]]=D;0>D.indexOf(B)&&D.push(B)}}else{bx(f.id);var M=f.id,P=e[N.g.Pd]||"default";P=P.toString().split(",");for(var O=0;O<P.length;O++){var T=Zw[P[O]]||[];Zw[P[O]]=T;0>T.indexOf(M)&&T.push(M)}}delete e[N.g.Pd];var Y=b.eventMetadata||{};Y.hasOwnProperty("is_external_event")||(Y.is_external_event=!b.fromContainerExecution);b.eventMetadata=Y;delete e[N.g.Vc];for(var W=u?[f.id]:jm(),X=0;X<W.length;X++){var la=e,ka=W[X],
fa=nb(b),Da=yo(ka,fa.isGtmEvent);Da&&Pp.push("config",[la],Da,fa)}}}}},consent:function(a,b){if(3===a.length){L(39);var c=gx(a,b),d=a[1],e=a[2];b.fromContainerExecution||(e[N.g.N]&&L(139),e[N.g.Ea]&&L(140));"default"===d?Yj(e):"update"===d?Zj(e,c):"declare"===d?b.fromContainerExecution&&Xj(e):R(66)&&"core_platform_services"===d&&ak(e)}},event:function(a,b){var c=a[1];if(!(2>a.length)&&k(c)){var d;if(2<a.length){if(!mb(a[2])&&void 0!=a[2]||3<a.length)return;d=a[2]}var e=d,f={},g=(f.event=c,f);e&&(g.eventModel=
nb(e),e[N.g.Vc]&&(g.eventCallback=e[N.g.Vc]),e[N.g.Kd]&&(g.eventTimeout=e[N.g.Kd]));var h=gx(a,b),m=h.eventId,n=h.priorityId;g["gtm.uniqueEventId"]=m;n&&(g["gtm.priorityId"]=n);if("optimize.callback"===c)return g.eventModel=g.eventModel||{},g;var p;var q=d,r=q&&q[N.g.Ob];void 0===r&&(r=Si(N.g.Ob,2),void 0===r&&(r="default"));if(k(r)||Ha(r)){var t;b.isGtmEvent?t=k(r)?[r]:r:t=r.toString().replace(/\s+/g,"").split(",");var u=ax(t,b.isGtmEvent),v=u.Cm,w=u.Fm;if(w.length)for(var x=kx(q),y=0;y<w.length;y++){var A=
yo(w[y],b.isGtmEvent);A&&$u(A.da,x,{source:3,fromContainerExecution:b.fromContainerExecution})}p=Ao(v,b.isGtmEvent)}else p=void 0;var B=p;if(B){Dv(m,c);for(var E=[],G=0;G<B.length;G++){var D=B[G],M=nb(b);if(-1!==dx.indexOf(om(D.prefix))){var P=nb(d),O=M.eventMetadata||{};O.hasOwnProperty("is_external_event")||(O.is_external_event=!M.fromContainerExecution);M.eventMetadata=O;delete P[N.g.Vc];Rp(c,P,D.id,M)}E.push(D.id)}g.eventModel=g.eventModel||{};0<B.length?g.eventModel[N.g.Ob]=E.join():delete g.eventModel[N.g.Ob];
ex||L(43);void 0===b.noGtmEvent&&b.eventMetadata&&b.eventMetadata.syn_or_mod&&(b.noGtmEvent=!0);g.eventModel[N.g.Lb]&&(b.noGtmEvent=!0);return b.noGtmEvent?void 0:g}}},get:function(a,b){L(53);if(4===a.length&&k(a[1])&&k(a[2])&&Fa(a[3])){var c=yo(a[1],b.isGtmEvent),d=String(a[2]),e=a[3];if(c){ex||L(43);var f=kx();if(!Ia(jm(),function(h){return c.da===h}))$u(c.da,f,{source:4,fromContainerExecution:b.fromContainerExecution});else if(-1!==dx.indexOf(om(c.prefix))){gx(a,b);var g={};Uj(nb((g[N.g.lb]=d,
g[N.g.wb]=e,g)));Sp(d,function(h){F(function(){return e(h)})},c.id,b)}}}},js:function(a,b){if(2==a.length&&a[1].getTime){ex=!0;var c=gx(a,b),d=c.eventId,e=c.priorityId,f={};return f.event="gtm.js",f["gtm.start"]=a[1].getTime(),f["gtm.uniqueEventId"]=d,f["gtm.priorityId"]=e,f}},policy:function(a){if(3===a.length&&k(a[1])&&Fa(a[2])){Of(a[1],a[2]);if(L(74),"all"===a[1]){L(75);var b=!1;try{b=a[2](lm(),"unknown",{})}catch(c){}b||L(76)}}else{
L(73);}},set:function(a,b){var c;2==a.length&&mb(a[1])?c=nb(a[1]):3==a.length&&k(a[1])&&(c={},mb(a[2])||Ha(a[2])?c[a[1]]=nb(a[2]):c[a[1]]=a[2]);if(c){var d=gx(a,b),e=d.eventId,f=d.priorityId;nb(c);var g=nb(c);Pp.push("set",[g],void 0,b);c["gtm.uniqueEventId"]=e;f&&(c["gtm.priorityId"]=f);R(9)&&delete c.event;b.overwriteModelFields=!0;return c}}},mx={policy:!0};var nx=function(a){var b=z[qi.fa].hide;if(b&&void 0!==b[a]&&b.end){b[a]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}},ox=function(a){var b=z[qi.fa],c=b&&b.hide;c&&c.end&&(c[a]=!0)};var px=!1,qx=[];function rx(){if(!px){px=!0;for(var a=0;a<qx.length;a++)F(qx[a])}}var sx=function(a){px?F(a):qx.push(a)};var Jx=function(a){if(Ix(a))return a;this.h=a};Jx.prototype.getUntrustedMessageValue=function(){return this.h};var Ix=function(a){return!a||"object"!==jb(a)||mb(a)?!1:"getUntrustedMessageValue"in a};Jx.prototype.getUntrustedMessageValue=Jx.prototype.getUntrustedMessageValue;var Kx=0,Lx={},Mx=[],Nx=[],Ox=!1,Px=!1;function Qx(a,b){return a.messageContext.eventId-b.messageContext.eventId||a.messageContext.priorityId-b.messageContext.priorityId}
var Rx=function(a){return z[qi.fa].push(a)},Sx=function(a,b,c){a.eventCallback=b;c&&(a.eventTimeout=c);return Rx(a)},Tx=function(a,b){if(!Ga(b)||0>b)b=0;var c=ri[qi.fa],d=0,e=!1,f=void 0;f=z.setTimeout(function(){e||(e=!0,a());f=void 0},b);return function(){var g=c?c.subscribers:1;++d===g&&(f&&(z.clearTimeout(f),f=void 0),e||(a(),e=!0))}};
function Ux(a,b){var c=a._clear||b.overwriteModelFields;l(a,function(e,f){"_clear"!==e&&(c&&Vi(e),Vi(e,f))});Gi||(Gi=a["gtm.start"]);var d=a["gtm.uniqueEventId"];if(!a.event)return!1;"number"!==typeof d&&(d=Li(),a["gtm.uniqueEventId"]=d,Vi("gtm.uniqueEventId",d));return Yw(a)}
function Vx(a){if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ma(a)){var b=a[0];if("config"===b||"event"===b||"js"===b||"get"===b)return!0}return!1}
function Wx(){var a;if(Nx.length)a=Nx.shift();else if(Mx.length)a=Mx.shift();else return;var b;var c=a;if(Ox||!Vx(c.message))b=c;else{Ox=!0;var d=c.message["gtm.uniqueEventId"];"number"!==typeof d&&(d=c.message["gtm.uniqueEventId"]=Li());var e={},f={message:(e.event="gtm.init_consent",e["gtm.uniqueEventId"]=d-2,e),messageContext:{eventId:d-2}},g={},h={message:(g.event="gtm.init",g["gtm.uniqueEventId"]=d-1,g),messageContext:{eventId:d-1}};Mx.unshift(h,c);if(mp){var m=Tf.ctid;if(m){var n,p=nm(um());
n=p&&p.context;var q,r=Lm(z.location.href);q=r.hostname+r.pathname;var t=n&&n.fromContainerExecution,u=n&&n.source,v=Tf.Ef,w=dm.ie;mp&&(Ap||(Ap=q),Bp.push(m+";"+v+";"+(t?1:0)+";"+(u||0)+";"+(w?1:0)))}}b=f}return b}
function Xx(){for(var a=!1,b;!Px&&(b=Wx());){Px=!0;delete Pi.eventModel;Ri();var c=b,d=c.message,e=c.messageContext;if(null==d)Px=!1;else{e.fromContainerExecution&&Wi();try{if(Fa(d))try{d.call(Ti)}catch(x){}else if(Ha(d)){var f=d;if(k(f[0])){var g=f[0].split("."),h=g.pop(),m=f.slice(1),n=Si(g.join("."),2);if(null!=n)try{n[h].apply(n,m)}catch(x){}}}else{var p=void 0,q=!1;if(Ma(d)){a:{if(d.length&&k(d[0])){var r=lx[d[0]];if(r&&(!e.fromContainerExecution||!mx[d[0]])){p=r(d,e);break a}}p=void 0}(q=p&&
"set"===d[0]&&!!p.event)&&L(101)}else p=d;if(p){var t=Ux(p,e);a=t||a;q&&t&&L(113)}}}finally{e.fromContainerExecution&&Ri(!0);var u=d["gtm.uniqueEventId"];if("number"===typeof u){for(var v=Lx[String(u)]||[],w=0;w<v.length;w++)Nx.push(Yx(v[w]));v.length&&Nx.sort(Qx);delete Lx[String(u)];u>Kx&&(Kx=u)}Px=!1}}}return!a}
function Zx(){if(R(16)){var a=$x();}var b=Xx();if(R(16)){}try{nx(lm())}catch(c){}return b}
function cw(a){if(Kx<a.notBeforeEventId){var b=String(a.notBeforeEventId);Lx[b]=Lx[b]||[];Lx[b].push(a)}else Nx.push(Yx(a)),Nx.sort(Qx),F(function(){Px||Xx()})}function Yx(a){return{message:a.message,messageContext:a.messageContext}}
var ay=function(){function a(f){var g={};if(Ix(f)){var h=f;f=Ix(h)?h.getUntrustedMessageValue():void 0;g.fromContainerExecution=!0}return{message:f,messageContext:g}}var b=Ec(qi.fa,[]),c=ri[qi.fa]=ri[qi.fa]||{};!0===c.pruned&&L(83);Lx=aw().get();ww();fv(function(){if(!c.gtmDom){c.gtmDom=!0;var f={};b.push((f.event="gtm.dom",f))}});sx(function(){if(!c.gtmLoad){c.gtmLoad=!0;var f={};b.push((f.event="gtm.load",f))}});c.subscribers=(c.subscribers||0)+1;var d=b.push;b.push=function(){var f;if(0<ri.SANDBOXED_JS_SEMAPHORE){f=
[];for(var g=0;g<arguments.length;g++)f[g]=new Jx(arguments[g])}else f=[].slice.call(arguments,0);var h=f.map(function(q){return a(q)});Mx.push.apply(Mx,h);var m=d.apply(b,f),n=Math.max(100,Number("1000")||300);if(this.length>n)for(L(4),c.pruned=!0;this.length>n;)this.shift();var p="boolean"!==typeof m||m;return Xx()&&p};var e=b.slice(0).map(function(f){return a(f)});Mx.push.apply(Mx,e);if($x()){if(R(16)){}F(Zx)}},$x=function(){var a=!0;return a};function by(a){if(null==a||0===a.length)return!1;var b=Number(a),c=Sa();return b<c+3E5&&b>c-9E5}function cy(a){return a&&0===a.indexOf("pending:")?by(a.substr(8)):!1};
var xy=function(){};var yy=function(){};yy.prototype.toString=function(){return"undefined"};var zy=new yy;var gz=z.clearTimeout,hz=z.setTimeout,iz=function(a,b,c,d){if($l()){b&&F(b)}else return Jc(a,b,c,d)},jz=function(){return new Date},kz=function(){return z.location.href},lz=function(a){return Gm(Lm(a),"fragment")},mz=function(a){return Hm(Lm(a))},nz=function(a,b){return Si(a,b||2)},oz=function(a,b,c){return b?Sx(a,b,c):Rx(a)},pz=function(a,b){z[a]=b},U=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},
qz=function(a,b,c){return Hl(a,b,void 0===c?!0:!!c)},rz=function(a,b,c){return 0===Ql(a,b,c)},sz=function(a,b){if($l()){b&&F(b)}else Mc(a,b)},tz=function(a){return!!Ky(a,"init",!1)},uz=function(a){Iy(a,"init",!0)},vz=function(a,b,c){pb(a)||Kv(c,b,a)};

function Sz(a,b){function c(g){var h=Lm(g),m=Gm(h,"protocol"),n=Gm(h,"host",!0),p=Gm(h,"port"),q=Gm(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"===m&&"80"===p||"https"===m&&"443"===p)m="web",p="default";return[m,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Tz(a){return Uz(a)?1:0}
function Uz(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Array.isArray(c)){for(var d=0;d<c.length;d++){var e=nb(a,{});nb({arg1:c[d],any_of:void 0},e);if(Tz(e))return!0}return!1}switch(a["function"]){case "_cn":return tg(b,c);case "_css":var f;a:{if(b)try{for(var g=0;g<pg.length;g++){var h=pg[g];if(b[h]){f=b[h](c);break a}}}catch(m){}f=!1}return f;case "_ew":return qg(b,c);case "_eq":return ug(b,c);case "_ge":return vg(b,c);case "_gt":return xg(b,c);case "_lc":return 0<=String(b).split(",").indexOf(String(c));
case "_le":return wg(b,c);case "_lt":return yg(b,c);case "_re":return sg(b,c,a.ignore_case);case "_sw":return zg(b,c);case "_um":return Sz(b,c)}return!1};function Vz(){var a=["&cv=1","&rv="+qi.Ug,"&tc="+of.filter(function(b){return b}).length];qi.me&&a.push("&x="+qi.me);Ni()&&a.push("&tag_exp="+Ni());return a.join("")};function Wz(){var a=qj();return a.length?"&exp_geo="+a:""}var Xz;function Yz(){try{null!=Xz||(Xz=(new Intl.DateTimeFormat).resolvedOptions().timeZone)}catch(b){}var a;return(null==(a=Xz)?0:a.length)?"&exp_tz="+Xz:""};var Zz=function(){return!1},$z=function(){var a={};return function(b,c,d){}};function aA(){var a=bA;return function(b,c,d){var e=d&&d.event;cA(c);var f=0===b.indexOf("__cvt_")?void 0:1,g=new sb;l(c,function(r,t){var u=md(t,void 0,f);void 0===u&&void 0!==t&&L(44);g.set(r,u)});a.h.h.F=Hf();var h={uj:Xf(b),eventId:void 0!==e?e.id:void 0,priorityId:void 0!==e?e.priorityId:void 0,Bf:void 0!==e?function(r){return e.Vb.Bf(r)}:void 0,wc:function(){return b},log:function(){},Fl:{index:d&&d.index,type:d&&d.type,name:d&&d.name},Wm:!!Ku(b,3),originalEventData:null==e?void 0:e.originalEventData};
e&&e.cachedModelValues&&(h.cachedModelValues={gtm:e.cachedModelValues.gtm,ecommerce:e.cachedModelValues.ecommerce});if(Zz()){var m=$z(),n=void 0,p=void 0;h.eb={Vh:[],pe:{},pb:function(r,t,u){1===t&&(n=r);7===t&&(p=u);m(r,t,u)},Dh:ph()};h.log=function(r,t){if(n){var u=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:p,message:u})}}}var q=Ke(a,h,[b,g]);a.h.h.F=void 0;q instanceof wa&&"return"===q.h&&(q=q.s);return nd(q,void 0,f)}}
function cA(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){F(b)});Fa(c)&&(a.gtmOnFailure=function(){F(c)})};function dA(a,b){var c=this;}dA.O="addConsentListener";var eA;var fA=function(a){for(var b=0;b<a.length;++b)if(eA)try{a[b]()}catch(c){L(77)}else a[b]()};function gA(a,b,c){var d=this,e;return e}gA.D="internal.addDataLayerEventListener";function hA(a,b,c){}hA.O="addDocumentEventListener";function iA(a,b,c,d){}iA.O="addElementEventListener";function jA(a){}jA.O="addEventCallback";
function nA(a){}nA.D="internal.addFormAbandonmentListener";function oA(a,b,c,d){}oA.D="internal.addFormData";var pA={},qA=[],rA={},sA=0,tA=0;
function AA(a,b){}AA.D="internal.addFormInteractionListener";
function HA(a,b){}HA.D="internal.addFormSubmitListener";
function MA(a){}MA.D="internal.addGaSendListener";var NA=function(a,b){this.tagId=a;this.uc=b};
function OA(a,b,c){var d=this;}
OA.D="internal.loadGoogleTag";function PA(a){return new ed("",function(b){b=H(this,b);if(b instanceof ed)return new ed("",function(){var c=ta.apply(0,arguments),d=this,e=nb(this.h.h);e.eventId=a.eventId;e.priorityId=a.priorityId;e.originalEventData=a.originalEventData;var f=c.map(function(h){return H(d,h)}),g=Ba(this.h);g.h=e;return b.ab.apply(b,[g].concat(ia(f)))})})};function QA(a,b,c){var d=this;}
QA.D="internal.addGoogleTagRestriction";var RA={},SA=[];
var ZA=function(a,b){};
ZA.D="internal.addHistoryChangeListener";function $A(a,b,c){}$A.O="addWindowEventListener";function aB(a,b){return!0}aB.O="aliasInWindow";function bB(a,b,c){}bB.D="internal.appendRemoteConfigParameter";function cB(){var a=2;return a};function dB(a,b){var c;return c}dB.O="callInWindow";function eB(a){}eB.O="callLater";function fB(a){}fB.D="callOnDomReady";function gB(a){}gB.D="callOnWindowLoad";function hB(a,b){var c;return c}hB.D="internal.computeGtmParameter";function iB(a,b){var c;var d=md(c,this.h,cB());void 0===d&&void 0!==c&&L(45);return d}iB.O="copyFromDataLayer";
function jB(a){var b=void 0;return b}jB.D="internal.copyFromDataLayerCache";function kB(a){var b;return b}kB.O="copyFromWindow";function lB(a){var b=void 0;return md(b,this.h,cB())}lB.D="internal.copyKeyFromWindow";function mB(a,b){var c;return c}mB.D="internal.copyPreHit";function nB(a,b){var c=null,d=cB();return md(c,this.h,d)}nB.O="createArgumentsQueue";function oB(a){var b;return md(b,this.h,1)}oB.D="internal.createGaCommandQueue";function pB(a){var b;return md(b,this.h,
cB())}pB.O="createQueue";function qB(a,b){var c=null;return c}qB.D="internal.createRegex";function rB(a){if(!a)return{};var b=a.Fl;return hv(b.type,b.index,b.name)}function sB(a){return a?{originatingEntity:rB(a)}:{}};function tB(a){}tB.D="internal.declareConsentState";function uB(a){var b="";return b}uB.D="internal.decodeUrlHtmlEntities";function vB(a,b,c){var d;return d}vB.D="internal.decorateUrlWithGaCookies";function wB(a){var b;K(this,"detect_user_provided_data","auto");var c=nd(a)||{},d=tr({md:!!c.includeSelector,nd:!!c.includeVisibility,ue:c.excludeElementSelectors,ob:c.fieldFilters,Th:!!c.selectMultipleElements});b=new sb;var e=new rb;b.set("elements",e);for(var f=d.elements,g=0;g<f.length;g++)e.push(xB(f[g]));void 0!==d.Mh&&b.set("preferredEmailElement",xB(d.Mh));b.set("status",d.status);
return b}
var xB=function(a){var b=new sb;b.set("userData",a.U);b.set("tagName",a.tagName);void 0!==a.querySelector&&b.set("querySelector",a.querySelector);void 0!==a.isVisible&&b.set("isVisible",a.isVisible);if(R(30)){}else switch(a.type){case "1":b.set("type","email")}return b};wB.D="internal.detectUserProvidedData";
function AB(a,b){return b}AB.D="internal.enableAutoEventOnClick";
function FB(a,b){return b}FB.D="internal.enableAutoEventOnElementVisibility";function GB(){}GB.D="internal.enableAutoEventOnError";var HB={},IB=[],JB={},KB=0,LB=0;
function RB(a,b){var c=this;return b}RB.D="internal.enableAutoEventOnFormInteraction";
function WB(a,b){var c=this;return b}WB.D="internal.enableAutoEventOnFormSubmit";
function aC(){var a=this;}aC.D="internal.enableAutoEventOnGaSend";var bC={},cC=[];
function jC(a,b){var c=this;return b}jC.D="internal.enableAutoEventOnHistoryChange";var kC=["http://","https://","javascript:","file://"];
function oC(a,b){var c=this;return b}oC.D="internal.enableAutoEventOnLinkClick";var pC,qC;
function BC(a,b){var c=this;
return b}BC.D="internal.enableAutoEventOnScroll";function CC(a){return function(){if(a.Ac&&a.Cc>=a.Ac)a.yc&&z.clearInterval(a.yc);else{a.Cc++;var b=Sa();Rx({event:a.eventName,"gtm.timerId":a.yc,"gtm.timerEventNumber":a.Cc,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.Ac,"gtm.timerStartTime":a.Se,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Se,"gtm.triggers":a.Xh})}}}
function DC(a,b){
return b}DC.D="internal.enableAutoEventOnTimer";var xc=ca(["data-gtm-yt-inspected-"]),EC=["www.youtube.com","www.youtube-nocookie.com"],FC,GC=!1;
function QC(a,b){var c=this;return b}QC.D="internal.enableAutoEventOnYouTubeActivity";var RC;function SC(a){var b=!1;return b}SC.D="internal.evaluateMatchingRules";
var TC=function(a,b){var c;b?(c=[et,Zs,it,jt,lt,Ws,$s,ot],R(98)&&c.push(uq),c=c.concat([at,mt,nt,gt,Xs,st,bt,kt,Us,Ts,pt,Qs])):c=[tq,Vs,Ls,Ys,Ms,Ns,Os,Ps,ct,dt,ft,ht,qt,rt];for(var d=0;d<c.length&&(c[d](a),!a.isAborted);d++);},UC=function(a,b,c,d){var e=new Ro(b,c,d);e.metadata.hit_type=a;e.metadata.speculative=!0;e.metadata.event_start_timestamp_ms=Sa();e.metadata.speculative_in_message=d.eventMetadata.speculative;return e},VC=function(a,b,c,d){function e(){for(var r=0;r<g.length;r++){var t=g[r];
t.isAborted||(TC(g[r],!0),t.metadata.speculative||t.isAborted||Du(t))}}var f=yo(a,d.isGtmEvent);if(f){var g=[];if(d.eventMetadata.hit_type_override){var h=d.eventMetadata.hit_type_override;Array.isArray(h)||(h=[h]);for(var m=0;m<h.length;m++){var n=UC(h[m],f,b,d);n.metadata.speculative=!1;g.push(n)}}else b===N.g.sa&&g.push(UC("landing_page",f,b,d)),g.push(UC("conversion",f,b,d)),g.push(UC("user_data_lead",f,b,d)),g.push(UC("user_data_web",f,b,d)),g.push(UC("remarketing",f,b,d));for(var p=0;p<g.length;p++)TC(g[p],
!1);var q=[N.g.J];R(48)&&q.push(N.g.N);fk(function(){for(var r=[],t=[],u=0;u<g.length;u++){var v=g[u];r.push(v.isAborted);t.push(v.metadata.speculative)}e();ck(q)||ek(function(w){var x=w.consentEventId,y=w.consentPriorityId;if(ck(q)){for(var A=0;A<g.length;A++){var B=g[A];B.metadata.consent_updated=!0;B.metadata.speculative=t[A];B.metadata.event_start_timestamp_ms=Sa();B.isAborted=r[A];B.metadata.consent_event_id=x;B.metadata.consent_priority_id=y}e()}},q)},q)}};var wD=function(){var a=!0;ml(7)&&ml(9)&&ml(10)||(a=!1);return a};function rE(a,b,c,d){}rE.D="internal.executeEventProcessor";function sE(a){var b=void 0;return md(b,this.h,1)}sE.D="internal.executeJavascriptString";var tE=function(a){var b;return b};function uE(){var a=new sb;return a}uE.O="getContainerVersion";function vE(a,b){b=void 0===b?!0:b;var c;return c}vE.O="getCookieValues";function wE(){return qj()}wE.D="internal.getCountryCode";function xE(){var a=[];a=jm();return md(a)}xE.D="internal.getDestinationIds";function yE(a,b){var c="";return c}yE.D="internal.getElementAttribute";function zE(a){var b=null;return b}zE.D="internal.getElementById";function AE(a){var b="";return b}AE.D="internal.getElementInnerText";function BE(a,b){var c=null;return c}BE.D="internal.getElementProperty";function CE(a){var b;return b}CE.D="internal.getElementValue";function DE(a){var b=0;return b}DE.D="internal.getElementVisibilityRatio";function EE(a){var b=null;return b}EE.D="internal.getElementsByCssSelector";
function FE(a){var b=void 0;return b}FE.D="internal.getEventData";var GE={};GE.enableAWFledge=R(6);GE.enableAdsConversionValidation=R(21);GE.enableAutoPiiOnPhoneAndAddress=R(30);GE.enableCachedEcommerceData=R(89);GE.enableCcdPreAutoPiiDetection=R(11);GE.enableCloudRecommentationsErrorLogging=R(73);GE.enableCloudRecommentationsSchemaIngestion=R(72);GE.enableCloudRetailInjectPurchaseMetadata=R(71);GE.enableCloudRetailLogging=R(70);GE.enableCloudRetailPageCategories=R(17);GE.enableConsentDisclosureActivity=R(35);GE.enableDCFledge=R(7);GE.enableDecodeUri=R(53);
GE.enableDeferAllEnhancedMeasurement=R(37);GE.enableDirectTagLoadingInGoogleTag=R(64);GE.enableEuidAutoMode=R(10);GE.enableFormSkipValidation=R(31);GE.enableLoadGoogleTagOptionsObject=R(68);GE.enableUrlDecodeEventUsage=R(47);GE.enableV1HistoryEventInApi=R(78);GE.loadContainerForGtmEventTags=R(34);GE.useEnableAutoEventOnFormApis=R(22);GE.autoPiiEligible=uj();function HE(){return md(GE)}HE.D="internal.getFlags";function IE(){return new jd(zy)}IE.D="internal.getHtmlId";function JE(a,b){var c;J(I(this),["targetId:!string","name:!string"],arguments);var d=Qo(a)||{};c=md(d[b],this.h);return c}JE.D="internal.getProductSettingsParameter";function KE(a,b){var c;return c}KE.O="getQueryParameters";function LE(a,b){var c;return c}LE.O="getReferrerQueryParameters";function ME(a){var b="";return b}ME.O="getReferrerUrl";function NE(){return rj()}NE.D="internal.getRegionCode";function OE(a,b){var c;return c}OE.D="internal.getRemoteConfigParameter";function PE(a){var b="";return b}PE.O="getUrl";function QE(){K(this,"get_user_agent");return Cc.userAgent}QE.O="getUserAgent";function aF(){return z.gaGlobal=z.gaGlobal||{}}var bF=function(){var a=aF();a.hid=a.hid||Ja();return a.hid},cF=function(a,b){var c=aF();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var KF=function(a){this.s=a;this.C="";this.h=this.s},LF=function(a,b){a.h=b;return a};function MF(a){var b=a.search;return a.protocol+"//"+a.hostname+a.pathname+(b?b+"&richsstsse":"?richsstsse")}function NF(a,b,c){if(a){var d=a||[],e=mb(b)?b:{};if(Array.isArray(d))for(var f=0;f<d.length;f++)c(d[f],e)}};var bG=window,cG=document,dG=function(a){var b=bG._gaUserPrefs;if(b&&b.ioo&&b.ioo()||cG.documentElement.hasAttribute("data-google-analytics-opt-out")||a&&!0===bG["ga-disable-"+a])return!0;try{var c=bG.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=El("AMP_TOKEN",String(cG.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return cG.getElementById("__gaOptOutExtension")?!0:!1};
function mG(a){l(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[N.g.Ya]||{};l(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var uG=function(a,b){};function tG(a,b){var c=function(){};return c}
function vG(a,b,c){};var wG=tG;function yG(a,b,c){var d=this;}yG.D="internal.gtagConfig";function zG(){var a={};return a};
function BG(a,b){}BG.O="gtagSet";function CG(a,b){}CG.O="injectHiddenIframe";function DG(a,b,c,d,e){}DG.D="internal.injectHtml";var HG={};
function JG(a,b,c,d){}var KG=Object.freeze({dl:1,id:1}),LG={};
function MG(a,b,c,d){}JG.O="injectScript";MG.D="internal.injectScript";function NG(a){var b=!0;J(I(this),["consentType:!string"],arguments),K(this,"access_consent",a,"read"),b=ck(a);return b}NG.O="isConsentGranted";var OG=function(){var a=kh(function(b){this.h.h.log("error",b)});a.O="JSON";return a};function PG(a){var b=void 0;return md(b)}PG.D="internal.legacyParseUrl";var QG=function(){return!1},RG={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function SG(){}SG.O="logToConsole";function TG(a,b){}TG.D="internal.mergeRemoteConfig";function UG(a,b,c){c=void 0===c?!0:c;var d=[];return d}UG.D="internal.parseCookieValuesFromString";function VG(a){var b=void 0;return b}VG.O="parseUrl";function WG(a){}WG.D="internal.processAsNewEvent";function XG(a,b,c){var d;return d}XG.D="internal.pushToDataLayer";function YG(a,b){var c=!1;return c}YG.O="queryPermission";function ZG(){var a="";return a}ZG.O="readCharacterSet";function $G(){return qi.fa}$G.D="internal.readDataLayerName";function aH(){var a="";return a}aH.O="readTitle";function bH(a,b){var c=this;J(I(this),["destinationId:!string","callback:!Fn"],arguments),Xo(a,function(d){b.invoke(c.h,md(d,c.h,1))});}bH.D="internal.registerCcdCallback";function cH(a){return!0}cH.D="internal.registerDestination";var dH=Object.freeze(["config","event","get","set"]);function eH(a,b,c){}eH.D="internal.registerGtagCommandListener";function fH(a,b){var c=!1;return c}fH.D="internal.removeDataLayerEventListener";function gH(a,b){}
gH.D="internal.removeFormData";function hH(){}hH.O="resetDataLayer";function iH(a,b,c,d){}iH.D="internal.sendGtagEvent";function jH(a,b,c){}jH.O="sendPixel";function kH(a,b){}kH.D="internal.setAnchorHref";function lH(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f}lH.O="setCookie";function mH(a,b){}mH.D="internal.setCorePlatformServices";function nH(a,b){}nH.D="internal.setDataLayerValue";function oH(a){}oH.O="setDefaultConsentState";function pH(a,b){}pH.D="internal.setDelegatedConsentType";function qH(a,b){}qH.D="internal.setFormAction";function rH(a,b,c){return!1}rH.O="setInWindow";function sH(a,b,c){J(I(this),["targetId:!string","name:!string","value:!*"],arguments);var d=Qo(a)||{};d[b]=nd(c,this.h);var e=a;Oo||Po();No[e]=d;}sH.D="internal.setProductSettingsParameter";function tH(a,b,c){J(I(this),["targetId:!string","name:!string","value:!*"],arguments);for(var d=b.split("."),e=Up(a),f=0;f<d.length-1;f++){if(void 0===e[d[f]])e[d[f]]={};else if(!mb(e[d[f]]))throw Error("setRemoteConfigParameter failed, path contains a non-object type: "+d[f]);e=e[d[f]]}e[d[f]]=nd(c,this.h,1);}tH.D="internal.setRemoteConfigParameter";function uH(a,b){var c=this;}uH.D="internal.setupConversionLinker";function vH(a,b,c,d){var e=this;}vH.O="sha256";function wH(a,b,c){}
wH.D="internal.sortRemoteConfigParameters";var xH={},yH={};xH.O="templateStorage";xH.getItem=function(a){var b=null;return b};
xH.setItem=function(a,b){};
xH.removeItem=function(a){};xH.clear=function(){};function zH(a,b){var c=!1;return c}zH.D="internal.testRegex";var AH=function(a){var b;return b};function BH(a){var b;return b}BH.D="internal.unsiloId";function CH(a){}CH.O="updateConsentState";var DH;function EH(a,b,c){DH=DH||new uh;DH.add(a,b,c)}function FH(a,b){var c=DH=DH||new uh;if(c.s.hasOwnProperty(a))throw"Attempting to add a private function which already exists: "+a+".";if(c.h.hasOwnProperty(a))throw"Attempting to add a private function with an existing API name: "+a+".";c.s[a]=Fa(b)?Mg(a,b):Ng(a,b)}
function GH(){return function(a){var b;var c=DH;if(c.h.hasOwnProperty(a))b=c.get(a,this);else{var d;if(d=c.s.hasOwnProperty(a)){var e=!1,f=this.h.h;if(f){var g=f.wc();if(g){0!==g.indexOf("__cvt_")&&(e=!0);}}else e=!0;d=e}if(d){var h=c.s.hasOwnProperty(a)?c.s[a]:void 0;b=h}else throw Error(a+" is not a valid API name.");}return b}};var HH=function(){var a=function(c){return FH(c.D,c)},b=function(c){return EH(c.O,c)};b(dA);b(jA);b(aB);b(dB);b(eB);b(iB);b(kB);b(nB);b(OG());b(pB);b(uE);b(vE);b(KE);b(LE);b(ME);b(PE);b(BG);b(CG);b(JG);b(NG);b(SG);b(VG);b(YG);b(ZG);b(aH);b(jH);b(lH);b(oH);b(rH);b(vH);b(xH);b(CH);EH("Math",Sg());EH("Object",sh);EH("TestHelper",wh());EH("assertApi",Og);EH("assertThat",Pg);EH("decodeUri",Tg);EH("decodeUriComponent",Ug);EH("encodeUri",Vg);EH("encodeUriComponent",Wg);EH("fail",bh);EH("generateRandom",
ch);EH("getTimestamp",dh);EH("getTimestampMillis",dh);EH("getType",jh);EH("makeInteger",lh);EH("makeNumber",mh);EH("makeString",nh);EH("makeTableMap",oh);EH("mock",rh);EH("fromBase64",tE,!("atob"in z));EH("localStorage",RG,!QG());EH("toBase64",AH,!("btoa"in z));a(gA);a(oA);a(AA);a(HA);a(MA);a(QA);a(ZA);a(bB);a(fB);a(gB);a(jB);a(lB);a(mB);a(oB);a(qB);a(tB);a(uB);a(wB);a(AB);a(FB);a(GB);a(RB);a(WB);a(aC);a(jC);a(oC);a(BC);a(DC);a(QC);a(Xg);a(SC);a(rE);a(sE);a(wE);a(xE);a(yE);a(zE);a(AE);a(BE);a(CE);
a(DE);a(EE);a(FE);a(HE);a(IE);a(JE);a(NE);a(OE);a(yG);a(MG);a(PG);a(OA);a(TG);a(UG);a(WG);a(XG);a($G);a(bH);a(cH);a(eH);a(fH);a(gH);a(iH);a(kH);a(mH);a(pH);a(qH);a(sH);a(tH);a(wH);a(zH);FH("internal.GtagSchema",zG());R(56)&&a(DG);R(84)&&a(vB);R(90)&&a(BH);R(88)&&a(nH);R(101)&&a(uH);return GH()};var bA;function IH(){bA.h.h.M=function(a,b,c){ri.SANDBOXED_JS_SEMAPHORE=ri.SANDBOXED_JS_SEMAPHORE||0;ri.SANDBOXED_JS_SEMAPHORE++;try{return a.apply(b,c)}finally{ri.SANDBOXED_JS_SEMAPHORE--}}}function JH(a){void 0!==a&&l(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ji[e]=Ji[e]||[];Ji[e].push(b)}})};var KH=encodeURI,V=encodeURIComponent,LH=function(a,b,c){Nc(a,b,c)},MH=function(a,b){if(!a)return!1;var c=Gm(Lm(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},NH=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&
a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var Z={securityGroups:{}};

Z.securityGroups.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.isVendorTemplate=!0;Z.__e.priorityOverride=0;Z.__e.isInfrastructure=!1;Z.__e.runInSiloedMode=!0})(function(a){return String(a.vtp_gtmCachedValues.event)})}();Z.securityGroups.v=["google"],function(){(function(a){Z.__v=a;Z.__v.m="v";Z.__v.isVendorTemplate=!0;Z.__v.priorityOverride=0;Z.__v.isInfrastructure=!1;Z.__v.runInSiloedMode=!1})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=nz(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;vz(d,"v",a.vtp_gtmEventId);return d})}();




Z.securityGroups.rep=["google"],function(){(function(a){Z.__rep=a;Z.__rep.m="rep";Z.__rep.isVendorTemplate=!0;Z.__rep.priorityOverride=0;Z.__rep.isInfrastructure=!1;Z.__rep.runInSiloedMode=!0})(function(a){var b=om(a.vtp_containerId),c=yo(b,!0),d;switch(c.prefix){case "AW":d=VC;break;case "DC":d=hD;break;case "GF":d=nD;break;case "HA":d=sD;break;case "UA":d=QD;break;case "MC":d=wG(c,a.vtp_gtmEventId);break;default:F(a.vtp_gtmOnFailure);return}d?(F(a.vtp_gtmOnSuccess),Qp(b,d),a.vtp_remoteConfig&&Vp(b,
a.vtp_remoteConfig||{})):F(a.vtp_gtmOnFailure)})}();








Z.securityGroups.detect_user_provided_data=["google"],function(){function a(b,c){return{dataSource:c}}(function(b){Z.__detect_user_provided_data=b;Z.__detect_user_provided_data.m="detect_user_provided_data";Z.__detect_user_provided_data.isVendorTemplate=!0;Z.__detect_user_provided_data.priorityOverride=0;Z.__detect_user_provided_data.isInfrastructure=!1;Z.__detect_user_provided_data.runInSiloedMode=!1})(function(b){var c=b.vtp_createPermissionError;return{assert:function(d,e){if("auto"!==e&&"manual"!==
e&&"code"!==e)throw c(d,{},"Unknown user provided data source.");if(b.vtp_limitDataSources)if("auto"!==e||b.vtp_allowAutoDataSources){if("manual"===e&&!b.vtp_allowManualDataSources)throw c(d,{},"Detection of user provided data via manually specified CSS selectors is not allowed.");if("code"===e&&!b.vtp_allowCodeDataSources)throw c(d,{},"Detection of user provided data from an in-page variable is not allowed.");}else throw c(d,{},"Automatic detection of user provided data is not allowed.");},K:a}})}();


Z.securityGroups.access_consent=["google"],function(){function a(b,c,d){var e={consentType:c,read:!1,write:!1};switch(d){case "read":e.read=!0;break;case "write":e.write=!0;break;default:throw Error("Invalid "+b+" request "+d);}return e}(function(b){Z.__access_consent=b;Z.__access_consent.m="access_consent";Z.__access_consent.isVendorTemplate=!0;Z.__access_consent.priorityOverride=0;Z.__access_consent.isInfrastructure=!1;Z.__access_consent.runInSiloedMode=!1})(function(b){for(var c=b.vtp_consentTypes||
[],d=b.vtp_createPermissionError,e=[],f=[],g=0;g<c.length;g++){var h=c[g],m=h.consentType;h.read&&e.push(m);h.write&&f.push(m)}return{assert:function(n,p,q){if(!k(p))throw d(n,{},"Consent type must be a string.");if("read"===q){if(-1<e.indexOf(p))return}else if("write"===q){if(-1<f.indexOf(p))return}else throw d(n,{},"Access type must be either 'read', or 'write', was "+q);throw d(n,{},"Prohibited "+q+" on consent type: "+p+".");},K:a}})}();





Z.securityGroups.get=["google"],function(){(function(a){Z.__get=a;Z.__get.m="get";Z.__get.isVendorTemplate=!0;Z.__get.priorityOverride=0;Z.__get.isInfrastructure=!1;Z.__get.runInSiloedMode=!1})(function(a){var b=a.vtp_settings,c=b.eventParameters||{},d=String(a.vtp_eventName),e={};e.eventId=a.vtp_gtmEventId;e.priorityId=a.vtp_gtmPriorityId;a.vtp_deferrable&&(e.deferrable=!0);var f=Zv(String(b.streamId),d,c);bw(f,e.eventId,e);a.vtp_gtmOnSuccess()})}();




var hJ={};hJ.dataLayer=Ti;hJ.callback=function(a){Ii.hasOwnProperty(a)&&Fa(Ii[a])&&Ii[a]();delete Ii[a]};hJ.bootstrap=0;hJ._spx=!1;
function iJ(){ri[lm()]=ri[lm()]||hJ;rm();wm()||l(xm(),function(d,e){$u(d,e.transportUrl,e.context);L(92)});Wa(Ji,Z.securityGroups);var a=nm(um()),b,c=null==a?void 0:null==(b=a.context)?void 0:b.source;2!==c&&4!==c&&3!==c||L(142);vf=Lf}
(function(a){function b(){m=C.documentElement.getAttribute("data-tag-assistant-present");by(m)&&(h=g.Mk)}if(!z["__TAGGY_INSTALLED"]){var c=!1;if(C.referrer){var d=Lm(C.referrer);c="cct.google"===Fm(d,"host")}if(!c){var e=Hl("googTaggyReferrer");c=e.length&&e[0].length}c&&(z["__TAGGY_INSTALLED"]=!0,Jc("https://cct.google/taggy/agent.js"))}if(Di)a();else{var f=function(u){var v="GTM",w="GTM";xi?(v="OGT",w="GTAG"):Di&&(w=v="OPT");var x=z["google.tagmanager.debugui2.queue"];x||(x=[],
z["google.tagmanager.debugui2.queue"]=x,Jc("https://"+qi.wd+"/debug/bootstrap?id="+Tf.ctid+"&src="+w+"&cond="+u+"&gtm="+Am()));var y={messageType:"CONTAINER_STARTING",data:{scriptSource:Dc,containerProduct:v,debug:!1,id:Tf.ctid,targetRef:{ctid:Tf.ctid,isDestination:dm.ie},aliases:fm(),destinations:im()}};y.data.resume=function(){a()};qi.lk&&(y.data.initialPublish=!0);x.push(y)},g={Bn:1,Nk:2,Zk:3,nk:4,Mk:5},h=void 0,m=void 0,n=Gm(z.location,"query",!1,void 0,"gtm_debug");by(n)&&(h=g.Nk);if(!h&&C.referrer){var p=Lm(C.referrer);
"tagassistant.google.com"===Fm(p,"host")&&(h=g.Zk)}if(!h){var q=Hl("__TAG_ASSISTANT");q.length&&q[0].length&&(h=g.nk)}h||b();if(!h&&cy(m)){var r=function(){if(t)return!0;t=!0;b();h&&Dc?f(h):a()},t=!1;Oc(C,"TADebugSignal",function(){r()},!1);z.setTimeout(function(){r()},200)}else h&&Dc?f(h):a()}})(function(){try{pm();if(R(16)){}zj().s();kl();(R(98)||R(99)||R(100))&&
pq();var a=mm();if(am().canonical[a]){var b=ri.zones;b&&b.unregisterChild(hm());var c=Lu(mm());c._event&&(c._event.external=[]);c._entity&&(c._entity.external=[]);}else{is();Xu();for(var d=data.resource||{},e=d.macros||[],f=0;f<e.length;f++)lf.push(e[f]);for(var g=d.tags||[],h=0;h<g.length;h++)of.push(g[h]);for(var m=d.predicates||
[],n=0;n<m.length;n++)nf.push(m[n]);for(var p=d.rules||[],q=0;q<p.length;q++){for(var r=p[q],t={},u=0;u<r.length;u++){var v=r[u][0];t[v]=Array.prototype.slice.call(r[u],1);"if"!==v&&"unless"!==v||uf(t[v])}mf.push(t)}qf=Z;rf=Tz;Nf=new Wf;var w=data.sandboxed_scripts,x=data.security_groups,y=data.infra;a:{var A=data.runtime||[],B=data.runtime_lines;bA=new Ie;IH();kf=aA();var E=bA,G=HH(),D=new ed("require",G);D.Eb();E.h.h.set("require",D);for(var M=[],P=0;P<A.length;P++){var O=A[P];if(!Ha(O)||3>O.length){if(0===
O.length)continue;break a}B&&B[P]&&B[P].length&&Ef(O,B[P]);try{bA.execute(O),R(32)&&mp&&50===O[0]&&M.push(O[1])}catch(fh){}}R(32)&&(wf=M)}if(void 0!==w)for(var T=["sandboxedScripts"],Y=0;Y<w.length;Y++){var W=w[Y].replace(/^_*/,"");Ji[W]=T}JH(x);if(void 0!==y)for(var X=0;X<y.length;X++)Ki[y[X]]=!0;iJ();if(R(25)&&!Di){for(var la=pj["7"],ka=la?la.split("|"):[],fa={},Da=0;Da<ka.length;Da++)fa[ka[Da]]=!0;for(var pa=0;pa<Wj.length;pa++){var Ea=Wj[pa],Ua=Ea,lb=fa[Ea]?"granted":"denied";Gj().implicit(Ua,
lb)}}ay();av=!1;bv=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)dv();else{Oc(C,"DOMContentLoaded",dv);Oc(C,"readystatechange",dv);if(C.createEventObject&&C.documentElement.doScroll){var Ib=!0;try{Ib=!z.frameElement}catch(fh){}Ib&&ev()}Oc(z,"load",dv)}px=!1;"complete"===C.readyState?rx():Oc(z,"load",rx);
mp&&(hp(zp),z.setInterval(yp,864E5));hp(Vz);hp(Ev);hp(ut);hp(Op);hp(Pv);hp(Ep);hp(Xr);hp(Cp);hp(Lv);R(32)&&hp(Hv);R(106)&&(hp(Wz),hp(Yz));xy();ij(1);Lw();Hi=Sa();hJ.bootstrap=Hi;if(R(16)){}}}catch(fh){if(ij(4),mp){var jj=tp(!0,!0);Nc(jj)}}});

})()

orMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4963_17106"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4963_17106" result="shape"/>
                                </filter>
                            </defs>
                        </svg>

                        <div class="seciton-header" ng-show={{!access.alreadyPurchased}}>
                            1. Confirm Your Plan
                        </div>

                        <div term-selector-component ng-show={{!access.alreadyPurchased}}></div>

                        <div class="seciton-header" ng-show={{!access.alreadyPurchased}}>
                            2. Select Billing Country and a Payment Method
                        </div>
                        <div class="seciton-header" ng-show={{access.alreadyPurchased}}>
                            Select Billing Country and a Payment Method
                        </div>
                        <div payment-form-component></div>

                        <div promo-code-component></div>

                    </div>

                    <div class="left-pane__contents__footer">
                        Account: <span class="footer-email">{{user.email}}</span>

                        <div class="left-pane__signout" external-event="signout">
                            Use a different account? <span class="pro__signout">Sign Out</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="right-pane">
                <svg class="investing-club-desktop-logo" ng-if="selectedTerm.resource.rid === 'InvestingClub'" xmlns="http://www.w3.org/2000/svg" width="200" height="45" viewBox="0 0 200 45" fill="none">
			<g clip-path="url(#clip0_1558_92021)">
			<path d="M0.742584 45V0H46.327V45H0.742584Z" fill="#0053CF"/>
			<path d="M16.1231 27.2083H17.8198L21.3146 31.8249V27.2083H22.9016V34.3416H21.2049L17.7101 29.7166V34.3416H16.1231V27.2083Z" fill="white"/>
			<path d="M30.9887 32.0999C30.9887 34.0416 29.4102 34.3499 28.4309 34.3499H24.2271V27.2083H28.4225C29.7141 27.2083 30.7355 27.9333 30.7355 29.2833C30.7355 29.9499 30.2543 30.3249 29.8913 30.5083C30.4907 30.8083 30.9803 31.2416 30.9803 32.0999H30.9887ZM25.7634 28.5499V29.8999H28.2452C28.6504 29.8999 29.1063 29.7333 29.1063 29.2333C29.1063 28.7333 28.7517 28.5499 28.1861 28.5499H25.7634ZM29.3595 32.0999C29.3595 31.4166 28.7771 31.2333 28.2199 31.2333H25.7634V32.9416H28.279C28.7348 32.9416 29.3595 32.7833 29.3595 32.0999Z" fill="white"/>
			<path d="M39.0081 33.1833C38.2146 33.8583 37.362 34.5333 35.6737 34.5333C33.4282 34.5249 31.6893 32.8083 31.6893 30.7583C31.6977 28.6499 33.5126 27.0166 35.699 27.0166C37.5984 27.0166 38.6113 28.2166 38.7464 28.3499L37.5477 29.5333C37.286 29.2749 36.7289 28.6833 35.6821 28.6833C34.4075 28.6833 33.3776 29.6249 33.3776 30.7749C33.3776 31.7833 34.2555 32.8666 35.6737 32.8666C36.8049 32.8666 37.2185 32.4999 37.9191 31.9249L39.0165 33.1833H39.0081Z" fill="white"/>
			<path d="M15.3971 33.1833C14.6036 33.8583 13.751 34.5333 12.0627 34.5333C9.81721 34.5249 8.07825 32.8083 8.07825 30.7583C8.08669 28.6499 9.90162 27.0166 12.088 27.0166C13.9873 27.0166 15.0003 28.2166 15.1354 28.3499L13.9367 29.5333C13.675 29.2749 13.1179 28.6833 12.0711 28.6833C10.7964 28.6833 9.76656 29.6249 9.76656 30.7749C9.76656 31.7833 10.6445 32.8666 12.0627 32.8666C13.1938 32.8666 13.6075 32.4999 14.3081 31.9249L15.4055 33.1833H15.3971Z" fill="white"/>
			<path d="M29.1315 14.1333L25.3497 22.6583L24.2692 15.2499C24.1341 14.2416 25.8646 13.6249 25.8646 13.6249C25.7042 13.2749 25.1555 13.2833 25.1555 13.2833H23.9822C23.7965 11.4583 25.4679 10.1333 27.2828 10.5416C29.064 10.9333 29.7055 12.8416 29.1315 14.1333Z" fill="white"/>
			<path d="M22.1081 25.4166L14.7386 20.5666C12.8646 19.3333 11.0075 20.5916 10.6107 21.8916C10.0283 23.8166 11.3283 25.4166 13.3711 25.4166H22.1081Z" fill="white"/>
			<path d="M23.0789 13.4C23.3491 11.5167 21.6439 10.125 19.7952 10.5417C18.014 10.9334 17.3724 12.8417 17.9465 14.1334L21.7283 22.6584L23.0789 13.4Z" fill="white"/>
			<path d="M21.4244 24.0584L17.7945 15.8918C16.9419 14.0001 14.6964 13.7668 13.4555 14.8751C12.5776 15.6584 11.9023 17.7918 13.8607 19.0751L21.4244 24.0501V24.0584Z" fill="white"/>
			<path d="M33.7068 25.4166C35.7497 25.4166 37.0412 23.8166 36.4672 21.8916C36.0705 20.5916 34.2218 19.3249 32.3393 20.5666L24.9698 25.4166H33.7068Z" fill="white"/>
			<path d="M33.2257 19.0751C35.1842 17.7834 34.5004 15.6584 33.6309 14.8751C32.39 13.7668 30.1361 14.0001 29.2919 15.8918L25.6621 24.0584L33.2257 19.0834V19.0751Z" fill="white"/>
			<path d="M90.5522 13.7749H93.9879L99.3146 27.1916L104.616 13.7749H107.976L100.648 31.3582H97.8964L90.5438 13.7749H90.5522Z" fill="white"/>
			<path d="M111.099 13.7749H124.209V16.5166H114.206V21.0582H123.069V23.7999H114.206V28.4916H124.335V31.2332H111.099V13.7749Z" fill="white"/>
			<path d="M126.851 28.6832L128.717 26.4915C130.405 27.9415 132.127 28.7582 134.297 28.7582C136.213 28.7582 137.428 27.8582 137.428 26.5665V26.5165C137.428 25.2665 136.719 24.5999 133.436 23.8499C129.671 22.9499 127.552 21.8582 127.552 18.6415V18.5915C127.552 15.5999 130.076 13.5332 133.587 13.5332C136.162 13.5332 138.213 14.3082 140.003 15.7249L138.34 18.0415C136.753 16.8665 135.158 16.2499 133.537 16.2499C131.722 16.2499 130.658 17.1749 130.658 18.3165V18.3665C130.658 19.7165 131.469 20.3082 134.879 21.1082C138.619 22.0082 140.535 23.3249 140.535 26.2165V26.2665C140.535 29.5332 137.935 31.4749 134.221 31.4749C131.519 31.4749 128.97 30.5499 126.843 28.6832H126.851Z" fill="white"/>
			<path d="M148.174 16.6166H142.569V13.7749H156.92V16.6166H151.315V31.2332H148.183V16.6166H148.174Z" fill="white"/>
			<path d="M63.362 13.7749H66.4685V31.2332H63.362V13.7749Z" fill="white"/>
			<path d="M72.0146 13.7749H74.8932L84.3646 25.8416V13.7749H87.4205V31.2332H84.8205L75.0705 18.8166V31.2332H72.0146V13.7749Z" fill="white"/>
			<path d="M160.381 13.7749H163.487V31.2332H160.381V13.7749Z" fill="white"/>
			<path d="M168.384 13.7749H171.262L180.734 25.8416V13.7749H183.789V31.2332H181.189L171.439 18.8166V31.2332H168.384V13.7749Z" fill="white"/>
			<path d="M187.402 22.5499V22.4999C187.402 17.6165 191.192 13.4749 196.519 13.4749C199.6 13.4749 201.491 14.3249 203.315 15.8415L201.348 18.1582C199.98 17.0082 198.646 16.2915 196.392 16.2915C193.134 16.2915 190.661 19.1082 190.661 22.4499V22.4999C190.661 26.0915 193.058 28.7332 196.671 28.7332C198.334 28.7332 199.854 28.2082 200.942 27.4082V24.1415H196.418V21.4749H203.948V28.8082C202.209 30.2832 199.702 31.5249 196.57 31.5249C191.041 31.5249 187.402 27.6332 187.402 22.5499Z" fill="white"/>
			<rect x="46.5844" width="2.53247" height="45" fill="white"/>
			<path d="M405.857 -0.189941H48.5468V45.2003H405.857V-0.189941Z" fill="#0053CF"/>
			<path d="M59.6278 27.2627H60.5205L62.589 33.2108L64.5717 27.2373H65.2412L67.2324 33.2108L69.301 27.2627H70.1593L67.5672 34.4564H66.8805L64.8893 28.6608L62.898 34.4564H62.2113L59.6278 27.2627Z" fill="white"/>
			<path d="M72.768 27.2627H71.9526V34.4055H72.768V27.2627Z" fill="white"/>
			<path d="M76.8023 27.9995H74.3733V27.2539H80.0639V27.9995H77.6349V34.4052H76.8023V27.9995Z" fill="white"/>
			<path d="M81.4802 27.2627H82.2956V30.4316H86.4756V27.2627H87.291V34.4055H86.4756V31.1857H82.2956V34.4055H81.4802V27.2627Z" fill="white"/>
			<path d="M91.8479 33.2363L92.4402 32.7364C92.8865 33.3973 93.3414 33.7532 94.0967 33.7532C94.9121 33.7532 95.5129 33.1685 95.5129 32.0331V27.2458H96.3369V32.0247C96.3369 32.8635 96.088 33.499 95.676 33.9057C95.2726 34.2954 94.7233 34.4988 94.0881 34.4988C92.9981 34.4988 92.3114 33.965 91.8565 33.2363" fill="white"/>
			<path d="M99.7109 27.2627H98.8955V34.4055H99.7109V27.2627Z" fill="white"/>
			<path d="M101.882 27.2627H102.706L105.35 31.1603L107.985 27.2627H108.809V34.4055H107.993V28.6184L105.358 32.4482H105.315L102.68 28.6269V34.4055H101.882V27.2627Z" fill="white"/>
			<path d="M113.229 30.855V30.8381C113.229 28.8215 114.756 27.1438 116.894 27.1438C118.207 27.1438 118.988 27.6013 119.717 28.2792L119.16 28.8723C118.55 28.2961 117.863 27.8894 116.885 27.8894C115.28 27.8894 114.078 29.1773 114.078 30.8211V30.8381C114.078 32.4903 115.289 33.7867 116.885 33.7867C117.872 33.7867 118.524 33.4139 119.22 32.753L119.76 33.2783C119.005 34.0324 118.181 34.5323 116.868 34.5323C114.782 34.5323 113.237 32.9055 113.237 30.855" fill="white"/>
			<path d="M121.28 27.2627H124.387C125.279 27.2627 125.992 27.5254 126.447 27.9744C126.798 28.3218 127.004 28.8217 127.004 29.381V29.3979C127.004 30.5841 126.181 31.2789 125.039 31.4823L127.262 34.4055H126.258L124.155 31.6263H122.086V34.4055H121.271V27.2627H121.28ZM124.318 30.9061C125.408 30.9061 126.181 30.3554 126.181 29.4318V29.4149C126.181 28.5337 125.502 28.0083 124.327 28.0083H122.095V30.9061H124.318Z" fill="white"/>
			<path d="M131.434 27.2034H132.198L135.493 34.397H134.618L133.768 32.5075H129.829L128.97 34.397H128.129L131.425 27.2034H131.434ZM133.451 31.7788L131.803 28.1439L130.146 31.7788H133.442H133.451Z" fill="white"/>
			<path d="M136.773 27.2627H137.597L140.232 31.1603L142.875 27.2627H143.699V34.4055H142.884V28.6184L140.249 32.4482H140.206L137.571 28.6269V34.4055H136.773V27.2627Z" fill="white"/>
			<path d="M145.75 27.2627H150.978V27.9914H146.566V30.4316H150.514V31.1688H146.566V33.6683H151.029V34.4055H145.75V27.2627Z" fill="white"/>
			<path d="M152.565 27.2627H155.681C156.573 27.2627 157.286 27.5254 157.741 27.9744C158.092 28.3218 158.298 28.8217 158.298 29.381V29.3979C158.298 30.5841 157.474 31.2789 156.333 31.4823L158.556 34.4055H157.552L155.449 31.6263H153.38V34.4055H152.565V27.2627ZM155.603 30.9061C156.693 30.9061 157.466 30.3554 157.466 29.4318V29.4149C157.466 28.5337 156.788 28.0083 155.612 28.0083H153.38V30.9061H155.603Z" fill="white"/>
			<path d="M149.793 15.7394V15.7055C149.793 12.7738 152.016 10.3674 155.183 10.3674C157.115 10.3674 158.273 11.0283 159.277 11.9773L158.102 13.3161C157.269 12.545 156.368 12.0366 155.175 12.0366C153.183 12.0366 151.724 13.6635 151.724 15.68V15.7055C151.724 17.7305 153.175 19.3658 155.175 19.3658C156.462 19.3658 157.278 18.8659 158.179 18.0356L159.355 19.2133C158.265 20.3318 157.072 21.0435 155.115 21.0435C152.068 21.0435 149.793 18.6965 149.793 15.7309" fill="white"/>
			<path d="M161.483 10.5454H163.32V19.2218H168.822V20.8741H161.483V10.5454Z" fill="white"/>
			<path d="M170.049 16.4933V10.5537H171.886V16.4255C171.886 18.3405 172.882 19.3572 174.53 19.3572C176.177 19.3572 177.156 18.3998 177.156 16.4933V10.5537H178.993V16.4086C178.993 19.4928 177.233 21.0434 174.495 21.0434C171.757 21.0434 170.041 19.4928 170.041 16.5018" fill="white"/>
			<path d="M181.431 10.5454H186.126C187.319 10.5454 188.263 10.8674 188.864 11.4605C189.327 11.918 189.567 12.4773 189.567 13.1721V13.206C189.567 14.443 188.846 15.1124 188.074 15.5022C189.301 15.9173 190.151 16.6037 190.151 18.0102V18.0441C190.151 19.8912 188.615 20.8741 186.28 20.8741H181.439V10.5539L181.431 10.5454ZM187.722 13.4686C187.722 12.6552 187.061 12.1553 185.885 12.1553H183.242V14.9006H185.748C186.932 14.9006 187.722 14.443 187.722 13.5025V13.4771V13.4686ZM186.151 16.4342H183.242V19.2642H186.289C187.542 19.2642 188.306 18.7812 188.306 17.8492V17.8153C188.306 16.9426 187.602 16.4257 186.151 16.4257" fill="white"/>
			<path d="M76.3732 10.5454H78.3989L81.5574 18.4847L84.6903 10.5454H86.6816L82.3471 20.9419H80.7163L76.3732 10.5454Z" fill="white"/>
			<path d="M88.5269 10.5454H96.2775V12.1722H90.3637V14.8582H95.608V16.4766H90.3637V19.2472H96.3547V20.8741H88.5269V10.5454Z" fill="white"/>
			<path d="M97.8392 19.3659L98.9465 18.0695C99.9421 18.9253 100.963 19.4082 102.251 19.4082C103.384 19.4082 104.105 18.8744 104.105 18.1119V18.078C104.105 17.3408 103.684 16.9426 101.745 16.502C99.5215 15.9682 98.2598 15.3242 98.2598 13.4178V13.3924C98.2598 11.6215 99.7533 10.4014 101.83 10.4014C103.35 10.4014 104.56 10.8589 105.624 11.6977L104.637 13.0704C103.693 12.3756 102.757 12.0112 101.796 12.0112C100.723 12.0112 100.097 12.562 100.097 13.2398V13.2737C100.097 14.0702 100.577 14.4261 102.594 14.8921C104.809 15.4259 105.942 16.2054 105.942 17.917V17.9509C105.942 19.8827 104.405 21.0351 102.208 21.0351C100.612 21.0351 99.101 20.4928 97.8478 19.3828" fill="white"/>
			<path d="M110.457 12.2316H107.135V10.5454H115.624V12.2316H112.302V20.8741H110.457V12.2316Z" fill="white"/>
			<path d="M62.1251 10.5454H60.2883V20.8656H62.1251V10.5454Z" fill="white"/>
			<path d="M65.4122 10.5454H67.1117L72.7164 17.6882V10.5454H74.5189V20.8741H72.9825L67.2147 13.5279V20.8741H65.4122V10.5454Z" fill="white"/>
			<path d="M119.512 10.5454H117.675V20.8656H119.512V10.5454Z" fill="white"/>
			<path d="M122.404 10.5454H124.104L129.708 17.6882V10.5454H131.52V20.8741H129.983L124.215 13.5279V20.8741H122.404V10.5454Z" fill="white"/>
			<path d="M133.656 15.7394V15.7055C133.656 12.8161 135.897 10.3674 139.047 10.3674C140.866 10.3674 141.991 10.8673 143.064 11.7655L141.896 13.1381C141.089 12.4603 140.3 12.0282 138.969 12.0282C137.047 12.0282 135.579 13.6973 135.579 15.6716V15.697C135.579 17.8237 136.995 19.3828 139.132 19.3828C140.12 19.3828 141.012 19.0693 141.656 18.6033V16.6714H138.978V15.0954H143.433V19.4336C142.403 20.3063 140.926 21.0435 139.072 21.0435C135.802 21.0435 133.648 18.7388 133.648 15.7309" fill="white"/>
		</g>
		<defs>
		<clipPath id="clip0_1558_92021">
			<rect width="199" height="45" fill="white" transform="translate(0.5)"/>
		</clipPath>
		</defs>
	</svg>
                <svg class="all-access-desktop-logo" ng-if="selectedTerm.resource.rid === 'ProICBundle'" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="230" height="45" viewBox="0 0 230 45" fill="none">
                    <path d="M0 45V0H44.9809V45H0Z" fill="#001E5A"/>
                    <path d="M15.1771 27.2083H16.8514L20.2999 31.8249V27.2083H21.8659V34.3416H20.1916L16.7431 29.7166V34.3416H15.1771V27.2083Z" fill="white"/>
                    <path d="M29.8455 32.0999C29.8455 34.0416 28.2878 34.3499 27.3216 34.3499H23.1733V27.2083H27.3133C28.5877 27.2083 29.5956 27.9333 29.5956 29.2832C29.5956 29.9499 29.1208 30.3249 28.7626 30.5083C29.3541 30.8083 29.8372 31.2416 29.8372 32.0999H29.8455ZM24.6894 28.5499V29.8999H27.1383C27.5382 29.8999 27.988 29.7333 27.988 29.2333C27.988 28.7333 27.6381 28.5499 27.08 28.5499H24.6894ZM28.2379 32.0999C28.2379 31.4166 27.6631 31.2332 27.1133 31.2332H24.6894V32.9416H27.1716C27.6215 32.9416 28.2379 32.7832 28.2379 32.0999Z" fill="white"/>
                    <path d="M37.7591 33.1833C36.9761 33.8583 36.1348 34.5333 34.4688 34.5333C32.2531 34.5249 30.5372 32.8083 30.5372 30.7583C30.5455 28.6499 32.3364 27.0166 34.4938 27.0166C36.368 27.0166 37.3676 28.2166 37.5009 28.3499L36.318 29.5333C36.0598 29.2749 35.5101 28.6833 34.4772 28.6833C33.2194 28.6833 32.2031 29.6249 32.2031 30.7749C32.2031 31.7833 33.0694 32.8666 34.4688 32.8666C35.585 32.8666 35.9932 32.4999 36.6846 31.9249L37.7674 33.1833H37.7591Z" fill="white"/>
                    <path d="M14.4605 33.1833C13.6775 33.8583 12.8362 34.5333 11.1702 34.5333C8.95448 34.5249 7.23854 32.8083 7.23854 30.7583C7.24687 28.6499 9.03778 27.0166 11.1952 27.0166C13.0694 27.0166 14.069 28.2166 14.2023 28.3499L13.0194 29.5333C12.7612 29.2749 12.2114 28.6833 11.1785 28.6833C9.92074 28.6833 8.9045 29.6249 8.9045 30.7749C8.9045 31.7833 9.7708 32.8666 11.1702 32.8666C12.2864 32.8666 12.6946 32.4999 13.3859 31.9249L14.4688 33.1833H14.4605Z" fill="white"/>
                    <path d="M28.0131 14.1335L24.2813 22.6585L23.2151 15.2502C23.0818 14.2418 24.7894 13.6252 24.7894 13.6252C24.6312 13.2752 24.0897 13.2835 24.0897 13.2835H22.9319C22.7486 11.4585 24.3979 10.1335 26.1888 10.5418C27.9464 10.9335 28.5795 12.8418 28.0131 14.1335Z" fill="white"/>
                    <path d="M21.0827 25.4168L13.8107 20.5668C11.9615 19.3334 10.129 20.5918 9.73747 21.8918C9.16271 23.8168 10.4455 25.4168 12.4613 25.4168H21.0827Z" fill="white"/>
                    <path d="M22.0408 13.4C22.3074 11.5167 20.6248 10.125 18.8005 10.5417C17.0429 10.9334 16.4099 12.8417 16.9763 14.1334L20.7081 22.6584L22.0408 13.4Z" fill="white"/>
                    <path d="M20.4079 24.0582L16.8261 15.8915C15.9848 13.9998 13.7691 13.7665 12.5446 14.8748C11.6783 15.6582 11.0119 17.7915 12.9444 19.0748L20.4079 24.0498V24.0582Z" fill="white"/>
                    <path d="M32.528 25.4168C34.5438 25.4168 35.8183 23.8168 35.2519 21.8918C34.8604 20.5918 33.0361 19.3251 31.1786 20.5668L23.9067 25.4168H32.528Z" fill="white"/>
                    <path d="M32.0531 19.0748C33.9856 17.7832 33.3109 15.6582 32.4529 14.8748C31.2284 13.7665 29.0044 13.9998 28.1714 15.8915L24.5896 24.0582L32.0531 19.0832V19.0748Z" fill="white"/>
                    <path d="M47.5775 0H230C230 17.5736 230 27.4264 230 45H47.5775V0Z" fill="#001E5A"/>
                    <path d="M74.9267 30.8333L73.6614 27.5267H65.5015L64.2362 30.8333H60.931L67.6964 13.6025H71.4665L78.2319 30.8333H74.9267ZM69.5815 16.16L66.3537 24.8658H72.8092L69.5815 16.16Z" fill="white"/>
                    <path d="M80.9461 30.8333V13.6025H83.9673V28.1725H91.5591V30.8333H80.9461Z" fill="white"/>
                    <path d="M95.119 30.8333V13.6025H98.1402V28.1725H105.732V30.8333H95.119Z" fill="white"/>
                    <path d="M128.945 30.8333L127.68 27.5267H119.52L118.255 30.8333H114.949L121.715 13.6025H125.485L132.25 30.8333H128.945ZM123.6 16.16L120.372 24.8658H126.828L123.6 16.16Z" fill="white"/>
                    <path d="M142.191 31.1433C137.233 31.1433 133.282 27.5267 133.282 22.2308C133.282 16.935 137.233 13.3183 142.191 13.3183C145.806 13.3183 147.949 15.1267 149.24 17.1933L146.658 18.5108C145.832 17.09 144.179 16.005 142.191 16.005C138.911 16.005 136.381 18.6142 136.381 22.2308C136.381 25.8475 138.911 28.4567 142.191 28.4567C144.179 28.4567 145.832 27.3975 146.658 25.9508L149.24 27.2683C147.923 29.335 145.806 31.1433 142.191 31.1433Z" fill="white"/>
                    <path d="M160.625 31.1433C155.667 31.1433 151.717 27.5267 151.717 22.2308C151.717 16.935 155.667 13.3183 160.625 13.3183C164.24 13.3183 166.384 15.1267 167.675 17.1933L165.093 18.5108C164.266 17.09 162.614 16.005 160.625 16.005C157.346 16.005 154.815 18.6142 154.815 22.2308C154.815 25.8475 157.346 28.4567 160.625 28.4567C162.614 28.4567 164.266 27.3975 165.093 25.9508L167.675 27.2683C166.358 29.335 164.24 31.1433 160.625 31.1433Z" fill="white"/>
                    <path d="M170.926 30.8333V13.6025H182.727V16.2633H173.947V20.7325H182.546V23.3933H173.947V28.1725H182.727V30.8333H170.926Z" fill="white"/>
                    <path d="M185.552 28.405L187.23 26.08C188.418 27.3458 190.277 28.4567 192.679 28.4567C195.158 28.4567 196.139 27.2425 196.139 26.1058C196.139 24.5558 194.306 24.0908 192.214 23.5483C189.399 22.8508 186.094 22.0242 186.094 18.3817C186.094 15.54 188.599 13.3442 192.369 13.3442C195.054 13.3442 197.223 14.1967 198.824 15.7467L197.094 17.9942C195.752 16.6508 193.918 16.0308 192.111 16.0308C190.329 16.0308 189.193 16.8833 189.193 18.175C189.193 19.5183 190.949 19.9575 192.989 20.4742C195.829 21.1975 199.212 22.0758 199.212 25.8217C199.212 28.6892 197.198 31.1433 192.55 31.1433C189.373 31.1433 187.075 30.0325 185.552 28.405Z" fill="white"/>
                    <path d="M201.717 28.405L203.395 26.08C204.583 27.3458 206.442 28.4567 208.844 28.4567C211.323 28.4567 212.304 27.2425 212.304 26.1058C212.304 24.5558 210.471 24.0908 208.379 23.5483C205.564 22.8508 202.259 22.0242 202.259 18.3817C202.259 15.54 204.764 13.3442 208.534 13.3442C211.219 13.3442 213.389 14.1967 214.989 15.7467L213.259 17.9942C211.917 16.6508 210.083 16.0308 208.276 16.0308C206.494 16.0308 205.358 16.8833 205.358 18.175C205.358 19.5183 207.114 19.9575 209.154 20.4742C211.994 21.1975 215.377 22.0758 215.377 25.8217C215.377 28.6892 213.363 31.1433 208.715 31.1433C205.538 31.1433 203.24 30.0325 201.717 28.405Z" fill="white"/>
                </svg>
                <svg class="pro-club-desktop-logo" ng-if="!(selectedTerm.resource.rid === 'InvestingClub' || selectedTerm.resource.rid === 'ProICBundle')" class="logo-cnbc" xmlns="http://www.w3.org/2000/svg" width="130" height="45" viewBox="0 0 130 45" fill="none">
  			<g clip-path="url(#clip0_1912_103492)">
    			<path d="M0.5 45V0H45.3696V44.9933H0.5V45Z" fill="#047E2E"/>
    			<path d="M15.6362 27.2029H17.3069L20.7482 31.8224V27.2029H22.3124V34.3457H20.6417L17.2004 29.7196V34.3457H15.6362V27.2029Z" fill="white"/>
    			<path d="M30.2733 32.0962C30.2733 34.0388 28.7224 34.3459 27.7505 34.3459H23.6104V27.2097H27.7439C29.0086 27.2097 30.027 27.9307 30.027 29.2858C30.027 29.9534 29.5544 30.3272 29.2016 30.5074C29.7874 30.8012 30.2733 31.2418 30.2733 32.1029V32.0962ZM25.128 28.5448V29.8933H27.5708C27.9702 29.8933 28.4162 29.7264 28.4162 29.2257C28.4162 28.7251 28.07 28.5448 27.5109 28.5448H25.128ZM28.6691 32.0962C28.6691 31.4087 28.0967 31.2351 27.5442 31.2351H25.128V32.9374H27.5975C28.0501 32.9374 28.6625 32.7771 28.6625 32.0962H28.6691Z" fill="white"/>
    			<path d="M38.1675 33.1777C37.3888 33.8519 36.5434 34.5328 34.8794 34.5328C32.6695 34.5194 30.9589 32.8038 30.9589 30.7611C30.9722 28.6583 32.756 27.0161 34.906 27.0161C36.7697 27.0161 37.7748 28.2177 37.908 28.3512L36.7298 29.5328C36.4769 29.2725 35.9177 28.6783 34.8927 28.6783C33.6413 28.6783 32.6229 29.6196 32.6229 30.7745C32.6229 31.7825 33.4882 32.8706 34.886 32.8706C35.9976 32.8706 36.4103 32.5034 37.0959 31.9293L38.1742 33.1843L38.1675 33.1777Z" fill="white"/>
    			<path d="M14.924 33.1777C14.1452 33.8519 13.2999 34.5328 11.6358 34.5328C9.42598 34.5194 7.71533 32.8038 7.71533 30.7611C7.72864 28.6583 9.51251 27.0161 11.6625 27.0161C13.5262 27.0161 14.5313 28.2177 14.6644 28.3512L13.4863 29.5328C13.2333 29.2725 12.6742 28.6783 11.6492 28.6783C10.3978 28.6783 9.37939 29.6196 9.37939 30.7745C9.37939 31.7825 10.2447 32.8706 11.6425 32.8706C12.7541 32.8706 13.1668 32.5034 13.8524 31.9293L14.9307 33.1843L14.924 33.1777Z" fill="white"/>
    			<path d="M28.4428 14.1321L24.722 22.6568L23.657 15.247C23.5239 14.2389 25.2279 13.6181 25.2279 13.6181C25.0681 13.271 24.5289 13.2777 24.5289 13.2777H23.3708C23.1844 11.4552 24.8351 10.1268 26.619 10.534C28.3696 10.9279 29.0019 12.8371 28.4361 14.1255L28.4428 14.1321Z" fill="white"/>
    			<path d="M21.5337 25.4139L14.2784 20.5674C12.4346 19.3325 10.6041 20.5941 10.2181 21.8959C9.64565 23.8184 10.9236 25.4206 12.9338 25.4206H21.5337V25.4139Z" fill="white"/>
    			<path d="M22.4855 13.3979C22.7517 11.5154 21.0744 10.1202 19.2506 10.5341C17.5 10.9279 16.8676 12.8371 17.4334 14.1255L21.1542 22.6502L22.4855 13.3912V13.3979Z" fill="white"/>
    			<path d="M20.8547 24.0587L17.287 15.8945C16.4483 13.9986 14.2384 13.765 13.0137 14.8731C12.155 15.6542 11.4827 17.7837 13.4131 19.0787L20.8614 24.0587H20.8547Z" fill="white"/>
    			<path d="M32.9424 25.414C34.9526 25.414 36.2239 23.8119 35.6581 21.8893C35.2721 20.5876 33.4483 19.3259 31.5978 20.5609L24.3426 25.4073H32.9424V25.414Z" fill="white"/>
    			<path d="M32.4698 19.0787C34.3935 17.7903 33.7278 15.6608 32.8692 14.8731C31.6444 13.765 29.4346 13.9986 28.5959 15.8945L25.0282 24.0587L32.4765 19.0787H32.4698Z" fill="white"/>
    			<path d="M129.5 0H47.613V45H129.5V0Z" fill="#047E2E"/>
    			<path d="M62.1299 13.7717H68.9858C73.0594 13.7717 75.5954 16.0882 75.5954 19.6062V19.6596C75.5954 23.5715 72.467 25.6142 68.6397 25.6142H65.1851V31.2217H62.1299V13.7717ZM68.7395 22.8438C71.0492 22.8438 72.4936 21.5488 72.4936 19.7263V19.6796C72.4936 17.6369 71.0293 16.5621 68.7395 16.5621H65.1851V22.8438H68.7395Z" fill="white"/>
    			<path d="M79.476 13.7717H87.2305C89.4204 13.7717 91.1311 14.4193 92.2493 15.5141C93.1679 16.462 93.6937 17.757 93.6937 19.2791V19.3325C93.6937 22.1963 91.9764 23.9186 89.5669 24.6195L94.2661 31.2217H90.6385L86.3652 25.1402H82.5379V31.2217H79.4827V13.7717H79.476ZM87.0042 22.4233C89.1941 22.4233 90.5853 21.2751 90.5853 19.506V19.4526C90.5853 17.5835 89.2407 16.5621 86.9842 16.5621H82.5312V22.4233H87.0042Z" fill="white"/>
    			<path d="M96.2963 22.55V22.4966C96.2963 17.5833 100.077 13.4712 105.415 13.4712C110.754 13.4712 114.488 17.5366 114.488 22.4432V22.4899C114.488 27.4031 110.707 31.5152 105.369 31.5152C100.03 31.5152 96.2963 27.4498 96.2963 22.5433V22.55ZM111.286 22.55V22.4966C111.286 19.1054 108.823 16.2883 105.369 16.2883C101.914 16.2883 99.5046 19.052 99.5046 22.4432V22.4899C99.5046 25.8811 101.967 28.6715 105.422 28.6715C108.877 28.6715 111.286 25.9278 111.286 22.5366V22.55Z" fill="white"/>
  			</g>
  			<defs>
    			<clipPath id="clip0_1912_103492">
      				<rect width="129" height="45" fill="white" transform="translate(0.5)"/>
    			</clipPath>
  			</defs>
		</svg>
                <div class="right-pane__contents">
                    <div class="right-pane__contents__summary">
                        <div class="summary__header">
                            Summary
                        </div>
                        <table ng-show={{access.alreadyPurchased}}>
                            <tr>
                                <td>{{selectedTerm.name}} Plan:</td> <td>{{selectedTerm.firstRealPrice}}</td>
                            </tr>
                            <tr>
                                <td>Plan + Tax:</td><td>{{selectedTerm.firstRealPriceWithTax}}</td>
                            </tr>
                            <tr>
                                <td>Total:</td><td>{{selectedTerm.chargeDisplayAmount}}</td>
                            </tr>
                        </table>
                        <table class="summary__table" ng-repeat="term in terms" ng-if="term.selected" ng-show={{!access.alreadyPurchased}}>
                            <tr ng-if="term.billingPlanTable.length === 1"> <!-- For monthly plan -->
                                <td>{{term.name}} Plan </td>
                                <td ng-if="!$parent.isTermDiscounted()" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                                <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPrice.length > 0" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].originalPrice}}</td>
                                <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPrice.length <= 0" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                            </tr>
                            <tr ng-if="(term.billingPlanTable[term.billingPlanTable.length-2].isFree !== 'true') && term.billingPlanTable.length > 1"> <!-- For discounted plan -->
                                <td>{{term.name}} Plan </td>
                                <td ng-if="!$parent.isTermDiscounted()" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-2].price}}</td>
                                <td ng-if="$parent.isTermDiscounted()" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-2].originalPrice}}</td>
                            </tr>
                            <tr ng-if="term.billingPlanTable[term.billingPlanTable.length-2].isFree === 'true'"> <!-- For fully discounted/trial plan -->
                                <td>{{term.name}} Plan </td>
                                <td ng-if="$parent.isTermDiscounted()" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-2].originalPrice}}</td>
                                <td ng-if="!$parent.isTermDiscounted() && term.termId !== 'TM0T1MAEH2D4' && term.termId !== 'TMTUOV869YHT' && term.termId !== 'TM75LD4V3GFS'" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                                <td ng-if="!$parent.isTermDiscounted() && term.termId === 'TM0T1MAEH2D4'" class="summary__table__pricecell">$0.00</td>
                              	<td ng-if="!$parent.isTermDiscounted() && term.termId === 'TM75LD4V3GFS'" class="summary__table__pricecell">$0.00</td>
                                <td ng-if="!$parent.isTermDiscounted() && term.termId === 'TMTUOV869YHT'" class="summary__table__pricecell">$0.00</td>
                            </tr>
                            <!-- For annual plan - simplified above now -->
                            <!--tr ng-if="(term.billingPlanTable[term.billingPlanTable.length-2].isTrial === 'true') && (!term.billingPlanTable[term.billingPlanTable.length-2].isFreeTrial !== 'true') && (term.billingPlanTable[term.billingPlanTable.length-2].isFree === 'true')">
                              <td>{{term.name}} Plan:</td>
                              <td ng-if="!$parent.isTermDiscounted()" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                              <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPrice.length > 0" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].originalPrice}}</td>
                              <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPrice.length <= 0" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                            </tr-->
                            <tr class="summary__table__total" ng-if="term.billingPlanTable.length === 1"> <!-- For monthly plan -->
                                <td class="termPlanLog">{{term.billingPlanTable}}</td>
                                <td>Subtotal </td>
                                <!-- <td ng-if="!$parent.isTermDiscounted() || ($parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue != null)" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td> -->
                                <td class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                                <!-- <td ng-if="!$parent.isTermDiscounted() || ($parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue != null)" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                              <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue === null" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-2].priceValue}}</td> -->
                            </tr>
                            <tr class="summary__table__total" ng-if="term.billingPlanTable.length === 2 && !term.billingPlanTable[0].isTrial"> <!-- For discounted non-annual plan -->
                                <td>Subtotal</td>
                                <!-- <td ng-if="!$parent.isTermDiscounted() || ($parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue != null)" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td> -->
                                <td class="summary__table__pricecell">{{term.billingPlanTable[0].originalPrice}}</td>
                                <!-- <td ng-if="!$parent.isTermDiscounted() || ($parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue != null)" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].price}}</td>
                              <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue === null" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-2].priceValue}}</td> -->
                            </tr>
                            <tr class="summary__table__total" ng-if="term.billingPlanTable.length > 1 && term.billingPlanTable[0].isTrial"> <!-- For annual and discounted plans -->
                                <td>Subtotal</td>

                                <td ng-if="!$parent.isTermDiscounted() && term.termId !== 'TM0T1MAEH2D4' && term.termId !== 'TMTUOV869YHT' && term.termId !== 'TM75LD4V3GFS'" class="summary__table__pricecell">{{term.firstRealPrice}}</td>
                                <td ng-if="!$parent.isTermDiscounted() && term.termId === 'TM0T1MAEH2D4'" class="summary__table__pricecell">$0.00</td>
                                <td ng-if="term.termId === 'TMTUOV869YHT'" class="summary__table__pricecell">$0.00</td>
                              	<td ng-if ="term.termId === 'TM75LD4V3GFS'" class="summary__table__pricecell">$0.00</td>

                                <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue === null" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-2].originalPrice}}</td>
                                <td ng-if="$parent.isTermDiscounted() && term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue != null" class="summary__table__pricecell">{{term.billingPlanTable[term.billingPlanTable.length-1].originalPrice}}</td>
                            </tr>

                            <tr ng-if="term.termId !== 'TM0T1MAEH2D4' && term.termId !== 'TMTUOV869YHT' && term.termId !== 'TM75LD4V3GFS'" >
                                <td>Tax:</td>

                                <td style="text-align: right">{{term.taxAmount}}</td>
                            </tr>

                            <tr>

                            <tr ng-if="term.termId === 'TMTUOV869YHT'">
                                <td>Tax:</td>

                                <td style="text-align: right">$0.00</td>
                            </tr>
                          <tr ng-if="term.termId === 'TM75LD4V3GFS'">
                                <td>Tax:</td>

                                <td style="text-align: right">$0.00</td>
                            </tr>



                            <td>Total:</td>
                            <td ng-if="term.termId !== 'TM0T1MAEH2D4' && term.termId !== 'TMTUOV869YHT' && term.termId !== 'TM75LD4V3GFS'" style="text-align: right"><!-- for partial discount edge case --> {{
                                ((term.billingPlanTable[term.billingPlanTable.length-2].isFree !== 'true') && term.billingPlanTable.length > 1 && $parent.isTermDiscounted())
                                ? term.billingPlanTable[term.billingPlanTable.length-2].originalPrice
                                : term.totalAmount
                                }}</td>

                            <td ng-if="term.termId === 'TMTUOV869YHT'" style="text-align: right">
                                $0.00
                            </td>

                            <td ng-if="term.termId === 'TM0T1MAEH2D4'" style="text-align: right">
                                $0.00
                            </td>

                            <td ng-if="term.termId === 'TM75LD4V3GFS'" style="text-align: right">
                                $0.00
                            </td>
                            </tr>
                            <!-- promo code display -->
                            <tbody ng-if="$parent.isTermDiscounted()">
                            <tr class="summary__table__discount" ng-if="term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue != null">
                                <td>{{((term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue - term.billingPlanTable[term.billingPlanTable.length-1].priceValue) / (term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue) * 100).toFixed()}}% Discount Promo:</td>
                                <td class="summary__table__pricecell">(-${{(term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue - term.billingPlanTable[term.billingPlanTable.length-1].priceValue).toFixed(2)}})</td>
                            </tr>
                            <tr class="summary__table__discount" ng-if="term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue === null && term.chargeAmount != null">
                                <td>{{((term.billingPlanTable[term.billingPlanTable.length-1].priceValue - term.billingPlanTable[term.billingPlanTable.length-2].priceValue) / (term.billingPlanTable[term.billingPlanTable.length-1].priceValue) * 100).toFixed()}}% Discount Promo:</td>
                                <td class="summary__table__pricecell">(-${{( term.billingPlanTable[term.billingPlanTable.length-1].priceValue - term.billingPlanTable[term.billingPlanTable.length-2].priceValue).toFixed(2)}})</td>
                            </tr>
                            <tr>
                                <td>{{ term.billingPlanTable[0].isFreeTrial && term.billingPlanTable.length > 2 ? 'Billed after trial:' : 'Billed today:' }}</td>
                                <td style="text-align: right">{{ term.billingPlanTable[term.billingPlanTable.length-1].originalPriceValue != null ? term.billingPlanTable[term.billingPlanTable.length-1].price : term.billingPlanTable[term.billingPlanTable.length-2].price }}</td>
                            </tr>
                            </tbody>
                            <!-- not trial -->
                            <tr ng-if="selectedTerm.billingPlanTable[0].isTrial === 'false' && selectedTerm.resource.rid === 'InvestingClub'">
                                <td colspan="2" class="summary__billing">Billing will start {{selectedTerm.billingPlanTable[0].date}}.</td>
                            </tr>
                            <tr ng-if="term.billingPlanTable[term.billingPlanTable.length-2].isTrial=='false'">
                                <td colspan="2" class="summary__billing">Billing will start {{term.billingPlanTable[term.billingPlanTable.length-1].date}}.</td>
                            </tr>
                            <!-- is trial -->
                            <tr ng-if="term.billingPlanTable[0].isTrial=='true'">
                                <td colspan="2" class="summary__billing" ng-if="term.firstPeriod === '8 days'">
                                    <span>Free for 7 days, billing will start {{term.billingPlanTable[term.billingPlanTable.length-1].date}}.</span>
                                </td>
                                <td colspan="2" class="summary__billing" ng-if="term.firstPeriod !== '8 days'">
                                    <span ng-if="!term.hasFreeTrial">{{term.name}} for {{term.firstRealPrice}} charged immediately, renews</span>
                                    <span ng-if="term.hasFreeTrial">{{term.name}}, renews</span>
                                    <span ng-if="term.firstPeriod === '92 days'">into Annual</span>
                                    <span>at</span>
                                    {{term.billingPlanTable[term.billingPlanTable.length - 1].price}} charged on {{term.billingPlanTable[term.billingPlanTable.length-1].date}}.
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="right-pane__contents__subscribe">

                        <div ng-show="hasErrors()">
                            <ol class="errorlist">
                                <li ng-repeat="error in errors" ng-class="{'one-error': hasOneError()}" class="errorlist__item">
                                    {{error.fieldTitle}}
                                    {{error.message}}
                                </li>
                            </ol>
                            <div class="btn-close" ng-click="reset()"></div>
                        </div>

                        <p style="font-weight:bold; margin-bottom: 40px;" ng-show={{!access.alreadyPurchased}}>
                            BY CLICKING “SUBSCRIBE,” YOU AGREE TO PAY THE ABOVE AMOUNT PLUS APPLICABLE TAXES.
                            YOUR SUBSCRIPTION WILL AUTOMATICALLY RENEW ON A MONTHLY OR ANNUAL BASIS AS INDICATED
                            ABOVE, UNLESS YOU CANCEL BY VISITING THE ACCOUNT MANAGEMENT LINK. ALL FEES AND TAXES
                            ARE NON-REFUNDABLE. SUBSCRIBING FURTHER INDICATES YOUR ACCEPTANCE OF OUR
                            <a href="https://www.cnbc.com/nbcuniversal-terms-of-service/" target="_blank" style="color:#005594">
                                TERMS OF SERVICE
                            </a> AND
                            <a href="https://www.nbcuniversal.com/privacy?intake=CNBC" target="_blank" style="color:#005594">
                                PRIVACY POLICY;
                            </a> TOGETHER WITH THE
                            <a href="https://www.cnbc.com/investingclub/disclaimer/" target="_blank" style="color:#005594">
                                DISCLAIMER
                            </a> IF YOU ARE AN INVESTING CLUB SUBSCRIBER.
                        </p>

                        <p style="font-weight:bold; margin-bottom: 40px;" ng-show={{access.alreadyPurchased}}>
                            BY CLICKING “RENEW,” YOU AGREE TO PAY THE ABOVE AMOUNT PLUS APPLICABLE TAXES.
                            YOUR SUBSCRIPTION WILL AUTOMATICALLY RENEW ON A MONTHLY OR ANNUAL BASIS AS INDICATED
                            ABOVE, UNLESS YOU CANCEL BY VISITING THE ACCOUNT MANAGEMENT LINK. ALL FEES AND TAXES
                            ARE NON-REFUNDABLE. SUBSCRIBING FURTHER INDICATES YOUR ACCEPTANCE OF OUR
                            <a href="https://www.cnbc.com/nbcuniversal-terms-of-service/" target="_blank" style="color:#005594">
                                TERMS OF SERVICE
                            </a> AND
                            <a href="https://www.nbcuniversal.com/privacy?intake=CNBC" target="_blank" style="color:#005594">
                                PRIVACY POLICY;
                            </a> TOGETHER WITH THE
                            <a href="https://www.cnbc.com/investingclub/disclaimer/" target="_blank" style="color:#005594">
                                DISCLAIMER
                            </a> IF YOU ARE AN INVESTING CLUB SUBSCRIBER.
                        </p>


                        <div complete-purchase-button title="Subscribe" class="subscribe-button-container" ng-show={{!access.alreadyPurchased}}></div>
                        <div complete-purchase-button title="Renew" class="subscribe-button-container" ng-show={{access.alreadyPurchased}}></div>
                    </div>

                    <div class="right-pane__contents__footer">
                        Account: <span class="footer-email">{{user.email}}</span>
                        <div class="left-pane__signout" external-event="signout">
                            Use a different account? <span class="pro__signout">Sign Out</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div view="alreadyHasAccess">
    <div ng-if="(selectedTerm.resource.rid === 'InvestingClub')" already-has-access-component style="background: #fff linear-gradient(0deg,#8fd0ff,#fff 50%);"></div>
    <div ng-if="(selectedTerm.resource.rid === 'PRO')" already-has-access-component style="background: #fff linear-gradient(0deg,#008456,#fff 50%);"></div>
</div>

<div view="lockedPromoCode">
    <div promo-code-component></div>
</div>

<div view="externalVerification">
    <div account-header-component></div>
    <div external-verification-component></div>
</div>

<div view="printAddress">
    <div account-header-component></div>
    <div print-address-component></div>
</div>

<div view="confirmation">
    <div confirmation-component></div>
</div>

<div view="giftParams">
    <div account-header-component></div>
    <div gift-form-component></div>
</div>

<div view="redemption">
    <div redemption-component></div>
</div>


<div view="bankSecure">
    <div bank-secure-component></div>
</div>

<div view="upgradeSubscription">
    <div complete-upgrade-component></div>
</div>

<div view="upgradeSharedSubscription">
    <div upgrade-shared-subscription-component></div>
</div>

<div view="upgradeAuthentication">
    <div upgrade-authentication-component></div>
</div>


            <div view="offer">
                <config width="626"></config>

<div class="background">

<div class="template">
  <div class="top-flexBox">
    <div class="header-flexBox">
  	<svg xmlns="http://www.w3.org/2000/svg" width="115" height="40" viewBox="0 0 115 40" fill="none" class="logo"><g clip-path="url(#clip0_1111_105865)"><path d="M0 40V0H40.1853V39.9941H0V40Z" fill="#047E2E"/><path d="M13.556 24.1804H15.0523L18.1343 28.2866V24.1804H19.5352V30.5296H18.0389L14.9569 26.4174V30.5296H13.556V24.1804Z" fill="white"/><path d="M26.665 28.5299C26.665 30.2567 25.2761 30.5296 24.4057 30.5296H20.6978V24.1863H24.3997C25.5324 24.1863 26.4445 24.8272 26.4445 26.0318C26.4445 26.6251 26.0212 26.9574 25.7053 27.1177C26.2299 27.3787 26.665 27.7704 26.665 28.5358V28.5299ZM22.0569 25.3731V26.5717H24.2447C24.6024 26.5717 25.0018 26.4234 25.0018 25.9784C25.0018 25.5333 24.6918 25.3731 24.1911 25.3731H22.0569ZM25.2284 28.5299C25.2284 27.9187 24.7157 27.7644 24.2209 27.7644H22.0569V29.2776H24.2686C24.674 29.2776 25.2224 29.1352 25.2224 28.5299H25.2284Z" fill="white"/><path d="M33.7352 29.4912C33.0377 30.0905 32.2806 30.6957 30.7903 30.6957C28.8111 30.6839 27.2791 29.1589 27.2791 27.3431C27.291 25.4739 28.8886 24.0142 30.8141 24.0142C32.4833 24.0142 33.3835 25.0823 33.5027 25.201L32.4475 26.2513C32.221 26.0199 31.7202 25.4917 30.8022 25.4917C29.6815 25.4917 28.7694 26.3284 28.7694 27.355C28.7694 28.251 29.5444 29.2182 30.7962 29.2182C31.7918 29.2182 32.1614 28.8918 32.7754 28.3815L33.7411 29.4971L33.7352 29.4912Z" fill="white"/><path d="M12.9182 29.4912C12.2207 30.0905 11.4636 30.6957 9.97326 30.6957C7.9941 30.6839 6.46204 29.1589 6.46204 27.3431C6.47396 25.4739 8.07159 24.0142 9.9971 24.0142C11.6663 24.0142 12.5664 25.0823 12.6857 25.201L11.6305 26.2513C11.404 26.0199 10.9032 25.4917 9.98518 25.4917C8.86445 25.4917 7.95237 26.3284 7.95237 27.355C7.95237 28.251 8.72734 29.2182 9.97922 29.2182C10.9748 29.2182 11.3444 28.8918 11.9584 28.3815L12.9241 29.4971L12.9182 29.4912Z" fill="white"/><path d="M25.0257 12.5619L21.6933 20.1394L20.7395 13.5529C20.6202 12.6568 22.1463 12.105 22.1463 12.105C22.0033 11.7964 21.5204 11.8024 21.5204 11.8024H20.4831C20.3162 10.1824 21.7946 9.00161 23.3923 9.36357C24.9601 9.71367 25.5264 11.4107 25.0197 12.556L25.0257 12.5619Z" fill="white"/><path d="M18.8378 22.5901L12.3399 18.2821C10.6886 17.1844 9.04926 18.3059 8.70351 19.463C8.19083 21.1719 9.33541 22.596 11.1357 22.596H18.8378V22.5901Z" fill="white"/><path d="M19.6903 11.9092C19.9287 10.2359 18.4265 8.99569 16.7931 9.36359C15.2253 9.71369 14.6589 11.4108 15.1656 12.556L18.498 20.1335L19.6903 11.9033V11.9092Z" fill="white"/><path d="M18.2298 21.3855L15.0345 14.1284C14.2834 12.4432 12.3042 12.2356 11.2073 13.2206C10.4383 13.9148 9.83621 15.8077 11.565 16.9589L18.2357 21.3855H18.2298Z" fill="white"/><path d="M29.0556 22.5901C30.8559 22.5901 31.9945 21.166 31.4878 19.4571C31.142 18.3 29.5086 17.1785 27.8514 18.2762L21.3535 22.5842H29.0556V22.5901Z" fill="white"/><path d="M28.6323 16.9589C30.3551 15.8137 29.759 13.9208 28.99 13.2206C27.8931 12.2356 25.9139 12.4432 25.1628 14.1284L21.9675 21.3855L28.6383 16.9589H28.6323Z" fill="white"/><path d="M115 0H42.2897V39.9941H115V0Z" fill="#047E2E"/><path d="M55.1959 12.2415H61.3361C64.9844 12.2415 67.2557 14.3006 67.2557 17.4277V17.4752C67.2557 20.9524 64.4539 22.7681 61.0261 22.7681H57.9322V27.7526H55.1959V12.2415ZM61.1155 20.3056C63.1841 20.3056 64.4777 19.1544 64.4777 17.5345V17.493C64.4777 15.6772 63.1662 14.7219 61.1155 14.7219H57.9322V20.3056H61.1155Z" fill="white"/><path d="M70.7312 12.2415H77.6762C79.6374 12.2415 81.1695 12.8171 82.171 13.7902C82.9937 14.6329 83.4646 15.784 83.4646 17.1369V17.1844C83.4646 19.73 81.9266 21.261 79.7686 21.884L83.9773 27.7526H80.7283L76.9012 22.3468H73.4734V27.7526H70.7372V12.2415H70.7312ZM77.4735 19.9318C79.4347 19.9318 80.6807 18.9111 80.6807 17.3387V17.2912C80.6807 15.6297 79.4765 14.7219 77.4556 14.7219H73.4674V19.9318H77.4735Z" fill="white"/><path d="M85.7954 20.0445V19.997C85.7954 15.6297 89.1814 11.9745 93.9624 11.9745C98.7434 11.9745 102.088 15.5882 102.088 19.9496V19.9911C102.088 24.3584 98.7017 28.0136 93.9207 28.0136C89.1397 28.0136 85.7954 24.3999 85.7954 20.0386V20.0445ZM99.2203 20.0445V19.997C99.2203 16.9826 97.0146 14.4786 93.9207 14.4786C90.8268 14.4786 88.6688 16.9352 88.6688 19.9496V19.9911C88.6688 23.0055 90.8745 25.4858 93.9684 25.4858C97.0623 25.4858 99.2203 23.047 99.2203 20.0326V20.0445Z" fill="white"/></g><defs><clipPath id="clip0_1111_105865">  <rect width="115" height="40" fill="white"/></clipPath></defs></svg>
    <div class="login">Already a subscriber? 
		<button class="link unbutton" external-event="sign-in-pro-article" external-event-params="{{params}}">Sign In 
		<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13 4L9.5 7.5L8.8 6.8L11.1 4.5L0 4.5L0 3.5L11.1 3.5L8.8 1.2L9.5 0.5L13 4Z" fill="#00A857"/>
		</svg>
		</button>
   </div>
   </div>
  <div class="lead">Start a free trial to read this article. <br>Click 'LEARN MORE' to read the benefits of becoming a CNBC Pro subscriber.</div>
  <div class="sublead"></div>
</div>


<!-- Offer Button -->
<div class="button-container">
    <button class="checkout-button unbutton" external-event="start-subscription-flow-pro-article" external-event-params="{{params}}">Start free trial*</button> 
	<button class="checkout-button inverse unbutton" external-event="sign-in-pro-article" external-event-params="{{params}}">Sign In</button>
	<a class="link hover" target="_parent" href="https://www.cnbc.com/application/pro?__source=pro|in-article|learn-more&tpcc=pro|in-article|learn-more" target="_blank">LEARN MORE</a>
</div>

<!-- Footer -->
<div class="footer-flexBox">
  <span class="callout">*with annual subscription</span> 
</div>
  
</div>
</div>
            </div>

           <div view="receipt">
                
           </div>

            <div class='clearfix'></div>
        </div>

    </div>
</div>

<style type="text/css" tp-style="checkout-custom-style">
    @font-face {
  font-family: 'Proxima Nova';
  src: url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_1_0.eot');
  src: url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_1_0.eot?#iefix')
      format('embedded-opentype'),
    url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_1_0.woff2')
      format('woff2'),
    url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_1_0.woff')
      format('woff'),
    url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_1_0.ttf')
      format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_4_0.eot');
  src: url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_4_0.eot?#iefix')
      format('embedded-opentype'),
    url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_4_0.woff2')
      format('woff2'),
    url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_4_0.woff')
      format('woff'),
    url('//fm.cnbc.com/applications/cnbc.com/resources/styles/fonts/ProximaNova/351C86_4_0.ttf')
      format('truetype');
  font-weight: 500;
}

.payment-options {
  margin-bottom: 20px;
}

a.button.promo-code-apply {
  z-index: 1;
}

#pn-postal-code {
  padding: 10px;
  height: 50px;
  font-size: 13px;
}
#pn-postal-code::placeholder {
  color: #a9a9a9 !important;
}

#form__name__first:focus-within,
#form__name__last:focus-within {
  border: 1px solid rgb(66, 66, 66) !important;
}

#form__name__first input::placeholder,
#form__name__last input::placeholder {
  color: #a9a9a9 !important;
}

#form__name__first input,
#form__name__last input {
  font-size: 13px;
}

.promo-code-input.ng-pristine.ng-valid::placeholder {
  color: #a9a9a9 !important;
}
.promo-code-input.ng-pristine.ng-valid {
  font-size: 13px;
}

.investingClub-modal {
  background: #fff linear-gradient(0deg, #8fd0ff, #fff 50%);
  margin-top: 60px;
}

.pro-modal {
  background: #fff linear-gradient(0deg, #00a857, #fff 50%);
  margin-top: 60px;
}

.allAccess-modal {
  background: #fff;
  margin-top: 60px;
}

.pro-modal-button {
  background-color: #008456 !important;
}

.pro-modal-button:hover {
  background-color: #008456 !important;
}

.investingClub-modal-button {
  background-color: #071d39 !important;
}

.investingClub-modal-button:hover {
  background-color: #002f6c !important;
}

.allAccess-modal-button {
  background-color: #0053cf !important;
}

.allAccess-modal-button:hover {
  background-color: #002f6c !important;
}

/* Pro */
/* term selector component template */
.pro {
  align-items: flex-end;
}

.pro > div > .plan--selected {
  border: 2px solid #00A857;
}

.pro > div > .plan {
  border-radius: 25px;
  padding: 0;
}

.pro-content {
  width: 100% !important;
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  box-shadow: 0px 10px 0 0px #008456 inset;
  border-radius: 22px;
}

.pro-content .flag {
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  background: #fcb700;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #171717;
  margin: -7px auto -7px;
  padding: 5px 10px;
  width: fit-content;
}

.pro-content .term-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
  padding: 2px;
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
  color: #424242;
  padding: 5px 0;
  padding-top: 18px;
}

.pro-content .alt-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  position: relative;
}

.pro-content .alt-price .superscript {
  font-size: 6px;
  line-height: 13px;
}

.strike {
  border: 1px solid #424242;
  background: #424242;
  height: 1px;
  transform: rotate(-12deg);
  width: 45px;
  position: absolute;
}

.pro-content .term-price {
  font-size: 18px;
  line-height: 16px;
  color: #000000;
  padding: 15px 0 0 0;
}

.pro-content .term-price .superscript {
  font-size: 8px;
  line-height: 6px;
  position: relative;
  top: -5px;
  margin-left: -3px;
}

.pro-club-desktop-logo {
  margin: 20px auto 0 auto;
  display: block;
}

.pro-club-mobile-logo {
  display: none;
}

@media only screen and (max-width: 650px) {
  .pro-club-desktop-logo {
    display: none;
  }
  .pro-club-mobile-logo {
    display: block;
    margin: 20px auto;
    max-width: 363.25px;
    width: 60%;
    height: auto;
  }
}

/*investing club */
/* term selector component template */
.investing-club {
  align-items: flex-end;
}

.investing-club .plan--selected {
  border: 2px solid #0496FF;
}

.investing-club .plan {
  border-radius: 25px;
  padding: 0;
}

.investing-club-content {
  width: 100% !important;
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  box-shadow: 0px 10px 0 0px #071D39 inset;
  border-radius: 22px;
}

.investing-club-content .flag {
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  background: #fcb700;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #171717;
  margin: -7px auto -7px;
  padding: 5px 10px;
  width: fit-content;
}

.investing-club-content .term-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
  padding: 2px;
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
  color: #424242;
  padding: 5px 0;
  padding-top: 18px;
}

.investing-club-content > .alt-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  position: relative;
}

.investing-club-content .alt-price .superscript {
  font-size: 6px;
  line-height: 13px;
}

.strike {
  border: 1px solid #424242;
  background: #424242;
  height: 1px;
  transform: rotate(-12deg);
  width: 55px;
  position: absolute;
  top: -4px;
  left: 35px;
}
.alt-price {
  position: relative;
}

.investing-club-content .term-price .superscript {
  font-size: 8px;
  line-height: 6px;
  position: relative;
  top: -5px;
  margin-left: -3px;
}

.strike {
  border: 1px solid #424242;
  background: #424242;
  height: 1px;
  transform: rotate(-12deg);
  width: 45px;
  position: absolute;
}

.investing-club-content .term-price {
  font-size: 18px;
  line-height: 16px;
  color: #000000;
  padding: 15px 0 0 0;
}

.investing-club-content .term-price .superscript {
  font-size: 8px;
  line-height: 6px;
  position: relative;
  top: -5px;
  margin-left: -3px;
}

/* checkout template */

.investing-club .left-pane {
  padding-top: 0;
}

.investing-club
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__input
  > #payment-form-component
  > div
  > div
  > div
  > div
  > div
  > div
  > .payment-options-wrapper
  > .payment-options
  .button.pay.payment-method-selected {
  border: 1px solid #0496ff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
}

.investing-club
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__input
  > div
  > div
  > .promo-code-component
  > a.button.promo-code-apply {
  color: #ffffff;
  background-color: #026dbc;
}

.investing-club
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__input
  > div
  > div
  > .promo-code-component
  > a.button.promo-code-apply:hover {
  color: #ffffff;
  background-color: #002f6c;
}

.investing-club
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__footer
  > .left-pane__signout
  span {
  color: #026dbc;
}

.investing-club
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__footer
  > .left-pane__signout
  span:hover {
  color: #0496ff;
}

.investing-club > #view-state1 > div > .container > .right-pane > .right-pane__contents {
  background: linear-gradient(0deg, rgba(4, 150, 255, 0.3) 0%, rgba(4, 150, 255, 0) 54.2%);
}

.investing-club
  > #view-state1
  > div
  > .container
  > .right-pane
  > .right-pane__contents
  > .right-pane__contents__subscribe
  > .subscribe-button-container
  > a.button.complete-purchase {
  background: #071d39 !important;
  border-radius: 3px;
}

.investing-club
  > #view-state1
  > div
  > .container
  > .right-pane
  > .right-pane__contents
  > .right-pane__contents__subscribe
  > .subscribe-button-container
  > a.button.complete-purchase:hover {
  background: #002f6c !important;
  border-radius: 3px;
}

.investing-club-desktop-logo {
  margin: 20px auto 0 auto;
  display: block;
}

.investing-club-mobile-logo {
  display: none;
}

@media only screen and (max-width: 650px) {
  .investing-club-desktop-logo {
    display: none;
  }
  .investing-club-mobile-logo {
    display: block;
    margin: 20px auto;
    max-width: 363.25px;
    width: 100%;
    height: auto;
  }
  .investing-club > #view-state1 > div > .container > .right-pane,
  .investing-club > #view-state1 > div > .container > .left-pane {
    background: unset !important;
  }
  .investing-club > #view-state1 > div > .container {
    background: linear-gradient(0deg, rgba(4, 150, 255, 0.3) 0%, rgba(4, 150, 255, 0) 54.2%);
  }

  .alt-price {
    left: 23%;
  }

  .investing-club .alt-price {
    left: auto;
  }

  .investing-club
    > #view-state1
    > div
    > .container
    > .right-pane
    > .right-pane__contents
    > .right-pane__contents__footer
    > .left-pane__signout
    span {
    color: #026dbc;
  }

  .investing-club
    > #view-state1
    > div
    > .container
    > .right-pane
    > .right-pane__contents
    > .right-pane__contents__footer
    > .left-pane__signout
    span:hover {
    color: #0496ff;
  }
}

/* end investing club */

/* all access */
/* term selector component template */
.all-access {
  align-items: flex-end;
}

.all-access .plan--selected {
  border: 2px solid #0053cf;
}

.all-access .plan {
  border-radius: 25px;
  padding: 0;
}

.all-access-content {
  width: 100% !important;
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  box-shadow: 0px 10px 0 0px #002f6c inset;
  border-radius: 22px;
}

.all-access-content .flag {
  font-family: 'Proxima Nova', sans-serif;
  text-align: center;
  background: #fcb700;
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #171717;
  margin: -7px auto -7px;
  padding: 5px 10px;
  width: fit-content;
}

.all-access-content .term-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
  padding: 2px;
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
  color: #002f6c;
  padding: 5px 0;
}

.all-access-content .alt-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  position: relative;
}

.all-access-content .alt-price .superscript {
  font-size: 6px;
  line-height: 13px;
}

.strike {
  border: 1px solid #424242;
  background: #424242;
  height: 1px;
  transform: rotate(-12deg);
  width: 45px;
  position: absolute;
}

.all-access-content .term-price {
  font-size: 18px;
  line-height: 16px;
  color: #000000;
  padding: 15px 0 0 0;
}

.all-access-content .term-price .superscript {
  font-size: 8px;
  line-height: 6px;
  position: relative;
  top: -5px;
  margin-left: -3px;
}

/* checkout template */

.all-access .left-pane {
  padding-top: 0;
}

.all-access
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__input
  > #payment-form-component
  > div
  > div
  > div
  > div
  > div
  > div
  > .payment-options-wrapper
  > .payment-options
  .button.pay.payment-method-selected {
  border: 1px solid #0053cf;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
}

.all-access
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__input
  > div
  > div
  > .promo-code-component
  > a.button.promo-code-apply {
  color: #002f6c;
  background-color: rgba(0, 47, 108, 0.24);
}

.all-access
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__input
  > div
  > div
  > .promo-code-component
  > a.button.promo-code-apply:hover {
  color: #002f6c;
  background-color: rgba(0, 47, 108, 0.35);
}

.all-access
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__footer
  > .left-pane__signout
  span {
  color: #0053cf;
}

.all-access
  > #view-state1
  > div
  > .container
  > .left-pane
  > .left-pane__contents
  > .left-pane__contents__footer
  > .left-pane__signout
  span:hover {
  color: #002f6c;
}

.all-access > #view-state1 > div > .container > .right-pane > .right-pane__contents {
  background: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg width='580' height='546' viewBox='0 0 580 546' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M671.75 133.799L671.75 133.8L536.244 443.365L497.524 174.701C497.524 174.7 497.524 174.699 497.524 174.699C496.299 165.678 499.218 157.501 504.333 150.283C509.453 143.06 516.757 136.82 524.244 131.706C531.728 126.595 539.371 122.624 545.146 119.931C548.032 118.584 550.45 117.558 552.146 116.868C552.993 116.524 553.66 116.263 554.114 116.089C554.342 116.002 554.516 115.937 554.632 115.893C554.656 115.884 554.678 115.876 554.697 115.869C554.725 115.859 554.747 115.851 554.764 115.844L554.797 115.832L554.805 115.829L554.807 115.829C554.808 115.829 554.808 115.828 554.637 115.358L554.808 115.828L555.315 115.645L555.093 115.153C552.129 108.591 545.567 105.426 539.859 103.895C536.994 103.126 534.313 102.761 532.35 102.587C531.368 102.5 530.564 102.461 530.004 102.443C529.724 102.435 529.505 102.431 529.355 102.43C529.28 102.43 529.222 102.43 529.183 102.43L529.137 102.43L529.128 102.43L529.125 102.43L487.222 102.43C480.986 36.4717 540.758 -11.4401 605.546 3.24078L605.548 3.24113C669.296 17.4728 692.447 86.7763 671.75 133.799Z' stroke='%230053CF' stroke-opacity='0.07'/%3E%3Cpath d='M153.358 369.324L417.53 545.413H104.405C67.781 545.413 37.8591 530.853 19.6918 507.603C1.52687 484.357 -4.92589 452.375 5.48072 417.445C12.5433 393.821 32.6978 370.535 59.5045 358.786C86.2868 347.048 119.711 346.825 153.358 369.324L153.358 369.324Z' stroke='%230053CF' stroke-opacity='0.07'/%3E%3Cpath d='M335.795 3.147L335.797 3.14667C402.045 -11.849 463.343 38.7508 453.515 107.096L405.099 443.364L269.593 133.706L269.593 133.705C248.896 86.6821 272.047 17.3786 335.795 3.147Z' stroke='%230053CF' stroke-opacity='0.07'/%3E%3Cpath d='M107.659 161.392C152.229 121.121 232.867 129.638 263.313 198.414L393.282 494.931L122.097 314.073C122.097 314.073 122.097 314.072 122.097 314.072C86.9959 290.635 75.5665 259.57 76.8066 230.821C78.0481 202.037 91.9921 175.566 107.659 161.392Z' stroke='%230053CF' stroke-opacity='0.07'/%3E%3Cpath d='M787.985 369.324L787.986 369.324C821.633 346.825 855.057 347.048 881.839 358.786C908.646 370.535 928.8 393.821 935.863 417.445C946.269 452.376 939.817 484.357 921.652 507.603C903.484 530.853 873.563 545.413 836.939 545.413H523.814L787.985 369.324Z' stroke='%230053CF' stroke-opacity='0.07'/%3E%3Cpath d='M548.062 494.931L678.03 198.414C708.476 129.638 789.114 121.121 833.685 161.392C849.352 175.613 863.295 202.085 864.537 230.856C865.777 259.593 854.348 290.635 819.246 314.072C819.246 314.072 819.246 314.073 819.246 314.073L548.062 494.931Z' stroke='%230053CF' stroke-opacity='0.07'/%3E%3C/svg%3E");
  background-size: 438px auto;
  background-repeat: no-repeat;
  background-position: 100% 95%;
}

.all-access
  > #view-state1
  > div
  > .container
  > .right-pane
  > .right-pane__contents
  > .right-pane__contents__subscribe
  > .subscribe-button-container
  > a.button.complete-purchase {
  background: #0053cf !important;
  border-radius: 3px;
}

.all-access
  > #view-state1
  > div
  > .container
  > .right-pane
  > .right-pane__contents
  > .right-pane__contents__subscribe
  > .subscribe-button-container
  > a.button.complete-purchase:hover {
  background: #002f6c !important;
  border-radius: 3px;
}

.all-access-desktop-logo {
  margin: 20px auto 0 auto;
  display: block;
  max-width: 237px;
  width: 100%;
  height: auto;
}

.all-access-mobile-logo {
  display: none;
}

@media only screen and (max-width: 650px) {
  .all-access-desktop-logo {
    display: none;
  }
  .all-access-mobile-logo {
    display: block;
    margin: 20px auto;
    max-width: 237px;
    width: 100%;
    height: auto;
  }
  .all-access > #view-state1 > div > .container > .right-pane,
  .investing-club > #view-state1 > div > .container > .left-pane {
    background: unset !important;
  }
  .all-access > #view-state1 > div > .container {
    background: #ffffff;
  }

  .alt-price {
    left: 23%;
  }

  .all-access .alt-price {
    left: auto;
  }

  .all-access
    > #view-state1
    > div
    > .container
    > .right-pane
    > .right-pane__contents
    > .right-pane__contents__footer
    > .left-pane__signout
    span {
    color: #026dbc;
  }

  .all-access
    > #view-state1
    > div
    > .container
    > .right-pane
    > .right-pane__contents
    > .right-pane__contents__footer
    > .left-pane__signout
    span:hover {
    color: #0496ff;
  }
}
/* end all access */

/* checkout */

/*-------------------------------------------------------------------------------------------------------
Receipt screen
-----------------------------------------------------------------------------------------------------*/

.receipt {
  margin-top: 50px;
  margin-bottom: 30px;
  line-height: 20px;
  width: 440px;
  height: 460px;
}

.receipt hr {
  width: 360px;
  background-color: #d1d5d8;
  height: 1px;
  margin: 30px auto;
  clear: both;
}

.receipt a {
  line-height: 16px;
  color: #2d648a;
  font-family: 'Proxima Nova', Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.receipt p {
  line-height: 20px;
}

.receipt .close-button-wrapper {
  text-align: center;
}

.receipt .close-button-wrapper a.button {
  background-color: #3da5ed;
  color: white;
  text-transform: uppercase;
  min-width: inherit;
}

.receipt .section {
  text-align: center;
  margin: auto;
}

.receipt .section p {
  padding: 0;
  margin: 0;
}

.receipt .section1 {
  font-family: 'Proxima Nova', Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #424858;
}

.receipt .section2 {
  margin-top: 28px;
  font-family: 'Proxima Nova', Helvetica, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #424858;
  line-height: 20px;
}

.receipt .section2 .link {
  margin-top: 5px;
}

.receipt .section3 {
  margin-top: 20px;
  font-size: 16px;
  color: #424858;
  line-height: 20px;
}

.receipt ul.blocks {
  margin-top: 10px;
  text-align: center;
  list-style: none;
}

.receipt ul.blocks li {
  display: inline-block;
  height: 45px;
  vertical-align: middle;
}

.receipt ul.blocks .seperator {
  margin: 0 15px;
}

.receipt ul.blocks .seperator .line {
  width: 1px;
  height: 100%;
  background-color: #d3d4d6;
}

.receipt .button-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.receipt .button-container button {
  background: #3da5ed;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 12px 20px;
}

.receipt .section-container {
  width: 710px;
  height: 350px;
  margin-top: 100px;
  z-index: 99;
  font-family: 'Proxima Nova';
  font-weight: 500;
  -webkit-transition: all 0.5s ease-in-out;
}

@media (min-width: 351px) and (max-width: 450px) {
  .receipt {
    margin-top: 0;
    top: -20px;
    position: relative;
    height: 520px;
    width: 100%;
  }
  .mobile #checkout-container.thank-you-interstitial .section-container {
    margin-top: 0px;
  }
  .mobile #checkout-container.thank-you-interstitial .tblock3 {
    width: 300px !important;
  }
  .mobile #checkout-container.thank-you-interstitial #tblock3 {
    font-size: 16px;
  }
  .mobile #checkout-container.thank-you-interstitial .ul-container {
    margin-left: 0px;
  }
  .mobile #checkout-container.thank-you-interstitial .ul-wrapper {
    margin: auto;
    top: 250px !important;
  }
  .mobile #checkout-container.thank-you-interstitial .tblock3 {
    margin: auto;
  }
  .mobile #checkout-container.thank-you-interstitial .arrow-container {
    margin: auto;
  }
  .mobile #checkout-container.thank-you-interstitial .text-block {
    padding-top: 60px;
  }
  .mobile #checkout-container.thank-you-interstitial #image-list-container {
    height: 560px;
  }
  .mobile #checkout-container.thank-you-interstitial #image-list-container li {
    height: 480px;
  }
  .mobile #checkout-container.thank-you-interstitial #image-list-container li img {
    width: 350px;
  }
  .mobile #checkout-container.thank-you-interstitial .arrow-container {
    top: 80px;
    z-index: 99;
  }
  .mobile #checkout-container.thank-you-interstitial .image-mask-wrapper {
    width: 590px !important;
    top: -360px;
    left: -100px;
  }
  .mobile #checkout-container.thank-you-interstitial #close {
    width: 260px;
    padding: 12px 20px;
    font-size: 18px;
  }
}

@media (max-width: 350px) {
  .receipt {
    height: 530px !important;
  }
  .mobile #checkout-container.thank-you-interstitial .section-container {
    margin-top: 20px !important;
  }
  .mobile #checkout-container.thank-you-interstitial .text-block {
    padding-top: 50px !important;
    position: relative;
  }
  .mobile #checkout-container.thank-you-interstitial .tblock1 {
    font-size: 30px;
    font-weight: 500;
  }
  .mobile #checkout-container.thank-you-interstitial .tblock2 {
    padding: 0px !important;
  }
  .mobile #checkout-container.thank-you-interstitial .tblock2 img {
    width: 300px;
  }
  .mobile #checkout-container.thank-you-interstitial #tblock3 {
    font-size: 16px;
    margin-left: -10px;
    width: 300px;
  }
  .mobile #checkout-container.thank-you-interstitial #tblock3 p {
    margin: auto 20px;
  }
  .mobile #checkout-container.thank-you-interstitial .ul-container {
    margin-top: 50px;
    top: 260px;
  }
  .mobile #checkout-container.thank-you-interstitial .arrow-container {
    width: 340px;
    left: -10px;
    z-index: 99;
    top: 140px;
  }
  .mobile #checkout-container.thank-you-interstitial .image-mask-wrapper {
    width: 590px !important;
    top: -350px !important;
    left: -125px !important;
  }
  .mobile #checkout-container.thank-you-interstitial #close {
    width: 250px !important;
    font-size: 18px;
    padding: 12px 20px;
  }
}

.tblock1 {
  font-size: 30px;
  color: #424858;
  height: 29px;
  font-family: 'Proxima Nova';
  font-weight: 500;
}

.tblock2 {
  padding-left: 15px;
  margin-top: 16px !important;
  margin-bottom: 15px !important;
}

.tblock3 {
  width: 380px;
  color: #424858;
  margin-top: 20px;
  font-family: 'Proxima Nova', Helvetica, sans-serif;
  font-weight: 500;
  font-size: 20px;
}

.tblock3 {
  line-height: 30px;
  margin: auto;
}

.text-block {
  padding-top: 10px;
  height: 250px;
  margin: auto !important;
}

.ul-wrapper {
  position: relative;
  top: 150px;
}

.ul-container {
  height: 25px;
  display: inline-block;
  margin-top: 120px;
  position: relative;
  top: 150px;
  z-index: 99;
}

.arrow-container {
  z-index: 99;
  position: relative;
  top: 40px;
}

#leftArrow {
  float: left;
  visibility: hidden;
}

#leftArrow.disabled,
#leftArrow.disabled:hover {
  color: #bbb !important;
}

.arrowWrapper {
  height: 25px;
  color: #428cce;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
}

.arrowWrapper:hover {
  color: #3da5ed;
}

#rightArrow {
  float: right;
}

.anchorContainer {
  margin: auto;
}

.anchorContainer li {
  float: left;
  margin-left: 7.5px;
  margin-right: 7.5px;
  background: #ccd6d8;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
}

.image-mask-wrapper {
  width: 590px;
  position: relative;
  top: -400px;
  margin-bottom: -500px;
  visibility: visible;
  z-index: 0;
  -webkit-transition: opacity 1s ease-in-out;
}

#image-container {
  overflow: hidden;
}

.arrow {
  font-size: 30px;
  font-weight: 900;
  position: relative;
  top: 4px;
}

#leftS:hover {
  content: url('https://stg-ec02fm.cnbc.com/applications/cnbc.com/staticcontent/img/tinyPass/left-arrow-light.png');
}

#rightS:hover {
  content: url('https://stg-ec02fm.cnbc.com/applications/cnbc.com/staticcontent/img/tinyPass/right-arrow-light.png');
}

#image-list-container {
  width: 2500px;
  height: 500px;
  padding-left: 0;
}

#image-list-container li {
  float: left;
  width: 590px;
  height: 375px;
  visibility: visible;
}

#close {
  position: relative;
  top: 40px;
  width: 360px;
  background: #3da5ed;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 18px 20px;
  margin: auto;
  font-size: 22px;
  text-align: center;
  font-family: 'Proxima Nova';
  font-weight: 500;
  -webkit-transition: opacity 0.5s ease-in-out;
}

button:hover {
  background: #3792d4;
}

button:active,
button:focus {
  box-shadow: 0 2px 3px rgba(45, 122, 173, 0.75) inset;
  -moz-box-shadow: 0 2px 3px rgba(45, 122, 173, 0.75) inset;
  -webkit-box-shadow: 0 2px 3px rgba(45, 122, 173, 0.75) inset;
  background: #3da5ed;
  filter: none;
  border: none;
}

/*-------------------------------------------------------------------------------------------------------
User data forms
-----------------------------------------------------------------------------------------------------*/

.user-data-form .table-form-inline {
  margin-bottom: 0px;
}

.user-data-form .table-form-inline .input {
  margin-left: 5px;
}

.user-data-form .field-wrapper {
  border: 1px solid #e4e7eb;
  border-radius: 2px;
}

.user-data-form .field-first-name {
  width: 49% !important;
  display: table-cell;
}

.user-data-form .field-last-name {
  width: 49% !important;
  display: table-cell;
}

/*-------------------------------------------------------------------------------------------------------
Credit card form styles
-----------------------------------------------------------------------------------------------------*/

.auto-renew-purchase {
  margin-bottom: 0px;
  font-size: 0.9em;
}

.cc_new_card label.icon {
  display: none;
}

.cc_new_card .table-form-inline {
  margin-bottom: 30px;
}

.cc_new_card .field-wrapper div.input {
  margin-left: 5px;
}

/* credit card entry form */

.new-card-form .field-wrapper {
  border: 1px solid #e4e7eb;
  border-radius: 2px;
}

.new-card-form .field-card-number {
  width: 100% !important;
  display: table-cell;
}

.new-card-form .field-card-expiry-month {
  width: 33% !important;
  display: table-cell;
  padding-top: 20px;
}

.new-card-form .field-card-cvv {
  width: 33% !important;
  display: table-cell;
  padding-top: 20px;
}

.new-card-form .field-card-postal-code {
  width: 33% !important;
  display: table-cell;
  padding-top: 20px;
}

/*-------------------------------------------------------------------------------------------------------
Paypal styles
-----------------------------------------------------------------------------------------------------*/

.paypal-payment-form .row {
  top: 20px;
}

/*
General styles
*/

#checkout-container {
  border-radius: 5px;
}

::-webkit-input-placeholder {
  color: #a8a8a8;
}

::-moz-placeholder {
  color: #a8a8a8;
}

/* firefox 19+ */

:-ms-input-placeholder {
  color: #a8a8a8;
}

/* ie */

input:-moz-placeholder {
  color: #a8a8a8;
}

hr {
  margin-top: 20px;
  border: 1px solid #d1d5d8;
  margin-bottom: 20px;
}

a.button,
a.button:visited,
a.button:hover,
a.button:focus {
  background-color: #b1b8be;
  text-transform: uppercase;
}

a.button.complete-purchase {
  width: 50%;
}

.cnbc-logo {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 30px;
  margin-top: 30px;
}

div.view-state1 .auto-renew-footer {
  background-color: inherit;
  padding: 0px 40px 0px 40px;
}

div.view-state1 .complete-footer {
  background-color: inherit;
  padding: 0px 40px 0px 40px;
  text-align: center;
}

div.sub-title {
  margin-top: 15px;
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #424858;
  text-align: left;
  line-height: 16px;
  padding: 0 30px;
  margin-bottom: 15px;
}

div.sub-title-first {
  margin-bottom: 9px;
}

div.term-item {
  overflow: hidden;
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #424858;
  margin-bottom: 6px;
  text-align: left;
  line-height: 18px;
}

.term-item-input {
  float: left;
}

div.term-item-content {
  margin-left: 18px;
  margin-left: 22px\9;
  margin-top: -2px;
  margin-top: 0\9;
}

div.term-item span.desc {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #737373;
  text-align: left;
  line-height: 22px;
}

div.term-item span.extra {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #31a745;
  text-align: left;
  line-height: normal;
}

div.policy {
  margin-top: 20px;
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 11px;
  text-align: left;
  line-height: 16px;
}

.std-padding {
  padding: 0 30px;
}

@media (max-width: 600px) {
  .payment-options {
    display: table;
  }
  .payment-options li {
    display: table-cell;
    padding: 5px;
    border-bottom: none;
    border-top: none !important;
  }
  .promo-code-component {
    margin-top: 30px;
  }
  #braintree-paypal-loggedout #braintree-paypal-button {
    position: absolute;
    width: auto !important;
    height: 40px !important;
    padding-right: calc(32% + 20px);
    padding-left: calc(32% + 20px);
  }
  .paypalbt-payment-form {
    margin-top: 20px;
  }
  .form__name {
    margin-top: 30px !important;
  }
  .add-new-account-msg {
    margin-top: 30px;
  }
  .cc_new_card .table-form-inline {
    margin-bottom: 0px;
  }
}

@media (max-width: 350px) {
  #braintree-paypal-loggedout #braintree-paypal-button {
    position: absolute;
    width: auto !important;
    height: 40px !important;
    padding-right: calc(25% + 20px);
    padding-left: calc(25% + 20px);
  }
}

@media (min-width: 360px) and (max-width: 400px) {
  #braintree-paypal-loggedout #braintree-paypal-button {
    position: absolute;
    width: auto !important;
    height: 40px !important;
    padding-right: calc(29% + 20px);
    padding-left: calc(29% + 20px);
  }
}

.promo-code-component .promo-code-input-wrapper {
  width: 72% !important;
  margin-right: 0;
  border: 1px solid #e4e7eb;
  border-radius: 2px;
}

.promo-code-component .promo-code-input-padding {
  width: 3%;
  position: relative;
  float: left;
  height: 40px;
}

.promo-code-component .promo-code-input-wrapper input {
  height: 40px;
  border: 0;
  box-shadow: none;
  height: 40px;
  padding: 10px 10px 10px 10px;
}

.promo-code-input-wrapper input[type='text'].error {
  background: #fff;
}

.promo-code-input-wrapper .field-error:before,
.promo-code-input-wrapper .field-error:after {
  display: none;
}

.promo-code-input-wrapper .field-error {
  position: absolute;
  top: 100%;
  margin-top: 0;
  background-color: transparent;
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 11px;
  border: 0 none;
  border-collapse: separate;
  border-radius: 4px;
  box-sizing: border-box;
  line-height: 30px !important;
  margin-right: 10px;
  padding: 0 3px;
  white-space: nowrap;
  z-index: 2;
  color: #e7494e;
}

div.subscriber-name {
  margin-top: 20px;
}

a.promo-code-apply {
  width: 25% !important;
  margin-right: 0;
  padding: 6px 0;
  margin-right: 0;
  margin-left: 0px;
  margin-top: -1px;
  min-width: initial !important;
  z-index: 9999;
}

.promo-code-component .promo-code-applied {
  background-color: #48ae65;
  width: 72% !important;
  padding: 8px 13px 4px;
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 100;
  line-height: 30px;
  margin-right: 3%;
}

.promo-code-component .promo-code-revert {
  width: 25%;
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  background-image: none;
  color: #fff;
  padding: 7px 0 5px;
  background-color: #b1b8be;
  text-align: center;
  text-transform: uppercase;
  height: auto;
  border-radius: 4px;
  line-height: 30px;
}

input[type='text'],
input[type='password'] {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-weight: normal;
  color: #a9a9a9;
}

a.button,
a.button:visited {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-weight: normal;
  font-size: 18px;
  background: #3da5ed;
  margin-bottom: 30px;
}

a.button:hover {
  background: #3792d4;
}

a.button:active {
  background: #3da5ed;
}

.policy {
  border-bottom: #ccd6db solid 1px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.policy a {
  color: #2d648a;
}

.policy a:hover {
  color: #c34c28;
}

#checkout-container .message-block {
  background: darkred;
  font-family: 'Proxima Nova';
  font-weight: 500;
}

input[type='radio'] {
  left: 2px;
  top: 2px;
  margin-right: 10px;
}

a,
.policy a {
  color: #2077b6;
}

a:hover,
.policy a:hover {
  color: #dd4839;
}

div.term-item {
  font-size: 13px;
  font-family: 'Proxima Nova';
  font-weight: 500;
  margin-bottom: 15px;
}

div.term-item-content {
  color: #737373;
  font-weight: normal;
  text-align: left;
  line-height: 22px;
}

div.term-item span.extra {
  color: #31a745;
}

a.button,
a.button:visited {
  font-family: 'Proxima Nova';
  font-weight: 500;
  font-size: 16px;
}

a.button:hover {
  color: white;
}

.table-form-inline input[type='text'],
.table-form-inline input[type='password'] {
  color: #424858;
}

div.policy {
  font-size: 11px;
  color: #737373;
  font-family: Arial;
}

a.button.complete-purchase {
  max-width: 124px;
}

#checkout-container .message-block {
  top: 40px;
}

hr {
  display: none;
}

.buy-with-applepay-button {
  width: inherit;
  height: 48px;
  min-width: 160px;
  line-height: 48px;
  background-color: #323232;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  display: block;
  margin: auto;
}

.buy-with-applepay-button__apple-logo {
  display: inline-block;
  background: url('../img/apple-pay-mark.svg') center 0 no-repeat !important;
  width: 62px;
  height: 40px;
  vertical-align: middle;
}
.input-wrapper .input {
  margin: 11px 0px 11px 5px !important;
}
.applepay-add-new-card {
  float: right;
  width: 115px;
  margin-right: 0 !important;
  background: url(https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/logos/apple-pay-white.svg)
    center no-repeat #000 !important;
}

.payment-options .button.pay.applepay_pw,
.payment-options .button.pay.applepay_ss,
.payment-options .button.pay.applepay_stripe,
.payment-options .button.pay.applepaybt {
  background-size: 140px 20px;
  background-image: url(https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/logos/apple-pay-black.svg);
}

.applepay-add-new-card {
  position: relative;
  float: left;
  top: 20px;
}

#braintree-paypal-button {
  border: 6px solid #ffc439;
  background-color: #ffc439;
  content: url('https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png');
  padding: 5px;
  border-radius: 3px;
}
#braintree-paypal-loggedout #braintree-paypal-button:hover {
  box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.05);
  border: 6px solid rgba(0, 0, 0, 0.05);
}

.form__name {
  margin-top: 0px;
}
.select-payment-options {
  margin-bottom: 0px;
}
.payment-options {
  padding: 0px 0 0px;
}
.payment-options li {
  background: none;
}

.payment-options-wrapper {
  margin: auto;
  margin-top: -20px;
  margin-bottom: -20px;
}

.payment-options .button.pay {
  border-radius: 5px;
  border: 1px solid #747474;
}

.payment-options .button.pay.credit,
.payment-options .button.pay.cyber_source,
.payment-options .button.pay.cyber_source_tms,
.payment-options .button.pay.datatrans,
.payment-options .button.pay.edgil_payway,
.payment-options .button.pay.eigen,
.payment-options .button.pay.obi,
.payment-options .button.pay.onet,
.payment-options .button.pay.spreedly,
.payment-options .button.pay.stripe,
.payment-options .button.pay.wirecard,
.payment-options .button.pay.worldpay,
.payment-options .button.pay.worldpay_cc_token {
  background-size: 62px auto;
  background-image: url('https://sc.cnbcfm.com/applications/cnbc.com/staticcontent/img/logos/credit-card.svg');
}

.payment-options .button.pay.payment-method-selected {
  border: 1px solid #00a857;
  box-shadow: 3px 3px 10px rgba(23, 23, 23, 0.1);
}

.payment-options .button.pay.payment-method-selected:after {
  display: none;
}

.paypalbt-payment-form,
.apple-pay-bt-form {
  padding: 0 5px;
}

.apple-pay-bt-form.row .add-new-account-msg {
  margin-top: 20px;
}

a.button.pay.paypalbt {
  background-image: url('https://');
}

.promo-code-component .promo-code-input-wrapper {
  border: none;
}

.promo-code-component .promo-code-input-wrapper input {
  border: 1px solid #e4e7eb;
  border-radius: 3px;
}

.table-form-inline input[type='text'] {
  padding-right: 0;
}

.receipt-footer {
  text-align: center;
  background: white;
}

.receipt-footer-wrapper {
  width: 100px;
  margin: 0 auto;
  padding: 15px 0;
}

.receipt .close-button-wrapper a.button {
  background-color: #3da5ed;
  color: white;
  text-transform: uppercase;
  min-width: inherit;
  width: 100px;
}

.zero-payment-form {
  text-align: center;
}

.xfinity-error-checkout {
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #424858;
  font-style: normal;
  text-align: left;
  line-height: 24px;
  letter-spacing: -0.02em;
  padding: 0 40px 20px;
}

.xfinity-error-checkout a.button.close {
  width: 84px;
  font-family: 'Proxima Nova', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  background-color: #b1b9b3;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  min-width: initial;
  display: block;
  margin: 30px auto 0;
}

div.sub-title-first {
  margin-bottom: 15px;
}

.cnbc-logo {
  margin-bottom: 40px !important;
}

@media (max-width: 600px) {
  div.back-to-payment-methods {
    margin: 50px 0 30px;
  }
}

.unClickable {
  pointer-events: none;
}

.clickable {
  pointer-events: auto;
}

.footer-modal {
  padding: unset !important;
}
.payment-method-paypalbt-row.selected .payment-method-paypalbt-cell {
  background-color: transparent !important;
  border: none !important;
}

.payment-method-paypal-express-checkout-row.selected .payment-method-paypal-express-checkout-cell {
  background-color: transparent !important;
  border: none !important;
}

.payment-method-paypal-express-checkout {
  margin-top: 10px;
}

</style>

<style  type="text/css" tp-style="offer-custom-style">
    /* Fonts */

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

/* Fonts - Proxima Nova */
@import url("https://use.typekit.net/tsc0tji.css");

/* Scaffolding  */

.unbutton {
  margin: 0;
  padding: 0;
  color: inherit;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  -webkit-box-shadow: none;
          box-shadow: none;
  text-shadow: none;
  border: 0;
}

/* Template */

.background{
  border: 2px solid #E2E2E2;
}

.template{
  background: #FFFFFF;
  margin: auto;
}

.top-flexBox{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-flexBox{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.mobile{
  display: none;
}

.logo{
  width: auto;
  height: 36px;
}

.lead{
  font-family: 'proxima-nova', sans-serif;
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.01em;
  color: #2E2E2E;
  max-width: 435px;
  margin: 5px auto 10px auto;
}

.sublead{
  text-align: center;
  max-width: 490px;
  margin: 0 auto 0 auto;
}

.sublead > span{
  font-style: italic;
}

.login{
  font-family: 'proxima-nova', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.02em;
  color: #2E2E2E;
}

.link, .link:visited, .link:active{
  font-family: 'proxima-nova', sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.02em;
  color: #00A857;
  text-decoration: none;
}

.hover:hover, .link:hover{
  color: #008456;
}

/* Button */

.button-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.checkout-button{
  display: inline-block;
  width: 295px;
  height: 40px;
  padding: 8px 32px;
  border: 1px solid #00A857;
  border-radius: 4px;
  font-family: 'proxima-nova', sans-serif;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  background: #00A857;
  margin: 0 auto 15px auto;
}

.inverse{
  color: #00A857;
  background: #FFFFFF;
  border: 1px solid #00A857;
}

/* Footer */

.footer-flexBox{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 30px;
}

.callout{
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 9px;
  line-height: 9px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

.footer-callout{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2E2E2E;
  opacity: 0.4;
}

.footer-link{
  font-family: 'proxima-nova', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.02em;
  color: #00A857;
}

/* Responsive */

@media only screen and (max-width: 450px){
  .header-flexBox{
    padding: 15px;
  }
  .logo{
    height: 24px;
  }
  .lead{
    font-size: 22px;
    line-height: 32px;
    margin: 10px;
  }
  .footer-flexBox{
    padding: 15px;
  }
}
</style>

<style  type="text/css" tp-style="state1-custom-style">
    
</style>

<style  type="text/css" tp-style="receipt-custom-style">
    
</style>

<style  type="text/css" tp-style="alreadyHasAccess-custom-style">
    
</style>






</body>



</html>