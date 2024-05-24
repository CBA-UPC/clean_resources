/*!
######################################################
# ORA_DYN.JS
# VERSION: 1.02
# ORIGINAL BUILD DATE: 11-June-2018
# COPYRIGHT ORACLE CORP 2017 [UNLESS STATED OTHERWISE]
######################################################
*/
try{oracle.truste.api.getConsentDecision().consentDecision;oracle.truste.api.getConsentDecision().source;}catch(err){var oracle=oracle||{};oracle.truste={};oracle.truste.api={};(function(){var trusteCookieName="notice_preferences";var trusteStorageItemName="truste.eu.cookie.notice_preferences";this.getCookieName=function(){return trusteCookieName;};this.getStorageItemName=}).apply(oracle.truste);(function(){var trusteCommon=oracle.truste;unction getLocalStorageItem(storageKey){if(typeof(Storage)!=="undefined"){return localStorage.getItem(storageKey);}return null;}function getTRUSTeLocalStorageValue(storageKey){var value=getLocalStorageItem(storageKey);if(value!=null){var obj=JSON.parse(value);return obj.value;}return null;}this.getConsentCode=function(){var value=getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName())||getCookie(trusteCommon.getCookieName());if(value==null){return -1;}else{return parseInt(value)+1;}};this.getConsentDecision=function(){var value=this.getConsentCode();if(value==-1){var text='{"consentDecision": 0, "source": "implied"}';return JSON.parse(text);}else{var text='{"consentDecision": '+parseInt(value)+', "source": "asserted"}';return JSON.parse(text);}};}).apply(oracle.truste.api);}
/*! Set the default files */
var ora_local="ora_code_dyn.js";var ora_global="ora_code.js";var TRUSTeLevel=s_setConsentLevel(0);
/*! Check to see if the URL is http OR https */
var host_type=(window.location.protocol.toLowerCase().indexOf("https")!=-1)?"https":"http";
/*! Check to see if page is DEV/STAGE or PRODUCTION */
var is_test=(location.host.indexOf("-stage")!=-1||location.host.indexOf("-content")!=-1||location.host.indexOf("localhost")!=-1||location.host.indexOf("-dev")!=-1||location.host.indexOf("-sites")!=-1);var enable_tracking=true;if(TRUSTeLevel==-1||TRUSTeLevel==0){if(navigator.doNotTrack==1||window.doNotTrack==1||navigator.msDoNotTrack==1){enable_tracking=false;}
/*! Set the default path for files */
}var ora_path=(is_test==true)?"://www-portal-stage.oracle.com/us/assets/metrics/":"://www.oracleimg.com/us/assets/metrics/";
/*! Run the local and global ora_code.js file */
(function(){unction async_load(){if(TRUSTeLevel!=1&&enable_tracking){addScriptFiles(host_type+ora_path+ora_local);addScriptFiles(host_type+ora_path+ora_global);}}async_load();})();function s_setConsentLevel(cLevel){try{cLevel=truste.cma.callApi("getConsentDecision","oracle.com").consentDecision;}catch(err){cLevel=s_getCookieData("notice_preferences").split(":")[0];if(cLevel==""){cLevel=0;}else{cLevel=++cLevel;}}return cLevel;}function s_getCookieData(label){var labelLen=label.length;var cLen=document.cookie.length;var i=0;var cEnd;while(i<cLen){var j=i+labelLen;if(document.cookie.substring(i,j)==label){cEnd=document.cookie.indexOf(";",j);if(cEnd==-1){cEnd=document.cookie.length;}j++;return decodeURIComponent(document.cookie.substring(j,cEnd).replace("+","%20"));}i++;}return"";}