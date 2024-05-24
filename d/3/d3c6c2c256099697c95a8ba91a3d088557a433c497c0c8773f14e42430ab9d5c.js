<!Del][${n}][${e}] ${l}`,o)})).catch((function(){}))}));
});})(self.webPixelsManager.createShopifyExtend('shopify-custom-pixel', 'custom'));
}
</script>

    <script type="text/javascript">
  (()=>{var e={747:function(e,t,r){var i,n,o;!function(a,s){"use strict";n=[r(18)],void 0===(o="function"==typeof(i=function(e){var t=/(^|@)\S+:\d+/,r=/^\s*at .*(\S+:\d+|\(native\))/m,i=/^(eval@)?(\[native code])?$/;return{parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(r))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(t){return t.stack.split("\n").filter((function(e){return!!e.match(r)}),this).map((function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),i=r.match(/ (\(.+\)$)/);r=i?r.replace(i[0],""):r;var n=this.extractLocation(i?i[1]:r),o=i&&r||void 0,a=["eval","<anonymous>"].indexOf(n[0])>-1?void 0:n[0];return new e({functionName:o,fileName:a,lineNumber:n[1],columnNumber:n[2],source:t})}),this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter((function(e){return!e.match(i)}),this).map((function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,i=t.match(r),n=i&&i[1]?i[1]:void 0,o=this.extractLocation(t.replace(r,""));return new e({functionName:n,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})}),this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,i=t.message.split("\n"),n=[],o=2,a=i.length;o<a;o+=2){var s=r.exec(i[o]);s&&n.push(new e({fileName:s[2],lineNumber:s[1],source:i[o]}))}return n},parseOpera10:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,i=t.stacktrace.split("\n"),n=[],o=0,a=i.length;o<a;o+=2){var s=r.exec(i[o]);s&&n.push(new e({functionName:s[3]||void 0,fileName:s[2],lineNumber:s[1],source:i[o]}))}return n},parseOpera11:function(r){return r.stack.split("\n").filter((function(e){return!!e.match(t)&&!e.match(/^Error created at/)}),this).map((function(t){var r,i=t.split("@"),n=this.extractLocation(i.pop()),o=i.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;o.match(/\(([^)]*)\)/)&&(r=o.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var s=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new e({functionName:a,args:s,fileName:n[0],lineNumber:n[1],columnNumber:n[2],source:t})}),this)}}})?i.apply(t,n):i)||(e.exports=o)}()},18:function(e,t){var r,i,n;!function(o,a){"use strict";i=[],void 0===(n="function"==typeof(r=function(){function e(e){return e.charAt(0).toUpperCase()+e.substring(1)}function t(e){return function(){return this[e]}}var r=["isConstructor","isEval","isNative","isToplevel"],i=["columnNumber","lineNumber"],n=["fileName","functionName","source"],o=r.concat(i,n,["args"],["evalOrigin"]);function a(t){if(t)for(var r=0;r<o.length;r++)void 0!==t[o[r]]&&this["set"+e(o[r])](t[o[r]])}a.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof a)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new a(e)}},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",r=this.getColumnNumber()||"",i=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+r+")":"[eval]:"+t+":"+r:i?i+" ("+e+":"+t+":"+r+")":e+":"+t+":"+r}},a.fromString=function(e){var t=e.indexOf("("),r=e.lastIndexOf(")"),i=e.substring(0,t),n=e.substring(t+1,r).split(","),o=e.substring(r+1);if(0===o.indexOf("@"))var s=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o,""),c=s[1],l=s[2],u=s[3];return new a({functionName:i,args:n||void 0,fileName:c,lineNumber:l||void 0,columnNumber:u||void 0})};for(var s=0;s<r.length;s++)a.prototype["get"+e(r[s])]=t(r[s]),a.prototype["set"+e(r[s])]=function(e){return function(t){this[e]=Boolean(t)}}(r[s]);for(var c=0;c<i.length;c++)a.prototype["get"+e(i[c])]=t(i[c]),a.prototype["set"+e(i[c])]=function(e){return function(t){if(r=t,isNaN(parseFloat(r))||!isFinite(r))throw new TypeError(e+" must be a Number");var r;this[e]=Number(t)}}(i[c]);for(var l=0;l<n.length;l++)a.prototype["get"+e(n[l])]=t(n[l]),a.prototype["set"+e(n[l])]=function(e){return function(t){this[e]=String(t)}}(n[l]);return a})?r.apply(t,i):r)||(e.exports=n)}()},700:function(e,t,r){var i;!function(n,o){"use strict";var a="function",s="undefined",c="object",l="string",u="major",d="model",b="name",f="type",p="vendor",m="version",w="architecture",g="console",h="mobile",v="tablet",y="smarttv",x="wearable",k="embedded",S="Amazon",O="Apple",R="ASUS",E="BlackBerry",A="Browser",N="Chrome",T="Firefox",C="Google",I="Huawei",L="LG",M="Microsoft",B="Motorola",P="Opera",U="Samsung",j="Sharp",D="Sony",q="Xiaomi",F="Zebra",W="Facebook",_="Chromium OS",V="Mac OS",$=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},z=function(e,t){return typeof e===l&&-1!==G(t).indexOf(G(e))},G=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===s?e:e.substring(0,350)},X=function(e,t){for(var r,i,n,s,l,u,d=0;d<t.length&&!l;){var b=t[d],f=t[d+1];for(r=i=0;r<b.length&&!l&&b[r];)if(l=b[r++].exec(e))for(n=0;n<f.length;n++)u=l[++i],typeof(s=f[n])===c&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):o:this[s[0]]=u?s[1].call(this,u,s[2]):o:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):o):this[s]=u||o;d+=2}},Y=function(e,t){for(var r in t)if(typeof t[r]===c&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(z(t[r][i],e))return"?"===r?o:r}else if(z(t[r],e))return"?"===r?o:r;return e},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,m],[/opios[\/ ]+([\w\.]+)/i],[m,[b,P+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[b,P]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[b,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[b,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[b,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+A],m],[/\bfocus\/([\w\.]+)/i],[m,[b,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[b,P+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[b,P+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[b,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[m,[b,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 "+A]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 "+A],m],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[b,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,W],m],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[b,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[b,N+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,N+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[b,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[m,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[b,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[b,m],[/(cobalt)\/([\w\.]+)/i],[b,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,G]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows (ce|mobile); ppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[w,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[p,U],[f,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[p,U],[f,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[p,O],[f,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[p,O],[f,v]],[/(macintosh);/i],[d,[p,O]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[p,j],[f,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[p,I],[f,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[p,I],[f,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[p,q],[f,h]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[p,q],[f,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[p,"OPPO"],[f,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[p,"Vivo"],[f,h]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[d,[p,"Realme"],[f,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[p,B],[f,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[p,B],[f,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[p,L],[f,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[p,L],[f,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[p,"Lenovo"],[f,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[p,"Nokia"],[f,h]],[/(pixel c)\b/i],[d,[p,C],[f,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[p,C],[f,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[p,D],[f,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[p,D],[f,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[p,"OnePlus"],[f,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[p,S],[f,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[p,S],[f,h]],[/(playbook);[-\w\),; ]+(rim)/i],[d,p,[f,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[p,E],[f,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[p,R],[f,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[p,R],[f,h]],[/(nexus 9)/i],[d,[p,"HTC"],[f,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[d,/_/g," "],[f,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[p,"Acer"],[f,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[p,"Meizu"],[f,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,d,[f,h]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,d,[f,v]],[/(surface duo)/i],[d,[p,M],[f,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[p,"Fairphone"],[f,h]],[/(u304aa)/i],[d,[p,"AT&T"],[f,h]],[/\bsie-(\w*)/i],[d,[p,"Siemens"],[f,h]],[/\b(rct\w+) b/i],[d,[p,"RCA"],[f,v]],[/\b(venue[\d ]{2,7}) b/i],[d,[p,"Dell"],[f,v]],[/\b(q(?:mv|ta)\w+) b/i],[d,[p,"Verizon"],[f,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[p,"Barnes & Noble"],[f,v]],[/\b(tm\d{3}\w+) b/i],[d,[p,"NuVision"],[f,v]],[/\b(k88) b/i],[d,[p,"ZTE"],[f,v]],[/\b(nx\d{3}j) b/i],[d,[p,"ZTE"],[f,h]],[/\b(gen\d{3}) b.+49h/i],[d,[p,"Swiss"],[f,h]],[/\b(zur\d{3}) b/i],[d,[p,"Swiss"],[f,v]],[/\b((zeki)?tb.*\b) b/i],[d,[p,"Zeki"],[f,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],d,[f,v]],[/\b(ns-?\w{0,9}) b/i],[d,[p,"Insignia"],[f,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[p,"NextBook"],[f,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],d,[f,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],d,[f,h]],[/\b(ph-1) /i],[d,[p,"Essential"],[f,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[p,"Envizen"],[f,v]],[/\b(trio[-\w\. ]+) b/i],[d,[p,"MachSpeed"],[f,v]],[/\btu_(1491) b/i],[d,[p,"Rotor"],[f,v]],[/(shield[\w ]+) b/i],[d,[p,"Nvidia"],[f,v]],[/(sprint) (\w+)/i],[p,d,[f,h]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[p,M],[f,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[p,F],[f,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[p,F],[f,h]],[/smart-tv.+(samsung)/i],[p,[f,y]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[p,U],[f,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,L],[f,y]],[/(apple) ?tv/i],[p,[d,O+" TV"],[f,y]],[/crkey/i],[[d,N+"cast"],[p,C],[f,y]],[/droid.+aft(\w+)( bui|\))/i],[d,[p,S],[f,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[p,j],[f,y]],[/(bravia[\w ]+)( bui|\))/i],[d,[p,D],[f,y]],[/(mitv-\w{5}) bui/i],[d,[p,q],[f,y]],[/Hbbtv.*(technisat) (.*);/i],[p,d,[f,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,H],[d,H],[f,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[f,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,d,[f,g]],[/droid.+; (shield) bui/i],[d,[p,"Nvidia"],[f,g]],[/(playstation [345portablevi]+)/i],[d,[p,D],[f,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[p,M],[f,g]],[/((pebble))app/i],[p,d,[f,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[p,O],[f,x]],[/droid.+; (glass) \d/i],[d,[p,C],[f,x]],[/droid.+; (wt63?0{2,3})\)/i],[d,[p,F],[f,x]],[/(quest( 2| pro)?)/i],[d,[p,W],[f,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[f,k]],[/(aeobc)\b/i],[d,[p,S],[f,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[d,[f,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[f,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[f,h]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[b,[m,Y,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,"Windows"],[m,Y,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,V],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,m],[/\(bb(10);/i],[m,[b,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[b,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[b,N+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,_],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,m],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,m]]},J=function(e,t){if(typeof e===c&&(t=e,e=o),!(this instanceof J))return new J(e,t).getResult();var r=typeof n!==s&&n.navigator?n.navigator:o,i=e||(r&&r.userAgent?r.userAgent:""),g=r&&r.userAgentData?r.userAgentData:o,y=t?function(e,t){var r={};for(var i in e)t[i]&&t[i].length%2==0?r[i]=t[i].concat(e[i]):r[i]=e[i];return r}(K,t):K,x=r&&r.userAgent==i;return this.getBrowser=function(){var e,t={};return t[b]=o,t[m]=o,X.call(t,i,y.browser),t[u]=typeof(e=t[m])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,x&&r&&r.brave&&typeof r.brave.isBrave==a&&(t[b]="Brave"),t},this.getCPU=function(){var e={};return e[w]=o,X.call(e,i,y.cpu),e},this.getDevice=function(){var e={};return e[p]=o,e[d]=o,e[f]=o,X.call(e,i,y.device),x&&!e[f]&&g&&g.mobile&&(e[f]=h),x&&"Macintosh"==e[d]&&r&&typeof r.standalone!==s&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[d]="iPad",e[f]=v),e},this.getEngine=function(){var e={};return e[b]=o,e[m]=o,X.call(e,i,y.engine),e},this.getOS=function(){var e={};return e[b]=o,e[m]=o,X.call(e,i,y.os),x&&!e[b]&&g&&"Unknown"!=g.platform&&(e[b]=g.platform.replace(/chrome os/i,_).replace(/macos/i,V)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===l&&e.length>350?H(e,350):e,this},this.setUA(i),this};J.VERSION="1.0.36",J.BROWSER=$([b,m,u]),J.CPU=$([w]),J.DEVICE=$([d,p,f,g,h,y,v,x,k]),J.ENGINE=J.OS=$([b,m]),typeof t!==s?(e.exports&&(t=e.exports=J),t.UAParser=J):r.amdO?(i=function(){return J}.call(t,r,t,e))===o||(e.exports=i):typeof n!==s&&(n.UAParser=J);var Q=typeof n!==s&&(n.jQuery||n.Zepto);if(Q&&!Q.ua){var ee=new J;Q.ua=ee.getResult(),Q.ua.get=function(){return ee.getUA()},Q.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var r in t)Q.ua[r]=t[r]}}}("object"==typeof window?window:this)}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,r),o.exports}r.amdO={},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=Symbol.for("RemoteUi::Retain"),t=Symbol.for("RemoteUi::Release"),i=Symbol.for("RemoteUi::RetainedBy");class n{constructor(){this.memoryManaged=new Set}add(t){this.memoryManaged.add(t),t[i].add(this),t[e]()}release(){for(const e of this.memoryManaged)e[i].delete(this),e[t]();this.memoryManaged.clear()}}function o(r){return Boolean(r&&r[e]&&r[t])}function a(e,{deep:t=!0}={}){return s(e,t,new Map)}function s(t,r,i){const n=i.get(t);if(null!=n)return n;const a=o(t);if(a&&t[e](),i.set(t,a),r){if(Array.isArray(t)){const e=t.reduce(((e,t)=>s(t,r,i)||e),a);return i.set(t,e),e}if(c(t)){const e=Object.keys(t).reduce(((e,n)=>s(t[n],r,i)||e),a);return i.set(t,e),e}}return i.set(t,a),a}function c(e){if(null==e||"object"!=typeof e)return!1;const t=Object.getPrototypeOf(e);return null==t||t===Object.prototype}const l="remote-ui::ready",u="_@f";function d(r){const a=new Map,s=new Map,l=new Map;return{encode:function e(t,i=new Map){if(null==t)return[t];const n=i.get(t);if(n)return n;if("object"==typeof t){if(Array.isArray(t)){i.set(t,[void 0]);const r=[],n=[t.map((t=>{const[n,o=[]]=e(t,i);return r.push(...o),n})),r];return i.set(t,n),n}if(c(t)){i.set(t,[void 0]);const r=[],n=[Object.keys(t).reduce(((n,o)=>{const[a,s=[]]=e(t[o],i);return r.push(...s),{...n,[o]:a}}),{}),r];return i.set(t,n),n}}if("function"==typeof t){if(a.has(t)){const e=a.get(t),r=[{[u]:e}];return i.set(t,r),r}const e=r.uuid();a.set(t,e),s.set(e,t);const n=[{[u]:e}];return i.set(t,n),n}const o=[t];return i.set(t,o),o},decode:d,async call(e,t){const r=new n,a=s.get(e);if(null==a)throw new Error("You attempted to call a function that was already released.");try{const e=o(a)?[r,...a[i]]:[r];return await a(...d(t,e))}finally{r.release()}},release(e){const t=s.get(e);t&&(s.delete(e),a.delete(t))},terminate(){a.clear(),s.clear(),l.clear()}};function d(n,o){if("object"==typeof n){if(null==n)return n;if(n instanceof ArrayBuffer)return n;if(Array.isArray(n))return n.map((e=>d(e,o)));if(u in n){const a=n[u];if(l.has(a))return l.get(a);let s=0,c=!1;const d=()=>{s-=1,0===s&&(c=!0,l.delete(a),r.release(a))},b=()=>{s+=1},f=new Set(o),p=(...e)=>{if(c)throw new Error("You attempted to call a function that was already released.");if(!l.has(a))throw new Error("You attempted to call a function that was already revoked.");return r.call(a,e)};Object.defineProperties(p,{[t]:{value:d,writable:!1},[e]:{value:b,writable:!1},[i]:{value:f,writable:!1}});for(const e of f)e.add(p);return l.set(a,p),p}return Object.keys(n).reduce(((e,t)=>({...e,[t]:d(n[t],o)})),{})}return n}}function b(){return`${f()}-${f()}-${f()}-${f()}`}function f(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)}const p="production",m="0.0.427",w="5e18a059w46abe262p9770ea7bm84391e47",g="s5e18a059w46abe262p9770ea7bm84391e47m.js",h=new URL(self.location.href);class v extends Error{constructor(...e){super(...e),this.message="Invalid Extension Point"}}class y extends Error{constructor(...e){super(...e),this.name="SandboxAlreadyInitializedError",this.message="Sandbox already initialized."}}var x=r(747),k=r.n(x);class S extends Error{constructor(...e){super(...e),this.message="Excessive Stacktrace: May indicate infinite loop forming"}}var O=r(700);const R={production:"https://notify.bugsnag.com",test:"https://localhost"},E={severity:"error",context:"",unhandled:!0,library:"sandbox"},A=(e,t)=>{try{var r;if(null!=t&&null!==(r=t.options)&&void 0!==r&&r.sampleRate&&!function(e){if(e<=0||e>100)throw new Error("Invalid sampling percent");return 100*Math.random()<=e}(t.options.sampleRate))return;const a={...E,...t};let s={errorClass:null==e?void 0:e.name,message:null==e?void 0:e.message,stacktrace:[],type:"browserjs"};try{s=function(e){if("string"!=typeof((null==(t=e)?void 0:t.stack)||(null==t?void 0:t.stacktrace)||(null==t?void 0:t["opera#sourceloc"]))||t.stack===`${t.name}: ${t.message}`)throw new Error("Error incompatible with error-stack-parser");var t;const r=k().parse(e).reduce(((e,t)=>{const r=function({functionName:e,lineNumber:t,columnNumber:r}){const i=/^global code$/i.test((n=e)||"")?"global code":n;var n;return{file:`https://cdn.shopify.com/cdn/wpm/${g}`,method:i,lineNumber:t,columnNumber:r}}(t);try{return"{}"===JSON.stringify(r)?e:e.concat(r)}catch(i){return e}}),[]);return{errorClass:null==e?void 0:e.name,message:null==e?void 0:e.message,stacktrace:r,type:"browserjs"}}(e)}catch(n){try{s=function(e,t){let r="";const i={lineNumber:"1",columnNumber:"1",method:t.context,file:`https://cdn.shopify.com/cdn/wpm/${g}`};if(e.stackTrace||e.stack||e.description){r=e.stack.split("\n")[0];const t=e.stack.match(/([0-9]+):([0-9]+)/);if(t&&t.length>2&&(i.lineNumber=t[1],i.columnNumber=t[2],parseInt(i.lineNumber,10)>1e5))throw new S}return{errorClass:(null==e?void 0:e.name)||r,message:(null==e?void 0:e.message)||r,stacktrace:[i],type:"browserjs"}}(e,a)}catch(o){if(o instanceof S)return}}const c=function(t,{userAgent:r,context:i,severity:n,unhandled:o,library:a,hashVersionSandbox:s,sandboxUrl:c,pixelId:l,pixelType:u,runtimeContext:d,shopId:b,initConfig:f,notes:g}){var h,v;const{device:y,os:x,browser:k,engine:S}=function(t){try{return new O.UAParser(t).getResult()}catch(e){return{ua:"",browser:{name:"",version:"",major:""},engine:{name:"",version:""},os:{name:"",version:""},device:{model:"",type:"",vendor:""},cpu:{architecture:""}}}}(r||(null===(h=self.navigator)||void 0===h?void 0:h.userAgent));return{payloadVersion:5,notifier:{name:"web-pixel-manager",version:m,url:"-"},events:[{exceptions:[t],context:i,severity:n,unhandled:o,app:{version:m},device:{manufacturer:y.vendor,model:y.model,osName:x.name,osVersion:x.version,browserName:k.name,browserVersion:k.version},metaData:{app:{library:a,browserTarget:"modern",env:p,hashVersion:w,hashVersionSandbox:s||"N/A",sandboxUrl:c||"N/A"},device:{userAgent:r||(null===(v=self.navigator)||void 0===v?void 0:v.userAgent),renderingEngineName:S.name,renderingEngineVersion:S.version},request:{shopId:b,shopUrl:self.location.href,pixelId:l,pixelType:u,runtimeContext:d},"Additional Notes":{initConfig:JSON.stringify(f),notes:g}}}]}}(s,a),l=R[p];var i;if(!l)return void(null===(i=console)||void 0===i||i.log(`[${p}]`,"Bugsnag notify:",c));fetch(l,{method:"POST",headers:{"Content-Type":"application/json","Bugsnag-Api-Key":"bcbc9f6762da195561967577c2d74ff8","Bugsnag-Payload-Version":"5"},body:JSON.stringify(c)}).catch((()=>{}))}catch(a){}};function N(e,t,r,i=!0){try{const n={...i?Object.getOwnPropertyDescriptor(e,t):{},...r};return Object.defineProperty(e,t,n)}catch(n){return e}}class T extends Error{constructor(...e){super(...e),this.name="InsecureUrlError"}}class C extends Error{constructor(...e){super(...e),this.name="RestrictedUrlError"}}function I(e){const t=new URL(e);if("https:"!==t.protocol)throw new T(`URL must be secure (HTTPS): ${t.href}`);const r=h.host.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&");if(new RegExp(`^https://(.*@)?${r}`,"i").test(t.href))throw new C(`Request are not allowed to the same origin: ${t.href}`);return t}function L(){const e=XMLHttpRequest.prototype.open;return XMLHttpRequest.prototype.open=function(t,r,i=!0,n,o){return e.call(this,t,I(r),i,n,o)},XMLHttpRequest}const M={Request:!1,Response:!1,Headers:!1,XMLHttpRequest:!1,XMLHttpRequestEventTarget:!1,XMLHttpRequestUpload:!1},B={BarcodeDetector:!0,BroadcastChannel:!0,Cache:!0,caches:!0,CustomEvent:!0,FormData:!0,ImageData:!0,NetworkInformation:!0,ServiceWorkerRegistration:!0,WebSocket:!0,Browser:!0,WorkerBrowser:!0,MessageChannel:!0,MessagePort:!0,crypto:!1,Crypto:!1,CryptoKey:!1,SubtleCrypto:!1,TextDecoder:!1,TextDecoderStream:!1,TextEncoder:!1,TextEncoderStream:!1,Request:!1,Response:!1,Headers:!1,indexedDB:!0,IDBCursor:!0,IDBCursorWithValue:!0,IDBDatabase:!0,IDBFactory:!0,IDBIndex:!0,IDBKeyRange:!0,IDBObjectStore:!0,IDBOpenDBRequest:!0,IDBRequest:!0,IDBTransaction:!0,IDBVersionChangeEvent:!0,Navigator:!0,navigator:!0,Notification:!0,NotificationEvent:!0,EventSource:!0,WebGL2RenderingContext:!0,WebGLActiveInfo:!0,WebGLBuffer:!0,WebGLFramebuffer:!0,WebGLProgram:!0,WebGLQuery:!0,WebGLRenderbuffer:!0,WebGLRenderingContext:!0,WebGLSampler:!0,WebGLShader:!0,WebGLShaderPrecisionFormat:!0,WebGLSync:!0,WebGLTexture:!0,WebGLTransformFeedback:!0,WebGLUniformLocation:!0,WebGLVertexArrayObject:!0,Path2D:!0,Worker:!0,WorkerLocation:!0,WorkerNavigator:!0,ServiceWorker:!0,ServiceWorkerContainer:!0,XMLHttpRequest:!0,XMLHttpRequestEventTarget:!0,XMLHttpRequestUpload:!0,ArrayBuffer:!1,Uint8Array:!1,Int8Array:!1,Uint16Array:!1,Int16Array:!1,Uint32Array:!1,Int32Array:!1,Float32Array:!1,Float64Array:!1,Uint8ClampedArray:!1,BigUint64Array:!1,BigInt64Array:!1,DataView:!1,PushSubscriptionOptions:!0,PushSubscription:!0,PushManager:!0,Permissions:!0,PermissionStatus:!0,PeriodicSyncManager:!0,PaymentInstruments:!0,NavigatorUAData:!0,BackgroundFetchRegistration:!0,BackgroundFetchRecord:!0,BackgroundFetchManager:!0,WritableStreamDefaultWriter:!0,WritableStreamDefaultController:!0,WritableStream:!0,ReadableStreamDefaultReader:!0,ReadableStreamDefaultController:!0,ReadableStreamBYOBRequest:!0,ReadableStreamBYOBReader:!0,ReadableStream:!0,ReadableByteStreamController:!0,RTCEncodedVideoFrame:!0,RTCEncodedAudioFrame:!0,RTCDataChannel:!0,RTCTransformEvent:!0,RTCRtpScriptTransformer:!0,OffscreenCanvasRenderingContext2D:!0,OffscreenCanvas:!0,FontFace:!0,FontFaceSet:!0,FileReaderSync:!0,FileReader:!0,FileList:!0,File:!0,FileSystemDirectoryHandle:!0,FileSystemFileHandle:!0,FileSystemHandle:!0,FileSystemWritableFileStream:!0,FileSystemSyncAccessHandle:!0,webkitRequestFileSystem:!0,webkitRequestFileSystemSync:!0,webkitResolveLocalFileSystemSyncURL:!0,webkitResolveLocalFileSystemURL:!0,DOMStringList:!0,DOMRectReadOnly:!0,DOMRect:!0,DOMQuad:!0,DOMPointReadOnly:!0,DOMPoint:!0,DOMMatrixReadOnly:!0,DOMMatrix:!0,DOMException:!0,CompressionStream:!0,Atomics:!0,WebAssembly:!0,AudioData:!0,EncodedAudioChunk:!0,EncodedVideoChunk:!0,ImageTrack:!0,ImageTrackList:!0,VideoColorSpace:!0,VideoFrame:!0,AudioDecoder:!0,AudioEncoder:!0,ImageDecoder:!0,VideoDecoder:!0,VideoEncoder:!0,AudioTrackConfiguration:!0,VideoTrackConfiguration:!0,Lock:!0,LockManager:!0,WebTransport:!0,WebTransportBidirectionalStream:!0,WebTransportDatagramDuplexStream:!0,WebTransportError:!0,Serial:!0,SerialPort:!0,USB:!0,USBAlternateInterface:!0,USBConfiguration:!0,USBConnectionEvent:!0,USBDevice:!0,USBEndpoint:!0,USBInTransferResult:!0,USBInterface:!0,USBIsochronousInTransferPacket:!0,USBIsochronousInTransferResult:!0,USBIsochronousOutTransferPacket:!0,USBIsochronousOutTransferResult:!0,USBOutTransferResult:!0,URL:{createObjectURL:!0}};function P(e,t){let r=e;do{Object.getOwnPropertyNames(r).filter((e=>e in t&&!1!==t[e])).forEach((e=>{try{let i;"object"==typeof t[e]?(i=r[e],P(i,t[e])):i=!0===t[e]?void 0:t[e],N(r,e,{value:i,configurable:!1,enumerable:!1,writable:!1},!1)}catch(i){}})),r=Object.getPrototypeOf(r)}while(r!==Object.prototype)}function U(e,t=self){const r={...e?B:M,fetch:(i=t.fetch,(e,t)=>{const r=new Request(e);return I(r.url),i(r,t)}),XMLHttpRequest:L()};var i;e||(r.addEventListener=function(e){let t=!1;return(r,i,n)=>(t||(console.warn("In a sandboxed environment, addEventListener may not behave as expected."),t=!0),e(r,i,n))}(t.addEventListener)),P(t,r),Object.freeze(String.prototype),Object.freeze(Request.prototype),Object.freeze(URL.prototype),Object.freeze(RegExp.prototype),N(self,"String",{writable:!1,configurable:!1}),N(self,"Request",{writable:!1,configurable:!1}),N(self,"URL",{writable:!1,configurable:!1}),N(self,"RegExp",{writable:!1,configurable:!1})}async function j(e,t=""){const r=new self.Blob([t],{type:"text/plain"});try{return await self.fetch(e,{method:"POST",keepalive:!0,body:r}),!0}catch{return!1}}function D(e){let t=e;return{update:async function(e,r){try{t=r(),t=await e()}catch(i){console.error(i)}return t},getRemote:async function(e){try{t=await e()}catch(r){console.error(r)}return t},getValue:()=>t}}function q(e,t){const r=new Map(Object.keys(e).map((t=>[t,e[t]])));return{getItem:e=>r.get(e)||null,setItem(e,i){t.setItem(e,i),r.set(e,i)},removeItem(e){t.removeItem(e),r.delete(e)},clear(){t.clear(),r.clear()},get length(){return r.size},key(e){var t;return null!==(t=Array.from(r.keys()).find(((t,r)=>r===e)))&&void 0!==t?t:null}}}function F(e){(function({webPixelApi:e,cookie:t,cookieRestrictedDomains:r}){const i=D(t);N(document,"cookie",{get:function(){return i.getRemote(e.browser.cookie.get),i.getValue()},set:function(t){const n=t.split(";").map((e=>e.trim())).find((e=>e.startsWith("domain="))),o=(null==n?void 0:n.split("=")[1])||"";if(!(r.filter((e=>new RegExp(`^\\.?${e}$`).test(o))).length>0)){const r=i.getValue();i.update((()=>e.browser.cookie.set(t)),(()=>function(e,t){const r=e.split("; ").reduce(((e,t)=>{const[r,i]=t.split("=");return i&&(e[r]=i),e}),{}),i=t.split(";")[0],[n,o]=i.split("=");return r[n]=o,Object.keys(r).map((e=>`${e}=${r[e]}`)).join("; ")}(r,t)))}},configurable:!1,enumerable:!1})})(e),function({origin:e,internalApi:t}){const r=D(e);N(window,"origin",{get:function(){return r.getRemote(t.self.origin.get),r.getValue()},configurable:!1,enumerable:!1})}(e),function({referrer:e,internalApi:t}){const r=D(e);N(document,"referrer",{get:()=>(r.getRemote(t.document.referrer.get),r.getValue()),configurable:!1,enumerable:!1})}(e),function({webPixelApi:e,localStorageItems:t}){const r=q(t,e.browser.localStorage);N(window,"localStorage",{get:()=>r,configurable:!1,enumerable:!1})}(e),function({webPixelApi:e,sessionStorageItems:t}){const r=q(t,e.browser.sessionStorage);N(window,"sessionStorage",{get:()=>r,configurable:!1,enumerable:!1})}(e)}const W=function(){try{return self instanceof DedicatedWorkerGlobalScope}catch(e){return!1}}();let _;Object.defineProperty(self,"webPixelsManager",{value:{createShopifyExtend:()=>({extend:async(e,t)=>{if("WebPixel::Render"!==e)throw new v;_=t}})},enumerable:!0,writable:!1});let V=!1;const $=async e=>{const{pageTitle:t,webPixelConfig:r,shopId:i,webPixelApi:n,internalApi:o}=e,s=n.init.context;if(V){const e=new y;throw A(e,{pixelId:r.id,pixelType:r.type,runtimeContext:r.runtimeContext,shopId:i,context:"v0/createSandbox/alreadyInitialized",userAgent:s.navigator.userAgent||self.navigator.userAgent,hashVersionSandbox:w,sandboxUrl:h.href||"unknown"}),e}V=!0,a(n),a(o);try{W&&(n.browser.sendBeacon=j),W||(F(e),self.document.title=t)}catch(c){throw A(c,{pixelId:r.id,pixelType:r.type,runtimeContext:r.runtimeContext,shopId:i,context:"v0/createSandbox/createRestrictedEnvironment",userAgent:s.navigator.userAgent||self.navigator.userAgent,hashVersionSandbox:w,sandboxUrl:h.href||"unknown"}),c}if("function"==typeof self.initWebPixel)try{self.initWebPixel()}catch(c){}try{return await _.call(n,n),{status:"success",hashVersion:w,sandboxUrl:h.href||"unknown"}}catch(c){throw A(c,{pixelId:r.id,pixelType:r.type,runtimeContext:r.runtimeContext,shopId:i,context:"v0/createSandbox/uncaughtError",userAgent:s.navigator.userAgent||self.navigator.userAgent,hashVersionSandbox:w,sandboxUrl:h.href||"unknown"}),c}};!function(){const e=W?"worker":"iframe";try{(function(e,{uuid:t=b,createEncoder:r=d,callable:i}={}){let o=!1,a=e;const s=new Map,c=new Map,l=function(e,t){let r;if(null==t){if("function"!=typeof Proxy)throw new Error("You must pass an array of callable methods in environments without Proxies.");const t=new Map;r=new Proxy({},{get(r,i){if(t.has(i))return t.get(i);const n=e(i);return t.set(i,n),n}})}else{r={};for(const i of t)Object.defineProperty(r,i,{value:e(i),writable:!1,configurable:!0,enumerable:!0})}return r}(m,i),u=r({uuid:t,release(e){f(3,[e])},call(e,r,i){const n=t(),o=w(n,i),[a,s]=u.encode(r);return f(5,[n,e,a],s),o}});return a.addEventListener("message",p),{call:l,replace(e){const t=a;a=e,t.removeEventListener("message",p),e.addEventListener("message",p)},expose(e){for(const t of Object.keys(e)){const r=e[t];"function"==typeof r?s.set(t,r):s.delete(t)}},callable(...e){if(null!=i)for(const t of e)Object.defineProperty(l,t,{value:m(t),writable:!1,configurable:!0,enumerable:!0})},terminate(){f(2,void 0),g(),a.terminate&&a.terminate()}};function f(e,t,r){o||a.postMessage(t?[e,t]:[e],r)}async function p(e){const{data:t}=e;if(null!=t&&Array.isArray(t))switch(t[0]){case 2:g();break;case 0:{const e=new n,[i,o,a]=t[1],c=s.get(o);try{if(null==c)throw new Error(`No '${o}' method is exposed on this endpoint`);const[t,r]=u.encode(await c(...u.decode(a,[e])));f(1,[i,void 0,t],r)}catch(r){const{name:e,message:t,stack:n}=r;throw f(1,[i,{name:e,message:t,stack:n}]),r}finally{e.release()}break}case 1:{const[e]=t[1];c.get(e)(...t[1]),c.delete(e);break}case 3:{const[e]=t[1];u.release(e);break}case 6:{const[e]=t[1];c.get(e)(...t[1]),c.delete(e);break}case 5:{const[e,i,n]=t[1];try{const t=await u.call(i,n),[r,o]=u.encode(t);f(6,[e,void 0,r],o)}catch(r){const{name:t,message:i,stack:n}=r;throw f(6,[e,{name:t,message:i,stack:n}]),r}break}}}function m(e){return(...r)=>{if(o)return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));if("string"!=typeof e&&"number"!=typeof e)return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));const i=t(),n=w(i),[a,s]=u.encode(r);return f(0,[i,e,a],s),n}}function w(e,t){return new Promise(((r,i)=>{c.set(e,((e,n,o)=>{if(null==n)r(o&&u.decode(o,t));else{const e=new Error;Object.assign(e,n),i(e)}}))}))}function g(){var e;o=!0,s.clear(),c.clear(),null===(e=u.terminate)||void 0===e||e.call(u),a.removeEventListener("message",p)}})(W?self:function({targetOrigin:e="*"}={}){if("undefined"==typeof self||null==self.parent)throw new Error("This does not appear to be a child iframe, because there is no parent window.");const{parent:t}=self,r=()=>t.postMessage(l,e);window.addEventListener("message",(e=>{e.source===t&&"complete"===document.readyState&&e.data===l&&r()})),"complete"===document.readyState?r():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&r()}));const i=new WeakMap;return{postMessage(r,i){t.postMessage(r,e,i)},addEventListener(e,r){const n=e=>{e.source===t&&r(e)};i.set(r,n),self.addEventListener(e,n)},removeEventListener(e,t){const r=i.get(t);null!=r&&(i.delete(t),self.removeEventListener(e,r))}}}(),{callable:[]}).expose({initialize:$})}catch(t){A(t,{context:`v0/createSandbox/${e}`})}U(W)}()})()})();
</script>

  </head>
  <body></body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Kawasaki Disease</a>
        </li>
        <li id="ab55c068539f4550b8f2e9978d2bceb4">
            <a class="c-mega-nav__link   " href="/en/health-topics/metabolic-syndrome" DisableWebEdit="True" role="menuitem">Metabolic Syndrome</a>
        </li>
        <li id="7d0bcbc19ff34fb598ba651ebc7a5c15">
            <a class="c-mega-nav__link   " href="/en/health-topics/myocarditis" DisableWebEdit="True" role="menuitem">Myocarditis</a>
        </li>
        <li id="a22b3ef275334cacb46deb64593e1eb1">
            <a class="c-mega-nav__link   " href="/en/health-topics/pericarditis" DisableWebEdit="True" role="menuitem">Pericarditis</a>
        </li>
        <li id="81dc17f1418d43daa6d6fdfd0d1f0235">
            <a class="c-mega-nav__link   " href="/en/health-topics/peripheral-artery-disease" DisableWebEdit="True" role="menuitem">Peripheral Artery Disease</a>
        </li>
        <li id="b448d02d73ed460ab843edb93526f610">
            <a class="c-mega-nav__link   " href="/en/health-topics/sleep-disorders" DisableWebEdit="True" role="menuitem">Sleep Disorders</a>
        </li>
        <li id="e5c6f5df28624c67b2953484534ae601">
            <a class="c-mega-nav__link   " href="https://www.stroke.org/en/" DisableWebEdit="True" role="menuitem">Stroke</a>
        </li>
        <li id="4707ec94ab144df288d553c3f2ceb982">
            <a class="c-mega-nav__link   " href="/en/health-topics/venous-thromboembolism" DisableWebEdit="True" role="menuitem">Venous Thromboembolism</a>
        </li>
</ul>

                                            </li>
                                            <li id="b590a901fde2418782b3c4f7c603cb56" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/health-topics/caregiver-support" DisableWebEdit="True" role="menuitem">Caregiver Support</a>
                                            </li>
                                            <li id="bf3c6e54dc714d19a3e36049e990dbad" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/health-topics/consumer-healthcare" DisableWebEdit="True" role="menuitem">Consumer Health Care</a>
                                            </li>
                                            <li id="e76a478b17be4b1291f23709f8ca1f63" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://supportnetwork.heart.org/" DisableWebEdit="True" role="menuitem">Support Network</a>
                                            </li>
                                    </ul>
                                </div>
                            </template>
                        </aha-nav-dropdown>
                    </li>
                    <li class="c-main-nav__item c-mega-nav " id="{FB18B5A0-8FBD-412A-8491-AB790F165FE2}" data-aha-nav="">
                        <aha-nav-dropdown position="none" extra-classes="c-top-nav__link c-cta c-cta--icon c-underline-nav-link dropdown-toggle">
                            <span class="c-underline-link">
                                Professionals
                            </span>
                            <template slot="dropdown">
                                <div class="container container-fluid container-wide">
                                    <ul class="c-mega-nav__container" role="menu">
                                            <li id="a7290296995a4aea8c6dc4d0d3970e5c" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/professional" DisableWebEdit="True" role="menuitem">Professional Resources</a>
                                            </li>
                                            <li id="4155704d65aa47578606fe9c826d0fb9" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://professional.heart.org/en/" DisableWebEdit="True" role="menuitem">Professional Heart Daily</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{4155704D-65AA-4757-8606-FE9C826D0FB9}">
        <li id="a5d2df9f4e6a4f67b3ffa9fe0c504a84">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/research-programs" DisableWebEdit="True" role="menuitem">Research</a>
        </li>
        <li id="16754f51bc7c47f9b5ecd4ddd03ca493">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/partners" DisableWebEdit="True" role="menuitem">Professional Membership</a>
        </li>
        <li id="d6652463efe444bf9e9b3cde9d87c11a">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/meetings" DisableWebEdit="True" role="menuitem">Meetings</a>
        </li>
        <li id="16d34afb5452476b8486f03d006af2bf">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/education" DisableWebEdit="True" role="menuitem">Education</a>
        </li>
        <li id="aa8df8baba2c4532a7ab76b605406e76">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/guidelines-and-statements" DisableWebEdit="True" role="menuitem">Guidelines &amp; Statements</a>
        </li>
        <li id="a601cfd7f1a34d45b740f4eb74ddcbdc">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/journals" DisableWebEdit="True" role="menuitem">Journals</a>
        </li>
        <li id="7f28f0c42f044f55ab802e5a743c368f">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/communities" DisableWebEdit="True" role="menuitem">Communities</a>
        </li>
        <li id="bc3137abf27f4b4794764ebbe0e96806">
            <a class="c-mega-nav__link   " href="https://professional.heart.org/en/science-news" DisableWebEdit="True" role="menuitem">Science News</a>
        </li>
</ul>

                                            </li>
                                            <li id="3dfc748bd8fd438794a9004aa1682713" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/professional/quality-improvement" DisableWebEdit="True" role="menuitem">Quality Improvement</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{3DFC748B-D8FD-4387-94A9-004AA1682713}">
        <li id="e3068962515e42eda50283529b7800ec">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/get-with-the-guidelines" DisableWebEdit="True" role="menuitem">Get With The Guidelines<sup>&reg;</sup></a>
        </li>
        <li id="d834769b1574498cbe67a694eecd5b70">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/mission-lifeline" DisableWebEdit="True" role="menuitem">Mission: Lifeline<sup>&reg;</sup></a>
        </li>
        <li id="c5560d9bd8c04a7eb69985999131fb10">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/healthcare-certification" DisableWebEdit="True" role="menuitem">Healthcare Certification</a>
        </li>
        <li id="95f156ce1b1f4280b919cc19b803db90">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/outpatient" DisableWebEdit="True" role="menuitem">Outpatient Quality Improvement</a>
        </li>
        <li id="6c66c65761f346e3a7bc47cb87b10236">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/international" DisableWebEdit="True" role="menuitem">International Quality Care</a>
        </li>
        <li id="e2a8bc0598b845cebf82b75580a5ed92">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/quality-research-and-publications" DisableWebEdit="True" role="menuitem">Research and Publications</a>
        </li>
        <li id="2584e880fc4349c0a1ead53abbb5690f">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/target-heart-failure" DisableWebEdit="True" role="menuitem">Target: Heart Failure℠</a>
        </li>
        <li id="b7d90a6fcb7a4217af495a09681ab995">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/target-stroke" DisableWebEdit="True" role="menuitem">Target: Stroke℠</a>
        </li>
        <li id="c61f5d80338942288bd34aa9e884f616">
            <a class="c-mega-nav__link   " title="Target: Aortic Stenosis® " href="/en/professional/quality-improvement/target-aortic-stenosis" DisableWebEdit="True" role="menuitem">Target: Aortic Stenosis&trade;</a>
        </li>
        <li id="a502bb0f9f5a48edbee8c10e407933b6">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/hemorrhagic-stroke" DisableWebEdit="True" role="menuitem">Hemorrhagic Stroke Initiative</a>
        </li>
        <li id="a4d7e49782a54751aaab88f5d03d2dfc">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/mitral-valve-foundation" DisableWebEdit="True" role="menuitem">Mitral Valve Reference Center Award</a>
        </li>
        <li id="464423854a31497a8a1d79dbbab38b1c">
            <a class="c-mega-nav__link   " href="/en/professional/quality-improvement/rural-healthcare-outcomes-accelerator" DisableWebEdit="True" role="menuitem">Rural Health Care Outcomes Accelerator</a>
        </li>
</ul>

                                            </li>
                                            <li id="ca5e8d0095f1432fbdbad8e584356eee" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/professional/educator" DisableWebEdit="True" role="menuitem">Educators and Parents</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{CA5E8D00-95F1-432F-BDBA-D8E584356EEE}">
        <li id="104e0812ea6243a196859296fa272b82">
            <a class="c-mega-nav__link   " title="Kids Health Initiatives " href="/en/professional/educator/kids-health-initiatives" DisableWebEdit="True" role="menuitem">Kids Health Initiatives</a>
        </li>
        <li id="249b3b4b46514a40a38f4efa562baa4e">
            <a class="c-mega-nav__link   " href="/en/professional/educator/school-programs" DisableWebEdit="True" role="menuitem">School Programs</a>
        </li>
        <li id="3645544491bc411aa7ae1c80c7e909c2">
            <a class="c-mega-nav__link   " href="/en/professional/educator/nfl-play-60" DisableWebEdit="True" role="menuitem">NFL PLAY 60</a>
        </li>
        <li id="233a3ca39c644c39a899e032fbfbe314">
            <a class="c-mega-nav__link   " href="/en/professional/educator/teaching-gardens" DisableWebEdit="True" role="menuitem">Teaching Gardens</a>
        </li>
</ul>

                                            </li>
                                            <li id="051602216ff0428191fe3971fd48413d" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://nhci.heart.org/" DisableWebEdit="True" role="menuitem">National Hypertension Control Initiative</a>
                                            </li>
                                            <li id="9618ace41ebf474c94228df4d0e69618" class="" role="presentation">
                                                <a class="c-mega-nav__header  " title="Presentamos la Iniciativa Nacional de Control de la Hipertension" href="https://nhci.heart.org/es/" DisableWebEdit="True" role="menuitem">La Iniciativa Nacional de Control de la Hipertensi&oacute;n</a>
                                            </li>
                                            <li id="5ee11b353530409fa167c3b5c715db34" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://healthcarexfood.org" DisableWebEdit="True" role="menuitem">Food is Medicine Initiative</a>
                                            </li>
                                            <li id="08bfcbae61004398b9c3dc7a1a54393b" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/professional/million-hearts" DisableWebEdit="True" role="menuitem">Million Hearts Collaboration&reg;</a>
                                            </li>
                                            <li id="547970d55c9d4f8394b1f2372385e9e6" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/professional/doctors-with-heart" DisableWebEdit="True" role="menuitem">Doctors With Heart</a>
                                            </li>
                                            <li id="5bdffe6f1b4542678d05b0b0067c84d6" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/professional/datascience" DisableWebEdit="True" role="menuitem">Data Science</a>
                                            </li>
                                    </ul>
                                </div>
                            </template>
                        </aha-nav-dropdown>
                    </li>
                    <li class="c-main-nav__item c-mega-nav " id="{86B94346-5E06-4ABD-A6AE-8B0FC118203F}" data-aha-nav="">
                        <aha-nav-dropdown position="none" extra-classes="c-top-nav__link c-cta c-cta--icon c-underline-nav-link dropdown-toggle">
                            <span class="c-underline-link">
                                Get Involved
                            </span>
                            <template slot="dropdown">
                                <div class="container container-fluid container-wide">
                                    <ul class="c-mega-nav__container" role="menu">
                                            <li id="52a8f0ef089a4efcb6eb1b69f2d3fa23" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/get-involved" DisableWebEdit="True" role="menuitem">Get Involved</a>
                                            </li>
                                            <li id="c6261d59ffc74bb48596dfaa6a30d5f1" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/volunteer" DisableWebEdit="True" role="menuitem">Volunteer</a>
                                            </li>
                                            <li id="747f330326714a668f90e88e18bf0e1e" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/get-involved/find-an-event-near-you" DisableWebEdit="True" role="menuitem">Find an Event Near You</a>
                                            </li>
                                            <li id="09ed2276a2cd4cd3a83f36d11cb04566" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/get-involved/advocate" DisableWebEdit="True" role="menuitem">Advocate</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{09ED2276-A2CD-4CD3-A83F-36D11CB04566}">
        <li id="fc369a76a2984a74b1d66a425f8ee495">
            <a class="c-mega-nav__link   " href="/en/get-involved/advocate/federal-priorities" DisableWebEdit="True" role="menuitem">Federal Priorities</a>
        </li>
        <li id="acc33b44003e4c9a9d0238ba6630e243">
            <a class="c-mega-nav__link   " href="/en/get-involved/advocate/state-issues" DisableWebEdit="True" role="menuitem">State Issues</a>
        </li>
        <li id="c1b5249cdf17481faa3bdaaa749ca9b3">
            <a class="c-mega-nav__link   " href="/en/get-involved/advocate" DisableWebEdit="True" role="menuitem">Heart on the Hill</a>
        </li>
        <li id="b0454782da3c4eebb4c2b5dfad7c4af6">
            <a class="c-mega-nav__link   " href="/en/get-involved/advocate/media-advocacy" DisableWebEdit="True" role="menuitem">Media Advocacy</a>
        </li>
        <li id="45917d3e5035453e9b7e1b4dead6c826">
            <a class="c-mega-nav__link   " href="/en/get-involved/advocate/policy-research" DisableWebEdit="True" role="menuitem">Policy Research</a>
        </li>
</ul>

                                            </li>
                                            <li id="4e31992d2d0e4a8193823ea6884e888c" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://www.goredforwomen.org/en/" DisableWebEdit="True" role="menuitem">Go Red For Women</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{4E31992D-2D0E-4A81-9382-3EA6884E888C}">
        <li id="345f4b94291d4723bbea52d4408237c2">
            <a class="c-mega-nav__link   " href="https://www.projectbaseline.com/gored/" DisableWebEdit="True" role="menuitem">Research Goes Red</a>
        </li>
</ul>

                                            </li>
                                            <li id="56ff0ca7d2674f80b3b85ddb8e2813ed" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/get-involved/ways-to-give/for-companies" DisableWebEdit="True" role="menuitem">For Companies</a>
                                            </li>
                                    </ul>
                                </div>
                            </template>
                        </aha-nav-dropdown>
                    </li>
                    <li class="c-main-nav__item c-mega-nav " id="{A157F473-EAF9-441D-A870-38DA8A1E7AE1}" data-aha-nav="">
                        <aha-nav-dropdown position="none" extra-classes="c-top-nav__link c-cta c-cta--icon c-underline-nav-link dropdown-toggle">
                            <span class="c-underline-link">
                                Ways to Give
                            </span>
                            <template slot="dropdown">
                                <div class="container container-fluid container-wide">
                                    <ul class="c-mega-nav__container" role="menu">
                                            <li id="4c6701795224483484e44aefc7c5b87c" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/get-involved/ways-to-give" DisableWebEdit="True" role="menuitem">Ways to Give</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{4C670179-5224-4834-84E4-4AEFC7C5B87C}">
        <li id="e635a36d71f74c138bd5d43e69fab801">
            <a class="c-mega-nav__link   " title="Monthly Giving Saves Lives" href="/en/get-involved/ways-to-give/monthly-giving-saves-lives" DisableWebEdit="True" role="menuitem">Monthly Giving As Seen On TV</a>
        </li>
        <li id="7e73ff22c1e546d59831afc881de9de8">
            <a class="c-mega-nav__link   " title="Honor a Loved One" href="https://mygiving.heart.org/-/XCBTSYZR" DisableWebEdit="True" role="menuitem">Honor a Loved One</a>
        </li>
        <li id="d2010a21261e478fbc1c1f327377e631">
            <a class="c-mega-nav__link   " title="Memorial Gifts" href="https://mygiving.heart.org/-/XTPMHHQM" DisableWebEdit="True" role="menuitem">Make a Memorial Gift</a>
        </li>
        <li id="961bd994114a4632857c5feaa6cb1d2f">
            <a class="c-mega-nav__link   " href="https://ahatribute.funraise.org/" DisableWebEdit="True" role="menuitem">Create a Tribute Page</a>
        </li>
        <li id="d8f0b7f0aa5d48c4abf5d5b3f0d81421">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/wills-trusts-annuities/ways-to-gift/stock-gifts-and-mutual-funds" DisableWebEdit="True" role="menuitem">Gifts of Stock and Mutual Funds</a>
        </li>
        <li id="9958da63c0da49f99fbe579734aa9394">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/cryptocurrency" DisableWebEdit="True" role="menuitem">Make a Crypto Gift</a>
        </li>
        <li id="fcf7763422f24af79b9d951ef7b77b72">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/wills-trusts-annuities/donor-advised-fund" DisableWebEdit="True" role="menuitem">Donor Advised Fund</a>
        </li>
        <li id="eff5d192b32449c9b3147a2d3648f389">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/wills-trusts-annuities" DisableWebEdit="True" role="menuitem">Wills Trusts and Annuities</a>
        </li>
        <li id="2d05e822ff704718baab8ab30635b93c">
            <a class="c-mega-nav__link   " target="|Custom" href="/en/get-involved/ways-to-give/for-companies/fundraising-events" DisableWebEdit="True" role="menuitem">Fundraising Events</a>
        </li>
        <li id="7b752ff10acf409185a224329e93a349">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/cor-vitae-society" DisableWebEdit="True" role="menuitem">Cor Vitae Society</a>
        </li>
        <li id="c9141ed935f24d3e94d0699c993e7f42">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/wills-trusts-annuities/paul-dudley-white-legacy-society" DisableWebEdit="True" role="menuitem">Paul Dudley White Legacy Society</a>
        </li>
        <li id="a5c2b21ff74945c8bc75684b686e08ec">
            <a class="c-mega-nav__link   " href="https://raiseyourwayforaha.funraise.org/" DisableWebEdit="True" role="menuitem">Raise Your Way</a>
        </li>
        <li id="3fe39710bc8b45c2b8c5273f8e58a6d3">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/social-impact-fund" DisableWebEdit="True" role="menuitem">Social Impact Funds</a>
        </li>
        <li id="9812d5328e874f2aaae79b0e2ba22357">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/heritage-brick-walk" DisableWebEdit="True" role="menuitem">Heritage Brick Walk</a>
        </li>
        <li id="a4211adc62614a14b544ba8fd2a9ef6a">
            <a class="c-mega-nav__link   " href="/en/get-involved/ways-to-give/life-is-why" DisableWebEdit="True" role="menuitem">Retail Supporters</a>
        </li>
        <li id="d914773e7b95420880621d27527b5f74">
            <a class="c-mega-nav__link   " href="https://www2.heart.org/site/SPageNavigator/khc_resources_search.html" DisableWebEdit="True" role="menuitem">Kids Heart Challenge</a>
        </li>
        <li id="4122ab8e11ac4e879cb3f2d7ec39769b">
            <a class="c-mega-nav__link   " href="https://www2.heart.org/site/SPageNavigator/ahc_resources_search.html" DisableWebEdit="True" role="menuitem">American Heart Challenge</a>
        </li>
</ul>

                                            </li>
                                    </ul>
                                </div>
                            </template>
                        </aha-nav-dropdown>
                    </li>
                    <li class="c-main-nav__item c-mega-nav " id="{FB81E164-4724-47DA-8389-65259CF2DE1B}" data-aha-nav="">
                        <aha-nav-dropdown position="none" extra-classes="c-top-nav__link c-cta c-cta--icon c-underline-nav-link dropdown-toggle">
                            <span class="c-underline-link">
                                About Us
                            </span>
                            <template slot="dropdown">
                                <div class="container container-fluid container-wide">
                                    <ul class="c-mega-nav__container" role="menu">
                                            <li id="358e0a4472974d7592528b7c5531f25f" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/about-us" DisableWebEdit="True" role="menuitem">About Us</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{358E0A44-7297-4D75-9252-8B7C5531F25F}">
        <li id="957dc1fe69fb4d98b6b0f5238567f47d">
            <a class="c-mega-nav__link   " href="/en/about-us/history-of-the-american-heart-association" DisableWebEdit="True" role="menuitem">Our Lifesaving History</a>
        </li>
        <li id="195bb9d7c373411eaaf6c010f1571b01">
            <a class="c-mega-nav__link   " href="/en/impact-map" DisableWebEdit="True" role="menuitem">Our Impact</a>
        </li>
        <li id="8f433419216a4f178a38889fa6ef9f0f">
            <a class="c-mega-nav__link   " href="/en/healthy-living/live-fierce/live-fierce-stand-for-all" DisableWebEdit="True" role="menuitem">Equitable Health for All</a>
        </li>
        <li id="450a837032d44314a5532312e2f478af">
            <a class="c-mega-nav__link   " href="/en/about-us/2024-health-equity-impact-goal" DisableWebEdit="True" role="menuitem">2024 Health Equity Impact Goal</a>
        </li>
        <li id="513164d44d6b41ec8d71fcc74fbf055a">
            <a class="c-mega-nav__link   " href="https://ceoroundtable.heart.org/" DisableWebEdit="True" role="menuitem">CEO Roundtable</a>
        </li>
        <li id="bcbad66b86174205a391812c0b31c9e9">
            <a class="c-mega-nav__link   " href="/en/about-us/scientific-research" DisableWebEdit="True" role="menuitem">Scientific Research</a>
        </li>
        <li id="6adab71fa8ac4546923a88ce43ebaf0c">
            <a class="c-mega-nav__link   " title="Value in Healthcare Initiative" href="/en/value-in-healthcare-initiative" DisableWebEdit="True" role="menuitem">Value in Healthcare Initiative</a>
        </li>
        <li id="45feebce8ff24939a82b59cf6b8557a9">
            <a class="c-mega-nav__link   " href="/en/about-us/aha-financial-information" DisableWebEdit="True" role="menuitem">AHA Financial Information</a>
        </li>
        <li id="7d9d559938d546e3b78174ec3a251179">
            <a class="c-mega-nav__link   " href="/en/about-us/the-heart-enterprise" DisableWebEdit="True" role="menuitem">AHA Family of Entities</a>
        </li>
</ul>

                                            </li>
                                            <li id="fee10b65db0247ca924dd5e89445b2cf" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/about-us/office-of-health-equity" DisableWebEdit="True" role="menuitem">Office of Health Equity</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{FEE10B65-DB02-47CA-924D-D5E89445B2CF}">
        <li id="e9237ee6351c4fc691276ea1220632dd">
            <a class="c-mega-nav__link   " href="/en/about-us/office-of-health-equity/social-impact-funds/bernard-j-tyson-fund" DisableWebEdit="True" role="menuitem">Bernard  J. Tyson Impact Fund</a>
        </li>
        <li id="a0a1c1f21c5b46acada0e4b2b5637fb3">
            <a class="c-mega-nav__link   " href="/en/about-us/diversity-inclusion" DisableWebEdit="True" role="menuitem">Diversity and Inclusion</a>
        </li>
        <li id="1a53af54e5fc412facd55ea39db18336">
            <a class="c-mega-nav__link   " href="https://www.empoweredtoserve.org/en/" DisableWebEdit="True" role="menuitem">EmPOWERED to Serve</a>
        </li>
        <li id="abc8e9fb4e484305bd5d87a55bfb4b8e">
            <a class="c-mega-nav__link   " href="https://www.empoweredtoserve.org/en/health-ecosystems" DisableWebEdit="True" role="menuitem">Health Ecosystems</a>
        </li>
        <li id="820b4aaa2a344068b517515d377fb22a">
            <a class="c-mega-nav__link   " href="/en/about-us/office-of-health-equity/social-impact-funds" DisableWebEdit="True" role="menuitem">Social Impact Funds</a>
        </li>
        <li id="551b97abffd746d6832fc684dba07ff5">
            <a class="c-mega-nav__link   " href="/en/healthy-living/company-collaboration/well-being-works-better/health-equity-in-the-workforce" DisableWebEdit="True" role="menuitem">Health Equity in the Workforce</a>
        </li>
</ul>

                                            </li>
                                            <li id="92c2a8e8d49340df91bc65f1b5bcec36" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/news" DisableWebEdit="True" role="menuitem">Heart &amp; Stroke News</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{92C2A8E8-D493-40DF-91BC-65F1B5BCEC36}">
        <li id="6a09b94e5fbf41de8d6adbc27a80aa28">
            <a class="c-mega-nav__link   " href="/en/news/news-in-spanish" DisableWebEdit="True" role="menuitem">Noticias en espa&ntilde;ol</a>
        </li>
        <li id="db9d775573484e6ba3735e218fea114b">
            <a class="c-mega-nav__link   " href="/en/about-us/editorial-guidelines" DisableWebEdit="True" role="menuitem">Content Editorial Guidelines</a>
        </li>
</ul>

                                            </li>
                                            <li id="8bfa9d5d94db461bb80d03031302e91d" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/get-involved/advocate/policy-research" DisableWebEdit="True" role="menuitem">Policy Research</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{8BFA9D5D-94DB-461B-B80D-03031302E91D}">
        <li id="ba4bad4e2a744a33bc904cbb2ccd4b2d">
            <a class="c-mega-nav__link   " href="/en/get-involved/advocate/policy-research/advocacy-fact-sheets" DisableWebEdit="True" role="menuitem">Advocacy Fact Sheets</a>
        </li>
        <li id="0486737703b647aaa8c33d2044af58f6">
            <a class="c-mega-nav__link   " href="/en/get-involved/advocate/policy-research/our-policy-positions" DisableWebEdit="True" role="menuitem">Policy Positions</a>
        </li>
</ul>

                                            </li>
                                            <li id="4ce0102c8ffb486bbfb62629019b5e0f" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/about-us/international-programs" DisableWebEdit="True" role="menuitem">International Programs</a>




<ul class="c-mega-nav__links c-mega-nav__links--columns" area-labelledby="{4CE0102C-8FFB-486B-BFB6-2629019B5E0F}">
        <li id="93b9fdf5644d4458ad540609dd503a50">
            <a class="c-mega-nav__link   " title="International Gold Standard Conference" href="/en/about-us/international-programs/international-gold-standard-confidence" DisableWebEdit="True" role="menuitem">International Gold Standard Confidence</a>
        </li>
        <li id="60a1943103ee4c4395521b6aec2e2fcc">
            <a class="c-mega-nav__link   " href="/en/about-us/international-programs/aiims" DisableWebEdit="True" role="menuitem">CPR Lifesavers in India</a>
        </li>
</ul>

                                            </li>
                                            <li id="81c4e95e93cd4095adc2f2086835fd41" class="" role="presentation">
                                                <a class="c-mega-nav__header  " title="Podcast Network" href="/en/podcast-network" DisableWebEdit="True" role="menuitem">Podcast Network</a>
                                            </li>
                                            <li id="ff8ddf37cf7f4bd783024a0542a70169" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://newsroom.heart.org" DisableWebEdit="True" role="menuitem">Media Newsroom</a>
                                            </li>
                                            <li id="8a778b736fa34b92b5fb218a7f516580" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://heart.jobs/?utm_campaign=heart.org-TopNav&amp;vs=2896&amp;utm_medium=Other&amp;utm_source=heart.org-TopNav" DisableWebEdit="True" role="menuitem">Career Opportunities</a>
                                            </li>
                                            <li id="3fb02b7401b54196969ce55b30d98f67" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/about-us/2022-2023-annual-report" DisableWebEdit="True" role="menuitem">Annual Report</a>
                                            </li>
                                            <li id="58f57861c94d4043a1576a851baf2787" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="/en/about-us/contact-us" DisableWebEdit="True" role="menuitem">Contact Us</a>
                                            </li>
                                    </ul>
                                </div>
                            </template>
                        </aha-nav-dropdown>
                    </li>
                    <li class="c-main-nav__item c-mega-nav " id="{C8D154D9-5908-4BCA-90B5-5A08AAF9F4DB}" data-aha-nav="">
                        <aha-nav-dropdown position="none" extra-classes="c-top-nav__link c-cta c-cta--icon c-underline-nav-link dropdown-toggle">
                            <span class="c-underline-link">
                                CPR
                            </span>
                            <template slot="dropdown">
                                <div class="container container-fluid container-wide">
                                    <ul class="c-mega-nav__container" role="menu">
                                            <li id="371d3871a4bc4b1c9c6cc07a5a2166f1" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://cpr.heart.org/en/" DisableWebEdit="True" role="menuitem">CPR and First Aid</a>
                                            </li>
                                            <li id="d09ef390ac934cc7915e754e05078bfc" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://ahainstructornetwork.americanheart.org/AHAECC/classConnector.jsp?pid=ahaecc.classconnector.home" DisableWebEdit="True" role="menuitem">Find A Training Center</a>
                                            </li>
                                            <li id="089bf2a80d534a2cbeab58192859320a" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://cpr.heart.org/en/course-catalog-search" DisableWebEdit="True" role="menuitem">Find A Course</a>
                                            </li>
                                            <li id="b10266a489654d0bb6a45364eb3bf6b4" class="" role="presentation">
                                                <a class="c-mega-nav__header  " href="https://cpr.heart.org/en/course-catalog-search/purchase-options" DisableWebEdit="True" role="menuitem">CPR Purchase Options</a>
                                            </li>
                                    </ul>
                                </div>
                            </template>
                        </aha-nav-dropdown>
                    </li>
        </ul>
        <!-- End Cache-->



                <ul>
                    
                        <li class="c-main-nav__item">
                            <aha-location-selector name="location-selector"
                                                   search-endpoint="/affiliatesearch/search"
                                                   :translations='{ "search": " Search",
                                               "or": "or",
                                               "searchResults": "Search results for",
                                               "clearResults": "Clear Results",
                                               "offices": "Offices",
                                               "address": "Address",
                                               "city": "City",
                                               "state": "State",
                                               "noResults": "The zip code you provided can&#39;t be found, please try another zip code.",
                                               "zipCode": "Zip Code" }'
                                                   :states='[{&quot;code&quot;:&quot;AL&quot;,&quot;title&quot;:&quot;Alabama&quot;},{&quot;code&quot;:&quot;AK&quot;,&quot;title&quot;:&quot;Alaska&quot;},{&quot;code&quot;:&quot;AZ&quot;,&quot;title&quot;:&quot;Arizona&quot;},{&quot;code&quot;:&quot;AR&quot;,&quot;title&quot;:&quot;Arkansas&quot;},{&quot;code&quot;:&quot;CA&quot;,&quot;title&quot;:&quot;California&quot;},{&quot;code&quot;:&quot;CO&quot;,&quot;title&quot;:&quot;Colorado&quot;},{&quot;code&quot;:&quot;CT&quot;,&quot;title&quot;:&quot;Connecticut&quot;},{&quot;code&quot;:&quot;DE&quot;,&quot;title&quot;:&quot;Delaware&quot;},{&quot;code&quot;:&quot;DC&quot;,&quot;title&quot;:&quot;District of Columbia&quot;},{&quot;code&quot;:&quot;FL&quot;,&quot;title&quot;:&quot;Florida&quot;},{&quot;code&quot;:&quot;GA&quot;,&quot;title&quot;:&quot;Georgia&quot;},{&quot;code&quot;:&quot;HI&quot;,&quot;title&quot;:&quot;Hawaii&quot;},{&quot;code&quot;:&quot;ID&quot;,&quot;title&quot;:&quot;Idaho&quot;},{&quot;code&quot;:&quot;IL&quot;,&quot;title&quot;:&quot;Illinois&quot;},{&quot;code&quot;:&quot;IN&quot;,&quot;title&quot;:&quot;Indiana&quot;},{&quot;code&quot;:&quot;IA&quot;,&quot;title&quot;:&quot;Iowa&quot;},{&quot;code&quot;:&quot;KS&quot;,&quot;title&quot;:&quot;Kansas&quot;},{&quot;code&quot;:&quot;KY&quot;,&quot;title&quot;:&quot;Kentucky&quot;},{&quot;code&quot;:&quot;LA&quot;,&quot;title&quot;:&quot;Louisiana&quot;},{&quot;code&quot;:&quot;ME&quot;,&quot;title&quot;:&quot;Maine&quot;},{&quot;code&quot;:&quot;MD&quot;,&quot;title&quot;:&quot;Maryland&quot;},{&quot;code&quot;:&quot;MA&quot;,&quot;title&quot;:&quot;Massachusetts&quot;},{&quot;code&quot;:&quot;MI&quot;,&quot;title&quot;:&quot;Michigan&quot;},{&quot;code&quot;:&quot;MN&quot;,&quot;title&quot;:&quot;Minnesota&quot;},{&quot;code&quot;:&quot;MS&quot;,&quot;title&quot;:&quot;Mississippi&quot;},{&quot;code&quot;:&quot;MO&quot;,&quot;title&quot;:&quot;Missouri&quot;},{&quot;code&quot;:&quot;MT&quot;,&quot;title&quot;:&quot;Montana&quot;},{&quot;code&quot;:&quot;NE&quot;,&quot;title&quot;:&quot;Nebraska&quot;},{&quot;code&quot;:&quot;NV&quot;,&quot;title&quot;:&quot;Nevada&quot;},{&quot;code&quot;:&quot;NH&quot;,&quot;title&quot;:&quot;New Hampshire&quot;},{&quot;code&quot;:&quot;NJ&quot;,&quot;title&quot;:&quot;New Jersey&quot;},{&quot;code&quot;:&quot;NM&quot;,&quot;title&quot;:&quot;New Mexico&quot;},{&quot;code&quot;:&quot;NY&quot;,&quot;title&quot;:&quot;New York&quot;},{&quot;code&quot;:&quot;NC&quot;,&quot;title&quot;:&quot;North Carolina&quot;},{&quot;code&quot;:&quot;ND&quot;,&quot;title&quot;:&quot;North Dakota&quot;},{&quot;code&quot;:&quot;OH&quot;,&quot;title&quot;:&quot;Ohio&quot;},{&quot;code&quot;:&quot;OK&quot;,&quot;title&quot;:&quot;Oklahoma&quot;},{&quot;code&quot;:&quot;OR&quot;,&quot;title&quot;:&quot;Oregon&quot;},{&quot;code&quot;:&quot;PA&quot;,&quot;title&quot;:&quot;Pennsylvania&quot;},{&quot;code&quot;:&quot;PR&quot;,&quot;title&quot;:&quot;Puerto Rico&quot;},{&quot;code&quot;:&quot;RI&quot;,&quot;title&quot;:&quot;Rhode Island&quot;},{&quot;code&quot;:&quot;SC&quot;,&quot;title&quot;:&quot;South Carolina&quot;},{&quot;code&quot;:&quot;SD&quot;,&quot;title&quot;:&quot;South Dakota&quot;},{&quot;code&quot;:&quot;TN&quot;,&quot;title&quot;:&quot;Tennessee&quot;},{&quot;code&quot;:&quot;TX&quot;,&quot;title&quot;:&quot;Texas&quot;},{&quot;code&quot;:&quot;UT&quot;,&quot;title&quot;:&quot;Utah&quot;},{&quot;code&quot;:&quot;VT&quot;,&quot;title&quot;:&quot;Vermont&quot;},{&quot;code&quot;:&quot;VA&quot;,&quot;title&quot;:&quot;Virginia&quot;},{&quot;code&quot;:&quot;WA&quot;,&quot;title&quot;:&quot;Washington&quot;},{&quot;code&quot;:&quot;WV&quot;,&quot;title&quot;:&quot;West Virginia&quot;},{&quot;code&quot;:&quot;WI&quot;,&quot;title&quot;:&quot;Wisconsin&quot;},{&quot;code&quot;:&quot;WY&quot;,&quot;title&quot;:&quot;Wyoming&quot;}]'>
                                <span class="c-underline-link">In Your Community</span>
                            </aha-location-selector>
                        </li>
                </ul>
            </nav>
        </div>
    </div>

<div class="l-header__cta">
    
</div>


    <div class="l-header__utility">
        <nav class="container container-fluid" aria-label="Mobile Utility Navigation">
            <ul class="c-utility-nav nav">
                
                

                        <li>
                            <a href="/en/volunteer/opportunities" target="" class="c-cta c-cta--icon h-color--gray-dark  ">
                                Volunteer
                            </a>
                        </li>
                        <li>
                            <a href="https://cpr.heart.org/en/" target="" class="c-cta c-cta--icon h-color--gray-dark  ">
                                Learn CPR
                            </a>
                        </li>
                        <li>
                            <a href="https://www.shopheart.org/?utm_source=heart.org&amp;utm_medium=Referral&amp;utm_campaign=AHA-Parent-Site-Top-Nav-Mobile" target="" class="c-cta c-cta--icon h-color--gray-dark  ">
                                SHOP
                            </a>
                        </li>
                
            </ul>
        </nav>
    </div>


    <div class="l-header__utility">
        <nav class="container container-fluid" aria-label="Mobile Utility Navigation">
            <ul class="c-utility-nav nav">
                
                

                        <li>
                            <a href="/en/about-us/heart-attack-and-stroke-symptoms" target="" class="c-cta c-cta--icon h-color--red  ">
                                Heart Attack and Stroke Symptoms
                            </a>
                        </li>
                
            </ul>
        </nav>
    </div>




        <aha-donation-modal name="donation-modal"
                            :show-modal="false"
                            :interval="0"
                            endpoint="/aha-service/promo/PromotionalModalClosed"
                            data-tracking=""
                            :translations="{
                                'btn': 'Donate Once',
                                'url':'https://mygiving.heart.org/-/XTXBJRCK',
                                'btnTheme':'',
                                'btn2': 'Donate Monthly',
                                'url2':'https://pages.heart.org/drtv_helpheart?s_src=24G213AEMG&amp;s_subsrc=jan24_p3_lightbox_donate_monthly',
                                'btnTheme2':'',
                                'title': &quot;\u003cspan class=\&quot;text-uppercase\&quot;\u003eYOUR DONATION TRIPLE MATCHED RIGHT NOW!\u003c/span\u003e&quot;,
                                'description': &quot;Don\u0027t wait! Make your gift in honor of National Wear Red Day and it will be TRIPLE MATCHED to do 3X more to help save lives.&quot;,
                                'image': '/-/media/Direct-Response-Images/FY24-January/fy24_jan_p3_lightbox.jpg?h=507&amp;w=900&amp;hash=7FBB860673E3878C9B56B757F496541B',
                                'video':''
                                }">
        </aha-donation-modal>

        </header>
        <main class="l-main" id="main-content" tabindex="-1" role="main">
            
    <div class="container container-fluid">
        <nav aria-label="Breadcrumb Navigation">
            <ol class="c-breadcrumb">
                <li>
                    <a href="/en/">Home</a>
                </li>
                <li>
                    <a href="/en/healthy-living">Healthy Living</a>
                </li>
                <li>
                    Company Collaboration
                </li>
            </ol>
        </nav>
    </div>

            <div class="container container-fluid">
    <div class="c-hero-card h-theme--red">
        <div class="c-hero-card__container">
            <div class="c-hero-card__content-container" v-vertical-align>

                    <h1 class="c-hero-card__heading"><fit-text :max="4.8" :targetLineCount="1">Company Collaboration</fit-text></h1>



            </div>




        <div class="c-hero-card__media h-placeholder-image h-placeholder-image--43-20">
<img src="/-/media/Images/Healthy-Living/Company-Collaboration/group_of_business_people_discussing_collaboration.jpg?h=640&amp;iar=0&amp;mw=960&amp;w=960&amp;hash=BB5D79C1BE7203487146B33455823E1D" class="is-loaded" alt="group of business people discussing collaboration" width="960" height="640" loading="lazy" DisableWebEdit="False" />            <span class=""></span>
        </div>
        </div>


    </div>
</div>




    <div class="container container-fluid">
        <div class="l-promo row">
            <div class="l-promo__col col-md">
                <div class="c-promo c-promo--full-width  c-promo--shadow">
                    <div class="row">

                        <div class="col-md-6 c-promo--last-sm">
                            <div class="c-promo c-promo--match-height">
                                <div class="c-promo__content">
                                    <div class="c-promo__icon">
                                    </div>

                                        <h2 class="h3">Well-being Works Better&trade;</h2>

                                    <p>
<p>Well-being Works Better helps business leaders promote health and well-being for all, based on the latest science.
</p>
<p>
As part of that platform, our Workforce Well-being Scorecard illuminates how your company&rsquo;s efforts on workforce well-being compare to peer organizations.</p>
<p>This will help your company grow stronger. And your organization will be recognized by the American Heart Association, a trusted thought leader in the field of workforce well-being.</p>                                    </p>


                                </div>
                                    <div class="c-promo__actions c-promo__actions--divider">
<a class="c-cta c-cta--icon  h-theme--red c-cta--arrow" Title="Learn more about Well-being Works Better" href="/en/healthy-living/company-collaboration/well-being-works-better"> Learn more about Well-being Works Better</a>
                                    </div>
                            </div>
                        </div>

                            <div class="col-md-6">



        <div class="c-promo__media h-placeholder-image h-placeholder-image--bg-sm">
<img src="/-/media/Healthy-Living-Images/Well-being-Works-Better/diverse_group_of_workers.jpg?h=338&amp;iar=0&amp;mw=600&amp;w=600&amp;hash=E0034C794AA95BFC8E6E627AB7CF3E44" class="is-loaded" alt="Diverse group of workers" width="600" height="338" loading="lazy" DisableWebEdit="False" />            <span class=""></span>
        </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <div class="container container-fluid">
        <div class="l-promo row">
            <div class="l-promo__col col-md">
                <div class="c-promo c-promo--full-width  c-promo--shadow">
                    <div class="row">
                        <div class="col-md-6">



        <div class="c-promo__media h-placeholder-image h-placeholder-image--bg-sm">
<img src="/-/media/Healthy-Living-Images/Healthy-Eating/healthy_grocery_shopping.jpg?h=400&amp;iar=0&amp;mw=600&amp;w=600&amp;hash=CE4DCF05E852B2081B4059527F8E169A" class="is-loaded" alt="couple and baby grocery shopping" width="600" height="400" loading="lazy" DisableWebEdit="False" />            <span class=""></span>
        </div>
                        </div>

                        <div class="col-md-6 c-promo--last-sm">
                            <div class="c-promo c-promo--match-height">
                                <div class="c-promo__content">
                                    <div class="c-promo__icon">
                                    </div>

                                        <h2 class="h3">Heart-Check Certification</h2>

                                    <p>
One Heart. Hundreds of Heart-Healthy Options. The Heart-Check mark makes it easy to spot heart-healthy foods in the grocery store or when dining out.                                    </p>


                                </div>
                                    <div class="c-promo__actions c-promo__actions--divider">
<a class="c-cta c-cta--icon  h-theme--red c-cta--arrow" Title="More About Heart-Check Certification" href="/en/healthy-living/company-collaboration/heart-check-certification"> More About Heart-Check Certification</a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>




    <div class="container container-fluid">
        <div class="l-promo row">
            <div class="l-promo__col col-md">
                <div class="c-promo c-promo--full-width  c-promo--shadow">
                    <div class="row">

                        <div class="col-md-6 c-promo--last-sm">
                            <div class="c-promo c-promo--match-height">
                                <div class="c-promo__content">
                                    <div class="c-promo__icon">
                                    </div>

                                        <h2 class="h3">Food System Strategy</h2>

                                    <p>
Learn how the American Heart Association and food industry leaders are collaborating across the food system to create a world of longer, healthier lives through nutrition security for all.                                    </p>


                                </div>
                                    <div class="c-promo__actions c-promo__actions--divider">
<a class="c-cta c-cta--icon  h-theme--red c-cta--arrow" Title="Learn More About AHA's Food System Strategy" href="/en/healthy-living/company-collaboration/food-system-strategy"> Learn More About AHA's Food System Strategy</a>
                                    </div>
                            </div>
                        </div>

                            <div class="col-md-6">



        <div class="c-promo__media h-placeholder-image h-placeholder-image--bg-sm">
<img src="/-/media/Healthy-Living-Images/Healthy-Eating/healthy_food_in_grocery_store.jpg?h=400&amp;iar=0&amp;mw=600&amp;w=600&amp;hash=B0DA870EDACF35365140FC3DAFF5B5FF" class="is-loaded" alt="fresh food in grocery store" width="600" height="400" loading="lazy" DisableWebEdit="False" />            <span class=""></span>
        </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>







    <div class="container container-fluid">
        <div class="l-promo row">
            <div class="l-promo__col col-md">
                <div class="c-promo c-promo--full-width  c-promo--shadow">
                    <div class="row">
                        <div class="col-md-6">



        <div class="c-promo__media h-placeholder-image h-placeholder-image--bg-sm">
<img src="/-/media/Images/Healthy-Living/Company-Collaboration/Healthy-For-Life/Main-Landing-Page.jpg?h=400&amp;iar=0&amp;mw=600&amp;w=600&amp;hash=F99A8BAAAF95F0D058B551455E47B911" class="is-loaded" alt="Woman chopping vegetables" width="600" height="400" title="Woman chopping vegetables" loading="lazy" DisableWebEdit="False" />            <span class=""></span>
        </div>
                        </div>

                        <div class="col-md-6 c-promo--last-sm">
                            <div class="c-promo c-promo--match-height">
                                <div class="c-promo__content">
                                    <div class="c-promo__icon">
                                    </div>

                                        <h2 class="h3">Healthy for Life<sup>®</sup></h2>

                                    <p>
The American Heart Association and Aramark launched Healthy for Life<sup>&reg;</sup>, an innovative health impact initiative, in 2015. The commitment: work together to leverage our combined reach and resources to help millions lead healthier lives.                                    </p>


                                </div>
                                    <div class="c-promo__actions c-promo__actions--divider">
<a class="c-cta c-cta--icon  h-theme--red c-cta--arrow" Title="Learn More about Healthy for Life®" href="/en/healthy-living/company-collaboration/healthy-for-life"> Learn More about Healthy for Life®</a>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>




    <div class="container container-fluid">
        <div class="l-promo row">
            <div class="l-promo__col col-md">
                <div class="c-promo c-promo--full-width  c-promo--shadow">
                    <div class="row">

                        <div class="col-md-6 c-promo--last-sm">
                            <div class="c-promo c-promo--match-height">
                                <div class="c-promo__content">
                                    <div class="c-promo__icon">
                                    </div>

                                        <h2 class="h3">You can help us improve access to healthy nutrition for all.</h2>

                                    <p>
<p>The AHA believes all people deserve access to healthy food so they can live their best lives.</p>
<p>That&rsquo;s why we&rsquo;re working to improve nutrition and food security for everyone, everywhere in America.</p>                                    </p>


                                </div>
                                    <div class="c-promo__actions c-promo__actions--divider">
<a class="c-cta c-cta--icon  h-theme--red c-cta--arrow" Title="Let's fight food insecurity together" href="/en/healthy-living/healthy-eating/fighting-food-insecurity"> Let's fight food insecurity together</a>
                                    </div>
                            </div>
                        </div>

                            <div class="col-md-6">



        <div class="c-promo__media h-placeholder-image h-placeholder-image--bg-sm">
<img src="/-/media/Healthy-Living-Images/Food-Strategy/Students_eating_lunch_at_school.jpg?h=368&amp;iar=0&amp;mw=600&amp;w=510&amp;hash=1C7B442E33370BB0F31D841752B0E851" class="is-loaded" alt="students eating lunch at school" width="510" height="368" loading="lazy" DisableWebEdit="False" />            <span class=""></span>
        </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div id="emailform" class="c-email-promo c-email-promo--bg c-email-promo--center pb-md-0   h-theme--black h-text-contrast">
            <div class="c-email-promo__media h-placeholder-image h-placeholder-image--bg">
                <img src="/-/media/Healthy-Living-Images/HfG-Signup-Images/Young_boy_cooking_with_his_mother_in_kitchen.jpg?h=501&amp;iar=0&amp;mw=2000&amp;w=890&amp;hash=F393866F3BD72A66D98F25AB06AD5113" class="is-loaded" alt="Young boy and his mother in the kitchen preparing food from a recipe on a tablet" width="890" height="501" loading="lazy" DisableWebEdit="False" />
            </div>
            <span class="h-mask-dark"></span>
            <div class="c-email-promo__container container container-fluid">
                <div class="c-email-promo__content  h-theme--black h-text-contrast">
                    <!-- F O R M -->
                    <!-- Each form will have inputs with scope name to avoid conflicts with multiple forms on same page -->
                    <aha-sitecore-form-wrapper class="c-aha-form">
                        <form action="/formbuilder?sc_site=heart&amp;fxb.FormItemId=aff8db08-a70d-49b8-a03c-74df7d91d5fa&amp;fxb.HtmlPrefix=fxb.9efb0ed3-913e-46f7-a24a-88d537e226df" data-ajax="true" data-ajax-method="Post" data-ajax-mode="replace-with" data-ajax-success="document.dispatchEvent(new CustomEvent(&#39;sc-forms-submit-success&#39;, {&#39;detail&#39;: &#39;fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_aff8db08-a70d-49b8-a03c-74df7d91d5fa&#39;}));
jQuery.validator.unobtrusive.parse(&#39;#fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_aff8db08-a70d-49b8-a03c-74df7d91d5fa&#39;);
jQuery.fxbFormTracker.texts=jQuery.fxbFormTracker.texts||{};
jQuery.fxbFormTracker.texts.expiredWebSession=&#39;Your session has expired. Please refresh this page.&#39;;
jQuery.fxbFormTracker.parse(&#39;#fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_aff8db08-a70d-49b8-a03c-74df7d91d5fa&#39;);
jQuery.fxbConditions.parse(&#39;#fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_aff8db08-a70d-49b8-a03c-74df7d91d5fa&#39;)" data-ajax-update="#fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_aff8db08-a70d-49b8-a03c-74df7d91d5fa" data-sc-fxb="aff8db08-a70d-49b8-a03c-74df7d91d5fa" enctype="multipart/form-data" id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_aff8db08-a70d-49b8-a03c-74df7d91d5fa" method="post"><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_FormSessionId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.FormSessionId" type="hidden" value="db4bace2-4680-42d1-99dd-3b3462c3d223" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_IsSessionExpired" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.IsSessionExpired" type="hidden" value="0" /><input name="__RequestVerificationToken" type="hidden" value="5znYkJ7D51cuDXBRPVOA8PCOugxDQP8rpJd5vfEpcgM_i-8xj6H2Pdk5Cp7FZ9haUYOzg5HSZIySYMi2x6gzYrl5YqGTM1UIzZMzXp67ClA1" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_FormItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.FormItemId" type="hidden" value="aff8db08-a70d-49b8-a03c-74df7d91d5fa" /><!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Page.cshtml -->

<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_PageItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.PageItemId" type="hidden" value="cb5435dd-b5d5-4b7b-8eb4-836d2eabd5aa" />
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="CAC658561B184BD69B570759A4443F9C" class="row">
    <!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="B49230E9D16C45048337B0F52822E624" class="col-md-6 pr-md-5">
    <!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="4E9B1FC04D114001A791B1A15ED0285A" class="text-left">
    <span class=""><p><img src="https://www.heart.org/-/media/FA7F93F0B44C488297F22FCE61416038.ashx?h=200&w=350&hash=6344666AE2336D28717A6E343CFC1A6C" alt="HFG logo" /></p><h2 class="c-email-promo__heading h2">Join Healthy for Good™ and get our free <strong>Shop Smart, Eat Smart</strong> digital recipe booklet while supplies last!</h2></span>
</div>

</div>
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="AFC636515B63482699008495CC1ABDA1" class="col-md-6 pr-md-5">
    <!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="C15DC7B9DFF84DFE8C861A7B3CBA2A2E" class="c-email-promo__form">
    <!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="E04F47FCB67E44598A444639BDABD661" class="form-group">
    <input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_a26b476f-4117-43e8-a21d-8c417413bf05" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="a26b476f-4117-43e8-a21d-8c417413bf05" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_a26b476f-4117-43e8-a21d-8c417413bf05__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[a26b476f-4117-43e8-a21d-8c417413bf05].ItemId" type="hidden" value="a26b476f-4117-43e8-a21d-8c417413bf05" /><!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\SingleLineText.cshtml -->

<label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_a26b476f-4117-43e8-a21d-8c417413bf05__Value" class="">First Name (required)</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_a26b476f-4117-43e8-a21d-8c417413bf05__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[a26b476f-4117-43e8-a21d-8c417413bf05].Value" class="form-control" type="text" value=""   maxlength="255"   placeholder=""   required aria-required="true"   data-sc-tracking="True" data-sc-field-name="FirstName" data-sc-field-key="C1AAB2CE972A4D3A89B28DA606F3B136" data-val-required="First Name (required) is required." data-val="true" />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[a26b476f-4117-43e8-a21d-8c417413bf05].Value" data-valmsg-replace="true"></span>
</div>
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="7DD05A44CCC544E481A5075E317D13CF" class="form-group">
    <input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_37166154-3146-4cf8-a45a-37fdd02d6e70" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="37166154-3146-4cf8-a45a-37fdd02d6e70" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_37166154-3146-4cf8-a45a-37fdd02d6e70__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[37166154-3146-4cf8-a45a-37fdd02d6e70].ItemId" type="hidden" value="37166154-3146-4cf8-a45a-37fdd02d6e70" /><!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\SingleLineText.cshtml -->

<label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_37166154-3146-4cf8-a45a-37fdd02d6e70__Value" class="">Last Name (required)</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_37166154-3146-4cf8-a45a-37fdd02d6e70__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[37166154-3146-4cf8-a45a-37fdd02d6e70].Value" class="form-control" type="text" value=""   maxlength="255"   placeholder=""   required aria-required="true"   data-sc-tracking="True" data-sc-field-name="LastName" data-sc-field-key="93318D4CA0E145E3B0283B1FE3CFC253" data-val-required="Last Name (required) is required." data-val="true" />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[37166154-3146-4cf8-a45a-37fdd02d6e70].Value" data-valmsg-replace="true"></span>
</div>
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="F7F0694865294672B254ECAB8B95686D" class="form-group">
    <input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_e1d44681-b62a-45f2-a4c5-7f6877bc7990" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="e1d44681-b62a-45f2-a4c5-7f6877bc7990" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_e1d44681-b62a-45f2-a4c5-7f6877bc7990__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[e1d44681-b62a-45f2-a4c5-7f6877bc7990].ItemId" type="hidden" value="e1d44681-b62a-45f2-a4c5-7f6877bc7990" /><!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Email.cshtml -->

<label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_e1d44681-b62a-45f2-a4c5-7f6877bc7990__Value" class="">Email (required)</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_e1d44681-b62a-45f2-a4c5-7f6877bc7990__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[e1d44681-b62a-45f2-a4c5-7f6877bc7990].Value" class="form-control" type="email" value=""   maxlength="255"   placeholder="youremail@domain.com"   required aria-required="true"   data-sc-tracking="True" data-sc-field-name="EmailAddress" data-sc-field-key="E10DD4C5EEB64556BE00B2CB3E68C7D6" data-val-required="Email (required) is required." data-val-regex="Email (required) contains an invalid email address." data-val-regex-pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,17}$" data-val="true" />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[e1d44681-b62a-45f2-a4c5-7f6877bc7990].Value" data-valmsg-replace="true"></span>
</div>
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="0B1BC4620D4A4F4C898324256E53E67F" class="form-group">
    <input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_15c83757-e001-4584-a125-2aee2d3b227b" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="15c83757-e001-4584-a125-2aee2d3b227b" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_15c83757-e001-4584-a125-2aee2d3b227b__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[15c83757-e001-4584-a125-2aee2d3b227b].ItemId" type="hidden" value="15c83757-e001-4584-a125-2aee2d3b227b" /><!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\SingleLineText.cshtml -->

<label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_15c83757-e001-4584-a125-2aee2d3b227b__Value" class="">Zip Code (required)</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_15c83757-e001-4584-a125-2aee2d3b227b__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[15c83757-e001-4584-a125-2aee2d3b227b].Value" class="form-control" type="text" value=""   maxlength="255"   placeholder=""   required aria-required="true"   data-sc-tracking="True" data-sc-field-name="ZipCode" data-sc-field-key="C045F36140DB43BDB78B82B0FEE005A4" data-val-required="Zip Code (required) is required." data-val="true" />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[15c83757-e001-4584-a125-2aee2d3b227b].Value" data-valmsg-replace="true"></span>
</div>
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="8CE9E63C2DEB4D648A9D10D1EC7E265D" class="form-group custom-control custom-checkbox">
    <input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_f1c49107-3f4e-404f-bce8-dcb963ed27f2" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="f1c49107-3f4e-404f-bce8-dcb963ed27f2" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_f1c49107-3f4e-404f-bce8-dcb963ed27f2__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[f1c49107-3f4e-404f-bce8-dcb963ed27f2].ItemId" type="hidden" value="f1c49107-3f4e-404f-bce8-dcb963ed27f2" /><!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Checkbox.cshtml -->
<input type="checkbox" id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_f1c49107-3f4e-404f-bce8-dcb963ed27f2__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[f1c49107-3f4e-404f-bce8-dcb963ed27f2].Value" class="custom-control-input"  value="true" data-sc-tracking="True" data-sc-field-name="TermsCheckbox" data-sc-field-key="BE1A4C82C39E4453A3125325C15933AF" data-val-ischecked="TermsCheckbox is required." data-val-ischecked-value="False" data-val-required="The Value field is required." data-val="true" />
<label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_f1c49107-3f4e-404f-bce8-dcb963ed27f2__Value" class="custom-control-label">I agree to the <a href="/en/healthy-living/hfg-user-agreement" title="HFG User Agreement">Terms and Conditions</a> and <a href="/en/about-us/statements-and-policies/privacy-statement" title="HFG Privacy Statement" class="h-color--white">Privacy Policy</a>.</label>
<input type="hidden" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[f1c49107-3f4e-404f-bce8-dcb963ed27f2].Value" value="false" />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[f1c49107-3f4e-404f-bce8-dcb963ed27f2].Value" data-valmsg-replace="true"></span>
</div>
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Section.cshtml -->

<div data-sc-field-key="4477D007F1CD4FD781DD8ABAB5A560A7" class="col-md-12 d-flex justify-content-center mt-4">
    
<!--This is overridden by \Feature\Forms\code\Views\FormBuilder\FieldTemplates\Button.cshtml -->

<input value="Sign Me Up" type="submit" class="btn btn-primary btn-round" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.45029403-ba3b-49be-96e6-31476f90afa3" data-sc-field-key="8A319C9182A44F6D93C723B1922581B8" />
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_NavigationButtons" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.NavigationButtons" type="hidden" value="45029403-ba3b-49be-96e6-31476f90afa3" />
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_45029403-ba3b-49be-96e6-31476f90afa3" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.45029403-ba3b-49be-96e6-31476f90afa3" type="hidden" value="0" />
</div>

</div>

</div>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_755be545-9fa0-47e2-9f98-e6e149cfeb1c" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="755be545-9fa0-47e2-9f98-e6e149cfeb1c" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_755be545-9fa0-47e2-9f98-e6e149cfeb1c__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[755be545-9fa0-47e2-9f98-e6e149cfeb1c].ItemId" type="hidden" value="755be545-9fa0-47e2-9f98-e6e149cfeb1c" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_755be545-9fa0-47e2-9f98-e6e149cfeb1c__Value" class="hidden" style="display:none;">Contact Id</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_755be545-9fa0-47e2-9f98-e6e149cfeb1c__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[755be545-9fa0-47e2-9f98-e6e149cfeb1c].Value" class="hidden" style="display:none;" type="text" value=""   maxlength="255"   placeholder="" data-sc-tracking="True" data-sc-field-name="Sitecore Contact ID"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[755be545-9fa0-47e2-9f98-e6e149cfeb1c].Value" data-valmsg-replace="true"></span>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_12742803-aa85-4bd1-b553-b296d899438e" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="12742803-aa85-4bd1-b553-b296d899438e" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_12742803-aa85-4bd1-b553-b296d899438e__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[12742803-aa85-4bd1-b553-b296d899438e].ItemId" type="hidden" value="12742803-aa85-4bd1-b553-b296d899438e" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_12742803-aa85-4bd1-b553-b296d899438e__Value" class="hidden" style="display:none;">Form ID</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_12742803-aa85-4bd1-b553-b296d899438e__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[12742803-aa85-4bd1-b553-b296d899438e].Value" class="hidden" style="display:none;" type="text" value="AFF8DB08-A70D-49B8-A03C-74DF7D91D5FA"   maxlength="255"   placeholder="" data-sc-tracking="True" data-sc-field-name="Form ID"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[12742803-aa85-4bd1-b553-b296d899438e].Value" data-valmsg-replace="true"></span>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_4780d8a3-8bb3-4d76-ab97-da9202d6857c" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="4780d8a3-8bb3-4d76-ab97-da9202d6857c" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_4780d8a3-8bb3-4d76-ab97-da9202d6857c__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[4780d8a3-8bb3-4d76-ab97-da9202d6857c].ItemId" type="hidden" value="4780d8a3-8bb3-4d76-ab97-da9202d6857c" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_4780d8a3-8bb3-4d76-ab97-da9202d6857c__Value" class="hidden" style="display:none;">Form Name</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_4780d8a3-8bb3-4d76-ab97-da9202d6857c__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[4780d8a3-8bb3-4d76-ab97-da9202d6857c].Value" class="hidden" style="display:none;" type="text" value="Healthy For Good Newsletter"   maxlength="255"   placeholder="" data-sc-tracking="True" data-sc-field-name="Form Name"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[4780d8a3-8bb3-4d76-ab97-da9202d6857c].Value" data-valmsg-replace="true"></span>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_b818c950-5c4d-49f6-85a4-b475f72058cb" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="b818c950-5c4d-49f6-85a4-b475f72058cb" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_b818c950-5c4d-49f6-85a4-b475f72058cb__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[b818c950-5c4d-49f6-85a4-b475f72058cb].ItemId" type="hidden" value="b818c950-5c4d-49f6-85a4-b475f72058cb" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_b818c950-5c4d-49f6-85a4-b475f72058cb__Value" class="hidden" style="display:none;">Form Submission Date</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_b818c950-5c4d-49f6-85a4-b475f72058cb__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[b818c950-5c4d-49f6-85a4-b475f72058cb].Value" class="hidden" style="display:none;" type="text" value=""   maxlength="255"   placeholder="" data-sc-tracking="True" data-sc-field-name="Form Submission Date"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[b818c950-5c4d-49f6-85a4-b475f72058cb].Value" data-valmsg-replace="true"></span>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_cb2668e4-2f05-44f5-b365-a60c032cbb26" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="cb2668e4-2f05-44f5-b365-a60c032cbb26" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_cb2668e4-2f05-44f5-b365-a60c032cbb26__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[cb2668e4-2f05-44f5-b365-a60c032cbb26].ItemId" type="hidden" value="cb2668e4-2f05-44f5-b365-a60c032cbb26" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_cb2668e4-2f05-44f5-b365-a60c032cbb26__Value" class="hidden" style="display:none;">Form URL</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_cb2668e4-2f05-44f5-b365-a60c032cbb26__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[cb2668e4-2f05-44f5-b365-a60c032cbb26].Value" class="hidden" style="display:none;" type="text" value=""   maxlength="5000"   placeholder="" data-sc-tracking="True" data-sc-field-name="Form URL"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[cb2668e4-2f05-44f5-b365-a60c032cbb26].Value" data-valmsg-replace="true"></span>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_e0e7ae39-3969-43c2-b24c-133815f072f1" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="e0e7ae39-3969-43c2-b24c-133815f072f1" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_e0e7ae39-3969-43c2-b24c-133815f072f1__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[e0e7ae39-3969-43c2-b24c-133815f072f1].ItemId" type="hidden" value="e0e7ae39-3969-43c2-b24c-133815f072f1" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_e0e7ae39-3969-43c2-b24c-133815f072f1__Value" class="hidden" style="display:none;">Campaign Content</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_e0e7ae39-3969-43c2-b24c-133815f072f1__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[e0e7ae39-3969-43c2-b24c-133815f072f1].Value" class="hidden" style="display:none;" type="text" value=""   maxlength="255"   placeholder="" data-sc-tracking="True" data-sc-field-name="CampaignContent"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[e0e7ae39-3969-43c2-b24c-133815f072f1].Value" data-valmsg-replace="true"></span>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_308ee527-1788-4065-960c-c6d0cb25ffc1" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="308ee527-1788-4065-960c-c6d0cb25ffc1" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_308ee527-1788-4065-960c-c6d0cb25ffc1__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[308ee527-1788-4065-960c-c6d0cb25ffc1].ItemId" type="hidden" value="308ee527-1788-4065-960c-c6d0cb25ffc1" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_308ee527-1788-4065-960c-c6d0cb25ffc1__Value" class="hidden" style="display:none;">Campaign Source</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_308ee527-1788-4065-960c-c6d0cb25ffc1__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[308ee527-1788-4065-960c-c6d0cb25ffc1].Value" class="hidden" style="display:none;" type="text" value=""   maxlength="255"   placeholder="" data-sc-tracking="True" data-sc-field-name="CampaignSource"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[308ee527-1788-4065-960c-c6d0cb25ffc1].Value" data-valmsg-replace="true"></span>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_Index_3666a7de-e2f2-4d5f-9cb0-5dc74af88e09" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields.Index" type="hidden" value="3666a7de-e2f2-4d5f-9cb0-5dc74af88e09" /><input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_3666a7de-e2f2-4d5f-9cb0-5dc74af88e09__ItemId" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[3666a7de-e2f2-4d5f-9cb0-5dc74af88e09].ItemId" type="hidden" value="3666a7de-e2f2-4d5f-9cb0-5dc74af88e09" /><label for="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_3666a7de-e2f2-4d5f-9cb0-5dc74af88e09__Value" class="hidden" style="display:none;">Campaign Medium</label>
<input id="fxb_9efb0ed3-913e-46f7-a24a-88d537e226df_Fields_3666a7de-e2f2-4d5f-9cb0-5dc74af88e09__Value" name="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[3666a7de-e2f2-4d5f-9cb0-5dc74af88e09].Value" class="hidden" style="display:none;" type="text" value=""   maxlength="255"   placeholder="" data-sc-tracking="True" data-sc-field-name="CampaignMedium"  />
<span class="field-validation-valid" data-valmsg-for="fxb.9efb0ed3-913e-46f7-a24a-88d537e226df.Fields[3666a7de-e2f2-4d5f-9cb0-5dc74af88e09].Value" data-valmsg-replace="true"></span>

</div>
        <input type="hidden" data-sc-fxb-condition value='{}' />
</form>

                    </aha-sitecore-form-wrapper>
                </div>
            </div>
        </div>


            
            




        </main>
        <footer class="l-footer" role="contentinfo">
            
    <div class="c-disclaimer-bar  h-theme--red">
        <div class="container container-fluid">
            <div class="c-disclaimer__content">
                <img alt="100 years bold hearts" src="/-/media/Images/Logos/Global-Do-No-Edit/Footer/CentennialBoldHeartsBadgew.png?h=130&amp;w=130&amp;sc_lang=en&amp;hash=032F3135F80F3A8808F467330C65F9D9" class="float-left"><br>
<p style="text-align: left; padding-left: 10em; font-size: 1.1rem;">Our mission is to be a relentless force for a world of longer, healthier lives. As we move into the second century of our work, we are advancing health and hope for everyone, everywhere.</p>
<br>
<br>
            </div>
        </div>
    </div>


<div class="c-spacer">
    <div class="c-spacer container container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="c-spacer__selection py-2">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container container-fluid">
    <div class="l-generic row">
        <div class="l-generic__col col-md-12">
            




        <div>
                    <p><p style="text-align: center; font-size: .74375rem;">*All health/medical information on this website has been reviewed and approved by the American Heart Association, based on scientific research and American Heart Association guidelines. <strong><a href="/en/about-us/statements-and-policies/content-editorial-process" class="h-color--blue">Find more information on our content editorial process.</a></strong></p></p>
            
        </div>




        </div>
    </div>
</div>



    <div class="l-footer__section">
        <div class="container container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-3 l-footer__nav">
                        <div class="l-footer__logo">
                            <img src="/-/media/Images/Logos/Global-Do-No-Edit/Footer/AHA_100_years_bold_hearts_footer_logo.png?h=142&amp;iar=0&amp;mw=960&amp;w=150&amp;hash=01AAB52F091D53020DE59A114053AC54" alt="American Heart Association 100 Years Bold Hearts logo" width="150" height="142" loading="lazy" DisableWebEdit="False" />
                        </div>
                    <button v-b-toggle="'contact-collapse-footer'" class="btn btn-link-plain btn--select ">
                        <h2 class="h6">Contact Us</h2>
                    </button>
                        <b-collapse id="contact-collapse-footer" :visible="false">
                            <p>
<strong>National Center</strong><br />
7272 Greenville Ave.<br />
Dallas, TX 75231</p>
<p>
<strong>Customer Service</strong><br />
1-800-AHA-USA-1<br />
1-800-242-8721<br />
<br />
<a href="/en/about-us/contact-us" class="c-cta btn btn-md btn-light btn-round h-theme--red w-75">Contact Us</a></p>
<p>
<strong>Hours</strong><br />
Monday - Friday: 7 a.m. &ndash; 7 p.m. CT&nbsp;<br />
Saturday: 9 a.m. - 5 p.m. CT<br />
Closed on Sundays</p>
<p><strong>Tax Identification Number<br />
</strong>13-5613797</p>
                        </b-collapse>
                </div>
                    <div class="col-sm-6 col-md-3 l-footer__nav">
                        <h2 class="h6 l-footer__nav-title">About Us</h2>
                        <button v-b-toggle="'footer_collapse_522f2c40-1095-475a-b383-0b1d6b83cbc8'" class="btn btn-link-plain btn--select ">
                            <span class="h6">About Us</span>
                        </button>
                        <b-collapse id="footer_collapse_522f2c40-1095-475a-b383-0b1d6b83cbc8" :visible="false">
                            <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="About the AHA/ASA" href="/en/about-us" DisableWebEdit="True"> About the AHA/ASA</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Our Impact" href="/en/impact-map" DisableWebEdit="True"> Our Impact</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Annual Report" href="/en/about-us/2022-2023-annual-report" DisableWebEdit="True"> Annual Report</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="AHA Financial Information" href="/en/about-us/aha-financial-information" DisableWebEdit="True"> AHA Financial Information</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="International Programs" href="/en/about-us/international-programs" DisableWebEdit="True"> International Programs</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Latest Heart and Stroke News" href="/en/news" DisableWebEdit="True"> Latest Heart and Stroke News</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="AHA/ASA Media Newsroom" href="https://newsroom.heart.org/" DisableWebEdit="True"> AHA/ASA Media Newsroom</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Careers" href="https://heart.jobs/?utm_campaign=heart.org-Footer&amp;vs=2896&amp;utm_medium=Other&amp;utm_source=heart.org-Footer" DisableWebEdit="True"> Careers</a>
                                        </li>
                            </ul>
                        </b-collapse>
                    </div>
                    <div class="col-sm-6 col-md-3 l-footer__nav">
                        <h2 class="h6 l-footer__nav-title">Get Involved</h2>
                        <button v-b-toggle="'footer_collapse_a904d4b8-c0d1-4185-a9da-f0c505dfd98c'" class="btn btn-link-plain btn--select ">
                            <span class="h6">Get Involved</span>
                        </button>
                        <b-collapse id="footer_collapse_a904d4b8-c0d1-4185-a9da-f0c505dfd98c" :visible="false">
                            <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Donate Now" href="https://mygiving.heart.org/-/XEDQWRZF" DisableWebEdit="True"> Donate Now</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Make a Memorial Gift" title="Memorial Gift" href="https://mygiving.heart.org/-/XWUBJXQE" DisableWebEdit="True"> Make a Memorial Gift</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Ways to Give" href="/en/get-involved/ways-to-give" DisableWebEdit="True"> Ways to Give</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Advocate" href="/en/get-involved/advocate" DisableWebEdit="True"> Advocate</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Volunteer" href="/en/volunteer/opportunities" DisableWebEdit="True"> Volunteer</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Go Red For Women" href="https://www.goredforwomen.org/en/" DisableWebEdit="True"> Go Red For Women</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="ShopHeart" href="https://www.shopheart.org/?a=aha-heart.org-bottom-navigation&amp;utm_source=heart.org&amp;utm_medium=referral&amp;utm_campaign=aha-heart.org-bottom-navigation" DisableWebEdit="True"> ShopHeart</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="ShopCPR" href="https://shopcpr.heart.org/" DisableWebEdit="True"> ShopCPR</a>
                                        </li>
                            </ul>
                        </b-collapse>
                    </div>
                    <div class="col-sm-6 col-md-3 l-footer__nav">
                        <h2 class="h6 l-footer__nav-title">Our Sites</h2>
                        <button v-b-toggle="'footer_collapse_f3015ba0-3491-4350-94ab-b0ace207e75b'" class="btn btn-link-plain btn--select ">
                            <span class="h6">Our Sites</span>
                        </button>
                        <b-collapse id="footer_collapse_f3015ba0-3491-4350-94ab-b0ace207e75b" :visible="false">
                            <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="American Heart Association" href="/en/" DisableWebEdit="True"> American Heart Association</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="American Stroke Association" href="https://www.stroke.org/en/" DisableWebEdit="True"> American Stroke Association</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="CPR &amp; ECC" href="https://cpr.heart.org/en/" DisableWebEdit="True"> CPR &amp; ECC</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="Professional Heart Daily" href="https://professional.heart.org/en/" DisableWebEdit="True"> Professional Heart Daily</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class=" c-cta--arrow " Title="More Sites" href="/en/about-us/aha-asa-website-directory" DisableWebEdit="True"> More Sites</a>
                                        </li>
                            </ul>
                        </b-collapse>
                    </div>
            </div>
        </div>
    </div>





    <div class="l-footer__section">
        <div class="container container-fluid l-footer__social">
                <ul class="nav l-icon-nav">
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/AmericanHeart" DisableWebEdit="True"><img src="/-/media/Feature/Navigation/Social/facebook-gray.svg?h=52&amp;iar=0&amp;mw=960&amp;w=52&amp;hash=5991D46B8E7D088406E09CF7A40338F2" alt="Facebook" width="52" height="52" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                            <li>
                                <a target="_blank" title="American Heart Association Instagram" rel="noopener noreferrer" href="https://www.instagram.com/american_heart/" DisableWebEdit="True"><img src="/-/media/Feature/Navigation/Social/instagram-gray.svg?h=52&amp;iar=0&amp;mw=960&amp;w=52&amp;hash=D5984FA3D0087F199CC3293C3F5050E5" alt="Instagram" width="52" height="52" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                            <li>
                                <a target="_blank" title="Threads" rel="noopener noreferrer" href="https://www.threads.net/@american_heart" DisableWebEdit="True"><img src="/-/media/Feature/Navigation/Social/threads_aha.svg?h=54&amp;iar=0&amp;mw=960&amp;w=54&amp;hash=672B0D8ADA81C5F5C0AFFE9919965B87" alt="Threads" width="54" height="54" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                            <li>
                                <a target="_blank" title="X formerly known as Twitter" rel="noopener noreferrer" href="https://www.twitter.com/American_Heart" DisableWebEdit="True"><img src="/-/media/Feature/Navigation/Social/x_aha.svg?h=54&amp;iar=0&amp;mw=960&amp;w=54&amp;hash=DC48431F2A1DB716EA85E84BA1B87506" alt="X formerly known as Twitter" width="54" height="54" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@americanheartassociation?lang=en" DisableWebEdit="True"><img src="/-/media/Feature/Social/Tiktok_grey.png?h=52&amp;iar=0&amp;mw=960&amp;w=52&amp;hash=60DBED6832D6B70813EAB4221E252FF4" alt="Tik Tok" width="52" height="52" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                            <li>
                                <a target="_blank" title="American Heart Association YouTube" rel="noopener noreferrer" href="https://www.youtube.com/user/americanheartassoc" DisableWebEdit="True"><img src="/-/media/Feature/Navigation/Social/youtube-gray.svg?h=52&amp;iar=0&amp;mw=960&amp;w=52&amp;hash=DB28FAA95C4506636AB500FA0AE01D86" alt="YouTube" width="52" height="52" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                            <li>
                                <a target="_blank" title="American Heart Association Linked In" rel="noopener noreferrer" href="https://www.linkedin.com/company/american-heart-association" DisableWebEdit="True"><img src="/-/media/Feature/Navigation/Social/linkedin-gray.svg?h=52&amp;iar=0&amp;mw=960&amp;w=52&amp;hash=5E5EF7A61DC3F766B3D733C71D825AF3" alt="LinkedIn" width="52" height="52" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                            <li>
                                <a target="_blank" title="American Heart Association Pinterest" rel="noopener noreferrer" href="https://www.pinterest.com/americanheart/" DisableWebEdit="True"><img src="/-/media/Feature/Navigation/Social/pinterest-gray.svg?h=52&amp;iar=0&amp;mw=960&amp;w=52&amp;hash=35B5606833FC8E7A0262AA2369C88543" alt="Pinterest" width="52" height="52" loading="lazy" DisableWebEdit="True" /></a>
                            </li>
                </ul>
            <div class="l-footer__logos">
                    <ul class="nav l-icon-nav">
                            <li>
<a class="twoClick" title="National Health Council Standards of Excellence Certification Program" href="https://nationalhealthcouncil.org/standards-of-excellence/" DisableWebEdit="True"><img src="/-/media/Images/Logos/Global-Do-No-Edit/Footer/nhc_optimized.png?h=50&amp;iar=0&amp;mw=960&amp;w=49&amp;hash=14569FB394D18773F35B30F712DBFC27" alt="National Health Council" width="49" height="50" loading="lazy" DisableWebEdit="True" /></a>                            </li>
                            <li>
<a class="twoClick" title="Better Business Bureau Accredited Charity" href="https://www.give.org/charity-reviews/national/health/american-heart-association-in-dallas-tx-173" DisableWebEdit="True"><img src="/-/media/Images/Logos/Global-Do-No-Edit/Footer/Better_Business_Bureau_logo.png?h=60&amp;iar=0&amp;mw=960&amp;w=38&amp;hash=05D02E82AC4D71E7D66D3933C7337938" alt="Better Business Bureau Accredited Charity" width="38" height="60" loading="lazy" DisableWebEdit="True" /></a>                            </li>
                            <li>
<a class="twoClick" title="Charity Navigator" href="https://www.charitynavigator.org/ein/135613797" DisableWebEdit="True"><img src="/-/media/Images/Logos/Global-Do-No-Edit/Footer/Charity_Navigator_logo_120.jpg?h=60&amp;iar=0&amp;mw=960&amp;w=120&amp;hash=F8A63A5D9A6A05F27D6D07186C739909" alt="Charity Navigator" width="120" height="60" loading="lazy" DisableWebEdit="True" /></a>                            </li>
                            <li>
<a class="twoClick" title="Comodo Secure" href="https://ssl.comodo.com/" DisableWebEdit="True"><img src="/-/media/Images/Logos/Global-Do-No-Edit/Footer/ComodoSSLSecureSeal.png?h=50&amp;iar=0&amp;mw=960&amp;w=76&amp;hash=8A5F8490FC34BBECF78F2FC989351C18" alt="Comodo Secure" width="76" height="50" loading="lazy" DisableWebEdit="True" /></a>                            </li>
                    </ul>
            </div>
        </div>
    </div>




    <div class="l-footer__section">
        <div class="container container-fluid">
            <ul class="nav l-divider-link-nav l-footer__supplemental-nav">
                    <li>
                        <a class="  " Title="AHA Careers" href="https://heart.jobs/?utm_campaign=heart.org-Footer&amp;vs=2896&amp;utm_medium=Other&amp;utm_source=heart.org-Footer" DisableWebEdit="True">AHA Careers</a>
                    </li>
                    <li>
                        <a class="  " Title="Privacy Policy" href="/en/about-us/statements-and-policies/privacy-statement" DisableWebEdit="True">Privacy Policy</a>
                    </li>
                    <li>
                        <a class="  " Title="Medical Advice Disclaimer" href="/en/about-us/statements-and-policies/medical-advice" DisableWebEdit="True">Medical Advice Disclaimer</a>
                    </li>
                    <li>
                        <a class="  " Title="Copyright Policy" href="/en/about-us/statements-and-policies/copyright" DisableWebEdit="True">Copyright Policy</a>
                    </li>
                    <li>
                        <a class="  " Title="Accessibility Statement" href="/en/about-us/statements-and-policies/accessibility-statement" DisableWebEdit="True">Accessibility Statement</a>
                    </li>
                    <li>
                        <a class="  " Title="Ethics Policy" href="/en/about-us/statements-and-policies/ethics-policy" DisableWebEdit="True">Ethics Policy</a>
                    </li>
                    <li>
                        <a class="  " Title="Conflict of Interest Policy" href="/en/about-us/statements-and-policies/conflict-of-interest-policy" DisableWebEdit="True">Conflict of Interest Policy</a>
                    </li>
                    <li>
                        <a class="  " Title="Linking Policy" href="/en/about-us/statements-and-policies/linking-policy" DisableWebEdit="True">Linking Policy</a>
                    </li>
                    <li>
                        <a class="  " Title="Whistleblower Policy" href="/en/about-us/statements-and-policies/whistleblower-policy" DisableWebEdit="True">Whistleblower Policy</a>
                    </li>
                    <li>
                        <a class="  " Title="Content Editorial Guidelines" href="/en/about-us/editorial-guidelines" DisableWebEdit="True">Content Editorial Guidelines</a>
                    </li>
                    <li>
                        <a class="  " Title="Diversity" href="/en/about-us/diversity-inclusion" DisableWebEdit="True">Diversity</a>
                    </li>
                    <li>
                        <a class="  " Title="Suppliers & Providers" href="/en/about-us/procurement-services/procurement-services-department" DisableWebEdit="True">Suppliers & Providers</a>
                    </li>
                    <li>
                        <a class="  " Title="State Fundraising Notices" href="/en/about-us/statements-and-policies/state-fundraising-notices" DisableWebEdit="True">State Fundraising Notices</a>
                    </li>
            </ul>
                <div class="l-footer__copyright">
                    <button id="ot-sdk-btn" class="ot-sdk-show-settings">Cookie Settings</button><br />
<br />
<p class="h-color--black">
&copy;2024 American Heart Association, Inc. All rights reserved. Unauthorized use prohibited.<br />
The American Heart Association is a qualified 501(c)(3) tax-exempt organization. <br />
*Red Dress &trade; DHHS, Go Red &trade; AHA ; National Wear Red Day&reg; is a registered trademark.</p>
                </div>
        </div>
    </div>

<div id="speed-bump">
    <a href="" id="speed-bump-link" v-speed-bump="'speed-bump-modal'" style="display: none"></a>
    <aha-modal id="speed-bump-modal" class="c-speed-bump__modal text-center" hide-footer centered>
        <template slot="modal-header">
            <h2 class="sr-only">Speed Bump</h2>
        </template>
        <b-btn-close @click="$root.$emit('bv::hide::modal', 'speed-bump-modal', $event.target)">&times;</b-btn-close>
        <div class="c-speed-bump__media">
                <img src="/-/media/Images/Logos/Global-Do-No-Edit/Two-Click/ahalogo.png?h=165&amp;w=280&amp;hash=168DCCAE6E56E2ADD3D1F722F15D5C58"
                     alt="American Heart Association logo" />
        </div>
        <p>This link is provided for convenience only and is not an endorsement of either the linked-to entity or any product or service.</p>

        <p><span class="c-speed-bump__link" ref="speed-bump-text"></span></p>

        <a class="btn btn-danger btn-round" target="_blank" ref="speed-bump-link">Proceed</a>
</aha-modal>
</div>

        </footer>
        
    </div>
        <script src="/dist/common/vendor.bundle.js?v=1.28.2.36244" delay></script>
        <script src="/dist/common/app.bundle.js?v=1.28.2.36244" delay></script>
    <script>
        const autoLoadDuration = 8;
        const eventList = ["keydown", "mousemove", "wheel", "touchmove", "touchstart", "touchend"];
        const autoLoadTimeout = setTimeout(runScripts, autoLoadDuration * 1000);
        eventList.forEach(function (event) {
            window.addEventListener(event, triggerScripts, { passive: true })
        });
        function triggerScripts() {
            runScripts();
            clearTimeout(autoLoadTimeout);
            eventList.forEach(function (event) {
                window.removeEventListener(event, triggerScripts, { passive: true });
            });
        }
        function runScripts() {
            document.querySelectorAll("script[delay]").forEach(function (scriptTag) {
                scriptTag.setAttribute("src", scriptTag.getAttribute("delay"));
            });
        }
    </script>
    <script src="/sitecore%20modules/Web/ExperienceForms/scripts/jquery-3.4.1.min.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/jquery.validate.min.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/jquery.validate.unobtrusive.min.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/jquery.unobtrusive-ajax.min.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/form.init.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/form.validate.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/form.tracking.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/form.conditions.js"></script>
<script src="/sitecore%20modules/Web/ExperienceForms/scripts/formsextensions.validate.js"></script>
    <!--Rating Widget Script-->
<script type="text/javascript">
        (function (d, t, e, m) {

            // Async Rating-Widget initialization.
            window.RW_Async_Init = function () {

                RW.init({
                    huid: "454880",
                    uid: "8ffba75c6a26046b3ee5680e044c4161",
                    source: "website",
                    options: {
                        "advanced": {
                            "text": {
                                "rateThis": "Rate This Recipe"
                            }
                        },
                        "size": "medium",
                        "style": "flat_red",
                        "isDummy": false
                    }
                });
                RW.render(function() {
                    let starList = document.querySelector('.rw-ui-stars');
                    let allStars = document.querySelectorAll('.rw-ui-stars > li');
                    let uiReport = document.querySelector('.rw-ui-report');
                    let uiInfoContainer = document.querySelector('.rw-ui-info-container');
                    let activeItemBeforeOpenPopup = null;

                    // Add tabindex to all stars
                    if(allStars.length > 0) {
                        for (let i = 0; i < allStars.length; i++) {
                            let anchor = document.createElement("A");
                            anchor.setAttribute('href', '#');
                            anchor.className = 'rw-ui-star-anchor-link';

                            if(i === 0) {
                                anchor.setAttribute('aria-label', 'rate 1 star');
                            } else {
                                anchor.setAttribute('aria-label', 'rate ' + (i + 1) + ' stars');
                            }
                            
                            allStars[i].appendChild(anchor);
                        }
                    }

                    // Add click on star when it's keyboard selected and disabled default page scrolling for spacebar key
                    window.addEventListener('keydown', function(e) {
                        if((e.keyCode === 32 || e.keyCode === 13) && e.srcElement.classList.contains('rw-ui-star-anchor-link')) {
                            activeItemBeforeOpenPopup = document.activeElement;
                            e.preventDefault();
                            e.target.click();
                        }
                    });

                    // If UI Report popup div exist, create observer for it
                    if(uiReport) {
                        let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                        let observer = new MutationObserver(observerCallback);
                        let observerOptions = {
                            attributeFilter: ['style']
                        };
                        uiReport.id = 'rw-ui-report';

                        // Add to prevent IE and Edge from throwing JavaScript errors, Firefox doesn't like this
                        if(!isFirefox) {
                            observerOptions.attributes = true;
                        }

                        // Only report changes to style attribute on UI Report popup
                        observer.observe(uiReport, observerOptions);
                    }

                    if(uiInfoContainer) {
                        uiInfoContainer.setAttribute('tabindex', 0);
                        uiInfoContainer.setAttribute('aria-describedby', 'rw-ui-report');

                        uiInfoContainer.addEventListener('keyup', function(e) {
                            if((e.keyCode === 32 || e.keyCode === 13)) {
                                activeItemBeforeOpenPopup = document.activeElement;
                                uiInfoContainer.onmouseover();
                            }
                        });
                    }

                    function observerCallback(mutationList) {
                        let index = mutationList.length - 1;
                        let closeButton = document.querySelector('.rw-ui-close');
                        let popupHeading = document.querySelector('.rw-ui-report-header');

                        if(closeButton) {
                            closeButton.setAttribute('tabindex', 0);
                            closeButton.setAttribute('aria-label', 'Close.');
                        }
                        
                        if(popupHeading) {
                            popupHeading.setAttribute('tabindex', 0);
                        }

                        let focusableElements = document.querySelectorAll('.rw-ui-report a[href], .rw-ui-report area[href], .rw-ui-report input:not([disabled]):not([type="hidden"]), .rw-ui-report select:not([disabled]), .rw-ui-report textarea:not([disabled]), .rw-ui-report button:not([disabled]), .rw-ui-report iframe, .rw-ui-report object, .rw-ui-report embed, .rw-ui-report [tabindex="0"], .rw-ui-report [contenteditable], .rw-ui-report audio[controls], .rw-ui-report video[controls], .rw-ui-report summary, .rw-ui-report [tabindex^="0"], .rw-ui-report [tabindex^="1"], .rw-ui-report [tabindex^="2"], .rw-ui-report [tabindex^="3"], .rw-ui-report [tabindex^="4"], .rw-ui-report [tabindex^="5"], .rw-ui-report [tabindex^="6"], .rw-ui-report [tabindex^="7"], .rw-ui-report [tabindex^="8"], .rw-ui-report [tabindex^="9"]');

                        // Add click on close button when it's keyboard selected. Add tab capture inside UI popup
                        if(mutationList[index].target.style.display === 'block') {
                            popupHeading.focus();
                            document.addEventListener('keydown', escapeCloseReportPopup);

                            closeButton.addEventListener('keyup', function(e) {
                                if((e.keyCode === 32 || e.keyCode === 13) && e.target.tagName === 'SPAN') {
                                    closeReportPopup();
                                }
                            });

                            focusableElements[focusableElements.length - 1].addEventListener('keydown', function(e) {
                                if(e.keyCode === 9) {
                                    e.preventDefault();
                                    focusableElements[0].focus();
                                }

                                if(e.shiftKey && e.keyCode == 9) {
                                    e.preventDefault();
                                    focusableElements[focusableElements.length - 2].focus();
                                }
                            });

                            focusableElements[0].addEventListener('keydown', function(e) {
                                if(e.shiftKey && e.keyCode == 9) {
                                    e.preventDefault();
                                    focusableElements[focusableElements.length - 1].focus();
                                }
                            });
                        }

                        if(mutationList[index].target.style.display === 'none') {
                            document.removeEventListener('keydown', escapeCloseReportPopup);
                        }

                        function closeReportPopup() {
                            closeButton.click();

                            if(activeItemBeforeOpenPopup) {
                                activeItemBeforeOpenPopup.focus();
                            }
                        }

                        function escapeCloseReportPopup(e) {
                            if(e.keyCode === 27) {
                                closeReportPopup();
                            }
                        }
                    }
                });
            };
            // Append Rating-Widget JavaScript library.
            var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
                l = d.location, ck = "Y" + t.getFullYear() +
                    "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
                f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
                a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
            if (d.getElementById(id)) return;
            rw = d.createElement(e);
            rw.id = id; rw.async = true; rw.type = "text/javascript";
            rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
            s.parentNode.insertBefore(rw, s);
        }(document, new Date(), "script", "rating-widget.com/"));</script>
    
    <link rel="stylesheet" href="https://static.cloud.coveo.com/searchui/v2.10099/css/CoveoFullSearch.css" />
<link rel="stylesheet" href="https://static.cloud.coveo.com/coveoforsitecore/ui/v0.58.6/css/CoveoForSitecore.css" />
<script class="coveo-script" type="text/javascript" src='https://static.cloud.coveo.com/searchui/v2.10099/js/CoveoJsSearch.Lazy.min.js'></script>
<script class="coveo-for-sitecore-script" type="text/javascript" src='https://static.cloud.coveo.com/coveoforsitecore/ui/v0.58.6/js/CoveoForSitecore.Lazy.min.js'></script>
<script type="text/javascript" src="https://static.cloud.coveo.com/searchui/v2.10099/js/cultures/en.js"></script>

<div>


    
    
    <!-- Resources -->
    <div id="coveo3a949f41"
         class="CoveoForSitecoreContext"
                    data-sc-should-have-analytics-component='true'
            data-sc-analytics-enabled='true'
            data-sc-current-language='en'
            data-prebind-sc-language-field-name='fieldTranslator'
            data-sc-language-field-name='_language'
            data-sc-labels='{&quot;Descending&quot; : &quot;Descending&quot; , &quot;Ascending&quot; : &quot;Ascending&quot; , &quot;Directions&quot; : &quot;Directions&quot; , &quot;Miles&quot; : &quot;miles&quot; , &quot;Website&quot; : &quot;Website&quot; , &quot;Language&quot; : &quot;Language&quot; , &quot;Updated By&quot; : &quot;Updated by&quot; , &quot;Created By&quot; : &quot;Created by&quot; , &quot;Creation Time&quot; : &quot;Creation time.&quot; , &quot;Created&quot; : &quot;Created&quot; , &quot;Template&quot; : &quot;Template&quot; , &quot;Last Time Modified&quot; : &quot;Last time modified.&quot; , &quot;Uniform resource identifier&quot; : &quot;URI&quot; , &quot;If the problem persists contact the administrator.&quot; : &quot;If the problem persists contact the administrator.&quot; , &quot;Search is currently unavailable&quot; : &quot;Oops! Something went wrong on the server.&quot;}'
            data-sc-maximum-age='900000'
            data-sc-page-name='Company Collaboration'
            data-sc-page-name-full-path='/sitecore/content/Shared Content/Sections/Healthy Living/Pages/Company Collaboration'
            data-sc-index-source-name='Coveo_web_index - Production'
            data-sc-is-in-experience-editor='false'
            data-sc-is-user-anonymous='true'
            data-sc-item-uri='sitecore://web/{3ED9037D-AAA8-47E5-A643-0250AB561999}?lang=en&amp;ver=35'
            data-sc-item-id='3ed9037d-aaa8-47e5-a643-0250ab561999'
            data-prebind-sc-latest-version-field-name='fieldTranslator'
            data-sc-latest-version-field-name='_latestversion'
            data-sc-rest-endpoint-uri='/coveo/rest'
            data-sc-analytics-endpoint-uri='/coveo/rest/ua'
            data-sc-site-name='heart'
            data-sc-field-prefix='f'
            data-sc-field-suffix='7050'
            data-sc-prefer-source-specific-fields='false'
            data-sc-external-fields='[{&quot;fieldName&quot;:&quot;permanentid&quot;,&quot;shouldEscape&quot;:false}]'
            data-sc-source-specific-fields='[{&quot;fieldName&quot;:&quot;attachmentparentid&quot;},{&quot;fieldName&quot;:&quot;author&quot;},{&quot;fieldName&quot;:&quot;clickableuri&quot;},{&quot;fieldName&quot;:&quot;collection&quot;},{&quot;fieldName&quot;:&quot;concepts&quot;},{&quot;fieldName&quot;:&quot;date&quot;},{&quot;fieldName&quot;:&quot;filetype&quot;},{&quot;fieldName&quot;:&quot;indexeddate&quot;},{&quot;fieldName&quot;:&quot;isattachment&quot;},{&quot;fieldName&quot;:&quot;language&quot;},{&quot;fieldName&quot;:&quot;printableuri&quot;},{&quot;fieldName&quot;:&quot;rowid&quot;},{&quot;fieldName&quot;:&quot;size&quot;},{&quot;fieldName&quot;:&quot;source&quot;},{&quot;fieldName&quot;:&quot;title&quot;},{&quot;fieldName&quot;:&quot;topparent&quot;},{&quot;fieldName&quot;:&quot;topparentid&quot;},{&quot;fieldName&quot;:&quot;transactionid&quot;},{&quot;fieldName&quot;:&quot;uri&quot;},{&quot;fieldName&quot;:&quot;urihash&quot;}]'
>
    </div>
    <script type="text/javascript">
        var endpointConfiguration = {
            itemUri: "sitecore://web/{3ED9037D-AAA8-47E5-A643-0250AB561999}?lang=en&amp;ver=35",
            siteName: "heart",
            restEndpointUri: "/coveo/rest"
        };
        if (typeof (CoveoForSitecore) !== "undefined") {
            CoveoForSitecore.SearchEndpoint.configureSitecoreEndpoint(endpointConfiguration);
            CoveoForSitecore.version = "5.0.1202.1";
            var context = document.getElementById("coveo3a949f41");
            if (!!context) {
                CoveoForSitecore.Context.configureContext(context);
            }
        }
    </script>
</div>
            <script type="text/javascript">
            var dataTrackingOpen = '{"name":"Fundraise Open","dataKey":"SiteName","data":"heart","text":"Fundraise Open on /en/healthy-living/company-collaboration","goalId":"2e8e29cc-9817-4d35-b894-0cca5a9a37fd"}';
            var dataTrackingClose = '{"name":"Fundraise Close","dataKey":"SiteName","data":"heart","text":"Fundraise Close on /en/healthy-living/company-collaboration","goalId":"7a57e058-1fc7-479b-a374-3bbbd581ad70"}';
            var dataTrackingComplete = '{"name":"Donation Complete","dataKey":"SiteName","data":"heart","text":"Donation Complete on /en/healthy-living/company-collaboration","goalId":"e987417b-d84b-4b7c-94e7-c591718197d9"}';
            var dataEndpoint = "/aha-service/donations/track";
            </script>

<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"84e5b4f90c871940","b":1,"version":"2024.1.0","token":"0911719e04dd4ac180e39c3cde5b8c5f"}' crossorigin="anonymous"></script>
</body>
</html>