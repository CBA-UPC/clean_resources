(function(){'use strict';var r;var ba="function"==typeof Object.defineProperties?Object.defineProperty:
var da=ca(this);v("Symbol",;
v("Symbol.iterator",;
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:
v("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?null}var sa=ma;
ta.prototype.K=function(a){this.h=a};
ta.prototype.return=
ta.prototype.B=
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
var D=this||self;var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;;Wa(Ya,Error);Ya.prototype.name="CustomError";;function $a(){}
;var cb=Array.prototype.indexOf?db=Array.prototype.forEach?
;var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");;var rb;;function tb(){}
var vb={};ub("");function wb(a){this.g=a}
wb.prototype.toString=
var xb={};var yb=String.prototype.trim?function(a){return a.trim()}:zb=/&/g,Ab=/</g,Bb=/>/g,Cb=/"/g,Db=/'/g,Eb=/\x00/g,Fb=/[\x00&<>"']/;function Gb(a){this.g=a}
Gb.prototype.toString=function(){return this.g.toString()};
var Hb={},Ib=new Gb("about:invalid#zClosurez",Hb);var Jb=Ja(610401301,!1),Kb=Ja(572417392,Ja(1,!0));var Mb,Nb=D.navigator;Mb=Nb?Nb.userAgentData||null:null;;;function Xb(a){this.g=a}
Xb.prototype.toString=function(){return this.g.toString()};;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");var ec=/#|$/;;;;ic[" "]=function(){};var jc=Ub()?!1:G("Opera"),kc=Vb(),lc=G("Edge"),mc=G("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),nc=-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge");function oc(){var a=D.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=);
rc&&(qc=rc?rc[1]:"");if(kc){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var tc=pc,uc;if(D.document&&kc){var zc=oc();uc=zc?zc:parseInt(tc,10)||void 0}else uc=void 0;var Ac=uc;var Bc=hc()||G("iPod"),Cc=G("iPad");!G("Android")||Wb();Wb();var Dc=G("Safari")&&!(Wb()||(Ub()?0:G("Coast"))||(Ub()?0:G("Opera"))||(Ub()?0:G("Edge"))||(Ub()?Ob("Microsoft Edge"):G("Edg/"))||(Ub()?Ob("Opera"):G("OPR"))||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(hc()||G("iPad")||G("iPod"));var Ec={},Fc=null;
;var Hc="undefined"!==typeof Uint8Array,Ic=!kc&&"function"===typeof btoa;var Kc=!Kb,Lc=!Kb;var Mc=0,Nc=0;;;var Uc;Uc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({be:1,Zd:2,Yd:4,ee:8,de:16,ce:32,Pd:64,ge:128,Wd:256,Vd:512,ae:1024,Td:2048,fe:4096,Ud:8192})));var Vc=Uc?
var Yc=Uc?H=Uc?function(a){return a[Uc]|0}:Zc=Uc?function(a){return a[Uc]}:function(a){return a.ga},Xc=Uc?
function ad(a,b){Xc(b,(a|0)&-14591)}
;var dd={},ed={};var hd,id=!Kb;var kd,ld=[];Xc(ld,55);kd=Object.freeze(ld);;;function sd(){var a=Error();qd(a,"incident");return a}
;var vd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;;var Ed;;;;;Object.freeze({});Object.freeze({});function Zd(a,b,c,d){a=a.s;var e=Zc(a);md(e);var f=!!f;var g=!!(2&e)&&!0,h=Sd(a,e,b,3);e=Zc(a);var k=H(h),l=!!(2&k),m=!!(4&k),n=l&&m||!!(2048&k);if(!m){m=h;var q=e,p=!!(2&k);p&&(q|=2);for(var t=!p,u=!0,z=0,C=0;z<m.length;z++){var P=Dd(m[z],c,q);if(P instanceof c){if(!p){var Q=!!(H(P.s)&2);t&&(t=!Q);u&&(u=Q)}m[C++]=P}}C<z&&(m.length=C);k|=4;k=u?k|16:k&-17;k=t?k|8:k&-9;Xc(m,k);l&&!g&&(Object.freeze(h),n=!0)}g=k;n||(f||(k&=-33),k!==g&&Xc(h,k));n&&(h=Tc(h),k=Yd(k,e,f),Xc(h,k),Rd(a,e,b,h));b=h;c=null!=
d?Cd(d,c):new c;b.push(c);H(c.s)&2?Yc(b,8):Yc(b,16)}
function ce(a,b,c){if(null!=c){if("number"!==typeof c)throw rd("int32");if(!Number.isFinite(c)){var d=sd();gc(d)}}Qd(a,b,c)}
function de(a,b,c){if(null!=c&&!Number.isFinite(c)){var d=sd();gc(d)}return Qd(a,b,c)}
;L.prototype.toJSON=
L.prototype.clone=
L.prototype.Wb=dd;L.prototype.toString=
;var ge=window;ub("csi.gstatic.com");ub("googleads.g.doubleclick.net");ub("partner.googleadservices.com");ub("pubads.g.doubleclick.net");ub("securepubads.g.doubleclick.net");ub("tpc.googlesyndication.com");r=he.prototype;r.clone=
r.aspectRatio=
r.Qb=
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=;var me={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function oe(a){this.nd=a}
var qe=[pe("data"),pe("http"),pe("https"),pe("mailto"),pe("ftp"),new oe(];
var te="function"===typeof URL;;var ve={Sd:0,Xd:1,Qd:2,Rd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};y(we,Error);
;var ze={Ed:"allow-forms",Fd:"allow-modals",Gd:"allow-orientation-lock",Hd:"allow-pointer-lock",Id:"allow-popups",Jd:"allow-popups-to-escape-sandbox",Kd:"allow-presentation",Ld:"allow-same-origin",Md:"allow-scripts",Nd:"allow-top-navigation",Od:"allow-top-navigation-by-user-activation"},Be=ab(;
;var Ee=(new Date).getTime();;;;var Ke={};r=Le.prototype;r.isEnabled=
r.set=
r.get=
r.remove=
r.Qb=
r.clear=
var Pe=new Le("undefined"==typeof document?null:document);;"undefined"!==typeof TextDecoder&&new TextDecoder;var Te="undefined"!==typeof TextEncoder?new TextEncoder:null,Ue=Te?function(a){return Te.encode(a)}:;We.prototype.Aa=!1;We.prototype.dispose=
We.prototype.addOnDisposeCallback=
We.prototype.sa=Xe.prototype.stopPropagation=function(){this.i=!0};
Xe.prototype.preventDefault=var Ye=);Wa(Ze,Xe);var $e={2:"touch",3:"pen",4:"mouse"};
Ze.prototype.init=
Ze.prototype.stopPropagation=
Ze.prototype.preventDefault=var af="closure_listenable_"+(1E6*Math.random()|0);var bf=0;;ef.prototype.add=
ef.prototype.remove=
;var hf="closure_lm_"+(1E6*Math.random()|0),jf={},kf=0;var vf="__closure_events_fn_"+(1E9*Math.random()>>>0);;Wa(wf,We);wf.prototype[af]=!0;wf.prototype.addEventListener=function(a,b,c,d){lf(this,a,b,c,d)};
wf.prototype.removeEventListener=
wf.prototype.sa=
wf.prototype.La=
;y(zf,wf);zf.prototype.dispose=
zf.prototype.ca=
;Ef.prototype.set=
Ef.prototype.get=
;function Gf(a){this.s=I(a)}
y(Gf,L);function Hf(a){this.s=I(a)}
y(Hf,L);function If(a,b){return K(a,2,b)}
function Jf(a,b){return K(a,3,b)}
function Kf(a,b){return K(a,4,b)}
function Lf(a,b){return K(a,5,b)}
function Mf(a,b){return K(a,9,b)}
function Nf(a,b){var c=a.s,d=Zc(c);md(d);if(null==b)Rd(c,d,10);else{var e=H(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),k;if(k=!h)k=!1;for(var l=!0,m=!0,n=0;n<b.length;n++){var q=b[n];Cd(q,Gf);g||(q=!!(H(q.s)&2),l&&(l=!q),m&&(m=q))}g||(e|=5,e=l?e|8:e&-9,e=m?e|16:e&-17);if(k||h&&e!==f)b=Tc(b),f=0,e=Yd(e,d,!0);e!==f&&Xc(b,e);Rd(c,d,10,b)}return a}
function Of(a,b){return Qd(a,11,null==b?b:ud(b))}
Hf.ma=[10,6];var Rf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");;Xf.prototype.get=
;var Zf;;ag.prototype.add=
ag.prototype.remove=
var bg=new Xf(function(){return new cg},;
cg.prototype.set=
cg.prototype.reset=var dg,eg=!1,fg=new ag;;jg.prototype[Symbol.iterator]=function(){return this};
jg.prototype.next=
;;Wa(mg,lg);mg.prototype.reset=
mg.prototype.update=
mg.prototype.digest=function og(){}
og.prototype.next=function(){return pg};
var pg={done:!0,value:void 0};og.prototype.ia=function sg(a){this.h=a}
sg.prototype.ia=function(){return new tg(this.h())};
sg.prototype[Symbol.iterator]=function(){return new ug(this.h())};
sg.prototype.g=
function tg(a){this.h=a}
y(tg,og);tg.prototype.next=function(){return this.h.next()};
tg.prototype[Symbol.iterator]=function(){return new ug(this.h)};
tg.prototype.g=
y(ug,sg);ug.prototype.next=r=vg.prototype;r.has=
r.equals=
r.Qb=
r.clear=
r.remove=
r.delete=
r.get=
r.set=
r.forEach=
r.clone=
r.keys=function(){return rg(this.ia(!0)).g()};
r.values=function(){return rg(this.ia(!1)).g()};
r.entries=
r.ia=
;var Ag=D.JSON.stringify;;Eg.prototype.reset=
var Fg=new Xf(function(){return new Eg},;
Cg.prototype.then=
Cg.prototype.$goog_Thenable=!0;Cg.prototype.cancel=
Cg.prototype.O=function(a){this.g=0;Dg(this,2,a)};
Cg.prototype.oa=
Cg.prototype.K=
var Rg=gc;Wa(Ig,Ya);Ig.prototype.name="cancel";Wa(M,We);r=M.prototype;r.subscribe=
r.tb=
r.bb=
r.clear=
r.sa=function Vg(a){this.g=a}
Vg.prototype.set=
Vg.prototype.get=
Vg.prototype.remove=function(a){this.g.remove(a)};function Wg(a){this.g=a}
Wa(Wg,Vg);function Xg(a){this.data=a}
Wg.prototype.set=
Wg.prototype.h=
Wg.prototype.get=function Zg(a){this.g=a}
Wa(Zg,Wg);Zg.prototype.set=
Zg.prototype.h=function $g(){}
;function ah(){}
Wa(ah,$g);ah.prototype[Symbol.iterator]=
ah.prototype.clear=function bh(a){this.g=a}
Wa(bh,ah);r=bh.prototype;r.set=
r.get=
r.remove=
r.ia=
r.clear=
r.key=Wa(ch,bh);Wa(dh,ah);var fh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},eh=null;r=dh.prototype;r.set=
r.get=
r.remove=
r.ia=
r.clear=
;Wa(ih,ah);ih.prototype.set=
ih.prototype.get=
ih.prototype.remove=
ih.prototype.ia=/*

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
var N={},jh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=
N.ac=
var kh={Ra:
nc:,lh={Ra:
nc:;
N.xd=
N.xd();var mh=!0;try{new Uint8Array(1)}catch(a){mh=!1}
;var oh={};oh=for(var ph={},qh,rh=[],sh=0;256>sh;sh++){qh=sh;for(var th=0;8>th;th++)qh=qh&1?3988292384^qh>>>1:qh>>>1;rh[sh]=qh}ph=var uh={};uh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function vh(a){for(var b=a.length;0<=--b;)a[b]=0}
var wh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],xh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],yh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],zh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ah=Array(576);vh(Ah);var Bh=Array(60);vh(Bh);var Ch=Array(512);vh(Ch);var Dh=Array(256);vh(Dh);var Eh=Array(29);vh(Eh);var Fh=Array(30);vh(Fh);var Hh,Ih,Jh;var vi=!1;;var Ii;Ii=[new Hi(0,0,0,0,,
new Hi(4,4,8,4,Di),new Hi(4,5,16,8,Di),new Hi(4,6,32,32,Di),new Hi(4,4,16,16,Ei),new Hi(8,16,32,32,Ei),new Hi(8,16,128,128,Ei),new Hi(8,32,128,256,Ei),new Hi(32,128,258,1024,Ei),new Hi(32,258,258,4096,Ei)];
;var Li={};Li=var Mi=Object.prototype.toString;
Ni.prototype.push=
;;var Qi=new Pi("rawColdConfigGroup");var Ri=new Pi("rawHotConfigGroup");function Si(a){this.s=I(a)}
y(Si,L);Si.prototype.g=function Ti(a){this.s=I(a)}
y(Ti,L);function Ui(a){this.s=I(a)}
y(Ui,L);Ui.ma=[2];function Vi(a){this.s=I(a)}
y(Vi,L);Vi.prototype.getPlayerType=
Vi.prototype.setHomeGroupInfo=
Vi.ma=[9,66,32,86,100,101];function Wi(a){this.s=I(a)}
y(Wi,L);Wi.prototype.getKey=function(){return $d(this,1)};
Wi.prototype.ja=
var Xi=[2,3,4,5,6];function Yi(a){this.s=I(a)}
y(Yi,L);Yi.ma=[15,26,28];function Zi(a){this.s=I(a)}
y(Zi,L);Zi.ma=[5];function $i(a){this.s=I(a)}
y($i,L);function aj(a){this.s=I(a)}
y(aj,L);aj.prototype.setSafetyMode=
aj.ma=[12];function bj(a){this.s=I(a)}
y(bj,L);bj.ma=[12];var cj={le:"WEB_DISPLAY_MODE_UNKNOWN",he:"WEB_DISPLAY_MODE_BROWSER",je:"WEB_DISPLAY_MODE_MINIMAL_UI",ke:"WEB_DISPLAY_MODE_STANDALONE",ie:"WEB_DISPLAY_MODE_FULLSCREEN"};function dj(a){this.s=I(a)}
y(dj,L);dj.prototype.getKey=function(){return $d(this,1)};
dj.prototype.ja=function(){return $d(this,2)};function ej(a){this.s=I(a)}
y(ej,L);ej.ma=[4,5];function fj(a){this.s=I(a)}
y(fj,L);function gj(a){this.s=I(a)}
y(gj,L);var hj=[2,3,4,5];function ij(a){this.s=I(a)}
y(ij,L);function jj(a){this.s=I(a)}
y(jj,L);function kj(a){this.s=I(a)}
y(kj,L);function lj(a){this.s=I(a)}
y(lj,L);lj.ma=[10,17];function mj(a){this.s=I(a)}
y(mj,L);function nj(a){this.s=I(a)}
y(nj,L);function oj(a){this.s=I(a)}
y(oj,L);y(pj,L);
var qj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491];function rj(a){this.s=I(a)}
y(rj,L);function sj(a){this.s=I(a)}
y(sj,L);sj.prototype.getPlaylistId=
var be=[1,2];y(tj,L);tj.ma=[3];var uj=D.window,vj,wj,xj=(null==uj?void 0:null==(vj=uj.yt)?void 0:vj.config_)||(null==uj?void 0:null==(wj=uj.ytcfg)?void 0:wj.data_)||{};F("yt.config_",xj);function Aj(){var a=xj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Bj=[];;;var Ij=0;F("ytDomDomGetNextId",E("ytDomDomGetNextId")||;var Jj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
Kj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Kj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Kj.prototype.stopImmediatePropagation=var mb=D.ytEventsEventsListeners||{};F("ytEventsEventsListeners",mb);var Lj=D.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Lj);
var Oj=ab(;
;;var Sj=/^[\w.]*$/,Tj={q:!0,search_query:!0};var Wj=String(Uj);;var ck=new 
F("yt.ads_.signals_.getAdSignalsString",;Va();var dk="XMLHttpRequest"in D?null;
;var fk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(fk);var gk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},hk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(fk)),ik=!1;
function jk(a,b){b=void 0===b?{}:b;var c=ak(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in gk){var f=T(gk[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}U("enable_eom_webview_header")&&c&&T("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=Xj(bk()));return b}
;var uk=[{Vb:function(a){return"Cannot read property '"+a.key+"'"},
Hb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Vb:
Hb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Vb:
Hb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var wk={Ca:[],za:[{kb:vk,weight:500}]};;var yk;;var Ak=new M;;;function Gk(){}
;;;F("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var Jk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Kk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Lk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Mk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};;y(Ok,Error);;Rk.prototype.qa=
Rk.prototype.hb=var Tk=V("web_emulated_idle_callback_delay",300),Uk=1E3/60-3,Vk=[8,5,4,3,2,1,0];
y(Wk,We);r=Wk.prototype;r.hb=
r.Ha=
r.ba=
r.fd=
r.zd=function(){cl(this)};
r.Rc=
r.vd=
r.ud=
r.start=
r.sa=var fl=E("yt.scheduler.instance.timerIdMap_")||{},gl=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),hl=0,il=0;;y(wl,Rk);wl.prototype.Ha=
wl.prototype.ba=
wl.prototype.start=
var Df=xl();
U("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(F("yt.scheduler.instance.dispose",kl),F("yt.scheduler.instance.addJob",ml),F("yt.scheduler.instance.addImmediateJob",nl),F("yt.scheduler.instance.cancelJob",ol),F("yt.scheduler.instance.cancelAllJobs",ll),F("yt.scheduler.instance.start",ql),F("yt.scheduler.instance.pause",rl),F("yt.scheduler.instance.setPriorityThreshold",tl),F("yt.scheduler.instance.enablePriorityThreshold",ul),F("yt.scheduler.instance.clearPriorityThreshold",vl),F("yt.scheduler.initialized",
!0));yl.prototype.set=
yl.prototype.get=
yl.prototype.remove=var zl=);
;var Bl=[],Cl=!1;;;var Hl=Bc||Cc;var Il={},Jl=(Il.AUTH_INVALID="No user identifier specified.",Il.EXPLICIT_ABORT="Transaction was explicitly aborted.",Il.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Il.MISSING_INDEX="Index not created.",Il.MISSING_OBJECT_STORES="Object stores not created.",Il.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Il.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Il.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Il.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Il.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Il.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Il.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Il),Kl={},Ll=(Kl.AUTH_INVALID="ERROR",Kl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Kl.EXPLICIT_ABORT="IGNORED",Kl.IDB_NOT_SUPPORTED="ERROR",Kl.MISSING_INDEX=
"WARNING",Kl.MISSING_OBJECT_STORES="ERROR",Kl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Kl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Kl.QUOTA_EXCEEDED="WARNING",Kl.QUOTA_MAYBE_EXCEEDED="WARNING",Kl.UNKNOWN_ABORT="WARNING",Kl.INCOMPATIBLE_DB_VERSION="WARNING",Kl),Ml={},Nl=(Ml.AUTH_INVALID=!1,Ml.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ml.EXPLICIT_ABORT=!1,Ml.IDB_NOT_SUPPORTED=!1,Ml.MISSING_INDEX=!1,Ml.MISSING_OBJECT_STORES=!1,Ml.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ml.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ml.QUOTA_EXCEEDED=!1,Ml.QUOTA_MAYBE_EXCEEDED=!0,Ml.UNKNOWN_ABORT=!0,Ml.INCOMPATIBLE_DB_VERSION=!1,Ml);y(X,Ok);y(Ol,X);y(Pl,Error);var Ql=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
;function Ul(a){return a}
function Vl(a){this.g=a}
Wl.resolve=
Wl.reject=
Wl.prototype.then=
function Xl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Wl?$l(a,b,f,d,e):d(f)}catch(g){e(g)}}
;;;var em=window,Y=em.ytcsi&&em.ytcsi.now?em.ytcsi.now:em.performance&&em.performance.timing&&em.performance.now&&em.performance.timing.navigationStart?r=fm.prototype;r.add=
r.clear=
r.close=
r.delete=function(a,b){return gm(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=
r.objectStoreNames=
r.getName=function(){return this.g.name};
function im(a){this.g=a}
r=im.prototype;r.add=
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return cm(this.g.clear()).then(function(){})};
r.delete=
r.get=function(a){return cm(this.g.get(a))};
r.index=
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
km.prototype.abort=
km.prototype.objectStore=
function rm(a){this.g=a}
r=rm.prototype;r.delete=
r.get=function(a){return cm(this.g.get(a))};
r.getKey=function(a){return cm(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function um(a,b){this.request=a;this.cursor=b}
r=um.prototype;r.advance=function(a){this.cursor.advance(a);return sm(this.request)};
r.continue=
r.delete=
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=;ym.prototype.h=
ym.prototype.delete=
;var Cm=new ym("YtIdbMeta",{ab:{databases:{ib:1}},upgrade:);
;var Hm,Im=new function(){}(new function(){});
;new Bg;function Bn(a,b,c){c=void 0===c?{}:c;return Om(a,b,!1,c)}
;y(Hn,ym);Hn.prototype.h=
Hn.prototype.delete=
;var Kn={},Ln=Jn("ytGcfConfig",{ab:(Kn.coldConfigStore={ib:1},Kn.hotConfigStore={ib:1},Kn),Mb:!1,upgrade:
version:1});function Mn(a){return Am(Ln(),a)}
function Pn(a){var b,c;return B(function(d){return 1==d.g?A(d,Mn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,gm(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return tm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;y(Rn,We);Rn.prototype.sa=Sn.prototype.g=;var fo=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;F("ytPubsub2Pubsub2Instance",fo);F("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);;var ho=void 0,io=void 0;;var lo=V("max_body_size_to_compress",5E5),mo=V("min_body_size_to_compress",500),no=!0,oo=0,po=0,qo=V("compression_performance_threshold_lr",250),ro=V("slow_compressions_before_abandon_count",4),so=!1,to=new Map,uo=1,vo=!0;;;var Ao;function Bo(){Ao||(Ao=new yl("yt.innertube"));return Ao}
;r=Go.prototype;r.writeThenSend=
r.sendThenWrite=
r.sendAndWrite=
r.sb=
r.ic=
;var Qo;
;function So(a){return Am(Ro(),a)}
;var ap={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
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
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,vssData:491};var bp={},cp=Jn("ServiceWorkerLogsDatabase",{ab:(bp.SWHealthLog={ib:1},bp),Mb:!0,upgrade:
version:1});;var gp={},hp=0;;function kp(){if(!jp.g){var a=E("yt.networkRequestMonitor.instance")||new jp;F("yt.networkRequestMonitor.instance",a);jp.g=a}return jp.g}
jp.prototype.requestComplete=
jp.prototype.isEndpointCFR=
jp.prototype.removeParams=
jp.prototype.removeParams=jp.prototype.removeParams;jp.prototype.isEndpointCFR=jp.prototype.isEndpointCFR;jp.prototype.requestComplete=jp.prototype.requestComplete;jp.getInstance=kp;var lp;;y(Z,wf);r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Na=
r.cd=
r.Yc=function(){this.i=!0};
r.La=
r.Lb=
Z.prototype.sendNetworkCheckRequest=Z.prototype.Lb;Z.prototype.listen=Z.prototype.La;Z.prototype.enableErrorFlushing=Z.prototype.Yc;Z.prototype.getWindowStatus=Z.prototype.cd;Z.prototype.networkStatusHint=Z.prototype.Na;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=op;y(pp,wf);pp.prototype.ca=
pp.prototype.Na=
pp.prototype.Lb=
;var rp;y(sp,Go);sp.prototype.writeThenSend=function(a,b){b||(b={});Pk()||(this.g=!1);Go.prototype.writeThenSend.call(this,a,b)};
sp.prototype.sendThenWrite=
sp.prototype.sendAndWrite=
sp.prototype.awaitInitialization=
;var xp=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};F("ytNetworklessLoggingInitializationOptions",xp);yp.prototype.isReady=
;;var Ap=D.ytPubsubPubsubInstance||new M,Bp=D.ytPubsubPubsubSubscribedKeys||{},Cp=D.ytPubsubPubsubTopicToKeys||{},Dp=D.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;F("ytPubsubPubsubInstance",Ap);F("ytPubsubPubsubTopicToKeys",Cp);F("ytPubsubPubsubIsSynchronous",Dp);F("ytPubsubPubsubSubscribedKeys",Bp);var Ep=Symbol("injectionDeps");Gp.prototype.resolve=
;var Jp;function Kp(){Jp||(Jp=new Gp);return Jp}
;var Lp=window;;var Pp=U("web_enable_lifecycle_monitoring")&&0!==Mp(),Qp=U("web_enable_lifecycle_monitoring");Rp.prototype.cancel=
;Up.prototype.install=
Up.prototype.ya=
Up.prototype.oa=
Up.prototype.u=
function Yp(a){Pp&&a&&Np(a)}
da.Object.defineProperties(Up.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});var aq;y($p,Up);$p.prototype.K=
$p.prototype.O=
;var cq=[];F("yt.logging.transport.getScrapedGelPayloads",function(){return cq});dq.prototype.storePayload=
dq.prototype.smartExtractMatchingEntries=
dq.prototype.extractMatchingEntries=
dq.prototype.getSequenceCount=
dq.prototype.getSequenceCount=dq.prototype.getSequenceCount;dq.prototype.extractMatchingEntries=dq.prototype.extractMatchingEntries;dq.prototype.smartExtractMatchingEntries=dq.prototype.smartExtractMatchingEntries;dq.prototype.storePayload=dq.prototype.storePayload;;var hq=V("initial_gel_batch_timeout",2E3),iq=V("gel_queue_timeout_max_ms",6E4),jq=Math.pow(2,16)-1,kq=V("gel_min_batch_size",5),lq=void 0;var nq=new mq,oq=new mq,pq=new mq,qq=new mq,rq,sq=!0,tq=1,uq=new Map,vq=D.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",vq);var wq=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};F("ytLoggingTransportTokensToJspbCttTargetIds_",wq);var xq={};;var ar=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",ar);
;var er=[];;var gr=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",gr);;var ir=new Set,jr=0,kr=0,lr=0,mr=[],nr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];;;var sr={};;var ur={},vr=[],Tg=new M,wr={};;var Dr=null,Er=null;var Fr=window;
r=Gr.prototype;r.setSize=
r.getIframe=function(){return this.g};
r.fc=
r.addEventListener=
r.destroy=
r.kc=
r.Bc=
r.sendMessage=;y(Pr,Gr);r=Pr.prototype;r.kc=
r.fc=
r.getVideoEmbedCode=
r.getOptions=
r.getOption=
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return ur[a]});
F("YT.scan",xr);F("YT.subscribe",;
F("YT.unsubscribe",;
F("YT.Player",Pr);Gr.prototype.destroy=Gr.prototype.destroy;Gr.prototype.setSize=Gr.prototype.setSize;Gr.prototype.getIframe=Gr.prototype.getIframe;Gr.prototype.addEventListener=Gr.prototype.addEventListener;Pr.prototype.getVideoEmbedCode=Pr.prototype.getVideoEmbedCode;Pr.prototype.getOptions=Pr.prototype.getOptions;Pr.prototype.getOption=Pr.prototype.getOption;
vr.push(;
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||xr();var as=D.onYTReady;as&&as();var bs=D.onYouTubeIframeAPIReady;bs&&bs();var cs=D.onYouTubePlayerAPIReady;cs&&cs();}).call(this);
