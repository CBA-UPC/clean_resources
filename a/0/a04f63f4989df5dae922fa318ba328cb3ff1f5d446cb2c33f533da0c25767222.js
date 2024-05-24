/* >>> file start: js/front-bundled/dist/sanitizeHtml.js */
/*! For license information please see sanitizeHtml.js.LICENSE.txt */
(()=>{var e={7856:function(e){e.exports=function(){"use strict";const{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:r,getOwnPropertyDescriptor:o}=Object;let{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;c||(c=,i||(i=function(e){return e}),a||(a=,s||(s=;const u=_(Array.prototype.forEach),m=_(Array.prototype.pop),f=_(Array.prototype.push),p=_(String.prototype.toLowerCase),d=_(String.prototype.toString),h=_(String.prototype.match),g=_(String.prototype.replace),y=_(String.prototype.indexOf),T=_(String.prototype.trim),b=_(RegExp.prototype.test),E=(A=TypeError,;var A;t w=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),O=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),x=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),C=i(["#text"]),k=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),I=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),M=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),j=a(/<%[\w\W]*|[\w\W]*%>/gm),H=a(/\${[\w\W]*}/gm),z=a(/^data-[\-\w.\u00B7-\uFFFF]/),F=a(/^aria-[\-\w]+$/),B=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),W=a(/^(?:\w+script|data):/i),G=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Y=a(/^html$/i);var $=Object.freeze({__proto__:null,MUSTACHE_EXPR:U,ERB_EXPR:j,TMPLIT_EXPR:H,DATA_ATTR:z,ARIA_ATTR:F,IS_ALLOWED_URI:B,IS_SCRIPT_OR_DATA:W,ATTR_WHITESPACE:G,DOCTYPE_NAME:Y});const q=return function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q();const r=if(r.version="3.0.3",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;const o=n.document,a=o.currentScript;let{document:l}=n;const{DocumentFragment:c,HTMLTemplateElement:s,Node:A,Element:_,NodeFilter:U,NamedNodeMap:j=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:H,DOMParser:z,trustedTypes:F}=n,W=_.prototype,G=S(W,"cloneNode"),X=S(W,"nextSibling"),K=S(W,"childNodes"),V=S(W,"parentNode");if("function"==typeof s){const e=l.createElement("template");e.content&&e.content.ownerDocument&&(l=e.content.ownerDocument)}let J,Z="";const{implementation:Q,createNodeIterator:ee,createDocumentFragment:te,getElementsByTagName:ne}=l,{importNode:re}=o;let oe={};r.isSupported="function"==typeof e&&"function"==typeof V&&Q&&void 0!==Q.createHTMLDocument;const{MUSTACHE_EXPR:ie,ERB_EXPR:ae,TMPLIT_EXPR:le,DATA_ATTR:ce,ARIA_ATTR:se,IS_SCRIPT_OR_DATA:ue,ATTR_WHITESPACE:me}=$;let{IS_ALLOWED_URI:fe}=$,pe=null;const de=N({},[...w,...O,...R,...L,...C]);let he=null;const ge=N({},[...k,...I,...M,...P]);let ye=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Te=null,be=null,Ee=!0,Ae=!0,_e=!1,Ne=!0,ve=!1,Se=!1,we=!1,Oe=!1,Re=!1,De=!1,Le=!1,xe=!0,Ce=!1,ke=!0,Ie=!1,Me={},Pe=null;const Ue=N({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let je=null;const He=N({},["audio","video","img","source","image","track"]);let ze=null;const Fe=N({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Be="http://www.w3.org/1998/Math/MathML",We="http://www.w3.org/2000/svg",Ge="http://www.w3.org/1999/xhtml";let Ye=Ge,$e=!1,qe=null;const Xe=N({},[Be,We,Ge],d);let Ke;const Ve=["application/xhtml+xml","text/html"];let Je,Ze=null;const Qe=l.createElement("form"),et=tt=nt=N({},["mi","mo","mn","ms","mtext"]),rt=N({},["foreignobject","desc","title","annotation-xml"]),ot=N({},["title","style","font","a","script"]),it=N({},O);N(it,R),N(it,D);const at=N({},L);N(at,x);const lt=ct=st=ut=mt=ft=pt=function(e){let t;if(ft("beforeSanitizeElements",e,null),(n=e)instanceof H&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof j)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore||"function"!=typeof n.hasChildNodes))return lt(e),!0;var n;const o=Je(e.nodeName);if(ft("uponSanitizeElement",e,{tagName:o,allowedTags:pe}),e.hasChildNodes()&&!mt(e.firstElementChild)&&(!mt(e.content)||!mt(e.content.firstElementChild))&&b(/<[/\w]/g,e.innerHTML)&&b(/<[/\w]/g,e.textContent))return lt(e),!0;if(!pe[o]||Te[o]){if(!Te[o]&&ht(o)){if(ye.tagNameCheck instanceof RegExp&&b(ye.tagNameCheck,o))return!1;if(ye.tagNameCheck instanceof Function&&ye.tagNameCheck(o))return!1}if(ke&&!Pe[o]){const t=V(e)||e.parentNode,n=K(e)||e.childNodes;if(n&&t)for(let r=n.length-1;r>=0;--r)t.insertBefore(G(n[r],!0),X(e))}return lt(e),!0}return e instanceof _&&!e)?(lt(e),!0):"noscript"!==o&&"noembed"!==o||!b(/<\/no(script|embed)/i,e.innerHTML)?(ve&&3===e.nodeType&&(t=e.textContent,t=g(t,ie," "),t=g(t,ae," "),t=g(t,le," "),e.textContent!==t&&(f(r.removed,{element:e.cloneNode()}),e.textContent=t)),ft("afterSanitizeElements",e,null),!1):(lt(e),!0)},dt=ht=gt=function(e){let t,n,o,i;ft("beforeSanitizeAttributes",e,null);const{attributes:a}=e;if(!a)return;const l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:he};for(i=a.length;i--;){t=a[i];const{name:c,namespaceURI:s}=t;if(n="value"===c?t.value:T(t.value),o=Je(c),l.attrName=o,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,ft("uponSanitizeAttribute",e,l),n=l.attrValue,l.forceKeepAttr)continue;if(ct(c,e),!l.keepAttr)continue;if(!Ne&&b(/\/>/i,n)){ct(c,e);continue}ve&&(n=g(n,ie," "),n=g(n,ae," "),n=g(n,le," "));const u=Je(e.nodeName);if(dt(u,o,n)){if(!Ce||"id"!==o&&"name"!==o||(ct(c,e),n="user-content-"+n),J&&"object"==typeof F&&"function"==typeof F.getAttributeType)if(s);else switch(F.getAttributeType(u,o)){case"TrustedHTML":n=J.createHTML(n);break;case"TrustedScriptURL":n=J.createScriptURL(n)}try{s?e.setAttributeNS(s,c,n):e.setAttribute(c,n),m(r.removed)}catch(e){}}}ft("afterSanitizeAttributes",e,null)},yt=return r.sanitize=r.setConfig=r.clearConfig=r.isValidAttribute=r.addHook=r.removeHook=r.removeHooks=r.removeAllHooks=r}()}()}},t={};.n=n.d=n.o=(()=>{"use strict";var e=n(7856);efine("LJ.Util.sanitizeHtml");var a={ADD_TAGS:["iframe","lj"],ADD_ATTR:["allow","allowfullscreen","frameborder","scrolling","lj-screenable","target","allowtransparency","url","user","buttons","text","whoview","whovote","to","from"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:/^lj/,attributeNameCheck:null,allowCustomizedBuiltInElements:!0}};LJ.Util.sanitizeHtml=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof t)return console.warn("sanitizeHtml: ".concat(o(t)," is an invalid param type")),t;var l=r(r({},a),n),c=t);return function(e){var t=e;return[[/<(lj [^>]*)>/g,/<\/lj\s*>/g],[/<(lj-like[^>]*)>/g,/<\/lj-like[^>]*>/g],[/<(lj-map[^>]*)>/g,/<\/lj-map[^>]*>/g]].forEach((function(e){var n,r,o=(r=2,n=e)||n,r)||n,r)||)),a=o[0],l=o[1];t=t.replace(a,"<$1/>").replace(l,"")})),t}(e.sanitize(c,l))}})()})();
/* <<< file end: js/front-bundled/dist/sanitizeHtml.js */

//# map link was there [sanitizeHtml.js.map]
