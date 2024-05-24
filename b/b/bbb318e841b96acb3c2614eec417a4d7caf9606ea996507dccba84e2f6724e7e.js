// jQuery Mask Plugin v1.14.15
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp={scope:{},findInternal:function(a,l,d){a instanceof String&&(a=String(a));for(var p=a.length,h=0;h<p;h++){var b=a[h];if(l.call(d,b,h,a))return{i:h,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,l,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[l]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,l,d,p){if(l){d=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var h=a[p];h in d||(d[h]={});d=d[h]}a=a[a.length-1];p=d[a];l=l(p);l!=p&&null!=l&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a,l,d){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(l||d)})(function(a){var l=function(b,e,f){var c={invalid:[],getCaret:function(){try{var a,r=0,g=b.get(0),e=document.selection,f=g.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-c.val().length),r=a.text.length;else if(f||"0"===f)r=f;return r}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c,
g=b.get(0);g.setSelectionRange?g.setSelectionRange(a,a):(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){d===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){d=c.val()}).on("focus.mask",function(b){!0===f.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){f.clearIfNotMatch&&!h.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,f,n,d=0;d<e.length;d++)(b=m.translation[e.charAt(d)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,
(b=b.recursive)?(a.push(e.charAt(d)),n={digit:e.charAt(d),pattern:c}):a.push(f||b?c+"?":c)):a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");n&&(a=a.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(){var a=b.data("mask-previus-value")||"",e=c.getMasked(),g=c.getCaret();if(a!==e){var f=b.data("mask-previus-caret-pos")||0,e=e.length,d=a.length,m=a=0,h=0,l=0,k;for(k=g;k<e&&c.maskDigitPosMap[k];k++)m++;for(k=g-1;0<=k&&c.maskDigitPosMap[k];k--)a++;for(k=g-1;0<=k;k--)c.maskDigitPosMap[k]&&h++;for(k=f-1;0<=k;k--)c.maskDigitPosMapOld[k]&&l++;g>d?g=10*e:f>=g&&f!==d?c.maskDigitPosMapOld[g]||(f=g,g=g-(l-h)-a,c.maskDigitPosMap[g]&&(g=f)):g>f&&
(g=g+(h-l)+m)}return g},behaviour:function(f){f=f||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,m.byPassKeys)){var e=c.getMasked(),g=c.getCaret();setTimeout(function(){c.setCaret(c.calculateCaretPosition())},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(g);return c.callbacks(f)}},getMasked:function(a,b){var g=[],d=void 0===b?c.val():b+"",n=0,h=e.length,q=0,l=d.length,k=1,r="push",p=-1,t=0,y=[],v,z;f.reverse?(r="unshift",k=-1,v=0,n=h-1,q=l-1,z=function(){return-1<
n&&-1<q}):(v=h-1,z=function(){return n<h&&q<l});for(var A;z();){var x=e.charAt(n),w=d.charAt(q),u=m.translation[x];if(u)w.match(u.pattern)?(g[r](w),u.recursive&&(-1===p?p=n:n===v&&n!==p&&(n=p-k),v===p&&(n-=k)),n+=k):w===A?(t--,A=void 0):u.optional?(n+=k,q-=k):u.fallback?(g[r](u.fallback),n+=k,q-=k):c.invalid.push({p:q,v:w,e:u.pattern}),q+=k;else{if(!a)g[r](x);w===x?(y.push(q),q+=k):(A=x,y.push(q+t),t++);n+=k}}d=e.charAt(v);h!==l+1||m.translation[d]||g.push(d);g=g.join("");c.mapMaskdigitPositions(g,
y,l);return g},mapMaskdigitPositions:function(a,b,e){a=f.reverse?a.length-e:0;c.maskDigitPosMap={};for(e=0;e<b.length;e++)c.maskDigitPosMap[b[e]+a]=1},callbacks:function(a){var h=c.val(),g=h!==d,m=[h,a,b,f],q=function(a,b,c){"function"===typeof f[a]&&b&&f[a].apply(this,c)};q("onChange",!0===g,m);q("onKeyPress",!0===g,m);q("onComplete",h.length===e.length,m);q("onInvalid",0<c.invalid.length,[h,a,b,c.invalid,f])}};b=a(b);var m=this,d=c.val(),h;e="function"===typeof e?e(c.val(),void 0,b,f):e;m.mask=
e;m.options=f;m.remove=function(){var a=c.getCaret();m.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(m.getCleanVal());c.setCaret(a);return b};m.getCleanVal=function(){return c.getMasked(!0)};m.getMaskedVal=function(a){return c.getMasked(!1,a)};m.init=function(d){d=d||!1;f=f||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,f.translation);
m=a.extend(!0,{},m,f);h=c.getRegexMask();if(d)c.events(),c.val(c.getMasked());else{f.placeholder&&b.attr("placeholder",f.placeholder);b.data("mask")&&b.attr("autocomplete","off");d=0;for(var l=!0;d<e.length;d++){var g=m.translation[e.charAt(d)];if(g&&g.recursive){l=!1;break}}l&&b.attr("maxlength",e.length).data("mask-maxlength",!0);c.destroyEvents();c.events();d=c.getCaret();c.val(c.getMasked());c.setCaret(d)}};m.init(!b.is("input"))};a.maskWatchers={};var d=function(){var b=a(this),e={},f=b.attr("data-mask");
b.attr("data-mask-reverse")&&(e.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(p(b,f,e))return b.data("mask",new l(this,f,e))},p=function(b,e,f){f=f||{};var c=a(b).data("mask"),d=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof e&&(e=e(b)),"object"!==typeof c||d(c.options)!==d(f)||c.mask!==e}catch(t){}},h=function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,
"return;"),d="function"===typeof b[a]);return d};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,h=c.watchInterval,c=d.watchInputs||c.watchInputs,t=function(){if(p(this,b,d))return a(this).data("mask",new l(this,b,d))};a(this).each(t);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(t)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)};h={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
h("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};h=a.jMaskGlobals=a.extend(!0,{},h,a.jMaskGlobals);h.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},h.watchInterval)},window.jQuery,window.Zepto);
028da7}.application-colors_app-1C-Etp__bor-clr__A7yI9{border-color:#028da7}.application-colors_app-1C-Financial-control__clr__HToKJ{color:#2b427e}.application-colors_app-1C-Financial-control__bg-clr__jXffs{background-color:#2b427e}.application-colors_app-1C-Financial-control__bor-clr__xSUBL{border-color:#2b427e}.application-colors_app-1C-Financial-Reporting__clr__Ojqys{color:#8c32c3}.application-colors_app-1C-Financial-Reporting__bg-clr__-jrdo{background-color:#8c32c3}.application-colors_app-1C-Financial-Reporting__bor-clr__t6YS-{border-color:#8c32c3}.application-colors_app-1C-Goods__clr__RmYVM{color:#39b54a}.application-colors_app-1C-Goods__bg-clr__0PDXd{background-color:#39b54a}.application-colors_app-1C-Goods__bor-clr__7h04B{border-color:#39b54a}.application-colors_app-1C-Helpdesc__clr__4m1Yl{color:#009245}.application-colors_app-1C-Helpdesc__bg-clr__3W50C{background-color:#009245}.application-colors_app-1C-Helpdesc__bor-clr__CG2L4{border-color:#009245}.application-colors_app-1C-Industry-subscription__clr__8jfF0{color:#8cc63f}.application-colors_app-1C-Industry-subscription__bg-clr__6tdnb{background-color:#8cc63f}.application-colors_app-1C-Industry-subscription__bor-clr__GGL25{border-color:#8cc63f}.application-colors_app-1C-Information-for-professionals__clr__OyGAE{color:#8c6239}.application-colors_app-1C-Information-for-professionals__bg-clr__BXk0N{background-color:#8c6239}.application-colors_app-1C-Information-for-professionals__bor-clr__ArUXG{border-color:#8c6239}.application-colors_app-1C-ITS__clr__HJcIl{color:#fbb03b}.application-colors_app-1C-ITS__bg-clr__yYh38{background-color:#fbb03b}.application-colors_app-1C-ITS__bor-clr__M8NiH{border-color:#fbb03b}.application-colors_app-1C-Kladr-Belarus__clr__bCVcM{color:#14c4b7}.application-colors_app-1C-Kladr-Belarus__bg-clr__LMBRY{background-color:#14c4b7}.application-colors_app-1C-Kladr-Belarus__bor-clr__vv2WV{border-color:#14c4b7}.application-colors_app-1C-Lecture-hall__clr__Dfthk{color:#2e3192}.application-colors_app-1C-Lecture-hall__bg-clr__HYh\+O{background-color:#2e3192}.application-colors_app-1C-Lecture-hall__bor-clr__EOfVB{border-color:#2e3192}.application-colors_app-1C-Credit__clr__6Ca1w{color:#8c32c3}.application-colors_app-1C-Credit__bg-clr__LdR87{background-color:#8c32c3}.application-colors_app-1C-Credit__bor-clr__TpFTf{border-color:#8c32c3}.application-colors_app-1C-Leasing__clr__gVm4s{color:#8c32c3}.application-colors_app-1C-Leasing__bg-clr__58Aaf{background-color:#8c32c3}.application-colors_app-1C-Leasing__bor-clr__mnaqx{border-color:#8c32c3}.application-colors_app-1C-Link__clr__oOtgz{color:#f7931e}.application-colors_app-1C-Link__bg-clr__eDmec{background-color:#f7931e}.application-colors_app-1C-Link__bor-clr__dv77X{border-color:#f7931e}.application-colors_app-1C-OFD__clr__lpyXb{color:#0159cc}.application-colors_app-1C-OFD__bg-clr__oW1hk{background-color:#0159cc}.application-colors_app-1C-OFD__bor-clr__6roWd{border-color:#0159cc}.application-colors_app-Partner-and-client__clr__eBvzu{color:#22b573}.application-colors_app-Partner-and-client__bg-clr__Xp8GE{background-color:#22b573}.application-colors_app-Partner-and-client__bor-clr__rAaQr{border-color:#22b573}.application-colors_app-1C-Partner-forum__clr__VxGnE{color:#ffd908}.application-colors_app-1C-Partner-forum__bg-clr__reNJ2{background-color:#ffd908}.application-colors_app-1C-Partner-forum__bor-clr__wPGFD{border-color:#ffd908}.application-colors_app-1C-Portal-forum__clr__-ms\+b{color:#b06fbe}.application-colors_app-1C-Portal-forum__bg-clr__sPLnQ{background-color:#b06fbe}.application-colors_app-1C-Portal-forum__bor-clr__86Ud2{border-color:#b06fbe}.application-colors_app-1C-Program-update__clr__1\+NZ3{color:#93c64f}.application-colors_app-1C-Program-update__bg-clr__Yuovr{background-color:#93c64f}.application-colors_app-1C-Program-update__bor-clr__FaUxW{border-color:#93c64f}.application-colors_app-1C-Reporting__clr__FCLUa{color:#c1272d}.application-colors_app-1C-Reporting__bg-clr__1WYhL{background-color:#c1272d}.application-colors_app-1C-Reporting__bor-clr__Vbd7u{border-color:#c1272d}.application-colors_app-1C-Reporting-Uzbekistan__clr__RuJMb{color:#c1272d}.application-colors_app-1C-Reporting-Uzbekistan__bg-clr__rEr4A{background-color:#c1272d}.application-colors_app-1C-Reporting-Uzbekistan__bor-clr__xopax{border-color:#c1272d}.application-colors_app-Reporting-Ukraine__clr__MeSbj{color:#c1272d}.application-colors_app-Reporting-Ukraine__bg-clr__GlvFj{background-color:#c1272d}.application-colors_app-Reporting-Ukraine__bor-clr__GNxTx{border-color:#c1272d}.application-colors_app-1C-Retail-Checker__clr__Al-P0{color:#389e49}.application-colors_app-1C-Retail-Checker__bg-clr__DjL8l{background-color:#389e49}.application-colors_app-1C-Retail-Checker__bor-clr__amG-K{border-color:#389e49}.application-colors_app-1C-Risks-Belarus__clr__KaPmY{color:#d4145a}.application-colors_app-1C-Risks-Belarus__bg-clr__I382F{background-color:#d4145a}.application-colors_app-1C-Risks-Belarus__bor-clr__ERYiI{border-color:#d4145a}.application-colors_app-1C-Sign__clr__-sUo0{color:#a12851}.application-colors_app-1C-Sign__bg-clr__QwTHl{background-color:#a12851}.application-colors_app-1C-Sign__bor-clr__EwVwC{border-color:#a12851}.application-colors_app-1C-Spark-risks__clr__UmhG3{color:#ee6a34}.application-colors_app-1C-Spark-risks__bg-clr__sd7bm{background-color:#ee6a34}.application-colors_app-1C-Spark-risks__bor-clr__DbXJb{border-color:#ee6a34}.application-colors_app-1C-Taxcom-partner__clr__Hj1\+I{color:#29abe2}.application-colors_app-1C-Taxcom-partner__bg-clr__HbYXp{background-color:#29abe2}.application-colors_app-1C-Taxcom-partner__bor-clr__zdNlr{border-color:#29abe2}.application-colors_app-1C-UMI__clr__sYKC6{color:#007cc2}.application-colors_app-1C-UMI__bg-clr__gRrq1{background-color:#007cc2}.application-colors_app-1C-UMI__bor-clr__MHEdZ{border-color:#007cc2}.application-colors_app-1C-Yookassa__clr__6PJ0y{color:#0053b0}.application-colors_app-1C-Yookassa__bg-clr__EYz7x{background-color:#0053b0}.application-colors_app-1C-Yookassa__bor-clr__wtjSy{border-color:#0053b0}.application-colors_app-1С-ABBYY-Comparator__clr__2LZFh{color:#c60c30}.application-colors_app-1С-ABBYY-Comparator__bg-clr__RwmBb{background-color:#c60c30}.application-colors_app-1С-ABBYY-Comparator__bor-clr__jhbV1{border-color:#c60c30}.application-colors_app-1C-Nomenclature__clr__EC0SD{color:#ed2d24}.application-colors_app-1C-Nomenclature__bg-clr__Sxzhb{background-color:#ed2d24}.application-colors_app-1C-Nomenclature__bor-clr__PNPuq{border-color:#ed2d24}.application-colors_app-1C-Profcase__clr__s\+oq1{color:#1a5296}.application-colors_app-1C-Profcase__bg-clr__trzhf{background-color:#1a5296}.application-colors_app-1C-Profcase__bor-clr__8DN35{border-color:#1a5296}.application-colors_app-1C-MAG__clr__xAlX-{color:#1a5296}.application-colors_app-1C-MAG__bg-clr__cc6PI{background-color:#1a5296}.application-colors_app-1C-MAG__bor-clr__Efoax{border-color:#1a5296}.application-colors_app-1C-Law__clr__\+x32S{color:#ffd400}.application-colors_app-1C-Law__bg-clr__gbSJQ{background-color:#ffd400}.application-colors_app-1C-Law__bor-clr__fX-hc{border-color:#ffd400}.application-colors_app-1C-ESS__clr__73UIH{color:#2200df}.application-colors_app-1C-ESS__bg-clr__ZI-4T{background-color:#2200df}.application-colors_app-1C-ESS__bor-clr__RgqjM{border-color:#2200df}.application-colors_app-1C-Etd__clr__XCDp3{color:#e12229}.application-colors_app-1C-Etd__bg-clr__FOoa0{background-color:#e12229}.application-colors_app-1C-Etd__bor-clr__JC0ya{border-color:#e12229}.application-colors_app-1C-Load-Revalue-Index-Uzbekistan__clr__oCkEf{color:#ffbc00}.application-colors_app-1C-Load-Revalue-Index-Uzbekistan__bg-clr__mmKuW{background-color:#ffbc00}.application-colors_app-1C-Load-Revalue-Index-Uzbekistan__bor-clr__kN6xe{border-color:#ffbc00}.application-colors_app-1C-Load-Currency-Uzbekistan__clr__FQh\+m{color:#f15b23}.application-colors_app-1C-Load-Currency-Uzbekistan__bg-clr__Y5JWk{background-color:#f15b23}.application-colors_app-1C-Load-Currency-Uzbekistan__bor-clr__moZu2{border-color:#f15b23}.application-colors_app-Profcase-Ukraine__clr__n-MT7{color:#4da5ab}.application-colors_app-Profcase-Ukraine__bg-clr__qHNj9{background-color:#4da5ab}.application-colors_app-Profcase-Ukraine__bor-clr__k-sgB{border-color:#4da5ab}.application-colors_app-ODB-Ukraine__clr__Rcqgn{color:#facc44}.application-colors_app-ODB-Ukraine__bg-clr__SbSmc{background-color:#facc44}.application-colors_app-ODB-Ukraine__bor-clr__obuA4{border-color:#facc44}.application-colors_app-Cashalot-Ukraine__clr__INLR5{color:#f05a6c}.application-colors_app-Cashalot-Ukraine__bg-clr__zro-Y{background-color:#f05a6c}.application-colors_app-Cashalot-Ukraine__bor-clr__mPCwZ{border-color:#f05a6c}.application-colors_app-1C-Classifiers-Belarus__clr__ylwbk{color:#ffbc00}.application-colors_app-1C-Classifiers-Belarus__bg-clr__ndMG1{background-color:#ffbc00}.application-colors_app-1C-Classifiers-Belarus__bor-clr__91xVw{border-color:#ffbc00}.application-colors_app-1C-Labor-Uzbekistan__clr__W4BFC{color:#4a77c5}.application-colors_app-1C-Labor-Uzbekistan__bg-clr__xAzPa{background-color:#4a77c5}.application-colors_app-1C-Labor-Uzbekistan__bor-clr__KAAEt{border-color:#4a77c5}.application-colors_app-Hmara-Ukraine__clr__W1ITO{color:#006cb5}.application-colors_app-Hmara-Ukraine__bg-clr__pnjgT{background-color:#006cb5}.application-colors_app-Hmara-Ukraine__bor-clr__XwL4u{border-color:#006cb5}.application-colors_app-1C-Document-Recognition__clr__DpC4w{color:#f2731d}.application-colors_app-1C-Document-Recognition__bg-clr__2q-84{background-color:#f2731d}.application-colors_app-1C-Document-Recognition__bor-clr__f0MYp{border-color:#f2731d}.application-colors_app-1C-Smartway__clr__b5XdV{color:#2a1e4a}.application-colors_app-1C-Smartway__bg-clr__3v5GX{background-color:#2a1e4a}.application-colors_app-1C-Smartway__bor-clr__Iwqly{border-color:#2a1e4a}.application-colors_app-1C-Scea-Code-Kg__clr__kaC8h{color:#f7c647}.application-colors_app-1C-Scea-Code-Kg__bg-clr__SZtjc{background-color:#f7c647}.application-colors_app-1C-Scea-Code-Kg__bor-clr__5yecW{border-color:#f7c647}.application-colors_app-1C-Payment-Codes-Kg__clr__XQsOe{color:#f7c647}.application-colors_app-1C-Payment-Codes-Kg__bg-clr__vZ5qp{background-color:#f7c647}.application-colors_app-1C-Payment-Codes-Kg__bor-clr__v\+xJa{border-color:#f7c647}.application-colors_app-1C-SBP__clr__4gmBy{color:#26803a}.application-colors_app-1C-SBP__bg-clr__9p56B{background-color:#26803a}.application-colors_app-1C-SBP__bor-clr__T7xf-{border-color:#26803a}.application-colors_app-1C-EPD__clr__t4op1{color:#8c2e8e}.application-colors_app-1C-EPD__bg-clr__BOwwY{background-color:#8c2e8e}.application-colors_app-1C-EPD__bor-clr__JL4S1{border-color:#8c2e8e}.application-colors_app-1C-Marking__clr__7EkLo{color:#ffc200}.application-colors_app-1C-Marking__bg-clr__pDUZr{background-color:#ffc200}.application-colors_app-1C-Marking__bor-clr__uJ9-r{border-color:#ffc200}.application-colors_app-1C-Marking-KZ__clr__xZNXO{color:#ffc200}.application-colors_app-1C-Marking-KZ__bg-clr__EdE5t{background-color:#ffc200}.application-colors_app-1C-Marking-KZ__bor-clr__seG5B{border-color:#ffc200}.application-colors_app-1C-MDLP__clr__wI3fF{color:#1cb78d}.application-colors_app-1C-MDLP__bg-clr__qCFLi{background-color:#1cb78d}.application-colors_app-1C-MDLP__bor-clr__n9W5T{border-color:#1cb78d}.application-colors_app-1C-Speech-Recognition__clr__NzPSQ{color:#60318c}.application-colors_app-1C-Speech-Recognition__bg-clr__68VyM{background-color:#60318c}.application-colors_app-1C-Speech-Recognition__bor-clr__EbTKW{border-color:#60318c}.application-colors_app-1C-Administrator__clr__1neyZ{color:#f4a41d}.application-colors_app-1C-Administrator__bg-clr__-IuJt{background-color:#f4a41d}.application-colors_app-1C-Administrator__bor-clr__NOsdi{border-color:#f4a41d}.application-colors_app-1C-ESF__clr__2JmiJ{color:#662d91}.application-colors_app-1C-ESF__bg-clr__RcZ5E{background-color:#662d91}.application-colors_app-1C-ESF__bor-clr__Lm18v{border-color:#662d91}.application-colors_app-1C-OFD-receipt__clr__qLXJw{color:#3684d8}.application-colors_app-1C-OFD-receipt__bg-clr__AcLCr{background-color:#3684d8}.application-colors_app-1C-OFD-receipt__bor-clr__-RlrX{border-color:#3684d8}.application-colors_app-1C-Bidzaar__clr__mDL7R{color:#ad1457}.application-colors_app-1C-Bidzaar__bg-clr__qKBNU{background-color:#ad1457}.application-colors_app-1C-Bidzaar__bor-clr__i3cak{border-color:#ad1457}.application-colors_app-1C-Courierika__clr__1e1Yc{color:#7877f9}.application-colors_app-1C-Courierika__bg-clr__7Di5j{background-color:#7877f9}.application-colors_app-1C-Courierika__bor-clr__KPoI2{border-color:#7877f9}.application-colors_app-1C-Ttn-exchange-Kg__clr__wSrYh{color:#ed2d24}.application-colors_app-1C-Ttn-exchange-Kg__bg-clr__U0PcO{background-color:#ed2d24}.application-colors_app-1C-Ttn-exchange-Kg__bor-clr__PdAut{border-color:#ed2d24}.application-colors_app-1C-Mutual-trade-report-Kg__clr__Jp0AM{color:#8c32c3}.application-colors_app-1C-Mutual-trade-report-Kg__bg-clr__rRM4T{background-color:#8c32c3}.application-colors_app-1C-Mutual-trade-report-Kg__bor-clr__44X\+-{border-color:#8c32c3}.application-colors_app-1C-Land-tax-Kg__clr__qP82r{color:#047a35}.application-colors_app-1C-Land-tax-Kg__bg-clr__UrDsM{background-color:#047a35}.application-colors_app-1C-Land-tax-Kg__bor-clr__c6uMO{border-color:#047a35}.application-colors_app-1C-Property-tax-Kg__clr__jPrPU{color:#fcbd04}.application-colors_app-1C-Property-tax-Kg__bg-clr__9SjI4{background-color:#fcbd04}.application-colors_app-1C-Property-tax-Kg__bor-clr__zNW5d{border-color:#fcbd04}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:69:"/local/templates/.default/libs/select2/select2_lang.js?16895824901126";s:6:"source";s:54:"/local/templates/.default/libs/select2/select2_lang.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ru",[],function(){function e(e,t,n,r){return e%10<5&&e%10>0&&e%100<5||e%100>20?e%10>1?n:t:r}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(t){var n=t.input.length-t.maximum,r="Пожалуйста, введите на "+n+" символ";return r+=e(n,"","a","ов"),r+=" меньше",r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Пожалуйста, введите еще хотя бы "+n+" символ";return r+=e(n,"","a","ов"),r},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(t){var n="Вы можете выбрать не более "+t.maximum+" элемент";return n+=e(t.maximum,"","a","ов"),n},noResults:function(){return"Результаты не найдены"},searching:function(){return"Поиск…"}}}),{define:e.define,require:e.require}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/local/templates/.default/libs/owl_carousel/owl_carousel.min.js?168958249044342";s:6:"source";s:63:"/local/templates/.default/libs/owl_carousel/owl_carousel.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/xml_catalog/extra_script.js?168958312798950";s:6:"source";s:44:"/local/templates/xml_catalog/extra_script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var iWinHeight = 0, iWitnWidth = 0, bWithTouch = false, iBlockAnim = 0, iBlockLoad = 0, iAnimSpeed = 300, sCurrentPage = location.href.toString().replace(/(\#.*|https:\/\/audio.1c.ru)/g, ''), iTempInt = 0;
var AudioContext = window.AudioContext || window.webkitAudioContext;
var iIntervalCheckPlayer = 200;
var stateObj = {};

var objAudioPlayerData = {
    checkint: 0,
    volume: null,
    audio: null,
    audio2: null,
    fVolumeLevel: 1.0,
    fVolumeLevelAtMute: 1.0,
    bVolumeMuteMode: false,
    objPlayerArea: null,
    objPlayerProgress : null,
    objPlayerProgressTime : '',
    sPlayerStatus: '',
    sPlayerSource: '',
    sPlayerName: '',
    sPlayerPic: '',
    iPlayerTstmpDuration: 0,
    iCheckPlayerIntervalId: 0,
    iStartOffset: 0,
    bWaitForDecode: false,
    bWaitForRun: false,
    bFailLoad: false,
    bFirstLoad: false,
    iLoadStartTime: 0
}, iIntervalCheckAudioPlayer = 200;

$(document).ready(function(){
    iWinHeight = $(document).height();
    iWitnWidth = $(document).width();
    bWithTouch = $('html').hasClass('bx-touch');

    //ставим язык для select2
    $.fn.select2.defaults.set('language', 'ru');

    //проверка изменения размера экрана
    $(window).resize(function(){
        var iTempHeight = $(document).height(), iTempWidth = $(document).width();

        //если высота окна изменилась, то проверяем - не нужно ли прилепить к полу подвал
        if(iWinHeight !== iTempHeight){
            iWinHeight = iTempHeight;
            checkFooterStick();
        }

        //если ширина экрана изменилась
        if(bWithTouch){
            if(iWitnWidth !== iTempWidth){
                iWitnWidth = iTempWidth;
                //меняем положение закрытия мобильного меню
                changeMobileMenuCloseButton();
            }

            //меняем логику отображения мобильного подменю (для пункта "Служба поддержки")
            changeMobileSubmenuDisplay();
        }
    });

    //для мобильных дополнительные логики
    if(bWithTouch){
        //меняем положение закрытия мобильного меню
        changeMobileMenuCloseButton();
        //меняем логику отображения мобильного подменю (для пункта "Служба поддержки")
        changeMobileSubmenuDisplay();
        //работа мобильного меню
        initMobileMenus();
    }

    //обрабатываем разлогинивание
    workUnlogin();

    //запуск событий для содержимого страницы
    workPageInnerData();

    //обрабатываем изменение url через history api
    workOnPageUrlChange();

    //сбрасываем данные плеера при новой сессии с сайтом
    resetPleerAtNewSession();

    //ротация баннеров на главной странцие
    rotateMainBanners();
});

//запуск событий для содержимого страницы
function workPageInnerData(){
    //проверяем - не нужно ли прилепить к полу подвал при запуске страницы
    checkFooterStick();

    //запуск слайдера на главной странице
    $('.main_slider_area .owl-carousel:not(.runned_carousel)').owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            10: {
                items: 1,
                nav: true,
                dots: true,
                smartSpeed:1000,
                loop: true,
                margin: 0
            }
        }
    }).addClass('runned_carousel customized');

    //дополнительная обработка слайдера
    $("a.fancy:not(.runned_fancy)").fancybox({
        afterShow: function(){
            //дополнение кнопками
            if($('.fancybox-container .fancybox-slide--current .fancybox-content .slder_prev').length === 0){
                $('.fancybox-container .fancybox-slide--current .fancybox-content').append('<div class="prev_next_area"><div class="slder_prev" onclick="sliderPrev();"></div><div class="slder_next" onclick="sliderNext();"></div><div class="close_slider" onclick="closeFancySlider();"></div></div>');
            }

            //проверка наличия активных стрелок след/пред
            $('.fancybox-container .fancybox-content .slder_prev, .fancybox-container .fancybox-content .slder_next').removeClass('fade');
            if($('.fancybox-inner .fancybox-button.fancybox-button--arrow_left').attr('disabled') !== 'disabled'){
                $('.fancybox-container .fancybox-content .slder_prev').addClass('active');
            }else{
                $('.fancybox-container .fancybox-content .slder_prev').removeClass('active');
            }
            if($('.fancybox-inner .fancybox-button.fancybox-button--arrow_right').attr('disabled') !== 'disabled'){
                $('.fancybox-container .fancybox-content .slder_next').addClass('active');
            }else{
                $('.fancybox-container .fancybox-content .slder_next').removeClass('active');
            }
        }
    }).addClass('runned_fancy customized');

    //оформляем select'ы
    makeSelect2();

    //обрабатываем все ссылки
    workAllHrefsAjax();

    //обработка поисковых форм (в шапке и на странице)
    $('.search_area form:not(.customized)').on('submit', function(e){
        e.preventDefault();

        var objForm = $(this);
        var sHref = objForm.attr('action');
        $.ajax({
            url: sHref,
            data: {s: objForm.find('input[name="s"]').val(), get_by_ajax: "y"},
            contentType: "application/json; charset=utf-8",
            type: 'GET',
            success: function (mes) {
                var objMes;
                try {
                    objMes = JSON.parse(mes);
                } catch (e) {
                }

                if (
                    objMes
                    && typeof objMes.html !== 'undefined'
                ) {
                    var sTitle = (typeof objMes.title !== 'undefined' && objMes.title !== '' ? objMes.title : '');
                    //устанавливаем данные страницы
                    $('.main_data:first').html(objMes.html);
                    sHref = sHref + '?s=' + objForm.find('input[name="s"]').val();
                    history.pushState(stateObj, sTitle, sHref);
                    sCurrentPage = sHref;

                    //запуск событий для содержимого страницы
                    workPageInnerData();
                }else {
                    go404Page(false);
                }
            },
            error: function (mes) {
                var objMes;
                try {
                    if(typeof mes.responseJSON !== 'undefined'){
                        objMes = mes.responseJSON;
                    }
                }catch (e) {
                }

                if (
                    objMes
                    && typeof objMes.html !== 'undefined'
                ) {
                    var sTitle = (typeof objMes.title !== 'undefined' && objMes.title !== '' ? objMes.title : '');
                    //устанавливаем данные страницы
                    $('.main_data:first').html(objMes.html);
                    history.pushState(stateObj, sTitle, sHref);
                    sCurrentPage = sHref;

                    //запуск событий для содержимого страницы
                    workPageInnerData();
                }else {
                    location.href = '/404.php';
                }
            }
        });

    }).addClass('customized');
}

// Проверка - не нужно ли прилепить к полу подвал
function checkFooterStick() {
    var objMainArea = $('.main_data');
    objMainArea.css('min-height', "300px");

    var iHeader = $('.header').height();
    var iFooter = $('.footer').height();
    var iMainArea = objMainArea.height();
    var iNewHeight = iWinHeight - iHeader - iFooter;
    if(
        iNewHeight > iMainArea
        && iNewHeight < $(window).height()
    ){
        objMainArea.css('min-height', iNewHeight);
    }
}

// Проверка - не нужно ли прилепить к полу подвал
function changeMobileMenuCloseButton() {
    //если режим мобильного меню во всю ширину
    if(iWitnWidth < 600){
        $('.header .mobile_menu_close .ico').css({right:'auto', left: (iWitnWidth - 80) + 'px'});
    }
    //если режим мобильного меню в 70% ширины
    else{
        $('.header .mobile_menu_close .ico').css({right:'auto', left: (iWitnWidth * 0.7 - 80) + 'px'});
    }
}

// Меняем логику отображения мобильного подменю (для пункта "Служба поддержки")
function changeMobileSubmenuDisplay() {
    var objTopMenu = false, objContainer = false, iCheckItemHeight = 0;

    //если нужно проверить высоту зон подменю внутри меню
    if(iWitnWidth < 768){
        objTopMenu = $('.header .top_menu_area');
        objContainer = objTopMenu.find('.container:first');
        iCheckItemHeight = objTopMenu.find('.header_dashboard.mobile .profile_area').height() + 40;

        //ставим специальное отображение подменю внутри меню
        if(!objTopMenu.hasClass('rel_support')){
            objTopMenu.addClass('rel_support');
        }

        //если нужно включить специальный режим
        var objSupportMenu = objTopMenu.find('.support_area_mobile');
        if(objTopMenu.height() < objContainer.height() + iCheckItemHeight ){
            objSupportMenu.addClass('rel');
        }
        //если нужно выключить специальный режим
        else{
            objSupportMenu.removeClass('rel');
        }
    }
    //если ставим общее отображение подменю внутри меню
    else{
        objTopMenu = $('.header .top_menu_area.rel_support');
        if(objTopMenu.length > 0){
            objTopMenu.removeClass('rel_support');
        }
    }
}

// работа мобильного меню и прочих мобильных анимаций
function initMobileMenus() {
    var objSwitcher = $('.header .mobile_search_ico');
    var objSearchArea = $('.header .search_area');

    //переключение поиска
    if(
        objSwitcher.length === 1
        && objSearchArea.length === 1
    ){
        objSwitcher.on('click', function(){
            objSearchArea.parents('.header_dashboard').toggleClass('show_search');
        });
    }

    //работа меню
    $('.header .top_menu_area .items_area .item.with_subitems .menu_text').on('click', function(){
        var objWork = $(this).parents('.show_sub');
        //если текущий раздел меню уже отображается, то скрываем раздел меню
        if(objWork.length > 0){
            $('.header .top_menu_area .items_area .item.with_subitems.show_sub').removeClass('show_sub');
        }
        //отображаем раздел меню
        else{
            $('.header .top_menu_area .items_area .item.with_subitems.show_sub').removeClass('show_sub');
            $(this).parents('.item.with_subitems').addClass('show_sub');
        }

        //перепроверяем логику отображения мобильного подменю (для пункта "Служба поддержки")
        changeMobileSubmenuDisplay();
    });
    $('.bx-touch .header .mobile_menu_ico').on('click', function(){
        if(iBlockAnim === 0){
            $(this).parents('.header').addClass('show_mobile_menu');
        }
    });
    $('.bx-touch .header .mobile_menu_close .ico').on('click', function(){
        $(this).parents('.header').removeClass('show_mobile_menu');
    });

    //клик "в пустоту" для мобильных устройств (скрываем открытые выпадашки)
    $('html.bx-touch body').on('click', function(e){
        var objCheck;

        //скрываем открытые всплывашки для мобильного меню
        objCheck = $(this).find('.item.with_subitems.show_sub');
        if(
            objCheck.length > 0
            && $(e.target).parents('.with_subitems').length === 0
        ){
            objCheck.removeClass('show_sub');
        }
    });
}

//переход к другой части произведения
function jumpToTime(){
    //работаем только если есть объект с данными плеера
    if(objAudioPlayerData.audio !== null){
        //если новое время старта меньше времени длительности фрагмента
        if(objAudioPlayerData.iStartOffset < objAudioPlayerData.audio.duration){
            makeAudioPlayerObject();
        }else{
            finishAudioPlayerWork();
        }
    }
}

/* Отображение системных требований к ПО */
function showHideRequirements(){
    if(iBlockAnim === 0){
        iBlockAnim = 1;
        $('.detail_area .requirements_inner').slideToggle(300, function () {
            iBlockAnim = 0;
        });
    }
}

/* Отображение треков */
function showHideChapters(){
    if(iBlockAnim === 0){
        iBlockAnim = 1;
        $('.detail_area .chapters_inner').slideToggle(300, function () {
            iBlockAnim = 0;
        });
    }
}

/* Закрытие слайдера */
function closeFancySlider(){
    if(iBlockAnim === 0){
        iBlockAnim = 1;
        $('.fancybox-inner .fancybox-button.fancybox-button--close').trigger('click');
        setTimeout(function(){
            iBlockAnim = 0;
        }, 300);
    }
}

/* Прокуртка слайдера влево */
function sliderPrev(){
    $('.fancybox-container .fancybox-content .slder_prev, .fancybox-container .fancybox-content .slder_next').addClass('fade');
    if(iBlockAnim === 0){
        iBlockAnim = 1;
        $('.fancybox-inner .fancybox-button.fancybox-button--arrow_left').trigger('click');
        setTimeout(function(){
            iBlockAnim = 0;
        }, 300);
    }
}

/* Прокуртка слайдера вправо */
function sliderNext(){
    $('.fancybox-container .fancybox-content .slder_prev, .fancybox-container .fancybox-content .slder_next').addClass('fade');
    if(iBlockAnim === 0){
        iBlockAnim = 1;
        $('.fancybox-inner .fancybox-button.fancybox-button--arrow_right').trigger('click');
        setTimeout(function(){
            iBlockAnim = 0;
        }, 300);
    }
}

/* оформление еще не оформленных select'ов */
function makeSelect2(){
    $('select:not(.customized)').each(function(cInd, cObj){
        var arrSettings = {};
        var searchMin = Infinity;

        var objDropDown = $(cObj).parents('.item');

        //если нужен поиск по значениям
        if($(cObj).attr('data-search') === 'y') { searchMin = 2;}

        arrSettings['minimumResultsForSearch'] = searchMin;
        if(objDropDown.length > 0){
            arrSettings['dropdownParent'] = objDropDown;
        }
        $(cObj).select2(
            arrSettings
        ).addClass('customized');
    });
}


//события формы авторизации
function authFormEvents(){
    $(document).keypress(function(e) {
        if(e.which == 13) {
            if($('.tab.email').hasClass('active')){
                clickAuthButton();
            }
        }
    });
}

function setSendRestoreBtn(){
    var form = $('#web-form-forgotpasswd');
    form.find('.error').remove();

    var formData = new FormData(form[0]);
    //formData.append('token', token);
    formData.append('form_type', 'restore');
    if(validateFormForgot()){
        grecaptcha.ready(function() {
            grecaptcha.execute('6Le_5EYjAAAAAK_A6J-F_3MOBKPxfPKYDBqPR7Dl', {action: 'submit'}).then(function(token) {
                formData.append('grec', token);

                $.ajax({
                    url: '/ajax/popupForm.php',
                    method: 'POST',
                    cache: false,
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    success: function(data){
                        if(
                            typeof data.success !== 'undefined'
                            && data.success === 1
                        ){
                            $('#web-form-forgotpasswd').closest('.contains .standart_area:first').html(data.html);
                        }else{
                            var sError = 'Не удалось отправить письмо, попробуйте позже!';
                            if(data.error_message)
                            {
                                sError = data.error_message;
                            }
                            var rowObj = form.find('input[type="text"]:first').parents('.row');
                            if(rowObj.length === 1){
                                var errorObj = rowObj.find('.error');
                                if(errorObj.length === 0){
                                    rowObj.prepend('<div class="error"></div>');
                                    errorObj = rowObj.find('.error');
                                }
                                errorObj.text(sError);
                            }
                        }
                    },
                    error: function(){
                        if(answer.errors.length === 1) {
                            $('#web-form-login .message-error').text(errors[0]);
                        } else {
                            var ul = $('<ul>');
                            $.each(errors, function(i, error){
                                $('<li>').text(error).appendTo(ul);
                            });
                            $('#web-form-forgotpasswd').text('Ошибки:').append(ul);

                            var sError = 'Ошибки: <ul>' + ul.html() + '</ul>';
                            if(data.error_message)
                            {
                                sError = data.error_message;
                            }
                            var rowObj = form.find('input[type="text"]:first').parents('.row');
                            if(rowObj.length === 1){
                                var errorObj = rowObj.find('.error');
                                if(errorObj.length === 0){
                                    rowObj.prepend('<div class="error"></div>');
                                    errorObj = rowObj.find('.error');
                                }
                                errorObj.html(sError);
                            }
                        }
                    }
                });
            });
        });
    }
}

//Стандартное отображение окна popup
function showPopup(arrParams){
    var sText = '', sTitle = '';

    if(typeof arrParams['text'] !== 'undefined'){
        sText = arrParams['text'];
    }

    if(typeof arrParams['title'] !== 'undefined'){
        sTitle = arrParams['title'];
    }

    //работаем, если есть текст для отображения
    if(
        sText !== ''
        && iBlockAnim === 0
    ){
        var objPopup = $('#popup');
        iBlockAnim = 1;
        //если есть запущенное popup окно, то сначала скрываем его
        if(objPopup.css('display') === 'block'){
            objPopup.find('.popup_inner').fadeOut(iAnimSpeed, function(){
                //после сокрытия запускаем отображение popup окна снова
                iBlockAnim = 0;
                objPopup.css('display', 'none');
                objPopup.find('.popup_inner').css('display', 'block');
                showPopup(arrParams);
            });
        }
        //наполняем popup
        else{
            //если есть заголовок, то отображаем его
            if(sTitle !== ''){
                objPopup.addClass('with_title');
                objPopup.find('.title_area .title').html(sTitle);
            }else{
                objPopup.removeClass('with_title');
            }

            objPopup.find('.contains .standart_area:first').html(sText);
            objPopup.fadeIn(iAnimSpeed, function(){
                iBlockAnim = 0;
            });

            //если также нужно отобразить тень
            var objBackShad = $('#back_shadow');
            if(objBackShad.css('display') !== 'block'){
                objBackShad.css({display:'block', opacity: '0'});
                objBackShad.fadeTo(iAnimSpeed, 0.3, 'linear');
            }

            //если нужно обработать select'ы
            makeSelect2();
        }
    }
    if(typeof arrParams.type !== 'undefined'){
        objPopup.parents('.popup_standart').attr('data-type', arrParams.type);

        ////не показываем символ рекаптчи для формы, на которой она не нужна
        //if(arrParams.type === 'resource'){
        //    $('body').addClass('no_rec');
        //}
    }
}

/* Закрытие popup */
function popupClose(){
    if(iBlockAnim === 0){
        iBlockAnim = 1;
        $('#popup .popup_inner').fadeOut(iAnimSpeed, function(){
            //после сокрытия запускаем отображение popup окна снова
            $('#popup').css('display', 'none');
            $(this).css('display', 'block');
            iBlockAnim = 0;
        });
        $('#back_shadow').fadeOut(iAnimSpeed, function (){
            $(this).css({display:'none', opacity: '1'});
        });
    }
}

//логика стандартного попапа
function popupOpen(argType, backUrl){
    $.ajax({
        url: '/ajax/popupForm.php',
        method: 'POST',
        cache: false,
        data: {form_type: argType},
        dataType: 'json',
        success: function (objMes) {
            //проверяем наличие уже отображаемой формы
            var bNeedWait = false;
            if ($('body').hasClass('popup_active')) {
                var popupObj = $('.popup_standart:first .popup_inner');
                if (popupObj.length === 1) {
                    bNeedWait = true;
                } else {
                    $('body').removeClass('popup_active');
                }
            }

            //если нужно сначала скрыть текущую форму
            if (bNeedWait) {
                $('body').addClass('popup_temp_hide');
                setTimeout(function () {
                    showPopup({title: objMes.title, text: objMes.html, type: argType});

                    //дополнителные логики для форм авторизации, регистрации, формы обратнйо связи и восстанвления пароля
                    switch (argType) {
                        case 'auth'://события формы авторизации
                            authFormEvents();
                            break;
                        case 'reg'://события формы регистрации

                            break;
                        case 'restore'://события формы смены пароля

                            break;
                        case 'feedback'://события формы смены пароля

                            break;
                    }
                    //установка переадресации, если нужно
                    if(backUrl !== '/') {
                        $('.popup_standart form').prepend('<input type="hidden" name="BACKURL" value="' + backUrl + '" />');
                    }
                }, 500);
            } else {
                showPopup({title: objMes.title, text: objMes.html, type: argType});

                //дополнителные логики для форм авторизации, регистрации, формы обратнйо связи и восстанвления пароля
                switch (argType) {
                    case 'auth'://события формы авторизации
                        authFormEvents();
                        break;
                    case 'reg'://события формы регистрации

                        break;
                    case 'restore'://события формы смены пароля

                        break;
                    case 'feedback'://события формы смены пароля

                        break;
                }
                //установка переадресации, если нужно
                if(backUrl !== '/') {
                    $('.popup_standart form').prepend('<input type="hidden" name="BACKURL" value="' + backUrl + '" />');
                }
            }
        }
    });
}

// Переход к форме регистрации (например из формы авторизации)
function goAuthPopup(sCode) {
    //если находимся на форме связанной с инвайт-ссылкой ДЭОС
    if($('.popup_standart .standart_form.only_email').length > 0){
        var argType = 'auth';
        $.post('/ajax/popupForm.php', {
            form_type: 'deos_auth',
            deos_code: $('.popup_standart .standart_form.only_email input[name="USER_PROMOCODES"]').val()
        }, function(mes){
            var objMes;
            try {
                objMes = JSON.parse(mes);
            }catch (e){
            }

            if(
                objMes
                && objMes.success
            ){
                //проверяем наличие уже отображаемой формы
                var bNeedWait = false;
                if($('body').hasClass('popup_active')){
                    var popupObj = $('.popup_standart:first .popup_inner');
                    if(popupObj.length === 1){
                        bNeedWait = true;
                    }else{
                        $('body').removeClass('popup_active');
                    }
                }

                //если нужно сначала скрыть текущую форму
                if(bNeedWait){
                    $('body').addClass('popup_temp_hide');

                    setTimeout(function(){
                        popupShow({title: objMes.title, text: objMes.html, type: argType});

                        //события формы авторизации
                        authFormEvents();

                        //установка переадресации, если нужно
                        $('.popup_standart form').prepend('<input type="hidden" name="BACKURL" value="/library/" />');
                    }, 500);
                }else {
                    popupShow({title: objMes.title, text: objMes.html, type: argType});

                    //события формы авторизации
                    authFormEvents();

                    //установка переадресации, если нужно
                    $('.popup_standart form').prepend('<input type="hidden" name="BACKURL" value="/library/" />');
                }
            }
        });
    }
    //иначе стандартная логика
    else{
        popupOpen('auth', '');
    }
}

// Переход к форме авторизации (например из формы авторизации)
function goRegPopup(sCode) {
    if($('.popup_standart .standart_form.only_email').length > 0){
        var argType = 'reg';
        $.post('/ajax/popupForm.php', {
            form_type: 'deos_reg',
            deos_code: $('.popup_standart .standart_form.only_email input[name="USER_PROMOCODES"]').val()
        }, function(mes){
            var objMes;
            try {
                objMes = JSON.parse(mes);
            }catch (e){
            }

            if(
                objMes
                && objMes.success
            ){
                //если пользователь уже авторизовался
                if(typeof objMes.authorized !== 'undefined'){
                    location.href = location.href.toString().replace(/\?.*/g, '');
                }else{
                    //проверяем наличие уже отображаемой формы
                    var bNeedWait = false;
                    if($('body').hasClass('popup_active')){
                        var popupObj = $('.popup_standart:first .popup_inner');
                        if(popupObj.length === 1){
                            bNeedWait = true;
                        }else{
                            $('body').removeClass('popup_active');
                        }
                    }

                    //если нужно сначала скрыть текущую форму
                    if(bNeedWait){
                        $('body').addClass('popup_temp_hide');

                        setTimeout(function(){
                            popupShow({title: objMes.title, text: objMes.html, type: argType});

                            //события формы авторизации
                            authFormEvents();

                            //установка переадресации, если нужно
                            if(backUrl !== '/') {
                                $('.popup_standart form').prepend('<input type="hidden" name="BACKURL" value="/library/" />');
                            }
                        }, 500);
                    }else {
                        popupShow({title: objMes.title, text: objMes.html, type: argType});

                        //события формы авторизации
                        authFormEvents();

                        //установка переадресации, если нужно
                        if(backUrl !== '') {
                            $('.popup_standart form').prepend('<input type="hidden" name="BACKURL" value="/library/" />');
                        }
                    }
                }
            }
        });
    }
    //иначе стандартная логика
    else{
        popupOpen('reg', '');
    }
}

/**
 * Валидация формы восстановления пароля
 */
function validateFormForgot(){
    $('#web-form-forgotpasswd .error').each(function (){
        $(this).remove();
    });
    $('#web-form-forgotpasswd .message-error').hide();
    var result = true;
    var regEmail = /^[a-zа-яё0-9][a-zа-яё0-9._\-]*@[a-zа-яё0-9._\-]+\.[a-zа-яё0-9]{2,}$/i;
    var formElem = $('#web-form-forgotpasswd');
    var formData = new FormData(formElem[0]);

    for(var param of formData.entries()) {
        switch (param[0]){
            case 'USER_EMAIL':
                if(!param[1]){
                    $("input[NAME='USER_EMAIL']", formElem).closest('.row').prepend('<div class="error">Укажите почту!</div>');
                    result = false;
                }else{
                    if(!regEmail.test(param[1])){
                        $("input[NAME='USER_EMAIL']", formElem).closest('.row').prepend('<div class="error">Электронная почта заполнена с ошибками!</div>');
                        result = false;
                    }
                }
                break;
        }
    }
    return result;
}


/**
 * Валидация формы регистрации
 */
function validateFormReg(){
    $('#web-form-register .error').each(function (){
        $(this).remove();
    });
    $('#web-form-register .message-error').hide();
    var result = true;
    var regEmail = /^[a-zа-яё0-9][a-zа-яё0-9._\-]*@[a-zа-яё0-9._\-]+\.[a-zа-яё0-9]{2,}$/i;
    var formElem = $('#web-form-register');
    var formData = new FormData(formElem[0]);
    var AGREEMENT = false;
    for(var param of formData.entries()) {
        switch (param[0]){
            case 'USER_EMAIL':
                if(!param[1]){
                    $("input[NAME='USER_EMAIL']", formElem).closest('.row').prepend('<div class="error">Не заполнена электронная почта!</div>');
                    result = false;
                }else{
                    if(!regEmail.test(param[1])){
                        $("input[NAME='USER_EMAIL']", formElem).closest('.row').prepend('<div class="error">Электронная почта заполнена с ошибками!</div>');
                        result = false;
                    }
                }
                break;
            case 'USER_NAME':
                if(!param[1]){
                    $("input[NAME='USER_NAME']", formElem).closest('.row').prepend('<div class="error">Не заполнено имя!</div>');
                    result = false;
                }
                break;
            case 'USER_LAST_NAME':
                if(!param[1]){
                    $("input[NAME='USER_LAST_NAME']", formElem).closest('.row').prepend('<div class="error">Не заполнена фамилия!</div>');
                    result = false;
                }
                break;
            case 'USER_PASSWORD':
                if(!param[1]){
                    $("input[NAME='USER_PASSWORD']", formElem).closest('.row').prepend('<div class="error">Не заполнен пароль!</div>');
                    result = false;
                }else if(param[1].length<6){
                    $("input[NAME='USER_PASSWORD']", formElem).closest('.row').prepend('<div class="error">Длина пароля должна быть не менее 6 символов!</div>');
                    result = false;
                }
                break;
            case 'USER_CONFIRM_PASSWORD':
                if(!param[1]){
                    $("input[NAME='USER_CONFIRM_PASSWORD']", formElem).closest('.row').prepend('<div class="error">Пароль не подтвержден!</div>');
                    result = false;
                }else{
                    if(formData.get('USER_PASSWORD')!=formData.get('USER_CONFIRM_PASSWORD')){
                        $("input[NAME='USER_CONFIRM_PASSWORD']", formElem).closest('.row').prepend('<div class="error">Неверное подтверждение пароля!</div>');
                        result = false;
                    }
                }
                break;
            case 'AGREEMENT':
                AGREEMENT = true;
                break;
        }
    }
    if(AGREEMENT===false){
        $("input[NAME='AGREEMENT']", formElem).closest('.row').prepend('<div class="error">Необходимо согласие с политикой обработки Персональных данных!</div>');
        result = false;
    }
    return result;
}

// Обработка кнопки "Зарегистрироваться"
function clickRegisterButton(){
    var form = $('#web-form-register');
    if(form.length === 1) {

        var formData = new FormData(form[0]);
        var objForm = $('.popup_standart:first');
        //formData.append('token', token);
        formData.append('AJAX', 'REG_FORM');

        //если находимся на форме ДЭОС
        if(objForm.find('.standart_form.only_email').length > 0){
            formData.append('form_type', 'deos_reg');
            formData.append('deos_code', objForm.find('input[name="USER_PROMOCODES"]').val());
        }
        //если находимся на обычной регистрации
        else{
            formData.append('form_type', 'reg');
        }

        if (validateFormReg()) {

            grecaptcha.ready(function() {
                grecaptcha.execute('6Le_5EYjAAAAAK_A6J-F_3MOBKPxfPKYDBqPR7Dl', {action: 'submit'}).then(function(token) {
                    formData.append('grec', token);
                    $.ajax({
                        url: '/ajax/popupForm.php',
                        type: 'POST',
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        success: function(answer){
                            if(typeof answer.authorized !== 'undefined'){
                                //если пользователь уже авторизовался
                                location.href = location.href.toString().replace(/\?.*/g, '');
                            }else{
                                if(!answer.result) {
                                    if(answer.errors){
                                        if(answer.errors.length > 0) {
                                            if(answer.errors.length === 1) {
                                                var error_text = answer.errors[0];
                                                var rowObj = objForm.find('input[name="USER_EMAIL"]').parents('.row');
                                                var errorObj = rowObj.find('.error');
                                                if(errorObj.length === 0) {
                                                    rowObj.prepend('<div class="error"></div>');
                                                    errorObj = rowObj.find('.error');
                                                }
                                                errorObj.text(error_text);

                                            } else {
                                                var ul = $('<ul>');
                                                $.each(answer.errors, function(i, error){
                                                    $('<li>').text(error).appendTo(ul);
                                                });
                                                $('#web-form-register .message-error').text('Ошибки:').append(ul);
                                            }
                                            $('#web-form-register .message-error').show();
                                        }else{
                                            $('#web-form-register .message-error').text('Не удалось авторизоваться, попробуйте позже!');
                                            $('#web-form-register .message-error').show();
                                        }
                                    }
                                    //если нужно показать другое окно
                                    else if(answer.success){
                                        var newPopupArgs = {
                                            text: answer.html,
                                        };

                                        if(typeof answer.title !== 'undefined'){
                                            newPopupArgs['title'] = answer.title;
                                        }
                                        if(typeof answer.type !== 'undefined'){
                                            newPopupArgs['type'] = answer.type;
                                        }

                                        popupShow(newPopupArgs);
                                    }
                                } else {
                                    //устанавливаем событие, если произошла регистрация
                                    if($('#is_dev').length === 0){
                                        //ym(75001939,'reachGoal','registration');
                                        //dataLayer.push({'event':'event-to-ga', 'eventCategory':'Action', 'eventAction' : 'registration'});
                                    }

                                    // Задержка для аналитики
                                    setTimeout(function(){
                                        if(answer.backUrl){
                                            window.location.href = answer.backUrl;
                                        }else {
                                            window.location.href = window.location.href.toString().replace('#', '');
                                            return false;
                                        }
                                        //window.location.replace(back); // TODO - из параметров
                                    }, 2000);
                                }
                            }
                        },
                        error: function(){
                            if(answer.errors.length === 1) {
                                $('#web-form-register .message-error').text(errors[0]);
                            } else {
                                var ul = $('<ul>');
                                $.each(errors, function(i, error){
                                    $('<li>').text(error).appendTo(ul);
                                });
                                $('#web-form-register .message-error').text('Ошибки:').append(ul);
                            }
                            $('#web-form-register .message-error').show();
                        }
                    });
                });
            });
        }
    }
}

// Обработка кнопки "Войти"
function clickAuthButton() {
    var form = $('#web-form-login');
    var objForm = $('.standart_form[data-type="auth"]');
    if(
        form.length === 1
        && objForm.length === 1
    ) {
        // Защита от повторной инициализации, при множественном подключении к странице компонента
        var formData = new FormData(form[0]);
        //formData.append('token', token);
        formData.append('form_type', 'auth');

        if (validateFormAuth()) {
            grecaptcha.ready(function() {
                grecaptcha.execute('6Le_5EYjAAAAAK_A6J-F_3MOBKPxfPKYDBqPR7Dl', {action: 'submit'}).then(function(token) {

                    formData.append('grec', token);
                    $.ajax({
                        url: '/ajax/popupForm.php',
                        method: 'POST',
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false,
                        dataType: 'json',
                        success: function(answer){
                            if(!answer.result) {
                                if(answer.errors){
                                    if(answer.errors.length > 0) {
                                        //если нужно показать другое окно (проект ДЭОС)
                                        if(answer.errors[0].indexOf('deos_error') > -1){
                                            var newPopupArgs = {
                                                text: '<div style="text-align: center">Ссылка, по которой вы пытаетесь авторизоваться, некорректна.</div>',
                                            };
                                            popupShow(newPopupArgs);
                                        }else{
                                            if(answer.errors.length === 1) {
                                                //отображаем первую ошибку у поля email
                                                var rowObj = objForm.find('input[name="USER_LOGIN"]').parents('.row');
                                                var errorObj = rowObj.find('.error');
                                                if(errorObj.length === 0) {
                                                    rowObj.prepend('<div class="error"></div>');
                                                    errorObj = rowObj.find('.error');
                                                }
                                                errorObj.text(answer.errors[0]);
                                            } else {
                                                var ul = $('<ul>');
                                                $.each(answer.errors, function(i, error){
                                                    $('<li>').text(error).appendTo(ul);
                                                });
                                                $('#web-form-login .message-error').text('Ошибки:').append(ul);
                                            }
                                            $('#web-form-login .message-error').show();
                                        }
                                    } else {
                                        $('#web-form-login .message-error').text('Не удалось авторизоваться, попробуйте позже!');
                                        $('#web-form-login .message-error').show();
                                    }
                                }
                                //если нужно показать другое окно
                                else if(answer.MESSAGE){
                                    //если нужно показать другое окно (проект ДЭОС)
                                    if(answer.MESSAGE.indexOf('deos_error') > -1){
                                        var newPopupArgs = {
                                            text: '<div style="text-align: center">Ссылка, по которой вы пытаетесь авторизоваться, некорректна.</div>',
                                        };
                                        popupShow(newPopupArgs);
                                    }
                                }
                            } else {
                                // Задержка для аналитики
                                setTimeout(function(){
                                    //обновляем блок авторизации на странице
                                    if (
                                        typeof answer.data !== 'undefined'
                                        && typeof answer.data.head_html !== 'undefined'
                                    ){
                                        $('.header .profile_area').replaceWith(answer.data.head_html);
                                        if(answer.data.head_html.indexOf('profile_user_name') > -1){
                                            $('.header .basket_area').removeClass('not_auth');
                                        }
                                        popupClose();
                                        //location.href = location.href.toString().replace(/\#.*/g, '');
                                    }else{
                                        if(answer.backUrl){
                                            window.location.href = answer.backUrl;
                                        }else {
                                            window.location.href = window.location.href.toString().replace(/(\#|\?login\=yes)/g, '');
                                            return false;
                                        }
                                    }
                                }, 50);
                            }
                        },
                        error: function(answer){
                            //если нужно показать другое окно
                            if(answer.responseText.indexOf('deos_error') > -1){
                                var newPopupArgs = {
                                    text: '<div style="text-align: center">Ссылка, по которой вы пытаетесь авторизоваться, некорректна.</div>',
                                };
                                popupShow(newPopupArgs);
                            }else{
                                if(answer.errors.length === 1) {
                                    $('#web-form-login .message-error').text(errors[0]);
                                } else {
                                    var ul = $('<ul>');
                                    $.each(errors, function(i, error){
                                        $('<li>').text(error).appendTo(ul);
                                    });
                                    $('#web-form-login .message-error').text('Ошибки:').append(ul);
                                }
                                $('#web-form-login .message-error').show();
                            }
                        }
                    });
                });
            });
        }
    }
}

/**
 * Валидация формы авторизации
 */
function validateFormAuth(){
    $('#web-form-login .error').each(function (){
        $(this).remove();
    });
    $('#web-form-login .message-error').hide();
    var result = true;
    var regEmail = /^[a-zа-яё0-9][a-zа-яё0-9._\-]*@[a-zа-яё0-9._\-]+\.[a-zа-яё0-9]{2,}$/i;
    var formElem = $('#web-form-login');
    var formData = new FormData(formElem[0]);

    for(var param of formData.entries()) {
        switch (param[0]){
            case 'USER_LOGIN':
                if(!param[1]){
                    $("input[NAME='USER_LOGIN']", formElem).closest('.row').prepend('<div class="error">Укажите почту!</div>');
                    result = false;
                }
                break;
            case 'USER_PASSWORD':
                if(!param[1]){
                    $("input[NAME='USER_PASSWORD']", formElem).closest('.row').prepend('<div class="error">Введите пароль!</div>');
                    result = false;
                }
                break;
        }
    }
    return result;
}

function fnErrors(errors, errorBox) {
    var $wrap = $('.mobile-form .registration-block-sms-popup .registration-block-container');

    if(errors.length === 1) {
        errorBox.text(errors[0]);
    } else {
        var ul = $('<ul>');
        $.each(errors, function(i, error){
            $('<li>').text(error).appendTo(ul);
        });
        errorBox.text('Ошибки:').append(ul);
    }
    // Показываем ошибку
    $wrap.removeClass('success').addClass('error');
}

/* Догрузка элементов */
function showMoreClick(arg){
    var sCode = '', iPage = 2, objWork;

    if(iBlockLoad === 0){
        iBlockLoad = 1;
        objWork = $(arg).parents('.main_news_block');
        if(objWork.length === 1){
            if(typeof objWork.attr('data-type') !== 'undefined'){
                sCode = objWork.attr('data-type');
            }
            if(typeof objWork.attr('data-page') !== 'undefined'){
                iPage = parseInt(objWork.attr('data-page'));
                if(!isNaN(iPage)){
                    iPage += 1;
                }else{
                    iPage = 2;
                }
            }

            $.post('/ajax/getMoreElements.php', {sCode: sCode, iPage: iPage}, function(mes){
                //после сокрытия запускаем отображение popup окна снова
                var objMes;
                try {
                    objMes = JSON.parse(mes);
                } catch (e) {
                }

                if(
                    typeof objMes !== 'undefined'
                    && typeof objMes.success !== 'undefined'
                ){
                    //если есть данные для отображения
                    if(typeof objMes.html !== 'undefined'){
                        objWork.find('.card:last').after(objMes.html);
                    }

                    //если нет больше данных для загрузки
                    if(typeof objMes.show_more === 'undefined'){
                        var objMore = objWork.find('.show_more');
                        if(objMore.length === 1){
                            objMore.addClass('inactive');
                        }
                    }

                    //ставим текущую страницу
                    objWork.attr('data-page', iPage);
                }

                iBlockLoad = 0;
            });
        }
    }
}

//перевод метки времени в формат 00:00:00
function makeTimeFromTstmp(iTstmp){
    var sResult = '';

    var iTempTstmp = parseInt(iTstmp), iHours = 0, iMinutes = 0, iSeconds = 0, sHours = '', sMinutes = '', sSeconds = '';

    //получаем значения часов, минут, секунд
    iHours = Math.floor(iTempTstmp / 3600);
    iTempTstmp -= iHours * 3600;
    iMinutes = Math.floor(iTempTstmp / 60);
    iTempTstmp -= iMinutes * 60;
    iSeconds = iTempTstmp;

    //получаем данные для вывода
    if(iHours > 9){
        sHours = iHours;
    }else if(iHours > 0){
        sHours = '0' + iHours;
    }else{
        sHours = '00';
    }
    if(iMinutes > 9){
        sMinutes = iMinutes;
    }else if(iMinutes > 0){
        sMinutes = '0' + iMinutes;
    }else{
        sMinutes = '00';
    }
    if(iSeconds > 9){
        sSeconds = iSeconds;
    }else if(iSeconds > 0){
        sSeconds = '0' + iSeconds;
    }else{
        sSeconds = '00';
    }

    sResult = sHours + ':' + sMinutes + ':' + sSeconds;

    return sResult;
}

//органзуем получение текущей метки времени для старых браузеров
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

//обрабатываем все ссылки
function workAllHrefsAjax(){
    var iCount = 0;
    //отдельно обрабатываем ссылки из админской панели
    if($('#bx-panel').length > 0){
        $('#bx-panel a').addClass('customized');
    }

    $('body a:not(.customized)').each(function(cInd, cObj){
        var objWork = $(cObj);
        if(typeof objWork.attr('href') !== 'undefined'){
            var sHref = objWork.attr('href').toString().replace(' ', '');

            if(
                typeof objWork.attr('onclick') === 'undefined'
                && sHref.substr(0, 1) === '/'
            ){
                objWork.addClass('customized').on('click', function(e){
                    e.preventDefault();
                    //получаем данные страницы по ссылке
                    getPageDataByAjax(sHref, true);
                });
                iCount++;
            }
        }
    });
}

//Получаем данные страницы по ссылке
function getPageDataByAjax(sHref, bHistoryChange){
    $.ajax({
        url: sHref,
        method: 'GET',
        data: {get_by_ajax: 'y'},
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (objMes) {
            if (
                objMes
                && typeof objMes.html !== 'undefined'
            ) {
                var sTitle = (typeof objMes.title !== 'undefined' && objMes.title !== '' ? objMes.title : '');
                //устанавливаем данные страницы
                $('.main_data:first').html(objMes.html);
                $(document).scrollTop(0);

                //если нужно менять данные в истории (не нужно для переходов по истории "назад" и "вперед")
                if(bHistoryChange){
                    history.pushState(stateObj, sTitle, sHref);
                    sCurrentPage = sHref;
                }

                //скрываем мобильное меню, если оно есть
                closeMobileMenuIfNeeds();

                //очищаем поисковую строку
                $('.header .search_area input[name="s"]').val('');

                //запуск событий для содержимого страницы
                workPageInnerData();
            }else {
                go404Page(false);
            }
        },
        error: function (mes) {
            var objMes;
            try {
                if(typeof mes.responseJSON !== 'undefined'){
                    objMes = mes.responseJSON;
                }
            }catch (e) {
            }

            if (
                objMes
                && typeof objMes.html !== 'undefined'
            ) {
                var sTitle = (typeof objMes.title !== 'undefined' && objMes.title !== '' ? objMes.title : '');
                //устанавливаем данные страницы
                $('.main_data:first').html(objMes.html);
                $(document).scrollTop(0);
                history.pushState(stateObj, sTitle, sHref);
                sCurrentPage = sHref;

                //скрываем мобильное меню, если оно есть
                closeMobileMenuIfNeeds();

                //запуск событий для содержимого страницы
                workPageInnerData();
            }else {
                location.href = '/404.php';
            }
        }
    });
}

function go404Page(bRealGo){
    if(!bRealGo){
        $.ajax({
            url: '/404.php',
            method: 'GET',
            data: {get_by_ajax: 'y'},
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (objMes) {
                if (
                    objMes
                    && typeof objMes.html !== 'undefined'
                ) {
                    var sTitle = (typeof objMes.title !== 'undefined' && objMes.title !== '' ? objMes.title : '');
                    //устанавливаем данные страницы
                    $('.main_data:first').html(objMes.html);

                    //запуск событий для содержимого страницы
                    workPageInnerData();
                }else {
                    go404Page(true);
                }
            },
            error: function (mes) {
                var objMes;
                try {
                    if(typeof mes.responseJSON !== 'undefined'){
                        objMes = mes.responseJSON;
                    }
                }catch (e) {
                }

                if (
                    objMes
                    && typeof objMes.html !== 'undefined'
                ) {
                    var sTitle = (typeof objMes.title !== 'undefined' && objMes.title !== '' ? objMes.title : '');
                    //устанавливаем данные страницы
                    $('.main_data:first').html(objMes.html);

                    //запуск событий для содержимого страницы
                    workPageInnerData();
                }else {
                    go404Page(true);
                }
            }
        });
    }else{
        location.href = '/404.php';
    }
}

//обрабатываем разлогинивание
function workUnlogin(){
    var objWork = $('.header .auth_area.authorized .close_href');
    if(objWork.length === 1){
        $('.header .auth_area.authorized .close_href').on('click', function(e){
            e.preventDefault();

            $.get('/?logout=yes&get_by_ajax=y', function(){
                location.href = location.href.toString().replace(/\#.*/g, '');
                //$('.header .auth_area.authorized').replaceWith('<div class="profile_area"><a href="javascript: void(0);" onclick="popupOpen(\'auth\', \'\');" class="register_href"><div class="ico"></div></a></div>');
            });
        });
    }
}

//обрабатываем изменение url через history api
function workOnPageUrlChange(){
    window.onpopstate = (event) => {
        var sHref = document.location.href.toString().replace(document.location.origin, '');
        if(
            sHref.indexOf('#') === -1
            && sHref !== sCurrentPage
        ){
            getPageDataByAjax(sHref, false);
        }
    }
}

//Остановка проигрывания плееров сайта на других страницах браузера
function stopOtherBrowserTabsPlay(sNewSource){
    //проверяем, что проигрывание идёт
    var sPlayngSource = localStorage.getItem('audioPlayerSrc');
    //если проигрывается другой ресурс
    if(sPlayngSource !== ''){
        localStorage.setItem('audioPlayerSrc', '');
    }
}

//Сбрасываем данные плеера при новой сессии с сайтом
function resetPleerAtNewSession(){
    var sStarted = BX.getCookie('pleerWorkStarted');
    if(sStarted !== 'y'){
        localStorage.setItem('audioPlayerSrc', '');
        BX.setCookie('pleerWorkStarted', 'y', {path: '/'});
    }
}

//Очистка корзины пользователя
function cleanUserBasket(backUrl, iBasketProduct){
    if(backUrl === ''){
        backUrl = location.href;
    }
    backUrl = backUrl.toString().replace(/\#.*/g, '');

    $.post('/ajax/cleanBasket.php', {iBasketProduct: iBasketProduct}, function(){
        location.href = backUrl; //если backUrl изначально равен '', то просто перезагрузка страницы
    });
}

//добавление товара в корзину
function btnAddBasketProduct(iProductId) {
    //return;
    // Блокировка повторной отправки
    let btn = $(this);
    if (btn.data('lock')) {
        return;
    }
    btn.data('lock', true);

    $.ajax({
        url: '/ajax/addToBasket.php',
        type: 'POST',
        data: {
            AJAX_CATALOG_ELEMENT_BTN: 'Y',
            ACTION: 'ADD_PRODUCT_BASKET',
            PRODUCT_ID: iProductId,
            sessid: BX.bitrix_sessid()
        },
        cache: false,
        //processData: false,
        //contentType: false,
        dataType: 'json',
        success: function (answer) {

            if (answer) {
                if (typeof answer.success !== 'undefined') {
                    if (!answer.data.bIsAuthorized && answer.data.cookie) {
                        popupOpen('auth', '');
                        BX.setCookie('dataAddBasketProduct', answer.data.cookie, {path: '/', expires: 3600 * 24 * 7});
                    } else {
                        checkGoBasket();
                    }
                } else if (typeof answer.not_auth !== 'undefined') {
                    popupOpen('auth', '');
                } else {
                    alert(answer.error);
                }
            } else {
                alert('Ошибка ответа от сервера!');
            }

            btn.data('lock', false);
        },
        error: function () {
            alert('Ошибка запроса к серверу!');
            btn.data('lock', false);
        }
    });
}

//обработка перехода в корзину
function checkGoBasket(){
    if($('.header .auth_area').hasClass('authorized')){
        var sHref = '/lk/order/';
        //если есть работающий плеер, то открываем корзину в новом окне
        if($('.site_player_area').css('display') === 'block'){
            window.open(sHref);
        }
        //иначе переходим в этой же вкладке
        else{
            document.location.href = sHref;
        }
    }else{
        popupOpen('auth', '');
    }
}

//проставляем купленные товары и товары в корзине
function setBasketAndBuyedGoods(){
    var objArea = $('.catalog_area:first'), objWork;
    var iId;
    if(objArea.length > 0){
        if(
            typeof arrBuyedGoods !== 'undefined'
            && typeof arrBasketGoods !== 'undefined'
        ){
            objArea.find('.card').each(function(cInd, cObj){
                iId = 0;
                objWork = $(cObj);
                if(typeof objWork.attr('data-id') !== 'undefined'){
                    iId = objWork.attr('data-id');
                }

                //если товар в корзине
                if(typeof arrBasketGoods[iId] !== 'undefined'){
                    objWork.find('button[data-rel="basket"]').removeClass('inactive');
                }
                //если товар еще не куплен
                else if(typeof arrBuyedGoods[iId] === 'undefined'){
                    objWork.find('button[data-rel="buy"]').removeClass('inactive');
                }
            });
        }
    }
}

//скрываем мобильное меню, если требуется
function closeMobileMenuIfNeeds(){
    var objContainer = $('.bx-touch .header.show_mobile_menu');
    var objWork = $('.bx-touch .header.show_mobile_menu .top_menu_area');
    var objBody = $('body');
    if(objWork.length === 1){
        iBlockAnim = 1;
        objBody.addClass('fast_menu_hide');
        objWork.css('display', 'none');
        objContainer.removeClass('show_mobile_menu');
        setTimeout(function(){
            iBlockAnim = 0;
            objBody.removeClass('fast_menu_hide');
            objWork.removeAttr('style');
        }, 1200);
    }
}

//ротация баннеров на главной странцие
function rotateMainBanners(){
    setInterval(function(){
        //проверяем, что в данный момент мышь не над областью
        if(
            $('.main_slider_area').length === 1
            && $('.main_slider_area:hover').length === 0
        ){
            var objDots = $('.main_slider_area .owl-dots .owl-dot');
            var iDotsTotal = objDots.length;
            objDots.each(function(cInd, cObj){
                if($(cObj).hasClass('active')){
                    //ищем новую картинку для пролистывания
                    var iNewInd = 0;
                    if(cInd + 1 < iDotsTotal){
                        iNewInd = cInd + 1;
                    }

                    objDots.eq(iNewInd).trigger('click');
                    return false;
                }
            });
        }
    }, 5000);
}

//применение фильтра каталога
function submitCatalogFilter(){
    var arrSendData = {}, objTemp, objArea, sParams = '', sUrl = '', sCurrentUrl = '', sTemp = '';

    objArea = $('.catalog_block .catalog_filter_area');

    //получаем данные
    if(objArea.length === 1){
        objTemp = objArea.find('input[name="book_name"]');
        if(objTemp.length === 1){
            sTemp = objTemp.val().trim();
            arrSendData['name'] = sTemp;
            if(sTemp.length > 0){
                sParams = '?name=' + sTemp;
            }
        }

        objTemp = objArea.find('input[name="book_description"]');
        if(objTemp.length === 1){
            sTemp = objTemp.val().trim();
            arrSendData['descr'] = sTemp;
            if(sTemp.length > 0) {
                sParams += (sParams.length > 0 ? '&' : '?') + 'descr=' + sTemp;
            }
        }

        objTemp = objArea.find('input[name="book_author"]');
        if(objTemp.length === 1){
            sTemp = objTemp.val().trim();
            arrSendData['author'] = sTemp;
            if(sTemp.length > 0) {
                sParams += (sParams.length > 0 ? '&' : '?') + 'author=' + sTemp;
            }
        }

        objTemp = objArea.find('input[name="book_reader"]');
        if(objTemp.length === 1){
            sTemp = objTemp.val().trim();
            arrSendData['reader'] = sTemp;
            if(sTemp.length > 0) {
                sParams += (sParams.length > 0 ? '&' : '?') + 'reader=' + sTemp;
            }
        }

        objTemp = objArea.find('input[name="book_seria"]');
        if(objTemp.length === 1){
            sTemp = objTemp.val().trim();
            arrSendData['seria'] = sTemp;
            if(sTemp.length > 0) {
                sParams += (sParams.length > 0 ? '&' : '?') + 'seria=' + sTemp;
            }
        }

        sCurrentUrl = document.location.href.toString().replace(/\#.*/g, '').replace('https://1caudio.rrsdev.ru', '');
        sUrl = sCurrentUrl.replace(/\?.*/g, '') + sParams;
        //если страница изменилась, то загружаем её данные
        if(sCurrentUrl !== sUrl){
            getPageDataByAjax(sUrl, true);
        }
    }
}

//отмена фильтра каталога
function cancelCatalogFilter(){
    var sCurrentUrl = document.location.href.toString().replace(/\#.*/g, '').replace('https://1caudio.rrsdev.ru', '');
    var sUrl = sCurrentUrl.replace(/\?.*/g, '');

    //если содержит параметры то обновляем её данные
    if(sCurrentUrl !== sUrl){
        getPageDataByAjax(sUrl, true);
    }
}

/*
function corsTest(sUrl)
{
    console.log("fires-cors-test 2");
    $.ajax
    ({
        url: sUrl,
        success: function(data)
        {
            console.log(data);
        }
    });
}*/



//проигрываем главу
function playChapterAudio(iId1, iId2, objArg){
    var sAudioSource = '/ajax/' + iId1 + '_' + iId2 + '.mp3?id1=' + iId1 + '&id2=' + iId2, sAudioPic = '', sAudioName = '', sAudioSign = '';
    var objPic = $('.detail_area .left_side .card_pic img');
    if(
        objPic.length === 1
        && typeof objPic.attr('src') !== 'undefined'
        && objPic.attr('src') !== ''
    ){
        sAudioPic = objPic.attr('src');
    }

    var objName = $('.detail_area .right_side > .name');
    if(objName.length === 1){
        sAudioName = objName.text();
    }

    var objWork = $(objArg);
    sAudioSign = objWork.text();

    //запускаем плеер
    runFastAudioPlayer(sAudioSource, sAudioPic, sAudioName, sAudioSign);
}

// Запуск плеера
function runFastAudioPlayer(sAudioSource, sAudioPic, sAudioName, sAudioSign){
    //$('.debug_area').html($('.debug_area').html() + '<br/>' + 'check 1 (' + iBlockAnim + (!objAudioPlayerData.bWaitForRun ? ';y' : ';n') + ')');

    //работаем только если нет активной анимации
    if(
        iBlockAnim === 0
        && !objAudioPlayerData.bWaitForRun
    ){
        objAudioPlayerData.bWaitForRun = true;

        //оставливаем проигрывание других ресурсов сайта в остальных вкладках браузера
        stopOtherBrowserTabsPlay(sAudioSource);

        setTimeout(function(){
            var iDelayTime = 300, bSkipAction = false;
            if(objAudioPlayerData.objPlayerArea === null){
                objAudioPlayerData.objPlayerArea = $('.site_player_area');
                objAudioPlayerData.objPlayerProgress = objAudioPlayerData.objPlayerArea.find('.player_listen_progress');
                objAudioPlayerData.objPlayerProgressTime = objAudioPlayerData.objPlayerArea.find('.player_listen_progress_time .from');
            }

            //если какие-то данные уже были загружены в плеер ранее
            if(objAudioPlayerData.audio !== null){
                //если работает другой фрагмент
                if(
                    objAudioPlayerData.sPlayerSource !== sAudioSource
                    || objAudioPlayerData.sPlayerStatus === ''
                ){
                    //если плеер в статусе игры, то ставим на паузу (если играет этот же ресурс, то ничего не делаем)
                    if(!objAudioPlayerData.audio.paused){
                        objAudioPlayerData.audio.pause();
                        objAudioPlayerData.sPlayerStatus = 'stop';
                    }

                    objAudioPlayerData.iStartOffset = 0;

                    //скрываем старый плеер, если нужно
                    if(objAudioPlayerData.objPlayerArea.css('display') === 'block'){
                        iDelayTime = 300;
                        objAudioPlayerData.objPlayerArea.fadeOut(300, function(){
                            objAudioPlayerData.sPlayerSource = sAudioSource;
                            makeAudioPlayerObject();
                        });
                    }
                    //иначе (например, если предыдущий фрагмент не удалсоь загрузить) просто отображаем загрузку
                    else{
                        objAudioPlayerData.sPlayerSource = sAudioSource;
                        makeAudioPlayerObject();
                    }
                }
                //если работает текущий фрагмент, то не создаем новый объект плеера
                else{
                    bSkipAction = true;

                    //если фрагмент стоит на паузе, то запускаем его
                    if(objAudioPlayerData.sPlayerStatus === 'pause') {
                        audioPlayerActionPlay();
                    }
                }
            }
            //иначе создаем объект плеера
            else{
                objAudioPlayerData.sPlayerSource = sAudioSource;
                makeAudioPlayerObject();
            }

            //ставим новые данные и отображаем плеер
            if(!bSkipAction){
                setTimeout(function(){
                    //если не возникло проблем с загрузкой данных
                    if(!objAudioPlayerData.bFailLoad){
                        //ставим данные плеера
                        objAudioPlayerData.objPlayerArea.find('.name').text(sAudioName);
                        objAudioPlayerData.sPlayerName = sAudioName;
                        objAudioPlayerData.sPlayerPic = '';

                        //если картинка не пустая
                        if(sAudioPic !== ''){
                            objAudioPlayerData.objPlayerArea.removeClass('no_pic');
                            objAudioPlayerData.objPlayerArea.find('.picture').css('background-image', "url('" + sAudioPic + "')");
                            objAudioPlayerData.sPlayerPic = sAudioPic;
                        }
                        //если картинка пустая
                        else{
                            objAudioPlayerData.objPlayerArea.addClass('no_pic');
                            objAudioPlayerData.objPlayerArea.find('.picture').attr('background-picture', '');
                        }
                        objAudioPlayerData.objPlayerArea.find('.clarification').text(sAudioSign);
                        objAudioPlayerData.objPlayerProgress.css('width', '0');
                        objAudioPlayerData.objPlayerProgressTime.text(makeTimeFromTstmp(0));

                        //получение смежных треков для плеера
                        setSiblingAudioTracks(sAudioSource, objAudioPlayerData.sPlayerName, sAudioSign);

                        //показываем плеер
                        objAudioPlayerData.objPlayerArea.fadeIn(300, function(){
                            iBlockAnim = 0;
                        });
                    }
                }, iDelayTime);
            }
        }, 200);
    }
}

// организация работы плеера
function makeAudioPlayerObject(){
    var bChangeSrc = (objAudioPlayerData.audio !== null && objAudioPlayerData.audio.src !== objAudioPlayerData.sPlayerSource);

    //сбрасываем старое прослушивание статуса проигрывания, если есть
    if(objAudioPlayerData.iCheckPlayerIntervalId > 0){
        clearInterval(objAudioPlayerData.iCheckPlayerIntervalId);
    }

    objAudioPlayerData.audio = new Audio('https://audio.1c.ru' + objAudioPlayerData.sPlayerSource);
    objAudioPlayerData.objPlayerArea.addClass('decoding');
    objAudioPlayerData.audio.addEventListener('canplay', canPlayAudioListener, false);

    objAudioPlayerData.objPlayerProgressTime.text('00:00:00');
    objAudioPlayerData.objPlayerArea.find('.player_listen_progress_time .to').text('');

    //стартуем проигрывание
    objAudioPlayerData.audio.currentTime = objAudioPlayerData.iStartOffset;
    objAudioPlayerData.audio.play();

    objAudioPlayerData.sPlayerStatus = 'play';
    objAudioPlayerData.objPlayerArea.addClass('playing');

    //отмечам текущие настройки как активные и запускаем прослушивание проигрывания
    localStorage.setItem('audioPlayerSrc', objAudioPlayerData.sPlayerSource);
    objAudioPlayerData.iCheckPlayerIntervalId = setInterval('checkAudioPlayerWork()', iIntervalCheckAudioPlayer);

    //для ios ставим паузу при переключении файлов
    if(
        checkIsIOS()
        && bChangeSrc
    ){
        objAudioPlayerData.audio.pause();
        objAudioPlayerData.objPlayerArea.removeClass('decoding');
        objAudioPlayerData.objPlayerArea.find('.player_listen_progress_time .to').text('-');
        objAudioPlayerData.sPlayerStatus = 'pause';
        objAudioPlayerData.objPlayerArea.removeClass('playing');
        clearInterval(objAudioPlayerData.iCheckPlayerIntervalId);
    }
}

//проверка работы плеера
function checkAudioPlayerWork(){
    //работаем только если есть объект с данными плеера
    if(
        objAudioPlayerData.audio !== null
        && !isNaN(objAudioPlayerData.audio.duration)
    ){
        //если не вышли за рамки проигранного, то обновляем текущее проигранное время
        if(objAudioPlayerData.audio.currentTime < objAudioPlayerData.audio.duration){
            var sProc = (100 - ((objAudioPlayerData.audio.duration - objAudioPlayerData.audio.currentTime) / objAudioPlayerData.audio.duration) * 100) + '%';
            objAudioPlayerData.objPlayerProgress.css('width', sProc);
            objAudioPlayerData.objPlayerProgressTime.text(makeTimeFromTstmp(objAudioPlayerData.audio.currentTime));

            //Проверяем не нужно ли поставить на паузу данный плеер (если запустили прослушивание другого материала в другом браузере)
            var sPlayngSource = localStorage.getItem('audioPlayerSrc');
            //если нужно остановить проигрывание плеера на данной странице
            if(sPlayngSource === ''){
                objAudioPlayerData.audio.pause();
                objAudioPlayerData.sPlayerStatus = 'pause';
                if (objAudioPlayerData.iCheckPlayerIntervalId > 0) {
                    clearInterval(objAudioPlayerData.iCheckPlayerIntervalId);
                }
                objAudioPlayerData.objPlayerArea.removeClass('playing finished');
            }
        }
        //иначе отображаем режим завершения прослушивания произведения
        else{
            finishAudioPlayerWork();
        }
    }
}

//завершение прослушивания произведения
function finishAudioPlayerWork(){
    //работаем только если есть объект с данными плеера
    if(objAudioPlayerData.sPlayerStatus !== 'finished'){
        objAudioPlayerData.audio.pause();
        if (objAudioPlayerData.iCheckPlayerIntervalId > 0) {
            clearInterval(objAudioPlayerData.iCheckPlayerIntervalId);
        }
        objAudioPlayerData.objPlayerProgress.css('width', '100%');
        objAudioPlayerData.objPlayerProgressTime.text(makeTimeFromTstmp(objAudioPlayerData.audio.duration));
        objAudioPlayerData.audio.currentTime = 0;
        objAudioPlayerData.sPlayerStatus = 'finished';
        objAudioPlayerData.objPlayerArea.removeClass('playing').addClass('finished');
    }
}

//получение смежных треков для плеера
function setSiblingAudioTracks(sAudioSource, sName, sSign){
    var objData = {prev: {href: '', title: '', pos: ''}, next: {href: '', title: '', pos: ''}}, iId1 = '', iId2 = '', arrTemp,
        arrTemp2, sTemp, i, bClean = false, objTemp, objTemp2, iPos;

    var objPlayerAddit = $('.player_controls_addit');
    if(objPlayerAddit.length === 0){
        $('body').append('<div class="player_controls_addit"></div>');
        objPlayerAddit = $('.player_controls_addit');
    }
    //получаем данные из текущего адреса
    arrTemp = sAudioSource.toString().replace(/\#.*/g, '').split('?', 2);
    if(typeof arrTemp[1] !== 'undefined'){
        arrTemp = arrTemp[1].split('&');
        for(i = 0; i < arrTemp.length; i++){
            arrTemp2 = arrTemp[i].split('=');
            if(
                typeof arrTemp2[1] !== 'undefined'
            ){
                if(arrTemp2[0] === 'id1'){
                    iId1 = arrTemp2[1];
                }else if(arrTemp2[0] === 'id2'){
                    iId2 = arrTemp2[1];
                }
            }
        }
    }

    //выставляем настройки
    if(iId1 !== ''){
        //если сменилась книга
        if(
            typeof objPlayerAddit.attr('data-rel') === 'undefined'
            || parseInt(iId1) !== parseInt(objPlayerAddit.attr('data-rel'))
        ){
            bClean = true;
        }
        //если нужно получить данные остальных треков из текущих настроек
        else if(iId2 !== ''){
            objTemp = objPlayerAddit.find('.item[data-id2="' + iId2 + '"]');
            if(
                objTemp.length === 1
                && typeof objTemp.attr('data-pos') !== 'undefined'
            ){
                iPos = parseInt(objTemp.attr('data-pos'));
                if(!isNaN(iPos)){
                    if(iPos > 0){
                        objTemp2 = objPlayerAddit.find('.item[data-pos="' + (iPos - 1) + '"]');
                        if(objTemp2.length === 1){
                            objData.prev.title = objTemp2.text();
                            objData.prev.href = objTemp2.attr('data-href');
                            objData.prev.pos = iPos - 1;
                        }
                    }

                    objTemp2 = objPlayerAddit.find('.item[data-pos="' + (iPos + 1) + '"]');
                    if(objTemp2.length === 1){
                        objData.next.title = objTemp2.text();
                        objData.next.href = objTemp2.attr('data-href');
                        objData.next.pos = iPos + 1;
                    }
                }
            }
        }
    }else if(typeof objPlayerAddit.attr('data-rel') !== 'undefined'){
        //получаем сохраенное имя книги
        var objSavedName = objPlayerAddit.find('.name');
        var sSavedName = '';
        if(objSavedName.length === 1){
            sSavedName = objSavedName.text();
        }
        //если имеем дело с фрагментом другой книги, то очищаем данные
        if(
            sSavedName !== ''
            && sSavedName !== sName
        ){
            bClean = true;
            objPlayerAddit.removeAttr('data-rel');
        }
    }

    //очищаем текущие настройки
    if(bClean){
        objPlayerAddit.text('');

        //если нужно получить данные остальных треков и установить настройки
        if(
            iId1 !== ''
            && iId2 !== ''
        ){
            $.get('/ajax/getPlayerAudioData.php?id1=' + iId1 + '&id2=' + iId2 + '&siblings=1', function(mes){
                var objMes;
                try {
                    objMes = JSON.parse(mes);
                } catch (e) {
                }

                if(typeof objMes.html !== 'undefined'){
                    objPlayerAddit.attr('data-rel', iId1);
                    objPlayerAddit.html(objMes.html);
                }

                if(
                    typeof objMes.prev !== 'undefined'
                    && typeof objMes.prev.href !== 'undefined'
                ){
                    objData.prev.title = objMes.prev.title;
                    objData.prev.href = objMes.prev.href;
                    objData.prev.pos = objMes.prev.pos;
                }

                if(
                    typeof objMes.next !== 'undefined'
                    && typeof objMes.next.href !== 'undefined'
                ){
                    objData.next.title = objMes.next.title;
                    objData.next.href = objMes.next.href;
                    objData.next.pos = objMes.prev.pos;
                }

                //установление смежных треков для плеера
                setSiblingAudioTracksData(objData);
            });
        }else{
            setSiblingAudioTracksData(objData);
        }
    }else{
        setSiblingAudioTracksData(objData);
    }
}

//установление смежных треков для плеера
function setSiblingAudioTracksData(objData){
    if(
        typeof objData.prev !== 'undefined'
        && typeof objData.prev.href !== 'undefined'
        && objData.prev.href !== ''
    ){
        objAudioPlayerData.objPlayerArea.find('.control_area .prev').removeClass('inactive').attr({'data-href': objData.prev.href, title: objData.prev.title.toString().replace('"', '')}).find('.data').text(objData.prev.title);
    }else{
        objAudioPlayerData.objPlayerArea.find('.control_area .prev').addClass('inactive').removeAttr('data-href title').find('.data').text('');
    }
    if(
        typeof objData.next !== 'undefined'
        && typeof objData.next.href !== 'undefined'
        && objData.next.href !== ''
    ){
        objAudioPlayerData.objPlayerArea.find('.control_area .next').removeClass('inactive').attr({'data-href': objData.next.href, title: objData.next.title.toString().replace('"', '')}).find('.data').text(objData.next.title);
    }else{
        objAudioPlayerData.objPlayerArea.find('.control_area .next').addClass('inactive').removeAttr('data-href title').find('.data').text('');
    }
}

/* Обработка нажатия на кнопку play плеера */
function audioPlayerActionPlay(){
    //работаем только если есть объект с данными плеера
    if(objAudioPlayerData.audio !== null){
        //если на данный момент проигрывание идёт, то ставим на паузу
        if(objAudioPlayerData.sPlayerStatus === 'play'){
            pauseAudioPlayer();
        }
        //если на данный момент проигрывание стоит на паузе, то продолжаем проигрывать
        else if(objAudioPlayerData.sPlayerStatus === 'pause'){
            //оставливаем проигрывание других ресурсов сайта в остальных вкладках браузера
            if(
                typeof objAudioPlayerData.sPlayerSource !== 'undefined'
                && objAudioPlayerData.sPlayerSource !== ''
            ){
                stopOtherBrowserTabsPlay(objAudioPlayerData.sPlayerSource);
            }

            setTimeout(function(){
                objAudioPlayerData.audio.play();
                objAudioPlayerData.bWaitForRun = false;
                objAudioPlayerData.sPlayerStatus = 'play';
                objAudioPlayerData.objPlayerArea.addClass('playing').removeClass('finished');

                //отмечам текущие настройки как активные и запускаем прослушивание проигрывания
                localStorage.setItem('audioPlayerSrc', objAudioPlayerData.sPlayerSource);
                objAudioPlayerData.iCheckPlayerIntervalId = setInterval('checkAudioPlayerWork()', iIntervalCheckAudioPlayer);
            }, 200);
        }
        //если на данный момент проигрывание стоит на завершенном шаге, то начинаем проигрывать заново
        else if(objAudioPlayerData.sPlayerStatus === 'finished'){
            //ставим прослушивание статуса проигрывания
            objAudioPlayerData.iCheckPlayerIntervalId = setInterval('checkAudioPlayerWork()', iIntervalCheckAudioPlayer);
            objAudioPlayerData.iStartOffset = 0;
            jumpToTime();
        }
    }
}

//Ставим плеер на паузу
function pauseAudioPlayer(){
    if(objAudioPlayerData.audio2 !== null) {
        //если на данный момент проигрывание идёт, то ставим на паузу
        if (objAudioPlayerData.sPlayerStatus === 'play') {
            objAudioPlayerData.audio2.pause();
            objAudioPlayerData.sPlayerStatus = 'pause';
            if (objAudioPlayerData.iCheckPlayerIntervalId > 0) {
                clearInterval(objAudioPlayerData.iCheckPlayerIntervalId);
            }
            objAudioPlayerData.objPlayerArea.removeClass('playing finished');
        }
    }
    else if(objAudioPlayerData.audio !== null) {
        //если на данный момент проигрывание идёт, то ставим на паузу
        if (objAudioPlayerData.sPlayerStatus === 'play') {
            objAudioPlayerData.audio.pause();
            objAudioPlayerData.sPlayerStatus = 'pause';
            if (objAudioPlayerData.iCheckPlayerIntervalId > 0) {
                clearInterval(objAudioPlayerData.iCheckPlayerIntervalId);
            }
            objAudioPlayerData.objPlayerArea.removeClass('playing finished');
        }
    }
}

//проигрываем следующий трек в плеере
function playNextAudioTrack(objArg){
    var objWork = $(objArg);
    if(
        !objWork.hasClass('inactive')
        && typeof objWork.attr('data-href') !== 'undefined'
        && objWork.attr('data-href') !== ''
        && !objAudioPlayerData.bWaitForRun
    ){
        //запускаем плеер с нужной главой
        runFastAudioPlayer(objWork.attr('data-href'), objAudioPlayerData.sPlayerPic, objAudioPlayerData.sPlayerName, objWork.text());
    }
}

//проигрываем предыдущий трек в плеере
function playPrevAudioTrack(objArg){
    var objWork = $(objArg);
    if(
        !objWork.hasClass('inactive')
        && typeof objWork.attr('data-href') !== 'undefined'
        && objWork.attr('data-href') !== ''
        && !objAudioPlayerData.bWaitForRun
    ){
        //запускаем плеер с нужной главой
        runFastAudioPlayer(objWork.attr('data-href'), objAudioPlayerData.sPlayerPic, objAudioPlayerData.sPlayerName, objWork.text());
    }
}

// Переход на нужную секунду в плеере
function jumpAudioPlayerTimeManual(arg){
    //работаем только если есть объект с данными плеера
    if(objAudioPlayerData.audio !== null){
        if(typeof arg.layerX !== 'undefined'){
            //получаем процент относительно ширины области
            var iTemp = objAudioPlayerData.objPlayerArea.find('.player_listen_progress_time').width();
            if(iTemp > 0){
                var iProc = 100 - parseInt(((iTemp - arg.layerX) / iTemp) * 100);
                if(iProc > 0){
                    //получаем новую минуту относительно проигрывания
                    var iNewTime = parseInt(objAudioPlayerData.audio.duration * iProc / 100);
                    if(iNewTime < objAudioPlayerData.audio.duration){
                        objAudioPlayerData.audio.currentTime = iNewTime;
                        var sProc = (100 - ((objAudioPlayerData.audio.duration - objAudioPlayerData.audio.currentTime) / objAudioPlayerData.audio.duration) * 100) + '%';
                        if(iNewTime === 0){
                            sProc = '0%';
                        }
                        objAudioPlayerData.objPlayerProgressTime.text(makeTimeFromTstmp(iNewTime));
                        objAudioPlayerData.objPlayerProgress.css('width', sProc);
                    }else{
                        finishAudioPlayerWork();
                    }
                }
            }
        }
    }
}

//переход к другой части произведения (на 30 секунд вперед)
function jumpAudio30SecForward(){
    //работаем только если есть объект с данными плеера и нет ожидания загрузки другого плеера
    if(objAudioPlayerData.audio !== null){
        var iNewTime = parseInt(objAudioPlayerData.audio.currentTime) + 30;
        if(objAudioPlayerData.sPlayerStatus === 'finished'){
            iNewTime = Math.ceil(objAudioPlayerData.audio.duration);
        }
        if(iNewTime < objAudioPlayerData.audio.duration){
            objAudioPlayerData.audio.currentTime = iNewTime;
            var sProc = (100 - ((objAudioPlayerData.audio.duration - objAudioPlayerData.audio.currentTime) / objAudioPlayerData.audio.duration) * 100) + '%';
            objAudioPlayerData.objPlayerProgressTime.text(makeTimeFromTstmp(iNewTime));
            objAudioPlayerData.objPlayerProgress.css('width', sProc);
        }else{
            finishAudioPlayerWork();
        }
    }
}

//переход к другой части произведения (на 30 секунд назад)
function jumpAudio30SecBackward(){
    //работаем только если есть объект с данными плеера и нет ожидания загрузки другого плеера
    if(objAudioPlayerData.audio !== null){
        var iNewTime = parseInt(objAudioPlayerData.audio.currentTime) - 30;
        if(objAudioPlayerData.sPlayerStatus === 'finished'){
            iNewTime = parseInt(objAudioPlayerData.audio.duration) - 30;
            objAudioPlayerData.sPlayerStatus = 'pause';
        }

        if(iNewTime < 0){
            iNewTime = 0;
        }
        objAudioPlayerData.audio.currentTime = iNewTime;
        var sProc = (100 - ((objAudioPlayerData.audio.duration - objAudioPlayerData.audio.currentTime) / objAudioPlayerData.audio.duration) * 100) + '%';
        if(iNewTime === 0){
            sProc = '0%';
        }
        objAudioPlayerData.objPlayerProgressTime.text(makeTimeFromTstmp(iNewTime));
        objAudioPlayerData.objPlayerProgress.css('width', sProc);
    }
}

//Меняем уровень громкости для плеера
function switchAudioPlayerMuteMode(){
    //работаем только если есть объект с данными плеера
    if(objAudioPlayerData.audio !== null){
        var objWork = objAudioPlayerData.objPlayerArea.find('.sound_area .x_param');
        var objWorkMute = objAudioPlayerData.objPlayerArea.find('.sound_area .ico');
        //если не стоит режим "тишины", то ставим его
        if(!objAudioPlayerData.bVolumeMuteMode){
            objWorkMute.addClass('mute');
            objAudioPlayerData.audio.volume = 0;
            objAudioPlayerData.fVolumeLevelAtMute = objAudioPlayerData.fVolumeLevel;
            objAudioPlayerData.bVolumeMuteMode = true;
            objAudioPlayerData.fVolumeLevel = -1.0;
            objWork.text('0');
        }
        //если стоит режим "тишины", то выходим из него
        else {
            objAudioPlayerData.bVolumeMuteMode = false;
            objAudioPlayerData.audio.volume = 1;
            objWorkMute.removeClass('mute');
            //если до режима тишины был уровень "выключен", то включаем полный
            objAudioPlayerData.fVolumeLevel = 1.0;
            objWork.text('1');
        }
    }
}

//функция для события прослушивания музыки
function canPlayAudioListener(event){
    objAudioPlayerData.bWaitForRun = false;
    objAudioPlayerData.objPlayerArea.removeClass('decoding');
    objAudioPlayerData.objPlayerArea.find('.player_listen_progress_time .to').text(makeTimeFromTstmp(objAudioPlayerData.audio.duration));
}

function checkIsIOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
/* End */
;; /* /local/templates/.default/libs/jquery/jquery.mousewheel.pack.js?16895824901387*/
; /* /local/templates/.default/libs/fancybox/script.js?168958249067990*/
; /* /local/templates/.default/libs/select2/select2.js?168958249067751*/
; /* /local/templates/.default/libs/select2/select2_lang.js?16895824901126*/
; /* /local/templates/.default/libs/owl_carousel/owl_carousel.min.js?168958249044342*/
; /* /local/templates/xml_catalog/extra_script.js?168958312798950*/
