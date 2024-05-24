(function(){var l=void 0,m=true,n=null,o=false,p=this;
r s={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;=p.setInterval,D=p.clearInterval,ka=p.setTimeout;
 F={};F.I=function(a){try{F.create("_cb_test","1",1,a);var b=F.b("_cb_test");F.remove("_cb_test",a);return b==="1"}catch(c){return o}};F.b=function(a){a+="=";var b="";C(document.cookie.split(";"),;return b};
F.create=function(a,b,c,d){var e=p._sf_async_config;if(e&&e.noCookies)return"";e=new Date;e.setTime(B()+c*1E3);a=a+"="+b+("; expires="+e.toGMTString())+("; path="+d);return document.cookie=a};F.remove=function(a,b){return F.b(a)?F.create(a,"",-86400,b):""};var G={};G.a=G.b=
G.create=G.remove=function H(a,b){this.u=a||"";this.h=b||"/";this.U=G.a()!==n||F.I(this.h);this.S=o;sa(this)}function sa(a){if(!F.b("_cb_ls")){var b=G.a()!==n,c=F.b("_SUPERFLY_lockout");c&&C(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_lockout",c,600,m)});var d=F.b("_chartbeat3");d&&(a.create("_v__chartbeat3",d,34128E3,m),F.remove("_chartbeat3",a.h));b&&((b=F.b("_chartbeat2"))&&a.create("_chartbeat2",b,34128E3,m),(b=F.b("_chartbeat5"))&&a.create("_chartbeat5",b,60,m));F.create("_cb_ls","1",34128E3,a.h)}}
H.prototype.create=function(a,b,c,d){a=d?a:this.u+a;(G.a()?G:F).create(a,b,c,this.h);G.a()&&F.create(a,b,c,this.h)};H.prototype.b=function(a,b){var a=b?a:this.u+a,c=(G.a()?G:F).b(a);if(!c&&G.a()&&(c=F.b(a))&&F.b("_cb_ls")){this.S=m;var d;switch(a){case "_SUPERFLY_lockout":d=600;break;case "_chartbeat4":d=60;break;case "_cb_cp":d=60;break;case "_chartbeat3":d=34128E3;break;default:d=34128E3}G.create(a,c,d)}return c};
H.prototype.remove=function(a,b){a=b?a:this.u+a;(G.a()?G:F).remove(a,this.h);G.a()&&F.remove(a,this.h)};ar I=);

unction K(a,b){do{for(var c=a,d=c.ownerDocument.querySelectorAll(b),e=d.length;--e>=0&&d.item(e)!==c;);if(e>-1)return a;a=a.parentElement||a.parentNode}while(a!==n&&a.nodeType===1);return n};var ya="z";

or(var Ca={},N=0;N<81;N++)Ca["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(N)]=m;
function O(a){if(!A(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Da);a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent);return a=a.replace(/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g,"")};

/^[a-zA-Z0-9+/]*={0,2}$/;
var S=);
function T(a){this.r=a;this.o=[];var b=this.r,a=b.topStorageDomain,b=b.domain,c=p.location.hostname;this.T=a?a:Pa(c,b)?b:c.replace(/^www\./,"");this.H=new H("_t_",this.r.cookiePath||"/");this.l=U;a=ya;L()[a]=m}
function bb(a){if(!a.D){a.D=m;var b=a.G,c=a.B,d=Ga(a.H.b("tests")),e={};d.length>0&&(e=ba(d));var f=Ka(c,e);a.o=Ha(b,f,e);var g=a.o,h={domain:"."+a.T,C:6E4,path:"/"};a.q=function(a){var b,a=a||window.event;if(b=!a?n:ta(a.target||a.srcElement,ua,10))if(a=cb(b,g),a.length){var c;if(b===n||typeof b==="undefined")c="unknown";else if(b.tagName==="A"&&b.href)c=b.href;c=Oa(c,a[0].test.t,a);a=(a=F.b("_chartbeat6"))?a.split("::"):[];a.length>=10&&a.splice(0,a.length-10+1);a.push(c);c="_chartbeat6="+a.join("::");
a="";h&&h.constructor===Object&&(h.C&&(b=new Date,b.setTime(b.getTime()+h.C),a+="; expires="+b.toGMTString()),h.domain&&(a+="; domain="+h.domain),h.path&&(a+="; path="+h.path));document.cookie=c+a}};a=v(a);Ua(a)}}


.prototype.Q=function lb(a){a.l=mb;fb(a)}
T.prototype.terminate=


unction qb(a,b){var c=o,d=K(a,Q()),e=Ya(),f=b.j.z;d&&C(f,;return c}
function pb(a,b){var c=b.j,d=c.content,e=c.K,f=c.L,c=c.z,g=b.type;if("textContent"in document.createElement("b")&&a.textContent.trim())if(g.indexOf("image")<0||!c)a.textContent=d;else{var h=Ya();b.A=m;C(c,function(c){var g=c.newSrcSet||c.src,k=c.src,t=K(a,Q()),u=o;if(g&&t){h.forEach(;var c=t.querySelectorAll('[srcset="'+J(k)+'"]'),x=
t.querySelectorAll('[src="'+J(k)+'"]');Array.prototype.forEach.call(c,function(a){rb(a,"srcset",g,f,e);tb(a);u=m});Array.prototype.forEach.call(x,function(a){rb(a,"src",g,f,e);tb(a);u=m});if(u)a.textContent=d,b.A=o}})}}function rb(a,b,c,d,e){var f=a.parentNode.querySelector("img"),g=Q(),h=a.parentNode.querySelector("img");a.setAttribute(b,c);h.setAttribute("alt",e);if(a=K(a,g))if(a=a.querySelector("figcaption"))a.innerHTML=d;f.setAttribute("keep-hiding","true")}
function tb(a){var b=a.parentNode.querySelector("img");b.classList.add("cb-it-hide");b.addEventListener("load",}function sb(a){a.classList.remove("cb-it-hide");a.removeAttribute("keep-hiding");a.removeAttribute("pinger-seen")}var U=0,mb=2,ob=4,ib="s",hb="e",gb="f";if(!F.b("cb_optout")){var R=p._sf_async_config,E=R;ra();var ub=!!E.useCanonical,vb=za(!!E.useCanonicalDomain&&ub);E.title=E.title||document.title;E.domain=E.domain||vb;var wb=E,V;if(E.path)V=O(E.path);else a:{var W=n;if(ub){var X=Aa();if(W=!X?X:O(X.pathname)+X.search+X.hash){V=W;break a}}var xb=p.location,W=O(xb.pathname),Y=xb.search||"",Y=Y.replace(/PHPSESSID=[^&]+/,""),Z=/&utm_[^=]+=[^&]+/ig,$=Z.exec(xb.search);$&&(Y=Y.replace(Z,""));Z=/\?utm_[^=]+=[^&]+(.*)/i;($=Z.exec(Y))&&(Y=Y.replace(Z,$[1]!=
""?"?"+$[1]:""));Y=O(Y);V=W+Y}wb.path=V;E.domain=E.domain&&E.domain.replace(/^www\./,"");if("textContent"in document.createElement("b")&&"querySelectorAll"in document&&"atob"in window&&"btoa"in window){var yb=new T(R);kb(yb,R)}};})();