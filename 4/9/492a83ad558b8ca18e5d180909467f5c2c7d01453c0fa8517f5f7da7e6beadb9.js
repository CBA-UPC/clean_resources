/*! For license information please see vendor~amp-route~article-route~9b1fde68.fd8a9b07.chunk.js.LICENSE */
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{"+S3v":function(e,t,n){"use strict";n.r(t);var r=n("qPzc"),i=n.n(r);t.default=i.a.default||i.a},"/vfh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=/<([a-zA-Z]+[0-9]?)/,i=/<head[^]*>/i,o=/<body[^]*>/i,a=s=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},l="object"===typeof window&&window.DOMParser;if("function"===typeof l){var c=new l;a=s=if("object"===typeof document&&document.implementation){var u=document.implementation.createHTMLDocument();a=var d,f="object"===typeof document&&document.createElement("template");f&&f.content&&(d=,t.default=function(e){var t,n,l=e.match(r),c=l&&l[1]?l[1].toLowerCase():"";switch(c){case"html":var u=s(e);if(!i.test(e))null===(t=null===(p=u.querySelector("head"))||void 0===p?void 0:p.parentNode)||void 0===t||t.removeChild(p);if(!o.test(e))null===(n=null===(p=u.querySelector("body"))||void 0===p?void 0:p.parentNode)||void 0===n||n.removeChild(p);return u.querySelectorAll("html");case"head":case"body":var f=a(e).querySelectorAll(c);return o.test(e)&&i.test(e)?f[0].parentNode.childNodes:f;default:return d?d(e):(p=a(e,"body").querySelector("body")).childNodes;var p}}},"1bJ0":function(e,t,n){(function(r){function i(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof r&&"env"in r&&(e=Object({NODE_ENV:"production",PUBLIC_URL:"",APPLICATION_ENV:"production",BRIGHTCOVE_ENV:"production",REACT_APP_ENVIRONMENT:"production",REACT_APP_SITE:"aje",REACT_APP_OPTA_SCRIPT_VERSION:"v14",REACT_APP_OPTA_STYLES_VERSION:"v30"}).DEBUG),e}(t=e.exports=n("FDyG")).log=t.formatArgs=t.save=t.load=i,t.useColors=t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=t.enable(i())}).call(this,n("5IsQ"))},"25o0":"2UUl":"3UjJ":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToDOM=t.domToReact=t.attributesToProps=t.Text=t.ProcessingInstruction=t.Element=t.Comment=void 0;var i=r(n("+S3v"));t.htmlToDOM=i.default;var o=r(n("vrqo"));t.attributesToProps=o.default;var a=r(n("8kGW"));t.domToReact=a.default;var s=n("iaeZ");Object.defineProperty(t,"Comment",{enumerable:!0,get:function(){return s.Comment}}),Object.defineProperty(t,"Element",{enumerable:!0,get:function(){return s.Element}}),Object.defineProperty(t,"ProcessingInstruction",{enumerable:!0,get:function(){return s.ProcessingInstruction}}),Object.defineProperty(t,"Text",{enumerable:!0,get:function(){return s.Text}});var l={lowerCaseAttributeNames:!1};t.default=function(e,t){if("string"!==typeof e)throw new TypeError("First argument must be a string");return e?(0,a.default)((0,i.default)(e,(null===t||void 0===t?void 0:t.htmlparser2)||l),t):[]}},"495I":"5ZLP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES=void 0,t.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],t.CASE_SENSITIVE_TAG_NAMES_MAP=t.CASE_SENSITIVE_TAG_NAMES.reduce((,{})},"5tWw":"6oRp":"8kGW":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n("mXGw"),o=r(n("vrqo")),a=n("9rKB"),s={cloneElement:i.cloneElement,createElement:i.createElement,isValidElement:i.isValidElement};.default=function e(t,n){for(var r=[],i="function"===typeof(null===n||void 0===n?void 0:n.replace),c=(null===n||void 0===n?void 0:n.transform)||a.returnFirstArg,u=(null===n||void 0===n?void 0:n.library)||s,d=u.cloneElement,f=u.createElement,p=u.isValidElement,h=t.length,y=0;y<h;y++){var v=t[y];if(i){var m=n.replace(v);if(p(m)){h>1&&(m=d(m,{key:m.key||y})),r.push(c(m,v,y));continue}}if("text"!==v.type){var g=v,b={};l(g)?((0,a.setStyleProp)(g.attribs.style,g.attribs),b=g.attribs):g.attribs&&(b=(0,o.default)(g.attribs,g.name));var w=void 0;switch(v.type){case"script":case"style":v.children[0]&&(b.dangerouslySetInnerHTML={__html:v.children[0].data});break;case"tag":"textarea"===v.name&&v.children[0]?b.defaultValue=v.children[0].data:v.children&&v.children.length&&(w=e(v.children,n));break;default:continue}h>1&&(b.key=y),r.push(c(f(v.name,b,w),v,y))}else{var S=!v.data.trim().length;if(S&&v.parent&&!(0,a.canTextBeChildOfNode)(v.parent))continue;if((null===n||void 0===n?void 0:n.trim)&&S)continue;r.push(c(v.data,v,y))}}return 1===r.length?r[0]:r}},"9rKB":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.returnFirstArg=t.canTextBeChildOfNode=t.ELEMENTS_WITH_NO_TEXT_CHILDREN=t.PRESERVE_CUSTOM_ATTRIBUTES=t.setStyleProp=t.isCustomComponent=void 0;var i=n("mXGw"),o=r(n("9vko")),a=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);t.isCustomComponent=function(e,t){return e.includes("-")?!a.has(e):Boolean(t&&"string"===typeof t.is)};var s={reactCompat:!0};t.setStyleProp=function(e,t){if("string"===typeof e)if(e.trim())try{t.style=(0,o.default)(e,s)}catch(n){t.style={}}else t.style={}},t.PRESERVE_CUSTOM_ATTRIBUTES=Number(i.version.split(".")[0])>=16,t.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);t.canTextBeChildOfNode=t.returnFirstArg=function(e){return e}},"9vko":BoRb:EN2N:EdTv:FDyG:GIzM:Ht6y:Hyru:JrpL:function(e,t,n){"use strict";var r=n("y4Xh");ar o={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((function(e){o[e]=new i(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((),["contentEditable","draggable","spellCheck","value"].forEach((function(e){o[e]=new i(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){o[e]=new i(e,2,!1,e,null,!1,!1)})),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach((function(e){o[e]=new i(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){o[e]=new i(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){o[e]=new i(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((),["rowSpan","start"].forEach((function(e){o[e]=new i(e,5,!1,e.toLowerCase(),null,!1,!1)}));var a=/[\-\:]([a-z])/g,s=["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((function(e){var t=e.replace(a,s);o[t]=new i(t,1,!1,e,null,!1,!1)})),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((function(e){var t=e.replace(a,s);o[t]=new i(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((),["tabIndex","crossOrigin"].forEach((function(e){o[e]=new i(e,1,!1,e.toLowerCase(),null,!1,!1)}));o.xlinkHref=new i("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(();var l=n("P2+j"),c=l.CAMELCASE,u=l.SAME,d=l.possibleStandardNames,f=RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),p=Object.keys(d).reduce((,{});t.BOOLEAN=3,t.BOOLEANISH_STRING=2,t.NUMERIC=5,t.OVERLOADED_BOOLEAN=4,t.POSITIVE_NUMERIC=6,t.RESERVED=0,t.STRING=1,t.getPropertyInfo=t.isCustomAttribute=f,t.possibleStandardNames=p},L6Am:function(e,t,n){"use strict";var r=n("mXGw"),i=n.n(r),o=n("KBju"),a=n.n(o),s=n("vHoy"),l=n.n(s);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=["catalogSearch","catalogSequence"],p=["adConfigId","applicationId","catalogSearch","catalogSequence","playlistId","playlistVideoId","videoId"],h=y=y.VERSION="1.2.0";var v={embedId:"default",embedType:"in-page",playerId:"default",Promise:l.a.Promise,refNodeInsert:"append"},m="video",g="video-js",b="in-page",w="iframe",S="append",O="prepend",k="before",E="after",x="replace",P=["catalogSearch","catalogSequence"],_="https://players.brightcove.net/",T=C=function(){return _},j=I=N=M=A=function(e){return function(e,t){var n=e.refNode,r=e.refNodeInsert,i=n.parentNode,o=M(e.embedType,e.embedOptions,t);if(r===k?i.insertBefore(o,n):r===E?i.insertBefore(o,n.nextElementSibling||null):r===x?i.replaceChild(o,n):r===O?n.insertBefore(o,n.firstChild||null):n.appendChild(o),e.embedOptions&&e.embedOptions.playlist){var s=e.embedOptions.playlist.legacy?"ul":"div",l=a.a.createElement(s);l.classList.add("vjs-playlist"),t.parentNode.insertBefore(l,t.nextElementSibling||null)}return e.refNode=null,t}(e,e,e.embedType===w?e):function(e){var t=e.embedOptions,n={adConfigId:"data-ad-config-id",applicationId:"data-application-id",catalogSearch:"data-catalog-search",catalogSequence:"data-catalog-sequence",deliveryConfigId:"data-delivery-config-id",playlistId:"data-playlist-id",playlistVideoId:"data-playlist-video-id",poster:"poster",videoId:"data-video-id"},r=t&&t.tagName||g,i=a.a.createElement(r);return Object.keys(n).filter(().forEach((),i.setAttribute("controls","controls"),i.classList.add("video-js"),i}(e)))},L=new l.a.Map,R=D=z=function(e){L.forEach(e)},H=W=V=/^([A-Za-z0-9]+)_([A-Za-z0-9]+)$/,F=B=U=function(){z((),D(),B(l.a.videojs),F().forEach((),Object.keys(l.a).filter(().forEach(()};(();var q=function(e){return"function"===typeof e},G=X=Y=function(e,t,n){e.refNode=function(e){return N(e)?e:"string"===typeof e?a.a.querySelector(e):null}(e.refNode),G(e);var r=e.refNode,i=e.refNodeInsert,o=r.parentNode,s=A(e);if(e.embedType!==w){if(H(e))return X(e,s,t,n);var l=a.a.createElement("script");l.onload=l.onerror=l.async=!0,l.charset="utf-8",l.src=T(e),i===x?o.appendChild(l):r.appendChild(l)}else t({type:w,ref:s})},J=Z=Z("getBaseUrl",(function(){return C()})),Z("setBaseUrl",(),Z("getUrl",(function(e){return T(e)})),Z("reset",(),[["EMBED_TAG_NAME_VIDEO",m],["EMBED_TAG_NAME_VIDEOJS",g],["EMBED_TYPE_IN_PAGE",b],["EMBED_TYPE_IFRAME",w],["REF_NODE_INSERT_APPEND",S],["REF_NODE_INSERT_PREPEND",O],["REF_NODE_INSERT_BEFORE",k],["REF_NODE_INSERT_AFTER",E],["REF_NODE_INSERT_REPLACE",x],["VERSION","1.8.0"]].forEach(();var $=["catalogSearch","catalogSequence","playlistId","playlistVideoId","videoId"],K=function(e){var t,n;=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.loadPlayer=o.disposePlayer=o.findPlaylistVideoIdIndex_=o.createPlaybackAPICallback_=o.updatePlayer=o.componentDidMount=function(){this.isMounted_=!0,this.loadPlayer()},o.componentDidUpdate=o.componentWillUnmount=o.render=function(){var e=c({className:"brightcove-react-player-loader"},this.props.attrs,{ref:this.setRefNode});return i.a.createElement("div",e)},r}(i.a.Component);t.a=K},L7zD:"M+Fh":function(e,t,n){"use strict";n.r(t);var r,i=n("ZseZ"),o=n("7v3J");!r||(r={}));r.Root,r.Text,r.Directive,r.Comment,r.Script,r.Style,r.Tag,r.CDATA,r.Doctype;var a=n("WdxN"),s=n("dtm3"),l=n("HVoI"),c=function(){eturn Object(o.a)(e,[{key:"parentNode",get:function(){return this.parent},set:function(e){this.parent=e}},{key:"previousSibling",get:function(){return this.prev},set:function(e){this.prev=e}},{key:"nextSibling",get:function(){return this.next},set:function(e){this.next=e}},{key:"cloneNode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return x(this,e)}}]),e}(),u=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this)).data=e,r}return Object(o.a)(n,[{key:"nodeValue",get:function(){return this.data},set:function(e){this.data=e}}]),n}(c),d=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).type=r.Text,e}return Object(o.a)(n,[{key:"nodeType",get:function(){return 3}}]),n}(u),f=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).type=r.Comment,e}return Object(o.a)(n,[{key:"nodeType",get:function(){return 8}}]),n}(u),p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e,o){var a;return Object(i.a)(this,n),(a=t.call(this,o)).name=e,a.type=r.Directive,a}return Object(o.a)(n,[{key:"nodeType",get:function(){return 1}}]),n}(u),h=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);eturn Object(o.a)(n,[{key:"firstChild",get:,{key:"lastChild",get:,{key:"childNodes",get:function(){return this.children},set:function(e){this.children=e}}]),n}(c),y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).type=r.CDATA,e}return Object(o.a)(n,[{key:"nodeType",get:function(){return 4}}]),n}(h),v=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);eturn Object(o.a)(n,[{key:"nodeType",get:function(){return 9}}]),n}(h),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e,o){var a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"script"===e?r.Script:"style"===e?r.Style:r.Tag;return Object(i.a)(this,n),(a=t.call(this,s)).name=e,a.attribs=o,a.type=l,a}return Object(o.a)(n,[{key:"nodeType",get:,{key:"tagName",get:set:function(e){this.name=e}},{key:"attributes",get:]),n}(h);unction b(e){return e.type===r.CDATA}function w(e){return e.type===r.Text}function S(e){return e.type===r.Comment}function O(e){return e.type===r.Directive}nction x(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(w(e))t=new d(e.data);else if(S(e))t=new f(e.data);else if(g(e)){var r=n?P(e.children):[],i=new m(e.name,Object(a.a)({},e.attribs),r);r.forEach((function(e){return e.parent=i})),null!=e.namespace&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=Object(a.a)({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=Object(a.a)({},e["x-attribsPrefix"])),t=i}else if(b(e)){var o=n?P(e.children):[],s=new y(o);o.forEach((function(e){return e.parent=s})),t=s}else if(k(e)){var l=n?P(e.children):[],c=new v(l);l.forEach((function(e){return e.parent=c})),e["x-mode"]&&(c["x-mode"]=e["x-mode"]),t=c}else{if(!O(e))throw new Error("Not implemented yet: ".concat(e.type));var u=new p(e.name,e.data);null!=e["x-name"]&&(u["x-name"]=e["x-name"],u["x-publicId"]=e["x-publicId"],u["x-systemId"]=e["x-systemId"]),t=u}return t.startIndex=e.startIndex,t.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(t.sourceCodeLocation=e.sourceCodeLocation),t}.d(t,"DomHandler",(function(){return T})),n.d(t,"Node",(function(){return c})),n.d(t,"DataNode",(function(){return u})),n.d(t,"Text",(function(){return d})),n.d(t,"Comment",(function(){return f})),n.d(t,"ProcessingInstruction",(function(){return p})),n.d(t,"NodeWithChildren",(function(){return h})),n.d(t,"CDATA",(function(){return y})),n.d(t,"Document",(function(){return v})),n.d(t,"Element",(function(){return m})),n.d(t,"isTag",(function(){return g})),n.d(t,"isCDATA",(function(){return b})),n.d(t,"isText",(function(){return w})),n.d(t,"isComment",(function(){return S})),n.d(t,"isDirective",(function(){return O})),n.d(t,"isDocument",(function(){return k})),n.d(t,"hasChildren",(function(){return E})),n.d(t,"cloneNode",(function(){return x}));var _={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},T=function(){function e(t,n,r){Object(i.a)(this,e),this.dom=[],this.root=new v(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"===typeof n&&(r=n,n=_),"object"===typeof t&&(n=t,t=void 0),this.callback=null!==t&&void 0!==t?t:null,this.options=null!==n&&void 0!==n?n:_,this.elementCB=null!==r&&void 0!==r?r:null}return Object(o.a)(e,[{key:"onparserinit",value:function(e){this.parser=e}},{key:"onreset",value:function(){this.dom=[],this.root=new v(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null}},{key:"onend",value:function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))}},{key:"onerror",value:function(e){this.handleCallback(e)}},{key:"onclosetag",value:function(){this.lastNode=null;var e=this.tagStack.pop();this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)}},{key:"onopentag",value:function(e,t){var n=this.options.xmlMode?r.Tag:void 0,i=new m(e,t,void 0,n);this.addNode(i),this.tagStack.push(i)}},{key:"ontext",value:function(e){var t=this.lastNode;if(t&&t.type===r.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex);else{var n=new d(e);this.addNode(n),this.lastNode=n}}},{key:"oncomment",value:function(e){if(this.lastNode&&this.lastNode.type===r.Comment)this.lastNode.data+=e;else{var t=new f(e);this.addNode(t),this.lastNode=t}}},{key:"oncommentend",value:function(){this.lastNode=null}},{key:"oncdatastart",value:function(){var e=new d(""),t=new y([e]);this.addNode(t),e.parent=t,this.lastNode=e}},{key:"oncdataend",value:function(){this.lastNode=null}},{key:"onprocessinginstruction",value:function(e,t){var n=new p(e,t);this.addNode(n)}},{key:"handleCallback",value:function(e){if("function"===typeof this.callback)this.callback(e,this.dom);else if(e)throw e}},{key:"addNode",value:function(e){var t=this.tagStack[this.tagStack.length-1],n=t.children[t.children.length-1];this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),n&&(e.prev=n,n.next=e),e.parent=t,this.lastNode=null}}]),e}();t.default=T},N2lv:function(e,t,n){"use strict";var r=n("W0B4"),i=n.n(r),o=n("mXGw"),a=n.n(o),s=n("OoM2"),l=n.n(s),c=n("ZvjG"),u=n.n(c);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}nction v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}unction w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ar O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,e);var t,n,r,i=h(o);eturn t=o,(n=[{key:"componentDidMount",value:,{key:"componentDidUpdate",value:,{key:"componentWillUnmount",value:,{key:"render",value:])&&f(t.prototype,n),r&&f(t,r),o}(a.a.Component);w(O,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),O.propTypes={videoId:i.a.string,id:i.a.string,className:i.a.string,containerClassName:i.a.string,opts:i.a.objectOf(i.a.any),onReady:i.a.func,onError:i.a.func,onPlay:i.a.func,onPause:i.a.func,onEnd:i.a.func,onStateChange:i.a.func,onPlaybackRateChange:i.a.func,onPlaybackQualityChange:i.a.func},O.defaultProps={videoId:null,id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:,t.a=O},NgIc:O4Al:function(e,t,n){"use strict";var r;!function(i){if("function"!==typeof o){var o=o.nonNative=!0}var a=o("plaintext"),s=o("html"),l=o("comment"),c=/<(\w*)>/g,u=/<\/?([^\s\/>]+)/;unction f(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"===typeof e)for(;t=c.exec(e);)n.add(t[1]);else o.nonNative||"function"!==typeof e[o.iterator]?"function"===typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:a,tag_buffer:"",depth:0,in_quote_char:""}}function p(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");for(var n=t.allowable_tags,r=t.tag_replacement,i=t.state,o=t.tag_buffer,c=t.depth,u=t.in_quote_char,d="",f=0,p=e.length;f<p;f++){var y=e[f];if(i===a)switch(y){case"<":i=s,o+=y;break;default:d+=y}else if(i===s)switch(y){case"<":if(u)break;c++;break;case">":if(u)break;if(c){c--;break}u="",i=a,o+=">",n.has(h(o))?d+=o:d+=r,o="";break;case'"':case"'":u=y===u?"":u||y,o+=y;break;case"-":"<!-"===o&&(i=l),o+=y;break;case" ":case"\n":if("<"===o){i=a,d+="< ",o="";break}o+=y;break;default:o+=y}else if(i===l)switch(y){case">":"--"==o.slice(-2)&&(i=a),o="";break;default:o+=y}}return t.state=i,t.tag_buffer=o,t.depth=c,t.in_quote_char=u,d}.init_streaming_mode=void 0===(r=function(){return d}.call(t,n,t,e))||(e.exports=r)}()},OoM2:"P2+j":RJlO:function(e,t,n){"use strict";var r=n("3UjJ"),i=n.n(r);t.a=i.a.default||i.a},ZvjG:cXzP:"drO/":fVwV:iWpb:iXzu:iaeZ:function(e,t,n){"use strict";n.r(t);var r,i=n("ZseZ"),o=n("7v3J");!function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(r||(r={}));r.Root,r.Text,r.Directive,r.Comment,r.Script,r.Style,r.Tag,r.CDATA,r.Doctype;var a=n("WdxN"),s=n("dtm3"),l=n("HVoI"),c=function(){function e(){Object(i.a)(this,e),this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object(o.a)(e,[{key:"parentNode",get:function(){return this.parent},set:function(e){this.parent=e}},{key:"previousSibling",get:function(){return this.prev},set:function(e){this.prev=e}},{key:"nextSibling",get:function(){return this.next},set:function(e){this.next=e}},{key:"cloneNode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return x(this,e)}}]),e}(),u=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this)).data=e,r}return Object(o.a)(n,[{key:"nodeValue",get:function(){return this.data},set:function(e){this.data=e}}]),n}(c),d=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).type=r.Text,e}return Object(o.a)(n,[{key:"nodeType",get:function(){return 3}}]),n}(u),f=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).type=r.Comment,e}return Object(o.a)(n,[{key:"nodeType",get:function(){return 8}}]),n}(u),p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e,o){var a;return Object(i.a)(this,n),(a=t.call(this,o)).name=e,a.type=r.Directive,a}return Object(o.a)(n,[{key:"nodeType",get:function(){return 1}}]),n}(u),h=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this)).children=e,r}return Object(o.a)(n,[{key:"firstChild",get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null}},{key:"lastChild",get:function(){return this.children.length>0?this.children[this.children.length-1]:null}},{key:"childNodes",get:function(){return this.children},set:function(e){this.children=e}}]),n}(c),y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).type=r.CDATA,e}return Object(o.a)(n,[{key:"nodeType",get:function(){return 4}}]),n}(h),v=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).type=r.Root,e}return Object(o.a)(n,[{key:"nodeType",get:function(){return 9}}]),n}(h),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e,o){var a,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"script"===e?r.Script:"style"===e?r.Style:r.Tag;return Object(i.a)(this,n),(a=t.call(this,s)).name=e,a.attribs=o,a.type=l,a}return Object(o.a)(n,[{key:"nodeType",get:function(){return 1}},{key:"tagName",get:function(){return this.name},set:function(e){this.name=e}},{key:"attributes",get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var n,r;return{name:t,value:e.attribs[t],namespace:null===(n=e["x-attribsNamespace"])||void 0===n?void 0:n[t],prefix:null===(r=e["x-attribsPrefix"])||void 0===r?void 0:r[t]}}))}}]),n}(h);function g(e){return(t=e).type===r.Tag||t.type===r.Script||t.type===r.Style;var t}function b(e){return e.type===r.CDATA}function w(e){return e.type===r.Text}function S(e){return e.type===r.Comment}function O(e){return e.type===r.Directive}function k(e){return e.type===r.Root}function E(e){return Object.prototype.hasOwnProperty.call(e,"children")}function x(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(w(e))t=new d(e.data);else if(S(e))t=new f(e.data);else if(g(e)){var r=n?P(e.children):[],i=new m(e.name,Object(a.a)({},e.attribs),r);r.forEach((function(e){return e.parent=i})),null!=e.namespace&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=Object(a.a)({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=Object(a.a)({},e["x-attribsPrefix"])),t=i}else if(b(e)){var o=n?P(e.children):[],s=new y(o);o.forEach((function(e){return e.parent=s})),t=s}else if(k(e)){var l=n?P(e.children):[],c=new v(l);l.forEach((function(e){return e.parent=c})),e["x-mode"]&&(c["x-mode"]=e["x-mode"]),t=c}else{if(!O(e))throw new Error("Not implemented yet: ".concat(e.type));var u=new p(e.name,e.data);null!=e["x-name"]&&(u["x-name"]=e["x-name"],u["x-publicId"]=e["x-publicId"],u["x-systemId"]=e["x-systemId"]),t=u}return t.startIndex=e.startIndex,t.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(t.sourceCodeLocation=e.sourceCodeLocation),t}function P(e){for(var t=e.map((function(e){return x(e,!0)})),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}n.d(t,"DomHandler",(function(){return T})),n.d(t,"Node",(function(){return c})),n.d(t,"DataNode",(function(){return u})),n.d(t,"Text",(function(){return d})),n.d(t,"Comment",(function(){return f})),n.d(t,"ProcessingInstruction",(function(){return p})),n.d(t,"NodeWithChildren",(function(){return h})),n.d(t,"CDATA",(function(){return y})),n.d(t,"Document",(function(){return v})),n.d(t,"Element",(function(){return m})),n.d(t,"isTag",(function(){return g})),n.d(t,"isCDATA",(function(){return b})),n.d(t,"isText",(function(){return w})),n.d(t,"isComment",(function(){return S})),n.d(t,"isDirective",(function(){return O})),n.d(t,"isDocument",(function(){return k})),n.d(t,"hasChildren",(function(){return E})),n.d(t,"cloneNode",();var _={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},T=function(){function e(t,n,r){Object(i.a)(this,e),this.dom=[],this.root=new v(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,"function"===typeof n&&(r=n,n=_),"object"===typeof t&&(n=t,t=void 0),this.callback=null!==t&&void 0!==t?t:null,this.options=null!==n&&void 0!==n?n:_,this.elementCB=null!==r&&void 0!==r?r:null}return Object(o.a)(e,[{key:"onparserinit",value:,{key:"onreset",value:,{key:"onend",value:,{key:"onerror",value:,{key:"onclosetag",value:,{key:"onopentag",value:,{key:"ontext",value:function(e){var t=this.lastNode;if(t&&t.type===r.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex);else{var n=new d(e);this.addNode(n),this.lastNode=n}}},{key:"oncomment",value:function(e){if(this.lastNode&&this.lastNode.type===r.Comment)this.lastNode.data+=e;else{var t=new f(e);this.addNode(t),this.lastNode=t}}},{key:"oncommentend",value:function(){this.lastNode=null}},{key:"oncdatastart",value:,{key:"oncdataend",value:,{key:"onprocessinginstruction",value:,{key:"handleCallback",value:,{key:"addNode",value:]),e}();t.default=T},j8of:jFWS:jffb:kd9Q:lUS9:leoS:function(e,t,n){"use strict";n.r(t);var r=n("GIzM"),i=n.n(r);t.default=i.a.default||i.a},pfcB:qPzc:"s+Xr":tJXC:ubt0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.camelCase=void 0;var r=/^--[a-zA-Z0-9-]+$/,i=/-([a-z])/g,o=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,l=c=t.camelCase=,vVZ1:vrqo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("JrpL"),i=n("9rKB"),o=["checked","value"],a=["input","select","textarea"],s={reset:!0,submit:!0};.default=,w24S:wMKW:zL1T:]);
//# sourceMappingURL=vendor~amp-route~article-route~9b1fde68.fd8a9b07.chunk.js.map