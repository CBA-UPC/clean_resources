![function(t,e,n){(function(e){var n="Expected a function",r="__lodash_hash_undefined__",o=1/0,i="[object Function]",c="[object GeneratorFunction]",a="[object Symbol]",u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/,f=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,d=/^\[object .+?Constructor\]$/,h="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,v=h||y||Function("return this")();var b,m=Array.prototype,g=Function.prototype,O=Object.prototype,j=v["__core-js_shared__"],w=(b=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",_=g.toString,E=O.hasOwnProperty,x=O.toString,P=RegExp("^"+_.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=v.Symbol,k=m.splice,D=B(v,"Map"),T=B(Object,"create"),I=S?S.prototype:void 0,C=I?I.toString:void 0;function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function R(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}otype.clear=A.prototype.delete=A.prototype.get=A.prototype.has=A.prototype.set=R.prototype.clear=R.prototype.delete=R.prototype.get=R.prototype.has=R.prototype.set=U.prototype.clear=U.prototype.delete=function(t){return q(this,t).delete(t)},U.prototype.get=function(t){return q(this,t).get(t)},U.prototype.has=U.prototype.set=var M=z(();Cache=U;var $=Array.isArray;exports=).call(this,n(14))},function(t,e,n){"use strict";var r=n(16),o=n.n(r),i=n(17),c=n.n(i),a=n(19).parse(window.location.search),u=a.cordialdebug||"defaultRules",s=a.cordialdebugmodule||"all",f={info:{info:1,error:1},error:{error:1},defaultRules:{}},l=function(){if(u in f)return f[u];return f.defaultRules}(),p=function(){eturn c()(t,[{key:"error",value:function(t){this.print(t,"error")}},{key:"log",value:,{key:"print",value:function(t,e){(function(t){if(t in l)return!0;return!1})(e)&&(s!==this.category&&"all"!==s||(console.log("%c[".concat(this.category,"] ").concat(e),"color: ".concat(e))),console.log(t)))}}]),t}();e.a=,function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var r={trackUrl:"",connectUrl:"",cookieDomain:"",autoIdentify:!1,cookieLife:365,autoTrack:!1,sameSiteDisable:!1,debug:!1};.a=r},function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n(11),o={key:void 0},i=function(){return Object(r.a)(o)};e.a=o},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n(11),o={id:void 0},i=function(t){return Object(r.a)(o)},c=function(t){o.id=t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));var r=n(7),o=n.n(r),i=n(0),c=n.n(i),a=n(11);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var s={cID:void 0,msID:void 0,mcID:void 0,linkID:void 0},f={cID:void 0,msID:void 0,mcID:void 0,linkID:void 0},l=function(){f=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},s)},p=d=function(){var t={};return Object.keys(f).map((function(e){null!=f[e]&&""!=f[e]&&(t[e]=f[e])})),t},h=function(t){f.cID=c()(t,"cID"),f.msID=c()(t,"msID"),f.mcID=c()(t,"mcID"),f.linkID=c()(t,"linkID")}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var r=n(7),o=n.n(r),i=(n(0),n(11));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var a={},u=s=function(t){a=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a,{},t)}},function(t,e,n){"use strict";(function(t){var r=n(30),o=n.n(r),i=n(16),c=n.n(i),a=n(17),u=n.n(a),s=n(0),f=n.n(s),l=n(31),p=n(37),d=n(12),h=n(36),y=n(34),v=n(3),b=n(1),m=["cb"],g=Object(b.a)("CM"),O=new(function(){function e(){c()(this,e),this.connected=!1,this.loaded=!1,this.working=!1,this.queue=[],this.time=new Date,this.debugMode=!1}return u()(e,[{key:"init",value:function(){var t=this;Object(p.a)(this)?(t.connected=!0,Object(d.a)(()):g.error("please make sure to call cordial 'connect' first")}},{key:"iframeLoaded",value:,{key:"process",value:function(){var t=this;if(0!==this.queue.length){g.log("processing command");var e=[];this.queue.forEach((),this.queue=[];var n=h.a.validate(e).filter((function(t){return"action"in t&&t.action(),"prep"in t&&t.prep(),!t.local})).map((function(t){delete t.action;var e=Object(v.b)().get("key","acc");return t.actionId=e+"_"+Object(l.v4)(),t})).map((function(t){t.cb;return o()(t,m)}));n.length>0&&Object(y.a)(n).then((function(e){t.debugMode&&n.forEach((function(t){console.log("type: "+f()(t,"type")),console.log("action ID: "+f()(t,"actionId")),console.log("data: ",t),console.log("")}))})),this.queue.length>0&&this.process()}}},{key:"loadInitialQueue",value:,{key:"addCall",value:function(){this.queue.push(this.prepActionArgs(arguments)),this.connected&&this.loaded&&t(this.process.bind(this))}},{key:"prepActionArgs",value:function(t){var e=Array.prototype.slice.call(t);return Array.isArray(e[0])?e[0]:[e]}}]),e}());e.a=O}).call(this,n(21).setImmediate)},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(32),o=n.n(r),i={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t in this?this[t]:e}},c=,function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(5),c=n(4),a=n(2),u=n(8),s=n(10),f=n(1),l=Object(f.a)("CM"),p=n(3);n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return g}));var d,h=n(19),y=!0,v={init:function(t){var e=Object(a.b)(),n=o()(t,"bid"),r=o()(t,"cID"),f=o()(t,"identified"),p=o()(t,"storedData"),d=!1;if(Object(u.b)(p),n){Object(c.b)(n);var h=Object(i.b)();h.msID=o()(t,"msID"),h.mcID=o()(t,"mcID"),h.linkID=o()(t,"linkID"),h.cID=r,Object(i.d)(h),!f&&r||f&&f!==r?(d=!0,l.log("will autoidentify")):l.log("NO autoidentify"),d&&(s.a.addCall("contact",{cid:t.cID},{}),s.a.addCall("setidentified",t.cID)),e.autoTrack&&s.a.addCall("event","pageView")}},forget:function(t){var e=o()(t,"bid");Object(i.a)(),Object(c.b)(e)},savedCookieData:;function b(){d.contentWindow.postMessage({action:"forget"},"*")}function m(t){d.contentWindow.postMessage({action:"storeData",data:t},"*")}.a=function(t){var e,n,r,i;!function(t){var e=window.addEventListener?"addEventListener":"attachEvent";(0,window[e])("attachEvent"===e?"onmessage":"message",(function(e){var n=e.data);if(n){var r=o()(n,"cordialAction");o()(n,"cordialMsg")&&(r in v?(delete n.cordialAction,delete n.cordialMsg,v[r](n),y&&(t(),y=!1)):console.warn("no proper actions sent to Cordial parent"))}}),!1)}(t),e=document.createElement("iframe"),n=Object(p.b)(),r=Object(a.b)(),i={trackKey:n.key,cookieLife:r.cookieLife,connectUrl:r.connectUrl,cookieDomain:r.cookieDomain,sameSiteDisable:r.sameSiteDisable},e.src=r.connectUrl+"/connect.html?"+h.stringify(i),e.style.display="none",document.body.appendChild(e),d=e}},function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r=function(t){var e,n;e="cordial_debug",n=JSON.stringify(t),localStorage.setItem(e,n)},o=function(t){var e,n=(e="cordial_debug",localStorage.getItem(e));return n?JSON.parse(n):null},i=function(t){var e;e="cordial_debug",localStorage.removeItem(e)}},function(t,e,n){"use strict";var r=n(2),o=n(3),i=n(35),c=n.n(i);e.a=function(t){var e=Object(r.b)(),n=Object(o.b)(),i=e.trackUrl,a=n.key;if(!(t.length<1)){var u="".concat(i,"/call.php?ac=").concat(a);return c.a.post(u,t,{headers:{"Content-Type":"text/plain"}})}}},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(9),c=n.n(i),a=n(7),u=n.n(a),s=n(1),f=n(4),l=n(3),p=n(5),d=n(8),h=n(13);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var v=function(t,e,n){var r=Object(f.a)(),i=Object(l.b)(),c=Object(h.a)(),a=o()(c,"debug",!1);return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){u()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},{type:t,meta:{accountKey:i.key,bid:r.id,debug:a},cb:e},{},n)};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){u()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=Object(s.a)("event action"),O={create:function(t){var e=o()(t,"[3]",(function(){return 1})),n=o()(t,"[1]"),r=o()(t,"[2]",{}),i=Object(f.a)(),c=Object(p.b)(),a=Object(l.b)(),u=Object(d.a)();if("function"==typeof r){var s=r(u,i,c,a);r=void 0===s?{}:s}"pageView"===n&&(r=m({},r,{},{refererUrl:document.referrer,url:window.location.href}));var h=m({},{properties:r},{},c),y=v("event",e,{eventName:n,eventData:h});return this.validate(y,e)?y:null},validate:function(t,e){return"string"!=typeof t.eventName||0===t.eventName.length||t.eventName.length>=41?(g.error("no proper event name was set"),e("no proper event name was set"),!1):"object"===c()(t.eventData.properties)||(g.error("no proper data was set"),e("event data should be blank or an object"),!1)}},j=Object(s.a)("cartitem action"),w={create:function(t){var e=o()(t,"[3]",(function(){return 1})),n=v("cart",e,{method:o()(t,"[1]")});return this.validate(n,e)?n:null},validate:function(t,e){return"clear"===t.method||(j.error('cart action must be "clear"'),e('cart action must be "clear"'),!1)}},_=Object(s.a)("cartitem action"),E={create:function(t){var e=o()(t,"[3]",(function(){return 1})),n=v("cartitem",e,{method:o()(t,"[1]"),data:o()(t,"[2]")});return this.validate(n,e)?n:null},validate:function(t,e){return-1===["add","remove","clear","set"].indexOf(t.method)?(_.error('cartitem action must be "add", "remove", "set", "clear"'),e('cartitem action must be "add" or "remove"'),!1):"object"===c()(t.data)||(_.error("data must be an array or object"),e("data must be an array or object"),!1)}},x={create:function(t){var e=o()(t,"[4]",(function(){return 1})),n=Object(f.a)(),r=Object(l.b)(),i=Object(p.b)(),c=Object(d.a)(),a=o()(t,"[1]"),u=o()(t,"[2]",{}),s=o()(t,"[3]",{upsert:!0});if("function"==typeof u){var h=u(c,n,i,r);u=void 0===h?{}:h}var y=v("contact",e,{auth:a,data:u,options:s});return this.validate(y,e)?("email"in a&&(a.email=a.email.toLowerCase()),y):null},validate:function(t,e){return"object"!==c()(t.data)?(s.a.error("no proper data was set"),e("event data should be blank or an object"),!1):"object"===c()(t.options)||(s.a.error("no proper options were set"),e("options should be blank or an object"),!1)}},P=n(12),S={create:function(t){return{type:"forget",local:!0,action:cb:o()(t,"[1]",(function(){return 1}))}},validate:function(){return!0}};function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}ar T=Object(s.a)("cartitem action"),I={create:function(t){var e=Object(p.c)(),n=o()(t,"[3]",(function(){return 1})),r=v("order",n,{method:o()(t,"[1]"),data:D({},o()(t,"[2]",{}),{},e)});return this.validate(r,n)?r:null},validate:function(t,e){return-1===["add"].indexOf(t.method)?(T.error('order action must be "add"'),e('order action must be "add"'),!1):"object"===c()(t.data)||(T.error("order data must be an array or object"),e("order data must be an array or object"),!1)}},C=n(2),A={create:function(t){return{local:!0,action:function(){console.table(Object(l.b)()),console.table(Object(f.a)()),console.table(Object(p.b)()),console.table(Object(d.a)()),console.table(Object(C.b)())}}},validate:function(){return!0}},R=Object(s.a)("IdgraphProvider"),U={shortName:"lt",validate:function(t){return"accountKey"in t?"bid"in t||(R.error("bid is missing"),!1):(R.error("accountKey is missing"),!1)},load:function(t){var e=t.accountKey,n=t.bid,r="https://i.liadm.com/s/67723?bidder_id=1945&bidder_uuid=".concat(n,"&bid=").concat(n,"&account=").concat(e),o=document.createElement("img");o.src=r,o.width=o.height="0",o.style="position: absolute; visibility: hidden; display: none;",document.getElementsByTagName("body")[0].appendChild(o)}},N=Object(s.a)("IdgraphProvider"),F={shortName:"td",validate:function(t){return"advertiserId"in t?"campaignId"in t?"accountKey"in t?"bid"in t||(N.error("bid is missing"),!1):(N.error("accountKey is missing"),!1):(N.error("campaignId is missing"),!1):(N.error("advertiserId is missing"),!1)},load:function(t){var e=t.advertiserId,n=t.campaignId,r=t.accountKey,o=t.bid,i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://static.traversedlp.com/v1/retargeting.js",i.onload=function(){TraverseRetargeting.init({advertiserId:e}),TraverseRetargeting.include({campaignId:n,advertiserProperties:{accountKey:r,bid:o}})};var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(i,c)}},L=function(t){if(t===U.shortName)return U;if(t===F.shortName)return F;throw new Error("Your IdentityPlus provider is not correct")};ar B=Object(s.a)("identityplus action"),M={create:function(t){var e=o()(t,"[1]",{}),n=o()(t,"[2]",{}),r={accountKey:Object(l.b)().key,bid:Object(f.a)().id},n);try{if(!L(e).validate(r))return B.error("data for identityplus is not valid"),null}catch(t){return B.error("error loading identityplus",t),null}return{local:!0,action:}},H={create:function(t){return{local:!0,action:function(){var e=o()(t,"[1]");if("set"===e){var n=o()(t,"[2]");Object(h.c)(n)}else Object(h.b)()}}},validate:function(){return!0}},z=n(33),$=n(19).parse(window.location.search),J=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(t in $))return e;var n=$[t];return Object(z.isNull)(n)?e:n},K={create:function(t){return{local:!0,action:function(){var e=o()(t,"[1]","").split(","),n={};e.map((function(t){var e=J(t);null!=e&&(n[t]=e)})),Object(P.d)(n),Object(d.b)(n)}}},validate:function(){return!0}},V={create:function(t){return{local:!0,action:function(){var e=o()(t,"[1]");Object(P.c)(e)}}},validate:function(){return!0}},G={create:function(t){var e=o()(t,"[3]",(function(){return 1})),n=o()(t,"[1]"),r=o()(t,"[2]",{}),i=v("idgraph",e,{graph:n,options:r});return this.validate(i,e)?i:null},validate:function(t,e){return"object"!==c()(t.graph)?(s.a.error("no proper graph data was set"),e("graph data should be blank or an object"),!1):"object"===c()(t.options)||(s.a.error("no proper options were set"),e("options should be blank or an object"),!1)}},W=Object(s.a)("ActionManager"),X={eventHandlers:{},validate:function(t){var e=this;return t.map((function(t){var n=o()(t,"0");return n in e.eventHandlers?e.eventHandlers[n].create(t):(W.error("actionItem event not found: "),W.error(n),!1)})).filter(()},attachEventHandler:;X.attachEventHandler("event",O),X.attachEventHandler("cart",w),X.attachEventHandler("cartitem",E),X.attachEventHandler("contact",x),X.attachEventHandler("forget",S),X.attachEventHandler("order",I),X.attachEventHandler("debug",A),X.attachEventHandler("param-store",K),X.attachEventHandler("setconfig",H),X.attachEventHandler("setidentified",V),X.attachEventHandler("graphidentify",G),X.attachEventHandler("identityplus",M);e.a=X},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(3),c=n(2),a=n(13),u=n(1),s=Object(u.a)("connect"),f=(e.a=function(t){var e=t.queue.shift();if(!e)return!1;var n=o()(e,"[0][0]"),r=o()(e,"[0][1]"),u=o()(e,"[0][2]");if("connect"!==n)return s.error("you must connect to Cordial before using any other method"),!1;i.a.key=r,c.a.trackUrl=f(o()(u,"trackUrl","//cordial.events-handling.service")),c.a.connectUrl=f(o()(u,"connectUrl","//track.cordial.io")),c.a.cookieDomain=o()(u,"cookieDomain","track.cordial.io"),c.a.autoIdentify=o()(u,"autoIdentify",!1),c.a.cookieLife=o()(u,"cookieLife",365),c.a.autoTrack=o()(u,"autoTrack",!1),c.a.sameSiteDisable=o()(u,"sameSiteDisable",!1),c.a.debug=o()(u,"debug",!1);var l,p=a.a();if(p){for(var d in l="You are on DEBUG mode",console.log("%c ".concat(l),"font-size: 120%; color: red"),c.a)d in p&&(c.a[d]=p[d]);t.debugMode=!0}return!0},function(t){var e=t.toLowerCase();return e.startsWith("http")?e:e.startsWith("//")?window.location.protocol+e:window.location.protocol+"//"+e})},function(t,e,n){"use strict";n.r(e);n(39);var r=n(10),o=n(1);Object(o.a)("base").log("cordial.2.0.1");var i=window.CordialObject,c=window[i].q,a=window[i].l;r.a.loadInitialQueue(c),r.a.time=a,window[i]=r.a.addCall.bind(r.a),r.a.init(),"cordialLoaded"in window&&"function"==typeof window.cordialLoaded&&window.cordialLoaded()},ull,e)}}}]);
//# sourceMappingURL=track.v2.js.map