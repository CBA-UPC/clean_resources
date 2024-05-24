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
_.uc=Array.prototype.every?var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");var vc=!!(_.Va[0]&128),wc=!!(_.Va[0]&4),xc=!!(_.Va[0]&256),yc=!!(_.Va[0]&2);_.Cb=vc?xc:Ub(610401301,!1);_.zc=vc?wc||!yc:Ub(572417392,!0);var Cc,Ec;_.Ac=function(a){this.ZX=a};_.Ac.prototype.toString=function(){return this.ZX.toString()};_.Bc=function(a){if(a instanceof _.Ac&&a.constructor===_.Ac)return a.ZX;_.Vb(a);return"type_error:SafeUrl"};try{new URL("s://g"),Cc=!0}catch(a){Cc=!1}_.Dc=Cc;Ec={};_.Fc=_.Gc=_.Fc("about:invalid#zClosurez");var Lc,Nc,Oc,Pc,Qc,Rc,Kc,Tc;_.Hc=_.Ic=function(a){return/^[\s\xa0]*$/.test(a)};_.Jc=String.prototype.trim?function(a){return a.trim()}:
_.Sc=Lc=/&/g;Nc=/</g;Oc=/>/g;Pc=/"/g;Qc=/'/g;Rc=/\x00/g;Kc=/[\x00&<>"']/;_.yb=
_.Uc=
Tc=_.Vc={};_.Wc=function(a){this.YX=a};_.Wc.prototype.toString=function(){return this.YX.toString()};_.Xc=new _.Wc("",_.Vc);_.Zc=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");_.$c=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");_.ad=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g");var dd;_.bd={};_.cd=function(a){this.XX=a};_.cd.prototype.toString=function(){return this.XX.toString()};_.ed=dd=new _.cd("",_.bd);var fd;fd=_.r.navigator;_.Db=fd?fd.userAgentData||null:null;var gd;gd={};_.hd=function(a){this.WX=a};_.hd.prototype.toString=function(){return this.WX.toString()};_.id=function(a){if(a instanceof _.hd&&a.constructor===_.hd)return a.WX;_.Vb(a);return"type_error:SafeHtml"};_.kd=_.jd=_.ld=new _.hd(_.r.trustedTypes&&_.r.trustedTypes.emptyHTML||"",gd);_.md=_.jd("<br>");var nd=nd[" "]=function(){};_.od=var Fd,Gd,Ld;_.pd=_.Fb();_.qd=_.Hb();_.rd=_.Ab("Edge");_.td=_.rd||_.qd;_.ud=_.Ab("Gecko")&&!(_.yb(_.wb().toLowerCase(),"webkit")&&!_.Ab("Edge"))&&!(_.Ab("Trident")||_.Ab("MSIE"))&&!_.Ab("Edge");_.vd=_.yb(_.wb().toLowerCase(),"webkit")&&!_.Ab("Edge");_.wd=_.vd&&_.Ab("Mobile");_.xd=_.Ob();_.yd=_.Pb();_.zd=(Kb()?"Linux"===_.Db.platform:_.Ab("Linux"))||_.Qb();_.Ad=_.Lb();_.Bd=_.Mb();_.Cd=_.Ab("iPad");_.Dd=_.Ab("iPod");_.Ed=_.Nb();Fd=
a:{var Hd="",Id=);Id&&(Hd=Id?Id[1]:"");if(_.qd){var Jd=Fd();if(null!=Jd&&Jd>parseFloat(Hd)){Gd=String(Jd);break a}}Gd=Hd}_.Kd=Gd;if(_.r.document&&_.qd){var Od=Fd();Ld=Od?Od:parseInt(_.Kd,10)||void 0}else Ld=void 0;_.Pd=Ld;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}_.Qd=_.qd||_.vd;var Rd,Td;Rd=_.mc(;_.Sd=Td=/^[\w+/_-]+[=]{0,2}$/;_.Ud=_.Vd=function(a,b){this.width=a;this.height=b};_.Wd=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};_.g=_.Vd.prototype;_.g.clone=function(){return new _.Vd(this.width,this.height)};_.g.by=_.g.aspectRatio=_.g.isEmpty=_.g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
_.g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};_.g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};_.g.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};_.Xd=String.prototype.repeat?_.Yd=2147483648*Math.random()|0;var ce,me;_.ae=
_.be=
_.fe=ce={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};_.he=
_.ge=_.je=_.ne=
me=_.oe=function(a){return _.ke(document,a)};
_.ke=_.ie=function(a){return"CSS1Compat"==a.compatMode};_.pe=
_.qe=_.re=_.se=_.te=_.ue=_.ve=
_.we=_.$d=
_.xe=_.Zd=_.g=_.Zd.prototype;_.g.Ja=_.ae;_.g.eL=_.ea(0);_.g.ub=function(){return this.Hb};_.g.O=_.ea(1);_.g.getElementsByTagName=
_.g.rH=_.ea(2);_.g.va=_.g.createElement=function(a){return _.ke(this.Hb,a)};_.g.createTextNode=_.g.getWindow=_.g.appendChild=_.g.append=_.qe;_.g.canHaveChildren=_.pe;_.g.Be=_.re;_.g.PU=_.se;_.g.removeNode=_.te;_.g.CG=_.ue;_.g.isElement=_.ve;_.g.contains=_.we;_.g.UG=_.$d;_.g.Cj=_.ea(3);
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
new Set(Ce(),new Map(Ce(function(){return Pe.concat([["style",{he:4}]])}))),Se=new Me(new Set(Ce(),new Set(Ce(),new Map(Ce(),new Set(["data-","aria-"]));var Te;Te=function(a){this.OY=a;this.Ay=[]};_.Ue=Ce(function(){return new Te(Qe)});_.Ve=Ce(function(){return new Te(Re)});_.We=Ce(;
/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
_.Xe=_.Ye=_.Ze=_.$e=_.af=window;_.cf=document;_.df=_.af.location;_.ef=/\[native code\]/;_.ff=
_.gf=_.hf=_.jf=_.kf=_.ff(_.af,"gapi",{});_.lf=_.mf=new RegExp(/^/.source+/([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source+/(\/\/[^\/?#]*)?/.source+/([^?#]*)?/.source+/(\?([^#]*))?/.source+/(#((#|[^#])*))?/.source+/$/.source);_.nf=new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source+/%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g");
_.of=new RegExp(/\/?\??#?/.source+"("+/[\/?#]/i.source+"|"+/[\uD800-\uDBFF]/i.source+"|"+/%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source+"|"+/%[0-9a-f]?/i.source+")$","i");_.qf=_.pf=_.rf={};_.rf=_.ff(_.af,"___jsl",_.gf());_.ff(_.rf,"I",0);_.ff(_.rf,"hel",10);var sf,tf,uf,vf,wf,xf,yf;sf=function(a){var b=window.___jsl=window.___jsl||{};b[a]=b[a]||[];return b[a]};tf=function(a){var b=window.___jsl=window.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg};uf=function(a){return"object"===typeof a&&/\[native code\]/.test(a.push)};
vf=function(a,b,c){if(b&&"object"===typeof b)for(var d in b)!Object.prototype.hasOwnProperty.call(b,d)||c&&"___goc"===d&&"undefined"===typeof b[d]||(a[d]&&b[d]&&"object"===typeof a[d]&&"object"===typeof b[d]&&!uf(a[d])&&!uf(b[d])?vf(a[d],b[d]):b[d]&&"object"===typeof b[d]?(a[d]=uf(b[d])?[]:{},vf(a[d],b[d])):a[d]=b[d])};
wf=function(a){if(a&&!/^\s+$/.test(a)){for(;0==a.charCodeAt(a.length-1);)a=a.substring(0,a.length-1);try{var b=window.JSON.parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(c){}return"object"===typeof b?b:{}}};
xf=function(a,b){var c={___goc:void 0};a.length&&a[a.length-1]&&Object.hasOwnProperty.call(a[a.length-1],"___goc")&&"undefined"===typeof a[a.length-1].___goc&&(c=a.pop());vf(c,b);a.push(c)};
yf=_.zf=
_.Af=var Bf=Bf&&Bf();yf();_.C("gapi.config.get",_.zf);_.C("gapi.config.update",_.Af);
var Cf,Df,Ef,Ff,Hf,If,Kf,Qf,Rf,Sf,Tf,Uf,Vf,Jf,Nf,Of;Cf=Df=Ef=Ff=function(a,b,c){a.setAttribute(b,c)};_.Gf=
Hf=If=
Kf=_.Lf=_.Mf=
_.Pf=Qf=["data:","http:","https:","mailto:","ftp:"];
Rf=Sf=Tf=
Uf=Vf=
_.Wf=Jf=Nf={0:1,1:1};Of={0:.1,1:.1};
_.vh=(window.gapi||{}).load;
_.Po=_.ff(_.rf,"rw",_.gf());
var Qo=var Ro=_.So=_.To=
_.Uo=_.Vo=_.Wo=
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
_.Rg.mY=_.Rg.receiveSameDomain,_.Rg.getOrigin=_.Rg.getOrigin,_.Rg.Go=_.Rg.getTargetOrigin,_.Rg.AO=_.Rg._getTargetWin,_.Rg.n5=_.Rg._parseSiblingId);else{_.Rg=);_.Rg.Ad()};_.Rg.config({VY:function(a){throw Error("z`"+a);}});_.C("gadgets.rpc.config",_.Rg.config);_.C("gadgets.rpc.register",_.Rg.register);_.C("gadgets.rpc.unregister",_.Rg.unregister);_.C("gadgets.rpc.registerDefault",_.Rg.pY);_.C("gadgets.rpc.unregisterDefault",_.Rg.q0);_.C("gadgets.rpc.forceParentVerifiable",_.Rg.mS);_.C("gadgets.rpc.call",_.Rg.call);_.C("gadgets.rpc.getRelayUrl",_.Rg.Ku);_.C("gadgets.rpc.setRelayUrl",_.Rg.Wj);_.C("gadgets.rpc.setAuthToken",_.Rg.TC);_.C("gadgets.rpc.setupReceiver",_.Rg.Fw);_.C("gadgets.rpc.getAuthToken",_.Rg.qo);
_.C("gadgets.rpc.removeReceiver",_.Rg.iK);_.C("gadgets.rpc.getRelayChannel",_.Rg.cT);_.C("gadgets.rpc.receive",_.Rg.lY);_.C("gadgets.rpc.receiveSameDomain",_.Rg.mY);_.C("gadgets.rpc.getOrigin",_.Rg.getOrigin);_.C("gadgets.rpc.getTargetOrigin",_.Rg.Go);
_.zh=
var Bh=var Ch=_.ab(Ch,Bh);Ch.prototype.reset=
var Dh=
Ch.prototype.update=
Ch.prototype.digest=_.Eh=_.g=_.Eh.prototype;_.g.reset=_.g.s0=function(a){this.KM.update(a)};_.g.FQ=function(){return this.KM.digest()};_.g.vx=_.g.dj=
_.hi=
_.ii=_.ji=_.ki=_.li=_.mi=
_.ni=_.oi=_.pi=
_.qi=_.ri=_.li();_.si=_.Mb()||_.Ab("iPod");_.ti=_.Ab("iPad");_.ui=_.oi();_.vi=_.mi();_.wi=_.ni()&&!_.Nb();
_.Vi=_.Wi=
_.Xi=_.Yi=var Zi;Zi=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
_.$i=
var rj,qj,xj,yj,sj,vj,tj,zj,uj;_.wj=rj=_.af.crypto;qj=!1;xj=0;yj=0;sj=1;vj=0;tj="";zj=uj=
qj=!!rj&&"function"==typeof rj.getRandomValues;qj||(vj=1E6*(screen.width*screen.width+screen.height),tj=uj(_.cf.cookie+"|"+_.cf.location+"|"+(new Date).getTime()+"|"+Math.random()),xj=_.Wi("random/maxObserveMousemove")||0,0!=xj&&_.qf(_.af,"mousemove",zj));
_.Hj=
_.Mj=[];_.Nj=[];_.Oj=!1;_.Pj=
_.zk=_.Ak=_.Bk=
var Ck=function(a){this.T=a};_.g=Ck.prototype;_.g.value=function(){return this.T};_.g.Ue=function(a){this.T.width=a;return this};_.g.Xb=function(){return this.T.width};_.g.je=function(a){this.T.height=a;return this};_.g.Vc=function(){return this.T.height};_.g.Bh=function(a){this.T.style=a;return this};_.g.getStyle=function(){return this.T.style};_.Dk=function(a){this.T=a||{}};_.g=_.Dk.prototype;_.g.value=function(){return this.T};_.g.setUrl=function(a){this.T.url=a;return this};_.g.getUrl=function(){return this.T.url};_.g.Bh=function(a){this.T.style=a;return this};_.g.getStyle=function(){return this.T.style};_.g.Te=function(a){this.T.id=a;return this};_.g.getId=function(){return this.T.id};_.g.Bn=function(a){this.T.rpctoken=a;return this};_.Ek=function(a,b){a.T.messageHandlers=b;return a};_.Fk=function(a,b){a.T.messageHandlersFilter=b;return a};
_.g=_.Dk.prototype;_.g.Bs=_.ea(4);_.g.getContext=function(){return this.T.context};_.g.yd=function(){return this.T.openerIframe};_.g.zo=_.g.Fk=function(){return this.T.controller};
var Ok;_.Gk=_.Hk=_.Ik=
_.Jk=_.Kk=function(){};_.Lk=function(a){return a};_.Mk=_.Nk=Ok=Ok.prototype.get=
Ok.prototype.put=var Qk,Rk,Pk;_.Sk=
Rk=Pk=_.Lk;_.Pj(function(a){Pk=a});var Tk=Tk.prototype.add=Tk.prototype.remove=var Uk=new Ok(function(){return new Vk},function(a){return a.reset()}),Vk=function(){this.next=this.scope=this.fi=null};Vk.prototype.set=
Vk.prototype.reset=var Wk,Xk,Yk,Zk,al;Xk=!1;Yk=new Tk;_.$k=Zk=al=var dl,el,fl,tl,xl,vl,yl;_.cl=dl=dl.prototype.reset=el=new Ok(function(){return new dl},function(a){a.reset()});
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
var bn;
bn=
_.cn=
var dn=en=fn=gn,hn,mn,on,tn,Cn,Dn,Fn,Jn,Kn,Nn,Pn,Qn,Sn,Rn,Tn;
_.Dk.prototype.Bs=_.hb(4,function(a){this.T.apis=a;return this});gn=function(a,b){a.T.onload=b};hn=function(a){return a.T.rpctoken};_.jn=function(a,b){a.T.queryParams=b;return a};_.kn=function(a,b){a.T.relayOpen=b;return a};_.ln=function(a,b){a.T.onClose=b;return a};mn=function(a,b){a.T.controllerData=b};_.nn=function(a){a.T.waitForOnload=!0;return a};on=_.pn=
_.qn=_.rn=_.sn=tn=function(a){this.T=a||{}};tn.prototype.value=function(){return this.T};
tn.prototype.getIframe=function(){return this.T.iframe};var un=function(a,b){a.T.role=b;return a},vn=function(a,b){a.T.data=b;return a};tn.prototype.wl=function(a){this.T.setRpcReady=a;return this};var wn=function(a){return a.T.setRpcReady};tn.prototype.Bn=function(a){this.T.rpctoken=a;return this};var xn=yn=yn.prototype.value=function(){return this.T};var An=yn.prototype.fT=function(){return this.T.role};
yn.prototype.Qc=function(a){this.T.handler=a;return this};yn.prototype.Cb=function(){return this.T.handler};var Bn=function(a,b){a.T.filter=b;return a};yn.prototype.Bs=function(a){this.T.apis=a;return this};Fn=/^[\w\.\-]*$/;_.Gn=_.Hn=_.In=
Jn=Kn=_.Ln=
_.Mn=Nn=_.On=Pn=/^https?:\/\/[^\/%\\?#\s]+$/i;Qn={longdesc:!0,name:!0,src:!0,frameborder:!0,marginwidth:!0,marginheight:!0,scrolling:!0,align:!0,height:!0,width:!0,id:!0,"class":!0,title:!0,tabindex:!0,hspace:!0,vspace:!0,allowtransparency:!0};
Sn=Rn=Tn=_.g=Tn.prototype;_.g.CROSS_ORIGIN_IFRAMES_FILTER=function(a){return this.Dg().CROSS_ORIGIN_IFRAMES_FILTER(a)};_.g.SAME_ORIGIN_IFRAMES_FILTER=function(a){return this.Dg().SAME_ORIGIN_IFRAMES_FILTER(a)};
_.g.create=function(a,b,c){return this.Dg().create(a,b,c)};_.g.getBeforeOpenStyle=function(a){return this.Dg().getBeforeOpenStyle(a)};_.g.getContext=_.g.getStyle=function(a){return this.Dg().getStyle(a)};_.g.makeWhiteListIframesFilter=_.g.registerBeforeOpenStyle=function(a,b){return this.Dg().registerBeforeOpenStyle(a,b)};
_.g.registerIframesApi=function(a,b,c){return this.Dg().registerIframesApi(a,b,c)};_.g.registerIframesApiHandler=_.g.registerStyle=var Un=function(){this.Ki=[]};Un.prototype.Dg=var Vn=Wn=function(){Un.apply(this,arguments)};_.E(Wn,Un);var Yn=var Xn=new Yn({instance:priority:1});_.Zn=Xn.instance;var $n,ao;$n={height:!0,width:!0};ao=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;_.bo=var co=function(){tn.apply(this,arguments)};_.E(co,tn);var zn=_.E(zn,yn);var eo=_.E(eo,_.Dk);var fo=_.E(fo,eo);var go=function(a,b){a.T.frameName=b;return a};fo.prototype.getFrameName=function(){return this.T.frameName};var ho=function(a,b){a.T.rpcAddr=b;return a};fo.prototype.Ig=function(){return this.T.rpcAddr};var io=_.g=fo.prototype;_.g.ti=function(){return this.T.retAddr};_.g.Uj=function(a){this.T.origin=a;return this};_.g.getOrigin=function(){return this.T.origin};_.g.wl=function(a){this.T.setRpcReady=a;return this};
_.g.Mp=function(a){this.T.context=a};var jo=function(a,b){a.T._rpcReadyFn=b};fo.prototype.getIframeEl=function(){return this.T.iframeEl};var ko=var mo=lo=_.oo=_.g=_.oo.prototype;_.g.isDisposed=function(){return this.dh};
_.g.Ia=_.g.getContext=function(){return this.tb};_.g.getOptions=function(){return this.Oa};_.g.Ig=function(){return this.tK};_.g.ti=function(){return this.HY};_.g.getFrameName=function(){return this.Mq};_.g.getIframeEl=function(){return this.eaa};_.g.getSiteEl=function(){return this.q_};_.g.setSiteEl=function(a){this.q_=a};_.g.wl=
_.g.setParam=_.g.getParam=_.g.Ic=function(){return this.Oa.value()};_.g.getId=function(){return this.Oa.getId()};_.g.getOrigin=function(){return this.Ld};var po=_.g=_.oo.prototype;
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
_.g.Rda=var Co;_.vo=_.gf();_.wo=_.gf();_.xo=function(a,b){_.vo[a]=b};_.Bo=function(a){return _.vo[a]};Co=_.Do=_.Eo=function(a){return _.wo[a]};_.so=_.g=_.so.prototype;
_.g.isDisposed=function(){return this.dh};_.g.Ia=_.g.getFrameName=function(){return this.Mq};_.g.getOrigin=function(){return this.Ld};_.g.getWindow=function(){return this.qg};_.g.ub=function(){return this.qg.document};_.g.setGlobalParam=function(a,b){this.Kj[a]=b};_.g.getGlobalParam=
_.g.attach=_.g.uK=var Fo=
_.so.prototype.openChild=
var Ho=Io=Jo=
_.so.prototype.open=_.so.prototype.getParentIframe=function(){return this.yb};var Ko=_.g=_.so.prototype;
_.g.closeSelf=_.g.restyleSelf=
_.g.r0=_.g.setCloseSelfFilter=function(a){this.setGlobalParam("onCloseSelfFilter",a)};_.g.setRestyleSelfFilter=function(a){this.setGlobalParam("onRestyleSelfFilter",a)};var Go=
_.so.prototype.ready=
_.so.prototype.connectIframes=
var to=_.so.prototype.addOnConnectHandler=
_.so.prototype.removeOnConnectHandler=var uo=
_.so.prototype.addOnOpenerHandler=_.so.prototype.cW=
var Lo=_.so.prototype.VT=Cn=_.gf();Dn=_.gf();_.En=new _.so;Nn("_g_rpcReady",_.oo.prototype.wl);Nn("_g_discover",_.oo.prototype.Z8);Nn("_g_ping",_.oo.prototype.Qca);Nn("_g_close",_.oo.prototype.x6);Nn("_g_closeMe",_.oo.prototype.y6);Nn("_g_restyle",_.oo.prototype.Sda);Nn("_g_restyleMe",_.oo.prototype.Tda);Nn("_g_wasClosed",_.oo.prototype.Aga);_.Mn("control","_g_control",_.oo.prototype.E6);_.Mn("control","_g_disposeControl",_.oo.prototype.U6);var Mo=_.En.getParentIframe();
Mo&&Mo.register("_g_restyleDone",_.oo.prototype.Rda,_.Hn);Nn("_g_connect",_.oo.prototype.B6);var No={};No._g_open=_.oo.prototype.zca;_.Ln("_open",No,_.Hn);var Oo={Context:_.so,Iframe:_.oo,SAME_ORIGIN_IFRAMES_FILTER:_.Gn,CROSS_ORIGIN_IFRAMES_FILTER:_.Hn,makeWhiteListIframesFilter:_.In,getContext:_.On,registerIframesApi:_.Ln,registerIframesApiHandler:_.Mn,registerStyle:_.xo,registerBeforeOpenStyle:_.Do,getStyle:_.Bo,getBeforeOpenStyle:_.Eo,create:_.an};Yn({instance:priority:2});_.Mn("gapi.load","_g_gapi.load",;
_.Xo=_.gf();
_.Yo={};window.iframer=_.Yo;
var bp=ap={},cp=function(){},Zo=function(a){this.bY=a},dp,ep,fp,gp,hp,lp,mp;_.E(Zo,cp);Zo.prototype.toString=function(){return this.bY};
dp=ep={button:!0,div:!0,span:!0};fp=gp=hp=_.ip={callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1};_.jp=!1;
_.kp=lp=
mp=_.np=_.op=
_.pp=function(a,b,c){null==a&&c&&(a=c.db,null==a&&(a=c.gwidget&&c.gwidget.db));return a||void 0};_.qp=_.rp=var sp,tp,up,vp,wp,xp,zp,yp;sp={se:"0"};tp={post:!0};up={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"};vp="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" ");wp=_.ff(_.rf,"WI",_.gf());xp=["style","data-gapiscan"];
zp=
_.Bp=_.Ap=yp=var $o=_.Bk(["data-"]),Cp,Dp,Ep,Fp,Gp=/(?:^|\s)g-((\S)*)(?:$|\s)/,Hp={plusone:!0,autocomplete:!0,profile:!0,signin:!0,signin2:!0};Cp=_.ff(_.rf,"SW",_.gf());Dp=_.ff(_.rf,"SA",_.gf());Ep=_.ff(_.rf,"SM",_.gf());Fp=_.ff(_.rf,"FW",[]);
var Ip=Mp=var Np=Lp=Op=_.ff(_.kf,"platform",{}).go=var Pp=_.ff(_.rf,"perf",_.gf()),Jp=_.ff(Pp,"g",_.gf()),Qp=_.ff(Pp,"i",_.gf()),Rp,Sp,Tp,Kp,Vp,Wp,Xp;_.ff(Pp,"r",[]);Rp=_.gf();Sp=_.gf();Tp=Kp=Vp=_.Up=Wp=
Xp=(();if(window.__gapi_jstiming__){window.__gapi_jstiming__.rP={};window.__gapi_jstiming__.Ada=1;var Yp=Zp=$p=window.__gapi_jstiming__.report=;var aq={g:"gapi_global",m:"gapi_module",w:"gwidget"},bq=bq.prototype.key=
var cq=new bq,dq=navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/),eq=_.ff(Pp,"_c",_.gf()),fq=Math.random()<(_.zf("csi/rate")||0),hq=iq=gq=
Tp("blt","bs0","bs1");Tp("psi","ps0","ps1");Tp("rpcqi","rqe","rqd");Tp("bsprt","bsrt0","bsrt1");Tp("bsrqt","bsrt1","bsrt2");Tp("bsrst","bsrt2","bsrt3");Tp("mli","ml0","ml1");Tp("mei","me0","me1",!0);Tp("wcdi","wrs","wcdi");Tp("wci","wrs","wdc");Tp("wdi","wrs","wrdi");Tp("wdt","bs0","wrdt");Tp("wri","wrs","wrri",!0);Tp("wrt","bs0","wrrt");Tp("wji","wje0","wje1",!0);Tp("wjli","wjl0","wjl1");Tp("whi","wh0","wh1",!0);Tp("wai","waaf0","waaf1",!0);Tp("wadi","wrs","waaf1",!0);Tp("wadt","bs0","waaf1",!0);
Tp("wprt","wrt0","wrt1");Tp("wrqt","wrt1","wrt2");Tp("wrst","wrt2","wrt3",!0);Tp("fbprt","fsrt0","fsrt1");Tp("fbrqt","fsrt1","fsrt2");Tp("fbrst","fsrt2","fsrt3",!0);Tp("fdns","fdns0","fdns1");Tp("fcon","fcon0","fcon1");Tp("freq","freq0","freq1");Tp("frsp","frsp0","frsp1");Tp("fttfb","fttfb0","fttfb1");Tp("ftot","ftot0","ftot1",!0);var jq=Pp.r;if("function"!==typeof jq){for(var kq;kq=jq.shift();)hq.apply(null,kq);Pp.r=hq};var lq=["div"],mq="onload",nq=!0,oq=!0,pq=function(a){return a},qq=null,rq=vq,wq,xq,yq,zq,Aq,Bq,Hq,Cq,Iq,Jq,Kq,Lq,Mq,Dq,Fq,Nq,Eq,Oq,Pq,Qq,Rq,Sq,Tq;qq=_.zf();_.zf("gwidget");var sq=rq("parsetags");mq="explicit"===sq||"onload"===sq?sq:mq;var tq=rq("google_analytics");"undefined"!==typeof tq&&(nq=!!tq);var uq=rq("data_layer");"undefined"!==typeof uq&&(oq=!!uq);vq=
wq=xq=yq=zq=
Aq=Bq=);
Hq=
Cq=
Iq=Jq=Kq=function(a){return Jq(a)?"_renderstart":"renderstart"};Lq=Mq=function(){return!0};Dq=
Fq=Nq=Eq=Oq=
Pq=Qq=Rq=
Sq=Tq=
_.Uq=var Vq=Gq=_.C("gapi.widget.make",_.Uq);
_.Xf=_.Xf||{};_.Xf.Ev=function(a,b,c){for(var d=[],e=2,f=arguments.length;e<f;++e)d.push(arguments[e]);return function(){for(var h=d.slice(),k=0,l=arguments.length;k<l;++k)h.push(arguments[k]);return b.apply(a,h)}};_.Xf.sB=
_.Xf=_.Xf||{};_.Xf.J5=_.Xf.rda=
_.Xf=_.Xf||{};
(();
_.Fh=);_.C("shindig.random",_.Fh);
_.Qa.Pa={};_.Qa.Pa.Wi={};_.Qa.Pa.Wi.a6=_.Qa.Pa.Wi.oT=_.Qa.Pa.Wi.Qpa=
_.Qa.Pa.Wi.Ev=
var br,cr,dr,er,hr,ir,jr,kr,lr,mr,nr;br=cr=dr=
er=_.fr=_.gr=
hr=function(a){_.rf.h=a};ir=jr=kr=
lr=
mr=
nr=
_.or=var pr,qr=window.location.href,rr=qr.indexOf("?"),sr=qr.indexOf("#");
pr=(-1===sr?qr.substr(rr+1):[qr.substr(rr+1,sr-rr-1),"&",qr.substr(sr+1)].join("")).split("&");for(var tr=window.decodeURIComponent?decodeURIComponent:unescape,ur=0,vr=pr.length;ur<vr;++ur){var wr=pr[ur].indexOf("=");if(-1!==wr){var xr=pr[ur].substring(wr+1);xr=xr.replace(/\+/g," ");try{tr(xr)}catch(a){}}};if(window.ToolbarApi)yr=window.ToolbarApi,yr.La=window.ToolbarApi.getInstance,yr.prototype=window.ToolbarApi.prototype,_.g=yr.prototype,_.g.openWindow=yr.prototype.openWindow,_.g.WP=yr.prototype.closeWindow,_.g.CZ=yr.prototype.setOnCloseHandler,_.g.HP=yr.prototype.canClosePopup,_.g.CY=yr.prototype.resizeWindow;else{var yr=function(){};yr.La=_.g=yr.prototype;_.g.openWindow=function(a){return window.external.GTB_OpenPopup&&
window.external.GTB_OpenPopup(a)};_.g.WP=_.g.CZ=_.g.HP=_.g.CY=var zr=null;window.ToolbarApi=yr;window.ToolbarApi.getInstance=yr.La};var Ar=/^[-_.0-9A-Za-z]+$/,Br={open:"open",onready:"ready",close:"close",onresize:"resize",onOpen:"open",onReady:"ready",onClose:"close",onResize:"resize",onRenderStart:"renderstart"},Cr={onBeforeParentOpen:"beforeparentopen"},Dr={onOpen:onClose:,Er=Fr,Gr,Hr,Kr,Lr,Mr,Nr,Pr,Or;_.Qa.zo=
Fr=Gr=Hr=_.Ir=
_.Jr=Kr=
Lr=Mr=
Nr=Pr=
Or=Or.prototype.Ic=function(){return this.OB};Or.prototype.VG=function(){return this.params};Or.prototype.Sz=function(){return this.methods};Or.prototype.yd=function(){return this.Xk};
var Qr=Rr=Or.prototype.lb=var Sr=Or.prototype.Ep=
Or.prototype.xi=var Tr=Or.prototype.send=
Or.prototype.register=var Ur=Pr(Ur);_.g=Ur.prototype;
_.g.xh=_.g.ei=_.g.getId=function(){return this.id};_.g.getIframeEl=function(){return this.zi};_.g.getSiteEl=function(){return this.el};_.g.setSiteEl=function(a){this.el=a};_.g.NB=
_.g.YW=_.g.close=_.g.remove=
_.g.gX=
_.g.DY=
var Vr=Pr(Vr);Vr.prototype.h9=function(){return this.fq};
Vr.prototype.yca=Vr.prototype.NB=
Vr.prototype.wca=
var Wr=Pr(Wr);
Wr.prototype.close=Wr.prototype.RW=_.Yo.send=
(();_.C("iframes.allow",_.Qa.allow);_.C("iframes.callSiblingOpener",_.Qa.Z5);_.C("iframes.registerForOpenedSibling",_.Qa.nda);_.C("iframes.close",_.Qa.close);_.C("iframes.getGoogleConnectJsUri",_.Qa.v8);_.C("iframes.getHandler",_.Qa.Cb);_.C("iframes.getDeferredHandler",_.Qa.l8);_.C("iframes.getParentInfo",_.Qa.ZS);_.C("iframes.iframer",_.Qa.AU);_.C("iframes.open",_.Qa.open);_.C("iframes.openedId_",_.Qa.Aca);_.C("iframes.propagate",_.Qa.cY);_.C("iframes.ready",_.Qa.ready);_.C("iframes.resize",_.Qa.resize);
_.C("iframes.setGoogleConnectJsVersion",_.Qa.Rea);_.C("iframes.setBootstrapHint",_.Qa.eZ);_.C("iframes.setJsHint",_.Qa.Xea);_.C("iframes.setHandler",_.Qa.Qc);_.C("iframes.setDeferredHandler",_.Qa.ZK);_.C("IframeBase",Or);_.C("IframeBase.prototype.addCallback",Or.prototype.lb);_.C("IframeBase.prototype.getMethods",Or.prototype.Sz);_.C("IframeBase.prototype.getOpenerIframe",Or.prototype.yd);_.C("IframeBase.prototype.getOpenParams",Or.prototype.Ic);_.C("IframeBase.prototype.getParams",Or.prototype.VG);
_.C("IframeBase.prototype.removeCallback",Or.prototype.Ep);_.C("Iframe",Ur);_.C("Iframe.prototype.close",Ur.prototype.close);_.C("Iframe.prototype.exposeMethod",Ur.prototype.ei);_.C("Iframe.prototype.getId",Ur.prototype.getId);_.C("Iframe.prototype.getIframeEl",Ur.prototype.getIframeEl);_.C("Iframe.prototype.getSiteEl",Ur.prototype.getSiteEl);_.C("Iframe.prototype.openInto",Ur.prototype.xh);_.C("Iframe.prototype.remove",Ur.prototype.remove);_.C("Iframe.prototype.setSiteEl",Ur.prototype.setSiteEl);
_.C("Iframe.prototype.addCallback",Ur.prototype.lb);_.C("Iframe.prototype.getMethods",Ur.prototype.Sz);_.C("Iframe.prototype.getOpenerIframe",Ur.prototype.yd);_.C("Iframe.prototype.getOpenParams",Ur.prototype.Ic);_.C("Iframe.prototype.getParams",Ur.prototype.VG);_.C("Iframe.prototype.removeCallback",Ur.prototype.Ep);_.C("IframeProxy",Vr);_.C("IframeProxy.prototype.getTargetIframeId",Vr.prototype.h9);_.C("IframeProxy.prototype.addCallback",Vr.prototype.lb);_.C("IframeProxy.prototype.getMethods",Vr.prototype.Sz);
_.C("IframeProxy.prototype.getOpenerIframe",Vr.prototype.yd);_.C("IframeProxy.prototype.getOpenParams",Vr.prototype.Ic);_.C("IframeProxy.prototype.getParams",Vr.prototype.VG);_.C("IframeProxy.prototype.removeCallback",Vr.prototype.Ep);_.C("IframeWindow",Wr);_.C("IframeWindow.prototype.close",Wr.prototype.close);_.C("IframeWindow.prototype.onClosed",Wr.prototype.RW);_.C("iframes.util.getTopMostAccessibleWindow",_.Qa.Pa.Wi.oT);_.C("iframes.handlers.get",_.Qa.sA.get);_.C("iframes.handlers.set",_.Qa.sA.set);
_.C("iframes.resizeMe",_.Qa.BY);_.C("iframes.setVersionOverride",_.Qa.nfa);_.C("iframes.CROSS_ORIGIN_IFRAMES_FILTER",_.Qa.CROSS_ORIGIN_IFRAMES_FILTER);_.C("IframeBase.prototype.send",Or.prototype.send);_.C("IframeBase.prototype.register",Or.prototype.register);_.C("Iframe.prototype.send",Ur.prototype.send);_.C("Iframe.prototype.register",Ur.prototype.register);_.C("IframeProxy.prototype.send",Vr.prototype.send);_.C("IframeProxy.prototype.register",Vr.prototype.register);
_.C("IframeWindow.prototype.send",Wr.prototype.send);_.C("IframeWindow.prototype.register",Wr.prototype.register);_.C("iframes.iframer.send",_.Qa.AU.send);
var eu=_.Qa.Qc,fu={open:attach:;fu.onready=_.Uo;fu.onRenderStart=_.Uo;fu.close=_.Vo;eu("inline",fu);
_.xi=_.Bi=var Ci,Di,Fi;Ci={};Di=null;_.Ei=_.ud||_.vd||!_.wi&&!_.qd&&"function"==typeof _.r.atob;_.Gi=
_.Hi=
Fi=
_.aj={};var cj;_.bj=_.g=_.bj.prototype;_.g.isEnabled=
_.g.set=
_.g.get=_.g.remove=_.g.Gg=function(){return cj(this).keys};_.g.Jd=_.g.isEmpty=_.g.Tb=
_.g.cj=_.g.sk=_.g.clear=cj=
_.dj=new _.bj("undefined"==typeof document?null:document);
_.oj={};_.pj=
_.Ij=_.Jj=_.Jj.prototype.dh=!1;_.Jj.prototype.isDisposed=function(){return this.dh};_.Jj.prototype.Ia=_.Lj=_.Kj=_.Jj.prototype.ua=
var Qj=_.Zd.prototype.O=_.hb(1,;_.Rj=_.Sj=_.Uj=_.Uj.prototype.stopPropagation=function(){this.Zv=!0};_.Uj.prototype.preventDefault=function(){this.defaultPrevented=!0};var Wj=);_.Xj=_.ab(_.Xj,_.Uj);var Yj={2:"touch",3:"pen",4:"mouse"};
_.Xj.prototype.Ad=_.Xj.prototype.stopPropagation=_.Xj.prototype.preventDefault=_.Zj="closure_listenable_"+(1E6*Math.random()|0);_.ak=var bk=0;var ck=dk=var ek=ek.prototype.add=ek.prototype.remove=
var gk=ek.prototype.removeAll=ek.prototype.Zq=
ek.prototype.hasListener=var fk=var hk,ik,jk,nk,pk,qk,rk,uk;hk="closure_lm_"+(1E6*Math.random()|0);ik={};jk=0;_.lk=
nk=pk=
_.kk=_.sk=
_.tk=qk=
rk=_.ok=uk="__closure_events_fn_"+(1E9*Math.random()>>>0);_.mk=_.Pj(;_.vk=_.ab(_.vk,_.Jj);_.vk.prototype[_.Zj]=!0;_.g=_.vk.prototype;_.g.Co=function(){return this.HJ};_.g.fD=function(a){this.HJ=a};_.g.addEventListener=function(a,b,c,d){_.lk(this,a,b,c,d)};_.g.removeEventListener=
_.g.dispatchEvent=
_.g.ua=_.g.ma=function(a,b,c,d){return this.Dk.add(String(a),b,!1,c,d)};_.g.Lr=_.g.Kc=function(a,b,c,d){return this.Dk.remove(String(a),b,c,d)};_.g.mN=_.g.hK=
_.g.pu=_.g.Zq=_.g.hasListener=
var st;st=_.tt=_.ut=_.vt=
_.wt=_.xt=_.zt=_.At=_.ab(_.At,_.Jj);var Bt=[];_.At.prototype.ma=
_.At.prototype.Av=_.At.prototype.Lr=var Ct=
_.At.prototype.Kc=_.At.prototype.removeAll=_.At.prototype.ua=
_.At.prototype.handleEvent=
var cv,dv,ev,fv,gv,iv,jv,kv,lv,nv;_.bv=!1;cv=dv=ev=
fv=gv=_.hv=iv=
jv=kv={token:1,id_token:1};lv=_.mv=window.JSON;nv=
nv.prototype.addEventListener=nv.prototype.removeEventListener=
nv.prototype.dispatchEvent=var ov,pv,qv,uv,vv,Mv,Nv,Pv,Qv,Sv,bw;ov={};pv={};qv={google:{authServerUrl:"https://accounts.google.com/o/oauth2/auth",idpIFrameUrl:"https://accounts.google.com/o/oauth2/iframe"}};_.rv=_.sv=_.tv=void 0;
uv=vv=
vv.prototype.open=
var wv=yv=xv=pv=pv||{};var zv=zv.prototype.start=
zv.prototype.clear=var Av=Av.prototype.start=
Av.prototype.clear=pv.jt=null;pv.rt=null;
pv.vaa=pv.vaa();pv.J6=pv.mT=
var Bv=Cv=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}function b(p){for(var q=h,t=0;64>t;t+=4)q[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=q[t-3]^q[t-8]^q[t-14]^q[t-16],q[t]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],u=e[2],w=e[3],x=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var z=w^v&(u^w);var F=1518500249}else z=
v^u^w,F=1859775393;else 60>t?(z=v&u|w&(v|u),F=2400959708):(z=v^u^w,F=3395469782);z=((p<<5|p>>>27)&4294967295)+z+x+F+q[t]&4294967295;x=w;w=u;u=(v<<30|v>>>2)&4294967295;v=p;p=z}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;e[2]=e[2]+u&4294967295;e[3]=e[3]+w&4294967295;e[4]=e[4]+x&4294967295}function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],v=0,u=p.length;v<u;++v)t.push(p.charCodeAt(v));p=t}q||(q=p.length);t=0;if(0==m)for(;t+64<q;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<
q;)if(f[m++]=p[t++],n++,64==m)for(m=0,b(f);t+64<q;)b(p.slice(t,t+64)),t+=64,n+=64}function d(){var p=[],q=8*n;56>m?c(k,56-m):c(k,64-(m-56));for(var t=63;56<=t;t--)f[t]=q&255,q>>>=8;b(f);for(t=q=0;5>t;t++)for(var v=24;0<=v;v-=8)p[q++]=e[t]>>v&255;return p}for(var e=[],f=[],h=[],k=[128],l=1;64>l;++l)k[l]=0;var m,n;a();return{reset:a,update:c,digest:d,dj:function(){for(var p=d(),q="",t=0;t<p.length;t++)q+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return q}}},Dv=
window.crypto,Ev=!1,Fv=0,Gv=1,Hv=0,Iv="",Jv=Kv=Ev=!!Dv&&"function"==typeof Dv.getRandomValues;
Ev||(Hv=1E6*(screen.width*screen.width+screen.height),Iv=Kv(document.cookie+"|"+document.location+"|"+(new Date).getTime()+"|"+Math.random()),jv(window,"mousemove",Jv));ov=ov||{};ov.K2="ssIFrame_";
_.Lv=_.g=_.Lv.prototype;_.g.show=_.g.kc=
_.g.oB=_.g.ZA=_.g.Ao=function(){return this.sU};
Mv=_.Ov=Nv=
Pv=_.Lv.prototype.Gj=_.Lv.prototype.mB=function(a,b,c,d,e){b=_.hv(b);_.Ov(this,"listIdpSessions",{clientId:a,request:b,sessionSelector:c,forceRefresh:e},d)};Qv=
_.Rv=Sv=_.Lv.prototype.revoke=_.ea(9);_.Lv.prototype.Jt=_.ea(11);ov.BA={};ov.NG=
ov.oB=ov.n8=ov.W8=ov=ov||{};
var Uv=fv(Uv,nv);var Tv={v4:"sessionSelectorChanged",wE:"sessionStateChanged",aE:"authResult",I1:"displayIFrame"},Wv=Xv=Yv=_.g=Uv.prototype;
_.g.dda=_.g.Aea=function(a,b){return Yv(this,a.Jb,b.clientId)};_.g.zea=_.g.M5=
_.g.hca=_.g.gca=_.g.mC=var Vv=new Uv,Zv=Vv,$v={};$v.idpReady={Vf:Zv.hca};$v.idpError={Vf:Zv.gca};$v.sessionStateChanged={Vf:Zv.mC,bt:Zv.Aea};$v.sessionSelectorChanged={Vf:Zv.mC,bt:Zv.zea};$v.authResult={Vf:Zv.mC,bt:Zv.M5,x5:!0};$v.displayIFrame={Vf:Zv.mC};
Vv.vU=$v||{};jv(window,"message",;
_.aw=fv(_.aw,nv);_.g=_.aw.prototype;_.g.setOptions=function(){};_.g.qY=function(){};_.g.Wr=function(){};_.g.ZA=function(){return this.bx};_.g.Ao=function(){return this.zj};bw=
_.cw=_.aw.prototype.NP=_.ea(12);_.aw.prototype.Jt=_.ea(10);_.ew=fv(_.ew,_.aw);_.ew.prototype.setOptions=function(){};
var fw=gw=
_.ew.prototype.qY=_.ew.prototype.aX=function(){};_.ew.prototype.bX=function(){};_.ew.prototype.Jv=function(){};var iw=hw=dw=_.ew.prototype.Gj=_.ew.prototype.DW=_.ea(13);
_.ew.prototype.dba=_.ew.prototype.mB=_.kw=fv(_.kw,_.ew);_.jw={hO:"noSessionBound",qt:"userLoggedOut",X0:"activeSessionChanged",wE:"sessionStateChanged",xO:"tokenReady",V4:"tokenFailed",aE:"authResult",ERROR:"error"};
_.kw.prototype.setOptions=_.kw.prototype.Wr=var lw=_.g=_.kw.prototype;
_.g.aX=
_.g.bX=_.g.Jv=_.g.Cu=_.ea(15);_.g.wu=_.g.BG=
_.g.yD=_.g.start=
_.g.Ow=_.g.I7=_.g.nS=function(){_.cw(this,this.I7,[])};
_.g.Gj=_.g.revoke=_.ea(8);_.g.JY=_.ea(16);
_.mw=fv(_.mw,_.ew);_.g=_.mw.prototype;_.g.setOptions=function(a){if(!a.clientId)throw Error("ya");this.qc=a.clientId;this.Ga=a.id;fw(this,a);gw(this,a)};_.g.Wr=_.g.Jv=_.g.Cu=_.ea(14);_.g.wu=
_.g.BG=function(a){Qv(this.de,this.Se,a)};_.nw=function(a,b,c){a.Qk?c(a.Ao()):_.cw(a,a.xca,[b,c])};_.mw.prototype.xca=_.mw.prototype.RV=_.ea(17);
var ow=pw=qw=rw=sw=tw=uw,vw,ww,xw,yw,zw,Aw,Bw,Cw,Ew;_.mw.prototype.RV=_.hb(17,;
_.kw.prototype.JY=_.hb(16,;
_.kw.prototype.Cu=_.hb(15,;
_.mw.prototype.Cu=_.hb(14,;_.ew.prototype.DW=_.hb(13,;
_.Lv.prototype.revoke=_.hb(9,;_.kw.prototype.revoke=_.hb(8,function(a){_.cw(this,this.JY,[a])});uw=
vw=
ww=
xw=yw=
zw=Aw=
Bw=Cw=
_.Dw=
Ew=_.Fw=_.Gw=_.mv={parse:stringify:function(a){return _.Ig(a)}};_.mw.prototype.nG=function(a,b){_.cw(this,this.x7,[a,b])};_.mw.prototype.x7=_.Lv.prototype.nG=var Hw,Iw=["client_id","cookie_policy","scope"],Jw="client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection plugin_name ack_extension_date gsiwebsdk".split(" "),Kw=["authuser","after_redirect","access_type","hl"],Lw=["login_hint","prompt"],Mw={clientid:"client_id",cookiepolicy:"cookie_policy"},Nw=["approval_prompt",
"authuser","login_hint","prompt","hd"],Ow=["login_hint","g-oauth-window","status"],Pw=Math.min(_.zf("oauth-flow/authWindowWidth",599),screen.width-20),Qw=Math.min(_.zf("oauth-flow/authWindowHeight",600),screen.height-30);var Rw=function(a){_.ib.call(this,a)};_.E(Rw,_.ib);Rw.prototype.name="gapi.auth2.ExternallyVisibleError";var Sw=function(){};Sw.prototype.select=var Tw=function(){};Tw.prototype.select=var Uw=function(a){this.O5=a};
Uw.prototype.select=var Vw=Vw.prototype.select=var Ww=function(a){a=new Vw(a);a.QC.push(new Sw);return a},Xw=Yw=var Zw=Zw.prototype.remove=function(){this.isActive=!1};Zw.prototype.trigger=function(){};var $w=ax=ax.prototype.add=ax.prototype.notify=var bx=var dx=dx.prototype.set=dx.prototype.get=function(){return this.Ba};dx.prototype.ma=dx.prototype.get=dx.prototype.get;var ex=_.E(ex,Zw);ex.prototype.trigger=
var cx=var fx={Oia:"fetch_basic_profile",Pja:"login_hint",nla:"prompt",tla:"redirect_uri",Lla:"scope",cna:"ux_mode",vma:"state"},gx=gx.prototype.get=function(){return this.Oa};gx.prototype.IZ=function(a){this.Oa.scope=a;return this};gx.prototype.Lu=function(){return this.Oa.scope};
var hx=_.g=gx.prototype;_.g.bfa=_.g.Y8=function(){return this.Oa.prompt};_.g.Dea=_.g.V7=_.g.If=_.g.getState=var ix=jx=kx=lx=mx=ox=var px=_.g=px.prototype;_.g.getId=function(){return this.Ga};_.g.KG=_.g.Lg=function(){return!!this.Tc};_.g.rm=_.g.fK=function(){return qx.fK()};_.g.Al=_.g.w8=
_.g.update=var sx=_.g=px.prototype;_.g.zG=
_.g.zl=_.g.Ou=_.g.s9=_.g.disconnect=function(){return qx.disconnect()};_.g.X7=function(){return this.ly};
_.g.vA=var rx=_.g=rx.prototype;_.g.getId=function(){return this.Q7};_.g.Hg=function(){return this.hg};_.g.u8=function(){return this.o9};_.g.p8=function(){return this.v7};_.g.C8=function(){return this.BU};_.g.uo=function(){return this.dz};var nx,ux;nx=ux=
_.vx=var xx=wx=yx=function(a){return String(a).replace(/_([a-z])/g,function(b,c){return c.toUpperCase()})},zx=Ax=Bx=Dx=Cx=Ix=Ex=Kx=["permission","id_token"],Lx=/(^|[^_])token/,Fx=
Fx.prototype.aI=var Gx=function(a){return Jx(a,"code")},Hx=Fx.prototype.toString=var Jx=var Nx=Mx=Nx.prototype.then=_.Mk(Nx);var qx,Px,Rx;qx=null;_.Qx=Px=
Rx=
Rx.prototype.To=
var Tx=Ox=Rx.prototype.Pf=
var Ux=tx=Rx.prototype.zl=
Rx.prototype.Ou=
var Xx=Wx=Vx=Rx.prototype.Al=Rx.prototype.TS=var Sx=Rx.prototype.fK=
Rx.prototype.nP=Rx.prototype.disconnect=Rx.prototype.attachClickHandler=Rx.prototype.nP;var Yx;_.cl.prototype["catch"]=_.cl.prototype.Zw;Yx=null;_.Zx=var ay,cy,$x,ey,dy,fy;_.by=
ay=cy=
$x=ey=
dy=fy=_.C("gapi.auth2.init",_.Zx);_.C("gapi.auth2.authorize",;_.C("gapi.auth2._gt",;_.C("gapi.auth2.enableDebugLogs",;_.C("gapi.auth2.getAuthInstance",_.Qx);
_.C("gapi.auth2.BasicProfile",rx);_.C("gapi.auth2.BasicProfile.prototype.getId",rx.prototype.getId);_.C("gapi.auth2.BasicProfile.prototype.getName",rx.prototype.Hg);_.C("gapi.auth2.BasicProfile.prototype.getGivenName",rx.prototype.u8);_.C("gapi.auth2.BasicProfile.prototype.getFamilyName",rx.prototype.p8);_.C("gapi.auth2.BasicProfile.prototype.getImageUrl",rx.prototype.C8);_.C("gapi.auth2.BasicProfile.prototype.getEmail",rx.prototype.uo);_.C("gapi.auth2.GoogleAuth",Rx);
_.C("gapi.auth2.GoogleAuth.prototype.attachClickHandler",Rx.prototype.nP);_.C("gapi.auth2.GoogleAuth.prototype.disconnect",Rx.prototype.disconnect);_.C("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess",Rx.prototype.Ou);_.C("gapi.auth2.GoogleAuth.prototype.signIn",Rx.prototype.zl);_.C("gapi.auth2.GoogleAuth.prototype.signOut",Rx.prototype.Al);_.C("gapi.auth2.GoogleAuth.prototype.getInitialScopes",Rx.prototype.TS);_.C("gapi.auth2.GoogleUser",px);_.C("gapi.auth2.GoogleUser.prototype.grant",px.prototype.s9);
_.C("gapi.auth2.GoogleUser.prototype.getId",px.prototype.getId);_.C("gapi.auth2.GoogleUser.prototype.isSignedIn",px.prototype.Lg);_.C("gapi.auth2.GoogleUser.prototype.getAuthResponse",px.prototype.rm);_.C("gapi.auth2.GoogleUser.prototype.getBasicProfile",px.prototype.X7);_.C("gapi.auth2.GoogleUser.prototype.getGrantedScopes",px.prototype.w8);_.C("gapi.auth2.GoogleUser.prototype.getHostedDomain",px.prototype.KG);_.C("gapi.auth2.GoogleUser.prototype.grantOfflineAccess",px.prototype.Ou);
_.C("gapi.auth2.GoogleUser.prototype.hasGrantedScopes",px.prototype.vA);_.C("gapi.auth2.GoogleUser.prototype.reloadAuthResponse",px.prototype.fK);_.C("gapi.auth2.LiveValue",dx);_.C("gapi.auth2.LiveValue.prototype.listen",dx.prototype.ma);_.C("gapi.auth2.LiveValue.prototype.get",dx.prototype.get);_.C("gapi.auth2.SigninOptionsBuilder",gx);_.C("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName",gx.prototype.V7);_.C("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName",gx.prototype.Dea);
_.C("gapi.auth2.SigninOptionsBuilder.prototype.getScope",gx.prototype.Lu);_.C("gapi.auth2.SigninOptionsBuilder.prototype.setScope",gx.prototype.IZ);_.C("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt",gx.prototype.Y8);_.C("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt",gx.prototype.bfa);_.C("gapi.auth2.SigninOptionsBuilder.prototype.get",gx.prototype.get);
_.Xf=_.Xf||{};
(();
_.wh=window.gapi&&window.gapi.util||{};
_.wh=_.wh={};_.wh.getOrigin=function(a){return _.zh(a)};
_.Wy=_.Xy=_.Xy.prototype.read=
_.Xy.prototype.write=_.Xy.prototype.clear=var Zy=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Yy=/^[A-Z_][A-Z0-9_]{0,63}$/;
_.Xy.iterate=_.$y=function(a){this.ee=a};_.$y.prototype.read=_.$y.prototype.write=_.$y.prototype.clear=var az={};_.$y.iterate=var bz=cz=dz=dz.prototype.read=dz.prototype.write=dz.prototype.clear=dz.iterate=_.Vy="https:"===window.location.protocol;_.ez=_.Vy||"http:"===window.location.protocol?_.Xy:_.$y;_.Uy=var fz,gz,jz,kz;fz=_.gf();gz=_.gf();_.hz=_.gf();_.iz=_.gf();jz="state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");kz=
kz.prototype.write=kz.prototype.read=function(){return this.SI};kz.prototype.clear=_.lz=
dz.iterate(;_.ez.iterate(;
_.ej=var gj=fj=hj=var kj;_.ij=_.jj=
kj=
_.lj=
_.mj=_.nj={XT:_.mj,Qaa:_.jj,WS:function(){var a=null;_.jj()&&(a=window.__PVT,null==a&&(a=(new _.bj(document)).get("BEAT")));return a},xS:_.lj};
_.Yr=_.Xr=
var Es,Fs;_.ws=_.xs=_.g=_.xs.prototype;_.g.clone=_.g.equals=_.g.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};_.g.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
_.g.round=_.g.translate=_.g.scale=_.ys=
_.zs=_.As=_.Bs=function(a){if(a instanceof _.Wc&&a.constructor===_.Wc)return a.YX;_.Vb(a);return"type_error:SafeStyle"};_.Cs=
_.Ds=Es=Fs=_.Gs=_.Hs=_.g=_.Hs.prototype;_.g.Xb=function(){return this.right-this.left};_.g.Vc=_.g.clone=_.g.contains=
_.g.expand=_.g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
_.g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};_.g.round=
_.g.translate=_.g.scale=var Ks,Is,Ps,Ss,dt,Rs;_.Js=Ks={};Is=_.Ls=
_.Ms=_.Ns=_.Os=Ps=
_.Ts=_.Qs=
_.Vs=_.Us=_.Xs=_.Ws=
_.Ys=Ss=_.Zs=
_.at=_.$s=
_.bt=_.ud?"MozUserSelect":_.vd||_.rd?"WebkitUserSelect":null;_.ct=dt={thin:2,medium:4,thick:6};Rs=
_.ty=_.ab(_.ty,_.vk);_.g=_.ty.prototype;_.g.enabled=!1;_.g.Sc=null;_.g.setInterval=
_.g.Wfa=_.g.start=_.g.stop=_.g.ua=
_.uy=_.vy=
_.mz=_.ab(_.mz,_.Jj);_.g=_.mz.prototype;_.g.subscribe=_.g.Rw=_.ea(19);_.g.unsubscribe=
_.g.Hl=
_.g.Cp=var nz=
_.mz.prototype.clear=_.mz.prototype.Tb=_.mz.prototype.ua=
_.oz=function(a){this.Zfa=a};_.oz.prototype.toString=function(){return this.Zfa};_.pz=_.ab(_.pz,_.Jj);_.g=_.pz.prototype;_.g.subscribe=function(a,b,c){return this.Ae.subscribe(a.toString(),b,c)};_.g.Rw=_.ea(18);_.g.unsubscribe=_.g.Hl=function(a){return this.Ae.Hl(a)};_.g.Cp=_.g.clear=
_.g.Tb=
var qz=rz=tz=vz=wz,xz,yz,sz,uz,Az,Bz,Cz,Ez;_.ab(qz,_.ib);
qz.prototype.name="AssertionError";wz={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};xz=/^data:(.*);base64,[a-z0-9+\/]+=*$/i;yz=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;sz=uz=/\/\*/;
_.zz=Az=/^[a-zA-Z0-9-]+$/;Bz={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};
Cz=_.Dz=Ez={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};_.Fz=
_.Gz=_.mc(;
_.Iz=_.Jz=new _.pz;_.Kz=new _.oz("oauth");_.Iz();_.zf("oauth-flow/client_id");var Lz=String(_.zf("oauth-flow/redirectUri"));if(Lz)Lz.replace(/[#][\s\S]*/,"");else{var Mz=_.wh.getOrigin(window.location.href);_.zf("oauth-flow/callbackUrl");encodeURIComponent(Mz)}_.wh.getOrigin(window.location.href);
var Oz,Pz,Qz,Rz,Sz,Tz,Uz,Vz,Wz,Xz,Yz,$z,aA,bA,cA,dA,eA,fA,gA,hA,iA,jA,kA,lA,mA,nA,oA,pA,qA,rA,sA,tA,uA,vA,wA,xA,yA,zA,AA,BA,EA,DA,FA,GA,HA,IA,JA,KA,LA,MA,NA,PA;_.Nz=Oz=Pz=
Sz=Tz=[".APPS.GOOGLEUSERCONTENT.COM","@DEVELOPER.GSERVICEACCOUNT.COM"];Uz=
Vz=Wz=Xz=
Yz=_.Zz=
$z=
aA=bA=
cA=dA=eA=fA=0;gA=!1;hA=[];iA={};jA={};kA=null;
lA=mA=nA=oA=
pA=qA=rA=sA=tA=
uA=vA=
wA=
xA=
yA=zA=AA=
BA=_.CA=EA=
DA=FA=["client_id","cookie_policy","response_type"];GA="client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state".split(" ");
HA=
IA=JA=
KA=
LA=MA=_.nj.xS;NA=null;
_.QA=
_.OA=PA=
_.RA=_.SA=var ZA,bB;_.UA=_.TA=_.YA=
_.VA=ZA=_.WA=_.$A=bB=
_.aB=_.XA=_.C("gapi.auth.authorize",LA);_.C("gapi.auth.checkSessionState",;_.C("gapi.auth.getAuthHeaderValueForFirstParty",MA);_.C("gapi.auth.getToken",Yz);
_.C("gapi.auth.getVersionInfo",;_.C("gapi.auth.init",_.CA);_.C("gapi.auth.setToken",_.Zz);_.C("gapi.auth.signIn",;_.C("gapi.auth.signOut",;
_.C("gapi.auth.unsafeUnpackIdToken",zA);_.C("gapi.auth._pimf",_.QA);_.C("gapi.auth._oart",wA);_.C("gapi.auth._guss",;
var cB=_.kp();cB.clientid&&cB.scope&&cB.callback&&!_.zf("disableRealtimeCallback")&&_.WA(cB);
var py=function(){};py.prototype.DP=null;py.prototype.getOptions=var sy;sy=function(){};_.ab(sy,py);_.qy=_.ry=new sy;
_.Ah=window.googleapis&&window.googleapis.server||{};
var Gh=Hh=Ih=Jh=Lh=Kh;for(Kh in _.zf("googleapis.config/methods"))Lh();_.C("googleapis.newHttpRequest",function(a){return Gh(a)});_.C("googleapis.setUrlParameter",;
_.Ii=_.Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");_.Ki=
_.Li=_.Mi=_.Ni=
var Aj=_.nj={XT:_.mj,Qaa:_.jj,WS:xS:_.lj};var Cj,Bj;Cj=Bj=
_.Dj=_.Ej=);
var Mh={Vga:"Authorization",v1:"Content-ID",tha:"Content-Transfer-Encoding",uha:"Content-Type",Zha:"Date",Qka:"OriginToken",nja:"hotrod-board-name",oja:"hotrod-chrome-cpu-model",pja:"hotrod-chrome-processors",wna:"WWW-Authenticate",yna:"X-Ad-Manager-Impersonation",xna:"X-Ad-Manager-Debug-Info",zna:"X-ClientDetails",Ana:"X-Compass-Routing-Destination",Dna:"X-Goog-AuthUser",Gna:"X-Goog-Encode-Response-If-Executable",Bna:"X-Google-Consent",Cna:"X-Google-EOM",Ina:"X-Goog-Meeting-ABR",Jna:"X-Goog-Meeting-Botguardid",
Kna:"X-Goog-Meeting-ClientInfo",Lna:"X-Goog-Meeting-ClientVersion",Mna:"X-Goog-Meeting-Debugid",Nna:"X-Goog-Meeting-Identifier",Ona:"X-Goog-Meeting-Interop-Cohorts",Pna:"X-Goog-Meeting-Interop-Type",Qna:"X-Goog-Meeting-OidcIdToken",Rna:"X-Goog-Meeting-RtcClient",Sna:"X-Goog-Meeting-StartSource",Tna:"X-Goog-Meeting-Token",Una:"X-Goog-Meeting-Viewer-Token",Vna:"X-Goog-PageId",Wna:"X-Goog-Safety-Content-Type",Xna:"X-Goog-Safety-Encoding",Ena:"X-Goog-Drive-Client-Version",Fna:"X-Goog-Drive-Resource-Keys",
Yna:"X-HTTP-Method-Override",Zna:"X-JavaScript-User-Agent",aoa:"X-Origin",boa:"X-Referer",coa:"X-Requested-With",foa:"X-Use-HTTP-Status-Code-Override",doa:"X-Server-Timeout",Hna:"X-Goog-First-Party-Reauth",eoa:"X-Server-Token"},Nh="Accept Accept-Language Authorization Cache-Control cast-device-capabilities Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date developer-token EES-S7E-MODE financial-institution-id GData-Version google-cloud-resource-prefix hotrod-board-name hotrod-chrome-cpu-model hotrod-chrome-processors Host If-Match If-Modified-Since If-None-Match If-Unmodified-Since linked-customer-id login-customer-id MIME-Version Origin OriginToken Pragma Range request-id Slug Transfer-Encoding Want-Digest X-Ad-Manager-Impersonation X-Ad-Manager-Debug-Info x-alkali-account-key x-alkali-application-key x-alkali-auth-apps-namespace x-alkali-auth-entities-namespace x-alkali-auth-entity x-alkali-client-locale x-chrome-connected x-framework-xsrf-token X-Client-Data X-ClientDetails X-Client-Version x-debug-settings-metadata X-Firebase-Locale X-GData-Client X-GData-Key X-Goog-AuthUser X-Goog-PageId X-Goog-Encode-Response-If-Executable X-GoogApps-Allowed-Domains X-Goog-AdX-Buyer-Impersonation X-Goog-Api-Client X-Goog-Api-Key X-Google-EOM X-Goog-Visibilities X-Goog-Correlation-Id X-Goog-Request-Info X-Goog-Request-Reason X-Goog-Request-Time X-Goog-Experiments x-goog-ext-124712974-jspb x-goog-ext-251363160-jspb x-goog-ext-259736195-jspb x-goog-ext-467253834-jspb x-goog-ext-472780938-jspb x-goog-ext-477772811-jspb x-goog-ext-275505673-bin x-goog-ext-353267353-bin x-goog-ext-353267353-jspb x-goog-ext-496773601-bin x-goog-ext-328800237-bin x-goog-ext-359275022-bin x-goog-ext-202735639-bin x-goog-ext-223435598-bin x-goog-ext-174067345-bin X-Goog-Firebase-Installations-Auth x-goog-greenenergyuserappservice-metadata X-Firebase-Client X-Firebase-Client-Log-Type X-Firebase-GMPID X-Firebase-Auth-Token X-Firebase-AppCheck X-Firebase-Token X-Goog-Drive-Client-Version X-Goog-Drive-Resource-Keys x-goog-iam-authority-selector x-goog-iam-authorization-token x-goog-request-params x-goog-sherlog-context X-Goog-Sn-Metadata X-Goog-Sn-PatientId X-Goog-Spatula X-Goog-Travel-Bgr X-Goog-Travel-Settings X-Goog-Upload-Command X-Goog-Upload-Content-Disposition X-Goog-Upload-Content-Length X-Goog-Upload-Content-Type X-Goog-Upload-File-Name X-Goog-Upload-Header-Content-Encoding X-Goog-Upload-Header-Content-Length X-Goog-Upload-Header-Content-Type X-Goog-Upload-Header-Transfer-Encoding X-Goog-Upload-Offset X-Goog-Upload-Protocol X-Goog-User-Project X-Goog-Visitor-Id X-Goog-FieldMask X-Google-Project-Override x-goog-maps-api-salt x-goog-maps-api-signature x-goog-maps-client-id x-goog-maps-channel-id x-goog-spanner-database-role X-HTTP-Method-Override X-JavaScript-User-Agent X-Pan-Versionid X-Proxied-User-IP X-Origin X-Referer X-Requested-With X-Stadia-Client-Context X-Upload-Content-Length X-Upload-Content-Type X-Use-Alt-Service X-Use-HTTP-Status-Code-Override X-Ios-Bundle-Identifier X-Android-Package X-Android-Cert X-Ariane-Xsrf-Token X-Earth-Engine-App-ID-Token X-Earth-Engine-Computation-Profile X-Earth-Engine-Computation-Profiling X-Play-Console-Experiments-Override X-Play-Console-Session-Id X-YouTube-Bootstrap-Logged-In X-YouTube-VVT X-YouTube-Page-CL X-YouTube-Page-Timestamp X-Compass-Routing-Destination X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-Identifier X-Goog-Meeting-Interop-Cohorts X-Goog-Meeting-Interop-Type X-Goog-Meeting-OidcIdToken X-Goog-Meeting-RtcClient X-Goog-Meeting-StartSource X-Goog-Meeting-Token X-Goog-Meeting-Viewer-Token x-sdm-id-token X-Sfdc-Authorization X-Server-Timeout x-foyer-client-environment X-Goog-First-Party-Reauth X-Server-Token x-rfui-request-context".split(" "),
Oh="Digest Cache-Control Content-Disposition Content-Encoding Content-Language Content-Length Content-MD5 Content-Range Content-Transfer-Encoding Content-Type Date ETag Expires Last-Modified Location Pragma Range Server Transfer-Encoding WWW-Authenticate Vary Unzipped-Content-MD5 X-Correlation-ID X-Debug-Tracking-Id X-Google-Consent X-Google-EOM X-Goog-Generation X-Goog-Metageneration X-Goog-Safety-Content-Type X-Goog-Safety-Encoding X-Google-Trace X-Goog-Upload-Chunk-Granularity X-Goog-Upload-Control-URL X-Goog-Upload-Size-Received X-Goog-Upload-Status X-Goog-Upload-URL X-Goog-Diff-Download-Range X-Goog-Hash X-Goog-Updated-Authorization X-Server-Object-Version X-Guploader-Customer X-Guploader-Upload-Result X-Guploader-Uploadid X-Google-Gfe-Backend-Request-Cost X-Earth-Engine-Computation-Profile X-Goog-Meeting-ABR X-Goog-Meeting-Botguardid X-Goog-Meeting-ClientInfo X-Goog-Meeting-ClientVersion X-Goog-Meeting-Debugid X-Goog-Meeting-RtcClient X-Goog-Meeting-Token X-Goog-Meeting-Viewer-Token X-Compass-Routing-Destination".split(" ");var Ph,Qh,Rh,Sh,Uh,Vh,Wh,Xh,Yh,Zh,$h,ai;Ph=null;Qh=null;Rh=null;Sh=
_.Th=Uh={"access-control-allow-origin":!0,"access-control-allow-credentials":!0,"access-control-expose-headers":!0,"access-control-max-age":!0,"access-control-allow-headers":!0,"access-control-allow-methods":!0,p3p:!0,"proxy-authenticate":!0,"set-cookie":!0,"set-cookie2":!0,status:!0,tsv:!0,"":!0};
Vh={"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,"client-ip":!0,clientip:!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,forwarded:!0,"forwarded-for":!0,"front-end-https":!0,host:!0,"keep-alive":!0,"max-forwards":!0,method:!0,origin:!0,"raw-post-data":!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,url:!0,"user-agent":!0,version:!0,via:!0,"x-att-deviceid":!0,"x-chrome-connected":!0,
"x-client-data":!0,"x-client-ip":!0,"x-do-not-track":!0,"x-forwarded-by":!0,"x-forwarded-for":!0,"x-forwarded-host":!0,"x-forwarded-proto":!0,"x-geo":!0,"x-googapps-allowed-domains":!0,"x-origin":!0,"x-proxyuser-ip":!0,"x-real-ip":!0,"x-referer":!0,"x-uidh":!0,"x-user-ip":!0,"x-wap-profile":!0,"":!0};
Wh=Xh=new RegExp("("+/[\t -~\u00A0-\u2027\u202A-\uD7FF\uE000-\uFFFF]/.source+"|"+/[\uD800-\uDBFF][\uDC00-\uDFFF]/.source+"){1,100}","g");Yh=/[ \t]*(\r?\n[ \t]+)+/g;Zh=/^[ \t]+|[ \t]+$/g;
$h=ai=/^[-0-9A-Za-z!#\$%&'\*\+\.\^_`\|~]+$/g;
_.bi=
_.ci=
_.di=
_.ei=_.fi=
_.gi=
/\uffff/.test("\uffff");
var zy,By,Dy;_.wy=
_.xy=
_.yy=zy={};_.Ay=
By=_.Cy=Dy=
_.Ey=_.Fy=_.Gy=var Iy,Jy,Ky;_.Hy=_.ab(_.Hy,_.vk);_.Hy.prototype.Db=null;Iy=/^https?$/i;Jy=["POST","PUT"];Ky=[];_.Ly=_.g=_.Hy.prototype;
_.g.n6=_.g.rD=_.g.setTrustToken=function(a){this.lN=a};_.g.setAttributionReporting=
_.g.send=var Ny=_.Hy.prototype.Fh=_.Hy.prototype.jz=var Oy=
_.Hy.prototype.abort=_.Hy.prototype.ua=_.Hy.prototype.WW=_.Hy.prototype.vJ=
var Qy=Py=My=_.Hy.prototype.isActive=_.Hy.prototype.Yo=_.Ry=_.Hy.prototype.getStatus=
_.Sy=_.Ty=_.Hy.prototype.getResponseHeader=
_.Hy.prototype.getAllResponseHeaders=_.Pj(;
_.Au=_.Bu=
_.Cu=
var Eu,Iu,Vu,Qu,Zu,Ru,Tu,Su,Wu,Uu,$u;_.Du=Eu=
_.Fu=_.Gu=/#|$/;_.Hu=
Iu=
_.Ju=_.Ju.prototype.toString=
_.Ju.prototype.resolve=_.Ju.prototype.clone=_.Ku=_.Lu=_.Ju.prototype.eh=function(){return this.Ie};_.Mu=
_.Nu=_.Ju.prototype.getPath=function(){return this.jn};_.Ju.prototype.setPath=_.Ju.prototype.rr=_.Ou=_.Ju.prototype.ob=_.Ju.prototype.getQuery=function(){return this.ie.toString()};
_.Xu=_.g=_.Ju.prototype;_.g.ni=_.g.Jz=function(){return this.sG};_.g.ul=_.g.removeParameter=_.g.vL=_.Yu=Vu=
Qu=Zu=Ru=/[#\/\?@]/g;Tu=/[#\?:]/g;Su=/[#\?]/g;Wu=/[#\?@]/g;Uu=/#/g;_.Pu=$u=_.g=_.Pu.prototype;
_.g.Tb=_.g.add=_.g.remove=_.g.clear=_.g.isEmpty=_.g.cj=
_.g.sk=_.g.forEach=_.g.Gg=
_.g.Jd=_.g.set=_.g.get=
_.g.setValues=_.g.toString=
_.g.clone=var av=_.Pu.prototype.vL=_.Pu.prototype.extend=
var eB=fB=!1;fB=!1;
var gB=hB,iB,jB,kB={tP:function(a){hB=a;try{delete kB.tP}catch(b){}},uP:function(a){iB=a;try{delete kB.uP}catch(b){}},vP:,lB=mB=nB=dB=_.E(dB,_.ib);dB.prototype.name="gapix.client.GapiClientError";eB.prototype.then=eB.prototype.hD=
var oB=pB={error:{code:-1,message:"A network error occurred and the request could not be completed."}},qB=_.E(qB,_.Hy);
qB.prototype.then=
var rB=sB=/;\s*charset\s*=\s*("utf-?8"|utf-?8)\s*(;|$)/i,tB=/^(text\/[^\s;\/""]+|application\/(json(\+[^\s;\/""]*)?|([^\s;\/""]*\+)?xml))\s*(;|$)/i,uB=/;\s*charset\s*=/i,vB=/(([\r\n]{0,2}[A-Za-z0-9+\/]){4,4}){0,1024}([\r\n]{0,2}[A-Za-z0-9+\/][\r\n]{0,2}[AQgw]([\r\n]{0,2}=){2,2}|([\r\n]{0,2}[A-Za-z0-9+\/]){2,2}[\r\n]{0,2}[AEIMQUYcgkosw048][\r\n]{0,2}=|([\r\n]{0,2}[A-Za-z0-9+\/]){4,4})[\r\n]{0,2}/g,wB=
xB=yB=zB=AB=BB=CB=DB=EB=FB=GB=GB.prototype.resolve=function(a){this.vg?this.rn.resolve(a):this.gw||this.ew||(this.gw=a)};
GB.prototype.reject=var HB=IB=var JB=_.E(JB,eB);JB.prototype.qf=function(){return this.Mi};JB.prototype.Sj=JB.prototype.Iu=function(){return this.dV};
JB.prototype.bl=
var MB=JB.prototype.execute=
JB.prototype.Ap=JB.prototype.uj=function(){return this.Ap()};var LB=["appVersion","platform","userAgent"],KB={"google-api-gwt-client":!0,"google-api-javascript-client":!0};JB.prototype.execute=JB.prototype.execute;JB.prototype.then=JB.prototype.then;JB.prototype.getPromise=JB.prototype.uj;var NB=NB.prototype.Yd=NB.prototype.execute=
NB.prototype.tB=
NB.prototype.Dv=NB.prototype.execute=NB.prototype.execute;var PB=OB=_.g=PB.prototype;_.g.getFormat=_.g.execute=_.g.then=function(a,b,c){2==this.Je&&IB('The "then" method is not available on this object.');return this.Eb.then(a,b,c)};
_.g.hD=function(a){this.Eb.hD&&this.Eb.hD(a)};_.g.qf=function(){if(this.Eb.qf)return this.Eb.qf()};_.g.bl=function(){this.Eb.qf&&this.Eb.bl()};_.g.Yd=function(){if(this.Eb.Yd)return this.Eb.Yd()};_.g.tB=_.g.Sj=function(a){this.Eb.Sj&&this.Eb.Sj(a)};_.g.Iu=function(){return this.Eb.Iu()};_.g.uj=function(){if(this.Eb.uj)return this.Eb.uj()};PB.prototype.execute=PB.prototype.execute;PB.prototype.then=PB.prototype.then;PB.prototype.getPromise=PB.prototype.uj;var QB=/<response-(.*)>/,RB=/^application\/http(;.+$|$)/,SB=["clients6.google.com","content.googleapis.com","www.googleapis.com"],TB=UB=VB=WB=ZB=YB=XB=$B=
aC=var bC=_.E(bC,eB);var cC=bC.prototype.yq=
bC.prototype.add=
var dC=
bC.prototype.execute=
bC.prototype.Ap=
bC.prototype.xX=
var eC=fC=bC.prototype.Dv=function(a){var b=this;return function(c,d){b.RE(c,d,a)}};bC.prototype.RE=bC.prototype.add=bC.prototype.add;bC.prototype.execute=bC.prototype.execute;bC.prototype.then=bC.prototype.then;var gC=
gC.prototype.add=
var hC=
gC.prototype.execute=gC.prototype.Dv=gC.prototype.RE=kB.uP(;gC.prototype.add=gC.prototype.add;gC.prototype.execute=gC.prototype.execute;var iC=iC.prototype.aI=iC.prototype.add=
iC.prototype.execute=var jC=iC.prototype.then=iC.prototype.add=iC.prototype.add;iC.prototype.execute=iC.prototype.execute;
iC.prototype.then=iC.prototype.then;var kC=_.E(kC,eB);var lC=_.g=kC.prototype;
_.g.execute=
_.g.Ap=_.g.qf=function(){if(this.Eb.qf)return this.Eb.qf()};_.g.bl=_.g.Yd=
_.g.Sj=_.g.Iu=_.g.getFormat=_.g.uj=kC.prototype.execute=kC.prototype.execute;kC.prototype.then=kC.prototype.then;kC.prototype.getPromise=kC.prototype.uj;var mC="/rest?fields="+encodeURIComponent("kind,name,version,rootUrl,servicePath,resources,parameters,methods,batchPath,id")+"&pp=0",nC=pC=oC=qC=var rC=sC=new RegExp(/^((([Hh][Tt][Tt][Pp][Ss]?:)?\/\/[^\/?#]*)?\/)?/.source+/(_ah\/api\/)?(batch|rpc)(\/|\?|#|$)/.source),tC=kB.vP(function(a){return tC.apply(null,arguments)});
var uC=vC=kB.tP(;
var wC=_.C("gapi.client.init",;_.C("gapi.client.load",rC);_.C("gapi.client.newBatch",vC);_.C("gapi.client.newRpcBatch",;_.C("gapi.client.newHttpBatch",;_.C("gapi.client.register",;_.C("gapi.client.request",tC);
_.C("gapi.client.rpcRequest",;_.C("gapi.client.setApiKey",;_.C("gapi.client.setApiVersions",;_.C("gapi.client.getToken",;
_.C("gapi.client.setToken",;_.C("gapi.client.AuthType",{Wga:"auto",NONE:"none",Jka:"oauth2",Ria:"1p"});_.C("gapi.client.AuthType.AUTO","auto");_.C("gapi.client.AuthType.NONE","none");_.C("gapi.client.AuthType.OAUTH2","oauth2");_.C("gapi.client.AuthType.FIRST_PARTY","1p");
});
// Google Inc.
