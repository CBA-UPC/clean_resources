var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:
$jscomp.getGlobal=$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=
$jscomp.polyfill("Object.assign","es6","es3");
(function(){function a(a,f){h[a]||(b[a]={exports:{},loaded:!1},h[a]=!0,0===a&&"function"===typeof require?require.main=b[0]:b[a].parent=b[f],c[a].call(this,b[a],b[a].exports),b[a].loaded=!0);return b[a].exports}var c={},b={},h={};c[0]=function(c,f){f.__esModule=!0;var b=a(1,0),g=a(2,0);a(3,0);this.MIIScriptCtrl=g["default"];b["default"].registerSingleton();return c.exports};c[1]=function(c,b){var f=this&&this.__assign||Object.assign||b.__esModule=!0;var g=a(4,1),d=function(){.registerSingleton=function(){"undefined"===typeof window.gwiq&&(window.gwiq=new a)};a.findBlacklistedParams=function(e){for(var d=[],c=0;c<e.length;c++){var b=e[c];a:{var f=0;for(var g=a.paramsBlacklist;f<g.length;f++)if(g[f]===b){f=!0;break a}f=!1}f&&d.push(b)}return d};a.prototype.asyncjs=function(a){var e={},d=0;for(a=a.split("\x26");d<a.length;d++){var c=
a[d].split("\x3d");e[c[0]]=c[1]}this.track(e)};a.prototype.track=function(a){this.validateParams(a)&&this.withGdprConsent(function(d){d&&(a._gdpr_consent=d.tcString);g.track(f({},a,{_sys_gwiqjs:"v"+"1.3.1"}))})};a.prototype.withGdprConsent=function(a){var d=this;"function"===typeof window.__tcfapi?(this.warn("__tcfapi found"),window.__tcfapi("addEventListener",2,function(e,c){d.warn("tcData received");c&&"tcloaded"===e.eventStatus&&(window.__tcfapi("removeEventListener",2,
e.listenerId),a(e))})):(this.warn("__tcfapi not found"),a(void 0))};a.prototype.validateParams=function(d){if(!d)return this.warn("No params passed"),!1;var e=d.cid,c=!(!e&&!this.warn("CID is not passed"));e=!(!a.alphanumericRegex.test(e)&&!this.warn("Passed CID does not look correct: "+e));var b=[],f;for(f in d)d.hasOwnProperty(f)&&b.push(f);d=a.findBlacklistedParams(b);d=!(0!==d.length&&!this.warn("Listed params are not allowed: "+d.join(", ")));
return c&&e&&d};a.prototype.warn=a.paramsBlacklist=["rand","aid","ce"];a.alphanumericRegex=/^[0-9a-zA-Z]+$/;return a}();b["default"]=d;return c.exports};c[2]=function(c,f){f.__esModule=!0;var b=a(5,2),g=function(){.prototype.AddImage=return a}();f["default"]=g;return c.exports};c[3]=function(a,c){Array.prototype.indexOf||(Array.prototype.indexOf=function(a,c){if(null==this)throw new TypeError('"this" is null or not defined');
var d=Object(this),b=d.length>>>0;if(0===b)return-1;var e=c|0;if(e>=b)return-1;for(e=Math.max(0<=e?e:b-Math.abs(e),0);e<b;){if(e in d&&d[e]===a)return e;e++}return-1});return a.exports};c[4]=function(c,b){var f=this&&this.__rest||
b.__esModule=!0;var g=a(5,4);b.track=function(a){var d=a.cid,c=a.memberID;a=f(a,["cid","memberID"]);var b=new XMLHttpRequest;b.open("POST",c?"https"+"://"+"gwiq-v3.globalwebindex.net"+"/v2/gwiq/campaign/"+d+"/sync/"+c:"https"+"://"+"gwiq-v3.globalwebindex.net"+"/v2/gwiq/campaign/"+d,!0);b.setRequestHeader("X-Requested-With","XMLHttpRequest");b.setRequestHeader("Content-Type","application/json");b.withCredentials=!0;b.onreadystatechange=function(){if(b.readyState===
XMLHttpRequest.DONE)try{var a=JSON.parse(b.responseText);a&&a.hook_url&&g.addHiddenImage(a.hook_url);if(a&&a.hook_urls instanceof Array)for(var d=0,c=a.hook_urls;d<c.length;d++){var e=c[d];"string"===typeof e&&g.addHiddenImage(e)}}catch(m){}};b.send(JSON.stringify(a))};return c.exports};c[5]=function(a,b){function c(a,b){var d={url:a,success:b},c=new XMLHttpRequest;c.open("POST","https"+"://"+"gwiq-v3.globalwebindex.net"+"/v2/gwiq/notify",!0);c.setRequestHeader("X-Requested-With",
"XMLHttpRequest");c.setRequestHeader("Content-Type","application/json");c.withCredentials=!0;c.send(JSON.stringify(d))}b.__esModule=!0;b.addScript=function(a){var c=document.createElement("script");c.type="text/javascript";c.charset="UTF-8";c.async=!0;a&&""!==a&&(c.src=a,document.getElementsByTagName("head")[0].appendChild(c))};b.addHiddenImage=function(a){var b=document.getElementById("gwiqImgTags");if(!b){b=document.createElement("div");if(!b)return;b.id="gwiqImgTags";b.style.display="none";document.body.appendChild(b)}b=
document.createElement("img");b.setAttribute("hidden","true");b.setAttribute("src",a);b.onload=function(b){c(a,!0)};b.onerror=;return a.exports};if("object"===typeof module)module.exports=a(0);else return a(0)})();