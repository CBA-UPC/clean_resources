/*

Copyright (c) 2015-2018, University of Washington Interactive Data Lab
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
  may be used to endorse or promote products derived from this software
  without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var gvjs_kp="BUTTON",gvjs_lp="TEXTAREA",gvjs_mp="Uneven number of arguments",gvjs_np="background",gvjs_op="chartArea.bottom",gvjs_pp="chartArea.height",gvjs_qp="chartArea.left",gvjs_rp="chartArea.right",gvjs_sp="chartArea.top",gvjs_tp="chartArea.width",gvjs_up="datatable",gvjs_vp="datum",gvjs_wp="group",gvjs_R="horizontal",gvjs_xp="point",gvjs_yp="pointShape",gvjs_zp="rect",gvjs_Ap="slice",gvjs_Bp="strokeWidth",gvjs_Cp="svg",gvjs_S="vertical";gvjs_Ln.prototype.Dx=gvjs_T(28,;gvjs_dn.prototype.De=gvjs_T(27,function(){return this.Xf.size});gvjs_Ln.prototype.De=gvjs_T(26,;gvjs_vm.prototype.gG=gvjs_T(25,;gvjs_wm.prototype.gG=gvjs_T(24,;gvjs_H.prototype.pb=gvjs_T(16,;
gvjs_cn.prototype.pb=gvjs_T(15,;function gvjs_Dp(a,b,c){b=b.reduceRight(c);gvjs_Bg(a,b)}function gvjs_Ep(a,b,c){if(a.KH){var d={};gvjs_Dp(d,a.KH[0].split("."),c);c=d}for(var e=d=0;e<b;e++)e===a.mE.length&&a.mE.push(0),d+=a.mE[e];a.mE[b]++;a.cc.splice(d,0,c)}
unction gvjs_Gp(a){var b=void 0===b?{}:b;for(var c=a.cc.length-1;0<=c;c--)gvjs_Fp(b,a.cc[c]);return b}=gvjs_Mp.prototype;gvjs_.De=function(){return this.size};gvjs_.Wb=gvjs_.Km=gvjs_.sm=function(a){return this.has(a)};
gvjs_.has=gvjs_.Dx=gvjs_.equals=gvjs_.isEmpty=gvjs_.clear=gvjs_.remove=function(a){return this.delete(a)};
gvjs_.delete=function(a){return gvjs_Lp(this.ma,a)?(delete this.ma[a],this.cq(this.size-1),this.AG++,this.Rb.length>2*this.size&&gvjs_Np(this),!0):!1};vjs_.get=
gvjs_.set=gvjs_.addAll=gvjs_.forEach=gvjs_.clone=function(){return new gvjs_Mp(this)};
gvjs_.transpose=gvjs_.keys=function(){return gvjs_Kp(this.Di(!0)).gG()};gvjs_.values=gvjs_.entries=
gvjs_.Di=gvjs_.cq=function(a){this.size=a};var gvjs_Pp=Symbol("referencepoint");var gvjs_Ada=);var gvjs_Rp=);function gvjs_Sp(a){this.ma=new gvjs_Mp;this.size=0;a&&this.addAll(a)}vjs_=gvjs_Sp.prototype;gvjs_.De=gvjs_.add=gvjs_.addAll=function(a){a=gvjs_vn(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c]);this.cq(this.ma.size)};gvjs_.removeAll=
gvjs_.delete=gvjs_.remove=gvjs_.clear=gvjs_.isEmpty=gvjs_.has=function(a){return this.ma.sm(gvjs_Tp(a))};gvjs_.contains=gvjs_.IS=gvjs_p(29);gvjs_.Wb=function(){return this.ma.Wb()};gvjs_.values=gvjs_.clone=
gvjs_.equals=gvjs_.VS=gvjs_.Di=gvjs_Sp.prototype[Symbol.iterator]=
gvjs_Sp.prototype.cq=var gvjs_Up={};vjs_Vp.prototype.fQ=null;gvjs_Vp.prototype.getContent=function(){return this.content};gvjs_Vp.prototype.toString=gvjs_Vp.prototype.lA=gvjs_p(30);vjs_u(gvjs_Wp,gvjs_Vp);gvjs_Wp.prototype.tm=gvjs_Up;var gvjs_U=gvjs_Wp),gvjs_Xp=gvjs_Wp);var gvjs_Yp={s:f:d:;gvjs_Yp.i=gvjs_Yp.d;gvjs_Yp.u=gvjs_Yp.d;gvjs_Ip(["A","AREA",gvjs_kp,"HEAD",gvjs_Oa,"LINK","MENU","META","OPTGROUP","OPTION","PROGRESS",gvjs_bb,gvjs_9a,gvjs_$a,gvjs_lp,"TITLE","TRACK"]);var gvjs_Bda=gvjs_s.requestAnimationFrame||gvjs_s.mozRequestAnimationFrame||gvjs_s.webkitRequestAnimationFrame||gvjs_s.msRequestAnimationFrame||function(a){return gvjs_s.setTimeout(1E3/60)};vjs_r(gvjs_Zp,gvjs_L);gvjs_Zp.prototype.ar=gvjs_p(31);gvjs_Zp.prototype.dispatchEvent=gvjs_Zp.prototype.J=function gvjs__p(a,b,c,d,e){if(null==a||null==b)null==c&&(c=e),c=Math.max(0,d-c),null==a&&null==b?a=b=c/2:null==a?a=Math.max(0,c-b):b=Math.max(0,c-a);c=Math.max(0,Math.round(d-(a+b)));a=Math.round(a);d=Math.min(d,a+c);c=d-a;return{before:a,after:d,size:c}}
function gvjs_0p(a,b,c){var d=a/1.618,e=a-b*(1.618-1),f=b/1.618,g=b-a*(1.618-1);a=gvjs__p(c.left,c.right,c.width,a,Math.round(d>e?d:(d+2*e)/3));b=gvjs__p(c.top,c.bottom,c.height,b,Math.round(f>g?f:(f+2*g)/3));return{left:a.before,right:a.after,width:a.size,top:b.before,bottom:b.after,height:b.size}};
