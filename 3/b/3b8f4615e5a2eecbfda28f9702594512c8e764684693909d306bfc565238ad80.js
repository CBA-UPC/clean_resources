(function(A){if("object"===typeof exports&&"undefined"!==typeof module)module.a=A();else if("function"===typeof define&&define.Ha)define([],A);else{var b;"undefined"!==typeof window?b=window:"undefined"!==typeof global?b=global:"undefined"!==typeof self?b=self:b=this;b.Ja=A()}})(function(){return function b(e,g,l){function h(c,f){if(!g[c]){if(!e[c]){var p="function"==typeof require&&require;if(!f&&p)return p(c,!0);if(a)return a(c,!0);p=Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",
p;}p=g[c]={a:{}};e[c][0].call(p.a,function(a){var f=e[c][1][a];return h(f?f:a)},p,p.a,b,e,g,l)}return g[c].a}for(var a="function"==typeof require&&require,f=0;f<l.length;f++)h(l[f]);return h}({1:[function(b,e){var g;g=function(){function b(){this.K=!1}b.ready=function(b){var a,f;f=function(){if(!this.K)return this.K=!0,b()};if("complete"===document.readyState)return f();if(document.addEventListener)return document.addEventListener("DOMContentLoaded",f,!1),window.addEventListener("load",f,!1);if(document.attachEvent&&
(a=function(){try{document.documentElement.doScroll("left")}catch(c){setTimeout(a,1);return}return f()},document.attachEvent("onreadystatechange",f),window.attachEvent("onload",f),document.documentElement&&document.documentElement.doScroll&&!window.frameElement))return a()};return b}();e.a=g},{}],2:[function(b,e){var g,l={}.hasOwnProperty;g=function(){function b(a,f,c){this.B=a;this.width=f;this.height=c}b.prototype.fa=function(a){var f;if(-1!==navigator.appName.indexOf("Microsoft"))return this.B.contentWindow["\u03bb"]=
a,this.B.src="javascript:window['\u03bb']";f=this.B.contentWindow.document;f.open("text/html","replace");f.write(a);return f.close()};b.ea=function(){var a=document.body,f=Math.round(Math.random()*(new Date).getTime()),c,r,p;c=document.createElement("iframe");c.width=1;c.height=1;c.src="about:blank";c.id=f;f={scrolling:"no",marginWidth:0,marginHeight:0,noResize:0,border:0,frameBorder:0,frameSpacing:0,background:"transparent",allowTransparency:"allowTransparency",style:"overflow:hidden;margin:0;padding:0"};
for(r in f)l.call(f,r)&&(p=f[r],c.setAttribute(r,p));c.setAttribute("style","position:absolute;top:-10px;left:-10px");a.parentNode.insertBefore(c,a);return new b(c,1,1)};return b}();"undefined"!==typeof e&&null!==e&&(e.a=g)},{}],3:[function(b){var e,g,l,h;h=b("./UserStore.coffee");g=b("./RemoteCommunicationService.coffee");e=b("./RemoteActionHandler.coffee");l=b("./Tracking.coffee");b("./Util.coffee");b("./DOM.coffee").ready(function(){var a,f;f=null!=window._d7.id?window._d7.id:0;a=new g;return(new h(a)).$(function(c){return(new l(new e(f,
a,window._d7),c)).Y()})})},{"./DOM.coffee":1,"./RemoteActionHandler.coffee":4,"./RemoteCommunicationService.coffee":5,"./Tracking.coffee":6,"./UserStore.coffee":8,"./Util.coffee":9}],4:[function(b,e){var g,l,h,a,f;a=b("./Util.coffee");g=b("Config");f=b("./underscore.coffee");l=b("./FriendlyIframe.coffee");h=function(){function c(a,c,f){this.ka=a;this.s=c;this.info=f}c.prototype.L=function(a){a.callback&&(a.callback=void 0);return f.extend(a,{url:this.info.url||document.URL,title:this.info.title||
document.title,trackingAccountId:a.trackingAccountId?a.trackingAccountId:this.ka,referrer:this.info.referrer||document.referrer})};c.prototype.ia=function(a,c){var b;b=f.clone(a);b.orderId&&"YOUR_ORDER_ID"!==b.orderId&&0<b.orderId.split(" ").join("").length||(b.orderId=c.uid);return b};c.prototype.track=function(c,f){switch(c.action){case "pageView":return this.get(c);case "order":return this.F(this.ia(c,f));case "event":return this.get(c);case "lead":return null;case "productView":return a.j(4E3,
function(a){return function(){return a.get(c)}}(this));default:return a.log("warn","Action "+c.action+" is not defined, please check that you have specified an action for each tracking event.")}};c.prototype.F=function(a){var c,f;c=this;f=this.L(a);return this.s.F(g.N()+a.action,f,{success:function(a){!0===a.result.piggyBacked&&c.o(f,a.result.piggyBackScript);if(!0===a.result.cookieMatchingEnabled)return c.o(f,a.result.cookieMatchingTags||"")}})};c.prototype.get=function(a){var c,b,e;b=a.callback;
c=this;e=this.L(a);return this.s.get(g.N()+a.action,e,{success:function(a){!0===a.result.piggyBacked&&c.o(e,a.result.piggyBackScript);!0===a.result.cookieMatchingEnabled&&c.o(e,a.result.cookieMatchingTags||"");if(null!=b){if(null!=b.success&&f.f(b.success))return b.success();if(f.f(b))return b()}},failure:function(e){e&&"SERVICE_OVERLOADED"===e.result.reason&&c.ha(a);if(null!=b){if(null!=b.failure&&f.f(b.failure))return b.failure();if(f.f(b))return b()}}})};c.prototype.ha=function(c){var b;b=this;
a.j(2E3,function(){return b.get(c)})};c.prototype.o=function(a,c){var b;b='<script type="text/javascript">window.trackingInput = '+JSON.stringify(a)+";\x3c/script>"+c;return l.ea().fa(b)};return c}();"undefined"!==typeof e&&null!==e&&(e.a=h)},{"./FriendlyIframe.coffee":2,"./Util.coffee":9,"./underscore.coffee":10,Config:"Config"}],5:[function(b,e){var g,l;l=b("./underscore.coffee");g=function(){function b(a){this.m=a;this.m=0}b.prototype.port=function(){return null!=window.location.port?":"+window.location.port:
""};b.prototype.origin=function(){return window.location.protocol+"//"+window.location.hostname+this.port()};b.prototype.F=function(a,b,c){var e,g,h,q;e=this;h=document.createElement("iframe");q=this.T();document.body.appendChild(h);h.style.display="none";h.contentWindow.name=q;g=document.createElement("form");g.target=q;g.action=a;g.method="POST";g.acceptCharset="UTF-8";a=document.createElement("input");a.type="hidden";a.name="data";q=function(a){var g;g=a.source;b=a.data;if(g===h.contentWindow)return null!=
c&&null!=b&&(a=JSON.parse(b),a.success&&null!=c.success&&l.f(c.success)?c.success(a):null!=c.failure&&l.f(c.failure)&&c.failure(a)),e.G(h)};window.addEventListener?window.addEventListener("message",q,!1):window.attachEvent&&window.attachEvent("onmessage",q);b.targetOrigin=this.origin();a.value=JSON.stringify(b);g.appendChild(a);h.contentDocument.body.appendChild(g);return g.submit()};b.prototype.get=function(a,b,c){var e,g,h;e=this;g=null==window["$d7_cb_"+(this.m+1)]?"$d7_cb_"+(this.m+=1):"$d7_cb_"+
this.T();h=document.createElement("iframe");h.style.display="none";h.onload=function(){var l;h.contentWindow[g]=function(a){e.G(h);if(null!=c)return null==a||"undefined"!==typeof a.success&&!0!==a.success?c.failure(a):c.success(a)};l=document.createElement("script");l.type="text/javascript";l.async=!0;l.onerror=function(){e.G(h);if(c.failure)return c.failure(null)};l.src=a+"?data="+encodeURIComponent(JSON.stringify(b))+"&callback="+g;return h.contentDocument.getElementsByTagName("head")[0].appendChild(l)};
return document.body.appendChild(h)};b.prototype.G=function(a){if(null!=(null!=a?a.parentNode:void 0))return a.parentNode.removeChild(a)};b.prototype.T=function(){return Math.round(Math.random()*(new Date).getTime())};return b}();"undefined"!==typeof e&&null!==e&&(e.a=g)},{"./underscore.coffee":10}],6:[function(b,e){var g,l,h;b("./Main.coffee");l=b("./RemoteCommunicationService.coffee");g=b("./RemoteActionHandler.coffee");h=function(){function a(a,b){this.I=a;this.U=b}a.prototype.Y=function(){var a=
window._d7,b,e,h,u;b=this;e=0;for(h=a.length;e<h;e++)u=a[e],this.I.track(u,b.U);return window._d7.push=function(a){var f;f=new l;new g(null!=window._d7.id?window._d7.id:0,f,window._d7);return b.I.track(a,b.U)}};return a}();"undefined"!==typeof e&&null!==e&&(e.a=h)},{"./Main.coffee":3,"./RemoteActionHandler.coffee":4,"./RemoteCommunicationService.coffee":5}],7:[function(b,e){e.a=function(){return function(b,e){this.uid=b;this.X=e}}()},{}],8:[function(b,e){var g,l,h,a;l=b("./User.coffee");g=b("Config");
a=b("./Util.coffee");h=function(){function b(a){this.s=a}b.prototype.$=function(a){return this.O(1,20,a)};b.prototype.O=function(b,e,f){var h;h=this;return this.s.get(g.M()+"/api/getUid",{},{success:function(a){return f(new l(a.uid,a.X))},failure:function(){return a.j(b*b*1E3,function(){if(b<e)return h.O(b+1,e,f)})}})};return b}();"undefined"!==typeof e&&null!==e&&(e.a=h)},{"./User.coffee":7,"./Util.coffee":9,Config:"Config"}],9:[function(b,e){var g,l=[].slice;g=function(){function b(){}b.j=function(){var a,
b,c;c=arguments[0];b=arguments[1];a=3<=arguments.length?l.call(arguments,2):[];return setTimeout.apply(null,[b,c].concat(l.call(a)))};b.log=function(a,b){var c;if("fatal"===a)throw"_d7: "+b;if(null!=(null!=(c=window.console)?c[a]:void 0))return window.console[a]("_d7: ",b)};return b}();"undefined"!==typeof e&&null!==e&&(e.a=g)},{}],10:[function(b,e,g){var l,h,a,f,c,r,p,u,q,v,B,C,D,E,F,H,y,w,z,I,J,t,G={}.hasOwnProperty;w=this;H=w.u;h="function"===typeof h?h("__break__"):void 0;c=function(a){return a.replace(/([.*+?^${}()|[\]\/\\])/g,
"\\$1")};b=Array.prototype;l=Object.prototype;z=b.slice;J=b.unshift;I=l.toString;q=b.forEach;C=b.map;D=b.reduce;E=b.reduceRight;u=b.filter;p=b.every;F=b.some;v=b.indexOf;B=b.lastIndexOf;b=Array.isArray;l=Object.keys;a=function(a){return new t(a)};"undefined"!==typeof g&&(g.u=a);w.u=a;a.Pa="1.1.0";a.b=function(d,k,n){var b,x,c,e,f;try{if(q&&d.forEach===q)d.forEach(k,n);else if(a.R(d.length))for(b=x=0,e=d.length;0<=e?x<e:x>e;b=0<=e?++x:--x)k.call(n,d[b],b,d);else for(c in d)G.call(d,c)&&(f=d[c],k.call(n,
f,c,d))}catch(g){if(g!==h)throw g;}return d};a.map=function(d,k,n){var b;if(C&&d.map===C)return d.map(k,n);b=[];a.b(d,function(a,d,c){return b.push(k.call(n,a,d,c))});return b};a.reduce=function(d,k,n,b){if(D&&d.reduce===D)return b&&(k=a.bind(k,b)),d.reduce(k,n);a.b(d,function(a,d,c){return n=k.call(b,n,a,d,c)});return n};a.reduceRight=function(d,k,n,b){if(E&&d.reduceRight===E)return b&&(k=a.bind(k,b)),d.reduceRight(k,n);d=a.clone(a.g(d)).reverse();return a.reduce(d,k,n,b)};a.Ma=function(d,k,b){var m;
m=null;a.b(d,function(d,c,e){if(k.call(b,d,c,e))return m=d,a.w()});return m};a.filter=function(d,k,b){var m;if(u&&d.filter===u)return d.filter(k,b);m=[];a.b(d,function(a,d,c){if(k.call(b,a,d,c))return m.push(a)});return m};a.Va=function(d,k,b){var m;m=[];a.b(d,function(a,d,c){if(!k.call(b,a,d,c))return m.push(a)});return m};a.every=function(d,k,b){var m;k||(k=a.l);if(p&&d.every===p)return d.every(k,b);m=!0;a.b(d,function(d,c,e){if(!(m=m&&k.call(b,d,c,e)))return a.w()});return m};a.some=function(d,
k,b){var m;k||(k=a.l);if(F&&d.some===F)return d.some(k,b);m=!1;a.b(d,function(d,c,e){if(m=k.call(b,d,c,e))return a.w()});return m};a.C=function(d,k){var b,m;if(v&&d.indexOf===v)return-1!==a.indexOf(d,k);for(b in d)if(G.call(d,b)&&(m=d[b],m===k))return!0;return!1};a.pa=function(d,k){var b,m,c,e,f;b=a.c(arguments,2);e=[];m=0;for(c=d.length;m<c;m++)f=d[m],e.push((k?f[k]:f).apply(f,b));return e};a.D=function(d,k){return a.map(d,function(a){return a[k]})};a.max=function(d,k,b){var m;if(!k&&a.isArray(d))return Math.max.apply(Math,
d);m={i:-Infinity};a.b(d,function(a,d,c){d=k?k.call(b,a,d,c):a;return d>=m.i&&(m={value:a,i:d})});return m.value};a.min=function(d,b,n){var m;if(!b&&a.isArray(d))return Math.min.apply(Math,d);m={i:Infinity};a.b(d,function(a,d,c){d=b?b.call(n,a,d,c):a;return d<m.i&&(m={value:a,i:d})});return m.value};a.xa=function(d,b,n){return a.D(a.map(d,function(a,d,c){return{value:a,J:b.call(n,a,d,c)}}).sort(function(a,d){var b,k;b=a.J;k=d.J;return b<k?-1:b>k?1:0}),"value")};a.ya=function(d,b,n){var c,e,f;n||(n=
a.l);e=0;for(c=d.length;e<c;)f=e+c>>1,n(d[f])<n(b)?e=f+1:c=f;return e};a.g=function(d){return d?d.g?d.g():a.isArray(d)?d:a.ba(d)?z.call(d):a.values(d):[]};a.ma=function(d){return a.g(d).length};a.H=function(a,b,n){return b&&!n?z.call(a,0,b):a[0]};a.c=function(d,b,n){return z.call(d,a.da(b)||n?1:b)};a.ua=function(a){return a[a.length-1]};a.Qa=function(a){var b,n,c,e;e=[];n=0;for(c=a.length;n<c;n++)(b=a[n])&&e.push(b);return e};a.Z=function(d){return a.reduce(d,function(d,b){if(a.isArray(b))return d.concat(a.Z(b));
d.push(b);return d},[])};a.Ea=function(d){var b,n,c,e,f,g;g=a.c(arguments);c=a.g(d);e=[];b=0;for(n=c.length;b<n;b++)f=c[b],a.C(g,f)||e.push(f);return e};a.la=function(d){var b,c,e,f,g;f=[];g=a.g(d);b=c=0;for(e=g.length;c<e;b=++c)d=g[b],0!==b&&a.C(f,d)||f.push(d);return f};a.oa=function(d){var b;b=a.c(arguments);return a.select(a.la(d),function(d){return a.all(b,function(b){return 0<=a.indexOf(b,d)})})};a.Ga=function(){var d,b,c,e;c=a.max(a.D(arguments,"length"));e=Array(c);for(d=b=0;0<=c?b<c:b>c;d=
0<=c?++b:--b)e[d]=a.D(arguments,String(d));return e};a.indexOf=function(a,b){var c,e;if(v&&a.indexOf===v)return a.indexOf(b);c=0;for(e=a.length;e-c;){if(a[c]===b)return c;c++}return-1};a.lastIndexOf=function(a,b){var c;if(B&&a.lastIndexOf===B)return a.lastIndexOf(b);for(c=a.length;c;){if(a[c]===b)return c;c--}return-1};a.ga=function(a,b,c){var e,f,g;e=arguments;f=a=(g=1>=e.length)?0:e[0];b=g?e[0]:e[1];c=e[2]||1;e=Math.ceil((b-a)/c);if(0>=e)return[];g=Array(e);for(e=0;;){if(0<=(0<c?f-b:b-f))return g;
g[e]=f;e++;f+=c}};a.bind=function(d,b){var c;c=a.c(arguments,2);return function(){return d.apply(b||w,c.concat(arguments))}};a.Ka=function(d){var b;b=1<arguments.length?a.c(arguments):a.A(d);a.b(b,function(b){return d[b]=a.bind(d[b],d)});return d};a.j=function(d,b){var c;c=a.c(arguments,2);return setTimeout(function(){return d.apply(d,c)},b)};a.va=function(d,b){var c;c={};b||(b=a.l);return function(){var a;a=b.apply(this,arguments);return a in c?c[a]:c[a]=d.apply(this,arguments)}};a.Sa=function(d){return a.j.apply(a,
[d,1].concat(a.c(arguments)))};a.Fa=function(a,b){return function(){return b.apply(b,[a].concat(arguments))}};a.La=function(){var a;a=arguments;return function(){var b,c,e;b=arguments;for(c=e=a.length-1;0<=e;c=e+=-1)b=[a[c].apply(this,b)];return b[0]}};a.keys=l||function(d){var b,c;if(a.isArray(d))return a.ga(0,d.length);c=[];for(b in d)c.push(b);return c};a.values=function(d){return a.map(d,a.l)};a.A=function(d){return a.filter(a.keys(d),function(b){return a.f(d[b])}).sort()};a.extend=function(d){var b,
c,e,f,g,h;f=a.c(arguments);b=0;for(e=f.length;b<e;b++)for(c in g=f[b],g)h=g[c],d[c]=h;return d};a.clone=function(d){return a.isArray(d)?d.slice(0):a.extend({},d)};a.Aa=function(a,b){b(a);return a};a.isEqual=function(b,c){var e,f,g;if(b===c)return!0;e=typeof b;if(e!==typeof c)return!1;if(b==c)return!0;if(!b&&c||b&&!c)return!1;if(b.isEqual)return b.isEqual(c);if(a.P(b)&&a.P(c))return b.getTime()===c.getTime();if(a.isNaN(b)&&a.isNaN(c))return!1;if(a.S(b)&&a.S(c))return b.source===c.source&&b.global===
c.global&&b.ignoreCase===c.ignoreCase&&b.multiline===c.multiline;if("object"!==e||b.length&&b.length!==c.length)return!1;e=a.keys(b);f=a.keys(c);if(e.length!==f.length)return!1;for(g in b)if(e=b[g],!(g in c&&a.isEqual(e,c[g])))return!1;return!0};a.sa=function(b){var c;if(a.isArray(b)||a.ca(b))return 0===b.length;for(c in b)if(G.call(b,c))return!1;return!0};a.ra=function(a){return a&&1===a.nodeType};a.isArray=b||function(a){return!(!(a&&a.concat&&a.unshift)||a.callee)};a.ba=function(a){return a&&a.callee};
a.f=function(a){return!!(a&&a.constructor&&a.call&&a.apply)};a.ca=function(a){return!!(""===a||a&&a.charCodeAt&&a.substr)};a.R=function(a){return a===+a||"[object Number]"===I.call(a)};a.qa=function(a){return!0===a||!1===a};a.P=function(a){return!!(a&&a.getTimezoneOffset&&a.setUTCFullYear)};a.S=function(a){return!(!a||!a.exec||!a.ignoreCase&&!1!==a.ignoreCase)};a.isNaN=function(b){return a.R(b)&&window.isNaN(b)};a.ta=function(a){return null===a};a.da=function(a){return"undefined"===typeof a};a.wa=
function(){w.u=H;return this};a.l=function(a){return a};a.Ca=function(a,b,c){var e,f,g;g=[];for(e=f=0;0<=a?f<a:f>a;e=0<=a?++f:--f)g.push(b.call(c,e));return g};a.w=function(){throw h;};a.V=function(b){var c,e,g,h,l;h=a.A(b);l=[];c=0;for(e=h.length;c<e;c++)g=h[c],l.push(f(g,a[g]=b[g]))};r=0;a.Da=function(a){return(a||"")+r++};a.ja={start:"<%",end:"%>",aa:/<%=(.+?)%>/g};a.Ba=function(b,e){var f,g;f=a.ja;g=new RegExp("'(?=[^"+f.end.substr(0,1)+"]*"+c(f.end)+")","g");f=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj||{}){p.push('"+
b.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(g,"\u2704").split("'").join("\\'").split("\u2704").join("'").replace(f.aa,"',$1,'").split(f.start).join("');").split(f.end).join("p.push('")+"');}return p.join('');");return e?f(e):f};a.forEach=a.b;a.Na=a.na=a.reduce;a.Oa=a.reduceRight;a.select=a.filter;a.all=a.every;a.Ia=a.some;a.Ra=a.C;a.Ta=a.H;a.za=a.c;a.Ua=a.A;t=function(a){this.h=a;return this};y=function(b,c){return c?a(b).W():b};f=function(b,c){return t.prototype[b]=function(){var b;
b=a.g(arguments);J.call(b,this.h);return y(c.apply(a,b),this.v)}};a.V(a);a.b("pop push reverse shift sort splice unshift".split(" "),function(a){var b;b=Array.prototype[a];return t.prototype[a]=function(){b.apply(this.h,arguments);return y(this.h,this.v)}});a.b(["concat","join","slice"],function(a){var b;b=Array.prototype[a];return t.prototype[a]=function(){return y(b.apply(this.h,arguments),this.v)}});t.prototype.W=function(){this.v=!0;return this};t.prototype.value=function(){return this.h};e.a=
a},{}],Config:[function(b,e){var g,l;l=b("./Util.coffee");g=function(){function b(){}b.protocol=function(){var a;return null!=(a=window._d7.p)?a:l.log("fatal","required _d7.p is not defined")};b.H=function(){return".de17a.com"};b.M=function(){return this.protocol()+"tb.de17a.com"};b.N=function(){return b.M()+"/api/"};return b}();"undefined"!==typeof e&&null!==e&&(e.a=g)},{"./Util.coffee":9}]},{},[3])("Config")});
		$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

							// fix any grids since sliders are shorter
							var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
							if (sliderAccessWidth) {
								$tp.find('table:visible').each(function() {
									var $g = $(this),
										oldWidth = $g.outerWidth(),
										oldMarginLeft = $g.css(rtl? 'marginRight':'marginLeft').toString().replace('%', ''),
										newWidth = oldWidth - sliderAccessWidth,
										newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
										css = { width: newWidth, marginRight: 0, marginLeft: 0 };
									css[rtl? 'marginRight':'marginLeft'] = newMarginLeft;
									$g.css(css);
								});
							}
						}
					}, 10);
				}
				// end slideAccess integration

			}
		},

		/*
		* This function tries to limit the ability to go outside the
		* min/max date range
		*/
		_limitMinMaxDateTime: function(dp_inst, adjustSliders) {
			var o = this._defaults,
				dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

			if (!this._defaults.showTimepicker) {
				return;
			} // No time so nothing to check here

			if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
				var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
					minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null) {
					this.hourMinOriginal = o.hourMin;
					this.minuteMinOriginal = o.minuteMin;
					this.secondMinOriginal = o.secondMin;
					this.millisecMinOriginal = o.millisecMin;
				}

				if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMin = minDateTime.getHours();
					if (this.hour <= this._defaults.hourMin) {
						this.hour = this._defaults.hourMin;
						this._defaults.minuteMin = minDateTime.getMinutes();
						if (this.minute <= this._defaults.minuteMin) {
							this.minute = this._defaults.minuteMin;
							this._defaults.secondMin = minDateTime.getSeconds();
							if (this.second <= this._defaults.secondMin) {
								this.second = this._defaults.secondMin;
								this._defaults.millisecMin = minDateTime.getMilliseconds();
							} else {
								if (this.millisec < this._defaults.millisecMin) {
									this.millisec = this._defaults.millisecMin;
								}
								this._defaults.millisecMin = this.millisecMinOriginal;
							}
						} else {
							this._defaults.secondMin = this.secondMinOriginal;
							this._defaults.millisecMin = this.millisecMinOriginal;
						}
					} else {
						this._defaults.minuteMin = this.minuteMinOriginal;
						this._defaults.secondMin = this.secondMinOriginal;
						this._defaults.millisecMin = this.millisecMinOriginal;
					}
				} else {
					this._defaults.hourMin = this.hourMinOriginal;
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
				}
			}

			if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
				var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
					maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null) {
					this.hourMaxOriginal = o.hourMax;
					this.minuteMaxOriginal = o.minuteMax;
					this.secondMaxOriginal = o.secondMax;
					this.millisecMaxOriginal = o.millisecMax;
				}

				if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMax = maxDateTime.getHours();
					if (this.hour >= this._defaults.hourMax) {
						this.hour = this._defaults.hourMax;
						this._defaults.minuteMax = maxDateTime.getMinutes();
						if (this.minute >= this._defaults.minuteMax) {
							this.minute = this._defaults.minuteMax;
							this._defaults.secondMax = maxDateTime.getSeconds();
							if (this.second >= this._defaults.secondMax) {
								this.second = this._defaults.secondMax;
								this._defaults.millisecMax = maxDateTime.getMilliseconds();
							} else {
								if (this.millisec > this._defaults.millisecMax) {
									this.millisec = this._defaults.millisecMax;
								}
								this._defaults.millisecMax = this.millisecMaxOriginal;
							}
						} else {
							this._defaults.secondMax = this.secondMaxOriginal;
							this._defaults.millisecMax = this.millisecMaxOriginal;
						}
					} else {
						this._defaults.minuteMax = this.minuteMaxOriginal;
						this._defaults.secondMax = this.secondMaxOriginal;
						this._defaults.millisecMax = this.millisecMaxOriginal;
					}
				} else {
					this._defaults.hourMax = this.hourMaxOriginal;
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
				}
			}

			if (adjustSliders !== undefined && adjustSliders === true) {
				var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
					minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
					secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
					millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);

				if (this.hour_slider) {
					this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax });
					this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour));
				}
				if (this.minute_slider) {
					this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax });
					this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute));
				}
				if (this.second_slider) {
					this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax });
					this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond));
				}
				if (this.millisec_slider) {
					this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax });
					this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec));
				}
			}

		},

		/*
		* when a slider moves, set the internal time...
		* on time change is also called when the time is updated in the text field
		*/
		_onTimeChange: function() {
			var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
				minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
				second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
				millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
				timezone = (this.timezone_select) ? this.timezone_select.val() : false,
				o = this._defaults,
				pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
				pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

			if (typeof(hour) == 'object') {
				hour = false;
			}
			if (typeof(minute) == 'object') {
				minute = false;
			}
			if (typeof(second) == 'object') {
				second = false;
			}
			if (typeof(millisec) == 'object') {
				millisec = false;
			}
			if (typeof(timezone) == 'object') {
				timezone = false;
			}

			if (hour !== false) {
				hour = parseInt(hour, 10);
			}
			if (minute !== false) {
				minute = parseInt(minute, 10);
			}
			if (second !== false) {
				second = parseInt(second, 10);
			}
			if (millisec !== false) {
				millisec = parseInt(millisec, 10);
			}

			var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

			// If the update was done in the input field, the input field should not be updated.
			// If the update was done using the sliders, update the input field.
			var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || millisec != this.millisec 
								|| (this.ampm.length > 0 && (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) 
								|| ((this.timezone === null && timezone != this.defaultTimezone) || (this.timezone !== null && timezone != this.timezone)));

			if (hasChanged) {

				if (hour !== false) {
					this.hour = hour;
				}
				if (minute !== false) {
					this.minute = minute;
				}
				if (second !== false) {
					this.second = second;
				}
				if (millisec !== false) {
					this.millisec = millisec;
				}
				if (timezone !== false) {
					this.timezone = timezone;
				}

				if (!this.inst) {
					this.inst = $.datepicker._getInst(this.$input[0]);
				}

				this._limitMinMaxDateTime(this.inst, true);
			}
			if (useAmpm(o.timeFormat)) {
				this.ampm = ampm;
			}

			// Updates the time within the timepicker
			this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
			if (this.$timeObj) {
				if(pickerTimeFormat === o.timeFormat){
					this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
				}
				else{
					this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
				}
			}

			this.timeDefined = true;
			if (hasChanged) {
				this._updateDateTime();
			}
		},

		/*
		* call custom onSelect.
		* bind to sliders slidestop, and grid click.
		*/
		_onSelectHandler: function() {
			var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
			var inputEl = this.$input ? this.$input[0] : null;
			if (onSelect && inputEl) {
				onSelect.apply(inputEl, [this.formattedDateTime, this]);
			}
		},

		/*
		* update our input with the new date time..
		*/
		_updateDateTime: function(dp_inst) {
			dp_inst = this.inst || dp_inst;
			var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
				formatCfg = $.datepicker._getFormatConfig(dp_inst),
				timeAvailable = dt !== null && this.timeDefined;
			this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
			var formattedDateTime = this.formattedDate;
			
			// if a slider was changed but datepicker doesn't have a value yet, set it
			if(dp_inst.lastVal===""){
                dp_inst.currentYear=dp_inst.selectedYear;
                dp_inst.currentMonth=dp_inst.selectedMonth;
                dp_inst.currentDay=dp_inst.selectedDay;
            }

			/*
			* remove following lines to force every changes in date picker to change the input value
			* Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
			* If the user manually empty the value in the input field, the date picker will never change selected value.
			*/
			//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
			//	return;
			//}

			if (this._defaults.timeOnly === true) {
				formattedDateTime = this.formattedTime;
			} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
				formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
			}

			this.formattedDateTime = formattedDateTime;

			if (!this._defaults.showTimepicker) {
				this.$input.val(this.formattedDate);
			} else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
				this.$altInput.val(this.formattedTime);
				this.$input.val(this.formattedDate);
			} else if (this.$altInput) {
				this.$input.val(formattedDateTime);
				var altFormattedDateTime = '',
					altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
					altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;

				if (this._defaults.altFormat){
					altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
				}
				else{
					altFormattedDateTime = this.formattedDate;
				}

				if (altFormattedDateTime){
					altFormattedDateTime += altSeparator;
				}

				if(this._defaults.altTimeFormat){
					altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
				}
				else{
					altFormattedDateTime += this.formattedTime + altTimeSuffix;
				}
				this.$altInput.val(altFormattedDateTime);
			} else {
				this.$input.val(formattedDateTime);
			}

			this.$input.trigger("change");
		},

		_onFocus: function() {
			if (!this.$input.val() && this._defaults.defaultValue) {
				this.$input.val(this._defaults.defaultValue);
				var inst = $.datepicker._getInst(this.$input.get(0)),
					tp_inst = $.datepicker._get(inst, 'timepicker');
				if (tp_inst) {
					if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
						try {
							$.datepicker._updateDatepicker(inst);
						} catch (err) {
							$.timepicker.log(err);
						}
					}
				}
			}
		},

		/*
		* Small abstraction to control types
		* We can add more, just be sure to follow the pattern: create, options, value
		*/
		_controls: {
			// slider methods
			slider: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
					return obj.prop('slide', null).slider({
						orientation: "horizontal",
						value: rtl? val*-1 : val,
						min: rtl? max*-1 : min,
						max: rtl? min*-1 : max,
						step: step,
						slide: function(event, ui) {
							tp_inst.control.value(tp_inst, $(this), unit, rtl? ui.value*-1:ui.value);
							tp_inst._onTimeChange();
						},
						stop: function(event, ui) {
							tp_inst._onSelectHandler();
						}
					});	
				},
				options: function(tp_inst, obj, unit, opts, val){
					if(tp_inst._defaults.isRTL){
						if(typeof(opts) == 'string'){
							if(opts == 'min' || opts == 'max'){
								if(val !== undefined){
									return obj.slider(opts, val*-1);
								}
								return Math.abs(obj.slider(opts));
							}
							return obj.slider(opts);
						}
						var min = opts.min, 
							max = opts.max;
						opts.min = opts.max = null;
						if(min !== undefined){
							opts.max = min * -1;
						}
						if(max !== undefined){
							opts.min = max * -1;
						}
						return obj.slider(opts);
					}
					if(typeof(opts) == 'string' && val !== undefined){
							return obj.slider(opts, val);
					}
					return obj.slider(opts);
				},
				value: function(tp_inst, obj, unit, val){
					if(tp_inst._defaults.isRTL){
						if(val !== undefined){
							return obj.slider('value', val*-1);
						}
						return Math.abs(obj.slider('value'));
					}
					if(val !== undefined){
						return obj.slider('value', val);
					}
					return obj.slider('value');
				}
			},
			// select methods
			select: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var sel = '<select class="ui-timepicker-select" data-unit="'+ unit +'" data-min="'+ min +'" data-max="'+ max +'" data-step="'+ step +'">',
						format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat;

					for(var i=min; i<=max; i+=step){						
						sel += '<option value="'+ i +'"'+ (i==val? ' selected':'') +'>';
						if(unit == 'hour'){
							sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig,'')), {hour:i}, tp_inst._defaults);
						}
						else if(unit == 'millisec' || i >= 10){ sel += i; }
						else {sel += '0'+ i.toString(); }
						sel += '</option>';
					}
					sel += '</select>';

					obj.children('select').remove();

					$(sel).appendTo(obj).change(function(e){
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					});

					return obj;
				},
				options: function(tp_inst, obj, unit, opts, val){
					var o = {},
						$t = obj.children('select');
					if(typeof(opts) == 'string'){
						if(val === undefined){
							return $t.data(opts);
						}
						o[opts] = val;	
					}
					else{ o = opts; }
					return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
				},
				value: function(tp_inst, obj, unit, val){
					var $t = obj.children('select');
					if(val !== undefined){
						return $t.val(val);
					}
					return $t.val();
				}
			}
		} // end _controls

	});

	$.fn.extend({
		/*
		* shorthand just to use timepicker..
		*/
		timepicker: function(o) {
			o = o || {};
			var tmp_args = Array.prototype.slice.call(arguments);

			if (typeof o == 'object') {
				tmp_args[0] = $.extend(o, {
					timeOnly: true
				});
			}

			return $(this).each(function() {
				$.fn.datetimepicker.apply($(this), tmp_args);
			});
		},

		/*
		* extend timepicker to datepicker
		*/
		datetimepicker: function(o) {
			o = o || {};
			var tmp_args = arguments;

			if (typeof(o) == 'string') {
				if (o == 'getDate') {
					return $.fn.datepicker.apply($(this[0]), tmp_args);
				} else {
					return this.each(function() {
						var $t = $(this);
						$t.datepicker.apply($t, tmp_args);
					});
				}
			} else {
				return this.each(function() {
					var $t = $(this);
					$t.datepicker($.timepicker._newInst($t, o)._defaults);
				});
			}
		}
	});

	/*
	* Public Utility to parse date and time
	*/
	$.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
		if (parseRes.timeObj) {
			var t = parseRes.timeObj;
			parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
		}

		return parseRes.date;
	};

	/*
	* Public utility to parse time
	*/
	$.datepicker.parseTime = function(timeFormat, timeString, options) {		
		var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});

		// Strict parse requires the timeString to match the timeFormat exactly
		var strictParse = function(f, s, o){

			// pattern for standard and localized AM/PM markers
			var getPatternAmpm = function(amNames, pmNames) {
				var markers = [];
				if (amNames) {
					$.merge(markers, amNames);
				}
				if (pmNames) {
					$.merge(markers, pmNames);
				}
				markers = $.map(markers, function(val) {
					return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
				});
				return '(' + markers.join('|') + ')?';
			};

			// figure out position of time elements.. cause js cant do named captures
			var getFormatPositions = function(timeFormat) {
				var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z|'.*?')/g),
					orders = {
						h: -1,
						m: -1,
						s: -1,
						l: -1,
						t: -1,
						z: -1
					};

				if (finds) {
					for (var i = 0; i < finds.length; i++) {
						if (orders[finds[i].toString().charAt(0)] == -1) {
							orders[finds[i].toString().charAt(0)] = i + 1;
						}
					}
				}
				return orders;
			};

			var regstr = '^' + f.toString()
					.replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[lz]|'.*?')/g, function (match) {
							var ml = match.length;
							switch (match.charAt(0).toLowerCase()) {
								case 'h': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'm': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 's': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'l': return '(\\d?\\d?\\d)';
								case 'z': return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
								case 't': return getPatternAmpm(o.amNames, o.pmNames);
								default:    // literal escaped in quotes
									return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
							}
						})
					.replace(/\s/g, '\\s?') +
					o.timeSuffix + '$',
				order = getFormatPositions(f),
				ampm = '',
				treg;

			treg = s.match(new RegExp(regstr, 'i'));

			var resTime = {
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0
			};

			if (treg) {
				if (order.t !== -1) {
					if (treg[order.t] === undefined || treg[order.t].length === 0) {
						ampm = '';
						resTime.ampm = '';
					} else {
						ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
						resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
					}
				}

				if (order.h !== -1) {
					if (ampm == 'AM' && treg[order.h] == '12') {
						resTime.hour = 0; // 12am = 0 hour
					} else {
						if (ampm == 'PM' && treg[order.h] != '12') {
							resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
						} else {
							resTime.hour = Number(treg[order.h]);
						}
					}
				}

				if (order.m !== -1) {
					resTime.minute = Number(treg[order.m]);
				}
				if (order.s !== -1) {
					resTime.second = Number(treg[order.s]);
				}
				if (order.l !== -1) {
					resTime.millisec = Number(treg[order.l]);
				}
				if (order.z !== -1 && treg[order.z] !== undefined) {
					var tz = treg[order.z].toUpperCase();
					switch (tz.length) {
					case 1:
						// Z
						tz = o.timezoneIso8601 ? 'Z' : '+0000';
						break;
					case 5:
						// +hhmm
						if (o.timezoneIso8601) {
							tz = tz.substring(1) == '0000' ? 'Z' : tz.substring(0, 3) + ':' + tz.substring(3);
						}
						break;
					case 6:
						// +hh:mm
						if (!o.timezoneIso8601) {
							tz = tz == 'Z' || tz.substring(1) == '00:00' ? '+0000' : tz.replace(/:/, '');
						} else {
							if (tz.substring(1) == '00:00') {
								tz = 'Z';
							}
						}
						break;
					}
					resTime.timezone = tz;
				}


				return resTime;
			}
			return false;
		};// end strictParse

		// First try JS Date, if that fails, use strictParse
		var looseParse = function(f,s,o){
			try{
				var d = new Date('2012-01-01 '+ s);
				if(isNaN(d.getTime())){
					d = new Date('2012-01-01T'+ s);
					if(isNaN(d.getTime())){
						d = new Date('01/01/2012 '+ s);
						if(isNaN(d.getTime())){
							throw "Unable to parse time with native Date: "+ s;
						}
					}
				}

				return {
					hour: d.getHours(),
					minute: d.getMinutes(),
					second: d.getSeconds(),
					millisec: d.getMilliseconds(),
					timezone: $.timepicker.timeZoneOffsetString(d)
				};
			}
			catch(err){
				try{
					return strictParse(f,s,o);
				}
				catch(err2){
					$.timepicker.log("Unable to parse \ntimeString: "+ s +"\ntimeFormat: "+ f);
				}				
			}
			return false;
		}; // end looseParse
		
		if(typeof o.parse === "function"){
			return o.parse(timeFormat, timeString, o);
		}
		if(o.parse === 'loose'){
			return looseParse(timeFormat, timeString, o);
		}
		return strictParse(timeFormat, timeString, o);
	};

	/*
	* Public utility to format the time
	* format = string format of the time
	* time = a {}, not a Date() for timezones
	* options = essentially the regional[].. amNames, pmNames, ampm
	*/
	$.datepicker.formatTime = function(format, time, options) {
		options = options || {};
		options = $.extend({}, $.timepicker._defaults, options);
		time = $.extend({
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			timezone: '+0000'
		}, time);

		var tmptime = format,
			ampmName = options.amNames[0],
			hour = parseInt(time.hour, 10);

		if (hour > 11) {
			ampmName = options.pmNames[0];
		}

		tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[lz]|('.*?'|".*?"))/g, function(match) {
		switch (match) {
			case 'HH':
				return ('0' + hour).slice(-2);
			case 'H':
				return hour;
			case 'hh':
				return ('0' + convert24to12(hour)).slice(-2);
			case 'h':
				return convert24to12(hour);
			case 'mm':
				return ('0' + time.minute).slice(-2);
			case 'm':
				return time.minute;
			case 'ss':
				return ('0' + time.second).slice(-2);
			case 's':
				return time.second;
			case 'l':
				return ('00' + time.millisec).slice(-3);
			case 'z':
				return time.timezone === null? options.defaultTimezone : time.timezone;
			case 'T': 
				return ampmName.charAt(0).toUpperCase();
			case 'TT': 
				return ampmName.toUpperCase();
			case 't':
				return ampmName.charAt(0).toLowerCase();
			case 'tt':
				return ampmName.toLowerCase();
			default:
				return match.replace(/\'/g, "") || "'";
			}
		});

		tmptime = $.trim(tmptime);
		return tmptime;
	};

	/*
	* the bad hack :/ override datepicker so it doesnt close on select
	// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
	*/
	$.datepicker._base_selectDate = $.datepicker._selectDate;
	$.datepicker._selectDate = function(id, dateStr) {
		var inst = this._getInst($(id)[0]),
			tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			tp_inst._limitMinMaxDateTime(inst, true);
			inst.inline = inst.stay_open = true;
			//This way the onSelect handler called from calendarpicker get the full dateTime
			this._base_selectDate(id, dateStr);
			inst.inline = inst.stay_open = false;
			this._notifyChange(inst);
			this._updateDatepicker(inst);
		} else {
			this._base_selectDate(id, dateStr);
		}
	};

	/*
	* second bad hack :/ override datepicker so it triggers an event when changing the input field
	* and does not redraw the datepicker on every selectDate event
	*/
	$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
	$.datepicker._updateDatepicker = function(inst) {

		// don't popup the datepicker if there is another instance already opened
		var input = inst.input[0];
		if ($.datepicker._curInst && $.datepicker._curInst != inst && $.datepicker._datepickerShowing && $.datepicker._lastInput != input) {
			return;
		}

		if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

			this._base_updateDatepicker(inst);

			// Reload the time control when changing something in the input text field.
			var tp_inst = this._get(inst, 'timepicker');
			if (tp_inst) {
				tp_inst._addTimePicker(inst);

//				if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
//					var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
//					selectLocalTimeZone(tp_inst, date);
//					tp_inst._onTimeChange();
//				}
			}
		}
	};

	/*
	* third bad hack :/ override datepicker so it allows spaces and colon in the input field
	*/
	$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
	$.datepicker._doKeyPress = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if ($.datepicker._get(inst, 'constrainInput')) {
				var ampm = useAmpm(tp_inst._defaults.timeFormat),
					dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
					datetimeChars = tp_inst._defaults.timeFormat.toString()
											.replace(/[hms]/g, '')
											.replace(/TT/g, ampm ? 'APM' : '')
											.replace(/Tt/g, ampm ? 'AaPpMm' : '')
											.replace(/tT/g, ampm ? 'AaPpMm' : '')
											.replace(/T/g, ampm ? 'AP' : '')
											.replace(/tt/g, ampm ? 'apm' : '')
											.replace(/t/g, ampm ? 'ap' : '') + 
											" " + tp_inst._defaults.separator + 
											tp_inst._defaults.timeSuffix + 
											(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') + 
											(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
											dateChars,
					chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
			}
		}

		return $.datepicker._base_doKeyPress(event);
	};

	/*
	* Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
	*/
	$.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
	/* Update any alternate field to synchronise with the main field. */
	$.datepicker._updateAlternate = function(inst) {
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst){
			var altField = tp_inst._defaults.altField;
			if (altField) { // update alternate field too
				var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
					date = this._getDate(inst),
					formatCfg = $.datepicker._getFormatConfig(inst),
					altFormattedDateTime = '', 
					altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
					altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
					altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
				
				altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
				if(!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null){
					if(tp_inst._defaults.altFormat){
						altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
					}
					else{
						altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
					}
				}
				$(altField).val(altFormattedDateTime);
			}
		}
		else{
			$.datepicker._base_updateAlternate(inst);
		}
	};

	/*
	* Override key up event to sync manual input changes.
	*/
	$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
	$.datepicker._doKeyUp = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
				try {
					$.datepicker._updateDatepicker(inst);
				} catch (err) {
					$.timepicker.log(err);
				}
			}
		}

		return $.datepicker._base_doKeyUp(event);
	};

	/*
	* override "Today" button to also grab the time.
	*/
	$.datepicker._base_gotoToday = $.datepicker._gotoToday;
	$.datepicker._gotoToday = function(id) {
		var inst = this._getInst($(id)[0]),
			$dp = inst.dpDiv;
		this._base_gotoToday(id);
		var tp_inst = this._get(inst, 'timepicker');
		selectLocalTimeZone(tp_inst);
		var now = new Date();
		this._setTime(inst, now);
		$('.ui-datepicker-today', $dp).click();
	};

	/*
	* Disable & enable the Time in the datetimepicker
	*/
	$.datepicker._disableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = false;
			tp_inst._updateDateTime(inst);
		}
	};

	$.datepicker._enableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = true;
			tp_inst._addTimePicker(inst); // Could be disabled on page load
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create our own set time function
	*/
	$.datepicker._setTime = function(inst, date) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var defaults = tp_inst._defaults;

			// calling _setTime with no date sets time to defaults
			tp_inst.hour = date ? date.getHours() : defaults.hour;
			tp_inst.minute = date ? date.getMinutes() : defaults.minute;
			tp_inst.second = date ? date.getSeconds() : defaults.second;
			tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;

			//check if within min/max times.. 
			tp_inst._limitMinMaxDateTime(inst, true);

			tp_inst._onTimeChange();
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create new public method to set only time, callable as $().datepicker('setTime', date)
	*/
	$.datepicker._setTimeDatepicker = function(target, date, withDate) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			this._setDateFromField(inst);
			var tp_date;
			if (date) {
				if (typeof date == "string") {
					tp_inst._parseTime(date, withDate);
					tp_date = new Date();
					tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
				} else {
					tp_date = new Date(date.getTime());
				}
				if (tp_date.toString() == 'Invalid Date') {
					tp_date = undefined;
				}
				this._setTime(inst, tp_date);
			}
		}

	};

	/*
	* override setDate() to allow setting time too within Date object
	*/
	$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
	$.datepicker._setDateDatepicker = function(target, date) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

		this._updateDatepicker(inst);
		this._base_setDateDatepicker.apply(this, arguments);
		this._setTimeDatepicker(target, tp_date, true);
	};

	/*
	* override getDate() to allow getting time too within Date object
	*/
	$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
	$.datepicker._getDateDatepicker = function(target, noDefault) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			// if it hasn't yet been defined, grab from field
			if(inst.lastVal === undefined){
				this._setDateFromField(inst, noDefault);
			}

			var date = this._getDate(inst);
			if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
				date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
			}
			return date;
		}
		return this._base_getDateDatepicker(target, noDefault);
	};

	/*
	* override parseDate() because UI 1.8.14 throws an error about "Extra characters"
	* An option in datapicker to ignore extra format characters would be nicer.
	*/
	$.datepicker._base_parseDate = $.datepicker.parseDate;
	$.datepicker.parseDate = function(format, value, settings) {
		var date;
		try {
			date = this._base_parseDate(format, value, settings);
		} catch (err) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
			if (err.indexOf(":") >= 0) {
				date = this._base_parseDate(format, value.substring(0,value.length-(err.length-err.indexOf(':')-2)), settings);
				$.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
			} else {
				throw err;
			}
		}
		return date;
	};

	/*
	* override formatDate to set date with time to the input
	*/
	$.datepicker._base_formatDate = $.datepicker._formatDate;
	$.datepicker._formatDate = function(inst, day, month, year) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			tp_inst._updateDateTime(inst);
			return tp_inst.$input.val();
		}
		return this._base_formatDate(inst);
	};

	/*
	* override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
	*/
	$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
	$.datepicker._optionDatepicker = function(target, name, value) {
		var inst = this._getInst(target),
	        name_clone;
		if (!inst) {
			return null;
		}

		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var min = null,
				max = null,
				onselect = null,
				overrides = tp_inst._defaults.evnts,
				fns = {},
				prop;
		    if (typeof name == 'string') { // if min/max was set with the string
		        if (name === 'minDate' || name === 'minDateTime') {
		            min = value;
		        } else if (name === 'maxDate' || name === 'maxDateTime') {
		            max = value;
		        } else if (name === 'onSelect') {
		            onselect = value;
		        } else if (overrides.hasOwnProperty(name)) {
		            if (typeof (value) === 'undefined') {
		                return overrides[name];
		            }
		            fns[name] = value;
		            name_clone = {}; //empty results in exiting function after overrides updated
		        }
		    } else if (typeof name == 'object') { //if min/max was set with the JSON
		        if (name.minDate) {
		            min = name.minDate;
		        } else if (name.minDateTime) {
		            min = name.minDateTime;
		        } else if (name.maxDate) {
		            max = name.maxDate;
		        } else if (name.maxDateTime) {
		            max = name.maxDateTime;
		        }
		        for (prop in overrides) {
		            if (overrides.hasOwnProperty(prop) && name[prop]) {
		                fns[prop] = name[prop];
		            }
		        }
		    }
		    for (prop in fns) {
		        if (fns.hasOwnProperty(prop)) {
		            overrides[prop] = fns[prop];
		            if (!name_clone) { name_clone = $.extend({}, name);}
		            delete name_clone[prop];
		        }
		    }
		    if (name_clone && isEmptyObject(name_clone)) { return; }
		    if (min) { //if min was set
		        if (min === 0) {
		            min = new Date();
		        } else {
		            min = new Date(min);
		        }
		        tp_inst._defaults.minDate = min;
		        tp_inst._defaults.minDateTime = min;
		    } else if (max) { //if max was set
		        if (max === 0) {
		            max = new Date();
		        } else {
		            max = new Date(max);
		        }
		        tp_inst._defaults.maxDate = max;
		        tp_inst._defaults.maxDateTime = max;
		    } else if (onselect) {
		        tp_inst._defaults.onSelect = onselect;
		    }
		}
		if (value === undefined) {
			return this._base_optionDatepicker.call($.datepicker, target, name);
		}
		return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
	};
	
	/*
	* jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
	* it will return false for all objects
	*/
	var isEmptyObject = function(obj) {
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(obj)) {
				return false;
			}
		}
		return true;
	};

	/*
	* jQuery extend now ignores nulls!
	*/
	var extendRemove = function(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] === null || props[name] === undefined) {
				target[name] = props[name];
			}
		}
		return target;
	};

	/*
	* Determine by the time format if should use ampm
	* Returns true if should use ampm, false if not
	*/
	var useAmpm = function(timeFormat){
		return ((timeFormat.indexOf('t') !== -1 || timeFormat.indexOf('T') !== -1) && timeFormat.indexOf('h') !== -1);
	};

	/*
	* Converts 24 hour format into 12 hour
	* Returns 12 hour without leading 0
	*/
	var convert24to12 = function(hour) {
		if (hour > 12) {
			hour = hour - 12;
		}

		if (hour === 0) {
			hour = 12;
		}

		return String(hour);
	};

	/*
	* Splits datetime string into date ans time substrings.
	* Throws exception when date can't be parsed
	* Returns [dateString, timeString]
	*/
	var splitDateTime = function(dateFormat, dateTimeString, dateSettings, timeSettings) {
		try {
			// The idea is to get the number separator occurances in datetime and the time format requested (since time has 
			// fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
			var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator,
				format = timeSettings && timeSettings.timeFormat ? timeSettings.timeFormat : $.timepicker._defaults.timeFormat,
				timeParts = format.split(separator), // how many occurances of separator may be in our format?
				timePartsLen = timeParts.length,
				allParts = dateTimeString.split(separator),
				allPartsLen = allParts.length;

			if (allPartsLen > 1) {
				return [
						allParts.splice(0,allPartsLen-timePartsLen).join(separator),
						allParts.splice(0,timePartsLen).join(separator)
					];
			}

		} catch (err) {
			$.timepicker.log('Could not split the date from the time. Please check the following datetimepicker options' +
					"\nthrown error: " + err +
					"\ndateTimeString" + dateTimeString +
					"\ndateFormat = " + dateFormat +
					"\nseparator = " + timeSettings.separator +
					"\ntimeFormat = " + timeSettings.timeFormat);

			if (err.indexOf(":") >= 0) {
				// Hack!  The error message ends with a colon, a space, and
				// the "extra" characters.  We rely on that instead of
				// attempting to perfectly reproduce the parsing algorithm.
				var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2),
					timeString = dateTimeString.substring(dateStringLength);

				return [$.trim(dateTimeString.substring(0, dateStringLength)), $.trim(dateTimeString.substring(dateStringLength))];

			} else {
				throw err;
			}
		}
		return [dateTimeString, ''];
	};

	/*
	* Internal function to parse datetime interval
	* Returns: {date: Date, timeObj: Object}, where
	*   date - parsed date without time (type Date)
	*   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
	*/
	var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var date;
		var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings, timeSettings);
		date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
		if (splitRes[1] !== '') {
			var timeString = splitRes[1],
				parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);

			if (parsedTime === null) {
				throw 'Wrong time format';
			}
			return {
				date: date,
				timeObj: parsedTime
			};
		} else {
			return {
				date: date
			};
		}
	};

	/*
	* Internal function to set timezone_select to the local timezone
	*/
	var selectLocalTimeZone = function(tp_inst, date) {
		if (tp_inst && tp_inst.timezone_select) {
			tp_inst._defaults.useLocalTimezone = true;
			var now = typeof date !== 'undefined' ? date : new Date();
			var tzoffset = $.timepicker.timeZoneOffsetString(now);
			if (tp_inst._defaults.timezoneIso8601) {
				tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
			}
			tp_inst.timezone_select.val(tzoffset);
		}
	};

	/*
	* Create a Singleton Insance
	*/
	$.timepicker = new Timepicker();

	/**
	 * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
	 * @param  date
	 * @return string
	 */
	$.timepicker.timeZoneOffsetString = function(date) {
		var off = date.getTimezoneOffset() * -1,
			minutes = off % 60,
			hours = (off - minutes) / 60;
		return (off >= 0 ? '+' : '-') + ('0' + (hours * 101).toString()).slice(-2) + ('0' + (minutes * 101).toString()).slice(-2);
	};

	/**
	 * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * n.b. The input value must be correctly formatted (reformatting is not supported)
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the timepicker() call
	 * @return jQuery
	 */
	$.timepicker.timeRange = function(startTime, endTime, options) {
		return $.timepicker.handleRange('timepicker', startTime, endTime, options);
	};

	/**
	 * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.dateTimeRange = function(startTime, endTime, options) {
		$.timepicker.dateRange(startTime, endTime, options, 'datetimepicker');
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.dateRange = function(startTime, endTime, options, method) {
		method = method || 'datepicker';
		$.timepicker.handleRange(method, startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return jQuery
	 */
	$.timepicker.handleRange = function(method, startTime, endTime, options) {
		$.fn[method].call(startTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, endTime, dateText);
			},
			onSelect: function(selectedDateTime) {
				selected(this, endTime, 'minDate');
			}
		}, options, options.start));
		$.fn[method].call(endTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, startTime, dateText);
			},
			onSelect: function(selectedDateTime) {
				selected(this, startTime, 'maxDate');
			}
		}, options, options.end));
		// timepicker doesn't provide access to its 'timeFormat' option, 
		// nor could I get datepicker.formatTime() to behave with times, so I
		// have disabled reformatting for timepicker
		if (method != 'timepicker' && options.reformat) {
			$([startTime, endTime]).each(function() {
				var format = $(this)[method].call($(this), 'option', 'dateFormat'),
					date = new Date($(this).val());
				if ($(this).val() && date) {
					$(this).val($.datepicker.formatDate(format, date));
				}
			});
		}
		checkDates(startTime, endTime, startTime.val());

		function checkDates(changed, other, dateText) {
			if (other.val() && (new Date(startTime.val()) > new Date(endTime.val()))) {
				other.val(dateText);
			}
		}
		selected(startTime, endTime, 'minDate');
		selected(endTime, startTime, 'maxDate');

		function selected(changed, other, option) {
			if (!$(changed).val()) {
				return;
			}
			var date = $(changed)[method].call($(changed), 'getDate');
			// timepicker doesn't implement 'getDate' and returns a jQuery
			if (date.getTime) {
				$(other)[method].call($(other), 'option', option, date);
			}
		}
		return $([startTime.get(0), endTime.get(0)]);
	};

	/**
	 * Log error or data to the console during error or debugging
	 * @param  Object err pass any type object to log to the console during error or debugging
	 * @return void
	 */
	$.timepicker.log = function(err){
		if(window.console){
			console.log(err);
		}
	};

	/*
	* Keep up with the version
	*/
	$.timepicker.version = "1.2.2";

})(jQuery);
