window.TNCMS||(window.TNCMS={}),window.TNCMS.Tracking=function(){"use strict";var a={},u={},l=null,w=0;unction g(e){var t="?";if(u[e]&&window.JSON&&(t+="d=",t+=encodeURIComponent(JSON.stringify(u[e])),t+="&"),document.referrer){var n=document.referrer.match(/:\/\/(.[^/]+)/)[1];t+="rd="+encodeURIComponent(n)+"&"}return t+"i="}function k(e){for(var t=["app","url","metric","bucket","id"],n=0;n<t.length;n++)if(!e[t[n]]){o("Missing required parameter: "+t[n]);return}var c=g(e.bucket),r=e.domain||document.domain;return c+=escape(e.id)+"&r="+escape(e.url).replace("%3A",":"),"//"+r+"/tncms/tracking/"+e.app+"/"+e.metric+"/"+c}function D(){var e=null,t=a;a={},l=null;for(var n in t){var c=n.split(":",2),r=c[0].split("|",2),f=g(r[1]),d=!1;navigator.sendBeacon&&(d=!0);for(var i="//"+r[0]+"/tncms/tracking/"+c[1]+"/"+f;t[n].length;){var b=t[n].pop();i.length+b.length>2e3&&(d?navigator.sendBeacon(i):new Image().src=i,i="//"+r[0]+"/tncms/tracking/"+c[1]+"/"+f),i+=b+","}d?navigator.sendBeacon(i):new Image().src=i}}function p(e){if(!e.app){o("Missing required parameter: app");return}if(!e.metric){o("Missing required parameter: metric");return}if(!e.id){o("Missing required parameter: id");return}var t=e.domain||document.domain,n=t+"|"+e.bucket+":"+e.app+"/"+e.metric;a[n]||(a[n]=[]),a[n]=a[n].concat(e.id),l&&window.clearTimeout(l),l=window.setTimeout(D,1e3)}function v(e){u[e.bucket]||(u[e.bucket]={}),u[e.bucket][e.name]=e.value}function m(e){u[e.bucket]&&delete u[e.bucket][e.name]}return{addEvent:function(e){e.bucket="global",p(e)},getRedirectURL:addData:function(e){e.bucket="global",v(e)},removeData:trackDeclarativeEvents:function(e){e=e||{};var t=e.root||document.body,n=e.domain||document.domain;if(typeof jQuery>"u")throw"Declarative event tracking requires jQuery";jQuery(t).find("[data-tncms-tracking]").filter(":visible").each(function(){var c=jQuery(this),r=c.data("tncmsTracking").split("/",3);r.length>=3&&TNCMS.Tracking.addEvent({domain:n,id:r[2],metric:r[1],app:r[0]}),o("Removing tncms tracking: "+c.data("tncmsTracking")),c.removeData("tncmsTracking")})},createBucket:function(e){var t=e.app||null,n=e.metric||null,c=e.domain||document.domain,r="bucket"+w++,f=e.data||{};for(var d in f)v({bucket:r,name:d,value:f[d]});return{addEvent:addData:function(i){i.bucket=r,v(i)},removeData:getRedirectURL:function(i){return i.bucket=r,i.domain=c,k(i)}}}}}();
//# sourceMappingURL=tracking.js.map