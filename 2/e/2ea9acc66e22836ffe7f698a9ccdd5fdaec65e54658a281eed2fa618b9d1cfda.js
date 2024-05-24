var _ds_www={};(function(_ds){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 SPDX-License-Identifier: Apache-2.0
*/
var za,Ba,Da,Ka,Pa,Ya,hb,jb,mb,tb,Bb,Db,Gb,Ib,Jb,Lb,Mb,Rb,Tb,Nb,Yb,$b,bc,cc,dc,ec,fc,hc,ic,jc,sc,xc,yc,wc,Ec,Gc,Ic,Jc,Kc,Sc,Tc,Wc,Vc,Yc,Xc,$c,bd,ed,fd,hd,id,od,kd,md,nd,td,ld,wd,ae,Zd,$d,de,le,Ce,De,Ee,Fe,Ke,Me,Oe,Qe,Re,Xe,Ye,Ze,$e;_ds.aa=
_ds.ba=_ds.da=_ds.ea=za=_ds.Aa=Ba=Da=
_ds.Ja=Ka=_ds.Qa=Pa=
_ds.Ra=_ds.Sa=_ds.Xa=function(){return _ds.Sa()?"Android"===_ds.na.platform:_ds.Aa("Android")};Ya=_ds.$a=_ds.ab=function(){return _ds.Sa()?"macOS"===_ds.na.platform:_ds.Aa("Macintosh")};
_ds.bb=_ds.cb=_ds.db=_ds.fb=_ds.gb=hb=
_ds.ib=_ds.kb=jb=mb=
_ds.ob=_ds.ub=_ds.lb=tb=
_ds.vb=_ds.xb=
Bb=Db=Gb=Ib=Jb=Lb=
Mb=_ds.Qb=
_ds.Sb=Rb=
Tb=
_ds.Ub=
Nb=_ds.Vb=Yb=$b=bc=cc=function(a,b){(0,_ds.Xb)(b,(a|0)&-14591)};dc=ec=fc=
hc=ic=jc=_ds.kc=_ds.mc=
_ds.oc=_ds.qc=_ds.rc=sc=_ds.tc=
_ds.uc=_ds.vc=_ds.zc=
_ds.Ac=xc=_ds.Bc=
yc=wc=_ds.Cc=_ds.Dc=
Ec=Gc=Ic=Jc=
_ds.Mc=
Kc=
Sc=Tc=Wc=
Vc=Yc=
Xc=$c=
bd=function(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&(0,_ds.Wb)(a)&1?void 0:f&&(0,_ds.Wb)(a)&2?a:_ds.ad(a,b,c,void 0!==d,e,f);else if(ic(a)){const g={};for(let h in a)g[h]=bd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}};_ds.ad=
_ds.dd=function(a){a.ue===Fc?a=_ds.cd(a,_ds.ad(a.gb,_ds.dd,void 0,void 0,!1,!1),!0):a instanceof Nc?(a=a.g||"",a="string"===typeof a?a:new Uint8Array(a)):a=Ib(a)?new Uint8Array(a):a;return a};ed=
fd=function(a,b,c=dc){if(null!=a){if(Hb&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=(0,_ds.Wb)(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(0,_ds.Xb)(a,(d|34)&-12293):_ds.ad(a,fd,d&4?dc:c,!0,!1,!0)}a.ue===Fc&&(c=a.gb,d=(0,_ds.gd)(c),a=d&2?a:Ic(a.constructor,hd(c,d,!0)));return a}};hd=
id=_ds.jd=
od=kd=md=nd=
_ds.qd=_ds.rd=
td=_ds.ud=
_ds.vd=ld=wd=
_ds.yd=
_ds.cd=
_ds.Bd=_ds.Dd=_ds.Ed=_ds.Fd=_ds.Gd=_ds.Hd=_ds.Id=_ds.Kd=
_ds.Ld=
_ds.Md=
_ds.Od=_ds.Pd=
_ds.Qd=
ae=
Zd=$d=de=
_ds.ge=_ds.ie=_ds.ke=le=
_ds.me=function(a,b){b=le(b);void 0!==b&&(a.href=b)};_ds.oe=_ds.qe=
_ds.pe=
_ds.ue=function(a,b){a.removeAttribute("srcdoc");if(b instanceof _ds.se)throw new te;var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(let d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);b=le(b);void 0!==b&&(a.src=b)};_ds.ve=
_ds.we=_ds.ye=_ds.ze=_ds.Ae=_ds.u=
Ce=De=Ee=Fe=_ds.He=_ds.Je=
Ke=Me=Oe=
Qe=Re=_ds.Ue=_ds.Ve=_ds.v=
Xe="function"==typeof Object.defineProperties?Object.defineProperty:Ye=Ze=Ye(this);
$e=$e("Promise.prototype.finally",;
$e("Promise.allSettled",;$e("Array.prototype.flat",;
$e("Object.fromEntries",;var af=$e("Array.prototype.at",function(a){return a?a:af});
var bf=function(a){return a?a:af};$e("Int8Array.prototype.at",bf);$e("Uint8Array.prototype.at",bf);$e("Uint8ClampedArray.prototype.at",bf);$e("Int16Array.prototype.at",bf);$e("Uint16Array.prototype.at",bf);$e("Int32Array.prototype.at",bf);$e("Uint32Array.prototype.at",bf);$e("Float32Array.prototype.at",bf);$e("Float64Array.prototype.at",bf);$e("String.prototype.at",;
$e("String.prototype.replaceAll",;
$e("Array.prototype.flatMap",;var ef,gf,hf,kf,lf,rf;_ds.cf=_ds.cf||{};_ds.t=this||self;ef=_ds.df=_ds.nc=_ds.rb=
_ds.ff=_ds.jf=gf="closure_uid_"+(1E9*Math.random()>>>0);hf=0;kf=
lf=_ds.mf=
_ds.nf=_ds.of=_ds.pf=
_ds.qf=rf=function(a){return a};var sf={UNKNOWN:0,QE:1,qD:6,oD:8,wD:12,xD:14,yD:17,HD:18,KD:21,ND:25,FA:37,OD:38,JB:45,jA:47,lz:50,cA:52,Vz:62,pB:63,oC:66,fC:70,Qz:73,UB:74,mA:75,lC:76,lB:77,nB:80,Wz:81,CB:82,gB:83,dC:85,tA:87,bB:89,hC:90,cB:91,mB:92,hA:93,kE:94,fB:95,gA:96,pC:97,Rz:98,Tz:99,LD:100,XA:101,hB:102,kC:103,iE:104,xA:105,iA:106,RA:107,AA:108,ZB:109,uA:110,PD:112,mC:113,DA:114,HA:116,HB:117,AB:118,dB:119,gC:120,uD:121,nC:122,ED:123,pD:124,wB:125,VB:126,WA:127,vD:128,PB:129,QB:130,JA:131,uB:132,Sz:133,qB:134,YA:135,IB:136,
Uz:137,mE:138,XB:139,sD:140,nD:141,OB:142,yB:143,eA:145,TB:146,rB:147,xB:148,iC:149,zA:150,sA:151,sB:152,lA:155,JD:156,FD:157,oB:158,IA:159,Yz:160,nA:161,yA:162,tD:163,jC:164,qA:166,UC:167,rA:168,vB:169,tB:170,eB:171,OA:172,RB:174,aC:175,bC:176,WB:177,cC:178,rD:179,zD:180,oA:181,wA:182,fA:183,eC:185,iB:186,DB:187,pA:188,vA:189,FB:190,Zz:191,dA:192,zB:193,lD:194,aB:195,YB:196,KA:197,mD:198,EB:200,jB:202,NB:203,kB:206,kA:207,KB:208,MB:209};_ds.qf(_ds.aa,Error);_ds.aa.prototype.name="CustomError";var tf;_ds.qf(_ds.ba,_ds.aa);_ds.ba.prototype.name="AssertionError";var yf,zf,Af,Bf,Cf,Df,xf,Ff;_ds.uf=_ds.vf=_ds.wf=String.prototype.trim?
_ds.Ef=yf=/&/g;zf=/</g;Af=/>/g;Bf=/"/g;Cf=/'/g;Df=/\x00/g;xf=/[\x00&<>"']/;_ds.ta=
_ds.Gf=
Ff=_ds.x=_ds.y=var ka=ef(610401301,!1),Hf=ef(572417392,!0);var If;If=_ds.t.navigator;_ds.na=If?If.userAgentData||null:null;var eb;eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:_ds.Jf=Array.prototype.forEach?
_ds.wb=Array.prototype.map?_ds.Kf=Array.prototype.some?var Lf=Lf[" "]=function(){};_ds.Mf=var ag,bg,gg;_ds.Nf=Da();_ds.Of=_ds.Ja();_ds.Pf=_ds.Aa("Edge");_ds.Qf=_ds.Pf||_ds.Of;_ds.Rf=_ds.Aa("Gecko")&&!(_ds.ta(_ds.ea().toLowerCase(),"webkit")&&!_ds.Aa("Edge"))&&!(_ds.Aa("Trident")||_ds.Aa("MSIE"))&&!_ds.Aa("Edge");_ds.Sf=_ds.ta(_ds.ea().toLowerCase(),"webkit")&&!_ds.Aa("Edge");_ds.Tf=_ds.Sf&&_ds.Aa("Mobile");_ds.Uf=_ds.ab();_ds.Vf=_ds.bb();_ds.Wf=_ds.Xa();_ds.Xf=Ya();_ds.Yf=_ds.Aa("iPad");_ds.Zf=_ds.Aa("iPod");_ds.$f=_ds.$a();ag=
a:{var cg="",dg=);dg&&(cg=dg?dg[1]:"");if(_ds.Of){var eg=ag();if(null!=eg&&eg>parseFloat(cg)){bg=String(eg);break a}}bg=cg}_ds.fg=bg;if(_ds.t.document&&_ds.Of){var hg=ag();gg=hg?hg:parseInt(_ds.fg,10)||void 0}else gg=void 0;_ds.ig=gg;_ds.jg=Ka();_ds.kg=Ya()||_ds.Aa("iPod");_ds.lg=_ds.Aa("iPad");_ds.mg=_ds.Ra();_ds.ng=Pa();_ds.og=_ds.Qa()&&!_ds.$a();var Ab,pg,Eb,qg,zb;Ab={};pg=null;_ds.rg=Eb=
qg=
zb=var Hb="undefined"!==typeof Uint8Array,yb=!_ds.Of&&"function"===typeof btoa,Fb=/[-_.]/g,Cb={"-":"+",_:"/",".":"="},Kb={};var sg,xd=tg=ug=Oc=Nc=var Ad=!Hf,zd=!Hf;_ds.Ob=0;_ds.Pb=0;var vg;vg="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;var wg;_ds.ac=vg?wg=vg?_ds.Wb=vg?a=>a[vg]|0:_ds.gd=vg?a=>a[vg]:a=>a.g;_ds.Xb=vg?var Fc,gc,xg,Zc,yg,Qc,Pc,zg,Ag;Fc={};gc={};Zc=!Hf;yg=[];(0,_ds.Xb)(yg,55);_ds.Lc=Object.freeze(yg);_ds.Uc=0;zg=class{};Ag=Object.freeze(new zg);Object.freeze(new Ag);_ds.lc=var pc=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;var Hc;_ds.Bg=_ds.pd=_ds.Cg=_ds.Dg=
_ds.Eg=_ds.Fg=_ds.Gg=_ds.Hg=
_ds.Ig=_ds.Jg=
_ds.Kg=
_ds.Lg=_ds.Mg=_ds.Ng=_ds.Og=function(a,b){return Ec(_ds.Bg(a,b))};
_ds.Pg=_ds.Qg=_ds.Rg=_ds.Sg=_ds.Tg=function(a,b){return wd(_ds.Mg(a,b),0)};_ds.Ug=function(a,b,c="0"){return wd(_ds.Ng(a,b),c)};_ds.z=_ds.Vg=
_ds.Xg=_ds.Yg=_ds.Zg=function(a,b,c){return _ds.Cg(a,b,null==c?c:_ds.oc(c))};_ds.$g=_ds.ah=function(a,b,c){return _ds.rd(a,b,_ds.uc(c),0)};_ds.bh=_ds.ch=_ds.dh=
_ds.eh=_ds.Cd=_ds.fh=
_ds.C=class{oJSON(){if(xg)var a=_ds.cd(this,this.gb,!1);else a=_ds.ad(this.gb,
ed,void 0,void 0,!1,!1),a=_ds.cd(this,a,!0);return a};_ds.gh=0;_ds.C.prototype.ue=Fc;_ds.C.prototype.toString=_ds.hh=var ih=class extends _ds.C{constructor(a){super(a)}getTenantId(){return _ds.Vg(this,1)}getLocale(){return _ds.z(this,2)}getInsecureHost(){return _ds.z(this,7)}},jh=_ds.Dd(ih);ih.Wa=[10,12,13,21,22];var kh=_ds.Dd(;_ds.lh=_ds.p=_ds.lh.prototype;_ds.p.Af=!1;_ds.p.isDisposed=function(){return this.Af};_ds.p.dispose=_ds.p.addOnDisposeCallback=_ds.p.Ta=var mh=function(a){this.id=a};mh.prototype.toString=function(){return this.id};_ds.nh=_ds.nh.prototype.stopPropagation=function(){this.g=!0};_ds.nh.prototype.preventDefault=var oh=);_ds.ph=_ds.Sf?"webkitTransitionEnd":"transitionend";_ds.qh=_ds.qf(_ds.qh,_ds.nh);var rh={2:"touch",3:"pen",4:"mouse"};
_ds.qh.prototype.init=_ds.qh.prototype.stopPropagation=
_ds.qh.prototype.preventDefault=var sh="closure_listenable_"+(1E6*Math.random()|0),th=var uh=0;var vh=wh=var Nd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");var xh=xh.prototype.add=xh.prototype.remove=
var zh=Ah=Bh=yh=var Ch,Dh,Fh,Jh,Lh,Mh,Nh,Kh,Rh,Ih;Ch="closure_lm_"+(1E6*Math.random()|0);Dh={};Fh=0;_ds.Hh=
Jh=
Lh=_ds.Gh=_ds.Oh=
_ds.Ph=_ds.Qh=
Mh=Nh=Kh=Rh="__closure_events_fn_"+(1E9*Math.random()>>>0);Ih=_ds.Sh=new mh("devsite-analytics-observation");_ds.Th=new mh("devsite-analytics-observation-unfiltered");_ds.Uh=new mh("devsite-analytics-observation-cloudtrack");_ds.Vh=new mh("devsite-analytics-timing");_ds.Wh=new mh("devsite-analytics-error");_ds.Xh=new mh("devsite-analytics-pageview");_ds.Yh=new mh("devsite-analytics-set-dimension");/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var Zh,$h,bi;Zh=!!/^\s*class\s*\{\s*\}\s*$/.test(class{}.toString())||HTMLElement.es5Shimmed||void 0===_ds.t.Reflect||void 0===_ds.t.customElements||_ds.t.customElements.polyfillWrapFlushCallback||!1;_ds.ai=bi=!1;
_ds.ci=_ds.ci();var di={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var ei,fi=var hi;_ds.Td=_ds.Td.prototype.toString=function(){return this.g};_ds.Ud=hi={};_ds.gi={};var ii;_ds.se=_ds.xe=function(a){return a instanceof _ds.se&&a.constructor===_ds.se?a.g:"type_error:TrustedResourceUrl"};ii={};_ds.Ie=function(a){const b=fi();a=b?b.createScriptURL(a):a;return new _ds.se(a,ii)};var ji,ki,li,mi,fe,he;_ds.Rd=class{constructor(a){this.g=a}toString(){return this.g.toString()}};_ds.Sd=function(a){return a instanceof _ds.Rd&&a.constructor===_ds.Rd?a.g:"type_error:SafeUrl"};ji=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;ki=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;_ds.be=try{new URL("s://g"),li=!0}catch(a){li=!1}
mi=li;_ds.ni=fe={};he=new _ds.Rd("about:invalid#zClosurez",fe);var Xd,Wd,Vd,Yd;_ds.oi={};_ds.qi=function(a){return a instanceof _ds.pi&&a.constructor===_ds.pi?a.g:"type_error:SafeStyle"};_ds.si=_ds.pi=class{constructor(a){this.g=a}toString(){return this.g.toString()}};
_ds.ri=new _ds.pi("",_ds.oi);Xd=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");Wd=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");Vd=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g");Yd=/\/\*/;_ds.ti={};_ds.wi=_ds.ui=function(a){return a instanceof _ds.vi&&a.constructor===_ds.vi?a.g:"type_error:SafeStyleSheet"};_ds.vi=class{constructor(a){this.g=a}toString(){return this.g.toString()}};_ds.xi=new _ds.vi("",_ds.ti);var yi,Hi,Bi,Di,Ci;yi={};_ds.ne=_ds.Ai=_ds.Be=
_ds.Fi=Hi=
_ds.Ei=_ds.zi=Bi=/^[a-zA-Z0-9-]+$/;Di={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};Ci={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};_ds.Gi=new _ds.zi(_ds.t.trustedTypes&&_ds.t.trustedTypes.emptyHTML||"",yi);_ds.Ii=_ds.Be("<br>");var ce=ee=[de("data"),de("http"),de("https"),de("mailto"),de("ftp"),new ce(],je="function"===typeof URL,Ji=["data:","http:","https:","mailto:","ftp:"];var re;_ds.Ki=class{};re=var Li={wC:0,XC:1,aA:2,bA:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"},te=_ds.Mi=_ds.Ni=new Set("ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH".split(" "));var Oi=new _ds.Mi(new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ")),
new Map([["A",new Map([["href",{bc:2}]])],["AREA",new Map([["href",{bc:2}]])],["LINK",new Map([["href",{bc:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{bc:1}]])],["IMG",new Map([["src",{bc:1}]])],["VIDEO",new Map([["src",{bc:1}]])],["AUDIO",new Map([["src",{bc:1}]])]]),new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")),
new Map([["dir",{bc:3,conditions:new Map([["dir",new Set(["auto","ltr","rtl"])]])}],["async",{bc:3,conditions:new Map([["async",new Set(["async"])]])}],["cite",{bc:2}],["loading",{bc:3,conditions:new Map([["loading",new Set(["eager","lazy"])]])}],["poster",{bc:2}],["target",{bc:3,conditions:new Map([["target",new Set(["_self","_blank"])]])}]]));var Si,Qi,Ri,Ti,Ui,Ge;_ds.Pi=Si=
Qi=
Ri=Ti=Ui=Ge=new Ui(Oi);_ds.Vi=function(a){const b=new Set(a.g.h);b.add("class");a.g=new _ds.Mi(a.g.j,a.g.g,b,a.g.o);return a};_ds.Wi=_ds.Xi=_ds.Yi=_ds.Zi=_ds.$i=_ds.D=_ds.aj=
_ds.bj=
_ds.E=class extends HTMLElement{constructor(a=null){super();this.j=_ds.u;this.Bb=a&&a.length&&_ds.Zi(a)}onnectedCallback(){}disconnectedCallback(){}ds.E.prototype.dispatchTrackingEvent=_ds.E.prototype.Da;_ds.E.prototype.updateContent=_ds.E.prototype.Sb;
_ds.E.prototype.attributeChangedCallback=_ds.E.prototype.attributeChangedCallback;_ds.E.prototype.disconnectedCallback=_ds.E.prototype.disconnectedCallback;_ds.E.prototype.connectedCallback=_ds.E.prototype.connectedCallback;var ej,dj;_ds.cj=function(){return"devsite-panel"};ej=dj=
_ds.fj=_ds.fj.getTagName=_ds.cj;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}_ds.gj=_ds.Of||_ds.Sf;var ij;_ds.hj=ij=function(){};_ds.jj=_ds.kj=var lj,tj;lj=_ds.kj(;_ds.oj=_ds.pj=
_ds.rj=_ds.sj=tj=/^[\w+/_-]+[=]{0,2}$/;_ds.qj=_ds.uj=_ds.vj=_ds.vj.prototype.clone=function(){return new _ds.vj(this.x,this.y)};_ds.wj=_ds.vj.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};_ds.vj.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};_ds.vj.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
_ds.vj.prototype.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};_ds.xj=function(a,b){this.width=a;this.height=b};_ds.yj=_ds.p=_ds.xj.prototype;_ds.p.clone=function(){return new _ds.xj(this.width,this.height)};_ds.p.aspectRatio=_ds.p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};_ds.p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
_ds.p.round=_ds.p.scale=var Aj,Bj,Dj,Jj;_ds.zj=_ds.Cj=
Aj=
Bj=Dj=/&([^;\s<&]+);?/g;_ds.Ej=_ds.Fj=String.prototype.repeat?
_ds.Gj=_ds.Hj=2147483648*Math.random()|0;_ds.Ij=Jj=
_ds.Kj=var Pj,Wj,Zj,gk,lk,nk,ok,qk;_ds.Nj=
_ds.Oj=_ds.Qj=
Pj={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};_ds.Sj=
_ds.Uj=_ds.Tj=_ds.Vj=_ds.Xj=
Wj=
Zj=_ds.Yj=
_ds.Rj=_ds.ak=_ds.bk=_ds.ck=_ds.dk=_ds.ek=_ds.fk=
_ds.hk=function(a){return void 0!==a.nextElementSibling?a.nextElementSibling:gk(a.nextSibling,!0)};_ds.ik=gk=_ds.Mj=_ds.jk=
_ds.kk=_ds.mk=lk=
nk={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};ok={IMG:" ",BR:"\n"};_ds.pk=_ds.rk=
qk=_ds.tk=
_ds.sk=_ds.uk=_ds.Lj=_ds.Lj.prototype.getElement=_ds.Lj.prototype.j=
_ds.Lj.prototype.createElement=_ds.vk=_ds.p=_ds.Lj.prototype;_ds.p.rj=_ds.p.appendChild=_ds.p.append=_ds.p.Yr=_ds.ak;_ds.p.Zr=_ds.dk;
_ds.p.contains=var xk,yk,zk,Ak;_ds.wk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");xk=
yk=zk=Ak=
_ds.Bk=_ds.Ck=_ds.Dk=_ds.Ek=_ds.Fk=/#|$/;_ds.Gk=/[?&]($|#)/;var Kk,Nk,Xk,Ok,Qk,Pk,Tk,Rk,Mk,Yk;
_ds.Hk=
_ds.Hk.prototype.toString=_ds.Hk.prototype.clone=
_ds.Ik=_ds.Jk=_ds.Hk.prototype.getPath=function(){return this.qa};_ds.Hk.prototype.setPath=Kk=_ds.Uk=_ds.Vk=
_ds.Wk=_ds.Lk=Nk=Xk=Ok=/[#\/\?@]/g;Qk=/[#\?:]/g;Pk=/[#\?]/g;Tk=/[#\?@]/g;Rk=/#/g;
Mk=Yk=Mk.prototype.add=Mk.prototype.remove=
Mk.prototype.clear=_ds.$k=_ds.p=Mk.prototype;_ds.p.forEach=_ds.p.If=
_ds.p.Fm=_ds.p.set=_ds.p.get=
_ds.p.toString=_ds.p.clone=
var Zk=Sk=var al,bl,cl,dl,Le,kl,ll,pl,Ne,xl,El;al=[".c.googlers.com",".corp.google.com",".proxy.googlers.com"];bl="developer.android.com developers.google.com cloud.google.com tensorflow.org firebase.google.com google.dev localhost".split(" ");cl=/^[a-z]+(__)[a-z_]+/i;dl=/^(experiments\.).*/i;_ds.el=0;Le={};_ds.F=_ds.fl=
_ds.gl=
_ds.hl=
_ds.il=_ds.jl=
_ds.ml=
_ds.ol=
kl=ll=_ds.ql=
pl=_ds.rl=
_ds.sl=_ds.tl=
_ds.nl=Ne=_ds.ul=
_ds.wl=xl=_ds.yl=
_ds.Al=_ds.Bl=_ds.vl=
_ds.Cl=
_ds.Dl=El=
_ds.Fl=var Pe=_ds.Sh.toString(),Hl=Gl=0;var Kl,Ll;_ds.Il="code-sample data-sample ds-selector-dropdown ds-selector-tabs kd-tabbed-horz kd-tabbed-vert".split(" ");_ds.Jl=(0,_ds.u)`is-upgraded`;Kl="aar apk application avi bat bmp bundle c cdl64 chm cpp cs css csv db dlu doc docx dtd dylib eot eps exe flac flv gg gif go gz ico ipynb jar java jnlp jpeg jpg js json kml kmz kt log m4a manifest markdown md5 mf mjs mll mov mp3 mp4 ndoc nexe nmf odb odc odf odg odi odm odp ods odt ogg ogv otg oth otp ots ott pdf pexe php pl plist png ppt pptx properties proto psd py raw rnc rpm rss sh sha1 snippet sql step svg tar tgz ts tsv ttf txt unitypackage vb vtt war wasm wav webm webp wiki woff woff2 wsdd wsdl xlsx xml xsd xsl zip".split(" ");
Ll=[/^https:\/\/cloud.google.com\/blog.*/,/\.mp4$/,/^https:\/\/uberproxy.*/,/livereload(.js)?$/,/clients[0-9]+\.google.com/,/.*\/_d\/refreshtoken/,/.*\/_d\/refreshtokenresponse/];var Nl=function(a){var b=new Ml;return _ds.eh(b,1,a)},Ml=Ol=_ds.Dd(Ml);var Rl=Sl=Tl=Ul=Pl=Ql=Vl=_ds.Te=var Se=null;_ds.Wl=_ds.qf(_ds.Wl,_ds.lh);_ds.Wl.prototype[sh]=!0;_ds.p=_ds.Wl.prototype;_ds.p.Wn=function(a){this.xa=a};_ds.p.addEventListener=function(a,b,c,d){_ds.Hh(this,a,b,c,d)};_ds.p.removeEventListener=
_ds.p.dispatchEvent=
_ds.p.Ta=_ds.p.listen=_ds.p.unlisten=var Xl=var Yl=var Zl,$l=var bm=am=new Yl(,cm=var dm,em=!1,fm=new bm,hm=gm=im=_ds.jm=var mm,nm,om;_ds.lm=mm=mm.prototype.reset=nm=new Yl(;om=
_ds.pm=_ds.rm=_ds.lm.prototype.then=_ds.lm.prototype.$goog_Thenable=!0;_ds.lm.prototype.v=_ds.lm.prototype.catch=_ds.lm.prototype.v;
_ds.lm.prototype.cancel=
var um=ym=sm=_ds.lm.prototype.ua=function(a){this.g=0;km(this,2,a)};_ds.lm.prototype.ra=
var km=zm=xm=vm=_ds.lm.prototype.oa=
var wm=Bm=Am=Cm=_ds.da,tm=_ds.qf(tm,_ds.aa);tm.prototype.name="cancel";var qm=_ds.Dm=_ds.qf(_ds.Dm,_ds.Wl);_ds.p=_ds.Dm.prototype;_ds.p.Gi=!1;_ds.p.Ed=null;_ds.p.Ey=
_ds.p.start=_ds.p.stop=_ds.p.Ta=
_ds.Em=_ds.Fm=_ds.qf(_ds.Fm,_ds.lh);_ds.p=_ds.Fm.prototype;_ds.p.Qa=_ds.p.stop=
_ds.p.resume=_ds.p.Ta=_ds.p.ds=var Hm;_ds.G=_ds.qf(_ds.G,_ds.lh);var Gm=[];_ds.G.prototype.listen=_ds.Im=
Hm=_ds.G.prototype.unlisten=
_ds.I=_ds.G.prototype.Ta=_ds.G.prototype.handleEvent=var Jm=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};_ds.p=Jm.prototype;_ds.p.clone=_ds.p.contains=
_ds.p.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};_ds.p.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};_ds.p.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
_ds.p.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.right*=a;this.top*=b;this.bottom*=b;return this};_ds.Km=_ds.p=_ds.Km.prototype;_ds.p.clone=_ds.p.contains=
_ds.p.distance=_ds.p.getSize=_ds.p.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_ds.p.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_ds.p.round=_ds.p.scale=var Nm,Rm,Vm,an,cn,dn,fn,Um;_ds.Mm=Nm={};_ds.Lm=
_ds.Om=_ds.Pm=_ds.Qm=
Rm=
_ds.Tm=
_ds.Wm=_ds.Sm=
_ds.Xm=_ds.Ym=Vm=
_ds.Zm=_ds.$m=an=_ds.Rf?"MozUserSelect":_ds.Sf||_ds.Pf?"WebkitUserSelect":null;_ds.bn=
cn=dn=
_ds.en=fn={thin:2,medium:4,thick:6};
Um=var hn=kn=on=jn=mn=async function(a){await _ds.ul();a.Bb.Qa()},nn=qn=ln=rn=sn=tn=pn=[0,25,50,75,100],gn=[(0,_ds.u)`fixed`,(0,_ds.u)`visually-hidden`,(0,_ds.u)`offset`];var un,vn,wn;un=RegExp("( ?(and|or) ?)?\\((prefers-color-scheme: ?)(.+?)\\)( ?(and|or) ?)?","g");vn=new Map([["dark",null],["device","dark"],["light","none"]]);
wn=
_ds.xn=_ds.yn=var zn;_ds.An=_ds.Bn=_ds.Cn=zn=_ds.Dn=_ds.Dd(zn);var En;En=_ds.Fn=_ds.Gn=_ds.qf(_ds.Gn,_ds.Wl);_ds.Gn.prototype.getSize=_ds.Gn.prototype.Ta=_ds.Gn.prototype.v=var Jn=Ln=Kn=Hn=Mn=Nn=In=On=Pn=Qn=Qn.prototype.handleLinkClicksInParent=Qn.prototype.Zp;var Rn=var Sn=new Map([["a.lb","devsite-lightbox"],[`.${_ds.Il.join(",.")}`,"devsite-selector"],[".devsite-acknowledgement-link","devsite-wall-acknowledgement"],[".devsite-charts-table","devsite-chart"],[".devsite-dialog","devsite-dialog"],[".devsite-filter","devsite-filter"],[".devsite-multiple-choice","devsite-multiple-choice"],[".devsite-tracking-question","devsite-tracking-question"],[".expandable","devsite-expandable"],[".google-feedback","devsite-feedback"],[".kd-select","devsite-select"],["iframe.devsite-embedded-youtube-video",
"devsite-video"],["iframe.inherit-locale","devsite-iframe"],["pre:not([is-upgraded])","devsite-code"],["section#try-it,:not(devsite-apix) > .devsite-apix,:not(#try-it) > #embedded-explorer,:not(#try-it):not(.devsite-apix):not(devsite-concierge-apix) > .apis-explorer","devsite-apix"],["var.edit, pre var, var[scope]","devsite-var"],[".devsite-vplus","devsite-vplus"],[".replaceable-credential","devsite-credentials-dialog"],[".devsite-api-getstarted-widget","devsite-api-getstarted"],[".chrome-policies",
"cloudx-chrome-policies"],[".cloud-carousel","cloudx-carousel"],[".cloud-collapse","cloudx-collapse"],[".cloud-jump-menu","cloudx-jump-menu"],[".cloud-popup-instance:not(g)","cloudx-popup"],[".cloud-select-dropdown","cloudx-select-dropdown"],[".cloud-table-wrapper","cloudx-table"],[".cloud-tabs","cloudx-tabs"]]),Tn=Un=Vn=Wn=Yn=Zn=Xn=$n=var ao=null,bo=co=_ds.eo=_ds.fo=_ds.p=_ds.eo.prototype;
_ds.p.set=
_ds.p.get=_ds.p.remove=_ds.p.If=function(){return go(this).keys};_ds.p.Fm=_ds.p.clear=
var go=var ho=function(){};ho.prototype.next=function(){return io};var io={done:!0,value:void 0};ho.prototype.Vg=var mo=jo=ko=
lo=var no=function(){};var oo=_ds.qf(oo,no);oo.prototype.Yk=oo.prototype[Symbol.iterator]=oo.prototype.clear=_ds.po=_ds.qf(_ds.po,oo);_ds.p=_ds.po.prototype;_ds.p.isAvailable=
_ds.p.set=_ds.p.get=_ds.p.remove=_ds.p.Yk=
_ds.p.Vg=_ds.p.clear=_ds.p.key=
var qo=_ds.ro=_ds.qf(_ds.ro,_ds.po);var so,uo,vo,wo,yo;
so=new Map([["__utmz",{purpose:1,Ra:2}],["_ga_devsite",{purpose:1,Ra:2,options:{Mc:31536E3,path:"/"}}],["_mkto_trk",{purpose:0,Ra:2}],["AEC",{purpose:1,Ra:2}],["ANID",{purpose:0,Ra:2}],["cloudshell",{purpose:1,Ra:0}],["cloudxCurrencyCode",{purpose:1,Ra:1}],["cloudxRegionCode",{purpose:1,Ra:1}],["CLOUDX_TAG_HISTORY",{purpose:0,Ra:2,options:{Mc:2592E3,path:"/"}}],["cookies_accepted",{purpose:1,Ra:2,options:{Mc:33696E3,path:"/"}}],["developer-profile",{purpose:1,Ra:1,Jh:!0}],["DEVELOPER_PROFILE_CALLOUT_DISMISSED",{purpose:1,
Ra:2,options:{Mc:2592E3,path:"/"}}],["developer_profile_wallet_id",{purpose:0,Ra:2,options:{Mc:604800,path:"/"}}],["devguide_state",{purpose:1,Ra:1}],["devsite-app-controller-flag-cache-time",{purpose:1,Ra:1}],["devsite-app-controller-flag-cache-value",{purpose:1,Ra:1}],["devsite-appearance",{purpose:1,Ra:1}],["devsite-author-page-insights",{purpose:1,Ra:0}],["devsite-codelabs",{purpose:1,Ra:1,Jh:!0}],["devsite-content-excellence",{purpose:1,Ra:0}],["devsite-device",{purpose:1,Ra:1}],["devsite-eu-cookie",
{purpose:1,Ra:1}],["devsite-feature-tooltip",{purpose:1,Ra:1,Jh:!0}],["devsite-selector",{purpose:1,Ra:1}],["devsite_skip_cache",{purpose:1,Ra:2,options:{Mc:31536E3,path:"/"}}],["devsite-snackbar",{purpose:1,Ra:1}],["devsite_speed_dial",{purpose:1,Ra:2,options:{Mc:31536E3,path:"/"}}],["devsite_wall_acks",{purpose:1,Ra:2,options:{Mc:15552E3,path:"/"}}],["devsite-var",{purpose:1,Ra:0}],["devsite-version-selector",{purpose:1,Ra:1}],["django_language",{purpose:1,Ra:2,options:{Mc:15552E3,path:"/"}}],["FACET_EXPERIMENT_IDS_DEVSITE",
{purpose:1,Ra:2}],["firebase-utm",{purpose:0,Ra:0}],["language_preference",{purpose:1,Ra:3}],["nav-buttons",{purpose:1,Ra:1}],["pref_dark-code",{purpose:1,Ra:1}],["S",{purpose:1,Ra:2}],["temp_badges",{purpose:1,Ra:1}]]);_ds.to=
uo=vo=
wo=_ds.xo=async function(a){const b=[];a.h.forEach((c,d)=>{if(0===c.purpose){b.push(a.remove(d,""));for(const e of a.If(c.Ra))e.startsWith(`${d}-`)&&b.push(a.remove(d,e.substring(d.length+1)))}});await Promise.allSettled(b)};
yo=var zo,Ao,Co,Do,Jo,Ko,Eo,Fo,Go,Ho,Io,Mo,Qo,Ro,No,Oo,Po,Lo,Uo,To,Wo,Xo,Yo,Zo,$o,bp,So,ap,cp,ep;zo=Ao=(new Hl("app.whenReady-performance")).start();Co=Do=
Jo=Ko=
Eo=Fo=
Go=
Ho=
Io=Mo=
Qo=Ro=No=
Oo=Po=
Lo=Uo=
To=_ds.Vo=
Wo=Xo=
Yo=function(a=""){document.documentElement.setAttribute("dir",a)};Zo=
$o=
bp=
So=
ap=
cp=
ep=class{_ds.Vo();this.showLoading(150);document.body.dispatchEvent(new CustomEvent("devsite-before-page-change",{bubbles:!0,cancelable:!1}));const c=
_ds.F();a=new URL(a,c.origin);if(a.origin!==c.origin)_ds.Ae(_ds.Vj().location,_ds.ie(a.href));else{b&&_ds.hl(a.href,!1,!1);try{const d=await Wo(this,a);await Oo(this,d);Co();await Io(this)}catch(d){d instanceof zo?_ds.Ae(_ds.Vj().location,_ds.ie(a.href)):d instanceof Response&&"opaqueredirect"===d.type||200===d.status&&!d.headers.get("X-DevSite-Partial-Response")?_ds.Vj().location.reload():d instanceof Error?Xo(this,d.message):Xo(this,`Fetch failed for ${a.href}`)}}}ync signIn(){const a=await cp(this);a&&await a.signIn()}async signOut(){const a=await cp(this);a&&await a.signOut()}p.prototype.fetchPageTitle=ep.prototype.fetchPageTitle;ep.prototype.fetchPage=ep.prototype.fetchPage;ep.prototype.reload=ep.prototype.reload;ep.prototype.scrollToAnchor=ep.prototype.scrollToAnchor;ep.prototype.showLoading=ep.prototype.showLoading;var dp="onpointerover"in window?"pointerover":"mouseover",Bo=["rec"];var We=null,fp=_ds.pf("DevsiteAppInit",;_ds.pf("DevsiteAppFrameboxInit",;})(_ds_www);
