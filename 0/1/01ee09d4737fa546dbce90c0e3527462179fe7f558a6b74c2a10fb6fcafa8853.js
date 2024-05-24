<!DOCTYPE html><script>
(function(){'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k=this||self;function n(a){return a};var p,w;a:{for(var ca=["CLOSURE_FLAGS"],z=k,A=0;A<ca.length;A++)if(z=z[ca[A]],null==z){w=null;break a}w=z}var da=w&&w[610401301];p=null!=da?da:!1;function ea(){var a=k.navigator;return a&&(a=a.userAgent)?a:""}var B;const fa=k.navigator;B=fa?fa.userAgentData||null:null;function C(a){return p?B?B.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function E(a){return-1!=ea().indexOf(a)};function F(){return p?!!B&&0<B.brands.length:!1}function G(){return F()?C("Chromium"):(E("Chrome")||E("CriOS"))&&!(F()?0:E("Edge"))||E("Silk")};function ha(a,b){Array.prototype.forEach.call(a,b,void 0)};function H(a){H[" "](a);return a}H[" "]=function(){};var ia=-1!=ea().toLowerCase().indexOf("webkit")&&!E("Edge");!E("Android")||G();G();E("Safari")&&(G()||(F()?0:E("Coast"))||(F()?0:E("Opera"))||(F()?0:E("Edge"))||(F()?C("Microsoft Edge"):E("Edg/"))||F()&&C("Opera"));class ja{}class ka{}Object.freeze(new ja);Object.freeze(new ka);function la(a){var b=window;b.addEventListener&&b.addEventListener("load",a,!1)};var I;const ma={};function na(a){return a instanceof J&&a.constructor===J?a.g:"type_error:SafeHtml"}class J{constructor(a){this.g=a}toString(){return this.g.toString()}};var oa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function K(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{H(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch{return!1}}function pa(a=!1){const b=[k.top],c=[];let d=0,f;for(;f=b[d++];){a&&!K(f)||c.push(f);try{if(f.frames)for(let e=0;e<f.frames.length&&1024>b.length;++e)b.push(f.frames[e])}catch{}}return c}function qa(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}function ra(a=document){return a.createElement("img")};function sa(a){k.google_image_requests||(k.google_image_requests=[]);const b=ra(k.document);b.src=a;k.google_image_requests.push(b)};let L=null;var ta=()=>{if(!L)b:{var a=pa();for(var b=0;b<a.length;b++)try{const c=a[b].frames.google_esf;if(c&&K(c)){L=c;break b}}catch(c){}L=null}(a=L)?((b=a.esf_propArray)||(b=a.esf_propArray={}),a=b):a=null;return a?.[2]};var M=window;var ua=/#(R?S)-(.*)/,za=/^(\d+)-(.*)/;class Aa{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Ba=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Ca=class{constructor(a,b){this.g=a;this.h=b}},Da=class{constructor(a,b){this.url=a;this.l=!!b;this.depth=null}};let N=null;function Ea(){const a=k.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Fa(){const a=k.performance;return a&&a.now?a.now():null};var Ga=class{constructor(a,b){var c=Fa()||Ea();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const P=k.performance,Ha=!!(P&&P.mark&&P.measure&&P.clearMarks),Q=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=Ha){var b;if(null===N){N="";try{a="";try{a=k.top.location.hash}catch(c){a=k.location.hash}a&&(N=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=N;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Ia(a){a&&P&&Q()&&(P.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),P.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class Ja{constructor(){var a=window;this.h=[];this.i=a||k;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=Q()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new Ga(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;P&&Q()&&P.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(Fa()||Ea())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;P&&Q()&&P.mark(b);!this.g||2048<
this.h.length||this.h.push(a)}}};function R(a,b){const c={};c[a]=b;return[c]}function Ka(a,b,c,d,f){const e=[];qa(a,function(h,q){(h=La(h,b,c,d,f))&&e.push(q+"="+h)});return e.join(b)}
function La(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const e=[];for(let h=0;h<a.length;h++)e.push(La(a[h],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Ka(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))}function Ma(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function Na(a,b){let c="https://pagead2.googlesyndication.com"+b,d=Ma(a)-b.length;if(0>d)return"";a.g.sort(function(e,h){return e-h});b=null;let f="";for(let e=0;e<a.g.length;e++){const h=a.g[e],q=a.h[h];for(let l=0;l<q.length;l++){if(!d){b=null==b?h:b;break}let g=Ka(q[l],a.i,",$");if(g){g=f+g;if(d>=g.length){d-=g.length;c+=g;f=a.i;break}b=null==b?h:b}}}a="";null!=b&&(a=f+"trn="+b);return c+a}class S{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function T(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
var Pa=class{constructor(a=null){this.m=U;this.h=a;this.g=null;this.i=!1;this.o=this.j}j(a,b,c,d,f){f=f||"jserror";let e;try{const t=new S;var h=t;h.g.push(1);h.h[1]=R("context",a);b.error&&b.meta&&b.id||(b=new Aa(b,{message:T(b)}));if(b.msg){let m=b.msg;null==m.substring&&(m=`b/320546888 ${typeof m} ${m}`);h=t;var q=m.substring(0,512);h.g.push(2);h.h[2]=R("msg",q)}var l=b.meta||{};b=l;if(this.g)try{this.g(b)}catch(m){}if(d)try{d(b)}catch(m){}d=t;l=[l];d.g.push(3);d.h[3]=l;d=k;l=[];b=null;do{var g=
d;if(K(g)){var r=g.location.href;b=g.document&&g.document.referrer||null}else r=b,b=null;l.push(new Da(r||""));try{d=g.parent}catch(m){d=null}}while(d&&g!=d);for(let m=0,va=l.length-1;m<=va;++m)l[m].depth=va-m;g=k;if(g.location&&g.location.ancestorOrigins&&g.location.ancestorOrigins.length==l.length-1)for(r=1;r<l.length;++r){var x=l[r];x.url||(x.url=g.location.ancestorOrigins[r-1]||"",x.l=!0)}var u=l;let O=new Da(k.location.href,!1);g=null;const Z=u.length-1;for(x=Z;0<=x;--x){var v=u[x];!g&&Ba.test(v.url)&&
(g=v);if(v.url&&!v.l){O=v;break}}v=null;const Wa=u.length&&u[Z].url;0!=O.depth&&Wa&&(v=u[Z]);e=new Ca(O,v);if(e.h){u=t;var y=e.h.url||"";u.g.push(4);u.h[4]=R("top",y)}var aa={url:e.g.url||""};if(e.g.url){var ba=e.g.url.match(oa),D=ba[1],wa=ba[3],xa=ba[4];y="";D&&(y+=D+":");wa&&(y+="//",y+=wa,xa&&(y+=":"+xa));var ya=y}else ya="";D=t;aa=[aa,{url:ya}];D.g.push(5);D.h[5]=aa;Oa(this.m,f,t,this.i,c)}catch(t){try{Oa(this.m,f,{context:"ecmserr",rctx:a,msg:T(t),url:e&&e.g.url},this.i,c)}catch(O){}}return!0}};function Oa(a,b,c,d=!1,f){if((d?a.g:Math.random())<(f||.01))try{let e;c instanceof S?e=c:(e=new S,qa(c,(q,l)=>{var g=e;const r=g.j++;q=R(l,q);g.g.push(r);g.h[r]=q}));const h=Na(e,"/pagead/gen_204?id="+b+"&");h&&sa(h)}catch(e){}}function Qa(){var a=U,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}class Ra{constructor(){this.g=Math.random()}};let U,V;const W=new Ja;var Sa=()=>{window.google_measure_js_timing||(W.g=!1,W.h!=W.i.google_js_reporting_queue&&(Q()&&ha(W.h,Ia),W.h.length=0))};(a=>{U=a??new Ra;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Qa();V=new Pa(W);V.g=()=>{};V.i=!0;"complete"==window.document.readyState?Sa():W.g&&la(()=>{Sa()})})();var Ta=a=>{V.g=b=>{ha(a,c=>{c(b)})}};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ua(a){a=null===a?"null":void 0===a?"undefined":a;if(void 0===I){var b=null;var c=k.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch(d){k.console&&k.console.error(d.message)}I=b}else I=b}a=(b=I)?b.createHTML(a):a;return new J(a,ma)};var Va;if(Va=ia){var X="IFRAME",Xa=document;X=String(X);"application/xhtml+xml"===Xa.contentType&&(X=X.toLowerCase());Va="srcdoc"in Xa.createElement(X)}var Ya=Va;function Za(a,b){a.open("text/html","replace");b=Ua(String(b));a.write(na(b));a.close()};var $a=a=>{var b=pa(!0).find(c=>!!c.google_reactive_sra_lookup)?.google_reactive_sra_lookup;return b?b[a]:(b=ta())?b[a]:null};(a=>{try{const b=/\/(r\d+|dev)\/r\d+\/zrt_lookup\.html/.exec(a.location.pathname);b&&b[1]&&Ta([c=>{c.shv=b[1]}])}catch(b){}})(window);var ab=()=>{var a=(ua.exec("#"+M.name)||ua.exec(M.location.href))?.[2];if(a&&(a=decodeURIComponent(a),a=za.exec(a))&&(a=+a[1],!isNaN(a)&&(a=$a(a)))){a=a.creative;let c=null;try{c=M.frameElement}catch(d){}var b;if(b=c)try{b=K(c.contentWindow)}catch(d){b=!1}b?(b=c,Ya?(a=Ua(a),b.srcdoc=na(a)):(b=b.contentWindow)&&Za(b.document,a)):Za(M.document,a)}},Y=V;let bb;
try{Y.h&&Y.h.g?(bb=Y.h.start((200).toString(),3),ab(),Y.h.end(bb)):ab()}catch(a){let b=!0;try{Ia(bb),b=Y.o(200,new Aa(a,{message:T(a)}),void 0,void 0)}catch(c){Y.j(217,c)}if(b)window.console?.error?.(a);else throw a;};}).call(this);
</script>
