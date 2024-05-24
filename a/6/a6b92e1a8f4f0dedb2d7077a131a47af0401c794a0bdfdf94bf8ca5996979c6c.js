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
a:{var Hd="",Id=);Id&&(Hd=Id?Id[1]:"");if(_.qd){var Jd=Fd();if(null!=Jd&&Jd>parseFloat(Hd)){Gd=String(Jd);break a}}Gd=Hd}_.Kd=Gd;if(_.r.document&&_.qd){var Od=Fd();Ld=Od?Od:parseInt(_.Kd,10)||void 0}else Ld=void 0;_.Pd=Ld;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}_.Qd=_.qd||_.vd;var Rd,Td;Rd=_.mc(;_.Sd=Td=/^[\w+/_-]+[=]{0,2}$/;_.Ud=_.Vd=_.Wd=_.g=_.Vd.prototype;_.g.clone=_.g.by=_.g.aspectRatio=_.g.isEmpty=_.g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_.g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_.g.round=_.g.scale=_.Xd=String.prototype.repeat?_.Yd=2147483648*Math.random()|0;var ce,me;_.ae=
_.be=
_.fe=ce={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};_.he=
_.ge=_.je=_.ne=
me=_.oe=
_.ke=_.ie=function(a){return"CSS1Compat"==a.compatMode};_.pe=
_.qe=_.re=_.se=_.te=_.ue=_.ve=
_.we=_.$d=
_.xe=_.Zd=_.g=_.Zd.prototype;_.g.Ja=_.ae;_.g.eL=_.ea(0);_.g.ub=_.g.O=_.ea(1);_.g.getElementsByTagName=
_.g.rH=_.ea(2);_.g.va=_.g.createElement=_.g.createTextNode=_.g.getWindow=_.g.appendChild=_.g.append=_.qe;_.g.canHaveChildren=_.pe;_.g.Be=_.re;_.g.PU=_.se;_.g.removeNode=_.te;_.g.CG=_.ue;_.g.isElement=_.ve;_.g.contains=_.we;_.g.UG=_.$d;_.g.Cj=_.ea(3);
_.ye=_.ze=_.E=
_.Ae=_.Be=
/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ce,Ee;Ce=Ee=_.Ge=
_.Ie=_.Je=
_.Ke=var De=Fe=[Ee("data"),Ee("http"),Ee("https"),Ee("mailto"),Ee("ftp"),new De(],He=Ce(;var Me=var Ne="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
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
var Cf,Df,Ef,Ff,Hf,If,Kf,Qf,Rf,Sf,Tf,Uf,Vf,Jf,Nf,Of;Cf=Df=Ef=Ff=_.Gf=
Hf=If=
Kf=_.Lf=_.Mf=
_.Pf=Qf=["data:","http:","https:","mailto:","ftp:"];
Rf=Sf=Tf=
Uf=Vf=
_.Wf=Jf=Nf={0:1,1:1};Of={0:.1,1:.1};
_.ag=);_.C("gadgets.config.register",_.ag.register);_.C("gadgets.config.get",_.ag.get);_.C("gadgets.config.init",_.ag.Ad);_.C("gadgets.config.update",_.ag.update);
var bg,cg,eg,fg,gg,hg,ig,jg,kg,lg,mg,ng,og,pg,qg,rg,sg,tg,ug,vg,wg,xg,yg,zg,Ag,Bg,Cg,Dg,Eg,Fg,Gg,Jg,Kg;eg=void 0;fg=gg=hg=gg(0);ig=gg(new Date(0));jg=gg(!0);kg=gg("");lg=gg({});mg=gg([]);
ng=og=/[\0-\x07\x0b\x0e-\x1f]/;
pg=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;qg=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;rg=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;sg=/"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;tg=/-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;ug=/[ \t\n\r]+/g;vg=/[^"]:/;wg=/""/g;xg=/true|false|null/g;yg=/00/;zg=/[\{]([^0\}]|0[^:])/;Ag=/(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;Bg=/[^\[,:][\[\{]/;Cg=/^(\{|\}|\[|\]|,|:|0)+/;Dg=/\u2028/g;
Eg=/\u2029/g;
Fg=Gg=_.Hg=
_.Ig=Jg=!Date.prototype.toISOString||"function"!==typeof Date.prototype.toISOString||"1970-01-01T00:00:00.000Z"!==(new Date(0)).toISOString();
Kg=Date.prototype.toISOString=Jg?Kg:Date.prototype.toISOString;
_.C("gadgets.json.stringify",_.Ig);_.C("gadgets.json.parse",_.Hg);
(();
_.Xf=_.Xf||{};
_.Xf=_.Xf||{};(();
_.Xf=_.Xf||{};
(();_.C("gadgets.util.getUrlParameters",_.Xf.lh);
var Lg=Lg.prototype.log=Lg.prototype.error=function(a){this.Sg&&(this.Sg.error?this.Sg.error(a):this.Sg.log&&this.Sg.log(a))};Lg.prototype.warn=Lg.prototype.debug=function(){};_.Mg=new Lg;
_.Ng=_.Og=
_.Pg=_.lf(_.af.location.href,"rpctoken")&&_.qf(_.cf,"unload",function(){});var Qg=Qg||{};Qg.KY=null;Qg.AW=null;Qg.CA=null;Qg.frameElement=null;Qg=Qg||{};
Qg.GN||(Qg.GN=));if(window.gadgets&&window.gadgets.rpc)"undefined"!=typeof _.Rg&&_.Rg||(_.Rg=window.gadgets.rpc,_.Rg.config=_.Rg.config,_.Rg.register=_.Rg.register,_.Rg.unregister=_.Rg.unregister,_.Rg.pY=_.Rg.registerDefault,_.Rg.q0=_.Rg.unregisterDefault,_.Rg.mS=_.Rg.forceParentVerifiable,_.Rg.call=_.Rg.call,_.Rg.Ku=_.Rg.getRelayUrl,_.Rg.Wj=_.Rg.setRelayUrl,_.Rg.TC=_.Rg.setAuthToken,_.Rg.Fw=_.Rg.setupReceiver,_.Rg.qo=_.Rg.getAuthToken,_.Rg.iK=_.Rg.removeReceiver,_.Rg.cT=_.Rg.getRelayChannel,_.Rg.lY=_.Rg.receive,
_.Rg.mY=_.Rg.receiveSameDomain,_.Rg.getOrigin=_.Rg.getOrigin,_.Rg.Go=_.Rg.getTargetOrigin,_.Rg.AO=_.Rg._getTargetWin,_.Rg.n5=_.Rg._parseSiblingId);else{_.Rg=);_.Rg.Ad()};_.Rg.config({VY:);_.C("gadgets.rpc.config",_.Rg.config);_.C("gadgets.rpc.register",_.Rg.register);_.C("gadgets.rpc.unregister",_.Rg.unregister);_.C("gadgets.rpc.registerDefault",_.Rg.pY);_.C("gadgets.rpc.unregisterDefault",_.Rg.q0);_.C("gadgets.rpc.forceParentVerifiable",_.Rg.mS);_.C("gadgets.rpc.call",_.Rg.call);_.C("gadgets.rpc.getRelayUrl",_.Rg.Ku);_.C("gadgets.rpc.setRelayUrl",_.Rg.Wj);_.C("gadgets.rpc.setAuthToken",_.Rg.TC);_.C("gadgets.rpc.setupReceiver",_.Rg.Fw);_.C("gadgets.rpc.getAuthToken",_.Rg.qo);
_.C("gadgets.rpc.removeReceiver",_.Rg.iK);_.C("gadgets.rpc.getRelayChannel",_.Rg.cT);_.C("gadgets.rpc.receive",_.Rg.lY);_.C("gadgets.rpc.receiveSameDomain",_.Rg.mY);_.C("gadgets.rpc.getOrigin",_.Rg.getOrigin);_.C("gadgets.rpc.getTargetOrigin",_.Rg.Go);
_.Xf=_.Xf||{};_.Xf.J5=_.Xf.rda=
var Bh=var Ch=_.ab(Ch,Bh);Ch.prototype.reset=
var Dh=
Ch.prototype.update=
Ch.prototype.digest=_.Eh=_.g=_.Eh.prototype;_.g.reset=_.g.s0=_.g.FQ=_.g.vx=_.g.dj=
_.Fh=);_.C("shindig.random",_.Fh);
});
// Google Inc.
