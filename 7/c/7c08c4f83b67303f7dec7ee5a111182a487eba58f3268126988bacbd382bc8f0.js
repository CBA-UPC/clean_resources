this._D=this._D||{};(function(_){var window=this;
try{
_.A("Y6bHqe");
var tTh=function(a){var b=new Map,c=[];a=_.n(a);for(var d=a.next(),e={};!d.done;e={Dmb:void 0},d=a.next())d=d.value,e.Dmb=d[0],c.push(d[1].then(e)));return Promise.all(c).then(function(){return b})},uTh=function(a){var b=new Map;a=_.n(a.entries());for(var c=a.next(),d={};!c.done;d={Aea:void 0},c=a.next()){var e=_.n(c.value);c=e.next().value;e=e.next().value;d.Aea={status:0};b.set(c,d.Aea);e.then(function(f){return function(h){f.Aea.status=1;f.Aea.value=
h}}(d),function(f){return (d))}return b},vTh=function(a){for(var b=new Map,c=_.n(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.set(d,a[d]);return b},wTh=function(){var a;return _.zi(function(b){if(1==b.H)return"serviceWorker"in _.ba.navigator&&"https:"===_.ba.location.protocol?null!==_.ba.navigator.serviceWorker.controller?b.return(!0):_.qi(b,_.ba.navigator.serviceWorker.getRegistrations(),2):b.return(!1);a=b.O;return b.return(a.some(function(c){return(c.installing||
c.active||c.waiting)&&_.ba.location.href.startsWith(c.scope)}))})},xTh=_.P(xTh,_.v);
var yTh=zTh=ATh={v_c:"ns",YQc:"fs",n2c:"rs",m2c:"re",TYc:"jl",UYc:"jp",ASc:"ipls",zSc:"iple",zFc:"afrc",CLc:"csil",uKc:"cov",QFc:"bi",AFc:"ai",RQc:"feis",QQc:"feie",BFc:"as",CFc:"asc",r8c:"upl_s",s8c:"upr",SQc:"fhd",PQc:"fbn",u2c:"rdr",pRc:"frd_s",oRc:"frd_e",x_c:"nprir",w_c:"npi",OQc:"fbavc",DSc:"ivr",FFc:"dmls",EFc:"dmlc",BSc:"ivlc",e0c:"oar",u0c:"pst",b0c:"ol",P1c:"qac",G8c:"vri",E8c:"vrc",ySc:"ill",HRc:"fi",
R1c:"qatc",CZc:"lcr",eQc:"esd"},BTh={A1c:"pps",z1c:"ppc",w1c:"paws",v1c:"pawc",y1c:"pawis",x1c:"pawic",F1c:"pwls",E1c:"pwlc",D1c:"pswls",C1c:"pswlc"},CTh=new _.Ym("Timing"),DTh=new _.Ws(CTh,"LsrkH",91396),ETh=new _.Ws(CTh,"VmDTAb",91397),FTh=new _.Ws(CTh,"AXLqyd",91398),GTh=new _.Ws(CTh,"V0Q84e",91025),HTh=new _.Ws(CTh,"BDfcjf",91146);var ITh=_.bi(1),JTh=function(a){this.appContext=a;this.O=null;this.H=a.get(_.Cv);this.Cb=_.Tg.getService(a);this.Ec=_.pP(a);this.Iy=a.get(_.Um);this.V=Promise.resolve(_.jh(_.VXa,a))};
JTh.prototype.report=function(a){var b=this,c=a.getPendingTicks();Object.keys(c).forEach(;var d=vTh(c);this.O=uTh(d);KTh(this);return Promise.all(Object.values(c)).then(function(){b.O=null;for(var e=a.getReportData(),f=new Map,h=_.n(Object.keys(e)),k=h.next();!k.done;k=h.next()){k=k.value;var l=b.Es(k);null!=l&&(f.has(l)||f.set(l,{}),f.get(l)[k]=e[k])}e=new Map;f=_.n(f);for(h=f.next();!h.done;h=f.next())h=h.value,k=h[0],e.set(k,LTh(b,k,h[1],a));return tTh(e)}).then(function(e){e=
_.n(e.values());for(var f=e.next();!f.done;f=e.next())b.Cb.kq(f.value)}).catch(function(e){var f=null;"string"===typeof e?f=e:e instanceof Error&&(f=JSON.stringify({fileName:e.fileName,lineNumber:e.lineNumber,message:e.message,name:e.name,stack:e.stack}));f&&_.Mc("TickerReporter failed to send report: "+f,Error("rq"))})};
var KTh=function(a){a.Iy.H("uling").addCallback(function(){var b=MTh(a);if(null!=b){var c=_.Sg(a.Cb,a.appContext,HTh);c.DCa=b;a.Cb.kq(c)}})},MTh=function(a){if(null==a.O)return null;var b=a.O,c=[].concat(_.Ib(b.keys()));a=c.filter(function(d){return 0===b.get(d).status});c=c.filter(;return 0===a.length&&0===c.length?null:zTh(yTh(a),c)},LTh=function(a,b,c,d){if(b!==GTh)return Promise.reject(Error("sq`"+b));a=NTh(a,d,c);b=b.uO();if(null!=b){var e=d.getAugmentorsForImpression(b);
0<e.length&&(a=a.then(function(f){return Promise.all(e.map().then(}))}return a},NTh=function(a,b,c){var d=new _.Jkb,e=new _.Ukb;b=b.getTick("rs");for(var f=_.n(Object.keys(c)),h=f.next();!h.done;h=f.next()){h=h.value;var k=Math.floor(Number(c[h]));switch(h){case "fs":_.Ng(d,1,k);break;case "rs":_.Mg(d,35,k);break;case "re":_.Ng(d,2,k);break;case "jl":_.Ng(d,3,k);break;case "jp":_.Ng(d,4,k);break;case "ipls":_.Ng(d,5,k);break;case "iple":_.Ng(d,6,k);break;
case "asc":_.Ng(d,7,k);break;case "upr":_.Ng(d,13,k);break;case "rdr":_.Ng(d,14,k);break;case "fbavc":_.Ng(d,15,k);break;case "ivr":_.Ng(d,16,k);break;case "dmlc":_.Ng(d,17,k);break;case "pst":_.K(_.Ng(d,8,k),18,_.ba._DRIVE_WTEI);break;case "ol":_.Ng(d,9,k);break;case "qac":_.Ng(d,10,k);break;case "vri":_.Ng(d,34,k);break;case "vrc":_.Ng(d,19,k);break;case "esd":_.Ag(d,41,k);break;case "pps":_.Ng(e,7,k);break;case "ppc":_.Ng(e,1,k);break;case "paws":_.Ng(e,9,k);break;case "pawc":_.Ng(e,3,k);break;
case "pawis":_.Ng(e,10,k);break;case "pawic":_.Ng(e,4,k);break;case "pwls":_.Ng(e,8,k);break;case "pwlc":_.Ng(e,2,k);break;case "pswls":_.Ng(e,11,k);break;case "pswlc":_.Ng(e,5,k);break;case "afrc":_.Mg(d,20,k);break;case "cov":b&&a.Cb.rs(DTh,b.getTickTimeUsec()/1E3,k/1E3);_.Mg(d,36,k);break;case "bi":b&&a.Cb.rs(ETh,b.getTickTimeUsec()/1E3,k/1E3);_.Mg(d,37,k);break;case "oar":_.ek(d,24,k);break;case "nprir":_.ek(d,26,k);break;case "npi":_.ek(d,23,k);break;case "qatc":_.ek(d,22,k);break;case "ill":_.Mg(d,
31,k);break;case "fi":b&&a.Cb.rs(FTh,b.getTickTimeUsec()/1E3,k/1E3);_.Mg(d,38,k);break;case "lcr":_.Ag(d,39,k)}}window._DRIVE_FPS&&0<_DRIVE_FPS.fpsMonitor.getElapsedTime()&&(c=_.wkb(_.ykb(_.xkb(new _.vkb,_DRIVE_FPS.fpsMonitor.getAverageFPS()),_DRIVE_FPS.fpsMonitor.getLowestFPS()),_DRIVE_FPS.fpsMonitor.getElapsedTime()),_.Q(d,_.vkb,30,c));c=[];c.push(OTh(a));c.push(PTh(a,d));return Promise.all([a.V].concat(_.Ib(c))).then(function(l){l=_.n(l).next().value.O(ITh);_.Cj(d,40,l);l=_.Sg(a.Cb,a.appContext,
GTh);l.DAa=d;l.WS=e;return l})},OTh=function(a){var b,c;return _.zi(function(d){if(1==d.H)return b=a.H.Ht,c=b.H,_.qi(d,wTh(),2);c.call(b,d.O);_.ri(d)})},PTh=function(a,b){return Promise.resolve(a.Ec.fla().getState()).then(function(c){c=JSON.parse(c);var d=c.m_if;null!=d&&_.K(a.H.Ht,3,d);d=c.m_il;null!=d&&_.K(a.H.Ht,2,d);d=c.m_ps;null!=d&&_.K(a.H.Ht,4,d);d=c.m_pl;null!=d&&_.K(a.H.Ht,11,d);d=c.cs_cs;null!=d&&(d=Number(parseFloat(d).toPrecision(2)),_.Ng(a.H.Ht,7,2E5<d?2E5:d));_.K(a.H.Ht,13,void 0!==
c.csw_cc);c.hasOwnProperty("csw_ac")&&(d=new xTh,d=_.Ng(d,1,c.csw_cc),d=_.Ng(d,2,c.csw_ac),c=_.Ng(d,3,c.csw_mcc),_.Q(b,xTh,33,c))})};JTh.prototype.Es=function(a){for(var b=_.n([ATh,BTh]),c=b.next();!c.done;c=b.next()){c=c.value;for(var d in c)if(c[d]===a)return GTh}return null};_.ly({id:_.Dob,Zb:JTh});
_.C();
}catch(e){_._DumpException(e)}
})(this._D);
// Google Inc.