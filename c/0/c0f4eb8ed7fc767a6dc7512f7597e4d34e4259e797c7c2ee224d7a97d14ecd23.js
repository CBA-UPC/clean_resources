!function(n,e,t){function r(t,i){if(!e[t]){if(!n[t]){var a="function"==typeof __nr_require&&__nr_require;if(!i&&a)return a(t,!0);if(o)return o(t,!0);throw new Error("Cannot find module '"+t+"'")}var s=e[t]={exports:{}};n[t][0].call(s.exports,function(e){var o=n[t][1][e];return r(o||e)},s,s.exports)}return e[t].exports}for(var o="function"==typeof __nr_require&&__nr_require,i=0;i<t.length;i++)r(t[i]);return r}({1:[function(n,e,t){e.exports=function(n,e){return"addEventListener"in window?window.addEventListener(n,e,!1):"attachEvent"in window?window.attachEvent("on"+n,e):void 0}},{}],2:[function(n,e,t){function r(n,e,t,r,i){d[n]||(d[n]={});var a=d[n][e];return a||(a=d[n][e]={params:t||{}},i&&(a.custom=i)),a.metrics=o(r,a.metrics),a}function o(n,e){return e||(e={count:0}),e.count+=1,f(n,function(n,t){e[n]=i(t,e[n])}),e}function i(n,e){return e?(e&&!e.c&&(e={t:e.t,min:e.t,max:e.t,sos:e.t*e.t,c:1}),e.c+=1,e.t+=n,e.sos+=n*n,n>e.max&&(e.max=n),n<e.min&&(e.min=n),e):{t:n}}function a(n,e){return e?d[n]&&d[n][e]:d[n]}function s(n){for(var e={},t="",r=!1,o=0;o<n.length;o++)t=n[o],e[t]=u(d[t]),e[t].length&&(r=!0),delete d[t];return r?e:null}function u(n){return"object"!=typeof n?[]:f(n,c)}function c(n,e){return e}var f=n(35),d={};e.exports={store:r,take:s,get:a}},{}],3:[function(n,e,t){function r(n,e,t){"string"==typeof e&&("/"!==e.charAt(0)&&(e="/"+e),v.customTransaction=(t||"http://custom.transaction")+e)}function o(n,e){var t=e?e-v.offset:n;d.store("cm","finished",{name:"finished"},{time:t}),i(n,{name:"finished",start:t+v.offset,origin:"nr"}),h("api-addPageAction",[t,"finished"])}function i(n,e){if(e&&"object"==typeof e&&e.name&&e.start){var t={n:e.name,s:e.start-v.offset,e:(e.end||e.start)-v.offset,o:e.origin||"",t:"api"};h("bstApi",[t])}}function a(n,e,t,r,o,i,a){if(e=window.encodeURIComponent(e),g+=1,v.info.beacon){var s="https://"+v.info.beacon+"/1/"+v.info.licenseKey;s+="?a="+v.info.applicationID+"&",s+="t="+e+"&",s+="qt="+~~t+"&",s+="ap="+~~r+"&",s+="be="+~~o+"&",s+="dc="+~~i+"&",s+="fe="+~~a+"&",s+="c="+g,p.img(s)}}function s(n,e){v.onerror=e}function u(n,e,t){++b>10||(v.releaseIds[e.slice(-200)]=(""+t).slice(-200))}var c=n(16),f=n(9),d=n(2),l=n(18),p=n(22),m=n(35),v=n("loader"),h=n("handle"),g=0;f.on("jserrors",function(){return{body:d.take(["cm"])}});var y={finished:l(o),setPageViewName:r,setErrorHandler:s,addToTrace:i,inlineHit:a,addRelease:u};m(y,function(n,e){c("api-"+n,e,"api")});var b=0},{}],4:[function(n,e,t){function r(n,e,t){return n||0===n||""===n?e(n)+(t?",":""):"!"}function o(n,e){return e?Math.floor(n).toString(36):void 0===n||0===n?"":Math.floor(n).toString(36)}function i(){function n(n){return"undefined"==typeof n||""===n?"":(n=String(n),f.call(e,n)?o(e[n],!0):(e[n]=t++,s(n)))}var e=Object.hasOwnProperty("create")?Object.create(null):{},t=0;return n}function a(n,e){var t=[];return u(n,function(n,r){if(!(t.length>=d)){var o,i=5;switch(n=e(n),typeof r){case"object":r?o=e(c(r)):i=9;break;case"number":i=6,o=r%1?r:r+".";break;case"boolean":i=r?7:8;break;case"undefined":i=9;break;default:o=e(r)}t.push([i,n+(o?","+o:"")])}}),t}function s(n){return"'"+n.replace(l,"\\$1")}var u=n(35),c=n(21),f=Object.prototype.hasOwnProperty,d=64;e.exports={nullable:r,numeric:o,getAddStringContext:i,addCustomAttributes:a};var l=/([,\\;])/g},{}],5:[function(n,e,t){var r=/([^?#]*)[^#]*(#[^?]*|$).*/,o=/([^?#]*)().*/;e.exports=function(n,e){return n.replace(e?r:o,"$1$2")}},{}],6:[function(n,e,t){function r(n,e){var t=n[1];i(e[t],function(e,t){var r=n[0],o=t[0];if(o===r){var i=t[1],a=n[3],s=n[2];i.apply(a,s)}})}var o=n("ee"),i=n(35),a=n(16).handlers;e.exports=function(n){var e=o.backlog[n],t=a[n];if(t){for(var s=0;e&&s<e.length;++s)r(e[s],t);i(t,function(n,e){i(e,function(e,t){t[0].on(n,t[1])})})}delete a[n],o.backlog[n]=null}},{}],7:[function(n,e,t){function r(n){return f[n]}function o(n){return null===n||void 0===n?"null":encodeURIComponent(n).replace(l,r)}function i(n,e){for(var t=0,r=0;r<n.length;r++)if(t+=n[r].length,t>e)return n.slice(0,r).join("");return n.join("")}function a(n,e){var t=0,r="";return u(n,function(n,i){var a,s,u=[];if("string"==typeof i)a="&"+n+"="+o(i),t+=a.length,r+=a;else if(i.length){for(t+=9,s=0;s<i.length&&(a=o(c(i[s])),t+=a.length,!("undefined"!=typeof e&&t>=e));s++)u.push(a);r+="&"+n+"=%5B"+u.join(",")+"%5D"}}),r}function s(n,e){return e&&"string"==typeof e?"&"+n+"="+o(e):""}var u=n(35),c=n(21),f={"%2C":",","%3A":":","%2F":"/","%40":"@","%24":"$","%3B":";"},d=u(f,function(n){return n}),l=new RegExp(d.join("|"),"g");e.exports={obj:a,fromArray:i,qs:o,param:s}},{}],8:[function(n,e,t){var r=n(35),o=n("ee"),i=n(6);e.exports=function(n){n&&"object"==typeof n&&(r(n,function(n,e){e&&!a[n]&&(o.emit("feat-"+n,[]),a[n]=!0)}),i("feature"))};var a=e.exports.active={}},{}],9:[function(n,e,t){function r(n){if(n.info.beacon){n.info.queueTime&&x.store("measures","qt",{value:n.info.queueTime}),n.info.applicationTime&&x.store("measures","ap",{value:n.info.applicationTime}),k.measure("be","starttime","firstbyte"),k.measure("fe","firstbyte","onload"),k.measure("dc","firstbyte","domContent");var e=x.get("measures"),t=v(e,function(n,e){return"&"+n+"="+e.params.value}).join("");if(t){var r="1",o=[l(n)];if(o.push(t),o.push(g.param("tt",n.info.ttGuid)),o.push(g.param("us",n.info.user)),o.push(g.param("ac",n.info.account)),o.push(g.param("pr",n.info.product)),o.push(g.param("af",v(n.features,function(n){return n}).join(","))),window.performance&&"undefined"!=typeof window.performance.timing){var i={timing:h.addPT(window.performance.timing,{}),navigation:h.addPN(window.performance.navigation,{})};o.push(g.param("perf",y(i)))}if(window.performance&&window.performance.getEntriesByType){var a=window.performance.getEntriesByType("paint");a.forEach(function(n){!n.startTime||n.startTime<=0||("first-paint"===n.name?o.push(g.param("fp",String(Math.floor(n.startTime)))):"first-contentful-paint"===n.name&&o.push(g.param("fcp",String(Math.floor(n.startTime)))),I(n.name,Math.floor(n.startTime)))})}o.push(g.param("xx",n.info.extra)),o.push(g.param("ua",n.info.userAttributes)),o.push(g.param("at",n.info.atts));var s=y(n.info.jsAttributes);o.push(g.param("ja","{}"===s?null:s));var u=g.fromArray(o,n.maxBytes);b.jsonp("https://"+n.info.beacon+"/"+r+"/"+n.info.licenseKey+u,T)}}}function o(n){var e=v(_,function(e){return s(e,n,{unload:!0})});return w(e,i)}function i(n,e){return n||e}function a(n){for(var e=p({}),t=p({}),r=_[n]||[],o=0;o<r.length;o++){var i=r[o]();i.body&&v(i.body,e),i.qs&&v(i.qs,t)}return{body:e(),qs:t()}}function s(n,e,t){return u(n,e,a(n),t)}function u(n,e,t,r){if(!e.info.errorBeacon||!t.body)return!1;r||(r={});var o="https://"+e.info.errorBeacon+"/"+n+"/1/"+e.info.licenseKey+l(e);t.qs&&(o+=g.obj(t.qs,e.maxBytes));var i,a,s;switch(n){case"jserrors":a=!1,i=N?b.beacon:b.img;break;default:if(r.needResponse)a=!0,i=b.xhr;else if(r.unload)a=N,i=N?b.beacon:b.img;else if(q)a=!0,i=b.xhr;else{if("events"!==n)return!1;i=b.img}}var u=o;a&&"events"===n?s=t.body.e:a?s=y(t.body):u=o+g.obj(t.body,e.maxBytes);var c=i(u,s);return c||i!==b.beacon||(c=b.img(o+g.obj(t.body,e.maxBytes))),c}function c(n){if(n&&n.info&&n.info.errorBeacon&&n.ieVersion){var e="https://"+n.info.errorBeacon+"/jserrors/ping/"+n.info.licenseKey+l(n);b.img(e)}}function f(n){return n.info.transactionName?g.param("to",n.info.transactionName):g.param("t",n.info.tNamePlain||"Unnamed Transaction")}function d(n,e){var t=_[n]||(_[n]=[]);t.push(e)}function l(n){return["?a="+n.info.applicationID,g.param("sa",n.info.sa?""+n.info.sa:""),g.param("v",A),f(n),g.param("ct",n.customTransaction),"&rst="+n.now(),g.param("ref",S(E.getLocation()))].join("")}function p(n){var e=!1;return function(t,r){if(r&&r.length&&(n[t]=r,e=!0),e)return n}}var m=n(18),v=n(35),h=n(14),g=n(7),y=n(21),b=n(22),w=n(38),x=n(2),k=n(20),j=n("loader"),E=n(13),S=n(5),A="1153.61ee9ba",T="NREUM.setToken",_={},N=!!navigator.sendBeacon;n(10);var q=j.ieVersion>9||0===j.ieVersion,I=n(15).addMetric;e.exports={sendRUM:m(r),sendFinal:o,pingErrors:c,sendX:s,send:u,on:d,xhrUsable:q}},{}],10:[function(n,e,t){var r=n("loader"),o=document.createElement("div");o.innerHTML="<!--[if lte IE 6]><div></div><![endif]--><!--[if lte IE 7]><div></div><![endif]--><!--[if lte IE 8]><div></div><![endif]--><!--[if lte IE 9]><div></div><![endif]-->";var i=o.getElementsByTagName("div").length;4===i?r.ieVersion=6:3===i?r.ieVersion=7:2===i?r.ieVersion=8:1===i?r.ieVersion=9:r.ieVersion=0,e.exports=r.ieVersion},{}],11:[function(n,e,t){function r(n){u.sendFinal(d,!1),i.navCookie&&(document.cookie="NREUM=s="+Number(new Date)+"&r="+o(document.location.href)+"&p="+o(document.referrer)+"; path=/")}var o=n(17),i=n(19),a=n(20),s=n(24),u=n(9),c=n(16),f=n(8),d=n("loader"),l=n(6);n(3),n(23);var p="undefined"==typeof window.NREUM.autorun||window.NREUM.autorun;window.NREUM.setToken=f,6===n(10)?d.maxBytes=2e3:d.maxBytes=3e4,d.releaseIds={},s(r),c("mark",a.mark,"api"),a.mark("done"),l("api"),p&&u.sendRUM(d)},{}],12:[function(n,e,t){e.exports=function(n,e){setTimeout(function t(){try{n()}finally{setTimeout(t,e)}},e)}},{}],13:[function(n,e,t){function r(){return""+location}e.exports={getLocation:r}},{}],14:[function(n,e,t){function r(n,e){var t=n["navigation"+a];return e.of=t,i(t,t,e,"n"),i(n[u+a],t,e,"u"),i(n[c+a],t,e,"r"),i(n[u+s],t,e,"ue"),i(n[c+s],t,e,"re"),i(n["fetch"+a],t,e,"f"),i(n[f+a],t,e,"dn"),i(n[f+s],t,e,"dne"),i(n["c"+d+a],t,e,"c"),i(n["secureC"+d+"ion"+a],t,e,"s"),i(n["c"+d+s],t,e,"ce"),i(n[l+a],t,e,"rq"),i(n[p+a],t,e,"rp"),i(n[p+s],t,e,"rpe"),i(n.domLoading,t,e,"dl"),i(n.domInteractive,t,e,"di"),i(n[v+a],t,e,"ds"),i(n[v+s],t,e,"de"),i(n.domComplete,t,e,"dc"),i(n[m+a],t,e,"l"),i(n[m+s],t,e,"le"),e}function o(n,e){return i(n.type,0,e,"ty"),i(n.redirectCount,0,e,"rc"),e}function i(n,e,t,r){var o;"number"==typeof n&&n>0&&(o=Math.round(n-e),t[r]=o),h.push(o)}var a="Start",s="End",u="unloadEvent",c="redirect",f="domainLookup",d="onnect",l="request",p="response",m="loadEvent",v="domContentLoadedEvent",h=[];e.exports={addPT:r,addPN:o,nt:h}},{}],15:[function(n,e,t){function r(n,e){o[n]=e}var o={};e.exports={addMetric:r,metrics:o}},{}],16:[function(n,e,t){function r(n,e,t,r){o(r||i,n,e,t)}function o(n,e,t,r){r||(r="feature"),n||(n=i);var o=a[r]=a[r]||{},s=o[e]=o[e]||[];s.push([n,t])}var i=n("handle").ee;e.exports=r,r.on=o;var a=r.handlers={}},{}],17:[function(n,e,t){function r(n){var e,t=0;for(e=0;e<n.length;e++)t+=(e+1)*n.charCodeAt(e);return Math.abs(t)}e.exports=r},{}],18:[function(n,e,t){function r(n){var e,t=!1;return function(){return t?e:(t=!0,e=n.apply(this,o(arguments)))}}var o=n(36);e.exports=r},{}],19:[function(n,e,t){function r(){var n=o()||i();n&&(s.mark("starttime",n),u.offset=n)}function o(){if(!(c&&c<9)){var t=n(37);return t.exists?(e.exports.navCookie=!1,window.performance.timing.navigationStart):void 0}}function i(){for(var n=document.cookie.split(" "),e=0;e<n.length;e++)if(0===n[e].indexOf("NREUM=")){for(var t,r,o,i,s=n[e].substring("NREUM=".length).split("&"),u=0;u<s.length;u++)0===s[u].indexOf("s=")?o=s[u].substring(2):0===s[u].indexOf("p=")?(r=s[u].substring(2),";"===r.charAt(r.length-1)&&(r=r.substr(0,r.length-1))):0===s[u].indexOf("r=")&&(t=s[u].substring(2),";"===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)));if(t){var c=a(document.referrer);i=c==t,i||(i=a(document.location.href)==t&&c==r)}if(i&&o){var f=(new Date).getTime();if(f-o>6e4)return;return o}}}var a=n(17),s=n(20),u=n("loader"),c=n(34);e.exports={navCookie:!0},r()},{}],20:[function(n,e,t){function r(n,e){"undefined"==typeof e&&(e=a.now()+a.offset),s[n]=e}function o(n,e,t){var r=s[e],o=s[t];"undefined"!=typeof r&&"undefined"!=typeof o&&i.store("measures",n,{value:o-r})}var i=n(2),a=n("loader"),s={};e.exports={mark:r,measure:o}},{}],21:[function(n,e,t){function r(n){try{return i("",{"":n})}catch(e){try{s.emit("internal-error",[e])}catch(t){}}}function o(n){return u.lastIndex=0,u.test(n)?'"'+n.replace(u,function(n){var e=c[n];return"string"==typeof e?e:"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function i(n,e){var t=e[n];switch(typeof t){case"string":return o(t);case"number":return isFinite(t)?String(t):"null";case"boolean":return String(t);case"object":if(!t)return"null";var r=[];if(t instanceof window.Array||"[object Array]"===Object.prototype.toString.apply(t)){for(var s=t.length,u=0;u<s;u+=1)r[u]=i(u,t)||"null";return 0===r.length?"[]":"["+r.join(",")+"]"}return a(t,function(n){var e=i(n,t);e&&r.push(o(n)+":"+e)}),0===r.length?"{}":"{"+r.join(",")+"}"}}var a=n(35),s=n("ee"),u=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};e.exports=r},{}],22:[function(n,e,t){var r=e.exports={};r.jsonp=function o(n,o){var e=document.createElement("script");e.type="text/javascript",e.src=n+"&jsonp="+o;var t=document.getElementsByTagName("script")[0];return t.parentNode.insertBefore(e,t),e},r.xhr=function(n,e,t){var r=new XMLHttpRequest;r.open("POST",n,!t);try{"withCredentials"in r&&(r.withCredentials=!0)}catch(o){}return r.setRequestHeader("content-type","text/plain"),r.send(e),r},r.xhrSync=function(n,e){return r.xhr(n,e,!0)},r.img=function(n){var e=new Image;return e.src=n,e},r.beacon=function(n,e){return navigator.sendBeacon(n,e)}},{}],23:[function(n,e,t){function r(n,e,t){g.push({name:n,value:e,attrs:t})}function o(n){if(0!==g.length){var e=a(g);l.send("events",d,{body:{e:e}},{unload:!!n}),g=[]}}function i(){o(!0)}function a(n){var e=c(),t="bel.6;";return n.forEach(function(r,o){t+="e,",t+=e(r.name)+",",t+=s(r.value,u,!1)+",";var i=f(r.attrs,e);i&&i.length>0&&(t+=i.length+";"+i.join(";")),o+1<n.length&&(t+=";")}),t}var s=n(4).nullable,u=n(4).numeric,c=n(4).getAddStringContext,f=n(4).addCustomAttributes;if(e.exports={getPayload:a},!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var d=n("loader"),l=n(9),p=n(16),m=n(12),v=n(24),h=30,g=[];p("timing",r),v(i),setTimeout(function(){o(),m(o,1e3*h)},1e4)}},{}],24:[function(n,e,t){function r(n){var e=i(n);!o||navigator.sendBeacon?a("pagehide",e):a("beforeunload",e),a("unload",e)}var o=n(34),i=n(18),a=n(1);e.exports=r},{}],25:[function(n,e,t){function r(n){if(n){var e=n.match(o);return e?e[1]:void 0}}var o=/([a-z0-9]+)$/i;e.exports=r},{}],26:[function(n,e,t){function r(n){var e=null;try{if(e=d(n))return e}catch(t){if(h)throw t}try{if(e=o(n))return e}catch(t){if(h)throw t}try{if(e=l(n))return e}catch(t){if(h)throw t}try{if(e=s(n))return e}catch(t){if(h)throw t}try{if(e=u(n))return e}catch(t){if(h)throw t}return{mode:"failed",stackString:"",frames:[]}}function o(n){if(!n.stack)return null;var e=p(n.stack.split("\n"),i,{frames:[],stackLines:[],wrapperSeen:!1});return e.frames.length?{mode:"stack",name:n.name||c(n),message:n.message,stackString:m(e.stackLines),frames:e.frames}:null}function i(n,e){var t=a(e);return t?(f(t.func)?n.wrapperSeen=!0:n.stackLines.push(e),n.wrapperSeen||n.frames.push(t),n):(n.stackLines.push(e),n)}function a(n){var e=n.match(b);return e||(e=n.match(y)),e?{url:e[2],func:"Anonymous function"!==e[1]&&"global code"!==e[1]&&e[1]||null,line:+e[3],column:e[4]?+e[4]:null}:n.match(w)||n.match(x)||"anonymous"===n?{func:"evaluated code"}:void 0}function s(n){if(!("line"in n))return null;var e=n.name||c(n);if(!n.sourceURL)return{mode:"sourceline",name:e,message:n.message,stackString:c(n)+": "+n.message+"\n    in evaluated code",frames:[{func:"evaluated code"}]};var t=e+": "+n.message+"\n    at "+n.sourceURL;return n.line&&(t+=":"+n.line,n.column&&(t+=":"+n.column)),{mode:"sourceline",name:e,message:n.message,stackString:t,frames:[{url:n.sourceURL,line:n.line,column:n.column}]}}function u(n){var e=n.name||c(n);return e?{mode:"nameonly",name:e,message:n.message,stackString:e+": "+n.message,frames:[]}:null}function c(n){var e=g.exec(String(n.constructor));return e&&e.length>1?e[1]:"unknown"}function f(n){return n&&n.indexOf("nrWrapper")>=0}function d(n){if(!n.stacktrace)return null;for(var e,t=n.stacktrace,r=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\(.*\) in (.*):\s*$/i,o=t.split("\n"),i=[],a=[],s=!1,u=0,d=o.length;u<d;u+=2)if(e=r.exec(o[u])){var l={line:+e[1],column:+e[2],func:e[3]||e[4],url:e[5]};f(l.func)?s=!0:a.push(o[u]),s||i.push(l)}else a.push(o[u]);return i.length?{mode:"stacktrace",name:n.name||c(n),message:n.message,stackString:m(a),frames:i}:null}function l(n){var e=n.message.split("\n");if(e.length<4)return null;var t,r,o,i=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,a=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,s=/^\s*Line (\d+) of function script\s*$/i,u=[],d=[],l=document.getElementsByTagName("script"),p=[],h=!1;for(r in l)v.call(l,r)&&!l[r].src&&p.push(l[r]);for(r=2,o=e.length;r<o;r+=2){var g=null;if(t=i.exec(e[r]))g={url:t[2],func:t[3],line:+t[1]};else if(t=a.exec(e[r]))g={url:t[3],func:t[4]};else if(t=s.exec(e[r])){var y=window.location.href.replace(/#.*$/,""),b=t[1];g={url:y,line:b,func:""}}g&&(f(g.func)?h=!0:d.push(e[r]),h||u.push(g))}return u.length?{mode:"multiline",name:n.name||c(n),message:e[0],stackString:m(d),frames:u}:null}var p=n(38),m=n(27),v=Object.prototype.hasOwnProperty,h=!1,g=/function (.+?)\s*\(/,y=/^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i,b=/^\s*(?:(\S*|global code)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i,w=/^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i,x=/^\s*at Function code \(Function code:\d+:\d+\)\s*/i;e.exports=r},{}],27:[function(n,e,t){var r=/^\n+|\n+$/g;e.exports=function(n){var e;if(n.length>100){var t=n.length-100;e=n.slice(0,50).join("\n"),e+="\n< ...truncated "+t+" lines... >\n",e+=n.slice(-50).join("\n")}else e=n.join("\n");return e.replace(r,"")}},{}],28:[function(n,e,t){function r(n){return l(n.exceptionClass)^n.stackHash}function o(n,e){if("string"!=typeof n)return"";var t=f(n);return t===e?"<inline>":t}function i(n,e){for(var t="",r=0;r<n.frames.length;r++){var o=n.frames[r],i=c(o.func);t&&(t+="\n"),i&&(t+=i+"@"),"string"==typeof o.url&&(t+=o.url),o.line&&(t+=":"+o.line)}return t}function a(n){for(var e=f(p.origin),t=0;t<n.frames.length;t++){var r=n.frames[t],i=r.url,a=o(i,e);a&&a!==r.url&&(r.url=a,n.stackString=n.stackString.split(i).join(a))}return n}function s(n,e,t,o){function s(n,e){k[n]=e&&"object"==typeof e?w(e):e}if(e=e||p.now(),t||!p.onerror||!p.onerror(n)){var c=a(d(n)),f=i(c),m={stackHash:l(f),exceptionClass:c.name,request_uri:window.location.pathname};c.message&&(m.message=""+c.message),v[m.stackHash]?m.browser_stack_hash=l(c.stackString):(v[m.stackHash]=!0,m.stack_trace=c.stackString),m.releaseIds=w(p.releaseIds);var g=r(m);h[g]||(m.pageview=1,h[g]=!0);var y=t?"ierr":"err",b={time:e};if(x("errorAgg",[y,g,m,b]),null!=m._interactionId)E[m._interactionId]=E[m._interactionId]||[],E[m._interactionId].push([y,g,m,b,S,o]);else{var k={},S=p.info.jsAttributes;j(S,s),o&&j(o,s);var A=l(w(k)),T=g+":"+A;u.store(y,T,m,b,k)}}}var u=n(2),c=n(25),f=n(5),d=n(26),l=n(29),p=n("loader"),m=n("ee"),v={},h={},g=n(16),y=n(9),b=n(12),w=n(21),x=n("handle"),k=n("ee"),j=n(35),E={};if(n(19),p.features.err){var S=!1,A=60;y.on("jserrors",function(){var n=u.take(["err","ierr"]),e={body:n,qs:{}},t=w(p.releaseIds);return"{}"!==t&&(e.qs.ri=t),n&&n.err&&n.err.length&&!S&&(e.qs.pve="1",S=!0),e}),y.pingErrors(p),b(function(){var n=y.sendX("jserrors",p);n||y.pingErrors(p)},1e3*A),m.on("feat-err",function(){g("err",s),g("ierr",s)}),k.on("interactionSaved",function(n){E[n.id]&&(E[n.id].forEach(function(e){function t(n,e){r[n]=e&&"object"==typeof e?w(e):e}var r={},o=e[4],i=e[5];j(o,t),j(n.root.attrs.custom,t),j(i,t);var a=e[2];a.browserInteractionId=n.root.attrs.id,delete a._interactionId,a._interactionNodeId&&(a.parentNodeId=a._interactionNodeId.toString(),delete a._interactionNodeId);var s=e[1]+n.root.attrs.id,c=l(w(r)),f=s+":"+c;u.store(e[0],f,a,e[3],r)}),delete E[n.id])}),k.on("interactionDiscarded",function(n){E[n.id]&&(E[n.id].forEach(function(e){function t(n,e){r[n]=e&&"object"==typeof e?w(e):e}var r={},o=e[4],i=e[5];j(o,t),j(n.root.attrs.custom,t),j(i,t);var a=e[2];delete a._interactionId,delete a._interactionNodeId;var s=e[1],c=l(w(r)),f=s+":"+c;u.store(e[0],f,e[2],e[3],r)}),delete E[n.id])})}},{}],29:[function(n,e,t){function r(n){var e,t=0;if(!n||!n.length)return t;for(var r=0;r<n.length;r++)e=n.charCodeAt(r),t=(t<<5)-t+e,t=0|t;return t}e.exports=r},{}],30:[function(n,e,t){function r(n,e,t){function r(n,e){f[n]=e&&"object"==typeof e?c(e):e}if(!(g.length>=h)){var o,a,f={};"undefined"!=typeof window&&window.document&&window.document.documentElement&&(o=window.document.documentElement.clientWidth,a=window.document.documentElement.clientHeight);var d={timestamp:n+s.offset,timeSinceLoad:n/1e3,browserWidth:o,browserHeight:a,referrerUrl:i,currentUrl:l(""+location),pageUrl:l(s.origin),eventType:"PageAction"};u(d,r),u(y,r),t&&"object"==typeof t&&u(t,r),f.actionName=e||"",g.push(f)}}function o(n,e,t){y[e]=t}var i,a=n("ee"),s=n("loader"),u=n(35),c=n(21),f=n(16),d=n(9),l=n(5),p=n(12),m=120,v=30,h=m*v/60,g=[],y=s.info.jsAttributes={};document.referrer&&(i=l(document.referrer)),f("api-setCustomAttribute",o,"api"),a.on("feat-ins",function(){f("api-addPageAction",r),d.on("ins",function(){var n={qs:{ua:s.info.userAttributes,at:s.info.atts},body:{ins:g}};return g=[],n}),p(function(){d.sendX("ins",s)},1e3*v),d.sendX("ins",s)})},{}],31:[function(n,e,t){function r(n){var e,t,r,o=Date.now();for(e in n)t=n[e],"number"==typeof t&&t>0&&t<o&&(r=n[e]-w.offset,l({n:e,s:r,e:r,o:"document",t:"timing"}))}function o(n,e,t,r){var o="timer";"requestAnimationFrame"===r&&(o=r);var i={n:r,s:e,e:t,o:"window",t:o};l(i)}function i(n,e,t,r){if(n.type in q)return!1;var o={n:a(n.type),s:t,e:r,t:"event"};try{o.o=s(n.target,e)}catch(i){o.o=s(null,e)}l(o)}function a(n){var e=n;return j(R,function(t,r){n in r&&(e=t)}),e}function s(n,e){var t="unknown";if(n&&n instanceof XMLHttpRequest){var r=M.context(n).params;t=r.status+" "+r.method+": "+r.host+r.pathname}else n&&"string"==typeof n.tagName&&(t=n.tagName.toLowerCase(),n.id&&(t+="#"+n.id),n.className&&(t+="."+A(n.classList).join(".")));return"unknown"===t&&(e===document?t="document":e===window?t="window":e instanceof FileReader&&(t="FileReader")),t}function u(n,e,t){var r={n:"history.pushState",s:t,e:t,o:n,t:e};l(r)}function c(n){n.forEach(function(n){var e=T(n.name),t={n:n.initiatorType,s:0|n.fetchStart,e:0|n.responseEnd,o:e.protocol+"://"+e.hostname+":"+e.port+e.pathname,t:n.entryType};t.s<L||(L=t.s,l(t))})}function f(n,e,t,r){if("err"===n){var o={n:"error",s:r.time,e:r.time,o:t.message,t:t.stackHash};l(o)}}function d(n,e,t,r){if("xhr"===n){var o={n:"Ajax",s:r.time,e:r.time+r.duration,o:t.status+" "+t.method+": "+t.host+t.pathname,t:"ajax"};l(o)}}function l(n){var e=C[n.n];e||(e=C[n.n]=[]),e.push(n)}function p(n){var e=!0;return function(){return e||N?(e=!1,n()):{}}}function m(){c(window.performance.getEntriesByType("resource"));var n=E(j(C,function(n,e){return n in I?E(j(E(e.sort(v),h(n),{}),g),y,[]):e}),y,[]);if(0===n.length)return{};C={};var e={qs:{st:""+w.offset,ptid:N},body:{res:n}};if(!N){e.qs.ua=w.info.userAttributes,e.qs.at=w.info.atts;var t=S(w.info.jsAttributes);e.qs.ja="{}"===t?null:t}return e}function v(n,e){return n.s-e.s}function h(n){var e=I[n][0],t=I[n][1],r={};return function(o,i){var a=o[i.o];a||(a=o[i.o]=[]);var s=r[i.o];return"scrolling"!==n||b(i)?s&&i.s-s.s<t&&s.e>i.s-e?s.e=i.e:(r[i.o]=i,a.push(i)):(r[i.o]=null,i.n="scroll",a.push(i)),o}}function g(n,e){return e}function y(n,e){return n.concat(e)}function b(n){var e=4;return!!(n&&"number"==typeof n.e&&"number"==typeof n.s&&n.e-n.s<e)}var w=n("loader"),x=n(16),k=n(9),j=n(35),E=n(38),S=n(21),A=n(36),T=n(33),_=n(12);if(k.xhrUsable&&w.xhrWrappable){var N="",q={mouseup:!0,mousedown:!0},I={typing:[1e3,2e3],scrolling:[100,1e3],mousing:[1e3,2e3],touching:[1e3,2e3]},R={typing:{keydown:!0,keyup:!0,keypress:!0},mousing:{mousemove:!0,mouseenter:!0,mouseleave:!0,mouseover:!0,mouseout:!0},scrolling:{scroll:!0},touching:{touchstart:!0,touchmove:!0,touchend:!0,touchcancel:!0,touchenter:!0,touchleave:!0}},C={},M=n("ee");if(e.exports={_takeSTNs:m},n(19),w.features.stn){M.on("feat-stn",function(){r(window.performance.timing),k.on("resources",p(m));var n=k.sendX("resources",w,{needResponse:!0});n.addEventListener("load",function(){N=this.responseText},!1),x("bst",i),x("bstTimer",o),x("bstResource",c),x("bstHist",u),x("bstXhrAgg",d),x("bstApi",l),x("errorAgg",f),_(function(){var n=0;return w.now()>9e5?void(C={}):(j(C,function(e,t){t&&t.length&&(n+=t.length)}),n>30&&k.sendX("resources",w),void(n>1e3&&(C={})))},1e4)});var L=0}}},{}],32:[function(n,e,t){function r(n,e,t){e.time=t;var r,i="xhr";r=s(n.cat?[n.status,n.cat]:[n.status,n.host,n.pathname]),f("bstXhrAgg",[i,r,n,e]),o.store(i,r,n,e)}var o=n(2),i=n(16),a=n(9),s=n(21),u=n("loader"),c=n("ee"),f=n("handle");u.features.xhr&&(a.on("jserrors",function(){return{body:o.take(["xhr"])}}),c.on("feat-err",function(){i("xhr",r)}),e.exports=r)},{}],33:[function(n,e,t){e.exports=function(n){var e=document.createElement("a"),t=window.location,r={};e.href=n,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||t.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===t.protocol,a=e.hostname===document.domain&&e.port===t.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],34:[function(n,e,t){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],35:[function(n,e,t){function r(n,e){var t=[],r="",i=0;for(r in n)o.call(n,r)&&(t[i]=e(r,n[r]),i+=1);return t}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],36:[function(n,e,t){function r(n,e,t){e||(e=0),"undefined"==typeof t&&(t=n?n.length:0);for(var r=-1,o=t-e||0,i=Array(o<0?0:o);++r<o;)i[r]=n[e+r];return i}e.exports=r},{}],37:[function(n,e,t){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],38:[function(n,e,t){function r(n,e,t){var r=0;for("undefined"==typeof t&&(t=n[0],r=1),r;r<n.length;r++)t=e(t,n[r]);return t}e.exports=r},{}]},{},[28,32,31,30,11]);="https://www.googletagmanager.com/ns.html?id=GTM-WQWG44D" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>



<script>window._taboola=window._taboola||[],_taboola.push({user_type:'guest', paywall:'false'}),_taboola.push({article:'auto'}),window.thirdparty.push({family:"advertising",name:"taboola",fn:function(){ !function(e,t,n,o){document.getElementById(o)||(e.async=1,e.src="https://cdn.taboola.com/libtrc/ouest-france-ouest-france/loader.js",e.id=o,t.parentNode.insertBefore(e,t))}(document.createElement("script"),document.getElementsByTagName("script")[0],0,"tb_loader_script"),window.performance&&"function"==typeof window.performance.mark&&window.performance.mark("tbl_ic") }});</script>

<!-- VIEWS -->
<input id="toggle-algolia" class="su-hidden" type="checkbox">
<input id="toggle-autocomplete-communes" class="su-hidden" type="checkbox">
<div class="bp-algolia sipaui">
    <!-- Moteur de recherche-->
    <div id="bpAlgolia_searchHeader_formContainer" class="searchHeader">
        <div class="searchHeader__container">
            <button id="bpAlgolia_search_backButton" class="searchHeader__back searchBackButton" data-trk-cta-algolia="back">
                <i class="su-icon">précédent</i>
                <span class=" searchBackButton__label"></span>
            </button>
            <div id="bpAlgolia_searchBox" class="searchHeader__algoliaSearchFormContainer"></div>
        </div>
    </div>
    
    <!-- Voile sous les résultats de recherche -->
    <div id="bpAlgolia_searchHeader_veil" class="su-veil su-veil-in su-hidden-sm su-hidden-xs"></div>
    
    <!-- Contenu de la recherche -->
    <div id="bpAlgolia_searchHeader_contentContainer" class="searchHeaderContent su-row"></div>
</div>
<!-- APP -->
<script type="text/javascript" defer>
        window.bp_algolia_articles = "OWZjZTFkZGVjNzZlMjc2OWZjN2NjNTBiYmE2MzE4MThiYmViZDk1OTRmOWMzY2NmYmU1ZjMwY2E5YTI5ZGNkYyZ2YWxpZFVudGlsPTE3MDU2ODA2OTMmcmVzdHJpY3RJbmRpY2VzPWFydGljbGVzJTJDYXJ0aWNsZXNfYnlkYXRlX2FzYyUyQ2FydGljbGVzX2J5ZGF0ZV9kZXNjJTJDdGFncy1zdWdnZXN0aW9ucyUyQ3Nob3BwaW5nX3F1ZXJ5X3N1Z2dlc3Rpb25zJTJDYXJ0aWNsZXNfYWxnb2xpYV9xdWVyeV9zdWdnZXN0aW9ucyUyQ2VsZWN0aW9ucyUyQ3ByZXNpZGVudGllbGxlc19yZXN1bHRhdHMlMkNwcmVzaWRlbnRpZWxsZXNfY2FtcGFnbmUlMkNsZWdpc2xhdGl2ZXNfcmVzdWx0YXRzJTJDbGVnaXNsYXRpdmVzX2NhbXBhZ25lJTJDcGF0cm9ueW1lJTJDcHJvZ3JhbW1lX3R2JTJDdmlkZW9zJTJDcG9kY2FzdHMlMkNjaW5lbWElMkNjb3VwZV9kdV9tb25kZSUyQ3JvdXRlX2R1X3JodW0=";
        window.bp_algolia_suggestion = "OWZjZTFkZGVjNzZlMjc2OWZjN2NjNTBiYmE2MzE4MThiYmViZDk1OTRmOWMzY2NmYmU1ZjMwY2E5YTI5ZGNkYyZ2YWxpZFVudGlsPTE3MDU2ODA2OTMmcmVzdHJpY3RJbmRpY2VzPWFydGljbGVzJTJDYXJ0aWNsZXNfYnlkYXRlX2FzYyUyQ2FydGljbGVzX2J5ZGF0ZV9kZXNjJTJDdGFncy1zdWdnZXN0aW9ucyUyQ3Nob3BwaW5nX3F1ZXJ5X3N1Z2dlc3Rpb25zJTJDYXJ0aWNsZXNfYWxnb2xpYV9xdWVyeV9zdWdnZXN0aW9ucyUyQ2VsZWN0aW9ucyUyQ3ByZXNpZGVudGllbGxlc19yZXN1bHRhdHMlMkNwcmVzaWRlbnRpZWxsZXNfY2FtcGFnbmUlMkNsZWdpc2xhdGl2ZXNfcmVzdWx0YXRzJTJDbGVnaXNsYXRpdmVzX2NhbXBhZ25lJTJDcGF0cm9ueW1lJTJDcHJvZ3JhbW1lX3R2JTJDdmlkZW9zJTJDcG9kY2FzdHMlMkNjaW5lbWElMkNjb3VwZV9kdV9tb25kZSUyQ3JvdXRlX2R1X3JodW0=";
        window.bp_algolia_videos = "YWIwYmE5OWY1ZjAzMTM3Y2IyMDViZmUwZTE4NzViZGQ0ZTZhMDhlZjJlNzRlN2Y1NDI4MzQ5N2NkMjYzMjc0OCZ2YWxpZFVudGlsPTE3MDU2ODA2OTMmcmVzdHJpY3RJbmRpY2VzPXZpZGVvcw==";
        window.bp_algolia_podcasts = "MDkwYjU1OGUyODI1ZjQ2Y2YwMzNlNGMxYjJiY2UxOGY1MDMzMDdlMWNkMTk4OWY5YjRmNmM2ODA2ZGYwYzIxZCZ2YWxpZFVudGlsPTE3MDU2ODA2OTMmcmVzdHJpY3RJbmRpY2VzPXBvZGNhc3Rz";
        window.bp_algolia_elections = "YWFlZTRkMTk2MmNkOTNjNTcxMDdhMDA1ZjViZGNjM2VmZTc3MzU4MmE3MWZiMDMzNTg0MDlmZmFiNjQ3M2Y2YyZ2YWxpZFVudGlsPTE3MDU2ODA2OTMmcmVzdHJpY3RJbmRpY2VzPWVsZWN0aW9ucw==";
        window.bp_algolia_subscribed = false;
        window.bp_algolia_show_query_sugg = false;
        window.bp_algolia_source = "of";
        window.bp_algolia_tag = "Entreprises";
        window.bp_algolia_istaglocal = false;
        window.bp_algolia_mode = "default";
        window.bp_algolia_evenement = "default";
        window.bp_algolia_placeholder = "Rechercher ville, cp, actualité, fait divers...";
</script>





<div id="veil-partage" class="su-veil" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-partage","klass":"su-veil-in","force":0}, {"sel":"#pop-in-partage","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-partage","klass":"su-pop-in-out","force":1}, {"sel":"#pop-in-error-partage","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-error-partage","klass":"su-pop-in-out","force":1}]'></div>

<div id="pop-in-error-partage" class="su-pop-in" role="dialog">
    <div id="pop-in-content-error-partage" class="su-content-area">
        <p class="err su-hidden">Malheureusement, nous n’avons pas pu envoyer cet article. Merci de réessayer ultérieurement.</p>
        <p class="err-email su-hidden">L'adresse email <span class="email-error">xxxx@xxxx.com</span> ne semble pas être correcte. Merci de vérifier votre saisie.</p>
        <p class="success su-hidden">Merci, l’article a bien été envoyé.</p>
    </div>
    <div class="su-buttons-area">
        <button class="su-button su-primary" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-partage","klass":"su-veil-in","force":0}, {"sel":"#pop-in-error-partage","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-error-partage","klass":"su-pop-in-out","force":1}]'>Fermer</a>
    </div>
</div>

<div id="pop-in-partage" class="su-pop-in" role="dialog">
    <div class="su-bloc-loader su-hidden">
        <div class="su-loader" role="alert">
            <span class="su-visually-hidden">Chargement en cours…</span>
        </div>
    </div>
    <div class="su-close-area">
        <button class="su-close" data-sutoggleclass='[{"sel":"body","klass":"su-no-scroll","force":0}, {"sel":"#veil-partage","klass":"su-veil-in","force":0}, {"sel":"#pop-in-partage","klass":"su-pop-in-in","force":0}, {"sel":"#pop-in-partage","klass":"su-pop-in-out","force":1}]'>
            <i class="su-icon">fermer</i>
        </button>
    </div>
    <p id="pop-in-partage-title" class="su-h2 su-margin-bottom-m">Vous souhaitez partager cet article&nbsp;:</p>
    <div id="pop-in-content-partage" class="su-content-area">
        
            <form action="#dev" data-form-offrir='{"source":"","id":"43d19726-b5fa-11ee-be97-0ca6f5a426b0","titre":"Pimkie envisage de fermer 36 magasins supplémentaires en 2024, 239 postes menacés","url":"https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0","photo":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width&#61;630&amp;height&#61;354&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;abd6bbfd844036d2d9c36e11d6ef4b729ea1252053078b1299237b2e136a8d3a","chapeau":"L’enseigne de prêt-à-porter féminin Pimkie, qui avait acté en 2023 la suppression de 63 magasins, envisage de fermer 36 boutiques supplémentaires en 2024, a indiqué jeudi 18 janvier 2024 la direction dans un communiqué. 239 postes en plus sont menacés.","marque":"OF","rpc":"/rpc/block-contracts/6672b0d4-65c4-421b-8449-ef34feb65d04","type":"partage","prenomAbonne":"","nomAbonne":"","emailAbonne":""}' id="form-partage">
                <label for="emails">Email du ou des destinataire(s) :</label>
                <div class="su-label-icon">
                    <label for="emails"><span class="su-icon">email</span></label>
                    <input placeholder="matthieu@exemple.fr, heloise@email.com" class="su-margin-bottom-xs" id="emails" name="emails" type="email" required multiple>
                </div>
                <p class="su-text-xsmall su-margin-bottom-m">Si vous souhaitez ajouter plusieurs destinataires, séparez les adresses email par des virgules.</p>
                <label for="message">Votre message<span class="su-label-complement"> (facultatif)</span></label>
                <textarea class="su-margin-bottom-m" id="message" name="message"></textarea>
                <p class="su-text-xsmall">Ouest-France n’utilisera pas les emails fournis pour d’autres communications sans le consentement du ou des destinataires.</p>
            </form>
        
    </div>
    <div class="su-buttons-area">
        
    <button form="form-partage" data-trk-bloc="Offrir un article" data-trk-form-button="Partager l'article" class="su-button su-subscription su-illustration-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.51001 21.02C2.44001 21.02 2.36001 21 2.27001 20.95C2.08001 20.85 1.97001 20.63 2.01001 20.41C2.98001 15.23 6.38001 9.33 13 8.08V3.5C13 3.3 13.12 3.12 13.3 3.04C13.48 2.96 13.69 3 13.84 3.13L21.84 10.63C21.94 10.72 22 10.86 22 11C22 11.14 21.94 11.27 21.84 11.37L13.84 18.87C13.69 19.01 13.48 19.04 13.3 18.96C13.12 18.88 13 18.7 13 18.5V14.03C10.61 14.32 7.35001 16.47 3.31001 20.43C2.90001 20.83 2.71001 21.01 2.51001 21.01V21.02ZM14 4.65V8.5C14 8.75 13.82 8.96 13.58 8.99C7.88001 9.88 4.66001 14.48 3.38001 18.97C5.54001 16.9 9.93001 13.02 13.5 12.99C13.62 12.94 13.76 13.04 13.86 13.13C13.95 13.22 14.01 13.35 14.01 13.49V17.34L20.78 10.99L14.01 4.64L14 4.65Z" fill="#333333"/>
</svg>

        <span>Partager l'article</span>
    </button>

    </div>
</div>


<script type="text/javascript">window.sessionStorage.setItem('ofreadlater', '[]');</script>
<div class="panneau-readlater">
    <input type="checkbox" id="panneau-readlater-toggle" name="panneau-readlater-toggle" class="panneau-readlater-toggle">
    <section class="articles-liste-readlater">
        <div class="header">
            <span class="icon-signet-solide"></span>
            <span class="su-h2 titre">À lire</span>
            <label for="panneau-readlater-toggle" class="su-close"><i class="su-icon">fermer</i></label>
        </div>
        <ul class="liste-articles"><li class="active">Vous devez vous connecter pour afficher vos articles sauvegardés</li></ul>
    </section>
    <label for="panneau-readlater-toggle" class="voile-label"><div class="voile"></div></label>
</div>


    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;2.31.0&amp;quot;}]" data-nosnippet id="header"  class="_b"><div class="voile su-hidden" data-sutoggleclass='[{"sel":"body","klass":"no-scroll readlater-ouvert panneau-nav-user-ouvert","force":0}, {"klass":"su-hidden","force":1}]'></div>

<div class="sous-voile-header">
    <input name="deroulant-label-header" type="radio" id="deroulant-label-null" class="su-hidden" />
</div>
<div class="sous-voile-header">
    <input name="deroulant-label-header" type="radio" id="deroulant-label-communes" class="su-hidden" />
    <label for="deroulant-label-null" class="voile-label" data-sutoggleclass='[{"sel":".bp-header .menu li:not(#deroulant-label-communes)","klass":"actif","force":0},{"sel":".bp-header .deroulant._b:not(#header__parentOf__communes)","klass":"su-hidden","force":1},{"sel":"#header__parentOf__communes","klass":"su-hidden"},{"sel":"#deroulant-label-communes","klass":"actif"}]'><div class="voile"></div></label>
</div>
<div class="sous-voile-header">
    <input name="deroulant-label-header" type="radio" id="deroulant-label-annonces" class="su-hidden" />
    <label for="deroulant-label-null" class="voile-label" data-sutoggleclass='[{"sel":".bp-header .menu li:not(#deroulant-label-annonces)","klass":"actif","force":0},{"sel":".bp-header .deroulant._b:not(#header__parentOf__annonces)","klass":"su-hidden","force":1},{"sel":"#header__parentOf__annonces","klass":"su-hidden"},{"sel":"#deroulant-label-annonces","klass":"actif"}]'><div class="voile"></div></label>
</div>

<header class="bp-header " data-ofscrollclass='{"y":84,"klass":"stuck","inverted": true}'>
    <div class="nav-top " data-ofscrollclass='{"y":84,"klass":"su-fixed","inverted": true}'>
        <div class="su-container">
            <div class="nav-recherche">

                    <div class="nav-burger hidden-fixed-mobile">
                        <label for="menu-burger-toggle" class="header-burger" aria-label="Afficher le menu" data-trk-top-mobile="Burger">
                            <span class="lines"></span>
                            <span class="libelle">MENU</span>
                        </label>
                    </div>


                        <div class="visibility-desktop visible-fixed-mobile">
                            <a class="header-back su-visible-xs su-visible-sm su-visible-md" href="/economie/entreprises/">
                                <i class="su-icon">précédent</i>
                            </a>
                        </div>
            </div>

            <div class="bloc-logo hidden-fixed-mobile visible-fixed-desktop">
                <span class="su-h1">
                    <a href="https://www.ouest-france.fr/" title="Retour à l'accueil Ouest-France">
                        <img class="solo" src="https://media.ouest-france.fr/v1/documents/d5a06162881f47abde8ca2f7b57b769e-of.svg" alt="Ouest-France">
                    </a>
                </span>
            </div>

            <div class="nav-user">
                <div class="picto-container hidden-fixed-desktop">
                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="header__parentOf__bloc_picto_1"  class="_b"><div class="btn-picto-burger ">
    <a href="https://programmetv.ouest-france.fr/" data-trk-picto-header='Petits écrans'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/f939ae78d37b9d9c1b0c4873ed7f8cec-tv.svg"}' alt="Petits écrans" />
        <span>Petits écrans</span>
    </a>
</div>
</div>
                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="header__parentOf__bloc_picto_2"  class="_b"><div class="btn-picto-burger ">
    <a href="https://jeux.ouest-france.fr/" data-trk-picto-header='Jeux'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/2fc672ba317496e015a9903ef4dcda92-jeux.svg"}' alt="Jeux" />
        <span>Jeux</span>
    </a>
</div>
</div>
                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="header__parentOf__bloc_picto_3"  class="_b"><div class="btn-picto-burger ">
    <a href="https://www.ouest-france.fr/newsletters/" data-trk-picto-header='Newsletters'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/4ef3ba77a4fc7125913bb6eabf68e5df-newsletter.svg"}' alt="Newsletters" />
        <span>Newsletters</span>
    </a>
</div>
</div>
                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="header__parentOf__bloc_picto_4"  class="_b"><div class="btn-picto-burger ">
    <a href="https://podcasts.ouest-france.fr/" data-trk-picto-header='Podcasts'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/77bdf418d0630941c6a64ce5b0980d30-casque-audio.svg"}' alt="Podcasts" />
        <span>Podcasts</span>
    </a>
</div>
</div>
                </div>

                            <label class="su-hidden-xs su-hidden-sm su-hidden-md visible-fixed-desktop loupe-mobile" for="toggle-algolia" data-trk-nav-bottom-sticky="loupe">
                                <span class="su-icon">chercher</span>
                            </label>

                    <div class="bloc-abonnement visible-fixed-mobile visible-fixed-desktop">
                        <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-cta-moteur-marques&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;ouestfrance platform moteurs marques&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.16.0&amp;quot;}]"  id="header__parentOf__abonnez_vous_sticky" class="_b">
                            <div id="placeholder-abonnez_vous_sticky"></div>
                        
	<a class="su-button su-subscription su-small btn-abonnez-vous"  href="https://abonnement.ouest-france.fr?rt=https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0&int_medium=lien&int_campaign=abonnement&int_content=bouton-jaune-menu&marquesource=OF&marquepref=&ida=" data-trk-nav-bottom-sticky="Abonnez-vous">Abonnez-vous</a>
</div>
                    </div>

                <div class="bloc-connect">

                            <div class="su-user ">
                                <a href="?login" class="su-button su-connection" rel="nofollow" data-trk-top-mobile='Se connecter' data-trkconnexion="Se connecter" title="Se connecter à Ouest-France">
                                    <span>Se connecter</span>
                                </a>
                                <label for="panneau-nav-user-toggle" class="su-button su-show-menu" data-trk-top-mobile='Mon compte'>
                                    <span>Mon espace</span>
                                </label>
                            </div>
                </div>
            </div>
        </div>
    </div>

        <input type="checkbox" id="panneau-nav-user-toggle" name="panneau-nav-user-toggle" class="panneau-nav-user-toggle" />
        <div class="panneau-nav-user">
            <div class="volet-content">
            <label for="panneau-nav-user-toggle" class="fermer">
                <i class="icon icon-fermer"></i>
            </label>

            <section>
                <header>
                    <i class="icon icon-utilisateur" data-trk-top-mobile='Mon compte'></i>
                    <p class="su-text-xsmall" style="color: #666"></p>
                </header>


                <p class="su-h3">Mon compte</p>
                <ul>
                    <li><div    id="header__parentOf__lien_4"  class="_b"></div><i class="icon icon-chevron-droite"></i></li>
                    <li><div    id="header__parentOf__lien_5"  class="_b"></div><i class="icon icon-chevron-droite"></i></li>
                    
                    <li><div    id="header__parentOf__lien_6"  class="_b"></div><i class="icon icon-chevron-droite"></i></li>
                </ul>

                <p class="su-h3">Mes services</p>
                <ul>
                    <li><div    id="header__parentOf__lien_2"  class="_b"></div><i class="icon icon-chevron-droite"></i></li>
                    
                    <li class="readlater item-readlater"><div    id="header__parentOf__lien_lpt"  class="_b"></div><label for="panneau-readlater-toggle" class="libelle">À lire</label><i class="icon icon-chevron-droite"></i></li>
                    <li><a class="sans-icone" href="https://www.ouest-france.fr/premium/mes-communes/?int_medium=lien&int_campaign=of-mes-communes&int_content=menu-user" data-trk-account-sidebar="Communes préférées">Communes préférées</a><i class="icon icon-chevron-droite"></i></li>
                    <li><a class="sans-icone" href="https://www.ouest-france.fr/premium/ma-bibliotheque/?int_medium=lien&int_campaign=of-bibliotheque&int_content=menu-user" data-trk-account-sidebar="Bibliothèque">Bibliothèque</a><i class="icon icon-chevron-droite"></i></li>
                </ul>

                <a class="su-button su-secondary su-fullwidth" href="/?logout" rel="nofollow" title="Se déconnecter" data-trk-nav-bottom-desktop='Se déconnecter'>Se déconnecter</a>
            </section>
            </div>
            <label for="panneau-nav-user-toggle" class="voile-label"><div class="voile"></div></label>
        </div>

        <div class="middle-menu su-container visibility-desktop">
            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;bp-parution-v2/last-parution-v1&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Parution - référentiel&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;0.0.630&amp;quot;}]"  class="_b gauche" id="header__parentOf__une_journal">
                <div id="placeholder-une_journal"></div>
            <div class="bp-parution content-abo-header su-hidden-xs su-hidden-sm su-hidden-md su-on-over" data-sutoggleclass='[{"klass":"open"}, {"sel": "body", "klass": "journal-du-jour-header-open"}]'>
    <div class="photo">
        <a 
        data-trkbloc-kiosque="Clic vignette | Jeudi 18 janvier 2024 | Journal Ouest-France - Rennes"
     data-ofcrtoken href="https://www.ouest-france.fr/premium/journal/journal-ouest-france/?int_medium=lien&amp;int_campaign=journal&amp;int_content=bouton-jaune-haut-burger&edition=rennes">
            <img alt="Image de la une" class="lazyload" data-oflazyload='{"src":"https://ofr-ofjn-production-api.twipecloud.net/Preview/512/512/9514859"}'>
        </a>
    </div>
    <div class="edition">
        <a data-test-title-link 
        data-trkbloc-kiosque="Clic titre | Jeudi 18 janvier 2024 | Journal Ouest-France - Rennes"
     data-ofcrtoken href="https://www.ouest-france.fr/premium/journal/journal-ouest-france/?int_medium=lien&amp;int_campaign=journal&amp;int_content=bouton-jaune-haut-burger&edition=rennes">
            <p class="titre">Jeudi<br>18 janvier 2024</p>
        </a>
        <a 
        data-trkbloc-kiosque="Je lis | Jeudi 18 janvier 2024 | Journal Ouest-France - Rennes"
     class="su-button su-subscription su-small sans-icone" data-ofcrtoken href="https://www.ouest-france.fr/premium/journal/journal-ouest-france/?int_medium=lien&amp;int_campaign=journal&amp;int_content=bouton-jaune-haut-burger&edition=rennes">Lire</a>
    </div>
</div>
</div>

            <div class="middle">
                <div class="logo-of">
                    <span class="su-h1">
                        <a href="https://www.ouest-france.fr/" title="Retour à l'accueil Ouest-France">
                            <img class="solo" src="https://media.ouest-france.fr/v1/documents/d5a06162881f47abde8ca2f7b57b769e-of.svg" alt="Ouest-France">
                        </a>
                    </span>
                </div>
                <div class="middle-bottom">
                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;multi-menu-header-pcm&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;multi-menu-header-pcm PROD&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;14.0.0&amp;quot;}]"  class="_b menu" id="header__parentOf__header_sp">
                        <div id="placeholder-header_sp"></div>
                    <ul>
    <li >
            <a href="https://www.ouest-france.fr/actualite-en-continu/" data-trk-nav-bottom-desktop="Actualité"  class="">Actualité</a>
    </li>
    <li >
            <a href="https://www.ouest-france.fr/premium/?int_medium=lien&int_campaign=of-premium&int_content=bouton-jaune-menu" data-trk-nav-bottom-desktop="Nos&amp;nbsp;parutions"  class="">Nos&nbsp;parutions</a>
    </li>
    <li >
            <a href="https://www.ouest-france.fr/regions/" data-trk-nav-bottom-desktop="Régions"  class="">Régions</a>
    </li>
    <li id="compo-deroulant-label-communes">
          <label data-trk-nav-bottom-desktop="Communes" data-sutoggleclass='[{"sel":".bp-header .menu li:not(#compo-deroulant-label-communes)","klass":"actif","force":0},{"sel":".bp-header .deroulant._b:not(#header__parentOf__communes)","klass":"su-hidden","force":1},{"sel":"#header__parentOf__communes","klass":"su-hidden"},{"parent":"li","klass":"actif"}]' for="deroulant-label-communes" title="Ouvrir le menu Communes" class="actif with-picto">Communes<span class="icon icon-chevron-bas"></span></label>
          <label data-trk-nav-bottom-desktop="Communes" data-sutoggleclass='[{"sel":".bp-header .menu li:not(#compo-deroulant-label-communes)","klass":"actif","force":0},{"sel":".bp-header .deroulant._b:not(#header__parentOf__communes)","klass":"su-hidden","force":1},{"sel":"#header__parentOf__communes","klass":"su-hidden"},{"parent":"li","klass":"actif"}]' for="deroulant-label-null" title="Ouvrir le menu Communes" class="inactif with-picto">Communes<span class="icon icon-chevron-bas"></span></label>
    </li>
    <li >
            <a href="https://www.ouest-france.fr/sport/" data-trk-nav-bottom-desktop="Sport"  class="">Sport</a>
    </li>
    <li class="su-hidden-lg" >
            <a href="https://www.ouest-france.fr/videos/" data-trk-nav-bottom-desktop="Vidéos"  class="">Vidéos</a>
    </li>
    <li class="su-hidden-lg" >
            <a href="https://programmetv.ouest-france.fr/" data-trk-nav-bottom-desktop="Programme&amp;nbsp;TV"  class="">Programme&nbsp;TV</a>
    </li>
    <li class="su-hidden-lg" id="compo-deroulant-label-annonces">
          <label data-trk-nav-bottom-desktop="Annonces" data-sutoggleclass='[{"sel":".bp-header .menu li:not(#compo-deroulant-label-annonces)","klass":"actif","force":0},{"sel":".bp-header .deroulant._b:not(#header__parentOf__annonces)","klass":"su-hidden","force":1},{"sel":"#header__parentOf__annonces","klass":"su-hidden"},{"parent":"li","klass":"actif"}]' for="deroulant-label-annonces" title="Ouvrir le menu Annonces" class="actif with-picto">Annonces<span class="icon icon-chevron-bas"></span></label>
          <label data-trk-nav-bottom-desktop="Annonces" data-sutoggleclass='[{"sel":".bp-header .menu li:not(#compo-deroulant-label-annonces)","klass":"actif","force":0},{"sel":".bp-header .deroulant._b:not(#header__parentOf__annonces)","klass":"su-hidden","force":1},{"sel":"#header__parentOf__annonces","klass":"su-hidden"},{"parent":"li","klass":"actif"}]' for="deroulant-label-null" title="Ouvrir le menu Annonces" class="inactif with-picto">Annonces<span class="icon icon-chevron-bas"></span></label>
    </li>
  <li class="trois-pts"><label for="menu-burger-toggle" data-trk-nav-bottom-desktop="..." title="Ouvrir le menu" data-rpc-header-surcharge='{"matched_tag": null}'><div class="disc"></div></label></li>
</ul></div>
                            <label class="loupe-mobile" for="toggle-algolia" data-trk-nav-bottom-desktop="loupe">
                                <span class="su-icon">chercher</span>
                            </label>
                </div>
            </div>

            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-cta-moteur-marques&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;ouestfrance platform moteurs marques&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.16.0&amp;quot;}]"  class="_b droite" id="header__parentOf__abonnez_vous_desktop">
                <div id="placeholder-abonnez_vous_desktop"></div>
            
	<a class="su-button su-subscription su-small btn-abonnez-vous"  href="https://abonnement.ouest-france.fr?rt=https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0&int_medium=lien&int_campaign=abonnement&int_content=bouton-jaune-menu&marquesource=OF&marquepref=&ida=" data-trk-nav-bottom-desktop="Abonnez-vous">Abonnez-vous</a>
</div>
        </div>

    <div    id="header__parentOf__bandeau_sticky" class="_b visibility-desktop" ></div>
    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;multi-menu-header-mes-communes-pcm&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;multi-menu-header-mes-communes-pcm PROD&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;12.0.0&amp;quot;}]"  id="header__parentOf__communes" class="_b visibility-desktop su-hidden deroulant" ><div class="su-container" data-oflistecommunesinsee='[]'>
    <button data-trk-btnmenucommune="Rechercher ma commune" class="su-button su-primary su-small su-margin-bottom-m"><label for="toggle-autocomplete-communes" style="color:#fff!important">Rechercher ma commune</label></button>
        <ul class="su-tags su-margin-bottom-s liste-tags su-contrast">
            <li class="first">
                        <a href="https://www.ouest-france.fr/bretagne/" title="Bretagne" data-trk-nav-bottom-desktop="Communes | Bretagne">Bretagne</a>
            </li>
                <li data-ofclassinsee="35238"><a href="https://www.ouest-france.fr/bretagne/rennes-35000/" title="Rennes" data-trk-nav-bottom-desktop="Communes | Rennes">Rennes</a></li>
                <li data-ofclassinsee="35288"><a href="https://www.ouest-france.fr/bretagne/saint-malo-35400/" title="Saint-Malo" data-trk-nav-bottom-desktop="Communes | Saint-Malo">Saint-Malo</a></li>
                <li data-ofclassinsee="56260"><a href="https://www.ouest-france.fr/bretagne/vannes-56000/" title="Vannes" data-trk-nav-bottom-desktop="Communes | Vannes">Vannes</a></li>
                <li data-ofclassinsee="56121"><a href="https://www.ouest-france.fr/bretagne/lorient-56100/" title="Lorient" data-trk-nav-bottom-desktop="Communes | Lorient">Lorient</a></li>
                <li data-ofclassinsee="29019"><a href="https://www.ouest-france.fr/bretagne/brest-29200/" title="Brest" data-trk-nav-bottom-desktop="Communes | Brest">Brest</a></li>
                <li data-ofclassinsee="29232"><a href="https://www.ouest-france.fr/bretagne/quimper-29000/" title="Quimper" data-trk-nav-bottom-desktop="Communes | Quimper">Quimper</a></li>
                <li data-ofclassinsee="22278"><a href="https://www.ouest-france.fr/bretagne/saint-brieuc-22000/" title="Saint-Brieuc" data-trk-nav-bottom-desktop="Communes | Saint-Brieuc">Saint-Brieuc</a></li>
        </ul>
        <ul class="su-tags su-margin-bottom-s liste-tags su-contrast">
            <li class="first">
                        <a href="https://www.ouest-france.fr/normandie/" title="Normandie" data-trk-nav-bottom-desktop="Communes | Normandie">Normandie</a>
            </li>
                <li data-ofclassinsee="14118"><a href="https://www.ouest-france.fr/normandie/caen-14000/" title="Caen" data-trk-nav-bottom-desktop="Communes | Caen">Caen</a></li>
                <li data-ofclassinsee="14047"><a href="https://www.ouest-france.fr/normandie/bayeux-14400/" title="Bayeux" data-trk-nav-bottom-desktop="Communes | Bayeux">Bayeux</a></li>
                <li data-ofclassinsee="50502"><a href="https://www.ouest-france.fr/normandie/saint-lo-50000/" title="Saint-Lô" data-trk-nav-bottom-desktop="Communes | Saint-Lô">Saint-Lô</a></li>
                <li data-ofclassinsee="50218"><a href="https://www.ouest-france.fr/normandie/granville-50400/" title="Granville" data-trk-nav-bottom-desktop="Communes | Granville">Granville</a></li>
                <li data-ofclassinsee="61001"><a href="https://www.ouest-france.fr/normandie/alencon-61000/" title="Alençon" data-trk-nav-bottom-desktop="Communes | Alençon">Alençon</a></li>
                <li data-ofclassinsee="61169"><a href="https://www.ouest-france.fr/normandie/flers-61100/" title="Flers" data-trk-nav-bottom-desktop="Communes | Flers">Flers</a></li>
                <li data-ofclassinsee="76351"><a href="https://www.ouest-france.fr/normandie/le-havre-76600/" title="Le Havre" data-trk-nav-bottom-desktop="Communes | Le Havre">Le Havre</a></li>
                <li data-ofclassinsee="76540"><a href="https://www.ouest-france.fr/normandie/rouen-76000/" title="Rouen" data-trk-nav-bottom-desktop="Communes | Rouen">Rouen</a></li>
        </ul>
        <ul class="su-tags su-margin-bottom-s liste-tags su-contrast">
            <li class="first">
                        <a href="https://www.ouest-france.fr/pays-de-la-loire/" title="Pays de la Loire" data-trk-nav-bottom-desktop="Communes | Pays de la Loire">Pays de la Loire</a>
            </li>
                <li data-ofclassinsee="44109"><a href="https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/" title="Nantes" data-trk-nav-bottom-desktop="Communes | Nantes">Nantes</a></li>
                <li data-ofclassinsee="44184"><a href="https://www.ouest-france.fr/pays-de-la-loire/saint-nazaire-44600/" title="Saint-Nazaire" data-trk-nav-bottom-desktop="Communes | Saint-Nazaire">Saint-Nazaire</a></li>
                <li data-ofclassinsee="49007"><a href="https://www.ouest-france.fr/pays-de-la-loire/angers-49000/" title="Angers" data-trk-nav-bottom-desktop="Communes | Angers">Angers</a></li>
                <li data-ofclassinsee="49099"><a href="https://www.ouest-france.fr/pays-de-la-loire/cholet-49300/" title="Cholet" data-trk-nav-bottom-desktop="Communes | Cholet">Cholet</a></li>
                <li data-ofclassinsee="53130"><a href="https://www.ouest-france.fr/pays-de-la-loire/laval-53000/" title="Laval" data-trk-nav-bottom-desktop="Communes | Laval">Laval</a></li>
                <li data-ofclassinsee="72181"><a href="https://www.ouest-france.fr/pays-de-la-loire/le-mans-72000/" title="Le Mans" data-trk-nav-bottom-desktop="Communes | Le Mans">Le Mans</a></li>
                <li data-ofclassinsee="85191"><a href="https://www.ouest-france.fr/pays-de-la-loire/la-roche-sur-yon-85000/" title="La Roche sur Yon" data-trk-nav-bottom-desktop="Communes | La Roche sur Yon">La Roche sur Yon</a></li>
        </ul>
        <ul class="su-tags su-margin-bottom-s liste-tags su-contrast">
            <li class="first">
                        <a href="https://www.ouest-france.fr/nouvelle-aquitaine/" title="Nouvelle Aquitaine" data-trk-nav-bottom-desktop="Communes | Nouvelle Aquitaine">Nouvelle Aquitaine</a>
            </li>
                <li data-ofclassinsee="79191"><a href="https://www.ouest-france.fr/nouvelle-aquitaine/niort-79000/" title="Niort" data-trk-nav-bottom-desktop="Communes | Niort">Niort</a></li>
                <li data-ofclassinsee="79049"><a href="https://www.ouest-france.fr/nouvelle-aquitaine/bressuire-79300/" title="Bressuire" data-trk-nav-bottom-desktop="Communes | Bressuire">Bressuire</a></li>
                <li data-ofclassinsee="79202"><a href="https://www.ouest-france.fr/nouvelle-aquitaine/parthenay-79200/" title="Parthenay" data-trk-nav-bottom-desktop="Communes | Parthenay">Parthenay</a></li>
                <li data-ofclassinsee="79329"><a href="https://www.ouest-france.fr/nouvelle-aquitaine/thouars-79100/" title="Thouars" data-trk-nav-bottom-desktop="Communes | Thouars">Thouars</a></li>
        </ul>
        <ul class="su-tags su-margin-bottom-s liste-tags su-contrast">
            <li class="first">
                        <label class="su-tag" for="menu-burger-toggle" data-rpc-header-surcharge='{"matched_tag":{"menu_n1":"Régions"}}' title="Ouvrir le menu Autres régions" data-trk-nav-bottom-desktop="Communes | Autres régions">Autres régions</label>
            </li>
                <li data-ofclassinsee=""><a href="https://www.ouest-france.fr/ile-de-france/paris-75000/" title="Paris" data-trk-nav-bottom-desktop="Communes | Paris">Paris</a></li>
                <li data-ofclassinsee=""><a href="https://www.ouest-france.fr/region-occitanie/toulouse-31000/" title="Toulouse" data-trk-nav-bottom-desktop="Communes | Toulouse">Toulouse</a></li>
                <li data-ofclassinsee=""><a href="https://www.ouest-france.fr/provence-alpes-cote-dazur/nice-06000/" title="Nice" data-trk-nav-bottom-desktop="Communes | Nice">Nice</a></li>
                <li data-ofclassinsee=""><a href="https://www.ouest-france.fr/hauts-de-france/lille-59000/" title="Lille" data-trk-nav-bottom-desktop="Communes | Lille">Lille</a></li>
                <li data-ofclassinsee=""><a href="https://www.ouest-france.fr/provence-alpes-cote-dazur/marseille-13000/" title="Marseille" data-trk-nav-bottom-desktop="Communes | Marseille">Marseille</a></li>
                <li data-ofclassinsee=""><a href="https://www.ouest-france.fr/nouvelle-aquitaine/bordeaux-33000/" title="Bordeaux" data-trk-nav-bottom-desktop="Communes | Bordeaux">Bordeaux</a></li>
        </ul>
</div>
</div>
    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;multi-menu-header-annonces-pcm&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;multi-menu-header-annonces-pcm PROD&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;8.0.0&amp;quot;}]"  id="header__parentOf__annonces" class="_b visibility-desktop su-hidden deroulant" ><div class="su-container">
    <ol class="su-no-ending-border su-items-list su-columns-desktop-4">
            <li><a href="https://www.ouestfrance-immo.com/?utm_source=ouest-france.fr&utm_medium=autopromo&utm_campaign=of-tetiere" data-trk-nav-bottom-desktop="Annonces | Immobilier" target="_blank">Immobilier</a></li>
            <li><a href="https://www.ouest-france.fr/shopping/" data-trk-nav-bottom-desktop="Annonces | Shopping" >Shopping</a></li>
            <li><a href="https://www.ouestfrance-auto.com/?at_platform=ouest-france.fr&at_medium=affiliation&at_campaign=of-lien&at_content=of-tetiere" data-trk-nav-bottom-desktop="Annonces | Automobile" target="_blank">Automobile</a></li>
            <li><a href="https://avis-de-deces.ouest-france.fr" data-trk-nav-bottom-desktop="Annonces | Obsèques" >Obsèques</a></li>
            <li><a href="https://www.ouest-france.fr/shopping/comparateur/" data-trk-nav-bottom-desktop="Annonces | Comparateur" >Comparateur</a></li>
            <li><a href="https://codepromo.ouest-france.fr/" data-trk-nav-bottom-desktop="Annonces | Codes Promo" >Codes Promo</a></li>
            <li><a href="https://www.ouestfrance-immo.com/?utm_source=ouest-france.fr&utm_medium=autopromo&utm_campaign=of-tetiere" data-trk-nav-bottom-desktop="Annonces | Estimation immobilière" target="_blank">Estimation immobilière</a></li>
            <li><a href="https://annonces-legales.ouest-france.fr/" data-trk-nav-bottom-desktop="Annonces | Annonces légales" target="_blank">Annonces légales</a></li>
            <li><a href="https://www.ouest-france.fr/annonces/" data-trk-nav-bottom-desktop="Annonces | Passez votre annonce" target="_blank">Passez votre annonce</a></li>
            <li><a href="https://www.ouestfrance-emploi.com/?at_platform=ouest-france.fr&at_medium=autopromo&at_campaign=of-lien&at_content=of-tetiere" data-trk-nav-bottom-desktop="Annonces | Offres d’emploi" target="_blank">Offres d’emploi</a></li>
            <li><a href="https://lacentraledesmarches.com/" data-trk-nav-bottom-desktop="Annonces | Marchés Publics" target="_blank">Marchés Publics</a></li>
    </ol>
</div></div>

</header>
<div class="header-pousseur"></div>
</div>

        <input type="checkbox" id="menu-burger-toggle" name="menu-burger-toggle" class="menu-burger-toggle" />
        <nav class="nav-menu-burger su-clearfix">
            <div class="zone-btn-fermer">
                <label for="menu-burger-toggle" class="btn btn-picto-burger btn-fermer su-button-no-look">
                    <i class="su-icon ic-fermer">fermer</i>
                    <span class="title">MENU</span>
                </label>

                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;logo-header---atom&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Block builder Atom&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;10.0.0&amp;quot;}]"  class="_b burger-logo-of" id="burger_logo_of" ><span class="su-h1">
  <a href="https://www.ouest-france.fr/" title="Retour à l'accueil Ouest-France">
    <img  src="https://media.ouest-france.fr/v1/documents/d5a06162881f47abde8ca2f7b57b769e-of.svg" alt="Ouest-France">
  </a>
</span>
</div>
            </div>

            <div class="menu-burger">
                
                    <div class="burger-halves">
                        <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;bp-parution-v2/last-parution-v1&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Parution - référentiel&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;0.0.630&amp;quot;}]"  class="_b " id="bloc_burger_1" ><div class="bp-parution content-abo-burger">
    <div class="photo">
        <a 
        data-trkbloc-kiosque="Clic vignette | Jeudi 18 janvier 2024 | Journal Ouest-France - Rennes"
     data-ofcrtoken href="https://www.ouest-france.fr/premium/journal/journal-ouest-france/?int_medium=lien&amp;int_campaign=journal&amp;int_content=bouton-jaune-haut-burger&popin=1&edition=rennes" title="Je lis le journal">
            <img alt="Image de la une" class="lazyload" data-oflazyload='{"src":"https://ofr-ofjn-production-api.twipecloud.net/Preview/512/512/9514859"}'>
        </a>
    </div>
</div>
</div>
                        <div class="picto-container">
                            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="bloc_picto_1"  class="_b"><div class="btn-picto-burger fond-gris">
    <a href="https://jeux.ouest-france.fr/" data-trk-burger='Jeux'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/2fc672ba317496e015a9903ef4dcda92-jeux.svg"}' alt="Jeux" />
        <span>Jeux</span>
    </a>
</div>
</div>
                            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="bloc_picto_2"  class="_b"><div class="btn-picto-burger fond-gris">
    <a href="https://www.ouest-france.fr/newsletters/" data-trk-burger='Newsletters'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/4ef3ba77a4fc7125913bb6eabf68e5df-newsletter.svg"}' alt="Newsletters" />
        <span>Newsletters</span>
    </a>
</div>
</div>
                            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="bloc_picto_3"  class="_b"><div class="btn-picto-burger fond-gris">
    <a href="https://programmetv.ouest-france.fr/" data-trk-burger='Petits écrans'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/f939ae78d37b9d9c1b0c4873ed7f8cec-tv.svg"}' alt="Petits écrans" />
        <span>Petits écrans</span>
    </a>
</div>
</div>
                            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-header-btn-carre&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform bp header&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.2.0&amp;quot;}]"  id="bloc_picto_4"  class="_b"><div class="btn-picto-burger fond-gris">
    <a href="https://www.ouest-france.fr/premium/mes-communes/" data-trk-burger='Communes'>
        <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/9c594e1302576c47f37e07ccc4a630df-like.svg"}' alt="Communes" />
        <span>Communes</span>
    </a>
</div>
</div>
                        </div>
                    </div>

                    <div    class="_b su-clearfix" id="bloc_burger_2" ></div>

                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-menu-silo&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Platform BP menus silotés&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;3.0.3&amp;quot;}]"  class="_b su-clearfix" id="bloc_burger_3" ><ul class="navigation-principale-liste v2 v3 ouverte" data-rpc-header='{"block":"burger","url":"/rpc/block-contracts/cff591f6-267b-4c9a-aeb4-ffe4404dbfb5","route_of":"https://www.ouest-france.fr","route_vv":"https://voilesetvoiliers.ouest-france.fr","route_jeux":"https://jeux.ouest-france.fr","urls_sic":{&quot;id&quot;:&quot;8ea803be-9869-4c33-bbe7-d32b7786b178&quot;,&quot;marque&quot;:&quot;OF&quot;,&quot;ciblage_abo&quot;:&quot;OF&quot;,&quot;marque_majoritaire&quot;:&quot;OF&quot;,&quot;nom_marque&quot;:&quot;Ouest-France&quot;,&quot;url_abonnement_header&quot;:&quot;https://abonnement.ouest-france.fr&quot;,&quot;url_abonnement_header_anonyme&quot;:&quot;https://abonnement.ouest-france.fr&quot;,&quot;url_abonnement_upsell&quot;:null,&quot;url_abonnement_source&quot;:&quot;https://abonnement.ouest-france.fr/tunnel/pack-essentiel-article/124099115106&quot;,&quot;url_abonnement_pref&quot;:&quot;https://abonnement.ouest-france.fr/tunnel/pack-essentiel-article/124099115106&quot;,&quot;url_abonnement_maxinum&quot;:&quot;https://abonnement.ouest-france.fr/tunnel/pack-maxinum/125102115102&quot;,&quot;url_abonnement_journal&quot;:&quot;https://abonnement.ouest-france.fr/tunnel/pack-numerique/118108114&quot;,&quot;url_achat_journal&quot;:null,&quot;prix_journal&quot;:&quot;1,19€&quot;,&quot;prix_upsell&quot;:&quot;1,50€&quot;,&quot;journal&quot;:&quot;https://www.ouest-france.fr/premium/journal/journal-ouest-france/&quot;,&quot;image_une_journal&quot;:&quot;https://www.ouest-france.fr/sites/default/files/depot_la_une/ofune.jpg&quot;,&quot;libelle_une_header&quot;:&quot;Le Journal&quot;,&quot;image_une_header&quot;:&quot;https://media.ouest-france.fr/v1/pictures/a19e74a9188e61016b951d0842e0f356-une.jpg?client_id&#61;cmsfront&amp;sign&#61;bd8cde1d73ae89513e194480fc2d0993254d32c5e22390a405a38a01cf264acf&quot;,&quot;image_archive&quot;:&quot;https://media.ouest-france.fr/v1/pictures/24ab4dd1c22ee160a085ed156e1b0a66-default.jpeg?width&#61;209&quot;,&quot;votre_compte&quot;:&quot;https://moncompte.ouest-france.fr/ouestfrance/&quot;,&quot;la_place&quot;:&quot;https://laplace.ouest-france.fr/?int_medium&#61;lien&amp;int_campaign&#61;of-laplace&amp;int_content&#61;menu-user&quot;,&quot;ancre_newsletter&quot;:&quot;#&quot;,&quot;et_vous&quot;:&quot;https://www.ouest-france.fr/et-vous/&quot;,&quot;id_pubstack&quot;:&quot;8d14bcf8-c49d-4564-94b5-ae5836d3f634&quot;,&quot;url_abonnement_jeux&quot;:&quot;https://abonnement.ouest-france.fr/tunnel/pack-essentiel/124099116102&quot;,&quot;libelle_cadeau&quot;:&quot;Offrir Ouest-France&quot;,&quot;url_cadeau&quot;:&quot;https://abonnement-acq.ouest-france.fr/of-abo-noel-22?int_medium&#61;lien&amp;int_campaign&#61;of-abo_noel-2022&amp;int_content&#61;picto-header&quot;},"matched_tag":"a0c8a132-ad35-483a-a94b-100484d7e4a6"}'>
        <style>
            .navigation-principale-liste.v2 .item-actualite .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-actualite " id="item-actualite">
                <a class="" href="javascript:;"  data-trk-burger="Actualité">Actualité</a>
            </li>
            <li class="item item-le-journal su-hidden-lg su-hidden-xl" id="item-le-journal">
                <a class="su-hidden-lg su-hidden-xl" href="https://www.ouest-france.fr/premium/journal/journal-ouest-france/?int_medium=lien&int_campaign=journal&int_content=bouton-jaune-menu"  data-trk-burger="Le Journal">Le Journal</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-parutions .ofonglet-on.item-onglet {
                background-color: #CBA200;
            }
        </style>
            <li class="item item-parutions lien-premium" id="item-parutions">
                <a class="lien-premium" href="javascript:;"  data-trk-burger="Parutions">Parutions</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-communes .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-communes " id="item-communes">
                <a class="" href="javascript:;"  data-trk-burger="Communes">Communes</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-regions .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-regions " id="item-regions">
                <a class="" href="javascript:;"  data-trk-burger="Régions">Régions</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-sport .ofonglet-on.item-onglet {
                background-color: #3FA46E;
            }
        </style>
            <li class="item item-sport " id="item-sport">
                <a class="" href="javascript:;"  data-trk-burger="Sport">Sport</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-videosspan-classicon-video-span .ofonglet-on.item-onglet {
                background-color: #666666;
            }
        </style>
            <li class="item item-videosspan-classicon-video-span background-gris text-blanc with-icon" id="item-videosspan-classicon-video-span">
                <a class="background-gris text-blanc with-icon" href="javascript:;"  data-trk-burger="VIDÉOS&lt;span class&#61;&quot;icon-video&quot;&gt;&lt;/span&gt;">VIDÉOS<span class="icon-video"></span></a>
            </li>
            <li class="item item-podcastsspan-classicon-casque-audio-span with-icon" id="item-podcastsspan-classicon-casque-audio-span">
                <a class="with-icon" href="https://podcasts.ouest-france.fr"  data-trk-burger="Podcasts&lt;span class&#61;&quot;icon-casque-audio&quot;&gt;&lt;/span&gt;">Podcasts<span class="icon-casque-audio"></span></a>
            </li>
            <li class="item item-et-vousspan-classicon-etvous-span " id="item-et-vousspan-classicon-etvous-span">
                <a class="" href="javascript:;"  data-trk-burger="Et vous&lt;span class&#61;&quot;icon-etvous&quot;&gt;&lt;/span&gt;">Et vous<span class="icon-etvous"></span></a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-economie .ofonglet-on.item-onglet {
                background-color: #005981;
            }
        </style>
            <li class="item item-economie " id="item-economie">
                <a class="" href="javascript:;"  data-trk-burger="Économie">Économie</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-entreprises .ofonglet-on.item-onglet {
                background-color: #005981;
            }
        </style>
            <li class="item item-entreprises ofonglet-on sous-ouverte " id="item-entreprises">
                <a href="javascript:;"
                    class="btn-plus item-onglet ofonglet-on "
                    data-oftoggleclass='[{"parent":".item","klass":"ofonglet-on"},{"parent":".navigation-principale-liste","klass":"ouverte"},{"klass":"ofonglet-on"}]'
                >
	                Entreprises
                </a>
                <ul class="dropdown ouverte">
                        
                                <li class="sous-item  item-actualites-entreprises ofonglet-on  ">
                                    <a href="javascript:;"
                                        class="btn-plus item-onglet  ofonglet-on"
                                        data-oftoggleclass='[{"parent":".item.ofonglet-on","klass":"sous-ouverte"},{"parent":".sous-item","klass":"ofonglet-on"},{"parent":".dropdown","klass":"ouverte"},{"klass":"ofonglet-on"}]'
                                    >
                                        Actualités Entreprises
                                    </a>
                                    <ul class="dropdown dropdown-sous-item su-clearfix  ">
                                            <li class="sous-item">
                                                <a  href="https://www.ouest-france.fr/economie/entreprises/"  data-trk-burger="">Actualités Entreprises</a>
                                            </li>
                                            <li class="sous-item">
                                                <a  href="javascript:;"  data-trk-burger="">Bretagne</a>
                                            </li>
                                            <li class="sous-item">
                                                <a  href="javascript:;"  data-trk-burger="">Normandie</a>
                                            </li>
                                            <li class="sous-item">
                                                <a  href="javascript:;"  data-trk-burger="">Pays de la Loire</a>
                                            </li>
                                            <li class="sous-item">
                                                <a  href="https://www.ouest-france.fr/europe/france/#entreprises"  data-trk-burger="">France</a>
                                            </li>
                                            <li class="sous-item">
                                                <a  href="https://www.ouest-france.fr/europe/#entreprises"  data-trk-burger="">Europe</a>
                                            </li>
                                            <li class="sous-item">
                                                <a  href="https://www.ouest-france.fr/monde/#entreprises"  data-trk-burger="">Monde</a>
                                            </li>
                                    </ul>
                                </li>
                </ul>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-etudiant .ofonglet-on.item-onglet {
                background-color: #006BF9;
            }
        </style>
            <li class="item item-etudiant " id="item-etudiant">
                <a class="" href="javascript:;"  data-trk-burger="Étudiant">Étudiant</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-mer .ofonglet-on.item-onglet {
                background-color: #00A3DF;
            }
        </style>
            <li class="item item-mer " id="item-mer">
                <a class="" href="javascript:;"  data-trk-burger="Mer">Mer</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-obseques .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-obseques " id="item-obseques">
                <a class="" href="https://avis-de-deces.ouest-france.fr?int_medium=lien&int_content=lien-burger"  data-trk-burger="Obsèques">Obsèques</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-annonces .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-annonces " id="item-annonces">
                <a class="" href="javascript:;"  data-trk-burger="Annonces">Annonces</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-partenaires .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-partenaires " id="item-partenaires">
                <a class="" href="javascript:;"  data-trk-burger="Partenaires">Partenaires</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-services .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-services " id="item-services">
                <a class="" href="javascript:;"  data-trk-burger="Services">Services</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-programme-tv .ofonglet-on.item-onglet {
                background-color: #4623B9;
            }
        </style>
            <li class="item item-programme-tv " id="item-programme-tv">
                <a class="" href="javascript:;"  data-trk-burger="Programme TV">Programme TV</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-loisirs .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-loisirs " id="item-loisirs">
                <a class="" href="javascript:;"  data-trk-burger="Loisirs">Loisirs</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-evenements .ofonglet-on.item-onglet {
                background-color: #E2001A;
            }
        </style>
            <li class="item item-evenements " id="item-evenements">
                <a class="" href="javascript:;"  data-trk-burger="Événements">Événements</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-codes-promo .ofonglet-on.item-onglet {
                background-color: #F83939;
            }
        </style>
            <li class="item item-codes-promo " id="item-codes-promo">
                <a class="" href="javascript:;"  data-trk-burger="Codes Promo">Codes Promo</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-shopping .ofonglet-on.item-onglet {
                background-color: #F83939;
            }
        </style>
            <li class="item item-shopping " id="item-shopping">
                <a class="" href="javascript:;"  data-trk-burger="Shopping">Shopping</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-ouest-france-communication .ofonglet-on.item-onglet {
                background-color: #666;
            }
        </style>
            <li class="item item-ouest-france-communication " id="item-ouest-france-communication">
                <a class="" href="javascript:;"  data-trk-burger="Ouest-France Communication">Ouest-France Communication</a>
            </li>
        <style>
            .navigation-principale-liste.v2 .item-rejoignez-nous .ofonglet-on.item-onglet {
                background-color: #666;
            }
        </style>
            <li class="item item-rejoignez-nous " id="item-rejoignez-nous">
                <a class="" href="https://recrutement.ouest-france.fr/?int_medium=lien&int_content=lien-burger&int_campaign=recrutement"  data-trk-burger="Rejoignez-nous">Rejoignez-nous</a>
            </li>
</ul>
</div>
                
            </div>

            <label for="menu-burger-toggle" class="voile-label"><div class="voile"></div></label>
        </nav>

    <div    id="bandeau"  class="_b"></div>

    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;pub-param&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Blocktopus PROD pubs&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.0.0&amp;quot;}]"  class="_b su-container su-visible-lg su-visible-xl su-relative" id="pub_megabanner" ><div id="pub_banniere_haute" class="pub "></div></div>
    <section class="main su-container">
        
    <div    id="alerte_resultats"  class="_b"></div>

    <div class="en-ce-moment su-hidden-md su-hidden-xs su-hidden-sm">
        <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;barre-en-ce-moment-entreprise&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;blocktopus-of&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.0.0&amp;quot;}]"  class="_b su-margin-bottom-m" id="en_ce_moment_1" ><section class="barre-tags">
    <p class="su-h3 titre-moment">En ce moment</p>
    <ul class="su-tags" data-ofwidth='{"sel":".swipe-contenu"}'>
            <li class="swipe-contenu"><a href="https://www.ouest-france.fr//economie/entreprises/startup/" title="Start-up" data-trkencemmt="1">Start-up</a></li>
          	<li class="swipe-contenu"><a href="https://www.ouest-france.fr//economie/entreprises/recrutement/" title="Recrutement" data-trkencemmt="2">Recrutement</a></li>
          	<li class="swipe-contenu"><a href="https://www.ouest-france.fr//economie/industries/" title="Industrie" data-trkencemmt="3">Industrie</a></li>
          	<li class="swipe-contenu"><a href="https://www.ouest-france.fr//economie/entreprises/investissement/" title="Investissement" data-trkencemmt="4">Investissement</a></li>
          	
            
      		<div    id="en_ce_moment_1__parentOf__en_ce_moment_monet"  class="_b"></div>
    </ul>
</section></div>
        <div    class="_b su-margin-bottom-m" id="en_ce_moment_bis" ></div></div>

    <div    class="_b margin-bottom-null-mobile full-width-mobile" id="contextuelle_1" ></div>

    <div class="su-row">
        <div class="su-col-lg-16 su-col-xl-18">

            

            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;fil-arianne---molecule&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;bp fil ariane&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;15.0.0&amp;quot;}]"  class="_b su-margin-bottom-0" id="fil_ariane" ><ul class="su-breadcrumb ">
    <li><a href="/" title="Retour à l'accueil">Accueil</a></li>
        <li class="item ">
                <a href="/economie/" title="Économie">

            Économie

                </a>
        </li>
        <li class="item active">
                    <a href="/economie/entreprises/" title="Entreprises">

            Entreprises

                    </a>
        </li>
</ul>
</div>

            <div    class="_b su-hidden-lg su-hidden-xl" id="redac_44" ></div>
            <div    class="_b su-hidden-lg su-hidden-xl" id="redac_44_bis" ></div>

            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;editorial-block-provider/article-detail&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Edito - Detail Contenu&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.10.1&amp;quot;}]"  id="bloc_3quarts_1"  class="_b"><article class="article-content-container detail-article-content type-article da-v2 with-player da-v3" id="detail-article-content"  data-ofreadlater-urlrpc="" >
    
    <header class="su-article   ">
        
            <div    id="bloc_3quarts_1__parentOf__mobile_pub_banniere_haute" class="_b su-hidden-lg su-hidden-xl su-margin-bottom-0" ></div>
        

        
            <div class="su-responsive">
                

    <h1>Pimkie envisage de fermer 36 magasins supplémentaires en 2024, 239 postes menacés</h1>

            </div>
        

        

        

        

        
                <p class="su-standfirst chapeau">L’enseigne de prêt-à-porter féminin Pimkie, qui avait acté en 2023 la suppression de 63 magasins, envisage de fermer 36 boutiques supplémentaires en 2024, a indiqué jeudi 18 janvier 2024 la direction dans un communiqué. 239 postes en plus sont menacés.</p>
        

        
                <div id="audio-player-container" data-opts-audio='{"artwork":[{ &quot;src&quot;:&quot;https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=320&height=320&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=6738805a597501040f75d91b5d8ed66d6fc9ecad04551ac8b5e6e36fe81f8499&quot;, &quot;sizes&quot;: &quot;320x320&quot; },{ &quot;src&quot;:&quot;https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=375&height=375&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=65530ad4a94690594e6118271243d207cd1c2bf3b775f149df9d3ea466f6c8d3&quot;, &quot;sizes&quot;: &quot;375x375&quot; },{ &quot;src&quot;:&quot;https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=480&height=480&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=89e8a47b270df19bb460fb13b0e12c5d3fef34343f500d94be6f5b35b5aa86d7&quot;, &quot;sizes&quot;: &quot;480x480&quot; },{ &quot;src&quot;:&quot;https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=630&height=630&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=21aff2515b4e64732e5c02e3c1d9edf2d9888e503ffb85b2f6fd5ad1faf8c313&quot;, &quot;sizes&quot;: &quot;630x630&quot; }]}' >
                    <audio data-trk-vocalization-voice="fr-FR-JacquelineNeural" src="https://api.octopus.saooti.com/podcast/download/477453.mp3" controls hidden preload="none"></audio>

                    <button id="play-icon-btn" data-trk-picto="Écouter cet article">
                        <svg id="background-circle" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <circle cx="22" cy="22" r="22" fill="#E2001A" />
                        </svg>
                        <svg id="play-icon" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M25.5 17C25.5 17.255 25.3583 17.4958 25.1316 17.6233L10.965 25.415C10.8658 25.4717 10.7383 25.5 10.625 25.5C10.4975 25.5 10.37 25.4717 10.2708 25.4008C10.0441 25.2733 9.91663 25.0467 9.91663 24.7917V9.20833C9.91663 8.95333 10.0441 8.72667 10.2708 8.59917C10.4833 8.47167 10.7525 8.47167 10.965 8.585L25.1316 16.3767C25.3583 16.5042 25.5 16.745 25.5 17Z" fill="white" />
                        </svg>
                        <svg id="pause-icon" style="display: none" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M21.9583 26.9167C20.7825 26.9167 19.8333 25.9675 19.8333 24.7917V9.20833C19.8333 8.03249 20.7825 7.08333 21.9583 7.08333C23.1341 7.08333 24.0833 8.03249 24.0833 9.20833V24.7917C24.0833 25.9675 23.1341 26.9167 21.9583 26.9167Z" fill="white" />
                            <path d="M12.0416 26.9167C10.8658 26.9167 9.91663 25.9675 9.91663 24.7917V9.20833C9.91663 8.03249 10.8658 7.08333 12.0416 7.08333C13.2175 7.08333 14.1666 8.03249 14.1666 9.20833V24.7917C14.1666 25.9675 13.2175 26.9167 12.0416 26.9167Z" fill="white" />
                        </svg>
                    </button>
                    <div id="control-container">
                        <p><strong>Écouter cet article</strong></p>
                        <input type="range" id="seek-slider" max="100" value="0" data-trk-vocalization-progress>
                        <span id="current-time" style="display: none" class="time"></span>
                        <span id="duration" class="time" data-trk-vocalization-duration-tts="01:42">01:42</span>
                    </div>
                </div>
        

        
    
        <div class="photo su-relative ">
            
                <figure>
                    <div class="su-ratio-16-9 su-main-picture">
                            <img decoding="async" class="su-media" src="https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=af200a97e2bff1ebfca44c07dc830aff8dd01c978e6c416f797114275a463173" alt="L&rsquo;enseigne de pr&ecirc;t-&agrave;-porter f&eacute;minin Pimkie envisage de fermer 36&nbsp;boutiques suppl&eacute;mentaires en 2024."
                                srcset="https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=320&height=180&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=bfe42f448a6d478c3e33e3b6af6bd1e21adc9bf7da12b9cf083ef76ceff02340 320w, https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=c057a7b014caff98ed8a9a549f252dd6762590d1a826189a23aa4cbbc08b606a 360w, https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=480&height=270&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=3e4da5252b902bea52ec652ca9659d8bec2442a4847f9c8cf8801828a7904db5 480w, https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=abd6bbfd844036d2d9c36e11d6ef4b729ea1252053078b1299237b2e136a8d3a 630w"
                                sizes="(max-width: 767px) and (min-resolution: 2dppx) and (max-resolution: 2.9dppx) 50vw, (max-width: 767px) and (min-resolution: 3dppx) and (max-resolution: 3.9dppx) 33.3vw, (max-width: 767px) and (min-resolution: 4dppx) 25vw, (max-width: 767px) 100vw, (min-width: 768px) 630px"
                            />

                    </div>
                    <figcaption><span>L’enseigne de prêt-à-porter féminin Pimkie envisage de fermer 36 boutiques supplémentaires en 2024. | </span>GUILLAUME SALIGOT/OUEST-FRANCE</figcaption>
                </figure>
                <button class="su-button-fullscreen" data-oftriggerresize data-ofmodal="carrousel-plein-ecran">
                        <span>Voir en plein écran</span>
                </button>
        </div>

        <dialog class="carrousel-plein-ecran dialog">
            <div class="close-carrousel-plein-ecran" title="Fermer le plein écran" data-ofmodal="carrousel-plein-ecran"></div>
            
                <button class="btn btn-fermer" title="Fermer le plein écran" data-ofmodal="carrousel-plein-ecran">
                    <i class="su-icon ic-fermer">fermer</i>
                </button>
                <div class="carrousel snap-migrate">
                    <ul class="carrousel-conteneur su-not-list" data-ofswipe='{"rambo":2,"sel":".photo", "navSel":".carrousel-plein-ecran .carrousel-nav-bas .item"}'>
<li class="carrousel-contenu photo" data-ofvwidth='{"mobileOnly":false}'><div class="close-carrousel-plein-ecran" title="Fermer le plein écran" data-ofmodal="carrousel-plein-ecran"></div><figure><img decoding="async" data-ofmaxheight class="media lazyload" alt="L&rsquo;enseigne de pr&ecirc;t-&agrave;-porter f&eacute;minin Pimkie envisage de fermer 36&nbsp;boutiques suppl&eacute;mentaires en 2024."
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeNpi/P//PwMlgHHUgFEDgAAgwAD+lBrvy+NcxAAAAABJRU5ErkJggg=="
                                    data-oflazyload='{"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width&#61;320&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;8a23b256b212843eb98877d200c4214cd7fb211ee4cb0d9508ea189322b0d5f5 320w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width&#61;375&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;059d7dc0354bbbe70bf2ced03c5b59ff66f34a314bb65713d6b416341460b225 360w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width&#61;480&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;27064bdba831f879cdb5e5d2887678b75bd97b4959082c4f1eaecde7985d2ad4 480w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width&#61;630&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;1610bf66a392703ce5c8068678a7cc18062c484bea200e5f890d844b1af09f25 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width&#61;940&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;9803d266ef9ce6a5f1d6644f134368384d8e961196cd45c52802389218d2b96e 940w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDcxYTZiYWRiZDhkNDRmZTc5YzZlOTZmMWM3MjgzNmY?width&#61;1260&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;f39a424281f34740e8fc903943a5e242f3c255937df7befd96051966ce5d43ee 1260w"}'
                                     /><figcaption><span>L’enseigne de prêt-à-porter féminin Pimkie envisage de fermer 36 boutiques supplémentaires en 2024. | </span>GUILLAUME SALIGOT/OUEST-FRANCE</figcaption></figure></li>                    </ul>

                </div>

            
        </dialog>



        
            <div    id="bloc_3quarts_1__parentOf__pre_metadata"  class="_b"></div>
        
    </header>
    

    
    <div class="col-gauche">
        
            <header class="metadata">
                <span class="auteur">
                    
                <span class="su-source source-lien su-cockade-of"
    ><a href="https://www.ouest-france.fr/">Ouest-France</a></span>

                    
                </span>
                <span class="dates">
                    <span class="date su-date ">Publié le <time class="meta-time" datetime="2024-01-18T13:26:38+01:00">18/01/2024 <span class="heure"> à 13h26</span></time></span>
                </span>
                <div    class="_b apres-dates" id="bloc_3quarts_1__parentOf__apres_dates" ></div>
            </header>
        

        
            <aside class="contenu-secondaire" data-nosnippet>
                <div class="abo-journal-container su-margin-top-s su-margin-bottom-m">
                    
                        <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-cta-moteur-marques&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;ouestfrance platform moteurs marques&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.16.0&amp;quot;}]"  id="bloc_3quarts_1__parentOf__abo_journal"  class="_b su-margin-top-s">
    <a rel="nofollow" class="offre-abonnement su-button su-subscription btn-abonnez-vous "  href="https://abonnement.ouest-france.fr?rt=https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0&int_medium=lien&int_campaign=abonnement&int_content=page-article_boutonjaunehaut&marquesource=OF&marquepref=&ida=43d19726-b5fa-11ee-be97-0ca6f5a426b0" data-trkartmcolgauche="Abonnez-vous">Abonnez-vous</a>


</div>
                    
                    <div    id="bloc_3quarts_1__parentOf__offrir_article"  class="_b"></div>
                </div>

                
                    <div class="su-visible-xl item su-clearfix">
                        <button class="action meta-readlater">
                            <span data-trk-menuarticle="Lire plus tard" role="button" class="icon-signet" title="Lire plus tard"  data-ofreadlater-id="43d19726-b5fa-11ee-be97-0ca6f5a426b0" data-ofreadlater-url="https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0" data-ofreadlater-title="Pimkie envisage de fermer 36 magasins supplémentaires en 2024, 239 postes menacés"></span>
                            <span>Lire plus tard</span>
                        </button>
                    </div>
                

                
                    <div class="su-visible-xl item su-clearfix">
                        <button class="action su-row meta-btn su-vertical-center su-visible-xl" data-sutoggleclass='[{"sel":"#partage-col-gauche","klass":"su-hidden"}]'>
                            <span data-trk-menuarticle="Partager" class="icon icon-partage"></span>
                            <span class="su-text-left">Partager</span>
                        </button>
                        <ul id="partage-col-gauche" class="reseaux-sociaux-list avec-noms pastilles su-not-list su-hidden"><li class="item facebook"><button data-trksocialnetwork='Facebook' data-ofshare-open='{"target": "facebook", "url": "https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0", "source": "ouestfrance"}' title="Partager sur Facebook"><i class="icon icon-facebook" data-trk-nav-bottom-sticky="Facebook"></i></button></li><li class="item twitter x"><button data-trksocialnetwork='X' data-ofshare-open='{"target": "twitter", "url": "https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0", "source": "ouestfrance"}' title="Partager sur X"><i class="icon" data-trk-nav-bottom-sticky="X"><img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/561e3fe971440ef51d73173055cd9263-twitter-blanc.svg"}'></i></button></li><li class="item flipboard"><button data-trksocialnetwork='Flipboard' data-ofshare-open='{"target": "Flipboard", "url": "https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0", "source": "ouestfrance"}' title="Partager sur Flipboard"><i class="icon icon-flipboard" data-trk-nav-bottom-sticky="Flipboard"></i></button></li><li class="item linkedin"><button data-trksocialnetwork='LinkedIn' data-ofshare-open='{"target": "LinkedIn", "url": "https://www.ouest-france.fr/economie/entreprises/pimkie-envisage-de-fermer-36-magasins-supplementaires-en-2024-239-postes-menaces-43d19726-b5fa-11ee-be97-0ca6f5a426b0", "source": "ouestfrance"}' title="Partager sur LinkedIn"><i class="icon icon-linkedin" data-trk-nav-bottom-sticky="LinkedIn"></i></button></li></ul>
                    </div>
                

                
                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-newsletters&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Platform BP Newsletters&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;3.10.2&amp;quot;}]"  id="bloc_3quarts_1__parentOf__inscription_newsletter" class="_b item" ><section id="newsletter-col-gauche" class="su-negative bp-newsletters nl-005981 bloc-newsletter newsletter-gauche su-visible-xl su-margin-bottom-xl" style="--bp-newsletter-bg: #005981; ">
    <label for="subscription-mail" title="S'inscrire à la Newsletter" class="toggle-nl-col-gauche" data-sutoggleclass='[{"sel":".bloc-newsletter.newsletter-gauche .texte-rgpd.su-hidden","klass":"su-hidden"},{"klass":"su-hidden"}]'></label>
    <p class="su-h3 su-margin-bottom-xs titre-bloc">Newsletter Entreprises</p>
    <div class="accroche su-text-xsmall">Du lundi au vendredi, l'actualité des entreprises vue par Ouest-France et API</div>

    <form name="newsletter-matinale" class="form-bp-newsletter" method="post" action="#" novalidate="" data-bpnewsletter="Entreprises" data-trknewsletter="OF | Entreprises" data-trkblocknewsletter="Détail article" data-code-operation="471">
        <div class="form-email tooltip-parent tooltip-erreur">
            <div class="tooltip">
                <span class="icon icon-fermer" data-oftoggleclass="[{&quot;parent&quot;:&quot;.tooltip-parent&quot;,&quot;klass&quot;:&quot;tooltip-actif&quot;}]"></span>
                <p>Merci de saisir votre adresse e-mail</p>
            </div>
            <input name="email" type="email" value="" id="subscription-mail" placeholder="Votre e-mail">
            <input name="service_id" type="hidden" value="850001">
        </div>

        <span class="btn-newsletter">
                <button type="submit" class="su-button su-primary">OK</button>
                <span class="spinner su-hidden">
                <span class="icon-chargement rotate"></span>
            </span>
        </span>
    </form>

    <p class="su-text-xsmall texte-rgpd su-hidden">Votre e-mail, avec votre consentement, est utilisé par Ouest-France pour recevoir notre newsletter. <a class="su-link-light" href="/politique-de-protection-des-donnees-personnelles/">En&nbsp;savoir&nbsp;plus</a>.</p>
</section></div>
                
            </aside>
        
    </div>
    

    <div id="article-detail" class="contenu-principal p402_premium ">
        
        <div class="su-article">
        



        


                    
                        
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_0"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_0_bis"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_0_mobile" class="_b su-hidden-lg su-hidden-xl" ></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_0_desktop" class="_b su-visible-lg su-visible-xl" ></div>
                        
                    












    
    
        <p>Elle avait déjà acté en 2023 <a href="https://www.ouest-france.fr/economie/commerce/pimkie-annonce-la-fermeture-de-64-magasins-et-la-suppression-de-257-postes-dici-2-027-e7968bc8-ce51-11ed-8922-c50b96804298" target="_blank">la suppression de 63&nbsp;magasins</a>.&nbsp;L’enseigne de prêt-à-porter féminin <a href="https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/trois-magasins-pimkie-fermeront-a-nantes-entre-2023-et-2027-08834d94-cfb0-11ed-a10f-5958f611860a" target="_blank">Pimkie</a> envisage de fermer 36&nbsp;boutiques supplémentaires en 2024, ce qui menace 239&nbsp;postes en plus, <strong>«&nbsp;197 en France&nbsp;»</strong> et <strong>«&nbsp;42 au siège social sur 143&nbsp;»</strong>, a indiqué jeudi 18&nbsp;janvier la direction dans un communiqué, consulté par l’<em>AFP</em>.</p>














    
    


                    
                        
                            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;pub-param&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Blocktopus PROD pubs&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.0.0&amp;quot;}]"  id="bloc_3quarts_1__parentOf__placeholder_apres_1"  class="_b su-margin-top-m"><div id="pub_pave_article" class="pub "></div></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_1_bis"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_1_mobile" class="_b su-hidden-lg su-hidden-xl" ></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_1_desktop" class="_b su-visible-lg su-visible-xl" ></div>
                        
                    












    
    











            <div class="tag-video"><iframe width="100%" height="315" data-embed-src="https://www.ultimedia.com/deliver/generic/iframe/mdtk/01124706/zone/1/src/x03smm3"     data-embed-vendor="Ouest-France"
    data-embed-purpose="editorial"
    data-embed-vendor-id="fonctionnement"
    data-embed-type="media"
 frameborder="0" allow="autoplay; encrypted-media" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe></div>



    
    
        <p>La suppression annoncée des premiers 63&nbsp;magasins – dont 23&nbsp;ont déjà été fermés au 31&nbsp;décembre 2023 – devait déjà conduire à la suppression progressive de 257&nbsp;postes.</p>














    
    


                    
                        
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_2"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_2_bis"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_2_mobile" class="_b su-hidden-lg su-hidden-xl" ></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_2_desktop" class="_b su-visible-lg su-visible-xl" ></div>
                        
                    












    
    
        <p>Depuis la reprise de l’enseigne en février&nbsp;2023, Pimkie a engagé un plan de transformation pour <strong>«&nbsp;pérenniser son activité&nbsp;»</strong> et <strong>«&nbsp;renouer avec la croissance&nbsp;»</strong>, indique l’entreprise.</p>














    
    


                    
                        
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_3"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_3_bis"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_3_mobile" class="_b su-hidden-lg su-hidden-xl" ></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_3_desktop" class="_b su-visible-lg su-visible-xl" ></div>
                        
                    












    
    









        <h2 id="section-6-baisse-de-frequentation-inflation">« Baisse de fréquentation », « inflation »</h2>





    
    
        <p><strong>«&nbsp;Le contexte économique&nbsp;»</strong>, <strong>«&nbsp;la baisse de fréquentation&nbsp;»</strong> et <strong>«&nbsp;l’inflation&nbsp;»</strong> des derniers mois ont <strong>«&nbsp;impacté considérablement les ventes et les résultats économiques&nbsp;»</strong>, poussant l’entreprise à accélérer ce plan de suppression lancé en juin&nbsp;2023.</p>














    
    


                    
                        
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_4"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_4_bis"  class="_b"></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_4_mobile" class="_b su-hidden-lg su-hidden-xl" ></div>
                            <div    id="bloc_3quarts_1__parentOf__placeholder_apres_4_desktop" class="_b su-visible-lg su-visible-xl" ></div>
                        
                    












    
    


            
                
                    <div    id="bloc_3quarts_1__parentOf__placeholder_avant_dernier"  class="_b"></div>
                    <div    id="bloc_3quarts_1__parentOf__placeholder_avant_dernier_bis"  class="_b"></div>
                    <div    id="bloc_3quarts_1__parentOf__placeholder_avant_dernier_mobile" class="_b su-hidden-lg su-hidden-xl" ></div>
                    <div    id="bloc_3quarts_1__parentOf__placeholder_avant_dernier_desktop" class="_b su-visible-lg su-visible-xl" ></div>
                
            












    
    
        <p>Pimkie annonce par ailleurs l’affiliation de 14&nbsp;magasins à son réseau de l’enseigne Miniso, précise l’<em>AFP</em>. <a href="https://www.ouest-france.fr/economie/commerce/gap-france-go-sport-camaieu-le-point-sur-les-problemes-et-defis-que-rencontrent-ces-magasins-a5b0613e-b82b-11ed-a6d8-fca93d3c5f9b?utm_source=troove&amp;utm_medium=site" target="_blank">Le secteur du prêt-à-porter</a> est secoué depuis plusieurs mois par une violente crise.</p>














    
    


                <div    id="bloc_3quarts_1__parentOf__avant_post_storm_0" class="_b post" ></div><div    id="bloc_3quarts_1__parentOf__avant_post_storm_1" class="_b post" ></div><div    id="bloc_3quarts_1__parentOf__avant_post_storm_2" class="_b post" ></div><div    id="bloc_3quarts_1__parentOf__avant_post_storm_3" class="_b post" ></div>

        


        <div    id="bloc_3quarts_1__parentOf__lien_pied_article"  class="_b"></div>


        <div    id="bloc_3quarts_1__parentOf__pre_tags"  class="_b"></div>

        
        <footer class="liste-tags su-margin-bottom-m" data-ofstats-scroll="tags pied article"><div class="su-carrousel snap-migrate"><ul class="su-not-list su-tags su-carrousel-container" data-suswipe='{"sel":"li", "rambo": false, "halfSwipe": true}'>
                <li><a href="https://www.ouest-france.fr/economie/entreprises/" title="Entreprises">Entreprises</a></li>
                <li><a href="https://www.ouest-france.fr/economie/" title="Économie">Économie</a></li>
                <li><a href="https://www.ouest-france.fr/economie/commerce/" title="Commerce">Commerce</a></li>
                <li><a href="https://www.ouest-france.fr/actualite-en-continu/" title="Actualité en continu">Actualité en continu</a></li>
                <li><a href="https://www.ouest-france.fr/europe/france/" title="France">France</a></li>
                <li><a href="https://www.ouest-france.fr/europe/" title="Europe">Europe</a></li>
                <li><a href="https://www.ouest-france.fr/economie/emploi/" title="Emploi">Emploi</a></li>
                <li><a href="https://www.ouest-france.fr/economie/emploi/chomage/" title="Chômage">Chômage</a></li>
            
            
        </ul><button class="su-button-left su-inactif inactif" data-suswipeprev><span class="su-icon">gauche</span></button><button class="su-button-right" data-suswipenext><span class="su-icon">droite</span></button></div></footer>
        
        </div>



        
        
    </div>


        <div    id="bloc_3quarts_1__parentOf__pub_col_droite"  class="_b"></div>

        <div    id="bloc_3quarts_1__parentOf__pub_pied_article"  class="_b"></div>

    
</article>
</div>
                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;feed-taboola&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Feed Taboola&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;2.6.0&amp;quot;}]"  id="bloc_3quarts_pub_3"  class="_b"><div id="conteneur-feed-taboola" class="feed-taboola thematique">

    <script type="text/javascript">
        window._tfa = window._tfa || [];
        _tfa.push({ notify: 'action',name: 'OF_Auto' });
        _tfa.push({ notify: 'action',name: 'OF_Immo' });
        _tfa.push({ notify: 'action',name: 'OF_Emploi' });

        window.thirdparty.push({family: "advertising", name:"taboola",
            fn: function(){
                var  script_tag = document.createElement("script");
                script_tag.src = "https://cdn.taboola.com/libtrc/ouest-france-native/tfa.js";
                script_tag.type = "text/javascript";
                var script = document.getElementsByTagName("script")[0];
                script.parentNode.insertBefore(script_tag, script);
            }
        });
    </script>

<div class="su-row">
    <div class="su-col-xs-6 su-col-md-24 margin-standard container-taboola">
        <!-- taboola -->
        <div id="taboola-below-article-thumbnails"></div>

        <script type="text/javascript">
            window.dataLayer = window.dataLayer || [];
            window.thirdparty.push({family: "advertising", name:"taboola", mobile_only: true,
                fn: function(){


                        if(
                            Didomi.getUserConsentStatusForVendor(42)
                        ){

                    _taboola.push({
                        mode: 'thumbnails-a',
                        container: 'taboola-below-article-thumbnails',
                        placement:  'Mobile Below Article Thematique',
                        target_type: 'mix'
                    });
                    window.dataLayer.push({
                        'event': 'ad_taboola',
                        'feed': 'Mobile Below Article Thematique'
                     });

                        } else {
                            _taboola.push({
                                mode: 'thumbnails-a',
                                container: 'taboola-below-article-thumbnails',
                                placement: 'Mobile Below Article Thematique No Consent',
                                target_type: 'mix'
                            });
                            window.dataLayer.push({
                                'event': 'ad_taboola',
                                'feed': 'Mobile Below Article Thematique No Consent'
                             });
                        }

                }
            });
            window.thirdparty.push({family: "advertising", name:"taboola", desktop_only: true,
                fn: function(){


                        if(
                            Didomi.getUserConsentStatusForVendor(42)
                        ){

                    _taboola.push({
                        mode: 'thumbnails-a',
                        container: 'taboola-below-article-thumbnails',
                        placement:  'Below Article Thematique',
                        target_type: 'mix'
                    });
                    window.dataLayer.push({
                        'event': 'ad_taboola',
                        'feed': 'Below Article Thematique'
                     });

                        } else {
                            _taboola.push({
                                mode: 'thumbnails-a',
                                container: 'taboola-below-article-thumbnails',
                                placement: 'Below Article Thematique No Consent',
                                target_type: 'mix'
                            });
                            window.dataLayer.push({
                                'event': 'ad_taboola',
                                'feed': 'Below Article Thematique No Consent'
                             });

                        }


                }
            });
        </script>
    </div>
</div>

<div class="su-row su-hidden-xs su-hidden-sm su-hidden-md">
    <div class="su-col-xs-6 su-col-md-24 container-taboola">
        <!-- Pied d'article contenus organiques - Desktop et Tablette -->
        <div id="taboola-below-article-thumbnails-2nd"></div>
        <script type="text/javascript">
            window.thirdparty.push({family: "advertising", name:"taboola", desktop_only: true,
                fn: function(){


                    _taboola.push({
                        mode: 'organic-thumbnails-a',
                        container: 'taboola-below-article-thumbnails-2nd',
                        placement: 'Below Article Thumbnails 2nd',
                        target_type: 'mix'
                    });


                }
            });
        </script>
    </div>
</div>


<div class="su-row margin-standard">
    <div class="su-col-xs-6 su-col-md-24">
        <!-- digiteka -->
        <div id="ultimedia_wrapper"></div>
        <script type="text/javascript">
            window.thirdparty.push({family: "business", name:"digiteka",
                fn: function(){
                    if( !window.getDfpVars) return;

                    var params = [], dfp_vars = getDfpVars();

                    ['oftp', 'ofts', 'ville', 'dpt', 'zc', 'refonteOf', 'cp', 'device', 'pagetype'].forEach(function(ciblage){
                        if (dfp_vars[ciblage] && dfp_vars[ciblage] != '') {
                            params.push(ciblage + '=' + dfp_vars[ciblage]);
                        }
                    });
                    if(window.dfpTest) params.push('dfptest=test' + window.dfpTest);

                    window.ULTIMEDIA_tagparam = params.join('&');

                    if (Didomi.getUserConsentStatusForPurpose('publicite-NWXipz6M') && typeof window.ppid==='function'){
                        window.ULTIMEDIA_tagparam+="&ppid=gamv1"+window.ppid(1);
                    }
                }
            });

        </script>
    </div>
</div>


<div class="su-row margin-standard">
    <div class="su-col-md-8 container-taboola">
        <div id="taboola-native-1st"></div>
        <!-- widget taboola OFM -->
        <script type="text/javascript">
            window.thirdparty.push({family: "advertising", name:"taboola",
                fn: function(){


                    _taboola.push({
                        mode: 'organic-thumbnails-b',
                        container: 'taboola-native-1st',
                        placement: 'Native 1st',
                        target_type: 'mix'
                    });


                }
            });
        </script>
    </div>
    <div class="su-col-md-8 container-taboola">
        <div id="taboola-native-2nd"></div>
        <script type="text/javascript">
            window.thirdparty.push({family: "advertising", name:"taboola",
                fn: function(){


                    _taboola.push({
                        mode: 'organic-thumbnails-b',
                        container: 'taboola-native-2nd',
                        placement: 'Native 2nd',
                        target_type: 'mix'
                    });


                }
            });
        </script>
    </div>
    <div class="su-col-md-8 container-taboola">
        <div id="taboola-native-3rd"></div>
        <script type="text/javascript">
            window.thirdparty.push({family: "advertising", name:"taboola",
                fn: function(){


                    _taboola.push({
                        mode: 'organic-thumbnails-b',
                        container: 'taboola-native-3rd',
                        placement: 'Native 3rd',
                        target_type: 'mix'
                    });


                }
            });
        </script>
    </div>
</div>



<!-- Widget OF emploi mobile -->
<div class="su-row margin-standard su-hidden-lg su-hidden-xl">
    <div class="su-col-xs-6 su-col-md-24">
        <div id="ofm_emploi"><div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-ofm-emploi&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP ofm&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.5.1&amp;quot;}]"  id="bloc_3quarts_pub_3__parentOf__widget_emploi"  class="_b"><section class="ofm-taboola ofm-emplois">
    <a target="_blank" href="https://www.ouestfrance-emploi.com/recherche-emploi?at_platform=ouest-france.fr&amp;at_medium=widget&amp;at_campaign=widget&amp;at_content=of-widget-mobile" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/13755fde67fa7f6eb97f1c991c9a1a63-ofe-visuel01-362x320.png?client_id=cmsfront&amp;sign=680990941aa5c75dca9cee0e42e6306870ec5e10382122269f6155fd21b95af4"}'>
    <p class="surligne">De nouvelles offres</p>
    <p class="surligne">d'emploi<span class="small">aujoud’hui</span></p>

    <p>Recherchez un emploi parmi<br />33 031 offres d'emploi</p>
<button class="su-button su-primary su-small">C'est par ici !</button>
        <div class="logo-container"><span class="logo red">ouestfrance</span>
            <span class="logo blue">-emplois.com</span></div>
    </a>
</section>
</div></div>
    </div>
</div>

<div class="su-row margin-standard su-hidden-lg su-hidden-xl">
    <div class="su-col-xs-6 su-col-md-24">
        <div    id="bloc_3quarts_pub_3__parentOf__codepromo"  class="_b"></div>
    </div>
</div>

<script type="text/javascript">
    /* collapse */
    window.thirdparty.push({family: "advertising", name:"taboola",
        fn: function(){},
        err: function(){
            document.querySelector('.feed-taboola').classList.add('feed-abo')
        }
    });
</script>

</div>
</div>
                <div    id="bloc_3quarts_pub_ofm_amp"  class="_b"></div>

                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-revive-x10-x14&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform-block-provider-revive&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.4.1&amp;quot;}]"  class="_b su-visible-lg su-visible-xl" id="bloc_3quarts_x10" ><div class="bp-revive_x10_x14 x14-v4 x10-v4" style="--bp-revive-txt-color: #FFFFFF; --bp-revive-btn-color: #F15157; --bp-revive-btn-bgcolor: #FFFFFF;  --bp-revive-bgcolor: #F15157;   --bp-revive-illustation: url(https://media.ouest-france.fr/v1/pictures/d404ee963fb8fa366f44f91dca135b2f-screen-appli-of.png?client_id&#61;cmsfront&amp;sign&#61;aa6103509dd15e984f02128e3d9bef401e1e00ffedf34838d41d5a0980dfcfc2); ">
    <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/8ac78ae977e4aea52a58a959cddc4fc9-app-store-2x.png?client_id=cmsfront&sign=60ecb64912e9a34783ce74b0ae0c919897ccf939553fb073269d470d78ae7a9f"}' alt="logo App Store"><img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/8eb3473e498ebe5b5429382c5e7ed483-google-play-2x.png?client_id=cmsfront&sign=90b4fce3703b822ccf1de65dd68b4a015195073d58a15dd5f21511622db73254"}' alt="logo Google Play">

    <p class="titre">L’appli, l’info en temps réel !</p>

    <p class="sous-titre">Suivez l'actualité qui vous intéresse en ajoutant vos villes et thématiques favorites.</p>

    <button class="su-button su-primary su-stroke">Je télécharge</button>
    <a href="https://app.adjust.com/3justr3?engagement_type&#61;fallback_click&amp;fallback&#61;https%3A%2F%2Fwww.ouest-france.fr%2Fservices%2Fnos-applis-mobiles%2F" aria-label="L’appli, l’info en temps réel !"></a>
</div>
</div>
                <div    class="_b su-visible-lg su-visible-xl" id="inscription_newsletter" ></div></div>

        <div class="su-col-lg-8 su-col-xl-6 contenu-tertiaire">
                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-revive&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform-block-provider-revive&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.1.0&amp;quot;}]"  class="_b su-visible-lg su-visible-xl" id="bloc_1quart_1" ></div>
                <div    class="_b su-visible-lg su-visible-xl" id="redac_bis" ></div>

                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;pub-param&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Blocktopus PROD pubs&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.0.0&amp;quot;}]"  class="_b su-visible-lg su-visible-xl" id="bloc_1quart_pub_1" ><div id="pub_pave1" class="pub "></div></div>
                    <div    id="redac_2"  class="_b"></div>
                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;en-continu&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;fix temporaire vv&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;19.0.0&amp;quot;}]"  id="bloc_1quart_2"  class="_b"><section class="zone-en-continu  " data-trk-internal-link="bloc-en-continu">
    <div>
        <span class="su-h2  su-with-link ">
          <a title="Voir tous les articles de En continu" href="/actualite-en-continu/" data-trk-internal-link="bloc-en-continu-titre">En continu</a>
        </span>
    </div>

<ul class="onglets-entete">
        <li><a data-trk-internal-link="onglet en-continu Une" data-ofonglet='{"cont":".onglets-dma","ong":".onglet-dma-1"}' class="onglets-dma " href="javascript:;">Une</a></li>
        <li><a data-trk-internal-link="onglet en-continu Entreprises" data-ofonglet='{"cont":".onglets-dma","ong":".onglet-dma-2"}' class="onglets-dma ofonglet-on" href="javascript:;">Entreprises</a></li>
        
        
    </ul>  
    
  
  	<div class="onglets-dma onglet-dma-1 ">
    	<div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;editorial-block-provider/content-list&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Edito&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.5.0&amp;quot;}]"  id="bloc_1quart_2__parentOf__liste_onglet_1" class="_b"><!-- Teasers text --><ul class="sous-onglet-dma sous-onglet-dma-1 ofonglet-on groupe-teasers-texte">
        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T17:13:39+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

17h13</time></div><a class="" href="https://www.ouest-france.fr/sport/football/coupe-d-afrique-des-nations/direct/direct-cote-d-ivoire-nigeria-suivez-le-match-du-groupe-a-de-la-can-en-live-69d9b123-b12c-4cdf-b54e-d179cb2b25e4" data-trk-internal-link="bloc-en-continu-articles"><i class="live-icon"></i>&nbsp;DIRECT. Côte d&#39;Ivoire - Nigeria : suivez le match du groupe A de la CAN en live</a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T17:13:19+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

17h13</time></div><a class="" href="https://www.ouest-france.fr/sport/handball/euro/direct-france-croatie-suivez-le-match-des-bleus-a-leuro-de-handball-en-live-e36064fc-0f1e-461f-bfdc-164e8864cc48" data-trk-internal-link="bloc-en-continu-articles"><i class="live-icon"></i>&nbsp;DIRECT. France - Croatie : suivez le match des Bleus à l’Euro de handball en live</a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T17:12:31+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

17h12</time></div><a class="" href="https://www.ouest-france.fr/meteo/neige/neige-des-images-satellites-montrent-lampleur-de-lepisode-actuel-8aba6f98-b611-11ee-be97-0ca6f5a426b0" data-trk-internal-link="bloc-en-continu-articles">Neige : des images satellites montrent l’ampleur de l’épisode actuel</a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T17:12:23+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

17h12</time></div><a class="" href="https://www.ouest-france.fr/societe/faits-divers/abandonnee-pendant-deux-mois-sur-un-balcon-une-chienne-retrouvee-affamee-et-frigorifiee-a-toulouse-380b5f6c-b618-11ee-a06e-10925c317fdf" data-trk-internal-link="bloc-en-continu-articles">Abandonnée pendant deux mois sur un balcon, une chienne retrouvée affamée et frigorifiée à Toulouse</a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T17:12:01+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

17h12</time></div><a class="" href="https://www.ouest-france.fr/sport/tennis/open-d-australie/open-daustralie-on-y-croyait-dur-comme-fer-cazaux-et-son-coach-etait-confiant-avant-rune-a6a9f61c-b60f-11ee-be97-0ca6f5a426b0" data-trk-internal-link="bloc-en-continu-articles">Open d’Australie. « On y croyait dur comme fer » : Cazaux et son coach étaient confiant avant Rune</a></article></li>

        
        
            

        
            

        
    </ul><!-- Boutons mobile -->
    <!-- / Boutons mobile --></div>
    </div>
  	<div class="onglets-dma onglet-dma-2 ofonglet-on">
    	<div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;editorial-block-provider/content-list&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Edito&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.5.0&amp;quot;}]"  id="bloc_1quart_2__parentOf__liste_onglet_2" class="_b"><!-- Teasers text --><ul class="sous-onglet-dma sous-onglet-dma-1 ofonglet-on groupe-teasers-texte">
        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T17:08:54+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

17h08</time></div><a class="" href="https://www.ouest-france.fr/medias/television/qui-veut-etre-mon-associe-le-fondateur-dinga-pense-que-tony-parker-a-ete-dissuade-70600346-b617-11ee-a06e-10925c317fdf" data-trk-internal-link="bloc-en-continu-articles">« Qui veut être mon associé ? » : le fondateur d’INGA pense que Tony Parker a été « dissuadé »</a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T17:06:06+01:00">
            <span class="su-source source-libelle su-cockade-co"
    
        aria-description="Le Courrier de l'Ouest"
    ></span>

17h06</time></div><a class="monet " href="https://www.ouest-france.fr/pays-de-la-loire/saumur-49400/emploi-renoval-menuiseries-en-plein-developpement-depuis-son-implantation-a-saumur-eea52ee2-b546-11ee-b2a2-ccb95da3b2ac" data-trk-internal-link="bloc-en-continu-articles">Emploi : Rénoval-menuiseries en plein développement depuis son implantation à Saumur&nbsp;<span><i class="su-icon">bloqué</i></span></a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T16:58:21+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

16h58</time></div><a class="" href="https://www.ouest-france.fr/economie/entreprises/industrie-ce-specialiste-espagnol-des-turbomachines-sinstalle-a-nantes-et-recrute-1892c2ca-b0a9-11ee-82ae-73e88db45bf9" data-trk-internal-link="bloc-en-continu-articles">Industrie. Ce spécialiste espagnol des turbomachines s’installe à Nantes et recrute</a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T16:56:05+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

16h56</time></div><a class="" href="https://www.ouest-france.fr/bretagne/bazouges-la-perouse-35560/pres-de-fougeres-depuis-les-debuts-ils-sont-dans-lentreprise-riaux-276b3774-b60c-11ee-a06e-10925c317fdf" data-trk-internal-link="bloc-en-continu-articles">Près de Fougères. Depuis les débuts, ils sont dans l’entreprise Riaux</a></article></li>

        
            
        <li class="dma "><article><div class="metadata  cocarde-html"><time class="meta-time" datetime="2024-01-18T14:28:16+01:00">
                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>

14h28</time></div><a class="" href="https://www.ouest-france.fr/medias/television/qui-veut-etre-mon-associe-cet-entrepreneur-rennais-a-convaincu-tony-parker-4deb1aea-b5e9-11ee-b2a2-ccb95da3b2ac" data-trk-internal-link="bloc-en-continu-articles">« Qui veut être mon associé ? » L’invention de cet entrepreneur rennais a convaincu Tony Parker</a></article></li>

        
        
            

        
            

        
    </ul><!-- Boutons mobile -->
    <!-- / Boutons mobile --></div>
    </div>
  	<div class="onglets-dma onglet-dma-3 ">
    	<div    id="bloc_1quart_2__parentOf__liste_onglet_3" class="_b"></div>
    </div>
  	<div class="onglets-dma onglet-dma-4 ">
    	<div    id="bloc_1quart_2__parentOf__liste_onglet_4" class="_b"></div>
    </div>

</section></div>

                <div    class="_b su-visible-xs su-visible-sm su-visible-md" id="bloc_1quart_pub_mft1" ></div><div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;taboola&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Blocktopus PROD pubs&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;105.0.0&amp;quot;}]"  class="_b su-visible-lg su-visible-xl" id="bloc_1quart_pub_2" ><div id="taboola-article" style="padding: 0 2rem;" class="pub">
    <div>
        <span style="display: inline-block; vertical-align: bottom; line-height: 1.9rem; font-weight: 700">Ailleurs sur le Web</span>
        <span style="display: inline-block; vertical-align: bottom; line-height: 1.4rem; font-size: 1rem; color:#000000; margin-left: 1rem">Contenus Sponsorisés</span>
    </div>
    <div id="taboola-right-rail-thumbnails"></div>
    <script type="text/javascript">
        window.thirdparty.push({family: "advertising", name:"taboola", desktop_only: true,
            fn: function(){
              

                _taboola.push({
                    mode: "thumbnails-rr",
                    container: "taboola-right-rail-thumbnails",
                    placement: "Right Rail Thumbnails",
                    target_type: "mix"
                });
                  

            },
            err: function(){
                document.querySelector('#taboola-article').classList.add('su-hidden');
            }
        });
    </script>
</div></div>

                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;html-statique&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;blocktopus-of_fd0be40a-1825-4a84-ba72-8047bbf58aa5&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;89.0.0&amp;quot;}]"  id="bloc_1quart_2_bis"  class="_b"><div>	
	<div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-ofm-emploi&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP ofm&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.5.1&amp;quot;}]"  id="bloc_1quart_2_bis__parentOf__position1"  class="_b"><section class="zone-liste ofm-widget-seul ofm-emploi">
        <a class="su-row titre-liste su-h2" href="https://www.ouestfrance-emploi.com/?at_platform=ouest-france.fr&amp;at_medium=widget&amp;at_campaign=widget&amp;at_content=of-widget-seul" target="_blank">
            <div class="su-col-xs-6">Offres d&#39;emploi</div>
            <div class="su-col-xs-6 logo-container">
                Avec&nbsp;<span class="logo red">ouestfrance</span><span class="logo blue">-emploi.com</span>
            </div>
        </a>
        <div class="su-articles-list groupe-teasers-small-medias">
        <article class="
    teaser-media su-clearfix zone-active
"><a target="_blank" class="titre-lien" href="https://www.ouestfrance-emploi.com/offre-d-emploi/devenez-conducteur-d-autocar-scolaire-h-f-11012405/?at_platform=ouest-france.fr&amp;at_medium=widget&amp;at_campaign=widget&amp;at_content=of-widget-seul">
                <span class="titre">DEVENEZ CONDUCTEUR D&#39;AUTOCAR SCOLAIRE (H/F)</span>
                </a>

            <div class="metadata">
    <p class="ville">CDI - VOYAGES CORDIER</p>
    <p class="prix">Montrevault-sur-Èvre</p>
    <p class="lien">Voir l'offre</p>
</div>
        </article>
        <article class="
    teaser-media su-clearfix zone-active
"><a target="_blank" class="titre-lien" href="https://www.ouestfrance-emploi.com/offre-d-emploi/technicien-tachygraphe-h-f-11179414/?at_platform=ouest-france.fr&amp;at_medium=widget&amp;at_campaign=widget&amp;at_content=of-widget-seul">
                <span class="titre">Technicien Tachygraphe (H/F)</span>
                </a>

            <div class="metadata">
    <p class="ville">CDI - DAMTACHY (Groupe Alliance Automotive)</p>
    <p class="prix">Ancenis</p>
    <p class="lien">Voir l'offre</p>
</div>
        </article>
        <article class="
    teaser-media su-clearfix zone-active
"><a target="_blank" class="titre-lien" href="https://www.ouestfrance-emploi.com/offre-d-emploi/agent-de-controle-stationnement-voirie-h-f-11782136/?at_platform=ouest-france.fr&amp;at_medium=widget&amp;at_campaign=widget&amp;at_content=of-widget-seul">
                <span class="titre">Agent de contrôle stationnement voirie (H/F)</span>
                </a>

            <div class="metadata">
    <p class="ville">CDI - CITEDIA GIE</p>
    <p class="prix">Rennes</p>
    <p class="lien">Voir l'offre</p>
</div>
        </article>
    </div>

    <a target="_blank" class="su-button su-primary su-fullwidth su-small" href="https://www.ouestfrance-emploi.com/recherche-emploi/?at_platform=ouest-france.fr&amp;at_medium=widget&amp;at_campaign=widget&amp;at_content=of-widget-seul">
        Rechercher un emploi
    </a>
</section>
</div>	
  	<div    id="bloc_1quart_2_bis__parentOf__position2"  class="_b"></div>
  	<div    id="bloc_1quart_2_bis__parentOf__position3"  class="_b"></div>
</div></div>

                <div    class="_b su-visible-lg su-visible-xl" id="bloc_1quart_pub_3" ></div>
    <div    id="bloc_1quart_entreprise_1"  class="_b"></div>
    <div    id="bloc_1quart_entreprise_2"  class="_b"></div>

                    <div    class="_b su-visible-lg su-visible-xl" id="bloc_1quart_3" ></div>
                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;editorial-block-provider/content-list&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Edito&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.5.0&amp;quot;}]"  id="bloc_1quart_3_bis"  class="_b"><section class="zone-liste  "  ><span class="su-h2 su-with-margin su-with-link"><a title="Voir tous les contenus de Décideurs" href="/economie/entreprises/nominations/">Décideurs</a></span>
<div class="su-articles-list liste-articles groupe-teasers-small-medias  " >
        <div class="su-clearfix ">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Cl&eacute;ment Eulry prend la t&ecirc;te d&rsquo;Airbnb en France et en Belgique, a annonc&eacute; l&rsquo;entreprise ce mercredi 10&nbsp;janvier 2024."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxMzZiYjQ0YjU2OGIwYWJjZTJjZjZhYzZiZmE4NTBmYTU?width=375&height=210&focuspoint=51%2C34&cropresize=1&client_id=bpeditorial&sign=2b26076e45789678acf186994a143b96ee3dd1d4cc2b5d17c7fc7bb1069cbfa8 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMzZiYjQ0YjU2OGIwYWJjZTJjZjZhYzZiZmE4NTBmYTU?width=630&height=354&focuspoint=51%2C34&cropresize=1&client_id=bpeditorial&sign=06d5a8fd2a99cc3108a84e246e4307000e48c13d1a9651499519ae2172b54fca 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMzZiYjQ0YjU2OGIwYWJjZTJjZjZhYzZiZmE4NTBmYTU?width=940&height=528&focuspoint=51%2C34&cropresize=1&client_id=bpeditorial&sign=158eea0941aef888d02622ae39f4e35e08f45abba1aa433aa3dbf3dff727adf0 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/economie/entreprises/airbnb/airbnb-designe-un-nouveau-patron-pour-la-france-a-lapproche-des-jeux-olympiques-cdaa733a-af9e-11ee-82ae-73e88db45bf9">
        
        <span class="su-title titre ">
            Airbnb désigne un nouveau patron pour la France à l’approche des Jeux olympiques
        </span>
    </a><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-10T11:25:33+01:00">10/01</time></div></div></article>

        </div>
        <div class="su-clearfix ">
            

<!-- Teaser -->
<article class="teaser-media-small    su-margin-bottom-0" >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Thouars, mercredi 6&nbsp;d&eacute;cembre. Jusqu&rsquo;ici &agrave; Paris, Shannon Joly a pleinement emm&eacute;nag&eacute; l&rsquo;&eacute;t&eacute; dernier."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxODIzN2Q1NTRlOWI0ZmQ4ZjlkNGYzYjkyMDk5NzUzMjI?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=c2aa930b662477ac89c5ab2272562b430a8db2823023dcf12bbd11819120a868 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxODIzN2Q1NTRlOWI0ZmQ4ZjlkNGYzYjkyMDk5NzUzMjI?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=4cc875578584c91f5be33165ec9bfa5495047e0176568f5ed9927ad7620fd2cc 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxODIzN2Q1NTRlOWI0ZmQ4ZjlkNGYzYjkyMDk5NzUzMjI?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=74ecefba1485c960ad6bed6dd436321d37ac433b85651388a51041c1800d8b9b 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/nouvelle-aquitaine/thouars-79100/portrait-directrice-a-la-bourse-de-londres-pourquoi-elle-a-tout-quitte-pour-cette-ville-rurale-9e258a5a-9527-11ee-a573-1d8641f728fa">
        
        <span class="su-title titre monet ">
            PORTRAIT. Directrice à la Bourse de Londres, pourquoi elle a tout quitté pour cette ville rurale
                
                &nbsp;<i class="su-icon">bloqué</i>
        </span>
    </a><div class="metadata ">            <span class="su-source source-libelle su-cockade-co"
    
        aria-description="Le Courrier de l'Ouest"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-06T14:34:18+01:00">06/01</time></div></div></article>

        </div>
</div>
        

        <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;html-display&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;blocktopus-of_fd0be40a-1825-4a84-ba72-8047bbf58aa5&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;52.0.0&amp;quot;}]"  id="bloc_1quart_3_bis__parentOf__bouton"  class="_b"><div class="su-text-center"><a class="su-button su-secondary su-illustration-icon" href="mailto:contact@entreprises.ouest-france.fr" title="Déposez une nomination">Déposez une nomination<i class="su-icon">suivant</i></a></div></div>

</section></div>

                <div    class="_b su-visible-md" id="bloc_1quart_4" ></div>

                <div    id="bloc_1quart_5"  class="_b"></div>

                <div    id="bloc_1quart_6"  class="_b"></div>

                <div    class="_b su-visible-lg su-visible-xl" id="bloc_1quart_pub_4" ></div><div    class="_b su-visible-lg su-visible-xl" id="bloc_1quart_pub_6" ></div>

                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;pub-param&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Blocktopus PROD pubs&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.0.0&amp;quot;}]"  class="_b su-visible-lg su-visible-xl sticky" id="bloc_1quart_pub_7" ><div id="pub_pave2" class="pub "></div></div>
            </div>

    </div>

    

    <div    id="bloc_x10"  class="_b"></div>

    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;editorial-block-provider/top-actu--twig&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Edito&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.5.0&amp;quot;}]"  id="pleine_page_2"  class="_b"><section class="liste-articles zone-liste zone-liste-focus-1-5 zone-liste-focus-1-6 "  ><span class="su-h2 su-with-margin">Les tops articles sur : Entreprises</span>
<div class="su-row su-articles-list  " >        <div class="su-col-lg-12 first"><!-- Focus --><article class="focus        metadata-bottom"  ><div class="zone-active">
<div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Arnaud Lerebourg est gestionnaire de la flotte des v&eacute;los et des trottinettes &eacute;lectriques en libre-service &agrave; La Roche-sur-Yon (Vend&eacute;e)."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxMmEzZTljNjQxMzM4MmNiYjdmNzM0NzJhYzUwOTIwZDQ?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=84a403f6fca1f8eda6f8fe4d1ade41c94bd41c051a7ce45b1c952d5051b3c376 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMmEzZTljNjQxMzM4MmNiYjdmNzM0NzJhYzUwOTIwZDQ?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=0a7041792c335e815b13f89367b5154ebd4952df953810401d9862c2df4a6b87 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMmEzZTljNjQxMzM4MmNiYjdmNzM0NzJhYzUwOTIwZDQ?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=2de413b655b691e6cbcfb3051d1291c9e8c57b08a985f6bb65ddece4f748dacf 940w"}'
                        />
</figure></div>

        
            
                <a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/pays-de-la-loire/vendee/en-vendee-il-passe-de-petit-delinquant-a-patron-parfois-jai-du-mal-a-y-croire-23c46462-b3ad-11ee-889e-f4c642b1c23a">
        
        <span class="su-title titre monet ">
            « Parfois, j’ai du mal à y croire » : en Vendée, Arnaud est passé de petit délinquant à patron
                
                &nbsp;<i class="su-icon">bloqué</i>
        </span>
    </a>
            
        
    </div><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-16T07:01:16+01:00">16/01</time></div></article></div>


        
        
        
        
                <div class="su-col-lg-6 groupe-teasers-media teasers-grand"><!-- Teaser --><article class="teaser-media su-clearfix    " ><div class="zone-active "  data-trkTopArticles="Que deviennent les demandeurs d’emploi qui sortent des listes de France Travail ?"><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="En septembre&nbsp;2022, les sorties pour radiations administratives &eacute;taient stables et tr&egrave;s faibles."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxNzFlZTViNTZjODNhMjcwM2Q5MTUxMGQyNDUwZGM5MTA?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=04df706ac8f79da67432eb14f04888a142f34837273a9c6c25b999413ef9698d 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxNzFlZTViNTZjODNhMjcwM2Q5MTUxMGQyNDUwZGM5MTA?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=84b955a54aeb70c64a4c6280f0f6a0377f0c26cf3f340496ebdd9678ea51df8e 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxNzFlZTViNTZjODNhMjcwM2Q5MTUxMGQyNDUwZGM5MTA?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=6ef9dfc5f730961c63aa499b02334e98aa1b1b66bc233227c5248c32718a0220 940w"}'
                        />
</figure></div><div class="teaser-text"><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/economie/emploi/chomage/que-deviennent-les-demandeurs-demploi-qui-sortent-des-listes-de-france-travail-de570c28-b455-11ee-b2a2-ccb95da3b2ac">
        
        <span class="su-title titre ">
            Que deviennent les demandeurs d’emploi qui sortent des listes de France Travail ?
        </span>
    </a><p class="su-standfirst chapeau    su-hidden-xs su-hidden-sm su-hidden-md">Les demandeurs d’emploi qui sortent des listes de France Travail le font-ils parce qu’ils ont retrouvé un travail ? Si oui, l’emploi est-il précaire ou pérenne ? La dernière analyse, que vient de publier la Dares et qui décortique des données de septembre 2022, montre un taux de sortie en emploi alors à son plus haut depuis 2011.</p></div></div><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-16T18:01:37+01:00">16/01</time></div></article></div>
        
        
        
        
                <div class="su-col-lg-6 groupe-teasers-media teasers-grand"><!-- Teaser --><article class="teaser-media su-clearfix    " ><div class="zone-active "  data-trkTopArticles="L’entreprise Alain Macé, à côté de Saint-Brieuc, est en redressement judiciaire"><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Alain Mac&eacute; entreprises, dont le si&egrave;ge et l&rsquo;atelier se trouvent &agrave; Tr&eacute;gueux, pr&egrave;s de Saint-Brieuc, est plac&eacute;e en proc&eacute;dure de redressement judiciaire."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDZjZTIzNGU2ZDAxZTk0NjU0ZmEwYzEyMTg4NmMxNjE?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=3f001838ec216e4d74ce55aa66d05e22795b08fe56030f9f105698b7fb1fc628 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDZjZTIzNGU2ZDAxZTk0NjU0ZmEwYzEyMTg4NmMxNjE?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=203afac16815be099e49ec715dcb74623a23e022a34e186d46a7e7b9e5a1d476 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDZjZTIzNGU2ZDAxZTk0NjU0ZmEwYzEyMTg4NmMxNjE?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=21bd1c5a7150f98e2ad229e9dae2fccea244d88d84f26dc2b4dfa5cffd3f8caf 940w"}'
                        />
</figure></div><div class="teaser-text"><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/economie/entreprises/lentreprise-alain-mace-a-cote-de-saint-brieuc-est-en-redressement-judiciaire-21cafdaa-b453-11ee-b2a2-ccb95da3b2ac">
        
        <span class="su-title titre ">
            L’entreprise Alain Macé, à côté de Saint-Brieuc, est en redressement judiciaire
        </span>
    </a><p class="su-standfirst chapeau    su-hidden-xs su-hidden-sm su-hidden-md">Le tribunal de commerce de Saint-Brieuc (Côtes-d’Armor) a ouvert une procédure de redressement judiciaire pour Alain Macé entreprises, dont le siège se trouve à Trégueux. La société est en cessation de paiements depuis juillet 2022. Redressement ne veut pas dire arrêt de l’activité.</p></div></div><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-17T08:24:04+01:00">17/01</time></div></article></div>
        
        
        
        
        
        
        
        
        
        
        
        
        
</div>
        <div class="su-row su-articles-list groupe-teasers-media teasers-grand">
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                    <div class="su-col-lg-6 en-plus su-visible-lg su-visible-xl"><!-- Teaser --><article class="teaser-media su-clearfix    " ><div class="zone-active "  data-trkTopArticles="« Je ne me payais presque plus » : le restaurant Hippocampe ferme à Cesson-Sévigné"><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Jean-Fran&ccedil;ois Bergeault, g&eacute;rant depuis pr&egrave;s de treize ans du restaurant L&rsquo;Hippocampe."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTcwMzQxYTgzMDAxMTU0YWYyOTE2MGNiYWVmZjk0MzU?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=fdd7bdd6a2dbd03e15a225214e55870b1f203b96db17b23913421b1f63baf71e 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTcwMzQxYTgzMDAxMTU0YWYyOTE2MGNiYWVmZjk0MzU?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=b6fda67118cc12342c32939ea167c32ba87aa03c4c71b2759e40e4032e0212b4 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTcwMzQxYTgzMDAxMTU0YWYyOTE2MGNiYWVmZjk0MzU?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=ee6fa5b833da7f136703d68ced8ed20825dac19178cbf6add9f575072e3df851 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/bretagne/cesson-sevigne-35510/je-ne-me-payais-presque-plus-le-restaurant-hippocampe-ferme-a-cesson-sevigne-da0a1912-b53b-11ee-a06e-10925c317fdf">
        
        <span class="su-title titre ">
            « Je ne me payais presque plus » : le restaurant Hippocampe ferme à Cesson-Sévigné
        </span>
    </a></div><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-17T16:43:02+01:00">17/01</time></div></article></div>
            
            
            
            
            
            
                    <div class="su-col-lg-6 en-plus su-visible-lg su-visible-xl"><!-- Teaser --><article class="teaser-media su-clearfix    " ><div class="zone-active "  data-trkTopArticles="L’État versera environ 850 millions à ArcelorMittal, plus gros émetteur de CO2 en France"><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Les usines d&rsquo;ArcelorMittal &agrave; Dunkerque (notre photo) et Fos-sur-Mer sont les les deux plus gros &eacute;metteurs de CO2 en France."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxZGE1MWE4MmQ3N2QzZTU3NTJhYzhiNzdhZDMzY2Q4OGY?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=a75e07ef2ff9157a51e5a575e2804fde4b05b87966c55af4b9ff56e0dd0c293c 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZGE1MWE4MmQ3N2QzZTU3NTJhYzhiNzdhZDMzY2Q4OGY?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=040dde3ecaef2453c10cb3e407e841fea2a8688a5f3eff31d67c7fcaf8fcdae5 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZGE1MWE4MmQ3N2QzZTU3NTJhYzhiNzdhZDMzY2Q4OGY?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=96b2e28a567f315ae3a3d1c165edc4a6b66098f8b1276dd336c0e2e45bfa0046 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/environnement/ecologie/transition-ecologique/letat-versera-environ-850-millions-a-arcelormittal-plus-gros-emetteur-de-co2-en-france-b7706068-b47e-11ee-b2a2-ccb95da3b2ac">
        
        <span class="su-title titre ">
            L’État versera environ 850 millions à ArcelorMittal, plus gros émetteur de CO2 en France
        </span>
    </a></div><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-17T10:40:14+01:00">17/01</time></div></article></div>
            
            
            
            
            
            
                    <div class="su-col-lg-6 en-plus su-visible-lg su-visible-xl"><!-- Teaser --><article class="teaser-media su-clearfix    " ><div class="zone-active "  data-trkTopArticles="« On ne s’en sort plus » : en Ille-et-Vilaine, les salariés de l’usine Brient en grève"><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Les salari&eacute;s de Brient en gr&egrave;ve devant le site d&rsquo;Antrain, &agrave; Val-Couesnon."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxN2IzNzg1MzVkYmYzMmQ3Mzk4NTk3MGY0N2NlNTIxYzU?width=375&height=210&focuspoint=49%2C56&cropresize=1&client_id=bpeditorial&sign=e59e0c74f8905613a5073fa49e29dd9f3b3d3e3f6689fec7a4df9cc882bba473 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxN2IzNzg1MzVkYmYzMmQ3Mzk4NTk3MGY0N2NlNTIxYzU?width=630&height=354&focuspoint=49%2C56&cropresize=1&client_id=bpeditorial&sign=8ce39a623c9b9cc27721ef1dff94c3e1808aeddc5a7fc9b03f5e0fc23dd89825 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxN2IzNzg1MzVkYmYzMmQ3Mzk4NTk3MGY0N2NlNTIxYzU?width=940&height=528&focuspoint=49%2C56&cropresize=1&client_id=bpeditorial&sign=f9a65b6d227a7eb396c000ec32a36180c74d56691b00934f9d7df53bfbbd6aef 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/bretagne/ille-et-vilaine/on-ne-sen-sort-plus-en-ille-et-vilaine-les-salaries-de-lusine-brient-en-greve-5ba8eeaa-b521-11ee-b2a2-ccb95da3b2ac">
        
        <span class="su-title titre monet ">
            « On ne s’en sort plus » : en Ille-et-Vilaine, les salariés de l’usine Brient en grève
                
                &nbsp;<i class="su-icon">bloqué</i>
        </span>
    </a></div><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-17T13:00:10+01:00">17/01</time></div></article></div>
            
            
            
            
            
            
                    <div class="su-col-lg-6 en-plus su-visible-lg su-visible-xl"><!-- Teaser --><article class="teaser-media su-clearfix    su-margin-bottom-0" ><div class="zone-active "  data-trkTopArticles="Krampouz, leader mondial de la crêpière, s’agrandit près de Quimper"><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Krampouz, qui fabrique cr&ecirc;pi&egrave;res, gaufriers et autres planchas, pousse les murs &agrave; Pluguffan, pr&egrave;s de Quimper."
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTUxMTU3NjkxNzY5MDc0ZmM0ZGExZGVkODhhM2RkYzk?width=375&height=210&focuspoint=50%2C53&cropresize=1&client_id=bpeditorial&sign=7ea30a8bb98af25a97085c35c74cc53d58fb8b2f1ec2b953f9c1cfe35165d854 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTUxMTU3NjkxNzY5MDc0ZmM0ZGExZGVkODhhM2RkYzk?width=630&height=354&focuspoint=50%2C53&cropresize=1&client_id=bpeditorial&sign=96e7812fbe4e16b1bfab1023b8152a851e850f923f00a55d5e41d0f7de936e06 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTUxMTU3NjkxNzY5MDc0ZmM0ZGExZGVkODhhM2RkYzk?width=940&height=528&focuspoint=50%2C53&cropresize=1&client_id=bpeditorial&sign=016f74352333b1a987a7259fabe517758336f4a961ffa8badba029e76e5f2c97 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="image" class="titre-lien"   href="https://www.ouest-france.fr/bretagne/finistere/finistere-le-site-de-krampouz-sagrandit-a-pluguffan-ce36bad2-b47d-11ee-b2a2-ccb95da3b2ac">
        
        <span class="su-title titre ">
            Krampouz, leader mondial de la crêpière, s’agrandit près de Quimper
        </span>
    </a></div><div class="metadata ">                <span class="su-source source-libelle su-cockade-of"
    
        aria-description="Ouest-France"
    ></span>


<time class="icon-date meta-time" datetime="2024-01-16T18:19:21+01:00">16/01</time></div></article></div>
            
    </div>
        <p class="filtre su-text-center su-hidden-lg su-hidden-xl su-fullwidth"><button class="su-button su-secondary su-small su-action-icon su-show-more" data-sutoggleclass='[{"parent":".filtre","klass":"ouvert"},{"parent":".zone-liste","klass":"liste-visible"},{"klass":"su-active"}]'><span>Voir <i class="su-icon">plus</i></span><span>Voir <i class="su-icon">moins</i></span></button></p>
</section></div>

    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;compo&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;compo&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;4.0.0&amp;quot;}]"  class="_b su-visible-lg su-visible-xl" id="pleine_page_pub_1" ><div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;en-ce-moment-monet-spreadsheet&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;blocktopus-of_fd0be40a-1825-4a84-ba72-8047bbf58aa5&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;31.0.0&amp;quot;}]"  id="pleine_page_pub_1__parentOf__compo_0"  class="_b su-margin-bottom-m"><section class="barre-tags">
    <span class="su-h2 su-with-margin">Nos partenaires<img style="display: inline; vertical-align: baseline; width: 30px;height: 30px;margin-bottom: -5px;margin-left: 10px" class="lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/dc597097a3636c32ac5d5df44363407e-logo-certifie-of.svg"}' alt="Agréé par Ouest-France"></span>
    <div class="swipe-masque">
        <ul class="su-tags" data-ofwidth='{"sel":".swipe-contenu", "touchOnly": true, "mobileOnly": false}'>
        	<li class="swipe-contenu"><a href="https://citations.ouest-france.fr/" title="Citations" target="_blank" data-trkencemmt="part_1">Citations</a></li>
        	<li class="swipe-contenu"><a href="https://lemagdesanimaux.ouest-france.fr/" title="Le Mag des Animaux" target="_blank" data-trkencemmt="part_2">Le Mag des Animaux</a></li>
        	<li class="swipe-contenu"><a href="https://mcetv.ouest-france.fr/" title="MCE TV" target="_blank" data-trkencemmt="part_3">MCE TV</a></li>
        	<li class="swipe-contenu"><a href="https://teteamodeler.ouest-france.fr/" title="Tête à modeler" target="_blank" data-trkencemmt="part_4">Tête à modeler</a></li>
        	<li class="swipe-contenu"><a href="https://trucmania.ouest-france.fr/" title="Truc Mania" target="_blank" data-trkencemmt="part_5">Truc Mania</a></li>
        	<li class="swipe-contenu"><a href="https://bricoleurpro.ouest-france.fr/" title="Bricoleur Pro" target="_blank" data-trkencemmt="part_6">Bricoleur Pro</a></li>
        	<li class="swipe-contenu"><a href="https://sain-et-naturel.ouest-france.fr/" title="Sain et Naturel" target="_blank" data-trkencemmt="part_7">Sain et Naturel</a></li>
        	<li class="swipe-contenu"><a href="https://partir.ouest-france.fr/" title="Quand partir" target="_blank" data-trkencemmt="part_8">Quand partir</a></li>
        	<li class="swipe-contenu"><a href="https://compteur-de-mots.ouest-france.fr/" title="Compteur de mots" target="_blank" data-trkencemmt="part_9">Compteur de mots</a></li>
        </ul>
    </div>
</section></div>
<div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;editorial-block-provider/content-list&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Edito&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.5.0&amp;quot;}]"  id="pleine_page_pub_1__parentOf__compo_1"  class="_b"><section class="zone-liste  "  ><div class="su-articles-list liste-articles groupe-teasers-small-medias  su-row" >
        <div class="su-col-lg-8 ">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="15 id&eacute;es de cr&ecirc;pes originales pour une Chandeleur cr&eacute;tive "
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxODExODBiYzUxYWY5NzFhOGQ5YmExNWZjMTkxMTc0YjQ?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=a7f434d8d484fb550354535f2b46b2de24e86ca948e381bcb194fe7a31f07617 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxODExODBiYzUxYWY5NzFhOGQ5YmExNWZjMTkxMTc0YjQ?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=253e4aba2f345b695fcb6baf14457acb7e30f354c2054380b9c511df970a86ae 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxODExODBiYzUxYWY5NzFhOGQ5YmExNWZjMTkxMTc0YjQ?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=cfb0f5f4385bda9e3232c478403005090bff6022298b741c7853605b168ad4fb 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://teteamodeler.ouest-france.fr/crepes/crepes-sucrees/idees-de-crepes-originales-pour-la-chandeleur">
        
        <span class="su-title titre ">
            15 idées de crêpes originales pour une Chandeleur crétive 
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Tête à modeler"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMTA3NjlhNzIwMmU3M2MxODc1NjMwZmM4NDQ5MjVlYWI3MDE?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;fec2827e9814a5d604952ad8f5ac7a1d5728a1e7e006bdbcd5d0f57d0c77494d"}' alt="Tête à modeler" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:58:51+01:00">09h58</time></div></div></article>

        </div>
        <div class="su-col-lg-8 ">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Parcoursup: Top 5 des meilleurs conseils pour optimiser son dossier !"
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxYWUzMWQxMTlkMGU3ZTI2MTBlNmIxOWEwNzgwYTRmYTI?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=30405b848f3883b67ce1212dfe22516701e1139edbe5ab0279aa8139957b893c 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxYWUzMWQxMTlkMGU3ZTI2MTBlNmIxOWEwNzgwYTRmYTI?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=c79652fc59f3a4d62f2ce560243d6f8c0dd7b5c6998d02ed4b9782100bc8286c 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxYWUzMWQxMTlkMGU3ZTI2MTBlNmIxOWEwNzgwYTRmYTI?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=222b785acb48835ffec5f7ccaa4041797d737d9666d21a7f950e5423fc889291 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://mcetv.ouest-france.fr/mon-mag-campus/orientation-et-formations/parcoursup-top-5-des-conseils-pour-optimiser-son-dossier-17012024/">
        
        <span class="su-title titre ">
            Parcoursup: Top 5 des meilleurs conseils pour optimiser son dossier&nbsp;!
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="MCE TV"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMTExNzQ3OTA3OGQxYjc3ODNmMmIzMTc0Y2FmZTIzOWFjNWE?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;f4896cf4d9df8035fa47892a7d7d7c0b570d890838da3a35d415ecb8b3bd2c0d"}' alt="MCE TV" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:58:05+01:00">09h58</time></div></div></article>

        </div>
        <div class="su-col-lg-8 ">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Peut-on estimer le nombre de poissons dans la mer ? Combien sont-ils ?"
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxNmIyODBmNTM5OTZmNGQyNGYyNmU3NDQ3ZGZkNWViMjU?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=1f137f47b343d981751321a0b061b1bc60f0f4a1ae49651b0c80579abbacae9c 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxNmIyODBmNTM5OTZmNGQyNGYyNmU3NDQ3ZGZkNWViMjU?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=18434b8926a26357aa6ddddd4de45d8cc0aaf1b92b41c747c5ec921881b85f29 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxNmIyODBmNTM5OTZmNGQyNGYyNmU3NDQ3ZGZkNWViMjU?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=d3afe6976af65383a1d1ae25e6ef57c957b469efcbe3fc3d4ccd2ee81e93af17 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://lemagdesanimaux.ouest-france.fr/article-24-peut-on-estimer-nombre-poissons-mer.html">
        
        <span class="su-title titre ">
            Peut-on estimer le nombre de poissons dans la mer&nbsp;? Combien sont-ils&nbsp;?
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Le Mag des Animaux"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMTAxZTU1NmU1MWM2ZGNiY2EyMTAwN2UyZTZmNDc0ZDhhMTY?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;84ccbd080f31431adedd27c3364512c8cf7f1f1dd016c3eff899a80e1f478be4"}' alt="Le Mag des Animaux" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:57:34+01:00">09h57</time></div></div></article>

        </div>
        <div class="su-col-lg-8 en-plus su-visible-lg su-visible-xl">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Lors d&#39;un h&eacute;ritage, comment contester les b&eacute;n&eacute;ficiaires d&#39;une assurance vie ?"
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxNWY0NWYxNjRmZWM4YmI2YzI0MmMyZDNkZjNiNWYzOWI?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=2d957a1b6733437952fc38cbb5fbfa75ad81c0515a8065be88bf9b8adf2278a4 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxNWY0NWYxNjRmZWM4YmI2YzI0MmMyZDNkZjNiNWYzOWI?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=c3a00fd17f5af53716abd41859a1c22fbcb2d64cc86dc3d29cd84561ec7cd37c 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxNWY0NWYxNjRmZWM4YmI2YzI0MmMyZDNkZjNiNWYzOWI?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=37157121deeb4c0aaab54a5c21fe10397dd2718d98316b36fadae349869b5684 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://lemagdusenior.ouest-france.fr/dossier-1725-heritage-comment-contester-beneficiaires-assurance-vie.html">
        
        <span class="su-title titre ">
            Lors d'un héritage, comment contester les bénéficiaires d'une assurance vie&nbsp;?
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Le Mag du Senior"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMTAxOGY4ZThhZDkzNmFjOGM0ZDJkNTZmNWRhY2NlYjBlYjc?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;58bdd8d6f94090738450f54d40a7f234c0f5afd9d249e7978474b7c7c8966991"}' alt="Le Mag du Senior" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:57:07+01:00">09h57</time></div></div></article>

        </div>
        <div class="su-col-lg-8 en-plus su-visible-lg su-visible-xl">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Changer le propri&eacute;taire d&#39;un chat : conseils et proc&eacute;dures ! "
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxN2YyYWI2MjU2NDE3MTQ3YjRmN2MxYTkzYWUyNTQ0NDA?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=8804cd0a418cc65e99586844cd17849ff7767785d4d08817289b697c3b5f6310 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxN2YyYWI2MjU2NDE3MTQ3YjRmN2MxYTkzYWUyNTQ0NDA?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=77dd1b16c6ce61a677fbbc83138de653c220f0b45bef78bddcb39d0c76df87f7 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxN2YyYWI2MjU2NDE3MTQ3YjRmN2MxYTkzYWUyNTQ0NDA?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=fc5e642eb157f8c6728e24ae21e1f7b23f268cc48a2bb22437da761f93c95cac 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://lemagduchat.ouest-france.fr/dossier-1223-changer-proprietaire-chat-conseils-procedures.html">
        
        <span class="su-title titre ">
            Changer le propriétaire d'un chat&nbsp;: conseils et procédures&nbsp;! 
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Le Mag du Chat"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMTAxMGI1MzM0NzFmMjk3YmIxNTAxNjNlZTQxZmExM2Y3YjA?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;9fd2396ddccdc49ed22c59b0cefef28d6cd2107c3a8893f12d4b06aa27bc6e13"}' alt="Le Mag du Chat" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:56:33+01:00">09h56</time></div></div></article>

        </div>
        <div class="su-col-lg-8 en-plus su-visible-lg su-visible-xl">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Comment remplacer le colorant alimentaire en p&acirc;tisserie ?"
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxMzYxZDlmYjEwZjA0YmNkMjIwMWRiM2U3Mzg1ZmMzM2E?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=8d559d84ca4a4489c98079c4fffb91f91f962e2b125f1cb211c2a24a4ea1566b 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMzYxZDlmYjEwZjA0YmNkMjIwMWRiM2U3Mzg1ZmMzM2E?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=4e768b166777e2ba558baf1c0c6a4065dfb0e3c5951acebc0d5279751349668c 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMzYxZDlmYjEwZjA0YmNkMjIwMWRiM2U3Mzg1ZmMzM2E?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=22496d66b502502d9e8d5e98629275708812150c79c591d237fa5f58e479f28e 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://odelices.ouest-france.fr/actualites/astuces-cuisine/comment-remplacer-colorant-alimentaire-patisserie-47280/">
        
        <span class="su-title titre ">
            Comment remplacer le colorant alimentaire en pâtisserie&nbsp;?
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Odélices"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMTAxM2YzYjdjM2JlMWQ5MjRhYzYzMzI2YWI0ODE1ZGVjMzY?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;78f37842388e384dd5d3e290915d5e785b25768aa3457119f3777cdf967d97b3"}' alt="Odélices" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:55:38+01:00">09h55</time></div></div></article>

        </div>
        <div class="su-col-lg-8 en-plus su-visible-lg su-visible-xl">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Un s&eacute;jour au ski pour moins de 150 euros ? C&rsquo;est possible avec cette offre de derni&egrave;re minute"
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxMGVhYmVjZWJiYjMyNDhjYjc3ZDRiNDdiMjgyNmM0M2M?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=64d499260b7c5bea7132020bf06f4a362b4587edd05f2ececc4f145bc50fc770 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMGVhYmVjZWJiYjMyNDhjYjc3ZDRiNDdiMjgyNmM0M2M?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=5a11c10547fdc015155ce559483ab8b355cdec9348cb2662ca5eb9300e8a2fe1 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxMGVhYmVjZWJiYjMyNDhjYjc3ZDRiNDdiMjgyNmM0M2M?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=ac8fced61e18e3f0a63a3caeaee79d10d36a1bbccb894cc833b2348fc2cbde73 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://partir.ouest-france.fr/magazine/un-sejour-au-ski-pour-moins-de-150-euros-cest-possible-avec-cette-offre-de-derniere-minute/">
        
        <span class="su-title titre ">
            Un séjour au ski pour moins de 150 euros&nbsp;? C’est possible avec cette offre de dernière minute
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Partir"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMTAxMTUxMjcyYTFhNTRjZDY1YzcwNDIyOTg2MDE0ZjUyNzM?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;e190c747a8d6f99f08b1f684e48785b445812fb7aa761d223d74d5e1c955d4a0"}' alt="Partir" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:55:10+01:00">09h55</time></div></div></article>

        </div>
        <div class="su-col-lg-8 en-plus su-visible-lg su-visible-xl">
            

<!-- Teaser -->
<article class="teaser-media-small    " >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Comment placer l&#39;argent de mon enfant mineur ? Quel placement choisir ?"
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTg3NmQyMjRkZGRlYmIzMTgzNDY0YjE5ZWJlMDBkNjQ?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=f1c5b364d2bc190c9ec0550d1b7b5aa4fd1d98ff5955af9fb390ef8cc2df57e4 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTg3NmQyMjRkZGRlYmIzMTgzNDY0YjE5ZWJlMDBkNjQ?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=5dce8f729d207a5cd60383ae82f3011832b8b0cdafda3404212b5312e5e208c4 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxOTg3NmQyMjRkZGRlYmIzMTgzNDY0YjE5ZWJlMDBkNjQ?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=29e1f25822aeac669e851c95847d6f2cd80b46ae85c3ee3ed8e0de886b7cfbf4 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://lemagdelaconso.ouest-france.fr/dossier-434-comment-placer-argent-enfant-mineur.html">
        
        <span class="su-title titre ">
            Comment placer l'argent de mon enfant mineur&nbsp;? Quel placement choisir&nbsp;?
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Le Mag de la Conso"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMzEwYTc3Y2I0OThmMmMyNWRlNjU2ZjE2NmJjMDU3YmNjYmU?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;ec29333581afe34627303ef2d0dd8d98697271824d8872af7429b91464155f70"}' alt="Le Mag de la Conso" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:54:12+01:00">09h54</time></div></div></article>

        </div>
        <div class="su-col-lg-8 en-plus su-visible-lg su-visible-xl">
            

<!-- Teaser -->
<article class="teaser-media-small    su-margin-bottom-0" >
    
        <div class="zone-active su-clearfix"  ><div class="photo "><figure class="photo-ratio">                        <img decoding="async" class="media lazyload" alt="Mercato. Sochaux met &agrave; l&#39;essai un ancien d&eacute;fenseur de Guingamp"
        data-oflazyload='{"offset":200,"srcset":"https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDZkYTNhZjM4Njk2NTMwN2JjMzNmNDVhMGE2MGQyMDE?width=375&height=210&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=8add6628687e05ae1a37a211e80f77dc4eb4e31493d1045bfaa4998539c5f0ef 375w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDZkYTNhZjM4Njk2NTMwN2JjMzNmNDVhMGE2MGQyMDE?width=630&height=354&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=a273175dbfceaae74f138d8d0239b3ae64697de178cb5482134aeacf99e6b38f 630w,https://media.ouest-france.fr/v1/pictures/MjAyNDAxZDZkYTNhZjM4Njk2NTMwN2JjMzNmNDVhMGE2MGQyMDE?width=940&height=528&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=0b793f31502e4309bb7870d597798c93cd13a0cffa61f914203b3589fbceb6c1 940w"}'
                        />
</figure></div><a data-trk-nav-bloc="teaser" class="titre-lien"   href="https://footamateur.ouest-france.fr/mercato-sochaux-met-a-lessai-un-ancien-defenseur-de-guingamp/">
        
        <span class="su-title titre ">
            Mercato. Sochaux met à l'essai un ancien défenseur de Guingamp
        </span>
    </a><div class="metadata ">

        <span class="content-destination destination-libelle"
            aria-description="Foot Amateur"><img decoding="async" class="img lazyload" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/MjAyMzA1YmQ3OGVkMmY3YmQ5M2Y4YmE1ZjRhY2M1OWU4ZmYxZDc?width&#61;18&amp;height&#61;18&amp;focuspoint&#61;50%2C25&amp;cropresize&#61;1&amp;client_id&#61;bpeditorial&amp;sign&#61;21ebfe6842a90fc83dd958d04cf71329ea0215f055c28552dd1fa374ffaa5792"}' alt="Foot Amateur" /></span>
<time class="icon-date meta-time" datetime="2024-01-18T09:15:45+01:00">09h15</time></div></div></article>

        </div>
</div>
        

        <p class="filtre su-text-center su-hidden-lg su-hidden-xl su-fullwidth"><button class="su-button su-secondary su-small su-action-icon su-show-more" data-sutoggleclass='[{"parent":".filtre","klass":"ouvert"},{"parent":".zone-liste","klass":"liste-visible"},{"klass":"su-active"}]'><span>Voir <i class="su-icon">plus</i></span><span>Voir <i class="su-icon">moins</i></span></button></p>
</section></div>
<div    id="pleine_page_pub_1__parentOf__compo_2"  class="_b"></div>
<div    id="pleine_page_pub_1__parentOf__compo_3"  class="_b"></div>
<div    id="pleine_page_pub_1__parentOf__compo_4"  class="_b"></div>
<div    id="pleine_page_pub_1__parentOf__compo_5"  class="_b"></div>
<div    id="pleine_page_pub_1__parentOf__compo_6"  class="_b"></div>
<div    id="pleine_page_pub_1__parentOf__compo_7"  class="_b"></div></div>

    <div class="su-row">
        <div class="su-col-xs-6 su-col-lg-16 su-col-xl-18">

            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;editorial-block-provider/content-list&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;BP Edito&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.5.0&amp;quot;}]"  class="_b su-margin-bottom-xl" id="bloc_3quarts_6" ><section class="articles_liste_popu "  ><span class="su-h2 su-with-margin">Les plus populaires</span>
<div class="list-populaires  " ><ol>
                    <li><a href="https://www.ouest-france.fr/medias/television/arthur/lanimateur-arthur-reclame-298-millions-deuros-a-nespresso-022695c8-b470-11ee-be97-0ca6f5a426b0" title="L’animateur Arthur réclame 298 millions d’euros à Nespresso">L’animateur Arthur réclame 298 millions d’euros à Nespresso</a></li>
                    <li><a href="https://www.ouest-france.fr/monde/etats-unis/loperation-anti-terroriste-americaine-tourne-au-drame-au-large-de-la-somalie-518b5470-b487-11ee-be97-0ca6f5a426b0" title="L’opération anti-terroriste américaine tourne au drame au large de la Somalie">L’opération anti-terroriste américaine tourne au drame au large de la Somalie</a></li>
                    <li><a href="https://www.ouest-france.fr/europe/ukraine/guerre-en-ukraine-lallemagne-se-prepare-a-une-attaque-de-la-russie-selon-un-document-confidentiel-b4fe78d2-b461-11ee-a06e-10925c317fdf" title="Guerre en Ukraine. L’Allemagne se prépare à une attaque de la Russie, selon un document confidentiel">Guerre en Ukraine. L’Allemagne se prépare à une attaque de la Russie, selon un document confidentiel</a></li>
                    <li><a href="https://www.ouest-france.fr/sport/tennis/open-d-australie/open-daustralie-monfils-soffre-djokovic-le-sacre-de-garcia-on-a-imagine-la-quinzaine-parfaite-7dea7eb0-b44b-11ee-be97-0ca6f5a426b0" title="Open d’Australie. Monfils s’offre Djokovic, le sacre de Garcia : on a imaginé la quinzaine parfaite">Open d’Australie. Monfils s’offre Djokovic, le sacre de Garcia : on a imaginé la quinzaine parfaite</a></li>
                    <li><a href="https://www.ouest-france.fr/education/ecole/la-tenue-unique-sera-testee-dans-un-seul-etablissement-de-bretagne-et-ca-sera-dans-les-cotes-darmor-ea258a36-b4b2-11ee-be97-0ca6f5a426b0" title="La tenue unique sera testée dans un seul établissement de Bretagne et ce sera dans les Côtes-d’Armor">La tenue unique sera testée dans un seul établissement de Bretagne et ce sera dans les Côtes-d’Armor</a></li>
                    <li class="en-plus su-hidden-xs su-hidden-sm su-hidden-md"><a href="https://www.ouest-france.fr/europe/ukraine/carte-guerre-en-ukraine-la-mise-en-garde-de-poutine-evacuation-de-civils-le-point-du-jour-012665ee-b48a-11ee-b2a2-ccb95da3b2ac" title="CARTE. Guerre en Ukraine : la mise en garde de Poutine, évacuation de civils… Le point du jour">CARTE. Guerre en Ukraine : la mise en garde de Poutine, évacuation de civils… Le point du jour</a></li>
                    <li class="en-plus su-hidden-xs su-hidden-sm su-hidden-md"><a href="https://www.ouest-france.fr/politique/emmanuel-macron/education-ecrans-oudea-castera-ce-quil-faut-retenir-de-la-conference-de-presse-demmanuel-macron-8aa31548-b48e-11ee-b2a2-ccb95da3b2ac" title="École, écrans, Oudéa-Castéra… Ce qu’il faut retenir de la conférence de presse d’Emmanuel Macron">École, écrans, Oudéa-Castéra… Ce qu’il faut retenir de la conférence de presse d’Emmanuel Macron</a></li>
                    <li class="en-plus su-hidden-xs su-hidden-sm su-hidden-md"><a href="https://www.ouest-france.fr/pays-de-la-loire/marsac-sur-don-44170/lincendie-qui-a-coute-la-vie-a-deux-bebes-en-loire-atlantique-est-parti-dun-radiateur-electrique-7471b462-b4ae-11ee-be97-0ca6f5a426b0" title="L’incendie qui a coûté la vie à deux bébés en Loire-Atlantique est parti d’un radiateur électrique">L’incendie qui a coûté la vie à deux bébés en Loire-Atlantique est parti d’un radiateur électrique</a></li>
                    <li class="en-plus su-hidden-xs su-hidden-sm su-hidden-md"><a href="https://www.ouest-france.fr/sport/football/coupe-d-afrique-des-nations/direct/direct-maroc-tanzanie-suivez-lentree-en-lice-des-lions-de-latlas-a-la-can-en-live-8dd91fff-bab0-42d4-866f-1fae39ea2550" title="CAN. Facile vainqueur de la Tanzanie, le Maroc réussit son entrée en lice">CAN. Facile vainqueur de la Tanzanie, le Maroc réussit son entrée en lice</a></li>
                    <li class="en-plus su-hidden-xs su-hidden-sm su-hidden-md"><a href="https://www.ouest-france.fr/bretagne/lannion-22300/ce-breton-vit-et-dort-dans-sa-voiture-avec-ses-deux-huskys-depuis-21-mois-je-suis-epuise-f132c5de-afd3-11ee-aa61-307337b06e99" title="Ce Breton vit et dort dans sa voiture, avec ses deux huskys, depuis 21 mois : « Je suis épuisé »">Ce Breton vit et dort dans sa voiture, avec ses deux huskys, depuis 21 mois : « Je suis épuisé »</a></li>
    </ol></div>
        
        <p class="filtre su-text-center su-hidden-lg su-hidden-xl su-fullwidth"><button class="su-button su-secondary su-small su-action-icon su-show-more" data-sutoggleclass='[{"parent":".filtre","klass":"ouvert"},{"parent":".articles_liste_popu","klass":"liste-visible"},{"klass":"su-active"}]'><span>Voir <i class="su-icon">plus</i></span><span>Voir <i class="su-icon">moins</i></span></button></p>
</section></div>
            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-newsletters&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Platform BP Newsletters&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;3.10.2&amp;quot;}]"  class="_b su-margin-bottom-xl su-visible-xs su-visible-sm" id="bloc_3quarts_7" ><section id="newsletter-col-droite" class="su-negative bp-newsletters nl-005981 bloc-newsletter newsletter-vertical newsletter-OF | Entreprises" style="--bp-newsletter-bg: #005981; ">
    <p class="su-h2 titre-bloc">Newsletter Entreprises</p>
    <div class="accroche">Du lundi au vendredi, l'actualité des entreprises vue par Ouest-France et API</div>

    <form name="newsletter-OF | Entreprises" class="form-bp-newsletter" data-bpnewsletter="Entreprises" method="post" action="#" novalidate data-trknewsletter="OF | Entreprises" data-trkblocknewsletter="Colonne de droite" data-code-operation="491">
        <div class="form-email tooltip-parent tooltip-erreur">
            <div class="tooltip">
                <span class="icon icon-fermer" data-oftoggleclass="[{&quot;parent&quot;:&quot;.tooltip-parent&quot;,&quot;klass&quot;:&quot;tooltip-actif&quot;}]"></span>
                <p>Merci de saisir votre adresse e-mail</p>
            </div>
            <i class="icon-enveloppe"></i>
            <input name="email" type="email" value="" placeholder="Votre e-mail">
            <input name="service_id" type="hidden" value="850001">
        </div>
        <span class="btn-newsletter">
            <button type="submit" class="su-button su-primary">OK</button>
            <span class="spinner su-hidden">
                <span class="icon-chargement rotate"></span>
            </span>
        </span>
    </form>

    <p class="su-text-xsmall texte-rgpd">Votre e-mail, avec votre consentement, est utilisé par Ouest-France pour recevoir notre newsletter. <a class="su-link-light" href="/politique-de-protection-des-donnees-personnelles/">En&nbsp;savoir&nbsp;plus</a>.</p>
</section></div>

            <div class="su-row">
                <div class="su-col-lg-12">
                    <div    class="_b su-visible-lg su-visible-xl" id="bloc_demi_1" ></div>
                </div>

                <div class="su-col-lg-12">
                    <div    class="_b su-visible-lg su-visible-xl" id="bloc_x11" ></div>
                    <div    class="_b su-visible-lg su-visible-xl" id="bloc_x12" ></div>
                </div>

            </div>
        </div>

        <div class="su-col-xs-6 su-col-lg-8 su-col-xl-6">
            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;pub-param&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Blocktopus PROD pubs&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.0.0&amp;quot;}]"  class="_b su-visible-lg su-visible-xl" id="bloc_1quart_pub_5" ><div id="pub_pave3" class="pub "></div></div>
        </div>
    </div>


    <div    class="_b su-visible-lg su-visible-xl" id="pleine_page_pub_2" ></div>

    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;telechargement-apps&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;bloc telechargement-apps&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;10.0.0&amp;quot;}]"  class="_b su-hidden-lg su-hidden-xl" id="applis_mobiles" ><section class="telecharger-apps su-margin-bottom-l">
    <!-- Autres OS -->
    <ul class="list-apps list-apps-autres">
        <li>
            <a href="https://www.ouest-france.fr/services/nos-applis-mobiles/" title="Application">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/42abd770fc078b6c4122711b669a233a-appicon205.png"}'>
            </a>
        </li>
        <li>
            <a href="https://www.ouest-france.fr/services/nos-applis-mobiles/" title="Application Le Journal">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/ca18c80fa4fa57b2d513d9a87a80d2b8-ouest-france-journal.png?client_id&#61;cmsfront&amp;sign&#61;430b92ed326c6689c1280da91ab07b02f7474fb524296b7faaf17f41ffc1f31c"}'>
            </a>
        </li>
    </ul>
    <!-- / Autres OS -->

    <!-- Android -->
    <ul class="list-apps list-apps-android">
        <li>
            <a href="" title="Application Android">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/42abd770fc078b6c4122711b669a233a-appicon205.png"}'>
            </a>
        </li>
        <li>
            <a href="" title="Application Android Le Journal">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/ca18c80fa4fa57b2d513d9a87a80d2b8-ouest-france-journal.png?client_id&#61;cmsfront&amp;sign&#61;430b92ed326c6689c1280da91ab07b02f7474fb524296b7faaf17f41ffc1f31c"}'>
            </a>
        </li>
    </ul>
    <!-- / Android -->

    <!-- iOS -->
    <ul class="list-apps list-apps-ios">
        <li>
            <a href="" title="Application iOS">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/42abd770fc078b6c4122711b669a233a-appicon205.png"}'>
            </a>
        </li>
        <li>
            <a href="" title="Application iOS Le Journal">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/ca18c80fa4fa57b2d513d9a87a80d2b8-ouest-france-journal.png?client_id&#61;cmsfront&amp;sign&#61;430b92ed326c6689c1280da91ab07b02f7474fb524296b7faaf17f41ffc1f31c"}'>
            </a>
        </li>
    </ul>
    <!-- / iOS -->

    <!-- Windows Phone -->
    <ul class="list-apps list-apps-windows">
        <li>
            <a href="" title="Application Windows">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/42abd770fc078b6c4122711b669a233a-appicon205.png"}'>
            </a>
        </li>
        <li>
            <a href="" title="Application Windows Le Journal">
                <img src="" data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/ca18c80fa4fa57b2d513d9a87a80d2b8-ouest-france-journal.png?client_id&#61;cmsfront&amp;sign&#61;430b92ed326c6689c1280da91ab07b02f7474fb524296b7faaf17f41ffc1f31c"}'>
            </a>
        </li>
    </ul>
    <!-- / Windows Phone -->
	
	<p class="su-text-center">Téléchargez <span>gratuitement</span> <strong>les applications</strong></p>
</section></div>

    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;pub-param&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Blocktopus PROD pubs&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;7.0.0&amp;quot;}]"  class="_b su-hidden-lg su-hidden-xl" id="pub_habillage" ><div id="pub_interstitiel" class="pub "></div></div>
    <div    class="_b su-hidden-lg su-hidden-xl" id="bloc_mobile_flying" ></div>

    
    </section>

    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-revive-x10-x14&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;platform-block-provider-revive&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;1.4.1&amp;quot;}]"  id="bloc_x14"  class="_b"><div class="bp-revive_x10_x14 x14-v4" style="--bp-revive-txt-color: #FFFFFF; --bp-revive-btn-color: #F15157; --bp-revive-btn-bgcolor: #FFFFFF;  --bp-revive-bgcolor: #F15157;   --bp-revive-illustation: url(https://media.ouest-france.fr/v1/pictures/d404ee963fb8fa366f44f91dca135b2f-screen-appli-of.png?client_id&#61;cmsfront&amp;sign&#61;aa6103509dd15e984f02128e3d9bef401e1e00ffedf34838d41d5a0980dfcfc2); ">
    <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/8ac78ae977e4aea52a58a959cddc4fc9-app-store-2x.png?client_id=cmsfront&sign=60ecb64912e9a34783ce74b0ae0c919897ccf939553fb073269d470d78ae7a9f"}' alt="logo App Store"><img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/pictures/8eb3473e498ebe5b5429382c5e7ed483-google-play-2x.png?client_id=cmsfront&sign=90b4fce3703b822ccf1de65dd68b4a015195073d58a15dd5f21511622db73254"}' alt="logo Google Play">

    <p class="titre">L’appli, l’info en temps réel !</p>

    <p class="sous-titre">Suivez l'actualité qui vous intéresse en ajoutant vos villes et thématiques favorites.</p>

    <button class="su-button su-primary su-stroke">Je télécharge</button>
    <a href="https://app.adjust.com/3justr3?engagement_type&#61;fallback_click&amp;fallback&#61;https%3A%2F%2Fwww.ouest-france.fr%2Fservices%2Fnos-applis-mobiles%2F" aria-label="L’appli, l’info en temps réel !"></a>
</div>
</div>

    
        <div class="pleine-page fond-noir theme-blanc flash-actu">
            <div    id="alerte_1"  class="_b"></div>
            <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;barre-navigation-sticky-mobile-pcm&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;barre-navigation-sticky-mobile-pcm PROD&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;12.0.0&amp;quot;}]"  class="_b su-container" id="alerte_redac" ><div data-ofscrollclass='{"scrollEl":"#bloc_3quarts_pub_3","bottom":true,"klass":"su-hidden","inverted": true}' class="nav-sticky su-hidden-md su-hidden-lg su-hidden-xl actif-3">
    <a href="/regions/" data-trk-tabbar="Régions">
        <div class="picto" style="--icon: url(https://media.ouest-france.fr/v1/fonts/cc9516af06c686892a39d45f36980397-regions.svg);-webkit-mask: var(--icon) no-repeat center; mask: var(--icon) no-repeat center;"></div>
        Régions
    </a>
    <a href="/sport/" data-trk-tabbar="Sport">
        <div class="picto" style="--icon: url(https://media.ouest-france.fr/v1/fonts/c61243e2149807cc0551324bbb559195-coupe.svg);-webkit-mask: var(--icon) no-repeat center; mask: var(--icon) no-repeat center;"></div>
        Sport
    </a>
    <a href="https://www.ouest-france.fr/" data-trk-tabbar="Ouest-France">
        <div class="picto" style="--icon: url(https://media.ouest-france.fr/v1/fonts/07638c8e76f3012719584d7bd9a5cd03-cocarde-of.svg);-webkit-mask: var(--icon) no-repeat center; mask: var(--icon) no-repeat center;"></div>
        Ouest-France
    </a>
    <a href="https://www.ouest-france.fr/actualite-en-continu/" data-trk-tabbar="En direct">
        <div class="picto" style="-webkit-mask: url(https://media.ouest-france.fr/v1/fonts/334b99dc5a11a683dddebf470eb167e4-direct.svg) no-repeat center; mask: url(https://media.ouest-france.fr/v1/fonts/334b99dc5a11a683dddebf470eb167e4-direct.svg) no-repeat center;"></div>
        En&nbsp;Direct
    </a>
        <label class="loupe-mobile" for="toggle-algolia">
            <div data-trk-tabbar="Recherche" class="picto" style="-webkit-mask: url(https://media.ouest-france.fr/v1/fonts/022c5c01d0d6651e028967ce3a6ca06e-recherche.svg) no-repeat center; mask: url(https://media.ouest-france.fr/v1/fonts/022c5c01d0d6651e028967ce3a6ca06e-recherche.svg) no-repeat center;"></div>
            Recherche
        </label>
</div></div>
        </div>
    

    <footer class="footer-new footer">
            <div class="footer-haut">
                
                    <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;footer-top---molecule&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;bp-footer-top&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;31.0.0&amp;quot;}]"  id="footer_top"  class="_b"><div class="su-container">
  <div class="su-row">
    <div class="zone-reseaux-sociaux su-col-lg-9">
        <span class="label-footer">Suivez-nous</span>
        <ul class="reseaux-sociaux-list">
            <li class="item facebook">
                <a target="_blank" href="https://www.facebook.com/ouestfrance/" title="Rejoignez Ouest-France sur Facebook" data-trk-footer-social-desktop='Facebook'>
                    <span class="icon icon-facebook"></span>
                </a>
            </li>
            <li class="item instagram">
                <a href="https://www.instagram.com/ouestfrance/" title="Rejoignez Ouest-France sur Instagram" data-trk-footer-social-desktop='Instagram'>
                    <span class="icon icon-instagram"></span>
                </a>
            </li>
            <li class="item twitter">
                <a target="_blank" href="https://twitter.com/ouestfrance" title="Rejoignez Ouest-France sur X" data-trk-footer-social-desktop='X'>
                    <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/561e3fe971440ef51d73173055cd9263-twitter-blanc.svg"}' style="width: 32px;height: auto;margin-top: -11px;">
                </a>
            </li>
            <li class="item flipboard">
                <a target="_blank" href="https://flipboard.com/@OuestFrance" title="Rejoignez Ouest-France sur Flipboard" data-trk-footer-social-desktop='Flipboard'>
                    <span class="icon icon-flipboard"></span>
                </a>
            </li>
            <li class="item linkedin">
                <a target="_blank" href="https://fr.linkedin.com/company/ouest-france" title="Suivez Ouest-France sur Linkedin" data-trk-footer-social-desktop='Linkedin'>
                    <span class="icon icon-linkedin"></span>
                </a>
            </li>
            <li class="item applications">
                <a href="https://www.ouest-france.fr/services/nos-applis-mobiles/?int_medium=lien&int_campaign=nosapplismobiles&int_content=lien-footer" title="Découvrez les applis  Ouest-France" data-trk-footer-social-desktop='Applis Ouest-France'>
                    <span class="icon icon-mobile"></span>
                </a>
            </li>
            <li class="item rss">
                <a href="https://www.ouest-france.fr/services/rss/" title="Accédez aux flux rss Ouest-France" data-trk-footer-social-desktop='RSS'>
                    <span class="icon icon-rss"></span>
                </a>
            </li>
        </ul>
    </div>

    <div class="footer-newsletter su-col-lg-15 su-visible-lg su-visible-xl">
		<div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;platform-newsletters&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;Platform BP Newsletters&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;3.10.2&amp;quot;}]"  id="footer_top__parentOf__newsletter"  class="_b"><span class="label-footer">Newsletter Entreprises</span>

<form name="newsletter-matinale" class="form-bp-newsletter" method="post" action="#null" novalidate data-bpnewsletter="Entreprises" data-trknewsletter="OF | Entreprises" data-trkblocknewsletter="Footer" data-code-operation="474">
    <div class="form-email tooltip-parent tooltip-erreur">
        <div class="tooltip">
            <span class="icon icon-fermer" data-oftoggleclass='[{"parent":".tooltip-parent","klass":"tooltip-actif"}]'></span>
            <p>Merci de saisir votre adresse e-mail</p>
        </div>

        <i class="icon-enveloppe"></i>
        <input name="email" type="email" value="" placeholder="Votre adresse e-mail" role="textbox">
        <input name="service_id" type="hidden" value="850001"/>
    </div>
    <span class="btn-newsletter">
        <button type="submit" class="btn-nom su-button su-primary">Ok</button>
        <span class="spinner su-hidden">
            <span class="icon-chargement rotate"></span>
        </span>
    </span>
</form>
<p class="su-text-xsmall texte-rgpd su-margin-top-s">Votre e-mail, avec votre consentement, est utilisé par Ouest-France pour recevoir notre newsletter. <a class="su-link-light" href="/politique-de-protection-des-donnees-personnelles/">En&nbsp;savoir&nbsp;plus</a>.</p>
</div>
    </div>
   </div>
  </div></div>
                
            </div>
            <div class="footer-bas">
                <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;footer-middle---molecule&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;bp-footer-middle&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;104.0.0&amp;quot;}]"  class="_b su-container" id="bloc_liens_footer" ><nav class="navigation-secondaire su-clearfix su-row margin-standard nav-footer">
  <div class="su-col-md-6  su-offset-md-3 su-offset-lg-3 su-offset-xl-3">
    <div class="titre nav-footer">
      <span>Sites d'actualité</span>
      <span class="icon nav-footer icon-chevron-bas su-visible-xs su-visible-sm" data-ofonglet='{"closer":"1", "ong":".nav-groupe","cont":".nav-footer"}'></span>
    </div>
    <ul class="nav-groupe nav-footer su-hidden-xs su-hidden-sm">
      <li><a href="https://www.ouest-france.fr/" data-trk-footer-social-desktop="">Ouest-France</a></li>
      <li><a target="_blank" href="https://play.google.com/store/apps/details?id=com.ouest.france&hl=fr" data-trk-footer-social-desktop="Appli Android Ouest-France">Appli Android Ouest-France</a></li>
      <li><a target="_blank" href="https://apps.apple.com/fr/app/ouest-france/id493304166" data-trk-footer-social-desktop="Appli iOS Ouest-France">Appli iOS Ouest-France</a></li>
      <li><a href="https://www.ouest-france.fr/le-courrier-de-l-ouest/" data-trk-footer-social-desktop="Courrier de l'Ouest">Courrier de l'Ouest</a></li>
      <li><a href="https://www.ouest-france.fr/presse-ocean/" data-trk-footer-social-desktop="Presse Océan">Presse Océan</a></li>
      <li class="margin-standard"><a href="https://www.ouest-france.fr/le-maine-libre/" data-trk-footer-social-desktop="Le Maine-libre">Le Maine-libre</a></li>
	  <li><a href="https://www.ouest-france.fr/autres-sites/" data-trk-footer-social-desktop="Autres sites du groupe">Autres sites du groupe</a></li>
 </ul>
  </div>
  <div class="su-col-md-6">
    <div class="titre nav-footer">
      <span>Services</span>
      <span class="icon nav-footer icon-chevron-bas su-visible-xs su-visible-sm" data-ofonglet='{"closer":"1", "ong":".nav-ouest","cont":".nav-footer"}'></span>
    </div>
    <ul class="nav-ouest nav-footer su-hidden-xs su-hidden-sm">
	  <li><a href="https://www.ouest-france.fr/services/" data-trk-footer-social-desktop="Services">Services</a></li>
      <li><a href="https://moncompte.ouest-france.fr/?int_medium=lien&int_content=lien-footer&int_campaign=moncompte" data-trk-footer-social-desktop="Mon espace personnel">Mon espace personnel</a></li>
      <li><a href="https://www.ouest-france.fr/contact/" data-trk-footer-social-desktop="Contactez-nous">Contactez-nous</a></li>
      <li><a href="https://www.ouest-france.fr/faq/" data-trk-footer-social-desktop="FAQ">FAQ</a></li>
      <li><a target="_blank" href="https://recrutement.ouest-france.fr" data-trk-footer-social-desktop="Rejoignez-nous">Rejoignez-nous</a></li>
	  <li><a target="_blank" href="https://www.ouestfrance-solidarite.org/?utm_source=of&amp;utm_medium=lien&amp;utm_campaign=ouestfrancesolidaire&amp;utm_content=lien-footer" data-trk-footer-social-desktop="Ouest-France Solidarité">Ouest-France Solidarité</a></li>
	  <li><a href="https://www.ouest-france.fr/archives/" data-trk-footer-social-desktop="Archives du site">Archives du site</a></li>
      <li><a href="https://www.ouest-france.fr/egalite-professionnelle/" data-trk-footer-social-desktop="Égalité professionnelle">Égalité professionnelle</a></li>
      <li><a href="javascript:Didomi.preferences.show()" data-trk-footer-social-desktop="Modifier mes choix de cookies">Modifier mes choix de cookies</a></li>
    </ul>
  </div>
  <div class="su-col-md-6">
    <div class="titre nav-footer">
      <span>Shopping</span>
      <span class="icon nav-footer icon-chevron-bas su-visible-xs su-visible-sm" data-ofonglet='{"closer":"1", "ong":".nav-codes-promo","cont":".nav-footer"}'></span>
    </div>
    <ul class="nav-codes-promo nav-footer su-hidden-xs su-hidden-sm">
      <li><a href="https://www.ouest-france.fr/shopping/soldes/" data-trk-footer-social-desktop="Soldes d'hiver">Soldes d'hiver</a></li>
      <li><a href="https://codepromo.ouest-france.fr/code-promo/emma-matelas" target="_blank" data-trk-footer-social-desktop="Code Promo Emma Matelas">Code Promo Emma Matelas</a></li>
      <li><a href="https://codepromo.ouest-france.fr/code-promo/deliveroo" target="_blank" data-trk-footer-social-desktop="Code Promo Deliveroo">Code Promo Deliveroo</a></li>
      <li><a href="https://codepromo.ouest-france.fr/code-promo/h-m" target="_blank" data-trk-footer-social-desktop="Code Promo H&M">Code Promo H&amp;M</a></li>
      <li><a href="https://codepromo.ouest-france.fr/code-promo/booking" target="_blank" data-trk-footer-social-desktop="Code Promo Booking">Code Promo Booking</a></li>
      <li><a href="https://codepromo.ouest-france.fr/code-promo/boohoo" target="_blank" data-trk-footer-social-desktop="Code Promo Boohoo">Code Promo Boohoo</a></li>
      <li><a href="https://codepromo.ouest-france.fr/code-promo/uber-eats" target="_blank" data-trk-footer-social-desktop="Code Promo Uber Eats">Code Promo Uber Eats</a></li>
      <li><a href="https://www.ouest-france.fr/shopping/comparateur/" data-trk-footer-social-desktop="Comparateur">Comparateur</a></li>
      <li><a href="https://www.ouest-france.fr/shopping/guide-achat/" data-trk-footer-social-desktop="Guide d'achat">Guide d'achat</a></li>
      <li><a href="https://www.ouest-france.fr/shopping/cdiscount/" data-trk-footer-social-desktop="Bons Plans Cdiscount">Bons Plans Cdiscount</a></li>
      <li><a href="https://www.ouest-france.fr/shopping/canal-plus/" data-trk-footer-social-desktop="Bons Plans Canal+">Bons Plans Canal+</a></li>
    </ul>
  </div>
</nav></div>
                <div class="su-container">
                    
                        <div  data-trk="[{&amp;quot;n&amp;quot;:&amp;quot;footer-bottom---molecule&amp;quot;,&amp;quot;o&amp;quot;:&amp;quot;bp-footer-bottom&amp;quot;,&amp;quot;v&amp;quot;:&amp;quot;43.0.0&amp;quot;}]"  id="footer_bottom"  class="_b"><p class="lien-applications su-margin-bottom-l">
    <a href="https://www.ouest-france.fr/services/nos-applis-mobiles/" data-trk-footer-social-desktop="Applications mobiles">
        <span class="icon icon-mobile-tablette"></span>
        Les applications mobiles du groupe SIPA <strong>Ouest-France</strong> disponibles en téléchargement
    </a>
</p>
<ul class="mentions">
    <li><a href="https://www.ouest-france.fr/mentions-legales/" data-trk-footer-social-desktop="Mentions légales">Mentions légales</a></li>
    <li><a href="https://www.ouest-france.fr/politique-de-protection-des-donnees-personnelles/" data-trk-footer-social-desktop="Données personnelles" target="_blank">Données personnelles</a></li>
    <li><a href="https://www.ouest-france.fr/cookies/" data-trk-footer-social-desktop="Cookies" target="_blank">Cookies</a></li>
  	<li><a href="https://www.ouest-france.fr/cgu/" data-trk-footer-social-desktop="CGU" target="_blank">CGU</a></li>
    <li><a href="https://www.ouest-france.fr/qui-sommes-nous/" data-trk-footer-social-desktop="Qui sommes nous ?">Qui sommes-nous ?</a></li>
    <li><a href="https://www.ouest-france.fr/tarifs-de-reference/" data-trk-footer-social-desktop="Tarifs de références">Tarifs de références</a></li>
    <li><a href="https://www.ouest-france.fr/charte-utilisateur/" data-trk-footer-social-desktop="Charte utilisateur">Charte utilisateur</a></li>
    <li><a href="https://www.ouest-france.fr/plan-du-site/" data-trk-footer-social-desktop="Plan du site">Plan du site</a></li>
    <li><a href="https://www.ouest-france.fr/elections/resultats/plan-de-site-resultats-elections/" data-trk-footer-social-desktop="Plan des élections">Plan des élections</a></li>
    <li>© Ouest-France</li>
</ul>
<ul class="mentions su-margin-bottom-m">
    <li class="copyright">
        <a class="ojd" data-trk-footer-social-desktop="ACPM-OJD" rel="nofollow" target="_blank"
           href="https://www.acpm.fr/?utm_source=of&amp;utm_medium=lien&amp;utm_campaign=ojd&amp;utm_content=lien-footer">
            <i class="icon-ojd" title="Logo ACPM OJD"></i>
        </a>
    </li>
</ul></div>
                    
                </div>
            </div>
        </footer>

        <div id="veil-newsletter-registration" class="su-veil su-veil-out" data-oftoggleclass='[{"sel":"body","klass":"su-no-scroll"}, {"sel":"#veil-newsletter-registration", "klass":"su-veil-in su-veil-out"}, {"sel":"#newsletter-registration-result","klass":"su-pop-in-in su-pop-in-out"}]'></div>
<div id="newsletter-registration-result" class="su-pop-in">
    <div class="su-close" data-oftoggleclass='[{"sel":"body","klass":"su-no-scroll"}, {"sel":"#veil-newsletter-registration", "klass":"su-veil-in su-veil-out"}, {"sel":"#newsletter-registration-result","klass":"su-pop-in-in su-pop-in-out"}]'>
        <i class="su-icon">
            fermer
        </i>
    </div>

    <div class="su-content-area">
        <div class="popin-content su-margin-top-xl"></div>
    </div>
</div>


<div    class="_b su-clearfix" id="bp_hidden_thirdparty" ></div>


<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/17719a6c7cbb20f6a9224a3798810fe5-algoliasearch-lite.umd.js"></script>
<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/86415bbaa05bd30afc0bb1d9a3757188-e0401d03-af96-4944-ad7a-7d25b73e371a-revive-squashed.js"></script>
<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/96c0428d3e9f6d98891bbe073581b9ff-81e41ae5-97fd-4099-928e-074c5960796f-default-squashed.js"></script>
<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/dcf2d0d9dce5f107c2e0e2bf3c2dac34-a5a95248-7f79-40ad-bf8c-27fc68f07b60-search-header-hidden-squashed.js"></script>
<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/3c00c76b450bdc392f7a44b4837e3eae-6672b0d4-65c4-421b-8449-ef34feb65d04-partage-squashed.js"></script>
<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/22c78627d4abb5c57ca845e40524cc2d-e9f490aa-ab12-4537-9146-a471fa56017d-default-squashed.js"></script>
<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/50b5af0f9392f000d863ec83e903cef5-03c28f2b-a2ed-4aed-93c4-f89f3fd8e7fa-default-squashed.js"></script>
<script async type="text/javascript" src="https://media.ouest-france.fr/v1/javascripts/eb213bef7374cdd2614058ec12e7d500-1449fb76-6c7b-483a-9f6c-b90235152947-didomi-squashed.js"></script>


    <script type="text/javascript">window.dfp_is_mobile = window.matchMedia("(max-width: 980px)").matches;</script>
    

<script>
	window.thirdparty.push({family: "advertising", name:"ad-blocking-recovery", 
		fn: function(){
            var script_tag = document.createElement("script");
            script_tag.src = "https://fundingchoicesmessages.google.com/i/pub-2464230562981596?ers=1";
            script_tag.type = "text/javascript";

            var first_script = document.getElementsByTagName('script')[0];
            first_script.parentNode.insertBefore(script_tag,first_script);
          	
          	(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();
		}
	});
</script>
<script type="application/javascript">window.cms_got_enabled = false; window.cms_connected = false; window.autologinOF={"silentSSOuri": "https://www.ouest-france.fr/silent-check-sso.txt", "debug":false,"realm":"sipa","url": "https://auth.ouest-france.fr/auth","clientID": "cms"}</script>
<script type="text/javascript">
    function getDfpVars() {
        var dfpVars = {"zc":"/infos/divers","ida":"43d19726-b5fa-11ee-be97-0ca6f5a426b0","reg":"Économie","ofts":["actualite_en_continu","chomage","commerce","economie","emploi","entreprises","europe","france","une"],"cprod":"entreprises/home","ofcdv":"/economie/divers","ville":"Entreprises","usedfp":true,"pagetype":"article","slotName":"/49926454/ouestfrance>site/entreprises>article","responsive":true,"publisherid":"49926454","profil":["ANONYME","non-gratuit"],"weborama":[],"statut_page":"gratuit","prc_sizearticle":["long","5"]};

        dfpVars.device = document.documentElement.clientWidth < 980  ? 'smartphone' : 'desktop';

        return dfpVars;
    };

    var bw_ps_adspot_id = null,
        ps_version = null,
        googletag = googletag || {},
        Drupal = {settings: {server_name: 'www.ouest-france.fr'}};
    googletag.cmd = googletag.cmd || [];

    var is_article = true;

</script>

<!-- dfp-scripts - default -->
<script>
window.thirdparty.push({family: "business", name:"abtasty",
    fn: function(){
        var e = document.createElement("script");
        var f = document.getElementsByTagName("script")[0];

        e.async = 1;
        e.src = '//try.abtasty.com/8c17ef0cb5b43abf856119b7f7447559.js';
        f.parentNode.insertBefore(e, f);
    }
});
</script>
<script>
    window.thirdparty.push({family: "advertising", name:"adnexus",
        fn: function(){
            var tkCiblage = JSON.parse(document.cookie.match('(^|;)\\s*tkCiblage\s*=\\s*([^;]+)')?.pop() || '{}');
            var payants3 = (tkCiblage.NbPaidArticles ?? 0) >= 3;
            var session10 = (tkCiblage.sessions ?? 0) >= 10;
            if(!payants3 && !session10) return;
          
            var e = document.createElement("script");
            var f = document.getElementsByTagName("script")[0];

            e.async = 1;
            e.src = "https://secure.adnxs.com/seg?add="+ (payants3 ? 19481518 : 16992276) +"&t=1";
            f.parentNode.insertBefore(e, f);
        }
    });
</script>
<script>
  window.mediego_domain = "mediego.ouest-france.fr";
  window.mediego_cookie_domain = '.ouest-france.fr';
  window.thirdparty.push({family: "analytics", name:"mediego",
    fn: function(){
        var e = document.createElement("script");
        var f = document.getElementsByTagName("script")[0];
        
        e.async = 1;
        e.src='https://mediego.ouest-france.fr/agent.js';
        f.parentNode.insertBefore(e, f);
    }
});
</script>
<script>
window.thirdparty.push({family: "analytics", name:"ownpage",
    fn: function(){
        function loadOwnpageScript(e){        
            var t="https://script.ownpage.fr/v1/",a=document.createElement("script"),n=document.getElementsByTagName("script")[0];
            a.type="text/javascript",a.defer=1,a.async=1,a.src=t+"ownpage.js",a.onload=e,a.readyState?a.onreadystatechange=function(){("loaded"==a.readyState||"complete"==a.readyState)&&(a.onreadystatechange=null,e&&"function"==typeof e&&e())}:a.onload=function(){e&&"function"==typeof e&&e()},n.parentNode.insertBefore(a,n)
        }
        loadOwnpageScript(function(){
            Ownpage.trackPage('82245a1afff44cf6');
        });
    }
});
</script> 
<script>
	window.thirdparty.push({family: "advertising", name:"pubstack", 
		fn: function(){
            var script_tag = document.createElement("script");
            script_tag.src = "https://boot.pbstck.com/v1/tag/8d14bcf8-c49d-4564-94b5-ae5836d3f634";
            script_tag.type = "text/javascript";

            var first_script = document.getElementsByTagName('script')[0];
            first_script.parentNode.insertBefore(script_tag,first_script);
		}
	});
</script>
<script>
window.parent.thirdparty.push({family: "analytics", name:"clarity", 
    fn: function(){
    if(Math.random() * 100 > 5) return; 

    (function(c,l,a,r,i,t,y){ 
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments) };
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
        c.dataLayer.push({
            'event': 'clarity'
        });
     })(window, document, "clarity", "script", "ij6zbdq27p");
    }
});
</script>
<script>didomiOnReady=window.didomiOnReady||[],didomiOnReady.push(function(e){__tcfapi("addEventListener",2,function(e,n){n&&"cmpuishown"===e.eventStatus&&(window.prevent_refresh=!0),n&&"useractioncomplete"===e.eventStatus&&(__tcfapi("removeEventListener",2,function(){},e.listenerId),window.prevent_refresh=!1)})});</script>
<div class="bp-recollecte su-hidden with-barre-navigation-sticky" data-suscrollclass='{"scrollEl":"footer.footer-new","bottom":true,"klass":"su-hidden","inverted": true}'>
    <div class="su-container su-negative">
        <header class="keep">
            <img data-oflazyload='{"src":"https://media.ouest-france.fr/v1/fonts/1e3a01427bae1cac2edd0ca691dfa774-ouest-france-blanc-1.svg"}' alt="Logo Ouest-France" />
            <button class="su-button-no-look su-negative" data-sutoggleclass='{"parent":".bp-recollecte","klass":"repli"}'><i class="su-icon replier">replier</i><i class="su-icon deplier">déplier</i></button>
        </header>
        <p class="titre keep">Pour une meilleure expérience de lecture, acceptez les cookies</p>
        <p class="su-margin-bottom-s">Après refus des cookies :</p>
        <ul class="su-list su-negative">
            <li>Les contenus externes (Instagram, Twitter, Youtube) ne peuvent pas s'afficher dans nos articles.</li>
            <li>Les publicités ne sont pas personnalisées suivant vos centres d'intérêts et sont généralement de moins bonne qualité</li>
        </ul>

        <div class="center-mobile keep">
            <button data-trk-consent="J'accepte les cookies" class="su-button su-bloc-center su-primary" onclick="Didomi.setUserAgreeToAll();">J'accepte les cookies</button>
        </div>
        <p class="legend">Vous pouvez changer d’avis en cliquant sur “Modifier mes choix de cookies” en bas de page.</p>
    </div>

    <script type="text/javascript">
        window.thirdparty.push({family: "functionning", name: "banniere-recollecte", fn: () => {
            const d = Didomi.getUserConsentStatusForPurpose, p = Didomi.Purposes;
            if ( !d(p.Cookies) || !d(p.CreateAdsProfile) || !d(p.CreateContentProfile) || !d(p.ImproveProducts) || !d(p.MarketResearch) || !d(p.MeasureAdPerformance) || !d(p.MeasureContentPerformance) || !d(p.SelectBasicAds) || !d(p.SelectPersonalized