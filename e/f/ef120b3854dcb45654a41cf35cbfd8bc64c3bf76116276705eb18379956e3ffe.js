<!DOCTYPE html><body><script>"use strict";function LocalStorageStore(){return{get:function(e){if(!e)return null;try{return JSON.parse(localStorage.getItem(e)y(o)),!0}catch(e){return!1}},has:function(e){try{return null!==localStorage.getItem(e)}catch(e){return!1}}}}function CookieStore(){return{get:function(e){if(!e)return null;return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},set:function(e,o,n,t,a,r){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return;var i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+86400*n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString()}document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+i+(a?"; domain="+a:"")+(t?"; path="+t:"")+(r?"; secure":"")},has:function(e){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}}}function ParentCommunicator(i,c){var e=JSON.parse(decodeURIComponent(window.location.hash.substr(1))),s=e.namespace,u=e.window_origin,m=e.iframe_origin,o=e.debug,t=["playbuzz","pbdEventListener("message",n)},sendDataToParent:l};function n(e){var o=e.origin||e.originalEvent.origin;if(-1!==[u,m].indexOf(o)){var n=null;try{n=JSON.parse(e.data)}catch(e){}if(n&&"object"==typeof n&&!(n instanceof Array)&&"msg_type"in n&&"xdsc_write"===n.msg_type&&"namespace"in n&&n.namespace===s){p("got data from page:",n.cookie_name,n.cookie_val,n.expires_days);var t=parseInt(n.expires_days,10);i.set(n.cookie_name,n.cookie_val,t),c.set(n.cookie_name,n.cookie_val);var a=!i.has(n.cookie_name),r=!c.has(n.cookie_name);(a||r)&&function(e,o){e&&p("FAILED TO SET COOKIE");o&&p("FAILED TO SET LOCAL STORAGE");var n={msg_type:"xdsc_fail",cookie_failed:e,local_storage_failed:o,namespace:s};window.parent.postMessage(JSON.stringify(n),u)}(a,r),l()}}}function l(){for(var e={},o=0;o<t.length;o++)e[t[o]]=i.get(t[o])||c.get(t[o]);var n={cookies:e,msg_type:"xdsc_read",namespace:s};p("sending data to parent:",e),window.parent.postMessage(JSON.stringify(n),u)}function p(){o&&(arguments[0]="[XDOMAIN IFRAME] "+arguments[0],console.log.apply(console,arguments))}}var customCookieStore=new CookieStore,localStore=new LocalStorageStore,communicator=new ParentCommunicator(customCookieStore,localStore);communicator.listen(),communicator.sendDataToParent()</script>
