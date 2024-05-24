var _ds_www={};(function(_ds){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
var ua,wa,ya,za,Ba,Fa,Ka,Oa,gb,lb,ub,wb,Hb,Jb,Mb,Ob,Pb,Rb,Sb,Xb,Zb,Tb,dc,ec,gc,hc,ic,jc,kc,mc,nc,rc,Hc,Ic,Gc,Qc,Sc,Tc,Uc,$c,ad,dd,cd,fd,ed,hd,jd,id,kd,ld,nd,od,qd,sd,td,yd,Ad,rd,Dd,Hd,ie,ge,he,le,Pe,Qe,Re,Se,Ve,Ze,af,cf,ef,ff,mf,nf,of,pf;_ds.aa=
_ds.ba=_ds.fa=_ds.ka=ua=function(a){return na?ra?ra.brands.some(:!1:!1};wa=ya=za=
_ds.Aa=Ba=_ds.Ga=function(){return wa("Safari")&&!(Fa()||(ya()?0:wa("Coast"))||za()||(ya()?0:wa("Edge"))||(ya()?ua("Microsoft Edge"):wa("Edg/"))||(ya()?ua("Opera"):wa("OPR"))||Ba()||wa("Silk")||wa("Android"))};Fa=_ds.Ja=
Ka=_ds.Na=function(){return Ka()?"Android"===ra.platform:wa("Android")};Oa=_ds.Sa=_ds.Ta=function(){return Ka()?"macOS"===ra.platform:wa("Macintosh")};_ds.Ua=function(){return Ka()?"Windows"===ra.platform:wa("Windows")};_ds.Va=_ds.Xa=
_ds.Za=function(a,b,c){var d=a.length;const e="string"===typeof a?a.split(""):a;for(--d;0<=d;--d)d in e&&b.call(c,e[d],d,a)};_ds.bb=_ds.eb=_ds.fb=gb=
_ds.hb=_ds.kb=_ds.mb=lb=
_ds.qb=ub=_ds.vb=
_ds.yb=_ds.tb=wb=_ds.zb=_ds.Cb=
Hb=Jb=Mb=Ob=Pb=Rb=
Sb=_ds.Wb=
_ds.Yb=Xb=
Zb=
_ds.$b=
Tb=_ds.ac=dc=ec=gc=hc=function(a,b){(0,_ds.cc)(b,(a|0)&-14591)};ic=jc=kc=
mc=nc=_ds.qc=function(a,b,c,d){if(null==a){if(!c)throw Error();}else if("string"===typeof a)a=a?new oc(a,Qb):_ds.pc();else if(a.constructor!==oc)if(Ob(a)){var e;d?e=0==a.length?_ds.pc():new oc(a,Qb):e=a.length?new oc(new Uint8Array(a),Qb):_ds.pc();a=e}else{if(!b)throw Error();a=void 0}return a};
rc=_ds.sc=_ds.uc=_ds.xc=_ds.zc=
_ds.Ac=_ds.Bc=_ds.Cc=_ds.Dc=_ds.Ec=
_ds.Fc=_ds.Jc=_ds.Kc=
Hc=_ds.Lc=
Ic=Gc=_ds.Mc=_ds.Nc=
_ds.Oc=Qc=Sc=Tc=
_ds.Wc=
Uc=function(a,b,c){if(a===b||null==a&&null==b)return!0;if(null==a||null==b)return!1;if(a instanceof oc)return Xc(a,b);if(b instanceof oc)return Xc(b,a);if(Ob(a))return Tc(a,b);if(Ob(b))return Tc(b,a);var d=typeof a,e=typeof b;if("object"!==d||"object"!==e)return Number.isNaN(a)||Number.isNaN(b)?String(a)===String(b):"string"===d&&"number"===e||"number"===d&&"string"===e?+a===+b:"boolean"===d&&"number"===e||"number"===d&&"boolean"===e?!a===!b:!1;if(a.zi===Pc||b.zi===Pc)return _ds.Wc(a,b);if(a.constructor!=
b.constructor)return!1;if(a.constructor===Array){e=(0,_ds.bc)(a);var f=(0,_ds.bc)(b),g=a.length,h=b.length,k=Math.max(g,h);d=kc(e|f);var l=!!((e|f)&1);if(!l&&(e=Yc||(Yc=Symbol()),e=a[e]||b[e])){var m=(m=e.g)?Array.isArray(m)?e.g=new Set(m):m:Zc||(Zc=new Set);c||(c=(c=e.h)?Array.isArray(c)?e.h=new Set(c):c:Zc||(Zc=new Set))}e=g&&a[g-1];f=h&&b[h-1];nc(e)||(e=null);nc(f)||(f=null);g=g-d-+!!e;h=h-d-+!!f;for(var q=0;q<k;q++)if(!$c(q-d,a,e,g,b,f,h,d,c,m,l))return!1;if(e)for(var w in e){k=a;l=e;q=g;var z=
b,A=f,D=h,F=d,M=c,I=m;const R=+w;if(!(!Number.isFinite(R)||R<q||R<D||$c(R,k,l,q,z,A,D,F,M,I,!1)))return!1}if(f)for(let R in f)if((w=e&&R in e)||(w=a,k=e,l=g,q=b,z=f,A=h,D=d,F=c,M=m,I=+R,w=!Number.isFinite(I)||I<l||I<A?!0:$c(I,w,k,l,q,z,A,D,F,M,!1)),!w)return!1;return!0}if(a.constructor===Object)return Uc([a],[b]);throw Error();};
$c=ad=dd=
cd=fd=
ed=hd=
jd=id=kd=
ld=function(a,b,c=ic){if(null!=a){if(Nb&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=(0,_ds.bc)(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?((0,_ds.cc)(a,(d|34)&-12293),a):id(a,ld,d&4?ic:c,!0,!1,!0)}a.zi===Pc&&(c=a.Hb,d=(0,_ds.md)(c),a=d&2?a:Sc(a.constructor,nd(c,d,!0)));return a}};nd=
od=_ds.pd=
_ds.ud=qd=sd=td=
_ds.wd=_ds.xd=
yd=_ds.zd=
Ad=function(a,b,c,d,e,f,g){var h=!!(2&b),k=h?1:2;const l=1===k;k=2===k;f=!!f;g&&(g=!h);h=qd(a,b,d,e);var m=(0,_ds.bc)(h);const q=!!(4&m);if(!q){m=sd(m,b,f);var w=h,z=b,A;(A=!!(2&m))&&(z=ec(z,2,!0));let D=!A,F=!0,M=0,I=0;for(;M<w.length;M++){const R=Qc(w[M],c,z);if(R instanceof c){if(!A){const da=!!((0,_ds.bc)(R.Hb)&2);D&&(D=!da);F&&(F=da)}w[I++]=R}}I<M&&(w.length=I);m=ec(m,4,!0);m=ec(m,16,F);m=ec(m,8,D);(0,_ds.cc)(w,m);A&&Object.freeze(w)}c=!!(8&m)||l&&!h.length;if(g&&!c){td(m)&&(h=_ds.ac(h),m=rd(m,
b,f),b=_ds.pd(a,b,d,h,e));g=h;c=m;for(w=0;w<g.length;w++)m=g[w],z=od(m),m!==z&&(g[w]=z);c=ec(c,8,!0);c=ec(c,16,!g.length);(0,_ds.cc)(g,c);m=c}td(m)||(g=m,l?m=ec(m,!h.length||16&m&&(!q||32&m)?2:2048,!0):f||(m=ec(m,32,!1)),m!==g&&(0,_ds.cc)(h,m),l&&Object.freeze(h));k&&td(m)&&(h=_ds.ac(h),m=rd(m,b,f),(0,_ds.cc)(h,m),_ds.pd(a,b,d,h,e));return h};rd=
_ds.Cd=function(a,b,c,d,e,f,g){a=a.Hb;const h=(0,_ds.md)(a);_ds.sc(h);b=Ad(a,h,c,b,f,!0);c=null!=d?d:new c;if(g&&("number"!==typeof e||0>e||e>b.length))throw Error();void 0!=e?b.splice(e,g,c):b.push(c);(0,_ds.bc)(c.Hb)&2?Bd(b,8):Bd(b,16)};Dd=_ds.Ed=
Hd=
_ds.Id=_ds.Ld=_ds.Md=_ds.Nd=_ds.Od=_ds.Pd=_ds.Qd=
_ds.Rd=_ds.Sd=function(a,b,c){if(null!==a&&b in a)throw Error(`The object already contains the key "${b}"`);a[b]=c};_ds.Td=
_ds.Ud=
_ds.Wd=_ds.Xd=
_ds.Yd=
ie=function(a){if(a instanceof _ds.Zd)return'url("'+_ds.$d(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof ae)a=_ds.be(a);else{a=String(a);var b=a.replace(ce,"$1").replace(ce,"$1").replace(de,"url");if(ee.test(b)){if(b=!fe.test(a)){let c=b=!0;for(let d=0;d<a.length;d++){const e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&ge(a)}a=b?he(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new _ds.ba("Value does not allow [{;}], got: %s.",[a]);return a};
ge=he=le=
_ds.oe=_ds.qe=_ds.se=_ds.ue=
_ds.ve=_ds.we=function(a,b){b=_ds.ve(b);void 0!==b&&(a.href=b)};_ds.ye=_ds.Ae=
_ds.ze=_ds.De=_ds.Ee=
_ds.Fe=_ds.Ge=_ds.Ie=function(a){return _ds.He(a)};_ds.Je=_ds.Le=_ds.r=
_ds.Oe=Pe=
Qe=Re=Se=_ds.Ue=function(a){return Te.Fi(a)};Ve=_ds.Xe=
_ds.Ye=function(a,b){a=Ve(_ds.Ce(a).toString());let c=a.params,d=c.length?"&":"?";b.forEach((e,f)=>{e=e instanceof Array?e:[e];for(let g=0;g<e.length;g++){const h=e[g];null!==h&&void 0!==h&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});return _ds.We(a.path+c+a.hash)};Ze=
af=cf=ef=
ff=_ds.jf=_ds.kf=_ds.t=
mf="function"==typeof Object.defineProperties?Object.defineProperty:nf=of=nf(this);
pf=pf("Promise.prototype.finally",;
pf("Promise.allSettled",;pf("Array.prototype.flat",;
var qf=pf("Array.prototype.at",function(a){return a?a:qf});var rf=function(a){return a?a:qf};pf("Int8Array.prototype.at",rf);pf("Uint8Array.prototype.at",rf);pf("Uint8ClampedArray.prototype.at",rf);pf("Int16Array.prototype.at",rf);pf("Uint16Array.prototype.at",rf);pf("Int32Array.prototype.at",rf);pf("Uint32Array.prototype.at",rf);pf("Float32Array.prototype.at",rf);pf("Float64Array.prototype.at",rf);
pf("String.prototype.at",;pf("Object.fromEntries",;
pf("String.prototype.replaceAll",;
pf("String.prototype.matchAll",;
pf("Array.prototype.flatMap",;var uf,wf,xf,yf,zf,Ff;_ds.sf=_ds.sf||{};_ds.p=this||self;uf=_ds.tf=_ds.vf=_ds.wc=
_ds.ib=_ds.nb=_ds.ob=wf="closure_uid_"+(1E9*Math.random()>>>0);xf=0;yf=
zf=_ds.Af=
_ds.Bf=_ds.Cf=_ds.Df=
_ds.Ef=Ff=function(a){return a};var Gf={UNKNOWN:0,EX:1,GV:6,EV:8,PV:12,QV:14,RV:17,YV:18,aW:21,cW:25,EQ:37,dW:38,SQ:40,JR:45,iQ:47,VO:50,bQ:52,UP:62,jR:63,zS:66,pS:70,PP:73,bS:74,lQ:75,wS:76,fR:77,hR:80,VP:81,vR:82,aR:83,lS:85,sQ:87,VQ:89,rS:90,WQ:91,gR:92,gQ:93,SW:94,ZQ:95,fQ:96,CS:97,QP:98,SP:99,bW:100,RQ:101,bR:102,vS:103,OW:104,wQ:105,hQ:106,PQ:107,zQ:108,hS:109,tQ:110,LQ:111,eW:112,xS:113,DQ:114,FQ:116,zR:117,uR:118,XQ:119,qS:120,KV:121,yS:122,VV:123,FV:124,qR:125,cS:126,QQ:127,OV:128,WR:129,XR:130,KQ:131,oR:132,RP:133,kR:134,
TQ:135,DR:136,TP:137,UW:138,eS:139,IV:140,DV:141,VR:142,sR:143,fS:144,dQ:145,aS:146,lR:147,rR:148,sS:149,yQ:150,rQ:151,mR:152,JQ:154,kQ:155,ZV:156,XV:157,iR:158,HQ:159,XP:160,mQ:161,xQ:162,JV:163,uS:164,pQ:166,eU:167,qQ:168,pR:169,nR:170,YQ:171,OQ:172,tS:173,ZR:174,iS:175,jS:176,dS:177,kS:178,HV:179,UV:180,nQ:181,vQ:182,eQ:183,bP:184,mS:185,cR:186,wR:187,oQ:188,uQ:189,yR:190,YP:191,cQ:192,tR:193,zV:194,UQ:195,gS:196,NQ:197,AV:198,xR:200,dR:202,UR:203,YR:204,nS:205,eR:206,jQ:207,QR:208,RR:209};_ds.Ef(_ds.aa,Error);_ds.aa.prototype.name="CustomError";var Hf;_ds.Ef(_ds.ba,_ds.aa);_ds.ba.prototype.name="AssertionError";_ds.If=var Nf,Of,Pf,Qf,Rf,Sf,Mf,Uf;_ds.Jf=_ds.Kf=_ds.Lf=String.prototype.trim?
_ds.Tf=Nf=/&/g;Of=/</g;Pf=/>/g;Qf=/"/g;Rf=/'/g;Sf=/\x00/g;Mf=/[\x00&<>"']/;_ds.ta=
_ds.Vf=
Uf=_ds.u=_ds.v=var na=uf(610401301,!1),Wf=uf(572417392,!0);var ra,Xf=_ds.p.navigator;ra=Xf?Xf.userAgentData||null:null;var db;db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:_ds.Yf=Array.prototype.forEach?
_ds.Bb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:_ds.Zf=Array.prototype.reduce?
_ds.$f=Array.prototype.some?var ag=ag[" "]=function(){};_ds.bg=var qg,rg,wg;_ds.cg=za();_ds.dg=_ds.Aa();_ds.eg=wa("Edge");_ds.fg=_ds.eg||_ds.dg;_ds.gg=wa("Gecko")&&!(_ds.ta(_ds.ka().toLowerCase(),"webkit")&&!wa("Edge"))&&!(wa("Trident")||wa("MSIE"))&&!wa("Edge");_ds.hg=_ds.ta(_ds.ka().toLowerCase(),"webkit")&&!wa("Edge");_ds.ig=_ds.hg&&wa("Mobile");_ds.jg=_ds.Ta();_ds.kg=_ds.Ua();_ds.lg=_ds.Na();_ds.mg=Oa();_ds.ng=wa("iPad");_ds.og=wa("iPod");_ds.pg=_ds.Sa();qg=
a:{var sg="",tg=);tg&&(sg=tg?tg[1]:"");if(_ds.dg){var ug=qg();if(null!=ug&&ug>parseFloat(sg)){rg=String(ug);break a}}rg=sg}_ds.vg=rg;if(_ds.p.document&&_ds.dg){var xg=qg();wg=xg?xg:parseInt(_ds.vg,10)||void 0}else wg=void 0;_ds.yg=wg;_ds.zg=Ba();_ds.Ag=Oa()||wa("iPod");_ds.Bg=wa("iPad");_ds.Cg=_ds.Ja();_ds.Dg=Fa();_ds.Eg=_ds.Ga()&&!_ds.Sa();var Gb,Fg,Kb,Gg,Fb;Gb={};Fg=null;_ds.Hg=Kb=
Gg=
Fb=var Nb="undefined"!==typeof Uint8Array,Eb=!_ds.dg&&"function"===typeof btoa,Lb=/[-_.]/g,Ib={"-":"+",_:"/",".":"="},Qb={};var Ig,Jg,Kg,Xc,oc;_ds.pc=Jg=Kg=
Xc=function(a,b){if("string"===typeof b)b=b?new oc(b,Qb):_ds.pc();else if(b instanceof Uint8Array)b=new oc(b,Qb);else if(!(b instanceof oc))return!1;return Kg(a,b)};oc=class{var Gd=!Wf,Fd=!Wf;_ds.Ub=0;_ds.Vb=0;var Lg;Lg="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;var Bd;_ds.fc=Lg?Bd=Lg?_ds.bc=Lg?a=>a[Lg]|0:_ds.md=Lg?a=>a[Lg]:_ds.cc=Lg?var Pc,lc,Mg,gd,Ng,Zc,Yc,Og,Pg;Pc={};lc={};gd=!Wf;Ng=[];(0,_ds.cc)(Ng,55);_ds.Vc=Object.freeze(Ng);_ds.bd=0;Og=class{};Pg=class{};Object.freeze(new Og);Object.freeze(new Pg);_ds.tc=var yc=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;var Rc;_ds.Qg=_ds.vd=_ds.Rg=_ds.Sg=
_ds.Tg=_ds.Ug=_ds.Vg=_ds.Wg=
_ds.Xg=_ds.Yg=
_ds.Zg=_ds.$g=
_ds.ah=_ds.bh=_ds.ch=function(a,b){return _ds.Oc(_ds.Qg(a,b))};_ds.dh=_ds.eh=_ds.fh=
_ds.gh=_ds.hh=function(a,b,c="0"){return Dd(_ds.bh(a,b),c)};_ds.x=function(a,b,c=""){return Dd(_ds.ch(a,b),c)};_ds.ih=_ds.jh=function(a,b,c){a=_ds.ud(a,b,_ds.Oc,3,void 0,!0);if("number"!==typeof c||0>c||c>=a.length)throw Error();return a[c]};_ds.lh=function(a){return _ds.ih(a,_ds.Ug(a,_ds.kh,1),0)};_ds.mh=function(a,b,c){return _ds.Rg(a,b,null==c?c:_ds.xc(c))};
_ds.nh=_ds.oh=function(a,b,c){return _ds.xd(a,b,_ds.Dc(c),0)};_ds.ph=_ds.qh=_ds.rh=_ds.sh=_ds.Jd=
_ds.y=class{constructor(a,b,c){a:{null==a&&(a=Rc);Rc=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=(0,_ds.bc)(a);if(d&64){Yc&&delete a[Yc];break a}d|=64;if(c&&(d|=512,c!==a[0]))throw Error();b:{var e=a;c=d;if(d=e.length){const f=d-1;if(nc(e[f])){c|=256;b=f-kc(c);if(1024<=b)throw Error();d=c&-16760833|(b&1023)<<14;break b}}if(b){b=Math.max(b,d-kc(c));if(1024<b)throw Error();d=c&-16760833|(b&1023)<<14}else d=c}}(0,_ds.cc)(a,
d)}this.Hb=a}b_ds.th=0;_ds.y.prototype.zi=Pc;_ds.y.prototype.toString=_ds.uh=class{constructor(a){this.fieldName={mZ:0};this.rf=a;this.g=_ds.Vg;this.defaultValue=void 0}};var vh=class extends _ds.y{constructor(a){super(a)}getTenantIdetLocale(){return _ds.x(this,2)}getInsecureHost(){return _ds.x(this,7)}},wh=_ds.Ld(vh);vh.qb=[10,12,13,21,22];var xh=_ds.Ld(;_ds.yh=_ds.n=_ds.yh.prototype;_ds.n.xj=!1;_ds.n.isDisposed=function(){return this.xj};_ds.n.dispose=_ds.n.addOnDisposeCallback=_ds.n.Oa=var zh=function(a){this.id=a};zh.prototype.toString=function(){return this.id};_ds.Ah=_ds.Ah.prototype.stopPropagation=function(){this.h=!0};_ds.Ah.prototype.preventDefault=var Bh=);_ds.Ch=_ds.hg?"webkitTransitionEnd":"transitionend";_ds.Dh=function(a,b){_ds.Ah.call(this,a?a.type:"");this.relatedTarget=this.Of=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetX=0;this.key="";this.g=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.j=!1;this.pointerId=0;this.pointerType="";this.timeStamp=0;this.Ha=null;a&&this.init(a,b)};_ds.Ef(_ds.Dh,_ds.Ah);var Eh={2:"touch",3:"pen",4:"mouse"};
_ds.Dh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.Of=b;(b=a.relatedTarget)?_ds.gg&&(_ds.bg(b,"nodeName")||(b=null)):"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.offsetX=_ds.hg||void 0!==
a.offsetX?a.offsetX:a.layerX,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.g=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.j=_ds.jg?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:
Eh[a.pointerType]||"";this.state=a.state;this.timeStamp=a.timeStamp;this.Ha=a;a.defaultPrevented&&_ds.Dh.Ja.preventDefault.call(this)};_ds.Dh.prototype.stopPropagation=_ds.Dh.prototype.preventDefault=var Fh;Fh="closure_listenable_"+(1E6*Math.random()|0);_ds.Gh=var Hh=0;var Ih=Jh=var Vd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");var Kh=Kh.prototype.add=Kh.prototype.remove=
var Mh=Nh=Oh=Lh=var Ph,Qh,Rh,Vh,Xh,Yh,Zh,di,Uh;Ph="closure_lm_"+(1E6*Math.random()|0);Qh={};Rh=0;_ds.Th=
Vh=
Xh=_ds.Sh=_ds.$h=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)_ds.$h(a,b[f],c,d,e);else d=_ds.nb(d)?!!d.capture:!!d,c=Uh(c),_ds.Gh(a)?a.unlisten(b,c,d,e):a&&(a=_ds.Wh(a))&&(b=Oh(a,b,c,d,e))&&_ds.ai(b)};
_ds.ai=
_ds.bi=function(a){if(a)if(_ds.Gh(a))a.Ud&&Nh(a.Ud);else if(a=_ds.Wh(a)){var b=0,c;for(c in a.g)for(var d=a.g[c].concat(),e=0;e<d.length;++e)_ds.ai(d[e])&&++b}};Yh=_ds.ci=Zh=_ds.Wh=di="__closure_events_fn_"+(1E9*Math.random()>>>0);
Uh=_ds.ei=new zh("devsite-analytics-observation");_ds.fi=new zh("devsite-analytics-observation-unfiltered");_ds.gi=new zh("devsite-analytics-observation-cloudtrack");_ds.hi=new zh("devsite-analytics-timing");_ds.ii=new zh("devsite-analytics-error");_ds.ji=new zh("devsite-analytics-pageview");_ds.ki=new zh("devsite-analytics-set-dimension");/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var li,mi,oi;li=!!/^\s*class\s*\{\s*\}\s*$/.test(class{}.toString())||HTMLElement.es5Shimmed||void 0===_ds.p.Reflect||void 0===_ds.p.customElements||_ds.p.customElements.polyfillWrapFlushCallback||!1;_ds.ni=oi=!1;
_ds.pi=_ds.pi();var qi={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var ri,si=var ae=ui,ti;ae.prototype.toString=function(){return this.g};_ds.be=_ds.vi=ui={};ti={};var Bi,Ai,xi,Di,yi;_ds.wi=_ds.zi=_ds.Ce=function(a){return a instanceof _ds.wi&&a.constructor===_ds.wi?a.g:"type_error:TrustedResourceUrl"};
_ds.Ci=Bi=/%{(\w+)}/g;
Ai=RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)","i");xi=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;Di={};_ds.We=function(a){const b=si();a=b?b.createScriptURL(a):a;return new _ds.wi(a,Di)};
yi=var Ei,Fi,Gi,Hi,ne,pe;_ds.Zd=class{constructor(a){this.g=a}toString(){return this.g.toString()}};_ds.$d=function(a){return a instanceof _ds.Zd&&a.constructor===_ds.Zd?a.g:"type_error:SafeUrl"};Ei=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;Fi=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;_ds.je=try{new URL("s://g"),Gi=!0}catch(a){Gi=!1}
Hi=Gi;_ds.Ii=ne={};pe=new _ds.Zd("about:invalid#zClosurez",ne);var ee,de,ce,fe;_ds.Ji={};_ds.Li=function(a){return a instanceof _ds.Ki&&a.constructor===_ds.Ki?a.g:"type_error:SafeStyle"};_ds.Ni=_ds.Ki=class{constructor(a){this.g=a}toString(){return this.g.toString()}};
_ds.Mi=new _ds.Ki("",_ds.Ji);ee=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");de=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");ce=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g");fe=/\/\*/;_ds.Oi={};_ds.Qi=_ds.He=function(a){return a instanceof _ds.Pi&&a.constructor===_ds.Pi?a.g:"type_error:SafeStyleSheet"};_ds.Pi=class{constructor(a){this.g=a}toString(){return this.g.toString()}};_ds.Ri=new _ds.Pi("",_ds.Oi);var Si,$i,Ui,Wi,Vi,aj;Si={};_ds.xe=_ds.Ti=_ds.Ne=
_ds.Yi=function(a,b){var c=String(a);if(!Ui.test(c))throw Error("");if(c.toUpperCase()in Vi)throw Error("");a=String(a);c=void 0;var d=`<${a}`,e="";if(b)for(var f in b)if(Object.prototype.hasOwnProperty.call(b,f)){if(!Ui.test(f))throw Error("");var g=b[f];if(null!=g){var h=f;if(g instanceof ae)g=_ds.be(g);else if("style"==h.toLowerCase()){if(!_ds.nb(g))throw Error("");g instanceof _ds.Ki||(g=_ds.Ni(g));g=_ds.Li(g)}else{if(/^on/i.test(h))throw Error("");if(h.toLowerCase()in Wi)if(g instanceof _ds.wi)g=
_ds.Ce(g).toString();else if(g instanceof _ds.Zd)g=_ds.$d(g);else if("string"===typeof g)g=_ds.je(g).toString();else throw Error("");}h=`${h}="`+_ds.Tf(String(g))+'"';e+=" "+h}}b=d+e;null==c?c=[]:Array.isArray(c)||(c=[c]);!0===qi[a.toLowerCase()]?b+=">":(f=_ds.Xi(c),b+=">"+_ds.xe(f).toString()+"</"+a+">");return _ds.Ne(b)};$i=
_ds.Xi=_ds.Me=Ui=/^[a-zA-Z0-9-]+$/;Wi={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};Vi={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};_ds.Zi=new _ds.Me(_ds.p.trustedTypes&&_ds.p.trustedTypes.emptyHTML||"",Si);aj=_ds.Ne("<br>");var ke=me=[le("data"),le("http"),le("https"),le("mailto"),le("ftp"),new ke(],re="function"===typeof URL,bj=["data:","http:","https:","mailto:","ftp:"];var Be;_ds.cj=Be=var dj;dj={tT:0,gU:1,ZP:2,aQ:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};_ds.ej=_ds.fj=/^[a-z][a-z\d-]*$/i;_ds.gj=["action","formaction","href"];_ds.hj=_ds.ij=new Set("ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH".split(" "));var jj=new _ds.hj(new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ")),
new Map([["A",new Map([["href",{hd:2}]])],["AREA",new Map([["href",{hd:2}]])],["LINK",new Map([["href",{hd:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{hd:1}]])],["IMG",new Map([["src",{hd:1}]])],["VIDEO",new Map([["src",{hd:1}]])],["AUDIO",new Map([["src",{hd:1}]])]]),new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")),
new Map([["dir",{hd:3,conditions:new Map([["dir",new Set(["auto","ltr","rtl"])]])}],["async",{hd:3,conditions:new Map([["async",new Set(["async"])]])}],["cite",{hd:2}],["loading",{hd:3,conditions:new Map([["loading",new Set(["eager","lazy"])]])}],["poster",{hd:2}],["target",{hd:3,conditions:new Map([["target",new Set(["_self","_blank"])]])}]]));var nj,lj,mj,oj,pj,Te;_ds.kj=nj=
lj=
mj=oj=pj=Te=new pj(jj);_ds.qj=function(a){const b=new Set(a.g.j);b.add("class");a.g=new _ds.hj(a.g.h,a.g.g,b,a.g.m);return a};_ds.rj=_ds.sj=_ds.tj=_ds.uj=function(a){"string"===typeof a&&(a=[a]);document.body.dispatchEvent(new CustomEvent("devsite-load-custom-elements",{bubbles:!0,detail:a}))};_ds.vj=function(a,...b){a.zd=_ds.Ae(...b)};_ds.B=_ds.wj=function(a,b,c=a){b instanceof _ds.cj&&(b=b.toString());return c.getAttribute(b)};_ds.xj=function(a,b,c=a){return null!==_ds.wj(c,b)};
_ds.yj=_ds.C=class extends HTMLElement{onstructor(a){super();this.g=_ds.r;this.zd=()=>{};a&&_ds.uj(a)}connectedCallback(){}disconnectedCallback(){}_ds.C.prototype.dispatchTrackingEvent=_ds.C.prototype.Sa;_ds.C.prototype.updateContent=_ds.C.prototype.Bc;_ds.C.prototype.attributeChangedCallback=_ds.C.prototype.attributeChangedCallback;_ds.C.prototype.disconnectedCallback=_ds.C.prototype.disconnectedCallback;_ds.C.prototype.connectedCallback=_ds.C.prototype.connectedCallback;var Bj,Aj;_ds.zj=function(){return"devsite-panel"};Bj=Aj=
_ds.Cj=_ds.Cj.getTagName=_ds.zj;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}_ds.Ej=_ds.dg||_ds.hg;_ds.Fj=_ds.Gj=function(){};_ds.Hj=_ds.Ij=var Jj,Pj;Jj=_ds.Ij(;_ds.Kj=_ds.Lj=
_ds.Nj=_ds.Oj=Pj=/^[\w+/_-]+[=]{0,2}$/;_ds.Mj=_ds.Qj=_ds.Rj=_ds.Rj.prototype.clone=function(){return new _ds.Rj(this.x,this.y)};_ds.Rj.prototype.equals=_ds.Sj=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};_ds.Tj=_ds.Rj.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
_ds.Rj.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};_ds.Rj.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};_ds.Rj.prototype.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};_ds.Uj=function(a,b){this.width=a;this.height=b};_ds.Vj=_ds.n=_ds.Uj.prototype;_ds.n.clone=function(){return new _ds.Uj(this.width,this.height)};_ds.n.aspectRatio=_ds.n.isEmpty=_ds.n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_ds.n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_ds.n.round=_ds.n.scale=var ak,bk,dk,ik,lk;_ds.Wj=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};_ds.Xj=
_ds.Yj=_ds.Zj=
_ds.ck=ak=
bk=dk=/&([^;\s<&]+);?/g;_ds.ek=function(a,b){const c=b.length;for(let d=0;d<c;d++){const e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};
_ds.fk=_ds.gk=String.prototype.repeat?_ds.hk=ik=2147483648*Math.random()|0;
_ds.jk=_ds.kk=lk=_ds.mk=var sk,zk,Ck,Kk,Sk,Uk,Vk,Zk;_ds.pk=
_ds.qk=
_ds.rk=function(a,b){var c=document,d=a&&"*"!=a?String(a).toUpperCase():"";return c.querySelectorAll&&c.querySelector&&(d||b)?c.querySelector(d+(b?"."+b:"")):_ds.qk(c,a,b)[0]||null};_ds.tk=
sk={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};_ds.vk=
_ds.xk=_ds.wk=_ds.yk=_ds.Ak=
zk=
Ck=_ds.Bk=
_ds.Dk=function(a,b){var c=_ds.Bk(a,"DIV");_ds.dg?(b=_ds.Xi(aj,b),_ds.Kj(c,b),c.removeChild(c.firstChild)):_ds.Kj(c,b);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(a=a.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);c=a}return c};_ds.uk=_ds.Ek=_ds.Fk=
_ds.Gk=_ds.Hk=_ds.Ik=_ds.Jk=_ds.Lk=function(a){return void 0!==a.firstElementChild?a.firstElementChild:Kk(a.firstChild,!0)};_ds.Mk=function(a){return void 0!==a.nextElementSibling?a.nextElementSibling:Kk(a.nextSibling,!0)};
_ds.Nk=Kk=_ds.Ok=_ds.Pk=
_ds.ok=_ds.Qk=_ds.Rk=
_ds.Tk=Sk=Uk={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};Vk={IMG:" ",BR:"\n"};_ds.Xk=_ds.Yk=_ds.Wk=
_ds.$k=_ds.al=Zk=
_ds.cl=_ds.bl=_ds.dl=_ds.nk=
_ds.nk.prototype.getElement=_ds.nk.prototype.getElementsByTagName=_ds.nk.prototype.g=_ds.nk.prototype.createElement=_ds.el=_ds.n=_ds.nk.prototype;_ds.n.eq=_ds.n.appendChild=
_ds.n.append=_ds.n.canHaveChildren=_ds.n.dF=_ds.Ek;
_ds.n.eF=_ds.Hk;_ds.n.fF=_ds.Ik;_ds.n.wB=_ds.Lk;_ds.n.cK=_ds.Ok;_ds.n.contains=_ds.Pk;_ds.n.AB=_ds.ok;var il,jl,kl,ll,pl,ql,ul;_ds.fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");_ds.gl=function(){var a=_ds.E().hash,b=a.indexOf("#");return 0>b?null:a.slice(b+1)};_ds.hl=
il=jl=
kl=ll=_ds.ml=_ds.nl=
_ds.ol=pl=ql=/#|$/;_ds.rl=function(a){return 0<=pl(a,0,"origin",a.search(ql))};_ds.sl=function(a,b){var c=a.search(ql),d=pl(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return _ds.Zj(a.slice(d,-1!==e?e:0))};
_ds.tl=function(a){for(var b=a.search(ql),c=0,d,e=[];0<=(d=pl(a,c,"origin",b));){c=a.indexOf("&",d);if(0>c||c>b)c=b;d+=7;e.push(_ds.Zj(a.slice(d,Math.max(c,0))))}return e};ul=/[?&]($|#)/;_ds.vl=var Dl,Rl,El,Gl,Fl,Jl,Hl,Cl,Sl;
_ds.wl=function(a,b){this.v=this.oa=this.m="";this.ea=null;this.h=this.ra="";this.j=!1;var c;a instanceof _ds.wl?(this.j=void 0!==b?b:a.j,_ds.xl(this,a.m),this.oa=a.oa,_ds.yl(this,a.v),_ds.zl(this,a.ea),this.setPath(a.getPath()),_ds.Al(this,a.g.clone()),this.h=a.h):a&&(c=String(a).match(_ds.fl))?(this.j=!!b,_ds.xl(this,c[1]||"",!0),this.oa=_ds.Bl(c[2]||""),_ds.yl(this,c[3]||"",!0),_ds.zl(this,c[4]),this.setPath(c[5]||"",!0),_ds.Al(this,c[6]||"",!0),this.h=_ds.Bl(c[7]||"")):(this.j=!!b,this.g=new Cl(null,
this.j))};_ds.wl.prototype.toString=_ds.wl.prototype.clone=
_ds.xl=_ds.yl=_ds.zl=_ds.wl.prototype.getPath=function(){return this.ra};_ds.wl.prototype.setPath=_ds.Al=
_ds.Kl=_ds.Ol=_ds.Pl=_ds.Ql=_ds.Bl=Dl=
Rl=El=/[#\/\?@]/g;Gl=/[#\?:]/g;Fl=/[#\?]/g;Jl=/[#\?@]/g;Hl=/#/g;Cl=Sl=Cl.prototype.add=
Cl.prototype.remove=Cl.prototype.clear=Cl.prototype.isEmpty=_ds.Ul=_ds.n=Cl.prototype;_ds.n.forEach=
_ds.n.jq=_ds.n.Lv=
_ds.n.set=_ds.n.get=var Nl=
Cl.prototype.toString=Cl.prototype.clone=
var Tl=Il=var Vl,Wl,Xl,Yl,$e,em,fm,jm,bf,sm;Vl=[".c.googlers.com",".corp.google.com",".proxy.googlers.com"];Wl="developer.android.com developers.google.com cloud.google.com tensorflow.org firebase.google.com google.dev localhost".split(" ");Xl=/^[a-z]+(__)[a-z_]+/i;Yl=/^(experiments\.).*/i;_ds.Zl=0;$e={};_ds.E=_ds.$l=
_ds.am=
_ds.bm=
_ds.cm=_ds.dm=
_ds.gm=
_ds.im=
em=fm=_ds.km=
jm=_ds.lm=
_ds.mm=function(){var a=_ds.E();const b=_ds.Ql(a.href);b.g.remove("authuser");a=new URL("/_d/signout",a.origin);a=_ds.Ql(a.href);_ds.Kl(a,"continue",b.toString());return a.toString()};_ds.nm=_ds.om=
_ds.hm=bf=_ds.pm=
_ds.rm=sm=_ds.tm=
_ds.um=_ds.vm=_ds.qm=
_ds.wm=
_ds.xm=_ds.ym=var df=_ds.ei.toString(),Am=zm=0;var Dm,Em;_ds.Bm="code-sample data-sample ds-selector-dropdown ds-selector-tabs kd-tabbed-horz kd-tabbed-vert".split(" ");_ds.Cm=(0,_ds.r)`is-upgraded`;Dm="aar apk application avi bat bmp bundle c cdl64 chm cpp cs css csv db dlu doc docx dtd dylib eot eps exe flac flv gg gif go gz ico ipynb jar java jnlp jpeg jpg js json kml kmz kt log m4a manifest markdown md5 mf mjs mll mov mp3 mp4 ndoc nexe nmf odb odc odf odg odi odm odp ods odt ogg ogv otg oth otp ots ott pdf pexe php pl plist png ppt pptx properties proto psd py raw rnc rpm rss sh sha1 snippet sql step svg tar tgz ts tsv ttf txt unitypackage vb vtt war wasm wav webm webp wiki woff woff2 wsdd wsdl xlsx xml xsd xsl zip".split(" ");
Em=[/^https:\/\/cloud.google.com\/blog.*/,/\.mp4$/,/^https:\/\/uberproxy.*/,/livereload(.js)?$/,/clients[0-9]+\.google.com/,/.*\/_d\/refreshtoken/,/.*\/_d\/refreshtokenresponse/];var Gm=function(a){var b=new Fm;return _ds.sh(b,1,a)},Fm=Hm=_ds.Ld(Fm);var Km=function(a){a.container.addEventListener("message",b=>{a:if(b.isTrusted&&b.origin===document.location.origin){let c;try{c=Hm(b.data)}catch(d){break a}switch(_ds.ih(c,1,0)){case 2:b=c.getUrl();b=new URL(b,document.location.origin);b=[...document.querySelectorAll(`[src*="${b.pathname}"]`)];for(const e of b){b=new URL(e.src);if(b.searchParams.has("dcb_"))break;b.searchParams.set("dcb_",`${Math.random()}`);e.src=b.href}break;case 3:let d;null==(d=a.g)||d.call(a);break;case 4:Im(a);break;case 5:Jm(!0,
c.getUrl());break;case 6:Jm(!1)}}})},Lm=Mm=Nm=Im=Jm=Om=class{ync sendMessage(a){try{const b=await this.container.getRegistration();
(null==b?0:b.active)&&b.active.postMessage(a.Nb())}catch(b){}}};_ds.hf=var gf=null;_ds.Pm=_ds.Ef(_ds.Pm,_ds.yh);_ds.Pm.prototype[Fh]=!0;_ds.n=_ds.Pm.prototype;_ds.n.Ij=_ds.n.Er=_ds.n.addEventListener=function(a,b,c,d){_ds.Th(this,a,b,c,d)};_ds.n.removeEventListener=
_ds.n.dispatchEvent=
_ds.n.Oa=_ds.n.listen=_ds.n.unlisten=_ds.Qm=var Rm=var Sm,Tm=function(){var a=_ds.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!wa("Presto")&&(a=;if("undefined"!==typeof a&&!_ds.Aa()){var b=new a,c={},d=c;b.port1.onmessage=return return ;var Vm=Um=new Rm(,Wm=var Xm,Ym=!1,Zm=new Vm,an=$m=()=>{if(_ds.p.Promise&&_ds.p.Promise.resolve){const a=_ds.p.Promise.resolve(void 0);Xm=else Xm=()=>{var a=bn;"function"!==typeof _ds.p.setImmediate||_ds.p.Window&&_ds.p.Window.prototype&&(ya()||!wa("Edge"))&&_ds.p.Window.prototype.setImmediate==_ds.p.setImmediate?(Sm||(Sm=Tm()),Sm(a)):_ds.p.setImmediate(a)}},bn=_ds.cn=var fn,gn,hn;_ds.en=fn=fn.prototype.reset=gn=new Rm(;hn=
_ds.jn=_ds.ln=_ds.en.prototype.then=_ds.en.prototype.$goog_Thenable=!0;_ds.en.prototype.v=_ds.en.prototype.catch=_ds.en.prototype.v;
_ds.en.prototype.cancel=
var on=sn=mn=_ds.en.prototype.ya=function(a){this.g=0;dn(this,2,a)};_ds.en.prototype.Ba=
var dn=function(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.ya,f=a.Ba;if(d instanceof _ds.en){sn(d,hn(e||_ds.Gj,f||null,a));var g=!0}else if(_ds.cn(d))d.then(e,f,a),g=!0;else{if(_ds.nb(d))try{var h=d.then;if("function"===typeof h){tn(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.ra=c,a.g=b,a.j=null,rn(a),3!=b||c instanceof nn||un(a,c))}},tn=rn=pn=_ds.en.prototype.xa=
var qn=vn=un=wn=_ds.fa,nn=_ds.Ef(nn,_ds.aa);nn.prototype.name="cancel";var kn=_ds.xn=_ds.Ef(_ds.xn,_ds.Pm);_ds.n=_ds.xn.prototype;_ds.n.enabled=!1;_ds.n.Ce=null;_ds.n.setInterval=
_ds.n.pN=_ds.n.start=_ds.n.stop=_ds.n.Oa=
_ds.yn=_ds.zn=_ds.An=_ds.Ef(_ds.An,_ds.yh);_ds.n=_ds.An.prototype;_ds.n.ib=_ds.n.stop=
_ds.n.resume=_ds.n.Oa=_ds.n.gF=var Cn;_ds.G=_ds.Ef(_ds.G,_ds.yh);var Bn=[];_ds.G.prototype.listen=_ds.Dn=
Cn=_ds.G.prototype.unlisten=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)this.unlisten(a,b[f],c,d,e);else c=c||this.handleEvent,d=_ds.nb(d)?!!d.capture:!!d,e=e||this.h||this,c=Uh(c),d=!!d,b=_ds.Gh(a)?Oh(a.Ud,String(b),c,d,e):a?(a=_ds.Wh(a))?Oh(a,b,c,d,e):null:null,b&&(_ds.ai(b),delete this.g[b.key]);return this};
_ds.H=_ds.G.prototype.Oa=_ds.G.prototype.handleEvent=var En=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};_ds.n=En.prototype;_ds.n.Ne=_ds.n.clone=_ds.n.contains=
_ds.n.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};_ds.n.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};_ds.n.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
_ds.n.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.right*=a;this.top*=b;this.bottom*=b;return this};_ds.Fn=_ds.n=_ds.Fn.prototype;_ds.n.clone=_ds.n.contains=
_ds.n.distance=_ds.n.getSize=_ds.n.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_ds.n.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_ds.n.round=_ds.n.scale=var In,On,Sn,$n,bo,co,fo,Rn;_ds.Hn=In={};_ds.Gn=
_ds.Jn=_ds.Kn=_ds.Mn=_ds.Nn=
On=
_ds.Qn=
_ds.Tn=_ds.Un=function(a,b){b=b||_ds.wk(document);a=_ds.Tn(a,b);b.scrollLeft=a.x;b.scrollTop=a.y};
_ds.Pn=_ds.Ln=
_ds.Vn=Sn=
_ds.Wn=_ds.Xn=_ds.Yn=_ds.Zn=$n=_ds.gg?"MozUserSelect":_ds.hg||_ds.eg?"WebkitUserSelect":null;
_ds.ao=function(a,b,c){c=c?null:a.getElementsByTagName("*");if($n){if(b=b?"none":"",a.style&&(a.style[$n]=b),c){a=0;for(var d;d=c[a];a++)d.style&&(d.style[$n]=b)}}else if(_ds.dg&&(b=b?"on":"",a.setAttribute("unselectable",b),c))for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)};bo=
co=_ds.eo=fo={thin:2,medium:4,thick:6};
Rn=var ho=jo=no=io=lo=async function(a){await _ds.pm();a.Qb.ib()},mo=po=ko=qo=ro=so=oo=[0,25,50,75,100],go=[(0,_ds.r)`fixed`,(0,_ds.r)`visually-hidden`,(0,_ds.r)`offset`];var to,uo,vo;to=RegExp("( ?(and|or) ?)?\\((prefers-color-scheme: ?)(.+?)\\)( ?(and|or) ?)?","g");uo=new Map([["dark",null],["device","dark"],["light","none"]]);
vo=
_ds.wo=_ds.xo=var yo;_ds.zo=_ds.Ao=_ds.Bo=yo=class extends _ds.y{etName(){return _ds.x(this,2)}Ne(){return _ds.fh(this,4)}getTitle(){return _ds.x(this,5)};_ds.Co=_ds.Ld(yo);var Do;Do=_ds.Eo=class extends _ds.yh{opds.Fo=_ds.Ef(_ds.Fo,_ds.Pm);_ds.Fo.prototype.getSize=_ds.Fo.prototype.Oa=_ds.Fo.prototype.m=var Io=Ko=function(a){a.dispose();a.eventHandler.listen(window,"message",c=>{a:{c=c.Ha;try{var d=(0,_ds.Co)(c.data)}catch(l){break a}if(d){var e=_ds.ih(d,1,0),f=_ds.x(d,8);(c=a.callbacks.get(f))&&a.callbacks.delete(f);switch(e){case 3:a.m=d.getName();a.j&&a.j.g();a.h();break;case 2:var g=_ds.x(d,7);c&&c(g);break;case 8:g=d.getUrl();c&&c(g);
break;case 12:_ds.wo(_ds.x(d,12));break;case 5:let l,m,q,w;var h={x:(null==(l=_ds.Bo(d))?void 0:_ds.fh(l,1))||0,y:(null==(m=_ds.Bo(d))?void 0:_ds.fh(m,2))||0,windowWidth:(null==(q=_ds.Bo(d))?void 0:_ds.fh(q,4))||0,windowHeight:(null==(w=_ds.Bo(d))?void 0:_ds.fh(w,3))||0};if(a.oa){var k=a.callbacks.get(a.oa);k&&k(h)}if(a.v.length){k=[...a.v];a.v=[];for(g of k)if(k=a.callbacks.get(g))a.callbacks.delete(g),k(h)}break;case 13:g=d;let z,A,D,F,M,I,R;d={x:(null==(h=_ds.Bo(g))?void 0:_ds.fh(h,1))||0,y:(null==
(k=_ds.Bo(g))?void 0:_ds.fh(k,2))||0,offset:(null==(z=_ds.Bo(g))?void 0:_ds.fh(z,5))||0,bottomPanelHeight:(null==(A=_ds.Bo(g))?void 0:_ds.fh(A,8))||0,panelCoversContent:(null==(D=_ds.Bo(g))?void 0:_ds.eh(D,9))||0,contentMargin:(null==(F=_ds.Bo(g))?void 0:_ds.fh(F,7))||0,contentHeight:(null==(M=_ds.Bo(g))?void 0:_ds.fh(M,6))||0,windowWidth:(null==(I=_ds.Bo(g))?void 0:_ds.fh(I,4))||0,windowHeight:(null==(R=_ds.Bo(g))?void 0:_ds.fh(R,3))||0};document.body.dispatchEvent(new CustomEvent("devsite-parent-scroll",
{bubbles:!0,detail:d}))}}}});a.eventHandler.listen(a.Fa,"resize",()=>{a.h()});a.eventHandler.listen(document.body,"devsite-content-updated",;a.ya.observe(document.body,{attributes:!0,characterData:!0,childList:!0,subtree:!0});let b;null==(b=a.ea)||b.observe(document.body);a.enablePolling&&Jo(a)},Jo=Go=Lo=function(a,b,c){c=`${c}_${_ds.jk()}`;a.callbacks.set(c,b);return c},Mo=Ho=function(a,b){a.m&&_ds.qh(b,2,a.m);_ds.yk().parent.postMessage(b.Nb(),"*")},No=Oo=Po=Po.prototype.handleLinkClicksInParent=Po.prototype.OB;var Ro=var So=new Map([["a.lb","devsite-lightbox"],[`.${_ds.Bm.join(",.")}`,"devsite-selector"],[".devsite-acknowledgement-link","devsite-wall-acknowledgement"],[".devsite-charts-table","devsite-chart"],[".devsite-dialog","devsite-dialog"],[".devsite-filter","devsite-filter"],[".devsite-multiple-choice","devsite-multiple-choice"],[".devsite-tracking-question","devsite-tracking-question"],[".expandable","devsite-expandable"],[".google-feedback","devsite-feedback"],[".kd-select","devsite-select"],["iframe.devsite-embedded-youtube-video",
"devsite-video"],["iframe.inherit-locale","devsite-iframe"],["pre:not([is-upgraded])","devsite-code"],["section#try-it,:not(devsite-apix) > .devsite-apix,:not(#try-it) > #embedded-explorer,:not(#try-it):not(.devsite-apix):not(devsite-concierge-apix) > .apis-explorer","devsite-apix"],["var.edit, pre var, var[scope]","devsite-var"],[".devsite-vplus","devsite-vplus"],[".replaceable-credential","devsite-credentials-dialog"],[".devsite-api-getstarted-widget","devsite-api-getstarted"],[".chrome-policies",
"cloudx-chrome-policies"],[".cloud-carousel","cloudx-carousel"],[".cloud-collapse","cloudx-collapse"],[".cloud-jump-menu","cloudx-jump-menu"],[".cloud-popup-instance:not(g)","cloudx-popup"],[".cloud-select-dropdown","cloudx-select-dropdown"],[".cloud-table-wrapper","cloudx-table"],[".cloud-tabs","cloudx-tabs"]]),To=Uo=Vo=Wo=Yo=Zo=Xo=$o=var ap=null,bp=cp=_ds.dp=_ds.n=_ds.dp.prototype;_ds.n.isEnabled=
_ds.n.set=function(a,b,c){let d;var e=!1;let f;if("object"===typeof c){f=c.GZ;e=c.HZ||!1;d=c.domain||void 0;var g=c.path||void 0;var h=c.Df}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=d?";domain="+d:"";g=g?";path="+g:"";e=e?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+e+(null!=f?";samesite="+
f:"")};_ds.n.get=_ds.n.remove=_ds.n.jq=function(){return ep(this).keys};_ds.n.Lv=_ds.n.isEmpty=
_ds.n.clear=var ep=var fp=fp.prototype.next=var gp={done:!0,value:void 0};fp.prototype.Al=var kp=hp=ip=
jp=var lp=function(){};var mp=function(){};_ds.Ef(mp,lp);mp.prototype.Xy=mp.prototype[Symbol.iterator]=mp.prototype.clear=_ds.np=_ds.Ef(_ds.np,mp);_ds.n=_ds.np.prototype;_ds.n.isAvailable=
_ds.n.set=_ds.n.get=_ds.n.remove=_ds.n.Xy=
_ds.n.Al=_ds.n.clear=_ds.n.key=
var op=_ds.pp=_ds.Ef(_ds.pp,_ds.np);var qp,rp,sp;qp=rp=
sp=
_ds.tp=class{constructor(){this.g=new Map;ap||(ap=new cp);this.m=ap;this.j=new _ds.pp;this.h=new _ds.dp;this.g.set("_mkto_trk",{purpose:1,Ab:2});this.g.set("cloudshell",{purpose:1,Ab:0});this.g.set("CLOUDX_TAG_HISTORY",{purpose:1,Ab:2,options:{Df:2592E3,path:"/"}});this.g.set("devguide_state",{purpose:1,Ab:1});this.g.set("developer-profile",{purpose:1,Ab:1,Rm:!0});this.g.set("devsite-app-controller-flag-cache-time",{purpose:1,Ab:1});this.g.set("devsite-app-controller-flag-cache-value",{purpose:1,
Ab:1});this.g.set("devsite-appearance",{purpose:1,Ab:1});this.g.set("devsite-author-page-insights",{purpose:1,Ab:0});this.g.set("devsite-codelabs",{purpose:1,Ab:1,Rm:!0});this.g.set("devsite-content-excellence",{purpose:1,Ab:0});this.g.set("DEVELOPER_PROFILE_CALLOUT_DISMISSED",{purpose:1,Ab:2,options:{Df:2592E3,path:"/"}});this.g.set("devsite-device",{purpose:1,Ab:1});this.g.set("devsite-eu-cookie",{purpose:1,Ab:1});this.g.set("devsite-feature-tooltip",{purpose:1,Ab:1,Rm:!0});this.g.set("devsite-selector",
{purpose:1,Ab:1});this.g.set("devsite_skip_cache",{purpose:1,Ab:2,options:{Df:31536E3,path:"/"}});this.g.set("devsite-snackbar",{purpose:1,Ab:1});this.g.set("devsite_speed_dial",{purpose:1,Ab:2,options:{Df:31536E3,path:"/"}});this.g.set("devsite_wall_acks",{purpose:1,Ab:2,options:{Df:15552E3,path:"/"}});this.g.set("devsite-var",{purpose:0,Ab:0});this.g.set("devsite-version-selector",{purpose:1,Ab:1});this.g.set("FACET_EXPERIMENT_IDS_DEVSITE",{purpose:1,Ab:2});this.g.set("django_language",{purpose:1,
Ab:2,options:{Df:15552E3,path:"/"}});this.g.set("firebase-utm",{purpose:1,Ab:0});this.g.set("language_preference",{purpose:1,Ab:3});this.g.set("nav-buttons",{purpose:1,Ab:1});this.g.set("pref_dark-code",{purpose:1,Ab:1});this.g.set("temp_badges",{purpose:1,Ab:1});this.g.set("__utmz",{purpose:1,Ab:2})}async set(a,b,c){await DevsiteApp.whenReady();const d=this.g.get(a);d&&await DevsiteApp.canAccessData(d.purpose)&&(a=b?`${a}-${b}`:a,d.Rm&&await qp(this,d,b),await rp(this,d,a,c))}async get(a,b){await DevsiteApp.whenReady();
const c=this.g.get(a);if(!c)return"";if(await DevsiteApp.canAccessData(c.purpose)){const d=b?`${a}-${b}`:a;if(c.Rm){const e=await sp(this,c,b);if(e)return await this.set(a,b,e),e}return await sp(this,c,d)}return""}async remove(a,b){await DevsiteApp.whenReady();const c=this.g.get(a);c&&await DevsiteApp.canAccessData(c.purpose)&&(a=b?`${a}-${b}`:a,c.Rm&&await qp(this,c,b),await qp(this,c,a))}};var up=vp=(new Am("app.whenReady-performance")).start(),xp=yp=Ep=Fp=async function(a){const b=new _ds.pp;if(b.isAvailable()){var c=Date.now()-6048E5;for(let e=0;e<b.Xy();e++){var d=b.key(e);if(d&&d.startsWith("devsite-app-controller-flag-cache-time")){d=d.substring(39);const f=Number(await a.storage.get("devsite-app-controller-flag-cache-time",
d));0<f&&f<c&&(await a.storage.remove("devsite-app-controller-flag-cache-time",d),await a.storage.remove("devsite-app-controller-flag-cache-value",d))}}}},zp=Ap=Bp=async function(a){var b=_ds.E();b.searchParams.set("partial","1");var c=await a.storage.get("language_preference","");if(c){var d=new URL(b.href);d.searchParams.set("hl",c)}if(c=
await window.caches.open("devsite.pwa_RUNTIME_v2.1")){if(b=await c.match(b.href),!b&&d&&(b=await c.match(d.href)),b||(b=await c.match("/_static/offline?partial=1")),b){d=await b.text();let e;try{e=xh(d)}catch(f){}e?(await Jp(a,e),document.documentElement.removeAttribute("cached"),await Dp(a),await Cp(a)):Kp()}}else Kp()},Cp=Dp=Hp=Lp=Ip=Jp=Kp=Gp=Op=Np=Pp=Qp=Rp=function(a=""){document.documentElement.setAttribute("dir",a)},Sp=
Tp=Vp=function(a){const b="devsite-book-nav--open touch pending ready appearance block-apix class concierge dir display-toc embed free-trial ie-11 lang layout template theme type xmlns".split(" "),
c=new Set(Array.from(document.body.attributes).map(d=>d.nodeName).filter();document.body.setAttribute("class",_ds.x(a,16));document.body.setAttribute("layout",_ds.eh(a,23)?"full":"docs");document.body.setAttribute("template",_ds.x(a,26));document.body.setAttribute("theme",_ds.x(a,9));document.body.setAttribute("type",Up(_ds.ih(a,25,0)));_ds.eh(a,10)?document.body.setAttribute("display-toc",""):document.body.removeAttribute("display-toc");a=_ds.x(a,17).split(/\s+/).map(.filter(;for(const d of a)document.body.setAttribute(d[0],d[1]),c.delete(d[0]);for(const d of c)document.body.removeAttribute(d)},Mp=Up=
Wp=Yp=class{constructor(a,b=new Map){this.config=a;this.Ya=b;this.xa=new MutationObserver(;this.ya=new _ds.An(400);this.kb=new _ds.An(16);this.m=new Map;this.pc=null;
this.eventHandler=new _ds.G;this.v=new Map;this.Da=this.La=null;this.ea=new _ds.Rj(0,0);this.Ea=[];this.Ma=this.h=!1;this.g=this.Ba=null;this.oa=0;this.Fa=this.Qa=null;this.Ga=!1;this.ra=this.j=null;this.storage=new _ds.tp;this.Ka=[];if(this.config.getInsecureHost())try{this.La=new URL(this.config.getInsecureHost())}catch(c){console.warn("Invalid insecure host",this.config.getInsecureHost())}"IntersectionObserver"in _ds.yk()&&(this.pc=new IntersectionObserver({threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}));this.Ka=[`${_ds.p.DevsiteAppTenantCustomized?_ds.x(this.config,6):_ds.x(this.config,5)}/js/devsite_app_custom_elements_module.js`]}FlagAccess(a,b=0){const c=`${a}`,d=(new Date).getTime();if(0<b){var e=Number(await this.storage.get("devsite-app-controller-flag-cache-time",c));if(d-e<=1E3*b)return"true"===await this.storage.get("devsite-app-controller-flag-cache-value",c)}e=this.getEnv();var f=this.getConfig();f=_ds.ud(f,13,_ds.Bc,2);a:{var g=_ds.E();g=new _ds.wl(g.href);const h=Object.keys(Gf);if("PROD"!==e)for(const k of h)if(Gf[k]===
a&&(e=_ds.Pl(g,k),void 0!==e)){a="true"===e;break a}a=Array.from(f).includes(a)}0<b&&(await this.storage.set("devsite-app-controller-flag-cache-time",c,`${d}`),await this.storage.set("devsite-app-controller-flag-cache-value",c,`${a}`));Fp(this);return a}async hasMendelFlagAccess(a,b,c=0){const d=`${a}${b}`,e=(new Date).getTime();if(0<c){var f=Number(await this.storage.get("devsite-app-controller-flag-cache-time",d));if(e-f<=1E3*c)return"true"===await this.storage.get("devsite-app-controller-flag-cache-value",
d)}f=this.getEnv();var g=this.getConfig();g=_ds.ud(g,22,_ds.Oc,2);a:{var h=_ds.E();h=new _ds.wl(h.href);a=a+"__"+b;if("PROD"!==f&&(b=_ds.Pl(h,a),void 0!==b)){a="true"===b;break a}a=Array.from(g).includes(a)}0<c&&(await this.storage.set("devsite-app-controller-flag-cache-time",d,`${e}`),await this.storage.set("devsite-app-controller-flag-cache-value",d,`${a}`));Fp(this);return a}etConfig(){return this.config}etTenantId(){return this.config.getTenantId()}In(){const a=await Wp(this);a&&await a.signIn()}async signOut(){const a=await Wp(this);a&&await a.signOut()}nc areCookiesAccepted(){const a=await this.getCookieNotificationBarElement();return a?await a.hasAccepted():!1};Yp.prototype.fetchPageTitle=Yp.prototype.fetchPageTitle;
Yp.prototype.fetchPage=Yp.prototype.fetchPage;Yp.prototype.reload=Yp.prototype.reload;Yp.prototype.scrollToAnchor=Yp.prototype.scrollToAnchor;Yp.prototype.showLoading=Yp.prototype.showLoading;var Xp="onpointerover"in window?"pointerover":"mouseover",wp=["rec"];var lf=null,Zp=_ds.Df("DevsiteAppInit",function(a,b){let c;var d=null!=(c=lf)?c:Zp(a,b);d.Qa||(d.Qa=Ep(d,_ds.ud(d.config,10,_ds.Oc,2)))});_ds.Df("DevsiteAppFrameboxInit",;})(_ds_www);
