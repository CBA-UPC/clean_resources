//tealium universal tag - utag.sync ut4.0.202312131616, Copyright 2023 Tealium.com Inc. All Rights Reserved.
(function(){window.utag_sync=function(profile,version,env,test,privacy){try{if(profile&&window.localStorage){localStorage.utag_sync_version=profile+":"+version+":"+env+":"+test+"-{"+privacy+"}";}else{if(window.console&&console.log){console.log("utag.sync.js: "+localStorage.utag_sync_version);}}}catch(e){}}
var isProd=(/^(www|es|qpp|qppar|csr)\.cms\.gov/i).test(document.location.hostname);var isTest=(window.localStorage&&window.localStorage.utag_sync=="test");var optoutmultiCookie=decodeURI(readCookie('CONSENTMGR'));utag_sync("cms","v1",(isProd?"prod":"dev"),(isTest?"test":"actual"),optoutmultiCookie);if(optoutmultiCookie&&!(/c1:0/i).test(optoutmultiCookie)){}else{}
if(optoutmultiCookie&&!(/c3:0/i).test(optoutmultiCookie)){}else{}
if(optoutmultiCookie&&!(/c7:0/i).test(optoutmultiCookie)){}else{}})();
