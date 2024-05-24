/*! Copyright ? 2015, 2016, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.12 */
/*v1.12.0.1*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(c,C){tion L(a,b,e){try{l(a,"function")&&a.apply(b,e)}catch(h){P&&P.log(h)}}ction aa(a){f(!/^((cookie-key-value)|(cookie-key-value-secure))$/.test(a.type))throw"(mm module: storage) Invalid storage type: "+a.type;var c="cookie-key-value-secure"===a.type,h=a.cprefix+"."+(a.namespace||"def")+".",l=h.replace(/\./g,
"\\."),m=new I({domain:a.domain,secure:c});this.get=this.set=this.removeAll=this.testStorage=function(){var a=(""+Math.random()).substring(0,5);m.set(h+"tst",a,10);a=m.get(h+"tst",!0)===a?1:0;
m.remove(h+"tst");return a}}function ba(a){cookie)|(cookie-secure))$/.test(a.type))throw"(mm module: storage) Invalid storage type: "+a.type;var q,x,z=a.cprefix+".",J=z+"store.p.",C=z+"store.s.",A=new I({domain:a.domain,secure:"cookie-secure"===a.type}),t=a.namespace||
"def";this.get=this.set=this.removeAll=this.testStorage=function(){var a=(""+Math.random()).substring(0,5);A.set(z+"tst",a,10);a=A.get(z+"tst",!0)===a?1:0;A.remove(z+"tst");return a};this.exportData=h()}if(!c.mmsystem){var P=c.console||{log:function(){},error:function(){}},T=new function(a){ion w(){var d="mmRequestCallbacks["+H+"]",b={},e=c.screen;b.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:e.width,scrh:e.height,clrd:e.colorDepth,cok:v[n.persistent].testStorage()};b.lver="1.12";b.jsncl=d;b.ri=H;b.lto=-(new Date).getTimezoneOffset();return b}n A(){if(y(c,
"mmcore")){var b=c.mmcore;b.server=a.srv;f.CGRequestInternal=f.CGRequest;f.CGRequest=var g=b._Tag;b._Tag=function(d){if(-1==d.indexOf(a.srv))g.apply(b,arguments);else{b._Clear.call(b);var c=f.mergeParams(R,ea(d));Z=E;O||(E=b._async);f.CGRequestInternal(Q,c);E=Z;R=Q=C;O=!1}};var e=b.SetCookie;b.SetCookie=}function t(a){return a||c.location.hostname.replace(/^www\./i,"")}function r(a,b,c){var d="";
0<b.length&&"."!=b.substring(b.length-1)&&(d=".");b=b+d+c;d=a.get(b);l(d,"string")&&d&&(f.setParam(c,d,n.persistent,365),a.remove(b))}function U(a){var b=y(c,"mmcore")&&c.mmcore.cookie_domain?c.mmcore.cookie_domain:K(a,"mmcoreCookieDomain")?a.mmcoreCookieDomain:a.cookie_domain;a=y(c,"mmcore")&&c.mmcore.cprefix?c.mmcore.cprefix:K(a,"mmcoreCprefix")?a.mmcoreCprefix:a.cprefix+".";b=new I({domain:t(b)});r(b,a,"pd");r(b,a,"srv");r(b,"","mmid")}function ca(a){var b=f.getParam,d=L(a.beforeInit,{},[b,d,{getParam:b,setParam:d,validateResponses:f.validateResponses,disable:function(){F[n.page].set("disabled",1)},setAsync:e}]);V()||(f.on("request",,f.on("response",function(c){L(a.afterResponse,{},[b,d,c])}),f.on("responseExecuted",)}function da(a){c.mmcoreInitCallback=function(b){U(a);A();f.CGRequest(function(){l(b,"function")&&b.apply(c.mmcore,arguments)},{});delete c.mmcoreInitCallback};
"local"!==a.mmcoreUrl&&h("mmcoreIntegration",a.mmcoreUrl)}function V(){return 1==F[n.persistent].get("disabled")||1==F[n.page].get("disabled")}this.version="1.12";var f=this,X=[],H=1,E=!1,B={},fa={},v=[],F=[],n={persistent:0,deferredRequest:1,request:2,page:3},N=[],Y=0,Q,R,Z,O=!1,S=null!==a.storageType.match(/.*-secure$/);this.baseStorage=function(){var b=t(a.cookie_domain),c=a.cprefix+"\\.store\\.p\\.",e=a.cprefix+"\\.store\\.s\\.";var p=function(c){return function(d){var e={p:"mmparams.p",d:"mmparams.d",
e:"mmengine"};return new ba({type:c,namespace:e[d]?e[d]:d,domain:b,cprefix:a.cprefix})}};var f=function(c){return function(d){var e={"mmparams.p":"p","mmparams.d":"d",mmengine:"e"};return new aa({type:c,namespace:e[d]?e[d]:d,domain:b,cprefix:a.cprefix})}};if(a.storageType.match(/cookie-key-value($|-secure$)/)){var h=p("cookie");var m=f(a.storageType);p=h().exportData();var n=!1;k(p,function(a,b){var c=m(b);k(a,function(a,b){n=!0;var d=a.e;d=(d=parseInt(d))?Math.round(Math.abs(((new Date).getTime()-
d)/864E5)):d;c.set(b,a.v,0<=d?d:30)})});n&&(p=new I({domain:b,secure:S}),p.removeAll(c),p.removeAll(e));return m}h=p(a.storageType);m=f("cookie-key-value");p=new I({domain:b,secure:S});p=p.getAll(a.cprefix+"\\.",!0);var l={};k(p,function(a,b){var d=b.split(/\./);if(2<d.length&&"store"!=d[1]){a=l[d[1]];a||(a=m(d[1]),l[d[1]]=a);var c=h(d[1]);b=b.substring((d[0]+"."+d[1]+".").length);a=a.get(b);c.set(b,a,30)}});k(l,;return h}();this.baseStorage.storeStrategy=n;this.baseStorage.isSecure=
S;this.mergeParams=this.CGRequest=function(d,e){d=d||e=e||{};c.mmRequestCallbacks=c.mmRequestCallbacks||{};b("request");var g=f.mergeParams(w(),f.mergeParams(f.mergeParams(v[n.persistent].get(),f.mergeParams(v[n.deferredRequest].get(),f.mergeParams(v[n.page].get(),
v[n.request].get()))),m(location.search))),h=[],l=a.srv;e=f.mergeParams(g,e);k(e,;v[n.deferredRequest].removeAll();v[n.request].removeAll();x(l+h.join("&"),d);return this};this.getResponses=this.setParam=function(a,b,c,e){v[c].set(a,b,e);return this};this.getParam=this.removeParam=this.on=
this.disable=this.enable=this.validateResponses=function(a){l(a,"function")&&N.push(a)};(function(a){function b(){ca(a);V()||(K(a,"mmcoreUrl")&&a.mmcoreUrl?da(a):(U(a),f.CGRequest(C,{})))}k(a,;var d=m(document.location.search);if(1!=d.disabled){f.calcCookieDomain=t(f.cookie_domain);e(a.async);F[n.persistent]=f.baseStorage("ls");F[n.page]=z();v[n.persistent]=
f.baseStorage("p");v[n.deferredRequest]=f.baseStorage("d");v[n.request]=z();v[n.page]=z();B.request=[];B.response=[];B.responseExecuted=[];var l=m(document.referrer).pruh,d=d.pruh,u=c.mmpruh,q=f.getParam("pruh",0),r=(l?l+",":"")+(d?d+",":"")+(u?u+",":"")+(q?q:"");r?(c.mmInitCallback=h("MM.PRUH",a.baseContentUrl+"utils/pruh.js")):b()}})(a);return this}({
 storageType:'cookie-key-value',
 cprefix:'mmapi',
 domain:'dyn.com',
 baseContentUrl:'//service.maxymiser.net/platform/us/api/',
 cookie_domain: ('.' + (location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/) || [location.hostname])[0]),
 srv:'//service.maxymiser.net/cg/v5us/?',
 async:false,
 mmcoreUrl:'',
 mmcoreCookieDomain: '',
 mmcoreCprefix:'',
 beforeInit:function( getParam, setParam ){   },
 beforeRequest:
 afterResponse:function( getParam, setParam, genInfo ){   },
 afterResponseExecution:
}
);c.mmsystem=new T)}})(window);
