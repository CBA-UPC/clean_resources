<!Del][${n}][${e}] ${l}`,o)})).catch((function(){}))}));
});})(self.webPixelsManager.createShopifyExtend('shopify-custom-pixel', 'custom'));
}
</script>

    <script type="text/javascript">
  (()=>{var e={747:function(e,t,r){var i,n,o;!function(a,s){"use strict";n=[r(18)],void 0===(o="function"==typeof(i=function(e){var t=/(^|@)\S+:\d+/,r=/^\s*at .*(\S+:\d+|\(native\))/m,i=/^(eval@)?(\[native code])?$/;return{parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(r))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(t){return t.stack.split("\n").filter((function(e){return!!e.match(r)}),this).map((function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),i=r.match(/ (\(.+\)$)/);r=i?r.replace(i[0],""):r;var n=this.extractLocation(i?i[1]:r),o=i&&r||void 0,a=["eval","<anonymous>"].indexOf(n[0])>-1?void 0:n[0];return new e({functionName:o,fileName:a,lineNumber:n[1],columnNumber:n[2],source:t})}),this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter((function(e){return!e.match(i)}),this).map((function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,i=t.match(r),n=i&&i[1]?i[1]:void 0,o=this.extractLocation(t.replace(r,""));return new e({functionName:n,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})}),this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,i=t.message.split("\n"),n=[],o=2,a=i.length;o<a;o+=2){var s=r.exec(i[o]);s&&n.push(new e({fileName:s[2],lineNumber:s[1],source:i[o]}))}return n},parseOpera10:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,i=t.stacktrace.split("\n"),n=[],o=0,a=i.length;o<a;o+=2){var s=r.exec(i[o]);s&&n.push(new e({functionName:s[3]||void 0,fileName:s[2],lineNumber:s[1],source:i[o]}))}return n},parseOpera11:function(r){return r.stack.split("\n").filter((function(e){return!!e.match(t)&&!e.match(/^Error created at/)}),this).map((function(t){var r,i=t.split("@"),n=this.extractLocation(i.pop()),o=i.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;o.match(/\(([^)]*)\)/)&&(r=o.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var s=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new e({functionName:a,args:s,fileName:n[0],lineNumber:n[1],columnNumber:n[2],source:t})}),this)}}})?i.apply(t,n):i)||(e.exports=o)}()},18:function(e,t){var r,i,n;!function(o,a){"use strict";i=[],void 0===(n="function"==typeof(r=function(){function e(e){return e.charAt(0).toUpperCase()+e.substring(1)}function t(e){return function(){return this[e]}}var r=["isConstructor","isEval","isNative","isToplevel"],i=["columnNumber","lineNumber"],n=["fileName","functionName","source"],o=r.concat(i,n,["args"],["evalOrigin"]);function a(t){if(t)for(var r=0;r<o.length;r++)void 0!==t[o[r]]&&this["set"+e(o[r])](t[o[r]])}a.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof a)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new a(e)}},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",r=this.getColumnNumber()||"",i=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+r+")":"[eval]:"+t+":"+r:i?i+" ("+e+":"+t+":"+r+")":e+":"+t+":"+r}},a.fromString=function(e){var t=e.indexOf("("),r=e.lastIndexOf(")"),i=e.substring(0,t),n=e.substring(t+1,r).split(","),o=e.substring(r+1);if(0===o.indexOf("@"))var s=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o,""),c=s[1],l=s[2],u=s[3];return new a({functionName:i,args:n||void 0,fileName:c,lineNumber:l||void 0,columnNumber:u||void 0})};for(var s=0;s<r.length;s++)a.prototype["get"+e(r[s])]=t(r[s]),a.prototype["set"+e(r[s])]=function(e){return function(t){this[e]=Boolean(t)}}(r[s]);for(var c=0;c<i.length;c++)a.prototype["get"+e(i[c])]=t(i[c]),a.prototype["set"+e(i[c])]=function(e){return function(t){if(r=t,isNaN(parseFloat(r))||!isFinite(r))throw new TypeError(e+" must be a Number");var r;this[e]=Number(t)}}(i[c]);for(var l=0;l<n.length;l++)a.prototype["get"+e(n[l])]=t(n[l]),a.prototype["set"+e(n[l])]=function(e){return function(t){this[e]=String(t)}}(n[l]);return a})?r.apply(t,i):r)||(e.exports=n)}()},700:function(e,t,r){var i;!function(n,o){"use strict";var a="function",s="undefined",c="object",l="string",u="major",d="model",b="name",f="type",p="vendor",m="version",w="architecture",g="console",h="mobile",v="tablet",y="smarttv",x="wearable",k="embedded",S="Amazon",O="Apple",R="ASUS",E="BlackBerry",A="Browser",N="Chrome",T="Firefox",C="Google",I="Huawei",L="LG",B="Microsoft",M="Motorola",U="Opera",P="Samsung",D="Sharp",j="Sony",q="Xiaomi",F="Zebra",W="Facebook",V="Chromium OS",_="Mac OS",$=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},z=function(e,t){return typeof e===l&&-1!==G(t).indexOf(G(e))},G=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===s?e:e.substring(0,350)},X=function(e,t){for(var r,i,n,s,l,u,d=0;d<t.length&&!l;){var b=t[d],f=t[d+1];for(r=i=0;r<b.length&&!l&&b[r];)if(l=b[r++].exec(e))for(n=0;n<f.length;n++)u=l[++i],typeof(s=f[n])===c&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):o:this[s[0]]=u?s[1].call(this,u,s[2]):o:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):o):this[s]=u||o;d+=2}},Y=function(e,t){for(var r in t)if(typeof t[r]===c&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(z(t[r][i],e))return"?"===r?o:r}else if(z(t[r],e))return"?"===r?o:r;return e},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,m],[/opios[\/ ]+([\w\.]+)/i],[m,[b,U+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[b,U]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[b,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[b,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[b,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[b,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[b,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure "+A],m],[/\bfocus\/([\w\.]+)/i],[m,[b,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[b,U+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[b,U+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[b,"MIUI "+A]],[/fxios\/([-\w\.]+)/i],[m,[b,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 "+A]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 "+A],m],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[b,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,W],m],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[b,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[b,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[b,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[b,N+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,N+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[b,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[b,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[m,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[b,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[b,m],[/(cobalt)\/([\w\.]+)/i],[b,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,G]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows (ce|mobile); ppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[w,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[p,P],[f,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[p,P],[f,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[p,O],[f,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[p,O],[f,v]],[/(macintosh);/i],[d,[p,O]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[p,D],[f,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[p,I],[f,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[p,I],[f,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[p,q],[f,h]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[p,q],[f,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[p,"OPPO"],[f,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[p,"Vivo"],[f,h]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[d,[p,"Realme"],[f,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[p,M],[f,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[p,M],[f,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[p,L],[f,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[p,L],[f,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[p,"Lenovo"],[f,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[p,"Nokia"],[f,h]],[/(pixel c)\b/i],[d,[p,C],[f,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[p,C],[f,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[p,j],[f,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[p,j],[f,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[p,"OnePlus"],[f,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[p,S],[f,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[p,S],[f,h]],[/(playbook);[-\w\),; ]+(rim)/i],[d,p,[f,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[p,E],[f,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[p,R],[f,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[p,R],[f,h]],[/(nexus 9)/i],[d,[p,"HTC"],[f,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[d,/_/g," "],[f,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[p,"Acer"],[f,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[p,"Meizu"],[f,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,d,[f,h]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,d,[f,v]],[/(surface duo)/i],[d,[p,B],[f,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[p,"Fairphone"],[f,h]],[/(u304aa)/i],[d,[p,"AT&T"],[f,h]],[/\bsie-(\w*)/i],[d,[p,"Siemens"],[f,h]],[/\b(rct\w+) b/i],[d,[p,"RCA"],[f,v]],[/\b(venue[\d ]{2,7}) b/i],[d,[p,"Dell"],[f,v]],[/\b(q(?:mv|ta)\w+) b/i],[d,[p,"Verizon"],[f,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[p,"Barnes & Noble"],[f,v]],[/\b(tm\d{3}\w+) b/i],[d,[p,"NuVision"],[f,v]],[/\b(k88) b/i],[d,[p,"ZTE"],[f,v]],[/\b(nx\d{3}j) b/i],[d,[p,"ZTE"],[f,h]],[/\b(gen\d{3}) b.+49h/i],[d,[p,"Swiss"],[f,h]],[/\b(zur\d{3}) b/i],[d,[p,"Swiss"],[f,v]],[/\b((zeki)?tb.*\b) b/i],[d,[p,"Zeki"],[f,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],d,[f,v]],[/\b(ns-?\w{0,9}) b/i],[d,[p,"Insignia"],[f,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[p,"NextBook"],[f,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],d,[f,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],d,[f,h]],[/\b(ph-1) /i],[d,[p,"Essential"],[f,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[p,"Envizen"],[f,v]],[/\b(trio[-\w\. ]+) b/i],[d,[p,"MachSpeed"],[f,v]],[/\btu_(1491) b/i],[d,[p,"Rotor"],[f,v]],[/(shield[\w ]+) b/i],[d,[p,"Nvidia"],[f,v]],[/(sprint) (\w+)/i],[p,d,[f,h]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[p,B],[f,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[p,F],[f,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[p,F],[f,h]],[/smart-tv.+(samsung)/i],[p,[f,y]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[p,P],[f,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,L],[f,y]],[/(apple) ?tv/i],[p,[d,O+" TV"],[f,y]],[/crkey/i],[[d,N+"cast"],[p,C],[f,y]],[/droid.+aft(\w+)( bui|\))/i],[d,[p,S],[f,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[p,D],[f,y]],[/(bravia[\w ]+)( bui|\))/i],[d,[p,j],[f,y]],[/(mitv-\w{5}) bui/i],[d,[p,q],[f,y]],[/Hbbtv.*(technisat) (.*);/i],[p,d,[f,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,H],[d,H],[f,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[f,y]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,d,[f,g]],[/droid.+; (shield) bui/i],[d,[p,"Nvidia"],[f,g]],[/(playstation [345portablevi]+)/i],[d,[p,j],[f,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[p,B],[f,g]],[/((pebble))app/i],[p,d,[f,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[p,O],[f,x]],[/droid.+; (glass) \d/i],[d,[p,C],[f,x]],[/droid.+; (wt63?0{2,3})\)/i],[d,[p,F],[f,x]],[/(quest( 2| pro)?)/i],[d,[p,W],[f,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[f,k]],[/(aeobc)\b/i],[d,[p,S],[f,k]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[d,[f,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[f,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[f,h]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[b,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[b,[m,Y,Z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,"Windows"],[m,Y,Z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,_],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,m],[/\(bb(10);/i],[m,[b,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[b,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[b,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[b,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[b,N+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[b,V],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,m],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[b,m]]},J=function(e,t){if(typeof e===c&&(t=e,e=o),!(this instanceof J))return new J(e,t).getResult();var r=typeof n!==s&&n.navigator?n.navigator:o,i=e||(r&&r.userAgent?r.userAgent:""),g=r&&r.userAgentData?r.userAgentData:o,y=t?function(e,t){var r={};for(var i in e)t[i]&&t[i].length%2==0?r[i]=t[i].concat(e[i]):r[i]=e[i];return r}(K,t):K,x=r&&r.userAgent==i;return this.getBrowser=function(){var e,t={};return t[b]=o,t[m]=o,X.call(t,i,y.browser),t[u]=typeof(e=t[m])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,x&&r&&r.brave&&typeof r.brave.isBrave==a&&(t[b]="Brave"),t},this.getCPU=function(){var e={};return e[w]=o,X.call(e,i,y.cpu),e},this.getDevice=function(){var e={};return e[p]=o,e[d]=o,e[f]=o,X.call(e,i,y.device),x&&!e[f]&&g&&g.mobile&&(e[f]=h),x&&"Macintosh"==e[d]&&r&&typeof r.standalone!==s&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[d]="iPad",e[f]=v),e},this.getEngine=function(){var e={};return e[b]=o,e[m]=o,X.call(e,i,y.engine),e},this.getOS=function(){var e={};return e[b]=o,e[m]=o,X.call(e,i,y.os),x&&!e[b]&&g&&"Unknown"!=g.platform&&(e[b]=g.platform.replace(/chrome os/i,V).replace(/macos/i,_)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===l&&e.length>350?H(e,350):e,this},this.setUA(i),this};J.VERSION="1.0.36",J.BROWSER=$([b,m,u]),J.CPU=$([w]),J.DEVICE=$([d,p,f,g,h,y,v,x,k]),J.ENGINE=J.OS=$([b,m]),typeof t!==s?(e.exports&&(t=e.exports=J),t.UAParser=J):r.amdO?(i=function(){return J}.call(t,r,t,e))===o||(e.exports=i):typeof n!==s&&(n.UAParser=J);var Q=typeof n!==s&&(n.jQuery||n.Zepto);if(Q&&!Q.ua){var ee=new J;Q.ua=ee.getResult(),Q.ua.get=function(){return ee.getUA()},Q.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var r in t)Q.ua[r]=t[r]}}}("object"==typeof window?window:this)}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,r),o.exports}r.amdO={},(()=>{"use strict";const e=Symbol.for("RemoteUi::Retain"),t=Symbol.for("RemoteUi::Release"),i=Symbol.for("RemoteUi::RetainedBy");class n{constructor(){this.memoryManaged=new Set}add(t){this.memoryManaged.add(t),t[i].add(this),t[e]()}release(){for(const e of this.memoryManaged)e[i].delete(this),e[t]();this.memoryManaged.clear()}}function o(r){return Boolean(r&&r[e]&&r[t])}function a(e,{deep:t=!0}={}){return s(e,t,new Map)}function s(t,r,i){const n=i.get(t);if(null!=n)return n;const a=o(t);if(a&&t[e](),i.set(t,a),r){if(Array.isArray(t)){const e=t.reduce(((e,t)=>s(t,r,i)||e),a);return i.set(t,e),e}if(c(t)){const e=Object.keys(t).reduce(((e,n)=>s(t[n],r,i)||e),a);return i.set(t,e),e}}return i.set(t,a),a}function c(e){if(null==e||"object"!=typeof e)return!1;const t=Object.getPrototypeOf(e);return null==t||t===Object.prototype}const l="remote-ui::ready",u="_@f";function d(r){const a=new Map,s=new Map,l=new Map;return{encode:function e(t,i=new Map){if(null==t)return[t];const n=i.get(t);if(n)return n;if("object"==typeof t){if(Array.isArray(t)){i.set(t,[void 0]);const r=[],n=[t.map((t=>{const[n,o=[]]=e(t,i);return r.push(...o),n})),r];return i.set(t,n),n}if(c(t)){i.set(t,[void 0]);const r=[],n=[Object.keys(t).reduce(((n,o)=>{const[a,s=[]]=e(t[o],i);return r.push(...s),{...n,[o]:a}}),{}),r];return i.set(t,n),n}}if("function"==typeof t){if(a.has(t)){const e=a.get(t),r=[{[u]:e}];return i.set(t,r),r}const e=r.uuid();a.set(t,e),s.set(e,t);const n=[{[u]:e}];return i.set(t,n),n}const o=[t];return i.set(t,o),o},decode:d,async call(e,t){const r=new n,a=s.get(e);if(null==a)throw new Error("You attempted to call a function that was already released.");try{const e=o(a)?[r,...a[i]]:[r];return await a(...d(t,e))}finally{r.release()}},release(e){const t=s.get(e);t&&(s.delete(e),a.delete(t))},terminate(){a.clear(),s.clear(),l.clear()}};function d(n,o){if("object"==typeof n){if(null==n)return n;if(n instanceof ArrayBuffer)return n;if(Array.isArray(n))return n.map((e=>d(e,o)));if(u in n){const a=n[u];if(l.has(a))return l.get(a);let s=0,c=!1;const d=()=>{s-=1,0===s&&(c=!0,l.delete(a),r.release(a))},b=()=>{s+=1},f=new Set(o),p=(...e)=>{if(c)throw new Error("You attempted to call a function that was already released.");if(!l.has(a))throw new Error("You attempted to call a function that was already revoked.");return r.call(a,e)};Object.defineProperties(p,{[t]:{value:d,writable:!1},[e]:{value:b,writable:!1},[i]:{value:f,writable:!1}});for(const e of f)e.add(p);return l.set(a,p),p}return Object.keys(n).reduce(((e,t)=>({...e,[t]:d(n[t],o)})),{})}return n}}function b(){return`${f()}-${f()}-${f()}-${f()}`}function f(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)}const p="production",m="0.0.415",w="08d9d536wbc499b5ep9e0ec6b9m18e2802a",g="s08d9d536wbc499b5ep9e0ec6b9m18e2802am.js";function h(){try{return self instanceof DedicatedWorkerGlobalScope}catch(e){return!1}}const v=new URL(self.location.href);var y=r(747);class x extends Error{constructor(...e){super(...e),this.message="Excessive Stacktrace: May indicate infinite loop forming"}}var k=r(700);const S={production:"https://notify.bugsnag.com",test:"https://localhost"},O={severity:"error",context:"",unhandled:!0,library:"sandbox"},R=(e,t)=>{try{var r;if(null!=t&&null!==(r=t.options)&&void 0!==r&&r.sampleRate&&!function(e){if(e<=0||e>100)throw new Error("Invalid sampling percent");return 100*Math.random()<=e}(t.options.sampleRate))return;const a={...O,...t};let s={errorClass:null==e?void 0:e.name,message:null==e?void 0:e.message,stacktrace:[],type:"browserjs"};try{s=function(e){if("string"!=typeof((null==(t=e)?void 0:t.stack)||(null==t?void 0:t.stacktrace)||(null==t?void 0:t["opera#sourceloc"]))||t.stack===`${t.name}: ${t.message}`)throw new Error("Error incompatible with error-stack-parser");var t;const r=y.parse(e).reduce(((e,t)=>{const r=function({functionName:e,lineNumber:t,columnNumber:r}){const i=/^global code$/i.test((n=e)||"")?"global code":n;var n;return{file:`https://cdn.shopify.com/cdn/wpm/${g}`,method:i,lineNumber:t,columnNumber:r}}(t);try{return"{}"===JSON.stringify(r)?e:e.concat(r)}catch(i){return e}}),[]);return{errorClass:null==e?void 0:e.name,message:null==e?void 0:e.message,stacktrace:r,type:"browserjs"}}(e)}catch(n){try{s=function(e,t){let r="";const i={lineNumber:"1",columnNumber:"1",method:t.context,file:`https://cdn.shopify.com/cdn/wpm/${g}`};if(e.stackTrace||e.stack||e.description){r=e.stack.split("\n")[0];const t=e.stack.match(/([0-9]+):([0-9]+)/);if(t&&t.length>2&&(i.lineNumber=t[1],i.columnNumber=t[2],parseInt(i.lineNumber,10)>1e5))throw new x}return{errorClass:(null==e?void 0:e.name)||r,message:(null==e?void 0:e.message)||r,stacktrace:[i],type:"browserjs"}}(e,a)}catch(o){if(o instanceof x)return}}const c=function(t,{userAgent:r,context:i,severity:n,unhandled:o,library:a,hashVersionSandbox:s,sandboxUrl:c,pixelId:l,pixelType:u,runtimeContext:d,shopId:b,initConfig:f,notes:g}){var h,v;const{device:y,os:x,browser:S,engine:O}=function(t){try{return new k.UAParser(t).getResult()}catch(e){return{ua:"",browser:{name:"",version:"",major:""},engine:{name:"",version:""},os:{name:"",version:""},device:{model:"",type:"",vendor:""},cpu:{architecture:""}}}}(r||(null===(h=self.navigator)||void 0===h?void 0:h.userAgent));return{payloadVersion:5,notifier:{name:"web-pixel-manager",version:m,url:"-"},events:[{exceptions:[t],context:i,severity:n,unhandled:o,app:{version:m},device:{manufacturer:y.vendor,model:y.model,osName:x.name,osVersion:x.version,browserName:S.name,browserVersion:S.version},metaData:{app:{library:a,browserTarget:"modern",env:p,hashVersion:w,hashVersionSandbox:s||"N/A",sandboxUrl:c||"N/A"},device:{userAgent:r||(null===(v=self.navigator)||void 0===v?void 0:v.userAgent),renderingEngineName:O.name,renderingEngineVersion:O.version},request:{shopId:b,shopUrl:self.location.href,pixelId:l,pixelType:u,runtimeContext:d},"Additional Notes":{initConfig:JSON.stringify(f),notes:g}}}]}}(s,a),l=S[p];var i;if(!l)return void(null===(i=console)||void 0===i||i.log(`[${p}]`,"Bugsnag notify:",c));fetch(l,{method:"POST",headers:{"Content-Type":"application/json","Bugsnag-Api-Key":"bcbc9f6762da195561967577c2d74ff8","Bugsnag-Payload-Version":"5"},body:JSON.stringify(c)}).catch((()=>{}))}catch(a){}};async function E(e,t=""){const r=new self.Blob([t],{type:"text/plain"});try{return await self.fetch(e,{method:"POST",keepalive:!0,body:r}),!0}catch{return!1}}function A(e,t,r,i=!0){try{const n={...i?Object.getOwnPropertyDescriptor(e,t):{},...r};return Object.defineProperty(e,t,n)}catch(n){return e}}class N extends Error{constructor(...e){super(...e),this.name="InsecureUrlError"}}class T extends Error{constructor(...e){super(...e),this.name="RestrictedUrlError"}}function C(e){const t=new URL(e);if("https:"!==t.protocol)throw new N(`URL must be secure (HTTPS): ${t.href}`);const r=v.host.replace(/[/\-\\^$*+?.()|[\]{}]/g,"\\$&");if(new RegExp(`^https://(.*@)?${r}`,"i").test(t.href))throw new T(`Request are not allowed to the same origin: ${t.href}`);return t}function I(){const e=XMLHttpRequest.prototype.open;return XMLHttpRequest.prototype.open=function(t,r,i=!0,n,o){return e.call(this,t,C(r),i,n,o)},XMLHttpRequest}const L={Request:!1,Response:!1,Headers:!1,XMLHttpRequest:!1,XMLHttpRequestEventTarget:!1,XMLHttpRequestUpload:!1},B={BarcodeDetector:!0,BroadcastChannel:!0,Cache:!0,caches:!0,CustomEvent:!0,FormData:!0,ImageData:!0,NetworkInformation:!0,ServiceWorkerRegistration:!0,WebSocket:!0,Browser:!0,WorkerBrowser:!0,MessageChannel:!0,MessagePort:!0,crypto:!1,Crypto:!1,CryptoKey:!1,SubtleCrypto:!1,TextDecoder:!1,TextDecoderStream:!1,TextEncoder:!1,TextEncoderStream:!1,Request:!1,Response:!1,Headers:!1,indexedDB:!0,IDBCursor:!0,IDBCursorWithValue:!0,IDBDatabase:!0,IDBFactory:!0,IDBIndex:!0,IDBKeyRange:!0,IDBObjectStore:!0,IDBOpenDBRequest:!0,IDBRequest:!0,IDBTransaction:!0,IDBVersionChangeEvent:!0,Navigator:!0,navigator:!0,Notification:!0,NotificationEvent:!0,EventSource:!0,WebGL2RenderingContext:!0,WebGLActiveInfo:!0,WebGLBuffer:!0,WebGLFramebuffer:!0,WebGLProgram:!0,WebGLQuery:!0,WebGLRenderbuffer:!0,WebGLRenderingContext:!0,WebGLSampler:!0,WebGLShader:!0,WebGLShaderPrecisionFormat:!0,WebGLSync:!0,WebGLTexture:!0,WebGLTransformFeedback:!0,WebGLUniformLocation:!0,WebGLVertexArrayObject:!0,Path2D:!0,Worker:!0,WorkerLocation:!0,WorkerNavigator:!0,ServiceWorker:!0,ServiceWorkerContainer:!0,XMLHttpRequest:!0,XMLHttpRequestEventTarget:!0,XMLHttpRequestUpload:!0,ArrayBuffer:!1,Uint8Array:!1,Int8Array:!1,Uint16Array:!1,Int16Array:!1,Uint32Array:!1,Int32Array:!1,Float32Array:!1,Float64Array:!1,Uint8ClampedArray:!1,BigUint64Array:!1,BigInt64Array:!1,DataView:!1,PushSubscriptionOptions:!0,PushSubscription:!0,PushManager:!0,Permissions:!0,PermissionStatus:!0,PeriodicSyncManager:!0,PaymentInstruments:!0,NavigatorUAData:!0,BackgroundFetchRegistration:!0,BackgroundFetchRecord:!0,BackgroundFetchManager:!0,WritableStreamDefaultWriter:!0,WritableStreamDefaultController:!0,WritableStream:!0,ReadableStreamDefaultReader:!0,ReadableStreamDefaultController:!0,ReadableStreamBYOBRequest:!0,ReadableStreamBYOBReader:!0,ReadableStream:!0,ReadableByteStreamController:!0,RTCEncodedVideoFrame:!0,RTCEncodedAudioFrame:!0,RTCDataChannel:!0,RTCTransformEvent:!0,RTCRtpScriptTransformer:!0,OffscreenCanvasRenderingContext2D:!0,OffscreenCanvas:!0,FontFace:!0,FontFaceSet:!0,FileReaderSync:!0,FileReader:!0,FileList:!0,File:!0,FileSystemDirectoryHandle:!0,FileSystemFileHandle:!0,FileSystemHandle:!0,FileSystemWritableFileStream:!0,FileSystemSyncAccessHandle:!0,webkitRequestFileSystem:!0,webkitRequestFileSystemSync:!0,webkitResolveLocalFileSystemSyncURL:!0,webkitResolveLocalFileSystemURL:!0,DOMStringList:!0,DOMRectReadOnly:!0,DOMRect:!0,DOMQuad:!0,DOMPointReadOnly:!0,DOMPoint:!0,DOMMatrixReadOnly:!0,DOMMatrix:!0,DOMException:!0,CompressionStream:!0,Atomics:!0,WebAssembly:!0,AudioData:!0,EncodedAudioChunk:!0,EncodedVideoChunk:!0,ImageTrack:!0,ImageTrackList:!0,VideoColorSpace:!0,VideoFrame:!0,AudioDecoder:!0,AudioEncoder:!0,ImageDecoder:!0,VideoDecoder:!0,VideoEncoder:!0,AudioTrackConfiguration:!0,VideoTrackConfiguration:!0,Lock:!0,LockManager:!0,WebTransport:!0,WebTransportBidirectionalStream:!0,WebTransportDatagramDuplexStream:!0,WebTransportError:!0,Serial:!0,SerialPort:!0,USB:!0,USBAlternateInterface:!0,USBConfiguration:!0,USBConnectionEvent:!0,USBDevice:!0,USBEndpoint:!0,USBInTransferResult:!0,USBInterface:!0,USBIsochronousInTransferPacket:!0,USBIsochronousInTransferResult:!0,USBIsochronousOutTransferPacket:!0,USBIsochronousOutTransferResult:!0,USBOutTransferResult:!0,URL:{createObjectURL:!0}};function M(e,t){let r=e;do{Object.getOwnPropertyNames(r).filter((e=>e in t&&!1!==t[e])).forEach((e=>{try{let i;"object"==typeof t[e]?(i=r[e],M(i,t[e])):i=!0===t[e]?void 0:t[e],A(r,e,{value:i,configurable:!1,enumerable:!1,writable:!1},!1)}catch(i){}})),r=Object.getPrototypeOf(r)}while(r!==Object.prototype)}function U(e,t=self){const r={...e?B:L,fetch:(i=t.fetch,(e,t)=>{const r=new Request(e);return C(r.url),i(r,t)}),XMLHttpRequest:I()};var i;e||(r.addEventListener=function(e){let t=!1;return(r,i,n)=>(t||(console.warn("In a sandboxed environment, addEventListener may not behave as expected."),t=!0),e(r,i,n))}(t.addEventListener)),M(t,r),Object.freeze(String.prototype),Object.freeze(Request.prototype),Object.freeze(URL.prototype),Object.freeze(RegExp.prototype),A(self,"String",{writable:!1,configurable:!1}),A(self,"Request",{writable:!1,configurable:!1}),A(self,"URL",{writable:!1,configurable:!1}),A(self,"RegExp",{writable:!1,configurable:!1})}function P(e){let t=e;return{update:async function(e,r){try{t=r(),t=await e()}catch(i){console.error(i)}return t},getRemote:async function(e){try{t=await e()}catch(r){console.error(r)}return t},getValue:()=>t}}function D(e,t){const r=new Map(Object.keys(e).map((t=>[t,e[t]])));return{getItem:e=>r.get(e)||null,setItem(e,i){t.setItem(e,i),r.set(e,i)},removeItem(e){t.removeItem(e),r.delete(e)},clear(){t.clear(),r.clear()},get length(){return r.size},key(e){var t;return null!==(t=Array.from(r.keys()).find(((t,r)=>r===e)))&&void 0!==t?t:null}}}function j(e){(function({webPixelApi:e,cookie:t,cookieRestrictedDomains:r}){const i=P(t);A(document,"cookie",{get:function(){return i.getRemote(e.browser.cookie.get),i.getValue()},set:function(t){const n=t.split(";").map((e=>e.trim())).find((e=>e.startsWith("domain="))),o=(null==n?void 0:n.split("=")[1])||"";if(!(r.filter((e=>new RegExp(`^\\.?${e}$`).test(o))).length>0)){const r=i.getValue();i.update((()=>e.browser.cookie.set(t)),(()=>function(e,t){const r=e.split("; ").reduce(((e,t)=>{const[r,i]=t.split("=");return i&&(e[r]=i),e}),{}),i=t.split(";")[0],[n,o]=i.split("=");return r[n]=o,Object.keys(r).map((e=>`${e}=${r[e]}`)).join("; ")}(r,t)))}},configurable:!1,enumerable:!1})})(e),function({origin:e,internalApi:t}){const r=P(e);A(window,"origin",{get:function(){return r.getRemote(t.self.origin.get),r.getValue()},configurable:!1,enumerable:!1})}(e),function({referrer:e,internalApi:t}){const r=P(e);A(document,"referrer",{get:()=>(r.getRemote(t.document.referrer.get),r.getValue()),configurable:!1,enumerable:!1})}(e),function({webPixelApi:e,localStorageItems:t}){const r=D(t,e.browser.localStorage);A(window,"localStorage",{get:()=>r,configurable:!1,enumerable:!1})}(e),function({webPixelApi:e,sessionStorageItems:t}){const r=D(t,e.browser.sessionStorage);A(window,"sessionStorage",{get:()=>r,configurable:!1,enumerable:!1})}(e)}const q=h();class F extends Error{constructor(...e){super(...e),this.message="Invalid Extension Point"}}class W extends Error{constructor(...e){super(...e),this.name="SandboxAlreadyInitializedError",this.message="Sandbox already initialized."}}let V=!1;const _=async e=>{const{pageTitle:t,webPixelConfig:r,shopId:i,webPixelApi:n,internalApi:o}=e,s=n.init.context;if(V){const e=new W;throw R(e,{pixelId:r.id,pixelType:r.type,runtimeContext:r.runtimeContext,shopId:i,context:"v0/createSandbox/alreadyInitialized",userAgent:s.navigator.userAgent||self.navigator.userAgent,hashVersionSandbox:w,sandboxUrl:v.href||"unknown"}),e}V=!0,a(n),a(o);try{q&&(n.browser.sendBeacon=E),U(q),q||(j(e),self.document.title=t)}catch(c){throw R(c,{pixelId:r.id,pixelType:r.type,runtimeContext:r.runtimeContext,shopId:i,context:"v0/createSandbox/createRestrictedEnvironment",userAgent:s.navigator.userAgent||self.navigator.userAgent,hashVersionSandbox:w,sandboxUrl:v.href||"unknown"}),c}return new Promise(((e,t)=>{try{if(Object.defineProperty(self,"webPixelsManager",{value:{createShopifyExtend:()=>({extend:async(r,i)=>{if("WebPixel::Render"===r)try{await i.call(n,n),e({status:"success",hashVersion:w,sandboxUrl:v.href||"unknown"})}catch(c){t(c)}else t(new F)}})},enumerable:!0,writable:!1}),"function"==typeof self.initWebPixel)try{self.initWebPixel()}catch(c){t(c)}}catch(c){R(c,{pixelId:r.id,pixelType:r.type,runtimeContext:r.runtimeContext,shopId:i,context:"v0/createSandbox/uncaughtError",userAgent:s.navigator.userAgent||self.navigator.userAgent,hashVersionSandbox:w,sandboxUrl:v.href||"unknown"}),t(c)}}))};!function(){const e=h(),t=e?"worker":"iframe";try{(function(e,{uuid:t=b,createEncoder:r=d,callable:i}={}){let o=!1,a=e;const s=new Map,c=new Map,l=function(e,t){let r;if(null==t){if("function"!=typeof Proxy)throw new Error("You must pass an array of callable methods in environments without Proxies.");const t=new Map;r=new Proxy({},{get(r,i){if(t.has(i))return t.get(i);const n=e(i);return t.set(i,n),n}})}else{r={};for(const i of t)Object.defineProperty(r,i,{value:e(i),writable:!1,configurable:!0,enumerable:!0})}return r}(m,i),u=r({uuid:t,release(e){f(3,[e])},call(e,r,i){const n=t(),o=w(n,i),[a,s]=u.encode(r);return f(5,[n,e,a],s),o}});return a.addEventListener("message",p),{call:l,replace(e){const t=a;a=e,t.removeEventListener("message",p),e.addEventListener("message",p)},expose(e){for(const t of Object.keys(e)){const r=e[t];"function"==typeof r?s.set(t,r):s.delete(t)}},callable(...e){if(null!=i)for(const t of e)Object.defineProperty(l,t,{value:m(t),writable:!1,configurable:!0,enumerable:!0})},terminate(){f(2,void 0),g(),a.terminate&&a.terminate()}};function f(e,t,r){o||a.postMessage(t?[e,t]:[e],r)}async function p(e){const{data:t}=e;if(null!=t&&Array.isArray(t))switch(t[0]){case 2:g();break;case 0:{const e=new n,[i,o,a]=t[1],c=s.get(o);try{if(null==c)throw new Error(`No '${o}' method is exposed on this endpoint`);const[t,r]=u.encode(await c(...u.decode(a,[e])));f(1,[i,void 0,t],r)}catch(r){const{name:e,message:t,stack:n}=r;throw f(1,[i,{name:e,message:t,stack:n}]),r}finally{e.release()}break}case 1:{const[e]=t[1];c.get(e)(...t[1]),c.delete(e);break}case 3:{const[e]=t[1];u.release(e);break}case 6:{const[e]=t[1];c.get(e)(...t[1]),c.delete(e);break}case 5:{const[e,i,n]=t[1];try{const t=await u.call(i,n),[r,o]=u.encode(t);f(6,[e,void 0,r],o)}catch(r){const{name:t,message:i,stack:n}=r;throw f(6,[e,{name:t,message:i,stack:n}]),r}break}}}function m(e){return(...r)=>{if(o)return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));if("string"!=typeof e&&"number"!=typeof e)return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));const i=t(),n=w(i),[a,s]=u.encode(r);return f(0,[i,e,a],s),n}}function w(e,t){return new Promise(((r,i)=>{c.set(e,((e,n,o)=>{if(null==n)r(o&&u.decode(o,t));else{const e=new Error;Object.assign(e,n),i(e)}}))}))}function g(){var e;o=!0,s.clear(),c.clear(),null===(e=u.terminate)||void 0===e||e.call(u),a.removeEventListener("message",p)}})(e?self:function({targetOrigin:e="*"}={}){if("undefined"==typeof self||null==self.parent)throw new Error("This does not appear to be a child iframe, because there is no parent window.");const{parent:t}=self,r=()=>t.postMessage(l,e);window.addEventListener("message",(e=>{e.source===t&&"complete"===document.readyState&&e.data===l&&r()})),"complete"===document.readyState?r():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&r()}));const i=new WeakMap;return{postMessage(r,i){t.postMessage(r,e,i)},addEventListener(e,r){const n=e=>{e.source===t&&r(e)};i.set(r,n),self.addEventListener(e,n)},removeEventListener(e,t){const r=i.get(t);null!=r&&(i.delete(t),self.removeEventListener(e,r))}}}(),{callable:[]}).expose({initialize:_})}catch(r){R(r,{context:`v0/createSandbox/${t}`})}}()})()})();
</script>

  </head>
  <body></body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             en_reader_alerts">
          <screen-reader-alert-outlet></screen-reader-alert-outlet>
        </shreddit-async-loader>
        
        
        
  <shreddit-async-loader bundleName="reddit_cookie_banner">
    <reddit-cookie-banner
      class="nd:visible nd:pb-2xl z-[2] block relative bg-ui-modalbackground
    rounded-sm my-md mx-0 opacity-100 p-md pt-0 transition-opacity duration-300
    shadow-md border border-solid border-tone-4 pointer-events-auto"
    >
      <div slot="cookie-banner-text">
        <p>
          Reddit and its partners use cookies and similar technologies to provide you with a better experience.
        </p>
        <p>
          By accepting all cookies, you agree to our use of cookies to deliver and maintain our services and site, improve the quality of Reddit, personalize Reddit content and advertising, and measure the effectiveness of advertising.
        </p>
        <p>
          By rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of our platform.
        </p>
        <p>
          For more information, please see our
              <a
                class="text-action-secondary no-underline"
                target="_blank"
                href="https://reddit.com/en-us/policies/cookies"
                >Cookie Notice</a
              >
              and our
              <a
                class="text-action-secondary no-underline"
                target="_blank"
                href="https://reddit.com/en-us/policies/privacy-policy"
                >Privacy Policy</a
              >.
        </p>
      </div>
    </reddit-cookie-banner>
  </shreddit-async-loader><!-- routable page start --><shreddit-page-meta>
  <template>
      <shreddit-app-attrs
         serverRenderId="7eded3b3-c010-4431-9efa-58ededb122c4"
        routeName="community-more-posts"
        pageType="unknown"
        
        referrer-type="other"
        app-name="web3x"
        microapp-name="feeds"
        microapp-pool="first-time-user"
        microapp-deployment="production"
      >
      </shreddit-app-attrs>
      <shreddit-good-visit-tracker-attrs
        pageType="unknown"
        referrerType="other"
      >
      </shreddit-good-visit-tracker-attrs>
    </template>
  </shreddit-page-meta><faceplate-batch>
      <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197rswc/what_precautionary_measure_did_you_take_thinking/" content-href="https://www.reddit.com/r/AskReddit/comments/197rswc/what_precautionary_measure_did_you_take_thinking/"
    view-context="SubredditFeed" comment-count="2386"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="4"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T02:42:20.131000+0000" domain="self.AskReddit" id="t3_197rswc"
    post-title="What precautionary measure did you take, thinking &#39;just to be safe,&#39; that unexpectedly ended up saving the day later on?"
    post-type="text" score="5509"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_dkt1tkfg2" author="cadouxmoring8"
    icon="https://preview.redd.it/snoovatar/avatars/b07ac159-0845-4242-bca5-8e7d02e7e163-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=33b0447877ae1b98e96e4b7baf59356393db0b4e"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197rswc/what_precautionary_measure_did_you_take_thinking/"
        target="_self"
        aria-label="What precautionary measure did you take, thinking &#39;just to be safe,&#39; that unexpectedly ended up saving the day later on?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="cadouxmoring8"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/cadouxmoring8/"
      ><span class="mr-2xs"><faceplate-img
    src="https://preview.redd.it/snoovatar/avatars/b07ac159-0845-4242-bca5-8e7d02e7e163-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=33b0447877ae1b98e96e4b7baf59356393db0b4e"
    alt="u/cadouxmoring8 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/cadouxmoring8</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/cadouxmoring8" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197rswc">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T02:42:20.131000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197rswc"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197rswc/what_precautionary_measure_did_you_take_thinking/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197rswc/what_precautionary_measure_did_you_take_thinking/"
    id="post-title-t3_197rswc"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     What precautionary measure did you take, thinking &#39;just to be safe,&#39; that unexpectedly ended up saving the day later on?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/19807ot/you_are_to_be_executed_but_the_judge_allows_you/" content-href="https://www.reddit.com/r/AskReddit/comments/19807ot/you_are_to_be_executed_but_the_judge_allows_you/"
    view-context="SubredditFeed" comment-count="1967"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="5"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T10:54:50.583000+0000" domain="self.AskReddit" id="t3_19807ot"
    post-title="You are to be executed but the judge allows you to complete and 100% any game .Which game you picking?"
    post-type="text" score="1049"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_b3xyy9sk" author="Rivtogo"
    icon="https://styles.redditmedia.com/t5_45gzv3/styles/profileIcon_t2sh1qj9i0fb1.jpg?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=855ecff5518144eaec52053c051bf942e3d47768"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/19807ot/you_are_to_be_executed_but_the_judge_allows_you/"
        target="_self"
        aria-label="You are to be executed but the judge allows you to complete and 100% any game .Which game you picking?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="Rivtogo"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/Rivtogo/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_45gzv3/styles/profileIcon_t2sh1qj9i0fb1.jpg?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=855ecff5518144eaec52053c051bf942e3d47768"
    alt="u/Rivtogo avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/Rivtogo</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/Rivtogo" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_19807ot">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T10:54:50.583000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_19807ot"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/19807ot/you_are_to_be_executed_but_the_judge_allows_you/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/19807ot/you_are_to_be_executed_but_the_judge_allows_you/"
    id="post-title-t3_19807ot"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     You are to be executed but the judge allows you to complete and 100% any game .Which game you picking?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197qd7b/whats_a_common_rule_that_you_break_regularly/" content-href="https://www.reddit.com/r/AskReddit/comments/197qd7b/whats_a_common_rule_that_you_break_regularly/"
    view-context="SubredditFeed" comment-count="5855"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="6"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T01:34:56.041000+0000" domain="self.AskReddit" id="t3_197qd7b"
    post-title="What’s a common rule that you break regularly because you fundamentally disagree with it?"
    post-type="text" score="5802"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_j8hsz" author="RGDJR"
    icon="https://styles.redditmedia.com/t5_dudtq/styles/profileIcon_snooc48b6abb-6350-4c13-9502-5a0b997c3cee-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=039dc731036a3dd9b1e16aac5acb8c37600ba07f"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197qd7b/whats_a_common_rule_that_you_break_regularly/"
        target="_self"
        aria-label="What’s a common rule that you break regularly because you fundamentally disagree with it?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="RGDJR"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/RGDJR/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_dudtq/styles/profileIcon_snooc48b6abb-6350-4c13-9502-5a0b997c3cee-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=039dc731036a3dd9b1e16aac5acb8c37600ba07f"
    alt="u/RGDJR avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/RGDJR</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/RGDJR" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197qd7b">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T01:34:56.041000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197qd7b"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197qd7b/whats_a_common_rule_that_you_break_regularly/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197qd7b/whats_a_common_rule_that_you_break_regularly/"
    id="post-title-t3_197qd7b"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     What’s a common rule that you break regularly because you fundamentally disagree with it?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/1980zu6/whats_the_goat_of_all_sitcoms/" content-href="https://www.reddit.com/r/AskReddit/comments/1980zu6/whats_the_goat_of_all_sitcoms/"
    view-context="SubredditFeed" comment-count="2958"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="7"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T11:42:47.215000+0000" domain="self.AskReddit" id="t3_1980zu6"
    post-title="What’s the Goat of all sitcoms?"
    post-type="text" score="769"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_knywvqszz" author="Outrageous-Cap-2797"
    icon="https://styles.redditmedia.com/t5_9gnl7i/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfZWI5NTlhNzE1ZGZmZmU2ZjgyZjQ2MDU1MzM5ODJjNDg1OWNiMTRmZV8xMjU4NDc5Ng_rare_93a201b7-9fc1-4704-9369-4118fa037cd5-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=1191c5a538c0f81f2d772f44e2270b2d8b674e42"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/1980zu6/whats_the_goat_of_all_sitcoms/"
        target="_self"
        aria-label="What’s the Goat of all sitcoms?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="Outrageous-Cap-2797"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/Outrageous-Cap-2797/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_9gnl7i/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfZWI5NTlhNzE1ZGZmZmU2ZjgyZjQ2MDU1MzM5ODJjNDg1OWNiMTRmZV8xMjU4NDc5Ng_rare_93a201b7-9fc1-4704-9369-4118fa037cd5-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=1191c5a538c0f81f2d772f44e2270b2d8b674e42"
    alt="u/Outrageous-Cap-2797 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/Outrageous-Cap-2797</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/Outrageous-Cap-2797" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_1980zu6">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T11:42:47.215000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_1980zu6"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/1980zu6/whats_the_goat_of_all_sitcoms/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/1980zu6/whats_the_goat_of_all_sitcoms/"
    id="post-title-t3_1980zu6"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     What’s the Goat of all sitcoms?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/1981dik/if_you_were_told_with_absolute_certainty_that_a/" content-href="https://www.reddit.com/r/AskReddit/comments/1981dik/if_you_were_told_with_absolute_certainty_that_a/"
    view-context="SubredditFeed" comment-count="270"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="8"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T12:04:52.095000+0000" domain="self.AskReddit" id="t3_1981dik"
    post-title="If you were told with absolute certainty that a single major event in history was caused by a time traveler and asked to guess which one, what would you say?"
    post-type="text" score="423"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_mokzm" author="emissaryofwinds"
    icon="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/1981dik/if_you_were_told_with_absolute_certainty_that_a/"
        target="_self"
        aria-label="If you were told with absolute certainty that a single major event in history was caused by a time traveler and asked to guess which one, what would you say?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="emissaryofwinds"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/emissaryofwinds/"
      ><span class="mr-2xs"><faceplate-img
    src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"
    alt="u/emissaryofwinds avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/emissaryofwinds</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/emissaryofwinds" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_1981dik">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T12:04:52.095000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_1981dik"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/1981dik/if_you_were_told_with_absolute_certainty_that_a/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/1981dik/if_you_were_told_with_absolute_certainty_that_a/"
    id="post-title-t3_1981dik"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     If you were told with absolute certainty that a single major event in history was caused by a time traveler and asked to guess which one, what would you say?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> 
    <shreddit-ad-post 
    class="promotedlink block relative nd:visible bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs" ad-events="[{&quot;type&quot;:&quot;IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=9YfqwzH43UBn_DWgsarTl0VnsI9Mt8H_hoBi32YCQGkGW-NWMJqeUUJaHxFId-BUjEO04Dc&quot;},{&quot;type&quot;:&quot;COMMENTS_VIEW&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=XLoNhUeE3KYz8oKLqJFFFrqMbVJRPt3PQTZ8kC7_0ybscwm5fnyUp24SViWwebV0tbk7JtBh_A8Qd4rCyVEk&quot;},{&quot;type&quot;:&quot;UPVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=ONCuXMkvaD-_sv4yG-0oawqhuRVq2pSr1AuShSfthipT9n-YLDqDWnuONKSgWfmpU0EZNG2x_ZzBoVJCn8WD&quot;},{&quot;type&quot;:&quot;DOWNVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=_Np-HJC2z-vOR3b6q-TmninZAOxuP2Skcg3MnEP34vXScQYt1_1Os7l2C7kwD7qS5iOlAzCmnhVMpTuGyIxE&quot;},{&quot;type&quot;:&quot;COMMENT&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=8OigWWH0MLGilJ7bDujdj3_lgv_ILRKQ-YxOMPywqkbhRLDDoLK5KypCfUqrMS1K_HlEyWKDHe0DP4XI6Twi&quot;},{&quot;type&quot;:&quot;VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=MjWwkaSUVTgrpqxOQiIyG7fv6QV4esoTrPlyyRiodo66OSyRYLzisingZbICISVs4bBfPDowtirZeWxq4jFK&quot;},{&quot;type&quot;:&quot;COMMENT_UPVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=8MxYfKaC2al2QaM2gznmBv3R3dwpJ_ilZ5MB8qmmtgNEO6RnzppZj-_EayC7XSbeHv_UKxai-c5o-3y02ICQ&quot;},{&quot;type&quot;:&quot;COMMENT_DOWNVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=0HZB5A0-wULj_I6uvyCMv2c2WiJu-v-zShlp8LPQoRUMsd61FOMfw4IL3Aa4f5rBAWZd7dE7bHDETONiMiG1&quot;},{&quot;type&quot;:&quot;VENDOR_FULLY_IN_VIEW&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=B5bh0Z4pTyKkoRNOfVPS-euuu2Mb2B_jS9lZq-hvH6GZt_U1Fui92RBfLOU1QvTEgEdJQUC4kNH3zZ22LHSf&quot;},{&quot;type&quot;:&quot;VENDOR_FULLY_IN_VIEW_5_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=0ONhzhgQpD3FQ19yZvXwSzjeBmWGpt1NpB4TiEGfpD9RhufuB0Nks9rOUyFKOFYjAchQlKPe5jAu0caMqo3n&quot;},{&quot;type&quot;:&quot;VENDOR_FULLY_IN_VIEW_15_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=iHs34Wi5GZTtgKBBqlHOog6tWHMuH5xS3KmFlnq1CAo7sKUMNRa4s6POPVpGRL8ynTqt8RtLe0bCIJky9IJf&quot;},{&quot;type&quot;:&quot;GROUP_M_VIEWABLE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=aYgoUVqQ9ntZeNYR_9-x7jq7Z1OqVMGWNBmMbV54NBoaQxFWGzarnMm9WMXLdgNkGOJodDGTQ7gsNaOyoi3b&quot;},{&quot;type&quot;:&quot;UNLOAD&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=cIWMXwVFYjWWR4OAbngpEl4l8vgP8jvci70gB4FpSVgBKI_-V3zWL8VHuw9tyl-3XMUAisJ_nSesQ55n0XQq&quot;},{&quot;type&quot;:&quot;VIDEO_VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=N1e_LgjPardwLnCpKM0KQV3W02Zsppb2QYnCchLsIAwg1oSJqB9sneIzmht46ql4Q-Lw2k-ZnqXxYnymF__buw&quot;},{&quot;type&quot;:&quot;VIDEO_FULLY_VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=iDiJTcVin39c42Ole4yv776vf8JVSu8RLX9pYcaDULp6EBgpkYvlf2bbHbkA_jtnFfPArEizhDPkW3MeYK6uVA&quot;},{&quot;type&quot;:&quot;VIDEO_PLAYED_WITH_SOUND&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=sIWeoX5_k6dtKNdqvfjfadG1rCfbozi4pwLuCsZSATvNnEcv-BCHnveJJfkQoh2bI5L5Q6wfJxKWrS37f5ESSg&quot;},{&quot;type&quot;:&quot;VIDEO_PLAYED_EXPANDED&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=vKK2sPZRsEd9A8nM_yDqrtl1PnIZsq2BActLhdu3fsqS3gQDOoQs3CzrPAOq1m_QX9ddNJiuYqCAqv_wmlF5eg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_25&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=6WW2FhQP01WLgpIAvFjmibSohaQBq1pnn5jI90wOYR6QHAnV6AjFJPonUhuOMRgQi_eT4XNIT2OI2br3fPLQUg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_50&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=H7JeTDlsf59n6EWtgwqFAHfm2rqLFyOA6-oDDrxZb7qN2HiS4EfYeKc6Bat6P8ERlvMNOH3riXoVRl_UXU-WGg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_75&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=FEtc5mKGyC6FIhCQ4xsyeM_CC4k0-iqsd1G-UBTMB8xzm_IAnFvUdQuJWXTWEu7XtWEkudyDijICY_e_JhWVlg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_95&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=Wv44IbtZnqZveKvUdgGLkzgREBH6XjbB4E06In8U9WKH7gHpqCQ3Tgekbzzpv2W-n0PY1JqKxldL_eWxTKjTMg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_100&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=23X4qazQgXC90b48GIHdxawCufPvMtmpagYUGfCU4NybDi-WLU9FC36PAbHjzJNbsPGU7vxNRjN1mPQKNoSpug&quot;},{&quot;type&quot;:&quot;VIDEO_STARTED&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=vT26szu7gVL9sOaTxLmPj4wp1mRQReMM7m1gNxD06bAFOXPGige3QEMTW6qMW0iUvbB3fFy99Py59V4KkZw2Lg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_3_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=b0Ze9Bzat3vhjIf-noHvqgjnruohHxMNGW18pQR7JCQOGsFDd3mPG7vzkOx5wRITENMp5sw-lqRGm4wNX2Vp4g&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_5_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=TmsKxiBGPxqEJglmg-cbqWprsPsl6swUk4Q8KHcVawrRrQy7uBfJ6s96HPi8Kw1fbPfSNht6YE4WFlV-etpkdw&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_10_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=rputplHVeJpHHy44lTY4vuDNxi1dzZnVSyyKuoT04YTgxd6aO59GW2qyrsEsUCPkQPRYUmW34W5q-wSUUe6K2A&quot;},{&quot;type&quot;:&quot;VIDEO_GROUP_M_VIEWABLE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=Fa_9tUM6ggKd6EmI2j7sbtnejNzcJuXu9Onm_QLTf6r8S32eN3-peTVVyKznOA1T-yR0hwuib_00VlewTDT7YA&quot;},{&quot;type&quot;:&quot;VIDEO_VENDOR_FULLY_VIEWABLE_50&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=nbheuGeX6kivyMrJ3JbUBgpswLKA87h6HSgyCSbDrIIFqQPZUiUJLb-rP5EKPnF-8YiRKKIrn6Tmla7tLfUv_A&quot;},{&quot;type&quot;:&quot;MRC_VIDEO_VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=zbp_WRqO7uebOH0y8dF4wFbgby1H6n1QTSEmolu-7DE5bnz5_83I2vDNriUdDvL1azA7TKomImyrNsqBcDiIBg&quot;}]"
    ad-type="video"
    data-ad-click-location="background" impression-id="4315037526810191431"
    is-feed-ad-redesign="true" view-type="cardView" promoted
    dimensions={&quot;width&quot;:1080,&quot;height&quot;:1350}
    outbound-link-url="https://alb.reddit.com/cr?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=I4FEN1OYKitx98hXv05zAMUkJykbMpymZVdOuXXl-ZYOs4GvmqHRsubu_A4-x3kuGDJ9o6shQSBIknRfpoQjV4IfM0aE5VCfqg7L2gT5Jy2dtfjGjeFNJ6gUa0t5wGw6lt9-U4y2X-0KLFW10i6jR8LuHK06P6eB4Kbp5f7OHzinMRnG39dXMKGkIq1exgFDlliCg3au"
    call-to-action="View More"
    
    
    campaign-id="1873457689417658703"
    country-code="ES"
    
    
     
    
     
   ad-user-targeting="null"
   
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/user/UniversalPicturesES/comments/18y817z/qué_hace_un_tío_de_vallecas_en_hong_kong_con_1550/" content-href="https://v.redd.it/ylsf9jqwsdac1"
    view-context="SubredditFeed" comment-count="0"
    view-type="cardView" vote-type=""
    feedIndex="9"
    moderation-verdict=""
      is-desktop-viewport
    
      locked
    created-timestamp="2024-01-04T08:14:07.689000+0000" domain="universalpictures.es" id="t3_18y817z"
    post-title="¿Qué hace un tío de Vallecas en Hong Kong con 1550 millones de euros? 💵 Arón Piper protagoniza #ElCorreo ¡19 de Enero Exclusivamente en Cines!"
    post-type="video"
    
    author-id="t2_knk4nsaox" author="UniversalPicturesES"
    icon="https://styles.redditmedia.com/t5_9glxep/styles/profileIcon_7ivkrxap45rb1.jpg?width=48&amp;height=48&amp;frame=1&amp;auto=webp&amp;crop=48:48,smart&amp;s=27321489fb0cbd2ea1310125b3a6d3733d021f72"
  
    
  
  >
      
            
    <shreddit-dynamic-ad-link
      slot="full-post-link"
      class="absolute inset-0"
      anchor-style-class="w-100 block h-100"
      target="_blank"
      post-outbound-link="https://alb.reddit.com/cr?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=I4FEN1OYKitx98hXv05zAMUkJykbMpymZVdOuXXl-ZYOs4GvmqHRsubu_A4-x3kuGDJ9o6shQSBIknRfpoQjV4IfM0aE5VCfqg7L2gT5Jy2dtfjGjeFNJ6gUa0t5wGw6lt9-U4y2X-0KLFW10i6jR8LuHK06P6eB4Kbp5f7OHzinMRnG39dXMKGkIq1exgFDlliCg3au"
      post-id="t3_18y817z"
      impression-id="4315037526810191431"
      click-location="background"
      aria-label="¿Qué hace un tío de Vallecas en Hong Kong con 1550 millones de euros? 💵 Arón Piper protagoniza #ElCorreo ¡19 de Enero Exclusivamente en Cines!"
    >
    </shreddit-dynamic-ad-link>
  
            
    <div slot="credit-bar" class="mb-2xs min-h-[32px] flex justify-between items-center">
      <div class="promoted-name-container flex items-center gap-[6px] overflow-hidden text-12 pr-xs p-[4px] -m-[4px] relative">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="UniversalPicturesES"
    >
      
                
    <a rpl
      class="advertiser-name overflow-hidden flex items-center relative text-neutral-content a
  
  font-semibold
  no-visited
  no-underline hover:no-underline
  "
      href="/user/UniversalPicturesES/"
      >
        <faceplate-img
    src="https://styles.redditmedia.com/t5_9glxep/styles/profileIcon_7ivkrxap45rb1.jpg?width=48&amp;height=48&amp;frame=1&amp;auto=webp&amp;crop=48:48,smart&amp;s=27321489fb0cbd2ea1310125b3a6d3733d021f72"
    alt="u/UniversalPicturesES avatar"
    class="avatar pr-[6px] overflow-hidden rounded-full shrink-0"
    width="24"
    height="24"
    
    loading="lazy"
    
    
  ></faceplate-img>
        <span class="truncate">u/UniversalPicturesES</span>
      </a
    >
  
              
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/UniversalPicturesES" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
        <span class="inline-block my-0 text-neutral-content-weak created-separator"
              >•</span
            >
        
    <shreddit-dynamic-ad-link
      target="_blank"
      post-id="t3_18y817z"
      click-location="username"
      post-outbound-link="https://alb.reddit.com/cr?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=I4FEN1OYKitx98hXv05zAMUkJykbMpymZVdOuXXl-ZYOs4GvmqHRsubu_A4-x3kuGDJ9o6shQSBIknRfpoQjV4IfM0aE5VCfqg7L2gT5Jy2dtfjGjeFNJ6gUa0t5wGw6lt9-U4y2X-0KLFW10i6jR8LuHK06P6eB4Kbp5f7OHzinMRnG39dXMKGkIq1exgFDlliCg3au"
      impression-id="4315037526810191431"
      >
    <span
      style="flex-shrink:9999;"
      class="promoted-label text-neutral-content-weak font-normal truncate"
      >Promoted</span
    >
  </shreddit-dynamic-ad-link
    >
  
      </div>
      
    </div>
  
            
    <div slot="title" class="mb-2xs xs:mb-xs">
      
    <shreddit-dynamic-ad-link
      class="font-semibold text-neutral-content-strong m-0 text-16 xs:text-18 relative headline"
      target="_blank"
      post-outbound-link="https://alb.reddit.com/cr?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=I4FEN1OYKitx98hXv05zAMUkJykbMpymZVdOuXXl-ZYOs4GvmqHRsubu_A4-x3kuGDJ9o6shQSBIknRfpoQjV4IfM0aE5VCfqg7L2gT5Jy2dtfjGjeFNJ6gUa0t5wGw6lt9-U4y2X-0KLFW10i6jR8LuHK06P6eB4Kbp5f7OHzinMRnG39dXMKGkIq1exgFDlliCg3au"
      post-id="t3_18y817z"
      click-location="title"
      impression-id="4315037526810191431"
    >
      ¿Qué hace un tío de Vallecas en Hong Kong con 1550 millones de euros? 💵 Arón Piper protagoniza #ElCorreo ¡19 de Enero Exclusivamente en Cines!
    </shreddit-dynamic-ad-link>
  
      
    </div>
  
            
    <div slot="post-media-container" class="relative relative overflow-hidden pointer-cursor mb-xs overflow-hidden pointer-cursor bg-neutral-background rounded-[16px] isolate bg-neutral-background rounded-[16px]"> <div class="pointer-events-none absolute inset-0 border-sm border-solid border-neutral-border-weak z-[3] rounded-[16px]"></div>  
    <shreddit-with-observer-wrapper
    id="in-feed-ad-video-t3_18y817z"
    config="{&quot;threshold&quot;:[0,0.3,0.5,0.8,0.999]}"
    ><shreddit-dynamic-ad-link
    
    post-id="t3_18y817z"
    
    click-location="media"
    impression-id="4315037526810191431"
  >
    <shreddit-aspect-ratio
    id="t3_18y817z-aspect-ratio"
    style="
    --aspect-ratio: 1.25;
    --max-height: min(
        100%,
        550px
      );
  "
    >
    <shreddit-async-loader bundleName="media_player_loader">
      
    <media-telemetry-observer
      
      player-type="in_feed_player"
      post-id="t3_18y817z"
      
      
      
      
      set="1"
    >
      
    
    

    <shreddit-player
      data-post-click-location="video-player"
      src="https://v.redd.it/ylsf9jqwsdac1/HLSPlaylist.m3u8?f=hd%2ChlsSpecOrder2&amp;v=1&amp;a=1708021072%2CNTM0ZmI1NjNiZTRiYjZjY2RhZTM0Y2MxNWFmMGU0ZGVmNWQ5ZDFlZGYyODAzMTVkYzgyMzI0ZTJhZjI1NTM3Zg%3D%3D"
      class="block h-full w-full max-h-full max-w-full"
      
      
      
      poster="https://external-preview.redd.it/V3bY4FGhvEwS5i5S5u5znO2oluLSW-ZOx3X76VW8uXY.jpg?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=cd6f7db55e4909893a35ed2874322aa577b9d3bd"
      preview="https://v.redd.it/ylsf9jqwsdac1/DASH_96.mp4"
      ui="desktop"
        autoplay-pref is-promoted
    >
      <source
        src="https://v.redd.it/ylsf9jqwsdac1/HLSPlaylist.m3u8?f=hd%2ChlsSpecOrder2&amp;v=1&amp;a=1708021072%2CNTM0ZmI1NjNiZTRiYjZjY2RhZTM0Y2MxNWFmMGU0ZGVmNWQ5ZDFlZGYyODAzMTVkYzgyMzI0ZTJhZjI1NTM3Zg%3D%3D"
        type="application/vnd.apple.mpegURL"
      />
    </shreddit-player>
  
    </media-telemetry-observer>
  
      <template slot="error"> <xpromo-media-error poster="https://external-preview.redd.it/V3bY4FGhvEwS5i5S5u5znO2oluLSW-ZOx3X76VW8uXY.jpg?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=cd6f7db55e4909893a35ed2874322aa577b9d3bd">
      <xpromo-media-error-button
        app-link-params="{&quot;$android_deeplink_path&quot;:&quot;reddit/user/UniversalPicturesES/comments/18y817z/qué_hace_un_tío_de_vallecas_en_hong_kong_con_1550/&quot;,&quot;$deeplink_path&quot;:&quot;/user/UniversalPicturesES/comments/18y817z/qué_hace_un_tío_de_vallecas_en_hong_kong_con_1550/&quot;,&quot;$og_redirect&quot;:&quot;https://www.reddit.com/user/UniversalPicturesES/comments/18y817z/qué_hace_un_tío_de_vallecas_en_hong_kong_con_1550/&quot;,&quot;base_url&quot;:&quot;/user/UniversalPicturesES/comments/18y817z/qué_hace_un_tío_de_vallecas_en_hong_kong_con_1550/&quot;,&quot;compact_view&quot;:&quot;false&quot;,&quot;dnt&quot;:&quot;false&quot;,&quot;domain&quot;:&quot;www.reddit.com&quot;,&quot;geoip_country&quot;:&quot;US&quot;,&quot;language&quot;:&quot;en-US&quot;,&quot;reddaid&quot;:&quot;&quot;,&quot;session_id&quot;:&quot;&quot;,&quot;user_agent&quot;:&quot;Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0&quot;,&quot;campaign&quot;:&quot;no_amp_test&quot;,&quot;utm_name&quot;:&quot;no_amp_test&quot;,&quot;channel&quot;:&quot;xpromo&quot;,&quot;utm_source&quot;:&quot;xpromo&quot;,&quot;feature&quot;:&quot;web3x&quot;,&quot;utm_medium&quot;:&quot;web3x&quot;,&quot;keyword&quot;:&quot;no_amp&quot;,&quot;utm_term&quot;:&quot;no_amp&quot;,&quot;tags&quot;:&quot;media_error_xpromo_post&quot;,&quot;utm_content&quot;:&quot;media_error&quot;}"
        slot="button"
      ></xpromo-media-error-button>
    </xpromo-media-error> </template>
    </shreddit-async-loader>
  </shreddit-aspect-ratio
  >
  </shreddit-dynamic-ad-link></shreddit-with-observer-wrapper
  >
    
    <div
      class="py-xs px-md ad-link-bar relative flex items-center justify-between h-xl"
    >
      <hr class="border-neutral-border-weak absolute top-0 left-0 w-full"></hr>
      <div class="flex flex-col truncate">
        
    <shreddit-dynamic-ad-link
      class="ad-link-bar__domain text-12 block truncate text-neutral-content-weak hover:underline"
      target="_blank"
      post-id="t3_18y817z"
      post-outbound-link="https://alb.reddit.com/cr?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=I4FEN1OYKitx98hXv05zAMUkJykbMpymZVdOuXXl-ZYOs4GvmqHRsubu_A4-x3kuGDJ9o6shQSBIknRfpoQjV4IfM0aE5VCfqg7L2gT5Jy2dtfjGjeFNJ6gUa0t5wGw6lt9-U4y2X-0KLFW10i6jR8LuHK06P6eB4Kbp5f7OHzinMRnG39dXMKGkIq1exgFDlliCg3au"
      impression-id="4315037526810191431"
      click-location="cta_destination_url"
    >
      universalpictures.es
    </shreddit-dynamic-ad-link>
    
  
      </div>
      <shreddit-dynamic-ad-link
        class="w-100 h-100 shrink-[9999] min-w-[16px]"
        anchor-style-class="w-100 h-100 block focus:outline-none"
        target="_blank"
        post-id="t3_18y817z"
        post-outbound-link="https://alb.reddit.com/cr?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=I4FEN1OYKitx98hXv05zAMUkJykbMpymZVdOuXXl-ZYOs4GvmqHRsubu_A4-x3kuGDJ9o6shQSBIknRfpoQjV4IfM0aE5VCfqg7L2gT5Jy2dtfjGjeFNJ6gUa0t5wGw6lt9-U4y2X-0KLFW10i6jR8LuHK06P6eB4Kbp5f7OHzinMRnG39dXMKGkIq1exgFDlliCg3au"
        impression-id="4315037526810191431"
        click-location="cta_whitespace"
        disable-keyboard-nav
        aria-label="universalpictures.es"
      ></shreddit-dynamic-ad-link>
      <shreddit-dynamic-ad-link
    class="ad-link-bar__cta relative"
    target="_blank"
    post-id="t3_18y817z"
    render-as-button
    post-outbound-link="https://alb.reddit.com/cr?za=ivq-r9fFcG1pTfJAD2WW2_2Zc_76UsdJYs2pXmo3AycLoK1SR7R4K4Duj1iRU7lVLoqqGn9qwkMvFoF3uQD0O7b2Vr3fjnNwxgy2ICsiL2EJQesXexsqibOlLfWZjBbEfAlx0FCFi1E_sPHY70Cbx4DRtj3u83K2BgWfER_M6gJqpVbRbds_6lIR2GtlSXXpBILbHcwY-L21vgiA310Jp8B8zPC76UfQXnJYWCUZo04VtZxir1hIx1yBzxda0LM0Svg9kes6zT52LA7_2XkfQdrDwwrH5Qy766EDebyZQ-7Tb6nVsxn7WX667QepBxaw0bSWdNX3yCRdozMzu4-mHqLec53CMjKI8UHHKnxIOrFhWn7x_yuejj8f9AldnNDQZukRnuEBGxe3CzvcF2Jt4v9BPMlYaJcGsuGpRXnG85DwUuIqodwJcQ&amp;zp=I4FEN1OYKitx98hXv05zAMUkJykbMpymZVdOuXXl-ZYOs4GvmqHRsubu_A4-x3kuGDJ9o6shQSBIknRfpoQjV4IfM0aE5VCfqg7L2gT5Jy2dtfjGjeFNJ6gUa0t5wGw6lt9-U4y2X-0KLFW10i6jR8LuHK06P6eB4Kbp5f7OHzinMRnG39dXMKGkIq1exgFDlliCg3au"
    impression-id="4315037526810191431"
    click-location="cta_button"
    button-props="{&quot;size&quot;:&quot;sm&quot;,&quot;appearance&quot;:&quot;bordered&quot;}"
    >View More</shreddit-dynamic-ad-link
  >
    </div>
  
  </div>
  
          
    </shreddit-ad-post>
  
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197rmz0/those_who_got_a_useless_degree_what_do_you_do_now/" content-href="https://www.reddit.com/r/AskReddit/comments/197rmz0/those_who_got_a_useless_degree_what_do_you_do_now/"
    view-context="SubredditFeed" comment-count="2398"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="10"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T02:34:22.138000+0000" domain="self.AskReddit" id="t3_197rmz0"
    post-title="Those who got a “useless degree”, what do you do now?"
    post-type="text" score="1803"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_3tylp51i" author="PoisonousChicken"
    icon="https://styles.redditmedia.com/t5_11z7sb/styles/profileIcon_snoo886ef1fc-844c-48ac-b547-2edd91feeba5-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=7f4461053656dab502040e37602bbe4a00c3b12e"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197rmz0/those_who_got_a_useless_degree_what_do_you_do_now/"
        target="_self"
        aria-label="Those who got a “useless degree”, what do you do now?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="PoisonousChicken"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/PoisonousChicken/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_11z7sb/styles/profileIcon_snoo886ef1fc-844c-48ac-b547-2edd91feeba5-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=7f4461053656dab502040e37602bbe4a00c3b12e"
    alt="u/PoisonousChicken avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/PoisonousChicken</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/PoisonousChicken" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197rmz0">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T02:34:22.138000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197rmz0"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197rmz0/those_who_got_a_useless_degree_what_do_you_do_now/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197rmz0/those_who_got_a_useless_degree_what_do_you_do_now/"
    id="post-title-t3_197rmz0"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     Those who got a “useless degree”, what do you do now?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197hxly/which_musician_did_you_stop_listening_to_because/" content-href="https://www.reddit.com/r/AskReddit/comments/197hxly/which_musician_did_you_stop_listening_to_because/"
    view-context="SubredditFeed" comment-count="13300"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="11"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-15T19:48:40.789000+0000" domain="self.AskReddit" id="t3_197hxly"
    post-title="Which musician did you stop listening to because you found out they sucked as a person?"
    post-type="text" score="5948"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_8it51sjw" author="AffectionateBat-02"
    icon="https://styles.redditmedia.com/t5_39s25v/styles/profileIcon_snoo4cc9cc7b-00c0-489c-8b9b-401dea9d55ff-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=14cb764d8c6e528d0c23339a7e1ad88d8da2732b"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197hxly/which_musician_did_you_stop_listening_to_because/"
        target="_self"
        aria-label="Which musician did you stop listening to because you found out they sucked as a person?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="AffectionateBat-02"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/AffectionateBat-02/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_39s25v/styles/profileIcon_snoo4cc9cc7b-00c0-489c-8b9b-401dea9d55ff-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=14cb764d8c6e528d0c23339a7e1ad88d8da2732b"
    alt="u/AffectionateBat-02 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/AffectionateBat-02</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/AffectionateBat-02" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197hxly">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-15T19:48:40.789000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197hxly"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197hxly/which_musician_did_you_stop_listening_to_because/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197hxly/which_musician_did_you_stop_listening_to_because/"
    id="post-title-t3_197hxly"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     Which musician did you stop listening to because you found out they sucked as a person?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197l91o/how_can_people_afford_to_participate_in_grand/" content-href="https://www.reddit.com/r/AskReddit/comments/197l91o/how_can_people_afford_to_participate_in_grand/"
    view-context="SubredditFeed" comment-count="526"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="12"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-15T21:57:08.053000+0000" domain="self.AskReddit" id="t3_197l91o"
    post-title="How can people afford to participate in grand jury trials that take 12-18 months?"
    post-type="text" score="3362"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_hyaidb3nv" author="Snw2001"
    icon="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197l91o/how_can_people_afford_to_participate_in_grand/"
        target="_self"
        aria-label="How can people afford to participate in grand jury trials that take 12-18 months?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="Snw2001"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/Snw2001/"
      ><span class="mr-2xs"><faceplate-img
    src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"
    alt="u/Snw2001 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/Snw2001</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/Snw2001" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197l91o">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-15T21:57:08.053000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197l91o"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197l91o/how_can_people_afford_to_participate_in_grand/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197l91o/how_can_people_afford_to_participate_in_grand/"
    id="post-title-t3_197l91o"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     How can people afford to participate in grand jury trials that take 12-18 months?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197n0ey/whats_your_profound_life_lesson_from_a_mundane/" content-href="https://www.reddit.com/r/AskReddit/comments/197n0ey/whats_your_profound_life_lesson_from_a_mundane/"
    view-context="SubredditFeed" comment-count="508"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="13"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-15T23:06:22.425000+0000" domain="self.AskReddit" id="t3_197n0ey"
    post-title="What&#39;s your profound life lesson from a mundane moment?"
    post-type="text" score="2066"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_dkt1tkfg2" author="cadouxmoring8"
    icon="https://preview.redd.it/snoovatar/avatars/b07ac159-0845-4242-bca5-8e7d02e7e163-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=33b0447877ae1b98e96e4b7baf59356393db0b4e"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197n0ey/whats_your_profound_life_lesson_from_a_mundane/"
        target="_self"
        aria-label="What&#39;s your profound life lesson from a mundane moment?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="cadouxmoring8"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/cadouxmoring8/"
      ><span class="mr-2xs"><faceplate-img
    src="https://preview.redd.it/snoovatar/avatars/b07ac159-0845-4242-bca5-8e7d02e7e163-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=33b0447877ae1b98e96e4b7baf59356393db0b4e"
    alt="u/cadouxmoring8 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/cadouxmoring8</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/cadouxmoring8" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197n0ey">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-15T23:06:22.425000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197n0ey"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197n0ey/whats_your_profound_life_lesson_from_a_mundane/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197n0ey/whats_your_profound_life_lesson_from_a_mundane/"
    id="post-title-t3_197n0ey"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     What&#39;s your profound life lesson from a mundane moment?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/1980n48/which_invention_is_the_one_that_would_disrupt/" content-href="https://www.reddit.com/r/AskReddit/comments/1980n48/which_invention_is_the_one_that_would_disrupt/"
    view-context="SubredditFeed" comment-count="304"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="14"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T11:20:49.289000+0000" domain="self.AskReddit" id="t3_1980n48"
    post-title="Which invention is the one that would disrupt society as we know it when it would cease to exist tomorrow?"
    post-type="text" score="185"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_s30w2rkun" author="evv_inv2"
    icon="https://preview.redd.it/snoovatar/avatars/dafb0bd9-557a-4b2c-8b1b-24627d27a756-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=7d90df1511e292a7d72b7ff9bcfd8e2a330f21cb"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/1980n48/which_invention_is_the_one_that_would_disrupt/"
        target="_self"
        aria-label="Which invention is the one that would disrupt society as we know it when it would cease to exist tomorrow?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="evv_inv2"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/evv_inv2/"
      ><span class="mr-2xs"><faceplate-img
    src="https://preview.redd.it/snoovatar/avatars/dafb0bd9-557a-4b2c-8b1b-24627d27a756-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=7d90df1511e292a7d72b7ff9bcfd8e2a330f21cb"
    alt="u/evv_inv2 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/evv_inv2</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/evv_inv2" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_1980n48">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T11:20:49.289000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_1980n48"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/1980n48/which_invention_is_the_one_that_would_disrupt/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/1980n48/which_invention_is_the_one_that_would_disrupt/"
    id="post-title-t3_1980n48"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     Which invention is the one that would disrupt society as we know it when it would cease to exist tomorrow?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/19841ye/whats_the_most_valuable_thing_youve_ever_bought/" content-href="https://www.reddit.com/r/AskReddit/comments/19841ye/whats_the_most_valuable_thing_youve_ever_bought/"
    view-context="SubredditFeed" comment-count="138"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="15"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T14:25:07.919000+0000" domain="self.AskReddit" id="t3_19841ye"
    post-title="What&#39;s the most valuable thing you&#39;ve ever bought for the least amount of money?"
    post-type="text" score="101"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_s6s7k3ktm" author="Serious-Brown-Eyes"
    icon="https://preview.redd.it/snoovatar/avatars/a71eb141-4767-4aa5-9013-accf62ca0263-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=98a994d3d1ca0bb3ccd2b7f4a69290a5354be725"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/19841ye/whats_the_most_valuable_thing_youve_ever_bought/"
        target="_self"
        aria-label="What&#39;s the most valuable thing you&#39;ve ever bought for the least amount of money?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="Serious-Brown-Eyes"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/Serious-Brown-Eyes/"
      ><span class="mr-2xs"><faceplate-img
    src="https://preview.redd.it/snoovatar/avatars/a71eb141-4767-4aa5-9013-accf62ca0263-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=98a994d3d1ca0bb3ccd2b7f4a69290a5354be725"
    alt="u/Serious-Brown-Eyes avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/Serious-Brown-Eyes</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/Serious-Brown-Eyes" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_19841ye">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T14:25:07.919000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_19841ye"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/19841ye/whats_the_most_valuable_thing_youve_ever_bought/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/19841ye/whats_the_most_valuable_thing_youve_ever_bought/"
    id="post-title-t3_19841ye"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     What&#39;s the most valuable thing you&#39;ve ever bought for the least amount of money?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/1983jd6/whats_the_best_day_of_your_life/" content-href="https://www.reddit.com/r/AskReddit/comments/1983jd6/whats_the_best_day_of_your_life/"
    view-context="SubredditFeed" comment-count="127"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="16"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T14:01:03.190000+0000" domain="self.AskReddit" id="t3_1983jd6"
    post-title="what&#39;s the best day of your life?"
    post-type="text" score="102"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_rsn6vuex" author="Tan1russ"
    icon="https://styles.redditmedia.com/t5_6x10cc/styles/profileIcon_zjh0uejf4hj91.jpg?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=b4c685b07cd50e24ba8b8211cc3e268d43acfe6c"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/1983jd6/whats_the_best_day_of_your_life/"
        target="_self"
        aria-label="what&#39;s the best day of your life?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="Tan1russ"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/Tan1russ/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_6x10cc/styles/profileIcon_zjh0uejf4hj91.jpg?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=b4c685b07cd50e24ba8b8211cc3e268d43acfe6c"
    alt="u/Tan1russ avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/Tan1russ</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/Tan1russ" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_1983jd6">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T14:01:03.190000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_1983jd6"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/1983jd6/whats_the_best_day_of_your_life/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/1983jd6/whats_the_best_day_of_your_life/"
    id="post-title-t3_1983jd6"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     what&#39;s the best day of your life?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> 
    <shreddit-ad-post 
    class="promotedlink block relative nd:visible bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs" ad-events="[{&quot;type&quot;:&quot;IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=WC0oQS71s2wGmr0D-r5IZ2v8fVSZXhJkv9VaehJvPkt7YxXT2mOjOQLFfHYfCquaLGiIzBI&quot;},{&quot;type&quot;:&quot;COMMENTS_VIEW&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=966tBCHNKwUxpRIIyhdcGPw4Xto2D4HqUuEuypZmFzBRHVPUyteQs5iHAoGtVynQTaFhyMHeEQqRaLZ6Cc18&quot;},{&quot;type&quot;:&quot;UPVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=StlXedlNRUcNe84-01amQ2qELZ-L71w-h-N_yfLzBpyEBe6nzPHzJ7sUwDkl5KFrQHfOPSAiuX7nVup6pAwA&quot;},{&quot;type&quot;:&quot;DOWNVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=4T8ohZ0Ny17M4mVqepqJZWx937YHd7NVQMDVfwOt2UmSTKYiLLB67XJFeHkA5-fXgQdmUFEOzlQPUXluwMyX&quot;},{&quot;type&quot;:&quot;COMMENT&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=5dKF1Lq7VdbsqnZHoVG_K_tLMZlULzUm-doqy1JcX1FzjGIDn2lKA3Ot70HLI_p5G2UaDXmejvPBaRinF5Fb&quot;},{&quot;type&quot;:&quot;VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=Xi5pS1XrHkMaP0NuMj-uemLTqe5qmnozKG2g--KUulqaXGJvZlS-rqiVtqMeaFI4MTd75mCX1FHPS4TAx-v8&quot;},{&quot;type&quot;:&quot;COMMENT_UPVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=pQEg7PyiZt7mQG1W2LcrIK-FKB6zfw7jQ-NduJxEyIcF4rT2-uYHnJQGQJDkxOhZPCP5jKEcyI7Lr8bWThku&quot;},{&quot;type&quot;:&quot;COMMENT_DOWNVOTE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=5Cv1-Bo8z0gff3ny29GD32_IqVuIlC9NPkf2USNGrZclhYTZu1gHdpOfXigD0UKiocHumNZiiebe9L70qkwh&quot;},{&quot;type&quot;:&quot;VENDOR_FULLY_IN_VIEW&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=RMlGdhMK-ZHIxH_fi2naD7WIsAbuGYnlyVyYLyS_vKPZqysWRPNML6TKzvB4SZ8kOCZj_nnjfs17qCD7Q-mB&quot;},{&quot;type&quot;:&quot;VENDOR_FULLY_IN_VIEW_5_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=i-i7UV-BLM2tjQcVsTph9QUzZbzloLQkfSB3mp-QCXSDYvCy6D_3mQxKZrfP7jj0p8-3BrVUSpeDq0gZ7gfP&quot;},{&quot;type&quot;:&quot;VENDOR_FULLY_IN_VIEW_15_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=g-qkTuYkplA6mlgflSZ5ookahOzBK3xZHTfGaY4ZmXqUxZB7mK0ms-ZVQaD3Hfdetb0c0FfsE36sovvebLNg&quot;},{&quot;type&quot;:&quot;GROUP_M_VIEWABLE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=6w_kuSjHkshP2EvSug6tBBvFoWlATSKKORWEBVWv63Yu6nVHV-DCjgKEDmATBLo6oubhHRAkH48W3YeL7fEE&quot;},{&quot;type&quot;:&quot;UNLOAD&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=Sti3sIZEMGn268-u5QhIxj1CKf_HpsDSmzQAu6bOlLGsqFmayqDMQn5D6by79-JtEwexWIdtTlIFgXjmCOkK&quot;},{&quot;type&quot;:&quot;VIDEO_VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=q9zTGUjyXlXUzJs-8daTQ66DaSJBZikTN7CIvc9m7xLG5zA2BTYP5kabGGRUVUWWtw_OkRd_-DONtpCXOjMwKQ&quot;},{&quot;type&quot;:&quot;VIDEO_FULLY_VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=iGMFMTVddgFvRRqfr39UtvAvV41ujOWLejVsoK3RDJZx4rjddEj6CMqZDZfgVo4Pnn9XJ46umuXkIlfyTsLZcw&quot;},{&quot;type&quot;:&quot;VIDEO_PLAYED_WITH_SOUND&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ouJ6dTaeapa6bar4Il3a6B8uM_XUJGasueg2FfALicxRqpFJ-3KifTXhEItXE-1CUjF-drIfgkc5lpQ_yBiyyg&quot;},{&quot;type&quot;:&quot;VIDEO_PLAYED_EXPANDED&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=-6gaj74bGCbaXPuac3vaSnWve3IyEjBqp3_eV4aVqZgvqWiLJm7MlO2ATtolwuGds09_vq7l_-B4o2nwEFgwFA&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_25&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=Sr3mvsrf2iQKpz8w5aXq9ANv5UoAqJF_bKx9IeJGi-H6gVt0KU954FVNPcFqgppHyanYkyXUmoyJJPQx4_aEjg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_50&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=I9uZBv8seVm5xgXYtZdu3FY06hGfOrAawGPaBLbyEllbSrptv2SKFI6zRExja2-VUbBZGgjivCYlNN3JmhZwYw&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_75&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=kY84JCA-ZhSY7v9Z-mQtAXj86R_vQ2Z16KMKlaL7BLbzp2Vi_vxIHHbZSrNoGX8S6wrUu-o6bUzumb63Zvo9XA&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_95&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=aLdmMbrUIWQzup8_ey6_dT4y8sWvk_PqjzbxnZB3Xc7kEueNlIR5mJx-Tlgd1uFIod31HGqqu5fqL7ZpI5KQmg&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_100&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=MWcOp_cHrK2e-gOOcR5JsTrCoUsGo4tBmm_v1zA8EpWvLPZw-zUt9Kz2b48x6EStHxoFn5MoOgBLbPxk3Udnuw&quot;},{&quot;type&quot;:&quot;VIDEO_STARTED&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=jOK4fpL5Fy-KAVg5ayzjJsfTb1QuVyg00r-mBINPQU4tfKgZ2z4ctrZcc6t22VDqmVCfkfHcW8sWgfOnU2w5lw&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_3_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=sdQIUXSi0ZqgQmyM8h3SDs_MdxROr2KvJd4fIwdqZq4L7pruL9bTrxUy-aodBgn_0Nah9P-5SOs7uKCL1gaKBw&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_5_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=tPi_dgLyAjTwmbqghRihMK18XzvPfp2ciXwHF2D5F6Rxv5uTO4fPLwowKqW7Z6szFJO06K5BZKoFuEhE19HdaA&quot;},{&quot;type&quot;:&quot;VIDEO_WATCHED_10_SECS&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=PZ_E7XYAI_dO1GlHE3gnO8TF0lZBty3GUn9_p4IXGbEaCIt49vyF0fi4LvJ1EzBuQ8xFUsmIzZUpQ03wPVREfg&quot;},{&quot;type&quot;:&quot;VIDEO_GROUP_M_VIEWABLE&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=qmYJgZCQRpoNNhoDlin0863jBNyVc96C_WDLZ62iGF2S70meffNOT8ypNYp3-2ogjViDFgBvgJdeoqbczlJcEw&quot;},{&quot;type&quot;:&quot;VIDEO_VENDOR_FULLY_VIEWABLE_50&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=AsqP_-XohWOIaEsNuT3A7a_XnzUrmCttzj3rg1X_yJd3m1U7YIlWltxsVUvu2PsXJbgtNVNBLOa14HlT5BRL2g&quot;},{&quot;type&quot;:&quot;MRC_VIDEO_VIEWABLE_IMPRESSION&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/i.gif?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=BsmER3dBiqY4c65G_59B_v85H7CLA3Uhd4NdcQqXjS9-b2dmXIJlwIk1FFLN89F2cCQzzP_0IktvB5nZthTzHA&quot;},{&quot;type&quot;:&quot;CLICK&quot;,&quot;url&quot;:&quot;https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d&quot;}]"
    ad-type="video"
    data-ad-click-location="background" impression-id="4315037526711690823"
    is-feed-ad-redesign="true" view-type="cardView" promoted
    dimensions={&quot;width&quot;:1080,&quot;height&quot;:1080}
    outbound-link-url="https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d"
    call-to-action="Play Now"
    
    
    campaign-id="1832704193369607754"
    country-code="ES"
    
    
     
    
     
   ad-user-targeting="null"
   
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/user/PC_Spain/comments/182ophh/aumenta_tus_ganancias_con_el_increíble_premio_de/" content-href="https://v.redd.it/bwtzqdb8b5yb1"
    view-context="SubredditFeed" comment-count="0"
    view-type="cardView" vote-type=""
    feedIndex="17"
    moderation-verdict=""
      is-desktop-viewport
    
      locked
    created-timestamp="2023-11-24T09:52:27.766000+0000" domain="platincasinoaffiliates.es" id="t3_182ophh"
    post-title="¡Aumenta tus ganancias con el increíble premio de 50.000x tu apuesta! 💰🎉"
    post-type="video" score="7"
    
    author-id="t2_ag0rd92y7" author="PC_Spain"
    icon="https://styles.redditmedia.com/t5_8bytma/styles/profileIcon_snmzxc2aqn1c1.png?width=48&amp;height=48&amp;frame=1&amp;auto=webp&amp;crop=48:48,smart&amp;s=41246e3371777f742b6a9140cb94de92d52ca818"
  
    
  
  >
      
            
    <shreddit-dynamic-ad-link
      slot="full-post-link"
      class="absolute inset-0"
      anchor-style-class="w-100 block h-100"
      target="_blank"
      post-outbound-link="https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d"
      post-id="t3_182ophh"
      impression-id="4315037526711690823"
      click-location="background"
      aria-label="¡Aumenta tus ganancias con el increíble premio de 50.000x tu apuesta! 💰🎉"
    >
    </shreddit-dynamic-ad-link>
  
            
    <div slot="credit-bar" class="mb-2xs min-h-[32px] flex justify-between items-center">
      <div class="promoted-name-container flex items-center gap-[6px] overflow-hidden text-12 pr-xs p-[4px] -m-[4px] relative">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="PC_Spain"
    >
      
                
    <a rpl
      class="advertiser-name overflow-hidden flex items-center relative text-neutral-content a
  
  font-semibold
  no-visited
  no-underline hover:no-underline
  "
      href="/user/PC_Spain/"
      >
        <faceplate-img
    src="https://styles.redditmedia.com/t5_8bytma/styles/profileIcon_snmzxc2aqn1c1.png?width=48&amp;height=48&amp;frame=1&amp;auto=webp&amp;crop=48:48,smart&amp;s=41246e3371777f742b6a9140cb94de92d52ca818"
    alt="u/PC_Spain avatar"
    class="avatar pr-[6px] overflow-hidden rounded-full shrink-0"
    width="24"
    height="24"
    
    loading="lazy"
    
    
  ></faceplate-img>
        <span class="truncate">u/PC_Spain</span>
      </a
    >
  
              
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/PC_Spain" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
        <span class="inline-block my-0 text-neutral-content-weak created-separator"
              >•</span
            >
        
    <shreddit-dynamic-ad-link
      target="_blank"
      post-id="t3_182ophh"
      click-location="username"
      post-outbound-link="https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d"
      impression-id="4315037526711690823"
      >
    <span
      style="flex-shrink:9999;"
      class="promoted-label text-neutral-content-weak font-normal truncate"
      >Promoted</span
    >
  </shreddit-dynamic-ad-link
    >
  
      </div>
      
    </div>
  
            
    <div slot="title" class="mb-2xs xs:mb-xs">
      
    <shreddit-dynamic-ad-link
      class="font-semibold text-neutral-content-strong m-0 text-16 xs:text-18 relative headline"
      target="_blank"
      post-outbound-link="https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d"
      post-id="t3_182ophh"
      click-location="title"
      impression-id="4315037526711690823"
    >
      ¡Aumenta tus ganancias con el increíble premio de 50.000x tu apuesta! 💰🎉
    </shreddit-dynamic-ad-link>
  
      
    <shreddit-ad-supplementary-text class="relative">
      <div
    id="t3_182ophh-post-rtjson-content"
    class="md mt-2xs"
    style="--emote-size: 20px"
  >
    <p>
    Además, no te pierdas la oportunidad de llevarte el increíble Bote Acumulado de 1.500.000 euros.🔥
  </p>
  </div>
    </shreddit-ad-supplementary-text>
  
    </div>
  
            
    <div slot="post-media-container" class="relative relative overflow-hidden pointer-cursor mb-xs overflow-hidden pointer-cursor bg-neutral-background rounded-[16px] isolate bg-neutral-background rounded-[16px]"> <div class="pointer-events-none absolute inset-0 border-sm border-solid border-neutral-border-weak z-[3] rounded-[16px]"></div>  
    <shreddit-with-observer-wrapper
    id="in-feed-ad-video-t3_182ophh"
    config="{&quot;threshold&quot;:[0,0.3,0.5,0.8,0.999]}"
    ><shreddit-dynamic-ad-link
    
    post-id="t3_182ophh"
    
    click-location="media"
    impression-id="4315037526711690823"
  >
    <shreddit-aspect-ratio
    id="t3_182ophh-aspect-ratio"
    style="
    --aspect-ratio: 1;
    --max-height: min(
        100%,
        550px
      );
  "
    >
    <shreddit-async-loader bundleName="media_player_loader">
      
    <media-telemetry-observer
      
      player-type="in_feed_player"
      post-id="t3_182ophh"
      
      
      post-score="7"
      
      set="1"
    >
      
    
    

    <shreddit-player
      data-post-click-location="video-player"
      src="https://v.redd.it/bwtzqdb8b5yb1/HLSPlaylist.m3u8?f=hd%2ChlsSpecOrder2&amp;v=1&amp;a=1708021072%2CYWVhMjZjOWYwMDgwZDEyY2Q1MDJlYTUxODBlMDdlMWQzMmYzYmE5YWQ2ZDc1YWIyNjlkYjM4YzAwN2RiMjBkMA%3D%3D"
      class="block h-full w-full max-h-full max-w-full"
      
      
      
      poster="https://external-preview.redd.it/tAh846zmfX2UcU0bKqwnJEdFq6mg3iCqTcad7Gh2OiE.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=f8c5117a20814881ac7cdd9d1c2a2ec4787fc4ca"
      preview="https://v.redd.it/bwtzqdb8b5yb1/DASH_96.mp4"
      ui="desktop"
        autoplay-pref is-promoted
    >
      <source
        src="https://v.redd.it/bwtzqdb8b5yb1/HLSPlaylist.m3u8?f=hd%2ChlsSpecOrder2&amp;v=1&amp;a=1708021072%2CYWVhMjZjOWYwMDgwZDEyY2Q1MDJlYTUxODBlMDdlMWQzMmYzYmE5YWQ2ZDc1YWIyNjlkYjM4YzAwN2RiMjBkMA%3D%3D"
        type="application/vnd.apple.mpegURL"
      />
    </shreddit-player>
  
    </media-telemetry-observer>
  
      <template slot="error"> <xpromo-media-error poster="https://external-preview.redd.it/tAh846zmfX2UcU0bKqwnJEdFq6mg3iCqTcad7Gh2OiE.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=f8c5117a20814881ac7cdd9d1c2a2ec4787fc4ca">
      <xpromo-media-error-button
        app-link-params="{&quot;$android_deeplink_path&quot;:&quot;reddit/user/PC_Spain/comments/182ophh/aumenta_tus_ganancias_con_el_increíble_premio_de/&quot;,&quot;$deeplink_path&quot;:&quot;/user/PC_Spain/comments/182ophh/aumenta_tus_ganancias_con_el_increíble_premio_de/&quot;,&quot;$og_redirect&quot;:&quot;https://www.reddit.com/user/PC_Spain/comments/182ophh/aumenta_tus_ganancias_con_el_increíble_premio_de/&quot;,&quot;base_url&quot;:&quot;/user/PC_Spain/comments/182ophh/aumenta_tus_ganancias_con_el_increíble_premio_de/&quot;,&quot;compact_view&quot;:&quot;false&quot;,&quot;dnt&quot;:&quot;false&quot;,&quot;domain&quot;:&quot;www.reddit.com&quot;,&quot;geoip_country&quot;:&quot;US&quot;,&quot;language&quot;:&quot;en-US&quot;,&quot;reddaid&quot;:&quot;&quot;,&quot;session_id&quot;:&quot;&quot;,&quot;user_agent&quot;:&quot;Mozilla/5.0 (Windows NT 6.1; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0&quot;,&quot;campaign&quot;:&quot;no_amp_test&quot;,&quot;utm_name&quot;:&quot;no_amp_test&quot;,&quot;channel&quot;:&quot;xpromo&quot;,&quot;utm_source&quot;:&quot;xpromo&quot;,&quot;feature&quot;:&quot;web3x&quot;,&quot;utm_medium&quot;:&quot;web3x&quot;,&quot;keyword&quot;:&quot;no_amp&quot;,&quot;utm_term&quot;:&quot;no_amp&quot;,&quot;tags&quot;:&quot;media_error_xpromo_post&quot;,&quot;utm_content&quot;:&quot;media_error&quot;}"
        slot="button"
      ></xpromo-media-error-button>
    </xpromo-media-error> </template>
    </shreddit-async-loader>
  </shreddit-aspect-ratio
  >
  </shreddit-dynamic-ad-link></shreddit-with-observer-wrapper
  >
    
    <div
      class="py-xs px-md ad-link-bar relative flex items-center justify-between h-xl"
    >
      <hr class="border-neutral-border-weak absolute top-0 left-0 w-full"></hr>
      <div class="flex flex-col truncate">
        
    <shreddit-dynamic-ad-link
      class="ad-link-bar__domain text-12 block truncate text-neutral-content-weak hover:underline"
      target="_blank"
      post-id="t3_182ophh"
      post-outbound-link="https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d"
      impression-id="4315037526711690823"
      click-location="cta_destination_url"
    >
      platincasinoaffiliates.es
    </shreddit-dynamic-ad-link>
    
  
      </div>
      <shreddit-dynamic-ad-link
        class="w-100 h-100 shrink-[9999] min-w-[16px]"
        anchor-style-class="w-100 h-100 block focus:outline-none"
        target="_blank"
        post-id="t3_182ophh"
        post-outbound-link="https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d"
        impression-id="4315037526711690823"
        click-location="cta_whitespace"
        disable-keyboard-nav
        aria-label="platincasinoaffiliates.es"
      ></shreddit-dynamic-ad-link>
      <shreddit-dynamic-ad-link
    class="ad-link-bar__cta relative"
    target="_blank"
    post-id="t3_182ophh"
    render-as-button
    post-outbound-link="https://alb.reddit.com/cr?za=feKWukqal4aF3-wpYgsZLCxKdp8CdsUxGZSTVCzdA4U47l_OC5Cs_CdaPs4CqNBEswylg84Vd-o7U16p6da-ogTOPD8x-M7I1SLG57R34CBCZ7QWWY627IND9tH2o1mTNBU643O6DLX9zczG1Lc1CI4SWPH5i8ScLdLzIjSyOAVjLRd-Obd-HcfkjzaLI4uVMAKlQ-IFCNo1gBinodmoG3eEWY3PJPx6CW4qmxlFK3BVWmyartWqvSEfbt1kYLnlCywiIC8qan-C1t-3xG_WzrH1cX_0pZqhSJQ0iSlcZsT_qOxQy6I5YQSFp_WsTqk8Syli4wEOd6fjWNeOZ5q4q3vmC-2B4xvxccddRva2nnYL0w7j3zX2n2tvKy3qtrCCU-FKY2k16jNwcsNjXxZ1k0UVbWolTRms9pguruLmETxapic&amp;zp=ECgcdKHpNonTyWwPrt_bGw8Fet6JSu58mssrFw0VC27V0AQyHhPJjhrOiaT3RzGQUT5Ry90GA_fcIuaYt09qwZk8t8H4SoRgyYm1l2eCgKs8PyAVs8xPsNR6th0XqsDTrKGFIaTzlS5ypkQ3iPpnDPsDu7jq9u5_XwrbgRbtK9jXjODi1IEpBMAEPpzb9mudGmiy35Ia_xfnJljgtmoh9rHUV37d"
    impression-id="4315037526711690823"
    click-location="cta_button"
    button-props="{&quot;size&quot;:&quot;sm&quot;,&quot;appearance&quot;:&quot;bordered&quot;}"
    >Play Now</shreddit-dynamic-ad-link
  >
    </div>
  
  </div>
  
          
    </shreddit-ad-post>
  
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/198399n/if_today_was_your_birthday_what_would_you_want_as/" content-href="https://www.reddit.com/r/AskReddit/comments/198399n/if_today_was_your_birthday_what_would_you_want_as/"
    view-context="SubredditFeed" comment-count="240"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="18"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T13:47:06.528000+0000" domain="self.AskReddit" id="t3_198399n"
    post-title="If today was your birthday, what would you want as your present?"
    post-type="text" score="98"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_hojzz" author="SDKrishna673"
    icon="https://styles.redditmedia.com/t5_1pt3i3/styles/profileIcon_snoo7a08f26d-3c17-494d-96d8-210b8f1f731b-headshot-f.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=a017763b01e1bb5e2fcd13b5a6e27f55da8812cf"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/198399n/if_today_was_your_birthday_what_would_you_want_as/"
        target="_self"
        aria-label="If today was your birthday, what would you want as your present?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="SDKrishna673"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/SDKrishna673/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_1pt3i3/styles/profileIcon_snoo7a08f26d-3c17-494d-96d8-210b8f1f731b-headshot-f.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=a017763b01e1bb5e2fcd13b5a6e27f55da8812cf"
    alt="u/SDKrishna673 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/SDKrishna673</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/SDKrishna673" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_198399n">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T13:47:06.528000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_198399n"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/198399n/if_today_was_your_birthday_what_would_you_want_as/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/198399n/if_today_was_your_birthday_what_would_you_want_as/"
    id="post-title-t3_198399n"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     If today was your birthday, what would you want as your present?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/1980dbr/which_company_or_group_do_you_think_manipulates/" content-href="https://www.reddit.com/r/AskReddit/comments/1980dbr/which_company_or_group_do_you_think_manipulates/"
    view-context="SubredditFeed" comment-count="240"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="19"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T11:04:12.757000+0000" domain="self.AskReddit" id="t3_1980dbr"
    post-title="Which company or group do you think manipulates politics the most?"
    post-type="text" score="155"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_cy0o9sto" author="Clean-Interview3247"
    icon="https://styles.redditmedia.com/t5_4qe03b/styles/profileIcon_snoobc112e8e-90f2-4577-9ba7-43e2af86c360-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=4c9be7aa2e2daec1acf3f1aef5ce65fc8190d8c6"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/1980dbr/which_company_or_group_do_you_think_manipulates/"
        target="_self"
        aria-label="Which company or group do you think manipulates politics the most?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="Clean-Interview3247"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/Clean-Interview3247/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_4qe03b/styles/profileIcon_snoobc112e8e-90f2-4577-9ba7-43e2af86c360-headshot.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=4c9be7aa2e2daec1acf3f1aef5ce65fc8190d8c6"
    alt="u/Clean-Interview3247 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/Clean-Interview3247</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/Clean-Interview3247" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_1980dbr">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T11:04:12.757000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_1980dbr"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/1980dbr/which_company_or_group_do_you_think_manipulates/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/1980dbr/which_company_or_group_do_you_think_manipulates/"
    id="post-title-t3_1980dbr"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     Which company or group do you think manipulates politics the most?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197txcd/does_death_scare_you_if_so_why_if_not_why/" content-href="https://www.reddit.com/r/AskReddit/comments/197txcd/does_death_scare_you_if_so_why_if_not_why/"
    view-context="SubredditFeed" comment-count="1685"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="20"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T04:27:21.085000+0000" domain="self.AskReddit" id="t3_197txcd"
    post-title="Does death scare you if so why? If not why?"
    post-type="text" score="440"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_40dh9iot" author="butterface89"
    icon="https://styles.redditmedia.com/t5_2hzbxg/styles/profileIcon_snoo74c9033c-7922-4e61-8cf8-8ebcc083c8af-headshot-f.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=b0e696de08b8490c20c6aea520c81a88d2a7a39a"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197txcd/does_death_scare_you_if_so_why_if_not_why/"
        target="_self"
        aria-label="Does death scare you if so why? If not why?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="butterface89"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/butterface89/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_2hzbxg/styles/profileIcon_snoo74c9033c-7922-4e61-8cf8-8ebcc083c8af-headshot-f.png?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=b0e696de08b8490c20c6aea520c81a88d2a7a39a"
    alt="u/butterface89 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/butterface89</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/butterface89" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197txcd">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T04:27:21.085000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197txcd"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197txcd/does_death_scare_you_if_so_why_if_not_why/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197txcd/does_death_scare_you_if_so_why_if_not_why/"
    id="post-title-t3_197txcd"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     Does death scare you if so why? If not why?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197ez9t/what_country_has_the_craziest_rebranding_ever_and/" content-href="https://www.reddit.com/r/AskReddit/comments/197ez9t/what_country_has_the_craziest_rebranding_ever_and/"
    view-context="SubredditFeed" comment-count="1745"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="21"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-15T17:54:03.510000+0000" domain="self.AskReddit" id="t3_197ez9t"
    post-title="What country has the craziest rebranding ever and why?"
    post-type="text" score="2927"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_p8j9ut9nx" author="ViewstaReddit"
    icon="https://styles.redditmedia.com/t5_a9zf9l/styles/profileIcon_wj1fp9chescc1.jpeg?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=ecd6aef6842e562efc46f86c89933a37ea16b9a4"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197ez9t/what_country_has_the_craziest_rebranding_ever_and/"
        target="_self"
        aria-label="What country has the craziest rebranding ever and why?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="ViewstaReddit"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/ViewstaReddit/"
      ><span class="mr-2xs"><faceplate-img
    src="https://styles.redditmedia.com/t5_a9zf9l/styles/profileIcon_wj1fp9chescc1.jpeg?width=64&amp;height=64&amp;frame=1&amp;auto=webp&amp;crop=64:64,smart&amp;s=ecd6aef6842e562efc46f86c89933a37ea16b9a4"
    alt="u/ViewstaReddit avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/ViewstaReddit</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/ViewstaReddit" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197ez9t">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-15T17:54:03.510000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197ez9t"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197ez9t/what_country_has_the_craziest_rebranding_ever_and/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197ez9t/what_country_has_the_craziest_rebranding_ever_and/"
    id="post-title-t3_197ez9t"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     What country has the craziest rebranding ever and why?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/197onf6/what_was_something_that_ruined_your_life_or_set/" content-href="https://www.reddit.com/r/AskReddit/comments/197onf6/what_was_something_that_ruined_your_life_or_set/"
    view-context="SubredditFeed" comment-count="1985"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="22"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T00:17:00.686000+0000" domain="self.AskReddit" id="t3_197onf6"
    post-title="What was something that ruined your life or set you back in life significantly?"
    post-type="text" score="873"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_xzhkd" author="joseph887"
    icon="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/197onf6/what_was_something_that_ruined_your_life_or_set/"
        target="_self"
        aria-label="What was something that ruined your life or set you back in life significantly?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="joseph887"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/joseph887/"
      ><span class="mr-2xs"><faceplate-img
    src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png"
    alt="u/joseph887 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/joseph887</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/joseph887" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_197onf6">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T00:17:00.686000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_197onf6"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/197onf6/what_was_something_that_ruined_your_life_or_set/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/197onf6/what_was_something_that_ruined_your_life_or_set/"
    id="post-title-t3_197onf6"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     What was something that ruined your life or set you back in life significantly?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/19818kc/if_you_could_make_sure_one_crime_never_happens/" content-href="https://www.reddit.com/r/AskReddit/comments/19818kc/if_you_could_make_sure_one_crime_never_happens/"
    view-context="SubredditFeed" comment-count="170"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="23"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T11:57:15.840000+0000" domain="self.AskReddit" id="t3_19818kc"
    post-title="If you could make sure one crime never happens again, but to do this you have to commit the crime yourself, what would it be?"
    post-type="text" score="98"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_a5rdwyx3" author="FabulousNeck1497"
    icon="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/19818kc/if_you_could_make_sure_one_crime_never_happens/"
        target="_self"
        aria-label="If you could make sure one crime never happens again, but to do this you have to commit the crime yourself, what would it be?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="user-hover-card" close-on-track
      aria-label="FabulousNeck1497"
    >
      <faceplate-tracker
    source="post_credit_bar"
    action="click"
    noun="user_profile"
    class="visible"
    data-faceplate-tracking-context=""
    ><a rpl
      class="flex items-center text-neutral-content visited:text-neutral-content-weak font-bold a
  
  
  no-visited
  no-underline hover:no-underline
  "
      href="/user/FabulousNeck1497/"
      ><span class="mr-2xs"><faceplate-img
    src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png"
    alt="u/FabulousNeck1497 avatar"
    class="avatar nd:visible nd:block nd:animate-pulse nd:bg-neutral-background-selected overflow-hidden rounded-full shrink-0 h-lg w-lg"
    
    loading="lazy"
    
    
  ></faceplate-img></span>
  <span class="whitespace-nowrap">u/FabulousNeck1497</span></a
    ></faceplate-tracker
  >
      <div slot="content">
        <faceplate-partial src="/svc/shreddit/user-hover-card/FabulousNeck1497" loading="programmatic">
          <div class="w-5xl h-4xl flex items-center justify-center">
            <faceplate-progress value="20" class="animate-spin"></faceplate-progress>
          </div>
        </faceplate-partial>
      </div>
    </faceplate-hovercard>
  
        
      </div>
    </span>
   </span>
        <shreddit-async-loader bundlename="distinguished_post_tags">
    <shreddit-distinguished-post-tags class="nd:visible flex" post-id="t3_19818kc">
      <svg rpl
      aria-label="Post distinguished by admin"
      class="hidden distinguished-admin fill-[color:var(--color-global-brand-orangered)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="admin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>
    </svg>
      <svg rpl
      aria-label="Post distinguished by moderator"
      class="hidden distinguished-mod fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="mod-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"></path>
    </svg>
    </shreddit-distinguished-post-tags>
  </shreddit-async-loader>  <span class="inline-block my-0 created-separator text-neutral-content-weak">•</span>
        
        
    <faceplate-timeago
      ts="2024-01-16T11:57:15.840000+0000"
      format="short"
      class="whitespace-nowrap text-neutral-content-weak"
    ></faceplate-timeago>
  
         
        
      </span>
      <span class="flex items-center pl-xs">
        
    <shreddit-async-loader bundlename="status_icons">
      <shreddit-status-icons
        class="nd:visible flex items-center gap-2xs"
        thing-id="t3_19818kc"
      >
        <svg rpl
      aria-label="Locked post"
      class="hidden lock-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="lock-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>
    </svg>
        <svg rpl
      aria-label="Sticked post"
      class="hidden stickied-status fill-[color:var(--color-identity-moderator)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="pin-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>
    </svg>
        <svg rpl
      aria-label="Archived post"
      class="hidden archived-status fill-[color:var(--color-identity-coins)] shrink-0"
      fill="currentColor"
      height="12"
      icon-name="archived-fill"
      viewBox="0 0 20 20"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 2.125v3.75A1.127 1.127 0 0 1 17.875 7H2.125A1.127 1.127 0 0 1 1 5.875v-3.75A1.127 1.127 0 0 1 2.125 1h15.75A1.127 1.127 0 0 1 19 2.125Zm-1 6.287v9.453a1.19 1.19 0 0 1-1.192 1.185H3.192A1.19 1.19 0 0 1 2 17.865V8.412c.042 0 .082.013.125.013h15.75c.043 0 .083-.011.125-.013ZM13.35 11h-6.7v1.5h6.7V11Z"></path>
    </svg>
      </shreddit-status-icons>
    </shreddit-async-loader>
  
        
        <shreddit-async-loader
    class="relative min-w-[32px] -mr-[7px]"
    bundleName="shreddit_post_overflow_menu"
  >
    <shreddit-post-overflow-menu is-desktop is-report-enabled is-feed-post
      subreddit-id="t5_2qh1i"
      post-permalink="/r/AskReddit/comments/19818kc/if_you_could_make_sure_one_crime_never_happens/"
      subreddit-prefixed-name="r/AskReddit"
    >
      
            <div slot="devvit-actions">
              
            </div>
          
    </shreddit-post-overflow-menu>
  </shreddit-async-loader>
      </span>
    </span>
  
    <a
    href="/r/AskReddit/comments/19818kc/if_you_could_make_sure_one_crime_never_happens/"
    id="post-title-t3_19818kc"
    slot="title"
    class="block font-semibold text-neutral-content-strong m-0 visited:text-neutral-content-weak text-16 xs:text-18  mb-2xs xs:mb-xs "
  >
     If you could make sure one crime never happens again, but to do this you have to commit the crime yourself, what would it be?
  </a>
    
    
    
    
    
  
    </shreddit-post>
  </article>
    <hr class="border-0 border-b-sm border-solid border-b-neutral-border-weak" /> <article class="m-0">
    <shreddit-post 
    class="block relative cursor-pointer bg-neutral-background focus-within:bg-neutral-background-hover hover:bg-neutral-background-hover xs:rounded-[16px] px-md py-2xs my-2xs nd:visible"
    permalink="/r/AskReddit/comments/19802qx/what_is_something_you_do_that_isnt_selfish/" content-href="https://www.reddit.com/r/AskReddit/comments/19802qx/what_is_something_you_do_that_isnt_selfish/"
    view-context="SubredditFeed" comment-count="109"
    view-type="cardView" vote-type="" pdp-target="_self"
    feedIndex="24"
    moderation-verdict=""
      is-embeddable is-desktop-viewport
    
     
    created-timestamp="2024-01-16T10:46:00.276000+0000" domain="self.AskReddit" id="t3_19802qx"
    post-title="What is something you do that isn&#39;t selfish?"
    post-type="text" score="132"
    subreddit-id="t5_2qh1i"
    subreddit-prefixed-name="r/AskReddit"
    
    author-id="t2_vojap32q" author="eterind"
    icon="https://preview.redd.it/snoovatar/avatars/a5e58c10-4db2-46a0-8acf-a4562c0341af-headshot.png?width=64&amp;height=64&amp;crop=smart&amp;auto=webp&amp;s=0dd6049f707b4c983160802af050a7570c221258"
  
    
  
  >
      <a
        slot="full-post-link"
        class="absolute inset-0"
        href="/r/AskReddit/comments/19802qx/what_is_something_you_do_that_isnt_selfish/"
        target="_self"
        aria-label="What is something you do that isn&#39;t selfish?"
      >
      </a>
      
    
    <span
      slot="credit-bar"
      class="flex justify-between text-12 min-h-[32px]  mb-2xs mt-[-4px]"
    >
      <span class="flex flex-wrap text-12 gap-2xs items-center min-w-0">
        <span class="relative"> 
    <span slot="authorName" class="">
      <div class="inline-flex items-center max-w-full gap-2xs">
        
    <faceplate-hovercard
      enter-delay="500"
      leave-delay="150"
      position="bottom-start"
      data-id="