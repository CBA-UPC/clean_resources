(()({1:[function(u,m,n){function g(){window.logitech.acceptedCookieGroups=
h();if("undefined"===typeof utag_data||"undefined"===typeof window.logitech.initUtagSync||"undefined"===typeof window.logitech.initUtagAsync)500>p&&window.requestAnimationFrame(g),p++;else if(!0!==x){x=!0;console.log("Tealium/utag ready",window.logitech.acceptedCookieGroups);try{window.logitech.initUtagSync()}catch(a){console.error("Tealium utag.sync failed to initialize"),console.error(a)}try{window.logitech.initUtagAsync()}catch(a){console.error("Tealium utag.js failed to initialize"),console.error(a)}}}
function h(){var a=[];if("undefined"!==typeof OnetrustActiveGroups)a=OnetrustActiveGroups.split(","),a=a.filter(;else if(t("OptanonConsent")){var c=document.cookie.split("; ").find(function(b){return b.startsWith("OptanonConsent\x3d")}).substr(15);c=decodeURIComponent(c);(c=c.split("\x26").find()&&c.split("\x3d")[1].split(",").forEach(function(b){b=b.split(":");"1"===b[1]&&a.push(b[0])})}return a}function t(a){return document.cookie.split(";").some(}function k(){f.forEach(function(a){window.logitech.insertScript(a.url,a.selector,a.callback,a.groupId)});l.forEach(}function e(a){document.body?a.call(this):window.requestAnimationFrame(}window.logitech=window.logitech||{};var f=[],l=[],p=0,v=!1,w=!1,x=!1;window.logitech.COOKIES_STRICTLY_NECESSARY="C0001";window.logitech.COOKIES_ANALYTICS="C0002";window.logitech.COOKIES_FUNCTIONAL=
"C0003";window.logitech.COOKIES_MARKETING="C0004";window.logitech.COOKIES_SOCIAL_MEDIA="C0005";window.logitech.acceptedCookieGroups=h();0<window.logitech.acceptedCookieGroups.length&&g();window.OptanonWrapper=function(){console.log("OneTrust initialized",OnetrustActiveGroups);w=!0;g();k();OneTrust.OnConsentChanged(function(c){window.logitech.acceptedCookieGroups=h();console.log("OneTrust consent changed",window.logitech.acceptedCookieGroups);try{window.logitech.reinitUtagSync()}catch(b){console.error("Tealium utag.sync failed to re-initialize"),
console.error(b)}try{utag.view(utag_data)}catch(b){console.error("utag.view(utag_data) failed"),console.error(b)}k()});var a=document.getElementById("onetrust-consent-sdk");a&&(a.setAttribute("role","region"),a.setAttribute("aria-label","Cookies Consent"))};window.logitech.doesUserAllowCookiesFor=function(a){if("string"!==typeof a)return!1;a=a.toUpperCase();for(var c=0,b=window.logitech.acceptedCookieGroups.length;c<b;c++)if(a===window.logitech.acceptedCookieGroups[c])return!0;return!1};window.logitech.insertScript=
function(a,c,b,d){c=c||"head";Array.isArray(d)&&(d=d.join("-"));var r=f.some(function(q){return q.url===a&&q.selector===c});!0!==r&&f.push({url:a,selector:c,callback:b,groupId:d});v?(console.log("We're in author mode. Allow script to load.",a),d=document.createElement("script"),d.src=a,d.type="text/javascript","function"===typeof b&&d.addEventListener("load",b),"head"!==c&&(c="#"+c),document.querySelector(c).appendChild(d)):w?(console.log("OneTrust.InsertScript exists. Letting OneTrust manage",a),
OneTrust.InsertScript(a,c,b,null,d)):!0!==r&&console.log("OneTrust.InsertScript does not exist. Cache it and wait",a)};window.logitech.insertHtml=function(a,c,b,d){Array.isArray(d)&&(d=d.join("-"));var r=l.some(;!0!==r&&l.push({html:a,selector:c,callback:b,groupId:d});v?(console.log("We're in author mode. Allow html to be added.",a),d=document.createElement("div"),d.innerHTML=a,document.querySelector("#"+c).appendChild(d),"function"===typeof b&&b.call(this)):
w?(console.log("OneTrust.InsertHtml exists. Letting OneTrust manage",a),OneTrust.InsertHtml(a,c,b,null,d)):!0!==r&&console.log("OneTrust.InsertHtml does not exist. Cache it and wait",a)};e(function(){if(v=document.body.classList.contains("edit")||document.body.classList.contains("wcm-edit")||document.body.classList.contains("preview")||document.body.classList.contains("wcm-preview"))console.log("In authoring mode, force utag and scripts to load"),g(),k()})},{}]},{},[1]);