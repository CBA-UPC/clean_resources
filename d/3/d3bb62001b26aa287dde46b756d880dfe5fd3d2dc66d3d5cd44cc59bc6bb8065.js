if (typeof __googlefc.fcKernelManager.run === 'function') {"use strict";this.default_ContributorServingResponseClientJs=this.default_ContributorServingResponseClientJs||{};(function(_){var window=this;
try{
/*
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var oh,wh,xh,yh,Ah,Bh,Ch,Dh,Eh,Fh,Gh,Hh,Jh,Lh,Oh,th,Ph,Qh;_.nh=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};oh=function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};_.ph=function(a,b){_.ih(b.querySelectorAll(a),function(c){c.style.setProperty("display","none","important")})};_.qh=function(a,b){b.querySelector(a).style.display=""};
_.rh=function(a){var b=function(d){for(var e=0;e<d.length;e++){var f=d[e];if("CSSStyleRule"===f.constructor.name)for(var g=0;g<f.style.length;g++){var h=f.style[g],k=f.style.getPropertyValue(h);f.style.setProperty(h,k,"important")}else"CSSMediaRule"===f.constructor.name?b(f.cssRules):"CSSSupportsRule"===f.constructor.name&&b(f.cssRules)}},c=null;a instanceof HTMLStyleElement?c=a.sheet:a instanceof StyleSheet&&(c=a);c&&c.cssRules&&b(c.cssRules)};
_.vh=function(a,b,c,d){a=a(b||sh,c);d=d||_.he();if(a&&a.g)d=a.g();else{d=_.ie(d.g,"DIV");b:if(_.Nd(a)){if(a.Rb&&(a=a.Rb(),a instanceof _.ce))break b;a=th("zSoyz")}else a=th(String(a));_.uh(d,a)}1==d.childNodes.length&&(a=d.firstChild,1==a.nodeType&&(d=a));return d};wh={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
xh=function(a,b){_.nh(b,function(c,d){"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:wh.hasOwnProperty(d)?a.setAttribute(wh[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})};
yh=function(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!_.Od(f)||_.Nd(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(_.Nd(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}_.ih(g?_.hh(f):f,d)}}};
_.ge.prototype.h=_.Mc(0,function(a,b,c){var d=this.g,e=arguments,f=e[1],g=_.ie(d,String(e[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):xh(g,f));2<e.length&&yh(d,g,e);return g});_.zh=function(a){var b=_.Ud();a=b?b.createHTML(a):a;return new _.ce(a,_.be)};Ah=function(a,b){a=a.g;b=b&&"*"!=b?String(b).toUpperCase():"";a.querySelectorAll&&a.querySelector&&b?b=a.querySelectorAll(b):b=a.getElementsByTagName(b||"*");return b};Bh=/&/g;Ch=/</g;Dh=/>/g;Eh=/"/g;Fh=/'/g;
Gh=/\x00/g;Hh=/[\x00&<>"']/;_.Ih=function(a,b){a=_.Rd(a,b);return null==a?void 0:a};Jh=function(a){a=_.mh(a,1);return null==a?void 0:a};_.Kh=function(a,b){a=_.hb(_.Fc(a,b));return null==a?void 0:a};Lh=function(a){this.g=a};Lh.prototype.toString=function(){return this.g.toString()};_.Mh={};_.Nh=function(a){this.g=a};_.Nh.prototype.toString=function(){return this.g.toString()};Oh=function(a){return a instanceof _.Nh&&a.constructor===_.Nh?a.g:"type_error:SafeStyleSheet"};
th=function(a){a instanceof _.ce||(a=String(a),Hh.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Bh,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Ch,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Dh,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Eh,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Fh,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Gh,"&#0;"))),a=_.zh(a));return a};_.uh=function(a,b){if((0,_.fe)())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=_.de(b)};Ph=/^[\w+/_-]+[=]{0,2}$/;
Qh=function(){var a=_.t.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&Ph.test(a)?a:"":""};_.Rh=function(a){this.j=_.v(a)};_.A(_.Rh,_.J);_.Sh=function(a){this.j=_.v(a)};_.A(_.Sh,_.J);_.Th=function(a){this.j=_.v(a)};_.A(_.Th,_.J);var Uh=function(a){this.j=_.v(a)};_.A(Uh,_.J);_.Vh=function(a){this.j=_.v(a)};_.A(_.Vh,_.J);_.Wh=function(a){return _.D(a,Uh,2)};_.Xh=function(a){this.j=_.v(a)};_.A(_.Xh,_.J);_.Yh=[1,2,3,4,5,6];var Zh=function(a){this.j=_.v(a)};_.A(Zh,_.J);Zh.C=[2];var $h=function(a){this.j=_.v(a)};_.A($h,_.J);$h.prototype.F=function(){return _.I(this,1)};var ai=function(a){this.j=_.v(a)};_.A(ai,_.J);_.bi=function(a){return _.E(a,$h,1)};ai.C=[1];var ci=function(a){this.j=_.v(a)};_.A(ci,_.J);_.di=function(a){return _.D(a,Zh,7)};_.ei=[1,2,3,4,5];_.fi=function(a){this.j=_.v(a)};_.A(_.fi,_.J);_.gi=function(a){this.j=_.v(a)};_.A(_.gi,_.J);_.hi=function(a){return _.D(a,_.Th,2)};var ii=function(a){this.j=_.v(a)};_.A(ii,_.J);_.ji=function(a){return _.D(a,_.Th,8)};var ki=function(a){this.j=_.v(a)};_.A(ki,_.J);_.li=function(a){return _.D(a,ii,1)};_.mi=function(a){this.j=_.v(a)};_.A(_.mi,_.J);_.ni=function(a){return _.D(a,ai,3)};_.oi=function(a){return _.D(a,ki,5)};_.pi=function(a){return _.D(a,ci,2)};var qi;_.ri=function(a,b){var c=_.he(b);b=c.g;if(_.rc&&b.createStyleSheet)return b=b.createStyleSheet(),qi(b,a),b;b=Ah(c,"HEAD")[0];if(!b){var d=Ah(c,"BODY")[0];b=c.h("HEAD");d.parentNode.insertBefore(b,d)}c=c.h("STYLE");(d=Qh())&&c.setAttribute("nonce",d);qi(c,a);b.appendChild(c);return c};
qi=function(a,b){b=Oh(b);if(_.rc&&void 0!==a.cssText)a.cssText=b;else if(_.t.trustedTypes)if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))}else a.innerHTML=b};var ti,ui,vi,wi;_.si={};ti={};ui={};vi={};wi=function(){throw Error("G");};wi.prototype.hb=null;wi.prototype.toString=function(){return this.content};wi.prototype.Rb=function(){if(this.ha!==_.si)throw Error("H");return _.zh(this.toString())};var xi=function(){wi.call(this)};_.re(xi,wi);xi.prototype.ha=_.si;var yi=function(){wi.call(this)};_.re(yi,wi);yi.prototype.ha=ti;yi.prototype.hb=1;var zi=function(){wi.call(this)};_.re(zi,wi);zi.prototype.ha=vi;zi.prototype.hb=1;var Ai=function(a,b){return null!=a&&a.ha===b};var Ei,Fi,Hi,Oi,Pi,Qi,oj,Di,pj,qj,rj,hj,Ci,Ki,Mi,Li,sj,gj,lj,fj,jj,ej,Ii,Ji;_.Bi=function(a){if(null!=a)switch(a.hb){case 1:return 1;case -1:return-1;case 0:return 0}return null};_.U=function(a){return Ai(a,_.si)?a:a instanceof _.ce?(0,_.S)(_.de(a).toString()):(0,_.S)(String(String(a)).replace(Ci,Di),_.Bi(a))};Ei=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c){return new b(String(c))}};
_.S=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.hb=d);return c}}(xi);Fi=Ei(yi);_.V=Ei(zi);_.Gi=RegExp("^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\\b");Hi=function(a){return a.replace(/<\//g,"<\\/").replace(/\]\]>/g,"]]\\>")};_.W=function(a){return Ai(a,_.si)?String(String(a.content).replace(Ii,"").replace(Ji,"&lt;")).replace(Ki,Di):String(a).replace(Ci,Di)};
_.Ni=function(a){return Ai(a,_.si)?String(String(a.content).replace(Ii,"").replace(Ji,"&lt;")).replace(Li,Di):String(a).replace(Mi,Di)};Oi=/['()]/g;Pi=function(a){return"%"+a.charCodeAt(0).toString(16)};Qi=function(a){a=encodeURIComponent(String(a));Oi.lastIndex=0;return Oi.test(a)?a.replace(Oi,Pi):a};_.ij=function(a){Ai(a,ti)||Ai(a,ui)?a=ej(a):a instanceof _.$d?a=ej(_.ae(a)):a instanceof _.Xd?a=ej(_.Yd(a).toString()):(a=String(a),a=fj.test(a)?a.replace(gj,hj):"about:invalid#zSoyz");return a};
_.kj=function(a){Ai(a,ti)||Ai(a,ui)?a=ej(a):a instanceof _.$d?a=ej(_.ae(a)):a instanceof _.Xd?a=ej(_.Yd(a).toString()):(a=String(a),a=jj.test(a)?a.replace(gj,hj):"about:invalid#zSoyz");return a};_.X=function(a){Ai(a,vi)?a=Hi(a.content):null==a?a="":a instanceof Lh?a=Hi(a instanceof Lh&&a.constructor===Lh?a.g:"type_error:SafeStyle"):a instanceof _.Nh?a=Hi(Oh(a)):(a=String(a),a=lj.test(a)?a:"zSoyz");return a};
_.mj=function(a,b){a=oh(a.slice(0),function(c){return b&&c&&b.pc&&c.pc?b.ha!==c.ha?!1:b.toString()===c.toString():b instanceof wi&&c instanceof wi?b.ha!=c.ha?!1:b.toString()==c.toString():b==c});return-1===a?-1:a};_.nj=function(){return _.gc.apply(0,arguments)};
oj={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};Di=function(a){return oj[a]};
pj={"\x00":"\\0 ","\b":"\\8 ","\t":"\\9 ","\n":"\\a ","\v":"\\b ","\f":"\\c ","\r":"\\d ",'"':"\\22 ","&":"\\26 ","'":"\\27 ","(":"\\28 ",")":"\\29 ","*":"\\2a ","/":"\\2f ",":":"\\3a ",";":"\\3b ","<":"\\3c ","=":"\\3d ",">":"\\3e ","@":"\\40 ","\\":"\\5c ","{":"\\7b ","}":"\\7d ","\u0085":"\\85 ","\u00a0":"\\a0 ","\u2028":"\\2028 ","\u2029":"\\2029 "};qj=function(a){return pj[a]};
rj={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29",
"<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB",
"\uff3d":"%EF%BC%BD"};hj=function(a){return rj[a]};Ci=/[\x00\x22\x26\x27\x3c\x3e]/g;Ki=/[\x00\x22\x27\x3c\x3e]/g;Mi=/[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;Li=/[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;sj=/[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;gj=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;lj=/^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i;
fj=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;jj=/^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i;ej=function(a){return String(a).replace(gj,hj)};Ii=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;Ji=/</g;var sh={};var wj;_.tj=function(){return(0,_.S)('<div class="fc-dialog-overlay"></div>')};
_.vj=function(a,b,c,d,e,f){return(0,_.S)('<div class="'+_.W(a)+' fc-dialog" role="dialog" tabindex="0"'+(d?' aria-label="'+_.W(d)+'"':"")+">"+(e?(0,_.S)('<button class="fc-back-button" tabindex="0"><div class="fc-back-button-background"></div><i class="material-icons fc-back-icon" translate="no">arrow_back</i></button>'):"")+(0<_.bi(_.ni(b)).filter(function(g){return 1===g.F()}).length?_.uj():"")+(0,_.S)('<div class="fc-dialog-content">'+_.U(c)+"</div>")+((f instanceof wi?f.content:f)?(0,_.S)('<footer class="fc-dialog-footer">'+
_.U(f)+"</footer>"):"")+"</div>")};_.xj=function(a,b,c){return(0,_.S)("<div class="+_.Ni(c?"fc-site-macro-logo fc-header-image-container":"fc-header-image-container")+">"+(null==_.R(a,1)?'<div class="fc-header-image-default"></div>':'<img class="fc-header-image" alt="'+(b?_.W(b):"site logo")+'" src="'+_.W(_.kj(wj(a)))+'">')+"</div>")};
wj=function(a){var b,c=_.ij(null!=(b=_.R(a,1))?b:"")+"=",d;c+=null!=(null==a?void 0:null==(d=_.Wh(a))?void 0:_.D(d,_.Rh,2))&&3===_.Kh(_.D(_.Wh(a),_.Rh,2),2)?"h"+Qi(Math.floor(60*Jh(_.D(_.Wh(a),_.Rh,2)))):"h"+Qi(60);return Fi(c)};_.uj=function(a){return(0,_.S)('<button class="fc-close" tabindex="0"'+(a?' aria-label="'+_.W(a)+'"':"")+'><div class="fc-close-background"></div><i class="material-icons fc-close-icon" translate="no">cancel</i></button>')};
_.yj=function(a,b,c){if(c){var d;b&&null==_.R(c,1)?d='<img class="fc-header-placeholder-image" alt="'+_.W(a)+'" src="https://fonts.gstatic.com/s/i/googlematerialicons/image/v7/grey600-24dp/1x/gm_image_grey600_24dp.png"/>':d=(0,_.S)(null!=_.R(c,1)?'<img class="fc-header-image" alt="'+_.W(a)+'" src="'+_.W(_.kj(wj(c)))+'">':"");a='<h2 class="fc-header-image-container">'+d+"</h2>"}else a='<h2 class="fc-header-text">'+_.U(a)+"</h2>";return(0,_.S)('<div class="fc-header">'+a+"</div>")};
_.Aj=function(a,b){return(0,_.S)('<div class="fc-dialog-headline"><h1 class="fc-dialog-headline-text">'+_.U(a)+"</h1>"+(b?_.zj(b):"")+"</div>")};_.zj=function(a){return(0,_.S)('<div class="fc-dialog-body"><p class="fc-dialog-body-text">'+_.U(a)+"</p></div>")};_.Bj=function(a,b,c){return(0,_.S)('<button role="button" aria-label="'+_.W(a)+'" class="fc-button  '+_.W(b)+'" tabindex="0"'+(c?" disabled":"")+'><div class="fc-button-background"></div><p class="fc-button-text">'+_.U(a)+"</p></button>")};_.Cj=function(a,b,c,d,e,f,g,h){f="overflow-wrap: break-word;"+(f?"":(null==b?0:_.Ih(b,4))?h?"font-weight: 500;":"font-weight: 700;":"font-weight: normal;")+((null==b?0:_.Ih(b,5))?"font-style: italic;":"font-style: normal;")+(g?"":(null==b?0:_.Ih(b,6))?"text-decoration: underline;":"text-decoration: initial;");if(!e)switch(null==b?void 0:_.Kh(b,7)){case 2:f+="text-align: center;";break;case 3:f+="text-align: right;";break;case 4:f+="text-align: justify;";break;default:f+="text-align: left;"}a=a?"font-family: '"+
String(a).replace(sj,qj)+"';":(null==b?0:_.R(b,1))&&""!==_.R(b,1)?"font-family: '"+String(_.R(b,1)).replace(sj,qj)+"';":"";f+=a+(!c&&(null==b?0:_.R(b,3))?"color: "+_.X(_.R(b,3))+";":"");if(!d){var k;switch(null==b?void 0:null==(k=_.D(b,_.Rh,2))?void 0:_.Kh(k,2)){case 1:var l,n;f+="font-size: "+_.X(null==(null==(l=_.D(b,_.Rh,2))?void 0:Jh(l))?1:null!=(n=Jh(_.D(b,_.Rh,2)))?n:0)+"em;";break;default:f+="font-size: 1em;"}}return(0,_.V)(f)};
_.Dj=function(a,b,c,d,e){var f,g,h;b=(!c&&(null==a?0:_.R(a,1))?"background: "+_.X(_.R(a,1))+";":"background: #fff;")+(b?"":"border: none;")+(!e&&null!=(null==a?void 0:null==(f=_.D(a,_.Rh,4))?void 0:Jh(f))&&0<(null!=(h=null==a?void 0:Jh(_.D(a,_.Rh,4)))?h:null)&&null!=(null==a?void 0:null==(g=_.D(a,_.Rh,4))?void 0:_.Kh(g,2))&&2===(null==a?void 0:_.Kh(_.D(a,_.Rh,4),2))&&null!=(null==a?void 0:_.R(a,2))?"border: "+_.X(Jh(_.D(a,_.Rh,4)))+"px solid  "+_.X(_.R(a,2))+";":"");if(!d){var k;switch(null==a?void 0:
null==(k=_.D(a,_.Rh,3))?void 0:_.Kh(k,2)){case 1:var l,n;b+="border-radius: "+_.X(null!=(n=(null==a?void 0:null==(l=_.D(a,_.Rh,3))?void 0:Jh(l))+"em")?n:"0")+";";break;case 2:var q,x;b+="border-radius: "+_.X(null!=(x=(null==a?void 0:null==(q=_.D(a,_.Rh,3))?void 0:Jh(q))+"px")?x:"0")+";";break;default:b+="border-radius: 0;"}}return(0,_.V)(b)};
_.Ej=function(a){var b="",c;switch(null==a?void 0:null==(c=_.D(a,_.Rh,5))?void 0:_.Kh(c,2)){case 1:var d,e,f,g;b+="padding-left: "+_.X(null==(null==(d=_.D(a,_.Rh,5))?void 0:Jh(d))?0:null!=(f=Jh(_.D(a,_.Rh,5)))?f:0)+"em; padding-right: "+_.X(null==(null==(e=_.D(a,_.Rh,5))?void 0:Jh(e))?0:null!=(g=Jh(_.D(a,_.Rh,5)))?g:0)+"em;";break;default:b+="padding-left: 0; padding-right: 0;"}var h;switch(null==a?void 0:null==(h=_.D(a,_.Rh,6))?void 0:_.Kh(h,2)){case 1:var k,l,n,q;b+="padding-top: "+_.X(null==(null==
(k=_.D(a,_.Rh,6))?void 0:Jh(k))?0:null!=(n=Jh(_.D(a,_.Rh,6)))?n:0)+"em; padding-bottom: "+_.X(null==(null==(l=_.D(a,_.Rh,6))?void 0:Jh(l))?0:null!=(q=Jh(_.D(a,_.Rh,6)))?q:0)+"em;";break;default:b+="padding-top: 0; padding-bottom: 0;"}return(0,_.V)(b)};_.Fj=function(a){var b="display: flex; flex-direction: row;";switch(null==a?void 0:_.Kh(a,1)){case 1:b+="justify-content: flex-start;";break;case 3:b+="justify-content: flex-end;";break;default:b+="justify-content: center;"}return(0,_.V)(b)};var Kj,Xj;
_.Gj=function(a){a=void 0===a?"fc-message-root":a;return(0,_.V)("."+_.X(a)+"  .fc-close-background {background-color: "+_.X("#fff")+"; cursor: pointer; height: 8px; left: 50%; position: absolute; radius: 50%; -webkit-transform: translate(-50%,-50%); -ms-transform: translate(-50%,-50%); transform: translate(-50%,-50%); top: 50%; width: 8px;}."+_.X(a)+" .fc-close-icon {border-radius: 50%; box-sizing: border-box; color: "+_.X("#5f6368")+"; cursor: pointer; display: inline-block; font-family: 'Material Icons'; font-size: 20px; height: 40px; line-height: 40px; position: relative; text-align: center; vertical-align: middle; width: 40px;}."+_.X(a)+
" .fc-close {box-sizing: border-box; color: white; cursor: pointer; direction: ltr; display: inline-block; font-size: 1em; height: 40px; margin: 0; opacity: 1; outline: none; text-align: center; text-indent: 0; width: 40px; z-index: 1; top: 0; right: 0; position: absolute;}."+_.X(a)+" .fc-close:focus {outline: none;}."+_.X(a)+" .fc-close:hover .fc-close-icon {color: "+_.X("#202124")+"; background-color:  rgba(32, 33, 36, 0.04);}."+_.X(a)+" .fc-close:focus .fc-close-icon {color: "+_.X("#202124")+"; background-color:  rgba(32, 33, 36, 0.12); outline: 1px solid "+
_.X("#3c4043")+";}")};
_.Ij=function(a,b){a=void 0===a?"fc-message-root":a;return(0,_.V)("."+_.X(a)+" a, ."+_.X(a)+" a p {cursor: pointer;}."+_.X(a)+" button, ."+_.X(a)+" button div, ."+_.X(a)+" button p, ."+_.X(a)+" .fc-button, ."+_.X(a)+" .fc-button div, ."+_.X(a)+" .fc-button p {cursor: pointer;}."+_.X(a)+" a:hover {"+_.Hj("80%")+"}."+_.X(a)+" button:focus p:not(.fc-button-text), ."+_.X(a)+" .fc-button:focus .fc-button-label {outline: auto;}."+_.X(a)+" button:focus:not(:focus-visible) p ."+_.X(a)+" .fc-button:focus:not(:focus-visible) .fc-button-label {outline: none;}"+
(null!=b?_.X(b)+" {outline: 1px solid transparent;}":""))};_.Hj=function(a){return(0,_.V)("filter: brightness("+_.X(a)+");")};_.Jj=function(){return(0,_.V)('-moz-font-feature-settings: "kern" 1; -moz-osx-font-smoothing: grayscale; -webkit-font-feature-settings: "kern" 1; -webkit-font-smoothing: antialiased; font-feature-settings: "kern" 1; font-kerning: normal; text-rendering: optimizelegibility;')};
_.Lj=function(a,b){a=void 0===a?"fc-message-root":a;b=void 0===b?Kj:b;for(var c="div."+_.X(a)+","+(0<=_.mj(b,"a")?" ."+_.X(a)+" a:link, ":""),d=b.length,e=0;e<d;e++){var f=b[e];c+="."+_.X(a)+" "+_.X(f)+(e!==b.length-1?",":"")}return(0,_.V)(c+"{-webkit-app-region: none; -webkit-appearance: none; -webkit-border-horizontal-spacing: 0; -webkit-border-image: none; -webkit-border-vertical-spacing: 0; -webkit-box-align: stretch; -webkit-box-decoration-break: slice; -webkit-box-direction: normal; -webkit-box-flex: 0; -webkit-box-ordinal-group: 1; -webkit-box-orient: horizontal; -webkit-box-pack: start; -webkit-box-reflect: none; -webkit-font-smoothing: auto; -webkit-highlight: none; -webkit-hyphenate-character: auto; -webkit-line-break: auto; -webkit-line-clamp: none; -webkit-locale: auto; -webkit-margin-after-collapse: collapse; -webkit-margin-before-collapse: collapse; -webkit-mask-box-image-outset: 0; -webkit-mask-box-image-repeat: stretch; -webkit-mask-box-image-slice: 0 fill; -webkit-mask-box-image-source: none; -webkit-mask-box-image-width: auto; -webkit-mask-box-image: none; -webkit-mask-clip: border-box; -webkit-mask-composite: source-over; -webkit-mask-image: none; -webkit-mask-origin: border-box; -webkit-mask-position: 0% 0%; -webkit-mask-repeat: repeat; -webkit-mask-size: auto; -webkit-print-color-adjust: economy; -webkit-rtl-ordering: logical; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.4); -webkit-text-combine: none; -webkit-text-decorations-in-effect: none; -webkit-text-emphasis-color: rgb(0, 0, 0); -webkit-text-emphasis-position: over right; -webkit-text-emphasis-style: none; -webkit-text-orientation: vertical-right; -webkit-text-security: none; -webkit-text-stroke-color: rgb(0, 0, 0); -webkit-text-stroke-width: 0; -webkit-user-drag: auto; -webkit-writing-mode: horizontal-tb; align-content: normal; align-items: normal; align-self: auto; alignment-baseline: auto; animation-delay: 0s; animation-direction: normal; animation-duration: 0s; animation-fill-mode: none; animation-iteration-count: 1; animation-name: none; animation-play-state: running; animation-timing-function: ease; backdrop-filter: none; backface-visibility: visible; background-attachment: scroll; background-blend-mode: normal; background-clip: border-box; background-color: rgba(0, 0, 0, 0); background-image: none; background-origin: padding-box; background-position: 0% 0%; background-repeat: repeat; background-size: auto; baseline-shift: 0; border-bottom-color: rgb(0, 0, 0); border-bottom-left-radius: 0; border-bottom-right-radius: 0; border-bottom-style: none; border-bottom-width: 0; border-collapse: separate; border-image-outset: 0; border-image-repeat: stretch; border-image-slice: 100%; border-image-source: none; border-image-width: 1; border-left-color: rgb(0, 0, 0); border-left-style: none; border-left-width: 0; border-right-color: rgb(0, 0, 0); border-right-style: none; border-right-width: 0; border-top-color: rgb(0, 0, 0); border-top-left-radius: 0; border-top-right-radius: 0; border-top-style: none; border-top-width: 0; bottom: auto; box-shadow: none; box-sizing: content-box; break-after: auto; break-before: auto; break-inside: auto; buffered-rendering: auto; caption-side: top; caret-color: rgb(0, 0, 0); clear: none; clip-path: none; clip-rule: nonzero; clip: auto; color-interpolation-filters: linearrgb; color-interpolation: srgb; color-rendering: auto; color: rgb(0, 0, 0); column-count: auto; column-gap: normal; column-rule-color: rgb(0, 0, 0); column-rule-style: none; column-rule-width: 0; column-span: none; column-width: auto; content: normal; cursor: auto; cx: 0; cy: 0; d: none; display: inline; dominant-baseline: auto; empty-cells: show; fill-opacity: 1; fill-rule: nonzero; fill: rgb(0; 0; 0); filter: none; flex-basis: auto; flex-direction: row; flex-grow: 0; flex-shrink: 1; flex-wrap: nowrap; float: none; flood-color: rgb(0, 0, 0); flood-opacity: 1; font-kerning: auto; font-optical-sizing: auto; font-size: 16px; font-stretch: 100%; font-style: normal; font-variant-caps: normal; font-variant-east-asian: normal; font-variant-ligatures: normal; font-variant-numeric: normal; font-variant: normal; font-weight: 400; grid-auto-columns: auto; grid-auto-flow: row; grid-auto-rows: auto; grid-column-end: auto; grid-column-start: auto; grid-row-end: auto; grid-row-start: auto; grid-template-areas: none; grid-template-columns: none; grid-template-rows: none; height: auto; hyphens: manual; image-rendering: auto; isolation: auto; justify-content: normal; justify-items: normal; justify-self: auto; left: auto; letter-spacing: normal; lighting-color: rgb(255, 255, 255); line-break: auto; line-height: normal; list-style-image: none; list-style-position: outside; list-style-type: disc; margin-bottom: 0; margin-left: 0; margin-right: 0; margin-top: 0; marker-end: none; marker-mid: none; marker-start: none; mask-type: luminance; mask: none; max-height: none; max-width: none; min-height: 0; min-width: 0; mix-blend-mode: normal; object-fit: fill; object-position: 50% 50%; offset-distance: 0; offset-path: none; offset-rotate: auto 0deg; opacity: 1; order: 0; orphans: 2; outline-color: rgb(0, 0, 0); outline-offset: 0; outline-style: none; outline-width: 0; overflow-anchor: auto; overflow-wrap: normal; overflow-x: visible; overflow-y: visible; padding-bottom: 0; padding-left: 0; padding-right: 0; padding-top: 0; paint-order: normal; perspective-origin: 0 0; perspective: none; pointer-events: auto; position: static; r: 0; resize: none; right: auto; row-gap: normal; rx: auto; ry: auto; scroll-behavior: auto; shape-image-threshold: 0; shape-margin: 0; shape-outside: none; shape-rendering: auto; speak: normal; stop-color: rgb(0, 0, 0); stop-opacity: 1; stroke-dasharray: none; stroke-dashoffset: 0; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 1; stroke-width: 1px; stroke: none; tab-size: 8; table-layout: auto; text-align-last: auto; text-align: start; text-anchor: start; text-decoration-color: rgb(0, 0, 0); text-decoration-line: none; text-decoration-skip-ink: auto; text-decoration-style: solid; text-decoration: none solid rgb(0, 0, 0); text-indent: 0; text-overflow: clip; text-rendering: auto; text-shadow: none; text-size-adjust: auto; text-transform: none; text-underline-position: auto; top: auto; touch-action: auto; transform-origin: 0 0; transform-style: flat; transform: none; transition-delay: 0s; transition-duration: 0s; transition-property: all; transition-timing-function: ease; unicode-bidi: normal; user-select: auto; vector-effect: none; vertical-align: baseline; visibility: visible; white-space: normal; widows: 2; width: auto; will-change: auto; word-break: normal; word-spacing: 0; writing-mode: horizontal-tb; x: 0; y: 0; z-index: auto; zoom: 1;}")};
_.Mj=function(a){var b="";a=void 0===a?"zz":a;switch(_.Nd(a)?a.toString():a){case "ar":case "iw":case "fa":case "ur":case "ps":case "sd":b+="direction: rtl;";break;default:b+="direction: ltr;"}return(0,_.V)(b)};_.Nj=function(a,b,c){return(0,_.V)(_.X(a)+" {"+(b?"display: none;":"")+"background-color: black; height: 100%; left: 0; opacity: "+_.X(null!=c?c:"0.3")+"; position: fixed; top: 0; width: 100%; z-index: -1;}")};
_.Oj=function(a,b,c){b="div."+_.X(void 0===b?"fc-message-root":b)+" {";var d=3!==c;b+=(a?"":"position: "+_.X(d?"fixed":"relative")+"; z-index: 2147483644;")+(a||1!==c?"":"align-items: center; float: top; height: 100%; left: 0; overflow-x: auto; top: 0;")+(d?"align-items: center; display: flex; justify-content: center; width: 100%;":"")+"}";return(0,_.V)(b)};_.Pj=function(a){return(0,_.V)("div."+_.X(void 0===a?"fc-message-root":a)+" {display: flex; height: 100%; justify-content: center; width: 100%;}")};
_.Qj=function(a,b,c){c=1===c?"align-items: center; display: flex; height: 100%; justify-content: center; width: 100%;"+(b?"":"left: 0; position: fixed; top: 0;"):2===c?"bottom: 0; left: 0; right: 0;"+(b?"position: absolute;":"position: fixed;"):"";return(0,_.V)(_.X(a)+" {"+(b?"":"z-index: 2147483644;")+c+"}")};
_.Sj=function(a,b,c,d,e,f){var g=_.X(a)+" {align-items: center;",h,k,l=null!=(k=_.Rj.get(null!=(h=null==d?void 0:_.I(d,5))?h:2))?k:"";g+=2===c?"border-radius: "+_.X(l)+" "+_.X(l)+" 0 0; width: 100%;":"border-radius: "+_.X(l)+"; max-width: 600px; width: 90%;";d?(g+="background: "+_.X(null==d?void 0:_.P(d,2))+";",c=f?"40px":"32px",g+=b?"padding: "+_.X(c)+" 0 24px 0;":"padding: "+_.X(c)+" 24px 24px 24px;"):g=e?g+(_.Dj(e)+_.Ej(e)):g+"background: WHITE;";var n;c="box-sizing: border-box; display: flex; flex-direction: column; float: top; justify-content: center; max-height: 90%; min-width: 200px; position: relative;}@media screen and (max-width: 479px) {"+
_.X(a)+" {font-size: 14px; line-height: 20px;}}@media screen and (min-width: 480px) {"+_.X(a)+" {font-size: 16px; line-height: 24px;}}"+_.X(a)+" > *:not(:last-child) {margin-bottom: 24px;}";e=(0,_.V)(_.X(a)+" .fc-dialog-content {align-items: center; box-sizing: border-box; display: flex; flex-direction: column; overflow: auto; width: 100%;"+(b?"box-shadow: 0 25px 0 -24px "+_.X("#dadce0")+"; overflow-x: hidden; overflow-y: scroll; overflow-y: overlay; padding: 0 24px 0 24px;":"")+"}"+_.X(a)+" .fc-dialog-content > *:not(:last-child) {margin-bottom: 16px;}"+
_.X(a)+" .fc-dialog-content > * {flex-shrink: 0;}");c+=e;d=null!=(n=null==d?void 0:_.P(d,4))?n:null;a=(0,_.V)(_.X(a)+" .fc-dialog-footer {align-items: center; box-sizing: border-box; display: flex; flex-direction: column; font-size: inherit; min-height: auto; justify-content: center;"+(b?"padding: 0 24px;":"")+"width: 100%;"+(d?"font-family: "+_.X(d)+";":"")+"}"+_.X(a)+" .fc-dialog-footer .fc-footer-text {color: "+_.X("#5f6368")+"; display: inline-block; font-size: 12px;}"+_.X(a)+" .fc-dialog-footer > div:not(:last-child) {margin-bottom: 16px;}");
return(0,_.V)(g+(c+a))};
_.Tj=function(a,b,c,d,e){b=void 0===b?"fc-message-root":b;var f;c?f=_.Cj(_.P(c,3),_.D(c,_.Th,6),void 0,void 0,void 0,void 0,void 0,!0):d?f=_.Cj(void 0,d):f="color: "+_.X("#6b6e76")+"; font-family: Poppins, sans-serif; font-size: 1em; font-weight: 400; line-height: 24px; text-align: center;";return(0,_.V)("."+_.X(b)+" .fc-header {display: flex; flex-direction: column; justify-content: center; width: 100%;}."+_.X(b)+" .fc-header-text {line-height: 1.5em;"+f+"}."+_.X(b)+" .fc-header-image-container {"+_.Fj(e)+
(e?"":"margin: 0 auto; -ms-flex-align: center")+"}."+_.X(b)+" .fc-header-image {max-height: 60px; min-height: 40px; object-fit: contain;}"+(a?"."+_.X(b)+" .fc-header-placeholder-image {border: 1px solid "+_.X("#dadce0")+"; border-radius: 4px; padding: 8px;}":""))};
_.Uj=function(a,b,c){a=void 0===a?"fc-message-root":a;var d;b?d=_.Cj(_.P(b,3),_.D(b,_.Th,7),void 0,void 0,void 0,void 0,void 0,!0):c?d=_.Cj(void 0,c):d="color: "+_.X("#202124")+"; font-family: Poppins, sans-serif; font-size: 1.25em; font-weight: 500; line-height: 1.8em; text-align: center;";return(0,_.V)("."+_.X(a)+" .fc-dialog-headline {align-items: center; display: flex; flex-direction: column; justify-content: center; width: 100%;}."+_.X(a)+" .fc-dialog-headline > *:not(:last-child) {margin-bottom: 8px;}."+
_.X(a)+" .fc-dialog-headline-text {"+d+"width: 100%;}")};
_.Vj=function(a,b,c){a=void 0===a?"fc-message-root":a;var d;b?d="max-width: 400px;"+_.Cj(_.P(b,4),_.ji(b),void 0,void 0,void 0,void 0,void 0,!0):c?d=_.Cj(void 0,c):d="color: "+_.X("#6b6e76")+"; font-family: Roboto, sans-serif; font-size: 1em; text-align: center;";return(0,_.V)("."+_.X(a)+" .fc-dialog-body {display: flex; justify-content: center; width: 100%;}."+_.X(a)+" .fc-dialog-body-text {line-height: 1.5em; margin: 0; padding: 0; width: 100%;"+d+"}")};
_.Wj=function(a){a=void 0===a?"fc-message-root":a;return(0,_.V)("."+_.X(a)+" .fc-buttons-section {align-items: center; display: flex; flex-direction: column; justify-content: center; max-width: 416px; width: 100%;}."+_.X(a)+" .fc-buttons-section > *:not(:last-child) {margin-bottom: 16px;}@supports (flex-wrap: wrap) and (gap: 16px) {."+_.X(a)+" .fc-buttons-section {flex-direction: unset; flex-wrap: wrap; -ms-flex-wrap: wrap; gap: 16px;}."+_.X(a)+" .fc-buttons-section > *:not(:last-child) {margin-bottom: 0;}}")};
_.Yj=function(a,b,c,d){a=void 0===a?"fc-message-root":a;if(b){var e,f,g;var h="border-radius: "+_.X(null!=(f=Xj.get(null==b?void 0:_.I(b,5)))?f:"")+"; color: "+_.X(null!=(g=null==(e=_.hi(_.D(b,_.gi,11)))?void 0:_.R(e,3))?g:"")+"; padding: 8px 12px; min-height: 40px; justify-self: center; max-width: 400px; min-width: 200px;"}else if(c)h=_.Ej(c)+_.Dj(c,void 0,!0)+"overflow: hidden;";else{var k;h="border-radius: "+_.X(null!=(k=Xj.get(2))?k:"")+"; padding: 8px 12px; max-width: 352px;"}if(b){var l;c="background-color: "+
_.X(null==b?void 0:_.P(b,1))+"; border-radius: "+_.X(null!=(l=Xj.get(null==b?void 0:_.I(b,5)))?l:"")+";"}else if(c)c=_.Dj(c,void 0,void 0,!0,!0);else{var n;c="background-color: BLUE_900; border-radius: "+_.X(null!=(n=Xj.get(2))?n:"")+";"}var q;b?q=_.Cj(_.P(b,3),_.hi(_.D(b,_.gi,11)),void 0,void 0,void 0,void 0,void 0,!0):d?q=_.Cj(void 0,d):q="color: white; font-family: Poppins, sans-serif; font-size: 14px; font-weight: 500; text-align: center;";var x,y,z,G,N,T,ma;return(0,_.V)("."+_.X(a)+" .fc-button {"+
h+"box-sizing: border-box; align-items: center; display: inline-flex; justify-content: center; position: relative; width: 100%; z-index: 1;}."+_.X(a)+" .fc-button:not(:only-child) {"+(b?"flex-grow: 1;":"")+"}@supports (flex-wrap: wrap) and (gap: 16px) {@media screen and (min-width: 480px) {"+(b?"."+_.X(a)+" .fc-button {width: fit-content;}":"")+"}}."+_.X(a)+" .fc-button .fc-button-background {"+c+"height: 100%; left: 0; position: absolute; top: 0; transition: all 150ms ease-in; width: 100%; z-index: -1; -webkit-transition: all 150ms ease-in; -moz-transition: all 150ms ease-;
		};
		this.fpcookie_secondary_needs_reset = function() {
			return (this.gdprforgetts>0 && this.fpdata_secondary!='' && this.fpdata_secondary[0]!='-' && this.get_fpdata_ts(this.fpdata_secondary)<this.gdprforgetts);
		};
		this.setfpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
			if (this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.init_fpcookie = function() {
			gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, this.fpdata_sec_state, this.fpcookie_secondary_needs_reset());
		};
		this.reset_fpcookie_secondary_if_needed = function() {
			if (this.fpcookie_secondary_needs_reset()) {
				gemius_cookie.set(this.fpcookie_name, this.fpdata, this.cookie_expire, this.fpcdomain, 'sec', true);
			}
		};
		this.fpdata_loaded = function() {
			if (this.timeouts.sto!=null) {
				if (this.timeouts.sto.to!=null) {
					clearTimeout(this.timeouts.sto.to);
				}
				this.timeouts.sto = null;
			}
			var fpcookie = gemius_cookie.get_on_state(this.fpcookie_name, this.fpdata_sec_state);
			if (fpcookie.sec_state == 'unknown') {
				this.init_fpcookie();
			}
			this.getfpcookie();
			this.waiting_for_fpdata = 0;
			this.tfp_send_fixes(false);
			this.paramsready();
			this.latehits();
		};
		this.addframe = function(ssl,file,args,rcvfn) {
			if (document.body) {
				this.current_receiver = rcvfn;
				var url = 'http'+(ssl?'s':'')+'://ls.hit.gemius.pl/ls'+file+'.html'+args;
				if (rcvfn!=null) {
					this.loadinit = (new Date()).getTime();
					if (this.timeouts.fto==null) {
						this.timeouts.fto = this.set_timeout(this.bind(this.frameto),10000);
					}
				}
				var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
				var f = document.createElement('iframe');
				f.setAttribute('id',rndid);
				f.setAttribute('name','ls'+file+'frame');
				f.setAttribute('width',0);
				f.setAttribute('height',0);
				f.setAttribute('scrolling','no');
				f.style.display="none";
				f.style.visibility="hidden";
				document.body.appendChild(f);
				f.setAttribute('src',url);
				if (file=="get" && ssl==0) {
					this.lsgetframe = f;
				}
			} else {
				setTimeout(this.bind(this.addframe,ssl,file,args,rcvfn), 100);
			}
		};
		this.frameto = function() {
			if (this.timeouts.fto!=null) {
				this.timeouts.fto = null;
				if (this.lsdata=='') {
					this.ltime = 10000;
					this.lsdata = document.prerendering?'-PRERENDER':'-TIMEDOUT';
					this.waiting_for_lsdata = 0;
					this.paramsready();
					this.latehits();
				}
			}
		};
		this.scriptto = function() {
			if (this.timeouts.sto!=null) {
				this.timeouts.sto = null;
				if (this.fpdata!='' && this.fpdata[0]!='-') {
					this.init_fpcookie();
					this.getfpcookie();
				}
				if (this.fpdata=='') {
					this.fpdata = '-TIMEDOUT';
				}
				this.waiting_for_fpdata = 0;
				this.paramsready();
				this.latehits();
			}
		};
		this.last_datareceiver = function(lsdata) {
			this.current_receiver = null;
			this.lsdata = lsdata;
			this.waiting_for_lsdata = 0;
			this.paramsready();
			this.latehits();
		};
		this.second_datareceiver = function(data) {
			if (data.charAt(0)=='-' || data=='') {
				this.addframe(1,'set','',this.last_datareceiver);
			} else {
				this.last_datareceiver(data);
			}
		};
		this.first_datareceiver = function(data) {
			var m = data.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
			var n = (new Date()).getTime();
			if (data.charAt(0)=='-' || data=='' || !m || m[2]<n) {
				this.addframe(1,'get','',this.second_datareceiver);
			} else {
				if (m) {
					data = m[1];
				}
				this.last_datareceiver(data);
			}
		};
		this.msgreceiver = function(e) {
			try {
				var is_event = function(prefix) {
					return typeof e.data == "string" && e.data.substring(0, prefix.length) == prefix;
				}
				if (window.top === window.self && is_event("_xx_gemius_getref_xx_")) {
					var origin = window.location.origin;
					if (origin) {
						e.source.postMessage("_xx_gemius_putref_xx_/" + origin, e.origin);
					}
				}
				if (e.source === window.top) {
					if (is_event("_xx_gemius_putref_xx_/")) {
						this.set_tfp_origin(e.data.substr(22));
						this.latehits();
					}
					if (is_event("_xx_gemius_puttfpdata_xx_")) {
						var arr = e.data.substr(26).split("/");
						var tfpdata = arr[0];
						if (!this.is_gde || (tfpdata.length > 0 && tfpdata[0] != '-')) {
							this.tfp.fpdata = tfpdata;
							this.latehits();
						}
					}
				}
				if (window.top === window.self) {
					if (is_event("_xx_gemius_getfpdata_xx_")) {
						var origin = new String(document.location.origin);
						var sent = false;
						var clbk = function(fpdata) {
							if (this.has_consent && !sent) {
								e.source.postMessage("_xx_gemius_putfpdata_xx_/" + fpdata + '/' + encodeURIComponent(origin), e.origin);
								sent = true;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),null);
					}
					if (is_event("_xx_gemius_gettfpdata_xx_/")) {
						var arr = e.data.substr(26).split("/");
						var sent_tfpdata = '';
						var clbk = function(fpdata) {
							var tfpdata = (this.has_consent?fpdata:'-NOCONSENT');
							if (tfpdata != sent_tfpdata) {
								e.source.postMessage("_xx_gemius_puttfpdata_xx_/" + tfpdata, e.origin);
								sent_tfpdata = tfpdata;
							}
						};
						this.add_fpdata_callback(this.bind(clbk),arr[0]);
					}
				}
				if (!this.init_called) {
					return;
				}
				if (is_event("_xx_gemius_xx_/")) {
					if (this.timeouts.fto!=null) {
						if (this.timeouts.fto.to!=null) {
							clearTimeout(this.timeouts.fto.to);
						}
						this.timeouts.fto = null;
						this.ltime = (new Date()).getTime() - this.loadinit;
					}
					if (this.current_receiver!=null) {
						this.current_receiver(e.data.substr(15));
					}
				}
				if (this.use_globals) {
					if (is_event("_xx_gemius_add_xx_/")) {
						if (this.addto!=null) {
							clearTimeout(this.addto);
							this.addto = null;
						}
						var lsadd = e.data.substr(19);
						this.sendhits((lsadd=="-GETERR")?null:lsadd);
					}
					if (is_event("_xx_gemius_set_fpcap_xx_")) {
						var fpcap = e.data.substr(25).split("/");
						this.setfpcap(fpcap[0], fpcap[1], fpcap[2]);
					}
				}
			} catch (e) {}
		};
		this.getflashv = function() {
			var fv='-';
			if (typeof Error!='undefined') {
				var fo;
				try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {}
				if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }}
			}
			return fv;
		};
		this.gdpr_params = function(first) {
			var url = '';
			if (this.gdpr_applies != null) url+="&gdpr=" + (this.gdpr_applies?"1":"0");
			if (this.gdpr_consent != null) {
				url+="&gdpr_consent=" + ((typeof this.gdpr_consent == "string")?this.gdpr_consent:'');
			}
			if (first && url != '') url='?' + url.substring(1);
			return url;
		};
		this.cmp_purposes = function() {
			var purposes = {1:[1,5],2:[1,7,8,9,10]};
			try {
// cmp_utils.js 
                var combine_cmp_purposes = function(purposes, cmp_purposes_overrides, add_dmp_purposes) {
					var purposes_v1_to_v2_translation = {1:[1],2:[3,5],3:[2,4,7],4:[6,8],5:[7,8,9]};
					var dmp_purposes = {1:[1,2,3,5],2:[1,2,3,4,5,7,8,9,10]};
					if (typeof cmp_purposes_overrides != 'undefined' && cmp_purposes_overrides != null) {
						if (cmp_purposes_overrides.constructor === Array) {
							purposes[1] = cmp_purposes_overrides;
							purposes[2] = [10];
							for (var i=0; i < purposes[1].length; i++) {
								v2_purposes = purposes_v1_to_v2_translation[purposes[1][i]];
								if (typeof v2_purposes != 'undefined') {
									purposes[2] = purposes[2].concat(v2_purposes);
								}
							}
						} else {
							for (version in cmp_purposes_overrides) {
								purposes[version] = cmp_purposes_overrides[version];
							}
						}
					}
					if (add_dmp_purposes) {
						for (version in dmp_purposes) {
							purposes[version] = purposes[version].concat(dmp_purposes[version]);
						}
					}
				}

				combine_cmp_purposes(purposes, this.cmp_purposes_overrides, this.dmp_purpose);
			} catch (e) {}
			return purposes;
		};
		this.parameters = function(href) {
			var d=document;
			var w=window;
			var href=new String(href || d.location.href);
			var dd;
			var url='&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(this.flashv)+'&href='+encodeURIComponent(href.substring(0,499));
				if (typeof w.gemiusNetpanelID=='string') {
					url+='&npid='+encodeURIComponent(w.gemiusNetpanelID);
				}
			}
			if (this.mtp_enabled && (typeof navigator.maxTouchPoints=='number')) {
				url+='&mtp='+navigator.maxTouchPoints;
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			if (this.cmp_found) {
				url+='&cmpf=1';
			}
			if (this.gdpr_found) {
				url+='&gdprf=1';
			}
			return url;
		};
		this.fpcap_params = function(consent) {
			if (consent && this.fpdata.length>0 && this.fpdata[0]!='-' && this.fpdata_sec_state!='unknown') {
				var fpcap = this.fpcap[this.fpdata_sec_state];
				return '&fpcap=' + ((fpcap.length>0 && fpcap[0]!='-')?fpcap:'') + ((this.fpdata_sec_state=='sec')?'&fpsec=1':'');
			}
			return '';
		};
		this.frametype_init = function() {
			var ref = this.ref;
			var d=document;
			if (typeof Error!='undefined') {
				try { ref.frametype=(d==top.document)?1:2; var r = top.document.referrer; } catch(e) {ref.frametype=3;}
			}
		};
		this.ref_update = function() {
			var ref = this.ref;
			var d=document;
			if (d.referrer) { ref.ref=new String(d.referrer); } else { ref.ref=''; }
			if (typeof Error!='undefined') {
				try { if (typeof top.document.referrer=="string") { ref.ref=top.document.referrer; } } catch(e) {}
			}
			try { if (ref.ref=='' && typeof ia_document != "undefined" && ia_document.referrer) ref.ref="https://" + (new String(ia_document.referrer));} catch(e) {}
		};
		this.ref_params_obj = function() {
			var ref = this.ref;
			if (ref.frametype != 3) {
				this.ref_update();
			}
			var params = {"fr":ref.frametype};
			if (ref.topref) {
				params["tr"] = ref.topref;
			}
			if (typeof encodeURIComponent != 'undefined') {
				params["ref"] = encodeURIComponent(_get_referrer().substring(0,499));
			}
			return params;
		};
		this.ref_params = function() {
			var params = this.ref_params_obj();
			var url = '';
			for (var key in params) {
				url += '&' + key + '=' + params[key];
			}
			return url;
		};
		this.inner_params = function() {
			if (typeof encodeURIComponent != 'undefined') {
				var inner = '_ver=' + this.version;
				if (this.tfne) {
					inner += '|_tfne=' + this.tfne;
				}
				if (GemiusHitcolConnector.min) {
					inner += '|_min=1';
				}
				if (this.hidecnt > 0) {
					inner += '|_hdcnt=' + this.hidecnt;
				}
				if (this.inner.length > 0) {
					inner += '|' + this.array_to_string(this.inner, 0);
				}
				return '&inner='+encodeURIComponent(inner.substring(0,1999));
			}
			return '';
		};
		this.array_to_string = function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		};
		this.internal_hit = function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra,refs,href) {
			var req = "";
			if (this.event_identifier==null && id) {
				this.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+((et=='bfview')?'view':et);
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			var not_gstream = (id && typeof id.indexOf == 'function' && id.indexOf('&sargencoding=') < 0);
			if (sonar && et == 'view' && not_gstream) {
				this.sonar_auto_init = 0;
				req += '&initsonar=1';
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+this.parameters(href);
			refs = refs || this.ref_params();
			var robj = {req:req,id:id,allowaddscript:allowaddscript,vers:vers,explicit:this.explicit_consent,refs:refs};
			if (this.onpagehide && !this.bfview_disabled && (et == 'view' || et == 0) && not_gstream) {
				this.bfview_waiting = {vers: vers, id: id, evid: evid, hsrc: hsrc, extra: extra};
			}
			var requests = this.requests;
			if (this.has_consent === true) {
				requests.consent[requests.consent.length] = robj;
			} else if (this.has_consent === false) {
				requests.no_consent[requests.no_consent.length] = robj;
			} else {
				requests.unknown[requests.unknown.length] = robj;
			}
			this.latehits();
		};
		this.timer = function() {
			var i;
			var data = this.timer_data;
			data["lasttime"] = ((new Date()).getTime());
			for (i=0 ; i<this.timerevents.length ; i++) {
				this.internal_hit(0,103,this.timerevents[i],0,"sonar");
			}
			if (data["to"] != null) {
				clearTimeout(data["to"]);
				data["to"] = null;
			}
			if (data["tint"] == null) {
				data["tint"] = setInterval(this.bind(this.timer),60*1000);
			}
		};
		this.gtimer_add = function(id) {
			this.internal_hit(0,103,id,0,"sonar");
			this.timerevents[this.timerevents.length] = id;
		};
		this.sonar_add = function(identifier,evid,freq,extra) {
			if (this.sonar_data==null) {
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["sint"]=null;
				data["lasttime"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					data["sint"]=setInterval(this.bind(this.sonar), 1000);
				}
				this.sonar_data = data;
			}
		};
		this.sonar = function() {
			if (this.sonar_data!=null) {
				var data, prob, lvstate;
				lvstate=(this.visapi_s?document[this.visapi_s]:"");
				data=this.sonar_data;
				prob=(((new Date()).getTime()) - data["lasttime"])/1000;
				data["lasttime"]=((new Date()).getTime());
				while (prob>0) {
					if (data["sdur"]<24*3600 && prob<=4 && lvstate=="visible" && Math.random() < prob/data["freq"]) {
						this.internal_hit(0,109,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
					}
					data["sdur"] += Math.min(prob,data["freq"]);
					prob -= data["freq"];
				}
			}
		};
		this.gdprdata_loaded = function() {
			try {
				if (this.gdprdisabled) {
					this.consent_loaded(true,false);
					return;
				}
				var purposes = this.cmp_purposes()[this.gdprversion];
				if (typeof purposes == "undefined") {
					this.consent_loaded(false,false);
					return;
				}
				for (var i=0; i<purposes.length; ++i) {
					if (!this.gdprdata[purposes[i]-1]) {
						this.consent_loaded(false,false);
						return;
					}
				}
			} catch (e) {
				this.consent_loaded(false,false);
				return;
			}
			this.consent_loaded(true,false);
		};
		this.consent_loaded = function(consent,explicit) {
			if (this.timeouts.cmpto!=null) {
				if (this.timeouts.cmpto.to!=null) {
					clearTimeout(this.timeouts.cmpto.to);
				}
				this.timeouts.cmpto = null;
			}
			if (explicit || this.explicit_consent === null) {
				this.waiting_for_consent = 0;
				this.has_consent = consent?true:false;
				if (explicit) {
					this.explicit_consent = this.has_consent;
				}
				if (this.has_consent) {
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
				this.paramsready();
				this.latehits();
			}
		};
		this.consentto = function() {
			if (this.waiting_for_consent==1) {
				this.timeouts.cmpto = null;
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.latehits();
			}
		};
		this.tfp_add_fix = function(robj) {
			if (robj.id in this.tfp.fixes) {
				return;
			}
			var is_frame = (this.ref.frametype==3);
			var fix = {
				fpdata: (this.is_gde && (this.waiting_for_fpdata==1))?1:0,
				tfpdata: (is_frame && this.tfp.fpdata=='')?1:0,
				ref: (is_frame && this.ref.topref==0)?1:0,
				refs: robj.refs
			}
			if (fix.fpdata || fix.tfpdata || fix.ref) {
				this.tfp.fixes[robj.id] = fix;
				this.tfp.need_fix = 1;
			}
		};
		this.tfp_timeout = function() {
			this.waiting_for_tfp = 0;
			this.latehits();
		};
		this.tfp_sync = function() {
			if (this.tfp.fpdata!='' && this.tfp.origin!='') {
				if (this.timeouts.tfpto!=null) {
					if (this.timeouts.tfpto.to!=null) {
						clearTimeout(this.timeouts.tfpto.to);
					}
					this.timeouts.tfpto = null;
				}
				this.tfp.need_sync = 0;
				this.waiting_for_tfp = 0;
				this.tfp_send_fixes(false);
				this.sync_gde_params();
			}
		};
		this.tfp_fix_url = function() {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			url += d + "/redot.gif?fpdata=" + this.getrawfpdata();
			url += "&lsdata=" + this.lsdata;
			url += "&tfpdata=" + this.tfp.fpdata;
			url += "&roc=1&et=9&w=fpm";
			url += '&exid=' + this.exid + '&brts=' + Math.floor(d/1000);
			if (typeof encodeURIComponent != "undefined") {
				var href = new String(document.location.href);
				url += '&href=' + encodeURIComponent(href.substring(0,499));
			}
			return url;
		};
		this.tfp_send_fixes = function(unload) {
			if (!this.tfp.need_fix || !this.has_consent) {
				return;
			}
			var url = this.tfp_fix_url();
			var tfp = this.tfp;
			var has_fpdata = (this.waiting_for_fpdata==0);
			var has_tfpdata = (tfp.fpdata!='' && tfp.fpdata[0]!='-')?1:0;
			var has_ref = (tfp.origin!='')?1:0;
			this.tfp.need_fix = 0;
			for (var id in this.tfp.fixes) {
				var fix = this.tfp.fixes[id];
				var has_new_ref_fix = fix.ref && has_ref;
				var has_new_fix = ((fix.fpdata && has_fpdata) || (fix.tfpdata && has_tfpdata) || has_new_ref_fix);
				var has_missed_fix = ((fix.fpdata && !has_fpdata) || (fix.tfpdata && !has_tfpdata) || (fix.ref && !has_ref));
				if (has_new_fix && (unload || !has_missed_fix)) {
					var id_url = url + "&id=" + id;
					id_url += has_new_ref_fix ? this.ref_params(): fix.refs;
					if (typeof navigator.sendBeacon == "function") {
						navigator.sendBeacon(id_url);
					} else {
						var images_l = this.images.length;
						this.images[images_l] = new Image();
						this.images[images_l].src = id_url;
					}
					fix.fpdata &= !has_fpdata;
					fix.tfpdata &= !has_tfpdata;
					fix.ref &= !has_ref;
					if (!has_missed_fix) {
						delete this.tfp.fixes[id];
					}
				}
				if (id in this.tfp.fixes) {
					this.tfp.need_fix = 1;
				}
			}
		};
		this.set_tfp_origin = function(origin) {
			if (this.ref.frametype == 3) {
				this.ref.ref = origin;
				this.ref.topref = 1;
			}
			this.tfp.origin = origin;
		};
		this.has_tfp_answer = function() {
			return (this.ref.topref != 0) && (this.tfp.fpdata != "");
		};
		this.tfp_init = function() {
			if (window.self !== window.top && this.ref.frametype != 2) {
				try {
					var origins = document.location.ancestorOrigins;
					if (typeof origins != 'undefined') {
						this.set_tfp_origin(origins[origins.length-1]);
					}
				} catch(e) {};
				this.timeouts.tfpto = this.set_timeout(this.bind(this.tfp_timeout), 1000);
				this.waiting_for_tfp = 1;
				this.tfp.need_sync = 1;
				this.tfp.need_fix = 1;
				this.tfp_loop();
			}
		};
		this.tfp_pageshow = function() {
			if (this.timeouts.tfplto != null) {
				this.tfp.interval = 0.5;
				this.timeouts.tfplto.time = 0.5;
			}
		};
		this.tfp_loop = function() {
			if (this.tfp.need_sync) {
				if (this.tfp.origin=='') {
					window.top.postMessage("_xx_gemius_getref_xx_","*");
				}
				if (this.tfp.fpdata=='') {
					window.top.postMessage("_xx_gemius_gettfpdata_xx_/" + this.exid ,"*");
				}
				this.timeouts.tfplto = this.set_timeout(this.bind(this.tfp_loop), this.tfp.interval * 1000);
				if (this.tfp.interval < 8) {
					this.tfp.interval *= 2;
				}
				return;
			}
			this.timeouts.tfplto = null;
		};
		this.ghit = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				this.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,this.array_to_string(args,1));
			}
		};
		this.gevent = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && this.event_identifier != null) {
					args[pos] = this.event_identifier;
				}
				if (args[pos]) {
					this.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,this.array_to_string(args,pos+1));
				}
			}
		};
		this.addscripthit = function() { this.ghit(1,106,arguments,0,2,this.sonar_auto_init); };
		this.plainhit = function() { this.ghit(0,107,arguments,0,2,this.sonar_auto_init); };
		this.addscriptevent = function() { this.gevent(1,106,arguments,0,3,this.sonar_auto_init); };
		this.plainevent = function() { this.gevent(0,107,arguments,0,3,this.sonar_auto_init); };
		if (this.use_globals) {
			this.pendingdata = function(arr,fn) {
				var i;
				if (typeof window[arr] != 'undefined') {
					for (i=0 ; i<window[arr].length ; i++) {
						fn.apply(this,window[arr][i]);
					}
					window[arr]=[];
				}
			};
			this.sendpendingdata = function() {
				this.pendingdata('pp_gemius_hit_pdata',this.addscripthit);
				this.pendingdata('gemius_hit_pdata',this.plainhit);
				this.pendingdata('pp_gemius_event_pdata',this.addscriptevent);
				this.pendingdata('gemius_event_pdata',this.plainevent);
				this.pendingdata('gemius_shits',this.addscripthit);
				this.pendingdata('gemius_phits',this.plainhit);
				this.pendingdata('gemius_sevents',this.addscriptevent);
				this.pendingdata('gemius_pevents',this.plainevent);
				this.pendingdata('gemius_cmd_pdata',gemius_cmd);
			};
		}
		this.findvisapi = function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				this.visapi_h = 'hidden';
				this.visapi_s = 'visibilityState';
				this.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						this.visapi_h = p[i]+'Hidden';
						this.visapi_s = p[i]+'VisibilityState';
						this.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		};
		this.chints_to_params = function(chints) {
// chints_params.js 
	var params = [];
	var skeys = {'architecture':'arch','platform':'pm','model':'model','platformVersion':'pver','bitness':'bits'};
	var bkeys = {'mobile':'mobile','wow64':'wow64'};
	for (var key in skeys) {
		if (key in chints) {
			var str = new String(chints[key]);
			if (str.length > 0) {
				params[params.length] = '_ch_'+skeys[key]+'='+str.substr(0,50);
			}
		}
	}
	for (var key in bkeys) {
		if (key in chints) {
			params[params.length] = '_ch_'+bkeys[key]+'='+(chints[key]?'1':'0');
		}
	}
	var brands = null;
	if (chints['fullVersionList'] instanceof Array) {
		brands = chints['fullVersionList'];
	} else if (chints['brands'] instanceof Array) {
		brands = chints['brands'];
	}
	if (brands && JSON && typeof JSON.stringify == 'function') {
		var str = JSON.stringify(brands);
		var re = new RegExp('^\\[|\\]$|"brand":|"version":', 'g');
		params[params.length] = '_ch_brands='+str.replace(re,'').substr(0,500);
	}
	return params;

		};
		this.chints_loaded = function(chints) {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			if (this.waiting_for_chints == 0) {
				return;
			}
			try {
				this.inner = this.inner.concat(this.chints_to_params(chints));
			} catch(e) {};
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.chints_failed = function() {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.findchints = function() {
			if (typeof navigator.userAgentData == 'object' && typeof navigator.userAgentData.getHighEntropyValues == 'function') {
				try {
					var hints = ["architecture","model","platform","platformVersion","bitness","mobile","wow64","brands","fullVersionList"];
					navigator.userAgentData.getHighEntropyValues(hints).then(this.bind(this.chints_loaded),this.bind(this.chints_failed));
					this.timeouts.chto = this.set_timeout(this.bind(this.chints_failed),10000);
				} catch(e) {
					this.chints_failed();
				};
			} else {
				this.chints_failed();
			}
		};
		this.load_fpdata = function() {
			if (this.waiting_for_consent==0 && this.load_fpdata_started==0) {
				this.load_fpdata_started = 1;
				var domain = new String(document.location.hostname);
				var hcdomain = "hit.gemius.pl";
				if (domain == hcdomain || domain.substr(-hcdomain.length-1) == ("."+hcdomain)) {
					this.fpdata = '';
					this.fpcdomain = '';
					this.fpdata_loaded();
				} else {
					var url = (this.hssl?'https://':'http://')+this.hc+'/fpdata.js?href='+domain;
					url += this.is_gde?'&gde=1':'';
					this.timeouts.sto = this.set_timeout(this.bind(this.scriptto),10000);
					this.append_script(url,this.bind(this.fpdata_loaded),0);
				}
			}
		};
		this.load_lsdata = function() {
			if (this.waiting_for_consent==0 && this.load_lsdata_started==0) {
				this.load_lsdata_started = 1;
				if (this.ssl) {
					this.addframe(1,'get','',this.second_datareceiver);
				} else {
					this.addframe(0,'get','',this.first_datareceiver);
				}
			}
		};
		this.getchromever = function() {
			if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
				var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
				return (ver==null)?-1:parseInt(ver[3]);
			}
			return -1;
		};
		this.getanticache = function() {
			var dt = new Date();
			var v = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),4).getTime()/(3600*1000);
			if (dt.getDay() != 0 || dt.getHours() >= 4) v += (7-dt.getDay())*24;
			return v;
		};
		this.gsconf_loaded = function() {
			if (typeof gemius_gsconf=="object" && gemius_gsconf!=null && gemius_gsconf.publishers && typeof this.src == 'string') {
				var url = new URL(this.src);
				url = url.origin + url.pathname.substr(0, url.pathname.lastIndexOf('/'));
				url += '/mgemius.js?gsver='+this.version+'&v='+this.getanticache();
				this.append_script(url,null,0);
			}
		};
		this.init_timeout = function() {
			if (this.timeouts.initto!=null) {
				this.timeouts.initto = null;
				this.init();
			}
		};
		this.gen_exid = function() {
			var refresh = !(this.exid == '');
			var ts = (new Date()).getTime();
			var exts = Math.floor(ts/1000).toString(16);
			var exrnd = Math.floor(Math.random()*1000000);
			var exuniqueid = ((ts%1000)*1000000 + exrnd).toString(16);
			this.exid = exts + Array(9-exuniqueid.length).join('0') + exuniqueid;
			if (refresh && this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.add_gde_listener = function(callback) {
			this.gde_callbacks[this.gde_callbacks.length] = callback;
			try {
				callback(this.gde_params(), this.gde_params_ready);
			} catch (e) {}
		};
		this.gde_event = function(id) {
			if (this.has_consent && !this.gde_params_ready) {
				if (typeof id == 'string') {
					this.tfp_add_fix({"id":id, "refs":this.ref_params()});
				}
			}
		};
		this.gde_params = function() {
			var params = this.ref_params_obj();
			params.gde = 1;
			if (this.has_consent) {
				params.exid = this.exid;
				if (this.tfp.fpdata != '') {
					params.tfpdata = this.tfp.fpdata;
				}
				if (this.fpdata != '') {
					params.fpdata = this.getrawfpdata();
				}
				if (this.lsdata != '') {
					params.lsdata = this.lsdata;
				}
			}
			return params;
		};
		this.sync_gde_params = function() {
			this.gde_params_ready = (this.has_consent === false) || ((this.tfp.need_sync == 0) && (this.waiting_for_fpdata == 0) && (this.waiting_for_lsdata == 0));
			var params = this.gde_params();
			for (var i=0 ; i<this.gde_callbacks.length ; i++) {
				try {
					this.gde_callbacks[i](params, this.gde_params_ready);
				} catch (e) {}
			}
		};
		this.gde_init = function(params) {
			this.init(params);
		};
		this.init = function(params) {
			if (this.timeouts.initto!=null) {
				if (this.timeouts.initto.to!=null) {
					clearTimeout(this.timeouts.initto.to);
				}
				this.timeouts.initto = null;
			}
			if (this.init_called) {
				return;
			}
			this.init_called = 1;
			if (typeof params == 'object') {
				this.init_params(params);
			} else {
				params = {};
			}
			this.timer_data["lasttime"] = ((new Date()).getTime());
			this.timer_data["tint"] = setInterval(this.bind(this.timer),60*1000);
			if (this.dnt==0 && this.explicit_consent!==false) {
				this.getfpcookie();
				this.waiting_for_fpdata = ((this.fpdata.length>0 && this.fpdata[0]=='-') || this.fpdata=='')?1:0;
			} else {
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			try {
				if (this.dnt==0 && this.explicit_consent!==false) {
					this.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
					if (this.waiting_for_lsdata==0) {
						this.lsdata='-NOTSUP';
					}
				} else {
					this.waiting_for_lsdata = 1;
					this.lsdata = "-DNT";
				}
			} catch (e) {
				this.waiting_for_lsdata = 0;
				this.lsdata='-TURNEDOFF';
			}
			this.require_consent_info = 0;
			if (this.dnt==0 && this.explicit_consent!==false) {
				if (this.explicit_consent===null && this.use_cmp && (typeof gemius_cmpclient == "object") && gemius_cmpclient.find_cmp()) {
					this.cmp_found = 1;
					if (this.cmp_timeout==Infinity) {
						this.require_consent_info = 1;
					} else {
						this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),this.cmp_timeout);
					}
					gemius_cmpclient.get_consent(this.bind(this.consent_loaded),this.cmp_purposes());
				} else if (this.explicit_consent===null && this.gdpr_params() != '') {
					this.gdpr_found = 1;
					this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),10000);
					var url = (this.hssl?'https://':'http://')+this.hc+'/gdprdata.js' + this.gdpr_params(true);
					url += this.is_gde?'&gde=1':'';
					this.append_script(url,this.bind(this.gdprdata_loaded),0);
				} else {
					this.waiting_for_consent = 0;
					this.has_consent = true;
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
			} else {
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			this.paramsready();
			this.latehits();
			this.add_event(document,"mousedown",this.bind(this.mousedown));
			if (this.use_globals) {
				gemius_hit = this.bind(this.plainhit);
				gemius_event = this.bind(this.plainevent);
				pp_gemius_hit = this.bind(this.addscripthit);
				pp_gemius_event = this.bind(this.addscriptevent);
				var p = params;
				if (typeof p['identifier'] == 'undefined' && typeof gemius_identifier == 'undefined' && typeof pp_gemius_identifier == 'undefined') {
					this.sonar_auto_init = (typeof p['sonar_auto_init_disabled'] == 'boolean')?(p['sonar_auto_init_disabled']?0:1):(typeof gemius_sonar_auto_init_disabled == 'boolean')?(gemius_sonar_auto_init_disabled?0:1):(typeof pp_gemius_sonar_auto_init_disabled == 'boolean')?(pp_gemius_sonar_auto_init_disabled?0:1):1;
				}
				try {
					if (typeof gemius_loaded != "undefined") {
						gemius_loaded();
					} else if (typeof pp_gemius_loaded != "undefined") {
						pp_gemius_loaded();
					}
				} catch (e) {}
				this.event_identifier = (typeof p['identifier'] != 'undefined')?p['identifier']:(typeof gemius_identifier != 'undefined')?gemius_identifier:(typeof pp_gemius_identifier != 'undefined')?pp_gemius_identifier:this.event_identifier;
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i](params);
					}
				}
				this.sendpendingdata();
			}
			this.send_bfview();
		};
		this.start = function() {
			if (this.started) {
				return;
			}
			this.started = true;
			if (this.use_globals) {
				gemius_init = this.bind(this.init);
				pp_gemius_init = this.bind(this.init);
				gemius_close = this.bind(function() { this.closing = 1; });
			}
			this.getdntcookie();
			this.getfpcap();
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.flashv = this.getflashv();
			this.waiting_on_prerender = 0;
			this.findchints();
			this.findvisapi();
			if (this.visapi_s != '') {
				if (document[this.visapi_s] == 'prerender') {
					this.waiting_on_prerender = 1;
				}
				this.add_event(document,this.visapi_c,this.bind(this.visibilitychanged));
			}
			this.gen_exid();
			if ('onpagehide' in window) {
				this.onpagehide = true;
				this.add_event(window,"pagehide",this.bind(this.pagehide));
				this.add_event(window,"pageshow",this.bind(this.pageshow));
			} else {
				this.add_event(window,"unload",this.bind(this.unload, true));
				this.add_event(window,"beforeunload",this.bind(this.unload, true));
			}
			this.add_event(window,'message',this.bind(this.msgreceiver));
			this.frametype_init();
			this.ref_update();
			this.tfp_init();
			if (this.use_globals) {
				this.pendingdata('gemius_init_pdata',this.init);
				this.pendingdata('pp_gemius_init_pdata',this.init);
				if (!this.init_called) {
					var timeout = (typeof gemius_init_timeout == 'number')?gemius_init_timeout:(typeof pp_gemius_init_timeout == 'number')?pp_gemius_init_timeout:null;
					if (typeof timeout == 'number') {
						if (timeout == Infinity) {
							this.require_consent_info = 1;
						} else {
							this.timeouts.initto = this.set_timeout(this.bind(this.init_timeout),timeout);
						}
					} else {
						gemius_init();
					}
				}
			} else {
				this.require_consent_info = 1;
			}
		};
	}
	/** @define {number} */
	GemiusHitcolConnector.min = 0;
}


(function(name, cmds,flag) {
	var exists = name in window;
	if (!exists) {
		window[name] = new GemiusHitcolConnector(flag);
	}
// gcmd.js 
function define_gemius_cmd(conn_name, cmds) {
	var conn = window[conn_name];
	if (typeof gemius_cmd == 'undefined' || !('_' in gemius_cmd)) {
		gemius_cmd = function() {
			if (!arguments.length || typeof arguments[0] != 'string') {
				return;
			}
			var cmd = arguments[0];
			if (cmd in gemius_cmd) {
				var args = [];
				for (var i = 1; i < arguments.length; ++i) {
					args[args.length] = arguments[i];
				}
				return gemius_cmd[cmd].apply({}, args);
			}
		}
		gemius_cmd._ = 1;
	}
	for (var cmd in cmds) {
		gemius_cmd[cmd] = conn.bind(conn[cmds[cmd]]);
	}
	if (typeof pp_gemius_cmd == 'undefined' || !('_' in pp_gemius_cmd)) {
		pp_gemius_cmd = gemius_cmd;
	}
}
	define_gemius_cmd(name,cmds);
	if (!exists) {
		window[name].start();
	}
})('gemius_hcconn', {'referrer_override':'referrer_override'});
s)){for(d=(t=(t||"").match(R)||[""]).length;d--;)if(m=p=(o=we.exec(t[d])||[])[1],f=(o[2]||"").split(".").sort(),m){for(c=v.event.special[m]||{},h=u[m=(r?c.delegateType:c.bindType)||m]||[],o=o[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=a=h.length;a--;)l=h[a],!i&&p!==l.origType||n&&n.guid!==l.guid||o&&!o.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(h.splice(a,1),l.selector&&h.delegateCount--,c.remove&&c.remove.call(e,l));s&&!h.length&&(c.teardown&&!1!==c.teardown.call(e,f,_.handle)||v.removeEvent(e,m,_.handle),delete u[m])}else for(m in u)v.event.remove(e,m+t[d],n,r,!0);v.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,a,s,o=v.event.fix(e),u=new Array(arguments.length),d=(J.get(this,"events")||{})[o.type]||[],l=v.event.special[o.type]||{};for(u[0]=o,t=1;t<arguments.length;t++)u[t]=arguments[t];if(o.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,o)){for(s=v.event.handlers.call(this,o,d),t=0;(i=s[t++])&&!o.isPropagationStopped();)for(o.currentTarget=i.elem,n=0;(a=i.handlers[n++])&&!o.isImmediatePropagationStopped();)o.rnamespace&&!o.rnamespace.test(a.namespace)||(o.handleObj=a,o.data=a.data,void 0!==(r=((v.event.special[a.origType]||{}).handle||a.handler).apply(i.elem,u))&&!1===(o.result=r)&&(o.preventDefault(),o.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,o),o.result}},handlers:function(e,t){var n,r,i,a,s,o=[],u=t.delegateCount,d=e.target;if(u&&d.nodeType&&!("click"===e.type&&e.button>=1))for(;d!==this;d=d.parentNode||this)if(1===d.nodeType&&("click"!==e.type||!0!==d.disabled)){for(a=[],s={},n=0;n<u;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?v(i,this).index(d)>-1:v.find(i,this,null,[d]).length),s[i]&&a.push(r);a.length&&o.push({elem:d,handlers:a})}return d=this,u<t.length&&o.push({elem:d,handlers:t.slice(u)}),o},addProp:function(e,t){Object.defineProperty(v.Event.prototype,e,{enumerable:!0,configurable:!0,get:v.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[v.expando]?e:new v.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ke()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===ke()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&S(this,"input"))return this.click(),!1},_default:function(e){return S(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},v.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Le:be,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={constructor:v.Event,isDefaultPrevented:be,isPropagationStopped:be,isImmediatePropagationStopped:be,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Le,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Le,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Le,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},v.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&ve.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Me.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},v.event.addProp),v.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,a=e.handleObj;return i&&(i===r||v.contains(r,i))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}}),v.fn.extend({on:function(e,t,n,r){return Te(this,e,t,n,r)},one:function(e,t,n,r){return Te(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,v(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=be),this.each(function(){v.event.remove(this,e,n,t)})}});var Ye=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,De=/<script|<style|<link/i,xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Se=/^true\/(.*)/,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ee(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&v(">tbody",e)[0]||e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ce(e){var t=Se.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Ae(e,t){var n,r,i,a,s,o,u,d;if(1===t.nodeType){if(J.hasData(e)&&(a=J.access(e),s=J.set(t,a),d=a.events))for(i in delete s.handle,s.events={},d)for(n=0,r=d[i].length;n<r;n++)v.event.add(t,i,d[i][n]);G.hasData(e)&&(o=G.access(e),u=v.extend({},o),G.set(t,u))}}function Oe(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ue.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Pe(e,t,n,r){t=d.apply([],t);var i,a,s,o,u,l,c=0,h=e.length,m=h-1,f=t[0],p=v.isFunction(f);if(p||h>1&&"string"==typeof f&&!y.checkClone&&xe.test(f))return e.each(function(i){var a=e.eq(i);p&&(t[0]=f.call(this,i,a.html())),Pe(a,t,n,r)});if(h&&(a=(i=ye(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=a),a||r)){for(o=(s=v.map(he(i,"script"),He)).length;c<h;c++)u=i,c!==m&&(u=v.clone(u,!0,!0),o&&v.merge(s,he(u,"script"))),n.call(e[c],u,c);if(o)for(l=s[s.length-1].ownerDocument,v.map(s,Ce),c=0;c<o;c++)u=s[c],le.test(u.type||"")&&!J.access(u,"globalEval")&&v.contains(l,u)&&(u.src?v._evalUrl&&v._evalUrl(u.src):g(u.textContent.replace(je,""),l))}return e}function Ne(e,t,n){for(var r,i=t?v.filter(t,e):e,a=0;null!=(r=i[a]);a++)n||1!==r.nodeType||v.cleanData(he(r)),r.parentNode&&(n&&v.contains(r.ownerDocument,r)&&me(he(r,"script")),r.parentNode.removeChild(r));return e}v.extend({htmlPrefilter:function(e){return e.replace(Ye,"<$1></$2>")},clone:function(e,t,n){var r,i,a,s,o=e.cloneNode(!0),u=v.contains(e.ownerDocument,e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||v.isXMLDoc(e)))for(s=he(o),r=0,i=(a=he(e)).length;r<i;r++)Oe(a[r],s[r]);if(t)if(n)for(a=a||he(e),s=s||he(o),r=0,i=a.length;r<i;r++)Ae(a[r],s[r]);else Ae(e,o);return(s=he(o,"script")).length>0&&me(s,!u&&he(e,"script")),o},cleanData:function(e){for(var t,n,r,i=v.event.special,a=0;void 0!==(n=e[a]);a++)if($(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?v.event.remove(n,r):v.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[G.expando]&&(n[G.expando]=void 0)}}}),v.fn.extend({detach:function(e){return Ne(this,e,!0)},remove:function(e){return Ne(this,e)},text:function(e){return U(this,function(e){return void 0===e?v.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ee(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ee(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(v.cleanData(he(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return U(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!De.test(e)&&!ce[(de.exec(e)||["",""])[1].toLowerCase()]){e=v.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(v.cleanData(he(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Pe(this,arguments,function(t){var n=this.parentNode;v.inArray(this,e)<0&&(v.cleanData(he(this)),n&&n.replaceChild(t,this))},e)}}),v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(e){for(var n,r=[],i=v(e),a=i.length-1,s=0;s<=a;s++)n=s===a?this:this.clone(!0),v(i[s])[t](n),l.apply(r,n.get());return this.pushStack(r)}});var Re=/^margin/,Ie=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),We=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)};function Fe(e,t,n){var r,i,a,s,o=e.style;return(n=n||We(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||v.contains(e.ownerDocument,e)||(s=v.style(e,t)),!y.pixelMarginRight()&&Ie.test(s)&&Re.test(t)&&(r=o.width,i=o.minWidth,a=o.maxWidth,o.minWidth=o.maxWidth=o.width=s,s=n.width,o.width=r,o.minWidth=i,o.maxWidth=a)),void 0!==s?s+"":s}function qe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){u.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",u.innerHTML="",ge.appendChild(o);var e=n.getComputedStyle(u);t="1%"!==e.top,a="2px"===e.marginLeft,r="4px"===e.width,u.style.marginRight="50%",i="4px"===e.marginRight,ge.removeChild(o),u=null}}var t,r,i,a,o=s.createElement("div"),u=s.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,o.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",o.appendChild(u),v.extend(y,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return e(),r},pixelMarginRight:function(){return e(),i},reliableMarginLeft:function(){return e(),a}}))}();var ze=/^(none|table(?!-c[ea]).+)/,Be=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},$e={letterSpacing:"0",fontWeight:"400"},Ve=["Webkit","Moz","ms"],Je=s.createElement("div").style;function Ge(e){var t=v.cssProps[e];return t||(t=v.cssProps[e]=function(e){if(e in Je)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Ve.length;n--;)if((e=Ve[n]+t)in Je)return e}(e)||e),t}function Xe(e,t,n){var r=ee.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i){var a,s=0;for(a=n===(r?"border":"content")?4:"width"===t?1:0;a<4;a+=2)"margin"===n&&(s+=v.css(e,n+te[a],!0,i)),r?("content"===n&&(s-=v.css(e,"padding"+te[a],!0,i)),"margin"!==n&&(s-=v.css(e,"border"+te[a]+"Width",!0,i))):(s+=v.css(e,"padding"+te[a],!0,i),"padding"!==n&&(s+=v.css(e,"border"+te[a]+"Width",!0,i)));return s}function Ke(e,t,n){var r,i=We(e),a=Fe(e,t,i),s="border-box"===v.css(e,"boxSizing",!1,i);return Ie.test(a)?a:(r=s&&(y.boxSizingReliable()||a===e.style[t]),"auto"===a&&(a=e["offset"+t[0].toUpperCase()+t.slice(1)]),(a=parseFloat(a)||0)+Qe(e,t,n||(s?"border":"content"),r,i)+"px")}function Ze(e,t,n,r,i){return new Ze.prototype.init(e,t,n,r,i)}v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,a,s,o=v.camelCase(t),u=Be.test(t),d=e.style;if(u||(t=Ge(o)),s=v.cssHooks[t]||v.cssHooks[o],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:d[t];"string"===(a=typeof n)&&(i=ee.exec(n))&&i[1]&&(n=ie(e,t,i),a="number"),null!=n&&n==n&&("number"===a&&(n+=i&&i[3]||(v.cssNumber[o]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(d[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u?d.setProperty(t,n):d[t]=n))}},css:function(e,t,n,r){var i,a,s,o=v.camelCase(t);return Be.test(t)||(t=Ge(o)),(s=v.cssHooks[t]||v.cssHooks[o])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in $e&&(i=$e[t]),""===n||n?(a=parseFloat(i),!0===n||isFinite(a)?a||0:i):i}}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(v.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ke(e,t,r):re(e,Ue,function(){return Ke(e,t,r)})},set:function(e,n,r){var i,a=r&&We(e),s=r&&Qe(e,t,r,"border-box"===v.css(e,"boxSizing",!1,a),a);return s&&(i=ee.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=v.css(e,t)),Xe(0,n,s)}}}),v.cssHooks.marginLeft=qe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-re(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){for(var r=0,i={},a="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+te[r]+t]=a[r]||a[r-2]||a[0];return i}},Re.test(e)||(v.cssHooks[e+t].set=Xe)}),v.fn.extend({css:function(e,t){return U(this,function(e,t,n){var r,i,a={},s=0;if(Array.isArray(t)){for(r=We(e),i=t.length;s<i;s++)a[t[s]]=v.css(e,t[s],!1,r);return a}return void 0!==n?v.style(e,t,n):v.css(e,t)},e,t,arguments.length>1)}}),v.Tween=Ze,Ze.prototype={constructor:Ze,init:function(e,t,n,r,i,a){this.elem=e,this.prop=n,this.easing=i||v.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=a||(v.cssNumber[n]?"":"px")},cur:function(){var e=Ze.propHooks[this.prop];return e&&e.get?e.get(this):Ze.propHooks._default.get(this)},run:function(e){var t,n=Ze.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ze.propHooks._default.set(this),this}},Ze.prototype.init.prototype=Ze.prototype,Ze.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=v.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[v.cssProps[e.prop]]&&!v.cssHooks[e.prop]?e.elem[e.prop]=e.now:v.style(e.elem,e.prop,e.now+e.unit)}}},Ze.propHooks.scrollTop=Ze.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},v.fx=Ze.prototype.init,v.fx.step={};var et,tt,nt=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function it(){tt&&(!1===s.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(it):n.setTimeout(it,v.fx.interval),v.fx.tick())}function at(){return n.setTimeout(function(){et=void 0}),et=v.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=te[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ot(e,t,n){for(var r,i=(ut.tweeners[t]||[]).concat(ut.tweeners["*"]),a=0,s=i.length;a<s;a++)if(r=i[a].call(n,t,e))return r}function ut(e,t,n){var r,i,a=0,s=ut.prefilters.length,o=v.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=et||at(),n=Math.max(0,d.startTime+d.duration-t),r=1-(n/d.duration||0),a=0,s=d.tweens.length;a<s;a++)d.tweens[a].run(r);return o.notifyWith(e,[d,r,n]),r<1&&s?n:(s||o.notifyWith(e,[d,1,0]),o.resolveWith(e,[d]),!1)},d=o.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{},easing:v.easing._default},n),originalProperties:t,originalOptions:n,startTime:et||at(),duration:n.duration,tweens:[],createTween:function(t,n){var r=v.Tween(e,d.opts,t,n,d.opts.specialEasing[t]||d.opts.easing);return d.tweens.push(r),r},stop:function(t){var n=0,r=t?d.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)d.tweens[n].run(1);return t?(o.notifyWith(e,[d,1,0]),o.resolveWith(e,[d,t])):o.rejectWith(e,[d,t]),this}}),l=d.props;for(!function(e,t){var n,r,i,a,s;for(n in e)if(i=t[r=v.camelCase(n)],a=e[n],Array.isArray(a)&&(i=a[1],a=e[n]=a[0]),n!==r&&(e[r]=a,delete e[n]),(s=v.cssHooks[r])&&"expand"in s)for(n in a=s.expand(a),delete e[r],a)n in e||(e[n]=a[n],t[n]=i);else t[r]=i}(l,d.opts.specialEasing);a<s;a++)if(r=ut.prefilters[a].call(d,e,l,d.opts))return v.isFunction(r.stop)&&(v._queueHooks(d.elem,d.opts.queue).stop=v.proxy(r.stop,r)),r;return v.map(l,ot,d),v.isFunction(d.opts.start)&&d.opts.start.call(e,d),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always),v.fx.timer(v.extend(u,{elem:e,anim:d,queue:d.opts.queue})),d}v.Animation=v.extend(ut,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ie(n.elem,e,ee.exec(t),n),n}]},tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,a,s,o,u,d,l,c="width"in t||"height"in t,h=this,m={},f=e.style,p=e.nodeType&&ne(e),_=J.get(e,"fxshow");for(r in n.queue||(null==(s=v._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,o=s.empty.fire,s.empty.fire=function(){s.unqueued||o()}),s.unqueued++,h.always(function(){h.always(function(){s.unqueued--,v.queue(e,"fx").length||s.empty.fire()})})),t)if(i=t[r],nt.test(i)){if(delete t[r],a=a||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!_||void 0===_[r])continue;p=!0}m[r]=_&&_[r]||v.style(e,r)}if((u=!v.isEmptyObject(t))||!v.isEmptyObject(m))for(r in c&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(d=_&&_.display)&&(d=J.get(e,"display")),"none"===(l=v.css(e,"display"))&&(d?l=d:(oe([e],!0),d=e.style.display||d,l=v.css(e,"display"),oe([e]))),("inline"===l||"inline-block"===l&&null!=d)&&"none"===v.css(e,"float")&&(u||(h.done(function(){f.display=d}),null==d&&(l=f.display,d="none"===l?"":l)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",h.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),u=!1,m)u||(_?"hidden"in _&&(p=_.hidden):_=J.access(e,"fxshow",{display:d}),a&&(_.hidden=!p),p&&oe([e],!0),h.done(function(){for(r in p||oe([e]),J.remove(e,"fxshow"),m)v.style(e,r,m[r])})),u=ot(p?_[r]:0,r,h),r in _||(_[r]=u.start,p&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e)}}),v.speed=function(e,t,n){var r=e&&"object"==typeof e?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};return v.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in v.fx.speeds?r.duration=v.fx.speeds[r.duration]:r.duration=v.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ne).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),a=v.speed(t,n,r),s=function(){var t=ut(this,v.extend({},e),a);(i||J.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===a.queue?this.each(s):this.queue(a.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",a=v.timers,s=J.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&rt.test(i)&&r(s[i]);for(i=a.length;i--;)a[i].elem!==this||null!=e&&a[i].queue!==e||(a[i].anim.stop(n),t=!1,a.splice(i,1));!t&&n||v.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],a=v.timers,s=r?r.length:0;for(n.finish=!0,v.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=a.length;t--;)a[t].elem===this&&a[t].queue===e&&(a[t].anim.stop(!0),a.splice(t,1));for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(st(t,!0),e,r,i)}}),v.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.timers=[],v.fx.tick=function(){var e,t=0,n=v.timers;for(et=v.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||v.fx.stop(),et=void 0},v.fx.timer=function(e){v.timers.push(e),v.fx.start()},v.fx.interval=13,v.fx.start=function(){tt||(tt=!0,it())},v.fx.stop=function(){tt=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fn.delay=function(e,t){return e=v.fx&&v.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}})},function(){var e=s.createElement("input"),t=s.createElement("select").appendChild(s.createElement("option"));e.type="checkbox",y.checkOn=""!==e.value,y.optSelected=t.selected,(e=s.createElement("input")).value="t",e.type="radio",y.radioValue="t"===e.value}();var dt,lt=v.expr.attrHandle;v.fn.extend({attr:function(e,t){return U(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})}}),v.extend({attr:function(e,t,n){var r,i,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return void 0===e.getAttribute?v.prop(e,t,n):(1===a&&v.isXMLDoc(e)||(i=v.attrHooks[t.toLowerCase()]||(v.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void v.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=v.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&S(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?v.removeAttr(e,n):e.setAttribute(n,n),n}},v.each(v.expr.match.bool.source.match(/\w+/g),function(e,t){var n=lt[t]||v.find.attr;lt[t]=function(e,t,r){var i,a,s=t.toLowerCase();return r||(a=lt[s],lt[s]=i,i=null!=n(e,t,r)?s:null,lt[s]=a),i}});var ct=/^(?:input|select|textarea|button)$/i,ht=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function ft(e){return e.getAttribute&&e.getAttribute("class")||""}v.fn.extend({prop:function(e,t){return U(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[v.propFix[e]||e]})}}),v.extend({prop:function(e,t,n){var r,i,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return 1===a&&v.isXMLDoc(e)||(t=v.propFix[t]||t,i=v.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=v.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||ht.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(v.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),v.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){v.propFix[this.toLowerCase()]=this}),v.fn.extend({addClass:function(e){var t,n,r,i,a,s,o,u=0;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,ft(this)))});if("string"==typeof e&&e)for(t=e.match(R)||[];n=this[u++];)if(i=ft(n),r=1===n.nodeType&&" "+mt(i)+" "){for(s=0;a=t[s++];)r.indexOf(" "+a+" ")<0&&(r+=a+" ");i!==(o=mt(r))&&n.setAttribute("class",o)}return this},removeClass:function(e){var t,n,r,i,a,s,o,u=0;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,ft(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(R)||[];n=this[u++];)if(i=ft(n),r=1===n.nodeType&&" "+mt(i)+" "){for(s=0;a=t[s++];)for(;r.indexOf(" "+a+" ")>-1;)r=r.replace(" "+a+" "," ");i!==(o=mt(r))&&n.setAttribute("class",o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,ft(this),t),t)}):this.each(function(){var t,r,i,a;if("string"===n)for(r=0,i=v(this),a=e.match(R)||[];t=a[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=ft(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+mt(ft(n))+" ").indexOf(t)>-1)return!0;return!1}});var pt=/\r/g;v.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=v.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,v(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=v.map(i,function(e){return null==e?"":e+""})),(t=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=v.valHooks[i.type]||v.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(pt,""):null==n?"":n:void 0}}),v.extend({valHooks:{option:{get:function(e){var t=v.find.attr(e,"value");return null!=t?t:mt(v.text(e))}},select:{get:function(e){var t,n,r,i=e.options,a=e.selectedIndex,s="select-one"===e.type,o=s?null:[],u=s?a+1:i.length;for(r=a<0?u:s?a:0;r<u;r++)if(((n=i[r]).selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=v(n).val(),s)return t;o.push(t)}return o},set:function(e,t){for(var n,r,i=e.options,a=v.makeArray(t),s=i.length;s--;)((r=i[s]).selected=v.inArray(v.valHooks.option.get(r),a)>-1)&&(n=!0);return n||(e.selectedIndex=-1),a}}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=v.inArray(v(e).val(),t)>-1}},y.checkOn||(v.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var _t=/^(?:focusinfocus|focusoutblur)$/;v.extend(v.event,{trigger:function(e,t,r,i){var a,o,u,d,l,c,h,m=[r||s],p=f.call(e,"type")?e.type:e,_=f.call(e,"namespace")?e.namespace.split("."):[];if(o=u=r=r||s,3!==r.nodeType&&8!==r.nodeType&&!_t.test(p+v.event.triggered)&&(p.indexOf(".")>-1&&(_=p.split("."),p=_.shift(),_.sort()),l=p.indexOf(":")<0&&"on"+p,(e=e[v.expando]?e:new v.Event(p,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=_.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:v.makeArray(t,[e]),h=v.event.special[p]||{},i||!h.trigger||!1!==h.trigger.apply(r,t))){if(!i&&!h.noBubble&&!v.isWindow(r)){for(d=h.delegateType||p,_t.test(d+p)||(o=o.parentNode);o;o=o.parentNode)m.push(o),u=o;u===(r.ownerDocument||s)&&m.push(u.defaultView||u.parentWindow||n)}for(a=0;(o=m[a++])&&!e.isPropagationStopped();)e.type=a>1?d:h.bindType||p,(c=(J.get(o,"events")||{})[e.type]&&J.get(o,"handle"))&&c.apply(o,t),(c=l&&o[l])&&c.apply&&$(o)&&(e.result=c.apply(o,t),!1===e.result&&e.preventDefault());return e.type=p,i||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(m.pop(),t)||!$(r)||l&&v.isFunction(r[p])&&!v.isWindow(r)&&((u=r[l])&&(r[l]=null),v.event.triggered=p,r[p](),v.event.triggered=void 0,u&&(r[l]=u)),e.result}},simulate:function(e,t,n){var r=v.extend(new v.Event,n,{type:e,isSimulated:!0});v.event.trigger(r,null,t)}}),v.fn.extend({trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return v.event.trigger(e,t,n,!0)}}),v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),v.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),y.focusin="onfocusin"in n,y.focusin||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){v.event.simulate(t,e.target,v.event.fix(e))};v.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var yt=n.location,gt=v.now(),vt=/\?/;v.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||v.error("Invalid XML: "+e),t};var Mt=/\[\]$/,wt=/\r?\n/g,Lt=/^(?:submit|button|image|reset|file)$/i,bt=/^(?:input|select|textarea|keygen)/i;function kt(e,t,n,r){var i;if(Array.isArray(t))v.each(t,function(t,i){n||Mt.test(e)?r(e,i):kt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==v.type(t))r(e,t);else for(i in t)kt(e+"["+i+"]",t[i],n,r)}v.param=function(e,t){var n,r=[],i=function(e,t){var n=v.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){i(this.name,this.value)});else for(n in e)kt(n,e[n],t,i);return r.join("&")},v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=v.prop(this,"elements");return e?v.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!v(this).is(":disabled")&&bt.test(this.nodeName)&&!Lt.test(e)&&(this.checked||!ue.test(e))}).map(function(e,t){var n=v(this).val();return null==n?null:Array.isArray(n)?v.map(n,function(e){return{name:t.name,value:e.replace(wt,"\r\n")}}):{name:t.name,value:n.replace(wt,"\r\n")}}).get()}});var Tt=/%20/g,Yt=/#.*$/,Dt=/([?&])_=[^&]*/,xt=/^(.*?):[ \t]*([^\r\n]*)$/gm,St=/^(?:GET|HEAD)$/,jt=/^\/\//,Et={},Ht={},Ct="*/".concat("*"),At=s.createElement("a");function Ot(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,a=t.toLowerCase().match(R)||[];if(v.isFunction(n))for(;r=a[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Pt(e,t,n,r){var i={},a=e===Ht;function s(o){var u;return i[o]=!0,v.each(e[o]||[],function(e,o){var d=o(t,n,r);return"string"!=typeof d||a||i[d]?a?!(u=d):void 0:(t.dataTypes.unshift(d),s(d),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function Nt(e,t){var n,r,i=v.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&v.extend(!0,e,r),e}At.href=yt.href,v.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ct,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":v.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Nt(Nt(e,v.ajaxSettings),t):Nt(v.ajaxSettings,e)},ajaxPrefilter:Ot(Et),ajaxTransport:Ot(Ht),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,a,o,u,d,l,c,h,m,f=v.ajaxSetup({},t),p=f.context||f,_=f.context&&(p.nodeType||p.jquery)?v(p):v.event,y=v.Deferred(),g=v.Callbacks("once memory"),M=f.statusCode||{},w={},L={},b="canceled",k={readyState:0,getResponseHeader:function(e){var t;if(l){if(!o)for(o={};t=xt.exec(a);)o[t[1].toLowerCase()]=t[2];t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return l?a:null},setRequestHeader:function(e,t){return null==l&&(e=L[e.toLowerCase()]=L[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==l&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)k.always(e[k.status]);else for(t in e)M[t]=[M[t],e[t]];return this},abort:function(e){var t=e||b;return r&&r.abort(t),T(0,t),this}};if(y.promise(k),f.url=((e||f.url||yt.href)+"").replace(jt,yt.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(R)||[""],null==f.crossDomain){d=s.createElement("a");try{d.href=f.url,d.href=d.href,f.crossDomain=At.protocol+"//"+At.host!=d.protocol+"//"+d.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=v.param(f.data,f.traditional)),Pt(Et,f,t,k),l)return k;for(h in(c=v.event&&f.global)&&0==v.active++&&v.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!St.test(f.type),i=f.url.replace(Yt,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Tt,"+")):(m=f.url.slice(i.length),f.data&&(i+=(vt.test(i)?"&":"?")+f.data,delete f.data),!1===f.cache&&(i=i.replace(Dt,"$1"),m=(vt.test(i)?"&":"?")+"_="+gt+++m),f.url=i+m),f.ifModified&&(v.lastModified[i]&&k.setRequestHeader("If-Modified-Since",v.lastModified[i]),v.etag[i]&&k.setRequestHeader("If-None-Match",v.etag[i])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&k.setRequestHeader("Content-Type",f.contentType),k.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Ct+"; q=0.01":""):f.accepts["*"]),f.headers)k.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,k,f)||l))return k.abort();if(b="abort",g.add(f.complete),k.done(f.success),k.fail(f.error),r=Pt(Ht,f,t,k)){if(k.readyState=1,c&&_.trigger("ajaxSend",[k,f]),l)return k;f.async&&f.timeout>0&&(u=n.setTimeout(function(){k.abort("timeout")},f.timeout));try{l=!1,r.send(w,T)}catch(e){if(l)throw e;T(-1,e)}}else T(-1,"No Transport");function T(e,t,s,o){var d,h,m,w,L,b=t;l||(l=!0,u&&n.clearTimeout(u),r=void 0,a=o||"",k.readyState=e>0?4:0,d=e>=200&&e<300||304===e,s&&(w=function(e,t,n){for(var r,i,a,s,o=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in o)if(o[i]&&o[i].test(r)){u.unshift(i);break}if(u[0]in n)a=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){a=i;break}s||(s=i)}a=a||s}if(a)return a!==u[0]&&u.unshift(a),n[a]}(f,k,s)),w=function(e,t,n,r){var i,a,s,o,u,d={},l=e.dataTypes.slice();if(l[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(a=l.shift();a;)if(e.responseFields[a]&&(n[e.responseFields[a]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=a,a=l.shift())if("*"===a)a=u;else if("*"!==u&&u!==a){if(!(s=d[u+" "+a]||d["* "+a]))for(i in d)if((o=i.split(" "))[1]===a&&(s=d[u+" "+o[0]]||d["* "+o[0]])){!0===s?s=d[i]:!0!==d[i]&&(a=o[0],l.unshift(o[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+a}}}return{state:"success",data:t}}(f,w,k,d),d?(f.ifModified&&((L=k.getResponseHeader("Last-Modified"))&&(v.lastModified[i]=L),(L=k.getResponseHeader("etag"))&&(v.etag[i]=L)),204===e||"HEAD"===f.type?b="nocontent":304===e?b="notmodified":(b=w.state,h=w.data,d=!(m=w.error))):(m=b,!e&&b||(b="error",e<0&&(e=0))),k.status=e,k.statusText=(t||b)+"",d?y.resolveWith(p,[h,b,k]):y.rejectWith(p,[k,b,m]),k.statusCode(M),M=void 0,c&&_.trigger(d?"ajaxSuccess":"ajaxError",[k,f,d?h:m]),g.fireWith(p,[k,b]),c&&(_.trigger("ajaxComplete",[k,f]),--v.active||v.event.trigger("ajaxStop")))}return k},getJSON:function(e,t,n){return v.get(e,t,n,"json")},getScript:function(e,t){return v.get(e,void 0,t,"script")}}),v.each(["get","post"],function(e,t){v[t]=function(e,n,r,i){return v.isFunction(n)&&(i=i||r,r=n,n=void 0),v.ajax(v.extend({url:e,type:t,dataType:i,data:n,success:r},v.isPlainObject(e)&&e))}}),v._evalUrl=function(e){return v.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},v.fn.extend({wrapAll:function(e){var t;return this[0]&&(v.isFunction(e)&&(e=e.call(this[0])),t=v(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){v(this).replaceWith(this.childNodes)}),this}}),v.expr.pseudos.hidden=function(e){return!v.expr.pseudos.visible(e)},v.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},v.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Rt={0:200,1223:204},It=v.ajaxSettings.xhr();y.cors=!!It&&"withCredentials"in It,y.ajax=It=!!It,v.ajaxTransport(function(e){var t,r;if(y.cors||It&&!e.crossDomain)return{send:function(i,a){var s,o=e.xhr();if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)o[s]=e.xhrFields[s];for(s in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)o.setRequestHeader(s,i[s]);t=function(e){return function(){t&&(t=r=o.onload=o.onerror=o.onabort=o.onreadystatechange=null,"abort"===e?o.abort():"error"===e?"number"!=typeof o.status?a(0,"error"):a(o.status,o.statusText):a(Rt[o.status]||o.status,o.statusText,"text"!==(o.responseType||"text")||"string"!=typeof o.responseText?{binary:o.response}:{text:o.responseText},o.getAllResponseHeaders()))}},o.onload=t(),r=o.onerror=t("error"),void 0!==o.onabort?o.onabort=r:o.onreadystatechange=function(){4===o.readyState&&n.setTimeout(function(){t&&r()})},t=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),v.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),v.ajaxTransport("script",function(e){var t,n;if(e.crossDomain)return{send:function(r,i){t=v("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),s.head.appendChild(t[0])},abort:function(){n&&n()}}});var Wt,Ft=[],qt=/(=)\?(?=&|$)|\?\?/;v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ft.pop()||v.expando+"_"+gt++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(e,t,r){var i,a,s,o=!1!==e.jsonp&&(qt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&qt.test(e.data)&&"data");if(o||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=v.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,o?e[o]=e[o].replace(qt,"$1"+i):!1!==e.jsonp&&(e.url+=(vt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||v.error(i+" was not called"),s[0]},e.dataTypes[0]="json",a=n[i],n[i]=function(){s=arguments},r.always(function(){void 0===a?v(n).removeProp(i):n[i]=a,e[i]&&(e.jsonpCallback=t.jsonpCallback,Ft.push(i)),s&&v.isFunction(a)&&a(s[0]),s=a=void 0}),"script"}),y.createH