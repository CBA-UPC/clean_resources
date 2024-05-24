(function(){var g=void 0,h=true,i=null,j=false,ba=encodeURIComponent,ca=Infinity,da=setTimeout,ea=decodeURIComponent,k=Math;function fa(a,b){return a.onload=b}function ga(a,b){return a.name=b}var m="push",ha="slice",ia="replace",ja="load",ka="floor",n="charAt",la="value",p="indexOf",ma="match",r="name",oa="host",t="toString",u="length",v="prototype",w="split",pa="stopPropagation",qa="scope",x="location",y="getString",z="substring",ra="navigator",A="join",C="toLowerCase",D;function sa(a,b){switch(b){case 0:return""+a;case 1:return a*1;case 2:return!!a;case 3:return a*1E3}return a}function E(a,b){return g==a||"-"==a&&!b||""==a}function ta(a){if(!a||""==a)return"";for(;a&&" \n\r\t"[p](a[n](0))>-1;)a=a[z](1);for(;a&&" \n\r\t"[p](a[n](a[u]-1))>-1;)a=a[z](0,a[u]-1);return a}function ua(a){var b=1,c=0,d;if(!E(a)){b=0;for(d=a[u]-1;d>=0;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=c!=0?b^c>>21:b}return b}
function va(){return k.round(k.random()*2147483647)}function wa(){}function F(a,b){return ba instanceof Function?b?encodeURI(a):ba(a):(G(68),escape(a))}function H(a){a=a[w]("+")[A](" ");if(ea instanceof Function)try{return ea(a)}catch(b){G(17)}else G(68);return unescape(a)}var xa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ya=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)};
function I(a){return a&&a[u]>0?a[0]:""}function za(a){var b=a?a[u]:0;return b>0?a[b-1]:""}var Aa=function(){this.prefix="ga.";this.I={}};Aa[v].set=function(a,b){this.I[this.prefix+a]=b};Aa[v].get=function(a){return this.I[this.prefix+a]};Aa[v].contains=function(a){return this.get(a)!==g};function Ba(a){a[p]("www.")==0&&(a=a[z](4));return a[C]()}function Ca(a,b){var c,d={url:a,protocol:"http",host:"",path:"",c:new Aa,anchor:""};if(!a)return d;c=a[p]("://");if(c>=0)d.protocol=a[z](0,c),a=a[z](c+3);c=a.search("/|\\?|#");if(c>=0)d.host=a[z](0,c)[C](),a=a[z](c);else return d.host=a[C](),d;c=a[p]("#");if(c>=0)d.anchor=a[z](c+1),a=a[z](0,c);c=a[p]("?");c>=0&&(Da(d.c,a[z](c+1)),a=a[z](0,c));d.anchor&&b&&Da(d.c,d.anchor);a&&a[n](0)=="/"&&(a=a[z](1));d.path=a;return d}
function Da(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b)[m](c)}for(var d=ta(b)[w]("&"),e=0;e<d[u];e++)if(d[e]){var f=d[e][p]("=");f<0?c(d[e],"1"):c(d[e][z](0,f),d[e][z](f+1))}}function Ea(a,b){if(E(a))return"-";if("["==a[n](0)&&"]"==a[n](a[u]-1))return"-";var c=J.domain;c+=b&&b!="/"?b:"";return a[p](c)==(a[p]("http://")==0?7:a[p]("https://")==0?8:0)?"0":a};function Fa(a,b,c){k.random()*100>=1||(a=["utmt=error","utmerr="+a,"utmwv=5.2.2","utmn="+va(),"utmsp=1"],b&&a[m]("api="+b),c&&a[m]("msg="+F(c[z](0,100))),K.q&&a[m]("aip=1"),Ga(a[A]("&")))};var Ha=0;function L(a){return(a?"_":"")+Ha++}
var Ia=L(),Ja=L(),Ka=L(),La=L(),Ma=L(),M=L(),N=L(),Na=L(),Oa=L(),Pa=L(),Qa=L(),Ra=L(),Sa=L(),Ta=L(),Ua=L(),Va=L(),Wa=L(),Xa=L(),Ya=L(),Za=L(),$a=L(),ab=L(),bb=L(),cb=L(),db=L(),eb=L(),fb=L(),gb=L(),hb=L(),ib=L(),jb=L(),kb=L(),lb=L(),mb=L(),nb=L(),O=L(h),ob=L(),pb=L(),qb=L(),rb=L(),sb=L(),tb=L(),ub=L(),vb=L(),wb=L(),xb=L(),P=L(h),yb=L(h),zb=L(h),Bb=L(h),Cb=L(h),Db=L(h),Eb=L(h),Fb=L(h),Gb=L(h),Hb=L(h),Ib=L(h),Q=L(h),Jb=L(h),Kb=L(h),Lb=L(h),Mb=L(h),Nb=L(h),Ob=L(h),Pb=L(h),Qb=L(h),Rb=L(h),Sb=L(h),Tb=
L(h),Ub=L(h),Vb=L(h),Wb=L(),Xb=L(),Yb=L();L();var Zb=L(),$b=L(),ac=L(),bc=L(),cc=L(),dc=L(),ec=L(),hc=L(),ic=L(),jc=L();L();var kc=L(),lc=L();var mc=function(){function a(a,c,d){R(S[v],a,c,d)}T("_getName",Ka,58);T("_getAccount",Ia,64);T("_visitCode",P,54);T("_getClientInfo",Ta,53,1);T("_getDetectTitle",Wa,56,1);T("_getDetectFlash",Ua,65,1);T("_getLocalGifPath",fb,57);T("_getServiceMode",gb,59);U("_setClientInfo",Ta,66,2);U("_setAccount",Ia,3);U("_setNamespace",Ja,48);U("_setAllowLinker",Qa,11,2);U("_setDetectFlash",Ua,61,2);U("_setDetectTitle",Wa,62,2);U("_setLocalGifPath",fb,46,0);U("_setLocalServerMode",gb,92,g,0);U("_setRemoteServerMode",
gb,63,g,1);U("_setLocalRemoteServerMode",gb,47,g,2);U("_setSampleRate",eb,45,1);U("_setCampaignTrack",Va,36,2);U("_setAllowAnchor",Ra,7,2);U("_setCampNameKey",Ya,41);U("_setCampContentKey",cb,38);U("_setCampIdKey",Xa,39);U("_setCampMediumKey",ab,40);U("_setCampNOKey",db,42);U("_setCampSourceKey",$a,43);U("_setCampTermKey",bb,44);U("_setCampCIdKey",Za,37);U("_setCookiePath",N,9,0);U("_setMaxCustomVariables",hb,0,1);U("_setVisitorCookieTimeout",Na,28,1);U("_setSessionCookieTimeout",Oa,26,1);U("_setCampaignCookieTimeout",
Pa,29,1);U("_setReferrerOverride",qb,49);U("_setSiteSpeedSampleRate",ic,132);a("_trackPageview",S[v].na,1);a("_trackEvent",S[v].v,4);a("_trackPageLoadTime",S[v].ma,100);a("_trackSocial",S[v].oa,104);a("_trackTrans",S[v].pa,18);a("_sendXEvent",S[v].u,78);a("_createEventTracker",S[v].V,74);a("_getVersion",S[v].$,60);a("_setDomainName",S[v].t,6);a("_setAllowHash",S[v].ea,8);a("_getLinkerUrl",S[v].Z,52);a("_link",S[v].link,101);a("_linkByPost",S[v].da,102);a("_setTrans",S[v].ha,20);a("_addTrans",S[v].O,
21);a("_addItem",S[v].M,19);a("_setTransactionDelim",S[v].ia,82);a("_setCustomVar",S[v].fa,10);a("_deleteCustomVar",S[v].X,35);a("_getVisitorCustomVar",S[v].aa,50);a("_setXKey",S[v].ka,83);a("_setXValue",S[v].la,84);a("_getXKey",S[v].ba,76);a("_getXValue",S[v].ca,77);a("_clearXKey",S[v].S,72);a("_clearXValue",S[v].T,73);a("_createXObj",S[v].W,75);a("_addIgnoredOrganic",S[v].K,15);a("_clearIgnoredOrganic",S[v].P,97);a("_addIgnoredRef",S[v].L,31);a("_clearIgnoredRef",S[v].Q,32);a("_addOrganic",S[v].N,
14);a("_clearOrganic",S[v].R,70);a("_cookiePathCopy",S[v].U,30);a("_get",S[v].Y,106);a("_set",S[v].ga,107);a("_addEventListener",S[v].addEventListener,108);a("_removeEventListener",S[v].removeEventListener,109);a("_initData",S[v].m,2);a("_setVar",S[v].ja,22);U("_setSessionTimeout",Oa,27,3);U("_setCookieTimeout",Pa,25,3);U("_setCookiePersistence",Na,24,1);a("_setAutoTrackOutbound",wa,79);a("_setTrackOutboundSubdomains",wa,81);a("_setHrefExamineLimit",wa,80)},R=function(a,b,c,d){a[b]=function(){try{return G(d),
c.apply(this,arguments)}catch(a){throw Fa("exc",b,a&&a[r]),a;}}},T=function(a,b,c,d){S[v][a]=function(){try{return G(c),sa(this.a.get(b),d)}catch(e){throw Fa("exc",a,e&&e[r]),e;}}},U=function(a,b,c,d,e){S[v][a]=function(f){try{G(c),e==g?this.a.set(b,sa(f,d)):this.a.set(b,e)}catch(l){throw Fa("exc",a,l&&l[r]),l;}}},nc=function(a,b){return{type:b,target:a,stopPropagation:function(){throw"aborted";}}};var oc=function(a,b){return b!=="/"?j:(a[p]("www.google.")==0||a[p](".google.")==0||a[p]("google.")==0)&&!(a[p]("google.org")>-1)?h:j},pc=function(a){var b=a.get(Ma),c=a[y](N,"/");oc(b,c)&&a[pa]()};var uc=function(){var a={},b={},c=new qc;this.g=function(a,b){c.add(a,b)};var d=new qc;this.d=function(a,b){d.add(a,b)};var e=j,f=j,l=h;this.J=function(){e=h};this.f=function(a){this[ja]();this.set(Wb,a,h);a=new rc(this);e=j;d.execute(this);e=h;b={};this.i();a.qa()};this.load=function(){e&&(e=j,this.sa(),sc(this),f||(f=h,c.execute(this),tc(this),sc(this)),e=h)};this.i=function(){if(e)if(f)e=j,tc(this),e=h;else this[ja]()};this.get=function(c){c&&c[n](0)=="_"&&this[ja]();return b[c]!==g?b[c]:a[c]};
this.set=function(c,d,e){c&&c[n](0)=="_"&&this[ja]();e?b[c]=d:a[c]=d;c&&c[n](0)=="_"&&this.i()};this.n=function(b){a[b]=this.b(b,0)+1};this.b=function(a,b){var c=this.get(a);return c==g||c===""?b:c*1};this.getString=function(a,b){var c=this.get(a);return c==g?b:c+""};this.sa=function(){if(l){var b=this[y](Ma,""),c=this[y](N,"/");oc(b,c)||(a[M]=a[Sa]&&b!=""?ua(b):1,l=j)}}};uc[v].stopPropagation=function(){throw"aborted";};
var rc=function(a){var b=this;this.j=0;var c=a.get(Xb);this.Aa=function(){b.j>0&&c&&(b.j--,b.j||c())};this.qa=function(){!b.j&&c&&da(c,0)};a.set(Yb,b,h)};function vc(a,b){for(var b=b||[],c=0;c<b[u];c++){var d=b[c];if(""+a==d||d[p](a+".")==0)return d}return"-"}
var xc=function(a,b,c){c=c?"":a[y](M,"1");b=b[w](".");if(b[u]!==6||wc(b[0],c))return j;var c=b[1]*1,d=b[2]*1,e=b[3]*1,f=b[4]*1,b=b[5]*1;if(!(c>=0&&d>0&&e>0&&f>0&&b>=0))return G(110),j;a.set(P,c);a.set(Cb,d);a.set(Db,e);a.set(Eb,f);a.set(Fb,b);return h},yc=function(a){var b=a.get(P),c=a.get(Cb),d=a.get(Db),e=a.get(Eb),f=a.b(Fb,1);b==g?G(113):b==NaN&&G(114);b>=0&&c>0&&d>0&&e>0&&f>=0||G(115);return[a.b(M,1),b!=g?b:"-",c||"-",d||"-",e||"-",f][A](".")},zc=function(a){return[a.b(M,1),a.b(Ib,0),a.b(Q,1),
a.b(Jb,0)][A](".")},Ac=function(a,b,c){var c=c?"":a[y](M,"1"),d=b[w](".");if(d[u]!==4||wc(d[0],c))d=i;a.set(Ib,d?d[1]*1:0);a.set(Q,d?d[2]*1:10);a.set(Jb,d?d[3]*1:a.get(La));return d!=i||!wc(b,c)},Bc=function(a,b){var c=F(a[y](zb,"")),d=[],e=a.get(O);if(!b&&e){for(var f=0;f<e[u];f++){var l=e[f];l&&l[qa]==1&&d[m](f+"="+F(l[r])+"="+F(l[la])+"=1")}d[u]>0&&(c+="|"+d[A](","))}return c?a.b(M,1)+"."+c:i},Cc=function(a,b,c){c=c?"":a[y](M,"1");b=b[w](".");if(b[u]<2||wc(b[0],c))return j;b=b[ha](1)[A](".")[w]("|");
b[u]>0&&a.set(zb,H(b[0]));if(b[u]<=1)return h;for(var c=b[1][w](b[1][p](",")==-1?"^":","),d=0;d<c[u];d++){var e=c[d][w]("=");if(e[u]==4){var f={};ga(f,H(e[1]));f.value=H(e[2]);f.scope=1;a.get(O)[e[0]]=f}}b[1][p]("^")>=0&&G(125);return h},Ec=function(a,b){var c=Dc(a,b);return c?[a.b(M,1),a.b(Kb,0),a.b(Lb,1),a.b(Mb,1),c][A]("."):""},Dc=function(a){function b(b,e){if(!E(a.get(b))){var f=a[y](b,""),f=f[w](" ")[A]("%20"),f=f[w]("+")[A]("%20");c[m](e+"="+f)}}var c=[];b(Ob,"utmcid");b(Sb,"utmcsr");b(Qb,
"utmgclid");b(Rb,"utmdclid");b(Pb,"utmccn");b(Tb,"utmcmd");b(Ub,"utmctr");b(Vb,"utmcct");return c[A]("|")},Gc=function(a,b,c){c=c?"":a[y](M,"1");b=b[w](".");if(b[u]<5||wc(b[0],c))return a.set(Kb,g),a.set(Lb,g),a.set(Mb,g),a.set(Ob,g),a.set(Pb,g),a.set(Sb,g),a.set(Tb,g),a.set(Ub,g),a.set(Vb,g),a.set(Qb,g),a.set(Rb,g),j;a.set(Kb,b[1]*1);a.set(Lb,b[2]*1);a.set(Mb,b[3]*1);Fc(a,b[ha](4)[A]("."));return h},Fc=function(a,b){function c(a){return(a=b[ma](a+"=(.*?)(?:\\|utm|$)"))&&a[u]==2?a[1]:g}function d(b,
c){c&&(c=e?H(c):c[w]("%20")[A](" "),a.set(b,c))}b[p]("=")==-1&&(b=H(b));var e=c("utmcvr")=="2";d(Ob,c("utmcid"));d(Pb,c("utmccn"));d(Sb,c("utmcsr"));d(Tb,c("utmcmd"));d(Ub,c("utmctr"));d(Vb,c("utmcct"));d(Qb,c("utmgclid"));d(Rb,c("utmdclid"))},wc=function(a,b){return b?a!=b:!/^\d+$/.test(a)};var qc=function(){this.s=[]};qc[v].add=function(a,b){this.s[m]({name:a,Da:b})};qc[v].execute=function(a){try{for(var b=0;b<this.s[u];b++)this.s[b].Da.call(V,a)}catch(c){}};function Hc(a){a.get(eb)!=100&&a.get(P)%1E4>=a.get(eb)*100&&a[pa]()}function Ic(a){Jc()&&a[pa]()}function Kc(a){J[x].protocol=="file:"&&a[pa]()}function Lc(a){a.get(pb)||a.set(pb,J.title,h);a.get(ob)||a.set(ob,J[x].pathname+J[x].search,h)};var Mc=new function(){var a=[];this.set=function(b){a[b]=h};this.Ea=function(){for(var b=[],c=0;c<a[u];c++)a[c]&&(b[k[ka](c/6)]^=1<<c%6);for(c=0;c<b[u];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[n](b[c]||0);return b[A]("")+"~"}};function G(a){Mc.set(a)};var V=window,J=document,Jc=function(){var a=V._gaUserPrefs;return a&&a.ioo&&a.ioo()},Nc=function(a,b){da(a,b)},W=function(a){for(var b=[],c=J.cookie[w](";"),a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),d=0;d<c[u];d++){var e=c[d][ma](a);e&&b[m](e[1])}return b},X=function(a,b,c,d,e){var f;f=Jc()?j:oc(d,c)?j:h;if(f){if(b&&V[ra].userAgent[p]("Firefox")>=0){b=b[ia](/\n|\r/g," ");f=0;for(var l=b[u];f<l;++f){var o=b.charCodeAt(f)&255;if(o==10||o==13)b=b[z](0,f)+"?"+b[z](f+1)}}b&&b[u]>2E3&&(b=b[z](0,2E3),G(69));
a=a+"="+b+"; path="+c+"; ";e&&(a+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");d&&(a+="domain="+d+";");J.cookie=a}};var Oc,Pc,Qc=function(){if(!Oc){var a={},b=V[ra],c=V.screen;a.H=c?c.width+"x"+c.height:"-";a.G=c?c.colorDepth+"-bit":"-";a.language=(b&&(b.language||b.browserLanguage)||"-")[C]();a.javaEnabled=b&&b.javaEnabled()?1:0;a.characterSet=J.characterSet||J.charset||"-";Oc=a}},Rc=function(){Qc();for(var a=Oc,b=V[ra],a=b.appName+b.version+a.language+b.platform+b.userAgent+a.javaEnabled+a.H+a.G+(J.cookie?J.cookie:"")+(J.referrer?J.referrer:""),b=a[u],c=V.history[u];c>0;)a+=c--^b++;return ua(a)},Sc=function(a){Qc();
var b=Oc;a.set(sb,b.H);a.set(tb,b.G);a.set(wb,b.language);a.set(xb,b.characterSet);a.set(ub,b.javaEnabled);if(a.get(Ta)&&a.get(Ua)){if(!(b=Pc)){var c,d,e;d="ShockwaveFlash";if((b=(b=V[ra])?b.plugins:g)&&b[u]>0)for(c=0;c<b[u]&&!e;c++)d=b[c],d[r][p]("Shockwave Flash")>-1&&(e=d.description[w]("Shockwave Flash ")[1]);else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(f){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(l){}if(!e)try{c=
new ActiveXObject(d),e=c.GetVariable("$version")}catch(o){}e&&(e=e[w](" ")[1][w](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e?e:"-"}Pc=b;a.set(vb,Pc)}else a.set(vb,"-")};var Y=function(){R(Y[v],"push",Y[v][m],5);R(Y[v],"_createAsyncTracker",Y[v].Ba,33);R(Y[v],"_getAsyncTracker",Y[v].Ca,34);this.r=0};Y[v].Ba=function(a,b){return K.l(a,b||"")};Y[v].Ca=function(a){return K.p(a)};Y[v].push=function(a){this.r>0&&G(105);this.r++;for(var b=arguments,c=0,d=0;d<b[u];d++)try{if(typeof b[d]==="function")b[d]();else{var e="",f=b[d][0],l=f.lastIndexOf(".");l>0&&(e=f[z](0,l),f=f[z](l+1));var o=e=="_gat"?K:e=="_gaq"?Tc:K.p(e);o[f].apply(o,b[d][ha](1))}}catch(q){c++}this.r--;return c};var Yc=function(){function a(a,b,c,d){g==f[a]&&(f[a]={});g==f[a][b]&&(f[a][b]=[]);f[a][b][c]=d}function b(a,b,c){if(g!=f[a]&&g!=f[a][b])return f[a][b][c]}function c(a,b){if(g!=f[a]&&g!=f[a][b]){f[a][b]=g;var c=h,d;for(d=0;d<l[u];d++)if(g!=f[a][l[d]]){c=j;break}c&&(f[a]=g)}}function d(a){var b="",c=j,d,e;for(d=0;d<l[u];d++)if(e=a[l[d]],g!=e){c&&(b+=l[d]);for(var c=[],f=g,$=g,$=0;$<e[u];$++)if(g!=e[$]){f="";$!=aa&&g==e[$-1]&&(f+=$[t]()+na);for(var Wc=e[$],Xc="",Ab=g,fc=g,gc=g,Ab=0;Ab<Wc[u];Ab++)fc=
Wc[n](Ab),gc=B[fc],Xc+=g!=gc?gc:fc;f+=Xc;c[m](f)}b+=o+c[A](s)+q;c=j}else c=h;return b}var e=this,f=[],l=["k","v"],o="(",q=")",s="*",na="!",B={"'":"'0"};B[q]="'1";B[s]="'2";B[na]="'3";var aa=1;e.va=function(a){return g!=f[a]};e.o=function(){for(var a="",b=0;b<f[u];b++)g!=f[b]&&(a+=b[t]()+d(f[b]));return a};e.ua=function(a){if(a==g)return e.o();for(var b=a.o(),c=0;c<f[u];c++)g!=f[c]&&!a.va(c)&&(b+=c[t]()+d(f[c]));return b};e.e=function(b,c,d){if(!Uc(d))return j;a(b,"k",c,d);return h};e.k=function(b,
c,d){if(!Vc(d))return j;a(b,"v",c,d[t]());return h};e.getKey=function(a,c){return b(a,"k",c)};e.C=function(a,c){return b(a,"v",c)};e.A=function(a){c(a,"k")};e.B=function(a){c(a,"v")};R(e,"_setKey",e.e,89);R(e,"_setValue",e.k,90);R(e,"_getKey",e.getKey,87);R(e,"_getValue",e.C,88);R(e,"_clearKey",e.A,85);R(e,"_clearValue",e.B,86)};function Uc(a){return typeof a=="string"}function Vc(a){return typeof a!="number"&&(g==Number||!(a instanceof Number))||k.round(a)!=a||a==NaN||a==ca?j:h};var Zc=function(a){var b=V.gaGlobal;a&&!b&&(V.gaGlobal=b={});return b},$c=function(){var a=Zc(h).hid;if(a==i)a=va(),Zc(h).hid=a;return a},ad=function(a){a.set(rb,$c());var b=Zc();if(b&&b.dh==a.get(M)){var c=b.sid;c&&(c=="0"&&G(112),a.set(Eb,c),a.get(yb)&&a.set(Db,c));b=b.vid;a.get(yb)&&b&&(b=b[w]("."),b[1]*1||G(112),a.set(P,b[0]*1),a.set(Cb,b[1]*1))}};var bd,cd=function(a,b,c){var d=a[y](Ma,""),e=a[y](N,"/"),a=a.b(Na,0);X(b,c,e,d,a)},tc=function(a){var b=a[y](Ma,"");a.b(M,1);var c=a[y](N,"/");X("__utma",yc(a),c,b,a.get(Na));X("__utmb",zc(a),c,b,a.get(Oa));X("__utmc",""+a.b(M,1),c,b);var d=Ec(a,h);d?X("__utmz",d,c,b,a.get(Pa)):X("__utmz","",c,b,-1);(d=Bc(a,j))?X("__utmv",d,c,b,a.get(Na)):X("__utmv","",c,b,-1)},sc=function(a){var b=a.b(M,1);if(!xc(a,vc(b,W("__utma"))))return a.set(Bb,h),j;var c=!Ac(a,vc(b,W("__utmb")));a.set(Hb,c);Gc(a,vc(b,W("__utmz")));
Cc(a,vc(b,W("__utmv")));bd=!c;return h},dd=function(a){!bd&&!(W("__utmb")[u]>0)&&(X("__utmd","1",a[y](N,"/"),a[y](Ma,""),1E4),W("__utmd")[u]==0&&a[pa]())};var gd=function(a){a.get(P)==g?ed(a):a.get(Bb)&&!a.get(kc)?ed(a):a.get(Hb)&&fd(a)},hd=function(a){a.get(Nb)&&!a.get(Gb)&&(fd(a),a.set(Lb,a.get(Fb)))},ed=function(a){var b=a.get(La);a.set(yb,h);a.set(P,va()^Rc(a)&2147483647);a.set(zb,"");a.set(Cb,b);a.set(Db,b);a.set(Eb,b);a.set(Fb,1);a.set(Gb,h);a.set(Ib,0);a.set(Q,10);a.set(Jb,b);a.set(O,[]);a.set(Bb,j);a.set(Hb,j)},fd=function(a){a.set(Db,a.get(Eb));a.set(Eb,a.get(La));a.n(Fb);a.set(Gb,h);a.set(Ib,0);a.set(Q,10);a.set(Jb,a.get(La));a.set(Hb,j)};var id="daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,ozu:q,terra:query,rambler:query".split(","),od=function(a){if(a.get(Va)&&!a.get(kc)){for(var b=!E(a.get(Ob))||!E(a.get(Sb))||!E(a.get(Qb))||!E(a.get(Rb)),c={},d=0;d<jd[u];d++){var e=jd[d];
c[e]=a.get(e)}d=Ca(J[x].href,a.get(Ra));if(!(za(d.c.get(a.get(db)))=="1"&&b)&&(d=kd(a,d)||ld(a),!d&&!b&&a.get(Gb)&&(md(a,g,"(direct)",g,g,"(direct)","(none)",g,g),d=h),d&&(a.set(Nb,nd(a,c)),b=a.get(Sb)=="(direct)"&&a.get(Pb)=="(direct)"&&a.get(Tb)=="(none)",a.get(Nb)||a.get(Gb)&&!b)))a.set(Kb,a.get(La)),a.set(Lb,a.get(Fb)),a.n(Mb)}},kd=function(a,b){function c(c,d){var d=d||"-",e=za(b.c.get(a.get(c)));return e&&e!="-"?H(e):d}var d=za(b.c.get(a.get(Xa)))||"-",e=za(b.c.get(a.get($a)))||"-",f=za(b.c.get(a.get(Za)))||
"-",l=za(b.c.get("dclid"))||"-",o=c(Ya,"(not set)"),q=c(ab,"(not set)"),s=c(bb),na=c(cb);if(E(d)&&E(f)&&E(l)&&E(e))return j;if(E(s)){var B=Ea(a.get(qb),a.get(N)),B=Ca(B,h);(B=pd(a,B))&&!E(B[1]&&!B[2])&&(s=B[1])}md(a,d,e,f,l,o,q,s,na);return h},ld=function(a){var b=Ea(a.get(qb),a.get(N)),c=Ca(b,h);if(!(b!=g&&b!=i&&b!=""&&b!="0"&&b!="-"&&b[p]("://")>=0)||c&&c[oa][p]("google")>-1&&c.c.contains("q")&&c.path=="cse")return j;if((b=pd(a,c))&&!b[2])return md(a,g,b[0],g,g,"(organic)","organic",b[1],g),h;else if(b)return j;
if(a.get(Gb))a:{for(var b=a.get(kb),d=Ba(c[oa]),e=0;e<b[u];++e)if(d[p](b[e])>-1){a=j;break a}md(a,g,d,g,g,"(referral)","referral",g,"/"+c.path);a=h}else a=j;return a},pd=function(a,b){for(var c=a.get(ib),d=0;d<c[u];++d){var e=c[d][w](":");if(b[oa][p](e[0][C]())>-1){var f=b.c.get(e[1]);if(f&&(f=I(f),!f&&b[oa][p]("google.")>-1&&(f="(not provided)"),!e[3]||b.url[p](e[3])>-1)){a:{for(var c=f,d=a.get(jb),c=H(c)[C](),l=0;l<d[u];++l)if(c==d[l]){c=h;break a}c=j}return[e[2]||e[0],f,c]}}}return i},md=function(a,
b,c,d,e,f,l,o,q){a.set(Ob,b);a.set(Sb,c);a.set(Qb,d);a.set(Rb,e);a.set(Pb,f);a.set(Tb,l);a.set(Ub,o);a.set(Vb,q)},jd=[Pb,Ob,Qb,Rb,Sb,Tb,Ub,Vb],nd=function(a,b){function c(a){a=(""+a)[w]("+")[A]("%20");return a=a[w](" ")[A]("%20")}function d(c){var d=""+(a.get(c)||""),c=""+(b[c]||"");return d[u]>0&&d==c}if(d(Qb)||d(Rb))return G(131),j;for(var e=0;e<jd[u];e++){var f=jd[e],l=b[f]||"-",f=a.get(f)||"-";if(c(l)!=c(f))return h}return j};var rd=function(a){qd(a,J[x].href)?(a.set(kc,h),G(12)):a.set(kc,j)},qd=function(a,b){if(!a.get(Qa))return j;var c=Ca(b,a.get(Ra)),d=I(c.c.get("__utma")),e=I(c.c.get("__utmb")),f=I(c.c.get("__utmc")),l=I(c.c.get("__utmx")),o=I(c.c.get("__utmz")),q=I(c.c.get("__utmv")),c=I(c.c.get("__utmk"));if(ua(""+d+e+f+l+o+q)!=c){d=H(d);e=H(e);f=H(f);l=H(l);a:{for(var f=d+e+f+l,s=0;s<3;s++){for(var na=0;na<3;na++){if(c==ua(f+o+q)){G(127);c=[o,q];break a}var B=o[ia](/ /g,"%20"),aa=q[ia](/ /g,"%20");if(c==ua(f+B+
aa)){G(128);c=[B,aa];break a}B=B[ia](/\+/g,"%20");aa=aa[ia](/\+/g,"%20");if(c==ua(f+B+aa)){G(129);c=[B,aa];break a}o=H(o)}q=H(q)}c=g}if(!c)return j;o=c[0];q=c[1]}if(!xc(a,d,h))return j;Ac(a,e,h);Gc(a,o,h);Cc(a,q,h);sd(a,l,h);return h},ud=function(a,b,c){var d;d=yc(a)||"-";var e=zc(a)||"-",f=""+a.b(M,1)||"-",l=td(a)||"-",o=Ec(a,j)||"-",a=Bc(a,j)||"-",q=ua(""+d+e+f+l+o+a),s=[];s[m]("__utma="+d);s[m]("__utmb="+e);s[m]("__utmc="+f);s[m]("__utmx="+l);s[m]("__utmz="+o);s[m]("__utmv="+a);s[m]("__utmk="+
q);d=s[A]("&");if(!d)return b;e=b[p]("#");return c?e<0?b+"#"+d:b+"&"+d:(c="",f=b[p]("?"),e>0&&(c=b[z](e),b=b[z](0,e)),f<0?b+"?"+d+c:b+"&"+d+c)};var vd="|",xd=function(a,b,c,d,e,f,l,o,q){var s=wd(a,b);s||(s={},a.get(lb)[m](s));s.id_=b;s.affiliation_=c;s.total_=d;s.tax_=e;s.shipping_=f;s.city_=l;s.state_=o;s.country_=q;s.items_=s.items_||[];return s},yd=function(a,b,c,d,e,f,l){var a=wd(a,b)||xd(a,b,"",0,0,0,"","",""),o;a:{if(a&&a.items_){o=a.items_;for(var q=0;q<o[u];q++)if(o[q].sku_==c){o=o[q];break a}}o=i}q=o||{};q.transId_=b;q.sku_=c;q.name_=d;q.category_=e;q.price_=f;q.quantity_=l;o||a.items_[m](q);return q},wd=function(a,b){for(var c=
a.get(lb),d=0;d<c[u];d++)if(c[d].id_==b)return c[d];return i};var zd,Ad=function(a){var f;var e;if(!zd){var b;b=J[x].hash;var c=V[r],d=/^#?gaso=([^&]*)/;if(f=(e=(b=b&&b[ma](d)||c&&c[ma](d))?b[1]:I(W("GASO")),b=e)&&b[ma](/^(?:\|([-0-9a-z.]{1,40})\|)?([-.\w]{10,1200})$/i),c=f)if(cd(a,"GASO",""+b),K._gasoDomain=a.get(Ma),K._gasoCPath=a.get(N),b="https://"+((c[1]||"www")+".google.com")+"/analytics/reporting/overlay_js?gaso="+c[2]+"&"+va())a=J.createElement("script"),a.type="text/javascript",a.async=h,a.src=b,a.id="_gasojs",fa(a,g),b=J.getElementsByTagName("script")[0],
b.parentNode.insertBefore(a,b);zd=h}};var sd=function(a,b,c){c&&(b=H(b));c=a.b(M,1);b=b[w](".");!(b[u]<2)&&/^\d+$/.test(b[0])&&(b[0]=""+c,cd(a,"__utmx",b[A](".")))},td=function(a,b){var c=vc(a.get(M),W("__utmx"));c=="-"&&(c="");return b?F(c):c};var Fd=function(a,b){var c=k.min(a.b(ic,0),10);if(a.b(P,0)%100>=c)return j;c=Bd()||Cd();if(c==g)return j;var d=c[0];if(d==g||d==ca||isNaN(d))return j;d>0?Dd(c)?b(Ed(c)):b(Ed(c[ha](0,1))):xa(V,"load",function(){Fd(a,b)},j);return h},Dd=function(a){for(var b=1;b<a[u];b++)if(isNaN(a[b])||a[b]==ca||a[b]<0)return j;return h},Ed=function(a){for(var b=new Yc,c=0;c<a[u];c++)b.e(14,c+1,(isNaN(a[c])||a[c]<0?0:a[c]<5E3?k[ka](a[c]/10)*10:a[c]<45E4?k[ka](a[c]/100)*100:45E4)+""),b.k(14,c+1,a[c]);return b},Bd=function(){var a=
V.performance||V.webkitPerformance;if(a=a&&a.timing){var b=a.navigationStart;if(b==0)G(133);else return[a.loadEventStart-b,a.domainLookupEnd-a.domainLookupStart,a.connectEnd-a.connectStart,a.responseStart-a.requestStart,a.responseEnd-a.responseStart,a.fetchStart-b]}},Cd=function(){if(V.top==V){var a=V.external,b=a&&a.onloadT;a&&!a.isValidLoadTime&&(b=g);b>2147483648&&(b=g);b>0&&a.setPageReadyTime();return b==g?g:[b]}};var S=function(a,b,c){function d(a){return function(b){if((b=b.get(lc)[a])&&b[u])for(var c=nc(e,a),d=0;d<b[u];d++)b[d].call(e,c)}}var e=this;this.a=new uc;this.get=function(a){return this.a.get(a)};this.set=function(a,b,c){this.a.set(a,b,c)};this.set(Ia,b||"UA-XXXXX-X");this.set(Ka,a||"");this.set(Ja,c||"");this.set(La,k.round((new Date).getTime()/1E3));this.set(N,"/");this.set(Na,63072E6);this.set(Pa,15768E6);this.set(Oa,18E5);this.set(Qa,j);this.set(hb,50);this.set(Ra,j);this.set(Sa,h);this.set(Ta,
h);this.set(Ua,h);this.set(Va,h);this.set(Wa,h);this.set(Ya,"utm_campaign");this.set(Xa,"utm_id");this.set(Za,"gclid");this.set($a,"utm_source");this.set(ab,"utm_medium");this.set(bb,"utm_term");this.set(cb,"utm_content");this.set(db,"utm_nooverride");this.set(eb,100);this.set(ic,1);this.set(jc,j);this.set(fb,"/__utm.gif");this.set(gb,1);this.set(lb,[]);this.set(O,[]);this.set(ib,id[ha](0));this.set(jb,[]);this.set(kb,[]);this.t("auto");this.set(qb,this.ra());this.set(lc,{hit:[],load:[]});this.a.g("0",
rd);this.a.g("1",gd);this.a.g("2",od);this.a.g("3",hd);this.a.g("4",d("load"));this.a.g("5",Ad);this.a.d("A",Ic);this.a.d("B",Kc);this.a.d("C",gd);this.a.d("D",Hc);this.a.d("E",pc);this.a.d("F",Gd);this.a.d("G",dd);this.a.d("H",Lc);this.a.d("I",Sc);this.a.d("J",ad);this.a.d("K",d("hit"));this.a.d("L",Hd);this.a.d("M",Id);this.get(La)===0&&G(111);this.a.J();this.w=g};D=S[v];D.h=function(){var a=this.get(mb);a||(a=new Yc,this.set(mb,a));return a};
D.ta=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&typeof c!="function"&&this.set(b,c,h)}};D.z=function(a){if(this.get(jc))return j;var b=this,c=Fd(this.a,function(c){b.set(ob,a,h);b.u(c)});this.set(jc,c);return c};D.na=function(a){a&&a!=g&&(a.constructor+"")[p]("String")>-1?(G(13),this.set(ob,a,h)):typeof a==="object"&&a!==i&&this.ta(a);this.w=a=this.get(ob);this.a.f("page");this.z(a)};
D.v=function(a,b,c,d,e){if(a==""||!Uc(a)||b==""||!Uc(b))return j;if(c!=g&&!Uc(c))return j;if(d!=g&&!Vc(d))return j;this.set($b,a,h);this.set(ac,b,h);this.set(bc,c,h);this.set(cc,d,h);this.set(Zb,!!e,h);this.a.f("event");return h};D.oa=function(a,b,c,d){if(!a||!b)return j;this.set(dc,a,h);this.set(ec,b,h);this.set(hc,c||J[x].href,h);d&&this.set(ob,d,h);this.a.f("social");return h};D.ma=function(){this.set(ic,10);this.z(this.w)};D.pa=function(){this.a.f("trans")};D.u=function(a){this.set(nb,a,h);this.a.f("event")};
D.V=function(a){this.m();var b=this;return{_trackEvent:function(c,d,e){G(91);b.v(a,c,d,e)}}};D.Y=function(a){return this.get(a)};D.ga=function(a,b){if(a)if(a!=g&&(a.constructor+"")[p]("String")>-1)this.set(a,b);else if(typeof a=="object")for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])};D.addEventListener=function(a,b){var c=this.get(lc)[a];c&&c[m](b)};D.removeEventListener=function(a,b){for(var c=this.get(lc)[a],d=0;c&&d<c[u];d++)if(c[d]==b){c.splice(d,1);break}};D.$=function(){return"5.2.2"};
D.t=function(a){this.get(Sa);a=a=="auto"?Ba(J.domain):!a||a=="-"||a=="none"?"":a[C]();this.set(Ma,a)};D.ea=function(a){this.set(Sa,!!a)};D.Z=function(a,b){return ud(this.a,a,b)};D.link=function(a,b){if(this.a.get(Qa)&&a){var c=ud(this.a,a,b);J[x].href=c}};D.da=function(a,b){this.a.get(Qa)&&a&&a.action&&(a.action=ud(this.a,a.action,b))};
D.ha=function(){this.m();var a=this.a,b=J.getElementById?J.getElementById("utmtrans"):J.utmform&&J.utmform.utmtrans?J.utmform.utmtrans:i;if(b&&b[la]){a.set(lb,[]);for(var b=b[la][w]("UTM:"),c=0;c<b[u];c++){b[c]=ta(b[c]);for(var d=b[c][w](vd),e=0;e<d[u];e++)d[e]=ta(d[e]);"T"==d[0]?xd(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&yd(a,d[1],d[2],d[3],d[4],d[5],d[6])}}};D.O=function(a,b,c,d,e,f,l,o){return xd(this.a,a,b,c,d,e,f,l,o)};D.M=function(a,b,c,d,e,f){return yd(this.a,a,b,c,d,e,f)};
D.ia=function(a){vd=a||"|"};D.fa=function(a,b,c,d){var e=this.a;if(a<=0||a>e.get(hb))a=j;else if(!b||!c||F(b)[u]+F(c)[u]>64)a=j;else{d!=1&&d!=2&&(d=3);var f={};ga(f,b);f.value=c;f.scope=d;e.get(O)[a]=f;a=h}a&&this.a.i();return a};D.X=function(a){this.a.get(O)[a]=g;this.a.i()};D.aa=function(a){return(a=this.a.get(O)[a])&&a[qa]==1?a[la]:g};D.ka=function(a,b,c){this.h().e(a,b,c)};D.la=function(a,b,c){this.h().k(a,b,c)};D.ba=function(a,b){return this.h().getKey(a,b)};
D.ca=function(a,b){return this.h().C(a,b)};D.S=function(a){this.h().A(a)};D.T=function(a){this.h().B(a)};D.W=function(){return new Yc};D.K=function(a){a&&this.get(jb)[m](a[C]())};D.P=function(){this.set(jb,[])};D.L=function(a){a&&this.get(kb)[m](a[C]())};D.Q=function(){this.set(kb,[])};D.N=function(a,b,c,d,e){if(a&&b){a=[a,b[C]()][A](":");if(d||e)a=[a,d,e][A](":");d=this.get(ib);d.splice(c?0:d[u],0,a)}};D.R=function(){this.set(ib,[])};
D.U=function(a){this.a[ja]();var b=this.get(N),c=td(this.a);this.set(N,a);this.a.i();sd(this.a,c);this.set(N,b)};D.ra=function(){return J.referrer};D.m=function(){this.a[ja]()};D.ja=function(a){a&&a!=""&&(this.set(zb,a),this.a.f("var"))};var Gd=function(a){a.get(Wb)!=="trans"&&a.b(Ib,0)>=500&&a[pa]();if(a.get(Wb)==="event"){var b=(new Date).getTime(),c=a.b(Jb,0),d=a.b(Eb,0),c=k[ka](0.2*((b-(c!=d?c:c*1E3))/1E3));c>0&&(a.set(Jb,b),a.set(Q,k.min(10,a.b(Q,0)+c)));a.b(Q,0)<=0&&a[pa]()}},Id=function(a){a.get(Wb)==="event"&&a.set(Q,k.max(0,a.b(Q,10)-1))};var Jd=function(){var a=[];this.add=function(b,c,d){d&&(c=F(""+c));a[m](b+"="+c)};this.toString=function(){return a[A]("&")}},Kd=function(a,b){(b||a.get(gb)!=2)&&a.n(Ib)},Ld=function(a,b){b.add("utmwv","5.2.2");b.add("utms",a.get(Ib));b.add("utmn",va());var c=J[x].hostname;E(c)||b.add("utmhn",c,h);c=a.get(eb);c!=100&&b.add("utmsp",c,h)},Nd=function(a,b){b.add("utmac",a.get(Ia));a.get(Zb)&&b.add("utmni",1);Md(a,b);K.q&&b.add("aip",1);b.add("utmu",Mc.Ea())},Md=function(a,b){function c(a,b){b&&d[m](a+
"="+b+";")}var d=[];c("__utma",yc(a));c("__utmz",Ec(a,j));c("__utmv",Bc(a,h));c("__utmx",td(a));b.add("utmcc",d[A]("+"),h)},Od=function(a,b){a.get(Ta)&&(b.add("utmcs",a.get(xb),h),b.add("utmsr",a.get(sb)),b.add("utmsc",a.get(tb)),b.add("utmul",a.get(wb)),b.add("utmje",a.get(ub)),b.add("utmfl",a.get(vb),h))},Pd=function(a,b){a.get(Wa)&&a.get(pb)&&b.add("utmdt",a.get(pb),h);b.add("utmhid",a.get(rb));b.add("utmr",Ea(a.get(qb),a.get(N)),h);b.add("utmp",F(a.get(ob),h),h)},Qd=function(a,b){for(var c=a.get(mb),
d=a.get(nb),e=a.get(O)||[],f=0;f<e[u];f++){var l=e[f];l&&(c||(c=new Yc),c.e(8,f,l[r]),c.e(9,f,l[la]),l[qa]!=3&&c.e(11,f,""+l[qa]))}!E(a.get($b))&&!E(a.get(ac),h)&&(c||(c=new Yc),c.e(5,1,a.get($b)),c.e(5,2,a.get(ac)),e=a.get(bc),e!=g&&c.e(5,3,e),e=a.get(cc),e!=g&&c.k(5,1,e));c?b.add("utme",c.ua(d),h):d&&b.add("utme",d.o(),h)},Rd=function(a,b,c){var d=new Jd;Kd(a,c);Ld(a,d);d.add("utmt","tran");d.add("utmtid",b.id_,h);d.add("utmtst",b.affiliation_,h);d.add("utmtto",b.total_,h);d.add("utmttx",b.tax_,
h);d.add("utmtsp",b.shipping_,h);d.add("utmtci",b.city_,h);d.add("utmtrg",b.state_,h);d.add("utmtco",b.country_,h);!c&&Nd(a,d);return d[t]()},Sd=function(a,b,c){var d=new Jd;Kd(a,c);Ld(a,d);d.add("utmt","item");d.add("utmtid",b.transId_,h);d.add("utmipc",b.sku_,h);d.add("utmipn",b.name_,h);d.add("utmiva",b.category_,h);d.add("utmipr",b.price_,h);d.add("utmiqt",b.quantity_,h);!c&&Nd(a,d);return d[t]()},Td=function(a,b){var c=a.get(Wb);if(c=="page")c=new Jd,Kd(a,b),Ld(a,c),Qd(a,c),Od(a,c),Pd(a,c),b||
Nd(a,c),c=[c[t]()];else if(c=="event")c=new Jd,Kd(a,b),Ld(a,c),c.add("utmt","event"),Qd(a,c),Od(a,c),Pd(a,c),!b&&Nd(a,c),c=[c[t]()];else if(c=="var")c=new Jd,Kd(a,b),Ld(a,c),c.add("utmt","var"),!b&&Nd(a,c),c=[c[t]()];else if(c=="trans")for(var c=[],d=a.get(lb),e=0;e<d[u];++e){c[m](Rd(a,d[e],b));for(var f=d[e].items_,l=0;l<f[u];++l)c[m](Sd(a,f[l],b))}else c=="social"?b?c=[]:(c=new Jd,Kd(a,b),Ld(a,c),c.add("utmt","social"),c.add("utmsn",a.get(dc),h),c.add("utmsa",a.get(ec),h),c.add("utmsid",a.get(hc),
h),Qd(a,c),Od(a,c),Pd(a,c),Nd(a,c),c=[c[t]()]):c=[];return c},Hd=function(a){var b,c=a.get(gb),d=a.get(Yb),e=d&&d.Aa,f=0;if(c==0||c==2){var l=a.get(fb)+"?";b=Td(a,h);for(var o=0,q=b[u];o<q;o++)Ga(b[o],e,l,h),f++}if(c==1||c==2){b=Td(a);o=0;for(q=b[u];o<q;o++)try{Ga(b[o],e),f++}catch(s){s&&Fa(s[r],g,s.message)}}if(d)d.j=f};var Ud="https:"==J[x].protocol?"https://ssl.google-analytics.com":"http://www.google-analytics.com",Vd=function(a){ga(this,"len");this.message=a+"-8192"},Wd=function(a){ga(this,"ff2post");this.message=a+"-2036"},Ga=function(a,b,c,d){b=b||wa;if(d||a[u]<=2036)Xd(a,b,c);else if(a[u]<=8192){if(V[ra].userAgent[p]("Firefox")>=0&&![].reduce)throw new Wd(a[u]);Yd(a,b)||Zd(a,b)}else throw new Vd(a[u]);},Xd=function(a,b,c){var c=c||Ud+"/__utm.gif?",d=new Image(1,1);d.src=c+a;fa(d,function(){fa(d,i);d.onerror=
i;b()});d.onerror=function(){fa(d,i);d.onerror=i;b()}},Yd=function(a,b){var c,d=Ud+"/p/__utm.gif",e=V.XDomainRequest;if(e)c=new e,c.open("POST",d);else if(e=V.XMLHttpRequest)e=new e,"withCredentials"in e&&(c=e,c.open("POST",d,h),c.setRequestHeader("Content-Type","text/plain"));if(c)return c.onreadystatechange=function(){c.readyState==4&&(b(),c=i)},c.send(a),h},Zd=function(a,b){if(J.body){a=ba(a);try{var c=J.createElement('<iframe name="'+a+'"></iframe>')}catch(d){c=J.createElement("iframe"),ga(c,
a)}c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var e=J[x],e=Ud+"/u/post_iframe.html#"+ba(e.protocol+"//"+e[oa]+"/favicon.ico"),f=function(){c.src="";c.parentNode&&c.parentNode.removeChild(c)};xa(V,"beforeunload",f);var l=j,o=0,q=function(){if(!l){try{if(o>9||c.contentWindow[x][oa]==J[x][oa]){l=h;f();ya(V,"beforeunload",f);b();return}}catch(a){}o++;da(q,200)}};xa(c,"load",q);J.body.appendChild(c);c.src=e}else Nc(function(){Zd(a,b)},100)};var Z=function(){this.q=j;this.D={};this.F=[];this.wa=0;this._gasoCPath=this._gasoDomain=g;R(Z[v],"_createTracker",Z[v].l,55);R(Z[v],"_getTracker",Z[v].ya,0);R(Z[v],"_getTrackerByName",Z[v].p,51);R(Z[v],"_getTrackers",Z[v].za,130);R(Z[v],"_anonymizeIp",Z[v].xa,16);mc()};D=Z[v];D.ya=function(a,b){return this.l(a,g,b)};D.l=function(a,b,c){b&&G(23);c&&G(67);b==g&&(b="~"+K.wa++);a=new S(b,a,c);K.D[b]=a;K.F[m](a);return a};D.p=function(a){a=a||"";return K.D[a]||K.l(g,a)};D.za=function(){return K.F[ha](0)};
D.xa=function(){this.q=h};var $d=function(a){if(J.webkitVisibilityState=="prerender")return j;a();return h};var K=new Z;var ae=V._gat;ae&&typeof ae._getTracker=="function"?K=ae:V._gat=K;var Tc=new Y;(function(a){if(!$d(a)){G(123);var b=j,c=function(){!b&&$d(a)&&(G(124),b=h,ya(J,"webkitvisibilitychange",c))};xa(J,"webkitvisibilitychange",c)}})(function(){var a=V._gaq,b=j;if(a&&typeof a[m]=="function"&&(b=Object[v][t].call(Object(a))=="[object Array]",!b)){Tc=a;return}V._gaq=Tc;b&&Tc[m].apply(Tc,a)});})();
-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}

.w-richtext figure.w-richtext-align-normal {
  clear: both;
}

.w-richtext figure.w-richtext-align-fullwidth {
  width: 100%;
  max-width: 100%;
  text-align: center;
  clear: both;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.w-richtext figure.w-richtext-align-fullwidth > div {
  padding-bottom: inherit;
  display: inline-block;
}

.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  clear: none;
  margin-right: 15px;
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  clear: none;
  margin-left: 15px;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before, .w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}

.w-nav-brand {
  float: left;
  color: #333;
  text-decoration: none;
  position: relative;
}

.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

.w-nav-menu {
  float: right;
  position: relative;
}

[data-nav-menu-open] {
  text-align: center;
  min-width: 200px;
  background: #c8c8c8;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: visible;
  display: block !important;
}

.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0;
}

.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  right: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}

.w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open] {
  z-index: 1;
  top: 0;
  left: auto;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: none;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}

.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}

.w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open {
  display: block;
}

.w--nav-dropdown-list-open {
  position: static;
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }

  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}

.w-tabs {
  position: relative;
}

.w-tabs:before, .w-tabs:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-tabs:after {
  clear: both;
}

.w-tab-menu {
  position: relative;
}

.w-tab-link {
  vertical-align: top;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd;
  padding: 9px 30px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-tab-link.w--current {
  background-color: #c8c8c8;
}

.w-tab-link:focus {
  outline: 0;
}

.w-tab-content {
  display: block;
  position: relative;
  overflow: hidden;
}

.w-tab-pane {
  display: none;
  position: relative;
}

.w--tab-active {
  display: block;
}

@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}

.w-ix-emptyfix:after {
  content: "";
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.w-dyn-empty {
  background-color: #ddd;
  padding: 10px;
}

.w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible {
  display: none !important;
}

.wf-layout-layout {
  display: grid;
}

:root {
  --blueish-gray: #35364e;
  --primary-teal: #1fb7ab;
  --light-teal: #59c2ba;
  --white: white;
  --dark-blue: #004064;
  --dark-grey: #5e636b;
  --light-grey: #8c8ea6;
  --steel-blue: #007bbd;
}

.w-pagination-wrapper {
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
}

.w-pagination-previous {
  color: #333;
  background-color: #fafafa;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 9px 20px;
  font-size: 14px;
  display: block;
}

.w-pagination-previous-icon {
  margin-right: 4px;
}

.w-pagination-next {
  color: #333;
  background-color: #fafafa;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 9px 20px;
  font-size: 14px;
  display: block;
}

.w-pagination-next-icon {
  margin-left: 4px;
}

.w-page-count {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}

body {
  color: var(--blueish-gray);
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 1.375;
}

h1 {
  margin: 0;
  font-size: 40px;
  font-weight: 700;
  line-height: 1em;
}

h2 {
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.25em;
}

h3 {
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25em;
}

h4 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.25;
}

h5 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
}

h6 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
}

p {
  margin: 0;
  font-size: 18px;
  line-height: 1.375;
}

a {
  color: var(--primary-teal);
  text-decoration: underline;
  transition: color .2s;
}

a:hover {
  color: var(--light-teal);
  text-decoration: none;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 48px;
  font-size: 18px;
}

ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
}

img {
  max-width: 100%;
  display: inline-block;
}

blockquote {
  border-left: 5px solid #e2e2e2;
  margin-bottom: 10px;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 22px;
}

figure {
  margin-bottom: 10px;
}

figcaption {
  text-align: center;
  margin-top: 5px;
}

.page {
  background-color: #f7fbfd;
  padding-top: 100px;
  overflow: hidden;
}

.page.page--dark {
  background-color: #fbfbfb;
  font-family: Metric, sans-serif;
  overflow: hidden;
}

.page.page--blue {
  background-color: var(--white);
  background-image: linear-gradient(rgba(0, 123, 189, .07), rgba(255, 255, 255, .07));
  padding-top: 100px;
}

.page.blog-inner {
  overflow: visible;
}

.footer {
  background-color: #fff;
  padding-top: 2px;
  padding-bottom: 32px;
}

.header {
  z-index: 10;
  background-color: #fff;
  margin-left: 0;
  padding-left: 0;
  display: block;
  position: fixed;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, .2);
}

.content {
  padding-top: 0;
  padding-left: 0;
}

.need-help {
  text-align: center;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07a7e9d84b92_need-help__bg%402x.png");
  background-position: 50%;
  background-size: cover;
  padding-top: 44px;
  padding-bottom: 44px;
}

.container {
  height: 100%;
  max-width: 1328px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
}

.container.blog-inner {
  height: auto;
  position: relative;
}

.button {
  background-color: var(--light-teal);
  text-align: center;
  border-radius: 6px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color .2s;
}

.button:hover {
  background-color: var(--primary-teal);
  color: #fff;
}

.button.button--sm {
  padding-top: 12px;
  padding-bottom: 12px;
}

.button.button--sm.button--enlarged {
  font-size: 24px;
}

.button.button--wide {
  width: 100%;
}

.button.button--lg {
  padding-left: 40px;
  padding-right: 40px;
  font-size: 18px;
}

.button.button--lg.button__hero {
  margin-bottom: 160px;
}

.button.button--xs {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
}

.button.newsletter-subscribe__button {
  padding: 12px 48px;
}

.button.vs_button__registered {
  background-color: var(--dark-blue);
  padding: 12px 48px;
}

.button.vs_button__registered:hover {
  background-color: var(--dark-blue);
}

.pro-tip-card {
  color: var(--blueish-gray);
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb075fb3d84b84_pro-tip-card__arrow.svg");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto;
  border: 1px solid #dde1e9;
  border-radius: 6px;
  padding: 27px 68px 27px 151px;
  text-decoration: none;
  transition: all .2s;
  display: block;
  position: relative;
  overflow: hidden;
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, .05);
}

.pro-tip-card:hover {
  transform: translate(0, -2px);
  box-shadow: 8px 0 24px rgba(0, 0, 0, .05), 0 2px 6px rgba(0, 0, 0, .05);
}

.pro-tip-card__icon {
  width: 128px;
  background-color: #eaf5f7;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: -1px;
  right: auto;
}

.paragraph--sm {
  font-size: 16px;
}

.paragraph--xs {
  font-size: 15px;
}

.paragraph--xs.tc--light {
  font-family: Metric, sans-serif;
}

.pro-tip-card__title {
  margin-bottom: 8px;
}

.pro-tips__grid {
  grid-template-rows: auto auto auto;
}

.pro-tip-video {
  color: #fff;
  text-align: center;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07f7a1d84b85_pro-tip-video%402x.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 96px 48px 48px;
  transition: all .2s;
  display: flex;
  position: relative;
  box-shadow: 6px 0 24px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, .05);
}

.pro-tip-video:hover {
  box-shadow: 6px 0 24px rgba(0, 0, 0, .05), 0 2px 6px rgba(0, 0, 0, .05);
}

.pro-tip-video__title {
  margin-bottom: 8px;
}

.pro-tip-video__subtitle {
  max-width: 480px;
  opacity: .8;
  margin-bottom: 16px;
}

.pro-tip-video__play {
  opacity: 0;
  margin-bottom: 32px;
}

.feature-requests {
  color: #fff;
  display: none;
}

.feature-requests__cont {
  height: 256px;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0738c3d84b87_feature-requests%402x.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 1280px;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 48px;
  padding-right: 32px;
  display: flex;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .05);
}

.paragraph--lg {
  font-size: 20px;
}

.paragraph--lg.vs-bio__text {
  max-width: 968px;
}

.paragraph--lg.vs-agenda__subtitle {
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
}

.feature-requests__title {
  margin-bottom: 10px;
}

.feature-requests__subtitle {
  max-width: 50%;
  color: #9fa8c0;
  margin-bottom: 20px;
  font-size: 20px;
}

.join-today {
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07ac46d84ba2_join-today.svg");
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 1600px 1210px;
  margin-top: -60px;
  padding-top: 250px;
  padding-bottom: 112px;
}

.join-today__cont {
  max-width: 1040px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.join-today__left {
  max-width: 55%;
}

.join-today__right {
  max-width: 34%;
  color: var(--dark-grey);
}

.join-today__grid {
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-rows: auto auto auto;
  grid-template-columns: auto 1fr;
  align-items: center;
}

.join-today__title {
  margin-bottom: 20px;
}

.join-today__icon {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.need-help__title {
  margin-bottom: 8px;
}

.need-help__subtitle {
  max-width: 544px;
  color: var(--dark-grey);
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}

.blog__grid {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.spacer--100 {
  height: 16px;
}

.spacer--200 {
  height: 32px;
}

.blog-card {
  min-height: 100%;
  text-align: left;
  background-color: #fff;
  border-radius: 6px;
  flex-direction: column;
  padding: 28px;
  transition: all .2s;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, .05);
}

.blog-card:hover {
  transform: translate(0, -4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .05), 0 2px 6px rgba(0, 0, 0, .05);
}

.blog-card__title {
  font-family: Metric, sans-serif;
  font-size: 22px;
}

.blog-card__date {
  color: var(--light-grey);
  margin-top: 4px;
  margin-bottom: 8px;
  font-family: Metric, sans-serif;
  font-size: 16px;
}

.blog-card__pic {
  max-height: 270px;
  max-width: none;
  min-height: 250px;
  color: #f5f5f5;
  text-align: center;
  background-color: #f9f9f9;
  margin-bottom: 24px;
  margin-left: -28px;
  margin-right: -28px;
  display: block;
  position: relative;
}

.blog-card__pic.blog-card__pic--sm {
  max-height: 208px;
  min-height: 208px;
}

.tc--light {
  color: var(--dark-grey);
}

.tc--xlight {
  color: var(--light-grey);
}

.spacer--600 {
  height: 96px;
}

.author-summary {
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  display: flex;
  position: relative;
}

.author-summary__cont {
  flex: 1;
}

.author-summary__link {
  font-family: Metric, sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  display: block;
}

.author-card_title {
  width: 150px;
  color: var(--light-grey);
  margin-top: 2px;
  font-family: Metric, sans-serif;
  font-size: 15px;
}

.author-summary__name {
  color: var(--dark-grey);
  font-family: Metric, sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.author-summary__photo {
  height: 40px;
  max-width: 40px;
  min-width: 40px;
  border-radius: 50%;
  margin-right: 8px;
}

.blog__link {
  float: right;
  margin-top: -1.75em;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.75;
  text-decoration: none;
}

.paragraph--xl {
  font-size: 22px;
}

.paragraph--xl.vs-connect__link {
  align-items: center;
  font-weight: 600;
  text-decoration: none;
  display: flex;
}

.welcome {
  text-align: center;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0764e3d84b8e_hero__bg--right.svg"), url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb071badd84b8d_hero__bg--left.svg"), linear-gradient(#f2f7f9, #fff);
  background-position: 100% 0, 0 0, 0 0;
  background-repeat: no-repeat, no-repeat, repeat;
  background-size: auto, auto, auto;
  padding-top: 42px;
}

.welcome__title {
  margin-bottom: 8px;
}

.welcome__grid {
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.event-promo {
  height: 100%;
  background-color: var(--blueish-gray);
  color: #fff;
  text-align: left;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb072aa7d84c4a_vsrecap-bg.png");
  background-position: 0 0;
  background-size: 950px;
  border-radius: 6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: stretch;
  padding: 96px 48px 48px;
  transition: all .2s;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, .05);
}

.event-promo:hover {
  transform: translate(0, -4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .05), 0 2px 6px rgba(0, 0, 0, .05);
}

.event-promo__meta {
  opacity: .6;
  margin-bottom: 8px;
  font-size: 16px;
  position: relative;
}

.event-promo__title {
  margin-bottom: 8px;
  position: relative;
}

.event-promo__summary {
  max-width: 576px;
  opacity: .9;
  position: relative;
}

.event-promo__button {
  color: #fff;
  background-color: rgba(228, 243, 242, .1);
  border: 1px solid #fff;
  border-radius: 4px;
  margin-top: 24px;
  padding: 11px 23px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}

.event-promo__button:hover {
  color: #fff;
  background-color: rgba(228, 243, 242, .2);
}

.event-promo__button.event-promo__button--alt {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

.welcome__col {
  height: 100%;
}

.event-promo__foot {
  align-items: center;
  display: none;
  position: relative;
}

.event-promo__bg {
  opacity: .8;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb071ce9d84c49_vsrecap-screen.png");
  background-position: 95% 80%;
  background-repeat: no-repeat;
  background-size: 469px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.footer__foot {
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  font-family: Metric, sans-serif;
  display: flex;
}

.legal-nav {
  margin-left: -12px;
  margin-right: -12px;
  font-family: Metric, sans-serif;
}

.legal-nav__link {
  color: #a2acc2;
  margin-left: 12px;
  margin-right: 12px;
  font-family: Metric, sans-serif;
  font-size: 16px;
  text-decoration: none;
}

.copyrights {
  color: var(--light-grey);
  font-family: Metric, sans-serif;
  font-size: 16px;
}

.footer__cont {
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
}

.company, .tertiary-nav {
  margin-bottom: 32px;
}

.company__logo {
  margin-top: -6px;
  margin-bottom: 20px;
}

.company__text {
  color: var(--dark-grey);
  line-height: 1.5;
}

.tertiary-nav__title {
  color: var(--primary-teal);
  margin-bottom: 16px;
  font-weight: 600;
}

.tertiary-nav__link {
  color: var(--dark-grey);
  margin-top: 8px;
  font-size: 15px;
  text-decoration: none;
  display: block;
}

.social-nav {
  width: 257px;
  justify-content: center;
  align-items: center;
  margin: 32px -6px;
  display: flex;
}

.social-nav__link {
  color: #b3b7bb;
  margin-left: 6px;
  margin-right: 6px;
}

.header__cont {
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
}

.logo {
  color: #9aa1ac;
  text-transform: uppercase;
  border: 1px #000;
  justify-content: space-around;
  align-items: center;
  margin-right: 0;
  padding-left: 0;
  font-family: Source Sans Pro, sans-serif;
  font-size: 18px;
  line-height: 1;
  text-decoration: none;
  display: flex;
}

.logo__image {
  border: 1px #000;
  margin-top: -5px;
}

.logo__caption {
  border: 1px #000;
  justify-content: space-between;
  margin-top: 0;
  margin-left: 12px;
  padding-top: 1px;
  padding-left: 11px;
  line-height: 1;
  display: flex;
}

.main-nav {
  justify-content: center;
  align-items: center;
  transition: opacity .2s;
  display: flex;
}

.main-nav.hidden {
  opacity: 0;
}

.main-nav__link {
  color: var(--blueish-gray);
  margin-left: 0;
  margin-right: 1px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Metric, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 72px;
  text-decoration: none;
}

.main-nav__link.w--current, .main-nav__link.current {
  box-shadow: inset 0 -4px 0 0 var(--primary-teal);
  font-weight: 700;
}

.secondary-nav {
  align-items: center;
  display: flex;
}

.secondary-nav__link {
  color: var(--dark-grey);
  margin-right: 48px;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  text-decoration: none;
  display: none;
}

.secondary-nav__button {
  color: var(--dark-grey);
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #c3c5d7;
  border-radius: 6px;
  padding: 11px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  display: none;
}

.secondary-nav__button:hover {
  border-color: var(--primary-teal);
  color: var(--primary-teal);
}

.secondary-nav__span {
  color: #a4a6bd;
}

.inlined {
  display: inline;
}

.pro-tips__link {
  float: right;
  margin-top: -1.75em;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.75;
  text-decoration: none;
}

.spacer--500 {
  height: 150px;
}

.author-details {
  text-align: center;
}

.back-button {
  text-align: left;
  font-weight: 600;
}

.image, .author-details__image {
  border-radius: 50%;
}

.author-details__subtitle {
  max-width: 576px;
  color: var(--dark-grey);
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
}

.back-button__link {
  color: var(--blueish-gray);
  line-height: 20px;
  text-decoration: none;
  display: inline-block;
}

.blog-card__link {
  border-radius: 6px;
  order: 1;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  box-shadow: inset 0 0 0 1px #dde1e9;
}

.blog-post {
  position: relative;
}

.heading2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.25;
}

.heading2.ta--center.blog-post__title {
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  font-family: Metric, sans-serif;
}

.spacer--050 {
  height: 8px;
}

.ta--center {
  text-align: center;
}

.blog-post__meta {
  color: var(--dark-grey);
  font-weight: 600;
  text-decoration: none;
  display: inline;
}

.blog-post__bull {
  color: #d8d8d8;
  padding-left: 12px;
  padding-right: 12px;
  display: inline;
}

.heading1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
}

.heading1.heading1--large {
  font-size: 46px;
}

.blog-post__cover {
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.spacer--250 {
  height: 130px;
}

.blog-post__bg {
  height: 400px;
  background-image: linear-gradient(#f3f8fb, #fff);
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.blog-post__cont {
  align-items: flex-start;
  display: flex;
  position: relative;
}

.blog-post__main {
  height: 100%;
  max-width: 60%;
  min-width: 60%;
  align-self: auto;
  padding-bottom: 80px;
}

.blog-post__side {
  border-left: 1px solid rgba(151, 151, 151, .2);
  margin-bottom: 80px;
  margin-left: 64px;
  padding-left: 48px;
  position: -webkit-sticky;
  position: sticky;
  top: 140px;
}

.blog-post__text {
  margin-top: -16px;
}

.blog-post__text p {
  flex-wrap: nowrap;
  margin-top: 16px;
}

.blog-post__text h4, .blog-post__text h3, .blog-post__text h2, .blog-post__text h5, .blog-post__text h6 {
  margin-top: 32px;
}

.blog-post__text figure {
  margin-top: 48px;
  margin-bottom: 48px;
}

.blog-post__text figcaption {
  color: var(--light-grey);
  margin-top: 8px;
}

.blog-post__text ul, .blog-post__text h1 {
  margin-top: 16px;
}

.blog-post__text blockquote {
  border-left-width: 4px;
  border-left-color: var(--light-teal);
  color: var(--dark-grey);
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb075d99d84b96_blog-post__quotes.svg");
  background-position: 24px 0;
  background-repeat: no-repeat;
  margin-top: 48px;
  margin-bottom: 48px;
  margin-left: 48px;
  padding: 42px 0 0 24px;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.375;
}

.blog-post__text li {
  margin-top: 8px;
}

.blog-post__text ol {
  margin-top: 16px;
  margin-bottom: 0;
  padding-left: 48px;
  font-size: 18px;
}

.heading3 {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
}

.heading4 {
  font-size: 28px;
  font-weight: 600;
  line-height: 1.25;
}

.heading5 {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
}

.heading6 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
}

.paragraph {
  font-size: 18px;
}

.overline {
  color: #c3c5d7;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: Metric, sans-serif;
  font-size: 14px;
  font-weight: 700;
}

.overline.overline--sm {
  letter-spacing: .5px;
  font-size: 12px;
}

.overline.overline--xs {
  letter-spacing: .5px;
  font-size: 10px;
}

.overline.vs-speakers__overline {
  color: #007bbd;
  font-size: 16px;
}

.overline.ta--center.tc--tertiary {
  float: right;
  clear: none;
  text-align: right;
  display: inline-block;
}

.overline.video-speakers {
  font-size: 13px;
  font-weight: 600;
}

.blog-author__image {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-top: 10px;
}

.blog-author__bio {
  color: var(--dark-grey);
  margin-top: 8px;
  font-family: Metric, sans-serif;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
}

.blog-author__name {
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
}

.blog-author__link {
  margin-top: 8px;
  font-weight: 600;
  display: inline-block;
}

.blog-related__item {
  color: var(--dark-grey);
  align-items: flex-start;
  margin-top: 24px;
  text-decoration: none;
  display: flex;
}

.blog-related__image {
  max-width: 160px;
  min-width: 160px;
  border-radius: 6px;
  margin-right: 20px;
}

.heading-2 {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
}

.blog-subscribe {
  text-align: center;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb073adbd84b97_blog-subscribe%402x.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  padding: 20px;
}

.blog-subscribe__title {
  margin-bottom: 4px;
}

.callout {
  height: 232px;
  color: #fff;
  text-align: center;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07752bd84b98_callout%402x.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  display: flex;
}

.callout__subtitle {
  max-width: 456px;
  color: #b6c0d4;
  font-family: Metric, sans-serif;
  font-size: 16px;
}

.callout__foot {
  align-items: center;
  display: flex;
}

.callout__button {
  padding-top: 12px;
  padding-bottom: 12px;
}

.callout__button.button {
  font-family: Metric, sans-serif;
}

.callout__link {
  margin-left: 40px;
  font-family: Metric, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}

.spacer--150 {
  height: 24px;
}

.spacer--150.vs-spacer {
  width: 32px;
}

.back-button__icon {
  float: left;
  opacity: .6;
  margin: -2px 4px -2px -4px;
}

.back-button__text {
  white-space: nowrap;
}

.event-card {
  background-color: #fff;
  border-radius: 6px;
  align-items: center;
  padding: 20px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .05);
}

.event-card__image {
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .05);
}

.event-card__cont {
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
}

.event-card__foot {
  text-align: center;
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;
}

.event-card__meta {
  color: var(--dark-grey);
  align-items: center;
  margin-top: 8px;
  margin-right: 20px;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  display: flex;
}

.event-card__icon {
  margin-right: 6px;
}

.event-card__link {
  color: var(--blueish-gray);
  font-weight: 600;
  text-decoration: none;
}

.event-card__metas {
  flex-wrap: wrap;
  margin-top: 8px;
  display: flex;
}

.upcoming-events__grid {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.event-card__subtitle {
  max-width: 544px;
  color: var(--light-grey);
  font-size: 15px;
}

.testimonials {
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 64px;
}

.testimonials__item {
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0735e0d84b9e_testimonials__quotes.svg");
  background-position: 64px 0;
  background-repeat: no-repeat;
  background-size: auto;
  padding-top: 33px;
  padding-left: 64px;
  padding-right: 64px;
  position: relative;
}

.testimonials__text {
  font-size: 20px;
  font-style: italic;
}

.testimonials__carousel {
  padding-left: 32px;
  padding-right: 32px;
}

.past-events__grid {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.past-event-card {
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
}

.past-event-card__cont {
  padding: 24px 32px 32px;
}

.testimonials__link {
  font-weight: 600;
  text-decoration: none;
  position: absolute;
  bottom: 10px;
  right: 64px;
}

.utility-page-wrap {
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.utility-page-content {
  width: 260px;
  text-align: center;
  flex-direction: column;
  display: flex;
}

.utility-page-form {
  flex-direction: column;
  align-items: stretch;
  display: flex;
}

.blog-nav {
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: auto;
}

.blog-nav__list {
  align-items: flex-start;
  display: flex;
}

.blog-nav__item {
  margin-left: 24px;
  margin-right: 24px;
  font-size: 18px;
}

.blog-nav__link {
  color: var(--blueish-gray);
  padding-top: 24px;
  padding-bottom: 24px;
  text-decoration: none;
  display: block;
}

.blog-nav__link.w--current {
  box-shadow: inset 0 -3px 0 0 var(--primary-teal);
  font-weight: 600;
}

.container-2 {
  display: none;
}

.blog-card__image {
  width: 100%;
  display: block;
}

.heading7 {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.375;
}

.event-hero {
  min-height: 480px;
  color: #fff;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
  display: flex;
  position: relative;
}

.event-hero__bg {
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.event-hero__title {
  position: relative;
}

.event-hero__subtitle {
  max-width: 780px;
  color: #c3c5d7;
  font-size: 24px;
}

.event-hero__foot {
  justify-content: center;
  align-items: center;
  display: flex;
}

.event-hero__link {
  color: #fff;
  margin-left: 48px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
}

.event-hero__over {
  opacity: .8;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.pagination {
  align-items: center;
  position: relative;
}

.pagination__button {
  width: 160px;
  color: var(--blueish-gray);
  text-align: center;
  background-color: #fff;
  border-color: #e8e8e8;
  border-radius: 4px;
  margin-top: 40px;
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .05);
}

.pagination__bg {
  height: 1px;
  background-color: #e8e8e8;
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
}

.contribute-callout {
  color: #004064;
  display: block;
}

.contribute-callout__cont {
  min-height: 224px;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb075423d84b9f_contribute-callout%402x.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  display: flex;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .05);
}

.contribute-callout__left {
  max-width: 67%;
}

.contribute-callout__button {
  color: #004064;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #004064;
  border-radius: 4px;
  padding: 15px 31px;
  font-size: 16px;
  font-weight: 600;
  transition: all .2s;
}

.contribute-callout__button:hover {
  color: #fff;
  background-color: #004064;
}

.updates-subscribe {
  min-height: 400px;
  color: #fff;
  text-align: center;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07337bd84ba0_updates-subscribe%402x.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  display: flex;
}

.updates-subscribe__subtitle {
  opacity: .7;
}

.blog-intro {
  background-color: #fff;
}

.blog-intro__cont {
  display: flex;
}

.blog-intro__left {
  max-width: 50%;
  min-width: 50%;
}

.blog-intro__right {
  border-left: 1px solid rgba(151, 151, 151, .2);
  flex: 1;
  margin-left: 48px;
  padding-left: 48px;
}

.blog-related__title {
  padding-top: 10px;
  font-family: Metric, sans-serif;
  font-size: 15px;
  font-weight: 500;
}

.blog-featured {
  text-align: left;
  display: block;
  position: relative;
}

.blog-featured__image {
  border-radius: 6px;
}

.hr {
  height: 1px;
  background-color: rgba(151, 151, 151, .2);
}

.spacer--075 {
  height: 12px;
}

.author-details__social {
  margin-left: 6px;
  margin-right: 6px;
}

.author-details__foot {
  justify-content: center;
  align-items: center;
  display: flex;
}

.newsletter-featured {
  margin-top: -1px;
  overflow: hidden;
}

.newsletters__grid {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.newsletter-card {
  background-color: #fff;
  border-radius: 6px;
  padding-bottom: 28px;
  padding-left: 28px;
  padding-right: 28px;
  transition: all .2s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, .05), inset 0 0 0 1px #dde1e9;
}

.newsletter-card:hover {
  transform: translate(0, -8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .05), 0 2px 6px rgba(0, 0, 0, .05), inset 0 0 0 1px #dde1e9;
}

.newsletter-card__pic {
  margin-left: -28px;
  margin-right: -28px;
}

.newsletter-card__date {
  color: var(--light-grey);
  font-weight: 600;
}

.newsletter-card__more {
  float: right;
  color: var(--primary-teal);
  margin-top: -19px;
  font-size: 13px;
  font-weight: 600;
  line-height: 19px;
}

.newsletter-card__link {
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.newsletter-subscribe {
  text-align: center;
}

.newsletter-subscribe__cont {
  min-height: 228px;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb078e8ad84bc0_newsletter-subscribe%402x.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 24px;
  display: flex;
}

.newsletter-featured__item {
  align-items: flex-start;
  display: flex;
}

.newsletter-featured__pic {
  z-index: 1;
  max-width: 50%;
  min-width: 50%;
  border-radius: 6px;
  transition-property: all;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0), 0 1px 6px rgba(0, 0, 0, .05);
}

.newsletter-featured__pic:hover {
  transform: translate(0, -8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .05), 0 1px 6px rgba(0, 0, 0, .05);
}

.newsletter-featured__cont {
  padding-left: 64px;
}

.newsletter-featured__divider {
  position: relative;
}

.tc--body {
  color: var(--blueish-gray);
}

.newsletter-featured__bg {
  width: 100vw;
  height: 320px;
  background-image: linear-gradient(147deg, #323847, #181f31);
  margin-left: -50vw;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: -64px;
  right: auto;
}

.newsletter-featured__head {
  z-index: 1;
  color: #fff;
  position: relative;
}

.spacer--025 {
  height: 4px;
}

.blog-related__date {
  color: var(--light-grey);
  margin-top: 4px;
  font-weight: 600;
}

.blog-post__frame {
  background-color: #fff;
}

.blog-share {
  align-items: center;
  display: flex;
}

.blog-share__label {
  color: var(--dark-grey);
  margin-right: 12px;
  font-size: 16px;
  font-weight: 500;
}

.blog-share__link {
  margin-left: 12px;
}

.blog-share__space {
  flex: 1;
}

.spacer--125 {
  height: 20px;
}

.event-promo__link {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: block;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.event-post__image {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.event-post__cont {
  background-color: #fff;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  align-items: flex-start;
  padding: 40px 40px 80px;
  display: flex;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .05);
}

.event-post__main {
  flex: 1;
}

.event-post__side {
  max-width: 361px;
  min-width: 361px;
  border-left: 1px solid rgba(151, 151, 151, .2);
  margin-left: 40px;
  padding-left: 40px;
}

.event-register__cont {
  background-color: rgba(233, 246, 245, .7);
  border-radius: 6px;
  padding: 20px 24px 4px;
}

.event-register__date {
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb076c3bd84ba9_event-register__date.svg");
  background-position: 0 9px;
  background-repeat: no-repeat;
  background-size: auto;
  margin-bottom: 20px;
  padding-left: 28px;
}

.event-register__dt {
  color: #a0bcb9;
  margin-bottom: 2px;
  font-size: 11px;
  font-weight: 600;
}

.event-register__dd {
  font-weight: 500;
}

.event-register__location {
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb078d75d84bb7_event-register__home.svg");
  background-position: 0 9px;
  background-repeat: no-repeat;
  background-size: auto;
  margin-bottom: 20px;
  padding-left: 28px;
}

.event-direction__cont {
  color: var(--dark-grey);
  background-color: #f7f7f9;
  border-radius: 4px;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  display: flex;
}

.event-direction__image {
  max-width: 84px;
  min-width: 84px;
  margin-right: 16px;
}

.burger {
  width: 18px;
  height: 18px;
  display: none;
  position: relative;
}

.burger__line {
  height: 2px;
  background-color: var(--blueish-gray);
  box-shadow: 0 6px 0 0 var(--blueish-gray), 0 -6px 0 0 var(--blueish-gray);
  border-radius: 1px;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
}

.mobile-nav {
  z-index: 100;
  background-image: linear-gradient(#f2f7f9, #fff), url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 0 0, 0 0;
  background-size: auto, 125px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: scroll;
}

.mobile-nav__link {
  color: var(--blueish-gray);
  background-color: #fff;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07157fd84bb9_mobile-nav__link.svg");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  display: block;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .05);
}

.mobile-nav__title {
  color: #004064;
}

.mobile-nav__button {
  box-shadow: inset 0 0 0 1px var(--primary-teal);
  color: var(--primary-teal);
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb074bd8d84bba_mobile-nav__button.svg");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 6px;
  margin-top: 50px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  display: block;
}

.mobile-nav__foot {
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
}

.mobile-nav__back {
  margin-top: 10px;
  font-weight: 600;
}

.mobile-nav__close {
  width: 18px;
  height: 30px;
  float: right;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0739edd84bbb_mobile-nav__close.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
  position: relative;
}

.blog-tags__list {
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: -8px;
  margin-right: -8px;
  display: flex;
}

.blog-tags__item {
  margin-top: 8px;
  margin-right: 8px;
}

.blog-tags__link {
  border: 1px solid var(--light-teal);
  color: var(--light-teal);
  white-space: nowrap;
  border-radius: 6px;
  padding-left: 19px;
  padding-right: 19px;
  font-size: 14px;
  font-weight: 600;
  line-height: 40px;
  text-decoration: none;
  transition-property: all;
  display: block;
}

.blog-tags__link:hover {
  background-color: var(--light-teal);
  color: #fff;
}

.blog-search {
  margin-bottom: 0;
  position: relative;
}

.blog-search__input {
  width: 72px;
  height: 72px;
  opacity: 0;
  cursor: pointer;
  border: 0 #000;
  border-radius: 6px;
  margin-bottom: 0;
  padding: 8px 24px;
  font-size: 18px;
  line-height: 24px;
  position: absolute;
  bottom: 100%;
  right: 0;
}

.blog-search__input:focus {
  width: 100%;
  opacity: 1;
}

.blog-search__input.blog-search__input--alt {
  margin-bottom: -5px;
  transition: width .2s, opacity .2s;
}

.blog-search__submit {
  width: 48px;
  height: 48px;
  background-color: #f0f7fa;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb076c2cd84bbc_blog-search.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 4px;
  margin-bottom: 12px;
  margin-right: 12px;
  padding: 0;
  position: absolute;
  bottom: 100%;
  right: 0;
}

.blog-search__submit.blog-search__submit--alt {
  margin-bottom: -5px;
}

.welcome__subtitle {
  color: #627682;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.25em;
}

.past-events__head {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.past-events__all-link {
  color: var(--dark-grey);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}

.past-events__foot {
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  display: none;
}

.blog-related__read {
  color: var(--light-teal);
  font-size: 16px;
  font-weight: 600;
}

.pro-tip-video__link {
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.removed {
  display: none;
}

.vs-hero {
  background-color: #1d2435;
  position: relative;
}

.vs-hero__title {
  color: #fff;
  padding-top: 20px;
  padding-bottom: 10px;
  line-height: 1.25em;
  position: relative;
}

.vs-hero__bg {
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0770eed84c4b_vsrecap-topbg.png"), url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07f64dd84c3d_summitrecap-header_device.png");
  background-position: 0 0, 97% 10px;
  background-repeat: no-repeat, no-repeat;
  background-size: 538px 194px, 400px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.blocked {
  display: block;
}

.blocked.inlined-xs {
  color: #fff;
  line-height: 1.5em;
}

.vs-hero__caption {
  color: #fff;
  position: absolute;
  bottom: 16px;
  right: 24px;
}

.vs-intro__grid {
  grid-column-gap: 48px;
  grid-row-gap: 32px;
  grid-template-rows: auto;
}

.vs-intro__title {
  color: var(--dark-blue);
  padding-right: 60px;
  font-size: 38px;
  line-height: 1.2em;
}

.paragraph--xxl {
  font-size: 24px;
}

.paragraph--xxl.tc--xlight {
  font-size: 22px;
}

.vs-intro__foot {
  align-items: center;
  display: flex;
}

.vs-intro__add {
  color: var(--light-grey);
  align-items: center;
  margin-left: 48px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
}

.vs-intro__date {
  color: var(--dark-blue);
}

.vs-connect {
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07ac46d84ba2_join-today.svg");
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 1600px 1210px;
  padding-top: 200px;
  padding-bottom: 160px;
}

.vs-connect__grid {
  grid-template-rows: auto;
}

.paragraph--xxxl {
  font-size: 26px;
  font-weight: 500;
}

.vs-connect__row {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.vs-connect__foot {
  display: flex;
}

.vs-connect__cont {
  max-width: 500px;
  margin-right: 32px;
}

.vs-connect__figure {
  text-align: right;
  flex: 1;
}

.vs-connect__image {
  width: 85%;
  border-radius: 6px;
  box-shadow: 24px 59px #e8f1f5;
}

.vs-connect__caption {
  color: var(--light-grey);
  text-align: right;
  padding-top: 20px;
  padding-bottom: 20px;
}

.vs-trends {
  color: var(--dark-blue);
}

.vs-trends__title {
  color: var(--dark-blue);
  text-align: center;
}

.spacer--300 {
  height: 48px;
}

.vs-trends__grid {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.vs-trends__item {
  min-height: 148px;
  background-color: rgba(0, 123, 189, .04);
  border-radius: 6px;
  align-items: center;
  padding: 20px 28px;
  display: flex;
}

.vs-trends__image {
  flex: none;
  margin-right: 24px;
}

.vs-speakers {
  text-align: center;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07ac46d84ba2_join-today.svg");
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 1600px 1210px;
  padding-top: 250px;
  padding-bottom: 120px;
}

.vs-speakers__title {
  color: var(--dark-blue);
}

.vs-speakers__cont {
  overflow: auto;
}

.vs-speakers__track {
  align-items: flex-start;
  padding-bottom: 60px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
}

.div-block {
  max-width: 200px;
  min-width: 200px;
}

.vs-speaker {
  max-width: 232px;
  min-width: 232px;
  text-align: left;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  transition: transform .2s;
}

.vs-speaker.active {
  transform: translate(0, 24px);
}

.vs-speaker__image {
  border-radius: 6px;
  transition: filter .2s;
}

.vs-speaker__image.faded {
  filter: grayscale();
}

.vs-speaker__position {
  color: var(--dark-grey);
  letter-spacing: -.025em;
  margin-top: 4px;
  margin-right: -2px;
  font-weight: 500;
}

.vs-speaker__company {
  color: #a7aeb7;
  font-weight: 500;
}

.vs-speaker__name {
  font-size: 22px;
}

.heading-3 {
  font-size: 36px;
}

.vs-speakers__info {
  background-image: linear-gradient(45deg, rgba(0, 123, 189, .06), rgba(0, 178, 224, .03));
  border-radius: 6px;
  padding: 40px 60px;
  display: none;
  position: relative;
}

.vs-bio {
  color: var(--dark-blue);
  text-align: left;
  display: none;
}

.vs-bio__head {
  align-items: baseline;
  display: flex;
}

.vs-bio__name {
  margin-right: 16px;
}

.vs-bio__position {
  color: var(--light-grey);
  font-size: 22px;
  font-weight: 500;
}

.vs-speakers__close {
  color: var(--dark-blue);
  cursor: pointer;
  transition: color .2s;
  position: absolute;
  top: 40px;
  right: 60px;
}

.vs-speakers__close:hover {
  color: var(--light-teal);
}

.vs-bio__foot {
  align-items: center;
  display: flex;
}

.vs-bio__social {
  color: var(--light-grey);
  margin-right: 16px;
}

.vs-speakers__arrows {
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 40px;
  right: 60px;
}

.vs-speakers__arrow {
  color: var(--dark-blue);
  align-items: center;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-decoration: none;
  display: flex;
}

.vs-speakers__drag {
  color: #91abb9;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  display: flex;
}

.vs-agenda {
  text-align: center;
  background-image: linear-gradient(rgba(0, 123, 189, .05), rgba(255, 255, 255, 0));
  padding-top: 80px;
}

.vs-agenda__cont {
  text-align: left;
  background-color: #fff;
  border-radius: 6px;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}

.vs-agenda__date {
  color: var(--dark-blue);
  font-size: 26px;
  font-weight: 700;
}

.vs-tabs {
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  margin-left: -48px;
  margin-right: -48px;
  display: flex;
  box-shadow: inset 0 -2px #f2f4f7;
}

.vs-tabs__link {
  color: var(--blueish-gray);
  margin-left: 24px;
  margin-right: 24px;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 20px;
  line-height: 68px;
  text-decoration: none;
}

.vs-tabs__link.active {
  box-shadow: inset 0 -2px 0 0 var(--light-teal);
  background-image: linear-gradient(to top, rgba(162, 226, 221, .15), rgba(180, 255, 249, 0));
  font-weight: 600;
}

.vs-session {
  align-items: flex-start;
  margin-top: 40px;
  display: flex;
}

.vs-session__head {
  min-width: 33%;
  padding-left: 32px;
  position: relative;
}

.vs-session__head.vs-session__head--alt {
  padding-left: 0;
}

.vs-session__cont {
  border-bottom: 1px solid #f1f2f7;
  flex: 1;
  padding-bottom: 40px;
}

.vs-session__date {
  color: var(--light-teal);
}

.vs-session__clock {
  position: absolute;
  top: 2px;
  left: 0;
}

.vs-author {
  color: var(--dark-grey);
  align-items: center;
  display: flex;
}

.vs-author__image {
  flex: none;
  margin-right: 16px;
}

.vs-author__name {
  font-size: 16px;
  font-weight: 600;
}

.vs-author__position {
  color: #aaacbf;
  margin-top: 2px;
  line-height: 1.25;
}

.vs-pane {
  display: none;
}

.vs-pane.active {
  display: block;
}

.vs-session__foot {
  align-items: flex-start;
  display: flex;
}

.vs-session__time {
  color: #819598;
  font-size: 16px;
  font-weight: 500;
}

.vs-session__time.vs-session__time--alt {
  color: var(--dark-blue);
}

.vs-session__link {
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
}

.vs-hero__subhead {
  color: #fff;
  padding-bottom: 30px;
  font-size: 22px;
}

.vs-connect-title {
  color: var(--dark-grey);
  margin-bottom: 20px;
  font-size: 18px;
  display: inline-block;
}

.vs-connect_bullet {
  padding-bottom: 14px;
  display: inline-block;
}

.popup {
  z-index: 100;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.popup.active {
  display: flex;
}

.popup__overlay {
  background-color: rgba(0, 0, 0, .75);
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.popup__cont {
  max-width: 460px;
  min-width: 460px;
  background-color: #fff;
  border-radius: 12px;
  flex: none;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .3), 0 10px 30px rgba(0, 0, 0, .5);
}

.popup__formembed {
  background-color: #fff;
  border-radius: 12px;
}

.heading-8 {
  color: var(--blueish-gray);
  text-align: left;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.4;
}

.div-block-2 {
  text-align: right;
}

.popup__close {
  position: absolute;
  top: 24px;
  right: 24px;
}

.heading-9 {
  text-align: center;
}

.popup__thanks {
  font-size: 18px;
  font-weight: 400;
}

.popup2 {
  z-index: 100;
  justify-content: center;
  align-items: center;
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.popup2.active {
  display: flex;
}

.popup__overlay2 {
  background-color: rgba(0, 0, 0, .75);
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.popup__cont2 {
  max-width: 460px;
  min-width: 460px;
  background-color: #fff;
  border-radius: 12px;
  flex: none;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .3), 0 10px 30px rgba(0, 0, 0, .5);
}

.header__head {
  border-bottom: 1px solid #efefef;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
}

.back-to-base {
  color: var(--light-grey);
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  text-decoration: none;
  display: flex;
}

.back-to-base__text {
  font-family: Metric, sans-serif;
}

.login-link {
  color: var(--dark-grey);
  font-size: 12px;
  font-weight: 500;
  line-height: 28px;
  text-decoration: none;
  display: none;
}

.vs-hero-register {
  color: #fff;
  margin-bottom: 60px;
  padding-bottom: 10px;
  font-size: 72px;
  position: relative;
}

.text-span {
  font-size: 24px;
}

.vs-register-sub1 {
  color: #fff;
  margin-bottom: 4px;
  padding-top: 220px;
  font-size: 22px;
}

.vs-register-sub2 {
  color: #fff;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 400;
}

.blog-hero {
  text-align: center;
}

.tc--white {
  color: #fff;
  font-family: Metric, sans-serif;
}

.blog-hero__row {
  align-items: flex-start;
  display: flex;
  position: relative;
}

.blog-hero__col {
  flex: 1;
}

.blog-featured__link {
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.blog-resources {
  text-align: left;
  margin-left: 60px;
}

.blog-resources__item {
  color: var(--blueish-gray);
  background-color: #fff;
  border-radius: 6px;
  align-items: flex-start;
  padding: 24px 24px 24px 0;
  text-decoration: none;
  display: flex;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .04);
}

.blog-resources__icon {
  height: 36px;
  min-width: 88px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.blog-resources__arrow {
  margin-left: 12px;
}

.blog-hero__bg {
  height: 65%;
  background-color: #1f2637;
  position: absolute;
  top: 0;
  left: -1000px;
  right: -1000px;
  transform: rotate(3deg);
  box-shadow: 0 -100px #1f2637;
}

.blog-hero__title {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
}

.blog-hero__hex {
  height: 65%;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb075b53d84c37_blog-hero__left.svg"), url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07134ed84c36_blog-hero__right.svg");
  background-position: 0 100%, 100% 0;
  background-repeat: no-repeat, no-repeat;
  background-size: auto, auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.blog-resources__text {
  flex: 1;
}

.blog-featured2 {
  text-align: left;
  position: relative;
}

.blog-featured2__row {
  background-color: #fff;
  border-radius: 6px;
  align-items: center;
  transition: all .2s;
  display: flex;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0), inset 0 0 0 1px #dde1e9, 0 2px 6px rgba(0, 0, 0, .05);
}

.blog-featured2__row:hover {
  transform: translate(0, -4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .05), inset 0 0 0 1px #dde1e9, 0 2px 6px rgba(0, 0, 0, .05);
}

.blog-featured2__col {
  flex: 1;
}

.blog-featured2__cont {
  padding: 31px 47px 31px 48px;
}

.headline {
  text-align: center;
  background-color: #1f2637;
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07d547d84c3a_headline-right.svg"), url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb079cf3d84c3b_headline-left.svg");
  background-position: 100% 0, 0%;
  background-repeat: no-repeat, no-repeat;
  background-size: auto, auto;
}

.blog-bar {
  background-color: #fff;
  border-radius: 6px;
  margin-top: -36px;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .1);
}

.fw--400 {
  font-weight: 400;
}

.spacer--225 {
  height: 36px;
}

.image-3, .image-3-copy, .image-3-copy-copy {
  margin-top: 104px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.image-4 {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.blog-card__noimg {
  max-height: 270px;
  max-width: none;
  min-height: 256px;
  color: #f5f5f5;
  text-align: center;
  background-color: #f9f9f9;
  margin-bottom: 24px;
  margin-left: -28px;
  margin-right: -28px;
  padding-top: 100px;
  display: block;
}

.blog-card_logo {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.vs2020-hero__title-copy {
  color: #fff;
  padding-top: 200px;
  padding-bottom: 10px;
  position: relative;
}

.vs2020-hero__subhead {
  color: #fff;
  padding-bottom: 30px;
  font-size: 22px;
}

.spacer--400 {
  height: 64px;
}

.blog__row {
  flex-wrap: wrap;
  margin-top: -16px;
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
}

.blog__col {
  max-width: 33.333%;
  min-width: 33.333%;
  padding-top: 16px;
  padding-left: 8px;
  padding-right: 8px;
}

.blog-card__play {
  width: 72px;
  height: 72px;
  color: rgba(0, 0, 0, .75);
  background-color: rgba(255, 255, 255, .75);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-top: -36px;
  margin-left: -36px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
}

.tc--tertiary {
  color: #007bbd;
}

.video-post__cont {
  min-height: 480px;
  background-color: #fff;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 32px 452px 32px 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .05);
}

.video-post__video {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
}

.video-post__share {
  float: right;
  margin-left: 32px;
}

.video-playlist {
  width: 420px;
  color: #fff;
  background-color: #1f2637;
  padding: 32px 40px 24px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: auto;
  right: 0%;
  overflow: auto;
}

.video-playlist__item {
  color: #fff;
  background-color: rgba(230, 235, 238, .05);
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 12px;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;
  display: flex;
}

.video-playlist__item.current {
  background-color: rgba(31, 183, 171, .7);
}

.video-playlist__text {
  align-self: center;
}

.video-playlist__date {
  font-size: 13px;
  font-weight: 400;
}

.video-playlist__figure {
  height: 60px;
  max-width: 96px;
  min-width: 96px;
  background-color: rgba(0, 0, 0, .33);
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  margin-right: 16px;
}

.video-speakers__row {
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: -12px;
  margin-right: -12px;
  display: flex;
}

.video-speakers__col {
  max-width: 50%;
  min-width: 50%;
  padding-left: 12px;
  padding-right: 12px;
}

.blog-card__head {
  background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/6088575d98ffde7f9e37ee5c_egnyteplaceholder.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 640px;
  margin: -28px -28px 28px;
  position: relative;
}

.blog-card__cover {
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 56%;
}

.blog-card__cover.blog-card__cover--lg {
  background-image: none;
  padding-top: 60%;
}

.video-post__title {
  overflow: hidden;
}

.author-card_speakers {
  width: auto;
  height: auto;
  max-width: none;
  min-width: 0;
  border-radius: 50%;
  margin-right: 8px;
  overflow: visible;
}

.author-card_speaker {
  color: var(--dark-grey);
  font-weight: 600;
  display: inline-block;
}

.author-card_speakerswrap {
  align-items: center;
  display: block;
  position: relative;
}

.author-summary_title {
  color: var(--light-grey);
  margin-top: 2px;
  padding-left: 10px;
  font-size: 12px;
  display: inline-block;
}

.vs-hero__titlelight {
  line-height: 1.15em;
}

.blog-featured2__empty {
  display: none;
}

.blog__empty {
  text-align: center;
  padding: 24px;
}

.updates-card {
  border-top: 1px solid #dde1e9;
  align-items: flex-start;
  margin-top: 40px;
  padding-top: 40px;
  display: flex;
}

.updates-card:first-child {
  border-top-style: none;
  margin-top: 0;
  padding-top: 0;
}

.updates-card__left {
  max-width: 45.833%;
  min-width: 45.833%;
  padding-right: 48px;
}

.updates-card__right {
  max-width: 54.167%;
  min-width: 54.167%;
}

.tc--secondary {
  color: var(--dark-blue);
}

.image-5 {
  min-width: 0%;
  object-fit: scale-down;
}

.updates-card__title {
  max-width: 444px;
  color: var(--dark-blue);
}

.updates-card__figure {
  max-width: 444px;
}

.updates-card__more {
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  display: flex;
}

.text-block {
  line-height: 24px;
}

.updates-card__overflow {
  max-height: 560px;
  position: relative;
  overflow: hidden;
}

.updates-card__overlay {
  height: 128px;
  background-image: linear-gradient(rgba(255, 255, 255, 0), #fff);
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.footer-link__header {
  text-decoration: none;
}

.thank-you-block {
  text-align: left;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  display: none;
}

.check-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  display: inline-block;
}

.thank-you-text {
  color: #59c2ba;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 22px;
  font-weight: 500;
}

.paragraph-2 {
  color: var(--dark-grey);
  font-size: 12px;
}

.html-embed-2 {
  object-fit: fill;
  position: static;
}

.blog_footnotes {
  border-top: 1px solid #efefef;
  border-radius: 1px;
  padding-top: 30px;
}

.blog_footnotes li {
  color: #8c8ea6;
  margin-bottom: 3px;
  font-size: 13px;
}

.blog_footnotes a {
  color: #8c8ea6;
}

.blog_footnotes ol {
  padding-left: 20px;
}

.blog_footnotes p {
  color: #8c8ea6;
  font-size: 13px;
}

.div-block-3 {
  max-width: 412px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.5;
}

.heading-11 {
  max-width: 412px;
  margin-top: 0;
  margin-bottom: 15px;
}

.form-block {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
}

.card-left {
  max-width: 48%;
  min-width: 48%;
  margin-right: 60px;
}

.div-block-4 {
  max-width: 52%;
  min-width: 52%;
}

.page-count {
  font-size: 16px;
}

.secondary-nav__new-button {
  background-color: var(--steel-blue);
  color: var(--white);
  border-radius: 6px;
  margin-left: 12px;
  margin-right: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  transition-property: all;
  transition-duration: .125s;
}

.secondary-nav__new-button:hover {
  color: var(--white);
}

.secondary-nav__new-button.secondary-nav__new-button--secondary {
  color: var(--steel-blue);
  background-color: rgba(3, 123, 189, .1);
}

.secondary-nav__new-button.secondary-nav__new-button--secondary:hover {
  color: var(--steel-blue);
  background-color: rgba(3, 123, 189, .2);
}

.author-summary__wrapper {
  align-items: center;
  display: flex;
}

.author-summary__empty {
  height: 40px;
}

.blog-hero__head {
  z-index: 1;
  background-color: #1f2637;
  margin-top: -44px;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
}

.blog-hero__cont {
  position: relative;
  overflow: hidden;
}

.site-search {
  width: 44px;
  height: 44px;
  margin-bottom: 0;
  margin-left: auto;
  position: relative;
}

.site-search__submit {
  width: 44px;
  height: 44px;
  color: #35364e;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
}

.site-search__input {
  width: 44px;
  height: auto;
  border: 0 #000;
  margin-bottom: 0;
  padding: 10px 44px 10px 0;
  font-size: 16px;
  line-height: 24px;
  transition: width .2s;
  position: absolute;
  top: 0;
  right: 0;
}

.site-search__close {
  width: 44px;
  height: 44px;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
}

.blog-continue__grid {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.body, .heading-13, .body-2, .body-3, .body-4, .body-5 {
  font-family: Metric, sans-serif;
}

.logo-section {
  display: block;
}

@media screen and (min-width: 1280px) {
  .page.page--dark {
    background-color: #fbfbfb;
  }

  .header {
    background-color: var(--white);
  }

  .container {
    font-family: Metric, sans-serif;
    font-size: 16px;
  }

  .button.button--sm.button--enlarged {
    font-family: Metric, sans-serif;
    font-size: 24px;
  }

  .button.button--lg.button__hero {
    margin-bottom: 160px;
  }

  .paragraph--xs.tc--light {
    font-family: Metric, sans-serif;
  }

  .pro-tip-video:hover {
    transform: translate(0, -4px);
  }

  .join-today {
    background-size: 100% 1210px;
    padding-top: 250px;
  }

  .blog-card {
    min-height: 0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0), 0 2px 6px rgba(0, 0, 0, .05);
  }

  .blog-card__title {
    font-size: 22px;
  }

  .blog-card__date {
    font-family: Metric, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  .blog-card__pic {
    background-color: rgba(0, 0, 0, 0);
  }

  .author-summary {
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
    display: flex;
  }

  .author-summary__cont {
    font-family: Metric, sans-serif;
  }

  .author-summary__link {
    font-family: Metric, sans-serif;
    font-size: 18px;
    display: block;
  }

  .author-card_title {
    font-family: Metric, sans-serif;
    font-size: 16px;
  }

  .author-summary__name {
    font-family: Metric, sans-serif;
  }

  .author-summary__photo {
    height: 40px;
    max-width: 40px;
    min-width: 40px;
    flex: 0 auto;
  }

  .blog__link:hover {
    color: var(--blueish-gray);
  }

  .event-promo {
    height: auto;
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb072aa7d84c4a_vsrecap-bg.png");
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: 950px;
  }

  .event-promo__title {
    width: 75%;
  }

  .event-promo__foot {
    display: none;
  }

  .event-promo__bg {
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb071ce9d84c49_vsrecap-screen.png");
    background-position: 95% 80%;
    background-size: 469px;
  }

  .footer__foot {
    font-size: 16px;
  }

  .legal-nav {
    font-family: Metric, sans-serif;
    font-size: 20px;
  }

  .legal-nav__link {
    font-size: 16px;
  }

  .copyrights {
    font-family: Metric, sans-serif;
    font-size: 16px;
  }

  .header__cont {
    background-color: var(--white);
  }

  .logo, .logo__image {
    border: 1px #000;
  }

  .logo__caption {
    border-style: none none none solid;
    border-color: #000 #000 #000 rgba(151, 151, 151, .3);
    margin-right: 10px;
  }

  .main-nav__link {
    padding-left: 14px;
    padding-right: 14px;
    font-family: Metric, sans-serif;
    font-size: 18px;
  }

  .secondary-nav__link {
    display: block;
  }

  .pro-tips__link:hover {
    color: var(--blueish-gray);
  }

  .blog-card__link {
    font-family: Metric, sans-serif;
  }

  .heading2.ta--center {
    margin-left: auto;
    margin-right: auto;
  }

  .blog-post__text p {
    overflow: visible;
  }

  .overline {
    letter-spacing: .05em;
    font-family: Metric, sans-serif;
  }

  .overline.ta--center.tc--tertiary {
    float: right;
    text-align: right;
  }

  .upcoming-events {
    background-color: #f2f2f8;
  }

  .testimonials__text {
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
  }

  .blog-nav__item {
    margin-left: 30px;
    margin-right: 30px;
  }

  .image-2, .blog-card__image {
    width: 416px;
    height: 250px;
  }

  .pagination__button {
    font-size: 20px;
  }

  .blog-related__title {
    font-size: 16px;
  }

  .newsletter-card__pic {
    background-color: #dde1e9;
  }

  .newsletter-card__image {
    width: 416px;
    height: 250px;
  }

  .newsletter-subscribe {
    text-align: center;
  }

  .newsletter-featured__image {
    width: 640px;
    height: 400px;
  }

  .event-promo__link {
    display: block;
  }

  .event-post__image {
    width: 1280px;
    height: 480px;
  }

  .vs-hero {
    height: 380px;
    background-color: #1d2435;
    background-image: none;
  }

  .vs-hero__title {
    padding-top: 100px;
    padding-bottom: 0;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.25em;
  }

  .vs-hero__bg {
    max-width: 1540px;
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0770eed84c4b_vsrecap-topbg.png"), url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07f64dd84c3d_summitrecap-header_device.png");
    background-position: 0 0, 100% 20px;
    background-repeat: no-repeat, no-repeat;
    background-size: 538px 194px, 440px;
    margin-left: auto;
    margin-right: auto;
    right: 5%;
  }

  .blocked.inlined-xs.inline-register {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 400;
  }

  .vs-intro__title {
    padding-right: 100px;
    font-size: 38px;
  }

  .vs-connect {
    background-size: 100% 1210px;
    padding-top: 200px;
  }

  .vs-connect__figure {
    text-align: right;
    flex: 1;
  }

  .vs-connect__image {
    width: 85%;
  }

  .vs-speakers {
    background-size: 100% 1210px;
    padding-top: 250px;
  }

  .vs-speaker__position {
    padding-right: 0;
  }

  .vs-speakers__info, .vs-bio {
    display: none;
  }

  .vs-agenda__cont {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .vs-author {
    flex-wrap: nowrap;
  }

  .vs-pane {
    display: none;
  }

  .vs-pane.active {
    display: block;
  }

  .vs-hero__subhead {
    color: #fff;
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 22px;
  }

  .vs-hero__subhead.vs-register__subhead_bottom {
    margin-bottom: 60px;
    padding-top: 4px;
  }

  .link, .link-2 {
    color: var(--dark-grey);
    text-decoration: none;
  }

  .heading-4, .heading-5, .heading-6, .heading-7 {
    font-size: 20px;
  }

  .vs-connect-title {
    color: var(--dark-grey);
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 400;
    display: inline-block;
  }

  .vs-connect_bullet {
    margin-top: 0;
    padding-bottom: 10px;
    display: inline-block;
  }

  .popup {
    z-index: 999;
    display: none;
  }

  .popup__overlay {
    display: block;
  }

  .mktofield {
    width: 100%;
    color: #000;
    border-radius: 3px;
    margin-bottom: 10px;
    padding: 8px 12px;
    font-family: Inter, sans-serif;
    font-size: 18px;
  }

  .popup__close {
    cursor: pointer;
  }

  .popup2 {
    z-index: 999;
  }

  .popup__overlay2 {
    display: block;
  }

  .login-link {
    display: none;
  }

  .vs-hero-register {
    margin-bottom: 0;
    padding-bottom: 0;
    font-size: 72px;
  }

  .blog-hero {
    background-image: none;
  }

  .tc--white {
    font-family: Metric, sans-serif;
  }

  .blog-resources {
    margin-left: 120px;
  }

  .blog-hero__bg {
    height: 73%;
  }

  .blog-hero__title {
    color: #fff;
    font-family: Metric, sans-serif;
    position: relative;
  }

  .blog-featured2__cont {
    padding: 39px 59px 39px 60px;
  }

  .blog-featured2__image {
    width: 640px;
    height: 400px;
  }

  .bold-text {
    line-height: 1.2em;
  }

  .blog-card__noimg {
    max-height: 260px;
    min-height: 250px;
    background-color: #f9f9f9;
  }

  .vs2020-hero__title-copy {
    padding-top: 140px;
    padding-bottom: 0;
    font-size: 46px;
  }

  .vs2020-hero__subhead {
    color: #fff;
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 22px;
  }

  .vs2020-hero__subhead.vs-register__subhead_bottom {
    margin-bottom: 60px;
    padding-top: 4px;
  }

  .blog__col {
    align-self: stretch;
  }

  .video-post__cont {
    padding: 48px 468px 48px 48px;
  }

  .video-speakers__col {
    max-width: 33.333%;
    min-width: 33.333%;
  }

  .author-card_speakers {
    width: auto;
    height: auto;
    max-width: none;
    min-width: 0;
    flex: 1;
    order: 1;
    margin-top: 2px;
    margin-right: 20px;
    overflow: visible;
  }

  .author-card_speaker {
    font-size: 13px;
    display: inline-block;
  }

  .author-card_speakerswrap {
    display: block;
  }

  .author-summary_title {
    padding-left: 0;
    padding-right: 0;
    display: inline-block;
  }

  .vs-hero__titlelight {
    font-size: 44px;
    line-height: 1.15em;
  }

  .inlined-lg {
    display: inline;
  }

  .updates-card__left {
    padding-right: 60px;
  }

  .author-summary__wrapper {
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }

  .author-summary__empty {
    width: 1px;
    height: 40px;
  }

  .blog-hero__head {
    margin-top: -39px;
    padding-top: 40px;
  }

  .body {
    font-family: Metric, sans-serif;
  }

  .icon {
    font-size: 20px;
  }

  .body-2, .body-3, .body-4, .body-5 {
    font-family: Metric, sans-serif;
  }

  .logo-section {
    display: flex;
  }
}

@media screen and (max-width: 991px) {
  .page, .page.page--blue {
    padding-top: 90px;
  }

  .page.blog-inner {
    overflow: hidden;
  }

  .container {
    max-width: 768px;
  }

  .paragraph--xs.tc--light {
    font-family: Metric, sans-serif;
  }

  .feature-requests__subtitle {
    max-width: 60%;
  }

  .join-today {
    background-position: 25% 0;
    padding-top: 200px;
  }

  .join-today__left {
    max-width: 54%;
  }

  .join-today__right {
    max-width: 38%;
  }

  .spacer--200, .blog-card__date {
    font-family: Metric, sans-serif;
  }

  .blog-card__pic {
    background-color: rgba(0, 0, 0, 0);
  }

  .blog-card__pic.blog-card__pichome {
    overflow: hidden;
  }

  .author-summary__link, .author-card_title, .author-summary__name {
    font-family: Metric, sans-serif;
  }

  .welcome {
    background-image: linear-gradient(#f2f7f9, #fff);
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto;
  }

  .event-promo {
    background-repeat: repeat-x;
    background-size: 100%;
  }

  .event-promo__bg {
    background-position: 95%;
    background-size: auto 80%;
  }

  .social-nav {
    width: auto;
  }

  .logo {
    text-align: center;
    display: flex;
  }

  .logo__image {
    margin-top: 16px;
    margin-bottom: 20px;
  }

  .logo__caption {
    border-left: 1px solid rgba(151, 151, 151, .3);
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 12px;
    padding-top: 0;
    padding-left: 11px;
  }

  .main-nav {
    display: block;
  }

  .main-nav__link {
    padding-left: 12px;
    padding-right: 12px;
    font-size: 18px;
    display: none;
  }

  .secondary-nav, .removed-md {
    display: none;
  }

  .heading2.ta--center.blog-post__title {
    font-family: Metric, sans-serif;
  }

  .blog-post__cont {
    display: block;
  }

  .blog-post__main {
    max-width: none;
  }

  .blog-post__side {
    border-top: 1px solid rgba(151, 151, 151, .2);
    border-left-style: none;
    border-left-width: 0;
    margin-top: 48px;
    margin-left: 0;
    padding-top: 48px;
    padding-left: 0;
    position: static;
  }

  .overline, .blog-related {
    font-family: Metric, sans-serif;
  }

  .spacer--150.vs-spacer {
    display: block;
  }

  .event-card {
    flex-direction: column;
    padding: 0;
  }

  .event-card__image {
    width: 100%;
    height: auto;
    border-radius: 0;
  }

  .event-card__cont {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .event-card__foot {
    width: 100%;
    border-top: 1px solid #e6e6e6;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
  }

  .event-card__link {
    margin-left: 32px;
  }

  .upcoming-events__grid, .past-events__grid {
    grid-template-columns: 1fr 1fr;
  }

  .blog-nav__item {
    margin-left: 20px;
    margin-right: 20px;
  }

  .contribute-callout__cont {
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding-left: 48px;
    padding-right: 48px;
  }

  .contribute-callout__left {
    max-width: none;
  }

  .contribute-callout__button {
    margin-top: 24px;
  }

  .updates-subscribe {
    min-height: 300px;
    margin-top: 20px;
    padding-top: 0;
  }

  .blog-intro__cont {
    display: block;
  }

  .blog-intro__left {
    max-width: none;
    min-width: 0%;
  }

  .blog-intro__right {
    border-top: 1px solid rgba(151, 151, 151, .2);
    border-left-style: none;
    border-left-width: 0;
    margin-top: 40px;
    margin-left: 0;
    padding-top: 40px;
    padding-left: 0;
  }

  .blog-related__title {
    font-family: Metric, sans-serif;
  }

  .newsletter-featured__item {
    display: block;
  }

  .newsletter-featured__pic {
    max-width: none;
  }

  .newsletter-featured__cont {
    margin-top: 16px;
    padding-left: 0;
  }

  .newsletter-featured__bg {
    height: 960px;
    left: 50%;
  }

  .event-post__cont {
    padding-bottom: 40px;
    display: block;
  }

  .event-post__side {
    max-width: none;
    min-width: 0;
    border-top: 1px solid rgba(151, 151, 151, .2);
    border-left-style: none;
    margin-top: 48px;
    margin-left: 0;
    padding-top: 48px;
    padding-left: 0;
  }

  .burger {
    font-family: Metric, sans-serif;
    display: block;
  }

  .mobile-nav {
    display: none;
  }

  .mobile-nav__button.mobile-nav__button--new {
    width: 48.5%;
    text-align: center;
    background-image: none;
    border: 1px #000;
    transition-property: all;
    transition-duration: .125s;
    box-shadow: inset 0 0 0 2px #0bc5b0;
  }

  .mobile-nav__button.mobile-nav__button--new:hover {
    color: var(--white);
    background-color: #0bc5b0;
  }

  .mobile-nav__button.mobile-nav__button--new.mobile-nav__button--filled {
    box-shadow: none;
    color: var(--white);
    background-color: #0bc5b0;
    transition-property: all;
  }

  .mobile-nav__button.mobile-nav__button--new.mobile-nav__button--filled:hover {
    background-color: #1fb7ab;
  }

  .blog-search__input {
    margin-bottom: 0;
  }

  .blog-search__submit {
    bottom: 0%;
  }

  .vs-hero__title {
    padding-bottom: 10px;
    font-size: 32px;
    line-height: 1.2em;
  }

  .vs-hero__bg {
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb071ce9d84c49_vsrecap-screen.png"), url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0770eed84c4b_vsrecap-topbg.png");
    background-position: 96% 70%, -5% 0;
    background-repeat: no-repeat, no-repeat;
    background-size: 360px, 363px 131px;
  }

  .vs-intro__grid {
    grid-template-columns: 1fr;
  }

  .paragraph--xxl.tc--xlight {
    padding-right: 220px;
    font-size: 17px;
  }

  .vs-connect {
    padding-top: 180px;
    padding-bottom: 100px;
  }

  .vs-connect__row {
    flex-direction: column;
    align-items: flex-start;
  }

  .vs-connect__cont {
    max-width: none;
    margin-top: 32px;
    margin-right: 0;
  }

  .vs-connect__figure {
    text-align: left;
    order: -1;
  }

  .vs-connect__caption {
    width: 85%;
  }

  .inlined-md {
    display: inline;
  }

  .vs-trends__item {
    min-height: 0;
  }

  .vs-agenda__cont {
    border-radius: 0;
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
    padding-right: 24px;
  }

  .vs-tabs {
    margin-left: -24px;
    margin-right: -24px;
  }

  .vs-tabs__link {
    margin-left: 0;
    margin-right: 0;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 18px;
  }

  .vs-session {
    display: block;
  }

  .vs-session__head {
    margin-bottom: 14px;
  }

  .vs-hero__subhead {
    color: #fff;
    padding-bottom: 30px;
    font-size: 22px;
  }

  .vs-connect-title {
    margin-bottom: 10px;
  }

  .vs-connect_bullet {
    font-size: 22px;
  }

  .vs-hero-register {
    padding-bottom: 10px;
  }

  .tc--white {
    font-family: Metric, sans-serif;
  }

  .blog-hero__row {
    display: block;
  }

  .blog-resources {
    margin-top: 24px;
    margin-left: 0;
  }

  .blog-hero__bg {
    height: 33%;
  }

  .blog-hero__title {
    font-size: 36px;
  }

  .blog-featured2__row {
    display: block;
  }

  .blog-featured2__cont {
    padding: 47px;
  }

  .blog-card__noimg {
    min-height: 235px;
  }

  .vs2020-hero__title-copy {
    padding-bottom: 10px;
  }

  .vs2020-hero__subhead {
    color: #fff;
    padding-bottom: 30px;
    font-size: 22px;
  }

  .blog__col {
    max-width: 50%;
    min-width: 50%;
  }

  .video-post__cont {
    padding-right: 32px;
  }

  .video-playlist {
    width: auto;
    height: 414px;
    margin: 32px -32px -32px;
    position: static;
  }

  .author-card_speakers {
    width: auto;
    height: auto;
    max-width: none;
    min-width: 0;
    margin-top: 10px;
    overflow: visible;
  }

  .author-card_speaker, .author-card_speakerswrap {
    display: block;
  }

  .author-summary_title {
    margin-top: 0;
    padding-left: 0;
    display: block;
  }

  .vs-hero__titlelight {
    padding-right: 220px;
    font-size: 33px;
  }

  .updates-card {
    display: block;
  }

  .updates-card__left {
    max-width: none;
    min-width: 0%;
    padding-right: 0;
  }

  .updates-card__right {
    max-width: none;
    min-width: 0%;
    margin-top: 32px;
  }

  .updates-card__title {
    max-width: none;
  }

  .check-image {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }

  .thank-you-text {
    font-size: 18px;
  }

  .form-block {
    text-align: left;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
  }

  .card-left {
    margin-right: 0;
  }

  .page-count {
    font-family: Metric, sans-serif;
  }

  .mobile-nav__buttons-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .mobile-nav__new-button {
    width: 48%;
  }

  .site-search {
    margin-right: 20px;
  }

  .text-block-2, .body-4 {
    font-family: Metric, sans-serif;
  }

  .logo-section {
    display: flex;
  }
}

@media screen and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }

  ul {
    padding-left: 36px;
    font-size: 16px;
  }

  .page {
    padding-top: 90px;
    overflow: hidden;
  }

  .footer {
    padding-top: 10px;
    padding-bottom: 24px;
  }

  .need-help {
    padding-top: 33px;
    padding-bottom: 33px;
  }

  .container {
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .button {
    padding: 12px 24px;
  }

  .button.button--sm.button--enlarged {
    font-size: 14px;
  }

  .button.button--lg {
    font-size: 16px;
  }

  .pro-tips__grid {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  .pro-tip-video {
    padding: 72px 36px 36px;
  }

  .feature-requests__cont {
    height: 296px;
    text-align: center;
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07889cd84b93_feature-requests-sm%402x.png");
    background-size: cover;
    align-items: center;
    padding-bottom: 36px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .paragraph--lg {
    font-size: 17px;
  }

  .feature-requests__subtitle {
    max-width: none;
    font-size: 16px;
  }

  .join-today {
    margin-top: -120px;
    padding-top: 198px;
    padding-bottom: 72px;
  }

  .join-today__cont {
    display: block;
  }

  .join-today__left {
    max-width: none;
    text-align: center;
  }

  .join-today__right {
    max-width: 390px;
    border-top: 1px solid #e2ecee;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
  }

  .join-today__grid {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  .blog__grid {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  .spacer--100 {
    height: 12px;
  }

  .spacer--200 {
    height: 24px;
  }

  .blog-card {
    padding: 20px;
  }

  .blog-card__pic {
    max-height: 200px;
    min-height: 165px;
    margin-bottom: 18px;
    margin-left: -20px;
    margin-right: -20px;
  }

  .blog-card__pic.blog-card__pichome {
    overflow: hidden;
  }

  .spacer--600 {
    height: 72px;
  }

  .blog__link {
    font-size: 16px;
  }

  .paragraph--xl {
    font-size: 18px;
  }

  .welcome {
    padding-top: 36px;
  }

  .welcome__grid {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  .event-promo {
    background-position: 115%;
    background-size: 100%;
    padding: 72px 36px 30px 30px;
  }

  .event-promo__meta, .event-promo__title {
    margin-bottom: 6px;
  }

  .event-promo__button {
    margin-top: 18px;
  }

  .event-promo__bg {
    background-position: 105%;
  }

  .footer__foot {
    text-align: center;
    margin-top: 24px;
    display: block;
  }

  .legal-nav {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
  }

  .legal-nav__link {
    margin-bottom: 9px;
    margin-left: 9px;
    margin-right: 9px;
  }

  .copyrights {
    margin-top: 0;
  }

  .company {
    min-width: 100%;
    margin-bottom: 24px;
  }

  .tertiary-nav {
    min-width: 50%;
    margin-bottom: 24px;
  }

  .company__logo {
    margin-bottom: 15px;
  }

  .tertiary-nav__title {
    margin-bottom: 12px;
  }

  .tertiary-nav__link {
    margin-top: 6px;
  }

  .social-nav {
    margin-top: 0;
    margin-bottom: 24px;
  }

  .header__cont {
    padding-left: 20px;
    padding-right: 20px;
  }

  .logo.w--current {
    display: flex;
  }

  .logo__image {
    height: 24px;
    margin-top: 16px;
    margin-bottom: 20px;
  }

  .logo__caption {
    border-left-style: solid;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
    padding-left: 9px;
    font-size: 14px;
  }

  .pro-tips__link {
    font-size: 16px;
  }

  .spacer--500 {
    height: 60px;
  }

  .back-button__link.removed-sm {
    display: block;
  }

  .heading2 {
    font-size: 28px;
  }

  .spacer--050 {
    height: 6px;
  }

  .heading1 {
    font-size: 30px;
  }

  .spacer--250 {
    height: 30px;
  }

  .blog-post__side {
    margin-top: 36px;
    padding-top: 36px;
  }

  .blog-post__text {
    margin-top: -12px;
  }

  .blog-post__text p {
    margin-top: 12px;
  }

  .blog-post__text h4, .blog-post__text h3, .blog-post__text h2, .blog-post__text h5, .blog-post__text h6 {
    margin-top: 24px;
  }

  .blog-post__text figure {
    margin-top: 36px;
    margin-bottom: 36px;
  }

  .blog-post__text ul, .blog-post__text h1 {
    margin-top: 12px;
  }

  .blog-post__text blockquote {
    margin-top: 36px;
    margin-bottom: 36px;
    margin-left: 36px;
    padding-top: 38px;
    padding-left: 18px;
    font-size: 18px;
  }

  .blog-post__text li {
    margin-top: 6px;
  }

  .blog-post__text ol {
    margin-top: 12px;
    padding-left: 36px;
    font-size: 16px;
  }

  .heading3 {
    font-size: 26px;
  }

  .heading4 {
    font-size: 24px;
  }

  .heading5 {
    font-size: 22px;
  }

  .overline.ta--center.tc--tertiary {
    float: none;
    text-align: center;
    display: block;
  }

  .blog-related__item {
    margin-top: 18px;
  }

  .spacer--150 {
    height: 18px;
  }

  .back-button__text {
    margin-bottom: 20px;
  }

  .upcoming-events__grid {
    grid-template-columns: 1fr;
  }

  .testimonials {
    padding-top: 60px;
    padding-bottom: 48px;
  }

  .testimonials__item {
    background-position: 0 0;
    padding-left: 0;
    padding-right: 0;
  }

  .testimonials__text {
    font-size: 18px;
  }

  .testimonials__carousel {
    padding-left: 0;
    padding-right: 0;
  }

  .past-events__grid {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    grid-template-columns: 1fr;
  }

  .past-event-card__cont {
    padding: 18px 24px 24px;
  }

  .testimonials__link {
    right: 0;
  }

  .blog-nav__item {
    margin-left: 9px;
    margin-right: 9px;
    font-size: 16px;
  }

  .blog-nav__link {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .event-hero {
    min-height: 360px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .event-hero__subtitle {
    font-size: 18px;
  }

  .event-hero__link {
    margin-left: 36px;
    font-size: 16px;
  }

  .contribute-callout__cont {
    padding: 30px 20px;
  }

  .contribute-callout__button {
    margin-top: 18px;
    padding: 11px 23px;
  }

  .updates-subscribe {
    min-height: 358px;
    margin-top: 0;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .blog-intro__right {
    margin-top: 30px;
    padding-top: 30px;
  }

  .spacer--075 {
    height: 9px;
  }

  .spacer--025 {
    height: 3px;
  }

  .spacer--125 {
    height: 15px;
  }

  .spacer--125.removed-sm {
    display: block;
  }

  .event-promo__link {
    margin-top: 18px;
    margin-left: 24px;
  }

  .event-post__cont {
    padding: 20px;
  }

  .event-post__side {
    margin-top: 36px;
    padding-top: 36px;
  }

  .event-register__cont {
    padding: 15px 18px 3px;
  }

  .event-register__date {
    margin-bottom: 15px;
  }

  .blog-search__input {
    width: 54px;
    height: 54px;
    padding: 16px 20px;
    font-size: 16px;
    line-height: 22px;
  }

  .blog-search__submit {
    width: 36px;
    height: 36px;
    margin-bottom: 9px;
    margin-right: 9px;
  }

  .vs-hero {
    text-align: center;
    background-position: 67% 0;
    background-repeat: repeat-x;
  }

  .vs-hero__title {
    text-align: left;
    padding-top: 0;
    padding-bottom: 10px;
    font-size: 28px;
  }

  .vs-hero__bg {
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0770eed84c4b_vsrecap-topbg.png"), url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07f64dd84c3d_summitrecap-header_device.png");
    background-position: 0 0, 110% 70%;
    background-repeat: no-repeat, no-repeat;
    background-size: 363px 131px, 250px;
    margin-top: -116px;
    top: 50%;
    right: 0%;
  }

  .vs-hero__caption {
    display: none;
  }

  .vs-intro {
    text-align: center;
    position: relative;
  }

  .vs-intro__grid {
    grid-row-gap: 24px;
  }

  .vs-intro__title {
    padding-right: 0;
    font-size: 32px;
  }

  .paragraph--xxl {
    font-size: 19px;
  }

  .paragraph--xxl.tc--xlight {
    text-align: left;
    padding-right: 0;
    font-size: 15px;
  }

  .vs-intro__foot {
    justify-content: center;
  }

  .vs-intro__add {
    margin-left: 36px;
  }

  .vs-connect {
    background-position: 25% 0;
    margin-top: -80px;
    padding-top: 240px;
    padding-bottom: 80px;
  }

  .paragraph--xxxl {
    font-size: 20px;
  }

  .vs-connect__image {
    box-shadow: 19px 48px #e8f1f5;
  }

  .vs-connect__caption {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .inlined-sm {
    display: inline;
  }

  .spacer--300 {
    height: 36px;
  }

  .vs-trends__grid {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  .vs-trends__item {
    padding: 15px 21px;
  }

  .vs-trends__image {
    margin-right: 18px;
  }

  .vs-speakers {
    background-position: 25% 0;
    margin-top: -80px;
    padding-top: 240px;
    padding-bottom: 80px;
  }

  .vs-speakers__track {
    padding-bottom: 45px;
  }

  .vs-speaker {
    max-width: 224px;
    min-width: 224px;
    padding-left: 12px;
    padding-right: 12px;
  }

  .vs-speakers__info {
    border-radius: 0;
    margin-left: -20px;
    margin-right: -20px;
    padding: 20px;
  }

  .vs-bio__head {
    display: block;
  }

  .vs-bio__position {
    font-size: 18px;
  }

  .vs-speakers__close {
    top: 20px;
    right: 20px;
  }

  .vs-speakers__arrows {
    bottom: 20px;
    right: 20px;
  }

  .vs-tabs {
    justify-content: flex-start;
    margin-bottom: 30px;
    margin-left: -20px;
    margin-right: -20px;
    overflow: auto;
  }

  .vs-session {
    margin-top: 20px;
  }

  .vs-session__cont {
    padding-bottom: 20px;
  }

  .vs-session__clock {
    top: 1px;
  }

  .vs-session__foot {
    display: block;
  }

  .vs-hero__subhead {
    padding-bottom: 20px;
  }

  .header__head {
    padding-left: 10px;
    padding-right: 10px;
  }

  .vs-hero-register {
    padding-top: 0;
    padding-bottom: 10px;
  }

  .blog-resources {
    margin-top: 18px;
  }

  .blog-resources__item {
    padding-top: 18px;
    padding-bottom: 18px;
    padding-right: 18px;
  }

  .blog-resources__icon {
    min-width: 66px;
  }

  .blog-resources__arrow {
    margin-left: 9px;
  }

  .blog-hero__title {
    font-size: 28px;
  }

  .blog-featured2__cont {
    padding: 20px;
  }

  .headline {
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb079cf3d84c3b_headline-left.svg");
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: auto;
  }

  .blog-bar {
    margin-top: -27px;
  }

  .blog-card__noimg {
    min-height: 165px;
    margin-bottom: 18px;
    margin-left: -20px;
    margin-right: -20px;
    padding-top: 70px;
  }

  .blog-card_logo {
    max-width: 75%;
  }

  .vs2020-hero__title-copy {
    padding-top: 270px;
    padding-bottom: 10px;
  }

  .vs2020-hero__subhead {
    padding-bottom: 20px;
  }

  .spacer--400 {
    height: 48px;
  }

  .video-post__cont {
    padding: 20px;
  }

  .video-post__share {
    display: none;
  }

  .video-playlist {
    margin: 36px -20px -20px;
    padding: 20px 20px 12px;
  }

  .blog-card__head {
    margin: -20px -20px 20px;
  }

  .removed-sm {
    display: none;
  }

  .vs-hero__titlelight {
    text-align: left;
    margin-top: -31px;
    padding-right: 0;
    font-size: 26px;
    line-height: 1.25em;
  }

  .image-5 {
    max-width: 100%;
    text-align: center;
  }

  .updates-card__more {
    font-size: 18px;
  }

  .thank-you-block {
    text-align: center;
    display: none;
  }

  .check-image {
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .thank-you-text {
    font-size: 22px;
  }

  .paragraph-2 {
    line-height: 1.5;
  }

  .div-block-3, .heading-11 {
    max-width: 100%;
  }

  .form-block {
    flex-direction: row;
    padding-left: 0%;
    padding-right: 0%;
  }

  .card-left {
    max-width: 42%;
    min-width: 42%;
    text-align: left;
  }

  .div-block-5 {
    text-align: center;
  }

  .blog-hero__head {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .site-search {
    margin-right: 12px;
  }
}

@media screen and (max-width: 479px) {
  .page {
    padding-top: 90px;
  }

  .container {
    max-width: 100%;
  }

  .button.button--lg {
    display: block;
  }

  .button.button--lg.button__hero {
    margin-bottom: auto;
  }

  .pro-tips__cont {
    width: 100%;
  }

  .pro-tip-card {
    background-image: none;
    background-position: 0 0;
    background-repeat: repeat;
    background-size: auto;
    padding: 0 19px 19px;
  }

  .pro-tip-card__icon {
    width: 76px;
    height: 64px;
    bottom: auto;
  }

  .paragraph--xs.tc--light {
    font-family: Metric, sans-serif;
    font-size: 14px;
    line-height: 1.3;
  }

  .pro-tip-card__title {
    background-color: #eaf5f7;
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb075fb3d84b84_pro-tip-card__arrow.svg");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto;
    margin-bottom: 18px;
    margin-left: -19px;
    margin-right: -19px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 76px;
  }

  .pro-tips__grid {
    width: 100%;
  }

  .pro-tip-video {
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .blog__grid {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  .spacer--200 {
    text-align: center;
  }

  .blog-card {
    min-height: auto;
    padding: 16px;
  }

  .author-summary__cont, .author-summary__link {
    font-family: Metric, sans-serif;
  }

  .welcome__grid {
    width: 100%;
  }

  .event-promo {
    background-position: 190%;
    background-size: 100%;
    padding: 20px 100px 20px 20px;
  }

  .event-promo__title {
    font-size: 20px;
  }

  .event-promo__summary {
    font-size: 14px;
  }

  .event-promo__bg {
    background-position: 115%;
  }

  .legal-nav {
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  .legal-nav__link, .copyrights {
    font-family: Metric, sans-serif;
  }

  .tertiary-nav {
    min-width: 100%;
  }

  .pro-tip-card__image {
    max-height: 38px;
    max-width: 38px;
  }

  .pro-tips__link {
    float: none;
    text-align: center;
    margin-top: 0;
    line-height: 1.1;
    display: block;
  }

  .removed-xs {
    text-align: left;
    margin-right: 5px;
    display: inline-block;
  }

  .back-button__link.removed-sm {
    display: block;
  }

  .blog-post {
    margin-bottom: 20px;
  }

  .heading2.ta--center {
    font-size: 26px;
    line-height: 1.25em;
  }

  .paragraph.vsrecap-video_p {
    font-size: 15px;
  }

  .overline {
    font-size: 14px;
  }

  .overline.video-speakers {
    font-size: 12px;
    font-weight: 600;
  }

  .blog-related__item {
    flex-wrap: wrap;
  }

  .blog-related__image {
    height: auto;
    max-width: 120px;
    min-width: 120px;
  }

  .callout {
    height: auto;
  }

  .callout__foot {
    flex-direction: column;
  }

  .callout__link {
    margin-top: 12px;
    margin-left: 0;
  }

  .blog-nav {
    justify-content: flex-start;
  }

  .event-hero__title {
    font-size: 28px;
  }

  .event-hero__foot {
    display: block;
  }

  .event-hero__link {
    margin-top: 18px;
    margin-left: 0;
    display: block;
  }

  .pagination__button {
    width: 110px;
    flex: 1;
    padding-left: 14px;
    padding-right: 14px;
  }

  .updates-subscribe {
    margin-top: 0;
    padding-top: 30px;
  }

  .updates-subscribe__subtitle {
    font-size: 15px;
  }

  .blog-related__title {
    margin-bottom: 10px;
  }

  .blog-share {
    display: none;
  }

  .spacer--125.removed-sm {
    display: block;
  }

  .event-post__image {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .event-post__cont {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -20px;
    margin-right: -20px;
  }

  .event-post__pic {
    margin-left: -20px;
    margin-right: -20px;
  }

  .mobile-nav {
    display: none;
    overflow: scroll;
  }

  .mobile-nav__link {
    display: block;
  }

  .mobile-nav__button.mobile-nav__button--new {
    width: 48%;
    padding-left: 18px;
    padding-right: 18px;
  }

  .welcome__subtitle {
    margin-top: 10px;
    font-size: 26px;
  }

  .past-events__foot {
    display: flex;
  }

  .vs-hero {
    padding-left: 20px;
    padding-right: 20px;
    top: 260%;
  }

  .vs-hero__title {
    text-align: center;
    margin-top: -34px;
  }

  .vs-hero__bg {
    background-image: url("https://assets-global.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb0770eed84c4b_vsrecap-topbg.png");
    background-position: 0 0;
    background-size: 360px;
    margin-top: 0;
    top: 0%;
  }

  .blocked {
    font-size: 28px;
  }

  .blocked.inlined-xs {
    line-height: 1.1em;
  }

  .inlined-xs {
    display: inline;
  }

  .vs-intro__title {
    font-size: 26px;
  }

  .paragraph--xxl.tc--xlight {
    text-align: center;
    font-size: 19px;
    line-height: 1.275;
  }

  .vs-intro__foot {
    flex-direction: column;
    align-items: center;
  }

  .vs-intro__add {
    margin-top: 18px;
    margin-left: 0;
  }

  .vs-connect {
    padding-top: 220px;
  }

  .vs-connect__image {
    width: 95%;
  }

  .vs-connect__caption {
    text-align: right;
  }

  .heading-3 {
    font-size: 33px;
  }

  .vs-connect-title {
    font-size: 16px;
  }

  .vs-connect_bullet {
    font-size: 20px;
    line-height: 1.275;
  }

  .popup__cont, .popup__cont2 {
    max-width: 90%;
    min-width: 90%;
    margin-top: 20px;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .heading-10 {
    float: none;
    text-align: center;
    margin-bottom: 10px;
  }

  .vs-hero-register {
    padding-top: 0;
    font-size: 42px;
  }

  .tc--white {
    font-family: Metric, sans-serif;
  }

  .blog-hero__bg {
    height: 55vw;
  }

  .vs2020-hero__title-copy {
    padding-top: 174px;
  }

  .blog__row {
    margin-left: 0;
    margin-right: 0;
  }

  .blog__col {
    max-width: 100%;
    min-width: 100%;
  }

  .video-post__cont {
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
  }

  .video-speakers__col {
    max-width: 100%;
    min-width: 100%;
  }

  .blog-card__head {
    margin: -16px -16px 16px;
  }

  .video-post__title {
    font-size: 22px;
    line-height: 1.15em;
  }

  .author-card_speakers {
    margin-top: 6px;
  }

  .author-card_speaker {
    font-size: 13px;
  }

  .vs-hero__titlelight {
    text-align: center;
    font-size: 28px;
  }

  .text-span-2 {
    display: block;
  }

  .image-5 {
    max-width: 100%;
  }

  .div-block-3 {
    text-align: center;
    font-size: 14px;
  }

  .heading-11 {
    text-align: center;
    font-size: 18px;
  }

  .form-block {
    flex-direction: column-reverse;
  }

  .card-left {
    max-width: 100%;
    min-width: 100%;
    text-align: center;
  }

  .div-block-5 {
    margin-top: -70px;
    margin-bottom: -25px;
  }

  .pagination-2 {
    flex-wrap: wrap;
  }

  .page-count {
    flex: 0 auto;
    order: 0;
  }

  .heading-12 {
    font-size: 22px;
  }

  .blog-continue__grid {
    grid-template-columns: 1fr;
  }
}

#w-node-_0d283792-b3e9-d3f8-4b23-8e34530e2ca9-c704d235, #w-node-_9c0e025a-9ef2-bf64-73fc-a2bbbafecddf-c704d268, #w-node-_614ac32b-a61d-0ea5-82cd-29f732d966ac-c704d269, #w-node-_3b86aa8f-e7ae-cb0b-9dcb-84ecf07db8c4-c704d26a, #w-node-_5f31591c4534923183d1123a000000000012-c704d272 {
  grid-area: span 1 / span 2 / span 1 / span 2;
}

@media screen and (max-width: 991px) {
  #w-node-_0d283792-b3e9-d3f8-4b23-8e34530e2ca9-c704d235, #w-node-_9c0e025a-9ef2-bf64-73fc-a2bbbafecddf-c704d268, #w-node-_614ac32b-a61d-0ea5-82cd-29f732d966ac-c704d269, #w-node-_3b86aa8f-e7ae-cb0b-9dcb-84ecf07db8c4-c704d26a, #w-node-_5f31591c4534923183d1123a000000000012-c704d272 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
}

@media screen and (max-width: 479px) {
  #w-node-_0d283792-b3e9-d3f8-4b23-8e34530e2ca9-c704d235, #w-node-_9c0e025a-9ef2-bf64-73fc-a2bbbafecddf-c704d268, #w-node-_614ac32b-a61d-0ea5-82cd-29f732d966ac-c704d269, #w-node-_3b86aa8f-e7ae-cb0b-9dcb-84ecf07db8c4-c704d26a, #w-node-_5f31591c4534923183d1123a000000000012-c704d272 {
    grid-area: span 1 / span 6 / span 1 / span 6;
  }
}

@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/6436699671e7a84702c1a91c_metric-thin-italic.woff2') format('woff2');
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/64366995d6e5294778844788_metric-semibold-italic.woff2') format('woff2');
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/643669950469ed1091c13dc9_metric-light-italic.woff2') format('woff2');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/64366995ff96ad8ea3889627_metric-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/6436699576dd6eb3b6b57da6_metric-medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/6436699576dd6e4a16b57da7_metric-medium-italic.woff2') format('woff2');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/64366995206686138dee1b4a_metric-regular-italic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/64366996b18c4965baf2b318_metric-semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/6436699520668624bfee1b49_metric-bold-italic.woff2') format('woff2');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/64366995fe9b98aaa29310aa_metric-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/6436699576dd6e4e64b57da5_metric-black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/6436699539b2cc770dc7b8e7_metric-black-italic.woff2') format('woff2');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/64366996ed162715a1888891_metric-thin.woff2') format('woff2');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Metric';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/643669950469ed718ec13dc5_metric-light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb070fc3d84b76_Inter-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Inter';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07eedcd84b78_Inter-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Inter';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb072be4d84b77_Inter-Italic.woff') format('woff');
  font-weight: 400;
  font-style: italic;
  font-display: auto;
}
@font-face {
  font-family: 'Inter';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb070ab5d84b79_Inter-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Inter';
  src: url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07f9d5d84b8f_Inter-Medium.woff') format('woff'), url('https://assets.website-files.com/5f98b7826beb07a4f4d84b2f/5f98b7826beb07f9d5d84b8f_Inter-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: auto;
}