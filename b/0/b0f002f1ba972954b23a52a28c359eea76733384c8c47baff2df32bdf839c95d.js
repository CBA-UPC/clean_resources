/* jshint ignore:start */
(function(){var $c=$c.prototype.set=$c.prototype.encode=var vd=new $c;ar Nd=Td=Dd=var ea=ka=qa=D=sa=ga=ta=ua=function(){},K=L=f=/^[\w\-:/.?=&%!]+$/,wa=function(a,b,c,d){a&&(c?(d="",b&&f.test(b)&&(d=' id="'+b+'"'),f.test(a)&&M.write("<script"+d+' src="'+a+'">\x3c/script>')):(c=M.createElement("script"),
c.type="text/javascript",c.async=!0,c.src=a,d&&(c.onload=d),b&&(c.id=b),a=M.getElementsByTagName("script")[0],a.parentNode.insertBefore(c,a)))},Ud=E=xa=ya=za=var ee=ee.prototype.set=ee.prototype.get=ee.prototype.map=var O=window,M=document;var F=window,G=var Ca=zc=Cc=vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc=Da=ba=wc=wd=x=ge=var h=var Ha=Ha.prototype.add=Ha.prototype.D=nction Sa(a){var b=P(a,gd)||oc()+"/collect",c=P(a,fa);!c&&a.get(Vd)&&(c="beacon");if(c){var d=P(a,Ra),e=a.get(Ia),e=e||ua;"image"==c?wc(b,d,e):"xhr"==c&&wd(b,d,e)||"beacon"==c&&x(b,d,e)||ba(b,d,e)}else ba(b,P(a,Ra),a.get(Ia));b=a.get(Na);b=h(b);c=b.hitcount;b.hitcount=c?c+1:1;b=a.get(Na);delete h(b).pending_experiments;a.set(Ia,ua,!0)}
function Hc(a){(O.gaData=O.gaData||{}).expId&&a.set(Nc,(O.gaData=O.gaData||{}).expId);(O.gaData=O.gaData||{}).expVar&&a.set(Oc,(O.gaData=O.gaData||{}).expVar);var b;var c=a.get(Na);if(c=h(c).pending_experiments){var d=[];for(b in c)c.hasOwnProperty(b)&&c[b]&&d.push(encodeURIComponent(b)+"."+encodeURIComponent(c[b]));b=d.join("!")}else b=void 0;b&&a.set(m,b,!0)}ar hd=Bd=var Ya=Qa=new ee,Za=[];Ya.prototype.get=var P=R=Ya.prototype.set=
var ab=bb=$a=yc=S=cb=T=db=var gb=qa(window.GoogleAnalyticsObject)&&sa(window.GoogleAnalyticsObject)||"ga",Ba=!1,hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var Vd=S("useBeacon",void 0,!1),fa=S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");S("screenName","cd");
var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",;cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");S("campaignMedium","cm");
S("campaignKeyword","ck");S("campaignContent","cc");var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");S("appName","an");
S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),m=S("exp","exp"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",;S("linkerParam",void 0,void 0,Bc,db);
var ld=S("usage","_u"),Gd=S("_um");S("forceSSL",void 0,void 0,;var ed=S("_j1","jid"),ia=S("_j2","gjid");cb("\\&(.*)",;
var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),V=T("name"),Q=T("clientId","cid"),n=T("clientIdTime"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),
$b=T("legacyCookieDomain"),Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),I=T("_gid","_gid"),ja=T("_ge"),la=T("_gcn"),gd=S("transportUrl"),Md=S("_r","_r");var Od=function(a,b,c){this.V=a;this.fa=b;this.$=!1;this.oa=c;this.ea=1},Ed=function(a,b,c){if(a.fa&&a.$)return 0;a.$=!0;if(b){if(a.oa&&R(b,a.oa))return R(b,a.oa);if(0==b.get(dc))return 0}if(0==a.V)return 0;void 0===c&&(c=Bd());return 0==c%a.V?Math.floor(c/a.V)%a.ea+1:0};var aa=gc=function(a){var b={};if(Ec(b)||Fc(b)){var c=b[Eb];void 0==c||Infinity==c||isNaN(c)||(0<c?(Y(b,Gb),Y(b,Jb),Y(b,Ib),Y(b,Fb),Y(b,Hb),Y(b,Kb),Y(b,Lb),a(b)):L(O,"load",!1))}},Ec=Fc=Y=Fd=function(a){return function(b){if("pageview"==b.get(Va)&&!a.I){a.I=!0;var c=
aa(b);b=0<E(b.get(kb),"gclid").length;(c||b)&&gc(function(b){a.send(c?"timing":"adtiming",b)})}}};var hc=!1,mc=function(a){"cookie"==P(a,ac)&&(ma(a,Q,U),a.get(ja)&&ma(a,I,la,864E5))},ma=function(a,b,c,d){var e=nd(a,b);if(e){c=P(a,c);b=kc(P(a,Yb));var g=lc(P(a,W));d=d||1E3*R(a,Zb);var ca=P(a,Na);if("auto"!=g)zc(c,e,b,g,ca,d)&&(hc=!0);else{J(32);var l;a:{e=[];g=xa().split(".");if(4==g.length&&(l=g[g.length-1],parseInt(l,10)==l)){l=["none"];break a}for(l=g.length-2;0<=l;l--)e.push(g.slice(l).join("."));e.push("none");l=e}for(var k=0;k<l.length;k++)if(g=l[k],a.data.set(W,g),e=nd(a,Q),zc(c,e,b,g,ca,
d)){hc=!0;return}a.data.set(W,"auto")}}else a.get(ja)||J(54)},nc=Yc=nd=na=function(a,b){if(b&&!(1>b.length)){for(var c=[],
d=0;d<b.length;d++){var e;e=b[d].split(".");var g=e.shift();("GA1"==g||"1"==g)&&1<e.length?(g=e.shift().split("-"),1==g.length&&(g[1]="1"),g[0]*=1,g[1]*=1,e={H:g,s:e.join(".")}):e=void 0;e&&c.push(e)}if(1==c.length)return J(13),c[0].s;if(0==c.length)J(12);else{J(14);b=lc(P(a,W)).split(".").length;c=Gc(c,b,0);if(1==c.length)return c[0].s;a=jc(P(a,Yb));c=Gc(c,a,1);return c[0]&&c[0].s}}},Gc=lc=kc=jc=unction Zc(a,b){var c;null==a?c=a=1:(c=La(a),a=La(D(a,".")?a.substring(1):"."+a));for(var d=0;d<b.length;d++)if(b[d].hash==c||b[d].hash==a)return b[d]};var od=new RegExp(/^https?:\/\/([^\/:]+)/),pd=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;function Bc(a){var b=a.get(Q);if(a.get(ja))return a=a.get(I),c=Ic(a+b,0),"_ga=2."+K(c+"."+a+"-"+b);var c=Ic(b,0);return"_ga=1."+K(c+"."+b)}ar Dc=
Dc.prototype.ca=
var qd=function(a,b,c){var d=pd.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var e=b.indexOf("?"),d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));return b=b.replace(/&+_ga=/,"&_ga=")},rd=function(a,b){if(b&&b.action)if("get"==b.method.toLowerCase()){a=a.target.get("linkerParam").split("=")[1];for(var c=b.childNodes||[],d=0;d<c.length;d++)if("_ga"==c[d].name){c[d].setAttribute("value",a);return}c=M.createElement("input");
c.setAttribute("type","hidden");c.setAttribute("name","_ga");c.setAttribute("value",a);b.appendChild(c)}else"post"==b.method.toLowerCase()&&(b.action=qd(a,b.action))};
Dc.prototype.S=function(a,b,c){ar e=this;this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"keyup",d,!1));c&&L(M,"submit",};var p=/^(GTM|OPT)-[A-Z0-9]+$/,q=/;_gaexp=[^;]*/g,r=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,t=function(a){ar c="https://www.google-analytics.com/gtm/js?id="+K(a.id);"dataLayer"!=a.B&&b("l",a.B);b("t",a.target);b("cid",a.ja);b("cidt",a.ka);b("gac",a.la);b("aip",a.ia);a.na&&b("m","sync");b("cycle",a.G);a.qa&&b("gclid",a.qa);return c};var Jd=Rd=function(a,b){var c=b.get(Wb);b.set(Wb,function(b){Pd(a,b,a.U);var d=c(b);Qd(a,b);return d});var d=b.get(Xb);b.set(Xb,},Pd=function(a,b,c){b.get(c)||("1"==Ca(a.Y)[0]?b.set(c,"",!0):b.set(c,""+hd(),!0))},Qd=Id=function(a,b){if(b.get(a.U)){var c=new ee,
d=d(hb);d(ib);d(Na);d(Q);d(Ad);d(a.U);c.set($a(ld).F,Td(b));var e=a.aa;c.map(;e+="z="+hd();ta(e);b.set(a.U,"",!0)}},Wd=/^gtm\d+$/;var fd=function(a,b){a=a.b;if(!a.get("dcLoaded")){Nd(a,29);b=b||{};var c;b[U]&&(c=Cc(b[U]));b=new Jd(a,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",c);Rd(b,a);a.set("dcLoaded",!0)}};var Sd=function(a){if(!a.get("dcLoaded")&&"cookie"==a.get(ac)){Nd(a,51);var b=new Jd(a);Pd(b,a,b.U);Pd(b,a,ia);Qd(b,a);a.get(b.U)&&(a.set(Md,1,!0),a.set(gd,oc()+"/r/collect",!0))}};var Lc=var ad,bd=var H=function(a){return a?(1*a).toFixed(3):"0"},da=function(a){var b=O.performance;if(b&&b.getEntriesByName){J(35);var c="https://www.google-analytics.com/analytics.js?wpid="+a;wa(c,void 0,void 0,function(){try{var d=1,e=b.getEntriesByName("https://www.google-analytics.com/analytics.js");e&&0!=e.length||(e=b.getEntriesByName("http://www.google-analytics.com/analytics.js"),d=0);var g=b.getEntriesByName(c);if(e&&1==e.length&&g&&1==g.length){J(37);var ca=e[0],l=g[0],k={tid:a,ad:H(ca.duration),bd:H(l.duration),
ar:H(ca.responseEnd-ca.requestStart),br:H(l.responseEnd-l.requestStart),an:H(ca.domainLookupEnd-ca.domainLookupStart),bn:H(l.domainLookupEnd-l.domainLookupStart),ac:H(ca.connectEnd-ca.connectStart),bc:H(l.connectEnd-l.connectStart),as:d},d=[];d.push("_v=j50");d.push("id=10");for(var w in k)k.hasOwnProperty(w)&&d.push(w+"="+K(k[w]));d.push("z="+hd());wc("https://www.google-analytics.com/u/d",d.join("&"),ua)}}catch(ha){}})}};var wb=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){r d=this;this.b=new Ya;this.filters=new Ha;b(V,a[V]);b(Na,sa(a[Na]));b(U,a[U]);b(W,a[W]||xa());b(Yb,a[Yb]);b(Zb,a[Zb]);b($b,a[$b]);b(Wc,a[Wc]);b(bc,a[bc]);b(cc,a[cc]);b(Ka,a[Ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(Ad,a[Ad]);b(n,a[n]);b(ja,a[ja]);b(hb,1);b(ib,"j50");c(Qb,Ma);c(dd,cd);c(Rb,Oa);c(md,vb);c(Sb,nc);c(Uc,Yc);c(Tb,Ja);c(Vb,Ta);c(Vc,Hc);c(zd,yd);c(Ld,Sd);c(Wb,
Pa);c(Xb,Sa);c(Cd,Fd(this));Jc(this.b,a[Q]);Kc(this.b);this.b.set(jb,Lc());bd(this.b.get(Na),this.b.get(W),this.b.get(Yb));this.ra=new Od(1E4,!0,"gaexp10")},Jc=function(a,b){if("cookie"==P(a,ac)){hc=!1;var c=Ca(P(a,U));if(!(c=na(a,c))){var c=P(a,W),d=P(a,$b)||xa();c=Xc("__utma",d,c);void 0!=c?(J(10),c=c.O[1]+"."+c.O[2]):c=void 0}c&&(a.data.set(Q,c),c=Ca(P(a,la)),(c=na(a,c))&&a.data.set(I,c),hc=!0)}a:if(c=a.get(cc),c=E(M.location[c?"href":"search"],"_ga"))if(a.get(bc))if(d=c.indexOf("."),-1==d)J(22);
else{var e=c.substring(0,d),g=c.substring(d+1),d=g.indexOf("."),c=g.substring(0,d),g=g.substring(d+1);if("1"==e){if(d=g,c!=Ic(d,0)&&c!=Ic(d,-1)&&c!=Ic(d,-2)){J(23);break a}}else if("2"==e){e=g.split("-",2);d=e[1];if(c!=Ic(e[0]+d,0)&&c!=Ic(e[0]+d,-1)&&c!=Ic(e[0]+d,-2)){J(53);break a}J(2);a.data.set(I,e[0])}else{J(22);break a}J(11);a.data.set(Q,d)}else J(21);b&&(J(9),a.data.set(Q,K(b)));a.get(Q)||((b=(b=O.gaGlobal&&O.gaGlobal.vid)&&-1!=b.search(/^(?:utma\.)?\d+\.\d+$/)?b:void 0)?(J(17),a.data.set(Q,
b)):(J(8),a.data.set(Q,ga())));a.data.set(ja,a.get(ja)||1==Ed(new Od(0,!0),void 0,La(a.get(Q))));a.get(ja)&&(b=P(a,U),a.data.set(la,"_ga"==b?"_gid":b+"_gid"));a.get(ja)&&!a.get(I)&&(J(3),a.data.set(I,ga()));mc(a)},Kc=pc.prototype.get=pc.prototype.set=var qc={pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};
pc.prototype.send=function(a){if(!(1>arguments.length)){var b,c;"string"===typeof arguments[0]?(b=arguments[0],c=[].slice.call(arguments,1)):(b=arguments[0]&&arguments[0][Va],c=arguments);b&&(c=za(qc[b]||[],c),c[Va]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={},Ed(this.ra,this.b)&&da(this.b.get(Na)))}};pc.prototype.ma=var rc=z=var td=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=var Yd,Zd,$d,A;Yd=new ee;$d=new ee;A=new ee;Zd={ec:45,ecommerce:46,linkid:47};
var u=y=function(a,b,c,d,e){if(!ea(Yd.get(b))&&!$d.get(b)){Zd.hasOwnProperty(b)&&J(Zd[b]);if(p.test(b)){J(52);a=N.j(a);if(!a)return!0;c=d||{};d={id:b,B:c.dataLayer||"dataLayer",ia:!!a.get("anonymizeIp"),na:e,G:!1};a.get("&gtm")==b&&(d.G=!0);var g=String(a.get("name"));"t0"!=g&&(d.target=g);G(String(a.get("trackingId")))||(d.ja=String(a.get(Q)),
d.ka=Number(a.get(n)),c=c.palindrome?r:q,c=(c=M.cookie.replace(/^|(; +)/g,";").match(c))?c.sort().join("").substring(1):void 0,d.la=c,d.qa=E(a.b.get(kb)||"","gclid"));a=d.B;c=(new Date).getTime();O[a]=O[a]||[];c={"gtm.start":c};e||(c.event="gtm.js");O[a].push(c);c=t(d)}!c&&Zd.hasOwnProperty(b)?(J(39),c=b+".js"):J(43);c&&(c&&0<=c.indexOf("/")||(c=(Ba||Ud()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+c),d=ae(c),a=d.protocol,c=M.location.protocol,("https:"==a||a==c||("http:"!=a?0:"http:"==
c))&&B(d)&&(wa(d.url,void 0,e),$d.set(b,!0)))}},v=C=B=ae=var Z={ga:;Z.ga();Z.D=Z.J=
Z.v=function(a){try{if(a.u)a.u.call(O,N.j("t0"));else{var b=a.c==gb?N:N.j(a.c);if(a.A)"t0"!=a.c||N.create.apply(N,a.a);else if(a.ba)N.remove(a.c);else if(b)if(a.i){if(a.ha&&(a.ha=y(a.c,a.a[0],a.X,a.W)),!u(a.a[0],b,a.W))return!0}else if(a.K){var c=a.C,d=a.a,e=b.plugins_.get(a.K);e[c].apply(e,d)}else b[a.C].apply(b,a.a)}}catch(g){}};var N=N.h={};N.P=[];N.L=0;N.answer=42;var uc=[Na,W,V];N.create=N.remove=N.j=N.getAll=
N.N=function(){"ga"!=gb&&J(49);var a=O[gb];if(!a||42!=a.answer){N.L=a&&a.l;N.loaded=!0;var b=O[gb]=N;X("create",b,b.create);X("remove",b,b.remove);X("getByName",b,b.j,5);X("getAll",b,b.getAll,6);b=pc.prototype;X("get",b,b.get,7);X("set",b,b.set,4);X("send",b,b.send);X("requireSync",b,b.ma);b=Ya.prototype;X("get",b,b.get);X("set",b,b.set);if(!Ud()&&!Ba){a:{for(var b=M.getElementsByTagName("script"),c=0;c<b.length&&100>c;c++){var d=b[c].src;if(d&&0==d.indexOf("https://www.google-analytics.com/analytics")){J(33);
b=!0;break a}}b=!1}b&&(Ba=!0)}Ud()||Ba||!Ed(new Od(1E4))||(J(36),Ba=!0);(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc.prototype;C("linker",Dc);X("decorate",b,b.ca,20);X("autoLink",b,b.S,25);C("displayfeatures",fd);C("adfeatures",fd);a=a&&a.q;ka(a)?Z.D.apply(N,a):J(50)}};N.da=var oa=N.N,pa=O[gb];pa&&pa.r?oa():z(oa);z(;function La(a){var b=1,c,d;if(a)for(b=0,d=a.length-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};})(window);
/* jshint ignore:end */
/* build date: 2023-11-23T20:46:36.752Z */