var Coral=[function(t,e){t.exports={}},function(t,e,r){t.exports=r(130)},function(t,e,r){t.exports=r(242)},function(t,e){t.exports={}},function(t,e,r){(function(t){var n,o,i,s,a=r(100),c=r(270),u=r(48),f=r(10),l=r(5),d=r(36),p=r(275),h=r(280),v=r(285),m=r(101),y=r(51),g=r(290),b=r(296),w=r(300),S=r(104),_=r(303),x=r(110);s=function(){return {17:function(t,e,r){"use strict";e.__esModule=!0,e.default=void 0;var n=r(18),o=function(){function t(){}return t.getFirstMatch=function(t,e){var r=e.match(t);return r&&r.length>0&&r[1]||""},t.getSecondMatch=t.matchAndReturnConst=t.getWindowsVersionName=t.getMacOSVersionName=function(t){var e,r,n=y(e=m(r=t.split(".")).call(r,0,2)).call(e,(function(t){return v(t,10)||0}));if(n.push(0),10===n[0])switch(n[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},t.getAndroidVersionName=function(t){var e,r,n=y(e=m(r=t.split(".")).call(r,0,2)).call(e,();if(n.push(0),!(1===n[0]&&n[1]<5))return 1===n[0]&&n[1]<6?"Cupcake":1===n[0]&&n[1]>=6?"Donut":2===n[0]&&n[1]<2?"Eclair":2===n[0]&&2===n[1]?"Froyo":2===n[0]&&n[1]>2?"Gingerbread":3===n[0]?"Honeycomb":4===n[0]&&n[1]<1?"Ice Cream Sandwich":4===n[0]&&n[1]<4?"Jelly Bean":4===n[0]&&n[1]>=4?"KitKat":5===n[0]?"Lollipop":6===n[0]?"Marshmallow":7===n[0]?"Nougat":8===n[0]?"Oreo":9===n[0]?"Pie":void 0},t.getVersionPrecision=t.compareVersions=function(e,r,n){void 0===n&&(n=!1);var o=t.getVersionPrecision(e),i=t.getVersionPrecision(r),s=Math.max(o,i),a=0,c=y(t).call(t,[e,r],(function(e){var r,n=s-t.getVersionPrecision(e),o=e+new Array(n+1).join(".0");return h(r=y(t).call(t,o.split("."),()).call(r)}));for(n&&(a=s-Math.min(o,i)),s-=1;s>=a;){if(c[0][s]>c[1][s])return 1;if(c[0][s]===c[1][s]){if(s===a)return 0;s-=1}else if(c[0][s]<c[1][s])return-1}},t.map=function(t,e){var r,n=[];if(y(Array.prototype))return y(Array.prototype).call(t,e);for(r=0;r<t.length;r+=1)n.push(e(t[r]));return n},t.find=function(t,e){var r,n;if(p(Array.prototype))return p(Array.prototype).call(t,e);for(r=0,n=t.length;r<n;r+=1){var o=t[r];if(e(o,r))return o}},t.assign=function(t){for(var e,r,n,o=t,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(d)return d.apply(Object,l(e=[t]).call(e,s));var c=function(){var t,e=s[r];"object"==x(e)&&null!==e&&f(t=u(e)).call(t,(function(t){o[t]=e[t]}))};for(r=0,n=s.length;r<n;r+=1)c();return t},t.getBrowserAlias=t.getBrowserTypeByAlias=t}();e.default=o,t.exports=e.default},18:90:function(t,e,r){"use strict";e.__esModule=!0,e.default=void 0;var n,o=(n=r(91))&&n.__esModule?n:{default:n},i=r(18);ar a=);e.default=a,t.exports=e.default},91:function(t,e,r){"use strict";e.__esModule=!0,e.default=void 0;var n=d(r(92)),o=d(r(93)),i=d(r(94)),s=d(r(95)),l=d(r(17));ar h=function(){ar e=t.prototype;return e.getUA=function(){return this._ua},e.test=e.parseBrowser=function(){var t,e=this;this.parsedResult.browser={};var r=p(t=l.default).call(t,n.default,(function(t){var r;if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return c(r=t.test).call(r,(function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return r&&(this.parsedResult.browser=r.describe(this.getUA())),this.parsedResult.browser},e.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},e.getBrowserName=function(t){return t?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},e.getBrowserVersion=function(){return this.getBrowser().version},e.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},e.parseOS=function(){var t,e=this;this.parsedResult.os={};var r=p(t=l.default).call(t,o.default,(function(t){var r;if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return c(r=t.test).call(r,(function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return r&&(this.parsedResult.os=r.describe(this.getUA())),this.parsedResult.os},e.getOSName=e.getOSVersion=e.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},e.getPlatformType=e.parsePlatform=function(){var t,e=this;this.parsedResult.platform={};var r=p(t=l.default).call(t,i.default,(function(t){var r;if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return c(r=t.test).call(r,(function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return r&&(this.parsedResult.platform=r.describe(this.getUA())),this.parsedResult.platform},e.getEngine=e.getEngineName=e.parseEngine=function(){var t,e=this;this.parsedResult.engine={};var r=p(t=l.default).call(t,s.default,(function(t){var r;if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return c(r=t.test).call(r,(function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return r&&(this.parsedResult.engine=r.describe(this.getUA())),this.parsedResult.engine},e.parse=e.getResult=e.satisfies=function(t){var e,r=this,n={},o=0,i={},s=0;if(f(e=u(t)).call(e,(),o>0){var a,c,d=u(n),h=p(a=l.default).call(a,d,(function(t){return r.isOS(t)}));if(h){var v=this.satisfies(n[h]);if(void 0!==v)return v}var m=p(c=l.default).call(c,d,(function(t){return r.isPlatform(t)}));if(m){var y=this.satisfies(n[m]);if(void 0!==y)return y}}if(s>0){var g,b=u(i),w=p(g=l.default).call(g,b,();if(void 0!==w)return this.compareVersion(i[w])}},e.isBrowser=e.compareVersion=function(t){var e=[0],r=t,n=!1,o=this.getBrowserVersion();if("string"==typeof o)return">"===t[0]||"<"===t[0]?(r=t.substr(1),"="===t[1]?(n=!0,r=t.substr(2)):e=[],">"===t[0]?e.push(1):e.push(-1)):"="===t[0]?r=t.substr(1):"~"===t[0]&&(n=!0,r=t.substr(1)),a(e).call(e,l.default.compareVersions(o,r,n))>-1},e.isOS=function(t){return this.getOSName(!0)===String(t).toLowerCase()},e.isPlatform=function(t){return this.getPlatformType(!0)===String(t).toLowerCase()},e.isEngine=e.is=e.some=function(t){var e=this;return void 0===t&&(t=[]),c(t).call(t,(function(t){return e.is(t)}))},t}();e.default=h,t.exports=e.default},92:93:94:95:)},"object"==x(e)&&"object"==x(t)?t.exports=s():(o=[],void 0===(i="function"==typeof(n=s)?n.apply(e,o):n)||(t.exports=i))}).call(this,r(269)(t))},function(t,e,r){t.exports=r(135)},function(t,e,r){t.exports=r(187)},function(t,e,r){var n=r(3);e.f=n},function(t,e,r){t.exports=r(191)},function(t,e,r){(function(n){var o,i=r(137),s=r(141),a=r(145),c=r(150),u=r(170),f=r(100),l=r(178),d=r(101),p=r(5),h=r(36),v=r(48),m=r(194),y=r(197),g=r(201),b=r(35),w=r(206),S=r(104),_=r(110),x=r(231);!function(A){var M=Object.hasOwnProperty,O=x||E="object"==(void 0===n?"undefined":_(n))&&"function"==typeof n.nextTick,L="function"==typeof S,P="object"===("undefined"==typeof Reflect?"undefined":_(Reflect)),F="function"==typeof w?w:b,j=L?P&&"function"==typeof g?g:function(t){var e=y(t);return e.push.apply(e,m(t)),e}:v; T=nction I(t,e,r,n){var o=h({},e);if(!t)return o;if("object"!==_(t))throw TypeError("options must be an object");var i,s,a,c=v(t),u=c.length;or(var l=0;l<u;l++){if(i=c[l],!n&&!M.call(e,i))throw Error('Unknown "'+i+'" option');void 0!==(s=t[i])&&(a=r[i],o[i]=a?a(s,f):s)}return o}unction D(t){var e="value must be type of "+t.join("|"),r=t.length,n=t[0],o=t[1];return 1===r?function(t,r){if(_(t)===n)return t;r(e)}:2===r?function(t,r){var i=_(t);if(i===n||i===o)return t;r(e)}:function(n,o){for(var i=_(n),s=r;s-- >0;)if(i===t[s])return n;o(e)}}h(B.prototype,{subscribe:function(t,e,r){var n=this,o=this._target,i=this._emitter,s=this._listeners,a=function(){var n,s=T.apply(null,arguments),a={data:s,name:e,original:t};if(r){var c,u=r.call(o,a);!1!==u&&i.emit.apply(i,p(c=[a.name]).call(c,s))}else i.emit.apply(i,p(n=[e]).call(n,s))};if(s[t])throw Error("Event '"+t+"' is already listening");this._listenersCount++,i._newListener&&i._removeListener&&!n._onNewListener?(this._onNewListener=i.on("newListener",this._onNewListener),this._onRemoveListener=s[t]=null,i.on("removeListener",this._onRemoveListener)):(s[t]=a,n._on.call(o,t,a))},unsubscribe:function(t){var e,r,n,o=this,i=this._listeners,s=this._emitter,a=this._off,c=this._target;if(t&&"string"!=typeof t)throw TypeError("event must be a string");function u(){var t;o._onNewListener&&(s.off("newListener",o._onNewListener),s.off("removeListener",o._onRemoveListener),o._onNewListener=null,o._onRemoveListener=null);var e=q.call(s,o);d(t=s._observers).call(t,e,1)}if(t){if(!(e=i[t]))return;a.call(c,t,e),delete i[t],--this._listenersCount||u()}else{for(n=(r=j(i)).length;n-- >0;)t=r[n],a.call(c,t,i[t]);this._listeners={},this._listenersCount=0,u()}}});var W=D(["function"]),V=D(["object","function"]);function G(t,e,r){var n,o,i,s=0,a=new t((function(c,u,f){=I(r,{timeout:0,overload:!1},{timeout:function(t,e){return("number"!=typeof(t*=1)||t<0||!l(t))&&e("timeout must be a positive number"),t}}),n=!r.overload&&"function"==typeof t.prototype.cancel&&"function"==typeof f;var p=function(t){d(),c(t)},h=n?e(p,h,f):(o=[,e(p,h,(),i=!0),r.timeout>0&&(s=b((function(){var t=Error("timeout");s=0,a.cancel(t),u(t)}),r.timeout))}));return n||(a.cancel=,a}unction z(t,e,r,n,o){if(!r)return null;if(0===n){var i=_(e);if("string"===i){var s,a,c=0,l=0,d=this.delimiter,p=d.length;if(-1!==(a=f(e).call(e,d))){s=new Array(5);do{s[c++]=u(e).call(e,l,a),l=a+p}while(-1!==(a=f(e).call(e,d,l)));s[c++]=u(e).call(e,l),e=s,o=c}else e=[e],o=1}else"object"===i?o=e.length:(e=[e],o=1)}var h,v,m,y,g,b,w,S=null,x=e[n],A=e[n+1];if(n===o&&r._listeners)return"function"==typeof r._listeners?(t&&t.push(r._listeners),[r]):(t&&t.push.apply(t,r._listeners),[r]);if("*"===x){for(a=(b=j(r)).length;a-- >0;)"_listeners"!==(h=b[a])&&(w=z(t,e,r[h],n+1,o))&&(S?S.push.apply(S,w):S=w);return S}if("**"===x){for((g=n+1===o||n+2===o&&"*"===A)&&r._listeners&&(S=z(t,e,r,o,o)),a=(b=j(r)).length;a-- >0;)"_listeners"!==(h=b[a])&&("*"===h||"**"===h?(r[h]._listeners&&!g&&(w=z(t,e,r[h],o,o))&&(S?S.push.apply(S,w):S=w),w=z(t,e,r[h],n,o)):w=z(t,e,r[h],h===A?n+2:n,o),w&&(S?S.push.apply(S,w):S=w));return S}if(r[x]&&(S=z(t,e,r[x],n+1,o)),(v=r["*"])&&z(t,e,v,n+1,o),m=r["**"])if(n<o)for(m._listeners&&z(t,e,m,o,o),a=(b=j(m)).length;a-- >0;)"_listeners"!==(h=b[a])&&(h===A?z(t,e,m[h],n+2,o):h===x?z(t,e,m[h],n+1,o):((y={})[h]=m[h],z(t,e,{"**":y},n+1,o)));else m._listeners?z(t,e,m,o,o):m["*"]&&m["*"]._listeners&&z(t,e,m["*"],o,o);return S}function Q(t,e){var r,n,o=0,i=0,s=this.delimiter,a=s.length;if("string"==typeof t)if(-1!==(r=f(t).call(t,s))){n=new Array(5);do{n[o++]=u(t).call(t,i,r),i=r+a}while(-1!==(r=f(t).call(t,s,i)));n[o++]=u(t).call(t,i)}else n=[t],o=1;else n=t,o=t.length;if(o>1)for(r=0;r+1<o;r++)if("**"===n[r]&&"**"===n[r+1])return;var c,l=this.listenerTree;for(r=0;r<o;r++)if(l=l[c=n[r]]||(l[c]={}),r===o-1)return l._listeners?("function"==typeof l._listeners&&(l._listeners=[l._listeners]),l._listeners.push(e),!l._listeners.warned&&this._maxListeners>0&&l._listeners.length>this._maxListeners&&(l._listeners.warned=!0,k.call(this,l._listeners.length,c))):l._listeners=e,!0;return!0}function H(t,e,r,n){for(var o,i,s,a,c=j(t),u=c.length,f=t._listeners;u-- >0;)o=t[i=c[u]],s="_listeners"===i?r:r?p(r).call(r,i):[i],a=n||"symbol"===_(i),f&&e.push(a?s:s.join(this.delimiter)),"object"===_(o)&&H.call(this,o,e,s,a);return e}nction Z(t,e,r){if(!0===r)i=!0;else if(!1===r)o=!0;else{if(!r||"object"!==_(r))throw TypeError("options should be an object or true");var o=r.async,i=r.promisify,s=r.nextTick,a=r.objectify}if(o||s||i){var u=e,f=e._origin||e;if(s&&!E)throw Error("process.nextTick is not supported");void 0===i&&(i="AsyncFunction"===e.constructor.name),(e=._async=!0,e._origin=f}return[e,a?new J(this,t,e):this]}.prototype.off=X.EventEmitter2=X,X.prototype.listenTo=function(t,e,r){if("object"!==_(t))throw TypeError("target musts be an object");var n=this;function o(e){if("object"!==_(e))throw TypeError("events must be an object");var o,i=r.reducers,s=q.call(n,t);o=-1===s?new B(n,t,r):n._observers[s];for(var a,c=j(e),u=c.length,f="function"==typeof i,l=0;l<u;l++)a=c[l],o.subscribe(a,e[a]||a,f?i:i&&i[a])}return r=I(r,{on:void 0,off:void 0,reducers:void 0},{on:W,off:W,reducers:V}),O(e)?o(N(e)):o("string"==typeof e?N(e.split(/\s+/)):e),this},X.prototype.stopListeningTo=function(t,e){var r=this._observers;if(!r)return!1;var n,o=r.length,i=!1;if(t&&"object"!==_(t))throw TypeError("target should be an object");for(;o-- >0;)n=r[o],t&&n._target!==t||(n.unsubscribe(e),i=!0);return i},X.prototype.delimiter=".",X.prototype.setMaxListeners=X.prototype.getMaxListeners=function(){return this._maxListeners},X.prototype.event="",X.prototype.once=function(t,e,r){return this._once(t,e,!1,r)},X.prototype.prependOnceListener=function(t,e,r){return this._once(t,e,!0,r)},X.prototype._once=X.prototype.many=function(t,e,r,n){return this._many(t,e,r,!1,n)},X.prototype.prependMany=X.prototype._many=X.prototype.emit=function(){if(!this._events&&!this._all)return!1;this._events||R.call(this);var t,e,r,n,o,i,s=arguments[0],a=this.wildcard;if("newListener"===s&&!this._newListener&&!this._events.newListener)return!1;if(a&&(t=s,"newListener"!==s&&"removeListener"!==s&&"object"===_(s))){if(r=s.length,L)for(n=0;n<r;n++)if("symbol"===_(s[n])){i=!0;break}i||(s=s.join(this.delimiter))}var c,f,l=arguments.length;if(this._all&&this._all.length)for(n=0,r=(c=u(f=this._all).call(f)).length;n<r;n++)switch(this.event=s,l){case 1:c[n].call(this,s);break;case 2:c[n].call(this,s,arguments[1]);break;case 3:c[n].call(this,s,arguments[1],arguments[2]);break;default:c[n].apply(this,arguments)}if(a)c=[],z.call(this,c,t,this.listenerTree,0,r);else{if("function"==typeof(c=this._events[s])){switch(this.event=s,l){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(e=new Array(l-1),o=1;o<l;o++)e[o-1]=arguments[o];c.apply(this,e)}return!0}c&&(c=u(c).call(c))}if(c&&c.length){if(l>3)for(e=new Array(l-1),o=1;o<l;o++)e[o-1]=arguments[o];for(n=0,r=c.length;n<r;n++)switch(this.event=s,l){case 1:c[n].call(this);break;case 2:c[n].call(this,arguments[1]);break;case 3:c[n].call(this,arguments[1],arguments[2]);break;default:c[n].apply(this,e)}return!0}if(!this.ignoreErrors&&!this._all&&"error"===s)throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");return!!this._all},X.prototype.emitAsync=function(){if(!this._events&&!this._all)return!1;this._events||R.call(this);var t,e,r,n,o,i,s=arguments[0],a=this.wildcard;if("newListener"===s&&!this._newListener&&!this._events.newListener)return c.resolve([!1]);if(a&&(t=s,"newListener"!==s&&"removeListener"!==s&&"object"===_(s))){if(n=s.length,L)for(o=0;o<n;o++)if("symbol"===_(s[o])){e=!0;break}e||(s=s.join(this.delimiter))}var f,l=[],d=arguments.length;if(this._all)for(o=0,n=this._all.length;o<n;o++)switch(this.event=s,d){case 1:l.push(this._all[o].call(this,s));break;case 2:l.push(this._all[o].call(this,s,arguments[1]));break;case 3:l.push(this._all[o].call(this,s,arguments[1],arguments[2]));break;default:l.push(this._all[o].apply(this,arguments))}if(a?(f=[],z.call(this,f,t,this.listenerTree,0)):f=this._events[s],"function"==typeof f)switch(this.event=s,d){case 1:l.push(f.call(this));break;case 2:l.push(f.call(this,arguments[1]));break;case 3:l.push(f.call(this,arguments[1],arguments[2]));break;default:for(r=new Array(d-1),i=1;i<d;i++)r[i-1]=arguments[i];l.push(f.apply(this,r))}else if(f&&f.length){if(f=u(f).call(f),d>3)for(r=new Array(d-1),i=1;i<d;i++)r[i-1]=arguments[i];for(o=0,n=f.length;o<n;o++)switch(this.event=s,d){case 1:l.push(f[o].call(this));break;case 2:l.push(f[o].call(this,arguments[1]));break;case 3:l.push(f[o].call(this,arguments[1],arguments[2]));break;default:l.push(f[o].apply(this,r))}}else if(!this.ignoreErrors&&!this._all&&"error"===s)return arguments[1]instanceof Error?c.reject(arguments[1]):c.reject("Uncaught, unspecified 'error' event.");return c.all(l)},X.prototype.on=function(t,e,r){return this._on(t,e,!1,r)},X.prototype.prependListener=X.prototype.onAny=function(t){return this._onAny(t,!1)},X.prototype.prependAny=X.prototype.addListener=X.prototype.on,X.prototype._onAny=X.prototype._on=function(t,e,r,n){if("function"==typeof t)return this._onAny(t,e),this;if("function"!=typeof e)throw new Error("on only accepts instances of Function");this._events||R.call(this);var o,i=this;return void 0!==n&&(e=(o=Z.call(this,t,e,n))[0],i=o[1]),this._newListener&&this.emit("newListener",t,e),this.wildcard?(Q.call(this,t,e),i):(this._events[t]?("function"==typeof this._events[t]&&(this._events[t]=[this._events[t]]),r?this._events[t].unshift(e):this._events[t].push(e),!this._events[t].warned&&this._maxListeners>0&&this._events[t].length>this._maxListeners&&(this._events[t].warned=!0,k.call(this,this._events[t].length,t))):this._events[t]=e,i)},X.prototype.off=function(t,e){if("function"!=typeof e)throw new Error("removeListener only takes instances of Function");var r,n=[];if(this.wildcard){var o="string"==typeof t?t.split(this.delimiter):u(t).call(t);if(!(n=z.call(this,null,o,this.listenerTree,0)))return this}else{if(!this._events[t])return this;r=this._events[t],n.push({_listeners:r})}for(var i=0;i<n.length;i++){var s=n[i];if(r=s._listeners,O(r)){for(var a,c,f=-1,l=0,p=r.length;l<p;l++)if(r[l]===e||r[l].listener&&r[l].listener===e||r[l]._origin&&r[l]._origin===e){f=l;break}if(f<0)continue;if(this.wildcard)d(a=s._listeners).call(a,f,1);else d(c=this._events[t]).call(c,f,1);return 0===r.length&&(this.wildcard?delete s._listeners:delete this._events[t]),this._removeListener&&this.emit("removeListener",t,e),this}(r===e||r.listener&&r.listener===e||r._origin&&r._origin===e)&&(this.wildcard?delete s._listeners:delete this._events[t],this._removeListener&&this.emit("removeListener",t,e))}return this.listenerTree&&K(this.listenerTree),this},X.prototype.offAny=function(t){var e,r=0,n=0;if(t&&this._all&&this._all.length>0){for(r=0,n=(e=this._all).length;r<n;r++)if(t===e[r])return d(e).call(e,r,1),this._removeListener&&this.emit("removeListenerAny",t),this}else{if(e=this._all,this._removeListener)for(r=0,n=e.length;r<n;r++)this.emit("removeListenerAny",e[r]);this._all=[]}return this},X.prototype.removeListener=X.prototype.off,X.prototype.removeAllListeners=X.prototype.listeners=function(t){var e,r,n,o,i,s=this._events;if(void 0===t){if(this.wildcard)throw Error("event name required for wildcard emitter");if(!s)return[];for(o=(e=j(s)).length,n=[];o-- >0;)"function"==typeof(r=s[e[o]])?n.push(r):n.push.apply(n,r);return n}if(this.wildcard){if(!(i=this.listenerTree))return[];var a=[],c="string"==typeof t?t.split(this.delimiter):u(t).call(t);return z.call(this,a,c,i,0),a}return s&&(r=s[t])?"function"==typeof r?[r]:r:[]},X.prototype.eventNames=X.prototype.listenerCount=X.prototype.hasListeners=function(t){if(this.wildcard){var e=[],r="string"==typeof t?t.split(this.delimiter):u(t).call(t);return z.call(this,e,r,this.listenerTree,0),e.length>0}var n=this._events,o=this._all;return!!(o&&o.length||n&&(void 0===t?j(n).length:n[t]))},X.prototype.listenersAny=X.prototype.waitFor=function(t,e){var r=this,n=_(e);return"number"===n?e={timeout:e}:"function"===n&&(e={filter:e}),G((e=I(e,{timeout:0,filter:void 0,handleError:!1,Promise:c,overload:!1},{filter:W,Promise:U})).Promise,(function(n,o,i){function s(){var i=a(e);if(!i||i.apply(r,arguments))if(r.off(t,s),e.handleError){var c,f=arguments[0];f?o(f):n(u(c=T.apply(null,arguments)).call(c,1))}else n(T.apply(null,arguments))}i((function(){r.off(t,s)})),r._on(t,s,!1)}),{timeout:e.timeout,overload:e.overload})};var Y=X.prototype;s(X,{defaultMaxListeners:{get:function(){return Y._maxListeners},set:function(t){if("number"!=typeof t||t<0||i(t))throw TypeError("n must be a non-negative number");Y._maxListeners=t},enumerable:!0},once:{value:writable:!0,configurable:!0}}),s(Y,{_maxListeners:{value:10,writable:!0,configurable:!0},_observers:{value:null,writable:!0,configurable:!0}}),void 0===(o=function(){return X}.call(e,r,e,t))||(t.exports=o)}()}).call(this,r(129))},function(t,e,r){t.exports=r(235)},function(t,e,r){t.exports=r(247)},,function(t,e){}��  　\u2028\u2029\ufeff"},function(t,e,r){t.exports=r(225)},function(t,e,r){"use strict";Object.defineProperty(e,"__s(t){return{error:!0,value:t}}}},function(t,e,r){var n=r(172),o=Array.prototype;t.exports=function(t){var e=t.slice;return t===o||t instanceof Array&&e===o.slice?n:e}},function(t,e,r){t.exports=r(174)},fureturn s.slice()}}(t):o(n(t))}},fu;var n=r(1);t.exports=n.Symbol},function(t,e,r){r(4)("iterator")},functol":typeof t},i(e)}t.exports=i},function(t,e,r){r(233);var n=start:a(1),end:a(2),trim:a(3)}},function(t,e,r){t.exports=r(234)},fut(n)?Object(a.a)(t,e):void 0}}},function(t,e,r){t.exports=r(241)},fu&i(t.prototype,e),r&&i(t,r),t}},function(t,e,r){t.exports=r(254)},function(t,e,r){t.exports=r(256)},function(t,e,r){t.exports=r(265)},function(t,e,r){"use strict";Object.defineProperty(e,"__(mbol.iterator]() method.")}()}},,,function(t,e,r){t.exports=r(305)},function(t,e,r){var n,o,i=r(5),s=r(35),a=t.exports={};function c(){throw new Error("se?clearTimeout:u}catch(t){o=u}}();var l,d=[],p=!1,h=-1;function v(){p&&l&&(p=!1,l.length?d=i(l(t,e){this.fun=t,this.a y(t,e)),1!==d.lhis.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prlisteners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwocess.ch)},a.umask=function(){return 0}},function(t,e,r){var n=r(131);t.exports=n},function(t,e,r){var n=r(132),o=Array.prototype;t.exports=function(t){var e=t.concat;return t===o||t instanceof Array&&e===o.concat?n:e}},function(t,e,r){r(77);var n=r(t,e)}catch(r){n[t]=e}return e}},function(t,e,r){r(136);varsetInterval:a(o.setInterval)})},function(t,e,r){t.exports=r(138)},function(t,e,r){var n=r(139);t.exports=n},function(t,e,r){r(140);var nNaN:function(t){return t!=t}})},function(t,e,r){t.exports=r(142)},function(t:!o},{defineProperties:r(82)})},function(t,e,r){t.exports=r(146)},function(t,e,r){var n=r(147);t.exports=n},function(t,e,r){var n=r(148),o=Array.prototype;t.exports=function(t){var e=t.filter;return t===o||t instanceof Array&&e===o.filter?n:e}},function(t,e,r){r(149);var n=r(8);t.exports=n("Array").filter},function(t,e,r){"use strict";var n=r(0),o=r(26).filter,i=r(32),s=r(14),a=i("filter"),c=s("filter");n({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){t.exports=r(151)},function(t("Promise").prototype.finally)},function(t,e,r){t.exports=r(171)},function(t,e,r){var n=r(99);t.exports=n},function(t,e,r){r(173);var n=rf,l[p]);return n.length=f,n}})},function(t,e,r){var n=r(175);t.exports=n},function(t,e,r){var n=r(176),o=Array.prototype;t.exports=function(t){var e=t.indexOf;return t===o||t instanceof Array&&e===o.indexOf?n:e}},function(t,e,r){r(177);var n=r(8ngth>1?arguments[1]:void 0)}})},function(t,e,r){t.exports=r(179)},function(t,e,r){var n=r(180);t.exports=n},function(t,e,r){r(181);var n=r(1);t.exports=n.Number.isFinite},function(t,e,r){r(0)({target:"Numbeeturn"number"==typeof t&&n(t)}},function(t,e,r){var n=r(184);t.exports=n},function(t,e,r){var n=r(185),o=Array.prototype;t.exports=function(t){var e=t.splice;return t===o||t instanceof Array&&e===o.splice?n:e}},function(t,e,r){r(186);var n=r(+2];return m.length=y-n+r,f}})},function(t,e,r){var n=r(188);t.exports=n},function(t,e,r){r(189);var n=(h,p)||(r[p]=h[p]);return r}:f},function(t,e,r){var n=r(192);t.exports=n},function(t,e,r){r(193);var :function(t){return i(o(t))}})},function(t,e,r){t.exports=r(195)},function(t,e,r){var n=r(196);t.exports=n},function(t,e,r){r(102);var n=r(1);t.exports=n.Object.getOwnPropertySymbols},function(t,e,r){t.exports=r(198)},function(t)}))},{getOwnPropertyNames:i})},function(t,e,r){t.exports=r(202)},function(t,e,r){var n=r(203);t.exports=n},function(t,e,r){r(204);var n=r(1);t.exports=n.Reflect.ownKeys},function(t,e,r){r(0)({target:"Reflei.f;return r?e.concat(r(t)):e}},function(t,e,r){t.exports=r(207)},function(t,e,r){r(208);var ni.set,clearImmediate:i.clear})},function(t,e,r){var n=r(105);t.exports=n},functiosyncIterator")},function(t,e){},function(t,e,r){r(4)("hasInstance")},function(t,e,r){r(4)("isConcatSpreadable")},function(t,e,r){r(4)("match")},function(t,e,r){r(4)("matchAll")},function(t,e,r){r(4)("replace")},function(t,e,r){r(4)("search")},function(t,e,r){r(4)("species")},function(t,e,r){r(4)("split")},function(t,e,r){r(4)("toPrimitive")},function(t,e,r){r(4)("unscopables")},function(t,e,r){t.exports=r(223)},function(t228),r(229),r(230),t.exports=n},function(t,e,r){r(4)("asyncDispose")},function(t,e,r){r(4)("dispose")},function(t,e,r){r(4)("observable")},functition(t,e,r){r(4)("replaceAll")},function(t,e,r){t.exports=r(232)},function(t,e,r){var n=r(111);t.exports=n},function(t,e,r){r(0)({target:"Array",stat:!0},{isArray:r(24)})},function(t,e,r){var n=r(111);t.exports=n},function(t"in e||i.hasOwnProperty(n(e))}},function(h||s.hasOwnProperty(o(t))?n:e}},function(t,e,r){var n=r(244);t.exports=n},function(t,e,r){r(245);var n=r(8length>1?arguments[1]:void 0)}},function(t,e,r){var n=r(248);t.exports=n},function(t,e,r){var n=r(249),o=Array.prototype;t.exports=function(t){var e=t.map;return t===o||t instanceof Array&&e===o.map?n:e}},function(t,e,r){r(250);var n=r(8);t.exports=n("Array").map},function(t,e,r){"use strict";var n=r(0),o=r(26).map,i=r(32),s=r(14),a=i("map"),c=s("map");n({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){var n=r(252);t.exports=n},function(t,e,r){r(253);v{return(new Date).getTime()}})},function(t:!o},{defineProperty:r(15).f})},function(tof String&&e===s.includes?o:e}},function(t,e,r){r(259);var n=r(8)ts[1]:void 0)}}),i("includes")},function(t,e,r){r(261);var n=r(8);./"[t](e)}catch(t){}}return!1}},function(tt.i}}),t.webpackPolyfill=1),t}},function(t,e,r){t.exports=r(271)},function(t,e,r){var n=r(272);t.exports=n},function(t,e,r){var n=r(273),o=Array.prototype;t.exports=function(t){var e=t.some;return t===o||t instanceof Array&&e===o.some?n:e}},function(t,e,r){r(274);var n=ngth>1?arguments[1]:void 0)}})},function(t,e,r){t.exports=r(276)},function(t,e,r){var n=r(277);t.exports=n},function(t,e,r){var n=r(278),o=Array.prototype;t.exports=function(t){var e=t.find;return t===o||t instanceof Array&&e===o.find?n:e}},function(t,e,r){r(279);var n=uments[1]:void 0)}}),i("find")},function(t,e,r){t.exports=r(281)},function(t,e,r){var n=r(282);t.exports=n},function(t,e,r){var n=r(283),o=Array.prototype;t.exports=function(t){var e=t.reverse;return t===o||t instanceof Array&&e===o.reverse?n:e}},function(t,e,r){r(284);var n=r(8h=this.length),i.call(this)}})},function(t,e,r){t.exports=r(286)},function(tr,e>>>0||(a.test(r)?16:10))}:s},function(t,e,r){t.exports=r(291)},function(t&&(s.prototype=e.prototype),s}},function(t,e,r){t.exports=r(297)},function(t!0,sham:!r(9)},{create:r(66)})},function(t,e,r){t.exports=r(301)},function(t,e,r){var n=r(112);t.exports=n},function(t,e,r){"use strict";r.eamEmbed",(function(){return H}));var n=r(49),o=r(28),i=r.n(o),s=r(124),a=r.n(s);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"coral-script",e=document.currentScript;if(!e&&t&&((e=document.getElementById(t))||(e=document.querySelector(".".concat(t)))),!e||!e.src)throw new Error("Current script not found");return a()(e.src)},u=r(5),f=r.n(u);var l=function(t){var e=t.document.querySelector('link[rel="canonical"]');return e?e.href:(console.warn("This page does not include a canonical link tag. Coral has inferred this story_url from the window object. Query params have been stripped, which may cause a single thread to be present across multiple pages."),function(t){var e;return t.location.origin||f()(e="".concat(t.location.protocol,"//")).call(e,t.location.host)}(t)+t.location.pathname)},d=r(125),p=r(10),h=r.n(p),v=r(51),m=r.n(v),y=r(35),g=r.n(y),b=r(118),w=r.n(b),S=r(119),_=r(120),x=r(123),A=r.n(x),M=r(22),O=r.n(M);var E=r(36),L=r.n(E),P=r(48),F=r.n(P),j=r(76),R=r.n(j);var C=function(t){t.on("stream.setCommentID",(function(t){var e,r,n,s,a=function(){var t,e,r,n,o,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=i.protocol,a=void 0===s?window.location.protocol:s,c=i.hostname,u=void 0===c?window.location.hostname:c,l=i.port,d=void 0===l?window.location.port:l,p=i.pathname,h=void 0===p?window.location.pathname:p,v=i.search,m=void 0===v?window.location.search:v,y=i.hash,g=void 0===y?window.location.hash:y;return m&&!R()(m,"?")?m="?".concat(m):"?"===m&&(m=""),R()(h,"/")||(h="/"+h),f()(t=f()(e=f()(r=f()(n=f()(o="".concat(a,"//")).call(o,u)).call(n,d?":".concat(d):"")).call(r,h)).call(e,m)).call(t,g)}({search:(e=L()(L()({},Object(o.parse)(location.search)),{commentID:t||void(t){void 0!==e[t]&&(s[t]=e[t])})),i.a.stringify(s,r))});window.history.pushState({},document.title,a)}));var e=function(e){var r=Object(o.parse)(location.search).commentID;t.emit("embed.setCommentID",r||"")};return windowoveEventListener("popstate",e)}},k=function(t){t.on("commentCount",(function(t){var e,r,n,o=document.querySelectorAll(f()(e=f()(r=f()(n="".concat(".coral-count","[data-coral-url='")).call(n,t.storyURL,"'], ")).call(r,".coral-count","[data-coral-id='")).call(e,t.storyID,"']"));h()(o).call(o,(function(e){var r,n;h()(r=e.querySelectorAll(".coral-count-number")).call(r,(function(e){e.innerHTML=t.number})),h()(n=e.querySelectorAlfunction(e){e.innerHTML=t.tstr(!r||r<0?0:+r,e.length)===e}var I=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.onAny((function(t,n){var o,i="";N()(o=["ready"]).call(o,t)?i=t:B(t,"viewer.")?i=t.substr("viewer.".length):r&&(B(t,"mutation.")||B(t,"fetch.")||B(t,"subscription."))&&(i=t),i&&e.emit(i,n)}))},U=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function(){var t=window.document.body.clientHeight;t!==e&&(window.parent.postMessage({sentinel:"amp",type:"embed-size",height:t>100?t:100},"heightChange",(function(){n()})),window.setInterval(n,r)};var D=function(t){return void 0!==t.CoralCommentEmbed},W=function(t,e){if(!D(window)&&document.querySelector(".coral-comment-embed")){var r,n=document.createElement("script");n.src=f()(r="".concat(t.rootURL,"/assets/js/commentEmbed.js?ts=")).call(r,e),n.className="coral-script",n.setAttribute("id","coralSingleCommentEmbedScript"),t.customCSSURL&&n.setAttribute("data-customCSSURL",t.customCSSURL),t.customFontsCSSURL&&n.setAttribute("data-customFontsCSSURL",t.customFontsCSSURL),n.async=!1,n.defer=!0,(document.head||docume){return void 0!==t.CoralCount},G=function(t,e){if(!V(window)&&document.querySelector(".coral-count")){var r,n=document.createElement("script");n.src=f()(r="".concat(t,"/assets/js/count.js?ts=")).call(r,e),n.className="coral-script",n.async=!1,n.defer=!0,(document.head||document.body).appendChild(n)}};function q(t,e,r){var n=function(t,e,r){tion(t){e(t[0].isIntersencti}}(t,(function(t){t&&(n(),e())}),r);return n}var z=/\/$/;var Q=function(){function t(e){var r=this;Object(S.a)(this,t),this.requestExpiryInterval=9e5,this.ts=Math.round(w()()/this.requestExpiryInterval)*this.requestExpiryInterval,this.ready=!1,this._rendered=!1,this._assetsPreloaded=!1,this.clearAutoRender=null,this.clearAutoPreload=null,this.onBootstrapConfigLoaded=[],this.config=e;var o=document.getElementById(e.id);if(!o)throw new Error("element ".concat(e.id," was not found"));this.element=o,this.loadBootstrapConfig(),this.streamEventEmitter=new n.EventEmitter2({wildcard:!0,maxListeners:1e3,delimiter:"."}),this.embedEventEmitter=e.eventEmitter,this.s"ready",(function(){r.ready=!0})),C(this.streamEventEmitter),k(this.streamEventEmitter),I(this.streamEventEmitter,this.embedEventEmitter,e.enableDeprecatedEvents),e.amp&&U(this.streamEventEmitter),G(e.rootURL,this.ts)tEmitter.emit("showPermalink")}),0),e.autoRender&&(e.commentID||!function(t){var e=O.a.getParser(t.navigator.userAgent),r=e.is(O.a.OS_MAP.iOS),n=e.is(O.a.OS_MAP.MacOS),o=e.is(O.a.BROWSER_MAP.ie),i=e.is(O.a.PLATFORMS_MAP.mobile),s=e.is(O.a.PLATFORMS_MAP.tablet);return{version:A()(e.getBrowserVersion()),supports:{intl:"undefined"!=typeof Intl,intlPluralRules:"undefined"!=typeof Intl&&Boolean(Intl.PluralRules),fetch:Boolean(t.fetch),intersectionObserver:"IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype,resizeObserver:"ResizeObserver"in t},ios:r,msie:o,mobile:i,tablet:s,macOS:n,iPadOS:n&&t.navigator.maxTouchPoints>1}}(window).supports.intersectionObserver?this.render():(this.clearAutoPreload=q(this.element,(function(){r.bootstrapConfig?r.preloadAssets():r.runAfterBootstrapConfigLoaded((function(){r.preloadAssets()}))}),{rootMargin:"1200px",threshold:1}),this.learAutoRender=null,r.render()}),{rootMargin:"100px",threshold:1})))}return Object(_.a)(t,[{key:"runAfnBootstrapConfigLoaded.push(t)}},{key:"onBootstrapConfigLoad",value:function(t){var e,r;this.bootstrapConfig=t,this.customCSSURL=this.config.customCSSURL||this.bootstrapConfig.customCSSURL,this.customFontsCSSURL=this.config.customFontsCSSURL||this.bootstrapConfig.customFontsCSSURL,this.disableDefaultFonts=this.config.disableDefaultFonts||this.bootstrapConfig.disableDefaultFonts;var n,o,i=(n=t.staticConfig.staticURI||this.config.rootURL,z.exec(n)?n:"".concat(n,"/"));(t.defaultFontsCSSURL&&(this.defaultFontsCSSURL=i+"".concat(t.defaultFontsCSSURL)),this.cssAssets=m()(e=t.assets.css).call(e,(function(t){return i+"".concat(t.src)})),this.jsAssets=m()(r=t.assets.js).call(r,(function(t){return i+"".concat(t.src)})),this.onBootstrapConfigLoaded)&&(h()(o=this.ocall(o,(function(t){return t()})),this.onBootstrapConfigLoaded=[])}},{key:"loadBootstrapConfig",value:function(){var t=this,e=arguments.length>0&&void 0!strapConfig.apply(t,argurn t.onBootstrapConfigLoad(e)};n.addEventListener("load",(function(){if(20ow e<3&&g()((function(){r(e+1)}),2e3+2e3*e),new Error("Loading bootstrap config failed");o(JSON.parse(this.responseText))})),n.open("GET","".concat(this.config.rootURL,"/embed/bootstrap")),n.send()}},{key:"preloadAssets",value:function(){this._assetsPreloaded||(this._assetsPreloaded=!0,this.clearAutoPreload&&(this.clearAutoPreload(),this.clearAutoPreload=null),this._preloadCSSAssets(),this._preloadJSAssets())}},{key:"_preloadCSSAssets",value:function(){var t=[];this.defaultFontsCSSURL&&!this.disableDefaultFonts&&t.push(this.defaultFontsCSSURL),this.customFontsCSSURL&&t.push(this.customFontsCSSURL),this.customCSSURL&&t.push(this.customCSSURL),t.push.apply(t,Object(d.a)(this.cssAssets)),h()(t).call(t,(function(t){var e=document.createElement("link");e.rel="preload",e.href=t,e.as="style",document.head.appendChild(e)}))}},{key:"_preloadJSAssets",value:function(){var t;h()(t=this.jsAssets).call(t,(function(t){var e=document.createElement("link");e.rel="preload",e.href=t,e.as="script",document.head.appendChild(e)}))}},{key:"on",value:function(t,e){return this.embedEventEmihis.embedEventEmitter.off(t,e)}},{key:"login",value:function(t){var e=this;this.ready?this.streamEventEmitter.emit("embed.login",t):this.stEmitter.emit("embed.login",t)}))}},{key:"logout",value:function(){var t=this;this.ready?this.streamEventEmitter.emit("embed.logout"):this.sntEmitter.emit("embed.logout")}))}},{key:"remove",value:function(){var t;if(this.clearAutoRender)return this.clearAutoRender(),void(this.clearAutoRender=null);if(!this._rendered)throw new Error("instance not mounted");if(!(null===(t=window.CoralStream)||void 0===t?void 0:t.attach))throw new Error("CoralStream Script not loaded");window.CoralStream.remove(this.element),this._rendered=!1}},{key:"attach",value:function(){var t;if(!(null===(t=window.CoralStream)||void 0===t?void 0:t.attach))throw new Error("CoralStream Script not loaded");if(!this.bootstrapConfig)throw new Error("Bootstrap config not loaded");window.CoralStream.attach({storyID:this.config.storyID,storyURL:this.config.storyURL,storyMode:this.config.storyMode,commentID:this.config.commentID,rootURL:this.config.rootURL,eventEmitter:this.streamEventEmitter,accessToken:this.config.accessToken,cssAssets:this.cssAssets,refreshAccessToken:this.config.refreshAccessToken,amp:this.config.amp,element:this.element,graphQLSubscriptionURI:this.config.graphQLSubscriptionURI,staticConfig:this.bootstrapConfig.staticConfig,customCSSURL:this.customCSSURL,customFontsCSSURL:this.customFontsCSSURL,disableDefaultFonts:this.disableDefaultFonts,locale:this.bootstrapConfig.locale,containerClassName:this.config.containerClassName,version:"8.7.1",defaultFontsCSSURL:this.defaultFontsCSSURL,customScrollContainer:this.config.customScrollContainer})}},{key:"render",value:function(){var t,e=this;if(!this._rendered)if(this.bootstrapConfig)if(this.preloadAssets(),this._rendered=!0,window.CoralStream)this.attach();else{var r=0;h()(t=this.jsAssets).call(t,(function(t){var n=document.createElement("script");n.onload=function(){++r===e.jsAssets.length&&e.attach()},n.src=t,document.head.appendChild(n)}))}else thisgLoaded((function(){e.renction(){return this._rendered}}]),t}();function H(t){var e=Object(o.parse)(location.search),r=new n.EventEmitter2({wildcard:!0,delimiter:"."});return t.events&&t.events(r),t.bodyClassName&&console.warn("Coral: `bodyClassName` has been deprecated. Use `containerClassName` instead."),new Q({id:t.id||"coral-embed-stream",storyID:t.storyID||e.storyID,storyURL:t.storyURL||e.storyURL||l(window),storyMode:t.storyMode||void 0,commentID:t.commentID||e.commentID,rootURL:t.rootURL||c(),eventEmitter:r,accessToken:t.accessToken,customCSSURL:t.customCSSURL,customFontsCSSURL:t.customFontsCSSURL,disableDefaultFonts:t.disableDefaultFonts,refreshAccessToken:t.refreshAccessToken,amp:t.amp,autoRender:t.autoRender,enableDeprecatedEvents:t.enableDeprecatedEvents,containerClassName:t.containerClassName||t.bodyClassName,customScrollContainer:t.customScrollContainer||void 0})}}]);
//# sourceMappingURL=embed.js.map