(function(){'use strict';var ba="function"==typeof Object.defineProperties?Object.defineProperty:
var da=ca(this);p("Symbol",;
p("Symbol.iterator",;
var ha="function"==typeof Object.create?Object.create:ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?null}var ma=ia;
var oa="function"==typeof Object.assign?Object.assign:
p("Object.assign",;
p("Object.values",;
p("Object.is",;
p("Array.prototype.includes",;
p("String.prototype.includes",;
p("Array.prototype.values",;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var qa=this||self;var ra,va;a:{for(var wa=["CLOSURE_FLAGS"],xa=qa,ya=0;ya<wa.length;ya++)if(xa=xa[wa[ya]],null==xa){va=null;break a}va=xa}var za=va&&va[610401301];ra=null!=za?za:!1;var r,Aa=qa.navigator;r=Aa?Aa.userAgentData||null:null;;;var Da=w()?!1:u("Trident")||u("MSIE");!u("Android")||Ca();Ca();u("Safari")&&(Ca()||(w()?0:u("Coast"))||(w()?0:u("Opera"))||(w()?0:u("Edge"))||(w()?Ba("Microsoft Edge"):u("Edg/"))||w()&&Ba("Opera"));var Ea={},Fa=null;var Ga="undefined"!==typeof Uint8Array,Ha=!Da&&"function"===typeof btoa;var x;x="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;var Ia=Math.max,Ja=Ia.apply,y=Object.values({sb:1,qb:2,pb:4,vb:8,ub:16,tb:32,kb:64,xb:128,ob:256,nb:512,rb:1024,lb:2048,wb:4096,mb:8192}),Ka;if(y instanceof Array)Ka=y;else{var La;var Ma="undefined"!=typeof Symbol&&Symbol.iterator&&y[Symbol.iterator];if(Ma)La=Ma.call(y);else if("number"==typeof y.length)La={next:aa(y)};else throw Error(String(y)+" is not an iterable or ArrayLike");for(var Na,Oa=[];!(Na=La.next()).done;)Oa.push(Na.value);Ka=Oa}Ja.call(Ia,Math,Ka);
var Pa=x?Qa=x?
var A=x?function(a){return a[x]|0}:Ra=x?function(a){return a[x]}:C=x?
function Sa(a,c){C(c,(a|0)&-14591)}
;var Va={},Wa={};var Za;var db,eb=[];C(eb,55);db=Object.freeze(eb);Object.freeze(new function(){});
Object.freeze(new ;;var gb;;function kb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(cb(a,void 0,0))return}else if(Ga&&null!=a&&a instanceof Uint8Array){if(Ha){for(var c="",b=0,d=a.length-10240;b<d;)c+=String.fromCharCode.apply(null,a.subarray(b,b+=10240));c+=String.fromCharCode.apply(null,b?a.subarray(b):a);a=btoa(c)}else{void 0===c&&(c=0);if(!Fa){Fa={};b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");d=["+/=",
"+/","-_=","-_.","-_"];for(var e=0;5>e;e++){var f=b.concat(d[e].split(""));Ea[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fa[h]&&(Fa[h]=g)}}}c=Ea[c];b=Array(Math.floor(a.length/3));d=c[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=c[l>>2];l=c[(l&3)<<4|k>>4];k=c[(k&15)<<2|h>>6];h=c[h&63];b[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-f){case 2:g=a[f+1],h=c[(g&15)<<2]||d;case 1:a=a[f],b[e]=""+c[a>>2]+c[(a&3)<<4|g>>4]+h+d}a=b.join("")}return a}}return a}
;;;function rb(a,c,b){var d=Ua(c);if(3>=d){var e=c;if(c&256)var f=a[a.length-1];else{if(null==b)return e;f=a[d+(+!!(c&512)-1)]={};e|=256}f[3]=b;3<d&&(a[3+(+!!(c&512)-1)]=void 0);e!==c&&C(a,e);return e}a[3+(+!!(c&512)-1)]=b;c&256&&(a=a[a.length-1],3 in a&&delete a[3]);return c}
;D.prototype.toJSON=
D.prototype.Ea=Va;D.prototype.toString=
function vb(a,c){if(null==c)return new a;if(!Array.isArray(c))throw Error("must be an array");if(Object.isFrozen(c)||Object.isSealed(c)||!Object.isExtensible(c))throw Error("arrays passed to jspb constructors must be mutable");Pa(c,128);Pa(c,32);return hb(a,c)}
;/*

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
var E={},wb="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;E.assign=
E.Fa=
var xb={ja:
Ka:,yb={ja:
Ka:;
E.jb=
E.jb();var zb=!0;try{new Uint8Array(1)}catch(a){zb=!1}
;var Bb={};Bb=for(var F={},G,Cb=[],Db=0;256>Db;Db++){G=Db;for(var Eb=0;8>Eb;Eb++)G=G&1?3988292384^G>>>1:G>>>1;Cb[Db]=G}F=var Fb={};Fb={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function I(a){for(var c=a.length;0<=--c;)a[c]=0}
var Gb=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Hb=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ib=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Jb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=Array(576);I(J);var Kb=Array(60);I(Kb);var K=Array(512);I(K);var Lb=Array(256);I(Lb);var Mb=Array(29);I(Mb);var Nb=Array(30);I(Nb);var Pb,Qb,Rb;var hc=!1;;var Z;Z=[new Y(0,0,0,0,,
new Y(4,4,8,4,kc),new Y(4,5,16,8,kc),new Y(4,6,32,32,kc),new Y(4,4,16,16,X),new Y(8,16,32,32,X),new Y(8,16,128,128,X),new Y(8,32,128,256,X),new Y(32,128,258,1024,X),new Y(32,258,258,4096,X)];
;var pc={};pc=var qc=Object.prototype.toString;
rc.prototype.push=
;na(tc,D);na(uc,D);uc.ib=[3];var vc="undefined"!==typeof TextEncoder?new TextEncoder:null,wc=vc?self.addEventListener("message",function(a){var c=a.data;if("gelBatchToSerialize"===c.op){a=c.clientEvents;var b=c.key;c=vb(uc,c.batchRequest);for(var d=0;d<a.length;d++){var e=c,f=vb(tc,a[d]),g=tc;e=e.P;var h=Ra(e);if(h&2)throw Error();var l=void 0,k=!0,n=!!(2&h),q=n?1:2,v=1===q;q=2===q;k=!!k;l&&(l=!n);a:{if(3>=Ua(h)){if(h&256){n=e[e.length-1][3];break a}}else if(n=3+(+!!(h&512)-1),n<e.length){n=e[n];break a}n=void 0}n=Array.isArray(n)?n:db;var m=A(n),V=!!(4&m);if(!V){var t=m;0===t&&(t=tb(t,h,k));
m=t=z(t,1,!0);t=n;var R=g,H=h,S=!!(2&m);S&&(H=z(H,2,!0));for(var $a=!S,ab=!0,sa=0,bb=0;sa<t.length;sa++){var B=t[sa];var ta=R,Yb=H;if(null==B||"object"!==typeof B||B.Ea!==Va)if(Array.isArray(B)){var Zb=A(B),fa=Zb;0===fa&&(fa|=Yb&32);fa|=Yb&2;fa!==Zb&&C(B,fa);B=new ta(B)}else B=void 0;B instanceof R&&(S||(ta=!!(A(B.P)&2),$a&&($a=!ta),ab&&(ab=ta)),t[bb++]=B)}bb<sa&&(t.length=bb);m=z(m,4,!0);m=z(m,16,ab);m=z(m,8,$a);C(t,m);S&&Object.freeze(t)}t=!!(8&m)||v&&!n.length;if(l&&!t){sb(m)&&(n=Array.prototype.slice.call(n),
m=tb(m,h,k),h=rb(e,h,n));l=n;t=m;for(R=0;R<l.length;R++)m=l[R],H=m.P,S=Ra(H),H=S&2?hb(m.constructor,qb(H,S,!1)):m,m!==H&&(l[R]=H);t=z(t,8,!0);t=z(t,16,!l.length);C(l,t);m=t}sb(m)||(l=m,v?m=z(m,!n.length||16&m&&(!V||32&m)?2:2048,!0):k||(m=z(m,32,!1)),m!==l&&C(n,m),v&&Object.freeze(n));q&&sb(m)&&(n=Array.prototype.slice.call(n),m=tb(m,h,k),C(n,m),rb(e,h,n));e=n;if(null!=f){if(!(f instanceof g))throw Error("Expected instanceof "+fb(g)+" but got "+(f&&fb(f.constructor)));}else f=new g;e.push(f);A(f.P)&
2?Qa(e,8):Qa(e,16)}a:{Za=!0;try{var ua=JSON.stringify(c.toJSON(),jb);break a}finally{Za=!1}ua=void 0}self.postMessage({op:"serializedGelBatch",serializedBatch:ua,key:b})}else if("gelBatchToGzip"===c.op){ua=c.key;a=wc(c.serializedBatch);b=new rc({ab:!0});b.push(a,!0);if(b.err)throw b.ua||Fb[b.err];self.postMessage({op:"gzippedGelBatch",gzippedBatch:b.result,key:ua})}});}).call(this);
