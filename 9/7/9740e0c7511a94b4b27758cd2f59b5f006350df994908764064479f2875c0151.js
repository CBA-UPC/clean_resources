var _ds_www={};(function(_ds){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
var wa,Ga,Ha,Ka,La,Wa,ib,kb,nb,qb,Bb,Db,Gb,Ib,Jb,Lb,Mb,Rb,Tb,Nb,Zb,$b,bc,cc,dc,ec,fc,hc,ic,jc,sc,xc,yc,wc,Gc,Ic,Kc,Lc,Sc,Tc,Wc,Vc,Yc,Xc,$c,bd,ad,cd,dd,fd,gd,id,kd,md,rd,td,jd,ud,zd,$d,Yd,Zd,ce,ye,ze,Ae,Be,Ge,Ie,Ke,Me,Ne,Te,Ue,Ve,We;_ds.aa=
_ds.la=_ds.na=_ds.ra=wa=_ds.Aa=Ga=Ha=
_ds.Ia=Ka=_ds.Na=La=
_ds.Pa=_ds.Sa=_ds.Va=function(){return _ds.Sa()?"Android"===_ds.ua.platform:_ds.Aa("Android")};Wa=_ds.Xa=_ds.Ya=function(){return _ds.Sa()?"macOS"===_ds.ua.platform:_ds.Aa("Macintosh")};
_ds.$a=_ds.ab=_ds.bb=_ds.eb=_ds.fb=ib=
_ds.jb=_ds.lb=kb=nb=
_ds.ob=_ds.sb=_ds.mb=qb=
_ds.tb=_ds.xb=
Bb=Db=Gb=Ib=Jb=Lb=
Mb=_ds.Qb=
_ds.Sb=Rb=
Tb=
_ds.Ub=
Nb=_ds.Vb=Zb=$b=bc=cc=function(a,b){(0,_ds.Yb)(b,(a|0)&-14591)};dc=ec=fc=
hc=ic=jc=_ds.kc=_ds.mc=
_ds.oc=_ds.qc=_ds.rc=sc=_ds.tc=
_ds.uc=_ds.vc=_ds.zc=
_ds.Ac=xc=_ds.Bc=
yc=wc=_ds.Cc=_ds.Dc=
_ds.Ec=Gc=Ic=Kc=
_ds.Nc=
Lc=function(a,b,c){if(a===b||null==a&&null==b)return!0;if(null==a||null==b)return!1;if(a instanceof Oc)return Pc(a,b);if(b instanceof Oc)return Pc(b,a);if(Ib(a))return Kc(a,b);if(Ib(b))return Kc(b,a);var d=typeof a,e=typeof b;if("object"!==d||"object"!==e)return Number.isNaN(a)||Number.isNaN(b)?String(a)===String(b):"string"===d&&"number"===e||"number"===d&&"string"===e?+a===+b:"boolean"===d&&"number"===e||"number"===d&&"boolean"===e?!a===!b:!1;if(a.Qe===Fc||b.Qe===Fc)return _ds.Nc(a,b);if(a.constructor!=
b.constructor)return!1;if(a.constructor===Array){e=(0,_ds.Xb)(a);var f=(0,_ds.Xb)(b),g=a.length,h=b.length,k=Math.max(g,h);d=fc(e|f);var l=!!((e|f)&1);if(!l&&(e=Qc||(Qc=Symbol()),e=a[e]||b[e])){var m=(m=e.g)?Array.isArray(m)?e.g=new Set(m):m:Rc||(Rc=new Set);c||(c=(c=e.h)?Array.isArray(c)?e.h=new Set(c):c:Rc||(Rc=new Set))}e=g&&a[g-1];f=h&&b[h-1];ic(e)||(e=null);ic(f)||(f=null);g=g-d-+!!e;h=h-d-+!!f;for(var n=0;n<k;n++)if(!Sc(n-d,a,e,g,b,f,h,d,c,m,l))return!1;if(e)for(var p in e){k=a;l=e;n=g;var u=
b,w=f,A=h,C=d,M=c,L=m;const T=+p;if(!(!Number.isFinite(T)||T<n||T<A||Sc(T,k,l,n,u,w,A,C,M,L,!1)))return!1}if(f)for(let T in f)if((p=e&&T in e)||(p=a,k=e,l=g,n=b,u=f,w=h,A=d,C=c,M=m,L=+T,p=!Number.isFinite(L)||L<l||L<w?!0:Sc(L,p,k,l,n,u,w,A,C,M,!1)),!p)return!1;return!0}if(a.constructor===Object)return Lc([a],[b]);throw Error();};
Sc=Tc=Wc=
Vc=Yc=
Xc=$c=
bd=ad=cd=
dd=function(a,b,c=dc){if(null!=a){if(Hb&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=(0,_ds.Xb)(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?((0,_ds.Yb)(a,(d|34)&-12293),a):ad(a,dd,d&4?dc:c,!0,!1,!0)}a.Qe===Fc&&(c=a.jb,d=(0,_ds.ed)(c),a=d&2?a:Ic(a.constructor,fd(c,d,!0)));return a}};fd=
gd=_ds.hd=
_ds.nd=id=kd=md=
_ds.pd=_ds.qd=
rd=_ds.sd=
td=function(a,b,c,d,e,f){var g=!!(2&b),h=g?1:2;const k=1===h;h=2===h;e=!!e;f&&(f=!g);g=id(a,b,d);var l=(0,_ds.Xb)(g);const m=!!(4&l);if(!m){l=kd(l,b,e);var n=g,p=b,u;(u=!!(2&l))&&(p=$b(p,2,!0));let w=!u,A=!0,C=0,M=0;for(;C<n.length;C++){const L=Gc(n[C],c,p);if(L instanceof c){if(!u){const T=!!((0,_ds.Xb)(L.jb)&2);w&&(w=!T);A&&(A=T)}n[M++]=L}}M<C&&(n.length=M);l=$b(l,4,!0);l=$b(l,16,A);l=$b(l,8,w);(0,_ds.Yb)(n,l);u&&Object.freeze(n)}c=!!(8&l)||k&&!g.length;if(f&&!c){md(l)&&(g=_ds.Vb(g),l=jd(l,b,e),
b=_ds.hd(a,b,d,g));f=g;c=l;for(n=0;n<f.length;n++)l=f[n],p=gd(l),l!==p&&(f[n]=p);c=$b(c,8,!0);c=$b(c,16,!f.length);(0,_ds.Yb)(f,c);l=c}md(l)||(f=l,k?l=$b(l,!g.length||16&l&&(!m||32&l)?2:2048,!0):e||(l=$b(l,32,!1)),l!==f&&(0,_ds.Yb)(g,l),k&&Object.freeze(g));h&&md(l)&&(g=_ds.Vb(g),l=jd(l,b,e),(0,_ds.Yb)(g,l),_ds.hd(a,b,d,g));return g};jd=ud=
_ds.wd=
zd=
_ds.Ad=_ds.Dd=_ds.Ed=_ds.Fd=_ds.Gd=_ds.Hd=_ds.Id=
_ds.Jd=_ds.Kd=
_ds.Ld=
_ds.Nd=_ds.Od=
_ds.Pd=
$d=
Yd=Zd=ce=
_ds.fe=_ds.he=_ds.je=
_ds.ke=_ds.le=function(a,b){b=_ds.ke(b);void 0!==b&&(a.href=b)};_ds.ne=_ds.pe=
_ds.oe=_ds.re=_ds.se=
_ds.ue=_ds.ve=_ds.we=_ds.t=ye=ze=
Ae=Be=_ds.De=function(a){return Ce.Ue(a)};_ds.Fe=Ge=
Ie=Ke=Me=
Ne=_ds.Qe=_ds.Re=_ds.v=
Te="function"==typeof Object.defineProperties?Object.defineProperty:Ue=Ve=Ue(this);
We=We("Promise.prototype.finally",;
We("Promise.allSettled",;
We("Object.fromEntries",;var Xe=We("Array.prototype.at",function(a){return a?a:Xe});
var Ye=function(a){return a?a:Xe};We("Int8Array.prototype.at",Ye);We("Uint8Array.prototype.at",Ye);We("Uint8ClampedArray.prototype.at",Ye);We("Int16Array.prototype.at",Ye);We("Uint16Array.prototype.at",Ye);We("Int32Array.prototype.at",Ye);We("Uint32Array.prototype.at",Ye);We("Float32Array.prototype.at",Ye);We("Float64Array.prototype.at",Ye);We("String.prototype.at",;
We("Array.prototype.flat",;
We("String.prototype.replaceAll",;
We("Array.prototype.flatMap",;var af,cf,df,ff,gf,nf;_ds.Ze=_ds.Ze||{};_ds.r=this||self;af=_ds.$e=_ds.nc=_ds.pb=
_ds.bf=_ds.ef=cf="closure_uid_"+(1E9*Math.random()>>>0);df=0;ff=
gf=_ds.hf=
_ds.jf=_ds.kf=_ds.lf=
_ds.mf=nf=function(a){return a};var of={UNKNOWN:0,HD:1,oC:6,mC:8,uC:12,vC:14,wC:17,BC:18,FC:21,HC:25,Ez:37,JC:38,Pz:40,yA:45,jz:47,ey:50,Zy:52,Sy:62,gA:63,tB:66,jB:70,Ny:73,RA:74,mz:75,qB:76,cA:77,eA:80,Ty:81,sA:82,Xz:83,gB:85,vz:87,Sz:89,lB:90,Tz:91,dA:92,gz:93,iD:94,Wz:95,fz:96,uB:97,Oy:98,Qy:99,GC:100,Oz:101,Yz:102,pB:103,gD:104,zz:105,iz:106,Mz:107,Cz:108,cB:109,wz:110,Jz:111,KC:112,rB:113,Dz:114,Fz:116,wA:117,rA:118,Uz:119,kB:120,sC:121,sB:122,yC:123,nC:124,nA:125,WA:126,Nz:127,tC:128,HA:129,IA:130,Iz:131,lA:132,Py:133,hA:134,
Qz:135,xA:136,Ry:137,jD:138,YA:139,qC:140,lC:141,FA:142,pA:143,aB:144,cz:145,OA:146,iA:147,oA:148,mB:149,Bz:150,sz:151,jA:152,Hz:154,lz:155,DC:156,zC:157,fA:158,Gz:159,Vy:160,nz:161,Az:162,rC:163,oB:164,qz:166,UB:167,rz:168,mA:169,kA:170,Vz:171,Lz:172,nB:173,KA:174,dB:175,eB:176,XA:177,fB:178,pC:179,xC:180,oz:181,yz:182,ez:183,ly:184,hB:185,Zz:186,tA:187,pz:188,xz:189,vA:190,Wy:191,bz:192,qA:193,jC:194,Rz:195,bB:196,Kz:197,kC:198,uA:200,aA:202,DA:203,JA:204,iB:205,bA:206,kz:207,zA:208,AA:209};_ds.mf(_ds.aa,Error);_ds.aa.prototype.name="CustomError";var pf;_ds.mf(_ds.la,_ds.aa);_ds.la.prototype.name="AssertionError";var uf,vf,wf,xf,yf,zf,tf,Bf;_ds.qf=_ds.rf=_ds.sf=String.prototype.trim?
_ds.Af=uf=/&/g;vf=/</g;wf=/>/g;xf=/"/g;yf=/'/g;zf=/\x00/g;tf=/[\x00&<>"']/;_ds.va=
_ds.Cf=
Bf=_ds.x=_ds.y=var ta=af(610401301,!1),Df=af(572417392,!0);var Ef;Ef=_ds.r.navigator;_ds.ua=Ef?Ef.userAgentData||null:null;var cb;cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:_ds.Ff=Array.prototype.forEach?
_ds.vb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:_ds.Gf=Array.prototype.some?var Hf=Hf[" "]=function(){};_ds.If=var Xf,Yf,cg;_ds.Jf=Ha();_ds.Kf=_ds.Ia();_ds.Lf=_ds.Aa("Edge");_ds.Mf=_ds.Lf||_ds.Kf;_ds.Nf=_ds.Aa("Gecko")&&!(_ds.va(_ds.ra().toLowerCase(),"webkit")&&!_ds.Aa("Edge"))&&!(_ds.Aa("Trident")||_ds.Aa("MSIE"))&&!_ds.Aa("Edge");_ds.Of=_ds.va(_ds.ra().toLowerCase(),"webkit")&&!_ds.Aa("Edge");_ds.Pf=_ds.Of&&_ds.Aa("Mobile");_ds.Qf=_ds.Ya();_ds.Rf=_ds.$a();_ds.Sf=_ds.Va();_ds.Tf=Wa();_ds.Uf=_ds.Aa("iPad");_ds.Vf=_ds.Aa("iPod");_ds.Wf=_ds.Xa();Xf=
a:{var Zf="",$f=);$f&&(Zf=$f?$f[1]:"");if(_ds.Kf){var ag=Xf();if(null!=ag&&ag>parseFloat(Zf)){Yf=String(ag);break a}}Yf=Zf}_ds.bg=Yf;if(_ds.r.document&&_ds.Kf){var dg=Xf();cg=dg?dg:parseInt(_ds.bg,10)||void 0}else cg=void 0;_ds.eg=cg;_ds.fg=Ka();_ds.gg=Wa()||_ds.Aa("iPod");_ds.hg=_ds.Aa("iPad");_ds.ig=_ds.Pa();_ds.jg=La();_ds.kg=_ds.Na()&&!_ds.Xa();var Ab,lg,Eb,mg,zb;Ab={};lg=null;_ds.ng=Eb=
mg=
zb=var Hb="undefined"!==typeof Uint8Array,yb=!_ds.Kf&&"function"===typeof btoa,Fb=/[-_.]/g,Cb={"-":"+",_:"/",".":"="},Kb={};var og,vd=pg=qg=Pc=Oc=class{var yd=!Df,xd=!Df;_ds.Ob=0;_ds.Pb=0;var rg;rg="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;var sg;_ds.ac=rg?sg=rg?_ds.Xb=rg?a=>a[rg]|0:_ds.ed=rg?a=>a[rg]:_ds.Yb=rg?var Fc,gc,tg,Zc,ug,Rc,Qc,vg,wg;Fc={};gc={};Zc=!Df;ug=[];(0,_ds.Yb)(ug,55);_ds.Mc=Object.freeze(ug);_ds.Uc=0;vg=class{};wg=class{};Object.freeze(new vg);Object.freeze(new wg);_ds.lc=var pc=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;var Hc;_ds.xg=_ds.od=_ds.yg=_ds.zg=
_ds.Ag=_ds.Bg=_ds.Cg=_ds.Dg=function(a,b,c){a=a.jb;const d=(0,_ds.ed)(a);return td(a,d,b,c,!1,!(2&d))};
_ds.Eg=_ds.Fg=
_ds.Gg=
_ds.Hg=function(a,b,c,d,e){const f=a.jb,g=(0,_ds.ed)(f);_ds.kc(g);b=td(f,g,c,b,!0);c=null!=d?d:new c;void 0!=e?b.splice(e,void 0,c):b.push(c);(0,_ds.Xb)(c.jb)&2?sg(b,8):sg(b,16);return a};_ds.Ig=_ds.Jg=_ds.Kg=
_ds.Lg=_ds.Mg=_ds.Ng=_ds.Og=function(a,b){return ud(_ds.Ig(a,b),0)};_ds.Pg=function(a,b,c="0"){return ud(_ds.Jg(a,b),c)};_ds.z=_ds.Qg=_ds.Sg=
_ds.Tg=function(a,b,c){return _ds.yg(a,b,null==c?c:_ds.oc(c))};_ds.Ug=_ds.Vg=function(a,b,c){return _ds.qd(a,b,_ds.uc(c),0)};_ds.Wg=_ds.B=_ds.Xg=_ds.Yg=_ds.Bd=_ds.Zg=
_ds.D=class{constructor(a,b){a:{null==a&&(a=Hc);Hc=void 0;if(null==a){var c=96;a=[];b&&(c=c&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();c=(0,_ds.Xb)(a);if(c&64){Qc&&delete a[Qc];break a}b:{var d=a;c|=64;const e=d.length;if(e){const f=e-1;if(ic(d[f])){c|=256;b=f-fc(c);if(1024<=b)throw Error();c=c&-16760833|(b&1023)<<14;break b}}if(b){b=Math.max(b,e-fc(c));if(1024<b)throw Error();c=c&-16760833|(b&1023)<<14}}}(0,_ds.Yb)(a,c)}this.jb=a}_ds.$g=0;_ds.D.prototype.Qe=Fc;_ds.D.prototype.toString=_ds.ah=var bh=class extends _ds.D{constructor(a){super(a)}getTenantId(){return _ds.Qg(this,1)}getLocale(){return _ds.z(this,2)}getInsecureHost(){return _ds.z(this,7)}},ch=_ds.Dd(bh);bh.Ya=[10,12,13,21,22];var dh=_ds.Dd(;_ds.fh=_ds.q=_ds.fh.prototype;_ds.q.qf=!1;_ds.q.isDisposed=function(){return this.qf};_ds.q.dispose=_ds.q.addOnDisposeCallback=_ds.q.Ra=var gh=function(a){this.id=a};gh.prototype.toString=function(){return this.id};_ds.hh=_ds.hh.prototype.stopPropagation=function(){this.g=!0};_ds.hh.prototype.preventDefault=var ih=);_ds.jh=_ds.Of?"webkitTransitionEnd":"transitionend";_ds.kh=_ds.mf(_ds.kh,_ds.hh);var lh={2:"touch",3:"pen",4:"mouse"};
_ds.kh.prototype.init=_ds.kh.prototype.stopPropagation=_ds.kh.prototype.preventDefault=var mh="closure_listenable_"+(1E6*Math.random()|0),nh=var oh=0;var ph=qh=var Md="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");var rh=rh.prototype.add=rh.prototype.remove=
var th=uh=vh=sh=var wh,xh,yh,Ch,Eh,Fh,Gh,Dh,Kh,Bh;wh="closure_lm_"+(1E6*Math.random()|0);xh={};yh=0;_ds.Ah=
Ch=
Eh=_ds.zh=_ds.Hh=
_ds.Ih=_ds.Jh=
Fh=Gh=Dh=Kh="__closure_events_fn_"+(1E9*Math.random()>>>0);Bh=_ds.Lh=new gh("devsite-analytics-observation");_ds.Mh=new gh("devsite-analytics-observation-unfiltered");_ds.Nh=new gh("devsite-analytics-observation-cloudtrack");_ds.Oh=new gh("devsite-analytics-timing");_ds.Ph=new gh("devsite-analytics-error");_ds.Qh=new gh("devsite-analytics-pageview");_ds.Rh=new gh("devsite-analytics-set-dimension");/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var Sh,Th,Vh;Sh=!!/^\s*class\s*\{\s*\}\s*$/.test(class{}.toString())||HTMLElement.es5Shimmed||void 0===_ds.r.Reflect||void 0===_ds.r.customElements||_ds.r.customElements.polyfillWrapFlushCallback||!1;_ds.Uh=Vh=!1;
_ds.Wh=_ds.Wh();var Xh={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var Yh,Zh=var ai;_ds.Sd=_ds.Sd.prototype.toString=function(){return this.g};_ds.Td=ai={};_ds.$h={};var ci;_ds.bi=_ds.te=function(a){return a instanceof _ds.bi&&a.constructor===_ds.bi?a.g:"type_error:TrustedResourceUrl"};ci={};_ds.Ee=function(a){const b=Zh();a=b?b.createScriptURL(a):a;return new _ds.bi(a,ci)};var di,ei,fi,gi,ee,ge;_ds.Qd=class{constructor(a){this.g=a}toString(){return this.g.toString()}};_ds.Rd=function(a){return a instanceof _ds.Qd&&a.constructor===_ds.Qd?a.g:"type_error:SafeUrl"};di=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;ei=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;_ds.ae=try{new URL("s://g"),fi=!0}catch(a){fi=!1}
gi=fi;_ds.hi=ee={};ge=new _ds.Qd("about:invalid#zClosurez",ee);var Wd,Vd,Ud,Xd;_ds.ii={};_ds.ki=function(a){return a instanceof _ds.ji&&a.constructor===_ds.ji?a.g:"type_error:SafeStyle"};_ds.mi=_ds.ji=class{constructor(a){this.g=a}toString(){return this.g.toString()}};
_ds.li=new _ds.ji("",_ds.ii);Wd=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");Vd=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");Ud=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g");Xd=/\/\*/;_ds.ni={};_ds.qi=_ds.oi=function(a){return a instanceof _ds.pi&&a.constructor===_ds.pi?a.g:"type_error:SafeStyleSheet"};_ds.pi=class{constructor(a){this.g=a}toString(){return this.g.toString()}};_ds.ri=new _ds.pi("",_ds.ni);var si,Bi,vi,xi,wi;si={};_ds.me=_ds.ui=_ds.xe=
_ds.zi=Bi=
_ds.yi=_ds.ti=vi=/^[a-zA-Z0-9-]+$/;xi={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};wi={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};_ds.Ai=new _ds.ti(_ds.r.trustedTypes&&_ds.r.trustedTypes.emptyHTML||"",si);_ds.Ci=_ds.xe("<br>");var be=de=[ce("data"),ce("http"),ce("https"),ce("mailto"),ce("ftp"),new be(],ie="function"===typeof URL,Di=["data:","http:","https:","mailto:","ftp:"];var qe;_ds.Ei=qe=var Fi;Fi={CB:0,WB:1,Xy:2,Yy:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};_ds.Gi=_ds.Hi=_ds.Ii=new Set("ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH".split(" "));var Ji=new _ds.Hi(new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ")),
new Map([["A",new Map([["href",{Yb:2}]])],["AREA",new Map([["href",{Yb:2}]])],["LINK",new Map([["href",{Yb:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{Yb:1}]])],["IMG",new Map([["src",{Yb:1}]])],["VIDEO",new Map([["src",{Yb:1}]])],["AUDIO",new Map([["src",{Yb:1}]])]]),new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")),
new Map([["dir",{Yb:3,conditions:new Map([["dir",new Set(["auto","ltr","rtl"])]])}],["async",{Yb:3,conditions:new Map([["async",new Set(["async"])]])}],["cite",{Yb:2}],["loading",{Yb:3,conditions:new Map([["loading",new Set(["eager","lazy"])]])}],["poster",{Yb:2}],["target",{Yb:3,conditions:new Map([["target",new Set(["_self","_blank"])]])}]]));var Pi,Ni,Oi,Qi,Ri,Ce;_ds.Mi=Pi=
Ni=
Oi=Qi=Ri=Ce=new Ri(Ji);_ds.Si=function(a){const b=new Set(a.g.j);b.add("class");a.g=new _ds.Hi(a.g.h,a.g.g,b,a.g.o);return a};_ds.Ti=_ds.Ui=_ds.Vi=_ds.Wi=function(a){"string"===typeof a&&(a=[a]);document.body.dispatchEvent(new CustomEvent("devsite-load-custom-elements",{bubbles:!0,detail:a}))};_ds.Xi=function(a,...b){a.Cb=_ds.pe(...b)};_ds.E=_ds.Yi=function(a,b,c=a){b instanceof _ds.Ei&&(b=b.toString());return c.getAttribute(b)};_ds.Zi=function(a,b,c=a){return null!==_ds.Yi(c,b)};
_ds.$i=_ds.F=class extends HTMLElement{onstructor(a){super();this.g=_ds.t;this.Cb=()=>{};a&&_ds.Wi(a)}connectedCallback(){}disconnectedCallback(){}_ds.F.prototype.dispatchTrackingEvent=_ds.F.prototype.Ha;_ds.F.prototype.updateContent=_ds.F.prototype.Pb;_ds.F.prototype.attributeChangedCallback=_ds.F.prototype.attributeChangedCallback;_ds.F.prototype.disconnectedCallback=_ds.F.prototype.disconnectedCallback;_ds.F.prototype.connectedCallback=_ds.F.prototype.connectedCallback;var cj,bj;_ds.aj=function(){return"devsite-panel"};cj=bj=
_ds.dj=_ds.dj.getTagName=_ds.aj;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}_ds.ej=_ds.Kf||_ds.Of;var gj;_ds.fj=gj=_ds.hj=_ds.ij=var jj,pj;jj=_ds.ij(;_ds.kj=_ds.lj=
_ds.nj=_ds.oj=pj=/^[\w+/_-]+[=]{0,2}$/;_ds.mj=_ds.qj=_ds.rj=_ds.rj.prototype.clone=function(){return new _ds.rj(this.x,this.y)};_ds.sj=_ds.rj.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};_ds.rj.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};_ds.rj.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
_ds.rj.prototype.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};_ds.tj=function(a,b){this.width=a;this.height=b};_ds.uj=_ds.q=_ds.tj.prototype;_ds.q.clone=function(){return new _ds.tj(this.width,this.height)};_ds.q.aspectRatio=_ds.q.isEmpty=_ds.q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_ds.q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_ds.q.round=_ds.q.scale=var wj,xj,zj,Fj;_ds.vj=_ds.yj=
wj=
xj=zj=/&([^;\s<&]+);?/g;_ds.Aj=_ds.Bj=String.prototype.repeat?
_ds.Cj=_ds.Dj=2147483648*Math.random()|0;_ds.Ej=Fj=
_ds.Gj=var Lj,Sj,Vj,ck,hk,jk,kk,mk;_ds.Jj=
_ds.Kj=_ds.Mj=
Lj={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};_ds.Oj=
_ds.Qj=_ds.Pj=_ds.Rj=_ds.Tj=
Sj=
Vj=_ds.Uj=
_ds.Nj=_ds.Wj=_ds.Xj=_ds.Yj=_ds.Zj=_ds.ak=_ds.bk=
_ds.dk=function(a){return void 0!==a.nextElementSibling?a.nextElementSibling:ck(a.nextSibling,!0)};_ds.ek=ck=_ds.Ij=_ds.fk=
_ds.gk=_ds.ik=hk=
jk={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};kk={IMG:" ",BR:"\n"};_ds.lk=_ds.nk=
mk=_ds.pk=
_ds.ok=_ds.qk=_ds.Hj=_ds.Hj.prototype.getElement=_ds.Hj.prototype.h=
_ds.Hj.prototype.createElement=_ds.rk=_ds.q=_ds.Hj.prototype;_ds.q.Yi=_ds.q.appendChild=_ds.q.append=_ds.q.Vr=_ds.Wj;_ds.q.Wr=_ds.Zj;
_ds.q.contains=var tk,uk,vk,wk,Ak,Bk,Dk;_ds.sk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");tk=
uk=vk=wk=
_ds.xk=_ds.yk=_ds.zk=Ak=Bk=/#|$/;
_ds.Ck=function(a){var b=window.location.href,c=b.search(Bk),d=Ak(b,0,a,c);if(0>d)return null;var e=b.indexOf("&",d);if(0>e||e>c)e=c;d+=a.length+1;return decodeURIComponent(b.slice(d,-1!==e?e:0).replace(/\+/g," "))};Dk=/[?&]($|#)/;_ds.Ek=var Ik,Lk,Wk,Mk,Ok,Nk,Rk,Pk,Kk,Xk;
_ds.Fk=
_ds.Fk.prototype.toString=_ds.Fk.prototype.clone=
_ds.Gk=_ds.Hk=_ds.Fk.prototype.getPath=_ds.Fk.prototype.setPath=Ik=_ds.Sk=_ds.Tk=
_ds.Uk=_ds.Jk=Lk=Wk=Mk=/[#\/\?@]/g;Ok=/[#\?:]/g;Nk=/[#\?]/g;Rk=/[#\?@]/g;Pk=/#/g;
Kk=Xk=Kk.prototype.add=Kk.prototype.remove=
Kk.prototype.clear=Kk.prototype.isEmpty=_ds.Zk=_ds.q=Kk.prototype;_ds.q.forEach=_ds.q.tm=
_ds.q.xm=_ds.q.set=_ds.q.get=
_ds.q.toString=_ds.q.clone=
var Yk=Qk=var $k,al,bl,cl,He,jl,kl,ol,Je,wl;$k=[".c.googlers.com",".corp.google.com",".proxy.googlers.com"];al="developer.android.com developers.google.com cloud.google.com tensorflow.org firebase.google.com google.dev localhost".split(" ");bl=/^[a-z]+(__)[a-z_]+/i;cl=/^(experiments\.).*/i;_ds.dl=0;He={};_ds.G=_ds.el=
_ds.fl=
_ds.gl=
_ds.hl=_ds.il=
_ds.ll=
_ds.nl=
jl=kl=_ds.pl=
ol=_ds.ql=
_ds.rl=_ds.sl=
_ds.ml=Je=_ds.tl=
_ds.vl=wl=_ds.xl=
_ds.yl=_ds.zl=_ds.ul=
_ds.Al=
_ds.Bl=_ds.Cl=var Le=_ds.Lh.toString(),El=Dl=0;var Hl,Il;_ds.Fl="code-sample data-sample ds-selector-dropdown ds-selector-tabs kd-tabbed-horz kd-tabbed-vert".split(" ");_ds.Gl=(0,_ds.t)`is-upgraded`;Hl="aar apk application avi bat bmp bundle c cdl64 chm cpp cs css csv db dlu doc docx dtd dylib eot eps exe flac flv gg gif go gz ico ipynb jar java jnlp jpeg jpg js json kml kmz kt log m4a manifest markdown md5 mf mjs mll mov mp3 mp4 ndoc nexe nmf odb odc odf odg odi odm odp ods odt ogg ogv otg oth otp ots ott pdf pexe php pl plist png ppt pptx properties proto psd py raw rnc rpm rss sh sha1 snippet sql step svg tar tgz ts tsv ttf txt unitypackage vb vtt war wasm wav webm webp wiki woff woff2 wsdd wsdl xlsx xml xsd xsl zip".split(" ");
Il=[/^https:\/\/cloud.google.com\/blog.*/,/\.mp4$/,/^https:\/\/uberproxy.*/,/livereload(.js)?$/,/clients[0-9]+\.google.com/,/.*\/_d\/refreshtoken/,/.*\/_d\/refreshtokenresponse/];var Kl=function(a){var b=new Jl;return _ds.Yg(b,1,a)},Jl=Ll=_ds.Dd(Jl);var Ol=Pl=Ql=Rl=Ml=Nl=Sl=_ds.Pe=var Oe=null;_ds.Tl=_ds.mf(_ds.Tl,_ds.fh);_ds.Tl.prototype[mh]=!0;_ds.q=_ds.Tl.prototype;_ds.q.Nn=_ds.q.addEventListener=function(a,b,c,d){_ds.Ah(this,a,b,c,d)};_ds.q.removeEventListener=
_ds.q.dispatchEvent=
_ds.q.Ra=_ds.q.listen=_ds.q.unlisten=var Ul=var Vl=var Wl,Xl=var Zl=Yl=new Vl(,$l=var am,bm=!1,cm=new Zl,em=dm=fm=_ds.gm=var jm,km,lm;_ds.im=jm=jm.prototype.reset=km=new Vl(;lm=
_ds.mm=_ds.om=_ds.im.prototype.then=_ds.im.prototype.$goog_Thenable=!0;_ds.im.prototype.v=_ds.im.prototype.catch=_ds.im.prototype.v;
_ds.im.prototype.cancel=
var rm=vm=pm=_ds.im.prototype.ua=function(a){this.g=0;hm(this,2,a)};_ds.im.prototype.ra=
var hm=wm=um=sm=_ds.im.prototype.oa=
var tm=ym=xm=zm=_ds.na,qm=_ds.mf(qm,_ds.aa);qm.prototype.name="cancel";var nm=_ds.Am=_ds.mf(_ds.Am,_ds.Tl);_ds.q=_ds.Am.prototype;_ds.q.Yh=!1;_ds.q.yd=null;_ds.q.zx=
_ds.q.start=_ds.q.stop=_ds.q.Ra=
_ds.Bm=_ds.Cm=_ds.mf(_ds.Cm,_ds.fh);_ds.q=_ds.Cm.prototype;_ds.q.Ta=_ds.q.stop=
_ds.q.resume=_ds.q.Ra=_ds.q.Xr=var Em;_ds.H=_ds.mf(_ds.H,_ds.fh);var Dm=[];_ds.H.prototype.listen=_ds.Fm=
Em=_ds.H.prototype.unlisten=
_ds.I=_ds.H.prototype.Ra=_ds.H.prototype.handleEvent=var Gm=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};_ds.q=Gm.prototype;_ds.q.clone=_ds.q.contains=
_ds.q.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};_ds.q.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};_ds.q.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
_ds.q.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.right*=a;this.top*=b;this.bottom*=b;return this};_ds.Hm=_ds.q=_ds.Hm.prototype;_ds.q.clone=_ds.q.contains=
_ds.q.distance=_ds.q.getSize=_ds.q.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_ds.q.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_ds.q.round=_ds.q.scale=var Km,Om,Sm,Ym,$m,an,cn,Rm;_ds.Jm=Km={};_ds.Im=
_ds.Lm=_ds.Mm=_ds.Nm=
Om=
_ds.Qm=
_ds.Tm=_ds.Pm=
_ds.Um=_ds.Vm=Sm=
_ds.Wm=_ds.Xm=Ym=_ds.Nf?"MozUserSelect":_ds.Of||_ds.Lf?"WebkitUserSelect":null;_ds.Zm=
$m=an=
_ds.bn=cn={thin:2,medium:4,thick:6};
Rm=var en=gn=ln=fn=jn=async function(a){await _ds.tl();a.Cb.Ta()},kn=nn=hn=on=pn=qn=mn=[0,25,50,75,100],dn=[(0,_ds.t)`fixed`,(0,_ds.t)`visually-hidden`,(0,_ds.t)`offset`];var rn,sn,tn;rn=RegExp("( ?(and|or) ?)?\\((prefers-color-scheme: ?)(.+?)\\)( ?(and|or) ?)?","g");sn=new Map([["dark",null],["device","dark"],["light","none"]]);
tn=
_ds.un=_ds.vn=var wn;_ds.xn=_ds.yn=_ds.zn=wn=_ds.An=_ds.Dd(wn);var Bn;Bn=_ds.Cn=_ds.Dn=_ds.mf(_ds.Dn,_ds.Tl);_ds.Dn.prototype.getSize=_ds.Dn.prototype.Ra=_ds.Dn.prototype.v=var Gn=In=Hn=En=Jn=Kn=Fn=Ln=Mn=Nn=Nn.prototype.handleLinkClicksInParent=Nn.prototype.fq;var On=var Pn=new Map([["a.lb","devsite-lightbox"],[`.${_ds.Fl.join(",.")}`,"devsite-selector"],[".devsite-acknowledgement-link","devsite-wall-acknowledgement"],[".devsite-charts-table","devsite-chart"],[".devsite-dialog","devsite-dialog"],[".devsite-filter","devsite-filter"],[".devsite-multiple-choice","devsite-multiple-choice"],[".devsite-tracking-question","devsite-tracking-question"],[".expandable","devsite-expandable"],[".google-feedback","devsite-feedback"],[".kd-select","devsite-select"],["iframe.devsite-embedded-youtube-video",
"devsite-video"],["iframe.inherit-locale","devsite-iframe"],["pre:not([is-upgraded])","devsite-code"],["section#try-it,:not(devsite-apix) > .devsite-apix,:not(#try-it) > #embedded-explorer,:not(#try-it):not(.devsite-apix):not(devsite-concierge-apix) > .apis-explorer","devsite-apix"],["var.edit, pre var, var[scope]","devsite-var"],[".devsite-vplus","devsite-vplus"],[".replaceable-credential","devsite-credentials-dialog"],[".devsite-api-getstarted-widget","devsite-api-getstarted"],[".chrome-policies",
"cloudx-chrome-policies"],[".cloud-carousel","cloudx-carousel"],[".cloud-collapse","cloudx-collapse"],[".cloud-jump-menu","cloudx-jump-menu"],[".cloud-popup-instance:not(g)","cloudx-popup"],[".cloud-select-dropdown","cloudx-select-dropdown"],[".cloud-table-wrapper","cloudx-table"],[".cloud-tabs","cloudx-tabs"]]),Qn=Rn=Sn=Tn=Vn=Wn=Un=Xn=var Yn=null,Zn=$n=_ds.ao=_ds.bo=function(a){if(!_ds.r.navigator.cookieEnabled)return!1;if(!a.isEmpty())return!0;a.set("TESTCOOKIESENABLED","1",{ud:60});if("1"!==a.get("TESTCOOKIESENABLED"))return!1;a.remove("TESTCOOKIESENABLED");return!0};_ds.q=_ds.ao.prototype;
_ds.q.set=
_ds.q.get=_ds.q.remove=_ds.q.tm=function(){return co(this).keys};_ds.q.xm=_ds.q.isEmpty=
_ds.q.clear=var co=var eo=function(){};eo.prototype.next=function(){return fo};var fo={done:!0,value:void 0};eo.prototype.Ig=var jo=go=ho=
io=var ko=function(){};var lo=function(){};_ds.mf(lo,ko);lo.prototype.Ho=lo.prototype[Symbol.iterator]=lo.prototype.clear=_ds.mo=_ds.mf(_ds.mo,lo);_ds.q=_ds.mo.prototype;_ds.q.isAvailable=
_ds.q.set=_ds.q.get=_ds.q.remove=_ds.q.Ho=
_ds.q.Ig=_ds.q.clear=_ds.q.key=
var no=_ds.oo=_ds.mf(_ds.oo,_ds.mo);var po,qo,ro;po=qo=
ro=
_ds.so=class{constructor(){this.g=new Map;Yn||(Yn=new $n);this.o=Yn;this.j=new _ds.oo;this.h=new _ds.ao;this.g.set("_mkto_trk",{purpose:1,fb:2});this.g.set("cloudshell",{purpose:1,fb:0});this.g.set("CLOUDX_TAG_HISTORY",{purpose:1,fb:2,options:{ud:2592E3,path:"/"}});this.g.set("devguide_state",{purpose:1,fb:1});this.g.set("developer-profile",{purpose:1,fb:1,oh:!0});this.g.set("devsite-app-controller-flag-cache-time",{purpose:1,fb:1});this.g.set("devsite-app-controller-flag-cache-value",{purpose:1,
fb:1});this.g.set("devsite-appearance",{purpose:1,fb:1});this.g.set("devsite-author-page-insights",{purpose:1,fb:0});this.g.set("devsite-codelabs",{purpose:1,fb:1,oh:!0});this.g.set("devsite-content-excellence",{purpose:1,fb:0});this.g.set("DEVELOPER_PROFILE_CALLOUT_DISMISSED",{purpose:1,fb:2,options:{ud:2592E3,path:"/"}});this.g.set("devsite-device",{purpose:1,fb:1});this.g.set("devsite-eu-cookie",{purpose:1,fb:1});this.g.set("devsite-feature-tooltip",{purpose:1,fb:1,oh:!0});this.g.set("devsite-selector",
{purpose:1,fb:1});this.g.set("devsite_skip_cache",{purpose:1,fb:2,options:{ud:31536E3,path:"/"}});this.g.set("devsite-snackbar",{purpose:1,fb:1});this.g.set("devsite_speed_dial",{purpose:1,fb:2,options:{ud:31536E3,path:"/"}});this.g.set("devsite_wall_acks",{purpose:1,fb:2,options:{ud:15552E3,path:"/"}});this.g.set("devsite-var",{purpose:0,fb:0});this.g.set("devsite-version-selector",{purpose:1,fb:1});this.g.set("FACET_EXPERIMENT_IDS_DEVSITE",{purpose:1,fb:2});this.g.set("django_language",{purpose:1,
fb:2,options:{ud:15552E3,path:"/"}});this.g.set("firebase-utm",{purpose:1,fb:0});this.g.set("language_preference",{purpose:1,fb:3});this.g.set("nav-buttons",{purpose:1,fb:1});this.g.set("pref_dark-code",{purpose:1,fb:1});this.g.set("temp_badges",{purpose:1,fb:1});this.g.set("__utmz",{purpose:1,fb:2})}async set(a,b,c){await DevsiteApp.whenReady();const d=this.g.get(a);d&&await DevsiteApp.canAccessData(d.purpose)&&(a=b?`${a}-${b}`:a,d.oh&&await po(this,d,b),await qo(this,d,a,c))}async get(a,b){await DevsiteApp.whenReady();
const c=this.g.get(a);if(!c)return"";if(await DevsiteApp.canAccessData(c.purpose)){const d=b?`${a}-${b}`:a;if(c.oh){const e=await ro(this,c,b);if(e)return await this.set(a,b,e),e}return await ro(this,c,d)}return""}async remove(a,b){await DevsiteApp.whenReady();const c=this.g.get(a);c&&await DevsiteApp.canAccessData(c.purpose)&&(a=b?`${a}-${b}`:a,c.oh&&await po(this,c,b),await po(this,c,a))}};var to=uo=(new El("app.whenReady-performance")).start(),wo=xo=Do=Eo=async function(a){const b=new _ds.oo;if(b.isAvailable()){var c=Date.now()-6048E5;for(let e=0;e<b.Ho();e++){var d=b.key(e);if(d&&d.startsWith("devsite-app-controller-flag-cache-time")){d=d.substring(39);const f=Number(await a.storage.get("devsite-app-controller-flag-cache-time",
d));0<f&&f<c&&(await a.storage.remove("devsite-app-controller-flag-cache-time",d),await a.storage.remove("devsite-app-controller-flag-cache-value",d))}}}},yo=zo=Ao=async function(a){var b=_ds.G();b.searchParams.set("partial","1");var c=await a.storage.get("language_preference","");if(c){var d=new URL(b.href);d.searchParams.set("hl",c)}if(c=
await window.caches.open("devsite.pwa_RUNTIME_v2.1")){if(b=await c.match(b.href),!b&&d&&(b=await c.match(d.href)),b||(b=await c.match("/_static/offline?partial=1")),b){d=await b.text();let e;try{e=dh(d)}catch(f){}e?(await Jo(a,e),document.documentElement.removeAttribute("cached"),await Co(a),await Bo(a)):Ko()}}else Ko()},Bo=Co=Go=Lo=Io=Jo=Ko=Fo=Oo=No=Po=Qo=Ro=function(a=""){document.documentElement.setAttribute("dir",a)},So=
To=Vo=Mo=Uo=
Wo=Yo=class{constructor(a,b=new Map){this.config=a;this.Ma=b;this.oa=new MutationObserver(;this.ua=new _ds.Cm(400);this.Pa=new _ds.Cm(16);this.o=new Map;this.Xb=null;
this.eventHandler=new _ds.H;this.v=new Map;this.va=this.Fa=null;this.ea=new _ds.rj(0,0);this.Aa=[];this.Ja=this.h=!1;this.g=this.ra=null;this.ma=0;this.xa=this.La=null;this.Ca=!1;this.qa=this.j=null;this.storage=new _ds.so;this.Da=[];if(this.config.getInsecureHost())try{this.Fa=new URL(this.config.getInsecureHost())}catch(c){console.warn("Invalid insecure host",this.config.getInsecureHost())}"IntersectionObserver"in _ds.Rj()&&(this.Xb=new IntersectionObserver({threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}));this.Da=[`${_ds.r.DevsiteAppTenantCustomized?_ds.z(this.config,6):_ds.z(this.config,5)}/js/devsite_app_custom_elements_module.js`]}FlagAccess(a,b=0){const c=`${a}`,d=(new Date).getTime();if(0<b){var e=Number(await this.storage.get("devsite-app-controller-flag-cache-time",c));if(d-e<=1E3*b)return"true"===await this.storage.get("devsite-app-controller-flag-cache-value",c)}e=this.getEnv();var f=this.getConfig();f=_ds.nd(f,13,sc,2);a:{var g=_ds.G();g=new _ds.Fk(g.href);const h=Object.keys(of);if("PROD"!==e)for(const k of h)if(of[k]===
a&&(e=_ds.Tk(g,k),void 0!==e)){a="true"===e;break a}a=Array.from(f).includes(a)}0<b&&(await this.storage.set("devsite-app-controller-flag-cache-time",c,`${d}`),await this.storage.set("devsite-app-controller-flag-cache-value",c,`${a}`));Eo(this);return a}async hasMendelFlagAccess(a,b,c=0){const d=`${a}${b}`,e=(new Date).getTime();if(0<c){var f=Number(await this.storage.get("devsite-app-controller-flag-cache-time",d));if(e-f<=1E3*c)return"true"===await this.storage.get("devsite-app-controller-flag-cache-value",
d)}f=this.getEnv();var g=this.getConfig();g=_ds.nd(g,22,_ds.Ec,2);a:{var h=_ds.G();h=new _ds.Fk(h.href);a=a+"__"+b;if("PROD"!==f&&(b=_ds.Tk(h,a),void 0!==b)){a="true"===b;break a}a=Array.from(g).includes(a)}0<c&&(await this.storage.set("devsite-app-controller-flag-cache-time",d,`${e}`),await this.storage.set("devsite-app-controller-flag-cache-value",d,`${a}`));Eo(this);return a}etConfig(){return this.config}etTenantId(){return this.config.getTenantId()}In(){const a=await Wo(this);a&&await a.signIn()}async signOut(){const a=await Wo(this);a&&await a.signOut()}nc areCookiesAccepted(){const a=await this.getCookieNotificationBarElement();return a?await a.hasAccepted():!1};Yo.prototype.fetchPageTitle=Yo.prototype.fetchPageTitle;
Yo.prototype.fetchPage=Yo.prototype.fetchPage;Yo.prototype.reload=Yo.prototype.reload;Yo.prototype.scrollToAnchor=Yo.prototype.scrollToAnchor;Yo.prototype.showLoading=Yo.prototype.showLoading;var Xo="onpointerover"in window?"pointerover":"mouseover",vo=["rec"];var Se=null,Zo=_ds.lf("DevsiteAppInit",function(a,b){let c;var d=null!=(c=Se)?c:Zo(a,b);d.La||(d.La=Do(d,_ds.nd(d.config,10,_ds.Ec,2)))});_ds.lf("DevsiteAppFrameboxInit",;})(_ds_www);
