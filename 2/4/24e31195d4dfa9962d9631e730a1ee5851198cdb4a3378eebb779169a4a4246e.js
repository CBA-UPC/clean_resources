!function(){"use strict";function b(t){return 1==ZONE_ADS&&(t=t.replace("https://i-","https://vcdn-").replace("https://i1-","https://vcdn1-")),t}var a=nction p(t,e,n){var a,i,r=1<arguments.length&&void 0!==e?e:0,o=2<arguments.length&&void 0!==n?n:null,c=y(y({},{40:"460x690",36:"900x540",35:"680x408",34:"750x450",33:"1200x0",32:"120x72",31:"220x132",30:"180x180",28:"680x0",27:"720x480",25:"380x228",26:"140x84",24:"100x100",22:"180x240",21:"680x0",20:"100x100",18:"320x320",17:"160x240",16:"330x495",15:"500x300",14:"490x294",13:"300x180",12:"500x300",10:"460x0",8:"300x180",6:"180x108"}),o),l=c[r],u="",d=l.replace("x","_"),s="thumb_"+d+"_100_1_crop",f="thumb_"+d+"_100_2_crop",p=t.title.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1");if(void 0!==t.thumb_list&&t.thumb_list&&0<Object.keys(t.thumb_list).length&&""!=t.thumb_list[s]&&""!=t.thumbnail_url){var v=Object.keys(t.thumb_list);v.indexOf(s)<0&&(s="thumb_"+d+"_100_1_cover",f="thumb_"+d+"_100_2_cover"),a=t.thumb_list[s],i=t.thumb_list[f],u=void 0!==t.thumb_list[s.replace("thumb_","thumb_gif_")]?t.thumb_list[s.replace("thumb_","thumb_gif_")]:"",a&&i||(a=t.thumb_list[v[0]],i=t.thumb_list[v[1]])}else{if(void 0===t.thumbnail_url||!t.thumbnail_url.trim()){l="120x72",r in c&&(l=c[r]);var m="thumb_1000.jpg";return""!=l&&null!=l&&(m="750x450"==l?"thumb_1000.jpg":"500x300"==l||"380x228"==l?"thumb_600.jpg":"300x180"==l||"120x72"==l?"thumb_300.jpg":(l=l.replace("m_",""),(m="notfound_".concat(l,"jpg"))in["notfound.jpg","notfound_90x90.jpg","notfound_122x122.jpg","notfound_180x108.jpg","notfound_180x180.jpg","notfound_300x180.jpg","notfound_490x294.jpg","notfound_500x300.jpg","notfound_660x430.jpg","notfound_660x0.jpg","notfound_240x144.jpg","notfound_320x320.jpg","notfound_460x0.jpg","notfound_160x240.jpg","notfound_216x324.jpg"]?m:"notfound.jpg")),m=img_url+"/default/"+m,m=b(m),'<picture><img intrinsicsize="'.concat(l,'" loading="lazy" alt="').concat(p,'" class="lazy" src="').concat(m,'" data-src="').concat(m,'"></picture>')}var h,g={26:"thumbnail_url2",6:"thumbnail_url2",17:"thumbnail_url2",19:"thumbnail_url2",20:"thumbnail_url2"};if(t.original_cate in[1003392,1004070,1004069]&&void 0!==t.thumbnail_url2)h=t.thumbnail_url2;else{var _=void 0!==g[r]?g[r]:"thumbnail_url";h=void 0!==t[_]?t[_]:t.thumbnail_url}i=a=h=h.replace(/.[^.]+$/i,"_"+l+"$&")}return a=b(a),/[?|&]t=video/.test(a)?(u=b(u),void 0!==window.nativeLazyLoad&&!0===window.nativeLazyLoad?'\n            <video loop muted playsinline autoplay preload="auto" class="lazy thumb-gif">\n                <source src="'.concat(a,'" type="video/mp4">\n            </video>'):'\n        <video loop muted playsinline preload="none" poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazy thumb-gif">\n            <source data-src-image="'.concat(u,'" data-src-video="').concat(a,'" type="video/mp4">\n        </video>')):(i=b(i),void 0!==window.nativeLazyLoad&&!0===window.nativeLazyLoad?'\n            <picture>\n\t\t\t\t\x3c!--[if IE 9]><video style="display: none;"><![endif]--\x3e\n\t\t\t\t<source data-srcset="'.concat(a," 1x, ").concat(i,' 2x">\n\t\t\t\t\x3c!--[if IE 9]></video><![endif]--\x3e\n\t\t\t\t<img loading="lazy" intrinsicsize="').concat(l,'" alt="').concat(p,'" class="lazy" src="').concat(a,'">\n\t\t\t</picture>'):'\n        <picture>\n            \x3c!--[if IE 9]><video style="display: none;"><![endif]--\x3e\n            <source data-srcset="'.concat(a," 1x, ").concat(i,' 2x">\n            \x3c!--[if IE 9]></video><![endif]--\x3e\n            <img loading="lazy" intrinsicsize="').concat(l,'" alt="').concat(p,'" class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="').concat(a,'">\n        </picture>'))}function I(e,n,a){if(void 0===window.apiWorkerCached||void 0===window.apiWorkerCached[e.api_url]){var i=function(t,e){void 0===window.retryFetch[t.id]&&(window.retryFetch[t.id]=0),++window.retryFetch[t.id],1==window.retryFetch[t.id]?I(t,n,e):e()};if(void 0===window.retryFetch&&(window.retryFetch=new Object),void 0===e.extends&&(e.extends={method:"GET"}),"function"==typeof fetch)fetch(e.api_url,e.extends).then(function(t){t.ok?n(t.json()):(o(e.api_url,t),i(e,a))}).catch(function(t){o(e.api_url,t),i(e,a)});else{var t=new XMLHttpRequest;t.open(e.extends.method,e.api_url),t.onload=function(){200<=this.status&&this.status<300?n(JSON.parse(t.response)):(o(e.api_url,t),i(e,a))},t.onerror=function(t){o(e.api_url,t),i(e,a)},t.send()}}else n(window.apiWorkerCached[e.api_url])}function t(t,e){t=(t=window.decodeURIComponent(t)).trim().replace(/\s/g,""),/^(:\/\/)/.test(t)?t="https".concat(t):/^(f|ht)tps?:\/\//i.test(t)||(t=js_url_vne+("undefined"==typeof ES6||1===ES6?"/v3/pc/libs/":"/v3/production/libs/")+t.replace(/^(\/)/,""));var n=document.querySelectorAll('script[src="'+t+'"]');if(0<n.length&&"function"==typeof e){if(n[0].hasAttribute("loaded"))!1===("undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent))&&e();else n[0].addEventListener("load",e)}else{if(0<n.length)return;var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src",t),a.onload="function"==typeof e?document.getElementsByTagName("head")[0].appendChild(a)}}function r(t){var e={};if(void 0===e[t]||e[t].length<=0){var n=[];return document.querySelectorAll(t).forEach(function(t){var e=function(t){if(null==t||!0!==t.includes(".html"))return 0;var e=t.split(".html");return!0===t.includes("-tong-thuat.html")&&(e=t.split("-tong-thuat.html")),e=(e=e[0]).split("-"),parseInt(e[e.length-1])}(t.getAttribute("href"));0<parseInt(e)&&n.indexOf(e)<0&&7==e.toString().length&&n.push(e)}),e[t]=n}return e[t]}function S(t){if(void 0!==t&&!0===t.toLowerCase().includes("<\/script>")){var a=["application/javascript","application/ecmascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"],e=document.createElement("section");e.innerHTML=t;var i,n=e.querySelectorAll("script");[].forEach.call(n,function(t){var e,n;(i=t.getAttribute("type"))&&-1===a.indexOf(i)||(e=t,(n=document.createElement("script")).type="text/javascript",e.src?(n.onerror=function(){},n.src=e.src):n.textContent=e.innerText,document.head.appendChild(n),e.parentNode.removeChild(e))})}}function O(){"undefined"!=typeof ZONE_ADS&&0===ZONE_ADS&&t("timeago.min.js",function(){var t=document.querySelectorAll(".time-ago");0<t.length&&timeago.render(t,"vi_VN",{minInterval:60})})}var e,L=(e={exports:{}},e.exports),e.exports),o=function(t,e){"undefined"!=typeof logFetch&&!0===logFetch&&("object"===L(e)&&(e=JSON.stringify(e)),new Image(1,1).src="https://logperf.vnexpress.net/perf?lt=0&dclt=0&sr=0&url=vne_fetch&ua="+encodeURIComponent(navigator.userAgent)+"&url="+t+"&detail="+encodeURIComponent(e))};var n,c=(n={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(t){return null==n?void 0:n[t]}),l="object"==("undefined"==typeof global?"undefined":L(global))&&global&&global.Object===Object&&global,u="object"==("undefined"==typeof self?"undefined":L(self))&&self&&self.Object===Object&&self,d=(l||u||Function("return this")()).Symbol;var s=Array.isArray,f=Object.prototype,v=f.hasOwnProperty,m=f.toStringd 0;function A(t){return null==t?void 0===t?x:_:w&&w in Object(t)?function(t){var e=v.call(t,h),n=t[h];try{var a=!(t[h]=void 0)}catch(t){}var i=m.call(t);return a&&(e?t[h]=n:delete t[r n=-1,a=null==t?0:t.length,i=Array(a);++n<a;)i[n]=e(t[n],n,t);return i}(t,T)+"";if(k(t))return C?C.call(t):"";var e=t+"";return"0"==e&&1/t==-E?"-0":e}function R(t){return null==t?"":T(t)}var B=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,D=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var M=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var U=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var P="\\ud800-\\udfff",N="\\u2700-\\u27bf",H="a-z\\xdf-\\xf6\\xf8-\\xff",q="A-Z\\xc0-\\xd6\\xd8-\\xde",F="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Z="["+F+"]",W="\\d+",J="["+N+"]",G="["+H+"]",K="[^"+P+F+W+N+H+q+"]",V="(?:\\ud83c[\\udde6-\\uddff]){2}",Y="[\\ud800-\\udbff][\\udc00-\\udfff]",Q="["+q+"]",X="(?:"+G+"|"+K+")",tt="(?:"+Q+"|"+K+")",et="(?:['’](?:d|ll|m|re|s|t|ve))?",nt="(?:['’](?:D|LL|M|RE|S|T|VE))?",at="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",it="[\\ufe0e\\ufe0f]?",rt=it+at+("(?:\\u200d(?:"+["[^"+P+"]",V,Y].join("|")+")"+it+at+")*"),ot="(?:"+[J,V,Y].join("|")+")"+rt,ct=RegExp([Q+"?"+G+"+"+et+"(?="+[Z,Q,"$"].join("|")+")",tt+"+"+nt+"(?="+[Z,Q+X,"$"].join("|")+")",Q+"?"+X+"+"+et,Q+"+"+nt,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",W,ot].join("|"),"g");function lt(t,e,n){return  a=t.length;return n=void 0===n?a:n,!e&&a<=n?t:function(t,e,n){var a=-1,i=t.length;e<0&&(e=i<-e?0:i+e),(n=i<>>>=0;for(var r=Array(i);++a<i;)r[a]=t[a+e];return r}(t,e,n)}var st=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");function ft(t){return st.test(t)}var pt="\\ud800-\\udfff",vt="["+pt+"]",mt="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ht="\\ud83c[\\udffb-\\udfff]",gt="[^"+pt+"]",_t="(?:\\ud83c[\\udde6-\\uddff]){2}",bt="[\\ud800-\\udbff][\\udc00-\\udfff]",yt("(?:\\u200d(?:"+[gt,_t,bt].jotion It(}var St,Ot,Lt=(St="ce(1);return n[St]()+a}),kt=(Ot=function(t,e,n){return t+(n?" ":"")+Lt(e)},function(t){return function(t,e,n,a){var i=-1,r=null==t?0:t.length;for(a&&r&&(n=t[++i]);++i<r;)n=e(n,t[i],i,t);return n}(lt(((e=R(e=t))&&e.replace(B,c).replace(D,"")).replace(ut,"")),Ot,"");var e});function Et(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return zt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zt(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function zt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Ct(){var t=document.querySelectorAll("[data-category-id][data-parent-id]:not(.c-parsed)");if(t.length)try{var e=localStorage.getItem("fetchCatFull");if(""!==e&&"{}"!==e){var n,a=$("body").attr("data-source"),i="undefined"!=typeof device_env&&4==device_env?"Desktop":"Mobile",r=JSON.parse(e),o=Et(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.classList.add("c-parsed");var l=c.getAttribute("data-category-id").trim(),u=c.getAttribute("data-parent-id").trim(),d=c.getAttribute("data-vn-campaign");if(0<parseInt(l)){var s=r[l];if(null!==s){var f=void 0;""===u?(f=void 0!==s.l?r[s.l]:s,Rt(c,f,a,i,d)):l===u?c.parentNode.removeChild(c):Rt(c,s,a,i,d)}else c.parentNode.removeChild(c)}}}catch(t){o.e(t)}finally{o.f()}}}catch(t){}}function Tt(g,t,e){var n=1<arguments.length&&void 0!==t?t:0,_=2<arguments.length&&void 0!==e?e:null;if("undefined"!=typeof apiWorker)try{apiWorker.postMessage(JSON.stringify(g))}catch(t){}function b(e,t,n,a,i){if(window.supportLS&&(void 0===i.skip_cache||!1===i.skip_cache)){var r=sessionStorage.getItem(e);(r=null===r?[]:JSON.parse(r))[a.indexOf(t)]={area:t,data:n[t].join(".stringify(r))}catch(t){!function(){var e=30;if(window.supportLS){try{sessionStorage.setItem("check_storage",Math.floor(1e6*Math.random()))}catch(t){e=5}var t=function(t){return("0"+t).slice(-2)},n=new Date,a=parseInt(n.getFullYear()+""+t(n.getMonth()+1)+t(n.getDate())+t(n.getHours())+t(n.getMinutes()));for(var i in sessionStorage)if(i.includes("_VnE_")){var r=i.split("_");a-parseInt(r[2])>=e&&sessionStorage.removeItem(i)}var o=n.getMonth()+1+""+n.getDate();for(var c in localStorage)(c.includes("swap_zone_readed_")&&c!=="swap_zone_readed_"+o||c.includes("pw_")&&c!=="pw_"+o)&&localStorage.removeItem(c)}}(),sessionStorage.setItem(e,JSON.stringify(r))}}}function y(t){var e=t.html();if(void 0!==t.id&&"ads_large_1"===t.id){if(null!==document.querySelector("[data-id=ads_large_1]"))return"";e=e.replace("<div",'<div data-id="ads_large_1"')}if("function"==typeof t.sizes){var n=t.sizes();e=e.replace("\x3c!--placeholder--\x3e",'<div style="background:#F7F7F7;width:'+n.width+"px;height:"+n.height+'px"></div>')}return e}null!==_&&void 0!==_.__middleware&&(void 0!==g.__middleware?g.__middleware=Object.assign(g.__middleware,_.__middleware):g.__middleware=_.__middleware,delete _.__middleware),!0===("undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider|headless/i.test(navigator.userAgent))&&(_=null);var a=window.innerHeight?window.innerHeight+"px":"400px";if(0<n&&(a=n+"px"),"object"===L(_)&&_){var i=Object.keys(g);for(var r in _)_.hasOwnProperty(r)&&i.indexOf(r)<0&&(g[r]=_[r],delete _[r])}void 0===window.cachedAPIURL&&(window.cachedAPIURL={});var l=[],x=[],w={},A=window.lazyKey,j=window.supportLS;new Promise(function(e,t){var n=setInterval(function(){if("undefined"!=typeof IntersectionObserver)if(cleaReady&&!0===window.lazyReady)e();else var t=setInterval(function(){void 0!==window.lazyReady&&!0===window.lazyReady&&(clearInterval(t),e())},100)},100);setTimeout(function(){clearInterval(n),t()},5e3)}).then(function(){var m=0,t=function(t,e){var n=1<arguments.length&&void 0!==e?e:0,a=document.querySelectorAll(t);return 1==n?a:a.length}(".lazier:not(.hidden)",1),e=new IntersectionObserver(function(t,i){t.forEach(function(c){if(1==navigator.userAgent.includes("HeadlessChrome")&&null!=g[c.target.id]||0<c.intersectionRatio&&void 0!==g[c.target.id]&&null!=g[c.target.id]||void 0!==window.registryArea&&!0===window.registryArea.includes(c.target.id)){var t=function(){var s=c.target.id,t=1;try{var e=document.getElementById(s);e.classList.add("hidden"),t=e.getAttribute("data-loaded")}catch(t){}if(1==t||void 0===g[s])return{v:void 0};var f=0,r=0,p=Object.keys(g[s]).length;w[s]=[];function n(t){var u=o,e=s+"_"+t;if(!1===x.includes(e)){if(x.push(e),void 0!==_&&null!=_&&"object"===L(_[s])&&"object"===L(_[s][r])){var n=y(_[s][r]);v&&(document.getElementById(s).insertAdjacentHTML("beforebegin",n),S(n)),w[s][u]=n,delete _[s][r],u=++o}r++;var d=g[s][t];if(c.target.id!=d.id){var a=!0;if("function"==typeof d.placeholder&&v)document.getElementById(s).insertAdjacentHTML("beforebegin",d.placeholder());else if("function"==typeof d.html){var i=y(d);v&&(document.getElementById(s).insertAdjacentHTML("beforebegin",i),S(i)),w[s][u]=i,void 0!==d.callback&&d.callback(),a=!1,++f==p&&(document.getElementById(s).setAttribute("data-loaded",1),O(),Ct(),appendTracking(),j&&v&&b(A,s,w,h,d)),f==p&&"object"===L(g.__middleware)&&"function"==typeof g.__middleware[s]&&g.__middleware[s]()}!0===a&&new Promise(function(t,e){if(void 0!==d.api_url){if("function"==typeof d.diff&&void 0!==d.diff_type&&"server"===d.diff_type&&(d.api_url=d.api_url.replace("${exclude}",d.diff().join(","))),"function"==typeof d.diff&&void 0!==d.diff_type&&"client"===d.diff_type&&d.api_url.includes("${limit=")){var n=parseInt(d.api_url.match(/{limit=(.*)}/).pop()),a=n+d.diff().length;d.api_url=d.api_url.replace("${limit="+n+"}",a)}if(void 0!==cachedAPIURL[d.api_url]&&cachedAPIURL[d.api_url])t(cachedAPIURL[d.api_url]);else if(void 0!==d.reuse){var i;l.includes(d.api_url)||(i=setTimeout(function(){try{clearInterval(r),d.cache=!0,I(d,t,e)}catch(t){}},2e3),l.push(d.api_url));var r=setInterval(function(){void 0!==cachedAPIURL[d.api_url]&&cachedAPIURL[d.api_url]&&(clearInterval(r),clearTimeout(i),t(cachedAPIURL[d.api_url]))},50)}else I(d,t,e)}else t()}).then(function(e){if(f++,void 0!==d.api_url){var n=document.getElementById(d.id);if(void 0!==e&&e){"function"==typeof d.diff&&void 0!==d.diff_type&&"client"===d.diff_type&&(e.diff=d.diff());var a=d.parser(e),t=!1;if(v&&null!==n)try{a instanceof Promise?(t=!0,a.then(function(t){n.outerHTML=t,j&&v&&(w[s][u]=t,b(A,s,w,h,d)),void 0!==d.callback&&d.callback(e),"undefined"!=typeof lazyLoadInstance&&void 0!==lazyLoadInstance.update&&lazyLoadInstance.update()}).catch(function(t){n.outerHTML=t,j&&v&&(w[s][u]=t,b(A,s,w,h,d)),void 0!==d.callback&&d.callback(e),"undefined"!=typeof lazyLoadInstance&&void 0!==lazyLoadInstance.update&&lazyLoadInstance.update()})):n.outerHTML=a}catch(t){n.outerHTML=a}!1===t&&(w[s][u]=a,void 0!==d.callback&&d.callback(e),"undefined"!=typeof lazyLoadInstance&&void 0!==lazyLoadInstance.update&&lazyLoadInstance.update()),void 0!==d.cache&&(cachedAPIURL[d.api_url]=e),5<=++m&&"undefined"!=typeof CmtWidget&&void 0!==CmtWidget.mix&&(CmtWidget.mix(),m=0)}else null!==n&&(void 0!==d.fallback&&d.fallback(),n.parentNode.removeChild(n))}else if(void 0!==d.callback&&(d.callback(),void 0!==d.parser)){var i=d.parser();w[s][u]=i}if(f==p&&0<m&&m<=5&&"undefined"!=typeof CmtWidget&&void 0!==CmtWidget.mix&&(CmtWidget.mix(),m=0),f==p&&void 0!==_&&null!=_&&"object"===L(_[s])&&0<Object.keys(_[s]).length){var r=document.getElementById(s),o=1;for(var c in _[s]){var l=y(_[s][c]);v&&(r.insertAdjacentHTML("afterend",l),S(l)),w[s][p+o]=l,delete _[s][c],o++}}f==p&&"object"===L(g.__middleware)&&"function"==typeof g.__middleware[s]&&g.__middleware[s](),f==p&&(document.getElementById(s).setAttribute("data-loaded",1),O(),Ct(),appendTracking(),j&&v&&b(A,s,w,h,d))}).catch(function(t){f++,void 0!==d.fallback&&d.fallback()})}}o++}var o=0,v=!1===window.registryArea.includes(s);for(var a in g[s])n(a);i.unobserve(c.target),document.getElementById(s).removeAttribute("style")}();if("object"===L(t))return t.v}else if(1==navigator.userAgent.includes("HeadlessChrome")&&null!=document.getElementById(c.target.id)&&void 0===g[c.target.id]){vgetElementById(c.target.id);e.parentNode.removeChild(e)}})},{rootMargin:a,threshold:[0,.25,.5,.75,1]}),h=[];t.forEach(function(t){h.push(t.getAttribute("id")),e.observe(t)})}).catch(function(t){})}var Rt=function(t,e,n,a,i){void 0!==e&&(t.innerHTML=e.n,null!==i&&""!==i&&t.setAttribute("data-itm-source","#vn_source=".concat(n,"&vn_campaign=").concat(i,"&vn_medium=Title-").concat(kt(function(t,e){var n=1<arguments.length&&void 0!==e&&e;if(void 0!==t&&t)return t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/š|ş/g,"s")).replace")}var r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function Dt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Mt(t,a,e,n){var i=2<arguments.length&&void 0!==e?e:0,r=3<arguments.length&&void 0!==n?n:"_large_1";if(1===i)return Ht(a);if(2!==i){if(3===i)return Ut(function(t){document.querySelector("#"+r).insertAdjacentHTML("beforebegin",t)},r),"";if(void 0!==t.data&&0<t.data.length){var o,c={},l=Bt(t.data);try{for(l.s();!(o=l.n()).done;){var u=o.value;c[Object.keys(u)[0]]=Object.values(u)[0]}}catch(t){l.e(t)}finally{l.f()}var d="";try{d=t.meta.sign}catch(t){}return new Promise(function(e,n){I({api_url:"https://gw.vnexpress.net/ar/get_basic?article_id="+Object.keys(c).join(",")+"&data_select=article_id,article_type,titleurl,publish_time,lead,privacy,original_cate,off_thumb,article_category&thumb_size=300x180&thumb_quality=100&thumb_dpr=1,2&thumb_fit=crop"},function(t){t.then(function(t){void 0!==t.data&&0<t.data.length?e(qt(t.data,a,".section_topstory .container",c,d)):Ut(n,r)}).catch(function(t){Ut(n,r)})},function(t){Ut(n,r)})})}return Ut(function(t){document.querySelector("#"+r).insertAdjacentHTML("beforebegin",t)},r),""}Nt(a);try{CmtWidget.mix(),appendTracking()}catch(t){}}var Ut=function(t,e){t('<div id="'+e+'_fallback" class="lazier"></div>');var n={};n[e+"_fallback"]={0:{id:"tinmoinhat",diff:function(){return r(".section_topstory article h3 a, .sub-news-top h3 a")},diff_type:"server",api_url:"https://gw.vnexpress.net/bt?site_id=1000000&category_id=1000000&showed_ct=article_id,article_type,title,share_url,thumbnail_url,publish_time,lead,privacy,original_cate,article_category,off_thumb&exclude_id=${exclude}&thumb_size=300x180&thumb_quality=100&thumb_dpr=1,2&thumb_fit=crop",placeholder:function(){return Pt({},"tinmoinhat",1)},parser:function(t){return Pt(t,"tinmoinhat",0)},callback:function(){return Pt({},"tinmoinhat",2)}}},Tt(n,0)},Pt=function(t,e,n){var a=2<arguments.length&&void 0!=lass="text line"></p>\n                <p class="text"></p>\n            </h4>\n        </article>\n        <article class="item-news">\n            <h4 class="title-news">\n                <p class="text line"></p>\n                <p class="text"></p>\n            </h4>\n        </article>\n    </div>\n    ')},qt=function(t,e,n,a,i){var r=2<arguments.length&&void 0!==n?n:".section_topstory .container",s=3<arguments.length&&void 0!==a?a:null,o=4<arguments.length&&void 0!==i?i:null,c=document.querySelector(r),l="";null!==c&&(l=' style="height:'.concat(parseFloat(getComputedStyle(c,null).height.replace("px",""))-32,'px"'));var u="BanCoTheBoLoAdBlock";"tinmoinhat"===e&&(u="TinMoiAdBlock");var d="",f=" gaBoxLinkDisplay";return o&&(d='data-event-sign="'.concat(o,'"'),f=" gaElementVisibility dcb_push_sign"),'\n    <div data-event-category="Article Link Display" data-event-action="Box-'.concat(u,'" data-campaign="Box-').concat(u,'" data-event-label="Item-0" ').concat(d,' class="box-category box-news-small box-news-replace').concat(f,'" id="').concat(e,'" style="margin-bottom:0">\n        <div class="width_common scroll-news-replace scrollbar-inner"').concat(l,">").concat(function(t,e){var n="",a=1,i="Folder";"undefined"!=PAGE_DETAIL&&0<PAGE_DETAIL&&(i="Detail");var r,o=Bt(t);try{for(o.s();!(r=o.n()).done;){var c=r.value,l=' data-event-category="Article Link Click" data-event-action="Box-'+e+'" data-event-label="Item-'+a+'"',u=' data-medium="Item-'+a+'" data-thumb="0" data-show="1" data-itm-source="#vn_source='+i+"&vn_campaign=Box-"+e+"&vn_medium=Item-"+a+'&vn_term=Desktop&vn_thumb=0"';null!==s&&void 0!==s[c.article_id]&&(u=' data-medium="Item-'+a+'" data-thumb="0" data-show="1" data-itm-source="#vn_source='+i+"&vn_campaign=Box-"+e+"&vn_medium=Item-"+a+"&vn_term=Desktop&vn_thumb=0&vn_sign="+s[c.article_id]+'"');var d="";void 0!==c.thumbnail_url&&c.thumbnail_url.trim().length&&0==+c.off_thumb&&(u='data-medium="Item-'+a+'" data-thumb="1" data-show="1" data-itm-source="#vn_source='+i+"&vn_campaign=Box-"+e+"&vn_medium=Item-"+a+'&vn_term=Desktop&vn_thumb=1"',null!==s&&void 0!==s[c.article_id]&&(u='data-medium="Item-'+a+'" data-thumb="1" data-show="1" data-itm-source="#vn_source='+i+"&vn_campaign=Box-"+e+"&vn_medium=Item-"+a+"&vn_term=Desktop&vn_thumb=1&vn_sign="+s[c.article_id]+'"'),d='\n                <div class="thumb-art">\n                    <a'.concat(l," ").concat(u,' href="').concat(c.share_url,'" title="').concat(c.title,'" class="thumb thumb-5x3 thumb-show">\n                        ').concat(p(c,12),"\n                    </a>\n                </div>\n                ")),n+='\n            <article class="item-news small-thumb">\n          "),a++}}catch(t){o.e(t)}finally{o.f()}return n}(t,u),"</div>\n    </document.cookie).split(";"),a=0;a<n.length;a++){for(var i=n[a];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(e))return i.substring(e.length,i.length)}return""}("myvne_user_id")),Zt={_detail_blockRight_3:{large_3:{id:"tinmoinhat",diff:function(){return r(".section_topstory article h3 a, .sub-news-top h3 a")},diff_type:"server",api_url:"https://gw.vnexpress.net/bt?site_id=1000000&category_id=1000000&showed_area=vne_topsre_url,thumbnail_url,publish_time,lead,privacy,original_cate,article_category&exclude_id=${exclude}&thumb_size=300x180&thumb_quality=100&thumb_dpr=1,2&thumb_fit=crop",placeholder:function(){return Pt({},"tinmoinhat",1,"_detail_blockRight_3")},parser:function(t){return Pt(t,"tinmoinhat",0,"_detail_blockRight_3")},callback:function(){return Pt({},"tinmoinhat",2,"_detail_blockRight_3")}}}};if(0<Ft){var $t=function(){if(void 0!==window.supportLS&&!0===window.supportLS){var t=new Date;try{var e=localStorage.getItem("swap_zone_readed_"+(t.getMonth()+1)+t.getDate());if(null!==e){var n=Object.valuesurn[]}(),Wt="boxRecommendation_"+Ft;Zt._detail_blockRight_3.large_3={id:Wt,api_url:"https://ps.vnexpress.net/r/n?size=3&limit=10&onlyid=1&box=adblocker&exc="+$t.join(",")+"&fosp_aid="+Ft,placeholder:function(){return Mt({},Wt,1,"_detail_blockRight_3")},parser:function(t){return Mt(t,Wt,0,"_detail_blockRight_3")},callback:function(){return Mt({},Wt,2)},fallback:function(){return Mt({},Wt,3)}}}function Jt(t){return window.localStorage&&"function"==typeof window.localStorage.getItem?function(t){var e=""+window.localStorage.getItem(t);if(2===(e=e.split(";ex=")).length){var n=new Date;if((n=n.valueOf())<=e[1]||0==e[1])return e[0]}return""}(t):(e=t,2===(e=("; "+document.cookie).split("; "+e+"=")).length?e.pop().split(";").shift():"");var e}!0===function(t){if(1!=+Jt("is_adsblock"))return!1;for(var e in t)if(void 0!==e){var n=document.querySelector("#"+e);null!==n&&(n.insertAdjacentHTML("beforebegin",'<div id="'+e+'_alias" class="lazier"></div>'),t[e+"_alias"]=t[e],delete t[e])}return!0}(Zt)&&Tt(Zt,0)}();