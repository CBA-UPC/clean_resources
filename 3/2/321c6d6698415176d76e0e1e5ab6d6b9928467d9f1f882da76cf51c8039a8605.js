!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():t()}(this,function(){function e(e){if(!e)return!1;var t=Object.prototype.toString.call(e);return"[object Function]"==t||"[object AsyncFunction]"==t}function t(){return Date.now&&e(Date.now)?Date.now():(new Date).getTime()}function r(e){return null!=e&&"[object Object]"==Object.prototype.toString.call(e)}function n(){if("function"==typeof Uint32Array){var e="";if("undefined"!=typeof crypto?e=crypto:"undefined"!=typeof msCrypto&&(e=msCrypto),r(e)&&e.getRandomValues){var t=new Uint32Array(1),n=e.getRandomValues(t)[0],i=Math.pow(2,32);return n/i}}return Zi(1e19)/1e19}function i(e){var t=null;try{t=JSON.parse(e)}catch(r){}return t}function a(e,t){this.lockGetPrefix=e||"lock-get-prefix",this.lockSetPrefix=t||"lock-set-prefix"}function s(e){return"function"==typeof e||!(!e||"object"!=typeof e)&&s(e.listener)}function l(){this._events={}}function u(e){var t=e;try{t=decodeURIComponent(e)}catch(r){t=e}return t}function c(e){e=e||"";for(var t={},r=e.substring(1),n=r.split("&"),i=0;i<n.length;i++){var a=n[i].indexOf("=");if(a!==-1){var o=n[i].substring(0,a),s=n[i].substring(a+1);o=u(o),s=u(s),t[o]=s}}return t}function p(e){return"[object String]"==Object.prototype.toString.call(e)}function d(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function f(e){var t=function(e){this._fields={Username:4,Password:5,Port:7,Protocol:2,Host:6,Path:8,URL:0,QueryString:9,Fragment:10},this._values={},this._regex=/^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/,"undefined"!=typeof e&&this._parse(e)};return t.prototype.setUrl=function(e){this._parse(e)},t.prototype._initValues=function(){for(var e in this._fields)this._values[e]=""},t.prototype.addQueryString=function(e){if("object"!=typeof e)return!1;var t=this._values.QueryString||"";for(var r in e)t=new RegExp(r+"[^&]+").test(t)?t.replace(new RegExp(r+"[^&]+"),r+"="+e[r]):"&"===t.slice(-1)?t+r+"="+e[r]:""===t?r+"="+e[r]:t+"&"+r+"="+e[r];this._values.QueryString=t},t.prototype.getUrl=function(){var e="";return e+=this._values.Origin,e+=this._values.Port?":"+this._values.Port:"",e+=this._values.Path,e+=this._values.QueryString?"?"+this._values.QueryString:"",e+=this._values.Fragment?"#"+this._values.Fragment:""},t.prototype._parse=function(e){this._initValues();var t=this._regex.exec(e);t||zi.log("URLParser::_parse -> Invalid URL");var r=e.split("#"),n=r[0],i=r.slice(1).join("#");t=this._regex.exec(n);for(var a in this._fields)"undefined"!=typeof t[this._fields[a]]&&(this._values[a]=t[this._fields[a]]);this._values.Hostname=this._values.Host.replace(/:\d+$/,""),this._values.Origin=this._values.Protocol+"://"+this._values.Hostname,this._values.Fragment=i},new t(e)}function g(e){var t={},r=function(){var e;try{return e=new URL("https://www.sensorsdata.cn/"),"https://www.sensorsdata.cn/"===e.href}catch(t){return!1}};if("function"==typeof window.URL&&r())t=new URL(e),t.searchParams||(t.searchParams=function(){var e=c(t.search);return{get:function(t){return e[t]}}}());else{p(e)||(e=String(e)),e=d(e);var n=/^https?:\/\/.+/;if(n.test(e)===!1)return void zi.log("Invalid URL");var i=f(e);t.hash=i._values.Fragment,t.host=i._values.Host?i._values.Host+(i._values.Port?":"+i._values.Port:""):"",t.href=i._values.URL,t.password=i._values.Password,t.pathname=i._values.Path,t.port=i._values.Port,t.search=i._values.QueryString?"?"+i._values.QueryString:"",t.username=i._values.Username,t.hostname=i._values.Hostname,t.protocol=i._values.Protocol?i._values.Protocol+":":"",t.origin=i._values.Origin?i._values.Origin+(i._values.Port?":"+i._values.Port:""):"",t.searchParams=function(){var e=c("?"+i._values.QueryString);return{get:function(t){return e[t]}}}()}return t}function _(e){return!(!e||1!==e.nodeType)}function h(e){return void 0===e}function v(t){return Array.isArray&&e(v)?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}function y(e){return new Qi(e)}function b(e,t,r,n){function i(e){return e&&(e.preventDefault=i.preventDefault,e.stopPropagation=i.stopPropagation,e._getPath=i._getPath),e}function a(e,t,r,n){var a=function(a){if(a=a||i(window.event)){a.target=a.srcElement||a.target;var o,s,l=!0;return"function"==typeof r&&(o=r(a)),s=t.call(e,a),"beforeunload"!==n?(!1!==o&&!1!==s||(l=!1),l):void 0}};return a}i._getPath=function(){var e=this;return this.path||this.composedPath&&this.composedPath()||y(e.target).getParents()},i.preventDefault=function(){this.returnValue=!1},i.stopPropagation=function(){this.cancelBubble=!0};var o=function(e,t,r){if(void 0===n&&"click"===t&&(n=!0),e&&e.addEventListener)e.addEventListener(t,function(e){e._getPath=i._getPath,r.call(this,e)},n);else{var o="on"+t,s=e[o];e[o]=a(e,r,s,t)}};o.apply(null,arguments)}function w(e){var t="pushState"in window.history?"popstate":"hashchange";b(window,t,e)}function S(e){if(e)return"undefined"!=typeof window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?new XMLHttpRequest:"undefined"!=typeof XDomainRequest?new XDomainRequest:null;if("undefined"!=typeof window.XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){zi.log(t)}}}function k(e,t,r){if(null==e)return!1;if(ea&&e.forEach===ea)e.forEach(t,r);else if(v(e))for(var n=0,i=e.length;n<i;n++)n in e&&t.call(r,e[n],n,e);else for(var a in e)ta.call(e,a)&&t.call(r,e[a],a,e)}function P(e){return k(Array.prototype.slice.call(arguments,1),function(t){for(var r in t)ra.call(t,r)&&void 0!==t[r]&&(e[r]=t[r])}),e}function C(e){function t(e){if(!e)return"";try{return JSON.parse(e)}catch(t){return{}}}function n(){try{i&&"object"==typeof i&&i.abort&&i.abort()}catch(t){zi.log(t)}a&&(clearTimeout(a),a=null,e.error&&e.error(),i.onreadystatechange=null,i.onload=null,i.onerror=null)}e.timeout=e.timeout||2e4,e.credentials="undefined"==typeof e.credentials||e.credentials;var i=S(e.cors);if(!i)return!1;e.type||(e.type=e.data?"POST":"GET"),e=P({success:function(){},error:function(){}},e);var a,o=e.success,s=e.error;e.success=function(e,t){o(e,t),a&&(clearTimeout(a),a=null)},e.error=function(e,t){s(e,t),a&&(clearTimeout(a),a=null)},a=setTimeout(function(){n()},e.timeout),"undefined"!=typeof XDomainRequest&&i instanceof XDomainRequest&&(i.onload=function(){e.success&&e.success(t(i.responseText),i.status),i.onreadystatechange=null,i.onload=null,i.onerror=null},i.onerror=function(){e.error&&e.error(t(i.responseText),i.status),i.onreadystatechange=null,i.onerror=null,i.onload=null}),i.onreadystatechange=function(){try{4==i.readyState&&(i.status>=200&&i.status<300||304==i.status?e.success(t(i.responseText),i.status):e.error(t(i.responseText),i.status),i.onreadystatechange=null,i.onload=null)}catch(r){i.onreadystatechange=null,i.onload=null}},i.open(e.type,e.url,!0);try{e.credentials&&(i.withCredentials=!0),r(e.header)&&k(e.header,function(e,t){i.setRequestHeader&&i.setRequestHeader(t,e)}),e.data&&(e.cors||i.setRequestHeader&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),"application/json"===e.contentType?i.setRequestHeader&&i.setRequestHeader("Content-type","application/json; charset=UTF-8"):i.setRequestHeader&&i.setRequestHeader("Content-type","application/x-www-form-urlencoded"))}catch(l){zi.log(l)}i.send(e.data||null)}function O(e,t){var r=[];return null==e?r:Array.prototype.map&&e.map===Array.prototype.map?e.map(t):(k(e,function(e,n,i){r.push(t(e,n,i))}),r)}function j(e){var t=[];try{t=O(atob(e).split(""),function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})}catch(r){t=[]}try{return decodeURIComponent(t.join(""))}catch(r){return t.join("")}}function N(e){var t="";try{t=btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)}))}catch(r){t=e}return t}function T(e,t){t=t||window;var r=!1,n=!0,i=t.document,a=i.documentElement,o=i.addEventListener,s=o?"addEventListener":"attachEvent",l=o?"removeEventListener":"detachEvent",u=o?"":"on",c=function(n){"readystatechange"==n.type&&"complete"!=i.readyState||(("load"==n.type?t:i)[l](u+n.type,c,!1),!r&&(r=!0)&&e.call(t,n.type||n))},p=function(){try{a.doScroll("left")}catch(e){return void setTimeout(p,50)}c("poll")};if("complete"==i.readyState)e.call(t,"lazy");else{if(!o&&a.doScroll){try{n=!t.frameElement}catch(d){zi.log(d)}n&&p()}i[s](u+"DOMContentLoaded",c,!1),i[s](u+"readystatechange",c,!1),t[s](u+"load",c,!1)}}function I(e){return k(Array.prototype.slice.call(arguments,1),function(t){for(var r in t)void 0!==t[r]&&void 0===e[r]&&(e[r]=t[r])}),e}function A(e){var t=e;try{t=decodeURI(e)}catch(r){t=e}return t}function D(e){var t="t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8",r=t.length-1,n={},i=0;for(i=0;i<t.length;i++)n[t.charAt(i)]=t.charAt(r-i);var a="";for(i=0;i<e.length;i++)a+=e.charAt(i)in n?n[e.charAt(i)]:e.charAt(i);return a}function $(e){return"[object Date]"==Object.prototype.toString.call(e)}function x(e){function t(e){return e<10?"0"+e:e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())}function E(e){return k(e,function(t,n){$(t)?e[n]=x(t):r(t)&&(e[n]=E(t))}),e}function L(e){return k(Array.prototype.slice.call(arguments,1),function(t){for(var n in t)void 0!==t[n]&&(r(t[n])&&r(e[n])?P(e[n],t[n]):e[n]=t[n])}),e}function U(e,t,r){var n=Object.prototype.hasOwnProperty;if(e.filter)return e.filter(t);for(var i=[],a=0;a<e.length;a++)if(n.call(e,a)){var o=e[a];t.call(r,o,a,e)&&i.push(o)}return i}function R(e){try{return JSON.stringify(e,null,"  ")}catch(t){return JSON.stringify(e)}}function H(e){return"string"==typeof e&&e.match(/^[a-zA-Z0-9\u4e00-\u9fa5\-\.]+$/)?e:""}function B(e,t){e=e||location.hostname,t=t||"domain_test";var r=H(e),n=r.split(".");if(v(n)&&n.length>=2&&!/^(\d+\.)+\d+$/.test(r))for(var i="."+n.splice(n.length-1,1);n.length>0;)if(i="."+n.splice(n.length-1,1)+i,document.cookie=t+"=true; path=/; domain="+i,document.cookie.indexOf(t+"=true")!==-1){var a=new Date;return a.setTime(a.getTime()-1e3),document.cookie=t+"=true; expires="+a.toGMTString()+"; path=/; SameSite=Lax; domain="+i,i}return""}function J(e){function t(e,t){e=d(e);var r;if("body"===e)return document.getElementsByTagName("body")[0];if(0===e.indexOf("#"))e=e.slice(1),r=document.getElementById(e);else if(e.indexOf(":nth-of-type")>-1){var n=e.split(":nth-of-type");if(!n[0]||!n[1])return null;var i=n[0],a=n[1].match(/\(([0-9]+)\)/);if(!a||!a[1])return null;var o=Number(a[1]);if(!(_(t)&&t.children&&t.children.length>0))return null;for(var s=t.children,l=0;l<s.length;l++)if(_(s[l])){var u=s[l].tagName.toLowerCase();if(u===i&&(o--,0===o)){r=s[l];break}}if(o>0)return null}return r?r:null}function r(e){var i,a=n.shift();if(!a)return e;try{i=t(a,e)}catch(o){zi.log(o)}return i&&_(i)?r(i):null}if(!p(e))return null;var n=e.split(">"),i=null;return i=r(),i&&_(i)?i:null}function M(e,t){var r="",n="";return e.textContent?r=d(e.textContent):e.innerText&&(r=d(e.innerText)),r&&(r=r.replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)),n=r||"","input"!==t&&"INPUT"!==t||(n=e.value||""),n}function q(e,t){t&&"string"==typeof t||(t="hostname\u89e3\u6790\u5f02\u5e38");var r=null;try{r=g(e).hostname}catch(n){zi.log("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01")}return r||t}function K(){try{var e=navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);return e&&e[1]?Number.parseInt(e[1],10):""}catch(t){return""}}function F(e){var t={},r=e.split("?"),n=r[1]||"";return n&&(t=c("?"+n)),t}function V(e,t){var r=g(e),n=r.searchParams.get(t)||"";if(!n){var i=r.hash;if(i){var a=F(i);n=a[t]||""}}return n}function W(){return"undefined"!=typeof window.matchMedia||"undefined"!=typeof window.msMatchMedia}function z(){var e=screen.msOrientation||screen.mozOrientation||(screen.orientation||{}).type,t="\u672a\u53d6\u5230\u503c";if(e)t=e.indexOf("landscape")>-1?"landscape":"portrait";else if(W()){var r=window.matchMedia||window.msMatchMedia;r("(orientation: landscape)").matches?t="landscape":r("(orientation: portrait)").matches&&(t="portrait")}return t}function X(){var e,t={},r=navigator.userAgent.toLowerCase();return(e=r.match(/ qq\/([\d.]+)/))?t.qqBuildinBrowser=Number(e[1].split(".")[0]):(e=r.match(/mqqbrowser\/([\d.]+)/))?t.qqBrowser=Number(e[1].split(".")[0]):(e=r.match(/opera.([\d.]+)/))?t.opera=Number(e[1].split(".")[0]):(e=r.match(/msie ([\d.]+)/))?t.ie=Number(e[1].split(".")[0]):(e=r.match(/edge.([\d.]+)/))?t.edge=Number(e[1].split(".")[0]):(e=r.match(/firefox\/([\d.]+)/))?t.firefox=Number(e[1].split(".")[0]):(e=r.match(/chrome\/([\d.]+)/))?t.chrome=Number(e[1].split(".")[0]):(e=r.match(/version\/([\d.]+).*safari/))?t.safari=Number(e[1].match(/^\d*.\d*/)):(e=r.match(/trident\/([\d.]+)/))&&(t.ie=11),t}function Z(e){return p(e)?(e=d(e),A(e)):A(location.href)}function G(e){return p(e)?(e=d(e),A(e)):A(location.pathname)}function Q(e,t){return e.hasAttribute?e.hasAttribute(t):e.attributes?!(!e.attributes[t]||!e.attributes[t].specified):void 0}function Y(e,t){if("string"==typeof t)return Q(e,t);if(v(t)){for(var r=!1,n=0;n<t.length;n++){var i=Q(e,t[n]);if(i){r=!0;break}}return r}}function ee(e){if("string"!=typeof e)return 0;var t=0,r=null;if(0==e.length)return t;for(var n=0;n<e.length;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t&=t;return t}function te(e){var t=9007199254740992,r=-9007199254740992,n=31,i=0;if(e.length>0)for(var a=e.split(""),o=0;o<a.length;o++){var s=a[o].charCodeAt(),l=n*i+s;if(l>t)for(i=r+i;l=n*i+s,l<r;)i=i/2+s;if(l<r)for(i=t+i;l=n*i+s,l>t;)i=i/2+s;i=n*i+s}return i}function re(e,t){var r=e.indexOf;if(r)return r.call(e,t);for(var n=0;n<e.length;n++)if(t===e[n])return n;return-1}function ne(e,t){return e.prototype=new t,e.prototype.constructor=e,e.superclass=t.prototype,e}function ie(e){return!(!e||!ia.call(e,"callee"))}function ae(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function oe(e){if(r(e)){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}return!1}function se(e){if("string"!=typeof e)return!1;var t=/^https?:\/\/.+/;return t.test(e)!==!1||(zi.log("Invalid URL"),!1)}function le(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)}function ue(e){try{JSON.parse(e)}catch(t){return!1}return!0}function ce(e){return"[object Number]"==Object.prototype.toString.call(e)&&/[\d\.]+/.test(String(e))}function pe(){var e=!1;if("object"!=typeof navigator||"function"!=typeof navigator.sendBeacon)return e;var t=X(),r=navigator.userAgent.toLowerCase();if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){var n=/os [\d._]*/gi,i=r.match(n),a=(i+"").replace(/[^0-9|_.]/gi,"").replace(/_/gi,"."),o=a.split(".");"undefined"==typeof t.safari&&(t.safari=o[0]),o[0]&&(t.qqBuildinBrowser||t.qqBrowser)?e=!1:o[0]&&o[0]<13?(t.chrome>41||t.firefox>30||t.opera>25||t.safari>12)&&(e=!0):(t.chrome>41||t.firefox>30||t.opera>25||t.safari>11.3)&&(e=!0)}else(t.chrome>38||t.edge>13||t.firefox>30||t.opera>25||t.safari>11)&&(e=!0);return e}function de(){return"undefined"!=typeof window.XMLHttpRequest&&("withCredentials"in new XMLHttpRequest||"undefined"!=typeof XDomainRequest)}function fe(t){if(!r(t)||!p(t.callbackName))return zi.log("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"),!1;t.success=e(t.success)?t.success:function(){},t.error=e(t.error)?t.error:function(){},t.data=t.data||"";var n=document.createElement("script"),i=document.getElementsByTagName("head")[0],a=null,o=!1;if(n.defer="defer",i.appendChild(n),ce(t.timeout)){var s=Math.min(t.timeout,3e5);a=setTimeout(function(){return!o&&(t.error("timeout"),window[t.callbackName]=function(){zi.log("call jsonp error")},a=null,i.removeChild(n),void(o=!0))},s)}if(window[t.callbackName]=function(){clearTimeout(a),a=null,t.success.apply(null,arguments),window[t.callbackName]=function(){zi.log("call jsonp error")},i.removeChild(n)},t.url.indexOf("?")>-1?t.url+="&callbackName="+t.callbackName:t.url+="?callbackName="+t.callbackName,r(t.data)){var l=[];k(t.data,function(e,t){l.push(t+"="+e)}),t.data=l.join("&"),t.url+="&"+t.data}n.onerror=function(e){return!o&&(window[t.callbackName]=function(){zi.log("call jsonp error")},clearTimeout(a),a=null,i.removeChild(n),t.error(e),void(o=!0))},n.src=encodeURI(t.url)}function ge(t){var r={visibleHandler:e(t.visible)?t.visible:function(){},hiddenHandler:e(t.hidden)?t.hidden:function(){},visibilityChange:null,hidden:null,isSupport:function(){return"undefined"!=typeof document[this.hidden]},init:function(){"undefined"!=typeof document.hidden?(this.hidden="hidden",this.visibilityChange="visibilitychange"):"undefined"!=typeof document.mozHidden?(this.hidden="mozHidden",this.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(this.hidden="msHidden",this.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),this.listen()},listen:function(){if(this.isSupport()){var e=this;b(document,this.visibilityChange,function(){document[e.hidden]?e.hiddenHandler():e.visibleHandler()},1)}else b(window,"focus",this.visibleHandler),b(window,"blur",this.hiddenHandler)}};r.init()}function _e(e){e=P({success:function(){},error:function(){},appendCall:function(e){document.getElementsByTagName("head")[0].appendChild(e)}},e);var t=null;"css"===e.type&&(t=document.createElement("link"),t.rel="stylesheet",t.href=e.url),"js"===e.type&&(t=document.createElement("script"),t.async="async",t.setAttribute("charset","UTF-8"),t.src=e.url,t.type="text/javascript"),t.onload=t.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e.success(),t.onload=t.onreadystatechange=null)},t.onerror=function(){e.error(),t.onerror=null},e.appendCall(t)}function he(e){if("string"!=typeof e)return"";for(var t=/^\s*javascript/i;t.test(e);)e=e.replace(t,"");return e}function me(e,t){e=String(e),t="number"==typeof t?t:13;for(var r=126,n=e.split(""),i=0,a=n.length;i<a;i++){var o=n[i].charCodeAt(0);o<r&&(n[i]=String.fromCharCode((n[i].charCodeAt(0)+t)%r))}return n.join("")}function ve(e){var t=13,r=126;return e=String(e),me(e,r-t)}function ye(e){(r(e)||v(e))&&k(e,function(t,n){r(t)||v(t)?ye(e[n]):$(t)&&(e[n]=x(t))})}function be(e){var t=document.createElement("style");t.type="text/css";try{t.appendChild(document.createTextNode(e))}catch(r){t.styleSheet.cssText=e}var n=document.getElementsByTagName("head")[0],i=document.getElementsByTagName("script")[0];n?n.children.length?n.insertBefore(t,n.children[0]):n.appendChild(t):i.parentNode.insertBefore(t,i)}function we(e){if("string"!=typeof e)return zi.log("\u8f6c\u6362unicode\u9519\u8bef",e),e;for(var t="",r=0;r<e.length;r++)t+="\\"+e.charCodeAt(r).toString(16);return t}function Se(e,r,n){var i,a,o,s=null,l=0;n||(n={});var u=function(){l=n.leading===!1?0:t(),s=null,o=e.apply(i,a),s||(i=a=null)};return function(){var c=t();l||n.leading!==!1||(l=c);var p=r-(c-l);return i=this,a=arguments,p<=0||p>r?(s&&(clearTimeout(s),s=null),l=c,o=e.apply(i,a),s||(i=a=null)):s||n.trailing===!1||(s=setTimeout(u,p)),o}}function ke(e){var t=[];return null==e?t:(k(e,function(e){t[t.length]=e}),t)}function Pe(e){return e?e.toArray?e.toArray():v(e)||ie(e)?Array.prototype.slice.call(e):ke(e):[]}function Ce(e){for(var t,r=[],n={},i=0;i<e.length;i++)t=e[i],t in n||(n[t]=!0,r.push(t));return r}function Oe(){pa.msg.apply(pa,arguments).log()}function je(){pa.msg.apply(pa,arguments).level("warn").log()}function Ne(){pa.msg.apply(pa,arguments).level("error").log()}function Te(e){var t=da.current_domain;switch(typeof t){case"function":var r=t();return""===r||""===d(r)?"url\u89e3\u6790\u5931\u8d25":r.indexOf(".")!==-1?r:"url\u89e3\u6790\u5931\u8d25";case"string":return""===t||""===d(t)?"url\u89e3\u6790\u5931\u8d25":t.indexOf(".")!==-1?t:"url\u89e3\u6790\u5931\u8d25";default:var n=B(null,ha);return""===e?"url\u89e3\u6790\u5931\u8d25":""===n?"url\u89e3\u6790\u5931\u8d25":n}}function Ie(){var e=document.referrer,t="baidu.com";if(!e)return!1;try{var r=g(e).hostname;return r&&r.substring(r.length-t.length)===t}catch(n){return!1}}function Ae(){var e=F(document.referrer);if(oe(e)||!e.eqid){var t=F(location.href);return e.ck||t.utm_source?"baidu_sem_keyword_id":"baidu_other_keyword_id"}return"baidu_seo_keyword_id"}function De(){var e=F(document.referrer);return oe(e)||!e.eqid?Gi().replace(/-/g,""):e.eqid}function $e(e,t){return e=e||document.referrer,p(e)?(e=d(e),e=A(e),0!==e.indexOf("https://www.baidu.com/")||t||(e=e.split("?")[0]),e=e.slice(0,da.max_referrer_string_length),p(e)?e:""):"\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_"+String(e)}function xe(e){if(e=e||document.referrer,""===e)return!0;var t=B(null,ha);return q(e).indexOf(t)===-1&&""!==t}function Ee(e,t){e=e||document.referrer;var n=da.source_type.keyword;if(document&&p(e)){if(0===e.indexOf("http")){var i=Le(e),a=F(e);if(oe(a))return da.preset_properties.search_keyword_baidu&&Ie()?void 0:"\u672a\u53d6\u5230\u503c";var o=null;for(var s in n)if(i===s&&r(a))if(o=n[s],v(o))for(s=0;s<o.length;s++){var l=a[o[s]];if(l)return t?{active:l}:l}else if(a[o])return t?{active:a[o]}:a[o];return da.preset_properties.search_keyword_baidu&&Ie()?void 0:"\u672a\u53d6\u5230\u503c"}return""===e?"\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00":"\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"}return"\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_"+String(e)}function Le(e){var t=q(e);if(!t||"hostname\u89e3\u6790\u5f02\u5e38"===t)return"";var r={baidu:[/^.*\.baidu\.com$/],bing:[/^.*\.bing\.com$/],google:[/^www\.google\.com$/,/^www\.google\.com\.[a-z]{2}$/,/^www\.google\.[a-z]{2}$/],sm:[/^m\.sm\.cn$/],so:[/^.+\.so\.com$/],sogou:[/^.*\.sogou\.com$/],yahoo:[/^.*\.yahoo\.com$/]};for(var n in r)for(var i=r[n],a=0,o=i.length;a<o;a++)if(i[a].test(t))return n;return"\u672a\u77e5\u641c\u7d22\u5f15\u64ce"}function Ue(e,t){var r="";if(da.cross_subdomain===!1){try{if(t)r=g(t).hostname;else{var n=location.host;h(Vi.para.white_list[n])||(r=Vi.para.white_list[n])}}catch(i){Ne(i)}r="string"==typeof r&&""!==r?"sajssdk_2015_"+da.sdk_id+e+"_"+r.replace(/\./g,"_"):"sajssdk_2015_root_"+da.sdk_id+e}else r="sajssdk_2015_cross_"+da.sdk_id+e;return r}function Re(){var e="new_user";return va.isSupport()?null!==va.get("sensorsdata_is_new_user")||null!==va.get(Ue(e)):null!==Sa.get(Sa.getNewUserFlagMemoryKey(e))}function He(e,t,n){var i=!(!r(da.heatmap)||!da.heatmap.useCapture);return r(da.heatmap)&&h(da.heatmap.useCapture)&&"click"===t&&(i=!0),b(e,t,n,i)}function Be(){function e(e,t){for(var r=0;r<e.length;r++)if(t.split("?")[0].indexOf(e[r])!==-1)return!0}var t="("+da.source_type.utm.join("|")+")\\=[^&]+",r=da.source_type.search,n=da.source_type.social,i=document.referrer||"",a=wa.pageProp.url;if(a){var o=a.match(new RegExp(t));return o&&o[0]?"\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf":e(r,i)?"\u81ea\u7136\u641c\u7d22\u6d41\u91cf":e(n,i)?"\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf":""===i?"\u76f4\u63a5\u6d41\u91cf":"\u5f15\u8350\u6d41\u91cf"}return"\u83b7\u53d6url\u5f02\u5e38"}function Je(e){var t=V(e,"gdt_vid"),r=V(e,"hash_key"),n=V(e,"callbacks"),i={click_id:"",hash_key:"",callbacks:""};return p(t)&&t.length&&(i.click_id=16==t.length||18==t.length?t:"\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5",p(r)&&r.length&&(i.hash_key=r),p(n)&&n.length&&(i.callbacks=n)),i}function Me(t){var n=t.properties,i=JSON.parse(JSON.stringify(t));r(n)&&k(n,function(t,r){if(e(t))try{n[r]=t(i),e(n[r])&&(je("\u60a8\u7684\u5c5e\u6027- "+r+" \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),delete n[r])}catch(a){delete n[r],je("\u60a8\u7684\u5c5e\u6027- "+r+" \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")}})}function qe(e){if(r(e)&&e.$option){var t=e.$option;return delete e.$option,t}return{}}function Ke(e){var t={};return k(e,function(e,r){null!=e&&(t[r]=e)}),t}function Fe(e){var t=!e.type||"profile"!==e.type.slice(0,7),n="\u53d6\u503c\u5f02\u5e38";r(e.properties)&&t&&("$referrer"in e.properties&&(e.properties.$referrer_host=""===e.properties.$referrer?"":q(e.properties.$referrer,n)),da.preset_properties.latest_referrer&&da.preset_properties.latest_referrer_host&&(e.properties.$latest_referrer_host=""===e.properties.$latest_referrer?"":q(e.properties.$latest_referrer,n)))}function Ve(e){var t=!e.type||"profile"!==e.type.slice(0,7),r=da.preset_properties&&t;r&&da.preset_properties.url&&h(e.properties.$url)&&(e.properties.$url=Z()),r&&da.preset_properties.title&&h(e.properties.$title)&&(e.properties.$title=document.title)}function We(e){if(!_(e.target))return!1;var t=e.target,r=t.tagName.toLowerCase(),n={};return n.$element_type=r,n.$element_name=t.getAttribute("name"),n.$element_id=t.getAttribute("id"),n.$element_class_name=p(t.className)?t.className:null,n.$element_target_url=t.getAttribute("href"),n.$element_content=Xe(t,r),n=Ke(n),n.$url=Z(),n.$url_path=G(),n.$title=document.title,n}function ze(t){var r=da.heatmap&&e(da.heatmap.collect_input)&&da.heatmap.collect_input(t);return"button"===t.type||"submit"===t.type||r?t.value||"":""}function Xe(e,t){return p(t)&&"input"===t.toLowerCase()?ze(e):M(e,t)}function Ze(e){return ba.protocol.ajax(e.url),C(e)}function Ge(e){if("string"==typeof e&&(e=d(e),e&&("://"===e.slice(0,3)?e=location.protocol.slice(0,-1)+e:"//"===e.slice(0,2)?e=location.protocol+e:"http"!==e.slice(0,4)&&(e=""))),v(e)&&e.length)for(var t=0;t<e.length;t++)/sa\.gif[^\/]*$/.test(e[t])||(e[t]=e[t].replace(/\/sa$/,"/sa.gif").replace(/(\/sa)(\?[^\/]+)$/,"/sa.gif$2"));else/sa\.gif[^\/]*$/.test(e)||"string"!=typeof e||(e=e.replace(/\/sa$/,"/sa.gif").replace(/(\/sa)(\?[^\/]+)$/,"/sa.gif$2"));return e}function Qe(e){p(e)||(e=JSON.stringify(e));var t=N(e),r="crc="+ee(t);return"data="+encodeURIComponent(t)+"&ext="+encodeURIComponent(r)}function Ye(t){var r=location.href,n=window.history.pushState,i=window.history.replaceState;e(window.history.pushState)&&(window.history.pushState=function(){n.apply(window.history,arguments),t(r),r=location.href}),e(window.history.replaceState)&&(window.history.replaceState=function(){i.apply(window.history,arguments),t(r),r=location.href});var a;a=window.document.documentMode?"hashchange":n?"popstate":"hashchange",b(window,a,function(){t(r),r=location.href})}function et(e,t){var r=[];"string"==typeof e&&e in Ca.EVENT_LIST&&(r=Ca.EVENT_LIST[e],Ca[r[0]].on(r[1],t))}function tt(){this.sendTimeStamp=0,this.timer=null,this.serverUrl="",this.hasTabStorage=!1}function rt(e,t){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&!Ua.check(r,e[r],t))return!1;return!0}function nt(t,n){return r(t)?(k(t,function(i,a){if(v(i)){var o=[];k(i,function(e){if(p(e))o.push(e);else if(h(e))o.push("null");else try{o.push(JSON.stringify(e))}catch(t){je("\u60a8\u7684\u6570\u636e-",a,i,"\u6570\u7ec4\u91cc\u503c\u6709\u9519\u8bef,\u5df2\u5c06\u5176\u5220\u9664")}}),t[a]=o}var s=re(n||[],a)>-1;if(r(i)&&"$option"!==a&&!s)try{t[a]=JSON.stringify(i)}catch(l){delete t[a],je("\u60a8\u7684\u6570\u636e-",a,i,"\u6570\u636e\u503c\u6709\u9519\u8bef\uff0c\u5df2\u5c06\u5176\u5220\u9664")}else p(i)||ce(i)||$(i)||ae(i)||v(i)||e(i)||"$option"===a||s||(je("\u60a8\u7684\u6570\u636e-",a,i,"-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),delete t[a])}),t):t}function it(e,t){return ce(t)&&e.length>t?(je("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--"+e),e.slice(0,t)):e}function at(e,t){var n=["distinct_id","user_id","id","date","datetime","event","events","first_id","original_id","device_id","properties","second_id","time","users"];r(e)&&k(n,function(r,n){r in e&&(re(t||[],r)>-1||(n<3?(delete e[r],je("\u60a8\u7684\u5c5e\u6027- "+r+"\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")):je("\u60a8\u7684\u5c5e\u6027- "+r+"\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d")))})}function ot(e){var t=["$element_selector","$element_path"],n=["sensorsdata_app_visual_properties"];r(e)&&k(e,function(i,a){if(r(i))ot(e[a]);else if(p(i)){if(re(n,a)>-1)return;e[a]=it(i,re(t,a)>-1?1024:da.max_string_length)}})}function st(e){"undefined"!=typeof e.properties.$project&&(e.project=e.properties.$project,delete e.properties.$project),"undefined"!=typeof e.properties.$token&&(e.token=e.properties.$token,delete e.properties.$token)}function lt(e){if("item_type"in e){var t=e.item_type,r=function(t){return t||delete e.item_type,!0};rt({item_type:t},r)}if("item_id"in e){var n=e.item_id,i=function(t,r,n){return t||"string"!==n||delete e.item_id,!0};rt({item_id:n},i)}}function ut(e,t){k(e,function(r,n){var i=function(t,r,i){return t||"keyLength"===i||delete e[n],!0};re(t||[],n)===-1&&rt({propertyKey:n},i)})}function ct(e){var t=e.properties;ye(e),r(t)?(nt(t),at(t),st(e),ut(t),ot(t)):"properties"in e&&(e.properties={}),lt(e)}function pt(e,t){var r=t.sensors;return e._track_id=Number(String(n()).slice(2,5)+String(n()).slice(2,4)+String((new Date).getTime()).slice(-4)),e._flush_time=(new Date).getTime(),r.events.tempAdd("send",e),e}function dt(e,t){try{var n=t.sensors,i={};r(e)&&r(e.identities)&&!oe(e.identities)?P(i,e.identities):P(i,xa._state.identities);var a={identities:i,distinct_id:xa.getDistinctId(),lib:{$lib:"js",$lib_method:"code",$lib_version:String(n.lib_version)},properties:{}};return r(e)&&r(e.properties)&&!oe(e.properties)&&(e.properties.$lib_detail&&(a.lib.$lib_detail=e.properties.$lib_detail,delete e.properties.$lib_detail),e.properties.$lib_method&&(a.lib.$lib_method=e.properties.$lib_method,delete e.properties.$lib_method)),L(a,xa.getUnionId(),e),r(e.properties)&&!oe(e.properties)&&P(a.properties,e.properties),e.type&&"profile"===e.type.slice(0,7)||(a.properties=P({},wa.properties(),xa.getProps(),xa.getSessionProps(),wa.currentProps,a.properties),n.para.preset_properties.latest_referrer&&!p(a.properties.$latest_referrer)&&(a.properties.$latest_referrer="\u53d6\u503c\u5f02\u5e38"),n.para.preset_properties.latest_search_keyword&&!p(a.properties.$latest_search_keyword)&&(n.para.preset_properties.search_keyword_baidu&&p(a.properties.$search_keyword_id)&&ce(a.properties.$search_keyword_id_hash)&&p(a.properties.$search_keyword_id_type)||(a.properties.$latest_search_keyword="\u53d6\u503c\u5f02\u5e38")),n.para.preset_properties.latest_traffic_source_type&&!p(a.properties.$latest_traffic_source_type)&&(a.properties.$latest_traffic_source_type="\u53d6\u503c\u5f02\u5e38"),n.para.preset_properties.latest_landing_page&&!p(a.properties.$latest_landing_page)&&(a.properties.$latest_landing_page="\u53d6\u503c\u5f02\u5e38"),"not_collect"===n.para.preset_properties.latest_wx_ad_click_id?(delete a.properties._latest_wx_ad_click_id,delete a.properties._latest_wx_ad_hash_key,delete a.properties._latest_wx_ad_callbacks):n.para.preset_properties.latest_wx_ad_click_id&&!p(a.properties._latest_wx_ad_click_id)&&(a.properties._latest_wx_ad_click_id="\u53d6\u503c\u5f02\u5e38",a.properties._latest_wx_ad_hash_key="\u53d6\u503c\u5f02\u5e38",a.properties._latest_wx_ad_callbacks="\u53d6\u503c\u5f02\u5e38"),p(a.properties._latest_wx_ad_click_id)&&(a.properties.$url=Z())),a.properties.$time&&$(a.properties.$time)?(a.time=1*a.properties.$time,delete a.properties.$time):a.time=1*new Date,function(e){if(n.bridge&&"success"===n.bridge.bridge_info.verify_success){var t=Ba.customProp.geth5Props(JSON.parse(JSON.stringify(e)));r(t)&&!oe(t)&&(e.properties=P(e.properties,t))}var i=qa.customProp.getVtrackProps(JSON.parse(JSON.stringify(e)));r(i)&&!oe(i)&&(e.properties=P(e.properties,i))}(a),Me(a),ka.checkIsAddSign(a),ka.checkIsFirstTime(a),Fe(a),Ve(a),a}catch(o){return{_debug_web_msg:String(o)}}}function ft(e){return Fa.stage.process("basicProps",e)}function gt(e){return Fa.stage.process("formatData",e)}function _t(e,t,r,n){function i(e){function i(){o||(o=!0,location.href=a.href)}e.stopPropagation(),e.preventDefault();var o=!1;setTimeout(i,1e3),n(t,r,i)}e=e||{};var a=null;return e.ele&&(a=e.ele),e.event&&(a=e.target?e.target:e.event.target),r=r||{},!(!a||"object"!=typeof a)&&(!a.href||/^javascript/.test(a.href)||a.target||a.download||a.onclick?(n(t,r),!1):(e.event&&i(e.event),void(e.ele&&He(e.ele,"click",function(e){i(e)}))))}function ht(){var e=location.protocol;return"http:"===e||"https:"===e?e:"http:"}function mt(e){return Wa.stage.process("webClickEvent",e)}function vt(e){return Wa.stage.process("webStayEvent",e)}function yt(){var e=wa.campaignParams(),t={};return k(e,function(e,r,n){(" "+Vi.source_channel_standard+" ").indexOf(" "+r+" ")!==-1?t["$"+r]=n[r]:t[r]=n[r]}),t}function bt(e,t,r){if(Vi.is_first_visitor&&r){var n={};Vi.para.preset_properties.search_keyword_baidu&&xe(document.referrer)&&Ie()&&(n.$search_keyword_id=ya.id(),n.$search_keyword_id_type=ya.type(),n.$search_keyword_id_hash=te(n.$search_keyword_id));var i=$e(null,t);e(P({$first_visit_time:new Date,$first_referrer:i,$first_referrer_host:i?q(i,"\u53d6\u503c\u5f02\u5e38"):"",$first_browser_language:p(navigator.language)?navigator.language.toLowerCase():"\u53d6\u503c\u5f02\u5e38",$first_browser_charset:p(document.charset)?document.charset.toUpperCase():"\u53d6\u503c\u5f02\u5e38",$first_traffic_source_type:Be(),$first_search_keyword:Ee()},yt(),n)),Vi.is_first_visitor=!1}}function wt(e,t){var n=e.id,i=e.callback,a=e.name,o=xa.getFirstId(),s=xa.getOriginDistinctId();if(!rt({distinct_id:n}))return Ne("login id is invalid"),!1;if(n===xa.getOriginDistinctId()&&!o)return Ne("login id is equal to distinct_id"),!1;if(r(xa._state.identities)&&xa._state.identities.hasOwnProperty(a)&&n===xa._state.first_id)return!1;
var l=xa._state.history_login_id.name!==a||n!==xa._state.history_login_id.value;if(l){xa._state.identities[a]=n,xa.set("history_login_id",{name:a,value:n}),o||xa.set("first_id",s),t(n,"$SignUp",{},i);var u={$identity_cookie_id:xa._state.identities.$identity_cookie_id};return u[a]=n,St(u),!0}return!1}function St(e){var t={};for(var r in e)t[r]=e[r];xa._state.identities=t,xa.save()}function kt(e,t){if(!rt({unbindKey:e,bindValue:t}))return!1;if(r(xa._state.identities)&&xa._state.identities.hasOwnProperty(e)&&xa._state.identities[e]===t){var n=xa.getUnionId().login_id;n&&e+"+"+t===n&&(xa._state.distinct_id=xa._state.first_id,xa._state.first_id="",xa.set("history_login_id",{name:"",value:""})),"$identity_cookie_id"!==e&&(delete xa._state.identities[e],xa.save())}var i={};return i[e]=t,i}function Pt(){Vi._t=Vi._t||1*new Date,Vi.is_first_visitor=!1,Vi.source_channel_standard=ga}function Ct(e){P(da,e||Vi.para||{}),Vi.para=da;var t={};if(r(Vi.para.is_track_latest))for(var n in Vi.para.is_track_latest)t["latest_"+n]=Vi.para.is_track_latest[n];Vi.para.preset_properties=P({},fa.preset_properties,t,Vi.para.preset_properties||{});var i;for(i in fa)void 0===Vi.para[i]&&(Vi.para[i]=fa[i]);"string"!=typeof Vi.para.web_url||"://"!==Vi.para.web_url.slice(0,3)&&"//"!==Vi.para.web_url.slice(0,2)||("://"===Vi.para.web_url.slice(0,3)?Vi.para.web_url=location.protocol.slice(0,-1)+Vi.para.web_url:Vi.para.web_url=location.protocol+Vi.para.web_url),ba.protocol.serverUrl(),Vi.bridge&&Vi.bridge.initPara();var a=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],o=["www.baidu.","m.baidu.","m.sm.cn","so.com","sogou.com","youdao.com","google.","yahoo.com/","bing.com/","ask.com/"],s=["weibo.com","renren.com","kaixin001.com","douban.com","qzone.qq.com","zhihu.com","tieba.baidu.com","weixin.qq.com"],l={baidu:["wd","word","kw","keyword"],google:"q",bing:"q",yahoo:"p",sogou:["query","keyword"],so:"q",sm:"q"};"object"==typeof Vi.para.source_type&&(Vi.para.source_type.utm=v(Vi.para.source_type.utm)?Vi.para.source_type.utm.concat(a):a,Vi.para.source_type.search=v(Vi.para.source_type.search)?Vi.para.source_type.search.concat(o):o,Vi.para.source_type.social=v(Vi.para.source_type.social)?Vi.para.source_type.social.concat(s):s,Vi.para.source_type.keyword=r(Vi.para.source_type.keyword)?P(l,Vi.para.source_type.keyword):l);var u={div:!1},c=["mark","/mark","strong","b","em","i","u","abbr","ins","del","s","sup"];if(Vi.para.heatmap&&!r(Vi.para.heatmap)&&(Vi.para.heatmap={}),r(Vi.para.heatmap)){Vi.para.heatmap.clickmap=Vi.para.heatmap.clickmap||"default",Vi.para.heatmap.scroll_notice_map=Vi.para.heatmap.scroll_notice_map||"default",Vi.para.heatmap.scroll_delay_time=Vi.para.heatmap.scroll_delay_time||4e3,Vi.para.heatmap.scroll_event_duration=Vi.para.heatmap.scroll_event_duration||18e3,Vi.para.heatmap.renderRefreshTime=Vi.para.heatmap.renderRefreshTime||1e3,Vi.para.heatmap.loadTimeout=Vi.para.heatmap.loadTimeout||1e3,Vi.para.heatmap.get_vtrack_config!==!0&&(Vi.para.heatmap.get_vtrack_config=!1);var p=v(Vi.para.heatmap.track_attr)?U(Vi.para.heatmap.track_attr,function(e){return e&&"string"==typeof e}):[];if(p.push("data-sensors-click"),Vi.para.heatmap.track_attr=p,r(Vi.para.heatmap.collect_tags))if(Vi.para.heatmap.collect_tags.div===!0)Vi.para.heatmap.collect_tags.div={ignore_tags:c,max_level:1};else if(r(Vi.para.heatmap.collect_tags.div)){if(Vi.para.heatmap.collect_tags.div.ignore_tags?v(Vi.para.heatmap.collect_tags.div.ignore_tags)||(je("ignore_tags \u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4\u683c\u5f0f"),Vi.para.heatmap.collect_tags.div.ignore_tags=c):Vi.para.heatmap.collect_tags.div.ignore_tags=c,Vi.para.heatmap.collect_tags.div.max_level){var d=[1,2,3];re(d,Vi.para.heatmap.collect_tags.div.max_level)===-1&&(Vi.para.heatmap.collect_tags.div.max_level=1)}}else Vi.para.heatmap.collect_tags.div=!1;else Vi.para.heatmap.collect_tags=u}Vi.para.server_url=Ge(Vi.para.server_url),Vi.para.noCache===!0?Vi.para.noCache="?"+(new Date).getTime():Vi.para.noCache="",Vi.para.callback_timeout>Vi.para.datasend_timeout&&(Vi.para.datasend_timeout=Vi.para.callback_timeout),Vi.para.heatmap&&Vi.para.heatmap.collect_tags&&r(Vi.para.heatmap.collect_tags)&&k(Vi.para.heatmap.collect_tags,function(e,t){"div"!==t&&e&&Vi.heatmap.otherTags.push(t)}),Vi.para.heatmap&&"default"===Vi.para.heatmap.clickmap&&Vi.heatmap.initUnlimitedTags()}function Ot(){var e=Array.prototype.slice.call(arguments),t=e[0],r=e.slice(1);return"string"==typeof t&&Za[t]?Za[t].apply(Za,r):void("function"==typeof t?t.apply(Vi,r):je("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd"+e[0]))}function jt(t,n){function i(){return!a.plugin_is_init&&a.init(Vi,n),a.plugin_is_init=!0,Vi.modules=Vi.modules||{},Vi.modules[a.plugin_name||"unnamed_"+Qa++]=a,a}if(!p(t)&&!r(t))return void Ne("use's first arguments must be string or object.");var a;if(r(t)){var o=Vi.modules&&Vi.modules[t.plugin_name];o&&o!==t&&je(t.name+" is conflict with builtin plugin, and sdk uses builtin plugin."),a=o||t}return p(t)&&(r(Vi.modules)&&r(Vi.modules[t])?a=Vi.modules[t]:r(window.SensorsDataWebJSSDKPlugin)&&r(window.SensorsDataWebJSSDKPlugin[t])?a=window.SensorsDataWebJSSDKPlugin[t]:window.sensorsDataAnalytic201505&&window.sensorsDataAnalytic201505.modules[t]&&(a=window.sensorsDataAnalytic201505.modules[t])),a&&e(a.init)?a.plugin_is_init?a:(a.plugin_name||je("warning: invalid plugin, plugin_name required."),a.plugin_version?a.plugin_version!==Vi.lib_version&&je("warning: plugin version not match SDK version. plugin may not work correctly. "):je("warning: invalid plugin, plugin version required."),i()):(je((t.plugin_name||t)+" is not found or it's not a standard plugin. Please check sensorsdata official documents."),a)}function Nt(e,t,r){rt({event:e,properties:t})&&Va.send({type:"track",event:e,properties:t},r)}function Tt(e,t){return!!rt({bindKey:e,bindValue:t})&&(xa._state.identities[e]=t,xa.save(),void Va.send({type:"track_id_bind",event:"$BindID",properties:{}}))}function It(e,t){var r=kt(e,t);r&&Va.send({identities:r,type:"track_id_unbind",event:"$UnbindID",properties:{}})}function At(e,t,r){"object"==typeof e&&e.tagName?_t({ele:e},t,r,Vi.track):"object"==typeof e&&e.target&&e.event&&_t(e,t,r,Vi.track)}function Dt(e,t,r){return r=r||{},!(!e||"object"!=typeof e)&&!(!e.href||/^javascript/.test(e.href)||e.target)&&void He(e,"click",function(n){function i(){a||(a=!0,location.href=e.href)}n.preventDefault();var a=!1;setTimeout(i,1e3),Vi.track(t,r,i)})}function $t(e,t,r){rt({item_type:e,item_id:t,properties:r})&&Va.sendItem({type:"item_set",item_type:e,item_id:t,properties:r||{}})}function xt(e,t){rt({item_type:e,item_id:t})&&Va.sendItem({type:"item_delete",item_type:e,item_id:t})}function Et(e,t){rt({propertiesMust:e})&&Va.send({type:"profile_set",properties:e},t)}function Lt(e,t){rt({propertiesMust:e})&&Va.send({type:"profile_set_once",properties:e},t)}function Ut(e,t){rt({propertiesMust:e})&&(k(e,function(t,r){p(t)?e[r]=[t]:v(t)?e[r]=t:(delete e[r],je("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))}),oe(e)||Va.send({type:"profile_append",properties:e},t))}function Rt(e,t){function r(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&!/-*\d+/.test(String(e[t])))return!1;return!0}var n=e;p(e)&&(e={},e[n]=1),rt({propertiesMust:e})&&(r(e)?Va.send({type:"profile_increment",properties:e},t):Ne("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57"))}function Ht(e){Va.send({type:"profile_delete"},e),xa.set("distinct_id",Gi()),xa.set("first_id","")}function Bt(e,t){var r=e,n={};p(e)&&(e=[],e.push(r)),v(e)?(k(e,function(e){p(e)?n[e]=!0:je("profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389",e)}),Va.send({type:"profile_unset",properties:n},t)):Ne("profile_unset\u7684\u53c2\u6570\u5fc5\u987b\u662f\u6570\u7ec4")}function Jt(e,t){"number"==typeof e&&(e=String(e));var r=xa.getFirstId();if("undefined"==typeof e){var n=Gi();r?xa.set("first_id",n):xa.set("distinct_id",n)}else rt({distinct_id:e})&&(t===!0?r?xa.set("first_id",e):xa.set("distinct_id",e):r?xa.change("first_id",e):xa.change("distinct_id",e))}function Mt(e){var t=xa.getFirstId();if(t)return Ne("resetAnonymousIdentity must be used in a logout state \uff01"),!1;if("number"==typeof e&&(e=String(e)),"undefined"==typeof e){var r=Gi();xa._state.identities.$identity_cookie_id=r,xa.set("distinct_id",r)}else rt({distinct_id:e})&&(xa._state.identities.$identity_cookie_id=e,xa.set("distinct_id",e))}function qt(e,t,r,n){var i=xa.getFirstId()||xa.getDistinctId();xa.set("distinct_id",e),Va.send({original_id:i,distinct_id:xa.getDistinctId(),type:"track_signup",event:t,properties:r},n)}function Kt(e,t,r,n){"number"==typeof e&&(e=String(e)),rt({distinct_id:e,event:t,properties:r})&&qt(e,t,r,n)}function Ft(e){rt({properties:e})?P(wa.currentProps,e):Ne("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")}function Vt(e){xa.clearAllProps(e)}function Wt(e){var t;if(v(e)&&e.length>0)for(t=0;t<e.length;t++)p(e[t])&&e[t]in wa.currentProps&&delete wa.currentProps[e[t]];else if(e===!0)for(t in wa.currentProps)delete wa.currentProps[t]}function zt(e){rt({properties:e})?xa.setProps(e):Ne("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")}function Xt(e){rt({properties:e})?xa.setPropsOnce(e):Ne("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")}function Zt(e){Vi.log("registerSession \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u6709\u95ee\u9898\u8054\u7cfb\u6280\u672f\u987e\u95ee"),rt({properties:e})?xa.setSessionProps(e):Ne("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")}function Gt(e){Vi.log("registerSessionOnce \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u6709\u95ee\u9898\u8054\u7cfb\u6280\u672f\u987e\u95ee"),rt({properties:e})?xa.setSessionPropsOnce(e):Ne("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")}function Qt(t,r){"number"==typeof t&&(t=String(t));var n=wt({id:t,callback:r,name:ma.LOGIN},qt);!n&&e(r)&&r()}function Yt(e,t){return"number"==typeof t&&(t=String(t)),"number"==typeof e&&(e=String(e)),!!rt({loginIdKey:e})&&(ma.LOGIN===e?(Qt(t),!1):void wt({id:t,callback:null,name:e},qt))}function er(e){var t=xa.getFirstId();if(t)if(xa.set("first_id",""),e===!0){var r=Gi();xa.set("distinct_id",r)}else xa.set("distinct_id",t);St({$identity_cookie_id:xa._state.identities.$identity_cookie_id}),xa.set("history_login_id",{name:"",value:""})}function tr(){function e(){var e=wa.campaignParams(),t={};return k(e,function(e,r,n){(" "+Vi.source_channel_standard+" ").indexOf(" "+r+" ")!==-1?t["$"+r]=n[r]:t[r]=n[r]}),t}var t={$is_first_day:Re(),$is_first_time:ka.is_page_first_visited,$referrer:wa.pageProp.referrer||"",$referrer_host:wa.pageProp.referrer?q(wa.pageProp.referrer):"",$url:Z(),$url_path:G(),$title:document.title||"",_distinct_id:xa.getDistinctId(),identities:JSON.parse(JSON.stringify(xa._state.identities))},r=P({},wa.properties(),xa.getProps(),e(),t);return Vi.para.preset_properties.latest_referrer&&Vi.para.preset_properties.latest_referrer_host&&(r.$latest_referrer_host=""===r.$latest_referrer?"":q(r.$latest_referrer)),r}function rr(){var e="",t=" { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";Vi.heatmap&&v(Vi.heatmap.otherTags)&&k(Vi.heatmap.otherTags,function(r){e+=r+t}),le()&&K()&&K()<13&&(Vi.para.heatmap&&Vi.para.heatmap.collect_tags&&Vi.para.heatmap.collect_tags.div&&be("div, [data-sensors-click]"+t),Vi.para.heatmap&&Vi.para.heatmap.track_attr&&be("["+Vi.para.heatmap.track_attr.join("], [")+"]"+t),""!==e&&be(e))}function nr(e){var t=this;this.type=e,this.resultCbs={},this.timeoutCbs={},this.timerId=null,this.appCallJsCallback=null,window.sensorsdata_app_call_js||(window.sensorsdata_app_call_js=function(e,t){if(e in window.sensorsdata_app_call_js.modules)return window.sensorsdata_app_call_js.modules[e](t)}),window.sensorsdata_app_call_js.modules=window.sensorsdata_app_call_js.modules||{},window.sensorsdata_app_call_js.modules[this.type]=function(e){try{var r=j(e)||e;try{r=JSON.parse(r)}catch(n){}var i=r&&r.message_id;if(i&&t.resultCbs[i]){if(e=r,t.timeoutCbs[i]&&t.timeoutCbs[i].isTimeout)return void(t.resultCbs[i].callbacks.length=0);if(t.resultCbs[i]){t.resultCbs[i].result=e,clearTimeout(t.timerId),t.timeoutCbs[i].callbacks.length=0;for(var a in t.resultCbs[i].callbacks)t.resultCbs[i].callbacks[a].call(null,e),t.resultCbs[i].callbacks.splice(a,1)}return}return t.appCallJsCallback&&t.appCallJsCallback.call(null,e)}catch(o){Ne("app \u56de\u8c03 js \u5f02\u5e38",e)}}}function ir(t){try{if(Vi.bridge.activeBridge&&e(Vi.bridge.activeBridge.handleCommand))return Vi.bridge.activeBridge.handleCommand(t)}catch(r){Ne("Error: handle command exception:"+r)}return Ne("\u6570\u636e\u53d1\u5f80App\u5931\u8d25\uff0cApp\u6ca1\u6709\u66b4\u9732bridge,type:"+t.callType),!1}function ar(e){function t(e){var t={hostname:"",project:""};try{e=g(e),t.hostname=e.hostname,t.project=e.searchParams.get("project")||"default"}catch(r){Ne("validateAppUrl:"+r)}return t}var r=t(e),n=t(Vi.para.server_url);if(r.hostname===n.hostname&&r.project===n.project)return!0;if(v(Vi.para.app_js_bridge.white_list))for(var i=0;i<Vi.para.app_js_bridge.white_list.length;i++){var a=t(Vi.para.app_js_bridge.white_list[i]);if(a.hostname===r.hostname&&a.project===r.project)return!0}return!1}function or(e){this.bridge=new nr(e.type)}function sr(){var e=wa.pageProp.url_domain,t={};""===e&&(e="url\u89e3\u6790\u5931\u8d25");var n=Ee(document.referrer,!0);if(da.preset_properties.search_keyword_baidu?xe(document.referrer)&&(!Ie()||r(n)&&n.active?xa._state&&xa._state.props&&(xa._state.props.$search_keyword_id&&delete xa._state.props.$search_keyword_id,xa._state.props.$search_keyword_id_type&&delete xa._state.props.$search_keyword_id_type,xa._state.props.$search_keyword_id_hash&&delete xa._state.props.$search_keyword_id_hash):(t.$search_keyword_id=ya.id(),t.$search_keyword_id_type=ya.type(),t.$search_keyword_id_hash=te(t.$search_keyword_id))):xa._state&&xa._state.props&&(xa._state.props.$search_keyword_id&&delete xa._state.props.$search_keyword_id,xa._state.props.$search_keyword_id_type&&delete xa._state.props.$search_keyword_id_type,xa._state.props.$search_keyword_id_hash&&delete xa._state.props.$search_keyword_id_hash),xa.save(),k(da.preset_properties,function(n,i){if(i.indexOf("latest_")===-1)return!1;if(i=i.slice(7),n){if("wx_ad_click_id"===i&&"not_collect"===n)return!1;if("utm"!==i&&"url\u89e3\u6790\u5931\u8d25"===e)"wx_ad_click_id"===i?(t._latest_wx_ad_click_id="url\u7684domain\u89e3\u6790\u5931\u8d25",t._latest_wx_ad_hash_key="url\u7684domain\u89e3\u6790\u5931\u8d25",t._latest_wx_ad_callbacks="url\u7684domain\u89e3\u6790\u5931\u8d25"):t["$latest_"+i]="url\u7684domain\u89e3\u6790\u5931\u8d25";else if(xe(document.referrer))switch(i){case"traffic_source_type":t.$latest_traffic_source_type=Be();break;case"referrer":t.$latest_referrer=wa.pageProp.referrer;break;case"search_keyword":Ee()?t.$latest_search_keyword=Ee():r(xa._state)&&r(xa._state.props)&&xa._state.props.$latest_search_keyword&&delete xa._state.props.$latest_search_keyword;break;case"landing_page":t.$latest_landing_page=Z();break;case"wx_ad_click_id":var a=Je(location.href);t._latest_wx_ad_click_id=a.click_id,t._latest_wx_ad_hash_key=a.hash_key,t._latest_wx_ad_callbacks=a.callbacks}}else if("utm"===i&&xa._state&&xa._state.props)for(var o in xa._state.props)(0===o.indexOf("$latest_utm")||0===o.indexOf("_latest_")&&o.indexOf("_latest_wx_ad_")<0)&&delete xa._state.props[o];else if(xa._state&&xa._state.props&&"$latest_"+i in xa._state.props)delete xa._state.props["$latest_"+i];else if("wx_ad_click_id"==i&&xa._state&&xa._state.props&&n===!1){var s=["_latest_wx_ad_click_id","_latest_wx_ad_hash_key","_latest_wx_ad_callbacks"];k(s,function(e){e in xa._state.props&&delete xa._state.props[e]})}}),da.preset_properties.latest_utm){var i=wa.campaignParamsStandard("$latest_","_latest_"),a=i.$utms,o=i.otherUtms;oe(a)||P(t,a),oe(o)||P(t,o)}zt(t)}function lr(e){var t=null;try{var r=JSON.parse(window.name);t=r[e]?u(r[e]):null}catch(n){t=null}return null===t&&(t=V(location.href,e)||null),t}function ur(e){function t(){var e=[];n.touch_app_bridge||e.push(ba.defineMode("1")),r(Vi.para.app_js_bridge)||(e.push(ba.defineMode("2")),n.verify_success=!1),r(Vi.para.heatmap)&&"default"==Vi.para.heatmap.clickmap||e.push(ba.defineMode("3")),"fail"===n.verify_success&&e.push(ba.defineMode("4")),new Vi.SDKJSBridge("app_alert").notifyApp({data:e})}var n=Vi.bridge.bridge_info;if(Vi.bridge.hasVisualModeBridge())if(r(Vi.para.heatmap)&&"default"==Vi.para.heatmap.clickmap)if(r(Vi.para.app_js_bridge)&&"success"===n.verify_success)if(e)window.sa_jssdk_app_define_mode(Vi,e);else{var i=location.protocol,a=["http:","https:"];i=re(a,i)>-1?i:"https:",_e({success:function(){setTimeout(function(){"undefined"!=typeof sa_jssdk_app_define_mode&&window.sa_jssdk_app_define_mode(Vi,e)},0)},error:function(){},type:"js",url:i+"//static.sensorsdata.cn/sdk/"+Vi.lib_version+"/vapph5define.min.js"})}else t();else t()}function cr(t){Vi.para.is_track_single_page&&Oa.on("switch",function(n){var i=function(r){if(r=r||{},n!==location.href){wa.pageProp.referrer=Z(n);var i=P({$url:Z(),$referrer:Z(n)},r);e(t)?t(i):Vi.quick&&Vi.quick("autoTrack",i)}};if("boolean"==typeof Vi.para.is_track_single_page)i();else if("function"==typeof Vi.para.is_track_single_page){var a=Vi.para.is_track_single_page();r(a)?i(a):a===!0&&i()}})}function pr(){Vi._q&&v(Vi._q)&&Vi._q.length>0&&k(Vi._q,function(e){Vi[e[0]].apply(Vi,Array.prototype.slice.call(e[1]))}),r(Vi.para.heatmap)&&(Xa.initHeatmap(),Xa.initScrollmap())}function dr(){Vi.readyState.setState(3),new Vi.SDKJSBridge("visualized").onAppNotify(function(){ur("undefined"!=typeof sa_jssdk_app_define_mode)}),ur(!1),Vi.bridge.app_js_bridge_v1(),wa.initPage(),cr(),xa.init(),sr(),gr(),Vi.readyState.setState(4),pr()}function fr(){ro.isSeachHasKeyword()?ro.hasKeywordHandle():window.parent!==self&&no.isSearchHasKeyword()?no.verifyVtrackMode():ro.isWindowNameHasKeyword()?ro.windowNameHasKeywordHandle():ro.isStorageHasKeyword()?ro.storageHasKeywordHandle():window.parent!==self&&no.isStorageHasKeyword()?no.verifyVtrackMode():(dr(),no.notifyUser())}function gr(){qa.init(),"success"===Vi.bridge.bridge_info.verify_success&&Ba.init()}function _r(){k(io,function(t){var r=Vi[t];Vi[t]=function(){return Vi.readyState.state<3?(v(Vi._q)||(Vi._q=[]),je("calling sdk api before init is deprecated."),Vi._q.push([t,arguments]),!1):e(Vi.getDisabled)&&Vi.getDisabled()?void 0:Vi.readyState.getState()?r.apply(Vi,arguments):void Ne("\u8bf7\u5148\u521d\u59cb\u5316\u795e\u7b56JS SDK")}})}function hr(e,t){this.cancel=function(){e=!0},this.getCanceled=function(){return e||!1},this.stop=function(){t=!0},this.getStopped=function(){return t||!1}}function mr(e,t,r){var n=null;try{n=JSON.parse(JSON.stringify(e||null))}catch(i){}this.getOriginalData=function(){return n},this.getPosition=function(){return t},this.cancellationToken=new hr,this.sensors=r}function vr(e){if(!r(e))throw"error: Stage constructor requires arguments.";this.processDef=e,this.registeredInterceptors={}}function yr(e){e&&e.buildDataStage&&so.registerStageImplementation(e.buildDataStage),e&&e.businessStage&&po.registerStageImplementation(e.businessStage),e&&e.sendDataStage&&uo.registerStageImplementation(e.sendDataStage),e&&e.viewStage&&go.registerStageImplementation(e.viewStage)}function br(e,t){_o[e]&&_o[e](t)}function wr(){return ho.stage&&ho.stage.process("getUtmData")}function Sr(e){return mo.stage.process("send",e)}function kr(e){e.kit=vo,e.saEvent=Va,this.buildDataStage=Fa,this.sendDataStage=mo,this.businessStage=ho}function Pr(e){e.heatmap=Xa,this.viewStage=Wa}function Cr(t){if(!e(t.properties))return void Ne("registerPropertyPlugin arguments error, properties must be function");if(t.isMatchedWithFilter&&!e(t.isMatchedWithFilter))return void Ne("registerPropertyPlugin arguments error, isMatchedWithFilter must be function");var r={finalAdjustData:{priority:100,entry:function(r){try{if(e(t.isMatchedWithFilter))return t.isMatchedWithFilter(r)&&t.properties(r);t.properties(r)}catch(n){Ne("execute registerPropertyPlugin callback error:"+n)}}}};br("buildDataStage",r)}function Or(e){e&&(Vi.events=$a,Vi.bridge=to,Vi.SDKJSBridge=nr,Vi.JSBridge=or,Vi.store=xa,Vi.unlimitedDiv=Ja,Vi.customProp=Ma,Vi.vtrackcollect=qa,Vi.vapph5collect=Ba,Vi.detectMode=fr,Vi.registerFeature=yr,Vi.registerInterceptor=br,Vi.commonWays=Za,yr(new kr(Vi)),yr(new Pr(Vi)),br("viewStage",yo));var t=e?Ya:ao;for(var r in t)Vi[r]=t[r];Vi.logger=pa,Vi.log=Oe,Vi._=eo,Vi.on=et,Vi.ee=Ca,Vi.use=jt,Vi.lib_version=_a,Vi.registerPropertyPlugin=Cr}function jr(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Nr(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Nr(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Tr(e,t,r){return jr(e,t,r),e.plugin_version=Bo,e}function Ir(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Ar(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Ar(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Dr(e,t,r){return Ir(e,t,r),e.plugin_version=qo,e}function $r(e){return zo&&zo.call(Vo,JSON.stringify(e))}function xr(e){return Wo.call(Vo)&&Xo&&Xo.call(Vo,JSON.stringify(e))}function Er(e,t){return t&&"function"==typeof t[e.callType]&&t[e.callType]()}function Lr(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Ur(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Ur(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Rr(e,t,r){return Lr(e,t,r),e.plugin_version=Go,e}function Hr(){if(So=window.SensorsData_APP_New_H5_Bridge,ko=So&&So.sensorsdata_track,Po=ko&&So.sensorsdata_get_server_url&&So.sensorsdata_get_server_url(),Co&&!Co.bridge.activeBridge&&Po){if(Co.bridge.activeBridge=Qo,Co.para.app_js_bridge&&!Co.para.app_js_bridge.is_mui&&(Co.bridge.is_verify_success=Po&&Co.bridge.validateAppUrl(Po)),Co.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:Co.bridge.is_verify_success?"success":"fail",support_two_way_call:!!So.sensorsdata_js_call_app},!Co.para.app_js_bridge)return void jo("app_js_bridge is not configured, data will not be sent by android bridge.");Co.registerInterceptor("sendDataStage",{send:{priority:60,entry:Br}}),jo("Android bridge inits succeed.")}}function Br(e,t){if(Co.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;return Co.bridge.is_verify_success?(ko&&ko.call(So,JSON.stringify(Oo.extend({server_url:Co.para.server_url},e.data))),Oo.isFunction(r)&&r(),t.cancellationToken.cancel(),e):Co.para.app_js_bridge.is_send?(Co.debug.apph5({data:e.data,step:"4.2",output:"all"}),e):(Oo.isFunction(r)&&r(),t.cancellationToken.cancel(),e)}function Jr(e){var t=e.callType;return t in Zo.commands?Zo.commands[t](e,So):void(So&&Oo.isFunction(So.sensorsdata_js_call_app)&&So.sensorsdata_js_call_app(JSON.stringify(e)))}function Mr(e){return rs&&rs.call(es,JSON.stringify(e))}function qr(e){return ts.call(es)&&ns&&ns.call(es,JSON.stringify(e))}function Kr(e,t){return t&&"function"==typeof t[e.callType]&&t[e.callType]()}function Fr(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Vr(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Vr(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Wr(e,t,r){return Fr(e,t,r),e.plugin_version=as,e}function zr(){if(No=window.SensorsData_APP_JS_Bridge,To=No&&No.sensorsdata_track,Io=No&&No.sensorsdata_verify,Ao=No&&No.sensorsdata_visual_verify,Do&&!Do.bridge.activeBridge&&(Io||To||Ao)){Do.bridge.activeBridge=os;var e=Io||To;if(Ao&&(e=!!Ao.call(No,JSON.stringify({server_url:Do.para.server_url}))),Do.bridge.bridge_info={touch_app_bridge:!0,platform:"android",verify_success:e?"success":"fail"},!Do.para.app_js_bridge)return void xo("app_js_bridge is not configured, data will not be sent by android obsolete bridge.");Do.registerInterceptor("sendDataStage",{send:{priority:80,entry:Xr}}),xo("Android obsolete bridge inits succeed.")}}function Xr(e,t){if(Do.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;if(Io){var n=Io&&Io.call(No,JSON.stringify($o.extend({server_url:Do.para.server_url},e.data)));return n?($o.isFunction(r)&&r(),t.cancellationToken.cancel(),e):Do.para.app_js_bridge.is_send?(Do.debug.apph5({data:e.data,step:"3.1",output:"all"}),e):($o.isFunction(r)&&r(),t.cancellationToken.cancel(),e)}return To&&To.call(No,JSON.stringify($o.extend({server_url:Do.para.server_url},e.data))),$o.isFunction(r)&&r(),t.cancellationToken.cancel(),e}function Zr(e){var t=e.callType;return t in is.commands?is.commands[t](e,No):No&&$o.isFunction(No.sensorsdata_js_call_app)?No.sensorsdata_js_call_app(JSON.stringify(e)):void 0}function Gr(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Qr(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Qr(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Yr(e,t,r){return Gr(e,t,r),e.plugin_version=ls,e}function en(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return tn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function tn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function rn(e,t,r){return en(e,t,r),e.plugin_version=ps,e}function nn(){return"undefined"!=typeof Ho&&document[Ho]}function an(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return on(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function on(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function sn(e,t,r){return an(e,t,r),e.plugin_version=Ds,e}function ln(){if(fs=window.SensorsData_iOS_JS_Bridge&&window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url,gs=function(){return window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.sensorsdataNativeTracker},_s&&!_s.bridge.activeBridge&&gs()&&gs().postMessage){if(_s.bridge.activeBridge=$s,_s.para.app_js_bridge&&!_s.para.app_js_bridge.is_mui&&(_s.bridge.is_verify_success=fs&&_s.bridge.validateAppUrl(fs)),_s.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:_s.bridge.is_verify_success?"success":"fail",support_two_way_call:!0},!_s.para.app_js_bridge)return void ms("app_js_bridge is not configured, data will not be sent by iOS bridge.");_s.registerInterceptor("sendDataStage",{send:{priority:70,entry:un}}),ms("IOS bridge inits succeed.")}}function un(e,t){if(_s.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var r=e.callback;return _s.bridge.is_verify_success?(gs()&&gs().postMessage(JSON.stringify({callType:"app_h5_track",data:hs.extend({server_url:_s.para.server_url},e.data)})),hs.isFunction(r)&&r(),t.cancellationToken.cancel(),e):_s.para.app_js_bridge.is_send?(_s.debug.apph5({data:e.data,step:"4.1",output:"all"}),e):(hs.isFunction(r)&&r(),t.cancellationToken.cancel(),e)}function cn(e){var t=e.callType;return"page_info"!==t&&"visualized_track"!==t||_s.bridge.hasVisualModeBridge()?"sensorsdata_get_app_visual_config"===t?hs.isObject(window.SensorsData_APP_New_H5_Bridge)&&window.SensorsData_APP_New_H5_Bridge[t]:gs()&&gs().postMessage(JSON.stringify(e)):null}function pn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return dn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function dn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function fn(e,t,r){return pn(e,t,r),e.plugin_version=Es,e}function gn(){if(vs&&!vs.bridge.activeBridge&&_n()){if(vs.bridge.activeBridge=Ls,vs.bridge.bridge_info={touch_app_bridge:!0,platform:"ios",verify_success:hn()?"success":"fail"},!vs.para.app_js_bridge)return void bs("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge.");vs.registerInterceptor("sendDataStage",{send:{priority:90,entry:mn}}),bs("IOS obsolete bridge inits succeed.")}}function _n(){return(/sensors-verify/.test(navigator.userAgent)||/sa-sdk-ios/.test(navigator.userAgent))&&!window.MSStream}function hn(){if(/sensors-verify/.test(navigator.userAgent)){var e=navigator.userAgent.match(/sensors-verify\/([^\s]+)/);if(e&&e[0]&&"string"==typeof e[1]&&2===e[1].split("?").length){e=e[1].split("?");var t=null,r=null;try{t=ys.URL(vs.para.server_url).hostname,r=ys.URL(vs.para.server_url).searchParams.get("project")||"default"}catch(n){vs.log(n)}return!(!t||t!==e[0]||!r||r!==e[1])}return!1}return!!/sa-sdk-ios/.test(navigator.userAgent)}function mn(e,t){function r(e){var t=JSON.stringify(ys.extend({server_url:vs.para.server_url},e));return t=t.replace(/\r\n/g,""),t=encodeURIComponent(t),"sensorsanalytics://trackEvent?event="+t}if(vs.para.app_js_bridge.is_mui||"item_set"===e.data.type||"item_delete"===e.data.type)return e;var n=e.callback;if(vs.bridge.bridge_info.verify_success){var i=document.createElement("iframe"),a=r(e.data);return i.setAttribute("src",a),document.documentElement.appendChild(i),i.parentNode.removeChild(i),i=null,ys.isFunction(n)&&n(),t.cancellationToken.cancel(),!0}return vs.para.app_js_bridge.is_send?(vs.debug.apph5({data:e.data,step:"3.2",output:"all"}),e):(ys.isFunction(n)&&n(),t.cancellationToken.cancel(),e)}function vn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return yn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function yn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function bn(e,t,r){return vn(e,t,r),e.plugin_version=Rs,e}function wn(){this.sd=null,this.start_time=+new Date,this.page_show_status=!0,this.page_hidden_status=!1,this._={},this.timer=null,this.current_page_url=document.referrer,this.url=location.href,this.title=document.title||"",this.option={},this.heartbeat_interval_time=5e3,this.heartbeat_interval_timer=null,this.page_id=null,this.storage_name="sawebjssdkpageleave",this.max_duration=Bs}function Sn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return kn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function kn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Pn(e,t,r){return Sn(e,t,r),e.plugin_version=qs,e}function Cn(e,t){if("track"!==e.type)return e;var r=t.sd,n=r._,i=r.saEvent.check,a=n.extend2Lev({properties:{}},e),o=t.customRegister,s=a.properties,l=a.event,u={};return n.each(o,function(e){if(n.isObject(e))n.indexOf(e.events,l)>-1&&i({properties:e.properties})&&(u=n.extend(u,e.properties));else if(n.isFunction(e)){var t=e({event:l,properties:s,data:a});n.isObject(t)&&!n.isEmptyObject(t)&&i({
properties:t})&&(u=n.extend(u,t))}}),e.properties=n.extend(s,u),e}function On(){this.sd=null,this.log=window.console&&window.console.log||function(){},this.customRegister=[]}function jn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Nn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Nn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Tn(e,t,r){return jn(e,t,r),e.plugin_version=Ws,e}function In(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return An(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function An(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Dn(e,t,r){return In(e,t,r),e.plugin_version=Qs,e}function $n(e){try{if("$pageview"!==e.event&&(!e.type||"profile"!==e.type.slice(0,7))){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,r=document.documentElement.scrollHeight||0,n={$page_height:Math.max(t,r)||0};e.properties=zs._.extend(e.properties||{},n)}}catch(i){Ys("\u9875\u9762\u9ad8\u5ea6\u83b7\u53d6\u5f02\u5e38\u3002")}return Xs.call(zs.kit,e)}function xn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return En(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function En(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Ln(e,t,r){return xn(e,t,r),e.plugin_version=rl,e}function Un(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Rn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Rn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Hn(e,t,r){return Un(e,t,r),e.plugin_version=yl,e}function Bn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Jn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Jn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Mn(e,t,r){return Bn(e,t,r),e.plugin_version=Sl,e}function qn(){kl=!0}function Kn(){kl=!1}function Fn(){return kl}function Vn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Wn(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Wn(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function zn(e,t,r){return Vn(e,t,r),e.plugin_version=jl,e}function Xn(e){var t=e,r="";r=al.para.debug_mode_url.indexOf("?")!==-1?al.para.debug_mode_url+"&"+al.kit.encodeTrackData(e):al.para.debug_mode_url+"?"+al.kit.encodeTrackData(e),ol.ajax({url:r,type:"GET",cors:!0,header:{"Dry-Run":String(al.para.debug_mode_upload)},success:function(e){ol.isEmptyObject(e)===!0?alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f"+t):alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0"+JSON.stringify(e))}})}function Zn(e,t){if(al.para.debug_mode===!0){var r=e.data;e.callback,Xn(JSON.stringify(r)),t.cancellationToken.stop()}return e}function Gn(){al.para.debug_mode===!0&&(al.para.debug_mode_upload=al.para.debug_mode_upload||!1,ol.isString(al.para.debug_mode_url)||(ol.isString(al.para.server_url)?al.para.debug_mode_url=al.para.server_url.replace("sa.gif","debug"):ol.isArray(al.para.server_url)&&ol.isString(al.para.server_url[0])?al.para.debug_mode_url=al.para.server_url[0].replace("sa.gif","debug"):al.para.debug_mode=!1))}function Qn(){al.on("sdkInitPara",function(){Gn()}),al.on("sdkAfterInitPara",function(){al.registerInterceptor("sendDataStage",{send:{priority:30,entry:Zn}})})}function Yn(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return ei(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function ei(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function ti(e,t,r){return Yn(e,t,r),e.plugin_version=Il,e}function ri(e,t){if(ll.isObject(sl.para.jsapp)&&!sl.para.jsapp.isOnline&&"function"==typeof sl.para.jsapp.setData){var r=e;delete r.callback,r=JSON.stringify(r),sl.para.jsapp.setData(r),t.cancellationToken.stop()}return e}function ni(){sl.on("sdkAfterInitAPI",function(){ll.isObject(sl.commonWays)&&(sl.commonWays.setOnlineState=ii),sl.registerInterceptor("sendDataStage",{send:{priority:40,entry:ri}})})}function ii(e){if(e===!0&&ll.isObject(sl.para.jsapp)&&"function"==typeof sl.para.jsapp.getData){sl.para.jsapp.isOnline=!0;var t=sl.para.jsapp.getData();ll.isArray(t)&&t.length>0&&ll.each(t,function(e){ll.isJSONString(e)&&sl.kit.sendData(JSON.parse(e))})}else sl.para.jsapp.isOnline=!1}function ai(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return oi(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function oi(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function si(e,t,r){return ai(e,t,r),e.plugin_version=$l,e}function li(e,t){return!ul.para.app_js_bridge&&ul.para.batch_send&&cl.localStorage.isSupport()&&localStorage.length<ul.para.batch_send.storage_length&&(xl.add(e.data),t.cancellationToken.stop()),e}function ui(){var e={datasend_timeout:6e3,send_interval:6e3,storage_length:200};cl.localStorage.isSupport()&&cl.isSupportCors()&&"object"==typeof localStorage?ul.para.batch_send===!0?ul.para.batch_send=cl.extend({},e):"object"==typeof ul.para.batch_send&&(ul.para.batch_send=cl.extend({},e,ul.para.batch_send)):ul.para.batch_send=!1}function ci(){ul.on("sdkInitPara",function(){ui()}),ul.on("sdkAfterInitPara",function(){!ul.para.app_js_bridge&&ul.para.batch_send&&cl.localStorage.isSupport()&&(xl||(xl=new cl.BatchSend),xl.batchInterval(),ul.registerInterceptor("sendDataStage",{send:{priority:100,entry:li}}))})}function pi(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return di(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function di(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function fi(e,t,r){return pi(e,t,r),e.plugin_version=Ul,e}function gi(e){var t=new dl.BeaconSend(e);t.start()}function _i(e,t){var r=null,n=null;dl.isObject(e.config)&&(r=e.config.send_type,n=dl.optimizeServerUrl(e.config.server_url));var i="beacon"===r||!r&&"beacon"===pl.para.send_type;if(i&&dl.isSupportBeaconSend()){var a=n||e.server_url;e.server_url=a,e.data=pl.kit.encodeTrackData(e.data),dl.isArray(a)&&a.length?dl.each(a,function(t){e.callback=null,e.server_url=t,gi(e)}):"string"==typeof a&&""!==a?gi(e):pl.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),t.cancellationToken.stop()}return e}function hi(){"beacon"!==pl.para.send_type||dl.isSupportBeaconSend()||(pl.para.send_type="image")}function mi(){pl.on("sdkInitPara",function(){hi()}),pl.on("sdkAfterInitPara",function(){pl.registerInterceptor("sendDataStage",{send:{priority:110,entry:_i}})})}function vi(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return yi(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function yi(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function bi(e,t,r){return vi(e,t,r),e.plugin_version=Bl,e}function wi(e){var t=new gl.AjaxSend(e);t.start()}function Si(e,t){var r=null,n=null;gl.isObject(e.config)&&(r=e.config.send_type,n=gl.optimizeServerUrl(e.config.server_url));var i="ajax"===r||!r&&"ajax"===fl.para.send_type;if(i&&gl.isSupportCors()){var a=n||e.server_url;e.server_url=a,e.data=fl.kit.encodeTrackData(e.data),gl.isArray(a)&&a.length?gl.each(a,function(t){e.callback=null,e.server_url=t,wi(e)}):"string"==typeof a&&""!==a?wi(e):fl.log("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01"),t.cancellationToken.stop()}return e}function ki(){"ajax"!==fl.para.send_type||gl.isSupportCors()||(fl.para.send_type="image")}function Pi(){fl.on("sdkInitPara",function(){ki()}),fl.on("sdkAfterInitPara",function(){fl.registerInterceptor("sendDataStage",{send:{priority:120,entry:Si}})})}function Ci(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return Oi(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function Oi(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function ji(e,t,r){return Ci(e,t,r),e.plugin_version=ql,e}function Ni(e,t){var r=_l.kit.encodeTrackData(t);return e.indexOf("?")!==-1?e+"&"+r:e+"?"+r}function Ti(e){var t=new hl.ImageSend(e);t.start()}function Ii(e,t){var r=null;hl.isObject(e.config)&&(r=hl.optimizeServerUrl(e.config.server_url));var n=r||e.server_url,i=e.data;e.server_url=n,hl.isArray(n)&&n.length?hl.each(n,function(t){t&&(e.data=Ni(t,i),e.callback=null,e.server_url=t,Ti(e))}):"string"==typeof n&&""!==n?(e.data=Ni(n,i),Ti(e)):_l.logger&&_l.logger.msg("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01").level("warn").log(),t.cancellationToken.stop()}function Ai(){"image"!==_l.para.send_type&&"ajax"!==_l.para.send_type&&"beacon"!==_l.para.send_type&&(_l.para.send_type="image")}function Di(){_l.on("sdkInitPara",function(){Ai()}),_l.on("sdkAfterInitPara",function(){_l.registerInterceptor("sendDataStage",{send:{priority:130,entry:Ii}})})}function $i(e,t,r){if(t&&(e.plugin_name=t),r&&e.init){var n=e.init;e.init=function(i,a){function o(){n.call(e,i,a)}return xi(i,e,t),i.readyState&&i.readyState.state>=3||!i.on?o():void i.on(r,o)}}return e}function xi(e,t,r){function n(t,n){e.logger?e.logger.msg.apply(e.logger,n).module(r+""||"").level(t).log():e.log&&e.log.apply(e,n)}t.log=function(){n("log",arguments)},t.warn=function(){n("warn",arguments)},t.error=function(){n("error",arguments)}}function Ei(e,t,r){return $i(e,t,r),e.plugin_version=_a,e}function Li(e){return null===zl?void Ui(e):void zl.push(e)}function Ui(e){try{if("log"===e.level&&Ri())return void Ji(e);if("warn"===e.level&&Hi())return void Ji(e);if("error"===e.level&&Bi())return void Ji(e)}catch(t){}}function Ri(){return!!Fi()||Vl.para.show_log===!0||Wl.isObject(Vl.para.show_log)&&"log"===Vl.para.show_log.level}function Hi(){return!!Fi()||Ri()||Wl.isObject(Vl.para.show_log)&&"warn"===Vl.para.show_log.level}function Bi(){return!!Fi()||!Wl.isObject(Vl.para.show_log)||"none"!==Vl.para.show_log.level}function Ji(e){var t=e.content,r=Wl.isObject(t[0])?Wl.formatJsonString(t[0]):t[0],n=Mi(e);t[0]=n+(n.length>0?": ":"")+r;try{console&&(Wl.isFunction(console[e.level])?console[e.level].apply(console,t):Wl.isObject(console[e.level])&&console[e.level](t[0]))}catch(i){}}function Mi(e){var t="",r="",n=Vl.para.show_log;return Wl.isObject(n)&&n.show_brand===!1||(t+=e.brand),Wl.isObject(n)&&n.show_level===!1||(t+=(t.length>0?"-":"")+e.level),t.length>0&&(t="["+t+"]"),Wl.isObject(n)&&n.show_module===!1||(r=e.module),t+r}function qi(){Wl.sessionStorage.isSupport()&&sessionStorage.setItem(Gl,"true")}function Ki(){Wl.sessionStorage.isSupport()&&sessionStorage.removeItem(Gl)}function Fi(){return Wl.sessionStorage.isSupport()&&"true"===sessionStorage.getItem(Gl)}var Vi={};(function(){function e(n,i){function a(e,t){try{e()}catch(r){t&&t()}}function o(e){if(null!=o[e])return o[e];var t;if("bug-string-char-index"==e)t="a"!="a"[0];else if("json"==e)t=o("json-stringify")&&o("date-serialization")&&o("json-parse");else if("date-serialization"==e){if(t=o("json-stringify")&&b){var r=i.stringify;a(function(){t='"-271821-04-20T00:00:00.000Z"'==r(new p((-864e13)))&&'"+275760-09-13T00:00:00.000Z"'==r(new p(864e13))&&'"-000001-01-01T00:00:00.000Z"'==r(new p((-621987552e5)))&&'"1969-12-31T23:59:59.999Z"'==r(new p((-1)))})}}else{var n,s='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==e){var r=i.stringify,c="function"==typeof r;c&&((n=function(){return 1}).toJSON=n,a(function(){c="0"===r(0)&&"0"===r(new l)&&'""'==r(new u)&&r(v)===h&&r(h)===h&&r()===h&&"1"===r(n)&&"[1]"==r([n])&&"[null]"==r([h])&&"null"==r(null)&&"[null,null,null]"==r([h,v,null])&&r({a:[n,!0,!1,null,"\0\b\n\f\r\t"]})==s&&"1"===r(null,n)&&"[\n 1,\n 2\n]"==r([1,2],null,1)},function(){c=!1})),t=c}if("json-parse"==e){var d,f=i.parse;"function"==typeof f&&a(function(){0!==f("0")||f(!1)||(n=f(s),d=5==n.a.length&&1===n.a[0],d&&(a(function(){d=!f('"\t"')}),d&&a(function(){d=1!==f("01")}),d&&a(function(){d=1!==f("1.")})))},function(){d=!1}),t=d}}return o[e]=!!t}function s(e){return D(this)}n||(n=r.Object()),i||(i=r.Object());var l=n.Number||r.Number,u=n.String||r.String,c=n.Object||r.Object,p=n.Date||r.Date,d=n.SyntaxError||r.SyntaxError,f=n.TypeError||r.TypeError,g=n.Math||r.Math,_=n.JSON||r.JSON;if("object"==typeof _&&_)return i.stringify=_.stringify,i.parse=_.parse,i.runInContext=e,i;var h,m=c.prototype,v=m.toString,y=m.hasOwnProperty,b=new p((-0xc782b5b800cec));if(a(function(){b=b.getUTCFullYear()==-109252&&0===b.getUTCMonth()&&1===b.getUTCDate()&&10==b.getUTCHours()&&37==b.getUTCMinutes()&&6==b.getUTCSeconds()&&708==b.getUTCMilliseconds()}),o["bug-string-char-index"]=o["date-serialization"]=o.json=o["json-stringify"]=o["json-parse"]=null,!o("json")){var w="[object Function]",S="[object Date]",k="[object Number]",P="[object String]",C="[object Array]",O="[object Boolean]",j=o("bug-string-char-index"),N=function(e,r){var n,i,a,o=0;(n=function(){this.valueOf=0}).prototype.valueOf=0,i=new n;for(a in i)y.call(i,a)&&o++;return n=i=null,o?N=function(e,t){var r,n,i=v.call(e)==w;for(r in e)i&&"prototype"==r||!y.call(e,r)||(n="constructor"===r)||t(r);(n||y.call(e,r="constructor"))&&t(r)}:(i=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],N=function(e,r){var n,a,o=v.call(e)==w,s=!o&&"function"!=typeof e.constructor&&t[typeof e.hasOwnProperty]&&e.hasOwnProperty||y;for(n in e)o&&"prototype"==n||!s.call(e,n)||r(n);for(a=i.length;n=i[--a];)s.call(e,n)&&r(n)}),N(e,r)};if(!o("json-stringify")&&!o("date-serialization")){var T={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},I="000000",A=function(e,t){return(I+(t||0)).slice(-e)},D=function(e){var t,r,n,i,a,o,s,l,u;if(b)t=function(e){r=e.getUTCFullYear(),n=e.getUTCMonth(),i=e.getUTCDate(),o=e.getUTCHours(),s=e.getUTCMinutes(),l=e.getUTCSeconds(),u=e.getUTCMilliseconds()};else{var c=g.floor,p=[0,31,59,90,120,151,181,212,243,273,304,334],d=function(e,t){return p[t]+365*(e-1970)+c((e-1969+(t=+(t>1)))/4)-c((e-1901+t)/100)+c((e-1601+t)/400)};t=function(e){for(i=c(e/864e5),r=c(i/365.2425)+1970-1;d(r+1,0)<=i;r++);for(n=c((i-d(r,0))/30.42);d(r,n+1)<=i;n++);i=1+i-d(r,n),a=(e%864e5+864e5)%864e5,o=c(a/36e5)%24,s=c(a/6e4)%60,l=c(a/1e3)%60,u=a%1e3}}return(D=function(e){return e>-1/0&&e<1/0?(t(e),e=(r<=0||r>=1e4?(r<0?"-":"+")+A(6,r<0?-r:r):A(4,r))+"-"+A(2,n+1)+"-"+A(2,i)+"T"+A(2,o)+":"+A(2,s)+":"+A(2,l)+"."+A(3,u)+"Z",r=n=i=o=s=l=u=null):e=null,e})(e)};if(o("json-stringify")&&!o("date-serialization")){var $=i.stringify;i.stringify=function(e,t,r){var n=p.prototype.toJSON;p.prototype.toJSON=s;var i=$(e,t,r);return p.prototype.toJSON=n,i}}else{var x="\\u00",E=function(e){var t=e.charCodeAt(0),r=T[t];return r?r:x+A(2,t.toString(16))},L=/[\x00-\x1f\x22\x5c]/g,U=function(e){return L.lastIndex=0,'"'+(L.test(e)?e.replace(L,E):e)+'"'},R=function(e,t,r,n,i,o,s){var l,u,c,d,g,_,m,y,b;if(a(function(){l=t[e]}),"object"==typeof l&&l&&(l.getUTCFullYear&&v.call(l)==S&&l.toJSON===p.prototype.toJSON?l=D(l):"function"==typeof l.toJSON&&(l=l.toJSON(e))),r&&(l=r.call(t,e,l)),l==h)return l===h?l:"null";switch(u=typeof l,"object"==u&&(c=v.call(l)),c||u){case"boolean":case O:return""+l;case"number":case k:return l>-1/0&&l<1/0?""+l:"null";case"string":case P:return U(""+l)}if("object"==typeof l){for(m=s.length;m--;)if(s[m]===l)throw f();if(s.push(l),d=[],y=o,o+=i,c==C){for(_=0,m=l.length;_<m;_++)g=R(_,l,r,n,i,o,s),d.push(g===h?"null":g);b=d.length?i?"[\n"+o+d.join(",\n"+o)+"\n"+y+"]":"["+d.join(",")+"]":"[]"}else N(n||l,function(e){var t=R(e,l,r,n,i,o,s);t!==h&&d.push(U(e)+":"+(i?" ":"")+t)}),b=d.length?i?"{\n"+o+d.join(",\n"+o)+"\n"+y+"}":"{"+d.join(",")+"}":"{}";return s.pop(),b}};i.stringify=function(e,r,n){var i,a,o,s;if(t[typeof r]&&r)if(s=v.call(r),s==w)a=r;else if(s==C){o={};for(var l,u=0,c=r.length;u<c;)l=r[u++],s=v.call(l),"[object String]"!=s&&"[object Number]"!=s||(o[l]=1)}if(n)if(s=v.call(n),s==k){if((n-=n%1)>0)for(n>10&&(n=10),i="";i.length<n;)i+=" "}else s==P&&(i=n.length<=10?n:n.slice(0,10));return R("",(l={},l[""]=e,l),a,o,i,"",[])}}}if(!o("json-parse")){var H,B,J=u.fromCharCode,M={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},q=function(){throw H=B=null,d()},K=function(){for(var e,t,r,n,i,a=B,o=a.length;H<o;)switch(i=a.charCodeAt(H)){case 9:case 10:case 13:case 32:H++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=j?a.charAt(H):a[H],H++,e;case 34:for(e="@",H++;H<o;)if(i=a.charCodeAt(H),i<32)q();else if(92==i)switch(i=a.charCodeAt(++H)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=M[i],H++;break;case 117:for(t=++H,r=H+4;H<r;H++)i=a.charCodeAt(H),i>=48&&i<=57||i>=97&&i<=102||i>=65&&i<=70||q();e+=J("0x"+a.slice(t,H));break;default:q()}else{if(34==i)break;for(i=a.charCodeAt(H),t=H;i>=32&&92!=i&&34!=i;)i=a.charCodeAt(++H);e+=a.slice(t,H)}if(34==a.charCodeAt(H))return H++,e;q();default:if(t=H,45==i&&(n=!0,i=a.charCodeAt(++H)),i>=48&&i<=57){for(48==i&&(i=a.charCodeAt(H+1),i>=48&&i<=57)&&q(),n=!1;H<o&&(i=a.charCodeAt(H),i>=48&&i<=57);H++);if(46==a.charCodeAt(H)){for(r=++H;r<o&&(i=a.charCodeAt(r),!(i<48||i>57));r++);r==H&&q(),H=r}if(i=a.charCodeAt(H),101==i||69==i){for(i=a.charCodeAt(++H),43!=i&&45!=i||H++,r=H;r<o&&(i=a.charCodeAt(r),!(i<48||i>57));r++);r==H&&q(),H=r}return+a.slice(t,H)}n&&q();var s=a.slice(H,H+4);if("true"==s)return H+=4,!0;if("fals"==s&&101==a.charCodeAt(H+4))return H+=5,!1;if("null"==s)return H+=4,null;q()}return"$"},F=function(e){var t,r;if("$"==e&&q(),"string"==typeof e){if("@"==(j?e.charAt(0):e[0]))return e.slice(1);if("["==e){for(t=[];e=K(),"]"!=e;)r?","==e?(e=K(),"]"==e&&q()):q():r=!0,","==e&&q(),t.push(F(e));return t}if("{"==e){for(t={};e=K(),"}"!=e;)r?","==e?(e=K(),"}"==e&&q()):q():r=!0,","!=e&&"string"==typeof e&&"@"==(j?e.charAt(0):e[0])&&":"==K()||q(),t[e.slice(1)]=F(K());return t}q()}return e},V=function(e,t,r){var n=W(e,t,r);n===h?delete e[t]:e[t]=n},W=function(e,t,r){var n,i=e[t];if("object"==typeof i&&i)if(v.call(i)==C)for(n=i.length;n--;)V(v,N,i,n,r);else N(i,function(e){V(i,e,r)});return r.call(e,t,i)};i.parse=function(e,t){var r,n;return H=0,B=""+e,r=F(K()),"$"!=K()&&q(),H=B=null,t&&v.call(t)==w?W((n={},n[""]=r,n),"",t):r}}}return i.runInContext=e,i}var t={"function":!0,object:!0},r=t[typeof window]&&window||this,n=r.JSON,i=r.JSON3,a=!1,o=e(r,r.JSON3={noConflict:function(){return a||(a=!0,r.JSON=n,r.JSON3=i,n=i=null),o}});r.JSON?(r.JSON.parse=o.parse,r.JSON.stringify=o.stringify):r.JSON={parse:o.parse,stringify:o.stringify}}).call(window),function(e,t){t(e)}(window,function(e){if(e.atob)try{e.atob(" ")}catch(t){e.atob=function(e){var t=function(t){return e(String(t).replace(/[\t\n\f\r ]+/g,""))};return t.original=e,t}(e.atob)}else{var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;e.btoa=function(e){e=String(e);for(var t,n,i,a,o="",s=0,l=e.length%3;s<e.length;){if((n=e.charCodeAt(s++))>255||(i=e.charCodeAt(s++))>255||(a=e.charCodeAt(s++))>255)return"";t=n<<16|i<<8|a,o+=r.charAt(t>>18&63)+r.charAt(t>>12&63)+r.charAt(t>>6&63)+r.charAt(63&t)}return l?o.slice(0,l-3)+"===".substring(l):o},e.atob=function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!n.test(e))return"";e+="==".slice(2-(3&e.length));for(var t,i,a,o="",s=0;s<e.length;)t=r.indexOf(e.charAt(s++))<<18|r.indexOf(e.charAt(s++))<<12|(i=r.indexOf(e.charAt(s++)))<<6|(a=r.indexOf(e.charAt(s++))),o+=64===i?String.fromCharCode(t>>16&255):64===a?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}}});var Wi,zi={setup:function(e){Wi=e},log:function(){(Wi||console&&console.log||function(){}).apply(null,arguments)}},Xi={get:function(e){return window.localStorage.getItem(e)},parse:function(e){var t;try{t=JSON.parse(Xi.get(e))||null}catch(r){zi.log("parse localStorage failed")}return t},set:function(e,t){try{window.localStorage.setItem(e,t)}catch(r){zi.log("localStorage is not support")}},remove:function(e){window.localStorage.removeItem(e)},isSupport:function(){var e=!0;try{var t="__local_store_support__",r="testIsSupportStorage";Xi.set(t,r),Xi.get(t)!==r&&(e=!1),Xi.remove(t)}catch(n){e=!1}return e}},Zi=function(){function e(){return r=(9301*r+49297)%233280,r/233280}var t=new Date,r=t.getTime();return function(t){return Math.ceil(e()*t)}}();a.prototype.get=function(e,r,a,o){if(!e)throw new Error("key is must");r=r||1e4,a=a||1e3,o=o||function(){};var s=this.lockGetPrefix+e,l=Xi.get(s),u=String(n());return l&&(l=i(l)||{randomNum:0,expireTime:0},l.expireTime>t())?o(null):(Xi.set(s,JSON.stringify({randomNum:u,expireTime:t()+r})),void setTimeout(function(){l=i(Xi.get(s))||{randomNum:0,expireTime:0},l&&l.randomNum===u?(o(Xi.get(e)),Xi.remove(e),Xi.remove(s)):o(null)},a))},a.prototype.set=function(e,r,a,o,s){if(!e||!r)throw new Error("key and val is must");a=a||1e4,o=o||1e3,s=s||function(){};var l=this.lockSetPrefix+e,u=Xi.get(l),c=String(n());return u&&(u=i(u)||{randomNum:0,expireTime:0},u.expireTime>t())?s({status:"fail",reason:"This key is locked"}):(Xi.set(l,JSON.stringify({randomNum:c,expireTime:t()+a})),void setTimeout(function(){u=i(Xi.get(l))||{randomNum:0,expireTime:0},u.randomNum===c?Xi.set(e,r)&&s({status:"success"}):s({status:"fail",reason:"This key is locked"})},o))},l.prototype.on=function(e,t){if(!e||!t)return!1;if(!s(t))throw new Error("listener must be a function");this._events[e]=this._events[e]||[];var r="object"==typeof t;return this._events[e].push(r?t:{listener:t,once:!1}),this},l.prototype.prepend=function(e,t){if(!e||!t)return!1;if(!s(t))throw new Error("listener must be a function");this._events[e]=this._events[e]||[];var r="object"==typeof t;return this._events[e].unshift(r?t:{listener:t,once:!1}),this},l.prototype.prependOnce=function(e,t){return this.prepend(e,{listener:t,once:!0})},l.prototype.once=function(e,t){return this.on(e,{listener:t,once:!0})},l.prototype.off=function(e,t){var r=this._events[e];if(!r)return!1;if("number"==typeof t)r.splice(t,1);else if("function"==typeof t)for(var n=0,i=r.length;n<i;n++)r[n]&&r[n].listener===t&&r.splice(n,1);return this},l.prototype.emit=function(e,t){var r=this._events[e];if(!r)return!1;for(var n=0;n<r.length;n++){var i=r[n];i&&(i.listener.call(this,t||{}),i.once&&this.off(e,n))}return this},l.prototype.removeAllListeners=function(e){e&&this._events[e]?this._events[e]=[]:this._events={}},l.prototype.listeners=function(e){return e&&"string"==typeof e?this._events[e]:this._events};var Gi=function(){var e=function(){for(var e=1*new Date,t=0;e==1*new Date;)t++;return e.toString(16)+t.toString(16)},t=function(){return n().toString(16).replace(".","")},r=function(){function e(e,t){var r,n=0;for(r=0;r<t.length;r++)n|=i[r]<<8*r;return e^n}var t,r,n=navigator.userAgent,i=[],a=0;for(t=0;t<n.length;t++)r=n.charCodeAt(t),i.unshift(255&r),i.length>=4&&(a=e(a,i),i=[]);return i.length>0&&(a=e(a,i)),a.toString(16)};return function(){var i=String(screen.height*screen.width);i=i&&/\d{5,}/.test(i)?i.toString(16):String(31242*n()).replace(".","").slice(0,8);var a=e()+"-"+t()+"-"+r()+"-"+i+"-"+e();return a?a:(String(n())+String(n())+String(n())).slice(2,15)}}(),Qi=function(e){this.ele=e},Yi=function(e,t){for(var r=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&r.push(e);return r};Qi.prototype={addClass:function(e){var t=" "+this.ele.className+" ";return t.indexOf(" "+e+" ")===-1&&(this.ele.className=this.ele.className+(""===this.ele.className?"":" ")+e),this},removeClass:function(e){var t=" "+this.ele.className+" ";return t.indexOf(" "+e+" ")!==-1&&(this.ele.className=t.replace(" "+e+" "," ").slice(1,-1)),this},hasClass:function(e){var t=" "+this.ele.className+" ";return t.indexOf(" "+e+" ")!==-1},attr:function(e,t){return"string"==typeof e&&h(t)?this.ele.getAttribute(e):("string"==typeof e&&(t=String(t),this.ele.setAttribute(e,t)),this)},offset:function(){try{var e=this.ele.getBoundingClientRect(),t=this.ele.ownerDocument,r=t.documentElement;return{top:e.top+window.pageYOffset-r.clientTop,left:e.left+window.pageXOffset-r.clientLeft}}catch(n){return{top:0,left:0}}},getSize:function(){if(!window.getComputedStyle)return{width:this.ele.offsetWidth,height:this.ele.offsetHeight};try{var e=this.ele.getBoundingClientRect();return{width:e.width,height:e.height}}catch(t){return{width:0,height:0}}},getStyle:function(e){return this.ele.currentStyle?this.ele.currentStyle[e]:this.ele.ownerDocument.defaultView.getComputedStyle(this.ele,null).getPropertyValue(e)},wrap:function(e){var t=document.createElement(e);return this.ele.parentNode.insertBefore(t,this.ele),t.appendChild(this.ele),y(t)},getCssStyle:function(e){var t=this.ele.style.getPropertyValue(e);if(t)return t;var r=null;if("function"==typeof window.getMatchedCSSRules&&(r=window.getMatchedCSSRules(this.ele)),!r||!v(r))return null;for(var n=r.length-1;n>=0;n--){var i=r[n];if(t=i.style.getPropertyValue(e))return t}},sibling:function(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e},next:function(){return this.sibling(this.ele,"nextSibling")},prev:function(){return this.sibling(this.ele,"previousSibling")},siblings:function(){return Yi((this.ele.parentNode||{}).firstChild,this.ele)},children:function(){return Yi(this.ele.firstChild)},parent:function(){var e=this.ele.parentNode;return e=e&&11!==e.nodeType?e:null,y(e)},previousElementSibling:function(){var e=this.ele;if("previousElementSibling"in document.documentElement)return y(e.previousElementSibling);for(;e=e.previousSibling;)if(1===e.nodeType)return y(e);return y(null)},getSameTypeSiblings:function(){for(var e=this.ele,t=e.parentNode,r=e.tagName.toLowerCase(),n=[],i=0;i<t.children.length;i++){var a=t.children[i];1===a.nodeType&&a.tagName.toLowerCase()===r&&n.push(t.children[i])}return n},getParents:function(){try{var e=this.ele;if(!_(e))return[];var t=[e];if(null===e||null===e.parentElement)return[];for(;null!==e.parentElement;)e=e.parentElement,t.push(e);return t}catch(r){return[]}}};var ea=Array.prototype.forEach,ta=Object.prototype.hasOwnProperty,ra=Object.prototype.hasOwnProperty,na={get:function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var i=r[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return u(i.substring(t.length,i.length))}return null},set:function(e,t,r,n,i,a,o){function s(e){return!!e&&e.replace(/\r\n/g,"")}var l=o,u="",c="",d="";if(r=null==r?73e3:r,0!==r){var f=new Date;"s"===String(r).slice(-1)?f.setTime(f.getTime()+1e3*Number(String(r).slice(0,-1))):f.setTime(f.getTime()+24*r*60*60*1e3),u="; expires="+f.toGMTString()}p(i)&&""!==i&&(d="; SameSite="+i),a&&(c="; secure");var g="",_="",h="";e&&(g=s(e)),t&&(_=s(t)),l&&(h=s(l)),g&&_&&(document.cookie=g+"="+encodeURIComponent(_)+u+"; path=/"+h+d+c)},remove:function(e,t){this.set(e,"1",-1,t)},isSupport:function(e,t){function r(){n.set(e,t);var r=n.get(e);return r===t&&(n.remove(e),!0)}e=e||"cookie_support_test",t=t||"1";var n=this;return navigator.cookieEnabled&&r()}},ia=Object.prototype.hasOwnProperty,aa={isSupport:function(){var e=!0,t="__session_storage_support__",r="testIsSupportStorage";try{sessionStorage&&sessionStorage.setItem?(sessionStorage.setItem(t,r),sessionStorage.removeItem(t,r),e=!0):e=!1}catch(n){e=!1}return e}},oa={"+":"-","/":"_","=":"."},sa={"-":"+",_:"/",".":"="},la={encode:function(e){return e.replace(/[+\/=]/g,function(e){return oa[e]})},decode:function(e){return e.replace(/[-_.]/g,function(e){return sa[e]})},trim:function(e){return e.replace(/[.=]{1,2}$/,"")},isBase64:function(e){return/^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)},isUrlSafeBase64:function(e){return/^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)}},ua={__proto__:null,ConcurrentStorage:a,EventEmitter:l,URL:g,UUID:Gi,addEvent:b,addHashEvent:w,ajax:C,base64Decode:j,base64Encode:N,bindReady:T,cookie:na,coverExtend:I,decodeURI:A,decodeURIComponent:u,dfmapping:D,each:k,encodeDates:E,extend:P,extend2Lev:L,filter:U,formatDate:x,formatJsonString:R,getCookieTopLevelDomain:B,getDomBySelector:J,getElementContent:M,getHostname:q,getIOSVersion:K,getQueryParam:V,getQueryParamsFromUrl:F,getRandom:n,getRandomBasic:Zi,getScreenOrientation:z,getUA:X,getURL:Z,getURLPath:G,getURLSearchParams:c,hasAttribute:Q,hasAttributes:Y,hashCode:ee,hashCode53:te,indexOf:re,inherit:ne,isArguments:ie,isArray:v,isBoolean:ae,isDate:$,isElement:_,isEmptyObject:oe,isFunction:e,isHttpUrl:se,isIOS:le,isJSONString:ue,isNumber:ce,isObject:r,isString:p,isSupportBeaconSend:pe,isSupportCors:de,isUndefined:h,jsonp:fe,listenPageState:ge,loadScript:_e,localStorage:Xi,logger:zi,map:O,mediaQueriesSupported:W,now:t,removeScriptProtocol:he,rot13defs:ve,rot13obfs:me,ry:y,safeJSONParse:i,searchObjDate:ye,sessionStorage:aa,setCssStyle:be,strToUnicode:we,throttle:Se,toArray:Pe,trim:d,unique:Ce,urlParse:f,urlSafeBase64:la,values:ke,xhr:S},ca=[],pa={appendWriter:function(e){ca.push(e)},msg:function(){var e={module:"",level:"log",brand:"web-sdk",content:null};e.content=Array.prototype.slice.call(arguments);var t={module:function(t){return p(t)&&(e.module=t),this},level:function(t){return p(t)&&(e.level=t),this},brand:function(t){return p(t)&&(e.brand=t),this},log:function(){if(e.content&&e.content.length)for(var t=0;t<ca.length;t++)if("function"==typeof ca[t])try{ca[t].call(null,e)}catch(r){}return this}};return t}},da={},fa={preset_properties:{search_keyword_baidu:!1,latest_utm:!0,latest_traffic_source_type:!0,latest_search_keyword:!0,latest_referrer:!0,latest_referrer_host:!1,latest_landing_page:!1,latest_wx_ad_click_id:void 0,url:!0,title:!0},encrypt_cookie:!1,enc_cookie:!1,img_use_crossorigin:!1,name:"sa",max_referrer_string_length:200,max_string_length:500,max_id_length:255,max_key_length:100,cross_subdomain:!0,show_log:!1,is_debug:!1,source_channel:[],sdk_id:"",
vtrack_ignore:{},auto_init:!0,is_track_single_page:!1,is_single_page:!1,batch_send:!1,source_type:{},callback_timeout:200,datasend_timeout:8e3,is_track_device_id:!1,ignore_oom:!0,app_js_bridge:!1};fa.white_list={},fa.white_list[location.host]=g(location.href).hostname;var ga="utm_source utm_medium utm_campaign utm_content utm_term",_a="1.26.2",ha="sensorsdata_domain_test",ma={EMAIL:"$identity_email",MOBILE:"$identity_mobile",LOGIN:"$identity_login_id"},va={get:function(e){return na.get(e)},set:function(e,t,r,n){var i="";if(n=h(n)?da.cross_subdomain:n){var a=Te(location.href);"url\u89e3\u6790\u5931\u8d25"===a&&(a=""),i=a?"; domain="+a:""}return na.set(e,t,r,n,da.set_cookie_samesite,da.is_secure_cookie,i)},remove:function(e,t){return t=h(t)?da.cross_subdomain:t,na.remove(e,t)},isSupport:function(e,t){return e=e||"sajssdk_2015_cookie_access_test",t=t||"1",na.isSupport(e,t)}},ya={data:{},id:function(){return this.data.id?this.data.id:(this.data.id=De(),this.data.id)},type:function(){return this.data.type?this.data.type:(this.data.type=Ae(),this.data.type)}},ba={distinct_id:function(){},jssdkDebug:function(){},_sendDebug:function(e){},apph5:function(e){var t="app_h5\u6253\u901a\u5931\u8d25-",n={1:t+"use_app_track\u4e3afalse",2:t+"Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",3.1:t+"Android\u6821\u9a8cserver_url\u5931\u8d25",3.2:t+"iOS\u6821\u9a8cserver_url\u5931\u8d25",4.1:t+"H5 \u6821\u9a8c iOS server_url \u5931\u8d25",4.2:t+"H5 \u6821\u9a8c Android server_url \u5931\u8d25"},i=e.output,a=e.step,o=e.data||"";"all"!==i&&"console"!==i||Oe(n[a]),("all"===i||"code"===i)&&r(da.is_debug)&&da.is_debug.apph5&&(o.type&&"profile"===o.type.slice(0,7)||(o.properties._jssdk_debug_info="apph5-"+String(a)))},defineMode:function(e){var t={1:{title:"\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",message:"App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 App SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",link_text:"\u914d\u7f6e\u6587\u6863",link_url:"https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"},2:{title:"\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",message:"App SDK \u4e0e Web JS SDK \u6ca1\u6709\u8fdb\u884c\u6253\u901a\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u6280\u672f\u4eba\u5458\u4fee\u6b63 Web JS SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",link_text:"\u914d\u7f6e\u6587\u6863",link_url:"https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"},3:{title:"\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",message:"Web JS SDK \u6ca1\u6709\u5f00\u542f\u5168\u57cb\u70b9\u914d\u7f6e\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",link_text:"\u914d\u7f6e\u6587\u6863",link_url:"https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"},4:{title:"\u5f53\u524d\u9875\u9762\u65e0\u6cd5\u8fdb\u884c\u53ef\u89c6\u5316\u5168\u57cb\u70b9",message:"Web JS SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0e App SDK \u914d\u7f6e\u7684\u6570\u636e\u6821\u9a8c\u5730\u5740\u4e0d\u4e00\u81f4\uff0c\u8bf7\u8054\u7cfb\u8d35\u65b9\u5de5\u4f5c\u4eba\u5458\u4fee\u6b63 SDK \u7684\u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b\u6587\u6863\u3002",link_text:"\u914d\u7f6e\u6587\u6863",link_url:"https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"}};return!(!e||!t[e])&&t[e]},protocol:{protocolIsSame:function(e,t){try{if(g(e).protocol!==g(t).protocol)return!1}catch(r){return je("\u4e0d\u652f\u6301 _.URL \u65b9\u6cd5"),!1}return!0},serverUrl:function(){p(da.server_url)&&""!==da.server_url&&!this.protocolIsSame(da.server_url,location.href)&&je("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\n\u56e0\u4e3a\uff1a1\u3001https \u4e0b\u9762\u53d1\u9001 http \u7684\u56fe\u7247\u8bf7\u6c42\u4f1a\u5931\u8d25\u30022\u3001http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002")},ajax:function(e){return e!==da.server_url&&void(p(e)&&""!==e&&!this.protocolIsSame(e,location.href)&&je("SDK \u68c0\u6d4b\u5230\u60a8\u7684\u6570\u636e\u53d1\u9001\u5730\u5740\u548c\u5f53\u524d\u9875\u9762\u5730\u5740\u7684\u534f\u8bae\u4e0d\u4e00\u81f4\uff0c\u5efa\u8bae\u60a8\u4fee\u6539\u6210\u4e00\u81f4\u7684\u534f\u8bae\u3002\u56e0\u4e3a http \u9875\u9762\u4f7f\u7528 https + ajax \u65b9\u5f0f\u53d1\u6570\u636e\uff0c\u5728 ie9 \u53ca\u4ee5\u4e0b\u4f1a\u4e22\u5931\u6570\u636e\u3002"))}}},wa={initPage:function(){var e=$e(),t=Z(),r=Te(t);r||ba.jssdkDebug("url_domain\u5f02\u5e38_"+t+"_"+r),this.pageProp={referrer:e,referrer_host:e?q(e):"",url:t,url_host:q(t,"url_host\u53d6\u503c\u5f02\u5e38"),url_domain:r}},pageProp:{},campaignParams:function(){return Vi.kit.getUtmData()},campaignParamsStandard:function(e,t){e=e||"",t=t||"";var r=wa.campaignParams(),n={},i={};return k(r,function(r,a,o){(" "+ga+" ").indexOf(" "+a+" ")!==-1?n[e+a]=o[a]:i[t+a]=o[a]}),{$utms:n,otherUtms:i}},properties:function(){var e=window.innerHeight||document.documentElement.clientHeight||document.body&&document.body.clientHeight||0,t=window.innerWidth||document.documentElement.clientWidth||document.body&&document.body.clientWidth||0,r={$timezone_offset:(new Date).getTimezoneOffset(),$screen_height:Number(screen.height)||0,$screen_width:Number(screen.width)||0,$viewport_height:e,$viewport_width:t,$lib:"js",$lib_version:_a};return r},currentProps:{},register:function(e){P(wa.currentProps,e)}};va.getNewUser=Re;var Sa={data:{},get:function(e){var t=this.data[e];return void 0===t?null:void 0!==t._expirationTimestamp_?(new Date).getTime()>t._expirationTimestamp_?null:t.value:t},set:function(e,t,r){if(r){var n,i=new Date;n="s"===String(r).slice(-1)?i.getTime()+1e3*Number(String(r).slice(0,-1)):i.getTime()+24*r*60*60*1e3,t={value:t,_expirationTimestamp_:n}}this.data[e]=t},getNewUserFlagMemoryKey:function(e){return"sajssdk_2015_"+da.sdk_id+e}},ka={checkIsAddSign:function(e){"track"===e.type&&(Re()?e.properties.$is_first_day=!0:e.properties.$is_first_day=!1)},is_first_visit_time:!1,is_page_first_visited:!1,checkIsFirstTime:function(e){"track"===e.type&&"$pageview"===e.event&&(this.is_first_visit_time?(e.properties.$is_first_time=!0,this.is_first_visit_time=!1):e.properties.$is_first_time=!1)},setDeviceId:function(e,t){var r=null,n=va.get("sensorsdata2015jssdkcross"+Vi.para.sdk_id);n=Vi.kit.userDecryptIfNeeded(n);var i={};null!=n&&ue(n)&&(i=JSON.parse(n),i.$device_id&&(r=i.$device_id)),r=r||e,Vi.para.cross_subdomain===!0?t.set("$device_id",r):(i.$device_id=r,i=JSON.stringify(i),Vi.para.encrypt_cookie&&(i=Vi.kit.userEncrypt(i)),va.set("sensorsdata2015jssdkcross"+Vi.para.sdk_id,i,null,!0)),Vi.para.is_track_device_id&&(wa.currentProps.$device_id=r)},storeInitCheck:function(){if(Vi.is_first_visitor){var e=new Date,t={h:23-e.getHours(),m:59-e.getMinutes(),s:59-e.getSeconds()};va.isSupport()?va.set(Ue("new_user"),"1",3600*t.h+60*t.m+t.s+"s"):Sa.set(Sa.getNewUserFlagMemoryKey("new_user"),"1",3600*t.h+60*t.m+t.s+"s"),this.is_first_visit_time=!0,this.is_page_first_visited=!0}else Re()||(this.checkIsAddSign=function(e){"track"===e.type&&(e.properties.$is_first_day=!1)}),this.checkIsFirstTime=function(e){"track"===e.type&&"$pageview"===e.event&&(e.properties.$is_first_time=!1)}}},Pa=function(){this._events=[],this.pendingEvents=[]};Pa.prototype={emit:function(e){var t=[].slice.call(arguments,1);k(this._events,function(r){r.type===e&&r.callback.apply(r.context,t)}),this.pendingEvents.push({type:e,data:t}),this.pendingEvents.length>20?this.pendingEvents.shift():null},on:function(t,r,n,i){e(r)&&(this._events.push({type:t,callback:r,context:n||this}),i=i!==!1,this.pendingEvents.length>0&&i&&k(this.pendingEvents,function(e){e.type===t&&r.apply(n,e.data)}))},tempAdd:function(e,t){if(t&&e)return this.emit(e,t)},isReady:function(){}};var Ca={},Oa=new l;Ca.spa=Oa,Ca.sdk=new l,Ca.data=new l,Ca.initSystemEvent=function(){Ye(function(e){Oa.emit("switch",e)})},Ca.EVENT_LIST={spaSwitch:["spa","switch"],sdkBeforeInit:["sdk","beforeInit"],sdkInitPara:["sdk","initPara"],sdkAfterInitPara:["sdk","afterInitPara"],sdkInitAPI:["sdk","initAPI"],sdkAfterInitAPI:["sdk","afterInitAPI"],sdkAfterInit:["sdk","afterInit"],sdkReady:["sdk","ready"],dataSendSuccess:["data","sendSuccess"],dataSendFail:["data","sendFail"]};var ja=function(e){this.callback=e.callback,this.server_url=e.server_url,this.data=e.data,this.origin_data=e.origin_data};ja.prototype.start=function(){var e=this,t=new Date;Ze({url:this.server_url,type:"POST",data:e.data,credentials:!1,timeout:da.datasend_timeout,cors:!0,success:function(r,n){Ca.data.emit("sendSuccess",{status:String(n),resText:r,type:"ajax_single",timeout_config:da.datasend_timeout,request_timeout:new Date-t,data:e.origin_data}),e.end()},error:function(r,n){Ca.data.emit("sendFail",{status:String(n),resText:r,type:"ajax_single",timeout_config:da.datasend_timeout,request_timeout:new Date-t,data:e.origin_data}),e.end()}})},ja.prototype.end=function(){if(this.callback){if(Oe("warning: sdk callback is deprecated."),!e(this.callback))return void Oe("error: sdk callback must be function.");this.callback()}};var Na="sawebjssdk-",Ta="tab-sawebjssdk-";tt.prototype={batchInterval:function(){""===this.serverUrl&&this.getServerUrl(),this.hasTabStorage||(this.generateTabStorage(),this.hasTabStorage=!0);var e=this;e.timer=setTimeout(function(){e.updateExpireTime(),e.recycle(),e.send(),clearTimeout(e.timer),e.batchInterval()},da.batch_send.send_interval)},getServerUrl:function(){return p(da.server_url)&&""!==da.server_url||v(da.server_url)&&da.server_url.length?void(this.serverUrl=v(da.server_url)?da.server_url[0]:da.server_url):Ne("\u5f53\u524d server_url \u4e3a\u7a7a\u6216\u4e0d\u6b63\u786e\uff0c\u53ea\u5728\u63a7\u5236\u53f0\u6253\u5370\u65e5\u5fd7\uff0cnetwork \u4e2d\u4e0d\u4f1a\u53d1\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u6b63\u786e\u7684 server_url\uff01")},send:function(){if(this.sendTimeStamp&&t()-this.sendTimeStamp<da.batch_send.send_interval)return!1;var e=Xi.get(this.tabKey);if(e){this.sendTimeStamp=t(),e=i(e)||this.generateTabStorageVal();var r=Ce(e.data);if(r.length){for(var n=[],a=0;a<r.length;a++){var o=Vi.store.readObjectVal(r[a]);o&&(o._flush_time=(new Date).getTime(),n.push(o))}n.length&&this.request(n,e.data)}}},updateExpireTime:function(){var e=Xi.get(this.tabKey);e&&(e=i(e)||this.generateTabStorageVal(),e.expireTime=t()+2*da.batch_send.send_interval,e.serverUrl=this.serverUrl,Xi.set(this.tabKey,JSON.stringify(e)))},request:function(e,t){var r=this,n=new Date;Ze({url:this.serverUrl,type:"POST",data:"data_list="+encodeURIComponent(N(JSON.stringify(e))),credentials:!1,timeout:da.batch_send.datasend_timeout,cors:!0,success:function(i,a){Ca.data.emit("sendSuccess",{status:String(a),resText:i,type:"ajax_batch",timeout_config:da.batch_send.datasend_timeout,request_timeout:new Date-n,data:e}),r.remove(t),r.sendTimeStamp=0},error:function(t,i){Ca.data.emit("sendFail",{status:String(i),resText:t,type:"ajax_batch",timeout_config:da.batch_send.datasend_timeout,request_timeout:new Date-n,data:e}),r.sendTimeStamp=0}})},remove:function(e){var t=Xi.get(this.tabKey);if(t){for(var r=(i(t)||this.generateTabStorageVal()).data,n=0;n<e.length;n++){var a=re(r,e[n]);a>-1&&r.splice(a,1),Xi.remove(e[n])}r=Ce(r),Xi.set(this.tabKey,JSON.stringify(this.generateTabStorageVal(r)))}},add:function(e){var r=Na+String(n()),a=Xi.get(this.tabKey);null===a?(this.tabKey=Ta+String(n()),a=this.generateTabStorageVal()):a=i(a)||this.generateTabStorageVal(),a.data.push(r),a.expireTime=t()+2*da.batch_send.send_interval,Xi.set(this.tabKey,JSON.stringify(a)),Vi.store.saveObjectVal(r,e),"track_signup"!==e.type&&"$pageview"!==e.event||this.sendImmediately()},generateTabStorage:function(){this.tabKey=Ta+String(n()),Xi.set(this.tabKey,JSON.stringify(this.generateTabStorageVal()))},generateTabStorageVal:function(e){return e=e||[],{data:e,expireTime:t()+2*da.batch_send.send_interval,serverUrl:this.serverUrl}},sendImmediately:function(){this.send()},recycle:function(){for(var e={},r=1e4,n="sajssdk-lock-get-",o=0;o<localStorage.length;o++){var s=localStorage.key(o),l=this;if(0===s.indexOf(Ta)){for(var u=i(Xi.get(s))||this.generateTabStorageVal(),c=0;c<u.data.length;c++)e[u.data[c]]=!0;if(s!==l.tabKey&&t()>u.expireTime&&this.serverUrl===u.serverUrl){var p=new a(n);p.get(s,r,1e3,function(e){if(e){null===Xi.get(l.tabKey)&&l.generateTabStorage();var t=i(e)||l.generateTabStorageVal(),r=i(Xi.get(l.tabKey))||l.generateTabStorageVal();r.data=Ce(r.data.concat(t.data)),Xi.set(l.tabKey,JSON.stringify(r))}})}}else if(0===s.indexOf(n)){var d=i(Xi.get(s))||{expireTime:0};t()-d.expireTime>r&&Xi.remove(s)}}for(var f=0;f<localStorage.length;f++){var g=localStorage.key(f);0!==g.indexOf(Na)||e[g]||Xi.remove(g)}}};var Ia=function(e){this.callback=e.callback,this.server_url=e.server_url,this.data=e.data};Ia.prototype.start=function(){var e=this;"object"==typeof navigator&&"function"==typeof navigator.sendBeacon&&navigator.sendBeacon(this.server_url,this.data),setTimeout(function(){e.end()},40)},Ia.prototype.end=function(){if(this.callback){if(Oe("warning: sdk callback is deprecated."),!e(this.callback))return void Oe("error: sdk callback must be function.");this.callback()}};var Aa=function(e){this.callback=e.callback,this.img=document.createElement("img"),this.img.width=1,this.img.height=1,da.img_use_crossorigin&&(this.img.crossOrigin="anonymous"),this.server_url=e.data};Aa.prototype.start=function(){var e=this;da.ignore_oom&&(this.img.onload=function(){this.onload=null,this.onerror=null,this.onabort=null,e.end()},this.img.onerror=function(){this.onload=null,this.onerror=null,this.onabort=null,e.end()},this.img.onabort=function(){this.onload=null,this.onerror=null,this.onabort=null,e.end()}),this.img.src=this.server_url},Aa.prototype.lastClear=function(){var e=X();void 0!==e.ie?this.img.src="about:blank":this.img.src=""},Aa.prototype.end=function(){if(this.callback){if(Oe("warning: sdk callback is deprecated."),!e(this.callback))return void Oe("error: sdk callback must be function.");this.callback()}var t=this;setTimeout(function(){t.lastClear&&t.lastClear()},da.datasend_timeout-da.callback_timeout)};var Da={__proto__:null,addEvent:He,EventEmitterSa:Pa,cookie:va,info:wa,getReferrer:$e,getCurrentDomain:Te,isBaiduTraffic:Ie,getReferrerEqid:De,getReferrerEqidType:Ae,getBaiduKeyword:ya,isReferralTraffic:xe,getKeywordFromReferrer:Ee,getReferSearchEngine:Le,getSourceFromReferrer:Be,getWxAdIdFromUrl:Je,parseSuperProperties:Me,searchConfigData:qe,strip_empty_properties:Ke,getEleInfo:We,getElementContent:Xe,ajax:Ze,optimizeServerUrl:Ge,encodeTrackData:Qe,AjaxSend:ja,BatchSend:tt,BeaconSend:Ia,ImageSend:Aa},$a=new Pa,xa={requests:[],_sessionState:{},_state:{distinct_id:"",first_id:"",props:{},identities:{}},getProps:function(){return this._state.props||{}},getSessionProps:function(){return this._sessionState},getOriginDistinctId:function(){return this._state._distinct_id||this._state.distinct_id},getOriginUnionId:function(e){var t={};e=e||this._state;var r=e._first_id||e.first_id,n=e._distinct_id||e.distinct_id;return r&&n?(t.login_id=n,t.anonymous_id=r):t.anonymous_id=n,t},getDistinctId:function(){var e=this.getUnionId();return e.login_id||e.anonymous_id},getUnionId:function(e){var t=this.getOriginUnionId(e);return t.login_id&&this._state.history_login_id&&this._state.history_login_id.name&&this._state.history_login_id.name!==ma.LOGIN&&(t.login_id=this._state.history_login_id.name+"+"+t.login_id),t},getFirstId:function(){return this._state._first_id||this._state.first_id},initSessionState:function(){var e=va.get("sensorsdata2015session");e=Vi.kit.userDecryptIfNeeded(e);var t=null;null!==e&&"object"==typeof(t=i(e))&&(this._sessionState=t||{})},setOnce:function(e,t){e in this._state||this.set(e,t)},set:function(e,t){this._state=this._state||{};var r=this._state.distinct_id;this._state[e]=t,"first_id"===e?delete this._state._first_id:"distinct_id"===e&&delete this._state._distinct_id,this.save(),"distinct_id"===e&&r&&$a.tempAdd("changeDistinctId",t)},change:function(e,t){this._state["_"+e]=t},setSessionProps:function(e){Vi.log("initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee");var t=this._sessionState;P(t,e),this.sessionSave(t)},setSessionPropsOnce:function(e){Vi.log("initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee");var t=this._sessionState;I(t,e),this.sessionSave(t)},setProps:function(e,t){var r={};r=t?e:P(this._state.props||{},e);for(var n in r)"string"==typeof r[n]&&(r[n]=r[n].slice(0,Vi.para.max_referrer_string_length));this.set("props",r)},setPropsOnce:function(e){var t=this._state.props||{};I(t,e),this.set("props",t)},clearAllProps:function(e){this._sessionState={};var t;if(v(e)&&e.length>0)for(t=0;t<e.length;t++)p(e[t])&&e[t].indexOf("latest_")===-1&&r(this._state.props)&&e[t]in this._state.props&&delete this._state.props[e[t]];else if(r(this._state.props))for(t in this._state.props)1!==t.indexOf("latest_")&&delete this._state.props[t];this.sessionSave({}),this.save()},sessionSave:function(e){Vi.log("initSessionState \u65b9\u6cd5\u5df2\u7ecf\u5f03\u7528\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\u8054\u7cfb\u6280\u672f\u987e\u95ee"),this._sessionState=e;var t=JSON.stringify(this._sessionState);Vi.para.encrypt_cookie&&(t=Vi.kit.userEncrypt(t)),va.set("sensorsdata2015session",t,0)},save:function(){var e=JSON.parse(JSON.stringify(this._state));delete e._first_id,delete e._distinct_id,e.identities&&(e.identities=N(JSON.stringify(e.identities)));var t=JSON.stringify(e);Vi.para.encrypt_cookie&&(t=Vi.kit.userEncrypt(t)),va.set(this.getCookieName(),t,730,Vi.para.cross_subdomain)},getCookieName:function(){var e="";if(Vi.para.cross_subdomain===!1){try{var t=location.host;h(Vi.para.white_list[t])||(e=Vi.para.white_list[t])}catch(r){je(r)}e="string"==typeof e&&""!==e?"sa_jssdk_2015_"+Vi.para.sdk_id+e.replace(/\./g,"_"):"sa_jssdk_2015_root"+Vi.para.sdk_id}else e="sensorsdata2015jssdkcross"+Vi.para.sdk_id;return e},init:function(){function e(e){var t;e.identities&&(0===e.identities.indexOf("\n/")?e.identities=i(ve(e.identities)):e.identities=i(j(e.identities)));var n=xa.getOriginUnionId(e);e.identities&&r(e.identities)&&!oe(e.identities)||(e.identities={},e.identities.$identity_cookie_id=Gi()),e.history_login_id=e.history_login_id||{};var a=e.history_login_id,o=a.name;if(n.login_id)if(o&&e.identities.hasOwnProperty(o)){if(e.identities[o]!==n.login_id){e.identities[o]=n.login_id;for(t in e.identities)e.identities.hasOwnProperty(t)&&"$identity_cookie_id"!==t&&t!==o&&delete e.identities[t];e.history_login_id.value=n.login_id}}else{var s=o||ma.LOGIN;e.identities[s]=n.login_id;for(t in e.identities)e.identities.hasOwnProperty(t)&&"$identity_cookie_id"!==t&&t!==s&&delete e.identities[t];e.history_login_id={name:s,value:n.login_id}}else{if(e.identities.hasOwnProperty("$identity_login_id")||e.identities.hasOwnProperty(o))for(t in e.identities)e.identities.hasOwnProperty(t)&&"$identity_cookie_id"!==t&&"$identity_anonymous_id"!==t&&delete e.identities[t];e.history_login_id={name:"",value:""}}return e}function t(e){xa.set("distinct_id",e),xa.set("identities",{$identity_cookie_id:e}),xa.set("history_login_id",{name:"",value:""})}this.initSessionState();var n,a,o=Gi();va.isSupport()&&(n=va.get(this.getCookieName()),n=Vi.kit.userDecryptIfNeeded(n),a=i(n)),va.isSupport()&&null!==n&&ue(n)&&r(a)&&(!r(a)||a.distinct_id)?(xa._state=P(e(a)),xa.save()):(Vi.is_first_visitor=!0,t(o)),ka.setDeviceId(o,this),ka.storeInitCheck()},saveObjectVal:function(e,t){p(t)||(t=JSON.stringify(t)),1==Vi.para.encrypt_cookie&&(t=Vi.kit.userEncrypt(t)),Xi.set(e,t)},readObjectVal:function(e){var t=Xi.get(e);return t?(t=Vi.kit.userDecryptIfNeeded(t),i(t)):null}},Ea={string:function(e){je(e+" must be string")},emptyString:function(e){je(e+"'s is empty")},regexTest:function(e){je(e+" is invalid")},idLength:function(e){je(e+" length is longer than "+da.max_id_length)},keyLength:function(e){je(e+" length is longer than "+da.max_key_length)},stringLength:function(e){je(e+" length is longer than "+da.max_string_length)},voidZero:function(e){je(e+"'s is undefined")},reservedLoginId:function(e){je(e+" is invalid")},reservedBind:function(e){je(e+" is invalid")},reservedUnbind:function(e){je(e+" is invalid")}},La={regName:/^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,loginIDReservedNames:["$identity_anonymous_id","$identity_cookie_id"],bindReservedNames:["$identity_login_id","$identity_anonymous_id","$identity_cookie_id"],unbindReservedNames:["$identity_anonymous_id",ma.LOGIN],string:function(e){return!!p(e)},emptyString:function(e){return!(!p(e)||0===d(e).length)},regexTest:function(e){return!(!p(e)||!this.regName.test(e))},idLength:function(e){return!(!p(e)||e.length>da.max_id_length)},keyLength:function(e){return!(!p(e)||e.length>da.max_key_length)},stringLength:function(e){return!(!p(e)||e.length>da.max_string_length)},voidZero:function(e){return void 0!==e},reservedLoginId:function(e){return!(re(this.loginIDReservedNames,e)>-1)},reservedUnbind:function(e){return!(re(this.unbindReservedNames,e)>-1)},reservedBind:function(e){var t=xa._state.history_login_id;return!(t&&t.name&&t.name===e||re(this.bindReservedNames,e)>-1)}},Ua={distinct_id:{rules:["string","emptyString","idLength"],onComplete:function(t,r,n){return!t&&("emptyString"===n&&(r="Id"),e(Ea[n])&&Ea[n](r),"idLength"===n)||t}},event:{rules:["string","emptyString","keyLength","regexTest"],onComplete:function(t,r,n){return t||("emptyString"===n&&(r="eventName"),e(Ea[n])&&Ea[n](r)),!0}},propertyKey:{rules:["string","emptyString","keyLength","regexTest"],onComplete:function(t,r,n){return t||("emptyString"===n&&(r="Property key"),e(Ea[n])&&Ea[n](r)),!0}},propertyValue:{rules:["voidZero"],onComplete:function(t,r,n){return t||(r="Property Value",e(Ea[n])&&Ea[n](r)),!0}},properties:function(t){return r(t)?k(t,function(t,r){rt({propertyKey:r});var n=function(t,n,i){return t||(n=r+"'s Value",e(Ea[i])&&Ea[i](n)),!0};rt({propertyValue:t},n)}):La.voidZero(t)&&je("properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"),!0},propertiesMust:function(e){return void 0!==e&&r(e)&&!oe(e)?this.properties.call(this,e):je("properties\u5fc5\u987b\u662f\u5bf9\u8c61"),!0},item_type:{rules:["string","emptyString","keyLength","regexTest"],onComplete:function(t,r,n){return t||("emptyString"===n&&(r="item_type"),e(Ea[n])&&Ea[n](r)),!0}},item_id:{rules:["string","emptyString","stringLength"],onComplete:function(t,r,n){return t||("emptyString"===n&&(r="item_id"),e(Ea[n])&&Ea[n](r)),!0}},loginIdKey:{rules:["string","emptyString","keyLength","regexTest","reservedLoginId"],onComplete:function(t,r,n){return!t&&("emptyString"===n&&(r="login_id_key"),e(Ea[n])&&Ea[n](r),"keyLength"===n)||t}},bindKey:{rules:["string","emptyString","keyLength","regexTest","reservedBind"],onComplete:function(t,r,n){return!t&&("emptyString"===n&&(r="Key"),e(Ea[n])&&Ea[n](r),"keyLength"===n)||t}},unbindKey:{rules:["string","emptyString","keyLength","regexTest","reservedUnbind"],onComplete:function(t,r,n){return!t&&("emptyString"===n&&(r="Key"),e(Ea[n])&&Ea[n](r),"keyLength"===n)||t}},bindValue:{rules:["string","emptyString","idLength"],onComplete:function(t,r,n){return!t&&("emptyString"===n&&(r="Value"),e(Ea[n])&&Ea[n](r),"idLength"===n)||t}},check:function(t,r,n){var i=this[t];if(e(i))return i.call(this,r);if(!i)return!1;for(var a=0;a<i.rules.length;a++){var o=i.rules[a],s=La[o](r),l=e(n)?n(s,r,o):i.onComplete(s,r,o);if(!s)return l}return!0}},Ra={};Ra.initUrl=function(){var e,t={server_url:{project:"",host:""},page_url:{host:"",pathname:""}};if(!se(Vi.para.server_url))return Ne("----vcollect---server_url\u5fc5\u987b\u4e3a\u6709\u6548 URL \u5b57\u7b26\u4e32"),!1;try{e=g(Vi.para.server_url),t.server_url.project=e.searchParams.get("project")||"default",t.server_url.host=e.host}catch(r){return Ne("----vcollect---server_url\u89e3\u6790\u5f02\u5e38",r),!1}var n;try{n=g(location.href),t.page_url.host=n.hostname,t.page_url.pathname=n.pathname}catch(r){return Ne("----vcollect---\u9875\u9762\u5730\u5740\u89e3\u6790\u5f02\u5e38",r),!1}return t},Ra.isDiv=function(e){if(e.element_path){var t=e.element_path.split(">"),r=d(t.pop());if("div"!==r.slice(0,3))return!1}return!0},Ra.configIsMatchNew=function(e,t){if(p(e.$element_selector)&&p(t.element_selector)){if("element_selector"===t.element_field&&"equal"===t["function"])return e.$element_selector===t.element_selector;if("element_selector"===t.element_field&&"contain"===t["function"])return e.$element_selector.indexOf(t.element_selector)>-1}if(p(e.$element_path)&&p(t.element_path)){if("element_path"===t.element_field&&"equal"===t["function"])return e.$element_path===t.element_path;if("element_path"===t.element_field&&"contain"===t["function"])return e.$element_path.indexOf(t.element_path)>-1}return!1},Ra.configIsMatch=function(e,t){return(!t.limit_element_content||t.element_content===e.$element_content)&&(!t.limit_element_position||t.element_position===String(e.$element_position))&&(t.element_field&&t["function"]?Ra.configIsMatchNew(e,t):Ra.configIsMatchOldVersion(e,t))},Ra.configIsMatchOldVersion=function(e,t){if(!t.element_path)return!1;if(void 0!==e.$element_position){if(t.element_path!==e.$element_path)return!1}else if(Ra.isDiv({element_path:t.element_path})){if(e.$element_path.indexOf(t.element_path)<0)return!1}else if(t.element_path!==e.$element_path)return!1;return!0},Ra.filterConfig=function(e,t,n){var i=[];if(!n){var a=Ra.initUrl();if(!a)return[];n=a.page_url}return"$WebClick"===e.event&&k(t,function(t){r(t)&&("webclick"===t.event_type||"appclick"===t.event_type)&&r(t.event)&&t.event.url_host===n.host&&t.event.url_path===n.pathname&&Ra.configIsMatch(e.properties,t.event)&&i.push(t)}),i},Ra.getPropElInLi=function(e,t){if(!(e&&_(e)&&p(t)))return null;if("li"!==e.tagName.toLowerCase())return null;var r,n=Vi.heatmap.getDomSelector(e);if(n){r=n+t;var i=J(r);return i?i:null}return je("----custom---\u83b7\u53d6\u540c\u7ea7\u5c5e\u6027\u5143\u7d20\u5931\u8d25\uff0cselector\u4fe1\u606f\u5f02\u5e38",n,t),null},Ra.getProp=function(e,t){if(!r(e))return!1;if(!(p(e.name)&&e.name.length>0))return je("----vcustom----\u5c5e\u6027\u540d\u4e0d\u5408\u6cd5,\u5c5e\u6027\u629b\u5f03",e.name),!1;var n,i,a={};if("content"===e.method){var o;if(p(e.element_selector)&&e.element_selector.length>0)o=J(e.element_selector);else{if(!t||!p(e.list_selector))return je("----vcustom----\u5c5e\u6027\u914d\u7f6e\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03",e.name),!1;var s=J(t.properties.$element_selector);if(!s)return je("----vcustom----\u70b9\u51fb\u5143\u7d20\u83b7\u53d6\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03",e.name),!1;var l=Vi.heatmap.getClosestLi(s);o=Ra.getPropElInLi(l,e.list_selector)}if(!o||!_(o))return je("----vcustom----\u5c5e\u6027\u5143\u7d20\u83b7\u53d6\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03",e.name),!1;if("input"===o.tagName.toLowerCase())n=o.value||"";else if("select"===o.tagName.toLowerCase()){var u=o.selectedIndex;ce(u)&&_(o[u])&&(n=Xe(o[u],"select"))}else n=Xe(o,o.tagName.toLowerCase());if(e.regular){try{i=new RegExp(e.regular).exec(n)}catch(c){return je("----vcustom----\u6b63\u5219\u5904\u7406\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03",e.name),!1}if(null===i)return je("----vcustom----\u5c5e\u6027\u89c4\u5219\u5904\u7406\uff0c\u672a\u5339\u914d\u5230\u7ed3\u679c,\u5c5e\u6027\u629b\u5f03",e.name),!1;if(!v(i)||!p(i[0]))return je("----vcustom----\u6b63\u5219\u5904\u7406\u5f02\u5e38\uff0c\u5c5e\u6027\u629b\u5f03",e.name,i),!1;n=i[0]}if("STRING"===e.type)a[e.name]=n;else if("NUMBER"===e.type){if(n.length<1)return je("----vcustom----\u672a\u83b7\u53d6\u5230\u6570\u5b57\u5185\u5bb9\uff0c\u5c5e\u6027\u629b\u5f03",e.name,n),!1;if(isNaN(Number(n)))return je("----vcustom----\u6570\u5b57\u7c7b\u578b\u5c5e\u6027\u8f6c\u6362\u5931\u8d25\uff0c\u5c5e\u6027\u629b\u5f03",e.name,n),!1;a[e.name]=Number(n)}return a}return Ne("----vcustom----\u5c5e\u6027\u4e0d\u652f\u6301\u6b64\u83b7\u53d6\u65b9\u5f0f",e.name,e.method),!1},Ra.getAssignConfigs=function(e,t){var n=Ra.initUrl();if(!n||!n.page_url)return[];if(!r(t))return[];var i=[];return t.events=t.events||t.eventList,v(t.events)&&t.events.length>0?(k(t.events,function(t){r(t)&&r(t.event)&&t.event.url_host===n.page_url.host&&t.event.url_path===n.page_url.pathname&&e(t)&&i.push(t)}),i):[]};var Ha={events:[],getAssignConfigs:Ra.getAssignConfigs,filterConfig:Ra.filterConfig,getProp:Ra.getProp,initUrl:Ra.initUrl,updateEvents:function(e){v(e)&&(this.events=e)},init:function(){this.initAppGetPropsBridge()},geth5Props:function(e){var t={},n=[],i=this;if(!this.events.length)return{};if("$WebClick"===e.event){var a=this.filterConfig(e,this.events);if(!a.length)return{};k(a,function(a){r(a)&&(v(a.properties)&&a.properties.length>0&&k(a.properties,function(n){if(r(n))if(n.h5===!1)v(t.sensorsdata_app_visual_properties)||(t.sensorsdata_app_visual_properties=[]),t.sensorsdata_app_visual_properties.push(n);else{var a=i.getProp(n,e);r(a)&&(t=P(t,a))}}),p(a.event_name)&&n.push(a.event_name))}),Vi.bridge.hasVisualModeBridge()&&(t.sensorsdata_web_visual_eventName=n)}return t.sensorsdata_app_visual_properties&&(t.sensorsdata_app_visual_properties=N(JSON.stringify(t.sensorsdata_app_visual_properties))),t},initAppGetPropsBridge:function(){var e=this,t=new Vi.SDKJSBridge("getJSVisualProperties");return t.onAppNotify(function(n){var i={};try{n=JSON.parse(j(n))}catch(a){Ne("getJSVisualProperties data parse error!")}if(r(n)){var o=n.sensorsdata_js_visual_properties,s=e.initUrl();s&&(s=s.page_url,v(o)&&o.length>0&&k(o,function(t){if(r(t)&&t.url_host===s.host&&t.url_path===s.pathname&&t.h5){var n=e.getProp(t);r(n)&&(i=P(i,n))}}))}var l=Vi.bridge.bridge_info.platform;return"android"===l&&t.notifyApp({data:i},n.message_id),i}),t}},Ba={events:[],customProp:Ha,getAssignConfigs:Ra.getAssignConfigs,initUrl:Ra.initUrl,init:function(){if(this.initUrl()){var e=this.getConfigFromApp();e&&this.updateConfigs(e),this.customProp.init(),this.initAppUpdateConfigBridge()}},initAppUpdateConfigBridge:function(){var e=this;return new Vi.SDKJSBridge("updateH5VisualConfig").onAppNotify(function(t){if(t){try{t=JSON.parse(j(t))}catch(r){return void Ne("updateH5VisualConfig result parse error\uff01")}e.updateConfigs(t)}})},getConfigFromApp:function(){var e=new Vi.SDKJSBridge("sensorsdata_get_app_visual_config").notifyApp();if(e)try{e=JSON.parse(j(e))}catch(t){e=null,Ne("getAppVisualConfig result parse error\uff01")}return e},updateConfigs:function(e){this.events=this.filterConfigs(e),this.customProp.updateEvents(this.events)},filterConfigs:function(e){return this.getAssignConfigs(function(e){return!(!r(e)||e.h5===!1)},e)}},Ja={events:[],init:function(e){this.filterWebClickEvents(e)},filterWebClickEvents:function(e){this.events=qa.getAssignConfigs(function(e){return!(!r(e)||e.event.unlimited_div!==!0||"webclick"!==e.event_type)},e)},isTargetEle:function(e){var t=Vi.heatmap.getEleDetail(e);if(!r(t)||!p(t.$element_path))return!1;for(var n=0;n<this.events.length;n++)if(r(this.events[n])&&r(this.events[n].event)&&qa.configIsMatch(t,this.events[n].event))return!0;return!1}},Ma={events:[],configSwitch:!1,collectAble:function(){return this.configSwitch&&r(Vi.para.heatmap)&&Vi.para.heatmap.get_vtrack_config},updateEvents:function(e){this.events=qa.getAssignConfigs(function(e){return!!(r(e)&&v(e.properties)&&e.properties.length>0)},e),this.events.length?this.configSwitch=!0:this.configSwitch=!1},getVtrackProps:function(e){var t={};return this.collectAble()?("$WebClick"===e.event&&(t=this.clickCustomPropMaker(e,this.events)),t):{}},clickCustomPropMaker:function(e,t,n){var i=this;n=n||this.filterConfig(e,t,qa.url_info.page_url);var a={};return n.length?(k(n,function(t){v(t.properties)&&t.properties.length>0&&k(t.properties,function(t){var n=i.getProp(t,e);r(n)&&P(a,n)})}),a):{}},getProp:Ra.getProp,getPropElInLi:Ra.getPropElInLi,filterConfig:Ra.filterConfig},qa={unlimitedDiv:Ja,config:{},storageEnable:!0,storage_name:"webjssdkvtrackcollect",para:{session_time:18e5,timeout:5e3,update_interval:18e5},url_info:{},timer:null,update_time:null,customProp:Ma,initUrl:function(){var e=Ra.initUrl();if(e){var t;try{t=new f(Vi.para.server_url),t._values.Path="/config/visualized/Web.conf",e.api_url=t.getUrl()}catch(r){return Ne("----vtrackcollect---API\u5730\u5740\u89e3\u6790\u5f02\u5e38",r),!1}this.url_info=e}return e},init:function(){if(!r(Vi.para.heatmap)||!Vi.para.heatmap.get_vtrack_config)return!1;if(Xi.isSupport()||(this.storageEnable=!1),!this.initUrl())return Ne("----vtrackcustom----\u521d\u59cb\u5316\u5931\u8d25\uff0curl\u4fe1\u606f\u89e3\u6790\u5931\u8d25"),!1;if(this.storageEnable){var e=xa.readObjectVal(this.storage_name);if(r(e)&&r(e.data))if(this.serverUrlIsSame(e.serverUrl)){this.config=e.data,this.update_time=e.updateTime,this.updateConfig(e.data);var t=(new Date).getTime(),n=t-this.update_time;if(ce(n)&&n>0&&n<this.para.session_time){var i=this.para.update_interval-n;this.setNextFetch(i)}else this.getConfigFromServer()}else this.getConfigFromServer();else this.getConfigFromServer()}else this.getConfigFromServer();this.pageStateListenner()},serverUrlIsSame:function(e){return!!r(e)&&e.host===this.url_info.server_url.host&&e.project===this.url_info.server_url.project},getConfigFromServer:function(){var e=this,t=function(t,n){e.update_time=(new Date).getTime();var i={};200===t?n&&r(n)&&"Web"===n.os&&(i=n,e.updateConfig(i)):205===t?e.updateConfig(i):304===t?i=e.config:(Ne("----vtrackcustom----\u6570\u636e\u5f02\u5e38",t),e.updateConfig(i)),e.updateStorage(i),e.setNextFetch()},n=function(t){e.update_time=(new Date).getTime(),Ne("----vtrackcustom----\u914d\u7f6e\u62c9\u53d6\u5931\u8d25",t),e.setNextFetch()};this.sendRequest(t,n)},setNextFetch:function(e){var t=this;this.timer&&(clearTimeout(this.timer),this.timer=null),e=e||this.para.update_interval,this.timer=setTimeout(function(){t.getConfigFromServer()},e)},pageStateListenner:function(){var e=this;ge({visible:function(){var t=(new Date).getTime(),r=t-e.update_time;if(ce(r)&&r>0&&r<e.para.update_interval){var n=e.para.update_interval-r;e.setNextFetch(n)}else e.getConfigFromServer()},hidden:function(){e.timer&&(clearTimeout(e.timer),e.timer=null)}})},updateConfig:function(e){return!!r(e)&&(this.config=e,this.customProp.updateEvents(e),void this.unlimitedDiv.init(e))},updateStorage:function(e){if(!this.storageEnable)return!1;if(!r(e))return!1;var t;if(this.url_info.server_url)t=this.url_info.server_url;else{var n=qa.initUrl();if(!n)return!1;t=n.server_url}var i={updateTime:(new Date).getTime(),data:e,serverUrl:t};xa.saveObjectVal(this.storage_name,i)},sendRequest:function(e,t){var r=this,n={app_id:this.url_info.page_url.host};this.config.version&&(n.v=this.config.version),fe({url:r.url_info.api_url,
callbackName:"saJSSDKVtrackCollectConfig",data:n,timeout:r.para.timeout,success:function(t,r){e(t,r)},error:function(e){t(e)}})},getAssignConfigs:Ra.getAssignConfigs,configIsMatch:Ra.configIsMatch},Ka={basicProps:{priority:0,entry:dt},formatData:{priority:0,entry:ct},finalAdjustData:{priority:0,entry:pt}},Fa={stage:null,init:function(e){this.stage=e},interceptor:Ka},Va={};Va.check=rt,Va.sendItem=function(e){var t={lib:{$lib:"js",$lib_method:"code",$lib_version:String(Vi.lib_version)},time:1*new Date};P(t,e),gt(t),Vi.kit.sendData(t)},Va.send=function(e,t){var r=Vi.kit.buildData(e);Vi.kit.sendData(r,t)};var Wa={stage:null,init:function(e){this.stage=e}},za={label:!1,li:!1,a:!0,button:!0},Xa={otherTags:[],initUnlimitedTags:function(){k(Xa.otherTags,function(e){e in za&&(za[e]=!0)})},isUnlimitedTag:function(e){if(!e||1!==e.nodeType)return!1;var t=e.nodeName.toLowerCase();return za[t]||Y(e,Vi.para.heatmap.track_attr)},getTargetElement:function(e,t){var r=this,n=e;if("object"!=typeof n)return null;if("string"!=typeof n.tagName)return null;var i=n.tagName.toLowerCase();if("body"===i.toLowerCase()||"html"===i.toLowerCase())return null;if(!n||!n.parentNode||!n.parentNode.children)return null;var a=n.parentNode,o=r.otherTags;if("a"===i||"button"===i||"input"===i||"textarea"===i)return n;if(re(o,i)>-1)return n;if("area"===i&&"map"===a.tagName.toLowerCase()&&y(a).prev().tagName&&"img"===y(a).prev().tagName.toLowerCase())return y(a).prev();if("div"===i&&Vi.para.heatmap.collect_tags.div&&r.isDivLevelValid(n)){var s=Vi.para.heatmap&&Vi.para.heatmap.collect_tags&&Vi.para.heatmap.collect_tags.div&&Vi.para.heatmap.collect_tags.div.max_level||1;if(s>1||r.isCollectableDiv(n))return n}if(r.isStyleTag(i)&&Vi.para.heatmap.collect_tags.div){var l=r.getCollectableParent(n);if(l&&r.isDivLevelValid(l))return l}var u=r.hasElement({event:t&&t.originalEvent||t,element:e},function(e){return r.isUnlimitedTag(e)});return u||null},getDivLevels:function(e,t){var r=Xa.getElementPath(e,!0,t),n=r.split(" > "),i=0;return k(n,function(e){"div"===e&&i++}),i},isDivLevelValid:function(e){for(var t=Vi.para.heatmap&&Vi.para.heatmap.collect_tags&&Vi.para.heatmap.collect_tags.div&&Vi.para.heatmap.collect_tags.div.max_level||1,r=e.getElementsByTagName("div"),n=r.length-1;n>=0;n--)if(Xa.getDivLevels(r[n],e)>t)return!1;return!0},getElementPath:function(e,t,r){for(var n=[];e.parentNode&&_(e);){if(e.id&&!t&&/^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)){n.unshift(e.tagName.toLowerCase()+"#"+e.id);break}if(r&&e===r){n.unshift(e.tagName.toLowerCase());break}if(e===document.body){n.unshift("body");break}n.unshift(e.tagName.toLowerCase()),e=e.parentNode}return n.join(" > ")},getClosestLi:function(t){var r=function(t,r){for(;t&&t!==document&&1===t.nodeType;t=t.parentNode)if(t.tagName&&e(t.tagName.toLowerCase)&&t.tagName.toLowerCase()===r)return t;return null};return r(t,"li")},getElementPosition:function(e,t,r){function n(e){var t=e.parentNode;if(!t)return"";var r=y(e).getSameTypeSiblings(),n=r.length;if(1===n)return 0;for(var i=0,a=e;y(a).previousElementSibling().ele;a=y(a).previousElementSibling().ele,i++);return i}var i=Vi.heatmap.getClosestLi(e);if(!i||!_(e))return null;var a=e.tagName.toLowerCase(),o=i.getElementsByTagName(a),s=o.length,l=[];if(s>1){for(var u=0;u<s;u++){var c=Vi.heatmap.getElementPath(o[u],r);c===t&&l.push(o[u])}if(l.length>1)return re(l,e)}return n(i)},setNotice:function(e){Vi.is_heatmap_render_mode=!0,Vi.para.heatmap||(Vi.errorMsg="\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"),e&&"http:"===e.slice(0,5)&&"https:"===location.protocol&&(Vi.errorMsg="\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"),Vi.para.heatmap_url||(Vi.para.heatmap_url=ht()+"//static.sensorsdata.cn/sdk/"+Vi.lib_version+"/heatmap.min.js")},getDomIndex:function(e){if(!e.parentNode)return-1;for(var t=0,r=e.tagName,n=e.parentNode.children,i=0;i<n.length;i++)if(n[i].tagName===r){if(e===n[i])return t;t++}return-1},selector:function(e,t){var r=e.parentNode&&9==e.parentNode.nodeType?-1:this.getDomIndex(e);return e.getAttribute&&e.getAttribute("id")&&/^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id"))&&(!Vi.para.heatmap||Vi.para.heatmap&&"not_use_id"!==Vi.para.heatmap.element_selector)&&!t?"#"+e.getAttribute("id"):e.tagName.toLowerCase()+(~r?":nth-of-type("+(r+1)+")":"")},getDomSelector:function(e,t,r){if(!e||!e.parentNode||!e.parentNode.children)return!1;t=t&&t.join?t:[];var n=e.nodeName.toLowerCase();return e&&"body"!==n&&1==e.nodeType?(t.unshift(this.selector(e,r)),e.getAttribute&&e.getAttribute("id")&&/^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id"))&&Vi.para.heatmap&&"not_use_id"!==Vi.para.heatmap.element_selector&&!r?t.join(" > "):this.getDomSelector(e.parentNode,t,r)):(t.unshift("body"),t.join(" > "))},na:function(){var e=document.documentElement.scrollLeft||window.pageXOffset;return parseInt(isNaN(e)?0:e,10)},i:function(){var e=0;try{e=o.documentElement&&o.documentElement.scrollTop||m.pageYOffset,e=isNaN(e)?0:e}catch(t){e=0}return parseInt(e,10)},getBrowserWidth:function(){var e=window.innerWidth||document.body.clientWidth;return isNaN(e)?0:parseInt(e,10)},getBrowserHeight:function(){var e=window.innerHeight||document.body.clientHeight;return isNaN(e)?0:parseInt(e,10)},getScrollWidth:function(){var e=parseInt(document.body.scrollWidth,10);return isNaN(e)?0:e},getEleDetail:function(e){var t=this.getDomSelector(e),r=We({target:e});r.$element_selector=t?t:"",r.$element_path=Vi.heatmap.getElementPath(e,Vi.para.heatmap&&"not_use_id"===Vi.para.heatmap.element_selector);var n=Vi.heatmap.getElementPosition(e,r.$element_path,Vi.para.heatmap&&"not_use_id"===Vi.para.heatmap.element_selector);return ce(n)&&(r.$element_position=n),r},getPointerEventProp:function(e,t){function r(){var e=document.body.scrollLeft||document.documentElement.scrollLeft||0,t=document.body.scrollTop||document.documentElement.scrollTop||0;return{scrollLeft:e,scrollTop:t}}function n(e){if(document.documentElement.getBoundingClientRect){var t=e.getBoundingClientRect();return{targetEleX:t.left+r().scrollLeft||0,targetEleY:t.top+r().scrollTop||0}}}function i(e){return Number(Number(e).toFixed(3))}function a(e){var a=e.pageX||e.clientX+r().scrollLeft||e.offsetX+n(t).targetEleX||0,o=e.pageY||e.clientY+r().scrollTop||e.offsetY+n(t).targetEleY||0;return{$page_x:i(a),$page_y:i(o)}}return e?a(e):{}},start:function(t,n,i,a,o){if(r(Vi.para.heatmap)&&e(Vi.para.heatmap.collect_element)&&!Vi.para.heatmap.collect_element(n))return!1;var s=Xa.getBasicEleInfo(t,n,i,a,o);mt(s)},getBasicEleInfo:function(t,n,i,a,o){var s=r(a)?a:{},l=e(o)?o:e(a)?a:void 0,u=this.getEleDetail(n);if(Vi.para.heatmap&&Vi.para.heatmap.custom_property){var c=Vi.para.heatmap.custom_property(n);r(c)&&(u=P(u,c))}return u=P(u,this.getPointerEventProp(t,n),s),{event:t,target:n,props:u,tagName:i,callback:l}},hasElement:function(e,t){var r;if(e.event){var n=e.event;r=n.path||n._getPath&&n._getPath()}else e.element&&(r=y(e.element).getParents());if(r&&v(r)&&r.length>0)for(var i=0;i<r.length;i++)if("object"==typeof r[i]&&1===r[i].nodeType&&t(r[i]))return r[i]},isStyleTag:function(e,t){var n=["a","div","input","button","textarea"],i=["mark","/mark","strong","b","em","i","u","abbr","ins","del","s","sup"];return!(re(n,e)>-1)&&(!t||Vi.para.heatmap&&Vi.para.heatmap.collect_tags&&Vi.para.heatmap.collect_tags.div?!!(r(Vi.para.heatmap)&&r(Vi.para.heatmap.collect_tags)&&r(Vi.para.heatmap.collect_tags.div)&&v(Vi.para.heatmap.collect_tags.div.ignore_tags)&&re(Vi.para.heatmap.collect_tags.div.ignore_tags,e)>-1):re(i,e)>-1)},isCollectableDiv:function(e,t){try{if(0===e.children.length)return!0;for(var r=0;r<e.children.length;r++)if(1===e.children[r].nodeType){var n=e.children[r].tagName.toLowerCase(),i=Vi.para&&Vi.para.heatmap&&Vi.para.heatmap.collect_tags&&Vi.para.heatmap.collect_tags.div&&Vi.para.heatmap.collect_tags.div.max_level;if(!("div"===n&&i>1||this.isStyleTag(n,t)))return!1;if(!this.isCollectableDiv(e.children[r],t))return!1}return!0}catch(a){Ne("isCollectableDiv:"+a)}return!1},getCollectableParent:function(e,t){try{var r=e.parentNode,n=r?r.tagName.toLowerCase():"";if("body"===n)return!1;var i=Vi.para&&Vi.para.heatmap&&Vi.para.heatmap.collect_tags&&Vi.para.heatmap.collect_tags.div&&Vi.para.heatmap.collect_tags.div.max_level;if(n&&"div"===n&&(i>1||this.isCollectableDiv(r,t)))return r;if(r&&this.isStyleTag(n,t))return this.getCollectableParent(r,t)}catch(a){Ne("getCollectableParent:"+a)}return!1},listenUrlChange:function(e){e(),Vi.ee.spa.on("switch",function(){e()})},initScrollmap:function(){if(!r(Vi.para.heatmap)||"default"!==Vi.para.heatmap.scroll_notice_map)return!1;var t=!0;Vi.para.scrollmap&&e(Vi.para.scrollmap.collect_url)&&this.listenUrlChange(function(){t=!!Vi.para.scrollmap.collect_url()});var n=function(e){var t={};return t.timeout=e.timeout||1e3,t.func=e.func,t.hasInit=!1,t.inter=null,t.main=function(e,t){this.func(e,t),this.inter=null},t.go=function(e){var r={};this.inter||(r.$viewport_position=document.documentElement&&document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0,r.$viewport_position=Math.round(r.$viewport_position)||0,e?t.main(r,!0):this.inter=setTimeout(function(){t.main(r)},this.timeout))},t},i=n({timeout:1e3,func:function(e,t){var r=document.documentElement&&document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0,n=new Date,i=n-this.current_time;(i>Vi.para.heatmap.scroll_delay_time&&r-e.$viewport_position!==0||t)&&(e.$url=Z(),e.$title=document.title,e.$url_path=G(),e.event_duration=Math.min(Vi.para.heatmap.scroll_event_duration,parseInt(i)/1e3),e.event_duration=e.event_duration<0?0:e.event_duration,vt(e)),this.current_time=n}});i.current_time=new Date,He(window,"scroll",function(){return!!t&&void i.go()}),He(window,"unload",function(){return!!t&&void i.go("notime")})},initHeatmap:function(){var t=this,n=!0;return!(!r(Vi.para.heatmap)||"default"!==Vi.para.heatmap.clickmap)&&(e(Vi.para.heatmap.collect_url)&&this.listenUrlChange(function(){n=!!Vi.para.heatmap.collect_url()}),"all"===Vi.para.heatmap.collect_elements?Vi.para.heatmap.collect_elements="all":Vi.para.heatmap.collect_elements="interact",void("all"===Vi.para.heatmap.collect_elements?He(document,"click",function(e){if(!n)return!1;var r=e||window.event;if(!r)return!1;var i=r.target||r.srcElement;if("object"!=typeof i)return!1;if("string"!=typeof i.tagName)return!1;var a=i.tagName.toLowerCase();if("body"===a||"html"===a)return!1;if(!i||!i.parentNode||!i.parentNode.children)return!1;var o=i.parentNode.tagName.toLowerCase();"a"===o||"button"===o?t.start(r,i.parentNode,o):t.start(r,i,a)}):He(document,"click",function(e){if(!n)return!1;var i=e||window.event;if(!i)return!1;var a=i.target||i.srcElement,o=Vi.heatmap.getTargetElement(a,e);o?t.start(i,o,o.tagName.toLowerCase()):_(a)&&"div"===a.tagName.toLowerCase()&&r(Vi.para.heatmap)&&Vi.para.heatmap.get_vtrack_config&&Ja.events.length>0&&Ja.isTargetEle(a)&&t.start(i,a,a.tagName.toLowerCase(),{$lib_method:"vtrack"})})))}},Za={autoTrackIsUsed:!1,isReady:function(t){return e(t)?void t():void Vi.log("error: isReady callback must be function")},getUtm:function(){return wa.campaignParams()},getStayTime:function(){return(new Date-Vi._t)/1e3},setProfileLocal:function(e){if(!Xi.isSupport())return Vi.setProfile(e),!1;if(!r(e)||oe(e))return!1;var t=xa.readObjectVal("sensorsdata_2015_jssdk_profile"),n=!1;if(r(t)&&!oe(t)){for(var i in e)!(i in t&&t[i]!==e[i])&&i in t||(t[i]=e[i],n=!0);n&&(xa.saveObjectVal("sensorsdata_2015_jssdk_profile",t),Vi.setProfile(e))}else xa.saveObjectVal("sensorsdata_2015_jssdk_profile",e),Vi.setProfile(e)},setInitReferrer:function(){var e=$e();Vi.setOnceProfile({_init_referrer:e,_init_referrer_host:wa.pageProp.referrer_host})},setSessionReferrer:function(){var e=$e();xa.setSessionPropsOnce({_session_referrer:e,_session_referrer_host:wa.pageProp.referrer_host})},setDefaultAttr:function(){wa.register({_current_url:location.href,_referrer:$e(),_referring_host:wa.pageProp.referrer_host})},trackHeatMap:function(e,t,r){if("object"==typeof e&&e.tagName&&_(e.parentNode)){var n=e.tagName.toLowerCase(),i=e.parentNode.tagName.toLowerCase(),a=Vi.para.heatmap&&Vi.para.heatmap.track_attr?Vi.para.heatmap.track_attr:["data-sensors-click"];"button"===n||"a"===n||"a"===i||"button"===i||"input"===n||"textarea"===n||Y(e,a)||Xa.start(null,e,n,t,r)}},trackAllHeatMap:function(e,t,r){if("object"==typeof e&&e.tagName){var n=e.tagName.toLowerCase();Xa.start(null,e,n,t,r)}},autoTrackSinglePage:function(e,t){function n(e,t){Vi.track("$pageview",P({$referrer:i,$url:Z(),$url_path:G(),$title:document.title},e,yt()),t),i=Z()}var i;i=this.autoTrackIsUsed?wa.pageProp.url:wa.pageProp.referrer,e=r(e)?e:{};var a=!e.not_set_profile;e.not_set_profile&&delete e.not_set_profile,n(e,t),this.autoTrackSinglePage=n,bt(Vi.setOnceProfile,!1,a)},autoTrackWithoutProfile:function(e,t){e=r(e)?e:{},this.autoTrack(P(e,{not_set_profile:!0}),t)},autoTrack:function(e,t){e=r(e)?e:{};var n=yt(),i=!e.not_set_profile;e.not_set_profile&&delete e.not_set_profile;var a=location.href;Vi.para.is_single_page&&w(function(){var r=$e(a,!0);Vi.track("$pageview",P({$referrer:r,$url:Z(),$url_path:G(),$title:document.title},n,e),t),a=Z()}),Vi.track("$pageview",P({$referrer:$e(null,!0),$url:Z(),$url_path:G(),$title:document.title},n,e),t),bt(Vi.setOnceProfile,!0,i),this.autoTrackIsUsed=!0},getAnonymousID:function(){return oe(xa._state)?"SDK is not initialized.":xa._state._first_id||xa._state.first_id||xa._state._distinct_id||xa._state.distinct_id},setPlugin:function(t){return!!r(t)&&void k(t,function(t,n){e(t)&&(r(window.SensorsDataWebJSSDKPlugin)&&window.SensorsDataWebJSSDKPlugin[n]?t(window.SensorsDataWebJSSDKPlugin[n]):r(Vi.modules)&&Vi.modules[n]?t(window.SensorsDataWebJSSDKPlugin[n]):je(n+"is not found,please check sensorsdata documents."))})},useModulePlugin:function(){Vi.use.apply(Vi,arguments)},useAppPlugin:function(){this.setPlugin.apply(this,arguments)}},Ga={state:0,historyState:[],stateType:{1:"1-init\u672a\u5f00\u59cb",2:"2-init\u5f00\u59cb",3:"3-store\u5b8c\u6210"},getState:function(){return this.historyState.join("\n")},setState:function(e){String(e)in this.stateType&&(this.state=e),this.historyState.push(this.stateType[e])}},Qa=1,Ya={__proto__:null,setInitVar:Pt,initPara:Ct,quick:Ot,use:jt,track:Nt,bind:Tt,unbind:It,trackLink:At,trackLinks:Dt,setItem:$t,deleteItem:xt,setProfile:Et,setOnceProfile:Lt,appendProfile:Ut,incrementProfile:Rt,deleteProfile:Ht,unsetProfile:Bt,identify:Jt,resetAnonymousIdentity:Mt,trackSignup:Kt,registerPage:Ft,clearAllRegister:Vt,clearPageRegister:Wt,register:zt,registerOnce:Xt,registerSession:Zt,registerSessionOnce:Gt,login:Qt,loginWithKey:Yt,logout:er,getPresetProperties:tr,readyState:Ga,debug:ba,on:et,log:Oe};zi.setup(Oe);var eo=P({},ua,Da),to={bridge_info:{touch_app_bridge:!1,verify_success:!1,platform:"",support_two_way_call:!1},is_verify_success:!1,initPara:function(){var e={is_send:Vi.para.use_app_track_is_send!==!1&&"only"!==Vi.para.use_app_track,white_list:[],is_mui:"mui"===Vi.para.use_app_track};"object"==typeof Vi.para.app_js_bridge?Vi.para.app_js_bridge=P({},e,Vi.para.app_js_bridge):Vi.para.use_app_track!==!0&&Vi.para.app_js_bridge!==!0&&"only"!==Vi.para.use_app_track&&"mui"!==Vi.para.use_app_track||(Vi.para.app_js_bridge=P({},e)),Vi.para.app_js_bridge.is_send===!1&&je("\u8bbe\u7f6e\u4e86 is_send:false,\u5982\u679c\u6253\u901a\u5931\u8d25\uff0c\u6570\u636e\u5c06\u88ab\u4e22\u5f03!")},app_js_bridge_v1:function(){function e(e){n=e,ue(n)&&(n=JSON.parse(n)),i&&(i(n),i=null,n=null)}function t(){"object"==typeof window.SensorsData_APP_JS_Bridge&&window.SensorsData_APP_JS_Bridge.sensorsdata_call_app&&(n=window.SensorsData_APP_JS_Bridge.sensorsdata_call_app(),ue(n)&&(n=JSON.parse(n)))}function r(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){var e=document.createElement("iframe");e.setAttribute("src","sensorsanalytics://getAppInfo"),document.documentElement.appendChild(e),e.parentNode.removeChild(e),e=null}}var n=null,i=null;window.sensorsdata_app_js_bridge_call_js=function(t){e(t)},Vi.getAppStatus=function(e){return r(),t(),e?void(null===n?i=e:(e(n),n=null)):n}},hasVisualModeBridge:function(){var e=window.SensorsData_App_Visual_Bridge,t="sensorsdata_visualized_mode";return r(e)&&e[t]&&(e[t]===!0||e[t]())},validateAppUrl:ar};nr.prototype.call=function(e,t){var r=this,i=(new Date).getTime().toString(16)+String(n()).replace(".","").slice(1,8);this.resultCbs[i]=r.resultCbs[i]||{result:null,callbacks:[]},this.timeoutCbs[i]=r.timeoutCbs[i]||{isTimeout:!1,callbacks:[]},e=e.data?e:{data:e},e.data.message_id=i;var a=P({callType:this.type},e);return t&&(this.timerId=setTimeout(function(){r.timeoutCbs[i].isTimeout=!0;for(var e in r.timeoutCbs[i].callbacks)r.timeoutCbs[i].callbacks[e].call(null),r.timeoutCbs[i].callbacks.splice(e,1)},t)),ir(a),{onResult:function(e){return r.resultCbs[i].result?(e(r.resultCbs[i].result),this):(!r.timeoutCbs[i].isTimeout&&r.resultCbs[i].callbacks.push(e),this)},onTimeout:function(e){return r.timeoutCbs[i].isTimeout?(e(),this):(!r.resultCbs[i].result&&r.timeoutCbs[i].callbacks.push(e),this)}}},nr.prototype.onAppNotify=function(e){this.appCallJsCallback=e},nr.prototype.notifyApp=function(e,t){var r=P({callType:this.type},e);return t&&(r.message_id=t),ir(r)},or.prototype={"double":function(){},getAppData:function(){},hasAppBridge:function(){return Vi.bridge.bridge_info.support_two_way_call},init:function(){},jsCallApp:function(){},requestToApp:function(t){this.bridge.call(t,t.timeout.time).onResult(function(r){e(t.callback)&&t.callback(r)}).onTimeout(function(){e(t.timeout.callback)&&t.timeout.callback()})}};var ro={isSeachHasKeyword:function(){return""!==V(location.href,"sa-request-id")&&("string"==typeof sessionStorage.getItem("sensors-visual-mode")&&sessionStorage.removeItem("sensors-visual-mode"),!0)},hasKeywordHandle:function(){var e=location.href,t=V(e,"sa-request-id")||null,r=V(e,"sa-request-type")||null,n=V(e,"sa-request-url")||null;if(Xa.setNotice(n),aa.isSupport())if(null!==n&&sessionStorage.setItem("sensors_heatmap_url",n),sessionStorage.setItem("sensors_heatmap_id",t),null!==r)"1"===r||"2"===r||"3"===r?sessionStorage.setItem("sensors_heatmap_type",r):r=null;else{var i=sessionStorage.getItem("sensors_heatmap_type");r=null!==i?i:null}this.isReady(t,r)},isReady:function(e,t,r){Vi.para.heatmap_url?_e({success:function(){setTimeout(function(){"undefined"!=typeof sa_jssdk_heatmap_render&&(sa_jssdk_heatmap_render(Vi,e,t,r),"object"==typeof console&&"function"==typeof console.log&&(Vi.heatmap_version&&Vi.heatmap_version===Vi.lib_version||je("heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!")))},0)},error:function(){},type:"js",url:Vi.para.heatmap_url}):Ne("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84")},isStorageHasKeyword:function(){return aa.isSupport()&&"string"==typeof sessionStorage.getItem("sensors_heatmap_id")},storageHasKeywordHandle:function(){Xa.setNotice(),ro.isReady(sessionStorage.getItem("sensors_heatmap_id"),sessionStorage.getItem("sensors_heatmap_type"),location.href)},isWindowNameHasKeyword:function(){try{var e=JSON.parse(window.name),t=p(e["sa-request-page-url"])?u(e["sa-request-page-url"]):null;return e["sa-request-id"]&&p(e["sa-request-id"])&&t===location.href}catch(r){return!1}},windowNameHasKeywordHandle:function(){function e(e){var r=t[e];return p(r)?u(r):null}var t=JSON.parse(window.name),r=e("sa-request-id"),n=e("sa-request-type"),i=e("sa-request-url");Xa.setNotice(i),aa.isSupport()&&(null!==i&&sessionStorage.setItem("sensors_heatmap_url",i),sessionStorage.setItem("sensors_heatmap_id",r),null!==n?"1"===n||"2"===n||"3"===n?sessionStorage.setItem("sensors_heatmap_type",n):n=null:n=null!==sessionStorage.getItem("sensors_heatmap_type")?sessionStorage.getItem("sensors_heatmap_type"):null),ro.isReady(r,n)}},no={isStorageHasKeyword:function(){return aa.isSupport()&&"string"==typeof sessionStorage.getItem("sensors-visual-mode")},isSearchHasKeyword:function(){return(lr("sa-visual-mode")===!0||"true"===lr("sa-visual-mode"))&&("string"==typeof sessionStorage.getItem("sensors_heatmap_id")&&sessionStorage.removeItem("sensors_heatmap_id"),!0)},loadVtrack:function(){_e({success:function(){},error:function(){},type:"js",url:Vi.para.vtrack_url?Vi.para.vtrack_url:ht()+"//static.sensorsdata.cn/sdk/"+Vi.lib_version+"/vtrack.min.js"})},messageListener:function(e){if(!e||!e.data||"sa-fe"!==e.data.source)return!1;if("v-track-mode"===e.data.type){if(e.data.data&&e.data.data.isVtrack)if(aa.isSupport()&&sessionStorage.setItem("sensors-visual-mode","true"),e.data.data.userURL&&location.href.match(/sa-visual-mode=true/)){var t=e.data.data.userURL;t&&(window.location.href=encodeURI(t))}else no.loadVtrack();window.removeEventListener("message",no.messageListener,!1)}},removeMessageHandle:function(){window.removeEventListener&&window.removeEventListener("message",no.messageListener,!1)},verifyVtrackMode:function(){window.addEventListener&&window.addEventListener("message",no.messageListener,!1),no.postMessage()},postMessage:function(){try{window.parent&&window.parent.postMessage&&window.parent.postMessage({source:"sa-web-sdk",type:"v-is-vtrack",data:{sdkversion:_a}},"*")}catch(e){Ne("\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u4e0d\u652f\u6301 postMessage API")}},notifyUser:function(){var e=function(t){return!(!t||!t.data||"sa-fe"!==t.data.source)&&void("v-track-mode"===t.data.type&&(t.data.data&&t.data.data.isVtrack&&alert("\u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\uff0c\u8bf7\u5347\u7ea7\u90e8\u7f72\u795e\u7b56\u6570\u636e\u6cbb\u7406"),window.removeEventListener("message",e,!1)))};window.addEventListener&&window.addEventListener("message",e,!1),no.postMessage()}},io=["setItem","deleteItem","getAppStatus","track","quick","register","registerPage","registerOnce","trackSignup","setProfile","setOnceProfile","appendProfile","incrementProfile","deleteProfile","unsetProfile","identify","resetAnonymousIdentity","login","logout","trackLink","clearAllRegister","clearPageRegister","bind","unbind","loginWithKey"],ao={track:function(e,t,r){},quick:function(e,t,r,n){},register:function(e){},registerPage:function(e){},registerOnce:function(e){},clearAllRegister:function(e){},trackSignup:function(e,t,r,n){},setProfile:function(e,t){},setOnceProfile:function(e,t){},appendProfile:function(e,t){},incrementProfile:function(e,t){},deleteProfile:function(e){},unsetProfile:function(e,t){},identify:function(e,t){},resetAnonymousIdentity:function(e){},login:function(e,t){},logout:function(e){},trackLink:function(e,t,r){},deleteItem:function(e,t){},setItem:function(e,t,r){},getAppStatus:function(e){},clearPageRegister:function(e){}};vr.prototype.process=function(e,t){if(!(e&&e in this.processDef))return void Ne("process ["+e+"] is not supported");var r=this.registeredInterceptors[e];if(r&&v(r)&&r.length>0)for(var n={current:0,total:r.length},i=new mr(t,n,Vi),a=0;a<r.length;a++)try{if(n.current=a+1,t=r[a].call(null,t,i)||t,i.cancellationToken.getCanceled())break;if(i.cancellationToken.getStopped())return}catch(o){Ne("interceptor error:"+o)}return this.processDef[e]&&this.processDef[e]in this.processDef&&(t=this.process(this.processDef[e],t)),t},vr.prototype.registerStageImplementation=function(t){t&&t.init&&e(t.init)&&(t.init(this),t.interceptor&&this.registerInterceptor(t.interceptor))},vr.prototype.registerInterceptor=function(t){if(t)for(var n in t){var i=t[n];if(i&&r(i)&&e(i.entry)){ce(i.priority)||(i.priority=Number.MAX_VALUE),this.registeredInterceptors[n]||(this.registeredInterceptors[n]=[]);var a=this.registeredInterceptors[n];i.entry.priority=i.priority,a.push(i.entry),a.sort(function(e,t){return e.priority-t.priority})}}};var oo={basicProps:"extendProps",extendProps:"formatData",formatData:"finalAdjustData",finalAdjustData:null},so=new vr(oo),lo={send:null},uo=new vr(lo),co={getUtmData:null,callSchema:null},po=new vr(co),fo={webClickEvent:null,webStayEvent:null},go=new vr(fo),_o={buildDataStage:function(e){e&&so.registerInterceptor(e)},businessStage:function(e){e&&po.registerInterceptor(e)},sendDataStage:function(e){e&&uo.registerInterceptor(e)},viewStage:function(e){e&&go.registerInterceptor(e)}},ho={stage:null,init:function(e){this.stage=e}},mo={stage:null,init:function(e){this.stage=e},interceptor:{send:{entry:function(e){return e}}}},vo={};vo.buildData=function(e){return ft(e)},vo.sendData=function(e,t){var r=qe(e.properties),n={origin_data:e,server_url:Vi.para.server_url,data:e,config:r||{},callback:t};Sr(n),Vi.log(e)},vo.encodeTrackData=function(e){return Qe(e)},vo.getUtmData=function(){return wr()};var yo={webClickEvent:{entry:function(e,t){var r=t.sensors;"a"===e.tagName&&r.para.heatmap&&r.para.heatmap.isTrackLink===!0?r.trackLink({event:e.event,target:e.target},"$WebClick",e.props):r.track("$WebClick",e.props,e.callback)}},webStayEvent:{entry:function(e,t){var r=t.sensors;r.track("$WebStay",e)}}},bo=window.sensors_data_pre_config,wo=!!eo.isObject(bo)&&bo.is_compliance_enabled;Vi.init=function(e){return Ca.sdk.emit("beforeInit"),!(Vi.readyState&&Vi.readyState.state&&Vi.readyState.state>=2)&&(wo&&(Or(!0),_r()),Ca.initSystemEvent(),Vi.setInitVar(),Vi.readyState.setState(2),Vi.initPara(e),Ca.sdk.emit("initPara"),Ca.sdk.emit("afterInitPara"),Ca.sdk.emit("initAPI"),Ca.sdk.emit("afterInitAPI"),Vi.detectMode(),rr(),Ca.sdk.emit("afterInit"),void Ca.sdk.emit("ready"))},wo?Or(!1):(Or(!0),_r());var So,ko,Po,Co,Oo,jo,No,To,Io,Ao,Do,$o,xo,Eo,Lo,Uo,Ro,Ho,Bo="1.26.2",Jo={init:function(e){var t=e._.isString,r=e._.rot13defs,n=e._.dfmapping,i="data:enc;",a="dfm-enc-";e.ee.sdk.on("afterInitPara",function(){e.kit.userEncrypt=function(e){return a+n(e)},e.kit.userDecrypt=function(e){return 0===e.indexOf(i)?(e=e.substring(i.length),e=r(e)):0===e.indexOf(a)&&(e=e.substring(a.length),e=n(e)),e},e.kit.userDecryptIfNeeded=function(r){return!t(r)||0!==r.indexOf(i)&&0!==r.indexOf(a)||(r=e.kit.userDecrypt(r)),r}})},plugin_name:"UserEncryptDefault"},Mo=Tr(Jo),qo="1.26.2",Ko={sd:null,init:function(e){if(this.sd)return!1;if(this.sd=e,!this.sd||!this.sd._)return!1;var t=this.sd._.cookie.get("sensors_amp_id"),r=this.sd.store._state.distinct_id;if(t&&t.length>0){var n="amp-"===t.slice(0,4);if(t!==r){if(!n)return!1;this.sd.store._state.first_id?(this.sd.identify(t,!0),this.sd.saEvent.send({original_id:t,distinct_id:r,type:"track_signup",event:"$SignUp",properties:{}},null),this.setAmpId(r)):this.sd.identify(t,!0)}}else this.setAmpId(r);this.addListener()},addListener:function(){var e=this;this.sd.events.on("changeDistinctId",function(t){e.setAmpId(t)}),this.sd.events.isReady()},setAmpId:function(e){this.sd._.cookie.set("sensors_amp_id",e)}},Fo=Dr(Ko,"Amp","sdkReady"),Vo=window.SensorsData_App_Visual_Bridge,Wo=Vo&&Vo.sensorsdata_visualized_mode,zo=Vo&&Vo.sensorsdata_visualized_alert_info,Xo=Vo&&Vo.sensorsdata_hover_web_nodes,Zo={isVerify:function(){return Wo&&(Wo===!0||Wo.call(Vo))},commands:{app_alert:$r,visualized_track:xr,page_info:xr,sensorsdata_get_app_visual_config:Er}},Go="1.26.2",Qo={init:function(e){Co=e,Oo=Co&&Co._,jo=Co&&Co.log||console&&console.log||function(){},Hr()},handleCommand:Jr},Yo=Rr(Qo,"AndroidBridge","sdkAfterInitPara"),es=window.SensorsData_App_Visual_Bridge,ts=es&&es.sensorsdata_visualized_mode,rs=es&&es.sensorsdata_visualized_alert_info,ns=es&&es.sensorsdata_hover_web_nodes,is={isVerify:function(){return ts&&(ts===!0||ts.call(es))},commands:{app_alert:Mr,visualized_track:qr,page_info:qr,sensorsdata_get_app_visual_config:Kr}},as="1.26.2",os={init:function(e){Do=e,$o=Do&&Do._,xo=Do&&Do.log||console&&console.log||function(){},zr()},handleCommand:Zr},ss=Wr(os,"AndroidObsoleteBridge","sdkAfterInitPara"),ls="1.26.2",us={event_list:[],latest_event_initial_time:null,max_save_time:2592e6,init:function(e,t){function r(){return Eo=Lo._,Uo=Lo.store,!!Eo.localStorage.isSupport()&&(Lo.para.max_string_length=1024,n.eventList.init(),n.addLatestChannelUrl(),void n.addIsChannelCallbackEvent())}if(Lo||!e)return!1;t=t||{},Ro=t.cookie_name||"sensorsdata2015jssdkchannel",Lo=e;var n=this;r()},addIsChannelCallbackEvent:function(){Lo.registerPage({$is_channel_callback_event:function(e){if(Eo.isObject(e)&&e.event&&"$WebClick"!==e.event&&"$pageview"!==e.event&&"$WebStay"!==e.event&&"$SignUp"!==e.event)return!us.eventList.hasEvent(e.event)&&(us.eventList.add(e.event),!0)}})},addLatestChannelUrl:function(){var e=this.getUrlDomain(),t=this.cookie.getChannel();if("url\u89e3\u6790\u5931\u8d25"===e)this.registerAndSave({_sa_channel_landing_url:"",_sa_channel_landing_url_error:"url\u7684domain\u89e3\u6790\u5931\u8d25"});else if(Eo.isReferralTraffic(document.referrer)){var r=Eo.getQueryParam(location.href,"sat_cf");Eo.isString(r)&&r.length>0?(this.registerAndSave({_sa_channel_landing_url:location.href}),us.channelLinkHandler()):this.registerAndSave({_sa_channel_landing_url:""})}else t?Lo.registerPage(t):Lo.registerPage({_sa_channel_landing_url:"",_sa_channel_landing_url_error:"\u53d6\u503c\u5f02\u5e38"})},registerAndSave:function(e){Lo.registerPage(e),this.cookie.saveChannel(e)},cookie:{getChannel:function(){var e=Lo.kit.userDecryptIfNeeded(Eo.cookie.get(Ro));return e=Eo.safeJSONParse(e),!(!Eo.isObject(e)||!e.prop)&&e.prop},saveChannel:function(e){var t={prop:e},r=JSON.stringify(t);Lo.para.encrypt_cookie&&(r=Lo.kit.userEncrypt(r)),Eo.cookie.set(Ro,r)}},channelLinkHandler:function(){this.eventList.reset(),Lo.track("$ChannelLinkReaching")},getUrlDomain:function(){var e=Eo.info.pageProp.url_domain;return""===e&&(e="url\u89e3\u6790\u5931\u8d25"),e},eventList:{init:function(){var e=this.get(),t=(new Date).getTime();if(e&&Eo.isNumber(e.latest_event_initial_time)&&Eo.isArray(e.eventList)){var r=t-e.latest_event_initial_time;r>0&&r<us.max_save_time?(us.event_list=e.eventList,us.latest_event_initial_time=e.latest_event_initial_time):this.reset()}else this.reset()},get:function(){var e={};try{e=Uo.readObjectVal("sawebjssdkchannel")}catch(t){Lo.log(t)}return e},add:function(e){us.event_list.push(e),this.save()},save:function(){var e={latest_event_initial_time:us.latest_event_initial_time,eventList:us.event_list};Uo.saveObjectVal("sawebjssdkchannel",e)},reset:function(){us.event_list=[],us.latest_event_initial_time=(new Date).getTime(),this.save()},hasEvent:function(e){var t=!1;return Eo.each(us.event_list,function(r){r===e&&(t=!0)}),t}}},cs=Yr(us,"SensorsChannel","sdkAfterInitAPI"),ps="1.26.2",ds=(/micromessenger\/([\d.]+)/i.test(navigator.userAgent||""),function(){var e={};return"undefined"!=typeof document.hidden?(e.hidden="hidden",e.visibilityChange="visibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e});Ho=ds().hidden;var fs,gs,_s,hs,ms,vs,ys,bs,ws={android:/Android/i,iOS:/iPhone|iPad|iPod/i},Ss=function(){for(var e in ws)if(navigator.userAgent.match(ws[e]))return e;return""},ks=Ss(),Ps=function(){return ws.hasOwnProperty(ks)},Cs=function(e){return null!=e&&"[object Object]"==Object.prototype.toString.call(e)},Os=function(e){var t=/\/sd\/(\w+)\/(\w+)$/;return e.match(t)},js=function(e){var t=e._.URL(e.para.server_url);return{origin:t.origin,project:t.searchParams.get("project")||"default"}},Ns=function(e,t,r){e.log("\u5c1d\u8bd5\u5524\u8d77 android app");var n=t;e.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a"+n),window.location=n,e.timer=setTimeout(function(){var t=nn();return e.log("hide:"+Ho+":"+document[Ho]),t?(e.log("The page is hidden, stop navigating to download page"),!1):(e.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"),void(window.location=r))},e.timeout)},Ts=function(e,t,r){e.log("\u5c1d\u8bd5\u5524\u8d77 iOS app:"+t),window.location.href=t,e.timer=setTimeout(function(){var t=nn();return t?(e.log("The page is hidden, stop navigating to download page"),!1):(e.log("App\u53ef\u80fd\u672a\u5b89\u88c5\uff0c\u8df3\u8f6c\u5230\u4e0b\u8f7d\u5730\u5740"),void(window.location.href=r))},e.timeout),e.log("new timer:"+e.timer)},Is={key:null,timer:null,sd:null,data:null,timeout:2500,apiURL:"{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",init:function(e){if(this.sd)return this.log("deeplink\u5df2\u7ecf\u521d\u59cb\u5316"),!1;if(this.sd=e,this.log("deeplink init called"),null===this.sd)return this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165"),!1;var t={};if(arguments.length>0&&(1===arguments.length&&Cs(arguments[0])?t=arguments[0]:arguments.length>=2&&Cs(arguments[1])&&(t=arguments[1])),!Ps())return this.log("\u4e0d\u652f\u6301\u5f53\u524d\u7cfb\u7edf\uff0c\u76ee\u524d\u53ea\u652f\u6301Android\u548ciOS"),!1;if(Cs(t)&&this.sd._.isNumber(t.timeout)&&t.timeout>=2500&&(this.timeout=t.timeout),!this.sd.para.server_url)return this.log("\u795e\u7b56JS SDK\u914d\u7f6e\u9879server_url\u672a\u6b63\u786e\u914d\u7f6e"),!1;var r=js(this.sd);this.apiURL=this.apiURL.replace("{origin}",r.origin).replace("{project}",r.project);
var n=this.sd._.getQueryParam(window.location.href,"deeplink");if(!n)return this.log("\u5f53\u524d\u9875\u9762\u7f3a\u5c11deeplink\u53c2\u6570"),!1;n=window.decodeURIComponent(n);var i=Os(n);return i?(this.key=i[2],this.apiURL=this.apiURL.replace("{key}",window.encodeURIComponent(i[2])),this.sd._.ajax({url:this.apiURL,type:"GET",cors:!0,credentials:!1,success:function(e){return e.errorMsg?(Is.log("API\u62a5\u9519\uff1a"+e.errorMsg),!1):(Is.data=e,Is.log("API\u67e5\u8be2\u6210\u529f\uff0c\u6570\u636e\uff1a"+JSON.stringify(e,null,"  ")),void(this.data.app_key&&(this.data.android_info&&this.data.android_info.url_schemes&&(this.data.android_info.url_schemes+="://sensorsdata/sd/"+this.data.app_key+"/"+this.key),this.data.ios_info&&this.data.ios_info.url_schemes&&(this.data.ios_info.url_schemes+="://sensorsdata/sd/"+this.data.app_key+"/"+this.key))))}.bind(this),error:function(){Is.log("API\u67e5\u8be2\u51fa\u9519")}}),void this.addListeners()):(this.log("\u5f53\u524d\u9875\u9762\u7684deeplink\u53c2\u6570\u65e0\u6548"),!1)},openDeepLink:function(){if(this.log("openDeeplink()"),!this.data)return this.log("\u6ca1\u6709Deep link\u6570\u636e!"),!1;if("iOS"===ks){this.log("\u5f53\u524d\u7cfb\u7edf\u662fiOS");var e=this.sd&&this.sd._&&this.sd._.getIOSVersion()>=9&&this.data.ios_info.ios_wake_url?this.data.ios_info.ios_wake_url:this.data.ios_info.url_schemes;this.log("\u5524\u8d77APP\u7684\u5730\u5740\uff1a"+e),Ts(this,e,this.data.ios_info.download_url)}else this.log("\u5f53\u524d\u7cfb\u7edf\u662f android"),Ns(this,this.data.android_info.url_schemes,this.data.android_info.download_url)},log:function(e){this.sd&&this.sd.log(e)},addListeners:function(){var e=ds().visibilityChange,t=this;e&&document.addEventListener(e,function(){clearTimeout(t.timer),t.log("visibilitychange, clear timeout:"+t.timer)},!1),window.addEventListener("pagehide",function(){t.log("page hide, clear timeout:"+t.timer),clearTimeout(t.timer)},!1)}},As=rn(Is,"Deeplink","sdkReady"),Ds="1.26.2",$s={init:function(e){_s=e,hs=_s&&_s._,ms=_s&&_s.log||console&&console.log||function(){},ln()},handleCommand:cn},xs=sn($s,"IOSBridge","sdkAfterInitPara"),Es="1.26.2",Ls={init:function(e){vs=e,ys=vs&&vs._,bs=vs&&vs.log||console&&console.log||function(){},gn()}},Us=fn(Ls,"IOSObsoleteBridge","sdkAfterInitPara"),Rs="1.26.2",Hs=5e3,Bs=432e3;wn.prototype.init=function(e,t){if(e){if(this.sd=e,this._=this.sd._,t){this.option=t;var r=t.heartbeat_interval_time;r&&(this._.isNumber(r)||this._.isNumber(1*r))&&1*r>0&&(this.heartbeat_interval_time=1e3*r);var n=t.max_duration;n&&(this._.isNumber(n)||this._.isNumber(1*n))&&1*n>0&&(this.max_duration=n)}this.page_id=Number(String(this._.getRandom()).slice(2,5)+String(this._.getRandom()).slice(2,4)+String((new Date).getTime()).slice(-4)),this.addEventListener(),document.hidden===!0?this.page_show_status=!1:this.addHeartBeatInterval(),this.log("PageLeave\u521d\u59cb\u5316\u5b8c\u6bd5")}else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},wn.prototype.log=function(e){this.sd&&this.sd.log(e)},wn.prototype.refreshPageEndTimer=function(){var e=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout(function(){e.page_hidden_status=!1},Hs)},wn.prototype.hiddenStatusHandler=function(){clearTimeout(this.timer),this.timer=null,this.page_hidden_status=!1},wn.prototype.pageStartHandler=function(){this.start_time=+new Date,1==!document.hidden?this.page_show_status=!0:this.page_show_status=!1,this.url=location.href,this.title=document.title},wn.prototype.pageEndHandler=function(){if(this.page_hidden_status!==!0){var e=this.getPageLeaveProperties();this.page_show_status===!1&&delete e.event_duration,this.page_show_status=!1,this.page_hidden_status=!0,this.isCollectUrl(this.url)&&this.sd.track("$WebPageLeave",e),this.refreshPageEndTimer(),this.delHeartBeatData()}},wn.prototype.addEventListener=function(){this.addPageStartListener(),this.addPageSwitchListener(),this.addSinglePageListener(),this.addPageEndListener()},wn.prototype.addPageStartListener=function(){var e=this;"onpageshow"in window&&this._.addEvent(window,"pageshow",function(){e.pageStartHandler(),e.hiddenStatusHandler()})},wn.prototype.isCollectUrl=function(e){return"function"!=typeof this.option.isCollectUrl||"string"!=typeof e||""===e||this.option.isCollectUrl(e)},wn.prototype.addSinglePageListener=function(){var e=this;this.sd.ee&&this.sd.ee.spa.prepend("switch",function(t){t!==location.href&&(e.url=t,e.pageEndHandler(),e.stopHeartBeatInterval(),e.current_page_url=e.url,e.pageStartHandler(),e.hiddenStatusHandler(),e.addHeartBeatInterval())})},wn.prototype.addPageEndListener=function(){var e=this;this._.each(["pagehide","beforeunload","unload"],function(t){"on"+t in window&&e._.addEvent(window,t,function(){e.pageEndHandler(),e.stopHeartBeatInterval()})})},wn.prototype.addPageSwitchListener=function(){var e=this;this._.listenPageState({visible:function(){e.pageStartHandler(),e.hiddenStatusHandler(),e.addHeartBeatInterval()},hidden:function(){e.url=location.href,e.title=document.title,e.pageEndHandler(),e.stopHeartBeatInterval()}})},wn.prototype.addHeartBeatInterval=function(){this._.localStorage.isSupport()&&this.startHeartBeatInterval()},wn.prototype.startHeartBeatInterval=function(){var e=this;this.heartbeat_interval_timer&&this.stopHeartBeatInterval();var t=!0;this.isCollectUrl(this.url)||(t=!1),this.heartbeat_interval_timer=setInterval(function(){t&&e.saveHeartBeatData()},this.heartbeat_interval_time),t&&this.saveHeartBeatData("is_first_heartbeat"),this.reissueHeartBeatData()},wn.prototype.stopHeartBeatInterval=function(){clearInterval(this.heartbeat_interval_timer),this.heartbeat_interval_timer=null},wn.prototype.saveHeartBeatData=function(e){var t=this.getPageLeaveProperties(),r=new Date;t.$time=r,"is_first_heartbeat"===e&&(t.event_duration=3.14);var n=this.sd.kit.buildData({type:"track",event:"$WebPageLeave",properties:t});n.heartbeat_interval_time=this.heartbeat_interval_time,this.sd.store.saveObjectVal(this.storage_name+"-"+this.page_id,n)},wn.prototype.delHeartBeatData=function(e){this._.localStorage.isSupport()&&this._.localStorage.remove(e||this.storage_name+"-"+this.page_id)},wn.prototype.reissueHeartBeatData=function(){for(var e=window.localStorage.length,t=e-1;t>=0;t--){var r=window.localStorage.key(t);if(r&&r!==this.storage_name+"-"+this.page_id&&0===r.indexOf(this.storage_name+"-")){var n=this.sd.store.readObjectVal(r);this._.isObject(n)&&1*new Date-n.time>n.heartbeat_interval_time+5e3&&(delete n.heartbeat_interval_time,n._flush_time=(new Date).getTime(),this.sd.kit.sendData(n),this.delHeartBeatData(r))}}},wn.prototype.getPageLeaveProperties=function(){var e=(+new Date-this.start_time)/1e3;(isNaN(e)||e<0||e>this.max_duration)&&(e=0),e=Number(e.toFixed(3));var t=this._.getReferrer(this.current_page_url),r=document.documentElement&&document.documentElement.scrollTop||window.pageYOffset||document.body&&document.body.scrollTop||0;r=Math.round(r)||0;var n={$title:this.title,$url:this._.getURL(this.url),$url_path:this._.getURLPath(this._.URL(this.url).pathname),$referrer_host:t?this._.getHostname(t):"",$referrer:t,$viewport_position:r};return 0!==e&&(n.event_duration=e),n=this._.extend(n,this.option.custom_props)};var Js=new wn,Ms=bn(Js,"PageLeave","sdkReady"),qs="1.26.2",Ks=!1,Fs={init:function(e,t){function r(t,r){if(t.getEntries&&"function"==typeof t.getEntries){for(var n=t.getEntries(),i=null,a=0;a<n.length;a++)"transferSize"in n[a]&&(i+=n[a].transferSize);e._.isNumber(i)&&i>=0&&i<10737418240&&(r.$page_resource_size=Number((i/1024).toFixed(3)))}}function n(t){var r=0;if(t.timing){var n=t.timing;0!==n.fetchStart&&e._.isNumber(n.fetchStart)&&0!==n.domContentLoadedEventEnd&&e._.isNumber(n.domContentLoadedEventEnd)?r=n.domContentLoadedEventEnd-n.fetchStart:e.log("performance \u6570\u636e\u83b7\u53d6\u5f02\u5e38")}return r}function i(t){var r=0;if(e._.isFunction(t.getEntriesByType)){var n=t.getEntriesByType("navigation")||[{}];r=(n[0]||{}).domContentLoadedEventEnd||0}return r}function a(){var o=0,s=window.performance||window.webkitPerformance||window.msPerformance||window.mozPerformance,l={$url:e._.getURL(),$title:document.title,$url_path:e._.getURLPath(),$referrer:e._.getReferrer(null,!0)};if(s?(o=i(s)||n(s),r(s,l)):e.log("\u6d4f\u89c8\u5668\u672a\u652f\u6301 performance API."),o>0){var u=e._.isObject(t)&&t.max_duration||1800;o=Number((o/1e3).toFixed(3)),(!e._.isNumber(u)||u<=0||o<=u)&&(l.event_duration=o)}Ks||(e.track("$WebPageLoad",l),Ks=!0),window.removeEventListener?window.removeEventListener("load",a):window.detachEvent&&window.detachEvent("onload",a)}"complete"==document.readyState?a():window.addEventListener?window.addEventListener("load",a):window.attachEvent&&window.attachEvent("onload",a)}},Vs=Pn(Fs,"PageLoad","sdkReady");On.prototype.init=function(e){if(e){this.sd=e,this._=e._,this.log=e.log;var t=this;e.registerInterceptor("buildDataStage",{extendProps:{priority:0,entry:function(e){return Cn(e,t)}}})}else this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},On.prototype.register=function(e){return this.sd?void(this._.isObject(e)&&this._.isArray(e.events)&&e.events.length>0&&this._.isObject(e.properties)&&!this._.isEmptyObject(e.properties)?this.customRegister.push(e):this.log("RegisterProperties: register \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")},On.prototype.hookRegister=function(e){return this.sd?void(this._.isFunction(e)?this.customRegister.push(e):this.log("RegisterProperties: hookRegister \u53c2\u6570\u9519\u8bef")):void this.log("\u795e\u7b56JS SDK\u672a\u6210\u529f\u5f15\u5165")};var Ws="1.26.2";On.prototype.plugin_name="RegisterProperties";var zs,Xs,Zs=new On,Gs=Tn(Zs),Qs="1.26.2",Ys=window.console&&window.console.log||function(){},el={init:function(e){return zs=e,Ys=zs&&zs.log||Ys,e&&e.kit&&e.kit.buildData?(Xs=zs.kit.buildData,zs.kit.buildData=$n,void Ys("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5b8c\u6210")):void Ys("RegisterPropertyPageHeight \u63d2\u4ef6\u521d\u59cb\u5316\u5931\u8d25,\u5f53\u524d\u4e3bsdk\u4e0d\u652f\u6301 RegisterPropertyPageHeight \u63d2\u4ef6\uff0c\u8bf7\u5347\u7ea7\u4e3bsdk")}},tl=Dn(el,"RegisterPropertyPageHeight","sdkReady"),rl="1.26.2",nl={};nl.getPart=function(e){var t=!1,r=this.option.length;if(r)for(var n=0;n<r;n++)if(e.indexOf(this.option[n].part_url)>-1)return!0;return t},nl.getPartHash=function(e){var t=this.option.length,r=!1;if(t)for(var n=0;n<t;n++)if(e.indexOf(this.option[n].part_url)>-1)return this.option[n].after_hash;return!!r},nl.getCurrenId=function(){var e=this.store.getDistinctId()||"",t=this.store.getFirstId()||"";this._.urlSafeBase64&&this._.urlSafeBase64.encode?e=e?this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(e))):"":this._.rot13obfs&&(e=e?this._.rot13obfs(e):"");var r=t?"f"+e:"d"+e;return encodeURIComponent(r)},nl.rewriteUrl=function(e,t){var r=this,n=/([^?#]+)(\?[^#]*)?(#.*)?/,i=n.exec(e),a="";if(i){var o,s=i[1]||"",l=i[2]||"",u=i[3]||"",c="_sasdk="+this.getCurrenId(),p=function(e){var t=e.split("&"),n=[];return r._.each(t,function(e){e.indexOf("_sasdk=")>-1?n.push(c):n.push(e)}),n.join("&")};if(this.getPartHash(e)){o=u.indexOf("_sasdk");var d=u.indexOf("?");a=d>-1?o>-1?s+l+"#"+u.substring(1,o)+p(u.substring(o,u.length)):s+l+u+"&"+c:s+l+"#"+u.substring(1)+"?"+c}else{o=l.indexOf("_sasdk");var f=/^\?(\w)+/.test(l);a=f?o>-1?s+"?"+p(l.substring(1))+u:s+l+"&"+c+u:s+"?"+c+u}return t&&(t.href=a),a}},nl.getUrlId=function(){var e=location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);if(this._.isArray(e)&&e[1]){var t=decodeURIComponent(e[1]);return!t||"f"!==t.substring(0,1)&&"d"!==t.substring(0,1)||(this._.urlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64&&this._.urlSafeBase64.isUrlSafeBase64(t)?t=t.substring(0,1)+this._.base64Decode(this._.urlSafeBase64.decode(t.substring(1))):this._.rot13defs&&(t=t.substring(0,1)+this._.rot13defs(t.substring(1)))),t}return""},nl.setRefferId=function(e){var t=this.store.getDistinctId(),r=this.getUrlId();if(r&&""!==r){var n="a"===r.substring(0,1)||"d"===r.substring(0,1);r=r.substring(1),r!==t&&(n?(this.sd.identify(r,!0),this.store.getFirstId()&&this.sd.saEvent.send({original_id:r,distinct_id:t,type:"track_signup",event:"$SignUp",properties:{}},null)):this.store.getFirstId()&&!e.re_login||this.sd.login(r))}},nl.addListen=function(){var e=this,t=function(t){var r,n,i=t.target,a=i.tagName.toLowerCase(),o=i.parentNode;if("a"===a&&i.href||o&&o.tagName&&"a"===o.tagName.toLowerCase()&&o.href){"a"===a&&i.href?(r=i.href,n=i):(r=o.href,n=o);var s=e._.URL(r),l=s.protocol;"http:"!==l&&"https:"!==l||e.getPart(r)&&e.rewriteUrl(r,n)}};e._.addEvent(document,"mousedown",t),window.PointerEvent&&"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>=0&&e._.addEvent(document,"pointerdown",t)},nl.init=function(e,t){function r(t){for(var r=t.length,n=[],i=0;i<r;i++)/[A-Za-z0-9]+\./.test(t[i].part_url)&&"[object Boolean]"==Object.prototype.toString.call(t[i].after_hash)?n.push(t[i]):e.log("linker \u914d\u7f6e\u7684\u7b2c "+(i+1)+" \u9879\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff01");return n}return this.sd=e,this._=e._,this.store=e.store,this.para=e.para,this._.isObject(t)&&this._.isArray(t.linker)&&t.linker.length>0?(this.setRefferId(t),this.addListen(),this.option=t.linker,void(this.option=r(this.option))):void e.log("\u8bf7\u914d\u7f6e\u6253\u901a\u57df\u540d\u53c2\u6570\uff01")};var il,al,ol,sl,ll,ul,cl,pl,dl,fl,gl,_l,hl,ml=Ln(nl,"SiteLinker","sdkReady"),vl="utm_source utm_medium utm_campaign utm_content utm_term",yl="1.26.2",bl={init:function(e){function t(){var e=vl.split(" "),t="",r={};return il._.isArray(il.para.source_channel)&&il.para.source_channel.length>0&&(e=e.concat(il.para.source_channel),e=il._.unique(e)),il._.each(e,function(e){t=il._.getQueryParam(location.href,e),t.length&&(r[e]=t)}),r}e&&!il&&(il=e,il.registerInterceptor("businessStage",{getUtmData:{priority:0,entry:function(){return t()}}}))}},wl=Hn(bl,"Utm","sdkAfterInitPara"),Sl="1.26.2",kl=!1,Pl=null,Cl={init:function(e){Pl=e,Pl.disableSDK=qn,Pl.enableSDK=Kn,Pl.getDisabled=Fn}},Ol=Mn(Cl,"DisableSDK","sdkInitAPI"),jl="1.26.2",Nl={plugin_name:"DebugSender",init:function(e){al=e,ol=al._,Qn()}},Tl=zn(Nl),Il="1.26.2",Al={plugin_name:"JsappSender",init:function(e){sl=e,ll=sl._,ni()}},Dl=ti(Al),$l="1.26.2",xl=null,El={plugin_name:"BatchSender",init:function(e){ul=e,cl=ul._,ci()}},Ll=si(El),Ul="1.26.2",Rl={plugin_name:"BeaconSender",init:function(e){pl=e,dl=pl._,mi()}},Hl=fi(Rl),Bl="1.26.2",Jl={plugin_name:"AjaxSender",init:function(e){fl=e,gl=fl._,Pi()}},Ml=bi(Jl),ql="1.26.2",Kl={plugin_name:"ImageSender",init:function(e){_l=e,hl=_l._,Di()}},Fl=ji(Kl),Vl=null,Wl=null,zl=[],Xl={init:function(e){e&&(Vl=e,Wl=Vl._,Vl.logger&&Vl.logger.appendWriter(Li),Vl.on&&Vl.on("sdkAfterInitPara",function(){for(var e=0;e<zl.length;e++)Ui(zl[e]);zl=null}),Vl.on&&Vl.on("sdkInitAPI",function(){Vl.enableLocalLog=qi,Vl.disableLocalLog=Ki}))}},Zl=Ei(Xl,"ConsoleLogger"),Gl="sensorsdata_jssdk_debug";Vi.modules=Vi.modules||{};for(var Ql=[Zl,Fo,Yo,ss,cs,As,xs,Us,Ms,Vs,Gs,tl,ml,wl,Ol,Tl,Dl,Ll,Hl,Ml,Fl],Yl=[Zl,Mo,wl,Ol,Dl,Tl,Yo,xs,ss,Us,Ll,Hl,Ml,Fl],eu=0;eu<Ql.length;eu++){var tu=Ql[eu];Vi._.isString(tu.plugin_name)?Vi.modules[tu.plugin_name]=tu:Vi._.isArray(tu.plugin_name)&&Vi._.each(tu.plugin_name,function(e){Vi.modules[e]=tu})}for(eu=0;eu<Yl.length;eu++)Vi.use(Yl[eu]);var ru=Vi;try{"string"==typeof window.sensorsDataAnalytic201505?(Vi.para=window[sensorsDataAnalytic201505].para,Vi._q=window[sensorsDataAnalytic201505]._q,window[sensorsDataAnalytic201505]=Vi,window.sensorsDataAnalytic201505=Vi,Vi.init()):"undefined"==typeof window.sensorsDataAnalytic201505?window.sensorsDataAnalytic201505=Vi:ru=window.sensorsDataAnalytic201505}catch(nu){Ne(nu)}var iu=ru;return iu});;
  vertical-align: top; }
  .stm-button._fullwidth {
    width: 100%; }

/*Loading button*/
.btn_load:before {
  position: absolute;
  content: '';
  display: block;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  animation: fa-spin 2s infinite linear;
  content: "\f021";
  top: 50%;
  left: 50%;
  font-size: 18px;
  margin: -9px 0 0 -7px;
  opacity: 0;
  visibility: hidden; }

.btn_load.loading:before {
  opacity: 1;
  visibility: visible; }

.btn_load.loading span {
  opacity: 0; }

.stm_read_more_link {
  transition: .3s ease;
  transform: translateX(-27px);
  padding: 0 !important; }
  .stm_read_more_link:before, .stm_read_more_link:after {
    content: '→';
    transition: .3s;
    position: relative;
    top: 1px; }
  .stm_read_more_link:before {
    opacity: 0;
    margin-right: 7px; }
  .stm_read_more_link:after {
    margin-left: 7px; }
  .stm_read_more_link a {
    transition: .3s ease; }
  .stm_read_more_link .icon-before {
    opacity: 0;
    transition: opacity .3s ease; }
  .stm_read_more_link .icon-after {
    transition: opacity .3s ease; }
  .stm_read_more_link:hover {
    transform: translateX(0px); }
    .stm_read_more_link:hover:before {
      opacity: 1; }
    .stm_read_more_link:hover:after {
      transition: 0s;
      opacity: 0; }
    .stm_read_more_link:hover a {
      text-decoration: none !important; }
    .stm_read_more_link:hover .icon-before {
      opacity: 1; }
    .stm_read_more_link:hover .icon-after {
      opacity: 0; }

.stm-button_right {
  width: 100%;
  text-align: right; }

.btn.wtc,
.btn.btn_outline.wtc,
.btn.btn_outline.wtc:hover,
.btn.btn_outline.btn_third:hover,
.btn.btn_outline.wtc_h:hover,
.btn.btn_solid:not(.btn_white) {
  color: #fff !important; }

.btn.btn_solid:not(.btn_white) .btn__icon {
  color: #fff; }

.btn.btn_outline.btn_white:hover,
.btn.btn_outline:not(.btn_white):hover .btn__icon:after,
.btn.btn_solid:not(.btn_white) .btn__icon:after,
.btn.btn_solid:not(.btn_white):hover .btn__icon:after {
  background-color: #fff !important; }

.btn.btn_outline.btn_white {
  border-color: #fff !important; }

.btn.btn_outline.btn_white,
.stm_header_style_1 .stm-navigation ul > li > ul > li > a:hover,
.stm_header_style_1 .stm-navigation ul > li > ul > li.current-menu-item > a,
.btn_outline.btn_primary:hover,
.btn_outline.btn_secondary:hover,
.btn_outline.btn_third:hover,
.btn_outline.btn_primary:hover .btn__icon,
.btn_outline.btn_secondary:hover .btn__icon,
.btn_outline.btn_third:hover .btn__icon,
.btn.btn_outline.btn_white .btn__icon {
  color: white !important; }

.btn.btn_loading {
  position: relative; }
  .btn.btn_loading span:not(.preloader) {
    opacity: 1; }
  .btn.btn_loading span.preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -16px 0 0 -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: none;
    animation: scaleout 1.0s infinite ease-in-out;
    transition: all 0.5s ease-in-out;
    opacity: 0; }
  .btn.btn_loading.loading {
    border-color: transparent !important;
    background: transparent !important; }
    .btn.btn_loading.loading:hover {
      border-color: transparent !important;
      background: transparent !important; }
    .btn.btn_loading.loading span:not(.preloader) {
      opacity: 0; }
    .btn.btn_loading.loading span.preloader {
      opacity: 1; }

html body .btn.trbc_h:hover {
  background-color: transparent !important; }

select,
input[type="text"],
input[type="email"],
input[type="search"],
input[type="password"],
input[type="number"],
input[type="date"],
input[type="tel"],
textarea,
.stm_select .form-control {
  width: 100%;
  font-size: 13px;
  color: #777777;
  background: #efefef;
  border: 3px solid #efefef;
  box-shadow: none !important;
  outline: none !important;
  padding: 12px 13px;
  height: 44px;
  transition: none;
  border-radius: 0;
  vertical-align: top;
  /*IOS shadow fix*/
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none; }
  select:focus,
  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="search"]:focus,
  input[type="password"]:focus,
  input[type="number"]:focus,
  input[type="date"]:focus,
  input[type="tel"]:focus,
  textarea:focus,
  .stm_select .form-control:focus {
    background: transparent; }
  select.wtc_h:not(.wbc):focus,
  input[type="text"].wtc_h:not(.wbc):focus,
  input[type="email"].wtc_h:not(.wbc):focus,
  input[type="search"].wtc_h:not(.wbc):focus,
  input[type="password"].wtc_h:not(.wbc):focus,
  input[type="number"].wtc_h:not(.wbc):focus,
  input[type="date"].wtc_h:not(.wbc):focus,
  input[type="tel"].wtc_h:not(.wbc):focus,
  textarea.wtc_h:not(.wbc):focus,
  .stm_select .form-control.wtc_h:not(.wbc):focus {
    color: #fff !important; }

input:focus::-webkit-input-placeholder {
  color: transparent; }

input:focus:-moz-placeholder {
  color: transparent; }

/* FF 4-18 */
input:focus::-moz-placeholder {
  color: transparent; }

/* FF 19+ */
input:focus:-ms-input-placeholder {
  color: transparent; }

/* IE 10+ */
textarea:focus::-webkit-input-placeholder {
  color: transparent; }

textarea:focus:-moz-placeholder {
  color: transparent; }

/* FF 4-18 */
textarea:focus::-moz-placeholder {
  color: transparent; }

/* FF 19+ */
textarea:focus:-ms-input-placeholder {
  color: transparent; }

/* IE 10+ */
.form-group {
  margin-bottom: 30px; }

textarea {
  min-height: 163px;
  max-width: 100%; }

.stm_select {
  cursor: pointer;
  position: relative;
  background: #fff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  min-width: 205px; }
  .stm_select select {
    opacity: 0;
    position: relative;
    z-index: 100;
    display: none; }
  .stm_select .stm-select__val {
    width: 100%;
    padding-right: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    padding: 10px 10px 10px 10px;
    margin-top: 0 !important; }
  .stm_select:after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    font-size: 7px;
    font-weight: 300; }

/*CF7 styles*/
.wpcf7-form-control-wrap {
  display: block;
  margin: 0 0 40px; }

div.wpcf7-response-output {
  margin: 20px 0;
  padding: 15px 30px; }
  div.wpcf7-response-output.wpcf7-validation-errors {
    border-width: 3px; }

span.wpcf7-not-valid-tip {
  display: none; }

.mc4wp-alert,
.wpcf7-response-output {
  position: relative;
  font-size: 16px;
  background-color: #ff0000 !important;
  color: #fff !important;
  border-color: #ff0000 !important; }
  .mc4wp-alert.mc4wp-success, .mc4wp-alert.wpcf7-mail-sent-ok,
  .wpcf7-response-output.mc4wp-success,
  .wpcf7-response-output.wpcf7-mail-sent-ok {
    background-color: #03d56b !important;
    color: #fff !important;
    border-color: #03d56b !important; }
    .mc4wp-alert.mc4wp-success:before, .mc4wp-alert.wpcf7-mail-sent-ok:before,
    .wpcf7-response-output.mc4wp-success:before,
    .wpcf7-response-output.wpcf7-mail-sent-ok:before {
      border-bottom-color: #03d56b; }
  .mc4wp-alert:before,
  .wpcf7-response-output:before {
    content: '';
    display: block;
    position: absolute;
    top: -9px;
    left: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7px 7px 7px;
    border-color: transparent transparent #ff0000 transparent; }

.gform_confirmation_wrapper .gform_confirmation_message {
  position: relative;
  font-size: 16px;
  background-color: #03d56b !important;
  color: #fff !important;
  border-color: #03d56b !important;
  border-width: 3px;
  border-style: solid;
  margin: 20px 0;
  padding: 15px 30px; }

span.wpcf7-list-item {
  margin: 0; }

.mc4wp-alert {
  margin: 20px 0 0;
  padding: 15px 20px; }
  .mc4wp-alert:before {
    top: -7px; }
  .mc4wp-alert p {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: #fff !important; }

.stm_mc4wp {
  position: relative;
  display: -ms-flexbox;
  display: flex; }
  .stm_mc4wp__white input:focus {
    color: #fff !important; }
    .stm_mc4wp__white input:focus::-webkit-input-placeholder {
      color: transparent !important; }
  @media (max-width: 550px) {
    .stm_mc4wp {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; }
      .stm_mc4wp input[type="email"] {
        width: 100%;
        margin-bottom: 10px; } }

input[type="radio"],
input[type="checkbox"] {
  outline: none !important; }

/*Some Basics*/
select[multiple] {
  margin: 0 !important;
  border: 2px solid #ccc !important;
  padding: 0 !important;
  overflow-y: auto !important;
  background: transparent !important; }
  select[multiple] option {
    padding: 10px 15px; }

.gform_wrapper ul.gform_fields li {
  margin: 0 0 25px !important; }

.gform_wrapper ul.gfield_checkbox li label,
.gform_wrapper ul.gfield_radio li label {
  margin-left: 24px;
  font-weight: 400 !important; }

.gform_wrapper label.gfield_label {
  font-weight: 600;
  font-size: 16px;
  line-height: 22px; }

.gform_wrapper .ginput_container_select .stm_select {
  padding-top: 0; }
  .gform_wrapper .ginput_container_select .stm_select select {
    width: 100% !important; }
  .gform_wrapper .ginput_container_select .stm_select .stm-select__val {
    margin-top: 0; }
  .gform_wrapper .ginput_container_select .stm_select:after {
    margin-top: 2px; }

.addon-select,
select[data-attribute_name] {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: inherit;
  display: block;
  color: #777;
  min-height: 55px;
  font-size: 15px;
  padding: 12px 15px 15px !important;
  border-width: 1px !important;
  margin: 0 !important;
  -webkit-appearance: menulist-button;
  -moz-appearance: menulist-button;
  appearance: menulist-button; }

.gform_wrapper li.gfield_error input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .gform_wrapper li.gfield_error textarea {
  border: 1px solid #790000 !important; }

.gform_wrapper .field_sublabel_below .ginput_complex.ginput_container label {
  margin: 4px 0 27px 1px; }

body .stm_select.open {
  z-index: 100000 !important; }

.dropdown-toggle {
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer; }
  .dropdown-toggle .fa-chevron-down {
    position: relative;
    top: -2px;
    margin-left: 5px;
    font-size: 9px; }

.dropdown-list {
  position: absolute;
  top: 100%;
  display: none;
  padding: 0;
  margin: 14px 0 0;
  list-style: none; }
  .dropdown-list > li > a {
    display: block;
    text-decoration: none !important; }

.dropdown.open .dropdown-list {
  display: block; }

.dropdown.open .dropdown-toggle .fa:before {
  content: "\f077"; }

.stm-dropdown_style_2 .dropdown-toggle {
  position: relative;
  margin-right: -10px;
  text-align: center;
  padding: 15px;
  font-size: 14px; }
  .stm-dropdown_style_2 .dropdown-toggle:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -15px;
    height: 14px;
    overflow: hidden;
    margin-top: -7px;
    border-left: 1px dotted #9b9b9b; }

.stm-dropdown_style_2 .dropdown-list {
  position: absolute;
  top: 100%;
  right: -10px;
  display: none;
  padding: 0;
  margin: 0;
  list-style: none; }
  .stm-dropdown_style_2 .dropdown-list > li > a {
    display: block;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none !important;
    font-weight: 400;
    font-size: 14px; }

.stm-dropdown_style_2 .dropdown.open .dropdown-list {
  display: block; }

.stm-dropdown_style_2 .dropdown.open .dropdown-toggle .fa:before {
  content: "\f077"; }

[class*="__icon"].icon_8px {
  font-size: 8px; }

[class*="__icon"].icon_9px {
  font-size: 9px; }

[class*="__icon"].icon_10px {
  font-size: 10px; }

[class*="__icon"].icon_11px {
  font-size: 11px; }

[class*="__icon"].icon_12px {
  font-size: 12px; }

[class*="__icon"].icon_13px {
  font-size: 13px; }

[class*="__icon"].icon_14px {
  font-size: 14px; }

[class*="__icon"].icon_15px {
  font-size: 15px; }

[class*="__icon"].icon_16px {
  font-size: 16px; }

[class*="__icon"].icon_17px {
  font-size: 17px; }

[class*="__icon"].icon_18px {
  font-size: 18px; }

[class*="__icon"].icon_19px {
  font-size: 19px; }

[class*="__icon"].icon_20px {
  font-size: 20px; }

[class*="__icon"].icon_21px {
  font-size: 21px; }

[class*="__icon"].icon_22px {
  font-size: 22px; }

[class*="__icon"].icon_23px {
  font-size: 23px; }

[class*="__icon"].icon_24px {
  font-size: 24px; }

[class*="__icon"].icon_25px {
  font-size: 25px; }

[class*="__icon"].icon_26px {
  font-size: 26px; }

[class*="__icon"].icon_27px {
  font-size: 27px; }

[class*="__icon"].icon_28px {
  font-size: 28px; }

[class*="__icon"].icon_29px {
  font-size: 29px; }

[class*="__icon"].icon_30px {
  font-size: 30px; }

[class*="__icon"].icon_31px {
  font-size: 31px; }

[class*="__icon"].icon_32px {
  font-size: 32px; }

[class*="__icon"].icon_33px {
  font-size: 33px; }

[class*="__icon"].icon_34px {
  font-size: 34px; }

[class*="__icon"].icon_35px {
  font-size: 35px; }

[class*="__icon"].icon_36px {
  font-size: 36px; }

[class*="__icon"].icon_37px {
  font-size: 37px; }

[class*="__icon"].icon_38px {
  font-size: 38px; }

[class*="__icon"].icon_39px {
  font-size: 39px; }

[class*="__icon"].icon_40px {
  font-size: 40px; }

[class*="__icon"].icon_41px {
  font-size: 41px; }

[class*="__icon"].icon_42px {
  font-size: 42px; }

[class*="__icon"].icon_43px {
  font-size: 43px; }

[class*="__icon"].icon_44px {
  font-size: 44px; }

[class*="__icon"].icon_45px {
  font-size: 45px; }

[class*="__icon"].icon_46px {
  font-size: 46px; }

[class*="__icon"].icon_47px {
  font-size: 47px; }

[class*="__icon"].icon_48px {
  font-size: 48px; }

[class*="__icon"].icon_49px {
  font-size: 49px; }

[class*="__icon"].icon_50px {
  font-size: 50px; }

[class*="__icon"].icon_51px {
  font-size: 51px; }

[class*="__icon"].icon_52px {
  font-size: 52px; }

[class*="__icon"].icon_53px {
  font-size: 53px; }

[class*="__icon"].icon_54px {
  font-size: 54px; }

[class*="__icon"].icon_55px {
  font-size: 55px; }

[class*="__icon"].icon_56px {
  font-size: 56px; }

[class*="__icon"].icon_57px {
  font-size: 57px; }

[class*="__icon"].icon_58px {
  font-size: 58px; }

[class*="__icon"].icon_59px {
  font-size: 59px; }

[class*="__icon"].icon_60px {
  font-size: 60px; }

body .stm_lh_1 {
  line-height: 1px; }

body .stm_lh_2 {
  line-height: 2px; }

body .stm_lh_3 {
  line-height: 3px; }

body .stm_lh_4 {
  line-height: 4px; }

body .stm_lh_5 {
  line-height: 5px; }

body .stm_lh_6 {
  line-height: 6px; }

body .stm_lh_7 {
  line-height: 7px; }

body .stm_lh_8 {
  line-height: 8px; }

body .stm_lh_9 {
  line-height: 9px; }

body .stm_lh_10 {
  line-height: 10px; }

body .stm_lh_11 {
  line-height: 11px; }

body .stm_lh_12 {
  line-height: 12px; }

body .stm_lh_13 {
  line-height: 13px; }

body .stm_lh_14 {
  line-height: 14px; }

body .stm_lh_15 {
  line-height: 15px; }

body .stm_lh_16 {
  line-height: 16px; }

body .stm_lh_17 {
  line-height: 17px; }

body .stm_lh_18 {
  line-height: 18px; }

body .stm_lh_19 {
  line-height: 19px; }

body .stm_lh_20 {
  line-height: 20px; }

body .stm_lh_21 {
  line-height: 21px; }

body .stm_lh_22 {
  line-height: 22px; }

body .stm_lh_23 {
  line-height: 23px; }

body .stm_lh_24 {
  line-height: 24px; }

body .stm_lh_25 {
  line-height: 25px; }

body .stm_lh_26 {
  line-height: 26px; }

body .stm_lh_27 {
  line-height: 27px; }

body .stm_lh_28 {
  line-height: 28px; }

body .stm_lh_29 {
  line-height: 29px; }

body .stm_lh_30 {
  line-height: 30px; }

body .stm_lh_31 {
  line-height: 31px; }

body .stm_lh_32 {
  line-height: 32px; }

body .stm_lh_33 {
  line-height: 33px; }

body .stm_lh_34 {
  line-height: 34px; }

body .stm_lh_35 {
  line-height: 35px; }

body .stm_lh_36 {
  line-height: 36px; }

body .stm_lh_37 {
  line-height: 37px; }

body .stm_lh_38 {
  line-height: 38px; }

body .stm_lh_39 {
  line-height: 39px; }

body .stm_lh_40 {
  line-height: 40px; }

body .stm_lh_41 {
  line-height: 41px; }

body .stm_lh_42 {
  line-height: 42px; }

body .stm_lh_43 {
  line-height: 43px; }

body .stm_lh_44 {
  line-height: 44px; }

body .stm_lh_45 {
  line-height: 45px; }

body .stm_lh_46 {
  line-height: 46px; }

body .stm_lh_47 {
  line-height: 47px; }

body .stm_lh_48 {
  line-height: 48px; }

body .stm_lh_49 {
  line-height: 49px; }

body .stm_lh_50 {
  line-height: 50px; }

body .stm_lh_51 {
  line-height: 51px; }

body .stm_lh_52 {
  line-height: 52px; }

body .stm_lh_53 {
  line-height: 53px; }

body .stm_lh_54 {
  line-height: 54px; }

body .stm_lh_55 {
  line-height: 55px; }

body .stm_lh_56 {
  line-height: 56px; }

body .stm_lh_57 {
  line-height: 57px; }

body .stm_lh_58 {
  line-height: 58px; }

body .stm_lh_59 {
  line-height: 59px; }

body .stm_lh_60 {
  line-height: 60px; }

body .stm_lh_61 {
  line-height: 61px; }

body .stm_lh_62 {
  line-height: 62px; }

body .stm_lh_63 {
  line-height: 63px; }

body .stm_lh_64 {
  line-height: 64px; }

body .stm_lh_65 {
  line-height: 65px; }

.fsz_8 {
  font-size: 8px !important; }

.fsz_9 {
  font-size: 9px !important; }

.fsz_10 {
  font-size: 10px !important; }

.fsz_11 {
  font-size: 11px !important; }

.fsz_12 {
  font-size: 12px !important; }

.fsz_13 {
  font-size: 13px !important; }

.fsz_14 {
  font-size: 14px !important; }

.fsz_15 {
  font-size: 15px !important; }

.fsz_16 {
  font-size: 16px !important; }

.fsz_17 {
  font-size: 17px !important; }

.fsz_18 {
  font-size: 18px !important; }

.fsz_19 {
  font-size: 19px !important; }

.fsz_20 {
  font-size: 20px !important; }

.fsz_21 {
  font-size: 21px !important; }

.fsz_22 {
  font-size: 22px !important; }

.fsz_23 {
  font-size: 23px !important; }

.fsz_24 {
  font-size: 24px !important; }

.fsz_25 {
  font-size: 25px !important; }

.fsz_26 {
  font-size: 26px !important; }

.fsz_27 {
  font-size: 27px !important; }

.fsz_28 {
  font-size: 28px !important; }

.fsz_29 {
  font-size: 29px !important; }

.fsz_30 {
  font-size: 30px !important; }

.fsz_31 {
  font-size: 31px !important; }

.fsz_32 {
  font-size: 32px !important; }

.fsz_33 {
  font-size: 33px !important; }

.fsz_34 {
  font-size: 34px !important; }

.fsz_35 {
  font-size: 35px !important; }

.fsz_36 {
  font-size: 36px !important; }

.fsz_37 {
  font-size: 37px !important; }

.fsz_38 {
  font-size: 38px !important; }

.fsz_39 {
  font-size: 39px !important; }

.fsz_40 {
  font-size: 40px !important; }

.fsz_41 {
  font-size: 41px !important; }

.fsz_42 {
  font-size: 42px !important; }

.fsz_43 {
  font-size: 43px !important; }

.fsz_44 {
  font-size: 44px !important; }

.fsz_45 {
  font-size: 45px !important; }

.fsz_46 {
  font-size: 46px !important; }

.fsz_47 {
  font-size: 47px !important; }

.fsz_48 {
  font-size: 48px !important; }

.fsz_49 {
  font-size: 49px !important; }

.fsz_50 {
  font-size: 50px !important; }

.fsz_51 {
  font-size: 51px !important; }

.fsz_52 {
  font-size: 52px !important; }

.fsz_53 {
  font-size: 53px !important; }

.fsz_54 {
  font-size: 54px !important; }

.fsz_55 {
  font-size: 55px !important; }

body .animation_timeout_0 {
  animation-delay: 0s !important; }

body .animation_timeout_1 {
  animation-delay: 0.2s !important; }

body .animation_timeout_2 {
  animation-delay: 0.4s !important; }

body .animation_timeout_3 {
  animation-delay: 0.6s !important; }

body .animation_timeout_4 {
  animation-delay: 0.8s !important; }

body .animation_timeout_5 {
  animation-delay: 1s !important; }

body .animation_timeout_6 {
  animation-delay: 1.2s !important; }

body .animation_timeout_7 {
  animation-delay: 1.4s !important; }

body .animation_timeout_8 {
  animation-delay: 1.6s !important; }

body .animation_timeout_9 {
  animation-delay: 1.8s !important; }

body .animation_timeout_10 {
  animation-delay: 2s !important; }

body .animation_timeout_11 {
  animation-delay: 2.2s !important; }

body .animation_timeout_12 {
  animation-delay: 2.4s !important; }

body .animation_timeout_13 {
  animation-delay: 2.6s !important; }

body .animation_timeout_14 {
  animation-delay: 2.8s !important; }

body .animation_timeout_15 {
  animation-delay: 3s !important; }

body .animation_timeout_16 {
  animation-delay: 3.2s !important; }

body .animation_timeout_17 {
  animation-delay: 3.4s !important; }

body .animation_timeout_18 {
  animation-delay: 3.6s !important; }

body .animation_timeout_19 {
  animation-delay: 3.8s !important; }

body .animation_timeout_20 {
  animation-delay: 4s !important; }

body .animation_timeout_21 {
  animation-delay: 4.2s !important; }

body .animation_timeout_22 {
  animation-delay: 4.4s !important; }

body .animation_timeout_23 {
  animation-delay: 4.6s !important; }

body .animation_timeout_24 {
  animation-delay: 4.8s !important; }

body .animation_timeout_25 {
  animation-delay: 5s !important; }

body .animation_timeout_26 {
  animation-delay: 5.2s !important; }

body .animation_timeout_27 {
  animation-delay: 5.4s !important; }

body .animation_timeout_28 {
  animation-delay: 5.6s !important; }

body .animation_timeout_29 {
  animation-delay: 5.8s !important; }

body .animation_timeout_30 {
  animation-delay: 6s !important; }

body .animation_timeout_31 {
  animation-delay: 6.2s !important; }

body .animation_timeout_32 {
  animation-delay: 6.4s !important; }

body .animation_timeout_33 {
  animation-delay: 6.6s !important; }

body .animation_timeout_34 {
  animation-delay: 6.8s !important; }

body .animation_timeout_35 {
  animation-delay: 7s !important; }

body .animation_timeout_36 {
  animation-delay: 7.2s !important; }

body .animation_timeout_37 {
  animation-delay: 7.4s !important; }

body .animation_timeout_38 {
  animation-delay: 7.6s !important; }

body .animation_timeout_39 {
  animation-delay: 7.8s !important; }

body .animation_timeout_40 {
  animation-delay: 8s !important; }

body .animation_timeout_41 {
  animation-delay: 8.2s !important; }

body .animation_timeout_42 {
  animation-delay: 8.4s !important; }

body .animation_timeout_43 {
  animation-delay: 8.6s !important; }

body .animation_timeout_44 {
  animation-delay: 8.8s !important; }

body .animation_timeout_45 {
  animation-delay: 9s !important; }

body .animation_timeout_46 {
  animation-delay: 9.2s !important; }

body .animation_timeout_47 {
  animation-delay: 9.4s !important; }

body .animation_timeout_48 {
  animation-delay: 9.6s !important; }

body .animation_timeout_49 {
  animation-delay: 9.8s !important; }

body .animation_timeout_50 {
  animation-delay: 10s !important; }

body .animation_timeout_51 {
  animation-delay: 10.2s !important; }

body .animation_timeout_52 {
  animation-delay: 10.4s !important; }

body .animation_timeout_53 {
  animation-delay: 10.6s !important; }

body .animation_timeout_54 {
  animation-delay: 10.8s !important; }

body .animation_timeout_55 {
  animation-delay: 11s !important; }

body .animation_timeout_56 {
  animation-delay: 11.2s !important; }

body .animation_timeout_57 {
  animation-delay: 11.4s !important; }

body .animation_timeout_58 {
  animation-delay: 11.6s !important; }

body .animation_timeout_59 {
  animation-delay: 11.8s !important; }

body .animation_timeout_60 {
  animation-delay: 12s !important; }

body .animation_timeout_61 {
  animation-delay: 12.2s !important; }

body .animation_timeout_62 {
  animation-delay: 12.4s !important; }

body .animation_timeout_63 {
  animation-delay: 12.6s !important; }

body .animation_timeout_64 {
  animation-delay: 12.8s !important; }

body .animation_timeout_65 {
  animation-delay: 13s !important; }

body .animation_timeout_66 {
  animation-delay: 13.2s !important; }

body .animation_timeout_67 {
  animation-delay: 13.4s !important; }

body .animation_timeout_68 {
  animation-delay: 13.6s !important; }

body .animation_timeout_69 {
  animation-delay: 13.8s !important; }

body .animation_timeout_70 {
  animation-delay: 14s !important; }

body .stm_mgt_0 {
  margin-top: 0px; }

body .stm_mgb_0 {
  margin-bottom: 0px; }

body .stm_mgl_0 {
  margin-left: 0px; }

body .stm_mgr_0 {
  margin-right: 0px; }

body .stm_mgt_1 {
  margin-top: 1px; }

body .stm_mgb_1 {
  margin-bottom: 1px; }

body .stm_mgl_1 {
  margin-left: 1px; }

body .stm_mgr_1 {
  margin-right: 1px; }

body .stm_mgt_2 {
  margin-top: 2px; }

body .stm_mgb_2 {
  margin-bottom: 2px; }

body .stm_mgl_2 {
  margin-left: 2px; }

body .stm_mgr_2 {
  margin-right: 2px; }

body .stm_mgt_3 {
  margin-top: 3px; }

body .stm_mgb_3 {
  margin-bottom: 3px; }

body .stm_mgl_3 {
  margin-left: 3px; }

body .stm_mgr_3 {
  margin-right: 3px; }

body .stm_mgt_4 {
  margin-top: 4px; }

body .stm_mgb_4 {
  margin-bottom: 4px; }

body .stm_mgl_4 {
  margin-left: 4px; }

body .stm_mgr_4 {
  margin-right: 4px; }

body .stm_mgt_5 {
  margin-top: 5px; }

body .stm_mgb_5 {
  margin-bottom: 5px; }

body .stm_mgl_5 {
  margin-left: 5px; }

body .stm_mgr_5 {
  margin-right: 5px; }

body .stm_mgt_6 {
  margin-top: 6px; }

body .stm_mgb_6 {
  margin-bottom: 6px; }

body .stm_mgl_6 {
  margin-left: 6px; }

body .stm_mgr_6 {
  margin-right: 6px; }

body .stm_mgt_7 {
  margin-top: 7px; }

body .stm_mgb_7 {
  margin-bottom: 7px; }

body .stm_mgl_7 {
  margin-left: 7px; }

body .stm_mgr_7 {
  margin-right: 7px; }

body .stm_mgt_8 {
  margin-top: 8px; }

body .stm_mgb_8 {
  margin-bottom: 8px; }

body .stm_mgl_8 {
  margin-left: 8px; }

body .stm_mgr_8 {
  margin-right: 8px; }

body .stm_mgt_9 {
  margin-top: 9px; }

body .stm_mgb_9 {
  margin-bottom: 9px; }

body .stm_mgl_9 {
  margin-left: 9px; }

body .stm_mgr_9 {
  margin-right: 9px; }

body .stm_mgt_10 {
  margin-top: 10px; }

body .stm_mgb_10 {
  margin-bottom: 10px; }

body .stm_mgl_10 {
  margin-left: 10px; }

body .stm_mgr_10 {
  margin-right: 10px; }

body .stm_mgt_11 {
  margin-top: 11px; }

body .stm_mgb_11 {
  margin-bottom: 11px; }

body .stm_mgl_11 {
  margin-left: 11px; }

body .stm_mgr_11 {
  margin-right: 11px; }

body .stm_mgt_12 {
  margin-top: 12px; }

body .stm_mgb_12 {
  margin-bottom: 12px; }

body .stm_mgl_12 {
  margin-left: 12px; }

body .stm_mgr_12 {
  margin-right: 12px; }

body .stm_mgt_13 {
  margin-top: 13px; }

body .stm_mgb_13 {
  margin-bottom: 13px; }

body .stm_mgl_13 {
  margin-left: 13px; }

body .stm_mgr_13 {
  margin-right: 13px; }

body .stm_mgt_14 {
  margin-top: 14px; }

body .stm_mgb_14 {
  margin-bottom: 14px; }

body .stm_mgl_14 {
  margin-left: 14px; }

body .stm_mgr_14 {
  margin-right: 14px; }

body .stm_mgt_15 {
  margin-top: 15px; }

body .stm_mgb_15 {
  margin-bottom: 15px; }

body .stm_mgl_15 {
  margin-left: 15px; }

body .stm_mgr_15 {
  margin-right: 15px; }

body .stm_mgt_16 {
  margin-top: 16px; }

body .stm_mgb_16 {
  margin-bottom: 16px; }

body .stm_mgl_16 {
  margin-left: 16px; }

body .stm_mgr_16 {
  margin-right: 16px; }

body .stm_mgt_17 {
  margin-top: 17px; }

body .stm_mgb_17 {
  margin-bottom: 17px; }

body .stm_mgl_17 {
  margin-left: 17px; }

body .stm_mgr_17 {
  margin-right: 17px; }

body .stm_mgt_18 {
  margin-top: 18px; }

body .stm_mgb_18 {
  margin-bottom: 18px; }

body .stm_mgl_18 {
  margin-left: 18px; }

body .stm_mgr_18 {
  margin-right: 18px; }

body .stm_mgt_19 {
  margin-top: 19px; }

body .stm_mgb_19 {
  margin-bottom: 19px; }

body .stm_mgl_19 {
  margin-left: 19px; }

body .stm_mgr_19 {
  margin-right: 19px; }

body .stm_mgt_20 {
  margin-top: 20px; }

body .stm_mgb_20 {
  margin-bottom: 20px; }

body .stm_mgl_20 {
  margin-left: 20px; }

body .stm_mgr_20 {
  margin-right: 20px; }

body .stm_mgt_21 {
  margin-top: 21px; }

body .stm_mgb_21 {
  margin-bottom: 21px; }

body .stm_mgl_21 {
  margin-left: 21px; }

body .stm_mgr_21 {
  margin-right: 21px; }

body .stm_mgt_22 {
  margin-top: 22px; }

body .stm_mgb_22 {
  margin-bottom: 22px; }

body .stm_mgl_22 {
  margin-left: 22px; }

body .stm_mgr_22 {
  margin-right: 22px; }

body .stm_mgt_23 {
  margin-top: 23px; }

body .stm_mgb_23 {
  margin-bottom: 23px; }

body .stm_mgl_23 {
  margin-left: 23px; }

body .stm_mgr_23 {
  margin-right: 23px; }

body .stm_mgt_24 {
  margin-top: 24px; }

body .stm_mgb_24 {
  margin-bottom: 24px; }

body .stm_mgl_24 {
  margin-left: 24px; }

body .stm_mgr_24 {
  margin-right: 24px; }

body .stm_mgt_25 {
  margin-top: 25px; }

body .stm_mgb_25 {
  margin-bottom: 25px; }

body .stm_mgl_25 {
  margin-left: 25px; }

body .stm_mgr_25 {
  margin-right: 25px; }

body .stm_mgt_26 {
  margin-top: 26px; }

body .stm_mgb_26 {
  margin-bottom: 26px; }

body .stm_mgl_26 {
  margin-left: 26px; }

body .stm_mgr_26 {
  margin-right: 26px; }

body .stm_mgt_27 {
  margin-top: 27px; }

body .stm_mgb_27 {
  margin-bottom: 27px; }

body .stm_mgl_27 {
  margin-left: 27px; }

body .stm_mgr_27 {
  margin-right: 27px; }

body .stm_mgt_28 {
  margin-top: 28px; }

body .stm_mgb_28 {
  margin-bottom: 28px; }

body .stm_mgl_28 {
  margin-left: 28px; }

body .stm_mgr_28 {
  margin-right: 28px; }

body .stm_mgt_29 {
  margin-top: 29px; }

body .stm_mgb_29 {
  margin-bottom: 29px; }

body .stm_mgl_29 {
  margin-left: 29px; }

body .stm_mgr_29 {
  margin-right: 29px; }

body .stm_mgt_30 {
  margin-top: 30px; }

body .stm_mgb_30 {
  margin-bottom: 30px; }

body .stm_mgl_30 {
  margin-left: 30px; }

body .stm_mgr_30 {
  margin-right: 30px; }

body .stm_mgt_31 {
  margin-top: 31px; }

body .stm_mgb_31 {
  margin-bottom: 31px; }

body .stm_mgl_31 {
  margin-left: 31px; }

body .stm_mgr_31 {
  margin-right: 31px; }

body .stm_mgt_32 {
  margin-top: 32px; }

body .stm_mgb_32 {
  margin-bottom: 32px; }

body .stm_mgl_32 {
  margin-left: 32px; }

body .stm_mgr_32 {
  margin-right: 32px; }

body .stm_mgt_33 {
  margin-top: 33px; }

body .stm_mgb_33 {
  margin-bottom: 33px; }

body .stm_mgl_33 {
  margin-left: 33px; }

body .stm_mgr_33 {
  margin-right: 33px; }

body .stm_mgt_34 {
  margin-top: 34px; }

body .stm_mgb_34 {
  margin-bottom: 34px; }

body .stm_mgl_34 {
  margin-left: 34px; }

body .stm_mgr_34 {
  margin-right: 34px; }

body .stm_mgt_35 {
  margin-top: 35px; }

body .stm_mgb_35 {
  margin-bottom: 35px; }

body .stm_mgl_35 {
  margin-left: 35px; }

body .stm_mgr_35 {
  margin-right: 35px; }

body .stm_mgt_36 {
  margin-top: 36px; }

body .stm_mgb_36 {
  margin-bottom: 36px; }

body .stm_mgl_36 {
  margin-left: 36px; }

body .stm_mgr_36 {
  margin-right: 36px; }

body .stm_mgt_37 {
  margin-top: 37px; }

body .stm_mgb_37 {
  margin-bottom: 37px; }

body .stm_mgl_37 {
  margin-left: 37px; }

body .stm_mgr_37 {
  margin-right: 37px; }

body .stm_mgt_38 {
  margin-top: 38px; }

body .stm_mgb_38 {
  margin-bottom: 38px; }

body .stm_mgl_38 {
  margin-left: 38px; }

body .stm_mgr_38 {
  margin-right: 38px; }

body .stm_mgt_39 {
  margin-top: 39px; }

body .stm_mgb_39 {
  margin-bottom: 39px; }

body .stm_mgl_39 {
  margin-left: 39px; }

body .stm_mgr_39 {
  margin-right: 39px; }

body .stm_mgt_40 {
  margin-top: 40px; }

body .stm_mgb_40 {
  margin-bottom: 40px; }

body .stm_mgl_40 {
  margin-left: 40px; }

body .stm_mgr_40 {
  margin-right: 40px; }

body .stm_mgt_41 {
  margin-top: 41px; }

body .stm_mgb_41 {
  margin-bottom: 41px; }

body .stm_mgl_41 {
  margin-left: 41px; }

body .stm_mgr_41 {
  margin-right: 41px; }

body .stm_mgt_42 {
  margin-top: 42px; }

body .stm_mgb_42 {
  margin-bottom: 42px; }

body .stm_mgl_42 {
  margin-left: 42px; }

body .stm_mgr_42 {
  margin-right: 42px; }

body .stm_mgt_43 {
  margin-top: 43px; }

body .stm_mgb_43 {
  margin-bottom: 43px; }

body .stm_mgl_43 {
  margin-left: 43px; }

body .stm_mgr_43 {
  margin-right: 43px; }

body .stm_mgt_44 {
  margin-top: 44px; }

body .stm_mgb_44 {
  margin-bottom: 44px; }

body .stm_mgl_44 {
  margin-left: 44px; }

body .stm_mgr_44 {
  margin-right: 44px; }

body .stm_mgt_45 {
  margin-top: 45px; }

body .stm_mgb_45 {
  margin-bottom: 45px; }

body .stm_mgl_45 {
  margin-left: 45px; }

body .stm_mgr_45 {
  margin-right: 45px; }

body .stm_mgt_46 {
  margin-top: 46px; }

body .stm_mgb_46 {
  margin-bottom: 46px; }

body .stm_mgl_46 {
  margin-left: 46px; }

body .stm_mgr_46 {
  margin-right: 46px; }

body .stm_mgt_47 {
  margin-top: 47px; }

body .stm_mgb_47 {
  margin-bottom: 47px; }

body .stm_mgl_47 {
  margin-left: 47px; }

body .stm_mgr_47 {
  margin-right: 47px; }

body .stm_mgt_48 {
  margin-top: 48px; }

body .stm_mgb_48 {
  margin-bottom: 48px; }

body .stm_mgl_48 {
  margin-left: 48px; }

body .stm_mgr_48 {
  margin-right: 48px; }

body .stm_mgt_49 {
  margin-top: 49px; }

body .stm_mgb_49 {
  margin-bottom: 49px; }

body .stm_mgl_49 {
  margin-left: 49px; }

body .stm_mgr_49 {
  margin-right: 49px; }

body .stm_mgt_50 {
  margin-top: 50px; }

body .stm_mgb_50 {
  margin-bottom: 50px; }

body .stm_mgl_50 {
  margin-left: 50px; }

body .stm_mgr_50 {
  margin-right: 50px; }

body .stm_mgt_51 {
  margin-top: 51px; }

body .stm_mgb_51 {
  margin-bottom: 51px; }

body .stm_mgl_51 {
  margin-left: 51px; }

body .stm_mgr_51 {
  margin-right: 51px; }

body .stm_mgt_52 {
  margin-top: 52px; }

body .stm_mgb_52 {
  margin-bottom: 52px; }

body .stm_mgl_52 {
  margin-left: 52px; }

body .stm_mgr_52 {
  margin-right: 52px; }

body .stm_mgt_53 {
  margin-top: 53px; }

body .stm_mgb_53 {
  margin-bottom: 53px; }

body .stm_mgl_53 {
  margin-left: 53px; }

body .stm_mgr_53 {
  margin-right: 53px; }

body .stm_mgt_54 {
  margin-top: 54px; }

body .stm_mgb_54 {
  margin-bottom: 54px; }

body .stm_mgl_54 {
  margin-left: 54px; }

body .stm_mgr_54 {
  margin-right: 54px; }

body .stm_mgt_55 {
  margin-top: 55px; }

body .stm_mgb_55 {
  margin-bottom: 55px; }

body .stm_mgl_55 {
  margin-left: 55px; }

body .stm_mgr_55 {
  margin-right: 55px; }

body .stm_mgt_56 {
  margin-top: 56px; }

body .stm_mgb_56 {
  margin-bottom: 56px; }

body .stm_mgl_56 {
  margin-left: 56px; }

body .stm_mgr_56 {
  margin-right: 56px; }

body .stm_mgt_57 {
  margin-top: 57px; }

body .stm_mgb_57 {
  margin-bottom: 57px; }

body .stm_mgl_57 {
  margin-left: 57px; }

body .stm_mgr_57 {
  margin-right: 57px; }

body .stm_mgt_58 {
  margin-top: 58px; }

body .stm_mgb_58 {
  margin-bottom: 58px; }

body .stm_mgl_58 {
  margin-left: 58px; }

body .stm_mgr_58 {
  margin-right: 58px; }

body .stm_mgt_59 {
  margin-top: 59px; }

body .stm_mgb_59 {
  margin-bottom: 59px; }

body .stm_mgl_59 {
  margin-left: 59px; }

body .stm_mgr_59 {
  margin-right: 59px; }

body .stm_mgt_60 {
  margin-top: 60px; }

body .stm_mgb_60 {
  margin-bottom: 60px; }

body .stm_mgl_60 {
  margin-left: 60px; }

body .stm_mgr_60 {
  margin-right: 60px; }

body .stm_mgt_61 {
  margin-top: 61px; }

body .stm_mgb_61 {
  margin-bottom: 61px; }

body .stm_mgl_61 {
  margin-left: 61px; }

body .stm_mgr_61 {
  margin-right: 61px; }

body .stm_mgt_62 {
  margin-top: 62px; }

body .stm_mgb_62 {
  margin-bottom: 62px; }

body .stm_mgl_62 {
  margin-left: 62px; }

body .stm_mgr_62 {
  margin-right: 62px; }

body .stm_mgt_63 {
  margin-top: 63px; }

body .stm_mgb_63 {
  margin-bottom: 63px; }

body .stm_mgl_63 {
  margin-left: 63px; }

body .stm_mgr_63 {
  margin-right: 63px; }

body .stm_mgt_64 {
  margin-top: 64px; }

body .stm_mgb_64 {
  margin-bottom: 64px; }

body .stm_mgl_64 {
  margin-left: 64px; }

body .stm_mgr_64 {
  margin-right: 64px; }

body .stm_mgt_65 {
  margin-top: 65px; }

body .stm_mgb_65 {
  margin-bottom: 65px; }

body .stm_mgl_65 {
  margin-left: 65px; }

body .stm_mgr_65 {
  margin-right: 65px; }

body .stm_mgt_66 {
  margin-top: 66px; }

body .stm_mgb_66 {
  margin-bottom: 66px; }

body .stm_mgl_66 {
  margin-left: 66px; }

body .stm_mgr_66 {
  margin-right: 66px; }

body .stm_mgt_67 {
  margin-top: 67px; }

body .stm_mgb_67 {
  margin-bottom: 67px; }

body .stm_mgl_67 {
  margin-left: 67px; }

body .stm_mgr_67 {
  margin-right: 67px; }

body .stm_mgt_68 {
  margin-top: 68px; }

body .stm_mgb_68 {
  margin-bottom: 68px; }

body .stm_mgl_68 {
  margin-left: 68px; }

body .stm_mgr_68 {
  margin-right: 68px; }

body .stm_mgt_69 {
  margin-top: 69px; }

body .stm_mgb_69 {
  margin-bottom: 69px; }

body .stm_mgl_69 {
  margin-left: 69px; }

body .stm_mgr_69 {
  margin-right: 69px; }

body .stm_mgt_70 {
  margin-top: 70px; }

body .stm_mgb_70 {
  margin-bottom: 70px; }

body .stm_mgl_70 {
  margin-left: 70px; }

body .stm_mgr_70 {
  margin-right: 70px; }

/*font weights*/
.fwl {
  font-weight: 300 !important; }

.fwn {
  font-weight: 400 !important; }

.fwm {
  font-weight: 500 !important; }

.fwsb {
  font-weight: 600 !important; }

.fwb {
  font-weight: 700 !important; }

.fweb {
  font-weight: 900 !important; }

.stm_ls_0 {
  letter-spacing: 0 !important; }

.stm_mgl_a {
  margin-left: auto !important; }

.stm_mgr_a {
  margin-right: auto !important; }

.italic {
  font-style: italic; }

.no-margin {
  margin: 0 !important; }

.no_deco {
  text-decoration: none !important; }

@media (max-width: 769px) {
  .stm_default_paddings .vc_column-inner {
    padding-right: 15px !important;
    padding-left: 15px !important; } }

.line_closer:before {
  margin-bottom: 10px !important; }

.text-transform_lower {
  text-transform: lowercase !important; }

.wtc {
  color: #fff !important; }

.vc_row {
  position: relative; }

.stm_row-opacity {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0; }

body .stm-parallax {
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0); }
  @media (max-width: 1024px) {
    body .stm-parallax {
      background-position: 0 0 !important;
      background-attachment: scroll !important; } }

img {
  max-width: 100%;
  height: auto;
  transform: translateZ(0); }

.stm-effects_opacity {
  opacity: 0.6; }
  .stm-effects_opacity:hover {
    opacity: 1; }

.stm_owl__glitches {
  position: absolute;
  opacity: 0;
  visibility: hidden; }
  .stm_owl__glitches:first-child {
    position: relative;
    opacity: 1;
    visibility: visible; }

.stm_fullwidth {
  padding-left: 3000px !important;
  padding-right: 3000px !important;
  margin-right: -3000px !important;
  margin-left: -3000px !important; }

.owl-nav .owl-prev,
.owl-nav .owl-next {
  position: absolute;
  top: 50%;
  display: block;
  width: 45px;
  height: 45px;
  margin-top: -35px;
  border: 3px solid rgba(255, 255, 255, 0.7);
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  z-index: 100; }
  .owl-nav .owl-prev:before,
  .owl-nav .owl-next:before {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    line-height: 40px;
    color: rgba(255, 255, 255, 0.7); }
  .owl-nav .owl-prev:hover:before,
  .owl-nav .owl-next:hover:before {
    color: white; }

.owl-nav .owl-prev {
  left: -92px; }
  @media (max-width: 1300px) {
    .owl-nav .owl-prev {
      left: -50px; } }
  .owl-nav .owl-prev:before {
    content: "\f053";
    text-indent: -2px; }

.owl-nav .owl-next {
  right: -92px; }
  @media (max-width: 1300px) {
    .owl-nav .owl-next {
      right: -50px; } }
  .owl-nav .owl-next:before {
    content: "\f054";
    text-indent: 2px; }

.stm_owl_navRight .owl-nav .owl-prev,
.stm_owl_navRight .owl-nav .owl-next {
  top: auto;
  bottom: 20px; }

.stm_owl_navRight .owl-nav .owl-prev {
  left: auto;
  right: 75px; }

.stm_owl_navRight .owl-nav .owl-next {
  right: 20px; }

.owl-filter .owl-carousel .stm_item {
  opacity: 1; }

.owl-filter .owl-carousel .stm_item.__loading {
  opacity: 0; }

.stm_owl_dots .owl-dots {
  margin-top: 20px; }
  .stm_owl_dots .owl-dots .owl-dot {
    display: inline-block;
    margin-right: 10px;
    width: 10px;
    height: 10px;
    background-color: #ccc; }

body .vc_grid-loading,
.stm_preloader__element {
  animation: none !important; }
  body .vc_grid-loading:before,
  .stm_preloader__element:before {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: none;
    animation: scaleout 1.0s infinite ease-in-out;
    transition: all 0.5s ease-in-out; }
  body .vc_grid-loading:after,
  .stm_preloader__element:after {
    display: none; }

.stm_dpb {
  display: block; }

.stm_flex {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap; }
  .stm_flex_center {
    -ms-flex-align: center;
        align-items: center; }
  .stm_flex_last > *:last-child:not(:first-child) {
    margin-left: auto;
    padding-left: 15px; }
  .stm_flex_nowrap {
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap; }
  .stm_flex_row {
    -ms-flex-direction: row;
        flex-direction: row; }
  .stm_flex_col {
    -ms-flex-direction: column;
        flex-direction: column; }
  .stm_flex_justify_space_between {
    -ms-flex-pack: justify;
        justify-content: space-between; }
  .stm_flex_align_items_center {
    -ms-flex-align: center;
        align-items: center; }

.stm_linear_repeater {
  width: 100%;
  height: 6px;
  margin: 27px 0;
  background: repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.15) 5px, rgba(0, 0, 0, 0.15) 10px, transparent 10px, transparent 15px); }

.js_trigger__unit {
  display: none; }
  .js_trigger__unit_class {
    display: block; }

.ic:hover {
  color: inherit; }

.stm_separator-line {
  margin: 30px 0 40px; }
  .stm_separator-line_grey {
    border-bottom: 1px solid #ccc; }

.stm_pt_1 {
  position: relative;
  top: 1px; }

.stm_pb_1 {
  position: relative;
  top: -1px; }

.unclickable {
  cursor: default; }

.no_line:before {
  display: none; }

.no_line h1:before,
.no_line .h1:before,
.no_line h2:before,
.no_line .h2:before,
.no_line h3:before,
.no_line .h3:before,
.no_line h4:before,
.no_line .h4:before,
.no_line h5:before,
.no_line .h5:before,
.no_line h6:before,
.no_line .h6:before {
  display: none; }

div.wpcf7 .ajax-loader {
  background-image: none !important;
  vertical-align: middle;
  margin-left: 15px; }
  div.wpcf7 .ajax-loader:after {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    box-shadow: none;
    animation: scaleout 1.0s infinite ease-in-out;
    transition: all 0.5s ease-in-out;
    width: 16px;
    height: 16px; }

@media (max-width: 1023px) {
  body .stm_xs__reset {
    margin: 0 !important;
    padding: 0 !important; } }

.atcb-item-link:hover,
.vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel.vc_active .vc_tta-title-text,
.wtc_h.active,
.wtc_h:not(.wbc):hover,
.stm_titlebox .stm_breadcrumbs span > span[property="name"] {
  color: white !important; }

@media (min-width: 992px) {
  .row .col-md-4:nth-child(3n+1) {
    clear: both; }
  .row .col-md-5:nth-child(4n+1) {
    clear: both; } }

.overlap {
  position: relative;
  z-index: 15 !important; }

.ajax_message {
  display: none;
  position: relative;
  margin: 30px 0 0;
  padding: 15px 30px;
  font-size: 16px;
  background-color: #ff0000 !important;
  color: #fff !important;
  border-color: #ff0000 !important; }
  .ajax_message.success {
    background-color: #03d56b !important;
    color: #fff !important;
    border-color: #03d56b !important; }
    .ajax_message.success:before {
      border-bottom-color: #03d56b; }
  .ajax_message:before {
    content: '';
    display: block;
    position: absolute;
    top: -7px;
    left: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7px 7px 7px;
    border-color: transparent transparent #ff0000 transparent; }

.stm_no_side_mg {
  margin-left: 0 !important;
  margin-right: 0 !important; }

.stm_no_side_pd {
  padding-left: 0 !important;
  padding-right: 0 !important; }

@media (min-width: 480px) and (max-width: 768px) {
  .col-sxs-6 {
    width: 50%;
    float: left;
    clear: none !important; }
    .col-sxs-6:nth-child(2n) {
      clear: both; } }

@media (max-width: 550px) {
  .stm_reset_sm_side_pd .vc_column-inner {
    padding-left: 15px !important;
    padding-right: 15px !important; } }

.text-center > .wpcf7-submit {
  margin-left: 31px; }
  @media (max-width: 550px) {
    .text-center > .wpcf7-submit {
      margin-left: 0; } }

.wpb_revslider_element.wpb_content_element {
  margin-bottom: 0; }

.ov_hidden {
  overflow: hidden; }

body .wpb_single_image .vc_box_border_circle.vc_box_border_white {
  padding: 0;
  background-color: #e7e7e7;
  border: 6px solid #fff; }

.vertical-alignment-helper {
  display: table;
  height: 100%;
  width: 100%;
  pointer-events: none; }
  .vertical-alignment-helper .vertical-align-center {
    display: table-cell;
    vertical-align: middle;
    pointer-events: none; }
    .vertical-alignment-helper .vertical-align-center .modal-content {
      width: inherit;
      height: inherit;
      margin: 0 auto;
      pointer-events: all; }

@media (max-width: 1023px) {
  .site-content .sm_mgt_0 {
    margin-top: 0 !important; }
  .site-content .sm_mgb_0 {
    margin-bottom: 0 !important; }
  .site-content .sm_pb_0 {
    padding-bottom: 0 !important; }
  .site-content .sm_pd_0 {
    padding: 0 !important; }
  .site-content .sm_pl_15 {
    padding-left: 15px; }
  .site-content .sm_pr_15 {
    padding-right: 15px; }
  .no_borders {
    border: 0; }
    .no_borders .stm_widget_posts.style_2 > ul li,
    .no_borders .stm_widget_posts.style_1 ul li a {
      margin-bottom: 0 !important;
      border-bottom: 0 !important; }
  .sm_hide_bg {
    background-image: none; }
    .sm_hide_bg .vc_column-inner {
      background-image: none !important; } }

@media (max-width: 550px) {
  .site-content .xs_mgt_0 {
    margin-top: 0 !important; }
  .site-content .xs_mgt_0 {
    margin-top: 0 !important; }
  .site-content .xs_mgb_0 {
    margin-bottom: 0 !important; } }

body.page-ajax-driven .site-content,
body.page-ajax-driven .stm-audio-player,
body.page-ajax-driven .stm-footer {
  position: relative;
  top: 0;
  transition: .3s ease .4s; }

body.page-ajax-driven.is-loading .site-content,
body.page-ajax-driven.is-loading .stm-audio-player,
body.page-ajax-driven.is-loading .stm-footer {
  opacity: 0;
  visibility: hidden;
  top: 10px;
  transition: .3s ease 0s; }

body.page-ajax-driven.is-loading #wrapper:before {
  opacity: 1;
  visibility: visible; }

body.page-ajax-driven #wrapper:before {
  content: '';
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: none;
  animation: scaleout 1.0s infinite ease-in-out;
  transition: all 0.5s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  opacity: 0;
  visibility: hidden; }

.stmicon-can {
  text-indent: -1px; }

.stm_contrast {
  color: #fff; }
  .stm_contrast h1,
  .stm_contrast h2,
  .stm_contrast h3,
  .stm_contrast h4,
  .stm_contrast h5,
  .stm_contrast h6,
  .stm_contrast .h1,
  .stm_contrast .h2,
  .stm_contrast .h3,
  .stm_contrast .h4,
  .stm_contrast .h5,
  .stm_contrast .h6 {
    color: #fff; }

.modal-backdrop.in {
  opacity: 0.9; }

.stm_play {
  position: relative;
  display: block;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  opacity: 0.8; }
  .stm_play:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    margin: -31px 0 0 -15px;
    border-style: solid;
    border-width: 31.5px 0 31.5px 47px;
    border-color: transparent transparent transparent #fff; }
  .stm_play:hover {
    opacity: 1; }

body .bg_bot {
  background-position: 50% 100% !important; }

@media (max-width: 480px) {
  .hidden-xxs {
    display: none; }
  .col-xxs-12 {
    width: 100%;
    margin: 0; } }

.stm_icons_demo__list .stm_icon {
  display: inline-block;
  vertical-align: bottom;
  margin: 0 30px 30px 0; }
  .stm_icons_demo__list .stm_icon:last-child {
    margin-right: 0; }

.stm_buttons_demo__list .stm-button {
  margin-bottom: 15px; }

.visible-sm_landscape {
  display: none; }
  @media (max-width: 1025px) and (min-width: 992px) {
    .visible-sm_landscape {
      display: block; } }

@media (max-width: 1025px) and (min-width: 992px) {
  .stm_spacer .visible-md {
    display: none !important; } }

.stm_lazyload_image {
  position: relative;
  display: block !important;
  background-color: #ccc;
  z-index: 99; }
  .stm_lazyload_image__preloader {
    background-color: transparent; }
  .stm_lazyload_image img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 10px;
    transition: all .35s ease !important; }
  .stm_lazyload_image .lazyload {
    opacity: 0; }
    .stm_lazyload_image .lazyloading {
      top: 10px;
      opacity: 0; }
    .stm_lazyload_image .lazyloaded {
      opacity: 1;
      top: 0; }

.noclear {
  clear: none !important; }

.pearl_wp_link_pages {
  margin: 30px 0;
  padding-top: 30px;
  border-top: 1px solid #eeeff2;
  text-align: center; }
  .pearl_wp_link_pages > * {
    display: inline-block;
    min-width: 33px;
    padding: 5px 12px;
    margin: 0 5px;
    background-color: #eeeff2;
    font-weight: 700;
    font-size: 13px; }
  .pearl_wp_link_pages a {
    text-decoration: none !important; }
    .pearl_wp_link_pages a .stm_page_num {
      color: #333; }
  .pearl_wp_link_pages .stm_page_num {
    color: #fff; }

#wrapper.ls-overflow-visible {
  overflow: hidden !important; }

@media (max-width: 767px) {
  .ls-wrapper {
    width: 100% !important; } }

.lg-icon {
  font-family: 'lg' !important; }

.bsd {
  border-style: double; }

.bsd_i > .vc_column-inner {
  border-style: double; }

.modal-open div#wrapper {
  z-index: auto; }

.stm_hover_action__top img {
  position: relative;
  top: 0;
  transition: .3s ease; }

.stm_hover_action__top:hover img {
  top: -20px; }

@media (max-width: 600px) {
  body .xs-no-bg {
    background-image: none !important; } }

body.disable-hover {
  pointer-events: none; }

#pearl_bubble_animation {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  opacity: 0.5; }

@media (max-width: 767px) {
  .vc_section[data-vc-full-width] {
    padding-left: 15px !important;
    padding-right: 15px !important; } }

.stm-footer {
  position: relative;
  padding: 50px 0 0;
  overflow: hidden; }
  .stm-footer > .container {
    position: relative;
    z-index: 20; }
  .stm-footer .footer-widgets {
    margin: 0 -15px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    padding-bottom: 44px; }
    .stm-footer .footer-widgets aside.widget {
      width: 25%;
      padding: 0 15px;
      margin-bottom: 24px; }
      @media (max-width: 1024px) {
        .stm-footer .footer-widgets aside.widget {
          width: 50%; } }
      @media (max-width: 550px) {
        .stm-footer .footer-widgets aside.widget {
          width: 100%; } }
      .stm-footer .footer-widgets aside.widget .widgettitle h4 {
        text-transform: uppercase; }
  .stm-footer__bottom {
    position: relative;
    padding: 14px 0 16px;
    border-top: 2px solid rgba(255, 255, 255, 0.3); }
    .stm-footer__bottom:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      left: -9999px;
      right: -9999px;
      z-index: 10; }
    .stm-footer__bottom .stm_markup {
      position: relative;
      z-index: 20; }
      .stm-footer__bottom .stm_markup .stm_markup {
        -ms-flex-align: center;
            align-items: center; }
    .stm-footer__bottom .stm_markup__sidebar {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
          align-items: center;
      -ms-flex-pack: end;
          justify-content: flex-end; }
      .stm-footer__bottom .stm_markup__sidebar > div {
        margin-left: 15px; }
        .stm-footer__bottom .stm_markup__sidebar > div:first-child {
          margin-left: 0; }
    .stm-footer__bottom .stm-socials {
      display: inline-block;
      vertical-align: top; }

.stm_layout_logistics.stm_footer_layout_1 .stm-footer__bottom {
  border-top-width: 1px; }
  .stm_layout_logistics.stm_footer_layout_1 .stm-footer__bottom .stm_bottom_copyright {
    font-size: 14px; }
  .stm_layout_logistics.stm_footer_layout_1 .stm-footer__bottom .stm-socials__icon {
    margin: 0 4px;
    background-color: rgba(255, 255, 255, 0.25); }

.stm_layout_restaurant.stm_footer_layout_1 .stm-footer__bottom .stm_bottom_copyright {
  padding-top: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5); }
  .stm_layout_restaurant.stm_footer_layout_1 .stm-footer__bottom .stm_bottom_copyright a {
    color: rgba(255, 255, 255, 0.5); }

.stm_layout_restaurant.stm_footer_layout_1 .stm-footer__bottom .stm-socials__icon {
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.5); }

/*Widgets*/
.widget_contacts p {
  position: relative; }

.widget_contacts .fa-home {
  font-size: 21px; }

.widget_contacts .fa-phone-square {
  font-size: 20px; }

.widget_contacts .fa-fax {
  font-size: 18px; }

.widget_contacts .fa-envelope {
  font-size: 17px; }

.widget_contacts a {
  text-decoration: none !important; }

.widget_pages ul {
  padding: 0;
  margin: 0;
  list-style: none; }
  .widget_pages ul li {
    padding: 0;
    width: 50%;
    margin-bottom: 15px;
    float: left; }
    .widget_pages ul li a {
      display: inline-block;
      position: relative;
      color: #fff;
      opacity: 0.6;
      text-decoration: none !important; }
      .widget_pages ul li a:hover {
        opacity: 1; }
        .widget_pages ul li a:hover:before {
          width: 100%; }
      .widget_pages ul li a:before, .widget_pages ul li a:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
        opacity: 0.6; }
      .widget_pages ul li a:before {
        width: 0%; }

.stm_markup__sidebar_divider .widget_pages ul li {
  width: 100%; }

.stm_markup__sidebar_divider .widget_pages ul ul {
  margin-top: 7px; }

.footer_widgets_count_0 .stm-footer__bottom {
  border-top: 0 !important; }

@media (max-width: 1023px) {
  .stm-footer__bottom .stm_markup__sidebar {
    margin: 15px 0 0;
    text-align: left;
    -ms-flex-pack: start;
        justify-content: flex-start; } }

.pearl_arrow_top {
  display: block;
  position: fixed;
  right: 4%;
  bottom: 3%;
  transform: translateX(-3%) translateY(0);
  z-index: 99999;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all .2s linear; }
  .pearl_arrow_top.arrowShow {
    opacity: 1;
    visibility: visible; }
  .pearl_arrow_top .arrow:after,
  .pearl_arrow_top .arrow:before, .pearl_arrow_top:after, .pearl_arrow_top:before {
    content: '';
    display: block;
    position: absolute;
    top: 23px;
    left: 20px;
    width: 8px;
    height: 1px;
    background-color: #000;
    z-index: 20; }
  .pearl_arrow_top .arrow:before, .pearl_arrow_top:before {
    transform: rotate(-45deg); }
  .pearl_arrow_top .arrow:after, .pearl_arrow_top:after {
    left: 26px;
    transform: rotate(45deg); }
  .pearl_arrow_top .arrow {
    display: -ms-flexbox;
    display: flex;
    width: 53px;
    height: 53px;
    border-radius: 50%;
    -ms-flex-pack: center;
        justify-content: center;
    -ms-flex-align: center;
        align-items: center;
    background-color: white;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
    z-index: 3; }
    .pearl_arrow_top .arrow:after, .pearl_arrow_top .arrow:before {
      top: 28px; }
  .pearl_arrow_top:hover {
    transform: translateX(-3%) translateY(-5px); }

.footer-widgets .wp-caption {
  background: transparent; }

.footer-widgets .widget.widget-default.widget_search .search-form input[name="s"] {
  color: #fff; }

.footer-widgets .widget.widget_meta ul li, .footer-widgets .widget.widget_recent_comments ul li, .footer-widgets .widget.widget_archive ul li {
  padding-left: 15px; }

.footer-widgets .widget.widget_recent_entries ul li:before {
  background-color: rgba(255, 255, 255, 0.3); }

.footer-widgets .widget.widget_pages ul li ul.children {
  padding-left: 15px;
  margin-top: 10px; }
  .footer-widgets .widget.widget_pages ul li ul.children li {
    width: 100%; }
  .footer-widgets .widget.widget_pages ul li ul.children:after {
    content: '';
    clear: both;
    display: block; }

/*Grid data date*/
.stm_single-date,
.vc_gitem-post-data-source-post_date {
  position: relative;
  padding-left: 23px;
  color: #aaa; }
  .stm_single-date:before,
  .vc_gitem-post-data-source-post_date:before {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\f017";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -7px; }
  @media (max-width: 1023px) {
    .stm_single-date:before,
    .vc_gitem-post-data-source-post_date:before {
      margin-top: -9px; } }

/*POST VIDEO*/
.stm_post_has_video .stm_markup.stm_single_post {
  position: relative;
  padding-top: 720px; }
  .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format {
    position: absolute;
    top: 0;
    left: 15px;
    right: 15px;
    height: 640px;
    background-size: cover;
    cursor: pointer; }
    .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format:hover:before {
      opacity: 1; }
    .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format:hover:after {
      border-color: #000 !important; }
    .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format:hover .play {
      background-color: #000 !important; }
      .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format:hover .play:after, .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format:hover .play:before {
        background-color: #000 !important; }
    .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.6);
      transition: .3s ease;
      opacity: 0; }
    .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format .play {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 2px;
      height: 34px;
      margin: -17px 0 0 -11px;
      background-color: #fff;
      transition: .3s ease; }
      .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format .play:before, .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format .play:after {
        content: '';
        display: block;
        position: absolute;
        left: -2px;
        width: 35px;
        height: 2px;
        background-color: #fff;
        transition: .3s ease; }
      .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format .play:before {
        top: 7px;
        transform: rotate(30deg); }
      .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format .play:after {
        top: 24px;
        transform: rotate(-30deg); }
    .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin: -50px 0 0 -50px;
      border: 2px solid #fff;
      border-radius: 50%;
      transition: .3s ease; }

@media (max-width: 550px) {
  .stm_post_has_video .stm_markup.stm_single_post {
    padding-top: 350px; }
    .stm_post_has_video .stm_markup.stm_single_post .stm_single_post_video_format {
      height: 300px; } }

.stm_author_box__content p:last-child {
  margin-bottom: 0; }

.stm_page_bc .stm_breadcrumbs {
  padding-bottom: 10px;
  margin-bottom: 70px;
  border-bottom: 1px solid #e5e8ec;
  color: #888;
  vertical-align: top;
  font-size: 11px;
  text-transform: uppercase; }
  .stm_page_bc .stm_breadcrumbs a {
    color: #888; }

.stm_titlebox .stm_breadcrumbs {
  position: relative;
  font-size: 13px;
  font-weight: 900;
  text-transform: uppercase;
  margin: 10px 0 0 0; }
  .stm_titlebox .stm_breadcrumbs span[property="name"] {
    text-transform: uppercase; }
  .stm_titlebox .stm_breadcrumbs a[property="item"] {
    text-decoration: none !important; }
  .stm_titlebox .stm_breadcrumbs > span {
    margin: 0 5px; }
    .stm_titlebox .stm_breadcrumbs > span:first-child {
      margin-left: 0; }

.site-content > .container .stm_page_bc.container {
  padding: 0; }

/*Default animation*/
.stm_animated,
.album-info,
.stm_posttimeline_style_1 .stm_posttimeline__post h3,
.audio-toggle,
.audio-toggle:after,
.stm_projects_grid_style_5 .stm_projects_grid .stm_projects_carousel__item .stm_projects_carousel__overlay i,
.stm_loop__single_style8 .inner .post_thumbnail span,
.stm_loop__single_style8 .inner .post_thumbnail img,
.stm_posts_list_style_3 .stm_posts_list_single__body:after,
.stm_post_style_8.stm_post_view_grid .stm_loop__grid .stm_posts_list_single__body:after,
.stm_posts_list_style_3 .stm_posts_list_single__body:before,
.stm_post_style_8.stm_post_view_grid .stm_loop__grid .stm_posts_list_single__body:before,
.stm_icontext_style_4 .stm_icontext__icon,
.stm_projects_grid_style_5 .stm_gallery_masonry__link:after,
.stm_testimonials_style_6 .stm_testimonials__item,
.stm_testimonials_style_6 .stm_testimonials__item:before,
.stm_projects_grid_style_4 .stm_projects_grid__sorting .stm_projects_carousel__tab a.active:after,
.stm_icon i,
.slick-dots li:before,
.stm-header .stm-search_style_2 button i,
.site-content .widget.widget_search .search-form button i,
.vc_tta-title-text,
.stm-search_style_2 button:after,
.stm_pricing-table_style_3,
.stm_iconbox_style_6:before,
.stm_featured_row .vc_column-inner,
.stm_featured_row > .vc_row > .wpb_column,
.stm_partners_grayscale img,
.stm_loop__list .stm_loop__single h3:before,
.stm_loop__list .stm_loop__single h3:after,
.stm_slider_style_2 .owl-dots .owl-dot,
.stm_projects_grid_style_2 .stm_projects__meta:before,
.stm_vacancies_style_2 .stm_vacancies__single .inner:before,
ul.page-numbers li .page-numbers:after,
.stm_loop__grid .stm_loop__single .postinfo_grid > div span,
.stm_loop__list .stm_loop__single,
.stm_slider .stm_slide__title,
.stm_schedule_style_1 .event_lesson_tabs dfn,
.stm_schedule_style_1 .event_lesson_tabs a,
.stm_input_wrapper:after,
.stm_input_wrapper:before,
.stm_single_event__calendar .addtocalendar,
.btn.btn_loading.loading,
.btn.btn_loading.loading span,
.stm_event_single_list .hasTitle h3,
.stm_posttimeline_style_1 .stm_posttimeline__post p,
.stm_posttimeline_style_1 .stm_posttimeline__post_image:after,
.stm_posttimeline_style_1 .stm_posttimeline__post_image:before,
body .booked-modal button,
body .booked-calendar-wrap .booked-appt-list .timeslot .timeslot-people button,
body .booked-list-view .booked-list-view-nav .booked-list-view-date-prev,
body .booked-list-view .booked-list-view-nav .booked-list-view-date-next,
.stm_widget_posts__title,
.stm_staff_grid_style_1 .stm_staff__image .stm_staff__socials li:before,
.stm_material_form > span,
.stm_services_style_2 .stm_services__image:before,
.stm_services_style_2 .stm_services__image i,
.stm_testimonials_style_2 .owl-dots .owl-dot,
.stm_material_form input,
.stm_iconbox.stm_iconbox_style_1,
.stm_infobox__image img,
.stm_infobox__image,
.stm_infobox__content,
.stm_infobox__content > *,
.stm-header,
.stm-header__overlay,
.stm-site-loader:before,
.stm-site-loader:after,
.stm-navigation__line_top ul > li:before,
.stm-navigation__line_bottom ul > li:before,
.stm_posts_list__single:before,
.stm_playb,
.stm_playb:before,
.stm_playb:after,
.stm_owl_dots .owl-dots .owl-dot,
.owl-controls .owl-dots .owl-dot span:after,
.stm_carousel__single_small:before,
.btn_load span,
.btn_load:before,
a:not(.stm_projects_carousel__item):not(.stm_projects_card):not(.rev-btn),
.vc_tta.vc_tta-tabs .vc_tta-title-text,
.vc_tta.vc_tta-tabs .vc_tta-title-text:before,
.stm_vacancies__single,
.stm_vacancies__single:before,
.stm_staff__image,
.stm_staff__image:before,
.stm_staff__socials,
.stm_staff_style_2 .stm_staff__image .stm_staff__socials li:before,
.stm_partners_style_2 .stm_partners__title,
.stm_partners_style_2 .stm_partners__title:before,
.stm_partners_style_2 .stm_partners__image:before,
.stm_partners__image,
.btn_divider .btn__icon:after,
.widget.stm_widget_categories ul li:before,
button[type="submit"],
input[type="submit"],
.widget.widget_recent_entries ul li:before,
.search-form button,
.search-form input,
.btn__icon,
ul.page-numbers .page-numbers,
.stm_separator_doubled:before,
.stm_loop__single:after,
.stm_loop__single:before,
.stm_projects_carousel__overlay,
.stm_projects_carousel__name,
.stm_projects_carousel__btn,
.owl-nav .owl-prev:hover,
.owl-nav .owl-next:hover,
.btn,
.stm_widget_pages_style_1 ul li:before,
.stm-navigation ul.sub-menu:hover,
.stm-navigation__fullwidth > ul > li > ul > li > a,
.tparrows.persephone,
.tparrows.persephone:before,
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
input[type="date"],
textarea,
.stm-navigation__default li,
.stm_header_style_3 .stm-offices .stm-switcher__list .stm-switcher__option,
.stm_form_style_2 [type="submit"],
.stm_loop__single_grid_style_2 .stm_loop__container,
.stm_loop__single_list_style_2 .stm_loop__container,
.stm_services_style_3 .stm_services__container,
.owl-dot span,
.tp-bullets.beauty .tp-bullet span,
.form-control,
.stm_staff_container_grid.style_6 .stm_staff,
.stm_posts_list_single__container,
.stm_events_list_style_3 .stm_event_single_list .inner,
.stm_staff_cta .stm_staff_cta__link,
.stm_staff_cta .stm_staff_cta__title,
.selectric-scroll li,
.services_price_list .services_pills_container li a:after,
.stm_video_list__wrapper .stm_video_list__label,
.play-video:before,
.play-video:after,
.stm_posts_list .stm_posts_list_single__image img,
.services_price_list .service__image:before,
.services_price_list .service__image:after,
.services_price_list .service__image img,
.services_price_list .service__image .stm_price_list__image,
.stm_post_style_9 .stm_posts_list_single__image img,
.stm_mobile__header,
.stm_post_style_9 .related_post__image img,
.stm_iconbox_style_10 .stm_iconbox__icon:after,
.stm_media_events_list .media_event__link,
.stm_widget_popular_posts__title,
.stm_image_posts_slider_style_1 .slider__nav .owl-prev,
.stm_image_posts_slider_style_1 .slider__nav .owl-next,
.stm_image_posts_slider_style_1 .slider__thumbnail img,
.stm_posts_list_style_17 .stm_posts_list_single__image,
.stm_projects_grid_style_9 .stm_projects_grid__sorting li a:after,
.stm_categories_tabs_style_2 ul.nav-tabs li a:after,
.stm_categories_tabs_style_2 .single_post__image:before,
.stm_categories_tabs_style_2 .single_post__image:after,
.stm_categories_tabs_style_2 .single_post__image a:after,
.stm_products .product_thumbnail__overlay,
.stm_products_style_3 .stm_product__single .product_thumbnail__overlay,
.stm_services_style_11 .stm_service__single,
.stm_services_style_11 .stm_service__image,
.stm_services_style_11 .stm_service__overlay,
.stm_infobox_style_7 .stm_infobox__image:after,
.stm-header .stm-navigation .stm_mobile__dropdown:before {
  transition: all .25s ease !important; }

a.ui-corner-all {
  transition: all 0s ease !important; }

.owl-filter .owl-carousel a.stm_item {
  transition: all 1s ease !important; }

.stm_staff_grid_style_2,
.stm_staff_grid_style_2 .stm_staff__info-inner,
.stm_staff_grid_style_2 .stm_staff__links,
.stm_staff_list_style_2,
.stm_staff_list_style_2 .stm_staff__info-inner,
.stm_staff_list_style_2 .stm_staff__links,
.stm_staff_list_style_2 .stm_staff__links i,
.stm_projects_carousel__overlay [data-title]:before,
.stm_staff__tabs_style_1 .staff_sort:after,
.stm_video_style_9 .stm_video__cover {
  transition: all .5s ease; }

.stm_material_form.stm_has-value > span {
  transition-delay: 0.5s; }

@keyframes scaleout {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0); }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0; } }

@keyframes btn-icon-slide {
  0% {
    transform: translateX(0); }
  50% {
    transform: translateX(50px);
    opacity: 0; }
  51% {
    transform: translateX(-50px); }
  100% {
    transform: translateX(0);
    opacity: 1; } }

@keyframes Gradient {
  0% {
    background-position: 0% 50%; }
  50% {
    background-position: 100% 50%; }
  100% {
    background-position: 0% 50%; } }

@keyframes shake {
  0% {
    transform: translateX(-2px); }
  50% {
    transform: translateX(7px); }
  100% {
    transform: translateX(-2px); } }

@keyframes pearl_ripple_out {
  100% {
    top: -12px;
    right: -12px;
    bottom: -12px;
    left: -12px;
    opacity: 0; } }

@keyframes stm_zoom {
  0% {
    transform: scale(1);
    opacity: .6; }
  100% {
    transform: scale(1.4);
    opacity: 0; } }

@keyframes anim-moema-1 {
  60% {
    transform: scale3d(0.95, 0.95, 1); }
  85% {
    transform: scale3d(1.05, 1.05, 1); }
  100% {
    transform: scale3d(1, 1, 1); } }

@keyframes anim-moema-2 {
  to {
    opacity: 0;
    transform: scale3d(1, 0.9, 1); } }

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100px, 0); }
  100% {
    opacity: 1;
    transform: none; } }

.stm_services_grid.style_3 .stm_services_grid_content {
  height: 105px; }

.stm_loop .product_thumbnail {
  padding: 32px 30px; }
  .stm_loop .product_thumbnail img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    height: auto; }

.stm_loop .stm_product__single {
  display: -ms-flexbox;
  display: flex;
  width: 33.33%;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin: 0;
  padding: 0; }
  .stm_loop .stm_product__single a {
    display: block;
    margin: 15px;
    width: 100%;
    padding-bottom: 34px;
    position: relative;
    overflow: hidden;
    border: 1px solid #cccccc; }
    .stm_loop .stm_product__single a:focus, .stm_loop .stm_product__single a:active, .stm_loop .stm_product__single a:hover {
      text-decoration: none; }
  .stm_loop .stm_product__single h4 {
    padding: 0 30px;
    margin-top: -5px;
    margin-bottom: 19px;
    text-align: center;
    letter-spacing: -0.6px;
    line-height: 30px;
    font-weight: 300;
    font-size: 22px; }
  .stm_loop .stm_product__single .product_category {
    display: block;
    position: relative;
    padding: 0 30px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 24px;
    font-weight: 700;
    font-size: 11px; }
    .stm_loop .stm_product__single .product_category.product_category_child {
      display: none; }

@media (max-width: 768px) {
  .stm_loop > div .stm_product__single {
    width: 50% !important;
    max-width: 50% !important; } }

@media (max-width: 480px) {
  .stm_loop ul li {
    width: 100% !important;
    max-width: 100% !important; } }

/*VC*/
.vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading {
  border: 0 !important; }
  .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-panel-title:before, .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-panel-title:after {
    display: none; }
  .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-panel-title > a {
    padding-right: 60px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 0;
    font-size: 14px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
        align-items: flex-start;
    -ms-flex-pack: start;
        justify-content: flex-start;
    text-transform: uppercase; }
    .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-panel-title > a .vc_tta-icon {
      line-height: 1; }
    .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-panel-title > a .vc_tta-title-text {
      opacity: 0.7; }
  .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-controls-icon {
    position: absolute;
    right: 19px;
    top: 50%;
    opacity: 0.5;
    transform: translateY(-50%); }
    .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-controls-icon:before {
      transform: none; }
    .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-controls-icon-plus:before {
      transform: translateY(-50%); }
    .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-controls-icon-chevron:before {
      transform: rotate(45deg) !important; }
    .vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-heading .vc_tta-controls-icon.vc_tta-controls-icon-triangle {
      margin-top: 3px; }

.vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-body {
  padding: 20px 0 23px;
  position: relative;
  border: 0 !important; }

.vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel:last-child .vc_tta-panel-heading .vc_tta-panel-title > a {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2); }

.vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel.vc_active .vc_tta-title-text {
  opacity: 1 !important; }

.vc_tta.vc_tta-accordion .vc_tta-panels-container .vc_tta-panels .vc_tta-panel.vc_active .vc_tta-controls-icon {
  opacity: 1; }

.vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list {
  margin: 0 -28px; }
  .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a {
    padding: 0 28px;
    border: 0;
    vertical-align: top; }
    .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a:first-child {
      padding-left: 0; }
    .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-icon {
      position: relative;
      top: -1px; }
    .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text {
      display: inline-block;
      position: relative;
      font-size: 16px;
      text-transform: uppercase;
      opacity: 0.6; }
      .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text:before {
        content: '';
        display: block;
        content: '';
        display: block;
        width: 46px;
        height: 5px;
        margin: 0 0 21px;
        opacity: 0; }
    .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a:hover .vc_tta-title-text {
      opacity: 1; }
      .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a:hover .vc_tta-title-text:before {
        opacity: 1; }
  .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab.vc_active > a .vc_tta-title-text {
    opacity: 1; }
    .vc_tta.vc_tta-tabs .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab.vc_active > a .vc_tta-title-text:before {
      opacity: 1; }

.vc_tta.vc_tta-tabs .vc_tta-panels-container {
  margin-top: 49px; }
  .vc_tta.vc_tta-tabs .vc_tta-panels-container .vc_tta-panels .vc_tta-panel .vc_tta-panel-body {
    padding: 0;
    border: 0; }

@media (max-width: 769px) {
  .vc_tta-panel-heading {
    border: 0 !important; }
  .vc_tta-panel-title:before {
    display: none !important; } }

.vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container {
  margin-bottom: 0;
  width: 30%; }
  .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container .vc_tta-tabs-list, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container .vc_tta-tabs-list {
    margin: 0; }
    .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab {
      margin: 0; }
      .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a {
        position: relative;
        padding: 0;
        padding-left: 25px;
        background: transparent; }
        .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text {
          position: relative;
          min-height: 66px;
          line-height: 35px;
          display: block;
          padding: 15px;
          padding-left: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2); }
          .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text:before, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text:before {
            position: absolute;
            left: -25px;
            top: 50%;
            transform: translateY(-50%);
            height: 52px;
            width: 5px;
            opacity: 1;
            background-color: rgba(0, 0, 0, 0.2); }
          .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text:after, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab > a .vc_tta-title-text:after {
            content: '';
            display: block;
            width: 1px;
            height: 100%; }
      .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab.vc_active > a .vc_tta-title-text:before, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-tabs-container .vc_tta-tabs-list .vc_tta-tab.vc_active > a .vc_tta-title-text:before {
        opacity: 1; }

.vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-panels-container, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-panels-container {
  padding: 0 0 0 60px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 0; }
  .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-panels-container .vc_tta-panels, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-panels-container .vc_tta-panels {
    border: 0;
    background-color: transparent; }

@media (max-width: 767px) {
  .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-panels-container, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-panels-container {
    padding-left: 0;
    border-left: 0; }
    .vc_tta.vc_tta-tabs.vc_tta-tabs-position-right .vc_tta-panels-container .vc_tta-panel-body, .vc_tta.vc_tta-tabs.vc_tta-tabs-position-left .vc_tta-panels-container .vc_tta-panel-body {
      padding-top: 30px !important; } }

body .vc_progress_bar.vc_progress-bar-color-green .vc_single_bar .vc_label,
body .vc_progress_bar .vc_label {
  font-size: 14px;
  color: #aaaaaa;
  display: block;
  margin-bottom: 12px;
  text-shadow: none !important; }

body .vc_progress_bar.vc_progress-bar-color-blue .vc_single_bar .vc_bar {
  background-color: #04a5dd; }

body .vc_progress_bar .vc_single_bar {
  position: relative;
  margin-bottom: 35px;
  box-shadow: none;
  background: transparent;
  z-index: 10; }
  body .vc_progress_bar .vc_single_bar .vc_label {
    padding: 0 0 13px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.3px; }
    body .vc_progress_bar .vc_single_bar .vc_label:after {
      content: attr(data-label) "%";
      position: absolute;
      top: 0;
      right: 1px; }
  body .vc_progress_bar .vc_single_bar .vc_bar {
    height: 6px;
    border-radius: 0;
    top: auto;
    bottom: 0; }
  body .vc_progress_bar .vc_single_bar:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: #dbdbdb;
    z-index: -1; }

body .vc_progress_bar.vc_progress-bar-color-white .vc_single_bar:after {
  background: #fff; }

.vc_separator h4:before {
  display: none !important; }

.vc_separator h4:after {
  display: none !important; }

body .vc_chart .vc_chart-legend {
  text-align: right; }
  body .vc_chart .vc_chart-legend li {
    margin-bottom: 30px; }
    body .vc_chart .vc_chart-legend li:last-child {
      margin-bottom: 0; }
    body .vc_chart .vc_chart-legend li span {
      border-radius: 0; }

body .vc_chart.small_chart canvas {
  width: 220px !important;
  height: 220px !important; }

@media (max-width: 1023px) {
  body .vc_chart .vc_chart-legend {
    text-align: right; } }

@media (max-width: 767px) {
  body .vc_chart .vc_chart-with-legend {
    display: inline-block;
    vertical-align: middle;
    width: 60%; }
  body .vc_chart .vc_chart-legend {
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    text-align: left; } }

@media (max-width: 550px) {
  body .vc_chart .vc_chart-legend {
    margin: 15px 0 30px;
    text-align: left; } }

@media (max-width: 440px) {
  body .vc_chart .vc_chart-with-legend {
    width: 100%; }
  body .vc_chart .vc_chart-legend {
    width: 100%; } }

body .vc_line-chart .vc_chart-with-legend {
  width: 100%; }
  body .vc_line-chart .vc_chart-with-legend canvas {
    width: 100% !important;
    height: auto !important; }

body .vc_line-chart .legend_position_right .vc_chart-with-legend {
  width: 75%; }

body .vc_chart .legend_position_right .vc_chart-legend {
  text-align: left; }

body .vc_line-chart .legend_position_bottom .vc_chart-legend {
  width: 100%;
  text-align: left; }
  body .vc_line-chart .legend_position_bottom .vc_chart-legend li {
    display: inline-block; }

.wpb_single_image .vc_single_image-wrapper.vc_box_shadow_border {
  padding: 30px !important;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15) !important; }

/*Widgets*/
.widget.widget-default.widget_search {
  margin-bottom: 35px; }
  .widget.widget-default.widget_search:before {
    display: none !important; }
  .widget.widget-default.widget_search .search-form {
    position: relative; }
    .widget.widget-default.widget_search .search-form .form-control {
      border-radius: 0; }
    .widget.widget-default.widget_search .search-form button {
      position: absolute;
      right: 0;
      top: 0;
      width: 44px;
      height: 100%;
      color: #fff;
      text-align: center;
      border: none;
      font-size: 17px;
      outline: none !important;
      padding: 0; }
      .widget.widget-default.widget_search .search-form button i {
        width: 100%; }
    .widget.widget-default.widget_search .search-form input[name="s"] {
      padding-right: 50px;
      background: #eeeff2;
      color: #222; }
      .widget.widget-default.widget_search .search-form input[name="s"]:focus {
        background: transparent; }

/*COLORS*/
/*FONTS*/
.stm_widget_media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: wrap;
      flex-flow: wrap;
  margin: -15px -7.5px 0; }
  .stm_widget_media__single {
    display: block;
    width: 33.333%;
    padding: 15px 7.5px 0; }
    @media (max-width: 1024px) {
      .stm_widget_media__single img {
        width: 100%; } }

.widget.widget_recent_entries ul li {
  padding-left: 0; }
  .widget.widget_recent_entries ul li:before {
    content: '';
    top: 0;
    bottom: 8px;
    width: 6px;
    background-color: rgba(0, 0, 0, 0.3); }
  .widget.widget_recent_entries ul li a {
    display: block;
    position: relative;
    padding: 6px 0 14px 20px; }
    .widget.widget_recent_entries ul li a:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      left: 20px;
      bottom: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3); }
  .widget.widget_recent_entries ul li:last-child a:after {
    border-bottom: 0; }
  .widget.widget_recent_entries ul li .post-date {
    display: block;
    position: relative;
    top: -7px;
    margin-bottom: 20px;
    padding: 20px 0 0 20px; }

.widget_recent_comments ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  text-rendering: auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 6px;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent; }

.widget.widget_meta ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  text-rendering: auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 6px;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent; }

.widget.widget_archive ul li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  text-rendering: auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 6px;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent; }

.widget.widget_archive label.screen-reader-text {
  display: none; }

.widget_tag_cloud .tagcloud {
  font-size: 0; }
  .widget_tag_cloud .tagcloud a {
    display: inline-block;
    vertical-align: top;
    font-size: 13px !important;
    color: #aaaaaa;
    border: 1px solid #cccccc;
    padding: 5px 10px;
    margin: 0 6px 7px 0;
    text-decoration: none !important; }
    .widget_tag_cloud .tagcloud a:hover {
      color: #fff; }

.widget {
  margin-bottom: 30px; }
  .widget.wpb_content_element {
    margin-bottom: 70px; }
  .widget .widgettitle {
    margin-bottom: 27px;
    text-transform: uppercase; }
  .widget ul, .widget ol {
    margin: 0;
    list-style: none;
    padding: 0; }
    .widget ul li, .widget ol li {
      position: relative;
      padding: 0 0 0 20px;
      margin: 0 0 10px 0; }
      .widget ul li a, .widget ol li a {
        text-decoration: none !important; }
      .widget ul li:last-child, .widget ol li:last-child {
        margin-bottom: 0; }
      .widget ul li:before, .widget ol li:before {
        position: absolute;
        left: 0;
        top: 4px;
        display: inline-block;
        vertical-align: top;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 10px;
        transform: translate(0, 0);
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; }

.widget.widget-footer ul li, .widget.widget-footer ol li {
  padding: 0; }

.site-content .stm-icontext_style2 .stm-icontext__icon {
  opacity: 1; }

.wpb_wrapper .wpb_gmaps_widget .wpb_wrapper {
  padding: 0; }

.no_border,
.no_border .widget {
  border: 0 !important;
  padding-bottom: 0 !important; }

.widget_tp_widget_recent_tweets .tp_recent_tweets ul li {
  background: none;
  padding-left: 35px;
  margin: 0 0 25px;
  font-size: 13px; }
  .widget_tp_widget_recent_tweets .tp_recent_tweets ul li:before {
    content: "\f099";
    position: absolute;
    left: 0;
    top: 3px;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 22px;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translate(0, 0);
    color: #777777; }
  .widget_tp_widget_recent_tweets .tp_recent_tweets ul li a {
    font-weight: 400; }

.widget_calendar caption {
  margin-bottom: 10px;
  color: inherit !important;
  font-size: 15px;
  line-height: 20px; }

.widget_calendar table {
  width: 100%; }
  .widget_calendar table thead tr th {
    padding: 5px 2px;
    color: #fff;
    font-weight: 400;
    text-align: center; }
  .widget_calendar table tbody tr td {
    padding: 7px 2px;
    text-align: center; }
  .widget_calendar table tfoot {
    display: none; }
    .widget_calendar table tfoot tr td a {
      font-size: 13px; }

/*Single post*/
.stm_post__tags {
  position: relative;
  font-size: 0; }
  .stm_post__tags a {
    display: inline-block;
    vertical-align: top;
    font-size: 13px;
    color: #aaaaaa;
    background: #f1f1f1;
    padding: 8px 11px;
    margin: 0 6px 7px 0;
    text-decoration: none !important; }
    .stm_post__tags a:hover {
      color: #fff; }

.stm_share {
  margin-bottom: 7px; }
  .stm_share a {
    display: inline-block;
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background-color: #bbb;
    line-height: 20px;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    opacity: 1; }
    .stm_share a:hover {
      color: #fff;
      opacity: 0.6; }
    .stm_share a.stm_share_facebook {
      background-color: #627aad; }
    .stm_share a.stm_share_twitter {
      background-color: #4D9ED8; }
    .stm_share a.stm_share_linkedin {
      background-color: #2F75AE; }
    .stm_share a.stm_share_google-plus {
      background-color: #DB4437; }
    .stm_share a.stm_share_pinterest {
      background-color: #BE1626; }
  @media (max-width: 550px) {
    .stm_share {
      display: block;
      width: 100%;
      padding-left: 0 !important; } }
  @media (max-width: 1024px) {
    .stm_share {
      margin: 25px 0 0 !important; }
      .stm_share a {
        width: 37px;
        height: 37px;
        margin: 0 5px 5px 0;
        line-height: 40px;
        font-size: 18px !important;
        opacity: 1; } }

.stm_author_box {
  position: relative;
  padding: 20px;
  background: #f6f6f6; }
  .stm_author_box__avatar {
    float: left;
    width: 87px;
    margin: 0 27px 0 0; }
  .stm_author_box__name {
    font-size: 11px;
    text-transform: uppercase;
    color: #aaaaaa;
    margin: 0 0 10px 0; }
    .stm_author_box__name strong {
      display: block;
      font-size: 14px; }
  .stm_author_box__content {
    overflow: hidden;
    line-height: 20px; }
  @media (max-width: 550px) {
    .stm_author_box__avatar {
      float: none;
      margin-bottom: 15px; } }

ul.comment-list {
  position: relative;
  margin: 0 0 50px;
  padding: 0; }
  ul.comment-list li {
    list-style: none; }
  ul.comment-list .comment .vcard {
    float: left;
    margin: 0 32px 0 0;
    width: 87px; }
    ul.comment-list .comment .vcard img {
      border: 2px solid rgba(0, 0, 0, 0.3); }
  ul.comment-list .comment .comment-info {
    overflow: hidden; }
  ul.comment-list .comment .comment-author {
    float: left;
    font-weight: 700;
    color: #333333; }
  ul.comment-list .comment .comment-meta {
    float: right;
    font-size: 11px;
    color: #aaaaaa;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 0 17px 0; }
    ul.comment-list .comment .comment-meta a {
      display: inline-block;
      vertical-align: middle;
      color: #aaaaaa; }
      ul.comment-list .comment .comment-meta a:hover:before {
        color: #777; }
      ul.comment-list .comment .comment-meta a:before {
        content: "/";
        display: inline-block;
        vertical-align: baseline;
        margin: 0 7px 0 5px; }
      ul.comment-list .comment .comment-meta a:first-child:before {
        display: none; }
  ul.comment-list .comment .comment-text {
    clear: both; }
    ul.comment-list .comment .comment-text p {
      line-height: 18px; }
    ul.comment-list .comment .comment-text *:last-child {
      margin-bottom: 0; }
  ul.comment-list > li {
    border-top: 1px solid #cccccc;
    padding: 30px 0 0;
    margin: 0 0 30px; }
  ul.comment-list .children {
    margin: 29px 0 0 30px;
    padding: 0; }
    ul.comment-list .children > li {
      position: relative;
      padding: 30px 0 0;
      margin: 0 0 30px;
      border-top: 1px solid #cccccc; }
      ul.comment-list .children > li:before {
        content: '';
        position: absolute;
        left: 66px;
        top: -9px;
        width: 15px;
        height: 9px; }

.comment-respond {
  margin: 40px 0 0 0; }

.comments-title {
  margin-top: 40px; }

.comment-reply-title {
  margin: 0 0 29px;
  font-size: 16px;
  text-transform: uppercase; }

.comment-reply-title:before {
  margin: 0 0 22px 0; }

.stm-switcher {
  position: relative;
  margin-left: 19px;
  -ms-flex-order: 1;
      order: 1; }
  .stm-switcher__trigger {
    min-width: 170px;
    cursor: pointer; }
    .stm-switcher__trigger_default {
      min-height: 40px;
      padding: 5px 40px 5px 20px;
      line-height: 30px;
      color: #fff;
      font-weight: 700;
      font-size: 13px; }
      .stm-switcher__trigger_default:after {
        content: '';
        display: block;
        position: absolute;
        right: 18px;
        top: 50%;
        margin-top: -3.5px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 3.5px 0 3.5px;
        border-color: #fff transparent transparent transparent; }
    .stm-switcher__trigger_uppercase {
      text-transform: uppercase; }
    .stm-switcher__trigger.active:after {
      border-width: 0 3.5px 5px 3.5px;
      border-color: transparent transparent #fff transparent; }
  .stm-switcher__list {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background-color: #fff;
    z-index: 51; }
    .stm-switcher__list.active {
      display: block; }
  .stm-switcher__option {
    min-height: 40px;
    padding: 5px 40px 5px 20px;
    font-size: 13px;
    line-height: 30px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer; }
  .stm-switcher__icon {
    margin: 0 5px 0 -5px; }

.js-switcher__hidden {
  display: none; }

/*Elements position in case of order*/
.stm-header__cell_left .stm-switcher {
  margin-left: 0;
  margin-right: 19px;
  -ms-flex-order: -1;
      order: -1; }

.stm-logo img {
  max-width: 100%;
  height: auto; }

.stm-icontext__info {
  padding-left: 33px; }
  .stm-icontext__info_divider {
    position: relative;
    display: inline-block; }
    .stm-icontext__info_divider:first-child:after {
      display: none; }

.stm-icontext__icon {
  margin-right: 9px;
  font-size: 14px; }

.stm-icontext__text {
  font-size: 13px;
  line-height: 16px; }

.stm-icontext_style2 {
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 21px; }
  .stm-icontext_style2 .stm-icontext__text,
  .stm-icontext_style2 .stm-icontext__icon {
    display: block; }
  .stm-icontext_style2 .stm-icontext__icon {
    min-width: 42px;
    margin-right: 0;
    opacity: 0.6; }
  .stm-icontext_style2 .stm-icontext__text {
    padding-top: 2px; }

.stm-navigation__line_top {
  /*Fullwidth*/ }
  .stm-navigation__line_top > ul > li {
    position: relative; }
    .stm-navigation__line_top > ul > li:before {
      content: '';
      display: block;
      position: absolute;
      left: 15px;
      right: 15px;
      top: -2px;
      height: 4px;
      opacity: 0;
      visibility: hidden; }
    .stm-navigation__line_top > ul > li:hover:before {
      opacity: 1;
      visibility: visible;
      top: -10px; }
  .stm-navigation__line_top.stm-navigation__fullwidth > ul > li:before {
    top: -4px; }
  .stm-navigation__line_top.stm-navigation__fullwidth > ul > li:hover:before {
    opacity: 1;
    visibility: visible;
    top: 0; }

.stm-navigation__line_middle > ul > li {
  position: relative; }
  .stm-navigation__line_middle > ul > li:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    right: 100%;
    top: 50%;
    height: 2px;
    margin: -1px 0 0;
    opacity: 0;
    transform: scale(0.5) translateX(-50%);
    transition: .3s;
    visibility: hidden; }
  .stm-navigation__line_middle > ul > li.current-menu-item:before, .stm-navigation__line_middle > ul > li:hover:before {
    left: 15px;
    right: 15px;
    transform: scale(1) translateX(0);
    opacity: 1;
    visibility: visible; }

.stm-navigation__line_bottom > ul > li {
  position: relative; }
  .stm-navigation__line_bottom > ul > li:before {
    content: '';
    display: block;
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: -5px;
    height: 4px;
    opacity: 0;
    visibility: hidden; }
  .stm-navigation__line_bottom > ul > li:hover:before {
    opacity: 1;
    visibility: visible;
    bottom: -10px; }

.stm-navigation {
  font-size: 16px; }
  .stm-navigation ul {
    padding: 0;
    margin: 0;
    list-style: none;
    /*First lvl*/
    /*Clear floats*/ }
    .stm-navigation ul > li {
      float: left; }
      .stm-navigation ul > li > a {
        display: block;
        padding: 0 5px;
        font-weight: 700; }
    .stm-navigation ul:after {
      content: '';
      display: block;
      clear: both; }
  .stm-navigation__fwl ul li a {
    font-weight: 300 !important; }
  .stm-navigation__fwn ul li a {
    font-weight: 400 !important; }
  .stm-navigation__fwsb ul li a {
    font-weight: 600 !important; }
  .stm-navigation__fwb ul li a {
    font-weight: 700 !important; }
  .stm-navigation__default > ul {
    margin: 0 -15px; }
    .stm-navigation__default > ul > li {
      position: relative;
      /*Second lvl*/ }
      .stm-navigation__default > ul > li > a {
        padding: 0 15px;
        font-weight: 700;
        text-decoration: none !important; }
      .stm-navigation__default > ul > li:hover > ul {
        top: 34px;
        visibility: visible;
        opacity: 1;
        transition: all .25s ease !important; }
      .stm-navigation__default > ul > li ul {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 37px;
        left: 15px;
        width: 260px;
        padding: 0;
        margin: 0;
        list-style: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.28);
        background-color: #fff;
        transition: all 0s ease !important; }
        .stm-navigation__default > ul > li ul:after {
          content: '';
          display: block;
          position: absolute;
          top: -15px;
          left: 0;
          width: 260px;
          height: 15px;
          background-color: transparent; }
        .stm-navigation__default > ul > li ul li {
          position: relative;
          width: 100%;
          border-bottom: 1px solid #dddddd; }
          .stm-navigation__default > ul > li ul li:last-child {
            border-bottom: 0; }
          .stm-navigation__default > ul > li ul li:hover > ul {
            left: 100%;
            visibility: visible;
            opacity: 1; }
          .stm-navigation__default > ul > li ul li > a {
            display: block;
            padding: 16px 20px 14px;
            font-size: 12px;
            font-weight: 800;
            line-height: 18px;
            text-decoration: none !important;
            text-transform: uppercase;
            letter-spacing: 0.3px; }
          .stm-navigation__default > ul > li ul li > ul {
            top: 0;
            left: 104%;
            box-shadow: -4px 0 10px rgba(0, 0, 0, 0.28);
            z-index: 20; }
            .stm-navigation__default > ul > li ul li > ul:after {
              height: 100%;
              width: 35px;
              left: -35px;
              top: 0; }
            .stm-navigation__default > ul > li ul li > ul:before {
              top: 20px;
              left: -8px; }
  .stm-navigation__divider > ul > li {
    position: relative;
    z-index: 10; }
    .stm-navigation__divider > ul > li > a .divider {
      z-index: 5; }
    .stm-navigation__divider > ul > li:last-child > a > i, .stm-navigation__divider > ul > li:last-child > a .divider {
      display: none !important; }
    .stm-navigation__divider > ul > li > .sub-menu li a i, .stm-navigation__divider > ul > li > .sub-menu li a .divider {
      display: none; }
  @media (max-width: 1023px) {
    .stm-navigation__divider > ul > li > a > i, .stm-navigation__divider > ul > li > a .divider {
      display: none; } }
  @media (max-width: 1023px) {
    .stm-navigation__default {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; }
      .stm-navigation__default > ul {
        width: 100%; }
        .stm-navigation__default > ul > li {
          position: relative;
          float: none;
          display: block;
          width: 100%; }
          .stm-navigation__default > ul > li:before {
            display: none; }
          .stm-navigation__default > ul > li > a {
            padding: 15px 15px 15px 0;
            height: auto; }
          .stm-navigation__default > ul > li ul.sub-menu {
            padding: 15px 0;
            width: 100%;
            position: static;
            box-shadow: none;
            opacity: 1;
            visibility: visible;
            display: none; }
            .stm-navigation__default > ul > li ul.sub-menu .sub-menu {
              padding: 0 0 0 10px; }
            .stm-navigation__default > ul > li ul.sub-menu > li.active > a:after {
              transform: rotate(90deg); }
          .stm-navigation__default > ul > li .stm_mobile__dropdown {
            position: absolute;
            right: -15px;
            left: auto;
            top: 0;
            height: 100%;
            width: 65px;
            z-index: 10; }
          .stm-navigation__default > ul > li.active > a:after {
            transform: rotate(180deg); }
    .stm-navigation .stm-iconbox {
      width: 100%;
      padding-left: 0;
      margin: 17px 0; }
      .stm-navigation .stm-iconbox:before {
        top: -17px;
        left: 0;
        right: 0;
        height: 1px;
        width: 100%; } }
  .stm-navigation__fullwidth {
    display: -ms-flexbox;
    display: flex;
    padding: 0 25px;
    width: 100%;
    /*Iconbox on fullwidth*/ }
    @media (max-width: 1100px) {
      .stm-navigation__fullwidth {
        padding: 0 15px; } }
    .stm-navigation__fullwidth > ul > li {
      position: relative;
      /*SECOND LVL*/ }
      .stm-navigation__fullwidth > ul > li.current-menu-item:before {
        opacity: 1;
        visibility: visible;
        top: 0; }
      .stm-navigation__fullwidth > ul > li:hover > ul.sub-menu {
        top: 100%;
        visibility: visible;
        opacity: 1; }
      .stm-navigation__fullwidth > ul > li.menu-item-has-children > a {
        padding-right: 25px; }
        .stm-navigation__fullwidth > ul > li.menu-item-has-children > a:after {
          content: '';
          display: block;
          position: absolute;
          right: 10px;
          top: 50%;
          margin-top: -2px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 3.5px 0 3.5px;
          border-color: #fff transparent transparent transparent; }
      .stm-navigation__fullwidth > ul > li > a {
        position: relative;
        display: block;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        color: #ffffff;
        padding: 21px 20px;
        font-size: 14px;
        height: 64px;
        font-weight: 900;
        text-decoration: none !important; }
      .stm-navigation__fullwidth > ul > li ul.sub-menu {
        position: absolute;
        top: 105%;
        left: 0;
        background: #fff;
        list-style: none;
        padding: 12px 0;
        margin: 0;
        width: 220px;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
        visibility: hidden;
        opacity: 0;
        z-index: 1; }
        .stm-navigation__fullwidth > ul > li ul.sub-menu > li {
          position: relative;
          width: 100%;
          /*THIRD LVL*/ }
          .stm-navigation__fullwidth > ul > li ul.sub-menu > li.menu-item-has-children > a {
            position: relative; }
            .stm-navigation__fullwidth > ul > li ul.sub-menu > li.menu-item-has-children > a:after {
              content: '';
              display: block;
              position: absolute;
              right: 10px;
              top: 50%;
              margin-top: -2px;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 3px 0 3px 5px;
              border-color: transparent transparent transparent rgba(0, 0, 0, 0.5); }
          .stm-navigation__fullwidth > ul > li ul.sub-menu > li:hover > ul {
            left: 100%;
            opacity: 1;
            visibility: visible; }
          .stm-navigation__fullwidth > ul > li ul.sub-menu > li > a {
            display: block;
            padding: 9px 27px;
            text-decoration: none !important;
            font-size: 14px;
            line-height: 20px;
            font-weight: 400; }
            .stm-navigation__fullwidth > ul > li ul.sub-menu > li > a:hover {
              color: #fff !important;
              background-color: #777; }
          .stm-navigation__fullwidth > ul > li ul.sub-menu > li.current-menu-item a {
            color: #fff !important;
            background-color: #777; }
          .stm-navigation__fullwidth > ul > li ul.sub-menu > li > ul {
            top: -12px;
            left: 105%; }
            .stm-navigation__fullwidth > ul > li ul.sub-menu > li > ul:after {
              height: 100%;
              width: 35px;
              left: -35px;
              top: 0; }
            .stm-navigation__fullwidth > ul > li ul.sub-menu > li > ul:before {
              top: 20px;
              left: -8px; }
    .stm-navigation__fullwidth .stm-iconbox {
      position: relative;
      margin: 18px 1px 0 auto;
      padding-left: 70px; }
      .stm-navigation__fullwidth .stm-iconbox:before {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: 31px;
        background: rgba(255, 255, 255, 0.2);
        width: 1px;
        height: 27px; }
      .stm-navigation__fullwidth .stm-iconbox__text {
        font-size: 15px;
        line-height: 16px;
        font-weight: 900; }
      .stm-navigation__fullwidth .stm-iconbox__description {
        font-size: 13px; }
      .stm-navigation__fullwidth .stm-iconbox__icon {
        margin-top: 3px;
        font-size: 22px; }
  @media (max-width: 1023px) {
    .stm-navigation__fullwidth {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; }
      .stm-navigation__fullwidth > ul {
        width: 100%; }
        .stm-navigation__fullwidth > ul > li {
          position: relative;
          float: none;
          display: block;
          width: 100%; }
          .stm-navigation__fullwidth > ul > li:before {
            display: none; }
          .stm-navigation__fullwidth > ul > li > a {
            padding: 15px 15px 15px 0;
            height: auto; }
          .stm-navigation__fullwidth > ul > li ul.sub-menu {
            padding: 15px 0;
            width: 100%;
            position: static;
            box-shadow: none;
            opacity: 1;
            visibility: visible;
            display: none; }
            .stm-navigation__fullwidth > ul > li ul.sub-menu .sub-menu {
              padding: 0 0 0 10px; }
            .stm-navigation__fullwidth > ul > li ul.sub-menu > li.active > a:after {
              transform: rotate(90deg); }
          .stm-navigation__fullwidth > ul > li .stm_mobile__dropdown {
            position: absolute;
            right: -15px;
            top: 0;
            height: 100%;
            width: 65px;
            z-index: 10; }
          .stm-navigation__fullwidth > ul > li.active > a:after {
            transform: rotate(180deg); }
    .stm-navigation .stm-iconbox {
      width: 100%;
      padding-left: 0;
      margin: 17px 0; }
      .stm-navigation .stm-iconbox:before {
        top: -17px;
        left: 0;
        right: 0;
        height: 1px;
        width: 100%; } }
  .stm-navigation__divider > ul > li {
    position: relative; }
    .stm-navigation__divider > ul > li i, .stm-navigation__divider > ul > li .divider {
      position: absolute;
      right: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transform: translate(50%, -50%); }

.admin-bar .stm-navigation__vertical_left .stm_mobile__switcher {
  top: 52px; }

.envato-preview-visible .stm-navigation__vertical_left .stm_mobile__switcher {
  top: 64px; }

@media (min-width: 1024px) {
  .stm-navigation__vertical_left .stm_mobile__switcher {
    display: block;
    position: fixed;
    top: 20px;
    left: 4px;
    padding: 20px;
    background-color: #ffffff;
    cursor: pointer; }
    .stm-navigation__vertical_left .stm_mobile__switcher span {
      width: 32px;
      height: 2px;
      margin-bottom: 8px; }
      .stm-navigation__vertical_left .stm_mobile__switcher span:last-child {
        margin-bottom: 0; }
    .stm-navigation__vertical_left .stm_mobile__switcher.active span:first-child {
      top: 10px; }
    .stm-navigation__vertical_left .stm_mobile__switcher.active span:last-child {
      top: -10px; }
  .stm-navigation__vertical_left ul.stm-navigation__vertical {
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100%;
    padding-top: 126px;
    padding-right: 30px;
    padding-left: 55px;
    background: #fff;
    transition: all 1s;
    transition-delay: 0.2s;
    box-shadow: 6px 0 14px 0 rgba(0, 0, 0, 0.2); }
    .stm-navigation__vertical_left ul.stm-navigation__vertical li {
      width: 100%;
      text-transform: uppercase;
      position: relative;
      margin: 10px 0; }
      .stm-navigation__vertical_left ul.stm-navigation__vertical li.menu-item-has-children {
        margin-bottom: 4px; }
      .stm-navigation__vertical_left ul.stm-navigation__vertical li:before {
        display: none; }
      .stm-navigation__vertical_left ul.stm-navigation__vertical li.menu-item-has-children:after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 4px;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        transition: all 0.2s;
        content: "󙀅" !important;
        font-family: 'stmicons' !important;
        transform: rotate(90deg);
        font-size: 11px;
        cursor: pointer;
        z-index: 10; }
      .stm-navigation__vertical_left ul.stm-navigation__vertical li a {
        font-weight: 300 !important;
        font-size: 18px !important; }
        .stm-navigation__vertical_left ul.stm-navigation__vertical li a:before {
          content: "";
          position: absolute;
          top: 15px !important;
          right: auto !important;
          left: -18px !important;
          width: 21px;
          height: 2px !important;
          background-color: #000;
          transition: all 0.3s;
          opacity: 0;
          visibility: hidden; }
        .stm-navigation__vertical_left ul.stm-navigation__vertical li a:hover {
          text-decoration: none; }
          .stm-navigation__vertical_left ul.stm-navigation__vertical li a:hover:before {
            opacity: 1;
            visibility: visible; }
      .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu {
        display: none;
        top: auto;
        left: auto;
        position: relative;
        width: auto;
        height: auto;
        visibility: hidden;
        opacity: 0;
        padding: 6px 0 0;
        box-shadow: none;
        transition: all 0.3s; }
        .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu li {
          text-transform: none;
          padding-left: 30px;
          margin: 0;
          border: 0; }
          .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu li:last-child {
            margin-bottom: 0; }
          .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu li:after {
            display: none; }
          .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu li:hover a {
            background: transparent !important;
            color: #000 !important; }
          .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu li a {
            text-transform: none;
            font-weight: normal !important;
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 15px !important;
            color: #000 !important; }
            .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu li a:before {
              left: 19px !important;
              height: 1px !important; }
          .stm-navigation__vertical_left ul.stm-navigation__vertical li .sub-menu li.current-menu-item a {
            background: transparent !important;
            color: #000 !important; }
      .stm-navigation__vertical_left ul.stm-navigation__vertical li.active.menu-item-has-children:after {
        top: 3px;
        transform: rotate(-90deg); }
      .stm-navigation__vertical_left ul.stm-navigation__vertical li.active .sub-menu {
        display: block;
        visibility: visible;
        opacity: 1; }
    .stm-navigation__vertical_left ul.stm-navigation__vertical.active {
      left: 0;
      transition: all 0.3s;
      transition-delay: 0.1s; } }

@media (min-width: 1024px) and (max-width: 1440px) {
  .stm-navigation__vertical_left .stm_mobile__switcher {
    left: 0; } }

@media (max-width: 1023px) {
  .stm-navigation__vertical_left .stm_mobile__switcher {
    display: none !important; } }

@media (max-width: 1024px) {
  .stm-navigation__vertical_left ul.stm-navigation__vertical li a {
    padding: 10px 15px 10px 5px !important; } }

body.active {
  overflow: hidden; }

.stm-header.active {
  z-index: 200; }
  .stm-header.active .stm-navigation__hamburger > ul {
    transform: translateX(0); }

.stm-header__overlay {
  transition: all .3s ease; }
  .stm-header__overlay.active {
    display: block; }

.stm-navigation__hamburger > ul {
  height: 100vh;
  overflow-y: auto;
  display: block;
  will-change: transform; }

.stm-navigation__hamburger .js_trigger__click {
  display: none;
  cursor: pointer; }

@media screen and (min-width: 1024px) {
  .stm-navigation__hamburger .stm_mobile__switcher {
    display: block; }
    .stm-navigation__hamburger .stm_mobile__switcher span {
      height: 3px;
      border-radius: 0;
      width: 30px; }
      .stm-navigation__hamburger .stm_mobile__switcher span:not(:last-child) {
        margin-bottom: 5px; }
    .stm-navigation__hamburger .stm_mobile__switcher.active span:first-child {
      top: 8px; }
    .stm-navigation__hamburger .stm_mobile__switcher.active span:last-child {
      top: -8px; }
  .stm-navigation__hamburger_right > ul {
    left: auto;
    right: 0;
    transform: translateX(100%);
    padding-right: 50px; }
  .stm-navigation__hamburger_left > ul {
    right: auto;
    left: 0;
    transform: translateX(-100%);
    padding-left: 50px; }
  .stm-navigation__hamburger > ul {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 350px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    transition: .3s ease;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0;
    padding-right: 17px;
    -ms-overflow-style: none !important;
    overflow: -moz-scrollbars-none; }
    .stm-navigation__hamburger > ul::-webkit-scrollbar {
      width: 0 !important; }
    .stm-navigation__hamburger > ul > li > a {
      font-size: 16px; }
    .stm-navigation__hamburger > ul > li a {
      padding: 10px 35px !important; }
    .stm-navigation__hamburger > ul > li:hover a {
      background-color: #fff; }
    .stm-navigation__hamburger > ul > li .sub-menu {
      box-shadow: none;
      position: static;
      top: 0; } }

@media screen and (min-width: 1024px) {
  html > body .stm-navigation__hamburger > ul ul {
    max-height: 0;
    overflow: hidden !important;
    padding: 0 !important;
    width: 100%;
    transform: none;
    transition: all 1s ease;
    visibility: hidden;
    background-color: transparent; }
  html > body .stm-navigation__hamburger > ul > li:hover a {
    background-color: transparent; }
  html > body .stm-navigation__hamburger > ul > li.active a .stm_mobile__dropdown:before {
    transform: rotate(-90deg); }
  html > body .stm-navigation__hamburger > ul > li.active ul.sub-menu {
    max-height: 300px;
    opacity: 1;
    visibility: visible;
    transition: all 1s ease; }
  html > body .stm-navigation__hamburger > ul > li.stm_megamenu > ul.sub-menu {
    display: block;
    width: 100% !important;
    max-height: unset; }
    html > body .stm-navigation__hamburger > ul > li.stm_megamenu > ul.sub-menu li {
      width: 100%; }
    html > body .stm-navigation__hamburger > ul > li.stm_megamenu > ul.sub-menu:before {
      display: none; }
  html > body .stm-navigation__hamburger > ul > li > a {
    -ms-flex-pack: justify;
        justify-content: space-between;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
        align-items: center;
    text-transform: none !important; }
  html > body .stm-navigation__hamburger > ul > li a {
    position: relative; }
    html > body .stm-navigation__hamburger > ul > li a .stm_megaicon {
      margin-right: 10px; }
    html > body .stm-navigation__hamburger > ul > li a .stm_mobile__dropdown {
      position: absolute;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
          align-items: center;
      -ms-flex-pack: center;
          justify-content: center;
      right: 15px;
      left: auto;
      top: 0;
      bottom: 0;
      width: 30px;
      z-index: 10; }
      html > body .stm-navigation__hamburger > ul > li a .stm_mobile__dropdown:before {
        display: block;
        content: "" !important;
        font-family: 'stmicons' !important;
        color: #797979;
        font-size: 14px;
        transform: rotate(90deg); }
    html > body .stm-navigation__hamburger > ul > li a:hover {
      color: #fff !important; }
  html > body .stm-navigation__hamburger > ul > li ul.sub-menu {
    top: 0;
    padding-left: 15px !important; }
    html > body .stm-navigation__hamburger > ul > li ul.sub-menu li {
      border: none; }
      html > body .stm-navigation__hamburger > ul > li ul.sub-menu li > a {
        color: #fff !important;
        text-transform: none; }
  html > body .stm-navigation__hamburger > ul > li.stm_megamenu ul.sub-menu {
    transform: none !important; } }

.hamburger_full.stm_header_style_1 .stm_mobile__header {
  background-color: transparent !important; }

.hamburger_full.stm_header_style_1 .stm-header {
  background-color: transparent !important; }

.hamburger_full.active {
  overflow-y: scroll; }
  .hamburger_full.active .stm-header__overlay.active {
    background: rgba(0, 0, 0, 0.9); }

.hamburger_full .stm-header__overlay {
  background: rgba(0, 0, 0, 0.9); }

.stm-header.active {
  z-index: 200; }
  .stm-header.active .stm-navigation_hamburger_full > ul {
    opacity: 1;
    visibility: visible;
    height: auto;
    right: 0;
    left: 0;
    top: 0;
    bottom: auto;
    transform: translateY(0); }
    @media (max-width: 1023px) {
      .stm-header.active .stm-navigation_hamburger_full > ul {
        margin: 60px auto 0 !important; } }

.stm-navigation_hamburger_full > ul {
  display: block;
  will-change: transform; }

.stm-navigation_hamburger_full .js_trigger__click {
  cursor: pointer; }

.stm-navigation_hamburger_full > ul {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  max-width: 400px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  margin-top: 130px;
  transition: .7s ease;
  margin: 130px auto 0;
  transform: translateY(50px); }
  .stm-navigation_hamburger_full > ul > li > a {
    font-size: 16px; }
  .stm-navigation_hamburger_full > ul > li a {
    padding: 10px 35px !important; }
  .stm-navigation_hamburger_full > ul > li:hover a {
    background-color: #fff; }
  .stm-navigation_hamburger_full > ul > li .sub-menu {
    box-shadow: none;
    position: static;
    top: 0; }

html > .hamburger_full .stm-navigation_hamburger_full {
  /* width */
  /* Track */
  /* Handle */
  /* Handle on hover */ }
  html > .hamburger_full .stm-navigation_hamburger_full ::-webkit-scrollbar {
    width: 2px;
    height: 50px !important; }
  html > .hamburger_full .stm-navigation_hamburger_full ::-webkit-scrollbar-track {
    background-color: transparent;
    height: 50px !important; }
  html > .hamburger_full .stm-navigation_hamburger_full ::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    height: 50px !important; }
  html > .hamburger_full .stm-navigation_hamburger_full ::-webkit-scrollbar-thumb:hover {
    background: #9f9f9f; }
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li > a:before,
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li ul li > a:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 3px;
    opacity: 0;
    transition: .3s;
    visibility: hidden;
    margin: -1px auto 0;
    transform: scale(0) translateX(0); }
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li.current-menu-item:before,
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li:hover:before,
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li:before {
    display: none; }
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li.current-menu-item > a:before,
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li:hover > a:before {
    transform: scale(1) translateX(0);
    visibility: visible;
    opacity: 1;
    background-color: #fff; }
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li > ul > li:hover > a:before,
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li > ul > li.current-menu-item > a:before {
    transform: scale(1) translateX(0);
    visibility: visible;
    opacity: 1;
    background-color: #fff; }
  html > .hamburger_full .stm-navigation_hamburger_full.stm-navigation__line_middle > ul > li > ul li > ul > li:hover > a:before {
    transform: scale(1) translateX(0);
    visibility: visible;
    opacity: 1;
    background-color: #fff; }
  html > .hamburger_full .stm-navigation_hamburger_full > ul ul {
    max-height: 0;
    width: 100%;
    transform: none;
    transition: all 1s ease;
    background-color: transparent; }
  html > .hamburger_full .stm-navigation_hamburger_full > ul > li:hover a {
    background-color: transparent !important; }
  html > .hamburger_full .stm-navigation_hamburger_full > ul > li.active ul.sub-menu {
    max-height: 300px;
    opacity: 1;
    visibility: visible;
    transition: all 1s ease; }
  html > .hamburger_full .stm-navigation_hamburger_full > ul > li > a {
    display: block; }
  html > .hamburger_full .stm-navigation_hamburger_full > ul > li a {
    position: relative;
    display: table;
    text-align: center;
    margin: 0 auto;
    padding: 10px 5px !important; }
    html > .hamburger_full .stm-navigation_hamburger_full > ul > li a:hover {
      color: #fff !important; }
  html > .hamburger_full .stm-navigation_hamburger_full > ul > li ul.sub-menu {
    top: 0;
    display: none; }
    html > .hamburger_full .stm-navigation_hamburger_full > ul > li ul.sub-menu li {
      border: none; }
      html > .hamburger_full .stm-navigation_hamburger_full > ul > li ul.sub-menu li > a {
        color: #fff !important;
        text-transform: none; }

body.stm_header_style_1 .stm-navigation__hamburger_full > ul > li.current-menu-parent > a:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 3px;
  opacity: 0;
  transition: .3s;
  visibility: hidden;
  margin: -1px auto 0;
  transform: scale(0) translateX(0); }

body.stm_header_style_1 .stm-navigation__hamburger_full > ul > li.current-menu-parent > a:before {
  transform: scale(1) translateX(0);
  visibility: visible;
  opacity: 1;
  background-color: #fff; }

html > body.stm_header_style_1 .stm-navigation__hamburger_full > ul > li > a {
  font-size: 60px;
  line-height: 60px; }

html > body.stm_header_style_1 .stm-navigation__hamburger_full > ul > li ul li a {
  font-size: 30px;
  line-height: 48px; }

html > .hamburger_full > #wrapper .stm-navigation__hamburger_full ul > li > ul > li:hover > a,
html > .hamburger_full > #wrapper .stm-navigation__hamburger_full ul > li > ul > li.current-menu-item > a {
  background-color: transparent !important; }

@media (max-width: 1024px) {
  .hamburger_full .stm-header.active .stm-navigation_hamburger_full > ul {
    transform: translateX(0);
    max-width: none; } }

@media (max-width: 1023px) {
  .hamburger_full #wrapper {
    overflow-y: scroll; }
  html > .hamburger_full .stm-navigation_hamburger_full > ul > li.active ul.sub-menu {
    max-height: none; }
  .stm-navigation_hamburger_full .js_trigger__click {
    display: none;
    max-width: none; }
  .hamburger_full.stm_header_style_1 .stm-header {
    width: 100%;
    display: none; }
  .hamburger_full.stm_header_style_1 .stm-header.active {
    padding: 0;
    width: 100%;
    display: block; }
  .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full ul li.menu-item-has-children > a:after {
    display: none !important; } }

@media (max-width: 823px) and (min-height: 376px) and (max-height: 414px) {
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li > a {
    font-size: 30px;
    line-height: 30px; }
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li ul li a {
    font-size: 20px;
    line-height: 20px; } }

@media (max-width: 812px) and (max-height: 375px) {
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li > a {
    font-size: 30px;
    line-height: 30px; }
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li ul li a {
    font-size: 20px;
    line-height: 20px; } }

@media (max-width: 768px) {
  .stm-header.active .stm-navigation_hamburger_full > ul {
    transform: translateX(0);
    padding: 0 15px;
    position: relative; }
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li > a {
    font-size: 40px;
    line-height: 48px; }
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li ul li a {
    font-size: 25px;
    line-height: 30px; } }

@media (max-width: 736px) and (min-height: 414px) and (max-height: 414px) {
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li > a {
    font-size: 30px;
    line-height: 30px; }
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li ul li a {
    font-size: 20px;
    line-height: 20px; } }

@media (max-width: 667px) and (max-height: 400px) {
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li > a {
    font-size: 30px;
    line-height: 30px; }
  html > .hamburger_full.stm_header_style_1 .stm-navigation__hamburger_full > ul > li ul li a {
    font-size: 20px;
    line-height: 20px; } }

@media (max-width: 640px) {
  html .hamburger_full.stm_sidebar_style_11 .stm-footer__bottom .stm_markup > .stm_bottom_copyright {
    text-align: left; } }

@media (max-width: 320px) {
  .stm-header.active .stm-navigation_hamburger_full > ul {
    margin: 60px 0 0 !important; } }

.stm-iconbox {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
      align-items: flex-start; }
  .stm-iconbox__icon_left {
    margin-right: 14px; }
  .stm-iconbox__icon_right {
    margin-left: 14px; }
  .stm-iconbox__info {
    overflow: hidden; }
  .stm-iconbox__text {
    margin-bottom: 5px;
    font-weight: 700;
    letter-spacing: 0.1px; }
    .stm-iconbox__text_nomargin {
      margin-bottom: 0; }
  .stm-iconbox__description {
    font-size: 13px; }

.stm-socials {
  margin: 0 -8px; }
  .stm-socials__icon {
    float: left;
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 8px;
    text-align: center;
    color: #fff; }
    .stm-socials__icon_round {
      border-radius: 50%; }
      .stm-socials__icon_round:hover {
        color: #fff; }
    .stm-socials__icon_icon_only {
      border: 0;
      width: auto;
      background-color: transparent; }
    .stm-socials__icon_filled {
      background-color: #fff; }
  .stm-socials_opacity-hover {
    opacity: 0.7; }
    .stm-socials_opacity-hover:hover {
      opacity: 1; }
  .stm-socials:after {
    content: '';
    display: block;
    clear: both; }

.stm-socials-btn {
  display: none; }

@media (min-width: 1024px) {
  .stm-socials-hidden .stm-socials-btn {
    display: block;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer; }
  .stm-socials-hidden .stm-socials {
    position: absolute;
    top: 0;
    left: -40px;
    right: -40px;
    opacity: 0;
    visibility: hidden;
    margin: 1px 0 0;
    padding: 19px 0 20px;
    text-align: center;
    transition: all 0.3s;
    transition-delay: 0.3s;
    background-color: #fff;
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.25);
    z-index: -1; }
    .stm-socials-hidden .stm-socials a {
      float: none;
      display: inline-block;
      vertical-align: top; }
  .stm-socials-hidden.active .stm-socials {
    top: 100%;
    opacity: 1;
    visibility: visible; } }

.stm-cart_style_1 .cart {
  position: relative;
  text-align: center; }
  .stm-cart_style_1 .cart_rounded {
    width: 30px;
    height: 30px;
    line-height: 28px;
    border: 1px solid rgba(255, 105, 78, 0.2);
    border-radius: 50%;
    transition: .3s ease; }
    .stm-cart_style_1 .cart_rounded:hover .cart__icon {
      color: #fff; }
  .stm-cart_style_1 .cart__icon {
    font-size: 16px; }
  .stm-cart_style_1 .cart__quantity-badge {
    display: block;
    position: absolute;
    right: -7px;
    top: -7px;
    padding: 0 5px;
    min-width: 18px;
    height: 18px;
    font-size: 11px;
    line-height: 18px;
    text-indent: 1px;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    border-radius: 9px; }
  .stm-cart_style_1 .cart:hover {
    cursor: pointer; }
    .stm-cart_style_1 .cart:hover .mini-cart {
      top: 100%;
      opacity: 1 !important;
      visibility: visible; }
  @media (max-width: 1023px) {
    .stm-cart_style_1 .cart {
      margin-left: -5px; }
      .stm-cart_style_1 .cart .mini-cart {
        position: relative;
        top: 0 !important;
        right: 0;
        font-size: 90%; }
        .stm-cart_style_1 .cart .mini-cart:before {
          left: 8px;
          right: auto; } }

.stm-cart_style_2 .cart {
  position: relative;
  font-size: 13px; }
  .stm-cart_style_2 .cart .cart__icon {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -2px;
    text-align: center;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%; }
  .stm-cart_style_2 .cart .mini-cart {
    right: -17px; }
  .stm-cart_style_2 .cart:hover {
    color: #fff;
    cursor: pointer; }
    .stm-cart_style_2 .cart:hover .cart__icon {
      color: #fff; }
    .stm-cart_style_2 .cart:hover .mini-cart {
      top: 100%;
      opacity: 1 !important;
      visibility: visible; }

/* Header: Mini cart */
.mini-cart {
  position: absolute;
  top: 115%;
  right: -15px;
  opacity: 0 !important;
  visibility: hidden;
  margin-top: 13px;
  width: 205px;
  line-height: normal;
  text-align: left;
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: .3s ease; }
  .mini-cart:after {
    content: '';
    display: block;
    position: absolute;
    top: -13px;
    right: 0;
    width: 100%;
    height: 13px; }
  .mini-cart:before {
    content: '';
    display: block;
    position: absolute;
    top: -6px;
    right: 23px;
    width: 12px;
    height: 12px;
    background-color: #fff;
    transform: rotate(45deg); }
  .mini-cart__products {
    position: relative;
    background-color: #fff;
    list-style: none;
    margin: 0;
    overflow-y: auto;
    max-height: 215px; }
  .mini-cart__product {
    border-bottom: 1px solid #ececec;
    padding: 15px; }
    .mini-cart__product:last-child {
      margin-bottom: 0;
      border-bottom: none; }
    .mini-cart__product-left {
      float: left;
      max-width: 41px; }
    .mini-cart__product img {
      display: block;
      max-width: 41px;
      height: auto; }
    .mini-cart__product-body {
      overflow: hidden;
      padding-left: 10px; }
    .mini-cart__product-title {
      margin-top: 1px;
      color: #444444;
      display: block;
      line-height: 16px;
      text-decoration: none !important; }
    .mini-cart__product-quantity {
      display: block;
      margin-top: 3px;
      color: #777777; }
  .mini-cart__empty {
    padding: 15px;
    font-size: 13px; }
  .mini-cart__price-total {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    padding: 11px 15px; }
    .mini-cart__price-total .amount {
      font-weight: 700;
      font-size: 14px; }
  .mini-cart__actions {
    background-color: #fff;
    padding: 15px; }
    .mini-cart__actions .btn {
      padding: 5px 10px !important;
      font-size: 12px; }
  .mini-cart a.mini-cart__action-link {
    font-size: 13px;
    margin-left: 10px;
    color: #777 !important;
    text-decoration: underline !important; }

.stm-search_style_1 [data-toggle='modal'] {
  display: block; }
  .stm-search_style_1 [data-toggle='modal']:focus {
    outline: none; }

.stm-search_style_1 a {
  width: 36px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 50%;
  text-align: center;
  line-height: 36px;
  font-size: 10px; }

.stm-search_style_2 {
  position: relative;
  overflow: hidden;
  padding-bottom: 1px;
  margin-bottom: -1px; }
  .stm-search_style_2 .search-form .form-control {
    width: 260px;
    padding-right: 37px; }
    .stm-search_style_2 .search-form .form-control:focus + button {
      background: transparent !important; }
  .stm-search_style_2 .search-form button {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 8px 15px !important;
    background-color: transparent !important;
    color: inherit !important;
    border-radius: 0 !important;
    line-height: 28px; }
    .stm-search_style_2 .search-form button:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: -1000px;
      width: 9999px;
      height: 1px; }

.stm-search_style_3 a:focus {
  outline: 0; }

.stm-search_style_4 {
  position: relative;
  overflow: hidden;
  padding-bottom: 1px;
  margin-bottom: -1px; }
  .stm-search_style_4 .search-form .form-control {
    width: 210px;
    background: transparent;
    border-color: #292929;
    border-width: 1px;
    padding: 12px 28px 12px 9px;
    height: 30px; }
    .stm-search_style_4 .search-form .form-control:focus {
      border-color: transparent !important;
      background: rgba(255, 255, 255, 0.1) !important; }
      .stm-search_style_4 .search-form .form-control:focus + button {
        background: transparent !important; }
  .stm-search_style_4 .search-form button {
    position: absolute;
    right: 0;
    top: -1px;
    bottom: 0;
    padding: 8px 10px !important;
    background-color: transparent !important;
    color: inherit !important;
    border-radius: 0 !important;
    line-height: 16px;
    font-size: 15px; }
    .stm-search_style_4 .search-form button:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: -1000px;
      width: 9999px;
      height: 1px; }

.stm-search_style_5 {
  border-radius: 22px;
  position: relative;
  height: 44px;
  min-width: 165px;
  width: 100%;
  z-index: 100; }
  .stm-search_style_5 .search-form {
    height: 44px;
    width: 100%;
    position: relative;
    width: 165px; }
    .stm-search_style_5 .search-form input[type=search] {
      display: block;
      border-radius: 22px;
      background-color: #fff;
      border: 1px solid #d1d1d1;
      transition: 0s width, .3s box-shadow !important; }
      .stm-search_style_5 .search-form input[type=search]:focus {
        position: absolute;
        right: 0 !important;
        border-color: #d1d1d1 !important; }
        .stm-search_style_5 .search-form input[type=search]:focus + button[type=submit] {
          background-color: transparent !important; }
      @media (min-width: 1024px) {
        .stm-search_style_5 .search-form input[type=search]:focus {
          transition: .3s box-shadow, .3s width ease !important;
          box-shadow: 0 0 0 999999px rgba(0, 0, 0, 0.3) !important;
          position: absolute;
          right: 0 !important;
          width: 200px;
          top: 50%;
          transform: translateY(-50%);
          border-color: #d1d1d1 !important; }
          .stm-search_style_5 .search-form input[type=search]:focus + button[type=submit] {
            background-color: transparent !important; } }
    .stm-search_style_5 .search-form button[type=submit] {
      padding: 0 20px;
      background-color: transparent;
      color: #000;
      position: absolute;
      height: 44px;
      right: 0;
      top: 0;
      left: auto;
      border-radius: 22px;
      transition: none !important; }
      .stm-search_style_5 .search-form button[type=submit]:hover {
        background-color: transparent;
        color: #000; }

.stm-search_style_6 {
  position: relative;
  overflow: hidden;
  height: 100%;
  display: -ms-flexbox;
  display: flex; }
  .stm-search_style_6 .search-form {
    height: 100%;
    display: -ms-flexbox;
    display: flex; }
    .stm-search_style_6 .search-form .form-control {
      width: 270px;
      background: transparent;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-top-width: 0;
      border-bottom-width: 0;
      padding: 0 20px;
      height: 100%;
      font-size: 12px;
      color: inherit !important; }
      .stm-search_style_6 .search-form .form-control:focus {
        border-color: transparent !important;
        background: rgba(255, 255, 255, 0.1) !important; }
        .stm-search_style_6 .search-form .form-control:focus + button {
          background: transparent !important; }
    .stm-search_style_6 .search-form button {
      position: absolute;
      right: 0;
      top: -1px;
      bottom: 0;
      padding: 8px 10px !important;
      background-color: transparent !important;
      color: inherit !important;
      border-radius: 0 !important; }
      .stm-search_style_6 .search-form button i {
        font-size: 10px; }
      .stm-search_style_6 .search-form button:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: -1000px;
        width: 9999px;
        height: 1px; }
  @media (max-width: 1023px) {
    .stm-search_style_6 .search-form .form-control {
      border-left-color: #333;
      width: 100%;
      min-height: 40px; } }

.stm-header__cell_left .stm-search_style_5 .search-form input[type=search]:focus {
  left: 0;
  right: auto; }
  .stm-header__cell_left .stm-search_style_5 .search-form input[type=search]:focus + button[type=submit] {
    right: -140px;
    transition: all .3s ease !important; }

#searchModal .modal-content {
  width: 800px;
  background: transparent;
  box-shadow: none !important;
  border: 0; }
  #searchModal .modal-content .search-wrapper {
    position: relative; }
    #searchModal .modal-content .search-wrapper .search-input {
      min-height: 60px;
      padding-right: 40px;
      padding-left: 40px;
      font-size: 18px;
      line-height: 60px;
      border: 0 !important; }
    #searchModal .modal-content .search-wrapper .search-submit {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      padding: 0 25px;
      line-height: 60px;
      background: transparent !important;
      cursor: pointer;
      z-index: 999; }
      #searchModal .modal-content .search-wrapper .search-submit i {
        font-size: 24px; }

@media (max-width: 1023px) {
  .stm-header__element .stm-search {
    position: relative; }
    .stm-header__element .stm-search input {
      padding-right: 70px; }
    .stm-header__element .stm-search button {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      max-width: 50px;
      padding-left: 15px !important;
      padding-right: 15px !important; } }

.stm_woo__signin {
  font-size: 13px; }
  .stm_woo__signin a:hover {
    color: #ffffff !important; }

.stm_mobile__header {
  display: none;
  padding: 30px 15px; }

.stm_mobile__logo {
  max-width: 50%; }

.stm_mobile__switcher {
  position: relative;
  margin-top: 0;
  z-index: 999; }
  .stm_mobile__switcher span {
    display: block;
    width: 28px;
    height: 4px;
    margin-bottom: 7px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.5); }
    .stm_mobile__switcher span:first-child {
      position: relative;
      top: 0;
      transition: top .3s .3s, transform .3s 0s; }
    .stm_mobile__switcher span:nth-child(2) {
      opacity: 1;
      transition: opacity .3s; }
    .stm_mobile__switcher span:last-child {
      margin-bottom: 0;
      position: relative;
      top: 0;
      transition: top .3s .3s, transform .3s 0s; }
  .stm_mobile__switcher.active span {
    background: white; }
    .stm_mobile__switcher.active span:first-child {
      top: 11px;
      transform: rotate(-45deg);
      transition: top .3s 0s, transform .3s .3s; }
    .stm_mobile__switcher.active span:nth-child(2) {
      opacity: 0; }
    .stm_mobile__switcher.active span:last-child {
      top: -11px;
      transform: rotate(45deg);
      transition: top .3s 0s, transform .3s .3s; }

@media (max-width: 1023px) {
  .stm_mobile__header {
    display: block; } }

@media (max-width: 1024px) {
  .stm_mobile__logo {
    max-width: 40%; } }

@media (max-width: 550px) {
  .stm_mobile__logo {
    max-width: 50%; } }

@media (max-width: 1023px) {
  .envato-preview-visible .stm-header {
    margin-top: 54px; }
  .envato-preview-visible.stm_sticky_header_mobile .stm_mobile__header {
    margin-top: 54px; } }

@media (max-width: 1023px) {
  .stm-navigation__default > ul > li ul li {
    float: none; }
  .stm_sticky_header_mobile .stm_mobile__header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100; }
  .stm_sticky_header_mobile .stm-header {
    padding-top: 108px; } }

@media (max-width: 450px) {
  .stm_mobile__header {
    padding-left: 0 !important;
    padding-right: 0 !important; } }

.btn_extended {
  padding: 19px 40px 19px 90px !important;
  border-radius: 0 !important; }
  .btn_extended .stm-button__icon {
    position: absolute;
    font-size: 36px;
    left: 30px;
    top: 50%;
    transform: translate3d(0, -53%, 0); }
  .btn_extended .stm-button__text {
    margin: 7px 0 0;
    font-size: 14px;
    line-height: 1;
    font-weight: 500; }
  .btn_extended .stm-button__description {
    font-size: 13px;
    font-weight: 300; }
  @media (max-width: 1023px) {
    .btn_extended {
      padding: 19px 20px 19px 65px !important; }
      .btn_extended .stm-button__icon {
        left: 15px; } }

.envato-preview-visible .stm-header .pearl_sticked {
  top: 54px !important; }

.stm-post-filter .stm_mobile__switcher {
  display: none; }

.stm-post-filter .post-filter ul {
  padding: 0;
  padding-top: 32px;
  margin: 0; }
  .stm-post-filter .post-filter ul li {
    display: block;
    list-style: none;
    text-align: left;
    margin: 10px 0; }
    .stm-post-filter .post-filter ul li a {
      padding: 0;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1.4px;
      line-height: 30px;
      font-weight: 600;
      font-size: 14px; }
      .stm-post-filter .post-filter ul li a:hover {
        text-decoration: none; }
      .stm-post-filter .post-filter ul li a .filter-icon {
        margin-top: 3px;
        display: inline-block;
        vertical-align: top;
        margin-right: 9px;
        font-size: 22px; }
      .stm-post-filter .post-filter ul li a.stm-post-filter-hot .filter-icon {
        color: #ff0000; }
      .stm-post-filter .post-filter ul li a.stm-post-filter-popular .filter-icon {
        color: #ffaa00; }
      .stm-post-filter .post-filter ul li a.stm-post-filter-latest .filter-icon {
        color: #3fbb01; }
      .stm-post-filter .post-filter ul li a.stm-post-filter-trending .filter-icon {
        color: #289dfd; }

@media (min-width: 1024px) {
  .stm-post-filter {
    padding: 36px 0 36px; }
    .stm-post-filter .stm_mobile__switcher {
      display: block;
      margin-top: 6px;
      margin-right: 2px;
      cursor: pointer; }
      .stm-post-filter .stm_mobile__switcher span {
        border-radius: 0;
        width: 32px;
        height: 3px; }
      .stm-post-filter .stm_mobile__switcher.active span:first-child {
        top: 9px; }
    .stm-post-filter:after {
      content: "";
      position: absolute;
      top: 100%;
      left: -40px;
      right: -40px;
      height: 1px;
      background-color: #e5e5e5; }
    .stm-post-filter .post-filter {
      position: absolute;
      top: -100%;
      left: -40px;
      right: -40px;
      padding-top: 1px;
      text-align: center;
      transition-delay: 1s; }
      .stm-post-filter .post-filter:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        transition: height 0.3s;
        transition-delay: 0.12s;
        background-color: #fff;
        box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.25); }
      .stm-post-filter .post-filter ul {
        opacity: 0;
        visibility: hidden;
        transition: all 0.4s;
        transition-delay: 0s;
        padding: 19px 0 20px;
        position: relative;
        overflow: hidden;
        z-index: 1; }
        .stm-post-filter .post-filter ul li {
          display: inline-block;
          text-align: center;
          margin: 0 22px; }
      .stm-post-filter .post-filter.active {
        top: 100%;
        transition: height 0.3s; }
        .stm-post-filter .post-filter.active:after {
          height: 100%;
          transition-delay: 0.1s; }
        .stm-post-filter .post-filter.active ul {
          transition: all 0.3s;
          transition-delay: 0.1s;
          visibility: visible;
          opacity: 1; } }

@media (max-width: 1024px) {
  .dropdown-list {
    position: static; } }

.stm-address-box {
  position: relative;
  margin-right: 20px;
  z-index: 10; }
  .stm-address-box:hover .stm-address-info {
    opacity: 1;
    visibility: visible; }
  .stm-address-box .stm-address-hours-title {
    position: relative;
    line-height: 32px;
    font-size: 15px;
    color: #111111;
    cursor: pointer;
    z-index: 1; }
    .stm-address-box .stm-address-hours-title:after {
      content: "";
      position: absolute;
      top: 12px;
      right: -16px;
      border-left: 5px solid transparent !important;
      border-right: 5px solid transparent !important;
      border-top: 6px solid #aaaaaa; }
    .stm-address-box .stm-address-hours-title strong {
      letter-spacing: 0.5px; }
  .stm-address-box .stm-address-info {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: -20px;
    left: -35px;
    min-width: 263px;
    padding: 60px 35px 30px;
    background-color: #fff;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.3);
    border-top: 5px solid transparent;
    line-height: 22px;
    font-size: 14px;
    color: #111111; }
    .stm-address-box .stm-address-info strong {
      display: block;
      margin-bottom: 5px;
      letter-spacing: 1.3px;
      text-transform: uppercase; }
    .stm-address-box .stm-address-info .stm-address-hours {
      margin-bottom: 14px; }
    .stm-address-box .stm-address-info .stm-address-address {
      margin-bottom: 9px; }
  .stm-address-box:hover .stm-address-hours-title:after {
    border-top-color: #0172f2; }
  .stm-address-box.active .stm-address-info {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s; }
  @media (max-width: 1023px) {
    .stm-address-box .stm-address-hours-title {
      line-height: 16px; }
      .stm-address-box .stm-address-hours-title:after {
        top: 4px; }
    .stm-address-box .stm-address-info {
      display: none;
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      padding: 20px 15px;
      min-width: 235px;
      visibility: visible;
      opacity: 1; }
    .stm-address-box.active .stm-address-info {
      display: block;
      top: auto; } }

.stm-header__row {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  z-index: 50;
  /*Pseudo elements*/ }
  .stm-header__row_color {
    position: relative;
    background-size: cover; }
    .stm-header__row_color_top {
      z-index: 21; }
    .stm-header__row_color_center {
      z-index: 20; }
    .stm-header__row_color_bottom {
      z-index: 19; }
    .stm-header__row_color:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0; }
    .stm-header__row_color > .container {
      position: relative; }
      .stm-header__row_color > .container:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; }

.stm-header__cell {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-positive: 1;
      flex-grow: 1;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -ms-flex-align: center;
      align-items: center; }
  .stm-header__cell_left {
    -ms-flex-pack: start;
        justify-content: flex-start; }
    .stm-header__cell_left .stm-header__element {
      margin-right: 30px; }
      .stm-header__cell_left .stm-header__element:last-child {
        margin-right: 0; }
  .stm-header__cell_center {
    -ms-flex-pack: center;
        justify-content: center; }
    .stm-header__cell_center .stm-header__element {
      margin: 0 15px; }
      .stm-header__cell_center .stm-header__element:last-child {
        margin-right: 0; }
    .stm-header__cell_center .stm-header__element_fullwidth_simple {
      -ms-flex-pack: center;
          justify-content: center; }
  .stm-header__cell_right {
    -ms-flex-pack: end;
        justify-content: flex-end; }
    .stm-header__cell_right .stm-header__element {
      margin-left: 30px; }
      .stm-header__cell_right .stm-header__element:last-child {
        margin-right: 0; }

.stm-header__element {
  display: -ms-flexbox;
  display: flex; }
  .stm-header__element_fullwidth_simple, .stm-header__element_fullwidth {
    -ms-flex-positive: 10;
        flex-grow: 10;
    margin: 0 !important; }

.stm-header__overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: -100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  display: none;
  z-index: 99; }
  .stm-header__overlay.active {
    right: 0;
    opacity: 1;
    visibility: visible;
    z-index: 19; }
  @media (max-width: 1023px) {
    .stm-header__overlay {
      display: block; } }

.stm_header_transparent .stm-header__row_color {
  background: none !important; }
  .stm_header_transparent .stm-header__row_color:before {
    background: none !important; }

.stm-offices {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
      align-items: center; }

@media (max-width: 1023px) {
  .stm_mobile__logo {
    min-width: 300px; }
  .stm-header .container {
    max-width: 100%; }
  .stm_header_transparent .stm-header {
    position: fixed;
    width: 270px; }
  .stm-header {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -270px;
    background-color: #fff;
    padding: 16px 0 16px;
    width: 270px;
    margin: 0;
    margin-bottom: 0 !important;
    box-shadow: -1px 3px 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 100; }
    .stm-header.active {
      left: 0; }
    .stm-header__row {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap; }
      .stm-header__row_color {
        position: relative;
        padding: 0 !important; }
    .stm-header__cell {
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -ms-flex-positive: 0;
          flex-grow: 0;
      max-width: 100%;
      width: 100%;
      margin-bottom: 30px;
      -ms-flex-pack: start;
          justify-content: flex-start; }
    .stm-header__element {
      display: block;
      width: 100%;
      padding: 0 15px;
      margin: 0 0 30px 0 !important; }
      .stm-header__element_fullwidth {
        padding: 0; }
      .stm-header__element:last-child {
        margin-bottom: 0 !important; }
    .stm-header .container {
      padding: 0; } }

@media (max-width: 550px) {
  .stm_mobile__logo {
    min-width: 200px; } }

body.stm_title_box_enabled:not(.stm_header_offset) .stm-header {
  margin-bottom: 0; }

body.stm_transparent_header_disabled.stm_title_box_disabled.stm_breadcrumbs_enabled .stm-header {
  margin-bottom: 20px; }

@media (max-width: 1023px) {
  .stm_title_box_disabled .stm_breadcrumbs {
    margin-top: 15px; } }

.stm-header__row_color.pearl_is_sticky {
  transition: .3s ease; }
  .stm-header__row_color.pearl_is_sticky.pearl_going_sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    transition: 0s ease;
    z-index: 99; }
  .stm-header__row_color.pearl_is_sticky.pearl_sticked {
    transform: translateY(0);
    transition: .3s ease; }
