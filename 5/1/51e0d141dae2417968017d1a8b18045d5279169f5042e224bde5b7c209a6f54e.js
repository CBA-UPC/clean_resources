/*! Copyright © 2015, 2020, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.18 */
/*v1.18.0.1*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(b}function M(a){return q(a,"functionZ(c}var c=this,u=a.domain,d=a.secure,e=encodeURIComponent,g=decodeURIComponent;
c.set=function(a,b,g,f){f||(b=e(b));document.cookie=e(a)+"="+b+";domain="+u+";path=/"+(g?";expires="+I(g).toGMTString():"")+(d?";secure;sameSite=none":"");return c};c.remoc};c.removeA}};c.get=function(a,c){a=new RegExp("(?:^|; )"+e(a).replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]+)");a=document.cookie.match(a);if(a){var b=a[1];b=c?b:g(b)}return b};c.getA}}function F(a,b,c){function d(c){for(var b={},f="",y=0,d=a.get(c+y,!0);d;)f+=d,y++,d=a.get(c+y,!0);f=decodeURIComponent(f);try{b=JSON.parse(f)}catch(ia){}return}}function e(c,b,f){b=JSON.stringify(b);var d="{}"===b,y=0,e=0;for(b=encodeURIComponent(b);a.get(c+y,!0);)a.remove(c+y),y++;if(!d)for(d=b.substr(3E3*e,3E3);d;)a.set(c+e,d,x(f)?365:f,!0),e++,d=b.substr(3E3*e,3Ear f,v;b+=".";var K=b+"store.p.",S=b+"store.s.";c=ea[c]||c||"def";this.g)};this.ss};this.removeAs};this.exportDaa};n()}function L(a,)}function d(a,b){var c=(new Date).getTime();b=JSON.parse(b);var d;b&&b.e&&b.e<c?localStorage.removeItem(a):
d=b&&b.v;return d}b=R[b]||b||"def";var n=a+"."+b+".",e=this,g=sessionStorage,r=localStorage;e.get=function(a){if(a){a=n+a;var b=g.getItem(a)||r.getItem(a);a=d(a,b)}else{var f={},e=n.length)});a=f}return a};e.set=function(a,b,c){a=n+a;if(N(b)){var d=c?r:g;b=JSON.stringify({v:b,e:c?I(c).getTime():void 0});d.setItem(a,b)}else g.removeItem(a),r.removeItem(a);return e};e.removeAe}}function fa(){var a=
this,b=arguments;a.get=function(a){var c;if(a)for(var d=0;d<b.length;d++){var e=b[d].get(a);N(e)&&(c=e)}else{var g=b[0].get();for(a=1;a<b.length;a++)h(b[a].get]});c=g}return c};a.sa};a.removeAa}}function ga(}function u(a){var b=(new F(f,g,void 0)).exportData(),c=!1;h)});retu}}var e=a.storageType,g=a.cprefix;if(0>ca("cookie cookie-secure cookie-key-value cookie-key-value-secure cookie-key-value-with-fallback cookie-key-value-secure-with-fallback".split(" "),e))throw"Invalid storage type: "+e;var r=0===e.indexOf("cookie-key-value")?C:F,q=-1!==e.indexOf("-secure"),w=-1!==e.indexOf("-with-fallback");
a=a.cookie_domain||d.location.hostname.replace(/^www\./i,"");var f=new Z({domain:a,secure:q})})();this.createBuilder=b}if(!d.mmsystem){var V=d.console||{log:function(){},error:function(){}},R={"mmparams.p":"p","mmparams.d":"d",mmengine:"e"},ea={p:"mmparams.p",d:"mmparams.d",e:"mmengine"},
ha=new function(ction r(b,c){var k=b&&b.Packages||[],m=k.length;if(0<m){d.mmInitCallba)};
for(var e=0;e<k.length;e++)u("mmpack."+e,0===k[e].indexOf("//")?k[e]:a.baseContentUrl+k[e])}else c)}function w(a,c,e){a=(J[a-1]=c)&&c.PersistData||[];var k=c&&c.SystemData&&c.SystemData[0]&&c.SystemData[0].ResponseId||0;if(k>=L){for(var m=a.length-1;0<=m;m--)l.setParam(a[m].Name,a[m].Value,p.persistent,a[m].Expiration);L=k}if(H(c,"mmcoreResponse")&&B(d,"mmcore"))try{Function(c.mmcoreResponse).call(d)}catch(aa){V.log(aa)}b("response",
c);e(!!c);b("responseExecuted",c);D=!0}function f(a,b){var c="mmrequest."+E;(function(a,b){d.mmRequestCallbacks[a]=function(k){I(c);var m=!1,f=function(){m=!0;1===a?r(k,function(){w(a,k,b);var c=e(document.location.search).origin,m=d.parent;c&&m&&m.postMessage&&m.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),c)}):w(a,k,b)};if(0!==T.length){for(var G=0;G<T.length;G++)T[G](k,f);m||(D=!0)}else f();delete d.mmRequestCallbacks[a]}})(E,b);u(c,a,{onerror:"window['mmRequestCallbacks']["+
E+"](false);"});E}function S(}}var c={},k=K(a);U||(c.pageid=k.pageid);c.jsver=k.jsver;b("uv",)});b("uat",)});b("ids",)});b("rul",)});return c}function y(){if(B(d,"mmcore")){var b=d.mmcore;b.server=a.srv;l.CGRequestInternal=l.CGRequest;l.CGReque)};var c=b._Tag;b._Tag=function(d){if(-1===d.indexOf(a.srv))c.apply(b,arguments);
else{b._Clear.call(b);var k=l.mergeParams(X,S(d));ba=D;U||(D=b._async);l.CGRequestInternal(W,k);D=ba;X=W=null;U=!1}};var e=b.SetCookie;b.SetCook)is.version="1.18";var l=this,J=[],E=1,D=!1,A={},R={},t=[],z=[],p={persistent:0,deferredRequest:1,request:2,page:3},T=[],L=0,W,X,ba,U=!1;this.baseStorage=(new ga(a)).createBuilder();this.baseStorage.storeStrategy=p;this.mergeParac};
this.CGReques};
this.getResponsJ};this.setPars};this.getPar)};this.removePars};this.l};this.disabs};this.enabs};this.validateRespons)};(function(a){function b(){if(1!==
z[p.persistent].get("disabled")&&1!==z[p.page].get("disabled")||1<E)H(a,"mmcoreUrl")&&a.mmcoreUrl?P(a):(F(a),l.CGRequest(void 0,{})}ha});var g=e(document.location.search);if("1"!==g.disabled){l.calcCookieDomain=l.cookie_domain||d.location.hostname.replace(/^www\./i,"");c(a.async);z[p.persistent]=l.baseStorage("ls");z[p.page]=v();t[p.persistent]=l.baseStorage("p");t[p.deferredRequest]=l.baseStorage("d");t[p.request]=v();t[p.page]=v();A.request=[];A.response=
[];A.responseExecuted=[];var k=e(document.referrer).pruh,g=g.pruh,n=d.mmpruh,q=l.getParam("pruh",0),r=(k?k+",":"")+(g?g+",":"")+(n?n+",":"")+(q?q:"");r?(d.mmInitCallba)},u("MM.PRUH",a.baseContentUrl+"utils/pruh.js")):f()}})(a);return this}({
 storageType:'cookie-key-value-secure',
 cprefix:'mmapi',
 domain:'autocompara.com.br',
 baseContentUrl:'//service.maxymiser.net/platform/us/api/',
 cookie_domain:location.hostname.match(/^[\d.]+$|/)[0] || ('.' + (location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/) || [location.hostname])[0]),
 srv:'//service.maxymiser.net/cg/v5us/?',
 async:true,
 mmcoreUrl:'',
 mmcoreCookieDomain:'',
 mmcoreCprefix:'',
 beforeInit:function( getParam, setParam, loader ){ /* custom code placeholder */ },
 beforeReque },
 afterResponse:function( getParam, setParam, genInfo ){ /* custom code placeholder */ },
 afterResponseExecuti }
});d.mmsystem=n}}(ha)}})(window);
