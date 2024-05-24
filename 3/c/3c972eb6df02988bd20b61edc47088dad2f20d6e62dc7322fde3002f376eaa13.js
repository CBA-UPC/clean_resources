@charset "UTF-8";
/* Slider */
.slick-loading .slick-list {
  background: #fff url("./ajax-loader.gif") center center no-repeat;
}

/* Icons */
@font-face {
  font-family: "slick";
  src: url("./fonts/slick.eot");
  src: url("./fonts/slick.eot?#iefix") format("embedded-opentype"), url("./fonts/slick.woff") format("woff"), url("./fonts/slick.ttf") format("truetype"), url("./fonts/slick.svg#slick") format("svg");
  font-weight: normal;
  font-style: normal;
}

/* Arrows */
.slick-prev,
.slick-next {
  position: absolute;
  display: block;
  height: 20px;
  width: 20px;
  line-height: 0px;
  font-size: 0px;
  cursor: pointer;
  background: transparent;
  color: transparent;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  padding: 0;
  border: none;
  outline: none;
}

.slick-prev:hover, .slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  outline: none;
  background: transparent;
  color: transparent;
}

.slick-prev:hover:before, .slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}

.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;
  color: white;
  opacity: 0.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -25px;
}

[dir="rtl"] .slick-prev {
  left: auto;
  right: -25px;
}

.slick-prev:before {
  content: "←";
}

[dir="rtl"] .slick-prev:before {
  content: "→";
}

.slick-next {
  right: -25px;
}

[dir="rtl"] .slick-next {
  left: -25px;
  right: auto;
}

.slick-next:before {
  content: "→";
}

[dir="rtl"] .slick-next:before {
  content: "←";
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
}

.slick-dots li {
  position: relative;
  display: inline-block;
  height: 20px;
  width: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}

.slick-dots li button {
  border: 0;
  background: transparent;
  display: block;
  height: 20px;
  width: 20px;
  outline: none;
  line-height: 0px;
  font-size: 0px;
  color: transparent;
  padding: 5px;
  cursor: pointer;
}

.slick-dots li button:hover, .slick-dots li button:focus {
  outline: none;
}

.slick-dots li button:hover:before, .slick-dots li button:focus:before {
  opacity: 1;
}

.slick-dots li button:before {
  position: absolute;
  top: 0;
  left: 0;
  content: "•";
  width: 20px;
  height: 20px;
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;
  text-align: center;
  color: black;
  opacity: 0.25;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
  color: black;
  opacity: 0.75;
}
/*# sourceMappingURL=slick-theme.css.map */algradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),b=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),N=r(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),R=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),k=r(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),w=r(["#text"]),D=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),C=r(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),L=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),x=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),v=i(/\{\{[\w\W]*|[\w\W]*\}\}/gm),O=i(/<%[\w\W]*|[\w\W]*%>/gm),M=i(/\${[\w\W]*}/gm),I=i(/^data-[\-\w.\u00B7-\uFFFF]/),P=i(/^aria-[\-\w]+$/),U=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),F=i(/^(?:\w+script|data):/i),H=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),z=i(/^html$/i);var B=Object.freeze({__proto__:null,MUSTACHE_EXPR:v,ERB_EXPR:O,TMPLIT_EXPR:M,DATA_ATTR:I,ARIA_ATTR:P,IS_ALLOWED_URI:U,IS_SCRIPT_OR_DATA:F,ATTR_WHITESPACE:H,DOCTYPE_NAME:z});const getGlobal=()=>"undefined"==typeof window?null:window,G=function _createTrustedTypesPolicy(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function createDOMPurify(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:getGlobal();const DOMPurify=e=>createDOMPurify(e);if(DOMPurify.version="3.0.3",DOMPurify.removed=[],!t||!t.document||9!==t.document.nodeType)return DOMPurify.isSupported=!1,DOMPurify;const n=t.document,o=n.currentScript;let{document:a}=t;const{DocumentFragment:i,HTMLTemplateElement:l,Node:c,Element:s,NodeFilter:v,NamedNodeMap:O=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:M,DOMParser:I,trustedTypes:P}=t,F=s.prototype,H=lookupGetter(F,"cloneNode"),W=lookupGetter(F,"nextSibling"),Y=lookupGetter(F,"childNodes"),j=lookupGetter(F,"parentNode");if("function"==typeof l){const e=a.createElement("template");e.content&&e.content.ownerDocument&&(a=e.content.ownerDocument)}let q,V="";const{implementation:X,createNodeIterator:K,createDocumentFragment:$,getElementsByTagName:Z}=a,{importNode:J}=n;let Q={};DOMPurify.isSupported="function"==typeof e&&"function"==typeof j&&X&&void 0!==X.createHTMLDocument;const{MUSTACHE_EXPR:ee,ERB_EXPR:te,TMPLIT_EXPR:ne,DATA_ATTR:oe,ARIA_ATTR:ae,IS_SCRIPT_OR_DATA:re,ATTR_WHITESPACE:ie}=B;let{IS_ALLOWED_URI:le}=B,ce=null;const se=addToSet({},[..._,...A,...b,...R,...w]);let ue=null;const de=addToSet({},[...D,...C,...L,...x]);let me=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),pe=null,fe=null,he=!0,Te=!0,ge=!1,ye=!0,Ee=!1,Se=!1,_e=!1,Ae=!1,be=!1,Ne=!1,Re=!1,ke=!0,we=!1;const De="user-content-";let Ce=!0,Le=!1,xe={},ve=null;const Oe=addToSet({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Me=null;const Ie=addToSet({},["audio","video","img","source","image","track"]);let Pe=null;const Ue=addToSet({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Fe="http://www.w3.org/1998/Math/MathML",He="http://www.w3.org/2000/svg",ze="http://www.w3.org/1999/xhtml";let Be=ze,Ge=!1,We=null;const Ye=addToSet({},[Fe,He,ze],f);let je;const qe=["application/xhtml+xml","text/html"],Ve="text/html";let Xe,Ke=null;const $e=a.createElement("form"),Ze=function isRegexOrFunction(e){return e instanceof RegExp||e instanceof Function},Je=function _parseConfig(e){if(!Ke||Ke!==e){if(e&&"object"==typeof e||(e={}),e=clone(e),je=je=-1===qe.indexOf(e.PARSER_MEDIA_TYPE)?Ve:e.PARSER_MEDIA_TYPE,Xe="application/xhtml+xml"===je?f:p,ce="ALLOWED_TAGS"in e?addToSet({},e.ALLOWED_TAGS,Xe):se,ue="ALLOWED_ATTR"in e?addToSet({},e.ALLOWED_ATTR,Xe):de,We="ALLOWED_NAMESPACES"in e?addToSet({},e.ALLOWED_NAMESPACES,f):Ye,Pe="ADD_URI_SAFE_ATTR"in e?addToSet(clone(Ue),e.ADD_URI_SAFE_ATTR,Xe):Ue,Me="ADD_DATA_URI_TAGS"in e?addToSet(clone(Ie),e.ADD_DATA_URI_TAGS,Xe):Ie,ve="FORBID_CONTENTS"in e?addToSet({},e.FORBID_CONTENTS,Xe):Oe,pe="FORBID_TAGS"in e?addToSet({},e.FORBID_TAGS,Xe):{},fe="FORBID_ATTR"in e?addToSet({},e.FORBID_ATTR,Xe):{},xe="USE_PROFILES"in e&&e.USE_PROFILES,he=!1!==e.ALLOW_ARIA_ATTR,Te=!1!==e.ALLOW_DATA_ATTR,ge=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ye=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Ee=e.SAFE_FOR_TEMPLATES||!1,Se=e.WHOLE_DOCUMENT||!1,be=e.RETURN_DOM||!1,Ne=e.RETURN_DOM_FRAGMENT||!1,Re=e.RETURN_TRUSTED_TYPE||!1,Ae=e.FORCE_BODY||!1,ke=!1!==e.SANITIZE_DOM,we=e.SANITIZE_NAMED_PROPS||!1,Ce=!1!==e.KEEP_CONTENT,Le=e.IN_PLACE||!1,le=e.ALLOWED_URI_REGEXP||U,Be=e.NAMESPACE||ze,me=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(me.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(me.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(me.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ee&&(Te=!1),Ne&&(be=!0),xe&&(ce=addToSet({},[...w]),ue=[],!0===xe.html&&(addToSet(ce,_),addToSet(ue,D)),!0===xe.svg&&(addToSet(ce,A),addToSet(ue,C),addToSet(ue,x)),!0===xe.svgFilters&&(addToSet(ce,b),addToSet(ue,C),addToSet(ue,x)),!0===xe.mathMl&&(addToSet(ce,R),addToSet(ue,L),addToSet(ue,x))),e.ADD_TAGS&&(ce===se&&(ce=clone(ce)),addToSet(ce,e.ADD_TAGS,Xe)),e.ADD_ATTR&&(ue===de&&(ue=clone(ue)),addToSet(ue,e.ADD_ATTR,Xe)),e.ADD_URI_SAFE_ATTR&&addToSet(Pe,e.ADD_URI_SAFE_ATTR,Xe),e.FORBID_CONTENTS&&(ve===Oe&&(ve=clone(ve)),addToSet(ve,e.FORBID_CONTENTS,Xe)),Ce&&(ce["#text"]=!0),Se&&addToSet(ce,["html","head","body"]),ce.table&&(addToSet(ce,["tbody"]),delete pe.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');q=e.TRUSTED_TYPES_POLICY,V=q.createHTML("")}else void 0===q&&(q=G(P,o)),null!==q&&"string"==typeof V&&(V=q.createHTML(""));r&&r(e),Ke=e}},Qe=addToSet({},["mi","mo","mn","ms","mtext"]),et=addToSet({},["foreignobject","desc","title","annotation-xml"]),tt=addToSet({},["title","style","font","a","script"]),nt=addToSet({},A);addToSet(nt,b),addToSet(nt,N);const ot=addToSet({},R);addToSet(ot,k);const at=function _checkValidNamespace(e){let t=j(e);t&&t.tagName||(t={namespaceURI:Be,tagName:"template"});const n=p(e.tagName),o=p(t.tagName);return!!We[e.namespaceURI]&&(e.namespaceURI===He?t.namespaceURI===ze?"svg"===n:t.namespaceURI===Fe?"svg"===n&&("annotation-xml"===o||Qe[o]):Boolean(nt[n]):e.namespaceURI===Fe?t.namespaceURI===ze?"math"===n:t.namespaceURI===He?"math"===n&&et[o]:Boolean(ot[n]):e.namespaceURI===ze?!(t.namespaceURI===He&&!et[o])&&!(t.namespaceURI===Fe&&!Qe[o])&&!ot[n]&&(tt[n]||!nt[n]):!("application/xhtml+xml"!==je||!We[e.namespaceURI]))},rt=function _forceRemove(e){m(DOMPurify.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},it=function _removeAttribute(e,t){try{m(DOMPurify.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){m(DOMPurify.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ue[e])if(be||Ne)try{rt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},lt=function _initDocument(e){let t,n;if(Ae)e="<remove></remove>"+e;else{const t=h(e,/^[\r\n\t ]+/);n=t&&t[0]}"application/xhtml+xml"===je&&Be===ze&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const o=q?q.createHTML(e):e;if(Be===ze)try{t=(new I).parseFromString(o,je)}catch(e){}if(!t||!t.documentElement){t=X.createDocument(Be,"template",null);try{t.documentElement.innerHTML=Ge?V:o}catch(e){}}const r=t.body||t.documentElement;return e&&n&&r.insertBefore(a.createTextNode(n),r.childNodes[0]||null),Be===ze?Z.call(t,Se?"html":"body")[0]:Se?t.documentElement:r},ct=function _createIterator(e){return K.call(e.ownerDocument||e,e,v.SHOW_ELEMENT|v.SHOW_COMMENT|v.SHOW_TEXT,null,!1)},st=function _isClobbered(e){return e instanceof M&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof O)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ut=function _isNode(e){return"object"==typeof c?e instanceof c:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},dt=function _executeHook(e,t,n){Q[e]&&u(Q[e],(e=>{e.call(DOMPurify,t,n,Ke)}))},mt=function _sanitizeElements(e){let t;if(dt("beforeSanitizeElements",e,null),st(e))return rt(e),!0;const n=Xe(e.nodeName);if(dt("uponSanitizeElement",e,{tagName:n,allowedTags:ce}),e.hasChildNodes()&&!ut(e.firstElementChild)&&(!ut(e.content)||!ut(e.content.firstElementChild))&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent))return rt(e),!0;if(!ce[n]||pe[n]){if(!pe[n]&&ft(n)){if(me.tagNameCheck instanceof RegExp&&E(me.tagNameCheck,n))return!1;if(me.tagNameCheck instanceof Function&&me.tagNameCheck(n))return!1}if(Ce&&!ve[n]){const t=j(e)||e.parentNode,n=Y(e)||e.childNodes;if(n&&t)for(let o=n.length-1;o>=0;--o)t.insertBefore(H(n[o],!0),W(e))}return rt(e),!0}return e instanceof s&&!at(e)?(rt(e),!0):"noscript"!==n&&"noembed"!==n||!E(/<\/no(script|embed)/i,e.innerHTML)?(Ee&&3===e.nodeType&&(t=e.textContent,t=T(t,ee," "),t=T(t,te," "),t=T(t,ne," "),e.textContent!==t&&(m(DOMPurify.removed,{element:e.cloneNode()}),e.textContent=t)),dt("afterSanitizeElements",e,null),!1):(rt(e),!0)},pt=function _isValidAttribute(e,t,n){if(ke&&("id"===t||"name"===t)&&(n in a||n in $e))return!1;if(Te&&!fe[t]&&E(oe,t));else if(he&&E(ae,t));else if(!ue[t]||fe[t]){if(!(ft(e)&&(me.tagNameCheck instanceof RegExp&&E(me.tagNameCheck,e)||me.tagNameCheck instanceof Function&&me.tagNameCheck(e))&&(me.attributeNameCheck instanceof RegExp&&E(me.attributeNameCheck,t)||me.attributeNameCheck instanceof Function&&me.attributeNameCheck(t))||"is"===t&&me.allowCustomizedBuiltInElements&&(me.tagNameCheck instanceof RegExp&&E(me.tagNameCheck,n)||me.tagNameCheck instanceof Function&&me.tagNameCheck(n))))return!1}else if(Pe[t]);else if(E(le,T(n,ie,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==g(n,"data:")||!Me[e])if(ge&&!E(re,T(n,ie,"")));else if(n)return!1;return!0},ft=function _basicCustomElementTest(e){return e.indexOf("-")>0},ht=function _sanitizeAttributes(e){let t,n,o,a;dt("beforeSanitizeAttributes",e,null);const{attributes:r}=e;if(!r)return;const i={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ue};for(a=r.length;a--;){t=r[a];const{name:l,namespaceURI:c}=t;if(n="value"===l?t.value:y(t.value),o=Xe(l),i.attrName=o,i.attrValue=n,i.keepAttr=!0,i.forceKeepAttr=void 0,dt("uponSanitizeAttribute",e,i),n=i.attrValue,i.forceKeepAttr)continue;if(it(l,e),!i.keepAttr)continue;if(!ye&&E(/\/>/i,n)){it(l,e);continue}Ee&&(n=T(n,ee," "),n=T(n,te," "),n=T(n,ne," "));const s=Xe(e.nodeName);if(pt(s,o,n)){if(!we||"id"!==o&&"name"!==o||(it(l,e),n=De+n),q&&"object"==typeof P&&"function"==typeof P.getAttributeType)if(c);else switch(P.getAttributeType(s,o)){case"TrustedHTML":n=q.createHTML(n);break;case"TrustedScriptURL":n=q.createScriptURL(n)}try{c?e.setAttributeNS(c,l,n):e.setAttribute(l,n),d(DOMPurify.removed)}catch(e){}}}dt("afterSanitizeAttributes",e,null)},Tt=function _sanitizeShadowDOM(e){let t;const n=ct(e);for(dt("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)dt("uponSanitizeShadowNode",t,null),mt(t)||(t.content instanceof i&&_sanitizeShadowDOM(t.content),ht(t));dt("afterSanitizeShadowDOM",e,null)};return DOMPurify.sanitize=function(e){let t,o,a,r,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Ge=!e,Ge&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ut(e)){if("function"!=typeof e.toString)throw S("toString is not a function");if("string"!=typeof(e=e.toString()))throw S("dirty is not a string, aborting")}if(!DOMPurify.isSupported)return e;if(_e||Je(l),DOMPurify.removed=[],"string"==typeof e&&(Le=!1),Le){if(e.nodeName){const t=Xe(e.nodeName);if(!ce[t]||pe[t])throw S("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)t=lt("\x3c!----\x3e"),o=t.ownerDocument.importNode(e,!0),1===o.nodeType&&"BODY"===o.nodeName||"HTML"===o.nodeName?t=o:t.appendChild(o);else{if(!be&&!Ee&&!Se&&-1===e.indexOf("<"))return q&&Re?q.createHTML(e):e;if(t=lt(e),!t)return be?null:Re?V:""}t&&Ae&&rt(t.firstChild);const s=ct(Le?e:t);for(;a=s.nextNode();)mt(a)||(a.content instanceof i&&Tt(a.content),ht(a));if(Le)return e;if(be){if(Ne)for(r=$.call(t.ownerDocument);t.firstChild;)r.appendChild(t.firstChild);else r=t;return(ue.shadowroot||ue.shadowrootmod)&&(r=J.call(n,r,!0)),r}let u=Se?t.outerHTML:t.innerHTML;return Se&&ce["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&E(z,t.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+u),Ee&&(u=T(u,ee," "),u=T(u,te," "),u=T(u,ne," ")),q&&Re?q.createHTML(u):u},DOMPurify.setConfig=function(e){Je(e),_e=!0},DOMPurify.clearConfig=function(){Ke=null,_e=!1},DOMPurify.isValidAttribute=function(e,t,n){Ke||Je({});const o=Xe(e),a=Xe(t);return pt(o,a,n)},DOMPurify.addHook=function(e,t){"function"==typeof t&&(Q[e]=Q[e]||[],m(Q[e],t))},DOMPurify.removeHook=function(e){if(Q[e])return d(Q[e])},DOMPurify.removeHooks=function(e){Q[e]&&(Q[e]=[])},DOMPurify.removeAllHooks=function(){Q={}},DOMPurify}return createDOMPurify()}()}}]);