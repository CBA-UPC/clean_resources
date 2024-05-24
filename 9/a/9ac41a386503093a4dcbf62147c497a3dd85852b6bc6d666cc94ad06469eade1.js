/*******************************************************************************
 * Copyright 2020 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
());

// https://d3js.org v6.2.0 Copyright 2020 Mike Bostock
!this,(function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}nst i=e(n),o=i.right,a=i.left,u=e(r).center; y(t){return t}r b=Array.prototype.slice;function m(t){return function(){return t}}var x=Math.sqrt(50),w=Math.sqrt(10),M=Math.sqrt(2);function A(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=T(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(a=-a,t=Math.ceil(t*a),n=Math.floor(n*a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)/a;return r&&o.reverse(),o}tion N(){var t=y,n=p,e=k;function r(r){Array.isArray(r)||(r=Array.from(r));var i,a,u=r.length,c=new Array(u);for(i=0;i<u;++i)c[i]=t(r[i],i,r);var f=n(c),s=f[0],l=f[1],h=e(c,s,l);Array.isArray(h)||(h=+h,n===p&&([s,l]=E(s,l,h)),(h=A(s,l,h))[h.length-1]===l&&h.pop());for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var g,y=new Array(d+1);for(i=0;i<=d;++i)(g=y[i]=[]).x0=i>0?h[i-1]:s,g.x1=i<d?h[i]:l;for(i=0;i<u;++i)s<=(a=c[i])&&a<=l&&y[o(h,a,0,d)].push(r[i]);return y}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:m(n),r):t},r.domain=r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?m(b.call(t)):m(t),r):e},r}ction D(t,n,e){const r=t[n];t[n]=t[e],t[e]=r}ion I(t,n){return[t,n]}r L=j(Math.random);nction X(t){return t.length}r $=Array.prototype.slice;function W(t){return t}var Z=1e-6;function K(t){return"translate("+(t+.5)+",0)"}t={value:;unction ot(t){this._=t}prototype=it.prototype={constructor:ot,on:copy:call:apply:;var ft="http://www.w3.org/1999/xhtml",st={svg:"http://www.w3.org/2000/svg",xhtml:ft,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};tion gt(){}function yt(t){return null==t?gt:function(){return this.querySelector(t)}}function vt(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}wt=Array.prototype.find;function Mt(){return this.firstElementChild}var At=Array.prototype.filter;function Tt(){return this.children}nction kt(t){return function(){return t}}nction Pt(t){return t.__data__}function zt(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Dt(t){return function(){this.removeAttribute(t)}}function qt(t){return function(){this.removeAttributeNS(t.space,t.local)}}ion Bt(t){return function(){this.style.removeProperty(t)}}Zt(t,n){for(var e=$t(t),r=-1,i=n.length;++r<i;)e.add(n[r])}unction Qt(t){return function(){Zt(this,t)}}nction nn(){this.textContent=""}function en(t){return function(){this.textContent=t}}function rn(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}ion sn(){return null}unction hn(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}otype={constructor:Et,appendChild:insertBefore:querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:,Wt.prototype={add:remove:contains:;var mn=[null];function xn(t,n){this._groups=t,this._parents=n}.prototype=wn.prototype={constructor:xn,select:selectAll:selectChild:function(t){return this.select(null==t?Mt:function(t){return function(){return wt.call(this.children,t)}}("function"==typeof t?t:xt(t)))},selectChildren:filter:data:enter:function(){return new xn(this._enter||this._groups.map(St),this._parents)},exit:join:merge:selection:function(){return this},order:sort:call:nodes:function(){return Array.from(this)},node:size:empty:each:attr:style:property:classed:text:function(t){return arguments.length?this.each(null==t?nn:("function"==typeof t?rn:en)(t)):this.node().textContent},html:raise:function(){return this.each(cn)},lower:function(){return this.each(fn)},append:insert:remove:function(){return this.each(ln)},clone:datum:on:dispatch:[Symbol.iterator]:;var An=0;tion Nn(t){t.stopImmediatePropagation()}function Cn(t){t.preventDefault(),t.stopImmediatePropagation()}.prototype=Tn.prototype={constructor:Sn,get:set:remove:toString:function(){return this._}};var Dn=t=>()=>t;tion Un(){return navigator.maxTouchPoints||"ontouchstart"in this}nction Yn(){}qn.prototype.on=var Ln=.7,jn=1/Ln,Hn="\\s*([+-]?\\d+)\\s*",Xn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Gn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Vn=/^#([0-9a-f]{3,8})$/,$n=new RegExp("^rgb\\("+[Hn,Hn,Hn]+"\\)$"),Wn=new RegExp("^rgb\\("+[Gn,Gn,Gn]+"\\)$"),Zn=new RegExp("^rgba\\("+[Hn,Hn,Hn,Xn]+"\\)$"),Kn=new RegExp("^rgba\\("+[Gn,Gn,Gn,Xn]+"\\)$"),Qn=new RegExp("^hsl\\("+[Xn,Gn,Gn]+"\\)$"),Jn=new RegExp("^hsla\\("+[Xn,Gn,Gn,Xn]+"\\)$"),te={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function ne(){return this.rgb().formatHex()}ion ue(t,n,e,r){return 1===arguments.length?ae(t):new ce(t,n,e,null==r?1:r)}function ce(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}ion pe(t,n,e,r){return 1===arguments.length?de(t):new ge(t,n,e,null==r?1:r)}function ge(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}n(Yn,re,{copy:displayable:hex:ne,formatHex:ne,formatHsl:function(){return de(this).formatHsl()},formatRgb:ee,toString:ee}),In(ce,ue,Bn(Yn,{brighter:function(t){return t=null==t?jn:Math.pow(jn,t),new ce(this.r*t,this.g*t,this.b*t,this.opacity)},darker:rgb:displayable:hex:fe,formatHex:fe,formatRgb:se,toString:se})),In(ge,pe,Bn(Yn,{brighter:function(t){return t=null==t?jn:Math.pow(jn,t),new ge(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Ln:Math.pow(Ln,t),new ge(this.h,this.s,this.l*t,this.opacity)},rgb:displayable:formatHsl:));const ve=Math.PI/180,_e=180/Math.PI,be=.96422,me=.82521,xe=4/29,we=6/29,Me=3*we*we;unction Te(t,n,e,r){return 1===arguments.length?Ae(t):new Se(t,n,e,null==r?1:r)}function Se(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}ion ze(t,n,e,r){return 1===arguments.length?Pe(t):new De(t,n,e,null==r?1:r)}function De(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}n(Se,Te,Bn(Yn,{brighter:darker:rgb:)),In(De,ze,Bn(Yn,{brighter:darker:rgb:));var Re=-.14861,Fe=1.78277,Oe=-.29227,Ue=-.90649,Ie=1.97294,Be=Ie*Ue,Ye=Ie*Fe,Le=Fe*Oe-Ue*Re;He,Bn(Yn,{brighter:function(t){return t=null==t?jn:Math.pow(jn,t),new Xe(this.h,this.s,this.l*t,this.opacity)},darker:rgb:));var We=t=>()=>t;tr=1);ar er=nr(Ve),rr=nr($e);=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,lr=new RegExp(sr.source,"g"); gr,yr=180/Math.PI,vr={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};r mr=br((,"px, ","px)","deg)"),xr=br((,", ",")",")");ar Mr=Math.SQRT2,2,4);function Ar(t){return function(n,e){var r=t((n=pe(n)).h,(e=pe(e)).h),i=Je(n.s,e.s),o=Je(n.l,e.l),a=Je(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Tr=Ar(Ke),Sr=Ar(Je);ar kr=Er(Ke),Nr=Er(Je);ar Pr=Cr(Ke),zr=Cr(Je);ar qr,Rr,Fr=0,Or=0,Ur=0,Ir=0,Br=0,Yr=0,Lr="object"==typeof performance&&performance.now?performance:Date,jr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):ype=Vr.prototype={constructor:Gr,restart:stop:;var Jr=it("start","end","cancel","interrupt"),ti=[];unction ei(t,n){var e=ii(t,n);if(e.state>0)throw new Error("too late; already scheduled");return e}){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&vi(t,i)),e}return i._value=n,i}unction mi(t,n){return function(){ei(this,t).delay=+n.apply(this,arguments)}}function xi(t,n){return n=+n,function(){ei(this,t).delay=n}}Si=wn.prototype.constructor;i=0; Fi=wn.prototype;Di.prototype=qi.prototype={constructor:Di,select:selectAll:filter:merge:selection:transition:call:Fi.call,nodes:Fi.nodes,node:Fi.node,size:Fi.size,empty:Fi.empty,each:Fi.each,on:attr:attrTween:style:styleTween:text:textTween:remove:tween:delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?mi:xi)(n,t)):ii(this.node(),n).delay},duration:ease:easeVarying:end:[Symbol.iterator]:Fi[Symbol.iterator]};r Ii=3),Bi=3),Yi=3),Li=Math.PI,ji=Li/2;$i=4/11,Wi=7.5625;ar Ki=1.70158,Qi=Ki),Ji=Ki),to=Ki),no=2*Math.PI,eo=1,.3),ro=1,.3),io=1,.3),oo={time:null,delay:0,duration:250,ease:Ui};n.prototype.interrupt=wn.prototype.transition=var uo=[null];var co=t=>()=>t;unction so(t){t.stopImmediatePropagation()}function lo(t){t.preventDefault(),t.stopImmediatePropagation()}var ho={name:"drag"},po={name:"space"},go={name:"handle"},yo={name:"center"};const{abs:vo,max:_o,min:bo}=Math;r wo={name:"x",handles:["w","e"].map(Co),input:output:function(t){return t&&[t[0][0],t[1][0]]}},Mo={name:"y",handles:["n","s"].map(Co),input:output:,Ao={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Co),input:output:function(t){return t}},To={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},So={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Eo={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},ko={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},No={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};unction Po(t){return!t.ctrlKey&&!t.button}unction Do(){return navigator.maxTouchPoints||"ontouchstart"in this} Oo=Math.abs,Uo=Math.cos,Io=Math.sin,Bo=Math.PI,Yo=Bo/2,Lo=2*Bo,jo=Math.max,Ho=1e-12;st $o=Math.PI,Wo=2*$o,Zo=1e-6,Ko=Wo-Zo;unction Jo(){return new Qo}Qo.prototype=Jo.prototype={constructor:Qo,moveTo:closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:quadraticCurveTo:bezierCurveTo:arcTo:arc:rect:toString:function(){return this._}};var ta=Array.prototype.slice;function na(t){return function(){return t}}function ea(t){return t.source}function ra(t){return t.target}function ia(t){return t.radius}function oa(t){return t.startAngle}function aa(t){return t.endAngle}function ua(){return 0}function ca(){return 10}ar sa=Array.prototype.slice;ar ha=t=>()=>t;ction ya(){}var va=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];ction xa(t){return t[0]}function wa(t){return t[1]}function Ma(){return 1}const Aa=Math.pow(2,-52),Ta=new Uint32Array(512); qa(t){return t[0]}function Ra(t){return t[1]}const Fa=1e-6;st Ba=2*Math.PI,Ya=Math.pow;function La(t){return t[0]}function ja(t){return t[1]}r Ga={},Va={};a=Qa(","),tu=Ja.parse,nu=Ja.parseRows,eu=Ja.format,ru=Ja.formatBody,iu=Ja.formatRows,ou=Ja.formatRow,au=Ja.formatValue,uu=Qa("\t"),cu=uu.parse,fu=uu.parseRows,su=uu.format,lu=uu.formatBody,hu=uu.formatRows,du=uu.formatRow,pu=uu.formatValue;const gu=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function yu(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function vu(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()} xu=mu(tu),wu=mu(cu);r Tu=Au("application/xml"),Su=Au("text/html"),Eu=Au("image/svg+xml");nction Cu(t){return t[0]}Ru=zu.prototype=Du.prototype;function Fu(t){return function(){return t}}unction Uu(t){return t.x+t.vx}unction Bu(t){return t.index}u.copy=Ru.add=Ru.addAll=Ru.cover=Ru.data=Ru.extent=Ru.find=Ru.remove=Ru.removeAll=Ru.root=Ru.size=Ru.visit=Ru.visitAfter=Ru.x=function(t){return arguments.length?(this._x=t,this):this._x},Ru.y=const Lu=4294967296;function ju(t){return t.x}function Hu(t){return t.y}var Xu=Math.PI*(3-Math.sqrt(5));r $u,Wu=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;prototype=Ku.prototype,Ku.prototype.toString=var Ju={"%":b:t=>Math.round(t).toString(2),c:d:e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:o:t=>Math.round(t).toString(8),p:r:Qu,s:X:x:;ar nc,ec=Array.prototype.map,rc=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]({thousands:",",grouping:[3],currency:["$",""]});var fc=1e-6,sc=1e-12,lc=Math.PI,hc=lc/2,dc=lc/4,pc=2*lc,gc=180/lc,yc=lc/180,vc=Math.abs,_c=Math.atan,bc=Math.atan2,mc=Math.cos,xc=Math.ceil,wc=Math.exp,Mc=Math.hypot,Ac=Math.log,Tc=Math.pow,Sc=Math.sin,Ec=Math.sig0},kc=Math.sqrt,Nc=Math.tfunction Dc()}var Rc={Feature:function(t,n){qc(t.geometry,n)},FeatureCollecti)}},Fc={Sphe)},Poi)},MultiPoi)},LineStri)},MultiLineStri)},Polyg)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Uc(e[r],n)},GeometryCollecti)var Bc,Yc,Lc,jc,Hc,Xc,Gc,Vc,$c,Wc,Zc,Kc,Qc,Jc,tf,nf,ef=new g,rf=new g,of={point:Dc,lineStart:Dc,lineEnd:Dc,polygonStaf},polygonEc},sphe)}};function af(){of.point=_f,bf,mf,xf,wf,Mf,Af,Tf,Sf,Ef,kf,Nf,Cf,Pf,zf,Df={point:qf,lineStart:Ff,lineEnd:Of,polygonSta)},polygonEc},sphe)}function Ff(){Df.point=Hf={sphere:Dc,point:Xf,lineStart:Vf,lineEnd:Zf,polygonStart:function(){Hf.lineStart=Kf,Hf.lineEnd=Qf},polygonEf}function Vf(){Hf.point=}function Zf(){Hf.point=s((function(){return!0}}})}),[-lc,-hc)}var Ms,As,Ts,Ss,Es=1e9,ks=-}}var Cs={sphere:Dc,point:Dc,lineStart:function(){Cs.point=zs,Cs.lineEnd=Ps},lineEnd:Dc,polygonStart:Dc,polygonEnd:Dar Rs=[null,null],Fs={type:"LineString",coordinates:R)}var Us={Feature:function(t,n){return Bs(t.geometry,n)},FeatureCollecti1}},Is={Sphe0},Point:function(t,n){return Ys(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ys(e[r],n))return!0;return!1},LineString:function(t,n){return Ls(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Ls(e[r],n))return!0;return!1},Polyg)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(js(e[r],n))return!0;return!1},GeometryCollecti1ction Gs(t,n,e){var r=B(t,n-fc,e).concat(n);return function(t){return r.map((function(n){return[t,n]})}var Ws,Zs,Ks,Qs,>t,tl=new g,nl=new g,el={point:Dc,lineStart:Dc,lineEnd:Dc,polygonStart:function(){el.lineStart=rl,el.lineEnd=al},polygonEg},resut}};function rl(){el.point=il}function il(t,n){el.point=ol,Ws=Ks=t,Zs=Qsn}function al(){ol(Ws,Zs)}var ul=1/0,cl=ul,fl=-ul,sl=fl,ll={poi)},lineStart:Dc,lineEnd:Dc,polygonStart:Dc,polygonEnd:Dc,resut}};var hl,dl,pl,gl,yl=0,vl=0,_l=0,bl=0,ml=0,xl=0,wl=0,Ml=0,Al=0,Tl={point:Sl,lineStart:El,lineEnd:Cl,polygonStart:function(){Tl.lineStart=Pl,Tl.lineEnd=zl},polygonEl},resutl}function El(){Tl.point=}function Cl(){Tl.point=Sl}function Pl(){Tl.point=Dl}function zl(){ql(hl,d}function Rl(t){this._context=t}Rl.prototype={_radius:4.5,pointRadis},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEN},poi}},result:Dc};var Fl,Ol,Ul,Il,Bl,Yl=new g,Ll={point:Dc,lineStal},lineEc},polygonSta0},polygonEnd:function(){Fl=null},resutnction $l(.prototype={_radius:4.5,_circle:Gl(4.5),pointRadis},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEN},poi}},resul}},$l.prototype={constructor:$l,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var th=mc(30*y)}var eh=Vl({poi)}=s)}));hh.invert=l)}));var dh=s)}invert=lt})),ph.inve]},_h.invert=_h;var mh=1.340264,xh=-.081106,wh=893e-6,Mh=.003796,Ah=kc(3)ction Ph(t,n){return t.parent===n.parent?1unction Fh(t){return t.childrturn 0}function rd(t){return function(){return nction fd(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*f}Th.inve]},Sh.invert=lh(_c),Eh.inve]},kh.invert=lh(Pc),Nh.invert=l)})),Ch.inve]},Bh.prototype=Rh.prototype={constructor:Bh,cou)},eas},eachAfts},eachBefos},fir},s)},so)},par},anceston},descendan)},leavt},linn},co)},[Symbol.iterato)}};var sd={depth:-1},ld={};function hd(t){return t.id}function dd(t){return t.parentrototype=Object.create(Bh.prototype);var xd=(1+Math.sqrt(5))v}var e}(xd);var e}(xvar kd=Math.random,e}(kd),e}(kd),e}(kd),r}(kd),e}(kd),r}(kd),e}(kd),e}(kd),e}(kd),e}(kd),r}(kd),r}(kd),i}(kd),e}(kd),e}(kd),e}(kd),i}(kd);const Gd=1/42949672}const Wd=Symbol("implicitfunction Jd(t){return+t}var tp=[0,1];function np(t){returnunction ap(){var t,n,e,r,i,o,a=tp,u=tp,c=dr,f=}return l.inve)},l.doma)},l.range=function(t){return arguments.length?(u=Array.from(t),s()):u.slice()},l.rangeRou)},l.clap},l.interpolac},l.unknown=function(t){return arguments.length?(e=t,l):unction lp(t){return Math.log(t)}function hp(t){return Math.exp(t)}function dp(t){return-Math.log(-Date,Np=new Dai}var Pp=Cp((function(){})}t}));Pp.evel};var zp=Pp.range,Dp=1e3,qp=6e4,Rp=36e5,Fp=864e5,Op=6048e5,Up=C)}),(function(t,n){t.setTime(+t+n*Dp)}),(function(t,n){return(n-t)/Dp}),(function(t){return t.getUTCSeconds()})),Ip=Up.range,Bp=C)}),(function(t,n){t.setTime(+t+n*qp)}),(function(t,n){return(n-t)/qp}),(function(t){return t.getMinutes()})),Yp=Bp.range,Lp=C)}),(function(t,n){t.setTime(+t+n*Rp)}),(function(t,n){return(n-t)/Rp}),(function(t){return t.getHours()})),jp=Lp.range,Hp=-1),Xp=Hp.ran)}var Vp=Gp(0),$p=Gp(1),Wp=Gp(2),Zp=Gp(3),Kp=Gp(4),Qp=Gp(5),Jp=Gp(6),tg=Vp.range,ng=$p.range,eg=Wp.range,rg=Zp.range,ig=Kp.range,og=Qp.range,ag=Jp.range,ug=Cp((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()})),cg=ug.range,fg=Cp((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}));fg.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Cp((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null};var sg=fg.range,lg=C)}),(function(t,n){t.setTime(+t+n*qp)}),(function(t,n){return(n-t)/qp}),(function(t){return t.getUTCMinutes()})),hg=lg.range,dg=C)})}),(function(t,n){return(n-t)/Rp}),(function(t){return t.getUTCHours()})),pg=dg.range,gg=C)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/Fp}1})),yg=gg.ran)}var _g=vg(0),bg=vg(1),mg=vg(2),xg=vg(3),wg=vg(4),Mg=vg(5),Ag=vg(6),Tg=_g.range,Sg=bg.range,Eg=mg.range,kg=xg.range,Ng=wg.range,Cg=Mg.range,Pg=Ag.range,zg=C)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)})}),(function(t){return t.getUTCMonth()})),Dg=zg.range,qg=C)})})}),(function(t){return t.getUTCFullYear()}));qg.evel};var Rg=qg.ranar Bg,Yg={"-":"",_:" ",0:"0"},Lg=/^\s*\d+/,jg=/^%/,Hg=/[\\^$*+?|[\]().{}]unction Wg(t,n,e){var r=Lg.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Zg(t,n,e){var r=Lg.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Kg(t,n,e){var r=Lg.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function Qg(t,n,e){var r=Lg.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function Jg(t,n,e){var r=Lg.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function ty(t,n,e){var r=Lg.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):unction oy(t,n,e){var r=Lg.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):1}function uy(t,n,e){var r=Lg.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function cy(t,n,e){var r=Lg.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function fy(t,n,e){var r=Lg.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):function dy(t,n,e){var r=Lg.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):1}function gy(t,n){return Xg(t.getDate(),n,2)}function yy(t,n){return Xg(t.getHours(),n,2)}function vy(t,n){return Xg(t.getHours()%12||12,n,2)}function _y(t,n){return Xg(1+Hp.count(fg(t),t),n,3)}function by(t,n){return Xg(t.getMilliseconds(),n,3)}function my(t,n){return by(t,n)+"000"}function xy(t,n){return Xg(t.getMonth()+1,n,2)}function wy(t,n){return Xg(t.getMinutes(),n,2)}function My(t,n){return Xg(t.getSeconds(),n,2)}function Ay(t){var n=t.getDay();return 0===n?7:n}function Ty(t,n){return Xg(Vp.count(fg(t)-1,t),n,2)}function Sy(t){var n=t.getDay();return n>=4||0===n?Kp(t):Kp.ceil(t)}function Ey(t,n){return t=Sy(t),Xg(Kp.count(fg(t),t)+(4===fg(t).getDay()),n,2)}function ky(t){return t.getDay()}function Ny(t,n){return Xg($p.count(fg(t)-1,t),n,2)}function Cy(t,n){return Xg(t.getFullYear()%100,n,2)}function Py(t,n){return Xg((t=Sy(t)).getFullYear()%100,n,2)}function zy(t,n){return Xg(t.getFullYear()%1e4,n,4)}function Dy(t,n){var e=t.getDay();return Xg((t=e>=4||0===e?Kp(t):Kp.ceil(t)).getFullYear()%1e4,n,)}function Ry(t,n){return Xg(t.getUTCDate(),n,2)}function Fy(t,n){return Xg(t.getUTCHours(),n,}function Iy(t,n){return Xg(t.getUTCMilliseconds(),n,}function Ly(t,n){return Xg(t.getUTCMinutes(),n,}function Xy(t,n){return Xg(_g.count(qg(t)-1,t),n,unction Zy(t,n){return Xg(t.getUTCFullYear()%100,n,function tv(){return"+000v({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var ov="%Y-%m-%dT%H:%M:%S.%LZ";var av=Date.prototype.toISOStri)}:t.utcFormat(ov);var uv=+new Date("2000-01-01T00:00:00.000Zn}:t.utcParse(ov),cv=1e3,fv=6e4,sv=36e5,lv=864e5,hv=2592e6,dv=31536e6;function pv(t){return new Date()}function yv(t,n,r,i,o,a,u,c,f){var s=up(),l=s.invert,h=s.domain,d=f(".%L"),p=f(":%S"),g=f("%I:%M"),y=f("%I %p"),v=f("%a %d"),_=f("%b %d"),b=f("%B"),m=f("%Y"),x=[[u,1,cv],[u,5,5e3],[u,15,15e3],[u,30,3e4],[a,1,fv],[a,5,3e5],[a,15,9e5],[a,30,18e5],[o,1,sv],[o,3,108e5],[o,6,216e5],[o,12,432e5],[i,1,lv],[i,2,1728e5],[r,1,6048e5],[n,1,hv],[n,3,7776e6],[t,1,dv)}function M(n,r,i){if(null==n&&(n=10),"number"==typeof n){var o,a=Math.abs(i-r)/n,u=]})).right(x,a);return u===x.length?(o=S(r/dv,i/dv,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(S(r,i,n),1),n=c),n.every(o)}return n}return s.inve)},s.doma)},s.ticn},s.tickForm)},s.nis},s.co)},s}function vv(){var t,n,e,r,i,o=0,a=1,u=np,c=}return f.doma]},f.clamp=function(t){return arguments.length?(c=!!t,f):c},f.interpolator=function(t){return arguments.length?(u=t,f):u},f.range=s(dr),f.rangeRound=s(pr),f.unknown=function(t){return arguments.length?(i=t,f):)}function bv(){var t=Ap(vv());return t.copy=function(){return _v(t,bv()).exponent(t.exponent())},$d.apply(t,argumentvar Mv=wv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Av=wv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Tv=wv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),Sv=wv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),Ev=wv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),kv=wv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),Nv=wv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),Cv=wv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),Pv=wv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),zv=wv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"),]),qv=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(wv),Rv=Dv(qv),Fv=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(wv),Ov=Dv(Fv),Uv=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(wv),Iv=Dv(Uv),Bv=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(wv),Yv=Dv(Bv),Lv=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(wv),jv=Dv(Lv),Hv=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(wv),Xv=Dv(Hv),Gv=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(wv),Vv=Dv(Gv),$v=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(wv),Wv=Dv($v),Zv=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(wv),Kv=Dv(Zv),Qv=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(wv),Jv=Dv(Qv),t_=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(wv),n_=Dv(t_),e_=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(wv),r_=Dv(e_),i_=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(wv),o_=Dv(i_),a_=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(wv),u_=Dv(a_),c_=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(wv),f_=Dv(c_),s_=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(wv),l_=Dv(s_),h_=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(wv),d_=Dv(h_),p_=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(wv),g_=Dv(p_),y_=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(wv),v_=Dv(y_),__=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(wv),b_=Dv(__),m_=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(wv),x_=Dv(m_),w_=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(wv),M_=Dv(w_),A_=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(wv),T_=Dv(A_),S_=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(wv),E_=Dv(S_),k_=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(wv),N_=Dv(k_),C_=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(wv),P_=Dv(C_),z_=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(wv),D_=Dv(z_);var q_=zr(He(300,.5,0),He(-240,.5,1)),R_=zr(He(-100,.75,.35),He(80,1.5,.8)),F_=zr(He(260,.75,.35),He(80,1.5,.8)),O_=He();var U_=ue(),I_=Math.PI/3,B_=2*Math.PI}}var L_=Y_(wv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),j_=Y_(wv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),H_=Y_(wv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),X_=Y_(wv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function G_(t){return function(){return t}}var V_=Math.abs,$_=Math.atan2,W_=Math.cos,Z_=Math.max,K_=Math.min,Q_=Math.sin,J_=Math.sqrt,tb=1e-12,nb=Math.PI,eb=nb/2,rb=2*nb;function ib(t){return t>1?0:t<-1?nb:Math.acos()}function ab(t){return t.innerRadius}function ub(t){return t.outerRadius}function cb(t){return t.startAngle}function fb(t){return t.endAngvar db=Array.prototype.sli)}function gb(t){this._context)}function vb(t){return t[0]}function _b(t){return t[function wb(t){return t}gb.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},poi}}};var Mb=Tb(yb);function Ab(t){this._curvenction Cb(t){return t.sour.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},poi)}};var Fb={dr)}},Ob={dr)}},Ub=Math.sqrt(1/3),Ib=2*Ub,Bb={dr)}},Yb=Math.sin(nb/10)/Math.sin(7*nb/10),Lb=Math.sin(rb/10)*Yb,jb=-Math.cos(rb/10)*Yb,Hb={dr)}},Xb={dr)}},Gb=Math.sqrt(3),Vb={dr)}},$b=-.5,Wb=Math.sqrt(3)/2,Zb=1/Math.sqrt(12),Kb=3*(Zb/2+1),Qb={dr)}},Jb=[Fb,Ob,Bb,Xb,Hb,Vb,Q}function em(t){this._context=t}function rm(t){this._context=t}function im(t){this._contextn}em.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEe},poin}},rm.prototype={areaStart:tm,areaEnd:tm,lineSta0},lineE}},poin}},im.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineSta0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},poin}},om.prototype={lineSta)},lineE)},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var e}(.8)}function cm(t,n){this._context=t,this._k=(1-n)/6}cm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEe},poin}};var fm=function t(n){function e(t){return new cm(t,n)}return e.tension=function(n){return t(+n)},e}(0);function sm(t,n){this._context=t,this._k=(1-n)/6}sm.prototype={areaStart:tm,areaEnd:tm,lineSta0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},poin}};var lm=function t(n){function e(t){return new sm(t,n)}return e.tension=function(n){return t(+n)},e}(6}hm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineSta0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},poin}};var e}()}function gm(t,n){this._context=t,this._alpha=n}gm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEe},poin}};var ym=function t(n){function e(t){return n?new gm(t,n):new cm(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function vm(t,n){this._context=t,this._alpha=n}vm.prototype={areaStart:tm,areaEnd:tm,lineSta0},lineE}},poin}};var _m=function t(n){function e(t){return n?new vm(t,n):new sm(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function bm(t,n){this._context=t,this._alpha=n}bm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineSta0},lineEe},poin}};var e}(.5);function xm(t){this._contextunction Sm(t){this._context)}function km(t){this._contexttion Fm(t){var n=t.map(Om);return Dm(t).sort((function(t,e){return n[t]-n[e]}xm.prototype={areaStart:tm,areaEnd:tm,lineStart:function(){this._point=0},lineE)},poi)}},Sm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineSta0},lineEe},poi}}},(Em.prototype=Object.create(Sm.prototype)).poi)},km.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePa)},line)},bezierCurve)}},Nm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineSta]},lineEl},poi)}},Pm.prototype={areaSta0},areaEN},lineSta0},lineE)},poin}};var }Lm.prototype={constructor:Lm,sca)},transla)},app]},applyX:function(t){return t*this.k+this.x},apply},inve]},invertX:function(t){return(t-this.x)/this.k},inverk},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescal)},toStri"}};var jm=new Lm(1,0,totype=Lm.prototype,t.Adder=g,t.Delaunay=Xa,t.FormatSpecifier=Ku,t.Voronoi=Ia,t.actil},t.ac},t.area=mb,t.areaRadial=kb,t.ascending=n,t.autoTyt},t.axisBottom=function(t){return et(3,t)},t.axisLeft=function(t){return et(4,t)},t.axisRight=function(t){return et(2,t)},t.axisT)},t.bin=N,t.bisect=o,t.bisectCenter=u,t.bisectLeft=a,t.bisectRight=o,t.bisector=e,t.blob=function(t,n){return fetch(t,n).then(yu)},t.brush=function(){return Fo(Ao)},t.brushSelectil},t.brushX=function(){return Fo(wo)},t.brushY=function(){return Fo(Mo)},t.buffer=function(t,n){return fetch(t,n).then(vu)},t.chord=function(){return Vo(!1,!1)},t.chordDirected=function(){return Vo(!0,!1)},t.chordTranspo)},t.clusti},t.color=re,t.contourDensil},t.contours=_a,t.count=c,t.crea)},t.creator=pt,t.cro}},t.csv=xu,t.csvFormat=eu,t.csvFormatBody=ru,t.csvFormatRow=ou,t.csvFormatRows=iu,t.csvFormatValue=au,t.csvParse=tu,t.csvParseRows=nu,t.cubehelix=He,t.cums)},t.curveBasis=function(t){return new em(t)},t.curveBasisClosed=function(t){return new rm(t)},t.curveBasisOpen=function(t){return new im(t)},t.curveBundle=am,t.curveCardinal=fm,t.curveCardinalClosed=lm,t.curveCardinalOpen=dm,t.curveCatmullRom=ym,t.curveCatmullRomClosed=_m,t.curveCatmullRomOpen=mm,t.curveLinear=yb,t.curveLinearClosed=function(t){return new xm(t)},t.curveMonotoneX=function(t){return new Sm(t)},t.curveMonotoneY=function(t){return new Em(t)},t.curveNatur)},t.curveStep=function(t){return new Pm(t,.5)},t.curveStepAfter=function(t){return new Pm(t,1)},t.curveStepBefo)},t.descendiN},t.deviation=d,t.different},t.disjoi0},t.dispatch=it,t.drh},t.dragDisable=Pn,t.dragEnable=zn,t.d)},t.dsvFormat=Qa,t.easeBack=to,t.easeBackIn=Qi,t.easeBackInOut=to,t.easeBackOut=Ji,t.easeBounce=Zi,t.easeBounce)},t.easeBounceInO2},t.easeBounceOut=Zi,t.easeCircle=Vi,t.easeCircle)},t.easeCircleInOut=Vi,t.easeCircleO)},t.easeCubic=Ui,t.easeCubict},t.easeCubicInOut=Ui,t.easeCubicO1},t.easeElastic=ro,t.easeElasticIn=eo,t.easeElasticInOut=io,t.easeElasticOut=ro,t.easeExp=Gi,t.easeExp)},t.easeExpInOut=Gi,t.easeExpO)},t.easeLine+t,t.easePoly=Yi,t.easePolyIn=Ii,t.easePolyInOut=Yi,t.easePolyOut=Bi,t.easeQuad=Oi,t.easeQuadt},t.easeQuadInOut=Oi,t.easeQuadO)},t.easeSin=Hi,t.easeSin)},t.easeSinInOut=Hi,t.easeSinO)},t.eve0},t.extent=p,t.filte},t.forceCenti},t.forceCollia},t.forceLil},t.forceManyBof},t.forceRadiu},t.forceSimulati}},t.forceX=function(t){var n,e,r,i=Fu(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=Fu(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:Fu(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:Fu(+n),a(),o):t},o},t.forco},t.formatDefaultLocale=oc,t.formatLocale=ic,t.formatSpecifier=Zu,t.fse},t.geoAlbers=fh,t.geoAlbersU)},t.geoArf},t.geoAzimuthalEqualArea=function(){return ih(hh).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=hh,t.geoAzimuthalEquidistant=function(){return ih(dh).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=dh,t.geoBoun]},t.geoCentro]},t.geoCirca},t.geoClipAntimeridian=xs,t.geoClipCircle=ws,t.geoClipExte}},t.geoClipRectangle=Ns,t.geoConicConformal=function(){return ah(vh).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=vh,t.geoConicEqualArea=ch,t.geoConicEqualAreaRaw=uh,t.geoConicEquidista)},t.geoConicEquidistantRaw=bh,t.geoContai)},t.geoDistance=Os,t.geoEqualEarth=function(){return ih(Th).scale(177.158)},t.geoEqualEarthRaw=Th,t.geoEquirectangular=function(){return ih(_h).scale(152.63)},t.geoEquirectangularRaw=_h,t.geoGnomonic=function(){return ih(Sh).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=Sh,t.geoGraticule=$s,t.geoGraticule)},t.geoIdentib},t.geoInterpolay},t.geoLength=qs,t.geoMercat)},t.geoMercatorRaw=ph,t.geoNaturalEart)},t.geoNaturalEarth1Raw=Eh,t.geoOrthographic=function(){return ih(kh).scale(249.5).clipAngle(90.000001)},t.geoOrthographicRaw=kh,t.geoPa)},t.geoProjection=ih,t.geoProjectionMutator=oh,t.geoRotation=cs,t.geoStereograph)},t.geoStereographicRaw=Nh,t.geoStream=Ic,t.geoTransfo}},t.geoTransverseMercat)},t.geoTransverseMercatorRaw=Ch,t.gr)},t.greater},t.greatestIndi},t.group=function(t,...n){return _(t,y,y,n)},t.groups=function(t,...n){return _(t,Array.from,y,n)},t.hcl=ze,t.hierarchy=Rh,t.histogram=N,t.hsl=pe,t.html=Su,t.ima)},t.ind)},t.index)},t.interpolate=dr,t.interpolateArr)},t.interpolateBasis=Ve,t.interpolateBasisClosed=$e,t.interpolateBlues=M_,t.interpolateBrBG=Rv,t.interpolateBuGn=Jv,t.interpolateBuPu=n_,t.interpolateCivid"},t.interpolateCool=F_,t.interpolateCubehelix=Pr,t.interpolateCubehelixDefault=q_,t.interpolateCubehelixLong=zr,t.interpolateDate=ur,t.interpolateDiscre}},t.interpolateGnBu=r_,t.interpolateGreens=T_,t.interpolateGreys=E_,t.interpolateHcl=kr,t.interpolateHclLong=Nr,t.interpolateHsl=Tr,t.interpolateHslLong=Sr,t.interpolateH}},t.interpolateInferno=H_,t.interpolateL}},t.interpolateMagma=j_,t.interpolateNumber=cr,t.interpolateNumberArray=ir,t.interpolateObject=fr,t.interpolateOrRd=o_,t.interpolateOranges=D_,t.interpolatePRGn=Ov,t.interpolatePiYG=Iv,t.interpolatePlasma=X_,t.interpolatePuBu=f_,t.interpolatePuBuGn=u_,t.interpolatePuOr=Yv,t.interpolatePuRd=l_,t.interpolatePurples=N_,t.interpolateRainb"},t.interpolateRdBu=jv,t.interpolateRdGy=Xv,t.interpolateRdPu=d_,t.interpolateRdYlBu=Vv,t.interpolateRdYlGn=Wv,t.interpolateReds=P_,t.interpolateRgb=tr,t.interpolateRgbBasis=er,t.interpolateRgbBasisClosed=rr,t.interpolateRound=pr,t.interpolateSineb"},t.interpolateSpectral=Kv,t.interpolateString=hr,t.interpolateTransformCss=mr,t.interpolateTransformSvg=xr,t.interpolateTur"},t.interpolateViridis=L_,t.interpolateWarm=R_,t.interpolateYlGn=v_,t.interpolateYlGnBu=g_,t.interpolateYlOrBr=b_,t.interpolateYlOrRd=x_,t.interpolateZoom=Mr,t.interrupt=oi,t.intersectit},t.interv)},t.isoFormat=av,t.isoParse=uv,t.js)},t.lab=Te,t.l)},t.lear},t.leastIndex=Y,t.line=bb,t.lineRadial=Eb,t.linkHorizontal=function(){return zb(Db)},t.linkRadit},t.linkVertical=function(){return zb(qb)},t.local=Tn,t.m)},t.matcher=mt,t.max=C,t.maxIndex=F,t.mee},t.medi)},t.merge=O,t.min=P,t.minIndex=U,t.namespace=lt,t.namespaces=st,t.nice=E,t.now=Hr,t.pai},t.packEnclose=Yh,t.packSiblint},t.paie},t.partitii},t.path=Jo,t.permu)},t.pa},t.piecewise=Dr,t.pointRadial=Nb,t.pointer=kn,t.pointe)},t.polygonAr2},t.polygonCentro]},t.polygonContais},t.polygonHuf},t.polygonLengc},t.precisionFixed=ac,t.precisionPrefix=uc,t.precisionRound=cc,t.quadtree=zu,t.quantile=q,t.quantileSorted=R,t.quantie},t.quickselect=z,t.radialArea=kb,t.radialLine=Eb,t.randomBates=qd,t.randomBernoulli=Od,t.randomBeta=Bd,t.randomBinomial=Yd,t.randomCauchy=jd,t.randomExponential=Rd,t.randomGamma=Id,t.randomGeometric=Ud,t.randomInt=Cd,t.randomIrwinHall=Dd,t.randomL)},t.randomLogNormal=zd,t.randomLogistic=Hd,t.randomNormal=Pd,t.randomPareto=Fd,t.randomPoisson=Xd,t.randomUniform=Nd,t.randomWeibull=Ld,t.range=B,t.redue},t.rever)},t.rgb=ue,t.ribb)},t.ribbonArr)},t.rollup=function(t,n,...e){return _(t,y,n,e)},t.rollu)},t.scaleBand=Kd,t.scaleDiverging=function t(){var n=fp(mv()(np));return n.copy=function(){return _v(n,t())},$d.apply(n,arguments)},t.scaleDivergingL)},t.scaleDivergingPow=xv,t.scaleDivergingSqrt=function(){return xv.apply(null,arguments).exponent(.5)},t.scaleDivergingSymlog=function t(){var n=mp(mv());return n.copy=function(){return _v(n,t()).constant(n.constant())},$d.apply(n,arguments)},t.scaleIdenti)},t.scaleImplicit=Wd,t.scaleLine)},t.scaleLn},t.scaleOrdinal=Zd,t.scalePoi)},t.scalePow=Tp,t.scaleQuantile=function t(){var e,r=[],i=[],a=}return c.invertExte]},c.doma)},c.ran)},c.unknown=function(t){return arguments.length?(e=t,c):e},c.quantiles=function(){return a.slice()},c.copy=function(){return t().domain(r).range(i).unknown(e)},Vd.apply(c,arguments)},t.scaleQuantize=function t(){var n,e=0,r=1,i=1,a=[.5],u=[0,1];function c(t){return t<=t?u[o(a,t,0,i)]c}return c.doma]},c.ran)},c.invertExte]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.threshol)},c.co)},Vd.apply(fp(c),arguments)},t.scaleRadi)},t.scaleSequenti)},t.scaleSequentialL)},t.scaleSequentialPow=bv,t.scaleSequentialQuantile=function t(){var e=[],r=np;function i(t){if(!isNaN(t=+t))return r((o(e,t,1)-1)/(e.length-1))}return i.domai},i.interpolator=function(t){return arguments.length?(r=t,i):r},i.ran)},i.quantil)},i.co)},$d.apply(i,arguments)},t.scaleSequentialSqrt=function(){return bv.apply(null,arguments).exponent(.5)},t.scaleSequentialSymlog=function t(){var n=mp(vv());return n.copy=function(){return _v(n,t()).constant(n.constant())},$d.apply(n,arguments)},t.scaleSq)},t.scaleSyml)},t.scaleThresho)},t.scaleTi)},t.scaleU)},t.sce},t.schemeAccent=Av,t.schemeBlues=w_,t.schemeBrBG=qv,t.schemeBuGn=Qv,t.schemeBuPu=t_,t.schemeCategory10=Mv,t.schemeDark2=Tv,t.schemeGnBu=e_,t.schemeGreens=A_,t.schemeGreys=S_,t.schemeOrRd=i_,t.schemeOranges=z_,t.schemePRGn=Fv,t.schemePaired=Sv,t.schemePastel1=Ev,t.schemePastel2=kv,t.schemePiYG=Uv,t.schemePuBu=c_,t.schemePuBuGn=a_,t.schemePuOr=Bv,t.schemePuRd=s_,t.schemePurples=k_,t.schemeRdBu=Lv,t.schemeRdGy=Hv,t.schemeRdPu=h_,t.schemeRdYlBu=Gv,t.schemeRdYlGn=$v,t.schemeReds=C_,t.schemeSet1=Nv,t.schemeSet2=Cv,t.schemeSet3=Pv,t.schemeSpectral=Zv,t.schemeTableau10=zv,t.schemeYlGn=y_,t.schemeYlGnBu=p_,t.schemeYlOrBr=__,t.schemeYlOrRd=m_,t.select=Mn,t.selectA)},t.selection=wn,t.selector=yt,t.selectorAll=bt,t.shuffle=L,t.shuffler=j,t.so1},t.sort=function(t,e=n){if("function"!=typeof t[Symbol.iterator])throw new TypeError("values is not iterable");return Array.from(t).sort(e)},t.stai},t.stackOffsetDivergi)},t.stackOffsetExpa}},t.stackOffsetNone=zm,t.stackOffsetSilhouet}},t.stackOffsetWigg}},t.stackOrderAppearance=Fm,t.stackOrderAscending=Um,t.stackOrderDescending=function(t){return Um(t).reverse()},t.stackOrderInsideO)},t.stackOrderNone=Dm,t.stackOrderRever)},t.stratie},t.style=jt,t.subs)},t.se},t.superset=V,t.svg=Eu,t.symbr},t.symbolCircle=Fb,t.symbolCross=Ob,t.symbolDiamond=Bb,t.symbolSquare=Xb,t.symbolStar=Hb,t.symbolTriangle=Vb,t.symbolWye=Qb,t.symbols=Jb,t.text=bu,t.thresholdFreedmanDiacon)},t.thresholdSco)},t.thresholdSturges=k,t.tickFormat=cp,t.tickIncrement=T,t.tickStep=S,t.ticks=A,t.timeDay=Hp,t.timeDays=Xp,t.timeFormatDefaultLocale=iv,t.timeFormatLocale=Ig,t.timeFriday=Qp,t.timeFridays=og,t.timeHour=Lp,t.timeHours=jp,t.timeInterval=Cp,t.timeMillisecond=Pp,t.timeMilliseconds=zp,t.timeMinute=Bp,t.timeMinutes=Yp,t.timeMonday=$p,t.timeMondays=ng,t.timeMonth=ug,t.timeMonths=cg,t.timeSaturday=Jp,t.timeSaturdays=ag,t.timeSecond=Up,t.timeSeconds=Ip,t.timeSunday=Vp,t.timeSundays=tg,t.timeThursday=Kp,t.timeThursdays=ig,t.timeTuesday=Wp,t.timeTuesdays=eg,t.timeWednesday=Zp,t.timeWednesdays=rg,t.timeWeek=Vp,t.timeWeeks=tg,t.timeYear=fg,t.timeYears=sg,t.timeout=Qr,t.timer=Vr,t.timerFlush=$r,t.transition=qi,t.transpose=H,t.tri},t.treems},t.treemapBina)},t.treemapDice=fd,t.treemapResquarify=Ad,t.treemapSlice=md,t.treemapSliceDi)},t.treemapSquarify=Md,t.tsv=wu,t.tsvFormat=su,t.tsvFormatBody=lu,t.tsvFormatRow=du,t.tsvFormatRows=hu,t.tsvFormatValue=pu,t.tsvParse=cu,t.tsvParseRows=fu,t.unin},t.utcDay=gg,t.utcDays=yg,t.utcFriday=Mg,t.utcFridays=Cg,t.utcHour=dg,t.utcHours=pg,t.utcMillisecond=Pp,t.utcMilliseconds=zp,t.utcMinute=lg,t.utcMinutes=hg,t.utcMonday=bg,t.utcMondays=Sg,t.utcMonth=zg,t.utcMonths=Dg,t.utcSaturday=Ag,t.utcSaturdays=Pg,t.utcSecond=Up,t.utcSeconds=Ip,t.utcSunday=_g,t.utcSundays=Tg,t.utcThursday=wg,t.utcThursdays=Ng,t.utcTuesday=mg,t.utcTuesdays=Eg,t.utcWednesday=xg,t.utcWednesdays=kg,t.utcWeek=_g,t.utcWeeks=Tg,t.utcYear=qg,t.utcYears=Rg,t.variance=h,t.version="6.2.0",t.window=It,t.xml=Tu,t.zip=function(){return H(arguments)},t.zoy},t.zoomIdentity=jm,t.zoomTransform=Hm,Object.defineProperty(t,"__esModule",{value:!0})}));

/*
 * Use this as a location to add polyfill JS for features not supported by browsers (like IE) 
 */

/*
 * IE doesn't have a startsWith function for strings.
 */
if (!String.prototype.startsWith) {
    String.prototype.startsWith };
}
$(document).ready(function(){
	$(".data-uscb-banner-text").each(function(element) {
        var height = $(this).height();
        var padding = 20;
        if (height < 200) {
            padding = (200 - height) / 2;
        } 
        $(this).css("padding-top", padding + "px");
        $(this).css("padding-bottom", padding + "px");
    });
    $(".data-uscb-banner-alert-container").each(function(element) {
        var container = $(this);
        var text = container.find(".data-uscb-banner-alert-content");
        if ( text.length !== 0 ) {
            var heightDiff = container.height() - text.height();
            text.css("padding-top", heightDiff / 2 + "px");
            text.css("padding-bottom", heightDiff / 2 + "px");
        }
    });
});
( function( $ ){

	var ONE_DAY = 1000 * 60 * 60 * 24;
	var BREAKPOINT = 768;
	
	var CACHED_EVENT_DATA = 'eventcalendarCachedEvents';
	var LINK_EVENT_ID_DATA = 'eventcalendarLinkId';
	var DATE_DATA = 'eventcalendarJSDate';
	var DISPLAY_DATE_DATA = 'eventcalendar-dates';

	var PLACEHOLDER_DOW = '%DOW%',
		PLACEHOLDER_MONTH = '%MONTH%',
		PLACEHOLDER_DATE = '%DATE%',
		PLACEHOLDER_YEAR = '%YEAR%';

	var isEditMode = (typeof $.cookie != 'undefined' && $.cookie('wcmmode') == "edit");

	var openedEventWindow;
	var $eventEles, $dayViews = $();

	var today = new Date();	
	today.setHours( 0, 0, 0, 0 );

	$( document ).ready( function() {
		$eventEles = $( '[data-eventcalendar]' );

		if( !$eventEles.length ) { return; } // only continue if there are events

		extractEvents();
		buildEvents();

		if( $dayViews.length ) {
			$( window ).on( 'resize.eventcalendar	} );
		}
	} );

	/* Load the page in normal or mobile mode */
	function buildEvents() {
		var pageWindow = $( this );
		var childCount = 0;

		$eventEles.each( function () {
			if( $( this ).data( 'eventcalendar' ) == 'events' ) {
				//Check for children
				childCount = $( this ).find( '[data-eventcalendar-events] li' ).length;

				if( childCount === 0 ){
					loadUpcoming( $( this ) );
				}
			} else {
				$dayViews = $dayViews.add( this );

				if( pageWindow.width() >= BREAKPOINT ) {
					//Check for children
					childCount = $( this ).find( '[data-eventcalendar-lg] [data-eventcalendar-days] li' ).length;

					if( childCount == 0 ){
						loadDayLgView( $( this ) ); 
					}
				} else {
					//Check for children
					childCount = $( this ).find( '[data-eventcalendar-sm] option' ).length;

					if( childCount == 0 ){
						loadDaySmView( $( this ) );
					}
				}
			}
		} );
	}

	function addTo( date, days ) {
		return days == 0 ? date : new Date( date.getTime() + ( days * ONE_DAY ) );
	}

	function returnURL( linkId ) {
		//"http://www.calendarwiz.com/calendars/popup.php?op=view&id=122467054&crd=cens1sample";
		var eventId = '';
		var i = 0;
		var i2 = 0;
		var theURL;

		var theBegin = '';//'http://www.calendarwiz.com/calendars/popup.php?op=view&id=';
		var theEnd   = '&crd=cens1sample';

		if( linkId ){
			i = linkId.indexOf( '(' ) + 1;
			i2 = linkId.indexOf( ')' );

			if ( i > -1 ){ eventId = linkId.substring( i, i2 ); }
		}
		
		theURL = theBegin + eventId.toString() + theEnd;

		return theURL;
	}

	function extractEvents() {
		var CALENDARWIZ_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		// Single date regular expression: Saturday, (Dec)ember (10), (2011)
		var SINGLE_REGEXP = /[A-Z]{3,9}, ([A-Z]{3})[A-Z]{0,6} ([0-9]{1,2}), ([0-9]{4})(.*)/i;
		// Range of dates regular expression: Saturday, (Dec)ember (10)[, (2011)] to Sunday, (Dec)ember (11), (2011)
		var RANGE_REGEXP = /[A-Z]{3,9}, ([A-Z]{3})[A-Z]{0,6} ([0-9]{1,2})(?:, ([0-9]{4}))? to [A-Z]{3,9}, ([A-Z]{3})[A-Z]{0,6} ([0-9]{1,2}), ([0-9]{4})(.*)/i;
		// HH:MM regular expression: 10:00 or 8:30
		var TIME_REGEX = /(^|\s)(1[0-2]|0?[1-9]):([0-5]?[0-9])/;

		$eventEles.each( function() {
			var events = [];

			$( this ).find( '[data-eventcalendar-calendarwiz]' ).find( '.cwuceeventtitle' ).each( function() {
				var titleCell = $( this ),
					title = $.trim( titleCell.text() ),
					onClick = titleCell.children( 'a' ).attr( 'onclick' ),
					dateCell = titleCell.parent( 'tr' ).children( 'td' ),
					dateText = $.trim( dateCell.text() ),
					range = dateText.match( RANGE_REGEXP ),
					single, start, end, details;

				if( range ) {
					start = {
						month: $.inArray( range[1], CALENDARWIZ_MONTHS ),
						day: range[2],
						year: range[3] || range[6]
					};
					end = {
						month: $.inArray( range[4], CALENDARWIZ_MONTHS ),
						day: range[5],
						year: range[6]
					};
					details = $.trim( range[7] );
				} else {
					single = dateText.match( SINGLE_REGEXP );
					if( single ) {
						start = end = {
							month: $.inArray( single[1], CALENDARWIZ_MONTHS ),
							day: single[2],
							year: single[3]
						};
						details = $.trim( single[4] );
					}
				}

				if ( start && end ) {
					if( details.search( TIME_REGEX ) == -1 ) {
						details = '';
					} else {
						title = title.replace( details, '' );
					}

					var startDate = new Date( start.year, start.month, start.day ),
						endDate = new Date( end.year, end.month, end.day );

					events.push( {
						title: title,
						start: startDate,
						end: endDate,
						details: details,
						onClick: onClick
					} );
				}
			} );

			$( this ).data( CACHED_EVENT_DATA, events );
		} );
	}

	function displayPopup( event ){
		event.preventDefault();
		if( openedEventWindow ) openedEventWindow.close();

		var eventUrl = $( this ).data( LINK_EVENT_ID_DATA );

		openedEventWindow = window.open( eventUrl, 'popup_event', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=475,height=475' );
		return false;
	}

	function getAuthorableDataAttributes( $eventEle ) {
		var errors = [],
			attr = $eventEle.data( DISPLAY_DATE_DATA ),

			// Default values if it's malformed
			validDow = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
			validMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			validFormat = '%DOW%, %MONTH% %DATE%, %YEAR%';

		if( typeof attr == 'object' ) {

			// Validate the day of week array
			if( typeof attr.dow == 'object' ) {
				if( attr.dow.length > 7 ) {
					errors.push( '<strong>Error!</strong> You have provided too many names for the days of the week. There must be exactly 7, starting with Sunday. Default values will be used until this is corrected.');
				} else if( attr.dow.length < 7 ) {
					errors.push( '<strong>Error!</strong> You have provided too few names for the days of the week. There must be exactly 7, starting with Sunday. Default values will be used until this is corrected.');
				} else {
					validDow = attr.dow;
				}
			} else {
				errors.push( '<strong>Error!</strong> The array for the names of the days of the week is malformed. Please check that all quotes are paired correctly, there are commas between words, and that the days of the week array begins with <code>[</code> and ends with <code>]</code>. Default values will be used until this is corrected.' );
			}

			// Validate the months array
			if( typeof attr.months == 'object' ) {
				if( attr.months.length > 12 ) {
					errors.push( '<strong>Error!</strong> You have provided too many names for the months. There must be exactly 12, starting with January. Default values will be used until this is corrected.');
				} else if( attr.months.length < 12 ) {
					errors.push( '<strong>Error!</strong> You have provided too few names for the months. There must be exactly 12, starting with January. Default values will be used until this is corrected.');
				} else {
					validMonths = attr.months;
				}
			} else {
				errors.push( '<strong>Error!</strong> The array for the names of the months is malformed. Please check that all quotes are paired correctly, there are commas between words, and that the month array begins with <code>[</code> and ends with <code>]</code>. Default values will be used until this is corrected.' );
			}

			validFormat = attr.format;
		} else {
			errors.push( '<strong>Error!</strong> One of the Advanced Language Attributes is malformed. Please check that all quotes are paired correctly, there are commas between words, and that the day and month arrays begin with <code>[</code> and end with <code>]</code>. Default values will be used until this is corrected.' );
		}

		if( errors.length && isEditMode) {
			// Show error messages 
			var $errors = $();
			for( var i = 0; i < errors.length; i++ ) {
				$errors = $errors.add( $( '<p/>' ).html( errors[i] ) );
			}

			$eventEle.prepend( $errors.wrapAll( $( '<div />' ) ).parent().addClass( 'alert alert-danger eventcalendar-errors' ) );

			console.error( '[eventcalendar] advanced language attribute(s) are malformed', attr ); // eslint-disable-line no-console
		} else {
			$eventEle.find( '.eventcalendar-errors' ).remove();
		}

		return { 
			dow: validDow,
			months: validMonths,
			format: validFormat
		};
	}

	/** Full Page View  **/
	function loadDayLgView( $eventEle ){	
		var events = $eventEle.data( CACHED_EVENT_DATA ),
			showWeekends = $eventEle.data( 'eventcalendar-showweekends' ) || false,

			$lgView = $eventEle.find( '[data-eventcalendar-lg]' ),
			$dayList = $lgView.find( '[data-eventcalendar-days]' ),
			$eventList = $lgView.find( '[data-eventcalendar-events]' ),

			noEventsMsg = $eventEle.find( '[data-eventcalendar-error]' ).html(),
			dateFormatting = getAuthorableDataAttributes( $eventEle );

		for ( var i = 0, j = 0; i < 7; i++ ) {
			var date = addTo( today, i ),
				day = date.getDate(),
				dow = dateFormatting.dow[date.getDay()],
				month = dateFormatting.months[date.getMonth()],
				year = date.getFullYear(),
				displayDateStr = dateFormatting.format.replace( PLACEHOLDER_DOW, dow ).replace( PLACEHOLDER_MONTH, month ).replace( PLACEHOLDER_DATE, day ).replace( PLACEHOLDER_YEAR, year );

			//Skip Sat and Sun
			if ( ( dow == dateFormatting.dow[0] || dow == dateFormatting.dow[6] ) && !showWeekends ) continue;

			$dayList.append(
				$( '<li/>' ).addClass( 'day_new uscb-filter-parent uscb-layout-column' ).toggleClass( 'selected', j++ == 0 ).attr( 'style', 'width:-moz-available; text-align:left; border-style:none;' ).append(
					$( '<a/>' ).attr( 'href', '#' ).data( DATE_DATA, date ).addClass( 'uscb_navigation_links uscb-w-100' ).attr( 'style', 'width:100%;' ).append(
						$( '<span/>' ).text( displayDateStr )
					).on( 'click.eventcalendar', function( event ) {
						var date = $( this ).data( DATE_DATA ),
							count = 0;
							
						$eventList.empty();
						$dayList.find( '.selected' ).removeClass( 'selected' ).attr( 'style', 'background-color: inherit;' );
						$( this ).parent( '.day_new' ).addClass( 'selected' ).attr( 'style', 'background-color: #f7f9f9;' );

						$.each( events, function( k, event ) {
							//Added code to account for DST (Math.ceil(x/ONE_DAY)).
							var sTmp = event.onClick.toString();
							var time = Math.ceil( date.getTime() / ONE_DAY );

							if( time >= Math.ceil( event.start.getTime() / ONE_DAY ) && time <= Math.ceil( event.end.getTime() / ONE_DAY ) ) {
								count++;

								var listLink = $( '<a/>' ).addClass( 'uscb-list-item' ).attr( 'href', '#' )
									.data( LINK_EVENT_ID_DATA, returnURL( sTmp ) ).click(displayPopup)
									.append($( '<div/>' ).addClass( 'uscb-list-item-container' ).append(
										$( '<p/>' ).addClass( 'uscb-title-3 uscb-color-primary uscb-margin-TB-02' ).text( event.title.replace( /\uFFFD/g, '' ) ),
										$( '<p/>' ).addClass( 'uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-TB-02' ).text( event.details ),
										$( '<hr/>' ).addClass( 'uscb-light-teal-hr' )
									));

								$eventList.append(listLink);
							} //end of if
						} ); //end of "each"

						if( count == 0 ) {
							$eventList.append(
								$( '<p/>' ).html( noEventsMsg ),
								$( '<hr/>' ).addClass( 'uscb-light-teal-hr' )
							);
						}

						$( this )[0].blur();
						event.preventDefault();

						return false;
					} ) //end of click event & function
				) //'<li> uscb-filter-parent
			); //norm_dd
		} //end of the "for loop

		$dayList.find( '.selected a' ).trigger( 'click' );
	} //End of function

	/*** MOBILE / TABLET VIEW  ***/
	function loadDaySmView( $eventEle ){
		var events = $eventEle.data( CACHED_EVENT_DATA ),
			showWeekends = $eventEle.data( 'eventcalendar-showweekends' ) || false,
			dayListOptionsHTML = '',

			$smView = $eventEle.find( '[data-eventcalendar-sm]' ),
			$dayList = $smView.find( 'select' ),
			$eventList = $smView.find( '[data-eventcalendar-events]' ),

			noEventsMsg = $eventEle.find( '[data-eventcalendar-error]' ).html(),
			dateFormatting = $eventEle.data( DISPLAY_DATE_DATA );

		for( var i = 0; i < 7; i++ ) {
			var date = addTo( today, i ),
				day = date.getDate(),
				dow = dateFormatting.dow[date.getDay()],
				month = dateFormatting.months[date.getMonth()],
				year = date.getFullYear(),
				displayDateStr = dateFormatting.format.replace( PLACEHOLDER_DOW, dow ).replace( PLACEHOLDER_MONTH, month ).replace( PLACEHOLDER_DATE, day ).replace( PLACEHOLDER_YEAR, year ),
				dateVal = date.getTime();

			//Skip Saturday and Sunday
			if ( ( dow == dateFormatting.dow[0] || dow == dateFormatting.dow[6] ) && !showWeekends ) continue;

			dayListOptionsHTML += '<option value="' + dateVal.toString() +  '" >' + displayDateStr.toString() + '</option>';
		} //end of 'for'

		$dayList.append( dayListOptionsHTML ).on( 'change.eventcalendar', changeView );

		function changeView( e ) {
			var selValue = $( this ).val();
			var count = 0; 

			$eventList.empty();

			$.each( events, function( k, event ) {
				var sTmp = event.onClick.toString();
				var time = Math.ceil( selValue / ONE_DAY );

				if( time >= Math.ceil( event.start.getTime() / ONE_DAY ) && time <= Math.ceil( event.end.getTime() / ONE_DAY ) ) {
					count++;
					var listLink = $( '<a/>' ).addClass( 'uscb-list-item' ).attr( 'href', '#' )
						.data( LINK_EVENT_ID_DATA, returnURL( sTmp ) ).click(displayPopup)
						.append($( '<div/>' ).addClass( 'uscb-list-item-container' ).append(
							$( '<p/>' ).addClass( 'uscb-title-3 uscb-color-primary uscb-margin-TB-02' ).text( event.title.replace( /\uFFFD/g, '' ) ),
							$( '<p/>' ).addClass( 'uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-TB-02' ).text( event.details ),
							$( '<hr/>' ).addClass( 'uscb-light-teal-hr' )
						));

					$eventList.append(listLink);
				}//end of 'if'
			} );//end of 'each'
			
			if( count == 0 ) {
				$eventList.append(
					$( '<div/>' ).addClass( 'uscb-list-item-container' ).append(
						$( '<p/>' ).addClass( 'uscb-title-3 uscb-color-primary uscb-margin-TB-02' ).html( noEventsMsg ),
						$( '<hr/>' ).addClass( 'uscb-light-teal-hr' )
					)
				);
			}

			$( this )[0].blur();
			if( e ) { e.preventDefault(); }
			return false;
		}

		changeView.apply($dayList);
	} //end of loadDaySmView

	/*** Upcoming Events View ***/
	function loadUpcoming( $eventEle ) {
		var events = $eventEle.data( CACHED_EVENT_DATA ),
			showWeekends = $eventEle.data( 'eventcalendar-showweekends' ) || false,
			$eventList = $eventEle.find( '[data-eventcalendar-events]' ),

			noEventsMsg = $eventEle.find( '[data-eventcalendar-error]' ).html(),
			dateFormatting = $eventEle.data( 'eventcalendar-dates' ),

			count = 0;
		
		$.each( events, function( k, event ) {

			if( !showWeekends ) {
				var startDow = event.start.getDay(),
					endDow = event.end.getDay();

				// If the start and end date are on a weekend, don't show them (count does not get incremented)
				if ( ( startDow === 0 || startDow == 6 ) && ( endDow === 0 || endDow == 6 ) ) {
					return false;
				}
			}

			var eventUrl = returnURL( event.onClick.toString() );

			var startDate = event.start,
				displayStartDay = startDate.getDate(),
				displayStartDow = dateFormatting.dow[startDate.getDay()],
				displayStartMonth = dateFormatting.months[startDate.getMonth()],
				displayStartYear = startDate.getFullYear();

			var displayDateStr = dateFormatting.format.replace( PLACEHOLDER_DOW, displayStartDow ).replace( PLACEHOLDER_MONTH, displayStartMonth ).replace( PLACEHOLDER_DATE, displayStartDay ).replace( PLACEHOLDER_YEAR, displayStartYear );
			
			var endDate = event.end;

			startDate.setHours( 0, 0, 0, 0 ); // set to 0 for comparison
			endDate.setHours( 0, 0, 0, 0 ); // set to 0 for comparison
			if( startDate.getTime() != endDate.getTime() ) {

				var displayEndDay = endDate.getDate(),
					displayEndDow = dateFormatting.dow[endDate.getDay()],
					displayEndMonth = dateFormatting.months[endDate.getMonth()],
					displayEndYear = endDate.getFullYear();

				displayDateStr += ' - <br />' + dateFormatting.format.replace( '%DOW%', displayEndDow ).replace( '%MONTH%', displayEndMonth ).replace( '%DATE%', displayEndDay ).replace( '%YEAR%', displayEndYear );
			}

			$eventList.append(
				$( '<li />' ).addClass( 'uscb-w-100' ).append(
					$( '<a/>' ).addClass( 'uscb-layout-row uscb-wrap uscb-layout-align-vert-center uscb-color-primary' ).attr( 'href', eventUrl )
						.data( LINK_EVENT_ID_DATA, eventUrl ).click(displayPopup)
						.append(
							$( '<div/>' ).addClass( 'uscb-layout-column uscb-flex-row-md-100 uscb-flex-row-lg-40 uscb-flex-row-gt-lg-30' ).append(
								$( '<div/>' ).html( displayDateStr )
							),
							$( '<div/>' ).addClass( 'uscb-layout-column uscb-flex-row-md-100 uscb-flex-row-lg-60 uscb-flex-row-gt-lg-70' ).append(
								$( '<p/>' ).addClass( 'uscb-title-3 uscb-color-primary uscb-margin-TB-02' ).text( event.title.replace( /\uFFFD/g, '' ) ),
								$( '<p/>' ).addClass( 'uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-TB-02' ).text( event.details )
							)
						),
					$( '<hr/>' ).addClass( 'uscb-light-teal-hr' )
				)
			);

			count++;
		} ); //end of "each"

		if( count == 0 ) {
			$eventList.append(
				$( '<li />' ).addClass( 'uscb-w-100' ).append(
					$( '<hr/>' ).addClass( 'uscb-light-teal-hr' ),
					$( '<p/>' ).html( noEventsMsg ),
					$( '<hr/>' ).addClass( 'uscb-light-teal-hr' )
				)
			);
		}
	}
} )( jQuery );
//tabbed list
// JavaScript Document

// Wait until the DOM has loaded before querying the document
            $(document).ready(function(){
                
                $('li.button-tabs').each(function() //the button tabs li is the div that contains the dropdown and all the list divs
                {
                
                    
                    var $dropdown = $(this).parent().find("li.button_tabs_dropdown"); //get the div that contains the dropdown button and extra years
                    var $expand = $(this).find("a.toggle_dropdown");
                    var $allTabs = $(this).find('a.tabs'); //allTabs is an anchor with the tabs class
                    var k = 0;
                    var $tabsArray = [];
                    $tabsArray.push('#taball');
                    var $nextTab = $('a[href="'+"#tab"+k+'"]');
                    while ($nextTab.length > 0) //while there is a tab with an href like #tab[n]
                    {
                        
                        $nextTab = $('a[href="'+"#tab"+k+'"]'); //get the tab with href like #tab[n]
                        $tabsArray.push($nextTab.attr('href'));
                        k++;
                    }
                    
                    //on click display the drop down image
                    $($expand).on('click', function(e) //this is the list items div and also includes the dropdown menu
                    {
                        
                        if ($dropdown.attr('style') != undefined && $dropdown.attr('style').indexOf('none') >0)
                            {$dropdown.removeAttr('style');} //either show or hide the dropdown
                        else
                            {$dropdown.attr('style', 'display:none');}
                            
                    });
                    $($allTabs).on('click', function(e) //when one of the years in the dropdown is clicked
                    {
                        var $listTabs = document.getElementById('listMenu');
                        var $tabNum = ($allTabs.attr('href')); //tabNum is a string of format #tab[1-n] represnting which tab was clicked
                        var index = $tabNum.replace('#tab', '');
                        if (index == 'all')
                            index=0;
                        
                        var i=2;
                        var j =2;
                        
                        if (k-index < 2)
                        {
                            
                            j = parseInt(index,10)+4-k;
                            i=k-index;                            
                        }
                        else if (index < 2)
                        {
                            i=4-index;
                            j=index;                            
                        }
                        
                        var updateNum = 0;
                        for (var n=0; n<$tabsArray.length; n++)
                        {
                           
                            var $currentTab = $('a[href="'+$tabsArray[n]+'"]');
                            if (n>= (index-j) && n<=(index+i))
                            {
                                //set as active
                                $currentTab.parent().parent().parent().show();
                                if (n+1 == index)
                                {
                                   
                                    $currentTab.parent().parent().parent().addClass('current');
                                    $currentTab.addClass('active');
                                    //$currentTab.trigger('click');
                                }
                            } 
                            
                            else
                            {
                                //set as inactive
                                hideTab($currentTab);
                                //need some functinality to place this link in the dropdown
                                $dropdownAnchors = $(document).find('a.tabs').eq(updateNum++);
                                $dropdownAnchors.contents().filt;})
                                    .replaceWith($currentTab.text());
                                $dropdownAnchors.attr('href', $tabsArray[n]);
                            }
                        }
                        var $active = $(document).find('ul.current'); //active is the currently selected tab ul
                        
                    });
                    
                 
                    
                });
                var hideTab = (function(currentTab)
                {
                    currentTab.parent().parent().parent().hide();
                    currentTab.parent().parent().parent().removeAttr('class');
                    currentTab.removeAttr('class');
                    
                    
                });
                $('ul.listTabs').on('click', 'li', function(e){
                        if ($(this).find('a').attr('class') == 'toggle_dropdown')
                            {
                            e.preventDefault();
                            return;}
                        var $content = $(this).find('a').attr('href');
                        window.open($content, "_self");
                        
                });
                $('ul.listTabs').on('hover', 'li', function(e)
                {
                    if ($(this).parent().attr('class') == 'listTabs')
                        return;
                    var $anchor = $(this).find('a');
                    var $color = $anchor.css("color");
                    
                    if ($anchor.css('color') == 'rgb(14, 114, 162)')
                        $anchor.css('color','#084e84' ); //"#084e84"
                    else
                        $anchor.removeAttr('style');
                    
                });
                $('li.button-tabs').on('hover', 'a',function(e)
                {
                    var $img = $(this).find('img');
                    var $src = $(this).find('img').attr('src');
                    if ($img.attr('class') == "selected")
                        return;
                    if ($src.indexOf("active") > 0 )                    
                        $img.attr('src', $src.replace("_active", ""));
                    
                    else
                        $img.attr('src', $src.replace(".jpg", "_active.jpg"));
                });
                $('li.button-tabs').on('click', 'a', function(e)
                {
                    var $img = $(this).find('img');
                    var $src = $(this).find('img').attr('src');
                    var $button_cls = $(this).find('img').attr('class');
                    
                    if ($button_cls===undefined && $src!=undefined)
                    {
                        $img.attr('class', 'selected');
                        $img.attr('src', $src.replace("n.jpg", "n_active.jpg"));
                    }
                    
                    else
                    {
                        $img.removeAttr('class');
                        //$img.attr('src', $src.replace("_active", ""));
                    }
                    
                });
                $('ul.tabs').each(function(){
                    
                    // For each set of tabs, we want to keep track of
                    // which tab is active and its associated content
                    var $active, $content, $links = $(this).find('a');

                    // If the location.hash matches one of the links, use that as the active tab.
                    // If no match is found, use the first link as the initial active tab.
                    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
                    $active.addClass('active'); 
                    
                    //In case the href is an actual ref to another page, then abort as there's no need                    
                    //to hide/show the other tabs as the page will be redrawn.                    
                    if ( $active.attr('href') === undefined || $active.attr('href').indexOf('#') != 0)
                        return;
                    $content = $($active.attr('href'));
                    // Hide the remaining content
                    $links.not($active).each(function () {
                    	if (Modernizr.mq('only screen and (min-width : 960px)')) {
                    		$($(this).attr('href')).hide();
                    	}
                    });

                    // Bind the click event handler
                    $(this).on('click', 'li', function(e){
                        // Make the old tab inactive.
                        $active.removeAttr('class');
                        $($active.parent().siblings()[0]).removeClass('current-arrow');
                        $($active.parent().siblings()[0]).addClass('arrow-row');
                        $(".current").removeClass('current');
                        $content.hide(); 

                        // Update the variables with the new link and content
                        $active = $(this).find('a');
                        $content = $($(this).find('a').attr('href'));

                        // Make the tab active.
                        $active.attr('class','active');
                        
                        $($active.parent().siblings()[0]).removeClass('arrow-row');
                        $($active.parent().siblings()[0]).addClass('current-arrow');
                        $($($active).parent().parent()).addClass('current');
                        $content.show();

                        // Prevent the anchor's default click action
                        e.preventDefault();
                    });
                });
            });
var accordionChevronUp = "/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/upward-chevron.svg";
var accordionChevronDown = "/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/downward-chevron.svg";
var mobileWidth = 576;

function initTabAccordions(numTabs) {
	resizeTabAccordions(numTabs);
	
	for (x=1; x<=numTabs; x++) {
		var tabId = '#tab' + x;
		var accordionId = tabId + "_accd";
		
		if (Modernizr.mq('only screen and (max-width : ' + mobileWidth + 'px)')) {
			$(tabId).show(); 	
		}
		$(accordionId).on('hide.bs.collapse', function () {
			var arrowId = '#' + $(this).attr('id') + "_a";
    		$(arrowId).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
   		 });
		$(accordionId).on('show.bs.collapse', function () {
			var arrowId = '#' + $(this).attr('id') + "_a";
       		$(arrowId).removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
    	});
	}
}
}

	
function resizeTabAccordions(numTabs) {
	for (x=1; x<=numTabs; x++) {
		var state = 'show';
		var tabId = '#tab' + x;
		var accordionId = tabId + "_accd";
		if (Modernizr.mq('only screen and (max-width : ' + mobileWidth + 'px)')) {
			state = 'hide';
			$(accordionId).addClass('collapse'); 
			$(tabId).show();
		} else {
			if ($("a[href='" + tabId + "']").hasClass('active')) 
				$(tabId).show();
			else
				$(tabId).hide();
		}	
		$(accordionId).collapse(state); 
	}
}
	

function initAccordionGroup(group, collapsedWidth) {
	if (collapsedWidth===undefined)
		collapsedWidth = mobileWidth + 1;
	else 
		collapsedWidth = collapsedWidth + 1;
	resizeAccordionGroup(group, collapsedWidth);
	$(group).find('.panel-collapse').each(function() {
		$(this).on('hide.bs.collapse', function () {
	        $(this).parent().find(".glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
	    });
		
		$(this).on('show.bs.collapse });
	});
	$(group).find('a[data-toggle="collapse"]').click(function(e){		 
		  if (Modernizr.mq('only screen and (min-width : ' + collapsedWidth + 'px)')) { 
			e.preventDefault()
		    e.stopPropagation();
		  } 
	});
}

function resizeAccordionGroup(group, collapsedWidth) {
	if (collapsedWidth===undefined)
		collapsedWidth = mobileWidth;
	var state = 'show';
	if (Modernizr.mq('only screen and (max-width : ' + collapsedWidth + 'px)')) {
        state = 'hide'; // collapse accordion
        $(group).find('.panel-collapse').addClass('collapse');
    }
	$(group).find('.panel-collapse').collapse(state);
}

/**
 * A function used to add Accordion HTML to each columns of a Column Control component.
 * @param colTitleArray[] - An array contains the title for each column
 * @param index - integer representing the index value of each column control...if you have 3 column controls in a page index will be 0 for the frist  ...1...2 etc
 * @param baseCSSClass - the CSS class for the column control - its a CQ class...
 */
function wrapColumnsWithAccordionHTML(colTitleArray, index, baseCSSClass) {
	// Add only title for large screens, accordions for the rest.
	if (!Modernizr.mq('only screen and (max-width : ' + mobileWidth + 'px)')) {
		insertTitleToColumns(colTitleArray, index, baseCSSClass);	
		return;
	}
	
	var stringContent = "";			    						    			
	var thisControl = $('.' + baseCSSClass)[index];			    			
	var uniqueId = 'columnControlComponent' + colTitleArray.length + index;			    			
	$(thisControl).attr('id', uniqueId);
	
	var colCtr = 1;
	$(thisControl).children('div').each(function(){                                                                                                                        
        var uniqueColumnId = 'columnControlComponent' + colTitleArray.length + index + '-c' + colCtr;                                                                      
        var uniqueAccordionId = "acc-" + uniqueColumnId;
        $(this).attr('id', uniqueColumnId);		
        
        stringContent = 	"<div " + "id='" + uniqueAccordionId + "' class='uscb-accordion'>";
        stringContent += 	"<div class='uscb-layout-row uscb-layout-align-start-center uscb-accordion-header uscb-accordion_panel_head'>";
        stringContent +=	"<img class='uscb-chevron-icon-img uscb-chevron-right-align uscb-padding-R-4' style='height: 30px' src='" + accordionChevronDown + "' alt=''>";
        stringContent +=	"<span class='uscb-sub-heading-2 uscb-bold-text uscb-padding-L-8'>" + colTitleArray[(colCtr-1)] + "</span>";
        stringContent += 	"</div>"; // end uscb-layout-row...
        stringContent += 	"<div class='uscb-accordion_panel uscb-accordion-show-panel'>";
        stringContent += 	$(this).html();
        stringContent += 	"</div>"; // end uscb-accordion_panel...
        stringContent += 	"</div>"; // end uscb-accordion
					    			
		var customDiv = $(stringContent);			
		$('#' + uniqueColumnId ).html(customDiv);
		
		// Attach expand/close handler for each accordion
		$("#" + uniqueAccordionId).click(function () {
			$(this).children('.uscb-accordion_panel').toggleClass("uscb-accordion-show-panel");
			if ($(this).children('.uscb-accordion_panel').hasClass("uscb-accordion-show-panel")) {
				$(this).children('.uscb-accordion_panel_head').children('.uscb-chevron-icon-img').attr('src', accordionChevronDown);		
			} else {
				$(this).children('.uscb-accordion_panel_head').children('.uscb-chevron-icon-img').attr('src', accordionChevronUp);		
			}
		});
		
		colCtr++;
	});//end .children('div').each loop
}//end function

/**
 * A function used to add ONLY the column titles to the column control component when viewed in EDIT mode...
 * @param colTitleArray[] - An array containing the title for each column
 * @param index - integer representing the index value of each column control...if you have 3 column controls in a page index will be 0 for the frist  ...1...2 etc
 * @param baseCSSClass - the CSS class for the column control - its a CQ class...
 */
function insertTitleToColumns(colTitleArray, index, baseCSSClass) {
	var thisControl = $('.' + baseCSSClass)[index];
	var colCtr = 1;
	$(thisControl).children('div').each(function(){ 
		$(this).prepend('<h3>' + colTitleArray[(colCtr - 1)] + '</h3>');
		colCtr++;
	});
}//end function
var $ = jQuery.noConflict();

$(document).ready(function(){
    $( "#searchbox, #mobile_searchbox" ).catcomplete({
        source: function( request, response ) {
            $.ajax({
                url: "/suggest", // Needs to set up apache forwarding to hit SOA typeahead url or JSP/Java forwarding
                dataType: "xml",
                data: {
                    query: request.term,
                    stateGeo: $("stateGeo").val(),
                    operationName: "httpsearch"
                },
                success: function( data ) {
                    // Merge the two types we want to display and iterate over them
                    response( $.map($.merge($(data).find("Answer"), $(data).find("result")), function(item) {
                        // Only the answer xml has a value component
                        if($(item).find("Value").text() != ""){ // for the answers before results
                            return {
                                ansValue: $(item).find("Value").text(),
                                ansGeography: $(item).find("Geography").text(),                                                                
                                prefix: $(item).find("Prefix").text(),
                                suffix: $(item).find("Suffix").text(),
                                ansLastUpdated: $(item).find("LastUpdated").text(),
                                // Don't grab the system desc
                                ansDescription: $(item).find("Description").first().text(),
                                ansSystemDesc: $(item).find("System").find("Description").text(),
                                ansSystemURL: $(item).find("System").find("URL").text()
                            }
                        }else if($(item).attr("name") != ""){ // for regular typeahead results
                            return {
                                label: $(item).attr("name"),
                                value: $(item).attr("name"),
                                category: $(item).attr("category")
                            }
                        }
                    }));
                    
                }
            });
        },
        minLength: 3,
        select: function( event, ui ) {
            if(ui.item){
                $('#searchbox, #mobile_searchbox').val(ui.item.value);
                $('input[name=cssp]').val('Typeahead');
            }
            
            $('#searchbox, #mobile_searchbox').closest("form").submit();
        },
        messages: {
            noResults: '',
                results: function() {}
        },
        open: function() {
            $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" ); 
            if( Modernizr.mq('only screen and (min-width : 1260px)') ){		
            	var inputBoxWidth = $('#searchbox').width();                
                $('.ui-autocomplete').css('width', inputBoxWidth + 'px');
            }else{                
            	var inputBoxWidth = $('#mobile_searchbox').width();                
                $('.ui-autocomplete').css('width', (inputBoxWidth + 35) + 'px');
            }                        
        },
        clos }
    }); 
});

// Custom Typeahead
$.widget( "custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function( ul, items ) {
        var self = this, currentCategory = "";
        
        $.each( items, function( index, item ) {
            // double check for blank nodes from the jquery find method
            if(item.ansValue != null || item.label != null){
                // Decorate the system field to include latest estimate date
                var sysName = "";
                
                if(item.ansLastUpdated != ""){
                    var d = new Date(item.ansLastUpdated * 1000); // Given seconds originally
                    sysName = d.getFullYear() + " " + item.ansSystemDesc;
                }else{
                    sysName = item.ansSystemDesc;
                }
                
                if(item.ansValue != null){

                        ul.append("<li class='autocomplete-instant-answer'> " +
                                "<div class='ia-label'><span class='ia-geo'>" + item.ansGeography + "</span><br/><span class='ia-stat'>" + item.ansDescription + 
                                "</span></div>" +
                                "<div class='ia-stat-value'>"+ item.prefix + "" + item.ansValue.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " " +item.suffix + "</div>" +
                                
                                "<div class='ia-system'><a href='" + item.ansSystemURL  + "?cssp=Typeahead'>Source: " + sysName + "</a></div>" +
                                "</li>");
                    
                }else if ( item.category != currentCategory ) {
                    ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                    currentCategory = item.category;
                }
                
                self._renderItemData( ul, item );
            }
            
        });
    }
});
/*
 * Shadowbox.js, version 3.0.3
 * http://shadowbox-js.com/
 *
 * Copyright 2007-2010, Michael J. I. Jackson
 * Date: 2011-05-14 08:09:50 +0000
 */
(function(au,k){var Q={version:"3.0.3"};var J=navigator.userAgent.toLowerCase();if(J.indexOf("windows")>-1||J.indexOf("win32")>-1){Q.isWindows=true}else{if(J.indexOf("macintosh")>-1||J.indexOf("mac os x")>-1){Q.isMac=true}else{if(J.indexOf("linux")>-1){Q.isLinux=true}}}Q.isIE=J.indexOf("msie")>-1;Q.isIE6=J.indexOf("msie 6")>-1;Q.isIE7=J.indexOf("msie 7")>-1;Q.isGecko=J.indexOf("gecko")>-1&&J.indexOf("safari")==-1;Q.isWebKit=J.indexOf("applewebkit/")>-1;var ab=/#(.+)$/,af=/^(light|shadow)box\[(.*?)\]/i,az=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,f=/[0-9a-z]+$/i,aD=/(.+\/)shadowbox\.js/i;var A=false,a=false,l={},z=0,R,ap;Q.current=-1;Q.dimensions=null;Q.ea)};Q.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};Q.gallery=[];Q.onReady=aj;Q.path=null;Q.player=null;Q.playerId="sb-player";Q.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:aj,onClose:aj,onFinish:aj,onOpen:aj,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};Q.getCurrel};Q.hasNe)};Q.isOpen=function(){return A};Q.isPaus"};Q.applyOptio)};Q.revertOptio)};Q.in)};Q.op}};Q.clo)};Q.pl}};Q.pau}};Q.chan)};Q.ne)};Q.previo)};Q.setDimensios};Q.makeGalle]};Q.makeObjeI};Q.getPlayArray.prototype.indexOf){Array.prototype.indexunction aj(){}function ad(K){return document.getElementById()}var h=true,x=tr)}Q.getStyl}})();Q.appendHT}};Q.getWindowSi]};Q.setOpaci}};Q.clearOpaci)};function o(K){return K.targ]}function n(K){K.preventDefault()}function v(K){return K.keyCode}function F(aG,S,K){jQuery(aG).bind(S,)}jQuery.fn.shadowb)};var y=false,al;if(document.addEventListener){)}}else{if(document.attachEvent){}}Q.lo)};Q.plugins={};if(navigator.plugins&&navigator.plugins.length){var w=[];aF(navigator.plugi)});w=w.join(",");var ai=w.indexOf("Flip4Mac")>-1;Q.plugins={fla:w.indexOf("Shockwave Flash")>-1,qt:w.indexOf("QuickTime")>-1,wmp:!ai&&w.indexOf("Windows Media")>-1,f4m:ai}}else{varS};Q.plugins={fla:p("ShockwaveFlash.ShockwaveFlash"),qt:p("QuickTime.QuickTime"),wmp:p("wmplayer.ocx"),f4m:false}}var X=/^(light|shadow)box/i,am="shadowboxCacheKey",b=1;Q.cache={};Q.seleG};Q.set)};Q.teardo)};Q.addCac)};Q.removeCacl};Q.getCac)};Q.clearCac}}
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 *
 * Modified for inclusion in Shadowbox.js
 */
Q.finG})();Q.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};var D,at="sb-drag-proxy",E,j,};Q.img.ext=["bmp","gif","jpg","jpeg","png"];Q.img.prototype={appe)},remo}},onLo}},onWindowResi}}};Q.ifrah};Q.iframe.prototype={appeS},remo}},onLot}};Q.ht0};Q.html.prototype={appe)},remo}}};var ao=false,Y=[],q=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],aa,ae,Z,m=trT.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';T.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};T.in)};T.onOp}};T.onLo)};T.onRea}};T.onShe};T.onClo}};T.onPlay=function(){r("play",false);r("pause",true)};T.onPau)};T.onWindowResi}};Q.skin=T;au.Shadowbox=Q})(window);
/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
 Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
 This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
try {
    var p = swfobject.p;
} catch (e) {
    /*! SWFObject v2.1 <http://code.google.com/p/swfobject/>
     Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
     This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
     */
    var swfobject = function() {

        var UNDEF = "undefined",
                OBJECT = "object",
                SHOCKWAVE_FLASH = "Shockwave Flash",
                SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
                FLASH_MIME_TYPE = "application/x-shockwave-flash",
                EXPRESS_INSTALL_ID = "SWFObjectExprInst",

                win = window,
                doc = document,
                nav = navigator,

                domLoadFnArr = [],
                regObjArr = [],
                objIdArr = [],
                listenersArr = [],
                script,
                timer = null,
                storedAltContent = null,
                storedAltContentId = null,
                isDomLoaded = false,
                isExpressInstallActive = false;

        /* Centralized function for browser feature detection
         - Proprietary feature detection (conditional compiling) is used to detect Internet Explorer's features
         - User agent string detection is only used when no alternative is possible
         - Is executed directly for optimal performance
         */
        var ua = function() {
            var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
                    playerVersion = [0,0,0],
                    d = null;
            if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
                d = nav.plugins[SHOCKWAVE_FLASH].description;
                if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
                    d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
                    playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    playerVersion[2] = /r/.test(d) ? parseInt(d.replace(/^.*r(.*)$/, "$1"), 10) : 0;
                }
            }
            else if (typeof win.ActiveXObject != UNDEF) {
                var a = null, fp6Crash = false;
                try {
                    a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".7");
                }
                catch(e) {
                    try {
                        a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".6");
                        playerVersion = [6,0,21];
                        a.allowScriptAccess = "sameDomain";  // Introduced in fp6.0.47
                    }
                    catch(e) {
                        if (playerVersion[0] == 6) {
                            fp6Crash = true;
                        }
                    }
                    if (!fp6Crash) {
                        try {
                            a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                        }
                        catch(e) {}
                        }
                }
                if (!fp6Crash && a) { // a will return null when ActiveX is disabled
                    try {
                        d = a.GetVariable("$version");  // Will crash fp6.0.21/23/29
                        if (d) {
                            d = d.split(" ")[1].split(",");
                            playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                        }
                    }
                    catch(e) {}
                }
            }
            var u = nav.userAgent.toLowerCase(),
                    p = nav.platform.toLowerCase(),
                    webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
                    ie = false,
                    windows = p ? /win/.test(p) : /win/.test(u),
                    mac = p ? /mac/.test(p) : /mac/.test(u);
            /*@cc_on
             ie = true;
             @if (@_win32)
             windows = true;
             @elif (@_mac)
             mac = true;
             @end
             @*/
            return { w3cdom:w3cdom, pv:playerVersion, webkit:webkit, ie:ie, win:windows, mac:mac };
        }();

        /* Cross-browser onDomLoad
         - Based on Dean Edwards' solution: http://dean.edwards.name/weblog/2006/06/again/
         - Will fire an event as soon as the DOM of a page is loaded (supported by Gecko based browsers - like Firefox -, IE, Opera9+, Safari)
         */
        var onDomLoad = function() {
            if (!ua.w3cdom) {
                return;
            }
            addDomLoadEvent(main);
            //CQ: START
            /*if (ua.ie && ua.win) {
                try {    // Avoid a possible Operation Aborted error
                    doc.write("<scr" + "ipt id=__ie_ondomload defer=true src=//:></scr" + "ipt>"); // String is split into pieces to avoid Norton AV to add code that can cause errors
                    script = getElementById("__ie_ondomload");
                    if (script) {
                        addListener(script, "onreadystatechange", checkReadyState);
                    }
                }
                catch(e) {}
            }*/
            //CQ: END
            if (ua.webkit && typeof doc.readyState != UNDEF) {
                        timer = setInterv}}, 10);
                    }
            if (typeof doc.addEventListener != UNDEF) {
                doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, null);
            }
            addLoadEvent(callDomLoadFunctions);
        }();

      }

        function callDomLoadFunctions() {
            if (isDomLoaded) {
                return;
            }
            //CQ: START
            /*if (ua.ie && ua.win) { // Test if we can really add elements to the DOM; we don't want to fire it too early
                var s = createElement("span");
                try { // Avoid a possible Operation Aborted error
                    var t = doc.getElementsByTagName("body")[0].appendChild(s);
                    t.parentNode.removeChild(t);
                }
                catch (e) {
                    return;
                }
            }*/
            //CQ: END
            isDomLoaded = true;
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            var dl = domLoadFnArr.length;
            for (var i = 0; i < dl; i++) {
                domLoadFnArr[i]();
            }
        }

      }

        /* Cross-browser onload
         - Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
         - Will fire an event as soon as a web page including all of its assets are loaded
         */
      }

        /* Main function
         - Will preferably execute onDomLoad, otherwise onload (as a fallback)
         */
        function main() { // Static publishing only
            var rl = regObjArr.length;
            for (var i = 0; i < rl; i++) { // For each registered object element
                var id = regObjArr[i].id;
                if (ua.pv[0] > 0) {
                    var obj = getElementById(id);
                    if (obj) {
                        regObjArr[i].width = obj.getAttribute("width") ? obj.getAttribute("width") : "0";
                        regObjArr[i].height = obj.getAttribute("height") ? obj.getAttribute("height") : "0";
                        if (hasPlayerVersion(regObjArr[i].swfVersion)) { // Flash plug-in version >= Flash content version: Houston, we have a match!
                            if (ua.webkit && ua.webkit < 312) { // Older webkit engines ignore the object element's nested param elements
                                fixParams(obj);
                            }
                            setVisibility(id, true);
                        }
                        else if (regObjArr[i].expressInstall && !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac)) { // Show the Adobe Express Install dialog if set by the web page author and if supported (fp6.0.65+ on Win/Mac OS only)
                            showExpressInstall(regObjArr[i]);
                        }
                        else { // Flash plug-in and Flash content version mismatch: display alternative content instead of Flash content
                            displayAltContent(obj);
                        }
                    }
                }
                else {  // If no fp is installed, we let the object element do its job (show alternative content)
                    setVisibility(id, true);
                }
            }
        }

        /* Fix nested param elements, which are ignored by older webkit engines
         - This includes Safari up to and including version 1.2.2 on Mac OS 10.3
         - Fall back to the proprietary embed element
         */
      }

        /* Show the Adobe Express Install dialog
         - Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
         */
      }

        /* Functions to abstract and display alternative content
         */
      }


      }

        /* Cross-browser dynamic SWF creation
         */
        function createSWF(attObj, parObj, id) {
            var r, el = getElementById(id);
            if (el) {
                if (typeof attObj.id == UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
                    attObj.id = id;
                }
                if (ua.ie && ua.win) { // IE, the object element and W3C DOM methods do not combine: fall back to outerHTML
                    var att = "";
                    for (var i in attObj) {
                        if (attObj[i] != Object.prototype[i]) { // Filter out prototype additions from other potential libraries, like Object.prototype.toJSONString = function() {}
                            if (i.toLowerCase() == "data") {
                                parObj.movie = attObj[i];
                            }
                            else if (i.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
                                att += ' class="' + attObj[i] + '"';
                            }
                            else if (i.toLowerCase() != "classid") {
                                att += ' ' + i + '="' + attObj[i] + '"';
                            }
                        }
                    }
                    var par = "";
                    for (var j in parObj) {
                        if (parObj[j] != Object.prototype[j]) { // Filter out prototype additions from other potential libraries
                            par += '<param name="' + j + '" value="' + parObj[j] + '" />';
                        }
                    }
                    el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
                    objIdArr[objIdArr.length] = attObj.id; // Stored to fix object 'leaks' on unload (dynamic publishing only)
                    r = getElementById(attObj.id);
                }
                else if (ua.webkit && ua.webkit < 312) { // Older webkit engines ignore the object element's nested param elements: fall back to the proprietary embed element
                    var e = createElement("embed");
                    e.setAttribute("type", FLASH_MIME_TYPE);
                    for (var k in attObj) {
                        if (attObj[k] != Object.prototype[k]) { // Filter out prototype additions from other potential libraries
                            if (k.toLowerCase() == "data") {
                                e.setAttribute("src", attObj[k]);
                            }
                            else if (k.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
                                e.setAttribute("class", attObj[k]);
                            }
                            else if (k.toLowerCase() != "classid") { // Filter out IE specific attribute
                                e.setAttribute(k, attObj[k]);
                            }
                        }
                    }
                    for (var l in parObj) {
                        if (parObj[l] != Object.prototype[l]) { // Filter out prototype additions from other potential libraries
                            if (l.toLowerCase() != "movie") { // Filter out IE specific param element
                                e.setAttribute(l, parObj[l]);
                            }
                        }
                    }
                    el.parentNode.replaceChild(e, el);
                    r = e;
                }
                else { // Well-behaving browsers
                    var o = createElement(OBJECT);
                    o.setAttribute("type", FLASH_MIME_TYPE);
                    for (var m in attObj) {
                        if (attObj[m] != Object.prototype[m]) { // Filter out prototype additions from other potential libraries
                            if (m.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
                                o.setAttribute("class", attObj[m]);
                            }
                            else if (m.toLowerCase() != "classid") { // Filter out IE specific attribute
                                o.setAttribute(m, attObj[m]);
                            }
                        }
                    }
                    for (var n in parObj) {
                        if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") { // Filter out prototype additions from other potential libraries and IE specific param element
                            createObjParam(o, n, parObj[n]);
                        }
                    }
                    el.parentNode.replaceChild(o, el);
                    r = o;
                }
            }
            r.style.outline="none";
            return r;
        }

      }

        /* Cross-browser SWF removal
         - Especially needed to safely and completely remove a SWF in Internet Explorer
         */
      }

      }

        /* Functions to optimize JavaScript compression
         */
      }

      }

        /* Updated attachEvent function for Internet Explorer
         - Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
         */
      }

        /* Flash Player and SWF content version matching
         */
      }

        /* Cross-browser dynamic CSS creation
         - Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
         */
      }

      }


        /* Filter to avoid XSS attacks
         */
      }

        /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
         */
        var cleanup = function() {
            if (ua.ie && ua.win) {
                var fn = function() {
                    // remove listeners to avoid memory leaks
                    var ll = listenersArr.length;
                    for (var i = 0; i < ll; i++) {
                        listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
                    }
                    // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
                    var il = objIdArr.length;
                    for (var j = 0; j < il; j++) {
                        removeSWF(objIdArr[j]);
                    }
                    // cleanup library's main closures to avoid memory leaks
                    for (var k in ua) {
                        ua[k] = null;
                    }
                    ua = null;
                    for (var l in swfobject) {
                        swfobject[l] = null;
                    }
                    swfobject = null;
                    // detach ourself
                    window.detachEvent("onunload", fn);
                };
                window.attachEvent("onunload", fn);
            }
        }();


        return {
            /* Public API
             - Reference: http://code.google.com/p/swfobject/wiki/SWFObject_2_0_documentation
             */
            registerObjec },

            getObjectById: function(objectIdStr) {
                var r = null;
                if (ua.w3cdom) {
                    var o = getElementById(objectIdStr);
                    if (o) {
                        var n = o.getElementsByTagName(OBJECT)[0];
                        if (!n || (n && typeof o.SetVariable != UNDEF)) {
                            r = o;
                        }
                        else if (typeof n.SetVariable != UNDEF) {
                            r = n;
                        }
                    }
                }
                return r;
            },

            embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj) {
                //CQ: START
                if (document.readyState === undefined || document.readyState == "complete") {
                    callDomLoadFunctions();
                }
                //CQ: END
                if (!ua.w3cdom || !swfUrlStr || !replaceElemIdStr || !widthStr || !heightStr || !swfVersionStr) {
                    return;
                }
                widthStr += ""; // Auto-convert to string
                heightStr += "";
                if (hasPlayerVersion(swfVersionStr)) {
                    setVisibility(replaceElemIdStr, false);
                    var att = {};
                    if (attObj && typeof attObj === OBJECT) {
                        for (var i in attObj) {
                            if (attObj[i] != Object.prototype[i]) { // Filter out prototype additions from other potential libraries
                                att[i] = attObj[i];
                            }
                        }
                    }
                    att.data = swfUrlStr;
                    att.width = widthStr;
                    att.height = heightStr;
                    var par = {};
                    if (parObj && typeof parObj === OBJECT) {
                        for (var j in parObj) {
                            if (parObj[j] != Object.prototype[j]) { // Filter out prototype additions from other potential libraries
                                par[j] = parObj[j];
                            }
                        }
                    }
                    if (flashvarsObj && typeof flashvarsObj === OBJECT) {
                        for (var k in flashvarsObj) {
                            if (flashvarsObj[k] != Object.prototype[k]) { // Filter out prototype additions from other potential libraries
                                if (typeof par.flashvars != UNDEF) {
                                    par.flashvars += "&" + k + "=" + flashvarsObj[k];
                                }
                                else {
                                    par.flashvars = k + "=" + flashvarsObj[k];
                                }
                            }
                        }
                    }
                    addDomLoadEve });
                }
                else if (xiSwfUrlStr && !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac)) {
                    isExpressInstallActive = true; // deferred execution
                    setVisibility(replaceElemIdStr, false);
                    addDomLoadEve });
                }
            },

            getFlashPlayerVersio },

            hasFlashPlayerVersion: hasPlayerVersion,

            createSW },

            removeSW },

            createCS },

            addDomLoadEvent: addDomLoadEvent,

            addLoadEvent: addLoadEvent,

            getQueryParamValu },

            // For internal usage only
            expressInstallCallbac }
        };
    }();
}
$(document).ready(function() { 
        var hrefs = $("a");
        var curHost=  "http://"+ window.location.host;
        var govDomainList = new Array('http://www.ask.census.gov','http://www.census.gov','http://census.gov', 'https://www.census.gov', 'https://census.gov','http://www.commerce.gov','http://commerce.gov','https://census.csod.com/ats/careersite/search.aspx?site=1&c=census','https://census.csod.com/ats/careersite/LoginLite.aspx?c=census&site=1',curHost);
            

          $('#confirm1').hide();
       // This Loop used to initialize external link handlers for every <a> on the page.
        // this refers to the current <a> element
          var filename = window.location.pathname.split('/').pop();
          if(filename.indexOf("siteheader")== -1) {
        $('a').each(function(){
        var lnk=$(this).attr('href');
        if(typeof lnk === "undefined" || !lnk.match("^http")||lnk.indexOf(curHost)!=-1){
        }
        else{
        var index = externalink($(this).attr('href'), govDomainList);       
        if(!index) {
            $(this).attr('target', '_blank'); 
            $(this).on('click', function(event){
                interstit($(this).attr('href'), event);
           });
          }
         }
        });
          }
   });
   
// Popup Disclaimer for external links
function interstit( page, event ) {
    var ret;
    $msg=$.trim($('#popuptext').text()) ;
    ret=confirm($msg);
    if ( ret ) {
        // window.open(page)
     } else {
        event.preventDefault();
     }
}

function externalink(domain, domList) {

  var domainRexp = new RegExp('.*\\.gov');
  var foundPresent = domList.indexOf(domain);//includes(domain);
  var found = false;

  for(var i = 0; i < domList.length; i++)   {
         if(domainRexp.test(domain) ) {
          found = true;
          break;
        }
		if(foundPresent) {
          found = true;
          break;
        }       
  }
    return found;
}
$(document).ready(function () {   
     
    //$(".lefttnav > li").children("ul").css("display", "none"); //hide all dropdowns
    //var top = $(".lefttnav > li").position().top + $(".lefttnav > li").height(); //find the top position for the dropdown menu by adding the top position of the navigation links to their height (giving the bottom position for the navigation links)       
    var counter = 0;
    //when the user hovers of the navigation link..
    var navItems=null    
navItems=$(".grid_navInnerLandingLinks >ul").children();
    if(navItems.length==0){
        navItems=$(".leftnav >ul").children();
    }
   
    if(navItems.length>0){
    //$(navItems).children("span").css("margin-left","5px");
    $(navItems).each(function (index) {
        if($(this).children("ul").length>0){          
        if(!$(this).children("ul").hasClass("expanded")){
        $(this).hover(delayNavDisplay,hideNavSub);
        }else{                              
        var children= $(this).children("ul").children();
        if(children){              
            $(children).each(function (index) {            
                           if($(this).children("ul").hasClass("expanded")){                           
                           $(this).children("ul").children("li").css('margin-left', '0px');                            
                           }
                           else{
                $(this).hover(delayNavDisplay2,hideNavSub);
                }                
            });
        }
        }
    }
    });
    }

    var $mobileNav = $('#data-uscb-input-wrapper-mobile-nav');

    $mobileNav.click(function(e) {
        var $dropdown = $mobileNav.find('ul');
        if ( $dropdown[0] ) {
        	if ( $dropdown[0].style.display === 'none' ) {
            	$dropdown[0].style.display = 'block';
        	} else {
            	$dropdown[0].style.display = 'none';
        	}
        }
    });

    
    $(window).click(function(e){			
        if ( $(e.target).closest( '#data-uscb-input-wrapper-mobile-nav' )[0] !== undefined ) {
            //do nothing...
        } else {
            var $dropdown = $mobileNav.find('ul');
            if ( $dropdown[0] ) {
                if ( $dropdown[0].style.display === 'block' ) {
                    $dropdown[0].style.display = 'none';
                }
            }
        }
    });
});

var delayNavDisplay = function () {
    //clearInterval(delay);
     var left = $(this).position().left; //get the postion of the main link relative to the <body>
    var right = $(this).position().right; // get the right margin of the parent tab
    var offset = $(this).offset().left; //get the position of the main link relative to the document
    var width = $(this).width(); //get the width of the dropdown    
    
    var listItem = this;
    //$(this).css('background-color', '#0d6a99'); 
    $(this).css('background-color', '#405773');
    $(this).children("span").children("a").css('color', '#FFFFFF');
    $(this).children("span").children("strong").css('color', '#FFFFFF');
    $(this).children("span").children("a").css('text-decoration', 'underline');
    
    $(this).children("ul").css("display", "block");
    $(this).children("ul").css("position", "absolute");   
    $(this).children("ul").css("box-shadow", "0px 0px 0px #818493, 3px 3px 3px #818493, 0px 0px 0px #818493");    
    $(this).children("ul").children("li").children("a").css('color', '#041C5D');
    
    $(this).children("ul").css({
        left: width,
        top: $(this).position().top
     });
};

var delayNavDisplay2 = function () {
    
    var left = $(this).position().left; //get the postion of the main link relative to the <body>
    var right = $(this).position().right; // get the right margin of the parent tab
    var offset = $(this).offset().left; //get the position of the main link relative to the document
    var width = $(this).width(); //get the width of the dropdown
    
    var listItem = this;
    $(this).css('background-color', '#66cccc');
    $(this).children("span").children("a").css('text-decoration', 'underline')
    $(this).css('color', 'black');
    $(this).children("ul").css("display", "block");
    $(this).children("ul").css("position", "absolute");    
    $(this).children("ul").css("box-shadow", "0px 0px 0px #818493, 3px 3px 3px #818493, 0px 0px 0px #818493");
    
    $(this).children("ul").css({
        left: width-2,
        top: $(this).position().top
     });
};

var hideNavSub = (function () { //if the user moves the cursor outside of the dropdown menu...
    //clearInterval(delay);
    $(this).css('background-color', '');
    $(this).children("span").children("a").css('color', '#112E51');//rgb(51,51,51)
    $(this).children("span").children("strong").css('color', '#112E51');//rgb(51,51,51)
    $(this).css('color', '#112E51');//rgb(51,51,51)
    $($($(this).children().get(0)).children().get(0)).css("text-decoration","none");
    $(this).children("ul").hide(); //hide the menu
    
});
function buildListItem(fData, sChar, colSize) {
	var colWidth = 100 / colSize;
	var listResult = "<table width='100%'>";
		listResult += "<tr>";
	    	listResult += "<th colspan='" + colSize + "' class='category-label'>";
	    		listResult += sChar.toUpperCase();
	    	listResult += "</th>";
	    listResult += "</tr>";
	    var columnCtr = 0;
	    for (var i = 0; i < fData.length; i++) {
	    	if (columnCtr == 0) {
                listResult += "<tr>";
                columnCtr = 1;
            }

            if (fData[i].country_selector_type === "aemattachment") {
				listResult += "<td class='uscb-list-attachment uscb-padding-T-20 uscb-padding-B-20' width='" + colWidth + "%'>";
                    listResult += "<a href=" + fData[i].url + " filetrack=" + fData[i].fileTrackKey + " target='_blank' " +
                    " onclick='buttonClick(this, \"Geographic Country List Button\", \"Body\");' class='uscb-capitalize uscb-color-accent uscb-layout-align-start-start'>";
                    listResult += "<span class='uscb-list-attachment-icon uscb-padding-TB-2 uscb-layout-align-start-center'><img alt='' src=" + fData[i].icon_path + " class='state-list-image-size' /></span>";
                    listResult += "<span class='uscb-padding-T-2 uscb-text-link uscb-padding-R-8 uscb-attachment-item'><span>" + fData[i].geographic_area_name.toLowerCase() + "</span>";
                    listResult += "&nbsp;&nbsp;<span>[" + fData[i].file_size + "]</span></span></a>";                                
                listResult += "</td>";
			} else if (fData[i].country_selector_type === "nonaemattachment") {				
				listResult += "<td class='uscb-list-attachment uscb-padding-T-20 uscb-padding-B-20' width='" + colWidth + "%'>";
                    listResult += "<a href=" + fData[i].url + " target='_blank' " +
                    " onclick='buttonClick(this, \"Geographic Country List Button\", \"Body\");' class='uscb-capitalize uscb-color-accent uscb-layout-align-start-start'>";
                    listResult += "<span class='uscb-list-attachment-icon uscb-padding-TB-2 uscb-layout-align-start-center'><img alt='' src=" + fData[i].icon_path + " class='state-list-image-size' /></span>";
                    listResult += "<span class='uscb-padding-T-2 uscb-text-link uscb-padding-R-8 uscb-attachment-item'><span>" + fData[i].geographic_area_name.toLowerCase() + "</span>";
                    listResult += "&nbsp;&nbsp;<span>[" + fData[i].file_size + "]</span> </span></a>"; 
                listResult += "</td>";
			} else if (fData[i].country_selector_type === "aemwebpage" || fData[i].country_selector_type === "nonaemwebpage") {
				listResult += "<td class='uscb-list-attachment uscb-padding-T-20 uscb-padding-B-20' width='" + colWidth + "%'>";
                    listResult += "<a href=" + fData[i].url + " target='" + (fData[i].open_new_page ? "_blank" : "_self") + "'" +
                    " onclick='buttonClick(this, \"Geographic Country List Button\", \"Body\");' class='uscb-capitalize uscb-color-accent uscb-layout-align-start-start'>";
					listResult += "<span class='uscb-list-attachment-icon uscb-padding-TB-2 uscb-layout-align-start-center'><img alt='' src=" + fData[i].icon_path + " class='state-list-image-size' /></span>";
                    listResult += "<span class='uscb-padding-T-2 uscb-text-link uscb-padding-R-8 uscb-attachment-item'><span>" + fData[i].geographic_area_name.toLowerCase() + "</span></span></a>";                                
                listResult += "</td>";
			}

			if (columnCtr == colSize) {                
                listResult += "</tr>";
                columnCtr = 0;
            }

            columnCtr++;

	    }//end for...loop
	    listResult += "<tr><td colspan='3'><a href='#' class='data-uscb-back-top-link uscb-color-accent'>Back to Top</a><hr/></td></tr>";
	listResult += "</table>";	
	return listResult;
}

$(document).ready(function() {

	$('.data-uscb-alpha-link-lg').click(function(e) {		
		var selectedChar = $(this).attr('id');
		var filteredData = [];
		if (selectedChar.toUpperCase() != 'ALL') {												
			for (var i = 0; i < data.length; i++) {				  
			  if (data[i].geographic_area_name.toLowerCase().startsWith(selectedChar.toLowerCase())) {				  	
			  	filteredData.push(data[i]);					  	
			  }
			}//end for...loop				
			$('#data-uscb-geographic-area-detail-list').html(buildListItem(filteredData, selectedChar, 3));
			e.preventDefault();
		    var target = '#data-uscb-geographic-area-detail-list';
		    $('html, body').animate({
		        scrollTop: $(target).offset().top
		    }, 2000);				
		} else {			
			for (var i = 0; i < data.length; i++) {
				filteredData.push(data[i]);
			}
			$('#data-uscb-geographic-area-detail-list').html(buildListItem(filteredData, selectedChar, 3));
			e.preventDefault();
		    var target = '#data-uscb-geographic-area-detail-list';
		    $('html, body').animate({
		        scrollTop: $(target).offset().top
		    }, 2000);
		}
	});
	
	$('.data-uscb-alpha-link-sm').click(function(e) {
		var selectedChar = $(this).attr('id');	
		var filteredData = [];
		if (selectedChar.toUpperCase() != 'ALL') {							
			for (var i = 0; i < data.length; i++) {				  
			  if (data[i].geographic_area_name.toLowerCase().startsWith(selectedChar.toLowerCase())) {				  	
			  	filteredData.push(data[i]);					  	
			  }
			}//end for...loop				
			$('#data-uscb-geographic-area-detail-list').html(buildListItem(filteredData, selectedChar, 1));
			e.preventDefault();
		    var target = '#data-uscb-geographic-area-detail-list';
		    $('html, body').animate({
		        scrollTop: $(target).offset().top
		    }, 2000);				
		} else {
			for (var i = 0; i < data.length; i++) {
				filteredData.push(data[i]);
			}
			$('#data-uscb-geographic-area-detail-list').html(buildListItem(filteredData, selectedChar, 1));
			e.preventDefault();
		    var target = '#data-uscb-geographic-area-detail-list';
		    $('html, body').animate({
		        scrollTop: $(target).offset().top
		    }, 2000);
		}
	});	
	
	$(document).on("click", "a.data-uscb-back-top-link", function(e) {		
		$('html, body').animate({
            'scrollTop' : $('.data-uscb-country-selector-dropdown-click').offset().top
        },2000);
	});

});//end document.ready function
$(document).rea
});
//end of doc ready


function dropDownToggle(event, id) {
    let selectedElement;
    let ulElement = $('#'+id);
    console.log("id is " + id);
    let ulDisplayedElement = $('.uscb-lang-dropdown-button');

    let target =  $('#'+id);
    if (target.is("li")) {
        selectedElement = target[0];
        $(target[0]).siblings().removeClass("uscb-lang-dropdown-selected");
        $(selectedElement).addClass("uscb-lang-dropdown-selected");
        ulDisplayedElement.html(selectedElement.innerHTML);
    } else {
        ulElement.toggleClass('uscb-hide-dropdown');
    }
}
var $ = jQuery.noConflict();

function toggleStatus(activeObj, disabledObj){
	activeObj.removeClass('isDisabled');
	activeObj.addClass('isActive');
	activeObj.attr('tabindex', 0);

	disabledObj.removeClass('isActive');
	disabledObj.addClass('isDisabled');
	disabledObj.attr('tabindex', -1);
}

function showMoreCardsHandler(event) {
	var $showMoreCards = $(event.currentTarget);
	var $showLessCards = $showMoreCards.closest('.uscb-sub-heading-2').find('.data-uscb-show-less-cards');

	$showMoreCards.closest('.data-uscb-list-articles-container').find('.card-over-limit').show();
	$showMoreCards.attr('aria-expanded', true);
	$showLessCards.attr('aria-expanded', true);

	toggleStatus($showLessCards, $showMoreCards);
}

function showLessCardsHandler(event) {
	var $showLessCards = $(event.currentTarget);
	var $showMoreCards = $showLessCards.closest('.uscb-sub-heading-2').find('.data-uscb-show-more-cards');

	$showLessCards.closest('.data-uscb-list-articles-container').find('.card-over-limit').hide();
	$showLessCards.attr('aria-expanded', false);
	$showMoreCards.attr('aria-expanded', false);

	toggleStatus($showMoreCards, $showLessCards);
}

function showMoreCardsKeyDownHandler(event) {
	if (event.keyCode === 13 || event.keyCode === 32) {
		event.preventDefault();
		showMoreCardsHandler(event);
	}
}

function showLessCardsKeyDownHandler(event) {
	if (event.keyCode === 13 || event.keyCode === 32) {
		event.preventDefault();
		showLessCardsHandler(event);
	}
}

$(document).ready(function(){
	//hide those cards with class .card-over-limit
	$('.card-over-limit').hide();

	var $showLessCards = $('.data-uscb-show-less-cards');
	$showLessCards.addClass('isDisabled');
	$showLessCards.attr('tabindex', -1);

	var $body = $("body");

	$body.on("click", ".data-uscb-show-more-cards", showMoreCardsHandler);
	$body.on("click", ".data-uscb-show-less-cards", showLessCardsHandler);
	$body.on("keydown", ".data-uscb-show-more-cards", showMoreCardsKeyDownHandler);
	$body.on("keydown", ".data-uscb-show-less-cards", showLessCardsKeyDownHandler);
});
function customFilterGeographicArea(array, terms) {
	arrayOfTerms = terms.split(" ");
	var term = $.map(arrayOfTerms, function(tm) {
		return $.ui.autocomplete.escapeRegex(tm);
	}).join('|');
	var matcher = new RegExp("\\b" + term, "i");

	return $.grep(array, function(value) {
		return matcher.test(value.geographic_area_name);
	});
};

function onClearGeoSelectionKeyDown (event, wrapperDivId) {
	if (event.keyCode === 32) {
		event.preventDefault();
		clearSelectionGeographicArea(wrapperDivId);
	}
}

function clearSelectionGeographicArea(wrapperDivId) {
	var $countrySelectorInput = $(wrapperDivId).find('input');
	$countrySelectorInput.val('');
	$(wrapperDivId).find('.uscb-input-box-icon').remove();
	$(wrapperDivId).find('.uscb-country-item-close').remove();
	$(wrapperDivId).find('.uscb-geographic-area-level').remove();
	$(wrapperDivId).next().html('');
}

var CensusCountrySelector = (function($, _, digitalData) {
	var countrySelectors = [];
	var initCountrySelector = function(id, dataSorted, isOpen) {
		var countrySelectorObj = _.find(countrySelectors, {
			"id" : "" + id + ""
		});
		
		if (!countrySelectorObj) {
			countrySelectorObj = {
				id : id,
				data : dataSorted
			}
			countrySelectors.push(countrySelectorObj);
		}		
		
		var countrySelectorWrapperDivId = '#data-uscb-input-wrapper-' + id;		
		var $countrySelector = $(countrySelectorWrapperDivId);		
		var $countrySelectorInput = $countrySelector.find('input');
		
		if ($countrySelectorInput.length > 0) {
			$countrySelectorInput
					.autocomplete({
						source : dataSorted,
						multiple : true,
						minLength : 0,
						appendTo : countrySelectorWrapperDivId,
						mustMatch : false,
						source : function(request, response) {
							response(customFilterGeographicArea(dataSorted,
									request.term));
						},
						open : function(event, ui) {
							isOpen = true;
							$(event.target).parent().attr("aria-expanded", "true");
							var inputBoxWidth = $countrySelector.width();                
			                $('.ui-autocomplete').css('width', inputBoxWidth + 'px');
						},
						close : function(event, ui) {
							$(event.target).parent().attr("aria-expanded", "false");
						},
						select : function(event, ui) {
							isOpen = false;
							clearSelectionGeographicArea(countrySelectorWrapperDivId);							
							if (ui.item.show_item == 'uscb-no-show-attachment') {
								$('.data-uscb-download-btn-wrapper').html('');
								if (ui.item.open_new_page) {
									window.open(ui.item.url, '_blank');
									$countrySelectorInput
											.val(ui.item.geographic_area_name)
											.after(
													"<img role='button' aria-label='clear geography selection' tabindex='0' class='uscb-country-item-close' src='/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/close-3-teal.svg' onkeydown=\"onClearGeoSelectionKeyDown(event, \'" + countrySelectorWrapperDivId + "\')\" onClick=\"clearSelectionGeographicArea('" + countrySelectorWrapperDivId + "');\" />")
											.before(
													"<img class='uscb-input-box-icon "
															+ ui.item.icon_status
															+ "' src='"
															+ ui.item.icon_path
															+ "' />").blur();

									event.preventDefault();
								} else {
									location.href = ui.item.url;
								}
							} else if (ui.item.show_item === 'uscb-show-attachment') {
								$countrySelectorInput.val('');								
								$('.uscb-input-wrapper-' + id).find('.uscb-country-item-close').remove();							
								$countrySelectorInput
										.val(
												ui.item.geographic_area_name
														+ " ["
														+ ui.item.file_size
														+ "]")
										.after("<span class='uscb-geographic-area-level'>" + ui.item.geographic_area_level + "</span>&nbsp;<img role='button' aria-label='clear geography selection' tabindex='0' class='uscb-country-item-close' src='/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/close-3-teal.svg' onkeydown=\"onClearGeoSelectionKeyDown(event, \'" + countrySelectorWrapperDivId + "\')\" onClick=\"clearSelectionGeographicArea('" + countrySelectorWrapperDivId + "');\"/>")
										.before("<img class='uscb-input-box-icon "
														+ ui.item.icon_status
														+ "' src='"
														+ ui.item.icon_path
														+ "' />");

								$('.data-uscb-download-btn-wrapper').html("<a class='uscb-primary-button uscb-download-button' target='_blank' href='"
														+ ui.item.url
														+ "' filetrack='"
														+ ui.item.fileTrackKey
														+ "'>Download this file</a>");								
								$countrySelectorInput.autocomplete("search", "");
								event.preventDefault();
							} else {
								console.log('Other outside option...');
							}
							return false;
						},
						focus	},
						create : function() {
							$(this).data('ui-autocomplete')._renderItem = function(
									ul, item) {
								return $('<li class="geographyMenuItem uscb-list-attachment">')
										.append(
												'<a href="'
														+ item.url
														+ '" class="uscb-stateitem '
														+ item.left_padding
														+ '  uscb-capitalize" title="'
														+ item.tool_tip
														+ '" filetrack="'
														+ item.fileTrackKey
														+ '" onclick="countrySelectorAnalytics(this);">'
	                                                    + '<span class="uscb-layout-align-start-center">'
														+ '<span class="uscb-list-attachment-icon">'
														+ '<img class="state-list-image-size" src="'
														+ item.icon_path
														+ '"/>'
														+ '</span>'
														+ '<span class="uscb-heading-6 state-list-item-space">' 
														+ '<span class="uscb-margin-R-4">' + item.geographic_area_name.toLowerCase() + '</span>'
														+ '<span>'
														+ '<span>'
														+ item.geographic_area_level
														+ '</span>'
														+ ' <span class=" '
														+ item.show_attachment_size
														+ '">&nbsp;['
														+ item.file_size
														+ ']</span>'
														+ '</span>'
														+ '</span>' 
														+ '</span>' 
														+ '</a>')
										.appendTo(ul);
							};
						}
					});
		}// end if		

		$countrySelector.click(function(e) {			
			if (!e.target.className.startsWith('uscb-country-item-close')) {
				if (isOpen) {
					$countrySelectorInput.autocomplete("close");
					isOpen = false;					
				} else {
					$countrySelectorInput.autocomplete("search", "");
					isOpen = true;
				}
			}
		});
		
		$(window).click(function(e) {			
			if ( e.target.className.startsWith('data-uscb-country-selector-dropdown-click') ) {
				//do nothing...
			} else {
				if (isOpen) {					
					$countrySelectorInput.autocomplete("close");
					isOpen = false;	
					e.stopPropagation();
				}
			}
		});
		
	}// end init function

	return {
		initCountrySelector : initCountrySelector
	}

})(jQuery, window._, digitalData);

function customFilterStateList(array, terms) {
	arrayOfTerms = terms.split(" ");
	var term = $.map(arrayOfTerm	}).join('|');
	var matcher = new RegExp("\\b" + term, "i");

	return $.grep(arra	});
};

function onClearStateSelectionKeyDown (event, wrapperDivId) {
	if (event.keyCode === 32) {
		event.preventDefault();
		clearSelectionStateList(wrapperDivId);
	}
}

function clearSelectionStateList(wrapperDivId){
	var $stateListInput = $(wrapperDivId).find('input');
	$stateListInput.val('');
	$(wrapperDivId).find('.uscb-input-box-icon').remove();
	$(wrapperDivId).find('.uscb-state-item-close').remove();
	$(wrapperDivId).next().html('');
}

var CensusStateList = (function($, _, digitalData) {
	var stateLists = [];
	var initStateList = function(id, data, isOpen) {
	    
	    var dataSorted = sortJSON(data, 'label', 'ASC');
		
		var stateListObj = _.find(stateLists, {
			"id" : "" + id + ""
		});
		
		if (!stateListObj) {
			stateListObj = {
				id : id,
				data : dataSorted
			}
			stateLists.push(stateListObj);
		}	
		
		var stateListWrapperDivId = '#data-uscb-input-wrapper-' + id;		
		var $stateList = $(stateListWrapperDivId);		
		var $stateListInput = $stateList.find('input');
		
		if ($stateListInput.length > 0) {
			//To force clear the pre-selected items when browser back button is clicked.
			clearSelectionStateList(stateListWrapperDivId);
			$stateListInput
					.autocomplete({
						source : dataSorted,
						multiple : true,
						minLength : 0,
						appendTo : stateListWrapperDivId,
						mustMatch : false,
						source : function(request, response) {
							response(customFilterStateList(dataSorted,
									request.term));
						},
						open : function(event, ui) {
							isOpen = true;
							$(event.target).parent().attr("aria-expanded", "true");
							var inputBoxWidth = $stateList.width();                
			                $('.ui-autocomplete').css('width', inputBoxWidth + 'px');
						},
						close : function(event, ui) {
							$(event.target).parent().attr("aria-expanded", "false");
						},
						select : function(event, ui) {
							isOpen = false;							
							clearSelectionStateList(stateListWrapperDivId);							
							if (ui.item.show_item == 'uscb-no-show-attachment') {
								$('.data-uscb-download-btn-wrapper').html('');
								if (ui.item.open_new_page) {
									window.open(ui.item.url, '_blank');
									$stateListInput
											.val(ui.item.value)
											.after(
													"<img role='button' aria-label='clear state selection' tabindex='0' class='uscb-state-item-close' src='/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/close-3-teal.svg' onkeydown=\"onClearStateSelectionKeyDown(event, \'" + stateListWrapperDivId + "\')\" onClick='clearSelectionStateList(\"" + stateListWrapperDivId + "\");'/>")
											.before(
													"<img class='uscb-input-box-icon "
															+ ui.item.icon_status
															+ "' src='"
															+ ui.item.icon_path
															+ "' />").blur();

									event.preventDefault();
								} else {
									location.href = ui.item.url;
								}
							} else if (ui.item.show_item === 'uscb-show-attachment') {
								$stateListInput.val('');								
								$stateList.find('.uscb-state-item-close').remove();							
								$stateListInput
										.val(
												ui.item.value
														+ " ["
														+ ui.item.file_size
														+ "]")
										.after(
												"<img role='button' aria-label='clear state selection' tabindex='0' class='uscb-state-item-close' src='/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/close-3-teal.svg' onkeydown=\"onClearStateSelectionKeyDown(event, \'" + stateListWrapperDivId + "\')\" onClick='clearSelectionStateList(\"" + stateListWrapperDivId + "\");'/>")
										.before(
												"<img class='uscb-input-box-icon "
														+ ui.item.icon_status
														+ "' src='"
														+ ui.item.icon_path
														+ "' />");

								$('#data-uscb-download-btn-wrapper-' + id).html("<a class='uscb-primary-button uscb-download-button' target='_blank' href='"
														+ ui.item.url
														+ "' filetrack='"
														+ ui.item.fileTrackKey
														+ "'>Download this file</a>");								
								$stateListInput.autocomplete("search", "");
								event.preventDefault();
							} else {
								// Should never happen.
								console.log('Other outside option...');
							}
							return false;
						},
						focus : function(event, ui) {
							$stateListInput.val( ui.item.value );
							return false;
						},
						create : function() {							
							$(this).data('ui-autocomplete')._renderItem = function(
									ul, item) {
								return $('<li class="stateMenuItem uscb-list-attachment">')
										.append(
                                                '<a href="'
                                                    + item.url
                                                    + '" class="uscb-stateitem ' 
                                                    + item.left_padding
                                                    + '  capitalized" title="'
                                                    + item.tool_tip
                                                    + '" filetrack="' 
                                                    + item.fileTrackKey 
                                                    + '" onclick="CensusStateList.stateListSelectorAnalytics(this);">'
                                                    + '<span class="uscb-layout-align-start-center">'
													+ '<span class="uscb-list-attachment-icon">' 
                                                    + '<img class="state-list-image-size" src="' 
                                                    + item.icon_path                                                                         
                                                    + '" />'
													+ '</span>'
													+ '<span class="uscb-heading-6 state-list-item-space">' 
													+ '<span class="uscb-margin-R-4">' +item.label + '</span>'
													+ '<span class=" '+ item.show_attachment_size +'">['
                                                    + item.file_size 
													+ ']</span>'
													+ '</span>'
                                                    + '</span>' 
                                                    + '</a>')
										.appendTo(ul);
							};
						}
					});
		}// end if		

		$stateList.click(function(e) {			
			if (!e.target.className.startsWith('uscb-state-item-close')) {
				if (isOpen) {					
					$stateListInput.autocomplete("close");
					isOpen = false;					
				} else {
					$stateListInput.autocomplete("search", "");					
					isOpen = true;
					e.stopPropagation();
				}
			}
		});
		
		$(window).click(function(e){			
			if ( e.target.className.startsWith('data-uscb-dropdown-click') ) {
				//do nothing...
			} else {
				if (isOpen) {					
					$stateListInput.autocomplete("close");
					isOpen = false;					
				}
			}
		});
		
	}// end init function


	function stateListSelectorAnalytics(elem) { 
		///DTM code///
		var res = $(elem).attr('href').split("/");		
		if( typeof($(elem).attr('filetrack')) != 'undefined' ){			
		    digitalData.event.eventInfo.download.fileUrl = $(elem).attr('filetrack');
		    digitalData.event.eventInfo.download.fileName = res[res.length - 1];
		    digitalData.event.eventName = 'Download';
		}else{
			digitalData.event.eventInfo.download.fileUrl = null;
		    digitalData.event.eventInfo.download.fileName = null;
		    digitalData.event.eventName = null;
		}
	 }
	
	function sortJSON(rawData, key, sortOrder) {
	    return rawData.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        if (sortOrder === 'ASC' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
	        if (sortOrder === 'DESC') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
	    });
	}

	return {
		initStateList: initStateList,
		stateListSelectorAnalytics: stateListSelectorAnalytics
	}

})(jQuery, window._, digitalData);
var CensusPageTabs = (function($, _) {
	
	var pageTabs = [];

    var initPageTabs = function(id, items) {        
        var compositeId = 'list-tab-' + id;
    	var pageTabObj = _.find(pageTabs, {"id": "" + compositeId + ""});
    	if (!pageTabObj) {
    		pageTabObj = {
    			id: compositeId
    		}
    		pageTabs.push(pageTabObj);			
    	}

    	var $pageTab = $("#" + compositeId);
    	$pageTab.find(".uscb-tab").each(function (index, element) {
            $(element).cli });      
        });


		var $tabMenuButton = $pageTab.find(".tabMenu__button_" + id);

		var toggleMenuDropdown = function() {
            $('.data-uscb-tab-dropdown-content-' + id).toggleClass("uscb-tab-show");

			var newAriaExpandedState = $tabMenuButton.attr('aria-expanded') === 'true' ? 'false' : 'true';

			$tabMenuButton.attr('aria-expanded', newAriaExpandedState);
		};

		$tabMenuButton.cli	});

		$tabMenuButton.keydown(function(event) {
			if (event.keyCode === 27 && $('.uscb-tab-dropdown-content').hasClass("uscb-tab-show")) {
				toggleMenuDropdown()
			}

			if (event.keyCode === 13 || event.keyCode === 32) {
				toggleMenuDropdown()
			}
		});
    };    

	var togglePageTabDropdown = function(event) {
		var target = $(event);		
	    var selectedElement;	    
		var ulElement = target.find('.data-uscb-form-dropdown-selection');

	    if (target.is("li") ) {
	        selectedElement = target[0];
	        ulElement.toggleClass('uscb-hide-dropdown');		        
	        $(location).attr("href", $(selectedElement).attr("id"));
	    } else {
	        ulElement.toggleClass('uscb-hide-dropdown');	        
			target.prepend("<div class='uscb-dropdown-backdrop'></div>");			
	        $('.uscb-dropdown-backdrop').click(function(event) {				
	            ulElement.toggleClass('uscb-hide-dropdown');
	            $(this).remove();
	            event.stopPropagation();
	        });
	    }    	
    }
    
    return {
        initPageTabs: initPageTabs,
        togglePageTabDropdown: togglePageTabDropdown
    }

})(jQuery, window._);


        
var CensusPagination = (function($, _, digitalData) {   
    var paginations = [];
    var initPagination = function(id) {
        var paginationObj = _.find(paginations, {
            'id': '' + id + ''
        });
        var displayAs = $('#txtdisplayas_' + id ).val();
        var listSource = $('#txtlistsource_' + id).val();
        var currentPage = $('#txtcurrentpage_' + id).val();
        var totalPages = $('#txttotalpages_' + id).val();
        var numPagesToDisplay = $('#txtnumpagetodisplay_' + id).val();
        var startPageNum = $('#txtstartpagenum_' + id).val();
        var openNonAEMAttachmentListNewTab = $('#txtopeninnewtabnonaemattachment_' + id).val();
        var showTeaserText = $('#txtshowteasertext_' + id).val();
        var gridCssClass = $('#txtgridcssclass_' + id).val();
      
        if (!paginationObj) {
            paginationObj = {            		
                id: id,
                displayAs : displayAs,
                listSource: listSource,
                currentPage : currentPage,
                totalPages : totalPages,
                numPagesToDisplay : numPagesToDisplay,
                startPageNum : startPageNum,
                openNonAEMAttachmentListNewTab: openNonAEMAttachmentListNewTab,
                showTeaserText: (showTeaserText == true || showTeaserText == 'true'),
                gridCssClass: gridCssClass
            }
            paginations.push(paginationObj);
        }
        showHidePrevNextButtons(id);       
    };

    function updateCurrentPage(page, element, componentId) {
     	var paginationObj = _.find(paginations, {
             "id": "" + componentId + ""
         });
     	
        $(element).siblings('li.curpage').children('a').removeClass('uscb-pagination-active');
        $(element).siblings('li.curpage').removeClass('curpage');

        $(element).addClass('curpage');
        $(element).children('a').addClass('uscb-pagination-active');

        paginationObj.currentPage = page;
    }
    
    function showHidePrevNextButtons(className) {
    	 var paginationObj = _.find(paginations, {
             'id': '' + className + ''
         });
        $('.prevButton'+className).toggle(paginationObj.currentPage != 1);
        $('.nextButton'+className).toggle(paginationObj.currentPage != paginationObj.totalPages);
    }

    var gotoPrevPage = function(event, ListId) {
    	var componentId = ListId.id;
    	var paginationObj = _.find(paginations, {
            'id': '' + componentId + ''
        });
    	
        event.preventDefault();
       
        var prev = $('#li_' + componentId + '_' + paginationObj.currentPage).prev();
        
        if (paginationObj.currentPage > 1) {
            gotoPage(event, prev, ListId);
        } else {
        	$('.prevButton').addClass('uscb-hide');
            event.preventDefault();
            return false;
        }
    };

    var gotoNextPage = function(event, ListId) {
    	var componentId = ListId.id;
    	var paginationObj = _.find(paginations, {
    		'id': '' + componentId + ''
    	});
    	
        var next = $('#li_' +componentId + '_' + paginationObj.currentPage).next();        
        
        if (paginationObj.currentPage < paginationObj.totalPages) {       	
            gotoPage(event, next, ListId);
        } else {
        	$('.nextButton').addClass('uscb-hide');
            event.preventDefault();
            return false;
        }
    };
    
    var goToNextPageKeyDown = function(event, ListId) {
		if (event.keyCode == 13) {
			CensusPagination.gotoNextPage(event, ListId);
		}
	};
    
    var gotoFirstPage = function(event, ListId) {
        var componentId = ListId.id;
        var first = $('#li_' + componentId + '_1').addClass('first');
        gotoPage(event, first, ListId, 'first');
    };

    var gotoLastPage = function(event, ListId) {
        var componentId = ListId.id;
        var paginationObj = _.find(paginations, {
            'id': '' + componentId + ''
        });
        var last = $('#li_' + componentId + '_' + paginationObj.totalPages);
        gotoPage(event, last, ListId, 'last');
    };
    
    var gotoLastPageKeyDown = function(event, ListId) {
		if (event.keyCode == 13) {
			CensusPagination.gotoLastPage(event, ListId);
		}
	};

    var gotoPage = function (event, element, ListId, pageIndicator) {
        var componentId = ListId.id;
        var page = null;
        var paginationObj = _.find(paginations, {
            'id': '' + componentId + ''
        });
        
        if ('first' === pageIndicator) {
            page = 1;
        } else if ('last' === pageIndicator) {
            page = paginationObj.totalPages;
        }
        
        if (null != element && null == page) {
            page = $(element).data('target');
        }
        
        var slingModelURL = $('#txtslingmodelurl_' + componentId).val();
        var pageURL = $('#txtpageurl_' + componentId).val();
        var chosenYear = 0;
        var pageURLFragments = pageURL.split('.');
        
        /* 
         * Tabbed census list pageURL e.g: /content/census/en/uat/aem6-4-testing/test-cms-1149-dynamic-list-component.2015.html/page/
         */
        if (pageURLFragments.length > 1) {
        	if (pageURLFragments[1].substring(0,3).toLowerCase() === 'all') {
    			chosenYear = 'All';
    		} else {        			        			
    			chosenYear = parseInt(pageURLFragments[1].substring(0,4));        			
    		}
        }

        if (!$(element).hasClass('curpage')) {
            var selectedTagIds = "";    
            var all_checkboxes = $('.chk-filter-tag');
            
            for (var i = 0; i < all_checkboxes.length; i++) {               
                if ($(all_checkboxes[i]).is(':checked')) {              
                    if ("" == selectedTagIds) {
                        selectedTagIds += $(all_checkboxes[i]).attr('data-target');
                    } else {
                        selectedTagIds += ',' + $(all_checkboxes[i]).attr('data-target');
                    }
                }
            }//end for...loop
            
            var urlVal =  (typeof(chosenYear) == 'number' && chosenYear > 0) || chosenYear == 'All' ? slingModelURL + '?offSet=' + page + '&yearParam=' + chosenYear : slingModelURL + '?offSet=' + page;
            var $listArticles = $("#listArticlesContainer_" + componentId);
            var $listLoadingIndicator = $(ListId).find('.uscb-loading-circular-indeterminate');
            if ($listLoadingIndicator.length) {                
                $listLoadingIndicator.show();
            }
            var $listLoadingIndicatorIE = $(ListId).find('.uscb-loading-circular-indeterminate-IE');

            $.ajax( {
                url: urlVal,
                data: selectedTagIds.length > 0 ? selectedTagIds : null,
                beforeSen },
                success: function(result) {                                     
                    updateCurrentPage(page, element, componentId);
                    showHidePrevNextButtons(componentId);
                    
                    if (paginationObj.displayAs === 'tiles' || paginationObj.displayAs === 'images') {
                        $('#tileContainer_' + componentId ).html(buildTileItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                    } else if (paginationObj.displayAs === 'experience') {
                    	$('#currentPageSpan_' + componentId ).html(paginationObj.currentPage);
						var source = $('' + result + '');
                        $('#exp_fragments_' + componentId).html(source.find('div#exp_fragments_' + componentId).html());
                        return false;
                    } else if (paginationObj.displayAs === 'attachment') {
                        if (paginationObj.listSource === 'attachment') {
                            $('#listArticlesContainer_' + componentId).html(buildNonAEMAttachmentItems(result.mlist.listItems, paginationObj.currentPage, componentId, paginationObj.openNonAEMAttachmentListNewTab));
                        } else {
                            //its a dam
                            $('#listArticlesContainer_' + componentId).html(buildDAMAttachmentItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                        }
                    } else if (paginationObj.displayAs === 'calendar') {
                        $('#listArticlesContainer_' + componentId).html(buildEventsItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                    } else if (paginationObj.displayAs.indexOf( 'color' ) !== -1) {
                        var newColorCards = buildColorCards( result.mlist.listItems, paginationObj.currentPage, componentId );
                        $('#colorCardContainer_' + componentId ).html( newColorCards );
                    } else if (paginationObj.displayAs === 'cards' || paginationObj.displayAs === 'cardsmall' || paginationObj.displayAs === 'cardslarge' || paginationObj.displayAs === 'cardsdescription') {
                        $('#listArticlesContainer_' + componentId + ' .uscb-list-item-wrapper-cards').html(buildCardItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                    } else {
                        if (paginationObj.listSource === 'attachment') {
                            $('#listArticlesContainer_' + componentId).html(buildNonAEMAttachmentItems(result.mlist.listItems, paginationObj.currentPage, componentId, paginationObj.openNonAEMAttachmentListNewTab));
                        } else if (paginationObj.listSource === 'dam') {
                            $('#listArticlesContainer_' + componentId).html(buildDAMAttachmentItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                        } else if (paginationObj.listSource === 'events') {
                            $('#listArticlesContainer_' + componentId).html(buildEventsItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                        } else if (paginationObj.listSource === 'mixed') {
                            $('#listArticlesContainer_' + componentId + ' .uscb-grid-wrap-container').html(buildMixedItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                        } else {
                            $('#listArticlesContainer_' + componentId).html(buildListItems(result.mlist.listItems, paginationObj.currentPage, componentId));
                        }
                    }
                    resetPaginationControl(page, element, componentId);
                    scrollToSection(ListId.id);
                },
                erro },
                complete: function() {
                    $listLoadingIndicator.hide();
                    $listLoadingIndicatorIE.hide();
                    $listArticles.show();
                }
            } );
        }

        event.preventDefault();
        return false;
    };

  }

    function resetPaginationControl(page, element, componentId) {
    	var paginationObj = _.find(paginations, {
            "id": "" + componentId + ""
        });
        var newStartPageNum = 1;
        if (page - 5 > 0) {
            newStartPageNum = page - 5;
        } else if (page - 4 > 0) {
            newStartPageNum = page - 4;
        } else if (page - 3 > 0) {
            newStartPageNum = page - 3;
        } else if (page - 2 > 0) {
            newStartPageNum = page - 2;
        } else if (page - 1 > 0) {
            newStartPageNum = page - 1;
        }

        if (newStartPageNum != paginationObj.startPageNum) {
            var newPageTarget = newStartPageNum;
            $.each($('.pagenumber_'+ componentId), function(i, el) {
                $(el).find('a').text(newPageTarget).attr('href', '=pageURL' + newPageTarget);
                if (newPageTarget != paginationObj.currentPage) {
                    $(el).attr('id', 'li_' +componentId + "_"+ newPageTarget).removeClass('curpage');
                    $(el).attr('id', 'li_' +componentId + "_"+ newPageTarget).children('a').removeClass('uscb-pagination-active');
                } else {
                    $(el).attr('id', 'li_' +componentId + "_"+ newPageTarget).addClass('curpage');
                    $(el).attr('id', 'li_' +componentId + "_"+ newPageTarget).children('a').addClass('uscb-pagination-active');
                }
                $(el).data('target', newPageTarget);
                if (newPageTarget > paginationObj.totalPages) {
                    $(el).css('display', 'none');
                } else {
                    $(el).css('display', 'flex');
                }
                // set aria label for screen readers
                var ariaLabel = $(el).find('a');
                if (ariaLabel.length) {
                	ariaLabel.attr('aria-label', "page " + newPageTarget);
                }
                newPageTarget++
            });
            paginationObj.startPageNum = newStartPageNum;
        }
        
        setUpMobilePaginationView(componentId);
    }
    
    function setUpMobilePaginationView(componentId) {
    	$('.pagenumber_'+ componentId).addClass('uscb-hide-sm');
        var $currentPage = $('.pagenumber_'+ componentId +'.curpage').removeClass('uscb-hide-sm');
        var mobilePagesLeft = $currentPage.prevAll('li.pagenumber_'+ componentId).not('[style*="display: none;"]').length;
        var mobilePagesRight = $currentPage.nextAll('li.pagenumber_'+ componentId).not('[style*="display: none;"]').length;
        var applyleft = 0;
        var applyright = 0;
        
        if (mobilePagesLeft == 0) {
        	//nothing to the left
        	applyright += 2;
        } else if (mobilePagesLeft == 1) {
        	//only 1 to the left
        	applyright += 1;
        	applyleft += 1;
        } else if (mobilePagesLeft >= 2) {
        	//2 or more to the left
        	applyleft += 2;
        }
        
        if (mobilePagesRight == 0) {
        	//nothing to the right
        	applyleft += 2;
        } else if (mobilePagesRight == 1) {
        	//only 1 to the right
        	applyright += 1;
        	applyleft += 1;
        } else if (mobilePagesRight >= 2) {
        	//2 or more to the left
        	applyright += 2;
        }
        
        var $prevEl = $currentPage;
        for (var i = 0; i < applyleft; i++) {
        	$prevEl = $prevEl.prev('li.pagenumber_'+ componentId);
        	$prevEl.removeClass('uscb-hide-sm');
        }
        
        var $nextEl = $currentPage;
        for (var i = 0; i < applyright; i++) {
        	$nextEl = $nextEl.next('li.pagenumber_'+ componentId);
        	$nextEl.removeClass('uscb-hide-sm');
        }
    }
    
    function buildMixedItems(listItems, currentPage, componentId) {
    	$('#currentPageSpan_' + componentId).html(currentPage);
        var paginationObj = _.find(paginations, {
            'id': '' + componentId + ''
        });
    	var mixedItemHtml = '';
    	var gridClass = "uscb-grid-";
        if (paginationObj && paginationObj.gridCssClass) {
        	gridClass = paginationObj.gridCssClass;
        }
    	
    	for (var i = 0; i < listItems.length; i++) {
    		var listItem = listItems[i];
    		mixedItemHtml += '<div class="list-item-wrapper '+ gridClass +'">';
    		switch (listItem.mixedListType) {
    			case 'calendar':
    				mixedItemHtml += buildCalendarItem(listItem);
    				mixedItemHtml += '</div>';
    				break;
    			case 'dam':
    				mixedItemHtml += buildDAMItem(listItem, paginationObj.showTeaserText);
    				mixedItemHtml += '</div>';
    				break;
    			case 'attachment':
    				mixedItemHtml += buildAttachmentItem(listItem, "false", paginationObj.showTeaserText);
    				mixedItemHtml += '</div>';
    				break;
    			case 'manual':
    				mixedItemHtml += buildCQ5Item(listItem, i, paginationObj.showTeaserText);
    				mixedItemHtml += '</div>';
    				break;
    			default:
    				mixedItemHtml += buildCQ5Item(listItem, i, paginationObj.showTeaserText);
    				mixedItemHtml += '</div>';
    				break;
    		}
    	}
    	return mixedItemHtml;
    }
    
    function buildCardItems(listItems, currentPage, componentId) {
    	$('#currentPageSpan_' + componentId).html(currentPage);
		var cardItemHtml = '';
		for (var i = 0; i < listItems.length; i++) {
			var listItem = listItems[i];
			
			cardItemHtml += buildCardItem(listItem);
		}
		return cardItemHtml;
    }
    
    function buildCardItem(listItem) {
    	var cardItemHtml = '';
    	cardItemHtml += '<a class="uscb-list-item-container uscb-card-link uscb-grid-3 uscb-grid-tbl-4 uscb-grid-mbl-4" onclick="linkClick(this, \'Census List Component\');" tabindex="0"';
    	cardItemHtml += 'href="' + listItem.myHyperlink + '">';
    	cardItemHtml += '<div class="uscb-card uscb-nav-button-container">';
    	cardItemHtml += '<p class="uscb-card-title">';
    	cardItemHtml += listItem.myTitle;
    	cardItemHtml += '</p>';
    	cardItemHtml += '<p class="uscb-card-description">';
    	cardItemHtml += listItem.myDescription;
    	cardItemHtml += '</p>';
    	cardItemHtml += '<i class="uscb-button-default-show uscb-icon-button o-angle-right-circle-2"></i>';
    	cardItemHtml += '<i class="uscb-button-hover-show uscb-icon-button o-angle-right-circle-1"></i>';
    	cardItemHtml += '</div>';
    	return cardItemHtml;
    }
    
    function buildCalendarItem(listItem) {
    	var calendarItemHtml = '';
    	calendarItemHtml += '<div>';
    	calendarItemHtml += '<img style="margin-bottom: 0px;" src="' + listItem.myImageSrc + '" height="12" width="12">';
    	calendarItemHtml += '&nbsp;';
    	calendarItemHtml += '<a onclick="popevent(); linkClick(this, \'Census List Component\'); return false;" href="#" tabindex="0">';
    	calendarItemHtml += listItem.myTitle;
    	calendarItemHtml += '</a>';
    	calendarItemHtml += '<br>';
    	calendarItemHtml += listItem.myDate;
    	calendarItemHtml += '<br>';
    	calendarItemHtml += '</div>';
		
		return calendarItemHtml;
    }
    
    function buildEventsItems(listItems, currentPage, componentId) {
    	$('#currentPageSpan_' + componentId).html(currentPage);
		var eventsItemHtml = '';
		for (var i = 0; i < listItems.length; i++) {
			var listItem = listItems[i];
			
			eventsItemHtml += buildCalendarItem(listItem);
		}
		return eventsItemHtml;
    }
    
    function buildDAMItem(listItem, showTeaserText) {
    	var DAMItemHtml = '';
    	
    	DAMItemHtml += '<div>';
    	DAMItemHtml += '<div class="uscb-margin-TB-5 uscb-list-attachment">';
    	DAMItemHtml += '<span class="uscb-margin-TB-0 uscb-layout-align-start-start">';
    	DAMItemHtml += '<a onclick="linkClick(this, \'Census List Component\');" class="uscb-display-block uscb-padding-R-8 uscb-padding-TB-2 uscb-layout-align-start-center" title="' + listItem.myTitle + '" name="' + listItem.myTitle + '" href="' + listItem.myHyperlink + '" tabindex="0">';
    	DAMItemHtml += '<img src="' + listItem.myImageSrc + '" alt="' + listItem.myImageAlt + '" style="width: 20px; height: 20px">';
    	DAMItemHtml += '</a>';
		
    	DAMItemHtml += '&nbsp;';
		
    	DAMItemHtml += '<span class="uscb-padding-T-2">';
    	DAMItemHtml += '<a onclick="linkClick(this, \'Census List Component\');" class="uscb-text-link" title="' + listItem.myTitle + '" name="' + listItem.myTitle + '" href="' + listItem.myHyperlink + '" tabindex="0">';
    	DAMItemHtml += listItem.myTitle;
    	DAMItemHtml += '</a>';
		
    	DAMItemHtml += '&nbsp;';
		
    	DAMItemHtml += '<span class="uscb-sub-heading-2 uscb-color-primary">';
		
		if (listItem.mySize.length > 0) {
			if (listItem.myImageSrc != '' && listItem.myImageSrc != '/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/external-link.svg') {
				DAMItemHtml += '[' + listItem.mySize + ']';
			} else if (listItem.myImageSrc == '' && listItem.myImageSrc == '/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/external-link.svg') {
				DAMItemHtml += listItem.mySize.length;
			}
		}

		DAMItemHtml += '</span>';
		DAMItemHtml += '</span>';
		DAMItemHtml += '</span>';
		
        if (showTeaserText) {
            DAMItemHtml += '<div class="uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-T-5 uscb-margin-B-20">';
            DAMItemHtml += listItem.myAttachmentDescription;
            DAMItemHtml += '</div>';
        }

		DAMItemHtml += '</div>';
		DAMItemHtml += '</div>';
		
		return DAMItemHtml;
    }
    
    function buildDAMAttachmentItems(listItems, currentPage, componentId) {
    	$('#currentPageSpan_' + componentId).html(currentPage);
		var damAEMAttachmentItemHtml = '';
        var paginationObj = _.find(paginations, {
            'id': '' + componentId + ''
        });

		for (var i = 0; i < listItems.length; i++) {
			var listItem = listItems[i];
			damAEMAttachmentItemHtml += buildDAMItem(listItem, paginationObj.showTeaserText);
		}
		
		return damAEMAttachmentItemHtml;
    }
    
    function buildAttachmentItem(listItem, newTab, showTeaserText) {
    	var attachmentItemHtml = '';
    	
    	var title = listItem.myTitle;
		if (listItem.myExternalLink == true) {
			title = 'This external link , does not imply endorsement of any particular product, company, or content.';
		}
		
		var target = '';
		if ('true' === newTab) {
			target = '_blank';
		}
		
		attachmentItemHtml += '<div>';
		attachmentItemHtml += '<div class="uscb-margin-TB-5 uscb-list-attachment">';
		attachmentItemHtml += '<span class="uscb-margin-TB-0 uscb-layout-align-start-start">';
		attachmentItemHtml += '<a onclick="linkClick(this, \'Census List Component\');" filetrack="' + listItem.filetrack +'" class="uscb-display-block uscb-padding-R-8 uscb-padding-TB-2 uscb-layout-align-start-center" title="' + title + '" name="' + listItem.myTitle + '" href="' + listItem.myHyperlink + '" tabindex="0" target="' + target + '">';
		attachmentItemHtml += '<img src="' + listItem.myImageSrc + '" alt="' + listItem.myImageAlt + '" style="width: 20px; height: 20px">';
		attachmentItemHtml += '</a>';
		attachmentItemHtml += '&nbsp;';
		
		attachmentItemHtml += '<span class="uscb-padding-T-2">';
		attachmentItemHtml += '<a onclick="linkClick(this, \'Census List Component\');" class="uscb-text-link" filetrack="' + listItem.filetrack + '" title="' + listItem.myTitle + '" name="' + listItem.myTitle + '" href="' + listItem.myHyperlink + '" tabindex="0" target="' + target + '">';
		attachmentItemHtml += listItem.myTitle;
		attachmentItemHtml += '</a>';
		
		attachmentItemHtml += '&nbsp;';
		
		attachmentItemHtml += '<span class="uscb-sub-heading-2 uscb-color-primary">';
		
		if (parseInt(listItem.mySize) > 0) {
			if (listItem.myImageSrc != '' && listItem.myImageSrc != '/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/external-link.svg') {
				attachmentItemHtml += '[' + listItem.mySize + ']';
			} else if (listItem.myImageSrc == '' && listItem.myImageSrc == '/etc.clientlibs/census/clientlibs/census-pattern-library/resources/images/external-link.svg') {
				attachmentItemHtml += listItem.mySize.length;
			}
		}
		attachmentItemHtml += '</span>';
		attachmentItemHtml += '</span>';
		attachmentItemHtml += '</span>';
		
        if (showTeaserText) {
            attachmentItemHtml += '<div class="uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-T-5 uscb-margin-B-20">';
            attachmentItemHtml += listItem.myAttachmentDescription;
            attachmentItemHtml += '</div>';
        }

		attachmentItemHtml += '</div>';
		attachmentItemHtml += '</div>';
		
		return attachmentItemHtml;
    }
    
    function buildNonAEMAttachmentItems(listItems, currentPage, componentId, newTab) {
    	$('#currentPageSpan_' + componentId).html(currentPage);
        var paginationObj = _.find(paginations, {
            'id': '' + componentId + ''
        });
		var nonAEMAttachmentItemHtml = '';

		for (var i = 0; i < listItems.length; i++) {
			var listItem = listItems[i];
			nonAEMAttachmentItemHtml += buildAttachmentItem(listItem, newTab, paginationObj.showTeaserText);
		}
		return nonAEMAttachmentItemHtml;
    }
    
    function buildCQ5Item(listItem, i, showTeaserText, gridCssClass) {
    	var cq5ItemHtml = '';    	
    	var resolvedHyperlink = (typeof(listItem.externalizedHyperlink) != 'undefined' && listItem.externalizedHyperlink != null) ? listItem.externalizedHyperlink : listItem.myHyperlink;
        console.log( listItem );
        cq5ItemHtml +=  `<a href="${ vet( resolvedHyperlink ) }" title="' + ${ vet( listItem.myTitle ) } + '" onclick="linkClick(this, 'Census List Component');" class="uscb-list-default-item uscb-list-item ${ vet( gridCssClass ) }">
                            <div class="uscb-default-x-column-container uscb-layout-column">
                                <hr class="uscb-list-hr uscb-list-hr-top ${ i === 0 ? '' : 'uscb-hide' }" />

                                <span class="uscb-tag-label uscb-tag-label uscb-margin-B-20" style="background-color: ${ vet( listItem.tagColor ) }; border: 1px solid ${ vet( listItem.tagBorderColor ) };">${ vet( listItem.tagName ) }</span>

                                <div class="uscb-default-x-column-title uscb-heading-2">${ vet( listItem.myTitle ) }</div>
                                
                                <div class="uscb-author-text-wrapper uscb-default-x-column-date">
                                    <div class="uscb-author-text-wrapper uscb-meta-data-text">${ vet( listItem.myDisplayDate ) }</div>

                                    <div class="uscb-author-text-wrapper uscb-meta-data-text ${ listItem.showAuthor ? '' : 'uscb-hide' }"><b>Author </b> ${ listItem.author }</div>
                                    <div class="uscb-author-text-wrapper uscb-meta-data-text ${ listItem.showDocumentNumber ? '' : 'uscb-hide' }"><b>${ listItem.prefixOptions } </b> ${ listItem.documentNumber }</div>
                                    <div class="uscb-author-text-wrapper uscb-meta-data-text ${ listItem.showPrimaryTopicTag ? '' : 'uscb-hide' }"><b>Primary Topic </b> ${ listItem.primaryTopicTagName }</div>
                                </div>

                                <div class="uscb-default-x-column-content uscb-body-small-01">${ showTeaserText ? vet( listItem.myDescription ) : '' }</div>
                                
                                <hr class="uscb-list-hr" />

                                <div class="uscb-default-x-column-link-icon">
                                    <i class="o-angle-right-circle-1"></i>
                                </div>
                            </div>
                        </a>`;

		return cq5ItemHtml;
    }
    
    function buildListItems(listItems, currentPage, componentId) {        
		$('#currentPageSpan_' + componentId).html(currentPage);
        var paginationObj = _.find(paginations, {
            'id': '' + componentId + ''
        });
        var gridClass = "uscb-grid-";
        if (paginationObj && paginationObj.gridCssClass) {
        	gridClass = paginationObj.gridCssClass;
        }
		
        var showNoTagClass = paginationObj.displayAs == 'default-no-tag' ? 'uscb-default-x-column-list-no-tag' : '';
		var listItemHtml = '<div class="uscb-default-x-column-list uscb-wrap uscb-grid-wrap-container uscb-layout-row ' + showNoTagClass + '">';
		for (var i = 0; i < listItems.length; i++) {
			var listItem = listItems[i];
			listItemHtml += buildCQ5Item(listItem, i, paginationObj.showTeaserText, paginationObj.gridCssClass + " " + gridClass + " " + 'uscb-grid-tbl-12 uscb-grid-mbl-4 list-item-wrapper' );
		}
        listItemHtml += '</div>';
		
		return listItemHtml;
	}

    function buildGalleryItems(galleryItems, currentPage, componentId) {
        $('#currentPageSpan' + (componentId ? ("_" + componentId) : "")).html(currentPage);
        var galleryItemHtml = '';
        
        for (var i = 0; i < galleryItems.length; i++) {
        	var resolvedHyperlink = (typeof(galleryItems[i].externalizedHyperlink) != 'undefined' && galleryItems[i].externalizedHyperlink != null) ? galleryItems[i].externalizedHyperlink : galleryItems[i].myHyperlink;
        	
            galleryItemHtml += '<a href="' + resolvedHyperlink + '" class="uscb-list-item uscb-visual-list">';
            galleryItemHtml += '<div class="uscb-nav-button-container uscb-visual-list-container">';
            galleryItemHtml += '<img src="' + galleryItems[i].myImageSrc + '" alt="' + (galleryItems[i].myDescription || '') + '">';
            galleryItemHtml += '<div class="uscb-visual-list-title">';
            galleryItemHtml += '<p class="uscb-layout-align-vert-flex-start uscb-title-3 uscb-text-nav-button-spacing uscb-margin-TB-5 uscb-padding-L-5 uscb-padding-T-gt-sm-5">' + galleryItems[i].myTitle + '</p>';
            galleryItemHtml += '</div>';
            galleryItemHtml += buildNavigationButton();
            galleryItemHtml += '</div>';
            galleryItemHtml += '</a>';
        }
        
        return galleryItemHtml;
    }


    function buildTileItems( tileItems, currentPage, componentId ) {
        $('#currentPageSpan' + (componentId ? ("_" + componentId) : "")).html(currentPage);
        var paginationObj = _.find( paginations, {
            'id': '' + componentId + ''
        });
		var tileItemHtml = '';
		
		for ( var i = 0; i < tileItems.length; i++ ) {
			var resolvedHyperlink = ( typeof( tileItems[i].externalizedHyperlink ) != 'undefined' && tileItems[i].externalizedHyperlink != null ) ? tileItems[i].externalizedHyperlink : tileItems[i].myHyperlink;
			var tile = tileItems[i];

            tileItemHtml += `<a href="${ vet( resolvedHyperlink ) }" class="uscb-list-tile uscb-card-link-container uscb-layout-column uscb-grid-3 uscb-grid-tbl-6 uscb-grid-mbl-4 uscb-margin-B-40">
                                <div class="uscb-list-tile-image ${ vet( tile.tileImgIsDecorative ) ? 'uscb-decorative-img' : '' }" style="background-image: url('${ vet( tile.myImageSrc ) }')"></div>
                                
                                <div class="uscb-list-tile-content uscb-layout-column">
                                    <div class="uscb-tag-label uscb-margin-B-20" style="background-color: ${ vet( tile.tagColor ) }; border: 1px solid ${ vet( tile.tagBorderColor ) }">${ vet( tile.tagName ) }</div>

                                    <div class="uscb-list-tile-title">${ vet( tile.myTitle ) }</div>

                                    <div class="uscb-list-tile-description uscb-body-large-02">${ vet( paginationObj.showTeaserText ? tile.myDescription : '' ) }</div>

                                    <div class="uscb-card-link-icon">
                                        <i class="o-angle-right-circle-1"></i>
                                    </div>
                                </div>
                            </a>`;
		}
		
		return tileItemHtml;
    }

    function buildColorCards( colorCardData, currentPage, componentId ) {
        $( '#currentPageSpan' + componentId ? "_" + componentId : "" ).html( currentPage );
        var paginationObj = _.find( paginations, {
            'id': '' + componentId + ''
        });
		var colorCardHTML = '';

		for ( var i = 0; i < colorCardData.length; i++ ) {
			var resolvedHyperlink = ( typeof( colorCardData[i].externalizedHyperlink ) != 'undefined' && colorCardData[i].externalizedHyperlink != null ) ? colorCardData[i].externalizedHyperlink : colorCardData[i].myHyperlink;
            var card = colorCardData[i];

            colorCardHTML +=   `<a href="${ resolvedHyperlink }" class="uscb-card-color-container uscb-card-link-container uscb-grid-6 uscb-grid-tbl-6 uscb-grid-mbl-4 uscb-layout-column uscb-margin-B-40">
                                    <hr class="uscb-list-hr uscb-margin-B-20" />
                            
                                    <div class="uscb-tag-label uscb-margin-B-20" style="background-color: ${ vet( card.tagColor ) }; border: 1px solid ${ vet( card.tagBorderColor ) }">${ vet( card.tagName ) }</div>
                            
                                    <div class="uscb-card-color-title uscb-heading-2 uscb-margin-B-25">${ vet( card.myTitle ) }</div>
                            
                                    <div class="uscb-card-color uscb-layout-column" style="background-color: ${ vet( card.tagColor ) }; border: 1px solid ${ vet( card.tagBorderColor ) }"
                                            onclick="linkClick( this, 'Census List Component' );">
                                        <div class="uscb-card-color-icon">
                                            <i class="${ vet( card.iconClass ) }"></i>
                                        </div>
                            
                                        <div class="uscb-card-color-date uscb-body-small-02 uscb-margin-B-25">
                                            ${ vet( card.myDisplayDate ) } &nbsp;
                                        </div>
                            
                                        <div class="uscb-card-color-content uscb-body-small-01">
                                            ${ vet( paginationObj.showTeaserText ? card.myDescription : '' ) }
                                        </div>
                            
                                        <div class="uscb-card-link-icon">
                                            <i class="o-angle-right-circle-1"></i>
                                        </div>
                                    </div>
                                </a>`;
        }

		return colorCardHTML;
    }

  }

    function buildNavigationButton(color, ctaText, cssClass, ctaTextClass) {
        var navBtn = "";

        navBtn += '<div class="' + (cssClass ? cssClass : (ctaText ? 'uscb-text-img-button' : 'uscb-icon-button')) + '">';
        navBtn += (ctaText ? ('<span class="' + (ctaTextClass ? ctaTextClass : '') + '">' + ctaText + '</span>') : '');
        navBtn += '<svg class="ovaltealcircle' + (ctaText ? ' uscb-margin-L-10' : '') + '" viewBox="0 0 64 64" aria-label="read more / go to the page">';			
        navBtn += '<path fill="none" stroke="' + (color ? color : '#008392') + '" stroke-miterlimit="10" stroke-width="2" d="M28 21.002L41 32 28 43.002" stroke-linejoin="miter" stroke-linecap="butt"></path>';			
        navBtn += '<circle cx="32" cy="32" r="30" fill="none" stroke="' + (color ? color : '#008392') + '" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="miter" stroke-linecap="butt"></circle>';
        navBtn += '</svg>';
        navBtn += '</div>';

        return navBtn;
    }


    return {
        initPagination: initPagination,
        gotoPage: gotoPage,
        gotoLastPage: gotoLastPage,
        gotoLastPageKeyDown: gotoLastPageKeyDown,
        gotoFirstPage: gotoFirstPage, 
        gotoPrevPage: gotoPrevPage,
        gotoNextPage: gotoNextPage,
        goToNextPageKeyDown: goToNextPageKeyDown,
        buildTileItems: buildTileItems
    }

})(jQuery, window._);
var CensusListFilter = (function($, _, digitalData) {   
    var censusListFilters = [];
    
    var initCensusListFilter = function(id) {
	    var censusListFilterObj = _.find(censusListFilters, {
	        "id": "" + id + ""
	    });
	    
	    var  displayAs = $('#txtdisplayas_' + id ).val();      
	      
	    if (!censusListFilterObj) {
	    	censusListFilterObj = {            		
	            id: id,
	            displayAs : displayAs
	        }
	    	censusListFilters.push(censusListFilterObj);
	    }
    }
	
	var showSearchFilter = function( event, ListId ){
		event.preventDefault();
		var componentId = ListId.id;		
		var $overlayContent = $('#searchFilterOverlay_' + componentId);
		
		if ($('body').find('.overlay-content-wrapper').length < 1) {			
			$('<div class="overlay-content-wrapper"></div>').prependTo('body');		
			$('body').addClass('noscroll');
			$('.overlay-content-wrapper').fadeIn(2000).addClass('overlay-styles');
			$('.overlay-content-wrapper').append($overlayContent);
			if ($overlayContent.hasClass('uscb-hide-md')) {
				$overlayContent.removeClass('uscb-hide-md');
			}
		}
		
		$('.universalheader').hide();
		$('.uscb-footer').hide();
	}

    var hideSearchFilter = function( event, ListId ) {
        event.preventDefault();
		var componentId = ListId.id;		
		var $overlayContent = $('#searchFilterOverlay_' + componentId);
        $( '#' + componentId ).prepend( $overlayContent );
        $overlayContent.addClass( 'uscb-hide-md' );
		
        $( 'body .overlay-content-wrapper' ).remove();

        $('body').removeClass('noscroll');
        $('.universalheader').show();
		$('.uscb-footer').show();
    }

	var resetSearchFilterForm = function(event, ListId) {
		event.preventDefault();
		var componentId = ListId.id;		
		var $form = $('#search_form_' + componentId);
		if ($form.length) {
			$form.find('#listSearch').val('');
		}

		var baseURL = window.location.href.split('?')[0];
    	window.history.pushState('', '', baseURL);		
		var all_checkboxes = $('.filter_' + componentId);

		for (var i = 0; i < all_checkboxes.length; i++) {
			if ($(all_checkboxes[i]).is(':checked')) {				
				$(all_checkboxes[i]).prop('checked', false);				
			}
		}
		
		$('.uscb-list-filter-group-toggle').find('.filter-dropdown-label').text('');
		$('#search-filter-toggle-button-' + componentId).trigger('click');
	}
    
    var clearAllFilters = function(event, ListId) {
    	event.preventDefault();    	
    	var baseURL = window.location.href.split('?')[0];
    	window.history.pushState('', '', baseURL);
        $( 'body' ).css( 'cursor', 'wait !important' );
		location.reload(true);
    }
    
    var removeFilter = function(event, ListId, tagId) {
    	event.preventDefault();    	
    	var componentId = ListId.id;
    	var paramValue = $.urlParam('tagfilter_' + componentId);    	
    	if (typeof(paramValue) != 'undefined') {
	    	var tagFilters = paramValue.split(',');
	    	var newParam = '?tagfilter_' + componentId + '=';
	    	
	    	for (var i = 0; i < tagFilters.length; i++) {
	    		if (tagFilters[i].trim() != decodeURIComponent(tagId).trim()) {
	    			newParam += tagFilters[i] + ',';
	    		}
	    	}
	    	
	    	newParam = newParam.slice(0, -1);
	    	var baseURL = window.location.href.split('?')[0];
	    	var newURL = baseURL + newParam;
	    	window.history.pushState('', '', newURL);	    	
            $( 'body' ).css( 'cursor', 'wait !important' );
            location.reload(true);
    	}
    }

	var applySearchFilter = function(event, ListId) {	
		var componentId = ListId.id;
		var selectedTagIds = "tagfilter_" + componentId + "=";    	    	
		var all_checkboxes = $('.filter_' + componentId);

		for (var i = 0; i < all_checkboxes.length; i++) {    			
			if ($(all_checkboxes[i]).is(':checked')) {				
				selectedTagIds += $(all_checkboxes[i]).attr('data-target') + ",";				
			}
		}
		
		$searchForm = $('#search_form_' + componentId);	
		$searchBox = $searchForm.find('#listSearch');
		var searchQueryParam = "";

		if ($searchBox.length) {
			var q = $searchBox.val();	
			searchQueryParam = "query=" + q;
		}
		
		selectedTagIds = selectedTagIds.slice(0, -1);
		var baseURL = window.location.href.split('?')[0];
		window.history.pushState('', '', baseURL + '?' + selectedTagIds + '&' + searchQueryParam);
        $( 'body' ).css( 'cursor', 'wait !important' );
		location.reload(true);
	}
    
    var filterResult = function(event, ListId) {	
		var componentId = ListId.id;
		var selectedTagIds = "tagfilter_" + componentId + "=";    	    	
		var all_checkboxes = $('.filter_' + componentId);		
		var viewPortWidth = $(window).width();
		var $element = $(event.target);
		var groupId = $element.attr('data-filter-group-id');
		
		if (viewPortWidth < 768) {			
			if (all_checkboxes.length > 1) {
				var selectedCount = 0;
				for (var i = 0; i < all_checkboxes.length; i++) {    			
					if ($(all_checkboxes[i]).is(':checked') && $(all_checkboxes[i]).attr('data-filter-group-id') == groupId) {				
						selectedCount++;
					}
				}
				
				if (selectedCount > 0) {
					$('.uscb-list-filter-group-toggle_' + componentId + '-' + groupId).find('.filter-dropdown-label').text(selectedCount + ' Selected');
				} else {
					$('.uscb-list-filter-group-toggle_' + componentId + '-' + groupId).find('.filter-dropdown-label').text('');
				}
			}

			return false;
		} else {			
			for (var i = 0; i < all_checkboxes.length; i++) {    			
				if ($(all_checkboxes[i]).is(':checked')) {				
					selectedTagIds += $(all_checkboxes[i]).attr('data-target') + ",";				
				}
			}
			
			selectedTagIds = selectedTagIds.slice(0, -1);
			var baseURL = window.location.href.split('?')[0];
			var searchFilterAnchor = "#searchFilterOverlay_" + componentId;
			window.history.pushState('', '', baseURL + '?' + selectedTagIds + searchFilterAnchor);
            $( 'body' ).css( 'cursor', 'wait !important' );
            location.reload(true);
		}
    }
    
    $.urlParam }

    return {
    	initCensusListFilter: initCensusListFilter,
    	filterResult: filterResult,
    	clearAllFilters: clearAllFilters,
    	removeFilter: removeFilter,
		showSearchFilter: showSearchFilter,
		hideSearchFilter: hideSearchFilter,
		resetSearchFilterForm: resetSearchFilterForm,
		applySearchFilter: applySearchFilter
    }

})(jQuery, window._);
( function() {

	// Toggle for small viewports to show the filters
	var $filterToggle = $( '.uscb-list-filter-toggle' );

	$filterToggle.on( 'click.listFilter', function( e ) {
		e.preventDefault();
		var id = $( this ).attr( 'href' ).substring( 1 );
		var $target = $( '#' + id );
		$target.toggleClass( 'uscb-hide-md' ).toggleClass( 'uscb-hide-sm' );
		// Assuming initial state has one shown and the other hidden
		$( this ).find( '.uscb-list-filter-show').toggleClass( 'uscb-hide');
		$( this ).find( '.uscb-list-filter-hide').toggleClass( 'uscb-hide');
	} );

	// When an input is checked, expose an additional label
	var $filterInputsParent = $( '.uscb-list-filter-group-content' );
	var $filterInputs = $filterInputsParent.find( 'input[type="checkbox"]' );
	var $selectedLabelsParent = $( '.uscb-list-filter-selected' );

	$filterInputs.on( 'change.listFilter', function() {

		// ACCENTURE: This would be a good spot to hook into an ajax request & adjust the URL

		if( this.checked ) {
			//makeLabel( $( this ) );
		} else {
			removeLabel( $( this ) );
		}
	} );

	$selectedLabelsParent.find( '[type="reset"]').on( 'click.listFilter', function( e ) {
		e.preventDefault(); // default sets it back to the way it was loaded (initial checkboxes checked)
		$filterInputs.prop( 'checked', false ); // adjusting so that it clears everything - regardless of initial state
		removeLabel( $filterInputs ); // remove all labels

		// ACCENTURE: In lieu of triggering change on every input (firing lots of ajax requests), recommend sending an ajax request here instead
	} );

	function makeLabel( $forInputs ) {
		$forInputs.each( function() {
			var inputId = $( this ).attr( 'id' );
			var labelDisplay = $filterInputsParent.find( 'label[for="' + inputId + '"]').text(); // Find existing label and grab the display text

			var $newLabel = $( '<label class="uscb-button uscb-primary-button uscb-button-small" />' );
			$newLabel.attr( 'for', inputId );
			$newLabel.text( labelDisplay );

			$selectedLabelsParent.prepend( $newLabel );
		} );

		$selectedLabelsParent.removeClass( 'uscb-hide' );
	}

	function removeLabel( $forInputs ) {
		$forInputs.each( function() {
			var inputId = $( this ).attr( 'id' );
			$selectedLabelsParent.find( 'label[for="' + inputId + '"]' ).remove();
		} );

		if( !$selectedLabelsParent.find( 'label' ).length ) {
			$selectedLabelsParent.addClass( 'uscb-hide' );
		}
	}


	// The dropdowns which expose each filter group's options
	var $filterDropdownToggles = $( '.uscb-list-filter-group-toggle' );
	$filterDropdownToggles.on( 'click.listFilter', dropdownListener );


	// Generic dropdown functions, associating an a's href with a div with a matching id
	function dropdownListener( e ) {
		e.preventDefault();
		openDropdown( $( this ) );
	}

	function openDropdown( $toggle ) {
		var id = $toggle.attr( 'href' ).substring( 1 );
		var $dropdown = $( '#' + id );
		
		$dropdown.removeClass( 'uscb-hide' );
		$toggle.parent().addClass( 'uscb-list-filter-open' );

		$toggle.off( 'click.listFilter' ); // stop listening for a click while its open (body listener will take care of it)
	
		// Let the current event stack finish and then add a listener to the body for on click outside the embed to close it
		setTimeout( function() {
			$( 'body' ).off( 'click.listFilter' ).on( 'click.listFilter', function( e ) {
				var $bodyTarget = $( e.target );
				if( !$bodyTarget.closest( $dropdown ).length && !$bodyTarget.is( $dropdown ) ) {
					closeDropdown( $toggle, $dropdown );
				}

				if( $bodyTarget.is( $filterDropdownToggles ) || $filterDropdownToggles.find( $bodyTarget ).length ) {
					e.preventDefault();
				}
			} );
		}, 0 );
	}

	function closeDropdown( $toggle, $dropdown ){
		$dropdown.addClass( 'uscb-hide' );
		$toggle.parent().removeClass( 'uscb-list-filter-open' );
		$( 'body' ).off( 'click.listFilter' );
		$filterDropdownToggles.off( 'click.listFilter ').on( 'click.listFilter', dropdownListener );
	}
} )();
  // TODO: Rebuild to be able to access individual indicators rather than attempt to affect all on the page at once
(function() {
    'use strict';
    
    document.addEventListener( 'DOMContentLoaded', function() {
        activateIndicators();
    });

      // Custom triggerable event (pagination/filtering)
    document.addEventListener( 'activate-loading-indicators });

  }

    function activateCircular() {
        var circularLoaders = document.getElementsByClassName( 'uscb-loading-circular-indeterminate' );
        circularLoaders = Array.prototype.slice.call( circularLoaders );
        
        circularLoaders.forEac });
    }

    function buildCircular( el ) {
        el.innerHTML =
                '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
                ' width="100%" height="100%" viewBox="0 0 108 108" xml:space="preserve" >' +
                ' <path fill="none" stroke-width="8" stroke-miterlimit="10" endcap="butt" d="M 54,54 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"/>' +
                '</svg>';

          // Detect MS browsers and add the class suffix to display the correct animation
        if ( document.documentMode || !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g) || !!navigator.userAgent.match(/Edge/g) ) {
            el.className = 'uscb-loading-circular-indeterminate-IE';
        }
    }

    function activateLinear() {
        var linearLoaders = document.getElementsByClassName( 'uscb-loading-linear-indeterminate' );
        linearLoaders = Array.prototype.slice.call( linearLoaders );

        linearLoaders.forEac });
    }
})();
var CensusCalendar = ( function() {
	'use strict';
	
	var endPoint = '';
    var showDays = [];
    var selectedDate;
    var PLACEHOLDER_DOW = '%DOW%', PLACEHOLDER_MONTH = '%MONTH%', PLACEHOLDER_DATE = '%DATE%', PLACEHOLDER_YEAR = '%YEAR%';
    var isEditMode = (typeof $.cookie != 'undefined' && $.cookie('wcmmode') == "edit");
    var $eventEles;    
    var today = new Date();	
	today.setHours(0, 0, 0, 0);	
	var firstTime = true;    
	
	function init(nodePath, uniqueId, eventDetailTemplate, selectedDate, viewType, nodeId, calType) {		
		endPoint = nodePath;		
		var calendarViewType = $('#calendar-view-type-' + uniqueId).attr('data-calendarview');		
		var url = endPoint + ".event.json" + location.search;
		
		cleanEventList(uniqueId);
		var events = [];
		
		$.ajax({
            url: url,
            dataType: 'json'
        }).done(function(data) {            
            $('.uscb-loader').addClass('uscb-hide');
            for (var event in data) {
                events.push(data[event]);
            }
            events.sort(function(a, b) {
                var dateA = new Date(a.startDate);
                var dateB = new Date(b.startDate);
                return dateA - dateB;
            });            
            
            if (events.length) {
                buildEvents(uniqueId, events, calendarViewType, eventDetailTemplate, selectedDate, viewType, nodeId, calType);
            }
        }).fail(function(errData){            
            $('#calendar-view-type-' + uniqueId).html('<section class="uscb-toast">' +
                '<div class="uscb-toast-content uscb-padding-20 uscb-padding-R-50">' +
                '<div class="uscb-toast-text uscb-font-md uscb-color-white">No event data found!</div>' +
                '</div>' + 
                '</div>' + 
                '</section>');
            console.log(errData);
        });       
	}    
	
	function buildEvents(uniqueId, events, calendarViewType, eventDetailTemplate, selectedDate, viewType, nodeId, calType) {
		var pageWindow = $(window);
		if (calendarViewType == 'events') {            
            var maxItems = 20;
			loadUpcomingEvents(uniqueId, events, eventDetailTemplate, maxItems);

            var $viewAllEventsBtn = $('#list-view-all-events-' + uniqueId);
            if ($viewAllEventsBtn.length) {
                $viewAllEventsBtn.on('click', function(){
                    maxItems = events.length;
                    var $eventList = $('#data-calendarview-events-list-' + uniqueId);
                    $eventList.html('');                 
                    loadUpcomingEvents(uniqueId, events, eventDetailTemplate, maxItems);
                    $viewAllEventsBtn.hide();
                });
            }

		} else {
			//month view            
			loadCalendarView(uniqueId, events, eventDetailTemplate, selectedDate, viewType, nodeId, calType);
		}		
	}	
	
	function loadUpcomingEvents(uniqueId, events, eventDetailTemplate, maxItems) {
		$('#calendar-list-view-' + uniqueId).show();
		$('#calendar-month-view-' + uniqueId).hide();
        var count = 1;
		var dateFormatting = JSON.parse($('#calendar-view-type-' + uniqueId).attr('data-calendarview-dates'));
		
		$.each(events, function(k, event) {            
			var startDateObj = new Date(event.startDate),
				endDateObj = new Date(event.endDate);
			var startDow = startDateObj.getDay(),
				endDow = endDateObj.getDay();

			var startDate = startDateObj,
				displayStartDay = startDate.getDate(),
				displayStartDow = dateFormatting.dow[startDate.getDay()],
				displayStartMonth = dateFormatting.months[startDate.getMonth()],
				displayStartYear = startDate.getFullYear();		
			var endDate = endDateObj;
			
			var displayDateStr = "";
			if (displayStartDow && displayStartMonth && displayStartDay && displayStartYear) {
				displayDateStr= dateFormatting.format.replace(PLACEHOLDER_DOW, displayStartDow ).replace( PLACEHOLDER_MONTH, displayStartMonth ).replace( PLACEHOLDER_DATE, displayStartDay ).replace( PLACEHOLDER_YEAR, displayStartYear);
			}
			
			startDate.setHours(0, 0, 0, 0);
			endDate.setHours(0, 0, 0, 0);
			
			if (startDate.getTime() != endDate.getTime()) {
				var displayEndDay = endDate.getDate(),
					displayEndDow = dateFormatting.dow[endDate.getDay()],
					displayEndMonth = dateFormatting.months[endDate.getMonth()],
					displayEndYear = endDate.getFullYear();

				if (displayEndMonth && displayEndMonth && displayEndDay && displayEndYear) {
					displayDateStr += ' - <br/>' + dateFormatting.format.replace('%DOW%', displayEndDow).replace('%MONTH%', displayEndMonth).replace('%DATE%', displayEndDay).replace('%YEAR%', displayEndYear);
				}
			}			
			
            if (count > maxItems || startDate < today) {
                return;
            }
			
			var eventDetails = event.allDayEvent.toLowerCase() === "true" ? "" : (event.startTime != '00:00 AM' ? event.startTime : '');			
			var $eventList = $('#data-calendarview-events-list-' + uniqueId);

            //find the last item and get all its events on that date...            
            if (count == maxItems) {                
                var dateEvents = getAllEventsOfDate(event.startDate, events);                
                $.each(dateEvents, function(k, event){
                    var displayDateStr = dateFormatting.format.replace(PLACEHOLDER_DOW, displayStartDow ).replace( PLACEHOLDER_MONTH, displayStartMonth ).replace( PLACEHOLDER_DATE, displayStartDay ).replace( PLACEHOLDER_YEAR, displayStartYear);
            
                    startDate.setHours(0, 0, 0, 0);
                    endDate.setHours(0, 0, 0, 0);
                    
                    if (startDate.getTime() != endDate.getTime()) {
                        var displayEndDay = endDate.getDate(),
                            displayEndDow = dateFormatting.dow[endDate.getDay()],
                            displayEndMonth = dateFormatting.months[endDate.getMonth()],
                            displayEndYear = endDate.getFullYear();

                        displayDateStr += ' - <br/>' + dateFormatting.format.replace('%DOW%', displayEndDow).replace('%MONTH%', displayEndMonth).replace('%DATE%', displayEndDay).replace('%YEAR%', displayEndYear);
                    }
                    
                    printListViewEventItem($eventList, event, eventDetailTemplate, displayDateStr, eventDetails);
                });
            } else {
                printListViewEventItem($eventList, event, eventDetailTemplate, displayDateStr, eventDetails);    			
            }

			count++;
		});

        function printListViewEventItem($eventList, event, eventDetailTemplate, displayDateStr, eventDetails) {
            $eventList.append(
                $('<li/>').addClass('uscb-w-100 list-view-li').attr('item-id', event.nodeId).attr('event-detail-template', eventDetailTemplate).attr('selected-date', event.startDate).append(                    
					$('<a/>').addClass('uscb-layout-row uscb-wrap uscb-layout-align-vert-center uscb-color-primary')
                        .attr('href', 'javascript:void(0)')
                        .append(
                            $('<div/>').addClass('uscb-layout-column uscb-flex-row-md-100 uscb-flex-row-lg-40 uscb-flex-row-gt-lg-30').append(
                                $('<div/>').html(displayDateStr)
                            ),
                            $('<div/>').addClass('uscb-layout-column uscb-flex-row-md-100 uscb-flex-row-lg-60 uscb-flex-row-gt-lg-70').append(
                                  // If no tag exists, the uscb-tag__event fallback style will be applied
								$('<span/>').addClass('uscb-tag-label uscb-tag__event ' + formatCategoryClass( event.categories ) + ' uscb-margin-B-20' ).text( event.categories ),
                                $('<p/>').addClass('uscb-title-3 uscb-color-primary uscb-margin-TB-02').text(event.title.replace(/\uFFFD/g, '')),
                                $('<p/>').addClass('uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-TB-02' ).text( event.startDate + " " + eventDetails)
                            )
                        ),
                    $('<hr/>').addClass('uscb-list-hr uscb-margin-B-20')
                )
            );
        }

        $('.list-view-li').on('click', function() {            
            var eventDetailTemplate = $(this).attr('event-detail-template');
            var selectedDate = $(this).attr('selected-date');
            var nodeId = $(this).attr('item-id');            

            if (eventDetailTemplate !== '') {                    
                window.location.href = eventDetailTemplate + "?selectedDate=" + encodeURIComponent(selectedDate) + "&nodeId=" + encodeURIComponent(nodeId) + "&viewType=detail&calType=week-view&fm=calendar";
            }
        });

        function getAllEventsOfDate(eventDate, events) {
            var dateEvents = [];
            $.each(events, function(k, event) {
                if (event.startDate == eventDate) {
                    dateEvents.push(event);
                }
            });

            return dateEvents;
        }
		
		$('.uscb-filter-list').keydown(function(keyEvent){
           	var which = keyEvent.which;
            var target = keyEvent.target;
       		var prevRow = $(target).closest('li').prev();
            var nextRow = $(target).closest('li').next();

            if(which === 40){
                keyEvent.preventDefault();
                nextRow.find('a.uscb-layout-row').focus();
            } else if(which === 38){
				keyEvent.preventDefault();
                prevRow.find('a.uscb-layout-row').focus();
            }
		});

		if (count == 0) {
			$eventList.append(
				$('<li/>').addClass( 'uscb-w-100' ).append(
					$('<hr/>').addClass( 'uscb-list-item-separator' ),
					$('<p/>').html( noEventsMsg ),
					$('<hr/>').addClass( 'uscb-list-item-separator' )
				)
			);
		}
	}
	}

	function loadCalendarView(uniqueId, events, eventDetailTemplate, selectedDate, viewType, nodeId, calType) {
		resetTitle(viewType == 'detail' ? 'Event Details' : 'Events');
		$('#heading').html('<p class="uscb-title-3 uscb-color-primary uscb-margin-TB-02">No Events Found</p>');
		hideEventDetailView();
		firstTime = true;
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = today.getMonth() + 1;
        var dd = today.getDate();
        mm = mm < 10 ? '0' + mm : mm;
        dd = dd < 10 ? '0' + dd : dd;
        var formattedToday = mm + "/" + dd + "/" + yyyy;
        showDays = [];

        events.forEach(function(event) {
            var shortDate = event.startDate;
            var splittedDate = shortDate.split('/')
            var mm = splittedDate[0];
            var dd = splittedDate[1];
            var yyyy = splittedDate[2];
            mm = mm < 10 ? '0' + mm : mm;
            dd = dd < 10 ? '0' + dd : dd;
            shortDate = mm + '/' + dd + '/' + yyyy;  
            showDays.push(shortDate);            
        });        
        
        showDays.sort(function(a,b) {          
            a = new Date(a);
            b = new Date(b);            
            return a - b;    	   
    	});
    
        var showDaysFinal = [];        
        showDays.forEach(function(d, index, object){
        	var dObj = new Date(d);
        	var formattedTodayObj = new Date(formattedToday);
        	if (dObj >= formattedTodayObj) {                
        		showDaysFinal.push(d);
        	}
        });
        
        var splittedDate = showDaysFinal[0].split('/');
        var defaultDateMonth = splittedDate[0].length < 2 ? '0' + splittedDate[0] : splittedDate[0];
        var defaultDateDate = splittedDate[1].length < 2 ? '0' + splittedDate[1] : splittedDate[1];
        var defaultDateYear = splittedDate[2];
        var nearestAvailableDateStr = defaultDateMonth + '/' + defaultDateDate + '/' + defaultDateYear;        
        var nearestAvailableDate = new Date(defaultDateYear, defaultDateMonth-1, defaultDateDate);        
        var $datepicker = $('#calendarview-' + uniqueId);
        showDays.push(formattedToday);
        
        if (selectedDate != '') {
        	nearestAvailableDate = selectedDate;
        } else {            
            selectedDate = nearestAvailableDateStr;
        }        
        
        $datepicker.datepicker({
            defaultDate: nearestAvailableDate,
            beforeShowDay: function(date){                
                if ($.inArray($.datepicker.formatDate('mm/dd/yy',date), showDays) > -1) {                    
                    return [true, "", ""]
                } else {
                	return [false, "ui-state-disabled uscb-no-event-date", "No Event"];
                }
            },            
            minDate: -30,//show past 30 days from today
            dateFormat: 'mm/dd/yy',
            onSelect: function(dateData, $eventEle) {
                displayCalendarEvent(dateData, $eventEle, uniqueId, events, eventDetailTemplate, selectedDate, viewType, nodeId, calType);
            }
        });
        
        $datepicker.find('a.ui-state-active').trigger('click');  
        firstTime = false;
        dayTripper(uniqueId);
	}

    function printEventItems($eventList, event, eventDetailTemplate, dateData, eventDetails, firstItem) {
		if (firstItem) {
			$eventList.append(
				$('<li/>').addClass('uscb-list-item').attr('item-id', event.nodeId).attr('event-detail-template', eventDetailTemplate).attr('selected-date', dateData)
				.append($('<a/>').addClass('uscb-layout-row uscb-wrap uscb-layout-align-vert-center uscb-color-primary uscb-cal-link-list-item').attr('href', 'javascript:void(0)').attr('tabindex', 0)
					.attr('aria-label', event.title.replace( /\uFFFD/g, ''))
					.append($('<div/>').addClass('uscb-list-item-container').append(
						$('<hr/>').addClass('uscb-list-item-separator'),
                          // If no tag exists, the uscb-tag__event fallback style will be applied
                        $('<span/>').addClass('uscb-tag-label uscb-tag__event ' + formatCategoryClass( event.categories ) + ' uscb-margin-B-20' ).text( event.categories ),
						$('<p/>').addClass('uscb-title-3 uscb-color-primary uscb-margin-TB-02').text(event.title.replace( /\uFFFD/g, '')),
						$('<div/>').addClass('uscb-layout-row uscb-layout-align-vert-center uscb-date-list-item').append(
							$('<span/>').addClass('uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-TB-02').text(event.startDate + " | " + eventDetails),
							$('<span/>').addClass('uscb-cal-list-item-icon').append($('<i/>').addClass('o-angle-right-circle-1'))
						),
						$('<hr/>').addClass('uscb-list-item-separator')
				))
			));
		} else {
			$eventList.append(
				$('<li/>').addClass('uscb-list-item').attr('item-id', event.nodeId).attr('event-detail-template', eventDetailTemplate).attr('selected-date', dateData)
				.append($('<a/>').addClass('uscb-layout-row uscb-wrap uscb-layout-align-vert-center uscb-color-primary uscb-cal-link-list-item').attr('href', 'javascript:void(0)').attr('tabindex', 0)
					.attr('aria-label', event.title.replace( /\uFFFD/g, ''))
					.append($('<div/>').addClass('uscb-list-item-container').append(
                          // If no tag exists, the uscb-tag__event fallback style will be applied
                        $('<span/>').addClass('uscb-tag-label uscb-tag__event ' + formatCategoryClass( event.categories ) + ' uscb-margin-B-20' ).text( event.categories ),
						$('<p/>').addClass('uscb-title-3 uscb-color-primary uscb-margin-TB-02').text(event.title.replace( /\uFFFD/g, '')),
						$('<div/>').addClass('uscb-layout-row uscb-layout-align-vert-center uscb-date-list-item').append(
							$('<span/>').addClass('uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-TB-02').text(event.startDate + " | " + eventDetails),
							$('<span/>').addClass('uscb-cal-list-item-icon').append($('<i/>').addClass('o-angle-right-circle-1'))
						),
						$('<hr/>').addClass('uscb-list-item-separator')
				))
			));
		}
    }
	
	function displayCalendarEvent(dateData, $eventEle, uniqueId, events, eventDetailTemplate, selectedDate, viewType, nodeId, calType) {		
		$eventEles = $('#calendar-view-type' + uniqueId).attr('data-calendarview');		
		var $eventList = $('#data-calendarview-events-' + uniqueId);
		var $ulElement = $('#data-calendarview-events-list');
		$('#heading').html('');
		if ($ulElement.length) {
			$ulElement.html('');
		} else {
            //it could be on a non-event detail page...so fetch the container with the unique id
            $ulElement = $('#data-calendarview-events-list-' + uniqueId);
            if ($ulElement.length) {
                $ulElement.html('');
            }
        }
		cleanEventList(uniqueId);
		var dateTitle = getDateHeadingStr(dateData);
        var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        $eventList.append('<h3 class="uscb-h3 selectedDateHeading" tabindex="0" aria-label="Selected date">' + '<span class="uscb-calendar-selected-label">Selected Event:</span>' + dateTitle + '</h3>');             
        
        if (showDays.includes(dateData)) {
			var itemFirstTime = true;
            
              // Sort events by start date/time
            events.sort( ( a, b ) => new Date( a.startDate + ' ' + a.startTime ).getTime() - new Date( b.startDate + ' ' + b.startTime ).getTime() );
            
        	events.forEach(function(event, index) {
        		var eventNodeId = event.nodeId;
                var eventStartTime = event.startTime;            
                var eventStartDate = event.startDate;
                var splittedDate = eventStartDate.split('/');
                var mm = splittedDate[0];
                var dd = splittedDate[1];
                var yyyy = splittedDate[2];
                mm = mm < 10 ? '0' + mm : mm;
                dd = dd < 10 ? '0' + dd : dd;
                eventStartDate = mm + '/' + dd + '/' + yyyy;
                var eventDetails = event.allDayEvent.toLowerCase() === "true" ? "" : (event.startTime !== '00:00 AM' ? event.startTime : '');
                
                if (viewType != 'detail') {
	                if (dateData == eventStartDate) {
						resetTitle('Events');

	                	if (selectedDate != '') {
							hideEventDetailView();		
	                		if ($ulElement.length) {
	                			$('.selectedDateHeading').html('');
	                			$('#heading').html('<h3 class="uscb-h3 selectedDateHeading" tabindex="0" aria-label="Selected date">' + '<span class="uscb-calendar-selected-label">Selected Date:</span>' + dateTitle + '</h3><hr class="uscb-list-item-separator"/>');
	                			if ($('#formattedSelectedDate').length) {
	                				$('#formattedSelectedDate').html(dateTitle);
	                			}
	                			$ulElement.append(
	                					$('<li/>').addClass('uscb-list-item').attr('item-id', event.nodeId).attr('event-detail-template', eventDetailTemplate).attr('selected-date', dateData)
	                        			.append($('<a/>').addClass('uscb-layout-row uscb-wrap uscb-layout-align-vert-center uscb-color-primary uscb-cal-link-list-item').attr('href', 'javascript:void(0)').attr('tabindex', 0)
	                        				.attr('aria-label', event.title.replace( /\uFFFD/g, ''))
	                					.append($('<div/>').addClass('uscb-list-item-container').append(
                                              // If no tag exists, the uscb-tag__event fallback style will be applied
                                            $('<span/>').addClass('uscb-tag-label uscb-tag__event ' + formatCategoryClass( event.categories ) + ' uscb-margin-B-20' ).text( event.categories ),
	                						$('<p/>').addClass('uscb-title-3 uscb-color-primary uscb-margin-TB-02').text(event.title.replace( /\uFFFD/g, '')),
											$('<div/>').addClass('uscb-layout-row uscb-layout-align-vert-center uscb-date-list-item').append(
												$('<span/>').addClass('uscb-sub-heading-2 uscb-color-secondary-1 uscb-line-height-20-18 uscb-margin-TB-02').text(event.startDate + " " + eventDetails),
												$('<span/>').addClass('uscb-cal-list-item-icon').append($('<i/>').addClass('o-angle-right-circle-1'))
											),
											$('<hr/>').addClass('uscb-list-item-separator')										
	                				))
	            	            ));                                
	                		} else {	                			
                                printEventItems($eventList, event, eventDetailTemplate, dateData, eventDetails, itemFirstTime);
								itemFirstTime = false;                              
                            }
	                	} else {	                		
                            printEventItems($eventList, event, eventDetailTemplate, dateData, eventDetails, itemFirstTime);
							itemFirstTime = false;
	                	}
	                	
	                	if (eventDetailTemplate !== '') {	                		
	                		if (firstTime === false) {
                                //Do not add analytics here                                
	                			//$eventList.html('');                                
	                			//window.location.href = eventDetailTemplate + "?selectedDate=" + encodeURIComponent(dateData) + "&viewType=list&calType=" + encodeURIComponent(calType);
	                			//console.log('This is datepicker dates click event...');
	                		}
	                	}
	                	//set up the event ditail trigger point
	                	eventDetailTrigger(event, calType);
	                } else if (index === events.length - 1 && $ulElement.length && $ulElement[0].childNodes.length === 0) {
						resetTitle('Events');
						hideEventDetailView();
						$('#heading').html('<p class="uscb-title-3 uscb-color-primary uscb-margin-TB-02">No Events Found</p>');
					}
                } else if (viewType == 'detail') {
                	if (dateData == eventStartDate) {
						resetTitle('Event Details');
						hideEventDetailView(false);

                		if ($('#formattedSelectedDate').length) {
            				$('#formattedSelectedDate').html(dateTitle);
            			}
                		if (firstTime == false) {                			
                			$eventList.html('');                            
                			window.location.href = eventDetailTemplate + "?selectedDate=" + encodeURIComponent(dateData) + "&viewType=list&calType=" + encodeURIComponent(calType) + "&fm=calendar";
                		} else {                			
                			if (nodeId == eventNodeId) {
	            				var title = typeof(event.title) != 'undefined' ? event.title.replace(/\uFFFD/g, '') : 'No Title';
                                var categories = typeof(event.categories) != 'undefined' ? event.categories : 'No Categories';
                                var formattedDateTime = buildFormattedDateTime(event);
								var formattedShortDate = getDateHeadingStr(dateData);

	            				$('#calendar-view-title').attr({'aria-label': title, 'tabindex': '0'}).html(title);
								$('#calendar-view-date-time-top').attr({'aria-label': formattedDateTime, 'tabindex': '0'}).html(formattedShortDate);
                                $('#calendar-view-date-time').attr({'aria-label': formattedDateTime, 'tabindex': '0'}).html(formattedDateTime);
                                $('.uscb-tag-label').attr({'aria-label': categories, 'tabindex': '0'}).html(categories);
	            				$('#calendar-view-body').html(buildEventDetailInfo(event));
                			}
                		}                		
                	} else if (index === events.length - 1 && firstTime == false) {
						$eventList.html('');                            
						window.location.href = eventDetailTemplate + "?selectedDate=" + encodeURIComponent(dateData) + "&viewType=list&calType=" + encodeURIComponent(calType) + "&fm=calendar";
					}
                }                 
            });//end foreach...loop

            //for both detail and list make sure to have weekview            
            if (viewType == 'detail' || viewType == 'list' && dateData == selectedDate) {
                if (showDays.includes(dateData)) {
                    var urlParam = getURLParameter('calType');
                    //default to month-view if not set
                    var calType = urlParam != null ? urlParam : 'month-view';
                    var $calTypeMonth = $('#calendar-month-view-' + uniqueId);
                    var $calTypeWeek = $('#calendar-week-view');
                    var $calTypeDropdown = $('#slct-cal-type');
                    var $monthViewTitle = $('.month-view-title');
                    var $weekViewTitle = $('.week-view-title');                    

                    if ($('#formattedSelectedDateWeekView').length) {
                        $('#formattedSelectedDateWeekView').html(dateTitle);                        
                    }
                    
                    if (calType === '' || calType === 'month-view') {
                        $calTypeMonth.show();
                        $monthViewTitle.show();
                        $calTypeWeek.hide();
                        $weekViewTitle.hide();
                    } else {
                        //assumed week-view
                        $calTypeWeek.show();
                        $weekViewTitle.show();
                        $calTypeMonth.hide();
                        $monthViewTitle.hide();
                    }

                    $calTypeDropdown.val(calType);
                    
                    $calTypeDropdown.on('change', function(){
                        handleShowHideCalType($calTypeMonth, $calTypeWeek, $(this).val(), $monthViewTitle, $weekViewTitle);                        
                    });
                    
                    var weekDayEventCtr = [];
                    var weekDayEventDate = [];
                    var weekDayEventNodeId = [];
                    
                    var timestamp = Date.parse(selectedDate);
                    var selectedDateObj = new Date(timestamp);
                    
                    events.forEach(function(event) {
                        var eventNodeId = event.nodeId;
                        var eventStartTime = event.startTime;            
                        var eventStartDate = event.startDate;
                        var splittedDate = eventStartDate.split('/');
                        var mm = splittedDate[0];
                        var dd = splittedDate[1];
                        var yyyy = splittedDate[2];
                        mm = mm < 10 ? '0' + mm : mm;
                        dd = dd < 10 ? '0' + dd : dd;
                        eventStartDate = mm + '/' + dd + '/' + yyyy;                        
                        var eventStartDateObj = new Date(eventStartDate);
                        var firstDateOfWeek = selectedDateObj.getFirstDateOfWeek();
                        var lastDateOfWeek = selectedDateObj.getLastDateOfWeek();                        

                        if (eventStartDateObj >= firstDateOfWeek && eventStartDateObj <= lastDateOfWeek) {
                            var weekDay = weekDays[eventStartDateObj.getDay()];
                            if (weekDay != 'Sun' && weekDay != 'Sat') {                                
                                weekDayEventCtr.push(weekDay);
                                weekDayEventDate.push(eventStartDate);
                                weekDayEventNodeId.push(eventNodeId);
                            }
                        }
                    });//end forEach...loop
                    
                    //to remove duplicates put it in a Set
                    var uniqueWeekDayEventDate = [...new Set(weekDayEventDate)];
                    var uniqueWeekDayEventNodeId = [...new Set(weekDayEventNodeId)];
                    
                    for (var i = 0; i < uniqueWeekDayEventDate.length; i++) {                        
                        var weekDateObj = new Date(uniqueWeekDayEventDate[i]);
                        var weekDay = weekDays[weekDateObj.getDay()];                        
                        var eventCount = getEventCountFor(weekDay, weekDayEventCtr);                        
                        
                        if (eventCount > 0) {
                            var splittedDate = uniqueWeekDayEventDate[i].split('/');                            
                            var mm = splittedDate[0];
                            var dd = splittedDate[1];
                            var yyyy = splittedDate[2];
                            var monthName = months[parseInt(mm) - 1];
                            var eventCountStr = eventCount + (eventCount > 1 ? ' events' : ' event');                            
                            var pagePath = eventDetailTemplate + "?selectedDate=" + encodeURIComponent(uniqueWeekDayEventDate[i]) + "&nodeId=" + encodeURIComponent(uniqueWeekDayEventNodeId[i]) + "&viewType=list" + "&calType=" + encodeURIComponent(calType) + "&fm=calendar";                            
                            var bgClass = dateData == uniqueWeekDayEventDate[i] ? 'weekday-current-selection' : '';

                            $('#calendar-week-view-section').append('<div style="padding: 0.5rem;" class="' + bgClass + ' week-view-list-item uscb-layout-gt-sm-row uscb-layout-column-sm uscb-padding-05em-0 uscb-layout-align-sm-start-start uscb-layout-align-gt-sm-center-center uscb-border-bottom-inactive">' + 
                                '<a href="' + pagePath + '" style="width: 100%;">' +
                                '<div class="uscb-layout-row">' + 
                                    '<div class="uscb-flex-row-gt-sm-90 week-view-content" style="width: 100%;">' + 
                                    '<h3 class="uscb-bold-text">' + weekDay + ' ' + monthName + ' ' + parseInt(dd) + ', ' + yyyy + '</h3>' +
                                    '<h5 class="uscb-bold-text">' + eventCountStr + '</h5>' + 
                                '</div>' +
                                '<div class="uscb-flex uscb-layout-column uscb-layout-align-flex-end">' + 
                                    '<div class="uscb-icon-button">' + 
									'<i class="o-angle-right-circle-1"></i>' +
                                    '</div>' + 
                                '</div>' + 
                            '</div>' + 
                            '</a>' + 
                            '</div>');
                        }
                    }//end for...loop
                }
            }    
        } else {        	
        	if (selectedDate != '') {
        		if ($('#calendarEventDetail').length) {        			
        			$('#calendarEventDetail').append(
    	        		$('<li/>').addClass('uscb-list-item').attr('item-id', event.nodeId)
    	        			.append($('<a/>').addClass('uscb-layout-row uscb-wrap uscb-layout-align-vert-center uscb-color-primary').attr('href', 'javascript:void(0)').attr('tabindex', 0)
    	        					.attr('aria-label', 'There are no events on ' + dateTitle)
    						.append($('<div/>').addClass('uscb-list-item-container').append(
    							$('<p/>').addClass('uscb-title-3 uscb-color-primary uscb-margin-TB-02' ).text('There are no events on ' + dateTitle),
    							$('<hr/>').addClass('uscb-list-item-separator')    							
    					)))
    	            );
        		}
        	}
        	
        	$eventList.append(
        		$('<li/>').addClass('uscb-list-item').attr('item-id', event.nodeId)
        			.append($('<a/>').addClass('uscb-layout-row uscb-wrap uscb-layout-align-vert-center uscb-color-primary').attr('href', 'javascript:void(0)').attr('tabindex', 0)
        					.attr('aria-label', 'There are no events on ' + dateTitle)
					.append($('<div/>').addClass('uscb-list-item-container').append(
						$('<p/>').addClass('uscb-title-3 uscb-color-primary uscb-margin-TB-02' ).text('There are no events on ' + dateTitle),
						$('<hr/>').addClass('uscb-list-item-separator')
				)))
            );
        }
	}//end function displayCalendarEvent

    function handleShowHideCalType($calTypeMonth, $calTypeWeek, selectedOption, $monthViewTitle, $weekViewTitle) {
        var calTypeParam = getURLParameter('calType');        
        if (typeof(calTypeParam) != null) {            
            insertURLParameter('calType', selectedOption);
        } else {            
            insertURLParameter('calType', selectedOption);        
        }

        if (selectedOption === '' || selectedOption === 'month-view') {
            $calTypeMonth.show();
            $monthViewTitle.show();
            $calTypeWeek.hide();
            $weekViewTitle.hide();
        } else {
            //assumed week-view
            $calTypeWeek.show();
            $weekViewTitle.show();
            $calTypeMonth.hide();
            $monthViewTitle.hide();
        }
    }

    function insertURLParameter(key, value) {
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);

        // kvp looks like ['key1=value1', 'key2=value2', ...]
        var kvp = document.location.search.substr(1).split('&');
        let i = 0;

        for(; i < kvp.length; i++) {
            if (kvp[i].startsWith(key + '=')) {
                let pair = kvp[i].split('=');
                pair[1] = value;
                kvp[i] = pair.join('=');
                break;
            }
        }

        if (i >= kvp.length) {
            kvp[kvp.length] = [key,value].join('=');
        }

        // can return this or...
        let params = kvp.join('&');    

        //reload page
        document.location.search = params;
    }

  }

    function getURLParameter(name) {
        var paramValue = null;
        if (name=(new RegExp('[?&]' + encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) {            
            paramValue = decodeURIComponent(name[1]);
        }

        return paramValue;
    }

    function getEventCountFor(weekDay, weekDayEventCtr) {
        var eventCtr = 0;
        for (var i = 0; i < weekDayEventCtr.length; i++) {
            if (weekDay === weekDayEventCtr[i]) {
                eventCtr++;
            }
        }

        return eventCtr;
    }

    Date.prototype.getFirstDateOfWeek = function() {
        return (new Date(this.setDate(this.getDate() - this.getDay())));
    }

    Date.prototype.getLastDateOfWeek = function() {
        return (new Date(this.setDate(this.getDate() - this.getDay() + 6)));
    }
	
	function eventDetailTrigger(event, calType) {		
		var btn = $('li[item-id="' + event.nodeId + '"]')[0];		
		if (typeof(btn) != 'undefined') {
			btn.onclick = function() {								
				var eventDetailTemplate = $(btn).attr('event-detail-template');
				var selectedDate = $(btn).attr('selected-date');
				var nodeId = $(btn).attr('item-id');

				if (eventDetailTemplate !== '') {                    
					window.location.href = eventDetailTemplate + "?selectedDate=" + encodeURIComponent(selectedDate) + "&nodeId=" + encodeURIComponent(nodeId) + "&viewType=detail&calType=" + encodeURIComponent(calType) + "&fm=calendar";
				}
			};
		}
	}

	function buildFormattedShortDate(event) {
		var timestamp = Date.parse(event.startDate);
        var dateObject = new Date(timestamp);
        var formattedStartDate = dateObject.toDateString();
        var formattedDateTime = formattedStartDate;

		return formattedDateTime;
	}

	function getDateHeadingStr(dateData) {
		var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dateObject = new Date(dateData);        
        var yyyy = dateObject.getFullYear();
        var weekDay = weekDays[dateObject.getDay()];        
        var monthName = months[dateObject.getMonth()];        

        return weekDay + ' — ' + monthName + ' ' + dateObject.getDate() + ', ' + yyyy;  
	}

    function buildFormattedDateTime(event) {        
        var timestamp = Date.parse(event.startDate);
        var dateObject = new Date(timestamp);
        var formattedStartDate = dateObject.toDateString();
        var formattedDateTime = formattedStartDate;
        
        if (event.allDayEvent.toLowerCase() != 'true' && event && event.startTime !== '00:00 AM' && event.startTime !== event.endTime) {
            formattedDateTime += " " + event.startTime + " - " + event.endTime + " | US/Eastern";
        }

        return formattedDateTime;
    }
    
	}
	
	function buildEventDetailInfo(event) {
        var eventDetailInfo = '';
		if (event && event.description != '' && event.description.length && typeof(event.description) != 'undefined') {
			eventDetailInfo = '<h3 class="uscb-h3 uscb-event-detail-description" aria-label="Description">Description</h3><p class="uscb-body-text">' + replaceStringValue(event.description, "\"\"", "\"") + '</p>';
		} else {
			eventDetailInfo = '<h3 class="uscb-h3 uscb-event-detail-description" aria-label="Description">Description</h3><p class="uscb-body-text">No description.</p>';
		}

        if (event && event.location && event.location.length) {
            eventDetailInfo += '<h3 class="uscb-h3" aria-label="Location">Location</h3>';
            //Adding location detail
            if (event && event.location && event.street && event.city && event.stateOrProvince && event.zipOrPostalCode && event.country &&
                event.location.length && event.street.length && event.city.length && event.stateOrProvince.length && event.zipOrPostalCode.length && event.country.length) {
                eventDetailInfo += '<p class="uscb-body-text">' + replaceStringValue(event.location, "\"\"", "\"") + ' | <span class="uscb-body-text">' + 
                event.street + ' ' + event.city + ' ' + event.stateOrProvince + ' ' + event.zipOrPostalCode + ' ' + event.country + '</span></p>';
            } else {
                eventDetailInfo += '<p class="uscb-body-text">' + replaceStringValue(event.location, "\"\"", "\"") + '<p>';
            }
        }

        //email
        if (event && event.email && event.email.length) {
            eventDetailInfo += '<h3 class="uscb-h3" aria-label="Email">Email</h3><p class="uscb-body-text">' + replaceStringValue(event.email, "\"\"", "\"") + '</p>';
        }

        //phone
        if (event && event.phone && event.phone.length) {
            eventDetailInfo += '<h3 class="uscb-h3" aria-label="Phone">Phone</h3><p class="uscb-body-text">' + replaceStringValue(event.phone, "\"\"", "\"") + '</p>';
        }

		return eventDetailInfo;
	}
	
	function buildStartEndTime(event) {
		if (event && !(event.allDayEvent.toLowerCase() == 'true' || event.allDayEvent.toLowerCase() == 'TRUE')) {
			return ' '+event.startTime + ' - ' + event.endTime;
		}
		return '';
	}
	
	function buildLocation(event) {
		if (event && event.location && event.location.length) {
			return '<span class="uscb-bold">Location: </span><span>'+event.location+'</span><br/><br/>';
		}
		return '';
	}
	
	function buildLocationDetails(event) {
		if (event && event.location && event.street && event.city && event.state && event.zipcode && event.country &&
				event.location.length && event.street.length && event.city.length && event.state.length && event.zipcode.length && event.country.length) {
			return '<hr/><p class="uscb-bold">Location Details</p><p class="uscb-bold">'+event.location+'</p>' +
				'<p>'+event.street+'</p><p>'+event.city+' '+event.state+' '+event.zipcode+' '+event.country;
		}
		return '';
	}
	
	/////508 SECTION/////
	function dayTripper(uniqueId) {
	    setTimeout(function () {
	    	//First get the exact date picker
	    	var $datePicker = $('#calendarview-' + uniqueId);
	    	var today = $datePicker.find('.ui-datepicker-today' + uniqueId);	    	

	    	if (!today) {
	    		today = $('.ui-state-active')[0] || $('.ui-state-default')[0];
	    	}
	    	
	    	$(".main-" + uniqueId).attr('id','dp-container');
	    	$(".ui-datepicker-current").hide();

	    	datePickHandler(uniqueId);
	    }, 0);
	}
	
	function datePickHandler(uniqueId) {
		var activeDate;		
		updateHeaderElements(uniqueId);
		var $datePicker = $('#calendarview-' + uniqueId);
		var container = $datePicker.find('#ui-datepicker-div');
		
		$datePicker.find('.ui-datepicker-inline').on('keydown', function(keyVent) {
		    var which = keyVent.which;		    
		    var target = keyVent.target;
		    var dateCurrent = getCurrentDate(container);

		    if (!dateCurrent) {		    	
		    	dateCurrent = $datePicker.find('a.ui-state-default')[0];
		    	setHighlightState(dateCurrent, container);
		    }

		    if (which === 9 && keyVent.shiftKey) { //Shift + Tab		    	
		    	var activeDates = $datePicker.find('.ui-datepicker-calendar').find('a.ui-state-default');
		    	var minActiveDateVal = getMinActiveDateVal(activeDates);
		    	if ($(target).hasClass('ui-state-default')) {
		    		var targetDate = $(target).html();
		    		var currentFocusDate = parseInt(targetDate) - 1;
		    		if (currentFocusDate < minActiveDateVal) {		    			
		    			$datePicker.find('a.ui-datepicker-prev').trigger('click');
		    		}
		    	}		    	
		    } else if (which === 9) {//Tab		    	
		    	var activeDates = $datePicker.find('.ui-datepicker-calendar').find('a.ui-state-default');
		    	var maxActiveDateVal = getMaxActiveDateVal(activeDates);
		    	if ($(target).hasClass('ui-state-default')) {
		    		var targetDate = $(target).html();
		    		var currentFocusDate = parseInt(targetDate) + 1;
		    		if (currentFocusDate > maxActiveDateVal) {		    			
		    			$datePicker.find('a.ui-datepicker-next').trigger('click');
		    		}
		    	}	    	
		    } else if (which === 27) {// ESC key		    	
		    	$('#data-calendarview-events-' + uniqueId + ' .uscb-h3').focus();		    	
		    } else if (which === 37) { // LEFT arrow key
		    	keyVent.preventDefault();		    	
		    	var activeDates = $datePicker.find('.ui-datepicker-calendar').find('a.ui-state-default');
		    	var minActiveDateVal = getMinActiveDateVal(activeDates);
		    	if ($(target).hasClass('ui-state-default')) {
		    		var targetDate = $(target).html();
		    		var currentFocusDate = parseInt(targetDate) - 1;		    		
		    		if (currentFocusDate < minActiveDateVal) {		    			
		    			$datePicker.find('a.ui-datepicker-prev').trigger('click');
		    		} else {		    			
		    			var prevElement = getPrevActiveDateElement(activeDates, currentFocusDate);		    			
		    			if (prevElement != null) {
		    				$(prevElement).focus();
		    			} else {
		    				//if the max date is not reached, grab the immediate next active date
		    				if (currentFocusDate > minActiveDateVal) {		    					
		    					prevElement = getImmediatePrevActiveDate(activeDates, currentFocusDate);		    					
		    					if (prevElement != null) {
		    						$(prevElement).focus();
		    					}
		    				}
		    			}
		    		}
		    	}
		    } else if (which === 39) { // RIGHT arrow key
		    	keyVent.preventDefault();		    	
		    	var activeDates = $datePicker.find('.ui-datepicker-calendar').find('a.ui-state-default');
		    	var maxActiveDateVal = getMaxActiveDateVal(activeDates);
		    	if ($(target).hasClass('ui-state-default')) {
		    		var targetDate = $(target).html();
		    		var currentFocusDate = parseInt(targetDate) + 1;		    		
		    		if (currentFocusDate > maxActiveDateVal) {		    			
		    			$datePicker.find('a.ui-datepicker-next').trigger('click');
		    		} else {		    			
		    			var nextElement = getNextActiveDateElement(activeDates, currentFocusDate);		    			
		    			if (nextElement != null) {
		    				$(nextElement).focus();
		    			} else {
		    				//if the max date is not reached, grab the immediate next active date
		    				if (currentFocusDate < maxActiveDateVal) {		    					
		    					nextElement = getImmediateNextActiveDate(activeDates, currentFocusDate);		    					
		    					if (nextElement != null) {
		    						$(nextElement).focus();
		    					}
		    				}
		    			}
		    		}
		    	}
		    } else if (which === 13) { // ENTER
		    	if ($(target).hasClass('ui-state-default')) {
		    		$(target).trigger('click');		    		
		    		$('#data-calendarview-events-' + uniqueId + ' .uscb-h3').focus();
		    	} else if ($(target).hasClass('ui-datepicker-prev')) {
		    		handlePrevClicks();
		    	} else if ($(target).hasClass('ui-datepicker-next')) {
		    		handleNextClicks();
		    	}
		    } else if (which === 38) { // UP arrow key
		    	keyVent.preventDefault();                
		    	var activeDates = $datePicker.find('.ui-datepicker-calendar').find('a.ui-state-default');
                var minActiveDateVal = getMinActiveDateVal(activeDates);
                if ($(target).hasClass('ui-state-default')) {
                    var targetDate = $(target).html();
                    var currentFocusDate = parseInt(targetDate) - 7;                    
                    if (currentFocusDate < minActiveDateVal) {                        
                    	$datePicker.find('a.ui-datepicker-prev').trigger('click');
                    } else {                        
                        var prevElement = getPrevActiveDateElement(activeDates, currentFocusDate);                      
                        if (prevElement != null) {
                            $(prevElement).focus();
                        } else {
                            //if the max date is not reached, grab the immediate next active date
                            if (currentFocusDate > minActiveDateVal) {                              
                                prevElement = getImmediatePrevActiveDate(activeDates, currentFocusDate);                                
                                if (prevElement != null) {
                                    $(prevElement).focus();
                                }
                            }
                        }
                    }
                }
            } else if (which === 40) { // DOWN arrow key
            	keyVent.preventDefault();                
            	var activeDates = $datePicker.find('.ui-datepicker-calendar').find('a.ui-state-default');
                var maxActiveDateVal = getMaxActiveDateVal(activeDates);
                if ($(target).hasClass('ui-state-default')) {
                    var targetDate = $(target).html();
                    var currentFocusDate = parseInt(targetDate) + 7;                    
                    if (currentFocusDate > maxActiveDateVal) {                        
                    	$datePicker.find('a.ui-datepicker-next').trigger('click');
                    } else {                        
                        var nextElement = getNextActiveDateElement(activeDates, currentFocusDate);                      
                        if (nextElement != null) {
                            $(nextElement).focus();
                        } else {
                            //if the max date is not reached, grab the immediate next active date
                            if (currentFocusDate < maxActiveDateVal) {                              
                                nextElement = getImmediateNextActiveDate(activeDates, currentFocusDate);                                
                                if (nextElement != null) {
                                    $(nextElement).focus();
                                }
                            }
                        }
                    }
                }
            }
		  });
	}
	
	function getPrevActiveDateElement(activeDates, currentFocusDate) {
		var prevActiveDate = null;
		if (activeDates.length) {
			activeDates.each(function(index, element){
				var dateVal = $(element).html();				
				if (parseInt(currentFocusDate) == parseInt(dateVal)) {					
					prevActiveDate = element;
				}
			});
		}
		
		return prevActiveDate;
	}
	
	function getNextActiveDateElement(activeDates, currentFocusDate) {
		var nextActiveDate = null;
		if (activeDates.length) {
			activeDates.each(function(index, element){
				var dateVal = $(element).html();				
				if (parseInt(currentFocusDate) == parseInt(dateVal)) {					
					nextActiveDate = element;
				}
			});
		}
		
		return nextActiveDate;
	}
	
	function getMinActiveDateVal(activeDates) {
		var min = 0;
		if (activeDates.length) {
			min = $(activeDates[0]).html();
		}
		
		return parseInt(min);
	}
	
	function getImmediatePrevActiveDate(activeDates, currentFocusDate) {
		var found = false;
		var immediatePrev = null;
		if (activeDates.length) {
			activeDates.each(function(index, element){
				var dateVal = $(element).html();
				if (parseInt(currentFocusDate) > parseInt(dateVal)) {
					immediatePrev = element;
				}
			});
		}
		
		return immediatePrev;
	}
	
	function getImmediateNextActiveDate(activeDates, currentFocusDate) {
		var found = false;
		var immediateNext = null;
		if (activeDates.length) {
			activeDates.each(function(index, element){
				var dateVal = $(element).html();
				if (parseInt(currentFocusDate) < parseInt(dateVal) && !found) {
					immediateNext = element;
					found = true;
				} 
			});
		}
		
		return immediateNext;
	}
	
	function getMaxActiveDateVal(activeDates) {
		var max = 0;
		if (activeDates.length) {
    		activeDates.each(function(index, element){    			
    			max = $(element).html();
    		});
    	}
		
		return parseInt(max);
	}
	
	function updateHeaderElements(uniqueId) {		
		var $datePicker = $('#calendarview-' + uniqueId);
		var context = $datePicker.find('#ui-datepicker-div'); 
		if (!context) {
			return;
		}
		
		var prev = $datePicker.find('a.ui-datepicker-prev');		
		var next = $datePicker.find('a.ui-datepicker-next');		
		
		next.attr('href', 'javascript:void(0)');
		next.attr('role', 'button');
		next.attr('tabindex', 0);
		next.attr('id', uniqueId);
		next.removeAttr('title');
		
		prev.attr('href', 'javascript:void(0)');
		prev.attr('role', 'button');
		prev.attr('tabindex', 0);
		prev.attr('id', uniqueId);
		prev.removeAttr('title');
		
		appendOffscreenMonthText(next, uniqueId);
		appendOffscreenMonthText(prev, uniqueId);

		$(next).on('click', handleNextClicks);
		$(prev).on('click', handlePrevClicks);

		monthDayYearText(uniqueId);
	}
	
	function monthDayYearText(uniqueId) {
		var $datePicker = $('#calendarview-' + uniqueId);		
		var cleanUps = $datePicker.find('.amaze-date');		
		
		$(cleanUps).
		});
		
		var datePickDiv = $datePicker.find('#ui-datepicker-div');
		if (!datePickDiv) {
			return;
		}		
		
		var dates = $datePicker.find('a.ui-state-default');
	  
		$(dates).attr('role', 'button').on('keydo
		});
	    
		$(dates).each(function (index, date) {
			var currentRow = $(date).closest('tr'),
	        	currentTds = $('td', currentRow),
	        	currentIndex = $.inArray(date.parentNode, currentTds),
	        	headThs = $('thead tr th', datePickDiv),
	        	dayIndex = headThs[currentIndex],
	        	daySpan = $('span', dayIndex)[0],	        	
	        	monthName = $datePicker.find('.ui-datepicker-month').html(),	        	
	        	year = $datePicker.find('.ui-datepicker-year').html(),
	        	number = date.innerHTML;

			if (!daySpan || !monthName || !number || !year) {
				return;
			}

			var dateText = date.innerHTML + ' ' + monthName + ' ' + year + ' ' + daySpan.title;
			date.setAttribute('aria-label', dateText);			
		});
	}
	
	function handleNextClicks() {
		var uniqueId = $(this).attr('id');
		var $datePicker = $('#calendarview-' + uniqueId);
	  	setTimeout(function () {
	    	updateHeaderElements(uniqueId);
	    	prepHighlightState(uniqueId);	    	
	    	$datePicker.find('.ui-datepicker-next').focus();	    	
	    	$datePicker.find('.ui-datepicker-current').hide();
	  	}, 0);
	}

	function handlePrevClicks() {
		var uniqueId = $(this).attr('id');
		var $datePicker = $('#calendarview-' + uniqueId);
	  	setTimeout(function () {
	    	updateHeaderElements(uniqueId);
	    	prepHighlightState(uniqueId);	    	
	    	$datePicker.find('.ui-datepicker-prev').focus();	    	
	    	$datePicker.find('.ui-datepicker-current').hide();
	  	}, 0);
	}
	
	function prepHighlightState(uniqueId) {
		var highlight;		
		var $datePicker = $('#calendarview-' + uniqueId);
		var cage = $datePicker.find('#ui-datepicker-div');
		highlight = $('.ui-state-highlight', cage)[0] || $('.ui-state-default', cage)[0];		
		if (highlight && cage) {
			setHighlightState(highlight, cage);
		}
	}

	function setHighlightState(newHighlight, container) {
		var prevHighlight = getCurrentDate(container);
		$(prevHighlight).removeClass('ui-state-highlight');
	}
	}
	
	function appendOffscreenMonthText(button, uniqueId) {
		var buttonText;
		var isNext = $(button).hasClass('ui-datepicker-next');
		var months = [
		    'january', 'february',
		    'march', 'april',
		    'may', 'june', 'july',
		    'august', 'september',
		    'october',
		    'november', 'december'
		];
		var $datePicker = $('#calendarview-' + uniqueId);		
		var currentMonth = $datePicker.find('.ui-datepicker-title .ui-datepicker-month').text().toLowerCase();
		var monthIndex = $.inArray(currentMonth.toLowerCase(), months);		
		var currentYear = $datePicker.find('.ui-datepicker-title .ui-datepicker-year').text().toLowerCase();
		var adjacentIndex = (isNext) ? monthIndex + 1 : monthIndex - 1;

		if (isNext && currentMonth === 'december') {
		    currentYear = parseInt(currentYear, 10) + 1;
		    adjacentIndex = 0;
		} else if (!isNext && currentMonth === 'january') {
		    currentYear = parseInt(currentYear, 10) - 1;
		    adjacentIndex = months.length - 1;
		}

		buttonText = (isNext)
		                ? 'Next Month, ' + firstToCap(months[adjacentIndex]) + ' ' + currentYear
		                : 'Previous Month, ' + firstToCap(months[adjacentIndex]) + ' ' + currentYear;

		$(button).find('.ui-icon').html(buttonText);
	}
	
	function firstToCap(s) {
		if (typeof(s) != 'undefined') {
			return s.charAt(0).toUpperCase() + s.slice(1);
		} else {
			return "";
		}
	}
	
	function cleanEventList(uniqueId) {
		var $eventList = $('#data-calendarview-events-' + uniqueId);		
		$eventList.html('');
	}
	function hideEventDetailView(isHide = true) {
		//remove the share this component
		if (isHide) {
			$('#eventDetailDateTimeWrapper').hide();
			$('#eventDetailTagLabelWrapper').hide();
			$('#eventDetailTitleWrapper').hide();
			$('#eventDetailDateStringWrapper').hide();
			$('#eventDetailSocialShareWrapper').hide();
		} else {
			$('#eventDetailDateTimeWrapper').show();
			$('#eventDetailTagLabelWrapper').show();
			$('#eventDetailTitleWrapper').show();
			$('#eventDetailDateStringWrapper').show();
			$('#eventDetailSocialShareWrapper').show();
		}
	}
	}
	
	return {
        init : init
    }
})(jQuery);
(function ($) {    
    $.fn.characterCounter = function (settings) {    	
        var parameters = $.extend({
        	charsLimitDisplayId: 'charsLimitSpan',
        	characterLimit: 140
        }, settings);        
        
        if (parameters.charsLimitDisplayId != "" && parameters.characterLimit != "") {
        	var initTextareaCharCount = parameters.characterLimit;
        	if ($(this).val().length > 0) {
        		initTextareaCharCount -= $(this).val().length;
        		$('#' + parameters.charsLimitDisplayId).text(initTextareaCharCount + ' characters remaining');
        		handleTextAreaColor(initTextareaCharCount);
        	}
	        
        	$(this).on('keyup', function (e) {
        		var length = $(this).val().length;
        		length = parameters.characterLimit - length;        		
        		var textDisplay = parameters.characterLimit > length ? length + ' characters remaining' : '';
	            $('#' + parameters.charsLimitDisplayId).text(textDisplay);
	            handleTextAreaColor(length);
	        });	        
        }
        
        function handleTextAreaColor(charLength) {
        	if (charLength < 10) {
        		$('#' + parameters.charsLimitDisplayId).css('color', 'red');
        	} else {
        		$('#' + parameters.charsLimitDisplayId).css('color', '#4b636e;');
        	}
    	}
        
        return this;
    };
}(jQuery));
( function( $ ){
	'use strict';

	var ONE_DAY = 1000 * 60 * 60 * 24;
	var BREAKPOINT = 768;
	
	var CACHED_EVENT_DATA = 'dynamicCachedEvent';
	var LINK_EVENT_ID_DATA = 'dynamiceventLinkId';
	var DATE_DATA = 'dynamiceventJSDate';
	var DISPLAY_DATE_DATA = 'dynamicevent-dates';

	var PLACEHOLDER_DOW = '%DOW%',
		PLACEHOLDER_MONTH = '%MONTH%',
		PLACEHOLDER_DATE = '%DATE%',
		PLACEHOLDER_YEAR = '%YEAR%';

	var isEditMode = (typeof $.cookie != 'undefined' && $.cookie('wcmmode') == "edit");
	
	var $eventEles, $calViews = $();
	var events = [];

	var today = new Date();	
	today.setHours( 0, 0, 0, 0 );

	$(document).ready(function() {
		$eventEles = $( '[data-dynamicevent]' );

		if (!$eventEles.length) { 
			return; 
		} // only continue if there are events

		extractEvent();
		buildEvent();

	} );
	
	function convertToShortDate(dateStr) {	    
		var date = dateStr.split("T");		
		return date[0].slice(1);
	}

	/* Load the page in normal or mobile mode */
	function buildEvent() {
		var pageWindow = $( window );
		
		loadDetailView( $(this) );
	}
	
	function loadDetailView( $eventEle ) {
		
		var eventDetails = $eventEle.data( CACHED_EVENT_DATA ),
			$event = $( '[data-dynamicevent]' ),
			//noEventsMsg = $eventEle.find( '[data-calendarview-error]' ).html(),
			dateFormatting = $eventEle.data( 'dynamicevent-dates' ),
			count = 0;
		
		var startDow = eventDetails.start.getDay(),
			endDow = eventDetails.end.getDay();

		var startDate = eventDetails.start,
			displayStartDay = startDate.getDate(),
			displayStartDow = dateFormatting.dow[startDate.getDay()],
			displayStartMonth = dateFormatting.months[startDate.getMonth()],
			displayStartYear = startDate.getFullYear();

		var displayDateStr = dateFormatting.format.replace( PLACEHOLDER_DOW, displayStartDow ).replace( PLACEHOLDER_MONTH, displayStartMonth ).replace( PLACEHOLDER_DATE, displayStartDay ).replace( PLACEHOLDER_YEAR, displayStartYear );
			
		var endDate = eventDetails.end;

		startDate.setHours( 0, 0, 0, 0 ); // set to 0 for comparison
		endDate.setHours( 0, 0, 0, 0 ); // set to 0 for comparison
		if( startDate.getTime() != endDate.getTime() ) {

			var displayEndDay = endDate.getDate(),
				displayEndDow = dateFormatting.dow[endDate.getDay()],
				displayEndMonth = dateFormatting.months[endDate.getMonth()],
				displayEndYear = endDate.getFullYear();

			displayDateStr += ' - <br />' + dateFormatting.format.replace( '%DOW%', displayEndDow ).replace( '%MONTH%', displayEndMonth ).replace( '%DATE%', displayEndDay ).replace( '%YEAR%', displayEndYear );
		}

		$event.find( '[data-dynamicevent-title]' ).text( eventDetails.title.replace( /\uFFFD/g, '' ) );
		$event.find( '[data-dynamicevent-date]' ).html( displayDateStr );
		$event.find( '[data-dynamicevent-title]' ).text( eventDetails.details );
	}
	
	function returnEventURL( linkId ) {
		var year = "2021";
		var month = "01";
		var day = "19";
		var currentPage = window.location.href.replace(".html", "");
		var datePage = currentPage + "/" + year + "/" + month + "/" + day;
		var theURL = datePage + "/" + linkId + ".html";

		return theURL;
	}
	
	function extractEvent() {		
		var CALENDARWIZ_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		// Single date regular expression: Saturday, (Dec)ember (10), (2011)
		var SINGLE_REGEXP = /[A-Z]{3,9}, ([A-Z]{3})[A-Z]{0,6} ([0-9]{1,2}), ([0-9]{4})(.*)/i;
		// Range of dates regular expression: Saturday, (Dec)ember (10)[, (2011)] to Sunday, (Dec)ember (11), (2011)
		var RANGE_REGEXP = /[A-Z]{3,9}, ([A-Z]{3})[A-Z]{0,6} ([0-9]{1,2})(?:, ([0-9]{4}))? to [A-Z]{3,9}, ([A-Z]{3})[A-Z]{0,6} ([0-9]{1,2}), ([0-9]{4})(.*)/i;
		// HH:MM regular expression: 10:00 or 8:30
		var TIME_REGEX = /(^|\s)(1[0-2]|0?[1-9]):([0-5]?[0-9])/;

		$eventEles.each( function() {
			//var events = [];

			$( this ).find( '[data-dynamicevent-calendarwiz]' ).find( '.cwuceeventtitle' ).each( function() {
				var titleCell = $( this ),
					title = $.trim( titleCell.text() ),
					onClick = titleCell.children( 'a' ).attr( 'onclick' ),
					dateCell = titleCell.parent( 'tr' ).children( 'td' ),
					dateText = $.trim( dateCell.text() ),
					range = dateText.match( RANGE_REGEXP ),
					single, start, end, details;
				
				if( range ) {
					start = {
						month: $.inArray( range[1], CALENDARWIZ_MONTHS ),
						day: range[2],
						year: range[3] || range[6]
					};
					end = {
						month: $.inArray( range[4], CALENDARWIZ_MONTHS ),
						day: range[5],
						year: range[6]
					};
					details = $.trim( range[7] );
				} else {
					single = dateText.match( SINGLE_REGEXP );
					if( single ) {
						start = end = {
							month: $.inArray( single[1], CALENDARWIZ_MONTHS ),
							day: single[2],
							year: single[3]
						};
						details = $.trim( single[4] );
					}
				}

				if ( start && end ) {
					if( details.search( TIME_REGEX ) == -1 ) {
						details = '';
					} else {
						title = title.replace( details, '' ); //remove time, location details
					}

					var startDate = new Date( start.year, start.month, start.day ),
						endDate = new Date( end.year, end.month, end.day );

					events.push( {
						title: title,
						start: startDate,
						end: endDate,
						details: details,
						onClick: onClick
					} );
				}
			} );			

			$( this ).data( CACHED_EVENT_DATA, events );
		} );
	}
	
	function getAuthorableDataAttributes( $eventEle ) {
		var errors = [],
			attr = $eventEle.data( DISPLAY_DATE_DATA ),

			// Default values if it's malformed
			validDow = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
			validMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			validFormat = '%DOW%, %MONTH% %DATE%, %YEAR%';

		if( typeof attr == 'object' ) {

			// Validate the day of week array
			if( typeof attr.dow == 'object' ) {
				if( attr.dow.length > 7 ) {
					errors.push( '<strong>Error!</strong> You have provided too many names for the days of the week. There must be exactly 7, starting with Sunday. Default values will be used until this is corrected.');
				} else if( attr.dow.length < 7 ) {
					errors.push( '<strong>Error!</strong> You have provided too few names for the days of the week. There must be exactly 7, starting with Sunday. Default values will be used until this is corrected.');
				} else {
					validDow = attr.dow;
				}
			} else {
				errors.push( '<strong>Error!</strong> The array for the names of the days of the week is malformed. Please check that all quotes are paired correctly, there are commas between words, and that the days of the week array begins with <code>[</code> and ends with <code>]</code>. Default values will be used until this is corrected.' );
			}

			// Validate the months array
			if( typeof attr.months == 'object' ) {
				if( attr.months.length > 12 ) {
					errors.push( '<strong>Error!</strong> You have provided too many names for the months. There must be exactly 12, starting with January. Default values will be used until this is corrected.');
				} else if( attr.months.length < 12 ) {
					errors.push( '<strong>Error!</strong> You have provided too few names for the months. There must be exactly 12, starting with January. Default values will be used until this is corrected.');
				} else {
					validMonths = attr.months;
				}
			} else {
				errors.push( '<strong>Error!</strong> The array for the names of the months is malformed. Please check that all quotes are paired correctly, there are commas between words, and that the month array begins with <code>[</code> and ends with <code>]</code>. Default values will be used until this is corrected.' );
			}

			validFormat = attr.format;
		} else {
			errors.push( '<strong>Error!</strong> One of the Advanced Language Attributes is malformed. Please check that all quotes are paired correctly, there are commas between words, and that the day and month arrays begin with <code>[</code> and end with <code>]</code>. Default values will be used until this is corrected.' );
		}

		if( errors.length && isEditMode) {
			// Show error messages 
			var $errors = $();
			for( var i = 0; i < errors.length; i++ ) {
				$errors = $errors.add( $( '<p/>' ).html( errors[i] ) );
			}

			$eventEle.prepend( $errors.wrapAll( $( '<div />' ) ).parent().addClass( 'alert alert-danger calendarview-errors' ) );

			console.error( '[calendarview] advanced language attribute(s) are malformed', attr ); // eslint-disable-line no-console
		} else {
			$eventEle.find( '.calendarview-errors' ).remove();
		}

		return { 
			dow: validDow,
			months: validMonths,
			format: validFormat
		};
	}
} )( jQuery );
(function() {
    'use strict';
    /* calculate title and description height for mutli featured page component so everything lines up*/
    var $threefeatures = $( '.threefeatures' );
    $threefeatures.each( function( idx, eC ) {
    	var $titles = $( eC ).find( '.uscb-three-feature-item-title' );
        var sharedTitleHeight = 0;
        $titles.each( function( index, el ) {
        	var $self = $(el);
        	var descriptionHeight = $self.innerHeight();
        	if (descriptionHeight > sharedTitleHeight) {
        		sharedTitleHeight = descriptionHeight;
        	}
        });
        
        if (sharedTitleHeight > 0) {
        	$titles.each( function( index, el ) {
        		el.style.height = sharedTitleHeight + 'px';
        	});
        }
    	
        var $descriptions = $( eC ).find( '.uscb-three-feature-item-description' );
        var sharedDescriptionHeight = 0;
        $descriptions.each( function( index, el ) {
        	var $self = $(el);
        	var descriptionHeight = $self.innerHeight();
        	if (descriptionHeight > sharedDescriptionHeight) {
        		sharedDescriptionHeight = descriptionHeight;
        	}
        });
        
        if (sharedDescriptionHeight > 0) {
        	$descriptions.each( function( index, el ) {
        		el.style.height = sharedDescriptionHeight + 'px';
        	});
        }
    });
})();

$(document).ready(function () {
	
    var $mobileNav = $('.iconnavigation .uscb-icon-nav-select');

    $mobileNav.click(function(e) {
    	var $self = $(this);
        var $dropdown = $self.find('ul');
        if ( $dropdown[0] ) {
        	if ( $dropdown[0].style.display === 'none' ) {
            	$dropdown[0].style.display = 'block';
        	} else {
            	$dropdown[0].style.display = 'none';
        	}
        }
        
        var $icon = $self.find('.uscb-icon-nav-dropdown-icon');
        if ( $icon.length > 0 ) {
        	$icon.toggleClass('o-angle-down-1');
        	$icon.toggleClass('o-angle-up-1');
        }
    });

    
    $(window).click(function(e){
    	var $self = $(e.target);
        if ( $(e.target).closest( '.uscb-icon-nav-select' )[0] !== undefined ) {
            //do nothing...
        } else {
            var $dropdown = $mobileNav.find('ul');
            if ( $dropdown[0] ) {
                if ( $dropdown[0].style.display === 'block' ) {
                    $dropdown[0].style.display = 'none';
                }
            }
            
            var $icon = $self.find('.uscb-icon-nav-dropdown-icon');
            if ( $icon.length > 0 ) {
            	$icon.toggleClass('o-angle-down-1');
            	$icon.toggleClass('o-angle-up-1');
            }
        }
    });
});

var CensusFacetedFiltering = (function($, _) {
    var init = function() {
        $('.top-level-facet-group').click(function(event){
			var $target = $(event.target);

			if ($target.is('.third-level-facet-group-wrapper') || $target.is('.third-level-facet-label') || $target.is('.third-level-arrow')) {				
				var topLevelFacetGroup = $target.closest('.top-level-facet-group');
				var secondLevelFacetGroup = $target.closest('.second-level-facet-group');
				var secondLevelFacetWrapper = $target.closest('.second-level-facet-wrapper');				
				var secondLevelFacetGroupWrapper = $(secondLevelFacetWrapper).find('.second-level-facet-group-wrapper').first();

				if (secondLevelFacetGroupWrapper.length) {
                    var secondLevelFacetLabel = $(secondLevelFacetGroupWrapper).find('span').first();
					var secondLevelFacetArrowWrapper = $(secondLevelFacetGroupWrapper).find('span.second-level-facet-right-arrow-wrapper');

					$(topLevelFacetGroup).find('.top-level-facet-group-wrapper').addClass('uscb-hide');					
					
					if (secondLevelFacetLabel.length) {
						$(secondLevelFacetLabel).removeClass('selected-second-level-facet-label');						
						$(secondLevelFacetLabel).addClass('current-top-third-level-facet-label');						
						$(secondLevelFacetGroup).addClass('back-to-second-level');

						if ($(secondLevelFacetGroup).hasClass('selected-second-level-facet-group')) {
                            var thirdLevelFacetGroup = $target.closest('.third-level-facet-group');

							$(secondLevelFacetGroup).removeClass('selected-second-level-facet-group');							
							
							if (thirdLevelFacetGroup.length) {
                                var thirdLevelFacetLabel = $(thirdLevelFacetGroup).find('.third-level-facet-label');
                                var navArrow = $(thirdLevelFacetGroup).find('.third-level-facet-right-arrow-wrapper');
                                var parentElem = $target.closest('.secondSectionContent');
								var thirdSectionContent = parentElem.find('.thirdSectionContent');                                
                                var thirdLevelFacetGroups = $(parentElem).find('.third-level-facet-group');
                                var selectedThirdLevelFacetGroup = $target.closest('.third-level-facet-group');

								$(thirdLevelFacetGroup).addClass('third-level-facet-group-expanded');
								$(thirdLevelFacetGroup).addClass('selected-third-level-facet-group');								
								$(thirdLevelFacetLabel).addClass('selected-third-level-facet-label');								
								$(navArrow).addClass('uscb-hide');								
								$(thirdSectionContent).removeClass('uscb-hide');								
								
								if (selectedThirdLevelFacetGroup.length) {
									$(selectedThirdLevelFacetGroup).addClass('expanded-third-level-facet');
								}

								$.each(thirdLevelFacetGroups, function(key, value){
									if (!$(value).hasClass('expanded-third-level-facet')) {
										$(value).addClass('uscb-hide');										
									}
								});
							}
						}
					}

					if (secondLevelFacetArrowWrapper.length) {
						var navigationArrow = $(secondLevelFacetArrowWrapper).find('.second-level-arrow');

						$(secondLevelFacetArrowWrapper).removeClass('uscb-hide');
						$(secondLevelFacetArrowWrapper).removeClass('second-level-facet-right-arrow-wrapper');
						$(secondLevelFacetArrowWrapper).addClass('current-top-level-facet-left-arrow-wrapper');						
						$(navigationArrow).removeClass('o-navigation-right-1');
						$(navigationArrow).addClass('o-navigation-left-1');
					}
				}				
			} else if ($target.is('.second-level-facet-group-wrapper') || $target.is('.second-level-facet-label') || ($target.is('.second-level-arrow')) || ($target.is('.current-top-third-level-facet-label'))) {
				var secondLevelFacetGroup = $target.closest('.second-level-facet-group');

				if ($(secondLevelFacetGroup).hasClass('back-to-second-level')) {					
					var topLevelFacetGroup = $target.closest('.top-level-facet-group');
                    var secondLevelFacetGroup = $target.closest('.second-level-facet-group');
                    var secondLevelFacetWrapper = $target.closest('.second-level-facet-wrapper');
                    var secondLevelFacetGroupWrapper = $(secondLevelFacetWrapper).find('.second-level-facet-group-wrapper').first();
                    var secondLevelFacetLabel = $(secondLevelFacetGroupWrapper).find('span').first();
                    var secondLevelFacetArrowWrapper = $(secondLevelFacetGroupWrapper).find('span.current-top-level-facet-left-arrow-wrapper');
                    var parentElem = $target.closest('.topSectionContent');
					var secondSectionContent = $(parentElem).find('.secondSectionContent');
					var thirdLevelFacetGroups = $(secondSectionContent).find('.third-level-facet-group');
                    var thirdSectionContents = $(secondSectionContent).find('.thirdSectionContent');

					$(topLevelFacetGroup).find('.top-level-facet-group-wrapper').removeClass('uscb-hide');
					$(secondLevelFacetGroup).addClass('selected-second-level-facet-group');					
					$(secondLevelFacetLabel).addClass('selected-second-level-facet-label');
					$(secondLevelFacetLabel).removeClass('current-top-third-level-facet-label');
					$(secondLevelFacetGroup).removeClass('back-to-second-level');
					
					if (secondLevelFacetArrowWrapper.length) {
						var navigationArrow = $(secondLevelFacetArrowWrapper).find('.second-level-arrow');

						$(secondLevelFacetArrowWrapper).addClass('uscb-hide');
						$(secondLevelFacetArrowWrapper).addClass('second-level-facet-right-arrow-wrapper');
						$(secondLevelFacetArrowWrapper).removeClass('current-top-level-facet-left-arrow-wrapper');						
						$(navigationArrow).addClass('o-navigation-right-1');
						$(navigationArrow).removeClass('o-navigation-left-1');
                    }					

					$.each(thirdLevelFacetGroups, function(key, value){
						if ($(value).hasClass('third-level-facet-group-expanded')) {
                            var thirdLevelFacetLabel = $(value).find('.selected-third-level-facet-label');

							$(value).removeClass('third-level-facet-group-expanded');
							$(value).removeClass('selected-third-level-facet-group');
							$(value).removeClass('expanded-third-level-facet');							
							$(thirdLevelFacetLabel).removeClass('selected-third-level-facet-label');
							$(value).find('.third-level-facet-right-arrow-wrapper').removeClass('uscb-hide');
						}
						
						$(value).removeClass('uscb-hide');						
					});

					
					$.each(thirdSectionContents, function(key, value){
						$(value).addClass('uscb-hide');
					});
				} else {					
					var selectedFacetGroup = $target.closest('.second-level-facet-group');
                    var secondFacetGroupLabel = $(selectedFacetGroup).find('.second-level-facet-label');
                    var secondLevelFacetGroups = $('.second-level-facet-group');

					$(selectedFacetGroup).addClass('second-level-facet-group-expanded');
					$(selectedFacetGroup).addClass('selected-second-level-facet-group');					
					$(secondFacetGroupLabel).removeClass('second-level-facet-label');
					$(secondFacetGroupLabel).addClass('selected-second-level-facet-label');
					$(selectedFacetGroup).find('.second-level-facet-right-arrow-wrapper').addClass('uscb-hide');

					if ($(selectedFacetGroup).find('.secondSectionContent').hasClass('uscb-hide')) {
						$(selectedFacetGroup).find('.secondSectionContent').removeClass('uscb-hide');
					}					
					
					$.each(secondLevelFacetGro			});					
				}
			} else if ($target.is('.top-level-facet-group-wrapper') || $target.is('.top-level-facet-label') || $target.is('.top-level-arrow') || $target.is('.current-top-level-facet-label'))  {				
				var facetGroup = $(this).attr('top-data-facet-group');				
				var selectedFacetGroupId = $(this).attr('id');			
				var topLevelFacetGroups = $('.top-level-facet-group');
				
				if (!$('#' + selectedFacetGroupId).hasClass('facet-group-expanded')) {
                    var currentTopLevelFacetGroupLabel = $('#' + selectedFacetGroupId).find('.top-level-facet-label');
					var currentTopLevelFacetGroupIconWrapper = $('#' + selectedFacetGroupId).find('.top-level-facet-right-arrow-wrapper');
					var currentTopLevelFacetGroupIcon = $('#' + selectedFacetGroupId).find('.top-level-facet-right-arrow-wrapper').find('.o-navigation-right-1');
					var selectedSectionContent = $('#' + selectedFacetGroupId).find('.topSectionContent');
                    var secondLevelFacetGroups = $(selectedSectionContent).find('.second-level-facet-group');

					$.each(topLevelFacetGroups, function( key, value ) {				
						if ($(value).attr('top-data-facet-group') != facetGroup) {							
							$(value).addClass('uscb-hide');
						}				
					});

					$('#' + selectedFacetGroupId).addClass('facet-group-expanded');					
					$(currentTopLevelFacetGroupLabel).removeClass('top-level-facet-label');
					$(currentTopLevelFacetGroupLabel).addClass('current-top-level-facet-label');
					
					$(currentTopLevelFacetGroupIconWrapper).removeClass('top-level-facet-right-arrow-wrapper');
					$(currentTopLevelFacetGroupIconWrapper).addClass('current-top-level-facet-left-arrow-wrapper');
					
					$(currentTopLevelFacetGroupIcon).removeClass('o-navigation-right-1');
					$(currentTopLevelFacetGroupIcon).addClass('o-navigation-left-1');
					
					if ($(selectedSectionContent).hasClass('uscb-hide')) {
						$(selectedSectionContent).removeClass('uscb-hide');
					}					
					
					$.each(secondLevelFacetGroups, function ( key, value ) {
						if ($(value).hasClass('uscb-hide')) {
							$(value).removeClass('uscb-hide');
						}
					});
				} else {
					var expandedSecondLevelGroup = $('#' + selectedFacetGroupId).find('.second-level-facet-group.second-level-facet-group-expanded');					
					if (expandedSecondLevelGroup.length) {						
						var secondSectionContent = $('#' + selectedFacetGroupId).find('.secondSectionContent');
						if (secondSectionContent.length) {							
							secondSectionContent.addClass('uscb-hide');
							expandedSecondLevelGroup.removeClass('second-level-facet-group-expanded');							
							var secondLevelFacetGroups = $('#' + selectedFacetGroupId).find('.second-level-facet-group');
							if (secondLevelFacetGroups.length) {
								$.each(secondLevelFacetGroups, function(key, value){
									if ($(value).hasClass('selected-second-level-facet-group')) {
										$(value).removeClass('selected-second-level-facet-group');
										var label = $(value).find('.selected-second-level-facet-label');
										if (label.length) {
											label.removeClass('selected-second-level-facet-label');
											label.addClass('second-level-facet-label');
										}
										var arrow = $(value).find('.second-level-facet-right-arrow-wrapper.uscb-hide');
										if (arrow.length) {
											arrow.removeClass('uscb-hide');
										}
									}
								});
							}							
						}

						var currentTopLevelFacetGroupLabel = $('#' + selectedFacetGroupId).find('.top-level-facet-label');
						var currentTopLevelFacetGroupIconWrapper = $('#' + selectedFacetGroupId).find('.top-level-facet-right-arrow-wrapper');
						var currentTopLevelFacetGroupIcon = $('#' + selectedFacetGroupId).find('.top-level-facet-right-arrow-wrapper').find('.o-navigation-right-1');
						var selectedSectionContent = $('#' + selectedFacetGroupId).find('.topSectionContent');
						var secondLevelFacetGroups = $(selectedSectionContent).find('.second-level-facet-group');					

						$.each(topLevelFacetGroups, function( key, value ) {				
							if ($(value).attr('top-data-facet-group') != facetGroup) {							
								$(value).addClass('uscb-hide');
							}				
						});

						$('#' + selectedFacetGroupId).addClass('facet-group-expanded');					
						$(currentTopLevelFacetGroupLabel).removeClass('top-level-facet-label');
						$(currentTopLevelFacetGroupLabel).addClass('current-top-level-facet-label');
						
						$(currentTopLevelFacetGroupIconWrapper).removeClass('top-level-facet-right-arrow-wrapper');
						$(currentTopLevelFacetGroupIconWrapper).addClass('current-top-level-facet-left-arrow-wrapper');
						
						$(currentTopLevelFacetGroupIcon).removeClass('o-navigation-right-1');
						$(currentTopLevelFacetGroupIcon).addClass('o-navigation-left-1');
						
						if ($(selectedSectionContent).hasClass('uscb-hide')) {
							$(selectedSectionContent).removeClass('uscb-hide');
						}					
						
						$.each(secondLevelFacetGroups, function ( key, value ) {							
							if ($(value).hasClass('uscb-hide')) {
								$(value).removeClass('uscb-hide');
							}							
						});
					} else {						
						var secondLevelFacetGroups = $('#' + selectedFacetGroupId).find('.second-level-facet-group');

						$.each(secondLevelFacetGroups, function( key, value ) {
							var secondFacetGroupLabel = $(value).find('.selected-second-level-facet-label');

							$(value).removeClass('second-level-facet-group-expanded');
							$(value).removeClass('selected-second-level-facet-group');
							$(value).find('.second-level-facet-right-arrow-wrapper').removeClass('uscb-hide');
							$(value).find('.secondSectionContent').addClass('uscb-hide');						
							$(secondFacetGroupLabel).removeClass('selected-second-level-facet-label');
							$(secondFacetGroupLabel).addClass('second-level-facet-label');						
							$(value).removeClass('uscb-hide');
						});
						
						$('#' + selectedFacetGroupId).removeClass('facet-group-expanded');				
						var currentTopLevelFacetGroupLabel = $('#' + selectedFacetGroupId).find('.current-top-level-facet-label');
						var currentTopLevelFacetGroupIconWrapper = $('#' + selectedFacetGroupId).find('.current-top-level-facet-left-arrow-wrapper');
						var currentTopLevelFacetGroupIcon = $('#' + selectedFacetGroupId).find('.current-top-level-facet-left-arrow-wrapper').find('.o-navigation-left-1');
						var selectedSectionContent = $('#' + selectedFacetGroupId).find('.topSectionContent');

						$(currentTopLevelFacetGroupLabel).removeClass('current-top-level-facet-label');
						$(currentTopLevelFacetGroupLabel).addClass('top-level-facet-label');

						$(currentTopLevelFacetGroupIconWrapper).removeClass('current-top-level-facet-left-arrow-wrapper');
						$(currentTopLevelFacetGroupIconWrapper).addClass('top-level-facet-right-arrow-wrapper');

						$(currentTopLevelFacetGroupIcon).removeClass('o-navigation-left-1');
						$(currentTopLevelFacetGroupIcon).addClass('o-navigation-right-1');

						if (!$(selectedSectionContent).hasClass('uscb-hide')) {
							$(selectedSectionContent).addClass('uscb-hide');
						}
						
						$.each(topLevelFacetGroups, function( key, value ) {				
							if ($(value).attr('top-data-facet-group') != facetGroup) {							
								$(value).removeClass('uscb-hide');
							}				
						});
					}
				}
			}
		});

		$(document).on('click', '#showMoreLessPill', function(event) {
			var $target = $(event.target);
			var parentElem = $target.closest('#pillsArea');
			var pills = $(parentElem).find('.facet-pill');

			if (pills.length) {
				$.each(pills, function(key, value){
					if ($(value).hasClass('uscb-hide')) {
						$(value).removeClass('uscb-hide');
					}
				});
			}

			var showMoreLessParent = $target.closest('#showMoreLessPill');
			
			if ($(showMoreLessParent).hasClass('collapsed')) {
				var label = $(showMoreLessParent).find('.show-more-less-pill-label');
				var pillIcon = $(showMoreLessParent).find('.pill-more-less-icon');

				$(showMoreLessParent).removeClass('collapsed');
				$(showMoreLessParent).addClass('expanded');
				$(label).text('Show Fewer');
				$(pillIcon).removeClass('o-add-1');
				$(pillIcon).addClass('o-minus-1');
			} else {
				var label = $(showMoreLessParent).find('.show-more-less-pill-label');
				var extraPills = $(parentElem).find('.extra-pill');
				var pillIcon = $(showMoreLessParent).find('.pill-more-less-icon');

				$(showMoreLessParent).removeClass('expanded');
				$(showMoreLessParent).addClass('collapsed');				
				$(label).text('Show ' + (pills.length - 5) + ' More');
				$(pillIcon).removeClass('o-minus-1');
				$(pillIcon).addClass('o-add-1');
				
				$.each(extraPi			});
			}
		});
    };

    return {
        init: init
    }
})(jQuery, window._);
$(document).ready(function () {

    var $expandableTextCore = $('.textcore.uscb-textcore-expandable-description .cmp-text');
    var ellipse = '<span class="ellipse">...</span>';

    $expandableTextCore.each(function( i, $elm ) {
    	var innerHTML = $elm.innerHTML;
    	var shortText = truncate(innerHTML, 1500, false);
    	var newText = shortText[0];
        $elm.innerHTML = newText; //drop everything after 1500 chars
        if (hasCharLimit(newText, 350)) {
            var readMore = '<div class="uscb-textcore-expandable-description-read-more">Show More<i class="o-navigation-down-1 uscb-textcore-expandable-description-read-more-icon"></i></div>';
            var readLess = '<div class="uscb-textcore-expandable-description-read-less uscb-hide">Show Less<i class="o-navigation-up-1 uscb-textcore-expandable-description-read-less-icon"></i></div>';
            var text = truncate(newText, 250, true);
            var firstBlock = text[0];
            var secondBlock = newText; //keep all text in secondblock div
            
            $elm.innerHTML = '<div class="firstblock">' +firstBlock +'</div><div class="secondblock uscb-hide">'+ secondBlock + '</div>'+readMore+readLess;
        }
    });

    $expandableTextCore.on('click', '.uscb-textcore-expandable-description-read-more', function() {
    	var firstblock = $(this).siblings('.firstblock')[0];
    	var secondblock = $(this).siblings('.secondblock')[0];
    	if (!firstblock || !secondblock) {
    		return;
    	}
    	var truncatedText = firstblock.innerHTML;
    	var fullText = secondblock.innerHTML;
        $(this).toggleClass('uscb-hide');
        $(this).siblings('.uscb-textcore-expandable-description-read-less').toggleClass('uscb-hide');
        firstblock.innerHTML = fullText;
        secondblock.innerHTML = truncatedText;
    });

    $expandableTextCore.on('click', '.uscb-textcore-expandable-description-read-less', function() {
    	var firstblock = $(this).siblings('.firstblock')[0];
    	var secondblock = $(this).siblings('.secondblock')[0];
    	if (!firstblock || !secondblock) {
    		return;
    	}
    	var truncatedText = secondblock.innerHTML;
    	var fullText = firstblock.innerHTML;
        $(this).toggleClass('uscb-hide');
        $(this).siblings('.uscb-textcore-expandable-description-read-more').toggleClass('uscb-hide');
        firstblock.innerHTML = truncatedText;
        secondblock.innerHTML = fullText;
    });
    
    function hasCharLimit(toShorten, limit) {
    	var TAG_REGEX = /(<([^>]+)>)/ig;//"<.*?>";
    	return toShorten.length >= limit;
    }
    
    function truncate(toShorten, limit, addEllipse) {
		var TAG_REGEX = /(<([^>]+)>)/ig;//"<.*?>";
		if (toShorten.length <= limit)
			return [toShorten, ''];

		if (toShorten.replaceAll(TAG_REGEX, "").length == toShorten.length)
			return [toShorten.substring(0, limit), ''];

		var cleanText = toShorten.replaceAll(TAG_REGEX, ""); // cleanText is
																// the text
																// without html
																// tags present
		var lineBreak = "\n";
		var htmlTags = new Array();
		cleanText = cleanText.replaceAll(lineBreak, "");

		if (cleanText.length > limit) // if the clean (no html tags) text is
										// longer than the limit, shorten it
			cleanText = cleanText.substring(0, limit);

		var cleanLength = cleanText.length; // cleanLength is the length of
												// the tagless text, shortened
												// to the limit
		var originalIndex = 1;
		var cleanIndex = 0;
		var count = true;
		toShorten += " ";

		while (cleanIndex <= cleanLength && originalIndex + 1 < toShorten.length) {
			var originalChar = toShorten.charAt(originalIndex);
			var nextChar = toShorten.charAt(originalIndex + 1);

			if (originalChar == '<') // if an open html tag
			{
				var htmlTag = getFullTag(toShorten.substring(originalIndex));
				if (isOpenTag(htmlTag)) {
					htmlTags.push((htmlTag));
				} else {
					htmlTags.pop();
				}
				count = false;
			} else if (originalChar == '>' && nextChar != '<') {
				count = true;
				originalIndex++;
				continue;
			}
			if (count)
				cleanIndex++;
			originalIndex++;
		}

        var remainingText = '';
		var shortenedText = toShorten.substring(0, originalIndex);
        while (htmlTags.length > 0) {
        	if (htmlTags.length == 1 && addEllipse) {
        		shortenedText += ellipse;
        	}
            var tag = htmlTags.pop();
			shortenedText += getCloseTag(tag);
            remainingText += tag;
        }

        remainingText += toShorten.substring(originalIndex);
		
		return [shortenedText, remainingText];
	}
    
    function getFullTag(tag) {
		tag = tag.substring(0, tag.indexOf(">", 1) + 1);
		return tag;
	}
    
	}

    function getCloseTag(tag) {
		tag = tag.replaceAll("<", "").replaceAll(">", "");
		var tagType = tag.split("\\s+")[0];
		return "<" + "/" + tagType + ">";
	}
});

var EmbededIframe = ( function() {
	'use strict';

    function heightResize(heightdk, heighttl, heightmb, iframeContainerEle) {
        const currentScreenWidth = $(window).width();
                
        if (currentScreenWidth <= 769 && heightmb) { // mobile
            iframeContainerEle.style.height = heightmb;
        } else if (currentScreenWidth <= 993 && heighttl){ // table
            iframeContainerEle.style.height = heighttl;
        } else if (currentScreenWidth > 994 && heightdk){ // desktop
            iframeContainerEle.style.height = heightdk;
        } else {
            iframeContainerEle.style.height = '100%';
        }
    }

    return {
        heightResize: heightResize
    }
})(jQuery);

(function() {
      // These manipulations only need to apply to lists capable of being displayed at full width with entries side-by-side, the default CSS
        // takes care of spacing otherwise. So this should be the full list of necessary list types.
    var lists = {
        special: {
            containerClass: '.uscb-list-condensed',
            tagLabelClass: '.uscb-tag-label',
            titleClass: '.uscb-default-x-column-title',
            pubdateClass: '.uscb-default-x-column-date',
            teaserClass: '.uscb-default-x-column-content'
        },
        census: {
            containerClass: '.uscb-grid-12 > .aem-Grid > .list .uscb-default-x-column-list',
            tagLabelClass: '.uscb-tag-label',
            titleClass: '.uscb-default-x-column-title',
            pubdateClass: '.uscb-default-x-column-date',
            teaserClass: '.uscb-default-x-column-content'
        },
        dynamic: {
            containerClass: '.uscb-grid-12 > .aem-Grid > .dynamiclist .uscb-default-x-column-list',
            tagLabelClass: '.uscb-tag-label',
            titleClass: '.uscb-default-x-column-title',
            pubdateClass: '.uscb-default-x-column-date',
            teaserClass: '.uscb-default-x-column-content'
        },
        static: {
            containerClass: '.uscb-grid-12 > .aem-Grid > .staticlist .uscb-default-x-column-list',
            tagLabelClass: '.uscb-tag-label',
            titleClass: '.uscb-default-x-column-title',
            pubdateClass: '.uscb-default-x-column-date',
            teaserClass: '.uscb-default-x-column-content'
        },
        text: {
            containerClass: '.uscb-grid-12 > .aem-Grid > .text-list .uscb-list-text',
            tagLabelClass: '.uscb-tag-label',
            titleClass: '.cmp-list__item-title',
            pubdateClass: '.uscb-default-x-column-date',
            teaserClass: '.cmp-list__item-description'
        },
        visual: {
            containerClass: '.uscb-grid-12 > .aem-Grid > .visual-list .uscb-list-visual',
            tagLabelClass: '',
            titleClass: '.uscb-card-color-title',
            pubdateClass: '',
            teaserClass: ''
        }
    }

      // TODO: Abstract into reusable utility
    let tabletMax = getComputedStyle( document.documentElement ).getPropertyValue( '--tablet_max_width' ).trim();
    let tabletMaxValue = tabletMax ? parseInt( tabletMax.slice( 0, -2 ) ) : undefined;
    const desktopQuery = tabletMaxValue ? window.matchMedia( '(min-width: ' + ( tabletMaxValue + 1 ) + 'px)' ) : undefined;
    
    $( document ).ready( () => {
        var keys = Object.keys( lists );
        keys.forEach( key => {
            if ( desktopQuery ) {
                let listConfig = lists[ key ];

                selectivelyToggleDefaultElements( listConfig, !desktopQuery.matches );
                adjustAlignment( listConfig, desktopQuery.matches );

                  // Changing window size
                desktopQuery.addEventListener( 'change', event => {
                    selectivelyToggleDefaultElements( listConfig, !event.matches );
                    adjustAlignment( listConfig, event.matches );
                });

                  // Custom triggerable event (pagination/filtering)
                document.addEventListener( 'adjust-lists', event => {
                    selectivelyToggleDefaultElements( listConfig, !event.matches );
                    adjustAlignment( listConfig, desktopQuery.matches );
                });
            }
        });
    });
    
      // Read through each default list on the page and determine if certain elements can be hidden if *each* entry doesn't have them populated
        // This is done in JS because there are performance concerns with adding loops to the current implementation of lists
    function selectivelyToggleDefaultElements( listConfig, show ) {
        var $defaultLists = $( listConfig.containerClass );

        $defaultLists.each( ( idx, list ) => {
              // TODO: Can be abstracted further so even this doesn't need duplication
            toggleItemVisibility( list, listConfig.tagLabelClass, show );
            toggleItemVisibility( list, listConfig.pubdateClass, show );
            toggleItemVisibility( list, listConfig.teaserClass, show );
        });
    }

    function toggleItemVisibility( list, itemClass, show ) {
        var $items = $( list ).find( itemClass );
        if ( show ) {
            $items.show();
        } else {
            var $populatedItems = $items.filter( populatedFilter );

            if ( $populatedItems.length === 0 ) {
                $items.hide();
            }
        }
    }

    function populatedFilter( idx, item ) {
        return item.innerText.trim() !== '';
    }

      // Add / remove min-heights on list item elements based on calculated heights in each entire list
    function adjustAlignment( listConfig, enforce ) {
        var $defaultLists = $( listConfig.containerClass );

        $defaultLists.each( ( idx, list ) => {
            if ( list.children.length > 0 
                    && !list.children[0].classList.value.includes( 'uscb-grid-6' )
                    &&  list.parentElement.classList.value.includes( 'uscb-list-text__9-column' ) ) {
                return;
            }

            toggleItemHeight( list, listConfig.tagLabelClass, enforce );
            toggleItemHeight( list, listConfig.titleClass, enforce );
            toggleItemHeight( list, listConfig.pubdateClass, enforce );
            toggleItemHeight( list, listConfig.teaserClass, enforce );
        });
    }

    function toggleItemHeight( list, itemClass, enforce ) {
        var $items = $( list ).find( itemClass );

        if ( enforce ) {
            var maxItemHeight = 0;
            var maxBottomMargin = 0;
            $items.each( ( idx, item ) => {
                var itemHeight = parseInt( getComputedStyle( item ).getPropertyValue( 'height' ).slice( 0, -2 ) );
                maxItemHeight = Math.max( maxItemHeight, itemHeight );
                
                  // Grab bottom margin as well because it's going to need to be applied to get things to properly align
                var itemBottomMargin = parseInt( getComputedStyle( item ).getPropertyValue( 'margin-bottom' ).slice( 0, -2 ) );
                maxBottomMargin = Math.max( maxBottomMargin, itemBottomMargin );
            });

            $items.css( 'min-height', maxItemHeight + 'px' );
            $items.css( 'margin-bottom', maxBottomMargin + 'px' );
            $items.css( 'position', 'static' );
        } else {
            $items.css( 'min-height', 'initial' );
            $items.css( 'margin-bottom', '' );
            $items.css( 'position', '' );
        }
    }
})();

(function() {
      // Duplicates supertitle so that it can show above the page title in mobile
    function copySupertitle( $superTitle ) {
        var $leftColumn = $( '.uscb-left-responsivegrid' );
        var $mobileTitle = $leftColumn.find( '> div > .titlecore' );

        if ( $mobileTitle.length > 0 && $superTitle.length > 0 ) {
            var $superClone = $superTitle.clone();
            $superClone.insertBefore( $mobileTitle[0] );
        }
    }

      // Moves supertitle from the old container into the new title container
    function moveSupertitle( $superTitle ) {
        var $mainTitle = $( '.uscb-title-main' );

        if ( $mainTitle.length > 0 && $superTitle.length > 0 ) {
            $superTitle.insertBefore( $mainTitle[0] );
        }
    }

    function leftNavHeightResize() {
        const $leftNavEle = $('.uscb-left-responsivegrid');
        const $containerTitleEle =  $('.uscb-template-container-title'); 
        const $containerSubscriptionEle = $('.uscb-template-container-subscription');
        const newTotalHeight = 1 + ($containerTitleEle.outerHeight(true) + $containerSubscriptionEle.outerHeight(true));

        if (newTotalHeight < $leftNavEle.outerHeight(true)) {
            return;
        }

        $leftNavEle.css('min-height', newTotalHeight + 'px');
    }

    $( document ).ready( function() {
        var $superTitle = $( '.supertitle' );

        copySupertitle( $superTitle );
        moveSupertitle( $superTitle );
        leftNavHeightResize();
    });
})();
(function() {
    'use strict';
    /* calculate title and description height for contextual navigation component so everything lines up*/
    var $contexthavhorizontal = $( '.censuscontextualnavigation .uscb-contextnav-display-horizontal' );
    $contexthavhorizontal.each( function( idx, eC ) {
    	var $titles = $( eC ).find( '.data-uscb-related-item-anchor .uscb-title-3' );
        var sharedTitleHeight = 0;
        $titles.each( function( index, el ) {
        	var $self = $(el);
        	var descriptionHeight = $self.innerHeight();
        	if (descriptionHeight > sharedTitleHeight) {
        		sharedTitleHeight = descriptionHeight;
        	}
        });
        
        if (sharedTitleHeight > 0) {
        	$titles.each( function( index, el ) {
        		el.style.height = sharedTitleHeight + 'px';
        	});
        }
    	
        var $descriptions = $( eC ).find( '.data-uscb-related-item-anchor .uscb-sub-heading-2' );
        var sharedDescriptionHeight = 0;
        $descriptions.each( function( index, el ) {
        	var $self = $(el);
        	var descriptionHeight = $self.innerHeight();
        	if (descriptionHeight > sharedDescriptionHeight) {
        		sharedDescriptionHeight = descriptionHeight;
        	}
        });
        
        if (sharedDescriptionHeight > 0) {
        	$descriptions.e  	});
        }
    });

	// Check if there is no more than one related card with a tag
	const allCardsWithTag =  $('.uscb-contextnav-layout-row .data-uscb-related-pages span.uscb-tag-label')
		.fil
		}));

	if (allCardsWithTag.length) {
		const currentWidth = $(window).width()
		$('.uscb-contextnav-layout-row .data-uscb-related-pages span.uscb-tag-label')
		.fil
		})).each((function() {
			this.innerHTML = "no-tag"
			this.style.visibility = "hidden";
			this.style.display = "inline-block";

			if (currentWidth < 769) {
				this.style.display = "none";
			}
		}));
	}
	
})();

var CensusTooltips = ( () => {
    var tooltipTypes = {
        default: 'uscb-tooltip-default'
    };

    function attach( target, content, type ) {
        target.addEventListener( 'mouseover', () => {
            create( target, content, type );
        });

        target.addEventListener( 'mouselea   });

          // Tablet / mobile
        target.addEventListener( 'cli   });

          // Keyboard
        target.addEventListener( 'keydown', e => {
            if ( e.keyCode === 13 ) {
                toggle( target, content, type );
            }
        });
    }

      // TODO: Support shifted/flipped tooltips when too close to viewport boundaries
    function create( target, content, type = 'default' ) {
        var salt = ( Math.random() + 1 ).toString( 36 ).substring( 7 );
        var template = `<div id="${ salt }" class="uscb-tooltip ${ tooltipTypes[ type ] }">
                            <div class="uscb-tooltip-content">
                                <a href="${ content.link }" class="uscb-tooltip-link">${ content.text }</a>
                            </div>
                            <div class="uscb-tooltip-stem"></div>
                        </div>`;

          // Add salt to data attribute on target element
            // Allows direct connection between target and tooltip despite disparate DOM locations
        target.dataset.tooltip = salt;
        document.body.insertAdjacentHTML( 'beforeend', template );

        var coords = getCoords( target );
        var tooltip = document.getElementById( salt );
        if ( tooltip ) {
            var tooltipStyle = window.getComputedStyle( tooltip );
            tooltip.style.top = `calc(${ coords.top }px - ${ tooltipStyle.height } - 20px)`;
            tooltip.style.left = `calc(${ coords.left }px - (${ tooltipStyle.width } / 2) + 10px)`;

            tooltip.addEventListener( 'mouseleave', e => {
                var originalTarget = document.querySelector( `[data-tooltip="${ salt }"]` )
                destroy( originalTarget );
            });
        }
    }
   }

      // If user mouses from tooltip trigger to tooltip, don't destroy the tooltip. Otherwise, remove tooltip after delay.
    function determineState( target ) {
        setTimeout( document.addEventListener.bind( null, 'mousemove', mousemove, false ), 300 );

        function mousemove( e ) {
            var newTarget = document.elementFromPoint( e.clientX, e.clientY );
            var tooltip = document.getElementById( target.dataset.tooltip );

            if ( !tooltip || !tooltip.contains( newTarget ) ) {
                destroy( target );
            }

              // Remove listener to free up resources. Only required instantaneous readings for this calculation.
            this.removeEventListener( 'mousemove', arguments.callee, false );
        }
    }

    function destroy( target ) {
        var tooltip = document.getElementById( target.dataset.tooltip );
        if ( tooltip ) {
            tooltip.remove();  
        }
    }

    function toggle( target, content, type ) {
        if ( document.getElementById( target.dataset.tooltip ) ) {
            destroy( target );
        } else {
            create( target, content, type );
        }
    }

    return {
        attach: attach
    };
})();
(function() {
    document.addEventListener( "DOMContentLoaded", () => {
        $( '.uscb-tag-label' ).each( ( idx, item ) => {
            var styles = window.getComputedStyle( item );
            var iconClass = styles.getPropertyValue( '--icon-class' );
            var label = styles.getPropertyValue( '--label' )

            if ( iconClass ) {
                $( item ).find( '.uscb-card-color-icon i' ).addClass( iconClass );
            }

            if ( label ) {
                $( item ).text( label );
            }
        });
    });
})();
