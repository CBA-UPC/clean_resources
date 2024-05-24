var truste=window.truste||{};truste.bn||(truste.bn={});truste.eu||(truste.eu={});truste.util||(truste.util={});
truste.util.error=function(h,d,g){g=g||{};var f=d&&d.toString()||"",c=g.caller||"";if(d&&d.stack){f+="\n"+d.stack.match(/(@|at)[^\n\r\t]*/)[0]+"\n"+d.stack.match(/(@|at)[^\n\r\t]*$/)[0]
}truste.util.trace(h,f,g);if(truste.util.debug||!d&&!h){return}var a={apigwlambdaUrl:"https://api-js-log.trustarc.com/error",enableJsLog:false};
if(a.enableJsLog){delete g.caller;delete g.mod;delete g.domain;delete g.authority;g.msg=h;var e=new (self.XMLHttpRequest||self.XDomainRequest||self.ActiveXObject)("MSXML2.XMLHTTP.3.0");
e.open("POST",a.apigwlambdaUrl,true);e.setRequestHeader&&e.setRequestHeader("Content-type","application/json");
e.send(truste.util.getJSON({info:truste.util.getJSON(g)||"",error:f,caller:c}))}};truste.util.trace=function(){if(self.console&&console.log&&(this.debug||this.debug!==false&&(self.location.hostname.indexOf(".")<0||self.location.hostname.indexOf(".truste-svc.net")>0))){if(console.log.apply){console.log.apply(console,arguments)
}else{var a=Function.prototype.bind.call(console.log,console);a.apply(console,arguments)}return true}return false
};truste.util.getJSON=function(b){if(self.JSON&&!(self.JSON.org||self.JSON.license||self.JSON.copyright)){return self.JSON.stringify(b)
}if(b instanceof Array){var d="[";if(b.length){d+=truste.util.getJSON(b[0]);for(var c=1;c<b.length;c++){d+=","+truste.util.getJSON(b[c])
}}return d+"]"}else{if(typeof b=="string"){return'"'+b+'"'}else{if((b) instanceof Object){var a=false,d="{";
for(var e in b){d+=(a?",":"")+'"'+e+'":'+truste.util.getJSON(b[e]);a=true}return d+"}"}else{return b===undefined?undefined:b+""
}}}};(function(){var a=self.onerror;self.onerror=function b(h,f,c,d,g){var e=[].slice.call(arguments);
var i=h+(f?"; "+f:"")+(c?" "+c:"")+(d?":"+d:"");if((i+""+(g&&g.stack)).match(/truste|trustarc|notice/)){truste.util.error("Got Window Error:",g&&g.stack?g:i,{product:"cm",tag:f})
}a&&a.apply(self,e)}})();truste.bn.addScriptElem=function(e,f,a){if(!e&&"string"!=typeof e){return null
}var d=document.createElement("SCRIPT");d.src=e;d.setAttribute("async","async");d.setAttribute("crossorigin","");
d.setAttribute("importance","high");var b=document.querySelector("[nonce]");b&&d.setAttribute("nonce",b.nonce||b.getAttribute("nonce"));
var c=function(h){var g;if(h&&h.type=="error"){g=2}else{if(h&&h.type=="load"||d.readyState=="loaded"){g=1
}}if(g){d.onload=d.onreadystatechange=d.onerror=null;f instanceof Function&&f(d,g)}};d.onload=d.onreadystatechange=d.onerror=c;
(document.getElementById(a)||document.getElementsByTagName("body")[0]||document.getElementsByTagName("head")[0]).appendChild(d);
return d};truste.bn.msglog=function(a,b){truste.eu&&truste.eu.msg&&truste.eu.msg.log(a,truste.eu.bindMap,b)
};truste.bn.checkPreference=function(){if(truste.eu.bindMap){var a=truste.eu.bindMap;if((a.feat.crossDomain&&!a.feat.isConsentRetrieved)||(truste.util.isConsentCenter()&&!a.feat.isConsentCenterInitialized)){a.bnFlags.consentUnresolved=true;
return false}var c=shouldRepop();if(c){a.feat.dropPopCookie=true}if(a.feat.isDNTOptoutEvent||a.feat.isGPCOptoutEvent){return a.feat.dntShowUI
}if(a.prefCookie){if(c||shouldResolveConsent()){a.feat.isRepopEvent=true;a.feat.isReconsentEvent=c}}return !a.prefCookie||a.feat.isRepopEvent
}return false};truste.bn.checkConsentUnresolved=function(d,a){if(truste.eu.bindMap){var c=truste.eu.bindMap;
var b=setInterval(function(){if((b&&c.feat.isConsentRetrieved&&!truste.util.isConsentCenter())||(b&&truste.util.isConsentCenter()&&c.feat.isConsentCenterInitialized!=undefined)){c.bnFlags.consentUnresolved=false;
b=clearInterval(b);if(truste.bn.checkPreference()){d()}else{a()}}},100);setTimeout(5500)}};function shouldRepop(){if(truste.eu.bindMap.popTime){var a=new Date().getTime();var c=truste.util.readCookie(truste.eu.COOKIE_REPOP,!0);
var b=truste.eu.bindMap.popTime;return b&&b!=c&&a>=b}return false}function shouldResolveConsent(){var c=truste.eu.bindMap;
if(c.feat.consentResolution&&c.behaviorManager=="eu"){var a=truste.util.readCookie(truste.eu.COOKIE_GDPR_PREF_NAME,true);
if(a){a=a.split(":");var b=new RegExp(c.behavior+"."+c.behaviorManager);if(!b.test(a[2])){if(/(us|none)/i.test(a[2])){return true
}}}}return false}(function trustarcBanner(){var h=truste.eu.bindMap={version:"v1.7-4958",domain:"xiaomi.com",width:parseInt("600"),height:parseInt("270"),baseName:"te-notice-clr1-77c98c56-669c-4880-b3ed-7d46206689e9",showOverlay:"{ShowLink}",hideOverlay:"{HideLink}",anchName:"te-notice-clr1-77c98c56-669c-4880-b3ed-7d46206689e9-anch",intDivName:"te-notice-clr1-77c98c56-669c-4880-b3ed-7d46206689e9-itl",iconSpanId:"te-notice-clr1-77c98c56-669c-4880-b3ed-7d46206689e9-icon",containerId:(!"teconsent"||/^_LB.*LB_$/.test("teconsent"))?"teconsent":"teconsent",messageBaseUrl:"http://consent.trustarc.com/noticemsg?",originBaseUrl:"https://consent.trustarc.com/",daxSignature:"",privacyUrl:"",prefmgrUrl:"http://consent-pref.trustarc.com?type=xiaomi_temp_v5&layout=gdpr",text:"true",icon:"Cookie settings",iframeTitle:"TrustArc Cookie Consent Manager",closeBtnAlt:"close button",teconsentChildAriaLabel:"Cookie Preferences, opens a dedicated popup modal window",locale:"es",language:"es",country:"es",state:"",categoryCount:parseInt("4",10)||3,noticeJsURL:((parseInt("0")?"https://consent.trustarc.com/":"http://consent.trustarc.com/"))+"asset/notice.js/v/v1.7-4958",assetServerURL:(parseInt("0")?"https://consent.trustarc.com/":"http://consent.trustarc.com/")+"asset/",consensuUrl:"https://consent.trustarc.com/",cdnURL:"https://consent.trustarc.com/".replace(/^(http:)?\/\//,"https://"),iconBaseUrl:"http://consent.trustarc.com/",behavior:"implied",behaviorManager:"eu",provisionedFeatures:"",cookiePreferenceIcon:"es-cookiepref.png",cookieExpiry:parseInt("395",10)||395,closeButtonUrl:"https://consent.trustarc.com/get?name=burton-close.svg",apiDefaults:'{"reportlevel":16777215}',cmTimeout:parseInt("6000",10),popTime:new Date("".replace(" +0000","Z").replace(" ","T")).getTime()||null,popupMsg:"",bannerMsgURL:"http://consent.trustarc.com/bannermsg?",IRMIntegrationURL:"",irmWidth:parseInt(""),irmHeight:parseInt(""),irmContainerId:(!"_LBirmcLB_"||/^_LB.*LB_$/.test("_LBirmcLB_"))?"teconsent":"_LBirmcLB_",irmText:"",lspa:"",ccpaText:"",containerRole:"",iconRole:"",atpIds:"",dntOptedIn:"",gpcOptedIn:"",seedUrl:"",allOptedIn:"",cmId:"",feat:{iabGdprApplies:true,consentResolution:false,dropBehaviorCookie:true,crossDomain:true,uidEnabled:true,replaceDelimiter:false,optoutClose:false,enableIRM:false,enableCM:true,enableBanner:true,enableCCPA:false,enableCPRA:false,enableIrmAutoOptOut:false,ccpaApplies:false,unprovisionedDropBehavior:false,unprovisionedIab:false,unprovisionedCCPA:false,dnt:false&&(navigator.doNotTrack=="1"||window.doNotTrack=="1"),dntShowUI:false,gpc:false&&(navigator.globalPrivacyControl||window.globalPrivacyControl),iabBannerApplies:false,enableTwoStepVerification:false,enableContainerRole:true,enableContainerLabel:true,enableIconRole:true,enableIconLabel:true,enableHasPopUp:"true"=="true",enableReturnFocus:false,enableShopify:0,enableTcfOptout:false,enableTransparentAlt:true,enableACString:false,gcm:{ads:undefined,analytics:undefined,adPersonalization:parseInt("undefined")||-1,adUserData:parseInt("undefined")||-1,functionality:parseInt("undefined")||-1,personalization:parseInt("undefined")||-1,security:parseInt("undefined")||-1},gpp:{enabled:"false"=="true",mspaEnabled:"false"=="true",mspaMode:parseInt("0")||0,enableStateSpecificString:"false"=="true",gppApplies:"false"=="true"},autoblock:false,gtm:1,enableStoredConsent:false,enableIab2_2:"false"=="true"},autoDisplayCloseButton:false,localization:{modalTitle:"Sus opciones con respecto al uso de cookies en este sitio"},currentScript:self.document.currentScript};
if(/layout=gdpr/.test(h.prefmgrUrl)){h.isGdprLayout=true}if(/layout=iab/.test(h.prefmgrUrl)){h.isIabLayout=true
}if(/layout=gpp/.test(h.prefmgrUrl)){h.isGppLayout=true}if(self.location.protocol!="http:"){for(var f in h){if(h[f]&&h[f].replace&&typeof h[f]==="string"){h[f]=h[f].replace(/^(http:)?\/\//,"https://")
}}}(function(){var i=h.seedUrl.match(/^{(SeedURL)}$/);if(i&&i.length>1){h.seedUrl=""}i=h.allOptedIn.match(/^{(CategoriesIdx)}$/);
if(i&&i.length>1){h.allOptedIn=""}i=h.cmId.match(/^{(CMID)}$/);if(i&&i.length>1){h.cmId=""}})();truste.eu.noticeLP=truste.eu.noticeLP||{};
truste.eu.noticeLP.pcookie=undefined;truste.util.samesite=function(j){return k(j);tion m(x,w){var y=new RegExp("[(]iP.+; CPU .*OS (\\d+)[_\\d]*.*[)] AppleWebKit[/]","ig");
var z=y.exec(w);if(z&&z.length===2){var v=+z[1];return v===x}return false}function l(y,A,w){var z=new RegExp("[(]Macintosh;.*Mac OS X (\\d+)_(\\d+)[_\\d]*.*[)] AppleWebKit[/]","ig");
var B=z.exec(w);if(B&&B.length===3){var v=+B[1];var x=+B[2];return(v===y)&&(x===A)}return false}function p(v){var w=new RegExp("Version[/].* Safari[/]","ig");
var x=w.exec(v);if(x&&x.length){return !n(v)}return false}function t(v){var w=new RegExp("^Mozilla[/][.\\d]+ [(]Macintosh;.*Mac OS X [_\\d]+[)] AppleWebKit[/][.\\d]+ [(]KHTML, like Gecko[)]$","ig");
var x=w.exec(v);if(x&&x.length){return true}return false}function n(v){var w=new RegExp("Chrom(e|ium)","ig");
var x=w.exec(v);if(x&&x.length){return true}return false}function r(x,w){var y=new RegExp("Chrom[^ /]+[/](\\d+)[.\\d]* ","ig");
var z=y.exec(w);if(z&&z.length===2){var v=+z[1];return v>=x}return false}function s(v){var w=new RegExp("UCBrowser[/]","ig");
var x=w.exec(v);if(x&&x.length){return true}return false}function o(A,z,D,w){var v=new RegExp("UCBrowser[/](\\d+)[.](\\d+)[.](\\d+)[.\\d]* ","ig");
var y=v.exec(w);if(y&&y.length===4){var C=+y[1];var B=+y[2];var x=+y[3];if(C!=A){return C>A}if(B!=z){return B>z
}return x>=D}return false}};truste.util.createCookie=function(F,x,m,q,k){if(truste.util.cookie&&!k){x=truste.util.cookie.convert(x)
}var j=truste.eu.bindMap||{},C="; expires=";var z;if(!m){z=new Date();z.setDate(z.getDate()+j.cookieExpiry);
C+=z.toGMTString()}else{if(m=="0"){C=""}else{z=new Date(m);C+=m}}if(q&&truste.util.createCookieStorage){truste.util.createCookieStorage(F,x,z)
}var A=j.domain,t=self.location.hostname;var n=!!t.match(/^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}$/)||t=="localhost";
var u=n?t:t.replace(/^www\./,"");var o=((self.location.protocol=="https:")?" Secure;":"");var E=o?"None;":"Lax;";
var w=(truste.util.samesite&&!truste.util.samesite(navigator.userAgent)?"":" SameSite="+E)+o;if(typeof truste.eu.noticeLP.pcookie!="undefined"){document.cookie=F+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain="+(n?"":".")+u.replace(/^\./,"")+";"+w;
if(!j.topLevelDomain){var y=0,D=u,v=D.split("."),B=[],r="_gd"+(new Date()).getTime();while(y<(v.length-1)&&document.cookie.indexOf(r+"="+r)==-1){D=v.slice(-1-(++y)).join(".");
document.cookie=r+"="+r+";domain="+D+";"+w;B.push(r)}j.topLevelDomain=D;for(var l=0;l<B.length;l++){document.cookie=B[l]+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+D+";"
}document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+D+";"+w}u=j.topLevelDomain}self.document.cookie=F+"="+x+C+"; path=/;domain="+(n?"":".")+u.replace(/^\./,"")+";"+w
};truste.util.getRandomUUID=truste.util.getScriptElement=function(m,n,l){if(typeof m=="string"){m=new RegExp(m)}if(typeof l=="string"){l=new RegExp(l)
}if(!(m instanceof RegExp)){return null}if(typeof l!="undefined"&&!(l instanceof RegExp)){return null
}var p=self.document.getElementsByTagName("script");var o;for(var j,k=p.length;k-->0&&(j=p[k]);){o=(l)?l.test(j.src):true;
if((n||!j.id)&&m.test(j.src)&&o){return j}}return null};truste.util.getUniqueID=truste.util.initParameterMap=function(m,n){if(!(n instanceof Object)){n={}}if(!m||typeof m.src!="string"){n._query=n._url=""
}else{var k,j=n._url=m.src;j=(n._query=j.replace(/^[^;?#]*[;?#]/,"")).replace(/[#;?&]+/g,"&");if(j){for(j=j.split("&"),k=j.length;
k-->0;){var l=j[k].split("="),o=l.shift();if(!n[o]){if(l.length){n[o]=decodeURIComponent(l.join("="))
}else{n[o]=""}}}}m.id=n.sid=n.sid||truste.util.getUniqueID()}return n};truste.eu.COOKIE_GDPR_PREF_NAME="notice_gdpr_prefs";
truste.eu.COOKIE_SESSION="TAsessionID";truste.eu.SCRIPT_REGX=truste.eu.SCRIPT_REGX||/\.(truste|trustarc)\b.*\bnotice(\.0)?(\.exp)?(\.js)?\b.*\bdomain=/;
truste.eu.JS_REGX=truste.eu.JS_REGX||(truste.eu.bindMap&&truste.eu.bindMap.domain?"domain="+truste.eu.bindMap.domain:undefined);
truste.eu.jsNode1=truste.eu.bindMap.currentScript||truste.util.getScriptElement(truste.eu.SCRIPT_REGX,true,truste.eu.JS_REGX);
truste.eu.noticeLP=truste.util.initParameterMap(truste.eu.jsNode1,truste.eu.noticeLP||{});if(truste.eu.noticeLP.cookieName){truste.eu.COOKIE_GDPR_PREF_NAME=truste.eu.noticeLP.cookieName+"_gdpr";
truste.eu.COOKIE_SESSION=truste.eu.noticeLP.cookieName+"_session"}truste.util.readCookieSimple=function(i){var j=new RegExp("\\s*"+i.replace(".","\\.")+"\\s*=\\s*([^;]*)").exec(self.document.cookie);
if(j&&j.length>1){return j[1]}return null};var g=truste.util.readCookieSimple(truste.eu.COOKIE_SESSION);
if(g==null){userType=truste.util.readCookieSimple(truste.eu.COOKIE_GDPR_PREF_NAME)?"EXISTING":"NEW";g=truste.util.getRandomUUID()+"|"+userType;
var b=new Date();b.setTime(b.getTime()+30*60000);truste.util.createCookie(truste.eu.COOKIE_SESSION,g,b.toGMTString(),false)
}var a=g.split(/[|,]/);truste.eu.session=a[0];truste.eu.userType=a[1];(new Image(1,1)).src=("https://consent.trustarc.com/log".replace("http:","https:"))+"?domain=xiaomi.com&country=es&state=&behavior=implied&session="+truste.eu.session+"&userType="+truste.eu.userType+"&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
(function(i){var p=function(s){if(i.feat.iab){return}var u=self.document,t=u.createElement("script");
t.setAttribute("async","async");t.setAttribute("type","text/javascript");t.setAttribute("crossorigin","");
t.setAttribute("importance","high");var r=document.querySelector("[nonce]");r&&t.setAttribute("nonce",r.nonce||r.getAttribute("nonce"));
t.src=s;(u.getElementById(i.containerId)||u.getElementsByTagName("body")[0]||u.getElementsByTagName("head")[0]).appendChild(t);
i.feat.iab=true};var o=function(w,v,r,u){if(w()){v();return}var s,t=function(){if(w()){s=clearInterval(s);
v()}};s=setInterval(t,r);t();setTimeout(function(){clearInterval(s)},u)};if(i.isIabLayout){var k=false;
var m=document.head.getElementsByTagName("script");for(var l=0;l<m.length;l++){var n=m[l];if(n.id==="trustarc-tcfapi"){k=true;
i.feat.iab=true}}if(!k){o(function j(){if(i.feat.enableIab2_2){p(i.consensuUrl+"asset/tcfapi2.2.js")
}else{p(i.consensuUrl+"asset/tcfapi.js/v/2.1")}},10,30000)}}})(truste.eu.bindMap);if(h.feat.dropBehaviorCookie){var c=h.feat.replaceDelimiter?"|":",";
truste.util.createCookie("notice_behavior",h.behavior+c+h.behaviorManager,"0")}(function(j){if(j.feat.crossDomain){var i=function(){if(!window.frames.trustarc_notice){if(document.body){var k=document.body,l=document.createElement("iframe");
l.style.display="none";l.name="trustarc_notice";l.id="trustarcNoticeFrame";l.title="Trustarc Cross-Domain Consent Frame";
l.src=j.cdnURL+"get?name=crossdomain.html&domain="+j.domain;k.appendChild(l)}else{setTimeout(i,5)}}};
i()}})(truste.eu.bindMap);$temp_box_overlay_border={display:"none"};$temp_closebtn_style={top:"8px",right:"8px"};
$temp_outerdiv=1;$temp_style_outerdiv={position:"fixed",overflow:"auto"};$temp_externalcss="@media screen and (max-width: 601px) and (min-width: 1px) {.truste_box_overlay, .truste_box_overlay_inner, .truste_box_overlay > .truste_box_overlay_inner > iframe {height:94vh !important;} } @media screen and (max-width: 414px) and (min-width: 1px) { .truste_box_overlay{padding:0 !important; width:95% !important;}}";
h.styles={};h.externalcss=typeof $temp_externalcss!="undefined"&&$temp_externalcss;h.styles.closebtnlink=typeof $temp_closebtnlink_style!="undefined"&&$temp_closebtnlink_style;
h.styles.closebtn=typeof $temp_closebtn_style!="undefined"&&$temp_closebtn_style;h.styles.box_overlay=typeof $temp_box_overlay!="undefined"&&$temp_box_overlay;
h.styles.box_overlay_border=typeof $temp_box_overlay_border!="undefined"&&$temp_box_overlay_border;h.styles.overlay=typeof $temp_overlay!="undefined"&&$temp_overlay;
h.styles.inner_iframe=typeof $temp_inner_iframe!="undefined"&&$temp_inner_iframe;h.styles.outerdiv=typeof $temp_style_outerdiv!="undefined"&&$temp_style_outerdiv;
h.outerdiv=typeof $temp_outerdiv!="undefined";h.feat.target=typeof $temp_target!="undefined"&&$temp_target;
h.feat.ccpadefault=typeof $temp_ccpadefault!="undefined"&&$temp_ccpadefault;h.params={};h.bnFlags={};
truste.bn.addScriptElem(h.noticeJsURL,function d(){var j;var i=function(){if(j&&truste.eu.flags&&truste.eu.flags.init){j=clearInterval(j);
trustarcBanner.script=truste.util.getScriptElement(/\/\/[^\.]+\.(intranet\.)?(truste|trustarc)(-labs|-svc)?\.(com|net|eu)(:\n+)?\/[^\?#;]*(notice|banner).*?(js=bb|nj)/,true);
truste.util.initParameterMap(trustarcBanner.script,h.params);var k=function(){var l=document.getElementById(h.params.c||"teconsent");
if(l&&l.style.display==="none"){l.style.display=""}truste.bn.msglog("returns",h.bannerMsgURL)};if(h.feat.ccpaApplies||e()){truste.bn.bannerMain()
}else{if(h.bnFlags.consentUnresolved){truste.bn.checkConsentUnresolved(truste.bn.bannerMain,k)}else{k()
}}}};j=setInterval(i,7);setTimeout(function(){clearInterval(j)},10000)},h.containerId);function e(){var i=/ip(hone|od|ad)|iOS/i.test(navigator.userAgent||navigator.vendor||window.opera);
return(truste.eu.bindMap.ios!=1||!i)&&truste.bn.checkPreference()}})();truste.bn.isConsentTrack=true;
truste.bn.round=truste.bn.getDefaultStyleProperty=truste.bn.getDisplayProperty=function(b){var a=window.getComputedStyle(b,null).display;return(a=="none")?truste.bn.getDefaultStyleProperty("display",b.nodeName):a
};truste.bn.show=function(c){if(!c){return}var b=truste.bn.getDisplayProperty(c);if(typeof requestAnimationFrame!=="undefined"){c.style.opacity=0;
c.style.display=b;(function a(d){var e=truste.bn.round(parseFloat(d.style.opacity),2);if(((e=e+0.1)<=1)&&(d.id!="truste-consent-track"||truste.bn.isConsentTrack)){d.style.opacity=e;
requestAnimationFrame(function(){a(d)})}})(c)}else{c.style.display=b}};truste.bn.hide=function(b){if(!b){return
}if(typeof requestAnimationFrame!=="undefined"){(function a(c){var d=truste.bn.round(parseFloat(c.style.opacity||1),2);
d=d-0.1;c.style.opacity=d;if(d<=0){c.style.display="none"}else{requestAnimationFrame(function(){a(c)})
}})(b)}else{b.style.display="none"}};truste.bn.isVisible=function(b){var a=window.getComputedStyle(b);
return a.display!=="none"&&a.opacity>0&&a.visibility!=="hidden"};truste.bn.removeEvent=function(c,b,a){if(c&&typeof b=="string"&&a instanceof Function){if(c.removeEventListener){c.removeEventListener(b,a,false)
}else{if(c.detachEvent){c.detachEvent("on"+b,a)}}}};truste.bn.addEvent=function(c,b,a){if(c&&typeof b=="string"&&a instanceof Function){if(c.addEventListener){c.addEventListener(b,a,false)
}else{if(c.attachEvent){c.attachEvent("on"+b,a)}}}};truste.bn.bannerMain=function(){var b=truste.eu.bindMap;
b.bannerMsgURL=b.iconBaseUrl+"bannermsg?";var d=b.params;var c=d.c||"teconsent";var e=d.bb||"consent_blackbar";
if(!document.getElementById(e)){if(typeof MutationObserver!=="undefined"){var g=new MutationObserver(function f(j){if(document.getElementById(e)){g.disconnect();
a(d,c,e)}});g.observe(document.body||document.getElementsByTagName("body")[0]||document.documentElement,{attributes:false,childList:true,characterData:false,subtree:true});
setTimeout(60000)}else{var i=setInterval(function h(){if(document.getElementById(e)){i=clearInterval(i);
a(d,c,e)}},150);setTimeout(10000)}}else{a(d,c,e)}function a(N,k,E){var J=4;
J=(J>0)?J:3;var F=truste.eu.bindMap.allOptedIn||(function L(P){var Q=[];for(var O=0;O<P;O++){Q.push(O)
}return Q.join(",")})(J);var u="truste-consent-track";var C=/MSEI|Trident/.test(navigator.userAgent);
var w=/\bandroid (\d+(?:\.\d+)+);/gi.exec(navigator.userAgent);var H=(w&&w[1]<="4.4");var t=document.getElementById(k);
var o=document.getElementById(E);var y={consentButton:"truste-consent-button",footerCallback:"truste-show-consent",cookieButton:"truste-cookie-button",privacyButton:"truste-privacy-button",bannerHolder:u,closeBanner:"truste-consent-close",repopDiv:"truste-repop-msg",requiredButton:"truste-consent-required",ccpaOptoutButton:"truste-ccpa-optout",ccpaOptedIn:"ccpa-opted-in",ccpaOptedOut:"ccpa-opted-out",ccpaNoPreference:"ccpa-no-preference",iabPartnersLink:"iab-partners-link",secondIabPartnersLink:"iab-second-partners-link"};
var A=truste.eu.bindMap.feat.target||"_blank";var m=document.readyState;if(m&&(m=="complete"||m=="interactive")){G("loaded")
}else{truste.bn.addEvent(document,"DOMContentLoaded",function(){G("loaded")})}function G(P){if(G[P]){return
}G[P]=1;switch(P){case"loaded":if(o){x();p();s();if(truste.bn.checkPreference()){I()}else{if(b.bnFlags.consentUnresolved){truste.bn.checkConsentUnresolved(I,D)
}else{D()}}}break;case"done":truste.bn.isConsentTrack=false;truste.bn.removeEvent(document,"click",q);
truste.bn.removeEvent(document,"scroll",r);truste.bn.show(t);truste.bn.hide(document.getElementById(u));
v("hidden");break;case"open":try{if(C||H){var O=document.createEvent("UIEvents");O.initUIEvent("resize",true,false,window,0);
window.dispatchEvent(O)}else{window.dispatchEvent(new Event("resize"))}}catch(Q){console&&console.log("Resize event not supported.")
}}}function p(){var O='<style>  @font-face{    font-family:"MuseoSans300";    src:url(https://consent.trustarc.com/get?name=MuseoSans-300.otf) format("opentype");} #truste-repop-msg element     #truste-repop-msg {     display:none;   }  div#truste-consent-track {    position: fixed!important;    bottom: 0;    left: 0;    right: 0;}   .truste-consent-track-class{      position: relative;      z-index: 9999999;      border: 1px solid #FFF;      padding: 15px;      background-color: #FFF;      direction: ltr;  }  #trustarc-banner-overlay {  background-color: rgb(0, 0, 0);   opacity: 0.3;   position: fixed;   z-index: 1000000;   width: 100%;  height: 100%;   top: 0px;   left: 0px;   overflow: hidden;    display:none;}      #truste-consent-text {    color: #000;    font-size: 14px;    margin: 0;        width: 70%;    padding-right: 10px;  }  div#truste-consent-content {    display: -webkit-flex;    display: flex;    align-items: center;    justify-content: space-between;    max-width: 1360px;    margin: 0 auto;    width: 100%;}      #truste-consent-button, #truste-consent-required {    background-color: #ff6700;    color: white;    padding: 8px 10px;    border: 1px solid #ff6700;    border-radius: 0;    cursor: pointer;    font-family: "MuseoSans300",sans-serif;  }  #truste-consent-button {    margin: 0 15px;}      #truste-show-consent, #truste-show-consent2 {    background-color: transparent;    color: #ff6700;    border: none;    padding: 8px 0;    border-radius: 0;    cursor: pointer;    font-family: "MuseoSans300",sans-serif;     text-decoration: underline;  }      #truste-privacy-button {    color: #000;    text-decoration: underline;  }  #truste-privacy-button:hover {    color: #000;    text-decoration: underline;  }  .do-not-sell-link {    color: #000;    text-decoration: underline;  }  .do-not-sell-link:hover {      color: #000;    text-decoration: underline;          }    .truste-messageColumn {    font-family: "MuseoSans300",sans-serif;    float: left;  }  .truste-cookie-link {  font-family: "MuseoSans300",sans-serif;    font-size: 14px;    color: #000;  }  .truste-buttonsColumn {    float: right;    margin: 0;    font-size: 15px;    font-family: "MuseoSans300",sans-serif;    display: -webkit-flex;    display: flex;    align-items: center;    justify-content: center;  }  .mobile-button-only {      display: none;  } /* MOBILE ONLY */ @media screen and (min-width: 1px) and (max-width: 767px){  div#truste-consent-content {        flex-direction: column;      display: inline-block;    }    #truste-consent-text {      width: 100%;      margin-bottom: 15px;      text-align: center;  }   .truste-consent-track-class {        border-radius: 10px 10px 0 0;    }    #truste-consent-button, #truste-consent-required, #truste-show-consent, #truste-show-consent2 {        border-radius: 8px;      margin: 0 auto;    }    #truste-consent-button, #truste-consent-required {      background-color: transparent;      color: #ff6700;  }    #truste-consent-button {      margin: 0 15px 0 0;  }        .truste-buttonsColumn {        width: 100%;        margin-top: 15px;    }    .truste-buttonsColumn button {        width: 100%;    }    .mobile-button-only {        display: block;    font-size:14px;    }    .desktop-button-only {      display: none;  }     }  @media screen and (min-width: 1px) and (max-width: 380px) {    .truste-messageColumn {    float: none;    }        .truste-buttonsColumn {    float: none;}  }  </style><div id="truste-consent-track" style="display:none;position:relative;z-index:999999;">  <div id="trustarc-banner-overlay"></div>  <div class="truste-consent-track-class">  <div id="truste-consent-content" style="overflow: hidden;">    <div id="truste-consent-text" class="truste-messageColumn">Xiaomi podría utilizar cookies propias y de terceros para mantener la funcionalidad esencial de nuestro sitio web y detectar el rendimiento del sitio web para ayudarnos a mejorar nuestro sitio web y productos y servicios online, así como mejorar tu experiencia al proporcionar contenido y anuncios personalizados.<br/>Selecciona una opción o ve a Ajustes de Cookies para administrar tus preferencias. &quot;<a href="#" target="_blank" id="truste-privacy-button" style="cursor:pointer;" class="truste-cookie-link">Saber más</a>&quot;&nbsp;</div>        <button onclick="truste.eu && truste.eu.clickListener()" id="truste-show-consent2" class="mobile-button-only">Ajustes de Cookies&raquo;</button>    <div id="truste-consent-buttons" class="truste-buttonsColumn">      <span id="truste-repop-msg" style="padding: 7px 10px; background: #F9EDBE; border:1px solid #F0C36D; margin: 11px 0px 13px; line-height: 16px;color: #AF7501; display:none;" ></span>       <button id="truste-show-consent" class="desktop-button-only">Ajustes de Cookies</button>      <button id="truste-consent-button">Aceptar todo</button>      <button id="truste-consent-required">Rechazar todo</button>          </div>  </div></div></div>';
O=O.replace("&lt;i&gt;","<i>").replace("&lt;/i&gt;","</i>").replace("&lt;b&gt;","<b>").replace("&lt;/b&gt;","</b>");
if(!O||O.length<15){O='<div id="truste-consent-track" style="display:none; background-color:#000;"><div id="truste-consent-content" style="overflow: hidden; margin: 0 auto; max-width: 1000px"><div id="truste-consent-text" style="float:left; margin:15px 0 10px 10px; width:500px;"><h2 style="color: #fff; font-size: 16px; font-weight:bold; font-family:arial;">Some functionality on this site requires your consent for cookies to work properly.</h2><div id="truste-repop-msg" style="padding: 0px 0px 5px 0px;font-size: 12px;color: #F0C36D; display:none; font-family: arial,sans-serif;"></div></div><div id="truste-consent-buttons" style="float:right; margin:20px 10px 20px 0;"><button id="truste-consent-button" type=button style="padding:5px; margin-right:5px; font-size:12px;">I consent to cookies</button><button id="truste-show-consent" type=button style="padding:5px; margin-right:5px; font-size:12px;">I want more information</button></div></div></div>'
}if(N.responsive==="false"){O=O.replace(/(class=["'].*?)[\s]?truste-responsive(.*?["'])/g,"$1$2")}if(o.insertAdjacentHTML){o.insertAdjacentHTML("afterbegin",O)
}else{o.innerHTML=O}}function z(Q){var P=(truste.util&&truste.util.getJSON)||(truste.cma&&truste.cma.cheapJSON)||window.JSON.stringify,O={source:"preference_manager",message:Q,data:{useNonStandardStacks:false,consentScreen:1}};
window.postMessage&&window.postMessage(P(O),"*")}function M(Q,R){var P=(truste.util&&truste.util.getJSON)||(truste.cma&&truste.cma.cheapJSON)||window.JSON.stringify,O={source:"preference_manager",message:Q,data:R};
window.postMessage&&window.postMessage(P(O),")
}function K(){self.localStorage.removeItem(truste.eu.COOKIE_CATEGORY_NAME);truste.eu.ccpa.dropCcpaCookie(false);
l(F)}function B(){var O=truste.eu.bindMap;truste.eu.ccpa.dropCcpaCookie(true);if(O&&O.prefmgrUrl&&(N.gtm||truste.eu.noticeLP.gtm==1)){truste.bn.hide(document.getElementById(u));
v("hidden");l("0");truste.util.callCMEndpoint("/defaultconsentmanager/getOptOutDomains?",null,function(Q){var P=Q.responseText;
if(P&&truste.util.parseJSON(P)){truste.util.setStorage(truste.eu.COOKIE_CATEGORY_NAME,P,false)}})}else{if(truste.eu&&truste.eu.clickListener){truste.eu.clickListener(3)
}}}function l(O){var S=truste.util.getLowestConsent(O);if(!isNaN(S=parseInt(S))&&truste.eu&&truste.eu.actmessage){var Q=(truste.util&&truste.util.getJSON)||(truste.cma&&truste.cma.cheapJSON)||window.JSON.stringify,P={source:"preference_manager",message:"submit_preferences",data:{value:O}};
truste.eu.actmessage(P);if(window.PREF_MGR_API_DEBUG){PREF_MGR_API_DEBUG.authorities.push(window.location.hostname)
}window.postMessage&&window.postMessage(Q(P),"*");var R=truste.eu.bindMap;if(R&&R.prefmgrUrl&&!R.feat.ccpaApplies){truste.util.callCMEndpoint("/defaultconsentmanager/optin?){},true)
}G("selection")}else{G("done")}}function s(){var O=truste.eu.bindMap;if(O.feat.isReconsentEvent&&O.popupMsg.length>0){var Q=document.getElementById(y.repopDiv);
if(Q){Q.innerHTML=O.popupMsg;truste.bn.show(Q)}}var S=document.getElementById(y.consentButton);if(S){var R=new RegExp(("^"+F+"$").replace(/,/g,"."));
if(!N.gtm&&!O.feat.enableCCPA&&O.feat.isRepopEvent&&!R.test(O.prefCookie)){S.style.display="none"}else{S.onclick=function(){truste.bn.msglog("accepts",b.bannerMsgURL);
if(b.feat.iabBannerApplies){z("process_iab_accept_all")}else{if(b.feat.gpp.gppApplies){M("process_gpp_accept_all")
}}if((O.feat.enableCCPA||O.feat.isReconsentEvent)&&O.feat.enableTwoStepVerification&&truste.util.validConsent(O.prefCookie)&&!R.test(O.prefCookie)){if(truste.eu&&truste.eu.clickListener){truste.eu.clickListener(6)
}}else{K()}}}}S=document.getElementById(y.footerCallback);if(S){S.setAttribute("aria-haspopup","true");
S.onclick=function(){truste.bn.msglog("moreinfo",b.bannerMsgURL);if(truste.eu&&truste.eu.clickListener){if(b.feat.iabBannerApplies){truste.eu.clickListener(4)
}else{truste.eu.clickListener(parseInt(N.pn)||0)}O.returnFocusTo=y.footerCallback.replace("#","")}}}S=document.getElementById(y.requiredButton);
if(S){S.onclick=function(){truste.bn.msglog("requiredonly",b.bannerMsgURL);if(truste.eu.cpra&&truste.eu.cpra.shouldShowFinProg()){truste.eu.clickListener(7,true,{cpraConsent:"0",cpraSource:"banner-decline"});
return}else{if(b.feat.iabBannerApplies){z("process_iab_reject_all")}else{if(b.feat.gpp.gppApplies){M("process_gpp_reject_all")
}}B()}}}S=document.getElementById(y.ccpaOptoutButton);if(S){S.onclick=function(){truste.bn.msglog("requiredonly",b.bannerMsgURL);
if(truste.eu.cpra&&truste.eu.cpra.shouldShowFinProg()){truste.eu.clickListener(7,true,{cpraConsent:"0",cpraSource:"banner-decline-ccpa"});
return}else{truste.bn.declineCPRA()}}}S=document.getElementById(y.cookieButton);if(S){if(N.cookieLink){S.href=N.cookieLink
}S.onclick=function(U){truste.bn.msglog("cookiepolicy",b.bannerMsgURL);if(N.cookieLink){U.preventDefault();
window.open(N.cookieLink,A)}}}S=document.getElementById(y.privacyButton);if(S){if(N.privacypolicylink){S.href=N.privacypolicylink
}S.onclick=function(U){if(N.privacypolicylink){U.preventDefault();window.open(N.privacypolicylink,A)}}
}S=document.getElementById(y.closeBanner);if(S){S.onclick=function(){var U=truste.eu.bindMap;var V=truste.util.validConsent(U.prefCookie);
var W=(U.feat.optoutClose&&!V);if(W){if(truste.eu.cpra&&truste.eu.cpra.shouldShowFinProg()){truste.eu.clickListener(7,true,{cpraConsent:"0",cpraSource:"banner-decline"});
return}else{B()}}else{G("done")}}}S=document.getElementById(y.iabPartnersLink);if(S){S.onclick=function(){truste.eu.clickListener(5);
O.returnFocusTo=y.iabPartnersLink.replace("#","")};S.onkeyup=function(U){if(U.keyCode==13){truste.eu.clickListener(5);
O.returnFocusTo=y.iabPartnersLink.replace("#","")}}}S=document.getElementById(y.secondIabPartnersLink);
if(S){S.onclick=function(){truste.eu.clickListener(5);O.returnFocusTo=y.secondIabPartnersLink.replace("#","")
};S.onkeyup=function(U){if(U.keyCode==13){truste.eu.clickListener(5);O.returnFocusTo=y.secondIabPartnersLink.replace("#","")
}}}j();var P=document.querySelectorAll('a[href*="https://tracker-detail-page"]');P.forEach(function T(U){if(!U.href.includes("locale=")){U.href=U.href+"&locale="+b.locale
}});parseInt(N.fade)&&setTimel)},parseInt(N.fade));G("open")}function j(){var O=truste.eu.bindMap;
if(O.feat.ccpaApplies){var R=truste.eu.ccpa.getOptout();var Q=document.getElementById(y.ccpaOptedOut);
var T=document.getElementById(y.ccpaOptedIn);var S=document.getElementById(y.ccpaNoPreference);if(R&&O.prefCookie){var P=/^[yY]$/;
if(P.test(R)){Q&&truste.bn.show(Q);T&&truste.bn.hide(T);S&&truste.bn.hide(S)}else{Q&&truste.bn.hide(Q);
T&&truste.bn.show(T);S&&truste.bn.hide(S)}}else{Q&&truste.bn.hide(Q);T&&truste.bn.hide(T);S&&truste.bn.show(S)
}}}function x(){if(N.oc){truste.bn.addEvent(document,"click",q)}if(N.px){truste.bn.addEvent(document,"scroll",r)
}}function I(){truste.bn.isConsentTrack=true;truste.bn.show(document.getElementById(u));v("visible");
truste.bn.msglog("views",b.bannerMsgURL)}function D(){G("done");truste.bn.msglog("returns",b.bannerMsgURL)
}function n(O){return O&&truste.bn.isVisible(O)&&!document.getElementById(truste.eu.popdiv2)}function q(P){var O=document.getElementById(u);
if(n(O)&&!O.contains(P.target)&&P.target.id!==truste.eu.popclose){l(F)}}function r(P){var O=document.getElementById(u);
if(n(O)&&(document.scrollingElement.scrollTop||document.documentElement.scrollTop)>=N.px){l(F)}}truste.bn.reopenBanner=function(){if(o){truste.bn.isConsentTrack=true;
G.done=0;x();s();truste.bn.show(document.getElementById(u));v("visible")}};truste.bn.twoStepConfirmed=function(){truste.eu.ccpa.dropCcpaCookie(false);
l(F);truste.bn.msglog("twostepoptin",b.bannerMsgURL)};truste.bn.twoStepDecli")};
truste.bn.acceptAll=function(){K()};truste.bn.decline()};truste.bn.declineCPRA=function(){truste.eu.ccpa.dropCcpaCookie(true);
l("0")};truste.bn.handleBannerDone=function(){var O=truste.eu.bindMap;if(!truste.eu.isGPCDNTEvent()||!O.feat.dntShowUI){G("done")
}else{j()}}}};