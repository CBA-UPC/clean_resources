<!DOCTYPE html>
<html lang=fineProperty(e,t,{configurable:!1,enumerable:!0,get:nt.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([functi.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="https://ow.pubmatic.com/cookie_sync",s="ok",i="noAttribute("scrolling","no"),n.setAttribute("marginheight",0),n.setAttribute("marginwidth",0),n.setAttribute("TOPMARGIN",0),n.setAttribute("LEFTMARGIN",0),n.setAttribute("allowtransparency","true"),n.setAttribute("width",t),n.setAttribute("height",e),n}(0,0)).style.display="inline",i.style.overflow="hidden",i.src=a;var r=document,o="body",s=(r=r||document,void 0);s=o?r.getElementsByTagName(o):r.getElementsByTagName("head");try{(s=s.length?s:r.getElementsByTagName("body")).length&&(s=s[0]).insertBefore(i,s.firstChild)}catch(e){}}else console.log('User sync type "'+e+'" not supported for bidder: "'+n+'"');else console.log('No sync url for bidder "'+n+'": '+t);var i,a}function f(e){e=JSON.parse(e);e.status.toLowerCase()!==s&&e.status.toLowerCase()!==i||e.bidder_status&&e_cooki})}function g(e,t,n,r){r=3<arguments.length&&void 0!==r?r:{};try{var o,s=void 0,i=r.method||(n?"POST":"GET"),a="object"===(void 0===t?"undefined":u(t))?t:{success:function(){console.log("xhr success")},error:function(e){coess=t),(s=new window.XMLHttpRequest).onreadystatechange=function(){var e;4===s.readyState&&(200<=(e=s.status)&&e<300||304===e?a.success(s.responseText,s):a.error(s.statusText,s))},s.ontimeout=function(){console.log("xhr timeout after ",s.timeout,"ms")},"GET"===i&&n&&(o=parseURL(e,r),c(o.search,n),e=formatURL(o)),s.open(i,e),s.timeout=3e3,r.withCredentials&&(s.withCredentials=!0),r.preflight&&s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("Content-Type",r.contentType||"text/plain"),"POST"===i&&n?s.send(n):s.send()}catch(e){console.log("xhr construction",e)}}function y(e){if(d&&0<Object.keys(d).length)return d[e];var t=window.location.search.substring(1);if(t)for(var n=t.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");o&&2==o.length&&null==d[o[0]]&&(d[o[0]]=o[1])}return e&&""!=e?d[e]:void 0}var b,m={pubid:(isNaN(parseInt(y("pubid")))?0:parseInt(y("pubid")))||0,profid:(isNaN(parseInt(y("profid")))?0:parseInt(y("profid")))||0,bidders:(b=y("bidders"))&&0<b.length?(b=b.split(","))&&0<b.length?b:void 0:a,gdpr:(isNaN(parseInt(y("gdpr")))?0:parseInt(y("gdpr")))||0,gdpr_consent:y("gdpr_consent")||""},h={withCredentials:!0};setTimeout(function(){l||g(o,f,JSON.stringify(m),h)},3e3),window.addEventListener("message",function(e){"consent-data"===e.data.type&&(r=e.data).consentMetadata&&!m.gdpr_consent&&(l=!0,r.consentMetadata.gdprApplies&&(m.gdpr=1,m.gdpr_consent=r.consentString||"",g(o,f,JSON.stringify(m),h)))},!1),window.parent.postMessage({sentinel:"amp",type:"send-consent-data"},"*")}]);
  // end
  </script>
</head>
<body>
</body>
</html>