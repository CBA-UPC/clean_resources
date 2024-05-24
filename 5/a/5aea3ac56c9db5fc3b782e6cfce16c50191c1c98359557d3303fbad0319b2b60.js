![function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(4),i=n(5),c=n(6);nction s(e,t){var n=t=i({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach(,Object.keys(o).sort().reduce(Object.create(null))):o}t.extract=u,t.parse=s,t.stringify=t.parseUrl=, e}(e)}}},function(e,t,n){"usonent(e)}function o(e){if(e&&"undefined"!==e)return/^\d+$/.exec(e)?Number(e):void 0}function i(e){return void 0===e?"":"number"==typeof e?e.toString():encodeURIComponent(e)}function c(){return function(e){return-1!==e.toLowerCase().indexOf("safari")&&-1===e.toLowerCase().indexOf("chrome")&&-1===e.toLowerCase().indexOf("edge")&&-1===e.toLowerCase().indexOf("android")}(window.navigator.userAgent)}n.r(t);var a=n(1)/-/g,"")}var f=n(0),p=[{name:"google",host:/^www\.google\.(com|co\.jp)$/,searchParams:"q"},{name:"bing",host:/^www\.bing\.com$/,searchParams:"q"},{name:"yahoo",host:/^search\.yahoo\.co\.jp$/,searchParams:"p"},{name:"docomo",host:/^search\.smt\.docomo\.ne\.jp$/,searchParams:"search_box"},{name:"rakuten",host:/^websearch\.rakuten\.co\.jp$/,searchParams:"qt"},{name:"goo",host:/^search\.goo\.ne\.jp$/,searchParams:"MT"},{name:"biglobe",host:/^cgi\.search\.biglobe\.ne\.jp$/,searchParams:"q"}],l=[{name:"facebook",host:/^.*facebook\.com$/},{name:"twitter",host:/^t\.co$/},{name:"instagram",host:/^.*instagram\.com$/},{name:"naver",host:/^matome\.naver\.jp$/},{name:"fc2",host:/blog\d*\.fc2\.com$/},{name:"ameba",host:/^ameblo\.jp$/},{name:"youtube",host:/^www\.youtube\.com$/},{name:"hatena bookmark",host:/^b\.hatena\.ne\.jp$/},{name:"hatena diary",host:/^d\.hatena\.ne\.jp$/}];function m(e){var t={par:{}};if(""!==e&&void 0!==e){t.url=e;var n=document.createElement("a");n.href=e,t.pr=n.protocol.replace(":",""),n.port?t.po=Number(n.port):t.po="https"===t.pr?443:80,t.hn=n.hostname,t.pa=n.pathname,t.par=Object(f.parse)(n.search)}return t}function d(e,t){var n=e.par[t];return Array.isArray(n)?n[0]:n}function h(e){var t=g(e);return d(e,t?t.searchParams:"q")}function g(e){var t;return p.forEach(function(n){n.host.test(e.hn?e.hn:"")&&(t=n)}),t}function v(e){var t={cURL:m(window.location.href),rURL:m(document.referrer),ch:{src:e.src,md:e.md,cp:e.cp,kw:e.kw}};return t.si=e.si,t.sst=e.sst,t.sn=e.sn,t.scu=e.scu,t.pn=e.pn,t.lat=e.lat,e.md||(t.cL:e.rURL}function b(e){return!(!d(e.cURL,"utm_medium")||!d(e.cURL,"utm_"gclid")}function w(e){return void 0===e.uid||void 0===e.sn}function j(e,t,n){return void 0===e.lat||t-e.lat>n.session_expire_msec}function k(e,t){return b(e)||_(e)?function(e){var t=y(e),n=m(e.scu);return!(d(t,"utm_medium")===d(n,"utm_medium")&&d(t,"utm_source")===d(n,"utm_source")&&d(t,"utm_campaign")===d(n,"utm_campaign")&&d(t,"utm_content")===d(n,"utm_content")&&d(t,"utm_term")===d(n,"utm_term")&&d(t,"gclid")===d(n,"gclid"))}(e):e.rURL.url!==m(e.scu).url&&!function(e,t){return"."===t.substr(0,1)?("."+e.hn).slice(-t.length)===t:e.hn===t}(e.rURL,t.cookie_host)}function x(e,t){e.si=s(),e.sst=t,e.sn=1,e.scu=y(e).url,e.pn=1,e.lat=t,e.ch=R(e)}function O(e,t){e.si=s(),e.sst=t,e.sn=void 0===e.sn?1:e.sn+1,e.scu=y(e).url,e.pn=1,e.lat=t,e.ch=R(e)}function R(e){var t=m(e.scu);if(!t.hn)return{md:"direct"};if(d(t,"utm_medium"))return{md:d(t,"utm_medium"),src:d(t,"utm_source"),cp:d(t,"utm_campaign"),kw:d(t,"utm_term")};if(function(e){return!!_(e)&&/^www\.google\.(com|co\.jp)$/.test(e.rURL.hn?e.rURL.hn:"")}(e))return{md:"cpc",src:"google"};if(_(e))return{md:"display",src:"google"};var n=g(t);if(n)return{md:"organic",src:n.name,kw:h(t)};var r=function(e){var t;return l.forEach(function(n){n.host.test(e.hn?e.hn:"")&&(t=n)}),t}(t);return r?{md:"social",src:r.name}:{md:"referral",src:t.hn,kw:h(t)}}function E(e){return function(e,t){var n={};return e.split(/\s*;\s*/).forEach(function(e){var i=e.split("="),c=i[0],a=i[1];switch(c){case t+"s_i":n.si=r(a);break;case t+"s_t":n.sst=o(a);break;case t+"s_n":n.sn=o(a);break;case t+"s_c":n.scu=r(a);break;case t+"p_n":n.pn=o(a);break;case t+"p_t":n.lat=o(a);break;case t+"u_i":n.uid=r(a);break;case t+"c_s":n.src=r(a);break;case t+"c_m":n.md=r(a);break;case t+"c_c":n.cp=r(a);break;case t+"c_k":n.kw=r(a)}}),n}(document.cookie||"",e)}function C(e,t){var n=E(e);return function(e,t){return e&&w(t)&&c()}(t,n)?function(e){return{uid:r(localStorage.getItem(e+"u_i")),sn:o(localStorage.getItem(e+"s_n"))}}(e):n}function S(e,t,n,r){!function(e,t,n){P(t+"s_i",e.si,n),P(t+"s_t",e.sst,n),P(t+"s_n",e.sn,n),P(t+"s_c",e.scu,n),P(t+"p_n",e.pn,n),P(t+"p_t",e.lat,n),P(t+"u_i",e.uid,n),P(t+"c_s",e.src,n),P(t+"c_m",e.md,n),P(t+"c_c",e.cp,n),P(t+"c_k",e.kw,nn e&&c()}(r)&&function(e,t){try{localStorage.setItem(t+"u_i",i(e.uid)),localStorage.setItem(t+"s_n",i(e.sn))}catch(e){}}(e,t)}function U(e,t){e.si=t.si,e.sst=t.sst,e.sn=t.sn,e.scu=t.scu,e.pn=t.pn,e.lat=t.lat,e.src=t.ch.src,e.md=t.ch.md,e.cp=t.ch.cp,e.kw=t.ch.kw}function P(e,t,n,r){void 0===r&&(r=31536e6);var o=new Date((new Date).getTime()+r).toUTCString(),c=i(t),a="."===n.substr(0,1)?" domain="+n+";":"";document.cookie=e+"="+c+"; expires="+o+"; path=/;"+a}function $(e,t,n){return{sid:e.site_id,uid:t.uid,si:n.si,bh:Math.max(document.documentElement.clientHeight,window.innerHeight||0),bw:Math.max(document.documentElement.clientWidth,window.innerWidth||0),lg:window.navigator.language||window.navigator.userLanguage,sn:n.sn,sst:n.sst,scu:n.scu,src:n.ch.src,md:n.ch.md,cp:n.ch.cp,kw:n.ch.kw,aid:function(e){return d(m(e.scu),"gclid")}(n),url:n.cURL.url,ref:n.rURL.url,cid:e.customer_id,bt:e.pv_time,pn:n.pn}}function L(e){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];void 0!==e[o]&&""!==e[o]&&(t[o]=e[o])}return t}function q(e,t){var n={};return Object.keys(e[t]=e[t]}),Object.keys(t+e]=t[e]}),n}var A=1;function I(e,t){M("https://"+e+"/v"+A+"/p/collect",t)}function F(e,t,n){var r="https://"+e+"/v"+A+"/e/collect";"beacon"===n?M(r,t):function(e,t){var n=new XMLHttpRequest;n.open("POST",e),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.withCredentials=!0,n.send(Object(f.stringify)(t))}(r,t)}function T(e,t){(function(e,t){var n=e+"?"+Object(f.stringify)(t),r=new XMLHttpRequest;r.open("GET",n),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.send()})("https://"+e+"/v"+A+"/err",t)}function M(e,t){var n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=e+"?"+Object(f.stringify)(t),n.parentNode.insertBefore(r,n)}function N(e,t,n,r){T(e,L(function(e,t,n){var r=null;return n&&(r=C(n.cookie_prefix,n.itp_recovery)),{sid:n?n.site_id:void 0,url:window.location.href,uid:r?r.uid:void 0,msg:t,cmd:e[0],ht:"send"===e[0]?e[1]:void 0}}(t,n,r)))}var H="setup hasn't been called yet",V=fis._ep=t}return e.prototypsQueue()},e.prototype.processQueue=function(){for(;this.queue.length>0;){var e=this.queue.shift();try{switch(e[0]){case"setup":this.setup(e[1],e[2]);break;case"config":this.setConfig(e[1],e[2]);break;case"get":this.get(e[1]);break;case"send":this.send(e)}}catch(t){N(this._ep,e,t.message,this.config)}}},e.prototype.setup=function(e,t){if("string"!=typeof e||"number"!=typeof t)throw new Error("invalid arg");this.config={site_id:e,pv_time:t,endpoint:this._ep,cookie_prefix:"__na_",cookie_host:window.location.hostname,session_expire_msec:18e5,itp_recovery:!1,pv_custom_params:{}}},e.prototype.setConfig=function(e,t){if(!this.config)throw new Error(H);if(!this.validateSetConfig(e,t))throw new Error("invalid arg");this.config[e]=t},e.prototype.validateSetConfig=function(e,t){switch(e){case"cookie_prefix":case"cookie_host":return"string"==typeof t;case"session_expire_msec":return"number"==typeof t;case"customer_id":return"string"==typeof t;case"itp_recovery":return"boolean"==typeof t;default:return!1}},e.prototype.get=function(e){if(!this.config)throw new Error(H);if("function"!=typeof e)throw new Error("invalid arg");!function(e,t){var n=C(e.cookie_prefix,e.itp_reum:e.pn}}($(e,n,v(n))))}(this.config,e)},e.prototype.send=function(e){if(!this.config)throw new Error(H);if("pageview"===e[1]){if(!this.validateCustomParams(e[2]))throw new Error("invalid arg");this.config.pv_custom_params=e[2]?e[2]:{},function(e,t){var n=C(e.cookie_prefix,e.itp_recovery),r=v(n);w(n)?(n.uid=s(),x(r,e.pv_time)):j(r,e.pv_time,e)||k(r,e)?O(r,e.pv_time):function(e,t){e.pn=void 0===e.pn?1:e.pn+1,e.lat=t.pv_time}(r,e),U(n,r),S(n,e.cookie_prefix,e.cookie_host,e.itp_recovery);var o=L(q($(e,n,r),t));I(e.endpoint,o)}(this.config,this.config.pv_custom_params)}else if("event"===e[1]){if("object"!=typeof e[2]||!this.validateCustomParams(e[3]))throw new Error("invalid arg");!function(e,t,n){var r=C(e.cookie_prefix,e.itp_recovery),o=v(r),i=(new Date).getTime(),c=!1;if(w(r)){if(!t.pvFlg)throw new Error("cookie has been deleted");r.uid=s(),x(o,i),e.pv_time=i,c=!0}else t.pvFlg&&j(o,i,e)?(O(o,i),e.pv_time=i,c=!0):o.lat=i;if(U(r,o),S(r,e.cookie_prefix,e.cookie_host,e.itp_recovery),c){var a=L(q($(e,r,o),e.pv_custom_params));I(e.endpoint,a)}var u=L(q(function(e,t,n,r){return{sid:e.site_id,uid:t.uid,si:n.si,url:n.cURL.url,pn:n.pn,ctg:r.ctg,act:r.act,lab:r.lab,val:r.val,bt:n.lat}}(e,r,o,t),n));F(e.endpoint,u,t.tp)}(this.config,{ctg:e[2].category,act:e[2].action,lab:e[2].label,val:e[2].value,pvFlg:e[2].sendPageviewIfSessionExpired,tp:e[2].transport},e[3]?e[3]:{})}},e.prototype.validateCustypeof e},e}();!function(e){try{var t=e.NanalyticsObject;if(t){var n=e[t],r=new V(n.q,nqueue(e)},r.processQueue()}}catch(e){console.error(e)}}(window)}]);