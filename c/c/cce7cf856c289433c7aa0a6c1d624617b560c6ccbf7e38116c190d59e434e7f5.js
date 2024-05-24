No default param for eventsnelManager.run === 'function') {"use strict";this.default_ContributorServingResponseClientJs=this.default_ContributorServingResponseClientJs||{};(function(_){var window=this;
try{
/*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var nh,vh,wh,xh,zh,Ah,Bh,Ch,Dh,Eh,Fh,Gh,Ih,Kh,Nh,sh,Oh,Ph;_.mh=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};nh=function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};_.oh=function(a,b){_.hh(b.querySelectorAll(a),function(c){c.style.setProperty("display","none","important")})};_.ph=function(a,b){b.querySelector(a).style.display=""};
_.qh=function(a){var b=function(d){for(var e=0;e<d.length;e++){var f=d[e];if("CSSStyleRule"===f.constructor.name)for(var g=0;g<f.style.length;g++){var h=f.style[g],k=f.style.getPropertyValue(h);f.style.setProperty(h,k,"important")}else"CSSMediaRule"===f.constructor.name?b(f.cssRules):"CSSSupportsRule"===f.constructor.name&&b(f.cssRules)}},c=null;a instanceof HTMLStyleElement?c=a.sheet:a instanceof StyleSheet&&(c=a);c&&c.cssRules&&b(c.cssRules)};
_.uh=function(a,b,c,d){a=a(b||rh,c);d=d||_.he();if(a&&a.g)d=a.g();else{d=_.ie(d.g,"DIV");b:if(_.Nd(a)){if(a.Zb&&(a=a.Zb(),a instanceof _.ce))break b;a=sh("zSoyz")}else a=sh(String(a));_.th(d,a)}1==d.childNodes.length&&(a=d.firstChild,1==a.nodeType&&(d=a));return d};vh={cellpadding:"cellPadding",cellspacing:"cellSp:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
wh=function(a,b){_.mh(b,function(c,d){"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:vh.hasOwnProperty(d)?a.setAttribute(vh[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})};
xh=function(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!_.Od(f)||_.Nd(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(_.Nd(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}_.hh(g?_.gh(f):f,d)}}};
_.ge.prototype.h=_.Mc(0,function(a,b,c){var d=this.g,e=arguments,f=e[1],g=_.ie(d,String(e[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):wh(g,f));2<e.length&&xh(d,g,e);return g});_.yh=function(a){var b=_.Ud();a=b?b.createHTML(a):a;return new _.ce(a,_.be)};zh=function(a,b){a=a.g;b=b&&"*"!=b?String(b).toUpperCase():"";a.querySelectorAll&&a.querySelector&&b?b=a.querySelectorAll(b):b=a.getElementsByTagName(b||"*");return b};Ah=/&/g;Bh=/</g;Ch=/>/g;Dh=/"/g;Eh=/'/g;
Fh=/\x00/g;Gh=/[\x00&<>"']/;_.Hh=function(a,b){a=_.Rd(a,b);return null==a?void 0:a};Ih=function(a){a=_.lh(a,1);return null==a?void 0:a};_.Jh=function(a,b){a=_.hb(_.Fc(a,b));return null==a?void 0:a};Kh=function(a){this.g=a};Kh.prototype.toString=function(){return this.g.toString()};_.Lh={};_.Mh=function(a){this.g=a};_.Mh.prototype.toString=function(){return this.g.toString()};Nh=function(a){return a instanceof _.Mh&&a.constructor===_.Mh?a.g:"type_error:SafeStyleSheet"};
sh=function(a){a instanceof _.ce||(a=String(a),Gh.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ah,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bh,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ch,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Dh,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eh,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fh,"&#0;"))),a=_.yh(a));return a};_.th=function(a,b){if((0,_.fe)())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=_.de(b)};Oh=/^[\w+/_-]+[=]{0,2}$/;
Ph=function(){var a=_.t.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&Oh.test(a)?a:"":""};_.Qh=function(a){this.j=_.v(a)};_.A(_.Qh,_.J);_.Rh=function(a){this.j=_.v(a)};_.A(_.Rh,_.J);_.Sh=function(a){this.j=_.v(a)};_.A(_.Sh,_.J);var Th=function(a){this.j=_.v(a)};_.A(Th,_.J);_.Uh=function(a){this.j=_.v(a)};_.A(_.Uh,_.J);_.Vh=function(a){return _.D(a,Th,2)};_.Wh=function(a){this.j=_.v(a)};_.A(_.Wh,_.J);_.Xh=[1,2,3,4,5,6];var Yh=function(a){this.j=_.v(a)};_.A(Yh,_.J);Yh.B=[2];var Zh=function(a){this.j=_.v(a)};_.A(Zh,_.J);Zh.prototype.F=function(){return _.I(this,1)};var $h=function(a){this.j=_.v(a)};_.A($h,_.J);_.ai=function(a){return _.E(a,Zh,1)};$h.B=[1];var bi=function(a){this.j=_.v(a)};_.A(bi,_.J);_.ci=function(a){return _.D(a,Yh,7)};_.di=[1,2,3,4,5];_.ei=function(a){this.j=_.v(a)};_.A(_.ei,_.J);_.fi=function(a){this.j=_.v(a)};_.A(_.fi,_.J);_.gi=function(a){return _.D(a,_.Sh,2)};var hi=function(a){this.j=_.v(a)};_.A(hi,_.J);_.ii=function(a){return _.D(a,_.Sh,8)};var ji=function(a){this.j=_.v(a)};_.A(ji,_.J);_.ki=function(a){return _.D(a,hi,1)};_.li=function(a){this.j=_.v(a)};_.A(_.li,_.J);_.mi=function(a){return _.D(a,$h,3)};_.ni=function(a){return _.D(a,ji,5)};_.oi=function(a){return _.D(a,bi,2)};var pi;_.qi=function(a,b){var c=_.he(b);b=c.g;if(_.rc&&b.createStyleSheet)return b=b.createStyleSheet(),pi(b,a),b;b=zh(c,"HEAD")[0];if(!b){var d=zh(c,"BODY")[0];b=c.h("HEAD");d.parentNode.insertBefore(b,d)}c=c.h("STYLE");(d=Ph())&&c.setAttribute("nonce",d);pi(c,a);b.appendChild(c);return c};
pi=function(a,b){b=Nh(b);if(_.rc&&void 0!==a.cssText)a.cssText=b;else if(_.t.trustedTypes)if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))}else a.innerHTML=b};var si,ti,ui,vi;_.ri={};si={};ti={};ui={};vi=function(){throw Error("G");};vi.prototype.Va=null;vi.prototype.toString=function(){return this.content};vi.prototype.Zb=function(){if(this.ia!==_.ri)throw Error("H");return _.yh(this.toString())};var wi=function(){vi.call(this)};_.re(wi,vi);wi.prototype.ia=_.ri;var xi=function(){vi.call(this)};_.re(xi,vi);xi.prototype.ia=si;xi.prototype.Va=1;var yi=function(){vi.call(this)};_.re(yi,vi);yi.prototype.ia=ui;yi.prototype.Va=1;var zi=function(a,b){return null!=a&&a.ia===b};var Di,Ei,Ii,Pi,Qi,ej,pj,Ci,qj,rj,sj,ij,Bi,Li,Ni,Mi,tj,hj,mj,gj,kj,fj,Ji,Ki;_.Ai=function(a){if(null!=a)switch(a.Va){case 1:return 1;case -1:return-1;case 0:return 0}return null};_.U=function(a){return zi(a,_.ri)?a:a instanceof _.ce?(0,_.S)(_.de(a).toString()):(0,_.S)(String(String(a)).replace(Bi,Ci),_.Ai(a))};Di=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c){return new b(String(c))}};
_.S=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.Va=d);return c}}(wi);Ei=Di(xi);_.V=Di(yi);_.Fi=function(a){return a instanceof vi?!!a.content:!!a};_.Gi=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=String(c);if(!c)return"";c=new b(c);void 0!==d&&(c.Va=d);return c}}(wi);_.Hi=RegExp("^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\\b");
Ii=function(a){return a.replace(/<\//g,"<\\/").replace(/\]\]>/g,"]]\\>")};_.W=function(a){return zi(a,_.ri)?String(String(a.content).replace(Ji,"").replace(Ki,"&lt;")).replace(Li,Ci):String(a).replace(Bi,Ci)};_.Oi=function(a){return zi(a,_.ri)?String(String(a.content).replace(Ji,"").replace(Ki,"&lt;")).replace(Mi,Ci):String(a).replace(Ni,Ci)};Pi=/['()]/g;Qi=function(a){return"%"+a.charCodeAt(0).toString(16)};
ej=function(a){a=encodeURIComponent(String(a));Pi.lastIndex=0;return Pi.test(a)?a.replace(Pi,Qi):a};_.jj=function(a){zi(a,si)||zi(a,ti)?a=fj(a):a instanceof _.$d?a=fj(_.ae(a)):a instanceof _.Xd?a=fj(_.Yd(a).toString()):(a=String(a),a=gj.test(a)?a.replace(hj,ij):"about:invalid#zSoyz");return a};_.lj=function(a){zi(a,si)||zi(a,ti)?a=fj(a):a instanceof _.$d?a=fj(_.ae(a)):a instanceof _.Xd?a=fj(_.Yd(a).toString()):(a=String(a),a=kj.test(a)?a.replace(hj,ij):"about:invalid#zSoyz");return a};
_.X=function(a){zi(a,ui)?a=Ii(a.content):null==a?a="":a instanceof Kh?a=Ii(a instanceof Kh&&a.constructor===Kh?a.g:"type_error:SafeStyle"):a instanceof _.Mh?a=Ii(Nh(a)):(a=String(a),a=mj.test(a)?a:"zSoyz");return a};_.nj=function(a,b){a=nh(a.slice(0),function(c){return b&&c&&b.vc&&c.vc?b.ia!==c.ia?!1:b.toString()===c.toString():b instanceof vi&&c instanceof vi?b.ia!=c.ia?!1:b.toString()==c.toString():b==c});return-1===a?-1:a};_.oj=function(){return _.gc.apply(0,arguments)};
pj={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};Ci=function(a){return pj[a]};
qj={"\x00":"\\0 ","\b":"\\8 ","\t":"\\9 ","\n":"\\a ","\v":"\\b ","\f":"\\c ","\r":"\\d ",'"':"\\22 ","&":"\\26 ","'":"\\27 ","(":"\\28 ",")":"\\29 ","*":"\\2a ","/":"\\2f ",":":"\\3a ",";":"\\3b ","<":"\\3c ","=":"\\3d ",">":"\\3e ","@":"\\40 ","\\":"\\5c ","{":"\\7b ","}":"\\7d ","\u0085":"\\85 ","\u00a0":"\\a0 ","\u2028":"\\2028 ","\u2029":"\\2029 "};rj=function(a){return qj[a]};
sj={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29",
"<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB",
"\uff3d":"%EF%BC%BD"};ij=function(a){return sj[a]};Bi=/[\x00\x22\x26\x27\x3c\x3e]/g;Li=/[\x00\x22\x27\x3c\x3e]/g;Ni=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;Mi=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;tj=/[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;hj=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;mj=/^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i;
gj=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;kj=/^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i;fj=function(a){return String(a).replace(hj,ij)};Ji=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;Ki=/</g;var rh={};var xj;_.uj=function(){return(0,_.S)('<div class="fc-dialog-overlay"></div>')};
_.wj=function(a,b,c,d,e,f){return(0,_.S)('<div class="'+_.W(a)+' fc-dialog" role="dialog" tabindex="0"'+(d?' aria-label="'+_.W(d)+'"':"")+">"+(e?(0,_.S)('<button class="fc-back-button" tabindex="0"><div class="fc-back-button-background"></div><i class="material-icons fc-back-icon" translate="no">arrow_back</i></button>'):"")+(0<_.ai(_.mi(b)).filter(function(g){return 1===g.F()}).length?_.vj():"")+(0,_.S)('<div class="fc-dialog-content">'+_.U(c)+"</div>")+(_.Fi(f)?(0,_.S)('<footer class="fc-dialog-footer">'+
_.U(f)+"</footer>"):"")+"</div>")};_.yj=function(a,b,c){return(0,_.S)("<div class="+_.Oi(c?"fc-site-macro-logo fc-header-image-container":"fc-header-image-container")+">"+(null==_.R(a,1)?'<div class="fc-header-image-default"></div>':'<img class="fc-header-image" alt="'+(b?_.W(b):"site logo")+'" src="'+_.W(_.lj(xj(a)))+'">')+"</div>")};
xj=function(a){var b,c=_.jj(null!=(b=_.R(a,1))?b:"")+"=",d;c+=null!=(null==a?void 0:null==(d=_.Vh(a))?void 0:_.D(d,_.Qh,2))&&3===_.Jh(_.D(_.Vh(a),_.Qh,2),2)?"h"+ej(Math.floor(60*Ih(_.D(_.Vh(a),_.Qh,2)))):"h"+ej(60);return Ei(c)};_.vj=function(a){return(0,_.S)('<button class="fc-close" tabindex="0"'+(a?' aria-label="'+_.W(a)+'"':"")+'><div class="fc-close-background"></div><i class="material-icons fc-close-icon" translate="no">cancel</i></button>')};
_.zj=function(a,b,c){if(c){var d;b&&null==_.R(c,1)?d='<img class="fc-header-placeholder-image" alt="'+_.W(a)+'" src="https://fonts.gstatic.com/s/i/googlematerialicons/image/v7/grey600-24dp/1x/gm_image_grey600_24dp.png"/>':d=(0,_.S)(null!=_.R(c,1)?'<img class="fc-header-image" alt="'+_.W(a)+'" src="'+_.W(_.lj(xj(c)))+'">':"");a='<h2 class="fc-header-image-container">'+d+"</h2>"}else a='<h2 class="fc-header-text">'+_.U(a)+"</h2>";return(0,_.S)('<div class="fc-header">'+a+"</div>")};
_.Bj=function(a,b){return(0,_.S)('<div class="fc-dialog-headline"><h1 class="fc-dialog-headline-text">'+_.U(a)+"</h1>"+(b?_.Aj(b):"")+"</div>")};_.Aj=function(a){return(0,_.S)('<div class="fc-dialog-body"><p class="fc-dialog-body-text">'+_.U(a)+"</p></div>")};_.Cj=function(a,b,c){return(0,_.S)('<button role="button" aria-label="'+_.W(a)+'" class="fc-button  '+_.W(b)+'" tabindex="0"'+(c?" disabled":"")+'><div class="fc-button-background"></div><p class="fc-button-text">'+_.U(a)+"</p></button>")};_.Dj=function(a,b,c,d,e,f,g,h){f="overflow-wrap: break-word;"+(f?"":(null==b?0:_.Hh(b,4))?h?"font-weight: 500;":"font-weight: 700;":"font-weight: normal;")+((null==b?0:_.Hh(b,5))?"font-style: italic;":"font-style: normal;")+(g?"":(null==b?0:_.Hh(b,6))?"text-decoration: underline;":"text-decoration: initial;");if(!e)switch(null==b?void 0:_.Jh(b,7)){case 2:f+="text-align: center;";break;case 3:f+="text-align: right;";break;case 4:f+="text-align: justify;";break;default:f+="text-align: left;"}a=a?"font-family: '"+
String(a).replace(tj,rj)+"';":(null==b?0:_.R(b,1))&&""!==_.R(b,1)?"font-family: '"+String(_.R(b,1)).replace(tj,rj)+"';":"";f+=a+(!c&&(null==b?0:_.R(b,3))?"color: "+_.X(_.R(b,3))+";":"");if(!d){var k;switch(null==b?void 0:null==(k=_.D(b,_.Qh,2))?void 0:_.Jh(k,2)){case 1:var l,n;f+="font-size: "+_.X(null==(null==(l=_.D(b,_.Qh,2))?void 0:Ih(l))?1:null!=(n=Ih(_.D(b,_.Qh,2)))?n:0)+"em;";break;default:f+="font-size: 1em;"}}return(0,_.V)(f)};
_.Ej=function(a,b,c,d,e){var f,g,h;b=(!c&&(null==a?0:_.R(a,1))?"background: "+_.X(_.R(a,1))+";":"background: #fff;")+(b?"":"border: none;")+(!e&&null!=(null==a?void 0:null==(f=_.D(a,_.Qh,4))?void 0:Ih(f))&&0<(null!=(h=null==a?void 0:Ih(_.D(a,_.Qh,4)))?h:null)&&null!=(null==a?void 0:null==(g=_.D(a,_.Qh,4))?void 0:_.Jh(g,2))&&2===(null==a?void 0:_.Jh(_.D(a,_.Qh,4),2))&&null!=(null==a?void 0:_.R(a,2))?"border: "+_.X(Ih(_.D(a,_.Qh,4)))+"px solid  "+_.X(_.R(a,2))+";":"");if(!d){var k;switch(null==a?void 0:
null==(k=_.D(a,_.Qh,3))?void 0:_.Jh(k,2)){case 1:var l,n;b+="border-radius: "+_.X(null!=(n=(null==a?void 0:null==(l=_.D(a,_.Qh,3))?void 0:Ih(l))+"em")?n:"0")+";";break;case 2:var r,w;b+="border-radius: "+_.X(null!=(w=(null==a?void 0:null==(r=_.D(a,_.Qh,3))?void 0:Ih(r))+"px")?w:"0")+";";break;default:b+="border-radius: 0;"}}return(0,_.V)(b)};
_.Fj=function(a){var b="",c;switch(null==a?void 0:null==(c=_.D(a,_.Qh,5))?void 0:_.Jh(c,2)){case 1:var d,e,f,g;b+="padding-left: "+_.X(null==(null==(d=_.D(a,_.Qh,5))?void 0:Ih(d))?0:null!=(f=Ih(_.D(a,_.Qh,5)))?f:0)+"em; padding-right: "+_.X(null==(null==(e=_.D(a,_.Qh,5))?void 0:Ih(e))?0:null!=(g=Ih(_.D(a,_.Qh,5)))?g:0)+"em;";break;default:b+="padding-left: 0; padding-right: 0;"}var h;switch(null==a?void 0:null==(h=_.D(a,_.Qh,6))?void 0:_.Jh(h,2)){case 1:var k,l,n,r;b+="padding-top: "+_.X(null==(null==
(k=_.D(a,_.Qh,6))?void 0:Ih(k))?0:null!=(n=Ih(_.D(a,_.Qh,6)))?n:0)+"em; padding-bottom: "+_.X(null==(null==(l=_.D(a,_.Qh,6))?void 0:Ih(l))?0:null!=(r=Ih(_.D(a,_.Qh,6)))?r:0)+"em;";break;default:b+="padding-top: 0; padding-bottom: 0;"}return(0,_.V)(b)};_.Gj=function(a){var b="display: flex; flex-direction: row;";switch(null==a?void 0:_.Jh(a,1)){case 1:b+="justify-content: flex-start;";break;case 3:b+="justify-content: flex-end;";break;default:b+="justify-content: center;"}return(0,_.V)(b)};var Lj,Yj;
_.Hj=function(a){a=void 0===a?"fc-message-root":a;return(0,_.V)("."+_.X(a)+"  .fc-close-background {background-color: "+_.X("#fff")+"; cursor: pointer; height: 8px; left: 50%; position: absolute; radius: 50%; -webkit-transform: translate(-50%,-50%); -ms-transform: translate(-50%,-50%); transform: translate(-50%,-50%); top: 50%; width: 8px;}."+_.X(a)+" .fc-close-icon {border-radius: 50%; box-sizing: border-box; color: "+_.X("#5f6368")+"; cursor: pointer; display: inline-block; font-family: 'Material Icons'; font-size: 20px; height: 40px; line-height: 40px; position: relative; text-align: center; vertical-align: middle; width: 40px;}."+_.X(a)+
" .fc-close {box-sizing: border-box; color: white; cursor: pointer; direction: ltr; display: inline-block; font-size: 1em; height: 40px; margin: 0; opacity: 1; outline: none; text-align: center; text-indent: 0; width: 40px; z-index: 1; top: 0; right: 0; position: absolute;}."+_.X(a)+" .fc-close:focus {outline: none;}."+_.X(a)+" .fc-close:hover .fc-close-icon {color: "+_.X("#202124")+"; background-color:  rgba(32, 33, 36, 0.04);}."+_.X(a)+" .fc-close:focus .fc-close-icon {color: "+_.X("#202124")+"; background-color:  rgba(32, 33, 36, 0.12); outline: 1px solid "+
_.X("#3c4043")+";}")};
_.Jj=function(a,b){a=void 0===a?"fc-message-root":a;return(0,_.V)("."+_.X(a)+" a, ."+_.X(a)+" a p {cursor: pointer;}."+_.X(a)+" button, ."+_.X(a)+" button div, ."+_.X(a)+" button p, ."+_.X(a)+" .fc-button, ."+_.X(a)+" .fc-button div, ."+_.X(a)+" .fc-button p {cursor: pointer;}."+_.X(a)+" a:hover {"+_.Ij("80%")+"}."+_.X(a)+" button:focus p:not(.fc-button-text), ."+_.X(a)+" .fc-button:focus .fc-button-label {outline: auto;}."+_.X(a)+" button:focus:not(:focus-visible) p ."+_.X(a)+" .fc-button:focus:not(:focus-visible) .fc-button-label {outline: none;}"+
(null!=b?_.X(b)+" {outline: 1px solid transparent;}":""))};_.Ij=function(a){return(0,_.V)("filter: brightness("+_.X(a)+");")};_.Kj=function(){return(0,_.V)('-moz-font-feature-settings: "kern" 1; -moz-osx-font-smoothing: grayscale; -webkit-font-feature-settings: "kern" 1; -webkit-font-smoothing: antialiased; font-feature-settings: "kern" 1; font-kerning: normal; text-rendering: optimizelegibility;')};
_.Mj=function(a,b){a=void 0===a?"fc-message-root":a;b=void 0===b?Lj:b;for(var c="div."+_.X(a)+","+(0<=_.nj(b,"a")?" ."+_.X(a)+" a:link, ":""),d=b.length,e=0;e<d;e++){var f=b[e];c+="."+_.X(a)+" "+_.X(f)+(e!==b.length-1?",":"")}return(0,_.V)(c+"{-webkit-app-region: none; -webkit-appearance: none; -webkit-border-horizontal-spacing: 0; -webkit-border-image: none; -webkit-border-vertical-spacing: 0; -webkit-box-align: stretch; -webkit-box-decoration-break: slice; -webkit-box-direction: normal; -webkit-box-flex: 0; -webkit-box-ordinal-group: 1; -webkit-box-orient: horizontal; -webkit-box-pack: start; -webkit-box-reflect: none; -webkit-font-smoothing: auto; -webkit-highlight: none; -webkit-hyphenate-character: auto; -webkit-line-break: auto; -webkit-line-clamp: none; -webkit-locale: auto; -webkit-margin-after-collapse: collapse; -webkit-margin-before-collapse: collapse; -webkit-mask-box-image-outset: 0; -webkit-mask-box-image-repeat: stretch; -webkit-mask-box-image-slice: 0 fill; -webkit-mask-box-image-source: none; -webkit-mask-box-image-width: auto; -webkit-mask-box-image: none; -webkit-mask-clip: border-box; -webkit-mask-composite: source-over; -webkit-mask-image: none; -webkit-mask-origin: border-box; -webkit-mask-position: 0% 0%; -webkit-mask-repeat: repeat; -webkit-mask-size: auto; -webkit-print-color-adjust: economy; -webkit-rtl-ordering: logical; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.4); -webkit-text-combine: none; -webkit-text-decorations-in-effect: none; -webkit-text-emphasis-color: rgb(0, 0, 0); -webkit-text-emphasis-position: over right; -webkit-text-emphasis-style: none; -webkit-text-orientation: vertical-right; -webkit-text-security: none; -webkit-text-stroke-color: rgb(0, 0, 0); -webkit-text-stroke-width: 0; -webkit-user-drag: auto; -webkit-writing-mode: horizontal-tb; align-content: normal; align-items: normal; align-self: auto; alignment-baseline: auto; animation-delay: 0s; animation-direction: normal; animation-duration: 0s; animation-fill-mode: none; animation-iteration-count: 1; animation-name: none; animation-play-state: running; animation-timing-function: ease; backdrop-filter: none; backface-visibility: visible; background-attachment: scroll; background-blend-mode: normal; background-clip: border-box; background-color: rgba(0, 0, 0, 0); background-image: none; background-origin: padding-box; background-position: 0% 0%; background-repeat: repeat; background-size: auto; baseline-shift: 0; border-bottom-color: rgb(0, 0, 0); border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-bottom-style: none; border-bottom-width: 0; border-collapse: separate; border-image-outset: 0; border-image-repeat: stretch; border-image-slice: 100%; border-image-source: none; border-image-width: 1; border-left-color: rgb(0, 0, 0); border-left-style: none; border-left-width: 0; border-right-color: rgb(0, 0, 0); border-right-style: none; border-right-width: 0; border-top-color: rgb(0, 0, 0); border-top-left-radius: 0; border-top-right-radius: 0; border-top-style: none; border-top-width: 0; bottom: auto; box-shadow: none; box-sizing: content-box; break-after: auto; break-before: auto; break-inside: auto; buffered-rendering: auto; caption-side: top; caret-color: rgb(0, 0, 0); clear: none; clip-path: none; clip-rule: nonzero; clip: auto; color-interpolation-filters: linearrgb; color-interpolation: srgb; color-rendering: auto; color: rgb(0, 0, 0); column-count: auto; column-gap: normal; column-rule-color: rgb(0, 0, 0); column-rule-style: none; column-rule-width: 0; column-span: none; column-width: auto; content: normal; cursor: auto; cx: 0; cy: 0; d: none; display: inline; dominant-baseline: auto; empty-cells: show; fill-opacity: 1; fill-rule: nonzero; fill: rgb(0; 0; 0); filter: none; flex-basis: auto; flex-direction: row; flex-grow: 0; flex-shrink: 1; flex-wrap: nowrap; float: none; flood-color: rgb(0, 0, 0); flood-opacity: 1; font-kerning: auto; font-optical-sizing: auto; font-size: 16px; font-stretch: 100%; font-style: normal; font-variant-caps: normal; font-variant-east-asian: normal; font-variant-ligatures: normal; font-variant-numeric: normal; font-variant: normal; font-weight: 400; grid-auto-columns: auto; grid-auto-flow: row; grid-auto-rows: auto; grid-column-end: auto; grid-column-start: auto; grid-row-end: auto; grid-row-start: auto; grid-template-areas: none; grid-template-columns: none; grid-template-rows: none; height: auto; hyphens: manual; image-rendering: auto; isolation: auto; justify-content: normal; justify-items: normal; justify-self: auto; left: auto; letter-spacing: normal; lighting-color: rgb(255, 255, 255); line-break: auto; line-height: normal; list-style-image: none; list-style-position: outside; list-style-type: disc; margin-bottom: 0; margin-left: 0; margin-right: 0; margin-top: 0; marker-end: none; marker-mid: none; marker-start: none; mask-type: luminance; mask: none; max-height: none; max-width: none; min-height: 0; min-width: 0; mix-blend-mode: normal; object-fit: fill; object-position: 50% 50%; offset-distance: 0; offset-path: none; offset-rotate: auto 0deg; opacity: 1; order: 0; orphans: 2; outline-color: rgb(0, 0, 0); outline-offset: 0; outline-style: none; outline-width: 0; overflow-anchor: auto; overflow-wrap: normal; overflow-x: visible; overflow-y: visible; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; paint-order: normal; perspective-origin: 0 0; perspective: none; pointer-events: auto; position: static; r: 0; resize: none; right: auto; row-gap: normal; rx: auto; ry: auto; scroll-behavior: auto; shape-image-threshold: 0; shape-margin: 0; shape-outside: none; shape-rendering: auto; speak: normal; stop-color: rgb(0, 0, 0); stop-opacity: 1; stroke-dasharray: none; stroke-dashoffset: 0; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 1; stroke-width: 1px; stroke: none; tab-size: 8; table-layout: auto; text-align-last: auto; text-align: start; text-anchor: start; text-decoration-color: rgb(0, 0, 0); text-decoration-line: none; text-decoration-skip-ink: auto; text-decoration-style: solid; text-decoration: none solid rgb(0, 0, 0); text-indent: 0; text-overflow: clip; text-rendering: auto; text-shadow: none; text-size-adjust: auto; text-transform: none; text-underline-position: auto; top: auto; touch-action: auto; transform-origin: 0 0; transform-style: flat; transform: none; transition-delay: 0s; transition-duration: 0s; transition-property: all; transition-timing-function: ease; unicode-bidi: normal; user-select: auto; vector-effect: none; vertical-align: baseline; visibility: visible; white-space: normal; widows: 2; width: auto; will-change: auto; word-break: normal; word-spacing: 0; writing-mode: horizontal-tb; x: 0; y: 0; z-index: auto; zoom: 1;}")};
_.Nj=function(a){var b="";a=void 0===a?"zz":a;switch(_.Nd(a)?a.toString():a){case "ar":case "iw":case "fa":case "ur":case "ps":case "sd":b+="direction: rtl;";break;default:b+="direction: ltr;"}return(0,_.V)(b)};_.Oj=function(a,b,c){return(0,_.V)(_.X(a)+" {"+(b?"display: none;":"")+"background-color: black; height: 100%; left: 0; opacity: "+_.X(null!=c?c:"0.3")+"; position: fixed; top: 0; width: 100%; z-index: -1;}")};
_.Pj=function(a,b,c){b="div."+_.X(void 0===b?"fc-message-root":b)+" {";var d=3!==c;b+=(a?"":"position: "+_.X(d?"fixed":"relative")+"; z-index: 2147483644;")+(a||1!==c?"":"align-items: center; float: top; height: 100%; left: 0; overflow-x: auto; top: 0;")+(d?"align-items: center; display: flex; justify-content: center; width: 100%;":"")+"}";return(0,_.V)(b)};_.Qj=function(a){return(0,_.V)("div."+_.X(void 0===a?"fc-message-root":a)+" {display: flex; height: 100%; justify-content: center; width: 100%;}")};
_.Rj=function(a,b,c){c=1===c?"align-items: center; display: flex; height: 100%; justify-content: center; width: 100%;"+(b?"":"left: 0; position: fixed; top: 0;"):2===c?"bottom: 0; left: 0; right: 0;"+(b?"position: absolute;":"position: fixed;"):"";return(0,_.V)(_.X(a)+" {"+(b?"":"z-index: 2147483644;")+c+"}")};
_.Tj=function(a,b,c,d,e,f){var g=_.X(a)+" {align-items: center;",h,k,l=null!=(k=_.Sj.get(null!=(h=null==d?void 0:_.I(d,5))?h:2))?k:"";g+=2===c?"border-radius: "+_.X(l)+" "+_.X(l)+" 0 0; width: 100%;":"border-radius: "+_.X(l)+"; max-width: 600px; width: 90%;";d?(g+="background: "+_.X(null==d?void 0:_.P(d,2))+";",c=f?"40px":"32px",g+=b?"padding: "+_.X(c)+" 0 24px 0;":"padding: "+_.X(c)+" 24px 24px 24px;"):g=e?g+(_.Ej(e)+_.Fj(e)):g+"background: WHITE;";var n;c="box-sizing: border-box; display: flex; flex-direction: column; float: top; justify-content: center; max-height: 90%; min-width: 200px; position: relative;}@media screen and (max-width: 479px) {"+
_.X(a)+" {font-size: 14px; line-height: 20px;}}@media screen and (min-width: 480px) {"+_.X(a)+" {font-size: 16px; line-height: 24px;}}"+_.X(a)+" > *:not(:last-child) {margin-bottom: 24px;}";e=(0,_.V)(_.X(a)+" .fc-dialog-content {align-items: center; box-sizing: border-box; display: flex; flex-direction: column; overflow: auto; width: 100%;"+(b?"box-shadow: 0 25px 0 -24px "+_.X("#dadce0")+"; overflow-x: hidden; overflow-y: scroll; overflow-y: overlay; padding: 0 24px 0 24px;":"")+"}"+_.X(a)+" .fc-dialog-content > *:not(:last-child) {margin-bottom: 16px;}"+
_.X(a)+" .fc-dialog-content > * {flex-shrink: 0;}");c+=e;d=null!=(n=null==d?void 0:_.P(d,4))?n:null;a=(0,_.V)(_.X(a)+" .fc-dialog-footer {align-items: center; box-sizing: border-box; display: flex; flex-direction: column; font-size: inherit; min-height: auto; justify-content: center;"+(b?"padding: 0 24px;":"")+"width: 100%;"+(d?"font-family: "+_.X(d)+";":"")+"}"+_.X(a)+" .fc-dialog-footer .fc-footer-text {color: "+_.X("#5f6368")+"; display: inline-block; font-size: 12px;}"+_.X(a)+" .fc-dialog-footer > div:not(:last-child) {margin-bottom: 16px;}");
return(0,_.V)(g+(c+a))};
_.Uj=function(a,b,c,d,e){b=void 0===b?"fc-message-root":b;var f;c?f=_.Dj(_.P(c,3),_.D(c,_.Sh,6),void 0,void 0,void 0,void 0,void 0,!0):d?f=_.Dj(void 0,d):f="color: "+_.X("#6b6e76")+"; font-family: Poppins, sans-serif; font-size: 1em; font-weight: 400; line-height: 24px; text-align: center;";return(0,_.V)("."+_.X(b)+" .fc-header {display: flex; flex-direction: column; justify-content: center; width: 100%;}."+_.X(b)+" .fc-header-text {line-height: 1.5em;"+f+"}."+_.X(b)+" .fc-header-image-container {"+_.Gj(e)+
(e?"":"margin: 0 auto; -ms-flex-align: center")+"}."+_.X(b)+" .fc-header-image {max-height: 60px; min-height: 40px; object-fit: contain;}"+(a?"."+_.X(b)+" .fc-header-placeholder-image {border: 1px solid "+_.X("#dadce0")+"; border-radius: 4px; padding: 8px;}":""))};
_.Vj=function(a,b,c){a=void 0===a?"fc-message-root":a;var d;b?d=_.Dj(_.P(b,3),_.D(b,_.Sh,7),void 0,void 0,void 0,void 0,void 0,!0):c?d=_.Dj(void 0,c):d="color: "+_.X("#202124")+"; font-family: Poppins, sans-serif; font-size: 1.25em; font-weight: 500; line-height: 1.8em; text-align: center;";return(0,_.V)("."+_.X(a)+" .fc-dialog-headline {align-items: center; display: flex; flex-direction: column; justify-content: center; width: 100%;}."+_.X(a)+" .fc-dialog-headline > *:not(:last-child) {margin-bottom: 8px;}."+
_.X(a)+" .fc-dialog-headline-text {"+d+"width: 100%;}")};
_.Wj=function(a,b,c){a=void 0===a?"fc-message-root":a;var d;b?d="max-width: 400px;"+_.Dj(_.P(b,4),_.ii(b),void 0,void 0,void 0,void 0,void 0,!0):c?d=_.Dj(void 0,c):d="color: "+_.X("#6b6e76")+"; font-family: Roboto, sans-serif; font-size: 1em; text-align: center;";return(0,_.V)("."+_.X(a)+" .fc-dialog-body {display: flex; justify-content: center; width: 100%;}."+_.X(a)+" .fc-dialog-body-text {line-height: 1.5em; margin: 0; padding: 0; width: 100%;"+d+"}")};
_.Xj=function(a){a=void 0===a?"fc-message-root":a;return(0,_.V)("."+_.X(a)+" .fc-buttons-section {align-items: center; display: flex; flex-direction: column; justify-content: center; max-width: 416px; width: 100%;}."+_.X(a)+" .fc-buttons-section > *:not(:last-child) {margin-bottom: 16px;}@supports (flex-wrap: wrap) and (gap: 16px) {."+_.X(a)+" .fc-buttons-section {flex-direction: unset; flex-wrap: wrap; -ms-flex-wrap: wrap; gap: 16px;}."+_.X(a)+" .fc-buttons-section > *:not(:last-child) {margin-bottom: 0;}}")};
_.Zj=function(a,b,c,d){a=void 0===a?"fc-message-root":a;if(b){var e,f,g;var h="border-radius: "+_.X(null!=(f=Yj.get(null==b?void 0:_.I(b,5)))?f:"")+"; color: "+_.X(null!=(g=null==(e=_.gi(_.D(b,_.fi,11)))?void 0:_.R(e,3))?g:"")+"; padding: 8px 12px; min-height: 40px; justify-self: center; max-width: 400px; min-width: 200px;"}else if(c)h=_.Fj(c)+_.Ej(c,void 0,!0)+"overflow: hidden;";else{var k;h="border-radius: "+_.X(null!=(k=Yj.get(2))?k:"")+"; padding: 8px 12px; max-width: 352px;"}if(b){var l;c="background-color: "+
_.X(null==b?void 0:_.P(b,1))+"; border-radius: "+_.X(null!=(l=Yj.get(null==b?void 0:_.I(b,5)))?l:"")+";"}else if(c)c=_.Ej(c,void 0,void 0,!0,!0);else{var n;c="background-color: BLUE_900; border-radius: "+_.X(null!=(n=Yj.get(2))?n:"")+";"}var r;b?r=_.Dj(_.P(b,3),_.gi(_.D(b,_.fi,11)),void 0,void 0,void 0,void 0,void 0,!0):d?r=_.Dj(void 0,d):r="color: white; font-family: Poppins, sans-serif; font-size: 14px; font-weight: 500; text-align: center;";var w,y,z,G,M,T,la;return(0,_.V)("."+_.X(a)+" .fc-button {"+
h+"box-sizing: border-box; align-items: center; display: inline-flex; justify-content: center; position: relative; width: 100%; z-index: 1;}."+_.X(a)+" .fc-button:not(:only-child) {"+(b?"flex-grow: 1;":"")+"}@supports (flex-wrap: wrap) and (gap: 16px) {@media screen and (min-width: 480px) {"+(b?"."+_.X(a)+" .fc-button {width: fit-content;}":"")+"}}."+_.X(a)+" .fc-button .fc-button-background {"+c+"height: 100%; left: 0; position: absolute; top: 0; transition: all 150ms ease-in; width: 100%; z-index: -1; -webkit-transition: all 150ms ease-in; -moz-transition: all 150ms ease-in; -o-transition: all 150ms ease-in; -ms-transition: all 150ms ease-in;}."+
_.X(a)+" .fc-button.fc-secondary-button .fc-button-background {"+(b?"background-color: "+_.X(1===(null==(w=_.D(b,_.fi,12))?void 0:_.I(w,1))?null!=(M=_.R(b,10))?M:"#174ea6":null!=(T=_.R(b,2))?T:"#fff")+"; border: "+_.X(2===(null==(y=_.D(b,_.fi,12))?void 0:_.I(y,1))?"1px solid "+_.R(b,10):"none")+";":"")+"}."+_.X(a)+" .fc-button:hover:enabled .fc-button-background {filter: brightness(84%); transition: all 150ms ease-in; -webkit-transition: all 150ms ease-in; -moz-transition: all 150ms ease-in; -o-transition: all 150ms ease-in; -ms-transition: all 150ms ease-in;}."+
_.X(a)+" .fc-button:focus:enabled .fc-button-background, ."+_.X(a)+" .fc-button:active:enabled .fc-button-background {filter: brightness(61%); transition: all 150ms ease-in; -webkit-transition: all 150ms ease-in; -moz-transition: all 150ms ease-in; -o-transition: all 150ms ease-in; -ms-transition: all 150ms ease-in;}."+_.X(a)+" .fc-button-text {line-height: 1.25em; margin: 0; width: 100%;"+r+"}."+_.X(a)+" .fc-secondary-button > .fc-button-text {"+(b?"color: "+_.X(null!=(la=null==(z=_.D(b,_.fi,12))?
void 0:null==(G=_.gi(z))?void 0:_.R(G,3))?la:"")+";":"")+"}."+_.X(a)+" .fc-button:disabled .fc-button-text {color: "+_.X("#9aa0a6")+"; cursor: default;}."+_.X(a)+" .fc-button:disabled .fc-button-background {background-color: "+_.X("#dadce0")+"; cursor: default;}")};Lj=_.oj("div","h1","h2","a","p","button","i","input","label","span","ul","li","hr","img","br","footer");_.Sj=(new Map).set(1,"0").set(2,"8px").set(3,"16px");Yj=(new Map).set(1,"0").set(2,"4px").set(3,"18px");_.ik=function(){this.g=_.he()};_.jk=function(a,b,c){return _.uh(b,c,{},a.g)};_.kk=function(a,b){a=a(b||{},{});return new _.Mh(a.toString(),_.Lh)};
}catch(e){_._DumpException(e)}
try{
var ok;_.nk=function(a,b){if(!_.Od(a)||!_.Od(b)||a.length!=b.length)return!1;for(var c=a.length,d=0;d<c;d++)if(a[d]!==b[d])return!1;return!0};ok="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");_.pk=function(a){this.h="";this.g=_.he(a)};_.qk=function(a){a.h=a.g.g.body.style.overflow;a.g.g.body.style.overflow="hidden"};_.rk=function(a){a.g.g.body.style.overflow=a.h};var sk,tk;sk=_.Md(["https://fonts.googleapis.com/css?family=Archivo:400,500|Arimo:400,500|Bitter:400,500|EB+Garamond:400,500|Lato|Libre+Baskervill|Libre+Franklin:400,500|Lora:400,500|Google+Sans:regular,medium:400,500|Material+Icons|Google+Symbols|Merriweather|Montserrat:400,500|Mukta:400,500|Muli:400,500|Nunito:400,500|Open+Sans:400,500,600|Open+Sans+Condensed:400,600|Oswald:500|Playfair+Display:400,500|Poppins:400,500|Raleway:400,500|Roboto:400,500|Roboto+Condensed:400,500|Roboto+Slab:400,500|Slabo+27px|Source+Sans+Pro|Ubuntu:400,500|Volkhov&display=swap"]);
tk=_.Jd(sk);_.uk=function(a){this.h=a;this.g=null;this.i=_.he(a)};_.vk=function(a,b){b=void 0===b?null:b;if(!a.g){var c=null!==b?b:tk;a.g=_.ie(a.i.g,"LINK");a:{b=a.g;if(c instanceof _.Xd)b.href=_.Yd(c).toString();else{if(-1===ok.indexOf("stylesheet"))throw Error("J`stylesheet");c=_.mk(c);if(void 0===c)break a;b.href=c}b.rel="stylesheet"}a.h.document.head.insertBefore(a.g,a.h.document.head.firstChild)}};
}catch(e){_._DumpException(e)}
try{
var Ck=function(){},Dk=function(a){return a.parentWindow||a.defaultView},Ek=function(a){this.j=_.v(a)};_.A(Ek,_.J);var Fk=function(a){this.j=_.v(a)};_.A(Fk,_.J);var Gk=function(a){this.j=_.v(a)};_.A(Gk,_.J);var Hk=function(a){this.j=_.v(a)};_.A(Hk,_.J);var Ik=function(a){this.j=_.v(a)};_.A(Ik,_.J);var Jk=function(a){this.j=_.v(a)};_.A(Jk,_.J);var Kk=function(a){this.j=_.v(a)};_.A(Kk,_.J);
var Lk=function(a){var b=(b=_.df(a.context))?b:new _.cf;if(null!=_.hb(_.Fc(b,2))){_.Gc(b,2);var c=_.bh(a);b=_.F(c,2,b);_.fh(a,b)}},Mk=function(a){this.j=_.v(a)};_.A(Mk,_.J);var Nk=function(a){this.j=_.v(a)};_.A(Nk,_.J);var Ok=function(a){this.j=_.v(a)};_.A(Ok,_.J);var Pk=function(a){this.j=_.v(a)};_.A(Pk,_.J);Pk.B=[11];var Qk=function(a){this.j=_.v(a)};_.A(Qk,_.J);var Rk=function(a){this.j=_.v(a)};_.A(Rk,_.J);
var Sk=function(a){var b=a.match(_.ke);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e},Uk=function(){var a=window,b=Tk;b=_.zf(b);return _.He(a)?_.wf(a.h,"unload",b,!1):a?(a=_.Me(a))?_.wf(a,"unload",b,!1):null:null},Vk={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Wk=function(){},Xk=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=
b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Xk(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Yk(d,c),c.push(":"),Xk(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Yk(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;
case "function":c.push("null");break;default:throw Error("w`"+typeof b);}}},Yk=function(a,b){b.push('"',a.replace(_.Kf,function(c){var d=Vk[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Vk[c]=d);return d}),'"')},Zk=function(a,b){_.Hf.call(this);this.i=a||1;this.g=b||_.t;this.o=(0,_.ye)(this.Ec,this);this.s=Date.now()};_.re(Zk,_.Hf);_.m=Zk.prototype;_.m.Ta=!1;_.m.ga=null;_.m.setInterval=function(a){this.i=a;this.ga&&this.Ta?($k(this),this.start()):this.ga&&$k(this)};
_.m.Ec=function(){if(this.Ta){var a=Date.now()-this.s;0<a&&a<.8*this.i?this.ga=this.g.setTimeout(this.o,this.i-a):(this.ga&&(this.g.clearTimeout(this.ga),this.ga=null),_.Jf(this,"tick"),this.Ta&&($k(this),this.start()))}};_.m.start=function(){this.Ta=!0;this.ga||(this.ga=this.g.setTimeout(this.o,this.i),this.s=Date.now())};var $k=function(a){a.Ta=!1;a.ga&&(a.g.clearTimeout(a.ga),a.ga=null)};Zk.prototype.K=function(){Zk.ba.K.call(this);$k(this);delete this.g};var al=function(a,b,c){_.sf.call(this);this.g=a;this.i=b||0;this.h=c;this.o=(0,_.ye)(this.nc,this)};_.re(al,_.sf);_.m=al.prototype;_.m.ua=0;_.m.K=function(){al.ba.K.call(this);this.isActive()&&_.t.clearTimeout(this.ua);this.ua=0;delete this.g;delete this.h};_.m.start=function(a){this.isActive()&&_.t.clearTimeout(this.ua);this.ua=0;this.ua=_.wg(this.o,void 0!==a?a:this.i)};_.m.isActive=function(){return 0!=this.ua};_.m.nc=function(){this.ua=0;this.g&&this.g.call(this.h)};var bl=function(a){_.sf.call(this);this.h=a;this.g={}};_.re(bl,_.sf);var cl=[],dl=function(a){_.mh(a.g,function(b,c){this.g.hasOwnProperty(c)&&_.Ne(b)},a);a.g={}};bl.prototype.K=function(){bl.ba.K.call(this);dl(this)};bl.prototype.handleEvent=function(){throw Error("K");};var el=function(){_.sf.call(this);this.u={}};_.re(el,_.sf);el.prototype.connect=function(a){a&&a()};el.prototype.Ua=function(){return!0};var fl=function(a,b,c,d){a.u[b]={ca:c,Ub:!!d}};el.prototype.ka=function(a,b){var c=this.u[a];return c?c:this.A?{ca:_.kh(this.A,a),Ub:_.Nd(b)}:null};var gl=function(a,b){if(b&&"string"===typeof a)try{return JSON.parse(a)}catch(c){return null}else if(!b&&"string"!==typeof a)return b=[],Xk(new Wk,a,b),b.join("");return a};
el.prototype.K=function(){el.ba.K.call(this);delete this.u;delete this.A};/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
var hl=function(a,b){this.s=[];this.S=a;this.J=b||null;this.l=this.g=!1;this.i=void 0;this.C=this.Z=this.A=!1;this.u=0;this.h=null;this.o=0};_.re(hl,Ck);hl.prototype.cancel=function(a){if(this.g)this.i instanceof hl&&this.i.cancel();else{if(this.h){var b=this.h;delete this.h;a?b.cancel(a):(b.o--,0>=b.o&&b.cancel())}this.S?this.S.call(this.J,this):this.C=!0;this.g||this.M(new il(this))}};hl.prototype.G=function(a,b){this.A=!1;jl(this,a,b)};
var jl=function(a,b,c){a.g=!0;a.i=c;a.l=!b;kl(a)},ml=function(a){if(a.g){if(!a.C)throw new ll(a);a.C=!1}};hl.prototype.ca=function(a){ml(this);jl(this,!0,a)};hl.prototype.M=function(a){ml(this);jl(this,!1,a)};var ol=function(a,b,c){nl(a,b,null,c)},nl=function(a,b,c,d){a.s.push([b,c,d]);a.g&&kl(a)};hl.prototype.then=function(a,b,c){var d,e,f=new _.hg(function(g,h){e=g;d=h});nl(this,e,function(g){g instanceof il?f.cancel():d(g);return pl},this);return f.then(a,b,c)};hl.prototype.$goog_Thenable=!0;
var ql=function(a,b){b instanceof hl?ol(a,(0,_.ye)(b.aa,b)):ol(a,function(){return b})};hl.prototype.aa=function(a){var b=new hl;nl(this,b.ca,b.M,b);a&&(b.h=this,this.o++);return b};
var rl=function(a){return _.wk(a.s,function(b){return"function"===typeof b[1]})},pl={},kl=function(a){if(a.u&&a.g&&rl(a)){var b=a.u,c=sl[b];c&&(_.t.clearTimeout(c.g),delete sl[b]);a.u=0}a.h&&(a.h.o--,delete a.h);b=a.i;for(var d=c=!1;a.s.length&&!a.A;){var e=a.s.shift(),f=e[0],g=e[1];e=e[2];if(f=a.l?g:f)try{var h=f.call(e||a.J,b);h===pl&&(h=void 0);void 0!==h&&(a.l=a.l&&(h==b||h instanceof Error),a.i=b=h);if(_.fg(b)||"function"===typeof _.t.Promise&&b instanceof _.t.Promise)d=!0,a.A=!0}catch(k){b=
k,a.l=!0,rl(a)||(c=!0)}}a.i=b;d&&(h=(0,_.ye)(a.G,a,!0),d=(0,_.ye)(a.G,a,!1),b instanceof hl?(nl(b,h,d),b.Z=!0):b.then(h,d));c&&(b=new tl(b),sl[b.g]=b,a.u=b.g)},ll=function(){_.Re.call(this)};_.re(ll,_.Re);ll.prototype.message="Deferred has already fired";ll.prototype.name="AlreadyCalledError";var il=function(){_.Re.call(this)};_.re(il,_.Re);il.prototype.message="Deferred was canceled";il.prototype.name="CanceledError";
var tl=function(a){this.g=_.t.setTimeout((0,_.ye)(this.throwError,this),0);this.h=a};tl.prototype.throwError=function(){delete sl[this.g];throw this.h;};var sl={};var ul=["pu","lru","pru","lpu","ppu"],wl=function(){for(var a=10,b=vl,c=b.length,d="";0<a--;)d+=b.charAt(Math.floor(Math.random()*c));return d},vl="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";var xl=function(a){_.sf.call(this);this.M=a||_.he()};_.re(xl,_.sf);var zl=function(a,b,c,d,e){xl.call(this,c);this.s=a;this.u=e||2;this.pa=b||"*";this.S=new bl(this);this.A=new Zk(100,Dk(this.M.g));this.Z=!!d;this.i=new hl;this.o=new hl;this.h=new hl;this.oa=wl();this.J=null;this.Z?1==yl(this.s)?ql(this.h,this.i):ql(this.h,this.o):(ql(this.h,this.i),2==this.u&&ql(this.h,this.o));ol(this.h,this.Bc,this);this.h.ca(!0);a=this.S;b=this.A;c=this.Rb;d="tick";Array.isArray(d)||(d&&(cl[0]=d.toString()),d=cl);for(e=0;e<d.length;e++){var f=_.Cf(b,d[e],c||a.handleEvent,!1,
a.h||a);if(!f)break;a.g[f.key]=f}};_.re(zl,xl);zl.prototype.g=null;zl.prototype.aa=!1;var Al={};zl.prototype.C=0;
var El=function(a){var b=a.h.data;if("string"!==typeof b)return!1;var c=b.indexOf("|"),d=b.indexOf(":");if(-1==c||-1==d)return!1;var e=b.substring(0,c);c=b.substring(c+1,d);b=b.substring(d+1);if(d=Bl[e])return d.Eb(c,b,a.h.origin),!0;d=Cl(b)[0];for(var f in Bl){var g=Bl[f];if(1==yl(g)&&!g.Ua()&&"tp"==c&&("SETUP"==d||"SETUP_NTPV2"==d)&&Dl(g,a.h.origin))return delete Bl[g.name],g.name=e,Bl[e]=g,g.Eb(c,b),!0}return!1},Fl=function(a){2!=a.u||null!=a.g&&2!=a.g||a.va("tp","SETUP_NTPV2,"+a.oa);null!=a.g&&
1!=a.g||a.va("tp","SETUP")},Gl=function(a,b){if(2!=a.u||null!=a.g&&2!=a.g||2!=b){if(null!=a.g&&1!=a.g||1!=b)return;a.va("tp","SETUP_ACK")}else a.va("tp","SETUP_ACK_NTPV2");a.o.g||a.o.ca(!0)},Hl=function(a,b){b>a.g&&(a.g=b);1==a.g&&(a.o.g||a.Z||a.o.ca(!0),a.J=null)};_.m=zl.prototype;_.m.connect=function(){var a=Dk(this.M.g),b=_.jh(a),c=Al[b];"number"!==typeof c&&(c=0);0==c&&_.Cf(a.postMessage?a:a.document,"message",El,!1,zl);Al[b]=c+1;this.aa=!0;this.Rb()};
_.m.Rb=function(){var a=0==yl(this.s);this.Z&&a||this.s.Ua()||this.l?$k(this.A):(this.A.start(),Fl(this))};_.m.va=function(a,b){var c=this.s.Pa;c&&(this.va=function(d,e){var f=this,g=this.s.name;this.C=_.wg(function(){f.C=0;try{var h=c.postMessage?c:c.document;h.postMessage&&h.postMessage(g+"|"+d+":"+e,f.pa)}catch(k){}},0)},this.va(a,b))};
_.m.Bc=function(){var a=this.s,b=1==this.u||1==this.g?200:void 0;a.Ua()||a.qa&&a.qa.isActive()||(a.Da=2,_.Ve(a.qa),void 0!==b?(a.qa=new al(a.o,b),a.qa.start()):(a.qa=null,a.o()))};
_.m.K=function(){if(this.aa){var a=Dk(this.M.g),b=_.jh(a),c=Al[b];Al[b]=c-1;1==c&&_.Af(a.postMessage?a:a.document,"message",El,!1,zl)}this.C&&(_.t.clearTimeout(this.C),this.C=0);_.Ve(this.S);delete this.S;_.Ve(this.A);delete this.A;this.i.cancel();delete this.i;this.o.cancel();delete this.o;this.h.cancel();delete this.h;delete this.va;zl.ba.K.call(this)};var Cl=function(a){a=a.split(",");a[1]=a[1]||null;return a};var Il=function(a,b){el.call(this);for(var c=0,d;d=ul[c];c++)if(d in a&&!/^https?:\/\//.test(a[d]))throw Error("L`"+a[d]+"`"+d);this.g=a;this.name=this.g.cn||wl();this.h=b||_.he();this.i=[];this.s=new bl(this);a.lpu=a.lpu||Sk(Dk(this.h.g).location.href)+"/robots.txt";a.ppu=a.ppu||Sk(a.pu||"")+"/robots.txt";Bl[this.name]=this;Uk()||_.Bf(window,"unload",Tk)};_.re(Il,el);var Jl=RegExp("^%+tp$");_.m=Il.prototype;_.m.qa=null;_.m.Ba=null;_.m.ta=null;_.m.Da=1;_.m.Ua=function(){return 2==this.Da};
_.m.Pa=null;_.m.mb=null;_.m.connect=function(a){this.o=a||_.rf;3==this.Da&&(this.Da=1);this.Ba?ol(this.Ba,this.Lb):this.Lb()};
_.m.Lb=function(){this.Ba=null;if(this.g.ifrid){var a=this.h.g,b=this.g.ifrid;this.mb="string"===typeof b?a.getElementById(b):b}this.mb&&((a=this.mb.contentWindow)||(a=window.frames[this.g.ifrid]),this.Pa=a);if(!this.Pa){if(window==window.top)throw Error("N");this.Pa=window.parent}if(!this.ta){this.g.tp||(this.g.tp="function"===typeof document.postMessage||"function"===typeof window.postMessage||_.rc&&window.postMessage?1:0);if("function"===typeof this.g.tp)this.ta=new this.g.tp(this,this.h);else switch(this.g.tp){case 1:this.ta=
new zl(this,this.g.ph,this.h,!!this.g.osh,this.g.nativeProtocolVersion||2)}if(!this.ta)throw Error("M");}for(this.ta.connect();0<this.i.length;)this.i.shift()()};_.m.close=function(){this.Ba&&(this.Ba.cancel(),this.Ba=null);this.i.length=0;dl(this.s);this.Da=3;_.Ve(this.ta);this.o=this.ta=null;_.Ve(this.qa);this.qa=null};
_.m.Eb=function(a,b,c){if(this.Ba)this.i.push((0,_.ye)(this.Eb,this,a,b,c));else if(Dl(this,c)&&!this.l&&3!=this.Da)if(a&&"tp"!=a)this.Ua()&&(a=a.replace(/%[0-9a-f]{2}/gi,decodeURIComponent),a=Jl.test(a)?a.substring(1):a,a=this.ka(a,b))&&(b=gl(b,a.Ub),null!=b&&a.ca(b));else switch(a=this.ta,c=Cl(b),b=c[1],c[0]){case "SETUP_ACK":Hl(a,1);a.i.g||a.i.ca(!0);break;case "SETUP_ACK_NTPV2":2==a.u&&(Hl(a,2),a.i.g||a.i.ca(!0));break;case "SETUP":Hl(a,1);Gl(a,1);break;case "SETUP_NTPV2":2==a.u&&(c=a.g,Hl(a,
2),Gl(a,2),1!=c&&null==a.J||a.J==b||Fl(a),a.J=b)}};var yl=function(a){var b=a.g.role;return"number"===typeof b?b:window.parent==a.Pa?1:0},Dl=function(a,b){var c=a.g.ph;return/^[\s\xa0]*$/.test(null==b?"":String(b))||/^[\s\xa0]*$/.test(null==c?"":String(c))||b==a.g.ph};Il.prototype.K=function(){this.close();this.mb=this.Pa=null;delete Bl[this.name];_.Ve(this.s);delete this.s;Il.ba.K.call(this)};var Tk=function(){for(var a in Bl)_.Ve(Bl[a])},Bl={};var Ll=function(a,b){this.u=a;this.s=b;this.l=this.h=this.g=null;this.i=_.he(a);this.o=new _.pk(a);Kl(this)},Kl=function(a){var b=function(){a.g&&a.g.style.setProperty("display","none","important");a.l.style.setProperty("display","","important");a.l.querySelector(".fc-dialog-container")&&a.l.querySelector(".fc-dialog-container").focus();_.rk(a.o)};a.g=a.i.h("DIV",{"class":"fc-whitelist-root"});a.g.style.setProperty("display","none","important");a.i.g.body.appendChild(a.g);var c=a.i.h("DIV",{"class":"fc-dialog-overlay"});
a.g.appendChild(c);var d=a.i.h("DIV",{"class":"fc-whitelist-dialog-wrapper",onclick:b});a.g.appendChild(d);c=a.i.h("IFRAME");c.className="fc-whitelist-dialog";c.frameBorder="0";c.id="fc-whitelist-iframe";c.src=_.Yd(a.s).toString();d.appendChild(c);d={};d.pu=_.Yd(a.s).toString();d.tp=1;d.cn="fc-whitelist-channel";d.ifrid=c.id;d.osh=!0;a.h=new Il(d);fl(a.h,"close",b);fl(a.h,"refresh",function(){a.u.location.reload()});fl(a.h,"resize",function(e){if(e){var f=a.g.querySelector(".fc-whitelist-dialog");
e.width&&f.style.setProperty("width",e.width,"important");e.height&&f.style.setProperty("height",e.height,"important")}},!0);a.h.connect()};var Nl=function(a){return Ml(a.D,a.T)},Ml=function(a,b){var c="",d=_.ci(_.oi(a)),e,f=null==(e=d?_.E(d,_.Wh,2).filter(function(M){return _.vd(M,Rk,1,_.Xh)}):null)?void 0:_.xd(e[0],Rk,1,_.Xh);c+='<div class="fc-ab-root"><div class="fc-dialog-container">'+_.uj();e=_.D(_.xd(_.oi(a),Qk,1,_.di),Pk,1);d=_.P(f,1);var g=_.P(f,2),h=_.P(f,3),k="",l=(new Map).set(3,"whitelist").set(2,"custom-choice"),n=(new Map).set(3,_.P(f,4)).set(2,_.P(f,5)),r,w=(null==(r=_.mi(a))?void 0:_.ai(r)).filter(function(M){var T=Array.from(n.keys());
M=M.F();return 0<=_.nj(T,M)});r=w.length;for(var y=0;y<r;y++){var z=w[y];k+=_.Cj(n.get(z.F()),"fc-button fc-button-"+l.get(z.F()))}k=""+(0,_.S)('<div class="fc-buttons-section">'+_.U((0,_.Gi)(k))+"</div>");f=_.R(f,6);if(0<_.ai(_.mi(a)).filter(function(M){return 2===M.F()}).length&&f){var G;l=null==(G=_.D(e,Nk,6))?void 0:_.D(G,Mk,4);k+='<a class="fc-subscription-link"'+(b||null==_.R(l,1)||0===_.R(l,1).length?"":" href="+_.Oi(_.jj(_.R(l,1))))+">"+_.U(f)+"</a>"}c+=_.wj("fc-ab-dialog",a,(0,_.Gi)(""+_.zj(d,
b,_.D(e,_.Uh,9))+_.Bj(g)+_.Aj(h)),d+". "+g+". "+h+" ",void 0,(0,_.Gi)(k));return(0,_.S)(c+"</div></div>")};var Ol=function(a){var b=a.D;a=a.T;var c,d=""+_.Mj("fc-ab-root")+_.Mj("fc-whitelist-root",_.oj("div","iframe"))+_.Jj("fc-ab-root",".fc-ab-root .fc-button, .fc-ab-root .fc-dialog")+_.Qj("fc-ab-root")+_.Pj(a,"fc-whitelist-root",1)+_.Hj("fc-ab-root")+_.Oj(".fc-ab-root .fc-dialog-overlay, .fc-whitelist-root .fc-dialog-overlay",a,"0.6")+_.Rj(".fc-ab-root .fc-dialog-container",a,null==b?void 0:null==(c=_.D(b,_.ei,4))?void 0:_.I(c,1)),e;c=null==(e=_.ni(b))?void 0:_.ki(e);e=_.D(_.xd(_.oi(b),Qk,1,_.di),Pk,
1);var f,g,h,k,l,n,r,w,y,z;d+=_.Tj(".fc-ab-root .fc-ab-dialog",void 0,null==b?void 0:null==(f=_.D(b,_.ei,4))?void 0:_.I(f,1),c,null==(g=_.D(e,Ok,2))?void 0:_.D(g,_.Rh,5))+_.Vj("fc-ab-root",c,null==(h=_.D(e,Ok,2))?void 0:_.D(h,_.Sh,3))+_.Uj(a,"fc-ab-root",c,null==(k=_.D(e,Ok,2))?void 0:_.D(k,_.Sh,2),null==(l=_.D(e,_.Uh,9))?void 0:_.Vh(l))+_.Wj("fc-ab-root",c,null==(n=_.D(e,Ok,2))?void 0:_.D(n,_.Sh,1))+_.Zj("fc-ab-root",c,null==(r=_.D(e,Ok,2))?void 0:_.D(r,_.Rh,6),null==(w=_.D(e,Ok,2))?void 0:_.D(w,
_.Sh,4))+_.Xj("fc-ab-root")+".fc-ab-root .fc-dialog-footer .fc-subscription-link {color: "+_.X(null!=(z=null==c?void 0:_.P(c,1))?z:"#174ea6")+"; cursor: pointer; line-height: 1.25em; max-width: 400px;"+(c?_.Dj(null==c?void 0:_.P(c,3),_.gi(_.D(c,_.fi,11)),!0,!0,void 0,void 0,void 0,!0):_.Dj(void 0,null==(y=_.D(e,Ok,2))?void 0:_.D(y,_.Sh,8))+"font-size: 1em;")+"}.fc-whitelist-root .fc-whitelist-dialog-wrapper {align-items: center; display: flex; justify-content: center; height: 100%; left: 0; opacity: 1; position: fixed; top: 0; width: 100%;}.fc-whitelist-root .fc-whitelist-dialog {box-shadow: 1px -1px 16px #888888; border-radius: 2px; height: 100%; left: 0; max-height: 570px; max-width: 600px; top: 0; width: 100%;}";
return(0,_.V)(d)};var Pl=function(a,b,c,d,e){this.g=a;this.u=b;this.A=c;this.G=d;this.i=e;this.l=this.h=this.o=null;this.C=new _.$g(this.g.document,_.P(this.A,4),new _.Lg(_.yk(this.G)));this.s=new _.pk(this.g);this.D=_.D(this.u,_.li,5)},Sl=function(a){Lk(a.C);a.h=_.uh(Nl,{D:a.D,T:!1});a.g.document.body?(Ql(a),a.o=new Ll(a.g,_.Kd(_.D(a.u,_.pe,3)))):"MutationObserver"in a.g?new Promise(function(b){var c=new MutationObserver(function(){a.g.document.body&&(Ql(a),c.disconnect(),b(!0))});c.observe(a.g.document,{attributes:!0,
childList:!0,subtree:!0})}):Rl(a.i)},Ql=function(a){a.l=a.g.document.activeElement;null!==a.h&&a.g.document.body.appendChild(a.h);a.i.Cb();a.g.document.querySelector(".fc-ab-dialog").focus();1===_.I(_.D(a.D,_.ei,4),2)&&_.qk(a.s);for(var b=_.q(_.ai(_.mi(a.D))),c=b.next();!c.done;c=b.next())switch(c.value.F()){case 3:Tl(a,".fc-button-whitelist",function(){Ul(a.i,2);var d=a.o;d.l=a.h;d.g.style.setProperty("display","flex","important");_.qk(d.o);d.l.style.setProperty("display","none","important");d.g.querySelector(".fc-whitelist-dialog").focus()});
break;case 2:Tl(a,".fc-button-custom-choice",function(){var d=_.D(_.xd(_.oi(a.D),Qk,1,_.di),Pk,1);if(_.mf(_.D(d,Nk,6),5)&&0!==_.P(_.D(d,Nk,6),5).length){var e=a.g.location;d=_.P(_.D(d,Nk,6),5);d=_.mk(d);void 0!==d&&(e.href=d)}Ul(a.i,3)})}Tl(a,".fc-close",function(){Ul(a.i,4);a.h&&(a.g.document.body.removeChild(a.h),a.h=null);1===_.I(_.D(a.D,_.ei,4),2)&&_.rk(a.s);var d=a.o;if(d.g){var e=d.g;e&&e.parentNode&&e.parentNode.removeChild(e);d.g=null}d.h&&d.h.close();null!==a.l&&a.l.focus()})},Tl=function(a,
b,c){a=a.h.querySelectorAll(b);for(b=0;b<a.length;b++)a[b].addEventListener("click",c,!1)};var Vl=function(a){this.j=_.v(a)};_.A(Vl,_.J);var Wl=function(a){this.j=_.v(a)};_.A(Wl,_.J);var Xl=function(a){this.j=_.v(a)};_.A(Xl,_.J);var Yl=_.x(Xl);var Zl=function(a){this.g=a};Zl.prototype.Cb=function(){var a=new _.se,b=new Kk;var c=new Ik;var d=new Hk;c=_.F(c,2,d);b=_.F(b,1,c);_.Ic(a,13,_.te,b);this.g.I(a)};var Ul=function(a,b){var c=new _.se,d=new Jk;b=_.L(d,1,b);d=new Kk;b=_.F(d,2,b);_.Ic(c,13,_.te,b);a.g.I(c)},Rl=function(a){var b=new _.se,c=new Kk,d=new Ik;var e=new Gk;var f=new Fk;var g=new Ek;f=_.F(f,1,g);e=_.F(e,2,f);d=_.F(d,1,e);c=_.F(c,1,d);_.Ic(b,13,_.te,c);a.g.I(b)};var $l=function(a,b,c,d,e){this.o=a;this.g=b;this.s=c;this.h=d;this.i=e;this.l=new Zl(this.i);this.u=new _.uk(this.o);this.D=_.D(this.g,_.li,5)};$l.prototype.run=function(){if(2===_.I(this.g,4))var a=4;else if(this.i.Sa.has("ad_blocking")){a=this.l;var b=new _.se,c=new Kk,d=new Ik;var e=new Gk;e=_.L(e,1,1);d=_.F(d,1,e);c=_.F(c,1,d);_.Ic(b,13,_.te,c);a.g.I(b);a=4}else am(this),a=5;return _.Lc(_.zk(this.h)?_.Cb(_.zk(this.h)):new _.Kc,a)};
var am=function(a){_.vk(a.u);new _.ik;var b=_.qi(_.kk(Ol,{T:!1,D:a.D}));_.qh(b);_.I(a.g,4);_.t.setTimeout(function(){Sl(new Pl(a.o,a.g,a.s,a.h,a.l))},10)};var bm=function(){};bm.prototype.run=function(a,b,c){var d,e;return _.B(function(f){if(1==f.g)return d=Yl(b),_.N(f,(new $l(a,_.D(d,Wl,1),_.D(d,Vl,2),_.D(d,_.xk,7),c)).run(),2);e=f.h;return f.return({da:_.K(e)})})};_.Bk(6,new bm);
}catch(e){_._DumpException(e)}
}).call(this,this.default_ContributorServingResponseClientJs);
// Google Inc.

//# sourceURL=/_/mss/boq-content-ads-contributor/_/js/k=boq-content-ads-contributor.ContributorServingResponseClientJs.es.1fGtZnY0whY.es5.O/d=1/exm=ad_blocking_detection_executable,kernel_loader,loader_js_executable/ed=1/rs=AJlcJMz5uDX-52hIui7f-OmmJJg3ZgDv7w/m=ad_blocking_wall_executable
__googlefc.fcKernelManager.run('\x5b\x5b\x5b6,\x22\x5b\x5bnull,null,\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/s\/whitelist?hl\\\\u003did\\\x22\x5d,1,\x5b1,\x5b\x5b\x5bnull,\x5b\x5b\\\x22Roboto\\\x22,\x5b1,1\x5d,\\\x22#000000\\\x22,0,0,0,2\x5d,\x5b\\\x22Roboto\\\x22,\x5b1.25,1\x5d,\\\x22#747a80\\\x22,1,0,0,2\x5d,\x5b\\\x22Roboto\\\x22,\x5b1.5,1\x5d,\\\x22#323232\\\x22,0,0,0,2\x5d,\x5b\\\x22Roboto\\\x22,\x5b1,1\x5d,\\\x22#ffffff\\\x22,1,0,0,2\x5d,\x5b\\\x22#ffffff\\\x22,\\\x22#ffffff\\\x22,\x5b1,1\x5d,\x5b0,2\x5d,\x5b1.5,1\x5d,\x5b1.5,1\x5d\x5d,\x5b\\\x22#007aff\\\x22,\\\x22#ffffff\\\x22,\x5b0.5,1\x5d,\x5b0,2\x5d,\x5b0,1\x5d,\x5b0.5,1\x5d\x5d,\x5b\\\x22Roboto\\\x22,\x5b0.85,1\x5d,\\\x22#747a80\\\x22,null,null,null,2\x5d,\x5b\\\x22Roboto\\\x22,\x5b1,1\x5d,\\\x22#4A90E2\\\x22,null,null,null,2\x5d,\x5b\\\x22Roboto\\\x22,\x5b1,1\x5d,\\\x22#ffffff\\\x22,1,0,0,2\x5d,\x5b\\\x22Roboto\\\x22,\x5b1,1\x5d,\\\x22#ffffff\\\x22,1,0,0,2\x5d,\x5b\\\x22#007aff\\\x22,\\\x22#ffffff\\\x22,\x5b0.5,1\x5d,\x5b0,2\x5d,\x5b0,1\x5d,\x5b0.5,1\x5d\x5d,\x5b\\\x22#007aff\\\x22,\\\x22#ffffff\\\x22,\x5b0.5,1\x5d,\x5b0,2\x5d,\x5b0,1\x5d,\x5b0.5,1\x5d\x5d\x5d,null,null,null,null,null,null,\x5b\\\x22https:\/\/lh3.googleusercontent.com\/AwztEa4YQHXLBIlxQLgQxjo71DSU9Rzck3QwH1JgT1SCldnzgd9yzeFgm0mkSXBd5iczc1kEcJVjkx732JGKNmvGcrmXmEfEbnkhrWU4awbisRIf32Iq\\\x22,\x5b2\x5d,\\\x22tribun-network-logo.png\\\x22,3\x5d\x5d\x5d,null,null,null,null,null,\x5b\\\x22id\\\x22,\x5b\x5b\x5b\\\x22Selamat datang di tribunnews\\\x22,\\\x22Kami mendeteksi Adblocker di perangkatmu\\\x22,\\\x22Iklan membantu kami untuk terus menghadirkan jurnalisme berkualitas. Dukung kami dengan menonaktifkan Adblocker.\\\x22,\\\x22Izinkan iklan\\\x22\x5d\x5d\x5d\x5d\x5d,\x5b\x5b\x5b3\x5d,\x5b1\x5d\x5d\x5d,\x5b1,1\x5d\x5d\x5d,\x5bnull,null,null,\\\x22tribunnews.com\\\x22\x5d,null,null,null,null,\x5b\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxUVxzO6jBq4aAo4hVkgChnwc1UCV1RN5Pl5x9vuQNrUnOUEO2m_r8KtFqXhtE5h8ollEt6W3AqMsA1vHa__nK3iSBok33zfXxS_e_baFePB6y85S4jxhcoA2jSWAI5r_qV98tvwhQ\\\\u003d\\\\u003d\\\x22\x5d,null,null,\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxXklao9sqaIz9WEhZAIMHG6ON07cKKDQ6KQ8b36ec_qTdaWyf9hr7PqL49qWexz6DhcJ2tGNmujeK5t7_-OrJuW6UlOFO6iQAa4LDo1yyQvGBfrJR-khRoYeud7hPk_0nVguDrQLw\\\\u003d\\\\u003d\\\x22\x5d,\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxUMU0NQ06aR4SRMdVp0cG-rgYKUb8BhMw0mEvoCX3bJNm8hPHKpeCean4chevYnaqcfrsJZdmuULKrhQfi_0jJ3YODBs-Xp9MWbVESIB-8gO0V_SKiY5XbOQueRcTawH4fGGQgKwA\\\\u003d\\\\u003d\\\x22\x5d,\x5bnull,\x5b7,6\x5d,null,null,null,null,null,null,null,null,null,2\x5d,null,null,null,null,null,\\\x22f9750e300e4a4fab\\\x22,null,\x5bnull,null,null,\\\x22https:\/\/fundingchoicesmessages.google.com\/_\/ContributorServingWebSwitchboardHttp\/jserror\\\x22\x5d\x5d\x5d\x22\x5d\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/f\/AGSKWxVVuhiMMznDoISH23Aym0Uf4atOYXe8Wlg1a_pUM7fe1aqJ7scC1pgPmdXVRj0_7XiLuX_ZKW09alqsfXBM9KuL2YDwtuw4l1QiTOWEIzfom4PEMZi8czg333GXlGa-mxhS6nlUMQ\\u003d\\u003d\x22\x5d,\x5bnull,null,null,\x22https:\/\/fundingchoicesmessages.google.com\/el\/AGSKWxUx8SetiaSS5cirzXkuy6NZt4JH5xH1e-DCCIQuiqrg-rXfxPv8l4CRFwLxmGu6BVkG4amMdfFxW_BpWYUSzpIctgOgFWrIR7zICS6TfnTNo_9kCGHGofrINjqumxI0IbsH1Rpx-Q\\u003d\\u003d\x22\x5d\x5d');}-Leaderboard'); });
</script>
</div>
</div>
		<div class="cl2"></div>
	</div>
		<div class="main" style="padding-top:0px;z-index:1">
		<style>
.ico_ramadhan_3{position:relative!important}.ico_ramadhan_3{background:#0ca542}.ico_ramadhan_3:before{content:"";display:block;background-image:url('https://asset-1.tstatic.net/img/ramadan/mosque-icon.png');position:absolute;width:80px;height:22px;background-size:95px 30px;background-repeat:no-repeat;left:0;top:-22px;z-index:0}.ico_ramadhan_3:after{content:"";display:block;background-image:url('https://asset-1.tstatic.net/img/ramadan/ketupat-icon.png');position:absolute;width:40px;height:45px;background-size:40px 45px;background-repeat:no-repeat;left:50px;top:0}.ico_ramadhan_3 a{z-index:1;color:#fff;text-shadow:1px 1px #565656;position:relative}
.tjb-item-menu{display: block;margin-left: 30px;margin-bottom: 10px;margin-top: 5px;}.tjb-item-menu:last-child{margin-bottom: 15px;}.tjb-item-menu a:before {content:"";float:left;position:absolute;top:0;left:-11px;width:0;height:2px;border-color:transparent #0089e0 transparent transparent;border-style:solid;border-width:11px 11px 11px 0;}.tjb-item-menu a:after {content:"";position:absolute;top:10px;left:0;float:left;width:4px;height:4px;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;background:#fff;-moz-box-shadow:-1px -1px 2px #004977;-webkit-box-shadow:-1px -1px 2px #004977;box-shadow:-1px -1px 2px #004977;}.tjb-item-menu a{font-size: 14px;background-color: #eee;padding: .25em .5em!important;color: #fff!important;position: relative!important;width: fit-content!important;display: inline!important;}.tjb-item-menu a:hover{box-shadow: 2px 5px 15px rgba(.5,.5,.5,.2);transition: .3s all ease;}.tjb-item-menu a:hover {background-color:transparent;color:#fff;text-decoration: none;}.tjb-item-menu:nth-child(8n+1) a{background: linear-gradient(to right, #EE2A1F 0%, #F89835 100%);}.tjb-item-menu:nth-child(8n+1) a:before{border-color:transparent #EE2A1F transparent transparent;}.tjb-item-menu:nth-child(8n+2) a{background: linear-gradient(to right, #F89835 0%, #FFCB0F 100%);}.tjb-item-menu:nth-child(8n+2) a:before{border-color:transparent #F89835 transparent transparent;}.tjb-item-menu:nth-child(8n+3) a{background: linear-gradient(to right, #FFCB0F 0%, #80C65F 100%);}.tjb-item-menu:nth-child(8n+3) a:before{border-color:transparent #FFCB0F transparent transparent;}.tjb-item-menu:nth-child(8n+4) a{background: linear-gradient(to right, #80C65F 0%, #43A3DA 100%);}.tjb-item-menu:nth-child(8n+4) a:before{border-color:transparent #80C65F transparent transparent;}.tjb-item-menu:nth-child(8n+5) a{background: linear-gradient(to right, #43A3DA 0%, #8563AC 100%);}.tjb-item-menu:nth-child(8n+5) a:before{border-color:transparent #43A3DA transparent transparent;}.tjb-item-menu:nth-child(8n+6) a{background: linear-gradient(to right, #8563AC 0%, #A268AD 100%);}.tjb-item-menu:nth-child(8n+6) a:before{border-color:transparent #8563AC transparent transparent;}.tjb-item-menu:nth-child(8n+7) a{background: linear-gradient(to right, #A268AD 0%, #707171 100%);}.tjb-item-menu:nth-child(8n+7) a:before{border-color:transparent #A268AD transparent transparent;}.tjb-item-menu:nth-child(8n+8) a{background: linear-gradient(to right, #707171 0%, #908E8E 100%);}.tjb-item-menu:nth-child(8n+8) a:before{border-color:transparent #707171 transparent transparent;}
/*.pon-xx{background:linear-gradient(to right,#bf272b ,#601416);position:relative!important}.pon-xx a{padding:12px 9px 10px 30px!important}.pon-xx a:after{content:'';position:absolute;width:50px;height:39px;background-image:url(https://asset-2.tstatic.net/img/ponxxpapua/ponxx-small.svg);top:5px;left:0;display:block;background-size:cover}.pon-xx.selected a:after{background-image:url(https://asset-2.tstatic.net/img/ponxxpapua/ponxx-small-sel.svg)}*/
.mgpa{background:linear-gradient(to right,#000,#b60b0b);position:relative!important}.mgpa a{padding-left:35px!important}.mgpa a:after{content:'';position:absolute;width:35px;height:24px;background-image:url('https://asset-1.tstatic.net/img/motogp/assets/mgpa.svg');top:10px;left:0;display:block;background-size:cover}li.election {width:215px!important;background:#0066B3!important;}li.election a, li.election a:hover{filter:drop-shadow(2px 2px 3px rgb(0 0 0 / 30%));background-image:url('https://asset-1.tstatic.net/img/matlok_memilih.png')!important;background-position:right center!important;background-repeat:no-repeat!important;background-size:50px!important;padding-right:50px!important;}li.election ul{padding: 10px 0 15px!important;}li.election li a,li.election li a:hover{background-image:none!important;}

</style>
<script type="text/javascript">
function moveScroller_menu() {
    var movemenu = function() {
        var st = $(window).scrollTop();
        var ot = $("#fixposmenu").offset().top - 30;
        var s = $("#main-menu");
        if(st > ot) {
			if(window.innerHeight < 700) {
				var heo = 0;
			}else {
				var heo = 1;
			}
            s.css({
                "position": "fixed",
                "top": "50px",
				"left": "0",
				"margin-top": "0",
				"z-index":"9",
				"opacity":heo,
				"width":"100%",
				"background":"rgba(1,111,186,.95)"
            });
			$(".main-menu > div > ul > li:first-child").css("border-left","1px solid rgba(0,0,0,.1)");
			$(".main-menu > div > ul > li:last-child").css("border-right","1px solid rgba(0,0,0,.1)");
			$(".theader").hover(function(){
				s.css({
					"opacity":"1",
				});
				if($( "#share" ).css( "top" ) == '60px') {
					$("#share").css({
						"top":"95px",
					});
				}
			});
			$("#fixposmenu").html("&nbsp");
        } else {
            if(st <= ot) {
                s.css({
                    "position": "relative",
                    "top": "",
					"opacity":"1",
					"margin-top": "0px",
					"background":"rgba(1,111,186,1)"
                });
				$(".main-menu > div > ul > li:first-child").css("border-left","none");
				$(".main-menu > div > ul > li:last-child").css("border-right","none");
				$("#fixposmenu").html("");
       	     }
        }
    };
    $(window).scroll(movemenu);
    movemenu();
}
$(document).ready(function(){
	moveScroller_menu();
});
</script>
<div id="fixposmenu"></div>
<div class="main-menu" id="main-menu" style="z-index:9;margin-top:0px">
<div>
<ul>
<li ><a href="https://madura.tribunnews.com/" title="Home">Home</a></li>

												<li class="nw ">
								<a href="https://madura.tribunnews.com/madura"  title="Madura">Madura</a>
							</li>
																<li class="election"><a href="https://madura.tribunnews.com/mata-lokal-memilih" title="Mata Lokal Memilih">Mata Lokal Memilih</a>
							<ul>
								<li><a href="https://madura.tribunnews.com/mata-lokal-memilih/pemilu-legislatif" title="Pemilu Legislatif">Pemilu Legislatif</a></li>
								<li><a href="https://madura.tribunnews.com/mata-lokal-memilih/pilpres" title="Pilpres" >Pilpres</a></li>
								<li><a href="https://madura.tribunnews.com/mata-lokal-memilih/pilkada" title="Pilkada">Pilkada</a></li>
								<li><a href="https://www.tribunnews.com/mata-lokal-memilih/sejarah-pemilu/?utm_source=https://madura.tribunnews.com/" target="_blank" title="Sejarah Pemilu">Sejarah Pemilu</a></li>
								<li><a href="https://www.tribunnews.com/mata-lokal-memilih/agenda-pemilu/?utm_source=https://madura.tribunnews.com/" target="_blank" title="Agenda Pemilu">Agenda Pemilu</a></li>
							</ul>
						</li>
									<li class="nw ">
								<a href="https://madura.tribunnews.com/news"  title="News">News</a>
							</li>
														<li class="nw ">
								<a href="https://madura.tribunnews.com/madura-united"  title="Madura United">Madura United</a>
							</li>
														<li class="nw ">
								<a href="https://madura.tribunnews.com/superskor"  title="Superskor">Superskor</a>
							</li>
														<li class="nw ">
								<a href="https://madura.tribunnews.com/surabaya"  title="Surabaya">Surabaya</a>
							</li>
			


<li><a href="#" title="images">Lainnya</a>
	<ul>
		<li ><a href="https://madura.tribunnews.com/seleb"  title="Seleb">Seleb</a></li>
		<li ><a href="https://madura.tribunnews.com/lifestyle"  title="Lifestyle">Lifestyle</a></li>
		<li ><a href="https://madura.tribunnews.com/travel"  title="Travel">Travel</a></li>
		<li ><a href="https://madura.tribunnews.com/otomotif"  title="Otomotif">Otomotif</a></li>
		<li ><a href="https://madura.tribunnews.com/techno"  title="Techno">Techno</a></li>
		<li ><a href="https://madura.tribunnews.com/kesehatan"  title="Kesehatan">Kesehatan</a></li>
			<li><a href="https://madura.tribunnews.com/indeks" title="Indeks Berita">Indeks Berita</a></li>
	</ul>
</li>
</ul>
</div>
</div>

	    <style>
.menu-enjoy { border:none}
.menu-enjoy >div >ul >li { border-left:1px solid rgba(255,255,255,0.1);}
.menu-enjoy > div > ul > li:hover > a,.menu-warta > ul > li > a:hover {
border-bottom:4px solid rgba(0,0,0,0.15)!important;
}
.menu-enjoy .selected a {
border-bottom:4px solid rgba(0,0,0,0.25)!important;
}
.menu-enjoy >div >ul >li >a {
text-shadow: 0px 1px 1px rgba(0,0,0,.2);
}
</style>
<div class="main-menu menu-enjoy" style="z-index:1">
	<div>
		<ul>
						
			<li class="nw " 
style="background:#ec2028">
								<a style="color:#fff;text-shadow:none" href="https://madura.tribunnews.com/travel"  title="Travel">Travel</a>
							</li>
			
			<li class="nw " 
style="background:#0033a7">
								<a style="color:#fff;text-shadow:none" href="https://www.tribunnews.com/travel" target="_blank" title="TribunTravel.com">TribunTravel.com</a>
							</li>
			
		</ul>
	</div>
</div>
		<div class="cl2"></div>
		<div class="content">
	<div class="fl w677">
		<div class="fl w160 mr20" id="boxleft">
					<script type="text/javascript">
function moveScroller_sec() {
    var movesec = function() {
        var ssec = $("#popsec");
        var stsec = $(window).scrollTop();
        var otsecb = $("#fixpos_secb").offset().top - ssec.height() - 120;
        if(stsec > otsecb) {
			var vtop = 65;
			if($(".main-menu").css("opacity") == "1") vtop = 65 + $(".main-menu").height();
            ssec.css({
                position: "fixed",
                top: vtop,
				zIndex: "2",
            });
			$("#fixposc").height(ssec.height());
			$("#fixpos_sec").html("&nbsp;");
			ssec.attr("class","w160");

        } 
		else {
            ssec.css({
               	position: "relative",
        		top: ""
            });
			$("#fixposc").height(0);
			$("#fixpos_sec").html("&nbsp;");
			ssec.attr("class","w160");
        }
    };
    $(window).scroll(movesec);
    movesec();
}
$(document).ready(function(){
	moveScroller_sec();
});
</script>
<div id="popsec" >
	<div class="tsa2">
		<div class="mb10">
			<div class="reserved_box_ads reserved_box_3">
	<div id='div-Left-WideSkyscraper' style='width:160px; height:600px;display:none'>
	<script type='text/javascript'>
		googletag.cmd.push(function() { googletag.display('div-Left-WideSkyscraper'); });
	</script>
	</div>
</div>
						</div> 
		<div class="pb10 ar"><a class="ac fbo2" href="https://madura.tribunnews.com/indeks" title="Indeks Berita">Indeks Berita</a><span class="pl5 grey">+</span></div>
		<div class="pb10 ar"><a class="ac fbo2" href="https://madura.tribunnews.com/tag" title="Indeks A-Z">Indeks A-Z</a><span class="pl5 grey">+</span></div>
	</div>
</div>
<div id="fixposc" class="show"></div>
<div id="fixpos_secb"></div>				</div>
		<div class="fl w502">
			<script type="text/javascript" >
$(function() {
	$("#bx-pager a").hover(function(){
		slider.goToSlide($(this).attr("data-slide-index"));
		$("#bx-pager a").removeClass("active");
		$(this).addClass("active");
	})

    var slider = $('#slideshow').bxSlider({
		mode: 'fade',
		controls:false,
		auto: false,
		pause: 10000,
		speed: 200,
		pagerCustom: '#bx-pager',
		autoHover: true,
		autoControlsCombine:true,
		autoHover: true,
		pagerEvent:'mousemove',
	});
    $('#bx-pager').bxSlider({
		auto: true,
		pause: 50000,
		pager:false,
		controls:true,
   	 	slideWidth: 250,
    	minSlides: 5,
    	maxSlides: 5,
    	slideMargin: 0,
  		infiniteLoop: false,
  		hideControlOnEnd: true,
		nextText: '<i class="fa fa-chevron-right"></i>',
		prevText: '<i class="fa fa-chevron-left"></i>'
	});

});
var ia = 1;
var ibc = 1;
</script>
<div class="ovh" id="headline"  >
		<div id="slideshow" class="clsslide" style="z-index:0">
					<div class="pos_abs">
				<div class="pos_abs ovh hlover" >
											<div class="cl2">&nbsp;</div>
						<h4 class="hlover_topix f16 red">
							<a href='https://madura.tribunnews.com/topic/Berita-Tuban' title='Berita Tuban'>
								Berita Tuban							</a>
						</h4>
						<div class="pt5"></div>
										<h2 class="hlover_title">
						<a href="https://madura.tribunnews.com/2024/01/22/pulang-dari-pengajian-gus-iqdam-sepasang-kekasih-dikeroyok-oknum-pesilat-di-tuban" title="Pulang dari Pengajian Gus Iqdam, Sepasang Kekasih Dikeroyok Oknum Pesilat di Tuban" class="txt-oev-2">
						Pulang dari Pengajian Gus Iqdam, Sepasang Kekasih Dikeroyok Oknum Pesilat di Tuban 						</a>
					</h2>
				</div>
				<a style="display:block" href="https://madura.tribunnews.com/2024/01/22/pulang-dari-pengajian-gus-iqdam-sepasang-kekasih-dikeroyok-oknum-pesilat-di-tuban" title="Pulang dari Pengajian Gus Iqdam, Sepasang Kekasih Dikeroyok Oknum Pesilat di Tuban">
					<img src='https://asset-2.tstatic.net/madura/foto/bank/images2/Sejumlah-oknum-pesilat-saat-mengeroyok-sepasang-kekasih-di-Kabupaten.jpg' height='365' width='650' style='width:100%;height:auto' class='al' alt='Sejumlah-oknum-pesilat-saat-mengeroyok-sepasang-kekasih-di-Kabupaten.jpg' />									</a>
			 				</div>
					<div class="pos_abs">
				<div class="pos_abs ovh hlover" >
											<div class="cl2">&nbsp;</div>
						<h4 class="hlover_topix f16 red">
							<a href='https://madura.tribunnews.com/topic/Berita-Terkini-Pamekasan' title='Berita Terkini Pamekasan'>
								Berita Terkini Pamekasan							</a>
						</h4>
						<div class="pt5"></div>
										<h2 class="hlover_title">
						<a href="https://madura.tribunnews.com/2024/01/20/pkb-bakal-usung-baddrut-tamam-sebagai-bacagub-gus-halim-waktunya-jatim-dipimpin-tokoh-madura" title="PKB bakal Usung Baddrut Tamam Sebagai Bacagub, Gus Halim: Waktunya Jatim Dipimpin Tokoh Madura" class="txt-oev-2">
						PKB bakal Usung Baddrut Tamam Sebagai Bacagub, Gus Halim: Waktunya Jatim Dipimpin Tokoh Madura 						</a>
					</h2>
				</div>
				<a style="display:block" href="https://madura.tribunnews.com/2024/01/20/pkb-bakal-usung-baddrut-tamam-sebagai-bacagub-gus-halim-waktunya-jatim-dipimpin-tokoh-madura" title="PKB bakal Usung Baddrut Tamam Sebagai Bacagub, Gus Halim: Waktunya Jatim Dipimpin Tokoh Madura">
					<img src='https://asset-2.tstatic.net/madura/foto/bank/images2/Abdul-Halim-Iskandar-bertemu-mantan-Bupati-Pamekasan-Baddrut-Tamam-di-Hotel-Odaita.jpg' height='365' width='650' style='width:100%;height:auto' class='al' alt='Abdul-Halim-Iskandar-bertemu-mantan-Bupati-Pamekasan-Baddrut-Tamam-di-Hotel-Odaita.jpg' />									</a>
			 				</div>
					<div class="pos_abs">
				<div class="pos_abs ovh hlover" >
											<div class="cl2">&nbsp;</div>
						<h4 class="hlover_topix f16 red">
							<a href='https://madura.tribunnews.com/topic/Piala-Super-Italia' title='Piala Super Italia'>
								Piala Super Italia							</a>
						</h4>
						<div class="pt5"></div>
										<h2 class="hlover_title">
						<a href="https://madura.tribunnews.com/2024/01/22/prediksi-skor-napoli-vs-inter-milan-di-final-piala-super-italia-nerazzurri-diunggulkan" title="PREDIKSI SKOR Napoli Vs Inter Milan di Final Piala Super Italia: Nerazzurri Diunggulkan" class="txt-oev-2">
						PREDIKSI SKOR Napoli Vs Inter Milan di Final Piala Super Italia: Nerazzurri Diunggulkan 						</a>
					</h2>
				</div>
				<a style="display:block" href="https://madura.tribunnews.com/2024/01/22/prediksi-skor-napoli-vs-inter-milan-di-final-piala-super-italia-nerazzurri-diunggulkan" title="PREDIKSI SKOR Napoli Vs Inter Milan di Final Piala Super Italia: Nerazzurri Diunggulkan">
					<img src='https://asset-2.tstatic.net/madura/foto/bank/images2/Inter-Milan-meraih-kemenangan-pada-lanjutan-Liga-Italia-2023-2024.jpg' height='365' width='650' style='width:100%;height:auto' class='al' alt='Inter-Milan-meraih-kemenangan-pada-lanjutan-Liga-Italia-2023-2024.jpg' />									</a>
			 				</div>
					<div class="pos_abs">
				<div class="pos_abs ovh hlover" >
											<div class="cl2">&nbsp;</div>
						<h4 class="hlover_topix f16 red">
							<a href='https://madura.tribunnews.com/topic/Berita-Sampang' title='Berita Sampang'>
								Berita Sampang							</a>
						</h4>
						<div class="pt5"></div>
										<h2 class="hlover_title">
						<a href="https://madura.tribunnews.com/2024/01/22/awal-tahun-petani-padi-di-sampang-semakin-sulit-untuk-dapatkan-pupuk-bersubsidi" title="Awal Tahun, Petani Padi di Sampang Semakin Sulit untuk Dapatkan Pupuk Bersubsidi" class="txt-oev-2">
						Awal Tahun, Petani Padi di Sampang Semakin Sulit untuk Dapatkan Pupuk Bersubsidi 						</a>
					</h2>
				</div>
				<a style="display:block" href="https://madura.tribunnews.com/2024/01/22/awal-tahun-petani-padi-di-sampang-semakin-sulit-untuk-dapatkan-pupuk-bersubsidi" title="Awal Tahun, Petani Padi di Sampang Semakin Sulit untuk Dapatkan Pupuk Bersubsidi">
					<img src='https://asset-2.tstatic.net/madura/foto/bank/images2/Petani-di-Kabupaten-Sampang-Madura-saat-merawat-tanaman-padi.jpg' height='365' width='650' style='width:100%;height:auto' class='al' alt='Petani-di-Kabupaten-Sampang-Madura-saat-merawat-tanaman-padi.jpg' />									</a>
			 				</div>
					<div class="pos_abs">
				<div class="pos_abs ovh hlover" >
											<div class="cl2">&nbsp;</div>
						<h4 class="hlover_topix f16 red">
							<a href='https://madura.tribunnews.com/topic/Carok-di-Bangkalan' title='Carok di Bangkalan'>
								Carok di Bangkalan							</a>
						</h4>
						<div class="pt5"></div>
										<h2 class="hlover_title">
						<a href="https://madura.tribunnews.com/2024/01/16/tradisi-carok-pada-sejarah-budaya-madura-posisi-wajah-saat-kalah-jadi-penentu-ada-dendam-atau-tidak" title="Tradisi Carok Pada Sejarah Budaya Madura, Posisi Wajah saat Kalah Jadi Penentu Ada Dendam atau Tidak" class="txt-oev-2">
						Tradisi Carok Pada Sejarah Budaya Madura, Posisi Wajah saat Kalah Jadi Penentu Ada Dendam atau Tidak 						</a>
					</h2>
				</div>
				<a style="display:block" href="https://madura.tribunnews.com/2024/01/16/tradisi-carok-pada-sejarah-budaya-madura-posisi-wajah-saat-kalah-jadi-penentu-ada-dendam-atau-tidak" title="Tradisi Carok Pada Sejarah Budaya Madura, Posisi Wajah saat Kalah Jadi Penentu Ada Dendam atau Tidak">
					<img src='https://asset-2.tstatic.net/madura/foto/bank/images2/Ketua-Pusat-Penelitian-dan-Inovasi-Sosial-Budaya-Madura-sekaligus.jpg' height='365' width='650' style='width:100%;height:auto' class='al' alt='Ketua-Pusat-Penelitian-dan-Inovasi-Sosial-Budaya-Madura-sekaligus.jpg' />									</a>
			 			            	<div id='div-Headline-5' style="display:none;position:absolute;top:0px;left:0px">
							<script type='text/javascript' >
							if(ia == 1) {
							googletag.cmd.push(function() { googletag.display('div-Headline-5'); });
							ia = ia + 1;
							}
			                </script>
		                </div>
							</div>
						</div>
		<!--
         <div id="slidenav" class="slidenav">
             <span id="prev" class="prev"></span>
             <span id="next" class="next"></span>
         </div>
		-->

</div>
<div class="navthumb ovh bgwhite pos_rel" style="height:115px;overflow:hidden; " >
<div id="bx-pager" style="">
	<a href="https://madura.tribunnews.com/2024/01/22/pulang-dari-pengajian-gus-iqdam-sepasang-kekasih-dikeroyok-oknum-pesilat-di-tuban" title="Pulang dari Pengajian Gus Iqdam, Sepasang Kekasih Dikeroyok Oknum Pesilat di Tuban" class="ovh tsa2 pos_rel hladvthumb" data-slide-index="0" style="border-right:1px solid #eee;height:115px">
		<div class="ovh imgthumbhl" style="height:70px;" title="Pulang dari Pengajian Gus Iqdam, Sepasang Kekasih Dikeroyok Oknum Pesilat di Tuban">
		<img src='https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Sejumlah-oknum-pesilat-saat-mengeroyok-sepasang-kekasih-di-Kabupaten.jpg' height='96' width='129' class='al' alt='Sejumlah-oknum-pesilat-saat-mengeroyok-sepasang-kekasih-di-Kabupaten.jpg' />		</div>
		<div class="ovh f11 ac cl2 pa5" style="height:28px;">
			Pulang dari Pengajian Gus Iqdam, Sepasang&#8230;		</div>
			</a>
	<a href="https://madura.tribunnews.com/2024/01/20/pkb-bakal-usung-baddrut-tamam-sebagai-bacagub-gus-halim-waktunya-jatim-dipimpin-tokoh-madura" title="PKB bakal Usung Baddrut Tamam Sebagai Bacagub, Gus Halim: Waktunya Jatim Dipimpin Tokoh Madura" class="ovh tsa2 pos_rel hladvthumb" data-slide-index="1" style="border-right:1px solid #eee;height:115px">
		<div class="ovh imgthumbhl" style="height:70px;" title="PKB bakal Usung Baddrut Tamam Sebagai Bacagub, Gus Halim: Waktunya Jatim Dipimpin Tokoh Madura">
		<img src='https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Abdul-Halim-Iskandar-bertemu-mantan-Bupati-Pamekasan-Baddrut-Tamam-di-Hotel-Odaita.jpg' height='96' width='129' class='al' alt='Abdul-Halim-Iskandar-bertemu-mantan-Bupati-Pamekasan-Baddrut-Tamam-di-Hotel-Odaita.jpg' />		</div>
		<div class="ovh f11 ac cl2 pa5" style="height:28px;">
			PKB bakal Usung Baddrut Tamam Sebagai Bacagub,&#8230;		</div>
			</a>
	<a href="https://madura.tribunnews.com/2024/01/22/prediksi-skor-napoli-vs-inter-milan-di-final-piala-super-italia-nerazzurri-diunggulkan" title="PREDIKSI SKOR Napoli Vs Inter Milan di Final Piala Super Italia: Nerazzurri Diunggulkan" class="ovh tsa2 pos_rel hladvthumb" data-slide-index="2" style="border-right:1px solid #eee;height:115px">
		<div class="ovh imgthumbhl" style="height:70px;" title="PREDIKSI SKOR Napoli Vs Inter Milan di Final Piala Super Italia: Nerazzurri Diunggulkan">
		<img src='https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Inter-Milan-meraih-kemenangan-pada-lanjutan-Liga-Italia-2023-2024.jpg' height='96' width='129' class='al' alt='Inter-Milan-meraih-kemenangan-pada-lanjutan-Liga-Italia-2023-2024.jpg' />		</div>
		<div class="ovh f11 ac cl2 pa5" style="height:28px;">
			PREDIKSI SKOR Napoli Vs Inter Milan di Final&#8230;		</div>
			</a>
	<a href="https://madura.tribunnews.com/2024/01/22/awal-tahun-petani-padi-di-sampang-semakin-sulit-untuk-dapatkan-pupuk-bersubsidi" title="Awal Tahun, Petani Padi di Sampang Semakin Sulit untuk Dapatkan Pupuk Bersubsidi" class="ovh tsa2 pos_rel hladvthumb" data-slide-index="3" style="border-right:1px solid #eee;height:115px">
		<div class="ovh imgthumbhl" style="height:70px;" title="Awal Tahun, Petani Padi di Sampang Semakin Sulit untuk Dapatkan Pupuk Bersubsidi">
		<img src='https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Petani-di-Kabupaten-Sampang-Madura-saat-merawat-tanaman-padi.jpg' height='96' width='129' class='al' alt='Petani-di-Kabupaten-Sampang-Madura-saat-merawat-tanaman-padi.jpg' />		</div>
		<div class="ovh f11 ac cl2 pa5" style="height:28px;">
			Awal Tahun, Petani Padi di Sampang Semakin&#8230;		</div>
			</a>
	<a href="https://madura.tribunnews.com/2024/01/16/tradisi-carok-pada-sejarah-budaya-madura-posisi-wajah-saat-kalah-jadi-penentu-ada-dendam-atau-tidak" title="Tradisi Carok Pada Sejarah Budaya Madura, Posisi Wajah saat Kalah Jadi Penentu Ada Dendam atau Tidak" class="ovh tsa2 pos_rel hladvthumb" data-slide-index="4" style="border-right:1px solid #eee;height:115px">
		<div class="ovh imgthumbhl" style="height:70px;" title="Tradisi Carok Pada Sejarah Budaya Madura, Posisi Wajah saat Kalah Jadi Penentu Ada Dendam atau Tidak">
		<img src='https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Ketua-Pusat-Penelitian-dan-Inovasi-Sosial-Budaya-Madura-sekaligus.jpg' height='96' width='129' class='al' alt='Ketua-Pusat-Penelitian-dan-Inovasi-Sosial-Budaya-Madura-sekaligus.jpg' />		</div>
		<div class="ovh f11 ac cl2 pa5" style="height:28px;">
			Tradisi Carok Pada Sejarah Budaya Madura,&#8230;		</div>
				        <div id="div-Headline-Thumb-5" style="display:none;position:absolute;top:0px;left:0px">
		            <script type='text/javascript'>
		            if(ibc == 1) {
		                googletag.cmd.push(function() { googletag.display("div-Headline-Thumb-5"); });
		                ibc = ibc + 1;
		            }
		            </script>
		         </div>
			</a>
</div>
</div>
<div class="cl2"></div>			<script type="text/javascript">
var $ = jQuery.noConflict();
$(document).ready(function() { 
	$(window).scroll(function() { 
	    if (  document.documentElement.clientHeight + 
	         $(document).scrollTop() >= document.body.offsetHeight )
	    { 
			var getLast = parseInt($("#latestul li").last().attr("data-sort"));
			var cekLast = parseInt($("#latestul").attr("last"));
			if(!cekLast) cekLast = 0;
			if(getLast < 500 && getLast > cekLast ) {
				$("#latestul").attr("last",getLast);	
				$("#latestul").append("<li class='loading'><i class='fa fa-refresh fa-spin fa-2x blue'></i></li>");
				$(".loading").show();
				var newlast = getLast;		
				$.getJSON("https://madura.tribunnews.com/ajax/latest?callback=?", {start: newlast,img: 'thumb2',icon: '1'}, function(data) {
					$.each(data.posts, function(key, val) {
						newlast	= newlast+1;
						if(val.video) {
							var vthumb = "<i class='fa fa-play playoverlay'></i>";
							var vtitle = " <i class='fa fa-play-circle-o'></i>";
						}
						else
						{
							var vthumb = "";
							var vtitle = "";
						}
						if(val.thumb) {
							var img = "<div class='fr mt5 ml15 pos_rel'><a href='"+val.url+"' title='"+val.title+"'><img src='"+val.thumb+"' width='120' height='90' class='shou2 bgwhite' alt='"+val.title+"' loading='lazy'/></a>"+vthumb+"</div>";
							var milatest = "mr140";
						}	
						else {
							var img = "";
							var milatest = "";
						}
						if(val.subtitle) subtitle = "<h4 class='fbo2 f14 red'><a href='"+val.subtitle_url+"' title='"+val.subtitle+"' >"+val.subtitle+"</a></h4>";
						else subtitle = '';

						$("#latestul").append("<li class='p1520 art-list pos_rel' data-sort='"+newlast+"'>"+img+"<div class='"+milatest+"'>"+subtitle+"<h3><a href='"+val.url+"' title='"+val.title+"' class='f20 ln24 fbo txt-oev-2'>"+val.title+vtitle+"</a></h3><div class='grey2 pt5 f13 txt-oev-2'>"+val.introtext+"</div><div class='pt5 grey'><span><a href='"+val.s_url+"' class='fbo2 tsa-2' title='"+val.s_title+"'>"+val.s_title+"</a></span><span class='fa fa-clock-o mr5 ml7'></span><time class='foot timeago' title='"+val.date+"'>"+val.times_ago+"</time></div></div><div class='sharecot pos_abs nw' data-href='"+val.url+"' data-title='"+val.title+"' data-via='tribunmaduracom'></div><div class='cl2'></div></li>");					
					});
					$(".loading").remove()				
				});
			}
			else if (getLast > 150) {
				if ($("#ltldmr").length == 0){	
					$("#latestul").append('<li class="pa20 ac loadmore" id="ltldmr"><a href="javascript:" class="button2" onclick="loadmore()">Tampilkan lainnya</a><a href="https://madura.tribunnews.com/indeks" class="button2" class="ml15 button2">Indeks</a></li>');
				}
			}
	    }
	});
});

function loadmore(){
	if ($("#ltldmr").length > 0) $("#ltldmr").remove(); 
	var getLast = parseInt($("#latestul li").last().attr("data-sort"));
	$("#latestul").append("<li class='loading'><i class='fa fa-refresh fa-spin fa-2x blue'></i></li>");
	$(".loading").show();
	var newlast = getLast;
	$.getJSON("https://madura.tribunnews.com/ajax/latest?callback=?", {start: newlast,img: 'thumb2',icon: '1'}, function(data) {
		$.each(data.posts, function(key, val) {
						newlast	= newlast+1;
						if(val.video) {
							var vthumb = "<i class='fa fa-play playoverlay'></i>";
							var vtitle = " <i class='fa fa-play-circle-o'></i>";
						}
						else
						{
							var vthumb = "";
							var vtitle = "";
						}
						if(val.thumb) {
							var img = "<div class='fr mt5 ml15 pos_rel'><a href='"+val.url+"' title='"+val.title+"'><img src='"+val.thumb+"' width='120' height='90' class='shou2 bgwhite' alt='"+val.title+"'/></a>"+vthumb+"</div>";
							var milatest = "mr140";
						}	
						else {
							var img = "";
							var milatest = "";
						}
						if(val.subtitle) subtitle = "<h4 class='fbo2 f14 red'><a href='"+val.subtitle_url+"' title='"+val.subtitle+"' >"+val.subtitle+"</a></h4>";
						else subtitle = '';

						$("#latestul").append("<li class='p1520 art-list pos_rel' data-sort='"+newlast+"'>"+img+"<div class='"+milatest+"'>"+subtitle+"<h3><a href='"+val.url+"' title='"+val.title+"' class='f20 ln24 fbo txt-oev-2'>"+val.title+vtitle+"</a></h3><div class='grey2 pt5 f13 txt-oev-2'>"+val.introtext+"</div><div class='pt5 grey'><span><a href='"+val.s_url+"' class='fbo2 tsa-2' title='"+val.s_title+"'>"+val.s_title+"</a></span><span class='fa fa-clock-o mr5 ml7'></span><time class='foot timeago' title='"+val.date+"'>"+val.times_ago+"</time></div></div><div class='sharecot pos_abs nw' data-href='"+val.url+"' data-title='"+val.title+"' data-via='tribunmaduracom'></div><div class='cl2'></div></li>");			
		});
		$(".loading").remove();
	});
}
</script>
	<div class="bsh ovh">
		<div class="lsi">
			<ul id="latestul">
			<li class="reserved_box_ads reserved_box_5 pos_rel p1520 nativeads">
	<div id='div-NativeAds-Latest-1'>
		<script type='text/javascript'>
		googletag.cmd.push(function() { googletag.display('div-NativeAds-Latest-1'); });
		</script>
	</div>
</li>
						<li class="p1520 art-list pos_rel" data-sort="1">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/pemkab-sampang-beberkan-alasan-merelokasi-pedagang-sapi-di-pasar-kedungdung-pemicu-kemacetan" title="Pemkab Sampang Beberkan Alasan Merelokasi Pedagang Sapi di Pasar Kedungdung, Pemicu Kemacetan">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Suasana-para-pedagang-sapi-di-Pasar-Kecamatan-Kedungdung.jpg" class="shou2 bgwhite" height="90" width="120" alt="Suasana-para-pedagang-sapi-di-Pasar-Kecamatan-Kedungdung.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-sampang" title="Berita Sampang">
							Berita Sampang						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/pemkab-sampang-beberkan-alasan-merelokasi-pedagang-sapi-di-pasar-kedungdung-pemicu-kemacetan" title="Pemkab Sampang Beberkan Alasan Merelokasi Pedagang Sapi di Pasar Kedungdung, Pemicu Kemacetan" class="f20 ln24 fbo txt-oev-2">
							Pemkab Sampang Beberkan Alasan Merelokasi Pedagang Sapi di Pasar Kedungdung, Pemicu Kemacetan 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Relokasi pedagang sapi di Pasar Kecamatan Kedungdung, Kabupaten Sampang, Madura ke Pasar Hewan Desa Aeng Sareh, Sampang menuai polemik.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/madura" title="Madura" class="fbo2 tsa-2">Madura</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 17:01:36">32 menit lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/pemkab-sampang-beberkan-alasan-merelokasi-pedagang-sapi-di-pasar-kedungdung-pemicu-kemacetan" data-title="Pemkab Sampang Beberkan Alasan Merelokasi Pedagang Sapi di Pasar Kedungdung, Pemicu Kemacetan" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
							<li class="p1520 art-list pos_rel cindex" data-sort="1">	
										<div class="fr mt5 pos_rel">
						<a href="2024/01/20/alasan-ketua-pkb-jatim-pilih-baddrut-tamam-di-pilgub-2024-dibandingkan-bupati-sebelumnya-jauh" title="Alasan Ketua PKB Jatim Pilih Baddrut Tamam di Pilgub 2024: Dibandingkan Bupati Sebelumnya Jauh">
							<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Ketua-Dewan-Pengurus-Wilayah-DPW-Partai-Kebangkitan-Bangsa.jpg" class="shou2 bgwhite" height="90" width="120" alt="Ketua-Dewan-Pengurus-Wilayah-DPW-Partai-Kebangkitan-Bangsa.jpg" />
													</a>	
					</div>
										<div class='mr140'>
												<h4 class="fbo2 f14 red">
							<a href="https://madura.tribunnews.com/topics/pemilu-2024" title="Pemilu 2024">
								Pemilu 2024							</a>
						</h4>
												<h3>
							<a href="https://madura.tribunnews.com/2024/01/20/alasan-ketua-pkb-jatim-pilih-baddrut-tamam-di-pilgub-2024-dibandingkan-bupati-sebelumnya-jauh" title="Alasan Ketua PKB Jatim Pilih Baddrut Tamam di Pilgub 2024: Dibandingkan Bupati Sebelumnya Jauh" class="f20 ln24 fbo txt-oev-2">
								Alasan Ketua PKB Jatim Pilih Baddrut Tamam di Pilgub 2024: Dibandingkan Bupati Sebelumnya Jauh 							</a>
						</h3>
						<div class="grey2 pt5 f13 ln18 txt-oev-2">Ketua Dewan Pengurus Wilayah (DPW) Partai Kebangkitan Bangsa (PKB) Jawa Timur (Jatim), Abdul Halim Iskandar memantapkan hati memilih Baddrut Tamam</div>
						<div class="pt5 grey">
							<span class="mr5">
								<a href="https://madura.tribunnews.com/mata-lokal-memilih" title="Mata Lokal Memilih" class="fbo2 tsa-2">Mata Lokal Memilih</a>
							</span>	
							<span class="fa fa-clock-o mr5"></span>
							<time class="foot timeago" title="2024-01-20 18:52:35">2 hari lalu</time>
						</div>
						<div class="sharecot pos_abs nw" data-href="https://www.tribunnews.com/2024/01/20/alasan-ketua-pkb-jatim-pilih-baddrut-tamam-di-pilgub-2024-dibandingkan-bupati-sebelumnya-jauh" data-title="Alasan Ketua PKB Jatim Pilih Baddrut Tamam di Pilgub 2024: Dibandingkan Bupati Sebelumnya Jauh"></div>
					</div>
					<div class="cl2"></div>
				</li>
										<li class="p1520 art-list pos_rel" data-sort="2">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/terus-matangkan-persiapan-arema-fc-jajal-kekuatan-persis-solo" title="Terus Matangkan Persiapan, Arema FC Jajal Kekuatan Persis Solo">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Sesi-latihan-Arema-FC.jpg" class="shou2 bgwhite" height="90" width="120" alt="Sesi-latihan-Arema-FC.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-terkini-arema" title="Berita Terkini Arema">
							Berita Terkini Arema						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/terus-matangkan-persiapan-arema-fc-jajal-kekuatan-persis-solo" title="Terus Matangkan Persiapan, Arema FC Jajal Kekuatan Persis Solo" class="f20 ln24 fbo txt-oev-2">
							Terus Matangkan Persiapan, Arema FC Jajal Kekuatan Persis Solo 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Arema FC terus mematangkan persiapan sebelum menghadapi laga sisa di putaran kedua kompetisi Liga 1.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/superball" title="Superball" class="fbo2 tsa-2">Superball</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 16:56:54">37 menit lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/terus-matangkan-persiapan-arema-fc-jajal-kekuatan-persis-solo" data-title="Terus Matangkan Persiapan, Arema FC Jajal Kekuatan Persis Solo" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="3">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/pkb-pamekasan-yakin-amin-menang-mutlak-di-madura-jika-tidak-dicurangi-target-50-persen-suara" title="PKB Pamekasan Yakin AMIN Menang Mutlak di Madura Jika Tidak Dicurangi, Target 50 Persen Suara">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Suasana-Anies-Baswedan-dan-Muhaimin-Iskandar-AMIN-saat-foto-bersama.jpg" class="shou2 bgwhite" height="90" width="120" alt="Suasana-Anies-Baswedan-dan-Muhaimin-Iskandar-AMIN-saat-foto-bersama.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/pemilu-2024" title="Pemilu 2024">
							Pemilu 2024						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/pkb-pamekasan-yakin-amin-menang-mutlak-di-madura-jika-tidak-dicurangi-target-50-persen-suara" title="PKB Pamekasan Yakin AMIN Menang Mutlak di Madura Jika Tidak Dicurangi, Target 50 Persen Suara" class="f20 ln24 fbo txt-oev-2">
							PKB Pamekasan Yakin AMIN Menang Mutlak di Madura Jika Tidak Dicurangi, Target 50 Persen Suara 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Ketua Dewan Pengurus Cabang (DPC) PKB Pamekasan, KH Ali Wafa Subki meyakini pasangan calon Presiden (capres) dan calon Wakil Presiden (Wapres)</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/mata-lokal-memilih" title="Mata Lokal Memilih" class="fbo2 tsa-2">Mata Lokal Memilih</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 16:49:27">44 menit lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/pkb-pamekasan-yakin-amin-menang-mutlak-di-madura-jika-tidak-dicurangi-target-50-persen-suara" data-title="PKB Pamekasan Yakin AMIN Menang Mutlak di Madura Jika Tidak Dicurangi, Target 50 Persen Suara" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
			<li class="reserved_box_ads reserved_box_5 pos_rel p1520 nativeads">
	<div id='div-NativeAds-Latest-2'>
		<script type='text/javascript'>
		googletag.cmd.push(function() { googletag.display('div-NativeAds-Latest-2'); });
		</script>
	</div>
</li>
																													
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="4">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/kpu-sumenep-sebut-pengepakan-logistik-pemilu-2024-untuk-wilayah-kepulauan-tuntas-dikerjakan" title="KPU Sumenep Sebut Pengepakan Logistik Pemilu 2024 untuk Wilayah Kepulauan Tuntas Dikerjakan">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Pengepakan-surat-suara-di-Gudang-Logistik-KPU-Sumenep-Jl-Lingkar-Barat.jpg" class="shou2 bgwhite" height="90" width="120" alt="Pengepakan-surat-suara-di-Gudang-Logistik-KPU-Sumenep-Jl-Lingkar-Barat.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-terkini-sumenep" title="Berita Terkini Sumenep">
							Berita Terkini Sumenep						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/kpu-sumenep-sebut-pengepakan-logistik-pemilu-2024-untuk-wilayah-kepulauan-tuntas-dikerjakan" title="KPU Sumenep Sebut Pengepakan Logistik Pemilu 2024 untuk Wilayah Kepulauan Tuntas Dikerjakan" class="f20 ln24 fbo txt-oev-2">
							KPU Sumenep Sebut Pengepakan Logistik Pemilu 2024 untuk Wilayah Kepulauan Tuntas Dikerjakan 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">KPU Kabupaten Sumenep, Madura menerangkan untuk proses pengepakan surat suara dan beberapa logistik lain untuk Pemilu 2024 daerah pemilihan (Dapil) 7</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/madura" title="Madura" class="fbo2 tsa-2">Madura</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 16:41:03">53 menit lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/kpu-sumenep-sebut-pengepakan-logistik-pemilu-2024-untuk-wilayah-kepulauan-tuntas-dikerjakan" data-title="KPU Sumenep Sebut Pengepakan Logistik Pemilu 2024 untuk Wilayah Kepulauan Tuntas Dikerjakan" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="5">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/4-pj-kepala-desa-di-kecamatan-kedungdung-dipanggil-polres-sampang-soal-realisasi-dana-desa-2023" title="4 Pj Kepala Desa di Kecamatan Kedungdung Dipanggil Polres Sampang Soal Realisasi Dana Desa 2023">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/potret-Mapolres-Sampang-Jalan-Jamaludin-Kelurahan-Gunung-Sekar-KecamatanKabupaten-Sampang.jpg" class="shou2 bgwhite" height="90" width="120" alt="potret-Mapolres-Sampang-Jalan-Jamaludin-Kelurahan-Gunung-Sekar-KecamatanKabupaten-Sampang.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-terkini-sampang" title="Berita Terkini Sampang">
							Berita Terkini Sampang						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/4-pj-kepala-desa-di-kecamatan-kedungdung-dipanggil-polres-sampang-soal-realisasi-dana-desa-2023" title="4 Pj Kepala Desa di Kecamatan Kedungdung Dipanggil Polres Sampang Soal Realisasi Dana Desa 2023" class="f20 ln24 fbo txt-oev-2">
							4 Pj Kepala Desa di Kecamatan Kedungdung Dipanggil Polres Sampang Soal Realisasi Dana Desa 2023 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Sejumlah Penjabat (Pj) Kepala Desa (Kades) di Kecamatan Kedungdung, Kabupaten Sampang, Madura dipanggil pihak kepolisian setempat.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/madura" title="Madura" class="fbo2 tsa-2">Madura</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 16:32:40">1 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/4-pj-kepala-desa-di-kecamatan-kedungdung-dipanggil-polres-sampang-soal-realisasi-dana-desa-2023" data-title="4 Pj Kepala Desa di Kecamatan Kedungdung Dipanggil Polres Sampang Soal Realisasi Dana Desa 2023" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="6">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/pj-bupati-pamekasan-sebut-semburan-sumur-bor-warga-aman-kandungan-gas-beracunnya-nol" title="Pj Bupati Pamekasan Sebut Semburan Sumur Bor Warga Aman: Kandungan Gas Beracunnya Nol">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Pemkab-Pamekasan-kembali-meninjau-sumur-bor-yang-sempat-menyemburkan-api.jpg" class="shou2 bgwhite" height="90" width="120" alt="Pemkab-Pamekasan-kembali-meninjau-sumur-bor-yang-sempat-menyemburkan-api.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-terkini-pamekasan" title="Berita Terkini Pamekasan">
							Berita Terkini Pamekasan						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/pj-bupati-pamekasan-sebut-semburan-sumur-bor-warga-aman-kandungan-gas-beracunnya-nol" title="Pj Bupati Pamekasan Sebut Semburan Sumur Bor Warga Aman: Kandungan Gas Beracunnya Nol" class="f20 ln24 fbo txt-oev-2">
							Pj Bupati Pamekasan Sebut Semburan Sumur Bor Warga Aman: Kandungan Gas Beracunnya Nol 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Pemkab) Pamekasan, Madura, kembali meninjau sumur bor yang sempat menyemburkan api beberapa waktu lalu di Desa Kadur, Kecamatan Kadur, Senin (22/1)</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/madura" title="Madura" class="fbo2 tsa-2">Madura</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 16:18:04">1 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/pj-bupati-pamekasan-sebut-semburan-sumur-bor-warga-aman-kandungan-gas-beracunnya-nol" data-title="Pj Bupati Pamekasan Sebut Semburan Sumur Bor Warga Aman: Kandungan Gas Beracunnya Nol" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="7">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/kejinya-ibu-di-surabaya-cabut-gigi-anak-pakai-tank-dan-siram-air-panas-ngaku-dapat-bisikan-gelas" title="Kejinya Ibu di Surabaya, Cabut Gigi Anak Pakai Tang dan Siram Air Panas, Ngaku Dapat Bisikan Gelas">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Aurel-26-alias-Aca-ditangkap-mengaku-tidak-sadar-setelah-menganiaya-putranya.jpg" class="shou2 bgwhite" height="90" width="120" alt="Aurel-26-alias-Aca-ditangkap-mengaku-tidak-sadar-setelah-menganiaya-putranya.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-surabaya" title="Berita Surabaya">
							Berita Surabaya						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/kejinya-ibu-di-surabaya-cabut-gigi-anak-pakai-tank-dan-siram-air-panas-ngaku-dapat-bisikan-gelas" title="Kejinya Ibu di Surabaya, Cabut Gigi Anak Pakai Tang dan Siram Air Panas, Ngaku Dapat Bisikan Gelas" class="f20 ln24 fbo txt-oev-2">
							Kejinya Ibu di Surabaya, Cabut Gigi Anak Pakai Tang dan Siram Air Panas, Ngaku Dapat Bisikan Gelas 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Warga Manyar Tirtoyoso Selatan Gang VII, Surabaya, dibuat mengelus dada atas ulah Aurel alias Aca (26).</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/surabaya" title="Surabaya" class="fbo2 tsa-2">Surabaya</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 16:04:43">1 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/kejinya-ibu-di-surabaya-cabut-gigi-anak-pakai-tank-dan-siram-air-panas-ngaku-dapat-bisikan-gelas" data-title="Kejinya Ibu di Surabaya, Cabut Gigi Anak Pakai Tang dan Siram Air Panas, Ngaku Dapat Bisikan Gelas" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="8">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/pkb-sumenep-targetkan-raup-50-persen-suara-untuk-pasangan-amin-di-madura-satu-putaran" title="PKB Sumenep Targetkan Raup 50 Persen Suara untuk Pasangan Amin di Madura: Satu Putaran">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/KH-Imam-Hasyim-Ketua-DPC-PKB-Sumenep.jpg" class="shou2 bgwhite" height="90" width="120" alt="KH-Imam-Hasyim-Ketua-DPC-PKB-Sumenep.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/pkb-sumenep-targetkan-raup-50-persen-suara-untuk-pasangan-amin-di-madura-satu-putaran" title="PKB Sumenep Targetkan Raup 50 Persen Suara untuk Pasangan Amin di Madura: Satu Putaran" class="f20 ln24 fbo txt-oev-2">
							PKB Sumenep Targetkan Raup 50 Persen Suara untuk Pasangan Amin di Madura: Satu Putaran 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Ketua DPC PKB Kabupaten Sumenep, KH Imam Hasyim menargetkan suara 50 persen di Pulau Madura untuk pasangan Amin</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/madura" title="Madura" class="fbo2 tsa-2">Madura</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 15:48:23">1 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/pkb-sumenep-targetkan-raup-50-persen-suara-untuk-pasangan-amin-di-madura-satu-putaran" data-title="PKB Sumenep Targetkan Raup 50 Persen Suara untuk Pasangan Amin di Madura: Satu Putaran" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="9">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/jumlah-daftar-pemilih-tetap-di-rutan-sampang-berubah-ubah-petugas-harus-lakukan-ini" title="Jumlah Daftar Pemilih Tetap di Rutan Sampang Berubah-Ubah, Petugas Harus Lakukan Ini">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Petugas-Rutan-Klas-IIB-Sampang-saat-memanggil-warga-binaan-sebaga.jpg" class="shou2 bgwhite" height="90" width="120" alt="Petugas-Rutan-Klas-IIB-Sampang-saat-memanggil-warga-binaan-sebaga.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-sampang" title="Berita Sampang">
							Berita Sampang						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/jumlah-daftar-pemilih-tetap-di-rutan-sampang-berubah-ubah-petugas-harus-lakukan-ini" title="Jumlah Daftar Pemilih Tetap di Rutan Sampang Berubah-Ubah, Petugas Harus Lakukan Ini" class="f20 ln24 fbo txt-oev-2">
							Jumlah Daftar Pemilih Tetap di Rutan Sampang Berubah-Ubah, Petugas Harus Lakukan Ini 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Rutan Klas II B Kabupaten Sampang, Madura harus berulangkali mengajukan data pemilih atau daftar pemilih tetap (DPT) warga binaan setempat</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/madura" title="Madura" class="fbo2 tsa-2">Madura</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 13:48:03">3 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/jumlah-daftar-pemilih-tetap-di-rutan-sampang-berubah-ubah-petugas-harus-lakukan-ini" data-title="Jumlah Daftar Pemilih Tetap di Rutan Sampang Berubah-Ubah, Petugas Harus Lakukan Ini" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																								<li>
<div class="bacapres">
<script>
	$(document).ready(function () {
        $("#wgbacapres").bxSlider({
			controls: true,
            nextSelector: "#nxtbcp",
            prevSelector: "#prvbcp",
            nextText: '<i class="fa fa-chevron-right"></i>',
            prevText: '<i class="fa fa-chevron-left"></i>',
            pager: false,
			slideMargin: 15,
            slideWidth: 290,
            minSlides: 1,
            maxSlides: 2,
            infiniteLoop: true, 
			startSlide: 0,
			shrinkItems: true,
			auto: true,
			autoStart: true,
			speed: 500 
        })
    });
</script>
<style>.bacapres{background-color:#ff9800;background-image:linear-gradient(-45deg,#ff9800 -10%,#da2228 20%,#0065b2 80%);position:relative;padding:0 15px;height:400px;max-height:400px;overflow:hidden}.bacapres .box_bacapres{height:290px;margin:0 10px;text-align:center;color:#fff;border-radius:10px;overflow:hidden;padding:0}.bacapres .fbo img{position:absolute;left:0;top:-5px}.bacapres .box_bacapres:hover{transition:box-shadow .2s linear .5s}.bacapres .main-img{width:100%;height:100%;object-fit:cover;position:relative}.bacapres .box-content{color:#fff;position:absolute;inset:0;z-index:3;padding:50px;display:flex;flex-direction:column;justify-content:flex-end;transform:translateY(200px);transition:transform .2s linear .2s;align-items:center}.bacapres .item{font:bold 16px/18px Open sans,sans-serif;margin-bottom:12px;text-shadow:1px 1px 3px #000}.bacapres .description{font:12px/16px Open sans,sans-serif;margin-bottom:15px;overflow:hidden}.bacapres .box_bacapres:after{content:" ";position:absolute;inset:0;background:linear-gradient(-45deg,#5e37a9,#911e47,#2b540e);opacity:.2;transition:opacity .2s linear;padding:10px}.box_bacapres a:before{position:absolute;top:10px;left:5px;transform:translate(0);transition:transform .2s linear;width:15px;border-radius:50%;height:15px;line-height:15px;font-size:27px;font-weight:700;z-index:1;color:#fff;border:1px solid #fff;padding:20px;background:#a949493d}.bacapres .box_bacapres:hover a:before{transform:translate(110px,25px)}.box_bacapres.satu a:before{content:"1"}.box_bacapres.dua a:before{content:"2"}.box_bacapres.tiga a:before{content:"3"}.bacapres .box_bacapres:hover:after{opacity:.9}.bacapres .interactive .item a{font-size:10px;color:#fff}.bacapres .interactive .item:last-child{justify-content:flex-end}.bacapres .bx-wrapper{max-width:668px!important}.bacapres .box_bacapres:before{content:" ";border-radius:8px;position:absolute;top:20px;left:20px;bottom:20px;right:20px;border:1px solid #fff;z-index:2;pointer-events:none;transition:transform .2s linear,opacity .2s linear;transform:scale(.7);opacity:0}.bacapres .show-animate{opacity:0;transform:translateY(20px);transition:opacity .2s linear .2s}.bacapres .box_bacapres:hover .show-animate{opacity:1;transform:translateY(0);transition:transform 1s linear}.bacapres .box_bacapres:hover .box-content{transform:translateY(0)}.bacapres .box_bacapres:hover:before{transform:scale(1);opacity:1}.bacapres .show-item{transition:transform .2s linear,opacity .2s linear;opacity:0;font-size:10px}.bacapres .show-item:first-child{transform:translateX(-20px);margin-left:40px}.bacapres .show-item:last-child{transform:translateX(20px);margin-right:40px}.bacapres .box_bacapres:hover .show-item{transform:translateX(0);opacity:1;transition:transform .2s linear .4s,opacity .2s linear .4s}.bacapres .ctrlSlide{position:absolute;width:85%;top:50%;margin:0 25px;font-size:25px}.bacapres .ctrlBtn a{background:#fff;border-radius:25px;position:absolute;display:block;width:40px;height:40px;line-height:43px;text-align:center;color:#5652b1;z-index:1;box-shadow:0 0 10px rgb(0,0,0,.3)}.bacapres .ctrlBtn.prev a{left:-20px}.bacapres .ctrlBtn.next a{right:-45px}</style>
	<div class="pos_rel pt5 mt15 mb20 ac fbo f20 white">
		<a href="https://madura.tribunnews.com/mata-lokal-memilih/"><img src="https://asset-1.tstatic.net/img/matlok_memilih.png" alt="Logo Mata Lokal Memilih" width="40" height="40"/>Mata Lokal Memilih - Menuju PilPres 2024</a>
	</div>
	<div class="top-stories-scroll"id="wgbacapres">
				<div class="box_bacapres satu">
			<a href="https://madura.tribunnews.com/profil/anies-baswedan">
				<img class="main-img" src="https://asset-1.tstatic.net/img/bacapres/anies_2.png" width="290" height="290" alt="Anies Baswedan"/>
				<div class="box-content">
					<div class="item">Anies Baswedan</div>
					<div class="description show-animate">
					  Lahir di Kuningan, Jawa Barat pada 7 Mei 1969 (54 tahun).					</div>
					<div class="interactive">
						<div class="item show-item">LIHAT</div>
					</div>
				</div>
			</a>
		</div>  
				<div class="box_bacapres satu">
			<a href="https://madura.tribunnews.com/profil/muhaimin-iskandar">
				<img class="main-img" src="https://asset-1.tstatic.net/img/bacapres/imin_2.png" width="290" height="290" alt="Muhaimin Iskandar"/>
				<div class="box-content">
					<div class="item">Muhaimin Iskandar</div>
					<div class="description show-animate">
					  Lahir di Jombang, Jawa TImur pada 24 September 1966 (56 tahun).					</div>
					<div class="interactive">
						<div class="item show-item">LIHAT</div>
					</div>
				</div>
			</a>
		</div>  
				<div class="box_bacapres dua">
			<a href="https://madura.tribunnews.com/profil/prabowo-subianto">
				<img class="main-img" src="https://asset-1.tstatic.net/img/bacapres/prabowo_2.png" width="290" height="290" alt="Prabowo Subianto"/>
				<div class="box-content">
					<div class="item">Prabowo Subianto</div>
					<div class="description show-animate">
					  Lahir di Jakarta pada 17 Oktober 1951 (71 tahun).					</div>
					<div class="interactive">
						<div class="item show-item">LIHAT</div>
					</div>
				</div>
			</a>
		</div>  
				<div class="box_bacapres dua">
			<a href="https://madura.tribunnews.com/profil/gibran-rakabuming">
				<img class="main-img" src="https://asset-1.tstatic.net/img/bacapres/gibran_2.png" width="290" height="290" alt="Gibran Rakabuming Raka"/>
				<div class="box-content">
					<div class="item">Gibran Rakabuming Raka</div>
					<div class="description show-animate">
					  Lahir di Surakarta pada 01 Oktober 1987 (36 tahun).					</div>
					<div class="interactive">
						<div class="item show-item">LIHAT</div>
					</div>
				</div>
			</a>
		</div>  
				<div class="box_bacapres tiga">
			<a href="https://madura.tribunnews.com/profil/ganjar-pranowo">
				<img class="main-img" src="https://asset-1.tstatic.net/img/bacapres/ganjar_2.png" width="290" height="290" alt="Ganjar Pranowo"/>
				<div class="box-content">
					<div class="item">Ganjar Pranowo</div>
					<div class="description show-animate">
					  Lahir dengan nama Ganjar Sungkowo di Karanganyar, Jawa Tengah pada 28 Oktober 1968 (55 tahun).					</div>
					<div class="interactive">
						<div class="item show-item">LIHAT</div>
					</div>
				</div>
			</a>
		</div>  
				<div class="box_bacapres tiga">
			<a href="https://madura.tribunnews.com/profil/mahfud-md">
				<img class="main-img" src="https://asset-1.tstatic.net/img/bacapres/machfud_2.png" width="290" height="290" alt="Mahfud MD"/>
				<div class="box-content">
					<div class="item">Mahfud MD</div>
					<div class="description show-animate">
					  Lahir dengan nama Mohammad Mahfud di Omben, Sampang, Jawa Timur pada 13 Mei 1957 (66 tahun).					</div>
					<div class="interactive">
						<div class="item show-item">LIHAT</div>
					</div>
				</div>
			</a>
		</div>  
			</div> 
	<div class="ctrlSlide">
		<span class="ctrlBtn prev" id="prvbcp"></span>
		<span class="ctrlBtn next" id="nxtbcp"></span>
	</div>
</div>  
</li> 
								
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="10">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/inilah-bacaan-doa-sebelum-tidur-dalam-islam-komplet-pakai-lafal-arab-dan-artinya" title="Inilah Bacaan Doa Sebelum Tidur dalam Islam, Komplet Pakai Lafal Arab dan Artinya">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Ilustrasi-Doa-Sebelum-Tidur-dalam-Agama-Islam.jpg" class="shou2 bgwhite" height="90" width="120" alt="Ilustrasi-Doa-Sebelum-Tidur-dalam-Agama-Islam.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/doa-sebelum-tidur" title="Doa Sebelum Tidur">
							Doa Sebelum Tidur						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/inilah-bacaan-doa-sebelum-tidur-dalam-islam-komplet-pakai-lafal-arab-dan-artinya" title="Inilah Bacaan Doa Sebelum Tidur dalam Islam, Komplet Pakai Lafal Arab dan Artinya" class="f20 ln24 fbo txt-oev-2">
							Inilah Bacaan Doa Sebelum Tidur dalam Islam, Komplet Pakai Lafal Arab dan Artinya 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Inilah doa sebelum tidur dalam agama Islam.

Jika dibaca maka akan terbebas dari gangguan jin dan setan.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/news" title="News" class="fbo2 tsa-2">News</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 13:36:08">3 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/inilah-bacaan-doa-sebelum-tidur-dalam-islam-komplet-pakai-lafal-arab-dan-artinya" data-title="Inilah Bacaan Doa Sebelum Tidur dalam Islam, Komplet Pakai Lafal Arab dan Artinya" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="11">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/arti-lirik-lagu-pupusing-nelongso-happy-asmara-hasan-toys-trending-kangmas-rungokno-tangisku" title="Arti Lirik Lagu Pupusing Nelongso - Happy Asmara &amp; Hasan Toys, Trending, ‘Kangmas Rungokno Tangisku’">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/lirik-lagu-Pupusing-Nelongso-Happy-Asmara-feat-Hasan-Toys.jpg" class="shou2 bgwhite" height="90" width="120" alt="lirik-lagu-Pupusing-Nelongso-Happy-Asmara-feat-Hasan-Toys.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/lirik-lagu" title="Lirik Lagu">
							Lirik Lagu						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/arti-lirik-lagu-pupusing-nelongso-happy-asmara-hasan-toys-trending-kangmas-rungokno-tangisku" title="Arti Lirik Lagu Pupusing Nelongso - Happy Asmara &amp; Hasan Toys, Trending, ‘Kangmas Rungokno Tangisku’" class="f20 ln24 fbo txt-oev-2">
							Arti Lirik Lagu Pupusing Nelongso - Happy Asmara &amp; Hasan Toys, Trending, ‘Kangmas Rungokno Tangisku’ 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Happy Asmara dan Hasan Toys baru-baru ini mengunggah lagu cover Pupusing Nelongso yang kini trending di YouTube.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/seleb" title="Seleb" class="fbo2 tsa-2">Seleb</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 13:26:05">4 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/arti-lirik-lagu-pupusing-nelongso-happy-asmara-hasan-toys-trending-kangmas-rungokno-tangisku" data-title="Arti Lirik Lagu Pupusing Nelongso - Happy Asmara &amp; Hasan Toys, Trending, ‘Kangmas Rungokno Tangisku’" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="12">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/kejinya-predator-anak-di-surabaya-lecehkan-korban-pakai-sumpit-dan-boneka-barbie" title="Kejinya Predator Anak di Surabaya, Lecehkan Korban Pakai Sumpit dan Boneka Barbie">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/ilustrasi-pencabulan-cabul-21-agustus-2020.jpg" class="shou2 bgwhite" height="90" width="120" alt="ilustrasi-pencabulan-cabul-21-agustus-2020.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-surabaya" title="Berita Surabaya">
							Berita Surabaya						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/kejinya-predator-anak-di-surabaya-lecehkan-korban-pakai-sumpit-dan-boneka-barbie" title="Kejinya Predator Anak di Surabaya, Lecehkan Korban Pakai Sumpit dan Boneka Barbie" class="f20 ln24 fbo txt-oev-2">
							Kejinya Predator Anak di Surabaya, Lecehkan Korban Pakai Sumpit dan Boneka Barbie 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Rizky adalah laki-laki berperawakan tinggi, besar, dan lengannya lumayan kekar. Usianya sudah menginjak 21 tahun.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/surabaya" title="Surabaya" class="fbo2 tsa-2">Surabaya</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 11:17:14">6 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/kejinya-predator-anak-di-surabaya-lecehkan-korban-pakai-sumpit-dan-boneka-barbie" data-title="Kejinya Predator Anak di Surabaya, Lecehkan Korban Pakai Sumpit dan Boneka Barbie" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="13">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/guru-besar-unibraw-beri-nilai-8-penampilan-mahfud-md-dalam-debat-cawapres-kedua" title="Guru Besar Unibraw Beri Nilai 8 Penampilan Mahfud MD dalam Debat Cawapres Kedua">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Pakar-komunikasi-Prof-Rachmat-Kriyantono.jpg" class="shou2 bgwhite" height="90" width="120" alt="Pakar-komunikasi-Prof-Rachmat-Kriyantono.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/pemilu-2024" title="Pemilu 2024">
							Pemilu 2024						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/guru-besar-unibraw-beri-nilai-8-penampilan-mahfud-md-dalam-debat-cawapres-kedua" title="Guru Besar Unibraw Beri Nilai 8 Penampilan Mahfud MD dalam Debat Cawapres Kedua" class="f20 ln24 fbo txt-oev-2">
							Guru Besar Unibraw Beri Nilai 8 Penampilan Mahfud MD dalam Debat Cawapres Kedua 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Pakar komunikasi Prof Rachmat Kriyantono memberikan nilai 8 kepada calon wakil presiden (awapres) nomor urut 03 Mahfud MD</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/mata-lokal-memilih" title="Mata Lokal Memilih" class="fbo2 tsa-2">Mata Lokal Memilih</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 10:51:11">6 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/guru-besar-unibraw-beri-nilai-8-penampilan-mahfud-md-dalam-debat-cawapres-kedua" data-title="Guru Besar Unibraw Beri Nilai 8 Penampilan Mahfud MD dalam Debat Cawapres Kedua" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																											<style>.widgettshop .ovh::-webkit-scrollbar,.widgettshop .ovs::-webkit-scrollbar{display:none}.widgettshop{background:linear-gradient(310deg,#bbe972 0,#edf9d9 100%,#f5fbec 100%)}.widgettshop .linktshop{padding:10px 15px 20px;line-height:20px;text-align:left;font-weight:600;overflow:hidden;font-size:15px}.widgettshop .linktshop a{color:#25282b;letter-spacing:.001em;display:-webkit-box;-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:4}.widgettshop .itemtshop{position:relative;display:block;margin:0 15px 0 0;background:#ffffffc9;border-radius:7px;border:1px solid #e8e8e8}.widgettshop .thumbtshop img{border-radius:7px 7px 0 0}.ts-widget-header{margin-bottom:20px}.ts-widget-header-top{display:flex;justify-content:space-between;align-items:center}.ts-widget-header-top img{width:120px;height:auto}.ts-btn-blue{background-color:#0066b3;border-radius:10px;color:#fff;font-size:10px;font-weight:500;display:block;padding:8px 16px}.ts-widget-header-btm{margin-top:16px;display:block;position:relative}.ts-widget-header-btm form{display:flex}.ts-widget-header-btm input{width:100%;overflow:hidden;padding:10px 10px 10px 38px;color:#cacccf;font-size:12px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:20px;transition:.3s;background:#fff;border:1px solid #e8e8e8}.ts-widget-header-btm button{position:absolute;padding:0;top:0;left:15px;color:#52575c;display:block;font-size:14px;cursor:pointer;height:35px;line-height:35px;border:none;background:0 0}.widgettshop{padding:20px}.widgettshop .cattshop{padding:10px 15px 0}.widgettshop .cattshop a{font-weight:400;font-size:12px;line-height:18px;letter-spacing:.004em;color:#0066b3}.widgettshop .cattshop.sponsored a{padding:3px 5px;background:#c40043;border-radius:3px;color:#fff;display:inline-block;}.widgettshop .lsi-h{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:center;overflow:hidden}.widgettshop .bx-wrapper .lsi-h{overflow:unset}.widgettshop .ctrlBtn a{background:#fff;border-radius:25px;position:absolute;display:block;width:40px;height:40px;line-height:40px;text-align:center;filter:drop-shadow(0 0 5px #000);}.widgettshop .ctrlBtn.next a{float:right;right:-15px}.widgettshop .ctrlBtn.prev a{float:left;left:-15px}.widgettshop .ctrlBtn a:hover{background:#0066b3;color:#fff}.widgettshop .ctrlBtn a.disabled{display:none}.widgettshop .wts-wrapper{position:relative}.widgettshop .ctrlSlide{position:absolute;width:100%;top:40%;transform:translateY(-50%)}</style>
<script>
	$(document).ready(function () {
        $("#wtshopslider").bxSlider({
			controls: true,
            nextSelector: "#nxtwts",
            prevSelector: "#prvwts",
            nextText: '<i class="fa fa-chevron-right"></i>',
            prevText: '<i class="fa fa-chevron-left"></i>',
            pager: false,
            slideWidth: 220,
            minSlides: 1,
            maxSlides: 4,
            infiniteLoop: false,
			adaptiveHeight: true,
            hideControlOnEnd: true
        })
    });
</script>
<li>
<div class="widgettshop">
	<div class="ts-widget-header">
		<div class="ts-widget-header-top">
			<div>
				<a href="https://shopping.tribunnews.com?utm_source=madura&utm_medium=widget&referral=shopping" title="Tribun Shopping" aria-label="link" target="_blank">
					<img src="https://asset-1.tstatic.net/img/logo/tribun/svg/tribunshopping.svg" alt="Tribun Shopping Logo">
				</a>
			</div>
			<div>
				<a href="https://shopping.tribunnews.com?utm_source=madura&utm_medium=widget&referral=shopping" class="ts-btn-blue" title="Tribun Shopping" aria-label="link" target="_blank">Kunjungi Kami</a>
			</div>
		</div>
		<div class="ts-widget-header-btm">
			<form action="https://shopping.tribunnews.com/search" method="GET">
				<input type="text" name="q" class="input" placeholder="Temukan Produk Dengan Harga Terbaik">
				<input type="hidden" name="cx" value="partner-pub-81d98081c64a94475">
				<input type="hidden" name="cof" value="FORID:10">
				<button type="submit" class="btn-search" aria-label="Search"><i class="fa fa-search"></i></button>
			</form>
		</div>
	</div>
	<div class="wfull wts-wrapper">
		<div class="lsi-h" id="wtshopslider">

		            <div class="itemtshop pinned">
				<div class="thumbtshop">
										<a href="https://shopping.tribunnews.com/2024/01/23/7-rekomendasi-tripod-hp-mulai-rp-100-ribuan-untuk-bikin-konten-berkualitas?utm_source=madura&utm_medium=widget&referral=shopping" title="7 Rekomendasi Tripod HP Mulai Rp 100 Ribuan untuk Bikin Konten Berkualitas" aria-label="link" target="_blank">
						<img src="https://asset-2.tstatic.net/shopping/foto/bank/thumbnails2/ilustrasi-pemakaian-tripod-hp.jpg" width="220" height="140" alt="7 Rekomendasi Tripod HP Mulai Rp 100 Ribuan untuk Bikin Konten Berkualitas" data-loaded="true" loading="lazy">
						<div class="cl2"></div>
					</a>
				</div>
				<div class="cattshop sponsored">
					<a href="https://shopping.tribunnews.com/topic/aksesoris-hp" title="Aksesoris HP" target="_blank">Aksesoris HP</a>
				</div>
				<div class="linktshop">
					<a href="https://shopping.tribunnews.com/2024/01/23/7-rekomendasi-tripod-hp-mulai-rp-100-ribuan-untuk-bikin-konten-berkualitas?utm_source=madura&utm_medium=widget&referral=shopping" title="7 Rekomendasi Tripod HP Mulai Rp 100 Ribuan untuk Bikin Konten Berkualitas" aria-label="link" target="_blank">7 Rekomendasi Tripod HP Mulai Rp 100 Ribuan untuk Bikin Konten Berkualitas</a>
				</div>
			</div>
            


			            <div class="itemtshop">
				<div class="thumbtshop">
										<a href="https://shopping.tribunnews.com/2024/01/23/bumil-wajib-penuhi-kebutuhan-asam-folat-dan-nutrisi-harian-ini-8-rekomendasi-suplemen-terbaiknya?utm_source=madura&utm_medium=widget&referral=shopping" title="Bumil Wajib Penuhi Kebutuhan Asam Folat dan Nutrisi Harian, Ini 8 Rekomendasi Suplemen Terbaiknya" aria-label="link" target="_blank">
						<img src="https://asset-2.tstatic.net/shopping/foto/bank/thumbnails2/suplemen-khusus-bumil.jpg" width="220" height="140" alt="Bumil Wajib Penuhi Kebutuhan Asam Folat dan Nutrisi Harian, Ini 8 Rekomendasi Suplemen Terbaiknya" data-loaded="true" loading="lazy">
						<div class="cl2"></div>
					</a>
				</div>
				<div class="cattshop">
					<a href="https://shopping.tribunnews.com/topic/obat-dan-suplemen" title="Obat dan Suplemen" target="_blank">Obat dan Suplemen</a>
				</div>
				<div class="linktshop">
					<a href="https://shopping.tribunnews.com/2024/01/23/bumil-wajib-penuhi-kebutuhan-asam-folat-dan-nutrisi-harian-ini-8-rekomendasi-suplemen-terbaiknya?utm_source=madura&utm_medium=widget&referral=shopping" title="Bumil Wajib Penuhi Kebutuhan Asam Folat dan Nutrisi Harian, Ini 8 Rekomendasi Suplemen Terbaiknya" aria-label="link" target="_blank">Bumil Wajib Penuhi Kebutuhan Asam Folat dan Nutrisi Harian, Ini 8 Rekomendasi Suplemen Terbaiknya</a>
				</div>
			</div>
                        <div class="itemtshop">
				<div class="thumbtshop">
										<a href="https://shopping.tribunnews.com/2024/01/23/review-sea-makeup-acne-care-micro-translucent-setting-powder-bedak-tabur-untuk-kulit-berjerawat?utm_source=madura&utm_medium=widget&referral=shopping" title="Review Sea Makeup Acne Care Micro Translucent Setting Powder, Bedak Tabur untuk Kulit Berjerawat" aria-label="link" target="_blank">
						<img src="https://asset-2.tstatic.net/shopping/foto/bank/thumbnails2/sea-makeup-acne-care-micro-translucent-setting-powder-12-gram.jpg" width="220" height="140" alt="Review Sea Makeup Acne Care Micro Translucent Setting Powder, Bedak Tabur untuk Kulit Berjerawat" data-loaded="true" loading="lazy">
						<div class="cl2"></div>
					</a>
				</div>
				<div class="cattshop">
					<a href="https://shopping.tribunnews.com/topic/produk-makeup" title="Produk Makeup" target="_blank">Produk Makeup</a>
				</div>
				<div class="linktshop">
					<a href="https://shopping.tribunnews.com/2024/01/23/review-sea-makeup-acne-care-micro-translucent-setting-powder-bedak-tabur-untuk-kulit-berjerawat?utm_source=madura&utm_medium=widget&referral=shopping" title="Review Sea Makeup Acne Care Micro Translucent Setting Powder, Bedak Tabur untuk Kulit Berjerawat" aria-label="link" target="_blank">Review Sea Makeup Acne Care Micro Translucent Setting Powder, Bedak Tabur untuk Kulit Berjerawat</a>
				</div>
			</div>
                        <div class="itemtshop">
				<div class="thumbtshop">
										<a href="https://shopping.tribunnews.com/2024/01/23/7-fitur-galaxy-ai-yang-dibawa-samsung-galaxy-s24-series-salah-satunya-deteksi-outfit?utm_source=madura&utm_medium=widget&referral=shopping" title="7 Fitur Galaxy AI yang Dibawa SAMSUNG Galaxy S24 Series, Salah Satunya Deteksi Outfit" aria-label="link" target="_blank">
						<img src="https://asset-2.tstatic.net/shopping/foto/bank/thumbnails2/galaxy-ai-circle-to-search.jpg" width="220" height="140" alt="7 Fitur Galaxy AI yang Dibawa SAMSUNG Galaxy S24 Series, Salah Satunya Deteksi Outfit" data-loaded="true" loading="lazy">
						<div class="cl2"></div>
					</a>
				</div>
				<div class="cattshop">
					<a href="https://shopping.tribunnews.com/topic/produk-handphone" title="Produk Handphone" target="_blank">Produk Handphone</a>
				</div>
				<div class="linktshop">
					<a href="https://shopping.tribunnews.com/2024/01/23/7-fitur-galaxy-ai-yang-dibawa-samsung-galaxy-s24-series-salah-satunya-deteksi-outfit?utm_source=madura&utm_medium=widget&referral=shopping" title="7 Fitur Galaxy AI yang Dibawa SAMSUNG Galaxy S24 Series, Salah Satunya Deteksi Outfit" aria-label="link" target="_blank">7 Fitur Galaxy AI yang Dibawa SAMSUNG Galaxy S24 Series, Salah Satunya Deteksi Outfit</a>
				</div>
			</div>
                        <div class="itemtshop">
				<div class="thumbtshop">
										<a href="https://shopping.tribunnews.com/2024/01/23/5-rekomendasi-minyak-angin-oles-terbaik-solusi-tepat-cegah-flu-dan-masuk-angin?utm_source=madura&utm_medium=widget&referral=shopping" title="5 Rekomendasi Minyak Angin Oles Terbaik, Solusi Tepat Cegah Flu dan Masuk Angin" aria-label="link" target="_blank">
						<img src="https://asset-2.tstatic.net/shopping/foto/bank/thumbnails2/safe-care-aromatherapy2.jpg" width="220" height="140" alt="5 Rekomendasi Minyak Angin Oles Terbaik, Solusi Tepat Cegah Flu dan Masuk Angin" data-loaded="true" loading="lazy">
						<div class="cl2"></div>
					</a>
				</div>
				<div class="cattshop">
					<a href="https://shopping.tribunnews.com/topic/bodycare" title="Bodycare" target="_blank">Bodycare</a>
				</div>
				<div class="linktshop">
					<a href="https://shopping.tribunnews.com/2024/01/23/5-rekomendasi-minyak-angin-oles-terbaik-solusi-tepat-cegah-flu-dan-masuk-angin?utm_source=madura&utm_medium=widget&referral=shopping" title="5 Rekomendasi Minyak Angin Oles Terbaik, Solusi Tepat Cegah Flu dan Masuk Angin" aria-label="link" target="_blank">5 Rekomendasi Minyak Angin Oles Terbaik, Solusi Tepat Cegah Flu dan Masuk Angin</a>
				</div>
			</div>
                        <div class="itemtshop">
				<div class="thumbtshop">
										<a href="https://shopping.tribunnews.com/2024/01/23/7-rekomendasi-loose-powder-kualitas-terbaik-dengan-formula-super-ringan?utm_source=madura&utm_medium=widget&referral=shopping" title="7 Rekomendasi Loose Powder Kualitas Terbaik dengan Formula Super Ringan" aria-label="link" target="_blank">
						<img src="https://asset-2.tstatic.net/shopping/foto/bank/thumbnails2/7-rekomendasi-loose-powder-kualitas-terbaik-dengan-formula-super-ringan.jpg" width="220" height="140" alt="7 Rekomendasi Loose Powder Kualitas Terbaik dengan Formula Super Ringan" data-loaded="true" loading="lazy">
						<div class="cl2"></div>
					</a>
				</div>
				<div class="cattshop">
					<a href="https://shopping.tribunnews.com/topic/produk-makeup" title="Produk Makeup" target="_blank">Produk Makeup</a>
				</div>
				<div class="linktshop">
					<a href="https://shopping.tribunnews.com/2024/01/23/7-rekomendasi-loose-powder-kualitas-terbaik-dengan-formula-super-ringan?utm_source=madura&utm_medium=widget&referral=shopping" title="7 Rekomendasi Loose Powder Kualitas Terbaik dengan Formula Super Ringan" aria-label="link" target="_blank">7 Rekomendasi Loose Powder Kualitas Terbaik dengan Formula Super Ringan</a>
				</div>
			</div>
            		</div>

		<div class="ctrlSlide">
			<span class="ctrlBtn prev" id="prvwts"></span>
			<span class="ctrlBtn next" id="nxtwts"></span>
		</div>
	</div>
</div>
</li>
<script>
	$(document).ready(function () {
        $("#wtshopslider").bxSlider({
			controls: true,
            nextSelector: "#nxtwts",
            prevSelector: "#prvwts",
            nextText: '<i class="fa fa-chevron-right"></i>',
            prevText: '<i class="fa fa-chevron-left"></i>',
            pager: false,
            slideWidth: 220,
            minSlides: 1,
            maxSlides: 3,
            infiniteLoop: false,
			adaptiveHeight: true,
            hideControlOnEnd: true
        })
    });
</script>					
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="14">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/sinopsis-queen-of-divorce-drama-korea-bakal-tayang-31-januari-2024-lee-ji-ah-jadi-ahli-perceraian" title="Sinopsis Queen of Divorce, Drama Korea Bakal Tayang 31 Januari 2024, Lee Ji Ah Jadi Ahli Perceraian">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/sinopsis-Queen-of-Divorce-yang-dibintangi-Lee-Ji-Ah-dan-Kang-Ki-Young.jpg" class="shou2 bgwhite" height="90" width="120" alt="sinopsis-Queen-of-Divorce-yang-dibintangi-Lee-Ji-Ah-dan-Kang-Ki-Young.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/drama-korea" title="Drama Korea">
							Drama Korea						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/sinopsis-queen-of-divorce-drama-korea-bakal-tayang-31-januari-2024-lee-ji-ah-jadi-ahli-perceraian" title="Sinopsis Queen of Divorce, Drama Korea Bakal Tayang 31 Januari 2024, Lee Ji Ah Jadi Ahli Perceraian" class="f20 ln24 fbo txt-oev-2">
							Sinopsis Queen of Divorce, Drama Korea Bakal Tayang 31 Januari 2024, Lee Ji Ah Jadi Ahli Perceraian 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Queen of Divorce merupakan drama Korea terbaru yang akan tayang 31 Januari 2024. Seperti apa sinopsisnya?</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/seleb" title="Seleb" class="fbo2 tsa-2">Seleb</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 10:19:18">7 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/sinopsis-queen-of-divorce-drama-korea-bakal-tayang-31-januari-2024-lee-ji-ah-jadi-ahli-perceraian" data-title="Sinopsis Queen of Divorce, Drama Korea Bakal Tayang 31 Januari 2024, Lee Ji Ah Jadi Ahli Perceraian" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
							<li class="p1520 art-list pos_rel cindex" data-sort="14">	
										<div class="fr mt5 pos_rel">
						<a href="2024/01/22/materu-pengajian-umum-gus-iqdam-di-bojonegoro-singgung-soal-pemilu-2024-langsung-pilih" title="Materi Pengajian Umum Gus Iqdam di Bojonegoro, Singgung Soal Pemilu 2024: Langsung Pilih">
							<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/Gus-Iqdam-saat-memberi-tausyiah-di-Alun-Alun-Bojonegoro-Minggu-2112024-malam.jpg" class="shou2 bgwhite" height="90" width="120" alt="Gus-Iqdam-saat-memberi-tausyiah-di-Alun-Alun-Bojonegoro-Minggu-2112024-malam.jpg" />
													</a>	
					</div>
										<div class='mr140'>
												<h4 class="fbo2 f14 red">
							<a href="https://madura.tribunnews.com/topics/berita-bojonegoro" title="Berita Bojonegoro">
								Berita Bojonegoro							</a>
						</h4>
												<h3>
							<a href="https://madura.tribunnews.com/2024/01/22/materu-pengajian-umum-gus-iqdam-di-bojonegoro-singgung-soal-pemilu-2024-langsung-pilih" title="Materi Pengajian Umum Gus Iqdam di Bojonegoro, Singgung Soal Pemilu 2024: Langsung Pilih" class="f20 ln24 fbo txt-oev-2">
								Materi Pengajian Umum Gus Iqdam di Bojonegoro, Singgung Soal Pemilu 2024: Langsung Pilih 							</a>
						</h3>
						<div class="grey2 pt5 f13 ln18 txt-oev-2">Pengajian umum diselenggarakan Kemenag Bojonegoro dan diisi Gus Iqdam di Alun-Alun Bojonegoro pada Minggu (21/1/2024) malam, berlangsung meriah.</div>
						<div class="pt5 grey">
							<span class="mr5">
								<a href="https://madura.tribunnews.com/news" title="News" class="fbo2 tsa-2">News</a>
							</span>	
							<span class="fa fa-clock-o mr5"></span>
							<time class="foot timeago" title="2024-01-22 13:07:24">1 hari lalu</time>
						</div>
						<div class="sharecot pos_abs nw" data-href="https://www.tribunnews.com/2024/01/22/materu-pengajian-umum-gus-iqdam-di-bojonegoro-singgung-soal-pemilu-2024-langsung-pilih" data-title="Materi Pengajian Umum Gus Iqdam di Bojonegoro, Singgung Soal Pemilu 2024: Langsung Pilih"></div>
					</div>
					<div class="cl2"></div>
				</li>
										<li class="p1520 art-list pos_rel" data-sort="15">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/arti-mimpi-keguguran-tapi-tidak-hamil-menurut-primbon-jawa-tanda-orang-terdekat-bisa-jadi-musuh" title="Arti Mimpi Keguguran tapi Tidak Hamil, Menurut Primbon Jawa Tanda Orang Terdekat Bisa Jadi Musuh">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/arti-mimpi-keguguran-tapi-tidak-hamil-menurut-primbon-jawa.jpg" class="shou2 bgwhite" height="90" width="120" alt="arti-mimpi-keguguran-tapi-tidak-hamil-menurut-primbon-jawa.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/arti-mimpi" title="Arti Mimpi">
							Arti Mimpi						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/arti-mimpi-keguguran-tapi-tidak-hamil-menurut-primbon-jawa-tanda-orang-terdekat-bisa-jadi-musuh" title="Arti Mimpi Keguguran tapi Tidak Hamil, Menurut Primbon Jawa Tanda Orang Terdekat Bisa Jadi Musuh" class="f20 ln24 fbo txt-oev-2">
							Arti Mimpi Keguguran tapi Tidak Hamil, Menurut Primbon Jawa Tanda Orang Terdekat Bisa Jadi Musuh 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Menurut Primbon Jawa, mimpi keguguran tapi tidak hamil memiliki arti buruk. Orang terdekat bisa-bisa menjadi musuh bagi kita.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/lifestyle" title="Lifestyle" class="fbo2 tsa-2">Lifestyle</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 09:40:43">7 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/arti-mimpi-keguguran-tapi-tidak-hamil-menurut-primbon-jawa-tanda-orang-terdekat-bisa-jadi-musuh" data-title="Arti Mimpi Keguguran tapi Tidak Hamil, Menurut Primbon Jawa Tanda Orang Terdekat Bisa Jadi Musuh" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="16">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/arti-kata-women-support-women-bahasa-gaul-viral-di-medsos-pernah-digaungkan-bunga-citra-lestari" title="Arti Kata Women Support Women, Bahasa Gaul Viral di Medsos, Pernah Digaungkan Bunga Citra Lestari">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/arti-kata-women-support-women-yang-pernah-disinggung-oleh-BCL.jpg" class="shou2 bgwhite" height="90" width="120" alt="arti-kata-women-support-women-yang-pernah-disinggung-oleh-BCL.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/arti-kata" title="Arti Kata">
							Arti Kata						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/arti-kata-women-support-women-bahasa-gaul-viral-di-medsos-pernah-digaungkan-bunga-citra-lestari" title="Arti Kata Women Support Women, Bahasa Gaul Viral di Medsos, Pernah Digaungkan Bunga Citra Lestari" class="f20 ln24 fbo txt-oev-2">
							Arti Kata Women Support Women, Bahasa Gaul Viral di Medsos, Pernah Digaungkan Bunga Citra Lestari 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Bunga Citra Lestari pernah menyinggung women support women. Lantas, apa arti kata tersebut?</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/lifestyle" title="Lifestyle" class="fbo2 tsa-2">Lifestyle</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 09:02:20">8 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/arti-kata-women-support-women-bahasa-gaul-viral-di-medsos-pernah-digaungkan-bunga-citra-lestari" data-title="Arti Kata Women Support Women, Bahasa Gaul Viral di Medsos, Pernah Digaungkan Bunga Citra Lestari" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="17">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/polusi-visual-tak-terdeteksi-ini-suasana-kampanye-pemilu-di-jepang-sederhana-yang-diatur-negara" title="Polusi Visual Tak Terdeteksi, Ini Suasana Kampanye Pemilu di Jepang, Sederhana yang Diatur Negara">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/suasana-kampanye-pemilu-di-Jepang-tak-ada-polusi-visual-diatur-negara.jpg" class="shou2 bgwhite" height="90" width="120" alt="suasana-kampanye-pemilu-di-Jepang-tak-ada-polusi-visual-diatur-negara.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-viral" title="Berita Viral">
							Berita Viral						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/polusi-visual-tak-terdeteksi-ini-suasana-kampanye-pemilu-di-jepang-sederhana-yang-diatur-negara" title="Polusi Visual Tak Terdeteksi, Ini Suasana Kampanye Pemilu di Jepang, Sederhana yang Diatur Negara" class="f20 ln24 fbo txt-oev-2">
							Polusi Visual Tak Terdeteksi, Ini Suasana Kampanye Pemilu di Jepang, Sederhana yang Diatur Negara 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Viral suasana kampanye pemilu di Jepang. Para politisi mempromosikan diri dengan poster yang sesuai aturan negara.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/news" title="News" class="fbo2 tsa-2">News</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 08:41:33">8 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/polusi-visual-tak-terdeteksi-ini-suasana-kampanye-pemilu-di-jepang-sederhana-yang-diatur-negara" data-title="Polusi Visual Tak Terdeteksi, Ini Suasana Kampanye Pemilu di Jepang, Sederhana yang Diatur Negara" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="18">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/promo-indomaret-hari-ini-selasa-23-januari-2024-kopi-yummy-cuma-rp10000-mi-instan-pedas-diskon" title="Promo Indomaret Hari Ini, Selasa 23 Januari 2024: Kopi Yummy Cuma Rp10000, Mi Instan Pedas Diskon">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/promo-Indomaret-hari-ini-kopi-Yummy-Choice-hanya-Rp10000.jpg" class="shou2 bgwhite" height="90" width="120" alt="promo-Indomaret-hari-ini-kopi-Yummy-Choice-hanya-Rp10000.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/promo-dan-diskon" title="Promo dan Diskon">
							Promo dan Diskon						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/promo-indomaret-hari-ini-selasa-23-januari-2024-kopi-yummy-cuma-rp10000-mi-instan-pedas-diskon" title="Promo Indomaret Hari Ini, Selasa 23 Januari 2024: Kopi Yummy Cuma Rp10000, Mi Instan Pedas Diskon" class="f20 ln24 fbo txt-oev-2">
							Promo Indomaret Hari Ini, Selasa 23 Januari 2024: Kopi Yummy Cuma Rp10000, Mi Instan Pedas Diskon 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Promo Indomaret hari ini, kopi Yummy dibanderol dengan harga Rp10.000! Sementara pecinta cabai dibahagikan oleh diskon mi pedas.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/news" title="News" class="fbo2 tsa-2">News</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 07:53:54">9 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/promo-indomaret-hari-ini-selasa-23-januari-2024-kopi-yummy-cuma-rp10000-mi-instan-pedas-diskon" data-title="Promo Indomaret Hari Ini, Selasa 23 Januari 2024: Kopi Yummy Cuma Rp10000, Mi Instan Pedas Diskon" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="19">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/lirik-lagu-tapi-tahukah-kamu-dygta-feat-kamasean-tapi-tahukah-kamu-betapa-ku-mencintai-dirimu" title="Lirik Lagu Tapi Tahukah Kamu - Dygta feat Kamasean, ‘Tapi Tahukah Kamu Betapa Ku Mencintai Dirimu’">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/lirik-lagu-Tapi-Tahukah-Kamu-Dygta-feat-Kamasean.jpg" class="shou2 bgwhite" height="90" width="120" alt="lirik-lagu-Tapi-Tahukah-Kamu-Dygta-feat-Kamasean.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/lirik-lagu" title="Lirik Lagu">
							Lirik Lagu						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/lirik-lagu-tapi-tahukah-kamu-dygta-feat-kamasean-tapi-tahukah-kamu-betapa-ku-mencintai-dirimu" title="Lirik Lagu Tapi Tahukah Kamu - Dygta feat Kamasean, ‘Tapi Tahukah Kamu Betapa Ku Mencintai Dirimu’" class="f20 ln24 fbo txt-oev-2">
							Lirik Lagu Tapi Tahukah Kamu - Dygta feat Kamasean, ‘Tapi Tahukah Kamu Betapa Ku Mencintai Dirimu’ 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Lirik ‘tapi tahukah kamu betapa ku mencintai dirimu’ dinyanyikan oleh Dygta daan Kamasean dalam lagu Tahukah Kamu.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/seleb" title="Seleb" class="fbo2 tsa-2">Seleb</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 07:37:42">9 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/lirik-lagu-tapi-tahukah-kamu-dygta-feat-kamasean-tapi-tahukah-kamu-betapa-ku-mencintai-dirimu" data-title="Lirik Lagu Tapi Tahukah Kamu - Dygta feat Kamasean, ‘Tapi Tahukah Kamu Betapa Ku Mencintai Dirimu’" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="20">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/ramalan-zodiak-hari-ini-selasa-23-januari-2024-sagittarius-lebih-berani-libra-perlu-rawat-diri" title="Ramalan Zodiak Hari Ini, Selasa 23 Januari 2024: Sagittarius Lebih Berani, Libra Perlu Rawat Diri">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/ramalan-zodiak-hari-ini-Selasa-23-Januari-2024.jpg" class="shou2 bgwhite" height="90" width="120" alt="ramalan-zodiak-hari-ini-Selasa-23-Januari-2024.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/ramalan-zodiak-hari-ini" title="Ramalan Zodiak Hari Ini">
							Ramalan Zodiak Hari Ini						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/ramalan-zodiak-hari-ini-selasa-23-januari-2024-sagittarius-lebih-berani-libra-perlu-rawat-diri" title="Ramalan Zodiak Hari Ini, Selasa 23 Januari 2024: Sagittarius Lebih Berani, Libra Perlu Rawat Diri" class="f20 ln24 fbo txt-oev-2">
							Ramalan Zodiak Hari Ini, Selasa 23 Januari 2024: Sagittarius Lebih Berani, Libra Perlu Rawat Diri 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Menurut ramalan zodiak hari ini, Sagittarius bakal hoki dengan syarat harus tampil lebih berani. Sementara Libra harus mulai merawat diri sendiri.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/lifestyle" title="Lifestyle" class="fbo2 tsa-2">Lifestyle</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 07:18:27">10 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/ramalan-zodiak-hari-ini-selasa-23-januari-2024-sagittarius-lebih-berani-libra-perlu-rawat-diri" data-title="Ramalan Zodiak Hari Ini, Selasa 23 Januari 2024: Sagittarius Lebih Berani, Libra Perlu Rawat Diri" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="21">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/dokter-diceraikan-suami-gegara-bikin-bangkrut-padahal-pekerja-keras-ternyata-dusta-dengan-temanku" title="Dokter Diceraikan Suami Gegara Bikin Bangkrut, Padahal Pekerja Keras, Ternyata Dusta: dengan Temanku">
						<img src="https://asset-2.tstatic.net/madura/foto/bank/thumbnails2/dokter-diceraikan-suami-hanya-gegara-weton-Jawa-ternyata-dusta-aslinya-selingkuh.jpg" class="shou2 bgwhite" height="90" width="120" alt="dokter-diceraikan-suami-hanya-gegara-weton-Jawa-ternyata-dusta-aslinya-selingkuh.jpg" />
											</a>	
				</div>
								<div class='mr140'>
										<h4 class="fbo2 f14 red">
						<a href="https://madura.tribunnews.com/topic/berita-viral" title="Berita Viral">
							Berita Viral						</a>
					</h4>
										<h3>
						<a href="https://madura.tribunnews.com/2024/01/23/dokter-diceraikan-suami-gegara-bikin-bangkrut-padahal-pekerja-keras-ternyata-dusta-dengan-temanku" title="Dokter Diceraikan Suami Gegara Bikin Bangkrut, Padahal Pekerja Keras, Ternyata Dusta: dengan Temanku" class="f20 ln24 fbo txt-oev-2">
							Dokter Diceraikan Suami Gegara Bikin Bangkrut, Padahal Pekerja Keras, Ternyata Dusta: dengan Temanku 						</a>
					</h3>
					<div class="grey2 pt5 f13 ln18 txt-oev-2">Dokter ini rela diceraikan suami imbas wetonnya yang digadang-gadang bikin bangkrut. Ternyata, ada udang di balik batu.</div>
					<div class="pt5 grey">
						<span>
							<a href="https://madura.tribunnews.com/news" title="News" class="fbo2 tsa-2">News</a>
						</span>	
						<span class="fa fa-clock-o mr5 ml7"></span>
						<time class="foot timeago" title="2024-01-23 06:57:45">10 jam lalu </time>
					</div>
					<div class="sharecot pos_abs nw" data-href="https://madura.tribunnews.com/2024/01/23/dokter-diceraikan-suami-gegara-bikin-bangkrut-padahal-pekerja-keras-ternyata-dusta-dengan-temanku" data-title="Dokter Diceraikan Suami Gegara Bikin Bangkrut, Padahal Pekerja Keras, Ternyata Dusta: dengan Temanku" data-via="tribunmaduracom"></div>
				</div>
				<div class="cl2"></div>
			</li>
																																
			
									
									
									<li class="p1520 art-list pos_rel" data-sort="22">	
								<div class="fr mt5 pos_rel">
					<a href="2024/01/23/