(function(g,m,B,u){var p=function(){function d(c){if(c&&f.O(c)){var b={name:null,w:null,f:null};if(0<=c.indexOf(".")){c=c.split(".",2);var l=c[0];c=c[1];if(!a[l])return;b.w=l}if(0<=c.indexOf(":")){c=c.split(":",2);l=c[0];c=c[1];if(!e[l])return;b.f=l}if(b.f||y.prototype[c])return b.name=c,b}}var e={},a={},b={create:function(c,b,l){if(!c)return!1;b=b||c;if(a[b])return!1;a[b]=new y(c,b,l);return!0},exec:function(c){var b=Array.prototype.slice.call(arguments,1);if("exec"===c)return!1;if(p[c])return p[c].apply(null,
b);var l=d(c);if(!l)return!1;var h=e[l.f];if(f.isArray(h))return e[l.f].push(Array.prototype.slice.call(arguments,0)),!0;if(h&&!h[l.name])return!1;for(var g=l.w?[a[l.w]]:f.values(a),t=b.length&&f.o(b[-1])?b[-1].callback:u,z=f.H(),m=!0,n=0;n<g.length;n++){var A=g[n];t&&(b[-1].callback=z.B());m=(h||A)[l.name].apply(A,b)&&m}z.complete(t);return m},get:function(b,a){a=a||f.c;"identity"===b&&v.N(n.b()},register:function(b,a){if(!e[b]||!f.j(a))return!1;var l=e[b];e[b]=a();setTimeout(function(){for(var b=
0;b<l.length;b++)p.exec.apply(null,l[b])});return!0},require:function(b){if(e[b])return!1;e[b]=[];w.fa("/plugins/"+b+".js");return!0},set:function(a,k){b.h=b.h||function(b,a){p.exec("associate",b,{callback:a})};switch(a){case "captureEmailForms":k?x.C(b.h):x.da(b.h)}}};return b}(),x=function(){function d(){l=function(){m.addEventListener("submit",c,!1);setTimeout(;return!0};m.addEventListener("submit",l,!0);m.addEventListener("click",b,!0)}function e(b){var a=
/\S+@\S+.\S/;b=b.getElementsByTagName("input");for(var c,k=0;k<b.length;k++)if(c=b[k],!c.hasAttribute("center-ignore")&&(c.hasAttribute("center-associate-email")||"email"===c.type||0<=c.name.toLowerCase().replace(/[^a-z]+/gi,"").indexOf("email")||0<=c.id.toLowerCase().replace(/[^a-z]+/gi,"").indexOf("email")||0<=c.className.toLowerCase().replace(/[^a-z]+/gi,"").indexOf("email")))return a.test(c.value)?c.value:null;return null}function a(b,a){function c(){if(!b.G){b.G=!0;if(a){var k=m.createElement("input");
k.type="hidden";for(var d=["name","value"],l=0;l<d.length;l++){var e=k,h=d[l],f=void 0,f=f||h,h=a.getAttribute(h);null!==h&&e.setAttribute(f,h)}b.appendChild(k);k=["action","enctype","method","novalidate","target"];for(d=0;d<k.length;d++)l=b,f="form"+k[d],e=(e=k[d])||f,f=a.getAttribute(f),null!==f&&l.setAttribute(e,f)}HTMLFormElement.prototype.centerOldSubmit.call(b)}}try{for(var k=e(b),l=f.H(),d=0;d<q.length;d++)q[d].call(null,k,l.B());l.complete(c)}catch(h){c()}setTimeout(c,2E3)}function b(b){var a=
b.target;if(a&&0<="INPUT BUTTON".indexOf(a.tagName)&&0<="submit image button".indexOf(a.type)){b=b.target;a=b;if(a.form)a=a.form;else for(;a&&"FORM"!==a.tagName;)a=a.parentElement;a&&!a.hasAttribute("center-ignore")&&(a.centerActor=b)}}function c(b){if(!1!==b.returnValue&&!b.defaultPrevented){var c=b.target;if(c&&!c.hasAttribute("center-ignore")&&e(c))return a(c,c.centerActor),b.preventDefault(),!1}}function k(){HTMLFormElement.prototype.centerOldSubmit=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=
function(){if(this.hasAttribute("center-ignore")||!e(this))return HTMLFormElement.prototype.centerOldSubmit.call(this);a(this,null)}}var l,h=!1,q=[];return{C:function(b){!h&&m.addEventListener&&g.HTMLFormElement&&!h&&(d(),k(),h=!0);q.push(b)},da:function(a){a=q.indexOf(a);-1<a&&q.splice(a,1);!q.length&&h&&h&&(m.removeEventListener("submit",l,!0),m.removeEventListener("click",b,!0),HTMLFormElement.prototype.submit=void 0,h=!1)}}}(),w=function(){return{F:function(d,e,a){a=a||f.c;var b={method:"GET"};
b.url="https://api.leadpages.io"+d+"?"+f.R(e);var c=new XMLHttpRequest;"withCredentials"in c?(c.open(b.method,b.url,!0),c.withCredentials=!0,c.onreadystatechange=function(){4===c.readyState&&(b.code=c.T,400<=c.status?a(c.responseText,b):a(null,b))},c.ontimeout=function(){b.T=0;a("TIMEOUT",b)},c.send()):(d=new Image,f.D(d,"load",,d.src=b.url)},fa:function(d){var e=m.createElement("script");e.async=!0;e.src="https://js.center.io"+d;m.getElementsByTagName("head")[0].appendChild(e)}}}(),
n=function(){var d=[],e={flush:function(){if(d.length){for(var a=[],b=[],c=[],k=0;k<d.length;k++)a.push(d[k].kind),b.push(d[k].label),c.push(d[k].value);d.length=0;a={version:"1.8.6",correlateBy:f.K("center-correlate-by")||f.L(),origin:"center-js",kind:a,label:b,value:c};w.F("/analytics/v1/observations/capture",a)}},g:function(a,b,c){d.push({kind:a,label:b,value:c});e.A=e.A||f.U(e.flush,4E3,!1);e.A()},u:function(a,b){if(g.performance&&g.performance.getEntriesByName){var c=performance.getEntriesByName(b)[0];
c&&c.duration&&e.g("timer",a,c.duration)}},ca:function(a){if(!(g.performance&&g.performance.mark&&g.performance.measure&&g.performance.getEntriesByName))return f.c;var b="center-"+a+"-s",c="center-"+a+"-e",k="center-"+a;performance.mark(b);return function(){performance.mark(c);performance.measure(k,b,c);e.u(a,k)}},P:function(a){if(a)try{var b={uid:f.i("centerVisitorId")||"",url:r.M(),ua:navigator.userAgent,n:(a.name||"").substr(0,100),m:(a.message||"").substr(0,100),s:(a.stack||"").replace(/\s+/gi,
" ").substr(0,500)};e.g("text","error",f.R(b));e.flush()}catch(c){}},b:function(a,b){b=b||g;return ,ha:function(a){for(var b in a)a.hasOwnProperty(b)&&f.j(a[b])&&(a[b]=e.b(a[b],a))}};return e}(),r=function(){return{V:function(){return{x:g.innerWidth||(m.documentElement||{}).clientWidth||(m.body||{}).clientWidth||0,y:g.innerHeight||(m.documentElement||{}).clientHeight||(m.body||{}).clientHeight||0}},W:X:function(d){function e(a){a=
Math.abs(Math.floor(a));return(10>a?"0":"")+a}d=d||new Date;d=-d.getTimezoneOffset();return(0<=d?"+":"-")+e(d/60)+":"+e(d%60)},M:Y:function(){var d=f.J(r.Z());(d=d.utm_email||d.center_email||d.email||d.wemail||u)&&(d=d.replace(/ /g,"+"));return d},Z:}(),y=function(){function d(b,a,k){var d=this;d.ba=b;d.name=a;d.options=f.I(k||{},e);g.fbq&&m.querySelector&&(b=m.querySelector('meta[name="fb-pixel-id"]'))&&
b.content&&(d.options.facebookPixelId=b.content);!d.options.servingTags&&m.querySelector&&(b=m.querySelector('meta[name="leadpages-serving-tags"]'))&&b.content&&b.content.split&&(d.options.servingTags=b.content.split(","));d.options.captureEmailForms&&x.C(;d.options.captureEmailURLs&&(b=r.Y())&&d.associate(b)}var e={captureEmailForms:!1,captureEmailURLs:!0,customId:""},a={view:"ViewContent",conversion:"Lead"};d.prototype.associate=function(b,a){a=a||{};a.email=
b;return this.send("association",null,null,null,a)};d.prototype.send=function(b,c,d,e,h){var q=this,t={};t.callback=f.c;t.customId="";h=f.I(h||{},q.options,t);var p=h.callback;h.callback=function(){try{h.facebookPixelId&&a[b]&&g.fbq("track",a[b],{referrer:m.referrer,userAgent:navigator.userAgent,language:navigator.language}),p()}catch(c){p()}};v.N(n.b(function(a){var f=r.V();a={k:b||"",a:c||"",l:d||"",v:e||"",e:h.email||"",st:h.servingTags||"",lc:g.navigator&&g.navigator.language||"",pid:q.ba,uid:a.uid,
sid:a.sid,cid:h.customId,uri:r.M().substr(0,1E3),rf:r.W().substr(0,500),rx:f.x,ry:f.y,tz:r.X()};w.F("/analytics/v1/events/capture",a,function(a,b){n.u("send-events",b.url);a?(n.P({name:"HTTPError",message:b.method+" "+b.url+" "+b.T,stack:a}),n.flush(),h.callback(!1)):h.callback()})}));return!0};return d}(),f=function(){var d=function(){function a(a,c){var d=/ Chrom[^\/]+\/(\d+)[\.\d]*/,e=c.match(d);return e&&0<e.length?parseInt(c.match(d)[1],10)>=a:!1}return{ga:function(b){var c=b.match(/\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//);
(c=c&&0<c.length&&"12"===c[1])||(c=(c=b.match(/\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//))&&1<c.length&&"10"===c[1]&&"14"===c[2]&&(/Version\/.* Safari\//.test(b)&&!/Chrom(e|ium)/.test(void 0)||/^Mozilla\/[\.\d]+ \(Macintosh;.*Mac OS X [_\d]+\) AppleWebKit\/[\.\d]+ \(KHTML, like Gecko\)$/.test(b)));c||(c=/Chrom(e|ium)/.test(b)&&(a(51,b)&&!a(67,b)||/HeadlessChrom(e|ium)/.test(b)));return!c}}}(),e={D:function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+
b,c)},H:function(){return new function(){function a(){e>=d&&b&&!c&&(c=!0,b.call(g))}var b=null,c=!1,d=0,e=0;return{B:function(){d++;return ,complete:}},U:function(a,b,c){function d(){var k=this,f=Array.prototype.slice.call(arguments,0),g=c&&!e;clearTimeout(e);e=setTimeout(b);g&&a.apply(k,f)}var e;d.clear=return d},I:function(a){var b=Array.prototype.slice.call(arguments,1);if(!b.length)return a;
for(var c=0;c<b.length;c++)for(var d=b[c],e=f.keys(d),h=0;h<e.length;h++){var g=e[h];a[g]===u&&(a[g]=d[g])}return a},J:function(a){if(!f.O(a))return null;if(!a)return{};var b={};a=a.replace(/(^\?)/,"").split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(d[1]&&0<=d[1].indexOf(","))try{b[decodeURIComponent(d[0])]=decodeURIComponent(d[1]).split(",")}catch(e){}else try{b[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}catch(e){}}return b},forEach:function(a,b,c){if(Array.prototype.forEach)return Array.prototype.forEach.call(a,
b,c);for(var d=0;d<a.length;d++)b.call(c,a[d],d,a)},G:K:function(a,b){b=b||g.location.search;var c=(new RegExp("[?&]"+encodeURIComponent(a)+"(=([^&#]*)|&|#|$)")).exec(b);return c?c[2]?decodeURIComponent(c[2].replace(/\+/g," ")):"":null},ia:function(a){try{return localStorage.getItem(a)}catch(b){return null}},i:
L:function(){return"xxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,},isArray:function(a){return!(!a||!a.constructor||a.constructor!==Array)},j:function(a){return!(!a||"function"!==typeof a)},o:O:keys:ja:c:ea:R:function(a){var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+="&"+encodeURIComponent(c)+"=",b=e.isArray(a[c])?b+encodeURIComponent(a[c]).replace(/%2C/g,","):b+encodeURIComponent(a[c]));return b.substr(1,b.length)},ka:function(a,b,c,e){m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"+(c?"; domain="+c:"")+(e?"; path="+e:"")+
(d.ga(navigator.userAgent)?"; samesite=none; secure":"")},la:function(a,b){try{return localStorage.setItem(a,b)}catch(c){return null}},S:values:function(a){if(!f.o(a))return[];var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(a[c]);return b}};return e}(),v=function(){function d(){for(var c=0;c<b.length;c++)b[c].call(g,{uid:a,sid:e});b.length=0}var e=null,a=null,b=[],c={$:function(a){var b=n.ca("load-identify"),c=m.createElement("iframe"),
d=n.b(function(e){0==="https://js.center.io".indexOf(e.origin||(e.originalEvent||{}).origin)&&(e=f.J(e.data))&&e.s&&e.id&&(b(),f.ea(g,"message",d,!1),c.parentNode&&c.parentNode.removeChild(c),a(e))});f.D(g,"message",d,!1);c.src="https://js.center.io/identify.html";c.style.display="none";c.style.visibility="hidden";c.style.position="absolute";c.style.left="-9999px";c.style.top="-9999px";m.getElementsByTagName("head")[0].appendChild(c)},aa:function(){e=f.i("centerSessionId");e||(e=f.L(),f.S("centerSessionId",
e));(a=f.i("centerVisitorId"))?(n.g("counter","ident-cache","1"),d()):c.$(n.b(function(b){n.g("counter",b.s,"1");a=b.id;f.S("centerVisitorId",a);d()}))},N:function(c){a?c.call(g,{uid:a,sid:e}):b.push(c)}};return c}();n.ha(p);n.b(function(){if(null===f.K("center-no-load")){var d=g[B]||"center";g[d]=g[d]||f.c;var e=g[d].q||[];g[d]=function(a){return f.j(a)?(a(g[d]),!0):p.exec.apply(p,arguments)};g[d].hash="";g[d].version="1.8.6";g[d].loaded=!0;v.aa();for(var a=0;a<e.length;a++)g[d].apply(g[name],e[a]);
n.u("load-center","https://js.center.io/center.js")}})()})(window,document,"LeadPagesCenterObject");
