
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"5",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":2
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.driftt=window.drift=window.driftt||[];if(!a.init){if(a.invoked)return void(window.console\u0026\u0026console.error\u0026\u0026console.error(\"Drift snippet included twice.\"));a.invoked=!0;a.methods=\"identify config track reset debug show ping page hide off on\".split(\" \");a.factory=function(c){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(c),a.push(b),a}};a.methods.forEach(function(c){a[c]=a.factory(c)});a.load=function(a){var b=3E5,c=Math.ceil(new Date\/b)*b;b=\ndocument.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.crossorigin=\"anonymous\";b.src=\"https:\/\/js.driftt.com\/include\/\"+c+\"\/\"+a+\".js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}}}();drift.SNIPPET_VERSION=\"0.3.1\";drift.load(\"ehzk8g7r743f\");\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"www"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"commscon.cision.co.uk"
    }],
  "rules":[
    [["if",0],["add",0,1,2]],
    [["if",0,1],["block",2]],
    [["if",0,2],["block",2]]]
},
"runtime":[
[],[]
]



};
var aa,da=this||self,ea=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=la=ma=oa=pa=qa=sa=ta=ua=va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=xa=ya=ra=ra.prototype.set=ra.prototype.get=ra.prototype.contains=
var za=Ca=Da=Ea=Fa=/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=Ia=Ja=f=var ib;
var jb=[],kb=[],lb=[],mb=[],nb=[],pb={},qb,rb,sb,tb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ub=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!pb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?pb[c](e):ib(c,e,b)},wb=xb=
function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=pb[b];return c?c.priorityOverride||0:0},vb=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(vb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=jb[g];if(!h||b.Ac(h))return;c[g]=!0;try{var k=wb(h,b,c);k.vtp_gtmEventId=b.id;d=ub(k,b);sb&&(d=sb.Ff(d,k))}catch(w){b.Yd&&b.Yd(w,Number(g)),d=!1}c[g]=!1;return d;case "map":d=
{};for(var l=1;l<a.length;l+=2)d[vb(a[l],b,c)]=vb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=vb(a[n],b,c);rb&&(m=m||p===rb.vb);d.push(p)}return rb&&m?rb.If(d):d.join("");case "escape":d=vb(a[1],b,c);if(rb&&ma(a[1])&&"macro"===a[1][0]&&rb.jg(a))return rb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ka[a[t]]&&(d=Ka[a[t]](d));return d;case "tag":var q=a[1];if(!mb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Kd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=yb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},yb=var zb=function(){var a=function(b){return{toString:function(){return b}}};return{cd:a("convert_case_to"),dd:a("convert_false_to"),ed:a("convert_null_to"),fd:a("convert_true_to"),gd:a("convert_undefined_to"),bh:a("debug_mode_metadata"),ia:a("function"),Se:a("instance_name"),Te:a("live_only"),Ue:a("malware_disabled"),Ve:a("metadata"),eh:a("original_vendor_template_id"),We:a("once_per_event"),yd:a("once_per_load"),zd:a("setup_tags"),Ad:a("tag_id"),Bd:a("teardown_tags")}}();var Ab=null,Db=Cb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ab(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Ab(e[g]);if(null===h)return null;
if(h)return!1}return!0},Bb=/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var Gb="floor ceil round max min abs pow sqrt".split(" "),Hb=0;Hb<Gb.length;Hb++)Math.hasOwnProperty(Gb[Hb]);var u=window,C=document,Ib=navigator,Jb=C.currentScript&&C.currentScript.src,Kb=Lb=Mb=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Lb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=da.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Nb=Ob=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Lb(c,b);void 0!==a&&(c.src=a);return c},Pb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=d.src=a;return d},D=Qb=G=Rb=Sb=Tb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ub=Vb=var H={Yb:"event_callback",La:"event_timeout",V:"gtag.config",O:"allow_ad_personalization_signals",R:"cookie_expires",Ka:"cookie_update",va:"session_duration"};var jc=/[A-Z]+/,kc=/\s/,lc=function(a){if(ka(a)&&(a=xa(a),!kc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(jc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},nc=
var oc={},pc=null,qc=Math.random();oc.m="GTM-TX4FJT8";oc.zb="9i1";var rc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+oc.m+"&cv=5",yc={},zc={},Ac=var Bc={},Dc=Ec=
var Fc=function(){return"&tc="+mb.filter(.length},Pc=function(){Gc&&(u.clearTimeout(Gc),Gc=void 0);void 0===Hc||Ic[Hc]&&!Jc||(Kc[Hc]||Lc.lg()||0>=Mc--?(Dc("GTM",1),Kc[Hc]=!0):(Lc.Gg(),Pb(Nc()),Ic[Hc]=!0,Oc=Jc=""))},Nc=function(){var a=Hc;if(void 0===a)return"";var b=Ec("GTM"),c=Ec("TAGGING");return[Qc,Ic[a]?"":"&es=1",Rc[a],b?"&u="+b:"",c?"&ut="+c:"",Fc(),Jc,Oc,"&z=0"].join("")},Sc=Tc="0.005000">
Math.random(),Qc=Sc(),Uc=Ic={},Jc="",Oc="",Hc=void 0,Rc={},Kc={},Gc=void 0,Lc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Gg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Mc=1E3,Vc=function(a,b){if(Tc&&!Kc[a]&&Hc!==a){Pc();Hc=a;Jc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Rc[a]="&e="+c+"&eid="+a;Gc||(Gc=u.setTimeout(Pc,500))}},Wc=function(a,b,c){if(Tc&&!Kc[a]&&b){a!==Hc&&(Pc(),Hc=a);var d=String(b[zb.ia]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Jc=Jc?Jc+"."+e:"&tr="+e;Gc||(Gc=u.setTimeout(Pc,500));2022<=Nc().length&&Pc()}};var Xc={},Yc=new ra,Zc={},$c={},dd={name:"dataLayer",set:get:reset:,cd=function(a,b){if(2!=b){var c=Yc.get(a);if(Tc){var d=ed(a);c!==d&&Dc("GTM",5)}return c}return ed(a)},ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:gd(d)},gd=
var jd=ad=bd=function(a){ta($c,function(b,c){Yc.set(b,c);f(ad(b,void 0),Zc);f(ad(b,c),Zc);a&&delete $c[b]})},kd=function(a,b,c){Xc[a]=Xc[a]||{};var d=1!==c?ed(b):Yc.get(b);"array"===Ha(d)||"object"===Ha(d)?Xc[a][b]=f(d):Xc[a][b]=d},ld=var md=function(){var a=!1;return a};var J=nd=function(){var a=Nb(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Dd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ed={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Fd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Hd=function(a){var b=cd("gtm.whitelist");b&&Dc("GTM",9);var c=b&&Fa(wa(b),Dd),d=cd("gtm.blacklist");d||(d=cd("tagTypeBlacklist"))&&Dc("GTM",3);
d?Dc("GTM",8):d=[];Gd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=oa(wa(d),"google")&&Dc("GTM",2);var e=d&&Fa(wa(d),Ed),g={};return function(h){var k=h&&h[zb.ia];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
oa(c,l[p])){Dc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=oa(e,k);if(q)t=q;else{var r=sa(e,l||[]);r&&Dc("GTM",10);t=r}}var v=!m||t;v||!(0<=oa(l,"sandboxedScripts"))||c&&-1!==oa(c,"sandboxedScripts")||(v=sa(e,Fd));return g[k]=v}},Gd=var Id={Ff:;var Jd={active:!0,isWhitelisted:,Kd=function(a){var b=pc.zones;!b&&a&&(b=pc.zones=a());return b};var Ld=!1,Md=0,Nd=[];r Qd=var Rd={},Sd={},Td=function(a,b,c,d){if(!Sd[a]||rc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Sd[a].tags.push(e)-1},Ud=var Yd=function(a,b,c){Sd[a]={tags:[]};ja(b)&&Wd(a,b);c&&u.setTimeout(Number(c));return Xd(a)},Wd=function(a,b){Rd[a]=Rd[a]||[];Rd[a].push(Ca()};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ca(function(){b++;d&&b>=c&&Vd(a)})},nf:function(){d=!0;b>=c&&Vd(a)}}};var Zd=function(){function a(d){return!la(d)||0>d?0:d}if(!pc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=la(dd.get("gtm.start"))?dd.get("gtm.start"):0;pc._li={cst:a(c-b),cbt:a(vc-b)}}};var ce=!1,de=ee=!1;
var ie=function(){},he=var ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var le=/:[0-9]+$/,me=pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ne(a.protocol)||ne(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(le,"").toLowerCase());var g=b,h,k=ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Dc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ne=oe=
qe=var we=function(a){};function ve(a,b){a.containerId=oc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ye(a,b,c,d){function e(){if(g[zb.Ue])k();else{var w=wb(g,c,[]),y=Td(c.id,String(g[zb.ia]),Number(g[zb.Ad]),w[zb.Ve]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=ya()-z;Wc(c.id,mb[a],"5");Ud(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=ya()-z;Wc(c.id,mb[a],"6");Ud(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Wc(c.id,g,"1");var A=function(B){var E=ya()-z;we(B);Wc(c.id,g,"7");Ud(c.id,y,"exception",E);x||(x=!0,k())};var z=ya();try{ub(w,c)}catch(B){A(B)}}}var g=mb[a],h=b.J,k=b.T,l=b.terminate;if(c.Ac(g))return null;var m=vb(g[zb.Bd],c,[]);if(m&&m.length){var n=m[0],p=xe(n.index,{J:h,T:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Kd?l:p}if(g[zb.yd]||g[zb.We]){var t=g[zb.yd]?nb:c.Pg,q=h,r=k;if(!t[a]){e=Ca(e);var v=ze(a,t,e);h=v.J;k=v.T}return return e}
 Fe=function(a,b){for(var c=[],d=0;d<mb.length;d++)if(a.cb[d]){var e=mb[d];var g=b.add();try{var h=xe(d,{J:g,T:g,terminate:g},a,d);h?c.push({oe:d,de:xb(e),Qf:h}):(De(d,a),g())}catch(l){g()}}b.nf();c.sort(Ee);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function De(a,b){if(!Tc)return;var c=c(a);}
var Ge=!1,He=function(a,b,c,d,e){if("gtm.js"==b){if(Ge)return!1;Ge=!0}Vc(a,b);var g=Yd(a,d,e);kd(a,"event",1);kd(a,"ecommerce",1);kd(a,"gtm");var h={id:a,name:b,Ac:Hd(c),cb:[],Pg:[],Yd:function(n){Dc("GTM",6);we(n)}};h.cb=Db(h);var k=Fe(h,g);
if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=mb[l];if(m&&!rc[String(m[zb.ia])])return!0}return!1};var Je=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.fb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.fb[h])return g.fb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Ke={},Le=["G"];Ke.pe="";var Me=Ke.pe.split(",");var Pe=function(a,b){Ne().register(a,b,void 0)},Qe=Re=Se={},Te=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.fb={};this.ee=null;this.Ud=!1},Ue=Oe=Ve=We=function(a,b,c,d){if(d.N){var e=
Ve(a,d.N),g=e.ee;if(g){var h=f(c),k=f(e.targetConfig[d.N]),l=f(e.containerConfig),m=f(e.fb),n=f(a.Pd),p=new Je(h,k,l,m,n);try{g(b,d.Ug,p)}catch(t){}}}};Oe.prototype.register=function(a,b,c){if(3!==Ve(this,a).status){Ve(this,a).ee=b;Ve(this,a).status=3;c&&(Ve(this,a).fb=c);var d=lc(a),e=Se[d.containerId];if(void 0!==e){var g=cd("gtm.uniqueEventId"),h=d.prefix,k=ya()-e;if(Tc&&!Kc[g]){g!==Hc&&(Pc(),Hc=g);var l=""+h+Math.floor(k);Oc=Oc?Oc+"."+l:"&cl="+l}delete Se[d.containerId]}this.flush()}};
Oe.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=lc(c),h;if(h=g){var k;if(k=1===Ve(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Ve(this,c).status=2,this.push("require",[],g.containerId),Se[g.containerId]=ya(),!md())){var m=encodeURIComponent(g.containerId);Mb(("http:"!=u.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.Xa.push(new Ue(a,e,c,b,d));d||this.flush()};
Oe.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ve(this,c.N).status&&!a)return;break;case "set":ta(c.Cb[0],;break;case "config":var d=c.Cb[0],e=!!d[H.tb];delete d[H.tb];var g=Ve(this,c.N),h=lc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.Ud&&e||We(this,H.V,d,c);g.Ud=!0;k?f(d,g.containerConfig):f(d,g.targetConfig[c.N]);break;case "event":We(this,
c.Cb[1],c.Cb[0],c)}this.Xa.shift()}};var Xe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},af=function(a,b,c,d){var e=Ye(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ze(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=Ze(e,c);return e[0]?e[0].id:void 0}};
function bf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Xe(b,e).indexOf(c)}
var ef=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=cf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!df(y,t)&&bf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!df(p,t)&&bf(m,a,l)}return k};function Ye(a,b){for(var c=[],d=Xe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var ff=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gf=/(^|\.)doubleclick\.net$/i,df=cf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;gf.test(e)||ff.test(e)||a.push("none");return a};var hf="".split(/,/),jf=null,kf={},lf={},mf,nf=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.Yb]&&(c.eventCallback=b[H.Yb]),b[H.La]&&(c.eventTimeout=b[H.La]));return c};
var tf={config:event:function(a){var b=
a[1];if(ka(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=nf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).ih(a[1],a[2])},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&ka(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},uf={policy:!0};var wf=xf=yf=!1;if(C.querySelectorAll)try{var zf=C.querySelectorAll(":root");zf&&1==zf.length&&zf[0]==C.documentElement&&(yf=!0)}catch(a){}var vf=yf;var Gf=Gf.prototype.Xf=var Ff=Gf.prototype.getUntrustedUpdateValue=Gf.prototype.Xf;var Hf=!1,If=[];ar Kf=var Lf=[],Mf=!1,Nf=Of=function(a){var b=pc["dataLayer"],c=b?b.subscribers:1,d=0;return ,Qf=function(a){var b=a._clear;ta(a,;uc||(uc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,jd("gtm.uniqueEventId",d));wc=c;var e=Pf(a);
wc=null;switch(c){case "gtm.init":Dc("GTM",19),e&&Dc("GTM",20)}return e};function Pf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=pc.zones;d=e?e.checkState(oc.m,c):Jd;return d.active?He(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Rf=function(){for(var a=!1;!Mf&&0<Lf.length;){Mf=!0;delete Zc.eventModel;bd();var b=Lf.shift();if(null!=b){var c=Ff(b);if(c){var d=b;b=Ff(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=cd(h,1);if(ma(k)||Ja(k))k=f(k);$c[h]=k}}try{if(ja(b))try{b.call(dd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=cd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ka(b[0])){var r=tf[b[0]];if(r&&(!c||!uf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Mf=!1;continue}}a=Qf(b)||a}}finally{c&&bd(!0)}}Mf=!1}
return!a},Sf=function(){var a=Rf();try{var b=oc.m,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Tf=function(){var a=Kb("dataLayer",[]),b=Kb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Qd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kf(;b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<pc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Lf.push.apply(Lf,d);if(300<this.length)for(Dc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Rf()&&h};Lf.push.apply(Lf,a.slice(0));G(Sf)};var Uf;var pg={};pg.vb=new String("undefined");
var qg=qg.prototype.toString=qg.prototype.valueOf=qg.prototype.toString;pg.Ye=qg;pg.jc={};pg.If=var rg={};pg.Hg=function(a,b){var c=Ac();rg[c]=[a,b];return c};pg.Hd=function(a){var b=a?0:1;return function(c){var d=rg[c];if(d&&"function"===typeof d[b])d[b]();rg[c]=void 0}};pg.jg=pg.vg=function(a){if(a===pg.vb)return a;var b=Ac();pg.jc[b]=a;return'google_tag_manager["'+oc.m+'"].macro('+b+")"};pg.ng=function(a,b,c){a instanceof pg.Ye&&(a=a.resolve(pg.Hg(b,c)),b=ia);return{yc:a,J:b}};var sg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},tg=ug=vg=wg=var xg=function(){for(var a=Ib.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},Ag=function(a,b,c,d){var e=yg(b);return af(a,e,zg(c),d)},Bg=yg=zg=var Cg=["1"],Dg={},Hg=function(a,b,c,d){var e=Eg(a);Dg[e]||Fg(e,b,c)||(Gg(e,xg(),b,c,d),Fg(e,b,c))};function Gg(a,b,c,d,e){var g=Bg(b,"1",d,c);ef(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function Fg(a,b,c){var d=Ag(a,b,c,Cg);d&&(Dg[a]=d);return d}var Ig=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Wc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Wc]||(g[a[h].Wc]=[]),g[a[h].Wc].push({timestamp:k[1],Uf:k[2]}))}return g};ar Kg,Mg,Ng=function(a){Kg=Kg||Lg();Mg=Mg||Jg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Kg[l],Kg[m],Kg[n],Kg[p])}return b.join("")},Og=function(a){g=Kg||Lg();Mg=Mg||
Jg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pg;function Qg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Ug=Tg=function(){var a=Kb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vg=/(.*?)\*(.*?)\*(.*)/,Wg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xg=/^(?:www\.|m\.|amp\.)+/,Yg=/([^?#]+)(\?[^#]*)?(#.*)?/,Zg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ah=$g=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Pg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ch=function(){return function(a){var b=qe(u.location.href),c=b.search.replace("?",""),d=me(c,"_gl",!0)||"";a.query=bh(d)||{};var e=pe(b,"fragment").match(Zg);a.fragment=bh(e&&e[3]||
"")||{}}},dh=function(){var a=ch(),b=Tg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Da(c,d.query),Da(c,d.fragment));return c},bh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Vg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===$g(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Og(t[q+1]);return p}}}}catch(r){}};
function eh(a,b,c){function d(m){var n=m,p=Zg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Yg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fh(a,b,c){for(var d={},e={},g=Tg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Qg(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=ah(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eh(l,a.action);ke.test(v)&&(a.action=v)}}}else gh(l,a,!1)}if(!c&&Ea(e)){var w=ah(e);gh(w,a,!0)}}function gh(a,b,c){if(b.href){var d=eh(a,b.href,void 0===c?!1:c);ke.test(d)&&(b.href=d)}}
var Rg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fh(e,e.hostname,!1)}}catch(h){}},Sg=function(a){try{if(a.action){var b=pe(qe(a.action),"host");fh(a,b,!0)}}catch(c){}},hh=function(a,b,c,d){Ug();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Tg().decorators.push(e)},ih=jh=var kh={};var lh=/^\w+$/,mh=/^[\w-]+$/,nh=/^~?[\w-]+$/,oh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};ar rh=function(){var a=qe(u.location.href),b=pe(a,"query",!1,void 0,"gclid"),c=pe(a,"query",!1,void 0,"gclsrc"),d=pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||me(e,"gclid",void 0);c=c||me(e,"gclsrc",void 0)}return qh(b,c,d)};
function qh(a,b,c){var d={},e=if(void 0!==a&&a.match(mh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==kh.gtm_3pds?0:kh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var th=function(a){var b=rh();sh(b,a)};
function sh(a,b,c){function d(p,t){var q=uh(p,e);q&&ef(q,t,h,g,l,!0)}b=b||{};var e=ph(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Hc?7776E3:b.Hc;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var wh=function(a,b,c,d,e){for(var g=dh(),h=ph(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==oh[l]){var m=uh(l,h),n=g[m];if(n){var p=Math.min(vh(n),ya()),t;b:{for(var q=p,r=Xe(m,C.cookie),v=0;v<r.length;++v)if(vh(r[v])>q){t=!0;break b}t=!1}t||ef(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};sh(qh(g.gclid,g.gclsrc),w)},uh=vh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function xh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yh=function(a,b,c,d,e){if(ma(b)){var g=ph(e);hh(function(){for(var h={},k=0;k<a.length;++k){var l=uh(a[k],g);if(l){var m=Xe(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},zh=Ah=function(a){for(var b=["aw","dc"],c=ph(a&&a.prefix),d={},e=0;e<b.length;e++)oh[b[e]]&&(d[b[e]]=oh[b[e]]);ta(d,function(g,h){var k=Xe(c+h,C.cookie);if(k.length){var l=k[0],m=vh(l),n={};n[g]=[xh(l)];sh(n,a,m)}})};var Bh=/^\d+\.fls\.doubleclick\.net$/;function Ch(a){var b=qe(u.location.href),c=pe(b,"host",!1);if(c&&c.match(Bh)){var d=pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Dh(a,b){if("aw"==a||"dc"==a){var c=Ch("gcl"+a);if(c)return c.split(".")}var d=ph(b);if("_gcl"==d){var e;e=rh()[a]||[];if(0<e.length)return e}var g=uh(a,d),h;if(g){var k=[];if(C.cookie){var l=Xe(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=xh(l[m]);n&&-1===oa(k,n)&&k.push(n)}h=zh(k)}else h=k}else h=k}else h=[];return h}
var Eh=function(){var a=Ch("gac");if(a)return decodeURIComponent(a);var b=Ig(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=zh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Fh=function(a,b,c,d,e){Hg(b,c,d,e);var g=Dg[Eg(b)],h=rh().dc||[],k=!1;if(g&&0<h.length){var l=pc.joined_au=pc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ib.sendBeacon&&Ib.sendBeacon(t)||Pb(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Eg(b),r=Dg[q];r&&Gg(q,r,c,d,e)}};var Gh;if(3===oc.zb.length)Gh="g";else{var Hh="G";Gh=Hh}
var Jh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Kh=function(a){var b=oc.m.split("-"),c=b[0].toUpperCase(),d=Jh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===oc.zb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+oc.zb+e};var Ph=["input","select","textarea"],Qh=["button","hidden","image","reset","submit"],Rh=function(a){var b=a.tagName.toLowerCase();return!pa(Ph,||"input"===b&&pa(Qh,?!1:!0},Sh=Th=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Rh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Wh=!!u.MutationObserver,Xh=void 0,Yh=var zi=u.clearTimeout,Ai=u.setTimeout,K=function(a,b,c){if(md()){b&&G(b)}else return Mb(a,b,c)},Bi=Ci=Di=Ei=null;
var Fi=Gi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Nf(a)},Hi=W=Ii=Ji=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Hc:d};th(e);Ah(e)},Ki=function(a,b,c,d,e){wh(a,b,c,d,e);},Li=Mi=Ni=Oi=Pi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,;K(J("https://","http://",d))},Qi=
var Si=pg.ng;var Ti=new ra,Ui=function(a,b){function c(h){var k=qe(h),l=pe(k,"protocol"),m=pe(k,"host",!0),n=pe(k,"port"),p=pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Vi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=oa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ti.get(q);r||(r=new RegExp(c,t),Ti.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ui(b,c)}return!1};var Xi={},Yi=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Xi[1]&&(Xi[1]=Math.floor(2*Math.random()));return Xi[1]};var Zi=var $i={},aj=encodeURI,X=encodeURIComponent,bj=Pb;var cj=
var dj=$i.kg=var Ej=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||qa();return a.hid};var nk=window,ok=document,pk=function(a){var b=nk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===nk["ga-disable-"+a])return!0;try{var c=nk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Xe("AMP_TOKEN",ok.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ok.getElementById("__gaOptOutExtension")?!0:!1};var uk=vk=xk=function(a,b){},wk=
yk=zk=function(a){ta(a,function(c){yk(c)&&delete a[c]});var b=a[H.ub]||{};ta(b,};var Z={a:{}};


Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(}();

Z.a.u=["google"],function(){var a=(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Fi("gtm.url",1))||Bi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Di(String(c));var e=qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();




Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
ih())&&Ki(a,h,k,l));Ji(e,c,d);Fh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Li(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();






Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(}();
Z.a.html=["customScripts"],function(){ar c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Si(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.yc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Tb(h),k,e)()}else Ai(
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();








var Ik={};Ik.macro=Ik.onHtmlSuccess=pg.Hd(!0),Ik.onHtmlFailure=pg.Hd(!1);Ik.dataLayer=dd;Ik.callback=Ik.tf=function(){pc[oc.m]=Ik;Da(zc,Z.a);rb=rb||pg;sb=Id};
Ik.fg=function(){kh.gtm_3pds=!0;pc=u.google_tag_manager=u.google_tag_manager||{};if(pc[oc.m]){var a=pc.zones;a&&a.unregisterChild(oc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)jb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)mb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)lb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);kb.push(p)}pb=Z;qb=Vi;Ik.tf();Tf();Ld=!1;Md=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Od();else{D(C,"DOMContentLoaded",Od);D(C,"readystatechange",Od);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(y){}q&&Pd()}D(u,"load",Od)}Hf=!1;"complete"===C.readyState?Jf():
D(u,"load",Jf);a:{if(!Tc)break a;u.setInterval(Uc,864E5);}
vc=(new Date).getTime();
}};(0,Ik.fg)();

})()
