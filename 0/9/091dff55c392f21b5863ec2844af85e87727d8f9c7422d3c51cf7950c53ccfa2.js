var Clock={0:10:function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c}));var n=r(4),o=r(36),u=r(32),a=o.a,i=n,c=u},105:16:166:19:2:21:22:226:227:31:32:function(t,e,r){"use strict";r.r(e),r.d(e,"encode",(function(){return d})),r.d(e,"decode",(function(){return v}));var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=n),u=String.fromCharCode,a=function(t){var e=null;return t.length<2?(e=t.charCodeAt(0))<128?t:e<2048?u(192|e>>>6)+u(128|63&e):u(224|e>>>12&15)+u(128|e>>>6&63)+u(128|63&e):(e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320),u(240|e>>>18&7)+u(128|e>>>12&63)+u(128|e>>>6&63)+u(128|63&e))},i=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,c=s=function(t){return t).replace(/[\s\S]{1,3}/g,c)},f=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join(oda.join("")},p=functio{1,4}/g,h)}(t).replace(f,l)};function d(t,e){return e?s(String(t)).replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"})).replace(/=/g,""):s(String(t))}function v(t){return p(String(t).repla=t?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))}},34:function(t,e,r){r.p=window.MAIN_lid Date"}},36:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(21),o=r.n(n),u=r(22),a=r.n(u),i=r(5),c=r.n(i);c.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var s=new(function(){function t(){o()(this,t),this.refId="REF_ID"in window?REF_ID:1,this.kassa=!1,this.is_clean=!1,this.source=50,this.setParams()}return a()(t,[{key:"init",value:function(t){this.refId="REF_ID"in window?REF_ID:1,this.kassa=!!t.isKassa&&t.isKassa,this.source=t.whence?t.whence:50}},{key:"isKassa",get:function(){return this.kassa}},{key:"whence",get:function(){return this.source}},{key:"this.refId}},{key:"setParams",value:function(){var t=this;c.a.post("/getuserdit(e.datale.warn(t)}))}}]=t.exports},4:function(t,e,r){"use strict";r.r(e),r.d(e,"get",(function(){return u})),r.d(e,"getBool",(function(){return a})),r.d(e,"set",(function(){return i})),r.d(e,"remove",(function(){return c}));var n={path:"/",secure:!1},o=new Date("Fri, 31 Dec 9999 23:59:59 UTC");function u(t,e){e=void 0!==e?e:void 0;var r=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return r?decodeURIComponent(r[1]):e}function a(t,e){var r=u(t,e);switch(!0){case r===e:return e;case"true"===r:return!0;default:return!1}}function i(t,e,r){var u,a;(r=function(t){return{path:t&&t.path||n.path,domain:t&&t.domain||n.domain,expires:t&&t.expires||n.expires,secure:t&&void 0!==t.secure?t.secure:n.secure}}(r)).expires=("number"==typeof(u=void 0===e?-1:r.expires)?(a=(new Date).getTime(),u=u===1/0?o:new Date(a+1e3*u)):"string"==typeof u&&(u=new Date(u)),u),document.cookie=function(t,e,r){var n;return n=t+"="+(e=encodeURIComponent(e)),n+=(r=r||{}).path?";path="+r.path:"",n+=r.domain?";domain="+r.domain:"",n+=r.expires?";expires="+r.expires.toUTCString():"",n+=r.secure?";secure",voi=t.rt=r(e()=t.ce=t.,0,0,0orma)/,0,604e,o,0,of |.=t.ime agExp:rts=r(924)},924:function(t,e,r){"use strict";r.r(e),r.d(e,"){return E}));var n=r(6),o=r.n(n),u=r(21),a=r.n(u),i=r(22),c=r.n(i),s=r(0),f=r.n(s),l=r(51),h=r.n(l),p=r(105),d=r.n(p),v=r(2),g=r.n(v),m=r(10),y=r(3e.set(t,r)}var b=function t(ut(e,t)})return e(unction(urn t(e,r)}))},D=new WeakMap,M=new WeakMap,S=new WeakMap,_=new WeakMap,T=new WeakMap,E=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;a()(this,t),w(this,D,{writable:!0,value:null}),w(this,M,{writable:!0,value:null}),w(this,S,{writable:!0,value:null}),w(this,_,{writable:!0,value:null}),w(this,T,{writable:!0,value:null}),f()(this,"getServerTime",o()(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("/api/web/server_tn t.json1e3*t.time})));case 1:case"end":return t.stop()}}),t)})))),d()(this,D,n),d()(this,M,u),d()(this,S,e),d()(this,_,r)}return c()(t,[{key:"mountDOM",value:function(){h()(this,D)&&(h()(this,D).innerHTML=this.userTime),h()(this,M)&&(h()(this,M).innerHTML=this.userDate)}},{key:"currentDate",get:function(){var t=60*(new Date).getTimezoneOffset()*1e3,e=3600*parseFloat(m.a.get("tzo",0))*1e3;return new Date(new Date(h()(this,T)).getTime()+t+e)}},{key:"userDate",get:function(){return x()(this.currentDate,h()(this,_))}},{key:"userTime",get:function(){return x()(this.currentDate,h()(this,S))}},{key:"start",value:function(t){var e=this,r=0,n=0,u=function(){var t=o()(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getServerTime();case 2:r=t.sent,n=Date.now();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var a=o()(g.a.mark((function o(){var a;return g.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(a=Date.now()-n,r+=a,n+=a,!(a<0||a>2e3)){o.next=6;break}return o.next=6,u();case 6:d()(e,T,new Date(r)),t(r);case 8:case"end":return o.stop()}}),o)arguments)}}();a(),b(a,1e3)}}]),t}();document.addEventListener("DOMContentLoaded",(function(){if(!window.exact_time&&document.querySelector(".header-aside-datetime__time")){var t=document.querySelector(".header-aside-datetime__time"),e=document.querySelector(".header-aside-datetime__today");window.exact_time=new E("HH:mm","DD.MM.YYYY",t,e),window.exact_mountDOM()}))}}))}});