try{window.ezLazySizesConfig=window.ezLazySizesConfig||{};window.ezLazySizesConfig.lazyClass='ezlazyload';window.ezLazySizesConfig.loadingClass='ezlazyloading';window.ezLazySizesConfig.loadedClass='ezlazyloaded';window.ezLazySizesConfig.srcAttr='data-ezsrc';window.ezLazySizesConfig.srcsetAttr='data-ezsrcset';window.ezLazySizesConfig.sizesAttr='sizes';window.ezLazySizesConfig.isWebP=false;!function(a,b){var c=b(a,a.document);a.ezLazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=c,h.initEvent(d,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),e({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.ezLazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.ezLazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a.parentNode,"visibility")&&"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});!function(e,t){var r=function(){t(e.ezLazySizes),e.removeEventListener("lazyunveilread",r,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):e.ezLazySizes?r():e.addEventListener("lazyunveilread",r,!0)}(window,function(e,t,r){"use strict";function a(e,r){if(!o[e]){var a=t.createElement(r?"link":"script"),n=t.getElementsByTagName("script")[0];r?(a.rel="stylesheet",a.href=e):a.src=e,o[e]=!0,o[a.src||a.href]=!0,n.parentNode.insertBefore(a,n)}}
function updateBackgroundImage(target,imageUrl){let currentBackground=target.style.getPropertyValue("background-image");const isUsingCustomProperty=target.style.getPropertyValue('--background-image');const newUrl=i.test(imageUrl)?JSON.stringify(imageUrl):imageUrl;if(isUsingCustomProperty){currentBackground=target.style.getPropertyValue("--background-image");target.style.setProperty("--background-image",currentBackground.replace(/url\([^)]+\)/,'url('+newUrl+')'));}else{target.style.setProperty("background-image",currentBackground.replace(/url\([^)]+\)/,'url('+newUrl+')'));}}
var n,i,o={};t.addEventListener&&(i=/\(|\)|\s|'/,n=function(e,r){var a=t.createElement("img");a.onload=function(){a.onload=null,a.onerror=null,a=null,r()},a.onerror=a.onload,a.src=e,a&&a.complete&&a.onload&&a.onload()},addEventListener("lazybeforeunveil",function(e){var t,o,l,d;e.detail.instance==r&&(e.defaultPrevented||("none"==e.target.preload&&(e.target.preload="auto"),(t=e.target.getAttribute("data-link"))&&a(t,!0),(t=e.target.getAttribute("data-script"))&&a(t),(t=e.target.getAttribute("data-require"))&&(r.cfg.requireJs?r.cfg.requireJs([t]):a(t)),(l=e.target.getAttribute("data-ezbg"))&&(e.detail.firesLoad=!0,o=function(){l=e.target.getAttribute("data-ezbg"),updateBackgroundImage(e.target,l),e.detail.firesLoad=!1,r.fire(e.target,"_lazyloaded",{},!0,!0)},n(l,o)),(d=e.target.getAttribute("data-poster"))&&(e.detail.firesLoad=!0,n(d,o=function(){e.target.poster=d,e.detail.firesLoad=!1,r.fire(e.target,"_lazyloaded",{},!0,!0)}))))},!1))});(function(){function check_webp_feature(feature,callback){var kTestImages={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};var img=new Image();img.onload=function(){var result=(img.width>0)&&(img.height>0);callback(feature,result);};img.onerror=function(){callback(feature,false);};img.src="data:image/webp;base64,"+kTestImages[feature];}
check_webp_feature('lossy',function(feature,supported){window.ezLazySizesConfig.isWebP=supported;});})();var _ezImgFmt=(function(w){var alterSrcset=false;var alterSrc=false;var alterBg=false;function SrcsetItem(originalValue){this.originalValue=originalValue;this.filename="";this.inherentWidth="";this.loaded=false;if(attrEmpty(originalValue)===true){return;}
var set=originalValue.trim();var parts=set.split(" ");if(parts.length===0){return;}
this.filename=parts[0];this.inherentWidth=parts[1];this.loaded=true;}
function SrcsetItems(srcset){this.list=[];this.srcset=srcset;if(attrEmpty(srcset)===true){return;}
var sets=srcset.split(",");for(var i=0;i<sets.length;i++){var item=new SrcsetItem(sets[i]);if(item.loaded===true){this.list.push(item);}}}
function appendQueryParam(u,param){if(u.indexOf("ezimgfmt")!==-1)return u;var q=u.indexOf('?')===-1?"?":"&";q+=param;return u+q;}
function attrEmpty(attrVal){return attrVal===null||attrVal.trim()==='';}
function createParam(imgVars){return "ezimgfmt="+imgVars.join("/");}
function processElement(el){if(typeof el==='undefined'||el===null){return;}
var ezimgfmt=el.getAttribute("ezimgfmt");if(attrEmpty(ezimgfmt)===true){return;}
ezimgfmt=ezimgfmt.replace(/\s+/g,' ');if(attrEmpty(ezimgfmt)===true){return;}
var imgVars=ezimgfmt.split(' ');if(imgVars.length===0){return;}
imgVars=processImgVars(el,imgVars);if(imgVars.length===0){return;}
processSrc(el,imgVars);processSrcset(el,imgVars);processBg(el,imgVars);}
function processImgVars(el,imgVars){var idxSrc=imgVars.indexOf("src");if(idxSrc!==-1){alterSrc=true;imgVars.splice(idxSrc,1);}
var idxSrcset=imgVars.indexOf("srcset");if(idxSrcset!==-1){alterSrcset=true;imgVars.splice(idxSrcset,1);}
var idxBg=imgVars.indexOf("bg");if(idxBg!==-1){alterBg=true;imgVars.splice(idxBg,1);}
var idxNg=imgVars.indexOf('ng');if(idxNg!==-1){if(w.ezLazySizesConfig.isWebP===true){imgVars[idxNg]=imgVars[idxNg]+":webp";}else{imgVars.splice(idxNg,1);imgVars.push('notWebP');}}
var idxRs=imgVars.indexOf('rs');if(idxRs!==-1){var size=el.clientWidth+"x"+el.clientHeight;imgVars[idxRs]=imgVars[idxRs]+":"+size;}
return imgVars;}
function processBg(el,imageVars){if(alterBg===false){return;}
var dataEzBg=el.getAttribute("data-ezbg");if(attrEmpty(dataEzBg)===true){return;}
var bgImgVars=removeResizeVars(imageVars);var newURL=appendQueryParam(dataEzBg,createParam(bgImgVars));el.setAttribute("data-ezbg",newURL);}
function processSrc(el,imageVars){if(alterSrc===false){return;}
var dataEzSrc=el.getAttribute("data-ezsrc");if(attrEmpty(dataEzSrc)===true){return;}
var newURL=appendQueryParam(dataEzSrc,createParam(imageVars));el.setAttribute("data-ezsrc",newURL);}
function processSrcset(el,imgVars){if(alterSrcset===false){return;}
var dataEzSrcset=el.getAttribute("data-ezsrcset");if(attrEmpty(dataEzSrcset)===true){return;}
var ssImgVars=removeResizeVars(imgVars);var srcsetItems=new SrcsetItems(dataEzSrcset);if(srcsetItems.list===0){return;}
var param=createParam(ssImgVars);for(var i=0;i<srcsetItems.list.length;i++){var item=srcsetItems.list[i];var orig=item.originalValue.replace(item.filename,appendQueryParam(item.filename,param));dataEzSrcset=dataEzSrcset.replace(item.originalValue,orig);}
el.setAttribute("data-ezsrcset",dataEzSrcset);}
function removeResizeVars(imageVars){var vars=[];for(var i=0;i<imageVars.length;i++){var v=imageVars[i];if(v.lastIndexOf("rs",0)!==0)vars.push(v);}
return vars;}
return{process:processElement};})(window);document.addEventListener("lazybeforeunveil",function(t){var id=Math.random();t.target.setAttribute("ezoid",id);if(typeof ezorqs!='undefined'){ezorqs(t,id);}_ezImgFmt.process(t.target);});document.addEventListener("lazyloaded",function(t){var id=t.target.getAttribute("ezoid");if((id==null||id.length<1)&&typeof ezorqe!='undefined'){ezorqe(t,Math.random(),true)}else if(typeof ezorqe!='undefined'){ezorqe(t,id)}});}catch(err){var hREED=function(er){return function(){reportEzError(er,"/tardisrocinante/lazy_load.js")}};typeof reportEzError==="function"?hREED(err):window.addEventListener('reportEzErrorDefined',hREED(err),{once:true});console.error(err);}k-css" href="//www.ezoic.com/wp-content/plugins/carousel-block/dist/assets/vendor/slick/slick.min.css?ver=1699482528" media />
<link rel="stylesheet" id="carousel-block-css" href="//www.ezoic.com/wp-content/plugins/carousel-block/dist/blocks.style.build.css?ver=1699482528" media="all" />
<link rel="stylesheet" id="twentig-blocks-css" href="//www.ezoic.com/wp-content/plugins/twentig/dist/style-index.css?ver=f41e47526b76d38fc169" media="all" />
<link rel="stylesheet" id="wp-components-css" href="//www.ezoic.com/wp-includes/css/dist/components/style.min.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="wp-block-editor-css" href="//www.ezoic.com/wp-includes/css/dist/block-editor/style.min.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="wp-reusable-blocks-css" href="//www.ezoic.com/wp-includes/css/dist/reusable-blocks/style.min.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="wp-patterns-css" href="//www.ezoic.com/wp-includes/css/dist/patterns/style.min.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="wp-editor-css" href="//www.ezoic.com/wp-includes/css/dist/editor/style.min.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="ilist_block-cgb-style-css-css" href="//www.ezoic.com/wp-content/plugins/iList-pro/gutenberg/ilist-block/dist/blocks.style.build.css?ver=6.4.2" media="all" />
<style id="classic-theme-styles-inline-css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id="global-styles-inline-css">
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #FFFFFF;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--dark-gray: #28303D;--wp--preset--color--gray: #39414D;--wp--preset--color--green: #D1E4DD;--wp--preset--color--blue: #D1DFE4;--wp--preset--color--purple: #D1D1E4;--wp--preset--color--red: #E4D1D1;--wp--preset--color--orange: #E4DAD1;--wp--preset--color--yellow: #EEEADD;--wp--preset--color--subtle: #f4f4f4;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--gradient--purple-to-yellow: linear-gradient(160deg, #D1D1E4 0%, #EEEADD 100%);--wp--preset--gradient--yellow-to-purple: linear-gradient(160deg, #EEEADD 0%, #D1D1E4 100%);--wp--preset--gradient--green-to-yellow: linear-gradient(160deg, #D1E4DD 0%, #EEEADD 100%);--wp--preset--gradient--yellow-to-green: linear-gradient(160deg, #EEEADD 0%, #D1E4DD 100%);--wp--preset--gradient--red-to-yellow: linear-gradient(160deg, #E4D1D1 0%, #EEEADD 100%);--wp--preset--gradient--yellow-to-red: linear-gradient(160deg, #EEEADD 0%, #E4D1D1 100%);--wp--preset--gradient--purple-to-red: linear-gradient(160deg, #D1D1E4 0%, #E4D1D1 100%);--wp--preset--gradient--red-to-purple: linear-gradient(160deg, #E4D1D1 0%, #D1D1E4 100%);--wp--preset--font-size--small: 18px;--wp--preset--font-size--medium: 22.5px;--wp--preset--font-size--large: 24px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--extra-small: 16px;--wp--preset--font-size--normal: 20px;--wp--preset--font-size--h-3: 32px;--wp--preset--font-size--extra-large: 40px;--wp--preset--font-size--h-2: 48px;--wp--preset--font-size--huge: 65px;--wp--preset--font-size--gigantic: 144px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(body .is-layout-flow)  > :first-child:first-child{margin-block-start: 0;}:where(body .is-layout-flow)  > :last-child:last-child{margin-block-end: 0;}:where(body .is-layout-flow)  > *{margin-block-start: 24px;margin-block-end: 0;}:where(body .is-layout-constrained)  > :first-child:first-child{margin-block-start: 0;}:where(body .is-layout-constrained)  > :last-child:last-child{margin-block-end: 0;}:where(body .is-layout-constrained)  > *{margin-block-start: 24px;margin-block-end: 0;}:where(body .is-layout-flex) {gap: 24px;}:where(body .is-layout-grid) {gap: 24px;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
.tw-mt-0{margin-top:0px!important;}.tw-mb-0{margin-bottom:0px!important;}.tw-mt-1{margin-top:5px!important;}.tw-mb-1{margin-bottom:5px!important;}.tw-mt-2{margin-top:10px!important;}.tw-mb-2{margin-bottom:10px!important;}.tw-mt-3{margin-top:15px!important;}.tw-mb-3{margin-bottom:15px!important;}.tw-mt-4{margin-top:20px!important;}.tw-mb-4{margin-bottom:20px!important;}.tw-mt-5{margin-top:30px!important;}.tw-mb-5{margin-bottom:30px!important;}.tw-mt-6{margin-top:40px!important;}.tw-mb-6{margin-bottom:40px!important;}.tw-mt-7{margin-top:50px!important;}.tw-mb-7{margin-bottom:50px!important;}.tw-mt-8{margin-top:60px!important;}.tw-mb-8{margin-bottom:60px!important;}.tw-mt-9{margin-top:90px!important;}.tw-mb-9{margin-bottom:90px!important;}.tw-mt-10{margin-top:120px!important;}.tw-mb-10{margin-bottom:120px!important;}.tw-mt-auto{margin-top:auto!important;}.tw-mb-auto{margin-bottom:auto!important;}@media (max-width: 651px){.tw-sm-hidden{display:none !important;}}@media (min-width: 652px) and (max-width: 1023px){.tw-md-hidden{display:none !important;}}@media (min-width: 1024px){.tw-lg-hidden {display:none !important;}}
</style>
<link rel="stylesheet" id="ilist-qcld-embed-form-css-css" href="//www.ezoic.com/wp-content/plugins/iList-pro//embed/css/embed-form.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="mabel-wheel-of-fortune-css" href="//www.ezoic.com/wp-content/plugins/mabel-wheel-of-fortune/public/css/public.min.css?ver=3.5.9" media="all" />
<link rel="stylesheet" id="sptpro-font-awesome-css" href="//www.ezoic.com/wp-content/plugins/wp-tabs-pro/public/css/font-awesome.min.css?ver=2.1.4" media="all" />
<link rel="stylesheet" id="twenty-twenty-one-style-css" href="//www.ezoic.com/wp-content/themes/twentytwentyone/style.css?ver=1.3.1626886655" media="all" />
<style id="twenty-twenty-one-style-inline-css">
:root{--global--color-background: #ffffff;--global--color-primary: #000;--global--color-secondary: #000;--button--color-background: #000;--button--color-text-hover: #000;}
</style>
<link rel="stylesheet" id="twenty-twenty-one-print-style-css" href="//www.ezoic.com/wp-content/themes/twentytwentyone/assets/css/print.css?ver=1.3.1626886655" media="print" />
<link rel="stylesheet" id="chld_thm_cfg_child-css" href="//www.ezoic.com/wp-content/themes/twentytwentyone-child/style.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="twentig-twentyone-css" href="//www.ezoic.com/wp-content/plugins/twentig/dist/css/twentytwentyone/style.css?ver=1.8" media="all" />
<style id="twentig-twentyone-inline-css">
.menu-search:last-child{margin-inline-end:var(--primary-nav--padding)}.header-actions .search-form{margin:0;position:relative;max-width:100%}.header-actions .search-submit{background:transparent!important;border:0;position:absolute;padding:2px;right:0;top:50%;margin:-14px 0 0}.header-actions .search-field:placeholder-shown + .search-submit{pointer-events:none}.header-actions .search-field:not(:focus){cursor:pointer}.header-actions .search-field{-webkit-appearance:none;-webkit-border-radius:0;margin:0;font-size:var(--primary-nav--font-size-sub-menu);padding:4px 34px 4px 0;border:0;border-bottom:1px solid transparent;color:currentcolor;background:transparent!important;width:0;transition:width 0.4s ease-in-out,border-color 0.2s ease-in-out}.header-actions .search-field::placeholder{color:currentcolor}.header-actions .search-form:focus-within .search-field{width:200px;border-color:currentcolor}.header-actions .search-field:focus{outline:none}.header-actions .search-field:focus-visible{outline-offset:5px}.rtl .header-actions .search-submit{right:auto;left:0}.rtl .header-actions .search-field{padding:4px 0 4px 34px}.primary-navigation .menu-button a{text-decoration:none!important;padding-inline:16px;font-weight:var(--button--font-weight);font-family:var(--button--font-family);border-radius:var(--button--border-radius);text-transform:none;letter-spacing:normal}#site-navigation .menu-button a,#site-navigation .menu-button a:focus{background-color:var(--header--color-text);color:var(--header--color-background,var(--global--color-background))}#site-navigation .menu-button a:is(:hover,:focus){opacity:0.9;outline-offset:4px!important}.menu-search + .social-item,.social-item + .menu-button{margin-inline-start:25px}.menu-search + .menu-button{margin-inline-start:35px}.header-actions .menu-button:last-child{margin-inline-end:var(--primary-nav--padding)}.header-actions .social-item:first-child{margin-inline-start:calc(0px - var(--primary-nav--padding))}@media only screen and (max-width:481px){.primary-menu-container{display:block}ul.header-actions{margin-inline-start:0;padding-bottom:120px;justify-content:flex-start}.header-actions .menu-search{margin:0 0 35px;width:100%}.header-actions .menu-search:last-child{margin-bottom:0}.header-actions .search-field{width:100%;border-color:currentcolor;font-size:var(--primary-nav--font-size-mobile)}.header-actions li.social-item{margin-inline-start:calc(0px - var(--primary-nav--padding))}.header-actions .social-item + .social-item{margin-inline-start:0}.header-actions .social-item a{padding:var(--primary-nav--padding)}.header-actions .menu-button{width:100%;margin:0}.header-actions .menu-button a{display:inline-block}.header-actions .social-item + .menu-button{margin-top:35px}.header-actions .menu-search + .menu-button{margin-top:15px}}.widget-area{font-size:min(var(--footer--font-size),18px);color:var(--widgets--color-text,var(--footer--color-text))}.tw-footer-widgets-bg .widget-area{background-color:var(--widgets--color-background,var(--footer--color-background));max-width:none;padding:calc(var(--global--spacing-vertical)*1.333) calc((100% - var(--responsive--alignwide-width))/2)}.tw-footer-widgets-full .widget-area{padding-inline:var(--responsive--alignfull-padding);max-width:none}.tw-footer-monocolor .widget-area{padding-bottom:calc(var(--global--spacing-vertical)*0.666)}.widget-area .widget a{color:var(--widgets--color-link,var(--footer--color-link))}@media (max-width:481px){.widget-area>*{margin-block:var(--global--spacing-vertical)}}@media only screen and (max-width:1023px){.widget-area{column-gap:40px}}:root{--max--alignwide-width:1230px;--global--font-size-base:1.25rem;--global--line-height-body:1.3;--heading--font-weight:600;--heading--font-weight-page-title:600;--heading--font-weight-strong:600;--global--font-size-xxl:4.0625rem;--primary-nav--font-size:1.125rem;--primary-nav--font-weight:600;--primary-nav--letter-spacing:-0.002em;--button--padding-vertical:12px;--button--padding-horizontal:24px;--button--font-size:var(--global--font-size-sm);--button--border-width:1px;--form--border-width:1px;--archive-img-ratio:56.25%;--global--color-primary:#403d39;--global--color-secondary:#403d39;--content--color--link:#5ca731;--header--color-text:#403d39;--header--color-link-hover:#5ca731;--footer--color-text:#260500;--footer--color-link:#260500;--footer--color-link-hover:#260500;--footer--color-link:#403d39;--footer--color-link-hover:#403d39}.single-post{--global--font-size-page-title:3.5rem}.site-logo .custom-logo{max-width:150px;max-height:none!important}:root{--logo--height:50px;--logo--height-mobile:50px}.site-footer a,.widget-area a{text-decoration:none}.site-footer a:hover,.widget-area a:hover,.site-footer a:focus,.widget-area a:focus{text-decoration:underline}.footer-navigation-wrapper li a:hover{text-decoration-style:solid}:root .has-subtle-background-color,:root .has-subtle-background-background-color{background-color:#f4f4f4}:root .has-subtle-color{color:#f4f4f4}.footer-custom a{color:var(--footer--color-link)}.site-footer>.site-info,.single .site-main>article>.entry-footer,.page-header,.pagination,.comments-pagination,.wp-block-image.is-style-twentytwentyone-border img,.wp-block-image.is-style-twentytwentyone-image-frame img,.wp-block-latest-posts.is-style-twentytwentyone-latest-posts-borders li,.wp-block-media-text.is-style-twentytwentyone-border,.wp-block-group.is-style-twentytwentyone-border{border-width:1px}input[type=checkbox]:after{left:7px;top:4px}#page input[type=submit],#page .wp-block-button:not(.is-style-outline) .wp-block-button__link:not(.has-background),.wp-block-file .wp-block-file__button{background-color:#5ca731;border-color:#5ca731;color:#ffffff}#page .wp-block-button.is-style-outline .wp-block-button__link:not(.has-background):not(.has-text-color){border-color:#5ca731;color:#5ca731}#site-navigation .menu-button a,#site-navigation .menu-button a:focus{background-color:#5ca731;color:#ffffff}input[type=submit]:hover,input[type=submit]:focus,input[type=submit]:active,.wp-block-button:not(.is-style-outline) .wp-block-button__link:not(.has-background):hover,.wp-block-button:not(.is-style-outline) .wp-block-button__link:not(.has-background):focus,.wp-block-button:not(.is-style-outline) .wp-block-button__link:not(.has-background):active,.wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color):hover,.wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color):focus,.wp-block-button.is-style-outline .wp-block-button__link:not(.has-text-color):active,.wp-block-file .wp-block-file__button:hover,.wp-block-file .wp-block-file__button:focus,.wp-block-file .wp-block-file__button:active{background-color:#4c4c4c!important;border-color:#4c4c4c!important;color:#ffffff!important}#site-navigation .menu-button a:hover,#site-navigation .menu-button a:focus{opacity:1;background-color:#4c4c4c!important;color:#ffffff!important}
</style>
<script id="jquery-core-js-extra">
var tpgb_load = {"ajaxUrl":"https:\/\/www.ezoic.com\/wp-admin\/admin-ajax.php"};
var smoothAllowedBrowsers = [];
</script>
<script src="//www.ezoic.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/iList-pro//embed/js/embed-form.js?ver=6.4.2" id="ilist-qcld-embed-form-script-js"></script>

<script type="text/javascript" src="https://www.ezoic.com/wp-content/plugins/better-analytics/js/loader.php?ver=1.2.7.js"></script><link rel="https://api.w.org/" href="https://www.ezoic.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.ezoic.com/wp-json/wp/v2/pages/781" /><link rel="alternate" type="application/json+oembed" href="https://www.ezoic.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.ezoic.com%2Fezoic-ads%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.ezoic.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.ezoic.com%2Fezoic-ads%2F&amp;format=xml" />
<script type="text/javascript">
           	var ajaxurl = "https://www.ezoic.com/wp-admin/admin-ajax.php";
            var qc_sld_get_ajax_nonce = "5a463cd6a5";
         </script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-30083227-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-30083227-1');
</script>

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T63X57K');</script>

<script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="CDHdp5FPJ4kj4JS6ZkF16Mu1p3tLVnVF";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("CDHdp5FPJ4kj4JS6ZkF16Mu1p3tLVnVF");
  analytics.page();
  }}();
</script>
<script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="kv6AM0nG0dKRGfzdnCjY6SABwQocalpF";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("kv6AM0nG0dKRGfzdnCjY6SABwQocalpF");
  analytics.page();
  }}();
</script>

<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '557706597717259');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=557706597717259&ev=PageView&noscript=1"
/></noscript>


<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '738815547428118');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=738815547428118&ev=PageView&noscript=1"
/></noscript>


<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nvios');
twq('track','PageView');
</script>


<script async src="https://www.googletagmanager.com/gtag/js?id=G-P4D6CC5N6W"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P4D6CC5N6W');
</script>
<noscript><style>.tw-block-animation{opacity:1;transform:none;clip-path:none;}</style></noscript>
<style id="custom-background-css">
body.custom-background { background-color: #ffffff; }
</style>
<link rel="icon" href="https://www.ezoic.com/wp-content/uploads/2021/09/cropped-ezoicfavicon-32x32.png" sizes="32x32" />
<link rel="icon" href="https://www.ezoic.com/wp-content/uploads/2021/09/cropped-ezoicfavicon-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.ezoic.com/wp-content/uploads/2021/09/cropped-ezoicfavicon-180x180.png" />
<meta name="msapplication-TileImage" content="https://www.ezoic.com/wp-content/uploads/2021/09/cropped-ezoicfavicon-270x270.png" />
<style id="wp-custom-css">
			/** general resuable custom css classes **/

.p-0 {
  padding: 0 !important;
}

.p-20 {
  padding: 20px !important;
}

.b-10 {
  border: 10px solid black !important;
	border-radius: 5px !important;
}

.fw-800 a {
  font-weight: 800 !important;
}

.justify-center {
  justify-content: center !important;
}

.is-content-justification-center {
  justify-content: center !important;
  text-align: center !important;
}

.is-content-justification-right {
  justify-content: right !important;
  text-align: right !important;
}

.is-content-justification-left {
  justify-content: left !important;
  text-align: left !important;
}

@media all and (max-width: 768px) {
.justify-center-mobile {
  justify-content: center !important;
	text-align: center !important;
}
}

a:hover {
text-decoration-style: solid !important;
}

a:focus {
text-decoration-style: solid !important;
}

.letter-spacing-one {
  letter-spacing: 1px !important;
}

.hexagon-btn a{
user-select: none;
    --btn-raise: 1rem;
    clip-path: polygon(var(--btn-raise) 0%, calc(100% - var(--btn-raise)) 0%, 100% 50%, calc(100% - var(--btn-raise)) 100%, var(--btn-raise) 100%, 0 50%);
}

.lh-30 {
  line-height: 30px !important; 
}

.lh-26 {
  line-height: 26px !important;
}

.fw-600 {
  font-weight: 600 !important;
}

.br-6 img {
  border-radius: 6px !important;
}

.br-20 {
  border-radius: 20px !important;
}

.br-6 {
  border-radius: 6px !important;
}

.br-10 {
  border-radius: 10px !important;
}

.light-green-bg {
  background-color: #f6fbf4;
}

.pt-20 {
  padding-top: 20px !important;
}

.pb-20 {
  padding-bottom: 20px !important;
}

.m-20 {
  margin: 20px !important;
}

.mr-0 {
  margin-right: 0px !important;
}

.br-0 {
  border-right: 0 !important;
}

.bl-0 {
  border-left: 0 !important;
}

.vh-100 {
height: 100vh !important;
}

.grey-box-shadow {
    border-color: #cbd6e2;
    border-width: 1px;
    border-radius: 3px !important;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 10%) !important;
}

@media all and (max-width: 1024px) {
.vh-100 {
height: 100% !important;
}
}

@media all and (min-width: 1024px) {
	.mr-lg-0 {
    margin-right: 0 !important;
}
}

.pr-0 {
  padding-right: 0 !important;
}

.pt-30 {
  padding-top: 30px !important;
}

.pb-30 {
  padding-bottom: 30px !important;
}

@media all and (min-width: 768px) {
.lg-mr-5 img {
  margin-right: 5px !important;
}
}


.widget ul li {
  font-weight: 500;
}

.bg-black {
  background-color: black !important;
}

.bg-light-grey {
  background-color: #f7f7f7 !important;
}

.white-text-shadow {
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white !important;
}

.black-text-shadow {
text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none a{
  text-decoration: none !important;
}

.green-text {
  color: #5fa624;
}

@media all and (max-width: 768px) {
.xl-text-mobile {
  font-size: 55px !important;
}
}

@media all and (max-width: 768px) {
.mb-24 {
  font-size: 24px !important;
}
}

@media all and (max-width: 768px) {
.mb-30 {
  font-size: 30px !important;
}
}

.box-shadow {
box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 30%)
}

.grey-border {
	border: 1px solid #e5e5e5 !important;
	border-radius: 6px !important;
}

@media all and (max-width: 768px) {
.mt-0-mb {
  margin-top: 0 !important;
}
}

.mb-0 {
  margin-bottom: 0 !important;
}

figure .mb-0 {
  margin-bottom: 0 !important;
}

@media all and (max-width: 768px) {
.mb-0-mb {
  margin-bottom: 0 !important;
}
}

.h-300 {
  height: 300px !important;
}

.h-360 {
  height: 360px !important;
}


.box-shadow-top {
box-shadow: 0 -11px 19px -22px rgb(0 0 0 / 50%) !important;
}

.box-shadow-bottom {
    box-shadow: 0 10px 15px -19px rgb(0 0 0 / 50%) !important;
}

.wpforms-submit {
  border-radius: 6px !important;
}

.post-password-message {
  margin-top: 90px !important;
}

.post-password-form__submit {
  border-radius: 6px !important;
}

.menu-item-15 a {
	border-radius: 6px !important;
}

.wpforms-confirmation-container-full {
	border: 1px solid #5fa624 !important;
	border-radius: 6px !important;
	background: #f9f9f9 !important;
	padding: 20px !important;
	text-align: center !important;
}

.wpforms-confirmation-container-full p {
font-size: 20px !important;
    font-weight: 400 !important;
}

.gated-btn:hover {
  background: #403d39 !important;
}

.wp-block-button__link:focus {
  outline: none !important;
}

button:focus {
  outline: none !important;
}

.site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) img {
  outline: none !important;
}

input:focus {
  outline: none !important;
	border: 2px solid #5fa624 !important;
}

textarea:focus {
  outline: none !important;
		border: 2px solid #5fa624 !important;
}

.search-form:focus-within .search-field {
    border-bottom: 1px solid #5fa624 !important;
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
}

#search-form-2 {
  border-radius: 3px !important;
}

#search-form-2:focus {
		border: 2px solid #5fa624 !important;
}

.search-submit {
  border: none !important;
  border-radius: 6px !important;
}

.widget a:hover {
  text-decoration-style: solid !important;
	color: #5fa624 !important;
}

#mc_embed_signup_scroll .indicates-required {
  text-align: left !important;
}

.mw-0 img {
  max-width: 100% !important;
}

.ek-link {
  text-decoration: none !important;
}

.ek-link:hover {
  color: #403d39 !important;
}

.grey-hover-a:hover {
  color: #403d39 !important;
}

.fw-500 {
  font-weight: 500 !important;
}

.btn-dark-blue-hover {
    background-color: #264653 !important;
    color: white !important;
    border-radius: 8px !important;
  border: none !important;
}

.green-box-shadow {
box-shadow: 0 0 18px -5px #5fa624 !important;
}

.green-thick-box-shadow {
box-shadow: 0 0 18px -3px #5fa624 !important;
}

.hover-box-grey:hover {
box-shadow: 0 0 18px -5px #403d39 !important;
}

.border-bottom-green-5 {
  border-bottom: 5px solid #5fa624;
}

.green-left-border {
border-left: 5px solid #48a014;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
}
}


/**custom css for tablesorter**/

@media all and (min-width: 768px) {
table.tablesorter thead tr th {
    padding: 20px !important;
}
}

table.tablesorter thead tr th {
    border: 1px solid black !important;
}

.wpforms-field-description {
  font-size: 14px !important;
}

/** custom CSS for nav bar on scroll ***/

/*
.scrolled {z
  box-shadow: 0 2px 12px 0 rgb(36 50 66 / 8%);
	border-bottom: 1px solid #e4e4e4 !important;
}
*/

/**custom CSS for about page image **/

.text-center {
  text-align: center;
}

.exec-image-block img, .leaders-image-block img {
	filter: saturate(0%);
}

.exec-image-block img:hover, .leaders-image-block img:hover {
  filter: saturate(100%);
}

/** custom css for home page **/
#menu-item-335518 .icon-plus {
  display: none;
}

#menu-item-335518 .icon-minus {
  display: none;
}

/*** custom CSS for all pages ****/
hr { 
	border-bottom: 1px solid #eaeaea !important;
}

.has-background-white .site a:focus:not(.wp-block-button__link):not(.wp-block-file__button) {
  background: none;    
	color: #5fa625;

}

/*** custom CSS for terms page ***/

.sp-tab-content p {
  padding-bottom: 1em;
	line-height: 1.5;
}

.sp-tab__lay-default {
  max-width: 1080px !important;
}

.no-border {
  border-style: none !important;
}

.page-id-1122 main {
  padding: 0;
}

.page-id-1122 .entry-content {
  width: 80%;
}


/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class  with JS), and when you move the mouse over it (hover) */
/* .active, .accordion:hover {
  background-color: #ccc;
}
 */

.accordion {
  color: #000000 !important;
  background-color: transparent !important;
  font-size: 20px;
}

.accordion-item {
    border-radius: 4px 4px 4px 4px;
    overflow: hidden;
		margin-bottom: 10px;
    border-color: #d9d9d9;
		border-style: solid;
	  border-width: 0px;
		box-shadow: 0px 12px 18px -6px rgb(34 56 101 / 12%);
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 20px 20px 20px;
  background-color: white;
  display: none;
  overflow: hidden;
  line-height: 1.5;
	font-size: 18px;
}

/*** custom css for content with icon****/

.icon-wrapper img {
  width: 55px;
}

.icon-wrapper .wp-block-media-text__content {
  padding-left: 0 !important;
}

@media screen and (max-width: 1024px) {
	.icon-wrapper .wp-block-media-text__media {
  text-align: center;
}
}

@media screen and (max-width: 1024px) {
	.icon-wrapper .wp-block-image {
  text-align: center;
}
}

/*** general global custom css ***/

.p-40 {
  padding: 40px !important;
}

.grey-bg {
  background-color: #f9f9f9 !important;
}

.success-stories img {
	filter: saturate(0%);
}

.icon-55 {
  width: 55px !important;
}


.flags {
background-image: url('https://ezoic.com/wp-content/uploads/2021/07/Untitled-1-e1626799469909.jpg');
background-repeat: no-repeat;
background-position: right;
padding-left: ;
}

.flagsde {
background-image: url('https://ezoic.com/wp-content/uploads/2021/07/de-fla-e1626799890684.jpg');
background-repeat: no-repeat;
background-position: center;
padding-left: ;
}

.flagsfr {
background-image: url('https://ezoic.com/wp-content/uploads/2021/07/frflg-e1626799913998.jpg');
background-repeat: no-repeat;
background-position: center;
padding-left: ;
}

.flagses {
background-image: url('https://ezoic.com/wp-content/uploads/2021/07/esglaf-e1626799903528.jpg');
background-repeat: no-repeat;
background-position: center;
padding-left: ;
}

.flagsit {
background-image: url('https://ezoic.com/wp-content/uploads/2021/08/italianflag-1.jpg');
background-repeat: no-repeat;
background-position: center;
padding-left: ;
}


/**** custom css for certified seamless page to hide featured image and add custom banner ****/

.page-id-1739 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-1739 .site-main {
  padding-top: 0 !important;
}

.page-id-1739 .entry-header {
  display: none;
}

.page-id-1739 .entry-content {
  margin-top: 0 !important; 
}

.page-id-1739 .site-content {
  padding-top: 0 !important; 
}


/** custom css for press page ***/

.page-id-335621 .ek-link {
  text-decoration: none;
}

.page-id-335621 .ek-link:hover {
  text-decoration: underline;
}

/**** custom css for press page to hide featured image and add custom banner ****/

.page-id-335621 .site-header {
  padding-bottom: 36px !important;
}

.page-id-335621 .site-main {
  padding-top: 0 !important; 
}

.page-id-335621 .entry-header {
  display: none;
}

.page-id-335621 .entry-content {
  margin-top: 0 !important; 
}

.page-id-335621 .site-content {
  padding-top: 0 !important; 
}



/**** custom css for customer week to hide featured image and add custom banner ****/

.page-id-338218 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-338218 .site-main {
  padding-top: 0 !important;
}

.page-id-338218 .entry-header {
  display: none;
}

.page-id-338218 .entry-content {
  margin-top: 0 !important; 
}

.page-id-338218 .site-content {
  padding-top: 0 !important; 
}

/*** custom css for cards ***/
/* Slideshow container */
.carousel-wrapper {
  overflow: hidden;
}
.carousel-wrapper * {
  box-sizing: border-box;
}
.carousel {
  transform-style: preserve-3d;
}
.carousel_slide {
  opacity: 0;
  position: absolute;
  top:0;
  margin: auto;
  z-index: 100;
  transition: transform .5s, opacity .5s, z-index .5s;
  text-align: center;
}


.carousel_slide.initial,
.carousel_slide.active {
  opacity: 1;
  position: relative;
  z-index: 900;
}
.carousel_slide.prev,
.carousel_slide.next {
  z-index: 800;
}
.carousel_slide.prev {
  transform: translateX(-100%); /* Move 'prev' item to the left */
}
.carousel__photo.next {
  transform: translateX(100%); /* Move 'next' item to the right */
}

.carousel__button--prev,
.carousel__button--next {
  position: absolute;
  top:50%;
  width: 3rem;
  height: 3rem;
  background-color: #FFF;
  transform: translateY(-50%);
  border-radius: 50%;
  cursor: pointer; 
  z-index: 1001; /* Sit on top of everything */
}

.carousel__button--prev:hover,
.carousel__button--next:hover {
  background: #cbd4db;
}

.carousel__button--prev:hover::after,
.carousel__button--next:hover::after {
  border-right: 2px solid black;
  border-bottom: 2px solid black;
}


.carousel__button--prev {
  left:0;
}
.carousel__button--next {
  right:0;
}
.carousel__button--prev::after,
.carousel__button--next::after {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  left: 54%;
  border-right: 2px solid #5fa625;
  border-bottom: 2px solid #5fa625;
  transform: translate(-50%, -50%) rotate(135deg);
}
.carousel__button--next::after {
  left: 47%;
  transform: translate(-50%, -50%) rotate(-45deg);
}

/** carousel media queries**/ 
@media only screen and (max-width: 959px) {
	.carousel-wrapper * {
		box-sizing: border-box;
		text-align: center;
	}
}

.carousel__photo {
  border-radius: 50%;
  object-fit: cover;
}


.carousel_info p {
  font-weight: bold;
}


.carousel_info h2 {
  font-size: 18px;
  font-style: italic;
}

.carousel_info a {
  font-size: 18px;
  font-style: italic;
  text-decoration: underline;
  color: #5fa625 !important;
  font-weight: bold;
}

@media only screen and (min-width: 960px) {
  .carousel_info p {
  font-size: 31px;
  }
}

@media only screen and (max-width: 959px) {
	.carousel__photo {
    width: 200px !important;
    height: 200px !important;
  }
}

@media only screen and (min-width: 960px) {
	.carousel__photo {
    width: 300px !important;
    height: 300px !important;
  }
}


#mailchimp {
	background: #f8f8f8;
	color: #3D6392;
	padding: 20px 15px;
}
	#mailchimp input {
		 border: medium none;
    color: gray;
    font-family: times new roman;
    font-size: 16px;
    font-style: italic;
    margin-bottom: 10px;
    padding: 8px 10px;
    width: 300px;
		border-radius: 20px;
		-moz-border-radius: 20px;
		-webkit-border-radius: 20px;
	}
		#mailchimp input.email { background: #fff }
		#mailchimp input.name { background: #fff}
		#mailchimp input[type="submit"] {
			background: #115B87;
			color: #fff;
			cursor: pointer;
			font-size: 15px;
			width: 35%;
			padding: 8px 0;

		}
			#mailchimp input[type="submit"]:hover { color: #F2C94C }

/*** wp forms custom ccc ***/
.wpforms-field-container input, select {
  border-radius: 3px;
  border: 1px solid #403d39;
}
.wpforms-field-container input {
  margin: 0;
}

.wpforms-submit-container {
  text-align: ;
}

.wpform-btn, .wpforms-submit {
  width: 230px;
	background-color: #5fa624 !important;
  color: white !important;
}

.wpform-btn:hover, .wpforms-submit:hover {
	border: none;
  color: white;
    background-color: #4c4c4c!important;
    border-color: #4c4c4c!important;
}

.wpforms-submit-container {
  text-align: center;
}

.wpforms-field-rating-item svg {
  color: #5fa624 !important;
}

.wpforms-field-rating-items {
  margin-top: 10px !important;
}

/*** customer week ****/

.page-id-338218 td {
  border: none !important;
}

.page-id-338218 .wpforms-container {
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    padding: 2rem;
}

/**custom levels page ***/
.page-id-339498 .grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 10px;
  justify-content: center;
}
.page-id-339498 .grid-item {
  background-color: green;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

.page-id-339498 .grid-row-1 {
  padding: 20px;
 border: 1px solid white;
  text-align: center;
  font-size: 30px;
  color: #88bc72;
  background-color: black;
}

.page-id-339498 .white-font {
  color: white;
}

.page-id-339498 .grey-bg {
  background-color: #3b3b3b !important;
}

.page-id-339498 .white-bg {
  background-color: white !important;
}

.page-id-339498 .light-green-bg {
  background-color: #d4e7cd;
}

.hurrytimer-headline {
  font-weight: bold;
}

.hurrytimer-campaign {
  max-width: none !important;
}


.page-id-338218 .wp-block-social-link-anchor svg {
color: white !important;
}

/**social media contest***/
.page-id-339935 .entry-title {
  max-width: none;
}

/*** customer week custom cSS*/

@media screen and (min-width: 1024px) {
	.customer-week-header {
  font-size: 144px !important;
}
}

.page-id-338218 .customer-form-btn {
  padding: 10px 15px !important;
}

.page-id-338218 .wpform-btn {
  padding: 10px 15px !important;
}

.page-id-338218 .wpforms-field-required {
background-color: #fff !important;
    box-sizing: border-box;
    /* border-radius: 2px; */
    /* color: #333; */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    display: block;
    float: none;
    font-size: 16px !important;
    border: 1px solid #ccc !important;
    padding: 6px 10px !important;
    height: 38px !important;
    width: 100% !important;
    line-height: 1.3;
}

/*** vip  offer custom css**/

.page-id-340111 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-340111 .site-main {
  padding-top: 0 !important;
}

.page-id-340111 .entry-header {
  display: none;
}

.page-id-340111 .entry-content {
  margin-top: 0 !important; 
}

.page-id-340111 .site-content {
  padding-top: 0 !important; 
}

.wp-form-input-style input {
background-color: #fff !important;
    box-sizing: border-box;
    /* border-radius: 2px; */
    /* color: #333; */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    display: block;
    float: none;
    font-size: 16px !important;
    border: 1px solid #ccc !important;
    padding: 6px 10px !important;
    height: 38px !important;
    width: 100% !important;
    line-height: 1.3;
}

.pt-0 {
padding-top: 0 !important;
}

.vip-offer-pullquote cite {
  font-size: 24px !important; 
	padding-top: 20px !important;
}

/*** align item center middle mobile**/


@media screen and (max-width: 769px) {
	.mb-align-item-center {
  align-items: center !important;
	justify-content: center !important;
}
}

@media screen and (max-width: 769px) {
	#intelligent-technology-for-exceptional-content {
  font-size: 40px !important;
}
}


/** customer week winner **/


.page-id-340881 .site-header {
  padding-bottom: 36px !important;
}
.page-id-340881 .site-main {
  padding-top: 0 !important;
}

.page-id-340881 .entry-header {
  display: none;
}
.page-id-340881 .entry-content {
  margin-top: 0 !important; 
}
.page-id-340881 .site-content {
  padding-top: 0 !important; 
}

/** epmv calculator custom css **/
.epmv-inline {  
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.epmv-inline label {
  margin: 5px 10px 5px 0;
}

.epmv-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.input-section-ez {
  display: flex;
  flex-direction: column;
  text-align: center; 
}

.page-id-341314 .site-header {
  padding-bottom: 36px !important;
}

.page-id-341314 .site-main {
  padding-top: 0 !important;
}

.page-id-341314 .entry-header {
  display: none;
}

.page-id-341314 .entry-content {
  margin-top: 0 !important; 
}

.page-id-341314 .site-content {
  padding-top: 0 !important; 
}


/*** custom css to remove ad placeholders on footer ***/
#ezoic-pub-ad-placeholder-107, #ezoic-pub-ad-placeholder-108,
#ezoic-pub-ad-placeholder-109,
#ezoic-pub-ad-placeholder-110,
#ezoic-pub-ad-placeholder-111,
#ezoic-pub-ad-placeholder-112,
#ezoic-pub-ad-placeholder-118,
#ezoic-pub-ad-placeholder-120,
#ezoic-pub-ad-placeholder-121,
#ezoic-pub-ad-placeholder-123,
#ezoic-pub-ad-placeholder-167
 {
  display: none !important;
}

/*** custom css for Access Now Wheel - Gamification ***/
@media all and (max-width: 600px) {
   div.wof-wheel .wof-left {
      order: 0 !important;
   }
}
@media all and (min-width:770px){ .wof-wheel-standalone div.wof-right{padding-left:80px;} }

/*** custom css for ezoic wordpress plugin page carousel ***/

.page-id-341648 .carousel-wrapper {
  max-width: 1000px !important;
}

.page-id-341648 .carousel_slide {
  padding: 100px;
}

.page-id-341648 .carousel-block {
  height: 800px;
}


.page-id-341648 .carousel__button--next {
  right: 10%;
}



.page-id-341648 .carousel__button--prev {
  left: 10%;
}

/*** custom alignment for mobile css for about page **/


@media all and (max-width: 768px) {
.align-center-mobile {
    margin-left: auto !important;
    margin-right: auto !important;
    float: none !important;
}
}

@media all and (max-width: 1020px) {
	.mob-center {
flex-basis: 100% !important;
}
}

/***** custom css for new reviews page ***/

.page-id-343129 .has-ek-indent {
  font-weight: bold !important;
}

.page-id-335203 .site-header {
  padding-bottom: 20px !important;
} 

.page-id-343129 .site-header {
  padding-bottom: 20px !important;
}

.page-id-343977 .site-header {
  padding-bottom: 20px !important;
}


.page-id-343970 .site-header {
  padding-bottom: 20px !important;
}


.page-id-344072 .site-header {
  padding-bottom: 20px !important;
}

.page-id-344068 .site-header {
  padding-bottom: 20px !important;
}

.page-id-344051 .site-header {
  padding-bottom: 20px !important;
}


.ez-green {
  color: #5fa625 !important;
}

@media all and (min-width: 1200px) {
	.fl-50 {
		float: left;
    left: 50%;
  }
}

@media all and (min-width: 1200px) {
	.fr-50 {
		float: right;
    right: 50%;
  }
}


/*** custom CSS for pub profiles **/


/**/
.page-id-339498 .publisher-slider {
  top: 50%;
  left: 50%;
  width: 1250px;
  height: 300px;
max-width: none !important;
    transform: translate(0%, 0%);
	box-shadow: none;
}


.page-id-339498 .publisher-profile-wrapper {
  overflow: hidden;
  position: relative;
  width: 1250px;
  height: 300px;
  z-index: 1;
}

.page-id-339498 .publisher-slides {
  display: flex;
  position: relative;
  top: 0;
  left: -400px;
  width: max-content;
}

.page-id-339498 .publisher-slides.shifting {
  transition: left .2s ease-out;
}

.page-id-339498 .publisher-slide {
  width: 390px;
  height: 300px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s;
  position: relative;
  border-radius: 10px;
margin-right: 10px;
border: 1px solid #eaeaea;

}

.page-id-339498 .pub-card-info img{
  width: 120px;
  height: 120px;
}

.page-id-339498 .publisher-slide {
  text-align: center;
  align-items: center;
}

.page-id-339498 .prev {
  left: -60px;
}

.page-id-339498 .next {
  right: -50px;
}

.page-id-339498 .profile-link {
  padding: 20px;
}

.pt-10 {
  padding-top: 10px;
}

.heading-title {
    font-weight: 500;
    color: #313131;
  margin-top: 5px;
    margin-bottom: 5px;
  text-align: center;
  font-size: 25px;
    line-height: 35px;
    letter-spacing: 0;
}

.sub-heading {
text-align: center;
}

.heading-sub-title {
    margin-top: 5px;
    margin-bottom: 5px;
}

.seprator {
  width: 20%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-radius: 15px;
  margin: 0 auto;
}

.title-sep {
      border-color: #5fa624;
height: 1px;
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-width: 10%;
    border: 1px solid #5fa624;
  background: #5fa624;
}

.sep-dot {
color: #403d39;
      font-size: 50px;
    line-height: 1px;
    display: table;
    position: relative;
    top: -14px;
    padding: 0 4px;
}


/** custom css for pub profiles **/

.page-id-343912 .publisher-slider {
  top: 50%;
  left: 50%;
  width: 1250px;
  height: 300px;
max-width: none !important;
    transform: translate(0%, 0%);
	box-shadow: none;
}


.page-id-343912 .publisher-profile-wrapper {
  overflow: hidden;
  position: relative;
  width: 1250px;
  height: 300px;
  z-index: 1;
}

.page-id-343912 .publisher-slides {
  display: flex;
  position: relative;
  top: 0;
  left: -400px;
  width: max-content;
}

.page-id-343912 .publisher-slides.shifting {
  transition: left .2s ease-out;
}

.page-id-343912 .publisher-slide {
  width: 390px;
  height: 300px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s;
  position: relative;
  border-radius: 10px;
margin-right: 10px;
border: 1px solid #eaeaea;

}

.page-id-343912 .pub-card-info img{
  width: 120px;
  height: 120px;
filter: saturate(0%);
}

.page-id-343912 .publisher-slide {
  text-align: center;
  align-items: center;
}

.page-id-343912 .prev {
  left: -60px;
}

.page-id-343912 .next {
  right: -50px;
}

.page-id-343912 .profile-link {
  padding: 20px;
}

.pub-border {
	border: 1px solid #eaeaea;
	border-radius: 10px;
  box-shadow: none !important;
}

/** main reviews page custom css **/
.main-reviews-carousel-container {
 box-shadow: 3px 3px 10px rgb(0 0 0 / 20%);
}

.slick-arrow {
  background: none !important;
}

.slick-arrow:before {
  font-size: 50px !important;
}
 
.slick-prev {
  left: -55px !important;
}


.m-0 {
  margin: 0 !important;
}

@media all and (max-width: 1024px) {
	.mw-0 {
		max-width: none !important;
		text-align: center ! 	important;
	}
}



.slick-list {
  background-color: white;
}

@media all and (max-width: 1024px) {
	.right-col-card {
		padding: 0 !important;
  }
}


@media all and (max-width: 825px) {
	.slick-arrow {
		display: none !important;
  }
}

/** publisher profiles page custom css */

.page-id-343912 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-343912 .site-main {
  padding-top: 0 !important;
}

.page-id-343912 .entry-header {
  display: none;
}

.page-id-343912 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343912 .site-content {
  padding-top: 0 !important; 
}


.ezoic-publishers-carousel-border {
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin-right: 10px;
  padding: 40px !important;
}

.pt-10 {
  padding-top: 10px !important;
}

/**
.bg-br-border {
padding: 0 0.31em 0.31em 0 !important;
    border-radius: 0 0.44em !important;
    background-color: #a7a7a7 !important;
    border: 0.01em solid #ccc !important;
}
**/

.bg-br-border {
    border-radius: 0 0.44em !important;
    border: 0.01em solid #a7a7a7 !important;
    border-width: 0.01em 0.4em 0.4em 0.01em !important;
}




.page-id-346454 .site-header {
  padding-bottom: 36px !important;
}
.page-id-346454 .site-main {
  padding-top: 0 !important;
}

.page-id-346454 .entry-header {
  display: none;
}
.page-id-346454 .entry-content {
  margin-top: 0 !important; 
}
.page-id-346454 .site-content {
  padding-top: 0 !important; 
}


/** vip publishers page ***/

.page-id-344586 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-344586 .site-main {
  padding-top: 0 !important;
}

.page-id-344586 .entry-header {
  display: none;
}

.page-id-344586 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344586 .site-content {
  padding-top: 0 !important; 
}

/** level 4 publishers page ***/

.page-id-344629 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-344629 .site-main {
  padding-top: 0 !important;
}

.page-id-344629 .entry-header {
  display: none;
}

.page-id-344629 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344629 .site-content {
  padding-top: 0 !important; 
}


/** level 3 publishers page ***/

.page-id-344624 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-344624 .site-main {
  padding-top: 0 !important;
}

.page-id-344624 .entry-header {
  display: none;
}

.page-id-344624 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344624 .site-content {
  padding-top: 0 !important; 
}

/** level 2 publishers page ***/

.page-id-344613 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-344613 .site-main {
  padding-top: 0 !important;
}

.page-id-344613 .entry-header {
  display: none;
}

.page-id-344613 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344613 .site-content {
  padding-top: 0 !important; 
}


/** level 1 publishers page ***/

.page-id-344606 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-344606 .site-main {
  padding-top: 0 !important;
}

.page-id-344606 .entry-header {
  display: none;
}

.page-id-344606 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344606 .site-content {
  padding-top: 0 !important; 
}


/** access now publishers page ***/

.page-id-344600 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-344600 .site-main {
  padding-top: 0 !important;
}

.page-id-344600 .entry-header {
  display: none;
}

.page-id-344600 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344600 .site-content {
  padding-top: 0 !important; 
}

/*nye custom css*/

.h-350 {
  height: 350px !important;
}

/*niche custom css */
.border-black-right {
  border-right: 1px solid black;
}

/* pub nominee custom css */
.green-underline {
  color: #5fa625 !important;
  text-decoration: underline !important;
}

/*css for covers */
.bg-white {
  background-color: white;
}

.wp-block-cover {
  background-color: white;
}

/** custom css for us sales careers **/
.page-id-349261 .site-header {
  padding-bottom: 36px !important;
}

.page-id-349261 .site-main {
  padding-top: 0 !important; 
}

.page-id-349261 .entry-header {
  display: none !important;
}

.page-id-349261 .entry-content {
  margin-top: 0 !important; 
}

.page-id-349261 .site-content {
  padding-top: 0 !important; 
}

.page-id-349261 .slick-list {
  background: transparent !important;
}

.page-id-349261 .slick-next {
  top: 30% !important;
}

.page-id-349261 .slick-prev {
  top: 30% !important;
}

.page-id-349261 .slick-next:before {
   content: "›" !important;
	font-family: inherit !important;
}

.page-id-349261 .slick-prev:before {
    content: "‹" !important;
	font-family: inherit !important;
}

.page-id-349261 .slider {
    background: white;
    height: 250px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 1140px;
}

.page-id-349261 .slider::before, .slider::after {
    background: linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    content: "";
    height: 100%;
    position: absolute;
    width: 100px;
    z-index: 2;
}

.page-id-349261 .slider::after {
    right: 0;
    top: 0;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
}

.page-id-349261 .slider::before {
    left: 0;
    top: 0;
}

.page-id-349261 .slider .slide-track {
    animation: scroll 20s linear infinite;
    display: flex;
    width: calc(450px * 18);

}

.page-id-349261 .slider .slide-track:hover {
    animation-play-state: paused;
} 

.page-id-349261 .slider .slide {
    height: 250px;
    width: 450px;
	  margin: 5px;
}

@media all and (min-width: 768px) {
.page-id-349261 .slider {
  max-width: 1200px !important;
}

}

.page-id-349261 .slide:nth-child(1), .slide:nth-child(10) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/office-building-1024x683.jpg"); no-repeat fixed center;
  background-size: cover;
}

.page-id-349261 .slide:nth-child(2), .slide:nth-child(11) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/office-cafe-scaled.jpg") no-repeat fixed center;
  background-size: cover;
  }

.page-id-349261 .slide:nth-child(3), .slide:nth-child(12) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/game-room-scaled.jpg") no-repeat fixed center;
  background-size: cover;
}

.page-id-349261 .slide:nth-child(4), .slide:nth-child(13) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/office-desks-scaled.jpg") no-repeat fixed center;
    background-size: cover;
}

.page-id-349261 .slide:nth-child(5), .slide:nth-child(14) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/office-group-scaled.jpg") no-repeat fixed center;
    background-size: cover;
}

.page-id-349261 .slide:nth-child(6), .slide:nth-child(15) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/pubtelligence-qa.jpg") no-repeat fixed center;
    background-size: cover;
}

.page-id-349261 .slide:nth-child(7), .slide:nth-child(16) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/pubtelligence-conference.png") no-repeat fixed center;
    background-size: cover;
}

.page-id-349261 .slide:nth-child(8), .slide:nth-child(17) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/christmas-party-scaled.jpg") no-repeat fixed center;
    background-size: cover;
}

.page-id-349261 .slide:nth-child(9), .slide:nth-child(18) {
    background: url("https://www.ezoic.com/wp-content/uploads/2022/04/ezoic-christmasparty.jpg") no-repeat fixed center;
    background-size: cover;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px * 9));
    }
}


.perks-box {
display: flex;
flex-wrap: wrap;
max-width: 1200px !important;
	justify-content: center !important;
}

.perks-card-container {
  position: relative;
  width: 300px;
  height: 325px;
  z-index: 1;
  float: left;
  flex: 0 0 30%;
  margin: 5px;
}

.front-perk-icon {
  width: 100px;
  height: 100px;
}

#perks-card {
  border-radius: 15px;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all .8s linear;
    box-shadow: 3px 3px 6px 3px rgb(0 0 0 / 10%);
}

#perks-card:hover {
    transform: rotateY(180deg);
    box-shadow: -5px 5px 15px rgba(0,0,0, .3);
  }


.face {
  position: absolute;
  width: 100%;
  height: 100%;
   -webkit-perspective: 0;
 -webkit-backface-visibility: hidden !important;
    -webkit-transform: translate3d(0,0,0);
    visibility:visible;
    backface-visibility: hidden;
	  border-radius: 15px !important;
}

.front-card-perk {
    margin: auto;
    text-align: center;
		display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	background-color: white !important;
}

.back-card-perk {
  display: block;
  transform: rotateY(180deg);
  box-sizing: border-box;
  padding: 25px;
  text-align: center;
	overflow: auto;
		background-color: white !important;
}

.back-header {
  font-size: 26px !important;
  padding-top: 15px !important;
  letter-spacing: 1px !important;
	color: #5fa624 !important;
	font-weight: bold;
}

.perk-description {
	font-size: 16px !important;
	text-transform: none !important;
	text-align: center !important;
	padding-top: 20px !important;
	color: #403d39 !important;
	line-height: 1.5;
font-style: normal !important;
font-weight: 300 !important;
}

.front-perk-header {
	font-size: 30px !important;
  padding-top: 30px !important;
	letter-spacing: 1px !important;
	color: #403d39 !important;
}

@media all and (max-width: 768px) {
	.perks-card-container {
    flex: 0 0 100% !important;
}
}

@media all and (max-width: 768px) {
	.mobile-f24 {
    font-size: 24px !important;
}
}

.life-at-ezoic-slick .slick-list {
  padding-bottom: 40px !important;
}

.we-love-our-people-img img {
  filter: saturate(0.7);
}



.we-love-our-people-img img:hover {
  filter: saturate(1);
}

@media all and (min-width: 768px) {
	.our-people-container .slick-dots {
    display: none !important;
}
}


/** meet hiring team custom css **/
.hiring-team-section {
display: flex;
flex-wrap: wrap;
max-width: 1200px !important;
  margin: auto;
	justify-content: center !important;
}

.hiring-team-container {
  position: relative;
  width: 500px;
  height: 350px;
  z-index: 1;
  float: left;
  perspective: 1000px;
	flex: 0 0 22.5%;
  margin: 10px 10px 80px 10px;
}

@media all and (max-width: 768px) {
.hiring-team-container {
	flex: 0 0 80%;
}
}

.hiring-team-headshot {
  width: 100px;
  height: 100px;
}

#hiring-team-card {
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all .8s linear;
  box-shadow: 5px 5px 15px rgba(0,0,0, .3);
}

#hiring-team-card:hover {
    transform: rotateY(180deg);
    box-shadow: -5px 5px 15px rgba(0,0,0, .3);
  }


.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
	filter: saturate(0%);
	    -webkit-perspective: 0;
    -webkit-backface-visibility: hidden !important;
    -webkit-transform: translate3d(0,0,0);
    visibility:visible;
}

.card-face:hover {
	filter: saturate(100%);
}

.front-card-hiring-member {
    margin: auto;
    bottom: 0; 
    text-align: center;
}

.back-card-hiring-member {
  display: block;
  transform: rotateY(180deg);
  box-sizing: border-box;
  padding: 30px;
  text-align: center;
  opacity: .7;
  overflow: auto;
	background-color: #fcfcfc !important;
}

.member-bio-question {
  font-size: 14px;
  text-align: left;
  margin: 0;
}

.green-bottom-border:after {
    content: '';
    display: block;
    position: absolute;
    width: 90px;
    height: 5px;
    position: static;
    margin-top: 20px;
    background: linear-gradient(90deg,#5fa624 100%,#5fa624 0);
}


  .member-bio-answer {
    font-size: 14px;
    text-transform: none;
    text-align: left;
    margin-top: 14px;
    margin-bottom: 14px;
  }

  .front-member-header {
    font-size: 30px;
  }

.card-face {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.card-kelsey {
    background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/kelsey-sales.png");
}

.card-ben {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/ben-sales-e1645604274479.png")
}

.card-ryan {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/ryan-sales.png")
}

.card-oscar {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/oscar-sales.png")
}

.card-josh {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/josh-sales-e1645604421147.png")
}

.card-hannah {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/hannah-sales.png")
}

.card-emily {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/emily-csr-e1645604719257.png")
}

.card-rob {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/IMG_3213-scaled-e1645828042358.jpg")
}

.card-jeff {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/09/jeff-bernard-headshot.png")
}

.card-piper {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/02/piper-director-sales-e1645605066340.jpg")
}

.card-mariah {
  background-image: url("https://www.ezoic.com/wp-content/uploads/2022/09/mariah-tabor-headshot.png")
}

.sales-leadership img {
    filter: saturate(0%);
}
.sales-leadership img:hover {
    filter: saturate(100%);
}

.hiring-rep-name {
	padding-top: 20px !important;
	font-size: 18px !important;
	font-weight: bold !important;
	font-family: Source Sans Pro;
	text-align: center;
}

.hiring-rep-title {
    font-size: 14px !important;
    color: #5fa625 !important;
    font-weight: bold !important;
	padding-top: 4px !important;
	text-align: center;
}

.ezoic-dogs-container {
  text-align: center;
	max-width: none !important;
	padding-bottom: 90px !important;
}

.ezoic-dogs-container ul{
  margin:0;
  padding:0;
  width: 100%;
}

 .ezoic-dogs-container li{
  text-align:center;
  display:inline-block;
  list-style:none;
  position:relative;
  border:solid 12px #fff;
  background:#fff;
  box-shadow:0 0 15px 0px #555;
  transition:all 1s ease;
  -o-transition:all 1s ease;
  -moz-transition:all 1s ease;
  -webkit-transition:all 1s ease;
  top:50px;
}


.ezoic-dogs-container li:hover{
  top:0px;
  opacity:0.5;
}

.ezoic-dogs-container li:nth-child(1){
    transform:rotate(10deg);
}

.ezoic-dogs-container li:nth-child(2){
    transform:rotate(0deg);
}

.ezoic-dogs-container li:nth-child(3){
    transform:rotate(-10deg);
}

.ezoic-dogs-container li:nth-child(4){
    transform:rotate(20deg);
}


@media all and (min-width: 768px) {
.team-bios-container .slick-dots {
	flex: 0 0 80%;
}
}


@media all and (max-width: 768px) {
.green-bottom-border:after {
	display: none !important;
}
}

/*** new reviews page ***/
.blockquote-container {
	quotes: "“" "”";
	margin: 0;
	padding: 10px 2rem;
	color: #0d0c22;
	letter-spacing: -0.025em;
	line-height: 1.4;
}

.blockquote-text {
  text-align: left;
	margin-bottom: 0 !important;
}

.blockquote-text p {
    font-size: 16px !important;
	    font-weight: 400 !important;
	    position: relative;
    margin: 0 0 1rem;
    padding: 2em;
    -webkit-transition: -webkit-box-shadow 0.2s ease-in-out;
    transition: -webkit-box-shadow 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;
    border-radius: 0.5rem;
    background-color: #f3f4f4;
    text-align: left;
    font-weight: 400;
}

.blockquote-text p:before {
		top: 0.25em !important;
    left: 0.25em !important;
    font-size: 3em;
    position: absolute;
    top: -0.25em;
    left: -0.5em;
    color: #5fa624;
    font-size: 3em;
    font-weight: 600;
    line-height: 1;
}

.blockquote-text p:after {
content: '';
    position: absolute;
    bottom: -1rem;
    left: 2rem;
    width: 4rem;
    height: 1rem;
    background-color: inherit;
    -webkit-mask: url("https://www.ezoic.com/wp-content/uploads/2022/04/blockquote-beak.png") center top/contain no-repeat;
}

.blockquote-text cite,  {
		padding: 0.5rem 2rem;
    margin-top: 20px;
	  color: #403d39;
font-size: 18px !important;
font-weight: 600 !important;
}

.blockquote-text-white cite {
	  color: #403d39;
font-size: 18px !important;
}

.blockquote-text-white cite a {
 text-decoration: none !important;
font-weight: 600 !important;
}

.blockquote-text-white cite mark {
 text-decoration: none !important;
font-weight: 600 !important;
}


.blockquote-text-white cite em{
 text-decoration: none !important;
font-weight: 700 !important;
}

.vip-featured-review-quote {
  line-height: 45px; 
  font-weight: 500;
}

.pub-profile-link {
  padding: 0.5rem 2rem;
    font-size: 16px !important;
    font-weight: 600 !important;
}

.blockquote-img-full figure {
  width: 100% !important;
}

.blockquote-img-full img {
  width: 100% !important;
}

.blockquote-img-full {
	margin-bottom: 0 !important;
  border-radius: 0.5rem 0.5rem 0rem 0rem !important;
}


.blockquote-text-white {
	margin-top: 0 !important;
  margin-bottom: 0 !important;
	text-align: left !important;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 10%);
    border-radius: 0.5rem;
    font-weight: 300 !important;
    font-size: 24px !important;
    padding: 3em !important;
}


.blockquote-container {
  padding: 0;
}


.blockquote-text-white p:before {
content: '“';
    position: absolute;
    top: 1em;
    left: 0.6em;
    color: #5fa624;
    font-size: 2em;
    font-weight: 600;
    /* line-height: 1; */
    font-style: none;
    font-family: initial;
}


.white-sm-blockquote:before {
content: '“';
    position: absolute;
    top: 0.5em;
    left: 0.1em;
    color: #5fa624;
    font-size: 2em;
    font-weight: 600;
    /* line-height: 1; */
    font-style: none;
    font-family: initial;
}

.sm-blockquote-container {
  position: relative;
}


.sm-blockquote-container .white-sm-blockquote {
    border-radius: 0.5rem;
    font-weight: 300 !important;
    font-size: 24px !important;
    padding: 2em !important;
}

.white-box-quote {
box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 10%);
    border-radius: 0.5rem;
    font-weight: 300 !important;
    font-size: 24px !important;
    padding: 2em !important;
}

.testimonial-style-1 .post-content-image {
  padding-top: 20px !important;
}

.testi-post-designation a {
  text-decoration: none !important;
}

.testi-post-designation a:hover {
  color: #403d39 !important;
}

#ezoic-pub-ad-placeholder-115 {
  display: none !important;
}

#ezoic-pub-ad-placeholder-114 {
  display: none !important;
}

#ezoic-pub-ad-placeholder-105 {
  display: none !important;
}

#ezoic-pub-ad-placeholder-113 {
  display: none !important;
}

#ezoic-pub-ad-placeholder-116 {
  display: none !important;
}

#ezoic-pub-ad-placeholder-119 {
  display: none !important;
}

.featured-reviews-border {
    width: 244px;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding: 40px;
    margin: 10px;
    height: 340px;
    background-color: white;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
}

.no-underline a {
  text-decoration: none !important;
}

.hover-white a:hover {
color: white !important;
}

.hover-grey a:hover {
color: #403d39 !important;
}

.hover-grey a mark:hover {
color: #403d39 !important;
}

.hover-green a:hover {
color: #5fa624 !important;
}

.grey-box-shadow {
    border-color: #cbd6e2;
    border-width: 1px;
    border-radius: 3px !important;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 10%) !important;
}

.featured-reviews .slick-track {
  background-color: transparent !important;
}

.featured-reviews .slick-list {
  background-color: transparent !important;
}


.featured-reviews .slick-arrow:before {
color: white !important;
}

.featured-review-img figure {
    border: 6px solid #5fa624 !important;
    border-radius: 50% !important;
}

/*** new ALL Reviews page ***/

.page-id-353355 .site-header {
  padding-bottom: 36px !important;
}

.page-id-353355 .site-main {
  padding-top: 0 !important; 
}

.page-id-353355 .entry-header {
  display: none !important;
}
.page-id-353355 .entry-content {
  margin-top: 0 !important; 
}

.page-id-353355 .site-content {
  padding-top: 0 !important; 
}



/*** facet wp styles ***/

.fs-label {
	padding: 16px 48px 16px 20px !important;
  font-size: 1rem !important;
	font-weight: 500 !important;
}

.fwpl-result {
box-shadow: 0 1px 5px rgb(45 62 80 / 12%) !important;
    border-radius: 3px !important;
}

.facetwp-counts {
  text-align: right !important;
}

.facetwp-page {
  color: #403d39 !important;
}

.facetwp-pager {
  text-align: center !important;
  margin-top: 20px !important;
}

.el-hrhttj a {
padding-top: 12px !important;
    padding-bottom: 12px !important;
    padding-right: 24px !important;
    padding-left: 24px !important;
    background-color: #403d39 !important;
    border-radius: 6px !important;
    font-weight: 700 !important;
    color: white !important;
}

.el-hrhttj a:hover {
  background-color: #5fa624 !important;
}

/** facet css for all reviews page **/

.el-4wxtvj{
  text-align: center !important;
  padding-bottom: 30px !important;
}

.el-4wxtvj button {
  border-radius: 6px !important;
}

.el-onei5m {
  font-weight: 400 !important;
}

/*** new ALL publishers page ***/

.page-id-355045 .site-header {
  padding-bottom: 36px !important;
}

.page-id-355045 .site-main {
  padding-top: 0 !important; 
}

.page-id-355045 .entry-header {
  display: none !important;
}
.page-id-355045 .entry-content {
  margin-top: 0 !important; 
}

.page-id-355045 .site-content {
  padding-top: 0 !important; 
}

.el-k2xgb {
  text-align: center !important;
}

/*** face css for all Publishers Page ***/

.el-4cj4q {
  text-align: center !important;
  padding-bottom: 30px !important;
}

.el-4cj4q button {
   border-radius: 6px !important;
}

/*** face css for Case Studies Page ***/

.el-hrhttj {
  text-align: center !important;
  padding-bottom: 30px !important;
}

.el-hrhttj button {
   border-radius: 6px !important;
}

/** css for new pub profile image icon **/

.wp-image-355769 {
  width: 100px !important;
}

.icons-center figure {
  text-align: center !important;
}

/*** chrome unboxed ***/

.page-id-352522 .site-header {
  padding-bottom: 36px !important;
}

.page-id-352522 .entry-header {
  display: none;
}

.page-id-352522 .entry-content {
  margin-top: 0 !important; 
}

.page-id-352522 .site-content {
  padding-top: 0 !important; 
}

/*** learn more page ***/

.page-id-353434 .site-header {
  padding-bottom: 36px !important;
}

.page-id-353434 .entry-header {
  display: none;
}

.page-id-353434 .entry-content {
  margin-top: 0 !important; 
}

.page-id-353434 .site-content {
  padding-top: 0 !important; 
}

.learn-more-header-banner .wp-block-media-text__content {
  padding-right: 0px !important;
}

.page-id-353434 .slick-list {
  background: none !important;
}

@media all and (min-width: 768px) {
.page-id-353434 .slick-dots {
    display: none !important;
}
}

@media all and (max-width: 768px) {
.page-id-353434 .slick-slide {
    padding: 20px !important;
}
}

.green-hover a:hover {
  background-color: #5fa624 !important;
}

.ezoic-green-hover a:hover {
 color: #5fa624 !important;
}

.page-id-353434 .slick-arrow:before {
  color: white !important;
}

.page-id-353434 cite {
  font-weight: 600 !important;
}

/** basic waitlist landing page **/
.basic-waitlist-btn {
  background-color: #4C91F7 !important;
  border-radius: 33px !important;
  padding: 10px 90px !important;
}


.fw-500 {
  font-weight: 500 !important;
}

@media all and (max-width: 768px) {
.fs-50-mobile {
  font-size: 50px !important;
}
}

#wpforms-349701-field_6, #wpforms-349701-field_6-secondary, #wpforms-349701-field_8 {
  border-radius: 8px;
  background: #f2f4f8;
  border: 1px solid #ADB5B8;
  width: 488px;
  height: 39px;
}

.ez-account-login {
color:#4c91f7 !important;
	text-decoration: none !important;
}

/*** affiliate page ***/

@media all and (max-width: 768px) {
.affiliate-program-header {
  font-size: 50px !important;
}
}

.page-id-350716 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-350716 .site-main {
  padding-top: 0 !important;
}

.page-id-350716 .entry-header {
  display: none;
}

.page-id-350716 .entry-content {
  margin-top: 0 !important; 
}

.page-id-350716 .site-content {
  padding-top: 0 !important; 
}

.affiliate-box-shadow-top {
box-shadow: 0 -11px 19px -22px rgb(0 0 0 / 50%);
}

.affiliate-box-shadow-bottom {
    box-shadow: 0 10px 15px -19px rgb(0 0 0 / 50%);
}

.letter-spacing-half {
  letter-spacing: .5px;
}

@media all and (max-width: 1024px) {
.affiliate-right-arrow {
  display: none !important;
}
}


.page-id-350716 .affiliate-testimonials .slick-slide {
  padding-top: 40px;
	padding-left: 40px;
  padding-right: 40px;
	margin: 20px;
	background-color: white;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	height: 950px;
}

@media all and (min-width: 768px) {
.page-id-350716 .affiliate-testimonials .slick-slide {
	height: 530px;
}
}

.promote-ezoic .slick-next {
  right: -55px !important;
}

@media all and (min-width: 768px) {
	.promote-ezoic .slick-dots {
     display: none !important;
}
}

@media all and (max-width: 768px) {
	.mb-mt-0 {
    margin-top: 0 !important;
}
}

@media all and (max-width: 768px) {
	.mb-fs-20 {
    font-size: 20px !important;
}
}


.page-id-350716 .affiliate-testimonials .slick-track {
  background-color: #F2F6FE;
}

.promote-ezoic .slick-next:before {
    content: "›" !important;
    font-family: inherit !important;
}


.promote-ezoic .slick-prev:before {
    content: "‹" !important;
    font-family: inherit !important;
}

/** affiliate gathering signups ***/

.page-id-353773 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-353773 .site-main {
  padding-top: 0 !important;
}

.page-id-353773 .entry-header {
  display: none;
}

.page-id-353773 .entry-content {
  margin-top: 0 !important; 
}

.page-id-353773 .site-content {
  padding-top: 0 !important; 
}

/*** affiliate duplicate page ***/

.page-id-353804 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-353804 .site-main {
  padding-top: 0 !important;
}

.page-id-353804 .entry-header {
  display: none;
}

.page-id-353804 .entry-content {
  margin-top: 0 !important; 
}

.page-id-353804 .site-content {
  padding-top: 0 !important; 
}

.page-id-353804 .affiliate-testimonials .slick-slide {
  padding-top: 40px;
	padding-left: 40px;
  padding-right: 40px;
	margin: 20px;
	background-color: white;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	height: 920px;
}

@media all and (min-width: 768px) {
.page-id-353804 .affiliate-testimonials .slick-slide {
	height: 530px;
}
}

.page-id-353804 .affiliate-testimonials .slick-track {
  background-color: #F2F6FE;
}

.promote-ezoic .slick-next:before {
    content: "›" !important;
    font-family: inherit !important;
}


/** google page ***/

.page-id-354223 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-354223 .site-main {
  padding-top: 0 !important;
}

.page-id-354223 .entry-header {
  display: none;
}

.page-id-354223 .entry-content {
  margin-top: 0 !important; 
}

.page-id-354223 .site-content {
  padding-top: 0 !important; 
}

/** machine learning technical documentation page ***/

.page-id-340922 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-340922 .site-main {
  padding-top: 0 !important;
}

.page-id-340922 .entry-header {
  display: none;
}

.page-id-340922 .entry-content {
  margin-top: 0 !important; 
}

.page-id-340922 .site-content {
  padding-top: 0 !important; 
}

/** Global Ad Rates and Publishing Trends in 2020 page ***/

.page-id-341074 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-341074 .site-main {
  padding-top: 0 !important;
}

.page-id-341074 .entry-header {
  display: none;
}

.page-id-341074 .entry-content {
  margin-top: 0 !important; 
}

.page-id-341074 .site-content {
  padding-top: 0 !important; 
}

/** 2019 publisher performance  page ***/

.page-id-354242 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-354242 .site-main {
  padding-top: 0 !important;
}

.page-id-354242 .entry-header {
  display: none;
}

.page-id-354242 .entry-content {
  margin-top: 0 !important; 
}

.page-id-354242 .site-content {
  padding-top: 0 !important; 
}


/** 2020 publisher performance  page ***/

.page-id-354234 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-354234 .site-main {
  padding-top: 0 !important;
}

.page-id-354234 .entry-header {
  display: none;
}

.page-id-354234 .entry-content {
  margin-top: 0 !important; 
}

.page-id-354234 .site-content {
  padding-top: 0 !important; 
}


/** title tag tester  page ***/

.page-id-341023 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-341023 .site-main {
  padding-top: 0 !important;
}

.page-id-341023 .entry-header {
  display: none;
}

.page-id-341023 .entry-content {
  margin-top: 0 !important; 
}

.page-id-341023 .site-content {
  padding-top: 0 !important; 
}

/** trailblazer page ***/

.page-id-353811 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-353811 .site-main {
  padding-top: 0 !important;
}

.page-id-353811 .entry-header {
  display: none;
}

.page-id-353811 .entry-content {
  margin-top: 0 !important; 
}

.page-id-353811 .site-content {
  padding-top: 0 !important; 
}


@media all and (max-width: 768px) {
.trailblazer-logo {
  width: 300px;
  height: 300px;
}
}



/** humix page **/


/*** Humix Network FAQ ***/

.page-id-361195 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-361195 .site-main {
  padding-top: 0 !important;
}

.page-id-361195 .entry-header {
  display: none;
}

.page-id-361195 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361195 .site-content {
  padding-top: 0 !important; 
}


/*** new ezoic-reviews page ***/


.page-id-352569 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-352569 .site-main {
  padding-top: 0 !important;
}

.page-id-352569 .entry-header {
  display: none;
}

.page-id-352569 .entry-content {
  margin-top: 0 !important; 
}

.page-id-352569 .site-content {
  padding-top: 0 !important; 
}

.ezoic-reviews-banner .wp-block-media-text__content {
  padding-right: 0 !important;
}

.page-id-352569 #ezoic-pub-ad-placeholder-105 {
  display: none !important;
}

@media all and (max-width: 1280px) {
.tpgb-testimonials .splide__arrow {
	display: none !important;
}
}


/*** new publisher profile page ***/


.page-id-354560 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-354560 .site-main {
  padding-top: 0 !important;
}

.page-id-354560 .entry-header {
  display: none;
}

.page-id-354560 .entry-content {
  margin-top: 0 !important; 
}

.page-id-354560 .site-content {
  padding-top: 0 !important; 
}


/*** new ezoic publishers page ***/


.page-id-354558 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-354558 .site-main {
  padding-top: 0 !important;
}

.page-id-354558 .entry-header {
  display: none;
}

.page-id-354558 .entry-content {
  margin-top: 0 !important; 
}

.page-id-354558 .site-content {
  padding-top: 0 !important; 
}

.ezoic-publishers-banner .wp-block-media-text__content {
  padding-right: 0 !important;
}

.masonry {
	column-count: 4;
	column-gap: 16px;
}

.masonry .mItem {
  display: inline-block;
  margin-bottom: 16px;
  width: 100%;
filter: saturate(30%);
}


.masonry .mItem:hover {
filter: saturate(100%);
}

@media (max-width: 1199px) {
  .masonry {
    column-count: 3;
  }
}

@media (max-width: 991px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 767px) {
  .masonry {
    column-count: 1;
  }
}

.reviews-form-section .wpforms-submit {
  border-radius: 8px !important;
}

.featured-customer-spotlights-container {
  left: 0 !important;
  right: 0 !important;
}

/** affiliate gathering contest page **/

.join-affiliate-container button{
  border-radius: 5px !important;
}

.join-affiliate-container input {
    border: 10px solid #c7d0d8 !important;
    padding: 15px 10px !important;
}

/** affiliate gathering attendees ***/

.page-id-353402 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-353402 .site-main {
  padding-top: 0 !important;
}

.page-id-351714 .entry-header {
  display: none;
}


.page-id-353402 .entry-content {
  margin-top: 0 !important; 
}

.page-id-353402 .site-content {
  padding-top: 0 !important; 
}

.page-id-353402 .wpforms-submit {
 border-radius: 6px !important;
}

	/** How To series Page */
	
.page-id-351714 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-351714 .site-main {
  padding-top: 0 !important;
}

.page-id-351714 .entry-header {
  display: none;
}


.page-id-351714 .entry-content {
  margin-top: 0 !important; 
}

.page-id-351714 .site-content {
  padding-top: 0 !important; 
}

/*** final publisher profile pages removed top padding ***/

.page-id-346848 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346848 .site-main {
  padding-top: 0 !important;
}

.page-id-346848 .entry-header {
  display: none;
}

.page-id-346848 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346848 .site-content {
  padding-top: 0 !important; 
}

.page-id-343211  .site-header {
  padding-bottom: 36px !important;
}

.page-id-343211 .site-main {
  padding-top: 0 !important;
}

.page-id-343211 .entry-header {
  display: none;
}

.page-id-343211 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343211 .site-content {
  padding-top: 0 !important; 
}

.page-id-343190  .site-header {
  padding-bottom: 36px !important;
}

.page-id-343190 .site-main {
  padding-top: 0 !important;
}

.page-id-343190 .entry-header {
  display: none;
}

.page-id-343190 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343190 .site-content {
  padding-top: 0 !important; 
}

.page-id-343948 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343948 .site-main {
  padding-top: 0 !important;
}

.page-id-343948 .entry-header {
  display: none;
}

.page-id-343948 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343948 .site-content {
  padding-top: 0 !important; 
}

.page-id-343919 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343919 .site-main {
  padding-top: 0 !important;
}

.page-id-343919 .entry-header {
  display: none;
}

.page-id-343919 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343919 .site-content {
  padding-top: 0 !important; 
}

.page-id-346945 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346945 .site-main {
  padding-top: 0 !important;
}

.page-id-346945 .entry-header {
  display: none;
}

.page-id-346945 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346945 .site-content {
  padding-top: 0 !important; 
}

.page-id-343181 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343181 .site-main {
  padding-top: 0 !important;
}

.page-id-343181 .entry-header {
  display: none;
}

.page-id-343181 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343181 .site-content {
  padding-top: 0 !important; 
}

.page-id-343208 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343208 .site-main {
  padding-top: 0 !important;
}

.page-id-343208 .entry-header {
  display: none;
}

.page-id-343208 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343208 .site-content {
  padding-top: 0 !important; 
}

.page-id-346852 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346852 .site-main {
  padding-top: 0 !important;
}

.page-id-346852 .entry-header {
  display: none;
}

.page-id-346852 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346852 .site-content {
  padding-top: 0 !important; 
}

.page-id-343213 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343213 .site-main {
  padding-top: 0 !important;
}

.page-id-343213 .entry-header {
  display: none;
}

.page-id-343213 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343213 .site-content {
  padding-top: 0 !important; 
}


.page-id-346859 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346859 .site-main {
  padding-top: 0 !important;
}

.page-id-346859 .entry-header {
  display: none;
}

.page-id-346859 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346859 .site-content {
  padding-top: 0 !important; 
}

.page-id-343055 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343055 .site-main {
  padding-top: 0 !important;
}

.page-id-343055 .entry-header {
  display: none;
}

.page-id-343055 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343055 .site-content {
  padding-top: 0 !important; 
}

.page-id-346863 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346863 .site-main {
  padding-top: 0 !important;
}

.page-id-346863 .entry-header {
  display: none;
}

.page-id-346863 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346863 .site-content {
  padding-top: 0 !important; 
}

.page-id-346879 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346879 .site-main {
  padding-top: 0 !important;
}

.page-id-346879 .entry-header {
  display: none;
}

.page-id-346879 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346879 .site-content {
  padding-top: 0 !important; 
}

.page-id-346869 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346869 .site-main {
  padding-top: 0 !important;
}

.page-id-346869 .entry-header {
  display: none;
}

.page-id-346869 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346869 .site-content {
  padding-top: 0 !important; 
}

.page-id-343567 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343567 .site-main {
  padding-top: 0 !important;
}

.page-id-343567 .entry-header {
  display: none;
}

.page-id-343567 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343567 .site-content {
  padding-top: 0 !important; 
}

.page-id-346882 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346882 .site-main {
  padding-top: 0 !important;
}

.page-id-346882 .entry-header {
  display: none;
}

.page-id-346882 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346882 .site-content {
  padding-top: 0 !important; 
}

.page-id-346877 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346877 .site-main {
  padding-top: 0 !important;
}

.page-id-346877 .entry-header {
  display: none;
}

.page-id-346877 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346877 .site-content {
  padding-top: 0 !important; 
}

.page-id-346943 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346943 .site-main {
  padding-top: 0 !important;
}

.page-id-346943 .entry-header {
  display: none;
}

.page-id-346943 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346943 .site-content {
  padding-top: 0 !important; 
}

.page-id-346871 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346871 .site-main {
  padding-top: 0 !important;
}

.page-id-346871 .entry-header {
  display: none;
}

.page-id-346871 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346871 .site-content {
  padding-top: 0 !important; 
}


.page-id-343196 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343196 .site-main {
  padding-top: 0 !important;
}

.page-id-343196 .entry-header {
  display: none;
}

.page-id-343196 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343196 .site-content {
  padding-top: 0 !important; 
}

.page-id-346857 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346857 .site-main {
  padding-top: 0 !important;
}

.page-id-346857 .entry-header {
  display: none;
}

.page-id-346857 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346857 .site-content {
  padding-top: 0 !important; 
}

.page-id-346865 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346865 .site-main {
  padding-top: 0 !important;
}

.page-id-346865 .entry-header {
  display: none;
}

.page-id-346865 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346865 .site-content {
  padding-top: 0 !important; 
}

.page-id-346854 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346854 .site-main {
  padding-top: 0 !important;
}

.page-id-346854 .entry-header {
  display: none;
}

.page-id-346854 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346854 .site-content {
  padding-top: 0 !important; 
}

.page-id-343156 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343156 .site-main {
  padding-top: 0 !important;
}

.page-id-343156 .entry-header {
  display: none;
}

.page-id-343156 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343156 .site-content {
  padding-top: 0 !important; 
}

.page-id-343198 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343198 .site-main {
  padding-top: 0 !important;
}

.page-id-343198 .entry-header {
  display: none;
}

.page-id-343198 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343198 .site-content {
  padding-top: 0 !important; 
}

.page-id-344738 .site-header {
  padding-bottom: 36px !important;
}

.page-id-344738 .site-main {
  padding-top: 0 !important;
}

.page-id-344738 .entry-header {
  display: none;
}

.page-id-344738 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344738 .site-content {
  padding-top: 0 !important; 
}

.page-id-344038 .site-header {
  padding-bottom: 36px !important;
}

.page-id-344038 .site-main {
  padding-top: 0 !important;
}

.page-id-344038 .entry-header {
  display: none;
}

.page-id-344038 .entry-content {
  margin-top: 0 !important; 
}

.page-id-344038 .site-content {
  padding-top: 0 !important; 
}

.page-id-343108 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343108 .site-main {
  padding-top: 0 !important;
}

.page-id-343108 .entry-header {
  display: none;
}

.page-id-343108 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343108 .site-content {
  padding-top: 0 !important; 
}

.page-id-343188 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343188 .site-main {
  padding-top: 0 !important;
}

.page-id-343188 .entry-header {
  display: none;
}

.page-id-343188 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343188 .site-content {
  padding-top: 0 !important; 
}

.page-id-346850 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346850 .site-main {
  padding-top: 0 !important;
}

.page-id-346850 .entry-header {
  display: none;
}

.page-id-346850 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346850 .site-content {
  padding-top: 0 !important; 
}


.page-id-346874 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346874 .site-main {
  padding-top: 0 !important;
}

.page-id-346874 .entry-header {
  display: none;
}

.page-id-346874 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346874 .site-content {
  padding-top: 0 !important; 
}


.page-id-343194 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343194 .site-main {
  padding-top: 0 !important;
}

.page-id-343194 .entry-header {
  display: none;
}

.page-id-343194 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343194 .site-content {
  padding-top: 0 !important; 
}


.page-id-343206 .site-header {
  padding-bottom: 36px !important;
}

.page-id-343206 .site-main {
  padding-top: 0 !important;
}

.page-id-343206 .entry-header {
  display: none;
}

.page-id-343206 .entry-content {
  margin-top: 0 !important; 
}

.page-id-343206 .site-content {
  padding-top: 0 !important; 
}

.page-id-357814 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357814 .site-main {
  padding-top: 0 !important;
}

.page-id-357814 .entry-header {
  display: none;
}

.page-id-357814 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357814 .site-content {
  padding-top: 0 !important; 
}

.page-id-357819 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357819 .site-main {
  padding-top: 0 !important;
}

.page-id-357819 .entry-header {
  display: none;
}

.page-id-357819 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357819 .site-content {
  padding-top: 0 !important; 
}

.page-id-357816 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357816 .site-main {
  padding-top: 0 !important;
}

.page-id-357816 .entry-header {
  display: none;
}

.page-id-357816 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357816 .site-content {
  padding-top: 0 !important; 
}

.page-id-357811 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357811 .site-main {
  padding-top: 0 !important;
}

.page-id-357811 .entry-header {
  display: none;
}

.page-id-357811 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357811 .site-content {
  padding-top: 0 !important; 
}

.page-id-357826 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357826 .site-main {
  padding-top: 0 !important;
}

.page-id-357826 .entry-header {
  display: none;
}

.page-id-357826 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357826 .site-content {
  padding-top: 0 !important; 
}

.page-id-357833 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357833 .site-main {
  padding-top: 0 !important;
}

.page-id-357833 .entry-header {
  display: none;
}

.page-id-357833 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357833 .site-content {
  padding-top: 0 !important; 
}

.page-id-359297 .site-header {
  padding-bottom: 36px !important;
}

.page-id-359297 .site-main {
  padding-top: 0 !important;
}

.page-id-359297 .entry-header {
  display: none;
}

.page-id-359297 .entry-content {
  margin-top: 0 !important; 
}

.page-id-359297 .site-content {
  padding-top: 0 !important; 
}

.page-id-359430 .site-header {
  padding-bottom: 36px !important;
}

.page-id-359430 .site-main {
  padding-top: 0 !important;
}

.page-id-359430 .entry-header {
  display: none;
}

.page-id-359430 .entry-content {
  margin-top: 0 !important; 
}

.page-id-359430 .site-content {
  padding-top: 0 !important; 
}

.page-id-359435 .site-header {
  padding-bottom: 36px !important;
}

.page-id-359435 .site-main {
  padding-top: 0 !important;
}

.page-id-359435 .entry-header {
  display: none;
}

.page-id-359435 .entry-content {
  margin-top: 0 !important; 
}

.page-id-359435 .site-content {
  padding-top: 0 !important; 
}

.page-id-359424 .site-header {
  padding-bottom: 36px !important;
}

.page-id-359424 .site-main {
  padding-top: 0 !important;
}

.page-id-359424 .entry-header {
  display: none;
}

.page-id-359424 .entry-content {
  margin-top: 0 !important; 
}

.page-id-359424 .site-content {
  padding-top: 0 !important; 
}

.page-id-360860 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360860 .site-main {
  padding-top: 0 !important;
}

.page-id-360860 .entry-header {
  display: none;
}

.page-id-360860 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360860 .site-content {
  padding-top: 0 !important; 
}

.page-id-363814 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363814 .site-main {
  padding-top: 0 !important;
}

.page-id-363814 .entry-header {
  display: none;
}

.page-id-363814 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363814 .site-content {
  padding-top: 0 !important; 
}

/*** all reviews page ***/
.page-id-357517 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357517 .site-main {
  padding-top: 0 !important;
}

.page-id-357517 .entry-header {
  display: none;
}

.page-id-357517 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357517 .site-content {
  padding-top: 0 !important; 
}


/*** all reviews page ***/
.page-id-357521 .site-header {
  padding-bottom: 36px !important;
}

.page-id-357521 .site-main {
  padding-top: 0 !important;
}

.page-id-357521 .entry-header {
  display: none;
}

.page-id-357521 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357521 .site-content {
  padding-top: 0 !important; 
}



/*** new publisher profile pages draft, delete this later ***/

.page-id-355984 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-355984 .site-main {
  padding-top: 0 !important;
}

.page-id-355984 .entry-header {
  display: none;
}


.page-id-355984 .entry-content {
  margin-top: 0 !important; 
}

.page-id-355984 .site-content {
  padding-top: 0 !important; 
}

.page-id-355990 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-355990 .site-main {
  padding-top: 0 !important;
}

.page-id-355990 .entry-header {
  display: none;
}


.page-id-355990 .entry-content {
  margin-top: 0 !important; 
}

.page-id-355990 .site-content {
  padding-top: 0 !important; 
}

.page-id-355999 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-355999 .site-main {
  padding-top: 0 !important;
}

.page-id-355999 .entry-header {
  display: none;
}

.page-id-355999 .entry-content {
  margin-top: 0 !important; 
}

.page-id-355999 .site-content {
  padding-top: 0 !important; 
}

.page-id-356007 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356007 .site-main {
  padding-top: 0 !important;
}

.page-id-356007 .entry-header {
  display: none;
}

.page-id-356007 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356007 .site-content {
  padding-top: 0 !important; 
}

.page-id-356013 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356013 .site-main {
  padding-top: 0 !important;
}

.page-id-356013 .entry-header {
  display: none;
}

.page-id-356013 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356013 .site-content {
  padding-top: 0 !important; 
}

.page-id-356017 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356017 .site-main {
  padding-top: 0 !important;
}

.page-id-356017 .entry-header {
  display: none;
}

.page-id-356017 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356017 .site-content {
  padding-top: 0 !important; 
}

.page-id-356027 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356027 .site-main {
  padding-top: 0 !important;
}

.page-id-356027 .entry-header {
  display: none;
}

.page-id-356027 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356027 .site-content {
  padding-top: 0 !important; 
}

.page-id-356031 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356031 .site-main {
  padding-top: 0 !important;
}

.page-id-356031 .entry-header {
  display: none;
}

.page-id-356031 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356031 .site-content {
  padding-top: 0 !important; 
}

.page-id-356037 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356037 .site-main {
  padding-top: 0 !important;
}

.page-id-356037 .entry-header {
  display: none;
}

.page-id-356037 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356037 .site-content {
  padding-top: 0 !important; 
}

.page-id-356042 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356042 .site-main {
  padding-top: 0 !important;
}

.page-id-356042 .entry-header {
  display: none;
}

.page-id-356042 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356042 .site-content {
  padding-top: 0 !important; 
}

.page-id-356065 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356065 .site-main {
  padding-top: 0 !important;
}

.page-id-356065 .entry-header {
  display: none;
}

.page-id-356065 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356065 .site-content {
  padding-top: 0 !important; 
}

.page-id-356069 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356069 .site-main {
  padding-top: 0 !important;
}

.page-id-356069 .entry-header {
  display: none;
}

.page-id-356069 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356069 .site-content {
  padding-top: 0 !important; 
}

.page-id-356075 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356075 .site-main {
  padding-top: 0 !important;
}

.page-id-356075 .entry-header {
  display: none;
}

.page-id-356075 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356075 .site-content {
  padding-top: 0 !important; 
}

.page-id-356080 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356080 .site-main {
  padding-top: 0 !important;
}

.page-id-356080 .entry-header {
  display: none;
}

.page-id-356080 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356080 .site-content {
  padding-top: 0 !important; 
}


.page-id-356086 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356086 .site-main {
  padding-top: 0 !important;
}

.page-id-356086 .entry-header {
  display: none;
}

.page-id-356086 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356086 .site-content {
  padding-top: 0 !important; 
}

.page-id-356092 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356092 .site-main {
  padding-top: 0 !important;
}

.page-id-356092 .entry-header {
  display: none;
}

.page-id-356092 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356092 .site-content {
  padding-top: 0 !important; 
}

.page-id-356098 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356098 .site-main {
  padding-top: 0 !important;
}

.page-id-356098 .entry-header {
  display: none;
}

.page-id-356098 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356098 .site-content {
  padding-top: 0 !important; 
}

.page-id-356103 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356103 .site-main {
  padding-top: 0 !important;
}

.page-id-356103 .entry-header {
  display: none;
}

.page-id-356103 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356103 .site-content {
  padding-top: 0 !important; 
}

.page-id-356110 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356110 .site-main {
  padding-top: 0 !important;
}

.page-id-356110 .entry-header {
  display: none;
}

.page-id-356110 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356110 .site-content {
  padding-top: 0 !important; 
}

.page-id-356117 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356117 .site-main {
  padding-top: 0 !important;
}

.page-id-356117 .entry-header {
  display: none;
}

.page-id-356117 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356117 .site-content {
  padding-top: 0 !important; 
}

.page-id-356123 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356123 .site-main {
  padding-top: 0 !important;
}

.page-id-356123 .entry-header {
  display: none;
}

.page-id-356123 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356123 .site-content {
  padding-top: 0 !important; 
}


.page-id-356130 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356130 .site-main {
  padding-top: 0 !important;
}

.page-id-356130 .entry-header {
  display: none;
}

.page-id-356130 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356130 .site-content {
  padding-top: 0 !important; 
}


.page-id-356135 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356135 .site-main {
  padding-top: 0 !important;
}

.page-id-356135 .entry-header {
  display: none;
}

.page-id-356135 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356135 .site-content {
  padding-top: 0 !important; 
}

.page-id-356142 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356142 .site-main {
  padding-top: 0 !important;
}

.page-id-356142 .entry-header {
  display: none;
}

.page-id-356142 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356142 .site-content {
  padding-top: 0 !important; 
}

.page-id-356146 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356146 .site-main {
  padding-top: 0 !important;
}

.page-id-356146 .entry-header {
  display: none;
}

.page-id-356146 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356146 .site-content {
  padding-top: 0 !important; 
}

.page-id-356153 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356153 .site-main {
  padding-top: 0 !important;
}

.page-id-356153 .entry-header {
  display: none;
}

.page-id-356153 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356153 .site-content {
  padding-top: 0 !important; 
}

.page-id-356159 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356159 .site-main {
  padding-top: 0 !important;
}

.page-id-356159 .entry-header {
  display: none;
}

.page-id-356159 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356159 .site-content {
  padding-top: 0 !important; 
}

.page-id-356163 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356163 .site-main {
  padding-top: 0 !important;
}

.page-id-356163 .entry-header {
  display: none;
}

.page-id-356163 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356163 .site-content {
  padding-top: 0 !important; 
}


.page-id-356169 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356169 .site-main {
  padding-top: 0 !important;
}

.page-id-356169 .entry-header {
  display: none;
}

.page-id-356169 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356169 .site-content {
  padding-top: 0 !important; 
}

.page-id-356174 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356174 .site-main {
  padding-top: 0 !important;
}

.page-id-356174 .entry-header {
  display: none;
}

.page-id-356174 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356174 .site-content {
  padding-top: 0 !important; 
}

.page-id-356180 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356180 .site-main {
  padding-top: 0 !important;
}

.page-id-356180 .entry-header {
  display: none;
}

.page-id-356180 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356180 .site-content {
  padding-top: 0 !important; 
}

.page-id-356187 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356187 .site-main {
  padding-top: 0 !important;
}

.page-id-356187 .entry-header {
  display: none;
}

.page-id-356187 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356187 .site-content {
  padding-top: 0 !important; 
}

.page-id-356191 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356191 .site-main {
  padding-top: 0 !important;
}

.page-id-356191 .entry-header {
  display: none;
}

.page-id-356191 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356191 .site-content {
  padding-top: 0 !important; 
}

.page-id-356197 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356197 .site-main {
  padding-top: 0 !important;
}

.page-id-356197 .entry-header {
  display: none;
}

.page-id-356197 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356197 .site-content {
  padding-top: 0 !important; 
}


.page-id-356197 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-356204 .site-main {
  padding-top: 0 !important;
}

.page-id-356204 .entry-header {
  display: none;
}

.page-id-356204 .entry-content {
  margin-top: 0 !important; 
}

.page-id-356204 .site-content {
  padding-top: 0 !important; 
}






/*** events page ***/

.page-id-351113 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-351113 .site-main {
  padding-top: 0 !important;
}

.page-id-351113 .entry-header {
  display: none;
}


.page-id-351113 .entry-content {
  margin-top: 0 !important; 
}

.page-id-351113 .site-content {
  padding-top: 0 !important; 
}

.box-shadow-bottom {
    box-shadow: 0 10px 15px -19px rgb(0 0 0 / 50%);
}

	.grey-events-border {
		border: 10px solid #d1d1d1;
		border-radius: 10px;
	}

.past-events-img {
  opacity: 80%;
}

.past-events-img:hover {
  opacity: 100%;
}

.pb-20 {
  padding-bottom: 20px !important;
}

.past-events-img img {
  border-radius: 5px !important;
}

@media all and (max-width: 1024px){
.pb-50-mobile {
  padding-bottom: 50px !important;
}
}

@media all and (max-width: 1024px){
.mobile-font-60 {
  font-size: 60px !important;
}
}

@media all and (max-width: 768px) {
.h2-mobile-events {
  font-size: 26px !important;
}
}

@media all and (max-width: 768px) {
.mb-40-mobile {
  margin-bottom: 40px !important;
}
}

/*** content month ***/
	
.page-id-355009 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-355009 .site-main {
  padding-top: 0 !important;
}

.page-id-355009 .entry-header {
  display: none;
}

.page-id-355009 .entry-content {
  margin-top: 0 !important; 
}

.page-id-355009 .site-content {
  padding-top: 0 !important; 
}


@media all and (max-width: 992px) {
.content-week-section .service-item-loop {
flex: 0 0 100% !important;
    max-width: 100% !important;
}
}

.content-lr-0 {
left: 0 !important;
right: 0 !important;
}

.webinar-registration-block .button-link-wrap {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.content-month-form .wpforms-submit {
  border-radius: 6px !important;
}

.tpgb-animated-service-boxes .tpgb-row {
  justify-content: center !important;
}

.cm-webinars-registration .asb-sub-title {
  width: 100% !important;
}

.cm-webinars-registration .tpgb-adv-button {
  width: 100% !important;
}

.asb-title-link {
  width: 100% !important;
}


.asb-title {
  width: 100% !important;
}

.asb-desc {
  width: 100% !important;
}


/*** content month webinars ***/
	
.page-id-359076 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-359076 .site-main {
  padding-top: 0 !important;
}

.page-id-359076 .entry-header {
  display: none;
}

.page-id-359076 .entry-content {
  margin-top: 0 !important; 
}

.page-id-359076 .site-content {
  padding-top: 0 !important; 
}

/*** content month week 1 ***/
	
.page-id-357758 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-357758 .site-main {
  padding-top: 0 !important;
}

.page-id-357758 .entry-header {
  display: none;
}

.page-id-357758 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357758 .site-content {
  padding-top: 0 !important; 
}


/*** content month week 2 ***/
	
.page-id-357760 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-357760 .site-main {
  padding-top: 0 !important;
}

.page-id-357760 .entry-header {
  display: none;
}

.page-id-357760 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357760 .site-content {
  padding-top: 0 !important; 
}

/*** content month week 3 ***/
	
.page-id-357761 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-357761 .site-main {
  padding-top: 0 !important;
}

.page-id-357761 .entry-header {
  display: none;
}

.page-id-357761 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357761 .site-content {
  padding-top: 0 !important; 
}

/*** content month week 4 ***/
	
.page-id-357762 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-357762 .site-main {
  padding-top: 0 !important;
}

.page-id-357762 .entry-header {
  display: none;
}

.page-id-357762 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357762 .site-content {
  padding-top: 0 !important; 
}


/*** content month sweepstakes ***/
	
.page-id-357769 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-357769 .site-main {
  padding-top: 0 !important;
}

.page-id-357769 .entry-header {
  display: none;
}

.page-id-357769 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357769 .site-content {
  padding-top: 0 !important; 
}

.contest-btn a:hover {
  background-color: #5fa624 !important;
}

.contest-btn {
  background-color: #5fa624 !important;
}

.content-sweepstakes-cards {
  left: 0 !important; 
	right: 0 !important;
}

/*** content month sweepstakes terms ***/
	
.page-id-358059 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-358059 .site-main {
  padding-top: 0 !important;
}

.page-id-358059 .entry-header {
  display: none;
}

.page-id-358059 .entry-content {
  margin-top: 0 !important; 
}

.page-id-358059 .site-content {
  padding-top: 0 !important; 
}

/*** ama barry schwartz page ***/
	
.page-id-358025 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-358025 .site-main {
  padding-top: 0 !important;
}

.page-id-358025 .entry-header {
  display: none;
}

.page-id-358025 .entry-content {
  margin-top: 0 !important; 
}

.page-id-358025 .site-content {
  padding-top: 0 !important; 
}

.barry-ama-form button {
  border-radius: 6px !important;
}


/*** software engineer hiring process ***/
	
.page-id-357993 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-357993 .site-main {
  padding-top: 0 !important;
}

.page-id-357993 .entry-header {
  display: none;
}

.page-id-357993 .entry-content {
  margin-top: 0 !important; 
}

.page-id-357993 .site-content {
  padding-top: 0 !important; 
}

/*** data scientist hiring process ***/
	
.page-id-363905 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-363905 .site-main {
  padding-top: 0 !important;
}

.page-id-363905 .entry-header {
  display: none;
}

.page-id-363905 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363905 .site-content {
  padding-top: 0 !important; 
}

@media all and (max-width: 768px) {
.icon-mobile-center figure {
  width: 100%;
}
}
@media all and (max-width: 768px) {
.se-hr-mobile {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
    background-color: #403d39 !important;
}
}


@media all and (min-width: 768px) {
	.mb-lg-10 {
  margin-bottom: 10px !important;
}
}

/** publishers a template **/

.page-id-359021 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-359021 .site-main {
  padding-top: 0 !important;
}

.page-id-359021 .entry-header {
  display: none;
}

.page-id-359021 .entry-content {
  margin-top: 0 !important; 
}

.page-id-359021 .site-content {
  padding-top: 0 !important; 
}

/*** Truth Monetization Standard Page ***/


.page-id-340934 .site-header {
  padding-bottom: 36px !important;
}

 .page-id-340934 .site-main {
  padding-top: 0 !important;
}

.page-id-340934 .entry-header {
  display: none;
}

.page-id-340934 .entry-content {
  margin-top: 0 !important; 
}

.page-id-340934 .site-content {
  padding-top: 0 !important; 
}


/*** Trailblazer Draft Page ***/

.page-id-360060 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360060 .site-main {
  padding-top: 0 !important;
}

.page-id-360060 .entry-header {
  display: none;
}

.page-id-360060 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360060 .site-content {
  padding-top: 0 !important; 
}

/*** Humix Draft Page ***/

.page-id-360153 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360153 .site-main {
  padding-top: 0 !important;
}

.page-id-360153 .entry-header {
  display: none;
}

.page-id-360153 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360153 .site-content {
  padding-top: 0 !important; 
}

/*** Google Approval Checklist Page ***/

.page-id-360254 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360254 .site-main {
  padding-top: 0 !important;
}

.page-id-360254 .entry-header {
  display: none;
}

.page-id-360254 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360254 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Sweepstakes Test ***/

.page-id-360283 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360283 .site-main {
  padding-top: 0 !important;
}

.page-id-360283 .entry-header {
  display: none;
}

.page-id-360283 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360283 .site-content {
  padding-top: 0 !important; 
}


/*** Access Now Page  ***/

.page-id-211 .site-header {
  padding-bottom: 36px !important;
}

.page-id-211 .site-main {
  padding-top: 0 !important;
}

.page-id-211 .entry-header {
  display: none;
}

.page-id-211 .entry-content {
  margin-top: 0 !important; 
}

.page-id-211 .site-content {
  padding-top: 0 !important; 
}

/*** Advertisers Page  ***/

.page-id-360248 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360248 .site-main {
  padding-top: 0 !important;
}

.page-id-360248 .entry-header {
  display: none;
}

.page-id-360248 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360248 .site-content {
  padding-top: 0 !important; 
}

/*** Advertisers Direct Page  ***/

.page-id-360948 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360948 .site-main {
  padding-top: 0 !important;
}

.page-id-360948 .entry-header {
  display: none;
}

.page-id-360948 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360948 .site-content {
  padding-top: 0 !important; 
}

/***Draft Content Month Week 1 Page  ***/

.page-id-360514 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360514 .site-main {
  padding-top: 0 !important;
}

.page-id-360514 .entry-header {
  display: none;
}

.page-id-360514 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360514 .site-content {
  padding-top: 0 !important; 
}

/***Draft Content Month Week 3 Page  ***/

.page-id-361956 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361956 .site-main {
  padding-top: 0 !important;
}

.page-id-361956 .entry-header {
  display: none;
}

.page-id-361956 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361956 .site-content {
  padding-top: 0 !important; 
}

/***Draft Content Month Week 4 Page  ***/

.page-id-362568 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362568 .site-main {
  padding-top: 0 !important;
}

.page-id-362568 .entry-header {
  display: none;
}

.page-id-362568 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362568 .site-content {
  padding-top: 0 !important; 
}

/***Draft Content Month Week 2 Page  ***/

.page-id-361412 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361412 .site-main {
  padding-top: 0 !important;
}

.page-id-361412 .entry-header {
  display: none;
}

.page-id-361412 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361412 .site-content {
  padding-top: 0 !important; 
}


.content-month-container * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.content-month-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
  margin: auto;
	margin-top: 90px !important;
}

.content-month-container img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.content-month-container .card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
background: linear-gradient(to right, #FFFFFF, #eeeeee);
}

.content-month-container .card:hover {
background: #ffffff;
 box-shadow: 0 8px 18px 0 rgb(0 0 0 / 12%);
}



.content-month-container .card__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.content-month-container .card__body p{
font-size: 18px;
    font-weight: 400;
    line-height: 1.25;
	color: #403d39;
	padding-top: 10px;
}

.content-month-container .card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
	color: #111111;
	padding-top: 10px !important;
}

.content-month-container .card__link {
	display: flex;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	padding-top: 10px;
	padding-bottom: 10px;
}


.content-month-container .card__link a{
font-weight: 500 !important;
    background: #5fa624 !important;
    padding: 10px !important;
    border-radius: 6px;
    color: white !important;
    text-decoration: none !important;
    font-size: 16px !important;
}

.content-month-container .card__link a:hover{
color: white !important;
  font-weight: 500 !important;
	background: #403d39 !important;
}

.content-month-container .tag {
  align-self: flex-start;
  padding: .25em .75em;
  border-radius: 1em;
	font-size: 14px;
	font-weight: 600;
}

.content-month-containe .tag + .content-month-containe .tag {
  margin-left: .5em;
}

.content-month-container .tag-blue {
  background: #56CCF2;
background: linear-gradient(to bottom, #2F80ED, #56CCF2);
  color: #fafafa;
}

.content-month-container .tag-brown {
  background: #D1913C;
background: linear-gradient(to bottom, #FFD194, #D1913C);
  color: #fafafa;
}

.content-month-container .tag-red {
  background: #cb2d3e;
background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.content-month-container .tag-green {
	background: #319d52;
background: linear-gradient(to bottom, #a0edb7, #319d52);
    color: #fafafa;
}

.content-month-container .tag-black {
	background: #319d52;
    background: linear-gradient(to bottom, #000000, #565559);
    color: #fafafa;
}

.content-month-container .card__footer {
  display: flex;
  padding: 1.5rem;
  margin-top: auto;
}

.content-month-container .user {
  display: flex;
  gap: 1rem;
}

.content-month-container .user__image {
  border-radius: 50%;
}

.content-month-container .user__info > small {
  color: #666;
	font-weight: 600;
}

.content-month-container .user__image {
  object-fit: none !important;
}

.content-month-container .user__info h5 {
  color: black !important;
	font-size: 16px !important;
}



/***CMW1 How to Reach Target Webinar  ***/

.page-id-360979 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360979 .site-main {
  padding-top: 0 !important;
}

.page-id-360979 .entry-header {
  display: none;
}

.page-id-360979 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360979 .site-content {
  padding-top: 0 !important; 
}

/***CMW1 How to Get as Much Revenue As Possible  ***/

.page-id-361086 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361086 .site-main {
  padding-top: 0 !important;
}

.page-id-361086 .entry-header {
  display: none;
}

.page-id-361086 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361086 .site-content {
  padding-top: 0 !important; 
}

/***CMW1 Content Monetization Strategies in 2022  ***/

.page-id-361100 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361100 .site-main {
  padding-top: 0 !important;
}

.page-id-361100 .entry-header {
  display: none;
}

.page-id-361100 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361100 .site-content {
  padding-top: 0 !important; 
}

/***CMW1 Welcome to Content Month  ***/

.page-id-361275 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361275 .site-main {
  padding-top: 0 !important;
}

.page-id-361275 .entry-header {
  display: none;
}

.page-id-361275 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361275 .site-content {
  padding-top: 0 !important; 
}

/***CMW1 Five Simple Non-Ad Related Income Streams  ***/

.page-id-361295 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361295 .site-main {
  padding-top: 0 !important;
}

.page-id-361295 .entry-header {
  display: none;
}

.page-id-361295 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361295 .site-content {
  padding-top: 0 !important; 
}

/***CMW1 How to Use Affiliate Links  ***/

.page-id-361580 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361580 .site-main {
  padding-top: 0 !important;
}

.page-id-361580 .entry-header {
  display: none;
}

.page-id-361580 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361580 .site-content {
  padding-top: 0 !important; 
}

/*** Access Now Affiliate Contest  ***/

.page-id-361329 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361329 .site-main {
  padding-top: 0 !important;
}

.page-id-361329 .entry-header {
  display: none;
}

.page-id-361329 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361329 .site-content {
  padding-top: 0 !important; 
}

/***CMW2 Quick SEO Wins  ***/

.page-id-361456 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361456 .site-main {
  padding-top: 0 !important;
}

.page-id-361456 .entry-header {
  display: none;
}

.page-id-361456 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361456 .site-content {
  padding-top: 0 !important; 
}

/***CMW2 SEO E-BOOK ***/

.page-id-361462 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361462 .site-main {
  padding-top: 0 !important;
}

.page-id-361462 .entry-header {
  display: none;
}

.page-id-361462 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361462 .site-content {
  padding-top: 0 !important; 
}

/***CMW2 TOP Seo Tools You Need ***/

.page-id-361466 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361466 .site-main {
  padding-top: 0 !important;
}

.page-id-361466 .entry-header {
  display: none;
}

.page-id-361466 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361466 .site-content {
  padding-top: 0 !important; 
}

/***CMW2 Barry AMA ***/

.page-id-361874 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361874 .site-main {
  padding-top: 0 !important;
}

.page-id-361874 .entry-header {
  display: none;
}

.page-id-361874 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361874 .site-content {
  padding-top: 0 !important; 
}

/***CMW2 Live Panel SEO ***/

.page-id-361898 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361898 .site-main {
  padding-top: 0 !important;
}

.page-id-361898 .entry-header {
  display: none;
}

.page-id-361898 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361898 .site-content {
  padding-top: 0 !important; 
}

/***CMW3 Custom CSS Ad Wrapper  ***/

.page-id-361521 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361521 .site-main {
  padding-top: 0 !important;
}

.page-id-361521 .entry-header {
  display: none;
}

.page-id-361521 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361521 .site-content {
  padding-top: 0 !important; 
}

/***SEO Tag Tester page  ***/

.page-id-1047 .site-header {
  padding-bottom: 36px !important;
}

.page-id-1047 .site-main {
  padding-top: 0 !important;
}

.page-id-1047 .entry-header {
  display: none;
}

.page-id-1047 .entry-content {
  margin-top: 0 !important; 
}

.page-id-1047 .site-content {
  padding-top: 0 !important; 
}

/***Content Month Week 1 Videos page  ***/

.page-id-361744 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361744 .site-main {
  padding-top: 0 !important;
}

.page-id-361744 .entry-header {
  display: none;
}

.page-id-361744 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361744 .site-content {
  padding-top: 0 !important; 
}

/***Content Month Week 2 Videos page  ***/

.page-id-361784 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361784 .site-main {
  padding-top: 0 !important;
}

.page-id-361784 .entry-header {
  display: none;
}

.page-id-361784 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361784 .site-content {
  padding-top: 0 !important; 
}

/***Content Month Week 3 Videos page  ***/

.page-id-362202 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362202 .site-main {
  padding-top: 0 !important;
}

.page-id-362202 .entry-header {
  display: none;
}

.page-id-362202 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362202 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 3 How to Use Social Media Followers page  ***/

.page-id-362045 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362045 .site-main {
  padding-top: 0 !important;
}

.page-id-362045 .entry-header {
  display: none;
}

.page-id-362045 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362045 .site-content {
  padding-top: 0 !important; 
}


/*** Content Month Week 3 Email and Social Media Strategies to Grow Your Website page  ***/

.page-id-362048 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362048 .site-main {
  padding-top: 0 !important;
}

.page-id-362048 .entry-header {
  display: none;
}

.page-id-362048 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362048 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 3 Email and Social Media Strategies to Grow Your Website page  ***/

.page-id-362057 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362057 .site-main {
  padding-top: 0 !important;
}

.page-id-362057 .entry-header {
  display: none;
}

.page-id-362057 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362057 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 3 How to Create Quality Content Webinar  ***/

.page-id-362481 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362481 .site-main {
  padding-top: 0 !important;
}

.page-id-362481 .entry-header {
  display: none;
}

.page-id-362481 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362481 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Club 22 page  ***/

.page-id-362135 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362135 .site-main {
  padding-top: 0 !important;
}

.page-id-362135 .entry-header {
  display: none;
}

.page-id-362135 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362135 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Club 22 Terms page  ***/

.page-id-362297 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362297 .site-main {
  padding-top: 0 !important;
}

.page-id-362297 .entry-header {
  display: none;
}

.page-id-362297 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362297 .site-content {
  padding-top: 0 !important; 
}

/*** Caleb Spivak Pub Profile page  ***/

.page-id-359160 .site-header {
  padding-bottom: 36px !important;
}

.page-id-359160 .site-main {
  padding-top: 0 !important;
}

.page-id-359160 .entry-header {
  display: none;
}

.page-id-359160 .entry-content {
  margin-top: 0 !important; 
}

.page-id-359160 .site-content {
  padding-top: 0 !important; 
}

/*** Bernie Carr Pub Profile page  ***/

.page-id-362131 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362131 .site-main {
  padding-top: 0 !important;
}

.page-id-362131 .entry-header {
  display: none;
}

.page-id-362131 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362131 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Video Player page  ***/

.page-id-978 .site-header {
  padding-bottom: 36px !important;
}

.page-id-978 .site-main {
  padding-top: 0 !important;
}

.page-id-978 .entry-header {
  display: none;
}

.page-id-978 .entry-content {
  margin-top: 0 !important; 
}

.page-id-978 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Video Player duplicate page  ***/

.page-id-361158 .site-header {
  padding-bottom: 36px !important;
}

.page-id-361158 .site-main {
  padding-top: 0 !important;
}

.page-id-361158 .entry-header {
  display: none;
}

.page-id-361158 .entry-content {
  margin-top: 0 !important; 
}

.page-id-361158 .site-content {
  padding-top: 0 !important; 
}

/*** Jesse Neo Publisher page  ***/

.page-id-362315 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362315 .site-main {
  padding-top: 0 !important;
}

.page-id-362315 .entry-header {
  display: none;
}

.page-id-362315 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362315 .site-content {
  padding-top: 0 !important; 
}

/*** Video Terms page  ***/

.page-id-360678 .site-header {
  padding-bottom: 36px !important;
}

.page-id-360678 .site-main {
  padding-top: 0 !important;
}

.page-id-360678 .entry-header {
  display: none;
}

.page-id-360678 .entry-content {
  margin-top: 0 !important; 
}

.page-id-360678 .site-content {
  padding-top: 0 !important; 
}

/*** Back to School Revenue boost page  ***/

.page-id-362414 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362414 .site-main {
  padding-top: 0 !important;
}

.page-id-362414 .entry-header {
  display: none;
}

.page-id-362414 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362414 .site-content {
  padding-top: 0 !important; 
}

/*** AMA with Ricky Kesler page  ***/

.page-id-362654 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362654 .site-main {
  padding-top: 0 !important;
}

.page-id-362654 .entry-header {
  display: none;
}

.page-id-362654 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362654 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 Video Player Best Practices Download  ***/

.page-id-362765 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362765 .site-main {
  padding-top: 0 !important;
}

.page-id-362765 .entry-header {
  display: none;
}

.page-id-362765 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362765 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 Video Cheat Sheet Download  ***/

.page-id-362779 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362779 .site-main {
  padding-top: 0 !important;
}

.page-id-362779 .entry-header {
  display: none;
}

.page-id-362779 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362779 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 How to Turn Your Pre-Existing Content Into Video  ***/

.page-id-362787 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362787 .site-main {
  padding-top: 0 !important;
}

.page-id-362787 .entry-header {
  display: none;
}

.page-id-362787 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362787 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 Printable Story Template  ***/

.page-id-362794 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362794 .site-main {
  padding-top: 0 !important;
}

.page-id-362794 .entry-header {
  display: none;
}

.page-id-362794 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362794 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 Best Practices for Video Content  ***/

.page-id-362800 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362800 .site-main {
  padding-top: 0 !important;
}

.page-id-362800 .entry-header {
  display: none;
}

.page-id-362800 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362800 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 Ricky Kesler  ***/

.page-id-363148 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363148 .site-main {
  padding-top: 0 !important;
}

.page-id-363148 .entry-header {
  display: none;
}

.page-id-363148 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363148 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 Humix Walk Thru  ***/

.page-id-363200 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363200 .site-main {
  padding-top: 0 !important;
}

.page-id-363200 .entry-header {
  display: none;
}

.page-id-363200 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363200 .site-content {
  padding-top: 0 !important; 
}

/*** Content Month Week 4 Closing Ceremony  ***/

.page-id-363328 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363328 .site-main {
  padding-top: 0 !important;
}

.page-id-363328 .entry-header {
  display: none;
}

.page-id-363328 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363328 .site-content {
  padding-top: 0 !important; 
}

/***Content Month Week 4 Internal Videos page  ***/

.page-id-362881 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362881 .site-main {
  padding-top: 0 !important;
}

.page-id-362881 .entry-header {
  display: none;
}

.page-id-362881 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362881 .site-content {
  padding-top: 0 !important; 
}

/***Content Month Feedback form page  ***/

.page-id-362989 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362989 .site-main {
  padding-top: 0 !important;
}

.page-id-362989 .entry-header {
  display: none;
}

.page-id-362989 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362989 .site-content {
  padding-top: 0 !important; 
}


/***Case Studies page  ***/

.page-id-362257 .site-header {
  padding-bottom: 36px !important;
}

.page-id-362257 .site-main {
  padding-top: 0 !important;
}

.page-id-362257 .entry-header {
  display: none;
}

.page-id-362257 .entry-content {
  margin-top: 0 !important; 
}

.page-id-362257 .site-content {
  padding-top: 0 !important; 
}

/***Case Studies page  ***/

.page-id-367308 .site-header {
  padding-bottom: 36px !important;
}

.page-id-367308 .site-main {
  padding-top: 0 !important;
}

.page-id-367308 .entry-header {
  display: none;
}

.page-id-367308 .entry-content {
  margin-top: 0 !important; 
}

.page-id-367308 .site-content {
  padding-top: 0 !important; 
}

/*** Fin Con 2022 page  ***/

.page-id-363088 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363088 .site-main {
  padding-top: 0 !important;
}

.page-id-363088 .entry-header {
  display: none;
}

.page-id-363088 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363088 .site-content {
  padding-top: 0 !important; 
}

/*** Closing Ceremony Content Month Week 4 page  ***/

.page-id-338885 .site-header {
  padding-bottom: 36px !important;
}

.page-id-338885 .site-main {
  padding-top: 0 !important;
}

.page-id-338885 .entry-header {
  display: none;
}

.page-id-338885 .entry-content {
  margin-top: 0 !important; 
}

.page-id-338885 .site-content {
  padding-top: 0 !important; 
}

/*** Fin Con 2022 page  ***/

.page-id-4589 .site-header {
  padding-bottom: 36px !important;
}

.page-id-4589 .site-main {
  padding-top: 0 !important;
}

.page-id-4589 .entry-header {
  display: none;
}

.page-id-4589 .entry-content {
  margin-top: 0 !important; 
}

.page-id-4589 .site-content {
  padding-top: 0 !important; 
}


/*** Giving Access Now page  ***/

.page-id-363401 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363401 .site-main {
  padding-top: 0 !important;
}

.page-id-363401 .entry-header {
  display: none;
}

.page-id-363401 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363401 .site-content {
  padding-top: 0 !important; 
}

/*** Giving Access Now Terms page  ***/

.page-id-363523 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363523 .site-main {
  padding-top: 0 !important;
}

.page-id-363523 .entry-header {
  display: none;
}

.page-id-363523 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363523 .site-content {
  padding-top: 0 !important; 
}


/** facet wp custom css **/

.fs-search input {
	padding: 8px 48px 8px 8px !important;
}

.fs-option {
    line-height: 1.45 !important;
}

.fs-label {
font-size: 1.2rem !important; 
}

.fs-option-label {
  font-size: 17px !important;
}

.fs-label-wrap {
  border-radius: 3px !important;
}

.fwpl-btn {
  background-color: #403d39 !important; 
	font-weight: bold !important;
	color: white !important;
padding: 10px !important;
border-radius: 6px !important;
}

.fwpl-btn:hover {
  background-color: #5fa624 !important;
}

/*** Draft Careeers ***/

.page-id-363718 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363718 .site-main {
  padding-top: 0 !important;
}

.page-id-363718 .entry-header {
  display: none;
}

.page-id-363718 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363718 .site-content {
  padding-top: 0 !important; 
}

/*** Customer Week 2022 ***/

.page-id-363872 .site-header {
  padding-bottom: 36px !important;
}

.page-id-363872 .site-main {
  padding-top: 0 !important;
}

.page-id-363872 .entry-header {
  display: none;
}

.page-id-363872 .entry-content {
  margin-top: 0 !important; 
}

.page-id-363872 .site-content {
  padding-top: 0 !important; 
}


/*** Draft Humix Duplicate Page ***/

.page-id-364256 .site-header {
  padding-bottom: 36px !important;
}

.page-id-364256 .site-main {
  padding-top: 0 !important;
}

.page-id-364256 .entry-header {
  display: none;
}

.page-id-364256 .entry-content {
  margin-top: 0 !important; 
}

.page-id-364256 .site-content {
  padding-top: 0 !important; 
}

.humix-carousel .slick-dots li.slick-active button:before {
	opacity: 1 !important;
	color: #03D8F3 !important;
}

.humix-carousel .slick-dots li button:before {
  font-size: 15px !important;
}

/*** Next Page ***/

.page-id-364426 .site-header {
  padding-bottom: 36px !important;
}

.page-id-364426 .site-main {
  padding-top: 0 !important;
}

.page-id-364426 .entry-header {
  display: none;
}

.page-id-364426 .entry-content {
  margin-top: 0 !important; 
}

.page-id-364426 .site-content {
  padding-top: 0 !important; 
}


.black-bg-wp-form .wpforms-field-container {
  color: white !important;
}

.black-bg-wp-form button {
  border: none !important;
}

.pro-paragraph-inner p {
    line-height: 1.5 !important;
}

/*** Flickify Page ***/

.page-id-364658 .site-header {
  padding-bottom: 36px !important;
}

.page-id-364658 .site-main {
  padding-top: 0 !important;
}

.page-id-364658 .entry-header {
  display: none;
}

.page-id-364658 .entry-content {
  margin-top: 0 !important; 
}

.page-id-364658 .site-content {
  padding-top: 0 !important; 
}

.flickify-container .heading-title img {
  margin-left: 10px !important;
}

/*** Customer Week 2022 Page ***/
@media screen and (max-width: 991px)
.nav-link-2 {
    padding-right: 5px;
    padding-left: 5px;
    color: #000;
}

/*** Customer Week 2022 Q/A Page ***/

.page-id-365122 .site-header {
  padding-bottom: 36px !important;
}

.page-id-365122 .site-main {
  padding-top: 0 !important;
}

.page-id-365122 .entry-header {
  display: none;
}

.page-id-365122 .entry-content {
  margin-top: 0 !important; 
}

.page-id-365122 .site-content {
  padding-top: 0 !important; 
}

/*** Customer Week 2022 Kickoff Webinar ***/

.page-id-365265 .site-header {
  padding-bottom: 36px !important;
}

.page-id-365265 .site-main {
  padding-top: 0 !important;
}

.page-id-365265 .entry-header {
  display: none;
}

.page-id-365265 .entry-content {
  margin-top: 0 !important; 
}

.page-id-365265 .site-content {
  padding-top: 0 !important; 
}


/*** Customer Week 2022 Ezoic Tools Webinar ***/

.page-id-365314 .site-header {
  padding-bottom: 36px !important;
}

.page-id-365314 .site-main {
  padding-top: 0 !important;
}

.page-id-365314 .entry-header {
  display: none;
}

.page-id-365314 .entry-content {
  margin-top: 0 !important; 
}

.page-id-365314 .site-content {
  padding-top: 0 !important; 
}

/*** Customer Week 2022 Recap Webinar ***/

.page-id-365573 .site-header {
  padding-bottom: 36px !important;
}

.page-id-365573 .site-main {
  padding-top: 0 !important;
}

.page-id-365573 .entry-header {
  display: none;
}

.page-id-365573 .entry-content {
  margin-top: 0 !important; 
}

.page-id-365573 .site-content {
  padding-top: 0 !important; 
}

/*** Products Page ***/

.page-id-22 .site-header {
  padding-bottom: 36px !important;
}

.page-id-22 .site-main {
  padding-top: 0 !important;
}

.page-id-22 .entry-header {
  display: none;
}

.page-id-22 .entry-content {
  margin-top: 0 !important; 
}

.page-id-22 .site-content {
  padding-top: 0 !important; 
}

.green-text-shadow {
text-shadow: 3px 3px 20px #a2fa6e !important;
}

.hover-white a:hover {
  color: white !important;
}

.light-green-bg {
    background-color: rgba(148, 171, 130, 0.5) !important;
}

.green-tag {
text-align: center;
    font-style: normal;
    font-weight: 700;
    border-radius: 6px;
    background-color: #3a5a20;
    box-shadow: 0 1px 4px -2px #000;
    color: white !important;
    padding: 5px 10px;
    opacity: 0.87;
    letter-spacing: -1px;
}

@media all and (max-width: 650px) {
	.green-tag {
  width: 20% !important;
}
}

/*** Black Friday Page ***/

.page-id-364898 .site-header {
  padding-bottom: 36px !important;
}

.page-id-364898 .site-main {
  padding-top: 0 !important;
}

.page-id-364898 .entry-header {
  display: none;
}

.page-id-364898 .entry-content {
  margin-top: 0 !important; 
}

.page-id-364898 .site-content {
  padding-top: 0 !important; 
}


/*** post password ***/
.post-password-required {
  margin-top: 90px !important;
}

.password-content-text {
  font-size: 28px !important;
  padding-bottom: 50px !important;
}

.post-password-form {
	text-align: center;
	justify-content: center;
}

.password-btn {
  border-radius: 6px !important;
}

.post-password-label {
  font-size: 24px !important;
}

/*** Careers Page ***/

.page-id-931 .site-header {
  padding-bottom: 36px !important;
}

.page-id-931 .site-main {
  padding-top: 0 !important;
}

.page-id-931 .entry-header {
  display: none;
}

.page-id-931 .entry-content {
  margin-top: 0 !important; 
}

.page-id-931 .site-content {
  padding-top: 0 !important; 
}

.values-card-container {
    position: relative;
    width: 250px;
    height: 250px;
    z-index: 1;
    float: left;
    flex: 0 0 30%;
    margin: 20px;
}

.front-values-header {
    font-size: 22px;
    padding-top: 30px !important;
    letter-spacing: -1px !important;
    color: #403d39 !important;
}

.front-values-icon {
width: 75px;
    height: 75px;
}

#values-card {
border-radius: 6px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all .8s linear;
    box-shadow: 3px 3px 6px 3px rgb(0 0 0 / 20%);
}


#values-card:hover {
    transform: rotateY(180deg);
    box-shadow: -5px 5px 15px rgba(0,0,0, .3);
  }

#values-card .back-header {
  letter-spacing: -1px !important;
}

#values-card .perk-description {
  font-size: 18px !important;
    text-transform: none !important;
    text-align: center !important;
    padding-top: 20px !important;
    color: #403d39 !important;
    line-height: 1.5;
    font-style: normal !important;
    font-weight: 300 !important;
}


/*** Green Monday Page ***/

.page-id-346521 .site-header {
  padding-bottom: 36px !important;
}

.page-id-346521 .site-main {
  padding-top: 0 !important;
}

.page-id-346521 .entry-header {
  display: none;
}

.page-id-346521 .entry-content {
  margin-top: 0 !important; 
}

.page-id-346521 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Ads Page ***/

.page-id-781 .site-header {
  padding-bottom: 36px !important;
}

.page-id-781 .site-main {
  padding-top: 0 !important;
}

.page-id-781 .entry-header {
  display: none;
}

.page-id-781 .entry-content {
  margin-top: 0 !important; 
}

.page-id-781 .site-content {
  padding-top: 0 !important; 
}

/*** Blogs ***/

.blog-sidebar li {
  font-weight: 700 !important;
}

.blog nav .sub-menu {
  padding-top: 6px !important;
  padding-left: 0 !important;
}

.blog nav .sub-menu li {
	padding: 0 !important;
}


.single-post nav .sub-menu {
  padding-top: 6px !important;
  padding-left: 0 !important;
}

.single-post nav .sub-menu li {
	padding: 0 !important;
}

.comment-form-author input {
padding: 10px !important;
    border: 1px solid black !important;
    border-radius: 6px !important;
}

.comment-form-author input:focus {
border: 2px solid #5fa624 !important;
}

.comment-form-email input {
padding: 10px !important;
    border: 1px solid black !important;
    border-radius: 6px !important;
}

.comment-form-email input:focus {
border: 2px solid #5fa624 !important;
}

.comment-form-url input {
padding: 10px !important;
    border: 1px solid black !important;
    border-radius: 6px !important;
}

.comment-form-url input:focus {
border: 2px solid #5fa624 !important;
}

.comment-form-comment textarea {
border: 1px solid black !important;
    border-radius: 6px !important;
}

.comment-form-comment textarea:focus {
border: 2px solid #5fa624 !important;
}

.comment-form .form-submit .submit {
  border-radius: 6px !important;
}

.single-post article .entry-title {
  font-size: 44px !important;
  letter-spacing: -1px;
	line-height: 1.25em !important;
}


@media all and (max-width: 768px) {
.single-post article .entry-title {
font-size: 26px !important;
}
}

.single-post .entry-header {
  margin-bottom: 50px !important;
}

.ezoic-grid-wrapper {
  display: none !important;
}

.category .page-title {
    letter-spacing: -1px;
    color: #5fa624;
    font-size: 40px;
}

.category .archive-description {
    font-size: 26px;
}

.author .page-title {
    font-size: 46px !important;
    letter-spacing: -1px !important;
}

.author .archive-description {
  font-size: 24px !important;
}

/*** Access Now Ad Policy Requirements Page ***/

.page-id-366648 .site-header {
  padding-bottom: 36px !important;
}

.page-id-366648 .site-main {
  padding-top: 0 !important;
}

.page-id-366648 .entry-header {
  display: none;
}

.page-id-366648 .entry-content {
  margin-top: 0 !important; 
}

.page-id-366648 .site-content {
  padding-top: 0 !important; 
}


/*** Newsletter Page ***/

.page-id-366828 .site-header {
  padding-bottom: 36px !important;
}

.page-id-366828 .site-main {
  padding-top: 0 !important;
}

.page-id-366828 .entry-header {
  display: none;
}

.page-id-366828 .entry-content {
  margin-top: 0 !important; 
}

.page-id-366828 .site-content {
  padding-top: 0 !important; 
}

/*** Duplicate Home Page ***/

.page-id-366852 .site-header {
  padding-bottom: 36px !important;
}

.page-id-366852 .site-main {
  padding-top: 0 !important;
}

.page-id-366852 .entry-header {
  display: none;
}

.page-id-366852 .entry-content {
  margin-top: 0 !important; 
}

.page-id-366852 .site-content {
  padding-top: 0 !important; 
}

/*** Newsletter Blog Page Form ****/

.sib-form-block__button:hover {
  background-color: black !important;
}

.sib-form {
  padding: 0 !important;
}

#sib-container {
  padding: 5px !important;
}

.sib-form-block {
  padding: 0 !important;
}

.entry_errored .entry__error--primary {
margin-right: 20px !important;
    margin-left: 20px !important;
	padding: 5px !important;
}

.blog-sidebar ul {
  list-style: inside !important;
  padding-left: 20px !important;
}

.blog-sidebar .childeren {
  padding-top: 10px !important;
}

.blog-sidebar ul a {
  text-decoration: none !important;
}

.blog-sidebar ul li {
  padding: 10px 0px;
}

.search-form label {
  font-weight: 700 !important;
}

#block-35 {
  margin-bottom: 20px;
  text-decoration: underline;
	font-size: 20px;
}

#block-12 {
  margin-bottom: 20px;
  text-decoration: underline;
	font-size: 20px;
}

#block-19 a {
color: #5fa624;
}

.widget-title {
  font-size: 20px !important;
  text-decoration: underline;
}

.blog-sidebar li {
    font-weight: 600 !important;
}

.blog ul li strong {
    font-weight: 600 !important;
}

.blog .header-actions {
  list-style: none !important;
}

.blog .search-form>label {
	font-weight: 700;
  font-size: 20px;
}

.blog .sib-form .entry__label {
  color: #403d39 !important;
}

.blog .ezoic-grid-wrapper {
  display: none !important;
}

.tw-blog-image-above .entry-header .entry-title  {
  font-size: 20px !important;
  letter-spacing: -.5px;
	line-height: 1.25em !important;
}

.tw-blog-card-border .hentry:hover {
  border-color: #5fa624 !important;
	border: 2px solid;
}

.blog .posted-on {
  font-weight: 500 !important;
}

.blog .byline {
  font-weight: 500 !important;
}

.single-post ul {
  list-style: inside !important;
  padding-left: 20px !important;
}

.single-post ul a {
  text-decoration: none !important;
}

.single-post ul li {
  padding: 10px 0px;
}

.widget ul.children, .widget ul.sub-menu {
    padding-top: 10px !important;
}

.single-post .posted-on {
  font-weight: 500 !important;
}

.single-post .byline {
  font-weight: 500 !important;
}

.single-post ul li strong {
    font-weight: 600 !important;
}

.single-post .header-actions {
  list-style: none !important;
}

.single-post .search-form>label {
	font-weight: 700;
  font-size: 20px;
}

.single-post .sib-form .entry__label {
  color: #403d39 !important;
}

.single-post .ezoic-grid-wrapper {
  display: none !important;
}

#block-26 li {
  padding: 0 !important;
}


#menu-footer-2 {
  list-style: none !important;
  padding: 0 !important;
}

#menu-secondary-1 {
  list-style: none !important;
  padding: 0 !important;
}

#menu-footer-3  {
  list-style: none !important;
  padding: 0 !important;
}

.widget_nav_menu .widget-title {
	font-size: 18px !important;
  font-weight: 700 !important;
	text-decoration: none
}

/*** Video Highlight Reel Page ***/

.page-id-366394 .site-header {
  padding-bottom: 36px !important;
}

.page-id-366394 .site-main {
  padding-top: 0 !important;
}

.page-id-366394 .entry-header {
  display: none;
}

.page-id-366394 .entry-content {
  margin-top: 0 !important; 
}

.page-id-366394 .site-content {
  padding-top: 0 !important; 
}

.page-id-366394 .wpforms-field-label {
  font-size: 32px !important;
  margin-bottom: 50px !important;
}

.page-id-366394 .depth-1 input{
		width: 20px !important; 
		height: 20px !important;
}

#wpforms-367039-field_1 li {
		margin-bottom: 20px !important;
}

.page-id-366394 .wpforms-field-label-inline{
	font-size: 20px !important;
}

.page-id-366394 .wpforms-submit-container {
  margin-top: 40px !important;
}

.page-id-366394 .wpforms-submit-container button{
  padding: 10px 45px !important;
}

/*** Tapfiliate Tracking Code Removal ***/


/*** Former MediaVine Page ***/

.page-id-367120 .site-header {
  padding-bottom: 36px !important;
}

.page-id-367120 .site-main {
  padding-top: 0 !important;
}

.page-id-367120 .entry-header {
  display: none;
}

.page-id-367120 .entry-content {
  margin-top: 0 !important; 
}

.page-id-367120 .site-content {
  padding-top: 0 !important; 
}

/*** Newsletter Page ***/

.page-id-367619 .site-header {
  padding-bottom: 36px !important;
}

.page-id-367619 .site-main {
  padding-top: 0 !important;
}

.page-id-367619 .entry-header {
  display: none;
}

.page-id-367619 .entry-content {
  margin-top: 0 !important; 
}

.page-id-367619 .site-content {
  padding-top: 0 !important; 
}

.page-id-367619 .wp-block-latest-posts__post-title {
  letter-spacing: -1px !important;
}

.page-id-367619 .wp-block-latest-posts__post-title:hover {
  color: #5fa624 !important;
  text-decoration-style: solid !important;
}

.page-id-367619 .wp-block-latest-posts__post-author {
  color: white !important;
	font-weight: 600 !important;
}

.page-id-367619 .wp-block-latest-posts__post-date {
	font-weight: 600 !important;
}

.page-id-367619 .sib-form-block__button:hover {
	background-color: #403d39 !important;
}

#ezoic-pub-ad-placeholder-105 {
  display: none !important;
}

/*** Former AdThrive Page ***/

.page-id-367281 .site-header {
  padding-bottom: 36px !important;
}

.page-id-367281 .site-main {
  padding-top: 0 !important;
}

.page-id-367281 .entry-header {
  display: none;
}

.page-id-367281 .entry-content {
  margin-top: 0 !important; 
}

.page-id-367281 .site-content {
  padding-top: 0 !important; 
}

/*** GateKeeper Page ***/

.page-id-367843 .site-header {
  padding-bottom: 36px !important;
}

.page-id-367843 .site-main {
  padding-top: 0 !important;
}

.page-id-367843 .entry-header {
  display: none;
}

.page-id-367843 .entry-content {
  margin-top: 0 !important; 
}

.page-id-367843 .site-content {
  padding-top: 0 !important; 
}

.hover-green mark:hover {
  color: #5fa624 !important;
}

.no-column-gap {
  column-gap: 0em !important;
}

/*** Gatekeepere Script ***/
.panel_box svg{
  width: 1px;
	height: 1px;
}

.cmp-container {
	top: 50%;
	left: 50%;
	max-width: 800px !important;
}

.cmp-copy-text input{
  width: 90%;
	padding-right: 0 !important;
}

.cmp-copy-text button {
  width: 10%;
	padding-left: 0 !important;
}


.label {
	padding: 10px;
	font-size: 18px;
	color: #111;
}
.cmp-copy-text {
	position: relative;
	padding: 10px;
	background: #fff;
	border: 1px solid #ddd;
	border-radius: 10px;
	display: flex;
}
.cmp-copy-text input.text {
	padding: 10px;
	font-size: 18px;
	color: #555;
	border: none;
	outline: none;
}
.cmp-copy-text button {
	padding: 10px;
	background: #5784f5;
	color: #fff;
	font-size: 18px;
	border: none;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
}

.cmp-copy-text button:active {
	background: #809ce2;
}
.cmp-copy-text button:before {
	content: "Copied";
	position: absolute;
	top: -45px;
	right: 0px;
	background: #5c81dc;
	padding: 8px 10px;
	border-radius: 20px;
	font-size: 15px;
	display: none;
}
.cmp-copy-text button:after {
	content: "";
	position: absolute;
	top: -20px;
	right: 25px;
	width: 10px;
	height: 10px;
	background: #5c81dc;
	transform: rotate(45deg);
	display: none;
}
.cmp-copy-text.active button:before,
.cmp-copy-text.active button:after {
	display: block;
}

.page-id-367977 .site-header {
  padding-bottom: 36px !important;
}

.page-id-367977 .site-main {
  padding-top: 0 !important;
}

.page-id-367977 .entry-header {
  display: none;
}

.page-id-367977 .entry-content {
  margin-top: 0 !important; 
}

.page-id-367977 .site-content {
  padding-top: 0 !important; 
}

.page-id-367843 .wp-container-3 {
  display: block !important;
}

/*** Highlight Reels Winners Page ***/

.page-id-368251 .site-header {
  padding-bottom: 36px !important;
}

.page-id-368251 .site-main {
  padding-top: 0 !important;
}

.page-id-368251 .entry-header {
  display: none;
}

.page-id-368251 .entry-content {
  margin-top: 0 !important; 
}

.page-id-368251 .site-content {
  padding-top: 0 !important; 
}

/*** Access Now Setup Options Page ***/

.page-id-367068 .site-header {
  padding-bottom: 36px !important;
}

.page-id-367068 .site-main {
  padding-top: 0 !important;
}

.page-id-367068 .entry-header {
  display: none;
}

.page-id-367068 .entry-content {
  margin-top: 0 !important; 
}

.page-id-367068 .site-content {
  padding-top: 0 !important; 
}

/*** Affiliate Gathering 2023 Page ***/

.page-id-368574 .site-header {
  padding-bottom: 36px !important;
}

.page-id-368574 .site-main {
  padding-top: 0 !important;
}

.page-id-368574 .entry-header {
  display: none;
}

.page-id-368574 .entry-content {
  margin-top: 0 !important; 
}

.page-id-368574 .site-content {
  padding-top: 0 !important; 
}

.affiliate-event-link {
  font-weight: 500 !important;
  text-decoration-style: solid !important;
}

.affiliate-event-link:hover {
  color: #403d39 !important;
}

.page-id-368574 .ezoic-autoinsert-video {
  display: none !important;
}

/*** Affiliate Terms ***/

.page-id-368845 .site-header {
  padding-bottom: 36px !important;
}

.page-id-368845 .site-main {
  padding-top: 0 !important;
}

.page-id-368845 .entry-header {
  display: none;
}

.page-id-368845 .entry-content {
  margin-top: 0 !important; 
}

.page-id-368845 .site-content {
  padding-top: 0 !important; 
}


/*** Ezoic Carlsbad Career ***/

.page-id-368961 .site-header {
  padding-bottom: 36px !important;
}

.page-id-368961 .site-main {
  padding-top: 0 !important;
}

.page-id-368961 .entry-header {
  display: none;
}

.page-id-368961 .entry-content {
  margin-top: 0 !important; 
}

.page-id-368961 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Newcastle Career ***/

.page-id-369002 .site-header {
  padding-bottom: 36px !important;
}

.page-id-369002 .site-main {
  padding-top: 0 !important;
}

.page-id-369002 .entry-header {
  display: none;
}

.page-id-369002 .entry-content {
  margin-top: 0 !important; 
}

.page-id-369002 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic London Career ***/

.page-id-369023 .site-header {
  padding-bottom: 36px !important;
}

.page-id-369023 .site-main {
  padding-top: 0 !important;
}

.page-id-369023 .entry-header {
  display: none;
}

.page-id-369023 .entry-content {
  margin-top: 0 !important; 
}

.page-id-369023 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Mainz Career ***/

.page-id-369032 .site-header {
  padding-bottom: 36px !important;
}

.page-id-369032 .site-main {
  padding-top: 0 !important;
}

.page-id-369032 .entry-header {
  display: none;
}

.page-id-369032 .entry-content {
  margin-top: 0 !important; 
}

.page-id-369032 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Edmonton Career ***/

.page-id-369040 .site-header {
  padding-bottom: 36px !important;
}

.page-id-369040 .site-main {
  padding-top: 0 !important;
}

.page-id-369040 .entry-header {
  display: none;
}

.page-id-369040 .entry-content {
  margin-top: 0 !important; 
}

.page-id-369040 .site-content {
  padding-top: 0 !important; 
}

/*** Ezoic Empowers ***/

.page-id-369304 .site-header {
  padding-bottom: 36px !important;
}

.page-id-369304 .site-main {
  padding-top: 0 !important;
}

.page-id-369304 .entry-header {
  display: none;
}

.page-id-369304 .entry-content {
  margin-top: 0 !important; 
}

.page-id-369304 .site-content {
  padding-top: 0 !important; 
}

/** Ezoic Empowers Terms **/

.page-id-369570 .site-header {
  padding-bottom: 36px !important;
}

.page-id-369570 .site-main {
  padding-top: 0 !important;
}

.page-id-369570 .entry-header {
  display: none;
}

.page-id-369570 .entry-content {
  margin-top: 0 !important; 
}

.page-id-369570 .site-content {
  padding-top: 0 !important; 
}

/** Ezoic Careers Benefits **/

.page-id-369628 .site-header {
  padding-bottom: 36px !important;
}

.page-id-369628 .site-main {
  padding-top: 0 !important;
}

.page-id-369628 .entry-header {
  display: none;
}

.page-id-369628 .entry-content {
  margin-top: 0 !important; 
}

.page-id-369628 .site-content {
  padding-top: 0 !important; 
}

.careers-flipcards img {
  width: 100px !important;
  height: 100px !important;
}

/** Ezoic Careers Benefits **/

.page-id-370245 .site-header {
  padding-bottom: 36px !important;
}

.page-id-370245 .site-main {
  padding-top: 0 !important;
}

.page-id-370245 .entry-header {
  display: none;
}

.page-id-370245 .entry-content {
  margin-top: 0 !important; 
}

.page-id-370245 .site-content {
  padding-top: 0 !important; 
}

/*** Terms ***/

.page-id-366375 .has-inline-color{
background: none !important;
}

.page-id-366375 .sp-tab__tab-content a {
text-decoration: underline !important;
}

/** AI Webb Webinar **/

.page-id-370459 .site-header {
  padding-bottom: 36px !important;
}

.page-id-370459 .site-main {
  padding-top: 0 !important;
}

.page-id-370459 .entry-header {
  display: none;
}

.page-id-370459 .entry-content {
  margin-top: 0 !important; 
}

.page-id-370459 .site-content {
  padding-top: 0 !important; 
}

.page-id-370459 aside {
  margin-top: 0 !important; 
}

/** New Affiliate Page **/

.page-id-370881 .site-header {
  padding-bottom: 36px !important;
}

.page-id-370881 .site-main {
  padding-top: 0 !important;
}

.page-id-370881 .entry-header {
  display: none;
}

.page-id-370881 .entry-content {
  margin-top: 0 !important; 
}

.page-id-370881 .site-content {
  padding-top: 0 !important; 
}
		</style>
<style id="wpforms-css-vars-root">
				:root {
					--wpforms-field-border-radius: 3px;
--wpforms-field-background-color: #ffffff;
--wpforms-field-border-color: rgba( 0, 0, 0, 0.25 );
--wpforms-field-text-color: rgba( 0, 0, 0, 0.7 );
--wpforms-label-color: rgba( 0, 0, 0, 0.85 );
--wpforms-label-sublabel-color: rgba( 0, 0, 0, 0.55 );
--wpforms-label-error-color: #d63637;
--wpforms-button-border-radius: 3px;
--wpforms-button-background-color: #066aab;
--wpforms-button-text-color: #ffffff;
--wpforms-field-size-input-height: 43px;
--wpforms-field-size-input-spacing: 15px;
--wpforms-field-size-font-size: 16px;
--wpforms-field-size-line-height: 19px;
--wpforms-field-size-padding-h: 14px;
--wpforms-field-size-checkbox-size: 16px;
--wpforms-field-size-sublabel-spacing: 5px;
--wpforms-field-size-icon-size: 1;
--wpforms-label-size-font-size: 16px;
--wpforms-label-size-line-height: 19px;
--wpforms-label-size-sublabel-font-size: 14px;
--wpforms-label-size-sublabel-line-height: 17px;
--wpforms-button-size-font-size: 17px;
--wpforms-button-size-height: 41px;
--wpforms-button-size-padding-h: 15px;
--wpforms-button-size-margin-top: 10px;

				}
			</style><script type="text/javascript">
var ezoTemplate = 'old_site_noads';
var ezouid = '1';
var ezoFormfactor = '1';
</script><script data-ezscrex="false" type="text/javascript">
var soc_app_id = '0';
var did = 144551;
var ezdomain = 'ezoic.com';
var ezoicSearchable = 1;
</script>
<script data-ezscrex="false" type="text/javascript" data-cfasync="false">var _ezaq = window._ezaq = Object.assign({}, typeof window._ezaq !== "undefined" ? window._ezaq : {}, {"ab_test_id":"mod1-c","ad_cache_level":1,"ad_lazyload_version":0,"ad_load_version":0,"city":"Barcelona","country":"ES","days_since_last_visit":-1,"domain_id":144551,"engaged_time_visit":0,"ezcache_level":2,"ezcache_skip_code":0,"form_factor_id":1,"framework_id":1,"has_bad_image":0,"has_bad_words":0,"is_embed":false,"is_return_visitor":false,"is_sitespeed":0,"last_page_load":"","last_pageview_id":"","lt_cache_level":0,"metro_code":0,"page_ad_positions":"","page_view_count":0,"page_view_id":"7cefc30e-c99f-48bc-41b5-4eda66e95d61","position_selection_id":0,"postal_code":"08034","pv_event_count":0,"response_size_orig":317451,"response_time_orig":13,"serverid":"i-06d3f02bfd710027e","state":"B","t_epoch":1706726955,"template_id":120,"time_on_site_visit":0,"url":"https://www.ezoic.com/ezoic-ads/","visit_uuid":"f8014efc-ea63-4fdb-6fb8-dab2cfb22b53","word_count":1557,"worst_bad_word_level":0});var _ezExtraQueries = "&ez_orig=1";</script>
<script data-ezscrex="false" data-pagespeed-no-defer data-cfasync="false">function create_ezolpl() {
	var d = new Date();
	d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
	var expires = "expires=" + d.toUTCString();
	__ez.ck.setByCat(
	  "ezux_lpl_144551",
	  new Date().getTime() +
		"|" +
		_ezaq.page_view_id +
		"|" +
		_ezaq.is_return_visitor +
		"; " +
		expires,
	  "understand_audiences",
	  false
	);
  }
  function attach_ezolpl() {
	if (document.readyState === "complete") {
	  create_ezolpl();
	  return;
	}
	window.addEventListener("load", create_ezolpl);
  }  

__ez.queue.addFunc("attach_ezolpl", "attach_ezolpl", null, false, ['/detroitchicago/boise.js'], true, false, false, false);
</script><script>
// templated by golang 
function __setCMPv2RequestData() {
    window._CMPv2RequestData = {
	    "language": "en",
	    "stylingLogo": "//g.ezodn.com/utilcave_com/middleton/img.webp?dirname=ezoic_com&amp;img=/logo/ezoic_com"
    };
}
__setCMPv2RequestData();</script>
<script type="text/javascript">(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1;</script>
<script type="text/javascript">var cmpIsOn = true;</script></head>
<body class="page-template-default page page-id-781 custom-background wp-custom-logo wp-embed-responsive is-light-theme has-background-white no-js singular has-main-navigation tw-header-layout-menu-right tw-header-break-mobile tw-header-padding-medium tw-nav-spacing-large tw-nav-hover-none tw-no-meta-label tw-title-text-width tw-title-center tw-title-no-border"><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T63X57K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script src="https://the.gatekeeperconsent.com/v2/cmp.js?v=150" id="cmpjs" async="true"></script>



<script type="text/javascript" id="pap_x2s6df8d" src="https://ezoic.postaffiliatepro.com/scripts/jfgl45"></script>
<script type="text/javascript">
if (window.location.search.includes('a_aid=')) {
	PostAffTracker.setAccountId('default1');
	try {
	PostAffTracker.track();
	} catch (err) { }
}
</script>
<div id="page" class="site">
<a class="skip-link screen-reader-text" href="#content">
Skip to content </a>
<header id="masthead" class="site-header has-logo has-menu">
<div class="site-branding">
<div class="site-logo"><a href="https://www.ezoic.com/" class="custom-logo-link" rel="home"><img width="597" height="199" src="https://www.ezoic.com/wp-content/uploads/2022/09/cropped-newezoiclogo.png" class="custom-logo" alt="ezoic" decoding="async" fetchpriority="high" srcset="https://www.ezoic.com/wp-content/uploads/2022/09/cropped-newezoiclogo.png 597w, https://www.ezoic.com/wp-content/uploads/2022/09/cropped-newezoiclogo-300x100.png 300w" sizes="(max-width: 597px) 100vw, 597px" /></a></div>
<p class="screen-reader-text"><a href="https://www.ezoic.com/">Ezoic</a></p>
</div>
<nav id="site-navigation" class="primary-navigation" aria-label="Primary menu">
<div class="menu-button-container">
<button id="primary-mobile-menu" class="button" aria-controls="primary-menu-list" aria-expanded="false">
<span class="dropdown-icon open">Menu <svg class="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 6H19.5V7.5H4.5V6ZM4.5 12H19.5V13.5H4.5V12ZM19.5 18H4.5V19.5H19.5V18Z" fill="currentColor"></path></svg> </span>
<span class="dropdown-icon close">Close <svg class="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.9394L5.53033 4.46973L4.46967 5.53039L10.9393 12.0001L4.46967 18.4697L5.53033 19.5304L12 13.0607L18.4697 19.5304L19.5303 18.4697L13.0607 12.0001L19.5303 5.53039L18.4697 4.46973L12 10.9394Z" fill="currentColor"></path></svg> </span>
</button>
</div>
<div class="primary-menu-container"><ul id="primary-menu-list" class="menu-wrapper"><li id="menu-item-340271" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-340271"><a href="/products">Products</a></li>
<li id="menu-item-1863" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1863"><a href="#">Resources</a><button class="sub-menu-toggle" aria-expanded="false" onclick="twentytwentyoneExpandSubMenu(this)"><span class="icon-plus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></span><span class="icon-minus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11h12v2H6z" fill="currentColor"></path></svg></span><span class="screen-reader-text">Open menu</span></button>
<ul class="sub-menu">
<li id="menu-item-360573" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-360573"><a href="https://www.ezoic.com/ezoic-access-now/">Access Now</a></li>
<li id="menu-item-1869" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1869"><a href="https://adrevenueindex.ezoic.com/">Ad Revenue Index</a></li>
<li id="menu-item-363808" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-363808"><a href="https://www.ezoic.com/advertisers/">Advertisers</a></li>
<li id="menu-item-351687" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-351687"><a href="https://www.ezoic.com/affiliate/">Affiliate Program</a></li>
<li id="menu-item-340354" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-340354"><a href="https://www.ezoic.com/case-studies/">Ezoic Case Studies</a></li>
<li id="menu-item-340355" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-340355"><a href="https://www.ezoic.com/ezoic-reviews/">Ezoic Reviews</a></li>
<li id="menu-item-1866" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1866"><a href="/faq/">FAQs</a></li>
<li id="menu-item-1864" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1864"><a href="/pricing/">Pricing</a></li>
<li id="menu-item-367703" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-367703"><a href="https://www.publisherlab.org/">Publisher Lab Podcast</a></li>
<li id="menu-item-353153" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-353153"><a href="https://www.ezoic.com/ezoic-publishers/">Publisher Profiles</a></li>
<li id="menu-item-1868" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1868"><a href="https://ezoicstatus.com/">Status</a></li>
<li id="menu-item-1870" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1870"><a href="https://support.ezoic.com/">Support</a></li>
<li id="menu-item-1867" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1867"><a href="https://wordpress.ezoic.com/">WordPress</a></li>
</ul>
</li>
<li id="menu-item-1862" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1862"><a href="https://www.ezoic.com/about/">About</a><button class="sub-menu-toggle" aria-expanded="false" onclick="twentytwentyoneExpandSubMenu(this)"><span class="icon-plus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></span><span class="icon-minus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11h12v2H6z" fill="currentColor"></path></svg></span><span class="screen-reader-text">Open menu</span></button>
<ul class="sub-menu">
<li id="menu-item-1871" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1871"><a href="/about/">About Us</a></li>
<li id="menu-item-1872" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1872"><a href="/careers/">Careers</a></li>
<li id="menu-item-358324" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-358324"><a href="https://www.ezoic.com/ezoic-cares-csr/">Ezoic Cares</a></li>
<li id="menu-item-350305" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-350305"><a href="https://www.ezoic.com/international-team/">International Team</a></li>
<li id="menu-item-1873" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1873"><a href="/press/">Press</a></li>
<li id="menu-item-338212" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-338212"><a href="/certified-seamless-with-ezoic/">Seamless Partners</a></li>
</ul>
</li>
<li id="menu-item-1920" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1920"><a href="/blogs/">Blogs</a><button class="sub-menu-toggle" aria-expanded="false" onclick="twentytwentyoneExpandSubMenu(this)"><span class="icon-plus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></span><span class="icon-minus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11h12v2H6z" fill="currentColor"></path></svg></span><span class="screen-reader-text">Open menu</span></button>
<ul class="sub-menu">
<li id="menu-item-367713" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-367713"><a href="https://www.ezoic.com/blogs/">Blog Posts</a></li>
<li id="menu-item-367714" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-367714"><a href="https://www.ezoic.com/blogs/newsletter/">Newsletter</a></li>
</ul>
</li>
<li id="menu-item-335518" class="flags menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-335518"><a href="#">|</a><button class="sub-menu-toggle" aria-expanded="false" onclick="twentytwentyoneExpandSubMenu(this)"><span class="icon-plus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"></path></svg></span><span class="icon-minus"><svg class="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11h12v2H6z" fill="currentColor"></path></svg></span><span class="screen-reader-text">Open menu</span></button>
<ul class="sub-menu">
<li id="menu-item-335527" class="flagsfr menu-item menu-item-type-custom menu-item-object-custom menu-item-335527"><a href="/fr/">Français</a></li>
<li id="menu-item-335526" class="flagsde menu-item menu-item-type-custom menu-item-object-custom menu-item-335526"><a href="/de-lang/">Deutsch</a></li>
<li id="menu-item-338985" class="flagsit menu-item menu-item-type-custom menu-item-object-custom menu-item-338985"><a href="/it-lang/">Italiano</a></li>
<li id="menu-item-335528" class="flagses menu-item menu-item-type-custom menu-item-object-custom menu-item-335528"><a href="/es/">Español</a></li>
<li id="menu-item-335529" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-335529"><a href="/ru-lang/">Русский</a></li>
</ul>
</li>
<li id="menu-item-32" class="strong menu-item menu-item-type-custom menu-item-object-custom menu-item-32"><a href="https://login.ezoic.com/">Login</a></li>
</ul><ul class="header-actions"><li class="menu-search"> <form role="search" method="get" class="search-form" action="https://www.ezoic.com/">
<label for="search-form-1" class="screen-reader-text">Search…</label>
<input type="search" autocomplete="off" id="search-form-1" placeholder="Search…" class="search-field" value name="s" />
<button type="submit" class="search-submit" aria-label="Search">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.5 11.4a8.323 8.323 0 008.25 8.25 7.86 7.86 0 005.4-2.1l5.1 4.35 1.5-1.65-5.1-4.5a7.937 7.937 0 001.35-4.5A8.323 8.323 0 009.75 3a8.355 8.355 0 00-8.25 8.4zm2.25-.15a6 6 0 116 6 6.018 6.018 0 01-6-6z"></path></svg>
</button>
</form>
</li><li id="menu-item-15" class="menu-item menu-item-type-custom menu-item-object-custom menu-button menu-item-15"><a href="https://pubdash.ezoic.com/join">Get Started</a></li>
</ul></div> </nav>
</header>
<div id="content" class="site-content">
<div id="primary" class="content-area">
<main id="main" class="site-main">
<article id="post-781" class="post-781 page type-page status-publish hentry entry">
<header class="entry-header alignwide">
<h1 class="entry-title">Monetization</h1>
</header>
<div class="entry-content">
<div class="wp-block-group alignfull tw-mt-7 is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns alignwide are-vertically-aligned-center tw-cols-stack-md tw-gutter-large is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<h2 class="wp-block-heading has-mobile-text-align-center" style="font-style:normal;font-weight:700;letter-spacing:-2px">Website Monetization</h2>
<p class="tw-mt-0 has-mobile-text-align-center has-text-color has-normal-font-size" style="color:#5fa624;font-style:normal;font-weight:600;letter-spacing:-1px"><strong>INTELLIGENTLY INCREASE REVENUE &amp; BALANCE UX</strong></p><div id="ezoic-pub-ad-placeholder-105" data-inserter-version="2"></div>
<p class="has-mobile-text-align-center has-normal-font-size" style="font-style:normal;font-weight:500;line-height:1.5">Advertisers treat visitors differently. Most websites deliver visitors the same experiences, ad placements, and monetization strategies, even when adapting these attributes could result in much higher revenue.</p>
<div class="wp-block-buttons mb-align-item-center has-mobile-text-align-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://pubdash.ezoic.com/join" style="border-radius:6px" target="_blank" rel="noopener">START FREE TRIAL</a></div>
</div>
</div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow" style="--col-width:50%;flex-basis:50%">
<div id="humix-vid-16ee61a6acc9470fe41971e7841ae98e94cb4af1" style="width:560px;height:315px;" props="autoplay=0"><script async src="https://www.humix.com/video.js"></script></div>
</div>
</div>
</div></div>
<div class="wp-block-group alignfull is-style-default has-white-background-color has-background is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<hr class="wp-block-separator has-alpha-channel-opacity tw-mb-9" />
<h2 class="wp-block-heading alignfull has-text-align-center tw-mb-9 has-text-color has-h-3-font-size" id="a-i-means-brilliant-decisions-on-every-pageview" style="color:#5fa624;font-style:normal;font-weight:700;letter-spacing:-1px"><em>A.I.</em> means brilliant decisions on every pageview.</h2>
<div class="wp-block-columns alignwide tw-gutter-large is-layout-flex wp-container-core-columns-layout-4 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<div class="wp-block-columns tw-cols-stack-md is-layout-flex wp-container-core-columns-layout-2 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large"><img decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/ai-icon-2-1.png" alt class="wp-image-1665" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:66.66%;flex-basis:66.66%">
<h4 class="wp-block-heading has-mobile-text-align-center has-small-font-size" id="automate-sophisticated-decision-making" style="font-style:normal;font-weight:800">AUTOMATE SOPHISTICATED DECISION-MAKING</h4>
<p class="has-mobile-text-align-center has-small-font-size" style="font-style:normal;font-weight:500;line-height:1.5">Real machine learning adapts ads, layouts, and frameworks to maximize the revenue of each visit according to exact testing specifications and preferences.</p><div id="ezoic-pub-ad-placeholder-113" data-inserter-version="2"></div>
</div>
</div>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<div class="wp-block-columns tw-cols-stack-md is-layout-flex wp-container-core-columns-layout-3 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large"><img decoding="async" width="49" height="49" src="https://ezoic.com/wp-content/uploads/2021/06/Money-icon-3.png" alt class="wp-image-1666" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:66.66%;flex-basis:66.66%">
<h4 class="wp-block-heading has-mobile-text-align-center has-small-font-size" id="increase-revenue-protect-ux" style="font-style:normal;font-weight:800">INCREASE REVENUE, PROTECT UX</h4>
<p class="has-mobile-text-align-center has-small-font-size" style="font-style:normal;font-weight:500;line-height:1.5">Websites can use Ezoic to increase revenue, improve UX, and automate optimizations that are impossible for humans to scale.</p>
</div>
</div>
<p></p>
</div>
</div>
<div class="wp-block-buttons alignfull tw-mt-8 is-horizontal is-content-justification-center is-layout-flex wp-container-core-buttons-layout-2 wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ezoic-adapts-using-ai/" style="border-radius:6px" target="_blank" rel="noreferrer noopener">SHOW ME HOW IT WORKS</a></div>
</div>
<hr class="wp-block-separator has-alpha-channel-opacity tw-mt-9" />
</div></div>
<div class="wp-block-group alignfull is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h2 class="wp-block-heading alignfull has-text-align-center has-text-color" id="key-monetization-features" style="color:#403d39;font-style:normal;font-weight:700;letter-spacing:-2px">KEY MONETIZATION FEATURES</h2>
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile" style="grid-template-columns:auto 44%"><div class="wp-block-media-text__content">
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-5 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Drag-and-drop ad testing locations using Ezoic’s Chrome Extension</p><div id="ezoic-pub-ad-placeholder-114" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-6 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Automatically trigger multivariate testing to run thousands of experiments at once</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-7 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Choose goals (maximize revenue, balance UX) and let Ezoic optimize each visit around them</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-8 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Test thousands of ad networks automatically, link existing relationships, and let Ezoic control bid competition for each visitor</p>
<p></p><div id="ezoic-pub-ad-placeholder-115" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ad-tester-details/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
<h3 class="wp-block-heading has-text-align-left has-mobile-text-align-center" id="ad-tester" style="font-size:28px"><mark style="background-color:rgba(0, 0, 0, 0);color:#5fa625" class="has-inline-color">AD TESTER</mark></h3>
</div><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="920" height="551" src="https://ezoic.com/wp-content/uploads/2021/05/adtesterdash-e1585075186370-920x551-2.jpeg" alt class="wp-image-805 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/adtesterdash-e1585075186370-920x551-2.jpeg 920w, https://www.ezoic.com/wp-content/uploads/2021/05/adtesterdash-e1585075186370-920x551-2-300x180.jpeg 300w, https://www.ezoic.com/wp-content/uploads/2021/05/adtesterdash-e1585075186370-920x551-2-768x460.jpeg 768w" sizes="(max-width: 920px) 100vw, 920px" /></figure></div>
<div class="wp-block-media-text alignwide is-stacked-on-mobile"><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="1000" height="800" src="https://ezoic.com/wp-content/uploads/2021/05/ad-exchange-img.png" alt class="wp-image-806 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/ad-exchange-img.png 1000w, https://www.ezoic.com/wp-content/uploads/2021/05/ad-exchange-img-300x240.png 300w, https://www.ezoic.com/wp-content/uploads/2021/05/ad-exchange-img-768x614.png 768w" sizes="(max-width: 1000px) 100vw, 1000px" /></figure><div class="wp-block-media-text__content">
<h3 class="wp-block-heading has-mobile-text-align-center" id="implement-top-ad-exchanges-premium-networks-header-bidding" style="font-size:28px"><mark style="background-color:rgba(0, 0, 0, 0);color:#5fa625" class="has-inline-color">IMPLEMENT TOP AD EXCHANGES, PREMIUM NETWORKS, HEADER BIDDING</mark></h3>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-9 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.4">Access to Google Ad Exchange</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-10 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">A.I. ad inventory to drive up bids.<strong> <a href="https://www.ezoic.com/machine-learning-technical-documentation/" class="ek-link">Learn </a></strong><a href="https://www.ezoic.com/machine-learning-technical-documentation/" class="ek-link"><strong>More</strong></a></p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-11 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Pre-configured Header Bidding &amp; access to top-performing ad networks. <meta charset="utf-8" /><strong> <a href="https://www.ezoic.com/machine-learning-technical-documentation/" class="ek-link">Learn </a><a href="https://www.ezoic.com/header-bidding-technical-documentation/" class="ek-link">More</a></strong></p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-12 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Link and mediate existing ad networks (like AdSense) to compete. <meta charset="utf-8" /><strong> <a href="https://www.ezoic.com/ad-mediation/" class="ek-link">Learn</a><a href="https://www.ezoic.com/machine-learning-technical-documentation/" class="ek-link"> </a></strong><a href="https://www.ezoic.com/machine-learning-technical-documentation/" class="ek-link"><strong>More</strong></a></p><div id="ezoic-pub-ad-placeholder-116" data-inserter-version="2"></div>
</div>
</div>
</div></div>
</div></div>
</div></div>
<div class="wp-block-group alignfull tw-mb-0 is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile tw-stack-md" style="grid-template-columns:auto 49%"><div class="wp-block-media-text__content">
<h2 class="wp-block-heading has-mobile-text-align-center" id="big-data-analytics" style="font-size:28px"><mark style="background-color:rgba(0, 0, 0, 0);color:#5fa625" class="has-inline-color">BIG DATA ANALYTICS</mark></h2>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-13 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Tie revenue to landing pages, scroll depth, and word count</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-14 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Learn how valuable different content categories are on your site</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-15 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">See which writers generate the most revenue and most engaging content</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-16 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Objectively measure the ROI of SEO efforts</p><div id="ezoic-pub-ad-placeholder-117" data-inserter-version="2"></div>
<p></p>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/big-data-analytics/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
</div><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="1000" height="900" src="https://ezoic.com/wp-content/uploads/2021/05/bigdatahero1.jpeg" alt class="wp-image-807 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/bigdatahero1.jpeg 1000w, https://www.ezoic.com/wp-content/uploads/2021/05/bigdatahero1-300x270.jpeg 300w, https://www.ezoic.com/wp-content/uploads/2021/05/bigdatahero1-768x691.jpeg 768w" sizes="(max-width: 1000px) 100vw, 1000px" /></figure></div>
<div class="wp-block-media-text alignwide is-stacked-on-mobile tw-stack-md" style="grid-template-columns:48% auto"><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="1024" height="832" src="https://ezoic.com/wp-content/uploads/2021/05/Video-Hero-1024x832.png" alt class="wp-image-808 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/Video-Hero-1024x832.png 1024w, https://www.ezoic.com/wp-content/uploads/2021/05/Video-Hero-300x244.png 300w, https://www.ezoic.com/wp-content/uploads/2021/05/Video-Hero-768x624.png 768w, https://www.ezoic.com/wp-content/uploads/2021/05/Video-Hero.png 1419w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure><div class="wp-block-media-text__content">
<h2 class="wp-block-heading has-mobile-text-align-center has-text-color" id="video-player" style="color:#5fa625;font-size:28px">VIDEO PLAYER</h2>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-17 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Videos hosted directly on <em>your</em> site and indexed in search engine results</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-18 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Improve SEO by intelligently adding video content to your site when it adds value</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-19 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Maximized revenue from self-hosting and advertisers competing for ad inventory</p><div id="ezoic-pub-ad-placeholder-118" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-20 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Easy-to-use interface for uploading, inserting, and testing videos on different pages</p>
<p></p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-21 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:10%;flex-basis:10%"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-4.png" alt class="wp-image-1324" width="32" height="32" /></figure></div></div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center" style="line-height:1.5">Easy-to-use interface for uploading, inserting, and testing videos on different pages</p>
<p></p><div id="ezoic-pub-ad-placeholder-119" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/video-player/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
</div></div>
<div class="wp-block-group alignwide tw-mb-9 is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-26 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<h2 class="wp-block-heading alignwide has-mobile-text-align-center" id="grow-faster-with-grants-investments-from-ezoic">Grow Faster With <span style="color:#5ca731" class="has-inline-color">Grants &amp; Investments</span> From Ezoic</h2>
<div class="wp-block-columns is-layout-flex wp-container-core-columns-layout-22 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:25%;flex-basis:25%"><div class="wp-block-image caption-align-center is-style-default">
<figure class="aligncenter size-full"><img loading="lazy" decoding="async" width="96" height="100" src="https://www.ezoic.com/wp-content/uploads/2021/11/growthgrant.png" alt="ezoic grants" class="wp-image-342632" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<p class="has-mobile-text-align-center has-medium-font-size">Ezoic re-invests in customers via <a href="https://levels.ezoic.com/grants/" class="ek-link" target="_blank" rel="noopener">grants and other investments</a></p>
</div>
</div>
<div class="wp-block-columns is-layout-flex wp-container-core-columns-layout-23 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:25%;flex-basis:25%"><div class="wp-block-image caption-align-center is-style-default">
<figure class="aligncenter size-full"><img loading="lazy" decoding="async" width="96" height="100" src="https://www.ezoic.com/wp-content/uploads/2021/11/investment.png" alt class="wp-image-342633" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<p class="has-mobile-text-align-center has-medium-font-size"><a href="https://www.ezoic.com/3-ways-publishers-can-score-big-with-our-recent-12-4-million-customer-investment/" class="ek-link">Over $12.4M committed to customers</a> to fund further site growth</p>
</div>
</div>
<div class="wp-block-columns is-layout-flex wp-container-core-columns-layout-24 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:25%;flex-basis:25%"><div class="wp-block-image caption-align-center is-style-default">
<figure class="aligncenter size-full"><img loading="lazy" decoding="async" width="96" height="100" src="https://www.ezoic.com/wp-content/uploads/2021/11/investment-type.png" alt class="wp-image-342634" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<p class="has-mobile-text-align-center has-medium-font-size">Avg. sites see 50-250% growth in revenue and 90% YoY growth in traffic</p>
</div>
</div>
<div class="wp-block-columns is-layout-flex wp-container-core-columns-layout-25 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:25%;flex-basis:25%"><div class="wp-block-image caption-align-center is-style-default">
<figure class="aligncenter size-full"><img loading="lazy" decoding="async" width="96" height="100" src="https://www.ezoic.com/wp-content/uploads/2021/11/gurantee.png" alt class="wp-image-342651" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<p class="has-mobile-text-align-center has-medium-font-size">Ezoic Levels provides the <a href="https://levels.ezoic.com/ad-partners/" class="ek-link" target="_blank" rel="noopener">best ad partners and guarantees highest earning display ads</a> available</p><div id="ezoic-pub-ad-placeholder-120" data-inserter-version="2"></div>
</div>
</div>
</div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<figure class="wp-block-image size-full is-style-default"><img loading="lazy" decoding="async" width="800" height="900" src="https://www.ezoic.com/wp-content/uploads/2021/11/collage-grant-winners-2.png" alt class="wp-image-342649" srcset="https://www.ezoic.com/wp-content/uploads/2021/11/collage-grant-winners-2.png 800w, https://www.ezoic.com/wp-content/uploads/2021/11/collage-grant-winners-2-267x300.png 267w, https://www.ezoic.com/wp-content/uploads/2021/11/collage-grant-winners-2-768x864.png 768w" sizes="(max-width: 800px) 100vw, 800px" /></figure>
</div>
</div>
</div></div>
</div></div>
<div class="wp-block-group alignfull tw-mb-6 has-black-color has-white-background-color has-text-color has-background is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h2 class="wp-block-heading alignwide has-text-align-center" id="publishers-just-starting-and-established-sites-with-decades-of-history-receive-tailored-solutions"><strong><span class="has-inline-color has-black-color">Publishers just starting and established sites with decades of history receive tailored solutions</span></strong></h2>
<div class="wp-block-columns alignwide has-text-align-center tw-cols-card tw-cols-card-shadow is-layout-flex wp-container-core-columns-layout-27 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<p id="less-than-10-000-visitors" style="font-size:38px"><strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-black-color">Less than 10,000 Visitors</mark></strong></p>
<div class="wp-block-image is-style-default">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="1024" height="201" src="https://www.ezoic.com/wp-content/uploads/2021/09/EzoicAccessNow-LogoBURST-1024x201.png" alt class="wp-image-340459" srcset="https://www.ezoic.com/wp-content/uploads/2021/09/EzoicAccessNow-LogoBURST-1024x201.png 1024w, https://www.ezoic.com/wp-content/uploads/2021/09/EzoicAccessNow-LogoBURST-300x59.png 300w, https://www.ezoic.com/wp-content/uploads/2021/09/EzoicAccessNow-LogoBURST-768x151.png 768w, https://www.ezoic.com/wp-content/uploads/2021/09/EzoicAccessNow-LogoBURST.png 1045w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure></div>
<p class="has-mobile-text-align-center"><meta charset="utf-8" />Provides <strong><em><a href="https://www.ezoic.com/monetization/" class="ek-link">Monetization</a></em></strong> capabilities to growing sites, with less than 10,000 visits. Sites get additional educational resources and features to help them grow. </p>
<p class="has-text-align-center has-mobile-text-align-center"><strong><a href="https://www.ezoic.com/ezoic-access-now/" class="ek-link"><mark style="background-color:rgba(0, 0, 0, 0);color:#63ae25" class="has-inline-color">Learn More.</mark></a></strong></p>
<div class="wp-block-image is-style-editorskit-shadow">
<figure class="aligncenter size-full"><img loading="lazy" decoding="async" width="730" height="417" src="https://www.ezoic.com/wp-content/uploads/2021/09/accessnowunlocked.png" alt class="wp-image-341519" srcset="https://www.ezoic.com/wp-content/uploads/2021/09/accessnowunlocked.png 730w, https://www.ezoic.com/wp-content/uploads/2021/09/accessnowunlocked-300x171.png 300w" sizes="(max-width: 730px) 100vw, 730px" /></figure></div>
<div class="wp-block-buttons is-horizontal is-content-justification-center is-layout-flex wp-container-core-buttons-layout-6 wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://pubdash.ezoic.com/join/accessnow" style="border-radius:6px" target="_blank" rel="noopener">Join Access Now</a></div>
</div>
</div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<p id="more-than-10-000-visitors" style="font-size:38px"><strong><mark style="background-color:rgba(0, 0, 0, 0);color:#63ae25" class="has-inline-color">More than 10,000 Visitors</mark></strong></p>
<div class="wp-block-image is-style-default">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="1024" height="201" src="https://www.ezoic.com/wp-content/uploads/2021/09/EzoicLevels-LogoBURST-1024x201.png" alt class="wp-image-340469" srcset="https://www.ezoic.com/wp-content/uploads/2021/09/EzoicLevels-LogoBURST-1024x201.png 1024w, https://www.ezoic.com/wp-content/uploads/2021/09/EzoicLevels-LogoBURST-300x59.png 300w, https://www.ezoic.com/wp-content/uploads/2021/09/EzoicLevels-LogoBURST-768x151.png 768w, https://www.ezoic.com/wp-content/uploads/2021/09/EzoicLevels-LogoBURST.png 1045w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure></div>
<p class="has-mobile-text-align-center">Each level provides additional ad partners, a highest revenue guarantee, additional benefits, and progressive resources in the form of dedicated staff and experts.</p><div id="ezoic-pub-ad-placeholder-121" data-inserter-version="2"></div>
<p class="has-text-align-center has-mobile-text-align-center"> <strong><a href="https://levels.ezoic.com/" class="ek-link" target="_blank" rel="noopener"><mark style="background-color:rgba(0, 0, 0, 0);color:#63ae25" class="has-inline-color">Learn More</mark></a></strong>.</p>
<div class="wp-block-image is-style-editorskit-shadow">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="1024" height="584" src="https://www.ezoic.com/wp-content/uploads/2021/09/level4-1024x584.jpeg" alt="adsense publishers" class="wp-image-341518" srcset="https://www.ezoic.com/wp-content/uploads/2021/09/level4-1024x584.jpeg 1024w, https://www.ezoic.com/wp-content/uploads/2021/09/level4-300x171.jpeg 300w, https://www.ezoic.com/wp-content/uploads/2021/09/level4-768x438.jpeg 768w, https://www.ezoic.com/wp-content/uploads/2021/09/level4.jpeg 1081w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure></div>
<div class="wp-block-buttons is-horizontal is-content-justification-center is-layout-flex wp-container-core-buttons-layout-7 wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://pubdash.ezoic.com/join/" style="border-radius:6px" target="_blank" rel="noopener">Join Ezoic With Levels</a></div>
</div>
</div>
</div>
</div></div>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<p></p>
<h2 class="wp-block-heading alignfull has-text-align-center" id="why-websites-use-ad-tester-for-monetization" style="line-height:1.5">WHY WEBSITES USE AD TESTER FOR MONETIZATION</h2>
<p class="has-text-align-center tw-text-wide" style="line-height:1.5">Ezoic’s Ad Tester puts the power of split-testing and A.I. into every publisher’s toolbox. Compatible with all major ad networks, Ezoic increases the value of ad inventory using machine learning technology. Ezoic is an advocate for <strong><span style="color:#5fa625" class="has-inline-color">transparency in monetization</span></strong> and offers publishers complete control.</p>
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile" style="grid-template-columns:auto 66%"><div class="wp-block-media-text__content">
<p class="has-mobile-text-align-center has-small-font-size"><strong>Example #1</strong>: The impact of ad location by device type</p>
<hr class="wp-block-separator has-css-opacity is-style-default" />
<div class="wp-block-group alignfull is-style-default icon-wrapper is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-28 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/Asset-4.png" alt class="wp-image-1356" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="below-first-image-ad-on-desktop" style="line-height:1.5">Below first image ad on desktop</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">Visitors on this widescreen desktop have advertisers bid much higher for an ad below the first image because the ad remains visible upon page load.</p><div id="ezoic-pub-ad-placeholder-122" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-29 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/laptop.png" alt class="wp-image-1357" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="top-of-page-ad-on-laptop" style="line-height:1.5">Top of page ad on laptop</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">While they are commonly served the same ad locations, laptop visitor screen dimensions are typically fewer pixels wide. Advertisers, in this case, bid much higher for the ad at the top of the page.</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-30 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/ezoic-icon.png" alt class="wp-image-1358" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="ezoic-serves-the-best-one" style="line-height:1.5">Ezoic serves the best one</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">Ezoic automatically adjusts ad sizes if they impact how advertisers bid on different locations; producing higher session RPM.</p>
<p></p>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ad-tester-details/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
</div><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="699" height="520" src="https://ezoic.com/wp-content/uploads/2021/05/Gif-ad-dilution.gif" alt class="wp-image-850 size-full" /></figure></div>
<div class="wp-block-media-text alignwide is-stacked-on-mobile" style="grid-template-columns:66% auto"><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="700" height="520" src="https://ezoic.com/wp-content/uploads/2021/06/gif-ad-visitor-1.gif" alt class="wp-image-1368 size-full" /></figure><div class="wp-block-media-text__content">
<p class="has-mobile-text-align-center has-small-font-size"><strong>Example #2</strong>: The impact of ad size by visitor location.</p>
<hr class="wp-block-separator has-css-opacity is-style-default" />
<div class="wp-block-group alignfull is-style-default icon-wrapper is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-31 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/1200px-Flag_of_the_United_States.svg_-1.png" alt class="wp-image-1371" width="48" height="20" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="300x250-higher-cpms-in-usa" style="line-height:1.5">300×250 Higher CPMs in USA</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">300×250 ads are very versatile and typically see a large number of advertisers bidding on them in the USA.</p><div id="ezoic-pub-ad-placeholder-123" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-32 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/swedens-flag.jpeg" alt class="wp-image-1370" width="48" height="20" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="250x360-higher-cpms-in-sweden" style="line-height:1.5">250×360 Higher CPMs in Sweden</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">Uncommon in most of the world, 250×360 ad sizes are very common and highly competitive among Swedish advertisers.</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-33 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/ezoic-icon.png" alt class="wp-image-1358" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="ezoic-will-always-pick-the-best-size" style="line-height:1.5">Ezoic will always pick the best size</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">Ezoic will adjust ad sizes according to parameters set by the website. This allows Ezoic A.I. to display the ad sizes with the highest CPM or best UX for every visitor.</p>
<p></p>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ad-tester-details/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
</div></div>
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile" style="grid-template-columns:auto 66%"><div class="wp-block-media-text__content">
<p class="has-mobile-text-align-center has-small-font-size"><strong>Example #3</strong>: All ads dilute each other</p>
<hr class="wp-block-separator has-css-opacity is-style-default" />
<div class="wp-block-group alignfull is-style-default icon-wrapper is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-34 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/video-icon-2.png" alt class="wp-image-1375" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="billboard-ad-at-top" style="line-height:1.5">Billboard ad at top</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">When testing, publishers will often optimize around single ad CPMs without knowing how much those ads may dilute the value of other ads on the page.</p><div id="ezoic-pub-ad-placeholder-124" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-35 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/leaderboard.png" alt class="wp-image-1374" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="leaderboard-ad-at-top" style="line-height:1.5">Leaderboard ad at top</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">Testing shows that showing fewer ads, or combinations of different ads to certain visitors, results in much higher revenue than optimizing around high CPMs.</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-36 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/ezoic-icon.png" alt class="wp-image-1358" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-extra-small-font-size" id="ezoic-tests-optimizes" style="line-height:1.5">Ezoic tests &amp; optimizes</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">Ezoic automatically tests and learns how advertisers adjust bids based on all the other ads on the page (how many, their sizes, etc.) and serves the best ones.</p>
<p></p>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ad-tester-details/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
</div><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="699" height="520" src="https://www.ezoic.com/wp-content/uploads/2021/09/6.gif" alt class="wp-image-341565 size-full" /></figure></div>
<div class="wp-block-group alignwide grey-border is-style-default p-40 has-background is-layout-flow wp-block-group-is-layout-flow" style="background-color:#f7f7f7"><div class="wp-block-group__inner-container">
<div class="wp-block-columns alignwide tw-gutter-large is-layout-flex wp-container-core-columns-layout-37 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<h3 class="wp-block-heading has-mobile-text-align-center" id="dive-deeper-into-ad-tester">DIVE DEEPER INTO AD TESTER</h3>
<p class="has-mobile-text-align-center">Learn more about its features and how it works</p>
</div>
<div class="wp-block-column is-vertically-aligned-bottom is-layout-flow wp-block-column-is-layout-flow">
<div class="wp-block-buttons is-horizontal is-content-justification-center is-layout-flex wp-container-core-buttons-layout-11 wp-block-buttons-is-layout-flex">
<div class="wp-block-button has-custom-width wp-block-button__width-50"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ad-tester-details/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div>
</div>
<p></p><div id="ezoic-pub-ad-placeholder-125" data-inserter-version="2"></div>
</div></div>
</div></div>
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-top"><div class="wp-block-media-text__content">
<p class="has-mobile-text-align-center" style="font-size:28px"><strong>INCREASE THE AD REVENUE OF EVERY VISIT</strong></p>
<p class="has-mobile-text-align-center has-extra-small-font-size" style="line-height:1.5">Advertisers bid on each visitor differently. Changing ad placements, sizes, layouts, and density on each page of every visit allows sites to intelligently increase the value of ad impressions without disrupting the visitor’s experience.</p>
<div class="wp-block-group alignfull is-style-default icon-wrapper is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-38 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/green-check.png" alt class="wp-image-1384" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-small-font-size" id="avoid-ad-dilution" style="line-height:1.5">Avoid Ad Dilution</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size" style="line-height:1.5">Dilution means less valuable ad space</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-39 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/green-check-1.png" alt class="wp-image-1385" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-small-font-size" id="intelligently-select-ad-layouts" style="line-height:1.5">Intelligently Select Ad Layouts</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size" style="line-height:1.5">Place ads based on historical data</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-40 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/green-check-2.png" alt class="wp-image-1386" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-small-font-size" id="optimize-ad-sizes" style="line-height:1.5">Optimize Ad Sizes</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size" style="line-height:1.5">Size based on what performs best where</p><div id="ezoic-pub-ad-placeholder-126" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-41 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/green-check-2.png" alt class="wp-image-1386" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-small-font-size" id="leverage-ad-types" style="line-height:1.5">Leverage Ad Types</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size" style="line-height:1.5">Select the type best fit for each need</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-42 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/green-check-2.png" alt class="wp-image-1386" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:80%;flex-basis:80%">
<h3 class="wp-block-heading has-mobile-text-align-center has-small-font-size" id="ads-by-visitor-type" style="line-height:1.5">Ads By Visitor Type</h3>
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size" style="line-height:1.5">Give visitors a tailored ad experience</p>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ad-tester-details/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
</div><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="768" height="1024" src="https://ezoic.com/wp-content/uploads/2021/05/Ad-Density-1-768x1024.png" alt class="wp-image-868 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/Ad-Density-1-768x1025.png 768w, https://www.ezoic.com/wp-content/uploads/2021/05/Ad-Density-1-225x300.png 225w, https://www.ezoic.com/wp-content/uploads/2021/05/Ad-Density-1-1151x1536.png 1151w, https://www.ezoic.com/wp-content/uploads/2021/05/Ad-Density-1-1535x2048.png 1535w, https://www.ezoic.com/wp-content/uploads/2021/05/Ad-Density-1-1568x2092.png 1568w, https://www.ezoic.com/wp-content/uploads/2021/05/Ad-Density-1.png 2048w" sizes="(max-width: 768px) 100vw, 768px" /></figure></div>
<div class="wp-block-group alignfull is-style-twentytwentyone-border has-black-background-color has-background is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-media-text alignwide is-stacked-on-mobile is-vertically-aligned-center tw-stack-md" style="grid-template-columns:16% auto"><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="400" height="347" src="https://ezoic.com/wp-content/uploads/2021/05/award1.png" alt class="wp-image-871 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/award1.png 400w, https://www.ezoic.com/wp-content/uploads/2021/05/award1-300x260.png 300w" sizes="(max-width: 400px) 100vw, 400px" /></figure><div class="wp-block-media-text__content">
<h2 class="wp-block-heading has-text-align-left has-mobile-text-align-center" id="ezoic-is-an-award-winning-technology-google-certified-publishing-partner">Ezoic is an award-winning technology &amp; Google Certified Publishing Partner</h2>
<p class="has-mobile-text-align-center">In 2016, Ezoic won the Google Business Innovation Award for its significant impact on publisher revenue.</p>
</div></div>
</div></div>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h2 class="wp-block-heading alignfull has-text-align-center" id="other-popular-monetization-features" style="font-size:36px">OTHER POPULAR MONETIZATION FEATURES</h2>
<hr class="wp-block-separator has-css-opacity alignwide is-style-default" />
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-center" style="grid-template-columns:auto 49%"><div class="wp-block-media-text__content">
<h3 class="wp-block-heading has-mobile-text-align-center has-text-color" id="layout-tester" style="color:#5fa625;font-size:28px">LAYOUT TESTER</h3>
<div class="wp-block-group alignfull is-style-default icon-wrapper is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-43 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-5.png" alt class="wp-image-1391" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size">No coding or advanced setup; simply select which layouts you’d like Ezoic to test</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-44 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-6.png" alt class="wp-image-1392" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size">Automatically turn your mobile site into a snappy, Progressive Web App (PWA)</p><div id="ezoic-pub-ad-placeholder-127" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-45 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-7.png" alt class="wp-image-1393" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size">Easily convert your mobile site to AMP for testing and monetization.</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-46 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-7.png" alt class="wp-image-1393" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size">See how fast revenue and visitor experiences improve as layouts are adapted to each session</p>
</div>
</div>
</div></div>
</div><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="900" height="765" src="https://ezoic.com/wp-content/uploads/2021/05/layouttesterhome-againe.png" alt class="wp-image-874 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/layouttesterhome-againe.png 900w, https://www.ezoic.com/wp-content/uploads/2021/05/layouttesterhome-againe-300x255.png 300w, https://www.ezoic.com/wp-content/uploads/2021/05/layouttesterhome-againe-768x653.png 768w" sizes="(max-width: 900px) 100vw, 900px" /></figure></div>
<div class="wp-block-media-text alignwide is-stacked-on-mobile is-vertically-aligned-top" style="grid-template-columns:49% auto"><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="600" height="463" src="https://ezoic.com/wp-content/uploads/2021/05/googledfp.jpeg" alt class="wp-image-876 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/googledfp.jpeg 600w, https://www.ezoic.com/wp-content/uploads/2021/05/googledfp-300x232.jpeg 300w" sizes="(max-width: 600px) 100vw, 600px" /></figure><div class="wp-block-media-text__content">
<h3 class="wp-block-heading has-mobile-text-align-center has-text-color" id="google-ad-manager-dfp-extension" style="color:#5fa625;font-size:28px">GOOGLE AD MANAGER (DFP) EXTENSION</h3>
<div class="wp-block-group alignfull is-style-default icon-wrapper is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-47 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-5.png" alt class="wp-image-1391" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-small-font-size">Apply Ezoic machine learning and testing to your existing Google Ad Manager account</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-48 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-6.png" alt class="wp-image-1392" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-small-font-size">Easily split-test Ezoic’s A.I. vs. your current configuration</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-49 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-7.png" alt class="wp-image-1393" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-small-font-size">Fast implementation with no disruption or changes to your current setup</p><div id="ezoic-pub-ad-placeholder-128" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/dfp-integration/" style="border-radius:6px">LEARN MORE</a></div>
</div>
</div></div>
</div></div>
<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-vertically-aligned-top"><div class="wp-block-media-text__content">
<p class="has-mobile-text-align-center has-text-color" style="color:#5fa625;font-size:28px"><strong>DIRECT AD ORDERS</strong></p>
<div class="wp-block-group alignfull is-style-default icon-wrapper is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-50 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-5.png" alt class="wp-image-1391" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size">Sell and traffic any direct ad deals through Ezoic</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-51 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-6.png" alt class="wp-image-1392" width="48" height="48" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size">Complete control over impression delivery type, inventory size, and creative display method</p>
</div>
</div>
<div class="wp-block-columns tw-cols-stack-sm is-layout-flex wp-container-core-columns-layout-52 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:20%;flex-basis:20%">
<figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/check-mark-7.png" alt class="wp-image-1393" /></figure>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="--col-width:120%;flex-basis:120%">
<p class="tw-mb-0 has-mobile-text-align-center has-small-font-size">Decide on frequency clapping and targeting (country, device, ad position, etc.)</p>
</div>
</div>
</div></div>
</div><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="600" height="463" src="https://ezoic.com/wp-content/uploads/2021/05/direct-ad-order.jpeg" alt class="wp-image-879 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/direct-ad-order.jpeg 600w, https://www.ezoic.com/wp-content/uploads/2021/05/direct-ad-order-300x232.jpeg 300w" sizes="(max-width: 600px) 100vw, 600px" /></figure></div>
</div></div>
<div class="wp-block-group alignwide grey-border is-style-default has-background is-layout-flow wp-block-group-is-layout-flow" style="background-color:#f7f7f7"><div class="wp-block-group__inner-container">
<div class="wp-block-columns alignwide tw-gutter-large is-layout-flex wp-container-core-columns-layout-53 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<h3 class="wp-block-heading has-mobile-text-align-center" id="ready-to-test-ezoic">READY TO TEST EZOIC?</h3>
<p class="has-mobile-text-align-center">Get started with your free trial now</p><div id="ezoic-pub-ad-placeholder-129" data-inserter-version="2"></div>
</div>
<div class="wp-block-column is-vertically-aligned-bottom is-layout-flow wp-block-column-is-layout-flow">
<div class="wp-block-buttons is-horizontal is-content-justification-center is-layout-flex wp-container-core-buttons-layout-14 wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://pubdash.ezoic.com/join" style="border-radius:6px" target="_blank" rel="noopener">START FREE TRIAL</a></div>
</div>
</div>
</div>
</div></div>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h3 class="wp-block-heading alignfull has-text-align-center has-text-color" id="a-powerful-yet-flexible-technology-for-all-digital-publishers" style="color:#5fa625">A POWERFUL, YET FLEXIBLE TECHNOLOGY FOR ALL DIGITAL PUBLISHERS</h3>
<div class="wp-block-columns alignwide has-text-align-center is-layout-flex wp-container-core-columns-layout-54 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/Text-bubble-1.png" alt class="wp-image-1405" /></figure></div>
<h4 class="wp-block-heading" id="bloggers">Bloggers</h4>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/Green-Bubble-money-1.png" alt class="wp-image-1407" /></figure></div>
<h4 class="wp-block-heading" id="revenue-managers">Revenue Managers</h4>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/case-study-1.png" alt class="wp-image-1408" /></figure></div>
<h4 class="wp-block-heading" id="independent-publishers">Independent Publishers</h4>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/tag-1.png" alt class="wp-image-1409" /></figure></div>
<h4 class="wp-block-heading" id="adsense-publishers">AdSense Publishers</h4>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="48" height="48" src="https://ezoic.com/wp-content/uploads/2021/06/building-icon-1.png" alt class="wp-image-1410" /></figure></div>
<h4 class="wp-block-heading" id="enterprises">Enterprises</h4>
</div>
</div>
</div></div>
<div class="wp-block-group alignfull is-style-default has-black-background-color has-background is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<div class="wp-block-media-text alignwide is-stacked-on-mobile is-vertically-aligned-top tw-stack-md"><figure class="wp-block-media-text__media"><img loading="lazy" decoding="async" width="605" height="543" src="https://ezoic.com/wp-content/uploads/2021/05/e6173d5b-b352-4313-b50f-2a375d5ccf27.jpeg" alt class="wp-image-885 size-full" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/e6173d5b-b352-4313-b50f-2a375d5ccf27.jpeg 605w, https://www.ezoic.com/wp-content/uploads/2021/05/e6173d5b-b352-4313-b50f-2a375d5ccf27-300x269.jpeg 300w" sizes="(max-width: 605px) 100vw, 605px" /></figure><div class="wp-block-media-text__content">
<h4 class="wp-block-heading alignwide has-mobile-text-align-center" id="with-ezoic-we-have-a-technology-partner-that-actually-understands-the-industry-and-has-helped-us-take-a-more-data-driven-approach-with-our-efforts-the-platform-has-helped-us-use-our-data-to-increase-user-value-by-balancing-user-experiences-and-revenue-optimization-robert-diamond-broadwayworld-com"><em>“With Ezoic, we have a technology partner that actually understands the industry and has helped us take a more data-driven approach with our efforts. The platform has helped us use our data to increase user value by balancing user experiences and revenue optimization.”</em></h4>
<h4 class="wp-block-heading alignwide has-mobile-text-align-center" id="with-ezoic-we-have-a-technology-partner-that-actually-understands-the-industry-and-has-helped-us-take-a-more-data-driven-approach-with-our-efforts-the-platform-has-helped-us-use-our-data-to-increase-user-value-by-balancing-user-experiences-and-revenue-optimization-robert-diamond-broadwayworld-com"><br/>– <strong>Robert Diamond, BroadwayWorld.com</strong></h4>
<p class="has-mobile-text-align-center"><strong>SITES THAT TRY AD TESTER AND KEEP USING IT BEYOND 6 MONTHS</strong></p>
<div class="wp-block-buttons mb-align-item-center is-layout-flex wp-block-buttons-is-layout-flex">
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="https://www.ezoic.com/ezoic-reviews/" style="border-radius:6px">READ 50+ REVIEWS HERE</a></div>
</div>
</div></div>
</div></div>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h2 class="wp-block-heading alignwide has-text-align-left has-mobile-text-align-center" id="validated-by-science" style="line-height:1.5">VALIDATED BY SCIENCE</h2>
<p class="tw-text-wide has-mobile-text-align-center" style="line-height:1.5">Ezoic’s methodology is based on making optimal decisions for each visitor session. This means altering ad placements, layouts, and even ad partners depending on how advertisers bid and visitors respond. This causes advertisers to bid more competitively and can also lead to visitors viewing more pages and earning higher revenue when Ezoic can improve their experience.</p>
<figure class="wp-block-image alignwide size-full"><img loading="lazy" decoding="async" width="1100" height="691" src="https://ezoic.com/wp-content/uploads/2021/05/Graphic-Three@4x.jpeg" alt class="wp-image-886" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/Graphic-Three@4x.jpeg 1100w, https://www.ezoic.com/wp-content/uploads/2021/05/Graphic-Three@4x-300x188.jpeg 300w, https://www.ezoic.com/wp-content/uploads/2021/05/Graphic-Three@4x-1024x643.jpeg 1024w, https://www.ezoic.com/wp-content/uploads/2021/05/Graphic-Three@4x-768x482.jpeg 768w" sizes="(max-width: 1100px) 100vw, 1100px" /></figure>
<div class="wp-block-columns alignwide tw-gutter-large is-layout-flex wp-container-core-columns-layout-57 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<h2 class="wp-block-heading has-mobile-text-align-center" id="results-after-one-year-of-monetizing-with-ezoic" style="font-size:36px">Results after one year of monetizing with Ezoic</h2>
<p class="has-mobile-text-align-center has-small-font-size" style="line-height:1.5">300 websites that started using Ezoic at the beginning of 2019 saw exponential increases in revenue and traffic. Sites in the study were different sizes, in separate content verticals, and based in countries all around the world.</p>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<div class="wp-block-columns is-layout-flex wp-container-core-columns-layout-55 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="has-text-align-left has-mobile-text-align-center has-text-color has-extra-large-font-size" style="color:#5fa625"><strong>93%</strong></p>
<p class="has-mobile-text-align-center" style="font-size:14px;line-height:1.5"><strong>INCREASE IN TOTAL MONTHLY REVENUE</strong></p><div id="ezoic-pub-ad-placeholder-130" data-inserter-version="2"></div>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="has-mobile-text-align-center has-text-color has-extra-large-font-size" style="color:#5fa625"><strong>87%</strong></p>
<p class="has-mobile-text-align-center" style="font-size:14px;line-height:1.5"><strong>INCREASE IN AVERAGE REVENUE PER SESSION</strong></p>
</div>
</div>
<div class="wp-block-columns is-layout-flex wp-container-core-columns-layout-56 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="has-mobile-text-align-center has-text-color has-extra-large-font-size" style="color:#5fa625"><strong>36%</strong></p>
<p class="has-mobile-text-align-center" style="font-size:14px;line-height:1.5"><strong>INCREASE IN AVERAGE MONTHLY REVENUE</strong></p>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
<p class="has-mobile-text-align-center has-text-color has-extra-large-font-size" style="color:#5fa625"><strong>21%</strong></p>
<p class="has-mobile-text-align-center" style="font-size:14px;line-height:1.5"><strong>INCREASE IN AVERAGE TIME ON SITE</strong></p><div id="ezoic-pub-ad-placeholder-131" data-inserter-version="2"></div>
<p></p>
</div>
</div>
</div>
</div>
</div></div>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h2 class="wp-block-heading has-text-align-center has-text-color" id="more-monetization-success-stories" style="color:#5fa625;font-size:28px">MORE MONETIZATION SUCCESS STORIES</h2>
<hr class="wp-block-separator has-css-opacity alignwide is-style-default" />
<div class="wp-block-columns alignwide tw-cols-card tw-cols-card-shadow is-layout-flex wp-container-core-columns-layout-58 wp-block-columns-is-layout-flex">
<div class="wp-block-column grey-bg success-stories is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/05/SmallBiz-NewHS.png" alt class="wp-image-887" width="150" height="150" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/SmallBiz-NewHS.png 364w, https://www.ezoic.com/wp-content/uploads/2021/05/SmallBiz-NewHS-300x300.png 300w, https://www.ezoic.com/wp-content/uploads/2021/05/SmallBiz-NewHS-150x150.png 150w" sizes="(max-width: 150px) 100vw, 150px" /></figure></div>
<p class="has-mobile-text-align-center" style="font-size:14px;line-height:1.6">“Ezoic helps with revenue but does so much more… Ezoic delivers invaluable insights about user experience and helps us <em>deliver improved content</em> for readers to enjoy.”</p>
<p></p>
<p class="has-mobile-text-align-center has-extra-small-font-size"><strong>Anita Campbell</strong></p><div id="ezoic-pub-ad-placeholder-132" data-inserter-version="2"></div>
<p class="has-mobile-text-align-center has-extra-small-font-size">CEO and Founder, SmallBizTrends.com</p>
</div>
<div class="wp-block-column grey-bg success-stories is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image is-style-editorskit-circular">
<figure class="aligncenter size-full is-resized"><img loading="lazy" decoding="async" src="https://www.ezoic.com/wp-content/uploads/2023/01/du652jgnd8h3tt6s9bpu2vfnv7.jpeg" alt class="wp-image-366645" width="150" height="150" srcset="https://www.ezoic.com/wp-content/uploads/2023/01/du652jgnd8h3tt6s9bpu2vfnv7.jpeg 400w, https://www.ezoic.com/wp-content/uploads/2023/01/du652jgnd8h3tt6s9bpu2vfnv7-300x300.jpeg 300w, https://www.ezoic.com/wp-content/uploads/2023/01/du652jgnd8h3tt6s9bpu2vfnv7-150x150.jpeg 150w, https://www.ezoic.com/wp-content/uploads/2023/01/du652jgnd8h3tt6s9bpu2vfnv7-700x700.jpeg 700w" sizes="(max-width: 150px) 100vw, 150px" /></figure></div>
<p class="has-mobile-text-align-center" style="font-size:14px;line-height:1.6">“Ezoic creates exciting new opportunities and is always investing in publishers to help them succeed.”</p>
<p></p>
<p class="has-mobile-text-align-center has-extra-small-font-size"><strong><strong>Stephen Hockman</strong></strong></p>
<p class="has-mobile-text-align-center has-extra-small-font-size">Lead Writer &amp; SEO Expert, SEO Chatter</p><div id="ezoic-pub-ad-placeholder-133" data-inserter-version="2"></div>
</div>
<div class="wp-block-column grey-bg success-stories is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/05/thewindowsclub.png" alt class="wp-image-890" width="150" height="150" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/thewindowsclub.png 360w, https://www.ezoic.com/wp-content/uploads/2021/05/thewindowsclub-300x300.png 300w, https://www.ezoic.com/wp-content/uploads/2021/05/thewindowsclub-150x150.png 150w" sizes="(max-width: 150px) 100vw, 150px" /></figure></div>
<p class="has-mobile-text-align-center" style="font-size:14px;line-height:1.6">“I love the <em>control you have</em> over ads and ad placements, and the results have been fantastic. I should have switched to Ezoic much sooner. I never knew that there could be immense earning potential.”</p>
<p class="has-mobile-text-align-center has-extra-small-font-size"><strong>Anand Khanse</strong></p>
<p class="has-mobile-text-align-center has-extra-small-font-size">CEO and Founder, TheWindowsClub.com</p>
</div>
</div>
</div></div>
<div class="wp-block-group alignfull is-style-default is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h2 class="wp-block-heading has-text-align-center has-text-color" id="our-industry-partners" style="color:#5fa625"><strong>OUR INDUSTRY PARTNERS</strong></h2>
<hr class="wp-block-separator has-css-opacity alignwide is-style-default" />
<div class="wp-block-columns alignwide are-vertically-aligned-center has-text-align-center tw-gutter-large is-layout-flex wp-container-core-columns-layout-59 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="300" height="201" src="https://ezoic.com/wp-content/uploads/2021/05/cloudflare-partner-300x201-4.png" alt class="wp-image-909" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
<figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="441" height="245" src="https://ezoic.com/wp-content/uploads/2021/05/Google_Ads_Manager_logo-441x245-1-7.jpeg" alt class="wp-image-918" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/Google_Ads_Manager_logo-441x245-1-7.jpeg 441w, https://www.ezoic.com/wp-content/uploads/2021/05/Google_Ads_Manager_logo-441x245-1-7-300x167.jpeg 300w" sizes="(max-width: 441px) 100vw, 441px" /></figure>
</div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="300" height="156" src="https://ezoic.com/wp-content/uploads/2021/05/google-adsense-logo-998F25E5A6-seeklogo.com_-1.png" alt class="wp-image-911" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="600" height="170" src="https://ezoic.com/wp-content/uploads/2021/05/coalition-for-better-ads-2018-1.png" alt class="wp-image-912" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/coalition-for-better-ads-2018-1.png 600w, https://www.ezoic.com/wp-content/uploads/2021/05/coalition-for-better-ads-2018-1-300x85.png 300w" sizes="(max-width: 600px) 100vw, 600px" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="1024" height="214" src="https://ezoic.com/wp-content/uploads/2021/05/association-of-online-publishers-UK-logo-1024x214.gif" alt class="wp-image-900" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/association-of-online-publishers-UK-logo-1024x214.gif 1024w, https://www.ezoic.com/wp-content/uploads/2021/05/association-of-online-publishers-UK-logo-300x63.gif 300w, https://www.ezoic.com/wp-content/uploads/2021/05/association-of-online-publishers-UK-logo-768x160.gif 768w, https://www.ezoic.com/wp-content/uploads/2021/05/association-of-online-publishers-UK-logo-1536x321.gif 1536w, https://www.ezoic.com/wp-content/uploads/2021/05/association-of-online-publishers-UK-logo-2048x428.gif 2048w, https://www.ezoic.com/wp-content/uploads/2021/05/association-of-online-publishers-UK-logo-1568x328.gif 1568w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure></div></div>
<div class="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="400" height="207" src="https://ezoic.com/wp-content/uploads/2021/05/forbesCommCouncil-vert-logo-grey-footer-3.png" alt class="wp-image-917" srcset="https://www.ezoic.com/wp-content/uploads/2021/05/forbesCommCouncil-vert-logo-grey-footer-3.png 400w, https://www.ezoic.com/wp-content/uploads/2021/05/forbesCommCouncil-vert-logo-grey-footer-3-300x155.png 300w" sizes="(max-width: 400px) 100vw, 400px" /></figure></div></div>
</div>
</div></div>
<div class="wp-block-group alignfull is-style-default has-black-background-color has-background is-layout-flow wp-block-group-is-layout-flow"><div class="wp-block-group__inner-container">
<h2 class="wp-block-heading has-text-align-center tw-mb-2 has-white-color has-text-color" id="how-to-get-started" style="line-height:1.3">How To Get Started</h2>
<p class="has-text-align-center tw-mt-1 tw-text-wide has-white-color has-text-color has-medium-font-size">Setup is easy, secure, and requires no technical experience.</p><div id="ezoic-pub-ad-placeholder-147" data-inserter-version="2"></div>
<div class="wp-block-columns alignwide tw-justify-center tw-gutter-large has-text-align-center is-layout-flex wp-container-core-columns-layout-60 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/account.png" alt class="wp-image-1427" width="90" height="90" /></figure></div>
<h3 class="wp-block-heading has-white-color has-text-color" id="1-create-an-account">1. Create an Account</h3>
<p class="has-white-color has-text-color" style="line-height:1.5">No credit card, no contract. Always starts with 30 days free.</p><div id="ezoic-pub-ad-placeholder-134" data-inserter-version="2"></div>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/arrows-pointing.png" alt class="wp-image-1429" width="90" height="90" /></figure></div>
<h3 class="wp-block-heading has-white-color has-text-color" id="2-integrate-with-ezoic">2. Integrate with Ezoic</h3>
<p class="has-white-color has-text-color" style="line-height:1.5">Three integration options &amp; real humans available 24/7 to help.</p>
</div>
<div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow"><div class="wp-block-image">
<figure class="aligncenter size-large is-resized"><img loading="lazy" decoding="async" src="https://ezoic.com/wp-content/uploads/2021/06/config.png" alt class="wp-image-1430" width="90" height="90" /></figure></div>
<h3 class="wp-block-heading has-white-color has-text-color" id="3-configure-features">3. Configure Features</h3>
<p class="has-white-color has-text-color" style="line-height:1.5">This is where you get to play with settings &amp; Ezoic’s advanced testing.</p><div id="ezoic-pub-ad-placeholder-148" data-inserter-version="2"></div>
</div>
</div>
<div class="wp-block-buttons is-horizontal is-content-justification-center is-layout-flex wp-container-core-buttons-layout-16 wp-block-buttons-is-layout-flex">
<div class="wp-block-button has-custom-width wp-block-button__width-50 has-mobile-text-align-center"><a class="wp-block-button__link wp-element-button" href="/join-ezoic/" style="border-radius:33px">Start Free Trial</a></div>
</div>
</div></div>
</div>
</article>
</main>
</div>
</div>
<aside class="widget-area">
<ins class="ezoic-adpos-sidebar" style="display:none !important;visibility:hidden !important;height:0 !important;width:0 !important;" data-loc="top"></ins><section id="nav_menu-8" class="widget widget_nav_menu"><h2 class="widget-title">Information</h2><nav class="menu-footer-2-container" aria-label="Information"><ul id="menu-footer-2" class="menu"><li id="menu-item-191" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-191"><a href="/join-ezoic/">Sign Up</a></li>
<li id="menu-item-192" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-192"><a href="https://pubdash.ezoic.com/user/login">Login</a></li>
<li id="menu-item-195" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-195"><a href="https://adrevenueindex.ezoic.com/">Ad Revenue Index</a></li>
<li id="menu-item-194" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-194"><a href="https://www.ezoicstatus.com/">Status</a></li>
<li id="menu-item-193" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-193"><a href="https://support.ezoic.com/">Support</a></li>
<li id="menu-item-338217" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-338217"><a href="/certified-seamless-with-ezoic/">Certified Seamless Partners</a></li>
<li id="menu-item-351344" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-351344"><a href="https://www.ezoic.com/security/">Security</a></li>
</ul></nav></section><ins class="ezoic-adpos-sidebar" style="display:none !important;visibility:hidden !important;height:0 !important;width:0 !important;" data-loc="middle"></ins><section id="nav_menu-6" class="widget widget_nav_menu"><h2 class="widget-title">Company</h2><nav class="menu-secondary-container" aria-label="Company"><ul id="menu-secondary" class="menu"><li id="menu-item-27" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="/careers/">Careers</a></li>
<li id="menu-item-25" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-25"><a href="/contact-us/">Contact</a></li>
<li id="menu-item-368101" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-368101"><a href="https://www.ezoic.com/ezoic-cares-csr/">Ezoic Cares</a></li>
<li id="menu-item-30" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-30"><a href="https://affiliates.ezoic.com/login">Affiliate Login</a></li>
<li id="menu-item-350927" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-350927"><a href="https://www.ezoic.com/affiliate/">Affiliate Info</a></li>
<li id="menu-item-351229" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-351229"><a href="https://www.ezoic.com/events/">Events</a></li>
</ul></nav></section><ins class="ezoic-adpos-sidebar" style="display:none !important;visibility:hidden !important;height:0 !important;width:0 !important;" data-loc="middle"></ins><section id="nav_menu-9" class="widget widget_nav_menu"><h2 class="widget-title">Learn More</h2><nav class="menu-footer-3-container" aria-label="Learn More"><ul id="menu-footer-3" class="menu"><li id="menu-item-199" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-199"><a href="/about/">About</a></li>
<li id="menu-item-198" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-198"><a href="/pricing/">Pricing</a></li>
<li id="menu-item-196" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-196"><a href="/faq/">FAQ</a></li>
<li id="menu-item-200" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-200"><a href="https://wordpress.ezoic.com">WordPress Dev</a></li>
<li id="menu-item-197" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-197"><a href="/press/">Press</a></li>
<li id="menu-item-351231" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-351231"><a rel="privacy-policy" href="https://www.ezoic.com/privacy-policy/">Privacy Policy</a></li>
<li id="menu-item-351232" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-351232"><a href="https://www.ezoic.com/terms/">Terms</a></li>
</ul></nav></section><ins class="ezoic-adpos-sidebar" style="display:none !important;visibility:hidden !important;height:0 !important;width:0 !important;" data-loc="middle"></ins><section id="block-31" class="widget widget_block"><h3> © Copyright Ezoic <script>document.write(new Date().getFullYear())</script></h3></section><ins class="ezoic-adpos-sidebar" style="display:none !important;visibility:hidden !important;height:0 !important;width:0 !important;" data-loc="middle"></ins><section id="block-26" class="widget widget_block">
<div class="wp-block-columns is-layout-flex wp-container-core-columns-layout-61 wp-block-columns-is-layout-flex">
<div class="wp-block-column is-vertically-aligned-top tw-mt-0 is-layout-flow wp-block-column-is-layout-flow">
<ul class="wp-block-social-links alignleft has-normal-icon-size has-icon-color has-icon-background-color tw-mt-0 is-style-default is-horizontal is-content-justification-left is-layout-flex wp-container-core-social-links-layout-1 wp-block-social-links-is-layout-flex"><li style="color: #FFFFFF; background-color: #000000; " class="wp-social-link wp-social-link-linkedin has-white-color has-black-background-color wp-block-social-link"><a href="https://www.linkedin.com/company/ezoic-inc-" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path></svg><span class="wp-block-social-link-label screen-reader-text">LinkedIn</span></a></li>
<li style="color: #FFFFFF; background-color: #000000; " class="wp-social-link wp-social-link-instagram has-white-color has-black-background-color wp-block-social-link"><a href="https://www.instagram.com/ezoicplatform/" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path></svg><span class="wp-block-social-link-label screen-reader-text">Instagram</span></a></li>
<li style="color: #FFFFFF; background-color: #000000; " class="wp-social-link wp-social-link-twitter has-white-color has-black-background-color wp-block-social-link"><a href="https://twitter.com/ezoic" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path></svg><span class="wp-block-social-link-label screen-reader-text">Twitter</span></a></li>
<li style="color: #FFFFFF; background-color: #000000; " class="wp-social-link wp-social-link-facebook has-white-color has-black-background-color wp-block-social-link"><a href="https://www.facebook.com/ezoic" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path></svg><span class="wp-block-social-link-label screen-reader-text">Facebook</span></a></li>
<li style="color: #FFFFFF; background-color: #000000; " class="wp-social-link wp-social-link-youtube has-white-color has-black-background-color wp-block-social-link"><a href="https://www.youtube.com/c/Ezoic" class="wp-block-social-link-anchor"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path></svg><span class="wp-block-social-link-label screen-reader-text">YouTube</span></a></li></ul>
</div>
</div>
</section><ins class="ezoic-adpos-sidebar" style="display:none !important;visibility:hidden !important;height:0 !important;width:0 !important;" data-loc="bottom"></ins> </aside>
</div>
<meta id="ba_s" property="options" content data-o="{&#34;tid&#34;:&#34;UA-30083227-1&#34;,&#34;co&#34;:&#34;auto&#34;,&#34;g&#34;:1073809512,&#34;dl&#34;:&#34;\\.avi|\\.dmg|\\.doc|\\.exe|\\.gz|\\.mpg|\\.mp3|\\.pdf|\\.ppt|\\.psd|\\.rar|\\.wmv|\\.xls|\\.zip&#34;,&#34;s&#34;:0,&#34;a&#34;:0,&#34;d&#34;:{&#34;a&#34;:[7,&#34;Will Park&#34;],&#34;y&#34;:[8,2021],&#34;r&#34;:[11,&#34;guest&#34;]}}" /><div id="ezoic-pub-ad-placeholder-167" data-inserter-version="-1"></div>
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-953845843"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-953845843');
</script>

<script type="text/javascript">

 //EPMV CALCULATOR CUSTOM JS 
	//calculate desktop empv function
	function calculateDesktop() {
	  const desktopSessionValue = document.getElementById("desktop-session").value || 0;
	  const desktopRevenueValue = document.getElementById("desktop-ad-revenue").value || 0;
	  const desktopEpmvValue = (parseFloat(desktopRevenueValue))/(parseFloat(desktopSessionValue)/1000)
	  document.getElementById("desktop-epmv-result").value = desktopEpmvValue;
	  if (desktopSessionValue){
		calculateTotalSession();
	  }
	  if(desktopRevenueValue){
		calculateTotalRevenue();
	  }
	  if (desktopEpmvValue){
		calculateTotalEpmv()
	  }
	}
	//calculate mobile epmv function
	function calculateMobile(){
	  const mobileSessionValue = document.getElementById("mobile-session").value || 0;
	  const mobileRevenueValue = document.getElementById("mobile-ad-revenue").value || 0;
	  const mobileEpmvValue = (parseFloat(mobileRevenueValue))/(parseFloat(mobileSessionValue)/1000)
	  document.getElementById("mobile-epmv-result").value = mobileEpmvValue;
	  if(mobileSessionValue){
		calculateTotalSession();
	  }
	  if(mobileRevenueValue){
		calculateTotalRevenue();
	  } 
	  if (mobileEpmvValue){
		calculateTotalEpmv()
	  }
	}
	//calculate tablet epmv function
	function calculateTablet(){
	  const tabletSessionValue = document.getElementById("tablet-session").value || 0;
	  const tabletRevenueValue = document.getElementById("tablet-ad-revenue").value || 0;
	  const tabletEpmvValue = (parseFloat(tabletRevenueValue))/(parseFloat(tabletSessionValue)/1000)
	  document.getElementById("tablet-epmv-result").value = tabletEpmvValue;
	  if(tabletSessionValue){
		calculateTotalSession();
	  }
	  if(tabletRevenueValue){
		calculateTotalRevenue();
	  } 
	  if (tabletEpmvValue){
		calculateTotalEpmv()
	  }
	}

	//calculate total session function
	function calculateTotalSession(){
	  const desktopSessionValue = parseFloat(document.getElementById("desktop-session").value) || 0;
	  const tabletSessionValue = parseFloat(document.getElementById("tablet-session").value) || 0;
	  const mobileSessionValue = parseFloat(document.getElementById("mobile-session").value) || 0;
		document.getElementById("total-sessions").value = desktopSessionValue + tabletSessionValue + mobileSessionValue;
	}

	//calculate total revenue function
	function calculateTotalRevenue(){
	  const desktopRevenueValue = parseFloat(document.getElementById("desktop-ad-revenue").value) || 0;
	  const tabletRevenueValue = parseFloat(document.getElementById("tablet-ad-revenue").value) || 0;
	  const mobileRevenueValue = parseFloat(document.getElementById("mobile-ad-revenue").value) || 0;
		document.getElementById("total-ad-revenue").value = desktopRevenueValue + tabletRevenueValue + mobileRevenueValue;
	}
	//calculate totalEPMV function
	function calculateTotalEpmv(){
	  const totalAdRevenue = parseFloat(document.getElementById("total-ad-revenue").value) || 0;
	  const totalSessions = parseFloat(document.getElementById("total-sessions").value) || 0;
	  document.getElementById("total-epmv").value = (parseFloat(totalAdRevenue))/(parseFloat(totalSessions)/1000)
	}

	//add box shadow to sticky header on scroll
 var navBar = document.getElementById("masthead");
      window.onscroll = function() {
        if (window.scrollY > 22) {
          navBar.classList.add("scrolled");
        } else {
          navBar.classList.remove("scrolled");
        }
      };

//CMP CODE
var copyText = document.querySelector(".cmp-copy-text");
copyText.querySelector("button").addEventListener("click", function () {
	var input = copyText.querySelector("input.text");
	input.select();
	document.execCommand("copy");
	copyText.classList.add("active");
	window.getSelection().removeAllRanges();
	setTimeout(function () {
		copyText.classList.remove("active");
	}, 2500);
});

</script><div data-wof-nonce="3ad95e3f88"></div><script>document.body.classList.remove("no-js");</script> <script>
	if ( -1 !== navigator.userAgent.indexOf( 'MSIE' ) || -1 !== navigator.appVersion.indexOf( 'Trident/' ) ) {
		document.body.classList.add( 'is-IE' );
	}
	</script>
<script>
	(function() {
		document.addEventListener( 'click', function( event ) {
			if ( event.target.hash && event.target.hash.includes( '#' ) && ! document.getElementById( 'site-navigation' ).contains( event.target ) ) {
				var mobileButton = document.getElementById( 'primary-mobile-menu' );
				twentytwentyoneToggleAriaExpanded( mobileButton );
			}
		} );
	})();
	</script>
<style id="core-block-supports-inline-css">
.wp-container-core-columns-layout-1.wp-container-core-columns-layout-1{flex-wrap:nowrap;}.wp-container-core-columns-layout-2.wp-container-core-columns-layout-2{flex-wrap:nowrap;}.wp-container-core-columns-layout-3.wp-container-core-columns-layout-3{flex-wrap:nowrap;}.wp-container-core-columns-layout-4.wp-container-core-columns-layout-4{flex-wrap:nowrap;}.wp-container-core-buttons-layout-2.wp-container-core-buttons-layout-2{justify-content:center;}.wp-container-core-columns-layout-5.wp-container-core-columns-layout-5{flex-wrap:nowrap;}.wp-container-core-columns-layout-6.wp-container-core-columns-layout-6{flex-wrap:nowrap;}.wp-container-core-columns-layout-7.wp-container-core-columns-layout-7{flex-wrap:nowrap;}.wp-container-core-columns-layout-8.wp-container-core-columns-layout-8{flex-wrap:nowrap;}.wp-container-core-columns-layout-9.wp-container-core-columns-layout-9{flex-wrap:nowrap;}.wp-container-core-columns-layout-10.wp-container-core-columns-layout-10{flex-wrap:nowrap;}.wp-container-core-columns-layout-11.wp-container-core-columns-layout-11{flex-wrap:nowrap;}.wp-container-core-columns-layout-12.wp-container-core-columns-layout-12{flex-wrap:nowrap;}.wp-container-core-columns-layout-13.wp-container-core-columns-layout-13{flex-wrap:nowrap;}.wp-container-core-columns-layout-14.wp-container-core-columns-layout-14{flex-wrap:nowrap;}.wp-container-core-columns-layout-15.wp-container-core-columns-layout-15{flex-wrap:nowrap;}.wp-container-core-columns-layout-16.wp-container-core-columns-layout-16{flex-wrap:nowrap;}.wp-container-core-columns-layout-17.wp-container-core-columns-layout-17{flex-wrap:nowrap;}.wp-container-core-columns-layout-18.wp-container-core-columns-layout-18{flex-wrap:nowrap;}.wp-container-core-columns-layout-19.wp-container-core-columns-layout-19{flex-wrap:nowrap;}.wp-container-core-columns-layout-20.wp-container-core-columns-layout-20{flex-wrap:nowrap;}.wp-container-core-columns-layout-21.wp-container-core-columns-layout-21{flex-wrap:nowrap;}.wp-container-core-columns-layout-22.wp-container-core-columns-layout-22{flex-wrap:nowrap;}.wp-container-core-columns-layout-23.wp-container-core-columns-layout-23{flex-wrap:nowrap;}.wp-container-core-columns-layout-24.wp-container-core-columns-layout-24{flex-wrap:nowrap;}.wp-container-core-columns-layout-25.wp-container-core-columns-layout-25{flex-wrap:nowrap;}.wp-container-core-columns-layout-26.wp-container-core-columns-layout-26{flex-wrap:nowrap;}.wp-container-core-buttons-layout-6.wp-container-core-buttons-layout-6{justify-content:center;}.wp-container-core-buttons-layout-7.wp-container-core-buttons-layout-7{justify-content:center;}.wp-container-core-columns-layout-27.wp-container-core-columns-layout-27{flex-wrap:nowrap;}.wp-container-core-columns-layout-28.wp-container-core-columns-layout-28{flex-wrap:nowrap;}.wp-container-core-columns-layout-29.wp-container-core-columns-layout-29{flex-wrap:nowrap;}.wp-container-core-columns-layout-30.wp-container-core-columns-layout-30{flex-wrap:nowrap;}.wp-container-core-columns-layout-31.wp-container-core-columns-layout-31{flex-wrap:nowrap;}.wp-container-core-columns-layout-32.wp-container-core-columns-layout-32{flex-wrap:nowrap;}.wp-container-core-columns-layout-33.wp-container-core-columns-layout-33{flex-wrap:nowrap;}.wp-container-core-columns-layout-34.wp-container-core-columns-layout-34{flex-wrap:nowrap;}.wp-container-core-columns-layout-35.wp-container-core-columns-layout-35{flex-wrap:nowrap;}.wp-container-core-columns-layout-36.wp-container-core-columns-layout-36{flex-wrap:nowrap;}.wp-container-core-buttons-layout-11.wp-container-core-buttons-layout-11{justify-content:center;}.wp-container-core-columns-layout-37.wp-container-core-columns-layout-37{flex-wrap:nowrap;}.wp-container-core-columns-layout-38.wp-container-core-columns-layout-38{flex-wrap:nowrap;}.wp-container-core-columns-layout-39.wp-container-core-columns-layout-39{flex-wrap:nowrap;}.wp-container-core-columns-layout-40.wp-container-core-columns-layout-40{flex-wrap:nowrap;}.wp-container-core-columns-layout-41.wp-container-core-columns-layout-41{flex-wrap:nowrap;}.wp-container-core-columns-layout-42.wp-container-core-columns-layout-42{flex-wrap:nowrap;}.wp-container-core-columns-layout-43.wp-container-core-columns-layout-43{flex-wrap:nowrap;}.wp-container-core-columns-layout-44.wp-container-core-columns-layout-44{flex-wrap:nowrap;}.wp-container-core-columns-layout-45.wp-container-core-columns-layout-45{flex-wrap:nowrap;}.wp-container-core-columns-layout-46.wp-container-core-columns-layout-46{flex-wrap:nowrap;}.wp-container-core-columns-layout-47.wp-container-core-columns-layout-47{flex-wrap:nowrap;}.wp-container-core-columns-layout-48.wp-container-core-columns-layout-48{flex-wrap:nowrap;}.wp-container-core-columns-layout-49.wp-container-core-columns-layout-49{flex-wrap:nowrap;}.wp-container-core-columns-layout-50.wp-container-core-columns-layout-50{flex-wrap:nowrap;}.wp-container-core-columns-layout-51.wp-container-core-columns-layout-51{flex-wrap:nowrap;}.wp-container-core-columns-layout-52.wp-container-core-columns-layout-52{flex-wrap:nowrap;}.wp-container-core-buttons-layout-14.wp-container-core-buttons-layout-14{justify-content:center;}.wp-container-core-columns-layout-53.wp-container-core-columns-layout-53{flex-wrap:nowrap;}.wp-container-core-columns-layout-54.wp-container-core-columns-layout-54{flex-wrap:nowrap;}.wp-container-core-columns-layout-55.wp-container-core-columns-layout-55{flex-wrap:nowrap;}.wp-container-core-columns-layout-56.wp-container-core-columns-layout-56{flex-wrap:nowrap;}.wp-container-core-columns-layout-57.wp-container-core-columns-layout-57{flex-wrap:nowrap;}.wp-container-core-columns-layout-58.wp-container-core-columns-layout-58{flex-wrap:nowrap;}.wp-container-core-columns-layout-59.wp-container-core-columns-layout-59{flex-wrap:nowrap;}.wp-container-core-columns-layout-60.wp-container-core-columns-layout-60{flex-wrap:nowrap;}.wp-container-core-buttons-layout-16.wp-container-core-buttons-layout-16{justify-content:center;}.wp-container-core-social-links-layout-1.wp-container-core-social-links-layout-1{justify-content:flex-start;}.wp-container-core-columns-layout-61.wp-container-core-columns-layout-61{flex-wrap:nowrap;}
</style>
<link rel="stylesheet" id="wpforms-choicesjs-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/css/choices.min.css?ver=9.0.1" media="all" />
<link rel="stylesheet" id="wpforms-content-frontend-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/fields/content/frontend.min.css?ver=1.8.2.3" media="all" />
<link rel="stylesheet" id="wpforms-password-field-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/fields/password.min.css?ver=1.8.2.3" media="all" />
<link rel="stylesheet" id="wpforms-smart-phone-field-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/fields/phone/intl-tel-input.min.css?ver=18.1.6" media="all" />
<link rel="stylesheet" id="wpforms-dropzone-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/dropzone.min.css?ver=5.9.3" media="all" />
<link rel="stylesheet" id="wpforms-modal-views-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/fields/richtext/modal-views.min.css?ver=1.8.2.3" media="all" />
<link rel="stylesheet" id="dashicons-css" href="//www.ezoic.com/wp-includes/css/dashicons.min.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="editor-buttons-css" href="//www.ezoic.com/wp-includes/css/editor.min.css?ver=6.4.2" media="all" />
<link rel="stylesheet" id="wpforms-richtext-frontend-full-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/fields/richtext/frontend-full.min.css?ver=1.8.2.3" media="all" />
<link rel="stylesheet" id="wpforms-layout-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/fields/layout.min.css?ver=1.8.2.3" media="all" />
<link rel="stylesheet" id="wpforms-modern-full-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/css/frontend/modern/wpforms-full.min.css?ver=1.8.2.3" media="all" />
<link rel="stylesheet" id="wpforms-jquery-timepicker-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/jquery.timepicker/jquery.timepicker.min.css?ver=1.11.5" media="all" />
<link rel="stylesheet" id="wpforms-flatpickr-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/flatpickr/flatpickr.min.css?ver=4.6.9" media="all" />
<link rel="stylesheet" id="wpforms-pro-modern-full-css" href="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/css/frontend/modern/wpforms-full.min.css?ver=1.8.2.3" media="all" />
<script id="twenty-twenty-one-ie11-polyfills-js-after">
( Element.prototype.matches && Element.prototype.closest && window.NodeList && NodeList.prototype.forEach ) || document.write( '<script src="//www.ezoic.com/wp-content/themes/twentytwentyone/assets/js/polyfills.js?ver=1.3.1626886655"></scr' + 'ipt>' );
</script>
<script src="//www.ezoic.com/wp-content/themes/twentytwentyone/assets/js/primary-navigation.js?ver=1.3.1626886655" id="twenty-twenty-one-primary-navigation-script-js"></script>
<script src="//www.ezoic.com/wp-content/themes/twentytwentyone/assets/js/responsive-embeds.js?ver=1.3.1626886655" id="twenty-twenty-one-responsive-embeds-script-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/js/wpforms.min.js?ver=1.8.2.3" id="wpforms-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/js/wpforms-conditional-logic-fields.min.js?ver=1.8.2.3" id="wpforms-builder-conditionals-js"></script>
<script id="wpforms-choicesjs-js-extra">
var wpforms_choicesjs_config = {"removeItemButton":"1","shouldSort":"","fuseOptions":{"threshold":0.1,"distance":1000},"loadingText":"Loading...","noResultsText":"No results found","noChoicesText":"No choices to choose from","itemSelectText":"Press to select","uniqueItemText":"Only unique values can be added","customAddItemText":"Only values matching specific conditions can be added"};
</script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/choices.min.js?ver=9.0.1" id="wpforms-choicesjs-js"></script>
<script id="zxcvbn-async-js-extra">
var _zxcvbnSettings = {"src":"https:\/\/www.ezoic.com\/wp-includes\/js\/zxcvbn.min.js"};
</script>
<script src="//www.ezoic.com/wp-includes/js/zxcvbn-async.min.js?ver=1.0" id="zxcvbn-async-js"></script>
<script src="//www.ezoic.com/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2" id="wp-polyfill-inert-js"></script>
<script src="//www.ezoic.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0" id="regenerator-runtime-js"></script>
<script src="//www.ezoic.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script src="//www.ezoic.com/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1" id="wp-hooks-js"></script>
<script src="//www.ezoic.com/wp-includes/js/dist/i18n.min.js?ver=7701b0c3857f914212ef" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script id="password-strength-meter-js-extra">
var pwsL10n = {"unknown":"Password strength unknown","short":"Very weak","bad":"Weak","good":"Medium","strong":"Strong","mismatch":"Mismatch"};
</script>
<script src="//www.ezoic.com/wp-admin/js/password-strength-meter.min.js?ver=6.4.2" id="password-strength-meter-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/js/fields/password.min.js?ver=1.8.2.3" id="wpforms-password-field-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/lib/intl-tel-input/jquery.intl-tel-input.min.js?ver=18.1.6" id="wpforms-smart-phone-field-js"></script>
<script id="wpforms-dropzone-js-extra">
var wpforms_file_upload = {"url":"https:\/\/www.ezoic.com\/wp-admin\/admin-ajax.php","errors":{"default_error":"Something went wrong, please try again.","file_not_uploaded":"This file was not uploaded.","file_limit":"File uploads exceed the maximum number allowed ({fileLimit}).","file_extension":"File type is not allowed.","file_size":"File exceeds the max size allowed.","post_max_size":"File exceeds the upload limit allowed (1 GB)."},"loading_message":"File upload is in progress. Please submit the form once uploading is completed."};
</script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/lib/dropzone.min.js?ver=5.9.3" id="wpforms-dropzone-js"></script>
<script src="//www.ezoic.com/wp-includes/js/underscore.min.js?ver=1.13.4" id="underscore-js"></script>
<script id="wp-util-js-extra">
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
</script>
<script src="//www.ezoic.com/wp-includes/js/wp-util.min.js?ver=6.4.2" id="wp-util-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/js/wpforms-file-upload.es5.min.js?ver=1.8.2.3" id="wpforms-file-upload-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/lib/jquery.payment.min.js?ver=1.8.2.3" id="wpforms-payment-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/pro/js/fields/richtext.min.js?ver=1.8.2.3" id="wpforms-richtext-field-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/jquery.validate.min.js?ver=1.19.5" id="wpforms-validation-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/jquery.inputmask.min.js?ver=5.0.7-beta.29" id="wpforms-maskedinput-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/mailcheck.min.js?ver=1.1.2" id="wpforms-mailcheck-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/punycode.min.js?ver=1.0.0" id="wpforms-punycode-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/js/utils.min.js?ver=1.8.2.3" id="wpforms-generic-utils-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/js/wpforms-modern.min.js?ver=1.8.2.3" id="wpforms-modern-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/flatpickr/flatpickr.min.js?ver=4.6.9" id="wpforms-flatpickr-js"></script>
<script src="//www.ezoic.com/wp-content/plugins/wpforms/assets/lib/jquery.timepicker/jquery.timepicker.min.js?ver=1.11.5" id="wpforms-jquery-timepicker-js"></script>
<script src="//www.google.com/recaptcha/api.js?onload=wpformsRecaptchaLoad&amp;render=explicit" id="wpforms-recaptcha-js"></script>
<script id="wpforms-recaptcha-js-after">
var wpformsDispatchEvent = function (el, ev, custom) {
				var e = document.createEvent(custom ? "CustomEvent" : "HTMLEvents");
				custom ? e.initCustomEvent(ev, true, true, false) : e.initEvent(ev, true, true);
				el.dispatchEvent(e);
			};
		var wpformsRecaptchaCallback = function (el) {
				var hdn = el.parentNode.querySelector(".wpforms-recaptcha-hidden");
				var err = el.parentNode.querySelector("#g-recaptcha-hidden-error");
				hdn.value = "1";
				wpformsDispatchEvent(hdn, "change", false);
				hdn.classList.remove("wpforms-error");
				err && hdn.parentNode.removeChild(err);
			};
		var wpformsRecaptchaLoad = function () {
					Array.prototype.forEach.call(document.querySelectorAll(".g-recaptcha"), function (el) {
						try {
							var recaptchaID = grecaptcha.render(el, {
								callback: function () {
									wpformsRecaptchaCallback(el);
								}
							});
							el.setAttribute("data-recaptcha-id", recaptchaID);
						} catch (error) {}
					});
					wpformsDispatchEvent(document, "wpformsRecaptchaLoaded", true);
				};
			
</script>
<script>
		/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",(function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}),!1);
		</script>
<script type="text/javascript">
/* <![CDATA[ */
var wpforms_settings = {"val_required":"This field is required.","val_email":"Please enter a valid email address.","val_email_suggestion":"Did you mean {suggestion}?","val_email_suggestion_title":"Click to accept this suggestion.","val_email_restricted":"This email address is not allowed.","val_number":"Please enter a valid number.","val_number_positive":"Please enter a valid positive number.","val_confirm":"Field values do not match.","val_checklimit":"You have exceeded the number of allowed selections: {#}.","val_limit_characters":"{count} of {limit} max characters.","val_limit_words":"{count} of {limit} max words.","val_recaptcha_fail_msg":"Google reCAPTCHA verification failed, please try again later.","val_turnstile_fail_msg":"Cloudflare Turnstile verification failed, please try again later.","val_inputmask_incomplete":"Please fill out the field in required format.","uuid_cookie":"1","locale":"en","wpforms_plugin_url":"https:\/\/www.ezoic.com\/wp-content\/plugins\/wpforms\/","gdpr":"","ajaxurl":"https:\/\/www.ezoic.com\/wp-admin\/admin-ajax.php","mailcheck_enabled":"1","mailcheck_domains":[],"mailcheck_toplevel_domains":["dev"],"is_ssl":"1","page_title":"Monetization","page_id":"781","currency_code":"USD","currency_thousands":",","currency_decimals":"2","currency_decimal":".","currency_symbol":"$","currency_symbol_pos":"left","css_vars":["field-border-radius","field-background-color","field-border-color","field-text-color","label-color","label-sublabel-color","label-error-color","button-border-radius","button-background-color","button-text-color","field-size-input-height","field-size-input-spacing","field-size-font-size","field-size-line-height","field-size-padding-h","field-size-checkbox-size","field-size-sublabel-spacing","field-size-icon-size","label-size-font-size","label-size-line-height","label-size-sublabel-font-size","label-size-sublabel-line-height","button-size-font-size","button-size-height","button-size-padding-h","button-size-margin-top"],"val_requiredpayment":"Payment is required.","val_creditcard":"Please enter a valid credit card number.","val_post_max_size":"The total size of the selected files {totalSize} MB exceeds the allowed limit {maxSize} MB.","val_time12h":"Please enter time in 12-hour AM\/PM format (eg 8:45 AM).","val_time24h":"Please enter time in 24-hour format (eg 22:45).","val_time_limit":"Please enter time between {minTime} and {maxTime}.","val_url":"Please enter a valid URL.","val_fileextension":"File type is not allowed.","val_filesize":"File exceeds max size allowed. File was not uploaded.","post_max_size":"1073741824","isModernMarkupEnabled":"1","formErrorMessagePrefix":"Form error message","errorMessagePrefix":"Error message","submitBtnDisabled":"Submit button is disabled during form submission.","val_unique":"The value must be unique.","val_password_strength":"A stronger password is required. Consider using upper and lower case letters, numbers, and symbols.","val_phone":"Please enter a valid phone number.","indicatorStepsPattern":"Step {current} of {total}","richtext_add_media_button":"","entry_preview_iframe_styles":["https:\/\/www.ezoic.com\/wp-includes\/js\/tinymce\/skins\/lightgray\/content.min.css?ver=6.4.2","https:\/\/www.ezoic.com\/wp-includes\/css\/dashicons.min.css?ver=6.4.2","https:\/\/www.ezoic.com\/wp-includes\/js\/tinymce\/skins\/wordpress\/wp-content.css?ver=6.4.2"]}
/* ]]> */
</script>
<script>__ez.queue.addFile('/tardisrocinante/vitals.js', '/tardisrocinante/vitals.js?gcb=22&cb=3', false, ['/parsonsmaize/mulvane.js'], true, false, true, false);</script>
<script>var _audins_dom="ezoic_com",_audins_did=144551;__ez.queue.addDelayFunc("audins.js","__ez.script.add", "//go.ezodn.com/detroitchicago/audins.js?cb=3");</script><noscript><div style="display:none;"><img src="//pixel.quantserve.com/pixel/p-31iz6hfFutd16.gif?labels=Domain.ezoic_com,DomainId.144551" border="0" height="1" width="1" alt="Quantcast"/></div></noscript>
<script>__ez.queue.addFile('/beardeddragon/drake.js', '/beardeddragon/drake.js?gcb=22&cb=8', false, [], true, false, true, false);</script>
<script type="text/javascript" style="display:none;">var __ez_dims = (function() {
		var setCookie = function( name, content, expiry ) {
			return document.cookie = name+'='+content+((expiry)?';expires='+(new Date(Math.floor(new Date().getTime()+expiry*1000)).toUTCString()):'')+';path=/';
		};
		var ffid = 1;
		var oh = window.screen.height;
		var ow = window.screen.width;
		var h = ffid === 1 ? oh : (oh > ow) ? oh : ow;
		var w = ffid === 1 ? ow : (oh > ow) ? ow : oh;
		var uh = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
		var uw = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
	
		var setAllCookies = function() {
			setCookie('ezds', encodeURIComponent('ffid='+ffid+',w='+w+',h='+h), (31536e3*7));
			setCookie('ezohw', encodeURIComponent('w='+uw+',h='+uh), (31536e3*7));    
		};
	
		if (window.ezTcfConsent && window.ezTcfConsent.loaded) {
			if (window.ezTcfConsent.understand_audiences) { 
				setAllCookies();
			}
		} else if (typeof getEzConsentData === "function") {
			getEzConsentData().then(function (ezTcfConsent) {
				if (ezTcfConsent && ezTcfConsent.loaded) {
					if (ezTcfConsent.understand_audiences) { 
						setAllCookies();
					}
				} else {
					console.error("cannot get ez consent data");
					setAllCookies();
				}
			});
		} else {
			console.error("getEzConsentData is not a function");
			setAllCookies();
		}
	
	})();</script>
<script type="text/javascript" style="display:none;" async>__ez.queue.addFile('/parsonsmaize/chanute.js', '/parsonsmaize/chanute.js?a=a&cb=9&dcb=195-22&shcb=34', true, ['/parsonsmaize/mulvane.js'], true, false, false, false);</script>
<script type="text/javascript" style="display:none;" async>__ez.queue.addFile('/porpoiseant/jellyfish.js', '/porpoiseant/jellyfish.js?a=a&cb=13&dcb=195-22&shcb=34', false, [], true, false, false, false);</script>
<script>if(typeof _ezaq!=="undefined"&&typeof __ez=="object"&&typeof __ez.bit=="object"&&typeof __ezDotData=="function"){if("cookieDeprecationLabel"in navigator){navigator.cookieDeprecationLabel.getValue().then((label)=>{__ez.bit.AddAndFire(_ezaq["page_view_id"],[new __ezDotData("chrome_cookie_deprecation_label",label),]);});}}</script><script data-cfasync="false">function _emitEzConsentEvent(){var customEvent=new CustomEvent("ezConsentEvent",{detail:{ezTcfConsent:window.ezTcfConsent},bubbles:true,cancelable:true,});document.dispatchEvent(customEvent);}
(function(window,document){function _setAllEzConsentTrue(){window.ezTcfConsent.loaded=true;window.ezTcfConsent.store_info=true;window.ezTcfConsent.develop_and_improve_services=true;window.ezTcfConsent.measure_ad_performance=true;window.ezTcfConsent.measure_content_performance=true;window.ezTcfConsent.select_basic_ads=true;window.ezTcfConsent.create_ad_profile=true;window.ezTcfConsent.select_personalized_ads=true;window.ezTcfConsent.create_content_profile=true;window.ezTcfConsent.select_personalized_content=true;window.ezTcfConsent.understand_audiences=true;window.ezTcfConsent.use_limited_data_to_select_content=true;window.ezTcfConsent.select_personalized_content=true;}
function _clearEzConsentCookie(){document.cookie="ezCMPCookieConsent=tcf2;Domain=.ezoic.com;Path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";}
_clearEzConsentCookie();if(typeof window.__tcfapi!=="undefined"){window.ezgconsent=false;var amazonHasRun=false;function _ezAllowed(tcdata,purpose){return(tcdata.purpose.consents[purpose]||tcdata.purpose.legitimateInterests[purpose]);}
function _reloadAds(){if(typeof window.ezorefgsl==="function"&&typeof window.ezslots==="object"){if(typeof __ezapsFetchBids=="function"&&amazonHasRun===false){ezapsFetchBids(__ezaps);if(typeof __ezapsVideo!="undefined"){ezapsFetchBids(__ezapsVideo,"video");}
amazonHasRun=true;}
var slots=[];for(var i=0;i<window.ezslots.length;i++){if(window[window.ezslots[i]]&&typeof window[window.ezslots[i]]==="object"){slots.push(window[window.ezslots[i]]);}else{setTimeout(_reloadAds,100);return false;}}
for(var i=0;i<slots.length;i++){window.ezorefgsl(slots[i]);}}else if(!window.ezadtimeoutset){window.ezadtimeoutset=true;setTimeout(_reloadAds,100);}}
function _handleConsentDecision(tcdata){window.ezTcfConsent.loaded=true;if(!tcdata.vendor.consents["347"]&&!tcdata.vendor.legitimateInterests["347"]){window._emitEzConsentEvent();return;}
window.ezTcfConsent.store_info=_ezAllowed(tcdata,"1");window.ezTcfConsent.develop_and_improve_services=_ezAllowed(tcdata,"10");window.ezTcfConsent.measure_content_performance=_ezAllowed(tcdata,"8");window.ezTcfConsent.select_basic_ads=_ezAllowed(tcdata,"2");window.ezTcfConsent.create_ad_profile=_ezAllowed(tcdata,"3");window.ezTcfConsent.select_personalized_ads=_ezAllowed(tcdata,"4");window.ezTcfConsent.create_content_profile=_ezAllowed(tcdata,"5");window.ezTcfConsent.measure_ad_performance=_ezAllowed(tcdata,"7");window.ezTcfConsent.use_limited_data_to_select_content=_ezAllowed(tcdata,"11");window.ezTcfConsent.select_personalized_content=_ezAllowed(tcdata,"6");window.ezTcfConsent.understand_audiences=_ezAllowed(tcdata,"9");window._emitEzConsentEvent();}
__tcfapi("addEventListener",2,function(tcdata,success){if(!success||!tcdata){window._emitEzConsentEvent();return;}
if(!tcdata.gdprApplies){_setAllEzConsentTrue();window._emitEzConsentEvent();return;}
if(tcdata.eventStatus==="useractioncomplete"||tcdata.eventStatus==="tcloaded"){_handleConsentDecision(tcdata);if(tcdata.purpose.consents["1"]===true&&tcdata.vendor.consents["755"]!==false){window.ezgconsent=true;(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;_reloadAds();}else{_reloadAds();}
if(window.__ezconsent){__ezconsent.setEzoicConsentSettings(ezConsentCategories);}
__tcfapi("removeEventListener",2,function(success){return null;},tcdata.listenerId);if(!(tcdata.purpose.consents["1"]===true&&_ezAllowed(tcdata,"2")&&_ezAllowed(tcdata,"3")&&_ezAllowed(tcdata,"4"))){if(typeof __ez=="object"&&typeof __ez.bit=="object"&&typeof window["_ezaq"]=="object"&&typeof window["_ezaq"]["page_view_id"]=="string"){__ez.bit.AddAndFire(window["_ezaq"]["page_view_id"],[new __ezDotData("non_personalized_ads",true),]);}}}});}else{_setAllEzConsentTrue();window._emitEzConsentEvent();}})(window,document);</script></body></html>