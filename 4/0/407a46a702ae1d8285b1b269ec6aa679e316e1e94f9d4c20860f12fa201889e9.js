!function(){"use strict";var t={5837:function(t,e,n){n(560),t.exports=,9049:5362:function(t,e,n){n(560);var r=Object.prototype.hasOwnProperty,o="~";t.create&&(i.prototype=Object.create(null),(new i).__proto__||(o=!1)),s.prototype.eventNames=s.prototype.listeners=s.prototype.listenerCount=s.prototype.emit=s.prototype.on=function(t,e,n){return c(this,t,e,n,!1)},s.prototype.once=s.prototype.removeListener=s.prototype.removeAllListeners=s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=o,s.EventEmitter=s,t.exports=s},492:3379:function(t){var e=[];xports=,569:9216:3565:6716:function(t){var e,n=(e=[],;ar o={singleton:null,singletonCounter:0};t.exports=,509:3550:767:5027:4328:5649:6648:926:8758:5773:5684:1880:5014:7697:2659:6420:5565:7136:71:3615:2739:6610:9989:3689:7215:2615:1236:2743:8844:6058:4849:9037:6812:7248:8506:4413:3457:6738:618:2297:9985:5266:981:8999:3931:734:6310:8702:8828:3841:2560:2474:2741:7518:3622:4948:9556:9385:5899:9152:4684:2713:4091:3430:,146,7578,5290,8700,3126,690,8732,8360,3043,4327,3691,4630,9525,5648,9834,4201,560,3429:function(t,e,n){var r=n(9989),o=n(9037),i=n(6058),a=n(5684),c=n(2560).f,u=n(6812),s=n(767),f=n(3457),l=n(3841),p=n(7136),v=n(6610),d=n(7697),h=n(3931),y="DOMException",g=i("Error"),m=i(y),b,w=b.prototype=m.prototype,x="stack"in new g(y),E="stack"in new m(1,2),O=m&&d&&Object.getOwnPropertyDescriptor(o,y),S=!(!O||O.writable&&O.configurable),_=x&&!S&&!E;r({global:!0,constructor:!0,forced:h||_},{DOMException:_?b:m});var j=i(y),A=j.prototype;if(A.constructor!==j)for(var R in h||c(A,"constructor",a(1,j)),p)if(u(p,R)){var I=p[R],T=I.s;u(j,T)||c(j,T,a(6,I.c))}}},e={}n.n,n.d,n.g(),n.o,n.nc=void 0,function(){n(560);var t,e=n(5362);n(3429)var o="function"==typeof(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID):function(){var t=Date.now(),e=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll(/[xy]/g,(function(n){var r=16*Math.random();return t>0?(r=Math.trunc((t+r)%16),t=Math.floor(t/16)):(r=Math.trunc((e+r)%16),e=Math.floor(e/16)),("x"===n?r:7&r|8).toString(16)}))},i=function(t,e,n){void 0===e&&(e={}),e.$reqID=o();var r,i=document.createElement("script"),c=function(t){var e="";for(var n in t)a.call(t,n)&&void 0!==t[n]&&null!==t[n]&&""!==t[n]&&(e+=e.length?"&":"",e+="".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(String(t[n]))));return e}(e);return c.length&&(t+="?".concat(c)),i.setAttribute("class","GSEA-script-requester"),i.setAttribute("defer",""),i.setAttribute("type","application/javascript"),i.setAttribute("src",t),i.setAttribute("referrerpolicy","strict-origin"),new Promise((function(o,a){i.addEventListener("error",(function(t){a(t)}));var c=function(r){(void 0===n||n.includes(r.origin))&&"object"==typeof r.data&&!0===r.data.gsea&&r.data.$reqID===e.$reqID&&(u(),"OK"===r.data.status?o(r.data.payload):a({message:"non-OK response",uri:t,params:e,response:r.data}))},u=function(){r&&clearTimeout(r),window.removeEventListener("message",c),i.remove()};window.addEventListener("message",c,{passive:!0}),document.head.append(i),r=setTimeout((function(){u(),a({message:"script request timed out",uri:t,params:e})}),3e4)}))},a=Object.prototype.hasOwnProperty;var c=/(^\/+)|(\/+$)/;function u(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="";if(!t.length)return n;for(var r=0;r<t.length;r++){var o=t[r];"string"==typeof o&&o&&(n+="".concat(n?"/":"").concat(o.replace(c,"")))}return n}Object.prototype.hasOwnProperty;var s=n(3379),f=n.n(s),l=n(6716),p=n.n(l),v=n(569),d=n.n(v),h=n(3565),y=n.n(h),g=n(9216),m=n.n(g),b=n(492),w={};w.setAttributes=y(),w.insert=d().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=m();f()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals;var x,E,O,S,_,j,A,R=6e4,I,T={debug:!1,loginURI:"https://login.gaijin.net",embedURI:"https://embed.gaijin.net",embed:{template:"default",startPage:"default"},autoLogin:!0,sessionPolling:!0,sessionPollingInterval:6e5};function P(t){var n=this,o=null==t?void 0:t.onLoad;(null==t?void 0:t.onLoad)&&(t.onLoad=void 0);var a,c,s,f=O(O({},T),t),l={jwt:f.jwt||void 0,uid:f.uid||void 0},p=!1,v=0,d=!1,h=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.debug&&console.info.apply(console,A(["[GSEA] (".concat((new Date).toUTCString(),") ").concat(t)],e,!1))},y=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];console.error.apply(console,A(["[GSEA] (".concat((new Date).toUTCString(),") ").concat(t)],e,!1))},g=new e,m=function(t){if((origin===window.location.origin||origin===f.loginURI||origin===f.embedURI)&&"object"==typeof t.data){var e=t.data,n=e.action,r=e.gsea,o=j(e,["action","gsea"]);if(r){switch(n){case"login":case"register":v=Date.now(),w(n,o),x(),P();break;case"refetch":E();break;case"close":L.close();break;case"ext_auth":v=0}h(String(n),o)}}},b=function(t){var e=l;l={jwt:t.jwt||void 0,rt:t.rt||void 0,uid:t.uid||void 0,uname:t.uname||void 0,status:t.status||void 0,secondary:t.secondary||void 0},(null==e?void 0:e.jwt)===(null==l?void 0:l.jwt)&&(null==e?void 0:e.rt)===(null==l?void 0:l.rt)&&(null==e?void 0:e.uid)===(null==l?void 0:l.uid)&&(null==e?void 0:e.uname)===(null==l?void 0:l.uname)&&(null==e?void 0:e.status)===(null==l?void 0:l.status)&&(null==e?void 0:e.secondary)===(null==l?void 0:l.secondary)||g.emit("change",t,e)},w=function(t,e){b(e),g.emit(t,e),L.close()},x,E=function(){v=Date.now(),x();var t={j:l.jwt,u:l.uid};return void 0===l.status&&f.queryContext&&!p&&(t.q=r(f.queryContext)),p=!0,i(u(f.loginURI,"/api/gsea/fetch"),t,[window.location.origin]).then()).catch((function(t){var e=t.message,n=j(t,["message"]);y(String(e),n)}))},P=function(){var t,e;f.sessionPolling&&!a&&(a=setTimeout(E,Math.max(R,f.sessionPollingInterval||R)+(t=0,e=500,Math.floor(Math.random()*(e-t+1)+t))))},D=function(){c&&(c.remove(),c=null),s&&(s.remove(),s=null,g.emit("close")),window.removeEventListener("message",m)},L={get status(){return l.status||void 0},get secondary(){return l.secondary||void 0},get sessionRequested(){return p},get refreshToken(){return l.rt||void 0},get jwt(){return l.jwt||void 0},set jwt(t){var e=l.jwt;l=O(O({},l),{jwt:t}),e!==t&&E()},get uid(){return l.uid||void 0},set uid(t){var e=l.jwt;l=O(O({},l),{jwt:void 0,uid:t}),e!==t&&E()},get uname(){return l.uname||void 0},get sessionJW,get confi,open:function(t){return void 0===t&&(t=f.embed.startPage),S(n,void 0,void 0,(function(){var e,n;return _(this,(function(o){switch(o.label){case 0:return d||c||s?[2]:(d=!0,e=document.createElement("div"),c=e,e.classList.add("GSEA-Overlay"),(n=document.createElement("div")).classList.add("GSEA-Loader"),e.append(n),document.body.insertBefore(e,null),window.addEventListener("message",m,{passive:!0}),[4,Promise.resolve().then((function(){return i(u(f.loginURI,"/api/gsea/preopen"),{path:t,q:f.queryContext?r(f.queryContext):void 0})})).then((function(t){var n=f.embed.language?u(f.embedURI,f.embed.language,t.path):u(f.embedURI,t.path);n+="?st=".concat(t.token);var r=document.createElement("iframe");return s=r,r.setAttribute("src",n),r.setAttribute("allowtransparency","true"),r.setAttribute("referrerpolicy","strict-origin"),r.classList.add("GSEA-Wrapper"),"default"===f.embed.template&&r.classList.add("mobile"),new Promise((function(t,n){r.addEventListener("load",)),r.addEventListener("error",)),e.append(r)}))})).catch((function(t){var e=t.message,n=j(t,["message"]);y(String(e),n),D()})).finally())]);case 1:return o.sent(),[2]}}))}))},close,fetchSessionData,logout:function(){return l.jwt||l.uid?i(u(f.loginURI,"/api/gsea/logout"),{j:l.jwt,u:l.uid},[window.location.origin]).then((function(){var t=l;return l={},g.emit("change",l,t),g.emit("logout"),E()})).catch((function(t){var e=t.message,n=j(t,["message"]);y(String(e),n)})):Promise.resolve()},profileSecurityLink:function(){return u(f.loginURI,f.embed.language,"/profile/settings/security",l.uid)},on:g.on.bind(g),once:g.once.bind(g),off:g.off.bind(g)};o&&(Array.isArray(o)?o:[o]).forEach()),h("loaded"),f.autoLogin&&E().catch(I);var C=f.sessionPollingInterval;return window.addEventListener("blur",(function(){C=f.sessionPollingInterval,f.sessionPollingInterval=33e5}),{passive:!0}),window.addEventListener("focus",(function(){f.sessionPollingInterval=C,p&&f.sessionPolling&&Date.now()-v>=R&&E()}),{passive:!0}),L}(x=window)[E="GSEA"]||(x[E]=P(x["".concat(E,"_init")]))}()}();