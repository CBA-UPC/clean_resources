(function(){var $c=$c.prototype.set=$c.prototype.encode=var vd=new $c;ar Td=Dd=var ea=ka=qa=D=sa=ra=ta=ua=function(){},K=L=f=/^[\w\-:/.?=&%!]+$/,wa=function(a,b,c){a&&(c?(c="",b&&f.test(b)&&(c=' id="'+b+'"'),f.test(a)&&M.write("<script"+c+' src="'+a+'">\x3c/script>')):(c=M.createElement("script"),
c.type="text/javascript",c.async=!0,c.src=a,b&&(c.id=b),a=M.getElementsByTagName("script")[0],a.parentNode.insertBefore(c,a)))},be=E=xa=de=ya=za=var ee=ee.prototype.set=ee.prototype.get=ee.prototype.map=var O=window,M=document,va=var F=window,Ea=document,G=function(a){var b=F._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===F["ga-disable-"+a])return!0;try{var c=F.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}a=[];b=Ea.cookie.split(";");c=/^\s*AMP_TOKEN=\s*(.*?)\s*$/;for(var d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push(e[1])}for(b=0;b<a.length;b++)if("$OPT_OUT"==decodeURIComponent(a[b]))return!0;return!1};var Ca=zc=Cc=vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc,Id=/^.*Version\/?(\d+)[^\d].*$/i,ne=var Fa,Ga,fb,Ab,ja=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,Ub=[],ic=tc=Pc=Mc=xc=Qc=var oe=Da=ba=pe=wc=wd=function(a,b,c,d){var e=O.XMLHttpRequest;
if(!e)return!1;var g=new e;if(!("withCredentials"in g))return!1;a=a.replace(/^http:/,"https:");g.open("POST",a,!0);g.withCredentials=!0;g.setRequestHeader("Content-Type","text/plain");g.onreadystatechange=function(){if(4==g.readyState){if(d)try{var a=g.responseText;if(1>a.length)ge("xhr","ver","0"),c();else if("1"!=a.charAt(0))ge("xhr","ver",String(a.length)),c();else if(3<d.count++)ge("xhr","tmr",""+d.count),c();else if(1==a.length)c();else{var b=a.charAt(1);if("d"==b)pe("https://stats.g.doubleclick.net/j/collect",
d.U,d,c);else if("g"==b){var e="https://www.google.%/ads/ga-audiences".replace("%","com");wc(e,d.google,c);var w=a.substring(2);if(w)if(/^[a-z.]{1,6}$/.test(w)){var ha="https://www.google.%/ads/ga-audiences".replace("%",w);wc(ha,d.google,ua)}else ge("tld","bcc",w)}else ge("xhr","brc",b),c()}}catch(ue){ge("xhr","rsp"),c()}else c();g=null}};g.send(b);return!0},x=ge=function(a,b,c){1<=100*Math.random()||G("?")||
(a=["t=error","_e="+a,"_v=j68","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+K(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc("https://www.google-analytics.com/u/d",a.join("&"),ua))};var h=var Ha=Ha.prototype.add=Ha.prototype.D=nction Sa(a){var b=P(a,gd)||oe()+"/collect",c=a.get(qe),d=P(a,fa);!d&&a.get(Vd)&&(d="beacon");if(c)pe(b,P(a,Ra),c,a.get(Ia));else if(d){c=d;d=P(a,Ra);var e=a.get(Ia);e=e||ua;"image"==c?wc(b,d,e):"xhr"==c&&wd(b,d,e)||"beacon"==c&&x(b,d,e)||ba(b,d,e)}else ba(b,P(a,Ra),a.get(Ia));b=a.get(Na);b=h(b);c=b.hitcount;b.hitcount=c?c+1:1;b=a.get(Na);delete h(b).pending_experiments;a.set(Ia,ua,!0)}
function Hc(a){(O.gaData=O.gaData||{}).expId&&a.set(Nc,(O.gaData=O.gaData||{}).expId);(O.gaData=O.gaData||{}).expVar&&a.set(Oc,(O.gaData=O.gaData||{}).expVar);var b=a.get(Na);if(b=h(b).pending_experiments){var c=[];for(d in b)b.hasOwnProperty(d)&&b[d]&&c.push(encodeURIComponent(d)+"."+encodeURIComponent(b[d]));var d=c.join("!")}else d=void 0;d&&a.set(m,d,!0)}ar hd=Bd=var Ya=Qa=new ee,Za=[];Ya.prototype.get=var P=R=Ya.prototype.set=
var ab=bb=$a=yc=S=cb=T=db=var gb=qa(window.GoogleAnalyticsObject)&&sa(window.GoogleAnalyticsObject)||"ga",jd=/^(?:utma\.)?\d+\.\d+$/,kd=/^amp-[\w.-]{22,64}$/,Ba=!1,hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var Vd=S("useBeacon",void 0,!1),fa=S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");
S("screenName","cd");var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",;cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");
S("campaignMedium","cm");S("campaignKeyword","ck");S("campaignContent","cc");var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");
S("appName","an");S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),m=S("exp","exp"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",;S("linkerParam",void 0,void 0,Bc,db);
var ld=S("usage","_u"),Gd=S("_um");S("forceSSL",void 0,void 0,;var ed=S("_j1","jid"),ia=S("_j2","gjid");cb("\\&(.*)",;
var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),oa=S("customTask"),V=T("name"),Q=T("clientId","cid"),n=T("clientIdTime"),xd=T("storedClientId"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",
void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),Hd=T("cookieUpdate",void 0,!0),$b=T("legacyCookieDomain"),Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),I=T("_gid","_gid"),la=T("_gcn"),Kd=T("useAmpClientId"),ce=T("_gclid"),fe=T("_gt"),he=T("_ge",void 0,7776E6),ie=T("_gclsrc"),je=T("storeGac",void 0,!0),gd=S("transportUrl"),
Md=S("_r","_r"),qe=S("_dp"),Ud=S("allowAdFeatures",void 0,!0);var Od=Ed=var aa=gc=function(a){var b={};if(Ec(b)||Fc(b)){var c=b[Eb];void 0==c||Infinity==c||isNaN(c)||(0<c?(Y(b,Gb),Y(b,Jb),Y(b,Ib),Y(b,Fb),Y(b,Hb),Y(b,Kb),Y(b,Lb),va(function(){a(b)},10)):L(O,"load",!1))}},Ec=function(a){var b=O.performance||O.webkitPerformance;b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;a[Jb]=b.connectEnd-
b.connectStart;a[Ib]=b.responseStart-b.requestStart;a[Fb]=b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;return!0},Fc=Y=Fd=function(a){return function(b){if("pageview"==b.get(Va)&&
!a.I){a.I=!0;var c=aa(b),d=0<E(b.get(kb),"gclid").length;(c||d)&&gc(}}};var hc=!1,mc=function(a){if("cookie"==P(a,ac)){if(a.get(Hd)||P(a,xd)!=P(a,Q)){var b=1E3*R(a,Zb);ma(a,Q,U,b)}ma(a,I,la,864E5);if(a.get(je)){var c=a.get(ce);if(c){var d=Math.min(R(a,he),1E3*R(a,Zb));d=Math.min(d,1E3*R(a,fe)+d-(new Date).getTime());a.data.set(he,d);b={};var e=a.get(fe),g=a.get(ie),ca=kc(P(a,Yb)),l=lc(P(a,W)),k=P(a,Na);g&&"aw.ds"!=g?b&&(b.ua=!0):(c=["1",e,Cc(c)].join("."),0<d&&(b&&(b.ta=!0),zc("_gac_"+Cc(k),c,ca,l,k,d)));le(b)}}else J(75);if(a="none"===lc(P(a,W)))a=M.location.hostname,
a=eb.test(a)||vc.test(a);a&&J(30)}},ma=nc=Yc=nd=Xd=na=Gc=lc=id=function(){var a=[],b=xa().split(".");if(4==b.length){var c=
b[b.length-1];if(parseInt(c,10)==c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));a.push("none");return a},kc=jc=le=ar od=new RegExp(/^https?:\/\/([^\/:]+)/),pd=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,me=/(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;function Bc(a){var b=a.get(Q),c=a.get(I)||"";b="_ga=2."+K(pa(c+b,0)+"."+c+"-"+b);if((c=a.get(ce))&&a.get(je)){var d=R(a,fe);1E3*d+R(a,he)<=(new Date).getTime()?(J(76),a=""):(J(44),a="&_gac=1."+K([pa(c,0),d,c].join(".")))}else a="";return b+a}
ar Dc=Dc.prototype.ca=
var qd=rd=
Dc.prototype.S=function(a,b,c){ar e=this;this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"keyup",d,!1));c&&L(M,"submit",};ar p=/^(GTM|OPT)-[A-Z0-9]+$/,q=/;_gaexp=[^;]*/g,r=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,Aa=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,t=var Jd=Rd=Pd=Qd=function(a,b){se(b)&&zc(a.Y,"1",b.get(Yb),b.get(W),b.get(Na),6E4)},se=re=
H=Wd=/^gtm\d+$/;var fd=var Sd=function(a){if(!a.get("dcLoaded")&&"cookie"==a.get(ac)){var b=new Jd(a);Pd(b,a,ed);Pd(b,a,ia);Qd(b,a);if(se(a)){var c=ne()!==H(b,a);a.set(Md,1,!0);c?(J(79),a.set(gd,oe()+"/j/collect",!0),a.set(qe,{U:re(b,a,1),google:re(b,a,2),count:0},!0)):a.set(gd,oe()+"/r/collect",!0)}}};var Lc=var ad,bd=function(a,b,c){if(!ad){var d=M.location.hash;var e=O.name,g=/^#?gaso=([^&]*)/;if(e=(d=(d=d&&d.match(g)||e&&e.match(g))?d[1]:Ca("GASO")[0]||"")&&d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))zc("GASO",""+d,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=e[1],wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+hd(),"_gasojs");ad=!0}};var wb=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){r d=this;this.b=new Ya;this.filters=new Ha;b(V,a[V]);b(Na,sa(a[Na]));b(U,a[U]);b(W,a[W]||xa());b(Yb,a[Yb]);b(Zb,a[Zb]);b(Hd,a[Hd]);b($b,a[$b]);b(Wc,a[Wc]);b(bc,a[bc]);b(cc,a[cc]);b(Ka,a[Ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(Ad,a[Ad]);b(n,a[n]);b(Kd,a[Kd]);b(je,a[je]);b(hb,1);b(ib,"j68");c(Qb,Ma);c(oa,ua);c(dd,cd);c(Rb,Oa);c(md,vb);c(Sb,nc);c(Uc,Yc);c(Tb,Ja);c(Vb,Ta);
c(Vc,Hc);c(zd,yd);c(Ld,Sd);c(Wb,Pa);c(Xb,Sa);c(Cd,Fd(this));Kc(this.b);Jc(this.b,a[Q]);this.b.set(jb,Lc());bd(this.b.get(Na),this.b.get(W),this.b.get(Yb))},Jc=function(a,b){var c=P(a,U);a.data.set(la,"_ga"==c?"_gid":c+"_gid");if("cookie"==P(a,ac)){hc=!1;c=Ca(P(a,U));c=Xd(a,c);if(!c){c=P(a,W);var d=P(a,$b)||xa();c=Xc("__utma",d,c);void 0!=c?(J(10),c=c.O[1]+"."+c.O[2]):c=void 0}c&&(hc=!0);if(d=c&&!a.get(Hd))if(d=c.split("."),2!=d.length)d=!1;else if(d=Number(d[1])){var e=R(a,Zb);d=d+e<(new Date).getTime()/
1E3}else d=!1;d&&(c=void 0);c&&(a.data.set(xd,c),a.data.set(Q,c),c=Ca(P(a,la)),(c=Xd(a,c))&&a.data.set(I,c));if(a.get(je)&&(c=a.get(ce),d=a.get(ie),!c||d&&"aw.ds"!=d)){c={};if(M){d=[];e=M.cookie.split(";");for(var g=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,ca=0;ca<e.length;ca++){var l=e[ca].match(g);l&&d.push({ja:l[1],value:l[2]})}e={};if(d&&d.length)for(g=0;g<d.length;g++)(ca=d[g].value.split("."),"1"!=ca[0]||3!=ca.length)?c&&(c.na=!0):ca[1]&&(e[d[g].ja]?c&&(c.pa=!0):e[d[g].ja]=[],e[d[g].ja].push({timestamp:ca[1],
qa:ca[2]}));d=e}else d={};d=d[P(a,Na)];le(c);d&&0!=d.length&&(c=d[0],a.data.set(fe,c.timestamp),a.data.set(ce,c.qa))}}if(a.get(Hd))a:if(d=be("_ga",a.get(cc)))if(a.get(bc))if(c=d.indexOf("."),-1==c)J(22);else{e=d.substring(0,c);g=d.substring(c+1);c=g.indexOf(".");d=g.substring(0,c);g=g.substring(c+1);if("1"==e){if(c=g,ke(c,d)){J(23);break a}}else if("2"==e){c=g.indexOf("-");e="";0<c?(e=g.substring(0,c),c=g.substring(c+1)):c=g.substring(1);if(ke(e+c,d)){J(53);break a}e&&(J(2),a.data.set(I,e))}else{J(22);
break a}J(11);a.data.set(Q,c);if(c=be("_gac",a.get(cc)))c=c.split("."),"1"!=c[0]||4!=c.length?J(72):ke(c[3],c[1])?J(71):(a.data.set(ce,c[3]),a.data.set(fe,c[2]),J(70))}else J(21);b&&(J(9),a.data.set(Q,K(b)));a.get(Q)||((b=(b=O.gaGlobal&&O.gaGlobal.vid)&&-1!=b.search(jd)?b:void 0)?(J(17),a.data.set(Q,b)):(J(8),a.data.set(Q,ra())));a.get(I)||(J(3),a.data.set(I,ra()));mc(a)},Kc=function(a){var b=O.navigator,c=O.screen,d=M.location;a.set(lb,ya(a.get(ec),a.get(Kd)));if(d){var e=d.pathname||"";"/"!=e.charAt(0)&&
(J(31),e="/"+e);a.set(kb,d.protocol+"//"+d.hostname+e+d.search)}c&&a.set(qb,c.width+"x"+c.height);c&&a.set(pb,c.colorDepth+"-bit");c=M.documentElement;var g=(e=M.body)&&e.clientWidth&&e.clientHeight,ca=[];c&&c.clientWidth&&c.clientHeight&&("CSS1Compat"===M.compatMode||!g)?ca=[c.clientWidth,c.clientHeight]:g&&(ca=[e.clientWidth,e.clientHeight]);c=0>=ca[0]||0>=ca[1]?"":ca.join("x");a.set(rb,c);a.set(tb,fc());a.set(ob,M.characterSet||M.charset);a.set(sb,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||
!1);a.set(nb,(b&&(b.language||b.browserLanguage)||"").toLowerCase());a.data.set(ce,be("gclid",!0));a.data.set(ie,be("gclsrc",!0));a.data.set(fe,Math.round((new Date).getTime()/1E3));if(d&&a.get(cc)&&(b=M.location.hash)){b=b.split(/[?&#]+/);d=[];for(c=0;c<b.length;++c)(D(b[c],"utm_id")||D(b[c],"utm_campaign")||D(b[c],"utm_source")||D(b[c],"utm_medium")||D(b[c],"utm_term")||D(b[c],"utm_content")||D(b[c],"gclid")||D(b[c],"dclid")||D(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(kb,
a.get(kb)+b))}};pc.prototype.get=pc.prototype.set=var qc={pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};pc.prototype.send=
pc.prototype.ma=var rc=z=var td=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=var Yd,Zd,$d,A;Yd=new ee;$d=new ee;A=new ee;Zd={ec:45,ecommerce:46,linkid:47};
var u=y=function(a,b,c,d,e){if(!ea(Yd.get(b))&&!$d.get(b)){Zd.hasOwnProperty(b)&&J(Zd[b]);if(p.test(b)){J(52);a=N.j(a);if(!a)return!0;c=d||{};d={id:b,B:c.dataLayer||"dataLayer",ia:!!a.get("anonymizeIp"),sync:e,G:!1};a.get("&gtm")==b&&(d.G=!0);var g=String(a.get("name"));"t0"!=g&&(d.target=g);G(String(a.get("trackingId")))||(d.clientId=
String(a.get(Q)),d.ka=Number(a.get(n)),c=c.palindrome?r:q,c=(c=M.cookie.replace(/^|(; +)/g,";").match(c))?c.sort().join("").substring(1):void 0,d.la=c,d.qa=E(a.b.get(kb)||"","gclid"));a=d.B;c=(new Date).getTime();O[a]=O[a]||[];c={"gtm.start":c};e||(c.event="gtm.js");O[a].push(c);c=t(d)}!c&&Zd.hasOwnProperty(b)?(J(39),c=b+".js"):J(43);c&&(c&&0<=c.indexOf("/")||(c=(Ba||"https:"==M.location.protocol?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+c),d=ae(c),a=d.protocol,c=M.location.protocol,
("https:"==a||a==c||("http:"!=a?0:"http:"==c))&&B(d)&&(wa(d.url,void 0,e),$d.set(b,!0)))}},v=C=B=ae=function(a){function b(a){var b=(a.hostname||"").split(":")[0].toLowerCase(),c=(a.protocol||"").toLowerCase();c=1*a.port||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";D(a,"/")||(a="/"+a);return[b,""+c,a]}var c=M.createElement("a");c.href=M.location.href;var d=(c.protocol||"").toLowerCase(),e=b(c),g=c.search||"",ca=d+"//"+e[0]+(e[1]?":"+e[1]:"");D(a,"//")?a=d+a:D(a,"/")?a=ca+a:!a||D(a,"?")?a=ca+e[2]+(a||g):0>a.split("/")[0].indexOf(":")&&
(a=ca+e[2].substring(0,e[2].lastIndexOf("/"))+"/"+a);c.href=a;d=b(c);return{protocol:(c.protocol||"").toLowerCase(),host:d[0],port:d[1],path:d[2],query:c.search||"",url:a||""}};var Z={ga:;Z.ga();Z.D=Z.J=
Z.v=var N=N.h={};N.P=[];N.L=0;N.answer=42;var uc=[Na,W,V];
N.create=function(a){var b=za(uc,[].slice.call(arguments));b[V]||(b[V]="t0");var c=""+b[V];if(N.h[c])return N.h[c];a:{if(b[Kd]){J(67);if(b[ac]&&"cookie"!=b[ac]){var d=!1;break a}if(void 0!==Ab)b[Q]||(b[Q]=Ab);else{b:{d=String(b[W]||xa());var e=String(b[Yb]||"/"),g=Ca(String(b[U]||"_ga"));d=na(g,d,e);if(!d||jd.test(d))d=!0;else if(d=Ca("AMP_TOKEN"),0==d.length)d=!0;else{if(1==d.length&&(d=decodeURIComponent(d[0]),"$RETRIEVING"==d||"$OPT_OUT"==d||"$ERROR"==d||"$NOT_FOUND"==d)){d=!0;break b}d=!1}}if(d&&
tc(ic,String(b[Na]))){d=!0;break a}}}d=!1}if(d)return null;b=new pc(b);N.h[c]=b;N.P.push(b);return b};N.remove=N.j=N.getAll=
N.N=function(){"ga"!=gb&&J(49);var a=O[gb];if(!a||42!=a.answer){N.L=a&&a.l;N.loaded=!0;var b=O[gb]=N;X("create",b,b.create);X("remove",b,b.remove);X("getByName",b,b.j,5);X("getAll",b,b.getAll,6);b=pc.prototype;X("get",b,b.get,7);X("set",b,b.set,4);X("send",b,b.send);X("requireSync",b,b.ma);b=Ya.prototype;X("get",b,b.get);X("set",b,b.set);if("https:"!=M.location.protocol&&!Ba){a:{b=M.getElementsByTagName("script");for(var c=0;c<b.length&&100>c;c++){var d=b[c].src;if(d&&0==d.indexOf("https://www.google-analytics.com/analytics")){b=
!0;break a}}b=!1}b&&(Ba=!0)}(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc.prototype;C("linker",Dc);X("decorate",b,b.ca,20);X("autoLink",b,b.S,25);C("displayfeatures",fd);C("adfeatures",fd);a=a&&a.q;ka(a)?Z.D.apply(N,a):J(50)}};N.da=var da=N.N,Nd=O[gb];Nd&&Nd.r?da():z(da);z(;})(window);