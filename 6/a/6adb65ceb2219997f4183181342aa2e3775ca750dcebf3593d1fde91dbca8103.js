(function() {var aa="function"==typeof Object.defineProperties?Object.defineProperty:h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;ar da=0;(var n=h,p=["Promise"],q=0;q<p.length-1;q++){var t=p[q];t in n||(n[t]={});n=n[t]}
var ha=p[p.length-1],u=n[ha],v=);v!=u&&null!=v&&aa(n,ha,{configurable:!0,writable:!0,value:v});/*
 Copyright 2019 Glance Networks, Inc.
*/
var ia=["4","17","0","31"].slice(0,3).join(".");int8Array.prototype.slice||(Uint8Array.prototype.slice=;
ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=function(a,b){void 0===a&&(a=0);void 0===b&&(b=this.byteLength);a=Math.floor(a);b=Math.floor(b);0>a&&(a+=this.byteLength);0>b&&(b+=this.byteLength);a=Math.min(Math.max(0,a),this.byteLength);b=Math.min(Math.max(0,b),this.byteLength);if(0>=b-a)return new ArrayBuffer(0);var c=new ArrayBuffer(b-a),d=new Uint8Array(c),e=new Uint8Array(this,a,b-a);d.set(e);return c});
var x=navigator.userAgent.toLowerCase(),ja=x.match(/(edge)[\s\/:]([\w\d\.]+)?/)||x.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||x.match(/(rv):([\w\d\.]+)/)||[null,"unknown",0];"rv"===ja[1]&&(ja[1]="ie");/*
 Copyright 2017 Glance Networks, Inc.
*/
function ka(a){for(var b=new Date,b=b.getUTCFullYear()+"/"+(b.getUTCMonth()+1)+"/"+b.getUTCDate()+" "+w(b.getUTCHours())+":"+w(b.getUTCMinutes())+":"+w(b.getUTCSeconds())+" ",c=0;c<a.length;c++)b+=("object"===typeof a[c]?JSON.stringify(a[c]):a[c])+" ";return b}/*
 Copyright (c) 2018 Glance Networks, Inc.
*/
var z=z||{};window.GLANCE=window.GLANCE||{};window.GLANCE.VERSION="4.17.0.31";window.GLANCE.PATCH="";var A=navigator.userAgent.toLowerCase(),la=navigator.platform.toLowerCase(),B=A.match(/(edge)[\s\/:]([\w\d\.]+)?/)||A.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||A.match(/(rv):([\w\d\.]+)/)||[null,"unknown",0];"rv"===B[1]&&(B[1]="ie");
var C={extend:Function.prototype.extend,name:"version"==B[1]?B[3]:B[1],version:"ie"==B[1]&&document.documentMode||parseFloat("opera"==B[1]&&B[4]?B[4]:B[2]),w:{name:A.match(/ip(?:ad|od|hone)/)?"ios":(A.match(/(?:webos|android)/)||la.match(/mac|win|linux/)||["other"])[0]},S:{W:!!document.evaluate,U:!!window.runtime,query:!!document.querySelector,json:!!window.JSON},T:{}};
document.documentMode&&window.XDomainRequest?(C.name="ie",C.version=document.documentMode):window.navigator&&navigator.appVersion&&-1!=navigator.appVersion.indexOf("MSIE 7.")&&(C.name="ie",C.version="7");C[C.name]=!0;C[C.name+parseInt(C.version,10)]=!0;C.w[C.w.name]=!0;
if("undefined"!==typeof window.Prototype&&1.7>parseFloat(window.Prototype.Version.substr(0,3))&&"undefined"!==typeof Array.prototype.toJSON)var D=void 0===D&&(D=;
function na(a){var b={},c;z.P?c=new E(a):(C.ie9&&"http:"===window.location.protocol&&(b.protocols_whitelist=["iframe-eventsource","iframe-htmlfile"]),c=new SockJS(a,"",b));c.o=0;c.G=c.C=ma(c);c.onclose=c.onheartbeat=return c}
unction E(a){this.readyState=SockJS.CONNECTING;this.a=Math.round(1E6*Math.random());H=H||{};H[this.a]=this;F({from:"GSockJSProxy",sockid:this.a,cmd:"open",url:a})}var H;E.prototype.send=E.prototype.close=
unction oa(a){var b=a.func.split(".");if("GLANCE"!==b[0])J("ERR_BADINVOKE:"+b[0]);else{for(var c=window.GLANCE,d=1;d<b.length;d++)if(c=c[b[d]],!c){J("ERR_UNDEFINVOKE:"+b[d]);return}a.args=a.args||{};a.args.remote=!0;c(a.args)}}function K(a){z.P?this.f=new L(a):this.a=this.g();this.response=null;this.type=a}K.prototype.g=
window.Sarissa&&Sarissa._SARISSA_IS_IE&&!(new window.XMLHttpRequest).withCredentials&&!window.XDomainRequest&&(K.prototype.g=;K.prototype.abort=
K.prototype.onreadystatechange=.prototype.getResponseHeader=K.prototype.get=
function N(a,b,c,d,e,g,f){a.url=b;a.onsuccess=void 0!==g?g:function(){};a.b=void 0!==f?f:function(){};a.method=a.method||"POST";if(a.f)qa(a.f,b,c,d,e,g,f);else{g=a.m||("JSON"===a.type?"application/json; charset=utf-8":"application/x-www-form-urlencoded; charset=utf-8");var m;"string"===typeof c?m=c:c instanceof Blob?(g=c.type,m=c):c&&(m="JSON"===a.type?D(c):"data="+D(c));C.safari&&a.j&&(a.h=window.setTimeout(bind(a),
a.j));a.a.onreadystatechange=function(){a.onreadystatechange()};try{a.a.open(a.method,b,d),void 0!==a.i&&a.a.setRequestHeader("Accept",a.i),void 0!==a.a.setRequestHeader&&"GET"!==a.method&&a.a.setRequestHeader("Content-type",g),a.c&&a.c.K()&&a.a.setRequestHeader("Authorization","Bearer "+a.c.K()),a.a.withCredentials=e,a.a.send(m)}catch(r){M(a.method+" to "+b+" failed with: "+r.toString()),a.b(!1,r.toString())}}}function L(a){this.type=a}
.prototype.abort=function O(a){this.name=a}prototype.get=function ta(a){var b=localStorage.getItem(a.name+"_exp");if(!b)return!1;b=new Date(b);return b<new Date?(localStorage.removeItem(a.name),localStorage.removeItem(a.name+"_exp"),!1):!0}
function P(a){this.a=a.document;this.b=a;var b=[["hidden","visibilitychange"],["mozHidden","mozvisibilitychange"],["webkitHidden","webkitvisibilitychange"],["msHidden","msvisibilitychange"],["oHidden","ovisibilitychange"]];for(a=0;a<b.length;a++)if(b[a][0]in document){this.c=b[a][0];this.f=b[a][1];break}}
function va(a,b){var c=[["src","//www.glancecdn.net/cobrowse/js/sockjs1.0.2.min.js"]],d=a.a.createElement("script");b&&d.addEventListener("load",b);d.setAttribute("type","text/javascript");d.setAttribute("charset","UTF-8");for(var e=0;e<c.length;e++)d.setAttribute(c[e][0],c[e][1]);a.a.head.appendChild(d)}prototype.head=
P.prototype.scrollTo=P.prototype.addEventListener=function(a,b,c){this.a.addEventListener(a,b,c)};P.prototype.removeEventListener=function(a,b,c){this.a.removeEventListener(a,b,c)};prototype.addEventListener=function(a,b,c){this.element.addEventListener(a,b,c)};R.prototype.removeEventListener=
.prototype.moveTo=ction Ca(a,b){a.l="undefined"===typeof WebSocket;a.a={};a.a.ws="www.glance.net";a.a.site="production";a.g=new P(window);I(Ba(),a.a);I(b,a.a);delete a.a.presenceserver;a.j=[];a.f=T;a.m=new O("glance_presence");var c=sa(a.m);c&&(a.c=c.directserver)}var T=1;S.prototype.s=function(){};
.prototype.u=
function V(a){y("connecting to "+a.c);var b=!1;a.l&&!window.SockJS?va(a.g,function(){b||(b=!0,window.SockJS?V(a):y("ERR_NOSOCKJS"))}):(a.b&&a.b.close(),a.b=Fa(a),a.b.O=a.c,a.b.onopen=function(){a.b.v({type:"connect",authorization:void 0,groupid:a.a.groupid,visitorid:a.a.visitorid,version:ia});a.j.forEach(;a.j=[];a.f=3},a.b.F=function(b){y("received:"+D(b));if(a.b){var c=b.mtype||b.type,e=b.data;switch(c){case "connected":if(a.a.nokeepalive)break;a.h||(a.h=window.setInterval(
1E3*b.keepalive));break;case "invoke":"visitor"===a.R&&oa(e);break;default:if(a["on"+c])a["on"+c](e)}}},a.b.onclose=a.b.onerror=function(b){a.b===this&&(a.l=!0,a.b.onclose(b))})}
function Da(a,b,c,d){function e(a){var b=a&&(a.directserver||a.direct);b&&(f.c=b,a.httpsport&&(f.c+=":"+a.httpsport),f.s());f.b&&f.c!=f.b.O&&V(f);if(d&&d.onsuccess)d.onsuccess(a)}ar f=a,m=new K("JSON");m.c=void 0;m.method=c;y(b,JSON.stringify(d));(function(a){if(f.a.presenceserver)return a();var b=new O("glance_visitor_settings_"+f.a.groupid+"_"+f.a.site),c=sa(b);if(c)return f.a.presenceserver=c.presenceserver,
f.a.presenceserver||y("PRES_DISABLED (from cache)"),a();var c=new K("JSON"),d="https://"+f.a.ws+"/services/authorizationservice/GetVisitorSettings3?groupid="+f.a.groupid+"&site="+f.a.site+"&service=presence";c.method="GET";N(c,d,null,!0,!1,function(c){f.a.presenceserver=c.presenceUrl;f.a.presenceserver||y("PRES_DISABLED");var d={};d.presenceserver=f.a.presenceserver;d.presencesettings=c;ra(b,d);ua(b,1440);return a()},})(}function Ia(a){a.b&&a.b.close();Ga(a)}unction Ja(a,b){y("sending",b.type,a.f);3===a.f?a.b.v(b):(a.j.push(b),a.connect())}
S.prototype.connect=function(){if(!this.a.visitorid)y("CONN_NOVISITORID");else if(this.f===T){this.f=2;var a=this;this.onscaledown=this.c?V(this):this.u({onsuccess:onfail:)}};S.prototype.connect=S.prototype.connect;S.prototype.disconnect=S.prototype.disconnect=S.prototype.disconnect;
.prototype.H=S.prototype.fire=S.prototype.H;function W(a){Ca(this,a);this.R="visitor";this.g=new P(window);var b=this;xa("addEventListener",window,"focus",void 0);wa(this.g,function(){y("visibility:",Q(b.g)?"hidden":"visible");if(3===b.f&&!b.i){var a={type:"visibility"};a.data={visibility:Q(b.g)?"hidden":"visible"};Ja(b,a);Q(b.g)&&Ia(b)}});W.instance=this}var Ka=W,X=["GLANCE","Presence","Visitor"],Y=this;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);
for(var Z;X.length&&(Z=X.shift());){var La;if(La=!X.length)La=void 0!==Ka;La?Y[Z]=Ka:Y[Z]?Y=Y[Z]:Y=Y[Z]={}}W.prototype=new S;W.prototype.s=function(){var a={};a.directserver=this.c;ra(this.m,a);ua(this.m,20)};
W.prototype.A=function(a){if(this.a.visitorid){var b={};I(this.a,b,["groupid","visitorid"]);var c={},d;for(d in this.a)d.indexOf("user-")||(c[d.substring(5)]=this.a[d]);c.url=window.location.href;c.browser=C.name;c.browserver=C.version;c.platform=C.w.name;(a=a&&a.data)&&I(a,c);b.data=c;this.i||(c={type:"presence"},c.data=b.data,Ja(this,c),this.B=!0)}else y("PRES_NOVISITORID")};W.prototype.presence=W.prototype.A;
.prototype.u=W.prototype.onblur=var Ma=!1;ar Oa=new P(window);
Oa.b.addEventListener&&(document.readyState.match(/complete/)?Na():(Oa.b.addEventListener("load",Na),Oa.a.addEventListener("DOMContentLoaded",Na,!1)));}).call(window);
