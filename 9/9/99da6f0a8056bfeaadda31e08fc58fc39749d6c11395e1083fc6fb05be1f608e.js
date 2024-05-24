if (window.Evergage && window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    try {
        window.SalesforceInteractions.log.warn("Aborting SDK load since the SalesforceInteractions SDK was already found on this page.");
    } catch(e) {}
} else {
window.evergageBeaconParseTimeStart = (new Date().getTime());
'use strict';var Evergage=function(m){function z(d){z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"===typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c};return z(d)}function ha(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function");}function sc(d,c){for(var a=0;a<c.length;a++){var b=c[a];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(d,
b.key,b)}}function ia(d,c,a){c&&sc(d.prototype,c);a&&sc(d,a);return d}function L(d,c,a){c in d?Object.defineProperty(d,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):d[c]=a;return d}function tc(d,c){var a=Object.keys(d);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(d);c&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}));a.push.apply(a,b)}return a}function y(d){for(var c=1;c<arguments.length;c++){var a=null!=arguments[c]?arguments[c]:{};
c%2?tc(a,!0).forEach(function(b){L(d,b,a[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(a)):tc(a).forEach(function(b){Object.defineProperty(d,b,Object.getOwnPropertyDescriptor(a,b))})}return d}function Na(d,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,writable:!0,configurable:!0}});c&&nb(d,c)}function I(d){I=Object.setPrototypeOf?
Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)};return I(d)}function nb(d,c){nb=Object.setPrototypeOf||function(a,b){a.__proto__=b;return a};return nb(d,c)}function wa(d,c){if(null==d)return{};if(null==d)var a={};else{a={};var b=Object.keys(d),e;for(e=0;e<b.length;e++){var f=b[e];0<=c.indexOf(f)||(a[f]=d[f])}}if(Object.getOwnPropertySymbols)for(e=Object.getOwnPropertySymbols(d),f=0;f<e.length;f++)b=e[f],0<=c.indexOf(b)||Object.prototype.propertyIsEnumerable.call(d,
b)&&(a[b]=d[b]);return a}function Oa(d,c){if(c&&("object"===typeof c||"function"===typeof c))return c;if(void 0===d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function ja(d,c,a){ja="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(a,c,d){for(;!Object.prototype.hasOwnProperty.call(a,c)&&(a=I(a),null!==a););if(a)return c=Object.getOwnPropertyDescriptor(a,c),c.get?c.get.call(d):c.value};return ja(d,c,a||d)}function xa(d,c){var a=Array.isArray(d)?
d:void 0;if(!a){a=[];var b=!0,e=!1,f=void 0;try{for(var g=d[Symbol.iterator](),h;!(b=(h=g.next()).done)&&(a.push(h.value),!c||a.length!==c);b=!0);}catch(n){e=!0,f=n}finally{try{if(!b&&null!=g["return"])g["return"]()}finally{if(e)throw f;}}}if(!(d=a))throw new TypeError("Invalid attempt to destructure non-iterable instance");return d}function ob(d){if(Array.isArray(d)){var c=0;for(var a=Array(d.length);c<d.length;c++)a[c]=d[c];c=a}else c=void 0;c||(c=Symbol.iterator in Object(d)||"[object Arguments]"===
Object.prototype.toString.call(d)?Array.from(d):void 0);if(!(d=c))throw new TypeError("Invalid attempt to spread non-iterable instance");return d}function pb(d){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:R;return c&&9===c.nodeType||c&&1===c.nodeType?le.test(d)?c.getElementsByClassName(d.slice(1)):me.test(d)?c.getElementsByTagName(d):c.querySelectorAll(d):[]}function ya(d){return d.replace(ne,function(c,a){return a.toUpperCase()})}function B(d,c,a){if(a)for(a=d.length;a--&&!1!==c.call(d[a],
a,d[a]););else{a=0;for(var b=d.length;a<b&&!1!==c.call(d[a],a,d[a]);a++);}return d}function qb(d,c){var a=d&&(d.matches||d.webkitMatchesSelector||d.msMatchesSelector);return!!a&&a.call(d,c)}function rb(d){return!!d&&d===d.window}function ka(d){return"function"===typeof d}function F(d){return"string"===typeof d}function uc(d){return!isNaN(parseFloat(d))&&isFinite(d)}function sb(d){return F(d)?function(c,a){return qb(a,d)}:ka(d)?d:d instanceof Pa?function(c,a){return d.is(a)}:d?function(c,a){return a===
d}:function(){return!1}}function qa(d,c){return c?d.filter(c):d}function Qa(d){return F(d)?d.match(oe)||[]:[]}function V(d,c,a){for(var b=[],e=ka(c),f=0,g=d.length;f<g;f++)if(e){var h=c(d[f]);h.length&&pe.apply(b,h)}else for(h=d[f][c];null!=h;)b.push(h),h=a?h[c]:null;return b}function S(d){return 1<d.length?tb.call(d,function(c,a,b){return vc.call(b,c)===a}):d}function la(d,c,a){if(d&&1===d.nodeType&&c)return d=za.getComputedStyle(d,null),c?a?d.getPropertyValue(c)||void 0:d[c]:d}function ra(d,c){return parseInt(la(d,
c),10)||0}function wc(d){if(1<arguments.length&&void 0!==arguments[1]?arguments[1]:ub.test(d))return d;if(!vb[d]){var c=ya(d),a="".concat(c[0].toUpperCase()).concat(c.slice(1));c="".concat(c," ").concat(qe.join("".concat(a," "))).concat(a).split(" ");B(c,function(a,c){if(c in re)return vb[d]=c,!1})}return vb[d]}function xc(d,c){return(2<arguments.length&&void 0!==arguments[2]?arguments[2]:ub.test(d))||se[d]||!uc(c)?c:"".concat(c,"px")}function yc(d,c){d=d.dataset[c]||d.dataset[ya(c)];try{return JSON.parse(d)}catch(a){}return d}
function zc(d,c){return ra(d,"border".concat(c?"Left":"Top","Width"))+ra(d,"padding".concat(c?"Left":"Top"))+ra(d,"padding".concat(c?"Right":"Bottom"))+ra(d,"border".concat(c?"Right":"Bottom","Width"))}function Ac(d,c){return!c||!wb.call(c,function(a){return 0>d.indexOf(a)})}function te(d,c,a,b,e){e.guid=e.guid||q.guid++;var f=d.___ce=d.___ce||{};f[c]=f[c]||[];f[c].push([a,b,e]);d.addEventListener(c,e)}function xb(d){d=d.split(".");return[d[0],d.slice(1).sort()]}function Ra(d,c,a,b,e){var f=d.___ce=
d.___ce||{};if(c)f[c]&&(f[c]=f[c].filter(function(f){var h=xa(f,3);f=h[0];var g=h[1];h=h[2];if(e&&h.guid!==e.guid||!Ac(f,a)||b&&b!==g)return!0;d.removeEventListener(c,h)}));else for(c in f)Ra(d,c,a,b,e)}function Bc(d){return d.multiple&&d.options?V(tb.call(d.options,function(c){return c.selected&&!c.disabled&&!c.parentNode.disabled}),"value"):d.value||""}function Cc(d){if(!F(d))return[];if(ue.test(d))return[ma(RegExp.$1)];var c=ve.test(d)&&RegExp.$1;c=Dc[c]||Dc["*"];c.innerHTML=d;return q(c.childNodes).detach().get()}
function we(d,c){d=q(d);d.filter("script").add(d.find("script")).each(function(a,b){if(xe.test(b.type)&&yb.contains(b)){var d=ma("script");d.text=b.textContent.replace(ye,"");B(ze,function(a,c){b[c]&&(d[c]=b[c])});c.head.insertBefore(d,null);c.head.removeChild(d)}})}function ba(d,c,a,b,e,f,g,h){B(d,function(d,f){B(q(f),function(d,f){B(q(c),function(c,d){var h=a?d:f;d=a?f:d;c=c?h.cloneNode(!0):h;e?d.insertBefore(c,b?d.firstElementChild:null):d.parentNode.insertBefore(c,b?d:d.nextElementSibling);we(c,
d.ownerDocument)},h)},g)},f);return c}function J(d){J="function"===typeof Symbol&&"symbol"===z(Symbol.iterator)?function(c){return z(c)}:function(c){return c&&"function"===typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":z(c)};return J(d)}function Aa(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function");}function Ec(d,c){for(var a=0;a<c.length;a++){var b=c[a];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(d,
b.key,b)}}function Sa(d,c,a){c&&Ec(d.prototype,c);a&&Ec(d,a);return d}function Ta(d,c,a){c in d?Object.defineProperty(d,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):d[c]=a;return d}function Fc(d,c){var a=Object.keys(d);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(d);c&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}));a.push.apply(a,b)}return a}function D(d){for(var c=1;c<arguments.length;c++){var a=null!=arguments[c]?arguments[c]:{};
c%2?Fc(a,!0).forEach(function(b){Ta(d,b,a[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(a)):Fc(a).forEach(function(b){Object.defineProperty(d,b,Object.getOwnPropertyDescriptor(a,b))})}return d}function Ce(d,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,writable:!0,configurable:!0}});c&&zb(d,c)}function sa(d){sa=Object.setPrototypeOf?
Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)};return sa(d)}function zb(d,c){zb=Object.setPrototypeOf||function(a,b){a.__proto__=b;return a};return zb(d,c)}function De(d,c){if(c&&("object"===z(c)||"function"===typeof c))return c;if(void 0===d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function Ua(d,c,a){Ua="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(a,c,d){for(;!Object.prototype.hasOwnProperty.call(a,
c)&&(a=sa(a),null!==a););if(a)return c=Object.getOwnPropertyDescriptor(a,c),c.get?c.get.call(d):c.value};return Ua(d,c,a||d)}function Gc(d){if(Array.isArray(d)){var c=0;for(var a=Array(d.length);c<d.length;c++)a[c]=d[c];c=a}else c=void 0;c||(c=Symbol.iterator in Object(d)||"[object Arguments]"===Object.prototype.toString.call(d)?Array.from(d):void 0);if(!(d=c))throw new TypeError("Invalid attempt to spread non-iterable instance");return d}function Hc(d){r.setLoggingLevel(d)}function Ic(){return r.getLoggingLevel()}
function Ab(d){var c,a,b,e=[],f=[a=1732584193,b=4023233417,~a,~b,3285377520],g=[],h=unescape(encodeURI(d))+"\u0080",n=h.length;for(g[d=--n/4+2|15]=8*n;~n;)g[n>>2]|=h.charCodeAt(n)<<8*~n--;for(c=n=0;c<d;c+=16){for(a=f;80>n;a=[a[4]+(e[n]=16>n?~~g[c+n]:2*h|0>h)+1518500249+[b&ca|~b&k,h=341275144+(b^ca^k),882459459+(b&ca|b&k|ca&k),h+1535694389][n++/5>>2]+((h=a[0])<<5|h>>>27),h,b<<30|b>>>2,ca,k]){h=e[n-3]^e[n-8]^e[n-14]^e[n-16];b=a[1];var ca=a[2];var k=a[3]}for(n=5;n;)f[--n]+=a[n]}for(h="";40>n;)h+=(f[n>>
3]>>4*(7-n++)&15).toString(16);return h}function Jc(){var d=(window.navigator.userAgent||"")+(window.navigator.platform||"")+(new Date).getTime+JSON.stringify({})+Math.random();return Ba(d).slice(0,16)}function Kc(d,c,a){return"function"===typeof a?{bind:d,selector:c,callback:a}:null}function Ee(){Bb=u.onFireException.on(function(d,c){document.dispatchEvent(new CustomEvent(v.OnException,{detail:{error:d,context:c}}))});Cb=u.onEventSend.on(function(d){document.dispatchEvent(new CustomEvent(v.OnBeforeEventSend,
{detail:{actionEvent:d},cancelable:!0}))&&document.dispatchEvent(new CustomEvent(v.OnEventSend,{detail:{actionEvent:d}}))});Db=u.onPageMatchStatusUpdated.on(function(d){document.dispatchEvent(new CustomEvent(v.OnPageMatchStatusUpdated,{detail:{matchStatus:d}}))});Eb=u.onInitSitemap.on(function(d){document.dispatchEvent(new CustomEvent(v.OnInitSitemap,{detail:{sitemapConfig:d}}))})}function W(d){Bb&&Bb();Cb&&Cb();Db&&Db();Eb&&Eb();document.dispatchEvent(new CustomEvent(v.OnShutDown,{detail:{message:d}}));
Fb="shutDown";return!1}function Va(d,c,a,b){return d.addEventListener?(d.addEventListener(c,a,b),!0):!1}function da(d,c,a,b){return d.removeEventListener?(d.removeEventListener(c,a,b),!0):!1}function Gb(d){var c=document.createElement("a");c.href=d;return c}function Lc(d){try{return decodeURIComponent(d.replace(/\+/g," "))}catch(c){return null}}function Mc(d){if(d=d.detail&&d.detail.actionEvent)if(d.itemAction&&d.itemAction.includes("View"))Wa();else{var c;if(c=d.interaction)d=d.interaction.name,
c=d===na.ViewCatalogObject||d===na.ViewCatalogObjectDetail||d===na.QuickViewCatalogObject||d===Ca.StopQuickViewCatalogObject;c&&Wa()}}function Hb(d){-1!==X&&(Ib(!1,d),clearTimeout(X),X=-1)}function Wa(){if(!p.beaconConfig.doNotTrackPingRequestsForActions){Hb(!0);document.removeEventListener(m.CustomEvents.OnEventSend,Mc);document.addEventListener(m.CustomEvents.OnEventSend,Mc);var d=Date.now();if(-1===G||d-G>=p.beaconConfig.minimumActivityTimeToRegister)G=d;X=setTimeout(function(){Ib(!0)},p.beaconConfig.timeOnPageTimerLengthMillis);
r.info("Setting up time on page listeners.");da(window,"unload",Jb);Va(window,"unload",Jb);da(window,"blur",Kb);Va(window,"blur",Kb);da(window,"focus",Lb);Va(window,"focus",Lb);da(document,"mousemove keydown scroll click",Da);Va(document,"mousemove keydown scroll click",Da)}}function Ib(d,c){var a=Date.now();-1!==G&&(a-=G,p.beaconConfig.timeOnPageTimerLengthMillis<a?Xa():(r.trace("Evergage: timeOnPage before: sendActivityPingRequest: ".concat(C)),C+=a,r.trace("Evergage: timeOnPage after: sendActivityPingRequest: ".concat(C)),
-1!==Y&&clearTimeout(Y),Y=setTimeout(Xa,p.beaconConfig.timeOnPageTimerLengthMillis-a)));if(0<C){C=Math.min(C,p.beaconConfig.timeOnPageTimerLengthMillis);if(!0!==c||2E3<=C)c=Fe(C),Ge(c),Nc(c);C=0}0>C&&(C=0);d&&(-1!==X&&clearTimeout(X),X=setTimeout(function(){Ib(!0)},p.beaconConfig.timeOnPageTimerLengthMillis))}function Fe(d){d={timeOnPageMillis:d};var c=Oc(),a={};if(c&&c.itemAction&&c.catalog)a=c.catalog;else if(c&&c.interaction&&c.interaction.catalogObject){a=c.interaction.catalogObject;var b={},
e=a.id,f=a.type,g=wa(a,["id","type"]);e&&f&&(b[a.type]={_id:e});a.relatedCatalogObjects&&(f=g.relatedCatalogObjects,e=f.Category,f=wa(f,["Category"]),Array.isArray(e)&&(b[a.type].categories=Pc(e)),0!==Object.keys(f).length&&(b[a.type].relatedCatalogObjects=f));a=b}0!==Object.keys(a).length&&(d.catalog=a);c&&c.interaction&&null!=c.interaction.name?d.action=c.interaction.name:c&&null!=c.action&&(d.action=c.action);Qc();d.performance={};c=wa(x,["sdkLoadTime","sdkParseTime"]);for(var h in c)x[h]&&(d.performance[h]=
x[h]);return d}function Jb(d){Hb()}function Kb(d){try{r.trace("Evergage: window blurred"),Xa()}catch(c){w(c,"windowBlurFunction")}}function Lb(d){try{r.trace("Evergage: window focused"),Da()}catch(c){w(c,"windowFocusFunction")}}function Xa(){try{-1!==Y&&(clearTimeout(Y),Y=-1);var d=Date.now(),c=0;-1!==G&&(c=d-G);r.trace("Evergage: timeOnPage before: setUserInactive: ".concat(C));C+=c;r.trace("Evergage: timeOnPage after: setUserInactive: ".concat(C));G=-1}catch(a){w(a,"setUserInactive")}}function Da(){r.trace("activity registered");
try{-1!==Y&&(clearTimeout(Y),Y=-1);var d=Date.now();if(-1===G||d-G>=p.beaconConfig.minimumActivityTimeToRegister)-1!==G&&(r.trace("Evergage: timeOnPage before: activityRegistered: ".concat(C)),C+=d-Math.max(G,-1),r.trace("Evergage: timeOnPage after: activityRegistered: ".concat(C))),G=d}catch(c){w(c,"activityRegistered")}}function Mb(d,c){d="string"===typeof d?Error(d):d;for(var a in c)Object.defineProperty(d,a,{value:c[a],enumerable:!1});return d}var M=function(d,c){return c={exports:{}},d(c,c.exports),
c.exports}(function(d,c){d.exports=function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a],d;for(d in c)b[d]=c[d]}return b}function b(c){function d(){}function e(b,e,f){if("undefined"!==typeof document){f=a({path:"/"},d.defaults,f);"number"===typeof f.expires&&(f.expires=new Date(1*new Date+864E5*f.expires));f.expires=f.expires?f.expires.toUTCString():"";try{var h=JSON.stringify(e);/^[\{\[]/.test(h)&&(e=h)}catch(lg){}e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
decodeURIComponent);b=encodeURIComponent(String(b)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);h="";for(var g in f)f[g]&&(h+="; "+g,!0!==f[g]&&(h+="="+f[g].split(";")[0]));return document.cookie=b+"="+e+h}}function h(a,b){if("undefined"!==typeof document){for(var d={},e=document.cookie?document.cookie.split("; "):[],f=0;f<e.length;f++){var h=e[f].split("="),g=h.slice(1).join("=");b||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var n=h[0].replace(/(%[0-9A-Z]{2})+/g,
decodeURIComponent);g=(c.read||c)(g,n)||g.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(b)try{g=JSON.parse(g)}catch(He){}d[n]=g;if(a===n)break}catch(He){}}return a?d[a]:d}}d.set=e;d.get=function(a){return h(a,!1)};d.getJSON=function(a){return h(a,!0)};d.remove=function(b,c){e(b,"",a(c,{expires:-1}))};d.defaults={};d.withConverter=b;return d}return b(function(){})}()}),R=document,za=window,yb=R.documentElement,ma=R.createElement.bind(R),Rc=ma("div"),Nb=ma("table"),Ie=ma("tbody"),Sc=ma("tr"),Ob=
Array.isArray,ea=Array.prototype,tb=ea.filter,vc=ea.indexOf,Je=ea.map,pe=ea.push,Tc=ea.slice,wb=ea.some,Ke=ea.splice,Le=/^#[\w-]*$/,le=/^\.[\w-]*$/,Me=/<.+>/,me=/^\w+$/,Pa=function(){function d(c){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:R;ha(this,d);if(c){if(c instanceof Pa)return c;var b=c;if(F(c)){if(b=a instanceof Pa?a[0]:a,b=Le.test(c)?b.getElementById(c.slice(1)):Me.test(c)?Cc(c):pb(c,b),!b)return}else if(ka(c))return this.ready(c);if(b.nodeType||b===za)b=[b];this.length=
b.length;a=0;for(var e=this.length;a<e;a++)this[a]=b[a]}}ia(d,[{key:"init",value:function(c,a){return new d(c,a)}}]);return d}(),l=Pa.prototype,q=l.init;q.fn=q.prototype=l;l.length=0;l.splice=Ke;"function"===typeof Symbol&&(l[Symbol.iterator]=ea[Symbol.iterator]);l.map=function(d){return q(Je.call(this,function(c,a){return d.call(c,a,c)}))};l.slice=function(d,c){return q(Tc.call(this,d,c))};var ne=/-([a-z])/g;q.camelCase=ya;q.each=B;l.each=function(d){return B(this,d)};l.removeProp=function(d){return this.each(function(c,
a){delete a[d]})};q.extend=function(d){for(var c=arguments.length,a=Array(1<c?c-1:0),b=1;b<c;b++)a[b-1]=arguments[b];c=arguments.length;for(a=2>c?0:1;a<c;a++)for(var e in arguments[a])d[e]=arguments[a][e];return d};l.extend=function(d){return q.extend(l,d)};q.guid=1;q.matches=qb;q.isWindow=rb;q.isFunction=ka;q.isString=F;q.isNumeric=uc;q.isArray=Ob;l.prop=function(d,c){if(d){if(F(d))return 2>arguments.length?this[0]&&this[0][d]:this.each(function(a,e){e[d]=c});for(var a in d)this.prop(a,d[a]);return this}};
l.get=function(d){return void 0===d?Tc.call(this):this[0>d?d+this.length:d]};l.eq=function(d){return q(this.get(d))};l.first=function(){return this.eq(0)};l.last=function(){return this.eq(-1)};l.filter=function(d){var c=sb(d);return q(tb.call(this,function(a,b){return c.call(a,b,a)}))};var oe=/\S+/g;l.hasClass=function(d){return!!d&&wb.call(this,function(c){return c.classList.contains(d)})};l.removeAttr=function(d){var c=Qa(d);return this.each(function(a,b){B(c,function(a,c){b.removeAttribute(c)})})};
l.attr=function(d,c){if(d){if(F(d)){if(2>arguments.length){if(!this[0])return;var a=this[0].getAttribute(d);return null===a?void 0:a}return void 0===c?this:null===c?this.removeAttr(d):this.each(function(a,e){e.setAttribute(d,c)})}for(a in d)this.attr(a,d[a]);return this}};l.toggleClass=function(d,c){var a=Qa(d),b=void 0!==c;return this.each(function(d,f){B(a,function(a,d){b?c?f.classList.add(d):f.classList.remove(d):f.classList.toggle(d)})})};l.addClass=function(d){return this.toggleClass(d,!0)};
l.removeClass=function(d){return arguments.length?this.toggleClass(d,!1):this.attr("class","")};q.unique=S;l.add=function(d,c){return q(S(this.get().concat(q(d,c).get())))};var ub=/^--/,vb={},re=Rc.style,qe=["webkit","moz","ms"];q.prefixedProp=wc;var se={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};l.css=function(d,c){if(F(d)){var a=ub.test(d);d=wc(d,a);if(2>arguments.length)return this[0]&&la(this[0],
d,a);if(!d)return this;c=xc(d,c,a);return this.each(function(b,f){f&&1===f.nodeType&&(a?f.style.setProperty(d,c):f.style[d]=c)})}for(var b in d)this.css(b,d[b]);return this};l.data=function(d,c){if(!d){if(!this[0])return;var a={},b;for(b in this[0].dataset)a[b]=yc(this[0],b);return a}if(F(d))return 2>arguments.length?this[0]&&yc(this[0],d):this.each(function(a,b){a=c;try{a=JSON.stringify(a)}catch(g){}b.dataset[ya(d)]=a});for(a in d)this.data(a,d[a]);return this};B([!0,!1],function(d,c){B(["Width",
"Height"],function(a,b){var d="".concat(c?"outer":"inner").concat(b);l[d]=function(e){if(this[0])return rb(this[0])?za[d]:this[0]["".concat(c?"offset":"client").concat(b)]+(e&&c?ra(this[0],"margin".concat(a?"Top":"Left"))+ra(this[0],"margin".concat(a?"Bottom":"Right")):0)}})});B(["width","height"],function(d,c){l[c]=function(a){if(!this[0])return void 0===a?void 0:this;if(!arguments.length)return rb(this[0])?this[0][ya("outer-".concat(c))]:this[0].getBoundingClientRect()[c]-zc(this[0],!d);var b=parseInt(a,
10);return this.each(function(a,f){f&&1===f.nodeType&&(a=la(f,"boxSizing"),f.style[c]=xc(c,b+("border-box"===a?zc(f,!d):0)))})}});var Pb={};l.toggle=function(d){return this.each(function(c,a){if(void 0===d?"none"===la(a,"display"):d){if(a.style.display=a.___cd||"","none"===la(a,"display")){c=a.style;a=a.tagName;if(Pb[a])a=Pb[a];else{var b=ma(a);R.body.insertBefore(b,null);var e=la(b,"display");R.body.removeChild(b);a=Pb[a]="none"!==e?e:"block"}c.display=a}}else a.___cd=la(a,"display"),a.style.display=
"none"})};l.hide=function(){return this.toggle(!1)};l.show=function(){return this.toggle(!0)};var Qb={focus:"focusin",blur:"focusout"},Uc={mouseenter:"mouseover",mouseleave:"mouseout"},Ne=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;l.off=function(d,c,a){var b=this;if(void 0===d)this.each(function(a,b){Ra(b)});else if(F(d))ka(c)&&(a=c,c=""),B(Qa(d),function(d,e){d=xb(Uc[e]||Qb[e]||e);d=xa(d,2);var f=d[0],g=d[1];b.each(function(b,d){Ra(d,f,g,c,a)})});else for(var e in d)this.off(e,d[e]);
return this};l.on=function(d,c,a,b){var e=this;if(!F(d)){for(var f in d)this.on(f,c,d[f]);return this}ka(c)&&(a=c,c="");B(Qa(d),function(d,f){d=xb(Uc[f]||Qb[f]||f);d=xa(d,2);var h=d[0],g=d[1];e.each(function(d,e){d=function Be(d){if(!d.namespace||Ac(g,d.namespace.split("."))){var f=e;if(c){for(var n=d.target;!qb(n,c);){if(n===e)return;n=n.parentNode;if(!n)return}f=n;d.___cd=!0}d.___cd&&Object.defineProperty(d,"currentTarget",{configurable:!0,get:function(){return f}});n=a.call(f,d,d.data);b&&Ra(e,
h,g,c,Be);!1===n&&(d.preventDefault(),d.stopPropagation())}};d.guid=a.guid=a.guid||q.guid++;te(e,h,g,c,d)})});return this};l.one=function(d,c,a){return this.on(d,c,a,!0)};l.ready=function(d){"loading"!==R.readyState?d(q):R.addEventListener("DOMContentLoaded",function(){d(q)});return this};l.trigger=function(d,c){if(F(d)){var a=xb(d),b=xa(a,2);a=b[0];b=b[1];var e=Ne.test(a)?"MouseEvents":"HTMLEvents";d=R.createEvent(e);d.initEvent(a,!0,!0);d.namespace=b.join(".")}d.data=c;var f=d.type in Qb;return this.each(function(a,
b){if(f&&ka(b[d.type]))b[d.type]();else b.dispatchEvent(d)})};var Oe=/%20/g,Pe=/file|reset|submit|button|image/i,Qe=/radio|checkbox/i;l.serialize=function(){var d="";this.each(function(c,a){B(a.elements||[a],function(a,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Pe.test(c.type)||Qe.test(c.type)&&!c.checked||(a=Bc(c),void 0!==a&&(a=Ob(a)?a:[a],B(a,function(a,b){a=d;b="&".concat(encodeURIComponent(c.name),"=").concat(encodeURIComponent(b).replace(Oe,"+"));d=a+b})))})});return d.slice(1)};l.val=
function(d){return void 0===d?this[0]&&Bc(this[0]):this.each(function(c,a){if("SELECT"===a.tagName){var b=Ob(d)?d:null===d?[]:[d];B(a.options,function(a,c){c.selected=0<=b.indexOf(c.value)})}else a.value=null===d?"":d})};l.clone=function(){return this.map(function(d,c){return c.cloneNode(!0)})};l.detach=function(){return this.each(function(d,c){c.parentNode&&c.parentNode.removeChild(c)})};var ve=/^\s*<(\w+)[^>]*>/,ue=/^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/,Dc={"*":Rc,tr:Ie,td:Sc,th:Sc,thead:Nb,tbody:Nb,
tfoot:Nb};q.parseHTML=Cc;l.empty=function(){return this.each(function(d,c){for(;c.firstChild;)c.removeChild(c.firstChild)})};l.html=function(d){return void 0===d?this[0]&&this[0].innerHTML:this.each(function(c,a){a.innerHTML=d})};l.remove=function(){return this.detach().off()};l.text=function(d){return void 0===d?this[0]?this[0].textContent:"":this.each(function(c,a){a.textContent=d})};l.unwrap=function(){this.parent().each(function(d,c){d=q(c);d.replaceWith(d.children())});return this};l.offset=
function(){var d=this[0];if(d)return d=d.getBoundingClientRect(),{top:d.top+za.pageYOffset-yb.clientTop,left:d.left+za.pageXOffset-yb.clientLeft}};l.offsetParent=function(){return q(this[0]&&this[0].offsetParent)};l.position=function(){var d=this[0];if(d)return{left:d.offsetLeft,top:d.offsetTop}};l.children=function(d){return qa(q(S(V(this,function(c){return c.children}))),d)};l.contents=function(){return q(S(V(this,function(d){return"IFRAME"===d.tagName?[d.contentDocument]:d.childNodes})))};l.find=
function(d){return q(S(V(this,function(c){return pb(d,c)})))};var ye=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,xe=/^$|^module$|\/(java|ecma)script/i,ze=["type","src","nonce","noModule"];l.after=function(){return ba(arguments,this,!1,!1,!1,!0,!0)};l.append=function(){return ba(arguments,this,!1,!1,!0)};l.appendTo=function(d){return ba(arguments,this,!0,!1,!0)};l.before=function(){return ba(arguments,this,!1,!0)};l.insertAfter=function(d){return ba(arguments,this,!0,!1,!1,!1,!1,!0)};l.insertBefore=
function(d){return ba(arguments,this,!0,!0)};l.prepend=function(){return ba(arguments,this,!1,!0,!0,!0,!0)};l.prependTo=function(d){return ba(arguments,this,!0,!0,!0,!1,!1,!0)};l.replaceWith=function(d){return this.before(d).remove()};l.replaceAll=function(d){q(d).replaceWith(this);return this};l.wrapAll=function(d){d=q(d);for(var c=d[0];c.children.length;)c=c.firstElementChild;this.first().before(d);return this.appendTo(c)};l.wrap=function(d){return this.each(function(c,a){var b=q(d)[0];q(a).wrapAll(c?
b.cloneNode(!0):b)})};l.wrapInner=function(d){return this.each(function(c,a){c=q(a);a=c.contents();a.length?a.wrapAll(d):c.append(d)})};l.has=function(d){var c=F(d)?function(a,b){return pb(d,b).length}:function(a,b){return b.contains(d)};return this.filter(c)};l.is=function(d){var c=sb(d);return wb.call(this,function(a,b){return c.call(a,b,a)})};l.next=function(d,c){return qa(q(S(V(this,"nextElementSibling",c))),d)};l.nextAll=function(d){return this.next(d,!0)};l.not=function(d){var c=sb(d);return this.filter(function(a,
b){return!c.call(b,a,b)})};l.parent=function(d){return qa(q(S(V(this,"parentNode"))),d)};l.index=function(d){var c=d?q(d)[0]:this[0];d=d?this:q(c).parent().children();return vc.call(d,c)};l.closest=function(d){var c=this.filter(d);if(c.length)return c;var a=this.parent();return a.length?a.closest(d):c};l.parents=function(d){return qa(q(S(V(this,"parentElement",!0))),d)};l.prev=function(d,c){return qa(q(S(V(this,"previousElementSibling",c))),d)};l.prevAll=function(d){return this.prev(d,!0)};l.siblings=
function(d){return qa(q(S(V(this,function(c){return q(c).parent().children().not(c)}))),d)};var Rb=["error","warn","info","debug","trace"],r=new (function(){function d(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;Aa(this,d);this.console=window.console;this.level=a;this.prefix=c;this.buildLogFunctions()}Sa(d,[{key:"shouldLog",value:function(c){return c<=this.level}},{key:"setLoggingLevel",value:function(c){this.level="string"===
typeof c?Rb.indexOf(c.toLowerCase())+1:c||0;this.buildLogFunctions()}},{key:"getLoggingLevel",value:function(){return this.level}},{key:"setPrefix",value:function(c){this.prefix=c;this.buildLogFunctions()}},{key:"getPrefix",value:function(){return this.prefix}},{key:"buildLogFunctions",value:function(){var c=this;Rb.forEach(function(a,b){a=Rb[b];c[a]=c.shouldLog(b+1)?c.getLogFn(a):function(){}})}},{key:"getLogFn",value:function(c){return Function.prototype.bind.call(this.console.log,this.console,
"[".concat(c.toUpperCase(),"]").concat(this.prefix?"("+this.prefix+")":"",":"))}}]);return d}()),v;(function(d){d.OnEventSend="interactions:onEventSend";d.OnBeforeEventSend="interactions:onBeforeEventSend";d.OnException="interactions:onException";d.OnPageMatchStatusUpdated="interactions:onPageMatchStatusUpdated";d.OnInit="interactions:onInit";d.OnInitSitemap="interactions:onInitSitemap";d.OnShutDown="interactions:onShutDown";d.OnSetAnonymousId="interactions:onSetAnonymousId";d.OnResetAnonymousId=
"interactions:onResetAnonymousId";d.OnClearPersistedIdentities="interactions:onClearPersistedIdentities";d.OnClearCookie="interactions:onClearCookie";d.OnConsentRevoke="interactions:onConsentRevoke";d.OnBeforeInit="interactions:onBeforeInit"})(v||(v={}));var Ba=Ab.default?Ab.default:Ab,Vc,oa=window.location.hostname,Sb=function(d){oa=d;Wc()},Wc=function(){Vc=Ba("".concat(Ba(oa+"/").slice(0,4))).slice(0,4)},Ea=function(){return"".concat("_sfid","_").concat(Vc)},Xc;document.addEventListener(v.OnClearCookie,
function(d){var c=d.detail&&d.detail.options||{};c.domain&&Sb(d.detail.options.domain);Yc(D({domain:oa},c))});var Tb=function(){return M.getJSON(Ea())},Yc=function(d){M.remove(Ea(),d)},Zc=function(d){ta.write(D({},Tb(),{consents:d}),730)},ta={read:Tb,write:function(d,c){Xc?M.set(Ea(),d,{expires:c,domain:oa,secure:!0}):M.set(Ea(),d,{expires:c,domain:oa});M.get(Ea())||r.warn("Web SDK cookie (_sfid) could not be set. This is possibly due to a restricted top level domain. See https://publicsuffix.org/learn/ for more information.")},
remove:Yc},Re=[/bot/i,/spider/i,/facebookexternalhit/i,/simplepie/i,/yahooseeker/i,/embedly/i,/quora link preview/i,/outbrain/i,/vkshare/i,/monit/i,/Pingability/i,/Monitoring/i,/WinHttpRequest/i,/Apache-HttpClient/i,/getprismatic.com/i,/python-requests/i,/Twurly/i,/yandex/i,/browserproxy/i,/crawler/i,/Qwantify/i,/Yahoo! Slurp/i,/pinterest/i,/Tumblr\/14.0.835.186/i,/Tumblr Agent 14.0/i],Se=function(d){return Re.some(function(c){return c.test(d)})},Te=navigator.vendor&&-1<navigator.vendor.indexOf("Apple")&&
navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS"),U="";document.addEventListener(v.OnResetAnonymousId,function(){ta.remove();$c()});document.addEventListener(v.OnSetAnonymousId,function(d){d.detail&&d.detail.newAnonymousId&&(d=d.detail.newAnonymousId,ta.write(D({},Tb(),{anonymousId:d}),730))});var Ya=function(d){(U=d)?document.dispatchEvent(new CustomEvent(v.OnSetAnonymousId,{detail:{newAnonymousId:d}})):r.warn("Attempted to setAnonymousId but not parameter is undefined")},
$c=function(){ad()?(U=ta.read().anonymousId,Ya(U),r.debug("Loaded anonymous identity record from cookie: ".concat(JSON.stringify(U)))):(Ya(Jc()),r.debug("Created new anonymous identity record. anonymousId: ".concat(U)));return U},ad=function(){var d=ta.read();return!!(d&&"object"===J(d)&&0<Object.keys(d).length)},Za=function(){function d(){Aa(this,d);this.listeners=[]}Sa(d,[{key:"on",value:function(c){var a=this;(this.listeners=this.listeners||[]).push(c);return function(){a.listeners=a.listeners.filter(function(a){return a!==
c})}}},{key:"once",value:function(c){var a=this;return this.on(function(){a.unbindAll();try{for(var b=arguments.length,d=Array(b),f=0;f<b;f++)d[f]=arguments[f];c.apply(a,d)}catch(g){r.error("Signal listener callback error: "+g)}})}},{key:"emit",value:function(){for(var c=this,a=arguments.length,b=Array(a),d=0;d<a;d++)b[d]=arguments[d];0!==this.listeners.length&&this.listeners.forEach(function(a){try{a.apply(c,b)}catch(g){r.error("Signal listener callback error: "+g)}})}},{key:"unbindAll",value:function(){this.listeners=
[]}}]);return d}(),Ue=function(d){r.debug("Unbinding all signals for type: ",d);Object.keys(d).forEach(function(c){d[c].unbindAll&&d[c].unbindAll()})},u=function c(){Aa(this,c)};u.onEventSend=new Za;u.onFireException=new Za;u.onPageMatchStatusUpdated=new Za;u.onInitSitemap=new Za;u.unbindAll=function(){Ue(u)};var t={currentPage:null,matchedConfig:null,matchStatus:null},N={pageTypes:[]},E=null,O;(function(c){c.Pending="pending";c.Running="running";c.Selected="selected";c.Matched="matched";c.Rejected=
"rejected"})(O||(O={}));var $a=function(c){return new Promise(function(a,b){var e=N.pageTypeDefault;e&&Fa({pageName:e.name,status:O.Pending});e&&!c.length?(Ub(e),a(e)):(Ve(c),c.map(function(f){We(f).then(function(g){g?(e&&bd(e),Ub(f),a(f)):(bd(f),Xe(c)||(e?(Ub(e),a(e)):b("No matching page found")))}).catch(function(a){"sitemap_reinit"!==a&&u.onFireException.emit(Error("isMatch failed while evaluating the ".concat(f.name," page config")),"Site-wide Javascript")})}))})},cd=function(){t.matchStatus&&
(t.matchStatus.forEach(function(c){c.status===O.Running&&c._reject("sitemap_reinit")}),t.matchStatus=[]);u.onPageMatchStatusUpdated.emit(t.matchStatus)},Ve=function(c){c.forEach(function(a){Fa({pageName:a.name,status:O.Pending})})},Ub=function(c){Fa({pageName:c.name,endTime:Date.now(),status:t.matchStatus.find(function(a){return a.status===O.Selected})?O.Matched:O.Selected})},bd=function(c){Fa({pageName:c.name,status:O.Rejected,endTime:Date.now()})},Xe=function(c){return t.matchStatus.filter(function(a){return a.status===
O.Rejected},0).length<c.length},We=function(c){return new Promise(function(a,b){Fa({pageName:c.name,status:O.Running,startTime:Date.now(),_reject:b});"function"===typeof c.isMatch?(b=c.isMatch(),"object"===J(b)?b.then(function(b){a(b)}).catch(function(){}):a(b)):u.onFireException.emit(Error("isMatch failed while evaluating the ".concat(c.name," page config. isMatch must be a function.")),"Site-wide Javascript")})},Fa=function(c){t.matchStatus=[].concat(Gc(t.matchStatus||[]),[c]);u.onPageMatchStatusUpdated.emit(t.matchStatus)},
na;(function(c){c.ViewCatalogObject="View Catalog Object";c.ViewCatalogObjectDetail="View Catalog Object Detail";c.QuickViewCatalogObject="Quick View Catalog Object";c.ShareCatalogObject="Share Catalog Object";c.ReviewCatalogObject="Review Catalog Object";c.CommentCatalogObject="Comment Catalog Object";c.FavoriteCatalogObject="Favorite Catalog Object"})(na||(na={}));var Vb;(function(c){c.AddToCart="Add To Cart";c.RemoveFromCart="Remove From Cart";c.ReplaceCart="Replace Cart"})(Vb||(Vb={}));var Wb;
(function(c){c.Purchase="Purchase";c.Preorder="Preorder";c.Cancel="Cancel";c.Ship="Ship";c.Deliver="Deliver";c.Return="Return";c.Exchange="Exchange"})(Wb||(Wb={}));var ua;(ua||(ua={})).MetadataUpdate="MetadataUpdate";var dd;(dd||(dd={})).Tracking="Tracking";(function(c){c.OptIn="Opt In";c.OptOut="Opt Out"})(m.ConsentStatus||(m.ConsentStatus={}));var w=function(c,a,b){u.onFireException.emit(c,a);r.warn("sendException",{event,errorSection:a})},P=[],ed=function(){return P},fd=function(c){return P.find(function(a){return c.purpose==
a.consent.purpose})},Xb=function(c){gd(c,!0)},gd=function(c,a){Array.isArray(c)?c.forEach(function(b){hd(b,a)}):hd(c,a);Zc(P)},hd=function(c,a){if(c&&"object"==J(c)&&c.purpose&&c.provider&&c.status)var b=!0;else w(Error("Invalid consent, check that consent is a valid object and all fields are defined: ".concat(JSON.stringify(c))),"Salesforce Web SDK"),b=!1;if(b)if(b=fd(c)){var e=b.consent.status;if(b.consent.status!=c.status||b.consent.provider!=c.provider)b.consent=c,b.lastUpdateTime=(new Date).toISOString();
a&&e==m.ConsentStatus.OptIn&&c.status==m.ConsentStatus.OptOut&&id(b)}else c={consent:c,lastUpdateTime:(new Date).toISOString()},P.push(c),a&&c.consent.status==m.ConsentStatus.OptOut&&id(c)},id=function(c){document.dispatchEvent(new CustomEvent(v.OnConsentRevoke,{detail:{revokedConsent:c}}))},Ye=function(c){var a=(new Date).toISOString();c.forEach(function(b){fd(b).lastSentTime=a});Zc(P)},$e=function(c){Ze();Promise.resolve(c).then(function(a){a&&0<a.length&&Xb(a)})},Ze=function(){var c=ta.read();
c&&(P=c.consents||[])},af=function(c){return 0<=c.findIndex(function(a){return a.status==m.ConsentStatus.OptIn})},bf=function(){return af(P.map(function(c){return c.consent}))},jd=function(c){c.source=c.source||{};var a=c.source||{},b;(b=c.source.pageType)||(b=t.currentPage&&t.currentPage.source?t.currentPage.source.pageType:void 0);c.source=D({},a,{pageType:b,url:c.source.url||window.location.href,urlReferrer:c.source.urlReferrer||document.referrer,channel:c.source.channel||"Web"});c.user=D({},c.user||
{},{anonymousId:U});cf(c)},cf=function(c){c.consents&&gd(c.consents,!1);c.consents=P.filter(function(a){return!a.lastSentTime||new Date(a.lastUpdateTime)>=new Date(a.lastSentTime)}).map(function(a){return a.consent});Ye(c.consents)};document.addEventListener(v.OnConsentRevoke,function(c){c.detail&&c.detail.revokedConsent&&df({interaction:{name:ua.MetadataUpdate},consents:[c.detail.revokedConsent.consent]})});var ld=function(c){return kd(c,bf).catch(function(a){r.error(a.message);u.onFireException.emit(a,
"Site-wide JavaScript");return c})},df=function(c){kd(c,function(){return!0}).then(function(){return r.debug("Consent revoked")},function(a){return u.onFireException.emit(a,"Site-wide JavaScript")})},kd=function(c,a){a:{var b=c,e=t.matchedConfig;try{b=e&&e.onActionEvent?e.onActionEvent(b):b;if("object"===J(b)){c=b;break a}u.onFireException.emit(Error("onActionEvent failed for the ".concat(t.matchedConfig.name," page config. Must return an object or null.")),"Site-wide Javascript")}catch(f){u.onFireException.emit(Error("onActionEvent failed for the ".concat(t.matchedConfig.name,
" page config. ").concat(f.message,".")),"Site-wide Javascript")}c=void 0}a:{b=c;try{b=N.global&&N.global.onActionEvent?N.global.onActionEvent(b):b;if("object"===J(b)){c=b;break a}u.onFireException.emit(Error("onActionEvent failed for the global page config. Must return an object or null."),"Site-wide Javascript")}catch(f){u.onFireException.emit(Error("onActionEvent failed for the global page config. ".concat(f.message,".")),"Site-wide Javascript")}c=void 0}jd(c);a&&!a()&&r.debug("No opt-in consents provided. Event will still be dispatched.");
r.debug("Sent event: ",c);u.onEventSend.emit(c);return Promise.resolve(c)},ef=function(c){return new Promise(function(a,b){u.onInitSitemap.once(function(){return b("sitemap_reinit")});var e={name:null},f=[];Object.keys(c.interaction).forEach(function(a){var b=md(c.interaction[a],a).then(function(b){e[a]=b});f.push(b)});Promise.all(f).then(function(){a(e)}).catch(function(a){u.onFireException.emit(Error("Catalog object interaction config was rejected"),"Site-wide Javascript")})})},md=function(c,a){try{return E=
a,"object"===J(c)&&!Array.isArray(c)&&0<Object.keys(c).length?ff(c):Promise.resolve(c).then(function(a){return"function"===typeof a?a():a})}catch(b){u.onFireException.emit(Error("getValue for ".concat(a," failed on ").concat(t.matchedConfig.name," while evaluating custom function. ").concat(b.message,".")),"Site-wide Javascript")}},ff=function(c){var a={},b=Object.keys(c),e={};b.forEach(function(b){var e=md(c[b],b);a[b]=e});return Promise.all(Object.values(a)).then(function(a){a.forEach(function(a,
c){e[b[c]]=a});return e})},ab,gf=function(){Yb();nd()&&(ab=setInterval(function(){var c=!1,a=(new Date).getTime(),b=t.matchedConfig.listeners.map(function(a){if(a.selectorFound)return a;a=bb(a);c=a.selectorFound||c;return a});c&&Object.assign(t.matchedConfig,D({},t.matchedConfig,{listeners:b}));(50<(new Date).getTime()-a||!nd())&&Yb()},1E3))},nd=function(){if(t.matchedConfig){var c=t.matchedConfig.listeners;return c?c.filter(function(a){return!a.selectorFound}).length:!1}return!1},Yb=function(){"number"===
typeof ab&&clearInterval(ab);ab=null},bb=function(c){var a=q(c.selector),b=D({},c,{selectorFound:0<a.length});a.on(b.bind,function(a){try{b.callback(a)}catch(f){u.onFireException.emit(Error("Listener callback on ".concat(b.bind," bound to ").concat(b.selector," failed for the ").concat(t.matchedConfig.name," page config. ").concat(f.message,".")),"Site-wide Javascript")}});return b},hf=function(){t&&t.matchedConfig&&t.matchedConfig.listeners&&t.matchedConfig.listeners.forEach(function(c){q(c.selector).off(c.bind)})},
od=function(c){c.global=c.global||{};"object"!=J(c.global)&&u.onFireException.emit(Error("The global config has a type of ".concat(J(c.global),", but it must be an object")),"Sitewide Javascript");Object.assign(N,D({},c));u.onInitSitemap.emit(N)},pd=function(c){jf(c);return!0},qd=function(c){t.matchedConfig=D({},c,{listeners:kf(c)});t.currentPage=D({},t.currentPage||{},{source:{pageType:c.name,locale:lf(c)},user:{anonymousId:null},interaction:null,pageView:!0});return c.interaction?ef(c).then(function(a){t.currentPage.interaction=
a}):Promise.resolve()},kf=function(c){return(c.listeners||[]).map(function(a){return bb(a)})},lf=function(c){return"function"===typeof c.locale?c.locale():c.locale},mf=function a(){for(var b=arguments.length,e=Array(b),f=0;f<b;f++)e[f]=arguments[f];return e.reduce(function(b,e){Object.keys(e).forEach(function(f){var h=b[f],g=e[f];Array.isArray(h)&&Array.isArray(g)?Object.assign(b,Ta({},f,h.concat.apply(h,Gc(g)))):h&&"object"===J(h)&&g&&"object"===J(g)?Object.assign(b,Ta({},f,a(h,g))):Object.assign(b,
Ta({},f,g))});return b},{})},rd=function(a){var b=N.global||{},e=b.onActionEvent;delete b.onActionEvent;a=mf(b,a);b.onActionEvent=e;return a},nf=function(a){a.forEach(function(a){if(!a.name||!a.isMatch)throw Error("All page configs must have a name and isMatch attribute defined");})},of=function(){var a=t;ld(t.currentPage);t=a},jf=function(a){od(a);hf();cd();Yb();t.currentPage=null;try{nf(a.pageTypes);var b=!0}catch(e){u.onFireException.emit(Error(e),"Sitemap"),b=!1}b&&$a(a.pageTypes).then(rd).then(qd).then(of).then(gf).catch(function(a){"sitemap_reinit"!==
a&&u.onFireException.emit(Error("Unhandled exception: ".concat(a)),"Site-wide Javascript")})},H=function(a,b){if(a)try{return a(b)}catch(e){return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name," inside of the custom transform function. ").concat(e)),"Site-wide Javascript"),null}return b},Zb=function(a,b){b=b||window;a=a.split(".");var e=!0,f=!1,g=void 0;try{for(var h=a[Symbol.iterator](),n;!(e=(n=h.next()).done);e=!0){var k=n.value;var l=/(\w+)\[([0-9]+)\]/.exec(k);
if(b[k])b=b[k];else if(l){if(b[l[1]]&&(b=b[l[1]][parseInt(l[2],10)],!b))return null}else return null}}catch(T){f=!0,g=T}finally{try{e||null==h.return||h.return()}finally{if(f)throw g;}}return b},sd={fromSelector:function(a,b){return function(){if("string"!=typeof a)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;var e=q(a).first().text();return e=H(b,e)}},fromSelectorAttribute:function(a,
b,e){return function(){if("string"!=typeof a)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=typeof b)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Attribute must be a string.")),"Site-wide Javascript"),null;var f=q(a).first().attr(b);return f=H(e,f)}},fromSelectorMultiple:function(a,b){return function(){if("string"!=
typeof a)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;var e=q(a).get().map(function(a){return q(a).text()});return e=H(b,e)}},fromSelectorAttributeMultiple:function(a,b,e){return function(){if("string"!=typeof a)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=
typeof b)return u.onFireException.emit(Error("getValue for ".concat(E," failed on ").concat(t.matchedConfig.name,". Attribute must be a string.")),"Site-wide Javascript"),null;var f=q(a).get().map(function(a){return q(a).attr(b)});return f=H(e,f)}},fromItemProp:function(a,b){return function(){var e=q("[itemprop='"+a+"']").first().attr("content");return e=H(b,e)}},fromMeta:function(a,b){return function(){var e=q("meta[name='"+a+"']").first().attr("content")||q("meta[property='"+a+"']").first().attr("content");
return e=H(b,e)}},fromWindow:function(a,b){return function(){var e=Zb(a);return e=H(b,e)}},fromJsonLd:function(a,b){return function(){var e=q("script[type='application/ld+json']").first().text();try{var f=JSON.parse(e);if(a){var g=Zb(a,f);return H(b,g)}return H(b,f)}catch(h){u.onFireException.emit(Error("Parsing JSON-LD for ".concat(E," failed on ").concat(t.matchedConfig.name,". ").concat(h)),"Site-wide Javascript")}}},fromCanonical:function(a){return function(){var b=q("link[rel=canonical]").attr("href");
return b=H(a,b)}},fromHref:function(a){return function(){var b=window.location.href;return b=H(a,b)}},buildCategoryId:function(a,b,e,f){return function(){var g=Array.from(q(a));b&&(g=g.slice(b));e&&(g=g.slice(0,-1));var h=[];g.forEach(function(a){(a=q(a).text().trim())?h.push(a):u.onFireException.emit(Error("buildCategoryId for ".concat(E," failed on ").concat(t.matchedConfig.name,". A category part is null.")),"Site-wide Javascript")});g=h.join("|");return g=H(f,g)}},buildCategoryIdAttribute:function(a,
b,e,f,g){return function(){var h=Array.from(q(a));e&&(h=h.slice(e));f&&(h=h.slice(0,-1));var n=[];h.forEach(function(a){(a=q(a).attr(b).trim())?n.push(a):u.onFireException.emit(Error("buildCategoryId for ".concat(E," failed on ").concat(t.matchedConfig.name,". A category part is null.")),"Site-wide Javascript")});h=n.join("|");return h=H(g,h)}}},A=q,fa={},Ga=function(a){if(!a||"string"!==typeof a||"function"!==typeof fa[a])return null;fa[a]();delete fa[a]},td={resolveWhenTrue:{bind:function(a){var b=
1<arguments.length&&void 0!==arguments[1]?arguments[1]:Math.random().toString(36).slice(2),e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2E3,f=3<arguments.length&&void 0!==arguments[3]?arguments[3]:100;if("function"===typeof a)return new Promise(function(g,h){var n=0,k=setInterval(function(){try{n+=f;var k=a();k?(Ga(b),g(k)):n>=e&&(Ga(b),g(!1))}catch(T){Ga(b),h(T)}},f);fa[b]=function(){clearInterval(k)}})},unbind:Ga,getBindings:function(){return fa},clearBindings:function(){for(var a in fa)fa.hasOwnProperty(a)&&
"function"===typeof fa[a]&&Ga(a)}}};var Fb="shutDown";var cb={cookieDomain:null,consents:null},ud=function(){function a(a,b,f){if(f)for(a=Math.random().toString(36).slice(2);e[a];)a=Math.random().toString(36).slice(2);else a=a||b;return a}function b(b,f){return{pageElementLoaded:function(h,n){if("string"!==typeof n||""===n)n=0<A("body").length?"body":"html";if("string"!==typeof h||""===h)throw Error("[pageElementLoaded] Invalid arguments");return new Promise(function(k){var l=A(h);if(0<l.length)k(l[0]);
else{l=A(n)[0];if(!l)throw Error("pageElementLoaded cannot be bound. observerSelector ".concat(n," is not on the page"));var m=new MutationObserver(function(a,e){var f=!0,n=!1,l=void 0;try{for(var m=a[Symbol.iterator](),q;!(f=(q=m.next()).done);f=!0){var p=q.value;if(p.addedNodes&&0<p.addedNodes.length){a=!0;var ca=!1,r=void 0;try{for(var T=p.addedNodes[Symbol.iterator](),t;!(a=(t=T.next()).done);a=!0){var u=t.value,v=A(u).is(h)?u:A(u).find(h).get(0);if(v){b?g.unbind(b):e.disconnect();k(v);return}}}catch($b){ca=
!0,r=$b}finally{try{a||null==T.return||T.return()}finally{if(ca)throw r;}}}}}catch($b){n=!0,l=$b}finally{try{f||null==m.return||m.return()}finally{if(n)throw l;}}});m.observe(l,{childList:!0,subtree:!0})}b=a(b,"<pageElementLoaded>"+h,f);e[b]=function(){m&&m.disconnect()}})},pageElementVisible:function(h,n){var k=n||0;if("string"!==typeof h||""===h||"number"!==typeof k||0>k||1<k)throw Error("[pageElementVisible] Invalid arguments");return new Promise(function(n){var l=A(h),m=new IntersectionObserver(function(a,
e){for(var f=0;f<a.length;f++)if(a[f].isIntersecting){b?g.unbind(b):e.disconnect();n(a[f]);break}},{threshold:k});m.observe(l[0]);b=a(b,"<pageElementVisible>"+h,f);e[b]=function(){m.disconnect()}})},pageExit:function(h){h=h||0;if("number"!==typeof h||0>h)throw Error("[pageExit] Invalid arguments");return new Promise(function(n){function k(a){clearTimeout(p);10>=a.pageY-window.pageYOffset&&(p=0<h?setTimeout(l.bind(this,a),h):l.call(this,a))}function l(a){b?g.unbind(b):m.off("mousemove",k);clearTimeout(p);
n(a)}var m=A(document),p;m.on("mousemove",k);b=a(b,"<pageExit>",f);e[b]=function(){m.off("mousemove",k)}})},pageInactive:function(h){function n(a,e){var f=new Promise(function(f){function h(a){a=a||new Event("pageInactive");b&&!e.isSubscribe?g.unbind(b):k.off("mousemove click scroll keyup keydown",n);f(a)}function n(b){clearTimeout(l);l=setTimeout(h.bind(this,b),a)}var k=A(document),l;n();k.on("mousemove click scroll keyup keydown",n)});f.subscribe=function(h){delete f.subscribe;e.isSubscribe=!0;
f.then(function(f){f.disconnect=function(){b?g.unbind(b):e.isDisconnected=!0};h(f);!e.isDisconnected&&n(a,e).subscribe(h)});return f};return f}if("number"!==typeof h||0>=h)throw Error("[pageInactive] Invalid arguments");var k={isDisconnected:!1,isSubscribe:!1};b=a(b,"<pageInactive>",f);e[b]=function(){k.isDisconnected=!0};return n(h,k)},pageScroll:function(h){if("number"!==typeof h||0>h||1<h)throw Error("[pageScroll] Invalid arguments");return new Promise(function(n){function k(a){window.scrollY/
(document.documentElement.scrollHeight-window.innerHeight)>=h&&(n(a),b?g.unbind(b):l.off("scroll",k))}var l=A(document);l.on("scroll",k);b=a(b,"<pageScroll>",f);e[b]=function(){l.off("scroll",k)}})}}}var e={},f=b(null,!0),g=function(){return{bind:function(a){a&&e[a]&&(e[a](),delete e[a]);return b(a)},unbind:function(a){if(!a||"string"!==typeof a||"function"!==typeof e[a])return null;e[a]();delete e[a]},getBindings:function(){return e},clearBindings:function(){for(var a in e)e.hasOwnProperty(a)&&(e[a](),
delete e[a])}}}();return Object.assign(f,g)}(),db=function(){function a(b){var e=this;Aa(this,a);this.clearRateLimiter=function(){e.sentEvents=[]};this.eventWithinLimitTimeRange=function(a,b,e){return e-b.time<a};this.getTimeRangeMax=function(){return e.eventRateLimiterConfig.globalTimeRange};this.removeOldEvents=function(a){for(var b=e.getTimeRangeMax(),f=e.sentEvents.length-1;0<=f;f--)if(!e.eventWithinLimitTimeRange(b,e.sentEvents[f],a)){e.sentEvents.splice(0,f+1);break}};this.checkGlobalLimits=
function(a,b){var f=D({},e.eventRateLimiterConfig),g=f.globalLimit;f=f.globalTimeRange;return e.eventWithinLimitTimeRange(f,e.sentEvents[a],b)&&(e.globalCounter++,e.globalCounter>g)?(r.info("Event rate limit exceeded. More than ".concat(g," events ")+"sent in ".concat(f,"ms.")),!0):!1};this.checkLimits=function(a,b){return e.checkGlobalLimits(a,b.time)};this.sentEvents=[];this.eventRateLimiterConfig=b}Sa(a,[{key:"resetCounters",value:function(){this.globalCounter=0}},{key:"isTriggerLimitExceeded",
value:function(a){var b=Date.now();a=D({},a,{time:b});this.sentEvents.push(a);this.removeOldEvents(b);this.resetCounters();for(b=this.sentEvents.length-1;0<=b;b--)if(this.checkLimits(b,a))return!0;return!1}}]);return a}(),pf=function(a){function b(a){Aa(this,b);var e=De(this,sa(b).call(this,a));e.getTimeRangeMax=function(){return e.eventRateLimiterConfig.perInteractionTimeRange?Math.max(e.eventRateLimiterConfig.globalTimeRange,e.eventRateLimiterConfig.perInteractionTimeRange):e.eventRateLimiterConfig.globalTimeRange};
e.checkInteractionLimits=function(a,b,f){return e.eventRateLimiterConfig.perInteractionLimit&&e.eventRateLimiterConfig.perInteractionTimeRange&&e.eventWithinLimitTimeRange(e.eventRateLimiterConfig.perInteractionTimeRange,e.sentEvents[a],b)&&e.sentEvents[a].name===f&&(e.perEventCounter++,e.perEventCounter>e.eventRateLimiterConfig.perInteractionLimit)?(r.info("Event rate limit exceeded. More than ".concat(e.eventRateLimiterConfig.perInteractionLimit," events ")+"with interaction name of ".concat(f,
" sent in ").concat(e.eventRateLimiterConfig.perInteractionTimeRange,"ms.")),!0):!1};e.checkLimits=function(a,b){return e.checkGlobalLimits(a,b.time)||e.checkInteractionLimits(a,b.time,b.name)};return e}Ce(b,a);Sa(b,[{key:"resetCounters",value:function(){Ua(sa(b.prototype),"resetCounters",this).call(this);this.perEventCounter=0}},{key:"isTriggerLimitExceeded",value:function(a){return Ua(sa(b.prototype),"isTriggerLimitExceeded",this).call(this,a)}}]);return b}(db),Bb,Cb,Db,Eb,ac=function(){var a=0<
arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!(Se(window.navigator.userAgent||"")?W("You are a robot."):"prerender"===document.visibilityState&&Te?W("Page is pre-rendered and loaded in Safari."):1))return Promise.reject();"initialized"==Fb&&W("reinitializing Web SDK");a.cookieDomain&&Sb(a.cookieDomain);Wc();cb=D({},cb,{},a);document.dispatchEvent(new CustomEvent(v.OnBeforeInit));Ee();$c();Fb="initialized";document.dispatchEvent(new CustomEvent(v.OnInit,{detail:{sdkConfig:cb}}));$e(a.consents);
return Promise.resolve()};window.SalesforceInteractions={init:ac,reinit:function(){var a=P.map(function(a){return a.consent});ac(D({},cb,{consents:a})).then(function(){pd(N)})},sendEvent:ld,sendException:w,getAnonymousId:function(){return U},setAnonymousId:Ya,getCookieDomain:function(){return oa},setCookieDomain:Sb,updateConsents:Xb,getConsents:ed,ConsentStatus:m.ConsentStatus,log:r,getLoggingLevel:Ic,setLoggingLevel:Hc,initSitemap:pd,getSitemapConfig:function(){return N},getSitemapResult:function(){return t},
CatalogObjectInteractionName:na,CartInteractionName:Vb,OrderInteractionName:Wb,listener:Kc,build:function(a){$a(a.pageTypes).then(rd).then(qd).catch(function(a){"sitemap_reinit"!==a&&u.onFireException.emit(Error("Unhandled exception: ".concat(a)),"Site-wide Javascript")})},cashDom:A,resolvers:sd,util:td,DisplayUtils:ud,CustomEvents:v};var qf="cdn.".concat("evergage.com"),bc;(function(a){a.Impression="i";a.Clickthrough="c";a.Dismissal="d";a.Unsubscribe="u";a.Send="s"})(bc||(bc={}));(function(a){a.Product=
"Product";a.Category="Category"})(m.ItemType||(m.ItemType={}));var Ca;(Ca||(Ca={})).StopQuickViewCatalogObject="Stop Quick View Catalog Object";var cc={Personalization:"Personalization"},dc;(function(a){a._id="_id";a.categories="categories";a.dimensions="dimensions";a.relatedCatalogObjects="relatedCatalogObjects"})(dc||(dc={}));(function(a){a.OnEventResponse="evergage:onEventResponse";a.OnEventSend="evergage:onEventSend";a.OnStatSend="evergage:onStatSend";a.OnException="evergage:onException";a.OnTemplateDisplayEnd=
"evergage:onTemplateDisplayEnd";a.OnPageMatchStatusUpdated="evergage:onPageMatchStatusUpdated";a.OnInit="evergage:onInit";a.OnInitSitemap="evergage:onInitSitemap";a.OnShutDown="evergage:onShutDown";a.OnConsentRevoke="evergage:onConsentRevoke"})(m.CustomEvents||(m.CustomEvents={}));var pa;(function(a){a.OnEventResponse="mcis:onEventResponse";a.OnStatSend="mcis:onStatSend";a.OnTemplateDisplayEnd="mcis:onTemplateDisplayEnd";a.OnBeforeEventSend="mcis:onBeforeEventSend";a.OnInit="mcis:onInit"})(pa||(pa=
{}));var p={endpointConfig:{},beaconConfig:{sendEvents:!0,minimumActivityTimeToRegister:300,timeOnPageTimerLengthMillis:6E4,trackAnonymousVisitors:!0,corsAllowedOrigins:["*"],identityAttributes:[],rememberMeUserIdsMillis:63072E6,actionRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perActionLimit:5,perActionTimeRange:2E3},pingRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3},campaignStatRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perExperienceLimit:5,perExperienceTimeRange:2E3},
errorRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3}},beaconState:null},ec=function(){return y({},p.endpointConfig,{},p.beaconConfig)},vd=function(){var a=ec();return"account dataset cookieDomain consents cdnUrl trackerUrl siteConfigVersion minimumActivityTimeToRegister timeOnPageTimerLengthMillis sendEvents trackAnonymousVisitors doNotTrackPingRequestsForActions trackContextualRelatedItems identityAttributes actionRateLimiterConfig pingRateLimiterConfig campaignStatRateLimiterConfig errorRateLimiterConfig".split(" ").reduce(function(b,
e){return b[e]=a[e],b},{})},wd;document.addEventListener(v.OnClearCookie,function(a){a=a.detail&&a.detail.options||{};fc("a",y({domain:p.beaconConfig.cookieDomain},a));fc("n",y({domain:p.beaconConfig.cookieDomain},a))});var Ha=function(a){return"".concat("_evg").concat(a,"_").concat(wd)},fc=function(a,b){M.remove(Ha(a),b)},Q={setCookieHash:function(a,b,e){wd=Ba("".concat(a,".").concat(b,".").concat(Ba(e+"/").slice(0,4))).slice(0,4)},read:function(a){return M.getJSON(Ha(a))},write:function(a,b,e,f){p.beaconConfig.secureCookie?
M.set(Ha(a),b,{expires:e,domain:f,secure:!0}):M.set(Ha(a),b,{expires:e,domain:f});M.get(Ha(a))||r.warn("Web SDK cookie (_evga) for the Interaction Studio module could not be set. This is possibly due to a restricted top level domain. See https://publicsuffix.org/learn/ for more information.")},remove:fc},xd=function(a){return{uuid:a.uuid,affinityId:a.affinityId,persistedUserId:a.puid,persistedAccountId:a.paid}},Z=function(a){a=y({},K(),{},a);Q.write("a",{uuid:a.uuid,puid:a.persistedUserId,paid:a.persistedAccountId,
affinityId:a.affinityId},730,p.beaconConfig.cookieDomain);var b=Q.read("a");b&&r.debug("Stored visitor cookie. ".concat(JSON.stringify(b)));return a},gc=function(a){return 0===a.indexOf("www")?a.substring(4,a.length):a},yd=function(a){return!!(a&&"object"===z(a)&&0<Object.keys(a).length)},hc=function(){var a=K().uuid;Ya(a)},K=function(){var a=Q.read("a");return yd(a)?xd(a):{}},rf=function(a){if(!a)return!1;a=(a||{}).user;a=void 0===a?{}:a;var b=y({},a.attributes,{},a.identities);return Object.keys(b).some(function(a){return p.beaconConfig.identityAttributes.includes(a)})||
!!a.id||!!K().persistedUserId},k={result:y({},t,{backgroundPage:null}),config:y({},N,{settings:{canonicalizeIds:!1,runOnTranslatedPage:!1,setDefaultListPrice:!1,truncateTranslated:!0},currentKey:null}),campaignResponses:[]},Oc=function(){return k.result.currentPage||{}},eb=function(){k.config.currentKey=E;return k},zd=function(){return eb().result||null},Ad=function(){return eb().config||null},Bd=function(){return eb().campaignResponses||[]},Ia,Ja,ic=function(a){a[".bv"]=16;a._ak=p.endpointConfig.account;
a._ds=p.endpointConfig.dataset;a[".scv"]=p.endpointConfig.siteConfigVersion;a.channel="Web";a._r=String(Math.random()).slice(2,8)},jc=function(a){var b=K();a.userId?a._reqPersistedEntityIds="":b.persistedUserId&&(a._persistedUserId=b.persistedUserId);k&&k.result&&k.result.currentPage&&k.result.currentPage.user&&k.result.currentPage.user.attributes&&k.result.currentPage.user.attributes.customer_non_consent&&(a.customer_non_consent=k.result.currentPage.user.attributes.customer_non_consent);p.beaconConfig.trackAnonymousVisitors&&
(a[".anonId"]=b.uuid,null!=b.affinityId&&(a[".aaId"]=b.affinityId),a.userId||a._persistedUserId||a._persistedAccountId||(a._anon="true"));return a},Ka=function(a){a="".concat(a);if(null==a||974>=a.length)return a;var b=731,e=244;974!=b+e&&(b+=974-(b+e));10<e?e-=5:10<b&&(b-=5);return a.substring(0,b)+" ... "+a.substring(a.length-e)},Cd=function(a,b){var e=b.header,f=b.fileName,g=b.line;b=b.column;e&&(a[".ef"]=Ka(e));a[".eu"]=Ka(f);a[".el"]=Ka(g);a[".ec"]=Ka(b);return a},sf=(Ia={},L(Ia,".eu","sourceURL"),
L(Ia,".el","line"),L(Ia,".ec","column"),Ia),tf=(Ja={},L(Ja,".eu","fileName"),L(Ja,".el","lineNumber"),L(Ja,".ec","columnNumber"),Ja),Dd=function(a,b,e){return b?Cd(a,{header:!!b.stack&&"string"===typeof b.stack&&b.stack.substring(0,b.stack.indexOf("@")),fileName:b[e[".eu"]],line:b[e[".el"]],column:b[e[".ec"]]}):a},uf=function(a){var b=Object.keys(a)[0];if(!b)return{};a=a[b];b={type:b,_id:a._id};Array.isArray(a.categories)&&(b.categories=a.categories.map(function(a){return"string"===typeof a?{_id:a,
type:m.ItemType.Category}:a}));if("object"===z(a.dimensions)||"object"===z(a.relatedCatalogObjects)){b.dimensions={};a=a.relatedCatalogObjects||a.dimensions;for(var e in a)if(a.hasOwnProperty(e)){var f=a[e];Array.isArray(f)?b.dimensions[e]=f:b.dimensions[e]=[f]}}return b},wf=function(a){var b=[];Object.keys(a).forEach(function(e){b=b.concat(vf(e,a[e]))});return b},vf=function(a,b){return b.map(function(b){var e=xf(a);return{_id:b,type:e,tagType:"t"===e?a:void 0}})},xf=function(a){switch(a){case "Product":return"p";
case "Article":return"a";case "Blog":return"b";case "Category":return"c";case "Promotion":return"P";default:return"t"}},yf=function(a){var b={type:"e",id:a.experienceId,stat:bc[a.stat],ug:a.control?"Control":void 0};a.catalog&&(b.piks=wf(a.catalog));return b},zf=function(a){var b={};b[".cStat"]=JSON.stringify(a.campaignStats.map(yf));ic(b);jc(b);return b},Af=function(a){var b={};b[".top"]=""+a.timeOnPageMillis;a.catalog&&0<Object.keys(a.catalog).length&&(b.item=JSON.stringify(uf(a.catalog)));a.action&&
(b.action=a.action);if(a.performance){var e=a.performance.networkTime;e&&(b[".tt"]=e);(e=a.performance.eventDnsTime)&&(b[".ttdns"]=e);(e=a.performance.domLoadTime)&&(b[".dt"]=e);(e=a.performance.pageLoadTime)&&(b[".lt"]=e);(e=a.performance.sdkLoadTime)&&(b[".bt"]=e);(e=a.performance.sdkParseTime)&&(b[".pt"]=e);(a=a.performance.sdkDnsTime)&&(b[".btdns"]=a)}ic(b);jc(b);return b},Bf=Object.prototype.hasOwnProperty,Cf=function(a){function b(a){ha(this,b);var e=Oa(this,I(b).call(this,a));e.getTimeRangeMax=
function(){return e.eventRateLimiterConfig.perExperienceTimeRange?Math.max(e.eventRateLimiterConfig.globalTimeRange,e.eventRateLimiterConfig.perExperienceTimeRange):e.eventRateLimiterConfig.globalTimeRange};e.checkExperienceLimits=function(a,b){if(e.eventRateLimiterConfig.perExperienceLimit&&e.eventRateLimiterConfig.perExperienceTimeRange&&e.eventWithinLimitTimeRange(e.eventRateLimiterConfig.perExperienceTimeRange,e.sentEvents[a],b)&&e.sentEvents[a].experienceIds)for(a=e.sentEvents[a].experienceIds,
b=0;b<a.length;b++){var f=a[b];e.experienceRates.has(f)||e.experienceRates.set(f,0);e.experienceRates.set(f,e.experienceRates.get(f)+1);if(e.experienceRates.get(f)>e.eventRateLimiterConfig.perExperienceLimit)return r.info("Event rate limit exceeded. More than ".concat(e.eventRateLimiterConfig.perExperienceLimit," events ")+"with experience id of ".concat(f," sent in ").concat(e.eventRateLimiterConfig.perExperienceTimeRange,"ms.")),!0}};e.checkLimits=function(a,b){return e.checkGlobalLimits(a,b.time)||
e.checkExperienceLimits(a,b.time)};return e}Na(b,a);ia(b,[{key:"resetCounters",value:function(){ja(I(b.prototype),"resetCounters",this).call(this);this.experienceRates=new Map}},{key:"isTriggerLimitExceeded",value:function(a){return ja(I(b.prototype),"isTriggerLimitExceeded",this).call(this,a)}}]);return b}(db),kc=function(){function a(b){ha(this,a);this.baseURL=b}ia(a,[{key:"send",value:function(a){Df(a);var b=this.baseURL+"?";var f="";var g=[],h;"string"!==typeof f&&(f="?");for(n in a)if(Bf.call(a,
n)){(h=a[n])||null!==h&&void 0!==h&&!isNaN(h)||(h="");var n=encodeURIComponent(n);h=encodeURIComponent(h);null!==n&&null!==h&&g.push(n+"="+h)}a=g.length?f+g.join("&"):"";b+=a;if(navigator&&navigator.sendBeacon)return a=new Blob([],{type:"application/x-www-form-urlencoded"}),navigator.sendBeacon(b,a);a=new XMLHttpRequest;a.open("GET",b,!0);a.send()}}]);return a}(),Ef=function(a){function b(a,f){ha(this,b);a=Oa(this,I(b).call(this,a));a.eventRateLimiter=f||new db({globalLimit:p.beaconConfig.errorRateLimiterConfig.globalLimit,
globalTimeRange:p.beaconConfig.errorRateLimiterConfig.globalTimeRange});return a}Na(b,a);ia(b,[{key:"send",value:function(a){if(this.eventRateLimiter.isTriggerLimitExceeded())r.warn("Error event rate limiter triggered.");else return ja(I(b.prototype),"send",this).call(this,a)}}]);return b}(kc),Ff=function(a){function b(a,f){ha(this,b);a=Oa(this,I(b).call(this,a));a.eventRateLimiter=f||new db({globalLimit:p.beaconConfig.pingRateLimiterConfig.globalLimit,globalTimeRange:p.beaconConfig.pingRateLimiterConfig.globalTimeRange});
return a}Na(b,a);ia(b,[{key:"send",value:function(a){if(this.eventRateLimiter.isTriggerLimitExceeded())r.warn("Ping event rate limiter triggered.");else return ja(I(b.prototype),"send",this).call(this,a)}}]);return b}(kc),Gf=function(a){function b(a,f){ha(this,b);a=Oa(this,I(b).call(this,a));a.eventRateLimiter=f||new Cf({globalLimit:p.beaconConfig.campaignStatRateLimiterConfig.globalLimit,globalTimeRange:p.beaconConfig.campaignStatRateLimiterConfig.globalTimeRange,perExperienceLimit:p.beaconConfig.campaignStatRateLimiterConfig.perExperienceLimit,
perExperienceTimeRange:p.beaconConfig.campaignStatRateLimiterConfig.perExperienceTimeRange});return a}Na(b,a);ia(b,[{key:"send",value:function(a,f){f=f?f:[];if(this.eventRateLimiter.isTriggerLimitExceeded({experienceIds:f}))r.warn("Campaign Stat event rate limiter triggered.");else return ja(I(b.prototype),"send",this).call(this,a)}}]);return b}(kc),Df=function(a){Object.keys(a).forEach(function(b){var e=a[b];if("number"!=typeof e&&"boolean"!==typeof e&&null!=e)if("string"==typeof e){a:switch(b){case "url":case "urlref":e=
e.substring(0,3072);break a;case "title":e=e.substring(0,1024);break a;default:e=e.substring(0,1024)}a[b]=e}else"function"==typeof e?delete a[b]:a[b]=JSON.stringify(e)})},fb,gb,hb,Ed=!1,Fd=!1,Gd=!1,x={sdkLoadTime:null,sdkParseTime:null,sdkDnsTime:null,pageLoadTime:null,domLoadTime:null,networkTime:null,eventDnsTime:null},Hd=function(){return window.performance.getEntriesByType?window.performance.getEntriesByType("resource").reverse().find(function(a){return 0<=a.name.indexOf("/api2/event/")}):null},
Id=function(){return window.performance.getEntriesByType?window.performance.getEntriesByType("resource").find(function(a){return/\/evergage(Small)?(\.min)?\.js$/.test(a.name)}):null},Jd=function(){if(window.performance.getEntriesByType){var a=window.performance.getEntriesByType("navigation");if(a&&0<a.length)return a=a[0],a||(a=window.performance.timing),a}return null},Nc=function(a){for(var b in a.performance)x[b]=null},Qc=function(){if(!Fd){var a=Jd();a&&0<a.domContentLoadedEventEnd&&(void 0!=a.entryType?
x.domLoadTime=Math.round(a.domContentLoadedEventEnd)||null:x.domLoadTime=Math.round(a.domContentLoadedEventEnd-window.performance.timing.navigationStart)||null);x.domLoadTime&&(Fd=!0)}if(!Ed){if(a=Jd())void 0!=a.entryType?x.pageLoadTime=Math.round(a.loadEventEnd)||null:x.pageLoadTime=Math.round(a.loadEventEnd-window.performance.timing.navigationStart)||null;x.pageLoadTime&&(Ed=!0)}},Kd=function(a){a=a?(a=Gb(a))?a.pathname:"":"";return a},lc=function(a,b){b="undefined"===typeof b?location.search:b;
for(var e=/([^=?&]+)=?([^&]*)/g,f={},g;g=e.exec(b);){var h=Lc(g[1]);g=Lc(g[2]);null===h||null===g||h in f||(f[h]=g)}return f[a]||""},Ld=function(a,b){return(a=a.exec(b))&&2===a.length?a[1]:null},Md=function(a){return Ld(/[/]?([^/]*)[/]?$/,Kd(a))},mc=function(a){return"string"!==typeof a||""===a.trim()?null:Gb(a).href},ib=function(a){return a&&"string"===typeof a?(a=parseFloat(a.replace(/[^0-9.]+/g,"")),isNaN(a)?null:a):null},Nd=function(a){return a&&"string"===typeof a?(a=parseInt(a.trim().replace(/[^0-9.]+/g,
""),10),isNaN(a)?null:a):null},Hf=function(a){var b=t;if(b.currentPage&&b.currentPage.interaction&&b.currentPage.interaction.catalogObject)return(b=b.currentPage.interaction.catalogObject)?{catalogObjectType:b.type,catalogObjectId:b.id,price:b.attributes&&b.attributes.price?b.attributes.price:null,quantity:ib(q(a).val())}:null},va={extractFirstGroup:Ld,getLastPathComponent:Md,getLastPathComponentWithoutExtension:function(a){a=Md(mc(a));var b=a.lastIndexOf(".");return 0<=b?a.substring(0,b):a},getParameterByName:lc,
getPathname:Kd,qualifyUrl:mc,removeQueryString:function(a){if(!a)return"";a=Gb(a);return[a.protocol,"//","http:"===a.protocol&&"80"===a.port||"https:"===a.protocol&&"443"===a.port?a.hostname:a.host,a?a.pathname:""].join("")},getFloatValue:ib,getIntegerValue:Nd,getUtagFirstForField:function(a){var b=window.utag_data;if(b&&b[a]&&0<=b[a].length)return Array.isArray(b[a])?b[a][0]:b[a]},getValueFromNestedObject:Zb,buildLineItemFromPageState:function(a){if(k.result.currentPage&&k.result.currentPage.catalog){var b=
k.result.currentPage.catalog[m.ItemType.Product];return b?{_id:b._id,price:b.price,quantity:ib(q(a).val())}:null}},resolveWhenTrue:td.resolveWhenTrue,cookie:M},If=function(a){return new Promise(function(b,e){nc(e);aa(a,"lineItems",!1,!0).then(function(a){var e={complete:{Product:[]}};0===Object.keys(a).length&&b(e);a=aa(a,"lineItems",!0,!1);e.complete.Product=a;b(e)}).catch(function(){w(Error("Cart Config was rejected"),"Site-wide Javascript")})})},aa=function(a,b,e,f){try{E=b;if(a)if("dimensions"!==
b&&"relatedCatalogObjects"!==b&&"lineItems"!==b&&"attributes"!==b||!f){var g="function"===typeof a?a():a;"categories"===b&&Array.isArray(g)&&"object"!==z(g[0])&&"c"!==g[0].type&&"string"!==typeof g[0]._id?g=Pc(g):"lineItems"===b&&"object"===z(g)&&(g=Jf(g))}else g=Kf(a,b);return e?oc(b,g,k.config.settings.canonicalizeIds):g}catch(h){w(Error("getValue for ".concat(b," failed on ").concat(k.result.matchedConfig.name," while evaluating custom function. ").concat(h.message,".")),"Site-wide Javascript")}},
Od=function(a,b,e){if(a&&"object"===z(a)&&"function"===typeof a.then)w(Error("getValue for ".concat(b," failed on ").concat(k.result.matchedConfig.name," while evaluating custom function. ").concat(b," cannot be a Promise.")),"Site-wide Javascript");else if(a||"number"===typeof a||"boolean"===typeof a)e[b]=a},Lf=function(a,b){return new Promise(function(e,f){nc(f);var g=Object.keys(dc);f=[];for(var h=0;h<g.length;h++){var n=g[h];n=aa(a[n],n,!1,!0);f.push(n)}Promise.all(f).then(function(f){var h={_id:null};
f.forEach(function(a,b){b=g[b];a=aa(a,b,!0,!1);Od(a,b,h)});Object.keys(a).forEach(function(b){if(!g.includes(b)){var e=aa(a[b],b,!0,!0);Od(e,b,h)}});f=L({},b,h);e(f)}).catch(function(){w(Error("Catalog Config was rejected"),"Site-wide Javascript")})})},Mf=function(a){return new Promise(function(b,e){nc(e);var f=[],g=Object.keys(a);g.forEach(function(b){E=b;b=aa(a[b],b,!1,!0);f.push(b)});Promise.all(f).then(function(a){var e={},f={Product:{}};a.forEach(function(a,b){b=g[b];e[b]=aa(a,b,!0,!1)});f.Product=
e;b(f)}).catch(function(){w(Error("Order Config was rejected"),"Site-wide Javascript")})})},Jf=function(a){var b;a._id?b=a._id.length:a.sku?b=a.sku.length:w(Error("Either _id or sku must be defined for lineItems"),"Sitemap");for(var e=[],f=function(){var a=xa(h[g],2),f=a[0];a=a[1];a.length!=b?w(Error("Resolving multiple values for ".concat(f," failed on ").concat(k.result.matchedConfig.name,". ").concat(f," does not have the same number of values as _id")),"Site-wide Javascript"):a.forEach(function(a,
b){e[b]||(e[b]={_id:null,quantity:null});e[b][f]=a})},g=0,h=Object.entries(a);g<h.length;g++)f();return e},Pc=function(a){return a.map(function(a){return{type:"c",_id:a}})},Kf=function(a,b){var e={},f=Object.keys(a),g={};f.forEach(function(b){e[b]=aa(a[b],b,!1,!0)});return"lineItems"===b||"dimensions"===b||"relatedCatalogObjects"===b?Promise.all(Object.values(e)).then(function(a){a.forEach(function(a,b){b=f[b];(a=aa(a,b,!1,!1))&&(g[b]=a)});return g}):e},oc=function(a,b){var e=2<arguments.length&&
void 0!==arguments[2]?arguments[2]:!0;return b=Array.isArray(b)?"lineItems"===a?Nf(b,e):b.map(function(b){return Pd(a,b,e)}):Pd(a,b,e)},Nf=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0;return a.map(function(a){return Of(a,b)})},Of=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,e;for(e in a)if("item"===e)for(var f in a[e])a[e][f]=oc(f,a[e][f],b);else a[e]=oc(e,a[e],b);return a},Pd=function(a,b){var e=2<arguments.length&&void 0!==arguments[2]?
arguments[2]:!0,f=b;"price"!==a&&"listPrice"!==a&&"totalValue"!==a&&"rating"!==a||"string"!==typeof f||(f=ib(f));if("url"===a||"imageUrl"===a)f=mc(f);"_id"!==a&&"sku"!==a&&"orderId"!==a||"number"!==typeof f||(f=f.toString());!e||"string"!==typeof f||"_id"!==a&&"sku"!==a&&"orderId"!==a&&"alternateId"!==a&&"parentId"!==a||(f=f.toUpperCase());"string"===typeof f&&(0<=f.indexOf("&")&&(e=document.createElement("textarea"),Object.assign(e,{innerHTML:f}),f=e.value),f=f.trim());"description"===a&&"string"===
typeof f&&200<f.length&&(f=f.substr(0,197)+"...");"quantity"!==a&&"inventoryCount"!==a&&"numRatings"!==a||"string"!==typeof f||(f=Nd(f));return f},nc=function(a){document.addEventListener(m.CustomEvents.OnInitSitemap,function(){a("sitemap_reinit")},{once:!0})},Pf=function(a){return P.some(function(b){return b.consent.purpose===a.purpose&&b.consent.status===a.status})},La=function(a){return p.beaconConfig.trackAnonymousVisitors||rf(a)?!Pf({purpose:cc.Personalization,status:m.ConsentStatus.OptOut})&&
p.beaconConfig.sendEvents:(r.debug("An anonymous event has been blocked. trackAnonymous has been turned off and event has no named user."),!1)},C=0,G=-1,X,Y,Ge=function(a){return La(a)?gb.send(Af(a)):Promise.resolve(a)},Qf={setupActivityTimers:Wa,activityRegistered:Da,setUserInactive:Xa};(function(a){a.ViewItem="View Item";a.ViewItemOutOfStock="View Item Out Of Stock";a.ViewItemDetail="View Item Detail";a.QuickViewItem="Quick View Item";a.StopQuickViewItem="Stop Quick View Item";a.ViewCategory="View Category";
a.ViewTag="View Tag";a.AddToCart="Add To Cart";a.ViewCart="View Cart";a.Purchase="Purchase";a.Share="Share";a.Review="Review";a.Comment="Comment";a.Favorite="Favorite";a.Search="Search";a.SearchViewResults="Search View Results";a.SearchClick="Search Click";a.ClickThrough="Click Through";a.UpdateLineItem="Update Line Item";a.RemoveFromCart="Remove From Cart";a.ViewBanditItems="View Bandit Items"})(m.ItemAction||(m.ItemAction={}));var Rf=function(){function a(b,e){ha(this,a);this.baseURL=b;this.eventRateLimiter=
e||new pf({globalLimit:p.beaconConfig.actionRateLimiterConfig.globalLimit,globalTimeRange:p.beaconConfig.actionRateLimiterConfig.globalTimeRange,perInteractionLimit:p.beaconConfig.actionRateLimiterConfig.perActionLimit,perInteractionTimeRange:p.beaconConfig.actionRateLimiterConfig.perActionTimeRange})}ia(a,[{key:"handleSpecialEvent",value:function(a){var b=a.interaction&&a.interaction.name?a.interaction.name:a.itemAction;if(b===m.ItemAction.QuickViewItem||b===na.QuickViewCatalogObject)k.result=y({},
k.result,{backgroundPage:k.result.backgroundPage||k.result.currentPage,currentPage:y({},a)}),b===m.ItemAction.QuickViewItem&&(k.result.currentPage.action=a.action||m.ItemAction.QuickViewItem,k.result.currentPage.itemAction=m.ItemAction.QuickViewItem);else if(b===m.ItemAction.StopQuickViewItem||b===Ca.StopQuickViewCatalogObject)k.result=y({},k.result,{backgroundPage:null,currentPage:k.result.backgroundPage||k.result.currentPage})}},{key:"handlePersistedIdentityInResponse",value:function(a){var b={},
f=a.persistedUserId;a=a.anonAffinityId;if(f){var g=f.entityId;f=f.accountId;g&&(b.persistedUserId=g);f&&(b.persistedAccountId=f)}a&&a!==b.affinityId&&(b.affinityId=a);Z(b)}},{key:"handlePerformanceTimingBeforeEvent",value:function(){Qc();if(!Gd){x.sdkLoadTime=Math.round((Id()||{}).duration)||null;window.evergageBeaconParseTimeStart&&window.window.evergageBeaconParseTimeEnd&&(x.sdkParseTime=window.evergageBeaconParseTimeEnd-window.evergageBeaconParseTimeStart);var a=Id();a&&void 0!=a.domainLookupEnd&&
void 0!=a.domainLookupStart&&(x.sdkDnsTime=Math.round(a.domainLookupEnd-a.domainLookupStart));Gd=!0}}},{key:"handlePerformanceTimingInResponse",value:function(){x.networkTime=Math.round((Hd()||{}).duration)||null;var a=Hd();a&&(x.eventDnsTime=Math.round(a.domainLookupEnd-a.domainLookupStart)||null);Hb();Wa()}},{key:"handleDebug",value:function(a){a.interaction&&a.interaction.name&&a.debug&&a.debug.explanations&&(a.explain=a.debug.explanations,delete a.debug.explanations)}},{key:"onEventSend",value:function(a){var b=
this;this.handlePerformanceTimingBeforeEvent();document.dispatchEvent(new CustomEvent(m.CustomEvents.OnEventSend,{detail:{actionEvent:a},cancelable:!0}))&&document.dispatchEvent(new CustomEvent(pa.OnBeforeEventSend,{detail:{actionEvent:a},cancelable:!0}))?(this.handleDebug(a),this.handleSpecialEvent(a),r.debug("Sending event: ",a),this.send(a).then(function(e){Nc(a);(a.pageView||a.flags&&a.flags.pageView)&&b.handlePerformanceTimingInResponse();b.handlePersistedIdentityInResponse(e);r.debug("Received event response: ",
e);if(e.campaignResponses){var f=e.campaignResponses.map(function(a){return a.experienceId});k.campaignResponses=[].concat(ob(e.campaignResponses),ob(k.campaignResponses.filter(function(a){return!f.includes(a.experienceId)})))}document.dispatchEvent(new CustomEvent(m.CustomEvents.OnEventResponse,{detail:{response:e,actionEvent:a}}));document.dispatchEvent(new CustomEvent(pa.OnEventResponse,{detail:{response:e,actionEvent:a}}))}).catch(function(a){w(a,"Server Response")})):r.debug("MCIS Module onBeforeEventSend cancelled.")}},
{key:"send",value:function(a){var b=this;return new Promise(function(e,g){if(b.eventRateLimiter.isTriggerLimitExceeded({name:a.action||a.interaction&&a.interaction.name}))g(Error("Event Rate Limiter triggered"));else{try{var f=JSON.stringify(a)}catch(T){return g(T)}var k=new XMLHttpRequest;k.onload=function(){if(200<=this.status&&300>this.status)try{var a=JSON.parse(k.response);e(a)}catch(Ae){g(Mb(Ae,{status:this.status,statusText:k.statusText}))}else g(Mb("Response was not OK: ".concat(k.responseText),
{status:this.status,statusText:k.statusText}))};k.onerror=function(){if(""===k.responseType||"text"===k.responseType){var a=k.responseText||k.statusText;if(a){g(Mb("Response error: ".concat(a),{status:this.status,statusText:k.statusText}));return}}r.debug("An error was sent with no text.                                      This is un-actionable so it is being logged instead of written.")};if(a.debug&&a.debug.explanations||a.explain)k.withCredentials=!0;if("true"==lc("isReadableEvent"))b.sendPost(k,
b.baseURL,f);else try{if(!/^[\x20-\x7E]+$/.test(f))throw Error("GET request payload contains non-ASCII characters, try sending POST request");var l=encodeURIComponent(window.btoa(f)),m=b.baseURL+"?event="+l;if(8192<m.length)throw Error("GET request URL exceeds 8192 characters, try sending POST request");b.sendGet(k,m)}catch(T){b.sendPost(k,b.baseURL,f)}}})}},{key:"sendGet",value:function(a,e){a.open("GET",e,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");a.send()}},
{key:"sendPost",value:function(a,e,f){a.open("POST",e,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.send("event="+encodeURIComponent(f))}}]);return a}(),Ma,Qd=function(a){return(a.contentZones||[]).reduce(function(a,e){e=pc(e);"string"===typeof(e||{}).name&&""!==(e||{}).name&&a.push(e);return a},[])},Rd=function(a){return(a.contentZones||[]).reduce(function(a,e){e=pc(e);"string"===typeof(e||
{}).name&&""!==(e||{}).name&&a.push((e||{}).name);return a},[])},pc=function(a){var b=!(a||{}).selector||0<A((a||{}).selector).length;return y({},a,{selectorFound:b})},Sd=function(a){var b=(k.result.matchedConfig||{}).contentZones;return b?(b=b.find(function(b){return b.name===a}))&&b.selector?b.selector:null:null},jb,Ud=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0;kb();Td(a)&&(jb=setInterval(function(){var b=!1,e=(new Date).getTime(),f=k.result.matchedConfig||{},g=f.listeners||
[];f=f.contentZones||[];a&&(g=g.map(function(a){if(a.selectorFound)return a;a=bb(a);b=a.selectorFound||b;return a}));f=f.map(function(a){if(a.selectorFound)return a;a=pc(a);b=a.selectorFound||b;return a});b&&Object.assign(k.result.matchedConfig,y({},k.result.matchedConfig,{contentZones:f,listeners:g}));(50<(new Date).getTime()-e||!Td(a))&&kb()},1E3))},Td=function(a){if(k.result.matchedConfig){var b=k.result.matchedConfig,e=b.listeners;b=b.contentZones;var f,g=!1;e&&a&&(f=!!e.filter(function(a){return!a.selectorFound}).length);
b&&(g=!!b.filter(function(a){return!a.selectorFound}).length);return f||g}return!1},kb=function(){"number"===typeof jb&&clearInterval(jb);jb=null},Sf=function(){k.result&&k.result.matchedConfig&&k.result.matchedConfig.listeners&&k.result.matchedConfig.listeners.forEach(function(a){A(a.selector).off(a.bind)})},Vd={_id:!0,id:!0,currency:!0,inventoryCount:!0,price:!0,tagType:!0,type:!0},qc=function(){var a=0<A('script[src*="//translate.googleusercontent.com"]').length,b=0<A("html.translated-ltr").length||
0<A("html.translated-rtl").length;if(a||b)return r.debug("page is translated"),!0;try{var e=0<A(window.parent.document).find('script[src*="//www.microsofttranslator.com"]').length,f=0<A(window.parent.document).find('frame[src*="//www.worldlingo.com"]').length;if(e||f)return r.debug("page is translated"),!0;r.debug("page is not translated");return!1}catch(g){return r.debug("exception caught, assuming page is untranslated "+g),!1}},Tf=function(a){Object.keys(a).forEach(function(b){var e=a[b];Object.keys(e).forEach(function(a){Vd[a]||
delete e[a]})});return a},Uf=function(a){Object.keys(a).forEach(function(b){Vd[b]||delete a[b]});return a},Wd=function(){return k.config&&k.config.settings&&k.config.settings.truncateTranslated&&qc()},Xd=function(a){(1<arguments.length&&void 0!==arguments[1]?arguments[1]:1)&&jd(a);if(!La(a))return Promise.resolve(a);Vf(a);Wf(a);Ma.onEventSend(a);return new Promise(function(a){document.addEventListener(m.CustomEvents.OnEventResponse,function(b){b&&b.detail&&b.detail.response&&a(b.detail.response)})})},
Vf=function(a){var b=K(),e=wa(a.user||{},["anonymousId"]);a.user=y({},e||{},{anonId:b.uuid});Yd(a)},Yd=function(a){var b=K();b.persistedUserId&&(a.user.encryptedId=b.persistedUserId);b=K();a.account=a.account||{};b.persistedAccountId&&(a.account.encryptedId=b.persistedAccountId);if(b=lc("evergageTestMessages"))a.debug?a.debug.testMessages=b:a.debug={testMessages:b};a.source=y({},a.source||{},{beaconVersion:16,configVersion:p.endpointConfig.siteConfigVersion,contentZones:Xf(a.source,a.pageView||(a.flags||
{}).pageView)});if(x.domLoadTime||x.pageLoadTime||x.sdkParseTime||x.sdkLoadTime||x.sdkDnsTime)a.performance=y({},x.domLoadTime&&{domLoadTime:x.domLoadTime},{},x.pageLoadTime&&{pageLoadTime:x.pageLoadTime},{},x.sdkParseTime&&{sdkParseTime:x.sdkParseTime},{},x.sdkLoadTime&&{sdkLoadTime:x.sdkLoadTime},{},x.sdkDnsTime&&{sdkDnsTime:x.sdkDnsTime})},Xf=function(a,b){return(a.contentZones||[]).reduce(function(a,f){!b&&"object"===z(f)&&(f||{}).name&&r.warn("Using content zone objects in 'sendEvent' will soon be deprecated in favor of zone names as strings");
f="string"===typeof f&&""!==f?f:(f||{}).name;"string"===typeof f&&""!==f&&a.push(f);return a},[])},Wf=function(a){a.catalog&&0<Object.keys(a.catalog).length&&Object.keys(a.catalog).forEach(function(b){if(a.catalog[b]){if(a.catalog[b].dimensions&&a.catalog[b].relatedCatalogObjects)return w(Error("Catalog cannot include both dimensions and relatedCatalogObjects"),"Sitemap"),!1;var e=a.catalog[b].relatedCatalogObjects||a.catalog[b].dimensions;e&&"object"===z(e)&&Object.keys(e).forEach(function(a){if(!Array.isArray(e[a]))return w(Error("".concat(a,
" is not an array. Related Catalog Objects must have type of string[]")),"Sitemap"),!1})}});return!0},Yf=function(a){a&&("catalogObject"in a?lb(a.catalogObject):"lineItem"in a?lb(a.lineItem):"lineItems"in a?a.lineItems.map(function(a){return lb(a)}):"order"in a&&lb(a.order))},lb=function(a){if("object"===z(a))for(var b=0,e=Object.keys(a);b<e.length;b++){var f=e[b],g=a[f];if("lineItems"===f&&Array.isArray(g))g.map(function(a){a.catalogObjectId&&"string"===typeof a.catalogObjectId&&(a.catalogObjectId=
a.catalogObjectId.trim())});else if("relatedCatalogObjects"===f){f=0;for(var h=Object.keys(g);f<h.length;f++){var k=h[f];Array.isArray(g[k])&&(g[k]=g[k].map(function(a){if("string"===typeof a)return a.trim()}))}}else"catalogObjectId"!==f&&"id"!==f||"string"!==typeof g||(a[f]=g.trim())}},mb=function(a){a:{var b=a,e=k.result.matchedConfig;try{b=e&&e.onActionEvent?e.onActionEvent(b):b;if("object"===z(b)){a=b;break a}w(Error("onActionEvent failed for the ".concat(k.result.matchedConfig.name," page config. Must return an object or null.")),
"Site-wide Javascript")}catch(f){w(Error("onActionEvent failed for the ".concat(k.result.matchedConfig.name," page config. ").concat(f.message,".")),"Site-wide Javascript")}a=void 0}a:{b=a;e=k.config;try{b=e.global&&e.global.onActionEvent?e.global.onActionEvent(b):b;if("object"===z(b)){a=b;break a}w(Error("onActionEvent failed for the global page config. Must return an object or null."),"Site-wide Javascript")}catch(f){w(Error("onActionEvent failed for the global page config. ".concat(f.message,".")),
"Site-wide Javascript")}a=void 0}return a.action===ua.MetadataUpdate?Xd(a,!1):Xd(a)},Zd=function(){k.config=y({},k.config,{},N);kb()},$d=function(a){a=a.detail.actionEvent;try{var b=JSON.parse(JSON.stringify(a))}catch(f){w(f,"Copy ActionEvent")}if(b){var e=t;k.result=y({},k.result,{},e,{},{currentPage:k.result.currentPage});a===e.currentPage&&(k.result.currentPage=b);!La(a)||!k.config.settings.runOnTranslatedPage&&qc()||(b.interaction&&b.interaction.catalogObject&&Wd()&&Uf(b.interaction.catalogObject),
Yf(b.interaction),Yd(b),b&&b.source&&Array.isArray(b.source.contentZones)&&0<b.source.contentZones.length||(a=t.matchedConfig)&&b.pageView&&(k.result.matchedConfig=y({},a,{contentZones:Qd(a)}),k.result.currentPage=y({},k.result.currentPage||{},{source:y({},k.result.currentPage.source||{},{contentZones:Rd(a)})}),b.source.contentZones=k.result.currentPage.source.contentZones,Ud(!1)),Ma.onEventSend(b))}else r.warn("MCIS Module cannot parse event")},ae=function(a){k.result.matchStatus=t.matchStatus;document.dispatchEvent(new CustomEvent(m.CustomEvents.OnPageMatchStatusUpdated,
{detail:{matchStatus:a.detail.matchStatus}}))},be=function(a){if(a&&a.detail){var b=a.detail.error;var e=a.detail.context;document.dispatchEvent(new CustomEvent(m.CustomEvents.OnException,{detail:{error:b,context:e}}));a={};ic(a);jc(a);a[".em"]=Ka(b.message||b);a[".es"]=e;var f=window.navigator.userAgent.toLowerCase();e="unknown";var g="";switch(!0){case -1<f.indexOf("edge"):e="ie";g="edge";break;case -1<f.indexOf("trident"):e="ie";g="trident";break;case -1<f.indexOf("chrome")&&!!window.chrome:g=
e="chrome";break;case -1<f.indexOf("firefox"):g=e="mozilla";break;case -1<f.indexOf("safari"):g=e="safari"}"unknown"!==e?(f=(new RegExp("".concat(g,"/(.*?)s"),"gm")).exec(f),f=parseInt(!!f&&f[1]),f=isNaN(f)?null:f):f=null;a[".vt"]=e;f&&(a[".vn"]=f);switch(e){case "safari":Dd(a,b,sf);break;case "mozilla":Dd(a,b,tf);break;default:b&&b.stack&&"string"===typeof b.stack&&(b=b.stack.split("\n")[1],b=b.substring(b.indexOf("at ")+3).match(/(.*) \((.*):(\d+):(\d+)\)/),Array.isArray(b)&&Cd(a,{header:b[1],fileName:b[2],
line:b[3],column:b[4]}))}La(a)&&hb.send(a)}},ce=function(a){document.dispatchEvent(new CustomEvent(m.CustomEvents.OnConsentRevoke,{detail:{revokedConsent:a.detail.revokedConsent}}))},de=function(a){if(a.detail&&a.detail.newAnonymousId){var b=K();a=a.detail.newAnonymousId;b.uuid!==a&&Z({uuid:a})}},Zf=function(a){var b=a.detail.actionEvent;b.interaction&&b.interaction.name===ua.MetadataUpdate&&(a.preventDefault(),mb({action:ua.MetadataUpdate,consents:b.consents,source:b.source,user:b.user}))},rc=function(){document.removeEventListener(v.OnInitSitemap,
Zd);document.removeEventListener(v.OnEventSend,$d);document.removeEventListener(v.OnPageMatchStatusUpdated,ae);document.removeEventListener(v.OnException,be);document.removeEventListener(v.OnConsentRevoke,ce);document.removeEventListener(v.OnSetAnonymousId,de)},$f=function(a){return(a.listeners||[]).map(function(a){return bb(a)})},ee=function(a){od(a);document.dispatchEvent(new CustomEvent(m.CustomEvents.OnInitSitemap,{detail:{sitemapConfig:k.config}}))},ge=function(a){fe(a);return!0},he=function(a){k.result.matchedConfig=
y({},a,{contentZones:Qd(a),listeners:$f(a)});var b=k.result,e=k.result.currentPage||{};var f="function"===typeof a.action?a.action():a.action;var g=a.catalog?a.itemAction||m.ItemAction.ViewItem:null,h=a.name;var l="function"===typeof a.locale?a.locale():a.locale;b.currentPage=y({},e,{action:f,itemAction:g,source:{pageType:h,locale:l,contentZones:Rd(a)},flags:{pageView:!0},user:{},performance:{},debug:{}});return ag(a)},ag=function(a){return a.itemAction===m.ItemAction.ViewCart||a&&a.cart&&a.cart.complete?
bg(a).then(function(a){k.result.currentPage.itemAction=m.ItemAction.ViewCart;k.result.currentPage.cart=a}):a.itemAction===m.ItemAction.Purchase||a&&a.order?cg(a).then(function(a){k.result.currentPage.itemAction=m.ItemAction.Purchase;k.result.currentPage.order=a}):dg(a).then(function(a){k.result.currentPage.catalog=a})},bg=function(a){var b={};if(!a.catalog&&!a.cart&&!a.order)return Promise.resolve(b);if(a.cart)var e=a.cart;else if(a.order||a.catalog){var f={},g=a.order||a.catalog;Object.keys(g).forEach(function(a){var b=
g[a];b&&b.lineItems&&(f[a]=b.lineItems)});e={complete:f}}if(e.complete){a=e.complete;for(var h in a)return Array.isArray(h.match(/[A-Z]/))?"Product"!==h?(w(Error("Item type must be Product"),"Sitewide Javascript"),Promise.resolve(b)):If(a[h]):(w(Error("Item types must be capitalized. Did you mean ".concat(h.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))}},cg=function(a){var b={};if(!a.catalog&&!a.order)return Promise.resolve(b);a=a.order||a.catalog;
for(var e in a)return Array.isArray(e.match(/[A-Z]/))?"Product"!==e?(w(Error("Item type must be Product"),"Sitewide Javascript"),Promise.resolve(b)):Mf(a[e]):(w(Error("Item types must be capitalized. Did you mean ".concat(e.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))},dg=function(a){var b={};if(!a.catalog)return Promise.resolve(b);for(var e in a.catalog)return Array.isArray(e.match(/[A-Z]/))?eg(a.catalog[e],e):(w(Error("Item types must be capitalized. Did you mean ".concat(e.replace(/^\w/,
function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))},eg=function(a,b){return Lf(a,b).then(function(a){Object.keys(a).forEach(function(e){a[e]._id||w(Error("Invalid ".concat(b,", missing _id for the ").concat(k.result.matchedConfig.name," page config.")),"Site-wide Javascript")});return Wd()?Tf(a):a})},fg=function b(){for(var e=arguments.length,f=Array(e),g=0;g<e;g++)f[g]=arguments[g];return f.reduce(function(e,f){Object.keys(f).forEach(function(g){var h=e[g],k=f[g];
Array.isArray(h)&&Array.isArray(k)?Object.assign(e,L({},g,h.concat.apply(h,ob(k)))):h&&"object"===z(h)&&k&&"object"===z(k)?Object.assign(e,L({},g,b(h,k))):Object.assign(e,L({},g,k))});return e},{})},ie=function(b){var e=k.config.global||{},f=e.onActionEvent;delete e.onActionEvent;b=fg(e,b);e.onActionEvent=f;return b},jg=function(b){try{return gg(b.global),hg(b.pageTypeDefault),ig(b.pageTypes),!0}catch(e){return w(Error(e),"Sitemap"),!1}},hg=function(b){b&&Object.keys(b).forEach(function(b){if("contentZones"!==
b&&"listeners"!==b&&"locale"!==b&&"name"!==b&&"onActionEvent"!=b)throw Error("".concat(b," is not a valid default config attribute."));})},gg=function(b){b&&Object.keys(b).forEach(function(e){if("contentZones"!==e&&"listeners"!==e&&"locale"!==e&&"onActionEvent"!=e)throw Error("".concat(e," is not a valid global config attribute."));if("contentZones"===e&&b[e]&&!Array.isArray(b[e]))throw Error("global config: contentZones must be provided as an array of objects");})},ig=function(b){b.forEach(function(b){if(!b.name||
!b.isMatch)throw Error("All page configs must have a name and isMatch attribute defined");if(b&&b.contentZones&&!Array.isArray(b.contentZones))throw Error("".concat(b.name," pageType config: contentZones must be provided as an array of objects"));})},kg=function(){var b=k.result;mb(k.result.currentPage);k.result=b},fe=function(b){ee(b);cd();Sf();kb();if(k.config.settings.runOnTranslatedPage||!qc())k.result.currentPage=null,jg(b)&&$a(b.pageTypes).then(ie).then(he).then(kg).then(function(){return Ud()}).catch(function(b){"sitemap_reinit"!==
b&&w(Error("Unhandled exception: ".concat(b)),"Site-wide Javascript")})};document.addEventListener(v.OnInit,function(b){var e=b.detail.sdkConfig;if("running"==p.beaconState)W("reinitializing MCIS Module");else{b=e.cookieDomain;var f=e.consents;e=wa(e,["cookieDomain","consents"]);b&&(p.beaconConfig.cookieDomain=b);f&&(p.beaconConfig.consents=f);var g=p.endpointConfig;b=g.account;f=g.dataset;p.beaconConfig=y({},p.beaconConfig,{trackerUrl:g.trackerUrl},e);e=vd();g=document.dispatchEvent(new CustomEvent(m.CustomEvents.OnInit,
{detail:{beaconConfig:e},cancelable:!0}));document.dispatchEvent(new CustomEvent(pa.OnInit,{detail:{sdkConfig:e}}));g?(Q.setCookieHash(b,f,oa),g=Q.read("a"),e=Q.read("n"),yd(g)?(Z(xd(g)).uuid!==U&&hc(),r.debug("Loaded visitor record from cookie: ".concat(JSON.stringify(K())))):"string"===typeof g&&0<g.length||null!=e&&"object"===z(e)?(g&&"object"!==z(g)&&(Q.remove("a",{domain:p.beaconConfig.cookieDomain}),Q.remove("a",{domain:gc(location.hostname)}),g=g.split("."),0<g.length&&(Z({uuid:g[0]}),1<g.length&&
g[1]&&Z({affinityId:g[1]}))),e&&"object"===z(e)&&(Q.remove("n",{domain:p.beaconConfig.cookieDomain}),Q.remove("n",{domain:gc(location.hostname)}),e.puid&&"string"===typeof e.puid&&Z({persistedUserId:e.puid}),e.paid&&"string"===typeof e.paid&&Z({persistedAccountId:e.paid})),hc(),r.debug("Classic cookie detected with anonymousId: ".concat(K().uuid))):(ad()?Z({uuid:U}):(Z({uuid:Jc()}),hc()),r.debug("Created new visitor record. anonymousId: ".concat(K().uuid))),K(),e=p.beaconConfig.trackerUrl,Ma=new Rf(e+
"/api2/event/"+p.endpointConfig.dataset,Ma?Ma.eventRateLimiter:null),fb=new Gf(e+"/msreceiver",fb?fb.eventRateLimiter:null),gb=new Ff(e+"/pr",gb?gb.eventRateLimiter:null),hb=new Ef(e+"/er",hb?hb.eventRateLimiter:null),rc(),document.addEventListener(v.OnInitSitemap,Zd),document.addEventListener(v.OnEventSend,$d),document.addEventListener(v.OnPageMatchStatusUpdated,ae),document.addEventListener(v.OnException,be),document.addEventListener(v.OnConsentRevoke,ce),document.addEventListener(v.OnSetAnonymousId,
de),Qf.setupActivityTimers(),r.debug("Initialized Tracking Beacon v".concat(16," for account[").concat(b,"] dataset[").concat(f,"]")),p.beaconState="running"):(rc(),r.debug("Cancelling activity tracking."),clearTimeout(X),X=-1,da(window,"unload",Jb),da(window,"blur",Kb),da(window,"focus",Lb),da(document,"mousemove keydown scroll click",Da),r.debug("IS Module initialization canceled due to a preventDefault call in a listener for the OnInit event."))}});document.addEventListener(v.OnShutDown,function(b){b=
b.detail.message;r.info("Shutting down MCIS Module: ".concat(b));document.dispatchEvent(new CustomEvent(m.CustomEvents.OnShutDown,{detail:{message:b}}));p.beaconState="shutDown";rc()});document.addEventListener(v.OnBeforeInit,function(b){Xc=p.beaconConfig.secureCookie?!0:!1});var je=function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e){document.addEventListener(v.OnBeforeEventSend,Zf);ac(b).catch(function(b){});"running"===p.beaconState&&e(p)})},
ke=function(b){var e=[];b.campaignStats.forEach(function(b){var f=k.campaignResponses.find(function(e){return e.experienceId===b.experienceId});document.dispatchEvent(new CustomEvent(m.CustomEvents.OnStatSend,{detail:{campaignStat:b,campaignResponse:f}}));document.dispatchEvent(new CustomEvent(pa.OnStatSend,{detail:{campaignStat:b,campaignResponse:f}}));e.push(b.experienceId)});e=Array.from(new Set(e));return La(b)?fb.send(zf(b),e):Promise.resolve(b)};window.SalesforceInteractions&&(window.SalesforceInteractions.mcis=
{extractFirstGroup:va.extractFirstGroup,getLastPathComponentWithoutExtension:va.getLastPathComponentWithoutExtension,getParameterByName:va.getParameterByName,getValueFromNestedObject:va.getValueFromNestedObject,buildLineItemFromPageState:Hf,cookie:va.cookie,sendStat:ke,getContentZoneSelector:Sd,getSdkConfig:vd,getSitemapConfig:Ad,getSitemapResult:zd,getCampaignResponses:Bd,CustomEvents:pa,ConsentPurpose:cc,CatalogObjectInteractionName:Ca});m.ConsentPurpose=cc;m.DisplayUtils=ud;m.addEventListener=
function(b){r.warn("Evergage.addEventListener is deprecated. Use the Evergage.CustomEvents.OnEventSend event instead.");return null};m.addResponseListener=function(b){r.warn("Evergage.addResponseListener is deprecated. Use the Evergage.CustomEvents.OnEventResponse event instead.");return null};m.build=function(b){$a(b.pageTypes).then(ie).then(he).catch(function(b){"sitemap_reinit"!==b&&w(Error("Unhandled exception: ".concat(b)),"Site-wide Javascript")})};m.cashDom=A;m.configure=function(b,e){"running"==
p.beaconState&&r.debug("Unbinding signal subscriptions.");p.beaconState="initializing";p.endpointConfig=y({},p.endpointConfig,{},b);var f=p.endpointConfig;b=f.account;var g=f.dataset;f=f.siteConfigVersion;if(!b||!g)return W("account/dataset undefined. Check your beacon configuration.");if(!f)return W("beacon config version undefined");p.endpointConfig.cdnUrl||(p.endpointConfig.cdnUrl="https://".concat(qf));if(!p.endpointConfig.cdnUrl)return W("cdnUrl undefined. Check your beacon configuration.");
p.endpointConfig.trackerUrl||(f=p.endpointConfig,b="https://".concat({account:b,dataset:g}.account,".").concat("evergage.com"),f.trackerUrl=b);if(!p.endpointConfig.trackerUrl)return W("trackerUrl undefined. Check your beacon configuration.");p.beaconConfig.trackerUrl=p.endpointConfig.trackerUrl;p.beaconConfig=y({},p.beaconConfig,{},e);p.beaconState="configured"};m.getCampaignResponses=Bd;m.getConfig=ec;m.getConsents=ed;m.getContentZoneSelector=Sd;m.getCurrentPage=Oc;m.getLoggingLevel=Ic;m.getSitemapConfig=
Ad;m.getSitemapResult=zd;m.getState=eb;m.getVersion=function(){return 16};m.init=je;m.initSitemap=ge;m.listener=function(b,e,f){var g="object"===z(f)?function(){r.warn("ListenerOptions are deprecated. Please use a callback in the Listener instead.");var b=y({},f,{user:{}});mb(b)}:f;return Kc(b,e,g)};m.log=r;m.reinit=function(){var b=P.map(function(b){return b.consent});je(y({},ec(),{consents:b})).then(function(){ge(k.config)})};m.removeCookies=function(b){b&&Q.setCookieHash(p.endpointConfig.account,
p.endpointConfig.dataset,b);document.dispatchEvent(new CustomEvent(v.OnClearCookie,{detail:{options:{domain:b||p.beaconConfig.cookieDomain||gc(location.hostname)}}}))};m.resolvers=sd;m.runSpecificConfig=function(b){Object.assign(k.config,{pageTypes:[b]});fe(k.config)};m.sendEvent=mb;m.sendException=w;m.sendStat=ke;m.setConfig=ee;m.setLoggingLevel=Hc;m.shutDown=W;m.updateConsents=Xb;m.util=va;return m}({});
window.evergageBeaconParseTimeEnd = (new Date().getTime());

(function configureEvergage() {
    try {
       Evergage.configure({
           account: "salesforce",
           dataset: "sf_shared_prod",
           cdnUrl: "https://cdn.evergage.com",
           trackerUrl: "https://salesforce.us-1.evergage.com",
           siteConfigVersion: "10"
       },{"allowBotTraffic":false,"corsAllowedOrigins":["*"],"defaultCurrency":"USD","defaultLocale":null,"disableQtipWindowScroll":false,"doNotStoreCookiesRequireProvidedAnonId":false,"doNotTrackPingRequestsForActions":false,"enableCorsRestrictedOrigins":false,"enableMessageRotation":false,"enableRememberMeUserIds":false,"enableTemplateEsc":false,"hideContentSections":false,"hideContentSectionsMillis":2500,"hidePagesForRedirect":false,"hidePagesForRedirectMillis":1000,"identityAttributes":["GAID","TBID","customerId","emailAddress","profileId","sfmcContactKey","thVisitorId"],"lastModified":1659556647725,"preventSensitiveDataCapture":false,"rememberMeUserIdsMillis":63072000000,"secureCookie":false,"sendErrorEvents":true,"showPoweredBy":false,"siteConfigExecBeforePageReady":false,"spaRouteChangeTimeout":500,"trackAnonymousVisitors":true,"trackContextualRelatedItems":false,"trackSubdomainAsCompany":false,"trackUnknownPagesByTitle":false,"treatHashChangeAsPageLoad":false}       );
    } catch (e) {
          console.error(e);
    }
})();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
    CAMPAIGN: "data-evg-campaign-id",
    EXPERIENCE: "data-evg-experience-id",
    USER_GROUP: "data-evg-user-group",
    CLICKTHROUGH: "data-evg-clickthrough",
    IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
    DISMISSAL: "data-evg-dismissal",
    ITEM: "data-evg-item-id",
    ITEM_TYPE: "data-evg-item-type"
};

const CAMPAIGN_STAT_TYPE = {
    IMPRESSION: "Impression",
    CLICKTHROUGH: "Clickthrough",
    DISMISSAL: "Dismissal"
};

const CAMPAIGN_STAT_USER_GROUP = {
    TEST: "Test",
    CONTROL: "Control"
};

document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (event) => {
    if (validateOnTemplateDisplayEndEvent(event)) {
        const payload = event.detail.payload;
        const campaignElement = getCampaignElementFromPayload(payload);
        sendImpression(payload, campaignElement);
        bindCampaignClickthroughsAndDismissals(campaignElement);
    }
});

const sendImpression = (payload, campaignElement) => {
    const userGroup = payload.userGroup;
    const stat = {
        control: userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL,
        experienceId: payload.experience,
        stat: CAMPAIGN_STAT_TYPE.IMPRESSION
    };
    const itemStats = generateItemStats(campaignElement);
    if (Object.keys(itemStats).length > 0) {
        stat.catalog = itemStats;
    }
    if (userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL || (userGroup === CAMPAIGN_STAT_USER_GROUP.TEST && campaignElement.length > 0)) {
        Evergage.sendStat({campaignStats: [stat]});
    } else {
        Evergage.log.warn("campaignStatsTracking.js", "Experience", payload.experience, "not found in DOM.");
    }
};

const generateItemStats = (campaignElement) => {
    const catalogStats = {};
    const itemNodes = Evergage.cashDom(campaignElement).find("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]");
    if (!itemNodes || itemNodes.length === 0) {
        return catalogStats;
    }
    Array.from(itemNodes).forEach(function(itemNode) {
        const itemId = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
        const itemType = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);
        if (itemId && itemType) {
            if (!catalogStats[itemType]) {
                catalogStats[itemType] = [];
            }
            if (!catalogStats[itemType].includes(itemId)) {
                catalogStats[itemType].push(itemId);
            }
        }
    });
    return catalogStats;
}

const buildCampaignSelector = (experienceId) => {
    return `[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}='${experienceId}']`
}

const getCampaignElementFromPayload = (payload) => {
    const experienceId = payload.experience;
    const campaignSelector = buildCampaignSelector(experienceId);
    return Evergage.cashDom(campaignSelector);
};

const getCampaignClickthroughAndDismissalElements = (campaignElement) => {
    const experienceId = Evergage.cashDom(campaignElement).attr(`${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}`);
    const campaignSelector = buildCampaignSelector(experienceId);
    return Evergage.cashDom(campaignElement).parent().find(`
        ${campaignSelector}[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        ${campaignSelector} a,
        ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]
    `);
};

const sendClickthroughOrDismissal = (e) => {
    if (Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.IGNORE_CLICKTHROUGH}]`).length > 0) {
        return;
    }
    const campaignElement = Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}]`);
    if (campaignElement.length > 0  && Evergage.cashDom(e.target).closest(`
        a,
        [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]`).length > 0) {

        const stat = {
            control: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.USER_GROUP) === CAMPAIGN_STAT_USER_GROUP.CONTROL,
            experienceId: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE),
            stat: Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}]`).length > 0 || Evergage.cashDom(e.target).closest("a").length > 0
                ? CAMPAIGN_STAT_TYPE.CLICKTHROUGH
                : CAMPAIGN_STAT_TYPE.DISMISSAL
        };

        if (stat.stat === CAMPAIGN_STAT_TYPE.CLICKTHROUGH) {
            const itemClickthroughStats = generateItemClickthroughStats(e.target);
            if (Object.keys(itemClickthroughStats).length > 0) {
                stat.catalog = itemClickthroughStats;
            }
        }

        Evergage.sendStat({campaignStats: [stat]});
    }
};

const generateItemClickthroughStats = (target) => {
    const itemStats = {};
    const itemId = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
    const itemType = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);

    if (itemId && itemType) {
        itemStats[itemType] = [itemId];
    }
    return itemStats;
}

const bindCampaignClickthroughsAndDismissals = (campaignElement) => {
    const elements = getCampaignClickthroughAndDismissalElements(campaignElement);
    elements.off("click", sendClickthroughOrDismissal);
    elements.on("click", sendClickthroughOrDismissal);
};

const validateOnTemplateDisplayEndEvent = (event) => {
    if (!event.detail) {
        Evergage.log.warn("campaignStatsTracking.js", "No detail object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload) {
        Evergage.log.warn("campaignStatsTracking.js", "No payload object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload.campaign) {
        Evergage.log.warn("campaignStatsTracking.js", "No campaign found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.experience) {
        Evergage.log.warn("campaignStatsTracking.js", "No experience found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.userGroup) {
        Evergage.log.warn("campaignStatsTracking.js", "No user group found in payload object", event.detail);
        return false;
    }
    return true;
};

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    /**
 *  Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (() => {
    const personalizationSectionsSelector = "head > style.evergagePersonalizationSections";

    let personalizedSectionsString = "";
    let sectionsHaveEverBeenHidden = false;
    let hasBeenHidden = false;
    let shouldReshowNow = false;
    let hiddenSections = {};

    const timeoutOptions = {
        pageMatchTimeout: 1000,
        redisplayTimeout: Evergage.getConfig().hideContentSectionsMillis || 2500
    }

    const utils = {
        getGlobalContentZoneSelectors: () => {
            return ((Evergage.getState().config.global || {}).contentZones || [])
                .filter((contentZone) => (contentZone || {}).selector)
                .map((contentZone) => contentZone.selector);
        },
        getPageTypeContentZoneSelectors: () => {
            const { pageTypes } = Evergage.getState().config;
            return pageTypes.length < 1
                ? []
                : pageTypes
                    .map((pageType) => pageType.contentZones || [])
                    .reduce((acc, contentZonesArr) => acc.concat(contentZonesArr), [])
                    .filter((contentZone) => (contentZone || {}).selector)
                    .map((contentZone) => contentZone.selector);
        },
        buildContentZoneSelectors: () => {
            return [
                ...new Set([
                    ...utils.getGlobalContentZoneSelectors(),
                    ...utils.getPageTypeContentZoneSelectors()
                ])
            ];
        },
        addToPersonalizedSectionsString: (selector) => {
            if (typeof selector === "string") {
                try {
                    document.querySelector(selector);
                    if (personalizedSectionsString !== "") {
                        personalizedSectionsString += ", ";
                    }
                    personalizedSectionsString += selector;
                } catch (exception) {
                    Evergage.sendException(exception, "hideSectionsInvalidCSSSelector");
                }
            }
        },
        hasBeenReshown: () => {
            return Evergage.cashDom(personalizationSectionsSelector).length === 0;
        }
    };

    const actions = {
        hideSections: () => {
            if (sectionsHaveEverBeenHidden) return;

            const selectors = utils.buildContentZoneSelectors();
            if (selectors.length === 0) {
                Evergage.log.debug("Evergage: Issue with malformed request in hideSections.");
                return;
            }
            for (const selector of selectors) {
                utils.addToPersonalizedSectionsString(selector);
            }

            if (!personalizedSectionsString) return;

            const head = document.head || document.getElementsByTagName("head")[0];
            const style = document.createElement("style");
            Evergage.cashDom(style)
                .attr({ type: "text/css", class: "evergagePersonalizationSections" })
                .text(`${personalizedSectionsString} { visibility: hidden !important; }`);

            clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
            window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                if (utils.hasBeenReshown()) return;
                shouldReshowNow = true;
                actions.reshowPersonalizedSectionsNow();
            }, timeoutOptions.redisplayTimeout);

            head.appendChild(style);
            sectionsHaveEverBeenHidden = true;
        },
        reshowPersonalizedSections: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (typeof window.requestAnimationFrame === "function") {
                    Evergage.log.info("Evergage: Scheduling for next animation frame redisplay of sections of the page marked for personalization.");
                    window.requestAnimationFrame(actions.reshowPersonalizedSectionsNow);
                } else {
                    actions.reshowPersonalizedSectionsNow();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSections");
            }
        },
        reshowReadyPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important }`);
            Evergage.log.info(`Evergage: Redisplaying the following sections of the page marked for personalization: ${personalizedSectionsString}`);
        },
        reshowAllPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).remove();
            Evergage.log.info("Evergage: Redisplaying outstanding sections of the page marked for personalization.");
        },
        reshowPersonalizedSectionsNow: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (shouldReshowNow || Object.keys(hiddenSections).length === 0) {
                    actions.reshowAllPersonalizedSections();
                } else if (Object.keys(hiddenSections).length > 0) {
                    personalizedSectionsString = "";
                    for (const contentZone in hiddenSections) {
                        utils.addToPersonalizedSectionsString(hiddenSections[contentZone]);
                    }
                    actions.reshowReadyPersonalizedSections();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSectionsNow");
            }
        }
    };

    const beaconListeners = {
        addOnInit: () => {
            document.addEventListener(Evergage.CustomEvents.OnInit, (domEvent) => {
                clearTimeout(window.evergagePageMatchTimeout);
                window.evergagePageMatchTimeout = setTimeout(function () {
                    const { pageType } = (Evergage.getCurrentPage().source || {});
                    if (utils.hasBeenReshown() || (typeof pageType === "string" && pageType !== "")) return;
                    shouldReshowNow = true;
                    actions.reshowPersonalizedSectionsNow();
                }, timeoutOptions.pageMatchTimeout);
            });
        },
        addPageMatchStatusUpdated: () => {
            document.addEventListener(Evergage.CustomEvents.OnPageMatchStatusUpdated, (domEvent) => {
                if (!hasBeenHidden) {
                    actions.hideSections();
                    if (Evergage.cashDom(personalizationSectionsSelector).length > 0) {
                        hasBeenHidden = true;
                    }
                }
            });
        },
        addOnEventResponse: () => {
            document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                const { campaignResponses } = ((domEvent.detail || {}).response || {});
                if ((campaignResponses || []).length >= 1) {
                    personalizedSectionsString = "";
                    for (const campaign of campaignResponses) {
                        const { contentZone } = ((campaign || {}).payload || {});
                        const contentZoneSelector = Evergage.getContentZoneSelector(((campaign || {}).payload || {}).contentZone);
                        if (typeof contentZoneSelector === "string") {
                            hiddenSections[contentZone] = contentZoneSelector;
                            utils.addToPersonalizedSectionsString(contentZoneSelector);
                        }
                    }
                    if (!personalizedSectionsString) {
                        actions.reshowPersonalizedSections();
                        return;
                    }

                    Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important; }`);
                } else {
                    actions.reshowPersonalizedSections();
                }
            });
        },
        addOnTemplateDisplayEnd: () => {
            document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (domEvent) => {
                if (utils.hasBeenReshown()) return;
                const { contentZone } = ((domEvent.detail || {}).payload || {});
                if (typeof contentZone === "string" && hiddenSections[contentZone]) {
                    delete hiddenSections[contentZone];
                }
                actions.reshowPersonalizedSections();
            });
        },
    };

    return {
        setPageMatchTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.pageMatchTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setPageMatchTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        setRedisplayTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.redisplayTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setRedisplayTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        init: function() {
            for (const key in beaconListeners) {
                beaconListeners[key]();
            }
        }
    };
})();

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.FlickerDefender = Evergage.FlickerDefender;
}

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.restrictContentZone=t.executeControl=t.handleCampaignResponses=t.renderTemplate=t.resetTemplate=t.registerTemplate=t.executeBundles=void 0;var a=n(5),l=n(1),s=i(n(2)),c=new Map,u=new Map,p=new Set,d=function(){return document.getElementsByTagName("html").length>0&&null!=document.getElementsByTagName("html")[0].getAttribute(s.VE_LOADING_ATTRIBUTE)||null!=document.getElementById(s.VE_ACTIVE_ELEMENT_ID)||"true"===localStorage.getItem(s.VE_INDICATOR_FLAG)||document.location.href.includes(s.TEST_TEMPLATE_PARAMETER)},f=function(e){return c.get(e)},h=function(e,t){return[e,t.campaign,t.experience].join(":")};t.executeBundles=function(e){if(e){var n=!0;e.forEach((function(e){var r,o;try{try{var i=document.createElement("script");o="prepareTemplate"+e.id,i.text="function "+o+"(TemplateService) { "+e.bundle+" }",r=document.head.appendChild(i),window[o]({registerTemplate:t.registerTemplate})}catch(r){n=!1,Function("TemplateService",e.bundle)({registerTemplate:t.registerTemplate})}}catch(e){l.dispatchError(e)}finally{r&&r.parentNode.removeChild(r),o&&window[o]&&(window[o]=void 0)}})),n||console.log("Marketing Cloud Personalization will soon require your Content Security Policy to allow `unsafe-inline`.")}},t.registerTemplate=function(e){var t=new a.Template(e);c.set(e.name,t)},t.resetTemplate=function(e,t){var n=h(e,t),r=u.get(n);if(r)try{r()}catch(e){l.dispatchError(e)}u.delete(n)},t.renderTemplate=function(e,t){if(c.has(e)){var n=f(e).render(t);u.set(h(e,t),n)}},t.handleCampaignResponses=function(e){d()||e.filter((function(e){return"ng"===e.type})).filter((function(e){return!g(e)})).forEach((function(e){switch(e.userGroup){case"Default":m(e);break;case"Control":t.executeControl(e)}}))};var m=function(e){e.templateNames.forEach((function(n){t.renderTemplate(n,e.payload)}))};t.executeControl=function(e){e.templateNames.forEach((function(t){var n=f(t),r=e.payload;if(n.control)try{var o=n.control(r);l.handleTemplateDispatch(o,r)}catch(e){l.dispatchError(e)}}))};var g=function(e){return e.payload.contentZone&&p.has(e.payload.contentZone)};t.restrictContentZone=function(e){e&&p.add(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchError=t.handleTemplateDispatch=t.getQueryParam=void 0,t.getQueryParam=function(e){var t=location.search;e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))};var r=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}})),document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.mcis.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}}))};t.handleTemplateDispatch=function(e,t){window.Promise&&"function"==typeof window.Promise.resolve?window.Promise.resolve(e).then((function(){r(t)})):r(t)},t.dispatchError=function(e){document.dispatchEvent(new CustomEvent(window.SalesforceInteractions.CustomEvents.OnException,{detail:{error:new Error(e),context:"Handlebars Template Gear"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VE_ACTIVE_ELEMENT_ID=t.VE_INDICATOR_FLAG=t.VE_LOADING_ATTRIBUTE=t.TEST_TEMPLATE_PARAMETER=t.TEST_TEMPLATE_STORAGE_KEY=void 0,t.TEST_TEMPLATE_STORAGE_KEY="testTemplate",t.TEST_TEMPLATE_PARAMETER="evergageTestTemplate",t.VE_LOADING_ATTRIBUTE="evergagevisualeditorloading",t.VE_INDICATOR_FLAG="evgVE",t.VE_ACTIVE_ELEMENT_ID="evg_ui-visual-editor"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n(4),o=n(6),i=n(0);function a(){/complete|interactive|loaded/.test(document.readyState)?(r.renderTestTemplate(),o.initPreview()):document.addEventListener("DOMContentLoaded",(function(){r.renderTestTemplate(),o.initPreview()}))}document.addEventListener(window.Evergage.CustomEvents.OnEventResponse,(function(e){i.executeBundles(e.detail.response.compiledCampaignTemplates),i.handleCampaignResponses(e.detail.response.campaignResponses)})),t.render=a,a()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTestTemplate=void 0;var r=n(0),o=n(1),i=n(2);t.renderTestTemplate=function(){if("true"==o.getQueryParam(i.TEST_TEMPLATE_PARAMETER)){var e=a();addEventListener("storage",(function(t){t.key==i.TEST_TEMPLATE_STORAGE_KEY&&(e&&r.resetTemplate(e.templateName,e.templateConfig),e=a())}))}};var a=function(){var e=localStorage.getItem(i.TEST_TEMPLATE_STORAGE_KEY);if(e)try{var t=JSON.parse(e);return r.executeBundles(t.templates),r.renderTemplate(t.templateName,t.templateConfig),r.restrictContentZone(t.templateConfig.contentZone),t}catch(e){}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Template=void 0;var o=r(n(7)),i=n(1),a=function(){function e(e){var t=this;if(this.getContentZoneFromMatchedConfig=function(e){var t=window.Evergage.getState().result.matchedConfig;return e.contentZone&&t&&t.contentZones&&0!==t.contentZones.length&&t.contentZones.find((function(t){return t.name===e.contentZone}))||null},this.applyRender=function(e){var n=t.getContentZoneFromMatchedConfig(e);n&&t.executeInsertionForTarget(n,e)},this.replaceContentAtTarget=function(e,t){t.innerHTML=e},this.name=e.name,this.apply=e.apply,this.reset=e.reset,this.control=e.control,e.handlebars)try{this.generateHtml=o.default.template(e.handlebars),o.default.partials[e.name]=o.default.template(e.handlebars)}catch(e){i.dispatchError(e)}else this.generateHtml=function(){}}return e.prototype.render=function(e){try{var t=this.apply(e,this.generateHtml,this.applyRender);return i.handleTemplateDispatch(t,e),this.reset.bind(this,e,this.generateHtml)}catch(e){i.dispatchError(e)}},e.prototype.executeInsertionForTarget=function(e,t){if(this.generateHtml){var n=e.selector;try{var r=document.querySelector(n);if(!r){var o='Could not render template. Content zone "'+e.name+'" defined but the selector "'+n+'" not found on the page.';return void i.dispatchError(o)}var a=this.generateHtml(t);if(!a)return;this.replaceContentAtTarget(a,r)}catch(e){i.dispatchError(e)}}},e}();t.Template=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initPreview=void 0;var r=n(2),o=n(0);t.initPreview=function(){window.Evergage.Render={render:function(e,t,n){var i=JSON.stringify({templateName:e,templateConfig:t,templates:n});window.localStorage.setItem(r.TEST_TEMPLATE_STORAGE_KEY,i),o.resetTemplate(e,t),o.executeBundles(n),o.renderTemplate(e,t)},reset:o.resetTemplate}}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"extend",(function(){return u})),n.d(r,"toString",(function(){return p})),n.d(r,"isFunction",(function(){return d})),n.d(r,"isArray",(function(){return f})),n.d(r,"indexOf",(function(){return h})),n.d(r,"escapeExpression",(function(){return m})),n.d(r,"isEmpty",(function(){return g})),n.d(r,"createFrame",(function(){return v})),n.d(r,"blockParams",(function(){return E})),n.d(r,"appendContextPath",(function(){return T}));var o={};n.r(o),n.d(o,"VERSION",(function(){return k})),n.d(o,"COMPILER_REVISION",(function(){return j})),n.d(o,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return I})),n.d(o,"REVISION_CHANGES",(function(){return L})),n.d(o,"HandlebarsEnvironment",(function(){return R})),n.d(o,"log",(function(){return H})),n.d(o,"createFrame",(function(){return v})),n.d(o,"logger",(function(){return M}));var i={};n.r(i),n.d(i,"checkRevision",(function(){return V})),n.d(i,"template",(function(){return B})),n.d(i,"wrapProgram",(function(){return G})),n.d(i,"resolvePartial",(function(){return Z})),n.d(i,"invokePartial",(function(){return F})),n.d(i,"noop",(function(){return q}));const a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,s=/[&<>"'`=]/;function c(e){return a[e]}function u(e){for(let t=1;t<arguments.length;t++)for(let n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}let p=Object.prototype.toString,d=function(e){return"function"==typeof e};d(/x/)&&(d=function(e){return"function"==typeof e&&"[object Function]"===p.call(e)});const f=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===p.call(e)};function h(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function m(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return s.test(e)?e.replace(l,c):e}function g(e){return!e&&0!==e||!(!f(e)||0!==e.length)}function v(e){let t=u({},e);return t._parent=e,t}function E(e,t){return e.path=t,e}function T(e,t){return(e?e+".":"")+t}const y=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function w(e,t){let n,r,o,i,a=t&&t.loc;a&&(n=a.start.line,r=a.end.line,o=a.start.column,i=a.end.column,e+=" - "+n+":"+o);let l=Error.prototype.constructor.call(this,e);for(let e=0;e<y.length;e++)this[y[e]]=l[y[e]];Error.captureStackTrace&&Error.captureStackTrace(this,w);try{a&&(this.lineNumber=n,this.endLineNumber=r,Object.defineProperty?(Object.defineProperty(this,"column",{value:o,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:i,enumerable:!0})):(this.column=o,this.endColumn=i))}catch(e){}}w.prototype=new Error;var b=w;function _(e){!function(e){e.registerHelper("blockHelperMissing",(function(t,n){let r=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return r(this);if(f(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){let e=v(n.data);e.contextPath=T(n.data.contextPath,n.name),n={data:e}}return o(t,n)}))}(e),function(e){e.registerHelper("each",(function(e,t){if(!t)throw new b("Must pass iterator to #each");let n,r,o=t.fn,i=t.inverse,a=0,l="";function s(t,i,a){n&&(n.key=t,n.index=i,n.first=0===i,n.last=!!a,r&&(n.contextPath=r+t)),l+=o(e[t],{data:n,blockParams:E([e[t],t],[r+t,null])})}if(t.data&&t.ids&&(r=T(t.data.contextPath,t.ids[0])+"."),d(e)&&(e=e.call(this)),t.data&&(n=v(t.data)),e&&"object"==typeof e)if(f(e))for(let t=e.length;a<t;a++)a in e&&s(a,a,a===e.length-1);else if(global.Symbol&&e[global.Symbol.iterator]){const t=[],n=e[global.Symbol.iterator]();for(let e=n.next();!e.done;e=n.next())t.push(e.value);for(let n=(e=t).length;a<n;a++)s(a,a,a===e.length-1)}else{let t;Object.keys(e).forEach(e=>{void 0!==t&&s(t,a-1),t=e,a++}),void 0!==t&&s(t,a-1,!0)}return 0===a&&(l=i(this)),l}))}(e),function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new b('Missing helper: "'+arguments[arguments.length-1].name+'"')}))}(e),function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new b("#if requires exactly one argument");return d(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||g(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new b("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))}(e),function(e){e.registerHelper("log",(function(){let t=[void 0],n=arguments[arguments.length-1];for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);let r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log(...t)}))}(e),function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}(e),function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new b("#with requires exactly one argument");d(e)&&(e=e.call(this));let n=t.fn;if(g(e))return t.inverse(this);{let r=t.data;return t.data&&t.ids&&(r=v(t.data),r.contextPath=T(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:E([e],[r&&r.contextPath])})}}))}(e)}function P(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}function O(e){!function(e){e.registerDecorator("inline",(function(e,t,n,r){let o=e;return t.partials||(t.partials={},o=function(r,o){let i=n.partials;n.partials=u({},i,t.partials);let a=e(r,o);return n.partials=i,a}),t.partials[r.args[0]]=r.fn,o}))}(e)}let C={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){let t=h(C.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e,...t){if(e=C.lookupLevel(e),"undefined"!=typeof console&&C.lookupLevel(C.level)<=e){let n=C.methodMap[e];console[n]||(n="log"),console[n](...t)}}};var M=C;function A(...e){return u(Object.create(null),...e)}const x=Object.create(null);function S(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==x[e]&&(x[e]=!0,(void 0)("error",`Handlebars: Access has been denied to resolve the property "${e}" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}(t),!1)}const k="4.7.7",j=8,I=7,L={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function R(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},_(this),O(this)}R.prototype={constructor:R,logger:M,log:M.log,registerHelper:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple helpers");u(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===p.call(e))u(this.partials,e);else{if(void 0===t)throw new b(`Attempting to register a partial called "${e}" as undefined`);this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===p.call(e)){if(t)throw new b("Arg not supported with multiple decorators");u(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses(){Object.keys(x).forEach(e=>{delete x[e]})}};let H=M.log;function N(e){this.string=e}N.prototype.toString=N.prototype.toHTML=function(){return""+this.string};var D=N;function V(e){const t=e&&e[0]||1;if(!(t>=I&&t<=j)){if(t<I){const e=L[j],n=L[t];throw new b("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+n+").")}throw new b("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function B(e,t){if(!t)throw new b("No environment passed to template");if(!e||!e.main)throw new b("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);const n=e.compiler&&7===e.compiler[0];let r={strict:function(e,t,n){if(!e||!(t in e))throw new b('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){let n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||function(e,t,n){return S("function"==typeof e?t.methods:t.properties,n)}(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){const n=e.length;for(let o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:m,invokePartial:function(n,r,o){o.hash&&(r=u({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);let i=u({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),a=t.VM.invokePartial.call(this,n,r,i);if(null==a&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),a=o.partials[o.name](r,i)),null!=a){if(o.indent){let e=a.split("\n");for(let t=0,n=e.length;t<n&&(e[t]||t+1!==n);t++)e[t]=o.indent+e[t];a=e.join("\n")}return a}throw new b("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){let n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){let i=this.programs[e],a=this.fn(e);return t||o||r||n?i=G(this,e,a,t,n,r,o):i||(i=this.programs[e]=G(this,e,a)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){let n=e||t;return e&&t&&e!==t&&(n=u({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t,n={}){let i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?v(t):{}).root=e);return t}(t,i));let a,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,i,l,a)}return e.useDepths&&(a=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=U(e.main,s,r,n.depths||[],i,l))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.protoAccessControl=o.protoAccessControl,r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{let i=u({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach(n=>{let r=e[n];e[n]=function(e,t){const n=t.lookupProperty;return function(e,t){return"function"!=typeof e?e:function(){const n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}(e,e=>u({lookupProperty:n},e))}(r,t)})}(i,r),r.helpers=i,e.usePartial&&(r.partials=r.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=u({},t.decorators,o.decorators)),r.hooks={},r.protoAccessControl=function(e){let t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;let n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:A(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:A(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}}(o);let a=o.allowCallsToHelperMissing||n;P(r,"helperMissing",a),P(r,"blockHelperMissing",a)}},o._child=function(t,n,o,i){if(e.useBlockParams&&!o)throw new b("must pass block params");if(e.useDepths&&!i)throw new b("must pass parent depths");return G(r,t,e[t],n,0,o,i)},o}function G(e,t,n,r,o,i,a){function l(t,o={}){let l=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(l=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||r,i&&[o.blockParams].concat(i),l)}return(l=U(n,l,e,a,r,i)).program=t,l.depth=a?a.length:0,l.blockParams=o||0,l}function Z(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function F(e,t,n){const r=n.data&&n.data["partial-block"];let o;if(n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath),n.fn&&n.fn!==q){n.data=v(n.data);let e=n.fn;o=n.data["partial-block"]=function(t,n={}){return n.data=v(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=u({},n.partials,e.partials))}if(void 0===e&&o&&(e=o),void 0===e)throw new b("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function q(){return""}function U(e,t,n,r,o,i){if(e.decorator){let a={};u(t=e.decorator(t,a,n,r&&r[0],o,i,r),a)}return t}function Y(){let e=new R;return u(e,o),e.SafeString=D,e.Exception=b,e.Utils=r,e.escapeExpression=m,e.VM=i,e.template=function(t){return B(t,e)},e}let K=Y();K.create=Y,function(e){let t="undefined"!=typeof global?global:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}}(K),K.default=K;t.default=K}]));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';

function sendMessageToEvergageLauncher(message) {
    try {
        document.dispatchEvent(
            new CustomEvent(VE_CUSTOM_EVENT_NAME, {
                detail: JSON.stringify(message),
            })
        );
    } catch (e) {
        console.error(e);
    }
}

var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, function (
        domEvent
    ) {
        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnInit,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventSend, function (
        domEvent
    ) {
        eventLinkId = Math.random().toString().slice(2);

        const { actionEvent } = domEvent.detail || {};
        actionEvent._toolsEventLinkId = eventLinkId;
        if (actionEvent.interaction) {
            actionEvent.explain = true;
        } else {
            actionEvent.debug = Object.assign(
                (actionEvent.debug || {}),
                { explanations: true }
            );
        }

        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnEventSend,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, function (
        domEvent
    ) {
        if (domEvent.detail) {
            const currentPage = Evergage.getCurrentPage();
            const sitemapConfig = Evergage.getState().config;
            const matchedPageConfig =
                Evergage.getState().result &&
                Evergage.getState().result.matchedConfig;

            eventLinkId = null;

            sendMessageToEvergageLauncher({
                type: TO_LAUNCHER_MESSAGE_TYPE,
                payload: {
                    type: TO_LAUNCHER_PAYLOAD_TYPE,
                    payload: {
                        name: Evergage.CustomEvents.OnEventResponse,
                        detail: {
                            response: domEvent.detail.response,
                            currentPage: currentPage,
                            sitemapConfig: sitemapConfig,
                            matchedPageConfig: matchedPageConfig,
                        },
                    },
                },
            });
        }
    });
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: System Tools:interactionStudioTools.js");
    }
};


try {
    (function () {
    var VE_LOCAL_STORAGE_KEY = 'evgVE';
    var SITEMAP_EDITOR_LOCAL_STORAGE_KEY = 'evgVE-cdp-sitemap-editor';

    var SdkNamespace = window.Evergage || window.SalesforceInteractions;

    function injectEditorLaunchScript(isStandaloneSitemapEditor) {
        try {
            // getConfig() is not exposed on the Salesforce/CDP build of the SDK
            var trackerUrl =
                typeof SdkNamespace.getConfig === 'function' &&
                SdkNamespace.getConfig().trackerUrl;

            var baseUrl = !isStandaloneSitemapEditor && trackerUrl ? trackerUrl : 'https://cdn.evergage.com';
            var scriptPath = isStandaloneSitemapEditor
                ? '/evergage-content/sitemap-editor/4.0.0/launch.sitemap-editor.js'
                : '/visual-editor/launch.js';

            var scriptUrl = [baseUrl, scriptPath].join('');

            var scriptTag = document.createElement('script');
            scriptTag.setAttribute('id', 'salesforceInteractionsLauncherScript');
            scriptTag.src = scriptUrl;

            if (
                document.getElementById('salesforceInteractionsLauncherScript') == null
            ) {
                document.head.appendChild(scriptTag);
            } else {
                SdkNamespace.log.info('Launch script is already here.');
            }
        } catch (err) {
            SdkNamespace.log.error(
                'Failed to inject Salesforce Interactions Launcher script: ' + err
            );
        }
    }

    function getUrlBoolean(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? null : results[1] === 'true';
    }

    var visualEditorParam = getUrlBoolean('evergageEditor');
    var standaloneEditorParam = getUrlBoolean('salesforceInteractionsSitemapEditor');

    var visualEditorEnabledInStorage = function () {
        return window.localStorage[VE_LOCAL_STORAGE_KEY] === 'true';
    };

    var standloneSitemapEditorEnabledInStorage = function () {
        return window.localStorage[SITEMAP_EDITOR_LOCAL_STORAGE_KEY] === 'true';
    };

    // honor and set local storage based off queryParam
    if (visualEditorParam !== null) {
        window.localStorage.setItem(VE_LOCAL_STORAGE_KEY, visualEditorParam);
    }

    if (standaloneEditorParam !== null) {
        window.localStorage.setItem(
            SITEMAP_EDITOR_LOCAL_STORAGE_KEY,
            standaloneEditorParam
        );
    }

    var inSiteEditorFrameContext =
        window.frameElement && window.frameElement.id === 'siteEditorFrame';

    // trigger off of localStorage only
    // chrome extension reads/sets localStorage more easily than modifying the currentTab URL
    if (
        !visualEditorEnabledInStorage() &&
        !standloneSitemapEditorEnabledInStorage() &&
        !inSiteEditorFrameContext
    ) {
        return;
    }

    if (window.top === window.self || inSiteEditorFrameContext) {
        document.addEventListener(
            SdkNamespace.CustomEvents.OnInit,
            (event) => {
                injectEditorLaunchScript(
                    standloneSitemapEditorEnabledInStorage()
                );
                event.preventDefault();
            },
            { once: true }
        );
    }
})();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
const identityService = {
    /**
     * GA Client ID through Identity module
     */
    getGacId: async() => {
        const { getGacId } = await import (getIdentityModule());
        const gacId = await getGacId();
        return gacId;
    },
    /**
     * TBID information through Identity module
     */
    getTBID: async() => {
        const { getTbidUserInfo, setTbidUserInfoResolver} = await import (getIdentityModule());
        if (isTrailheadDomain()) {
            setTbidUserInfoResolver(trailheadTbidResolver);
        }
        const tbidUserInfo = await getTbidUserInfo();
        return (tbidUserInfo) ? tbidUserInfo.id : '';
    },
    /**
     * Determine GDPR Cookie consent for Advertising through Identity module
     * true if Advertising cookie is active, otherwise false
     */
    isAdvertisingActive: async() => {
        const { isGdprAdvertising } = await import (getIdentityModule());
        return await isGdprAdvertising();
    },
    /**
    * Read Trailhead Visitor ID directly from the cookie
    */
    getThVisitorId: function() {
        return document.cookie.match('(^|;)\\s*th_visitor_id*\\s*=\\s*([^;]+)')?.pop() || '';
    }
}

const TBID_LOCALSTORAGE_ITEM_NAME = 'tbid';

/**
 * Used to override getTbidUserInfo() in identity module, reference: https://salesforce.quip.com/sZfqAtoROGjg
 * Get tbid from localstorage
 * @returns object with id as key and tbid as value
 */
const trailheadTbidResolver = async () => {
    const tbid = window.localStorage.getItem(TBID_LOCALSTORAGE_ITEM_NAME);
    return { id: tbid };
};

/**
 * Get value of key within a string delimited with given separator
 * @param string with key/value pair delimited with given separator
 * @param key
 * @param separator
 * @returns {string} value of the specified key
 */
var getKeyVal = function(str, key, separator) {
    var val = '',
        array = str ? str.split(separator) : [];
    for (var i = 0; i < array.length; i++) {
        var c = array[i].trim();
        if (c.indexOf(key) === 0) {
            val = c.substring(key.length, c.length);
            break;
        }
    }
    return val;
}

/**
 * * Get Page Locale
 */
getLocale = function() {
    return Evergage.resolvers.fromMeta("og:locale");
}

/**
 **  Get Page Country
 */
getCountry = function() {
    var locale = getLocale()();
    return (typeof locale === "undefined") ? "" : locale.substring(3);
}

/**
 * Get page meta attribute
 *
 * @returns attribute value if exists, returns empty string as fallback
 */
getPageMetaAttribute = function(attr) {
    var attrObj = Evergage.resolvers.fromMeta(attr);
    var attrVal = '';
    if (typeof attrObj !== 'undefined' && attrObj) {
        attrVal = attrObj();
    }
    return attrVal;
}
const SFDC_TENANT = 'sfdc', TH_TENANT = 'trailhead';

const ALLOWED_ORIGINS = new Map();
ALLOWED_ORIGINS.set('https://www.salesforce.com', { dataset: 'sf_shared_prod', tenant: SFDC_TENANT, populateCatalog: true, moduleTag: 'stable' })
    .set('https://www-uat1.salesforce.com', { dataset: 'sf_shared_uat', tenant: SFDC_TENANT, populateCatalog: true, moduleTag: 'stage' })
    .set('https://www-uat1-pub.salesforce.com', { dataset: 'sf_shared_uat', tenant: SFDC_TENANT, populateCatalog: false, moduleTag: 'stage' })
    .set('https://www-qa1.salesforce.com', { dataset: 'sf_shared_qa', tenant: SFDC_TENANT, populateCatalog: true, moduleTag: 'latest' })
    .set('https://www-qa1-pub.salesforce.com', { dataset: 'sf_shared_qa', tenant: SFDC_TENANT, populateCatalog: false, moduleTag: 'latest' })
    .set('https://www-int.salesforce.com', { dataset: 'sf_shared_int', tenant: SFDC_TENANT, populateCatalog: true, moduleTag: 'latest' })
    .set('https://www-dev3-pub.salesforce.com', { dataset: 'sf_shared_int', tenant: SFDC_TENANT, populateCatalog: false, moduleTag: 'latest' })
    .set('https://www-dev3.salesforce.com', { dataset: 'sf_shared_int', tenant: SFDC_TENANT, populateCatalog: false, tag: 'latest' })
    .set('https://app-pre-prod-preview1.sfdcdigital.com', { dataset: 'sf_shared_uat', tenant: SFDC_TENANT, populateCatalog: false, moduleTag: 'stage' })
    .set('https://app-qa-prev1.sfdcdigital.com', { dataset: 'sf_shared_qa', tenant: SFDC_TENANT, populateCatalog: false, moduleTag: 'stable' })
    .set('https://app-qa-origin1.sfdcdigital.com', { dataset: 'sf_shared_qa', tenant: SFDC_TENANT, populateCatalog: false, moduleTag: 'stable' })
    .set('https://dev.trailhead.sfdc.sh', { dataset: 'sf_shared_qa', tenant: TH_TENANT, populateCatalog: false, moduleTag: 'latest' })
    .set('https://stg.trailhead.sfdc.sh', { dataset: 'sf_shared_uat', tenant: TH_TENANT, populateCatalog: false, moduleTag: 'stage' })
    .set('https://trailhead.salesforce.com', { dataset: 'sf_shared_prod', tenant: TH_TENANT, populateCatalog: false, moduleTag: 'stable' });

const tenantInfo = ALLOWED_ORIGINS.get(window.location.origin);

/** Evaluates if the tenant's domain belongs to trailhead*/
const isTrailheadDomain = () => {
    return tenantInfo.tenant === TH_TENANT
}

/** Evaluates if the Evergage beacon's dataset  name matches to the current tenant's dataset mapping*/
const isDatasetMappedToDomain = () => {
        return Evergage.getConfig().dataset.toLowerCase() === tenantInfo.dataset;
    }

/** Indicates if this tenant's domain requires catalog population or not*/
const isCatalogPopulationRequired = () => {
    return tenantInfo.populateCatalog;
}

/** Get Identity module accessed via tag in URL, module tags are [latest|stage|stable]. */
const getIdentityModule = () => {
    const tag = tenantInfo.moduleTag || 'stable';
    return 'https://a.sfdcstatic.com/digital/@sfdc-www/clientlibs-web-components/v1-' + tag + '/identity.js';
}

/**
 * retrieve tags data from page metadata object, that enables support for tag to persist with name
 * or allow callback to customize to persist with UUID per tag object
 */
getTagsData = function(pageMetaObj, callback) {
    const pageTypeTagName = 'page type';
    let tagsData = {}, isPageTypeTag = false;
    let pageMetaTags = pageMetaObj?.tags;
    if (pageMetaTags) {
        for (var tagName in pageMetaTags) {
            let tags = [];
            isPageTypeTag = (tagName.toLowerCase() !== pageTypeTagName);
            pageMetaTags[tagName]?.tags.forEach(function(tagObj) {
                if (callback && isPageTypeTag) {
                    tags.push(callback(tagObj));
                } else {
                    tags.push(tagObj.name)
                }
            });
            tagsData[tagName] = tags;
        }
    }
    return tagsData;
};

/**
 * Will validate's and update Slash's in the URI to makesure below to cases.
 * 1) There are no double slash's in URI.
 * 2) URI ends with trialing slash.
 *
 * @returns page path with query string & fragment identifier removed
 */
const pagePath = (function() {
    let multipleSlashRegex = /(\/){2,}/g;
    let trailingSlashRegex = /\/?(\?|#|$)/;
    let uri = window.location.pathname;
    let cleanuri = uri.replace(multipleSlashRegex, '$1').replace(trailingSlashRegex, '/$1');

    return window.location.origin + cleanuri;
})();


if(tenantInfo !== undefined && isDatasetMappedToDomain()){
    Promise.all([identityService.isAdvertisingActive(), identityService.getGacId(), identityService.getTBID()]).then(function(identityValues) {
            // Verify User's Consent for advertising from OneTrust Cookie
            identityValues[0] === true &&
            Evergage.init({
                cookieDomain: ".salesforce.com"
            }).then(function() {
                if(tenantInfo.tenant === SFDC_TENANT){
                    // window.pagemeta JS Object stores taxonomy and page metadata like imageUrl
                    pageMetaObj = window.pagemeta || {},
                    // retrieve tag data for page type matching
                    tagsDataNames = getTagsData(pageMetaObj),
                    // retrieve tag data from pagemeta JS Object
                    tagsData = getTagsData(pageMetaObj, function(tag) {
                        return tag.uuid;
                    })
                }
                    // commonly used constants
                    CONTENT_TYPE = "Content Type",
                    ASSET_FORMAT = "Asset Format",
                    // itemType (table) Article
                    IT_ARTICLE = "Article",
                    // zoneName for Resource Center Right Rail
                    ZN_RC_RIGHT_RAIL = "rc_right_rail",
                    // zoneId for Resource Center Right Rail
                    ZID_RC_RIGHT_RAIL = "rc-right-rail",

                    /**
                     * Note: Array Order matters!!!
                     * The most specific pageType match should be before the least specific match!
                     * List used to dynamically create pageTypes,
                     * which are used to initialize Sitemap
                     */
                    pgTypeConfigs = [{
                            name: "Pricing Chart Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Pricing Chart"
                            },
                            actionPrefix: "Pricing Chart - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            }
                        },
                        {
                            name: "Demo Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Demo"
                            },
                            actionPrefix: "Demo - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            }
                        },
                        {
                            name: "Trial Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Trial"
                            },
                            actionPrefix: "Trial - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            }
                        },
                        {
                            name: "Resource Center Article Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: IT_ARTICLE
                            },
                            actionPrefix: "RC Article Page - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            },
                            zoneMap: [{
                                zoneName: ZN_RC_RIGHT_RAIL,
                                zoneId: ZID_RC_RIGHT_RAIL,
                                zoneColNum: 1
                            }]
                        },
                        {
                            name: "Resource Center Guide Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Guide"
                            },
                            actionPrefix: "RC Guide Page - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            },
                            zoneMap: [{
                                zoneName: ZN_RC_RIGHT_RAIL,
                                zoneId: ZID_RC_RIGHT_RAIL,
                                zoneColNum: 1
                            }]
                        },
                        {
                            name: "Resource Center Research Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Research"
                            },
                            actionPrefix: "RC Research Page - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            },
                            zoneMap: [{
                                zoneName: ZN_RC_RIGHT_RAIL,
                                zoneId: ZID_RC_RIGHT_RAIL,
                                zoneColNum: 1
                            }]
                        },
                        {
                            name: "Resource Center Report Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Report"
                            },
                            actionPrefix: "RC Report Page - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            },
                            zoneMap: [{
                                zoneName: ZN_RC_RIGHT_RAIL,
                                zoneId: ZID_RC_RIGHT_RAIL,
                                zoneColNum: 1
                            }]
                        },
                        {
                            name: "Resource Center Video Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Videos"
                            },
                            actionPrefix: "RC Video Page - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            },
                            zoneMap: [{
                                zoneName: ZN_RC_RIGHT_RAIL,
                                zoneId: ZID_RC_RIGHT_RAIL,
                                zoneColNum: 2
                            }]
                        },
                        {
                            name: "Resource Center Webinar Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: CONTENT_TYPE,
                                val: "Webinars"
                            },
                            actionPrefix: "RC Webinar Page - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: CONTENT_TYPE
                            },
                            zoneMap: [{
                                zoneName: ZN_RC_RIGHT_RAIL,
                                zoneId: ZID_RC_RIGHT_RAIL,
                                zoneColNum: 1
                            }]
                        },
                        {
                            name: "Resource Center Podcast Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: ASSET_FORMAT,
                                val: "Podcast"
                            },
                            actionPrefix: "RC Podcast Page - ",
                            catalogMap: {
                                itemType: IT_ARTICLE,
                                contentType: ASSET_FORMAT
                            },
                            zoneMap: [{
                                zoneName: ZN_RC_RIGHT_RAIL,
                                zoneId: ZID_RC_RIGHT_RAIL,
                                zoneColNum: 1
                            }]
                        },
                        {
                            name: "Resource Center Category Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: false,
                                tag: "Page Type",
                                val: "Resource Center Category"
                            },
                            actionPrefix: "RC Category Page - ",
                            zoneMap: [{
                                zoneName: "rc_category_header",
                                zoneId: "rc-category-header",
                                zoneColNum: 0
                            }]
                        },
                        {
                            name: "Resource Center Home Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: true,
                                regex: /^(\/[a-z][a-z])?\/resources\/$/
                            },
                            actionPrefix: "RC Home Page - ",
                            zoneMap: [{
                                zoneName: "rc_home_page_right_rail",
                                zoneId: "rc-hp-right-rail",
                                zoneColNum: 2
                            }]
                        },
                        {
                            name: "Home Page",
                            matchMap: {
                                tenants: [SFDC_TENANT],
                                isRegex: true,
                                regex: /^\/$/,
                            },
                            actionPrefix: "Home Page - ",
                            zoneMap: [{
                                    zoneName: "hp_resource_recs",
                                    zoneId: "hp-resource-recs",
                                    zoneColNum: 0
                                }

                            ]
                        },
                        // All pages on TH_TENANT are considered Trailhead pages
                        {
                            name: "Trailhead Page",
                            matchMap: {
                                tenants: [TH_TENANT],
                                isRegex: true,
                                regex: /.+/,
                            },
                            actionPrefix: "Trailhead Page - ",
                        },
                        // Catch-all for pages with beacon, that don't match any of the above pageType config
                        {
                            name: "No Matching PageType",
                            matchMap: {
                                tenants: [SFDC_TENANT, TH_TENANT],
                                isRegex: true,
                                regex: /.+/
                            },
                            actionPrefix: "No Matching PageType - "
                        }
                    ],

                    /**
                     * Determine if article is presentable with the following rules:
                     *
                     *  - 'og:title' is not empty, contains maximum of 70 characters, and has minimum of 2 words
                     *  - 'description' is not empty, contains maximum of 100 characters
                     *  - 'og:image' is not using default image URL that contains substring 
                     *      '/etc/designs/blogsRedesign/images/default.jpg'
                     * 
                     * @returns true if criterias are met, false otherwise
                     */
                    isPresentable = function() {
                        var presentableAttrs = {
                            title: getPageMetaAttribute('og:title'),
                            description: getPageMetaAttribute('description'),
                            image: getPageMetaAttribute('og:image')
                        }
                        return presentableAttrs.title &&
                            (presentableAttrs.title.trim().split(' ').length > 2) &&
                            (presentableAttrs.title.trim().length <= 70) &&
                            presentableAttrs.description &&
                            (presentableAttrs.description.trim().length > 0) &&
                            (presentableAttrs.description.trim().length <= 100) &&
                            (presentableAttrs.image !== '') &&
                            (presentableAttrs.image.indexOf('/etc/designs/blogsRedesign/images/default.jpg') === -1);                            
                    },

                    /**
                     * Maps pagemeta.tags to Evergage Dimensions fields
                     * Note: Not all tags are available on a page. Get what is available.
                     * @param contentType which can have values of either "Content Type"/"Asset Format"
                     * @returns Object containing tags on the page
                     */
                    getDimensions = function(contentType) {
                        // Maps pagemeta.tags to Evergage Dimensions
                        // For Evergage Dimension of 'Locale' map to og:locale of page
                        var dimObj = {
                                Locale: [getLocale()()],
                                Presentable: [isPresentable() ? 'Presentable' : 'Non-Presentable']
                            },
                            // Maps pagemeta.tags tagNamespace to Evergage Dimension
                        remapDims = {
                            "Business Size": "CompanyTypes",
                            "Events": "EventTypes",
                            "Funnel Lifecycle Campaign": "ContentIntent",
                            "Industry": "Industries",
                            "Location": "Locations",
                            "Page Type": "Pagetype",
                            "Role": "ContentAudiences",
                            "Salesforce User": "ContentAudiences"
                        };
                        // Map tagNamespace of "Asset Format"/"Content Type" to Evergage Dimension of "Contenttype"
                        if (contentType) {
                            remapDims[contentType] = "ContentTypes";
                        }

                        if (!tagsData || !Object.keys(tagsData).length) {
                            return dimObj;
                        }

                        // Map each Evergage Dimension to pagemeta.tags[tagNamespace]
                        for (var namespace in tagsData) {
                            if (tagsData.hasOwnProperty(namespace)) {
                                var dimKey = namespace;
                                if (namespace in remapDims) dimKey = remapDims[namespace];
                                var dimVal = tagsData[namespace];
                                if (dimVal) dimObj[dimKey] = dimVal;
                            }
                        }
                        return dimObj;
                    },
                    /**
                     * Object containing different itemTypes within Catalog
                     * and function to retrieve the itemType on the page
                     */

                    catalogConfig = {
                        // Catalog Config for Article itemType
                        "Article": function(contentType) {
                            if(tenantInfo.tenant === SFDC_TENANT){
                                return {
                                    Article: {
                                        _id: pagePath,
                                        name: Evergage.resolvers.fromMeta("og:title"),
                                        description: Evergage.resolvers.fromMeta("description"),
                                        imageUrl: Evergage.resolvers.fromMeta("og:image"),
                                        url: pagePath,
                                        dimensions: getDimensions(contentType)
                                    }
                                };
                            }else {
                                return  {};
                            }
                        }
                    },

                    /**
                     * Get array of content zones on the page
                     * @param zoneMap containing zone attributes
                     * @returns array of content zones on the page
                     */
                    contentZones = function(zoneMap) {
                        var zones = [];

                        zoneMap.forEach(function(zone) {
                            var selector = "[data-content-zone-id='" + zone.zoneId + "']";
                            zones.push({
                                name: zone.zoneName,
                                selector: zone.zoneColNum > 0 ? selector + " > .col:nth-child(" + zone.zoneColNum + ")" : selector
                            });
                        });

                        return zones;
                    },

                    /**
                     * Creates a pageType config
                     * @param Object containing pageType Config attributes
                     * @returns pageType object for Evergage
                     */
                    createPageType = function(pgConfig) {
                        var pgType = {};
                        // name and isMatch is required for all pageTypes
                        if (!pgConfig.name || !pgConfig.matchMap) {
                            return pgType;
                        }

                        // assign required pageType name
                        pgType.name = pgConfig.name;

                        // assign required isMatch,
                        // isMatch accepts a function that returns a boolean or a function that returns a Promise.
                        // REF: https://developer.evergage.com/websdk/site-map-getting-started
                        var isRegMatch = pgConfig.matchMap.isRegex,
                            regexp = pgConfig.matchMap.regex,
                            pgConfigTenant = pgConfig.matchMap.tenants;
                        // Verify the pageType was intended to match for the tenant
                        if (!pgConfigTenant || pgConfigTenant.indexOf(tenantInfo.tenant) === -1) {
                            pgType.isMatch = function() {
                                return false;
                            };
                        } else if (isRegMatch && regexp) {
                            pgType.isMatch = function() {
                                return regexp.test(window.location.pathname);
                            };
                        } else if (isRegMatch) {
                            pgType.isMatch = function() {
                                return false;
                            };
                        } else {
                            pgType.isMatch = function() {
                                //Here, we will always match first tag out of available tags. Example, If CONTENT_TYPE  has tags ["CT:Article", "CT:Guide"], we match only for Article content type.
                                return (tagsDataNames[pgConfig.matchMap.tag] && tagsDataNames[pgConfig.matchMap.tag][0] === pgConfig.matchMap.val);
                            };
                        }

                        // optional action specifies the event name on "page view"
                        if (pgConfig.actionPrefix) {
                            pgType.action = function() {
                                if(tenantInfo.tenant === SFDC_TENANT) {
                                return pgConfig.actionPrefix +
                                    getCountry().toUpperCase();
                                }else {
                                    return pgConfig.actionPrefix;
                                }
                            };
                        }

                        // optional catalog itemType on the page
                        if (isCatalogPopulationRequired() && pgConfig.catalogMap && pgConfig.catalogMap.itemType) {
                            pgType.catalog = catalogConfig[pgConfig.catalogMap.itemType](pgConfig.catalogMap.contentType);
                        }

                        // optional contentZones on the page
                        if (pgConfig.zoneMap) {
                            pgType.contentZones = contentZones(pgConfig.zoneMap);
                        }

                        return pgType;
                    },

                    /**
                     * Create Evergage Config Object to initialize Sitemap
                     */
                    config = {
                        /**
                         * Create Evergage Global pageType config
                         */
                        global: {
                            onActionEvent: function(event) {
                                if (tenantInfo.tenant === SFDC_TENANT) {
                                    var locale = getLocale();
                                    event.source ? event.source.locale = locale : { locale: locale };
                                }
                                event.user = event.user || {};
                                event.user.attributes = event.user.attributes || {};
                                event.user.attributes.userType = getUserType();
                                if (identityValues[1]) {
                                    event.user.attributes.GAID = identityValues[1];
                                }
                                if (identityValues[2]) {
                                    event.user.attributes.TBID = identityValues[2];
                                }
                                if (identityService.getThVisitorId()) {
                                    event.user.attributes.thVisitorId = identityService.getThVisitorId();
                                }
                                return event;
                            }
                        },
                        /**
                         * Create Evergage Non-Global pageType config
                         */
                        pageTypes: []
                    },

                /**
                 * populate user attributes from Demandbase object
                 */
                getDemandBaseAttributes = function(db) {
                    let attributes = {};
                    if (db) {
                        if (db.audience) {
                            attributes.dla_audience = db.audience;
                        }
                        if (db.audience_segment) {
                            attributes.dla_audience_segment = db.audience_segment;
                        }
                        if (db.employee_range) {
                            attributes.dla_employee_range = db.employee_range;
                        }
                        if (db.company_name) {
                            attributes.dla_company_name = db.company_name;
                        }
                        if (db.industry) {
                            attributes.dla_industry = db.industry;
                        }
                        if (db.sub_industry) {
                            attributes.dla_sub_industry = db.sub_industry;
                        }
                        if (db.watch_list?.account_type_cc) {
                            attributes.dla_account_type = db.watch_list.account_type_cc;
                        }
                    }
                    return attributes;
                },
                /**
                 * retrieve Demandbase data with handles that support in both C360 and AEM's location
                 *
                 * 'digitalData.user[0].profile.demandbase' works in Prod and
                 * it is expected to be deprecated
                 */
                getDemandBaseData = function() {
                    return digitalData.user[0].profile?.db ||
                        digitalData.user[0].profile?.demandbase;
                },

                /**
                 * gather Demandbase data and trigger event for sending attributes to Evergage
                 */
                sendVisitorProfileInfo = function () {
                    let demandbaseAttributes = getDemandBaseAttributes(getDemandBaseData());
                    // fallback to use visitorProfile if digitalData is not available
                    if (Object.keys(demandbaseAttributes).length === 0 && typeof vp !== 'undefined' && vp?.db) {
                        demandbaseAttributes = getDemandBaseAttributes(vp.db);
                    }
                    if (demandbaseAttributes && Object.keys(demandbaseAttributes).length > 0) {
                        Evergage.sendEvent({
                            action: "Visitor Profile Information",
                            user: {
                                attributes: demandbaseAttributes
                            }
                        });
                    }
                },
                /**
                 * retrieve user attributes with digitalData
                 * and fallback to use visitorProfile data with user attributes in the event
                 * digitalData is not available or not having expected attributes
                 */
                addDatalayerAttributes = function() {
                    // since wrapped with Promise.all, DOMContentLoaded would have happened and
                    // digialData object is setup already
                    if (typeof window.digitalData !== 'undefined' && window.digitalData) {
                        sendVisitorProfileInfo();
                    } else {
                        window.addEventListener('DOMContentLoaded', (event) => {
                            if (typeof window.digitalData !== 'undefined') {
                                sendVisitorProfileInfo();
                            }
                        });
                    }
                };

            function getUserType() {
                const oinfoCookie = getKeyVal(document.cookie, 'oinfo', ';');
                if (oinfoCookie.length > 0) {
                    return "customer";
                } else {
                    return "prospect";
                }
            }

            function addPageTypeConfigs() {
                // add pageTypes to Sitemap config
                pgTypeConfigs.forEach(function(pgTypeConfig) {
                    config.pageTypes.push(createPageType(pgTypeConfig));
                });
            }
            // set up all of the page types before initialization
            addPageTypeConfigs();

            if (tenantInfo.tenant === SFDC_TENANT) {
                // setup event to populate user attributes
                addDatalayerAttributes();
            }
            /**
             *  Initialize the Evergage Sitemap after adding various pageTypes
             * */
            Evergage.initSitemap(config);
        });
    });
}
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}