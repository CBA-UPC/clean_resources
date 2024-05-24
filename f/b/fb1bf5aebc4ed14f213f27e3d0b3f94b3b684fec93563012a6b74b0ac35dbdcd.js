;(function(){var dfltPluginCfg={};var dfltGlobalCfg={"site":621453,"log":"","logSSL":"","domain":"xiti.com","collectDomain":"logc414.xiti.com","collectDomainSSL":"logs1414.xiti.com","userIdOrigin":"server","pixelPath":"/","disableCookie":false,"disableStorage":false,"cookieSecure":false,"cookieDomain":"","preview":false,"plgs":["Campaigns","Clicks","ClientSideUserId","ContextVariables","Page","AvInsights","Events","InternalSearch","OnSiteAds","RichMedia"],"lazyLoadingPath":"","documentLevel":"document","redirect":false,"activateCallbacks":true,"medium":"","ignoreEmptyChapterValue":true,"base64Storage":false,"sendHitWhenOptOut":true,"forceHttp":false,"requestMethod":"GET","maxHitSize":2000,"urlPropertyAuto":true,"urlPropertyQueryString":false,"sameSiteStrict":false};(function(a){a.ATInternet=a.ATInternet||{};a.ATInternet.Tracker=a.ATInternet.Tracker||{};a.ATInternet.Tracker.Plugins=a.ATInternet.Tracker.Plugins||{}})(window);
var Utils=function(){function a(h){var b=typeof h;if("object"!==b||null===h)return"string"===b&&(h='"'+h+'"'),String(h);var e,f,c=[],d=h.constructor===Array;for(e in h)h.hasOwnProperty(e)&&(f=h[e],b=typeof f,"function"!==b&&"undefined"!==b&&("string"===b?f='"'+f.replace(/[^\\]"/g,'\\"')+'"':"object"===b&&null!==f&&(f=a(f)),c.push((d?"":'"'+e+'":')+String(f))));return(d?"[":"{")+String(c)+(d?"]":"}")}function g(a){return null===a?"":(a+"").replace(c,"")}function k(a){var m,e=null;return(a=g(a+""))&&
!g(a.replace(b,function(a,h,b,c){m&&h&&(e=0);if(0===e)return a;m=b||h;e+=!c-!b;return""}))?Function("return "+a)():null}var d=this,b=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,c=RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g");d.isLocalStorageAvailable=function(){try{var a=localStorage;a.setItem("__storage_test__","__storage_test__");a.removeItem("__storage_test__");return!0}catch(b){return!1}};
d.isBeaconMethodAvailable=function(){return window.navigator&&"function"===typeof window.navigator.sendBeacon};d.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var b="",e,f,c,n,p,l,s=0;for(a=d.Base64._utf8_encode(a);s<a.length;)e=a.charCodeAt(s++),f=a.charCodeAt(s++),c=a.charCodeAt(s++),n=e>>2,e=(e&3)<<4|f>>4,p=(f&15)<<2|c>>6,l=c&63,isNaN(f)?p=l=64:isNaN(c)&&(l=64),b=b+this._keyStr.charAt(n)+this._keyStr.charAt(e)+this._keyStr.charAt(p)+this._keyStr.charAt(l);
return b},decode:function(a){var b="",e,f,c,n,p,l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)e=this._keyStr.indexOf(a.charAt(l++)),f=this._keyStr.indexOf(a.charAt(l++)),n=this._keyStr.indexOf(a.charAt(l++)),p=this._keyStr.indexOf(a.charAt(l++)),e=e<<2|f>>4,f=(f&15)<<4|n>>2,c=(n&3)<<6|p,b+=String.fromCharCode(e),64!=n&&(b+=String.fromCharCode(f)),64!=p&&(b+=String.fromCharCode(c));return b=d.Base64._utf8_decode(b)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var b="",e=0;e<
a.length;e++){var f=a.charCodeAt(e);128>f?b+=String.fromCharCode(f):(127<f&&2048>f?b+=String.fromCharCode(f>>6|192):(b+=String.fromCharCode(f>>12|224),b+=String.fromCharCode(f>>6&63|128)),b+=String.fromCharCode(f&63|128))}return b},_utf8_decode:function(a){for(var b="",e=0,f,c,d;e<a.length;)f=a.charCodeAt(e),128>f?(b+=String.fromCharCode(f),e++):191<f&&224>f?(c=a.charCodeAt(e+1),b+=String.fromCharCode((f&31)<<6|c&63),e+=2):(c=a.charCodeAt(e+1),d=a.charCodeAt(e+2),b+=String.fromCharCode((f&15)<<12|
(c&63)<<6|d&63),e+=3);return b}};d.loadScript=function(a,b){var e;b=b||function(){};e=document.createElement("script");e.type="text/javascript";e.src=a.url;e.async=!1;e.defer=!1;e.onload=e.onreadystatechange=function(a){a=a||window.event;if("load"===a.type||/loaded|complete/.test(e.readyState)&&(!document.documentMode||9>document.documentMode))e.onload=e.onreadystatechange=e.onerror=null,b(null,a)};e.onerror=function(a){e.onload=e.onreadystatechange=e.onerror=null;b({msg:"script not loaded",event:a})};
var f=document.head||document.getElementsByTagName("head")[0];f.insertBefore(e,f.lastChild)};d.cloneSimpleObject=function(a,b){if("object"!==typeof a||null===a||a instanceof Date)return a;var e=new a.constructor,f;for(f in a)a.hasOwnProperty(f)&&(void 0===f||b&&void 0===a[f]||(e[f]=d.cloneSimpleObject(a[f])));return e};d.isEmptyObject=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0};d.isObject=function(a){return null!==a&&"object"===typeof a&&!(a instanceof Array)};d.ATVALUE="_ATVALUE";
d.ATPREFIX="_ATPREFIX";d.object2Flatten=function(a,b,e,f,c){var n={},p="",l="",s=[],g="",r=0,u;for(u in a)if(a.hasOwnProperty(u))if(n=d.splitProtocolAndKey(u,c),p=n.prefix||f||"",l=(b?b+"_":"")+n.key,d.isObject(a[u]))d.object2Flatten(a[u],l,e,p,c);else{s=l.split("_");g="";for(r=0;r<s.length;r++)n=d.splitProtocolAndKey(s[r],c),p=n.prefix||p,g+=n.key+(r<s.length-1?"_":"");l=g||l;e[l]=e[l]||{};e[l][d.ATVALUE]=a[u];e[l][d.ATPREFIX]=p}};d.flatten2Object=function(a,b,e){b=b.split("_");var f,c;for(c=0;c<
b.length-1;c++)f=b[c],a[f]||(a[f]={}),a=a[f];if(a.hasOwnProperty(d.ATVALUE)){f=a[d.ATVALUE];var n=a[d.ATPREFIX];delete a[d.ATVALUE];delete a[d.ATPREFIX];a.$={};a.$[d.ATVALUE]=f;a.$[d.ATPREFIX]=n}e=d.cloneSimpleObject(e);a[b[c]]?a[b[c]].$=e:a[b[c]]=e};d.getFormattedObject=function(a){var b={},e,f;for(f in a)a.hasOwnProperty(f)&&(a[f].hasOwnProperty(d.ATVALUE)?(e=a[f][d.ATPREFIX]?a[f][d.ATPREFIX]+":"+f:f,b[e]=a[f][d.ATVALUE]):b[f]=d.getFormattedObject(a[f]));return b};d.completeFstLevelObj=function(a,
b,e){if(a){if(b)for(var f in b)!b.hasOwnProperty(f)||a[f]&&!e||(a[f]=b[f])}else a=b;return a};d.getObjectKeys=function(a){var b=[],e;for(e in a)a.hasOwnProperty(e)&&b.push(e);return b};d.objectToLowercase=function(a){var b={},e;for(e in a)a.hasOwnProperty(e)&&(d.isObject(a[e])?b[e.toLowerCase()]=d.objectToLowercase(a[e]):b[e.toLowerCase()]=a[e]);return b};d.splitProtocolAndKey=function(a,b){var e,f;2>a.length||":"!==a[1]?(e="",f=a):4>a.length||":"!==a[3]?(e=a.substring(0,1),f=a.substring(2,a.length)):
(e=a.substring(0,3),f=a.substring(4,a.length));b&&(e=e.toLowerCase(),f=f.toLowerCase());return{prefix:e,key:f}};d.jsonSerialize=function(b){try{return"undefined"!==typeof JSON&&JSON.stringify?JSON.stringify(b):a(b)}catch(c){return null}};d.jsonParse=function(a){try{return"undefined"!==typeof JSON&&JSON.parse?JSON.parse(a+""):k(a)}catch(b){return null}};d.trim=function(a){try{return String.prototype.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}catch(b){return a}};d.arrayIndexOf=
function(a,b){if(Array.prototype.indexOf){var c=-1;"undefined"!==typeof a.indexOf(b)&&(c=a.indexOf(b));return c}return function(a){if(null==this)throw new TypeError;var b=Object(this),h=b.length>>>0;if(0===h)return-1;var c=0;1<arguments.length&&(c=Number(arguments[1]),c!=c?c=0:0!=c&&Infinity!=c&&-Infinity!=c&&(c=(0<c||-1)*Math.floor(Math.abs(c))));if(c>=h)return-1;for(c=0<=c?c:Math.max(h-Math.abs(c),0);c<h;c++)if(c in b&&b[c]===a)return c;return-1}.apply(a,[b])};d.uuid=function(){function a(f){var h=
Math.random();try{c&&(h=b.getRandomValues(new Uint32Array(1))[0]/Math.pow(2,32))}catch(d){}return Math.floor((9*h+1)*Math.pow(10,f-1))}var b=window.crypto||window.msCrypto,c=null!==b&&"object"===typeof b;return{v4:function(){try{if(c)return([1E7]+-1E3+-4E3+-8E3+-1E11).replace(/[018]/g,function(a){return(a^b.getRandomValues(new Uint32Array(1))[0]&15>>a/4).toString(16)})}catch(a){}return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"===a?b:b&3|
8).toString(16)})},num:function(b){var c=new Date,e=function(a){a-=100*Math.floor(a/100);return 10>a?"0"+a:String(a)};return e(c.getHours())+""+e(c.getMinutes())+""+e(c.getSeconds())+""+a(b-6)}}};d.isPreview=function(){return window.navigator&&"preview"===window.navigator.loadPurpose};d.isPrerender=function(a){var b,c=!1,f=["webkit","ms"];if("prerender"===document.visibilityState)b="visibilitychange";else for(var g=0;g<f.length;g++)"prerender"===document[f[g]+"VisibilityState"]&&(b=f[g]+"visibilitychange");
if("undefined"!==typeof b){var n=function(c){a(c);d.removeEvtListener(document,b,n)};d.addEvtListener(document,b,n);c=!0}return c};d.addEvtListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};d.removeEvtListener=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)};d.hashcode=function(a){var b=0;if(0===a.length)return b;for(var c=0;c<a.length;c++)var f=a.charCodeAt(c),b=(b<<5)-b+f,b=b|0;
return b};d.setLocation=function(a){var b=a.location;a=window[a.target]||window;b&&(a.location.href=b)};d.dispatchCallbackEvent=function(a){var b;if("function"===typeof window.Event)b=new Event("ATCallbackEvent");else try{b=document.createEvent("Event"),b.initEvent&&b.initEvent("ATCallbackEvent",!0,!0)}catch(c){}b&&"function"===typeof document.dispatchEvent&&(b.name=a,document.dispatchEvent(b))};d.addCallbackEvent=function(a){d.addEvtListener(document,"ATCallbackEvent",a)};d.removeCallbackEvent=function(a){d.removeEvent("ATCallbackEvent",
a)};(function(){function a(b,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var f;try{f=document.createEvent("CustomEvent"),f.initCustomEvent(b,c.bubbles,c.cancelable,c.detail)}catch(h){}return f}"function"===typeof window.CustomEvent?window.ATCustomEvent=window.CustomEvent:("function"===typeof window.Event&&(a.prototype=window.Event.prototype),window.ATCustomEvent=a)})();d.addEvent=function(a,b,c,f){d[a]=new ATCustomEvent(a,{detail:{name:b,id:c}});d.addEvtListener(document,a,f)};d.removeEvent=
function(a,b){d.removeEvtListener(document,a,b)};d.dispatchEvent=function(a,b){d[a]=d[a]||new ATCustomEvent(a,{detail:{name:b,id:-1}});try{document.dispatchEvent(d[a])}catch(c){}};d.privacy=new function(){function a(b,c){var f=[],e,h;e={};for(var l=0;l<b.length;l++){e={};d.object2Flatten(b[l],null,e,null,!0);for(var m in e)e.hasOwnProperty(m)&&-1===d.arrayIndexOf(c,m)&&delete e[m];if(!d.isEmptyObject(e)){h={};for(var g in e)e.hasOwnProperty(g)&&d.flatten2Object(h,g,e[g]);e=d.getFormattedObject(h);
f.push(e)}}return f}function b(a,c,f){1<a.length?("undefined"===typeof c[a[0]]&&(c[a[0]]={}),b(a.slice(1,a.length),c[a[0]],f)):c[a[0]]=f}function c(a,b,f,h,l){var d=h?h:{};if(!a||"object"!==typeof a||a instanceof Array)if("undefined"!==typeof a&&0<=f.indexOf(l)||"undefined"===typeof f)d[l]=a;else for(b=0;b<f.length;b++){if(l&&0===l.indexOf(f[b])){d[l]=a;break}}else for(var m in a)a.hasOwnProperty(m)&&c(a[m],b,f,d,(l?l+b:"")+m);if(void 0===h)return d}function f(a,f,h){for(var l=[],g=0;g<a.length;g++){var w;
w=c(a[g],h,f);var s=h,n={},p=void 0;for(p in w)if(w.hasOwnProperty(p)){var q=p.split(s);b(q,n,w[p])}w=n;d.isEmptyObject(w)||l.push(w)}return l}function g(a,b){var c="",f={key:"",flattenedProperty:""};switch(!0){case 0===a.indexOf("stc_"):c="stc_";break;case 0===a.indexOf("stc/"):c="stc/";break;case 0===a.indexOf("events_"):c="events_";break;case 0===a.indexOf("context_"):c="context_";break;default:f.key=a}if(c){var e=c.substring(0,c.length-1);f.key=e;0>b.indexOf(e)&&(f.flattenedProperty=a.substring(c.length))}return f}
function n(a){for(var b=[],c={},f=0;f<a.length;f++)if("string"===typeof a[f]){var e={};if(-1<a[f].indexOf("#")){var h=a[f].split("#");h[0]===s&&(e=g(h[1],a))}else e=g(a[f],a);e.key&&0>b.indexOf(e.key)&&b.push(e.key);e.flattenedProperty&&(c[e.key]=(c[e.key]||[]).concat(e.flattenedProperty))}else for(var l in a[f])a[f].hasOwnProperty(l)&&(0>b.indexOf(l)&&b.push(l),0>a.indexOf(l)&&(c[l]=(c[l]||[]).concat(a[f][l])));return{keys:b,values:c}}var p=this,l={storageParams:null,bufferParams:null},s="";p.CONSENTNO=
"Consent-NO";p.ALL="*";p.testStorageParam=function(a,b){var c;if(l.storageParams instanceof Array){for(var f,e=l.storageParams.length-1;0<=e;e--)if(f=l.storageParams[e],"string"===typeof f){if(f===a||f===p.ALL)return{toSetInStorage:!0}}else{a:{c=a;var h=b,d=void 0,m=void 0;for(m in f)if(f.hasOwnProperty(m)&&c===m){if(!h){c=!0;break a}d=[];f[m]instanceof Array?d=f[m]:d.push(f[m]);for(var g=0;g<d.length;g++)if(d[g]===h){c=!0;break a}}c=!1}if(c)return{toSetInStorage:!0}}return{toSetInStorage:!1}}return{toSetInStorage:!0}};
p.processStorageParams=function(a,b,c){if(c){c=c();var f=n(l.storageParams);if(f.keys[0]!==p.ALL)for(var e in c)if(c.hasOwnProperty(e)&&void 0!==c[e])if(-1===d.arrayIndexOf(f.keys,e))a&&a(e);else if(d.isObject(c[e])){var h=e,m=c[e].val,g=f.values[e],s=a,q=b;if("undefined"!==typeof g){var k=[];g instanceof Array?k=g:k.push(g);g=void 0;for(g in m)m.hasOwnProperty(g)&&-1===d.arrayIndexOf(k,g)&&s&&s([h,g]);s&&q&&d.isEmptyObject(q(h))&&s(h)}}}};p.testBufferParam=function(b,c){var e,m;if(l.bufferParams instanceof
Array){e=n(l.bufferParams);for(m=0;m<e.keys.length;m++)if(e.keys[m]===b||e.keys[m]===p.ALL)if(e.values.hasOwnProperty(e.keys[m])){var g={};g[e.keys[m]]=e.values[e.keys[m]];a:{e=b;m=c;if(d.isObject(g)){var w=void 0,s=[],q=!1,k=w=w=void 0;for(k in g)if(g.hasOwnProperty(k)&&e===k&&(w=m,"string"===typeof w&&(w=d.jsonParse(w)||w),"object"===typeof w)){w instanceof Array?(s=w,q=!0):s.push(w);w="stc"===e?f(s,g[k],"/"):"events"===e||"context"===e?f(s,g[k],"_"):a(s,g[k]);0===w.length?(e=!1,m=void 0):(w=q?
w:w[0],e=!0,m=d.jsonSerialize(w));break a}}e=!1;m=void 0}if(e)return{toSetInBuffer:!0,value:m};break}else return{toSetInBuffer:!0,value:c};return{toSetInBuffer:!1}}return{toSetInBuffer:!0,value:c}};p.processBufferParams=function(b,c,e){if(c){c=c();var m=n(l.bufferParams);if(m.keys[0]!==p.ALL)for(var g in c)if(c.hasOwnProperty(g))if(-1===d.arrayIndexOf(m.keys,g))b&&b(g);else{var s=g,q=c[g],k=m.values[g],y=b,H=e;if("undefined"!==typeof k&&"undefined"!==typeof q){var E=[],B=q._value,F=[],I=!1,D=void 0,
D=void 0;k instanceof Array?E=k:E.push(k);"string"===typeof B&&(B=d.jsonParse(B)||B);"object"===typeof B&&(B instanceof Array?(F=B,I=!0):F.push(B),D="stc"===s?f(F,E,"/"):"events"===s||"context"===s?f(F,E,"_"):a(F,E),0===D.length?y&&y(s):(D=I?D:D[0],H&&H(s,d.jsonSerialize(D),q._options)))}}}};p.setMode=function(a){s=a};p.setParameters=function(a){l=a};p.getParameters=function(){return l};p.resetParameters=function(){l={storageParams:null,bufferParams:null}}};d.optedOut=null;d.addOptOutEvent=function(a,
b){d.addEvent("ATOptOutEvent","clientsideuserid",a,b)};d.removeOptOutEvent=function(a){d.removeEvent("ATOptOutEvent",a)};d.dispatchOptOutEvent=function(a){d.optedOut=a;d.dispatchEvent("ATOptOutEvent","clientsideuserid")};d.userOptedOut=function(){d.dispatchOptOutEvent(!0)};d.userOptedIn=function(){d.dispatchOptOutEvent(!1)};d.isOptedOut=function(){if(null===d.optedOut){var a;a:{a=null;d.isLocalStorageAvailable()&&(a=localStorage.getItem("atuserid"));if(null===a){var b=/(?:^| )atuserid=([^;]+)/.exec(document.cookie);
null!==b&&(a=b[1])}if(null!==a)try{a=decodeURIComponent(a)}catch(c){}if(a&&(a=d.jsonParse(a)||d.jsonParse(d.Base64.decode(a)),null!==a)){a="OPT-OUT"===a.val;break a}a=!1}d.optedOut=a}return!!d.optedOut};d.consentReceived=function(a){d.consent=!!a};d.consent=!0;d.isTabOpeningAction=function(a){var b=!1;a&&(a.ctrlKey||a.shiftKey||a.metaKey||a.button&&1===a.button)&&(b=!0);return b};d.CLICKS_REDIRECTION="redirection";d.CLICKS_FORM="form";d.CLICKS_MAILTO="mailto"};ATInternet.Utils=new Utils;
var BuildManager=function(a){var g=this,k=0,d=0,b=["dz"],c="",h=function(a,b,c,f,e,h,d){a="&"+a+"=";return{param:a,paramSize:a.length,str:b,strSize:b.length,truncate:c,multihit:f,separator:e||"",encode:h,last:d}},m=function(a,b){var c="",f=0,e=0,h=0,f=-1,d=null,m=null,g;for(g in a)a.hasOwnProperty(g)&&(d=a[g])&&(f=b-e,d.last&&null!==m?m[g]=d:d.strSize+d.paramSize<=f?(c+=d.param+d.str,e+=d.paramSize+d.strSize):(m=m||{},m[g]=d,d.truncate&&(h=f-d.paramSize,d.separator&&(f=d.str.substring(0,f),f=d.encode?
f.lastIndexOf(encodeURIComponent(d.separator)):f.lastIndexOf(d.separator),0<f&&(h=f)),c+=d.param+d.str.substring(0,h),e+=d.paramSize+d.str.substring(0,h).length,m[g].str=d.str.substring(h,d.strSize),m[g].strSize=m[g].str.length)));return[c,m]},e=function(c,f,e){var g="",r=function(c){if(c==={})return[];var f=[],e;e={};var l=!1,s=void 0,r,n,q,k,p,u,v,z,G="",x;for(x in c)if(c.hasOwnProperty(x))if(u=p=k=q=!1,r=c[x]._value,n=c[x]._options||{},"boolean"===typeof n.encode&&(q=n.encode),"function"===typeof r&&
(r=r()),r=r instanceof Array?r.join(n.separator||","):"object"===typeof r?ATInternet.Utils.jsonSerialize(r):"undefined"===typeof r?"undefined":r.toString(),q&&(r=encodeURIComponent(r)),-1<ATInternet.Utils.arrayIndexOf(b,x)?k=!0:"boolean"===typeof n.truncate&&(k=n.truncate),"boolean"===typeof n.multihit&&(p=n.multihit),"boolean"===typeof n.last&&(u=n.last),r=h(x,r,k,p,n.separator,q,u),p)d-=r.paramSize+r.strSize,G+=r.param+r.str;else if(u)r.paramSize+r.strSize>d&&(r.str=r.str.substring(0,d-r.paramSize),
r.strSize=r.str.length),v=x,z=r;else if(e[x]=r,e[x].paramSize+e[x].strSize>d&&!e[x].truncate){a.emit("Tracker:Hit:Build:Error",{lvl:"ERROR",msg:'Too long parameter: "'+e[x].param+'"',details:{value:e[x].str}});l=!0;s=x;break}v&&(e[v]=z);e=[e,l,s,G];c=e[0];l=e[1];g=e[3];l&&(e=e[2],c=c[e],c.str=c.str.substring(0,d-c.paramSize),c.strSize=c.str.length,l={},l.mherr=h("mherr","1",!1,!1,"",!1,!1),l[e]=c,c=l);c=m(c,d);if(null===c[1])f=c[0];else for(f.push(c[0]);null!==c[1];)c=m(c[1],d),f.push(c[0]);return f},
n="";a.buffer.presentInFilters(f,"hitType")||(f=a.buffer.addInFilters(f,"hitType",["page"]));f=a.buffer.addInFilters(f,"hitType",["all"]);var q,k;if(ATInternet.Utils.isObject(c)){f=a.buffer.addInFilters(f,"permanent",!0);f=a.buffer.get(f,!0);for(q in c)c.hasOwnProperty(q)&&(n={},c[q]&&"object"===typeof c[q]&&c[q].hasOwnProperty("_value")?(k=c[q]._value,c[q].hasOwnProperty("_options")&&(n=c[q]._options)):k=c[q],k=ATInternet.Utils.privacy.testBufferParam(q,k),k.toSetInBuffer&&(f[q]={_value:k.value,
_options:n}));n=r(f)}else for(q in f=a.buffer.get(f,!0),n=r(f),f)f.hasOwnProperty(q)&&(f[q]._options&&f[q]._options.permanent||a.buffer.del(q));e&&e(n,g)};g.getCollectDomain=function(){var b="",b=a.getConfig("logSSL")||a.getConfig("log"),c=a.getConfig("domain");return b=b&&c?b+"."+c:a.getConfig("collectDomainSSL")||a.getConfig("collectDomain")};var f=function(b){var c="",f=a.getConfig("baseURL");if(f)c=f;else{var f=g.getCollectDomain(),e=a.getConfig("pixelPath"),e=e||"/";"/"!==e.charAt(0)&&(e="/"+
e);f&&(c=(a.getConfig("forceHttp")?"http://":"https://")+f+e)}f=a.getConfig("site");c&&f?b&&b(null,c+"?s="+f):b&&b({message:"Config error"})},q=function(a,b,c){f(function(f,h){f?c&&c(f):(d=k-(h.length+27),e(a,b,function(a,b){var f=[],e=ATInternet.Utils.uuid().num(13);if(a instanceof Array)for(var d=1;d<=a.length;d++)f.push(h+b+"&mh="+d+"-"+a.length+"-"+e+a[d-1]);else f.push(h+b+a);c&&c(null,f)}))})},n=function(b,c,f,e,h,d,m){return function(){return function(g){a.emit(b,{lvl:h,details:{hit:c,method:f,
event:g,isMultiHit:d,elementType:m}});e&&e()}}()};g.send=function(b,c,f,e,h){q(b,c,function(b,c){if(b)a.emit("Tracker:Hit:Build:Error",{lvl:"ERROR",msg:b.message,details:{}}),f&&f();else for(var d=0;d<c.length;d++)g.sendUrl(c[d],f,e,h)})};k=Math.max(a.getConfig("maxHitSize")||0,2E3);d=Math.max(a.getConfig("maxHitSize")||0,2E3);c=a.getConfig("requestMethod");g.sendUrl=function(b,f,e,h){var d=-1<b.indexOf("&mh=");e=e||c;ATInternet.Utils.isOptedOut()&&!a.getConfig("sendHitWhenOptOut")?n("Tracker:Hit:Sent:NoTrack",
b,e,f,"INFO",d,h)():"POST"===e&&ATInternet.Utils.isBeaconMethodAvailable()?(h="Tracker:Hit:Sent:Error",e="ERROR",window.navigator.sendBeacon(b,null)&&(h="Tracker:Hit:Sent:Ok",e="INFO"),n(h,b,"POST",f,e,d,"")()):(e=new Image,e.onload=n("Tracker:Hit:Sent:Ok",b,"GET",f,"INFO",d,h),e.onerror=n("Tracker:Hit:Sent:Error",b,"GET",f,"ERROR",d,h),e.src=b)}},TriggersManager=function(){function a(a,c,h){for(var d=[],e=0;e<a.length;e++)a[e].callback(c,h),a[e].singleUse||d.push(a[e]);return d}function g(a,c,h,
d){var e=a.shift();if("*"===e)return c["*"]=c["*"]||[],c["*"].push({callback:h,singleUse:d}),c["*"].length-1;if(0===a.length)return g([e,"*"],c,h,d);c["*"]=c["*"]||[];c[e]=c[e]||{};return g(a,c[e],h,d)}function k(b,c,h,d){var e=c.shift();"*"!==e&&(0===c.length?k(b,[e,"*"],h,d):h[e]&&(h[e]["*"]=a(h[e]["*"],b,d),k(b,c,h[e],d)))}var d={};this.on=function(a,c,h){h=h||!1;return g(a.split(":"),d,c,h)};this.emit=function(b,c){d["*"]&&(d["*"]=a(d["*"],b,c));k(b,b.split(":"),d,c)}},PluginsManager=function(a){var g=
{},k={},d=0,b={},c=0,h=function(a){var b=!1;g[a]&&(b=!0);return b},m=this.unload=function(b){h(b)?(g[b]=void 0,a.emit("Tracker:Plugin:Unload:"+b+":Ok",{lvl:"INFO"})):a.emit("Tracker:Plugin:Unload:"+b+":Error",{lvl:"ERROR",msg:"not a known plugin"});return a},e=this.load=function(b,c){"function"===typeof c?"undefined"===typeof a.getConfig.plgAllowed||0===a.getConfig.plgAllowed.length||-1<a.getConfig.plgAllowed.indexOf(b)?(g[b]=new c(a),k[b]&&h(b)&&(k[b]=!1,d--,h(b+"_ll")&&m(b+"_ll"),0===d&&a.emit("Tracker:Plugin:Lazyload:File:Complete",
{lvl:"INFO",msg:"LazyLoading triggers are finished"})),a.emit("Tracker:Plugin:Load:"+b+":Ok",{lvl:"INFO"})):a.emit("Tracker:Plugin:Load:"+b+":Error",{lvl:"ERROR",msg:"Plugin not allowed",details:{}}):a.emit("Tracker:Plugin:Load:"+b+":Error",{lvl:"ERROR",msg:"not a function",details:{obj:c}});return a},f=this.isLazyloading=function(a){return a?!0===k[a]:0!==d},q=function(a){return!h(a)&&!f(a)&&h(a+"_ll")},n=function(b){k[b]=!0;d++;ATInternet.Utils.loadScript({url:a.getConfig("lazyLoadingPath")+b+".js"})},
p=function(a){return q(a)?(n(a),!0):!1},l=function(a){b[a]?b[a]++:b[a]=1;c++},s=function(a,b,c,f){var e=null;b=b.split(".");h(a)&&g[a][b[0]]&&(e=1<b.length&&g[a][b[0]][b[1]]?g[a][b[0]][b[1]].apply(g[a],c):g[a][b[0]].apply(g[a],c));f&&f(e)},t=function(f,e,d,h){l(f);a.onTrigger("Tracker:Plugin:Load:"+f+":Ok",function(){s(f,e,d,function(e){b[f]--;c--;0===c&&a.emit("Tracker:Plugin:Lazyload:Exec:Complete",{lvl:"INFO",msg:"All exec waiting for lazyloading are done"});h&&h(e)})},!0)},r=function(a){for(var b=
{mcount:0,plugins:{}},c=0;c<a.length;c++)g.hasOwnProperty(a[c])||(b.mcount++,b.plugins[a[c]]=!0);return b};this.isExecWaitingLazyloading=function(){return 0!==c};a.exec=this.exec=function(a,b,c,e){q(a)?(t(a,b,c,e),n(a)):f(a)?t(a,b,c,e):s(a,b,c,e)};this.waitForDependencies=function(b,c){var f=r(b);if(0===f.mcount)a.emit("Tracker:Plugin:Dependencies:Loaded",{lvl:"INFO",details:{dependencies:b}}),c();else for(var e in f.plugins)f.plugins.hasOwnProperty(e)&&(a.emit("Tracker:Plugin:Dependencies:Error",
{lvl:"WARNING",msg:"Missing plugin "+e}),a.onTrigger("Tracker:Plugin:Load:"+e,function(a,b){var e=a.split(":"),d=e[3];"Ok"===e[4]&&(f.plugins[d]=!1,f.mcount--,0===f.mcount&&c())},!0),p(e))};this.init=function(){for(var a in ATInternet.Tracker.pluginProtos)ATInternet.Tracker.pluginProtos.hasOwnProperty(a)&&e(a,ATInternet.Tracker.pluginProtos[a])}},CallbacksManager=function(a){var g=this,k={},d=function(b){if(b.name){var c=!0,d=a.getConfig("callbacks");"undefined"!==typeof d&&(d.include instanceof Array&&
-1===ATInternet.Utils.arrayIndexOf(d.include,b.name)&&(c=!1),d.exclude instanceof Array&&-1!==ATInternet.Utils.arrayIndexOf(d.exclude,b.name)&&(c=!1));ATInternet.Callbacks&&ATInternet.Callbacks.hasOwnProperty(b.name)&&(d={},d[b.name]={"function":ATInternet.Callbacks[b.name]},c&&g.load(b.name,d[b.name]["function"]),ATInternet.Tracker.callbackProtos[b.name]||(ATInternet.Tracker.callbackProtos[b.name]=d[b.name]))}};g.load=function(b,c){"function"===typeof c?(new c(a),a.emit("Tracker:Callback:Load:"+
b+":Ok",{lvl:"INFO",details:{obj:c}})):a.emit("Tracker:Callback:Load:"+b+":Error",{lvl:"ERROR",msg:"not a function",details:{obj:c}});return a};g.init=function(){if(a.getConfig("activateCallbacks")){var b=a.getConfig("callbacks");if("undefined"!==typeof b&&b.include instanceof Array)for(var c=0;c<b.include.length;c++)ATInternet.Callbacks&&ATInternet.Callbacks.hasOwnProperty(b.include[c])&&(k[b.include[c]]={"function":ATInternet.Callbacks[b.include[c]]},ATInternet.Tracker.callbackProtos[b.include[c]]||
(ATInternet.Tracker.callbackProtos[b.include[c]]=k[b.include[c]]));else for(c in ATInternet.Callbacks)ATInternet.Callbacks.hasOwnProperty(c)&&(k[c]={"function":ATInternet.Callbacks[c]},ATInternet.Tracker.callbackProtos[c]||(ATInternet.Tracker.callbackProtos[c]=k[c]));if("undefined"!==typeof b&&b.exclude instanceof Array)for(c=0;c<b.exclude.length;c++)delete k[b.exclude[c]];for(var h in k)k.hasOwnProperty(h)&&k[h]&&g.load(h,k[h]["function"]);ATInternet.Utils.addCallbackEvent(d)}};g.removeCallbackEvent=
function(){ATInternet.Utils.removeCallbackEvent(d)}},BufferManager=function(a){var g=this,k={};g.set=function(a,b,d){b=ATInternet.Utils.privacy.testBufferParam(a,b);b.toSetInBuffer&&(d=d||{},d.hitType=d.hitType||["page"],k[a]={_value:b.value,_options:d})};var d=function(a,b,d){return(a=ATInternet.Utils.cloneSimpleObject(a[b]))&&!d?a._value:a},b=function h(a,b){if(!(a&&b instanceof Array&&a instanceof Array))return[];if(0===a.length)return b;var f=a[0],d,g=[],p=ATInternet.Utils.cloneSimpleObject(a);
p.shift();for(var l=0;l<b.length;l++)if("object"!==typeof f[1])k[b[l]]&&k[b[l]]._options[f[0]]===f[1]&&g.push(b[l]);else{d=f[1].length;for(var s=0;s<d;s++)if(k[b[l]]&&k[b[l]]._options[f[0]]instanceof Array&&0<=ATInternet.Utils.arrayIndexOf(k[b[l]]._options[f[0]],f[1][s])){g.push(b[l]);break}}return h(p,g)};g.get=function(a,g){var e={};if("string"===typeof a)e=d(k,a,g);else for(var f=b(a,ATInternet.Utils.getObjectKeys(k)),q=0;q<f.length;q++)e[f[q]]=d(k,f[q],g);return e};g.presentInFilters=function(a,
b){return a&&0!==a.length?a[0][0]===b?!0:g.presentInFilters(a.slice(1),b):!1};g.addInFilters=function(a,b,e,f){if(!a||0===a.length)return f?[]:[[b,e]];var d=a[0][0],n=a[0][1];d===b&&(n instanceof Array&&-1===ATInternet.Utils.arrayIndexOf(n,e[0])&&n.push(e[0]),f=!0);return[[d,n]].concat(g.addInFilters(a.slice(1),b,e,f))};g.del=function(a){k[a]=void 0};g.clear=function(){k={}}},PropertiesManager=function(a){var g=this,k={};g.setProp=function(a,b,c){"undefined"!==typeof a&&(k[a]={value:b,persistent:!!c})};
g.setProps=function(a,b){if(ATInternet.Utils.isObject(a))for(var c in a)a.hasOwnProperty(c)&&g.setProp(c,a[c],b)};g.delProp=function(d,b){"undefined"!==typeof k[d]&&delete k[d];!b&&a.delParam(d.toLowerCase())};g.delProps=function(a){for(var b in k)k.hasOwnProperty(b)&&g.delProp(b,a)};g.getProp=function(a){k=k||{};return k[a]};g.getProps=function(){return k}},Tag=function(a,g,k){g=g||{};var d=this;d.version="5.28.2";var b=ATInternet.Utils.cloneSimpleObject(g);d.triggers=new TriggersManager(d);d.emit=
d.triggers.emit;d.onTrigger=d.triggers.on;var c=ATInternet.Utils.cloneSimpleObject(dfltGlobalCfg)||{},h;for(h in a)a.hasOwnProperty(h)&&(c[h]=a[h]);d.getConfig=function(a){return c[a]};d.setConfig=function(a,b,h){void 0!==c[a]&&h||(d.emit("Tracker:Config:Set:"+a,{lvl:"INFO",details:{bef:c[a],aft:b}}),c[a]=b)};d.configPlugin=function(a,b,h){c[a]=c[a]||{};for(var g in b)b.hasOwnProperty(g)&&void 0===c[a][g]&&(c[a][g]=b[g]);h&&(h(c[a]),d.onTrigger("Tracker:Config:Set:"+a,function(a,b){h(b.details.aft)}));
return c[a]};d.getAllContext=function(){return b};d.getContext=function(a){return b[a]};d.setContext=function(a,c){d.emit("Tracker:Context:Set:"+a,{lvl:"INFO",details:{bef:b[a],aft:c}});b[a]=c};d.delContext=function(a,c){d.emit("Tracker:Context:Deleted:"+a+":"+c,{lvl:"INFO",details:{key1:a,key2:c}});if(a)b.hasOwnProperty(a)&&(c?b[a]&&b[a].hasOwnProperty(c)&&(b[a][c]=void 0):b[a]=void 0);else if(c)for(var h in b)b.hasOwnProperty(h)&&b[h]&&b[h].hasOwnProperty(c)&&(b[h][c]=void 0)};d.plugins=new PluginsManager(d);
d.buffer=new BufferManager(d);d.setParam=d.buffer.set;d.getParams=function(a){return d.buffer.get(a,!1)};d.getParam=d.buffer.get;d.delParam=d.buffer.del;d.builder=new BuildManager(d);d.sendUrl=d.builder.sendUrl;d.callbacks=new CallbacksManager(d);d.properties=new PropertiesManager(d);d.setProp=d.properties.setProp;d.setProps=d.properties.setProps;d.delProp=d.properties.delProp;d.delProps=d.properties.delProps;d.getProp=d.properties.getProp;d.getProps=d.properties.getProps;d.sendHit=function(a,b,c,
h,g){var l=d.getProps(),m,k;for(k in l)l.hasOwnProperty(k)&&(m=l[k].value,l[k].persistent?d.setParam(k.toLowerCase(),m,{permanent:!0,hitType:["all"],encode:!0}):(ATInternet.Utils.isObject(a)?a[k.toLowerCase()]={_value:m,_options:{hitType:["all"],encode:!0}}:d.setParam(k.toLowerCase(),m,{hitType:["all"],encode:!0}),d.delProp(k,!0)));d.builder.send(a,b,c,h,g)};ATInternet.Utils.privacy.resetParameters();d.setParam("ts",function(){return(new Date).getTime()},{permanent:!0,hitType:["all"]});(d.getConfig("disableCookie")||
d.getConfig("disableStorage"))&&d.setParam("idclient",ATInternet.Utils.privacy.CONSENTNO,{permanent:!0,hitType:["all"]});d.getConfig("medium")&&d.setParam("medium",d.getConfig("medium"),{permanent:!0,hitType:["all"]});if(d.getConfig("urlPropertyAuto")&&"undefined"!==typeof window&&"undefined"!==typeof window.location){h=(d.getConfig("urlPropertyQueryString")?window.location.href:window.location.protocol+"//"+window.location.host+window.location.pathname).replace(/[<>]/g,"").substring(0,1600).replace(/&/g,
"$").replace(/#/g,"\u00b5");var m=d.getContext("page")||{};m.url=window.encodeURIComponent(h);d.setContext("page",m);d.setParam("page_url",h,{permanent:!0,hitType:"page click publisher selfPromotion onSiteAdsClick onSiteAdsImpression InternalSearch mvtesting richmedia".split(" ")})}d.plugins.init();d.callbacks.init();d.emit("Tracker:Ready",{lvl:"INFO",msg:"Tracker initialized",details:{tracker:d,args:{config:a,context:g,callback:k}}});k&&k(d);ATInternet.Tracker.instances.push(d)};
ATInternet.Tracker.Tag=Tag;ATInternet.Tracker.instances=[];ATInternet.Tracker.pluginProtos={};ATInternet.Tracker.addPlugin=function(a,g){g=g||ATInternet.Tracker.Plugins[a];if(!ATInternet.Tracker.pluginProtos[a]){ATInternet.Tracker.pluginProtos[a]=g;for(var k=0;k<ATInternet.Tracker.instances.length;k++)ATInternet.Tracker.instances[k].plugins.load(a,g)}};ATInternet.Tracker.delPlugin=function(a){if(ATInternet.Tracker.pluginProtos[a]){ATInternet.Tracker.pluginProtos[a]=void 0;for(var g=0;g<ATInternet.Tracker.instances.length;g++)ATInternet.Tracker.instances[g].plugins.unload(a)}};
ATInternet.Tracker.callbackProtos={};
}).call(window);(function(){var dfltPluginCfg={"lifetime":30,"lastPersistence":true,"domainAttribution":true,"enableUTMTracking":true,"UTMParameters":["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],"querystringPrefix":"at_"};var dfltGlobalCfg={"visitLifetime":30,"redirectionLifetime":30};ATInternet.Tracker.Plugins.Campaigns=function(a){a.setConfig("visitLifetime",dfltGlobalCfg.visitLifetime,!0);a.setConfig("redirectionLifetime",dfltGlobalCfg.redirectionLifetime,!0);var g={},k,d;a.configPlugin("Campaigns",dfltPluginCfg||{},function(a){g=a});var b,c,h,m,e,f,q,n,p,l,s,t,r,u=function(){var b=function(a){var b="";a&&(b=isNaN(a)&&-1===a.search(/^\[(.*?)\]$/g)&&-1===a.search(/^\d+\[(.*?)\]$/g)?"["+a+"]":a);return b},c=function(a){var b=a;-1!==a.search(/[-]/g)&&-1===a.search(/^\[(.*?)\]$/g)&&
(b="["+a+"]");return b},f=function(a){for(;"-"===a.charAt(a.length-1);)a=a.substring(0,a.length-1);return a};this.SponsoredLinks=function(){var e={google:"goo",yahoo:"ysm",miva:"miv",orange:"wan",msn:"msn",mirago:"mir",sklik:"skl",adfox:"adf",etarget:"etg",yandex:"yan",ebay:"eba",searchalliance:"sal",bing:"bin",naver:"nav",baidu:"bdu",qwant:"qwt",waze:"waz",amazon:"amz"},d={search:"s",content:"c"};this.atMedium="sl";this.atTerm=this.atNetwork=this.atVariant=this.atCreation=this.atPlatform=this.atCampaign=
"";this.format=function(){var a="sec",h=b(this.atCampaign),l=e[this.atPlatform]||c(this.atPlatform),g=b(this.atCreation),m=b(this.atVariant),r=d[this.atNetwork]||c(this.atNetwork),n=b(this.atTerm);return f(a+("-"+h+"-"+l+"-"+g+"-"+m+"-"+r+"-"+n))};this.setProperties=function(b){var c=a.utils.getQueryStringValue(g.querystringPrefix+"source",b)||"";this.atCampaign=a.utils.getQueryStringValue(g.querystringPrefix+"campaign",b)||"";this.atPlatform=a.utils.getQueryStringValue(g.querystringPrefix+"platform",
b)||"";this.atCreation=a.utils.getQueryStringValue(g.querystringPrefix+"creation",b)||"";this.atVariant=a.utils.getQueryStringValue(g.querystringPrefix+"variant",b)||"";this.atNetwork=a.utils.getQueryStringValue(g.querystringPrefix+"network",b)||"";this.atTerm=a.utils.getQueryStringValue(g.querystringPrefix+"term",b)||"";a.setContext("campaigns_events",{$:c,medium:this.atMedium,campaign:this.atCampaign,platform:this.atPlatform,creation:this.atCreation,variant:this.atVariant,network:this.atNetwork,
term:this.atTerm})}};this.Email=function(){var e={acquisition:"erec",retention:"epr",promotion:"es"};this.atMedium="email";this.atSendTime=this.atRecipientList=this.atRecipientId=this.atLink=this.atSendDate=this.atCreation=this.atCampaign=this.atEmailtype="";this.format=function(){var a=e[this.atEmailtype]||e.promotion,d=b(this.atCampaign),h=b(this.atCreation),l=c(this.atSendDate),g=b(this.atLink),m=c(this.atRecipientId)+(this.atRecipientList?"@"+c(this.atRecipientList):""),r=c(this.atSendTime);return f(a+
("-"+d+"-"+h+"-"+l+"-"+g+"-"+m+"-"+r))};this.setProperties=function(b){var c=a.utils.getQueryStringValue(g.querystringPrefix+"source",b)||"";this.atEmailtype=a.utils.getQueryStringValue(g.querystringPrefix+"emailtype",b)||"";this.atCampaign=a.utils.getQueryStringValue(g.querystringPrefix+"campaign",b)||"";this.atCreation=a.utils.getQueryStringValue(g.querystringPrefix+"creation",b)||"";this.atSendDate=a.utils.getQueryStringValue(g.querystringPrefix+"send_date",b)||"";this.atLink=a.utils.getQueryStringValue(g.querystringPrefix+
"link",b)||"";this.atRecipientId=a.utils.getQueryStringValue(g.querystringPrefix+"recipient_id",b)||"";this.atRecipientList=a.utils.getQueryStringValue(g.querystringPrefix+"recipient_list",b)||"";this.atSendTime=a.utils.getQueryStringValue(g.querystringPrefix+"send_time",b)||"";a.setContext("campaigns_events",{$:c,medium:this.atMedium,emailtype:this.atEmailtype,campaign:this.atCampaign,creation:this.atCreation,send_date:this.atSendDate,link:this.atLink,recipient_id:this.atRecipientId,recipient_list:this.atRecipientList,
send_time:this.atSendTime})}};this.Affiliate=function(){this.atMedium="affiliate";this.atVariant=this.atCreation=this.atFormat=this.atIdentifier=this.atType=this.atCampaign="";this.format=function(){var a="al",c=b(this.atCampaign),e=b(this.atType),d=b(this.atIdentifier),h=b(this.atFormat),l=b(this.atCreation),g=b(this.atVariant);return f(a+("-"+c+"-"+e+"-"+d+"-"+h+"-"+l+"-"+g))};this.setProperties=function(b){var c=a.utils.getQueryStringValue(g.querystringPrefix+"source",b)||"";this.atCampaign=a.utils.getQueryStringValue(g.querystringPrefix+
"campaign",b)||"";this.atType=a.utils.getQueryStringValue(g.querystringPrefix+"type",b)||"";this.atIdentifier=a.utils.getQueryStringValue(g.querystringPrefix+"identifier",b)||"";this.atFormat=a.utils.getQueryStringValue(g.querystringPrefix+"format",b)||"";this.atCreation=a.utils.getQueryStringValue(g.querystringPrefix+"creation",b)||"";this.atVariant=a.utils.getQueryStringValue(g.querystringPrefix+"variant",b)||"";a.setContext("campaigns_events",{$:c,medium:this.atMedium,campaign:this.atCampaign,
type:this.atType,identifier:this.atIdentifier,format:this.atFormat,creation:this.atCreation,variant:this.atVariant})}};this.Display=function(){this.atMedium="display";this.atDetailPlacement=this.atGeneralPlacement=this.atChannel=this.atFormat=this.atVariant=this.atCreation=this.atCampaign="";this.format=function(){var a="ad",c=b(this.atCampaign),e=b(this.atCreation),d=b(this.atVariant),h=b(this.atFormat),l=b(this.atChannel),g=b(this.atGeneralPlacement),m=b(this.atDetailPlacement);return f(a+("-"+
c+"-"+e+"-"+d+"-"+h+"-"+l+"-"+g+"-"+m))};this.setProperties=function(b){var c=a.utils.getQueryStringValue(g.querystringPrefix+"source",b)||"";this.atCampaign=a.utils.getQueryStringValue(g.querystringPrefix+"campaign",b)||"";this.atCreation=a.utils.getQueryStringValue(g.querystringPrefix+"creation",b)||"";this.atVariant=a.utils.getQueryStringValue(g.querystringPrefix+"variant",b)||"";this.atFormat=a.utils.getQueryStringValue(g.querystringPrefix+"format",b)||"";this.atChannel=a.utils.getQueryStringValue(g.querystringPrefix+
"channel",b)||"";this.atGeneralPlacement=a.utils.getQueryStringValue(g.querystringPrefix+"general_placement",b)||"";this.atDetailPlacement=a.utils.getQueryStringValue(g.querystringPrefix+"detail_placement",b)||"";a.setContext("campaigns_events",{$:c,medium:this.atMedium,campaign:this.atCampaign,creation:this.atCreation,variant:this.atVariant,format:this.atFormat,channel:this.atChannel,general_placement:this.atGeneralPlacement,detail_placement:this.atDetailPlacement})}};this.Custom=function(){this.atCustom4=
this.atCustom3=this.atCustom2=this.atCustom1=this.atCampaign=this.atMedium="";this.format=function(){var a="";/\d+$/.test(this.atMedium)&&(a=/\d+$/.exec(this.atMedium)[0]);var a="cs"+a,c=b(this.atCampaign),e=b(this.atCustom1),d=b(this.atCustom2),h=b(this.atCustom3),l=b(this.atCustom4);return f(a+("-"+c+"-"+e+"-"+d+"-"+h+"-"+l))};this.setProperties=function(b){var c=a.utils.getQueryStringValue(g.querystringPrefix+"source",b)||"";this.atMedium=a.utils.getQueryStringValue(g.querystringPrefix+"medium",
b)||"";this.atCampaign=a.utils.getQueryStringValue(g.querystringPrefix+"campaign",b)||"";this.atCustom1=a.utils.getQueryStringValue(g.querystringPrefix+"custom1",b)||"";this.atCustom2=a.utils.getQueryStringValue(g.querystringPrefix+"custom2",b)||"";this.atCustom3=a.utils.getQueryStringValue(g.querystringPrefix+"custom3",b)||"";this.atCustom4=a.utils.getQueryStringValue(g.querystringPrefix+"custom4",b)||"";a.setContext("campaigns_events",{$:c,medium:this.atMedium,campaign:this.atCampaign,custom1:this.atCustom1,
custom2:this.atCustom2,custom3:this.atCustom3,custom4:this.atCustom4})}};this.medium={sl:this.SponsoredLinks,email:this.Email,affiliate:this.Affiliate,display:this.Display}},v=function(b,c){var f=a.getContext("campaigns")||{};f[b]=c;a.setContext("campaigns",f)},z=function(){var b=a.utils.getLocation(),c=function(){for(var c=g.UTMParameters,f,e=0;e<c.length;e++)(f=a.utils.getQueryStringValue(c[e],b))&&v(c[e],f)};(function(){var c=a.utils.getQueryStringValue(g.querystringPrefix+"medium",b);if(c){var f=
new u,c="function"===typeof f.medium[c]?new f.medium[c]:new f.Custom;c.setProperties(b);q=c.format()}else q=a.utils.getQueryStringValue("xtor",b);n=a.utils.getQueryStringValue("xtdt",b);p=a.utils.getQueryStringValue("xts",b)})();g.enableUTMTracking&&c()},w=function(b,c){var f=a.storage[d](b);if(null!==f)return"object"===typeof f&&!(f instanceof Array);a.storage[k](b,{},c);return!0};(function(){a.plugins.waitForDependencies(["Storage","Utils"],function(){k="set"+(g.domainAttribution?"":"Private");
d="get"+(g.domainAttribution?"":"Private");b=a.storage[d](["atredir","gopc"]);c=a.storage[d](["atredir","gopc_err"]);h=a.storage[d](["atredir","camp"]);a.storage.del(["atredir","gopc"]);a.storage.del(["atredir","gopc_err"]);a.storage.del(["atredir","camp"]);m=a.storage[d](["atsession","histo_camp"]);e=a.storage[d](["atreman","camp"]);f=a.storage[d](["atreman","date"]);z();l=a.getContext("forcedCampaign");s=!!a.getConfig("redirect");t=!!(q&&n&&p);r=!1;if(t){var u=(new Date).getTime()/6E4;r=!s&&p!==
a.getConfig("site")||0>u-n||u-n>=a.getConfig("visitLifetime")}u=l||h||q;if(s&&u&&w("atredir",{path:"/",end:a.getConfig("redirectionLifetime")})){a.storage[k](["atredir","camp"],u);var A=u=!1;l||(h?(u=b,A=c):(u=t,A=r));a.storage[k](["atredir","gopc"],u);a.storage[k](["atredir","gopc_err"],A)}!s&&e&&(v("xtor",e),u=(new Date).getTime()/36E5,u=Math.floor(u-f),v("roinbh",0<=u?u:0));s||(u=null,u=h?b?l||u:l||h:t?l:l||q||u,m&&m instanceof Array&&-1<m.indexOf(u)&&(u=null),u&&v("xto",u));if(!s&&!l){var y;h?
c&&(y=h):r&&(y=q);y&&v("pgt",y)}if(!s&&(y=h?l||h:l||q||null)&&!(!l&&!h&&t&&r||!l&&h&&b&&c)){if((!m||m instanceof Array&&0>m.indexOf(y))&&w("atsession",{path:"/",session:60*a.getConfig("visitLifetime")}))a.storage[k](["atsession","histo_camp"],m&&m.push(y)?m:[y]);e&&!g.lastPersistence||!w("atreman",{path:"/",session:86400*g.lifetime})||(a.storage[k](["atreman","camp"],y),a.storage[k](["atreman","date"],(new Date).getTime()/36E5))}a.emit("Campaigns:process:done",{lvl:"INFO"})})})()};ATInternet.Tracker.addPlugin("Campaigns");
}).call(window);(function(){var dfltPluginCfg={};var dfltGlobalCfg={"storageMode":"cookie"};ATInternet.Tracker.Plugins.Storage=function(a){var g=this,k={},d=!1,b=null;a.configPlugin("Storage",dfltPluginCfg||{},function(a){k=a;"localStorage"===k.storageMode&&(d=ATInternet.Utils.isLocalStorageAvailable())});var c={},h=function(b){return a.getConfig("base64Storage")?ATInternet.Utils.Base64.encode(b):encodeURIComponent(b)},m=function(b){return a.getConfig("base64Storage")?ATInternet.Utils.Base64.decode(b):decodeURIComponent(b)},e=function(){this.getData=function(a){var b=null;(a=RegExp("(?:^| )"+
a+"=([^;]+)").exec(document.cookie)||null)&&(b=m(a[1]));return b};this.setData=function(b){var c=!1;if(b.name&&"string"===typeof b.name){var d=b.options||{},e=d.end||{},f=d.domain||a.getConfig("cookieDomain"),g=d.secure||a.getConfig("cookieSecure"),k=d.samesite||a.getConfig("sameSiteStrict"),l=ATInternet.Utils.jsonSerialize(b),l=b.name+"="+h(l),l=l+(d.path&&"string"===typeof d.path?";path="+d.path:""),l=l+(f&&"string"===typeof f?";domain="+f:"")+(g&&"boolean"===typeof g?";secure":""),l=l+(k&&"boolean"===
typeof k?";samesite=strict":"");"function"===typeof e.toUTCString?l+=";expires="+e.toUTCString():"number"===typeof e&&(l+=";max-age="+e.toString());document.cookie=l;this.getData(b.name)&&(c=!0)}return c}};b=d?new function(){var a=function(a){var b=+new Date,c=!1,d;a.options&&("undefined"!==typeof a.options.expires?d=a.options.expires:(a=a.options.end||{},"function"===typeof a.getTime?d=a.getTime():"number"===typeof a&&(d=b+1E3*a)));"number"===typeof d&&b>=d&&(c=!0);return{itemToDelete:c,timestamp:d}},
b=function(a){var b=!1;try{localStorage.removeItem(a),b=!0}catch(c){}return b};this.getData=function(c){var d=null,e=localStorage.getItem(c);if(e){var e=m(e),f=ATInternet.Utils.jsonParse(e);f&&"object"===typeof f?a(f).itemToDelete&&b(c)||(delete f.options.expires,d=ATInternet.Utils.jsonSerialize(f)):d=e}return d};this.setData=function(c){var d=!1;if(c.name&&"string"===typeof c.name){var e=a(c);"number"===typeof e.timestamp&&(c.options.expires=e.timestamp);var f=ATInternet.Utils.jsonSerialize(c);if(e.itemToDelete)d=
b(c.name);else try{localStorage.setItem(c.name,h(f)),d=!0}catch(g){}}return d}}:new e;var f=function(c,d){var e=!1;c&&"object"===typeof c&&(d||ATInternet.Utils.consent&&!a.getConfig("disableCookie")&&!a.getConfig("disableStorage"))&&(e=b.setData(c));return e},q=function(a,b,c){a={name:a,val:b};c&&c.session&&"number"===typeof c.session&&(c.end=c.session);a.options=c||{};return a},n=function(c){var d=null,e=null;a.getConfig("disableCookie")||a.getConfig("disableStorage")||!c||"string"!==typeof c||(e=
b.getData(c));(c=e)&&(d=ATInternet.Utils.jsonParse(c));return d},p=function(a,b){var c=ATInternet.Utils.cloneSimpleObject(a);return f(c,b)?ATInternet.Utils.jsonParse(ATInternet.Utils.jsonSerialize(a)):null},l=function(a,b,d){if(!d&&c[a])d=c[a];else if(d=n(a))d.options=d.options||{},d.options.session&&"number"===typeof d.options.session&&(d.options.end=d.options.session,p(d,!1)),c[a]=d;return d?b?(a=null,!d||"object"!==typeof d.val||d.val instanceof Array||void 0===d.val[b]||(a=d.val[b]),a):d.val:
null},s=function(a,b,d,e,f){if(b){if(f=n(a))!f||"object"!==typeof f.val||f.val instanceof Array?f=null:"undefined"===typeof d?delete f.val[b]:f.val[b]=d,f&&(f=p(f,e))}else f=f||{},f=q(a,d,f),f=p(f,e);return f?(c[a]=f,f.val):null},t=function(a,b){if(b)s(a,b,void 0,!0,null);else{c[a]=void 0;var d=q(a,"",{end:new Date("Thu, 01 Jan 1970 00:00:00 UTC"),path:"/"});f(d,!0)}};a.storage={};a.storage.getAll=function(){return c};a.storage.get=g.get=function(a,b){b=!!b;return a instanceof Array?l(a[0],a[1],b):
l(a,"",b)};a.storage.getPrivate=g.getPrivate=function(b,c){b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");return g.get(b,c)};a.storage.set=g.set=function(a,b,c,d){var e;a instanceof Array?(e=a[0],a=a[1],c=null):(e=a,a=null);return ATInternet.Utils.privacy.testStorageParam(e,a).toSetInStorage||d?s(e,a,b,d,c):null};a.storage.setPrivate=g.setPrivate=function(b,c,d){b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");return g.set(b,c,d)};a.storage.del=g.del=function(a){a instanceof
Array?t(a[0],a[1]):t(a,"")};a.storage.delPrivate=g.delPrivate=function(b){b instanceof Array?b[0]+=a.getConfig("site"):b+=a.getConfig("site");g.del(b)};a.storage.cacheInvalidation=g.cacheInvalidation=function(){c={}}};ATInternet.Tracker.addPlugin("Storage");
}).call(window);(function(){var dfltPluginCfg={};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.Utils=function(a){var g=this,k={};a.utils={};a.utils.getQueryStringValue=g.getQueryStringValue=function(a,c){var d=ATInternet.Utils.hashcode(c).toString();if(!k[d]){k[d]={};for(var g=RegExp("[&#?]{1}([^&=#?]*)=([^&#]*)?","g"),e=g.exec(c);null!==e;)k[d][e[1]]=e[2],e=g.exec(c)}return k[d].hasOwnProperty(a)?k[d][a]:null};a.utils.manageChapters=g.manageChapters=function(b,c,d){var g="";if(b)for(var e=a.getConfig("ignoreEmptyChapterValue"),f="",k=1;k<parseInt(d,10)+1;k++)f=b[c+
k]||"",g=e?g+(f?f+"::":""):g+(b.hasOwnProperty(c+k)?f+"::":"");return g};a.utils.getDocumentLevel=g.getDocumentLevel=function(){var b=a.getConfig("documentLevel");if(b){if(0>b.indexOf("."))return window[b]||document;b=b.split(".");return window[b[0]][b[1]]||document}return document};a.utils.getLocation=g.getLocation=function(){return g.getDocumentLevel().location.href};a.utils.getHostName=g.getHostName=function(){return g.getDocumentLevel().location.hostname};a.dispatchIndex={};a.dispatchStack=[];
a.dispatchEventFor={};var d=0;a.dispatchSubscribe=function(b){return a.dispatchIndex[b]?!1:(a.dispatchStack.push(b),a.dispatchIndex[b]=!0)};a.dispatchSubscribed=function(b){return!0===a.dispatchIndex[b]};a.addSpecificDispatchEventFor=function(b){return a.dispatchEventFor[b]?!1:(a.dispatchEventFor[b]=!0,d++,!0)};a.processSpecificDispatchEventFor=function(b){a.dispatchEventFor[b]&&(a.dispatchEventFor[b]=!1,d--,0===d&&(a.dispatchEventFor={},a.emit("Tracker:Plugin:SpecificEvent:Exec:Complete",{lvl:"INFO"})))};
a.dispatch=function(b,c){var g=function(){for(var d="",f=null;0<a.dispatchStack.length;)d=a.dispatchStack.pop(),0===a.dispatchStack.length&&(f=b),a[d].onDispatch(f,c);a.dispatchIndex={};a.delContext(void 0,"customObject")},k=function(){if(a.plugins.isExecWaitingLazyloading())a.onTrigger("Tracker:Plugin:Lazyload:Exec:Complete",function(){g()},!0);else g()};if(0===d)k();else a.onTrigger("Tracker:Plugin:SpecificEvent:Exec:Complete",function(){k()},!0)};a.dispatchRedirect=function(b){var c=!0,d="",g=
null;b&&(g=null,b.hasOwnProperty("event")&&(g=b.event||window.event),!ATInternet.Utils.isTabOpeningAction(g)&&b.elem&&a.plugins.exec("TechClicks","manageClick",[b.elem,g],function(a){c=a.preservePropagation;d=a.elementType}),g=b.callback);a.dispatch(g,d);return c};a.manageSend=function(b){if(!ATInternet.Utils.isPreview()||a.getConfig("preview"))ATInternet.Utils.isPrerender(function(a){b(a)})||b()};a.processTagObject=function(b,c,d){if((b=a.getParam(b,!0))&&b._options.permanent){for(var g=!1,e=b._options.hitType||
[],f=0;f<e.length;f++)if(-1!==ATInternet.Utils.arrayIndexOf(c.concat("all"),e[f])){g=!0;break}g&&(d=ATInternet.Utils.completeFstLevelObj(b._value||{},d,!0))}return d};a.processContextObjectAndSendHit=function(b,c,d,g){var e={hitType:c.hitType,encode:c.encode,separator:c.separator,truncate:c.truncate},f=a.getParam(b,!0);if(f){for(var k=!1,n=f._options.hitType||[],p=0;p<n.length;p++)if(-1!==ATInternet.Utils.arrayIndexOf(c.hitType.concat("all"),n[p])){k=!0;break}k?(k=ATInternet.Utils.cloneSimpleObject(f),
k._value=ATInternet.Utils.completeFstLevelObj(k._value||{},d,!0),a.setParam(b,k._value,e),a.manageSend(function(){a.sendHit(null,[["hitType",c.hitType]],g,c.requestMethod,c.elementType)}),f._options.permanent&&a.setParam(b,f._value,f._options)):(a.setParam(b,d,e),a.manageSend(function(){a.sendHit(null,[["hitType",c.hitType]],g,c.requestMethod,c.elementType)}),a.setParam(b,f._value,f._options))}else a.setParam(b,d,e),a.manageSend(function(){a.sendHit(null,[["hitType",c.hitType]],g,c.requestMethod,
c.elementType)})}};ATInternet.Tracker.addPlugin("Utils");
}).call(window);(function(){var dfltPluginCfg={"clicksAutoManagementEnabled":true,"clicksAutoManagementTimeout":500};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.TechClicks=function(a){var g=this,k=["Tracker:Hit:Sent:Ok","Tracker:Hit:Sent:Error","Tracker:Hit:Sent:NoTrack"],d,b,c=!1;a.configPlugin("TechClicks",dfltPluginCfg||{},function(a){d=a.clicksAutoManagementEnabled;b=a.clicksAutoManagementTimeout});var h=function(a){if(!c)switch(c=!0,a.target){case "_top":window.top.location.href=a.url;break;case "_parent":window.parent.location.href=a.url;break;default:window.location.href=a.url}},m=function(a){a.mailto?g.timeout=setTimeout(function(){window.location.href=
a.mailto},a.timeout):a.form?g.timeout=setTimeout(function(){a.form.submit()},a.timeout):a.url&&(g.timeout=setTimeout(function(){h({url:a.url,target:a.target})},a.timeout))},e=function(b){for(var c=0;c<k.length;c++)a.onTrigger(k[c],function(a,c){b&&b(c)})},f=function(a){for(var c,d="_self";a;){if(a.href&&0===a.href.indexOf("http")){c=a.href.split('"').join('\\"');d=a.target?a.target:d;break}a=a.parentNode}c&&(e(function(a){a.details.isMultiHit||a.details.elementType!==ATInternet.Utils.CLICKS_REDIRECTION||
(g.timeout&&clearTimeout(g.timeout),h({url:c,target:d}))}),m({url:c,target:d,timeout:b}))},q=function(a){for(var c=a;c&&"FORM"!==c.nodeName;)c=c.parentNode;c&&(e(function(a){a.details.isMultiHit||a.details.elementType!==ATInternet.Utils.CLICKS_FORM||(g.timeout&&clearTimeout(g.timeout),c.submit())}),m({form:c,timeout:b}))},n=function(a){for(var c=a;c&&!(c.href&&0<=c.href.indexOf("mailto:"));)c=c.parentNode;c&&(e(function(a){a.details.isMultiHit||a.details.elementType!==ATInternet.Utils.CLICKS_MAILTO||
(g.timeout&&clearTimeout(g.timeout),window.location.href=c.href)}),m({mailto:c.href,timeout:b}))},p=function(a){for(var b=a;b;){if(b.href){if(0<=b.href.indexOf("mailto:"))return ATInternet.Utils.CLICKS_MAILTO;if(0===b.href.indexOf("http"))return ATInternet.Utils.CLICKS_REDIRECTION}else if("FORM"===b.nodeName){var c=a;a=!1;c&&(b=c.tagName||"",b=b.toLowerCase(),"form"===b?a=!0:(c=c.getAttribute("type")||"",c=c.toLowerCase(),"button"===b?"reset"!==c&&"button"!==c&&(a=!0):"input"===b&&"submit"===c&&(a=
!0)));if(a)return ATInternet.Utils.CLICKS_FORM;break}b=b.parentNode}return""};g.isFormSubmit=function(a){for(;a;){if("FORM"===a.nodeName)return!0;a=a.parentNode}return!1};a.techClicks={};a.techClicks.manageClick=g.manageClick=function(a,b){var c=!0,e="";if(d&&a){var g;a:{for(e=a;e;){if("function"===typeof e.getAttribute&&("_blank"===e.getAttribute("target")||"no"===e.getAttribute("data-atclickmanagement"))){g=!0;break a}e=e.parentNode}e=a;g=window.location.href;for(var h;e;){if((h=e.href)&&0<=h.indexOf("#")&&
g.substring(0,0<=g.indexOf("#")?g.indexOf("#"):g.length)===h.substring(0,h.indexOf("#"))){g=!0;break a}e=e.parentNode}g=!1}e=p(a);if(!g&&e){switch(e){case ATInternet.Utils.CLICKS_MAILTO:n(a);c=!1;break;case ATInternet.Utils.CLICKS_FORM:q(a);c=!1;break;case ATInternet.Utils.CLICKS_REDIRECTION:f(a),c=!1}b&&(g=b.defaultPrevented,"function"===typeof b.isDefaultPrevented&&(g=b.isDefaultPrevented()),g||b.preventDefault&&b.preventDefault())}}return{preservePropagation:c,elementType:e}};a.techClicks.deactivateAutoManagement=
function(){d=!1}};ATInternet.Tracker.addPlugin("TechClicks");
}).call(window);(function(){var dfltPluginCfg={"requestMethod":"POST"};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.Clicks=function(a){var g={};a.configPlugin("Clicks",dfltPluginCfg||{},function(a){g=a});var k=function(a){var b="";switch(a){case "exit":b="S";break;case "download":b="T";break;case "action":b="A";break;case "navigation":b="N"}return b},d=function(b){return a.utils.manageChapters(b,"chapter",3)+(b.name?b.name:"")},b=function(b,h){var m={p:d(b),s2:b.level2||"",click:k(b.type)||""},e=["click"],f=a.getContext("page")||{};m.pclick=d(f);m.s2click=f.level2||"";if(f=b.customObject)f=
a.processTagObject("stc",e,f),m.stc={_value:ATInternet.Utils.jsonSerialize(f),_options:{hitType:e,encode:!0,separator:",",truncate:!0}};a.sendHit(m,[["hitType",e]],b.callback,g.requestMethod,h)};a.click={};a.clickListener={};a.click.send=function(c){c=c||{};var d=!0,m="",e=null;c.hasOwnProperty("event")&&(e=c.event||window.event);!c.elem||"POST"===g.requestMethod&&ATInternet.Utils.isBeaconMethodAvailable()||ATInternet.Utils.isTabOpeningAction(e)||(m=a.techClicks.manageClick(c.elem,e),d=m.preservePropagation,
m=m.elementType);b(c,m);return d};a.clickListener.send=function(c){c=c||{};if(c.elem){var d="click",m="";a.plugins.exec("TechClicks","isFormSubmit",[c.elem],function(a){d=a?"submit":"click"});ATInternet.Utils.addEvtListener(c.elem,d,function(e){"POST"===g.requestMethod&&ATInternet.Utils.isBeaconMethodAvailable()||ATInternet.Utils.isTabOpeningAction(e)||(m=a.techClicks.manageClick(c.elem,e).elementType);b(c,m)})}};a.click.set=function(b){b=b||{};a.dispatchSubscribe("click");a.setContext("click",{name:d(b),
level2:b.level2||"",customObject:b.customObject});a.setParam("click",k(b.type)||"",{hitType:["click"]})};a.click.onDispatch=function(b,h){var m=["click"],e=a.getContext("click")||{},f=a.getContext("page")||{};a.setParam("pclick",d(f),{hitType:m});a.setParam("s2click",f.level2||"",{hitType:m});a.setParam("p",e.name,{hitType:m});a.setParam("s2",e.level2,{hitType:m});(e=e.customObject)?a.processContextObjectAndSendHit("stc",{hitType:m,encode:!0,separator:",",truncate:!0,requestMethod:g.requestMethod,
elementType:h},e,b):a.manageSend(function(){a.sendHit(null,[["hitType",m]],b,g.requestMethod,h)});a.delContext("click")}};ATInternet.Tracker.addPlugin("Clicks");
}).call(window);(function(){var dfltPluginCfg={"clientSideMode":"always","userIdCookieDuration":397,"userIdExpirationMode":"fixed","optOut":"OPT-OUT","userIdStorageName":"atuserid","userIdHitName":"idclient","itpCompliant":false,"baseDomain":""};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.ClientSideUserId=function(a){var g={},k=!1,d=!1,b=null,c=-1;a.configPlugin("ClientSideUserId",dfltPluginCfg||{},function(a){g=a});var h=function(){var b=g.baseDomain;if(!b){var c=a.getConfig("cookieDomain");c&&(b=c,"."===b.charAt(0)&&(b=b.substring(1,b.length)))}var c=a.builder.getCollectDomain(),f=a.utils.getHostName();return!!(b&&c&&f&&-1!==c.indexOf(b)&&-1!==f.indexOf(b))},m=function(){b={contextUserId:void 0,storageUserId:null,finalUserId:null,isFromTrackerContext:!1,
forceStorage:!1,optout:{isOptedout:!1,fromStorage:!1}}},e=function(){if("relative"===g.userIdExpirationMode||"fixed"===g.userIdExpirationMode&&null===b.storageUserId||b.isFromTrackerContext){var c=new Date;c.setTime(c.getTime()+864E5*g.userIdCookieDuration);a.storage.set(g.userIdStorageName,b.finalUserId,{end:c,path:"/"},b.forceStorage);ATInternet.Utils.consent&&!b.isFromTrackerContext&&b.finalUserId!==a.storage.get(g.userIdStorageName,!0)&&a.setParam(g.userIdHitName,b.finalUserId+"-NO",{multihit:!0,
permanent:!0,hitType:["all"]})}},f=function(){a.setParam(g.userIdHitName,b.finalUserId,{multihit:!0,permanent:!0,hitType:["all"]});e()},q=function(){m();var c=!1;null===ATInternet.Utils.optedOut?a.storage.get(g.userIdStorageName,!0)===g.optOut?c=ATInternet.Utils.optedOut=!0:ATInternet.Utils.optedOut=!1:!1===ATInternet.Utils.optedOut&&(a.getParam(g.userIdHitName)===g.optOut&&a.delParam(g.userIdHitName),a.storage.get(g.userIdStorageName,!0)===g.optOut&&a.storage.del(g.userIdStorageName));b.optout.isOptedout=
ATInternet.Utils.optedOut;b.optout.fromStorage=c;b.contextUserId=a.getContext("userIdentifier");b.storageUserId=a.storage.get("atuserid",!0);c=!1;if("required"===g.clientSideMode){var e="";window.navigator&&(e=window.navigator.userAgent);if(/Safari/.test(e)&&!/Chrome/.test(e)||/iPhone|iPod|iPad/.test(e))c=!0}else"always"===g.clientSideMode&&(c=!0);d=c;c=!1;if(!a.getConfig("forceHttp")&&g.itpCompliant&&"undefined"===typeof b.contextUserId&&!b.optout.isOptedout)switch(g.clientSideMode){case "never":c=
h();break;case "always":case "required":d&&null!==b.storageUserId||(c=h())}(k=c)||!d&&!b.optout.isOptedout&&"undefined"===typeof b.contextUserId?a.setConfig("userIdOrigin","server"):(a.setConfig("userIdOrigin","client"),b.isFromTrackerContext=!1,b.forceStorage=!1,b.optout.isOptedout?(b.finalUserId=g.optOut,b.isFromTrackerContext=!b.optout.fromStorage,b.forceStorage=!0):a.getConfig("disableCookie")||a.getConfig("disableStorage")?(b.finalUserId=a.getParam(g.userIdHitName),b.isFromTrackerContext=!0):
"undefined"!==typeof b.contextUserId?(b.finalUserId=b.contextUserId,b.isFromTrackerContext=!0):b.finalUserId=null!==b.storageUserId?b.storageUserId:ATInternet.Utils.uuid().v4(),f())},n=function(a){a&&(a=a.detail)&&"clientsideuserid"===a.name&&a.id===c&&q()};(function(){a.plugins.waitForDependencies(["Storage","Utils"],function(){var a=ATInternet.Utils.uuid();c=parseInt(a.num(8));ATInternet.Utils.removeOptOutEvent(n);ATInternet.Utils.addOptOutEvent(c,n);q()})})();a.clientSideUserId={};a.clientSideUserId.set=
function(a){b.optout.isOptedout||(b.finalUserId=a,b.isFromTrackerContext=!0,b.forceStorage=!1,f())};a.clientSideUserId.store=function(){b.finalUserId=a.getParam(g.userIdHitName)||b.finalUserId;null!==b.finalUserId&&b.finalUserId!==ATInternet.Utils.privacy.CONSENTNO&&b.finalUserId!==b.storageUserId&&(b.isFromTrackerContext=!0,b.forceStorage=!0,e())};a.clientSideUserId.get=function(){b.finalUserId=a.getParam(g.userIdHitName)||b.finalUserId;return b.finalUserId};a.clientSideUserId.clear=function(){m();
a.delParam(g.userIdHitName);a.storage.del(g.userIdStorageName)}};ATInternet.Tracker.addPlugin("ClientSideUserId");
}).call(window);(function(){var dfltPluginCfg={"domainAttribution":true};var dfltGlobalCfg={"redirectionLifetime":30};ATInternet.Tracker.Plugins.ContextVariables=function(a){var g="",k=null,d,b="",c="",h={};a.configPlugin("ContextVariables",dfltPluginCfg||{},function(a){h=a});a.setConfig("redirectionLifetime",dfltGlobalCfg.redirectionLifetime,!0);var m=function(b,c){var f=null;a.plugins.exec("Storage",b,c,function(a){f=a});return f},e=function(){a.setParam("vtag",a.version,{permanent:!0,hitType:["all"]})},f=function(){a.setParam("ptag","js",{permanent:!0,hitType:["all"]})},q=function(){var b="";try{b+=window.screen.width+
"x"+window.screen.height+"x"+window.screen.pixelDepth+"x"+window.screen.colorDepth}catch(c){}a.setParam("r",b,{permanent:!0,hitType:["all"]})},n=function(){var b="";window.innerWidth?b+=window.innerWidth+"x"+window.innerHeight:document.body&&document.body.offsetWidth&&(b+=document.body.offsetWidth+"x"+document.body.offsetHeight);a.setParam("re",b,{permanent:!0,hitType:["all"]})},p=function(){window.navigator&&a.setParam("lng",window.navigator.language||window.navigator.userLanguage,{permanent:!0,
hitType:["all"]})},l=function(){var b=ATInternet.Utils.uuid().num(13);a.setParam("idp",b,{permanent:!0,hitType:["page","clickzone"]})},s=function(){window.navigator&&a.setParam("jv",window.navigator.javaEnabled()?"1":"0",{hitType:["page"]})},t=function(){a.setParam("hl",function(){var a=new Date;return a.getHours()+"x"+a.getMinutes()+"x"+a.getSeconds()},{permanent:!0,hitType:["all"]})},r=function(a){(a=d?d:"acc_dir"===g?"":null!==g?g:"acc_dir"===k?"":k?k:a?a.referrer:"")&&(a=a.replace(/[<>]/g,"").substring(0,
1600).replace(/&/g,"$"));return a},u=function(){var b=a.utils.getDocumentLevel();a.setParam("ref",r(b),{permanent:!0,last:!0,hitType:["page","ecommerce","avinsights","events"]})},v=function(){b="set"+(h.domainAttribution?"":"Private");c="get"+(h.domainAttribution?"":"Private");var r=a.utils.getLocation();g=a.utils.getQueryStringValue("xtref",r);void 0===g&&(g="");d=a.getContext("forcedReferer");if(a.getConfig("redirect")){var r=a.utils.getDocumentLevel(),r=d?d:null!==g?g:r?r.referrer:"acc_dir",v;
if(v=r){v={path:"/",end:a.getConfig("redirectionLifetime")};var C=m(c,["atredir"]);null!==C?v="object"===typeof C&&!(C instanceof Array):(m(b,["atredir",{},v]),v=!0)}v&&m(b,[["atredir","ref"],r])}else k=m(c,[["atredir","ref"]]),m("del",[["atredir","ref"]]),e(),f(),q(),n(),t(),p(),l(),s(),u();a.emit("ContextVariables:Ready",{lvl:"INFO"})};a.contextVariables={};a.contextVariables.params={};a.contextVariables.params.vtag=e;a.contextVariables.params.ptag=f;a.contextVariables.params.r=q;a.contextVariables.params.re=
n;a.contextVariables.params.lng=p;a.contextVariables.params.idp=l;a.contextVariables.params.jv=s;a.contextVariables.params.hl=t;a.contextVariables.params.ref=u;a.contextVariables.setAll=v;a.plugins.waitForDependencies(["Storage","Utils"],v)};ATInternet.Tracker.addPlugin("ContextVariables");
}).call(window);(function(){var dfltPluginCfg={};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.Page=function(a){var g=["pageId","chapterLabel","update"],k=["pid","pchap","pidt"],d=["page","site"],b=["f","x"],c=function(b){return a.utils.manageChapters(b,"chapter",3)+(b.name?b.name:"")},h=function(a,b,c){b?a=b:a||"undefined"===typeof c||(a=c);return a},m=function(a,b,c){b.hasOwnProperty(c)&&(a[c]=h(a[c],b[c],void 0))},e=function(c,f,e){if(f)for(var g=0;g<d.length;g++)if(f.hasOwnProperty(d[g])&&f[d[g]])for(var h in f[d[g]])f[d[g]].hasOwnProperty(h)&&(e?c[b[g]+h]=f[d[g]][h]:
a.setParam(b[g]+h,f[d[g]][h]))},f=function(b,c,d){if(c){var f=a.utils.manageChapters(c,"chapter",3);f&&(c.chapterLabel=f.replace(/::$/gi,""));for(f=0;f<k.length;f++)c.hasOwnProperty(g[f])&&(d?b[k[f]]=c[g[f]]:a.setParam(k[f],c[g[f]]))}},q=function(b,c,f){if(c&&c.keywords instanceof Array){var d=c.keywords.length;if(0<d){for(var e="",g=0;g<d;g++)e+="["+c.keywords[g]+"]"+(g<d-1?"|":"");f?b.tag=e:a.setParam("tag",e)}}},n=function(b,c,d){if(c){var f,e=function(a){return a?a:"0"};f=""+(e(c.category1)+"-");
f+=e(c.category2)+"-";f+=e(c.category3);d?b.ptype=f:a.setParam("ptype",f)}},p=function(b,c,f){if(c)for(var d in c)c.hasOwnProperty(d)&&"undefined"!==typeof c[d]&&(f?b[d]=c[d]:a.setParam(d,c[d]))};a.customVars={};a.customVars.set=function(b){var c=a.getContext("page")||{},f=c.customVars;if(f){if(b)for(var d in b)b.hasOwnProperty(d)&&(f[d]=ATInternet.Utils.completeFstLevelObj(f[d],b[d],!0))}else f=b;c.customVars=f;a.setContext("page",c)};a.dynamicLabel={};a.dynamicLabel.set=function(b){var c=a.getContext("page")||
{};c.dynamicLabel=ATInternet.Utils.completeFstLevelObj(c.dynamicLabel,b,!0);a.setContext("page",c)};a.tags={};a.tags.set=function(b){var c=a.getContext("page")||{};c.tags=ATInternet.Utils.completeFstLevelObj(c.tags,b,!0);a.setContext("page",c)};a.customTreeStructure={};a.customTreeStructure.set=function(b){var c=a.getContext("page")||{};c.customTreeStructure=ATInternet.Utils.completeFstLevelObj(c.customTreeStructure,b,!0);a.setContext("page",c)};a.page={};a.page.reset=function(){a.delContext("page")};
a.page.set=function(b){b=b||{};a.dispatchSubscribe("page");var c=a.getContext("page")||{};c.name=h(c.name,b.name,"");c.level2=h(c.level2,b.level2,"");m(c,b,"chapter1");m(c,b,"chapter2");m(c,b,"chapter3");c.customObject=ATInternet.Utils.completeFstLevelObj(c.customObject,b.customObject,!0);a.setContext("page",c)};a.page.send=function(b){b=b||{};var d=!0,g="",r={p:c(b),s2:b.level2||""},k=b.customObject;if(k){var v=["page"],k=a.processTagObject("stc",v,k);r.stc={_value:ATInternet.Utils.jsonSerialize(k),
_options:{hitType:v,encode:!0,separator:",",truncate:!0}}}k=a.getContext("page")||{};k.vrn&&(r.vrn=k.vrn,a.delContext("page","vrn"));v=a.getContext("InternalSearch")||{};"undefined"!==typeof v.keyword&&(r.mc=ATInternet.Utils.cloneSimpleObject(v.keyword),"undefined"!==typeof v.resultPageNumber&&(r.np=ATInternet.Utils.cloneSimpleObject(v.resultPageNumber)),a.delContext("InternalSearch"));ATInternet.Utils.isPreview()&&a.getConfig("preview")&&(r.pvw=1);e(r,b.customVars,!0);f(r,b.dynamicLabel,!0);q(r,
b.tags,!0);n(r,b.customTreeStructure,!0);v=a.getContext("campaigns")||{};p(r,v,!0);a.delContext("campaigns");v=null;b&&b.hasOwnProperty("event")&&(v=b.event||window.event);!ATInternet.Utils.isTabOpeningAction(v)&&b.elem&&(v=a.techClicks.manageClick(b.elem,v),d=v.preservePropagation,g=v.elementType);a.manageSend(function(){a.sendHit(r,null,b.callback,null,g)});k.name=h(k.name,b.name,"");k.level2=h(k.level2,b.level2,"");m(k,b,"chapter1");m(k,b,"chapter2");m(k,b,"chapter3");a.setContext("page",k);return d};
a.page.onDispatch=function(b,d){var g=a.getContext("page")||{},h=a.getContext("InternalSearch")||{};a.setParam("p",c(g));a.setParam("s2",g.level2||"");g.vrn&&(a.setParam("vrn",g.vrn),a.delContext("page","vrn"));"undefined"!==typeof h.keyword&&(a.setParam("mc",ATInternet.Utils.cloneSimpleObject(h.keyword)),"undefined"!==typeof h.resultPageNumber&&a.setParam("np",ATInternet.Utils.cloneSimpleObject(h.resultPageNumber)),a.delContext("InternalSearch"));ATInternet.Utils.isPreview()&&a.getConfig("preview")&&
a.setParam("pvw",1);e(null,g.customVars,!1);f(null,g.dynamicLabel,!1);q(null,g.tags,!1);n(null,g.customTreeStructure,!1);h=a.getContext("campaigns")||{};p(null,h,!1);a.delContext("campaigns");var k=["page"];(g=g.customObject)?a.processContextObjectAndSendHit("stc",{hitType:k,encode:!0,separator:",",truncate:!0,elementType:d},g,b):a.manageSend(function(){a.sendHit(null,[["hitType",k]],b,null,d)})}};ATInternet.Tracker.addPlugin("Page");
}).call(window);(function(){var dfltPluginCfg={"minHeartbeat":5,"minBufferingHeartbeat":1};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.AvInsights=function(a){var g=null,k=function(){this.debugError={trigger:"AvInsights:Media:setContentValues:Error",level:"ERROR",messageObject:"Not an object"};this.processHeartbeatValue=function(a,b){var c=parseInt(a,10);return c?Math.max(c,b):0};this.value2Number=function(a){var b=0;isNaN(Number(a))||(b=Number(a));return Math.max(b,0)}};a.avInsights={};a.avInsights.Media=function(d,b,c){var h=this,m=new k,e=null,f=null,q=null,n=function(a){a?e.delayBufferingConfiguration=
ATInternet.Utils.cloneSimpleObject(e.delayBufferingConfigurationBackup):e.delayConfiguration=ATInternet.Utils.cloneSimpleObject(e.delayConfigurationBackup)},p=function(a){(a?e.delayBufferingConfiguration:e.delayConfiguration).sort(function(a,b){return a.delay<b.delay?-1:a.delay>b.delay?1:0})},l=function(a){var b;a=a?e.delayBufferingConfiguration:e.delayConfiguration;"undefined"!==typeof a[1]&&(b=a[1].delay);"undefined"===typeof b?a[0].number=1:0<a[0].number?a[0].number--:"number"===typeof b&&(a[0].number=
Math.floor(60*(b-a[0].delay)/a[0].refresh)-1)},s=function(a,b){if(b){a?(e.delayBufferingConfiguration=[],e.delayBufferingConfigurationBackup=[]):(e.delayConfiguration=[],e.delayConfigurationBackup=[]);for(var c in b)b.hasOwnProperty(c)&&(a?e.delayBufferingConfiguration.push({delay:m.processHeartbeatValue(c,0),number:0,timeout:-1,refresh:m.processHeartbeatValue(b[c],g.minBufferingHeartbeat)}):e.delayConfiguration.push({delay:m.processHeartbeatValue(c,0),number:0,timeout:-1,refresh:m.processHeartbeatValue(b[c],
g.minHeartbeat)}));p(a);a?e.delayBufferingConfigurationBackup=ATInternet.Utils.cloneSimpleObject(e.delayBufferingConfiguration):e.delayConfigurationBackup=ATInternet.Utils.cloneSimpleObject(e.delayConfiguration)}},t=function(b,c,f,d){var h=ATInternet.Utils.cloneSimpleObject(q);h.av_session_id={};h.av_session_id[ATInternet.Utils.ATVALUE]=e.sessionId;h.av_session_id[ATInternet.Utils.ATPREFIX]="";c&&(h.av_previous_position={},h.av_previous_position[ATInternet.Utils.ATVALUE]=e.previousCursorPosition,
h.av_previous_position[ATInternet.Utils.ATPREFIX]="",h.av_position={},h.av_position[ATInternet.Utils.ATVALUE]=e.currentCursorPosition,h.av_position[ATInternet.Utils.ATPREFIX]="",h.av_duration={},h.av_duration[ATInternet.Utils.ATVALUE]=e.eventDuration,h.av_duration[ATInternet.Utils.ATPREFIX]="",h.av_previous_event={},h.av_previous_event[ATInternet.Utils.ATVALUE]=e.previousEvent,h.av_previous_event[ATInternet.Utils.ATPREFIX]="",e.previousEvent=b);ATInternet.Utils.isObject(d)&&ATInternet.Utils.object2Flatten(d,
null,h,null,!0);c={};for(var l in h)h.hasOwnProperty(l)&&ATInternet.Utils.flatten2Object(c,l,h[l]);h=ATInternet.Utils.getFormattedObject(c);a.event.send(b,h,{origin:"avinsights",callback:f})},r=function(){var a=0,b=0;this.getEventDuration=function(){var c=(new Date).getTime()-a-b;b+=c;return c};this.initBaseTime=function(){0===a&&(a=(new Date).getTime())};this.resetProperties=function(){b=a=0};this.initHeartbeatTimer=function(a,b){var c=b?e.delayBufferingConfiguration:e.delayConfiguration;0<c.length&&
(l(b),window.clearTimeout(c[0].timeout),c[0].timeout=window.setTimeout(function(){0===c[0].number&&c.splice(0,1);a&&a()},1E3*c[0].refresh))};this.stopHeartbeatTimer=function(a){a=a?e.delayBufferingConfiguration:e.delayConfiguration;for(var b=0;b<a.length;b++)window.clearTimeout(a[b].timeout),a[b].timeout=-1}};h.set=function(a,b){var c=ATInternet.Utils.splitProtocolAndKey(a,!0);q[c.key]=q[c.key]||{};q[c.key][ATInternet.Utils.ATVALUE]=b;q[c.key][ATInternet.Utils.ATPREFIX]=c.prefix};h.get=function(a){var b=
null;a=ATInternet.Utils.splitProtocolAndKey(a,!0);"undefined"!==typeof q[a.key]&&(b=q[a.key][ATInternet.Utils.ATVALUE]);return b};h.del=function(a){a=ATInternet.Utils.splitProtocolAndKey(a,!0);"undefined"!==typeof q[a.key]&&delete q[a.key]};h.setProps=function(a){ATInternet.Utils.isObject(a)&&ATInternet.Utils.object2Flatten(a,null,q,null,!0)};h.getProps=function(){var a=null,b;for(b in q)q.hasOwnProperty(b)&&(a=a||{},a[b]=q[b][ATInternet.Utils.ATVALUE]);return a};h.delProps=function(){q={}};var u=
function(a,b,c,d,h){f.initBaseTime();e.eventDuration=f.getEventDuration();e.previousCursorPosition=e.currentCursorPosition;e.currentCursorPosition=a?e.previousCursorPosition+Math.floor(e.playbackSpeed*e.eventDuration):c;b&&f.initHeartbeatTimer(function(){u(!0,!0)},!1);t("av.heartbeat",!0,d,h)},v=function(a,b,c){f.initBaseTime();e.eventDuration=f.getEventDuration();a&&f.initHeartbeatTimer(function(){v(!0)},!0);t("av.buffer.heartbeat",!0,b,c)},z=function(a,b,c){f.initBaseTime();e.eventDuration=f.getEventDuration();
e.previousCursorPosition=e.currentCursorPosition;a&&f.initHeartbeatTimer(function(){z(!0)},!0);t("av.rebuffer.heartbeat",!0,b,c)};h.setPlaybackSpeed=function(a){a=m.value2Number(a)||e.playbackSpeed;a!==e.playbackSpeed&&(f.stopHeartbeatTimer(!1),e.isPlaying&&(u(!0,!1),f.initHeartbeatTimer(function(){u(!0,!0)},!1)),e.playbackSpeed=a)};h.getSessionID=function(){return e.sessionId};h.track=function(a,b,c,f){b=b||{};switch(a){case "av.heartbeat":h.heartbeat(b.av_position,c,f);break;case "av.buffer.heartbeat":h.bufferHeartbeat(c,
f);break;case "av.rebuffer.heartbeat":h.rebufferHeartbeat(c,f);break;case "av.play":h.play(b.av_position,c,f);break;case "av.buffer.start":h.bufferStart(b.av_position,c,f);break;case "av.start":h.playbackStart(b.av_position,c,f);break;case "av.resume":h.playbackResumed(b.av_position,c,f);break;case "av.pause":h.playbackPaused(b.av_position,c,f);break;case "av.stop":h.playbackStopped(b.av_position,c,f);break;case "av.backward":h.seekBackward(b.av_previous_position,b.av_position,c,f);break;case "av.forward":h.seekForward(b.av_previous_position,
b.av_position,c,f);break;case "av.seek.start":h.seekStart(b.av_previous_position,c,f);break;case "av.error":h.error(b.av_player_error,c,f);break;default:t(a,!1,c,f)}};h.heartbeat=function(a,b,c){var f=!0,e;"undefined"!==typeof a&&null!==a&&0<=a&&(f=!1,e=m.value2Number(a));u(f,!1,e,b,c)};h.bufferHeartbeat=function(a,b){v(!1,a,b)};h.rebufferHeartbeat=function(a,b){z(!1,a,b)};h.play=function(a,b,c){f.initBaseTime();a=m.value2Number(a);e.eventDuration=0;e.previousCursorPosition=a;e.currentCursorPosition=
a;e.isPlaying=!1;e.isPlaybackActivated=!1;f.stopHeartbeatTimer(!1);f.stopHeartbeatTimer(!0);t("av.play",!0,b,c)};h.bufferStart=function(a,b,c){f.initBaseTime();a=m.value2Number(a);e.eventDuration=f.getEventDuration();e.previousCursorPosition=e.currentCursorPosition;e.currentCursorPosition=a;f.stopHeartbeatTimer(!1);f.stopHeartbeatTimer(!0);e.isPlaybackActivated?(f.initHeartbeatTimer(function(){z(!0)},!0),t("av.rebuffer.start",!0,b,c)):(f.initHeartbeatTimer(function(){v(!0)},!0),t("av.buffer.start",
!0,b,c))};h.playbackStart=function(a,b,c){f.initBaseTime();a=m.value2Number(a);e.eventDuration=f.getEventDuration();e.previousCursorPosition=a;e.currentCursorPosition=a;e.isPlaying=!0;e.isPlaybackActivated=!0;f.stopHeartbeatTimer(!1);f.stopHeartbeatTimer(!0);f.initHeartbeatTimer(function(){u(!0,!0)},!1);t("av.start",!0,b,c)};h.playbackResumed=function(a,b,c){f.initBaseTime();a=m.value2Number(a);e.eventDuration=f.getEventDuration();e.previousCursorPosition=e.currentCursorPosition;e.currentCursorPosition=
a;e.isPlaying=!0;e.isPlaybackActivated=!0;f.stopHeartbeatTimer(!1);f.stopHeartbeatTimer(!0);f.initHeartbeatTimer(function(){u(!0,!0)},!1);t("av.resume",!0,b,c)};h.playbackPaused=function(a,b,c){f.initBaseTime();a=m.value2Number(a);e.eventDuration=f.getEventDuration();e.previousCursorPosition=e.currentCursorPosition;e.currentCursorPosition=a;e.isPlaying=!1;e.isPlaybackActivated=!0;f.stopHeartbeatTimer(!1);f.stopHeartbeatTimer(!0);t("av.pause",!0,b,c)};h.playbackStopped=function(a,b,c){f.initBaseTime();
a=m.value2Number(a);e.eventDuration=f.getEventDuration();e.previousCursorPosition=e.currentCursorPosition;e.currentCursorPosition=a;e.isPlaying=!1;e.isPlaybackActivated=!1;f.stopHeartbeatTimer(!1);f.stopHeartbeatTimer(!0);f.resetProperties();n(!1);n(!0);t("av.stop",!0,b,c);e.previousCursorPosition=0;e.currentCursorPosition=0;e.eventDuration=0;e.previousEvent="";e.sessionId=ATInternet.Utils.uuid().v4()};h.seek=function(a,b,c,f){a=m.value2Number(a);b=m.value2Number(b);a>b?h.seekBackward(a,b,c,f):h.seekForward(a,
b,c,f)};h.seekBackward=function(a,b,c,f){h.seekStart(a,null,f);e.eventDuration=0;e.previousCursorPosition=m.value2Number(a);e.currentCursorPosition=m.value2Number(b);t("av.backward",!0,c,f)};h.seekForward=function(a,b,c,f){h.seekStart(a,null,f);e.eventDuration=0;e.previousCursorPosition=m.value2Number(a);e.currentCursorPosition=m.value2Number(b);t("av.forward",!0,c,f)};h.seekStart=function(a,b,c){a=m.value2Number(a);e.previousCursorPosition=e.currentCursorPosition;e.currentCursorPosition=a;e.eventDuration=
e.isPlaying?f.getEventDuration():0;t("av.seek.start",!0,b,c)};h.adClick=function(a,b){t("av.ad.click",!1,a,b)};h.adSkip=function(a,b){t("av.ad.skip",!1,a,b)};h.error=function(a,b,c){var f={};ATInternet.Utils.isObject(c)&&(f=c);f.av_player_error=String(a);t("av.error",!1,b,f)};h.display=function(a,b){t("av.display",!1,a,b)};h.close=function(a,b){t("av.close",!1,a,b)};h.volume=function(a,b){t("av.volume",!1,a,b)};h.subtitleOn=function(a,b){t("av.subtitle.on",!1,a,b)};h.subtitleOff=function(a,b){t("av.subtitle.off",
!1,a,b)};h.fullscreenOn=function(a,b){t("av.fullscreen.on",!1,a,b)};h.fullscreenOff=function(a,b){t("av.fullscreen.off",!1,a,b)};h.quality=function(a,b){t("av.quality",!1,a,b)};h.speed=function(a,b){t("av.speed",!1,a,b)};h.share=function(a,b){t("av.share",!1,a,b)};e={previousCursorPosition:0,currentCursorPosition:0,eventDuration:0,playbackSpeed:1,previousEvent:"",isPlaybackActivated:!1,isPlaying:!1,sessionId:"",delayConfiguration:[],delayConfigurationBackup:[],delayBufferingConfiguration:[],delayBufferingConfigurationBackup:[]};
(function(){var a=b?{0:1,1:10,5:20,15:30,30:60}:null;s(!1,d?{0:5,1:10,5:20,15:30,30:60}:null);s(!0,a)})();e.sessionId=c||ATInternet.Utils.uuid().v4();(function(){f=new r;ATInternet.Utils.addEvtListener(window,"unload",function(){f.stopHeartbeatTimer(!1);f.stopHeartbeatTimer(!0)})})();q={}};(function(){a.plugins.waitForDependencies(["EventRoot"],function(){a.configPlugin("AvInsights",dfltPluginCfg||{},function(a){g=a})})})()};ATInternet.Tracker.addPlugin("AvInsights");
}).call(window);(function(){var dfltPluginCfg={"hitParameter":"col","hitValue":"2"};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.EventRoot=function(a){var g={},k=function(a){for(var b=[],c,d=0;d<a.length;d++)for(var g in a[d])a[d].hasOwnProperty(g)&&(c=ATInternet.Utils.isObject(a[d][g])?ATInternet.Utils.objectToLowercase(a[d][g]):a[d][g],b.push({name:g.toLowerCase(),data:c}));return ATInternet.Utils.jsonSerialize(b)},d=function(b,c){var f=c||"event";a.setParam("events",k(b),{hitType:[f],encode:!0,truncate:!0,separator:","})},b=function(b,c){var f="",d={},g={};if("undefined"!==typeof b){d={};b.name&&
(d.$=b.name);for(var g=a.getConfig("ignoreEmptyChapterValue"),h="",l="",k=1;3>=k;k++)if(l="chapter"+k,h=b[l]||"",g&&h||!g&&b.hasOwnProperty(l))d[l]=h;b.url&&(d.url=b.url);g={};"string"===typeof b.level2?(h=ATInternet.Utils.trim(b.level2),0<h.length&&(isNaN(h)?g.level2=h:g.level2_id=Number(h))):"number"===typeof b.level2&&(g.level2_id=b.level2)}h={};ATInternet.Utils.isEmptyObject(d)||(h.page=d);ATInternet.Utils.isEmptyObject(g)||(h.site=g);"undefined"!==typeof c&&(h.src=c);ATInternet.Utils.isEmptyObject(h)||
(f=ATInternet.Utils.jsonSerialize([{data:h}]));return f},c=function(c,d,f){f=f||"event";c=b(c,d);""!==c&&a.setParam("context",c,{truncate:!0,hitType:[f],encode:!0})},h=function(a,b){return a instanceof Array&&b instanceof Array?a.concat(b):ATInternet.Utils.isObject(a)&&ATInternet.Utils.isObject(b)?ATInternet.Utils.completeFstLevelObj(a,b,!0):b};a.event={};a.event.reset=function(b){b=b||"event";a.getContext(b);a.delContext(b)};a.event.send=function(c,d,f){var h=!0,n="",p="event";f&&f.origin&&(p=f.origin);
var l={};l[c]=d;var s={};s[g.hitParameter]={_value:g.hitValue,_options:{multihit:!0}};c=a.getContext("page");d=a.getContext("campaigns_events");if("undefined"!==typeof c||"undefined"!==typeof d)s.context={_value:b(c,d),_options:{truncate:!0,encode:!0}};s.events={_value:k([l]),_options:{encode:!0,truncate:!0,separator:","}};ATInternet.Utils.isPreview()&&a.getConfig("preview")&&(s.pvw=1);l=null;f&&f.hasOwnProperty("event")&&(l=f.event||window.event);!ATInternet.Utils.isTabOpeningAction(l)&&f&&f.elem&&
(l=a.techClicks.manageClick(f.elem,l),h=l.preservePropagation,n=l.elementType);a.manageSend(function(){var b;f&&(b=f.callback);a.sendHit(s,[["hitType",[p]]],b,null,n)});return h};a.event.set=function(b,c,f,d){d=d||"event";a.setParam(g.hitParameter,g.hitValue,{multihit:!0,hitType:[d]});a.dispatchSubscribe(d);for(var k=a.getContext(d)||[],p=!1,l=0;l<k.length;l++)k[l][b]&&(p=!0,f?ATInternet.Utils.isObject(k[l][b])&&(k[l][b][f]=h(k[l][b][f],c)):k[l][b]=h(k[l][b],c));p||(p={},f?(p[b]={},p[b][f]=c):p[b]=
c,k.push(p));a.setContext(d,k)};a.event.add=function(b,c,f){f=f||"event";var d=a.getContext(f)||[],g={};g[b]=c;d.push(g);a.setContext(f,d)};a.event.onDispatch=function(b,e,f){var g=f||"event";f=a.getContext("page");var h=a.getContext("campaigns_events");"undefined"===typeof f&&"undefined"===typeof h||c(f,h,g);f=a.getContext(g);"undefined"!==typeof f&&d(f,g);a.delContext(g);ATInternet.Utils.isPreview()&&a.getConfig("preview")&&a.setParam("pvw",1,{hitType:[g]});a.manageSend(function(){a.sendHit(null,
[["hitType",[g]]],b,null,e)})};(function(){a.plugins.waitForDependencies(["Utils"],function(){a.configPlugin("EventRoot",dfltPluginCfg||{},function(a){g=a})})})()};ATInternet.Tracker.addPlugin("EventRoot");
}).call(window);(function(){var dfltPluginCfg={};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.Events=function(a){var g=function(a){var d={};a=ATInternet.Utils.cloneSimpleObject(a);ATInternet.Utils.object2Flatten(a,null,d,null,!0);a={};for(var b in d)d.hasOwnProperty(b)&&ATInternet.Utils.flatten2Object(a,b,d[b]);return ATInternet.Utils.getFormattedObject(a)};a.events={};a.events.send=function(k,d,b){b=b||{};b.origin="events";var c=d;ATInternet.Utils.isObject(d)&&(c=g(d));a.event.send(k,c,b)};a.events.add=function(k,d){var b=d;ATInternet.Utils.isObject(d)&&(b=g(d));
for(var c=a.getContext("events")||[],h=!1,m=0;m<c.length;m++)if(typeof c[m].hasOwnProperty(k)){h=!0;break}h?a.event.add(k,b,"events"):a.event.set(k,b,null,"events")};a.events.onDispatch=function(g,d){a.event.onDispatch(g,d,"events")}};ATInternet.Tracker.addPlugin("Events");
}).call(window);(function(){var dfltPluginCfg={"urlKeyword":"","urlResultPageNumber":"","urlResultPosition":""};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.InternalSearch=function(a){var g={};a.configPlugin("InternalSearch",dfltPluginCfg||{},function(a){g=a});a.internalSearch={};a.internalSearch.set=function(g){g=g||{};var d={},b=d,c=g;c.hasOwnProperty("keyword")&&(b.keyword=c.keyword);b=d;g.hasOwnProperty("resultPageNumber")&&(b.resultPageNumber=g.resultPageNumber);g=a.getContext("InternalSearch")||{};d=ATInternet.Utils.completeFstLevelObj(d,g);"undefined"===typeof d.resultPageNumber&&(d.resultPageNumber="1");a.setContext("InternalSearch",
d)};a.internalSearch.send=function(g){g=g||{};var d=!0,b="",c=null;g.hasOwnProperty("event")&&(c=g.event||window.event);!ATInternet.Utils.isTabOpeningAction(c)&&g.elem&&(b=a.techClicks.manageClick(g.elem,c),d=b.preservePropagation,b=b.elementType);c={np:"undefined"!==typeof g.resultPageNumber?g.resultPageNumber:"1",click:"IS"};g.hasOwnProperty("keyword")&&(c.mc=g.keyword);g.hasOwnProperty("resultPosition")&&(c.mcrg=g.resultPosition);var h=a.getContext("page")||{};h.level2&&(c.s2=h.level2);a.sendHit(c,
[["hitType",["InternalSearch"]]],g.callback,null,b);return d};a.plugins.waitForDependencies(["Utils"],function(){var k;if(g.urlKeyword){var d=document.location.href;k={};var b=a.utils.getQueryStringValue(g.urlKeyword,d);b&&(k.keyword=b);g.urlResultPageNumber&&(b=a.utils.getQueryStringValue(g.urlResultPageNumber,d),k.resultPageNumber=b||"1")}k&&a.setContext("InternalSearch",k);a.emit("InternalSearch:Ready",{lvl:"INFO",details:{config:{urlKeyword:g.urlKeyword,urlResultPageNumber:g.urlResultPageNumber},
url:d,data:k}})})};ATInternet.Tracker.addPlugin("InternalSearch");
}).call(window);(function(){var dfltPluginCfg={};var dfltGlobalCfg={};ATInternet.Tracker.Plugins.OnSiteAds=function(a){var g=this,k="",d=function(b){return a.utils.manageChapters(b,"chapter",3)+(b.name?b.name:"")},b=function(a,b){return a&&a[b]?a[b]:""},c=function(a,c){var d=b(a,c);if(d){var e=b(a,"prefix");if(d.campaignId){var e=e||"PUB",g=b(d,"campaignId"),h=b(d,"creation"),k=b(d,"variant"),r=b(d,"format"),m=b(d,"generalPlacement"),v=b(d,"detailedPlacement"),z=b(d,"advertiserId"),d=b(d,"url");return e+"-"+g+"-"+h+"-"+k+"-"+r+"-"+m+"-"+v+"-"+z+"-"+d}if(d.adId)return e=
e||"INT",g=b(d,"adId"),h=b(d,"format"),d=b(d,"productId"),e+"-"+g+"-"+h+"||"+d}return""},h=function(b,d){b=b||{};var e=["onSiteAdsImpression"],g={};g.ati={_value:c(b,"impression"),_options:{hitType:e,truncate:!0}};g.type="AT";ATInternet.Utils.isPreview()&&a.getConfig("preview")&&(g.pvw=1);var h=b.customObject;h&&(h=a.processTagObject("stc",e,h),g.stc={_value:ATInternet.Utils.jsonSerialize(h),_options:{hitType:e,encode:!0,separator:",",truncate:!0}});a.manageSend(function(){a.sendHit(g,[["hitType",
e]],b.callback,null,d)})},m=function(b,c){var d=a.buffer.get("ati",!0)||{};d._value="string"===typeof d._value?[d._value]:d._value||[];d._options=d._options||{truncate:!0,hitType:[c,"page"]};d._value.push(b);a.buffer.set("ati",d._value,d._options)},e=function(b,d){b=b||{};b.click?a.setParam("atc",c(b,"click"),{truncate:!0,hitType:[d,"page"]}):b.impression&&a.setParam("ati",c(b,"impression"),{truncate:!0,hitType:[d,"page"]});if(b.customObject){a.setContext("onsiteads",{customObject:b.customObject});
var e=a.getContext("page")||{};e.customObject=ATInternet.Utils.completeFstLevelObj(e.customObject,b.customObject,!1);a.setContext("page",e)}a.dispatchSubscribe("onSiteAds")};a.selfPromotion={};a.publisher={};a.publisher.set=function(a){e(a,"publisher")};a.selfPromotion.set=function(a){e(a,"selfPromotion")};a.publisher.add=function(b){m(c(b,"impression"),"publisher");a.dispatchSubscribe("onSiteAds")};a.selfPromotion.add=function(b){m(c(b,"impression"),"selfPromotion");a.dispatchSubscribe("onSiteAds")};
g.advertEvent=function(b){b=b||{};var e=!0,g="",k=null;b.hasOwnProperty("event")&&(k=b.event||window.event);!ATInternet.Utils.isTabOpeningAction(k)&&b.elem&&(g=a.techClicks.manageClick(b.elem,k),e=g.preservePropagation,g=g.elementType);if(b.click){b=b||{};var k=["onSiteAdsClick"],l=a.getContext("page")||{},s={};s.atc={_value:c(b,"click"),_options:{truncate:!0}};s.type="AT";s.patc=d(l);s.s2atc=l.level2||"";if(l=b.customObject)l=a.processTagObject("stc",k,l),s.stc={_value:ATInternet.Utils.jsonSerialize(l),
_options:{hitType:k,encode:!0,separator:",",truncate:!0}};a.sendHit(s,[["hitType",k]],b.callback,null,g)}else b.impression&&h(b,g);return e};a.publisher.send=function(a){return g.advertEvent(a)};a.selfPromotion.send=function(a){return g.advertEvent(a)};a.onSiteAds={};a.onSiteAds.onDispatch=function(b,c){if(!a.dispatchSubscribed("page")){a.setParam("type","AT",{hitType:["publisher","selfPromotion"]});var e=a.getContext("page")||{};a.getParam("atc")&&(a.setParam("patc",d(e),{hitType:["publisher","selfPromotion"]}),
a.setParam("s2atc",e.level2||"",{hitType:["publisher","selfPromotion"]}));ATInternet.Utils.isPreview()&&a.getConfig("preview")&&a.setParam("pvw",1);var g=["publisher","selfPromotion"];(e=(a.getContext("onsiteads")||{}).customObject)?a.processContextObjectAndSendHit("stc",{hitType:g,encode:!0,separator:",",truncate:!0,elementType:c},e,b):a.manageSend(function(){a.sendHit(null,[["hitType",g]],b,null,c)})}};a.plugins.waitForDependencies(["Utils","TechClicks"],function(){k=document.location.href;var b=
a.utils.getQueryStringValue("xtatc",k);b&&a.setParam("atc",b,{hitType:["publisher","selfPromotion","page"]});a.emit("OnSiteAds:Ready",{lvl:"INFO",details:{href:k}})})};ATInternet.Tracker.addPlugin("OnSiteAds");
}).call(window);(function(){var dfltPluginCfg={};var dfltGlobalCfg={};window.ATInternet.Tracker.Plugins.RichMedia=function(a){var g=function(a,b){var c=parseInt(a,10);return c?Math.max(c,b):0},k=new function(){this.media=function(){this.type=void 0;this.plyr=0;this.clnk=this.s2=void 0;this.p="";this.m9=this.m6=this.m5=this.m1=this.rfsh=this.buf=this.a=void 0};this.mediaAll={};this.setMediaValue=function(a,b,c,d){"undefined"!==typeof d&&(this.mediaAll[a]=this.mediaAll[a]||{},this.mediaAll[a][b]=this.mediaAll[a][b]||new this.media,this.mediaAll[a][b][c]=d)};this.getMediaValue=
function(a,b,c){if(this.mediaAll[a]&&this.mediaAll[a][b])return this.mediaAll[a][b][c]};this.removePlayer=function(a){this.mediaAll[a]={}};this.removeAll=function(){this.mediaAll={}}},d=new function(){this.timeout={};this.setTimeout=function(b,c,d){this.timeout[b]=this.timeout[b]||{};this.timeout[b][c]&&window.clearTimeout(this.timeout[b][c]);this.timeout[b][c]=window.setTimeout(function(){a.richMedia.send({action:"refresh",playerId:b,mediaLabel:c})},1E3*d)};this.setTimeoutObject=function(b,c,d){this.timeout[b]=
this.timeout[b]||{};if("undefined"===typeof this.timeout[b][c]){var e=[],h;for(h in d)d.hasOwnProperty(h)&&e.push({delay:g(h,0),refresh:g(d[h],5)});e.sort(function(a,b){return a.delay<b.delay?-1:a.delay>b.delay?1:0});this.timeout[b][c]={refreshTab:e,backupRefreshTab:ATInternet.Utils.cloneSimpleObject(e),delayConfiguration:{}}}d=this.timeout[b][c];if(0<d.refreshTab.length&&(e=d.refreshTab[0].delay,h=d.refreshTab[0].refresh,"number"===typeof e&&"number"===typeof h&&0<h)){d.delayConfiguration[e]=d.delayConfiguration[e]||
{};var m=void 0;"undefined"!==typeof d.refreshTab[1]&&(m=d.refreshTab[1].delay);var t=0;"undefined"===typeof m?t=1:"number"===typeof d.delayConfiguration[e].number?t="refresh"===k.getMediaValue(b,c,"a")?Math.max(d.delayConfiguration[e].number-1,0):d.delayConfiguration[e].number:"number"===typeof m&&(t=Math.floor(60*(m-e)/h)-1);d.delayConfiguration[e].number=t;d.delayConfiguration[e].timeout&&window.clearTimeout(d.delayConfiguration[e].timeout);0<t?d.delayConfiguration[e].timeout=window.setTimeout(function(){a.richMedia.send({action:"refresh",
playerId:b,mediaLabel:c})},1E3*h):(d.delayConfiguration[e].number=void 0,d.delayConfiguration[e].timeout=void 0,d.refreshTab.splice(0,1),window.setTimeout(function(){a.richMedia.send({action:"refresh",playerId:b,mediaLabel:c})},1E3*h));this.timeout[b][c]=d}};this.clearTimeout=function(a,b,c){this.timeout[a]=this.timeout[a]||{};var d=this.timeout[a][b];if("object"===typeof d){if("object"===typeof d.delayConfiguration){var e,g;for(g in d.delayConfiguration)d.delayConfiguration.hasOwnProperty(g)&&(e=
d.delayConfiguration[g].number,"undefined"!==typeof e&&0<e&&(d.delayConfiguration[g].timeout&&window.clearTimeout(d.delayConfiguration[g].timeout),d.delayConfiguration[g].timeout=void 0));c&&(d.refreshTab=ATInternet.Utils.cloneSimpleObject(d.backupRefreshTab));this.timeout[a][b]=d}}else d&&window.clearTimeout(d)};this.removePlayer=function(b){for(var c in this.timeout[b])if(this.timeout[b].hasOwnProperty(c)){this.clearTimeout(b,c,!1);var d=k.getMediaValue(b,c,"a");"undefined"!==typeof this.timeout[b][c]&&
"stop"!==d&&a.richMedia.send({action:"stop",playerId:b,mediaLabel:c})}this.timeout[b]={}};this.removeAll=function(){for(var a in this.timeout)this.timeout.hasOwnProperty(a)&&this.removePlayer(a);this.timeout={}}},b=function(b,c,d){return a.utils.manageChapters(b,c,3)+(b[d]?b[d]:"")},c=function(a,b,c,d){var e=a[b];"boolean"===typeof a[b]&&(e=a[b]?d:c);return e},h=function(a){var b=0;/^(\-|\+)?([0-9]+)$/.test(a)&&(b=Number(a));return b},m=function(a,b,c,d,e){b=k.getMediaValue(b,c,d);"undefined"!==typeof b&&
(a[d]=e?encodeURIComponent(b):b)},e=function(a,b,c){"undefined"!==typeof c&&(a[b]=c)};a.richMedia={};a.richMedia.add=function(a){a=a||{};var d=h(a.playerId),e=b(a,"mediaTheme","mediaLabel"),g=c(a,"isEmbedded","int","ext");k.setMediaValue(d,e,"plyr",d);k.setMediaValue(d,e,"type",a.mediaType);k.setMediaValue(d,e,"s2",a.mediaLevel2);k.setMediaValue(d,e,"p",e);k.setMediaValue(d,e,"clnk",a.linkedContent||a.previousMedia);k.setMediaValue(d,e,"a",a.action);k.setMediaValue(d,e,"rfsh",a.refreshDuration);k.setMediaValue(d,
e,"m1",a.duration);k.setMediaValue(d,e,"m5",g);k.setMediaValue(d,e,"m6",a.broadcastMode);k.setMediaValue(d,e,"m9",a.webdomain)};a.richMedia.send=function(f){f=f||{};var q=h(f.playerId),n=b(f,"mediaTheme","mediaLabel"),p=f.action;k.setMediaValue(q,n,"a",p);var l={plyr:q,p:n};m(l,q,n,"a",!1);m(l,q,n,"type",!1);m(l,q,n,"s2",!1);m(l,q,n,"m1",!1);m(l,q,n,"m5",!1);m(l,q,n,"m6",!1);if("play"===p||"info"===p){f=c(f,"isBuffering","0","1");var s=a.getContext("page")||{},t=b(s,"chapter","name")||void 0,s=s.level2||
void 0;e(l,"buf",f);e(l,"prich",t);e(l,"s2rich",s);m(l,q,n,"clnk",!1);m(l,q,n,"m9",!0)}a.sendHit(l,[["hitType",["richmedia"]]],null,null,null);"pause"===p?d.clearTimeout(q,n,!1):"stop"===p&&d.clearTimeout(q,n,!0);if("play"===p||"refresh"===p)p=k.getMediaValue(q,n,"rfsh"),"object"===typeof p&&null!==p?d.setTimeoutObject(q,n,p):(p=g(p,5),0!==p&&d.setTimeout(q,n,p))};a.richMedia.remove=function(a){d.removePlayer(a);k.removePlayer(a)};a.richMedia.removeAll=function(){d.removeAll();k.removeAll()}};window.ATInternet.Tracker.addPlugin("RichMedia");
}).call(window);
if(typeof window.ATInternet.onTrackerLoad==='function'){window.ATInternet.onTrackerLoad();}6-0.2-0.49
		c-0.27-0.65,0.59-1.89,0.79-2.45c0.39,0.1,0.79,0.42,1.18,0.49c0.12,0.02,0.51-0.19,0.78-0.1c0.47,0.16,0.83,0.89,1.08,1.28
		c0.25,0.01,0.36,0.01,0.49,0.1h0.1c0.05-0.36-0.02-0.59,0.2-0.88c-0.11-1.32-3.06-2.56-4.22-2.94c-0.82-0.27-1.94-0.22-2.26-0.98
		c-0.07-0.15,0.03-0.58,0.2-0.78c-0.07-0.37-0.14-0.35-0.29-0.59c-2.54,0.08-2.46,0.65-4.22-0.88c-0.27-0.23-0.67-0.31-0.88-0.59
		c-0.59-0.78-1.02-2.98-1.76-3.43c-0.34-0.21-0.62-0.1-0.98-0.29c-0.5-0.27-0.51-0.65-1.37-0.69c-0.21-0.42-0.47-0.95-0.79-1.28
		c0.05-1.17,0.69-1.54-0.1-2.26c0.01-0.38,0.02-0.5,0.2-0.69c0.26-0.64,1.44-0.94,2.16-0.88c0.07,0.9,0.51,2.04,1.18,2.35v0.1
		c0.32-0.15,0.56-0.64,0.59-1.08c0.13,0.03,0.26,0.06,0.39,0.1c-0.07-0.39-0.18-0.4-0.2-0.88h0.29c0.11,0.24,0.23,0.35,0.1,0.59
		c-0.04,0.35,0.05,0.26-0.2,0.29c-0.03,0.47-0.08,0.9,0.2,1.27v0.2c0.12-0.07,0.2-0.11,0.29-0.2c0.07-0.11-0.13-0.58-0.2-0.88
		c0.07-0.07,0.13-0.13,0.2-0.2v-0.1c0.23,0.09,0.16,0.04,0.3,0.2c0.21,0.11,0.08,0.65,0.29,0.98c0.27,0.42,0.86,1.09,1.28,1.37v0.2
		c-0.21-0.09-0.26-0.15-0.39-0.29h-0.49c0.23,0.65,0.93,0.92,1.37,1.37c0.1-0.19,0.03-0.11,0-0.39c0.2,0.03,0.39,0.07,0.59,0.1
		c0.1,0.22,0.16,0.28,0.2,0.59c0.08-0.1,0.04-0.02,0.1-0.2c0.34,0.05,0.93,0.57,1.18,0.78c0.34-0.11,0.2,0.02,0.2-0.29
		c0.17-0.06,0.1-0.02,0.2-0.1h0.49c-0.09,0.26-0.1,0.26-0.3,0.39c0.1,0.1,0.2,0.2,0.3,0.29c-0.09,0.31,0.05,0.15-0.2,0.29
		c0.2,0.14,0.67,0.16,0.79,0.1c0.01-0.13,0.02-0.14-0.2-0.29c0.16-0.15,0.49-0.29,0.69-0.39c0.26,0.29,0.62,0.5,0.98,0.69
		c-0.25,0.29-1.06,0.5-1.57,0.49v0.2c0.62-0.01,1.15-0.36,1.57-0.29c0.41,0.06,1.02,0.45,1.37,0.59c0.91,0.35,1.87,0.59,2.65,1.08
		c0.34,0.21,0.49,0.66,0.78,0.88c0.24,0.18,0.75,0.27,0.98,0.39c-0.01,1.04,0.21,1.52,0.29,2.45c0.03,0.31-0.26,0.93-0.1,1.37
		c0.17,0.16,0.33,0.33,0.49,0.49c-0.21,0.23-0.04,0.1-0.29,0.1v0.2c0.48,0.44,1.37,0.66,1.76,1.18c0.03,0.2,0.07,0.39,0.1,0.59
		c0.31,0.52,1.51,1.56,2.16,1.77c0.09,0.46-0.13,1.15,0,1.37v0.2h0.2c0.06-0.06,0.13-0.13,0.2-0.2c0.07-0.1-0.01-0.22,0.1-0.39
		c0.03-0.03,0.07-0.07,0.1-0.1c0.06,0.16,0.08,0.23,0.1,0.49h0.29c0.14,0.32,0.3,0.53,0.39,0.88c0.42,0,0.83-0.02,1.08-0.2h0.39
		c-0.07,0.23-0.1,0.22-0.2,0.39h-0.49c-0.05,0.62-0.27,0.76-0.49,1.18c0.64,0.37,1.17,0.89,1.77,1.28c-0.09,1.32,0.05,1.5,0.79,1.96
		c0.32-0.19,0.1-0.54,0.2-0.69c0.1-0.1,0.2-0.2,0.3-0.29c0.35,0.59,0.71,0.79,0.98,1.57c0.17,0.06,0.1,0.02,0.2,0.1h0.1
		c-0.07-0.35-0.12-0.77,0.1-1.08v-0.2c0.54,0.06,1.05,0.56,1.37,0.88h0.1c-0.16-0.8-0.79-2.27-1.47-2.75v-0.49
		c0.23-0.03,0.24-0.05,0.39-0.1c0.14,0.19,0.33,0.4,0.49,0.59c0.01,0.02,0.53-0.47,0.79-0.59v-0.39c-0.53-0.09-0.22-0.13-0.69,0
		c-0.15-0.25-0.29-0.66-0.59-0.78c0.09-0.27,0.17-0.29,0.29-0.49c0.33,0.04,0.88-0.11,1.18,0c0.34,0.13,0.5,0.5,0.98,0.59
		c-0.05-0.58-0.47-1.13-0.29-1.47v-0.2c0.36,0.08,0.48,0.17,0.59,0.49c0.2-0.03,0.39-0.06,0.59-0.1c0.03-0.03,0.07-0.07,0.1-0.1
		v-0.39c-1.23,0-0.92-0.77-1.47-1.37c-0.76-0.4-1.4,0.31-1.96-0.79c-0.4,0.04-0.58,0.19-0.79,0.1c-0.11-0.06,0.33-0.39,0.49-0.49
		c-0.08-0.43-1.97-2.31-2.35-2.55v-1.27c0.66,0.08,1.36,0.55,1.96,0.1c0.47-0.03,0.57-0.11,0.69-0.49c0.17-0.31-0.07-0.64-0.39-0.78
		v-0.39c0.93,0.03,1.11-0.27,1.37-0.88c0.89,0.05,1.12-0.32,1.86-0.49c0.43-0.1,0.58,0.17,0.88,0c0.77-0.03,0.95,0.09,1.18,0.59
		c0.49-0.03,1-0.14,1.27-0.39h0.1c-0.15,0.37-0.47,0.86-0.79,1.08c0.09,0.83,0.15,2.42,0.39,2.85c0.17,0.1,1.21-0.47,1.47-0.69h0.3
		c-0.05,0.21-0.09,0.35-0.2,0.49c-0.15,0.24-0.04,0.16-0.39,0.2c0.17,0.45,0.59,0.36,0.78,0.69c0.09,0.16,0.02,0.38,0.1,0.49
		c0.19,0.09,0.07,0.04,0.29,0c0.03,0.03,0.07,0.06,0.1,0.1c-0.05,0.39-0.06,0.47-0.39,0.59c-0.02,0.35-0.01,0.46,0.29,0.69
		c-0.06,0.17-0.02,0.1-0.1,0.2c-0.12-0.1-0.39-0.11-0.59-0.39c-0.2,0.04-0.19,0.02-0.29,0.1c-0.08,0.15,0.08,0.43,0.29,0.59
		c-0.08,0.38,0,0.32-0.39,0.39c0.15,0.4,0.51,0.44,0.88,0.59c0.06-0.12,0.11-0.2,0.2-0.29c0.08-0.03,0.89,0.27,1.47,0.29
		c0.1,0.5,0.03,0.76-0.1,1.18c0.2,0.19,0.3,0.48,0.49,0.69c0.18,0.12,0.62,0.21,0.79,0.29v0.29c-0.2,0.04-0.19,0.02-0.29,0.1h-0.2
		c0.01,0.25,0.01,0.36,0.1,0.49c0.11,0.14,1.65-0.6,2.06-0.69c0.03,0.03,0.07,0.07,0.1,0.1c-0.1,0.1-0.2,0.2-0.29,0.29
		c0.02,0.33,0.05,0.68,0.2,0.88v0.2h0.1c0.29-0.49,0.45-0.81,0.98-1.08c0.43,0.14,0.61,0.61,0.98,0.1c0.39,0.2,0.38,0.65,0.69,0.88
		c0.28,0.22,0.98,0.22,1.38,0.29c0.46-0.42,1-0.98,1.67-0.88c0.03-0.03,0.07-0.06,0.1-0.1c-0.02-0.52,0.03-1.08-0.2-1.37
		c0.01-0.25,0.01-0.36,0.1-0.49c1.28-1.03,3.76,0.02,4.51,0.78c1.38-0.01,2.06-0.83,2.94-1.37v-0.29h0.29
		c0.35-1.01,0.5-1.39,0.98-2.16c0.62,0.06,1.48,0.16,2.06-0.1c0.18-0.47,0.38-0.92,0.49-1.37c0.56,0.06,0.43,0.18,0.69,0.49
		c-0.06,0.43-0.25,0.89-0.49,1.18c0.1,0.56,0.43,0.53,0.59,0.88v1.77c0.09,0.14,0.48,0.14,0.59,0.29c0.28,0.41,0.07,1.08,0.29,1.57
		c0.11,0.26,0.38,0.45,0.49,0.78c0.08,0.24-0.21,0.54-0.29,0.88c-0.07,0.28,0.07,0.66,0.1,0.78c0.12,0.58-0.09,1.65-0.2,2.16
		c-0.46,2.12,0.58,4.69-0.29,6.97c-0.2,0.52-0.77,0.76-1.08,1.18c-1.17,0.05-1.85,0.54-2.65,0.79c-0.8,0.24-1.51-0.58-2.36-0.29
		c-0.13,0.13-0.26,0.26-0.39,0.39c-0.29,0.03-0.59,0.06-0.88,0.1c-0.4,0.16-0.84,0.58-1.18,0.79c-0.23,0.07-0.46,0.13-0.69,0.2
		c-0.2,0.18-0.21,0.57-0.39,0.79c-0.64,0.76-1.31,1.61-1.86,2.45c-0.57,0.09-1.09-0.08-1.67-0.2c-0.69-0.14-1.11,0.54-1.77,0.29
		v-0.2c-0.44-0.15-0.69,0.42-1.28,0.2c-0.07-0.1-0.13-0.2-0.2-0.29c-0.25-0.09-1.57,0.08-1.67,0.1c-1.58,0.3-2.37-0.04-3.34,0.88
		c-0.82-0.06-0.8-0.78-1.28-1.18c-0.32-0.2-1.13,0.21-1.47,0.29c-0.69,0.18-0.96-0.08-1.47-0.2c-0.54-0.12-0.75,0.29-1.18,0.2
		c-0.01,0-0.28-0.18-0.29-0.2c-0.42-0.14-0.63-0.58-0.69-1.08c-0.74-0.01-1.33-0.17-1.86-0.29c-0.3-0.07-1.82,0.09-2.06,0.2
		c-0.2,0.23-0.39,0.46-0.59,0.69c-0.23,0.03-0.46,0.06-0.69,0.1c-0.36,0.14-0.96,0.62-1.28,0.88c-0.69,0.58-0.87,1.58-1.47,2.26
		c0,1.06,0.39,1.98,0.98,2.45c-0.02,2.25-1.13,2.29-2.06,3.43c-1.56-0.01-1.94-0.8-2.94-1.18c-0.74-0.28-1.39-0.1-2.16-0.39
		c-0.03-0.07-0.06-0.13-0.1-0.2c-1.47-0.52-3.26,0.35-4.51-0.29c-1.14-0.59-1.36-2.11-1.96-3.04c-0.69-0.03-1.37-0.07-2.06-0.1
		c-0.2-0.09-0.43-0.41-0.69-0.49c-0.67-0.21-1.66-0.23-2.26-0.39c-0.93-0.26-1.27,0.69-2.06,0.59c-0.86-0.11-1.58-0.29-2.16-0.69
		c-0.2-0.23-0.39-0.46-0.59-0.69h-0.79l-0.79-0.69c-0.22-0.28-0.01-0.62-0.2-0.98c-0.05-0.11-0.31-0.2-0.39-0.3
		c-0.52,0.04-0.57,0.19-0.88,0.39v0.39c-0.42-0.02-0.37-0.03-0.69,0c-0.11-0.12-0.25-0.21-0.39-0.29c-0.06-0.22-0.07-0.26-0.2-0.39
		c0-1.26,0.46-1.57,1.08-2.16c0.1-0.1,0.41-0.09,0.49-0.2c0.38-0.5,0.32-1.3,0.78-1.77c-0.08-0.41-0.28-0.34-0.39-0.59
		c-0.11-0.26,0.02-0.6-0.1-0.79c-0.34-0.77-1.3-0.62-1.47-1.67c-0.09-0.16-0.02-0.25,0-0.59c0.2-0.16,0.64-0.39,0.79-0.59
		c0.32-0.45,0.24-0.95,0.69-1.27c-0.05-0.21-0.09-0.36-0.2-0.49c-0.03-0.07-0.07-0.13-0.1-0.2c-0.39,0.13-1.05,0.66-1.28,0.98
		c-0.56-0.11-0.8-0.59-0.78-1.28c-1.17-0.3-2.14-0.42-3.14,0.29c-0.16,0.23-0.33,0.46-0.49,0.69c-0.73,0.4-1.68-0.04-2.26,0.49
		c-0.52-0.05-1.25-0.38-1.57-0.69c-0.65,0.12-0.17,0.13-0.49,0.49c-0.42,0.47-1.53-0.04-1.77-0.39c-0.5,0.03-0.5,0.11-0.79,0.29
		v0.29c-0.2,0.04-1.48,0.28-1.67,0.39c-0.13,0.16-0.26,0.33-0.39,0.49h-0.78c-0.03-0.13-0.07-0.26-0.1-0.39
		c-0.38-0.34-1.06-0.39-1.77-0.39h-1.86c-0.11,0.04-0.35,0.35-0.49,0.39c-0.56-0.03-1.11-0.07-1.67-0.1
		c-0.24,0.09-0.53,0.59-0.78,0.69c-0.31,0.12-0.57-0.09-0.79-0.1c-0.5-0.01-1.33,0.24-1.86,0.29c-0.24,0.02-0.53-0.19-0.88-0.1
		c-1.39,0.36-2.86,1.12-3.53,2.26c-0.45-0.01-0.5-0.03-0.69-0.29c-0.53,0.07-0.4,0.25-0.69,0.39c-0.52,0.25-1.09-0.05-1.57,0.29
		c-0.28,0.2-0.18,0.62-0.39,0.88c-0.04,0.06-1.93,0.9-2.06,0.88c-0.21-0.04-0.87-0.39-0.88-0.39c-0.39-0.07-0.46,0.35-0.88,0
		c-0.42-0.14-0.57-0.35-0.59-0.88c-0.4,0.15-0.69,0.53-1.18,0.59c-0.37,0.05-0.69-0.32-0.98-0.39c-1.62,1-4.01-0.49-3.92-2.45
		c-0.37,0.01-0.75,0.04-0.98,0.2c-1.2,0.04-0.87,0.88-1.27,1.67c-0.52,1.01-1.16,2.26-1.86,3.14c-0.79,0.98-2.28,1.66-3.63,2.06
		c-0.64,0.19-0.95,0.11-1.47,0.39c-0.5,0.27-0.89,1.11-1.37,1.47c-0.21,0.16-0.67,0.26-0.78,0.49c-0.29,0.57-0.07,1.21-0.39,1.67
		c-0.36,0.52-1.25,0.95-1.57,1.67c-0.08,0.18-0.36,2.5-0.29,2.65c0.07,0.16,0.42,0.38,0.49,0.59c0.21,0.66-0.26,1.44-0.49,1.77
		c-0.14,0.2-0.39,0.24-0.59,0.39c-0.29,0.36-0.59,0.72-0.88,1.08c-0.32,0.18-0.58,0.2-0.88,0.39c-0.16,0.2-0.33,0.39-0.49,0.59
		c-0.39,0.17-0.61-0.13-1.08,0.1c-0.65,0.32-1.13,1.16-1.77,1.47c-0.95,0.46-2.56-0.12-3.43,0.39c-0.79,0.4-1.33,1.69-1.77,2.45
		c-0.17,0.3-0.13,0.6-0.39,0.78c-0.62,0.44-1.71,0.37-2.26,0.88c-0.13,0.12-1.4,2.51-1.47,2.75c-0.2,0.6,0,1.12-0.29,1.57
		c-0.2,0.3-1.71,1.31-2.06,1.47c-0.2,0.03-0.39,0.07-0.59,0.1l-0.59,0.88v0.59c-0.21,0.47-1,0.82-1.27,1.27
		c-0.25,0.41-0.14,1.27-0.49,1.57h-0.39c-0.2,0.12-0.78,0.78-0.88,0.98c-0.4,0.77-0.12,1.96-0.59,2.65
		c0.04,0.69,0.28,0.79,0.69,1.08c0,0.6-0.14,0.85-0.49,1.08c0,1.46,0.17,2.38,0.88,3.34c0.29,0.4,0.65,0.22,0.88,0.98
		c0.32,1.06,0.39,3.43,0,4.22c-0.31,0.62-0.96,1.37-1.18,2.06l-0.2,0.88c0.02,0.14,0.21,0.69,0.1,0.98
		c-0.43,1.11-1.37,1.74-2.55,2.16c0.19,0.21,0.22,0.04,0.49,0.2c0.48,0.28,1.02,1.59,1.18,2.16c0.13,0.49-0.21,1.34-0.29,1.77
		c0.03,0.43,0.07,0.85,0.1,1.27c-0.16,0.74-0.56,1.95-0.2,2.65c0.2,0.37,0.67,0.72,0.88,1.08c0.37,0.62,0.42,1.17,0.98,1.57
		c0.36,0.26,0.9,0.24,1.28,0.49c0.7,0.46,1.32,1.34,1.77,2.06c1.65,0,1.08,0.67,1.86,1.27c0.37,0.29,0.8,0.41,1.18,0.69
		c0.37,0.27,0.55,0.77,0.88,1.08c0.17,0.15,0.46,0.1,0.59,0.29c0.32,0.46,0.02,1.32,0.29,1.86c0.06,0.13,0.64,0.8,0.78,0.98
		c0,0.3-0.03,0.5-0.1,0.69c-0.48-0.03-0.82-0.14-1.08-0.39h-0.39c0.36,0.6,1.42,1.27,2.06,1.57c0.25,0.12,0.49,0.04,0.69,0.2
		c0.24,0.19,0.42,0.63,0.69,0.79c0.74,0.43,1.68,0.42,2.35,0.88c0.12,0.08,0.89,0.68,0.98,0.78c0.11,0.13,0.08,0.38,0.2,0.49
		c0.31,0.29,0.83,0.34,1.18,0.59c0.2,0.26,0.39,0.52,0.59,0.79c0.36,0.25,0.7,0.28,0.98,0.59c0.1,0.16,0.2,0.33,0.29,0.49
		c0.3,0.21,0.72,0.15,0.98,0.39c1.21,1.12,2.5,2.13,3.92,3.04c0.68,0.43,1.4,0.5,2.16,0.88c0.37,0.19,0.81,0.56,1.28,0.69
		c0.72,0.19,1.46-0.27,1.96-0.39h1.18c0.88-0.2,2.77-0.5,4.12-0.2c0.59,0.13,2.21,0.25,2.65,0.2c0.13-0.02,0.59-0.19,0.88-0.1
		c0.18,0.06,0.48,0.33,0.69,0.39c0.85,0.25,1.28,0.09,1.96,0.29c0.46,0.14,3.19,1.11,3.34,1.08c0.3-0.06,0.92-0.31,1.18-0.39
		c0.39-0.03,0.79-0.06,1.18-0.1c0.07-0.02,0.32-0.28,0.39-0.29c0.58-0.11,1.08,0.17,1.86-0.1c1.6-0.55,1.98-0.93,4.02-0.69
		c0.29-0.29,0.59-0.59,0.88-0.88c0.76-0.3,1.57,0,2.45-0.2c1.14-0.26,4.51-0.44,5.79-0.2C166.27,267.28,166.89,267.32,167.51,267.35
		z M214.9,167.38c0.1,0.07,0.2,0.13,0.29,0.2v0.1h-0.39C214.83,167.57,214.87,167.48,214.9,167.38z M213.72,167.08v0.1
		c-0.38-0.08-0.35-0.1-0.49-0.39C213.44,166.88,213.56,166.97,213.72,167.08z M212.84,166.59h0.29v0.2
		c-0.48,0.02-0.43-0.06-0.98-0.1v-0.1c0.17-0.06,0.1-0.02,0.2-0.1C212.6,166.51,212.71,166.51,212.84,166.59z M212.05,164.93
		c0.23,0.07,0.22,0.1,0.39,0.2c-0.07,0.32-0.1,0.23-0.2,0.49c-0.23-0.07-0.22-0.1-0.39-0.2
		C211.91,165.1,211.94,165.13,212.05,164.93z M211.27,168.16c0.1,0.07,0.2,0.13,0.29,0.2c0,0,0.99,0.2,1.37,0.2
		c0.03,0.03,0.07,0.06,0.1,0.1c-0.21,0.34-0.4,0.16-0.49,0.69c-0.61-0.28-1.29-0.22-1.77-0.59c-0.08-0.1-0.04-0.02-0.1-0.2
		C210.92,168.45,211.14,168.4,211.27,168.16z M208.13,98.8c-0.36-0.03-0.57-0.16-0.69-0.1c-0.25,0.02-0.33,0.04-0.49,0.1
		c-0.04,0.38,0.03,0.52,0.2,0.88h-0.1c-0.17,0.13-0.17,0.01-0.29,0.1c-0.46-0.13-0.71-0.64-0.98-0.98c-0.25-0.32-0.7-0.31-0.98-0.59
		c-0.03-0.13-0.07-0.26-0.1-0.39c-0.23-0.31-0.71-0.51-1.08-0.69c0.01-0.82,0.14-0.85,0.2-1.57c0.33-0.07,0.65-0.13,0.98-0.2
		c0.29,0.07,0.52,0.5,0.79,0.59c0.56,0.2,0.96,0.03,1.37,0.29h0.1c0.38,0.32,0.61,0.73,1.08,0.98v0.39h-0.29
		c0.12,0.36,0.3,0.59,0.39,0.98C208.15,98.71,208.19,98.63,208.13,98.8z M211.56,95.37v0.1c-0.21-0.04-0.22-0.01-0.59,0
		c-0.02-0.23-0.02-0.28-0.1-0.39c-0.31-0.89-1.53-0.83-2.36-1.18c-0.15-0.42-0.11-0.58-0.49-0.78c0.16-0.26-0.02-0.1,0.29-0.1
		c-0.22-0.33-0.52-0.68-0.78-0.98v-0.1c0.54,0.18,1.27,0.83,1.57,1.27h0.1c-0.04-0.46-0.08-0.43-0.39-0.59
		c0.12-0.26,0.19-0.2,0.3-0.49c-0.54-0.5-0.84-0.71-1.87-0.69v-0.2c0.03-0.03,0.07-0.06,0.1-0.1c0.6-0.01,1.14,0.03,1.47,0.29
		c0.63,0.24,0.33,0.69,0.69,1.18c0.37,0.51,1.22,0.72,1.77,1.08c0.22,0.15,0.26,0.52,0.49,0.69
		C211.65,94.88,211.38,94.98,211.56,95.37z M232.26,135.2c0.41-0.54,0.08-1.09,0.98-1.18c0.07-0.3,0.16-0.44,0.2-0.78
		c0.2-0.04,0.19-0.02,0.29-0.1c0.58,0.11,0.41,0.31,0.69,0.69c0.19,0.26,0.53,0.3,0.79,0.49c0.54,0.41,0.57,1.04,0.59,1.77
		c0.01,0.37,0.15,0.53,0,0.79c-0.07,0.23-0.1,0.22-0.2,0.39c-0.97,0.03-2.28,0.61-2.75,0.29c-1.05,0.02-0.95-0.32-1.37-0.88
		C231.45,135.2,231.8,135.81,232.26,135.2z M219.8,159.04h0.2C219.91,159.21,219.97,159.15,219.8,159.04z M225,156.88
		c-1,0.47-0.52,0.69-0.98,1.27c-0.37,0.27-1.81,0.26-2.06,0.1h-0.19c-0.06,0.36-0.04,0.39,0,0.78c-0.68-0.05-1.23-0.41-1.47,0.2
		h-0.2c0.07-0.75,0.47-0.69,0.69-1.18c0.12-0.26,0.05-0.58,0.2-0.79c0.22-0.3,0.94-0.63,1.28-0.79v-0.1
		c0.42,0.03,0.85,0.06,1.27,0.1c0.17-0.04,0.37-0.34,0.59-0.29c0.21,0.04,0.49,0.33,0.88,0.39V156.88z M244.53,147.95
		c-0.55,0.23-0.89,1.01-1.47,1.28c-0.75,0.34-1.01-0.08-1.47,0c-0.1,0.1-0.2,0.2-0.29,0.29c-0.66,0.26-1.4-0.19-1.86-0.29
		c-0.12,0.15-0.25,0.35-0.39,0.49c-0.1,0.08-0.02,0.04-0.2,0.1c-0.43-0.35-0.7-0.48-0.98-0.98c-0.64,0.08-0.78,0.6-1.18,0.59
		c-0.53-0.03-0.51-0.17-0.88-0.29c-0.03-0.16-0.07-0.33-0.1-0.49c-0.16-0.03-0.33-0.07-0.49-0.1c-0.06,0.2-0.13,0.39-0.2,0.59
		c-0.63,0.16-1.38,0.5-1.96,0.69c-0.42,0.13-0.73,0-1.08,0.2c-0.23,0.13-0.3,0.51-0.49,0.69c-0.35,0.32-0.89,0.4-1.18,0.78
		c-0.23,0.31-0.27,0.67-0.49,0.98c-0.33,0.33-0.66,0.65-0.98,0.98c-0.16,0.31-0.01,0.47-0.2,0.69c-0.43,0.73-1.7,0.18-2.06,0.39
		c-1.38,0.82-3.58,1.04-5-0.1c-0.31-0.25-0.17-0.63-0.39-0.98c-0.11-0.17-1.22-1-1.47-1.08c0.07-0.3,0.13-0.58,0.29-0.78h0.2
		c0.21-0.43-0.54-1.49-0.1-2.16c0.15-0.38,0.36-0.32,0.69-0.29c0.05-0.15,0.07-0.16,0.1-0.39c0.16-0.4-0.45-1.91-0.59-2.45
		c-0.1-0.4,0.22-0.8,0.29-1.08c0.03-0.26,0.06-0.52,0.1-0.79c0.14-0.17,0.89-0.3,1.08-0.39c0-0.36,0.13-0.86,0.1-1.08
		c-0.08-0.55-0.71-1.05-0.49-1.77c0.07-0.23,0.38-0.48,0.49-0.69c0.35-0.69,0.4-1.5,0.39-2.55c0.38-0.19,0.83-0.3,1.08-0.49
		c0.51,0.16,0.86,0.53,1.08,0.98c0.55,0,1.52,0.1,1.86-0.1c0.37-0.04,0.36-0.08,0.59-0.2v-0.29c0.42,0.03,0.85,0.07,1.28,0.1
		c-0.28,0.88-0.89,1.66-1.47,2.26c0.09,0.32-0.05,0.15,0.2,0.29c0.32,0.12,0.33-0.35,0.88-0.2c0.27,0.08,0.46,0.36,0.69,0.29
		c0.18-0.05,0.1-0.03,0.2-0.1c0.41,0.08,0.41,0.21,0.69,0.39c0.02,0.71,0.13,0.85,0.1,1.47c0.3,0.06,0.67,0.13,0.88,0.29
		c0.41-0.15,0.83-0.6,0.98-0.98c0.08-0.2-0.13-0.42-0.1-0.49c0.1-0.23,0.45-0.45,0.59-0.69c0.2-0.03,0.39-0.07,0.59-0.1
		c0.05-0.54,0.28-0.8,0.49-1.18c0.31,0.06,0.24,0.02,0.39,0.2c0.63-0.08,0.78-0.44,1.37-0.59v-0.29c0.29-0.03,1.03-0.23,1.18-0.2
		c0.41,0.09,0.59,0.69,0.98,0.79c0.43,0.1,0.44-0.35,0.78-0.29c0.24,0.04,0.66,0.42,0.88,0.49c0.46,0.06,0.92,0.13,1.37,0.2
		c1.26,0.48,2.46,1.34,3.73,1.86c0.73,0.3,1.24-0.11,1.77,0c0.59,0.12,1.99,1.48,2.26,1.96c1.2,2.15-0.71,3-1.18,4.41
		C245.77,147.82,245.15,147.89,244.53,147.95z"/>
</g>
    <g id="Globe_Light_Bottom">

		<radialGradient id="SVGID_9_" cx="169.7521" cy="161.9013" r="152.8291" fx="151.7262" fy="167.1149"
                        gradientTransform="matrix(0.342 0.9397 -0.9397 0.342 271.5075 -48.0146)"
                        gradientUnits="userSpaceOnUse">
		<stop offset="0.9" style="stop-color:#008AF7;stop-opacity:0"/>
            <stop offset="1" style="stop-color:#0096F7;stop-opacity:0.4"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_9_)" d="M218.55,303.26C145,330.04,63.66,292.11,36.89,218.55
		C10.12,145,48.05,63.66,121.6,36.89c73.56-26.77,154.89,11.16,181.66,84.71C330.04,195.16,292.11,276.49,218.55,303.26z"/>
</g>
    <g id="Kont_Left">
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#008CFA" d="M30.85,187v-0.2c0.08,0.1,0.03,0.03,0.1,0.2H30.85z M28.69,175.32
		c-0.22-1.02,0.03-3.71-0.34-4.67c0.15,38.25,15.45,72.93,40.22,98.34c-0.1-0.3-0.21-0.58-0.34-0.76c-0.41-0.55-0.64-1.34-1.18-1.77
		v-0.1c0.22,0.06,0.26,0.07,0.39,0.2c0.57-0.09,0.43-0.41,0.79-0.69c0.09-0.11,0.25-0.01,0.39,0.1c0.64-0.04,0.78-0.33,1.18-0.59
		c-0.08-1.81-0.96-2.77-1.67-3.92c-0.5-0.82-0.73-1.7-1.28-2.45c-0.53-0.74-1.43-1.31-2.16-1.86c-0.63-0.48-1.09-1.23-1.57-1.86
		c-0.23-0.16-0.46-0.33-0.69-0.49c-0.48-0.58-0.74-1.23-1.18-1.86c-0.46-0.68-1.2-1.28-1.67-1.96c-0.65-0.95-1.19-1.83-1.86-2.75
		c-1.14-1.54-2.96-2.56-4.12-4.12c-0.56-0.75-1.01-1.51-1.57-2.26c-0.3-0.4-0.8-0.75-1.08-1.18c-0.58-0.89-0.81-1.95-1.37-2.85
		c-1.4-2.24-3.17-4.38-4.51-6.67c-0.42-0.71-0.48-1.45-0.79-2.25c-0.25-0.66-0.72-1.44-0.98-2.06c-0.33-0.78-0.37-1.48-0.69-2.26
		c-0.58-1.4-1.45-2.76-2.06-4.22c-0.41-0.99-0.34-2.08-0.69-3.14c-0.42-1.29-1.07-2.43-1.57-3.63c-1.03-2.51-1.65-6.05-3.14-8.04
		c-0.17-0.26-0.01-0.13-0.29-0.1c-1.04-2.22-1.46-4.98-2.16-7.55c-0.21-0.79-0.08-1.35-0.29-2.16c-0.25-0.96-0.54-2.09-0.78-3.04
		c-0.1-0.82-0.2-1.63-0.29-2.45c-0.14-0.52-0.36-1.1-0.39-1.77c0.07,0.08,0.13,0.22,0.2,0.3v0.1h0.1c-0.07-0.62-0.13-1.24-0.2-1.86
		c-0.1,0.15-0.1,0.4-0.1,0.69c-0.03-0.03-0.07-0.07-0.1-0.1c-0.55-0.5-0.15-1.37-0.29-2.06c-0.24-1.19-0.58-2.25-0.69-3.53
		c-0.12,0.18-0.11,0.56-0.1,0.88h-0.1c-0.38-1.65-0.51-3.83-0.88-5.49C28.65,176.75,28.8,175.84,28.69,175.32z"/>
</g>
    <g id="Kont_Main_Kopie">
	<radialGradient id="SVGID_10_" cx="30.8873" cy="186.9008" r="0.0988" gradientUnits="userSpaceOnUse">
		<stop offset="0" style="stop-color:#0CCFFF"/>
        <stop offset="0.1842" style="stop-color:#0BC2FB"/>
        <stop offset="0.5257" style="stop-color:#079FF0"/>
        <stop offset="0.6568" style="stop-color:#0690EB"/>
        <stop offset="0.9001" style="stop-color:#004B96"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_10_)"
              d="M30.95,187c-0.06-0.17-0.02-0.09-0.1-0.2v0.2H30.95z"/>

        <radialGradient id="SVGID_11_" cx="92.9938" cy="272.6319" r="265.3621" fx="93.1629" fy="85.9785"
                        gradientTransform="matrix(-0.7998 -0.6002 0.6544 -0.872 -11.0242 566.1816)"
                        gradientUnits="userSpaceOnUse">
		<stop offset="0.7484" style="stop-color:#3DCFFF;stop-opacity:0"/>
            <stop offset="0.7965" style="stop-color:#39CFFF;stop-opacity:0.3213"/>
            <stop offset="0.8403" style="stop-color:#2ECEFF;stop-opacity:0.6133"/>
            <stop offset="0.8683" style="stop-color:#23CDFF;stop-opacity:0.8"/>
            <stop offset="0.9988" style="stop-color:#00CAFF"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_11_)" d="M189.59,32.68c0.37,0.41,1.2,0.37,1.57,0.79h0.78
		C191.52,32.83,190.67,32.64,189.59,32.68z M196.16,33.66v0.1c0.22,0.17,0.21,0.24,0.59,0.29c-0.13,0.16-0.06,0.11-0.29,0.2
		c0.46,0.33,0.86,0.03,1.57,0v-0.1c-0.57-0.19-0.94-0.55-1.67-0.59C196.26,33.64,196.33,33.6,196.16,33.66z M193.71,33.76
		c-0.59-0.15-1.2,0.1-1.57-0.1h-0.2c0.22,0.32,0.49,0.35,0.79,0.59h0.1c-0.03,0.07-0.06,0.13-0.1,0.2c0.03,0.03,0.07,0.07,0.1,0.1
		H194v0.49c0.27,0.03,0.69,0.07,0.88,0.2c0.61,0.02,1.67,0.13,1.96-0.2h0.1c-0.03-0.1-0.07-0.2-0.1-0.29
		c-0.65-0.23-1.45-0.16-2.06-0.49C194.52,34.1,194.07,33.85,193.71,33.76z M199.2,42.59c-0.91-0.13-1.78-0.26-2.45,0.29h-0.2
		c0.36,0.38,1.2,0.66,1.86,0.69c-0.36,0.24-1.75,0.1-2.16-0.2h-1.08v0.2c0.15,0.05,0.16,0.07,0.39,0.1
		c-0.82,0.56-1.81-0.21-2.35-0.1c-0.29,0.06-0.95,0.25-1.37,0.29c1.03,0.86,2.85,0.76,3.83,1.47h0.69c-0.05-0.15-0.07-0.16-0.1-0.39
		c-0.31-0.15-0.53-0.27-0.98-0.29v-0.1c0.67,0.01,0.9,0.31,1.37,0.49c0.46-0.19,1.41-0.37,1.76-0.39c0.01-0.43,0.08-0.21,0.2-0.69
		c0.79-0.02,1.36-0.18,1.86,0.2h0.29C200.52,43.67,199.56,43.08,199.2,42.59z M201.36,53.28c-0.46-0.01-0.76-0.01-0.98,0.2h-0.2
		c0.11,0.58,0.55,1.4,0.79,1.67c-0.03,0.03-0.07,0.07-0.1,0.1c-0.12,0-0.05,0.06-0.2-0.1h-0.2c0.1,0.19,0.13,0.27,0.29,0.39
		c-0.03,0.03-0.06,0.07-0.1,0.1c-0.13,0.09-0.24,0.09-0.49,0.1c0.1,0.08,0.02,0.04,0.2,0.1c-0.13,0.09-0.24,0.09-0.49,0.1
		c0.06,0.31,0.02,0.24,0.19,0.39c-0.14,0.24-0.12,0.18-0.49,0.2c0.1,0.29,0.2,0.59,0.3,0.88c0.1,0.03,0.19,0.07,0.29,0.1
		c0.25,0.55-0.25,0.59,0.2,0.98c-0.17,0.24-0.09,0.18-0.2,0.49c0.23,0.16,0.29,0.43,0.49,0.59c0.54,0.41,1.2,0.62,1.57,1.18
		c0.2,0.3,0.2,1.13,0.39,1.37c0.22,0.28,0.79,0.25,0.98,0.59c0.15,0.27,0.39,1.37,0.39,1.37c0.2,0.06,0.39,0.13,0.59,0.2
		c0.26,0.26,0.52,0.52,0.78,0.78c-0.14,0.24,0.02,0.11-0.29,0.2c0.26,1.43,2.38,1.05,3.24,1.67c0.24-0.14,0.11,0.02,0.2-0.29
		c0.13,0.13,0.26,0.26,0.39,0.39c0.59-0.03,1.18-0.07,1.77-0.1v-0.2c0.37-0.25,1.08-0.44,1.37-0.39c-0.09-0.45-0.29-0.48-0.49-0.79
		c-4.05,0.11-6.07-3.19-7.65-5.89c-0.18-0.12,0.01-0.05,0.1-0.2c-0.46-0.31-0.38-0.71-0.69-1.18c-0.23-0.2-0.46-0.39-0.69-0.59
		c-0.1-0.19-0.23-3.02-0.2-3.53C202.09,53.9,201.71,53.58,201.36,53.28z M212.84,55.34h0.1c-0.12-0.49-0.78-0.69-1.37-0.69
		c-0.09,0.33-0.05,0.31,0.1,0.59C212.15,55.23,212.62,55.21,212.84,55.34z M208.91,70.84c-0.12,0.22-0.23,0.38-0.29,0.69
		c0.16,0.15,0.16,0.31,0.29,0.49c0.24,0.33,0.69,0.5,0.98,0.78c0.48-0.04,0.75-0.17,1.08-0.1v-0.2c0.14-0.27-0.16-0.98-0.39-1.37
		C210.02,71.01,209.62,70.84,208.91,70.84z M194.79,106.75c-0.19,0.09-0.07,0.04-0.29,0v0.1c-0.1,0.12,0.02,0.12-0.1,0.29
		c0.12,0.52,0.41,0.38,0.69,0.69c0.07,0.12-0.02,0.27-0.1,0.49c0.07,0.03,0.13,0.06,0.2,0.1v0.1h0.1c0.04-0.22,0.08-0.71,0.2-0.88
		c0.12,0,0.05-0.06,0.2,0.1c0.07-0.11,0.06-0.09,0.1-0.29c0.48-0.12,0.9-0.76,1.08-1.18c-0.21-0.19-0.81-0.98-0.98-1.08
		c-0.28-0.16-0.48-0.02-0.69-0.2h-0.2c-0.11,0.51-0.08,0.9,0.29,1.18C195.17,106.46,195.01,106.58,194.79,106.75z M160.45,126.56
		c-0.33-0.05-1.9-1.12-2.55-0.39h-0.29c0.13-0.36,0.57-0.75,0.29-1.18c0.08-0.34,0.14-0.26,0.29-0.49c0.31,0.06,0.29,0.09,0.49,0.2
		l0.2-0.29h0.1c-0.21-0.59-0.7-0.59-1.08-0.98c-0.27-0.28-0.18-0.62-0.39-0.98c-0.15-0.25-0.47-0.11-0.69-0.29
		c-0.17-0.15-0.16-0.49-0.29-0.69c-0.26-0.37-1.1-0.83-1.47-1.08c0-1.97-0.66-3.54-2.16-4.02c0.09-1.26,0.68-1.42,1.18-2.16
		c0.4-0.59,0.41-1.36,0.98-1.77c0-0.37,0.01-0.64-0.2-0.78c-0.41-0.29-2.89-0.14-3.24,0c-0.03-0.03-0.07-0.07-0.1-0.1
		c0.05-0.29,0.14-0.67,0.29-0.88c0.18-0.47,0.94-0.85,1.37-1.08c0.08-0.4,0.13-0.66,0.1-0.98c0.26-0.13,0.34-0.26,0.69-0.49
		c-0.02-0.23-0.02-0.28-0.1-0.39v-0.29c0.13,0.1,0.26,0.2,0.39,0.29c0.12-0.42-0.2-0.33,0.2-0.59v-0.1
		c-0.16,0.03-0.33,0.06-0.49,0.1c-0.05-0.15-0.07-0.16-0.1-0.39h-0.2c-0.1,0.34-0.04,0.55-0.69,0.59c-0.07,0.26-0.13,0.52-0.2,0.78
		c0.13,0.13,0.26,0.26,0.39,0.39c-0.55,0.63-2.37,0.39-3.04,0.1c-0.37,0.58-0.72,1.34-1.18,1.86c-0.2,0.1-0.39,0.2-0.59,0.29
		c-0.12,0.16-0.09,0.53-0.2,0.69c-0.09,0.06-0.2,0.03-0.39,0.1c-0.08-0.18-0.14-0.26-0.2-0.49c-0.38,0.13-0.68,0.38-0.98,0.59
		c0.08,0.65,0.74,1.26,1.18,1.57c-0.14,0.59-0.51,0.84-0.98,1.08v0.79h-0.29v0.2h1.08c-0.02,0.23-0.02,0.28-0.1,0.39
		c-0.24,0.54-0.82,0.66-1.37,0.88c-0.06,0.17-0.02,0.1-0.1,0.2c0.09,0.36,0.18,0.27,0.29,0.59c0.17-0.06,0.1-0.02,0.2-0.1
		c0.53-0.07,0.5-0.31,0.79-0.59c0.1,0.03,0.04-0.03,0.1,0.1c0.03,0.07-0.09,1-0.29,1.18v0.49c0.16-0.03,0.33-0.07,0.49-0.1
		c0.04-0.28,0.06-0.42,0.2-0.59v-0.1c0.32,0.14,0.22,0.25,0.69,0.29v-0.88h0.2c0.14,0.26,0.28,0.41,0.49,0.59
		c-0.17,0.83-0.87,1.13-1.18,1.77c-0.1,0.2,0.07,0.61,0.29,0.78c0.06,0.17,0.02,0.1,0.1,0.2c0.05-0.12,0.12-0.3,0.2-0.39
		c0.1-0.08,0.02-0.04,0.2-0.1c0.16,0.16,0.33,0.33,0.49,0.49c0.18,0.23,0.14-0.16,0.29-0.2c0.4-0.09,0.45,0.46,1.08-0.2h0.2
		c-0.04,0.41-0.05,0.42-0.3,0.59c0.04,0.78,0.34,1.03,0.49,1.57c0.23,0.83,0.1,1.55,0,2.16c-0.03,0.03-0.07,0.07-0.1,0.1
		c-1.07,0.23-1.49-0.01-2.45-0.39c-0.16,0.16-0.33,0.33-0.49,0.49c0.11,0.19,0.41,0.38,0.59,0.49c-0.05,0.54-0.29,0.53-0.69,0.69
		c-0.06,0.17-0.02,0.09-0.1,0.2v0.29c0.28,0.03,0.43,0.08,0.69-0.1c0.2,0.04,0.19,0.02,0.29,0.1c0.26,0.32,0.19,0.89-0.1,1.18
		c-0.32,0.62-1.53,0.87-2.26,0.78c-0.16,0.23-0.33,0.46-0.49,0.69c0.14,0.24-0.02,0.12,0.29,0.2v0.39c0.34,0.08,0.27,0.14,0.49,0.29
		c0.23,0.14,0.96-0.12,1.28-0.2c0.16,0.34,0.29,0.59,0.59,0.78c-0.03,0.2-0.06,0.39-0.1,0.59c-0.44,0.23-0.48,0.48-1.18,0.49
		c-0.32,1.48-1.36,2.05-2.55,2.65v0.39c0.56-0.05,0.65-0.14,0.88,0.29c0.62-0.14,0.75-0.77,1.37-0.98c0.47-0.27,1.28,0.3,1.86,0.49
		c0.31-0.52,1.92-2.56,2.45-0.88c0.58,0.09,1.26,0.16,1.67-0.3c0.62,0.06,0.5,0.28,0.88,0.49c0.29,0.11,0.51-0.2,0.59-0.59
		c0.53-0.03,1.9-0.14,2.16,0.29c0.4,0,0.82-0.01,1.08-0.1v-0.39c1.19-0.03,1.4-0.77,2.26-1.08c0.16-0.61,0.38-1.48,0.39-2.16h-0.29
		C160.13,128.41,160.6,127.71,160.45,126.56z M144.95,113.32h0.1c0.16-0.24,0.42-0.29,0.59-0.49c0.33-0.39,0.3-1.46,0.69-1.86
		c0.78-0.82,1.51-0.47,1.86-2.06c-0.1-0.03-0.2-0.07-0.29-0.1c-0.34,0.35-1.03,0.56-1.47,0.79c-0.07,0.41-0.01,0.75-0.2,0.98
		c-0.16,0.3-0.55,0.46-0.88,0.59c0.13,0.52,0.11,1.45-0.39,1.86V113.32z M190.67,108.91c-1.3,0.43-0.93,0.96-1.67,1.57
		c0.16,0.66,0.48,1.12,0.49,1.86h0.29c0.17-0.49,0.28-1.22,0.69-1.47c-0.31-0.91-0.2-1.01,0.29-1.86
		C190.73,108.97,190.7,108.94,190.67,108.91z M137.49,129.12c1.51,0.09,4.23-0.57,4.91-1.57c0.7,0.04,1.32,0.04,1.86,0.2
		c0.21-0.26,0.19-0.56,0.39-0.88c0.49-0.49,0.98-0.98,1.47-1.47c-0.07-0.37-0.17-0.41-0.39-0.59c-0.05-2.51,0.15-2.79,1.67-3.73
		c-0.04-1.31-0.71-1.82-0.98-2.94c-0.43,0.05-0.82,0.16-1.18,0.29c-0.23-0.23-0.46-0.46-0.69-0.69c-0.24,0.08-0.24,0.23-0.39,0.29
		c-0.55,0.24-1.19-0.07-1.67,0.2c-0.62,0.35-0.31,0.85-1.08,1.18c0.08,0.41,0.16,0.36,0.49,0.49c-0.1,0.49-0.35,0.46-0.59,0.79
		c-0.63,0.01-1.12-0.03-1.47-0.29c-0.68-0.01-0.91,0.07-1.28,0.29c-0.02,0.38-0.11,0.58,0,0.79c0.01,0.64-0.11,0.76-0.49,0.98
		c0.02,0.79,0.44,1.47,0.88,1.86c-0.03,1.06-0.55,0.64-0.98,1.18c-0.23,0.29-0.08,0.67-0.39,0.88c-0.26,0.18-0.66,0.11-0.88,0.29
		c-0.07,0.11-0.06,0.09-0.1,0.29c0.2,0.04,0.19,0.02,0.29,0.1c0.03,0.03,0.07,0.06,0.1,0.1h-0.1c-0.11,0.23-0.19,0.27-0.39,0.39
		c0.08,0.47,0.25,0.52,0.2,0.88C137.17,128.61,137.3,128.65,137.49,129.12z M148.97,121.07c-0.17,0.33-0.41,0.67-0.69,0.88v0.2
		c0.59-0.02,0.64-0.17,0.98-0.39C149.27,121.3,149.31,121.21,148.97,121.07z M194,154.72h-0.2
		C193.96,154.84,193.88,154.88,194,154.72z M175.85,159.63c0.07,0.77,0.26,2.06,0.79,2.35c-0.07,0.1-0.13,0.2-0.2,0.29
		c0.35,0.28,0.73,0.61,1.28,0.69c0.03-0.5,0.23-0.66,0.29-0.98c-0.03-0.29-0.07-0.59-0.1-0.88c0.05-0.15,0.36-0.44,0.39-0.59
		c0.08-0.39-0.35-2.41-0.49-2.85c-0.03-0.03-0.07-0.07-0.1-0.1c-0.21,0.28-0.16,0.55-0.1,0.88c-0.45,0.16-0.91,0.23-1.27,0.49
		C176.12,159.1,176.06,159.45,175.85,159.63z M220.49,163.85c0.03-0.03,0.07-0.07,0.1-0.1c-0.3-0.22-0.61-0.53-0.79-0.88h-0.39
		c-0.21,0.26-0.49,0.51-0.79,0.69c0.03,0.1,0.07,0.2,0.1,0.29c0.49,0.1,0.98,0.2,1.47,0.29
		C220.29,164.04,220.39,163.94,220.49,163.85z M175.17,165.71h0.29c0.13,0.26,0.4,0.65,0.49,0.88c0.2,0.54-0.29,0.81-0.2,1.18
		c0.02,0.07,0.29,0.18,0.29,0.2c0.1,0.21-0.04,0.98-0.1,1.08c-0.03,1.15,0.05,1.61,0.69,2.06c0.12,0.1,0.12-0.02,0.29,0.1
		c0.54-0.09,0.7-0.33,0.69-0.98c0.42-0.11,0.58-0.27,0.88,0.1h0.39c0.21-1.06,0.16-2.53,0-3.53c-0.1-0.59,0.57-0.67,0.39-1.27
		c-0.11-0.37-0.37-0.54-0.39-1.18h-0.29v-0.39c-0.17-0.16-0.29-0.36-0.39-0.59c-1.17,0.05-0.97,0.69-1.57,1.18
		c-0.42,0.34-0.98,0.21-1.47,0.29C175.1,165.2,175.13,165.27,175.17,165.71z M219.71,166.79c0.03,0.03,0.07,0.07,0.1,0.1
		c0.07-0.07,0.13-0.13,0.2-0.2c0.03-0.45-0.04-0.57-0.1-1.08c-0.03-0.03-0.07-0.06-0.1-0.1h-0.39c-0.1,0.08-0.03,0.04-0.2,0.1
		c0.09,0.42,0.28,0.25,0.39,0.49C219.81,166.54,219.38,166.47,219.71,166.79z M165.45,168.36c0.11-0.09,0.01-0.25-0.1-0.39
		c-0.19-0.25-0.33-0.29-0.78-0.29c-0.11,0.07-0.09,0.06-0.29,0.1c0.06,0.17,0.02,0.1,0.1,0.2
		C164.43,168.1,165.23,168.45,165.45,168.36z M161.33,169.34c0.35,0.62,0.52,0.47,0.88,0.88c0.6-0.1,0.95-0.73,1.08-1.27
		c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.28-0.42-0.49-0.04-0.78-0.69h-0.49c-0.43,0.41-1.02,0.59-1.37,1.08
		c-0.03,0.03-0.06,0.07-0.1,0.1c0.23,0.09,0.16,0.04,0.29,0.2C161.07,169.48,161.15,169.42,161.33,169.34z M237.27,171.4
		c-0.26,0.23-0.21,0.45-0.59,0.59c0.08,0.44,0.27,0.5,0.39,0.88c0.65,0.07,1.06-0.05,1.47,0.1c0.26-0.66,0.92-0.74,1.18-1.28
		c0.12-0.24-0.1-0.54,0.1-0.69c0.02-0.01,0.65-0.19,0.69-0.2c-0.11-0.29-0.25-0.35-0.49-0.49c0.09-0.68,0.94-1.37,0.69-1.86
		c-0.58,0.95-1.55,2.04-2.84,1.96c-0.06,0.22,0.05,0.54-0.1,0.79C237.66,171.27,237.37,171.33,237.27,171.4z M206.85,168.85
		c-0.07,0.07-0.13,0.13-0.2,0.2v0.29h-0.29v0.59c0.27,0.03,0.69,0.07,0.88,0.2h0.2c-0.07-0.63-0.25-0.76-0.39-1.28H206.85z
		 M207.64,171.3c0.32-0.09,0.15,0.05,0.3-0.2h0.1c-0.14-0.29-0.44-0.42-0.79-0.49C207.3,171.12,207.39,171.04,207.64,171.3z
		 M158.59,171.11c-0.07-0.36,0.01-0.27-0.29-0.39c-0.16,0.17-0.4,0.36-0.59,0.49v0.29c0.17,0.06,0.1,0.02,0.2,0.1
		C158.29,171.5,158.3,171.3,158.59,171.11z M225.69,172.77c0.41-0.34,0.58-1.13,0.69-1.77c-0.1-0.03-0.2-0.07-0.29-0.1
		c-0.37,0.41-1.04,1.11-0.49,1.86c0.03,0.03,0.07,0.07,0.1,0.1V172.77z M217.84,176.8c-0.21-0.22-0.37-0.24-0.49-0.59
		c-0.59,0.14-1.04,0.5-1.47,0.79c0.01,0.28,0.04,0.42,0.1,0.59c0.6-0.06,1.9-0.47,2.35-0.2c0.55-0.02,0.67-0.04,0.79,0.39
		c0.56-0.04,2.83-0.82,3.24-1.08c0.1-0.03,0.2-0.07,0.29-0.1c0-0.29,0-0.54-0.1-0.69c-0.21,0.04-0.72,0.51-1.18,0.59
		c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c-0.43,0.05-0.43,0.2-0.69,0.29c-0.56-0.09-1.57-0.19-2.16,0.1
		C218.22,176.51,218.17,176.7,217.84,176.8z M167.51,267.35c1.85,0.68,2.33,3.16,3.83,4.22c1.65,1.17,4.88-0.04,6.77-0.49
		c0.86-0.21,2.37,0.11,2.75-0.1h0.39c0.23,0.12,0.28,0.71,0.49,0.88c0.23,0.07,0.46,0.13,0.69,0.2v0.2c0.45-0.04,0.78-0.1,0.98-0.39
		c0.2,0.04,0.19,0.02,0.29,0.1c0.06,0.15,0.12,0.04,0,0.2c-0.01,0.75,0.35,1.03,0.88,1.18c0.02,0.82-0.22,1.21-0.39,1.96
		c-0.07,0.3,0.12,0.73,0.1,0.88c-0.01,0.11-1.21,1.36-1.37,1.47c0.12,0.32,0.26,0.3,0.39,0.59c0.15,0.39-0.35,0.37-0.49,0.69
		c-0.34,0.77,0.27,1.16-0.2,1.67c-0.17,0.52-0.96,1.02-1.57,0.79c-0.03,0.03-0.06,0.07-0.1,0.1c0.15,0.94,1.09,1.15,1.57,1.76
		c0.12,0.16-0.01,0.38,0.1,0.59c0.1,0.18,1.81,1.27,2.06,1.37c0.33,0.07,0.66,0.13,0.98,0.2c0.7,0.31,1.28,0.88,1.86,1.28
		c0.74,0.5,1.72,0.5,2.45,0.98c0.96,0.64,0.8,1.59,1.77,2.06c-0.06,0.17-0.02,0.09-0.1,0.2c0.07,0.65,2.3,2.7,2.84,3.04
		c-0.03,0.72-0.71,0.93-1.18,1.18c0.07,0.1,0.13,0.2,0.2,0.29h0.29c0.06,0.54,0.29,0.56,0.29,0.88c0.46,0.2,0.64,0.51,1.18,0.59
		c0.44,2.58-1.88,2.6-3.43,3.73c-0.19,0.14-0.15,0.4-0.29,0.59c-0.12,0.15-0.47,0.15-0.59,0.29c-0.23,0.28,0.1,0.48-0.1,0.79
		c-0.24,0.38-1.3,1.16-1.77,1.37c0.44,0.87-0.07,0.46-0.2,1.08c0.03,0.29,0.07,0.59,0.1,0.88c0.57,0.28,1.31,0.4,1.96,0.69
		c1.31,0.57,2.27,1.51,4.02,1.67c0.03,0.03,0.07,0.07,0.1,0.1c-0.11,0.22-0.14,0.15-0.29,0.29c-0.07,0.17,0.19,0.21-0.1,0.49
		c0.14,0.28,0.35,0.33,0.69,0.39c-0.1,0.17-0.13,0.16-0.2,0.39c0.15,0.13,0.21,0.18,0.29,0.39c0.49,0.06,0.99,0.13,1.48,0.21
		c23.26-4.47,44.5-14.62,62.21-28.95c0.36-1.63,0.68-3.28,0.76-3.54c0.07-0.23-0.12-0.27-0.1-0.39c0.04-0.25,2.07-4.05,2.26-4.22
		c-0.02-0.25-0.04-0.33-0.1-0.49c-0.49,0.05-0.56,0.17-1.08,0.2c0-0.65-0.06-1.09,0-1.37c0.2-0.94,1.11-1.53,1.18-2.84
		c-0.49-0.01-0.57-0.05-0.78-0.29c-0.37-0.48,0.41-1.84,0.78-2.55c0.28-0.52,0.86-0.97,1.18-1.47c0.44-0.7,0.61-1.47,1.08-2.16
		c0.68-1.01,1.52-2.06,2.26-3.04c0.36-0.48,0.93-0.88,1.27-1.37c1.98-2.82,3.52-5.83,5.5-8.63c1.05-1.49,2.14-3.04,3.24-4.51
		c0.56-0.75,1.36-1.45,1.86-2.26c2.19-3.49,3.93-7.26,5.59-11.28c0.45-1.08,0.5-2.31,0.88-3.43c0.81-2.37,1.76-4.86,2.45-7.36v-1.96
		c0.11-0.38,0.63-0.71,0.49-1.28c-0.17-0.68-0.54-1.88-0.1-2.55v-0.39c-1.3,0.3-0.86,0.7-1.37,1.67c-0.32,0.61-1.01,1.03-1.37,1.57
		c-0.07,0.2-0.13,0.39-0.2,0.59c-0.33,0.49-0.85,0.75-1.37,1.08c-0.51,0.32-0.66,1.15-1.08,1.57c-0.29,0.29-0.6,0.27-0.98,0.49
		c-0.62,0.35-1.19,2.16-1.77,2.75c-0.31,0.31-1.05,0.2-1.37,0.49c-0.41,0.37-0.99,1.56-1.37,2.06c-0.29,0.38-0.85,0.62-1.18,0.98
		c-0.86-0.02-1.1-0.3-1.67-0.49c-0.04-0.21-0.09-0.62-0.2-0.79c-0.25-0.1-1.08,0.28-1.28,0.59h-0.2c0.11-0.58,0.77-1.26,1.18-1.57
		c0-1.25-0.52-1.25-0.88-2.06c-0.62,0.04-0.91,0.07-1.38,0.2c-0.1-0.23-0.19-0.46-0.29-0.69c-0.94-0.32-1.91-0.16-2.26-1.18
		c-0.75-0.06-0.79,0.06-1.47-0.2c-0.13,0.03-0.55,0.13-0.69,0.1c-0.74-0.18-1.8-0.65-2.65-0.78c-0.29-1.56-1.41-4.39-2.55-5
		c-0.35-0.19-0.68-0.08-0.98-0.29c-0.42-0.29-0.22-0.58-0.78-0.79c-0.24-0.17-0.67-0.2-1.08-0.2c-0.06-0.63-0.35-0.66-0.49-1.08
		c-0.33-1-0.05-2.06-0.49-2.75v-1.27c-0.13-0.31-0.44-0.19-0.69-0.39c-0.2-0.16-0.73-1.45-0.79-1.86c-0.83-0.33-1.43-0.44-1.86-1.18
		c-0.41,0.08-0.47,0.23-0.79,0.39c-0.14-0.19-0.38-0.36-0.59-0.49c0.03-0.2,0.07-0.39,0.1-0.59c-0.43-0.18-0.47-0.34-0.79-0.59
		c0-0.46-0.04-1.03-0.1-1.18c-0.06-1.1-0.74-0.82-1.27-1.37c-0.16-0.17-0.16-0.49-0.3-0.69c-0.32-0.45-0.86-0.84-1.18-1.27
		c-0.75-1.04-1.79-1.88-2.45-2.94c-0.07-0.3-0.13-0.59-0.2-0.88c-0.07-0.15-0.39-0.27-0.49-0.39c-0.03-0.2-0.07-0.39-0.1-0.59
		c-0.16-0.1-0.33-0.2-0.49-0.29c-0.25-0.36-0.24-0.84-0.49-1.18c-0.39-0.53-1.65-0.96-2.16-1.47c-0.6-0.6-1.01-1.63-1.47-2.35h-0.3
		v-0.49c0.16,0.05,2.04,1.19,2.16,1.37c0.2,0.31,0.06,0.88,0.29,1.18c0.22,0.29,0.75,0.3,1.08,0.49c0.12,0.07,0.1,0.31,0.2,0.39
		c0.4,0.36,1.23,0.6,1.77,0.59c0.05-0.43,0.36-0.89,0.2-1.47c-0.06-0.19-0.28-0.37-0.2-0.78c0.05-0.23,0.24-0.8,0.2-1.08
		c-0.13-0.86-0.38-1.84,0.1-2.45v-0.1c0.42,0.54,0.43,3.86,0.2,4.51c0.06,0.03,0.13,0.07,0.2,0.1c0.03,0.03,0.07,0.07,0.1,0.1
		c0.12-0.22,0.26-0.3,0.39-0.49c0.7,0.08,1.41,0.27,1.77,0.69c0.19,0.22,0.16,0.52,0.39,0.69c0.14,0.1,0.4,0.05,0.49,0.2
		c0.11,0.17-0.05,0.37,0.1,0.49c0.2,0.07,0.39,0.13,0.59,0.2c0.49,0.35,1.36,1.25,1.57,1.86c0.2,0.03,0.39,0.07,0.59,0.1
		c0,0.27,0,0.45,0.1,0.59c0.19,0.32,0.3,0.09,0.59,0.29v0.1c0.24,0.24,0.59,0.62,0.79,0.88h0.29c0.05,0.32,0.17,0.62,0,0.88
		c0.06,0.24,0.95,1.19,1.18,1.28c0.38,0.17,1.56-0.06,2.16,0.39c0.27,0.21,2.17,2.66,2.26,2.94c-0.03,0.56-0.07,1.11-0.1,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39c0.26,0.39,0.08,0.78,0.3,1.27c0.31,0.71,1.25,1.12,1.67,1.77c4.21,0,3.18,3.81,6.67,4.51
		c0.06,0.27,0.24,0.5,0.29,0.69c0.18,0.61-0.29,1.11,0,1.67c0.13,0.1,0.26,0.2,0.39,0.29c0.06,0.29,0.13,0.59,0.2,0.88
		c0.1,0.07,0.2,0.13,0.29,0.2c0.19,0.48-0.25,0.86,0,1.28c0.2,0.53,0.43,0.21,0.79,0.49c0.28,0.34,0.18,0.84,0.39,1.28
		c0.18,0.36,0.65,0.83,0.79,1.17c0.2,0.53-0.23,0.84,0,1.38c0.19,0.45,0.7,0.5,0.49,1.18c0.44-0.1,0.23-0.25,0.49-0.39
		c0.26-0.03,0.52-0.07,0.78-0.1c0.49-0.29,0.69-0.88,1.08-1.28c0.25-0.25,0.68-0.29,0.88-0.59c0.55-0.84,0.79-2.16,1.47-2.84
		c0.49-0.5,1.24-0.71,1.67-1.28c0.69-0.92,1.19-1.87,1.86-2.85c0.43-0.36,0.85-0.72,1.28-1.08c0.68-0.99,0.79-2.39,1.47-3.34
		c0.33-0.33,0.66-0.65,0.98-0.98c0.25-0.35,0.24-0.79,0.49-1.18c0.28-0.42,0.89-0.75,1.18-1.18c0.34-0.5,0.4-1.03,0.69-1.57
		c0.15-0.3,0.6-0.73,0.69-1.08c0.06-0.25-0.17-0.62-0.2-0.79c-0.09-0.47,0.12-1.31,0.29-1.67c0.41-0.84,1.1-1.6,1.57-2.35
		c0.26-0.42,0.24-0.84,0.49-1.28c0.36-0.62,1.18-0.88,1.47-1.57c0.35-0.83-0.2-1.78,0.2-2.65c0.23-0.5,0.98-0.96,1.18-1.47
		c0.07-0.88,0.13-1.77,0.2-2.65c0.21-0.76,0.9-1.29,1.08-1.96c0.23-0.89-1.34-3.68,0.1-4.02v-0.29h0.29c0.03-0.03,0.07-0.07,0.1-0.1
		c0-0.37,0.14-0.96,0.1-1.18c-0.07-0.37-0.46-0.63-0.39-1.18c0.1-0.78,0.83-3.98,0-4.91v-0.1c-0.07,0.07-0.13,0.13-0.2,0.2
		c-0.65-0.07-1.35-0.74-1.67-1.18c-0.51,0.04-1.64,0.7-1.96,1.08c-1.76-0.04-2.22-1.77-2.75-3.04c-0.25-0.61-0.02-1.32-0.39-1.76
		c-0.03-0.03-0.06-0.07-0.1-0.1c-0.21,0.55,0,1.33-0.2,2.06c-0.33,1.25-0.36,2.94-0.79,4.22c-0.12,0.36-0.47,0.7-0.59,1.08
		c-0.27,0.06-0.51,0.1-0.88,0.1c-0.12,0.32-0.15,0.59-0.39,0.79c-0.31,0.15-0.57-0.24-0.98-0.1c-0.22,0.08-0.23,0.39-0.39,0.49
		c-0.36,0.22-0.66-0.14-0.98,0.29c-0.65-0.13-0.91-1.46-1.18-1.96c-0.36-0.1-0.72-0.2-1.08-0.29c-0.69-0.1-1.37,0.63-2.06,0.2
		c-0.51-0.21-0.55-0.9-0.88-1.28c-0.3-0.2-0.67-0.05-1.08-0.2c-0.33-0.12-1.74-1.34-1.86-1.67c-0.25-0.35,0-3.49,0.2-3.92
		c0.16-0.36,0.53-0.47,0.69-0.88c0.21,0.05,0.35,0.09,0.49,0.2c0.5,0.34,0.5,0.94,0.88,1.37c0.22,0.33,0.63,0.1,0.98,0.29
		c0.8,0.44,1.08,1.74,1.86,2.26c0.54,0.54,1.02-0.37,1.28-0.78c0.08-0.07,0.22-0.13,0.29-0.2c0.51,0.1,0.41,0.45,0.78,0.59h0.88
		c0.12,0.06,0.15,0.34,0.2,0.49c0.55-0.09,0.81-0.16,1.47-0.2c0.12-0.3,0.25-0.62,0.39-0.88c0.2,0.04,0.19,0.02,0.29,0.1
		c0.65-0.19,0.5-0.69,1.28-0.59c0.37-0.95,0.86-2.36,0.98-3.63c0.03-0.03,0.06-0.07,0.1-0.1h0.39c0.04,0.02,1.43,2.23,1.47,2.35
		c0.47-0.07,1.5-0.56,1.67-0.78c0.13-0.17,0.2-0.5,0.39-0.59c0.16,0.03,0.33,0.07,0.49,0.1c0.13-0.26,0.26-0.52,0.39-0.79
		c0.35-0.3,0.71-0.5,1.08-0.78c0.18-0.14,0.22-0.45,0.39-0.59c0.42-0.34,1.07-0.33,1.37-0.79c0.07-0.23,0.13-0.46,0.2-0.69
		c0.06-0.09,0.34-0.18,0.39-0.29c0.03-0.33,0.07-0.65,0.1-0.98c0.57-0.93,1.61-1.82,2.06-2.85c0.36-0.82,0.39-1.75,0.88-2.45v-0.2
		h0.2c0.27,0.29,0.43,0.35,0.49,0.88c0.26-0.12,0.2-0.19,0.49-0.29c0.4,0.89,0.75,1.31,1.57,1.77c0.09,0.05,0.32,0.03,0.49-0.1
		c0.79,0.17,0.49,1.21,1.08,1.57c0.5,0.3,1.08-0.09,1.57,0.59c0.23-0.02,0.28-0.02,0.39-0.1c0.45-0.18,0.35-0.52,0.59-0.88
		c0.08,0.02,0.11-0.02,0.2,0.29c0.24-0.11,0.36-0.28,0.49-0.49c0.62,0.18,0.28,0.61,0.49,1.18c0.08,0.22,0.39,0.46,0.49,0.69
		c0.34,0.79,0.35,1.54,0.69,2.35c0.32,0.78,0.42,1.85,0.79,2.75c1.26,3.13,2.3,6.6,2.65,10.69h0.08c0.19-2.97,0.29-5.96,0.29-8.98
		c0-78.28-63.46-141.73-141.73-141.73c-0.56,0-1.12,0.01-1.67,0.02c0.7,0.43,2.23-0.1,3.13,0.09c0.97,0.21,2.14-0.04,3.24,0.2
		c2.14,0.46,4.64,0.42,6.87,0.39c-0.1,0.07-0.09,0.06-0.29,0.1c0.56,0.39,1.54,0.02,2.35,0.2c1.86,0.29,3.73,0.59,5.59,0.88
		c-0.14,0.09-0.32,0.1-0.59,0.1c0.03,0.03,0.07,0.07,0.1,0.1c1.14,0.83,3.82,0.39,5,1.18c0.26,0.16,0.26,0.51,0.49,0.69
		c0.56,0.16,1.11,0.33,1.67,0.49c0.86,0.36,1.95,1.11,2.85,1.37c0.16-0.03,0.33-0.07,0.49-0.1c0.46,0.09,0.96,0.37,1.47,0.49h1.08
		c1.13,0.4,2.19,0.85,3.33,1.28c-0.11,0.08-0.16,0.08-0.39,0.1c0.03,0.03,0.07,0.07,0.1,0.1c0.79,0.57,2.42,0.15,3.24,0.69h0.2
		c-0.03,0.23-0.05,0.24-0.1,0.39c-1.07,0.05-2.53-0.71-3.92-0.29c-0.23,0.07-0.28,0.22-0.59,0.29c0.15,0.29,0.58,0.46,0.88,0.59
		c-0.13,0.16-0.06,0.11-0.3,0.2c0.47,1.24,2.01,0.35,3.04,0.78c0.32,0.14,0.81,0.52,1.18,0.69c-0.27,0.27-0.37,0.23-0.88,0.39
		c0.31,0.8,1.2,1.21,1.77,1.77c-0.03,0.03-0.07,0.06-0.1,0.1c-0.61-0.04-1.51-0.4-1.86-0.2h-0.2c0.07,0.07,0.13,0.13,0.2,0.2v0.1
		c-0.19-0.02-2.7-0.7-2.84-0.78c-0.63-0.02-1.42-0.13-1.47,0.2c-0.74,0-0.59,0.07-0.88,0.29c0.37,0.51,0.75,0.81,1.37,1.08v0.2
		c-0.55-0.14-1.44-0.52-2.06-0.1c-0.43,0.06-0.34,0.12-0.59,0.29c0.51,1.11,2.74,1.1,3.83,1.67v0.39h0.49
		c0.27,0.29,0.67,0.65,0.98,0.88v0.1c-0.28-0.08-0.34-0.1-0.49-0.29h-0.29c0.1,0.28,0.17,0.35,0.39,0.49
		c-0.1,0.08-0.03,0.04-0.2,0.1c0.13,0.17,0.37,0.23,0.49,0.39v0.29c0.29,0.1,0.59,0.2,0.88,0.29c0.35,0.31,0.33,0.86,0.59,1.28
		c0.36,0.23,0.72,0.46,1.08,0.69c-0.07,0.07-0.13,0.13-0.2,0.2c0.26,0.25,0.61,0.35,0.88,0.59c-0.03,0.06-0.07,0.13-0.1,0.2
		c0.1,0.1,0.2,0.2,0.29,0.29c0.06-0.03,0.13-0.07,0.2-0.1c0.32,0.07,0.28,0.24,0.39,0.49c0.2-0.04,0.19-0.02,0.29-0.1
		c0,0,0.39-0.02,0.2-0.1c-0.03-0.03-0.06-0.07-0.1-0.1c0.71,0.09,1.25,0.83,1.77,1.18c-0.01,0.44-0.04,1.21-0.1,1.37
		c0.17,0.29,2.76,1.07,3.24,1.18c0.36-0.37,1.23-0.52,1.77-0.1h0.2c-0.02,0.25-0.04,0.33-0.1,0.49c-0.46-0.03-0.92-0.07-1.37-0.1
		c-0.34,0.1-1.07,0.44-1.37,0.29c-0.24,0.12-0.15,0.17-0.39,0.29c0.07,0.27,0.14,0.42,0.29,0.59v0.1c-0.42,0.01-1.11,0.07-1.37-0.1
		c-0.35,0-0.66,0.02-0.88,0.1c0.06,0.17,0.02,0.1,0.1,0.2c0.47,0.3,1.76,0.21,2.35,0.59c0.58,0.36,0.51,1.32,1.18,1.57v0.2
		c-1-0.28-1.59-1.07-2.45-1.47c-0.73-0.33-0.77,0.27-1.47,0.1c-0.54-0.13-0.92-0.4-1.77-0.39c0.05,0.78,0.44,0.55,0.88,0.88
		c0.2,0.15,0.33,0.72,0.69,0.98c0.37,0.27,0.79,0.33,1.18,0.59c0.32,0.21,1.04,0.67,1.28,0.98c0.44,0.59,0.49,1.33,1.08,1.77
		c0.34,0.25,0.86,0.56,1.28,0.69c0.26,0.03,0.52,0.07,0.79,0.1c0.32,0.17,0.59,0.59,0.88,0.78c0.32,0.21,0.69,0.26,0.98,0.49
		c0.48-0.04,0.4-0.01,0.39-0.29c0.43,0.01,2.06,0.21,2.35,0.39c0.2,0.2,0.39,0.39,0.59,0.59v0.3c-0.61-0.03-0.87-0.17-1.37-0.3
		c-0.1-0.02-4.02,0.34-4.41,0.49c-0.43,0.16-0.92,0.59-1.37,0.78c-0.35,0.15-1.57-0.15-1.77-0.29h-0.69c0.07,0.2,0.13,0.39,0.2,0.59
		c0.58,0.23,1.33,0.31,1.86,0.39c0.23-0.03,0.46-0.07,0.69-0.1c0.79,0.21,1.49,0.85,2.16,1.18c-0.25,0.37-0.9,0.03-1.28,0.29
		c-0.31,0.22-0.45,0.81-0.59,1.18c-0.5,0.09-1.41,0.37-1.86,0.29c-0.29,0.29-0.59,0.59-0.88,0.88c-0.41,0.79,0.16,1.49-0.79,1.77
		c0.03,0.69,0.27,1.57-0.1,2.06c-0.2,0.13-0.72,0.06-0.79,0.1c-0.31,0.15-0.24,0.48-0.19,0.98c-0.03,0.03-0.07,0.07-0.1,0.1
		c-0.9-0.16-1.4-1.18-2.36-1.18c-1.09,0-1.59,0.58-2.84,0.59c0.33,0.37,0.93,0.21,1.37,0.49c0.77,0.49,0.89,1.57,1.47,2.26
		c0.35,0.42,0.8,0.08,1.28,0.39c0.6,0.39,0.64,1.2,1.08,1.77v0.1c-0.42-0.04-0.61-0.26-0.88-0.29c-0.28-0.04-0.46,0.26-0.59,0.29
		c-0.23-0.03-0.46-0.07-0.69-0.1c-0.11,0.36,0.17,0.78,0,1.28c-0.17,0.16-0.33,0.33-0.49,0.49c-0.23,0.51,0.07,0.76-0.29,1.08
		c0.08,0.86,1.18,1.32,1.77,1.67c-0.07,0.27-0.12,0.73-0.2,0.88c-0.36,0.17-2.71-0.12-3.04-0.39c-0.29,0-0.54,0-0.69,0.1
		c-0.09,0.22,0.12,0.48-0.2,0.69c0.27,0.58,1.12,0.68,1.57,1.08c0.41-0.06,0.48-0.18,0.78-0.29c0.23,0.26,0.47,0.51,0.79,0.69
		c-0.03,0.38-0.11,0.57-0.3,0.79c-0.16,0.15-0.16-0.09-0.39-0.1c-0.23,0.07-0.46,0.13-0.69,0.2c-0.52-0.1-0.96-0.62-1.37-0.78
		c-0.43-0.18-0.68,0.19-0.69,0.2c-0.34,0.13-0.53-0.16-0.88-0.2c-0.04-1.43-0.77-1.03-1.37-1.77c-0.19-0.09-0.31-0.66-0.2-0.88
		c-0.13-0.71-0.88-0.73-1.47-0.98c-0.76-0.32-1.91-0.81-2.84-1.18c-0.05-0.12-0.12-0.3-0.2-0.39v-0.1c1.05,0.67,3.99,0.86,5.49,0.49
		c0.86-0.21,1.53,0.3,2.26-0.1c0.52-0.29,0.79-0.94,1.18-1.37c0.01-0.75,0.03-1.46-0.29-1.86c-0.22-0.3-0.24-0.1-0.59-0.29
		c-0.26-0.29-0.52-0.59-0.79-0.88c-0.4-0.26-0.98-0.11-1.47-0.29c-0.61-0.22-1.44-0.08-2.45-0.39c-1.3-0.4-2.71-1.17-4.22-0.69
		c-0.51,0.16-0.71-0.33-1.08-0.2c-0.03,0.1-0.06,0.2-0.1,0.29c-0.29,0.13-0.84-0.15-0.98-0.1c-0.25-0.15-0.2-0.21-0.2-0.59
		c-0.38-0.11-0.67,0.03-0.98-0.2c-0.65,0-0.7,0.2-0.69,0.59c-0.55-0.08-1.33-0.07-1.86-0.1c0.19-0.33,0.26-0.22,0.59-0.2
		c-0.15-0.44-0.05-0.51,0.2-0.79c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.56-0.68-1.83-0.37-2.36-0.78c-0.25,0.01-0.36,0.01-0.49,0.1
		c-0.11,0.16-0.11,0.48-0.1,0.78c-0.16-0.21-0.2-0.51-0.2-0.88c-0.19-0.1-0.27-0.14-0.39-0.29c-0.33,0.03-0.66,0.07-0.98,0.1
		c-0.02,0.23-0.02,0.28-0.1,0.39c-0.15,0.26-0.42,0-0.59,0.49h-0.29c0.06-0.17,0.02-0.1,0.1-0.2c-0.08-0.34-0.14-0.27-0.29-0.49
		c-0.43,0.03-0.4,0.09-0.69,0.2c0.03,0.16,0.07,0.33,0.1,0.49c-0.28-0.24-0.33-0.16-0.59-0.39c-0.09,0.14-0.1,0.32-0.1,0.59
		c-0.13-0.13-0.26-0.26-0.39-0.39h-0.2c0.05,0.51,0.33,0.61,0.69,0.78v0.2c-0.47-0.11-0.92-0.29-1.27-0.2
		c-0.04,0.01-0.62,0.44-0.88,0.59c0.1,0.13,0.2,0.26,0.29,0.39c0.2-0.04,0.19-0.02,0.29-0.1h0.29c-0.12,0.26-0.19,0.2-0.29,0.49
		c-0.28-0.09-0.71-0.07-0.88-0.1c-0.03,0.03-0.07,0.07-0.1,0.1c0.03,0.35,0.01,0.33,0.2,0.49v0.2c-0.46-0.1-0.41-0.26-0.98-0.29
		c0.04,0.4-0.02,0.37,0.29,0.49v0.29c-0.31-0.15-0.21-0.26-0.39,0.1h-0.2c0.08-0.3,0.19-0.38,0.1-0.59v-0.39
		c-0.08,0.06-0.13,0.26-0.2,0.29c-0.06-0.06-0.13-0.13-0.2-0.2c-0.41-0.06-0.87,0.25-1.18,0.39c-0.04,0.26,0.13,0.57,0,0.88
		c-0.13,0.29-0.24-0.07-0.3,0.59c-0.63,0.05-0.61,0.32-0.98,0.59c0,0.29-0.01,0.54,0.1,0.69c0.12,0.22,0.17,0.2,0.39,0.29
		c-0.04,0.2-0.02,0.19-0.1,0.29v0.2c-0.19-0.11-0.41-0.48-0.49-0.69c-0.26,0.09-0.26,0.1-0.39,0.29c-0.14-0.22-0.13-0.6-0.29-0.79
		v-0.1c-0.27,0.23-0.49,0.59-0.59,0.98c-0.3-0.01-0.27-0.07-0.39,0c-0.34,0.13-0.36,0.36-0.59,0.59c0.02,0.45,0.01,0.42,0.3,0.59
		c-0.09,0.52-0.42,0.58-0.98,0.59c-0.17,0.39-0.39,0.62-0.69,0.88v0.49c0.46-0.25,0.84-0.74,1.28-0.98
		c0.53-0.29,0.83-0.04,1.27-0.39h0.2c-0.07,0.52-0.35,0.84-0.69,1.08c0.03,0.39,0.18,0.52,0.2,0.59c-0.03,0.57-0.12,0.32-0.29,0.49
		c-0.71,0.56-0.8,1.86-1.77,2.16c0.06,0.31,0.02,0.24,0.2,0.39v0.2h-0.39c-0.01,0.66-0.12,1.21-0.59,1.47
		c-0.02,0.88,0.12,0.58,0.49,0.88c0.09,0.15,0.02,0.69,0,0.98c-0.43,0.06-0.49,0.11-0.59,0.49c-0.31-0.06-0.29-0.09-0.49-0.2
		c-0.15,0.15-0.4,0.29-0.59,0.39c0.04,0.2,0.02,0.19,0.1,0.29v0.2c0.37-0.04,0.37-0.08,0.59-0.2c0.03,0.03,0.07,0.07,0.1,0.1
		c-0.18,0.43-0.61,0.57-0.88,0.88c-0.06,0.2-0.13,0.39-0.2,0.59c-0.36,0.49-0.88,1.14-1.08,1.77h-0.1
		c-0.24-0.36-0.62-0.47-0.88-0.79h-0.2c-0.1,0.28-0.13,0.75-0.29,0.98c-0.12,0.25-0.26,0.15-0.59,0.2c-0.07,0.35-0.16,0.46,0.1,0.69
		c-0.46,0.62-1.58,0.86-2.06,1.18c-0.33,0.22-0.35,0.67-0.59,0.98c-0.14,0.19-0.94,0.59-1.18,0.79c-0.17,0.28-0.29,0.85-0.59,1.27
		c0.01,0.44-0.04,0.46,0.29,0.59c-0.07,0.38-0.06,0.38-0.39,0.49c-0.07,2.15,0.83,3.9,0.69,5.98c0.12,0.24,0.49,0.26,0.59,0.49
		c0.03,0.36,0.07,0.72,0.1,1.08c0.2,0.53,1.15,1.16,1.77,1.28c0.18,0.88,0.83,0.49,1.57,0.59c1.56,0.22,2.73-2.05,3.63-2.94
		c0.03-0.02,1.05-0.37,1.28-0.39c0-0.27,0-0.45-0.1-0.59v-0.49h0.1c0.2,0.77,0.75,1.15,1.08,1.77c0.21,0.4,0.2,0.87,0.2,1.18
		c0.21,0.37,0.61,0.86,0.78,1.27c0.12,0.28,0.04,0.55,0.2,0.79c0.63,0.97,1.75,1.78,2.26,2.84h0.39v0.49
		c-0.23,0.02-0.28,0.02-0.39,0.1c-0.12,0.08,0.08,0.18,0.2,0.29c-0.11,0.08-0.16,0.08-0.39,0.1c0.06,0.22,0.07,0.26,0.19,0.39
		c-0.09,0.15-1.63,0.77-1.96,0.78c-0.06,0.33-0.11,0.41-0.29,0.59c-0.13,0.09-0.24,0.09-0.49,0.1c0.19,0.54,0.48,0.96,0.49,1.77
		c0.17-0.06,0.1-0.02,0.2-0.1c0.68,0,0.71,0.15,1.08,0.39c-0.09,0.24-0.11,0.15-0.2,0.39c-0.24-0.14-0.12,0.02-0.2-0.29
		c-0.28,0.11-0.61,0.18-0.98,0.2c-0.06,0.17-0.02,0.1-0.1,0.2c0.06,0.48,0.69,0.96,1.18,0.88c0.07-0.01,0.28-0.36,0.59-0.2
		c0.04,0.02,0.1,0.24,0.19,0.29c0.12-0.42,0.18-1.25,0.88-1.37c-0.13-0.24-0.33-0.27-0.49-0.49c-0.05-0.22,0.36-0.36,0.2-0.79
		c-0.09-0.24-0.22,0.08-0.29-0.49c0.4,0,0.51,0.01,0.69-0.2h0.1c-0.11-0.23-0.09-0.18-0.29-0.29v-0.59c0.03,0.03,0.06,0.07,0.1,0.1
		c0.24,0.11,0.28,0.25,0.49,0.39c-0.01,0.46-0.02,0.71-0.2,0.88v0.2c0.37-0.07,0.81,0.1,1.18,0c0.62-0.17,0.61-0.33,1.47-0.29
		c0.14-0.83-0.3-1.17,0.1-1.86h0.49c0.02-0.23,0.02-0.28,0.1-0.39c0.22-0.16,1.12-0.25,1.47,0c0.23-0.03,0.24-0.05,0.39-0.1
		c0.14-0.57,0.36-1.09,0.39-1.77c0.25,0.15,0.37,0.83,0.39,1.18h0.2c0.02-0.56,0.16-2.18,0.39-2.55v-0.98h-0.2
		c-0.1,0.52-0.2,1.05-0.29,1.57c-0.17,0.06-0.1,0.02-0.2,0.1c-0.17-0.31,0.15-0.48,0-0.88c-0.33-0.92,0.16-3.06-0.29-4.32
		c0.48-0.23,0.73-0.56,1.37-0.59c0.17-0.61,0.92-0.59,1.18-1.08c0.3-0.55-0.12-1.33,0.39-1.67c-0.04-0.23-1.74-2.18-1.96-2.26v-0.1
		c-0.31,0.16-0.12,0.06-0.1,0.39c-0.43-0.27-1.03-0.67-1.47-0.49c-0.51-0.58-0.68-1.58-0.98-2.35c0.25-0.06,0.05-0.03,0.29,0
		c0.03-0.7-0.11-0.48-0.29-0.98c0.1-0.48,0.11-0.86-0.1-1.28c0.33-0.29,1.68-2.85,1.67-3.04c0.2-0.32,0.37-0.1,0.69-0.29
		c0.23-0.15,0.04-0.36,0.2-0.59c0.14-0.19,0.54-0.16,0.69-0.39c0.38-0.61,0.11-1.35,0.69-1.77c-0.05-0.58-0.46-0.87-0.78-1.18
		c0.08-0.52,0.32-1.09,0.59-1.47c0.15-0.24,0.16-0.23,0.39-0.1c0.31-0.38,0.3-0.86,0.78-1.08c0.33-0.2,0.34-0.02,0.59,0.2
		c0.15,0.13,0.09-0.17,0.1-0.2c0.1,0.03,0.2,0.07,0.29,0.1c0.06-0.16,0.08-0.23,0.1-0.49c0.52,0.17,0.95,0.26,1.47,0.49
		c0.15,0.4,0.23,0.89,0.49,1.18c-0.06,0.17-0.02,0.1-0.1,0.2v0.1c-0.29-0.11-0.27-0.14-0.39-0.39h-0.39
		c0.1,0.28,0.17,0.35,0.39,0.49c-0.16,0.32-0.05,0.76-0.29,1.28c-0.22,0.48-0.55,0.75-0.59,1.47c-0.44,0.09-0.27,0.12-0.69,0.1
		c-0.12,0.65-0.22,1.27-0.59,1.67c-0.14,0.21-0.63,0.29-0.88,0.1h-0.2c0.08,0.6,0.49,0.74,0.2,1.08c0.09,0.47,0.33,1.28,0.59,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39v0.39c0.22,0.53,0.66,0.92,0.79,1.37c-0.03,0.13-0.07,0.26-0.1,0.39c0.06,0.03,0.13,0.07,0.2,0.1
		c0.28,0.81-0.32,1.27,0.2,1.77c-0.1,0.25-0.32,0.56-0.49,0.78c-0.13,0.08-0.52-0.04-0.88,0.1c-0.22,0.08-0.53,0.3-0.88,0.49
		c0.12,1.2,1.53,0.77,2.06,1.28h0.1c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c0.23,0.14,0.44,0.27,0.59,0.49c0.55-0.18,0.83-0.13,1.47-0.1
		c0.38-0.24,0.37-0.22,0.98-0.2c0.04-0.2,0.03-0.19,0.1-0.29c0.17-0.08,0.96,0.06,1.47-0.2c0.1-0.05,0.53-0.56,0.59-0.59
		c0.19-0.11,0.43,0.13,0.49,0.1c0.19-0.1,0.14-0.46,0.29-0.59c0.29-0.24,0.74-0.08,1.08-0.29c0.59-0.36,1.17-0.82,1.67-1.27
		c0.25,0.23,1.67-0.48,1.86-0.98c0.26,0.13,0.36,0.44,0.49,0.69c0.7,0.03,0.95,0.18,1.77,0c0.1,0.08,0.02,0.04,0.2,0.1
		c0.03,0.16,0.07,0.33,0.1,0.49c-0.3-0.01-0.52-0.03-0.59,0c-0.54,0.38,0.19,0.69-0.79,0.59c-0.07,0.24-0.07,0.25,0,0.49
		c-0.31-0.06-0.24-0.02-0.39-0.2h-0.2c0.06,0.5,0.36,0.66,0.2,0.98v0.2c-0.85,0.03-2.29,0.36-2.85,0c-0.48,0.01-0.58,0.09-0.88,0.2
		v0.29c-0.46-0.01-0.62,0.17-0.78,0.1c-0.21,0.08-0.2,0.1-0.2,0.1c-0.2,0.36-0.75,0.35-1.08,0.59c-0.58,0.41-0.36,0.99-0.98,1.28
		c0.22,0.31,0.3,0.12,0.49,0.29c0.18,0.15,0.16,0.49,0.3,0.69c0.36,0.51,0.95,0.72,1.57,0.98c0.07-0.07,0.13-0.13,0.2-0.2v-0.29h0.3
		c0.06,1.45,0.73,2.12,0.78,3.34c-0.28,0.27-0.43,0.58-0.78,0.79c-0.55,0.3-0.88-0.61-1.18-0.88c-0.45-0.42-1.13-0.22-1.27-0.98
		c-0.45,0.15-0.94,0.49-1.28,0.78c-0.35,0.5-0.54,3.4-0.2,4.12c0.36,0.75,1.28,2.24,0.49,3.24c-0.2,0.58-0.7,0.6-1.28,0.78
		c0.13,0.46,0.28,0.88-0.1,1.28c-0.21,0.58-0.71,0.48-1.18,0.78c-0.8-0.1-0.98-0.7-1.28-1.27c-0.97,0.02-3.04,0.9-3.43,1.37
		c-0.18,0.22-0.17,0.61-0.39,0.79c-0.9,0.69-2.34,0.61-3.04,1.47c-0.52-0.04-1.03-0.36-1.18-0.78c-0.3,0.1-0.37,0.21-0.69,0.29
		c-0.03-0.03-0.06-0.06-0.1-0.1c0.04-0.2,0.03-0.19,0.1-0.29c0.2-0.11,0.18-0.05,0.39,0v-0.1c0.09-0.27-0.2-0.38-0.1-0.79
		c-0.25-0.09-0.45-0.07-0.59-0.29c-0.48,0.09-0.68,0.44-0.88,0.79c-0.23-0.02-0.28-0.02-0.39-0.1c-0.65,0.13-0.54,0.7-0.98,0.98
		c-0.3,0.19-0.58,0-0.79,0.1c-0.5,0.24-0.34,0.59-1.27,0.59c0.08-0.49,0.28-1.02,0.49-1.37c-0.07-0.07-0.13-0.13-0.2-0.2h-0.39v0.39
		c-0.07,0.06-0.13,0.13-0.2,0.2c-0.59-0.01-0.97-0.2-1.18-0.29c-0.44-0.21-0.52-0.8-0.49-1.47c-0.26-0.13-0.33-0.24-0.69-0.29
		c0.03-0.13,0.07-0.26,0.1-0.39c0.54,0.15,0.42,0.51,1.08,0.59c-0.1,0.08-0.02,0.04-0.2,0.1c0.14,0.39,0.3,0.44,0.69,0.29
		c0.07,0.12,0.11,0.2,0.2,0.29c0.03,0.03,0.06,0.06,0.1,0.1c0.08-0.21,0.16-0.52,0.29-0.69c-0.02-0.88-0.34-1.21-0.59-1.86
		c-0.26-0.06-0.72-0.11-1.27-0.1c0.06-0.22,0.07-0.26,0.2-0.39c0.03-0.03,0.07-0.07,0.1-0.1v0.1h0.29
		c-0.14-0.38-0.02-0.76-0.29-1.08c0.21-0.13,0.43-0.02,0.59-0.1c1.35-0.49,0.09-1.54-0.49-1.86c-0.04-0.64,0.1-0.74,0.2-1.28
		c0.1-0.58-0.39-0.99-0.2-1.37v-0.2c-0.97,0.29-1.38,0.79-1.77,1.67c-0.52,0.19-1.06,0.05-1.57,0.39c-1.4,1.09-0.08,3.34-0.59,4.22
		c0.03,0.55,0.35,0.77,0.69,0.98c-0.01,1.09-0.47,2.37,0.3,3.24c-0.12,0.7-0.45,1.02-0.79,1.47c-1.31,0.09-2.46,0.72-3.24,0.98
		c-0.83,0.28-1.65,0.05-2.35,0.59c-1.13,0.76-0.74,3.06-1.67,4.02c-0.82,0.84-1.84,1.4-2.75,2.16c-0.25,0.21-0.27,0.63-0.59,0.78
		c-0.67,0.33-1.59,0.18-2.06,0.69c-0.38,0.61-0.02,1.79-0.39,2.36c-0.81,1.21-2.91,0.33-3.24,2.45c-0.52,0.09-1.8-0.06-2.26-0.39
		c-0.4-0.24-0.1-0.43-0.29-0.79c-0.14-0.1-0.97-0.15-1.37-0.2c0.07,0.58,0.61,2.35,0.29,2.84c-0.06,0.17-0.02,0.1-0.1,0.2
		c-0.55,0.35-1.49,0.01-1.86,0.39c-0.41-0.13-0.68-0.44-0.78-0.88c-0.8-0.04-3.07,0.3-3.92,0.79c0.02,0.71,0.26,0.91,0.59,1.28
		c-0.2,0.11-0.18,0.15-0.49,0.2c0.12,0.26,0.4,0.65,0.59,0.88c0.33,0.18,0.49-0.11,0.88,0c0.08,0.02,0.7,0.31,0.78,0.39
		c0.03,0.13,0.07,0.26,0.1,0.39c0.4,0.31,0.5-0.08,0.69,0.49c0.44-0.12,0.74-0.1,1.08,0.1c0.37,0.23,0.6,1.84,0.59,2.45
		c0.96,0.19,1.52,1.91,1.77,2.94c0.43,1.81,0.07,5.04-0.88,6.67c-0.13,0.36-0.26,0.72-0.39,1.08c-0.25,0.21-0.65,0.18-0.88,0.39
		c-0.83-0.04-1.07-0.44-1.67-0.59c-0.49-0.12-0.58,0.29-0.98,0.2c-0.23-0.05-0.48-0.42-0.69-0.49c-0.93-0.31-1.52,0.45-2.45,0.2
		c-0.58-0.16-1.32-0.6-1.86-0.79H142c-0.1-0.13-0.2-0.26-0.29-0.39c-0.29,0.07-0.59,0.13-0.88,0.2c-1.1-0.11-2.54-0.26-3.24-1.08
		c-0.66,0.06-1.14,0.1-1.67,0.49c-0.22,0.16-0.31,0.46-0.59,0.59c-0.35,0.16-0.45-0.14-0.88,0c-0.33,0.11-0.69,0.5-0.98,0.69
		c0,0.76,0.25,0.59,0.39,1.18c0.02,0.1-0.21,0.53-0.1,0.78h0.2c0.11,0.23-0.09,2.83-0.2,3.34c0.03,0.56,0.07,1.11,0.1,1.67
		c-0.11,0.32-0.48,0.85-0.59,1.18c-0.38,1.09-0.49,2.08-1.08,2.94c-0.16,0.24-0.66,0.44-0.78,0.69v0.69
		c-0.1,0.3-0.37,1.04-0.59,1.28c0.06,0.52,0.2,0.68,0.69,0.78v0.59c0.26,0.03,0.52,0.07,0.78,0.1c0,1.16-0.26,3.74-0.98,4.32
		c0.03,0.03,0.07,0.06,0.1,0.1c0.21,0.09,0.26-0.05,0.49-0.1c0.79-0.18,1.78,0.38,2.06,0.78c0.55-0.15,1.27-0.78,2.16-0.49
		c0.38,0.13,0.57,0.49,1.08,0.59c0.01,0.96,0.69,2.46,1.18,2.94c0.34,0.34,0.88,0.39,1.18,0.78c0.77-0.17,0.62-0.76,1.08-1.18
		c0.38-0.34,1.02,0.02,1.57-0.2c0.25-0.1,0.5-0.5,0.79-0.59c0.64-0.2,1.46,0.06,2.06,0.19c0.42-0.03,0.85-0.06,1.28-0.1
		c0.13,0.03,0.5,0.27,0.59,0.29c0.44,0.1,0.85-0.3,1.28-0.39c0.13,0.13,0.26,0.26,0.39,0.39h0.2c0.16-0.27,0.43-0.45,0.59-0.69
		c0.27-0.4,0.28-0.92,0.59-1.28c0.27-0.32,0.73-0.32,0.98-0.69c0.64,0.08,0.9,0.08,1.57,0c0.01-0.94,0.29-1.18,0.39-1.86h0.29v-0.29
		c0.56-0.56,1.16-1.06,1.86-1.47c-0.14-0.61-0.84-0.7-1.08-1.57c-0.03-0.33-0.07-0.65-0.1-0.98c0.14-0.6,1.79-2.92,2.26-3.24
		c0.37-0.26,0.67-0.17,0.88-0.59c0.1-0.19-0.03-0.48-0.1-0.79c0.42-0.27,1.05-0.62,1.57-0.79c0.57-0.19,1.2,0,1.67-0.29
		c0.16-0.23,0.33-0.46,0.49-0.69c0.31-0.21,0.66-0.19,0.98-0.39c0.39-0.25,0.77-0.64,1.18-0.88c-0.03-0.36-0.06-0.72-0.1-1.08
		c0.1-0.03,0.2-0.07,0.29-0.1c0.06-0.13-0.42-1.18-0.49-1.28c-0.02-1.88,1.14-1.95,2.16-2.75c0.84,0.11,1.22,0.49,1.86,0.69
		c0.16,0.15,0.71-0.47,1.28-0.2c0.03,0.1,0.06,0.2,0.1,0.29c0.33,0.07,0.65,0.13,0.98,0.2c0.03,0.1,0.07,0.2,0.1,0.29
		c0.61,0.28,1.45-0.34,2.06-0.39c0.21-0.94,1.26-1.73,2.06-2.06c0.46-0.19,0.91-0.12,1.28-0.39c0.25-0.19,0.12-0.5,0.29-0.78
		c0.22-0.38,0.8-0.72,1.08-1.08c1.49,0.06,2.38,0.87,3.53,1.37c0.05,0.18,0.21,1.21,0.29,1.37c0.11,0.22,0.56,0.43,0.68,0.69
		c0.17,0.35,0.01,0.89,0.1,1.08c0.18,0.1,0.2-0.1,0.39,0c0.18,0.09,0.06,0.35,0.19,0.49c0.16,0.03,0.33,0.06,0.49,0.1
		c0.21,0.14,0.35,0.44,0.59,0.59c-0.02,0.23-0.02,0.28-0.1,0.39c0.25,0.33,0.62-0.05,1.08,0.2c0.35,0.19,0.4,0.75,0.69,0.98
		c0.23,0.06,0.46,0.13,0.69,0.2c0.17,0.11,0.17,0.33,0.29,0.49c0.2,0.25,0.52,0.3,0.79,0.49c0.14,0.11,0.17,0.38,0.29,0.49
		c0.45,0.39,0.85,0.08,1.27,0.69c0.41-0.14,0.6-0.44,0.98-0.1c1.16-0.01,1.04,0.53,1.57,1.08c0.05,0.13,0.04,0.07,0.1,0.1
		c0.63-0.03,0.76,0,0.79,0.59c0.2-0.04,0.45-0.09,0.59-0.2c1.41,0.05,0.57,0.73,0.98,1.28c0.13,0.18,0.83,0.27,1.08,0.59
		c0.26-0.09,0.26-0.1,0.39-0.29c1.09,0.21,1.53,2.86,2.26,3.63c-0.06,0.57-0.41,0.67-0.79,0.88c0.12,0.38,0.29,0.69,0,1.08
		c-0.28,0.56-0.28-0.01-0.79,0.2c-0.25,0.1-0.61,0.62-0.88,0.69c-0.2,0.05-0.68-0.2-0.98,0c-0.03,0.1-0.06,0.2-0.1,0.29
		c-0.12,0.1-0.68,0.36-0.78,0.39c-0.54,0.17-0.69-0.29-1.28,0.2c-0.97-0.05-1.07-0.58-1.96-0.49c-0.07,0.16-0.13,0.33-0.2,0.49
		c-0.43,0.02-1.93,0.1-1.38,0.98c0.35,0.95,1.14,0.39,1.96,0.79c0.46,0.22,1.05,0.76,1.57,0.98c0.37,0.16,0.95-0.08,1.37,0.1
		c0.36,0.15,0.45,0.72,0.79,0.88c0.35,0.17,1.05,0,1.37,0.2c0.12-0.07,0.45-1.13,0.49-1.28c0.12-0.42-0.48-0.78-0.59-1.08
		c-0.27-0.75,0.66-2.26,0.88-2.65c0.03-0.03,0.07-0.06,0.1-0.1c0.1,0.14,0.16,0.49,0.2,0.69c0.28,0.01,0.14,0.07,0.29,0h0.69
		c0.03-0.06,0.07-0.13,0.1-0.2c0.13-0.36,0.26-0.72,0.39-1.08c0.2-0.16,0.39-0.33,0.59-0.49c0.2-0.5-0.22-0.87,0-1.28
		c0.23-0.61,0.86-0.33,1.18-0.79c0.05-0.11-0.04-0.76-0.2-0.98c-0.03-0.72-0.74-1-1.47-0.98c-0.08-0.18-0.14-0.26-0.2-0.49
		c-0.27-0.65,0.59-1.89,0.79-2.45c0.39,0.1,0.79,0.42,1.18,0.49c0.12,0.02,0.51-0.19,0.78-0.1c0.47,0.16,0.83,0.89,1.08,1.28
		c0.25,0.01,0.36,0.01,0.49,0.1h0.1c0.05-0.36-0.02-0.59,0.2-0.88c-0.11-1.32-3.06-2.56-4.22-2.94c-0.82-0.27-1.94-0.22-2.26-0.98
		c-0.07-0.15,0.03-0.58,0.2-0.78c-0.07-0.37-0.14-0.35-0.29-0.59c-2.54,0.08-2.46,0.65-4.22-0.88c-0.27-0.23-0.67-0.31-0.88-0.59
		c-0.59-0.78-1.02-2.98-1.76-3.43c-0.34-0.21-0.62-0.1-0.98-0.29c-0.5-0.27-0.51-0.65-1.37-0.69c-0.21-0.42-0.47-0.95-0.79-1.28
		c0.05-1.17,0.69-1.54-0.1-2.26c0.01-0.38,0.02-0.5,0.2-0.69c0.26-0.64,1.44-0.94,2.16-0.88c0.07,0.9,0.51,2.04,1.18,2.35v0.1
		c0.32-0.15,0.56-0.64,0.59-1.08c0.13,0.03,0.26,0.06,0.39,0.1c-0.07-0.39-0.18-0.4-0.2-0.88h0.29c0.11,0.24,0.23,0.35,0.1,0.59
		c-0.04,0.35,0.05,0.26-0.2,0.29c-0.03,0.47-0.08,0.9,0.2,1.27v0.2c0.12-0.07,0.2-0.11,0.29-0.2c0.07-0.11-0.13-0.58-0.2-0.88
		c0.07-0.07,0.13-0.13,0.2-0.2v-0.1c0.23,0.09,0.16,0.04,0.3,0.2c0.21,0.11,0.08,0.65,0.29,0.98c0.27,0.42,0.86,1.09,1.28,1.37v0.2
		c-0.21-0.09-0.26-0.15-0.39-0.29h-0.49c0.23,0.65,0.93,0.92,1.37,1.37c0.1-0.19,0.03-0.11,0-0.39c0.2,0.03,0.39,0.07,0.59,0.1
		c0.1,0.22,0.16,0.28,0.2,0.59c0.08-0.1,0.04-0.02,0.1-0.2c0.34,0.05,0.93,0.57,1.18,0.78c0.34-0.11,0.2,0.02,0.2-0.29
		c0.17-0.06,0.1-0.02,0.2-0.1h0.49c-0.09,0.26-0.1,0.26-0.3,0.39c0.1,0.1,0.2,0.2,0.3,0.29c-0.09,0.31,0.05,0.15-0.2,0.29
		c0.2,0.14,0.67,0.16,0.79,0.1c0.01-0.13,0.02-0.14-0.2-0.29c0.16-0.15,0.49-0.29,0.69-0.39c0.26,0.29,0.62,0.5,0.98,0.69
		c-0.25,0.29-1.06,0.5-1.57,0.49v0.2c0.62-0.01,1.15-0.36,1.57-0.29c0.41,0.06,1.02,0.45,1.37,0.59c0.91,0.35,1.87,0.59,2.65,1.08
		c0.34,0.21,0.49,0.66,0.78,0.88c0.24,0.18,0.75,0.27,0.98,0.39c-0.01,1.04,0.21,1.52,0.29,2.45c0.03,0.31-0.26,0.93-0.1,1.37
		c0.17,0.16,0.33,0.33,0.49,0.49c-0.21,0.23-0.04,0.1-0.29,0.1v0.2c0.48,0.44,1.37,0.66,1.76,1.18c0.03,0.2,0.07,0.39,0.1,0.59
		c0.31,0.52,1.51,1.56,2.16,1.77c0.09,0.46-0.13,1.15,0,1.37v0.2h0.2c0.06-0.06,0.13-0.13,0.2-0.2c0.07-0.1-0.01-0.22,0.1-0.39
		c0.03-0.03,0.07-0.07,0.1-0.1c0.06,0.16,0.08,0.23,0.1,0.49h0.29c0.14,0.32,0.3,0.53,0.39,0.88c0.42,0,0.83-0.02,1.08-0.2h0.39
		c-0.07,0.23-0.1,0.22-0.2,0.39h-0.49c-0.05,0.62-0.27,0.76-0.49,1.18c0.64,0.37,1.17,0.89,1.77,1.28c-0.09,1.32,0.05,1.5,0.79,1.96
		c0.32-0.19,0.1-0.54,0.2-0.69c0.1-0.1,0.2-0.2,0.3-0.29c0.35,0.59,0.71,0.79,0.98,1.57c0.17,0.06,0.1,0.02,0.2,0.1h0.1
		c-0.07-0.35-0.12-0.77,0.1-1.08v-0.2c0.54,0.06,1.05,0.56,1.37,0.88h0.1c-0.16-0.8-0.79-2.27-1.47-2.75v-0.49
		c0.23-0.03,0.24-0.05,0.39-0.1c0.14,0.19,0.33,0.4,0.49,0.59c0.01,0.02,0.53-0.47,0.79-0.59v-0.39c-0.53-0.09-0.22-0.13-0.69,0
		c-0.15-0.25-0.29-0.66-0.59-0.78c0.09-0.27,0.17-0.29,0.29-0.49c0.33,0.04,0.88-0.11,1.18,0c0.34,0.13,0.5,0.5,0.98,0.59
		c-0.05-0.58-0.47-1.13-0.29-1.47v-0.2c0.36,0.08,0.48,0.17,0.59,0.49c0.2-0.03,0.39-0.06,0.59-0.1c0.03-0.03,0.07-0.07,0.1-0.1
		v-0.39c-1.23,0-0.92-0.77-1.47-1.37c-0.76-0.4-1.4,0.31-1.96-0.79c-0.4,0.04-0.58,0.19-0.79,0.1c-0.11-0.06,0.33-0.39,0.49-0.49
		c-0.08-0.43-1.97-2.31-2.35-2.55v-1.27c0.66,0.08,1.36,0.55,1.96,0.1c0.47-0.03,0.57-0.11,0.69-0.49c0.17-0.31-0.07-0.64-0.39-0.78
		v-0.39c0.93,0.03,1.11-0.27,1.37-0.88c0.89,0.05,1.12-0.32,1.86-0.49c0.43-0.1,0.58,0.17,0.88,0c0.77-0.03,0.95,0.09,1.18,0.59
		c0.49-0.03,1-0.14,1.27-0.39h0.1c-0.15,0.37-0.47,0.86-0.79,1.08c0.09,0.83,0.15,2.42,0.39,2.85c0.17,0.1,1.21-0.47,1.47-0.69h0.3
		c-0.05,0.21-0.09,0.35-0.2,0.49c-0.15,0.24-0.04,0.16-0.39,0.2c0.17,0.45,0.59,0.36,0.78,0.69c0.09,0.16,0.02,0.38,0.1,0.49
		c0.19,0.09,0.07,0.04,0.29,0c0.03,0.03,0.07,0.06,0.1,0.1c-0.05,0.39-0.06,0.47-0.39,0.59c-0.02,0.35-0.01,0.46,0.29,0.69
		c-0.06,0.17-0.02,0.1-0.1,0.2c-0.12-0.1-0.39-0.11-0.59-0.39c-0.2,0.04-0.19,0.02-0.29,0.1c-0.08,0.15,0.08,0.43,0.29,0.59
		c-0.08,0.38,0,0.32-0.39,0.39c0.15,0.4,0.51,0.44,0.88,0.59c0.06-0.12,0.11-0.2,0.2-0.29c0.08-0.03,0.89,0.27,1.47,0.29
		c0.1,0.5,0.03,0.76-0.1,1.18c0.2,0.19,0.3,0.48,0.49,0.69c0.18,0.12,0.62,0.21,0.79,0.29v0.29c-0.2,0.04-0.19,0.02-0.29,0.1h-0.2
		c0.01,0.25,0.01,0.36,0.1,0.49c0.11,0.14,1.65-0.6,2.06-0.69c0.03,0.03,0.07,0.07,0.1,0.1c-0.1,0.1-0.2,0.2-0.29,0.29
		c0.02,0.33,0.05,0.68,0.2,0.88v0.2h0.1c0.29-0.49,0.45-0.81,0.98-1.08c0.43,0.14,0.61,0.61,0.98,0.1c0.39,0.2,0.38,0.65,0.69,0.88
		c0.28,0.22,0.98,0.22,1.38,0.29c0.46-0.42,1-0.98,1.67-0.88c0.03-0.03,0.07-0.06,0.1-0.1c-0.02-0.52,0.03-1.08-0.2-1.37
		c0.01-0.25,0.01-0.36,0.1-0.49c1.28-1.03,3.76,0.02,4.51,0.78c1.38-0.01,2.06-0.83,2.94-1.37v-0.29h0.29
		c0.35-1.01,0.5-1.39,0.98-2.16c0.62,0.06,1.48,0.16,2.06-0.1c0.18-0.47,0.38-0.92,0.49-1.37c0.56,0.06,0.43,0.18,0.69,0.49
		c-0.06,0.43-0.25,0.89-0.49,1.18c0.1,0.56,0.43,0.53,0.59,0.88v1.77c0.09,0.14,0.48,0.14,0.59,0.29c0.28,0.41,0.07,1.08,0.29,1.57
		c0.11,0.26,0.38,0.45,0.49,0.78c0.08,0.24-0.21,0.54-0.29,0.88c-0.07,0.28,0.07,0.66,0.1,0.78c0.12,0.58-0.09,1.65-0.2,2.16
		c-0.46,2.12,0.58,4.69-0.29,6.97c-0.2,0.52-0.77,0.76-1.08,1.18c-1.17,0.05-1.85,0.54-2.65,0.79c-0.8,0.24-1.51-0.58-2.36-0.29
		c-0.13,0.13-0.26,0.26-0.39,0.39c-0.29,0.03-0.59,0.06-0.88,0.1c-0.4,0.16-0.84,0.58-1.18,0.79c-0.23,0.07-0.46,0.13-0.69,0.2
		c-0.2,0.18-0.21,0.57-0.39,0.79c-0.64,0.76-1.31,1.61-1.86,2.45c-0.57,0.09-1.09-0.08-1.67-0.2c-0.69-0.14-1.11,0.54-1.77,0.29
		v-0.2c-0.44-0.15-0.69,0.42-1.28,0.2c-0.07-0.1-0.13-0.2-0.2-0.29c-0.25-0.09-1.57,0.08-1.67,0.1c-1.58,0.3-2.37-0.04-3.34,0.88
		c-0.82-0.06-0.8-0.78-1.28-1.18c-0.32-0.2-1.13,0.21-1.47,0.29c-0.69,0.18-0.96-0.08-1.47-0.2c-0.54-0.12-0.75,0.29-1.18,0.2
		c-0.01,0-0.28-0.18-0.29-0.2c-0.42-0.14-0.63-0.58-0.69-1.08c-0.74-0.01-1.33-0.17-1.86-0.29c-0.3-0.07-1.82,0.09-2.06,0.2
		c-0.2,0.23-0.39,0.46-0.59,0.69c-0.23,0.03-0.46,0.06-0.69,0.1c-0.36,0.14-0.96,0.62-1.28,0.88c-0.69,0.58-0.87,1.58-1.47,2.26
		c0,1.06,0.39,1.98,0.98,2.45c-0.02,2.25-1.13,2.29-2.06,3.43c-1.56-0.01-1.94-0.8-2.94-1.18c-0.74-0.28-1.39-0.1-2.16-0.39
		c-0.03-0.07-0.06-0.13-0.1-0.2c-1.47-0.52-3.26,0.35-4.51-0.29c-1.14-0.59-1.36-2.11-1.96-3.04c-0.69-0.03-1.37-0.07-2.06-0.1
		c-0.2-0.09-0.43-0.41-0.69-0.49c-0.67-0.21-1.66-0.23-2.26-0.39c-0.93-0.26-1.27,0.69-2.06,0.59c-0.86-0.11-1.58-0.29-2.16-0.69
		c-0.2-0.23-0.39-0.46-0.59-0.69h-0.79l-0.79-0.69c-0.22-0.28-0.01-0.62-0.2-0.98c-0.05-0.11-0.31-0.2-0.39-0.3
		c-0.52,0.04-0.57,0.19-0.88,0.39v0.39c-0.42-0.02-0.37-0.03-0.69,0c-0.11-0.12-0.25-0.21-0.39-0.29c-0.06-0.22-0.07-0.26-0.2-0.39
		c0-1.26,0.46-1.57,1.08-2.16c0.1-0.1,0.41-0.09,0.49-0.2c0.38-0.5,0.32-1.3,0.78-1.77c-0.08-0.41-0.28-0.34-0.39-0.59
		c-0.11-0.26,0.02-0.6-0.1-0.79c-0.34-0.77-1.3-0.62-1.47-1.67c-0.09-0.16-0.02-0.25,0-0.59c0.2-0.16,0.64-0.39,0.79-0.59
		c0.32-0.45,0.24-0.95,0.69-1.27c-0.05-0.21-0.09-0.36-0.2-0.49c-0.03-0.07-0.07-0.13-0.1-0.2c-0.39,0.13-1.05,0.66-1.28,0.98
		c-0.56-0.11-0.8-0.59-0.78-1.28c-1.17-0.3-2.14-0.42-3.14,0.29c-0.16,0.23-0.33,0.46-0.49,0.69c-0.73,0.4-1.68-0.04-2.26,0.49
		c-0.52-0.05-1.25-0.38-1.57-0.69c-0.65,0.12-0.17,0.13-0.49,0.49c-0.42,0.47-1.53-0.04-1.77-0.39c-0.5,0.03-0.5,0.11-0.79,0.29
		v0.29c-0.2,0.04-1.48,0.28-1.67,0.39c-0.13,0.16-0.26,0.33-0.39,0.49h-0.78c-0.03-0.13-0.07-0.26-0.1-0.39
		c-0.38-0.34-1.06-0.39-1.77-0.39h-1.86c-0.11,0.04-0.35,0.35-0.49,0.39c-0.56-0.03-1.11-0.07-1.67-0.1
		c-0.24,0.09-0.53,0.59-0.78,0.69c-0.31,0.12-0.57-0.09-0.79-0.1c-0.5-0.01-1.33,0.24-1.86,0.29c-0.24,0.02-0.53-0.19-0.88-0.1
		c-1.39,0.36-2.86,1.12-3.53,2.26c-0.45-0.01-0.5-0.03-0.69-0.29c-0.53,0.07-0.4,0.25-0.69,0.39c-0.52,0.25-1.09-0.05-1.57,0.29
		c-0.28,0.2-0.18,0.62-0.39,0.88c-0.04,0.06-1.93,0.9-2.06,0.88c-0.21-0.04-0.87-0.39-0.88-0.39c-0.39-0.07-0.46,0.35-0.88,0
		c-0.42-0.14-0.57-0.35-0.59-0.88c-0.4,0.15-0.69,0.53-1.18,0.59c-0.37,0.05-0.69-0.32-0.98-0.39c-1.62,1-4.01-0.49-3.92-2.45
		c-0.37,0.01-0.75,0.04-0.98,0.2c-1.2,0.04-0.87,0.88-1.27,1.67c-0.52,1.01-1.16,2.26-1.86,3.14c-0.79,0.98-2.28,1.66-3.63,2.06
		c-0.64,0.19-0.95,0.11-1.47,0.39c-0.5,0.27-0.89,1.11-1.37,1.47c-0.21,0.16-0.67,0.26-0.78,0.49c-0.29,0.57-0.07,1.21-0.39,1.67
		c-0.36,0.52-1.25,0.95-1.57,1.67c-0.08,0.18-0.36,2.5-0.29,2.65c0.07,0.16,0.42,0.38,0.49,0.59c0.21,0.66-0.26,1.44-0.49,1.77
		c-0.14,0.2-0.39,0.24-0.59,0.39c-0.29,0.36-0.59,0.72-0.88,1.08c-0.32,0.18-0.58,0.2-0.88,0.39c-0.16,0.2-0.33,0.39-0.49,0.59
		c-0.39,0.17-0.61-0.13-1.08,0.1c-0.65,0.32-1.13,1.16-1.77,1.47c-0.95,0.46-2.56-0.12-3.43,0.39c-0.79,0.4-1.33,1.69-1.77,2.45
		c-0.17,0.3-0.13,0.6-0.39,0.78c-0.62,0.44-1.71,0.37-2.26,0.88c-0.13,0.12-1.4,2.51-1.47,2.75c-0.2,0.6,0,1.12-0.29,1.57
		c-0.2,0.3-1.71,1.31-2.06,1.47c-0.2,0.03-0.39,0.07-0.59,0.1l-0.59,0.88v0.59c-0.21,0.47-1,0.82-1.27,1.27
		c-0.25,0.41-0.14,1.27-0.49,1.57h-0.39c-0.2,0.12-0.78,0.78-0.88,0.98c-0.4,0.77-0.12,1.96-0.59,2.65
		c0.04,0.69,0.28,0.79,0.69,1.08c0,0.6-0.14,0.85-0.49,1.08c0,1.46,0.17,2.38,0.88,3.34c0.29,0.4,0.65,0.22,0.88,0.98
		c0.32,1.06,0.39,3.43,0,4.22c-0.31,0.62-0.96,1.37-1.18,2.06l-0.2,0.88c0.02,0.14,0.21,0.69,0.1,0.98
		c-0.43,1.11-1.37,1.74-2.55,2.16c0.19,0.21,0.22,0.04,0.49,0.2c0.48,0.28,1.02,1.59,1.18,2.16c0.13,0.49-0.21,1.34-0.29,1.77
		c0.03,0.43,0.07,0.85,0.1,1.27c-0.16,0.74-0.56,1.95-0.2,2.65c0.2,0.37,0.67,0.72,0.88,1.08c0.37,0.62,0.42,1.17,0.98,1.57
		c0.36,0.26,0.9,0.24,1.28,0.49c0.7,0.46,1.32,1.34,1.77,2.06c1.65,0,1.08,0.67,1.86,1.27c0.37,0.29,0.8,0.41,1.18,0.69
		c0.37,0.27,0.55,0.77,0.88,1.08c0.17,0.15,0.46,0.1,0.59,0.29c0.32,0.46,0.02,1.32,0.29,1.86c0.06,0.13,0.64,0.8,0.78,0.98
		c0,0.3-0.03,0.5-0.1,0.69c-0.48-0.03-0.82-0.14-1.08-0.39h-0.39c0.36,0.6,1.42,1.27,2.06,1.57c0.25,0.12,0.49,0.04,0.69,0.2
		c0.24,0.19,0.42,0.63,0.69,0.79c0.74,0.43,1.68,0.42,2.35,0.88c0.12,0.08,0.89,0.68,0.98,0.78c0.11,0.13,0.08,0.38,0.2,0.49
		c0.31,0.29,0.83,0.34,1.18,0.59c0.2,0.26,0.39,0.52,0.59,0.79c0.36,0.25,0.7,0.28,0.98,0.59c0.1,0.16,0.2,0.33,0.29,0.49
		c0.3,0.21,0.72,0.15,0.98,0.39c1.21,1.12,2.5,2.13,3.92,3.04c0.68,0.43,1.4,0.5,2.16,0.88c0.37,0.19,0.81,0.56,1.28,0.69
		c0.72,0.19,1.46-0.27,1.96-0.39h1.18c0.88-0.2,2.77-0.5,4.12-0.2c0.59,0.13,2.21,0.25,2.65,0.2c0.13-0.02,0.59-0.19,0.88-0.1
		c0.18,0.06,0.48,0.33,0.69,0.39c0.85,0.25,1.28,0.09,1.96,0.29c0.46,0.14,3.19,1.11,3.34,1.08c0.3-0.06,0.92-0.31,1.18-0.39
		c0.39-0.03,0.79-0.06,1.18-0.1c0.07-0.02,0.32-0.28,0.39-0.29c0.58-0.11,1.08,0.17,1.86-0.1c1.6-0.55,1.98-0.93,4.02-0.69
		c0.29-0.29,0.59-0.59,0.88-0.88c0.76-0.3,1.57,0,2.45-0.2c1.14-0.26,4.51-0.44,5.79-0.2C166.27,267.28,166.89,267.32,167.51,267.35
		z M214.9,167.38c0.1,0.07,0.2,0.13,0.29,0.2v0.1h-0.39C214.83,167.57,214.87,167.48,214.9,167.38z M213.72,167.08v0.1
		c-0.38-0.08-0.35-0.1-0.49-0.39C213.44,166.88,213.56,166.97,213.72,167.08z M212.84,166.59h0.29v0.2
		c-0.48,0.02-0.43-0.06-0.98-0.1v-0.1c0.17-0.06,0.1-0.02,0.2-0.1C212.6,166.51,212.71,166.51,212.84,166.59z M212.05,164.93
		c0.23,0.07,0.22,0.1,0.39,0.2c-0.07,0.32-0.1,0.23-0.2,0.49c-0.23-0.07-0.22-0.1-0.39-0.2
		C211.91,165.1,211.94,165.13,212.05,164.93z M211.27,168.16c0.1,0.07,0.2,0.13,0.29,0.2c0,0,0.99,0.2,1.37,0.2
		c0.03,0.03,0.07,0.06,0.1,0.1c-0.21,0.34-0.4,0.16-0.49,0.69c-0.61-0.28-1.29-0.22-1.77-0.59c-0.08-0.1-0.04-0.02-0.1-0.2
		C210.92,168.45,211.14,168.4,211.27,168.16z M208.13,98.8c-0.36-0.03-0.57-0.16-0.69-0.1c-0.25,0.02-0.33,0.04-0.49,0.1
		c-0.04,0.38,0.03,0.52,0.2,0.88h-0.1c-0.17,0.13-0.17,0.01-0.29,0.1c-0.46-0.13-0.71-0.64-0.98-0.98c-0.25-0.32-0.7-0.31-0.98-0.59
		c-0.03-0.13-0.07-0.26-0.1-0.39c-0.23-0.31-0.71-0.51-1.08-0.69c0.01-0.82,0.14-0.85,0.2-1.57c0.33-0.07,0.65-0.13,0.98-0.2
		c0.29,0.07,0.52,0.5,0.79,0.59c0.56,0.2,0.96,0.03,1.37,0.29h0.1c0.38,0.32,0.61,0.73,1.08,0.98v0.39h-0.29
		c0.12,0.36,0.3,0.59,0.39,0.98C208.15,98.71,208.19,98.63,208.13,98.8z M211.56,95.37v0.1c-0.21-0.04-0.22-0.01-0.59,0
		c-0.02-0.23-0.02-0.28-0.1-0.39c-0.31-0.89-1.53-0.83-2.36-1.18c-0.15-0.42-0.11-0.58-0.49-0.78c0.16-0.26-0.02-0.1,0.29-0.1
		c-0.22-0.33-0.52-0.68-0.78-0.98v-0.1c0.54,0.18,1.27,0.83,1.57,1.27h0.1c-0.04-0.46-0.08-0.43-0.39-0.59
		c0.12-0.26,0.19-0.2,0.3-0.49c-0.54-0.5-0.84-0.71-1.87-0.69v-0.2c0.03-0.03,0.07-0.06,0.1-0.1c0.6-0.01,1.14,0.03,1.47,0.29
		c0.63,0.24,0.33,0.69,0.69,1.18c0.37,0.51,1.22,0.72,1.77,1.08c0.22,0.15,0.26,0.52,0.49,0.69
		C211.65,94.88,211.38,94.98,211.56,95.37z M232.26,135.2c0.41-0.54,0.08-1.09,0.98-1.18c0.07-0.3,0.16-0.44,0.2-0.78
		c0.2-0.04,0.19-0.02,0.29-0.1c0.58,0.11,0.41,0.31,0.69,0.69c0.19,0.26,0.53,0.3,0.79,0.49c0.54,0.41,0.57,1.04,0.59,1.77
		c0.01,0.37,0.15,0.53,0,0.79c-0.07,0.23-0.1,0.22-0.2,0.39c-0.97,0.03-2.28,0.61-2.75,0.29c-1.05,0.02-0.95-0.32-1.37-0.88
		C231.45,135.2,231.8,135.81,232.26,135.2z M219.8,159.04h0.2C219.91,159.21,219.97,159.15,219.8,159.04z M225,156.88
		c-1,0.47-0.52,0.69-0.98,1.27c-0.37,0.27-1.81,0.26-2.06,0.1h-0.19c-0.06,0.36-0.04,0.39,0,0.78c-0.68-0.05-1.23-0.41-1.47,0.2
		h-0.2c0.07-0.75,0.47-0.69,0.69-1.18c0.12-0.26,0.05-0.58,0.2-0.79c0.22-0.3,0.94-0.63,1.28-0.79v-0.1
		c0.42,0.03,0.85,0.06,1.27,0.1c0.17-0.04,0.37-0.34,0.59-0.29c0.21,0.04,0.49,0.33,0.88,0.39V156.88z M244.53,147.95
		c-0.55,0.23-0.89,1.01-1.47,1.28c-0.75,0.34-1.01-0.08-1.47,0c-0.1,0.1-0.2,0.2-0.29,0.29c-0.66,0.26-1.4-0.19-1.86-0.29
		c-0.12,0.15-0.25,0.35-0.39,0.49c-0.1,0.08-0.02,0.04-0.2,0.1c-0.43-0.35-0.7-0.48-0.98-0.98c-0.64,0.08-0.78,0.6-1.18,0.59
		c-0.53-0.03-0.51-0.17-0.88-0.29c-0.03-0.16-0.07-0.33-0.1-0.49c-0.16-0.03-0.33-0.07-0.49-0.1c-0.06,0.2-0.13,0.39-0.2,0.59
		c-0.63,0.16-1.38,0.5-1.96,0.69c-0.42,0.13-0.73,0-1.08,0.2c-0.23,0.13-0.3,0.51-0.49,0.69c-0.35,0.32-0.89,0.4-1.18,0.78
		c-0.23,0.31-0.27,0.67-0.49,0.98c-0.33,0.33-0.66,0.65-0.98,0.98c-0.16,0.31-0.01,0.47-0.2,0.69c-0.43,0.73-1.7,0.18-2.06,0.39
		c-1.38,0.82-3.58,1.04-5-0.1c-0.31-0.25-0.17-0.63-0.39-0.98c-0.11-0.17-1.22-1-1.47-1.08c0.07-0.3,0.13-0.58,0.29-0.78h0.2
		c0.21-0.43-0.54-1.49-0.1-2.16c0.15-0.38,0.36-0.32,0.69-0.29c0.05-0.15,0.07-0.16,0.1-0.39c0.16-0.4-0.45-1.91-0.59-2.45
		c-0.1-0.4,0.22-0.8,0.29-1.08c0.03-0.26,0.06-0.52,0.1-0.79c0.14-0.17,0.89-0.3,1.08-0.39c0-0.36,0.13-0.86,0.1-1.08
		c-0.08-0.55-0.71-1.05-0.49-1.77c0.07-0.23,0.38-0.48,0.49-0.69c0.35-0.69,0.4-1.5,0.39-2.55c0.38-0.19,0.83-0.3,1.08-0.49
		c0.51,0.16,0.86,0.53,1.08,0.98c0.55,0,1.52,0.1,1.86-0.1c0.37-0.04,0.36-0.08,0.59-0.2v-0.29c0.42,0.03,0.85,0.07,1.28,0.1
		c-0.28,0.88-0.89,1.66-1.47,2.26c0.09,0.32-0.05,0.15,0.2,0.29c0.32,0.12,0.33-0.35,0.88-0.2c0.27,0.08,0.46,0.36,0.69,0.29
		c0.18-0.05,0.1-0.03,0.2-0.1c0.41,0.08,0.41,0.21,0.69,0.39c0.02,0.71,0.13,0.85,0.1,1.47c0.3,0.06,0.67,0.13,0.88,0.29
		c0.41-0.15,0.83-0.6,0.98-0.98c0.08-0.2-0.13-0.42-0.1-0.49c0.1-0.23,0.45-0.45,0.59-0.69c0.2-0.03,0.39-0.07,0.59-0.1
		c0.05-0.54,0.28-0.8,0.49-1.18c0.31,0.06,0.24,0.02,0.39,0.2c0.63-0.08,0.78-0.44,1.37-0.59v-0.29c0.29-0.03,1.03-0.23,1.18-0.2
		c0.41,0.09,0.59,0.69,0.98,0.79c0.43,0.1,0.44-0.35,0.78-0.29c0.24,0.04,0.66,0.42,0.88,0.49c0.46,0.06,0.92,0.13,1.37,0.2
		c1.26,0.48,2.46,1.34,3.73,1.86c0.73,0.3,1.24-0.11,1.77,0c0.59,0.12,1.99,1.48,2.26,1.96c1.2,2.15-0.71,3-1.18,4.41
		C245.77,147.82,245.15,147.89,244.53,147.95z"/>
</g>
    <g id="Highlight">
	<radialGradient id="SVGID_12_" cx="30.8873" cy="186.9008" r="0.0988" gradientUnits="userSpaceOnUse">
		<stop offset="0" style="stop-color:#0CCFFF"/>
        <stop offset="0.1842" style="stop-color:#0BC2FB"/>
        <stop offset="0.5257" style="stop-color:#079FF0"/>
        <stop offset="0.6568" style="stop-color:#0690EB"/>
        <stop offset="0.9001" style="stop-color:#004B96"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_12_)"
              d="M30.95,187c-0.06-0.17-0.02-0.09-0.1-0.2v0.2H30.95z"/>

        <radialGradient id="SVGID_13_" cx="223.6629" cy="61.2979" r="114.1351" fx="224.2568" fy="57.4986"
                        gradientTransform="matrix(-0.5086 0.861 -2.2072 -1.3037 472.704 -51.3703)"
                        gradientUnits="userSpaceOnUse">
		<stop offset="0" style="stop-color:#9BFFFF"/>
            <stop offset="0.0442" style="stop-color:#95FDFF;stop-opacity:0.8535"/>
            <stop offset="0.1033" style="stop-color:#84F7FF;stop-opacity:0.6577"/>
            <stop offset="0.1707" style="stop-color:#68EEFF;stop-opacity:0.434"/>
            <stop offset="0.2439" style="stop-color:#42E2FF;stop-opacity:0.1916"/>
            <stop offset="0.3017" style="stop-color:#1ED6FF;stop-opacity:0"/>
            <stop offset="0.8163" style="stop-color:#1ED6FF;stop-opacity:0"/>
            <stop offset="0.8417" style="stop-color:#1ED6FF;stop-opacity:0"/>
	</radialGradient>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_13_)" d="M189.59,32.68c0.37,0.41,1.2,0.37,1.57,0.79h0.78
		C191.52,32.83,190.67,32.64,189.59,32.68z M196.16,33.66v0.1c0.22,0.17,0.21,0.24,0.59,0.29c-0.13,0.16-0.06,0.11-0.29,0.2
		c0.46,0.33,0.86,0.03,1.57,0v-0.1c-0.57-0.19-0.94-0.55-1.67-0.59C196.26,33.64,196.33,33.6,196.16,33.66z M193.71,33.76
		c-0.59-0.15-1.2,0.1-1.57-0.1h-0.2c0.22,0.32,0.49,0.35,0.79,0.59h0.1c-0.03,0.07-0.06,0.13-0.1,0.2c0.03,0.03,0.07,0.07,0.1,0.1
		H194v0.49c0.27,0.03,0.69,0.07,0.88,0.2c0.61,0.02,1.67,0.13,1.96-0.2h0.1c-0.03-0.1-0.07-0.2-0.1-0.29
		c-0.65-0.23-1.45-0.16-2.06-0.49C194.52,34.1,194.07,33.85,193.71,33.76z M199.2,42.59c-0.91-0.13-1.78-0.26-2.45,0.29h-0.2
		c0.36,0.38,1.2,0.66,1.86,0.69c-0.36,0.24-1.75,0.1-2.16-0.2h-1.08v0.2c0.15,0.05,0.16,0.07,0.39,0.1
		c-0.82,0.56-1.81-0.21-2.35-0.1c-0.29,0.06-0.95,0.25-1.37,0.29c1.03,0.86,2.85,0.76,3.83,1.47h0.69c-0.05-0.15-0.07-0.16-0.1-0.39
		c-0.31-0.15-0.53-0.27-0.98-0.29v-0.1c0.67,0.01,0.9,0.31,1.37,0.49c0.46-0.19,1.41-0.37,1.76-0.39c0.01-0.43,0.08-0.21,0.2-0.69
		c0.79-0.02,1.36-0.18,1.86,0.2h0.29C200.52,43.67,199.56,43.08,199.2,42.59z M201.36,53.28c-0.46-0.01-0.76-0.01-0.98,0.2h-0.2
		c0.11,0.58,0.55,1.4,0.79,1.67c-0.03,0.03-0.07,0.07-0.1,0.1c-0.12,0-0.05,0.06-0.2-0.1h-0.2c0.1,0.19,0.13,0.27,0.29,0.39
		c-0.03,0.03-0.06,0.07-0.1,0.1c-0.13,0.09-0.24,0.09-0.49,0.1c0.1,0.08,0.02,0.04,0.2,0.1c-0.13,0.09-0.24,0.09-0.49,0.1
		c0.06,0.31,0.02,0.24,0.19,0.39c-0.14,0.24-0.12,0.18-0.49,0.2c0.1,0.29,0.2,0.59,0.3,0.88c0.1,0.03,0.19,0.07,0.29,0.1
		c0.25,0.55-0.25,0.59,0.2,0.98c-0.17,0.24-0.09,0.18-0.2,0.49c0.23,0.16,0.29,0.43,0.49,0.59c0.54,0.41,1.2,0.62,1.57,1.18
		c0.2,0.3,0.2,1.13,0.39,1.37c0.22,0.28,0.79,0.25,0.98,0.59c0.15,0.27,0.39,1.37,0.39,1.37c0.2,0.06,0.39,0.13,0.59,0.2
		c0.26,0.26,0.52,0.52,0.78,0.78c-0.14,0.24,0.02,0.11-0.29,0.2c0.26,1.43,2.38,1.05,3.24,1.67c0.24-0.14,0.11,0.02,0.2-0.29
		c0.13,0.13,0.26,0.26,0.39,0.39c0.59-0.03,1.18-0.07,1.77-0.1v-0.2c0.37-0.25,1.08-0.44,1.37-0.39c-0.09-0.45-0.29-0.48-0.49-0.79
		c-4.05,0.11-6.07-3.19-7.65-5.89c-0.18-0.12,0.01-0.05,0.1-0.2c-0.46-0.31-0.38-0.71-0.69-1.18c-0.23-0.2-0.46-0.39-0.69-0.59
		c-0.1-0.19-0.23-3.02-0.2-3.53C202.09,53.9,201.71,53.58,201.36,53.28z M212.84,55.34h0.1c-0.12-0.49-0.78-0.69-1.37-0.69
		c-0.09,0.33-0.05,0.31,0.1,0.59C212.15,55.23,212.62,55.21,212.84,55.34z M208.91,70.84c-0.12,0.22-0.23,0.38-0.29,0.69
		c0.16,0.15,0.16,0.31,0.29,0.49c0.24,0.33,0.69,0.5,0.98,0.78c0.48-0.04,0.75-0.17,1.08-0.1v-0.2c0.14-0.27-0.16-0.98-0.39-1.37
		C210.02,71.01,209.62,70.84,208.91,70.84z M194.79,106.75c-0.19,0.09-0.07,0.04-0.29,0v0.1c-0.1,0.12,0.02,0.12-0.1,0.29
		c0.12,0.52,0.41,0.38,0.69,0.69c0.07,0.12-0.02,0.27-0.1,0.49c0.07,0.03,0.13,0.06,0.2,0.1v0.1h0.1c0.04-0.22,0.08-0.71,0.2-0.88
		c0.12,0,0.05-0.06,0.2,0.1c0.07-0.11,0.06-0.09,0.1-0.29c0.48-0.12,0.9-0.76,1.08-1.18c-0.21-0.19-0.81-0.98-0.98-1.08
		c-0.28-0.16-0.48-0.02-0.69-0.2h-0.2c-0.11,0.51-0.08,0.9,0.29,1.18C195.17,106.46,195.01,106.58,194.79,106.75z M160.45,126.56
		c-0.33-0.05-1.9-1.12-2.55-0.39h-0.29c0.13-0.36,0.57-0.75,0.29-1.18c0.08-0.34,0.14-0.26,0.29-0.49c0.31,0.06,0.29,0.09,0.49,0.2
		l0.2-0.29h0.1c-0.21-0.59-0.7-0.59-1.08-0.98c-0.27-0.28-0.18-0.62-0.39-0.98c-0.15-0.25-0.47-0.11-0.69-0.29
		c-0.17-0.15-0.16-0.49-0.29-0.69c-0.26-0.37-1.1-0.83-1.47-1.08c0-1.97-0.66-3.54-2.16-4.02c0.09-1.26,0.68-1.42,1.18-2.16
		c0.4-0.59,0.41-1.36,0.98-1.77c0-0.37,0.01-0.64-0.2-0.78c-0.41-0.29-2.89-0.14-3.24,0c-0.03-0.03-0.07-0.07-0.1-0.1
		c0.05-0.29,0.14-0.67,0.29-0.88c0.18-0.47,0.94-0.85,1.37-1.08c0.08-0.4,0.13-0.66,0.1-0.98c0.26-0.13,0.34-0.26,0.69-0.49
		c-0.02-0.23-0.02-0.28-0.1-0.39v-0.29c0.13,0.1,0.26,0.2,0.39,0.29c0.12-0.42-0.2-0.33,0.2-0.59v-0.1
		c-0.16,0.03-0.33,0.06-0.49,0.1c-0.05-0.15-0.07-0.16-0.1-0.39h-0.2c-0.1,0.34-0.04,0.55-0.69,0.59c-0.07,0.26-0.13,0.52-0.2,0.78
		c0.13,0.13,0.26,0.26,0.39,0.39c-0.55,0.63-2.37,0.39-3.04,0.1c-0.37,0.58-0.72,1.34-1.18,1.86c-0.2,0.1-0.39,0.2-0.59,0.29
		c-0.12,0.16-0.09,0.53-0.2,0.69c-0.09,0.06-0.2,0.03-0.39,0.1c-0.08-0.18-0.14-0.26-0.2-0.49c-0.38,0.13-0.68,0.38-0.98,0.59
		c0.08,0.65,0.74,1.26,1.18,1.57c-0.14,0.59-0.51,0.84-0.98,1.08v0.79h-0.29v0.2h1.08c-0.02,0.23-0.02,0.28-0.1,0.39
		c-0.24,0.54-0.82,0.66-1.37,0.88c-0.06,0.17-0.02,0.1-0.1,0.2c0.09,0.36,0.18,0.27,0.29,0.59c0.17-0.06,0.1-0.02,0.2-0.1
		c0.53-0.07,0.5-0.31,0.79-0.59c0.1,0.03,0.04-0.03,0.1,0.1c0.03,0.07-0.09,1-0.29,1.18v0.49c0.16-0.03,0.33-0.07,0.49-0.1
		c0.04-0.28,0.06-0.42,0.2-0.59v-0.1c0.32,0.14,0.22,0.25,0.69,0.29v-0.88h0.2c0.14,0.26,0.28,0.41,0.49,0.59
		c-0.17,0.83-0.87,1.13-1.18,1.77c-0.1,0.2,0.07,0.61,0.29,0.78c0.06,0.17,0.02,0.1,0.1,0.2c0.05-0.12,0.12-0.3,0.2-0.39
		c0.1-0.08,0.02-0.04,0.2-0.1c0.16,0.16,0.33,0.33,0.49,0.49c0.18,0.23,0.14-0.16,0.29-0.2c0.4-0.09,0.45,0.46,1.08-0.2h0.2
		c-0.04,0.41-0.05,0.42-0.3,0.59c0.04,0.78,0.34,1.03,0.49,1.57c0.23,0.83,0.1,1.55,0,2.16c-0.03,0.03-0.07,0.07-0.1,0.1
		c-1.07,0.23-1.49-0.01-2.45-0.39c-0.16,0.16-0.33,0.33-0.49,0.49c0.11,0.19,0.41,0.38,0.59,0.49c-0.05,0.54-0.29,0.53-0.69,0.69
		c-0.06,0.17-0.02,0.09-0.1,0.2v0.29c0.28,0.03,0.43,0.08,0.69-0.1c0.2,0.04,0.19,0.02,0.29,0.1c0.26,0.32,0.19,0.89-0.1,1.18
		c-0.32,0.62-1.53,0.87-2.26,0.78c-0.16,0.23-0.33,0.46-0.49,0.69c0.14,0.24-0.02,0.12,0.29,0.2v0.39c0.34,0.08,0.27,0.14,0.49,0.29
		c0.23,0.14,0.96-0.12,1.28-0.2c0.16,0.34,0.29,0.59,0.59,0.78c-0.03,0.2-0.06,0.39-0.1,0.59c-0.44,0.23-0.48,0.48-1.18,0.49
		c-0.32,1.48-1.36,2.05-2.55,2.65v0.39c0.56-0.05,0.65-0.14,0.88,0.29c0.62-0.14,0.75-0.77,1.37-0.98c0.47-0.27,1.28,0.3,1.86,0.49
		c0.31-0.52,1.92-2.56,2.45-0.88c0.58,0.09,1.26,0.16,1.67-0.3c0.62,0.06,0.5,0.28,0.88,0.49c0.29,0.11,0.51-0.2,0.59-0.59
		c0.53-0.03,1.9-0.14,2.16,0.29c0.4,0,0.82-0.01,1.08-0.1v-0.39c1.19-0.03,1.4-0.77,2.26-1.08c0.16-0.61,0.38-1.48,0.39-2.16h-0.29
		C160.13,128.41,160.6,127.71,160.45,126.56z M144.95,113.32h0.1c0.16-0.24,0.42-0.29,0.59-0.49c0.33-0.39,0.3-1.46,0.69-1.86
		c0.78-0.82,1.51-0.47,1.86-2.06c-0.1-0.03-0.2-0.07-0.29-0.1c-0.34,0.35-1.03,0.56-1.47,0.79c-0.07,0.41-0.01,0.75-0.2,0.98
		c-0.16,0.3-0.55,0.46-0.88,0.59c0.13,0.52,0.11,1.45-0.39,1.86V113.32z M190.67,108.91c-1.3,0.43-0.93,0.96-1.67,1.57
		c0.16,0.66,0.48,1.12,0.49,1.86h0.29c0.17-0.49,0.28-1.22,0.69-1.47c-0.31-0.91-0.2-1.01,0.29-1.86
		C190.73,108.97,190.7,108.94,190.67,108.91z M137.49,129.12c1.51,0.09,4.23-0.57,4.91-1.57c0.7,0.04,1.32,0.04,1.86,0.2
		c0.21-0.26,0.19-0.56,0.39-0.88c0.49-0.49,0.98-0.98,1.47-1.47c-0.07-0.37-0.17-0.41-0.39-0.59c-0.05-2.51,0.15-2.79,1.67-3.73
		c-0.04-1.31-0.71-1.82-0.98-2.94c-0.43,0.05-0.82,0.16-1.18,0.29c-0.23-0.23-0.46-0.46-0.69-0.69c-0.24,0.08-0.24,0.23-0.39,0.29
		c-0.55,0.24-1.19-0.07-1.67,0.2c-0.62,0.35-0.31,0.85-1.08,1.18c0.08,0.41,0.16,0.36,0.49,0.49c-0.1,0.49-0.35,0.46-0.59,0.79
		c-0.63,0.01-1.12-0.03-1.47-0.29c-0.68-0.01-0.91,0.07-1.28,0.29c-0.02,0.38-0.11,0.58,0,0.79c0.01,0.64-0.11,0.76-0.49,0.98
		c0.02,0.79,0.44,1.47,0.88,1.86c-0.03,1.06-0.55,0.64-0.98,1.18c-0.23,0.29-0.08,0.67-0.39,0.88c-0.26,0.18-0.66,0.11-0.88,0.29
		c-0.07,0.11-0.06,0.09-0.1,0.29c0.2,0.04,0.19,0.02,0.29,0.1c0.03,0.03,0.07,0.06,0.1,0.1h-0.1c-0.11,0.23-0.19,0.27-0.39,0.39
		c0.08,0.47,0.25,0.52,0.2,0.88C137.17,128.61,137.3,128.65,137.49,129.12z M148.97,121.07c-0.17,0.33-0.41,0.67-0.69,0.88v0.2
		c0.59-0.02,0.64-0.17,0.98-0.39C149.27,121.3,149.31,121.21,148.97,121.07z M194,154.72h-0.2
		C193.96,154.84,193.88,154.88,194,154.72z M175.85,159.63c0.07,0.77,0.26,2.06,0.79,2.35c-0.07,0.1-0.13,0.2-0.2,0.29
		c0.35,0.28,0.73,0.61,1.28,0.69c0.03-0.5,0.23-0.66,0.29-0.98c-0.03-0.29-0.07-0.59-0.1-0.88c0.05-0.15,0.36-0.44,0.39-0.59
		c0.08-0.39-0.35-2.41-0.49-2.85c-0.03-0.03-0.07-0.07-0.1-0.1c-0.21,0.28-0.16,0.55-0.1,0.88c-0.45,0.16-0.91,0.23-1.27,0.49
		C176.12,159.1,176.06,159.45,175.85,159.63z M220.49,163.85c0.03-0.03,0.07-0.07,0.1-0.1c-0.3-0.22-0.61-0.53-0.79-0.88h-0.39
		c-0.21,0.26-0.49,0.51-0.79,0.69c0.03,0.1,0.07,0.2,0.1,0.29c0.49,0.1,0.98,0.2,1.47,0.29
		C220.29,164.04,220.39,163.94,220.49,163.85z M175.17,165.71h0.29c0.13,0.26,0.4,0.65,0.49,0.88c0.2,0.54-0.29,0.81-0.2,1.18
		c0.02,0.07,0.29,0.18,0.29,0.2c0.1,0.21-0.04,0.98-0.1,1.08c-0.03,1.15,0.05,1.61,0.69,2.06c0.12,0.1,0.12-0.02,0.29,0.1
		c0.54-0.09,0.7-0.33,0.69-0.98c0.42-0.11,0.58-0.27,0.88,0.1h0.39c0.21-1.06,0.16-2.53,0-3.53c-0.1-0.59,0.57-0.67,0.39-1.27
		c-0.11-0.37-0.37-0.54-0.39-1.18h-0.29v-0.39c-0.17-0.16-0.29-0.36-0.39-0.59c-1.17,0.05-0.97,0.69-1.57,1.18
		c-0.42,0.34-0.98,0.21-1.47,0.29C175.1,165.2,175.13,165.27,175.17,165.71z M219.71,166.79c0.03,0.03,0.07,0.07,0.1,0.1
		c0.07-0.07,0.13-0.13,0.2-0.2c0.03-0.45-0.04-0.57-0.1-1.08c-0.03-0.03-0.07-0.06-0.1-0.1h-0.39c-0.1,0.08-0.03,0.04-0.2,0.1
		c0.09,0.42,0.28,0.25,0.39,0.49C219.81,166.54,219.38,166.47,219.71,166.79z M165.45,168.36c0.11-0.09,0.01-0.25-0.1-0.39
		c-0.19-0.25-0.33-0.29-0.78-0.29c-0.11,0.07-0.09,0.06-0.29,0.1c0.06,0.17,0.02,0.1,0.1,0.2
		C164.43,168.1,165.23,168.45,165.45,168.36z M161.33,169.34c0.35,0.62,0.52,0.47,0.88,0.88c0.6-0.1,0.95-0.73,1.08-1.27
		c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.28-0.42-0.49-0.04-0.78-0.69h-0.49c-0.43,0.41-1.02,0.59-1.37,1.08
		c-0.03,0.03-0.06,0.07-0.1,0.1c0.23,0.09,0.16,0.04,0.29,0.2C161.07,169.48,161.15,169.42,161.33,169.34z M237.27,171.4
		c-0.26,0.23-0.21,0.45-0.59,0.59c0.08,0.44,0.27,0.5,0.39,0.88c0.65,0.07,1.06-0.05,1.47,0.1c0.26-0.66,0.92-0.74,1.18-1.28
		c0.12-0.24-0.1-0.54,0.1-0.69c0.02-0.01,0.65-0.19,0.69-0.2c-0.11-0.29-0.25-0.35-0.49-0.49c0.09-0.68,0.94-1.37,0.69-1.86
		c-0.58,0.95-1.55,2.04-2.84,1.96c-0.06,0.22,0.05,0.54-0.1,0.79C237.66,171.27,237.37,171.33,237.27,171.4z M206.85,168.85
		c-0.07,0.07-0.13,0.13-0.2,0.2v0.29h-0.29v0.59c0.27,0.03,0.69,0.07,0.88,0.2h0.2c-0.07-0.63-0.25-0.76-0.39-1.28H206.85z
		 M207.64,171.3c0.32-0.09,0.15,0.05,0.3-0.2h0.1c-0.14-0.29-0.44-0.42-0.79-0.49C207.3,171.12,207.39,171.04,207.64,171.3z
		 M158.59,171.11c-0.07-0.36,0.01-0.27-0.29-0.39c-0.16,0.17-0.4,0.36-0.59,0.49v0.29c0.17,0.06,0.1,0.02,0.2,0.1
		C158.29,171.5,158.3,171.3,158.59,171.11z M225.69,172.77c0.41-0.34,0.58-1.13,0.69-1.77c-0.1-0.03-0.2-0.07-0.29-0.1
		c-0.37,0.41-1.04,1.11-0.49,1.86c0.03,0.03,0.07,0.07,0.1,0.1V172.77z M217.84,176.8c-0.21-0.22-0.37-0.24-0.49-0.59
		c-0.59,0.14-1.04,0.5-1.47,0.79c0.01,0.28,0.04,0.42,0.1,0.59c0.6-0.06,1.9-0.47,2.35-0.2c0.55-0.02,0.67-0.04,0.79,0.39
		c0.56-0.04,2.83-0.82,3.24-1.08c0.1-0.03,0.2-0.07,0.29-0.1c0-0.29,0-0.54-0.1-0.69c-0.21,0.04-0.72,0.51-1.18,0.59
		c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c-0.43,0.05-0.43,0.2-0.69,0.29c-0.56-0.09-1.57-0.19-2.16,0.1
		C218.22,176.51,218.17,176.7,217.84,176.8z M167.51,267.35c1.85,0.68,2.33,3.16,3.83,4.22c1.65,1.17,4.88-0.04,6.77-0.49
		c0.86-0.21,2.37,0.11,2.75-0.1h0.39c0.23,0.12,0.28,0.71,0.49,0.88c0.23,0.07,0.46,0.13,0.69,0.2v0.2c0.45-0.04,0.78-0.1,0.98-0.39
		c0.2,0.04,0.19,0.02,0.29,0.1c0.06,0.15,0.12,0.04,0,0.2c-0.01,0.75,0.35,1.03,0.88,1.18c0.02,0.82-0.22,1.21-0.39,1.96
		c-0.07,0.3,0.12,0.73,0.1,0.88c-0.01,0.11-1.21,1.36-1.37,1.47c0.12,0.32,0.26,0.3,0.39,0.59c0.15,0.39-0.35,0.37-0.49,0.69
		c-0.34,0.77,0.27,1.16-0.2,1.67c-0.17,0.52-0.96,1.02-1.57,0.79c-0.03,0.03-0.06,0.07-0.1,0.1c0.15,0.94,1.09,1.15,1.57,1.76
		c0.12,0.16-0.01,0.38,0.1,0.59c0.1,0.18,1.81,1.27,2.06,1.37c0.33,0.07,0.66,0.13,0.98,0.2c0.7,0.31,1.28,0.88,1.86,1.28
		c0.74,0.5,1.72,0.5,2.45,0.98c0.96,0.64,0.8,1.59,1.77,2.06c-0.06,0.17-0.02,0.09-0.1,0.2c0.07,0.65,2.3,2.7,2.84,3.04
		c-0.03,0.72-0.71,0.93-1.18,1.18c0.07,0.1,0.13,0.2,0.2,0.29h0.29c0.06,0.54,0.29,0.56,0.29,0.88c0.46,0.2,0.64,0.51,1.18,0.59
		c0.44,2.58-1.88,2.6-3.43,3.73c-0.19,0.14-0.15,0.4-0.29,0.59c-0.12,0.15-0.47,0.15-0.59,0.29c-0.23,0.28,0.1,0.48-0.1,0.79
		c-0.24,0.38-1.3,1.16-1.77,1.37c0.44,0.87-0.07,0.46-0.2,1.08c0.03,0.29,0.07,0.59,0.1,0.88c0.57,0.28,1.31,0.4,1.96,0.69
		c1.31,0.57,2.27,1.51,4.02,1.67c0.03,0.03,0.07,0.07,0.1,0.1c-0.11,0.22-0.14,0.15-0.29,0.29c-0.07,0.17,0.19,0.21-0.1,0.49
		c0.14,0.28,0.35,0.33,0.69,0.39c-0.1,0.17-0.13,0.16-0.2,0.39c0.15,0.13,0.21,0.18,0.29,0.39c0.49,0.06,0.99,0.13,1.48,0.21
		c23.26-4.47,44.5-14.62,62.21-28.95c0.36-1.63,0.68-3.28,0.76-3.54c0.07-0.23-0.12-0.27-0.1-0.39c0.04-0.25,2.07-4.05,2.26-4.22
		c-0.02-0.25-0.04-0.33-0.1-0.49c-0.49,0.05-0.56,0.17-1.08,0.2c0-0.65-0.06-1.09,0-1.37c0.2-0.94,1.11-1.53,1.18-2.84
		c-0.49-0.01-0.57-0.05-0.78-0.29c-0.37-0.48,0.41-1.84,0.78-2.55c0.28-0.52,0.86-0.97,1.18-1.47c0.44-0.7,0.61-1.47,1.08-2.16
		c0.68-1.01,1.52-2.06,2.26-3.04c0.36-0.48,0.93-0.88,1.27-1.37c1.98-2.82,3.52-5.83,5.5-8.63c1.05-1.49,2.14-3.04,3.24-4.51
		c0.56-0.75,1.36-1.45,1.86-2.26c2.19-3.49,3.93-7.26,5.59-11.28c0.45-1.08,0.5-2.31,0.88-3.43c0.81-2.37,1.76-4.86,2.45-7.36v-1.96
		c0.11-0.38,0.63-0.71,0.49-1.28c-0.17-0.68-0.54-1.88-0.1-2.55v-0.39c-1.3,0.3-0.86,0.7-1.37,1.67c-0.32,0.61-1.01,1.03-1.37,1.57
		c-0.07,0.2-0.13,0.39-0.2,0.59c-0.33,0.49-0.85,0.75-1.37,1.08c-0.51,0.32-0.66,1.15-1.08,1.57c-0.29,0.29-0.6,0.27-0.98,0.49
		c-0.62,0.35-1.19,2.16-1.77,2.75c-0.31,0.31-1.05,0.2-1.37,0.49c-0.41,0.37-0.99,1.56-1.37,2.06c-0.29,0.38-0.85,0.62-1.18,0.98
		c-0.86-0.02-1.1-0.3-1.67-0.49c-0.04-0.21-0.09-0.62-0.2-0.79c-0.25-0.1-1.08,0.28-1.28,0.59h-0.2c0.11-0.58,0.77-1.26,1.18-1.57
		c0-1.25-0.52-1.25-0.88-2.06c-0.62,0.04-0.91,0.07-1.38,0.2c-0.1-0.23-0.19-0.46-0.29-0.69c-0.94-0.32-1.91-0.16-2.26-1.18
		c-0.75-0.06-0.79,0.06-1.47-0.2c-0.13,0.03-0.55,0.13-0.69,0.1c-0.74-0.18-1.8-0.65-2.65-0.78c-0.29-1.56-1.41-4.39-2.55-5
		c-0.35-0.19-0.68-0.08-0.98-0.29c-0.42-0.29-0.22-0.58-0.78-0.79c-0.24-0.17-0.67-0.2-1.08-0.2c-0.06-0.63-0.35-0.66-0.49-1.08
		c-0.33-1-0.05-2.06-0.49-2.75v-1.27c-0.13-0.31-0.44-0.19-0.69-0.39c-0.2-0.16-0.73-1.45-0.79-1.86c-0.83-0.33-1.43-0.44-1.86-1.18
		c-0.41,0.08-0.47,0.23-0.79,0.39c-0.14-0.19-0.38-0.36-0.59-0.49c0.03-0.2,0.07-0.39,0.1-0.59c-0.43-0.18-0.47-0.34-0.79-0.59
		c0-0.46-0.04-1.03-0.1-1.18c-0.06-1.1-0.74-0.82-1.27-1.37c-0.16-0.17-0.16-0.49-0.3-0.69c-0.32-0.45-0.86-0.84-1.18-1.27
		c-0.75-1.04-1.79-1.88-2.45-2.94c-0.07-0.3-0.13-0.59-0.2-0.88c-0.07-0.15-0.39-0.27-0.49-0.39c-0.03-0.2-0.07-0.39-0.1-0.59
		c-0.16-0.1-0.33-0.2-0.49-0.29c-0.25-0.36-0.24-0.84-0.49-1.18c-0.39-0.53-1.65-0.96-2.16-1.47c-0.6-0.6-1.01-1.63-1.47-2.35h-0.3
		v-0.49c0.16,0.05,2.04,1.19,2.16,1.37c0.2,0.31,0.06,0.88,0.29,1.18c0.22,0.29,0.75,0.3,1.08,0.49c0.12,0.07,0.1,0.31,0.2,0.39
		c0.4,0.36,1.23,0.6,1.77,0.59c0.05-0.43,0.36-0.89,0.2-1.47c-0.06-0.19-0.28-0.37-0.2-0.78c0.05-0.23,0.24-0.8,0.2-1.08
		c-0.13-0.86-0.38-1.84,0.1-2.45v-0.1c0.42,0.54,0.43,3.86,0.2,4.51c0.06,0.03,0.13,0.07,0.2,0.1c0.03,0.03,0.07,0.07,0.1,0.1
		c0.12-0.22,0.26-0.3,0.39-0.49c0.7,0.08,1.41,0.27,1.77,0.69c0.19,0.22,0.16,0.52,0.39,0.69c0.14,0.1,0.4,0.05,0.49,0.2
		c0.11,0.17-0.05,0.37,0.1,0.49c0.2,0.07,0.39,0.13,0.59,0.2c0.49,0.35,1.36,1.25,1.57,1.86c0.2,0.03,0.39,0.07,0.59,0.1
		c0,0.27,0,0.45,0.1,0.59c0.19,0.32,0.3,0.09,0.59,0.29v0.1c0.24,0.24,0.59,0.62,0.79,0.88h0.29c0.05,0.32,0.17,0.62,0,0.88
		c0.06,0.24,0.95,1.19,1.18,1.28c0.38,0.17,1.56-0.06,2.16,0.39c0.27,0.21,2.17,2.66,2.26,2.94c-0.03,0.56-0.07,1.11-0.1,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39c0.26,0.39,0.08,0.78,0.3,1.27c0.31,0.71,1.25,1.12,1.67,1.77c4.21,0,3.18,3.81,6.67,4.51
		c0.06,0.27,0.24,0.5,0.29,0.69c0.18,0.61-0.29,1.11,0,1.67c0.13,0.1,0.26,0.2,0.39,0.29c0.06,0.29,0.13,0.59,0.2,0.88
		c0.1,0.07,0.2,0.13,0.29,0.2c0.19,0.48-0.25,0.86,0,1.28c0.2,0.53,0.43,0.21,0.79,0.49c0.28,0.34,0.18,0.84,0.39,1.28
		c0.18,0.36,0.65,0.83,0.79,1.17c0.2,0.53-0.23,0.84,0,1.38c0.19,0.45,0.7,0.5,0.49,1.18c0.44-0.1,0.23-0.25,0.49-0.39
		c0.26-0.03,0.52-0.07,0.78-0.1c0.49-0.29,0.69-0.88,1.08-1.28c0.25-0.25,0.68-0.29,0.88-0.59c0.55-0.84,0.79-2.16,1.47-2.84
		c0.49-0.5,1.24-0.71,1.67-1.28c0.69-0.92,1.19-1.87,1.86-2.85c0.43-0.36,0.85-0.72,1.28-1.08c0.68-0.99,0.79-2.39,1.47-3.34
		c0.33-0.33,0.66-0.65,0.98-0.98c0.25-0.35,0.24-0.79,0.49-1.18c0.28-0.42,0.89-0.75,1.18-1.18c0.34-0.5,0.4-1.03,0.69-1.57
		c0.15-0.3,0.6-0.73,0.69-1.08c0.06-0.25-0.17-0.62-0.2-0.79c-0.09-0.47,0.12-1.31,0.29-1.67c0.41-0.84,1.1-1.6,1.57-2.35
		c0.26-0.42,0.24-0.84,0.49-1.28c0.36-0.62,1.18-0.88,1.47-1.57c0.35-0.83-0.2-1.78,0.2-2.65c0.23-0.5,0.98-0.96,1.18-1.47
		c0.07-0.88,0.13-1.77,0.2-2.65c0.21-0.76,0.9-1.29,1.08-1.96c0.23-0.89-1.34-3.68,0.1-4.02v-0.29h0.29c0.03-0.03,0.07-0.07,0.1-0.1
		c0-0.37,0.14-0.96,0.1-1.18c-0.07-0.37-0.46-0.63-0.39-1.18c0.1-0.78,0.83-3.98,0-4.91v-0.1c-0.07,0.07-0.13,0.13-0.2,0.2
		c-0.65-0.07-1.35-0.74-1.67-1.18c-0.51,0.04-1.64,0.7-1.96,1.08c-1.76-0.04-2.22-1.77-2.75-3.04c-0.25-0.61-0.02-1.32-0.39-1.76
		c-0.03-0.03-0.06-0.07-0.1-0.1c-0.21,0.55,0,1.33-0.2,2.06c-0.33,1.25-0.36,2.94-0.79,4.22c-0.12,0.36-0.47,0.7-0.59,1.08
		c-0.27,0.06-0.51,0.1-0.88,0.1c-0.12,0.32-0.15,0.59-0.39,0.79c-0.31,0.15-0.57-0.24-0.98-0.1c-0.22,0.08-0.23,0.39-0.39,0.49
		c-0.36,0.22-0.66-0.14-0.98,0.29c-0.65-0.13-0.91-1.46-1.18-1.96c-0.36-0.1-0.72-0.2-1.08-0.29c-0.69-0.1-1.37,0.63-2.06,0.2
		c-0.51-0.21-0.55-0.9-0.88-1.28c-0.3-0.2-0.67-0.05-1.08-0.2c-0.33-0.12-1.74-1.34-1.86-1.67c-0.25-0.35,0-3.49,0.2-3.92
		c0.16-0.36,0.53-0.47,0.69-0.88c0.21,0.05,0.35,0.09,0.49,0.2c0.5,0.34,0.5,0.94,0.88,1.37c0.22,0.33,0.63,0.1,0.98,0.29
		c0.8,0.44,1.08,1.74,1.86,2.26c0.54,0.54,1.02-0.37,1.28-0.78c0.08-0.07,0.22-0.13,0.29-0.2c0.51,0.1,0.41,0.45,0.78,0.59h0.88
		c0.12,0.06,0.15,0.34,0.2,0.49c0.55-0.09,0.81-0.16,1.47-0.2c0.12-0.3,0.25-0.62,0.39-0.88c0.2,0.04,0.19,0.02,0.29,0.1
		c0.65-0.19,0.5-0.69,1.28-0.59c0.37-0.95,0.86-2.36,0.98-3.63c0.03-0.03,0.06-0.07,0.1-0.1h0.39c0.04,0.02,1.43,2.23,1.47,2.35
		c0.47-0.07,1.5-0.56,1.67-0.78c0.13-0.17,0.2-0.5,0.39-0.59c0.16,0.03,0.33,0.07,0.49,0.1c0.13-0.26,0.26-0.52,0.39-0.79
		c0.35-0.3,0.71-0.5,1.08-0.78c0.18-0.14,0.22-0.45,0.39-0.59c0.42-0.34,1.07-0.33,1.37-0.79c0.07-0.23,0.13-0.46,0.2-0.69
		c0.06-0.09,0.34-0.18,0.39-0.29c0.03-0.33,0.07-0.65,0.1-0.98c0.57-0.93,1.61-1.82,2.06-2.85c0.36-0.82,0.39-1.75,0.88-2.45v-0.2
		h0.2c0.27,0.29,0.43,0.35,0.49,0.88c0.26-0.12,0.2-0.19,0.49-0.29c0.4,0.89,0.75,1.31,1.57,1.77c0.09,0.05,0.32,0.03,0.49-0.1
		c0.79,0.17,0.49,1.21,1.08,1.57c0.5,0.3,1.08-0.09,1.57,0.59c0.23-0.02,0.28-0.02,0.39-0.1c0.45-0.18,0.35-0.52,0.59-0.88
		c0.08,0.02,0.11-0.02,0.2,0.29c0.24-0.11,0.36-0.28,0.49-0.49c0.62,0.18,0.28,0.61,0.49,1.18c0.08,0.22,0.39,0.46,0.49,0.69
		c0.34,0.79,0.35,1.54,0.69,2.35c0.32,0.78,0.42,1.85,0.79,2.75c1.26,3.13,2.3,6.6,2.65,10.69h0.08c0.19-2.97,0.29-5.96,0.29-8.98
		c0-78.28-63.46-141.73-141.73-141.73c-0.56,0-1.12,0.01-1.67,0.02c0.7,0.43,2.23-0.1,3.13,0.09c0.97,0.21,2.14-0.04,3.24,0.2
		c2.14,0.46,4.64,0.42,6.87,0.39c-0.1,0.07-0.09,0.06-0.29,0.1c0.56,0.39,1.54,0.02,2.35,0.2c1.86,0.29,3.73,0.59,5.59,0.88
		c-0.14,0.09-0.32,0.1-0.59,0.1c0.03,0.03,0.07,0.07,0.1,0.1c1.14,0.83,3.82,0.39,5,1.18c0.26,0.16,0.26,0.51,0.49,0.69
		c0.56,0.16,1.11,0.33,1.67,0.49c0.86,0.36,1.95,1.11,2.85,1.37c0.16-0.03,0.33-0.07,0.49-0.1c0.46,0.09,0.96,0.37,1.47,0.49h1.08
		c1.13,0.4,2.19,0.85,3.33,1.28c-0.11,0.08-0.16,0.08-0.39,0.1c0.03,0.03,0.07,0.07,0.1,0.1c0.79,0.57,2.42,0.15,3.24,0.69h0.2
		c-0.03,0.23-0.05,0.24-0.1,0.39c-1.07,0.05-2.53-0.71-3.92-0.29c-0.23,0.07-0.28,0.22-0.59,0.29c0.15,0.29,0.58,0.46,0.88,0.59
		c-0.13,0.16-0.06,0.11-0.3,0.2c0.47,1.24,2.01,0.35,3.04,0.78c0.32,0.14,0.81,0.52,1.18,0.69c-0.27,0.27-0.37,0.23-0.88,0.39
		c0.31,0.8,1.2,1.21,1.77,1.77c-0.03,0.03-0.07,0.06-0.1,0.1c-0.61-0.04-1.51-0.4-1.86-0.2h-0.2c0.07,0.07,0.13,0.13,0.2,0.2v0.1
		c-0.19-0.02-2.7-0.7-2.84-0.78c-0.63-0.02-1.42-0.13-1.47,0.2c-0.74,0-0.59,0.07-0.88,0.29c0.37,0.51,0.75,0.81,1.37,1.08v0.2
		c-0.55-0.14-1.44-0.52-2.06-0.1c-0.43,0.06-0.34,0.12-0.59,0.29c0.51,1.11,2.74,1.1,3.83,1.67v0.39h0.49
		c0.27,0.29,0.67,0.65,0.98,0.88v0.1c-0.28-0.08-0.34-0.1-0.49-0.29h-0.29c0.1,0.28,0.17,0.35,0.39,0.49
		c-0.1,0.08-0.03,0.04-0.2,0.1c0.13,0.17,0.37,0.23,0.49,0.39v0.29c0.29,0.1,0.59,0.2,0.88,0.29c0.35,0.31,0.33,0.86,0.59,1.28
		c0.36,0.23,0.72,0.46,1.08,0.69c-0.07,0.07-0.13,0.13-0.2,0.2c0.26,0.25,0.61,0.35,0.88,0.59c-0.03,0.06-0.07,0.13-0.1,0.2
		c0.1,0.1,0.2,0.2,0.29,0.29c0.06-0.03,0.13-0.07,0.2-0.1c0.32,0.07,0.28,0.24,0.39,0.49c0.2-0.04,0.19-0.02,0.29-0.1
		c0,0,0.39-0.02,0.2-0.1c-0.03-0.03-0.06-0.07-0.1-0.1c0.71,0.09,1.25,0.83,1.77,1.18c-0.01,0.44-0.04,1.21-0.1,1.37
		c0.17,0.29,2.76,1.07,3.24,1.18c0.36-0.37,1.23-0.52,1.77-0.1h0.2c-0.02,0.25-0.04,0.33-0.1,0.49c-0.46-0.03-0.92-0.07-1.37-0.1
		c-0.34,0.1-1.07,0.44-1.37,0.29c-0.24,0.12-0.15,0.17-0.39,0.29c0.07,0.27,0.14,0.42,0.29,0.59v0.1c-0.42,0.01-1.11,0.07-1.37-0.1
		c-0.35,0-0.66,0.02-0.88,0.1c0.06,0.17,0.02,0.1,0.1,0.2c0.47,0.3,1.76,0.21,2.35,0.59c0.58,0.36,0.51,1.32,1.18,1.57v0.2
		c-1-0.28-1.59-1.07-2.45-1.47c-0.73-0.33-0.77,0.27-1.47,0.1c-0.54-0.13-0.92-0.4-1.77-0.39c0.05,0.78,0.44,0.55,0.88,0.88
		c0.2,0.15,0.33,0.72,0.69,0.98c0.37,0.27,0.79,0.33,1.18,0.59c0.32,0.21,1.04,0.67,1.28,0.98c0.44,0.59,0.49,1.33,1.08,1.77
		c0.34,0.25,0.86,0.56,1.28,0.69c0.26,0.03,0.52,0.07,0.79,0.1c0.32,0.17,0.59,0.59,0.88,0.78c0.32,0.21,0.69,0.26,0.98,0.49
		c0.48-0.04,0.4-0.01,0.39-0.29c0.43,0.01,2.06,0.21,2.35,0.39c0.2,0.2,0.39,0.39,0.59,0.59v0.3c-0.61-0.03-0.87-0.17-1.37-0.3
		c-0.1-0.02-4.02,0.34-4.41,0.49c-0.43,0.16-0.92,0.59-1.37,0.78c-0.35,0.15-1.57-0.15-1.77-0.29h-0.69c0.07,0.2,0.13,0.39,0.2,0.59
		c0.58,0.23,1.33,0.31,1.86,0.39c0.23-0.03,0.46-0.07,0.69-0.1c0.79,0.21,1.49,0.85,2.16,1.18c-0.25,0.37-0.9,0.03-1.28,0.29
		c-0.31,0.22-0.45,0.81-0.59,1.18c-0.5,0.09-1.41,0.37-1.86,0.29c-0.29,0.29-0.59,0.59-0.88,0.88c-0.41,0.79,0.16,1.49-0.79,1.77
		c0.03,0.69,0.27,1.57-0.1,2.06c-0.2,0.13-0.72,0.06-0.79,0.1c-0.31,0.15-0.24,0.48-0.19,0.98c-0.03,0.03-0.07,0.07-0.1,0.1
		c-0.9-0.16-1.4-1.18-2.36-1.18c-1.09,0-1.59,0.58-2.84,0.59c0.33,0.37,0.93,0.21,1.37,0.49c0.77,0.49,0.89,1.57,1.47,2.26
		c0.35,0.42,0.8,0.08,1.28,0.39c0.6,0.39,0.64,1.2,1.08,1.77v0.1c-0.42-0.04-0.61-0.26-0.88-0.29c-0.28-0.04-0.46,0.26-0.59,0.29
		c-0.23-0.03-0.46-0.07-0.69-0.1c-0.11,0.36,0.17,0.78,0,1.28c-0.17,0.16-0.33,0.33-0.49,0.49c-0.23,0.51,0.07,0.76-0.29,1.08
		c0.08,0.86,1.18,1.32,1.77,1.67c-0.07,0.27-0.12,0.73-0.2,0.88c-0.36,0.17-2.71-0.12-3.04-0.39c-0.29,0-0.54,0-0.69,0.1
		c-0.09,0.22,0.12,0.48-0.2,0.69c0.27,0.58,1.12,0.68,1.57,1.08c0.41-0.06,0.48-0.18,0.78-0.29c0.23,0.26,0.47,0.51,0.79,0.69
		c-0.03,0.38-0.11,0.57-0.3,0.79c-0.16,0.15-0.16-0.09-0.39-0.1c-0.23,0.07-0.46,0.13-0.69,0.2c-0.52-0.1-0.96-0.62-1.37-0.78
		c-0.43-0.18-0.68,0.19-0.69,0.2c-0.34,0.13-0.53-0.16-0.88-0.2c-0.04-1.43-0.77-1.03-1.37-1.77c-0.19-0.09-0.31-0.66-0.2-0.88
		c-0.13-0.71-0.88-0.73-1.47-0.98c-0.76-0.32-1.91-0.81-2.84-1.18c-0.05-0.12-0.12-0.3-0.2-0.39v-0.1c1.05,0.67,3.99,0.86,5.49,0.49
		c0.86-0.21,1.53,0.3,2.26-0.1c0.52-0.29,0.79-0.94,1.18-1.37c0.01-0.75,0.03-1.46-0.29-1.86c-0.22-0.3-0.24-0.1-0.59-0.29
		c-0.26-0.29-0.52-0.59-0.79-0.88c-0.4-0.26-0.98-0.11-1.47-0.29c-0.61-0.22-1.44-0.08-2.45-0.39c-1.3-0.4-2.71-1.17-4.22-0.69
		c-0.51,0.16-0.71-0.33-1.08-0.2c-0.03,0.1-0.06,0.2-0.1,0.29c-0.29,0.13-0.84-0.15-0.98-0.1c-0.25-0.15-0.2-0.21-0.2-0.59
		c-0.38-0.11-0.67,0.03-0.98-0.2c-0.65,0-0.7,0.2-0.69,0.59c-0.55-0.08-1.33-0.07-1.86-0.1c0.19-0.33,0.26-0.22,0.59-0.2
		c-0.15-0.44-0.05-0.51,0.2-0.79c0.03-0.03,0.07-0.07,0.1-0.1h-0.1c-0.56-0.68-1.83-0.37-2.36-0.78c-0.25,0.01-0.36,0.01-0.49,0.1
		c-0.11,0.16-0.11,0.48-0.1,0.78c-0.16-0.21-0.2-0.51-0.2-0.88c-0.19-0.1-0.27-0.14-0.39-0.29c-0.33,0.03-0.66,0.07-0.98,0.1
		c-0.02,0.23-0.02,0.28-0.1,0.39c-0.15,0.26-0.42,0-0.59,0.49h-0.29c0.06-0.17,0.02-0.1,0.1-0.2c-0.08-0.34-0.14-0.27-0.29-0.49
		c-0.43,0.03-0.4,0.09-0.69,0.2c0.03,0.16,0.07,0.33,0.1,0.49c-0.28-0.24-0.33-0.16-0.59-0.39c-0.09,0.14-0.1,0.32-0.1,0.59
		c-0.13-0.13-0.26-0.26-0.39-0.39h-0.2c0.05,0.51,0.33,0.61,0.69,0.78v0.2c-0.47-0.11-0.92-0.29-1.27-0.2
		c-0.04,0.01-0.62,0.44-0.88,0.59c0.1,0.13,0.2,0.26,0.29,0.39c0.2-0.04,0.19-0.02,0.29-0.1h0.29c-0.12,0.26-0.19,0.2-0.29,0.49
		c-0.28-0.09-0.71-0.07-0.88-0.1c-0.03,0.03-0.07,0.07-0.1,0.1c0.03,0.35,0.01,0.33,0.2,0.49v0.2c-0.46-0.1-0.41-0.26-0.98-0.29
		c0.04,0.4-0.02,0.37,0.29,0.49v0.29c-0.31-0.15-0.21-0.26-0.39,0.1h-0.2c0.08-0.3,0.19-0.38,0.1-0.59v-0.39
		c-0.08,0.06-0.13,0.26-0.2,0.29c-0.06-0.06-0.13-0.13-0.2-0.2c-0.41-0.06-0.87,0.25-1.18,0.39c-0.04,0.26,0.13,0.57,0,0.88
		c-0.13,0.29-0.24-0.07-0.3,0.59c-0.63,0.05-0.61,0.32-0.98,0.59c0,0.29-0.01,0.54,0.1,0.69c0.12,0.22,0.17,0.2,0.39,0.29
		c-0.04,0.2-0.02,0.19-0.1,0.29v0.2c-0.19-0.11-0.41-0.48-0.49-0.69c-0.26,0.09-0.26,0.1-0.39,0.29c-0.14-0.22-0.13-0.6-0.29-0.79
		v-0.1c-0.27,0.23-0.49,0.59-0.59,0.98c-0.3-0.01-0.27-0.07-0.39,0c-0.34,0.13-0.36,0.36-0.59,0.59c0.02,0.45,0.01,0.42,0.3,0.59
		c-0.09,0.52-0.42,0.58-0.98,0.59c-0.17,0.39-0.39,0.62-0.69,0.88v0.49c0.46-0.25,0.84-0.74,1.28-0.98
		c0.53-0.29,0.83-0.04,1.27-0.39h0.2c-0.07,0.52-0.35,0.84-0.69,1.08c0.03,0.39,0.18,0.52,0.2,0.59c-0.03,0.57-0.12,0.32-0.29,0.49
		c-0.71,0.56-0.8,1.86-1.77,2.16c0.06,0.31,0.02,0.24,0.2,0.39v0.2h-0.39c-0.01,0.66-0.12,1.21-0.59,1.47
		c-0.02,0.88,0.12,0.58,0.49,0.88c0.09,0.15,0.02,0.69,0,0.98c-0.43,0.06-0.49,0.11-0.59,0.49c-0.31-0.06-0.29-0.09-0.49-0.2
		c-0.15,0.15-0.4,0.29-0.59,0.39c0.04,0.2,0.02,0.19,0.1,0.29v0.2c0.37-0.04,0.37-0.08,0.59-0.2c0.03,0.03,0.07,0.07,0.1,0.1
		c-0.18,0.43-0.61,0.57-0.88,0.88c-0.06,0.2-0.13,0.39-0.2,0.59c-0.36,0.49-0.88,1.14-1.08,1.77h-0.1
		c-0.24-0.36-0.62-0.47-0.88-0.79h-0.2c-0.1,0.28-0.13,0.75-0.29,0.98c-0.12,0.25-0.26,0.15-0.59,0.2c-0.07,0.35-0.16,0.46,0.1,0.69
		c-0.46,0.62-1.58,0.86-2.06,1.18c-0.33,0.22-0.35,0.67-0.59,0.98c-0.14,0.19-0.94,0.59-1.18,0.79c-0.17,0.28-0.29,0.85-0.59,1.27
		c0.01,0.44-0.04,0.46,0.29,0.59c-0.07,0.38-0.06,0.38-0.39,0.49c-0.07,2.15,0.83,3.9,0.69,5.98c0.12,0.24,0.49,0.26,0.59,0.49
		c0.03,0.36,0.07,0.72,0.1,1.08c0.2,0.53,1.15,1.16,1.77,1.28c0.18,0.88,0.83,0.49,1.57,0.59c1.56,0.22,2.73-2.05,3.63-2.94
		c0.03-0.02,1.05-0.37,1.28-0.39c0-0.27,0-0.45-0.1-0.59v-0.49h0.1c0.2,0.77,0.75,1.15,1.08,1.77c0.21,0.4,0.2,0.87,0.2,1.18
		c0.21,0.37,0.61,0.86,0.78,1.27c0.12,0.28,0.04,0.55,0.2,0.79c0.63,0.97,1.75,1.78,2.26,2.84h0.39v0.49
		c-0.23,0.02-0.28,0.02-0.39,0.1c-0.12,0.08,0.08,0.18,0.2,0.29c-0.11,0.08-0.16,0.08-0.39,0.1c0.06,0.22,0.07,0.26,0.19,0.39
		c-0.09,0.15-1.63,0.77-1.96,0.78c-0.06,0.33-0.11,0.41-0.29,0.59c-0.13,0.09-0.24,0.09-0.49,0.1c0.19,0.54,0.48,0.96,0.49,1.77
		c0.17-0.06,0.1-0.02,0.2-0.1c0.68,0,0.71,0.15,1.08,0.39c-0.09,0.24-0.11,0.15-0.2,0.39c-0.24-0.14-0.12,0.02-0.2-0.29
		c-0.28,0.11-0.61,0.18-0.98,0.2c-0.06,0.17-0.02,0.1-0.1,0.2c0.06,0.48,0.69,0.96,1.18,0.88c0.07-0.01,0.28-0.36,0.59-0.2
		c0.04,0.02,0.1,0.24,0.19,0.29c0.12-0.42,0.18-1.25,0.88-1.37c-0.13-0.24-0.33-0.27-0.49-0.49c-0.05-0.22,0.36-0.36,0.2-0.79
		c-0.09-0.24-0.22,0.08-0.29-0.49c0.4,0,0.51,0.01,0.69-0.2h0.1c-0.11-0.23-0.09-0.18-0.29-0.29v-0.59c0.03,0.03,0.06,0.07,0.1,0.1
		c0.24,0.11,0.28,0.25,0.49,0.39c-0.01,0.46-0.02,0.71-0.2,0.88v0.2c0.37-0.07,0.81,0.1,1.18,0c0.62-0.17,0.61-0.33,1.47-0.29
		c0.14-0.83-0.3-1.17,0.1-1.86h0.49c0.02-0.23,0.02-0.28,0.1-0.39c0.22-0.16,1.12-0.25,1.47,0c0.23-0.03,0.24-0.05,0.39-0.1
		c0.14-0.57,0.36-1.09,0.39-1.77c0.25,0.15,0.37,0.83,0.39,1.18h0.2c0.02-0.56,0.16-2.18,0.39-2.55v-0.98h-0.2
		c-0.1,0.52-0.2,1.05-0.29,1.57c-0.17,0.06-0.1,0.02-0.2,0.1c-0.17-0.31,0.15-0.48,0-0.88c-0.33-0.92,0.16-3.06-0.29-4.32
		c0.48-0.23,0.73-0.56,1.37-0.59c0.17-0.61,0.92-0.59,1.18-1.08c0.3-0.55-0.12-1.33,0.39-1.67c-0.04-0.23-1.74-2.18-1.96-2.26v-0.1
		c-0.31,0.16-0.12,0.06-0.1,0.39c-0.43-0.27-1.03-0.67-1.47-0.49c-0.51-0.58-0.68-1.58-0.98-2.35c0.25-0.06,0.05-0.03,0.29,0
		c0.03-0.7-0.11-0.48-0.29-0.98c0.1-0.48,0.11-0.86-0.1-1.28c0.33-0.29,1.68-2.85,1.67-3.04c0.2-0.32,0.37-0.1,0.69-0.29
		c0.23-0.15,0.04-0.36,0.2-0.59c0.14-0.19,0.54-0.16,0.69-0.39c0.38-0.61,0.11-1.35,0.69-1.77c-0.05-0.58-0.46-0.87-0.78-1.18
		c0.08-0.52,0.32-1.09,0.59-1.47c0.15-0.24,0.16-0.23,0.39-0.1c0.31-0.38,0.3-0.86,0.78-1.08c0.33-0.2,0.34-0.02,0.59,0.2
		c0.15,0.13,0.09-0.17,0.1-0.2c0.1,0.03,0.2,0.07,0.29,0.1c0.06-0.16,0.08-0.23,0.1-0.49c0.52,0.17,0.95,0.26,1.47,0.49
		c0.15,0.4,0.23,0.89,0.49,1.18c-0.06,0.17-0.02,0.1-0.1,0.2v0.1c-0.29-0.11-0.27-0.14-0.39-0.39h-0.39
		c0.1,0.28,0.17,0.35,0.39,0.49c-0.16,0.32-0.05,0.76-0.29,1.28c-0.22,0.48-0.55,0.75-0.59,1.47c-0.44,0.09-0.27,0.12-0.69,0.1
		c-0.12,0.65-0.22,1.27-0.59,1.67c-0.14,0.21-0.63,0.29-0.88,0.1h-0.2c0.08,0.6,0.49,0.74,0.2,1.08c0.09,0.47,0.33,1.28,0.59,1.67
		c0.16,0.13,0.33,0.26,0.49,0.39v0.39c0.22,0.53,0.66,0.92,0.79,1.37c-0.03,0.13-0.07,0.26-0.1,0.39c0.06,0.03,0.13,0.07,0.2,0.1
		c0.28,0.81-0.32,1.27,0.2,1.77c-0.1,0.25-0.32,0.56-0.49,0.78c-0.13,0.08-0.52-0.04-0.88,0.1c-0.22,0.08-0.53,0.3-0.88,0.49
		c0.12,1.2,1.53,0.77,2.06,1.28h0.1c-0.04-0.2-0.02-0.19-0.1-0.29v-0.2c0.23,0.14,0.44,0.27,0.59,0.49c0.55-0.18,0.83-0.13,1.47-0.1
		c0.38-0.24,0.37-0.22,0.98-0.2c0.04-0.2,0.03-0.19,0.1-0.29c0.17-0.08,0.96,0.06,1.47-0.2c0.1-0.05,0.53-0.56,0.59-0.59
		c0.19-0.11,0.43,0.13,0.49,0.1c0.19-0.1,0.14-0.46,0.29-0.59c0.29-0.24,0.74-0.08,1.08-0.29c0.59-0.36,1.17-0.82,1.67-1.27
		c0.25,0.23,1.67-0.48,1.86-0.98c0.26,0.13,0.36,0.44,0.49,0.69c0.7,0.03,0.95,0.18,1.77,0c0.1,0.08,0.02,0.04,0.2,0.1
		c0.03,0.16,0.07,0.33,0.1,0.49c-0.3-0.01-0.52-0.03-0.59,0c-0.54,0.38,0.19,0.69-0.79,0.59c-0.07,0.24-0.07,0.25,0,0.49
		c-0.31-0.06-0.24-0.02-0.39-0.2h-0.2c0.06,0.5,0.36,0.66,0.2,0.98v0.2c-0.85,0.03-2.29,0.36-2.85,0c-0.48,0.01-0.58,0.09-0.88,0.2
		v0.29c-0.46-0.01-0.62,0.17-0.78,0.1c-0.21,0.08-0.2,0.1-0.2,0.1c-0.2,0.36-0.75,0.35-1.08,0.59c-0.58,0.41-0.36,0.99-0.98,1.28
		c0.22,0.31,0.3,0.12,0.49,0.29c0.18,0.15,0.16,0.49,0.3,0.69c0.36,0.51,0.95,0.72,1.57,0.98c0.07-0.07,0.13-0.13,0.2-0.2v-0.29h0.3
		c0.06,1.45,0.73,2.12,0.78,3.34c-0.28,0.27-0.43,0.58-0.78,0.79c-0.55,0.3-0.88-0.61-1.18-0.88c-0.45-0.42-1.13-0.22-1.27-0.98
		c-0.45,0.15-0.94,0.49-1.28,0.78c-0.35,0.5-0.54,3.4-0.2,4.12c0.36,0.75,1.28,2.24,0.49,3.24c-0.2,0.58-0.7,0.6-1.28,0.78
		c0.13,0.46,0.28,0.88-0.1,1.28c-0.21,0.58-0.71,0.48-1.18,0.78c-0.8-0.1-0.98-0.7-1.28-1.27c-0.97,0.02-3.04,0.9-3.43,1.37
		c-0.18,0.22-0.17,0.61-0.39,0.79c-0.9,0.69-2.34,0.61-3.04,1.47c-0.52-0.04-1.03-0.36-1.18-0.78c-0.3,0.1-0.37,0.21-0.69,0.29
		c-0.03-0.03-0.06-0.06-0.1-0.1c0.04-0.2,0.03-0.19,0.1-0.29c0.2-0.11,0.18-0.05,0.39,0v-0.1c0.09-0.27-0.2-0.38-0.1-0.79
		c-0.25-0.09-0.45-0.07-0.59-0.29c-0.48,0.09-0.68,0.44-0.88,0.79c-0.23-0.02-0.28-0.02-0.39-0.1c-0.65,0.13-0.54,0.7-0.98,0.98
		c-0.3,0.19-0.58,0-0.79,0.1c-0.5,0.24-0.34,0.59-1.27,0.59c0.08-0.49,0.28-1.02,0.49-1.37c-0.07-0.07-0.13-0.13-0.2-0.2h-0.39v0.39
		c-0.07,0.06-0.13,0.13-0.2,0.2c-0.59-0.01-0.97-0.2-1.18-0.29c-0.44-0.21-0.52-0.8-0.49-1.47c-0.26-0.13-0.33-0.24-0.69-0.29
		c0.03-0.13,0.07-0.26,0.1-0.39c0.54,0.15,0.42,0.51,1.08,0.59c-0.1,0.08-0.02,0.04-0.2,0.1c0.14,0.39,0.3,0.44,0.69,0.29
		c0.07,0.12,0.11,0.2,0.2,0.29c0.03,0.03,0.06,0.06,0.1,0.1c0.08-0.21,0.16-0.52,0.29-0.69c-0.02-0.88-0.34-1.21-0.59-1.86
		c-0.26-0.06-0.72-0.11-1.27-0.1c0.06-0.22,0.07-0.26,0.2-0.39c0.03-0.03,0.07-0.07,0.1-0.1v0.1h0.29
		c-0.14-0.38-0.02-0.76-0.29-1.08c0.21-0.13,0.43-0.02,0.59-0.1c1.35-0.49,0.09-1.54-0.49-1.86c-0.04-0.64,0.1-0.74,0.2-1.28
		c0.1-0.58-0.39-0.99-0.2-1.37v-0.2c-0.97,0.29-1.38,0.79-1.77,1.67c-0.52,0.19-1.06,0.05-1.57,0.39c-1.4,1.09-0.08,3.34-0.59,4.22
		c0.03,0.55,0.35,0.77,0.69,0.98c-0.01,1.09-0.47,2.37,0.3,3.24c-0.12,0.7-0.45,1.02-0.79,1.47c-1.31,0.09-2.46,0.72-3.24,0.98
		c-0.83,0.28-1.65,0.05-2.35,0.59c-1.13,0.76-0.74,3.06-1.67,4.02c-0.82,0.84-1.84,1.4-2.75,2.16c-0.25,0.21-0.27,0.63-0.59,0.78
		c-0.67,0.33-1.59,0.18-2.06,0.69c-0.38,0.61-0.02,1.79-0.39,2.36c-0.81,1.21-2.91,0.33-3.24,2.45c-0.52,0.09-1.8-0.06-2.26-0.39
		c-0.4-0.24-0.1-0.43-0.29-0.79c-0.14-0.1-0.97-0.15-1.37-0.2c0.07,0.58,0.61,2.35,0.29,2.84c-0.06,0.17-0.02,0.1-0.1,0.2
		c-0.55,0.35-1.49,0.01-1.86,0.39c-0.41-0.13-0.68-0.44-0.78-0.88c-0.8-0.04-3.07,0.3-3.92,0.79c0.02,0.71,0.26,0.91,0.59,1.28
		c-0.2,0.11-0.18,0.15-0.49,0.2c0.12,0.26,0.4,0.65,0.59,0.88c0.33,0.18,0.49-0.11,0.88,0c0.08,0.02,0.7,0.31,0.78,0.39
		c0.03,0.13,0.07,0.26,0.1,0.39c0.4,0.31,0.5-0.08,0.69,0.49c0.44-0.12,0.74-0.1,1.08,0.1c0.37,0.23,0.6,1.84,0.59,2.45
		c0.96,0.19,1.52,1.91,1.77,2.94c0.43,1.81,0.07,5.04-0.88,6.67c-0.13,0.36-0.26,0.72-0.39,1.08c-0.25,0.21-0.65,0.18-0.88,0.39
		c-0.83-0.04-1.07-0.44-1.67-0.59c-0.49-0.12-0.58,0.29-0.98,0.2c-0.23-0.05-0.48-0.42-0.69-0.49c-0.93-0.31-1.52,0.45-2.45,0.2
		c-0.58-0.16-1.32-0.6-1.86-0.79H142c-0.1-0.13-0.2-0.26-0.29-0.39c-0.29,0.07-0.59,0.13-0.88,0.2c-1.1-0.11-2.54-0.26-3.24-1.08
		c-0.66,0.06-1.14,0.1-1.67,0.49c-0.22,0.16-0.31,0.46-0.59,0.59c-0.35,0.16-0.45-0.14-0.88,0c-0.33,0.11-0.69,0.5-0.98,0.69
		c0,0.76,0.25,0.59,0.39,1.18c0.02,0.1-0.21,0.53-0.1,0.78h0.2c0.11,0.23-0.09,2.83-0.2,3.34c0.03,0.56,0.07,1.11,0.1,1.67
		c-0.11,0.32-0.48,0.85-0.59,1.18c-0.38,1.09-0.49,2.08-1.08,2.94c-0.16,0.24-0.66,0.44-0.78,0.69v0.69
		c-0.1,0.3-0.37,1.04-0.59,1.28c0.06,0.52,0.2,0.68,0.69,0.78v0.59c0.26,0.03,0.52,0.07,0.78,0.1c0,1.16-0.26,3.74-0.98,4.32
		c0.03,0.03,0.07,0.06,0.1,0.1c0.21,0.09,0.26-0.05,0.49-0.1c0.79-0.18,1.78,0.38,2.06,0.78c0.55-0.15,1.27-0.78,2.16-0.49
		c0.38,0.13,0.57,0.49,1.08,0.59c0.01,0.96,0.69,2.46,1.18,2.94c0.34,0.34,0.88,0.39,1.18,0.78c0.77-0.17,0.62-0.76,1.08-1.18
		c0.38-0.34,1.02,0.02,1.57-0.2c0.25-0.1,0.5-0.5,0.79-0.59c0.64-0.2,1.46,0.06,2.06,0.19c0.42-0.03,0.85-0.06,1.28-0.1
		c0.13,0.03,0.5,0.27,0.59,0.29c0.44,0.1,0.85-0.3,1.28-0.39c0.13,0.13,0.26,0.26,0.39,0.39h0.2c0.16-0.27,0.43-0.45,0.59-0.69
		c0.27-0.4,0.28-0.92,0.59-1.28c0.27-0.32,0.73-0.32,0.98-0.69c0.64,0.08,0.9,0.08,1.57,0c0.01-0.94,0.29-1.18,0.39-1.86h0.29v-0.29
		c0.56-0.56,1.16-1.06,1.86-1.47c-0.14-0.61-0.84-0.7-1.08-1.57c-0.03-0.33-0.07-0.65-0.1-0.98c0.14-0.6,1.79-2.92,2.26-3.24
		c0.37-0.26,0.67-0.17,0.88-0.59c0.1-0.19-0.03-0.48-0.1-0.79c0.42-0.27,1.05-0.62,1.57-0.79c0.57-0.19,1.2,0,1.67-0.29
		c0.16-0.23,0.33-0.46,0.49-0.69c0.31-0.21,0.66-0.19,0.98-0.39c0.39-0.25,0.77-0.64,1.18-0.88c-0.03-0.36-0.06-0.72-0.1-1.08
		c0.1-0.03,0.2-0.07,0.29-0.1c0.06-0.13-0.42-1.18-0.49-1.28c-0.02-1.88,1.14-1.95,2.16-2.75c0.84,0.11,1.22,0.49,1.86,0.69
		c0.16,0.15,0.71-0.47,1.28-0.2c0.03,0.1,0.06,0.2,0.1,0.29c0.33,0.07,0.65,0.13,0.98,0.2c0.03,0.1,0.07,0.2,0.1,0.29
		c0.61,0.28,1.45-0.34,2.06-0.39c0.21-0.94,1.26-1.73,2.06-2.06c0.46-0.19,0.91-0.12,1.28-0.39c0.25-0.19,0.12-0.5,0.29-0.78
		c0.22-0.38,0.8-0.72,1.08-1.08c1.49,0.06,2.38,0.87,3.53,1.37c0.05,0.18,0.21,1.21,0.29,1.37c0.11,0.22,0.56,0.43,0.68,0.69
		c0.17,0.35,0.01,0.89,0.1,1.08c0.18,0.1,0.2-0.1,0.39,0c0.18,0.09,0.06,0.35,0.19,0.49c0.16,0.03,0.33,0.06,0.49,0.1
		c0.21,0.14,0.35,0.44,0.59,0.59c-0.02,0.23-0.02,0.28-0.1,0.39c0.25,0.33,0.62-0.05,1.08,0.2c0.35,0.19,0.4,0.75,0.69,0.98
		c0.23,0.06,0.46,0.13,0.69,0.2c0.17,0.11,0.17,0.33,0.29,0.49c0.2,0.25,0.52,0.3,0.79,0.49c0.14,0.11,0.17,0.38,0.29,0.49
		c0.45,0.39,0.85,0.08,1.27,0.69c0.41-0.14,0.6-0.44,0.98-0.1c1.16-0.01,1.04,0.53,1.57,1.08c0.05,0.13,0.04,0.07,0.1,0.1
		c0.63-0.03,0.76,0,0.79,0.59c0.2-0.04,0.45-0.09,0.59-0.2c1.41,0.05,0.57,0.73,0.98,1.28c0.13,0.18,0.83,0.27,1.08,0.59
		c0.26-0.09,0.26-0.1,0.39-0.29c1.09,0.21,1.53,2.86,2.26,3.63c-0.06,0.57-0.41,0.67-0.79,0.88c0.12,0.38,0.29,0.69,0,1.08
		c-0.28,0.56-0.28-0.01-0.79,0.2c-0.25,0.1-0.61,0.62-0.88,0.69c-0.2,0.05-0.68-0.2-0.98,0c-0.03,0.1-0.06,0.2-0.1,0.29
		c-0.12,0.1-0.68,0.36-0.78,0.39c-0.54,0.17-0.69-0.29-1.28,0.2c-0.97-0.05-1.07-0.58-1.96-0.49c-0.07,0.16-0.13,0.33-0.2,0.49
		c-0.43,0.02-1.93,0.1-1.38,0.98c0.35,0.95,1.14,0.39,1.96,0.79c0.46,0.22,1.05,0.76,1.57,0.98c0.37,0.16,0.95-0.08,1.37,0.1
		c0.36,0.15,0.45,0.72,0.79,0.88c0.35,0.17,1.05,0,1.37,0.2c0.12-0.07,0.45-1.13,0.49-1.28c0.12-0.42-0.48-0.78-0.59-1.08
		c-0.27-0.75,0.66-2.26,0.88-2.65c0.03-0.03,0.07-0.06,0.1-0.1c0.1,0.14,0.16,0.49,0.2,0.69c0.28,0.01,0.14,0.07,0.29,0h0.69
		c0.03-0.06,0.07-0.13,0.1-0.2c0.13-0.36,0.26-0.72,0.39-1.08c0.2-0.16,0.39-0.33,0.59-0.49c0.2-0.5-0.22-0.87,0-1.28
		c0.23-0.61,0.86-0.33,1.18-0.79c0.05-0.11-0.04-0.76-0.2-0.98c-0.03-0.72-0.74-1-1.47-0.98c-0.08-0.18-0.14-0.26-0.2-0.49
		c-0.27-0.65,0.59-1.89,0.79-2.45c0.39,0.1,0.79,0.42,1.18,0.49c0.12,0.02,0.51-0.19,0.78-0.1c0.47,0.16,0.83,0.89,1.08,1.28
		c0.25,0.01,0.36,0.01,0.49,0.1h0.1c0.05-0.36-0.02-0.59,0.2-0.88c-0.11-1.32-3.06-2.56-4.22-2.94c-0.82-0.27-1.94-0.22-2.26-0.98
		c-0.07-0.15,0.03-0.58,0.2-0.78c-0.07-0.37-0.14-0.35-0.29-0.59c-2.54,0.08-2.46,0.65-4.22-0.88c-0.27-0.23-0.67-0.31-0.88-0.59
		c-0.59-0.78-1.02-2.98-1.76-3.43c-0.34-0.21-0.62-0.1-0.98-0.29c-0.5-0.27-0.51-0.65-1.37-0.69c-0.21-0.42-0.47-0.95-0.79-1.28
		c0.05-1.17,0.69-1.54-0.1-2.26c0.01-0.38,0.02-0.5,0.2-0.69c0.26-0.64,1.44-0.94,2.16-0.88c0.07,0.9,0.51,2.04,1.18,2.35v0.1
		c0.32-0.15,0.56-0.64,0.59-1.08c0.13,0.03,0.26,0.06,0.39,0.1c-0.07-0.39-0.18-0.4-0.2-0.88h0.29c0.11,0.24,0.23,0.35,0.1,0.59
		c-0.04,0.35,0.05,0.26-0.2,0.29c-0.03,0.47-0.08,0.9,0.2,1.27v0.2c0.12-0.07,0.2-0.11,0.29-0.2c0.07-0.11-0.13-0.58-0.2-0.88
		c0.07-0.07,0.13-0.13,0.2-0.2v-0.1c0.23,0.09,0.16,0.04,0.3,0.2c0.21,0.11,0.08,0.65,0.29,0.98c0.27,0.42,0.86,1.09,1.28,1.37v0.2
		c-0.21-0.09-0.26-0.15-0.39-0.29h-0.49c0.23,0.65,0.93,0.92,1.37,1.37c0.1-0.19,0.03-0.11,0-0.39c0.2,0.03,0.39,0.07,0.59,0.1
		c0.1,0.22,0.16,0.28,0.2,0.59c0.08-0.1,0.04-0.02,0.1-0.2c0.34,0.05,0.93,0.57,1.18,0.78c0.34-0.11,0.2,0.02,0.2-0.29
		c0.17-0.06,0.1-0.02,0.2-0.1h0.49c-0.09,0.26-0.1,0.26-0.3,0.39c0.1,0.1,0.2,0.2,0.3,0.29c-0.09,0.31,0.05,0.15-0.2,0.29
		c0.2,0.14,0.67,0.16,0.79,0.1c0.01-0.13,0.02-0.14-0.2-0.29c0.16-0.15,0.49-0.29,0.69-0.39c0.26,0.29,0.62,0.5,0.98,0.69
		c-0.25,0.29-1.06,0.5-1.57,0.49v0.2c0.62-0.01,1.15-0.36,1.57-0.29c0.41,0.06,1.02,0.45,1.37,0.59c0.91,0.35,1.87,0.59,2.65,1.08
		c0.34,0.21,0.49,0.66,0.78,0.88c0.24,0.18,0.75,0.27,0.98,0.39c-0.01,1.04,0.21,1.52,0.29,2.45c0.03,0.31-0.26,0.93-0.1,1.37
		c0.17,0.16,0.33,0.33,0.49,0.49c-0.21,0.23-0.04,0.1-0.29,0.1v0.2c0.48,0.44,1.37,0.66,1.76,1.18c0.03,0.2,0.07,0.39,0.1,0.59
		c0.31,0.52,1.51,1.56,2.16,1.77c0.09,0.46-0.13,1.15,0,1.37v0.2h0.2c0.06-0.06,0.13-0.13,0.2-0.2c0.07-0.1-0.01-0.22,0.1-0.39
		c0.03-0.03,0.07-0.07,0.1-0.1c0.06,0.16,0.08,0.23,0.1,0.49h0.29c0.14,0.32,0.3,0.53,0.39,0.88c0.42,0,0.83-0.02,1.08-0.2h0.39
		c-0.07,0.23-0.1,0.22-0.2,0.39h-0.49c-0.05,0.62-0.27,0.76-0.49,1.18c0.64,0.37,1.17,0.89,1.77,1.28c-0.09,1.32,0.05,1.5,0.79,1.96
		c0.32-0.19,0.1-0.54,0.2-0.69c0.1-0.1,0.2-0.2,0.3-0.29c0.35,0.59,0.71,0.79,0.98,1.57c0.17,0.06,0.1,0.02,0.2,0.1h0.1
		c-0.07-0.35-0.12-0.77,0.1-1.08v-0.2c0.54,0.06,1.05,0.56,1.37,0.88h0.1c-0.16-0.8-0.79-2.27-1.47-2.75v-0.49
		c0.23-0.03,0.24-0.05,0.39-0.1c0.14,0.19,0.33,0.4,0.49,0.59c0.01,0.02,0.53-0.47,0.79-0.59v-0.39c-0.53-0.09-0.22-0.13-0.69,0
		c-0.15-0.25-0.29-0.66-0.59-0.78c0.09-0.27,0.17-0.29,0.29-0.49c0.33,0.04,0.88-0.11,1.18,0c0.34,0.13,0.5,0.5,0.98,0.59
		c-0.05-0.58-0.47-1.13-0.29-1.47v-0.2c0.36,0.08,0.48,0.17,0.59,0.49c0.2-0.03,0.39-0.06,0.59-0.1c0.03-0.03,0.07-0.07,0.1-0.1
		v-0.39c-1.23,0-0.92-0.77-1.47-1.37c-0.76-0.4-1.4,0.31-1.96-0.79c-0.4,0.04-0.58,0.19-0.79,0.1c-0.11-0.06,0.33-0.39,0.49-0.49
		c-0.08-0.43-1.97-2.31-2.35-2.55v-1.27c0.66,0.08,1.36,0.55,1.96,0.1c0.47-0.03,0.57-0.11,0.69-0.49c0.17-0.31-0.07-0.64-0.39-0.78
		v-0.39c0.93,0.03,1.11-0.27,1.37-0.88c0.89,0.05,1.12-0.32,1.86-0.49c0.43-0.1,0.58,0.17,0.88,0c0.77-0.03,0.95,0.09,1.18,0.59
		c0.49-0.03,1-0.14,1.27-0.39h0.1c-0.15,0.37-0.47,0.86-0.79,1.08c0.09,0.83,0.15,2.42,0.39,2.85c0.17,0.1,1.21-0.47,1.47-0.69h0.3
		c-0.05,0.21-0.09,0.35-0.2,0.49c-0.15,0.24-0.04,0.16-0.39,0.2c0.17,0.45,0.59,0.36,0.78,0.69c0.09,0.16,0.02,0.38,0.1,0.49
		c0.19,0.09,0.07,0.04,0.29,0c0.03,0.03,0.07,0.06,0.1,0.1c-0.05,0.39-0.06,0.47-0.39,0.59c-0.02,0.35-0.01,0.46,0.29,0.69
		c-0.06,0.17-0.02,0.1-0.1,0.2c-0.12-0.1-0.39-0.11-0.59-0.39c-0.2,0.04-0.19,0.02-0.29,0.1c-0.08,0.15,0.08,0.43,0.29,0.59
		c-0.08,0.38,0,0.32-0.39,0.39c0.15,0.4,0.51,0.44,0.88,0.59c0.06-0.12,0.11-0.2,0.2-0.29c0.08-0.03,0.89,0.27,1.47,0.29
		c0.1,0.5,0.03,0.76-0.1,1.18c0.2,0.19,0.3,0.48,0.49,0.69c0.18,0.12,0.62,0.21,0.79,0.29v0.29c-0.2,0.04-0.19,0.02-0.29,0.1h-0.2
		c0.01,0.25,0.01,0.36,0.1,0.49c0.11,0.14,1.65-0.6,2.06-0.69c0.03,0.03,0.07,0.07,0.1,0.1c-0.1,0.1-0.2,0.2-0.29,0.29
		c0.02,0.33,0.05,0.68,0.2,0.88v0.2h0.1c0.29-0.49,0.45-0.81,0.98-1.08c0.43,0.14,0.61,0.61,0.98,0.1c0.39,0.2,0.38,0.65,0.69,0.88
		c0.28,0.22,0.98,0.22,1.38,0.29c0.46-0.42,1-0.98,1.67-0.88c0.03-0.03,0.07-0.06,0.1-0.1c-0.02-0.52,0.03-1.08-0.2-1.37
		c0.01-0.25,0.01-0.36,0.1-0.49c1.28-1.03,3.76,0.02,4.51,0.78c1.38-0.01,2.06-0.83,2.94-1.37v-0.29h0.29
		c0.35-1.01,0.5-1.39,0.98-2.16c0.62,0.06,1.48,0.16,2.06-0.1c0.18-0.47,0.38-0.92,0.49-1.37c0.56,0.06,0.43,0.18,0.69,0.49
		c-0.06,0.43-0.25,0.89-0.49,1.18c0.1,0.56,0.43,0.53,0.59,0.88v1.77c0.09,0.14,0.48,0.14,0.59,0.29c0.28,0.41,0.07,1.08,0.29,1.57
		c0.11,0.26,0.38,0.45,0.49,0.78c0.08,0.24-0.21,0.54-0.29,0.88c-0.07,0.28,0.07,0.66,0.1,0.78c0.12,0.58-0.09,1.65-0.2,2.16
		c-0.46,2.12,0.58,4.69-0.29,6.97c-0.2,0.52-0.77,0.76-1.08,1.18c-1.17,0.05-1.85,0.54-2.65,0.79c-0.8,0.24-1.51-0.58-2.36-0.29
		c-0.13,0.13-0.26,0.26-0.39,0.39c-0.29,0.03-0.59,0.06-0.88,0.1c-0.4,0.16-0.84,0.58-1.18,0.79c-0.23,0.07-0.46,0.13-0.69,0.2
		c-0.2,0.18-0.21,0.57-0.39,0.79c-0.64,0.76-1.31,1.61-1.86,2.45c-0.57,0.09-1.09-0.08-1.67-0.2c-0.69-0.14-1.11,0.54-1.77,0.29
		v-0.2c-0.44-0.15-0.69,0.42-1.28,0.2c-0.07-0.1-0.13-0.2-0.2-0.29c-0.25-0.09-1.57,0.08-1.67,0.1c-1.58,0.3-2.37-0.04-3.34,0.88
		c-0.82-0.06-0.8-0.78-1.28-1.18c-0.32-0.2-1.13,0.21-1.47,0.29c-0.69,0.18-0.96-0.08-1.47-0.2c-0.54-0.12-0.75,0.29-1.18,0.2
		c-0.01,0-0.28-0.18-0.29-0.2c-0.42-0.14-0.63-0.58-0.69-1.08c-0.74-0.01-1.33-0.17-1.86-0.29c-0.3-0.07-1.82,0.09-2.06,0.2
		c-0.2,0.23-0.39,0.46-0.59,0.69c-0.23,0.03-0.46,0.06-0.69,0.1c-0.36,0.14-0.96,0.62-1.28,0.88c-0.69,0.58-0.87,1.58-1.47,2.26
		c0,1.06,0.39,1.98,0.98,2.45c-0.02,2.25-1.13,2.29-2.06,3.43c-1.56-0.01-1.94-0.8-2.94-1.18c-0.74-0.28-1.39-0.1-2.16-0.39
		c-0.03-0.07-0.06-0.13-0.1-0.2c-1.47-0.52-3.26,0.35-4.51-0.29c-1.14-0.59-1.36-2.11-1.96-3.04c-0.69-0.03-1.37-0.07-2.06-0.1
		c-0.2-0.09-0.43-0.41-0.69-0.49c-0.67-0.21-1.66-0.23-2.26-0.39c-0.93-0.26-1.27,0.69-2.06,0.59c-0.86-0.11-1.58-0.29-2.16-0.69
		c-0.2-0.23-0.39-0.46-0.59-0.69h-0.79l-0.79-0.69c-0.22-0.28-0.01-0.62-0.2-0.98c-0.05-0.11-0.31-0.2-0.39-0.3
		c-0.52,0.04-0.57,0.19-0.88,0.39v0.39c-0.42-0.02-0.37-0.03-0.69,0c-0.11-0.12-0.25-0.21-0.39-0.29c-0.06-0.22-0.07-0.26-0.2-0.39
		c0-1.26,0.46-1.57,1.08-2.16c0.1-0.1,0.41-0.09,0.49-0.2c0.38-0.5,0.32-1.3,0.78-1.77c-0.08-0.41-0.28-0.34-0.39-0.59
		c-0.11-0.26,0.02-0.6-0.1-0.79c-0.34-0.77-1.3-0.62-1.47-1.67c-0.09-0.16-0.02-0.25,0-0.59c0.2-0.16,0.64-0.39,0.79-0.59
		c0.32-0.45,0.24-0.95,0.69-1.27c-0.05-0.21-0.09-0.36-0.2-0.49c-0.03-0.07-0.07-0.13-0.1-0.2c-0.39,0.13-1.05,0.66-1.28,0.98
		c-0.56-0.11-0.8-0.59-0.78-1.28c-1.17-0.3-2.14-0.42-3.14,0.29c-0.16,0.23-0.33,0.46-0.49,0.69c-0.73,0.4-1.68-0.04-2.26,0.49
		c-0.52-0.05-1.25-0.38-1.57-0.69c-0.65,0.12-0.17,0.13-0.49,0.49c-0.42,0.47-1.53-0.04-1.77-0.39c-0.5,0.03-0.5,0.11-0.79,0.29
		v0.29c-0.2,0.04-1.48,0.28-1.67,0.39c-0.13,0.16-0.26,0.33-0.39,0.49h-0.78c-0.03-0.13-0.07-0.26-0.1-0.39
		c-0.38-0.34-1.06-0.39-1.77-0.39h-1.86c-0.11,0.04-0.35,0.35-0.49,0.39c-0.56-0.03-1.11-0.07-1.67-0.1
		c-0.24,0.09-0.53,0.59-0.78,0.69c-0.31,0.12-0.57-0.09-0.79-0.1c-0.5-0.01-1.33,0.24-1.86,0.29c-0.24,0.02-0.53-0.19-0.88-0.1
		c-1.39,0.36-2.86,1.12-3.53,2.26c-0.45-0.01-0.5-0.03-0.69-0.29c-0.53,0.07-0.4,0.25-0.69,0.39c-0.52,0.25-1.09-0.05-1.57,0.29
		c-0.28,0.2-0.18,0.62-0.39,0.88c-0.04,0.06-1.93,0.9-2.06,0.88c-0.21-0.04-0.87-0.39-0.88-0.39c-0.39-0.07-0.46,0.35-0.88,0
		c-0.42-0.14-0.57-0.35-0.59-0.88c-0.4,0.15-0.69,0.53-1.18,0.59c-0.37,0.05-0.69-0.32-0.98-0.39c-1.62,1-4.01-0.49-3.92-2.45
		c-0.37,0.01-0.75,0.04-0.98,0.2c-1.2,0.04-0.87,0.88-1.27,1.67c-0.52,1.01-1.16,2.26-1.86,3.14c-0.79,0.98-2.28,1.66-3.63,2.06
		c-0.64,0.19-0.95,0.11-1.47,0.39c-0.5,0.27-0.89,1.11-1.37,1.47c-0.21,0.16-0.67,0.26-0.78,0.49c-0.29,0.57-0.07,1.21-0.39,1.67
		c-0.36,0.52-1.25,0.95-1.57,1.67c-0.08,0.18-0.36,2.5-0.29,2.65c0.07,0.16,0.42,0.38,0.49,0.59c0.21,0.66-0.26,1.44-0.49,1.77
		c-0.14,0.2-0.39,0.24-0.59,0.39c-0.29,0.36-0.59,0.72-0.88,1.08c-0.32,0.18-0.58,0.2-0.88,0.39c-0.16,0.2-0.33,0.39-0.49,0.59
		c-0.39,0.17-0.61-0.13-1.08,0.1c-0.65,0.32-1.13,1.16-1.77,1.47c-0.95,0.46-2.56-0.12-3.43,0.39c-0.79,0.4-1.33,1.69-1.77,2.45
		c-0.17,0.3-0.13,0.6-0.39,0.78c-0.62,0.44-1.71,0.37-2.26,0.88c-0.13,0.12-1.4,2.51-1.47,2.75c-0.2,0.6,0,1.12-0.29,1.57
		c-0.2,0.3-1.71,1.31-2.06,1.47c-0.2,0.03-0.39,0.07-0.59,0.1l-0.59,0.88v0.59c-0.21,0.47-1,0.82-1.27,1.27
		c-0.25,0.41-0.14,1.27-0.49,1.57h-0.39c-0.2,0.12-0.78,0.78-0.88,0.98c-0.4,0.77-0.12,1.96-0.59,2.65
		c0.04,0.69,0.28,0.79,0.69,1.08c0,0.6-0.14,0.85-0.49,1.08c0,1.46,0.17,2.38,0.88,3.34c0.29,0.4,0.65,0.22,0.88,0.98
		c0.32,1.06,0.39,3.43,0,4.22c-0.31,0.62-0.96,1.37-1.18,2.06l-0.2,0.88c0.02,0.14,0.21,0.69,0.1,0.98
		c-0.43,1.11-1.37,1.74-2.55,2.16c0.19,0.21,0.22,0.04,0.49,0.2c0.48,0.28,1.02,1.59,1.18,2.16c0.13,0.49-0.21,1.34-0.29,1.77
		c0.03,0.43,0.07,0.85,0.1,1.27c-0.16,0.74-0.56,1.95-0.2,2.65c0.2,0.37,0.67,0.72,0.88,1.08c0.37,0.62,0.42,1.17,0.98,1.57
		c0.36,0.26,0.9,0.24,1.28,0.49c0.7,0.46,1.32,1.34,1.77,2.06c1.65,0,1.08,0.67,1.86,1.27c0.37,0.29,0.8,0.41,1.18,0.69
		c0.37,0.27,0.55,0.77,0.88,1.08c0.17,0.15,0.46,0.1,0.59,0.29c0.32,0.46,0.02,1.32,0.29,1.86c0.06,0.13,0.64,0.8,0.78,0.98
		c0,0.3-0.03,0.5-0.1,0.69c-0.48-0.03-0.82-0.14-1.08-0.39h-0.39c0.36,0.6,1.42,1.27,2.06,1.57c0.25,0.12,0.49,0.04,0.69,0.2
		c0.24,0.19,0.42,0.63,0.69,0.79c0.74,0.43,1.68,0.42,2.35,0.88c0.12,0.08,0.89,0.68,0.98,0.78c0.11,0.13,0.08,0.38,0.2,0.49
		c0.31,0.29,0.83,0.34,1.18,0.59c0.2,0.26,0.39,0.52,0.59,0.79c0.36,0.25,0.7,0.28,0.98,0.59c0.1,0.16,0.2,0.33,0.29,0.49
		c0.3,0.21,0.72,0.15,0.98,0.39c1.21,1.12,2.5,2.13,3.92,3.04c0.68,0.43,1.4,0.5,2.16,0.88c0.37,0.19,0.81,0.56,1.28,0.69
		c0.72,0.19,1.46-0.27,1.96-0.39h1.18c0.88-0.2,2.77-0.5,4.12-0.2c0.59,0.13,2.21,0.25,2.65,0.2c0.13-0.02,0.59-0.19,0.88-0.1
		c0.18,0.06,0.48,0.33,0.69,0.39c0.85,0.25,1.28,0.09,1.96,0.29c0.46,0.14,3.19,1.11,3.34,1.08c0.3-0.06,0.92-0.31,1.18-0.39
		c0.39-0.03,0.79-0.06,1.18-0.1c0.07-0.02,0.32-0.28,0.39-0.29c0.58-0.11,1.08,0.17,1.86-0.1c1.6-0.55,1.98-0.93,4.02-0.69
		c0.29-0.29,0.59-0.59,0.88-0.88c0.76-0.3,1.57,0,2.45-0.2c1.14-0.26,4.51-0.44,5.79-0.2C166.27,267.28,166.89,267.32,167.51,267.35
		z M214.9,167.38c0.1,0.07,0.2,0.13,0.29,0.2v0.1h-0.39C214.83,167.57,214.87,167.48,214.9,167.38z M213.72,167.08v0.1
		c-0.38-0.08-0.35-0.1-0.49-0.39C213.44,166.88,213.56,166.97,213.72,167.08z M212.84,166.59h0.29v0.2
		c-0.48,0.02-0.43-0.06-0.98-0.1v-0.1c0.17-0.06,0.1-0.02,0.2-0.1C212.6,166.51,212.71,166.51,212.84,166.59z M212.05,164.93
		c0.23,0.07,0.22,0.1,0.39,0.2c-0.07,0.32-0.1,0.23-0.2,0.49c-0.23-0.07-0.22-0.1-0.39-0.2
		C211.91,165.1,211.94,165.13,212.05,164.93z M211.27,168.16c0.1,0.07,0.2,0.13,0.29,0.2c0,0,0.99,0.2,1.37,0.2
		c0.03,0.03,0.07,0.06,0.1,0.1c-0.21,0.34-0.4,0.16-0.49,0.69c-0.61-0.28-1.29-0.22-1.77-0.59c-0.08-0.1-0.04-0.02-0.1-0.2
		C210.92,168.45,211.14,168.4,211.27,168.16z M208.13,98.8c-0.36-0.03-0.57-0.16-0.69-0.1c-0.25,0.02-0.33,0.04-0.49,0.1
		c-0.04,0.38,0.03,0.52,0.2,0.88h-0.1c-0.17,0.13-0.17,0.01-0.29,0.1c-0.46-0.13-0.71-0.64-0.98-0.98c-0.25-0.32-0.7-0.31-0.98-0.59
		c-0.03-0.13-0.07-0.26-0.1-0.39c-0.23-0.31-0.71-0.51-1.08-0.69c0.01-0.82,0.14-0.85,0.2-1.57c0.33-0.07,0.65-0.13,0.98-0.2
		c0.29,0.07,0.52,0.5,0.79,0.59c0.56,0.2,0.96,0.03,1.37,0.29h0.1c0.38,0.32,0.61,0.73,1.08,0.98v0.39h-0.29
		c0.12,0.36,0.3,0.59,0.39,0.98C208.15,98.71,208.19,98.63,208.13,98.8z M211.56,95.37v0.1c-0.21-0.04-0.22-0.01-0.59,0
		c-0.02-0.23-0.02-0.28-0.1-0.39c-0.31-0.89-1.53-0.83-2.36-1.18c-0.15-0.42-0.11-0.58-0.49-0.78c0.16-0.26-0.02-0.1,0.29-0.1
		c-0.22-0.33-0.52-0.68-0.78-0.98v-0.1c0.54,0.18,1.27,0.83,1.57,1.27h0.1c-0.04-0.46-0.08-0.43-0.39-0.59
		c0.12-0.26,0.19-0.2,0.3-0.49c-0.54-0.5-0.84-0.71-1.87-0.69v-0.2c0.03-0.03,0.07-0.06,0.1-0.1c0.6-0.01,1.14,0.03,1.47,0.29
		c0.63,0.24,0.33,0.69,0.69,1.18c0.37,0.51,1.22,0.72,1.77,1.08c0.22,0.15,0.26,0.52,0.49,0.69
		C211.65,94.88,211.38,94.98,211.56,95.37z M232.26,135.2c0.41-0.54,0.08-1.09,0.98-1.18c0.07-0.3,0.16-0.44,0.2-0.78
		c0.2-0.04,0.19-0.02,0.29-0.1c0.58,0.11,0.41,0.31,0.69,0.69c0.19,0.26,0.53,0.3,0.79,0.49c0.54,0.41,0.57,1.04,0.59,1.77
		c0.01,0.37,0.15,0.53,0,0.79c-0.07,0.23-0.1,0.22-0.2,0.39c-0.97,0.03-2.28,0.61-2.75,0.29c-1.05,0.02-0.95-0.32-1.37-0.88
		C231.45,135.2,231.8,135.81,232.26,135.2z M219.8,159.04h0.2C219.91,159.21,219.97,159.15,219.8,159.04z M225,156.88
		c-1,0.47-0.52,0.69-0.98,1.27c-0.37,0.27-1.81,0.26-2.06,0.1h-0.19c-0.06,0.36-0.04,0.39,0,0.78c-0.68-0.05-1.23-0.41-1.47,0.2
		h-0.2c0.07-0.75,0.47-0.69,0.69-1.18c0.12-0.26,0.05-0.58,0.2-0.79c0.22-0.3,0.94-0.63,1.28-0.79v-0.1
		c0.42,0.03,0.85,0.06,1.27,0.1c0.17-0.04,0.37-0.34,0.59-0.29c0.21,0.04,0.49,0.33,0.88,0.39V156.88z M244.53,147.95
		c-0.55,0.23-0.89,1.01-1.47,1.28c-0.75,0.34-1.01-0.08-1.47,0c-0.1,0.1-0.2,0.2-0.29,0.29c-0.66,0.26-1.4-0.19-1.86-0.29
		c-0.12,0.15-0.25,0.35-0.39,0.49c-0.1,0.08-0.02,0.04-0.2,0.1c-0.43-0.35-0.7-0.48-0.98-0.98c-0.64,0.08-0.78,0.6-1.18,0.59
		c-0.53-0.03-0.51-0.17-0.88-0.29c-0.03-0.16-0.07-0.33-0.1-0.49c-0.16-0.03-0.33-0.07-0.49-0.1c-0.06,0.2-0.13,0.39-0.2,0.59
		c-0.63,0.16-1.38,0.5-1.96,0.69c-0.42,0.13-0.73,0-1.08,0.2c-0.23,0.13-0.3,0.51-0.49,0.69c-0.35,0.32-0.89,0.4-1.18,0.78
		c-0.23,0.31-0.27,0.67-0.49,0.98c-0.33,0.33-0.66,0.65-0.98,0.98c-0.16,0.31-0.01,0.47-0.2,0.69c-0.43,0.73-1.7,0.18-2.06,0.39
		c-1.38,0.82-3.58,1.04-5-0.1c-0.31-0.25-0.17-0.63-0.39-0.98c-0.11-0.17-1.22-1-1.47-1.08c0.07-0.3,0.13-0.58,0.29-0.78h0.2
		c0.21-0.43-0.54-1.49-0.1-2.16c0.15-0.38,0.36-0.32,0.69-0.29c0.05-0.15,0.07-0.16,0.1-0.39c0.16-0.4-0.45-1.91-0.59-2.45
		c-0.1-0.4,0.22-0.8,0.29-1.08c0.03-0.26,0.06-0.52,0.1-0.79c0.14-0.17,0.89-0.3,1.08-0.39c0-0.36,0.13-0.86,0.1-1.08
		c-0.08-0.55-0.71-1.05-0.49-1.77c0.07-0.23,0.38-0.48,0.49-0.69c0.35-0.69,0.4-1.5,0.39-2.55c0.38-0.19,0.83-0.3,1.08-0.49
		c0.51,0.16,0.86,0.53,1.08,0.98c0.55,0,1.52,0.1,1.86-0.1c0.37-0.04,0.36-0.08,0.59-0.2v-0.29c0.42,0.03,0.85,0.07,1.28,0.1
		c-0.28,0.88-0.89,1.66-1.47,2.26c0.09,0.32-0.05,0.15,0.2,0.29c0.32,0.12,0.33-0.35,0.88-0.2c0.27,0.08,0.46,0.36,0.69,0.29
		c0.18-0.05,0.1-0.03,0.2-0.1c0.41,0.08,0.41,0.21,0.69,0.39c0.02,0.71,0.13,0.85,0.1,1.47c0.3,0.06,0.67,0.13,0.88,0.29
		c0.41-0.15,0.83-0.6,0.98-0.98c0.08-0.2-0.13-0.42-0.1-0.49c0.1-0.23,0.45-0.45,0.59-0.69c0.2-0.03,0.39-0.07,0.59-0.1
		c0.05-0.54,0.28-0.8,0.49-1.18c0.31,0.06,0.24,0.02,0.39,0.2c0.63-0.08,0.78-0.44,1.37-0.59v-0.29c0.29-0.03,1.03-0.23,1.18-0.2
		c0.41,0.09,0.59,0.69,0.98,0.79c0.43,0.1,0.44-0.35,0.78-0.29c0.24,0.04,0.66,0.42,0.88,0.49c0.46,0.06,0.92,0.13,1.37,0.2
		c1.26,0.48,2.46,1.34,3.73,1.86c0.73,0.3,1.24-0.11,1.77,0c0.59,0.12,1.99,1.48,2.26,1.96c1.2,2.15-0.71,3-1.18,4.41
		C245.77,147.82,245.15,147.89,244.53,147.95z"/>
</g>
<g id="Trademark">
	<g opacity="0.9">
        <g>
			<g>
				<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M202.51,202.88V122l-81.3,29.18v20.1l26.92-9.73v60.78
					L202.51,202.88z M170.07,101.22c-38.07,0-68.92,30.86-68.92,68.93c0,38.07,30.85,68.94,68.92,68.94
					c38.07,0,68.94-30.87,68.94-68.94C239.01,132.08,208.14,101.22,170.07,101.22z M170.07,89.38c44.63,0,80.8,36.17,80.8,80.78
					c0,44.61-36.17,80.79-80.8,80.79c-44.61,0-80.78-36.19-80.78-80.79C89.29,125.54,125.46,89.38,170.07,89.38z"/>
			</g>
		</g>
	</g>
</g>
</svg>

        </div>
        <div class="header__logo__wortmarke header__logo__wortmarke-ts">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 692 140" aria-hidden="true" role="img">
    <path fill-rule="evenodd" clip-rule="evenodd" fill="#33322F" d="M101.9,71.9c0,11-7.6,22.3-19,22.3c-6.5,0-10.7-3.8-10.7-9.7
	c0-6.3,5.4-13.8,29.8-13.8v1.2H101.9z M200.7,113.1c0-12.7-8.5-20-23.7-20h-13c-8.5,0-12-1.5-12-5.5c0-2.3,1.4-4.5,4.5-5.8
	c2.4,0.4,5.9,0.8,8.9,0.8c20,0,30.5-11,30.5-26.1c0-5.9-2.3-10.9-5.9-13.7h11.9v-10h-23.8c-3.7-0.8-6.9-1.3-11-1.3
	c-19.6,0-30.8,12.3-30.8,27.1c0,8.9,3.4,16.1,10.3,20c-4.9,2.3-7.9,6.8-7.9,11.7c0,4.7,2.7,8.3,6.9,10.3
	c-6.2,3.2-11.6,9.9-11.6,18.2c0,13.4,11.4,20.6,29.5,20.6C185.4,139.5,200.7,127.9,200.7,113.1z M183.3,57.4
	c0,10.3-6.8,16.1-17.4,16.1c-11,0-17.4-5.6-17.4-16.1c0-9.4,6.6-16.4,17.8-16.4C177.1,41,183.3,47.1,183.3,57.4z M188.1,114.7
	c0,8.6-8.3,14.7-22.7,14.7c-11,0-18.9-4.5-18.9-12.8c0-5.4,3.5-10,9-12.8h17.9C183.3,103.7,188.1,107.9,188.1,114.7z M272.9,61
	c0-16.1-8.3-29.5-28.1-29.5c-19.9,0-31.3,15.7-31.3,36.7c0,24.7,11.6,36,33.2,36c8.7,0,16.9-1.6,23.7-4.4l-1.1-10.3
	c-5.6,2.7-13.3,4.4-20.5,4.4c-15,0-22.7-8-22.1-26.8h45.9C272.7,64.7,272.9,62.7,272.9,61z M259.9,58.1h-32.7
	c1.4-10.3,7.9-17.2,17.1-17.2C254.1,40.9,260.2,47.8,259.9,58.1z M333.7,81.9c0-23.6-32.7-15.2-32.7-30.6c0-6.1,4.7-10,14-10
	c4.7,0,9.7,0.8,14.1,2.3l0.3-10.6c-4.2-0.8-9.2-1.4-13.4-1.4c-18.3,0-28.1,9.2-28.1,21c0,24.7,32.6,15.1,32.6,30.8
	c0,6.5-6.3,10.7-15.7,10.7c-5.4,0-11-1-15.4-2.4L289,103c4.4,0.9,9.6,1.3,14.8,1.3C322.4,104.2,333.7,94.6,333.7,81.9z M395.6,80.8
	c0-22-26.2-19.3-26.2-28.1c0-3.2,2.5-5.4,8-5.4c4.2,0,8.8,0.6,12.4,1.7l0.4-16.8c-4-0.6-8.3-1.1-12.3-1.1c-20.7,0-31,10.7-31,23.4
	c0,23.3,25.8,17.8,25.8,28.1c0,3.3-3.4,5.5-8.9,5.5c-5.1,0-10.4-1-14.7-2.2l-0.4,17.5c4.5,0.6,9.6,1.1,14.5,1.1
	C382.9,104.5,395.6,95.3,395.6,80.8z M456.2,101.4l-1.7-18.2c-3.4,1.7-7.8,2.5-11.9,2.5c-9.7,0-14.5-6.6-14.5-17.4
	c0-11.6,4.9-18.6,14.8-18.6c3.8,0,7.5,0.9,11,2l2.3-18.6c-4.4-1.1-9-1.8-13.5-1.8c-25.7,0-37,17.6-37,38.8
	c0,22.6,10.9,34.3,32.2,34.3C444.6,104.4,451.4,103.2,456.2,101.4z M533.5,102.9V53.4c0-12.1-5.1-22.2-20.7-22.2
	c-10.4,0-18.1,4.5-22.2,11.1c0.7-4.4,1-10.3,1-14.4V0h-21.5v103h21.5V69.1c0-10.4,6.4-19.8,14-19.8c4.9,0,6.5,3.4,6.5,9v44.6
	C512.1,102.9,533.5,102.9,533.5,102.9z M609.5,102.9c-0.4-5.5-0.6-11.6-0.6-16.6V56.1C608.9,40,602.1,31,578,31
	c-8.8,0-18.2,1.8-25.4,4.1l1.7,17.8c5.8-3.1,14.3-5.1,20.5-5.1c9.3,0,12.5,2.8,12.5,8.6v2.7c-22.3,0-39.5,8.5-39.5,26.2
	c0,11.3,7.1,19.2,20.5,19.2c9.7,0,18.1-4.8,21.4-12.1c-0.4,3.5-0.4,7.2-0.4,10.6h20.2V102.9z M587.4,74.7c0,6.9-4.9,13.4-12.1,13.4
	c-4.5,0-7.1-2.5-7.1-6.1c0-5.1,3.7-9.3,19.2-9.3L587.4,74.7L587.4,74.7z M690.6,102.9V32.8H669v34c0,10.3-6.2,19.6-13.8,19.6
	c-4.9,0-6.5-3.4-6.5-9V32.8h-21.6v49.5c0,12.1,5.2,22.2,20.9,22.2c11.1,0,18.9-5.4,23.1-12.6c-0.4,3.4-0.6,8.5-0.6,11
	C670.5,102.9,690.6,102.9,690.6,102.9z M46.7,102.7V92c-2.8,0.7-6.4,1.3-9.6,1.3c-7.9,0-10-3.1-10-14.7V42.7h19.6v-9.9H27.1V6.6
	l-12.7,3.5v22.7H0v9.9h14.4v40.4c0,15.1,4.4,21,18.8,21C37.6,104.1,42.7,103.5,46.7,102.7z M114.9,102.9c-0.1-6.1-0.3-13.5-0.3-20.2
	V54.8c0-14-5.8-23.4-26-23.4c-9.3,0-17.8,2.3-24.5,5.1l1.3,10.9c6.1-3.7,14.5-5.8,21.2-5.8c11.6,0,15.4,5.2,15.4,15v5.2
	c-26.5,0-42.2,9.7-42.2,25.1c0,11.1,7.9,17.4,19.5,17.4s20.5-6.6,23.8-15.2c-0.4,4-0.4,9-0.4,14h12.2V102.9z"/>
</svg>

        </div>
    </div>
</a>


        
    
        <div id="jaas9d6sjkhd7" class="v-instance"
             data-v="{&quot;url&quot;:&quot;/json/headerapp&quot;}"
             data-v-type="HeaderApp">
        </div>
    


    </div>

    <button class="burger-button-animated" aria-haspopup="menu" aria-label="Menü öffnen" aria-expanded="false" aria-controls="burgernav" id="hauptnavigation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" class="icon icon--burger-menu" aria-hidden="true" role="img">
    <path class="firstline" d="M1.5,9.02h32c0.83,0,1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5h-32C0.67,6.02,0,6.69,0,7.52S0.67,9.02,1.5,9.02z"/>
    <path class="secondline" d="M33.5,16.02h-32c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5h32c0.83,0,1.5-0.67,1.5-1.5S34.33,16.02,33.5,16.02z"/>
    <path class="thirdline" d="M33.5,26.02h-32c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5h32c0.83,0,1.5-0.67,1.5-1.5S34.33,26.02,33.5,26.02z"/>
</svg>

    </button>

    
        
            
            
                
    
    <div class="header__horiz">
    <nav class="horizontal-nav" aria-label="Weitere Links und Brotkrümelpfad" id="navigation">
        <ul class="swipe article-breadcrumb" data-ts_component="breadcrumb-nav">
            <li class="home__icon anchored ">
                <a class="home mobile-view" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.18 89.59" class="icon icon--home" role="img" aria-hidden="true"><title>Startseite</title><path d="M94.67,44.62,49.11.62a2.29,2.29,0,0,0-3.06,0L.49,44.62C-.64,45.71.29,47.4,2,47.4H14.69V88a1.8,1.8,0,0,0,1.94,1.65H35.48A1.78,1.78,0,0,0,37.42,88V61.92a1.8,1.8,0,0,1,1.94-1.62H55.84a1.8,1.8,0,0,1,1.94,1.62V88a1.8,1.8,0,0,0,1.89,1.64H78.52A1.8,1.8,0,0,0,80.46,88V86.2h0V47.41H93.14C94.84,47.41,95.84,45.72,94.67,44.62Z" transform="translate(0 -0.03)"/></svg>

                    <span>Startseite</span>
                </a>
            </li>

            
            <li class="article-breadcrumb__title">
                <span class="article-breadcrumb__title--inside">Spenden: Hilfe für die Menschen in der Ukraine</span>
            </li>
        </ul>
    </nav>
    </div>

            
        
    


    

</header>

        
    <div class="burger-navi-holder">
        <div class="burger-navi" data-js_component="burgernavi-component" >
            <div class="burger-navi-menu">
                
<div class="burger-navi-search">
    <form class="searchfield searchfield--fullwidth " data-js_component="searchfield" role="search" data-config='{"baseUrl":"/suche"}' method="GET">
        <label>Suchbegriff</label>
        <input name="searchText" class="searchfield__input" type="text" placeholder="Suche">
        <button class="searchfield__reset hidden-s hidden-m" type="reset" title="Suchfeld-Eingabe löschen"></button>
        <input class="searchfield__submit" type="submit" title="Suche starten" value="">
        <span class="searchfield__icon">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" class="icon icon--search" role="img">
    <title>Suche</title>
    <path d="M37,72.5C18,72.5,2.5,57,2.5,38S18,3.5,37,3.5S71.5,19,71.5,38S56,72.5,37,72.5z M37,8.5
	C20.7,8.5,7.5,21.7,7.5,38c0,16.3,13.2,29.5,29.5,29.5c16.3,0,29.5-13.2,29.5-29.5C66.5,21.7,53.3,8.5,37,8.5z"/>
    <path d="M61.9,67.3l27.8,27.5l5-4.9L67,62.4"/>
</svg>

        </span>
    </form>
</div>

                

    
        <nav class="burger-navi-nav" aria-label="Hauptnavigation" id="burgernav">
            <ul class="burger-panel">
                
    
    
        
            
                
    
    <li>
        <a href="/inland" class="burger-panel__pagelink" title="Menüpunkt Inland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Inland</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-0" aria-controls="burgernav-0-0" >
                <span data-nosnippet class="visually-hidden">Untermenü Inland einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland" class="burger-panel__pagelink" title="Menüpunkt Ausland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Ausland</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-1" aria-controls="burgernav-0-1" >
                <span data-nosnippet class="visually-hidden">Untermenü Ausland einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft" class="burger-panel__pagelink" title="Menüpunkt Wirtschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wirtschaft</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-2" aria-controls="burgernav-0-2" >
                <span data-nosnippet class="visually-hidden">Untermenü Wirtschaft einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen" class="burger-panel__pagelink" title="Menüpunkt Wissen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wissen</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-3" aria-controls="burgernav-0-3" >
                <span data-nosnippet class="visually-hidden">Untermenü Wissen einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/faktenfinder" class="burger-panel__pagelink" title="Menüpunkt Faktenfinder aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Faktenfinder</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-4" aria-controls="burgernav-0-4" >
                <span data-nosnippet class="visually-hidden">Untermenü Faktenfinder einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/investigativ" class="burger-panel__pagelink" title="Menüpunkt Investigativ aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Investigativ</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahl" class="burger-panel__pagelink" title="Menüpunkt Wahlen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wahlen</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-6" aria-controls="burgernav-0-6" >
                <span data-nosnippet class="visually-hidden">Untermenü Wahlen einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter" class="burger-panel__pagelink" title="Menüpunkt Wetter aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wetter</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-7" aria-controls="burgernav-0-7" >
                <span data-nosnippet class="visually-hidden">Untermenü Wetter einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/livestreams" class="burger-panel__pagelink" title="Menüpunkt tagesschau24 LIVE aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau24 LIVE</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia" class="burger-panel__pagelink" title="Menüpunkt Videos &amp; Audios aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Videos &amp; Audios</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-9" aria-controls="burgernav-0-9" >
                <span data-nosnippet class="visually-hidden">Untermenü Videos &amp; Audios einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="" class="burger-panel__pagelink" title="Menüpunkt Mehr aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mehr</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-10" aria-controls="burgernav-0-10" >
                <span data-nosnippet class="visually-hidden">Untermenü Mehr einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
    

                
    <li>
        <a href="javascript:void(0)" class="burger-panel__pagelink burger-panel__submenulink burger-panel__submenulink--fullwidth" data-rel="sub_settings" role="button" aria-expanded="false" aria-controls="burgernav-settings" title="Zu den Einstellungen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true"></span>
            <span data-nosnippet class="burger-panel__pagelink-text">Einstellungen</span> <span data-nosnippet class="visually-hidden">einblenden</span>
            <span class="burger-panel__arrow--right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

            </span>
        </a>
    </li>


            </ul>
        </nav>

        <nav class="burger-navi-nav__sublevel" aria-label="Subnavigationen 2. Ebene">
            
                
                    
                        <ul class="burger-panel sub0-0" id="burgernav-0-0" aria-label="Untermenü Inland" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Inland ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Inland</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/inland" class="burger-panel__pagelink" title="Menüpunkt Startseite Inland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Inland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/innenpolitik" class="burger-panel__pagelink" title="Menüpunkt Innenpolitik aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Innenpolitik</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/gesellschaft" class="burger-panel__pagelink" title="Menüpunkt Gesellschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Gesellschaft</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional" class="burger-panel__pagelink" title="Menüpunkt Regional aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Regional</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-0-3" aria-controls="burgernav-0-0-3" >
                <span data-nosnippet class="visually-hidden">Untermenü Regional einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/deutschlandtrend" class="burger-panel__pagelink" title="Menüpunkt DeutschlandTrend aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">DeutschlandTrend</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahl" class="burger-panel__pagelink" title="Menüpunkt Wahlen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wahlen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/mittendrin" class="burger-panel__pagelink" title="Menüpunkt Mittendrin aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mittendrin</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-1" id="burgernav-0-1" aria-label="Untermenü Ausland" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Ausland ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Ausland</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/ausland" class="burger-panel__pagelink" title="Menüpunkt Startseite Ausland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Ausland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/europa" class="burger-panel__pagelink" title="Menüpunkt Europa aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Europa</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/amerika" class="burger-panel__pagelink" title="Menüpunkt Amerika aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Amerika</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/afrika" class="burger-panel__pagelink" title="Menüpunkt Afrika aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Afrika</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/asien" class="burger-panel__pagelink" title="Menüpunkt Asien aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Asien</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ausland/ozeanien" class="burger-panel__pagelink" title="Menüpunkt Ozeanien aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Ozeanien</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/korrespondenten" class="burger-panel__pagelink" title="Menüpunkt Studios und Korrespondenten aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Studios und Korrespondenten</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-2" id="burgernav-0-2" aria-label="Untermenü Wirtschaft" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wirtschaft ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wirtschaft</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wirtschaft" class="burger-panel__pagelink" title="Menüpunkt Startseite Wirtschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wirtschaft</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wirtschaft/boersenkurse/" class="burger-panel__pagelink" title="Menüpunkt Börsenkurse aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Börsenkurse</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/verbraucher" class="burger-panel__pagelink" title="Menüpunkt Verbraucher aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Verbraucher</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/unternehmen" class="burger-panel__pagelink" title="Menüpunkt Unternehmen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Unternehmen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/konjunktur" class="burger-panel__pagelink" title="Menüpunkt Konjunktur aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Konjunktur</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/arbeitsmarkt" class="burger-panel__pagelink" title="Menüpunkt Arbeitsmarkt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Arbeitsmarkt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/finanzen" class="burger-panel__pagelink" title="Menüpunkt Finanzen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Finanzen</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-2-6" aria-controls="burgernav-0-2-6" >
                <span data-nosnippet class="visually-hidden">Untermenü Finanzen einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/weltwirtschaft" class="burger-panel__pagelink" title="Menüpunkt Weltwirtschaft aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Weltwirtschaft</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/energie" class="burger-panel__pagelink" title="Menüpunkt Energie aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Energie</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wirtschaft/digitales" class="burger-panel__pagelink" title="Menüpunkt Digitales aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Digitales</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-3" id="burgernav-0-3" aria-label="Untermenü Wissen" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wissen ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wissen</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wissen" class="burger-panel__pagelink" title="Menüpunkt Startseite Wissen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wissen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/gesundheit" class="burger-panel__pagelink" title="Menüpunkt Gesundheit aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Gesundheit</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/klima" class="burger-panel__pagelink" title="Menüpunkt Klima &amp; Umwelt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Klima &amp; Umwelt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/forschung" class="burger-panel__pagelink" title="Menüpunkt Forschung aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Forschung</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wissen/technologie" class="burger-panel__pagelink" title="Menüpunkt Technologie aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Technologie</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-4" id="burgernav-0-4" aria-label="Untermenü Faktenfinder" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Faktenfinder ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Faktenfinder</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/faktenfinder/kontext" class="burger-panel__pagelink" title="Menüpunkt Kontext aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Kontext</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                
                    
                        <ul class="burger-panel sub0-6" id="burgernav-0-6" aria-label="Untermenü Wahlen" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wahlen ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wahlen</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wahl" class="burger-panel__pagelink" title="Menüpunkt Startseite Wahlergebnisse aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wahlergebnisse</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wahl/uebersicht-der-wahlen.shtml" class="burger-panel__pagelink" title="Menüpunkt Übersicht der Wahlen seit 1946 aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Übersicht der Wahlen seit 1946</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente" class="burger-panel__pagelink" title="Menüpunkt Länderparlamente aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Länderparlamente</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-6-2" aria-controls="burgernav-0-6-2" >
                <span data-nosnippet class="visually-hidden">Untermenü Länderparlamente einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/bundestag" class="burger-panel__pagelink" title="Menüpunkt Bundestagswahl aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bundestagswahl</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/europaeisches_parlament" class="burger-panel__pagelink" title="Menüpunkt Europäisches Parlament aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Europäisches Parlament</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/chronologie" class="burger-panel__pagelink" title="Menüpunkt Chronologie aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Chronologie</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/wahltermine" class="burger-panel__pagelink" title="Menüpunkt Wahltermine aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wahltermine</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-7" id="burgernav-0-7" aria-label="Untermenü Wetter" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Wetter ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Wetter</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/wetter" class="burger-panel__pagelink" title="Menüpunkt Startseite Wetter aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Wetter</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wetter/deutschland/wettervorhersage-deutschland-100.html" class="burger-panel__pagelink" title="Menüpunkt Deutschland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Deutschland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/europa-welt" class="burger-panel__pagelink" title="Menüpunkt Europa &amp; Welt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Europa &amp; Welt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="https://www.tagesschau.de/wetter/unwetter/" class="burger-panel__pagelink" title="Menüpunkt Unwetter aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Unwetter</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland" class="burger-panel__pagelink" title="Menüpunkt Regenradar aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Regenradar</span>
        </a>
        
            <a href="javascript:void(0)" class="burger-panel__submenulink" role="button" aria-expanded="false" data-rel="sub0-7-4" aria-controls="burgernav-0-7-4" >
                <span data-nosnippet class="visually-hidden">Untermenü Regenradar einblenden</span>
                <span class="burger-panel__arrow--right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" aria-hidden="true" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                </span>
            </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/wetterthema" class="burger-panel__pagelink" title="Menüpunkt Wetterthema aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wetterthema</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                
                    
                        <ul class="burger-panel sub0-9" id="burgernav-0-9" aria-label="Untermenü Videos &amp; Audios" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Videos &amp; Audios ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Videos &amp; Audios</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="/multimedia" class="burger-panel__pagelink" title="Menüpunkt Startseite Videos &amp; Audios aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Startseite Videos &amp; Audios</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/livestreams" class="burger-panel__pagelink" title="Menüpunkt Livestream aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Livestream</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesschau_in_100_sekunden" class="burger-panel__pagelink" title="Menüpunkt tagesschau in 100 Sekunden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau in 100 Sekunden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/letzte_sendung" class="burger-panel__pagelink" title="Menüpunkt Letzte Sendung aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Letzte Sendung</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesschau_20_uhr" class="burger-panel__pagelink" title="Menüpunkt tagesschau 20 Uhr aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau 20 Uhr</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesschau_mit_gebaerdensprache" class="burger-panel__pagelink" title="Menüpunkt tagesschau 20 Uhr (Gebärdensprache) aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesschau 20 Uhr (Gebärdensprache)</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/sendung/tagesthemen" class="burger-panel__pagelink" title="Menüpunkt tagesthemen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">tagesthemen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/archiv/sendungen" class="burger-panel__pagelink" title="Menüpunkt Sendungsarchiv aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sendungsarchiv</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/podcast" class="burger-panel__pagelink" title="Menüpunkt Podcasts aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Podcasts</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/multimedia/bilder" class="burger-panel__pagelink" title="Menüpunkt Bilder aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bilder</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
                    
                        <ul class="burger-panel sub0-10" id="burgernav-0-10" aria-label="Untermenü Mehr" >
                            <li>
                                <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                    <span data-nosnippet class="visually-hidden">Untermenü Mehr ausblenden</span>
                                    <span class="burger-panel__arrow--left">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                    </span>
                                    <span data-nosnippet class="burger-panel__closelink-text">Mehr</span>
                                </a>
                            </li>
                            
    
    
        
            
                
    
    <li>
        <a href="https://meta.tagesschau.de" class="burger-panel__pagelink" title="Menüpunkt Ihre Meinung aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Ihre Meinung</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/kontakt" class="burger-panel__pagelink" title="Menüpunkt Kontakt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Kontakt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/korrekturen" class="burger-panel__pagelink" title="Menüpunkt Korrekturen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Korrekturen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/impressum" class="burger-panel__pagelink" title="Menüpunkt Impressum aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Impressum</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/datenschutz" class="burger-panel__pagelink" title="Menüpunkt Datenschutz aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Datenschutz</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/infoservices" class="burger-panel__pagelink" title="Menüpunkt Wo Sie uns sonst noch finden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Wo Sie uns sonst noch finden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/ueber-uns" class="burger-panel__pagelink" title="Menüpunkt Über uns aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Über uns</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/mehr/spendenkonten" class="burger-panel__pagelink" title="Menüpunkt Spendenkonten aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Spendenkonten</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/archiv" class="burger-panel__pagelink" title="Menüpunkt Archiv aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Archiv</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/archiv/allemeldungen" class="burger-panel__pagelink" title="Menüpunkt 7-Tage-Überblick aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">7-Tage-Überblick</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/thema" class="burger-panel__pagelink" title="Menüpunkt Themen-Überblick aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Themen-Überblick</span>
        </a>
        
    </li>

            
        
    

                        </ul>
                    
                
            
            
    <ul class="burger-panel sub_settings burger-panel__settings" aria-label="Einstellungen" id="burgernav-settings" >
        <li>
            <a href="#" class="burger-panel__closelink" role="button" >
                <span data-nosnippet class="visually-hidden">Untermenü Einstellungen ausblenden</span>
                <span class="burger-panel__arrow--left">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                        </span>
                <span data-nosnippet class="burger-panel__closelink-text">Einstellungen</span>
            </a>
        </li>
        <li class="settings__box__outer">
            <div data-ts_component="settings__box" class="columns twelve settings__box active">
                <div data-ts_component="header__navigation__list--more" class="header__navigation__list--more header__navigation--settings">
                    <form class="form--settings">
                        <fieldset class="basic-settings">
                            <legend class="hidden">Anzeige Fußballticker</legend>
                            <span class="v-instance" data-v='
                             {
                                 "service_name": "fussball",
                                 "embed_type": "opt-in",
                                 "display_type": "switch",
                                 "service_label": "Fußballticker in Kopfzeile zeigen:",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="basic-settings">
                            <legend class="hidden">Statistische Analysen („AGF-Zählpixel“ der Firma Nielsen</legend>
                            <span class="v-instance" data-v='
                                 {
                                     "service_name": "optOutTracking",
                                     "embed_type": "opt-in",
                                     "display_type": "switch",
                                     "service_label": "Widerspruch: Es sollen keine Daten für statistische Analysen übermittelt werden.",
                                     "service_long_label": ""
                                 }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="basic-settings basic-settings--darkmode">
                            <legend class="hidden">Darkmode Einstellungen</legend>
                            <span class="v-instance" data-v='
                             {
                                 "service_name": "darkmode",
                                 "embed_type": "opt-in",
                                 "display_type": "switch",
                                 "service_label": "Darkmode aktivieren:",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="basic-settings">
                            <legend class="hidden">Video-Preview Einstellungen</legend>
                            <span class="v-instance" data-v='
                             {
                                 "service_name": "disablesparkpreview",
                                 "embed_type": "opt-in",
                                 "display_type": "switch",
                                 "service_label": "Video-Vorschau deaktivieren:",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>
                        </fieldset>
                        <fieldset class="thirdparty-settings">
                            <legend class="hidden">Auswahl externer Anbieter</legend>
                            <label class="form-label">Externe Anbieter: <span>&nbsp;Inhalte zeigen von</span></label>
                            <ul class="settings__list-wrapper">
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "twitter",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "X",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "youtube",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "Youtube",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "twentythreedegrees",
                                 "embed_type": "opt-out",
                                 "display_type": "checkbox",
                                 "service_label": "23degrees",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "facebook",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "Facebook",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "instagram",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "Instagram",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                                <li>
                        <span class="v-instance" data-v='
                             {
                                 "service_name": "messengerpeople",
                                 "embed_type": "opt-in",
                                 "display_type": "checkbox",
                                 "service_label": "MessengerPeople",
                                 "service_long_label": ""
                             }' data-v-type="CookieCheckbox"></span>

                                </li>
                            </ul>
                        </fieldset>
                    </form>
                    <div class="columns twelve m-six m-offset-six l-offset-none l-twelve">
                        <a class="btn btn--text btn--tongue btn--fullwidth" href="/datenschutz"  role="button">
                            <span class="btn__label">Datenschutzerklärung</span>
                            <span class="btn__label--alternative"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--right" role="img"><title>Pfeil rechts</title>
    <g>
        <path d="M23.21,16L12.52,26.7c-0.4,0.4-1.04,0.4-1.43,0c-0.4-0.4-0.4-1.04,0-1.43L20.37,16l-9.28-9.27 c-0.4-0.4-0.4-1.04,0-1.43c0.4-0.4,1.04-0.4,1.43,0L23.21,16z"/>
    </g>
</svg>

                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>


        </nav>

        <nav class="burger-navi-nav__sublevel" aria-label="Subnavigationen 3. Ebene">
            
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-0-3" id="burgernav-0-0-3" aria-label="Untermenü Regional" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Regional ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Regional</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/inland/regional/badenwuerttemberg" class="burger-panel__pagelink" title="Menüpunkt Baden-Württemberg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Baden-Württemberg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/bayern" class="burger-panel__pagelink" title="Menüpunkt Bayern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bayern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/berlin" class="burger-panel__pagelink" title="Menüpunkt Berlin aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Berlin</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/brandenburg" class="burger-panel__pagelink" title="Menüpunkt Brandenburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Brandenburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/bremen" class="burger-panel__pagelink" title="Menüpunkt Bremen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bremen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/hamburg" class="burger-panel__pagelink" title="Menüpunkt Hamburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hamburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/hessen" class="burger-panel__pagelink" title="Menüpunkt Hessen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hessen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/mecklenburgvorpommern" class="burger-panel__pagelink" title="Menüpunkt Mecklenburg-Vorpommern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mecklenburg-Vorpommern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/niedersachsen" class="burger-panel__pagelink" title="Menüpunkt Niedersachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Niedersachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/nordrheinwestfalen" class="burger-panel__pagelink" title="Menüpunkt Nordrhein-Westfalen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Nordrhein-Westfalen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/rheinlandpfalz" class="burger-panel__pagelink" title="Menüpunkt Rheinland-Pfalz aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Rheinland-Pfalz</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/saarland" class="burger-panel__pagelink" title="Menüpunkt Saarland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Saarland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/sachsen" class="burger-panel__pagelink" title="Menüpunkt Sachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/sachsenanhalt" class="burger-panel__pagelink" title="Menüpunkt Sachsen-Anhalt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen-Anhalt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/schleswigholstein" class="burger-panel__pagelink" title="Menüpunkt Schleswig-Holstein aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Schleswig-Holstein</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/inland/regional/thueringen" class="burger-panel__pagelink" title="Menüpunkt Thüringen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Thüringen</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-2-6" id="burgernav-0-2-6" aria-label="Untermenü Finanzen" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Finanzen ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Finanzen</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/wirtschaft/finanzen/marktberichte" class="burger-panel__pagelink" title="Menüpunkt Marktberichte aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Marktberichte</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                        
                    
                
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-6-2" id="burgernav-0-6-2" aria-label="Untermenü Länderparlamente" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Länderparlamente ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Länderparlamente</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/baden-wuerttemberg" class="burger-panel__pagelink" title="Menüpunkt Baden-Württemberg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Baden-Württemberg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/bayern" class="burger-panel__pagelink" title="Menüpunkt Bayern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bayern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/berlin" class="burger-panel__pagelink" title="Menüpunkt Berlin aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Berlin</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/brandenburg" class="burger-panel__pagelink" title="Menüpunkt Brandenburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Brandenburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/bremen" class="burger-panel__pagelink" title="Menüpunkt Bremen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Bremen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/hamburg" class="burger-panel__pagelink" title="Menüpunkt Hamburg aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hamburg</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/hessen" class="burger-panel__pagelink" title="Menüpunkt Hessen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Hessen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/mecklenburg-vorpommern" class="burger-panel__pagelink" title="Menüpunkt Mecklenburg-Vorpommern aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Mecklenburg-Vorpommern</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/niedersachsen" class="burger-panel__pagelink" title="Menüpunkt Niedersachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Niedersachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/nordrhein-westfalen" class="burger-panel__pagelink" title="Menüpunkt Nordrhein-Westfalen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Nordrhein-Westfalen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/rheinland-pfalz" class="burger-panel__pagelink" title="Menüpunkt Rheinland-Pfalz aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Rheinland-Pfalz</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/saarland" class="burger-panel__pagelink" title="Menüpunkt Saarland aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Saarland</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/sachsen" class="burger-panel__pagelink" title="Menüpunkt Sachsen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/sachsen-anhalt" class="burger-panel__pagelink" title="Menüpunkt Sachsen-Anhalt aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Sachsen-Anhalt</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/schleswig-holstein" class="burger-panel__pagelink" title="Menüpunkt Schleswig-Holstein aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Schleswig-Holstein</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wahlarchiv/laenderparlamente/thueringen" class="burger-panel__pagelink" title="Menüpunkt Thüringen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Thüringen</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                                    <ul class="burger-panel sub0-7-4" id="burgernav-0-7-4" aria-label="Untermenü Regenradar" >
                                        <li>
                                            <a href="javascript:void(0)" class="burger-panel__closelink" role="button">
                                                <span data-nosnippet class="visually-hidden">Untermenü Regenradar ausblenden</span>
                                                <span class="burger-panel__arrow--left">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="icon icon--arrow--left" aria-hidden="true" role="img"><title>Pfeil links</title>
    <g>
        <path d="M19.48,5.3c0.39-0.4,1.03-0.4,1.43,0c0.4,0.39,0.4,1.03,0,1.43L11.63,16l9.28,9.27
	c0.4,0.39,0.4,1.03,0,1.43c-0.39,0.4-1.03,0.4-1.43,0L8.79,16L19.48,5.3z"/>
    </g>
</svg>

                                                </span>
                                                <span data-nosnippet class="burger-panel__closelink-text">Regenradar</span>
                                            </a>
                                        </li>
                                        
    
    
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/norden" class="burger-panel__pagelink" title="Menüpunkt Norden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Norden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/osten" class="burger-panel__pagelink" title="Menüpunkt Osten aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Osten</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/sueden" class="burger-panel__pagelink" title="Menüpunkt Süden aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Süden</span>
        </a>
        
    </li>

            
        
            
                
    
    <li>
        <a href="/wetter/regenradar-deutschland/westen" class="burger-panel__pagelink" title="Menüpunkt Westen aufrufen">
            <span class="burger-panel__pagelink-icon" aria-hidden="true">
                
            </span>
            <span data-nosnippet class="burger-panel__pagelink-text">Westen</span>
        </a>
        
    </li>

            
        
    

                                    </ul>
                                
                            
                                
                            
                        
                    
                
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
                    
                        
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                                
                            
                        
                    
                
            
        </nav>
    






            </div>
            
    <div class="bigfive">
        <ul class="bigfive__list" aria-label="Menü ARD-Angebote">
            <li>
                <a class="bigfive__link" href="//www.sportschau.de" title="Zur Sportschau.de" >
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_sportschau.png" alt="Sportschau Logo" />
                    <span class="bigfive__text">Sportschau</span>
                </a>
            </li>
            <li>
                <a class="bigfive__link" href="//www.ardmediathek.de" title="Zur ARD-Mediathek">
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_mediathek.png" alt="Mediathek Logo" />
                    <span class="bigfive__text">Mediathek</span>
                </a>
            </li>
            <li>
                <a class="bigfive__link" href="//www.ardaudiothek.de" title="Zur ARD-Audiothek" >
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_audiothek.png" alt="Audiothek Logo" />
                    <span class="bigfive__text">Audiothek</span>
                </a>
            </li>
            <li>
                <a class="bigfive__link" href="//www.kika.de" title="Zu KiKa.de">
                    <img class="bigfive__logo" loading="lazy" src="/resources/assets/image/BIG5_kika.png" alt="KiKA Logo" />
                    <span class="bigfive__text">KiKA</span>
                </a>
            </li>
        </ul>
    </div>


        </div>
    </div>



        <main class="content-wrapper content-wrapper--show-cuts" aria-label="Inhalt">
            <div class="layout-container">
                <div class="layout-content" id="content">
                    <article class="container content-wrapper__group">
                        
    
    

    <div class="seitenkopf">
        
            
                
                    
                
                <div class="seitenkopf__media columns twelve m-twelve">
                    
                    
                    

    <div class="ts-picture__wrapper">
        <picture class="ts-picture ts-picture--topbanner">
            <source type="image/webp" media="(max-width: 420px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxuyw/16x9-640/spendentafel-ukraine-107.webp"/>
            <source type="image/webp" media="(max-width: 767px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxvls/16x9-768/spendentafel-ukraine-107.webp"/>
            <source type="image/webp" media="(max-width:  1023px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx3ic/20x9-960/spendentafel-ukraine-107.webp"/>
            <source type="image/webp" media="(min-width: 1024px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx2rU/20x9-1280/spendentafel-ukraine-107.webp"/>
            <source type="image/jpeg" media="(max-width: 420px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxuyw/16x9-640/spendentafel-ukraine-107.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxvls/16x9-768/spendentafel-ukraine-107.jpg"/>
            <source type="image/jpeg" media="(max-width:  1023px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx3ic/20x9-960/spendentafel-ukraine-107.jpg"/>
            <source type="image/jpeg" media="(min-width: 1024px)" srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx2rU/20x9-1280/spendentafel-ukraine-107.jpg"/>
            <img class="ts-image" src="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx2rU/20x9-1280/spendentafel-ukraine-107.jpg" alt="Spendentafel Nothilfe Ukraine" title="Spendentafel Nothilfe Ukraine | ARD-aktuell"/>
        </picture>
        <noscript>
            <img class="ts-image" src="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx2rU/20x9-1280/spendentafel-ukraine-107.jpg" alt="Spendentafel Nothilfe Ukraine" title="Spendentafel Nothilfe Ukraine | ARD-aktuell"/>
        </noscript>
    </div>

                </div>
            
        

        
            
                
            
        
        <div class="seitenkopf__data columns twelve  m-ten  m-offset-one l-eight l-offset-two">
            <div class="seitenkopf__title">
                
                <h1 class="seitenkopf__headline">
                    <span class="seitenkopf__topline">Spenden</span>
                    <span class="seitenkopf__headline--text">Hilfe für die Menschen in der Ukraine</span>
                </h1>
                <p class="metatextline">Stand: 31.01.2024 08:55 Uhr</p>
            </div>
        </div>
    </div>


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz columns twelve  m-ten  m-offset-one l-eight l-offset-two">
        <strong>Wenn Sie für die Menschen in der Ukraine und Geflüchtete aus der Ukraine spenden wollen, finden Sie hier Hilfsorganisationen und Bankverbindungen.</strong>
    </p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve">
"Bündnis Entwicklung Hilft" und "Aktion Deutschland Hilft" rufen mit folgendem Konto gemeinsam zu Spenden auf:<br><br>BEH und ADH<br>IBAN: DE53 200 400 600 200 400 600<br>BIC: COBADEFFXXX<br>Commerzbank<br>Stichwort: ARD/ Nothilfe Ukraine<br><a href="https://www.spendenkonto-nothilfe.de/" title="Spendenkonto Nothilfe" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.spendenkonto-nothilfe.de</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>"Bündnis Entwicklung Hilft"</strong><strong><em> </em></strong><em>ist ein Zusammenschluss von</em><strong><em> </em></strong><em>Brot für die Welt, Christoffel-Blindenmission, DAHW, German Doctors, Kindernothilfe, medico international, Misereor,&nbsp;Plan International,&nbsp;terre des hommes, Welthungerhilfe&nbsp;sowie das assoziierte Mitglied Oxfam leisten als Bündnis Entwicklung Hilft akute und langfristige Hilfe bei Katastrophen und in Krisengebieten.</em><br><a href="https://www.entwicklung-hilft.de/" title="Bündnis Entwicklung hilft" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.entwicklung-hilft.de </a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>"Aktion Deutschland Hilft"</strong><em> ist ein Zusammenschluss von 23 deutschen Hilfsorganisationen, darunter action medeor, ADRA, Arbeiter-Samariter-Bund, AWO International, CARE Deutschland, Habitat for Humanity, HELP - Hilfe zur Selbsthilfe, Johanniter-Unfall-Hilfe, Malteser Hilfsdienst, World Vision Deutschland, Der Paritätische (darüber aktiv: arche Nova, Bundesverband Rettungshunde, Freunde der Erziehungskunst Rudolf Steiners, Hammer Forum, Handicap International, Help Age Deutschland, Kinderverband Global-Care, LandsAid, SODI und Terra Tech)</em><br><a href="https://www.aktion-deutschland-hilft.de/index.php" title="&amp;quot;Aktion Deutschland Hilft&amp;quot;" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.aktion-deutschland-hilft</a>.de</p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    

        
    

    
            
            
    
    
    

    
        

            <div class="absatzbild absatzbild--l columns twelve  m-ten  m-offset-one l-eight  l-offset-two">
                <div class="absatzbild__media">
                    
    

    <div class="ts-picture__wrapper">
        

        
            <picture class="ts-picture js-picture ts-picture--copytext-l">
                <source type="image/webp" media="(max-width: 420px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx0zc/1x1-640/spendentafel-ukraine-107.webp"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx1ms/1x1-840/spendentafel-ukraine-107.webp"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <source type="image/webp" media="(max-width:  1023px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxwXw/16x9-960/spendentafel-ukraine-107.webp"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <source type="image/webp" media="(min-width: 1024px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxvls/16x9-768/spendentafel-ukraine-107.webp"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <source type="image/jpeg" media="(max-width: 420px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx0zc/1x1-640/spendentafel-ukraine-107.jpg"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBx1ms/1x1-840/spendentafel-ukraine-107.jpg"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <source type="image/jpeg" media="(max-width:  1023px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxwXw/16x9-960/spendentafel-ukraine-107.jpg"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <source type="image/jpeg" media="(min-width: 1024px)" data-srcset="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxvls/16x9-768/spendentafel-ukraine-107.jpg"
                        srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
                <img class="ts-image js-image" src="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxwXw/16x9-960/spendentafel-ukraine-107.jpg" alt="Spendentafel Nothilfe Ukraine" title="Spendentafel Nothilfe Ukraine | ARD-aktuell"/>
            </picture>
        
        <noscript>
            <img class="ts-image" src="https://images.tagesschau.de/image/af005073-bb3d-428a-b6f8-a685c725811f/AAABh4VRChA/AAABibBxwXw/16x9-960/spendentafel-ukraine-107.jpg" alt="Spendentafel Nothilfe Ukraine" title="Spendentafel Nothilfe Ukraine | ARD-aktuell"/>
        </noscript>
    </div>

                </div>
                <div class="absatzbild__info">
                    <p class="absatzbild__info__text">
                        
                    </p>
                </div>
            </div>
        
    

        
    

    

    


                        
                            
    
    
    

    
        
            
    
    
    <h2 id="Ausserdem-rufen-zu-Spenden-auf" class="meldung__subhead columns twelve  m-ten  m-offset-one l-eight l-offset-two liveblog--anchor">Außerdem rufen zu Spenden auf:</h2>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>Ärzte der Welt e.V.</strong><br>IBAN: DE06 1203 0000 1004 3336 60<br>BIC: BYLADEM1001<br>Deutsche Kreditbank<br>Stichwort: Ukraine<br><a href="https://www.aerztederwelt.org/" title="Ärzte der Welt" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.aerztederwelt.org</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>DRK e.V.</strong><br>IBAN: DE63 3702 0500 0005 0233 07<br>BIC: BFSWDE33XXX<br>Bank für Sozialwirtschaft<br>Stichwort: Nothilfe Ukraine<br><a href="https://www.drk.de/" title="www.drk.de: www.drk.de" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.drk.de</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>Die Heilsarmee in Deutschland<br></strong>IBAN: DE82 3702 0500 0004 0777 00<br>BIC: BFSWDE33XXX<br>Bank für Sozialwirtschaft <br>Stichwort: Ukrainehilfe <br><a href="https://www.heilsarmee.de/" title="Heilsarmee in Deutschland" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.heilsarmee.de</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>Franziskaner Helfen </strong><br>IBAN: DE83 3705 0198 0025 0014 47 <br>BIC: COLSDE33XXX <br>Sparkasse KölnBonn <br>Stichwort: Nothilfe Ukraine<br><a href="https://franziskaner-helfen.de/" title="Franziskansches Hilfwerk" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.franziskaner-helfen.de</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>Humedica<br></strong>IBAN: DE35 7345 0000 0000 0047 47 <br>BIC: BYLADEM1KFB <br>Sparkasse Kaufbeuren <br>Stichwort: Ukraine<br><a href="https://www.humedica.org" title="humedica e.V." class="textlink--extern" rel="noopener noreferrer" target="_blank">www.humedica.org</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>KOLPING INTERNATIONAL Cooperation e.V.</strong><br>IBAN: DE74 4006 0265 0001 3135 00<br>BIC: GENODEM1DKM<br>DKM Darlehnskasse Münster eG<br>Stichwort: Ukraine-Hilfe<br><a href="https://www.kolping.net/" title="www.kolping.net: www.kolping.net" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.kolping.net</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>Save the Children e.V.<br></strong>IBAN: DE92 1002 0500 0003 292912<br>BIC: BFSWDE33BER<br>Bank für Sozialwirtschaft<br>Stichwort: Nothilfe Kinder Ukraine<br><a href="https://www.savethechildren.de/" title="Save the Children" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.savethechildren.de</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>SOS-Kinderdörfer weltweit</strong><br>IBAN: DE22 4306 0967 2222 2000 00<br>BIC: GENODEM1GLS<br>GLS Gemeinschaftsbank<br>Stichwort: Humanitäre Hilfe Ukraine<br><a href="http://www.sos-kinderdoerfer.de" title="SOS-Kinderdörfer" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.sos-kinderdoerfer.de</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>UNICEF</strong><br>IBAN: DE57 3702 0500 0000 3000 00<br>BIC: BFSWDE33XXX<br>Bank für Sozialwirtschaft<br>Stichwort: Ukraine<br><a href="https://www.unicef.de/" title="Deutsche Unicef" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.unicef.de</a></p>

        
    

    

    

    


                        
                            
    
    
    

    
        
            
    
    <p class="textabsatz m-ten m-offset-one l-eight l-offset-two columns twelve"><strong>UNO-Flüchtlingshilfe e.V.</strong><br>IBAN: DE78 3705 0198 0020 0088 50<br>BIC: COLSDE33<br>Sparkasse KölnBonn<br>Stichwort: Nothilfe Ukraine<br><a href="https://www.uno-fluechtlingshilfe.de/" title="UNO-Flüchtlingshilfe" class="textlink--extern" rel="noopener noreferrer" target="_blank">www.uno-fluechtlingshilfe.de/</a></p>

        
    

    

    

    


                        
                        


                        <div class="meldungsfooter columns twelve m-ten m-offset-one l-eight l-offset-two">
    

    
         <ul class="taglist">
        
            <li class="taglist__element">
                <a class="tag-btn tag-btn--light-grey" href="/thema/ukraine">Ukraine</a>
            </li>
        
            <li class="taglist__element">
                <a class="tag-btn tag-btn--light-grey" href="/thema/solidarität">Solidarität</a>
            </li>
        
            <li class="taglist__element">
                <a class="tag-btn tag-btn--light-grey" href="/thema/hilfe">Hilfe</a>
            </li>
        
    </ul>
    

    

    <span class="divider"></span>

    <nav class="socialbuttons" aria-label="Social-Media-Links, E-Mail und Drucken-Funktion">

    <ul class="socialbuttons__list">

        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="http://www.facebook.de" onclick="window.open(&quot;https:\/\/www.facebook.com\/sharer.php?u=https:\/\/www.tagesschau.de\/spendenkonten\/spendenkonten-133.html\u0026t=Hilfe%20f%C3%BCr%20die%20Menschen%20in%20der%20Ukraine\u0026desc=&quot;); return false;">
                <span class="socialbuttons__icon"><svg version="1.1" class="icon icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img"><title>Facebook</title>
<path d="M24 0C10.75 0 0 10.75 0 24C0 37.25 10.75 48 24 48C37.25 48 48 37.25 48 24C48 10.75 37.25 0 24 0ZM31 15.39H28.8C26.61 15.39 25.94 16.72 25.94 18.08V21.31H30.8L30.03 26.28H25.94V36.84H20.46V26.28H16V21.31H20.46V17.52C20.46 13.22 23.07 10.84 27.08 10.84C28.99 10.84 31 11.18 31 11.18V15.4V15.39Z" fill="#1C76ED"/>
<path d="M20.46 17.5201V21.3101H16V26.2801H20.46V36.8401H25.94V26.2801H30.03L30.8 21.3101H25.94V18.0801C25.94 16.7301 26.61 15.3901 28.8 15.3901H31V11.1701C31 11.1701 28.99 10.8301 27.08 10.8301C23.07 10.8301 20.46 13.2101 20.46 17.5101V17.5201Z" fill="white"/>
</svg>
</span>
                <span class="socialbuttons__subline">Facebook</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="http://www.twitter.de" onclick="window.open(&quot;https:\/\/twitter.com\/intent\/tweet?text=Hilfe%20f%C3%BCr%20die%20Menschen%20in%20der%20Ukraine\u0026url=https:\/\/www.tagesschau.de\/spendenkonten\/spendenkonten-133.html&quot;); return false;">
                <span class="socialbuttons__icon"><svg version="1.1" class="icon icon--x-social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img"><title>X</title>
<path d="M41.8 7.9C37.41 3.05 31.06 0 24 0C10.75 0 0 10.75 0 24C0 30.06 2.25 35.6 5.96 39.82C10.36 44.83 16.81 48 24 48C37.25 48 48 37.25 48 24C48 17.8 45.65 12.16 41.8 7.9ZM28.86 36.53L22.31 27.01L14.11 36.53H12L21.37 25.63L12 12H19.14L25.34 21.02L33.1 12H35.21L26.28 22.38L36 36.53H28.86Z" fill="black"/>
<path d="M24.22 22.3201L18.13 13.6001H14.88L22.43 24.4001L23.38 25.7601L29.85 35.0101H33.09L25.17 23.6701L24.22 22.3201Z" fill="black"/>
<path d="M35.21 12H33.1L25.34 21.02L19.14 12H12L21.37 25.63L12 36.53H14.11L22.31 27.01L28.86 36.53H36L26.28 22.38L35.21 12ZM33.09 35.01H29.84L23.37 25.76L22.42 24.41L14.87 13.61H18.12L24.21 22.33L25.16 23.68L33.08 35.01H33.09Z" fill="white"/>
</svg>
</span>
                <span class="socialbuttons__subline">X</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="http://www.whatsapp.com" onclick="window.open(&quot;https:\/\/api.whatsapp.com\/send?text=https:\/\/www.tagesschau.de\/spendenkonten\/spendenkonten-133.html&quot;); return false" >
                <span class="socialbuttons__icon"><svg version="1.1" class="icon icon--whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img"><title>Whatsapp</title>
<path d="M24 13.5898C18.27 13.5898 13.59 18.2598 13.59 23.9998C13.59 25.8198 14.08 27.6298 15 29.2198L15.55 30.1698L15.27 31.2198L14.69 33.3098L16.78 32.7298L17.83 32.4498L18.78 32.9998C20.37 33.9298 22.17 34.4098 24 34.4098C29.73 34.4098 34.41 29.7398 34.41 23.9998C34.41 18.2598 29.74 13.5898 24 13.5898ZM30.75 28.4498C30.46 29.1898 29.09 29.8698 28.42 29.9698C26.96 30.1598 24.28 29.1598 24.3 29.1898C20.84 27.7998 18.59 24.5798 18.41 24.3698C18.23 24.1598 17 22.6398 17 21.0598C17 19.4798 17.89 18.7098 18.2 18.3898C18.51 18.0698 18.89 17.9898 19.12 17.9898C19.35 17.9898 19.58 17.9898 19.78 17.9898C19.99 18.0098 20.27 17.9198 20.55 18.5398C20.84 19.1798 21.53 20.7398 21.62 20.9098C21.7 21.0698 21.77 21.2598 21.65 21.4698C20.99 22.6898 20.28 22.6498 20.64 23.2098C21.98 25.3398 23.3 26.0698 25.33 27.0098C25.66 27.1698 25.87 27.1498 26.07 26.9298C26.28 26.7098 26.94 25.9898 27.17 25.6698C27.4 25.3398 27.63 25.3998 27.94 25.5098C28.26 25.6198 29.96 26.3798 30.3 26.5398C30.64 26.6898 30.87 26.7698 30.96 26.9198C31.04 27.0598 31.04 27.6898 30.76 28.4398L30.75 28.4498Z" fill="#00D856"/>
<path d="M41.8 7.9C37.41 3.05 31.06 0 24 0C10.75 0 0 10.75 0 24C0 30.06 2.25 35.6 5.96 39.82C10.36 44.83 16.81 48 24 48C37.25 48 48 37.25 48 24C48 17.8 45.65 12.16 41.8 7.9ZM24 37C21.62 37 19.4 36.36 17.48 35.23L11 37L12.77 30.52C11.66 28.6 11 26.38 11 24C11 16.82 16.82 11 24 11C31.18 11 37 16.82 37 24C37 31.18 31.18 37 24 37Z" fill="#00D856"/>
<path d="M24 11C16.82 11 11 16.82 11 24C11 26.38 11.65 28.6 12.77 30.52L11 37L17.48 35.23C19.4 36.35 21.62 37 24 37C31.18 37 37 31.18 37 24C37 16.82 31.18 11 24 11ZM24 34.41C22.18 34.41 20.37 33.92 18.78 33L17.83 32.45L16.78 32.73L14.69 33.31L15.27 31.22L15.55 30.17L15 29.22C14.07 27.63 13.59 25.83 13.59 24C13.59 18.27 18.26 13.59 24 13.59C29.74 13.59 34.41 18.26 34.41 24C34.41 29.74 29.74 34.41 24 34.41Z" fill="white"/>
<path d="M30.29 26.5598C29.95 26.3998 28.25 25.6298 27.93 25.5298C27.62 25.4198 27.39 25.3698 27.16 25.6898C26.93 26.0098 26.27 26.7198 26.06 26.9498C25.86 27.1598 25.65 27.1898 25.32 27.0298C23.29 26.0898 21.97 25.3598 20.63 23.2298C20.27 22.6698 20.98 22.7098 21.64 21.4898C21.75 21.2798 21.69 21.0898 21.61 20.9298C21.53 20.7698 20.84 19.1998 20.54 18.5598C20.26 17.9398 19.98 18.0298 19.77 18.0098C19.57 18.0098 19.34 18.0098 19.11 18.0098C18.88 18.0098 18.5 18.0898 18.19 18.4098C17.88 18.7298 16.99 19.4998 16.99 21.0798C16.99 22.6598 18.22 24.1698 18.4 24.3898C18.58 24.5998 20.83 27.8198 24.29 29.2098C24.28 29.1798 26.96 30.1898 28.41 29.9898C29.08 29.8898 30.45 29.2198 30.74 28.4698C31.02 27.7298 31.02 27.0898 30.94 26.9498C30.86 26.7998 30.63 26.7298 30.28 26.5698L30.29 26.5598Z" fill="white"/>
</svg>
</span>
                <span class="socialbuttons__subline">WhatsApp</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="mailto:?subject=Link-Tipp:%20Spenden:%20Hilfe%20f%C3%BCr%20die%20Menschen%20in%20der%20Ukraine%20(tagesschau.de)&amp;body=Link-Tipp:%20Spenden:%20Hilfe%20f%C3%BCr%20die%20Menschen%20in%20der%20Ukraine%20(tagesschau.de)%0Ahttps://www.tagesschau.de/spendenkonten/spendenkonten-133.html%0A%0A">
                <span class="socialbuttons__icon--functional"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="icon icon--mail" role="img"><title>Mail</title>
	<path d="M43.9,7.2H2.3l20.1,15.9c0.9,0.7,2.2,0.7,3-0.1L43.9,7.2z"/>
	<path d="M13.7,22.3L0,11.5v25.8C0,37.2,13.7,22.3,13.7,22.3z"/>
	<path d="M48,10L34,22l14,15.2V10z"/>
	<path d="M30.4,25.1l-4.8,4.1c-0.9,0.7-2.2,0.8-3,0.1l-5.1-4L3.2,40.8h41.5C44.7,40.8,30.4,25.1,30.4,25.1z"/>
</svg>
</span>
                <span class="socialbuttons__subline">Mail</span>
            </a>
        </li>
        <li class="socialbuttons__list__item">
            <a class="tabfocus" href="JavaScript:window.print();">
                <span class="socialbuttons__icon--functional"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="icon icon--print" role="img"><title>Drucken</title>
<path d="M42.6453 18.4824H5.33547C2.39904 18.4824 0 20.8815 0 23.8563V34.5848C0 36.0818 1.18992 37.2525 2.66773 37.2525H8.0032V42.6264C8.0032 45.582 10.4022 48.0002 13.3387 48.0002H34.6613C37.5978 48.0002 39.9968 45.582 39.9968 42.6264V37.2525H45.3323C46.8101 37.2525 48 36.0434 48 34.5848V23.8563C48 20.9007 45.6201 18.4824 42.6645 18.4824H42.6453ZM34.6421 37.2525V42.6264H13.3195V34.5848H34.6421V37.2525ZM37.2907 29.2109C35.8129 29.2109 34.6421 28.0018 34.6421 26.5432C34.6421 25.0846 35.8321 23.8755 37.2907 23.8755C38.7493 23.8755 39.9584 25.0846 39.9584 26.5432C39.9584 28.0018 38.7685 29.2109 37.2907 29.2109Z"/>
<path d="M33.433 0.0191923H12.9164C9.86485 0.0191923 7.36985 2.22631 7.36985 4.93243V14.7589H12.9164V4.93243H31.1299L35.0452 8.40624V14.7589H40.5918V6.35266L33.433 0V0.0191923Z"/>
</svg>
</span>
                <span class="socialbuttons__subline">Drucken</span>
            </a>
        </li>
    </ul>
</nav>
</div>

                    </article>

                    <aside class="container">
                        
    
    
        
        
            <div class="columns twelve content-wrapper__group cuts--uppercut">
                <div class="trenner">
    

    
        <div class="trenner__text">
            
            <div class="trenner__text__headline">
                <h2>Mehr zum Thema</h2>
            </div>
        </div>
    
</div>

                <div class="columns twelve">
                    <ul class="list columns twelve">
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    <a class="teaser-xs__link" href="http://www.dzi.de/">

        
        
            <div class="teaser-xs__media columns four">
                <div class="teaser-xs__image">
                    
                    
    
    <div class="ts-picture__wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.jpg" alt="Logo DZI" title="Logo DZI | DZI"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/8892e2c7-dcf2-4055-9cd4-0ca8c57d0350/AAABiopSacY/AAABibBxyuw/1x1-256/logo-dzi-100.jpg" alt="Logo DZI" title="Logo DZI | DZI"/>
        </noscript>
    </div>


                </div>
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline list--separator">
        
        

        

            <p class="teaser-xs__topline-container">
                        
                        
                
                            
                        
                <span class="teaser-xs__date">30.04.2021 • 13:21 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline">www.dzi.de</span>
                <span class="teaser-xs__headline"> Deutsches <span class="hyphenate">Zentralinstitut </span>für soziale Fragen
                         
                              <span class="link-extend link-extend__extern">dzi</span>
                         
                        </span>
            </h3>
            
            
                          
            

        
        </div>
        </div>
    </a>
</li>
                        
                            <li class="teaser-xs columns m-six  ">
    
    

    <a class="teaser-xs__link" href="https://www.tagesschau.de/thema/ukraine/">

        
        
            <div class="teaser-xs__media columns four">
                <div class="teaser-xs__image">
                    
                    
    
    <div class="ts-picture__wrapper">
        <picture class="ts-picture ts-picture--list js-picture">
            <source type="image/webp" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/webp" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.webp"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 440px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 767px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(max-width: 900px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <source type="image/jpeg" media="(min-width: 901px)" data-srcset="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.jpg"
                    srcset="/resources/assets/image/lazy-image-placeholder.jpg"/>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.jpg" alt="Die ukrainische Flagge weht über dem Parlamentsgebäude in Kiew." title="Die ukrainische Flagge weht über dem Parlamentsgebäude in Kiew. | REUTERS"/>
        </picture>
        <noscript>
            <img class="ts-image  js-image" src="https://images.tagesschau.de/image/dfafaf9d-6d33-434a-b9a3-4d1ca69013d9/AAABiJYVftk/AAABibBxyuw/1x1-256/ukraine-1449.jpg" alt="Die ukrainische Flagge weht über dem Parlamentsgebäude in Kiew." title="Die ukrainische Flagge weht über dem Parlamentsgebäude in Kiew. | REUTERS"/>
        </noscript>
    </div>


                </div>
            </div>
        

        
            <div class="teaser-xs__teaserinfo columns eight">
                <div class="teaser-xs__teaserheadline">
        
        

        

            <p class="teaser-xs__topline-container">
                        
                        
                
                            
                        
                <span class="teaser-xs__date">12.12.2023 • 08:47 Uhr</span>
            </p>
            <h3 class="teaser-xs__headline-wrapper">
                <span class="teaser-xs__topline"></span>
                <span class="teaser-xs__headline"> Aktuelle Meldungen zum Ukraine-Krieg
                         
                              
                         
                        </span>
            </h3>
            
            
                          
            

        
        </div>
        </div>
    </a>
</li>
                        
                    </ul>
                </div>
            </div>
        
    

                    </aside>

                    <div class="columns twelve content-wrapper__group">
                    
                    
                        
        
        <div class="buttongroup">
            <div class="buttongroup__item">
                <a href="/" class="btn btn--text btn--light-grey btn--fullwidth" >
                    <span class="btn__label">Zur Startseite</span>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.18 89.59" class="icon icon--home" role="img" aria-hidden="true"><title>Startseite</title><path d="M94.67,44.62,49.11.62a2.29,2.29,0,0,0-3.06,0L.49,44.62C-.64,45.71.29,47.4,2,47.4H14.69V88a1.8,1.8,0,0,0,1.94,1.65H35.48A1.78,1.78,0,0,0,37.42,88V61.92a1.8,1.8,0,0,1,1.94-1.62H55.84a1.8,1.8,0,0,1,1.94,1.62V88a1.8,1.8,0,0,0,1.89,1.64H78.52A1.8,1.8,0,0,0,80.46,88V86.2h0V47.41H93.14C94.84,47.41,95.84,45.72,94.67,44.62Z" transform="translate(0 -0.03)"/></svg>

                    
                </a>
            </div>
        </div>
    
    
                    
                    </div>
                </div>
            </div>
        </main>

        

    <div class="back-to-top hide" data-ts_component="back-to-top">
        <a href="#ts_header" class="btn btn--icon btn--tongue" aria-label="Zum Anfang der Seite springen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

        </a>
    </div>

    <footer class="footer" id="ts_footer">
        <nav class="footer__navigation" id="footer">
            
            <div class="columns twelve">
                <dl class="expanderbox footer__navigation__descriptionlist">
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-1" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-1">
            Service
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-1" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="/archiv/allemeldungen">7-Tage-Überblick</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://meta.tagesschau.de">Ihre Meinung</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/infoservices">Wo Sie uns sonst noch finden</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-2" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-2">
            tagesschau.de
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-2" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="/inland">Inland</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/ausland">Ausland</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/wirtschaft">Wirtschaft</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/wissen">Wissen</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/investigativ">Investigativ</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/faktenfinder">faktenfinder</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/wetter">Wetter  </a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/multimedia">Videos und Audios</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="/multimedia/livestreams/livestream1">tagesschau24 im Livestream</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-3" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-3">
            ARD Angebote
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-3" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.sportschau.de/">Sportschau</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.ardmediathek.de">Mediathek</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.ardaudiothek.de/">Audiothek</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.kika.de/index.html">KiKA</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                            
    <dt class="expanderbox__item-wrapper">
        <a href="#" id="footer-exp-header-4" class="exp-header"
           role="button" aria-expanded="false"
           aria-controls="footer-exp-body-4">
            Rundfunkanstalten
            <span class="footer__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-down" role="img" aria-hidden="true">
    <path d="M24.05,30.31,13.44,19.71a1,1,0,1,1,1.42-1.42l9.19,9.2,9.19-9.2a1,1,0,1,1,1.42,1.42Z"/>
</svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon icon--arrow-up" role="img" aria-hidden="true">
    <path d="M14.15,30a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l10.61-10.6,10.61,10.6a1,1,0,1,1-1.42,1.42l-9.19-9.2-9.19,9.2A1,1,0,0,1,14.15,30Z"/>
</svg>

            </span>
        </a>
    </dt>
    <dd id="footer-exp-body-4" class="exp-body" aria-hidden="true">
        <ul class="footer__navigation__list">
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.br.de/index.html">Bayerischer Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.hessenschau.de/index.html">Hessischer Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.mdr.de/nachrichten/index.html">Mitteldeutscher Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.ndr.de/">Norddeutscher Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.butenunbinnen.de/">Radio Bremen</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.rbb24.de/">Rundfunk Berlin-Brandenburg</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.sr.de/sr/home/index.html">Saarländischer Rundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www.swr.de/">Südwestrundfunk</a>
            </li>
            <li class="footer__navigation__list__item --service-item">
                <a href="https://www1.wdr.de/index.html">Westdeutscher Rundfunk</a>
            </li>
        </ul>
    </dd>

                        
                    
                        
                    
                </dl>
            </div>

            <div class="columns twelve">
                
                    
                
                    
                
                    
                
                    
                
                    
                        
    <ul class="footer__navigation__bottom">
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="/impressum">Impressum</a>
        </li>
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="/kontakt">Kontakt</a>
        </li>
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="/datenschutz">Datenschutzerklärung</a>
        </li>
        <li class="footer__navigation__bottom__item">
            <a class="footer__link"
               href="https://www.tagesschau.de/">Bildrechte</a>
        </li>
    </ul>

                    
                
            </div>

            
    <div id="imageRightsRenderer"
         class="v-instance"
         data-v-type="ImageRights"
         data-v="{&quot;imageVariants&quot;:{&quot;teaserimage_list_s&quot;:&quot;16x9-256&quot;,&quot;teaserimage_list_m&quot;:&quot;16x9-768&quot;,&quot;teaserimage_list_l&quot;:&quot;16x9-960&quot;}}"
    >
    </div>




            <div class="footer__logo">
                <div class="footer__logo__icon">
                    <a href="https://www.ard.de" aria-label="Zum Online-Portal der ARD">
                        <svg class="icon icon icon--ard-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375.35 150" role="img" aria-hidden="true">
<path  d="M321.31,96.8v-27l-12,4.4v-9l36.1-13v36Zm10.4-65.6a44,44,0,0,0-36,18.7l6.4,4.4a36,36,0,0,1,29.5-15.5c19.8,0,35.5,16.2,35.5,36.1s-15.7,36.1-35.5,36.1a35.86,35.86,0,0,1-29.4-15.5l-6.5,4.5a43.31,43.31,0,0,0,35.7,18.7,43.75,43.75,0,0,0,.3-87.5m-55.5,23.6c13,0,19.8,6.9,19.8,19.9,0,13.4-7.3,20.4-21.1,20.4-3.6,0-7.2-.1-10.3-.2H263V55h.2c1.1,0,2.2,0,3.6-.1,2.3-.1,5.1-.1,9.4-.1m-.5,33.4c8.1,0,11.8-4.2,11.8-13.2s-3.9-13.4-11.8-13.4c-1.8,0-3.5,0-4.6.1V88a31.74,31.74,0,0,0,4.6.2M221.81,95h-8.9l-2.6-8.2h-15.1l-2.6,8.2h-8.1l13.7-40h10v.1Zm-13.7-15-3.9-12.2c-.6-2.1-1.1-3.8-1.5-5.3a44.44,44.44,0,0,1-1.5,5.2L197.31,80Zm49.6,15h-9.6l-9-15.3h-4.5V95h-8V55h.2c.7,0,1.8,0,3.2-.1,2.8-.1,6.6-.1,10.8-.1,9.5,0,14.5,4.2,14.5,12.2a11.32,11.32,0,0,1-8.1,11.3c.6.8,1.3,1.9,1.9,2.9Zm-23.1-22h5.5c4.5,0,6.8-1.9,6.8-5.7s-2.1-5.7-6.6-5.7c-3,0-5.1.1-5.7.1V73ZM26.91,74.6h-2.7l-3.6,13.8c-.3,1.3-.5,2.5-.7,3.8h0c-.2-1.3-.6-2.8-.9-4.1l-3.9-13.5h-2.8L8.51,87.9a32.9,32.9,0,0,0-.9,4.3h-.1c-.2-1.4-.5-2.7-.9-4.4L3.11,74.6h-3L5.51,95H9l3.8-13.4a28.37,28.37,0,0,0,.6-3.1h.1a23.76,23.76,0,0,0,.7,3.1L18,95h3.5Zm5.6.6a1.8,1.8,0,1,0-1.8,1.8A1.79,1.79,0,0,0,32.51,75.2ZM32,95V80h-2.7V95Zm11.8-15.3c-3-.3-4.5,1.8-5.2,3.8h-.1a23.8,23.8,0,0,0,.3-3.6h-2.6v15h2.7v-6c0-4.8,1.5-7.1,4.7-6.6Zm15.7.3a13.58,13.58,0,0,0-2.9-.3c-3.9,0-5.9,1.9-5.9,4.3,0,5.2,7,3.5,7,6.8,0,1.4-1.1,2.2-3.2,2.2a12.17,12.17,0,0,1-3.5-.6l-.2,2.4a18.7,18.7,0,0,0,3.5.4c4,0,6.2-2.1,6.2-4.6,0-5.2-7.1-3.6-7.1-6.9,0-1.2,1-2,2.9-2a9.93,9.93,0,0,1,3,.5Zm7.3-4.8A1.8,1.8,0,1,0,65,77,1.79,1.79,0,0,0,66.81,75.2ZM66.41,95V80h-2.7V95Zm16.5,0V84.6c0-2.8-1.2-4.9-4.5-4.9a5.56,5.56,0,0,0-5.3,3.4H73a17.2,17.2,0,0,0,.2-3.2h-2.6v15h2.7V87.7c0-3.4,1.8-5.9,4.3-5.9,2,0,2.6,1.3,2.6,3.4V95Zm15.9,0V73h-2.7v7a22.86,22.86,0,0,0-2.5-.2c-4.9,0-7.8,3.2-7.8,8.4,0,4.4,1.8,7.1,5.5,7.1a5.12,5.12,0,0,0,5-3.4h.1a15.64,15.64,0,0,0-.2,3h2.6Zm-2.7-7.9c0,3.1-1.6,5.9-4.1,5.9-2.3,0-3.3-1.8-3.3-5.1,0-4.3,1.9-6,4.7-6a12.41,12.41,0,0,1,2.7.3Zm24.3,7.9V73h-2.7v7a22.86,22.86,0,0,0-2.5-.2c-4.9,0-7.8,3.2-7.8,8.4,0,4.4,1.8,7.1,5.5,7.1a5.12,5.12,0,0,0,5-3.4h.1a15.64,15.64,0,0,0-.2,3h2.6Zm-2.7-7.9c0,3.1-1.6,5.9-4.1,5.9-2.3,0-3.3-1.8-3.3-5.1,0-4.3,1.9-6,4.7-6a12.41,12.41,0,0,1,2.7.3Zm17.5,5.2a14.14,14.14,0,0,1-4.4.8c-3.2,0-4.7-1.7-4.6-5.4H136a16.18,16.18,0,0,0,.1-1.8c0-3.4-1.8-6.2-5.9-6.2-4.3,0-6.8,3.4-6.8,7.9,0,5.3,2.5,7.7,7.1,7.7a14.4,14.4,0,0,0,5.1-.9Zm-9.1-6.5c.3-2.6,1.8-4,3.7-4,2.1,0,3.4,1.4,3.4,4Zm16.1-10.6a1.8,1.8,0,1,0-1.8,1.8A1.79,1.79,0,0,0,142.21,75.2Zm-.4,19.8V80h-2.7V95Zm16.5,0V84.6c0-2.8-1.2-4.9-4.5-4.9a5.56,5.56,0,0,0-5.3,3.4h-.1a17.2,17.2,0,0,0,.2-3.2H146v15h2.7V87.7c0-3.4,1.8-5.9,4.3-5.9,2,0,2.6,1.3,2.6,3.4V95Zm11.9-15a13.58,13.58,0,0,0-2.9-.3c-3.9,0-5.9,1.9-5.9,4.3,0,5.2,7,3.5,7,6.8,0,1.4-1.1,2.2-3.2,2.2a12.17,12.17,0,0,1-3.5-.6l-.2,2.4a18.7,18.7,0,0,0,3.5.4c4,0,6.2-2.1,6.2-4.6,0-5.2-7.1-3.6-7.1-6.9,0-1.2,1-2,2.9-2a9.93,9.93,0,0,1,3,.5Zm7.3,13.4a1.9,1.9,0,1,0-1.9,1.9A1.9,1.9,0,0,0,177.51,93.4Z"/></svg>

                    </a>
                </div>
            </div>
        </nav>
    </footer>
    <div class="endline">
        <div class="endline__copyright">© ARD-aktuell / tagesschau.de</div>
    </div>

    
    
        
            
                <div data-config="{&quot;trackingService&quot;:&quot;ati-piano&quot;,&quot;trackingData&quot;:{&quot;atiTagConfig&quot;:{&quot;site&quot;:595936,&quot;collectDomain&quot;:&quot;https://logs1413.xiti.com&quot;},&quot;site_level2&quot;:&quot;www.tagesschau.de&quot;,&quot;d:content_publication_time&quot;:&quot;2022-02-25T19:43:49Z&quot;,&quot;d:content_last_editorial_update&quot;:&quot;2024-01-31T08:55:54Z&quot;,&quot;product_login&quot;:false,&quot;content_days_since_publication&quot;:706,&quot;b:page_contains_video&quot;:false,&quot;b:page_contains_audio&quot;:false,&quot;s:page_chapter1&quot;:&quot;spendenkonten&quot;,&quot;b:user_logged_in&quot;:false,&quot;site&quot;:&quot;Tagesschau Online&quot;,&quot;site_id&quot;:595936,&quot;product_distribution&quot;:&quot;Web&quot;,&quot;page&quot;:&quot;Spenden: Hilfe für die Menschen in der Ukraine&quot;,&quot;page_broadcast_reference&quot;:&quot;ja&quot;,&quot;page_categories&quot;:&quot;Ukraine|Solidarität|Hilfe&quot;,&quot;content_object_type&quot;:&quot;Artikel&quot;,&quot;content_id&quot;:&quot;spendenkonten-133&quot;,&quot;content_url_path&quot;:&quot;/spendenkonten/spendenkonten-133.html&quot;,&quot;content_import_id&quot;:&quot;tagesschau_9f5ee311-1db9-4bb6-b57b-eab07de67a28&quot;,&quot;content_authors&quot;:[&quot;tagesschau&quot;],&quot;content_breaking_news_sent&quot;:false}}" data-js_component="tracking-component"></div>
            
        
    

    
        
            <script async crossorigin="anonymous" src="//player.h-cdn.com/loader.js?customer=ard_de"></script>
        
    


    </div>
</body>
</html>
dynamic-navigation-item--headline a.dynamic-navigation__link:focus{height:3.4rem}.dynamic-navigation-item--headline .dynamic-navigation__submenulinkicon{padding-left:0;width:3.1rem}.subheader{align-items:center;box-sizing:border-box;display:flex;padding:1.6rem 0}.subheader__headline{color:#e1e3e4;flex:1;font-size:2rem;margin:0}.subheader__btn-wrapper{height:4rem;width:4rem}.subheader__btn-wrapper--left{margin-right:2rem}.subheader__btn-wrapper--right{margin-left:2rem}.subheader__textlink{background:transparent;color:#c6c9cc;cursor:pointer;font-size:1.4rem;text-decoration:underline}.subheader__textlink:focus{outline:.2rem solid #e1e3e4;outline-offset:.2rem}.teaserlist-dynamic{margin:0 2rem}@media screen and (min-width:768px){.teaserlist-dynamic__row{box-sizing:border-box}.teaserlist-dynamic__row:nth-child(odd){padding-right:2rem}.teaserlist-dynamic__row:nth-child(odd) .teaser-right:last-child{border-bottom:none}.teaserlist-dynamic__row:nth-child(2n){padding-left:2rem}}@media screen and (min-width:1024px){.teaserlist-dynamic{margin:0}}.teaserlist-dynamic__row:nth-child(2n) .teaser-right:last-child{border-bottom:none}.teaserlist-dynamic .teaser-right:last-child{border-bottom:.1rem solid #333d47}.infotext{color:#e1e3e4;font-size:1.6rem;line-height:2rem;padding:1.6rem 0}.infotext,.settings-navigation{background:#1c2732}.settings-navigation__item{align-items:center;display:flex;justify-content:space-between;width:100%}.settings-navigation__item.settings-navigation__item--secondary .form-toggle_text,.settings-navigation__item.settings-navigation__item--secondary .settings-navigation__label{padding-left:3rem}.settings-navigation__link{align-items:center;display:flex;justify-content:space-between;padding:1.5rem .8rem 1.5rem 0;width:100%}.settings-navigation__link .icon{fill:#e1e3e4}.settings-navigation__link:hover{background-color:#e1e3e4}.settings-navigation__link:hover .settings-navigation__label{color:#1c2732}.settings-navigation__link:hover .icon{fill:#1c2732}.settings-navigation__label{color:#e1e3e4;font-size:1.8rem;padding-left:2rem}.settings-navigation__btn-wrapper{height:5.4rem;width:5.4rem}.settings-navigation .icon{height:2.4rem;width:2.4rem}.settings-navigation .form-toggle{min-height:5.4rem}.settings-navigation .form-toggle_text{font-size:1.8rem;padding-left:2rem}.dialog{background:#1c2732;border:none;max-width:37.5rem;padding:2rem}.dialog__headline,.dialog__text{color:#e1e3e4;margin-bottom:1.2rem}.dialog::backdrop{backdrop-filter:blur(.5rem);background:rgba(18,26,33,.7)}.vueslider{padding-bottom:2rem}.vueslider .swiper-lazy-preloader{--swiper-preloader-color:#c6c9cc;margin:28.125% 0 0;top:0;translate:-50% -50%}.vueslider .swiper-slide.color--light{background-color:#1c2732}.vueslider .swiper-slide.color--tongue{background-color:#384e65}.vueslider .swiper-pagination-bullets.swiper-pagination-horizontal{bottom:auto;top:0}.vueslider .swiper-pagination-16x9{margin-top:calc(56.25% + 1rem)}.vueslider .swiper-pagination-1x1{margin-top:calc(100% + 1.6rem)}@media screen and (min-width:720px){.vueslider .swiper-pagination-1x1{margin-top:calc(56.25% + 1.6rem)}}.vueslider .swiper-pagination.color--tongue .swiper-pagination-bullet{background:#cdd3d9}.vueslider .swiper-pagination.color--tongue .swiper-pagination-bullet-active{background:#e5e8eb}.vueslider .swiper-tabactivation-wrapper{background:rgba(28,39,50,.7);display:flex;justify-content:center;left:-600rem;padding:calc(25.5% + 1rem) 0;position:absolute;width:100%;z-index:2}.vueslider .swiper-tabactivation-wrapper.is-visible{left:0}.vueslider .swiper-img--wrapper{margin-bottom:4.8rem;position:relative;width:100%}.vueslider .swiper-img--1x1{padding-top:100%}@media screen and (min-width:720px){.vueslider .swiper-img--1x1{padding-top:calc(56.25% + 1rem)}}.vueslider .swiper-img--16x9{padding-top:56.25%}.vueslider .swiper-img--wrapper img{height:auto;left:0;position:absolute;right:0;top:0;width:100%}.vueslider .swiper-copyright{color:#c6c9cc;margin-left:.8rem}.vueslider .swiper-slide.color--tongue .swiper-copyright{color:#cdd3d9}.vueslider .swiper-button-next,.vueslider .swiper-button-prev{margin-top:calc(28.125% - 3.5rem);top:0}.vueslider .swiper:focus .swiper-button-next:not(.swiper-button-disabled),.vueslider .swiper:focus .swiper-button-prev:not(.swiper-button-disabled),.vueslider .swiper:hover .swiper-button-next:not(.swiper-button-disabled),.vueslider .swiper:hover .swiper-button-prev:not(.swiper-button-disabled){opacity:1}.vueslider .mubu-container .swiper-description-text{margin:0 0 10px}.vueslider .swiper-description-text span>a{position:relative;z-index:42}.vueslider .swiper__textfield-link{border-bottom:none!important;bottom:0;left:0;position:absolute;text-decoration:none;top:0;width:100%}.vueslider .image-btn{position:absolute;right:0;top:0}.lazy-swiper--prerender-height-1x1{background-color:#333d47;background-position:50%;background-repeat:no-repeat;background-size:20%;margin-bottom:2rem;padding-bottom:calc(100% + 17rem);position:relative}@media screen and (min-width:720px){.lazy-swiper--prerender-height-1x1{padding-bottom:calc(56.25% + 14.9rem)}}@media screen and (min-width:1024px){.lazy-swiper--prerender-height-1x1{padding-bottom:calc(56.25% + 12.8rem)}}.lazy-swiper--prerender-height-16x9{background-color:#333d47;background-position:50%;background-repeat:no-repeat;background-size:20%;margin-bottom:2rem;padding-bottom:calc(56.25% + 17rem);position:relative}@media screen and (min-width:720px){.lazy-swiper--prerender-height-16x9{padding-bottom:calc(56.25% + 14.9rem)}}@media screen and (min-width:1024px){.lazy-swiper--prerender-height-16x9{padding-bottom:calc(56.25% + 12.8rem)}}.teaser-slider__wrapper{background:#1c2732}.teaser-slider__wrapper .swiper-container{padding-bottom:2rem}.teaser-slider__wrapper .swiper-wrapper{position:inherit}.teaser-slider__wrapper .swiper-lazy-preloader{--swiper-preloader-color:#c6c9cc;background-color:#333d47;margin:28.125% 0 0;position:absolute;top:0;translate:-50% -50%}.teaser-slider__wrapper .swiper-lazy-loading{height:100%;overflow:hidden;position:absolute;top:0;width:100%}.teaser-slider__wrapper .swiper-pagination{bottom:0!important;margin-bottom:1.6rem;margin-top:2.4rem;position:inherit}@media screen and (min-width:1024px){.teaser-slider__wrapper .swiper-pagination{margin-bottom:2.4rem}}.teaser-slider__wrapper .swiper-pagination-bullets{bottom:0}.teaser-slider__wrapper .swiper-button-next,.teaser-slider__wrapper .swiper-button-prev{top:15rem}@media screen and (max-width:768px){.teaser-slider__wrapper .swiper-button-next,.teaser-slider__wrapper .swiper-button-prev{top:18rem}}@media screen and (max-width:1024px){.teaser-slider__wrapper .swiper-button-next,.teaser-slider__wrapper .swiper-button-prev{top:36%}}@media screen and (min-width:1921px){.teaser-slider__wrapper .swiper-button-next,.teaser-slider__wrapper .swiper-button-prev{top:16rem}}.teaser-slider__wrapper .swiper-button-prev{left:1.4rem}.teaser-slider__wrapper .swiper-button-next{right:1.4rem}.teaser-slider__wrapper .swiper:focus .swiper-button-next:not(.swiper-button-disabled),.teaser-slider__wrapper .swiper:focus .swiper-button-prev:not(.swiper-button-disabled),.teaser-slider__wrapper .swiper:hover .swiper-button-next:not(.swiper-button-disabled),.teaser-slider__wrapper .swiper:hover .swiper-button-prev:not(.swiper-button-disabled){opacity:1}.teaser-slider__wrapper .swiper-slide{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:space-between}.teaser-slider__wrapper--tongue{background:#384e65}.teaser-slider__wrapper--tongue .swiper-pagination.color--tongue .swiper-pagination-bullet{background:#cdd3d9}.teaser-slider__wrapper--tongue .swiper-pagination.color--tongue .swiper-pagination-bullet-active{background:#ff9721}.teaser-slider--prerender-height-16x9{background-color:#333d47;background-position:50%;background-repeat:no-repeat;background-size:20%;min-height:40rem;width:100%}@media screen and (min-width:720px){.teaser-slider--prerender-height-16x9{min-height:48rem}}@media screen and (min-width:1024px){.teaser-slider--prerender-height-16x9{min-height:46rem}}.header-app{font-size:1.4rem;height:100%;margin:auto;-webkit-transition:.4s ease-in-out;-moz-transition:.4s ease-in-out;-o-transition:.4s ease-in-out;transition:.4s ease-in-out}.header-app__eventbox{height:100%;left:50%;position:absolute;top:0;transform:translate(-50%)}.header-app__eventbox.active{height:100%;left:0;position:static;top:0;transform:none}.header-app__link{align-items:center;color:#e1e3e4;cursor:pointer;display:none;font-size:1.8rem;height:100%;opacity:0}.header-app__link.__breaking{color:#fe486d}.header-app__link.color--unicorn{border-color:#e1e3e4;color:#fe486d}.header-app__link.color--unicorn svg{fill:#fe486d}.header-app__link__text{padding-right:.6rem;white-space:nowrap}.header-app .eilmeldung{padding:2rem 2rem 4rem}.header-app.active{z-index:161}.header-app__link{background:transparent;padding:0 .8rem}.header-app__link:focus{outline:.2rem solid #c6c9cc}.header-fancy-v2.small .header-app__link,.header.small .header-app__link{display:flex;opacity:1}.header-app__icon{align-items:center;display:flex;fill:#e1e3e4}.header-app__icon svg{height:2.5rem}.header-app__icon--embed-icon{height:2.5rem;width:2.5rem}.icon-animated--pulse{margin:.1rem 0 0 .1rem}.header-app__icon .__breakingicon{fill:#fe486d}.header-app__eventstage{background-color:rgba(18,26,33,.7);box-sizing:border-box;height:100vh;left:0;position:absolute;top:5.2rem;width:100%;z-index:161}:root .header-app__eventstage,_::-webkit-full-page-media,_:future{height:-webkit-fill-available}.header-app__eventbox{max-height:5.2rem}.header-app__close{background-color:#1c2732;cursor:pointer;height:3.6rem;position:absolute;right:2.7rem;top:-4.4rem;width:3.6rem;z-index:2}.header-app__close svg{width:2.5rem;fill:#e1e3e4}.header-app__close:focus{outline:.2rem solid #555d65}.header-fancy-v2.small .header-app__close{right:.8rem;width:8rem}.header-app__content{background-color:#1c2732;max-height:calc(100% - 5.2rem);overflow:auto;position:relative}.header-app-video{padding:1rem 0}.header-app-video__foot{margin:1rem 2rem}.header-app-video__topline{margin:1rem 2rem;text-align:center}.header-app-video__title{color:#e1e3e4;margin:1.2rem 0 .6rem}.header-app-video__info{color:#c6c9cc;padding-bottom:1rem}.header-app-video__link{box-sizing:border-box;margin:1.6rem 0;padding:0 2rem}.header-app-video__link.columns{float:none}.header-app-video__date{color:#c6c9cc;margin-top:.2rem}.header-app-video .label{bottom:.2rem;display:inline;margin-right:.6rem;padding:.1rem .6rem;position:relative}.header-app__video-player .player{height:100%;width:100%}.header-app__video-player .player:after{content:"";display:block;padding-bottom:56.25%}@media screen and (min-width:768px){.header-app__eventstage{height:100vh}.header-app__content{max-height:calc(100vh - 8rem)}}@media screen and (min-width:1024px){.header-app__link{display:flex;max-height:8rem;opacity:1}.header-app__icon svg{height:3.8rem}.header-app__close{height:6.2rem;position:absolute;right:1.9rem;top:-7rem;width:10rem}.header-app__close svg{width:3.6rem}.header-app__eventstage{top:8rem}.header-app__eventbox{max-height:8rem}.header-app-video__link{padding:0}.header-app .eilmeldung{padding:2rem 4rem 4rem}}@media screen and (min-width:1104px){.header-app__eventstage{width:100%}.header-app-video__link{padding:0}.header-app .eilmeldung{padding:2rem 2rem 4rem}}.external-embed{margin-bottom:2.4rem}.external-embed--twitter{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.external-embed--datawrapper iframe,.external-embed--internal iframe,.external-embed--livecenter iframe,.external-embed--twentythreedegrees iframe,.external-embed--twitter iframe,.external-embed--vwd iframe,.external-embed--wahl iframe{width:100%}.external-embed--wahl{margin-bottom:1.6rem}.external-embed--vwd{margin:0}.external-embed--livecenter{position:relative}.external-embed--livecenter:not(.external-embed--loaded):after{background-color:#333d47;background-position:50%;background-repeat:no-repeat;background-size:10%;bottom:0;content:"";left:0;position:absolute;right:0;top:0}.external-embed--prerender-height{min-height:500px}@media screen and (max-width:360px){.external-embed--vwd{margin-top:0}}.external-embed--messengerpeople .form-label a{color:#e1e3e4;text-decoration:underline;text-decoration-thickness:.1em;text-underline-offset:.2em}.external-embed__disclaimer{padding:1.2rem 0 .8rem}.external-embed__disclaimer,.external-embed__placeholder{background-color:#1c2732;border-bottom:.1rem solid #333d47;color:#c6c9cc}.external-embed__placeholder{border-top:.1rem solid #333d47;padding:.2rem 0}.external-embed__placeholder .form-label{color:#c6c9cc}.external-embed--facebook iframe{max-width:550px;width:100%!important}.external-embed--facebook>div{width:100%}.external-embed--facebook>div>span{margin-bottom:10px;width:100%!important}.external-embed--instagram iframe{margin-bottom:10px!important}.external-embed--tiktok .tiktok-embed{margin:0 0 1rem}.external-embed__youtube__embeddiv{height:0;margin-bottom:10px;padding-bottom:56.25%;position:relative;width:100%}.external-embed__youtube__embeddiv__iframe{height:100%;left:0;position:absolute;top:0;width:100%}.copytext__embed--livecenter .external-embed--prerender-height{min-height:260px}@media print{.external-embed__disclaimer{display:none}}.image-rights{background:#1c2732;color:#e1e3e4;float:left;padding-bottom:3.2rem;position:relative;width:100%}.image-rights__wrapper{color:#e1e3e4;display:flex;flex-wrap:wrap}.image-rights__info{display:block;float:left;width:100%}@media screen and (min-width:768px){.image-rights{padding-bottom:2.4rem}.image-rights .imageRights__info{padding:.8rem 2rem 0}}@media screen and (min-width:1921px){.image-rights .imageRights__info{padding:1.2rem 2rem 0}}.frc-captcha,.systeminfos__targetarea{outline:.1rem solid #e1e3e4}.systeminfos__targetarea{background:#1c2732;border:none;box-sizing:border-box;color:#c6c9cc;font-size:1.6rem;height:10rem;line-height:2.2rem;margin-bottom:2.4rem;padding:1.6rem 1.2rem;resize:vertical;width:100%}.systeminfos__button{margin-bottom:2.4rem}.systeminfos .systeminfos__targetarea:focus{outline:.1rem solid #e1e3e4}.form__wrapper{background:#333d47;box-sizing:border-box;padding:2rem 2.4rem}.form__headline,.form__paragraph{color:#e1e3e4}.form__feedback-message{color:#e1e3e4;margin-top:2.4rem}.form__feedback-message strong{display:block;margin-bottom:1.6rem}.form__feedback-message .textabsatz{background:inherit}.form__feedback-message--error{color:#fe486d}.form__infotext{margin:4.8rem 0 2.4rem}.form__infotext ol,.form__infotext p,.form__infotext ul{margin-bottom:1.6rem}.form__infotext ul{list-style:initial;padding-left:1.6rem}.form__infotext ol{list-style-type:decimal;padding-left:1.6rem}.searchapp{box-sizing:border-box}.searchapp__header{background-color:#1c2732;overflow:hidden;padding:15.8rem 2rem 0}.searchapp__slider-container{background-color:#1c2732;overflow:hidden;padding:0 2rem}.searchapp__slider-container .swiper{padding-bottom:2.4rem}.searchapp__noresults{background-color:#1c2732;overflow:hidden;padding:0 2rem}.searchapp .type-container{background-color:#1c2732;margin-top:1.6rem;overflow:hidden;padding:2.4rem 2rem}.searchapp .buttongroup{padding:1.6rem 0}.searchapp .buttongroup__container{background-color:#1c2732;overflow:hidden;padding:0 2rem}.searchapp .searchfield{margin-bottom:2.4rem}.searchapp .meldung__subhead{padding:0}@media screen and (min-width:1024px){.searchapp,.searchapp .buttongroup__container{padding:0}}.vue-datepicker{display:block;width:100%;z-index:99}.vue-datepicker__range{align-items:center;background:#1c2732;color:#e1e3e4;display:flex}.vue-datepicker__text{font-size:1.6rem;line-height:2.1rem;padding:0 .8rem}.vc-popover-content-wrapper{z-index:42!important}.vc-pane-container{background:#1c2732;border-radius:5px;color:#e1e3e4}.vc-title{color:#e1e3e4!important}.vc-popover-content-wrapper button{background:initial;color:inherit}.vue-picture__image{opacity:0;width:100%}.vue-picture__image.fade-in{opacity:1;transition:opacity .8s}.tabnav{box-sizing:border-box}.tabnav.spacing-bottom{padding-bottom:2rem}.tabnav--prerender-height-text{height:4.2rem}.tabnav--prerender-height-logos{height:6.6rem}.tabnav__item.swiper-slide{width:auto}.tabnav__item--text{font:inherit}.tabnav__item--img{display:block;height:3.2rem;width:3.2rem}.tabnav .swiper-nav-button--next,.tabnav .swiper-nav-button--prev{background:transparent;border:0;cursor:pointer;display:none;height:4rem;position:absolute;top:0;width:4rem;z-index:10}.tabnav .swiper-nav-button--next.swiper-button-disabled,.tabnav .swiper-nav-button--prev.swiper-button-disabled{display:none}.tabnav .swiper-nav-button--next svg,.tabnav .swiper-nav-button--prev svg{height:2rem;pointer-events:none;width:2rem;fill:#e1e3e4}.tabnav--logos .logo-btn{display:block;padding:.4rem}.tabnav--logos .logo-btn:focus img{outline:none}.tabnav--logos .swiper-nav-button--next,.tabnav--logos .swiper-nav-button--prev{top:1.2rem}@media screen and (min-width:1024px){.tabnav{padding-left:1rem}.tabnav .swiper-nav-button--prev{background:-moz-linear-gradient(left,#1c2732 0,rgba(28,39,50,0) 100%);background:-webkit-linear-gradient(left,#1c2732,rgba(28,39,50,0));background:linear-gradient(90deg,#1c2732 0,rgba(28,39,50,0));display:block;left:0;right:auto;z-index:1}.tabnav .swiper-nav-button--prev svg{margin-left:-3rem}.tabnav .swiper-nav-button--next{background:-moz-linear-gradient(left,rgba(28,39,50,0) -20%,#1c2732 65%,#1c2732 100%);background:-webkit-linear-gradient(left,rgba(28,39,50,0) -20%,#1c2732 65%,#1c2732);background:linear-gradient(90deg,rgba(28,39,50,0) -20%,#1c2732 65%,#1c2732);display:block;left:auto;padding-left:2rem;right:0}.tabnav .swiper-nav-button--next svg{margin-left:.5rem}}.vue-comparison-slider.color--tongue{background-color:#384e65}.vue-comparison-slider__slider{margin-bottom:1.6rem}.vue-comparison-slider.color--tongue .vue-comparison-slider__slider:focus{outline-color:#cdd3d9}.vue-comparison-slider__slider:focus{outline-color:#c6c9cc}.vue-comparison-slider__slider:focus .arrow-handle-control .icon--arrow-handle circle{fill:transparent}