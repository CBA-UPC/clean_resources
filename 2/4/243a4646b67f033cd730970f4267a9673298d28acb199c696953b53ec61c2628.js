gapi.loaded_0(function(_){var window=this;
_._F_toggles_initialize=(0,_._F_toggles_initialize)([]);
var fa,ka,ma,ra,sa,wa,Ca,Ea;_.ea=_.da=[];fa=ka="function"==typeof Object.defineProperties?Object.defineProperty:
ma=_.na=ma(this);ra=
ra("Symbol",;
ra("Symbol.iterator",;sa=
_.va=wa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};Ca="function"==typeof Object.assign?Object.assign:ra("Object.assign",;
_.Da="function"==typeof Object.create?Object.create:if("function"==typeof Object.setPrototypeOf)Ea=Object.setPrototypeOf;else{var Fa;a:{var Ga={a:!0},Ha={};try{Ha.__proto__=Ga;Fa=Ha.a;break a}catch(a){}Fa=!1}Ea=Fa?null}_.Ia=Ea;
ra("Promise",;var Ka=
ra("String.prototype.startsWith",;
ra("WeakMap",;
ra("Map",;ra("Array.prototype.find",;ra("Number.isFinite",;
var Na=ra("Array.prototype.entries",;ra("Array.prototype.keys",;
ra("Set",;ra("Array.prototype.values",;
ra("Array.from",;ra("Object.entries",;
ra("Object.values",;ra("Object.is",;ra("Array.prototype.includes",;
ra("String.prototype.includes",;ra("Array.prototype.flat",;
ra("Math.trunc",;ra("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});ra("Number.isInteger",;ra("Number.isSafeInteger",;
ra("Number.isNaN",;ra("String.prototype.replaceAll",;ra("globalThis",;
ra("Math.imul",;ra("String.fromCodePoint",;
ra("Promise.prototype.finally",;_.Qa={};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
_.Ta=_.Ta||{};_.r=this||self;_.Va=_.r._F_toggles||[];_.Wa="closure_uid_"+(1E9*Math.random()>>>0);_.$a=_.C=
_.ab=_.bb=window.osapi=window.osapi||{};
window.___jsl=window.___jsl||{};
(window.___jsl.cd=window.___jsl.cd||[]).push({gwidget:{parsetags:"explicit"},appsapi:{plus_one_service:"/plus/v1"},csi:{rate:.01},poshare:{hangoutContactPickerServer:"https://plus.google.com"},gappsutil:{required_scopes:["https://www.googleapis.com/auth/plus.me","https://www.googleapis.com/auth/plus.people.recommended"],display_on_page_ready:!1},appsutil:{required_scopes:["https://www.googleapis.com/auth/plus.me","https://www.googleapis.com/auth/plus.people.recommended"],display_on_page_ready:!1},
"oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",redirectUri:"postmessage"},iframes:{sharebox:{params:{json:"&"},url:":socialhost:/:session_prefix:_/sharebox/dialog"},plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},":socialhost:":"https://apis.google.com",":im_socialhost:":"https://plus.googleapis.com",domains_suggest:{url:"https://domains.google.com/suggest/flow"},card:{params:{s:"#",userid:"&"},
url:":socialhost:/:session_prefix:_/hovercard/internalcard"},":signuphost:":"https://plus.google.com",":gplus_url:":"https://plus.google.com",plusone:{url:":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"},plus_share:{url:":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"},plus_circle:{url:":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"},plus_followers:{url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},
appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},comments:{url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"},
blogger:{url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"},youtube:{url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"},reportabuse:{url:":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"},additnow:{url:":socialhost:/additnow/additnow.html"},appfinder:{url:"https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},":source:":"1p"},poclient:{update_session:"google.updateSessionCallback"},"googleapis.config":{rpc:"/rpc",root:"https://content.googleapis.com",
"root-1p":"https://clients6.google.com",useGapiForXd3:!0,xd3:"/static/proxy.html",auth:{useInterimAuth:!1}},report:{apis:["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.client\\..*"],rate:1E-4},client:{perApiBatch:!0}});
var db,eb;db=eb=_.D=
var Kb,Sb,Ub,Xb,$b,ac,bc,cc,dc,kc;_.hb=_.ib=_.mb=_.nb=_.ob=
_.pb=_.qb=_.rb=_.tb=
_.vb=_.wb=_.Ab=_.Eb=_.Fb=function(){return _.Eb()?!1:_.Ab("Opera")};_.Hb=_.Ib=
Kb=_.Lb=function(){return Kb()?"Android"===_.Db.platform:_.Ab("Android")};_.Mb=_.Nb=_.Ob=function(){return Kb()?"macOS"===_.Db.platform:_.Ab("Macintosh")};_.Pb=function(){return Kb()?"Windows"===_.Db.platform:_.Ab("Windows")};_.Qb=
_.Rb=_.Tb=Ub=_.Vb=_.Wb=Xb=0;
_.Yb=_.Zb=function(){return Date.now()};$b=function(a){return a};_.ab(_.ib,Error);_.ib.prototype.name="CustomError";bc=cc={};dc={};_.ec=
_.ec.prototype.toString=function(){return this.E_};_.gc=_.hc=function(a){return new _.ec(cc,a)};_.ic=function(a){this.aY=a};_.ic.prototype.toString=_.jc=function(a){if(a instanceof _.ic&&a.constructor===_.ic)return a.aY;_.Vb(a);return"type_error:TrustedResourceUrl"};kc={};_.lc=function(a){var b=bc();a=b?b.createScriptURL(a):a;return new _.ic(a,kc)};
_.mc=_.lb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:
_.nc=Array.prototype.lastIndexOf?_.oc=Array.prototype.forEach?
_.pc=Array.prototype.filter?_.rc=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:
_.sc=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:_.tc=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:
_.uc=Array.prototype.every?var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");var vc=!!(_.Va[0]&128),wc=!!(_.Va[0]&4),xc=!!(_.Va[0]&256),yc=!!(_.Va[0]&2);_.Cb=vc?xc:Ub(610401301,!1);_.zc=vc?wc||!yc:Ub(572417392,!0);var Cc,Ec;_.Ac=function(a){this.ZX=a};_.Ac.prototype.toString=function(){return this.ZX.toString()};_.Bc=function(a){if(a instanceof _.Ac&&a.constructor===_.Ac)return a.ZX;_.Vb(a);return"type_error:SafeUrl"};try{new URL("s://g"),Cc=!0}catch(a){Cc=!1}_.Dc=Cc;Ec={};_.Fc=_.Gc=_.Fc("about:invalid#zClosurez");var Lc,Nc,Oc,Pc,Qc,Rc,Kc,Tc;_.Hc=_.Ic=function(a){return/^[\s\xa0]*$/.test(a)};_.Jc=String.prototype.trim?
_.Sc=Lc=/&/g;Nc=/</g;Oc=/>/g;Pc=/"/g;Qc=/'/g;Rc=/\x00/g;Kc=/[\x00&<>"']/;_.yb=
_.Uc=
Tc=_.Vc={};_.Wc=function(a){this.YX=a};_.Wc.prototype.toString=function(){return this.YX.toString()};_.Xc=new _.Wc("",_.Vc);_.Zc=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");_.$c=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");_.ad=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g");var dd;_.bd={};_.cd=function(a){this.XX=a};_.cd.prototype.toString=function(){return this.XX.toString()};_.ed=dd=new _.cd("",_.bd);var fd;fd=_.r.navigator;_.Db=fd?fd.userAgentData||null:null;var gd;gd={};_.hd=function(a){this.WX=a};_.hd.prototype.toString=function(){return this.WX.toString()};_.id=_.kd=_.jd=_.ld=new _.hd(_.r.trustedTypes&&_.r.trustedTypes.emptyHTML||"",gd);_.md=_.jd("<br>");var nd=nd[" "]=function(){};_.od=var Fd,Gd,Ld;_.pd=_.Fb();_.qd=_.Hb();_.rd=_.Ab("Edge");_.td=_.rd||_.qd;_.ud=_.Ab("Gecko")&&!(_.yb(_.wb().toLowerCase(),"webkit")&&!_.Ab("Edge"))&&!(_.Ab("Trident")||_.Ab("MSIE"))&&!_.Ab("Edge");_.vd=_.yb(_.wb().toLowerCase(),"webkit")&&!_.Ab("Edge");_.wd=_.vd&&_.Ab("Mobile");_.xd=_.Ob();_.yd=_.Pb();_.zd=(Kb()?"Linux"===_.Db.platform:_.Ab("Linux"))||_.Qb();_.Ad=_.Lb();_.Bd=_.Mb();_.Cd=_.Ab("iPad");_.Dd=_.Ab("iPod");_.Ed=_.Nb();Fd=
a:{var Hd="",Id=);Id&&(Hd=Id?Id[1]:"");if(_.qd){var Jd=Fd();if(null!=Jd&&Jd>parseFloat(Hd)){Gd=String(Jd);break a}}Gd=Hd}_.Kd=Gd;if(_.r.document&&_.qd){var Od=Fd();Ld=Od?Od:parseInt(_.Kd,10)||void 0}else Ld=void 0;_.Pd=Ld;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}_.Qd=_.qd||_.vd;var Rd,Td;Rd=_.mc(;_.Sd=Td=/^[\w+/_-]+[=]{0,2}$/;_.Ud=_.Vd=function(a,b){this.width=a;this.height=b};_.Wd=_.g=_.Vd.prototype;_.g.clone=_.g.by=_.g.aspectRatio=_.g.isEmpty=_.g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_.g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_.g.round=_.g.scale=_.Xd=String.prototype.repeat?_.Yd=2147483648*Math.random()|0;var ce,me;_.ae=
_.be=
_.fe=ce={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};_.he=
_.ge=_.je=_.ne=
me=_.oe=
_.ke=_.ie=function(a){return"CSS1Compat"==a.compatMode};_.pe=
_.qe=_.re=_.se=_.te=_.ue=_.ve=
_.we=_.$d=
_.xe=_.Zd=_.g=_.Zd.prototype;_.g.Ja=_.ae;_.g.eL=_.ea(0);_.g.ub=function(){return this.Hb};_.g.O=_.ea(1);_.g.getElementsByTagName=
_.g.rH=_.ea(2);_.g.va=_.g.createElement=_.g.createTextNode=_.g.getWindow=_.g.appendChild=_.g.append=_.qe;_.g.canHaveChildren=_.pe;_.g.Be=_.re;_.g.PU=_.se;_.g.removeNode=_.te;_.g.CG=_.ue;_.g.isElement=_.ve;_.g.contains=_.we;_.g.UG=_.$d;_.g.Cj=_.ea(3);
_.ye=_.ze=_.E=
_.Ae=_.Be=
/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ce,Ee;Ce=Ee=_.Ge=
_.Ie=_.Je=
_.Ke=var De=function(a){this.Ej=a},Fe=[Ee("data"),Ee("http"),Ee("https"),Ee("mailto"),Ee("ftp"),new De(],He=Ce(;var Me=var Ne="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
Le=[["A",new Map([["href",{he:2}]])],["AREA",new Map([["href",{he:2}]])],["LINK",new Map([["href",{he:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{he:1}]])],["IMG",new Map([["src",{he:1}]])],["VIDEO",new Map([["src",{he:1}]])],["AUDIO",new Map([["src",{he:1}]])]],Oe="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
Pe=[["dir",{he:3,conditions:Ce(}],["async",{he:3,conditions:Ce(}],["cite",{he:2}],["loading",{he:3,conditions:Ce(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],["poster",{he:2}],["target",{he:3,conditions:Ce(}]],Qe=new Me(new Set(Ne),new Set(Oe),new Map(Pe)),Re=new Me(new Set(Ne),
new Set(Ce(),new Map(Ce(function(){return Pe.concat([["style",{he:4}]])}))),Se=new Me(new Set(Ce(),new Set(Ce(),new Map(Ce(),new Set(["data-","aria-"]));var Te;Te=_.Ue=Ce(function(){return new Te(Qe)});_.Ve=Ce(function(){return new Te(Re)});_.We=Ce(;
/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
_.Xe=_.Ye=_.Ze=_.$e=_.af=window;_.cf=document;_.df=_.af.location;_.ef=/\[native code\]/;_.ff=
_.gf=_.hf=_.jf=_.kf=_.ff(_.af,"gapi",{});_.lf=_.mf=new RegExp(/^/.source+/([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source+/(\/\/[^\/?#]*)?/.source+/([^?#]*)?/.source+/(\?([^#]*))?/.source+/(#((#|[^#])*))?/.source+/$/.source);_.nf=new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source+/%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g");
_.of=new RegExp(/\/?\??#?/.source+"("+/[\/?#]/i.source+"|"+/[\uD800-\uDBFF]/i.source+"|"+/%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source+"|"+/%[0-9a-f]?/i.source+")$","i");_.qf=_.pf=_.rf={};_.rf=_.ff(_.af,"___jsl",_.gf());_.ff(_.rf,"I",0);_.ff(_.rf,"hel",10);var sf,tf,uf,vf,wf,xf,yf;sf=tf=uf=
vf=
wf=
xf=
yf=_.zf=
_.Af=var Bf=Bf&&Bf();yf();_.C("gapi.config.get",_.zf);_.C("gapi.config.update",_.Af);
var Cf,Df,Ef,Ff,Hf,If,Kf,Qf,Rf,Sf,Tf,Uf,Vf,Jf,Nf,Of;Cf=Df=Ef=Ff=function(a,b,c){a.setAttribute(b,c)};_.Gf=
Hf=If=
Kf=_.Lf=_.Mf=
_.Pf=Qf=["data:","http:","https:","mailto:","ftp:"];
Rf=Sf=Tf=
Uf=Vf=
_.Wf=Jf=Nf={0:1,1:1};Of={0:.1,1:.1};
var bg,cg,eg,fg,gg,hg,ig,jg,kg,lg,mg,ng,og,pg,qg,rg,sg,tg,ug,vg,wg,xg,yg,zg,Ag,Bg,Cg,Dg,Eg,Fg,Gg,Jg,Kg;eg=void 0;fg=gg=hg=gg(0);ig=gg(new Date(0));jg=gg(!0);kg=gg("");lg=gg({});mg=gg([]);
ng=og=/[\0-\x07\x0b\x0e-\x1f]/;
pg=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;qg=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;rg=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;sg=/"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;tg=/-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;ug=/[ \t\n\r]+/g;vg=/[^"]:/;wg=/""/g;xg=/true|false|null/g;yg=/00/;zg=/[\{]([^0\}]|0[^:])/;Ag=/(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;Bg=/[^\[,:][\[\{]/;Cg=/^(\{|\}|\[|\]|,|:|0)+/;Dg=/\u2028/g;
Eg=/\u2029/g;
Fg=Gg=_.Hg=
_.Ig=Jg=!Date.prototype.toISOString||"function"!==typeof Date.prototype.toISOString||"1970-01-01T00:00:00.000Z"!==(new Date(0)).toISOString();
Kg=Date.prototype.toISOString=Jg?Kg:Date.prototype.toISOString;
var Bh=var Ch=_.ab(Ch,Bh);Ch.prototype.reset=
var Dh=
Ch.prototype.update=
Ch.prototype.digest=_.Eh=_.g=_.Eh.prototype;_.g.reset=_.g.s0=_.g.FQ=function(){return this.KM.digest()};_.g.vx=_.g.dj=
_.Vi=function(a){var b=window.___jsl=window.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg};_.Wi=
_.Xi=_.Yi=var Zi;Zi=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
_.$i=
var rj,qj,xj,yj,sj,vj,tj,zj,uj;_.wj=rj=_.af.crypto;qj=!1;xj=0;yj=0;sj=1;vj=0;tj="";zj=uj=
qj=!!rj&&"function"==typeof rj.getRandomValues;qj||(vj=1E6*(screen.width*screen.width+screen.height),tj=uj(_.cf.cookie+"|"+_.cf.location+"|"+(new Date).getTime()+"|"+Math.random()),xj=_.Wi("random/maxObserveMousemove")||0,0!=xj&&_.qf(_.af,"mousemove",zj));
var qm,rm,sm,tm,um,vm,wm,xm,ym,zm,Am,Bm,Fm,Gm,Hm,Im,Jm,Km,Lm,Mm;_.pm=qm=/&/g;rm=/</g;sm=/>/g;tm=/"/g;um=/'/g;vm=wm=/[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;xm=/%([a-f]|[0-9a-fA-F][a-f])/g;ym=/^(https?|ftp|file|chrome-extension):$/i;
zm=Am=Bm=
_.Cm=
_.Dm=_.Em=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;Gm=Hm=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
Im=Jm=Km=
Lm=Mm=var Om,Pm,Tm;_.Nm={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"};Om={allowtransparency:!0,onload:!0};Pm=0;_.Qm=_.Rm=
_.Sm=
Tm=
_.Um=var Vm,Ym;Vm=/^:[\w]+$/;_.Wm=/:([a-zA-Z_]+):/g;_.Xm=Ym=
_.Zm=_.$m=
_.an=
var Lg=Lg.prototype.log=Lg.prototype.error=function(a){this.Sg&&(this.Sg.error?this.Sg.error(a):this.Sg.log&&this.Sg.log(a))};Lg.prototype.warn=Lg.prototype.debug=function(){};_.Mg=new Lg;
_.zh=
_.hi=
_.ii=_.ji=_.ki=_.li=_.mi=
_.ni=_.oi=_.pi=
_.qi=_.ri=_.li();_.si=_.Mb()||_.Ab("iPod");_.ti=_.Ab("iPad");_.ui=_.oi();_.vi=_.mi();_.wi=_.ni()&&!_.Nb();
_.Mj=[];_.Nj=[];_.Oj=!1;_.Pj=
_.zk=_.Ak=_.Bk=
var Ck=function(a){this.T=a};_.g=Ck.prototype;_.g.value=function(){return this.T};_.g.Ue=function(a){this.T.width=a;return this};_.g.Xb=function(){return this.T.width};_.g.je=function(a){this.T.height=a;return this};_.g.Vc=function(){return this.T.height};_.g.Bh=function(a){this.T.style=a;return this};_.g.getStyle=function(){return this.T.style};_.Dk=function(a){this.T=a||{}};_.g=_.Dk.prototype;_.g.value=function(){return this.T};_.g.setUrl=function(a){this.T.url=a;return this};_.g.getUrl=function(){return this.T.url};_.g.Bh=function(a){this.T.style=a;return this};_.g.getStyle=function(){return this.T.style};_.g.Te=function(a){this.T.id=a;return this};_.g.getId=function(){return this.T.id};_.g.Bn=function(a){this.T.rpctoken=a;return this};_.Ek=function(a,b){a.T.messageHandlers=b;return a};_.Fk=function(a,b){a.T.messageHandlersFilter=b;return a};
_.g=_.Dk.prototype;_.g.Bs=_.ea(4);_.g.getContext=function(){return this.T.context};_.g.yd=function(){return this.T.openerIframe};_.g.zo=_.g.Fk=function(){return this.T.controller};
var Ok;_.Gk=_.Hk=_.Ik=
_.Jk=_.Kk=function(){};_.Lk=function(a){return a};_.Mk=_.Nk=Ok=Ok.prototype.get=
Ok.prototype.put=var Qk,Rk,Pk;_.Sk=
Rk=Pk=_.Lk;_.Pj(function(a){Pk=a});var Tk=Tk.prototype.add=Tk.prototype.remove=var Uk=new Ok(function(){return new Vk},function(a){return a.reset()}),Vk=function(){this.next=this.scope=this.fi=null};Vk.prototype.set=
Vk.prototype.reset=var Wk,Xk,Yk,Zk,al;Xk=!1;Yk=new Tk;_.$k=Zk=al=var dl,el,fl,tl,xl,vl,yl;_.cl=dl=dl.prototype.reset=el=new Ok(;
fl=_.gl=_.hl=_.jl=_.kl=
_.ml=_.cl.prototype.then=_.Mk(_.cl);_.pl=_.cl.prototype.Zw=function(a,b){return nl(this,null,a,b)};_.cl.prototype.catch=_.cl.prototype.Zw;_.cl.prototype.cancel=
var rl=ol=nl=_.cl.prototype.ega=function(a){this.Fa=0;bl(this,2,a)};_.cl.prototype.fga=
var bl=il=wl=ul=sl=_.cl.prototype.kz=tl=
xl=vl=yl=_.hi;_.ql=_.ab(_.ql,_.ib);_.ql.prototype.name="cancel";var ll=
_.zl=
var Ml=Ml.prototype.MI=var Nl=Ol=
Ml.prototype.zH=Ml.prototype.Pb=
var Ll=Ml.prototype.P6=Ml.prototype.send=var Pl,Ql,Rl,Sl,Tl,Ul,Vl,Al,El,Wl,Xl,Yl,Dl,Fl,$l,am,fm,gm,im,Gl,km,jm,bm,cm,lm,Bl,mm,nm;Pl=0;Ql=[];Rl={};Sl={};Tl=_.af.location.href;Ul=_.lf(Tl,"rpctoken");Vl=_.lf(Tl,"parent")||_.cf.referrer;Al=_.lf(Tl,"rly");El=Al||(_.af!==_.af.top||_.af.opener)&&_.af.name||"..";Wl=null;Xl={};Yl=function(){};_.Zl={send:Yl,Pb:Yl,MI:Yl};
Dl=Fl=
$l=am=_.dm=_.em=fm={};gm=
im=Gl=km=jm=bm=
cm=lm=
Bl=mm=nm=
_.om=
_.hm=if("function"===typeof _.af.postMessage||"object"===typeof _.af.postMessage)_.Zl=new Ml,_.dm("__cb",gm,function(){return!0}),_.dm("_processBatch",mm,function(){return!0}),_.om("..");
var bn;
bn=
_.cn=
var dn=en=fn=gn,hn,mn,on,tn,Cn,Dn,Fn,Jn,Kn,Nn,Pn,Qn,Sn,Rn,Tn;
_.Dk.prototype.Bs=_.hb(4,function(a){this.T.apis=a;return this});gn=function(a,b){a.T.onload=b};hn=function(a){return a.T.rpctoken};_.jn=function(a,b){a.T.queryParams=b;return a};_.kn=function(a,b){a.T.relayOpen=b;return a};_.ln=function(a,b){a.T.onClose=b;return a};mn=function(a,b){a.T.controllerData=b};_.nn=function(a){a.T.waitForOnload=!0;return a};on=_.pn=
_.qn=_.rn=_.sn=tn=function(a){this.T=a||{}};tn.prototype.value=function(){return this.T};
tn.prototype.getIframe=function(){return this.T.iframe};var un=function(a,b){a.T.role=b;return a},vn=function(a,b){a.T.data=b;return a};tn.prototype.wl=function(a){this.T.setRpcReady=a;return this};var wn=function(a){return a.T.setRpcReady};tn.prototype.Bn=function(a){this.T.rpctoken=a;return this};var xn=yn=yn.prototype.value=function(){return this.T};var An=yn.prototype.fT=function(){return this.T.role};
yn.prototype.Qc=function(a){this.T.handler=a;return this};yn.prototype.Cb=function(){return this.T.handler};var Bn=function(a,b){a.T.filter=b;return a};yn.prototype.Bs=function(a){this.T.apis=a;return this};Fn=/^[\w\.\-]*$/;_.Gn=_.Hn=function(){return!0};_.In=
Jn=Kn=_.Ln=
_.Mn=Nn=_.On=Pn=/^https?:\/\/[^\/%\\?#\s]+$/i;Qn={longdesc:!0,name:!0,src:!0,frameborder:!0,marginwidth:!0,marginheight:!0,scrolling:!0,align:!0,height:!0,width:!0,id:!0,"class":!0,title:!0,tabindex:!0,hspace:!0,vspace:!0,allowtransparency:!0};
Sn=Rn=Tn=_.g=Tn.prototype;_.g.CROSS_ORIGIN_IFRAMES_FILTER=function(a){return this.Dg().CROSS_ORIGIN_IFRAMES_FILTER(a)};_.g.SAME_ORIGIN_IFRAMES_FILTER=function(a){return this.Dg().SAME_ORIGIN_IFRAMES_FILTER(a)};
_.g.create=function(a,b,c){return this.Dg().create(a,b,c)};_.g.getBeforeOpenStyle=function(a){return this.Dg().getBeforeOpenStyle(a)};_.g.getContext=_.g.getStyle=function(a){return this.Dg().getStyle(a)};_.g.makeWhiteListIframesFilter=_.g.registerBeforeOpenStyle=function(a,b){return this.Dg().registerBeforeOpenStyle(a,b)};
_.g.registerIframesApi=function(a,b,c){return this.Dg().registerIframesApi(a,b,c)};_.g.registerIframesApiHandler=_.g.registerStyle=var Un=Un.prototype.Dg=var Vn=Wn=function(){Un.apply(this,arguments)};_.E(Wn,Un);var Yn=var Xn=new Yn({instance:priority:1});_.Zn=Xn.instance;var $n,ao;$n={height:!0,width:!0};ao=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;_.bo=var co=function(){tn.apply(this,arguments)};_.E(co,tn);var zn=_.E(zn,yn);var eo=_.E(eo,_.Dk);var fo=_.E(fo,eo);var go=function(a,b){a.T.frameName=b;return a};fo.prototype.getFrameName=function(){return this.T.frameName};var ho=function(a,b){a.T.rpcAddr=b;return a};fo.prototype.Ig=function(){return this.T.rpcAddr};var io=_.g=fo.prototype;_.g.ti=function(){return this.T.retAddr};_.g.Uj=function(a){this.T.origin=a;return this};_.g.getOrigin=function(){return this.T.origin};_.g.wl=
_.g.Mp=var jo=function(a,b){a.T._rpcReadyFn=b};fo.prototype.getIframeEl=function(){return this.T.iframeEl};var ko=var mo=lo=_.oo=_.g=_.oo.prototype;_.g.isDisposed=function(){return this.dh};
_.g.Ia=_.g.getContext=function(){return this.tb};_.g.getOptions=function(){return this.Oa};_.g.Ig=function(){return this.tK};_.g.ti=function(){return this.HY};_.g.getFrameName=function(){return this.Mq};_.g.getIframeEl=function(){return this.eaa};_.g.getSiteEl=function(){return this.q_};_.g.setSiteEl=_.g.wl=
_.g.setParam=_.g.getParam=_.g.Ic=function(){return this.Oa.value()};_.g.getId=_.g.getOrigin=function(){return this.Ld};var po=_.g=_.oo.prototype;
_.g.register=_.g.unregister=_.g.Z8=function(){return this.Ki};
_.g.applyIframesApi=_.g.getWindow=
var qo=_.g=_.oo.prototype;_.g.close=function(a,b){return ro(this,"_g_close",a,b)};_.g.restyle=function(a,b){return ro(this,"_g_restyle",a,b)};_.g.us=function(a,b){return ro(this,"_g_restyleDone",a,b)};_.g.x6=_.g.Sda=
_.g.Tda=
_.g.y6=
_.g.registerWasRestyled=function(a,b){this.register("_g_wasRestyled",a,b)};_.g.registerWasClosed=_.g.Aga=
_.g.send=var ro=_.g=_.oo.prototype;_.g.Qca=_.g.ping=
_.g.E6=
_.g.U6=
_.g.B6=
_.g.RL=
_.g.fX=
_.g.uK=
_.g.zca=
_.g.Rda=var Co;_.vo=_.gf();_.wo=_.gf();_.xo=function(a,b){_.vo[a]=b};_.Bo=function(a){return _.vo[a]};Co=_.Do=_.Eo=_.so=_.g=_.so.prototype;
_.g.isDisposed=function(){return this.dh};_.g.Ia=_.g.getFrameName=function(){return this.Mq};_.g.getOrigin=function(){return this.Ld};_.g.getWindow=function(){return this.qg};_.g.ub=_.g.setGlobalParam=_.g.getGlobalParam=
_.g.attach=_.g.uK=var Fo=
_.so.prototype.openChild=
var Ho=Io=Jo=
_.so.prototype.open=_.so.prototype.getParentIframe=var Ko=_.g=_.so.prototype;
_.g.closeSelf=_.g.restyleSelf=
_.g.r0=_.g.setCloseSelfFilter=function(a){this.setGlobalParam("onCloseSelfFilter",a)};_.g.setRestyleSelfFilter=var Go=
_.so.prototype.ready=
_.so.prototype.connectIframes=
var to=_.so.prototype.addOnConnectHandler=
_.so.prototype.removeOnConnectHandler=var uo=
_.so.prototype.addOnOpenerHandler=_.so.prototype.cW=
var Lo=_.so.prototype.VT=Cn=_.gf();Dn=_.gf();_.En=new _.so;Nn("_g_rpcReady",_.oo.prototype.wl);Nn("_g_discover",_.oo.prototype.Z8);Nn("_g_ping",_.oo.prototype.Qca);Nn("_g_close",_.oo.prototype.x6);Nn("_g_closeMe",_.oo.prototype.y6);Nn("_g_restyle",_.oo.prototype.Sda);Nn("_g_restyleMe",_.oo.prototype.Tda);Nn("_g_wasClosed",_.oo.prototype.Aga);_.Mn("control","_g_control",_.oo.prototype.E6);_.Mn("control","_g_disposeControl",_.oo.prototype.U6);var Mo=_.En.getParentIframe();
Mo&&Mo.register("_g_restyleDone",_.oo.prototype.Rda,_.Hn);Nn("_g_connect",_.oo.prototype.B6);var No={};No._g_open=_.oo.prototype.zca;_.Ln("_open",No,_.Hn);var Oo={Context:_.so,Iframe:_.oo,SAME_ORIGIN_IFRAMES_FILTER:_.Gn,CROSS_ORIGIN_IFRAMES_FILTER:_.Hn,makeWhiteListIframesFilter:_.In,getContext:_.On,registerIframesApi:_.Ln,registerIframesApiHandler:_.Mn,registerStyle:_.xo,registerBeforeOpenStyle:_.Do,getStyle:_.Bo,getBeforeOpenStyle:_.Eo,create:_.an};Yn({instance:priority:2});_.Mn("gapi.load","_g_gapi.load",;
_.C("gapi.iframes.create",_.an);
_.C("gapi.iframes.registerStyle",_.xo);_.C("gapi.iframes.registerBeforeOpenStyle",_.Do);_.C("gapi.iframes.getStyle",_.Bo);_.C("gapi.iframes.getBeforeOpenStyle",_.Eo);_.C("gapi.iframes.registerIframesApi",_.Ln);_.C("gapi.iframes.registerIframesApiHandler",_.Mn);_.C("gapi.iframes.getContext",_.On);_.C("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER",_.Gn);_.C("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER",_.Hn);_.C("gapi.iframes.makeWhiteListIframesFilter",_.In);_.C("gapi.iframes.Context",_.so);
_.C("gapi.iframes.Context.prototype.isDisposed",_.so.prototype.isDisposed);_.C("gapi.iframes.Context.prototype.getWindow",_.so.prototype.getWindow);_.C("gapi.iframes.Context.prototype.getFrameName",_.so.prototype.getFrameName);_.C("gapi.iframes.Context.prototype.getGlobalParam",_.so.prototype.getGlobalParam);_.C("gapi.iframes.Context.prototype.setGlobalParam",_.so.prototype.setGlobalParam);_.C("gapi.iframes.Context.prototype.open",_.so.prototype.open);
_.C("gapi.iframes.Context.prototype.openChild",_.so.prototype.openChild);_.C("gapi.iframes.Context.prototype.getParentIframe",_.so.prototype.getParentIframe);_.C("gapi.iframes.Context.prototype.closeSelf",_.so.prototype.closeSelf);_.C("gapi.iframes.Context.prototype.restyleSelf",_.so.prototype.restyleSelf);_.C("gapi.iframes.Context.prototype.setCloseSelfFilter",_.so.prototype.setCloseSelfFilter);_.C("gapi.iframes.Context.prototype.setRestyleSelfFilter",_.so.prototype.setRestyleSelfFilter);
_.C("gapi.iframes.Context.prototype.addOnConnectHandler",_.so.prototype.addOnConnectHandler);_.C("gapi.iframes.Context.prototype.removeOnConnectHandler",_.so.prototype.removeOnConnectHandler);_.C("gapi.iframes.Context.prototype.addOnOpenerHandler",_.so.prototype.addOnOpenerHandler);_.C("gapi.iframes.Context.prototype.connectIframes",_.so.prototype.connectIframes);_.C("gapi.iframes.Iframe",_.oo);_.C("gapi.iframes.Iframe.prototype.isDisposed",_.oo.prototype.isDisposed);
_.C("gapi.iframes.Iframe.prototype.getContext",_.oo.prototype.getContext);_.C("gapi.iframes.Iframe.prototype.getFrameName",_.oo.prototype.getFrameName);_.C("gapi.iframes.Iframe.prototype.getId",_.oo.prototype.getId);_.C("gapi.iframes.Iframe.prototype.register",_.oo.prototype.register);_.C("gapi.iframes.Iframe.prototype.unregister",_.oo.prototype.unregister);_.C("gapi.iframes.Iframe.prototype.send",_.oo.prototype.send);_.C("gapi.iframes.Iframe.prototype.applyIframesApi",_.oo.prototype.applyIframesApi);
_.C("gapi.iframes.Iframe.prototype.getIframeEl",_.oo.prototype.getIframeEl);_.C("gapi.iframes.Iframe.prototype.getSiteEl",_.oo.prototype.getSiteEl);_.C("gapi.iframes.Iframe.prototype.setSiteEl",_.oo.prototype.setSiteEl);_.C("gapi.iframes.Iframe.prototype.getWindow",_.oo.prototype.getWindow);_.C("gapi.iframes.Iframe.prototype.getOrigin",_.oo.prototype.getOrigin);_.C("gapi.iframes.Iframe.prototype.close",_.oo.prototype.close);_.C("gapi.iframes.Iframe.prototype.restyle",_.oo.prototype.restyle);
_.C("gapi.iframes.Iframe.prototype.restyleDone",_.oo.prototype.us);_.C("gapi.iframes.Iframe.prototype.registerWasRestyled",_.oo.prototype.registerWasRestyled);_.C("gapi.iframes.Iframe.prototype.registerWasClosed",_.oo.prototype.registerWasClosed);_.C("gapi.iframes.Iframe.prototype.getParam",_.oo.prototype.getParam);_.C("gapi.iframes.Iframe.prototype.setParam",_.oo.prototype.setParam);_.C("gapi.iframes.Iframe.prototype.ping",_.oo.prototype.ping);_.C("gapi.iframes.Iframe.prototype.getOpenParams",_.oo.prototype.Ic);
_.Xf=_.Xf||{};
_.Xf=_.Xf||{};
(();_.C("gadgets.util.getUrlParameters",_.Xf.lh);
_.Ah=window.googleapis&&window.googleapis.server||{};
_.ag=);_.C("gadgets.config.register",_.ag.register);_.C("gadgets.config.get",_.ag.get);_.C("gadgets.config.init",_.ag.Ad);_.C("gadgets.config.update",_.ag.update);
_.C("gadgets.json.stringify",_.Ig);_.C("gadgets.json.parse",_.Hg);
(();
_.Xf=_.Xf||{};(();
_.Ng=_.Og=
_.Pg=_.lf(_.af.location.href,"rpctoken")&&_.qf(_.cf,"unload",function(){});var Qg=Qg||{};Qg.KY=null;Qg.AW=null;Qg.CA=null;Qg.frameElement=null;Qg=Qg||{};
Qg.GN||(Qg.GN=));if(window.gadgets&&window.gadgets.rpc)"undefined"!=typeof _.Rg&&_.Rg||(_.Rg=window.gadgets.rpc,_.Rg.config=_.Rg.config,_.Rg.register=_.Rg.register,_.Rg.unregister=_.Rg.unregister,_.Rg.pY=_.Rg.registerDefault,_.Rg.q0=_.Rg.unregisterDefault,_.Rg.mS=_.Rg.forceParentVerifiable,_.Rg.call=_.Rg.call,_.Rg.Ku=_.Rg.getRelayUrl,_.Rg.Wj=_.Rg.setRelayUrl,_.Rg.TC=_.Rg.setAuthToken,_.Rg.Fw=_.Rg.setupReceiver,_.Rg.qo=_.Rg.getAuthToken,_.Rg.iK=_.Rg.removeReceiver,_.Rg.cT=_.Rg.getRelayChannel,_.Rg.lY=_.Rg.receive,
_.Rg.mY=_.Rg.receiveSameDomain,_.Rg.getOrigin=_.Rg.getOrigin,_.Rg.Go=_.Rg.getTargetOrigin,_.Rg.AO=_.Rg._getTargetWin,_.Rg.n5=_.Rg._parseSiblingId);else{_.Rg=);_.Rg.Ad()};_.Rg.config({VY:);_.C("gadgets.rpc.config",_.Rg.config);_.C("gadgets.rpc.register",_.Rg.register);_.C("gadgets.rpc.unregister",_.Rg.unregister);_.C("gadgets.rpc.registerDefault",_.Rg.pY);_.C("gadgets.rpc.unregisterDefault",_.Rg.q0);_.C("gadgets.rpc.forceParentVerifiable",_.Rg.mS);_.C("gadgets.rpc.call",_.Rg.call);_.C("gadgets.rpc.getRelayUrl",_.Rg.Ku);_.C("gadgets.rpc.setRelayUrl",_.Rg.Wj);_.C("gadgets.rpc.setAuthToken",_.Rg.TC);_.C("gadgets.rpc.setupReceiver",_.Rg.Fw);_.C("gadgets.rpc.getAuthToken",_.Rg.qo);
_.C("gadgets.rpc.removeReceiver",_.Rg.iK);_.C("gadgets.rpc.getRelayChannel",_.Rg.cT);_.C("gadgets.rpc.receive",_.Rg.lY);_.C("gadgets.rpc.receiveSameDomain",_.Rg.mY);_.C("gadgets.rpc.getOrigin",_.Rg.getOrigin);_.C("gadgets.rpc.getTargetOrigin",_.Rg.Go);
_.Xf=_.Xf||{};_.Xf.J5=_.Xf.rda=
_.Fh=);_.C("shindig.random",_.Fh);
var Gh=Hh=Ih=Jh=Lh=Kh;for(Kh in _.zf("googleapis.config/methods"))Lh();_.C("googleapis.newHttpRequest",;_.C("googleapis.setUrlParameter",;
});
// Google Inc.
