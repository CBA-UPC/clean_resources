{"error-type": "unsupport-type"}nction o(a,u){if(!r[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=r[a]={exports:{}};t[a][0].call(c.exports,function(e){var r=t[a][1][e];return o(r||e)},c,c.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}return e}()({1:[function(e,t,r){"use strict";function n(e){var t={url:"",data:{},method:"get",async:"true",headers:{},withCredentials:!1,timeout:5e3,dataType:"json",success:null,error:null,complete:null};e=u(e,t);var r=null;if(c()&&["IE7","IE8","IE9"].indexOf(d())!=-1)try{r=new XDomainRequest("Msxml2.XMLHTTP")}catch(n){r=new ActiveXObject("Microsoft.XMLHTTP")}else if(window.XMLHttpRequest)r=new XMLHttpRequest;else try{r=new XDomainRequest("Msxml2.XMLHTTP")}catch(n){r=new ActiveXObject("Microsoft.XMLHTTP")}var a=0;if(e.timeout&&(a=setTimeout(function(){e.error&&e.error(r),e.complete&&e.complete(r,"timeout"),r.onreadystatechange=null,r.abort()},e.timeout)),r.onreadystatechange=function(){var t="";4==r.readyState&&(r.status>=200&&r.status<300||304==r.status?(t="success",e.success&&e.success(i(r,e))):(t="error",e.error&&e.error("")),e.complete&&e.complete(r,t),clearTimeout(a))},"get"==e.method.toLowerCase()){var s=o(e.data);r.open("get",e.url+(s?"?"+s:""),"true"==e.async);for(var f in e.headers)r.setRequestHeader(f,e.headers[f]);r.withCredentials=e.xhrFields.withCredentials,r.send()}else{r.open("post",e.url,"true"==e.async);for(var f in e.headers)r.setRequestHeader(f,e.headers[f]);r.withCredentials=e.xhrFields.withCredentials,r.send(e.data)}}function o(e){var t=[];for(var r in e)t.push(r+"="+encodeURIComponent(e[r]));return t.join("&")}function i(e,t){var r={};if("json"==t.dataType)try{r=JSON.parse(e.responseText)}catch(n){r={},console.error("请求接口返回值格式异常:",n)}return"blob"==t.dataType&&(r=e.response),r}Object.defineProperty(r,"__esModule",{value:!0});var a=e("./commons"),u=a.extend,s=e("./client"),d=s.getBrowserType,c=s.isIE;r.baseAjax=n},{"./client":4,"./commons":5}],2:[function(require,module,exports){"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function axios(e,t){var r,n={cid:"601",ver:getVer(),timestamp:(new Date).getTime()};t=extend(t,n);var o=(r={headers:{"x-platform":"phone"},method:"GET",data:{},withCredentials:"true",async:"true",isParam:"true",dataType:"json",defaultContentType:"true",okFun:function(e){},errFun:function(e){},encryptType:"headers",isEncrypt:"false"},_defineProperty(r,"defaultContentType","true"),_defineProperty(r,"isBrush","false"),_defineProperty(r,"proxy","false"),r);if(e=extend(e,o),!e.url)return console.log("请求URL地址不能为空");var i=new Date,a={url:e.url,lgin:e.data||"",inbyte:e.data?JSON.stringify(e.data).length:0,st:i.toLocaleString()},u={dataType:e.dataType,method:e.method,headers:getHeaders(e,t),url:"true"==e.proxy?e.url:urlDispose(e.url),async:e.async,xhrFields:{withCredentials:e.withCredentials},data:getData(e,t),success:function(t){return t&&1==t.status?e.okFun&&e.okFun(t):e.errFun&&e.errFun(t)},error:function(t){e.errFun&&e.errFun({status:0,message:"请求异常"+t,data:null})},complete:function(t,r){var n=e.headers;if(window._reportLog)if(a.dur=Date.now()-i.getTime(),a.lgout=t.responseText||"",a.outbyte=a.lgout.length,"success"==r)try{var o=JSON.parse(t.responseText);window._reportLog(a,"info",n),(!o||""!==o.ercd&&null!==o.ercd&&void 0!==o.ercd)&&(a.reason="status: "+o.status,window._reportLog(a,"err",n))}catch(u){window._reportLog(a,"info",n),a.reason="responseText: "+t.responseText,window._reportLog(a,"err",n)}else window._reportLog(a,"info",n),a.reason=r||"",window._reportLog(a,"err",n)}};baseAjax(u)}Object.defineProperty(exports,"__esModule",{value:!0});var _require=require("./axiosExtend"),getVer=_require.getVer,getHeaders=_require.getHeaders,getData=_require.getData,_require2=require("./commons"),extend=_require2.extend,urlDispose=_require2.urlDispose,_require3=require("./ajax"),baseAjax=_require3.baseAjax;window.JSON||(window.JSON={parse:function parse(sJson){var b=null;try{b=eval("("+sJSON+")")}catch(e){}return b},stringify:function(e){var t="";for(var r in e)if("string"==typeof e[r])t+='"'+r+'":"'+e[r]+'",';else if(e[r]instanceof RegExp)t+='"'+r+'":{},';else if("undefined"==typeof e[r]||e[r]instanceof Function);else if(e[r]instanceof Array){t+='"'+r+'":[';var n=e[r];for(var o in n)t+="string"==typeof n[o]?'"'+n[o]+'",':n[o]instanceof RegExp?"{},":"undefined"==typeof n[o]||n[o]instanceof Function?"null,":n[o]instanceof Object?this.stringify(n[o])+",":n[o]+",";t=t.slice(0,-1)+"],"}else t+=e[r]instanceof Object?'"'+r+'":'+this.stringify(e[r])+",":'"'+r+'":'+e[r]+",";return"{"+t.slice(0,-1)+"}"}}),exports.axios=axios},{"./ajax":1,"./axiosExtend":3,"./commons":5}],3:[function(e,t,r){"use strict";function n(e,t){var r={cid:"601",timestamp:(new Date).getTime(),gradeParam:{},uid:window.__uid__||"",ver:window.__appver__||null,headerEncryptKeys:[{name:"pc",value:"19DDD1FBDFF065D3A4DA777D2D7A81EC",cid:"508"},{name:"phone",value:"DB2560A6EBC65F37A0484295CD4EDD25",cid:"601"},{name:"h5",value:"745DFB2027E8418384A1F2EF1B54C9F5",cid:"601"},{name:"business_applet",value:"64A1071F6C3C3CC68DABBF5A90669C0A",cid:"601"},{name:"wechat",value:"AF23B0A6EBC65F37A0484395CE4EDD2K",cid:"601"},{name:"tencent",value:"1615A9BDB0374D16AE9EBB3BBEE5353C",cid:"750"}],paramsKey:"f48aa2d0-31e0-42a6-a7a0-64ba148262f0"};t=y(t,r),t.cid=p(e,t),t.timestamp=(new Date).getTime();var n=h(e.headers);n["x-timestamp"]=t.timestamp,o("Content-Type",e.headers)||"true"!=e.defaultContentType||(n["Content-Type"]="application/json;charset=UTF-8"),"headers"==e.encryptType&&(n["x-sign"]=u(e,t));var i=d(),a=s(),f=c();return o("x-city-id",e.headers)||(n["x-city-id"]=i),o("x-ip-address",e.headers)||(n["x-ip-address"]=a),o("x-user-guid",e.headers)||(n["x-user-guid"]=f),window.__getAjaxHeader&&(n=y(n,window.__getAjaxHeader())),n}function o(e,t){return!!t[e]}function i(e,t){if(!e.headers||!e.headers["x-platform"])return t.cid;var r=t.headerEncryptKeys.find(function(t){return t.name==e.headers["x-platform"]});return r?r.value:t.cid}function a(e,t){var r={cid:"601",timestamp:(new Date).getTime(),gradeParam:{},uid:window.__uid__||"",ver:window.__appver__||null};if(t=y(t,r),"false"==e.isParam)return"POST"==e.method.toUpperCase()?JSON.stringify(e.data)||"{}":e.data;var n=u(e,t);return"headers"==e.encryptType?"POST"==e.method.toUpperCase()?JSON.stringify(l({cid:t.cid,param:e.data||{}},t.gradeParam)):l({cid:t.cid,param:JSON.stringify(e.data)||"{}"},t.gradeParam):"POST"==e.method.toUpperCase()?JSON.stringify(l({cid:t.cid,uid:t.uid,ver:t.ver,t:t.timestamp,devid:e.deviceId||"",sign:n,param:e.data||{}},t.gradeParam)):l({cid:t.cid,uid:t.uid,ver:t.ver,t:t.timestamp,devid:e.deviceId||"",sign:n,param:JSON.stringify(e.data)||"{}"},t.gradeParam)}function u(e,t){var r="";if("headers"==e.encryptType){var n=e.data?JSON.stringify(e.data):"{}",o=i(e,t);r="cid="+t.cid+"&param="+n+o+t.timestamp}else{var a=[];a.push("cid="+t.cid),a.push("uid="+t.uid),a.push("ver="+t.ver),a.push("devid="+(e.deviceId||"")),a.push("t="+t.timestamp),a.push("key="+t.paramsKey),r=a.join(";")}var u=_(r);return u}function s(){return window.Bitauto&&Bitauto&&Bitauto.location&&Bitauto.location.ip||""}function d(){return window.Bitauto&&Bitauto&&Bitauto.location&&Bitauto.location.city&&Bitauto.location.city.id||""}function c(){var e=g("UserGuid")||g("CIGUID");if(e)return e;var t=x();return w("CIGUID",t,43800,".yiche.com"),t}function f(){return window.baseConf&&baseConf.outZipName&&baseConf.outZipName.split("_")[1]||"v10.36.0"}function p(e,t){if(!e.headers||!e.headers["x-platform"])return t.cid;var r=t.headerEncryptKeys.find(function(t){return t.name===e.headers["x-platform"]});return r?r.cid:t.cid}Object.defineProperty(r,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m=e("./commons"),y=m.extend,x=m.createGuid,h=m.deepClone,v=e("./cookie"),g=v.getCookie,w=v.setCookie,C=e("./md5"),_=C.md5;r.getHeaders=n,r.getHeaderKey=i,r.getData=a,r.getIp=s,r.getCityId=d,r.getGuid=c,r.getVer=f},{"./commons":5,"./cookie":6,"./md5":8}],4:[function(e,t,r){"use strict";function n(e){var t=navigator.userAgent;if(!(e&&e.length>0&&t))return!1;var r=e.some(function(e){return t.toLowerCase().indexOf(e.toLowerCase())>=0});return r}function o(){return n(["Trident"])}function i(){var e=navigator.userAgent,t=e.indexOf("Opera")>-1,r=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1&&!t,n=e.indexOf("Edge")>-1,o=e.indexOf("Firefox")>-1,i=e.indexOf("Safari")>-1&&e.indexOf("Chrome")==-1,a=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1;if(r){var u=new RegExp("MSIE (\\d+\\.\\d+);");u.test(e);var s=parseFloat(RegExp.$1);return 7==s?"IE7":8==s?"IE8":9==s?"IE9":10==s?"IE10":11==s?"IE11":"0"}return t?"Opera":n?"Edge":o?"FF":i?"Safari":a?"Chrome":void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.isIE=o,r.getBrowserType=i},{}],5:[function(e,t,r){"use strict";function n(e,t){if(!e)return t;for(var r in t){var n=e[r];o(n)?e[r]=n:n||(e[r]=t[r])}return e}function o(e){return"boolean"==typeof e}function i(e){return null===e||"undefined"==typeof e}function a(e){return"object"===("undefined"==typeof e?"undefined":f(e))}function u(e){return e instanceof Array}function s(e){return/http(s)?:\/\/((\d+)\.?){4}/g.test(e)?e:0==e.indexOf("//")?"https:"+e:0==e.indexOf("http://")?e.replace("http://","https://"):e}function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,r="x"==e?t:3&t|8;return r.toString(16)})}function c(e){var t=[],r=function n(e){if(i(e)||!a(e))return e;for(var r=0;r<t.length;r++)if(t[r].target===e)return t[r].copyTarget;var o={};return u(e)&&(o=[]),t.push({target:e,copyTarget:o}),Object.keys(e).forEach(function(t){o[t]||(o[t]=n(e[t]))}),o};return r(e)}Object.defineProperty(r,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.extend=n,r.isBool=o,r.isNull=i,r.isObject=a,r.isArray=u,r.urlDispose=s,r.createGuid=d,r.deepClone=c},{}],6:[function(e,t,r){"use strict";function n(e){var t,r=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),n="";return(t=document.cookie.match(r))&&(n=t[2]),decodeURIComponent(n)}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:43200,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".yiche.com",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"/",i=new Date;i.setTime(i.getTime()+60*r*1e3);var a=e+"="+t+";expires="+i.toGMTString()+"; domain="+n+("undefined"==typeof o?"":";path="+o);document.cookie=a}function i(e){var t=new Date;t.setTime(t.getTime()-1);var r=n(e);null!=r&&(document.cookie=e+"="+r+";expires="+t.toGMTString())}Object.defineProperty(r,"__esModule",{value:!0}),r.getCookie=n,r.setCookie=o,r.removeCookie=i},{}],7:[function(e,t,r){"use strict";var n=e("./axios"),o=n.axios,i=e("./commons"),a=i.extend;Array.prototype.find||(Array.prototype.find=function(e){for(var t=null,r=0;r<this.length;r++)e(this[r],r)&&(t=this[r]);return t}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){for(var t=-1,r=0;r<this.length;r++)r==e&&(t=r);return t});var u=function(e,t){var r=this;r.ajaxParams=a(e,{}),r.configOptions=a(t,{})};u.prototype.apiPostData=function(e,t,r){var n=this;e=a(e,n.ajaxParams),r=a(r,n.configOptions),e.method="POST",t&&(e.okFun=function(e){t&&t(e)},e.errFun=function(e){t&&t(e)}),o(e,r)},u.prototype.apiGetData=function(e,t,r){var n=this;e=a(e,n.ajaxParams),r=a(r,n.configOptions),e.method="GET",t&&(e.okFun=function(e){t&&t(e)},e.errFun=function(e){t&&t(e)}),o(e,r)};var s=a({M:new u({headers:{"x-platform":"phone"}}),PC:new u({headers:{"x-platform":"pc"}})});window?window.beforeAxios=s:"",t.exports=beforeAxios},{"./axios":2,"./commons":5}],8:[function(e,t,r){"use strict";function n(e,t){return e<<t|e>>>32-t}function o(e,t){var r,n,o,i,a;return o=2147483648&e,i=2147483648&t,r=1073741824&e,n=1073741824&t,a=(1073741823&e)+(1073741823&t),r&n?2147483648^a^o^i:r|n?1073741824&a?3221225472^a^o^i:1073741824^a^o^i:a^o^i}function i(e,t,r){return e&t|~e&r}function a(e,t,r){return e&r|t&~r}function u(e,t,r){return e^t^r}function s(e,t,r){return t^(e|~r)}function d(e,t,r,a,u,s,d){return e=o(e,o(o(i(t,r,a),u),d)),o(n(e,s),t)}function c(e,t,r,i,u,s,d){return e=o(e,o(o(a(t,r,i),u),d)),o(n(e,s),t)}function f(e,t,r,i,a,s,d){return e=o(e,o(o(u(t,r,i),a),d)),o(n(e,s),t)}function p(e,t,r,i,a,u,d){return e=o(e,o(o(s(t,r,i),a),d)),o(n(e,u),t)}function l(e){for(var t,r=e.length,n=r+8,o=(n-n%64)/64,i=16*(o+1),a=Array(i-1),u=0,s=0;s<r;)t=(s-s%4)/4,u=s%4*8,a[t]=a[t]|e.charCodeAt(s)<<u,s++;return t=(s-s%4)/4,u=s%4*8,a[t]=a[t]|128<<u,a[i-2]=r<<3,a[i-1]=r>>>29,a}function m(e){var t,r,n="",o="";for(r=0;r<=3;r++)t=e>>>8*r&255,o="0"+t.toString(16),n+=o.substr(o.length-2,2);return n}function y(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t}function x(e){var t,r,n,i,a,u,s,x,h,v=[],g=7,w=12,C=17,_=22,O=5,T=9,b=14,D=20,E=4,S=11,A=16,F=23,j=6,P=10,B=15,M=21;for(e=y(e),v=l(e),u=1732584193,s=4023233417,x=2562383102,h=271733878,t=0;t<v.length;t+=16)r=u,n=s,i=x,a=h,u=d(u,s,x,h,v[t+0],g,3614090360),h=d(h,u,s,x,v[t+1],w,3905402710),x=d(x,h,u,s,v[t+2],C,606105819),s=d(s,x,h,u,v[t+3],_,3250441966),u=d(u,s,x,h,v[t+4],g,4118548399),h=d(h,u,s,x,v[t+5],w,1200080426),x=d(x,h,u,s,v[t+6],C,2821735955),s=d(s,x,h,u,v[t+7],_,4249261313),u=d(u,s,x,h,v[t+8],g,1770035416),h=d(h,u,s,x,v[t+9],w,2336552879),x=d(x,h,u,s,v[t+10],C,4294925233),s=d(s,x,h,u,v[t+11],_,2304563134),u=d(u,s,x,h,v[t+12],g,1804603682),h=d(h,u,s,x,v[t+13],w,4254626195),x=d(x,h,u,s,v[t+14],C,2792965006),s=d(s,x,h,u,v[t+15],_,1236535329),u=c(u,s,x,h,v[t+1],O,4129170786),h=c(h,u,s,x,v[t+6],T,3225465664),x=c(x,h,u,s,v[t+11],b,643717713),s=c(s,x,h,u,v[t+0],D,3921069994),u=c(u,s,x,h,v[t+5],O,3593408605),h=c(h,u,s,x,v[t+10],T,38016083),x=c(x,h,u,s,v[t+15],b,3634488961),s=c(s,x,h,u,v[t+4],D,3889429448),u=c(u,s,x,h,v[t+9],O,568446438),h=c(h,u,s,x,v[t+14],T,3275163606),x=c(x,h,u,s,v[t+3],b,4107603335),s=c(s,x,h,u,v[t+8],D,1163531501),u=c(u,s,x,h,v[t+13],O,2850285829),h=c(h,u,s,x,v[t+2],T,4243563512),x=c(x,h,u,s,v[t+7],b,1735328473),s=c(s,x,h,u,v[t+12],D,2368359562),u=f(u,s,x,h,v[t+5],E,4294588738),h=f(h,u,s,x,v[t+8],S,2272392833),x=f(x,h,u,s,v[t+11],A,1839030562),s=f(s,x,h,u,v[t+14],F,4259657740),u=f(u,s,x,h,v[t+1],E,2763975236),h=f(h,u,s,x,v[t+4],S,1272893353),x=f(x,h,u,s,v[t+7],A,4139469664),s=f(s,x,h,u,v[t+10],F,3200236656),u=f(u,s,x,h,v[t+13],E,681279174),h=f(h,u,s,x,v[t+0],S,3936430074),x=f(x,h,u,s,v[t+3],A,3572445317),s=f(s,x,h,u,v[t+6],F,76029189),u=f(u,s,x,h,v[t+9],E,3654602809),h=f(h,u,s,x,v[t+12],S,3873151461),x=f(x,h,u,s,v[t+15],A,530742520),s=f(s,x,h,u,v[t+2],F,3299628645),u=p(u,s,x,h,v[t+0],j,4096336452),h=p(h,u,s,x,v[t+7],P,1126891415),x=p(x,h,u,s,v[t+14],B,2878612391),s=p(s,x,h,u,v[t+5],M,4237533241),u=p(u,s,x,h,v[t+12],j,1700485571),h=p(h,u,s,x,v[t+3],P,2399980690),x=p(x,h,u,s,v[t+10],B,4293915773),s=p(s,x,h,u,v[t+1],M,2240044497),u=p(u,s,x,h,v[t+8],j,1873313359),h=p(h,u,s,x,v[t+15],P,4264355552),x=p(x,h,u,s,v[t+6],B,2734768916),s=p(s,x,h,u,v[t+13],M,1309151649),u=p(u,s,x,h,v[t+4],j,4149444226),h=p(h,u,s,x,v[t+11],P,3174756917),x=p(x,h,u,s,v[t+2],B,718787259),s=p(s,x,h,u,v[t+9],M,3951481745),u=o(u,r),s=o(s,n),x=o(x,i),h=o(h,a);return(m(u)+m(s)+m(x)+m(h)).toLowerCase()}Object.defineProperty(r,"__esModule",{value:!0}),r.md5=x},{}]},{},[7]);
.sjqqapi_popwin {
margin: 0;
padding: 0;
width: 440px;
color: #666;
position: absolute;
z-index: 9999;
left: 50%;
margin-left: -220px;
font-size: 12px;
display: none;
text-align: left;
}.sjqqapi_popwin .innner {
overflow: hidden;
width: 428px;
margin: 6px;
position: relative;
-webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.6);
-moz-box-shadow: 0 6px 12px rgba(0,0,0,0.6);
box-shadow: 0 6px 12px rgba(0,0,0,0.6);
border: 1px solid #d2d4d6\9;
}.sjqqapi_popwin .fs14 {
font-size: 14px;
}
.sjqqapi_popwin .sjqqapi_head {
color: #333;
font-weight: bold;
line-height: 35px;
overflow: hidden;
width: 100%;
height: 35px;
background: transparent url(/images/head_bg.jpg) repeat-x;
}.sjqqapi_popwin .sjqqapi_head_install {
display: block;
float: left;
text-indent: 10px;
}
.sjqqapi_popwin .sjqqapi_head_title_s {
max-width: 90px;
_width: expression(this.scrollWidth > 90? "90px" : "");
height: 30px;
overflow: hidden;
display: block;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
word-break: keep-all;
float: left;
margin: 0;
padding: 0;
text-indent: 0px;
}
.sjqqapi_popwin .sjqqapiti0 {
text-indent: 0px;
}
.sjqqapi_popwin .sjqqapi_head_install {
display: block;
float: left;
text-indent: 10px;
}.sjqqapi_popwin .sjqqapi_close {
margin: 0;
padding: 0;
background: url(/images/head_close.png) no-repeat;
display: block;
width: 9px;
height: 9px;
border: none;
position: absolute;
right: 12px;
top: 13px;
cursor: pointer;
z-index: 9999;
font-size: 0;
}
.sjqqapi_popwin .sjqqapi_content {
width: 100%;
background: #ffffff;
border-bottom: 1px solid #d2d4d6;
position: relative;
overflow: hidden;
height: 225px;
}

.sjqqapi_content .sjqqapi_content_text {
display: block;
float: left;
}
.sjqqapi_tp div {
position: relative;
right: 50%;
}.sjqqapi_tp .yyb_bg {
display: block;
float: left;
width: 24px;
height: 16px;
background: url(/images/yyb_ico.png) 4px 0 no-repeat transparent;
}
 
.sjqqapi_popwin .sjqqapi_tp {
margin: 20px 0;
padding: 0;
font-style: normal;
display: block;
text-align: center;
white-space: nowrap;
position: relative;
color: #333;
left: 50%;
float: left;
}.sjqqapi_popwin .sjqqapi_c {
position: relative;
_top: -30px;
}.sjqqapi_popwin .clear {
clear: both;
}
.sjqqapi_popwin .sjqqapi_icon, .sjqqapi_popwin .sjqqapi_iconimg {
position: absolute;
left: 85px;
top: 4px;
}
.sjqqapi_popwin .sjqqapi_st_arrow {
background: url(/images/sj_process_arrow.gif) no-repeat transparent;
width: 19px;
height: 14px;
position: absolute;
top: 32px;
left: 207px;
}
.sjqqapi_popwin .sjqqapi_sj {
background: url(/images/sj_ico.png) no-repeat transparent;
width: 47px;
height: 81px;
position: absolute;
top: 0;
left: 296px;
}
.sjqqapi_popwin .sjqqapi_downloadapp {
margin: 0;
padding: 0;
width: 161px;
height: 35px;
line-height:35px; text-align:center;
background: url(/images/download_btn.png) no-repeat transparent;
font-size: 14px;
border: none;
cursor: pointer;
position: absolute;
left: 137px;
bottom: 22px;
color: #666;
}
.sjqqapi_popwin .content_bottom_arrow {
background: url(/images/arrow.png) no-repeat transparent;
width: 12px;
height: 11px;
position: absolute;
left: 208px;
bottom: 36px;
_bottom: 31px;
}
.sjqqapi_popwin .sjqqapi_foot {
background: #f3f4f5;
width: 100%;
height: 40px;
position: relative;
line-height: 40px;
}
.sjqqapi_foot_info {
margin: 0;
padding: 0;
text-align: center;
display: block;
font-style: normal;
white-space: nowrap;
}
.sjqqapi_popwin .c1071bb {
color: #1071bb;
cursor: pointer;
}
.downlsendt{ display:block; float:left; padding:10px; border:#CCC 1px solid; margin:10px;}
.downlsendt:hover{ background-color:#09F; color:#FFF;}
.tuistit{ height:40px; line-height:40px; text-align:center;}

.ztlist{ display:table; margin:0 auto; width:1020px; clear:both;}
.ztlist .ztbox{ width:320px; height:220px; float:left; margin-right:20px;}
.ztlist .ztbox img{ width:320px;}
.ztlist .zbrigt{ margin-right:0px;}

 

.pomores{ position:absolute; right:0px; top:0px; width:70px;}

.tjlist{ clear:both; }
.tjlist ul ,.tjlist li{ padding:0; margin:0;}
.tjlist li{ width:320px; height:120px; float:left;} 
.tjlist li img{ width:320px;}
.tjlist .mrgn{ margin-right:15px;}