if (typeof gemius_hcconn != 'undefined' && typeof gemius_hcconn.fpdata != 'undefined' && (gemius_hcconn.fpdata=='' || gemius_hcconn.fpdata[0]=='-')) {
	gemius_hcconn.fpdata = "KLm6Hyrq3yfiBrllc9w21M48l8WVu9LCY2m1.cew2CH.u7|1705988247";
	gemius_hcconn.fpcdomain = 'i.pl';
}
d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new _.$d(c.join(""),_.Qm)},Tn=function(a){return a?_.Kd(a)||_.Jd(Sn):null},Vn=function(a){a?(a?(a=_.Dd(_.Fc(a,3)),a=null===a||void 0===a?null:new _.$d(a,_.Qm)):a=null,a=a||Rn(Un)):a=null;return a},Wn=function(a){"function"===typeof a&&a()},Xn=function(a,b,c){a.addEventListener&&a.addEventListener(b,c)},Yn=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)},Zn=function(a,
b,c){var d=function(e){document.body?(document.body.appendChild(a),Wn(b)):0<e?_.t.setTimeout(function(){d(e-1)},100):Wn(c)};d(3)},$n=function(a,b){var c=-1,d=a.indexOf(b);0<=d&&(c=Number(a.substring(d+b.length,a.indexOf(".",d))));return isNaN(c)?-1:c},ao=function(a){this.j=_.v(a)};_.A(ao,_.J);var bo=function(a){this.j=_.v(a)};_.A(bo,_.J);var co=function(a){this.j=_.v(a)};_.A(co,_.J);var eo=function(a){this.j=_.v(a)};_.A(eo,_.J);var fo=function(a){this.j=_.v(a)};_.A(fo,_.J);
var go=function(a){var b=new _.se;return _.Ic(b,12,_.te,a)},ho=function(a){this.j=_.v(a)};_.A(ho,_.J);var Sn=_.Md([""]),Un=_.Md([""]);var io=function(a){this.g=a},jo=function(a,b){var c=new fo,d=new co;b=_.L(d,1,b);c=_.F(c,2,b);c=go(c);a.g.I(c)},ko=function(a){var b=new fo;var c=new co;var d=new bo;var e=new ao;d=_.F(d,1,e);c=_.F(c,3,d);b=_.F(b,2,c);b=go(b);a.g.I(b)};var lo=function(a,b,c,d){this.o=a;this.g=c;this.l=_.P(b,4)||_.t.location.hostname;this.h=new io(d);this.i=new _.Hn(d,new _.Lg(_.yk(this.g)))};
lo.prototype.start=function(a,b){switch(a){case 1:jo(this.h,1);break;case 3:jo(this.h,3);break;case 2:jo(this.h,2);break;default:var c=this.i;a=_.D(this.g,_.pe,1);var d=this.g.getDefaultConsentRevocationText(),e=this.g.getDefaultConsentRevocationCloseText(),f=this.g.getDefaultConsentRevocationAttestationText(),g=this.l;_.Kn(c,0,0);_.Jn(c,a,d,e,f,g);b(null);return}c=_.Lc(_.pn(null!=(e=null==(d=_.zk(this.g))?void 0:_.Cb(d))?e:new _.Kc,a),6);(a=(a=_.df(this.o.document))&&null!=_.hb(_.Fc(a,2))?_.I(a,
2):null)&&1===a&&_.Em(c,10,!0);b(c)};var mo=function(){this.h=[]};mo.prototype.addEventListener=function(a,b){this.h.push(function(){a.call.apply(a,[b].concat(_.ha(_.gc.apply(0,arguments))))})};mo.prototype.g=function(){for(var a=_.gc.apply(0,arguments),b=this.h,c=0;c<b.length;c++)b[c].apply(b,_.ha(a))};var no=new Map([[0,1],[1,3],[2,2]]),oo=new Map([[0,1],[1,2],[2,3]]),po=function(a,b){this.u=a;this.s=b;this.o=new mo},qo=function(a,b){a.s.trace("Ad blocking detector "+a.g()+" signalled "+b);a.o.g(a.g(),b);var c=new eo;var d=no.has(a.g())?no.get(a.g()):0;c=_.L(c,1,d);b=oo.has(b)?oo.get(b):0;b=_.L(c,2,b);a=a.u;c=new fo;b=_.F(c,1,b);b=go(b);a.g.I(b)};po.prototype.addListener=function(a,b){this.o.addEventListener(function(c,d){a.call(b,c,d)})};var ro=function(a,b,c){this.i=0;this.g=new Map;this.ca=function(){b.call(c)};this.h=a.length;if(0<this.h)for(var d=0;d<a.length;d++)this.g.set(a[d],!1);else this.ca()};ro.prototype.notify=function(a){!1===this.g.get(a)&&(this.g.set(a,!0),++this.i>=this.h&&this.ca())};var so=function(){this.g=null;this.h=new mo},uo=function(a,b){for(var c=new ro(b.map(function(e){return e.g()}),function(){to(a,1)},a),d=0;d<b.length;d++)b[d].addListener(function(e,f){1===f?0===e?to(a,2):to(a,3):c.notify(e)},a)},to=function(a,b){null===a.g&&(a.g=b,a.h.g(b))},vo=function(a,b){a.h.addEventListener(function(c){b&&b.call(void 0,c)})};var wo=function(a,b){this.i=a;this.s=b;this.g=0;this.h=[];this.o=this.l=null},xo=function(a){if(-1!==a.g&&a.g>=a.s)a.o();else{a.g++;for(var b=0;b<a.h.length;++b){var c=a.h[b];if(0===c.offsetHeight||0===c.offsetWidth){a.l(c);return}}_.t.setTimeout(function(){xo(a)},a.i)}},Ko=function(a,b,c){a.l=b;a.o=c;_.t.setTimeout(function(){xo(a)},a.i)};var Lo=function(a,b,c,d,e){po.call(this,d,e);this.l=c;this.i=new wo(a,b)};_.A(Lo,po);Lo.prototype.g=function(){return 0};Lo.prototype.h=function(){var a=this,b=Mo(this);Zn(b,function(){a.i.h.push(b);Ko(a.i,function(){qo(a,1);Yn(b)},function(){qo(a,0);Yn(b)})},function(){qo(a,2)})};
var Mo=function(a){var b=document.createElement("div");b.className=a.l;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left="-10000px";b.style.top="-"+Math.floor(9990+20*Math.random())+"px";b.style.zIndex="-"+Math.floor(9990+20*Math.random())+"px";return b};var No=function(a,b,c,d,e){po.call(this,d,e);this.C=a;this.i=b;this.l=c;this.A=new _.ge(document)};_.A(No,po);No.prototype.g=function(){return 2};var Oo=function(a,b,c,d){if(null===b)Wn(d);else{var e=_.ie(a.A.g,"IMG");e.style.display="none";Zn(e,function(){e.src=b;Xn(e,"load",function(){Wn(c);Yn(e)});Xn(e,"error",function(){Wn(d);Yn(e)})},function(){qo(a,2)})}},Qo=function(a,b,c){if(a.i)try{Po(a.C,a.i,b,c)}catch(d){Oo(a,a.l,b,c)}else Oo(a,a.l,b,c)};
No.prototype.h=function(){var a=this;Qo(this,function(){qo(a,0)},function(){qo(a,1)})};var Ro=function(a,b,c,d,e){po.call(this,d,e);this.i=a;this.l=b;this.A=c};_.A(Ro,po);Ro.prototype.g=function(){return 1};var So=function(a,b,c){Po(a.i,a.l,function(){_.t[a.A]?b():c()},function(){c()})};Ro.prototype.h=function(){var a=this;So(this,function(){qo(a,0)},function(){qo(a,1)})};var Vo=function(a,b,c,d,e,f){var g=new To,h=new Uo;this.C=a;this.G=b;this.g=c;this.A=d;this.s=e;this.l=g;this.o=h;this.i=f;this.u=new so;new _.Lg(_.yk(this.s));this.h=new io(f)},Yo=function(a){Wo(a.l,_.P(a.G,1));Xo(a.l,function(){})},Zo=function(a){a=_.q(a);for(var b=a.next();!b.done;b=a.next())b.value.addListener(function(){})},$o=function(a){var b=new Lo(_.kf(a.g,4),_.kf(a.g,5),_.P(a.g,1),a.h,a.i),c=new Ro(a.o,Tn(_.D(a.g,_.pe,6)),_.P(a.g,7),a.h,a.i),d=new No(a.o,Tn(_.D(a.g,_.pe,2)),Vn(_.D(a.g,ho,
3)),a.h,a.i);a=[b,c,d];Zo(a);return{dc:a,Cc:function(){b.addListener(function(e,f){if(0===f||2===f)c.h(),d.h()});b.h()}}};Vo.prototype.run=function(a){if(JSON)if(_.t.frameElement){ko(this.h);var b=!0}else b=!1;else ko(this.h),b=!0;b||(Yo(this),ap(this.o,this.l),bp(this,a))};var bp=function(a,b){var c=new lo(a.C,a.A,a.s,a.i);vo(a.u,function(e){c.start(e,b)});var d=$o(a);uo(a.u,d.dc);d.Cc()};var cp=function(a){this.j=_.v(a)};_.A(cp,_.J);var dp=function(a){this.j=_.v(a)};_.A(dp,_.J);var ep=function(a){this.j=_.v(a)};_.A(ep,_.J);var fp=function(a){this.j=_.v(a)};_.A(fp,_.J);var gp=_.x(fp);var To=function(){this.g=null;this.h=new mo},Wo=function(a,b){a.g=new RegExp("^https?://"+b+"/.*$");var c=_.t.onerror;_.t.onerror=function(d,e,f){a.g&&a.h.g(a.g.test(e),e,d);c&&c(d,e,f)}},Xo=function(a,b){a.h.addEventListener(b)};var Uo=function(){this.g=new Map;this.h=new _.ge(document)},ap=function(a,b){Xo(b,function(c,d,e){c||!d||"Script error"!==e&&"Syntax error"!==e||a.g.set(d,new Date)})},hp=function(a,b,c,d){var e=new Date;Xn(b,"load",function(){var f=_.t.navigator.userAgent;var g=$n(f,"MSIE ");f=0<=g?g:0<=f.indexOf("Trident/")?11:$n(f,"Edge/");-1!==f&&11>=f&&a.g.has(b.src)&&a.g.get(b.src)>=e?Wn(d):Wn(c)});Xn(b,"error",function(){Wn(d)})},Po=function(a,b,c,d){if(null===b)Wn(d);else{var e=_.ie(a.h.g,"SCRIPT");hp(a,e,
function(){Wn(c);Yn(e)},function(){Wn(d);Yn(e)});e.async=!0;_.um(e,b);a.h.g.getElementsByTagName("HEAD")[0].appendChild(e)}};var ip=function(){};ip.prototype.run=function(a,b,c){var d,e;return _.B(function(f){d=gp(_.ym(b));e=new Vo(a,_.D(d,dp,1),_.D(d,ep,2),_.D(d,cp,3),_.D(d,_.xk,7),c);return f.return(new Promise(function(g){e.run(function(h){g({da:_.K(h)})})}))})};_.Bk(3,new ip);
}catch(e){_._DumpException(e)}
}).call(this,this.default_ContributorServingResponseClientJs);
// Google Inc.

//# sourceURL=/_/mss/boq-content-ads-contributor/_/js/k=boq-content-ads-contributor.ContributorServingResponseClientJs.es.1fGtZnY0whY.es5.O/d=1/exm=kernel_loader,loader_js_executable/ed=1/rs=AJlcJMz5uDX-52hIui7f-OmmJJg3ZgDv7w/m=ad_blocking_detection_executable
__googlefc.fcKernelManager.run('\x5b\x5b\x5b3,\x22W1siaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20iXSxbInJlY3RhbmdsZS1hZC1jb250YWluZXIgZ2FsbGVyeS1hZC1ob2xkZXIgaG9tZS10b3Atb2YtcGFnZV9fdG9wLWJveC1hZCBzaWRlYmFyLWFkLWJveCBzcG9uc29yZWRsaW5rcy1hcnRpY2xlIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL29zZC5qcz9mY2RcdTAwM2R0cnVlIl0sW251bGwsbnVsbCwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9mYXZpY29uLmljbyJdLDEwMCw1LFtudWxsLG51bGwsbnVsbCwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vZi9BR1NLV3hVeFlXTjlDYlV4ak1SZjZLaU1hVUFQNGhZLVNIdTlIaDhnYW9kTVUyZHJNRldkVFhZV2thSmxNQTJYalM3NE5Wek1NbG5GQ213Y3NmaUNvSnI5WDg0anMxMkt1aWVEbjFsOHJFYkRCcFNhVEMzZTlKdW5MTGxUaE1WSmprTnZrUWtjaU1sb3NTc3pQbS1WLVFzdmdYSlNnVkRLT2FTcl96ZWdDV1BtMnhRbU55VGZUNTdHVkdZRTVpWUUvXy9hZHNlcnZlcnMtL2FkLzYwMC0vb2FzLmFzcHgvYmlnYWQuL2FkYnl0ZXMuIl0sImRmMTgxZWQ5LTM5YmQtNDc5Ny04MGQ3LWEyOWJkYmZlMDc4ZiIsW251bGwsbnVsbCwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vaW1nL3B4LmdpZiJdXSxbbnVsbCxudWxsLG51bGwsImkucGwiXSxudWxsLG51bGwsbnVsbCxbW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9mL0FHU0tXeFhfa3ZUdUNJXzhxVkt0eTdxMjdaMDZ0cEUxbTZkMTl4TEdpRjd2TUFLN3o5a2c5Z0t6dVNFUS1la1MzR2tvZ3VJRGsydkNBNTREaVhNbXBsYWZDYTJHX2hGNnI0QzhFS2R4YnpONHl2RWVPX3VQOE43Q19vcEhjUTFGTjYtZEhfSkVNZWRDckFcdTAwM2RcdTAwM2QiXSxudWxsLG51bGwsW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9lbC9BR1NLV3hXRlZBRVdtR0tRc3VOWDFLZ0cxY1o2MW1vcS1ncTQ5ZnJfSktkeFktYlBNeENDS2czeW5ZeVNBU29hX0xuU1d0V1RvR0lTQlhROVZ2b0E2RkQ4b1diaEpfUE81MjRIN2lscExkdWpkQUVtenVucHplQ0tyQnZQTEZkM3FqdnA0WXcwSVg2eGVnXHUwMDNkXHUwMDNkIl0sW251bGwsbnVsbCxudWxsLCJodHRwczovL2Z1bmRpbmdjaG9pY2VzbWVzc2FnZXMuZ29vZ2xlLmNvbS9mL0FHU0tXeFZENzMzTERHLWc4eHByRS13dlM4V01ocks0T0lWaTRvMFFxRlNUa0xCb3pXWmpaZzlrX0tZWThvdHNyX3NBcnFmT1pEUlprdlIyUFpxNWVqYXo3SnFBaVk1cUZyQWNzT1hkbnJtQVYtdHFmWFZlNWxTcXNPZmk0RzFzaW1xUXpqREptU0JJZXdcdTAwM2RcdTAwM2QiXSxbbnVsbCxbN11dLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiM2I4YTU2YWY3MWQ0OGI2MSIsbnVsbCxbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL18vQ29udHJpYnV0b3JTZXJ2aW5nV2ViU3dpdGNoYm9hcmRIdHRwL2pzZXJyb3IiXV1d\x22\x5d\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxVAdfX5R2KQb-OgBvG7tcUvppb-Py_PXhFs2yFE3UEsv3fFRwUIlgGcZ8oAGvEIwuVIq5VMma255d_PuSUC-mtHKS_xxfreq_ci0S9A2uate5K11n1dBMpakhXzWd49GamwYuJYRQ\\u003d\\u003d\x22\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxWity9wzMM0zZCJusgAjdx-h1Ueuc976rBWJDUqisHs1PLAVyEWZo7dGXGI86Iih5Sza6UdxXbcRT1Vs5A437iO92kGSeu981jdJiSD0-2i_gRC5i5KgCxfJQP_E304yEQufJa2Ug\\u003d\\u003d\x22\x5d\x5d');}