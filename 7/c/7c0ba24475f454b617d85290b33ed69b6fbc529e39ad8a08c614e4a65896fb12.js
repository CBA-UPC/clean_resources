(function(){'use strict';var q;var ba="function"==typeof Object.defineProperties?Object.defineProperty:
var da=ca(this);v("Symbol",;
v("Symbol.iterator",;
function fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ha="function"==typeof Object.assign?Object.assign:
v("Object.assign",function(a){return a||ha});
var ia="function"==typeof Object.create?Object.create:ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?null}var na=ja;
qa.prototype.D=function(a){this.h=a};
qa.prototype.return=
qa.prototype.C=
v("Reflect.setPrototypeOf",;
v("Promise",;
v("WeakMap",;
v("Map",;
v("String.prototype.endsWith",;
v("Object.setPrototypeOf",;
v("Array.prototype.find",;
v("String.prototype.startsWith",;
v("Number.isFinite",;
v("Math.trunc",;
v("Object.values",;
v("Object.is",;
v("Array.prototype.includes",;
v("String.prototype.includes",;
v("Set",;
v("Number.MAX_SAFE_INTEGER",;
v("Number.isInteger",;
v("Number.isSafeInteger",;
v("Number.isNaN",;
v("Array.prototype.entries",;
v("Array.prototype.keys",;
v("Array.prototype.values",;
v("Array.from",;
v("Object.entries",;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D=this||self;var Oa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Ya(a){return a}
;Xa(Za,Error);Za.prototype.name="CustomError";var $a;Xa(ab,Za);ab.prototype.name="AssertionError";;function cb(){}
;var eb=Array.prototype.indexOf?fb=Array.prototype.forEach?gb=Array.prototype.some?function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c&&!(e in d&&b.call(void 0,d[e],e,a));e++);
};
;var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");;var vb;;xb.prototype.toString=function(){return this.g};
var zb={},yb={};Ab("");function Bb(a){this.g=a}
Bb.prototype.toString=
var Cb={};var Db=String.prototype.trim?function(a){return a.trim()}:Eb=/&/g,Fb=/</g,Gb=/>/g,Hb=/"/g,Ib=/'/g,Jb=/\x00/g,Kb=/[\x00&<>"']/;function Lb(a){this.g=a}
Lb.prototype.toString=function(){return this.g.toString()};
var Nb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Qb={},Rb=new Lb("about:invalid#zClosurez",Qb);var Sb={};function Tb(a){this.g=a}
Tb.prototype.toString=function(){return this.g.toString()};
var Ub=new Tb("",Sb);
var Yb=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),Xb=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Wb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Zb=/\/\*/;;var ec={};function fc(a){this.g=a}
fc.prototype.toString=function(){return this.g.toString()};var gc=Ja(610401301,!1),hc=Ja(572417392,!0);var jc,kc=D.navigator;jc=kc?kc.userAgentData||null:null;;;function pc(a){this.g=a}
pc.prototype.toString=function(){return this.g.toString()};var qc=/^[\w+/_-]+[=]{0,2}$/;function rc(){var a=D.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&qc.test(a)?a:"":""}
;;var vc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");var Bc=/#|$/;;;;Fc[" "]=function(){};var Gc=mc()?!1:G("Opera"),Hc=nc(),Ic=G("Edge"),Jc=Ic||Hc,Kc=G("Gecko")&&!(-1!=ic().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Lc=-1!=ic().toLowerCase().indexOf("webkit")&&!G("Edge");function Mc(){var a=D.document;return a?a.documentMode:void 0}
var Rc;a:{var Sc="",Tc=);
Tc&&(Sc=Tc?Tc[1]:"");if(Hc){var Uc=Mc();if(null!=Uc&&Uc>parseFloat(Sc)){Rc=String(Uc);break a}}Rc=Sc}var Vc=Rc,Wc;if(D.document&&Hc){var Xc=Mc();Wc=Xc?Xc:parseInt(Vc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Ec()||G("iPod"),$c=G("iPad");!G("Android")||oc();oc();var ad=G("Safari")&&!(oc()||(mc()?0:G("Coast"))||(mc()?0:G("Opera"))||(mc()?0:G("Edge"))||(mc()?lc("Microsoft Edge"):G("Edg/"))||(mc()?lc("Opera"):G("OPR"))||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(Ec()||G("iPad")||G("iPod"));var bd={},cd=null;
;var ed="undefined"!==typeof Uint8Array,fd=!Hc&&"function"===typeof btoa;var hd=!hc,id=!hc;var jd=0,kd=0;;;var sd;sd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({Ge:1,Ee:2,De:4,Je:8,Ie:16,He:32,te:64,Le:128,Be:256,Ae:512,Fe:1024,ye:2048,Ke:4096,ze:8192})));var td=sd?
var xd=sd?
var vd=sd?function(a){return a[sd]|0}:zd=sd?function(a){return a[sd]}:function(a){return a.ra},wd=sd?
function Bd(a,b){wd(b,(a|0)&-14591)}
;var Ed={},Fd={};var Md,Nd=!hc;var Pd,Qd=[];wd(Qd,55);Pd=Object.freeze(Qd);Object.freeze(new function(){});
Object.freeze(new function(){});;;var Wd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Yd(a,b){b=!!b;if(!Xd(a))throw Td("int64");if("string"===typeof a)Xd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=String(b):(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),Zd(a)||(qd(a),a=pd()));else if(b)Xd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Zd(b)?a=b:(ld(a),a=pd()));else if(Xd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){ld(a);b=jd;var c=kd;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
;var ge;;;;;;K.prototype.toJSON=
K.prototype.clone=
K.prototype.fc=Ed;K.prototype.toString=
;var Ke=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");q=Le.prototype;q.clone=
q.aspectRatio=
q.Yb=
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=var Pe={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};q=Ue.prototype;q.getElementsByTagName=
q.zc=
q.createElement=function(a){return Re(this.g,a)};
q.bd=
q.isElement=var Xe={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ze(a){this.Cd=a}
var af=[$e("data"),$e("http"),$e("https"),$e("mailto"),$e("ftp"),new Ze(];
var df="function"===typeof URL;;var ff={xe:0,Ce:1,ue:2,we:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};y(gf,Error);
function hf(a,b){a.removeAttribute("srcdoc");if(b instanceof Bb)throw new gf("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Lb)b=Mb(b);else{b:if(df){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=
b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;var kf={ie:"allow-forms",je:"allow-modals",ke:"allow-orientation-lock",le:"allow-pointer-lock",me:"allow-popups",ne:"allow-popups-to-escape-sandbox",oe:"allow-presentation",pe:"allow-same-origin",qe:"allow-scripts",re:"allow-top-navigation",se:"allow-top-navigation-by-user-activation"},mf=db(;
;var sf={};function tf(a,b){b instanceof fc&&b.constructor===fc?b=b.g:(Ka(b),b="type_error:SafeStyleSheet");if(Hc&&void 0!==a.cssText)a.cssText=b;else if(D.trustedTypes)if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Se(a),a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)));else a.innerHTML=b}
;var uf=(new Date).getTime();;;;var Af={};q=Bf.prototype;q.isEnabled=
q.set=
q.get=
q.remove=
q.Yb=
q.clear=
var Cf=new Bf("undefined"==typeof document?null:document);;;Hf.prototype.Ja=!1;Hf.prototype.dispose=
Hf.prototype.addOnDisposeCallback=
Hf.prototype.pa=If.prototype.stopPropagation=function(){this.h=!0};
If.prototype.preventDefault=var Jf=);Xa(Kf,If);var Lf={2:"touch",3:"pen",4:"mouse"};
Kf.prototype.init=
Kf.prototype.stopPropagation=
Kf.prototype.preventDefault=var Mf="closure_listenable_"+(1E6*Math.random()|0);var Nf=0;;Qf.prototype.add=
Qf.prototype.remove=
;var Tf="closure_lm_"+(1E6*Math.random()|0),Uf={},Vf=0;var fg="__closure_events_fn_"+(1E9*Math.random()>>>0);;Xa(gg,Hf);gg.prototype[Mf]=!0;gg.prototype.addEventListener=function(a,b,c,d){Wf(this,a,b,c,d)};
gg.prototype.removeEventListener=
gg.prototype.pa=
gg.prototype.Ua=
;y(jg,gg);jg.prototype.dispose=
jg.prototype.ja=function(){return this.h};
;og.prototype.set=
og.prototype.get=
;function qg(a){this.u=H(a)}
y(qg,K);function rg(a){this.u=H(a)}
y(rg,K);function sg(a,b){return J(a,2,b)}
function tg(a,b){return J(a,3,b)}
function ug(a,b){return J(a,4,b)}
function vg(a,b){return J(a,5,b)}
function wg(a,b){return J(a,9,b)}
function yg(a,b){return te(a,11,null==b?b:Vd(b))}
rg.ya=[10,6];var Bg="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");;Hg.prototype.get=
;var Jg;
;Lg.prototype.add=
Lg.prototype.remove=
var Mg=new Hg(function(){return new Ng},;
Ng.prototype.set=
Ng.prototype.reset=var Og,Pg=!1,Qg=new Lg;;Ug.prototype[Symbol.iterator]=function(){return this};
Ug.prototype.next=
;;Xa(Xg,Wg);Xg.prototype.reset=
Xg.prototype.update=
Xg.prototype.digest=function Zg(){}
Zg.prototype.next=function(){return $g};
var $g={done:!0,value:void 0};Zg.prototype.ta=function ch(a){this.h=a}
ch.prototype.ta=function(){return new dh(this.h())};
ch.prototype[Symbol.iterator]=function(){return new eh(this.h())};
ch.prototype.g=
function dh(a){this.h=a}
y(dh,Zg);dh.prototype.next=function(){return this.h.next()};
dh.prototype[Symbol.iterator]=function(){return new eh(this.h)};
dh.prototype.g=
y(eh,ch);eh.prototype.next=q=fh.prototype;q.has=
q.equals=
q.Yb=
q.clear=
q.remove=
q.delete=
q.get=
q.set=
q.forEach=
q.clone=
q.keys=function(){return bh(this.ta(!0)).g()};
q.values=function(){return bh(this.ta(!1)).g()};
q.entries=
q.ta=
;var kh=D.JSON.stringify;;oh.prototype.reset=
var ph=new Hg(function(){return new oh},;
mh.prototype.then=
mh.prototype.$goog_Thenable=!0;mh.prototype.cancel=
mh.prototype.K=function(a){this.g=0;nh(this,2,a)};
mh.prototype.T=
mh.prototype.D=
var Bh=Dc;Xa(sh,Za);sh.prototype.name="cancel";Xa(L,Hf);q=L.prototype;q.subscribe=
q.Cb=
q.lb=
q.clear=
q.pa=function Fh(a){this.g=a}
Fh.prototype.set=
Fh.prototype.get=
Fh.prototype.remove=function Gh(a){this.g=a}
Xa(Gh,Fh);function Hh(a){this.data=a}
Gh.prototype.set=
Gh.prototype.h=
Gh.prototype.get=function Jh(a){this.g=a}
Xa(Jh,Gh);Jh.prototype.set=
Jh.prototype.h=function Kh(){}
;function Lh(){}
Xa(Lh,Kh);Lh.prototype[Symbol.iterator]=
Lh.prototype.clear=Xa(Mh,Lh);q=Mh.prototype;q.set=
q.get=
q.remove=
q.ta=
q.clear=
q.key=
;Xa(Ph,Mh);Xa(Qh,Lh);var Sh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Rh=null;q=Qh.prototype;q.set=
q.get=
q.remove=
q.ta=
q.clear=
;Xa(Vh,Lh);Vh.prototype.set=
Vh.prototype.get=
Vh.prototype.remove=
Vh.prototype.ta=/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},Wh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=
M.oc=
var Xh={ab:
Dc:,Yh={ab:
Dc:;
M.Zd=
M.Zd();var Zh=!0;try{new Uint8Array(1)}catch(a){Zh=!1}
;var ai={};ai=for(var bi={},ci,di=[],ei=0;256>ei;ei++){ci=ei;for(var fi=0;8>fi;fi++)ci=ci&1?3988292384^ci>>>1:ci>>>1;di[ei]=ci}bi=var gi={};gi={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function hi(a){for(var b=a.length;0<=--b;)a[b]=0}
var ii=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ji=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ki=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],li=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],mi=Array(576);hi(mi);var ni=Array(60);hi(ni);var oi=Array(512);hi(oi);var pi=Array(256);hi(pi);var qi=Array(29);hi(qi);var ri=Array(30);hi(ri);var ti,ui,Xi;var nj=!1;;var Bj;Bj=[new Aj(0,0,0,0,,
new Aj(4,4,8,4,wj),new Aj(4,5,16,8,wj),new Aj(4,6,32,32,wj),new Aj(4,4,16,16,xj),new Aj(8,16,32,32,xj),new Aj(8,16,128,128,xj),new Aj(8,32,128,256,xj),new Aj(32,128,258,1024,xj),new Aj(32,258,258,4096,xj)];
;var Ej={};Ej=var Fj=Object.prototype.toString;
Gj.prototype.push=
;function Ij(a){this.name=a}
;var Jj=new Ij("rawColdConfigGroup");var Kj=new Ij("rawHotConfigGroup");function Lj(a){this.u=H(a)}
y(Lj,K);Lj.prototype.g=function Mj(a){this.u=H(a)}
y(Mj,K);function Nj(a){this.u=H(a)}
y(Nj,K);Nj.ya=[2];function Oj(a){this.u=H(a)}
y(Oj,K);Oj.prototype.getPlayerType=
Oj.prototype.setPlayerType=function(a){return He(this,36,a)};
Oj.prototype.setHomeGroupInfo=
Oj.ya=[9,66,32,86,100,101];function Pj(a){this.u=H(a)}
y(Pj,K);Pj.prototype.getKey=function(){return De(this,1)};
Pj.prototype.va=
var Qj=[2,3,4,5,6];function Rj(a){this.u=H(a)}
y(Rj,K);Rj.prototype.setSessionId=function(a){if(null!=a){var b=!!b;if(!Xd(a))throw Td("uint64");"string"===typeof a?(Xd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b)&&0<=b?a=String(b):(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),ae(a)||(qd(a),a=nd(jd,kd)))):b?(Xd(a),a=Math.trunc(a),0<=a&&Number.isSafeInteger(a)?a=String(a):(b=String(a),ae(b)?a=b:(ld(a),a=nd(jd,kd)))):(Xd(a),a=Math.trunc(a),a=0<=a&&Number.isSafeInteger(a)?a:be(a))}return te(this,10,a)};
Rj.ya=[15,26,28];function Sj(a){this.u=H(a)}
y(Sj,K);Sj.ya=[5];function Tj(a){this.u=H(a)}
y(Tj,K);function Uj(a){this.u=H(a)}
y(Uj,K);Uj.prototype.setSafetyMode=
Uj.ya=[12];function Vj(a){this.u=H(a)}
y(Vj,K);Vj.ya=[12];var Wj={Qe:"WEB_DISPLAY_MODE_UNKNOWN",Me:"WEB_DISPLAY_MODE_BROWSER",Oe:"WEB_DISPLAY_MODE_MINIMAL_UI",Pe:"WEB_DISPLAY_MODE_STANDALONE",Ne:"WEB_DISPLAY_MODE_FULLSCREEN"};function Xj(a){this.u=H(a)}
y(Xj,K);Xj.prototype.getKey=function(){return De(this,1)};
Xj.prototype.va=function(){return De(this,2)};function Yj(a){this.u=H(a)}
y(Yj,K);Yj.ya=[4,5];function Zj(a){this.u=H(a)}
y(Zj,K);function ak(a){this.u=H(a)}
y(ak,K);var bk=[2,3,4,5];function ck(a){this.u=H(a)}
y(ck,K);ck.prototype.getMessage=function(){return De(this,1)};function dk(a){this.u=H(a)}
y(dk,K);function ek(a){this.u=H(a)}
y(ek,K);function fk(a){this.u=H(a)}
y(fk,K);fk.ya=[10,17];function gk(a){this.u=H(a)}
y(gk,K);function hk(a){this.u=H(a)}
y(hk,K);function ik(a){this.u=H(a)}
y(ik,K);y(jk,K);
var kk=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495];function lk(a){this.u=H(a)}
y(lk,K);function mk(a){this.u=H(a)}
y(mk,K);mk.prototype.getPlaylistId=
var Fe=[1,2];y(nk,K);nk.ya=[3];var ok=D.window,pk,qk,rk=(null==ok?void 0:null==(pk=ok.yt)?void 0:pk.config_)||(null==ok?void 0:null==(qk=ok.ytcfg)?void 0:qk.data_)||{};F("yt.config_",rk);function uk(){var a=rk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;;var xk=0;F("ytDomDomGetNextId",E("ytDomDomGetNextId")||;function zk(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()}
;var Bk=[];;var Gk=/^[\w.]*$/,Hk={q:!0,search_query:!0};var Kk=String(Ik);;function Pk(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"g",S:"ytp-fullscreen-button-corner-0",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-1",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-2",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},
{I:"g",S:"ytp-fullscreen-button-corner-3",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]}}
function Qk(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}}
function Rk(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}}
function Sk(){return{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,P:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}}
;var Tk=1;function Uk(a){Hf.call(this);this.g={};this.h={};this.element=this.createElement(a)}
y(Uk,Hf);
Uk.prototype.createElement=function(a,b){b=b||"svg"===a.I;var c=a.S,d=a.ff;if(b){var e=document.createElementNS("http://www.w3.org/2000/svg",a.I);Jc&&(a.P||(a.P={}),a.P.focusable="false")}else e=Re(document,a.I);if(c){if(c=Vk(this,e,"class",c))Wk(this,e,"class",c),this.g[c]=e}else if(d){c=w(d);for(var f=c.next();!f.done;f=c.next())this.g[f.value]=e;Wk(this,e,"class",d.join(" "))}d=a.gf;c=a.ea;if(d)b=Vk(this,e,"child",d),void 0!==b&&e.appendChild(document.createTextNode(String(b)));else if(c)for(d=0,
c=w(c),f=c.next();!f.done;f=c.next())if(f=f.value)if("string"===typeof f)f=Vk(this,e,"child",f),null!=f&&e.appendChild(document.createTextNode(String(f)));else if(f.element)e.appendChild(f.element);else{var g=f;f=this.createElement(g,b);e.appendChild(f);if(g.ma){g="ytp-id-"+Tk.toString();Tk++;f.id=g;var h=document.createElementNS("http://www.w3.org/2000/svg","use");h.setAttribute("class","ytp-svg-shadow");h.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+g);f=e;g=h;h=d++;f.insertBefore(g,
f.childNodes[h]||null)}}if(a=a.P)for(b=e,d=w(Object.keys(a)),c=d.next();!c.done;c=d.next())c=c.value,f=a[c],Wk(this,b,c,"string"===typeof f?Vk(this,b,c,f):f);return e};
Uk.prototype.detach=
function Vk(a,b,c,d){if("{{"===d.substr(0,2))a.h[d]=[b,c];else return d}
Uk.prototype.update=function(a){for(var b=w(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=this.h["{{"+c+"}}"];d&&Wk(this,d[0],d[1],a[c])}};
function Xk(a,b){var c=[];if(!b)return c;b=w(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,null!=d){var e=d.nodeType;1===e||3===e?c.push(d):d&&"string"===typeof d.I?c.push(a.createElement(d)):d.element?c.push(d.element):"string"===typeof d&&-1!==d.indexOf("\n")?d.split("\n").forEach(function(f,g){0<g&&c.push(Re(document,"BR"));c.push(document.createTextNode(String(f)))}):c.push(document.createTextNode(String(d)))}return c}
function Wk(a,b,c,d){if("child"===c){Se(b);var e;void 0===d?e=void 0:e=!Array.isArray(d)||d&&"string"===typeof d.I?[d]:d;c=Xk(a,e);c=w(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?(c=d?d:"",a=sf.cssText,a||(a=d=tc(),void 0===b.style[d]&&(d=(Lc?"Webkit":Kc?"Moz":Hc?"ms":null)+uc(d),void 0!==b.style[d]&&(a=d)),sf.cssText=a),a&&(b.style[a]=c)):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=Mb(cf(a))),b.setAttribute(c,a))}
Uk.prototype.pa=function(){this.g={};this.h={};this.detach();Hf.prototype.pa.call(this)};function Yk(){}
Yk.prototype.info=function(a){this.log(a,"INFO")};
Yk.prototype.warning=function(a){this.log(a,"WARNING")};
Yk.prototype.error=
Yk.prototype.log=
var T=new Yk,Zk={".ima-ad-player":{"background-color":"#000"},".ima-controls":{"background-color":"#000",bottom:"0",height:"40px",width:"100%",position:"absolute"},".ima-control-button":{"background-color":"#000",border:"1px transparent solid","border-style":"none",cursor:"pointer",fill:"#fff",height:"40px",width:"40px"},".ima-control-countdown":{"background-color":"#000","border-style":"none",color:"#fff","font-family":"Arial, sans-serif","font-size":"12px",height:"40px","line-height":"40px","margin-left":"10px",
"vertical-align":"top"},".ima-control-button.fullscreen":{"float":"right"},".ima-control-button:hover":{fill:"#f00"}};
function $k(a,b,c,d,e){e=void 0===e?{}:e;this.player=a;this.cd=d;this.options=e;this.h=this.ha=null;this.l=document.createElement("div");this.s=document.createElement("div");this.m=document.createElement("button");this.D=document.createElement("button");this.Ba=document.createElement("span");this.ob=null;this.v=document.createElement("button");this.oa=this.i=this.g=this.na=null;this.Qa={currentTime:0};this.Db=this.pb=this.uc=this.vc=this.qb=this.Y=!1;this.nb=this.T=this.K=0;if(window.google&&google&&
google.ima&&google.ima.AdDisplayContainer)if(this.ha=Me(b))if(this.h=Me(c)){if(this.h){this.h.textContent="";if(this.h)for(a=w(Object.entries(Zk)),b=a.next();!b.done;b=a.next()){c=w(b.value);b=c.next().value;c=c.next().value;b="#"+this.h.id+" "+b;if(-1!=b.indexOf("<"))throw Error("Selector does not allow '<', got: "+b);d=b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(d))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: "+
b);a:{e={"(":")","[":"]"};for(var f=[],g=0;g<d.length;g++){var h=d[g];if(e[h])f.push(e[h]);else{b:{var k=void 0;for(k in e)if(e[k]==h){k=!0;break b}k=!1}if(k&&f.pop()!=h){d=!1;break a}}}d=0==f.length}if(!d)throw Error("() and [] in selector must be balanced, got: "+b);if(!(c instanceof Tb)){d=void 0;e="";for(d in c)if(Object.prototype.hasOwnProperty.call(c,d)){if(!/^[-_a-zA-Z0-9]+$/.test(d))throw Error("Name allows only [-_a-zA-Z0-9], got: "+d);f=c[d];null!=f&&(f=Array.isArray(f)?f.map(Vb).join(" "):
Vb(f),e+=d+":"+f+";")}c=e?new Tb(e,Sb):Ub}b+="{";c instanceof Tb&&c.constructor===Tb?c=c.g:(Ka(c),c="type_error:SafeStyle");b=b+c.replace(/</g,"\\3C ")+"}";b=new fc(b,ec);c=$a||($a=new Ue);d=c.g;Hc&&d.createStyleSheet?(c=d.createStyleSheet(),tf(c,b)):(d=Ne(c.g,"HEAD")[0],d||(e=Ne(c.g,"BODY")[0],d=c.zc("HEAD"),e.parentNode.insertBefore(d,e)),e=c.zc("STYLE"),(f=rc())&&e.setAttribute("nonce",f),tf(e,b),c.bd(d,e))}a=this.player.getSize();this.K=a.height;this.T=a.width;b=al(this).endsWith("%")&&this.options.enableResponsiveDesign?
al(this):this.T+"px";bl(this.h,b,cl(this).endsWith("%")&&this.options.enableResponsiveDesign&&dl(this)?cl(this):this.K+(dl(this)?0:40)+"px");this.h.style.position="relative";bl(this.l,b,a.height+"px");this.l.className="ima-ad-player";this.h.appendChild(this.l);dl(this)||(this.s.className="ima-controls",this.m.className="ima-control-button playpause",this.m.title="Play/Pause",el(this.m,Qk()),this.m.addEventListener("click",this.Sd.bind(this)),this.s.appendChild(this.m),this.D.className="ima-control-button mute",
this.D.title="Mute/Unmute",el(this.D,Sk()),this.D.addEventListener("click",this.Rd.bind(this)),this.s.appendChild(this.D),this.Ba.className="ima-control-countdown",this.s.appendChild(this.Ba),this.v.className="ima-control-button fullscreen",this.v.title="Fullscreen",el(this.v,Pk()),this.v.addEventListener("click",this.Td.bind(this)),this.s.appendChild(this.v),this.h.appendChild(this.s));fl(this.h)}this.l?(this.na=window.google&&google&&google.ima&&google.ima.AdDisplayContainer?new google.ima.AdDisplayContainer(this.l):
null)?(gl(this)&&hl(this)&&(this.Oc(),il(this),this.pb=!0),this.player.addEventListener("onStateChange",this.onStateChange.bind(this)),this.player.addEventListener("onVideoDataChange",this.onVideoDataChange.bind(this)),this.player.addEventListener("onVolumeChange",this.Wd.bind(this)),this.i=new google.ima.AdsLoader(this.na),this.i.addEventListener("adsManagerLoaded",this.Qd.bind(this)),this.i.addEventListener("adError",this.Od.bind(this)),setInterval(this.de.bind(this),500),this.enableResponsiveDesign()&&
window.addEventListener("resize",this.Vd.bind(this)),jl(this)):T.error("Could not create an AdDisplayContainer. Ad Blocked?"):T.error("Could not create a <div> for ads video.")}else T.error("Could not find ads container. Was given: "+c);else T.error("Could not find YouTube Player IFrame. Was given: "+b);else T.error("Could not find the IMA SDK. Ad Blocked?")}
function il(a){a.vc||(a.na?(hl(a)&&!a.uc&&a.player.pauseVideo(),a.vc=!0,a.na.initialize(),a.Db=!0,T.info("Done initializing the AdDisplayContainer."),kl(a)):T.error("Trying to initialize the AdDisplayContainer, but it does not exist."))}
function kl(a){a.Db&&(a.g?(T.info("Initializing the AdsManager."),a.g.init(a.T,a.K-(dl(a)?0:40),google.ima.ViewMode.NORMAL),T.info("Starting the AdsManager."),a.g.start(),T.info("Started the AdsManager."),ll(a,a.player.isMuted())):T.warning("Trying to start the AdsManager, but it does not exist."))}
q=$k.prototype;q.onStateChange=function(a){a=a.data;-1===a?(this.pb=!0,il(this)):0===a&&this.i&&this.i.contentComplete()};
q.Qd=function(a){this.player.logImaAdEvent(9,0);this.g=this.oa&&!window.yt_embedsEnableImaKillswitch?a.getAdsManager(this.Qa,this.oa):a.getAdsManager(this.Qa);T.info("Loaded AdsManager.");this.g.addEventListener("contentPauseRequested",this.Oc.bind(this));this.g.addEventListener("contentResumeRequested",this.jc.bind(this));this.g.addEventListener("click",this.Jd.bind(this));this.g.addEventListener("skipped",this.Md.bind(this));this.g.addEventListener("adError",this.Pd.bind(this));this.g.addEventListener("start",
this.Nd.bind(this));this.g.addEventListener("pause",this.Kd.bind(this));this.g.addEventListener("resume",this.Ld.bind(this));kl(this)};
q.Oc=function(){ml(this);this.player.pauseVideo();fl(this.ha);el(this.m,Qk());var a=this.h;a&&(a.style.display="block");this.Y=!0;this.ob=setInterval(this.ce.bind(this),500)};
q.jc=function(){this.player.logImaAdEvent(2,nl(this));ml(this);this.ob&&clearInterval(this.ob);this.Y=!1;var a=this.ha;a&&(a.style.display="block");el(this.m,Rk());fl(this.h);this.player.playVideo()};
q.Sd=function(){ol(this,!this.Y);this.player.logImaAdEvent(this.Y?6:5,nl(this))};
function ol(a,b){b!==a.Y&&a.g&&(b?(a.g.resume(),el(a.m,Qk())):(a.g.pause(),el(a.m,Rk())),a.Y=b)}
q.Rd=
function ll(a,b){a.g&&b!==a.qb&&(b?(a.g.setVolume(0),a.player.mute(),el(a.D,{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]})):
(a.g.setVolume(1),a.player.unMute(),el(a.D,Sk())),a.qb=b)}
q.Td=function(){var a=this;Ak()?ml(this):this.h&&zk(this.h).then(function(){a.g&&a.g.resize(window.screen.width,window.screen.height-(dl(a)?0:40),google.ima.ViewMode.FULLSCREEN);el(a.v,{I:"svg",P:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},ea:[{I:"g",S:"ytp-fullscreen-button-corner-2",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-3",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},
{I:"g",S:"ytp-fullscreen-button-corner-0",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{I:"g",S:"ytp-fullscreen-button-corner-1",ea:[{I:"path",ma:!0,S:"ytp-svg-fill",P:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]})})};
function ml(a){if(Ak())a:{var b=Ak(),c;yk(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)?Ak()==b&&(c=document):c=b;if(c&&(b=yk(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],c))){b.call(c)instanceof Promise||Promise.resolve();break a}Promise.resolve()}a.g&&a.g.resize(a.T,a.K,google.ima.ViewMode.NORMAL);el(a.v,Pk())}
q.Jd=function(){ml(this);ol(this,!1);this.player.logImaAdEvent(4,nl(this))};
q.Kd=function(){ol(this,!1)};
q.Ld=
q.Md=
q.Nd=function(a){this.player.logImaAdEvent(1,nl(this));if(a=a.getAd())this.nb=a.getDuration()};
q.de=function(){this.Qa.currentTime=this.player.getCurrentTime();var a=this.player.getSize();if(this.K!==a.height||this.T!==a.width){var b=a.width;a=a.height;if(!this.enableResponsiveDesign()&&(this.T=b,this.K=a,dl(this)||bl(this.s,b+"px",(dl(this)?0:40)+"px"),this.h&&this.l&&(bl(this.h,b+"px",a+(dl(this)?0:40)+"px"),bl(this.l,b+"px",a+"px"),this.g))){var c=Ak()?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL;this.g.resize(b,a,c)}}};
q.Vd=function(){var a=this;clearTimeout(this.dd);this.dd=setTimeout(function(){if(a.h&&a.l&&a.g){var b=Ak()?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL;if(b!==google.ima.ViewMode.FULLSCREEN){var c=a.h.clientWidth,d=a.h.clientHeight;bl(a.l,c+"px",d+"px");a.g.resize(c,d,b)}}},100)};
q.Wd=
function jl(a){if(a.i)if(hl(a)){var b=new google.ima.AdsRequest;a.oa=new google.ima.AdsRenderingSettings;dl(a)&&(a.oa.useStyledLinearAds=!0);a.cd(b,a.oa);if(b.adTagUrl){b.linearAdSlotWidth=a.T;b.linearAdSlotHeight=a.K;var c=b.adTagUrl;-1!==c.indexOf("?")?(c=(c||"").split("#")[0],c=c.split("?",2),c=Mk(1<c.length?c[1]:c[0])):c={};var d={},e=a.player.getVideoData();e.video_id&&!c.vid&&(d.vid=e.video_id);e=a.player.getPlayerMode();if(!c.vpa){var f;b.setAdWillAutoPlay(!(null==(f=e.pfp)||!f.autoplay))}if(!c.vpmute){var g;
b.setAdWillPlayMuted(!(null==(g=e.pfp)||!g.mutedAutoplay))}d.cust_params="yt_embed_ima=1";c.cust_params&&(d.cust_params=c.cust_params+"&yt_embed_ima=1");b.adTagUrl=Nk(b.adTagUrl,d||{},!0);a.i.requestAds(b);a.player.logImaAdEvent(8,0)}else T.error("The adsTagUrl field was not set by the embedder.")}else T.error("IMA integration is disabled for this video.")}
q.onVideoDataChange=function(a){"newdata"===a.data.type&&(this.g&&(this.g.destroy(),this.g=null),this.i&&this.i.contentComplete(),jl(this))};
q.ce=function(){if(this.Ba&&this.g){var a=this.nb-this.g.getRemainingTime();a=(new Date(1E3*a)).toISOString().substring(14,19);var b=(new Date(1E3*this.nb)).toISOString().substring(14,19);this.Ba.innerText=a+" / "+b}};
q.Od=function(a){this.uc=!0;var b;T.error("IMA AdsLoader error: "+(null==(b=a.getError())?void 0:b.getMessage()));this.player.logImaAdEvent(10,nl(this));this.g&&this.g.destroy();(gl(this)||this.pb)&&this.jc()};
q.Pd=function(a){var b;T.error("IMA AdsManager error: "+(null==(b=a.getError())?void 0:b.getMessage()));this.player.logImaAdEvent(10,nl(this));this.g&&this.g.destroy();this.jc()};
function el(a,b){a.textContent="";b=new Uk(b);a.append(b.element)}
function gl(a){a=a.player.getPlayerMode();return a.pfp&&(a.pfp.autoplay||a.pfp.mutedAutoplay)}
function hl(a){a=a.player.getPlayerMode();return a.pfp&&a.pfp.enableIma}
function nl(a){return 0===a.Qa.currentTime?1:0===a.player.getPlayerState()?3:2}
function al(a){var b,c;return null!=(c=null==(b=a.ha)?void 0:b.width)?c:""}
q.enableResponsiveDesign=function(){return cl(this).endsWith("%")&&!!this.options.enableResponsiveDesign&&dl(this)||al(this).endsWith("%")&&!!this.options.enableResponsiveDesign};
q.getAdsManager=function(){return this.g};
q.qd=F("YT.ImaManager",$k);
F("YT.createPlayerForPublishers",function(a,b,c,d){a=Me(a);var e=document.createElement("div");e.id=a.id+"-player";a.appendChild(e);var f=document.createElement("div");f.id=a.id+"-ad";a.appendChild(f);c=Object.assign({},{imaOptions:{},youtubeOptions:{}},c);c.imaOptions.enableResponsiveDesign=!0;c.youtubeOptions.events||(c.youtubeOptions.events={});c.youtubeOptions.events.onReady&&T.error("onReady event handler is already defined. Overwriting!");c.youtubeOptions.events.onReady=function(){var h,k=new $k(g,
e.id,f,b,null==(h=c)?void 0:h.imaOptions);d&&d(g,k)};
if(!c.youtubeOptions.embedConfig)c.youtubeOptions.embedConfig={};else if("string"===typeof c.youtubeOptions.embedConfig)try{c.youtubeOptions.embedConfig=JSON.parse(c.youtubeOptions.embedConfig)}catch(h){T.error("Invalid embed_config JSON."),c.youtubeOptions.embedConfig={}}c.youtubeOptions.embedConfig.adsConfig={disableAds:!0};c.youtubeOptions.embedConfig.enableIma=!0;var g=new YT.Player(e,c.youtubeOptions)});
$k.prototype.getAdsLoader=$k.prototype.qd;$k.prototype.getAdsManager=$k.prototype.getAdsManager;var pl={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
ql.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ql.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ql.prototype.stopImmediatePropagation=var qb=D.ytEventsEventsListeners||{};F("ytEventsEventsListeners",qb);var rl=D.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",rl);
var ul=db(;
;;var zl=new 
F("yt.ads_.signals_.getAdSignalsString",;Wa();var Al="XMLHttpRequest"in D?null;
;var Cl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Cl);var Dl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},El="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Cl)),Fl=!1;
;var Rl=[{ec:function(a){return"Cannot read property '"+a.key+"'"},
Ob:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ec:
Ob:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ec:
Ob:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Tl={La:[],Ia:[{tb:Sl,weight:500}]};;var Vl;;var Xl=new L;;;function cm(){}
;;;F("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var fm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},gm={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},hm={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},im={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};;y(km,Error);;nm.prototype.Ca=
nm.prototype.rb=var pm=S("web_emulated_idle_callback_delay",300),qm=1E3/60-3,rm=[8,5,4,3,2,1,0];
y(sm,Hf);q=sm.prototype;q.rb=
q.Ra=
q.ia=
q.ud=
q.be=function(){ym(this)};
q.ed=
q.Xd=
q.Ud=function(){document.hidden||zm(this);this.g&&(this.stop(),this.start())};
function zm(a){a.stop();a.s=!0;for(var b=Wa(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&tm(e)}Am(a);a.s=!1;xm(a)&&a.start();b=Wa()-b;a.D-=b}
function ym(a,b,c){a.T&&4===a.v&&a.g||a.stop();a.s=!0;b=Wa()+(b||a.D);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){wm(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&tm(e);d=a.oa?0:1;d=a.m>d?a.m:d;if(!(Wa()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&tm(c)}while(c&&Wa()<b)}a.s=!1;Am(a);a.D=qm;xm(a)&&a.start()}
q.start=
q.pause=
q.stop=
q.pa=var Bm=E("yt.scheduler.instance.timerIdMap_")||{},Cm=S("kevlar_tuner_scheduler_soft_state_timer_ms",800),Dm=0,Em=0;;y(Sm,nm);Sm.prototype.Ra=
Sm.prototype.ia=
Sm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Sm.prototype.pause=
var ng=Tm();
R("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(F("yt.scheduler.instance.dispose",Gm),F("yt.scheduler.instance.addJob",Im),F("yt.scheduler.instance.addImmediateJob",Jm),F("yt.scheduler.instance.cancelJob",Km),F("yt.scheduler.instance.cancelAllJobs",Hm),F("yt.scheduler.instance.start",Mm),F("yt.scheduler.instance.pause",Nm),F("yt.scheduler.instance.setPriorityThreshold",Pm),F("yt.scheduler.instance.enablePriorityThreshold",Qm),F("yt.scheduler.instance.clearPriorityThreshold",Rm),F("yt.scheduler.initialized",
!0));Um.prototype.set=
Um.prototype.get=
Um.prototype.remove=var Vm=);
;var Xm=[],Ym=!1;;;var cn=Zc||$c;var dn={},en=(dn.AUTH_INVALID="No user identifier specified.",dn.EXPLICIT_ABORT="Transaction was explicitly aborted.",dn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dn.MISSING_INDEX="Index not created.",dn.MISSING_OBJECT_STORES="Object stores not created.",dn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",dn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",dn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
dn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",dn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",dn),fn={},gn=(fn.AUTH_INVALID="ERROR",fn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fn.EXPLICIT_ABORT="IGNORED",fn.IDB_NOT_SUPPORTED="ERROR",fn.MISSING_INDEX=
"WARNING",fn.MISSING_OBJECT_STORES="ERROR",fn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fn.QUOTA_EXCEEDED="WARNING",fn.QUOTA_MAYBE_EXCEEDED="WARNING",fn.UNKNOWN_ABORT="WARNING",fn.INCOMPATIBLE_DB_VERSION="WARNING",fn),hn={},jn=(hn.AUTH_INVALID=!1,hn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hn.EXPLICIT_ABORT=!1,hn.IDB_NOT_SUPPORTED=!1,hn.MISSING_INDEX=!1,hn.MISSING_OBJECT_STORES=!1,hn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,hn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,hn.QUOTA_EXCEEDED=!1,hn.QUOTA_MAYBE_EXCEEDED=!0,hn.UNKNOWN_ABORT=!0,hn.INCOMPATIBLE_DB_VERSION=!1,hn);y(V,km);y(kn,V);y(ln,Error);var mn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
;sn.resolve=
sn.reject=
sn.prototype.then=
function tn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof sn?wn(a,b,f,d,e):d(f)}catch(g){e(g)}}
;;;var Bn=window,X=Bn.ytcsi&&Bn.ytcsi.now?Bn.ytcsi.now:Bn.performance&&Bn.performance.timing&&Bn.performance.now&&Bn.performance.timing.navigationStart?q=Cn.prototype;q.add=
q.clear=
q.close=
q.delete=function(a,b){return Dn(this,[a],{mode:"readwrite",ba:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=
q.objectStoreNames=
q.getName=
function Fn(a){this.g=a}
q=Fn.prototype;q.add=
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return zn(this.g.clear()).then(function(){})};
q.delete=
q.get=function(a){return zn(this.g.get(a))};
q.index=
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
Hn.prototype.abort=
Hn.prototype.objectStore=
function On(a){this.g=a}
q=On.prototype;q.delete=
q.get=function(a){return zn(this.g.get(a))};
q.getKey=function(a){return zn(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function Rn(a,b){this.request=a;this.cursor=b}
q=Rn.prototype;q.advance=function(a){this.cursor.advance(a);return Pn(this.request)};
q.continue=
q.delete=
q.getKey=function(){return this.cursor.key};
q.va=function(){return this.cursor.value};
q.update=;Vn.prototype.h=
Vn.prototype.delete=
;var Lo=new Vn("YtIdbMeta",{kb:{databases:{sb:1}},upgrade:);
;var Qo,Ro=new function(){}(new function(){});
;new lh;function Yo(a,b,c){c=void 0===c?{}:c;return Xo(a,b,!1,c)}
;y(dp,Vn);dp.prototype.h=
dp.prototype.delete=
;var gp={},hp=fp("ytGcfConfig",{kb:(gp.coldConfigStore={sb:1},gp.hotConfigStore={sb:1},gp),Ub:!1,upgrade:
version:1});function ip(a){return Xn(hp(),a)}
function lp(a){var b,c;return B(function(d){return 1==d.g?A(d,ip(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Dn(b,["coldConfigStore"],{mode:"readwrite",ba:!0},function(e){return Qn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.va()})}),3)):d.return(c)})}
;y(np,Hf);np.prototype.pa=op.prototype.g=;var Bp="undefined"!==typeof TextEncoder?new TextEncoder:null,Cp=Bp?function(a){return Bp.encode(a)}:var Dp=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Cb;L.prototype.publish=L.prototype.lb;L.prototype.clear=L.prototype.clear;F("ytPubsub2Pubsub2Instance",Dp);F("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);;var Fp=void 0,Gp=void 0;;var Jp=S("max_body_size_to_compress",5E5),Kp=S("min_body_size_to_compress",500),Lp=!0,Mp=0,Np=0,Op=S("compression_performance_threshold_lr",250),Pp=S("slow_compressions_before_abandon_count",4),Qp=!1,Rp=new Map,Sp=1,Tp=!0;;;var Yp;function Zp(){Yp||(Yp=new Um("yt.innertube"));return Yp}
;q=dq.prototype;q.writeThenSend=
q.sendThenWrite=
q.sendAndWrite=
q.Bb=
q.xc=
;var nq;
;function pq(a){return Xn(oq(),a)}
;var yq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495};var zq={},Aq=fp("ServiceWorkerLogsDatabase",{kb:(zq.SWHealthLog={sb:1},zq),Ub:!0,upgrade:
version:1});;var Eq={},Fq=0;;function Iq(){if(!Hq.g){var a=E("yt.networkRequestMonitor.instance")||new Hq;F("yt.networkRequestMonitor.instance",a);Hq.g=a}return Hq.g}
Hq.prototype.requestComplete=
Hq.prototype.isEndpointCFR=
Hq.prototype.removeParams=
Hq.prototype.removeParams=Hq.prototype.removeParams;Hq.prototype.isEndpointCFR=Hq.prototype.isEndpointCFR;Hq.prototype.requestComplete=Hq.prototype.requestComplete;Hq.getInstance=Iq;var Jq;;y(Y,gg);q=Y.prototype;q.ja=function(){return this.h.ja()};
q.Wa=
q.rd=
q.md=function(){this.i=!0};
q.Ua=
q.Tb=
Y.prototype.sendNetworkCheckRequest=Y.prototype.Tb;Y.prototype.listen=Y.prototype.Ua;Y.prototype.enableErrorFlushing=Y.prototype.md;Y.prototype.getWindowStatus=Y.prototype.rd;Y.prototype.networkStatusHint=Y.prototype.Wa;Y.prototype.isNetworkAvailable=Y.prototype.ja;Y.getInstance=Mq;y(Nq,gg);Nq.prototype.ja=
Nq.prototype.Wa=
Nq.prototype.Tb=
;var Pq;y(Qq,dq);Qq.prototype.writeThenSend=function(a,b){b||(b={});lm()||(this.g=!1);dq.prototype.writeThenSend.call(this,a,b)};
Qq.prototype.sendThenWrite=
Qq.prototype.sendAndWrite=
Qq.prototype.awaitInitialization=function(){return this.i.promise};
;var Vq=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};F("ytNetworklessLoggingInitializationOptions",Vq);Wq.prototype.isReady=
;;var Yq=D.ytPubsubPubsubInstance||new L,Zq=D.ytPubsubPubsubSubscribedKeys||{},$q=D.ytPubsubPubsubTopicToKeys||{},ar=D.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Cb;L.prototype.publish=L.prototype.lb;L.prototype.clear=L.prototype.clear;F("ytPubsubPubsubInstance",Yq);F("ytPubsubPubsubTopicToKeys",$q);F("ytPubsubPubsubIsSynchronous",ar);F("ytPubsubPubsubSubscribedKeys",Zq);var br=Symbol("injectionDeps");dr.prototype.resolve=
;var gr;function hr(){gr||(gr=new dr);return gr}
;var ir=window;;var mr=R("web_enable_lifecycle_monitoring")&&0!==jr(),nr=R("web_enable_lifecycle_monitoring");or.prototype.cancel=
;rr.prototype.install=
rr.prototype.Y=
rr.prototype.T=
rr.prototype.s=
function vr(a){mr&&a&&kr(a)}
da.Object.defineProperties(rr.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});var yr;y(xr,rr);xr.prototype.D=
xr.prototype.K=
;var Ar=[];F("yt.logging.transport.getScrapedGelPayloads",function(){return Ar});Br.prototype.storePayload=
Br.prototype.smartExtractMatchingEntries=
Br.prototype.extractMatchingEntries=
Br.prototype.getSequenceCount=
Br.prototype.getSequenceCount=Br.prototype.getSequenceCount;Br.prototype.extractMatchingEntries=Br.prototype.extractMatchingEntries;Br.prototype.smartExtractMatchingEntries=Br.prototype.smartExtractMatchingEntries;Br.prototype.storePayload=Br.prototype.storePayload;;var Fr=S("initial_gel_batch_timeout",2E3),Gr=S("gel_queue_timeout_max_ms",6E4),Hr=Math.pow(2,16)-1,Ir=S("gel_min_batch_size",5),Jr=void 0;var Lr=new Kr,Mr=new Kr,Nr=new Kr,Or=new Kr,Pr,Qr=!0,Rr=1,Sr=new Map,Tr=D.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",Tr);var Ur=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};F("ytLoggingTransportTokensToJspbCttTargetIds_",Ur);var Vr={};;var ys=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",ys);
;var Cs=[];;var Es=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",Es);;var Gs=new Set,Hs=0,Is=0,Js=0,Ks=[],Ls=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];;;var Qs={};;var Ss={},Ts=[],Dh=new L,Us={};;var at=null,bt=null;var ct=window;
function dt(a,b,c){this.m=this.g=this.h=null;this.i=0;this.v=!1;this.s=[];this.l=null;this.K={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.D=c;if(a=Me(a))if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?yc(a.src):"https://www.youtube.com"),this.h=new Ys(b),c||(b=et(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),Ss[this.g.id]=this,window.postMessage){this.l=new L;ft(this);b=Zs(this.h,"events");
for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Us)Us.hasOwnProperty(e)&&gt(this,e)}}
q=dt.prototype;q.setSize=
q.getIframe=function(){return this.g};
q.sc=
q.addEventListener=
q.destroy=
q.Ac=
q.Qc=
q.sendMessage=;y(mt,dt);q=mt.prototype;q.Ac=
q.sc=
q.getVideoEmbedCode=
q.getOptions=
q.getOption=
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return Ss[a]});
F("YT.scan",Vs);F("YT.subscribe",;
F("YT.unsubscribe",;
F("YT.Player",mt);dt.prototype.destroy=dt.prototype.destroy;dt.prototype.setSize=dt.prototype.setSize;dt.prototype.getIframe=dt.prototype.getIframe;dt.prototype.addEventListener=dt.prototype.addEventListener;mt.prototype.getVideoEmbedCode=mt.prototype.getVideoEmbedCode;mt.prototype.getOptions=mt.prototype.getOptions;mt.prototype.getOption=mt.prototype.getOption;
Ts.push(function(a){var b=a;b||(b=document);a=jb(b.getElementsByTagName("yt:player"));var c=b||document;b=jb(c.querySelectorAll&&c.querySelector?c.querySelectorAll(".yt-player"):Ne(document,"*","yt-player",b));fb(ib(a,b),xt)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Vs();var zt=D.onYTReady;zt&&zt();var At=D.onYouTubeIframeAPIReady;At&&At();var Bt=D.onYouTubePlayerAPIReady;Bt&&Bt();}).call(this);
